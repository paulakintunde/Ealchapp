/* Merges a2.18.l1 « Prépositions de temps » into ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-prepositions-temps-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-prepositions-temps-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * NEVER `git checkout seed.json` to undo anything. It discards other authors'
 * uncommitted lessons. Re-run this script.
 *
 * ── WHY THE CARRY EXISTS ──────────────────────────────────────────────────
 *
 * Twelve rows, and FOUR OF THEM ARE THE PARADIGM. fr.sons.jours-et-mois.080 to
 * .083 are four consecutive published phrase cards — « dans / il y a / depuis /
 * pendant une heure » — and every one of the five rows of this lesson's grid
 * takes its example from one of them or from the row authored to complete them.
 * If the cut does not hold them the grid draws four blank cards, which is
 * corrections §10 exactly: a2.11 found that NEITHER of the two rows its lesson
 * leaned on hardest was in the seed.
 *
 * ── THE THREE TRANSFORMS, AND WHY THEY LIVE HERE TOO ──────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * then changes three kinds of thing about rows it does not own:
 *
 *   1  five respellings repaired  all visible to the shared checker, all
 *                                 minimal, every value read off a published row
 *   2  one respelling SUPPLIED    fr.a1.prepositions-essentielles.093 had none
 *   3  three sets of drills added rows that could not be drawn or spoken
 *
 * Carrying the manifest verbatim would put `pahn-DAHN` in the seed on the card
 * of a word this lesson spends five missions on, while Postgres held
 * `pahⁿ-DAHⁿ`. All three transforms are applied here, from the same constants,
 * and the result is checked field by field.
 *
 * ── THE DRILL-ORDER TRAP, INHERITED FROM a2.12 ────────────────────────────
 *
 * `drills` is a Postgres ENUM array and `array_agg(distinct e order by e)`
 * orders by DECLARATION order, not alphabetically. a2.12's merge sorted the same
 * values as STRINGS and shipped a different order into the seed from the one the
 * database held. `drillOrder()` below sorts by `DRILL_KINDS`.
 *
 * ── AND THE MERGE MUST NOT DRIFT THINNER THAN THE BATCH ───────────────────
 *
 * a2.16 §4: six of its twenty-nine mutations were caught by the batch and
 * MISSED by the merge, and a2.04 found that its merge had NO jargon check at
 * all. The reason it matters is procedural — the merge is the layer that runs
 * when somebody re-merges without re-applying. Every guard the batch runs on
 * the content runs here too.
 */
import './env';
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
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  A103_SEED_POPULATION, AGO_RULE, ALL_REPAIRS, AUTHORED_HEADWORDS,
  AUTHORED_IDS as AUTHORED_ID_LIST, CLOCK_FORBIDDEN, CLOCK_UNIT,
  COMPOUND_MUST_FIRE, COMPOUND_MUST_NOT_FIRE, COMPOUND_SHAPE, DEPUIS_EVIDENCE,
  DEPUIS_PAST_MUST_FIRE, DEPUIS_PAST_MUST_NOT_FIRE, DEPUIS_PAST_SHAPE,
  DEPUIS_WRONG, DRILL_ADDITIONS, EXPECTED_ACTS, EXPECTED_AUTHORED,
  EXPECTED_DISPLAY_ONLY, EXPECTED_IMPORTED, EXPECTED_QUESTIONS,
  EXPECTED_REPAIRS, EXPECTED_REPAIRS_BLIND, EXPECTED_REPAIRS_HOUSE,
  EXPECTED_SECTIONS, EXPECTED_TERMS, EXPECTED_TRAP_DRILLS, FUTURE_UNIT,
  FUTUR_PROCHE_MUST_FIRE, FUTUR_PROCHE_MUST_NOT_FIRE, FUTUR_PROCHE_SHAPE, GRID,
  GRID_CELL_MAX, ID_BLOCK, IL_Y_A_EVIDENCE, IL_Y_A_ROW_INDEX, IMPORTED,
  IL_Y_A_ROW_FR, IMPORTED_IDS, ITEM_IMPORT_IDS, IL_Y_A_RESPELL, MONTH_UNIT,
  NO_EAR_QUESTION, PAST_EXAMPLE_FR, ilYaRespellOk,
  PAST_UNIT, PLACE_MUST_FIRE, PLACE_MUST_NOT_FIRE, PLACE_SHAPE, PLACE_UNIT,
  POUR_DECISION, POUR_MUST_FIRE, POUR_MUST_NOT_FIRE, POUR_TIME_SHAPE,
  PREPOSITIONS_TEMPS, PREP_ORDER, PROBLEME_FALSE_POSITIVE, QUADRUPLE_IDS,
  READ_NOT_IMPORTED, REFRAME, REJECTED_THEME, RESPELL_ADDITIONS, THEME,
  TITLE_MAX, UNIT, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, isMine,
} from './data/prepositions-temps-corpus.ts';
import { PREPOSITIONS_TEMPS_TERMS, TERM_ROW_MAX, rowWidth } from './data/prepositions-temps-terms.ts';
import {
  ERRORS_SECTION_ID, GRID_SECTION_ID, ILYA_TRAP_SECTION_ID,
  PREPOSITIONS_TEMPS_ACTS, PREPOSITIONS_TEMPS_DICTEE_IDS,
  PREPOSITIONS_TEMPS_DRILLS, PREPOSITIONS_TEMPS_ERROR_TRIGGERS,
  PREPOSITIONS_TEMPS_ITEM_IDS, PREPOSITIONS_TEMPS_LESSON,
  PREPOSITIONS_TEMPS_SHEETS, PREPOSITIONS_TEMPS_SPEAK_IDS,
  PREPOSITIONS_TEMPS_TRANCHES, QUIZ_SECTION_ID, READING_SECTION_ID,
  SCENARIO_SECTION_ID, WRONG_FORM_SECTIONS, WRONG_FORM_TERMS,
} from './data/prepositions-temps-lesson.ts';
import { PREPOSITIONS_TEMPS_ROWS, MEASURED } from './data/prepositions-temps-rows.gen.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = PREPOSITIONS_TEMPS_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = PREPOSITIONS_TEMPS.map((r) => {
  const { role, prep, ...rest } = r as Record<string, unknown> & { role: string; prep?: string };
  void role; void prep;
  return rest as unknown as Item;
});
const AUTHORED_IDS = new Set(AUTHORED_ID_LIST);

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
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);
/** An id is not prose, whatever key it arrives under. See the batch. */
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k) && !MACHINE_KEYS.has(k)) prose(x, out);
  }
  return out;
}
function hasPhrase(hay: string, needle: string): boolean {
  const isWordL = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const isWordR = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWordL(i === 0 ? '' : h[i - 1]!) && !isWordR(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};
const fires = (re: RegExp, s: string): boolean => new RegExp(re.source, re.flags.replace('g', '')).test(s);
const countShape = (re: RegExp, s: string): number =>
  (s.match(new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`)) ?? []).length;

/** The jargon list the batch runs, copied deliberately rather than imported:
 *  a2.04 found its merge had NO jargon check at all and only the batch caught
 *  the word. A list in two files that drift is still better than a check in
 *  one file that the other layer does not run. */
const JARGON = [
  'prepositional', 'imperfective', 'perfective', 'aspect', 'durative',
  'punctual', 'deictic', 'existential', 'anterior', 'posterior',
  'present perfect', 'compound tense', 'auxiliary verb', 'participle',
  'inflection', 'inflected', 'paradigm', 'morpheme', 'morphology', 'lexeme',
  'phoneme', 'phonological', 'orthography', 'nasal vowel', 'adverbial',
  'complement', 'constituent', 'disambiguator', 'calque', 'obtaining',
  'first person', 'second person', 'third person',
];

/** `drills` is an ENUM array and Postgres orders it by DECLARATION order. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b)) as Item['drills'];

/* ── The carried rows, with this build's three transforms applied ─────────── */

const MANIFEST_ROWS: Item[] = Object.values(PREPOSITIONS_TEMPS_ROWS);
const REPAIR_BY_ID = new Map(ALL_REPAIRS.map((r) => [r.id, r] as const));
const ADD_BY_ID = new Map(RESPELL_ADDITIONS.map((r) => [r.id, r] as const));
const DRILLADD_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** EVERY IMPORT IS CARRIED, because not one of them is a gendered single word.
 *
 *  a2.04 had to hold fifteen back: a1.03's ending population is measured off
 *  THE SEED and a CARRY is what puts a row there, so importing a gendered noun
 *  moves a1.03's printed figures even though Postgres already had the row. This
 *  lesson imports four prepositions, four phrase cards and four sentences and
 *  `gender` is null on all twelve, measured, so the whole set is carried and
 *  the population guard below proves it moved nothing. */
const CARRY_IDS = new Set(ITEM_IMPORT_IDS);
const CARRIED: Item[] = MANIFEST_ROWS.filter((r) => CARRY_IDS.has(r.id)).map((row) => {
  const fix = REPAIR_BY_ID.get(row.id);
  const add = ADD_BY_ID.get(row.id);
  const drill = DRILLADD_BY_ID.get(row.id);
  let respell = row.respell;
  if (fix) {
    if (respell !== fix.from && respell !== fix.to) {
      die(`${row.id} is recorded as ${JSON.stringify(respell)} and the repair expects ${JSON.stringify(fix.from)}. Regenerate the manifest.`);
    }
    respell = fix.to;
  }
  if (add) {
    if (respell && respell !== add.to) {
      die(`${row.id} is recorded with a respelling of its own, ${JSON.stringify(respell)}, and this build supplies ${JSON.stringify(add.to)}. Read it before overwriting it.`);
    }
    respell = add.to;
  }
  const drills = drill
    ? drillOrder([...new Set([...(row.drills ?? []), ...drill.add])] as Item['drills'])
    : drillOrder(row.drills);
  return { ...row, respell, drills };
});

/* Every transform landed, and nothing else moved. */
{
  const byId = new Map(CARRIED.map((r) => [r.id, r] as const));
  for (const r of ALL_REPAIRS) {
    const now = String(byId.get(r.id)?.respell ?? '');
    if (now !== r.to) die(`the carry left ${r.id} at ${JSON.stringify(now)} and the repaired value is ${JSON.stringify(r.to)}`);
    if (hasPlainNasalFor(r.fr, now)) die(`${r.id} is still flagged after the carry: ${JSON.stringify(now)}`);
  }
  // THE THREE-VALUE ASSERTION IS ABOUT THE SOURCE, NOT ABOUT THE CARRY, so it
  // sits OUTSIDE the loop above. a2.04 found by mutation that a repair the carry
  // skips goes through a check nested inside the carry loop.
  for (const r of ALL_REPAIRS) {
    if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id} repaired value ${JSON.stringify(r.to)} is still flagged`);
    if (hasPlainNasalFor(r.fr, r.half)) die(`${r.id} half value ${JSON.stringify(r.half)} is still flagged`);
    const seesFrom = hasPlainNasalFor(r.fr, r.from);
    if (r.blind && seesFrom) die(`${r.id} claims the checker is blind to it and the checker sees it`);
    if (!r.blind && !seesFrom) die(`${r.id} claims the checker sees it and it does not`);
    if (r.blind && r.house) die(`${r.id} claims both blind and house, and they are mutually exclusive`);
    if ((r.half !== r.to) !== (r.blind || r.house)) die(`${r.id}: half differs from to is ${r.half !== r.to} and blind||house is ${r.blind || r.house}`);
    if (r.to.includes('‿')) die(`${r.id} repaired value carries U+203F`);
  }
  for (const a of RESPELL_ADDITIONS) {
    const now = String(byId.get(a.id)?.respell ?? '');
    if (now !== a.to) die(`the carry left ${a.id} at ${JSON.stringify(now)} and the supplied value is ${JSON.stringify(a.to)}`);
    if (hasPlainNasalFor(a.fr, a.to)) die(`${a.id} supplied value ${JSON.stringify(a.to)} is flagged`);
    if (a.to.includes('‿')) die(`${a.id} supplied value carries U+203F`);
  }
  for (const d of DRILL_ADDITIONS) {
    const have = byId.get(d.id)?.drills ?? [];
    for (const want of d.add) if (!have.includes(want as never)) die(`the carry did not add ${want} to ${d.id}`);
  }
  const touched = new Set([...ALL_REPAIRS.map((r) => r.id), ...RESPELL_ADDITIONS.map((a) => a.id), ...DRILL_ADDITIONS.map((d) => d.id)]);
  const untouched = CARRIED.filter((r) => !touched.has(r.id));
  const changed = untouched.filter((r) => {
    const src = MANIFEST_ROWS.find((x) => x.id === r.id)!;
    return JSON.stringify({ ...r, drills: r.drills }) !== JSON.stringify({ ...src, drills: drillOrder(src.drills) });
  });
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not transform: ${changed.map((r) => r.id).join(', ')}`);
}

/* ── The seed ────────────────────────────────────────────────────────────── */

type Seed = {
  version: number;
  items: Item[];
  lessons: Lesson[];
  units: Unit[];
  [k: string]: unknown;
};

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
console.log(`\n  a2.18 « ${UNIT.sub} » merge${DRY_RUN ? '  (dry run)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

{
  const inSeed = new Set(seed.items.map((i) => i.id));
  const themeInSeed = seed.items.filter((i) => i.theme === THEME).length;
  const missing = IMPORTED_IDS.filter((id) => !inSeed.has(id));
  const quadMissing = QUADRUPLE_IDS.filter((id) => !inSeed.has(id));
  console.log(`  the cut       ${THEME} holds ${themeInSeed} rows in the seed; ${missing.length} of this lesson's ${IMPORTED_IDS.length} imports are absent and would draw blank cards, ${quadMissing.length} of them the four grid examples`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  a1.03's ENDING POPULATION, MEASURED OFF THE SEED
 *
 *  a2.04's ledger amendment §0, and it is the most expensive thing this band
 *  has found. Every A2 build checks the population against POSTGRES, where an
 *  import adds nothing because the row is already there. a1.03 measures it off
 *  the SEED, and a CARRY is what puts a row into the seed. a2.04's first merge
 *  carried fifteen gendered nouns and moved four of a1.03's printed figures
 *  with every other gate green.
 *
 *  This lesson imports NONE, which the manifest generator refuses outright, so
 *  the guard should be trivially satisfied. It runs anyway: a claim nobody
 *  measures is a claim that stops being true quietly.
 * ═══════════════════════════════════════════════════════════════════════ */
{
  if (EXPECTED_DISPLAY_ONLY !== 0) die('this lesson holds no display-only rows and EXPECTED_DISPLAY_ONLY is not zero');
  if (ITEM_IMPORT_IDS.length !== IMPORTED_IDS.length) die('every import is carried and the two lists disagree');
  const gendered = CARRIED.filter((r) => (r as { gender?: string }).gender);
  if (gendered.length) die(`${gendered.length} carried row(s) carry a gender and would join a1.03's seed population: ${gendered.map((r) => r.id).join(', ')}`);

  const before = endingPopulation(seed.items as never).length;
  const after = endingPopulation([...seed.items, ...CARRIED, ...AUTHORED_ITEMS] as never).length;
  if (before !== A103_SEED_POPULATION) {
    console.log(`  !! a1.03's seed population is ${before} and this build measured ${A103_SEED_POPULATION}. Somebody else has moved it.`);
  }
  if (after !== before) die(`this merge moves a1.03's ending population from ${before} rows to ${after}. Invariants §5: withdraw rather than argue.`);
  console.log(`  a1.03         ending population unchanged at ${before} rows in the SEED; 0 gendered rows carried and 0 authored`);
}

const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const UNITS_BEFORE = seed.units.length;
const MINE = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/* ══════════════════════════════════════════════════════════════════════════
 *  EVERY GUARD THE BATCH RUNS ON THE CONTENT RUNS HERE TOO
 * ═══════════════════════════════════════════════════════════════════════ */

const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);
const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id ?? '');

if (PREPOSITIONS_TEMPS.length !== EXPECTED_AUTHORED) die(`${PREPOSITIONS_TEMPS.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (Object.keys(PREPOSITIONS_TEMPS_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(PREPOSITIONS_TEMPS_TERMS).length} terms, expected ${EXPECTED_TERMS}`);
if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${ALL_REPAIRS.length} repairs, expected ${EXPECTED_REPAIRS}`);
if (ALL_REPAIRS.filter((r) => r.blind).length !== EXPECTED_REPAIRS_BLIND) die('the blind-repair count has drifted');
if (ALL_REPAIRS.filter((r) => r.house).length !== EXPECTED_REPAIRS_HOUSE) die('the house-repair count has drifted');
if (RESPELL_ADDITIONS.length !== 1) die(`RESPELL_ADDITIONS holds ${RESPELL_ADDITIONS.length} and this build supplies exactly one`);
if (Object.keys(AUTHORED_HEADWORDS).length !== 0) die('this build authors zero headwords');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('ONE quiz section');
if (LESSON.sections.filter((s) => s.type === 'trapDrill').length !== EXPECTED_TRAP_DRILLS) die('the trapDrill count has drifted');
if (LESSON.sections.filter((s) => s.type === 'tapTable').length !== 1) die('ONE tapTable, and it is the grid');

/* THE GRID, ROW BY ROW.
 *
 * FIVE AND ONE ARE LITERALS. a2.04 found by mutation that a loop over the
 * constant the content renders agrees with itself whatever the constant says,
 * so dropping a row out of the grid passed its merge. a2.16 §3. */
{
  const grid = byId(GRID_SECTION_ID) as {
    type?: string; cols?: string[];
    rows?: { cells: string[]; detail?: { title?: string; body?: string } }[];
  } | undefined;
  if (grid?.type !== 'tapTable') die(`${GRID_SECTION_ID} is not a tapTable`);
  if (GRID.length !== 5) die(`${GRID.length} words in the grid and there are five`);
  if ((grid.rows ?? []).length !== 5) die(`the grid renders ${(grid.rows ?? []).length} rows and there are five words`);
  if ((grid.cols ?? []).length !== 3) die('the grid is three columns wide');
  GRID.forEach((g, i) => {
    const cells = grid.rows![i]!.cells;
    if (cells[0] !== g.prep || cells[1] !== g.tense || cells[2] !== g.measures) {
      die(`grid row ${i} renders ${JSON.stringify(cells)} and the table says ${JSON.stringify([g.prep, g.tense, g.measures])}`);
    }
    for (const cell of cells) if (cell.length > GRID_CELL_MAX) die(`grid cell ${JSON.stringify(cell)} is ${cell.length} and the budget is ${GRID_CELL_MAX}`);
    if (grid.rows![i]!.detail?.title !== g.example) die(`grid row ${i} example is ${JSON.stringify(grid.rows![i]!.detail?.title)} and the table says ${JSON.stringify(g.example)}`);
  });
  if (GRID.map((g) => g.prep).join(',') !== PREP_ORDER.join(',')) die('the grid and PREP_ORDER disagree about the order');
  if (PREP_ORDER.join(',') !== 'depuis,pendant,il y a,dans,en') die(`PREP_ORDER is ${PREP_ORDER.join(',')} and this lesson teaches depuis, pendant, il y a, dans and en`);
  const notProducible = GRID.filter((g) => !g.producible);
  if (notProducible.length !== 1 || notProducible[0]!.prep !== 'il y a') die('exactly one of the five is receptive-only at seq 14 and it is il y a');
  if (GRID[IL_Y_A_ROW_INDEX]!.prep !== 'il y a') die(`IL_Y_A_ROW_INDEX points at ${GRID[IL_Y_A_ROW_INDEX]!.prep}`);
  if (!hasPhrase(grid.rows![IL_Y_A_ROW_INDEX]!.detail?.body ?? '', PAST_UNIT)) die(`the il y a row does not name ${PAST_UNIT}`);
  const quadFrs = new Set(QUADRUPLE_IDS.map((id) => PREPOSITIONS_TEMPS_ROWS[id]?.fr));
  if (quadFrs.size !== 4) die(`the quadruple resolves to ${quadFrs.size} distinct phrases and there are four`);
  const fromCorpus = GRID.filter((g) => quadFrs.has(g.example)).length;
  if (fromCorpus !== 4) die(`${fromCorpus} of the five grid examples are published cards and the corpus published four`);
}

/* The Owns: depuis takes the present. */
{
  for (const line of DEPUIS_PAST_MUST_FIRE) if (!fires(DEPUIS_PAST_SHAPE, line)) die(`DEPUIS_PAST_SHAPE does not fire on ${JSON.stringify(line)}`);
  for (const line of DEPUIS_PAST_MUST_NOT_FIRE) if (fires(DEPUIS_PAST_SHAPE, line)) die(`DEPUIS_PAST_SHAPE fires on ${JSON.stringify(line)}`);
  const WRONG_FORMS = DEPUIS_WRONG.map((w) => w.wrong);
  const legal = new Set<string>(WRONG_FORM_SECTIONS);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (legal.has(sid)) continue;
    const text = strings(s).join('\n');
    for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${sid} contains the wrong form ${JSON.stringify(w)}`);
    for (const line of strings(s)) if (fires(DEPUIS_PAST_SHAPE, line)) die(`${sid} pairs depuis with a past tense: ${JSON.stringify(line)}`);
  }
  const legalTerms = new Set<string>(WRONG_FORM_TERMS);
  const checkedTerms = Object.fromEntries(Object.entries(LESSON.terms ?? {}).filter(([k]) => !legalTerms.has(k)));
  for (const k of legalTerms) {
    const lines = strings((LESSON.terms ?? {})[k]);
    if (!lines.length) die(`WRONG_FORM_TERMS names ${JSON.stringify(k)} and the glossary has no such term`);
    const carries = WRONG_FORMS.some((w) => hasPhrase(lines.join('\n'), w)) || lines.some((l) => fires(DEPUIS_PAST_SHAPE, l));
    if (!carries) die(`${JSON.stringify(k)} is exempted from the wrong-form guard and does not contain one`);
  }
  for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', checkedTerms], ['intro', LESSON.intro ?? '']] as const) {
    for (const w of WRONG_FORMS) if (hasPhrase(strings(v).join('\n'), w)) die(`${label} contains the wrong form ${JSON.stringify(w)}`);
    for (const line of strings(v)) if (fires(DEPUIS_PAST_SHAPE, line)) die(`${label} pairs depuis with a past tense: ${JSON.stringify(line)}`);
  }
  for (const r of PREPOSITIONS_TEMPS) {
    for (const w of WRONG_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} is a corpus row holding ${JSON.stringify(w)}`);
    if (fires(DEPUIS_PAST_SHAPE, r.fr)) die(`${r.id} pairs depuis with a past tense`);
  }
  const homes = LESSON.sections.filter((s) => legal.has((s as { id?: string }).id ?? ''));
  for (const w of WRONG_FORMS) if (!homes.some((s) => strings(s).some((x) => hasPhrase(x, w)))) die(`the wrong form ${JSON.stringify(w)} appears nowhere`);
  const importedFrs = new Map(IMPORTED.map((i) => [i.fr.toLowerCase(), i.id] as const));
  for (const r of PREPOSITIONS_TEMPS) {
    const clash = importedFrs.get(r.fr.toLowerCase());
    if (clash) die(`${r.id} authors ${JSON.stringify(r.fr)}, which this lesson already imports as ${clash}`);
  }
  const act2 = PREPOSITIONS_TEMPS_ACTS.find((a) => a.id === 'act2');
  if ((act2?.sections.length ?? 0) < 5) die(`the Owns act has ${act2?.sections.length} sections and the depuis act is the heaviest in the lesson`);
}

/* Exactly one receptive row, and it is asked for nowhere. */
{
  for (const line of COMPOUND_MUST_FIRE) if (!fires(COMPOUND_SHAPE, line)) die(`COMPOUND_SHAPE does not fire on ${JSON.stringify(line)}`);
  for (const line of COMPOUND_MUST_NOT_FIRE) if (fires(COMPOUND_SHAPE, line)) die(`COMPOUND_SHAPE fires on ${JSON.stringify(line)}`);
  const compoundRows = PREPOSITIONS_TEMPS.filter((r) => fires(COMPOUND_SHAPE, r.fr));
  if (compoundRows.length !== 1) die(`${compoundRows.length} authored rows hold a compound tense and exactly one may`);
  if (compoundRows[0]!.fr !== PAST_EXAMPLE_FR) die(`the one compound row is ${JSON.stringify(compoundRows[0]!.fr)} and the corpus names ${JSON.stringify(PAST_EXAMPLE_FR)}`);
  const receptiveId = compoundRows[0]!.id;
  if (PREPOSITIONS_TEMPS_DICTEE_IDS.includes(receptiveId)) die(`${receptiveId} holds a compound tense and is a dictée target`);
  if (PREPOSITIONS_TEMPS_SPEAK_IDS.includes(receptiveId)) die(`${receptiveId} holds a compound tense and is a speak target`);
  for (const q of qs) {
    if (fires(COMPOUND_SHAPE, String(q.answer ?? ''))) die(`a quiz question asks the learner to produce ${JSON.stringify(q.answer)}`);
    for (const a of (q.accept ?? [])) if (fires(COMPOUND_SHAPE, a)) die(`a quiz question accepts ${JSON.stringify(a)}`);
  }
  for (const d of PREPOSITIONS_TEMPS_DRILLS) {
    for (const [, back] of (d as { pairs?: [string, string][] }).pairs ?? []) {
      if (fires(COMPOUND_SHAPE, back)) die(`${d.id} asks the learner to produce ${JSON.stringify(back)}`);
    }
  }
}

const learnerText = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
].join('\n');

/* The neighbours' ground. */
{
  for (const line of FUTUR_PROCHE_MUST_FIRE) if (!fires(FUTUR_PROCHE_SHAPE, line)) die(`FUTUR_PROCHE_SHAPE does not fire on ${JSON.stringify(line)}`);
  for (const line of FUTUR_PROCHE_MUST_NOT_FIRE) if (fires(FUTUR_PROCHE_SHAPE, line)) die(`FUTUR_PROCHE_SHAPE fires on ${JSON.stringify(line)}`);
  for (const line of strings(LESSON.sections).concat(strings(LESSON.sheets ?? []), strings(LESSON.terms ?? {}), [LESSON.intro ?? ''])) {
    if (fires(FUTUR_PROCHE_SHAPE, line)) die(`the futur proche reached a screen: ${JSON.stringify(line)}`);
  }
  for (const line of PLACE_MUST_FIRE) if (!fires(PLACE_SHAPE, line)) die(`PLACE_SHAPE does not fire on ${JSON.stringify(line)}`);
  for (const line of PLACE_MUST_NOT_FIRE) if (fires(PLACE_SHAPE, line)) die(`PLACE_SHAPE fires on ${JSON.stringify(line)}`);
  const PRODUCTION_TYPES = new Set(['cardDeck', 'flashcards', 'practice', 'dictation', 'groupDrill', 'trapDrill', 'quiz', 'reviewDeck', 'scenario']);
  for (const s of LESSON.sections) {
    if (!PRODUCTION_TYPES.has(s.type)) continue;
    const sid = (s as { id?: string }).id ?? '';
    for (const line of display(s)) if (fires(PLACE_SHAPE, line)) die(`${sid} is a production surface and it drills a place sense: ${JSON.stringify(line)}`);
  }
  for (const r of PREPOSITIONS_TEMPS) if (fires(PLACE_SHAPE, r.fr)) die(`${r.id} carries a place sense of en or dans`);
  for (const u of [PAST_UNIT, FUTURE_UNIT, PLACE_UNIT, CLOCK_UNIT, MONTH_UNIT, WHAT_FOLLOWS_UNIT]) {
    if (!hasPhrase(learnerText, u)) die(`${u} is never named on a learner surface and this lesson leans on it`);
  }
  for (const w of CLOCK_FORBIDDEN) if (hasPhrase(learnerText, w)) die(`${JSON.stringify(w)} is on a learner surface and it is ${CLOCK_UNIT}'s`);
}

/* pour: named once, taught nowhere. */
{
  for (const line of POUR_MUST_FIRE) if (!fires(POUR_TIME_SHAPE, line)) die(`POUR_TIME_SHAPE does not fire on ${JSON.stringify(line)}`);
  for (const line of POUR_MUST_NOT_FIRE) if (fires(POUR_TIME_SHAPE, line)) die(`POUR_TIME_SHAPE fires on ${JSON.stringify(line)}`);
  if (POUR_DECISION.included) die('POUR_DECISION says pour is included and this lesson teaches five words');
  const hits = countShape(POUR_TIME_SHAPE, learnerText);
  if (hits !== 1) die(`pour with a duration appears ${hits} times on a learner surface and the decision is exactly one, in the sheet`);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    for (const line of strings(s)) if (fires(POUR_TIME_SHAPE, line)) die(`${sid} carries pour with a duration and the one mention belongs in the sheet`);
  }
  for (const r of PREPOSITIONS_TEMPS) if (fires(POUR_TIME_SHAPE, r.fr)) die(`${r.id} carries pour with a duration`);
}

/* a2.02's term, quoted verbatim and credited by unit id.
 *
 * THE LITERAL, NOT THE IMPORTED CONSTANT. Found by mutation: paraphrasing
 * `WHAT_FOLLOWS` in the corpus changed both sides of `hasPhrase(learnerText,
 * WHAT_FOLLOWS)` at once and this layer let it through, which is a2.16 §3
 * exactly — a guard looping over the constant the content renders is guarding
 * nothing. A back-reference to another unit's term is not a variable. */
{
  const A202_TERM = 'what comes next decides';
  if (WHAT_FOLLOWS !== A202_TERM) die(`a2.02's term is ${JSON.stringify(WHAT_FOLLOWS)} and this lesson was written to quote ${JSON.stringify(A202_TERM)}. If a2.02 changed it, read a2.02 before changing this.`);
  if (WHAT_FOLLOWS_UNIT !== 'a2.02') die(`the pattern unit is ${JSON.stringify(WHAT_FOLLOWS_UNIT)} and it is a2.02`);
  if (!hasPhrase(learnerText, A202_TERM)) die(`the a2.02 term ${JSON.stringify(A202_TERM)} is not quoted anywhere`);
  const twice = byId(ILYA_TRAP_SECTION_ID) as { rule?: { title?: string } } | undefined;
  if (twice?.rule?.title !== A202_TERM) die(`the trap's rule card is titled ${JSON.stringify(twice?.rule?.title)} and the term is ${JSON.stringify(A202_TERM)}`);
  if (!hasPhrase(learnerText, AGO_RULE)) die('the ago rule is never stated on a learner surface');
  if (!/still being described/i.test(learnerText)) die('the ago rule does not bound itself, and a published counterexample breaks it without the bound');
}

/* THE GRID, AS LITERALS.
 *
 * Found by mutation: three separate cell changes went through the block above
 * because it loops over GRID and compares it with the rows GRID renders, which
 * is the content agreeing with itself. a2.16 §3. These five rows are written
 * out, so a change to the constant has to be repeated here on purpose. */
{
  const LITERAL: readonly [string, string, string, string][] = [
    ['depuis', 'present', 'still going', 'depuis une heure'],
    ['pendant', 'any tense', 'finished', 'pendant une heure'],
    ['il y a', 'a past', 'behind you', 'il y a une heure'],
    ['dans', 'present', 'ahead', 'dans une heure'],
    ['en', 'any tense', 'how long', 'en une heure'],
  ];
  const g = byId(GRID_SECTION_ID) as { rows?: { cells: string[]; detail?: { title?: string } }[] };
  if ((g.rows ?? []).length !== LITERAL.length) die(`the grid renders ${(g.rows ?? []).length} rows and this lesson teaches ${LITERAL.length} words`);
  LITERAL.forEach(([prep, tense, measures, example], i) => {
    const cells = g.rows![i]!.cells;
    if (cells[0] !== prep || cells[1] !== tense || cells[2] !== measures) {
      die(`grid row ${i} renders ${JSON.stringify(cells)} and this lesson teaches ${JSON.stringify([prep, tense, measures])}`);
    }
    if (g.rows![i]!.detail?.title !== example) die(`grid row ${i} example is ${JSON.stringify(g.rows![i]!.detail?.title)} and it is ${JSON.stringify(example)}`);
  });
}

/* ONE SPELLING OF `il y a` ACROSS THE WHOLE LESSON, and the deferral wording.
 *
 * Both found by mutation, and both were missed by this layer AND by the test:
 * two respellings of one phrase are each clean, so the shared checker will
 * never object, and the deferral was only caught by the batch's version check. */
{
  const rows: { id: string; fr: string; respell: string }[] = [
    ...PREPOSITIONS_TEMPS.map((r) => ({ id: r.id, fr: r.fr, respell: r.respell ?? '' })),
    ...CARRIED.map((r) => ({ id: r.id, fr: r.fr, respell: r.respell ?? '' })),
  ];
  // THE LITERAL, NOT THE IMPORTED CONSTANT. Found by mutation on the second
  // run: `ilYaRespellOk` reads IL_Y_A_RESPELL and so does the content, so
  // changing the constant changed both sides and this layer let it through.
  // a2.16 §3 again, on a guard added in the same session to fix a2.16 §3.
  const IL_Y_A_LITERAL = 'EEL EE AH';
  if (IL_Y_A_RESPELL !== IL_Y_A_LITERAL) die(`this lesson respells « il y a » ${JSON.stringify(IL_Y_A_RESPELL)} and it was built on ${JSON.stringify(IL_Y_A_LITERAL)}, which is fr.sons.jours-et-mois.081's published value`);
  const holders = rows.filter((r) => IL_Y_A_ROW_FR.test(r.fr));
  if (holders.length < 4) die(`${holders.length} rows hold « il y a » and the lesson is built on more than four of them`);
  for (const r of holders) {
    if (!ilYaRespellOk(r.respell)) die(`${r.id} respells « il y a » as ${JSON.stringify(r.respell.slice(0, 12))} and this lesson uses ${JSON.stringify(IL_Y_A_RESPELL)} everywhere`);
    if (!r.respell.toUpperCase().includes(IL_Y_A_LITERAL)) die(`${r.id} does not carry ${IL_Y_A_LITERAL}`);
  }
  // THE DEFERRAL, BY ITS OWN WORDING AND IN FULL. "a2.05 is named somewhere" is
  // satisfied by the grid row alone, and half the sentence is satisfied by a
  // gutted version, so the whole claim is asserted.
  if (!/wants a past tense, and you do not have one yet/i.test(learnerText)) {
    die(`nothing on a learner surface says that il y a for ago needs a tense the learner does not have. ${PAST_UNIT} gets no hand-off and the learner thinks it was forgotten.`);
  }
  if (!/it arrives in a2\.05/i.test(learnerText)) {
    die(`the deferral does not say WHERE the tense arrives, so ${PAST_UNIT} gets no hand-off`);
  }
}

/* The trapDrills are stepped. */
{
  const RECORDED = new Map((LESSON.audio?.recorded ?? []).map((r) => [r.id, r.clipIds ?? []]));
  for (const t of LESSON.sections.filter((s) => s.type === 'trapDrill') as unknown as {
    id?: string; swipe?: boolean; say?: string; size?: string;
    steps?: { kind: string; gate?: boolean }[]; audio?: { recordingId?: string }; cards?: { fr: string }[];
  }[]) {
    const kinds = (t.steps ?? []).map((s) => s.kind).join('>');
    if (kinds !== 'rule>cards>audio>drill') die(`${t.id} steps are ${JSON.stringify(kinds)} and A2 walks rule>cards>audio>drill`);
    if (!t.swipe) die(`${t.id} has no swipe`);
    if (!t.say) die(`${t.id} has no say`);
    if (t.size) die(`${t.id} carries a size and the stepped branch sizes off steps.length`);
    if (!(t.steps ?? []).some((s) => s.kind === 'drill' && s.gate)) die(`${t.id} drill step is not gated`);
    const clips = RECORDED.get(t.audio?.recordingId ?? '');
    if (!clips) die(`${t.id} points at a recording the lesson does not brief`);
    for (const card of t.cards ?? []) if (!clips.includes(card.fr)) die(`${t.id}'s audio step plays ${JSON.stringify(card.fr)} and its take does not contain it`);
    // THE CARDS STEP'S LABEL COUNTS THE CARDS. Found on a Pixel 6: the label
    // said THREE CARDS over four dots, and no host gate compares a step label
    // with the array it labels.
    const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    const cardsStep = (t.steps ?? []).find((x) => x.kind === 'cards') as { label?: string } | undefined;
    const n = (t.cards ?? []).length;
    if (cardsStep?.label && !hasPhrase(cardsStep.label, WORD[n] ?? String(n))) {
      die(`${t.id}'s cards step is labelled ${JSON.stringify(cardsStep.label)} and it holds ${n} cards`);
    }
    if (t.say && !hasPhrase(t.say, WORD[n] ?? String(n))) die(`${t.id}'s say line does not count its ${n} cards`);
  }
}

/* The dictée, the quiz, the titles and the terms. */
{
  for (const id of PREPOSITIONS_TEMPS_DICTEE_IDS) {
    const r = PREPOSITIONS_TEMPS.find((x) => x.id === id);
    if (!r) die(`${id} is a dictée target and is not an authored row`);
    if (dicteeMode(r.fr) !== 'letters') die(`${id} spells in WORD mode`);
  }
  const cannot = PREPOSITIONS_TEMPS.filter((r) => dicteeMode(r.fr) === 'words' && r.drills.includes('dictation'));
  if (cannot.length) die(`${cannot.length} rows spell in WORD mode and carry a dictation drill`);

  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq`);
  const ear = qs.filter((q) => q.format === 'listenChoose');
  if (ear.length > 1) die(`${ear.length} listenChoose questions and the brief asks for one at most`);
  for (const q of ear) {
    const opts = (q.opts ?? []) as string[];
    for (const [x, y] of NO_EAR_QUESTION) {
      if (opts.some((o) => hasPhrase(o, x)) && opts.some((o) => hasPhrase(o, y))) {
        die(`an ear question offers both ${JSON.stringify(x)} and ${JSON.stringify(y)}`);
      }
    }
  }
  if (qs.some((q) => !q.why)) die('a question has no why');
  const noRef = qs.filter((q) => !q.ref || !sectionIds.includes(q.ref));
  if (noRef.length) die(`${noRef.length} questions have a ref naming no section`);
  const closed = qs.filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(Number(q.correct), (slots.get(Number(q.correct)) ?? 0) + 1);
  for (const [slot, n] of slots) if (n / closed.length > 0.4) die(`slot ${slot} holds ${n} of ${closed.length} closed answers, over the 40% cap`);
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    if (!q.answer) die(`a ${q.format} question has no answer`);
    if (!matchesAccept(q.answer, q.accept ?? [])) die(`the ${q.format} question ${JSON.stringify(q.q)} does not accept the answer it displays`);
  }
  const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
  const leads = rounds.map((r) => r.targets[0]);
  if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
  const triggerIds = new Set(PREPOSITIONS_TEMPS_ERROR_TRIGGERS.map((t) => t.id));
  const unled = [...triggerIds].filter((t) => !leads.includes(t));
  if (unled.length) die(`${unled.length} triggers lead no round: ${unled.join(', ')}`);
  const drillIds = new Set(PREPOSITIONS_TEMPS_DRILLS.map((d) => d.id));
  for (const t of PREPOSITIONS_TEMPS_ERROR_TRIGGERS) {
    if (!drillIds.has(t.drill)) die(`${t.id} names an unknown drill`);
    if (t.retest && !drillIds.has(t.retest)) die(`${t.id} names an unknown retest`);
  }

  for (const s of LESSON.sections) {
    const t = (s as { title?: string }).title ?? '';
    if (t.length > TITLE_MAX) die(`the title ${JSON.stringify(t)} is ${t.length} characters and the hub row cuts at ${TITLE_MAX}`);
    const chips = (s as { terms?: string[] }).terms ?? [];
    if (chips.length > 3) die(`${(s as { id?: string }).id} declares ${chips.length} term chips`);
    for (const name of chips) if (!PREPOSITIONS_TEMPS_TERMS[name]) die(`${(s as { id?: string }).id} names an unknown term ${JSON.stringify(name)}`);
    if (chips.length && rowWidth(chips) > TERM_ROW_MAX) die(`${(s as { id?: string }).id} chip row is ${rowWidth(chips)} characters and the budget is ${TERM_ROW_MAX}`);
  }
  const usedTerms = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  const orphanTerms = Object.keys(PREPOSITIONS_TEMPS_TERMS).filter((k) => !usedTerms.has(k));
  if (orphanTerms.length) die(`${orphanTerms.length} terms are named by no section: ${orphanTerms.join(', ')}`);
}

/* House copy and jargon, which a2.04's merge did not check at all. */
{
  const houseText = display(LESSON.sections).concat(
    display(LESSON.sheets ?? []), display(LESSON.terms ?? {}),
    [LESSON.intro ?? ''], display(LESSON.overview ?? {}),
    display(LESSON.acts ?? []), display(LESSON.drills ?? []),
    PREPOSITIONS_TEMPS.flatMap((r) => [r.fr, r.en, r.notes ?? '']),
  ).join('\n');
  const proseText = prose(LESSON.sections).concat(
    prose(LESSON.sheets ?? []), prose(LESSON.terms ?? {}),
    [LESSON.intro ?? ''], prose(LESSON.overview ?? {}),
    prose(LESSON.acts ?? []), prose(LESSON.drills ?? []),
  ).join('\n');
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      if (hasPhrase(proseText, form)) die(`the jargon ${JSON.stringify(form)} is on a learner surface`);
      if (hasPhrase(houseText, form)) die(`the jargon ${JSON.stringify(form)} is on a learner surface (display walk)`);
    }
  }
  if (!LESSON.intro || LESSON.intro.length < 100) die('intro is drawn on the overview card AND the lesson cover, and it is missing or too short');
  for (const j of JARGON) for (const form of [j, `${j}s`]) if (hasPhrase(LESSON.intro, form)) die(`intro holds the jargon ${JSON.stringify(form)}`);
  for (const bad of ['—', '–']) if (houseText.includes(bad)) die('an em or en dash is on a learner surface');
  for (const bad of ['honest', 'honesty', 'honestly']) if (hasPhrase(houseText, bad)) die(`${JSON.stringify(bad)} is banned from authored content`);
  for (const tell of ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch']) {
    if (hasPhrase(houseText, tell)) die(`the AI tell ${JSON.stringify(tell)} is on a learner surface`);
  }
  if (houseText.includes('‿')) die('U+203F is on a learner surface');
  const plain = countPhrase(houseText, 'time word') + countPhrase(houseText, 'small word') + countPhrase(houseText, 'the word');
  const technical = countPhrase(houseText, 'preposition');
  if (technical > plain) die(`the technical word appears ${technical} times and the plain phrase ${plain}`);
}

/* The reframe, the acts and reachability. */
{
  if (LESSON.reframe !== REFRAME) die('the lesson reframe and the corpus constant disagree');
  // SIX, NOT THREE. The density validator wants three and the doctrine says the
  // good lessons use six to eight; found by mutation, where rewording it in one
  // place left four and this layer let it through.
  const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  if (reframeSections < 6) die(`the reframe is carried by ${reframeSections} sections and this lesson was built to carry it in six`);

  const claimed = new Map<string, string>();
  for (const a of PREPOSITIONS_TEMPS_ACTS) {
    for (const sid of a.sections) {
      if (!sectionIds.includes(sid)) die(`act ${a.id} names ${sid} and there is no such section`);
      if (claimed.has(sid)) die(`${sid} is claimed by two acts`);
      claimed.set(sid, a.id);
    }
  }
  for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);

  const released = new Set(PREPOSITIONS_TEMPS_TRANCHES.flat());
  const ghosts = [...released].filter((id) => !PREPOSITIONS_TEMPS_ITEM_IDS.includes(id));
  if (ghosts.length) die(`${ghosts.length} tranche ids are not in itemIds: ${ghosts.join(', ')}`);
}

{
  const scenario = byId(SCENARIO_SECTION_ID) as { turns?: { userEn?: string; alts?: unknown[] }[] } | undefined;
  for (const [i, t] of (scenario?.turns ?? []).entries()) {
    if (!t.userEn) die(`scenario turn ${i} has no userEn`);
    if ((t.alts ?? []).length < 2) die(`scenario turn ${i} has fewer than two alts`);
  }
  const reading = byId(READING_SECTION_ID) as { text?: string; questionsInModal?: boolean; glossary?: unknown[] } | undefined;
  if (reading?.text?.includes('\n')) die('a reading passage is ONE BLOCK');
  if ((reading?.glossary ?? []).length && !reading?.questionsInModal) die('a reading glossary needs questionsInModal');
  if (reading?.text && fires(COMPOUND_SHAPE, reading.text)) die('the reading passage holds a compound tense');
  const errors = byId(ERRORS_SECTION_ID) as { swipe?: boolean } | undefined;
  if (!errors?.swipe) die('commonErrors without swipe draws a blank screen');
  if (PREPOSITIONS_TEMPS_SHEETS[0]!.sections!.some((s) => s.type === 'cheatSheet')) die('a cheatSheet inside a reference sheet draws nothing');
  if (PREPOSITIONS_TEMPS_SHEETS[0]!.sections!.some((s) => (s as { cols?: string[] }).cols && (s as { cols: string[] }).cols.length > 3)) die('a four-column table inside a sheet clips');
}

/* The false positive, asserted as a negative. */
if (!hasPlainNasalFor(PROBLEME_FALSE_POSITIVE.word, PROBLEME_FALSE_POSITIVE.flagged)) die(`the checker no longer flags ${PROBLEME_FALSE_POSITIVE.flagged}`);
if (hasPlainNasalFor(PROBLEME_FALSE_POSITIVE.word, PROBLEME_FALSE_POSITIVE.clean)) die(`the checker now flags ${PROBLEME_FALSE_POSITIVE.clean}`);

/* The printed figures equal the re-measured read. */
if (DEPUIS_EVIDENCE.depuisSentences !== MEASURED.depuisSentences) die('DEPUIS_EVIDENCE and the manifest disagree about depuis');
if (DEPUIS_EVIDENCE.pendantWithACompound !== MEASURED.pendantWithACompound) die('DEPUIS_EVIDENCE and the manifest disagree about pendant');
if (IL_Y_A_EVIDENCE.ago !== MEASURED.ilYaAgo) die('IL_Y_A_EVIDENCE and the manifest disagree about the ago count');

/* Schema and density. */
for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id}: ${formatIssues(issues)}`);
}
{
  const li = validateLesson(LESSON);
  if (li.length) die(`the lesson does not validate:\n${formatIssues(li)}`);
  const d = validateDensity(LESSON);
  if (d.length) die(`density:\n${formatDensity(d)}`);
}
for (const r of PREPOSITIONS_TEMPS) {
  if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} is flagged by the nasal checker`);
  if (!isMine(r.id)) die(`${r.id} is outside ${ID_BLOCK.from}..${ID_BLOCK.to}`);
  if (r.theme !== THEME) die(`${r.id} is in theme ${r.theme}`);
  if ((r.theme as string) === (REJECTED_THEME as string)) die(`${r.id} is in the rejected theme`);
}
console.log('  guards        every content guard the batch runs has run here too');

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`the seed has no unit ${UNIT_ID}`);
if (String(unit.seq) !== String(UNIT.seq)) die(`unit ${UNIT_ID} is seq ${unit.seq} and the corpus says ${UNIT.seq}`);
if (unit.title !== UNIT.title) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT.sub) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT.canDo) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${unit.seq}`);

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
    + '\n  Overwriting with the authored copy.\n',
  );
}

const itemsById = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carriedNew = 0;
/** The imported rows FIRST, so an authored id could never be shadowed by one. */
for (const it of CARRIED) {
  if (!itemsById.has(it.id)) carriedNew += 1;
  itemsById.set(it.id, it);
}
for (const it of AUTHORED_ITEMS) {
  if (itemsById.has(it.id)) updatedItems += 1; else added += 1;
  itemsById.set(it.id, it);
}

/** EVERY RELEASED ROW CAN BE SERVED AS THE DECK THAT RELEASES IT EXPECTS. */
{
  const missing = LESSON.itemIds.filter((id) => !itemsById.has(id));
  if (missing.length) die(`itemId(s) resolve to nothing in the seed: ${missing.join(', ')}`);
  const released = new Set(PREPOSITIONS_TEMPS_TRANCHES.flat());
  const short = [...released].filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = PREPOSITIONS_TEMPS_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = PREPOSITIONS_TEMPS_DICTEE_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...AUTHORED_IDS].map((id) => itemsById.get(id)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`authored row(s) carrying a gender: ${gendered.map((r) => r!.id).join(', ')}`);
  /* NO DUPLICATE fr INSIDE THE THEME, computed the way flashhub-coverage does:
     article stripped, per theme. NOT scoped to this build's rows, because two
     rows sharing an fr is one card served twice whoever authored them. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = [...itemsById.values()].filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  if (dupes.length) die(`${dupes.length} duplicate fr inside ${THEME}: ${dupes.slice(0, 5).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; ')}`);
}

const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

const out: Seed = {
  ...seed,
  items: [...itemsById.values()],
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

/** The refused rows are still absent, unless somebody else put them there. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const introduced = READ_NOT_IMPORTED.map((r) => r.id)
    .filter((id) => !before.has(id) && out.items.some((i) => i.id === id));
  if (introduced.length) die(`this merge would carry row(s) it refused into the seed: ${introduced.join(', ')}`);
}

/** Every row this merge does not own comes out BYTE-IDENTICAL. */
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
  + '\n    ZERO headwords authored, and ZERO gendered rows authored or carried.'
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${new Set(MANIFEST_ROWS.map((r) => r.theme)).size} themes, ${QUADRUPLE_IDS.length} of them the published quadruple the grid rests on`
  + `\n    ${ALL_REPAIRS.length} repaired, all visible and all minimal`
  + `\n    ${RESPELL_ADDITIONS.length} given a respelling it never had, ${DRILL_ADDITIONS.length} given drills`
  + `\n  ${READ_NOT_IMPORTED.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  dictée: ${PREPOSITIONS_TEMPS_DICTEE_IDS.length} targets, all LETTERS`,
);

if (DRY_RUN) {
  console.log('\n  DRY RUN: every guard passed, seed.json not written.\n');
} else {
  /* CANONICAL FORMATTING. `JSON.stringify(x, null, 2)` with a trailing newline is
     the shape every other merge writes. */
  writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
  console.log(`\n  wrote ${SEED}`);
  console.log(`  seed now: ${out.items.length} items, ${out.lessons.length} lessons, ${out.units.length} units, version ${out.version} (unchanged)\n`);
  console.log('  NEXT: run the suite, then pnpm content:parity before any publish.\n');
}
console.log(`  itemIds resolved: ${PREPOSITIONS_TEMPS_ITEM_IDS.length}\n`);
