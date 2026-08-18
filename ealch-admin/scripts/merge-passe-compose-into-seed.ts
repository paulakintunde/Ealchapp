/* Merges a2.05.l1 « Le passé composé avec avoir » into
 * ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-passe-compose-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-passe-compose-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * NEVER `git checkout seed.json` to undo anything. It discards other authors'
 * uncommitted lessons. Re-run this script.
 *
 * ── WHY THE CARRY EXISTS, AND IT IS NOT DECORATIVE HERE ───────────────────
 *
 * FIVE OF THE TWENTY-THREE IMPORTS ARE ABSENT FROM THE SEED, measured against
 * version 38: four published negatives and fr.sons.masterclass.021, which is a
 * ROW OF THIS LESSON'S OWN PARADIGM — the `il` negative, and the one respelled
 * passé-composé negative in the database. Without the carry the paradigm screen
 * draws a blank card in the middle of the pair the whole lesson turns on.
 *
 * ── THE THREE TRANSFORMS, AND WHY THEY LIVE HERE TOO ──────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * then changes three kinds of thing about rows it does not own:
 *
 *   1  one respelling REPAIRED    fr.sons.jours-et-mois.027 « avant-hier »
 *   2  four respellings SUPPLIED  the published negatives never had one
 *   3  seven sets of drills added rows that could not be drawn or spoken
 *
 * Carrying the manifest verbatim would put an empty bracket on four cards the
 * learner is asked to say. All three transforms are applied here, from the same
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
 * reason it matters is procedural: the merge is the layer that runs when
 * somebody re-merges without re-applying. Every guard the batch runs on the
 * content runs here too.
 *
 * a2.18 §7 is the boundary of that, and it is worth knowing before somebody
 * spends an hour closing the gap: the merge sees only the SEED CUT, so a
 * duplicate of a row that is in Postgres and not in the cut is caught by the
 * batch and by nothing here.
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
  A103_SEED_POPULATION, A217_DEFERRAL, A219_JE_NEGATIVE, A219_JE_NEGATIVE_LETTERS,
  A219_REFRAME, A220_BLOCK, ABSENT_FROM_SEED, ADVERB_EVIDENCE, ADVERB_UNIT,
  AFFIRMATIVE_EVIDENCE, AGREED_AFTER_AVOIR, AGREED_MUST_FIRE,
  AGREED_MUST_NOT_FIRE, ALL_REPAIRS, AUTHORED_HEADWORDS,
  AUTHORED_IDS as AUTHORED_ID_LIST, AUTHORED_PAST_FORMS, AVOIR_UNIT,
  DEPENDENTS, DICTEE_FORMS, DICTEE_MATRIX, DISPLAYED_FALSE_POSITIVES,
  DRILL_ADDITIONS, ENDINGS, ER_UNIT, ETRE_AUXILIARY, ETRE_MUST_FIRE,
  ETRE_MUST_NOT_FIRE, ETRE_UNIT, EXPECTED_ACTS, EXPECTED_AUTHORED,
  EXPECTED_DISPLAY_ONLY, EXPECTED_IMPORTED, EXPECTED_NASALS_MISSED,
  EXPECTED_NASALS_SEEN, EXPECTED_QUESTIONS, EXPECTED_REPAIRS, EXPECTED_SECTIONS,
  EXPECTED_TERMS, EXPECTED_TRAP_DRILLS, FALSE_POSITIVE_CANDIDATES,
  FALSE_POSITIVE_CONTROL, FRAME_PAST, FUTUR_UNIT, GRID_CELL_MAX, ID_BLOCK,
  IL_NEGATIVE_ID, IMPORTED, IMPORTED_IDS, INFINITIVE_AFTER_AVOIR,
  INFINITIVE_MUST_FIRE, INFINITIVE_MUST_NOT_FIRE, IRREGULAR_BY_NAME,
  IRREGULAR_PAST, IRREGULAR_UNIT, IR_UNIT, ITEM_IMPORT_IDS, NEGATION_UNIT,
  NEGATIVE_EVIDENCE, NO_EAR_QUESTION, PAIRS, PARTICIPLE_DECISION,
  PAS_AFTER_MUST_FIRE, PAS_AFTER_MUST_NOT_FIRE, PAS_AFTER_PAST, PASSE_COMPOSE,
  PERSONS, PRONOUN_UNIT, PUBLISHED_NEGATIVE_IDS, READ_NOT_IMPORTED, REFRAME,
  REJECTED_THEME, RESPELL_ADDITIONS, RE_UNIT, SECTION_CONVENTION,
  SHEET_CELL_MAX, SHEET_COLS_MAX, SHEET_TITLE_MAX, THEME, TIME_UNIT, TITLE_MAX,
  UNIT, WRONG, isA220, isMine, reduceNegative,
} from './data/passe-compose-corpus.ts';
import { PASSE_COMPOSE_TERMS, TERM_ROW_MAX, rowWidth } from './data/passe-compose-terms.ts';
import {
  AGO_SECTION_ID, ENDINGS_SECTION_ID, ENGLISH_SECTION_ID, ERRORS_SECTION_ID,
  GAP_TRAP_SECTION_ID, GROUPS_SECTION_ID, INSIDE_SECTION_ID, LISTEN_SECTION_ID,
  NOAGREE_SECTION_ID, NOTHEAR_SECTION_ID, PAIR_SECTION_ID, PASSE_COMPOSE_ACTS,
  PASSE_COMPOSE_DICTEE_IDS, PASSE_COMPOSE_DRILLS, PASSE_COMPOSE_ERROR_TRIGGERS,
  PASSE_COMPOSE_ITEM_IDS, PASSE_COMPOSE_LESSON, PASSE_COMPOSE_SHEETS,
  PASSE_COMPOSE_SPEAK_IDS, PASSE_COMPOSE_TRANCHES, QUIZ_SECTION_ID,
  READING_SECTION_ID, SCENARIO_SECTION_ID, SCENE_SECTION_ID,
  WHICH_TRAP_SECTION_ID, WRONG_FORM_SECTIONS,
} from './data/passe-compose-lesson.ts';
import { PASSE_COMPOSE_ROWS, MEASURED } from './data/passe-compose-rows.gen.ts';
import { namesUnitLabel, unitRef } from './data/_unit-ref.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = PASSE_COMPOSE_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = PASSE_COMPOSE.map((r) => {
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
/** A LEARNER SURFACE NAMES A LESSON BY ITS LABEL, NOT BY ITS ID.
 *
 *  Resolved through the shipped `unit.seq`, never by slicing the id: 31 of 35
 *  A2 units disagree with their own id number. Case-insensitive, and it does
 *  NOT also accept the raw id: a guard taking either would pass on exactly the
 *  thing this change removed. */
const namesUnit = (hay: string, id: string): boolean => namesUnitLabel(hay, id);
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
  'participle', 'auxiliary', 'periphrastic', 'perfective', 'perfect aspect',
  'compound tense', 'present perfect', 'preterite', 'infinitive', 'infinitival',
  'inflection', 'inflected', 'paradigm', 'morpheme', 'morphology', 'lexeme',
  'phoneme', 'phonological', 'orthography', 'nasal vowel', 'complement',
  'constituent', 'predicate', 'discontinuous', 'invariable', 'clitic',
  'proclitic', 'direct object', 'transitive', 'exponent',
  'first person', 'second person', 'third person',
];

/** `drills` is an ENUM array and Postgres orders it by DECLARATION order. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b)) as Item['drills'];

/* ── The carried rows, with this build's three transforms applied ─────────── */

const MANIFEST_ROWS: Item[] = Object.values(PASSE_COMPOSE_ROWS);
const REPAIR_BY_ID = new Map(ALL_REPAIRS.map((r) => [r.id, r] as const));
const ADD_BY_ID = new Map(RESPELL_ADDITIONS.map((r) => [r.id, r] as const));
const DRILLADD_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** EVERY IMPORT IS CARRIED, because not one of them is a gendered single word.
 *  The one row this build wanted and could not take is
 *  `fr.sons.jours-et-mois.036` « la semaine dernière », which carries gender=f;
 *  its VALUE is read off for two respellings, which does not carry it. */
const CARRY_IDS = new Set(ITEM_IMPORT_IDS);
const CARRIED: Item[] = MANIFEST_ROWS.filter((r) => CARRY_IDS.has(r.id)).map((row) => {
  const rep = REPAIR_BY_ID.get(row.id);
  const add = ADD_BY_ID.get(row.id);
  const drill = DRILLADD_BY_ID.get(row.id);
  let respell = row.respell;
  if (rep) {
    if (respell && respell !== rep.from && respell !== rep.to) {
      die(`${row.id} is recorded with ${JSON.stringify(respell)} and this build repairs ${JSON.stringify(rep.from)} to ${JSON.stringify(rep.to)}. Read it before overwriting it.`);
    }
    respell = rep.to;
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
  const byIdMap = new Map(CARRIED.map((r) => [r.id, r] as const));
  if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`this build repairs ${EXPECTED_REPAIRS} and ALL_REPAIRS holds ${ALL_REPAIRS.length}`);
  for (const rp of ALL_REPAIRS) {
    const now = String(byIdMap.get(rp.id)?.respell ?? '');
    if (now !== rp.to) die(`the carry left ${rp.id} at ${JSON.stringify(now)} and the repaired value is ${JSON.stringify(rp.to)}`);
    if (hasPlainNasalFor(rp.fr, rp.to)) die(`${rp.id} repaired value ${JSON.stringify(rp.to)} is still flagged`);
    if (!hasPlainNasalFor(rp.fr, rp.from)) die(`${rp.id} is filed as VISIBLE and the checker does not flag ${JSON.stringify(rp.from)}`);
    if ((rp.half !== rp.to) !== (rp.blind || rp.house)) die(`${rp.id}: a2.17 §2's two reasons have been conflated`);
  }
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
console.log(`\n  a2.05 « ${UNIT.sub} » merge${DRY_RUN ? '  (dry run)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

{
  const inSeed = new Set(seed.items.map((i) => i.id));
  const themeInSeed = seed.items.filter((i) => i.theme === THEME).length;
  const missing = IMPORTED_IDS.filter((id) => !inSeed.has(id));
  console.log(`  the cut       ${THEME} holds ${themeInSeed} rows in the seed; ${missing.length} of this lesson's ${IMPORTED_IDS.length} imports are absent and would draw blank cards`);
  const nowAbsent = new Set(missing);
  const claimed = new Set(ABSENT_FROM_SEED);
  const surprises = [...nowAbsent].filter((id) => !claimed.has(id));
  if (surprises.length) die(`${surprises.length} import(s) are absent from the seed and the corpus file does not say so: ${surprises.join(', ')}`);
  const healed = [...claimed].filter((id) => !nowAbsent.has(id));
  if (healed.length) console.log(`  !! ${healed.length} row(s) this build recorded as absent are now in the seed: ${healed.join(', ')}. Somebody else carried them. Reported, not fatal.`);
  /* AND `avoir` IS ONE OF THEM, which is the part that matters: it is the
     headword of the construction, the first word of every sentence in the
     lesson, and act 1's tranche releases it. Without the carry the deck opens
     on a blank card. a2.11's finding in its sharpest form. */
  if (!claimed.has('fr.sons.verbes-essentiels.002')) die('avoir is the headword this whole lesson runs on and is not recorded as absent from the seed');
  if (!inSeed.has(IL_NEGATIVE_ID) && !claimed.has(IL_NEGATIVE_ID)) die(`${IL_NEGATIVE_ID} is the il row of the paradigm, is absent from the cut, and is not recorded as absent`);
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
const anyFr = (id: string): string => PASSE_COMPOSE.find((r) => r.id === id)?.fr ?? PASSE_COMPOSE_ROWS[id]?.fr ?? die(`${id} is neither authored nor in the manifest`);

if (PASSE_COMPOSE.length !== EXPECTED_AUTHORED) die(`${PASSE_COMPOSE.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if (LESSON.sections.length <= SECTION_CONVENTION) die(`this lesson is declared as an overrun of the ${SECTION_CONVENTION}-section convention and it holds ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (Object.keys(PASSE_COMPOSE_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(PASSE_COMPOSE_TERMS).length} terms, expected ${EXPECTED_TERMS}`);
if (RESPELL_ADDITIONS.length !== 4) die(`RESPELL_ADDITIONS holds ${RESPELL_ADDITIONS.length} and this build supplies exactly four`);
if (Object.keys(AUTHORED_HEADWORDS).length !== 0) die('this build authors zero headwords');
if (Object.keys(AUTHORED_PAST_FORMS).length !== 0) die('this build authors zero bare past forms, which is the ledger decision');
if (PARTICIPLE_DECISION.isCorpusItem) die('the ledger decision has been inverted and this whole build rests on it');
if (MEASURED.bareRegularPastForms !== 0) die(`the manifest measured ${MEASURED.bareRegularPastForms} bare regular past forms and the split with ${IRREGULAR_UNIT} rests on zero`);
/* A ROW WITH NO WHITESPACE IN ITS `fr` IS A BARE WORD WHATEVER ITS `kind` SAYS.
   FOUND BY MUTATION 8: `S()` writes 'sentence' on every row it makes, so a
   headword can be authored without the kind check ever seeing it, and this
   layer missed it entirely. */
{
  const bare = PASSE_COMPOSE.filter((r) => !/\s/.test(r.fr));
  if (bare.length) die(`${bare.length} authored row(s) hold a single word: ${bare.map((r) => r.id).join(', ')}. A bare past form is not a corpus item.`);
}
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('ONE quiz section');
if (LESSON.sections.filter((s) => s.type === 'trapDrill').length !== EXPECTED_TRAP_DRILLS) die('the trapDrill count has drifted');
if (LESSON.sections.filter((s) => s.type === 'tapTable').length !== 1) die('ONE tapTable, and it is the endings grid');

/* THE ENDINGS GRID, AS LITERALS.
 *
 * a2.16 §3 and a2.04: a loop over the constant the content renders agrees with
 * itself whatever the constant says. These three rows are written out, so a
 * change to ENDINGS has to be repeated here on purpose. */
{
  const LITERAL: readonly [string, string, string][] = [
    ['-ER', 'parler', 'parlé'],
    ['-IR', 'finir', 'fini'],
    ['-RE', 'vendre', 'vendu'],
  ];
  const g = byId(ENDINGS_SECTION_ID) as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  if (g?.type !== 'tapTable') die(`${ENDINGS_SECTION_ID} is not a tapTable`);
  if ((g.cols ?? []).length !== 3) die('the grid is three columns wide');
  if ((g.rows ?? []).length !== LITERAL.length) die(`the grid renders ${(g.rows ?? []).length} rows and this lesson teaches ${LITERAL.length} groups`);
  LITERAL.forEach(([group, verb, past], i) => {
    const cells = g.rows![i]!.cells;
    if (cells[0] !== group || cells[1] !== verb || cells[2] !== past) {
      die(`grid row ${i} renders ${JSON.stringify(cells)} and this lesson teaches ${JSON.stringify([group, verb, past])}`);
    }
    for (const cell of cells) if (cell.length > GRID_CELL_MAX) die(`grid cell ${JSON.stringify(cell)} is ${cell.length} and the budget is ${GRID_CELL_MAX}`);
  });
  /* ALL THREE UNITS ARE NAMED ON THE PAYOFF SCREEN. FOUND BY MUTATION 13: this
     layer had the endings literal and not the credit, so a build that stopped
     naming a2.11 where the groups pay off went through it untouched. */
  const groupsText = strings(byId(GROUPS_SECTION_ID)).join('\n');
  for (const u of [ER_UNIT, IR_UNIT, RE_UNIT]) {
    if (!namesUnit(groupsText, u)) die(`${GROUPS_SECTION_ID} is where the three groups pay off and it does not name ${u}`);
  }
  if (ENDINGS.map((e) => `${e.group}|${e.verb}|${e.past}|${e.unit}`).join(',')
    !== '-ER|parler|parlé|a2.01,-IR|finir|fini|a2.10,-RE|vendre|vendu|a2.11') {
    die('ENDINGS has drifted from the three groups this lesson was built on');
  }
  /* AND THE PARADIGM, WHICH LIVES IN THE SHEET. Same treatment. */
  if (PERSONS.map((p) => `${p.person}|${p.avoir}|${p.not}`).join(',')
    !== "je|j'ai|n'ai pas,tu|as|n'as pas,il|a|n'a pas,nous|avons|n'avons pas,vous|avez|n'avez pas,ils|ont|n'ont pas") {
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
    if (reduceNegative(neg).replace(/\s+/g, '') !== pos.replace(/\s+/g, '')) {
      die(`${PAIR_SECTION_ID} example ${i} and ${i + 1} are not the same sentence: ${JSON.stringify(pos)} against ${JSON.stringify(neg)}`);
    }
    const m = /(ai|as|a|avons|avez|ont)\s+pas\s+([\p{L}]+)/iu.exec(neg);
    if (!m) die(`${PAIR_SECTION_ID} example ${i + 1} does not put pas between a form of avoir and the next word`);
    if (m[2]!.toLowerCase() !== FRAME_PAST) die(`${PAIR_SECTION_ID} example ${i + 1} puts pas in front of ${JSON.stringify(m[2])}`);
  }
  if (PAIRS.length !== PERSONS.length) die(`${PAIRS.length} pairs and ${PERSONS.length} persons`);
  if (PAIRS.find((p) => p.person === 'il')!.negId !== IL_NEGATIVE_ID) die(`the il negative is meant to be ${IL_NEGATIVE_ID}`);
  for (const p of PAIRS) {
    if (!anyFr(p.posId).endsWith(`${FRAME_PAST}.`)) die(`${p.posId} does not end on the frame's past form`);
    if (!anyFr(p.negId).endsWith(`${FRAME_PAST}.`)) die(`${p.negId} does not end on the frame's past form`);
    if (/\bpas\b/i.test(anyFr(p.posId))) die(`${p.posId} is declared as an affirmative and holds a pas`);
    if (!/\bpas\b/i.test(anyFr(p.negId))) die(`${p.negId} is declared as a negative and holds no pas`);
  }
}

/* The four shapes, in both directions, and the sections they are allowed in. */
const SHAPES: readonly [string, RegExp, readonly string[], readonly string[]][] = [
  ['PAS_AFTER_PAST', PAS_AFTER_PAST, PAS_AFTER_MUST_FIRE, PAS_AFTER_MUST_NOT_FIRE],
  ['INFINITIVE_AFTER_AVOIR', INFINITIVE_AFTER_AVOIR, INFINITIVE_MUST_FIRE, INFINITIVE_MUST_NOT_FIRE],
  ['AGREED_AFTER_AVOIR', AGREED_AFTER_AVOIR, AGREED_MUST_FIRE, AGREED_MUST_NOT_FIRE],
  ['ETRE_AUXILIARY', ETRE_AUXILIARY, ETRE_MUST_FIRE, ETRE_MUST_NOT_FIRE],
];
const ERROR_SHAPES: readonly [string, RegExp][] = [
  ['PAS_AFTER_PAST', PAS_AFTER_PAST],
  ['INFINITIVE_AFTER_AVOIR', INFINITIVE_AFTER_AVOIR],
  ['AGREED_AFTER_AVOIR', AGREED_AFTER_AVOIR],
];
{
  for (const [name, re, must, mustNot] of SHAPES) {
    for (const line of must) if (!fires(re, line)) die(`${name} does not fire on ${JSON.stringify(line)}`);
    for (const line of mustNot) if (fires(re, line)) die(`${name} fires on ${JSON.stringify(line)}`);
  }
  const WRONG_FORMS = WRONG.map((w) => w.wrong);
  const legal = new Set<string>(WRONG_FORM_SECTIONS);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    for (const line of strings(s)) if (fires(ETRE_AUXILIARY, line)) die(`${sid} uses être as the first word: ${JSON.stringify(line)}`);
    if (legal.has(sid)) continue;
    const text = strings(s).join('\n');
    for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${sid} contains the wrong form ${JSON.stringify(w)}`);
    for (const line of strings(s)) {
      for (const [name, re] of ERROR_SHAPES) if (fires(re, line)) die(`${sid} matches ${name}: ${JSON.stringify(line)}`);
    }
  }
  for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', LESSON.terms ?? {}], ['intro', LESSON.intro ?? ''], ['overview', LESSON.overview ?? {}], ['acts', LESSON.acts ?? []]] as const) {
    for (const w of WRONG_FORMS) if (hasPhrase(strings(v).join('\n'), w)) die(`${label} contains the wrong form ${JSON.stringify(w)}`);
    for (const line of strings(v)) {
      for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
        if (fires(re, line)) die(`${label} matches ${name}: ${JSON.stringify(line)}`);
      }
    }
  }
  for (const r of PASSE_COMPOSE) {
    for (const w of WRONG_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} is a corpus row holding ${JSON.stringify(w)}`);
    for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
      if (fires(re, r.fr)) die(`${r.id} matches ${name}`);
    }
  }
  for (const i of IMPORTED) {
    for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
      if (fires(re, i.fr)) die(`${i.id} is imported and matches ${name}`);
    }
  }
  const homes = LESSON.sections.filter((s) => legal.has((s as { id?: string }).id ?? ''));
  for (const w of WRONG_FORMS) if (!homes.some((s) => strings(s).some((x) => hasPhrase(x, w)))) die(`the wrong form ${JSON.stringify(w)} appears nowhere`);
  const importedFrs = new Map(IMPORTED.map((i) => [i.fr.toLowerCase(), i.id] as const));
  for (const r of PASSE_COMPOSE) {
    const clash = importedFrs.get(r.fr.toLowerCase());
    if (clash) die(`${r.id} authors ${JSON.stringify(r.fr)}, which this lesson already imports as ${clash}`);
  }
  const act2 = PASSE_COMPOSE_ACTS.find((a) => a.id === 'act2');
  if ((act2?.sections.length ?? 0) < 5) die(`the Owns act has ${act2?.sections.length} sections and it is the heaviest in the lesson`);
}

const learnerText = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
].join('\n');

/* NOT ONE IRREGULAR PAST FORM, BY NAME. */
{
  const surfaces = display(LESSON.sections).concat(
    display(LESSON.sheets ?? []), display(LESSON.terms ?? {}), [LESSON.intro ?? ''],
    display(LESSON.overview ?? {}), display(LESSON.acts ?? []), display(LESSON.drills ?? []),
  ).join('\n');
  for (const w of IRREGULAR_PAST) if (hasPhrase(surfaces, w)) die(`the irregular past form ${JSON.stringify(w)} is on a learner surface. ${IRREGULAR_UNIT} owns all forty.`);
  for (const w of IRREGULAR_BY_NAME) {
    if (!IRREGULAR_PAST.includes(w)) die(`${JSON.stringify(w)} is one of the five the brief names and is not in IRREGULAR_PAST`);
    if (hasPhrase(surfaces, w)) die(`${JSON.stringify(w)} is on a learner surface`);
  }
  for (const r of PASSE_COMPOSE) for (const w of IRREGULAR_PAST) if (hasPhrase(r.fr, w)) die(`${r.id} holds ${JSON.stringify(w)}`);
  for (const i of IMPORTED) for (const w of IRREGULAR_PAST) if (hasPhrase(i.fr, w)) die(`${i.id} holds ${JSON.stringify(w)}`);
  if (!/past form you could not have guessed/i.test(learnerText)) die(`nothing says that some past forms cannot be built from the naming form, and ${IRREGULAR_UNIT} is the next lesson`);
}

/* The back-references, as LITERALS. a2.16 §3: a back-reference to another
 * unit's line is not a variable, and a2.18's mutation run proved it. */
{
  const A219_LINE = 'Wrap the verb that changed, not the one carrying the meaning.';
  const A217_LINE = `In a past tense the short ones move, and that rule arrives with the tense in ${unitRef('a2.05')}.`;
  if (A219_REFRAME !== A219_LINE) die(`${FUTUR_UNIT}'s reframe is ${JSON.stringify(A219_REFRAME)} and this lesson was written to quote ${JSON.stringify(A219_LINE)}`);
  if (A217_DEFERRAL !== A217_LINE) die(`${ADVERB_UNIT}'s deferral is ${JSON.stringify(A217_DEFERRAL)} and this lesson was written to quote ${JSON.stringify(A217_LINE)}`);
  if (!hasPhrase(learnerText, A219_LINE)) die(`${FUTUR_UNIT}'s negation rule is not quoted verbatim anywhere`);
  if (!hasPhrase(learnerText, A217_LINE)) die(`${ADVERB_UNIT}'s deferral is not quoted verbatim anywhere`);
  if (/wrap the (?:auxiliary|first word|verb that moved)/i.test(learnerText)) die(`a learner surface carries a second wording of ${FUTUR_UNIT}'s rule`);
  const english = strings(byId(ENGLISH_SECTION_ID)).join('\n');
  if (!hasPhrase(english, A219_LINE)) die(`${ENGLISH_SECTION_ID} is where the negative arrives and it does not carry ${FUTUR_UNIT}'s wording`);
  const inside = strings(byId(INSIDE_SECTION_ID)).join('\n');
  if (!hasPhrase(inside, A217_LINE)) die(`${INSIDE_SECTION_ID} closes ${ADVERB_UNIT}'s deferral and does not quote its own wording`);
  if (!namesUnit(inside, ADVERB_UNIT)) die(`${INSIDE_SECTION_ID} does not name ${ADVERB_UNIT}`);
  for (const id of ['fr.sons.alphabet.402', 'fr.sons.voyelles.355']) {
    if (!hasPhrase(inside, PASSE_COMPOSE_ROWS[id]!.fr)) die(`${INSIDE_SECTION_ID} does not draw ${id}`);
  }
  const ago = strings(byId(AGO_SECTION_ID)).join('\n');
  if (!hasPhrase(ago, "J'ai commencé il y a trois jours.")) die(`${TIME_UNIT}'s own sentence is not on the screen that closes its loop`);
  if (!hasPhrase(ago, 'il y a trois jours')) die(`${TIME_UNIT}'s phrase card is not beside it`);
  if (!namesUnit(ago, TIME_UNIT)) die(`the screen that closes ${TIME_UNIT}'s loop does not name it`);
  if (!/how long ago/i.test(ago)) die(`${AGO_SECTION_ID} does not say what it is for`);
  for (const u of [AVOIR_UNIT, NEGATION_UNIT, ER_UNIT, IR_UNIT, RE_UNIT, ADVERB_UNIT, TIME_UNIT, FUTUR_UNIT, IRREGULAR_UNIT, ETRE_UNIT, PRONOUN_UNIT, ...DEPENDENTS]) {
    if (!namesUnit(learnerText, u)) die(`${u} is never named on a learner surface and this lesson leans on it`);
  }
}

/* The sound contrast, and what no ear may be asked. */
{
  const listen = strings(byId(LISTEN_SECTION_ID)).join('\n');
  const which = byId(WHICH_TRAP_SECTION_ID) as { cards?: { fr: string }[]; audio?: { recordingId?: string } } | undefined;
  if (!which) die(`${WHICH_TRAP_SECTION_ID} is missing`);
  for (const f of ['Je vais manger.', "J'ai mangé.", 'Je vais manger avec des amis.', "J'ai mangé avec des amis."]) {
    if (!hasPhrase(listen, f)) die(`${LISTEN_SECTION_ID} does not hold ${JSON.stringify(f)}`);
    if (!(which.cards ?? []).some((c) => c.fr === f)) die(`the tense trap does not carry ${JSON.stringify(f)} as a card`);
  }
  if (!which.audio?.recordingId) die('the tense trap declares no recording, and one take is the whole point of it');
  const ear = qs.filter((q) => q.format === 'listenChoose');
  if (ear.length !== 1) die(`${ear.length} listenChoose questions and this lesson asks exactly one`);
  for (const opts of ear.map((q) => (q.opts ?? []) as string[])) {
    for (let i = 0; i < opts.length; i += 1) {
      for (let j = i + 1; j < opts.length; j += 1) {
        for (const [x, y] of NO_EAR_QUESTION) {
          if (x !== y && opts[i]!.replace(x, y) === opts[j]) die(`ear options differ only by ${x}/${y}, which is one sound`);
        }
      }
    }
  }
  if (!/same sound|one sound/i.test(strings(byId(NOTHEAR_SECTION_ID)).join('\n'))) die(`${NOTHEAR_SECTION_ID} does not say that the pair is one sound`);
}

/* The trapDrills are stepped, and their step labels count their own arrays. */
{
  const RECORDED = new Map((LESSON.audio?.recorded ?? []).map((r) => [r.id, r.clipIds ?? []]));
  const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
  for (const t of LESSON.sections.filter((s) => s.type === 'trapDrill') as unknown as {
    id?: string; swipe?: boolean; say?: string; size?: string;
    steps?: { kind: string; gate?: boolean; label?: string }[]; audio?: { recordingId?: string }; cards?: { fr: string }[];
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
    const cardsStep = (t.steps ?? []).find((s) => s.kind === 'cards');
    const want = WORD[(t.cards ?? []).length];
    if (cardsStep?.label && want && !hasPhrase(cardsStep.label, want)) die(`${t.id}'s cards step is labelled ${JSON.stringify(cardsStep.label)} and it holds ${(t.cards ?? []).length} cards`);
    if (want && !hasPhrase(t.say ?? '', want)) die(`${t.id}'s say does not count its cards`);
  }
}

/* THE TWO CONTRAST TAKES SAY THEY ARE ONE TAKE. FOUND BY MUTATION 15: the test
   pinned them and this layer did not, so a build that stripped the instruction
   went through the merge untouched. The brief names both of these takes by name
   and a constraint on how something is recorded is invisible the moment the
   clip lands. */
{
  const rec = new Map((LESSON.audio?.recorded ?? []).map((r) => [r.id, r.desc]));
  for (const id of ['rec-a2-05-pair', 'rec-a2-05-tense']) {
    const d = rec.get(id);
    if (!d) die(`${id} is one of the two takes the brief requires and the lesson does not brief it`);
    if (!/ONE TAKE/.test(d)) die(`${id} does not say it is one take, and apart the learner compares two performances`);
    if (!/TWO PERFORMANCES/i.test(d)) die(`${id} does not say what recording it apart would cost`);
  }
  if (!/SAME SOUND/i.test(rec.get('rec-a2-05-endings') ?? '')) die('the endings take does not say parler and parlé are the same sound');
  if (!/NO CONTRAST INTENT/i.test(rec.get('rec-a2-05-dictee') ?? '')) die('the dictée take does not forbid a paired reading');
}

/* The dictée, the quiz, the titles and the terms. */
{
  for (const id of PASSE_COMPOSE_DICTEE_IDS) {
    const text = PASSE_COMPOSE.find((x) => x.id === id)?.fr ?? PASSE_COMPOSE_ROWS[id]?.fr;
    if (!text) die(`${id} is a dictée target and is neither authored nor in the manifest`);
    if (dicteeMode(text) !== 'letters') die(`${id} spells in WORD mode`);
  }
  const cannot = PASSE_COMPOSE.filter((r) => dicteeMode(r.fr) === 'words' && r.drills.includes('dictation'));
  if (cannot.length) die(`${cannot.length} rows spell in WORD mode and carry a dictation drill`);
  for (const d of DICTEE_MATRIX) {
    const forms = DICTEE_FORMS[d.person];
    if (!forms) die(`DICTEE_MATRIX names ${d.person} and DICTEE_FORMS has no entry`);
    const [, aff, neg] = forms;
    if (letterCount(`${aff} ${FRAME_PAST}.`) !== d.affirmative) die(`DICTEE_MATRIX disagrees with the real function about ${d.person} affirmative`);
    if (letterCount(`${neg} ${FRAME_PAST}.`) !== d.negative) die(`DICTEE_MATRIX disagrees with the real function about ${d.person} negative`);
    if ((dicteeMode(`${neg} ${FRAME_PAST}.`) === 'letters') !== d.negativeFits) die(`DICTEE_MATRIX disagrees with dicteeMode about ${d.person}`);
  }
  if (DICTEE_MATRIX.filter((d) => d.negativeFits).length !== 6) die('six of the eight negatives fit and the matrix says otherwise');
  if (letterCount(A219_JE_NEGATIVE) !== A219_JE_NEGATIVE_LETTERS) die(`${FUTUR_UNIT}'s je negative is recorded as ${A219_JE_NEGATIVE_LETTERS} letters and the real function disagrees`);
  if (letterCount(A219_JE_NEGATIVE) - letterCount(`${DICTEE_FORMS.je![2]} ${FRAME_PAST}.`) !== 4) die('the elision is recorded as buying four letters and the real function disagrees');

  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq`);
  if (qs.filter((q) => q.format === 'errorSpot').length < 5) die('fewer than five errorSpot questions');
  if (qs.filter((q) => q.format === 'typeIn').length < 10) die('fewer than ten typeIn questions, and the canDo is production');
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
    for (const v of [q.answer, ...(q.accept ?? [])]) {
      for (const [name, re] of ERROR_SHAPES) if (fires(re, v)) die(`a ${q.format} question accepts ${JSON.stringify(v)}, which matches ${name}`);
      for (const w of IRREGULAR_PAST) if (hasPhrase(v, w)) die(`a ${q.format} question accepts ${JSON.stringify(v)}, which holds ${JSON.stringify(w)}`);
    }
  }
  /* THE GENERALISATION TEST. FOUND BY MUTATION 37: the batch and the test both
     assert it and this layer did not, so a build that swapped the unseen verb
     for one the lesson already printed went through the merge untouched. */
  {
    const printedForms = new Set(PASSE_COMPOSE.flatMap((r) => r.fr.toLowerCase().split(/[^\p{L}]+/u)));
    const unseen = qs.filter((q) => q.format === 'typeIn'
      && typeof q.answer === 'string'
      && /^[\p{L}]+$/u.test(q.answer)
      && /(é|i|u)$/.test(q.answer)
      && !printedForms.has(q.answer.toLowerCase()));
    if (!unseen.length) die('no typed question asks for a past form this lesson never printed. That is the generalisation test.');
  }
  const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
  const leads = rounds.map((r) => r.targets[0]);
  if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
  const triggerIds = new Set(PASSE_COMPOSE_ERROR_TRIGGERS.map((t) => t.id));
  const unled = [...triggerIds].filter((t) => !leads.includes(t));
  if (unled.length) die(`${unled.length} triggers lead no round: ${unled.join(', ')}`);
  const drillIds = new Set(PASSE_COMPOSE_DRILLS.map((d) => d.id));
  for (const t of PASSE_COMPOSE_ERROR_TRIGGERS) {
    if (!drillIds.has(t.drill)) die(`${t.id} names an unknown drill`);
    if (t.retest && !drillIds.has(t.retest)) die(`${t.id} names an unknown retest`);
  }
  for (const d of PASSE_COMPOSE_DRILLS) {
    const clean = [
      (d as { coach?: string }).coach ?? '', (d as { title?: string }).title ?? '',
      (d as { why?: string }).why ?? '', ...((d as { pairs?: [string, string][] }).pairs ?? []).flat(),
    ];
    for (const line of clean) {
      for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
        if (fires(re, line)) die(`${d.id} puts ${JSON.stringify(line)} on a surface the learner is told is right, and it matches ${name}`);
      }
    }
    const opts = (d as { opts?: string[]; correct?: number }).opts;
    const correct = (d as { correct?: number }).correct;
    if (opts && typeof correct === 'number') {
      const right = opts[correct] ?? '';
      for (const [name, re] of ERROR_SHAPES) if (fires(re, right)) die(`${d.id} marks ${JSON.stringify(right)} correct and it matches ${name}`);
      if (new Set(opts).size !== opts.length) die(`${d.id} offers the same option twice`);
    }
  }

  for (const s of LESSON.sections) {
    const t = (s as { title?: string }).title ?? '';
    if (t.length > TITLE_MAX) die(`the title ${JSON.stringify(t)} is ${t.length} characters and the hub row cuts at ${TITLE_MAX}`);
    const chips = (s as { terms?: string[] }).terms ?? [];
    if (chips.length > 3) die(`${(s as { id?: string }).id} declares ${chips.length} term chips`);
    for (const name of chips) if (!PASSE_COMPOSE_TERMS[name]) die(`${(s as { id?: string }).id} names an unknown term ${JSON.stringify(name)}`);
    if (chips.length && rowWidth(chips) > TERM_ROW_MAX) die(`${(s as { id?: string }).id} chip row is ${rowWidth(chips)} characters`);
  }
  const usedTerms = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  const orphanTerms = Object.keys(PASSE_COMPOSE_TERMS).filter((k) => !usedTerms.has(k));
  if (orphanTerms.length) die(`${orphanTerms.length} terms are named by no section: ${orphanTerms.join(', ')}`);
  for (const [k, t] of Object.entries(PASSE_COMPOSE_TERMS)) {
    for (const j of JARGON) if (hasPhrase(t.term, j)) die(`the chip label for ${k} holds the jargon ${JSON.stringify(j)}`);
  }
}

/* House copy and jargon, which a2.04's merge did not check at all. */
{
  const houseText = display(LESSON.sections).concat(
    display(LESSON.sheets ?? []), display(LESSON.terms ?? {}),
    [LESSON.intro ?? ''], display(LESSON.overview ?? {}),
    display(LESSON.acts ?? []), display(LESSON.drills ?? []),
    PASSE_COMPOSE.flatMap((r) => [r.fr, r.en, r.notes ?? '']),
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
  /* THE WALK INCLUDES `audio`, AND THE ONE EVERY LESSON IN THIS BAND COPIES
     DOES NOT. Found by the seed-wide `sons-alphabet.test.ts` after all three of
     this build's layers were green; see the note in the batch. */
  const houseCopyText = [houseText, ...strings(LESSON.audio ?? {})].join('\n');
  for (const bad of ['—', '–']) if (houseCopyText.includes(bad)) die('an em or en dash is on an authored surface');
  for (const bad of ['honest', 'honesty', 'honestly']) if (hasPhrase(houseCopyText, bad)) die(`${JSON.stringify(bad)} is banned from authored content, and that includes the audio briefs`);
  for (const tell of ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch']) {
    if (hasPhrase(houseCopyText, tell)) die(`the AI tell ${JSON.stringify(tell)} is on an authored surface`);
  }
  if (houseCopyText.includes('‿')) die('U+203F is on an authored surface');
  if (countPhrase(houseText, 'past form') < 20) die('"past form" is not carried through the lesson, and it is the plain phrase for the word this band bans');
  if (countPhrase(houseText, 'naming form') < 4) die('"naming form" is not carried, and it is a2.02\'s phrase for the thing the past form is contrasted with');
}

/* The reframe, the acts, the false rule and reachability. */
{
  if (LESSON.reframe !== REFRAME) die('the lesson reframe and the corpus constant disagree');
  const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  if (reframeSections < 6) die(`the reframe is carried by ${reframeSections} sections and this lesson was built to carry it in six`);
  {
    const scene = byId(SCENE_SECTION_ID) as { closing?: { text?: string } } | undefined;
    if (scene?.closing?.text !== REFRAME) die(`the scene closes on ${JSON.stringify(scene?.closing?.text)} and the reframe is ${JSON.stringify(REFRAME)}`);
    const trap = byId(GAP_TRAP_SECTION_ID) as { rule?: { body?: string } } | undefined;
    if (!trap?.rule?.body?.includes(REFRAME)) die('the Owns trap\'s rule card does not carry the reframe verbatim');
    const sheetGap = PASSE_COMPOSE_SHEETS[0]!.sections!.find((s) => (s as { id?: string }).id === 'sheet-gap') as { body?: string } | undefined;
    if (!sheetGap?.body?.includes(REFRAME)) die('the reference sheet\'s gap card does not carry the reframe verbatim');
  }
  /* THE FALSE RULE IS NAMED IN EXACTLY ONE PLACE AND IT MUST BE THERE. */
  {
    const FALSE_RULE = /everything else goes between|everything goes in the gap/i;
    for (const s of LESSON.sections) {
      const sid = (s as { id?: string }).id ?? '';
      if (sid === NOAGREE_SECTION_ID) continue;
      for (const line of strings(s)) if (FALSE_RULE.test(line)) die(`${sid} says everything goes in the gap`);
    }
    /* AND OFF THE SECTIONS. FOUND BY MUTATION 21: the false rule went into a
       TERM body, which is a learner surface this walk did not read. */
    for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', LESSON.terms ?? {}], ['intro', LESSON.intro ?? ''], ['overview', LESSON.overview ?? {}]] as const) {
      for (const line of strings(v)) if (FALSE_RULE.test(line)) die(`${label} says everything goes in the gap: ${JSON.stringify(line)}`);
    }
    const noagree = strings(byId(NOAGREE_SECTION_ID)).join('\n');
    if (!FALSE_RULE.test(noagree)) die(`${NOAGREE_SECTION_ID} is where the false rule is named and broken, and it does not name it`);
    if (!hasPhrase(noagree, "J'ai mangé une pomme.")) die(`${NOAGREE_SECTION_ID} does not show the sentence that breaks it`);
  }
  /* AND ONE IMPORTED SENTENCE FROM ANOTHER THEME IS ON A PRODUCTION SURFACE. */
  {
    const scenarioText = strings(byId(SCENARIO_SECTION_ID)).join('\n');
    const used = PUBLISHED_NEGATIVE_IDS.filter((id) => hasPhrase(scenarioText, PASSE_COMPOSE_ROWS[id]!.fr));
    if (!used.length) die('no imported sentence from another theme is used on a production surface');
  }
  const claimed = new Map<string, string>();
  for (const a of PASSE_COMPOSE_ACTS) {
    for (const sid of a.sections) {
      if (!sectionIds.includes(sid)) die(`act ${a.id} names ${sid} and there is no such section`);
      if (claimed.has(sid)) die(`${sid} is claimed by two acts`);
      claimed.set(sid, a.id);
    }
  }
  for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);
  const released = new Set(PASSE_COMPOSE_TRANCHES.flat());
  const ghosts = [...released].filter((id) => !PASSE_COMPOSE_ITEM_IDS.includes(id));
  if (ghosts.length) die(`${ghosts.length} tranche ids are not in itemIds: ${ghosts.join(', ')}`);
  if (PASSE_COMPOSE_TRANCHES.length !== EXPECTED_ACTS) die('one deck tranche per act');
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
  if (reading?.text) {
    for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
      if (fires(re, reading.text)) die(`the reading passage matches ${name}`);
    }
    for (const w of IRREGULAR_PAST) if (hasPhrase(reading.text, w)) die(`the reading passage holds ${JSON.stringify(w)}`);
  }
  const errors = byId(ERRORS_SECTION_ID) as { swipe?: boolean } | undefined;
  if (!errors?.swipe) die('commonErrors without swipe draws a blank screen');
  const noagreeDeck = byId(NOAGREE_SECTION_ID) as { swipe?: boolean } | undefined;
  if (!noagreeDeck?.swipe) die(`${NOAGREE_SECTION_ID} holds the wrong form and has no swipe`);
  if (PASSE_COMPOSE_SHEETS[0]!.sections!.some((s) => s.type === 'cheatSheet')) die('a cheatSheet inside a reference sheet draws nothing');
  if ((PASSE_COMPOSE_SHEETS[0]!.title ?? '').length > SHEET_TITLE_MAX) die('the sheet title is cut in the header bar');
  for (const s of PASSE_COMPOSE_SHEETS[0]!.sections!) {
    const cols = (s as { cols?: string[] }).cols;
    if (cols && cols.length > SHEET_COLS_MAX) die('a four-column table inside a sheet clips');
    for (const r of ((s as { rows?: string[][] }).rows ?? [])) {
      for (const cell of r) if (cell.length > SHEET_CELL_MAX) die(`the sheet cell ${JSON.stringify(cell)} is ${cell.length} characters and this build budgeted ${SHEET_CELL_MAX}`);
    }
  }
}

/* The respellings, the doubled-nasal negative, and the false-positive control. */
{
  let seen = 0; let missed = 0;
  const missedRows: string[] = [];
  const scan = (frStr: string, value: string, id: string) => {
    if (hasPlainNasalFor(frStr, value)) die(`${id} respelled ${JSON.stringify(value)} is flagged by the shared checker`);
    for (let k = 0; k < value.length; k += 1) {
      if (value[k] !== 'ⁿ') continue;
      const broken = `${value.slice(0, k)}n${value.slice(k + 1)}`;
      if (hasPlainNasalFor(frStr, broken)) seen += 1; else { missed += 1; missedRows.push(id); }
    }
  };
  for (const r of PASSE_COMPOSE) scan(r.fr, r.respell ?? '', r.id);
  for (const a of RESPELL_ADDITIONS) scan(a.fr, a.to, a.id);
  if (seen !== EXPECTED_NASALS_SEEN) die(`${seen} nasals the checker can see and the corpus file claims ${EXPECTED_NASALS_SEEN}`);
  if (missed !== EXPECTED_NASALS_MISSED) die(`${missed} nasals the checker cannot see and the corpus file claims ${EXPECTED_NASALS_MISSED}: ${missedRows.join(', ')}`);
  /* a2.14 §1 NAMED THIS LESSON'S SHAPE AS THE NEXT VICTIM AND IT IS NOT. */
  for (const fr of ["J'ai mangé une pomme.", 'Elle a mangé une pomme.']) {
    const row = PASSE_COMPOSE.find((r) => r.fr === fr)!;
    if (!/(?:nn|mm)/i.test(row.fr)) die(`${row.id} is named as a doubled-nasal row and holds no nn or mm`);
    if (!hasPlainNasalFor(row.fr, row.respell!.replace('mahⁿ', 'mahn'))) {
      die(`${row.id} holds a doubled nasal AND the checker cannot see its mahⁿ. a2.14 §1 has bitten.`);
    }
  }
  const fired = FALSE_POSITIVE_CANDIDATES.filter((c) => hasPlainNasalFor(c.fr, c.respell));
  if (fired.length) die(`the false-positive path fires on ${fired.map((c) => c.fr).join(', ')} and this build reports it as an absence`);
  if (!hasPlainNasalFor(FALSE_POSITIVE_CONTROL.fr, FALSE_POSITIVE_CONTROL.respell)) {
    die('the false-positive CONTROL no longer fires, so the six negatives above prove nothing');
  }
  /* AND THE ONE IMPORTED ROW THE CHECKER IS WRONG ABOUT, exempted by name. */
  for (const f of DISPLAYED_FALSE_POSITIVES) {
    const carried = CARRIED.find((r) => r.id === f.id);
    if (!carried) die(`${f.id} is exempted from the nasal check and is not carried`);
    if (carried.respell !== f.respell) die(`${f.id} is exempted by name and its carried value is ${JSON.stringify(carried.respell)}`);
    if (!hasPlainNasalFor(f.fr, f.respell)) die(`${f.id} no longer fires and this by-name exemption can go`);
  }
  for (const r of CARRIED) {
    if (DISPLAYED_FALSE_POSITIVES.some((f) => f.id === r.id)) continue;
    if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} is carried with a flagged respelling: ${JSON.stringify(r.respell)}`);
    if ((r.respell ?? '').includes('‿')) die(`${r.id} is carried with a U+203F tie`);
  }
}

/* The printed figures equal the re-measured read. */
if (NEGATIVE_EVIDENCE.rows !== MEASURED.publishedNegatives) die('NEGATIVE_EVIDENCE and the manifest disagree about the published negatives');
if (NEGATIVE_EVIDENCE.respelled !== MEASURED.publishedNegativesRespelled) die('NEGATIVE_EVIDENCE and the manifest disagree about how many carry a respelling');
if (AFFIRMATIVE_EVIDENCE.rows !== MEASURED.avoirPlusPastForm) die('AFFIRMATIVE_EVIDENCE and the manifest disagree');
if (ADVERB_EVIDENCE.rows !== MEASURED.adverbInGap) die('ADVERB_EVIDENCE and the manifest disagree');
if (MEASURED.infinitiveAfterAvoir !== 0) die('a naming form now appears straight after avoir in the published corpus, and a2.01 kept it clean for this lesson');

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
for (const r of PASSE_COMPOSE) {
  if (!isMine(r.id)) die(`${r.id} is outside ${ID_BLOCK.from}..${ID_BLOCK.to}`);
  if (isA220(r.id)) die(`${r.id} is inside ${IRREGULAR_UNIT}'s reservation ${A220_BLOCK.from}..${A220_BLOCK.to}`);
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
  const released = new Set(PASSE_COMPOSE_TRANCHES.flat());
  const short = [...released].filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = PASSE_COMPOSE_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = PASSE_COMPOSE_DICTEE_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
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
  + '\n    ZERO headwords, ZERO gendered rows and ZERO bare past forms authored or carried.'
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${new Set(MANIFEST_ROWS.map((r) => r.theme)).size} themes, and one of them is avoir itself`
  + `\n  ${ALL_REPAIRS.length} repaired; ${RESPELL_ADDITIONS.length} given a respelling they never had, ${DRILL_ADDITIONS.length} given drills`
  + `\n  ${READ_NOT_IMPORTED.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  dictée: ${PASSE_COMPOSE_DICTEE_IDS.length} targets, all LETTERS`,
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
console.log(`  itemIds resolved: ${PASSE_COMPOSE_ITEM_IDS.length}\n`);
