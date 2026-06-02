import type { Dictionary } from "@/lib/i18n/dictionaries";

const EMOJIS = ["🏦", "💸", "📉", "🏧"];

export default function ProblemSection({ t }: { t: Dictionary["problem"] }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">{t.eyebrow}</p>
        <h2 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-4 text-lg text-ink-soft">{t.intro}</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((p, i) => (
          <div key={i} className="rounded-card border-2 border-ink/5 bg-white p-6 shadow-sm">
            <div className="mb-3 text-3xl" aria-hidden>{EMOJIS[i]}</div>
            <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
