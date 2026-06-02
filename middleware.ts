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

function resolveLocale(req: NextRequest): Locale {
  // 1. Explicit choice remembered in a cookie
  const cookie = req.cookies.get(COOKIE)?.value;
  if (cookie && isLocale(cookie)) return cookie;

  // 2. Geo of the visitor (set by the host's edge — Vercel/Netlify/Cloudflare)
  const country =
    req.headers.get("x-vercel-ip-country") ||
    req.headers.get("x-country") ||
    req.headers.get("cf-ipcountry");
  const byGeo = localeFromCountry(country);
  if (byGeo) return byGeo;

  // 3. Browser language preference
  const byLang = localeFromAcceptLanguage(req.headers.get("accept-language"));
  if (byLang) return byLang;

  // 4. Fall back to English
  return defaultLocale;
}

export function middleware(req: NextRequest) {
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
  const locale = resolveLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set(COOKIE, locale, { path: "/", maxAge: ONE_YEAR });
  return res;
}

export const config = {
  // Run on everything except API routes, Next internals and static assets.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|og.svg|robots.txt|sitemap.xml).*)",
  ],
};
