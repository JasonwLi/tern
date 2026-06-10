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

const COUNTRY_RE = /^[A-Z]{2}$/;

async function fetchJson(
  url: string,
  pick: (d: Record<string, unknown>) => unknown
): Promise<string> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2500);
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { "user-agent": "tern-geo/1.0" },
    });
    clearTimeout(timer);
    if (!res.ok) return `err:http${res.status}`;
    const data = (await res.json()) as Record<string, unknown>;
    const code = pick(data);
    return typeof code === "string" && code ? code.toUpperCase() : "err:nocode";
  } catch (e) {
    return `err:${(e as Error).name || "fetch"}`;
  }
}

// Look up the visitor's country code from their IP (only on first visit, when no
// CDN geo header is present). Uses country.is (datacenter-friendly, free, https)
// with ipwho.is as a fallback. Returns a 2-letter code or an "err:*" marker.
async function countryFromIp(ip: string): Promise<string> {
  const primary = await fetchJson(`https://api.country.is/${ip}`, (d) => d.country);
  if (COUNTRY_RE.test(primary)) return primary;
  const fallback = await fetchJson(`https://ipwho.is/${ip}`, (d) => d.country_code);
  return COUNTRY_RE.test(fallback) ? fallback : primary;
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
    if (COUNTRY_RE.test(country)) {
      const byIp = localeFromCountry(country);
      if (byIp) return { locale: byIp, source: `ip:${country}` };
      // Valid country but no localized site for it → use browser language.
      const byLang = localeFromAcceptLanguage(req.headers.get("accept-language"));
      return { locale: byLang ?? defaultLocale, source: `ip:${country}->lang` };
    }
    // Lookup failed — record why, then fall through to Accept-Language.
    const byLang = localeFromAcceptLanguage(req.headers.get("accept-language"));
    return { locale: byLang ?? defaultLocale, source: `ip:${country}` };
  }

  // 4. Browser language preference
  const byLang = localeFromAcceptLanguage(req.headers.get("accept-language"));
  if (byLang) return { locale: byLang, source: "lang" };

  // 5. Fall back to English
  return { locale: defaultLocale, source: "default" };
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathLocale = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  // Already on a localized path — keep the cookie in sync and cap CDN caching
  // (Next's default year-long s-maxage would freeze pages once a CDN sits in front).
  if (pathLocale) {
    const res = NextResponse.next();
    if (req.cookies.get(COOKIE)?.value !== pathLocale) {
      res.cookies.set(COOKIE, pathLocale, { path: "/", maxAge: ONE_YEAR });
    }
    res.headers.set(
      "Cache-Control",
      "public, max-age=60, s-maxage=300, stale-while-revalidate=86400"
    );
    return res;
  }

  // No locale in the path — auto-detect and redirect.
  // 308 (permanent) so crawlers consolidate on the locale URLs; no-store so no
  // CDN/browser ever caches one visitor's locale redirect for everyone else.
  const { locale, source } = await resolveLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url, 308);
  res.cookies.set(COOKIE, locale, { path: "/", maxAge: ONE_YEAR });
  res.headers.set("Cache-Control", "no-store");
  res.headers.set("x-tern-geo", source); // diagnostic: how the locale was chosen
  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|og/|favicon.ico|icon.svg|apple-touch-icon.png|logo-512.png|feed.xml|og.svg|og.png|og-en.png|og-es.png|og-ja.png|og-ko.png|og-zh-TW.png|robots.txt|sitemap.xml).*)",
  ],
};
