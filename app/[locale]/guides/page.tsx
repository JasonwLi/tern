import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { guides, hasLocale } from "@/lib/content";
import { contentUi } from "@/lib/content/ui";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/content/ArticleCard";

function langs(path: string) {
  const l: Record<string, string> = {};
  for (const x of locales) l[x] = `/${x}${path}`;
  l["x-default"] = `/en${path}`;
  return l;
}

// slug prefix → group; group headers come from localized dictionary strings.
const GROUPS: { key: string; slugs: string[] }[] = [
  {
    key: "au",
    slugs: [
      "bank-account-working-holiday-australia",
      "working-holiday-tax-refund-australia",
      "superannuation-refund-dasp",
      "best-bank-working-holiday-australia",
      "how-much-money-working-holiday-australia",
      "first-week-money-checklist-australia",
      "work-and-holiday-462-latin-america",
    ],
  },
  {
    key: "nz",
    slugs: [
      "bank-account-working-holiday-new-zealand",
      "best-bank-working-holiday-new-zealand",
      "how-much-money-working-holiday-new-zealand",
      "tax-refund-working-holiday-new-zealand",
    ],
  },
  {
    key: "ca",
    slugs: [
      "bank-account-working-holiday-canada",
      "best-bank-working-holiday-canada",
      "how-much-money-working-holiday-canada",
    ],
  },
  {
    key: "europe",
    slugs: [
      "bank-account-working-holiday-uk",
      "bank-account-working-holiday-ireland",
      "bank-account-working-holiday-germany",
    ],
  },
  { key: "jp", slugs: ["bank-account-working-holiday-japan"] },
  {
    key: "departure",
    slugs: [
      "japan-departure-checklist-working-holiday",
      "korea-departure-checklist-working-holiday",
      "taiwan-departure-checklist-working-holiday",
      "germany-departure-checklist-working-holiday",
      "france-departure-checklist-working-holiday",
      "italy-departure-checklist-working-holiday",
      "funding-working-holiday-from-latin-america",
      "working-holiday-for-brazilians",
      "brazil-departure-checklist-working-holiday",
    ],
  },
  { key: "essentials", slugs: ["no-atm-fees-working-holiday"] },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ui = contentUi[locale];
  return {
    title: ui.guidesTitle,
    description: ui.guidesIntro,
    alternates: { canonical: `/${locale}/guides`, languages: langs("/guides") },
  };
}

export default async function GuidesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const ui = contentUi[locale];

  // Localized group headers: country names reuse the marquee strings.
  const groupLabel: Record<string, string> = {
    au: dict.marquee.countries[0],
    nz: dict.marquee.countries[1],
    ca: dict.marquee.countries[2],
    europe: ui.guidesGroupEurope,
    jp: dict.marquee.countries[5],
    departure: ui.guidesGroupDeparture,
    essentials: ui.guidesGroupEssentials,
  };

  const grouped = GROUPS.map((g) => ({
    label: groupLabel[g.key],
    articles: g.slugs
      .map((slug) => guides.find((a) => a.slug === slug))
      .filter((a): a is NonNullable<typeof a> => Boolean(a && hasLocale(a, locale))),
  })).filter((g) => g.articles.length > 0);

  // Anything unmapped (future guides) still shows, in a trailing group.
  const mapped = new Set(GROUPS.flatMap((g) => g.slugs));
  const rest = guides.filter((a) => !mapped.has(a.slug) && hasLocale(a, locale));

  return (
    <>
      <Nav locale={locale} t={dict.nav} />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <nav
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink-soft"
          aria-label="Breadcrumb"
        >
          <Link href={`/${locale}`} className="hover:text-grape-500">{ui.home}</Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{ui.guidesNav}</span>
        </nav>

        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">{ui.guidesNav}</p>
          <h1 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">{ui.guidesTitle}</h1>
          <p className="mt-4 text-lg text-ink-soft">{ui.guidesIntro}</p>
        </div>

        {grouped.map((g) => (
          <section key={g.label} className="mt-14">
            <h2 className="mb-6 font-display text-2xl font-bold text-ink">{g.label}</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {g.articles.map((a) => (
                <ArticleCard key={a.slug} article={a} locale={locale} />
              ))}
            </div>
          </section>
        ))}

        {rest.length > 0 && (
          <section className="mt-14">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <ArticleCard key={a.slug} article={a} locale={locale} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer locale={locale} t={dict.footer} />
    </>
  );
}
