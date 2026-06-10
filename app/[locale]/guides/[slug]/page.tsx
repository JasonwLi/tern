import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { guides, getGuide, content, availableLocales } from "@/lib/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ArticleView from "@/components/content/ArticleView";
import { articleOgImage } from "@/lib/og";

export function generateStaticParams() {
  return guides.flatMap((a) =>
    availableLocales(a).map((locale) => ({ locale, slug: a.slug }))
  );
}

function langsFor(slug: string, locs: Locale[]) {
  const l: Record<string, string> = {};
  for (const x of locs) l[x] = `/${x}/guides/${slug}`;
  l["x-default"] = `/en/guides/${slug}`;
  return l;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const article = getGuide(slug);
  if (!article) return {};
  const c = content(article, locale);
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `/${locale}/guides/${slug}`,
      languages: langsFor(slug, availableLocales(article)),
    },
    openGraph: {
      type: "article",
      title: c.title,
      description: c.description,
      images: [articleOgImage(slug, locale)],
    },
    twitter: { card: "summary_large_image", images: [articleOgImage(slug, locale)] },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const article = getGuide(slug);
  if (!article) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} t={dict.nav} />
      <main>
        <ArticleView article={article} locale={locale} />
      </main>
      <Footer locale={locale} t={dict.footer} />
    </>
  );
}
