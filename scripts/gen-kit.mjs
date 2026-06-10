/**
 * gen-kit.mjs — Generate the "WHV Money Kit" lead-magnet PDF.
 * Usage: node scripts/gen-kit.mjs  →  public/downloads/tern-whv-money-kit.pdf
 * English v1; localized editions can follow once the EN kit proves out.
 */
import PDFDocument from "pdfkit";
import { createWriteStream, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/downloads/tern-whv-money-kit.pdf");

const GRAPE = "#6C4DFF";
const GRAPE_DARK = "#4A2BD0";
const INK = "#0E0A1F";
const SOFT = "#4A4458";
const CREAM = "#FDF7EF";
const LIME = "#B4EC3A";

const W = 595.28; // A4 pt
const H = 841.89;
const M = 56;

const doc = new PDFDocument({ size: "A4", margin: M, info: { Title: "The Working Holiday Money Kit — Tern", Author: "Tern" } });
doc.pipe(createWriteStream(OUT));

function logo(x, y, s = 1) {
  doc.save();
  doc.roundedRect(x, y, 40 * s, 40 * s, 11 * s).fill(GRAPE);
  doc.lineWidth(3.1 * s).lineCap("round").strokeColor(LIME);
  doc.moveTo(x + 9 * s, y + 25 * s).bezierCurveTo(x + 13.4 * s, y + 25.2 * s, x + 16.8 * s, y + 23.6 * s, x + 20 * s, y + 19.8 * s).stroke();
  doc.moveTo(x + 31 * s, y + 25 * s).bezierCurveTo(x + 26.6 * s, y + 25.2 * s, x + 23.2 * s, y + 23.6 * s, x + 20 * s, y + 19.8 * s).stroke();
  doc.lineWidth(2.2 * s);
  doc.moveTo(x + 25.5 * s, y + 12.5 * s).bezierCurveTo(x + 26.9 * s, y + 10.8 * s, x + 28.5 * s, y + 10.8 * s, x + 30 * s, y + 12.5 * s).stroke();
  doc.restore();
}

function footer(pageNum) {
  doc.fontSize(8.5).fillColor(SOFT).font("Helvetica");
  doc.text("whvwithtern.com — the neobank built for working holiday life", M, H - 46, { width: W - 2 * M, align: "left", lineBreak: false });
  doc.text(String(pageNum), W - M - 20, H - 46, { width: 20, align: "right", lineBreak: false });
}

function heading(txt) {
  doc.moveDown(0.4);
  doc.font("Helvetica-Bold").fontSize(15).fillColor(INK).text(txt);
  doc.moveDown(0.35);
}

function body(txt, opts = {}) {
  doc.font("Helvetica").fontSize(10.5).fillColor(SOFT).text(txt, { lineGap: 2.5, ...opts });
}

function check(txt) {
  const y = doc.y;
  doc.save();
  doc.roundedRect(M, y + 1, 10, 10, 2.5).lineWidth(1.2).stroke(GRAPE);
  doc.restore();
  doc.font("Helvetica").fontSize(10.5).fillColor(SOFT).text(txt, M + 18, y, { width: W - 2 * M - 18, lineGap: 2.5 });
  doc.moveDown(0.45);
  doc.x = M;
}

function tipBox(title, txt) {
  const x = M, w = W - 2 * M;
  const innerW = w - 28;
  doc.font("Helvetica-Bold").fontSize(10.5);
  const th = doc.heightOfString(title, { width: innerW });
  doc.font("Helvetica").fontSize(10);
  const bh = doc.heightOfString(txt, { width: innerW, lineGap: 2 });
  const boxH = th + bh + 26;
  const y = doc.y + 6;
  doc.save();
  doc.roundedRect(x, y, w, boxH, 10).fill("#F1ECFF");
  doc.restore();
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(GRAPE_DARK).text(title, x + 14, y + 11, { width: innerW });
  doc.font("Helvetica").fontSize(10).fillColor(SOFT).text(txt, x + 14, doc.y + 2, { width: innerW, lineGap: 2 });
  doc.y = y + boxH + 12;
  doc.x = M;
}

// ─── Page 1: Cover ───────────────────────────────────────────────────────────
doc.rect(0, 0, W, H).fill(GRAPE);
doc.rect(0, H * 0.62, W, H * 0.38).fill(GRAPE_DARK);
doc.circle(W - 70, 90, 130).fillOpacity(0.15).fill(LIME).fillOpacity(1);
doc.circle(60, H - 120, 110).fillOpacity(0.12).fill("#FF6B4A").fillOpacity(1);
logo(M, 64, 1.4);
doc.font("Helvetica-Bold").fontSize(26).fillColor(CREAM).text("Tern", M + 70, 78);
doc.font("Helvetica-Bold").fontSize(44).fillColor(CREAM).text("The Working Holiday\nMoney Kit", M, 300, { lineGap: 4 });
doc.font("Helvetica-Bold").fontSize(15).fillColor(LIME).text("Land with your money sorted.", M, doc.y + 14);
doc.font("Helvetica").fontSize(11.5).fillColor(CREAM).text(
  "The first-week checklist, the 45% tax trap, your superannuation refund, and the proof-of-funds numbers — everything in one place.",
  M, doc.y + 12, { width: W - 2 * M - 60, lineGap: 3 }
);
doc.font("Helvetica").fontSize(10).fillColor(CREAM).opacity(0.8).text("whvwithtern.com · 2026 edition", M, H - 80).opacity(1);

// ─── Page 2: First-week checklist ────────────────────────────────────────────
doc.addPage();
doc.font("Helvetica-Bold").fontSize(22).fillColor(INK).text("Your first week: the money checklist");
doc.moveDown(0.6);

heading("Before you fly");
check("Open your account before departure — arrive with working account details so your employer can pay you from day one.");
check("Have your proof of funds ready as a clean, dated statement (see page 4 for what each country expects).");
check("Tell your home bank you're travelling; unblock foreign transactions on your cards.");
check("Screenshot/print your visa grant and insurance documents — border officers do ask.");

heading("Day 1–2");
check("Get a local SIM or eSIM so banks and employers can reach you.");
check("Give your employer your local account details (in Australia: BSB + account number).");
check("Decline 'pay in your home currency' at every ATM and card machine — that's dynamic currency conversion, often a 5–12% hidden markup.");

heading("Week 1");
check("Australia: apply for your TFN (free, ato.gov.au) the moment you have an address — without it your employer must withhold 45% tax.");
check("New Zealand: get your IRD number — without it you're taxed at the 45% no-notification rate.");
check("Canada: apply for your SIN (free) before starting work.");
check("Australia: nominate ONE super fund and reuse it for every job — job-hopping creates duplicate funds that quietly eat fees.");
check("Keep every payslip from your very first shift (you'll want them for tax refunds — and visa extensions).");
footer(2);

// ─── Page 3: The tax cheat sheet ─────────────────────────────────────────────
doc.addPage();
doc.font("Helvetica-Bold").fontSize(22).fillColor(INK).text("The 45% tax trap (and your refund)");
doc.moveDown(0.6);
body("Tax is where working holidaymakers quietly lose the most money — first to over-withholding, then by never claiming refunds. The cheat sheet:");
doc.moveDown(0.5);

heading("Australia");
check("No TFN given to your employer = 45% withholding on everything. With a TFN, working holidaymakers pay 15% on the first AUD 45,000.");
check("TFN is free and arrives in ~2 weeks. Apply on ato.gov.au — never pay an agent for this.");
check("Lodge a tax return after 30 June (or when leaving for good). Average backpacker refund: around $2,600.");
check("Don't let an employer push you onto an ABN for normal wage work — that shifts their tax obligations onto you.");

heading("New Zealand");
check("No IRD number = 45% no-notification rate. The catch: you need a functioning NZ bank account to get an IRD number — set banking up first.");
check("IRD auto-assesses most PAYE workers after the tax year (1 April–31 March); leaving early may need an IR3 return.");

heading("Superannuation (Australia) — money people forget");
check("Your employer pays 12% of your wage into a super fund on top of your salary. It's yours.");
check("When you leave Australia for good, claim it back via DASP. It's taxed at 65% for WHV holders — but 35% of thousands of dollars is still real money.");
check("Keep your fund's name, member number and login. Billions sit unclaimed because backpackers lose track.");
tipBox("Rule of thumb", "A year of full-time work in Australia often means $1,500–$3,500 recoverable between your tax refund and DASP. Treat the paperwork as paid work.");
footer(3);

// ─── Page 4: Numbers + budget ────────────────────────────────────────────────
doc.addPage();
doc.font("Helvetica-Bold").fontSize(22).fillColor(INK).text("Proof of funds & first-month budget");
doc.moveDown(0.6);

heading("What immigration expects to see");
check("Australia (subclass 417/462): about AUD 5,000, plus evidence you can leave (onward ticket or extra funds).");
check("New Zealand: NZD 4,200 minimum, plus an onward ticket or the means to buy one.");
check("Canada (IEC): CAD 2,500, plus health insurance covering your whole stay — they can check it at the border.");
check("Carry it as a clean, recent bank statement in your name. Screenshots get questioned; formatted statements don't.");

heading("A realistic first-month buffer");
body("Budget 2–4 weeks of living costs before your first payday clears: hostel beds, food, SIM, transport, plus a rental bond if you move into a share house. Most travellers land comfortably with the visa minimum plus a month of costs — roughly AUD/NZD 5,000–7,000 all-in.");
doc.moveDown(0.4);

heading("Where money quietly leaks");
check("Airport currency counters (worst rates you'll ever see — exchange nothing there beyond taxi money).");
check("Foreign-card ATM fees: $2–5 per withdrawal plus 1–3% — it compounds fast on cash-heavy farm life.");
check("Weekend FX markups on some travel cards.");
check("Bank transfers home with a 2–4% margin hidden in the exchange rate. Always compare against the mid-market rate you see on Google.");
tipBox("The fix", "Use an account with the real exchange rate, zero ATM fees, and local account details for payday. That's exactly what we're building at Tern — join the waitlist and you're in line from day one.");
footer(4);

// ─── Page 5: Links + back cover ──────────────────────────────────────────────
doc.addPage();
doc.font("Helvetica-Bold").fontSize(22).fillColor(INK).text("Go deeper (free guides)");
doc.moveDown(0.6);
const links = [
  ["Open an Australian account before you land", "whvwithtern.com/en/guides/bank-account-working-holiday-australia"],
  ["The 45% backpacker tax, in full", "whvwithtern.com/en/guides/working-holiday-tax-refund-australia"],
  ["Claim your super back (DASP), step by step", "whvwithtern.com/en/guides/superannuation-refund-dasp"],
  ["How much money you actually need (AU / NZ / CA)", "whvwithtern.com/en/guides/how-much-money-working-holiday-australia"],
  ["Your first week in Australia: full checklist", "whvwithtern.com/en/guides/first-week-money-checklist-australia"],
  ["Second-year visa: tracking your 88 days", "whvwithtern.com/en/blog/second-year-visa-88-days"],
];
for (const [t, u] of links) {
  doc.font("Helvetica-Bold").fontSize(11).fillColor(INK).text(t);
  doc.font("Helvetica").fontSize(9.5).fillColor(GRAPE).text(u, { link: "https://" + u });
  doc.moveDown(0.5);
}
doc.moveDown(0.8);
const boxY = doc.y;
doc.roundedRect(M, boxY, W - 2 * M, 130, 14).fill(GRAPE);
logo(M + 20, boxY + 20, 0.9);
doc.font("Helvetica-Bold").fontSize(16).fillColor(CREAM).text("You're on the list — bring your crew.", M + 70, boxY + 24, { width: W - 2 * M - 90 });
doc.font("Helvetica").fontSize(10.5).fillColor(CREAM).text(
  "Every friend who joins with your link moves you 10 spots up the waitlist. The first 500 become Founding Members.",
  M + 70, doc.y + 6, { width: W - 2 * M - 90, lineGap: 2.5 }
);
doc.y = boxY + 140;
doc.x = M;
doc.moveDown(1);
doc.font("Helvetica").fontSize(8).fillColor(SOFT).text(
  "This kit is general information, not financial or migration advice. Rules and figures change — always check official sources (ato.gov.au, ird.govt.nz, canada.ca, immi.homeaffairs.gov.au). © 2026 Tern · whvwithtern.com",
  M, H - 110, { width: W - 2 * M, lineGap: 2 }
);
footer(5);

doc.end();
doc.on("end", () => {});
setTimeout(() => {
  try {
    console.log("kit:", OUT, Math.round(statSync(OUT).size / 1024) + "KB");
  } catch (e) {
    console.error(e.message);
  }
}, 400);
