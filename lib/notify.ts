// Notifies the owner when someone joins the waitlist.
// Primary channel: Telegram (HTTPS Bot API — works on Railway, free, instant).
// Optional fallbacks: Resend (HTTP) and SMTP. All no-op if unconfigured, and
// the signup route fires this non-blocking so email/telegram never break signup.

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "jzwl96@gmail.com";
const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER ?? NOTIFY_EMAIL;
const SMTP_PASS = process.env.SMTP_PASS;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.SIGNUP_FROM_EMAIL ?? "Tern Waitlist <onboarding@resend.dev>";

export interface SignupNotification {
  email: string;
  homeCountry?: string;
  whvCountry?: string;
  position: number;
  total: number;
  locale?: string;
  referredBy?: string;
}

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string
  );
}

function rows(n: SignupNotification): [string, string][] {
  return [
    ["Email", n.email],
    ["From (home)", n.homeCountry || "—"],
    ["Working in", n.whvCountry || "—"],
    ["Waitlist position", `#${n.position.toLocaleString()}`],
    ["Total signups", n.total.toLocaleString()],
    ["Page language", n.locale || "—"],
  ];
}

// ---- Telegram (primary) ----
async function sendViaTelegram(n: SignupNotification): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return false;
  const text =
    `🎉 <b>New Tern waitlist signup</b>\n` +
    `<b>#${n.position.toLocaleString()}</b> on the list · ${n.total.toLocaleString()} total\n\n` +
    `📧 ${esc(n.email)}\n` +
    `🏠 From: ${esc(n.homeCountry || "—")}\n` +
    `✈️ Working in: ${esc(n.whvCountry || "—")}\n` +
    `🌐 Page: ${esc(n.locale || "—")}` +
    (n.referredBy ? `\n🔗 Referred by code: ${esc(n.referredBy)}` : "");
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );
    if (!res.ok) console.error("[notify] telegram error", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("[notify] telegram send failed", err);
    return false;
  }
}

// ---- Email helpers ----
function buildEmail(n: SignupNotification) {
  const r = rows(n);
  const subject = `🎉 New Tern signup — ${n.email} (#${n.position})`;
  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:520px">
    <h2 style="margin:0 0 4px">🎉 New Tern waitlist signup</h2>
    <p style="color:#555;margin:0 0 16px">Someone just joined — #${n.position.toLocaleString()} on the list.</p>
    <table style="border-collapse:collapse;width:100%">
      ${r
        .map(
          ([k, v]) =>
            `<tr><td style="padding:8px 12px;border:1px solid #eee;background:#faf8ff;font-weight:600;width:160px">${esc(
              k
            )}</td><td style="padding:8px 12px;border:1px solid #eee">${esc(v)}</td></tr>`
        )
        .join("")}
    </table>
  </div>`;
  const text = `New Tern waitlist signup (#${n.position})\n\n${r
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")}`;
  return { subject, html, text };
}

async function sendViaResend(n: SignupNotification): Promise<boolean> {
  if (!RESEND_API_KEY) return false;
  try {
    const { subject, html, text } = buildEmail(n);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [NOTIFY_EMAIL],
        reply_to: n.email,
        subject,
        html,
        text,
      }),
    });
    if (!res.ok) console.error("[notify] resend error", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("[notify] resend send failed", err);
    return false;
  }
}

async function sendViaSmtp(n: SignupNotification): Promise<boolean> {
  if (!SMTP_PASS) return false;
  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000,
    });
    const { subject, html, text } = buildEmail(n);
    await transporter.sendMail({
      from: `Tern Waitlist <${SMTP_USER}>`,
      to: NOTIFY_EMAIL,
      replyTo: n.email,
      subject,
      html,
      text,
    });
    return true;
  } catch (err) {
    console.error("[notify] smtp send failed", err);
    return false;
  }
}

export async function sendSignupNotification(n: SignupNotification): Promise<void> {
  if (await sendViaTelegram(n)) return;
  if (await sendViaResend(n)) return;
  await sendViaSmtp(n);
}

// ---- Welcome email to the signer-up (re-delivers their referral link) ----

const WELCOME_COPY: Record<
  string,
  { subject: (pos: string) => string; hi: string; position: (pos: string) => string; share: string; status: string; signoff: string }
> = {
  en: {
    subject: (pos) => `You're on the Tern waitlist — #${pos} 🎉`,
    hi: "You're in!",
    position: (pos) => `You're #${pos} on the waitlist for Tern, the money app built for working holiday travellers.`,
    share: "Want to move up? Every friend who joins with your link bumps you 10 spots:",
    status: "Check your position anytime",
    signoff: "— Tern",
  },
  es: {
    subject: (pos) => `Estás en la lista de espera de Tern — #${pos} 🎉`,
    hi: "¡Ya estás dentro!",
    position: (pos) => `Eres el #${pos} en la lista de espera de Tern, la app de dinero hecha para viajeros working holiday.`,
    share: "¿Quieres subir? Cada amigo que se una con tu enlace te sube 10 puestos:",
    status: "Consulta tu posición cuando quieras",
    signoff: "— Tern",
  },
  ja: {
    subject: (pos) => `Ternウェイトリスト登録完了 — ${pos}番目です 🎉`,
    hi: "登録が完了しました！",
    position: (pos) => `ワーホリ旅行者のためのマネーアプリ「Tern」のウェイトリストで、あなたは${pos}番目です。`,
    share: "順番を早めたいですか？友達があなたのリンクから登録するたびに10番早くなります：",
    status: "いつでも順番を確認できます",
    signoff: "— Tern",
  },
  ko: {
    subject: (pos) => `Tern 웨이팅리스트 등록 완료 — ${pos}번째예요 🎉`,
    hi: "등록 완료!",
    position: (pos) => `워홀 여행자를 위한 머니 앱 Tern 웨이팅리스트에서 ${pos}번째예요.`,
    share: "더 빨리 받고 싶나요? 친구가 이 링크로 가입할 때마다 10자리 앞당겨져요:",
    status: "언제든지 순번을 확인하세요",
    signoff: "— Tern",
  },
  "zh-TW": {
    subject: (pos) => `已加入 Tern 候補名單 — 第 ${pos} 位 🎉`,
    hi: "你已成功加入！",
    position: (pos) => `你在 Tern（為打工度假旅人打造的金融 App）候補名單中排第 ${pos} 位。`,
    share: "想更快輪到你嗎？每位朋友透過你的連結加入，你就前進 10 個名次：",
    status: "隨時查詢你的順位",
    signoff: "— Tern",
  },
};

export interface WelcomeEmail {
  to: string;
  position: number;
  referralCode: string;
  locale?: string;
}

export async function sendWelcomeEmail(w: WelcomeEmail): Promise<void> {
  // Requires a verified-domain sender; without it Resend can't deliver to
  // arbitrary recipients, so we no-op instead of erroring on every signup.
  const from = process.env.SIGNUP_FROM_EMAIL;
  if (!RESEND_API_KEY || !from) return;

  const { SITE_URL } = await import("./site");
  const locale = w.locale && WELCOME_COPY[w.locale] ? w.locale : "en";
  const c = WELCOME_COPY[locale];
  const pos = w.position.toLocaleString();
  const refLink = `${SITE_URL}/${locale}?ref=${w.referralCode}`;
  const statusLink = `${SITE_URL}/${locale}/status`;

  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:520px">
    <h2 style="margin:0 0 8px">🎉 ${esc(c.hi)}</h2>
    <p style="color:#444;margin:0 0 16px">${esc(c.position(pos))}</p>
    <p style="color:#444;margin:0 0 8px">${esc(c.share)}</p>
    <p style="margin:0 0 16px"><a href="${refLink}" style="display:inline-block;background:#6c4dff;color:#fff;font-weight:700;padding:10px 18px;border-radius:999px;text-decoration:none">${esc(refLink)}</a></p>
    <p style="margin:0 0 16px"><a href="${statusLink}" style="color:#6c4dff">${esc(c.status)} →</a></p>
    <p style="color:#999;font-size:13px">${esc(c.signoff)}</p>
  </div>`;
  const text = `${c.hi}\n\n${c.position(pos)}\n\n${c.share}\n${refLink}\n\n${c.status}: ${statusLink}\n\n${c.signoff}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [w.to], subject: c.subject(pos), html, text }),
    });
    if (!res.ok) console.error("[notify] welcome email error", res.status, await res.text());
  } catch (err) {
    console.error("[notify] welcome email failed", err);
  }
}
