import { Pool } from "pg";

// Waitlist store. Uses Postgres when DATABASE_URL is set (production / Railway),
// and falls back to an in-memory store for local dev without a database.
// The API route only depends on addSignup() and countSignups().

export interface SignupInput {
  email: string;
  homeCountry?: string;
  whvCountry?: string;
  referrer?: string;
  referredBy?: string; // referral code of the person who shared the link
}

export interface SignupRecord {
  ok: true;
  alreadyJoined: boolean;
  position: number;      // raw signup order (1-based)
  referralCode: string;  // this user's own share code
  referralCount: number; // how many signups used this user's code
}

export type AddSignupResult = SignupRecord | { ok: false; error: string };

const DATABASE_URL = process.env.DATABASE_URL;

function newCode(): string {
  return Math.random().toString(36).slice(2, 8);
}

// ---- In-memory fallback (no DATABASE_URL, e.g. local dev) ----
interface MemRow {
  email: string;
  id: number;
  code: string;
  referredBy: string | null;
}
const memory: MemRow[] = [];
let memSeq = 0;

function memAdd(input: SignupInput): AddSignupResult {
  const email = input.email.trim().toLowerCase();
  const count = (code: string) => memory.filter((r) => r.referredBy === code).length;
  const existing = memory.find((r) => r.email === email);
  if (existing) {
    return {
      ok: true,
      alreadyJoined: true,
      position: existing.id,
      referralCode: existing.code,
      referralCount: count(existing.code),
    };
  }
  memSeq += 1;
  const row: MemRow = {
    email,
    id: memSeq,
    code: newCode(),
    referredBy: input.referredBy?.trim() || null,
  };
  memory.push(row);
  return { ok: true, alreadyJoined: false, position: row.id, referralCode: row.code, referralCount: 0 };
}

// ---- Postgres ----
let pool: Pool | null = null;
let schemaReady: Promise<void> | null = null;

function getPool(): Pool {
  if (!pool) {
    const url = DATABASE_URL ?? "";
    const noSsl =
      url.includes("railway.internal") ||
      url.includes("localhost") ||
      url.includes("127.0.0.1");
    pool = new Pool({
      connectionString: DATABASE_URL,
      ssl: noSsl ? undefined : { rejectUnauthorized: false },
      max: 5,
    });
  }
  return pool;
}

function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      const db = getPool();
      await db.query(`
        CREATE TABLE IF NOT EXISTS signups (
          id            BIGSERIAL PRIMARY KEY,
          email         TEXT NOT NULL UNIQUE,
          home_country  TEXT,
          whv_country   TEXT,
          referrer      TEXT,
          created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `);
      await db.query(`ALTER TABLE signups ADD COLUMN IF NOT EXISTS referral_code TEXT`);
      await db.query(`ALTER TABLE signups ADD COLUMN IF NOT EXISTS referred_by TEXT`);
      await db.query(
        `CREATE UNIQUE INDEX IF NOT EXISTS signups_referral_code_idx ON signups (referral_code)`
      );
      await db.query(`CREATE INDEX IF NOT EXISTS signups_referred_by_idx ON signups (referred_by)`);
    })().catch((err) => {
      schemaReady = null; // allow a later retry if init failed
      throw err;
    });
  }
  return schemaReady;
}

async function referralCountFor(code: string): Promise<number> {
  const res = await getPool().query<{ c: number }>(
    "SELECT COUNT(*)::int AS c FROM signups WHERE referred_by = $1",
    [code]
  );
  return Number(res.rows[0]?.c ?? 0);
}

export async function addSignup(input: SignupInput): Promise<AddSignupResult> {
  if (!DATABASE_URL) return memAdd(input);

  const email = input.email.trim().toLowerCase();
  // Referral codes are 6 chars of [a-z0-9]; ignore anything else.
  const referredBy = /^[a-z0-9]{4,12}$/.test(input.referredBy?.trim().toLowerCase() ?? "")
    ? (input.referredBy as string).trim().toLowerCase()
    : null;

  try {
    await ensureSchema();
    const db = getPool();

    const existing = await db.query<{ id: string; referral_code: string | null }>(
      "SELECT id, referral_code FROM signups WHERE email = $1",
      [email]
    );
    if (existing.rows.length > 0) {
      let code = existing.rows[0].referral_code;
      if (!code) {
        code = newCode();
        await db.query("UPDATE signups SET referral_code = $1 WHERE email = $2", [code, email]);
      }
      return {
        ok: true,
        alreadyJoined: true,
        position: Number(existing.rows[0].id),
        referralCode: code,
        referralCount: await referralCountFor(code),
      };
    }

    // Don't credit self-referrals via an unknown/invalid code.
    let validReferredBy: string | null = null;
    if (referredBy) {
      const ref = await db.query("SELECT 1 FROM signups WHERE referral_code = $1", [referredBy]);
      if (ref.rows.length > 0) validReferredBy = referredBy;
    }

    // Insert with a fresh unique code; retry on the (rare) code collision.
    for (let attempt = 0; attempt < 3; attempt++) {
      const code = newCode();
      try {
        const inserted = await db.query<{ id: string }>(
          `INSERT INTO signups (email, home_country, whv_country, referrer, referral_code, referred_by)
           VALUES ($1, $2, $3, $4, $5, $6)
           ON CONFLICT (email) DO NOTHING
           RETURNING id`,
          [
            email,
            input.homeCountry?.trim() || null,
            input.whvCountry?.trim() || null,
            input.referrer?.trim() || null,
            code,
            validReferredBy,
          ]
        );
        if (inserted.rows.length === 0) {
          // Lost an insert race — treat as already joined.
          const again = await db.query<{ id: string; referral_code: string | null }>(
            "SELECT id, referral_code FROM signups WHERE email = $1",
            [email]
          );
          const c = again.rows[0]?.referral_code ?? code;
          return {
            ok: true,
            alreadyJoined: true,
            position: Number(again.rows[0]?.id ?? 0),
            referralCode: c,
            referralCount: await referralCountFor(c),
          };
        }
        return {
          ok: true,
          alreadyJoined: false,
          position: Number(inserted.rows[0].id),
          referralCode: code,
          referralCount: 0,
        };
      } catch (err) {
        const msg = (err as Error).message;
        if (!msg.includes("signups_referral_code_idx")) throw err;
        // referral_code collision → loop and retry with a new code
      }
    }
    return { ok: false, error: "could not allocate referral code" };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  }
}

export interface SignupStatus {
  position: number;      // raw signup order (1-based)
  referralCode: string;
  referralCount: number;
}

// Read-only lookup for the status page. Never creates a signup.
export async function findSignup(email: string): Promise<SignupStatus | null> {
  const normalized = email.trim().toLowerCase();

  if (!DATABASE_URL) {
    const row = memory.find((r) => r.email === normalized);
    if (!row) return null;
    return {
      position: row.id,
      referralCode: row.code,
      referralCount: memory.filter((r) => r.referredBy === row.code).length,
    };
  }

  try {
    await ensureSchema();
    const db = getPool();
    const res = await db.query<{ id: string; referral_code: string | null }>(
      "SELECT id, referral_code FROM signups WHERE email = $1",
      [normalized]
    );
    if (res.rows.length === 0) return null;
    let code = res.rows[0].referral_code;
    if (!code) {
      code = newCode();
      await db.query("UPDATE signups SET referral_code = $1 WHERE email = $2", [code, normalized]);
    }
    return {
      position: Number(res.rows[0].id),
      referralCode: code,
      referralCount: await referralCountFor(code),
    };
  } catch {
    return null;
  }
}

export async function countSignups(): Promise<number> {
  if (!DATABASE_URL) return memory.length;
  try {
    await ensureSchema();
    const res = await getPool().query<{ c: number }>(
      "SELECT COUNT(*)::int AS c FROM signups"
    );
    return Number(res.rows[0]?.c ?? 0);
  } catch {
    return 0;
  }
}
