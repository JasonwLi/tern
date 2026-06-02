// Canonical site origin. Set NEXT_PUBLIC_SITE_URL (e.g. https://whvwithtern.com)
// in the environment; defaults to the brand domain. Used for canonical URLs,
// hreflang, OpenGraph and JSON-LD. Note: pages are statically generated, so this
// is read at build time — set it before `next build` / redeploy after changing it.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tern.app"
).replace(/\/+$/, "");
