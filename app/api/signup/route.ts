import { NextRequest, NextResponse } from "next/server";
import { addSignup, countSignups } from "@/lib/db";
import { sendSignupNotification } from "@/lib/notify";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Baseline so the public counter reads as social proof from day one.
const WAITLIST_BASELINE = 2480;

export async function GET() {
  try {
    const real = await countSignups();
    return NextResponse.json({ count: WAITLIST_BASELINE + real });
  } catch {
    return NextResponse.json({ count: WAITLIST_BASELINE });
  }
}

export async function POST(req: NextRequest) {
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

  const result = await addSignup({
    email,
    homeCountry,
    whvCountry,
    referrer: typeof body.referrer === "string" ? body.referrer : undefined,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  const position = WAITLIST_BASELINE + result.position;
  const total = WAITLIST_BASELINE + (await countSignups());

  // Notify the owner of genuinely new signups (skips duplicates & bots).
  // Fire-and-forget: never block or fail the signup response on email.
  if (!result.alreadyJoined) {
    void sendSignupNotification({ email, homeCountry, whvCountry, position, total, locale }).catch(
      (e) => console.error("[email] notify failed", e)
    );
  }

  return NextResponse.json({
    ok: true,
    alreadyJoined: result.alreadyJoined,
    position,
    total,
  });
}
