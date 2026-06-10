"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

type Tab = "home" | "swap" | "card" | "design";

export default function AppDemo({ locale = "en" }: { locale?: string }) {
  const [tab, setTab] = useState<Tab>("home");

  // Deep-linkable tabs: /demo?tab=design opens the card customiser directly.
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tab");
    if (t === "swap" || t === "card" || t === "design") setTab(t);
  }, []);
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
          {tab === "design" && <Design locale={locale} />}
        </div>

        {/* bottom nav */}
        <nav className="flex border-t border-ink/10 bg-white">
          {([
            ["home", "🏠", "Home"],
            ["swap", "🔄", "Swap"],
            ["card", "💳", "Card"],
            ["design", "✨", "Design"],
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

const FINISHES = [
  {
    key: "silver",
    label: "Silver",
    card: "bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-500",
    text: "text-zinc-700",
    sub: "text-zinc-600",
    swatch: "bg-gradient-to-br from-zinc-200 to-zinc-500",
    dark: false,
  },
  {
    key: "graphite",
    label: "Graphite",
    card: "bg-gradient-to-br from-zinc-600 via-zinc-800 to-zinc-950",
    text: "text-zinc-200",
    sub: "text-zinc-400",
    swatch: "bg-gradient-to-br from-zinc-600 to-zinc-950",
    dark: true,
  },
  {
    key: "rose",
    label: "Rose gold",
    card: "bg-gradient-to-br from-[#f4cfc4] via-[#e8b4a4] to-[#d29985]",
    text: "text-[#7a4a38]",
    sub: "text-[#96604c]",
    swatch: "bg-gradient-to-br from-[#f0c5b8] to-[#d29985]",
    dark: false,
  },
  {
    key: "grape",
    label: "Grape",
    card: "bg-gradient-to-br from-grape-300 via-grape-500 to-grape-700",
    text: "text-white",
    sub: "text-grape-100",
    swatch: "bg-gradient-to-br from-grape-300 to-grape-700",
    dark: true,
  },
  {
    key: "midnight",
    label: "Midnight",
    card: "bg-gradient-to-br from-slate-700 via-slate-900 to-black",
    text: "text-sky-200",
    sub: "text-slate-400",
    swatch: "bg-gradient-to-br from-slate-700 to-black",
    dark: true,
  },
  {
    key: "aurora",
    label: "Aurora",
    card: "card-aurora",
    text: "text-white",
    sub: "text-white/80",
    swatch: "bg-gradient-to-br from-grape-500 via-coral-400 to-lime-400",
    dark: true,
  },
] as const;

const PATTERNS = [
  { key: "none", label: "Clean" },
  { key: "flock", label: "Flock" },
  { key: "topo", label: "Topo" },
  { key: "waves", label: "Waves" },
  { key: "stamps", label: "Stamps" },
] as const;

const CHARMS = ["", "✈️", "🌏", "🐨", "🏄", "🌴", "⚡"] as const;

// Engraved-look pattern overlays; colour adapts to finish via currentColor.
function PatternOverlay({ pattern, dark }: { pattern: string; dark: boolean }) {
  if (pattern === "none") return null;
  const tone = dark ? "text-white/25" : "text-black/15";
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${tone}`}
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      {pattern === "flock" && (
        <g strokeWidth="3" strokeLinecap="round">
          <path d="M210 40c8 6 16 6 24 0M234 40c8 6 16 6 24 0" />
          <path d="M250 78c6 4.5 12 4.5 18 0M268 78c6 4.5 12 4.5 18 0" />
          <path d="M186 96c5 4 10 4 15 0M201 96c5 4 10 4 15 0" />
          <path d="M236 124c4 3 8 3 12 0M248 124c4 3 8 3 12 0" />
        </g>
      )}
      {pattern === "topo" && (
        <g strokeWidth="1.5">
          <path d="M-20 150c60-40 120 10 180-25s120-15 180-45" />
          <path d="M-20 170c60-40 130 5 190-30s115-10 170-40" />
          <path d="M-20 190c65-38 135 0 195-32s110-8 165-36" />
          <path d="M40 -10c-10 40 30 60 20 95s30 55 15 90" />
          <path d="M70 -10c-10 38 28 58 18 92s28 52 14 86" />
        </g>
      )}
      {pattern === "waves" && (
        <g strokeWidth="2.5" strokeLinecap="round">
          <path d="M0 140q20-12 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0" />
          <path d="M0 158q20-12 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0" />
          <path d="M0 176q20-12 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0" />
        </g>
      )}
      {pattern === "stamps" && (
        <g strokeWidth="2" strokeDasharray="5 4">
          <circle cx="245" cy="60" r="32" />
          <circle cx="245" cy="60" r="24" />
          <rect x="170" y="110" width="80" height="46" rx="8" transform="rotate(-12 210 133)" />
          <circle cx="120" cy="160" r="22" />
        </g>
      )}
    </svg>
  );
}

function Design({ locale }: { locale: string }) {
  const [name, setName] = useState("A. RILEY");
  const [finish, setFinish] = useState<(typeof FINISHES)[number]>(FINISHES[0]);
  const [pattern, setPattern] = useState<(typeof PATTERNS)[number]["key"]>("flock");
  const [charm, setCharm] = useState<(typeof CHARMS)[number]>("");
  const [vertical, setVertical] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 35 });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ rx: (py - 0.5) * -16, ry: (px - 0.5) * 16, gx: px * 100, gy: py * 100 });
  }
  function onLeave() {
    setTilt({ rx: 0, ry: 0, gx: 50, gy: 35 });
  }
  function shuffle() {
    setFinish(FINISHES[Math.floor(Math.random() * FINISHES.length)]);
    setPattern(PATTERNS[Math.floor(Math.random() * PATTERNS.length)].key);
    setCharm(CHARMS[Math.floor(Math.random() * CHARMS.length)]);
  }

  return (
    <div className="flex min-h-full flex-col px-5 pb-6 pt-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-display text-2xl font-bold text-ink">Design your metal card</p>
          <p className="text-sm text-ink-soft">Free for the first 1,000 on the waitlist</p>
        </div>
        <button
          onClick={shuffle}
          className="shrink-0 rounded-full bg-grape-50 px-3 py-2 text-xs font-bold text-grape-600 transition active:scale-95"
        >
          🎲 Surprise me
        </button>
      </div>

      {/* live preview with 3D tilt + glare */}
      <div
        className="mx-auto mt-6 [perspective:700px]"
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div
          className={`relative overflow-hidden rounded-3xl p-5 shadow-2xl shadow-black/30 ring-1 ring-white/40 transition-[width,height] duration-300 ${finish.card} ${
            vertical ? "flex h-[290px] w-[184px] flex-col" : "flex aspect-[8/5] w-[300px] flex-col"
          }`}
          style={{
            transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: "transform 120ms ease-out",
          }}
        >
          <PatternOverlay pattern={pattern} dark={finish.dark} />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/25 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.4), transparent 55%)`,
            }}
          />
          <div className="relative flex items-center justify-between">
            <Logo className="h-7 w-7" />
            <span className={`text-[9px] font-bold tracking-[0.25em] ${finish.sub}`}>METAL</span>
          </div>
          {charm && (
            <span
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-3xl opacity-80 drop-shadow"
              aria-hidden
            >
              {charm}
            </span>
          )}
          <div className="relative mt-auto">
            <div className={`font-display text-base tracking-[0.3em] ${finish.text}`}>
              •••• 1000
            </div>
            <div className="mt-2 flex items-end justify-between">
              <span
                className={`max-w-[65%] truncate text-[11px] font-bold uppercase tracking-[0.2em] ${finish.sub}`}
              >
                {name.trim() || "YOUR NAME"}
              </span>
              <span className={`font-display text-lg font-bold italic ${finish.text}`}>VISA</span>
            </div>
          </div>
        </div>
      </div>

      {/* finish swatches */}
      <p className="mt-5 text-[10px] font-bold uppercase tracking-wider text-ink-soft/60">Finish</p>
      <div className="no-scrollbar mt-1.5 flex gap-3 overflow-x-auto pb-1">
        {FINISHES.map((f) => (
          <button
            key={f.key}
            onClick={() => setFinish(f)}
            aria-label={f.label}
            className={`flex shrink-0 flex-col items-center gap-1 ${finish.key === f.key ? "" : "opacity-60"}`}
          >
            <span
              className={`h-9 w-9 rounded-full ${f.swatch} ring-2 ${
                finish.key === f.key ? "ring-grape-500" : "ring-transparent"
              }`}
            />
            <span className="text-[9px] font-semibold text-ink-soft">{f.label}</span>
          </button>
        ))}
      </div>

      {/* pattern chips */}
      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-ink-soft/60">Engraving</p>
      <div className="mt-1.5 flex flex-wrap gap-2">
        {PATTERNS.map((pt) => (
          <button
            key={pt.key}
            onClick={() => setPattern(pt.key)}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
              pattern === pt.key
                ? "bg-grape-500 text-white"
                : "bg-white text-ink-soft ring-1 ring-ink/10"
            }`}
          >
            {pt.label}
          </button>
        ))}
      </div>

      {/* charm + orientation */}
      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-ink-soft/60">Charm</p>
      <div className="mt-1.5 flex items-center gap-2">
        {CHARMS.map((c, i) => (
          <button
            key={i}
            onClick={() => setCharm(c)}
            aria-label={c || "No charm"}
            className={`grid h-9 w-9 place-items-center rounded-full text-base transition ${
              charm === c ? "bg-grape-500" : "bg-white ring-1 ring-ink/10"
            }`}
          >
            {c || <span className={charm === c ? "text-white" : "text-ink-soft"}>—</span>}
          </button>
        ))}
        <button
          onClick={() => setVertical(!vertical)}
          className="ml-auto rounded-full bg-white px-3 py-2 text-xs font-bold text-ink-soft ring-1 ring-ink/10 transition active:scale-95"
        >
          🔁 {vertical ? "Landscape" : "Portrait"}
        </button>
      </div>

      {/* name input */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value.toUpperCase().slice(0, 20))}
        placeholder="YOUR NAME"
        className="mt-4 w-full rounded-full border-2 border-ink/10 bg-white px-5 py-3 text-center font-display text-sm font-bold tracking-[0.2em] text-ink outline-none focus:border-grape-500"
        aria-label="Name on card"
      />

      <a
        href={`/${locale}#waitlist`}
        className="mt-5 block w-full rounded-full bg-grape-500 py-4 text-center text-base font-bold text-white shadow-lg shadow-grape-500/30 transition active:scale-95"
      >
        Reserve it — join the waitlist
      </a>
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
