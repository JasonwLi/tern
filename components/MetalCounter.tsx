"use client";

import { useEffect, useState } from "react";

const METAL_TOTAL = 1000;

// Live scarcity counter: "Only X of 1,000 metal cards left".
// Falls back to the static perk line while loading or on error.
export default function MetalCounter({
  counter,
  fallback,
}: {
  counter: string;  // contains {left}
  fallback: string; // static metalNote
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

  if (count === null) return <>{fallback}</>;
  const left = Math.max(0, METAL_TOTAL - count);
  if (left === 0) return <>{fallback}</>;
  return <>{counter.replace("{left}", left.toLocaleString())}</>;
}
