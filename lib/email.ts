// Emails the owner when someone joins the waitlist.
//
// Two free-ish options, auto-selected:
//   1. SMTP (e.g. your own Gmail) — set SMTP_PASS (a Gmail App Password). Host,
//      port, user and from default to Gmail + jzwl96@gmail.com, so SMTP_PASS is
//      usually the only var you need.
//   2. Resend — set RESEND_API_KEY instead.
// If neither is configured it no-ops, so signups never fail on email problems.

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "jzwl96@gmail.com";

// SMTP (defaults to Gmail)
const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER ?? NOTIFY_EMAIL;
const SMTP_PASS = process.env.SMTP_PASS; // Gmail App Password (16 chars)

// Resend (fallback)
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.SIGNUP_FROM_EMAIL ?? "Tern Waitlist <onboarding@resend.dev>";

export interface SignupNotification {
  email: string;
  homeCountry?: string;
  whvCountry?: string;
  position: number;
  total: number;
  locale?: string;
}

function esc(s: string): string {
  return s.replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string
  );
}

function buildEmail(n: SignupNotification) {
  const rows: [string, string][] = [
    ["Email", n.email],
    ["From (home)", n.homeCountry || "—"],
    ["Working in", n.whvCountry || "—"],
    ["Waitlist position", `#${n.position.toLocaleString()}`],
    ["Total signups", n.total.toLocaleString()],
    ["Page language", n.locale || "—"],
  ];
  const subject = `🎉 New Tern signup — ${n.email} (#${n.position})`;
  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:520px">
    <h2 style="margin:0 0 4px">🎉 New Tern waitlist signup</h2>
    <p style="color:#555;margin:0 0 16px">Someone just joined — #${n.position.toLocaleString()} on the list.</p>
    <table style="border-collapse:collapse;width:100%">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:8px 12px;border:1px solid #eee;background:#faf8ff;font-weight:600;width:160px">${esc(
              k
            )}</td><td style="padding:8px 12px;border:1px solid #eee">${esc(v)}</td></tr>`
        )
        .join("")}
    </table>
  </div>`;
  const text = `New Tern waitlist signup (#${n.position})\n\n${rows
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")}`;
  return { subject, html, text };
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
      // Fail fast: most cloud hosts (incl. Railway) block outbound SMTP, which
      // would otherwise hang the connection. Use an HTTP API (Resend) in prod.
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
    console.error("[email] SMTP send failed", err);
    return false;
  }
}

async function sendViaResend(n: SignupNotification): Promise<boolean> {
  if (!RESEND_API_KEY) return false;
  try {
    const { subject, html, text } = buildEmail(n);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [NOTIFY_EMAIL],
        reply_to: n.email,
        subject,
        html,
        text,
      }),
    });
    if (!res.ok) console.error("[email] Resend error", res.status, await res.text());
    return res.ok;
  } catch (err) {
    console.error("[email] Resend send failed", err);
    return false;
  }
}

export async function sendSignupNotification(n: SignupNotification): Promise<void> {
  // Resend (HTTP, works on Railway) is tried first; SMTP is a fallback for
  // hosts that allow it. Both are no-ops if unconfigured.
  if (await sendViaResend(n)) return;
  await sendViaSmtp(n);
}
