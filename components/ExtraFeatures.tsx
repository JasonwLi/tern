import {
  PiggyIcon, TaxIcon, ScaleIcon, PassportIcon, MultiCurrencyIcon,
  ShieldIcon, CertificateIcon, ShareBillsIcon, HealthIcon,
} from "./icons";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const ICONS = [
  PiggyIcon, TaxIcon, ScaleIcon, PassportIcon, MultiCurrencyIcon,
  ShieldIcon, CertificateIcon, ShareBillsIcon, HealthIcon,
];

export default function ExtraFeatures({ t }: { t: Dictionary["extras"] }) {
  return (
    <section id="extras" className="scroll-mt-20 bg-ink py-20 text-cream">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-lime-400">{t.eyebrow}</p>
          <h2 className="text-balance font-display text-4xl font-bold sm:text-5xl">{t.title}</h2>
          <p className="mt-4 text-lg text-cream/70">{t.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="rounded-card border border-cream/10 bg-cream/[0.04] p-6 transition hover:border-lime-400/40 hover:bg-cream/[0.07]"
              >
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-grape-500 text-lime-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-cream/65">{f.body}</p>
                <p className="mt-4 border-t border-cream/10 pt-3 text-xs italic text-lime-300/90">{f.pain}</p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-cream/50">{t.footnote}</p>
      </div>
    </section>
  );
}
