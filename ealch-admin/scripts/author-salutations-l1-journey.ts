// Content Batch — Les salutations: the a1.01.l1 rebuild on Lesson Architecture v2.
//
// a1.01.l1 is the first lesson a new learner ever opens. It shipped as a good
// 20-section journey written before v2 existed: no acts, no section ids, no
// reframe, no drills or sheets, a flat question list, and TWO quiz sections of
// which the pager could only ever reach the first. Twelve authored questions
// were unreachable. This batch replaces that body.
//
// The content lives in scripts/data/ (salutations-lesson.ts, salutations-terms.ts)
// rather than inline here, the way every v2 lesson is now split, so the app's
// own test suite can import it directly:
//
//   ealch-v2/src/content/salutations-a1.test.ts
//
// That test is the durable gate. This script re-runs the same validators before
// it writes, so a broken batch dies before it touches the database.
//
// THIS BATCH AUTHORS NO CORPUS. The salutations theme already holds 366
// published a1 items; the lesson's job is to SEQUENCE 50 of them, not to invent
// words that would then be absent from the flashcard hub and the SRS. That is
// asserted below rather than trusted: the script fails if it is ever given an
// item to write.
//
// Same contract as author-elision-batch.ts: everything validates BEFORE the
// database is touched, then the lesson and its unit link upsert inside ONE
// transaction. Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm content:salutations --dry-run   validate + report only
//   pnpm content:salutations             apply, one transaction
//   then: pnpm tsx scripts/merge-salutations-into-seed.ts   (seed, second)
//   then: pnpm tsx scripts/check-seed-db-parity.ts          (must exit 0)
//   then: pnpm audio:render --only a1.01.l1  (spends real credits, NOT part of
//                                             this batch)
//
// Order matters. `pnpm content:publish` regenerates seed.json FROM the database,
// so the database has to be written first. Merging first and publishing second
// silently deletes the lesson from the seed.

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import {
  formatIssues,
  quizQuestions,
  validateLesson,
  validateUnit,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import {
  SALUTATIONS_LESSON,
  SALUTATIONS_ITEM_IDS,
  SALUTATIONS_SPEAK_IDS,
  SALUTATIONS_DICTATION_IDS,
  REFRAME,
} from './data/salutations-lesson.ts';

const LESSON: Lesson = SALUTATIONS_LESSON;
const UNIT_ID = 'a1.01';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *  Deliberately a CONSTANT rather than a count derived from the lesson: a
 *  derived figure would be comparing the content to itself and would pass on
 *  any rewording. The density rule's "at least three sections" minimum would
 *  also pass. This is the check that notices when someone paraphrases the line
 *  the whole lesson hangs on. */
const REFRAME_APPEARANCES = 8;

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** Every authored string in a value, for the house-style guards. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  // ── Everything validates before the database is touched ───────────────────

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build. It is also the
  // check that caught `size: 'xl'` on the opening scene, a field the layout
  // ignores entirely but which caps every string at 12 words.
  const density = validateDensity(LESSON, new Set(SALUTATIONS_ITEM_IDS));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules sons-alphabet.test.ts enforces.
  const authored = JSON.stringify(LESSON);
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  // Exactly one quiz section. The pager appends ONE quiz page and resolves it
  // with sections.find(s => s.type === 'quiz'), so a second quiz section is a
  // set of questions no learner can reach. That is the bug this rebuild fixes
  // and this is the guard that stops it coming back through this door.
  const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
  if (quizzes.length !== 1) {
    die(
      `this lesson has ${quizzes.length} quiz sections. The pager can reach exactly one, ` +
      `so any others are unreachable questions. Fold them into the mission they follow.`
    );
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item the lesson names must already be published HERE. Checked
    // against the database, not seed.json, because the seed can run ahead: an
    // id that exists only in the seed renders as an empty card on a device.
    const found = await client.query<{ id: string; drills: string[] }>(
      `select id, drills from content_items where id = any($1) and status = 'published'`,
      [SALUTATIONS_ITEM_IDS]
    );
    const byId = new Map(found.rows.map((r) => [r.id, r]));
    const missing = SALUTATIONS_ITEM_IDS.filter((id) => !byId.has(id));
    if (missing.length) {
      die(
        `lesson references items that are not published in THIS database:\n  ${missing.join('\n  ')}\n` +
        `  (this batch authors no corpus, so it cannot create them.)`
      );
    }

    // A mission is only as good as the drill tag behind it. An item without
    // `voiceflash` renders in the speak mission as a card the mic cannot score,
    // which reads as a broken mission rather than a missing tag.
    const noVoice = SALUTATIONS_SPEAK_IDS.filter((id) => !(byId.get(id)?.drills ?? []).includes('voiceflash'));
    if (noVoice.length) die(`speak mission names items without the voiceflash drill:\n  ${noVoice.join('\n  ')}`);

    const noDictation = SALUTATIONS_DICTATION_IDS.filter((id) => !(byId.get(id)?.drills ?? []).includes('dictation'));
    if (noDictation.length) die(`dictation mission names items without the dictation drill:\n  ${noDictation.join('\n  ')}`);

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;
    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );

    // ── Report ─────────────────────────────────────────────────────────────

    const quiz = quizzes[0];
    const qs = quiz.type === 'quiz' ? quizQuestions(quiz) : [];
    const rounds = quiz.type === 'quiz' ? (quiz.rounds?.length ?? 0) : 0;
    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});
    const prior = existingLesson.rows[0]?.version;

    console.log(
      `\n  lesson: ${LESSON.id} "${LESSON.title}" — ` +
      `${existingLesson.rowCount ? `updating v${prior} → v${LESSON.version}` : `NEW at v${LESSON.version}`}`
    );
    console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length} (all reused, none authored)`);
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  quiz: ${qs.length} questions in ${rounds} rounds, all reachable`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  one reachable quiz ✓`);
    console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ salutations batch applied: lesson ${LESSON.id} published at v${LESSON.version}, unit ${UNIT_ID} linked.` +
      `\n  No corpus rows were written; this lesson authors none.` +
      `\n` +
      `\n  Next, IN THIS ORDER:` +
      `\n    1. pnpm tsx scripts/merge-salutations-into-seed.ts` +
      `\n    2. pnpm tsx scripts/check-seed-db-parity.ts   (must exit 0 before anyone publishes)\n`
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
