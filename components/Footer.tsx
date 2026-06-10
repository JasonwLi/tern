import { Logo } from "./Logo";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { contentUi } from "@/lib/content/ui";

export default function Footer({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["footer"];
}) {
  const home = `/${locale}`;
  const ui = contentUi[locale];
  return (
    <footer className="border-t-2 border-ink/5 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="font-display text-xl font-bold text-ink">
                Tern<span className="text-grape-500">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">{t.desc}</p>
          </div>

          <FooterCol
            title={t.productTitle}
            links={[...t.product, ui.guidesNav, ui.blogNav, ui.statusNav]}
            hrefs={[
              `${home}#features`, `${home}#how-it-works`, `${home}#extras`, `${home}#faq`,
              `${home}/guides`, `${home}/blog`, `${home}/status`,
            ]}
          />
          <FooterCol
            title={t.destinationsTitle}
            links={t.destinations}
            hrefs={[`${home}#waitlist`, `${home}#waitlist`, `${home}#waitlist`, `${home}#waitlist`]}
          />
          <FooterCol
            title={t.companyTitle}
            links={[t.company[0], t.company[2], t.company[3]]}
            hrefs={[`${home}/about`, `${home}/privacy`, `${home}/terms`]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 text-sm text-ink-soft sm:flex-row sm:items-center">
          <p>{t.legal1}</p>
          <p className="text-ink-soft/70">{t.legal2}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title, links, hrefs,
}: { title: string; links: string[]; hrefs: string[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l, i) => (
          <li key={l}>
            <a href={hrefs[i]} className="text-sm text-ink-soft transition hover:text-grape-500">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
