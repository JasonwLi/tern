import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/lib/i18n/config";

// Per-article OG image if it's been generated (scripts/gen-article-og.ts),
// otherwise the locale-generic brand image. Resolved at build time (SSG).
export function articleOgImage(slug: string, locale: Locale): string {
  const rel = `/og/${slug}.${locale}.png`;
  try {
    if (fs.existsSync(path.join(process.cwd(), "public", rel))) return rel;
  } catch {
    // fs unavailable — fall through to brand image
  }
  return `/og-${locale}.png`;
}
