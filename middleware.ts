import { NextRequest, NextResponse } from "next/server";
import {
  locales,
  defaultLocale,
  isLocale,
  localeFromCountry,
  localeFromAcceptLanguage,
  type Locale,
} from "@/lib/i18n/config";

const COOKIE = "NEXT_LOCALE";
const ONE_YEAR = 60 * 60 * 24 * 365;

function clientIp(req: NextRequest): string | null {
  const fwd = req.headers.get("x-forwarded-for");
  const ip = fwd?.split(",")[0]?.trim() || req.headers.get("x-real-ip")?.trim();
  if (!ip) return null;
  // Skip private / loopback ranges — no useful geo.
  if (
    ip === "127.0.0.1" ||
    ip === "::1" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("172.16.") ||
    ip.startsWith("fc") ||
    ip.startsWith("fd")
  ) {
    return null;
  }
  return ip;
}

// Look up the visitor's country code from their IP (only used on first visit,
// when no CDN geo header is present). Fails open: returns null on error/timeout.
async function countryFromIp(ip: string): Promise<string | null> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 1500);
    const res = await fetch(`https://ipwho.is/${ip}?fields=country_code`, {
      signal: ctrl.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = (await res.json()) as { country_code?: string };
    return data.country_code ?? null;
  } catch {
    return null;
  }
}

interface Resolved {
  locale: Locale;
  source: string; // for the x-tern-geo diagnostic header
}

async function resolveLocale(req: NextRequest): Promise<Resolved> {
  // 1. Explicit choice remembered in a cookie
  const cookie = req.cookies.get(COOKIE)?.value;
  if (cookie && isLocale(cookie)) return { locale: cookie, source: "cookie" };

  // 2. Geo header set by a CDN/edge (Cloudflare, Vercel, Netlify) — instant, free
  const headerCountry =
    req.headers.get("x-vercel-ip-country") ||
    req.headers.get("cf-ipcountry") ||
    req.headers.get("x-country");
  const byHeader = localeFromCountry(headerCountry);
  if (byHeader) return { locale: byHeader, source: `header:${headerCountry}` };

  // 3. IP geolocation lookup (Railway has no geo header)
  const ip = clientIp(req);
  if (ip) {
    const country = await countryFromIp(ip);
    const byIp = localeFromCountry(country);
    if (byIp) return { locale: byIp, source: `ip:${ip}:${country}` };
    if (country) {
      // Looked up successfully but country has no localized site → fall through.
      const byLang = localeFromAcceptLanguage(req.headers.get("accept-language"));
      return { locale: byLang ?? defaultLocale, source: `ip:${ip}:${country}->lang` };
    }
  }

  // 4. Browser language preference
  const byLang = localeFromAcceptLanguage(req.headers.get("accept-language"));
  if (byLang) return { locale: byLang, source: "lang" };

  // 5. Fall back to English
  return { locale: defaultLocale, source: ip ? `ip:${ip}:none` : "default" };
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathLocale = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  // Already on a localized path — just keep the cookie in sync.
  if (pathLocale) {
    const res = NextResponse.next();
    if (req.cookies.get(COOKIE)?.value !== pathLocale) {
      res.cookies.set(COOKIE, pathLocale, { path: "/", maxAge: ONE_YEAR });
    }
    return res;
  }

  // No locale in the path — auto-detect and redirect.
  const { locale, source } = await resolveLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set(COOKIE, locale, { path: "/", maxAge: ONE_YEAR });
  res.headers.set("x-tern-geo", source); // diagnostic: how the locale was chosen
  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|og.svg|og.png|og-en.png|og-es.png|og-ja.png|og-ko.png|og-zh-TW.png|robots.txt|sitemap.xml).*)",
  ],
};
