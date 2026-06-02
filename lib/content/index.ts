import type { Locale } from "@/lib/i18n/config";
import type { Article, ArticleLocale } from "./types";

import { article as gBankAccount } from "./guides/bank-account-working-holiday-australia";
import { article as gTaxRefund } from "./guides/working-holiday-tax-refund-australia";
import { article as gDasp } from "./guides/superannuation-refund-dasp";
import { article as gBankAccountNZ } from "./guides/bank-account-working-holiday-new-zealand";
import { article as gBankAccountCA } from "./guides/bank-account-working-holiday-canada";
import { article as gNoAtmFees } from "./guides/no-atm-fees-working-holiday";

import { article as pSendMoney } from "./blog/send-money-home-working-holiday";
import { article as pProofOfFunds } from "./blog/proof-of-funds-working-holiday-visa";
import { article as pSecondYear } from "./blog/second-year-visa-88-days";

// Guides are evergreen; order is curated.
export const guides: Article[] = [gBankAccount, gTaxRefund, gDasp, gBankAccountNZ, gBankAccountCA, gNoAtmFees];

// Posts are date-ordered (newest first).
export const posts: Article[] = [pProofOfFunds, pSecondYear, pSendMoney].sort(
  (a, b) => (b.date ?? "").localeCompare(a.date ?? "")
);

export function getGuide(slug: string): Article | undefined {
  return guides.find((a) => a.slug === slug);
}

export function getPost(slug: string): Article | undefined {
  return posts.find((a) => a.slug === slug);
}

export function content(a: Article, locale: Locale): ArticleLocale {
  return a.i18n[locale] ?? a.i18n.en;
}

export function hasLocale(a: Article, locale: Locale): boolean {
  return Boolean(a.i18n[locale]);
}

// Locales for which a localized version of this article exists (for hreflang).
export function availableLocales(a: Article): Locale[] {
  return Object.keys(a.i18n) as Locale[];
}
