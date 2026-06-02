"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeMeta, type Locale } from "@/lib/i18n/config";

export default function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    const segments = pathname.split("/");
    // segments[1] is the current locale segment
    segments[1] = next;
    const newPath = segments.join("/") || `/${next}`;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
    router.push(newPath);
  }

  return (
    <label className="relative inline-flex items-center" aria-label={label}>
      <span className="pointer-events-none absolute left-2.5 text-sm" aria-hidden>
        🌐
      </span>
      <select
        value={locale}
        onChange={(e) => switchTo(e.target.value as Locale)}
        className="appearance-none rounded-full border-2 border-ink/10 bg-white py-2 pl-8 pr-7 text-sm font-semibold text-ink-soft outline-none transition hover:border-grape-300 focus:border-grape-500"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeMeta[l].flag} {localeMeta[l].label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2.5 text-xs text-ink-soft" aria-hidden>
        ▾
      </span>
    </label>
  );
}
