import type { Locale } from "@/lib/i18n/config";
import type { Article, ArticleLocale } from "./types";

// Bank-account guides
import { article as gBankAU } from "./guides/bank-account-working-holiday-australia";
import { article as gBankNZ } from "./guides/bank-account-working-holiday-new-zealand";
import { article as gBankCA } from "./guides/bank-account-working-holiday-canada";
import { article as gBankUK } from "./guides/bank-account-working-holiday-uk";
import { article as gBankIE } from "./guides/bank-account-working-holiday-ireland";
import { article as gBankDE } from "./guides/bank-account-working-holiday-germany";
import { article as gBankJP } from "./guides/bank-account-working-holiday-japan";
// Tax & super guides
import { article as gTaxAU } from "./guides/working-holiday-tax-refund-australia";
import { article as gTaxNZ } from "./guides/tax-refund-working-holiday-new-zealand";
import { article as gDasp } from "./guides/superannuation-refund-dasp";
// Comparison guides
import { article as gBestAU } from "./guides/best-bank-working-holiday-australia";
import { article as gBestNZ } from "./guides/best-bank-working-holiday-new-zealand";
import { article as gBestCA } from "./guides/best-bank-working-holiday-canada";
// Budget & practical guides
import { article as gBudgetAU } from "./guides/how-much-money-working-holiday-australia";
import { article as gBudgetNZ } from "./guides/how-much-money-working-holiday-new-zealand";
import { article as gBudgetCA } from "./guides/how-much-money-working-holiday-canada";
import { article as gChecklist } from "./guides/first-week-money-checklist-australia";
import { article as gNoAtm } from "./guides/no-atm-fees-working-holiday";

// Blog posts
import { article as pSendMoney } from "./blog/send-money-home-working-holiday";
import { article as pSendMoneyNZ } from "./blog/send-money-home-from-new-zealand";
import { article as pProofOfFunds } from "./blog/proof-of-funds-working-holiday-visa";
import { article as pSecondYear } from "./blog/second-year-visa-88-days";
import { article as pWhatBsb } from "./blog/what-is-a-bsb-number";
import { article as pWhatTfn } from "./blog/what-is-a-tfn";
import { article as pWhatSuper } from "./blog/what-is-superannuation";
import { article as pWhatIrd } from "./blog/what-is-an-ird-number";
import { article as pWiseRevolut } from "./blog/wise-vs-revolut-working-holiday";

// Guides are evergreen; order is curated (strongest/most-searched first).
export const guides: Article[] = [
  gBankAU,
  gTaxAU,
  gDasp,
  gBankNZ,
  gBankCA,
  gBestAU,
  gBestNZ,
  gBestCA,
  gBudgetAU,
  gBudgetNZ,
  gBudgetCA,
  gChecklist,
  gTaxNZ,
  gBankUK,
  gBankIE,
  gBankDE,
  gBankJP,
  gNoAtm,
];

// Posts are date-ordered (newest first).
export const posts: Article[] = [
  pProofOfFunds,
  pSecondYear,
  pSendMoney,
  pSendMoneyNZ,
  pWiseRevolut,
  pWhatIrd,
  pWhatSuper,
  pWhatTfn,
  pWhatBsb,
].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

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
