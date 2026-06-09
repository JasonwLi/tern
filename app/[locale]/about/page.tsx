import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Logo } from "@/components/Logo";

// 👇 Edit these to taste — name/role render in the hero and signature.
const FOUNDER = { name: "Jason", role: "Founder" };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", es: "/es/about", ja: "/ja/about", ko: "/ko/about", "zh-TW": "/zh-TW/about", "x-default": "/en/about" },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.about;

  return (
    <>
      <Nav locale={locale} t={dict.nav} />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
            <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-grape-300/40 blur-3xl" />
            <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-coral-300/40 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-lime-300/40 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:pt-20 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-4 py-1.5 text-sm font-semibold text-ink-soft">
                <span aria-hidden>✈️</span> {t.badge}
              </div>
              <h1 className="text-balance font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl">
                {t.headlinePre}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">{t.headlineHighlight}</span>
                  <span className="absolute inset-x-0 bottom-1 -z-0 h-4 -rotate-1 bg-lime-400/70" aria-hidden />
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg text-ink-soft">{t.subhead}</p>
            </div>

            <FounderAvatar countriesLabel={t.avatarCountries} workedLabel={t.avatarWorked} />
          </div>
        </section>

        {/* Stats */}
        <section className="border-y-2 border-ink/5 bg-ink py-10">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 sm:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-bold text-lime-400 sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-cream/70">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-5 py-20">
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            {t.story.map((para, i) => (
              <p key={i} className={i === t.story.length - 1 ? "text-ink" : undefined}>
                {para.replace("{name}", FOUNDER.name)}
              </p>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-ink/10 pt-8">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-grape-500 font-display text-lg font-bold text-white">
              {FOUNDER.name[0]}
            </div>
            <div>
              <div className="font-display text-lg font-bold text-ink">{FOUNDER.name}</div>
              <div className="text-sm text-ink-soft">{t.signatureRole}</div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-grape-50/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">
                {t.principlesEyebrow}
              </p>
              <h2 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
                {t.principlesTitle}
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {t.principles.map((p, i) => (
                <div key={i} className="rounded-card border-2 border-ink/5 bg-white p-7 shadow-sm">
                  <div className="mb-4 text-3xl" aria-hidden>{["🧾", "⚖️", "🧭"][i]}</div>
                  <h3 className="font-display text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-ink-soft">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA t={dict.finalCta} signup={dict.signup} waitlistSuffix={dict.hero.waitlistSuffix} waitlistEarly={dict.hero.waitlistEarly} />
      </main>
      <Footer locale={locale} t={dict.footer} />
    </>
  );
}

function FounderAvatar({
  countriesLabel,
  workedLabel,
}: {
  countriesLabel: string;
  workedLabel: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-lime-400/40 blur-3xl" aria-hidden />
      <div className="absolute -bottom-6 -right-6 h-44 w-44 rounded-full bg-coral-400/40 blur-3xl" aria-hidden />

      {/* Swap this gradient frame for a real founder photo when you have one */}
      <div className="relative aspect-square overflow-hidden rounded-[2rem] border-4 border-white bg-gradient-to-br from-grape-500 via-grape-600 to-grape-700 shadow-2xl">
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-7xl" aria-hidden>🧑‍💻</span>
        </div>
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          <Logo className="h-4 w-4" /> Tern
        </div>
      </div>

      <div className="animate-float-slow absolute -right-4 top-6 rotate-6 rounded-2xl bg-lime-400 px-3 py-2 text-center font-display text-ink shadow-xl">
        <div className="text-xl font-bold leading-none">45</div>
        <div className="text-[10px] font-bold uppercase tracking-wide">{countriesLabel}</div>
      </div>
      <div className="absolute -bottom-3 left-4 -rotate-3 rounded-2xl bg-white px-3 py-2 text-center shadow-xl">
        <div className="font-display text-sm font-bold text-ink">AU · CA · US</div>
        <div className="text-[10px] font-semibold uppercase tracking-wide text-grape-500">{workedLabel}</div>
      </div>
    </div>
  );
}
