import SignupForm from "./SignupForm";
import WaitlistCount from "./WaitlistCount";
import PhoneMockup from "./PhoneMockup";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Hero({
  t,
  signup,
}: {
  t: Dictionary["hero"];
  signup: Dictionary["signup"];
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-grape-300/40 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-coral-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-lime-300/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:pt-20 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-4 py-1.5 text-sm font-semibold text-ink-soft">
            <span aria-hidden>🎒</span> {t.badge}
          </div>

          <h1 className="text-balance font-display text-5xl font-bold leading-[1.05] text-ink sm:text-6xl">
            {t.headlinePre}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.headlineHighlight}</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-4 -rotate-1 bg-lime-400/70" aria-hidden />
            </span>
            {t.headlinePost ? <> {t.headlinePost}</> : null}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-ink-soft">{t.subhead}</p>

          <div className="mt-8 max-w-xl">
            <SignupForm variant="hero" t={signup} />
          </div>

          <div className="mt-6">
            <WaitlistCount suffix={t.waitlistSuffix} early={t.waitlistEarly} />
          </div>
        </div>

        <div className="relative">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
