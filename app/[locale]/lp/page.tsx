import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Logo } from "@/components/Logo";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";

// Stripped-down landing page for paid/social traffic: no nav links, no footer
// maze — just the pitch and the form. Not for search engines.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    robots: { index: false, follow: false },
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <header className="border-b border-ink/5 bg-cream/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <span className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="font-display text-xl font-bold tracking-tight text-ink">
              Tern<span className="text-grape-500">.</span>
            </span>
          </span>
          <a
            href="#waitlist"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition hover:bg-grape-500"
          >
            {dict.nav.joinWaitlist}
          </a>
        </div>
      </header>
      <main>
        <Hero locale={locale} t={dict.hero} signup={dict.signup} />
        <Features t={dict.features} />
        <FinalCTA
          t={dict.finalCta}
          signup={dict.signup}
          waitlistSuffix={dict.hero.waitlistSuffix}
          waitlistEarly={dict.hero.waitlistEarly}
        />
      </main>
      <footer className="px-5 pb-10 text-center text-xs text-ink-soft/60">
        © 2026 Tern ·{" "}
        <Link href={`/${locale}/privacy`} className="underline">
          Privacy
        </Link>{" "}
        ·{" "}
        <Link href={`/${locale}/terms`} className="underline">
          Terms
        </Link>
      </footer>
    </>
  );
}
