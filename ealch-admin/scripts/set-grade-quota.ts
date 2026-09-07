// Set the Examiner's daily free grading budget.
//
// ── Why this needed setting at all ──────────────────────────────────────────
//
// `gradeFreeTurnsPerDay` was absent from system_config, so grade-exam fell back
// to its hardcoded GRADE_FREE_TURNS_DEFAULT of 5. That default was never chosen
// with a paper in front of it: a TEF Canada paper has FOUR open tasks (PE
// Section A, PE Section B, PO Section A, PO Section B), so five leaves exactly
// one turn spare. A candidate who retries a single task, or whose first grade
// fails and is retried, hits "daily grading limit reached" partway through the
// paper they have just spent three hours sitting.
//
// Twelve is three papers' worth of open tasks. It absorbs retries and a second
// sitting on the same day while still capping the cost of an abusive caller,
// which is what the limiter is for — it is a cost limiter, not a security
// boundary, and it fails open on a quota-plane outage.
//
// Merges into the existing config rather than replacing it: that row also
// carries model routing, voices and provider flags, and writing a fresh object
// would silently drop them.
import './env';

const KEY = 'gradeFreeTurnsPerDay';

async function main() {
  const raw = process.argv[2] ?? '12';
  const value = Number(raw);
  if (!Number.isFinite(value) || value < 0 || Math.floor(value) !== value) {
    throw new Error(`turns must be a whole number of 0 or more, got "${raw}"`);
  }
  // grade-exam accepts 0 and treats it as a hard stop on all grading. That is a
  // usable kill switch but a terrible typo, so it has to be asked for.
  if (value === 0 && !process.argv.includes('--yes-disable-grading')) {
    throw new Error('0 disables grading for every user; pass --yes-disable-grading if that is the intent');
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const before = await c.query<{ config: Record<string, unknown> }>(
      `select config from system_config where id = 'active'`
    );
    if (before.rowCount === 0) throw new Error("no system_config row with id 'active'");
    const was = before.rows[0]!.config?.[KEY];

    const after = await c.query<{ config: Record<string, unknown> }>(
      `update system_config
          set config = config || jsonb_build_object($1::text, $2::int)
        where id = 'active'
        returning config`,
      [KEY, value]
    );
    const now = after.rows[0]!.config[KEY];

    console.log(`\n  ${KEY}: ${was === undefined ? 'unset (fell back to the hardcoded 5)' : was} -> ${now}`);
    // The row carries model routing and voices too. Proving they survived is
    // cheaper than discovering later that grading works and TTS does not.
    const keys = Object.keys(after.rows[0]!.config).sort();
    console.log(`  config still has ${keys.length} keys: ${keys.join(', ')}\n`);
    console.log('  grade-exam caches routing for 60s, so this takes up to a minute to take effect.\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
