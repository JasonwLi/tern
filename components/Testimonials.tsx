import type { Dictionary } from "@/lib/i18n/dictionaries";

const ACCENTS = ["bg-lime-300", "bg-coral-300", "bg-sky-300"];

export default function Testimonials({ t }: { t: Dictionary["testimonials"] }) {
  return (
    <section className="bg-grape-50/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">{t.eyebrow}</p>
          <h2 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">{t.title}</h2>
          <p className="mt-3 text-sm text-ink-soft/70">{t.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.items.map((q, i) => (
            <figure key={i} className="flex flex-col rounded-card border-2 border-ink/5 bg-white p-7 shadow-sm">
              <div className="mb-4 text-4xl text-grape-300" aria-hidden>“</div>
              <blockquote className="flex-1 text-ink-soft">{q.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-full ${ACCENTS[i]} font-display font-bold text-ink`}>
                  {q.name[0]}
                </span>
                <div>
                  <div className="font-display font-bold text-ink">{q.name}</div>
                  <div className="text-sm text-ink-soft">{q.from}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
