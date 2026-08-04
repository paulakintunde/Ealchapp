// Restore curriculum_unit bodies that live ONLY in the committed seed.json back
// into Postgres, so the next content:publish stops reverting them.
//
// The unit-shaped twin of restore-lesson-bodies-from-seed.ts, and it exists for
// the same structural reason: publish-content.ts reads Postgres as the source
// of truth and rewrites seed.json from it, so anything authored seed-direct is
// destroyed by the next publish unless it is pushed into the DB first.
//
// ── WHY IT IS SEPARATE FROM THE LESSON SCRIPT ──────────────────────────────
// Units are `kind = 'curriculum_unit'`; the lesson script only ever touches
// `kind = 'lesson'`. Nothing in the repo pushed a unit body into Postgres, so
// unit edits made in seed.json had no path to the database at all.
//
// They are also invisible to the publish-time no-silent-regression gate, which
// compares lessons. A unit reverted by a publish produces no error and no
// warning: the titles simply return to what the DB says, and the only sign is
// the seed.json diff after the fact.
//
// ── WHAT THIS ROUND RESTORES (2026-08-03) ──────────────────────────────────
// All 74 units were retitled: the English name moved into `title`, and the
// French name moved down into `sub`, replacing the descriptive subtitle each
// unit used to carry. Deliberate, and confirmed as such. The pre-retitle values
// are preserved in ealch-admin/unit-titles-pre-english-retitle.json.
//
// ── SAFETY ─────────────────────────────────────────────────────────────────
// - Restores EVERY unit present in both the reference seed and the DB. Unlike
//   the lesson script there is no allow-list, because a title/sub edit cannot
//   silently drop a mission the way a lesson body rewrite can — and an
//   allow-list of 74 ids is a transcription error waiting to happen.
// - NEVER inserts. A unit absent from the DB is reported and skipped: a
//   curriculum unit the DB has never seen is a spine change, which belongs in
//   update-spine.ts where prereq wiring is handled, not here.
// - Refuses on any structural change — different lessonIds, prereqUnitIds, seq,
//   level or track. This script is for editorial fields (title, sub, canDo,
//   themes). Anything that moves a unit in the graph must be done deliberately
//   elsewhere, and this refusing to touch it is the point.
//   ONE exception, deliberately narrow: a unit that purely GAINS a lessonId,
//   dropping nothing and changing nothing else. sons.08 needs it — its lesson
//   was authored seed-direct, so the DB has neither the lesson row nor the
//   unit's pointer at it, and a published lesson no unit links to is one the
//   learner can never reach. Removals and reorderings stay refused: they orphan
//   a lesson someone may be midway through, or silently change what comes next.
// - Every body runs validateUnit before anything is written.
// - Keeps the `title` COLUMN in step with `body->>'title'`. All 76 rows agree
//   today; the admin UI lists from the column while publish reads the body, so
//   letting them drift means the console shows one name and the app ships
//   another.
// - One transaction, rolled back on any row-count mismatch.
// - Idempotent: re-running when the DB already matches writes nothing.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/restore-unit-bodies-from-seed.ts --dry-run
//   pnpm tsx scripts/restore-unit-bodies-from-seed.ts
//   then: pnpm content:publish --dry-run   (expect a byte-identical seed.json)
//
// By default the reference is the committed seed.json at git HEAD, NOT the
// working-tree file, so a half-finished edit cannot be published by accident.
// Pass --from <path> to override.

import './env';
import { describeTarget } from './env';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { validateUnit, type Unit } from '../../ealch-v2/src/content/schema.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const fromIx = process.argv.indexOf('--from');
const FROM_PATH = fromIx === -1 ? null : process.argv[fromIx + 1];

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** Key-order-independent JSON. jsonb does not preserve key order, so comparing
 *  serializations reports differences that do not exist — the same false
 *  positive that made the lesson script plan a pointless rewrite of a row that
 *  already matched. Arrays keep their order, which is meaningful. */
function canonical(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(canonical);
  if (v && typeof v === 'object') {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(v as Record<string, unknown>).sort()) {
      out[k] = canonical((v as Record<string, unknown>)[k]);
    }
    return out;
  }
  return v;
}

const sameBody = (a: unknown, b: unknown) => JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));

/** The committed seed at HEAD, read through git rather than from disk. */
function readReferenceSeed(): { units: Unit[] } {
  if (FROM_PATH) return JSON.parse(readFileSync(FROM_PATH, 'utf8'));
  const repoRoot = fileURLToPath(new URL('../..', import.meta.url));
  const buf = execFileSync('git', ['show', 'HEAD:ealch-v2/src/content/seed.json'], {
    cwd: repoRoot,
    maxBuffer: 512 * 1024 * 1024,
    encoding: 'utf8',
  });
  return JSON.parse(buf);
}

/** The fields that place a unit in the curriculum graph. A change to any of
 *  them is a spine edit, not an editorial one, and this script refuses it. */
function structure(u: Unit) {
  return {
    seq: u.seq,
    level: u.level ?? null,
    track: u.track ?? null,
    lessonIds: [...u.lessonIds].sort(),
    prereqUnitIds: [...(u.prereqUnitIds ?? [])].sort(),
  };
}

/** The one structural change this script will make: a unit GAINING a lessonId
 *  it does not have yet, with nothing removed and nothing else touched.
 *
 *  sons.08 is the case. Its lesson was authored seed-direct, so Postgres has
 *  neither the lesson row (restore-lesson-bodies-from-seed.ts creates it) nor
 *  the unit's pointer at it — the DB unit still reads `lessonIds: []`. Refusing
 *  that would leave a published lesson no unit links to, which is invisible in
 *  the app: the learner simply never reaches it.
 *
 *  Narrow on purpose. A REMOVED lessonId orphans a lesson learners may be
 *  midway through, and a reordering changes what "next" means, so both stay
 *  refused. Only pure addition is safe to apply here. */
function isPureLessonAddition(db: Unit, git: Unit): boolean {
  const a = structure(db);
  const b = structure(git);
  const sameExceptLessons =
    a.seq === b.seq &&
    a.level === b.level &&
    a.track === b.track &&
    JSON.stringify(a.prereqUnitIds) === JSON.stringify(b.prereqUnitIds);
  if (!sameExceptLessons) return false;
  const dbSet = new Set(a.lessonIds);
  const gitSet = new Set(b.lessonIds);
  if (gitSet.size <= dbSet.size) return false;
  for (const id of dbSet) if (!gitSet.has(id)) return false; // nothing dropped
  return true;
}

/** A compact description of what an editorial change actually alters, so the
 *  dry run shows the decision rather than just "changed". */
function describeEdit(db: Unit, git: Unit): string {
  const bits: string[] = [];
  if (db.title !== git.title) bits.push(`title ${JSON.stringify(db.title)} → ${JSON.stringify(git.title)}`);
  if (db.sub !== git.sub) bits.push(`sub ${JSON.stringify(db.sub)} → ${JSON.stringify(git.sub)}`);
  if (db.canDo !== git.canDo) bits.push('canDo changed');
  if (!sameBody(db.themes ?? null, git.themes ?? null)) bits.push('themes changed');
  return bits.length ? bits.join('; ') : 'body differs in other fields';
}

/** Set when the run ends in a refusal. Read after the connection is released,
 *  so a non-zero exit never races the pool teardown. */
let refusedExit = false;

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) die('No DATABASE_URL.');
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const seed = readReferenceSeed();
  if (!Array.isArray(seed.units)) die('the reference seed has no `units` array');
  console.log(
    `  reference: ${FROM_PATH ?? 'git HEAD:ealch-v2/src/content/seed.json'} (${seed.units.length} units)`
  );

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const rows = await client.query<{ slug: string; title: string; body: Unit }>(
      `select slug, title, body from content_units where kind = 'curriculum_unit'`
    );
    const dbBySlug = new Map(rows.rows.map((r) => [r.slug, r]));
    console.log(`  database:  ${rows.rowCount} curriculum units`);

    const plan: { id: string; body: Unit; what: string }[] = [];
    const absent: string[] = [];
    const refused: string[] = [];
    let matched = 0;

    for (const git of seed.units) {
      const row = dbBySlug.get(git.id);

      // Absent from the DB. Reported, never inserted — see SAFETY above.
      if (!row) {
        absent.push(git.id);
        continue;
      }

      const issues = validateUnit(git, git.id);
      if (issues.length) {
        die(`${git.id} fails validateUnit:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
      }

      const db = row.body;

      // Structural divergence: refuse the unit, do not silently reshape the
      // curriculum graph. Collected rather than fatal so one dry run reports
      // every one of them instead of stopping at the first.
      if (!sameBody(structure(db), structure(git))) {
        if (isPureLessonAddition(db, git)) {
          const added = git.lessonIds.filter((id) => !db.lessonIds.includes(id));
          console.log(
            `  + ${git.id.padEnd(10)} gains lessonId ${added.join(', ')} (nothing removed) — allowed`
          );
        } else {
          refused.push(
            `${git.id}: structural fields differ (seq/level/track/lessonIds/prereqUnitIds). ` +
              `DB ${JSON.stringify(structure(db))} vs git ${JSON.stringify(structure(git))}`
          );
          continue;
        }
      }

      // The column must move with the body, or the console and the app disagree.
      if (sameBody(db, git) && row.title === git.title) {
        matched++;
        continue;
      }
      plan.push({ id: git.id, body: git, what: describeEdit(db, git) });
    }

    if (matched) console.log(`  = ${matched} unit(s) already match`);
    if (absent.length) {
      console.log(`\n  ! ${absent.length} unit(s) in the seed have NO DB row — skipped, never inserted:`);
      for (const id of absent) console.log(`      ${id}`);
      console.log('      A unit the DB has never seen is a spine change: use content:spine.');
    }
    if (refused.length) {
      // No pool.end() here. The client is still checked out and is only
      // released by the `finally` below, so ending the pool from inside the
      // try block waits forever for a client that can never come back — the
      // script printed its findings and then hung. Print, and let the normal
      // cleanup path run; `refusedExit` makes the process exit non-zero after
      // the connection is properly released.
      console.error(`\n✖ ${refused.length} unit(s) differ structurally. NOTHING was written.\n`);
      for (const r of refused) console.error(`  ✖ ${r}`);
      console.error(
        '\n  This script restores editorial fields (title, sub, canDo, themes).\n' +
          '  Moving a unit in the curriculum graph is update-spine.ts\'s job.\n'
      );
      refusedExit = true;
      return;
    }

    if (!plan.length) {
      console.log('\n✓ nothing to restore, every unit already matches the reference.\n');
      return;
    }

    console.log(`\n  unit restore plan (${plan.length}):`);
    for (const p of plan.slice(0, 20)) console.log(`    ${p.id.padEnd(10)} ${p.what}`);
    if (plan.length > 20) console.log(`    … and ${plan.length - 20} more`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const p of plan) {
      const res = await client.query(
        `update content_units
            set body = $1::jsonb, title = $2, updated_at = now()
          where kind = 'curriculum_unit' and slug = $3`,
        [JSON.stringify(p.body), p.body.title, p.id]
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`${p.id} update touched ${res.rowCount} rows — rolled back, nothing changed`);
      }
    }
    await client.query('commit');

    console.log(
      `\n✓ ${plan.length} unit body/bodies restored into Postgres.\n` +
        `  Next: pnpm content:publish --dry-run, and confirm seed.json comes back byte-identical.\n`
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main()
  .then(() => {
    if (refusedExit) process.exit(1);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
