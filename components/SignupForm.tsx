"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { contentUi } from "@/lib/content/ui";
import { isLocale, defaultLocale, type Locale } from "@/lib/i18n/config";

const HOME_COUNTRIES = [
  "United Kingdom", "Ireland", "France", "Germany", "Italy", "Spain",
  "Netherlands", "Sweden", "South Korea", "Japan", "Taiwan", "Hong Kong",
  "Canada", "United States", "Argentina", "Chile", "Other",
];

const WHV_COUNTRIES = [
  "Australia", "New Zealand", "Canada", "United Kingdom", "Ireland",
  "Japan", "Germany", "France", "Other",
];

type Status = "idle" | "loading" | "success" | "already" | "error";

export default function SignupForm({
  variant = "hero",
  t,
}: {
  variant?: "hero" | "footer";
  t: Dictionary["signup"];
}) {
  const [email, setEmail] = useState("");
  const [homeCountry, setHomeCountry] = useState("");
  const [whvCountry, setWhvCountry] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          homeCountry,
          whvCountry,
          company,
          referrer: typeof document !== "undefined" ? document.referrer : "",
          locale:
            typeof window !== "undefined"
              ? window.location.pathname.split("/")[1] || ""
              : "",
          ref:
            typeof window !== "undefined"
              ? new URLSearchParams(window.location.search).get("ref") || ""
              : "",
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error === "Please enter a valid email address." ? t.invalidEmail : t.errorGeneric);
        return;
      }

      if (typeof data.referralCode === "string" && data.referralCode) {
        setReferralCode(data.referralCode);
      }
      if (data.alreadyJoined) {
        setStatus("already");
        setMessage(t.alreadyBody);
      } else {
        setStatus("success");
        setMessage(t.successBody.replace("{pos}", data.position?.toLocaleString?.() ?? ""));
      }
    } catch {
      setStatus("error");
      setMessage(t.networkError);
    }
  }

  function currentLocale(): Locale {
    if (typeof window === "undefined") return defaultLocale;
    const seg = window.location.pathname.split("/")[1] || "";
    return isLocale(seg) ? seg : defaultLocale;
  }

  function referralLink(): string {
    if (typeof window === "undefined" || !referralCode) return "";
    return `${window.location.origin}/${currentLocale()}?ref=${referralCode}`;
  }

  async function copyLink() {
    const link = referralLink();
    if (!link) return;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Tern", text: t.referralBody, url: link });
        return;
      }
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // user cancelled share sheet — nothing to do
    }
  }

  function whatsappHref(): string {
    return `https://wa.me/?text=${encodeURIComponent(`${t.referralBody} ${referralLink()}`)}`;
  }

  const done = status === "success" || status === "already";

  if (done) {
    return (
      <div
        className={`rounded-card border-2 border-lime-400 bg-lime-300/40 p-6 text-ink ${variant === "hero" ? "" : "text-left"}`}
        role="status"
        aria-live="polite"
      >
        <div className="mb-1 flex items-center gap-2 text-lg font-bold font-display">
          <span aria-hidden>🎉</span> {t.successTitle}
        </div>
        <p className="text-ink-soft">{message}</p>

        {referralCode && (
          <div className="mt-4 rounded-2xl bg-white p-4">
            <p className="font-display text-sm font-bold text-ink">{t.referralTitle}</p>
            <p className="mt-1 text-sm text-ink-soft">{t.referralBody}</p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <input
                readOnly
                value={referralLink()}
                onFocus={(e) => e.target.select()}
                className="min-w-0 flex-1 rounded-full border-2 border-ink/10 bg-grape-50 px-4 py-2.5 text-xs text-ink-soft outline-none"
              />
              <button
                onClick={copyLink}
                className="shrink-0 rounded-full bg-grape-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-grape-600"
              >
                {copied ? t.referralCopied : t.referralCopy}
              </button>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-[#25D366] px-5 py-2.5 text-center text-sm font-bold text-white transition hover:opacity-90"
              >
                WhatsApp
              </a>
            </div>
            <a
              href={`/${currentLocale()}/status`}
              className="mt-3 inline-block text-xs font-semibold text-grape-500 underline underline-offset-2 hover:text-grape-600"
            >
              {contentUi[currentLocale()].statusNav} →
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" aria-label={t.join}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor={`email-${variant}`}>
          {t.emailPlaceholder}
        </label>
        <input
          id={`email-${variant}`}
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-full border-2 border-ink/10 bg-white px-5 py-3.5 text-base text-ink shadow-sm outline-none transition focus:border-grape-500 focus:ring-4 focus:ring-grape-500/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-full bg-grape-500 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-grape-500/30 transition hover:-translate-y-0.5 hover:bg-grape-600 active:translate-y-0 disabled:opacity-70"
        >
          {status === "loading" ? t.joining : t.join}
        </button>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor={`home-${variant}`}>
            {t.fromPlaceholder}
          </label>
          <select
            id={`home-${variant}`}
            value={homeCountry}
            onChange={(e) => setHomeCountry(e.target.value)}
            className="w-full rounded-full border-2 border-ink/10 bg-white px-5 py-2.5 text-sm text-ink-soft outline-none focus:border-grape-500"
          >
            <option value="">{t.fromPlaceholder}</option>
            {HOME_COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="sr-only" htmlFor={`whv-${variant}`}>
            {t.workingPlaceholder}
          </label>
          <select
            id={`whv-${variant}`}
            value={whvCountry}
            onChange={(e) => setWhvCountry(e.target.value)}
            className="w-full rounded-full border-2 border-ink/10 bg-white px-5 py-2.5 text-sm text-ink-soft outline-none focus:border-grape-500"
          >
            <option value="">{t.workingPlaceholder}</option>
            {WHV_COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* honeypot field — hidden from humans */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="mt-2 text-sm font-medium text-coral-500" role="alert">
          {message}
        </p>
      )}
      <p className="mt-3 text-xs text-ink-soft/70">{t.noSpam}</p>
    </form>
  );
}
