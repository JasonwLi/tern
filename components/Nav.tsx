import Link from "next/link";
import { Logo } from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { contentUi } from "@/lib/content/ui";

export default function Nav({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["nav"];
}) {
  const home = `/${locale}`;
  const ui = contentUi[locale];
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5"
        aria-label="Primary"
      >
        <Link href={home} className="flex items-center gap-2" aria-label="Tern home">
          <Logo className="h-8 w-8" />
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            Tern<span className="text-grape-500">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <a href={`${home}#features`} className="text-sm font-medium text-ink-soft transition hover:text-ink">
            {t.features}
          </a>
          <a href={`${home}#extras`} className="text-sm font-medium text-ink-soft transition hover:text-ink">
            {t.builtForWhv}
          </a>
          <Link href={`${home}/guides`} className="text-sm font-medium text-ink-soft transition hover:text-ink">
            {ui.guidesNav}
          </Link>
          <Link href={`${home}/blog`} className="text-sm font-medium text-ink-soft transition hover:text-ink">
            {ui.blogNav}
          </Link>
          <Link href={`${home}/about`} className="text-sm font-medium text-ink-soft transition hover:text-ink">
            {t.about}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} label={t.language} />
          <a
            href={`${home}#waitlist`}
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream transition hover:-translate-y-0.5 hover:bg-grape-500 sm:block"
          >
            {t.joinWaitlist}
          </a>
          <MobileMenu
            links={[
              { href: `${home}#features`, label: t.features },
              { href: `${home}#extras`, label: t.builtForWhv },
              { href: `${home}/guides`, label: ui.guidesNav },
              { href: `${home}/blog`, label: ui.blogNav },
              { href: `${home}/about`, label: t.about },
              { href: `${home}#faq`, label: t.faq },
            ]}
            cta={{ href: `${home}#waitlist`, label: t.joinWaitlist }}
          />
        </div>
      </nav>
    </header>
  );
}
