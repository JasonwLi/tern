import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { contentUi } from "@/lib/content/ui";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StatusChecker from "@/components/StatusChecker";

// Utility page — useful to humans, thin for crawlers, so noindex.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ui = contentUi[locale];
  return {
    title: ui.statusTitle,
    description: ui.statusIntro,
    robots: { index: false, follow: true },
  };
}

export default async function StatusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const ui = contentUi[locale];

  return (
    <>
      <Nav locale={locale} t={dict.nav} />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-grape-300/40 blur-3xl" />
          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-lime-300/40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-2xl px-5 py-20">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-4 py-1.5 text-sm font-semibold text-ink-soft">
              <span aria-hidden>📍</span> {ui.statusNav}
            </div>
            <h1 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
              {ui.statusTitle}
            </h1>
            <p className="mt-4 text-lg text-ink-soft">{ui.statusIntro}</p>
          </div>
          <div className="mt-10">
            <StatusChecker locale={locale} ui={ui} signup={dict.signup} />
          </div>
        </div>
      </main>
      <Footer locale={locale} t={dict.footer} />
    </>
  );
}
