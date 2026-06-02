import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

// A tiny SQLite-backed store for the launch waitlist.
// Swap this module for Postgres/Planetscale later — the API route only
// depends on `addSignup` and `countSignups`.

const DATA_DIR = path.join(process.cwd(), ".data");
const DB_PATH = path.join(DATA_DIR, "waitlist.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS signups (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      email         TEXT NOT NULL UNIQUE,
      home_country  TEXT,
      whv_country   TEXT,
      referrer      TEXT,
      created_at    TEXT NOT NULL
    );
  `);
  return db;
}

export interface SignupInput {
  email: string;
  homeCountry?: string;
  whvCountry?: string;
  referrer?: string;
}

export type AddSignupResult =
  | { ok: true; alreadyJoined: boolean; position: number }
  | { ok: false; error: string };

export function addSignup(input: SignupInput): AddSignupResult {
  const database = getDb();
  const email = input.email.trim().toLowerCase();

  const existing = database
    .prepare("SELECT id FROM signups WHERE email = ?")
    .get(email) as { id: number } | undefined;
  if (existing) {
    return { ok: true, alreadyJoined: true, position: existing.id };
  }

  try {
    const stmt = database.prepare(
      `INSERT INTO signups (email, home_country, whv_country, referrer, created_at)
       VALUES (@email, @homeCountry, @whvCountry, @referrer, @createdAt)`
    );
    const info = stmt.run({
      email,
      homeCountry: input.homeCountry?.trim() || null,
      whvCountry: input.whvCountry?.trim() || null,
      referrer: input.referrer?.trim() || null,
      createdAt: new Date().toISOString(),
    });
    return {
      ok: true,
      alreadyJoined: false,
      position: Number(info.lastInsertRowid),
    };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  }
}

export function countSignups(): number {
  const database = getDb();
  const row = database
    .prepare("SELECT COUNT(*) AS c FROM signups")
    .get() as { c: number };
  return row.c;
}
