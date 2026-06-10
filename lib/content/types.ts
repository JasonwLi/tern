import type { Locale } from "@/lib/i18n/config";

export interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ArticleLocale {
  title: string;        // H1 + <title>
  description: string;  // meta description
  excerpt: string;      // index card summary
  sections: ArticleSection[];
  faq?: { q: string; a: string }[];
}

export interface ArticleSource {
  label: string; // e.g. "Australian Taxation Office (ATO)"
  url: string;   // official/authoritative source URL
}

export interface Article {
  slug: string;
  kind: "guide" | "post";
  date?: string;        // ISO date, posts only
  author?: string;
  emoji: string;
  accent: string;       // tailwind bg-* class for the card
  readMinutes: number;
  // Authoritative sources, shown as a list at the foot of the article.
  sources?: ArticleSource[];
  // Curated related-article slugs (may cross guides/blog); falls back to
  // same-kind neighbours when absent.
  related?: string[];
  // English is always present; other locales are filled in by translation.
  i18n: Partial<Record<Locale, ArticleLocale>> & { en: ArticleLocale };
}
