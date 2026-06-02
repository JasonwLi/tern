// Sends the owner a notification when someone joins the waitlist, via Resend.
// No-ops if RESEND_API_KEY is unset, so signups never fail on email problems.

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "jzwl96@gmail.com";
// Until a domain is verified in Resend, "onboarding@resend.dev" only delivers
// to the Resend account's own email. Set SIGNUP_FROM_EMAIL once a domain is
// verified (e.g. "Tern <waitlist@whvwithtern.com>").
const FROM_EMAIL = process.env.SIGNUP_FROM_EMAIL ?? "Tern Waitlist <onboarding@resend.dev>";

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

export async function sendSignupNotification(n: SignupNotification): Promise<void> {
  if (!RESEND_API_KEY) return;

  const rows: [string, string][] = [
    ["Email", n.email],
    ["From (home)", n.homeCountry || "—"],
    ["Working in", n.whvCountry || "—"],
    ["Waitlist position", `#${n.position.toLocaleString()}`],
    ["Total signups", n.total.toLocaleString()],
    ["Page language", n.locale || "—"],
  ];

  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:520px">
    <h2 style="margin:0 0 4px">🎉 New Tern waitlist signup</h2>
    <p style="color:#555;margin:0 0 16px">Someone just joined — #${n.position.toLocaleString()} on the list.</p>
    <table style="border-collapse:collapse;width:100%">
      ${rows
        .map(
          ([k, v]) =>
            `<tr>
              <td style="padding:8px 12px;border:1px solid #eee;background:#faf8ff;font-weight:600;width:160px">${esc(k)}</td>
              <td style="padding:8px 12px;border:1px solid #eee">${esc(v)}</td>
            </tr>`
        )
        .join("")}
    </table>
  </div>`;

  const text = `New Tern waitlist signup (#${n.position})\n\n${rows
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFY_EMAIL],
        reply_to: n.email,
        subject: `🎉 New Tern signup — ${n.email} (#${n.position})`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[email] Resend error", res.status, await res.text());
    }
  } catch (err) {
    console.error("[email] signup notification failed", err);
  }
}
