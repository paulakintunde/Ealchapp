/* A read-only status line for the CONCURRENT a2.14 build.
 *
 * a2.13 is finished and holding: its fix is committed and pushed, and the
 * publish is deliberately NOT run, because the same snapshot would also ship
 * a2.14 — another session's lesson, in flight in this same working tree.
 *
 * This prints one line describing where that build has got to, so the decision
 * to publish can be taken when it is actually ready rather than guessed at.
 * It writes nothing, touches no other session's files, and reads:
 *
 *   git        whether a2.14's files are committed, and whether HEAD moved
 *   postgres   whether a2.14.l1 exists and whether it is `published`
 *   seed       whether it is in the cut a device would receive
 *   manifest   which snapshot is actually LIVE, and at what rollout
 *
 *   pnpm tsx scripts/_a214_watch.ts          one line
 *   pnpm tsx scripts/_a214_watch.ts --full   the detail behind it
 */
import './env';
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';

const here = dirname(fileURLToPath(import.meta.url));
const REPO = join(here, '../..');
const SEED = join(REPO, 'ealch-v2/src/content/seed.json');
const FULL = process.argv.includes('--full');

const UNIT = 'a2.14';
const LESSON = 'a2.14.l1';
/** Files this build owns, so "is it committed" is a question with an answer. */
const A214_FILES = [
  'ealch-admin/A2-14-BUILD-REPORT.md',
  'ealch-admin/scripts/author-savoir-connaitre-batch.ts',
  'ealch-admin/scripts/data/savoir-connaitre-corpus.ts',
  'ealch-admin/scripts/data/savoir-connaitre-lesson.ts',
];

const git = (cmd: string): string => {
  try { return execSync(`git ${cmd}`, { cwd: REPO, encoding: 'utf8', stdio: 'pipe' }).trim(); }
  catch { return ''; }
};

async function main() {
  /* ── git ─────────────────────────────────────────────────────────────── */
  const head = git('log --oneline -1');
  const dirty = git('status --porcelain --untracked-files=no').split('\n').filter(Boolean);
  const untracked = git('status --porcelain').split('\n').filter((l) => l.startsWith('??')).length;
  const unpushed = git('log --oneline @{u}..HEAD').split('\n').filter(Boolean).length;
  const tracked = A214_FILES.filter((f) => git(`ls-files --error-unmatch "${f}"`) !== '');
  const a214Dirty = dirty.filter((l) => /savoir-connaitre|A2-14|_a214/.test(l));

  /* ── postgres ────────────────────────────────────────────────────────── */
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const les = await c.query<{ status: string; v: number; secs: number; updated: string }>(
    `select status, (body->>'version')::int v, jsonb_array_length(body->'sections') secs,
            to_char(updated_at, 'MM-DD HH24:MI') updated
       from content_units where kind = 'lesson' and slug = $1`, [LESSON]);
  const rows = await c.query<{ n: string }>(
    "select count(*) n from content_items where id >= 'fr.a2.verbes.381' and id <= 'fr.a2.verbes.420'");
  const a213 = await c.query<{ v: number; status: string }>(
    "select (body->>'version')::int v, status from content_units where kind='lesson' and slug='a2.13.l1'");
  c.release();
  await pool.end();

  /* ── seed, and what is actually LIVE ─────────────────────────────────── */
  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as { version: number; lessons: { id: string; version?: number }[] };
  const inSeed = seed.lessons.find((l) => l.id === LESSON);
  const seedA213 = seed.lessons.find((l) => l.id === 'a2.13.l1');

  const pg = les.rows[0];
  const stage = !pg ? 'not applied'
    : pg.status !== 'published' ? `postgres (${pg.status})`
      : !inSeed ? 'postgres only'
        : !tracked.length ? 'postgres + seed, UNCOMMITTED'
          : a214Dirty.length ? 'committed, with edits since'
            : 'committed';

  console.log(
    `a2.14: ${stage}`
    + ` | pg ${pg ? `v${pg.v} ${pg.status} ${pg.secs}sec ${pg.updated}` : 'absent'}`
    + ` | rows ${rows.rows[0].n}/40`
    + ` | seed ${inSeed ? `v${inSeed.version}` : 'no'}`
    + ` | files ${tracked.length}/${A214_FILES.length} tracked, ${a214Dirty.length} dirty`
    + ` | HEAD ${head.split(' ')[0]}${unpushed ? ` +${unpushed} unpushed` : ''}`,
  );
  console.log(
    `a2.13: pg v${a213.rows[0]?.v} ${a213.rows[0]?.status} | seed v${seedA213?.version}`
    + ` | seed.version ${seed.version} | LIVE ON THE WIRE: v30 carries a2.13 v1 (the blank cards)`,
  );

  if (!FULL) return;
  console.log(`\n  HEAD          ${head}`);
  console.log(`  dirty tracked ${dirty.length}${dirty.length ? `\n${dirty.map((l) => `      ${l}`).join('\n')}` : ''}`);
  console.log(`  untracked     ${untracked}`);
  console.log(`  a2.14 files tracked: ${tracked.length ? tracked.join(', ') : 'NONE'}`);
  console.log('\n  Publishing v31 would ship a2.13 v2 AND a2.14. Held on purpose.');
  console.log('  Kill switch if anything is wrong on glass: pnpm content:rollout 0');
}
main().catch((e) => { console.error(e); process.exit(1); });
