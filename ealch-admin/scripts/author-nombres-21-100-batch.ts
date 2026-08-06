// Content Batch — Les nombres 21-100: a1.27.l1, authored on Lesson Architecture v2.
//
// a1.27 shipped with `lessonIds: []`. This batch authors its first lesson, adds
// the two corpus sentences the nombres theme was missing at the exact points
// this lesson makes its claim, and links the unit.
//
// The content lives in scripts/data/ (nombres21-corpus.ts, nombres21-ids.ts,
// nombres21-lesson.ts, nombres21-terms.ts) rather than inline here, the way
// every v2 lesson is now split, so the app's own test suite can import it:
//
//   ealch-v2/src/content/a1-27-nombres.test.ts
//
// That test is the durable gate. This script re-runs the same validators before
// it writes, so a broken batch dies before it touches the database.
//
// ── This batch authors TWO sentences and reuses eighty-two ─────────────────
//
// Coverage of 21 to 100 in the nombres theme is complete: eighty headwords, all
// with IPA, a respelling and the flashcard and voiceflash drills. Not one
// number is authored. What was missing was a phone number using a form above
// sixty-nine (none of the theme's five phone-number sentences does) and any
// sentence at all containing "soixante et onze". Both are load-bearing: the
// first is this range's whole reason to exist and the second is the rule the
// lesson calls the most common written error. See nombres21-corpus.ts.
//
// The count of new items is asserted below rather than trusted, so a corpus
// file that quietly grows fails here instead of in a publish.
//
// Usage (from ealch-admin/):
//   pnpm content:nombres21 --dry-run   validate + report only
//   pnpm content:nombres21             apply, one transaction
//   then: pnpm tsx scripts/merge-nombres-21-100-into-seed.ts   (seed, second)
//   then: pnpm tsx scripts/check-seed-db-parity.ts
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
import { formatDensity, validateDensity, hasPlainNasal, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { NOMBRES21 } from './data/nombres21-corpus.ts';
import {
  NOMBRES21_LESSON,
  NOMBRES21_ITEM_IDS,
  NOMBRES21_SPEAK_IDS,
  NOMBRES21_DICTATION_IDS,
  NOMBRES21_RANGE_IDS,
  REFRAME,
} from './data/nombres21-lesson.ts';

const LESSON: Lesson = NOMBRES21_LESSON;
const UNIT_ID = 'a1.27';
const NEW_ITEMS = NOMBRES21;

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  Deliberately a CONSTANT rather than a count derived from the lesson: a
 *  derived figure compares the content to itself and passes on any rewording,
 *  and the density rule's "at least three sections" minimum would pass too.
 *  This is the check that notices when somebody paraphrases the line the whole
 *  lesson hangs on.
 *
 *  Thirteen: eleven section strings, the `reframe` field itself, and one
 *  narration segment. */
const REFRAME_APPEARANCES = 13;

/** How many corpus entries this batch is allowed to write. A lesson that starts
 *  authoring words instead of sequencing them is a lesson whose words are
 *  absent from every other surface, so growth here is a decision somebody has
 *  to make on purpose. */
const EXPECTED_NEW_ITEMS = 2;

/** a1.28's material, which this lesson may SHOW and may not TEACH.
 *
 *  `cent` standing alone is this lesson's ceiling and its canDo names it, so a
 *  bare `cent` is deliberately NOT matched. What is matched is cent used as a
 *  MULTIPLIER (deux cents, cent cinquante, trois cent trente) and the two units
 *  above it. Written to match whole words only, so "centimes" and "milliers"
 *  do not fire it and nobody deletes the check for crying wolf. */
const L4_MATERIAL =
  /\b(?:mille|millions?|milliards?)\b|\b(?:deux|trois|quatre|cinq|six|sept|huit|neuf|dix)[ -]cents?\b|\bcents?[ -](?:et[ -])?(?:une?|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|vingts?|trente|quarante|cinquante|soixante)\b/i;

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

/** Every (French spelling, inlined respelling) pair a section draws.
 *
 *  The density validator only checks objects carrying a literal `respell` key.
 *  A `cardDeck` card and a `vocabThemes` card put the respelling in `sub`, and
 *  a `tapTable` puts it in a cell, so 71 of the 182 respelled items in this
 *  theme could have been pasted in verbatim without anything firing. This
 *  walks the surfaces that actually carry one. */
function inlinedRespellings(lesson: Lesson): [string, string][] {
  const out: [string, string][] = [];
  const walk = (n: unknown) => {
    if (Array.isArray(n)) return n.forEach(walk);
    if (!n || typeof n !== 'object') return;
    const o = n as Record<string, unknown>;
    if (typeof o.fr === 'string' && typeof o.sub === 'string') out.push([o.fr, o.sub]);
    Object.values(o).forEach(walk);
  };
  walk(lesson.sections);
  for (const s of lesson.sections) {
    if (s.type !== 'tapTable') continue;
    const ix = s.cols.indexOf('Sounds like');
    if (ix < 0) continue;
    for (const r of s.rows) out.push([r.cells[0], r.cells[ix]]);
  }
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
      `this batch is authored to write ${EXPECTED_NEW_ITEMS} corpus entries and nombres21-corpus.ts now defines ` +
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
  const density = validateDensity(LESSON, new Set([...NOMBRES21_ITEM_IDS, ...newIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // The nasal convention, on the surfaces the density validator cannot see.
  // 71 of the 182 respelled items in this theme break it, 36 of them inside
  // this lesson's own range, so a respelling copied from the corpus is more
  // likely to be wrong than right.
  const badNasal = inlinedRespellings(LESSON).filter(([fr, re]) => hasPlainNasal(re) || hasPlainNasalFor(fr, re));
  if (badNasal.length) {
    die(
      `inlined respellings close a nasal vowel with a plain n or m:\n  ` +
      badNasal.map(([fr, re]) => `"${fr}" as "${re}"`).join('\n  ') +
      `\n  Use the superscript n. Referencing the corpus item by id instead is always safe.`
    );
  }

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

  // ── The L4 boundary, on production surfaces only ──────────────────────────
  //
  // Showing cent as a multiplier inside a reading passage or a listening line
  // is allowed: the corpus is full of them and banning them would force stilted
  // French. What is not allowed is asking the learner to PRODUCE one, which
  // belongs to a1.28.
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
  const overCeiling = produced.filter((s) => L4_MATERIAL.test(s));
  if (overCeiling.length) {
    die(
      `this lesson teaches material that belongs to a1.28:\n  ${overCeiling.join('\n  ')}\n` +
      `  Showing cent as a multiplier in a sentence is fine. Asking the learner to produce one is not.`
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
    const reused = NOMBRES21_ITEM_IDS.filter((id) => !newIds.includes(id));
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

    // The eighty headwords the canDo promises, checked against what the database
    // actually holds and against the number each id claims to be. A gap here is
    // a learner who reaches a hundred and was never taught eighty-four.
    const rangeGaps = NOMBRES21_RANGE_IDS.filter((id) => !byId.has(id) && !newIds.includes(id));
    if (rangeGaps.length) die(`the 21-to-100 set is incomplete in this database:\n  ${rangeGaps.join('\n  ')}`);

    // A mission is only as good as the drill tag behind it. An item without
    // `voiceflash` renders in the speak mission as a card the mic cannot score,
    // which reads as a broken mission rather than a missing tag.
    const noVoice = NOMBRES21_SPEAK_IDS.filter((id) => !(byId.get(id)?.drills ?? []).includes('voiceflash'));
    if (noVoice.length) die(`speak mission names items without the voiceflash drill:\n  ${noVoice.join('\n  ')}`);

    // No word or phrase item in this theme carries `dictation` — all 202 that do
    // are sentences — so a dictée built on bare number words would render
    // unscoreable. All four of these are sentences; two are authored here.
    const noDictation = NOMBRES21_DICTATION_IDS.filter(
      (id) => !newIds.includes(id) && !(byId.get(id)?.drills ?? []).includes('dictation')
    );
    if (noDictation.length) die(`dictation mission names items without the dictation drill:\n  ${noDictation.join('\n  ')}`);

    // A dictation sentence is written out by the learner, so it is a production
    // surface too. One containing "trois cent trente" would teach a1.28's
    // material by the back door.
    const dictatedOver = NOMBRES21_DICTATION_IDS
      .map((id) => byId.get(id) ?? NEW_ITEMS.find((n) => n.id === id))
      .filter((r): r is { id: string; fr: string; drills: string[] } => !!r && L4_MATERIAL.test(r.fr));
    if (dictatedOver.length) {
      die(`a dictation sentence asks the learner to write a1.28's material:\n  ${dictatedOver.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}`);
    }

    // Two entries teaching the same WORD inside one theme is the .057 incident:
    // the flashcard hub keys decks on `fr`, so a duplicate serves the same card
    // twice and takes two SRS ratings for one word. Sentences are exempt from
    // the hub, and both new entries are sentences, so this checks the whole
    // theme rather than only the non-sentence half.
    const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const clash = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items
        where theme = 'nombres' and status = 'published' and id <> all($1)`,
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

    // The Den advertises these before the learner opens anything, and the brief
    // says all three are correct as written. Authoring the lesson is not a
    // licence to rewrite the promise it was built against.
    if (unitBody.title !== 'Numbers 21 to 100') die(`unit title has changed to "${unitBody.title}" — the lesson was built against "Numbers 21 to 100"`);

    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    // The declared prerequisite. The brief said a1.02 still had lessonIds: [];
    // it does not, and this reports the state rather than assuming either way,
    // because the whole teaching design rests on 1 to 20 being reachable.
    const prereq = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'a1.02'`
    );
    const prereqLessons = prereq.rows[0]?.body?.lessonIds ?? [];

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
    console.log(`  reused items: ${reused.length}, all in theme nombres`);
    console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length}`);
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  quiz: ${qs.length} questions in ${rounds} rounds, all reachable`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  taught range: 21 to 100 (${NOMBRES21_RANGE_IDS.length} headwords); nothing of a1.28's on a production surface`);
    console.log(`  inlined respellings: ${inlinedRespellings(LESSON).length}, all to house nasal convention`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  narration: ${LESSON.narration?.stages.map((s) => s.stage).join(' → ')}`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  nasal ✓  house style ✓  one reachable quiz ✓  a1.28 boundary ✓`);
    console.log(`  prerequisite a1.02 lessonIds: ${JSON.stringify(prereqLessons)}${prereqLessons.length ? '' : '  ← EMPTY, this lesson assumes a lesson nobody can take'}`);
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
      `\n✓ nombres 21-100 batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published at v${LESSON.version}, unit ${UNIT_ID} linked.` +
      `\n` +
      `\n  Next, IN THIS ORDER:` +
      `\n    1. pnpm tsx scripts/merge-nombres-21-100-into-seed.ts` +
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
