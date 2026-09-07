/* Merges a2.12.l1 "Irréguliers 2 : faire, dire, lire" into
 * ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-faire-dire-lire-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-faire-dire-lire-into-seed.ts
 *
 * RUN THE BATCH FIRST. Order has cost real work twice: apply to Postgres, merge
 * into the seed, publish only when both agree. content:publish regenerates the
 * seed FROM the database, so a merge that runs before its batch is a lesson
 * waiting to be deleted by the next publish. Publishing is not part of a lesson
 * build.
 *
 * ── WHY THIS MERGE CARRIES TWENTY-SIX ROWS ────────────────────────────────
 *
 * This lesson imports out of FIFTEEN themes, and eleven of them are outside
 * SEED_CUT.themes entirely. Measured 2026-08-12: `meteo` holds 336 published
 * rows in Postgres against 26 in the seed, `verbes-essentiels` 535 against 48.
 * a2.11 found that NEITHER of the two rows its lesson leaned on hardest was in
 * the seed, and a lesson whose itemIds resolve to nothing renders empty cards on
 * a device. Without the carry, most of the thirty expression cards would draw
 * blank.
 *
 * ── THE CARRIED ROWS ARE THE POST-BATCH VERSIONS, NOT THE MANIFEST ────────
 *
 * The manifest is a recorded read taken BEFORE the batch ran, and the batch
 * changes five of the rows it records: two respellings are repaired and three
 * gain a `flashcard` drill. Carrying the manifest verbatim would write the
 * PRE-repair value into the seed and leave Postgres and seed.json disagreeing
 * about five rows on the day they were both written. So the carry applies the
 * same two transforms the batch applied, and then verifies the result against
 * the values the batch wrote.
 *
 * ── NEVER `git checkout seed.json` ────────────────────────────────────────
 *
 * Reverting it discards other authors' uncommitted lessons. If this merge writes
 * something wrong, fix the source and run it again.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  DRILL_KINDS, formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  ALLER_UNIT, AUTHORED_EXPRESSION_IDS, AUTHORED_IDS as CORPUS_AUTHORED_IDS,
  AVOIR_UNIT, BLIND_NASALS, BREAKS, CONTROL_BREAKS, DICTATION_IDS,
  DICTEE_NEAR_MISS, DRILL_ADDITIONS, ETRE_UNIT, EXPRESSION_TARGET,
  FAIRE_DIRE_LIRE, FUTUR_PROCHE_SHAPE, HOMOPHONE_FORMS, MODAL_SHAPE, MODAL_UNIT,
  NO_RESPELL_IDS,
  NUMBER_PAIRS, ONT_CLUB, PARADIGM, PARADIGM_IDS, PASSE_COMPOSE_PHRASES,
  PASSE_COMPOSE_SHAPE, REACH_ORDER, REPORTED_SPEECH_SHAPE, RESPELL_REPAIRS,
  SHOPPING_UNIT, SHOPPING_VOCAB, SINGULAR_TRIPLES, TES_CLUB, THEME, THE_CONTROL,
  THE_THREE, THE_VERB, VISIBLE_NASALS, WEATHER_UNIT, WEATHER_VOCAB,
  afterPronoun, toItem,
} from './data/faire-dire-lire-corpus.ts';
import {
  IMPORTED_EXPRESSION_IDS, IMPORTED_ROWS, IMPORTED_VERBS, READ_ONLY_VERBS,
  SOURCE_THEMES,
} from './data/faire-dire-lire-imported.ts';
import {
  BOUNDARY_SECTION_ID, CONTROL_CLAIM, EXPRESSION_SECTION_IDS,
  FAIRE_DIRE_LIRE_EXPRESSION_IDS, FAIRE_DIRE_LIRE_GROUPED,
  FAIRE_DIRE_LIRE_LESSON, NOT_THE_NOUNS, NOUS_ON, NOUS_ON_SECTION_ID, ONT_CLAIM,
  REACH_CLAIM, REACH_SECTION_ID, REFRAME, SHEET_ID, TES_CLAIM, VOUS_ROW_IDS,
  VOUS_ROW_SECTION_ID, WEATHER_SECTION_ID, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
} from './data/faire-dire-lire-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = FAIRE_DIRE_LIRE_LESSON;
const UNIT_ID = 'a2.12';
const UNIT_TITLE = 'Irregular Verbs 2: Faire, Dire, Lire';
const UNIT_SUB = 'Irréguliers 2 : faire, dire, lire';
const UNIT_CANDO = 'Can use faire, dire and lire and the common expressions built on faire';
const REFRAME_APPEARANCES = 15;
const EXPECTED_TAPTABLE_ROWS = 6;
const AUTHORED_ITEMS: Item[] = FAIRE_DIRE_LIRE.map(toItem);
const AUTHORED_IDS = new Set(AUTHORED_ITEMS.map((i) => i.id));

function die(msg: string): never {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}

/* ─── THE CARRIED ROWS, WITH THE BATCH'S OWN TRANSFORMS APPLIED ────────────
 *
 * The manifest was recorded BEFORE the batch ran. The batch repairs two
 * respellings and adds a `flashcard` drill to three rows, so carrying the
 * manifest verbatim would put the pre-repair value in the seed while Postgres
 * held the repaired one. Both transforms are applied here, in the same order and
 * from the same constants, and the result is checked field by field below.     */
const REPAIR_BY_ID = new Map(RESPELL_REPAIRS.map((r) => [r.id, r] as const));
const ADD_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** ORDER A DRILL ARRAY THE WAY POSTGRES DOES, which is `DRILL_KINDS` order and
 *  NOT alphabetical order.
 *
 *  FOUND BY `content:publish` AFTER v29, which regenerates the seed from the
 *  database and reported three of this build's rows as CHANGED. The batch adds a
 *  drill with `array_agg(distinct e order by e)`, and ordering a Postgres ENUM
 *  orders by its DECLARATION order — so the database holds
 *  `flashcard, voiceflash, review`. This merge was sorting the same three as
 *  STRINGS and writing `flashcard, review, voiceflash`.
 *
 *  Same set, same meaning, and still a divergence between the seed and the
 *  database on rows this build owns, which is the exact class of thing the a2.09
 *  incident was made of. `DRILL_KINDS` is the canonical order and
 *  `enum-parity.test.ts` already asserts it equals the `drill_kind` enum, so
 *  sorting by its index is pinned rather than guessed. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((x, y) => DRILL_KINDS.indexOf(x) - DRILL_KINDS.indexOf(y)) as Item['drills'];

const CARRIED: Item[] = IMPORTED_ROWS.map((row) => {
  const fix = REPAIR_BY_ID.get(row.id);
  const add = ADD_BY_ID.get(row.id);
  if (!fix && !add) return row;
  if (fix && row.respell !== fix.from) {
    die(`${row.id} is recorded as ${JSON.stringify(row.respell)} and the repair expects ${JSON.stringify(fix.from)}. Regenerate the manifest.`);
  }
  const drills = add && !(row.drills ?? []).includes(add.add)
    ? drillOrder([...(row.drills ?? []), add.add])
    : row.drills;
  return { ...row, ...(fix ? { respell: fix.to } : {}), drills };
});

/** Every transform really landed on the row it names, and on no other. */
{
  const byId = new Map(CARRIED.map((r) => [r.id, r] as const));
  for (const r of RESPELL_REPAIRS) {
    if (byId.get(r.id)?.respell !== r.to) die(`the carry did not apply the repair to ${r.id}`);
  }
  for (const d of DRILL_ADDITIONS) {
    if (!(byId.get(d.id)?.drills ?? []).includes(d.add)) die(`the carry did not add the ${d.add} drill to ${d.id}`);
  }
  const untouched = CARRIED.filter((r) => !REPAIR_BY_ID.has(r.id) && !ADD_BY_ID.has(r.id));
  const changed = untouched.filter((r) => JSON.stringify(r) !== JSON.stringify(IMPORTED_ROWS.find((x) => x.id === r.id)));
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not own: ${changed.map((r) => r.id).join(', ')}`);
  console.log(`\n  carry: ${CARRIED.length} rows, ${RESPELL_REPAIRS.length} repaired and ${DRILL_ADDITIONS.length} given a flashcard drill, ${untouched.length} byte-identical to the manifest`);
}

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`  merging a2.12.l1 into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/* ── The lessons this merge MUST NOT DISTURB, BY NAME ─────────────────────
 *
 * Named rather than counted. A count alone lets a one-for-one swap through, and
 * that is exactly the shape of the accident this project has already had: the
 * seed and Postgres drift, somebody's uncommitted lesson is replaced by another,
 * and the total never moves.                                                  */
const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const UNITS_BEFORE = seed.units.length;
/** Every item id this merge is allowed to touch. Anything else must come out the
 *  far side byte-identical, and that is checked rather than assumed. */
const MINE = new Set<string>([...AUTHORED_IDS, ...CARRIED.map((r) => r.id)]);
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/** AND THE READ-ONLY ROWS ARE NOT IN `MINE`. If one ever drifts into the carry
 *  this fails, because a row named on no screen and released to the hub is a
 *  card for something the learner has never met. */
{
  const carried = READ_ONLY_VERBS.filter((b) => MINE.has(b.id)).map((b) => `${b.label} (${b.id})`);
  if (carried.length) die(`read-only row(s) in the carry set: ${carried.join(', ')}. They are read, never written.`);
}

/* ── Everything the batch checked, checked again against the POST-MERGE seed ─ */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));
const carriedIssues = CARRIED.flatMap((it) => validateItem(it, it.id));
if (carriedIssues.length) die(`the rows carried through the cut do not validate:\n${formatIssues(carriedIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));

const POST_MERGE_IDS = new Set([
  ...seed.items.map((i) => i.id),
  ...AUTHORED_ITEMS.map((i) => i.id),
  ...CARRIED.map((i) => i.id),
]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(formatDensity(density));

const missing = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (missing.length) {
  die(
    `${missing.length} itemId(s) will NOT be in the seed after this merge: ${missing.slice(0, 6).join(', ')}\n`
    + `  A lesson whose itemIds resolve to nothing renders empty cards on a device. This lesson imports out of\n`
    + `  ${SOURCE_THEMES.length} themes and eleven of them are outside SEED_CUT.themes, so the carry is not optional.`,
  );
}

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

/* ── The claims that ARE the lesson ──────────────────────────────────────── */
{
  /** THE THIRTY, AND THE COUNT IS THE CLAIM. */
  if (FAIRE_DIRE_LIRE_EXPRESSION_IDS.length !== EXPRESSION_TARGET) die(`${FAIRE_DIRE_LIRE_EXPRESSION_IDS.length} expressions, and every card says ${EXPRESSION_TARGET}`);
  const sizes = REACH_ORDER.map((k) => FAIRE_DIRE_LIRE_GROUPED[k].length);
  if (sizes.reduce((a, b) => a + b, 0) !== EXPRESSION_TARGET) die('the six groups do not add up to the thirty');
  if (sizes.some((n) => n === 0)) die('an expression group is empty, so a tapTable row plays nothing');

  /** THE TRAP, AND THE CONTROL. */
  if (BREAKS.length !== 3) die(`${BREAKS.length} breaking cells, expected 3: ${BREAKS.map((b) => b.form).join(', ')}`);
  if (CONTROL_BREAKS.length !== 0) die(`${THE_CONTROL} now breaks an ending, so it has stopped being the control case and the third verb has no argument for it`);
  if (TES_CLUB.length !== 3 || ONT_CLUB.length !== 4) die(`the closed clubs have changed size: -tes ${TES_CLUB.length}, -ont ${ONT_CLUB.length}`);

  /** THE LAYOUT CLAIM: THREE vous CELLS, ONE GROUP, IN ORDER. */
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === VOUS_ROW_SECTION_ID);
  if (!sec || sec.type !== 'groupDrill') die(`${VOUS_ROW_SECTION_ID} is gone or is no longer a groupDrill`);
  if (sec.groups.length !== 1) die(`${VOUS_ROW_SECTION_ID} has ${sec.groups.length} groups, expected exactly 1. The three cells belong on one screen, adjacent.`);
  const items = (sec.groups[0].items ?? []).map((it) => it.itemId);
  if (items.join() !== VOUS_ROW_IDS.join()) die(`${VOUS_ROW_SECTION_ID} holds ${JSON.stringify(items)}, expected ${JSON.stringify(VOUS_ROW_IDS)}`);

  /** THE tapTable IS SIX ROWS, which is corrections §8's Pixel 6 ceiling. */
  const taps = LESSON.sections.filter((s) => s.type === 'tapTable');
  if (taps.length !== 1) die(`${taps.length} tapTables, expected 1`);
  const tap = taps[0];
  if (tap.type !== 'tapTable') die('unreachable');
  if ((tap as { id?: string }).id !== REACH_SECTION_ID) die(`the tapTable is not ${REACH_SECTION_ID}`);
  if (tap.rows.length !== EXPECTED_TAPTABLE_ROWS) die(`${REACH_SECTION_ID} has ${tap.rows.length} rows and the measured ceiling on a Pixel 6 is ${EXPECTED_TAPTABLE_ROWS}`);
  if (LESSON.sections.filter((s) => s.type === 'table').length) die('a table at layer core is a table-in-core density failure');
}
for (const triple of SINGULAR_TRIPLES) {
  const tails = triple.map((id) => afterPronoun(FAIRE_DIRE_LIRE.find((w) => w.id === id)?.respell ?? ''));
  if (new Set(tails).size !== 1) die(`the singular triple ${triple.join(' / ')} no longer sounds the same: ${tails.join(' | ')}`);
}
for (const [sing, plur] of NUMBER_PAIRS) {
  const a = FAIRE_DIRE_LIRE.find((w) => w.id === sing);
  const b = FAIRE_DIRE_LIRE.find((w) => w.id === plur);
  if (!a || !b) die(`number pair ${sing} / ${plur} does not resolve`);
  const pa = (a.respell ?? '').split(' ');
  const pb = (b.respell ?? '').split(' ');
  if (pa[0] !== pb[0]) die(`${sing} and ${plur} respell their pronoun differently, so the learner can answer from the pronoun`);
  if (pa[1] === pb[1]) die(`${sing} and ${plur} respell the verb identically, so there is nothing for the ear to catch`);
  if (pa.slice(2).join(' ') !== pb.slice(2).join(' ')) die(`${sing} and ${plur} differ after the verb; only the verb may move`);
}

{
  // `intro` and `overview` are learner surfaces too: the overview card and the
  // lesson cover both draw the intro. a2.11 shipped "third person" there because
  // this walk was sections+sheets+terms. Widened 2026-08-12 after a device pass.
  const learner = [
    ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
    LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ].join('\n');
  const learnerProse = [
    ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
    LESSON.intro ?? '', ...prose(LESSON.overview ?? {}),
  ];
  const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'second person', 'third person'];
  const jargon = JARGON.filter((j) => hasPhrase(learner, j));
  if (jargon.length) die(`grammar vocabulary reached a learner surface: ${jargon.join(', ')}`);
  if (!LESSON.intro) die('the lesson has no intro. It is drawn on the overview card and on the lesson cover.');
  const inIntro = JARGON.filter((j) => hasPhrase(LESSON.intro ?? '', j));
  if (inIntro.length) die(`grammar vocabulary in Lesson.intro, drawn on TWO learner surfaces: ${inIntro.join(', ')}`);
  if (!LESSON.intro.includes(String(EXPRESSION_TARGET))) die('Lesson.intro no longer says how many expressions there are, and the reach is the reason to start the lesson');

  for (const [name, claim] of [['REACH_CLAIM', REACH_CLAIM], ['TES_CLAIM', TES_CLAIM], ['ONT_CLAIM', ONT_CLAIM], ['CONTROL_CLAIM', CONTROL_CLAIM], ['NOT_THE_NOUNS', NOT_THE_NOUNS]] as const) {
    if (!learner.includes(claim)) die(`${name} appears on no screen: "${claim}"`);
  }
  if (!hasPhrase(learner, WHAT_FOLLOWS)) die(`"${WHAT_FOLLOWS}" appears on no screen. It is a2.02's name for this shape.`);
  if (!namesUnitLabel(learner, WHAT_FOLLOWS_UNIT)) die(`${WHAT_FOLLOWS_UNIT} is cited nowhere, so the name is quoted without saying where it came from`);
  if (!learner.includes(NOUS_ON)) die("the nous/on statement no longer appears verbatim. It is a2.01's constant and it is imported, not reworded.");
  const holders = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  if (holders.length !== 1 || holders[0] !== NOUS_ON_SECTION_ID) die(`the nous/on statement is in ${JSON.stringify(holders)}, expected exactly [${JSON.stringify(NOUS_ON_SECTION_ID)}]`);

  const gone = THE_THREE.filter((v) => !hasPhrase(learner, v));
  if (gone.length) die(`verb(s) named by no screen: ${gone.join(', ')}`);
  for (const u of [ETRE_UNIT, AVOIR_UNIT, ALLER_UNIT, WEATHER_UNIT, SHOPPING_UNIT, MODAL_UNIT]) {
    if (!namesUnitLabel(learner, u)) die(`unit ${u} is cited on no screen, and every one of them is either a loop this lesson closes or a boundary it hands over`);
  }
  const boundary = LESSON.sections.find((s) => (s as { id?: string }).id === BOUNDARY_SECTION_ID);
  if (!boundary) die(`${BOUNDARY_SECTION_ID} is gone, and with it the card that hands the neighbours their subjects back`);
  const bText = strings(boundary).join('\n');
  for (const u of [WEATHER_UNIT, SHOPPING_UNIT, MODAL_UNIT]) {
    if (!namesUnitLabel(bText, u)) die(`${BOUNDARY_SECTION_ID} does not name ${u}, so that boundary is left as a rumour`);
  }

  /** THE READ-ONLY ROWS ARE RELEASED TO NOTHING. The "named nowhere" half is
   *  scoped to rows whose French no imported row carries: `faire la queue`
   *  exists twice and this build imports one and refuses the other. */
  const importedFrs = new Set(CARRIED.map((r) => r.fr));
  for (const ro of READ_ONLY_VERBS) {
    if (LESSON.itemIds.includes(ro.id)) die(`${ro.id} (${ro.label}) is in itemIds and is released to nothing`);
    if (!importedFrs.has(ro.label) && hasPhrase(learner, ro.label)) die(`"${ro.label}" is on a learner surface and no imported row carries that French`);
  }

  const pcShaped = learnerProse.filter((s) => PASSE_COMPOSE_SHAPE.test(s));
  const pcPhrased = PASSE_COMPOSE_PHRASES.filter((p) => learnerProse.some((s) => hasPhrase(s, p)));
  if (pcShaped.length || pcPhrased.length) die(`a passé composé is on a learner surface: ${[...pcShaped.slice(0, 2), ...pcPhrased].join(', ')}`);
}

/* ── THE a1.10 LOOP, AND THE FIVE ROWS IT RUNS ON ────────────────────────── */
{
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === WEATHER_SECTION_ID);
  if (!sec || sec.type !== 'groupDrill') die(`${WEATHER_SECTION_ID} is gone or is no longer a groupDrill`);
  const shown = (sec.groups[0].items ?? []).map((it) => it.itemId);
  if (shown.join() !== FAIRE_DIRE_LIRE_GROUPED.be.join()) die(`${WEATHER_SECTION_ID} no longer shows the ${FAIRE_DIRE_LIRE_GROUPED.be.length} weather phrases`);
  const authored = FAIRE_DIRE_LIRE_GROUPED.be.filter((id) => CORPUS_AUTHORED_IDS.includes(id));
  if (authored.length) die(`${authored.join(', ')} is a weather expression this build AUTHORED. All five are ${WEATHER_UNIT}'s and are imported by id.`);
  const notMeteo = FAIRE_DIRE_LIRE_GROUPED.be.filter((id) => CARRIED.find((r) => r.id === id)?.theme !== 'meteo');
  if (notMeteo.length) die(`${notMeteo.join(', ')} is in the weather group and does not come from the meteo theme`);
}

/* ── THE FOUR SECTIONS THAT PUT THE THIRTY ON A SCREEN ───────────────────── */
{
  const shown = new Set<string>();
  for (const sid of EXPRESSION_SECTION_IDS) {
    const s = LESSON.sections.find((x) => (x as { id?: string }).id === sid);
    if (!s || s.type !== 'groupDrill') die(`${sid} is gone or is no longer a groupDrill`);
    for (const g of s.groups) for (const it of g.items ?? []) if (it.itemId) shown.add(it.itemId);
  }
  const gone = FAIRE_DIRE_LIRE_EXPRESSION_IDS.filter((id) => !shown.has(id));
  if (gone.length) die(`expression(s) in the thirty that no groupDrill shows: ${gone.join(', ')}`);
}

/* ── The one sheet ───────────────────────────────────────────────────────── */
{
  if ((LESSON.sheets ?? []).length !== 1) die(`${(LESSON.sheets ?? []).length} sheets, expected 1`);
  const sheet = (LESSON.sheets ?? []).find((s) => s.id === SHEET_ID);
  if (!sheet) die(`${SHEET_ID} is gone`);
  const thirty = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-thirty');
  if (!thirty || thirty.type !== 'table') die(`${SHEET_ID} no longer holds the table of the ${EXPRESSION_TARGET}`);
  if (thirty.rows.length !== EXPRESSION_TARGET) die(`the expression table has ${thirty.rows.length} rows, expected ${EXPRESSION_TARGET}`);
  const grid = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-three-verbs');
  if (!grid || grid.type !== 'table') die(`${SHEET_ID} no longer holds the three-verb grid`);
  if (grid.rows.length !== PARADIGM.length) die(`the grid has ${grid.rows.length} rows, expected ${PARADIGM.length}`);
  PARADIGM.forEach((r, i) => {
    if (grid.rows[i].join('|') !== [r.person, r.faire, r.dire, r.lire].join('|')) {
      die(`grid row ${i + 1} reads ${JSON.stringify(grid.rows[i])} and PARADIGM says ${JSON.stringify([r.person, r.faire, r.dire, r.lire])}`);
    }
  });
  const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
  for (const s of sheet.sections ?? []) if (!SHEET_RENDERS.has(s.type)) die(`${SHEET_ID} holds a ${s.type} section, which the sheet renderer does not draw`);
}

/* ── The id collision check, against the seed this time ──────────────────── */
{
  const taken = seed.items.filter((i) => AUTHORED_IDS.has(i.id));
  if (taken.length) {
    const differs = taken.filter((i) => {
      const mine = AUTHORED_ITEMS.find((a) => a.id === i.id)!;
      return i.fr !== mine.fr;
    });
    if (differs.length) die(`id(s) already in the seed carrying DIFFERENT content: ${differs.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
    console.log(`  ${taken.length} authored id(s) already in the seed with matching fr: this is a re-run`);
  }
}

/* ── No two non-sentence rows in one theme may share an `fr` ─────────────── */
{
  const replaced = new Set([...AUTHORED_IDS, ...CARRIED.map((r) => r.id)]);
  const post = [...seed.items.filter((i) => !replaced.has(i.id)), ...AUTHORED_ITEMS, ...CARRIED];
  const seen = new Map<string, string>();
  const clashes: string[] = [];
  for (const i of post) {
    if (i.kind === 'sentence') continue;
    // A two-element array as the key rather than a NUL join: a NUL made
    // seed-writing scripts BINARY to git and every diff opaque.
    const key = JSON.stringify([i.theme, i.fr]);
    const prev = seen.get(key);
    if (prev) clashes.push(`${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    else seen.set(key, i.id);
  }
  const themesIcarry = new Set([THEME, ...CARRIED.map((r) => r.theme)]);
  const mine = clashes.filter((c) => themesIcarry.has(c.split(' ')[0]));
  if (mine.length) die(`fr collision inside a theme this merge writes into:\n  ${mine.join('\n  ')}\n  flashhub-coverage treats that as one card served twice.`);
  console.log(`  no fr collision in the ${themesIcarry.size} themes this merge carries (${clashes.length} pre-existing elsewhere, none of them this build's)`);
}

/* ── a1.03: joiners enforced to ZERO, authored AND carried ──────────────── */
{
  const joiners = endingPopulation([...AUTHORED_ITEMS, ...CARRIED]);
  if (joiners.length !== 0) {
    die(
      `${joiners.length} row(s) this merge writes join a1.03's measured ending population: ${joiners.map((j) => `${j.id} "${j.fr}"`).join(', ')}\n`
      + `  a1-03-genre.test.ts re-measures twenty printed figures from the SEED on every run, so a carried row counts.\n`
      + `  fr.a1.meteo.037 and .039 are kind=word with gender=m and are safe because they are three words long.`,
    );
  }
  console.log('  a1.03 ending population: 0 joiners, authored or carried');
}

/* ── The respelling work ─────────────────────────────────────────────────── */
if (BLIND_NASALS.length !== 0) die(`BLIND_NASALS has gained ${BLIND_NASALS.length} entries. Re-read corrections §6 and split the guard.`);
for (const it of AUTHORED_ITEMS) {
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m`);
}
for (const it of CARRIED) {
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" is carried with a respelling the checker flags: ${it.respell}`);
}
{
  const unseen: string[] = [];
  for (const v of VISIBLE_NASALS) {
    const row = FAIRE_DIRE_LIRE.find((w) => w.id === v.id)!;
    const positions = [...v.must].reduce<number[]>((acc, c, i) => (c === 'ⁿ' ? [...acc, i] : acc), []);
    for (const p of positions) {
      const broken = `${v.must.slice(0, p)}n${v.must.slice(p + 1)}`;
      if (!hasPlainNasalFor(row.fr, broken)) unseen.push(`${v.id}: ${broken}`);
    }
  }
  if (unseen.length) die(`the shared checker cannot see ${unseen.length} of this lesson's nasals: ${unseen.join(', ')}. Move them into BLIND_NASALS and assert by name.`);
}
if (!hasPlainNasalFor('bon', 'BOHN')) die('hasPlainNasalFor no longer flags a plain-n nasal at all, so every result here is meaningless');
{
  const surprise = CARRIED.filter((r) => !r.respell && !NO_RESPELL_IDS.includes(r.id));
  if (surprise.length) die(`carried row(s) with no respelling that are not in NO_RESPELL_IDS: ${surprise.map((r) => r.id).join(', ')}`);
  console.log(`  respellings: ${VISIBLE_NASALS.length} superscripts all seen, 0 blind, ${NO_RESPELL_IDS.length} carried rows deliberately without one`);
}

/* ── The quiz, and BOTH answer-spread surfaces ───────────────────────────── */
{
  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (!quiz || quiz.type !== 'quiz') die('no quiz section');
  if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz section; the pager renders exactly one');
  const qs = quizQuestions(quiz);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half limit`);
  const noWhy = qs.filter((q) => !q.why).length;
  if (noWhy) die(`${noWhy} quiz question(s) have no why`);
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '')).length;
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  if (typed <= listen * 2) die(`${typed} typed against ${listen} listenChoose; the written half has to carry this quiz`);
  /** THE OWNS CARRIES THE QUIZ. An expression is identified by its OBJECT,
   *  because the best questions put a form and an expression together and
   *  neither of those contains the naming form. */
  const objects = FAIRE_DIRE_LIRE_EXPRESSION_IDS
    .map((id) => [...AUTHORED_ITEMS, ...CARRIED].find((r) => r.id === id)!.fr.replace(/^(faire |il fait )/, ''));
  const owns = qs.filter((q) => {
    const t = `${q.q} ${q.answer ?? ''} ${q.target ?? ''} ${(q.accept ?? []).join(' ')} ${(q.opts ?? []).join(' ')}`;
    return objects.some((o) => hasPhrase(t, o));
  });
  if (owns.length * 2 < qs.length) die(`only ${owns.length} of ${qs.length} quiz questions touch one of the ${EXPRESSION_TARGET}. The reach is the Owns.`);
  const choosing = qs.filter((q) => (q.opts ?? []).filter((o) => objects.some((ob) => hasPhrase(o, ob))).length >= 2);
  if (choosing.length < 6) die(`only ${choosing.length} questions make the learner choose between expressions, expected at least 6`);
  /** AND THE THREE BREAKING CELLS ARE PRODUCED, not merely recognised. */
  const cells = BREAKS.map((b) => b.form);
  const produced = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '') && cells.some((c) => hasPhrase(`${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`, c)));
  if (produced.length < BREAKS.length) die(`only ${produced.length} typed questions make the learner produce one of the ${BREAKS.length} breaking cells`);

  // A type PREDICATE, not a bare filter: `correct` is `number | string` and
  // .filter() does not narrow it out.
  /** NO EAR QUESTION MAY ASK BETWEEN TWO FORMS THAT ARE ONE SOUND.
   *
   *  ADDED AFTER MUTATION-TESTING, which found this was the one guard the batch
   *  and the test both had and the merge did not. `fais`/`fait`, `dis`/`dit` and
   *  `lis`/`lit` are each one sound, so a listenChoose offering two of them has
   *  no correct answer and marking one right would certify a bug.
   *
   *  Checked as "these two options differ ONLY by a member of one group", so a
   *  question offering « Il fait le lit. » against « Ils font le lit. » stays
   *  legal: those two are audibly different and catching that is the mission. */
  {
    const bad: string[] = [];
    for (const q of qs) {
      if (q.format !== 'listenChoose') continue;
      const opts = q.opts ?? [];
      for (let i = 0; i < opts.length; i++) {
        for (let j = i + 1; j < opts.length; j++) {
          for (const group of HOMOPHONE_FORMS) {
            for (const x of group) for (const y of group) {
              if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(`"${q.q}" offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}`);
            }
          }
        }
      }
    }
    if (bad.length) die(`ear question(s) whose options are the same sound:\n    ${[...new Set(bad)].join('\n    ')}\n  No recording separates fais from fait, dis from dit, or lis from lit.`);
  }

  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) if ((c / closed.length) * 100 > 40) die(`quiz slot ${s} holds ${Math.round((c / closed.length) * 100)}%, over 40`);

  // The IN-MISSION surface, which nothing shuffles. MissionRich renders
  // q.opts.map in AUTHORED order.
  const inMission: { section: string; correct: number }[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct });
  }
  const mslots = new Map<number, number>();
  for (const q of inMission) mslots.set(q.correct, (mslots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of mslots) if ((c / inMission.length) * 100 > 40) die(`in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%, over 40, and nothing shuffles these`);
  let prev: { section: string; correct: number } | null = null;
  for (const q of inMission) {
    if (prev && prev.section === q.section && prev.correct === q.correct) die(`${q.section}: consecutive in-mission questions share slot ${q.correct}`);
    prev = q;
  }
  console.log(`  quiz: ${owns.length}/${qs.length} touching an expression, ${choosing.length} choosing | spread ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')} | in-mission ${[...mslots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/* ── The neighbours, against the post-merge production surfaces ──────────── */
{
  const out: string[] = [];
  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (quiz && quiz.type === 'quiz') {
    for (const q of quizQuestions(quiz)) {
      if (q.answer) out.push(q.answer);
      if (q.target) out.push(q.target);
      for (const a of q.accept ?? []) out.push(a);
      for (const o of q.opts ?? []) out.push(o);
    }
  }
  for (const s of LESSON.sections) {
    if (s.type === 'scenario') for (const t of s.turns) out.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') for (const g of s.groups) { if (g.check) out.push(...g.check.opts); out.push(...strings(g.items ?? [])); }
    if (s.type === 'listening') for (const q of s.questions) out.push(...q.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) out.push(...d.opts);
    if (s.type === 'tapTable') for (const r of s.rows) out.push(...strings(r));
    if (['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) out.push(...strings(s));
  }
  for (const d of LESSON.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) out.push(o.opts[o.correct]);
  }
  if (out.length < 300) die(`the production-surface scope collapsed to ${out.length} strings, so every neighbour guard would pass vacuously`);
  const weather = WEATHER_VOCAB.filter((w) => out.some((s) => hasPhrase(s, w)));
  if (weather.length) die(`${WEATHER_UNIT}'s weather vocabulary reached a production surface: ${weather.join(', ')}`);
  const shopping = SHOPPING_VOCAB.filter((w) => out.some((s) => hasPhrase(s, w)));
  if (shopping.length) die(`${SHOPPING_UNIT}'s shopping vocabulary reached a production surface: ${shopping.join(', ')}`);
  const leaked = out.filter((s) => FUTUR_PROCHE_SHAPE.test(s));
  if (leaked.length) die(`the futur proche reached a production surface: ${[...new Set(leaked)].slice(0, 4).map((s) => JSON.stringify(s)).join(', ')}`);
  const modal = out.filter((s) => MODAL_SHAPE.test(s));
  if (modal.length) die(`a modal plus a naming form reached a production surface: ${[...new Set(modal)].slice(0, 4).map((s) => JSON.stringify(s)).join(', ')}. That is ${MODAL_UNIT}.`);
  const reported = out.filter((s) => REPORTED_SPEECH_SHAPE.test(s));
  if (reported.length) die(`reported speech reached a production surface: ${[...new Set(reported)].slice(0, 4).map((s) => JSON.stringify(s)).join(', ')}`);
  console.log(`  neighbours: 0 weather words, 0 shopping words, 0 futur proche, 0 modals, 0 reported speech on ${out.length} production surfaces`);
}

/* ── The dictée, against the POST-MERGE item set, and what it can grade ──── */
{
  const postById = new Map<string, Item>([
    ...seed.items.map((i) => [i.id, i] as const),
    ...CARRIED.map((i) => [i.id, i] as const),
    ...AUTHORED_ITEMS.map((i) => [i.id, i] as const),
  ]);
  for (const id of DICTATION_IDS) {
    const it = postById.get(id);
    if (!it) die(`the dictée names ${id}, which will not be in the seed after this merge`);
    if (!(it.drills ?? []).includes('dictation')) die(`dictation item ${id} carries no "dictation" drill`);
    const mode = dicteeMode(it.fr);
    if (mode !== 'letters') die(`dictée target ${id} "${it.fr}" is in ${mode} mode. Word mode hands every real word over pre-spelled.`);
  }
  const inDictee = BREAKS.filter((b) => DICTATION_IDS.some((id) => hasPhrase(postById.get(id)!.fr, b.form)));
  if (inDictee.length !== BREAKS.length) die(`only ${inDictee.length} of the ${BREAKS.length} breaking cells are dictée targets`);
  const wrongWay = DICTEE_NEAR_MISS.filter((d) => {
    const it = postById.get(d.id)!;
    return (normalizeFr(it.fr) !== normalizeFr(d.wrong)) !== d.scorable;
  });
  if (wrongWay.length) die(`the dictée's scoring claims disagree with the real normalizeFr: ${wrongWay.map((d) => d.id).join(', ')}`);
  const theOne = DICTEE_NEAR_MISS.find((d) => d.wrong === 'Vous faisez le lit.');
  if (!theOne?.scorable) die('the dictée no longer grades faisez, and that is the error the lesson exists to stop');
  const unscorable = DICTEE_NEAR_MISS.filter((d) => !d.scorable);
  if (unscorable.length !== 1) die(`${unscorable.length} unscorable dictée targets, expected exactly 1 (the sentence-initial capital)`);
  console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${DICTEE_NEAR_MISS.length - 1} graded on the distinction and 1 not`);
}

/* ── THE OWNS ACT IS THE HEAVIEST ────────────────────────────────────────
 *
 * ADDED AFTER MUTATION-TESTING, for the same reason as the homophone check
 * above: moving a mission off act 3 and onto act 2 was caught by the batch and
 * by the test and sailed through the merge. Doctrine §B.5 is the whole reason
 * this lesson exists in the shape it does, and every gate should be able to say
 * so.                                                                          */
{
  const acts = LESSON.acts ?? [];
  const owns = acts.find((a) => a.id === 'act3');
  const para = acts.find((a) => a.id === 'act2');
  if (!owns || !para) die('act2 or act3 is gone');
  if (owns.sections.length <= para.sections.length) {
    die(
      `the Owns act holds ${owns.sections.length} missions and the paradigm act holds ${para.sections.length}.\n`
      + `  Doctrine §B.5: if the act structure gives the paradigm more missions than the Owns, the wrong lesson was\n`
      + `  built. This is the first lesson in batch 1 where the paradigm is genuinely not the point.`,
    );
  }
  const claimed = acts.flatMap((a) => a.sections);
  if (new Set(claimed).size !== claimed.length) die('a section is claimed by two acts');
  if (claimed.length !== LESSON.sections.length) die('a section belongs to no act');
}

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID) as (Unit & { lessonIds?: string[]; seq?: string | number }) | undefined;
if (!unit) die(`unit ${UNIT_ID} is not in the seed, so its lesson cannot be attached`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the header will draw ${JSON.stringify(expectedTag)}`);

/* ── Write ───────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing) {
  if (existing.version > LESSON.version) {
    die(`the seed carries v${existing.version} and this source is v${LESSON.version}. Move the LESSON's own version counter forward (not seed.version).`);
  }
  console.warn(
    `\n! seed.json already carries ${LESSON.id}`
    + `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items`
    + `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
    + `\n  Overwriting with the authored copy.\n`,
  );
}

const byId = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carriedNew = 0;
/** The imported rows FIRST, so an authored id could never be shadowed by one. */
for (const it of CARRIED) {
  if (!byId.has(it.id)) carriedNew++;
  byId.set(it.id, it);
}
for (const it of AUTHORED_ITEMS) {
  if (byId.has(it.id)) updatedItems++; else added++;
  byId.set(it.id, it);
}

/** EVERY RELEASED ROW CARRIES A `flashcard` DRILL IN THE SEED, because every one
 *  is released by a tranche and served as a hub card. Three of the twenty-six
 *  gained one in the batch and the carry applies the same addition. */
{
  const short = LESSON.itemIds.filter((id) => !(byId.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const gendered = IMPORTED_VERBS.filter((v) => byId.get(v.id)!.gender);
  if (gendered.length) die(`imported naming form(s) carrying a gender: ${gendered.map((v) => v.verb).join(', ')}. A naming form is not a noun.`);
  const speakable = PARADIGM_IDS.filter((id) => !(byId.get(id)!.drills ?? []).includes('voiceflash'));
  if (speakable.length) die(`speak target(s) with no voiceflash: ${speakable.join(', ')}`);
}

const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

const out: Seed = {
  ...seed,
  items: [...byId.values()],
  lessons: [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON],
  units: seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u)),
};

/* ── Nothing else moved ──────────────────────────────────────────────────── */

const survivors = out.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lost = MUST_NOT_DISTURB.filter((id) => !survivors.includes(id));
if (lost.length) die(`this merge would DROP lesson(s): ${lost.join(', ')}`);
const gained = survivors.filter((id) => !MUST_NOT_DISTURB.includes(id));
if (gained.length) die(`this merge would ADD lesson(s) it does not own: ${gained.join(', ')}`);
if (out.units.length !== UNITS_BEFORE) die(`unit count moved from ${UNITS_BEFORE} to ${out.units.length}`);
if (out.version !== seed.version) die('seed.version moved. It is the OTA snapshot number and a merge must never touch it.');

/** AND THE READ-ONLY ROWS ARE STILL ABSENT unless somebody else put them there. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const introduced = READ_ONLY_VERBS.filter((b) => !before.has(b.id) && out.items.some((i) => i.id === b.id));
  if (introduced.length) die(`this merge would carry read-only row(s) into the seed: ${introduced.map((b) => b.label).join(', ')}`);
}

/** Every row this merge does not own comes out BYTE-IDENTICAL. A count would not
 *  catch an edit, and an edit is what the publish hazard is made of. */
{
  const changed: string[] = [];
  const dropped: string[] = [];
  const after = new Map(out.items.map((i) => [i.id, i] as const));
  for (const [id, before] of UNTOUCHED_BEFORE) {
    const now = after.get(id);
    if (!now) { dropped.push(id); continue; }
    if (JSON.stringify(now) !== before) changed.push(id);
  }
  if (dropped.length) die(`this merge would DROP ${dropped.length} row(s) it does not own: ${dropped.slice(0, 6).join(', ')}`);
  if (changed.length) die(`this merge would EDIT ${changed.length} row(s) it does not own: ${changed.slice(0, 6).join(', ')}`);
  console.log(`  ${UNTOUCHED_BEFORE.size} rows this merge does not own: byte-identical`);
}

console.log(
  `\n  ${added} item(s) authored and added, ${updatedItems} updated`
  + `\n    ${PARADIGM_IDS.length} paradigm sentences and ${AUTHORED_EXPRESSION_IDS.length} expressions`
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    ${IMPORTED_VERBS.length} naming forms and ${IMPORTED_EXPRESSION_IDS.length} expressions, out of ${SOURCE_THEMES.length} themes`
  + `\n  ${RESPELL_REPAIRS.length} respelling change(s), ${DRILL_ADDITIONS.length} drill change(s), all carried at their post-batch values`
  + `\n  ${READ_ONLY_VERBS.length} row(s) read and NOT carried: ${READ_ONLY_VERBS.map((b) => b.label).join(', ')}`
  + `\n  unit ${UNIT_ID}: lessonIds ${JSON.stringify(nextUnit.lessonIds)}`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items, ${EXPRESSION_TARGET} expressions`
  + `\n  items ${seed.items.length} → ${out.items.length}`
  + `\n  ${MUST_NOT_DISTURB.length} other lesson(s) untouched, by name`,
);

if (DRY_RUN) {
  console.log('\n  DRY RUN: seed.json not written.\n');
  process.exit(0);
}

// Canonical formatting. A whole-file rewrite at this shape is correct and a huge
// git diff here is a real content change rather than a reformat.
writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`\n  seed.json written. seed.version left at ${out.version}.\n  NEXT: cd ../ealch-v2 && node --test "src/**/*.test.ts"\n`);
