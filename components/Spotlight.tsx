import Image from "next/image";
import { CheckIcon } from "./icons";
import type { Dictionary } from "@/lib/i18n/dictionaries";

// Locale-independent presentation config, paired with translated copy by index.
const CONFIG = [
  {
    image: {
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      alt: "Young working holiday travellers checking their phones together on a trip",
    },
    overlayIcon: "💸",
    overlayAmountClass: "text-lime-600",
    flip: false,
    accent: "bg-lime-400",
  },
  {
    image: {
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      alt: "Open road winding through mountains, evoking long-term travel",
    },
    overlayIcon: "🔄",
    overlayAmountClass: "text-grape-500",
    flip: true,
    accent: "bg-coral-400",
  },
];

export default function Spotlights({ t }: { t: Dictionary["spotlights"] }) {
  return (
    <section className="mx-auto max-w-6xl space-y-28 px-5 py-24">
      {t.items.map((item, i) => {
        const c = CONFIG[i];
        return (
          <div key={i} className="grid items-center gap-10 lg:grid-cols-2">
            <div className={c.flip ? "lg:order-2" : ""}>
              <p className="mb-3 font-semibold uppercase tracking-widest text-grape-500">{item.eyebrow}</p>
              <h3 className="text-balance font-display text-3xl font-bold text-ink sm:text-4xl">{item.title}</h3>
              <p className="mt-4 text-lg text-ink-soft">{item.body}</p>
              <ul className="mt-6 space-y-3">
                {item.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime-300 text-ink">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-ink-soft">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative ${c.flip ? "lg:order-1" : ""}`}>
              <div className={`absolute -inset-4 -z-10 rounded-[2.5rem] ${c.accent} blur-2xl opacity-50`} aria-hidden />
              <div className="relative overflow-hidden rounded-card border-4 border-white shadow-2xl">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  width={800}
                  height={900}
                  className="h-[26rem] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[88%] -translate-x-1/2">
                <div className="rounded-2xl bg-white p-4 shadow-2xl shadow-ink/20">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-grape-50 text-lg" aria-hidden>
                      {c.overlayIcon}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-ink">{item.overlay.title}</p>
                      <p className="truncate text-xs text-ink-soft">{item.overlay.subtitle}</p>
                    </div>
                    <span className={`ml-auto font-display text-sm font-bold ${c.overlayAmountClass}`}>
                      {item.overlay.amount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
