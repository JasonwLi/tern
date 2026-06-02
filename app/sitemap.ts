import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { guides, posts, availableLocales } from "@/lib/content";

const SITE_URL = "https://tern.app";

function altsAll(path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${SITE_URL}/${l}${path}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-01");
  const entries: MetadataRoute.Sitemap = [];

  // Marketing + about + section indexes
  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: altsAll("") },
    });
    for (const p of ["/about", "/guides", "/blog"]) {
      entries.push({
        url: `${SITE_URL}/${locale}${p}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: altsAll(p) },
      });
    }
  }

  // Guides + blog posts (per available locale, with hreflang to siblings)
  const articles = [
    ...guides.map((a) => ({ a, base: "/guides" })),
    ...posts.map((a) => ({ a, base: "/blog" })),
  ];
  for (const { a, base } of articles) {
    const langs: Record<string, string> = {};
    for (const l of availableLocales(a)) langs[l] = `${SITE_URL}/${l}${base}/${a.slug}`;
    for (const locale of availableLocales(a)) {
      entries.push({
        url: `${SITE_URL}/${locale}${base}/${a.slug}`,
        lastModified: a.date ? new Date(a.date) : now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: langs },
      });
    }
  }

  return entries;
}
