// Content Batch — sons.03.l1 mission 1: the `story` -> `scene` conversion,
// applied to POSTGRES so that seed.json stops running ahead of it.
//
// ── Why this batch exists ──────────────────────────────────────────────────
//
// merge-sons03-scene-into-seed.ts converted mission 1 in seed.json, which is
// what the app bundles and what the device proved. But Postgres is the source
// of truth: `content:publish` regenerates seed.json FROM the database. The
// lesson row still holds the old `story`, so the first publish after that
// merge would regenerate seed.json and silently revert the conversion. This is
// the incident shape from 2026-07-31 and 2026-08-02, and it bites harder here
// because mission 1 of this lesson is already published, so the revert would
// regress live content rather than merely fail to add to it.
//
// This batch closes that gap. After it runs, DB and seed agree and a publish
// is safe.
//
// ── What it does, and deliberately does not do ─────────────────────────────
//
// It updates ONE lesson row: content_units where kind='lesson' and
// slug='sons.03.l1'. It writes no items (the conversion added no vocabulary,
// and LESSON.itemIds is unchanged), and it does not touch the curriculum unit
// (sons.03 already lists this lesson, verified before the write).
//
// The lesson body is read from the committed seed.json rather than restated
// here. Restating it would create a second copy of a 20-section lesson that
// could drift from the one the tests and the device actually check —
// sons-03-nasales-scene.test.ts guards the seed, so the seed is the thing
// worth shipping. This script's job is transport, not authoring.
//
// Usage (from ealch-admin/):
//   pnpm content:sons03scene --dry-run   validate + print the before/after
//   pnpm content:sons03scene             apply, one transaction
//   then: pnpm content:publish           (now safe for this lesson)

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues,
  validateLesson,
  validateUnit,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = join(HERE, '../../ealch-v2/src/content/seed.json');

const LESSON_ID = 'sons.03.l1';
const UNIT_ID = 'sons.03';

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as { lessons: Lesson[]; items: { id: string }[] };
const LESSON = seed.lessons.find((l) => l.id === LESSON_ID);
if (!LESSON) die(`${LESSON_ID} is not in seed.json — run merge-sons03-scene-into-seed.ts first`);

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  // ── Everything validates before the database is touched ──────────────────

  const m1 = LESSON!.sections[0] as { type?: string };
  if (m1.type !== 'scene') {
    die(
      `seed.json mission 1 is a "${String(m1.type)}", not the "scene" this ships.\n` +
        '  Run merge-sons03-scene-into-seed.ts first; this batch only transports what the seed already holds.'
    );
  }

  const lessonIssues = validateLesson(LESSON!, LESSON!.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  const density = validateDensity(LESSON!, new Set(seed.items.map((i) => i.id)));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules the seed-wide tests enforce.
  const authored = JSON.stringify(LESSON);
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // ── What is actually in the database right now ───────────────────────
    const cur = await client.query<{
      status: string;
      sections: number;
      m1_type: string | null;
      m1_title: string | null;
      body: Lesson;
    }>(
      `select status,
              jsonb_array_length(body->'sections') as sections,
              body->'sections'->0->>'type'  as m1_type,
              body->'sections'->0->>'title' as m1_title,
              body
         from content_units
        where kind = 'lesson' and slug = $1`,
      [LESSON_ID]
    );

    if (cur.rowCount !== 1) die(`expected exactly 1 published lesson row for ${LESSON_ID}, found ${cur.rowCount}`);
    const row = cur.rows[0];

    if (row.m1_type === 'scene') {
      console.log('\n  Postgres already holds the scene. Nothing to do — DB and seed agree.\n');
      return;
    }
    if (row.m1_type !== 'story') {
      die(`DB mission 1 is a "${row.m1_type}", which is neither the story this replaces nor the scene it ships`);
    }

    // The conversion changes mission 1 and NOTHING else. Verify that against
    // the live row before writing, so a seed that drifted for some unrelated
    // reason cannot ride in on this batch.
    const dbRest = JSON.stringify((row.body.sections ?? []).slice(1));
    const seedRest = JSON.stringify(LESSON!.sections.slice(1));
    if (dbRest !== seedRest) {
      die(
        'the seed and the database disagree about missions 2-20, so this is not a clean\n' +
          '  mission-1 conversion. Reconcile them before shipping; this batch refuses to\n' +
          '  carry unrelated changes into a published lesson.'
      );
    }

    // The unit should already list this lesson. Checked, not assumed, and not
    // rewritten when it is already correct.
    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units`);
    const unitBody = unitRow.rows[0].body;
    const unitIssues = validateUnit(unitBody, unitBody.id);
    if (unitIssues.length) die(`unit ${UNIT_ID} does not validate:\n${formatIssues(unitIssues)}`);
    const unitLinked = (unitBody.lessonIds ?? []).includes(LESSON_ID);
    if (!unitLinked) die(`unit ${UNIT_ID} does not list ${LESSON_ID}; this batch does not re-link units`);

    const beats = (LESSON!.sections[0] as unknown as { beats: { kind: string }[] }).beats;

    console.log(`\n  lesson: ${LESSON_ID} "${LESSON!.title}" — status ${row.status}`);
    console.log(`  mission 1: "${row.m1_type}" -> "scene"  (${row.m1_title})`);
    console.log(`  beats: ${beats.map((b) => b.kind).join(' > ')}`);
    console.log(`  sections: ${row.sections} -> ${LESSON!.sections.length} (missions 2-20 byte-identical ✓)`);
    console.log(`  itemIds: ${LESSON!.itemIds.length} (no items written by this batch)`);
    console.log(`  unit ${UNIT_ID}: already lists this lesson ✓ (not rewritten)`);
    console.log('  validators: schema ✓  density ✓  house style ✓');

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    const res = await client.query(
      `update content_units
          set body = $1::jsonb, title = $2, level = $3, status = 'published', updated_at = now()
        where kind = 'lesson' and slug = $4`,
      [JSON.stringify(LESSON), LESSON!.title, LESSON!.level, LESSON_ID]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`lesson update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    // Read back inside the transaction: commit only once the row really holds
    // the scene. An update that silently matched nothing is the failure mode
    // this whole batch exists to prevent.
    const check = await client.query<{ m1_type: string | null; sections: number }>(
      `select body->'sections'->0->>'type' as m1_type,
              jsonb_array_length(body->'sections') as sections
         from content_units where kind = 'lesson' and slug = $1`,
      [LESSON_ID]
    );
    if (check.rows[0]?.m1_type !== 'scene' || check.rows[0]?.sections !== LESSON!.sections.length) {
      await client.query('rollback');
      die('post-write read-back did not show the scene — rolled back, nothing changed');
    }

    await client.query('commit');
    console.log(
      `\n✓ sons.03 scene batch applied: ${LESSON_ID} mission 1 is now a scene in Postgres.` +
        '\n  seed.json and the database now AGREE, so `pnpm content:publish` is safe for this lesson.' +
        '\n  Still check `git diff` on ealch-v2/src/content/seed.json before publishing: other' +
        '\n  lessons on this branch may still be running ahead of the database.\n'
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
