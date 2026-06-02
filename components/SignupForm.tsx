"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

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
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error === "Please enter a valid email address." ? t.invalidEmail : t.errorGeneric);
        return;
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
