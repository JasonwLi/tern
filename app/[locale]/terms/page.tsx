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
  for (const x of locales) l[x] = `/${x}/terms`;
  l["x-default"] = "/en/terms";
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
    title: "Terms of Use",
    description: "The terms that apply when you use the Tern website and join our waitlist.",
    alternates: { canonical: `/${locale}/terms`, languages: langs() },
  };
}

const SECTIONS: { h: string; ps: string[] }[] = [
  {
    h: "What this site is",
    ps: [
      "whvwithtern.com is the pre-launch website for Tern, a planned money app for working holiday visa travellers. By using the site or joining the waitlist you agree to these terms.",
      "Tern is not yet a live product. We do not currently provide banking, payment, remittance, foreign exchange or any other financial service, and we do not hold an Australian Financial Services Licence or banking licence. Features described on this site are plans, may require regulatory approvals and licensed partners, and may change or never launch.",
    ],
  },
  {
    h: "Not financial, tax or migration advice",
    ps: [
      "Content on this site — including guides and blog posts about banking, tax, superannuation and visas — is general information only. It is not financial, tax, legal or migration advice, and it does not consider your personal circumstances. Rules and figures change; always check the official sources we link to, or get professional advice.",
    ],
  },
  {
    h: "The waitlist",
    ps: [
      "Joining the waitlist is free and creates no obligation on you or us. A waitlist position is indicative only — it does not guarantee access, timing, pricing or any particular feature. If we offer referral rewards or position boosts, we may adjust or cancel them to prevent abuse (for example fake or self-referred signups).",
    ],
  },
  {
    h: "Acceptable use",
    ps: [
      "Don't misuse the site: no scraping at scale, no attempting to breach security, no submitting other people's email addresses without their consent, and no fraudulent referral activity.",
    ],
  },
  {
    h: "Intellectual property",
    ps: [
      "The Tern name, logo and site content are owned by us or our licensors. You may share links to our pages freely; please don't republish substantial portions of our content without permission.",
    ],
  },
  {
    h: "Liability",
    ps: [
      "The site is provided \"as is\". To the maximum extent permitted by law, we exclude all warranties and are not liable for any loss arising from your use of the site or reliance on its content. Nothing in these terms excludes rights that cannot be excluded under applicable consumer law (including the Australian Consumer Law).",
    ],
  },
  {
    h: "Changes and contact",
    ps: [
      `We may update these terms as the product develops; continued use of the site means you accept the updated terms. Questions: ${CONTACT}.`,
    ],
  },
];

export default async function TermsPage({
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
        <h1 className="font-display text-4xl font-bold text-ink">Terms of Use</h1>
        <p className="mt-2 text-sm text-ink-soft/70">Last updated: {UPDATED}</p>
        {locale !== "en" && (
          <p className="mt-4 rounded-2xl bg-grape-50 p-4 text-sm text-ink-soft">
            These terms are provided in English for all regions to keep a single authoritative
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
