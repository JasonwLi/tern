import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
    icons: {
      icon: "/icon.svg",
      apple: "/apple-touch-icon.png",
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
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "Tern",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-512.png`, width: 512, height: 512 },
        description:
          "Tern is a pre-launch neobank built for working holiday visa travellers.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Tern",
        url: SITE_URL,
        inLanguage: localeMeta[locale].htmlLang,
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "FinancialProduct",
        name: "Tern",
        description,
        url: `${SITE_URL}/${locale}`,
        provider: { "@id": `${SITE_URL}/#org` },
        category: "Neobank account for working holiday visa holders",
        audience: {
          "@type": "Audience",
          audienceType: "Working holiday visa holders, backpackers, gap-year travellers",
        },
        feesAndCommissionsSpecification:
          "No monthly fee. No foreign ATM fees. Flat-fee peer-to-peer currency swaps.",
        areaServed: ["AU", "NZ", "CA", "GB", "IE", "JP", "DE"],
      },
    ],
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
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale, dict.meta.description)) }}
        />
        {/* Cloudflare Web Analytics — cookieless, only loads when a token is set */}
        {process.env.NEXT_PUBLIC_CF_BEACON_TOKEN && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={JSON.stringify({ token: process.env.NEXT_PUBLIC_CF_BEACON_TOKEN })}
          />
        )}
      </body>
    </html>
  );
}
