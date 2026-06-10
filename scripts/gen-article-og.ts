/**
 * gen-article-og.ts — Generate a 1200×630 Open Graph PNG for every article × locale.
 *
 * Usage: npx tsx scripts/gen-article-og.ts
 * Output: public/og/<slug>.<locale>.png
 *
 * Run locally on macOS (CJK titles need the system CJK fonts; the Railway build
 * container doesn't have them). Re-run after adding articles, commit the PNGs.
 */
import sharp from "sharp";
import { mkdirSync, statSync } from "node:fs";
import path from "node:path";
import { guides, posts, content } from "../lib/content";
import { contentUi } from "../lib/content/ui";
import { locales, type Locale } from "../lib/i18n/config";

const OUT_DIR = path.resolve(__dirname, "../public/og");

const LATIN_FONT = "'Verdana','Helvetica Neue','Arial',sans-serif";
const CJK_FONT =
  "'Hiragino Sans','Hiragino Sans GB','PingFang TC','PingFang SC','Apple SD Gothic Neo','Noto Sans CJK','Noto Sans',sans-serif";

const CJK_RE =
  /[ᄀ-ᇿ　-ヿ㄰-㆏㐀-䶿一-鿿가-힯豈-﫿＀-￯]/;

function cost(ch: string): number {
  return CJK_RE.test(ch) ? 1.75 : 1;
}

function lineCost(s: string): number {
  let c = 0;
  for (const ch of s) c += cost(ch);
  return c;
}

// Greedy-wrap a title into <= maxLines lines of <= unitsPerLine cost units.
function wrap(title: string, unitsPerLine: number, maxLines: number): string[] {
  const lines: string[] = [];
  let line = "";

  const pushWord = (word: string) => {
    const candidate = line ? `${line} ${word}` : word;
    if (lineCost(candidate) <= unitsPerLine) {
      line = candidate;
      return;
    }
    if (line) {
      lines.push(line);
      line = "";
    }
    // Word alone too long (e.g. CJK run) — split by character.
    if (lineCost(word) > unitsPerLine) {
      let chunk = "";
      for (const ch of word) {
        if (lineCost(chunk + ch) > unitsPerLine) {
          lines.push(chunk);
          chunk = ch;
        } else {
          chunk += ch;
        }
      }
      line = chunk;
    } else {
      line = word;
    }
  };

  for (const word of title.split(/\s+/)) pushWord(word);
  if (line) lines.push(line);

  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/.{2}$/u, "") + "…";
    return kept;
  }
  return lines;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSvg(title: string, kicker: string, isCjk: boolean): string {
  const fontFamily = isCjk ? CJK_FONT : LATIN_FONT;

  // Pick a font size so the title fits in <= 3 lines.
  const sizes = [64, 56, 48, 42];
  let size = sizes[sizes.length - 1];
  let lines: string[] = [];
  for (const s of sizes) {
    const unitsPerLine = 1020 / (0.58 * s);
    const candidate = wrap(title, unitsPerLine, 3);
    if (candidate.length <= 3 && candidate.every((l) => lineCost(l) <= unitsPerLine)) {
      size = s;
      lines = candidate;
      break;
    }
    lines = candidate;
  }
  const lineHeight = Math.round(size * 1.22);
  // Vertically centre the block between header (y≈170) and kicker (y≈540).
  const blockH = lines.length * lineHeight;
  const firstBaseline = Math.round(190 + (330 - blockH) / 2 + size);

  const titleTspans = lines
    .map(
      (l, i) =>
        `<text x="90" y="${firstBaseline + i * lineHeight}" font-family="${fontFamily}" font-size="${size}" font-weight="bold" fill="#FDF7EF">${esc(l)}</text>`
    )
    .join("\n  ");

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5A37F0"/>
      <stop offset="1" stop-color="#4A2BD0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1110" cy="90" r="200" fill="#C8F560" fill-opacity="0.14"/>
  <circle cx="80" cy="580" r="180" fill="#FF6B4A" fill-opacity="0.18"/>

  <!-- Logo badge + wordmark -->
  <g transform="translate(90, 80)">
    <rect width="56" height="56" rx="16" fill="#6C4DFF"/>
    <g transform="translate(8,8) scale(1.0)">
      <path d="M9 25c4.4.2 7.8-1.4 11-5.2" stroke="#C8F560" stroke-width="3.1" stroke-linecap="round"/>
      <path d="M31 25c-4.4.2-7.8-1.4-11-5.2" stroke="#C8F560" stroke-width="3.1" stroke-linecap="round"/>
      <path d="M25.5 12.5c1.4-1.7 3-1.7 4.5 0" stroke="#C8F560" stroke-width="2.2" stroke-linecap="round"/>
    </g>
    <text x="74" y="40" font-family="${LATIN_FONT}" font-size="34" font-weight="bold" fill="#FDF7EF">Tern</text>
  </g>

  ${titleTspans}

  <!-- Kicker chip -->
  <g transform="translate(90, 520)">
    <rect x="0" y="0" width="${Math.min(1020, Math.round(lineCost(kicker) * 0.62 * 22 + 56))}" height="52" rx="26" fill="#FDF7EF" fill-opacity="0.14"/>
    <text x="28" y="34" font-family="${fontFamily}" font-size="22" fill="#FDF7EF" fill-opacity="0.92">${esc(kicker)}</text>
  </g>
</svg>`;
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const all = [
    ...guides.map((a) => ({ a, kind: "guide" as const })),
    ...posts.map((a) => ({ a, kind: "post" as const })),
  ];

  let count = 0;
  for (const { a, kind } of all) {
    for (const locale of locales as readonly Locale[]) {
      if (!a.i18n[locale]) continue;
      const c = content(a, locale);
      const ui = contentUi[locale];
      const kicker = `${kind === "guide" ? ui.guidesTitle : ui.blogTitle} · whvwithtern.com`;
      const isCjk = CJK_RE.test(c.title);
      const svg = buildSvg(c.title, kicker, isCjk);
      const out = path.join(OUT_DIR, `${a.slug}.${locale}.png`);
      await sharp(Buffer.from(svg), { density: 144 })
        .resize(1200, 630, { fit: "fill" })
        .png({ palette: true, quality: 80, compressionLevel: 9 })
        .toFile(out);
      count++;
    }
  }

  // Spot-verify a few outputs
  for (const probe of [
    `${guides[0].slug}.en.png`,
    `${guides[0].slug}.ja.png`,
    `${posts[0].slug}.zh-TW.png`,
  ]) {
    const p = path.join(OUT_DIR, probe);
    const meta = await sharp(p).metadata();
    const kb = Math.round(statSync(p).size / 1024);
    console.log(`  ${probe}  ${meta.width}×${meta.height}  ${kb} KB`);
  }
  console.log(`\nGenerated ${count} article OG images in public/og/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
