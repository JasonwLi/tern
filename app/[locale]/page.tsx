import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ProblemSection from "@/components/ProblemSection";
import Features from "@/components/Features";
import Spotlights from "@/components/Spotlight";
import ExtraFeatures from "@/components/ExtraFeatures";
import HowItWorks from "@/components/HowItWorks";
import GuidesTeaser from "@/components/GuidesTeaser";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Nav locale={locale} t={dict.nav} />
      <main>
        <Hero locale={locale} t={dict.hero} signup={dict.signup} />
        <TrustMarquee t={dict.marquee} />
        <ProblemSection t={dict.problem} />
        <Features t={dict.features} />
        <Spotlights t={dict.spotlights} />
        <ExtraFeatures t={dict.extras} />
        <HowItWorks t={dict.how} />
        <GuidesTeaser locale={locale} />
        <Testimonials t={dict.testimonials} />
        <FAQ t={dict.faq} />
        <FinalCTA locale={locale} t={dict.finalCta} signup={dict.signup} waitlistSuffix={dict.hero.waitlistSuffix} waitlistEarly={dict.hero.waitlistEarly} />
      </main>
      <Footer locale={locale} t={dict.footer} />
    </>
  );
}
