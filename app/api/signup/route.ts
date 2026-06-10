import { NextRequest, NextResponse } from "next/server";
import { addSignup, countSignups } from "@/lib/db";
import { sendSignupNotification, sendWelcomeEmail } from "@/lib/notify";
import { rateLimit, clientIp } from "@/lib/ratelimit";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Each successful referral moves you this many places up the list.
const REFERRAL_BOOST = 10;

export async function GET() {
  try {
    return NextResponse.json({ count: await countSignups() });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

export async function POST(req: NextRequest) {
  // Abuse guard: cap signups per IP (bots, referral farming, Telegram spam).
  if (!rateLimit(`signup:${clientIp(req.headers)}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  // Honeypot: bots fill hidden fields, humans never see them.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true, alreadyJoined: false, position: 0 });
  }

  const homeCountry = typeof body.homeCountry === "string" ? body.homeCountry : undefined;
  const whvCountry = typeof body.whvCountry === "string" ? body.whvCountry : undefined;
  const locale = typeof body.locale === "string" ? body.locale : undefined;
  const referredBy = typeof body.ref === "string" ? body.ref : undefined;

  const result = await addSignup({
    email,
    homeCountry,
    whvCountry,
    referrer: typeof body.referrer === "string" ? body.referrer : undefined,
    referredBy,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  // Referrals move you up the list.
  const position = Math.max(1, result.position - REFERRAL_BOOST * result.referralCount);
  const total = await countSignups();

  // Notify the owner of genuinely new signups (skips duplicates & bots).
  // Fire-and-forget: never block or fail the signup response on notifications.
  if (!result.alreadyJoined) {
    void sendSignupNotification({
      email,
      homeCountry,
      whvCountry,
      position,
      total,
      locale,
      referredBy,
    }).catch((e) => console.error("[notify] failed", e));
    void sendWelcomeEmail({
      to: email,
      position,
      referralCode: result.referralCode,
      locale,
    }).catch((e) => console.error("[notify] welcome failed", e));
  }

  return NextResponse.json({
    ok: true,
    alreadyJoined: result.alreadyJoined,
    position,
    total,
    referralCode: result.referralCode,
    referralCount: result.referralCount,
    boostPerReferral: REFERRAL_BOOST,
  });
}
