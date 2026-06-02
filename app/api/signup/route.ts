import { NextRequest, NextResponse } from "next/server";
import { addSignup, countSignups } from "@/lib/db";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Baseline so the public counter reads as social proof from day one.
const WAITLIST_BASELINE = 2480;

export async function GET() {
  try {
    const real = countSignups();
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

  const result = addSignup({
    email,
    homeCountry: typeof body.homeCountry === "string" ? body.homeCountry : undefined,
    whvCountry: typeof body.whvCountry === "string" ? body.whvCountry : undefined,
    referrer: typeof body.referrer === "string" ? body.referrer : undefined,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    alreadyJoined: result.alreadyJoined,
    position: WAITLIST_BASELINE + result.position,
    total: WAITLIST_BASELINE + countSignups(),
  });
}
