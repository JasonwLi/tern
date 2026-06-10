"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { ContentUi } from "@/lib/content/ui";

interface StatusResult {
  position: number;
  referralCode: string;
  referralCount: number;
}

export default function StatusChecker({
  locale,
  ui,
  signup,
}: {
  locale: Locale;
  ui: ContentUi;
  signup: Dictionary["signup"];
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [result, setResult] = useState<StatusResult | null>(null);
  const [copied, setCopied] = useState(false);

  async function check(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setNotFound(false);
    setResult(null);
    try {
      const res = await fetch("/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.found) {
        setResult(data);
      } else {
        setNotFound(true);
      }
    } catch {
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }

  function referralLink(): string {
    if (typeof window === "undefined" || !result) return "";
    return `${window.location.origin}/${locale}?ref=${result.referralCode}`;
  }

  async function copyLink() {
    const link = referralLink();
    if (!link) return;
    try {
      if (navigator.share) {
        await navigator.share({ url: link });
        return;
      }
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // share sheet dismissed
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={check} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          placeholder={signup.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-full border-2 border-ink/10 bg-white px-5 py-3.5 text-base text-ink shadow-sm outline-none transition focus:border-grape-500 focus:ring-4 focus:ring-grape-500/20"
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 rounded-full bg-grape-500 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-grape-500/30 transition hover:-translate-y-0.5 hover:bg-grape-600 disabled:opacity-70"
        >
          {loading ? ui.statusChecking : ui.statusCheck}
        </button>
      </form>

      {notFound && (
        <p className="mt-4 rounded-2xl bg-coral-300/30 p-4 text-sm font-medium text-ink" role="alert">
          {ui.statusNotFound}
        </p>
      )}

      {result && (
        <div className="mt-6 rounded-card border-2 border-lime-400 bg-white p-6" role="status">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-grape-50 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft/70">
                {ui.statusPosition}
              </p>
              <p className="font-display text-4xl font-bold text-grape-600">
                #{result.position.toLocaleString()}
              </p>
            </div>
            <div className="rounded-2xl bg-lime-300/40 p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft/70">
                {ui.statusReferrals}
              </p>
              <p className="font-display text-4xl font-bold text-ink">{result.referralCount}</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="font-display text-sm font-bold text-ink">{signup.referralTitle}</p>
            <p className="mt-1 text-sm text-ink-soft">{signup.referralBody}</p>
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
                {copied ? signup.referralCopied : signup.referralCopy}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
