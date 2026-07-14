// Load .env for STANDALONE SCRIPTS. Import this first, before anything reads
// process.env.
//
// Next.js loads .env itself at boot, so the running app has always seen
// DATABASE_URL. A `tsx` script does not — it sees only the ambient shell
// environment. Nothing warned about the difference.
//
// That gap was not cosmetic. `pnpm db:migrate` reads process.env.DATABASE_URL,
// found nothing, silently took its embedded-PGlite branch, migrated a throwaway
// WASM database in .data/, and printed "✓ migrations applied". A completely
// false success: the documented setup command (`pnpm db:migrate && pnpm db:seed
// && pnpm dev`) claims to have migrated production and has not touched it. The
// app then boots against Supabase and finds none of the schema the script just
// said it created.
//
// Precedence matches every other tool: a variable already present in the real
// environment beats the file, so CI and one-off overrides still work.
import { existsSync } from 'node:fs';

const fromShell = { ...process.env };

// Next's order — later file wins.
for (const file of ['.env', '.env.local']) {
  if (existsSync(file)) process.loadEnvFile(file);
}

Object.assign(process.env, fromShell);

/** Which database are we actually about to touch? Print it. A script that
 *  mutates a database must never leave you guessing which one. */
export function describeTarget(): string {
  const url = process.env.DATABASE_URL;
  if (!url) return `PGlite (${process.env.PGLITE_DIR ?? '.data/pglite'}) — no DATABASE_URL, this is a LOCAL THROWAWAY DB`;
  try {
    const u = new URL(url);
    return `postgres ${u.host}${u.pathname}`;
  } catch {
    return 'postgres (unparseable DATABASE_URL)';
  }
}

/** True when DATABASE_URL points somewhere that is not this machine. */
export function isRemoteTarget(): boolean {
  const url = process.env.DATABASE_URL;
  if (!url) return false; // PGlite — local by definition
  try {
    const host = new URL(url).hostname;
    return !['localhost', '127.0.0.1', '::1', '0.0.0.0'].includes(host);
  } catch {
    // An unparseable URL might be anything. Assume the dangerous answer.
    return true;
  }
}

/**
 * Guard for DESTRUCTIVE scripts (anything that deletes before it writes).
 *
 * Until now `pnpm db:seed` was harmless only by accident: it never saw
 * DATABASE_URL, so it wiped and reseeded a throwaway PGlite database. Loading
 * .env correctly (which is the right thing to do) turns that exact command into
 * one that deletes content_units, content_revisions, content_flags and
 * admin_users from PRODUCTION and replaces the admins with four demo accounts.
 *
 * Proof it had never run there: production admin_users holds one real row, not
 * the four this seeder inserts.
 *
 * So the fix ships with the brake. A destructive script aimed at a remote
 * database stops unless the operator says so out loud.
 */
export function assertDestructiveAllowed(what: string): void {
  if (!isRemoteTarget()) return;
  if (process.env.ALLOW_DESTRUCTIVE === '1') {
    console.warn(`⚠  ALLOW_DESTRUCTIVE=1 — running ${what} against ${describeTarget()}`);
    return;
  }
  console.error(
    `\n✖ REFUSING to run ${what} against a remote database.\n` +
      `    target: ${describeTarget()}\n\n` +
      `  This script DELETES rows before it writes. Against production that means\n` +
      `  content_units, content_revisions, content_flags and admin_users — including\n` +
      `  the admin account you log in with.\n\n` +
      `  If you genuinely mean it:  ALLOW_DESTRUCTIVE=1 pnpm db:seed\n`
  );
  process.exit(1);
}
