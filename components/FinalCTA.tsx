import SignupForm from "./SignupForm";
import WaitlistCount from "./WaitlistCount";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function FinalCTA({
  t,
  signup,
  waitlistSuffix,
}: {
  t: Dictionary["finalCta"];
  signup: Dictionary["signup"];
  waitlistSuffix: string;
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

          <div className="mt-8 rounded-card bg-white/95 p-5 text-left shadow-xl sm:p-7">
            <SignupForm variant="footer" t={signup} />
          </div>

          <div className="mt-6 flex justify-center">
            <WaitlistCount suffix={waitlistSuffix} />
          </div>
        </div>
      </div>
    </section>
  );
}
