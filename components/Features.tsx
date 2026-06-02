import {
  SalaryIcon, FundHomeIcon, CashbackIcon, SwapIcon, CardIcon, NoAtmIcon,
} from "./icons";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const ICONS = [SalaryIcon, FundHomeIcon, CashbackIcon, SwapIcon, CardIcon, NoAtmIcon];
const ACCENTS = [
  "bg-lime-300 text-ink",
  "bg-sky-300 text-ink",
  "bg-coral-300 text-ink",
  "bg-grape-300 text-ink",
  "bg-lime-300 text-ink",
  "bg-coral-300 text-ink",
];

export default function Features({ t }: { t: Dictionary["features"] }) {
  return (
    <section id="features" className="scroll-mt-20 bg-grape-50/60 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">{t.eyebrow}</p>
          <h2 className="text-balance font-display text-4xl font-bold text-ink sm:text-5xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="group rounded-card border-2 border-ink/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-grape-300 hover:shadow-xl hover:shadow-grape-500/10"
              >
                <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${ACCENTS[i]}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <span className="block text-xs font-bold uppercase tracking-wider text-grape-500">
                  {f.tag}
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-ink-soft">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
