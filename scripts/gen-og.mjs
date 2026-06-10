/**
 * gen-og.mjs — Generate 1200×630 Open Graph PNG images for each locale.
 *
 * Usage: node scripts/gen-og.mjs
 *
 * Outputs:
 *   public/og.png          (English / default)
 *   public/og-en.png
 *   public/og-es.png
 *   public/og-ja.png
 *   public/og-ko.png
 *   public/og-zh-TW.png
 */

import sharp from "sharp";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");

// ─── Locale config ───────────────────────────────────────────────────────────

const LOCALES = [
  {
    locale: "en",
    tagline: "The neobank for your\nworking holiday",
    cjk: false,
  },
  {
    locale: "es",
    tagline: "El neobanco para tu\nworking holiday",
    cjk: false,
  },
  {
    locale: "pt",
    tagline: "O banco digital para o\nseu working holiday",
    cjk: false,
  },
  {
    locale: "de",
    tagline: "Die Neobank für dein\nWork and Travel",
    cjk: false,
  },
  {
    locale: "fr",
    tagline: "La néobanque pensée\npour ton PVT",
    cjk: false,
  },
  {
    locale: "it",
    tagline: "La neobank per il tuo\nworking holiday",
    cjk: false,
  },
  {
    locale: "ja",
    tagline: "ワーホリのための\n新しい銀行",
    cjk: true,
  },
  {
    locale: "ko",
    tagline: "워홀을 위한\n새로운 뱅킹",
    cjk: true,
  },
  {
    locale: "zh-TW",
    tagline: "為打工度假打造的\n數位銀行",
    cjk: true,
  },
];

// Font stacks
const LATIN_FONT =
  "'Verdana','Helvetica Neue','Arial',sans-serif";

const CJK_FONT =
  "'Hiragino Sans','Hiragino Sans GB','PingFang TC','PingFang SC','Apple SD Gothic Neo','Noto Sans CJK','Noto Sans',sans-serif";

// ─── SVG builder ─────────────────────────────────────────────────────────────

/**
 * Build the SVG string for a given locale config.
 * Two-line tagline: line1 at y=300, line2 at y=388 (lime accent).
 */
function buildSvg({ tagline, cjk }) {
  const fontFamily = cjk ? CJK_FONT : LATIN_FONT;
  const lines = tagline.split("\n");
  const line1 = lines[0] ?? "";
  const line2 = lines[1] ?? "";

  // Dynamically size headline font: CJK glyphs are wider so use slightly
  // smaller font-size for long CJK lines.
  const headlineSize = cjk ? 72 : 72;

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5A37F0"/>
      <stop offset="1" stop-color="#4A2BD0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="120" cy="120" r="180" fill="#C8F560" fill-opacity="0.18"/>
  <circle cx="1080" cy="540" r="220" fill="#FF6B4A" fill-opacity="0.22"/>

  <!-- Logo badge -->
  <g transform="translate(90, 88)">
    <rect width="64" height="64" rx="18" fill="#6C4DFF"/>
    <g transform="translate(12,12) scale(1.0)">
      <path d="M9 25c4.4.2 7.8-1.4 11-5.2" stroke="#C8F560" stroke-width="3.1" stroke-linecap="round"/>
      <path d="M31 25c-4.4.2-7.8-1.4-11-5.2" stroke="#C8F560" stroke-width="3.1" stroke-linecap="round"/>
      <path d="M25.5 12.5c1.4-1.7 3-1.7 4.5 0" stroke="#C8F560" stroke-width="2.2" stroke-linecap="round"/>
    </g>
    <text x="84" y="44" font-family="${LATIN_FONT}" font-size="38" font-weight="bold" fill="#FDF7EF">Tern</text>
  </g>

  <!-- Headline line 1 (cream) -->
  <text
    x="90" y="300"
    font-family="${fontFamily}"
    font-size="${headlineSize}"
    font-weight="bold"
    fill="#FDF7EF"
  >${escXml(line1)}</text>

  <!-- Headline line 2 (lime) -->
  <text
    x="90" y="390"
    font-family="${fontFamily}"
    font-size="${headlineSize}"
    font-weight="bold"
    fill="#C8F560"
  >${escXml(line2)}</text>

  <!-- Feature chips -->
  <g transform="translate(90, 512)" font-family="${LATIN_FONT}" font-size="22" fill="#FDF7EF" fill-opacity="0.9">
    <rect x="0" y="0" width="412" height="54" rx="27" fill="#FDF7EF" fill-opacity="0.12"/>
    <text x="28" y="35">Salary day 1 · No ATM fees</text>
    <rect x="432" y="0" width="468" height="54" rx="27" fill="#FDF7EF" fill-opacity="0.12"/>
    <text x="460" y="35">Flat-fee FX swaps · Cashback</text>
  </g>
</svg>`;
}

function escXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// ─── Rasterise ────────────────────────────────────────────────────────────────

async function rasterize(svgString, outPath) {
  const buf = Buffer.from(svgString, "utf8");
  await sharp(buf, { density: 144 })
    .resize(1200, 630, { fit: "fill" })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });

  for (const cfg of LOCALES) {
    const svg = buildSvg(cfg);
    const outPath = path.join(PUBLIC_DIR, `og-${cfg.locale}.png`);
    await rasterize(svg, outPath);

    // Verify with sharp metadata
    const meta = await sharp(outPath).metadata();
    const fileStat = await import("fs").then((fs) =>
      fs.promises.stat(outPath)
    );
    console.log(
      `  og-${cfg.locale}.png  ${meta.width}×${meta.height}  ${Math.round(fileStat.size / 1024)} KB`
    );
  }

  // Write default og.png (English design)
  const defaultSvg = buildSvg(LOCALES[0]);
  const defaultPath = path.join(PUBLIC_DIR, "og.png");
  await rasterize(defaultSvg, defaultPath);
  const defaultMeta = await sharp(defaultPath).metadata();
  const defaultStat = (await import("fs")).promises.stat(defaultPath);
  const ds = await defaultStat;
  console.log(
    `  og.png  ${defaultMeta.width}×${defaultMeta.height}  ${Math.round(ds.size / 1024)} KB`
  );

  console.log("\nAll OG images generated successfully.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
