import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { guides, content, hasLocale } from "@/lib/content";
import { contentUi } from "@/lib/content/ui";

// Homepage teaser: deep-links the top guides so the money pages get
// crawl priority and link equity from the strongest page on the site.
export default function GuidesTeaser({ locale }: { locale: Locale }) {
  const ui = contentUi[locale];
  const top = guides.filter((g) => hasLocale(g, locale)).slice(0, 3);
  if (top.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">
          {ui.guidesNav}
        </p>
        <h2 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
          {ui.guidesTitle}
        </h2>
        <p className="mt-4 text-lg text-ink-soft">{ui.guidesIntro}</p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {top.map((g) => {
          const c = content(g, locale);
          return (
            <Link
              key={g.slug}
              href={`/${locale}/guides/${g.slug}`}
              className="group flex flex-col rounded-card border-2 border-ink/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-grape-300 hover:shadow-xl hover:shadow-grape-500/10"
            >
              <div className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl ${g.accent} text-xl`}>
                <span aria-hidden>{g.emoji}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{c.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-grape-500">
                {ui.readMore} →
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          href={`/${locale}/guides`}
          className="inline-block rounded-full border-2 border-ink/10 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-grape-400 hover:text-grape-600"
        >
          {ui.backToGuides} →
        </Link>
      </div>
    </section>
  );
}
