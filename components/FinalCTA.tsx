import SignupForm from "./SignupForm";
import WaitlistCount from "./WaitlistCount";
import { Logo } from "./Logo";
import type { Dictionary } from "@/lib/i18n/dictionaries";

// CSS-only render of the customisable metal card (launch perk for the
// first 1,000 signups).
function MetalCard() {
  return (
    <div
      className="relative h-28 w-44 shrink-0 -rotate-3 rounded-2xl bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-500 p-3 text-left shadow-2xl shadow-black/40 ring-1 ring-white/40"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/40 to-transparent" />
      <div className="flex items-center justify-between">
        <Logo className="h-5 w-5" />
        <span className="text-[8px] font-bold tracking-[0.2em] text-zinc-600">METAL</span>
      </div>
      <div className="mt-5 font-display text-[11px] tracking-[0.25em] text-zinc-700">
        •••• 1000
      </div>
      <div className="mt-1.5 flex items-end justify-between">
        <span className="text-[8px] font-semibold tracking-wider text-zinc-600">YOUR NAME</span>
        <span className="font-display text-[11px] font-bold italic text-zinc-700">VISA</span>
      </div>
    </div>
  );
}

export default function FinalCTA({
  t,
  signup,
  waitlistSuffix,
  waitlistEarly,
}: {
  t: Dictionary["finalCta"];
  signup: Dictionary["signup"];
  waitlistSuffix: string;
  waitlistEarly: string;
}) {
  return (
    <section id="waitlist" className="scroll-mt-20 px-5 py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-grape-500 px-6 py-16 text-center text-white shadow-2xl shadow-grape-500/30 sm:px-12">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-10 -top-10 h-52 w-52 rounded-full bg-lime-400/30 blur-3xl" />
          <div className="absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-coral-400/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance font-display text-4xl font-bold sm:text-5xl">{t.title}</h2>
          <p className="mt-4 text-lg text-white/80">{t.sub}</p>

          {/* Launch perks */}
          <div className="mt-7 flex flex-col items-center gap-5 rounded-card bg-white/10 p-5 text-left sm:flex-row sm:p-6">
            <MetalCard />
            <ul className="space-y-2 text-sm text-white/90">
              <li>{signup.kitTeaser}</li>
              <li>🏆 {signup.foundingNote}</li>
              <li>💳 {signup.metalNote}</li>
            </ul>
          </div>

          <div className="mt-6 rounded-card bg-white/95 p-5 text-left shadow-xl sm:p-7">
            <SignupForm variant="footer" t={signup} />
          </div>

          <div className="mt-6 flex justify-center">
            <WaitlistCount suffix={waitlistSuffix} early={waitlistEarly} />
          </div>
        </div>
      </div>
    </section>
  );
}
