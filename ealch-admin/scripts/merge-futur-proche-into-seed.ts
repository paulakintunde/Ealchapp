/* Merges a2.19.l1 « Le futur proche » into ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-futur-proche-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-futur-proche-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * NEVER `git checkout seed.json` to undo anything. It discards other authors'
 * uncommitted lessons. Re-run this script.
 *
 * ── WHY THE CARRY EXISTS, AND IT IS NOT DECORATIVE HERE ───────────────────
 *
 * SIX OF THE SEVENTEEN IMPORTS ARE ABSENT FROM THE SEED, measured against
 * version 37: the frame naming form `fr.sons.consonnes.098` and four of the
 * published negatives. Corrections §10 and a2.11's finding — neither of the two
 * rows that lesson leaned on hardest was in the cut — and here the missing rows
 * are the word `partir`, which the paradigm prints six times, and four of the
 * five sentences that are the whole evidence for the Owns. Without the carry
 * five cards draw blank.
 *
 * ── THE TWO TRANSFORMS, AND WHY THEY LIVE HERE TOO ────────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * then changes two kinds of thing about rows it does not own:
 *
 *   1  four respellings SUPPLIED   the published negatives have never had one
 *   2  four sets of drills added   rows that could not be drawn or spoken
 *
 * Carrying the manifest verbatim would put an empty bracket on four cards the
 * learner is asked to say. Both transforms are applied here, from the same
 * constants, and the result is checked field by field.
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
 * a2.16 §4: six of its twenty-nine mutations were caught by the batch and MISSED
 * by the merge, and a2.04 found that its merge had NO jargon check at all. The
 * reason it matters is procedural — the merge is the layer that runs when
 * somebody re-merges without re-applying. Every guard the batch runs on the
 * content runs here too.
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
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  A103_SEED_POPULATION, A118_NE_DROP, A213_REFRAME, ABSENT_FROM_SEED,
  AFFIRMATIVE_EVIDENCE, ALL_REPAIRS, ALLER_UNIT, AUTHORED_HEADWORDS,
  AUTHORED_IDS as AUTHORED_ID_LIST, BLIND_NASAL, COMPOUND_MUST_FIRE,
  COMPOUND_MUST_NOT_FIRE, COMPOUND_SHAPE, DICTEE_MATRIX, DRILL_ADDITIONS,
  EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_DISPLAY_ONLY, EXPECTED_IMPORTED,
  EXPECTED_NASALS_MISSED, EXPECTED_NASALS_SEEN, EXPECTED_QUESTIONS,
  EXPECTED_REPAIRS, EXPECTED_SECTIONS, EXPECTED_TERMS, EXPECTED_TRAP_DRILLS,
  FALSE_POSITIVE_CANDIDATES, FRAME_VERB, FUTUR_PROCHE, FUTUR_SIMPLE_MUST_FIRE,
  FUTUR_SIMPLE_MUST_NOT_FIRE, FUTUR_SIMPLE_SHAPE, GRID_CELL_MAX,
  HOUSE_CHROME_FUTURE, ID_BLOCK, IMPORTED, IMPORTED_IDS, ITEM_IMPORT_IDS,
  MODAL_UNIT, NEGATION_UNIT, NEGATIVE_EVIDENCE, NE_DROP_FR, NO_EAR_QUESTION,
  OTHER_FUTURE, PAIRS, PAS_AFTER_INFINITIVE, PAS_AFTER_MUST_FIRE,
  PAS_AFTER_MUST_NOT_FIRE, PAST_UNIT, PERSONS, PLACE_UNIT, READ_NOT_IMPORTED,
  REFRAME, REJECTED_THEME, RESPELL_ADDITIONS, SHEET_CELL_MAX, SHEET_COLS_MAX,
  THEME, TIME_UNIT, TITLE_MAX, UNIT, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, WRONG,
  isMine,
} from './data/futur-proche-corpus.ts';
import { FUTUR_PROCHE_TERMS, TERM_ROW_MAX, rowWidth } from './data/futur-proche-terms.ts';
import {
  ERRORS_SECTION_ID, FUTUR_PROCHE_ACTS, FUTUR_PROCHE_DICTEE_IDS,
  FUTUR_PROCHE_DRILLS, FUTUR_PROCHE_ERROR_TRIGGERS, FUTUR_PROCHE_ITEM_IDS,
  FUTUR_PROCHE_LESSON, FUTUR_PROCHE_SHEETS, FUTUR_PROCHE_SPEAK_IDS,
  FUTUR_PROCHE_TRANCHES, HEAR_SECTION_ID, MODALS_SECTION_ID, PAIR_SECTION_ID,
  QUIZ_SECTION_ID, READING_SECTION_ID, SCENARIO_SECTION_ID, SHAPE_SECTION_ID,
  TWICE_TRAP_SECTION_ID, WRONG_FORM_SECTIONS,
} from './data/futur-proche-lesson.ts';
import { FUTUR_PROCHE_ROWS, MEASURED } from './data/futur-proche-rows.gen.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = FUTUR_PROCHE_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = FUTUR_PROCHE.map((r) => {
  const { role, person, ...rest } = r as Record<string, unknown> & { role: string; person?: string };
  void role; void person;
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
/** A unit id is almost always written possessively and the house right boundary
 *  counts an apostrophe as a word character, so `hasPhrase` cannot see
 *  « a2.04's card ». Found by this build's second dry run; see the batch. */
const namesUnit = (hay: string, id: string): boolean => {
  const word = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const h = hay.toLowerCase();
  const n = id.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!word(i === 0 ? '' : h[i - 1]!) && !word(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
};
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};
const fires = (re: RegExp, s: string): boolean => new RegExp(re.source, re.flags.replace('g', '')).test(s);

/** The jargon list the batch runs, copied deliberately rather than imported:
 *  a2.04 found its merge had NO jargon check at all and only the batch caught
 *  the word. A list in two files that drift is still better than a check in one
 *  file that the other layer does not run. */
const JARGON = [
  'periphrastic', 'synthetic future', 'auxiliary', 'clitic', 'proclitic',
  'infinitive', 'infinitival', 'participle', 'inflection', 'inflected',
  'paradigm', 'morpheme', 'morphology', 'lexeme', 'phoneme', 'phonological',
  'orthography', 'nasal vowel', 'complement', 'constituent', 'predicate',
  'discontinuous', 'invariable', 'locative', 'deictic', 'exponent',
  'first person', 'second person', 'third person', 'compound tense',
  'present perfect', 'futurity',
];

/** `drills` is an ENUM array and Postgres orders it by DECLARATION order. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b)) as Item['drills'];

/* ── The carried rows, with this build's two transforms applied ───────────── */

const MANIFEST_ROWS: Item[] = Object.values(FUTUR_PROCHE_ROWS);
const ADD_BY_ID = new Map(RESPELL_ADDITIONS.map((r) => [r.id, r] as const));
const DRILLADD_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** EVERY IMPORT IS CARRIED, because not one of them is a gendered single word.
 *  a2.04 had to hold fifteen back; this lesson imports verbs in their naming
 *  form, two phrase cards and eight sentences and `gender` is null on all
 *  seventeen, measured. */
const CARRY_IDS = new Set(ITEM_IMPORT_IDS);
const CARRIED: Item[] = MANIFEST_ROWS.filter((r) => CARRY_IDS.has(r.id)).map((row) => {
  const add = ADD_BY_ID.get(row.id);
  const drill = DRILLADD_BY_ID.get(row.id);
  let respell = row.respell;
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
  const byIdMap = new Map(CARRIED.map((r) => [r.id, r] as const));
  if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die('this build repairs nothing and ALL_REPAIRS is not empty');
  for (const a of RESPELL_ADDITIONS) {
    const now = String(byIdMap.get(a.id)?.respell ?? '');
    if (now !== a.to) die(`the carry left ${a.id} at ${JSON.stringify(now)} and the supplied value is ${JSON.stringify(a.to)}`);
    if (hasPlainNasalFor(a.fr, a.to)) die(`${a.id} supplied value ${JSON.stringify(a.to)} is flagged`);
    if (a.to.includes('‿')) die(`${a.id} supplied value carries U+203F`);
  }
  for (const d of DRILL_ADDITIONS) {
    const have = byIdMap.get(d.id)?.drills ?? [];
    for (const want of d.add) if (!have.includes(want as never)) die(`the carry did not add ${want} to ${d.id}`);
  }
  const touched = new Set([...RESPELL_ADDITIONS.map((a) => a.id), ...DRILL_ADDITIONS.map((d) => d.id)]);
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
console.log(`\n  a2.19 « ${UNIT.sub} » merge${DRY_RUN ? '  (dry run)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

{
  const inSeed = new Set(seed.items.map((i) => i.id));
  const themeInSeed = seed.items.filter((i) => i.theme === THEME).length;
  const missing = IMPORTED_IDS.filter((id) => !inSeed.has(id));
  console.log(`  the cut       ${THEME} holds ${themeInSeed} rows in the seed; ${missing.length} of this lesson's ${IMPORTED_IDS.length} imports are absent and would draw blank cards`);
  // THE ABSENCE LIST IS A MEASUREMENT AND IT HAS TO BE ABLE TO FAIL. A row that
  // has since been carried by somebody else is a report; one that has gone
  // missing since is the thing this check exists for.
  const nowAbsent = new Set(missing);
  const claimed = new Set(ABSENT_FROM_SEED);
  const surprises = [...nowAbsent].filter((id) => !claimed.has(id));
  if (surprises.length) die(`${surprises.length} import(s) are absent from the seed and the corpus file does not say so: ${surprises.join(', ')}`);
  const healed = [...claimed].filter((id) => !nowAbsent.has(id));
  if (healed.length) console.log(`  !! ${healed.length} row(s) this build recorded as absent are now in the seed: ${healed.join(', ')}. Somebody else carried them. Reported, not fatal.`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  a1.03's ENDING POPULATION, MEASURED OFF THE SEED
 *
 *  a2.04's ledger amendment §0, and it is the most expensive thing this band
 *  has found. Every A2 build checks the population against POSTGRES, where an
 *  import adds nothing because the row is already there. a1.03 measures it off
 *  the SEED, and a CARRY is what puts a row into the seed.
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

if (FUTUR_PROCHE.length !== EXPECTED_AUTHORED) die(`${FUTUR_PROCHE.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (Object.keys(FUTUR_PROCHE_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(FUTUR_PROCHE_TERMS).length} terms, expected ${EXPECTED_TERMS}`);
if (RESPELL_ADDITIONS.length !== 4) die(`RESPELL_ADDITIONS holds ${RESPELL_ADDITIONS.length} and this build supplies exactly four`);
if (Object.keys(AUTHORED_HEADWORDS).length !== 0) die('this build authors zero headwords');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('ONE quiz section');
if (LESSON.sections.filter((s) => s.type === 'trapDrill').length !== EXPECTED_TRAP_DRILLS) die('the trapDrill count has drifted');
if (LESSON.sections.filter((s) => s.type === 'tapTable').length !== 1) die('ONE tapTable, and it is the construction');

/* THE PARADIGM, AS LITERALS.
 *
 * a2.16 §3 and a2.04: a loop over the constant the content renders agrees with
 * itself whatever the constant says. These six rows are written out, so a change
 * to PERSONS has to be repeated here on purpose. */
{
  const LITERAL: readonly [string, string, string][] = [
    ['je', 'vais', 'partir'],
    ['tu', 'vas', 'partir'],
    ['il', 'va', 'partir'],
    ['nous', 'allons', 'partir'],
    ['vous', 'allez', 'partir'],
    ['ils', 'vont', 'partir'],
  ];
  const g = byId(SHAPE_SECTION_ID) as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  if (g?.type !== 'tapTable') die(`${SHAPE_SECTION_ID} is not a tapTable`);
  if ((g.cols ?? []).length !== 3) die('the grid is three columns wide');
  if ((g.rows ?? []).length !== LITERAL.length) die(`the grid renders ${(g.rows ?? []).length} rows and this lesson teaches ${LITERAL.length} persons`);
  LITERAL.forEach(([person, aller, then], i) => {
    const cells = g.rows![i]!.cells;
    if (cells[0] !== person || cells[1] !== aller || cells[2] !== then) {
      die(`grid row ${i} renders ${JSON.stringify(cells)} and this lesson teaches ${JSON.stringify([person, aller, then])}`);
    }
    for (const cell of cells) if (cell.length > GRID_CELL_MAX) die(`grid cell ${JSON.stringify(cell)} is ${cell.length} and the budget is ${GRID_CELL_MAX}`);
  });
  if (new Set(LITERAL.map((r) => r[2])).size !== 1) die('the third column is not one word repeated, and that is the teaching');
  if (LITERAL[0]![2] !== FRAME_VERB) die(`the frame is ${FRAME_VERB} and the grid prints ${LITERAL[0]![2]}`);
  if (PERSONS.map((p) => `${p.person}|${p.aller}|${p.not}`).join(',')
    !== 'je|vais|ne vais pas,tu|vas|ne vas pas,il|va|ne va pas,nous|allons|n\'allons pas,vous|allez|n\'allez pas,ils|vont|ne vont pas') {
    die('PERSONS has drifted from the six forms this lesson was built on');
  }
}

/* THE OWNS: the affirmative and the negative, adjacent, in ONE section. */
{
  const pairSection = byId(PAIR_SECTION_ID) as { type?: string; examples?: { fr: string }[] } | undefined;
  if (pairSection?.type !== 'examples') die(`${PAIR_SECTION_ID} is ${pairSection?.type} and the pair belongs in one examples screen`);
  const ex = pairSection.examples ?? [];
  if (ex.length < 6 || ex.length % 2 !== 0) die(`${PAIR_SECTION_ID} holds ${ex.length} examples and they are read in pairs`);
  for (let i = 0; i < ex.length; i += 2) {
    const pos = ex[i]!.fr;
    const neg = ex[i + 1]!.fr;
    const stripped = neg.replace(/\bne\s+/i, '').replace(/\bn['’]/i, '').replace(/\bpas\s+/i, '');
    if (stripped.replace(/\s+/g, '') !== pos.replace(/\s+/g, '')) {
      die(`${PAIR_SECTION_ID} example ${i} and ${i + 1} are not the same sentence: ${JSON.stringify(pos)} against ${JSON.stringify(neg)}`);
    }
    const m = /(vais|vas|va|allons|allez|vont)\s+pas\s+([\p{L}]+)/iu.exec(neg);
    if (!m) die(`${PAIR_SECTION_ID} example ${i + 1} does not put pas between a form of aller and the next word`);
    if (m[2]!.toLowerCase() !== FRAME_VERB) die(`${PAIR_SECTION_ID} example ${i + 1} puts pas in front of ${JSON.stringify(m[2])}`);
  }
  if (PAIRS.length !== PERSONS.length) die(`${PAIRS.length} pairs and ${PERSONS.length} persons`);
}

/* No correct sentence puts pas after the naming form. */
{
  for (const line of PAS_AFTER_MUST_FIRE) if (!fires(PAS_AFTER_INFINITIVE, line)) die(`PAS_AFTER_INFINITIVE does not fire on ${JSON.stringify(line)}`);
  for (const line of PAS_AFTER_MUST_NOT_FIRE) if (fires(PAS_AFTER_INFINITIVE, line)) die(`PAS_AFTER_INFINITIVE fires on ${JSON.stringify(line)}`);
  const WRONG_FORMS = WRONG.map((w) => w.wrong);
  const legal = new Set<string>(WRONG_FORM_SECTIONS);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (legal.has(sid)) continue;
    const text = strings(s).join('\n');
    for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${sid} contains the wrong form ${JSON.stringify(w)}`);
    for (const line of strings(s)) if (fires(PAS_AFTER_INFINITIVE, line)) die(`${sid} puts pas after the naming form: ${JSON.stringify(line)}`);
  }
  for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', LESSON.terms ?? {}], ['intro', LESSON.intro ?? '']] as const) {
    for (const w of WRONG_FORMS) if (hasPhrase(strings(v).join('\n'), w)) die(`${label} contains the wrong form ${JSON.stringify(w)}`);
    for (const line of strings(v)) if (fires(PAS_AFTER_INFINITIVE, line)) die(`${label} puts pas after the naming form: ${JSON.stringify(line)}`);
  }
  for (const r of FUTUR_PROCHE) {
    for (const w of WRONG_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} is a corpus row holding ${JSON.stringify(w)}`);
    if (fires(PAS_AFTER_INFINITIVE, r.fr)) die(`${r.id} puts pas after the naming form`);
  }
  for (const i of IMPORTED) if (fires(PAS_AFTER_INFINITIVE, i.fr)) die(`${i.id} is imported and puts pas after the naming form`);
  const homes = LESSON.sections.filter((s) => legal.has((s as { id?: string }).id ?? ''));
  for (const w of WRONG_FORMS) if (!homes.some((s) => strings(s).some((x) => hasPhrase(x, w)))) die(`the wrong form ${JSON.stringify(w)} appears nowhere`);
  const importedFrs = new Map(IMPORTED.map((i) => [i.fr.toLowerCase(), i.id] as const));
  for (const r of FUTUR_PROCHE) {
    const clash = importedFrs.get(r.fr.toLowerCase());
    if (clash) die(`${r.id} authors ${JSON.stringify(r.fr)}, which this lesson already imports as ${clash}`);
  }
  const act2 = FUTUR_PROCHE_ACTS.find((a) => a.id === 'act2');
  if ((act2?.sections.length ?? 0) < 5) die(`the Owns act has ${act2?.sections.length} sections and the negative act is the heaviest in the lesson`);
}

const learnerText = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
].join('\n');

/* The neighbours' ground. */
{
  for (const line of FUTUR_SIMPLE_MUST_FIRE) if (!fires(FUTUR_SIMPLE_SHAPE, line)) die(`FUTUR_SIMPLE_SHAPE does not fire on ${JSON.stringify(line)}`);
  for (const line of FUTUR_SIMPLE_MUST_NOT_FIRE) if (fires(FUTUR_SIMPLE_SHAPE, line)) die(`FUTUR_SIMPLE_SHAPE fires on ${JSON.stringify(line)}`);
  for (const line of COMPOUND_MUST_FIRE) if (!fires(COMPOUND_SHAPE, line)) die(`COMPOUND_SHAPE does not fire on ${JSON.stringify(line)}`);
  for (const line of COMPOUND_MUST_NOT_FIRE) if (fires(COMPOUND_SHAPE, line)) die(`COMPOUND_SHAPE fires on ${JSON.stringify(line)}`);
  const HOMES = new Set<string>([HEAR_SECTION_ID, QUIZ_SECTION_ID, ERRORS_SECTION_ID]);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    for (const line of strings(s)) {
      if (fires(FUTUR_SIMPLE_SHAPE, line) && line !== HOUSE_CHROME_FUTURE && !HOMES.has(sid)) die(`${sid} conjugates the one-word future: ${JSON.stringify(line)}`);
      if (fires(COMPOUND_SHAPE, line)) die(`${sid} conjugates a compound tense: ${JSON.stringify(line)}`);
    }
  }
  // THE HOUSE CHROME IS THE ONE EXEMPTION AND IT IS BOUNDED. a2.14 §4.
  const all = strings(LESSON.sections).concat(strings(LESSON.sheets ?? []), strings(LESSON.terms ?? {}), [LESSON.intro ?? '']);
  if (all.filter((l) => l === HOUSE_CHROME_FUTURE).length !== 1) die('the house goals heading is exempted from the one-word-future guard exactly once and appears a different number of times');
  const goals = LESSON.sections.find((s) => s.type === 'goals') as { frSub?: string } | undefined;
  if (goals?.frSub !== HOUSE_CHROME_FUTURE) die('the one place the one-word future is permitted is the goals frSub');
  for (const r of FUTUR_PROCHE) {
    if (fires(FUTUR_SIMPLE_SHAPE, r.fr)) die(`${r.id} holds a one-word future`);
    if (fires(COMPOUND_SHAPE, r.fr)) die(`${r.id} holds a compound tense`);
  }
  /* THE OWNS, AS A LITERAL, AND THE INVERSION AS A NEGATIVE. FOUND BY MUTATION:
     `OWNS_CLAIM` is one constant rendered on three screens, so inverting it
     changed all three at once and every guard that looked for it kept finding
     it. a2.16 §3. */
  if (!/two halves go round aller/i.test(learnerText)) {
    die('nothing on a learner surface says the two halves go round ALLER, which is the whole of what this lesson owns');
  }
  if (/go round the verb carrying the meaning/i.test(learnerText)) {
    die('a learner surface says the two halves go round the verb carrying the meaning, which is the error this lesson exists to prevent');
  }
  if (!hasPhrase(learnerText, OTHER_FUTURE)) die('the second future is never named on a learner surface');
  for (const u of [PAST_UNIT, TIME_UNIT, PLACE_UNIT, MODAL_UNIT, NEGATION_UNIT, ALLER_UNIT, WHAT_FOLLOWS_UNIT]) {
    if (!namesUnit(learnerText, u)) die(`${u} is never named on a learner surface and this lesson leans on it`);
  }
  /* THE a2.05 HAND-OFF, BY ITS OWN WORDING AND IN FULL.
     FOUND BY MUTATION. "a2.05 is named somewhere" is satisfied by the progress
     card alone, so gutting the hand-off sentence went through this layer and
     the test untouched and was caught only by the batch's version check.
     a2.05 is told to EXTEND this lesson's rule, so the sentence that says so is
     the load-bearing one. */
  if (!/puts a past tense in front of a second verb/i.test(learnerText)) {
    die(`nothing on a learner surface says that ${PAST_UNIT} does this again with a past tense. It is told to extend this lesson's rule and it gets no hand-off.`);
  }
  if (!/behaves exactly as it does here/i.test(learnerText)) {
    die(`the hand-off does not say the negative behaves the SAME WAY there, which is the half ${PAST_UNIT} inherits`);
  }
  /* AND a2.18's OWN SENTENCE IS ON THE SCREEN THAT CLOSES ITS LOOP, beside this
     lesson's version of it. FOUND BY MUTATION: replacing it left every other
     guard green, because a2.18 is still named elsewhere. */
  {
    const when = strings(byId('s12-when')).join('\n');
    if (!hasPhrase(when, 'Je pars dans dix minutes.')) die(`${TIME_UNIT}'s own present-tense sentence is not on the screen that closes its loop`);
    if (!hasPhrase(when, 'Je vais partir dans dix minutes.')) die('this lesson\'s verb-in-front version is not beside it, and the pair is the whole hand-off');
    if (!namesUnit(when, TIME_UNIT)) die(`the screen that closes ${TIME_UNIT}'s loop does not name it`);
  }
}

/* a2.02's term and a2.13's reframe, quoted VERBATIM and asserted as LITERALS.
 *
 * Found by mutation on a2.18: paraphrasing the constant changed both sides of
 * `hasPhrase(learnerText, WHAT_FOLLOWS)` at once and that layer let it through,
 * which is a2.16 §3 exactly. A back-reference to another unit's line is not a
 * variable. */
{
  const A202_TERM = 'what comes next decides';
  const A213_LINE = 'One verb changes for the person, and the next one never does.';
  const A118_LINE = 'In writing, both halves every time. In speech the ne very often goes, and you need to hear it.';
  if (WHAT_FOLLOWS !== A202_TERM) die(`a2.02's term is ${JSON.stringify(WHAT_FOLLOWS)} and this lesson was written to quote ${JSON.stringify(A202_TERM)}. If a2.02 changed it, read a2.02 before changing this.`);
  if (WHAT_FOLLOWS_UNIT !== 'a2.02') die(`the pattern unit is ${JSON.stringify(WHAT_FOLLOWS_UNIT)} and it is a2.02`);
  if (A213_REFRAME !== A213_LINE) die(`a2.13's reframe is ${JSON.stringify(A213_REFRAME)} and this lesson was written to quote ${JSON.stringify(A213_LINE)}`);
  if (A118_NE_DROP !== A118_LINE) die(`a1.18's line about the dropped ne is ${JSON.stringify(A118_NE_DROP)} and this lesson was written to quote ${JSON.stringify(A118_LINE)}`);
  if (!hasPhrase(learnerText, A202_TERM)) die(`the a2.02 term ${JSON.stringify(A202_TERM)} is not quoted anywhere`);
  if (!hasPhrase(learnerText, A213_LINE)) die(`a2.13's reframe is not quoted anywhere`);
  if (!hasPhrase(learnerText, A118_LINE)) die(`a1.18's line about the dropped ne is not quoted anywhere`);
  const twice = byId(TWICE_TRAP_SECTION_ID) as { rule?: { title?: string } } | undefined;
  if (twice?.rule?.title !== A202_TERM) die(`the trap's rule card is titled ${JSON.stringify(twice?.rule?.title)} and the term is ${JSON.stringify(A202_TERM)}`);
  const modals = byId(MODALS_SECTION_ID);
  if (!strings(modals).some((s) => namesUnit(s, MODAL_UNIT))) die(`${MODALS_SECTION_ID} is the back-reference section and does not name ${MODAL_UNIT}`);
  // THE REFRAME OPENS ON a1.18's FIRST THREE WORDS, WHICH IS THE THING THE
  // BRIEF WARNS ABOUT: this lesson extends that rule and must not contradict it.
  if (!REFRAME.toLowerCase().startsWith('wrap the verb')) die(`the reframe is ${JSON.stringify(REFRAME)} and it was written to open on a1.18's own first three words`);
}

/* The dropped ne is reception only. */
{
  const dropped = FUTUR_PROCHE.filter((r) => r.fr === NE_DROP_FR);
  if (dropped.length !== 1) die(`${dropped.length} rows hold the dropped-ne sentence and exactly one may`);
  const row = dropped[0]!;
  if (!row.tags?.includes('receptive')) die(`${row.id} is not tagged receptive`);
  if (row.drills.includes('dictation') || row.drills.includes('voiceflash')) die(`${row.id} is on a production surface`);
  if (FUTUR_PROCHE_DICTEE_IDS.includes(row.id) || FUTUR_PROCHE_SPEAK_IDS.includes(row.id)) die(`${row.id} is a dictée or speak target`);
  if (!/spoken French/i.test(row.en)) die(`${row.id}'s gloss does not mark it as spoken register`);
  const ear = qs.filter((q) => q.format === 'listenChoose');
  if (ear.length !== 1) die(`${ear.length} listenChoose questions and this lesson asks exactly one`);
  if (!(ear[0]!.opts ?? []).includes(NE_DROP_FR)) die('the one ear question does not offer the dropped-ne sentence');
  if (!/spoken|speech/i.test(String(ear[0]!.why ?? ''))) die('the ear question does not mark its answer as spoken register');
  for (const q of qs) {
    if (String(q.answer ?? '') === NE_DROP_FR) die('a quiz question asks the learner to produce the dropped-ne sentence');
    for (const a of (q.accept ?? [])) if (a === NE_DROP_FR) die('a quiz question accepts the dropped-ne sentence');
  }
  for (const [x, y] of NO_EAR_QUESTION) {
    const opts = (ear[0]!.opts ?? []) as string[];
    for (let i = 0; i < opts.length; i += 1) {
      for (let j = i + 1; j < opts.length; j += 1) {
        if (x !== y && opts[i]!.replace(x, y) === opts[j]) die(`ear options differ only by ${x}/${y}`);
      }
    }
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
  }
}

/* The dictée, the quiz, the titles and the terms. */
{
  for (const id of FUTUR_PROCHE_DICTEE_IDS) {
    const r = FUTUR_PROCHE.find((x) => x.id === id);
    if (!r) die(`${id} is a dictée target and is not an authored row`);
    if (dicteeMode(r.fr) !== 'letters') die(`${id} spells in WORD mode`);
  }
  const cannot = FUTUR_PROCHE.filter((r) => dicteeMode(r.fr) === 'words' && r.drills.includes('dictation'));
  if (cannot.length) die(`${cannot.length} rows spell in WORD mode and carry a dictation drill`);
  // THE MATRIX, THROUGH THE REAL FUNCTION. Corrections §4 costs this lesson five
  // of its eight persons and `je` is one letter over.
  for (const d of DICTEE_MATRIX) {
    const person = d.person === 'je' ? 'Je' : d.person.charAt(0).toUpperCase() + d.person.slice(1);
    const forms: Record<string, [string, string]> = {
      je: ['vais', 'ne vais pas'], tu: ['vas', 'ne vas pas'], il: ['va', 'ne va pas'],
      on: ['va', 'ne va pas'], elle: ['va', 'ne va pas'], nous: ['allons', "n'allons pas"],
      vous: ['allez', "n'allez pas"], ils: ['vont', 'ne vont pas'],
    };
    const [aller, not] = forms[d.person]!;
    if (letterCount(`${person} ${aller} ${FRAME_VERB}.`) !== d.affirmative) die(`DICTEE_MATRIX disagrees with the real function about ${d.person} affirmative`);
    if (letterCount(`${person} ${not} ${FRAME_VERB}.`) !== d.negative) die(`DICTEE_MATRIX disagrees with the real function about ${d.person} negative`);
    if ((dicteeMode(`${person} ${not} ${FRAME_VERB}.`) === 'letters') !== d.negativeFits) die(`DICTEE_MATRIX disagrees with dicteeMode about ${d.person}`);
  }
  if (DICTEE_MATRIX.filter((d) => d.negativeFits).length !== 3) die('three of the eight negatives fit and the matrix says otherwise');

  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq`);
  if (qs.filter((q) => q.format === 'errorSpot').length < 5) die('fewer than five errorSpot questions, and word order is the one thing fold() keeps');
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
    if (fires(PAS_AFTER_INFINITIVE, q.answer)) die(`a ${q.format} question displays an answer putting pas after the naming form`);
    for (const a of (q.accept ?? [])) if (fires(PAS_AFTER_INFINITIVE, a)) die(`a ${q.format} question accepts ${JSON.stringify(a)}`);
  }
  const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
  const leads = rounds.map((r) => r.targets[0]);
  if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
  const triggerIds = new Set(FUTUR_PROCHE_ERROR_TRIGGERS.map((t) => t.id));
  const unled = [...triggerIds].filter((t) => !leads.includes(t));
  if (unled.length) die(`${unled.length} triggers lead no round: ${unled.join(', ')}`);
  const drillIds = new Set(FUTUR_PROCHE_DRILLS.map((d) => d.id));
  for (const t of FUTUR_PROCHE_ERROR_TRIGGERS) {
    if (!drillIds.has(t.drill)) die(`${t.id} names an unknown drill`);
    if (t.retest && !drillIds.has(t.retest)) die(`${t.id} names an unknown retest`);
  }
  for (const d of FUTUR_PROCHE_DRILLS) {
    for (const [, back] of (d as { pairs?: [string, string][] }).pairs ?? []) {
      if (fires(PAS_AFTER_INFINITIVE, back)) die(`${d.id} asks the learner to produce ${JSON.stringify(back)}`);
      if (fires(FUTUR_SIMPLE_SHAPE, back)) die(`${d.id} asks the learner to produce a one-word future`);
    }
  }

  for (const s of LESSON.sections) {
    const t = (s as { title?: string }).title ?? '';
    if (t.length > TITLE_MAX) die(`the title ${JSON.stringify(t)} is ${t.length} characters and the hub row cuts at ${TITLE_MAX}`);
    const chips = (s as { terms?: string[] }).terms ?? [];
    if (chips.length > 3) die(`${(s as { id?: string }).id} declares ${chips.length} term chips`);
    for (const name of chips) if (!FUTUR_PROCHE_TERMS[name]) die(`${(s as { id?: string }).id} names an unknown term ${JSON.stringify(name)}`);
    if (chips.length && rowWidth(chips) > TERM_ROW_MAX) die(`${(s as { id?: string }).id} chip row is ${rowWidth(chips)} characters and the budget is ${TERM_ROW_MAX}`);
  }
  const usedTerms = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  const orphanTerms = Object.keys(FUTUR_PROCHE_TERMS).filter((k) => !usedTerms.has(k));
  if (orphanTerms.length) die(`${orphanTerms.length} terms are named by no section: ${orphanTerms.join(', ')}`);
}

/* House copy and jargon, which a2.04's merge did not check at all. */
{
  const houseText = display(LESSON.sections).concat(
    display(LESSON.sheets ?? []), display(LESSON.terms ?? {}),
    [LESSON.intro ?? ''], display(LESSON.overview ?? {}),
    display(LESSON.acts ?? []), display(LESSON.drills ?? []),
    FUTUR_PROCHE.flatMap((r) => [r.fr, r.en, r.notes ?? '']),
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
  const plain = countPhrase(houseText, 'naming form') + countPhrase(houseText, 'the verb behind');
  if (plain < 10) die(`the plain phrase appears ${plain} times and this lesson leans on it in every act`);
}

/* The reframe, the acts and reachability. */
{
  if (LESSON.reframe !== REFRAME) die('the lesson reframe and the corpus constant disagree');
  const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  if (reframeSections < 6) die(`the reframe is carried by ${reframeSections} sections and this lesson was built to carry it in six`);
  /* AND IT IS PINNED WHERE THE LEARNER MEETS IT FIRST. FOUND BY MUTATION:
     rewording it in ONE section left eight carrying it and the count guard let
     that through, which is invariants §5 in a new place — a threshold is not a
     location. The scene's closing line is where the rule arrives. */
  {
    const scene = byId('s01-scene') as { closing?: { text?: string } } | undefined;
    if (scene?.closing?.text !== REFRAME) die(`the scene closes on ${JSON.stringify(scene?.closing?.text)} and the reframe is ${JSON.stringify(REFRAME)}`);
    const trap = byId('s07-where') as { rule?: { body?: string } } | undefined;
    if (!trap?.rule?.body?.includes(REFRAME)) die('the Owns trap\'s rule card does not carry the reframe verbatim');
  }
  /* AND ONE IMPORTED SENTENCE FROM ANOTHER THEME IS ON A PRODUCTION SURFACE,
     asserted BY ID, which is what the brief asks for. FOUND BY MUTATION:
     swapping it for an authored row left this layer green. */
  {
    const scenario = strings(byId(SCENARIO_SECTION_ID)).join('\n');
    const used = IMPORTED.filter((i) => i.use === 'negative' && hasPhrase(scenario, i.fr));
    if (!used.length) die('no imported sentence from another theme is used on a production surface. The brief asks for at least one, by id.');
  }
  const claimed = new Map<string, string>();
  for (const a of FUTUR_PROCHE_ACTS) {
    for (const sid of a.sections) {
      if (!sectionIds.includes(sid)) die(`act ${a.id} names ${sid} and there is no such section`);
      if (claimed.has(sid)) die(`${sid} is claimed by two acts`);
      claimed.set(sid, a.id);
    }
  }
  for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);
  const released = new Set(FUTUR_PROCHE_TRANCHES.flat());
  const ghosts = [...released].filter((id) => !FUTUR_PROCHE_ITEM_IDS.includes(id));
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
  if (reading?.text && fires(FUTUR_SIMPLE_SHAPE, reading.text)) die('the reading passage holds a one-word future');
  const errors = byId(ERRORS_SECTION_ID) as { swipe?: boolean } | undefined;
  if (!errors?.swipe) die('commonErrors without swipe draws a blank screen');
  if (FUTUR_PROCHE_SHEETS[0]!.sections!.some((s) => s.type === 'cheatSheet')) die('a cheatSheet inside a reference sheet draws nothing');
  for (const s of FUTUR_PROCHE_SHEETS[0]!.sections!) {
    const cols = (s as { cols?: string[] }).cols;
    if (cols && cols.length > SHEET_COLS_MAX) die('a four-column table inside a sheet clips');
    for (const r of ((s as { rows?: string[][] }).rows ?? [])) {
      for (const cell of r) if (cell.length > SHEET_CELL_MAX) die(`the sheet cell ${JSON.stringify(cell)} is ${cell.length} characters and this build budgeted ${SHEET_CELL_MAX}`);
    }
  }
}

/* The respellings, and the one blind nasal, asserted by name. */
{
  let seen = 0; let missed = 0;
  const missedRows: string[] = [];
  const scan = (fr: string, value: string, id: string) => {
    if (hasPlainNasalFor(fr, value)) die(`${id} respelled ${JSON.stringify(value)} is flagged by the shared checker`);
    for (let k = 0; k < value.length; k += 1) {
      if (value[k] !== 'ⁿ') continue;
      const broken = `${value.slice(0, k)}n${value.slice(k + 1)}`;
      if (hasPlainNasalFor(fr, broken)) seen += 1; else { missed += 1; missedRows.push(id); }
    }
  };
  for (const r of FUTUR_PROCHE) scan(r.fr, r.respell ?? '', r.id);
  for (const a of RESPELL_ADDITIONS) scan(a.fr, a.to, a.id);
  if (seen !== EXPECTED_NASALS_SEEN) die(`${seen} nasals the checker can see and the corpus file claims ${EXPECTED_NASALS_SEEN}`);
  if (missed !== EXPECTED_NASALS_MISSED) die(`${missed} nasals the checker cannot see and the corpus file claims ${EXPECTED_NASALS_MISSED}: ${missedRows.join(', ')}`);
  const carrier = RESPELL_ADDITIONS.find((a) => a.id === BLIND_NASAL.inRow);
  if (!carrier) die(`${BLIND_NASAL.inRow} is named as the row carrying the blind nasal and it supplies no respelling`);
  if (!carrier.to.includes(BLIND_NASAL.token)) die(`${BLIND_NASAL.inRow} does not carry ${JSON.stringify(BLIND_NASAL.token)}`);
  if (hasPlainNasalFor(carrier.fr, carrier.to.replace(BLIND_NASAL.token, BLIND_NASAL.broken))) {
    die(`the checker now SEES ${JSON.stringify(BLIND_NASAL.broken)}. Corrections §6's blind spot has been fixed and this by-name assertion can go.`);
  }
  if (missedRows.length !== 1 || missedRows[0] !== BLIND_NASAL.inRow) die(`the blind nasal is claimed to be in ${BLIND_NASAL.inRow} alone and the measurement says ${missedRows.join(', ')}`);
  const fired = FALSE_POSITIVE_CANDIDATES.filter((c) => hasPlainNasalFor(c.fr, c.respell));
  if (fired.length) die(`the false-positive path fires on ${fired.map((c) => c.fr).join(', ')} and this build reports it as an absence`);
}

/* The printed figures equal the re-measured read. */
if (NEGATIVE_EVIDENCE.rows !== MEASURED.publishedNegatives) die('NEGATIVE_EVIDENCE and the manifest disagree about the published negatives');
if (NEGATIVE_EVIDENCE.respelled !== MEASURED.publishedNegativesRespelled) die('NEGATIVE_EVIDENCE and the manifest disagree about how many carry a respelling');
if (AFFIRMATIVE_EVIDENCE.rows !== MEASURED.allerPlusInfinitive) die('AFFIRMATIVE_EVIDENCE and the manifest disagree');

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
for (const r of FUTUR_PROCHE) {
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
  const released = new Set(FUTUR_PROCHE_TRANCHES.flat());
  const short = [...released].filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = FUTUR_PROCHE_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = FUTUR_PROCHE_DICTEE_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
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
  + `\n    out of ${new Set(MANIFEST_ROWS.map((r) => r.theme)).size} themes`
  + `\n    0 repaired; ${RESPELL_ADDITIONS.length} given a respelling they never had, ${DRILL_ADDITIONS.length} given drills`
  + `\n  ${READ_NOT_IMPORTED.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  dictée: ${FUTUR_PROCHE_DICTEE_IDS.length} targets, all LETTERS`,
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
console.log(`  itemIds resolved: ${FUTUR_PROCHE_ITEM_IDS.length}\n`);
