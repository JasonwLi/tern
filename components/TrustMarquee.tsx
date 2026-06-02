import type { Dictionary } from "@/lib/i18n/dictionaries";

const FLAGS = ["🇦🇺", "🇳🇿", "🇨🇦", "🇬🇧", "🇮🇪", "🇯🇵", "🇩🇪", "🇫🇷"];

export default function TrustMarquee({ t }: { t: Dictionary["marquee"] }) {
  const items = t.countries.map((name, i) => `${FLAGS[i] ?? ""} ${name}`.trim());
  const row = [...items, ...items];
  return (
    <section className="border-y-2 border-ink/5 bg-ink py-4" aria-label="Supported working holiday destinations">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-cream/50">
          {t.heading}
        </p>
        <div className="no-scrollbar relative overflow-hidden">
          <div className="animate-marquee flex w-max gap-8">
            {row.map((item, i) => (
              <span key={i} className="font-display text-lg font-semibold text-cream/90">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
