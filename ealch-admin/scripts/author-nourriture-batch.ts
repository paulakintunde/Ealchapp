// a1.23 "La nourriture" -> POSTGRES.
//
//   pnpm content:nourriture --dry-run     validate everything, write nothing
//   pnpm content:nourriture               validate, then write in ONE transaction
//
// Writes, in this order and all or nothing:
//
//   3   authored items into fr.a1.cuisine (.272 pizza, .273 céréales, .274 biscuit)
//   37  respelling repairs (19 primary + 18 cross-theme twins)
//   1   lesson body, a1.23.l1, published
//   1   unit rebind, a1.23 themes nourriture -> cuisine + marche, lessonIds linked
//
// It does NOT touch seed.json. Order is Postgres first, seed second:
// `content:publish` regenerates the seed FROM the database, so publishing before
// the batch has run silently deletes the lesson. sons.07.l1 was lost that way
// and survived only because its source files were intact.
//
// ── What this script refuses to do ─────────────────────────────────────────
//
// Every repair carries the value it EXPECTS to find. If a stored respelling is
// no longer the broken one this lesson measured on 2026-08-07, the run dies and
// writes nothing, because two people disagreeing about a transcription is a
// decision rather than a merge.
//
// Nine of the thirty-seven repairs are INVISIBLE to hasPlainNasalFor (the nasal
// is word-internal), and four rows this lesson deliberately does NOT repair are
// FLAGGED by it and are correct. Both sets are asserted by name below, because
// a later author who trusts the shared checker alone will reintroduce the first
// and "fix" the second.

import './env';
import { describeTarget, isRemoteTarget } from './env';
import {
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { bareNoun, endingPopulation, measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AUTHORED_ITEMS, COUNTS, ELIDED, FOODS, HANDOVER_NEXT_FREE_ID, NASAL_FORMS, NOT_NASAL_FORMS,
  NOT_REPAIRED, OUTSIDE_THE_CUT, OWNED_ID_RANGE, PLURAL_ONLY, REPAIRS_INVISIBLE_TO_CHECKER,
  RESPELL_REPAIRS, SHELVES, THEME_DECISION, TWIN_REPAIRS, TWIN_REPAIRS_ON_BORROWED_ROWS,
  UNIT_THEMES, onShelf,
} from './data/nourriture-corpus.ts';
import { IMPORTED, REUSED } from './data/nourriture-imported.ts';
import {
  NOURRITURE_BORROWED_NOT_RELEASED, NOURRITURE_DICTATION_IDS, NOURRITURE_ITEM_IDS,
  NOURRITURE_LESSON, NOURRITURE_SPEAK_IDS, NOURRITURE_TRANCHES, REFRAME,
} from './data/nourriture-lesson.ts';
import { REFRAME_COUNT } from './data/nourriture-terms.ts';
import { ENDING_RULES, WORTHLESS_ENDINGS, MORE_ENDINGS } from './data/genre-endings.ts';

const NEW_ITEMS: Item[] = AUTHORED_ITEMS;
const LESSON: Lesson = NOURRITURE_LESSON;
const UNIT_ID = 'a1.23';

/* ── Everything this batch expects, as EXPLICIT constants ──────────────────
 *
 * Not derived from the content. A figure derived from the thing it checks
 * compares the content to itself and passes on any change. Invariant §5.      */
const EXPECTED_FOODS = 60;
const EXPECTED_AUTHORED = 3;
const EXPECTED_SERVED = 57;
const EXPECTED_PRIMARY_REPAIRS = 19;
const EXPECTED_TWIN_REPAIRS = 18;
const EXPECTED_NOT_REPAIRED = 8;
const EXPECTED_IMPORTED = 8;
const EXPECTED_REUSED = 19;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_SECTIONS = 29;
const EXPECTED_ACTS = 6;
const EXPECTED_ELIDED = 6;
const EXPECTED_SHELVES = 7;

const UNIT_TITLE = 'Food Vocabulary';
const UNIT_SUB = 'La nourriture';
const UNIT_CANDO = 'Can name everyday food and say what they like and eat';
const UNIT_THEMES_BEFORE = THEME_DECISION.was as readonly string[];
const UNIT_THEMES_AFTER = THEME_DECISION.now as readonly string[];

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

function ok(label: string, detail = '') {
  console.log(`  ✓ ${label}${detail ? `  ${detail}` : ''}`);
}

/** A pg enum[] comes back as the literal string `{flashcard,voiceflash}`. */
function drillsOf(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

/** Every string anywhere in a value, for the content sweeps. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

const ALL_REPAIRS = [...RESPELL_REPAIRS, ...TWIN_REPAIRS];

async function main() {
  console.log(`\na1.23 "La nourriture" -> ${describeTarget()}`);
  if (isRemoteTarget()) console.log('  TARGET IS REMOTE.');
  if (DRY_RUN) console.log('  (dry run, nothing will be written)');
  console.log('');

  /* ── 1. The counts this build was measured at ───────────────────────────── */
  console.log('counts, against explicit constants:');
  if (FOODS.length !== EXPECTED_FOODS) die(`${FOODS.length} foods, expected ${EXPECTED_FOODS}`);
  if (COUNTS.authored !== EXPECTED_AUTHORED) die(`${COUNTS.authored} authored, expected ${EXPECTED_AUTHORED}`);
  if (COUNTS.served !== EXPECTED_SERVED) die(`${COUNTS.served} served, expected ${EXPECTED_SERVED}`);
  if (RESPELL_REPAIRS.length !== EXPECTED_PRIMARY_REPAIRS) die(`${RESPELL_REPAIRS.length} primary repairs, expected ${EXPECTED_PRIMARY_REPAIRS}`);
  if (TWIN_REPAIRS.length !== EXPECTED_TWIN_REPAIRS) die(`${TWIN_REPAIRS.length} twin repairs, expected ${EXPECTED_TWIN_REPAIRS}`);
  if (NOT_REPAIRED.length !== EXPECTED_NOT_REPAIRED) die(`${NOT_REPAIRED.length} not-repaired rows, expected ${EXPECTED_NOT_REPAIRED}`);
  if (IMPORTED.length !== EXPECTED_IMPORTED) die(`${IMPORTED.length} imported, expected ${EXPECTED_IMPORTED}`);
  if (REUSED.length !== EXPECTED_REUSED) die(`${REUSED.length} reused, expected ${EXPECTED_REUSED}`);
  if (ELIDED.length !== EXPECTED_ELIDED) die(`${ELIDED.length} elided words, expected ${EXPECTED_ELIDED}`);
  if (SHELVES.length !== EXPECTED_SHELVES) die(`${SHELVES.length} shelves, expected ${EXPECTED_SHELVES}`);
  if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`AUTHORED_ITEMS has ${AUTHORED_ITEMS.length}, expected ${EXPECTED_AUTHORED}`);
  ok(`${EXPECTED_FOODS} foods = ${EXPECTED_SERVED} served + ${EXPECTED_AUTHORED} authored`);
  ok(`${ALL_REPAIRS.length} repairs`, `${EXPECTED_PRIMARY_REPAIRS} primary + ${EXPECTED_TWIN_REPAIRS} cross-theme twins`);
  ok(`${EXPECTED_NOT_REPAIRED} rows deliberately NOT repaired`);
  console.log(`    the shelves: ${SHELVES.map((s) => `${s}(${onShelf(s).length})`).join(' ')}`);

  /* ── 2. Schema ──────────────────────────────────────────────────────────── */
  console.log('\nschema:');
  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`authored items do not validate:\n${formatIssues(itemIssues)}`);
  ok(`${NEW_ITEMS.length} authored items validate`);

  const lessonIssues = validateLesson(LESSON);
  if (lessonIssues.length) die(`the lesson does not validate:\n${formatIssues(lessonIssues)}`);
  ok('the lesson validates');

  const density = validateDensity(LESSON);
  if (density.length) die(`density:\n${formatDensity(density)}`);
  ok('the density validator is clean');

  /* ── 3. The lesson's shape, against explicit constants ──────────────────── */
  console.log('\nshape:');
  if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
  if ((LESSON.acts?.length ?? 0) !== EXPECTED_ACTS) die(`${LESSON.acts?.length} acts, expected ${EXPECTED_ACTS}`);
  if ((LESSON.errorTriggers?.length ?? 0) !== EXPECTED_TRIGGERS) die(`${LESSON.errorTriggers?.length} triggers, expected ${EXPECTED_TRIGGERS}`);
  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (!quiz || quiz.type !== 'quiz') die('no quiz section');
  if ((quiz.rounds?.length ?? 0) !== EXPECTED_ROUNDS) die(`${quiz.rounds?.length} rounds, expected ${EXPECTED_ROUNDS}`);
  // ONE quiz section: lessonPager.logic.ts appends exactly one via find().
  const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
  if (quizCount !== 1) die(`${quizCount} quiz sections; the pager renders only the first`);
  ok(`${EXPECTED_SECTIONS} sections, ${EXPECTED_ACTS} acts, ${EXPECTED_ROUNDS} rounds, ${EXPECTED_TRIGGERS} triggers`);

  const reframeCount = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (reframeCount !== REFRAME_COUNT) die(`the reframe appears ${reframeCount}x, the constant says ${REFRAME_COUNT}`);
  if (reframeCount < 3) die(`the reframe appears ${reframeCount}x, the density validator wants 3+`);
  ok(`the reframe appears ${reframeCount}x`, `"${REFRAME}"`);

  /* ── 4. Quiz rules ──────────────────────────────────────────────────────── */
  console.log('\nquiz:');
  const qs = quizQuestions(quiz);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq > qs.length / 2) die(`mcq is ${mcq}/${qs.length}, over the half ceiling`);
  for (const q of qs) {
    if (!q.why) die(`a quiz question has no why: "${q.q.slice(0, 60)}"`);
    if (!q.ref) die(`a quiz question has no ref: "${q.q.slice(0, 60)}"`);
    if (!LESSON.sections.some((s) => (s as { id?: string }).id === q.ref)) die(`quiz ref "${q.ref}" names no section`);
  }
  ok(`${qs.length} questions, every one with a why and a ref`, `mcq ${mcq}/${qs.length}`);

  // Every free-text question must accept the answer it displays, through the
  // REAL matchesAccept rather than a copy of it.
  for (const q of qs) {
    if (!q.accept || !q.answer) continue;
    if (!matchesAccept(q.answer, q.accept)) die(`"${q.q.slice(0, 50)}" displays "${q.answer}" and does not accept it`);
  }
  ok('every free-text question accepts the answer it displays');

  // Correct answers must not cluster: the density validator fails any slot over
  // 40% of the closed questions. Computed here too, so the batch reports the
  // spread rather than only passing silently.
  const slots = new Map<number, number>();
  let closed = 0;
  for (const q of qs) {
    if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
    closed++;
    slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  }
  const spread = [...slots.entries()].sort((a, b) => a[0] - b[0])
    .map(([k, v]) => `${k}:${((v / closed) * 100).toFixed(0)}%`).join(' ');
  for (const [k, v] of slots) {
    if ((v / closed) * 100 > 40) die(`${((v / closed) * 100).toFixed(0)}% of correct answers sit in slot ${k} (limit 40)`);
  }
  ok(`${closed} closed questions, correct answers spread`, spread);

  // drillForRound fires the drill of the FIRST resolving target only. A drill
  // named in second place is dead content. a1.05 shipped two.
  const fired = new Map<string, string>();
  for (const r of quiz.rounds ?? []) {
    const first = (r.targets ?? [])
      .map((t) => (LESSON.errorTriggers ?? []).find((e) => e.id === t))
      .find((e) => e?.drill);
    if (!first?.drill) die(`round ${r.id} fires no drill`);
    if (fired.has(first.drill)) die(`drill ${first.drill} is fired by ${fired.get(first.drill)} and ${r.id}`);
    fired.set(first.drill, r.id);
  }
  const teaching = (LESSON.drills ?? []).map((d) => d.id).filter((d) => !d.startsWith('retest-'));
  for (const d of teaching) if (!fired.has(d)) die(`drill ${d} is fired by no round, so it is dead content`);
  ok(`${fired.size} teaching drills, each the first resolving target of exactly one round`);

  /* ── 5. Respelling: the two blind spots, both asserted by name ──────────── */
  console.log('\nrespellings:');
  for (const fr of NASAL_FORMS) {
    const f = FOODS.find((x) => x.fr === fr);
    if (!f) die(`NASAL_FORMS names "${fr}", which is not one of the sixty`);
    if (!f.respell.includes('ⁿ')) die(`"${fr}" carries a genuine nasal and its respelling has no superscript: ${f.respell}`);
  }
  ok(`${NASAL_FORMS.length} nasal words close with the superscript`, 'asserted BY NAME, because 9 are invisible to the shared checker');

  for (const fr of NOT_NASAL_FORMS) {
    const f = FOODS.find((x) => x.fr === fr);
    if (!f) die(`NOT_NASAL_FORMS names "${fr}", which is not one of the sixty`);
    if (f.respell.includes('ⁿ')) die(`"${fr}" has NO nasal vowel and its respelling carries a superscript: ${f.respell}`);
  }
  ok(`${NOT_NASAL_FORMS.length} words correctly carry NO superscript`, NOT_NASAL_FORMS.join(', '));

  // The shared checker still flags `la crème`, and it is WRONG about it.
  // Asserted so that a later improvement to hasPlainNasalFor is noticed here
  // rather than silently changing what this lesson believes.
  const stillFlagged = FOODS.filter((f) => hasPlainNasalFor(f.bare, f.respell)).map((f) => f.fr);
  const expectedFlagged = ['la crème'];
  if (stillFlagged.join() !== expectedFlagged.join()) {
    die(
      `the shared checker flags ${JSON.stringify(stillFlagged)} and this build expects exactly `
      + `${JSON.stringify(expectedFlagged)}. If hasPlainNasalFor has been improved, update NOT_NASAL_FORMS and this line.`,
    );
  }
  ok('the ONE remaining false positive is la crème, as documented', '/kʁɛm/ has a real m');

  if (REPAIRS_INVISIBLE_TO_CHECKER.length !== 9) die(`${REPAIRS_INVISIBLE_TO_CHECKER.length} repairs invisible to the checker, expected 9`);
  ok('9 of the 19 primary repairs are invisible to hasPlainNasalFor', REPAIRS_INVISIBLE_TO_CHECKER.slice(0, 4).join(', ') + ', ...');

  /* ── 6. a1.03's ending population, through the REAL functions ───────────── */
  console.log('\na1.03 ending population:');
  const joins = AUTHORED_ITEMS.filter((i) => endingPopulation([i as never]).length === 1);
  const printed = [...ENDING_RULES, ...WORTHLESS_ENDINGS, ...MORE_ENDINGS].map((e) => e.ending);
  for (const it of joins) {
    const bare = bareNoun(it.fr);
    for (let k = 1; k <= bare.length; k++) {
      const ending = bare.slice(bare.length - k);
      if (!printed.includes(ending)) continue;
      die(
        `authoring "${it.fr}" lands on -${ending}, which a1.03 PRINTS. `
        + `Re-measure genre-endings.ts and re-render a1.03, or withdraw the row.`,
      );
    }
  }
  ok(`${joins.length} of ${AUTHORED_ITEMS.length} authored rows join the population`, `none lands on any of a1.03's ${printed.length} printed endings`);

  /* ── 7. Drill capability, checked against POSTGRES not the seed ─────────── */
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    console.log('\nagainst the database:');

    const authoredIds = new Set(AUTHORED_ITEMS.map((i) => i.id));
    const servedIds = NOURRITURE_ITEM_IDS.filter((i) => !authoredIds.has(i));
    const { rows: served } = await client.query(
      `select id, fr, respell, theme, drills, kind from content_items where id = any($1::text[]) and status = 'published'`,
      [servedIds],
    );
    const byId = new Map<string, (typeof served)[number]>(served.map((r) => [r.id, r]));
    const missing = servedIds.filter((i) => !byId.has(i));
    if (missing.length) die(`the lesson names ${missing.length} row(s) that are not published: ${missing.join(' ')}`);
    ok(`all ${servedIds.length} served ids are published`);

    for (const id of NOURRITURE_SPEAK_IDS) {
      if (authoredIds.has(id)) continue;
      if (!drillsOf(byId.get(id)?.drills).includes('voiceflash')) {
        die(`speak target ${id} has no voiceflash drill, so PracticeVFView renders nothing for it`);
      }
    }
    ok(`${NOURRITURE_SPEAK_IDS.length} speak targets all carry voiceflash`);

    for (const id of NOURRITURE_DICTATION_IDS) {
      if (!drillsOf(byId.get(id)?.drills).includes('dictation')) {
        die(`dictation target ${id} has no dictation drill, so the dictée renders nothing for it`);
      }
    }
    const modes = NOURRITURE_DICTATION_IDS.map((id) => `${dicteeMode(byId.get(id)!.fr)}`);
    ok(`${NOURRITURE_DICTATION_IDS.length} dictation targets all carry dictation`, `modes: ${modes.join(', ')}`);

    /* ── 8. The authored ids must not collide ─────────────────────────────── */
    // flashhub-coverage.test.ts treats two rows sharing an `fr` in one theme as
    // one card served twice, comparing with the article stripped.
    const { rows: cuisine } = await client.query(
      `select id, fr from content_items where theme = 'cuisine' and level = 'a1' and kind <> 'sentence' and status = 'published'`,
    );
    for (const it of AUTHORED_ITEMS) {
      const mine = bareNoun(it.fr).toLowerCase();
      const clash = cuisine.find((r) => r.id !== it.id && bareNoun(r.fr).toLowerCase() === mine);
      if (clash) die(`authoring ${it.id} "${it.fr}" collides with ${clash.id} "${clash.fr}" in cuisine`);
      if (byId.has(it.id) || cuisine.some((r) => r.id === it.id)) {
        console.log(`    note: ${it.id} already exists and will be UPDATED rather than inserted`);
      }
    }
    ok(`${AUTHORED_ITEMS.length} authored ids collide with nothing in cuisine`);

    const nums = cuisine.map((r) => Number(r.id.split('.').pop())).filter((n) => Number.isFinite(n));
    const maxId = Math.max(...nums);
    const mineMax = Math.max(...AUTHORED_ITEMS.map((i) => Number(i.id.split('.').pop())));
    console.log(`    fr.a1.cuisine holds ${cuisine.length} non-sentence rows, highest .${String(maxId).padStart(3, '0')}`);
    if (maxId > mineMax) {
      die(
        `fr.a1.cuisine now runs to .${maxId} and this build owns ${OWNED_ID_RANGE.from} to ${OWNED_ID_RANGE.to}. `
        + `Another author has landed above you. Re-run scripts/_nourriture_manifest.ts and move your ids.`,
      );
    }

    /* ── 9. Every repair's `from` must still be what we measured ──────────── */
    console.log('\nrepairs, each checked against what is stored today:');
    const repairIds = ALL_REPAIRS.map((r) => r.id);
    const { rows: repairRows } = await client.query(
      `select id, fr, respell from content_items where id = any($1::text[]) and status = 'published'`,
      [repairIds],
    );
    const repairById = new Map(repairRows.map((r) => [r.id, r]));
    for (const r of ALL_REPAIRS) {
      const row = repairById.get(r.id);
      if (!row) die(`repair target ${r.id} "${r.fr}" is not published`);
      if (row.fr !== r.fr) die(`repair target ${r.id} now reads "${row.fr}", this build measured "${r.fr}"`);
      const stored = row.respell ?? '';
      if (stored === r.to) { console.log(`    already repaired, will be a no-op: ${r.id} ${r.fr}`); continue; }
      if (stored !== r.from) {
        die(
          `${r.id} "${r.fr}" carries "${stored}" and this build measured "${r.from}". `
          + `Somebody else has changed it. Nothing written; decide what the value should be.`,
        );
      }
    }
    ok(`all ${ALL_REPAIRS.length} repairs still match the values measured on 2026-08-07`);

    // A row cannot be BOTH repaired and documented as already correct. The
    // first draft of this build listed fr.a1.cuisine.123 « le bœuf » in both:
    // as a shouted-article repair, and in NOT_REPAIRED for its one-syllable
    // noun. The full-string comparison below then read the pending repair as
    // somebody else's edit and refused to run. The note about the syllable
    // count now lives on the repair itself, and this guard stops the pair being
    // reintroduced.
    const inBoth = NOT_REPAIRED.filter((n) => ALL_REPAIRS.some((r) => r.id === n.id)).map((n) => n.id);
    if (inBoth.length) {
      die(
        `${inBoth.join(', ')} appears in BOTH a repair list and NOT_REPAIRED. A row is one or the other. `
        + `If only part of the string is being repaired, say so on the repair and drop the NOT_REPAIRED entry.`,
      );
    }

    // And the rows we deliberately leave alone must still be correct.
    const notRepairedIds = NOT_REPAIRED.map((n) => n.id);
    const { rows: leftAlone } = await client.query(
      `select id, fr, respell from content_items where id = any($1::text[]) and status = 'published'`,
      [notRepairedIds],
    );
    for (const n of NOT_REPAIRED) {
      const row = leftAlone.find((r) => r.id === n.id);
      if (!row) die(`NOT_REPAIRED names ${n.id}, which is not published`);
      if ((row.respell ?? '') !== n.respell) {
        die(
          `${n.id} "${n.fr}" was correct at "${n.respell}" and now reads "${row.respell}". `
          + `Somebody has "fixed" a row this lesson documents as already right. Read NOT_REPAIRED before proceeding.`,
        );
      }
    }
    ok(`${NOT_REPAIRED.length} correctly-authored rows are untouched and still correct`);

    if (TWIN_REPAIRS_ON_BORROWED_ROWS.length) {
      console.log(`    ${TWIN_REPAIRS_ON_BORROWED_ROWS.length} twin repairs touch rows this lesson does NOT display:`);
      for (const id of TWIN_REPAIRS_ON_BORROWED_ROWS) {
        const r = TWIN_REPAIRS.find((t) => t.id === id)!;
        console.log(`      ${id} "${r.fr}"  ${r.from} -> ${r.to}   (a1.11's article preserved)`);
      }
    }

    /* ── 10. Tranches ─────────────────────────────────────────────────────── */
    console.log('\ntranches:');
    const releasedAll = NOURRITURE_TRANCHES.flat();
    const dupes = releasedAll.filter((id, i) => releasedAll.indexOf(id) !== i);
    if (dupes.length) die(`released more than once: ${[...new Set(dupes)].join(' ')}`);
    for (const id of NOURRITURE_BORROWED_NOT_RELEASED) {
      if (releasedAll.includes(id)) die(`${id} belongs to a1.29 and must be shown but not released`);
    }
    ok(`${releasedAll.length} items released exactly once`, `${NOURRITURE_BORROWED_NOT_RELEASED.length} shown-not-released (a1.29's)`);

    /* ── 11. The unit ─────────────────────────────────────────────────────── */
    console.log('\nthe unit:');
    const { rows: unitRows, rowCount } = await client.query(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID],
    );
    if (rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lesson`);
    const unitBody = unitRows[0].body as Unit & { themes?: string[]; lessonIds?: string[] };

    if (unitBody.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if ((unitBody as { sub?: string }).sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${(unitBody as { sub?: string }).sub}"`);
    if ((unitBody as { canDo?: string }).canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed`);

    const expectedTag = `A1 · LEÇON ${String((unitBody as { seq?: number }).seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${(unitBody as { seq?: number }).seq}, so the header draws "${expectedTag}"`);
    }
    ok(`title, sub and canDo unchanged; tag agrees with seq`, expectedTag);

    const themesNow = unitBody.themes ?? [];
    if (themesNow.join() !== UNIT_THEMES_BEFORE.join() && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
      die(
        `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected `
        + `${JSON.stringify(UNIT_THEMES_BEFORE)} (before) or ${JSON.stringify(UNIT_THEMES_AFTER)} (after)`,
      );
    }
    console.log(`    themes ${JSON.stringify(themesNow)} -> ${JSON.stringify(UNIT_THEMES_AFTER)}`);
    console.log(`      "${THEME_DECISION.why}"`);
    console.log(`      leaves ${THEME_DECISION.leavesDeadFor} declaring a dead theme; NOT this lesson's to fix, reported not repaired.`);

    const nextUnit = {
      ...unitBody,
      themes: [...UNIT_THEMES_AFTER],
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    ok(`lessonIds ${JSON.stringify(unitBody.lessonIds ?? [])} -> ${JSON.stringify(nextUnit.lessonIds)}`);

    /* ── 12. The seed cut ─────────────────────────────────────────────────── */
    console.log('\nthe seed cut:');
    console.log(`    cuisine and marche are INSIDE SEED_CUT.themes, so 52 of the 60 cards already ship in the binary.`);
    console.log(`    ${OUTSIDE_THE_CUT.length} rows are outside and MUST be carried by the merge:`);
    for (const id of OUTSIDE_THE_CUT) console.log(`      ${id}`);

    /* ── 13. Write ────────────────────────────────────────────────────────── */
    console.log(`\nplural-only: ${PLURAL_ONLY.map((f) => f.fr).join(', ')}`);
    console.log(`elided:      ${ELIDED.map((f) => f.fr).join(', ')}`);
    console.log(`\nHANDOVER: next free id in fr.a1.cuisine is ${HANDOVER_NEXT_FREE_ID}.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      return;
    }

    await client.query('begin');

    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by, card_type, prompt)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human',$15,$16)
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           card_type=excluded.card_type, prompt=excluded.prompt`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version, it.cardType ?? null, (it as { prompt?: string }).prompt ?? null,
        ],
      );
    }

    // Each repair is matched on id AND fr, so a row that has been renamed under
    // us cannot be silently overwritten. A no-op repair (already at `to`)
    // touches one row and is fine; anything else rolls the whole run back.
    for (const r of ALL_REPAIRS) {
      const res = await client.query(
        `update content_items set respell = $1 where id = $2 and fr = $3`,
        [r.to, r.id, r.fr],
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`repair for ${r.id} touched ${res.rowCount} rows, rolled back, nothing changed`);
      }
    }

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
    }

    await client.query('commit');

    console.log(
      `\n✓ nourriture batch applied: ${NEW_ITEMS.length} authored items`
      + ` + ${ALL_REPAIRS.length} respelling repairs (${RESPELL_REPAIRS.length} primary, ${TWIN_REPAIRS.length} twins)`
      + ` + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} REBOUND from ${JSON.stringify(UNIT_THEMES_BEFORE)} to ${JSON.stringify(UNIT_THEMES_AFTER)} and linked.`
      + `\n  Next: pnpm tsx scripts/merge-nourriture-into-seed.ts --dry-run`
      + `\n  Do NOT run pnpm content:publish until the seed and the database agree.\n`,
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
