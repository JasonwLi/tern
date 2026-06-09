import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const UPDATED = "3 June 2026";
const CONTACT = "jzwl96@gmail.com";

function langs() {
  const l: Record<string, string> = {};
  for (const x of locales) l[x] = `/${x}/privacy`;
  l["x-default"] = "/en/privacy";
  return l;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: "Privacy Policy",
    description:
      "How Tern collects, uses and protects your information when you join our waitlist or browse the site.",
    alternates: { canonical: `/${locale}/privacy`, languages: langs() },
  };
}

const SECTIONS: { h: string; ps: string[] }[] = [
  {
    h: "Who we are",
    ps: [
      "Tern (\"we\", \"us\") operates whvwithtern.com, a pre-launch website for a planned money app for working holiday visa travellers. Tern is not yet a live financial product, does not hold customer funds, and nothing on this site is financial advice.",
    ],
  },
  {
    h: "What we collect",
    ps: [
      "Waitlist details you give us: your email address and, optionally, your home country and the country you plan to work in.",
      "Technical basics: the language version of the site you used, the page that referred you, and standard server logs (IP address, browser type, timestamps) kept briefly for security and debugging.",
      "Privacy-friendly analytics: we use cookieless web analytics to count visits and page views. It does not track you across sites and does not build a profile of you.",
    ],
  },
  {
    h: "How we use it",
    ps: [
      "To run the waitlist: store your signup, show your position, and email you about Tern's launch and product updates relevant to your destination. Every email will include a way to opt out.",
      "To notify our team that a signup happened (we receive an internal alert containing the details you submitted).",
      "To understand which pages and languages are useful so we can improve the site.",
      "We do not sell your personal information, and we do not use it for third-party advertising.",
    ],
  },
  {
    h: "Where it's stored and who processes it",
    ps: [
      "Waitlist data is stored in a database hosted on Railway (cloud infrastructure). Our internal signup alerts are delivered via Telegram. The website is served via our hosting and DNS providers (Railway and Cloudflare). These providers process data on our behalf to run the service.",
    ],
  },
  {
    h: "Cookies",
    ps: [
      "We set one functional cookie (NEXT_LOCALE) to remember your language choice. Our analytics are cookieless. We do not set advertising cookies. If we add advertising or marketing pixels in the future, we will update this policy first.",
    ],
  },
  {
    h: "How long we keep it",
    ps: [
      "We keep waitlist details until Tern launches and you either become a customer (under a new, full privacy policy) or we delete the waitlist. You can ask us to delete your details at any time before then.",
    ],
  },
  {
    h: "Your rights",
    ps: [
      "You can ask us to access, correct or delete the information we hold about you, or to stop emailing you, at any time. Depending on where you live (for example the EU/UK under GDPR, or Australia under the Privacy Act), you may have additional statutory rights. To exercise any of these, email us — see below.",
    ],
  },
  {
    h: "Contact",
    ps: [
      `For any privacy question or request, contact us at ${CONTACT}. We aim to respond within 30 days.`,
      "We may update this policy as the product develops; the date above reflects the latest revision.",
    ],
  },
];

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} t={dict.nav} />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-4xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-soft/70">Last updated: {UPDATED}</p>
        {locale !== "en" && (
          <p className="mt-4 rounded-2xl bg-grape-50 p-4 text-sm text-ink-soft">
            This policy is provided in English for all regions to keep a single authoritative
            version.
          </p>
        )}
        <div className="mt-8 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2 className="mb-2 font-display text-xl font-bold text-ink">{s.h}</h2>
              {s.ps.map((p, i) => (
                <p key={i} className="mb-3 leading-relaxed text-ink-soft">{p}</p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer locale={locale} t={dict.footer} />
    </>
  );
}
