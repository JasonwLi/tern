import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function FAQ({ t }: { t: Dictionary["faq"] }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-20 mx-auto max-w-3xl px-5 py-20">
      <div className="text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">{t.eyebrow}</p>
        <h2 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">{t.title}</h2>
      </div>

      <div className="mt-10 space-y-3">
        {t.items.map((f, i) => (
          <details
            key={i}
            className="group rounded-2xl border-2 border-ink/5 bg-white p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold text-ink">
              {f.q}
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-grape-50 text-grape-500 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
