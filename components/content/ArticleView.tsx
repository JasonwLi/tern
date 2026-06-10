import Link from "next/link";
import { localeMeta, type Locale } from "@/lib/i18n/config";
import type { Article } from "@/lib/content/types";
import { content, guides, posts, hasLocale } from "@/lib/content";
import { contentUi } from "@/lib/content/ui";
import { SITE_URL } from "@/lib/site";

// Minimal inline-markdown links in article copy: [anchor](href).
// "~/" hrefs are locale-relative — "~/blog/what-is-a-tfn" → "/ja/blog/what-is-a-tfn".
function renderInline(text: string, locale: Locale): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)\s]+\))/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (!m) return part;
    const href = m[2].startsWith("~/") ? `/${locale}/${m[2].slice(2)}` : m[2];
    const external = href.startsWith("http");
    return (
      <Link
        key={i}
        href={href}
        className="font-semibold text-grape-600 underline underline-offset-2 hover:text-grape-700"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {m[1]}
      </Link>
    );
  });
}

export default function ArticleView({
  article,
  locale,
}: {
  article: Article;
  locale: Locale;
}) {
  const c = content(article, locale);
  const ui = contentUi[locale];
  const isGuide = article.kind === "guide";
  const base = isGuide ? "guides" : "blog";
  const indexHref = `/${locale}/${base}`;
  const url = `${SITE_URL}/${locale}/${base}/${article.slug}`;

  const related = (isGuide ? guides : posts)
    .filter((a) => a.slug !== article.slug && hasLocale(a, locale))
    .slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": isGuide ? "Article" : "BlogPosting",
    headline: c.title,
    description: c.description,
    inLanguage: localeMeta[locale].htmlLang,
    ...(article.date ? { datePublished: article.date, dateModified: article.date } : {}),
    author: { "@type": "Organization", name: article.author ?? "Tern" },
    publisher: { "@type": "Organization", name: "Tern" },
    mainEntityOfPage: url,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.home, item: `${SITE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: isGuide ? ui.guidesNav : ui.blogNav, item: `${SITE_URL}${indexHref}` },
      { "@type": "ListItem", position: 3, name: c.title, item: url },
    ],
  };

  const faqLd = c.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      {/* breadcrumb */}
      <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink-soft" aria-label="Breadcrumb">
        <Link href={`/${locale}`} className="hover:text-grape-500">{ui.home}</Link>
        <span aria-hidden>/</span>
        <Link href={indexHref} className="hover:text-grape-500">{isGuide ? ui.guidesNav : ui.blogNav}</Link>
      </nav>

      {/* header */}
      <div className={`mb-6 inline-grid h-16 w-16 place-items-center rounded-2xl ${article.accent} text-3xl`}>
        <span aria-hidden>{article.emoji}</span>
      </div>
      <h1 className="text-balance font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
        {c.title}
      </h1>
      <div className="mt-4 flex items-center gap-3 text-sm text-ink-soft/70">
        {article.date && <span>{formatDate(article.date, locale)}</span>}
        {article.date && <span aria-hidden>·</span>}
        <span>{ui.minRead.replace("{n}", String(article.readMinutes))}</span>
      </div>

      {/* body */}
      <div className="mt-10">
        {c.sections.map((s, i) => (
          <section key={i}>
            {s.heading && (
              <h2 className="mt-10 mb-3 font-display text-2xl font-bold text-ink">{s.heading}</h2>
            )}
            {s.paragraphs?.map((p, j) => (
              <p key={j} className="mb-4 text-lg leading-relaxed text-ink-soft">{renderInline(p, locale)}</p>
            ))}
            {s.bullets && (
              <ul className="mb-4 space-y-2">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-grape-500" aria-hidden />
                    <span>{renderInline(b, locale)}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* FAQ */}
      {c.faq?.length ? (
        <div className="mt-12 space-y-3">
          {c.faq.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border-2 border-ink/5 bg-white p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold text-ink">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-grape-50 text-grape-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      ) : null}

      {/* CTA */}
      <div className="mt-14 overflow-hidden rounded-card bg-grape-500 p-8 text-center text-white">
        <h2 className="font-display text-2xl font-bold">{ui.ctaTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-white/80">{ui.ctaText}</p>
        <a
          href={`/${locale}#waitlist`}
          className="mt-5 inline-block rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5"
        >
          {ui.ctaButton}
        </a>
      </div>

      {/* Sources */}
      {article.sources?.length ? (
        <div className="mt-10 border-t border-ink/10 pt-8">
          <h2 className="mb-3 font-display text-lg font-bold text-ink">{ui.sourcesTitle}</h2>
          <ul className="space-y-1">
            {article.sources.map((src, i) => (
              <li key={i}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-grape-500 hover:text-grape-700 underline underline-offset-2"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Disclaimer */}
      <p className="mt-6 text-xs leading-relaxed text-ink-soft/60">
        {ui.disclaimer}
      </p>

      {/* related */}
      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="mb-5 font-display text-xl font-bold text-ink">{ui.related}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((r) => {
              const rc = content(r, locale);
              return (
                <Link
                  key={r.slug}
                  href={`/${locale}/${base}/${r.slug}`}
                  className="flex items-start gap-3 rounded-2xl border-2 border-ink/5 bg-white p-5 transition hover:border-grape-300"
                >
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${r.accent} text-lg`} aria-hidden>
                    {r.emoji}
                  </span>
                  <span className="font-display text-sm font-bold text-ink">{rc.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-12">
        <Link href={indexHref} className="text-sm font-semibold text-grape-500 hover:text-grape-600">
          ← {isGuide ? ui.backToGuides : ui.backToBlog}
        </Link>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
    </article>
  );
}

function formatDate(iso: string, locale: Locale): string {
  const tag = localeMeta[locale].htmlLang;
  try {
    // timeZone UTC: ISO dates parse as UTC midnight; without this the date
    // renders off-by-one in timezones west of UTC.
    return new Date(iso).toLocaleDateString(tag, {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return iso;
  }
}
