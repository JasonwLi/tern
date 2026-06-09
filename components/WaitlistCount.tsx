"use client";

import { useEffect, useState } from "react";

// Shows the real waitlist count once it's meaningful social proof;
// before that, a truthful "backpackers are joining" line with no number.
const SHOW_NUMBER_FROM = 100;

export default function WaitlistCount({
  suffix,
  early,
}: {
  suffix: string;
  early: string;
}) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/signup")
      .then((r) => r.json())
      .then((d) => {
        if (active && typeof d.count === "number") setCount(d.count);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const showNumber = count !== null && count >= SHOW_NUMBER_FROM;

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {["🇬🇧", "🇰🇷", "🇩🇪", "🇫🇷", "🇮🇪"].map((flag, i) => (
          <span
            key={i}
            className="grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-white text-sm shadow-sm"
            aria-hidden
          >
            {flag}
          </span>
        ))}
      </div>
      <p className="text-sm font-medium text-ink-soft">
        {showNumber ? (
          <>
            <span className="font-bold text-ink">{count.toLocaleString()}</span> {suffix}
          </>
        ) : (
          early
        )}
      </p>
    </div>
  );
}
