// Content Batch — Les nombres 1-20: a1.02.l1, authored on Lesson Architecture v2.
//
// a1.02 shipped with `lessonIds: []`. This batch authors its first lesson, adds
// the two corpus entries the nombres theme was missing (deux and une, verified
// absent on 2026-08-04), and links the unit.
//
// The content lives in scripts/data/ (nombres-corpus.ts, nombres-lesson.ts,
// nombres-terms.ts) rather than inline here, the way every v2 lesson is now
// split, so the app's own test suite can import it directly:
//
//   ealch-v2/src/content/a1-02-nombres.test.ts
//
// That test is the durable gate. This script re-runs the same validators before
// it writes, so a broken batch dies before it touches the database.
//
// ── This batch authors TWO items and reuses twenty-six ─────────────────────
//
// The nombres theme already holds 439 items and every headword this lesson
// teaches exists at sons level with IPA. The exceptions are `deux` and `une`,
// which the theme did not carry at all. The quantity phrases the brief expected
// to be missing are NOT missing: they exist in the cafe and marche themes and
// are referenced by id rather than re-authored, because a second copy of
// "une baguette" would serve the same card twice in the flashcard hub.
//
// The count of new items is asserted below rather than trusted, so a corpus
// file that quietly grows fails here instead of in a publish.
//
// Usage (from ealch-admin/):
//   pnpm content:nombres --dry-run   validate + report only
//   pnpm content:nombres             apply, one transaction
//   then: pnpm tsx scripts/merge-nombres-into-seed.ts   (seed, second)
//   then: pnpm tsx scripts/check-seed-db-parity.ts
//   then: pnpm audio:render --only a1.02.l1  (spends real ElevenLabs credits,
//                                             deliberately NOT part of this batch)
//
// Order matters. `pnpm content:publish` regenerates seed.json FROM the
// database, so the database has to be written first. Merging first and
// publishing second silently deletes the lesson from the seed.

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import {
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  validateUnit,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { NOMBRES } from './data/nombres-corpus.ts';
import {
  NOMBRES_LESSON,
  NOMBRES_ITEM_IDS,
  NOMBRES_SPEAK_IDS,
  NOMBRES_DICTATION_IDS,
  NOMBRES_ONE_TO_TWENTY,
  REFRAME,
} from './data/nombres-lesson.ts';

const LESSON: Lesson = NOMBRES_LESSON;
const UNIT_ID = 'a1.02';
const NEW_ITEMS = NOMBRES;

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  Deliberately a CONSTANT rather than a count derived from the lesson: a
 *  derived figure compares the content to itself and passes on any rewording,
 *  and the density rule's "at least three sections" minimum would pass too.
 *  This is the check that notices when somebody paraphrases the line the whole
 *  lesson hangs on.
 *
 *  Twelve: nine section strings, the `reframe` field itself, and two narration
 *  segments. */
const REFRAME_APPEARANCES = 12;

/** How many corpus entries this batch is allowed to write. A lesson that starts
 *  authoring words instead of sequencing them is a lesson whose words are
 *  absent from every other surface, so growth here is a decision somebody has
 *  to make on purpose. */
const EXPECTED_NEW_ITEMS = 2;

/** Numbers above twenty may be SHOWN and must not be TAUGHT. This is the
 *  production side of that split, checked here as well as in the test because a
 *  batch that writes a bad lesson to Postgres has already cost the work. */
const ABOVE_TWENTY =
  /\b(trente|quarante|cinquante|soixante|quatre-vingts?|cents?|mille|millions?|milliards?)\b|\bvingt[- ](?:et[- ])?(?:une?|deux|trois|quatre|cinq|six|sept|huit|neuf)\b/i;

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

  if (NEW_ITEMS.length !== EXPECTED_NEW_ITEMS) {
    die(
      `this batch is authored to write ${EXPECTED_NEW_ITEMS} corpus entries and nombres-corpus.ts now defines ` +
      `${NEW_ITEMS.length}. Every entry needs a reason in that file's header; raise this constant deliberately.`
    );
  }

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const newIds = NEW_ITEMS.map((i) => i.id);
  const dupeIds = newIds.filter((id, i) => newIds.indexOf(id) !== i);
  if (dupeIds.length) die(`duplicate ids in the corpus: ${[...new Set(dupeIds)].join(', ')}`);

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build.
  const density = validateDensity(LESSON, new Set([...NOMBRES_ITEM_IDS, ...newIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules sons-alphabet.test.ts enforces.
  const authored = JSON.stringify({ NEW_ITEMS, LESSON });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  // Exactly one quiz section. The pager appends ONE quiz page and resolves it
  // with sections.find(s => s.type === 'quiz'), so a second quiz section is a
  // set of questions no learner can reach.
  const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
  if (quizzes.length !== 1) {
    die(
      `this lesson has ${quizzes.length} quiz sections. The pager can reach exactly one, ` +
      `so any others are unreachable questions. Fold them into the mission they follow.`
    );
  }

  // ── The 1-to-20 boundary, on production surfaces only ─────────────────────
  //
  // Showing a number above twenty in an example, a listening line, a reading
  // passage or a scenario turn is explicitly allowed: 238 of this theme's items
  // mention one, and banning them would force stilted French everywhere. What
  // is not allowed is asking the learner to PRODUCE one, which belongs to
  // a1.27 and a1.28.
  const quiz = quizzes[0];
  const produced: string[] = [];
  if (quiz.type === 'quiz') {
    for (const q of quizQuestions(quiz)) {
      if (q.format === 'typeIn' || q.format === 'errorSpot') {
        produced.push(...(q.accept ?? []), q.answer ?? '');
      }
      if (q.format === 'speak' && q.target) produced.push(q.target);
    }
  }
  for (const sec of LESSON.sections) {
    if (sec.type === 'flashcards' || sec.type === 'reviewDeck') produced.push(...sec.cards.map((c) => c.back));
  }
  const overTwenty = produced.filter((s) => ABOVE_TWENTY.test(s));
  if (overTwenty.length) {
    die(
      `this lesson teaches numbers above twenty, which belong to a1.27 and a1.28:\n  ${overTwenty.join('\n  ')}\n` +
      `  Showing one in a sentence is fine. Asking the learner to produce it is not.`
    );
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must exist after this batch: either it is in
    // the batch, or it is already published HERE. Checked against the database
    // rather than seed.json, because the seed can run ahead and an id that
    // exists only in the seed renders as an empty card on a device.
    const reused = NOMBRES_ITEM_IDS.filter((id) => !newIds.includes(id));
    const found = await client.query<{ id: string; drills: string[]; fr: string }>(
      `select id, drills, fr from content_items where id = any($1) and status = 'published'`,
      [reused]
    );
    const byId = new Map(found.rows.map((r) => [r.id, r]));
    const missing = reused.filter((id) => !byId.has(id));
    if (missing.length) {
      die(
        `lesson references items that are not published in THIS database:\n  ${missing.join('\n  ')}\n` +
        `  (seed.json can run ahead of the database — these may exist in the seed but not here.)`
      );
    }

    // The twenty headwords, checked against what the database actually holds.
    // A gap here is a learner who reaches vingt and was never taught treize.
    const drillable = new Map([...byId].map(([id, r]) => [id, r]));
    const teachGaps = NOMBRES_ONE_TO_TWENTY.filter((id) => !drillable.has(id) && !newIds.includes(id));
    if (teachGaps.length) die(`the one-to-twenty set is incomplete in this database:\n  ${teachGaps.join('\n  ')}`);

    // A mission is only as good as the drill tag behind it. An item without
    // `voiceflash` renders in the speak mission as a card the mic cannot score,
    // which reads as a broken mission rather than a missing tag.
    const noVoice = NOMBRES_SPEAK_IDS.filter((id) => {
      if (newIds.includes(id)) return !NEW_ITEMS.find((i) => i.id === id)!.drills.includes('voiceflash');
      return !(byId.get(id)?.drills ?? []).includes('voiceflash');
    });
    if (noVoice.length) die(`speak mission names items without the voiceflash drill:\n  ${noVoice.join('\n  ')}`);

    const noDictation = NOMBRES_DICTATION_IDS.filter((id) => !(byId.get(id)?.drills ?? []).includes('dictation'));
    if (noDictation.length) die(`dictation mission names items without the dictation drill:\n  ${noDictation.join('\n  ')}`);

    // A dictation sentence is written out by the learner, so it is a production
    // surface too. One containing soixante-dix would teach it by the back door.
    const dictatedOver = NOMBRES_DICTATION_IDS
      .map((id) => byId.get(id))
      .filter((r): r is { id: string; drills: string[]; fr: string } => !!r && ABOVE_TWENTY.test(r.fr));
    if (dictatedOver.length) {
      die(`a dictation sentence asks the learner to write a number above twenty:\n  ${dictatedOver.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}`);
    }

    // Two entries teaching the same WORD inside one theme is the .057 incident:
    // the flashcard hub keys decks on `fr`, so a duplicate serves the same card
    // twice and takes two SRS ratings for one word.
    const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const clash = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items
        where theme = 'nombres' and status = 'published' and kind <> 'sentence' and id <> all($1)`,
      [newIds]
    );
    for (const it of NEW_ITEMS) {
      const prior = clash.rows.find((r) => fold(r.fr) === fold(it.fr));
      if (prior) die(`"${it.fr}" already exists in the nombres theme as ${prior.id} — reference it instead of authoring ${it.id}`);
    }

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
    console.log(`  new items: ${NEW_ITEMS.length} (${newIds.join(', ')})`);
    console.log(`  reused items: ${reused.length}, across themes ${[...new Set(reused.map((i) => i.split('.')[2]))].join(', ')}`);
    console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length}`);
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  quiz: ${qs.length} questions in ${rounds} rounds, all reachable`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  taught range: un to vingt (${NOMBRES_ONE_TO_TWENTY.length} headwords) plus une; nothing above twenty on a production surface`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  narration: ${LESSON.narration?.stages.map((s) => s.stage).join(' → ')}`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  one reachable quiz ✓  1-20 boundary ✓`);
    console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');

    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version,
        ]
      );
    }

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
      `\n✓ nombres batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published at v${LESSON.version}, unit ${UNIT_ID} linked.` +
      `\n` +
      `\n  Next, IN THIS ORDER:` +
      `\n    1. pnpm tsx scripts/merge-nombres-into-seed.ts` +
      `\n    2. pnpm tsx scripts/check-seed-db-parity.ts` +
      `\n` +
      `\n  Do NOT run pnpm content:publish yet. It regenerates seed.json from the` +
      `\n  database and sons.09.l1 is still seed-only, so a publish would delete it.\n`
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
