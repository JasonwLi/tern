"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

type Tab = "home" | "swap" | "card";

export default function AppDemo() {
  const [tab, setTab] = useState<Tab>("home");
  const [toast, setToast] = useState(false);
  const [swapped, setSwapped] = useState(false);
  const [frozen, setFrozen] = useState(false);

  // Replay the "salary received" toast whenever Home is opened.
  useEffect(() => {
    if (tab !== "home") return;
    setToast(false);
    const t = setTimeout(() => setToast(true), 500);
    return () => clearTimeout(t);
  }, [tab]);

  useEffect(() => {
    if (tab !== "swap") setSwapped(false);
  }, [tab]);

  return (
    <div className="grid min-h-[100svh] w-full place-items-center bg-gradient-to-b from-grape-600 to-grape-700 sm:p-6">
      {/* phone frame (frame only shows on larger screens; full-bleed on mobile) */}
      <div className="relative flex h-[100svh] w-full max-w-[420px] flex-col overflow-hidden bg-cream shadow-2xl sm:h-[880px] sm:rounded-[2.6rem] sm:border-[10px] sm:border-ink">
        {/* status bar */}
        <div className="flex items-center justify-between bg-grape-500 px-6 pb-1 pt-3 text-[11px] font-semibold text-white/90">
          <span>9:41</span>
          <span className="flex gap-1" aria-hidden>📶 🔋</span>
        </div>

        {/* header */}
        <div className="flex items-center justify-between bg-grape-500 px-5 pb-4 pt-1 text-white">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="font-display text-lg font-bold">Tern</span>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-base">🧑‍🌾</span>
        </div>

        {/* screen */}
        <div className="relative flex-1 overflow-y-auto bg-cream">
          {tab === "home" && <Home toast={toast} />}
          {tab === "swap" && <Swap swapped={swapped} onSwap={() => setSwapped(true)} />}
          {tab === "card" && <Card frozen={frozen} setFrozen={setFrozen} />}
        </div>

        {/* bottom nav */}
        <nav className="flex border-t border-ink/10 bg-white">
          {([
            ["home", "🏠", "Home"],
            ["swap", "🔄", "Swap"],
            ["card", "💳", "Card"],
          ] as [Tab, string, string][]).map(([key, icon, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex flex-1 flex-col items-center gap-0.5 py-3 text-xs font-semibold transition ${
                tab === key ? "text-grape-500" : "text-ink-soft/50"
              }`}
            >
              <span className="text-lg">{icon}</span>
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

function Home({ toast }: { toast: boolean }) {
  const txns = [
    { icon: "💸", title: "Salary received", sub: "Sunny Coast Farms", amt: "+$1,040", green: true },
    { icon: "🛏️", title: "Hostel cashback", sub: "Nomads Byron Bay", amt: "+$3.20", green: true },
    { icon: "☕", title: "Bean & Gone", sub: "Card · Byron Bay", amt: "−$5.50" },
    { icon: "🏧", title: "ATM withdrawal", sub: "No fee ✓", amt: "−$200" },
  ];
  return (
    <div className="px-5 pb-6 pt-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft/60">AUD balance</p>
      <p className="font-display text-5xl font-bold text-ink">$4,182.50</p>
      <span className="mt-2 inline-flex rounded-full bg-lime-300 px-3 py-1 text-xs font-bold text-ink">
        +$1,040 this week
      </span>

      {/* salary toast */}
      <div
        className={`mt-5 flex items-center gap-3 rounded-2xl border-2 border-lime-400 bg-white p-3 shadow-lg transition-all duration-500 ${
          toast ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
      >
        <span className="grid h-10 w-10 place-items-center rounded-full bg-lime-300 text-lg">💸</span>
        <div className="flex-1">
          <p className="text-sm font-bold text-ink">Salary received</p>
          <p className="text-xs text-ink-soft">Paid on day one · just now</p>
        </div>
        <span className="font-display font-bold text-lime-600">+$1,040</span>
      </div>

      {/* quick actions */}
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        {[["🌏", "Top up"], ["🔄", "Swap"], ["📤", "Send home"]].map(([i, l]) => (
          <div key={l} className="rounded-2xl bg-grape-50 py-3">
            <div className="text-xl">{i}</div>
            <div className="mt-1 text-xs font-semibold text-ink-soft">{l}</div>
          </div>
        ))}
      </div>

      <p className="mt-6 mb-2 text-sm font-bold text-ink">Recent</p>
      <div className="space-y-2">
        {txns.map((t) => (
          <div key={t.title} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-grape-50 text-base">{t.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-ink">{t.title}</p>
              <p className="truncate text-xs text-ink-soft">{t.sub}</p>
            </div>
            <span className={`font-display text-sm font-bold ${t.green ? "text-lime-600" : "text-ink"}`}>{t.amt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Swap({ swapped, onSwap }: { swapped: boolean; onSwap: () => void }) {
  return (
    <div className="flex h-full flex-col px-5 pb-6 pt-5">
      <p className="font-display text-2xl font-bold text-ink">Swap currency</p>
      <p className="text-sm text-ink-soft">Flat fee — not a % cut</p>

      {!swapped ? (
        <>
          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
              <div>
                <p className="text-xs text-ink-soft">You give</p>
                <p className="font-display text-2xl font-bold text-ink">€420</p>
              </div>
              <span className="rounded-full bg-grape-50 px-3 py-1 text-sm font-bold">🇪🇺 EUR</span>
            </div>
            <div className="flex justify-center">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-lime-400 text-ink shadow">🔄</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
              <div>
                <p className="text-xs text-ink-soft">You get</p>
                <p className="font-display text-2xl font-bold text-ink">A$690</p>
              </div>
              <span className="rounded-full bg-grape-50 px-3 py-1 text-sm font-bold">🇦🇺 AUD</span>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-grape-50 p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-lg">✈️</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-ink">Matched with Mia</p>
                <p className="text-xs text-ink-soft">Leaving Sydney · needs euros</p>
              </div>
              <span className="text-xs font-bold text-lime-600">Real rate</span>
            </div>
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <span className="text-ink-soft">Fee</span>
            <span className="font-bold text-ink">Flat $2 <span className="text-lime-600">· save ~$26</span></span>
          </div>

          <button
            onClick={onSwap}
            className="mt-auto w-full rounded-full bg-grape-500 py-4 text-base font-bold text-white shadow-lg shadow-grape-500/30 transition active:scale-95"
          >
            Swap now
          </button>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-lime-300 text-4xl">🎉</div>
          <p className="mt-5 font-display text-2xl font-bold text-ink">Swapped!</p>
          <p className="mt-1 text-ink-soft">€420 → A$690</p>
          <p className="mt-1 text-sm text-lime-600">Flat $2 fee · you saved ~$26 vs a bank</p>
        </div>
      )}
    </div>
  );
}

function Card({ frozen, setFrozen }: { frozen: boolean; setFrozen: (v: boolean) => void }) {
  return (
    <div className="px-5 pb-6 pt-5">
      <p className="font-display text-2xl font-bold text-ink">Your card</p>

      <div
        className={`mt-5 rounded-3xl bg-gradient-to-br from-coral-400 via-coral-500 to-grape-500 p-5 text-white shadow-2xl shadow-coral-500/30 transition ${
          frozen ? "opacity-50 grayscale" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo className="h-7 w-7" />
          <span className="text-[10px] font-bold tracking-widest opacity-80">DEBIT</span>
        </div>
        <div className="mt-8 font-display text-lg tracking-[0.25em]">•••• 4821</div>
        <div className="mt-3 flex items-end justify-between">
          <span className="text-xs font-medium opacity-90">A. RILEY</span>
          <span className="font-display text-xl font-bold italic">VISA</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-lime-300 px-4 py-3 text-sm font-bold text-ink">
        <span className="text-lg">🏧</span> No ATM fees, anywhere in the world
      </div>

      <div className="mt-3 space-y-2">
        <Toggle label="❄️ Freeze card" on={frozen} onToggle={() => setFrozen(!frozen)} />
        <Toggle label="🌐 Online payments" on onToggle={() => {}} />
        <Toggle label="✈️ Travel mode" on onToggle={() => {}} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-white py-3 text-center text-sm font-semibold text-ink shadow-sm"> Apple Pay</div>
        <div className="rounded-2xl bg-white py-3 text-center text-sm font-semibold text-ink shadow-sm">G Pay</div>
      </div>
    </div>
  );
}

function Toggle({ label, on, onToggle }: { label: string; on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between rounded-2xl bg-white p-3.5 shadow-sm"
    >
      <span className="text-sm font-semibold text-ink">{label}</span>
      <span className={`relative h-6 w-11 rounded-full transition ${on ? "bg-grape-500" : "bg-ink/20"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${on ? "left-[1.4rem]" : "left-0.5"}`} />
      </span>
    </button>
  );
}
