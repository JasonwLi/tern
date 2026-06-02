import { Pool } from "pg";

// Waitlist store. Uses Postgres when DATABASE_URL is set (production / Railway),
// and falls back to an in-memory store for local dev without a database.
// The API route only depends on addSignup() and countSignups().

export interface SignupInput {
  email: string;
  homeCountry?: string;
  whvCountry?: string;
  referrer?: string;
}

export type AddSignupResult =
  | { ok: true; alreadyJoined: boolean; position: number }
  | { ok: false; error: string };

const DATABASE_URL = process.env.DATABASE_URL;

// ---- In-memory fallback (no DATABASE_URL, e.g. local dev) ----
const memory: { email: string; id: number }[] = [];
let memSeq = 0;

function memAdd(input: SignupInput): AddSignupResult {
  const email = input.email.trim().toLowerCase();
  const existing = memory.find((r) => r.email === email);
  if (existing) return { ok: true, alreadyJoined: true, position: existing.id };
  memSeq += 1;
  memory.push({ email, id: memSeq });
  return { ok: true, alreadyJoined: false, position: memSeq };
}

// ---- Postgres ----
let pool: Pool | null = null;
let schemaReady: Promise<void> | null = null;

function getPool(): Pool {
  if (!pool) {
    // Railway's private network (*.railway.internal) and localhost don't use SSL;
    // public/proxy connections do.
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
    schemaReady = getPool()
      .query(`
        CREATE TABLE IF NOT EXISTS signups (
          id            BIGSERIAL PRIMARY KEY,
          email         TEXT NOT NULL UNIQUE,
          home_country  TEXT,
          whv_country   TEXT,
          referrer      TEXT,
          created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
        );
      `)
      .then(() => undefined)
      .catch((err) => {
        // allow a later retry if the first init failed
        schemaReady = null;
        throw err;
      });
  }
  return schemaReady;
}

export async function addSignup(input: SignupInput): Promise<AddSignupResult> {
  if (!DATABASE_URL) return memAdd(input);

  const email = input.email.trim().toLowerCase();
  try {
    await ensureSchema();
    const db = getPool();

    const existing = await db.query<{ id: string }>(
      "SELECT id FROM signups WHERE email = $1",
      [email]
    );
    if (existing.rows.length > 0) {
      return { ok: true, alreadyJoined: true, position: Number(existing.rows[0].id) };
    }

    const inserted = await db.query<{ id: string }>(
      `INSERT INTO signups (email, home_country, whv_country, referrer)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (email) DO NOTHING
       RETURNING id`,
      [
        email,
        input.homeCountry?.trim() || null,
        input.whvCountry?.trim() || null,
        input.referrer?.trim() || null,
      ]
    );

    if (inserted.rows.length === 0) {
      // Lost an insert race — fetch the existing row.
      const again = await db.query<{ id: string }>(
        "SELECT id FROM signups WHERE email = $1",
        [email]
      );
      return { ok: true, alreadyJoined: true, position: Number(again.rows[0]?.id ?? 0) };
    }

    return { ok: true, alreadyJoined: false, position: Number(inserted.rows[0].id) };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
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
