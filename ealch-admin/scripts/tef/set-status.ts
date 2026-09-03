// Move whole papers between content statuses.
//
// The authoring scripts deliberately never touch `status`: it is absent from
// their `do update set` lists so that re-running one cannot demote a published
// paper. That leaves promotion with no tool at all, which meant doing it by
// hand in SQL at exactly the moment care matters most — the step that decides
// what a learner sees.
//
// A paper is its tasks AND its container row, and promoting one without the
// other leaves a published paper full of unpublished tasks. Both move here, in
// one transaction.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/tef/set-status.ts published 2 3 4 5 --dry-run
//   pnpm tsx scripts/tef/set-status.ts published 2 3 4 5
//   pnpm tsx scripts/tef/set-status.ts in_review 3
import '../env';
import { describeTarget } from '../env';

const VALID = ['draft', 'in_review', 'published', 'archived'] as const;
type Status = (typeof VALID)[number];

const argv = process.argv.slice(2);
const DRY_RUN = argv.includes('--dry-run');
const STATUS = argv.find((a) => (VALID as readonly string[]).includes(a)) as Status | undefined;
const NUMS = argv.filter((a) => /^\d+$/.test(a)).map(Number);

async function main() {
  if (!STATUS) throw new Error(`give a status: ${VALID.join(' | ')}`);
  if (NUMS.length === 0) throw new Error('give one or more paper numbers, e.g. `set-status.ts published 2 3 4 5`');
  const variants = NUMS.map((n) => `blanc-${String(n).padStart(2, '0')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  try {
    console.log(`\n  target: ${describeTarget()}`);

    const before = await client.query<{ variant: string; status: string; n: string }>(
      `select variant, status, count(*)::text as n from content_exam_tasks
        where format = 'tef_canada' and variant = any($1::text[])
        group by variant, status order by variant, status`,
      [variants]
    );
    if (before.rows.length === 0) throw new Error(`no tasks found for ${variants.join(', ')}`);
    console.log(`\n  before:`);
    for (const r of before.rows) console.log(`    ${r.variant}  ${r.n.padStart(3)} tasks  ${r.status}`);

    if (DRY_RUN) {
      console.log(`\n✓ dry run — would set ${variants.join(', ')} to '${STATUS}'. Nothing written.\n`);
      return;
    }

    await client.query('begin');
    const t = await client.query(
      `update content_exam_tasks set status = $1, updated_at = now()
        where format = 'tef_canada' and variant = any($2::text[]) and status is distinct from $1`,
      [STATUS, variants]
    );
    const p = await client.query(
      `update content_exam_papers set status = $1, updated_at = now()
        where format = 'tef_canada' and variant = any($2::text[]) and status is distinct from $1`,
      [STATUS, variants]
    );
    await client.query('commit');

    console.log(`\n  ✓ ${t.rowCount} task(s) and ${p.rowCount} paper row(s) set to '${STATUS}'`);
    console.log(
      STATUS === 'published'
        ? '  Published rows are ELIGIBLE for a snapshot. They reach a phone only when content:publish runs.\n'
        : '\n'
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
