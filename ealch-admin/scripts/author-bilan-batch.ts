// a1.30 "Bilan A1" -> Postgres.
//
//   pnpm tsx scripts/author-bilan-batch.ts --dry-run    validate, write nothing
//   pnpm tsx scripts/author-bilan-batch.ts              write in ONE transaction
//
// ORDER MATTERS AND IT IS COUNTER-INTUITIVE. Postgres first, THEN the seed,
// and publish only once the two agree. `content:publish` regenerates seed.json
// FROM the database, so a seed written before this batch is a seed the next
// publish silently deletes. That is the 2026-07-31 incident, and running these
// two in the wrong order is the whole way it happens.
//
// What this writes:
//
//   updates  content_units slug a1.30.l1   the body is REPLACED wholesale
//   inserts  content_units slug a1.30.l2   new row
//   updates  content_units a1.30           the curriculum_unit body, relinked
//
// What it does NOT write:
//
//   content_items. Not one row, inserted, updated or deleted. Both lessons
//   carry an empty itemIds and the thirteen repair-kit rows the old lesson used
//   stay exactly where they are, in their themes, reachable by every feature
//   that reads the corpus by theme rather than through a lesson. See the note
//   in merge-bilan-into-seed.ts.
//
// ── On replacing a1.30.l1 rather than deleting it ──────────────────────────
//
// The lesson id is the slug and the slug is the identity, so the upsert
// overwrites the old nineteen-section body in place. That keeps every
// content_revisions row pointing at a slug that still exists, which a delete
// and re-insert would not, and it means the previous body is recoverable from
// the revision history rather than only from git.

import './env';
import { describeTarget, isRemoteTarget } from './env';
import {
  formatIssues,
  quizQuestions,
  validateLesson,
  type Lesson,
  type QuizRound,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { BILAN_LESSONS, EXAM_LESSON, REVIEW_LESSON } from './data/bilan-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const UNIT_ID = 'a1.30';

/* Explicit, not derived. Invariant §5. */
const EXPECTED_REVIEW_ROUNDS = 29;
const EXPECTED_REVIEW_QUESTIONS = 145;
const EXPECTED_EXAM_ROUNDS = 12;
const EXPECTED_EXAM_QUESTIONS = 60;

function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

function ok(label: string, detail = '') {
  console.log(`  ✓ ${label}${detail ? `  ${detail}` : ''}`);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const roundsOf = (l: Lesson): QuizRound[] => {
  const q = l.sections.find((s) => s.type === 'quiz') as { rounds?: QuizRound[] } | undefined;
  return q?.rounds ?? [];
};

async function main() {
  console.log(`\na1.30 "Bilan A1" -> ${describeTarget()}`);
  if (isRemoteTarget()) console.log('  TARGET IS REMOTE.');
  if (DRY_RUN) console.log('  (dry run, nothing will be written)');

  /* ── Validate before touching anything ──────────────────────────────── */

  console.log('\n── Validating ──');
  for (const lesson of BILAN_LESSONS) {
    const issues = validateLesson(lesson);
    if (issues.length) die(`${lesson.id} fails the schema:\n${formatIssues(issues)}`);
    const density = validateDensity(lesson, new Set());
    if (density.length) die(`${lesson.id} fails density:\n${formatDensity(density)}`);
    if (lesson.itemIds.length) die(`${lesson.id} claims ${lesson.itemIds.length} corpus rows; this unit owns none`);
    const quizzes = lesson.sections.filter((s) => s.type === 'quiz');
    if (quizzes.length !== 1) die(`${lesson.id} has ${quizzes.length} quiz sections; the pager renders exactly one`);
    const bad = strings(lesson).filter((s) => s.includes('—'));
    if (bad.length) die(`${lesson.id} has an em dash: ${bad[0].slice(0, 60)}`);
    ok(`${lesson.id}`, `${lesson.sections.length} sections, ${quizQuestions(quizzes[0]).length} questions`);
  }

  const reviewRounds = roundsOf(REVIEW_LESSON);
  const examRounds = roundsOf(EXAM_LESSON);
  const reviewQs = quizQuestions(REVIEW_LESSON.sections.find((s) => s.type === 'quiz')!);
  const examQs = quizQuestions(EXAM_LESSON.sections.find((s) => s.type === 'quiz')!);
  if (reviewRounds.length !== EXPECTED_REVIEW_ROUNDS) die(`review has ${reviewRounds.length} rounds, expected ${EXPECTED_REVIEW_ROUNDS}`);
  if (reviewQs.length !== EXPECTED_REVIEW_QUESTIONS) die(`review has ${reviewQs.length} questions, expected ${EXPECTED_REVIEW_QUESTIONS}`);
  if (examRounds.length !== EXPECTED_EXAM_ROUNDS) die(`exam has ${examRounds.length} rounds, expected ${EXPECTED_EXAM_ROUNDS}`);
  if (examQs.length !== EXPECTED_EXAM_QUESTIONS) die(`exam has ${examQs.length} questions, expected ${EXPECTED_EXAM_QUESTIONS}`);
  ok('counts', `${reviewRounds.length}+${examRounds.length} rounds, ${reviewQs.length}+${examQs.length} questions`);

  const examQuiz = EXAM_LESSON.sections.find((s) => s.type === 'quiz') as { exam?: boolean };
  if (examQuiz.exam !== true) die('the exam quiz is not marked exam: true');
  if (examRounds.some((r) => (r.targets ?? []).length)) die('an exam round declares targets, which fires a drill mid-exam');
  ok('exam conditions', 'exam: true, no round targets');

  /* ── Connect ────────────────────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    console.log('\n── What is there now ──');

    const unitRow = await client.query(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID],
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lessons`);
    const currentUnit = unitRow.rows[0].body as Record<string, unknown> & { lessonIds?: string[] };
    console.log(`  unit ${UNIT_ID}  lessonIds ${JSON.stringify(currentUnit.lessonIds ?? [])}`);

    const existing = await client.query(
      `select slug, jsonb_array_length(body->'sections') as sections, body->>'version' as version
         from content_units where kind = 'lesson' and slug like $1 order by slug`,
      [`${UNIT_ID}.%`],
    );
    for (const r of existing.rows) {
      console.log(`  lesson ${r.slug}  v${r.version}, ${r.sections} sections  ->  will be REPLACED`);
    }
    if (!existing.rowCount) console.log('  (no a1.30 lesson rows in the database)');

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      return;
    }

    /* ── Write ────────────────────────────────────────────────────────── */

    await client.query('begin');

    for (const lesson of BILAN_LESSONS) {
      await client.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
         on conflict (slug) do update set
           title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
        [lesson.id, lesson.title, lesson.level, JSON.stringify(lesson)],
      );
    }

    const nextUnit = {
      ...currentUnit,
      lessonIds: [REVIEW_LESSON.id, EXAM_LESSON.id],
      title: 'A1 Review',
      sub: 'Bilan A1',
      canDo:
        'Can demonstrate the whole A1 band under test: twenty-nine review rounds naming the lesson each question came from, then a sixty-question exam that names nothing',
    };

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
    }

    // Read back inside the transaction: an upsert that silently matched nothing
    // would otherwise commit a no-op and report success.
    const check = await client.query(
      `select slug, jsonb_array_length(body->'sections') as sections
         from content_units where kind = 'lesson' and slug like $1 order by slug`,
      [`${UNIT_ID}.%`],
    );
    if (check.rowCount !== 2) {
      await client.query('rollback');
      die(`expected 2 a1.30 lesson rows after the write, found ${check.rowCount}, rolled back`);
    }

    await client.query('commit');

    console.log('\n── Written ──');
    for (const r of check.rows) console.log(`  ${r.slug}  ${r.sections} sections`);
    console.log(
      `\n✓ bilan batch applied: ${REVIEW_LESSON.id} replaced, ${EXAM_LESSON.id} created,`
      + `\n  unit ${UNIT_ID} relinked to both. No content_items touched.`
      + `\n  Next: pnpm tsx scripts/merge-bilan-into-seed.ts --dry-run`
      + `\n  Then publish only once the seed and the database agree.\n`,
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
