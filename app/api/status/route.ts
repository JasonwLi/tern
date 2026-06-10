import { NextRequest, NextResponse } from "next/server";
import { findSignup, countSignups } from "@/lib/db";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Keep in sync with /api/signup.
const REFERRAL_BOOST = 10;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 422 });
  }

  const status = await findSignup(email);
  if (!status) {
    return NextResponse.json({ found: false });
  }

  return NextResponse.json({
    found: true,
    position: Math.max(1, status.position - REFERRAL_BOOST * status.referralCount),
    referralCode: status.referralCode,
    referralCount: status.referralCount,
    boostPerReferral: REFERRAL_BOOST,
    total: await countSignups(),
  });
}
