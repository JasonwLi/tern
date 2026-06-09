"use client";

import { useState } from "react";
import Link from "next/link";

interface MenuLink {
  href: string;
  label: string;
}

export default function MobileMenu({
  links,
  cta,
}: {
  links: MenuLink[];
  cta: MenuLink;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Menu"
        className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink/10 bg-white text-ink"
      >
        <span className="relative block h-3.5 w-4.5" aria-hidden>
          <span
            className={`absolute left-0 top-0 h-0.5 w-full rounded bg-ink transition ${
              open ? "top-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 h-0.5 w-full rounded bg-ink transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-full rounded bg-ink transition ${
              open ? "top-1.5 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-ink/10 bg-cream px-5 pb-5 pt-2 shadow-xl">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 font-medium text-ink-soft transition hover:bg-grape-50 hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={cta.href}
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-ink px-5 py-3 text-center text-sm font-bold text-cream"
          >
            {cta.label}
          </a>
        </div>
      )}
    </div>
  );
}
