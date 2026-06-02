import { Logo } from "./Logo";

// Pure-CSS app mockup: a phone showing a balance + a "salary received" ping,
// with a floating debit card. No image asset needed, stays crisp at any size.
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* glow blobs */}
      <div className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-lime-400/40 blur-3xl" aria-hidden />
      <div className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-coral-400/40 blur-3xl" aria-hidden />

      {/* phone */}
      <div className="relative rounded-[2.5rem] border-[6px] border-ink bg-ink p-2 shadow-2xl shadow-grape-700/30">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-grape-500 to-grape-700">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-medium text-white/80">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span aria-hidden>📶</span>
              <span aria-hidden>🔋</span>
            </div>
          </div>

          {/* header */}
          <div className="flex items-center justify-between px-5 pt-2">
            <div className="flex items-center gap-2">
              <Logo className="h-7 w-7" />
              <span className="font-display text-sm font-bold text-white">Tern</span>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-xs">
              🧑‍🌾
            </span>
          </div>

          {/* balance */}
          <div className="px-5 pb-5 pt-6 text-white">
            <p className="text-xs uppercase tracking-wider text-white/70">AUD balance</p>
            <p className="font-display text-4xl font-bold">$4,182.50</p>
            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-lime-400/25 px-2 py-0.5 text-xs font-semibold text-lime-300">
              +$1,040 this week
            </div>
          </div>

          {/* notification card */}
          <div className="mx-3 mb-3 rounded-2xl bg-white p-3 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-lime-300 text-base">💸</span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-ink">Salary received</p>
                <p className="text-xs text-ink-soft">Sunny Coast Farms Pty · just now</p>
              </div>
              <span className="ml-auto font-display text-sm font-bold text-lime-600">+$1,040</span>
            </div>
          </div>

          {/* quick actions */}
          <div className="grid grid-cols-3 gap-2 bg-white px-3 pb-5 pt-3 text-center">
            {[
              { icon: "🌏", label: "Top up\nfrom home" },
              { icon: "🛏️", label: "Hostel\ncashback" },
              { icon: "🔄", label: "Swap\ncurrency" },
            ].map((a) => (
              <div key={a.label} className="rounded-xl bg-grape-50 py-3">
                <div className="text-lg" aria-hidden>{a.icon}</div>
                <div className="mt-1 whitespace-pre-line text-[10px] font-semibold leading-tight text-ink-soft">
                  {a.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* floating card */}
      <div className="animate-float-slow absolute -bottom-8 -right-6 w-52 rotate-6 rounded-2xl bg-gradient-to-br from-coral-400 via-coral-500 to-grape-500 p-4 text-white shadow-2xl shadow-coral-500/40">
        <div className="flex items-center justify-between">
          <Logo className="h-6 w-6" />
          <span className="text-[10px] font-semibold tracking-widest opacity-80">DEBIT</span>
        </div>
        <div className="mt-5 font-display text-sm tracking-[0.2em]">•••• 4821</div>
        <div className="mt-2 flex items-end justify-between">
          <span className="text-[11px] font-medium opacity-90">A. RILEY</span>
          <span className="font-display text-base font-bold italic">VISA</span>
        </div>
      </div>
    </div>
  );
}
