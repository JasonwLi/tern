import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Article } from "@/lib/content/types";
import { content } from "@/lib/content";
import { contentUi } from "@/lib/content/ui";

export default function ArticleCard({
  article,
  locale,
}: {
  article: Article;
  locale: Locale;
}) {
  const c = content(article, locale);
  const ui = contentUi[locale];
  const base = article.kind === "guide" ? "guides" : "blog";
  const href = `/${locale}/${base}/${article.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-card border-2 border-ink/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-grape-300 hover:shadow-xl hover:shadow-grape-500/10"
    >
      <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${article.accent} text-2xl`}>
        <span aria-hidden>{article.emoji}</span>
      </div>
      <h3 className="font-display text-xl font-bold text-ink">{c.title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-soft">{c.excerpt}</p>
      <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-grape-500">
        <span>{ui.readMore} →</span>
        <span className="text-ink-soft/60">·</span>
        <span className="text-ink-soft/60">{ui.minRead.replace("{n}", String(article.readMinutes))}</span>
      </div>
    </Link>
  );
}
