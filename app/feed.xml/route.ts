import { guides, posts, content } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  const items = [
    ...guides.map((a) => ({ a, base: "guides" })),
    ...posts.map((a) => ({ a, base: "blog" })),
  ]
    .filter(({ a }) => a.date)
    .sort((x, y) => (y.a.date ?? "").localeCompare(x.a.date ?? ""));

  const entries = items
    .map(({ a, base }) => {
      const c = content(a, "en");
      const url = `${SITE_URL}/en/${base}/${a.slug}`;
      return `    <item>
      <title>${esc(c.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(a.date as string).toUTCString()}</pubDate>
      <description>${esc(c.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tern — Working holiday money guides</title>
    <link>${SITE_URL}/en/blog</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Guides and posts on money, tax and banking for working holiday visa travellers.</description>
    <language>en</language>
${entries}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
