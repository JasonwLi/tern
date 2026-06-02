import type { Dictionary } from "@/lib/i18n/dictionaries";

const EMOJIS = ["📱", "🛬", "🌏"];

export default function HowItWorks({ t }: { t: Dictionary["how"] }) {
  return (
    <section id="how-it-works" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">{t.eyebrow}</p>
        <h2 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">{t.title}</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {t.steps.map((s, i) => (
          <div key={i} className="relative">
            <div className="h-full rounded-card border-2 border-ink/5 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-grape-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-3xl" aria-hidden>{EMOJIS[i]}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.body}</p>
            </div>
            {i < t.steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block" aria-hidden>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-lime-400 text-ink shadow">→</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
