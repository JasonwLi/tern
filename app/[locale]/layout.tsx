import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import {
  locales,
  isLocale,
  localeMeta,
  ogLocale,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// hreflang alternates pointing each language at its localized path.
function languageAlternates(path = "") {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `/${l}${path}`;
  languages["x-default"] = `/en${path}`;
  return languages;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: dict.meta.title, template: "%s · Tern" },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Tern" }],
    creator: "Tern",
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(),
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${locale}`,
      siteName: "Tern",
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [{ url: `/og-${locale}.png`, width: 1200, height: 630, alt: "Tern" }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`/og-${locale}.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    category: "finance",
  };
}

export const viewport: Viewport = {
  themeColor: "#6c4dff",
  width: "device-width",
  initialScale: 1,
};

function jsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "Tern",
    description,
    url: `${SITE_URL}/${locale}`,
    category: "Neobank account for working holiday visa holders",
    audience: {
      "@type": "Audience",
      audienceType: "Working holiday visa holders, backpackers, gap-year travellers",
    },
    feesAndCommissionsSpecification:
      "No monthly fee. No foreign ATM fees. Flat-fee peer-to-peer currency swaps.",
    areaServed: ["AU", "NZ", "CA", "GB", "IE", "JP", "DE"],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={localeMeta[locale].htmlLang} className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale, dict.meta.description)) }}
        />
      </body>
    </html>
  );
}
