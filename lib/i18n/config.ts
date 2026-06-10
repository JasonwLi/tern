export const locales = ["en", "es", "de", "fr", "it", "ja", "ko", "zh-TW"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Native names + a representative flag for the language switcher.
export const localeMeta: Record<Locale, { label: string; flag: string; htmlLang: string }> = {
  en: { label: "English", flag: "🇬🇧", htmlLang: "en" },
  es: { label: "Español", flag: "🌎", htmlLang: "es" },
  de: { label: "Deutsch", flag: "🇩🇪", htmlLang: "de" },
  fr: { label: "Français", flag: "🇫🇷", htmlLang: "fr" },
  it: { label: "Italiano", flag: "🇮🇹", htmlLang: "it" },
  ja: { label: "日本語", flag: "🇯🇵", htmlLang: "ja" },
  ko: { label: "한국어", flag: "🇰🇷", htmlLang: "ko" },
  "zh-TW": { label: "繁體中文", flag: "🇹🇼", htmlLang: "zh-Hant-TW" },
};

// OpenGraph locale codes per language (for SEO).
export const ogLocale: Record<Locale, string> = {
  en: "en_AU",
  es: "es_419",
  de: "de_DE",
  fr: "fr_FR",
  it: "it_IT",
  ja: "ja_JP",
  ko: "ko_KR",
  "zh-TW": "zh_TW",
};

// Map an ISO country code (from geo headers) to the best-fit locale.
const countryToLocale: Record<string, Locale> = {
  // Japanese
  JP: "ja",
  // Korean
  KR: "ko",
  // German / French / Italian source markets (CH/BE/LU left to
  // Accept-Language — they're multilingual)
  DE: "de", AT: "de",
  FR: "fr",
  IT: "it", SM: "it",
  // Traditional Chinese
  TW: "zh-TW",
  HK: "zh-TW",
  MO: "zh-TW",
  // Spanish-speaking (Latin America + Spain)
  ES: "es", MX: "es", AR: "es", CL: "es", CO: "es", PE: "es", UY: "es",
  VE: "es", EC: "es", BO: "es", PY: "es", CR: "es", PA: "es", GT: "es",
  DO: "es", HN: "es", NI: "es", SV: "es", CU: "es",
};

export function localeFromCountry(country?: string | null): Locale | null {
  if (!country) return null;
  return countryToLocale[country.toUpperCase()] ?? null;
}

// Parse an Accept-Language header into our best-fit locale.
export function localeFromAcceptLanguage(header?: string | null): Locale | null {
  if (!header) return null;
  const tags = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of tags) {
    if (tag.startsWith("ja")) return "ja";
    if (tag.startsWith("ko")) return "ko";
    if (tag.startsWith("zh")) return "zh-TW"; // we only ship Traditional
    if (tag.startsWith("es")) return "es";
    if (tag.startsWith("de")) return "de";
    if (tag.startsWith("fr")) return "fr";
    if (tag.startsWith("it")) return "it";
    if (tag.startsWith("en")) return "en";
  }
  return null;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
