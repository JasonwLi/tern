import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
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
  const list = guides.filter((a) => hasLocale(a, locale));

  return (
    <>
      <Nav locale={locale} t={dict.nav} />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">{ui.guidesNav}</p>
          <h1 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">{ui.guidesTitle}</h1>
          <p className="mt-4 text-lg text-ink-soft">{ui.guidesIntro}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <ArticleCard key={a.slug} article={a} locale={locale} />
          ))}
        </div>
      </main>
      <Footer locale={locale} t={dict.footer} />
    </>
  );
}
