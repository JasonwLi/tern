# Tern — landing page

A bold, SEO-optimized marketing landing page for **Tern**, a concept neobank built for
**working holiday visa (WHV) holders** — young people who work abroad temporarily while travelling.

Built with **Next.js 15 (App Router) + React 19 + Tailwind CSS v4**, with a real
**SQLite-backed waitlist API**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## What's on the page

| Section | Purpose |
|---|---|
| Hero | Headline, inline waitlist form (email + home/WHV country), live signup counter, CSS phone + card mockup |
| Country marquee | Supported WHV destinations (AU, NZ, CA, UK, IE, JP, DE, FR) |
| Problem | The 4 banking pains WHV travellers hit most |
| Core features | Salary day-one, fund-from-home, hostel cashback, peer-to-peer flat-fee currency swaps, physical/virtual card, no ATM fees |
| Spotlights | Two image-rich feature deep-dives (Unsplash photos + app-UI overlays) |
| Built for WHV | 9 **research-backed** extra features (see below) |
| How it works · Testimonials · FAQ · Final CTA · Footer | Conversion + trust + SEO |

## Waitlist API

- `POST /api/signup` → `{ email, homeCountry?, whvCountry? }` — validates, dedupes, stores, returns waitlist position. Includes a honeypot field for bot protection.
- `GET /api/signup` → `{ count }` — total signups (with a display baseline).
- Storage: `lib/db.ts` (SQLite via `better-sqlite3`, file at `.data/waitlist.db`). The API only depends on `addSignup` / `countSignups`, so swapping to Postgres later is a one-file change.

## SEO

- Rich per-locale `metadata` in `app/[locale]/layout.tsx` (title/description/keywords, Open Graph, Twitter card, canonical, hreflang, robots).
- `FinancialProduct` + `FAQPage` JSON-LD structured data.
- `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`, and a generated `public/og.svg` social share image.
- Semantic headings, `scroll-mt` anchors, descriptive image `alt` text.

## Research-backed "Built for WHV" features

These came from researching real WHV complaints across backpacker forums, subreddits, visa
Facebook groups, and ATO / Fair Work / NZ news investigations. The standouts:

1. **Super tracker & DASP refund** — ~AU$21.5B in super sits unclaimed; backpackers leave thousands behind.
2. **Dodge the 45% backpacker tax** — no TFN = 45% withholding; guided TFN/IRD/SIN + tax return (avg AU refund ~$2,600).
3. **Wage-theft pay checker** — 1 in 3 backpackers paid under half minimum wage; cross-checks deposits vs. legal minimum.
4. **Payslip vault & 88-day tracker** — documents regional work for second-year visa eligibility.
5. **Multi-currency + home-currency savings goal** — see your real savings progress back home.
6. **Bond & job-scam protection** — flags rental/job scams before you transfer.
7. **Proof-of-funds certificate** — border-ready balance statement (AU$5k, NZ$4.2k, etc.).
8. **Split bills across currencies** — settle group costs with mates instantly.
9. **Work-friendly insurance** — cover that actually includes farm/hospitality/construction work.

See the full research report in the conversation that generated this project for sources and the
complete list of 15 pain points + 12 feature ideas.

## Internationalization (i18n)

The site is fully localized into **5 languages**, each server-rendered for SEO (not a client-side translate widget):

| Locale | Language | Audience |
|---|---|---|
| `en` | English | default |
| `es` | Spanish (Latin American) | Argentinian/Chilean/etc. WHV travellers |
| `ja` | Japanese | Japanese WHV travellers |
| `ko` | Korean | Korean WHV travellers |
| `zh-TW` | Traditional Chinese | Taiwanese WHV travellers |

How it works:
- **Routing:** all pages live under `app/[locale]/…`. `generateStaticParams` prerenders every page in every language (10 static pages).
- **Auto-detection:** `middleware.ts` redirects `/` → `/{locale}` based on (1) a remembered `NEXT_LOCALE` cookie, (2) the visitor's geo (`x-vercel-ip-country` / `cf-ipcountry` edge headers), then (3) `Accept-Language`. Country→locale and language→locale maps live in `lib/i18n/config.ts`.
- **Content:** all copy lives in `lib/i18n/dictionaries/{locale}.ts`. `en.ts` is the source of truth and its `typeof` becomes the `Dictionary` type — so every other locale is **compile-checked to have exactly the same keys** (a missing translation fails the build).
- **SEO:** per-locale `<html lang>`, `<title>`/description/keywords, `hreflang` alternates for all locales + `x-default`, per-locale canonical, OpenGraph `locale`/`alternateLocale`, localized `FAQPage` JSON-LD, and all locales/pages in `sitemap.xml`.
- **Switcher:** `components/LanguageSwitcher.tsx` (in the nav) lets users override the auto-detected language; the choice is remembered in the cookie.

> ⚠️ The `es` / `ja` / `ko` / `zh-TW` translations were produced by AI and should be **reviewed by native speakers** before launch — especially the founder story on `/about` and idiomatic marketing lines. To edit, just change the relevant `lib/i18n/dictionaries/{locale}.ts` file; the structure is identical to `en.ts`.

To add a language: add the code to `locales` in `lib/i18n/config.ts` (plus `localeMeta`, `ogLocale`, and the geo/Accept-Language maps), create `lib/i18n/dictionaries/{locale}.ts`, and wire it into `lib/i18n/dictionaries.ts`.

## Content: guides & blog (programmatic SEO)

Beyond the landing page, the site has a **localized content engine** for ranking on the long-tail searches this audience actually makes.

- **Guides** (`/[locale]/guides` + `/[locale]/guides/[slug]`) — evergreen, high-intent how-tos. 6 so far: AU bank account, 45% tax/TFN, superannuation/DASP, **NZ bank account/IRD**, **Canada IEC/SIN**, and a **no-ATM-fees** explainer.
- **Blog** (`/[locale]/blog` + `/[locale]/blog/[slug]`) — dated posts (send money home, proof of funds, second-year-visa 88 days).

Every article is **localized into all 5 languages** and statically prerendered — 9 articles × 5 locales + 4 index pages = **49 content pages**. Each article ends with a **Sources** list (real official URLs: ATO, Home Affairs, Immigration NZ, IRCC, IRD) and a localized **"not financial/migration advice" disclaimer**.

How it's built:
- **Content model:** `lib/content/types.ts`. Each article is one file under `lib/content/guides/` or `lib/content/blog/`, with an `i18n` map (`en` required; `es`/`ja`/`ko`/`zh-TW` added per locale). Body is structured (`sections[]` with headings/paragraphs/bullets + an optional `faq[]`), so it renders to clean semantic HTML.
- **Registry/helpers:** `lib/content/index.ts` (`guides`, `posts`, `content()`, `hasLocale()`, `availableLocales()`).
- **UI chrome:** `lib/content/ui.ts` holds the localized section labels (titles, "min read", CTA, breadcrumbs) for all 5 locales.
- **Rendering:** `components/content/ArticleView.tsx` (article) and `ArticleCard.tsx` (index cards).
- **SEO per article:** localized `<title>`/description, self-canonical, `hreflang` for every locale the article exists in + `x-default`, OpenGraph `type: article`, and three JSON-LD blocks — **Article/BlogPosting + BreadcrumbList + FAQPage**. All articles are added to `sitemap.xml` with per-article `hreflang` alternates.
- **Internal linking:** Guides/Blog are in the nav + footer; each article links to a localized waitlist CTA and 2 related articles.

To add an article: drop a new file in `lib/content/guides/` or `blog/` (start with `i18n.en`), import it into `lib/content/index.ts`, and translate the other locales (the `tsc` build will tell you if a locale is structurally incomplete). New `(locale, slug)` pages are generated automatically via `generateStaticParams`.

> ⚠️ Article translations are AI-generated — native-review before launch. Bodies cite real figures (45% tax, 65% DASP, AUD 5,000 proof of funds, 88 days) and now ship with official-source links + a disclaimer, but **re-verify the figures against the cited sources at launch** since they change.

### Open Graph images

Real 1200×630 **PNG** share images, one per locale with a native tagline, live in `public/og-<locale>.png` (+ a default `public/og.png`). They're generated by `scripts/gen-og.mjs` (rasterizes a branded SVG via `sharp`, using macOS system CJK fonts so JA/KO/ZH render). Regenerate with `node scripts/gen-og.mjs`. Metadata wires each page to `/og-${locale}.png`.

## Customising

- **Images:** spotlight photos are Unsplash URLs in `components/Spotlight.tsx` — swap for your own brand photography (remote host allow-listed in `next.config.mjs`).
- **Copy / features:** edit the arrays at the top of each component in `components/`.
- **Signup destination:** point `lib/db.ts` at your production database, or forward to a CRM/ESP from `app/api/signup/route.ts`.
- **Domain:** update `SITE_URL` in `app/[locale]/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`.
