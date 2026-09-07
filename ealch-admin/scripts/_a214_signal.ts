/* A one-line SIGNATURE of everything that would change the publish decision.
 *
 * Printed for a watcher to diff against the previous line. Deliberately terse
 * and deliberately stable: it must not change when nothing that matters has,
 * or the watch becomes noise and gets muted.
 *
 * What is in it, and why each one moves the decision:
 *
 *   head      a commit landed
 *   a214v     a2.14's lesson body was revised in Postgres
 *   a214st    it moved between in_review and published
 *   a213v     a2.13's body moved (it should not; this build is finished)
 *   seedv     THE BIG ONE. seed.version moving means somebody PUBLISHED.
 *   live      the rollout share the manifest is actually serving
 *   dirtyA214 whether that build still has uncommitted work
 *
 *   pnpm tsx scripts/_a214_signal.ts
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

const git = (cmd: string): string => {
  try { return execSync(`git ${cmd}`, { cwd: REPO, encoding: 'utf8', stdio: 'pipe' }).trim(); }
  catch { return '?'; }
};

async function main() {
  const head = git('log --format=%h -1');
  const dirty = git('status --porcelain --untracked-files=no')
    .split('\n').filter((l) => /savoir-connaitre|A2-14|_a214/.test(l)).length;

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const q = await c.query<{ slug: string; v: number; status: string }>(
    `select slug, (body->>'version')::int v, status from content_units
      where kind = 'lesson' and slug in ('a2.13.l1','a2.14.l1')`);
  c.release();
  await pool.end();

  const a213 = q.rows.find((r) => r.slug === 'a2.13.l1');
  const a214 = q.rows.find((r) => r.slug === 'a2.14.l1');
  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as { version: number };

  /* The live manifest is the only thing that says what a DEVICE would get. It
     is read through the same public storage base the app uses; a failure here
     must not kill the watch, so it degrades to `?` rather than throwing. */
  let live = '?';
  try {
    // publish-content.ts:972 reads SUPABASE_URL from ealch-admin/.env. The app
    // reads the same bucket through its own ENV; either way this is the object
    // a device actually downloads.
    const base = process.env.SUPABASE_URL
      ? `${process.env.SUPABASE_URL.replace(/\/$/, '')}/storage/v1/object/public/content`
      : '';
    if (base) {
      const res = await fetch(`${base}/manifest.json`, { cache: 'no-store' });
      if (res.ok) {
        const m = await res.json() as { version?: number; rollout?: number };
        live = `v${m.version}@${m.rollout ?? 100}%`;
      }
    }
  } catch { /* offline is not a state change */ }

  console.log(
    `head=${head} a214v=${a214 ? `${a214.v}/${a214.status}` : 'absent'}`
    + ` a213v=${a213 ? `${a213.v}/${a213.status}` : 'absent'}`
    + ` seedv=${seed.version} live=${live} dirtyA214=${dirty}`,
  );
}
main().catch(() => { console.log('head=? a214v=? a213v=? seedv=? live=? dirtyA214=?'); });
