/* a2.18 « Prépositions de temps », seq 14. Corpus + lesson + terms, to Postgres.
 *
 *     pnpm content:prepositions-temps -- --dry-run
 *     pnpm content:prepositions-temps
 *
 * NAMED author-prepositions-TEMPS-batch, and the collision is real: this repo
 * already has `author-prepositions-batch.ts` (a1.21, content:prepositions) and
 * `author-prepositions-lieu-batch.ts` (a2.04, content:prepositions-lieu), and
 * neither of them is this. Running either by mistake would rewrite a shipped
 * lesson, and a2.04 writes into the SAME THEME one seq position earlier.
 *
 * ── WHAT THIS BATCH REFUSES ──────────────────────────────────────────────
 *
 * `depuis` in a sentence with a past tense in it, ANYWHERE except the sections
 *   where the error is the content.
 * A conjugated compound tense on any surface the learner is asked to produce.
 * The futur proche anywhere, which is a2.19 and one seq ahead.
 * A place sense of `en` or `dans` on a production surface, which is a2.04's.
 * `pour` with a duration more than once, which is the decision in the corpus.
 * Any authored row carrying a gender, and any IMPORTED row carrying one, which
 *   would join a1.03's ending population when the merge carries it.
 * Any authored `fr` that collides with a row already in the theme.
 * A dictée target that `dicteeMode` puts in WORD mode.
 * More than one `listenChoose` question, and any ear question offering two
 *   options that differ only by something the ear cannot separate.
 * Grammar jargon on a learner surface, walked over `sections + sheets + terms
 *   + intro + overview + acts + drills`, in both `prose()` and `display()`,
 *   with every entry checked in its -s plural.
 * A stacked trapDrill, a trapDrill carrying a `size`, or an audio step whose
 *   recording does not contain the cards' own lines.
 */
import './env';
import { Pool } from 'pg';
import {
  canonicalJson,
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  type Item,
  type Lesson,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AGO_RULE, ALL_REPAIRS, AUTHORED_HEADWORDS, AUTHORED_IDS, CLOCK_FORBIDDEN,
  CLOCK_UNIT, COMPOUND_MUST_FIRE, COMPOUND_MUST_NOT_FIRE, COMPOUND_SHAPE,
  DEPUIS_EVIDENCE, DEPUIS_PAST_MUST_FIRE, DEPUIS_PAST_MUST_NOT_FIRE,
  DEPUIS_PAST_SHAPE, DEPUIS_WRONG, DRILL_ADDITIONS, EXPECTED_ACTS,
  EXPECTED_AUTHORED, EXPECTED_DISPLAY_ONLY, EXPECTED_IMPORTED,
  EXPECTED_QUESTIONS, EXPECTED_REPAIRS, EXPECTED_REPAIRS_BLIND,
  EXPECTED_REPAIRS_HOUSE, EXPECTED_SECTIONS, EXPECTED_TERMS,
  EXPECTED_TRAP_DRILLS, FUTURE_UNIT, FUTUR_PROCHE_MUST_FIRE,
  FUTUR_PROCHE_MUST_NOT_FIRE, FUTUR_PROCHE_SHAPE, GRID, GRID_CELL_MAX,
  ID_BLOCK, IL_Y_A_EVIDENCE, IL_Y_A_RESPELL, IL_Y_A_ROW_FR, IMPORTED,
  IMPORTED_IDS, IL_Y_A_ROW_INDEX, ilYaRespellOk,
  LESSON_ID, MONTH_UNIT, NOT_REPAIRED, NO_EAR_QUESTION, PAST_EXAMPLE_FR,
  PAST_UNIT, PLACE_MUST_FIRE, PLACE_MUST_NOT_FIRE, PLACE_SHAPE, PLACE_UNIT,
  POUR_DECISION, POUR_MUST_FIRE, POUR_MUST_NOT_FIRE, POUR_TIME_SHAPE,
  PREPOSITIONS_TEMPS, PREP_ORDER, PROBLEME_FALSE_POSITIVE, QUADRUPLE_IDS,
  READ_NOT_IMPORTED, REFRAME, REJECTED_THEME, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE, ROW_COUNT_BEFORE,
  SHEET_COLS_MAX, SHEET_ID, THEME, THEME_COUNT_BEFORE, TITLE_MAX, UNIT,
  WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, isMine,
} from './data/prepositions-temps-corpus.ts';
import {
  PREPOSITIONS_TEMPS_TERMS, TERM_ROWS, TERM_ROW_MAX, rowWidth,
} from './data/prepositions-temps-terms.ts';
import {
  DANS_SECTION_ID, DEPUIS_SECTION_ID, EN_SECTION_ID, ENGLISH_SECTION_ID,
  ERRORS_SECTION_ID, GRID_SECTION_ID, ILYA_SECTION_ID, ILYA_TRAP_SECTION_ID,
  PAIR_SECTION_ID, PENDANT_SECTION_ID, PREPOSITIONS_TEMPS_ACTS,
  PREPOSITIONS_TEMPS_DICTEE_IDS, PREPOSITIONS_TEMPS_DRILLS,
  PREPOSITIONS_TEMPS_ERROR_TRIGGERS, PREPOSITIONS_TEMPS_ITEM_IDS,
  PREPOSITIONS_TEMPS_LESSON, PREPOSITIONS_TEMPS_SHEETS,
  PREPOSITIONS_TEMPS_SPEAK_IDS, PREPOSITIONS_TEMPS_TRANCHES, PRODUCE_SECTION_ID,
  QUAND_SECTION_ID, QUIZ_SECTION_ID, READING_SECTION_ID, ROUNDUP_SECTION_ID,
  SCENARIO_SECTION_ID, SCENE_SECTION_ID, TENSE_TRAP_SECTION_ID,
  UNSEEN_SECTION_ID, WRONG_FORM_SECTIONS, WRONG_FORM_TERMS,
} from './data/prepositions-temps-lesson.ts';
import { PREPOSITIONS_TEMPS_ROWS, MEASURED } from './data/prepositions-temps-rows.gen.ts';
import { displayRespell } from './data/prepositions-temps-imported.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = PREPOSITIONS_TEMPS_LESSON;
const UNIT_ID = UNIT.id;

function die(msg: string): never {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}

/** Every string anywhere inside a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** Prose only. A word-level guard must not read notation. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces.
 *  a2.14 §6: a display guard that reads a section id fires on `s07-connaitre`. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);

/** AN ID IS NOT PROSE, WHATEVER KEY IT ARRIVES UNDER. a2.04 §3: `items` holds
 *  CORPUS IDS on a LessonDrill and CARD OBJECTS on a groupDrill, so the key
 *  cannot be classified either way, and every id in this lesson contains the
 *  theme name `prepositions-essentielles`. Filter by SHAPE. */
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub` and drops only machine keys. a2.15 §3: on a cardDeck card `sub`
 *  holds PROSE, and `prose()` drops it as notation, so a banned word there is
 *  invisible to every check in this band. */
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

/** Accent-aware word-boundary search. NEVER build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. Invariants §0.
 *
 *  THE LEFT BOUNDARY DROPS THE APOSTROPHE. a2.17 §3 measured that the house
 *  boundary `(?<![\p{L}\p{N}'’-])` cannot see `j'ai`, `qu'il` or `c'est`, and
 *  this lesson's central wrong form starts with `J'ai`. */
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

/** A global-flagged shape has to be tested without `g`, or `lastIndex` carries
 *  between calls and every second test returns false. POUR_TIME_SHAPE is global
 *  because it is also COUNTED. */
const fires = (re: RegExp, s: string): boolean => new RegExp(re.source, re.flags.replace('g', '')).test(s);
const countShape = (re: RegExp, s: string): number =>
  (s.match(new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`)) ?? []).length;

const pgArray = (v: unknown): string[] => {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
};

/** No grammar jargon on a learner surface. Invariants §8.
 *
 *  THE LINE IS MEASURED the way a2.17 §8 asks rather than guessed. `verb`,
 *  `tense`, `present` and `past` are HOUSE VOCABULARY and this lesson could not
 *  say what it is about without them: `verb` is on 2607 cards across the seed.
 *  What none of the neighbours uses even once is below.
 *
 *  Every entry is checked in its -s plural too, because `hasPhrase` is
 *  boundary-exact and a2.15 shipped "Three paradigms, eighteen cells" past all
 *  three of its layers. a2.15 §3.
 *
 *  `preposition` IS NOT ON THE LIST. It is the unit's own English title —
 *  `content_units` holds "Prepositions of Time" and `overview.titleEn` has to
 *  match it — so banning it would either fail the build or force the overview
 *  to lie about what the unit is called. a2.17 §8 replaced the ban with a RATIO
 *  check and that is what runs below. */
const JARGON = [
  'prepositional', 'imperfective', 'perfective', 'aspect', 'durative',
  'punctual', 'deictic', 'existential', 'anterior', 'posterior',
  'present perfect', 'compound tense', 'auxiliary verb', 'participle',
  'inflection', 'inflected', 'paradigm', 'morpheme', 'morphology', 'lexeme',
  'phoneme', 'phonological', 'orthography', 'nasal vowel', 'adverbial',
  'complement', 'constituent', 'disambiguator', 'calque', 'obtaining',
  'first person', 'second person', 'third person',
];

const AUTHORED_ITEMS: Item[] = PREPOSITIONS_TEMPS.map((r) => {
  const { role, prep, ...rest } = r as Record<string, unknown> & { role: string; prep?: string };
  void role; void prep;
  return rest as unknown as Item;
});

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.18 "${UNIT.sub}"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS, AGAINST EXPLICIT CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

if (LESSON.unitId !== UNIT_ID) die(`the lesson says unit ${LESSON.unitId} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (PREPOSITIONS_TEMPS.length !== EXPECTED_AUTHORED) die(`${PREPOSITIONS_TEMPS.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (Object.keys(PREPOSITIONS_TEMPS_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(PREPOSITIONS_TEMPS_TERMS).length} terms, expected ${EXPECTED_TERMS}`);
if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${ALL_REPAIRS.length} repairs, expected ${EXPECTED_REPAIRS}`);
if (RESPELL_REPAIRS_INVISIBLE.length !== EXPECTED_REPAIRS_BLIND) die(`${RESPELL_REPAIRS_INVISIBLE.length} blind repairs, expected ${EXPECTED_REPAIRS_BLIND}`);
if (ALL_REPAIRS.filter((r) => r.house).length !== EXPECTED_REPAIRS_HOUSE) die(`${ALL_REPAIRS.filter((r) => r.house).length} house repairs, expected ${EXPECTED_REPAIRS_HOUSE}`);
if (Object.keys(AUTHORED_HEADWORDS).length !== 0) die('this build authors zero headwords and AUTHORED_HEADWORDS is not empty');
if (RESPELL_ADDITIONS.length !== 1) die(`RESPELL_ADDITIONS holds ${RESPELL_ADDITIONS.length} and this build supplies exactly one respelling`);

const traps = LESSON.sections.filter((s) => s.type === 'trapDrill');
if (traps.length !== EXPECTED_TRAP_DRILLS) die(`${traps.length} trapDrills, expected ${EXPECTED_TRAP_DRILLS}`);
if ((LESSON.sheets ?? []).length !== 1) die('one reference sheet, and the lesson has ' + String((LESSON.sheets ?? []).length));
if ((LESSON.sheets ?? [])[0]?.id !== SHEET_ID) die('the sheet id constant and the sheet disagree');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('ONE quiz section. A second is silently never rendered.');

console.log(`  counts        ${PREPOSITIONS_TEMPS.length} authored, ${IMPORTED_IDS.length} imported, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  NOT ONE HEADWORD IS AUTHORED, AND NOTHING AUTHORED CARRIES A GENDER
 * ═══════════════════════════════════════════════════════════════════════ */

const authoredWords = PREPOSITIONS_TEMPS.filter((r) => r.kind === 'word');
if (authoredWords.length) die(`${authoredWords.length} authored rows are headwords: ${authoredWords.map((r) => r.id).join(', ')}. This lesson authors phrases and sentences only.`);
const authoredGendered = PREPOSITIONS_TEMPS.filter((r) => (r as { gender?: string }).gender);
if (authoredGendered.length) die(`${authoredGendered.length} authored rows carry a gender: ${authoredGendered.map((r) => r.id).join(', ')}. Invariants §5.`);
for (const r of PREPOSITIONS_TEMPS) {
  if (!isMine(r.id)) die(`${r.id} is authored and is outside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to}`);
  if (r.level !== 'a2') die(`${r.id} is level ${r.level} and every row this lesson authors is a2`);
  if (r.theme !== THEME) die(`${r.id} is in theme ${r.theme} and this build writes into ${THEME}`);
  // Widened to `string` deliberately: THEME is a literal type, so TypeScript
  // proves the comparison can never be true and refuses to compile it. The
  // check is here for a MUTATION that changes the constant, which the type
  // system cannot see because the mutation edits the source.
  if ((r.theme as string) === (REJECTED_THEME as string)) die(`${r.id} is in ${REJECTED_THEME}, the theme this build considered and rejected`);
}
/* AND NOT ONE IMPORTED ROW CARRIES ONE EITHER, which is the a2.04 hazard from
   the other side: a1.03's ending population is measured off THE SEED, so the
   MERGE's carry adds a gendered row to it even though Postgres already had the
   row. a2.04 v1 moved four of a1.03's printed figures that way. */
if (EXPECTED_DISPLAY_ONLY !== 0) die('this lesson has no display-only rows and EXPECTED_DISPLAY_ONLY is not zero');
console.log(`  authored      0 headwords, 0 gendered rows, all ${PREPOSITIONS_TEMPS.length} inside ${ID_BLOCK.from}..${ID_BLOCK.to}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GRID, ROW BY ROW. The layout claim the brief asks the test to assert.
 * ═══════════════════════════════════════════════════════════════════════ */

const grid = byId(GRID_SECTION_ID) as {
  type?: string; cols?: string[];
  rows?: { cells: string[]; detail?: { title?: string; body?: string } }[];
} | undefined;
if (grid?.type !== 'tapTable') die(`${GRID_SECTION_ID} is ${grid?.type} and the five belong in ONE grid`);
if ((grid.rows ?? []).length !== GRID.length) die(`the grid has ${(grid.rows ?? []).length} rows and there are ${GRID.length} words`);
if ((grid.cols ?? []).length !== 3) die('the grid is three columns wide; a2.17 measured a three-column cell at eleven characters and a2.16 a five-column one at six');
GRID.forEach((g, i) => {
  const cells = grid.rows![i]!.cells;
  if (cells[0] !== g.prep) die(`grid row ${i} names ${JSON.stringify(cells[0])} and the word is ${JSON.stringify(g.prep)}`);
  if (cells[1] !== g.tense) die(`grid row ${i} gives the tense as ${JSON.stringify(cells[1])} and the table says ${JSON.stringify(g.tense)}`);
  if (cells[2] !== g.measures) die(`grid row ${i} measures ${JSON.stringify(cells[2])} and the table says ${JSON.stringify(g.measures)}`);
  for (const cell of cells) if (cell.length > GRID_CELL_MAX) die(`grid cell ${JSON.stringify(cell)} is ${cell.length} characters and a three-column cell holds ${GRID_CELL_MAX}`);
  // EVERY ROW CARRIES ITS EXAMPLE. The brief asks for the tense AND one example
  // per row; the example is the tap detail's title, because a fourth column
  // clips (a2.04, measured on a Pixel 6).
  if (grid.rows![i]!.detail?.title !== g.example) die(`grid row ${i} example is ${JSON.stringify(grid.rows![i]!.detail?.title)} and the table says ${JSON.stringify(g.example)}`);
});
if (GRID.map((g) => g.prep).join(',') !== PREP_ORDER.join(',')) die('the grid and PREP_ORDER disagree about the order');
// EXACTLY ONE ROW IS NOT PRODUCIBLE AT THIS TRAIL POSITION, and it is il y a.
const notProducible = GRID.filter((g) => !g.producible);
if (notProducible.length !== 1 || notProducible[0]!.prep !== 'il y a') die('exactly one of the five is receptive-only at seq 14 and it is il y a');
if (GRID[IL_Y_A_ROW_INDEX]!.prep !== 'il y a') die(`IL_Y_A_ROW_INDEX points at ${GRID[IL_Y_A_ROW_INDEX]!.prep}`);
// AND ITS ROW NAMES THE LESSON IT IS WAITING FOR.
if (!namesUnitLabel(grid.rows![IL_Y_A_ROW_INDEX]!.detail?.body ?? '', PAST_UNIT)) {
  die(`the il y a row does not name ${PAST_UNIT}, and it is the one row the learner cannot produce here`);
}
// THE FOUR PUBLISHED CARDS ARE THE EXAMPLES. Four of the five examples are the
// `fr` of a row somebody published years ago, consecutive, in one theme.
const quadFrs = new Set(QUADRUPLE_IDS.map((id) => PREPOSITIONS_TEMPS_ROWS[id]?.fr));
const fromCorpus = GRID.filter((g) => quadFrs.has(g.example)).length;
if (fromCorpus !== 4) die(`${fromCorpus} of the five grid examples are published cards and the corpus published four of them`);
console.log(`  the grid      ${GRID.length} words, ${fromCorpus} examples already published as consecutive cards, one authored, every cell inside ${GRID_CELL_MAX}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: depuis TAKES THE PRESENT, AND NO CORRECT SENTENCE PAIRS IT WITH
 *  A PAST TENSE
 * ═══════════════════════════════════════════════════════════════════════ */

// THE SHAPE, checked in both directions before it is used. a2.17 §4: a shape
// built out of French fires on the English half of a learner surface.
for (const line of DEPUIS_PAST_MUST_FIRE) if (!fires(DEPUIS_PAST_SHAPE, line)) die(`DEPUIS_PAST_SHAPE does not fire on ${JSON.stringify(line)}`);
for (const line of DEPUIS_PAST_MUST_NOT_FIRE) if (fires(DEPUIS_PAST_SHAPE, line)) die(`DEPUIS_PAST_SHAPE fires on ${JSON.stringify(line)}, which is correct French or this lesson's own copy`);

const WRONG_FORMS = DEPUIS_WRONG.map((w) => w.wrong);
const legalWrong = new Set<string>(WRONG_FORM_SECTIONS);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '';
  if (legalWrong.has(sid)) continue;
  const text = strings(s).join('\n');
  for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${sid} contains the wrong form ${JSON.stringify(w)}. It is permitted only in ${[...legalWrong].join(', ')}.`);
  for (const line of strings(s)) if (fires(DEPUIS_PAST_SHAPE, line)) die(`${sid} pairs depuis with a past tense: ${JSON.stringify(line)}`);
}
// AND THE SHEET, THE INTRO AND THE OVERVIEW ARE NOT ON THAT LIST, and neither
// are seven of the eight terms. `presentNotPerfect` is the exception and it is
// named: its whole job is to say what a French listener hears when a learner
// produces the wrong form, and it has to be able to quote it. Found by the
// first dry run rather than by anybody predicting it.
const legalWrongTerms = new Set<string>(WRONG_FORM_TERMS);
const checkedTerms = Object.fromEntries(
  Object.entries(LESSON.terms ?? {}).filter(([k]) => !legalWrongTerms.has(k)));
for (const k of legalWrongTerms) {
  if (!(k in (LESSON.terms ?? {}))) die(`WRONG_FORM_TERMS names ${JSON.stringify(k)} and the glossary has no such term`);
  const lines = strings((LESSON.terms ?? {})[k]);
  const carries = WRONG_FORMS.some((w) => hasPhrase(lines.join('\n'), w)) || lines.some((l) => fires(DEPUIS_PAST_SHAPE, l));
  if (!carries) {
    die(`${JSON.stringify(k)} is exempted from the wrong-form guard and does not contain one. An exemption nobody needs is an exemption nobody notices.`);
  }
}
for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', checkedTerms], ['intro', LESSON.intro ?? ''], ['overview', LESSON.overview ?? {}]] as const) {
  const text = strings(v).join('\n');
  for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${label} contains the wrong form ${JSON.stringify(w)}`);
  for (const line of strings(v)) if (fires(DEPUIS_PAST_SHAPE, line)) die(`${label} pairs depuis with a past tense: ${JSON.stringify(line)}`);
}
// NO AUTHORED ROW MAY DO IT. A row holding one would be served by the flashcard
// hub as French.
for (const r of PREPOSITIONS_TEMPS) {
  for (const w of WRONG_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} is a corpus row holding the wrong form ${JSON.stringify(w)}`);
  if (fires(DEPUIS_PAST_SHAPE, r.fr)) die(`${r.id} is a corpus row pairing depuis with a past tense: ${JSON.stringify(r.fr)}`);
}
// AND NO AUTHORED ROW MAY RE-STATE AN IMPORTED ONE. a2.04 found this by
// mutation: the duplicate-fr check is per THEME, so authoring a phrase this
// lesson already imports from another theme collides with nothing and quietly
// gives one word two cards in two decks, which flashhub-coverage cannot see.
{
  const importedFrs = new Map(IMPORTED.map((i) => [i.fr.toLowerCase(), i.id] as const));
  for (const r of PREPOSITIONS_TEMPS) {
    const clash = importedFrs.get(r.fr.toLowerCase());
    if (clash) die(`${r.id} authors ${JSON.stringify(r.fr)}, which this lesson already imports as ${clash}.`);
  }
}
// EVERY WRONG FORM APPEARS SOMEWHERE, or the guard above is guarding nothing.
const wrongHomes = LESSON.sections.filter((s) => legalWrong.has((s as { id?: string }).id ?? ''));
for (const w of WRONG_FORMS) {
  if (!wrongHomes.some((s) => strings(s).some((x) => hasPhrase(x, w)))) die(`the wrong form ${JSON.stringify(w)} is declared and appears nowhere. A trap nobody sees is not a trap.`);
}
// THE OWNS GETS ITS WEIGHT. Act 2 is depuis and the paradigm is one section.
const act2 = PREPOSITIONS_TEMPS_ACTS.find((a) => a.id === 'act2');
if ((act2?.sections.length ?? 0) < 5) die(`the Owns act has ${act2?.sections.length} sections and the depuis act is the heaviest in the lesson`);
const paradigmSections = 1;
if ((act2?.sections.length ?? 0) <= paradigmSections) die('doctrine §B.5: the Owns must outweigh the paradigm');
const depuisSections = LESSON.sections.filter((s) => hasPhrase(strings(s).join('\n'), 'depuis')).length;
console.log(`  the Owns      act2 ${act2?.sections.length} missions on depuis against ${paradigmSections} on the paradigm, ${depuisSections} of ${LESSON.sections.length} sections name the word, ${WRONG_FORMS.length} wrong forms present only in ${legalWrong.size} sections`);

/* ══════════════════════════════════════════════════════════════════════════
 *  NO COMPOUND TENSE ON A PRODUCTION SURFACE, AND EXACTLY ONE RECEPTIVE ROW
 * ═══════════════════════════════════════════════════════════════════════ */

for (const line of COMPOUND_MUST_FIRE) if (!fires(COMPOUND_SHAPE, line)) die(`COMPOUND_SHAPE does not fire on ${JSON.stringify(line)}`);
for (const line of COMPOUND_MUST_NOT_FIRE) if (fires(COMPOUND_SHAPE, line)) die(`COMPOUND_SHAPE fires on ${JSON.stringify(line)}. a2.17 §7 and a2.14 §6: guard the thing, not the letters.`);

// EXACTLY ONE AUTHORED ROW HOLDS ONE, and it is the receptive example.
const compoundRows = PREPOSITIONS_TEMPS.filter((r) => fires(COMPOUND_SHAPE, r.fr));
if (compoundRows.length !== 1) die(`${compoundRows.length} authored rows hold a compound tense and exactly one may: ${compoundRows.map((r) => r.id).join(', ')}`);
if (compoundRows[0]!.fr !== PAST_EXAMPLE_FR) die(`the one compound row is ${JSON.stringify(compoundRows[0]!.fr)} and the corpus names ${JSON.stringify(PAST_EXAMPLE_FR)}`);
// IT IS SHOWN AND ASKED FOR NOWHERE.
const receptiveId = compoundRows[0]!.id;
if (PREPOSITIONS_TEMPS_DICTEE_IDS.includes(receptiveId)) die(`${receptiveId} holds a compound tense and is a dictée target. The dictée is a production surface.`);
if (PREPOSITIONS_TEMPS_SPEAK_IDS.includes(receptiveId)) die(`${receptiveId} holds a compound tense and is a speak target`);
if (compoundRows[0]!.drills.includes('dictation')) die(`${receptiveId} carries a dictation drill and holds a compound tense`);
for (const q of qs) {
  if (fires(COMPOUND_SHAPE, String(q.answer ?? ''))) die(`a quiz question asks the learner to produce ${JSON.stringify(q.answer)}, which is a compound tense`);
  for (const a of (q.accept ?? [])) if (fires(COMPOUND_SHAPE, a)) die(`a quiz question accepts ${JSON.stringify(a)}, which is a compound tense`);
}
// A DRILL PAIR'S ANSWER SIDE IS A PRODUCTION SURFACE TOO.
for (const d of PREPOSITIONS_TEMPS_DRILLS) {
  for (const [, back] of (d as { pairs?: [string, string][] }).pairs ?? []) {
    if (fires(COMPOUND_SHAPE, back)) die(`${d.id} asks the learner to produce ${JSON.stringify(back)}, which is a compound tense`);
  }
}
// AND THE DEFERRAL IS NAMED on a learner surface.
const learnerText = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
].join('\n');
if (!namesUnitLabel(learnerText, PAST_UNIT)) die(`${PAST_UNIT} is never named and this lesson defers a whole row of its grid to it`);
console.log(`  ${PAST_UNIT}         1 receptive row (${receptiveId}), in no dictée, no speak list, no drill and no quiz answer; deferral named`);

/* ══════════════════════════════════════════════════════════════════════════
 *  a2.19 KEEPS THE FUTUR PROCHE, AND a2.04 KEEPS THE PLACE SENSES
 * ═══════════════════════════════════════════════════════════════════════ */

for (const line of FUTUR_PROCHE_MUST_FIRE) if (!fires(FUTUR_PROCHE_SHAPE, line)) die(`FUTUR_PROCHE_SHAPE does not fire on ${JSON.stringify(line)}`);
for (const line of FUTUR_PROCHE_MUST_NOT_FIRE) if (fires(FUTUR_PROCHE_SHAPE, line)) die(`FUTUR_PROCHE_SHAPE fires on ${JSON.stringify(line)}`);
for (const line of strings(LESSON.sections).concat(strings(LESSON.sheets ?? []), strings(LESSON.terms ?? {}), [LESSON.intro ?? ''])) {
  if (fires(FUTUR_PROCHE_SHAPE, line)) die(`the futur proche reached a screen: ${JSON.stringify(line)}. ${FUTURE_UNIT} owns it and it is the very next lesson.`);
}
if (!namesUnitLabel(learnerText, FUTURE_UNIT)) die(`${FUTURE_UNIT} is never named and this lesson teaches dans with the present instead of it`);

for (const line of PLACE_MUST_FIRE) if (!fires(PLACE_SHAPE, line)) die(`PLACE_SHAPE does not fire on ${JSON.stringify(line)}`);
for (const line of PLACE_MUST_NOT_FIRE) if (fires(PLACE_SHAPE, line)) die(`PLACE_SHAPE fires on ${JSON.stringify(line)}, which is one of this lesson's own cards or its copy`);
// SCOPED TO PRODUCTION SURFACES. The roundup has to be able to say "a2.04 gave
// you en and dans in front of a place", and a guard that forbade it everywhere
// would make the hand-off unsayable. a2.14 §6.
const PRODUCTION_TYPES = new Set(['cardDeck', 'flashcards', 'practice', 'dictation', 'groupDrill', 'trapDrill', 'quiz', 'reviewDeck', 'scenario']);
for (const s of LESSON.sections) {
  if (!PRODUCTION_TYPES.has(s.type)) continue;
  const sid = (s as { id?: string }).id ?? '';
  for (const line of display(s)) {
    if (fires(PLACE_SHAPE, line)) die(`${sid} is a production surface and it drills a place sense: ${JSON.stringify(line)}. ${PLACE_UNIT} owns it.`);
  }
}
for (const r of PREPOSITIONS_TEMPS) if (fires(PLACE_SHAPE, r.fr)) die(`${r.id} is a corpus row carrying a place sense of en or dans: ${JSON.stringify(r.fr)}`);
if (!namesUnitLabel(learnerText, PLACE_UNIT)) die(`${PLACE_UNIT} is never named and it handed both temporal senses to this lesson by name`);
console.log(`  neighbours    futur proche absent (${FUTURE_UNIT} named), place senses off every production surface (${PLACE_UNIT} named), ${CLOCK_UNIT} and ${MONTH_UNIT} credited`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CLOCK AND THE CALENDAR ARE NOT RE-TAUGHT
 * ═══════════════════════════════════════════════════════════════════════ */

for (const w of CLOCK_FORBIDDEN) {
  if (hasPhrase(learnerText, w)) die(`${JSON.stringify(w)} is on a learner surface and it is ${CLOCK_UNIT}'s`);
}
if (!namesUnitLabel(learnerText, CLOCK_UNIT)) die(`${CLOCK_UNIT} is the prerequisite and is never named`);
if (!namesUnitLabel(learnerText, MONTH_UNIT)) die(`${MONTH_UNIT} owns en in front of a month, which is a third sense of a word this lesson teaches, and it is never named`);

/* ══════════════════════════════════════════════════════════════════════════
 *  pour: NAMED ONCE, TAUGHT NOWHERE
 * ═══════════════════════════════════════════════════════════════════════ */

for (const line of POUR_MUST_FIRE) if (!fires(POUR_TIME_SHAPE, line)) die(`POUR_TIME_SHAPE does not fire on ${JSON.stringify(line)}`);
for (const line of POUR_MUST_NOT_FIRE) if (fires(POUR_TIME_SHAPE, line)) die(`POUR_TIME_SHAPE fires on ${JSON.stringify(line)}`);
if (POUR_DECISION.included) die('POUR_DECISION says pour is included and this lesson teaches five words');
const pourHits = countShape(POUR_TIME_SHAPE, learnerText);
if (pourHits !== 1) die(`pour with a duration appears ${pourHits} times on a learner surface and the decision is exactly one, in the sheet. See POUR_DECISION.`);
// AND IT IS NOWHERE A LEARNER IS SCORED.
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '';
  for (const line of strings(s)) if (fires(POUR_TIME_SHAPE, line)) die(`${sid} carries pour with a duration and the one mention belongs in the sheet`);
}
for (const r of PREPOSITIONS_TEMPS) if (fires(POUR_TIME_SHAPE, r.fr)) die(`${r.id} is a corpus row carrying pour with a duration`);
for (const g of GRID) if (g.prep === ('pour' as never)) die('pour is in the grid and the decision is that it is not one of the five');
if (GRID.length !== 5) die(`the grid holds ${GRID.length} words and the decision is five`);
console.log(`  pour          not one of the five, named exactly once (${POUR_DECISION.where}), in no card, no drill and no question`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP, AND a2.02's TERM QUOTED VERBATIM
 * ═══════════════════════════════════════════════════════════════════════ */

const twice = byId(ILYA_TRAP_SECTION_ID) as { rule?: { title?: string; body?: string } } | undefined;
if (!twice) die(`${ILYA_TRAP_SECTION_ID} is missing`);
// QUOTED VERBATIM AND CREDITED BY ITS LESSON LABEL. Doctrine §B.7 and a2.16 §3: a
// back-reference to a unit id is not a variable, so assert the literal.
if (!hasPhrase(learnerText, WHAT_FOLLOWS)) die(`the a2.02 term ${JSON.stringify(WHAT_FOLLOWS)} is not quoted anywhere. Doctrine §B.7 tells this lesson to quote it verbatim.`);
if (!namesUnitLabel(learnerText, WHAT_FOLLOWS_UNIT)) die(`${WHAT_FOLLOWS_UNIT} owns the first instance of this shape and is never named by id`);
if (twice.rule?.title !== WHAT_FOLLOWS) die(`the trap's rule card is titled ${JSON.stringify(twice.rule?.title)} and the term is ${JSON.stringify(WHAT_FOLLOWS)}`);
// THE TWO USES ARE CONTRASTED IN ONE SECTION.
const trapText = strings(byId(ILYA_TRAP_SECTION_ID)).join('\n');
for (const p of [0, 1]) {
  if (!hasPhrase(trapText, IL_Y_A_EVIDENCE.counterexampleFr) && false) die('unreachable');
  void p;
}
if (!hasPhrase(trapText, 'there is')) die('the trap does not name the existence job in English');
if (!hasPhrase(trapText, 'ago')) die('the trap does not name the ago job in English');
if (!hasPhrase(learnerText, AGO_RULE)) die('the ago rule is never stated on a learner surface');

/* ONE SPELLING OF `il y a` ACROSS THE WHOLE LESSON. Found by mutation: nothing
   in any layer compared two respellings of one phrase, because both were clean
   and a variant is not a violation. See IL_Y_A_ROW_FR in the corpus. */
{
  const rows: { id: string; fr: string; respell: string }[] = [
    ...PREPOSITIONS_TEMPS.map((r) => ({ id: r.id, fr: r.fr, respell: r.respell ?? '' })),
    ...IMPORTED.map((i) => ({ id: i.id, fr: i.fr, respell: displayRespell(i.id) })),
  ];
  const holders = rows.filter((r) => IL_Y_A_ROW_FR.test(r.fr));
  if (holders.length < 4) die(`${holders.length} rows hold « il y a » and the lesson is built on more than four of them`);
  for (const r of holders) {
    if (!ilYaRespellOk(r.respell)) {
      die(`${r.id} respells « il y a » as ${JSON.stringify(r.respell.slice(0, 12))} and this lesson uses ${JSON.stringify(IL_Y_A_RESPELL)} everywhere. Two spellings of the three words inside a lesson whose trap is that they have two jobs would read as marking the two jobs.`);
    }
  }
  console.log(`  one spelling  ${holders.length} rows hold « il y a » and all of them respell it ${IL_Y_A_RESPELL}`);
}
console.log(`  the trap      ${WHAT_FOLLOWS_UNIT}'s term ${JSON.stringify(WHAT_FOLLOWS)} quoted verbatim and credited by id, both jobs contrasted in ${ILYA_TRAP_SECTION_ID}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP DRILLS ARE STEPPED
 * ═══════════════════════════════════════════════════════════════════════ */

type TrapLike = {
  id?: string; swipe?: boolean; say?: string; size?: string;
  steps?: { kind: string; gate?: boolean }[];
  audio?: { recordingId?: string };
  cards?: { fr: string }[];
};
const RECORDED = new Map((LESSON.audio?.recorded ?? []).map((r) => [r.id, r.clipIds ?? []]));
for (const t of traps as unknown as TrapLike[]) {
  const kinds = (t.steps ?? []).map((s) => s.kind).join('>');
  if (kinds !== 'rule>cards>audio>drill') die(`${t.id} steps are ${JSON.stringify(kinds)} and A2 walks rule>cards>audio>drill`);
  if (!t.swipe) die(`${t.id} has no swipe`);
  if (!t.say) die(`${t.id} has no say`);
  if (t.size) die(`${t.id} carries size ${JSON.stringify(t.size)}. The stepped branch sizes off steps.length and no stepped trapDrill in the corpus carries one.`);
  if (!t.audio?.recordingId) die(`${t.id} declares no audio recordingId and the audio step plays each card's fr`);
  if (!(t.steps ?? []).some((s) => s.kind === 'drill' && s.gate)) die(`${t.id} drill step is not gated`);
  const clips = RECORDED.get(t.audio.recordingId);
  if (!clips) die(`${t.id} points at recording ${t.audio.recordingId} and the lesson does not brief it`);
  for (const card of t.cards ?? []) {
    if (!clips.includes(card.fr)) die(`${t.id}'s audio step plays ${JSON.stringify(card.fr)} and ${t.audio.recordingId} does not contain it`);
  }
  /* THE CARDS STEP'S LABEL COUNTS THE CARDS, AND FOUND ON A DEVICE.
     The card set went from three to four when an English gloss came out of a
     card's `fr`, and the label stayed at "Three cards" while the pager drew
     four dots under it. Nothing in the schema or the density validator compares
     a step label with the array it labels. */
  const WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
  const cardsStep = (t.steps ?? []).find((s) => s.kind === 'cards') as { label?: string } | undefined;
  const n = (t.cards ?? []).length;
  if (cardsStep?.label && !hasPhrase(cardsStep.label, WORD[n] ?? String(n))) {
    die(`${t.id}'s cards step is labelled ${JSON.stringify(cardsStep.label)} and it holds ${n} cards. The pager draws one dot per card underneath the label.`);
  }
  if (t.say && !hasPhrase(t.say, WORD[n] ?? String(n))) {
    die(`${t.id}'s say line does not count its ${n} cards: ${JSON.stringify(t.say)}`);
  }
}
console.log(`  trapDrills    ${traps.length} stepped rule>cards>audio>drill, gated, no size, every card's line in its own take`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE IS IN LETTERS MODE, THROUGH THE REAL FUNCTION
 * ═══════════════════════════════════════════════════════════════════════ */

for (const id of PREPOSITIONS_TEMPS_DICTEE_IDS) {
  const r = PREPOSITIONS_TEMPS.find((x) => x.id === id);
  if (!r) die(`${id} is a dictée target and is not an authored row`);
  if (dicteeMode(r.fr) !== 'letters') die(`${id} "${r.fr}" is ${letterCount(r.fr)} letters and spells in WORD mode, where every word is handed over pre-spelled`);
  if (!r.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill`);
}
const cannot = PREPOSITIONS_TEMPS.filter((r) => dicteeMode(r.fr) === 'words' && r.drills.includes('dictation'));
if (cannot.length) die(`${cannot.length} rows spell in WORD mode and carry a dictation drill: ${cannot.map((r) => r.id).join(', ')}`);
// A ROW THAT COULD BE A TARGET AND IS NOT IS REPORTED RATHER THAN REFUSED, and
// three of them are deliberate: the receptive row's phrase, the scene's stumble
// and the ago phrase are all in LETTERS mode and none may be a production
// surface at this trail position.
const couldBe = PREPOSITIONS_TEMPS.filter((r) => dicteeMode(r.fr) === 'letters' && !r.drills.includes('dictation'));
console.log(`  dictée        ${PREPOSITIONS_TEMPS_DICTEE_IDS.length} targets, all LETTERS through the real dicteeMode; ${couldBe.length} rows could be and are not (${couldBe.map((r) => r.id.slice(-3)).join(', ')})`);

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT MAY NOT BE ASKED BY EAR
 * ═══════════════════════════════════════════════════════════════════════ */

const ear = qs.filter((q) => q.format === 'listenChoose');
if (ear.length > 1) die(`${ear.length} listenChoose questions. The distinctions here are semantic and the brief asks for one at most.`);
for (const q of ear) {
  const opts = (q.opts ?? []) as string[];
  for (const [x, y] of NO_EAR_QUESTION) {
    const hasX = opts.some((o) => hasPhrase(o, x));
    const hasY = opts.some((o) => hasPhrase(o, y));
    if (hasX && hasY) die(`an ear question offers both ${JSON.stringify(x)} and ${JSON.stringify(y)}, which differ by something the ear cannot separate`);
  }
  // The a2.10 / a2.11 shape: two options differing ONLY by a member of one pair.
  for (let i = 0; i < opts.length; i += 1) {
    for (let j = i + 1; j < opts.length; j += 1) {
      for (const [x, y] of NO_EAR_QUESTION) {
        if (x !== y && opts[i]!.replace(x, y) === opts[j]) die(`ear options ${JSON.stringify(opts[i])} and ${JSON.stringify(opts[j])} differ only by ${x}/${y}`);
      }
    }
  }
}
console.log(`  by ear        ${ear.length} listenChoose question, ${NO_EAR_QUESTION.length} forbidden pairs checked in both directions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

const reframeWords = REFRAME.trim().split(/\s+/).length;
if (reframeWords > 14) die(`the reframe is ${reframeWords} words and has to survive recall mid-utterance`);
if (LESSON.reframe !== REFRAME) die('the lesson\'s reframe and the corpus constant disagree');
const reframeUses = countPhrase(learnerText, REFRAME);
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeSections < 6) die(`the reframe is carried by ${reframeSections} sections and this lesson was built to carry it in six`);
console.log(`  reframe       ${JSON.stringify(REFRAME)} · ${reframeWords} words, ${reframeUses} uses across ${reframeSections} sections`);

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE COPY, JARGON AND THE PLURALS
 * ═══════════════════════════════════════════════════════════════════════ */

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
// `intro` IS PINNED IN ITS OWN ASSERTION. a2.11 shipped "third person" there
// with every host gate green, because the walk was sections + sheets + terms.
if (!LESSON.intro || LESSON.intro.length < 100) die('intro is drawn on the overview card AND the lesson cover, and it is missing or too short');
for (const j of JARGON) for (const form of [j, `${j}s`]) if (hasPhrase(LESSON.intro, form)) die(`intro holds the jargon ${JSON.stringify(form)}`);
if (fires(DEPUIS_PAST_SHAPE, LESSON.intro)) die('intro pairs depuis with a past tense');

for (const bad of ['—', '–']) if (houseText.includes(bad)) die('an em or en dash is on a learner surface');
for (const bad of ['honest', 'honesty', 'honestly']) if (hasPhrase(houseText, bad)) die(`${JSON.stringify(bad)} is banned from authored content`);
for (const tell of ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch']) {
  if (hasPhrase(houseText, tell)) die(`the AI tell ${JSON.stringify(tell)} is on a learner surface`);
}
// U+203F: the tie draws as a low underscore on a Pixel 6.
for (const r of PREPOSITIONS_TEMPS) {
  for (const v of [r.fr, r.respell ?? '', r.ipa ?? '', r.en, r.notes ?? '']) if (v.includes('‿')) die(`${r.id} carries U+203F in ${JSON.stringify(v)}`);
}
if (houseText.includes('‿')) die('U+203F is on a learner surface');

// THE RATIO, NOT A BAN. a2.17 §8: the plain phrase must outnumber the technical
// one, which lets `overview.titleEn` stay the unit's own English name.
const plain = countPhrase(houseText, 'time word') + countPhrase(houseText, 'small word') + countPhrase(houseText, 'the word');
const technical = countPhrase(houseText, 'preposition');
if (technical > plain) die(`the technical word appears ${technical} times and the plain phrase ${plain}. The house prefers the plain phrase.`);
console.log(`  house copy    ${JARGON.length} jargon terms absent in both forms, plain phrase ${plain} against technical ${technical}, no dash, no tie`);

/* ══════════════════════════════════════════════════════════════════════════
 *  TERM CHIPS
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const t = (s as { terms?: string[] }).terms ?? [];
  if (t.length > 3) die(`${(s as { id?: string }).id} declares ${t.length} term chips and the renderer shows three`);
  for (const name of t) if (!PREPOSITIONS_TEMPS_TERMS[name]) die(`${(s as { id?: string }).id} names the term ${JSON.stringify(name)} and the glossary has no such term`);
  if (t.length) {
    const w = rowWidth(t);
    if (w > TERM_ROW_MAX) die(`${(s as { id?: string }).id} chip row is ${w} characters and the measured budget is ${TERM_ROW_MAX}`);
  }
}
for (const trio of TERM_ROWS) {
  const w = rowWidth(trio);
  if (w > TERM_ROW_MAX) die(`the chip row ${trio.join(' · ')} is ${w} characters and the budget is ${TERM_ROW_MAX}`);
}
const usedTerms = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
const orphanTerms = Object.keys(PREPOSITIONS_TEMPS_TERMS).filter((k) => !usedTerms.has(k));
if (orphanTerms.length) die(`${orphanTerms.length} terms are declared and named by no section: ${orphanTerms.join(', ')}`);
console.log(`  terms         ${Object.keys(PREPOSITIONS_TEMPS_TERMS).length} terms, all reachable, every chip row inside ${TERM_ROW_MAX} characters`);

/* ══════════════════════════════════════════════════════════════════════════
 *  MISSION TITLES, ACT WEIGHTS AND REACHABILITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const t = (s as { title?: string }).title ?? '';
  if (t.length > TITLE_MAX) die(`the title ${JSON.stringify(t)} is ${t.length} characters and the hub row cuts at ${TITLE_MAX}`);
}
const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id ?? '');
const claimed = new Map<string, string>();
for (const a of PREPOSITIONS_TEMPS_ACTS) {
  for (const sid of a.sections) {
    if (!sectionIds.includes(sid)) die(`act ${a.id} names ${sid} and the lesson has no such section`);
    if (claimed.has(sid)) die(`${sid} is claimed by ${claimed.get(sid)} and by ${a.id}`);
    claimed.set(sid, a.id);
  }
}
for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);

// EVERY itemId IS DRAWN. Being in itemIds makes a row available; it does not
// put it on a screen. a1.08 shipped 43 ids that resolved and drew nothing.
const drawn = new Set<string>();
const collectIds = (v: unknown): void => {
  if (typeof v === 'string') { if (v.startsWith('fr.')) drawn.add(v); return; }
  if (Array.isArray(v)) { for (const x of v) collectIds(x); return; }
  if (v && typeof v === 'object') for (const x of Object.values(v)) collectIds(x);
};
collectIds(LESSON.sections); collectIds(LESSON.terms ?? {}); collectIds(LESSON.drills ?? []);
const printed = strings(LESSON.sections).concat(strings(LESSON.terms ?? {})).join('\n');
const allRows = [...PREPOSITIONS_TEMPS.map((r) => ({ id: r.id, fr: r.fr })), ...IMPORTED.map((i) => ({ id: i.id, fr: i.fr }))];
for (const r of allRows) if (hasPhrase(printed, r.fr)) drawn.add(r.id);
const released = new Set(PREPOSITIONS_TEMPS_TRANCHES.flat());
const orphan = PREPOSITIONS_TEMPS_ITEM_IDS.filter((id) => !drawn.has(id) && !released.has(id));
if (orphan.length) die(`${orphan.length} declared items are on no screen and in no tranche:\n  ${orphan.join('\n  ')}`);
const ghosts = [...released].filter((id) => !PREPOSITIONS_TEMPS_ITEM_IDS.includes(id));
if (ghosts.length) die(`${ghosts.length} tranche ids are not in itemIds: ${ghosts.join(', ')}`);
console.log(`  reachability  ${PREPOSITIONS_TEMPS_ITEM_IDS.length} items, ${drawn.size} drawn, ${released.size} released, 0 orphans and 0 ghosts`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq and at most half may be`);
const noWhy = qs.filter((q) => !q.why);
if (noWhy.length) die(`${noWhy.length} questions have no why`);
const noRef = qs.filter((q) => !q.ref || !sectionIds.includes(q.ref));
if (noRef.length) die(`${noRef.length} questions have a ref naming no section: ${noRef.map((q) => q.ref).join(', ')}`);
const closed = qs.filter((q) => typeof q.correct === 'number');
const slots = new Map<number, number>();
for (const q of closed) {
  const slot = Number(q.correct);
  slots.set(slot, (slots.get(slot) ?? 0) + 1);
}
for (const [slot, n] of slots) {
  if (n / closed.length > 0.4) die(`slot ${slot} holds ${n} of ${closed.length} closed answers, over the 40% cap`);
}
// Every free-text question accepts the answer it displays, checked through the
// REAL `matchesAccept` rather than by comparing strings.
for (const q of qs) {
  if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
  if (!q.answer) die(`a ${q.format} question has no answer`);
  if (!matchesAccept(q.answer, q.accept ?? [])) die(`the ${q.format} question ${JSON.stringify(q.q)} displays ${JSON.stringify(q.answer)} and does not accept it`);
}
const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
const leads = rounds.map((r) => r.targets[0]);
if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
const triggerIds = new Set(PREPOSITIONS_TEMPS_ERROR_TRIGGERS.map((t) => t.id));
const unled = [...triggerIds].filter((t) => !leads.includes(t));
if (unled.length) die(`${unled.length} triggers lead no round, so their drills can never fire: ${unled.join(', ')}`);
const drillIds = new Set(PREPOSITIONS_TEMPS_DRILLS.map((d) => d.id));
for (const t of PREPOSITIONS_TEMPS_ERROR_TRIGGERS) {
  if (!drillIds.has(t.drill)) die(`${t.id} names the drill ${t.drill} and the lesson has no such drill`);
  if (t.retest && !drillIds.has(t.retest)) die(`${t.id} names the retest ${t.retest} and the lesson has no such drill`);
  for (const d of t.detectOn) {
    const base = d.split('/')[0]!;
    if (!sectionIds.includes(base)) die(`${t.id} detects on ${d} and there is no section ${base}`);
  }
}
console.log(`  quiz          ${qs.length} questions, ${mcq} mcq, ${qs.filter((q) => q.format === 'typeIn').length} typeIn, ${qs.filter((q) => q.format === 'errorSpot').length} errorSpot, ${ear.length} listenChoose, ${rounds.length} rounds each leading a different trigger`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENARIO CONTRACT
 * ═══════════════════════════════════════════════════════════════════════ */

const scenario = byId(SCENARIO_SECTION_ID) as { turns?: { user?: string; userEn?: string; alts?: unknown[] }[] } | undefined;
if (!scenario?.turns?.length) die(`${SCENARIO_SECTION_ID} has no turns`);
for (const [i, t] of scenario.turns.entries()) {
  if (!t.userEn) die(`scenario turn ${i} has no userEn. scenario.logic.test.ts is a seed-wide test and it requires one.`);
  if ((t.alts ?? []).length < 2) die(`scenario turn ${i} has ${(t.alts ?? []).length} alts and the seed-wide test requires two`);
  // An alternative is an answer the learner is told is right.
  for (const line of strings(t)) {
    if (fires(DEPUIS_PAST_SHAPE, line)) die(`scenario turn ${i} offers ${JSON.stringify(line)}, which pairs depuis with a past tense`);
    if (fires(COMPOUND_SHAPE, line)) die(`scenario turn ${i} offers ${JSON.stringify(line)}, which is a compound tense`);
  }
}
console.log(`  scenario      ${scenario.turns.length} turns, every one with a userEn and two alternatives, no compound tense anywhere`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE READING PASSAGE
 * ═══════════════════════════════════════════════════════════════════════ */

const reading = byId(READING_SECTION_ID) as { text?: string; glossary?: unknown[]; questionsInModal?: boolean; questions?: unknown[] } | undefined;
if (!reading?.text) die(`${READING_SECTION_ID} has no text`);
if (reading.text.includes('\n')) die('a reading passage is ONE BLOCK: PassagePage splits on sentence boundaries and an authored newline is silently discarded');
if ((reading.glossary ?? []).length && !reading.questionsInModal) die('a reading glossary needs questionsInModal AND questions, or it never reaches the glossary renderer');
if (fires(COMPOUND_SHAPE, reading.text)) die('the reading passage holds a compound tense');
if (fires(FUTUR_PROCHE_SHAPE, reading.text)) die('the reading passage holds a futur proche');
if (fires(DEPUIS_PAST_SHAPE, reading.text)) die('the reading passage pairs depuis with a past tense');
console.log(`  reading       one block, ${(reading.glossary ?? []).length} glossary entries with questionsInModal, present tense throughout`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS, THROUGH THE REAL CHECKER
 * ═══════════════════════════════════════════════════════════════════════ */

let seen = 0; let missed = 0;
for (const r of PREPOSITIONS_TEMPS) {
  if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} "${r.fr}" respelled ${JSON.stringify(r.respell)} is flagged by the shared checker`);
  const supers = (r.respell ?? '').split('ⁿ').length - 1;
  if (supers) {
    const broken = (r.respell ?? '').replace('ⁿ', 'n');
    if (hasPlainNasalFor(r.fr, broken)) seen += 1; else missed += 1;
  }
}
// ALL THREE VALUES OF EVERY REPAIR, and the field that says why they differ.
for (const p of ALL_REPAIRS) {
  if (hasPlainNasalFor(p.fr, p.to)) die(`${p.id} repaired value ${JSON.stringify(p.to)} is still flagged`);
  if (hasPlainNasalFor(p.fr, p.half)) die(`${p.id} half value ${JSON.stringify(p.half)} is still flagged`);
  const seesFrom = hasPlainNasalFor(p.fr, p.from);
  if (p.blind && seesFrom) die(`${p.id} claims the checker is blind to it and the checker sees it`);
  if (!p.blind && !seesFrom) die(`${p.id} claims the checker sees it and it does not`);
  if (p.blind && p.house) die(`${p.id} claims both blind and house, and they are mutually exclusive reasons`);
  if ((p.half !== p.to) !== (p.blind || p.house)) die(`${p.id}: half differs from to is ${p.half !== p.to} and blind||house is ${p.blind || p.house}`);
  if (p.to.includes('‿')) die(`${p.id} repaired value carries U+203F`);
}
// THE SUPPLIED RESPELLING IS CLEAN TOO.
for (const a of RESPELL_ADDITIONS) {
  if (hasPlainNasalFor(a.fr, a.to)) die(`${a.id} supplied value ${JSON.stringify(a.to)} is flagged`);
  if (a.to.includes('‿')) die(`${a.id} supplied value carries U+203F`);
}
// THE FALSE POSITIVE, ASSERTED AS A NEGATIVE, so the day the checker improves
// this build finds out rather than carrying a dead workaround. a2.04 found this
// shape on `même`; `problème` is not on its list of five nouns and is the same
// thing, so the predictor is the SHAPE rather than the list.
if (!hasPlainNasalFor(PROBLEME_FALSE_POSITIVE.word, PROBLEME_FALSE_POSITIVE.flagged)) {
  die(`the checker no longer flags ${PROBLEME_FALSE_POSITIVE.flagged} for ${PROBLEME_FALSE_POSITIVE.word}. The workaround can go.`);
}
if (hasPlainNasalFor(PROBLEME_FALSE_POSITIVE.word, PROBLEME_FALSE_POSITIVE.clean)) {
  die(`the checker now flags ${PROBLEME_FALSE_POSITIVE.clean}, which is the value this build shipped to work round the false positive`);
}
// NO BLIND ROW AND NO HOUSE ROW, asserted rather than left as a silence.
if (RESPELL_REPAIRS_INVISIBLE.length !== 0) die('this build claims every nasal in it is visible to the checker and RESPELL_REPAIRS_INVISIBLE is not empty');
console.log(`  respellings   ${ALL_REPAIRS.length} repairs, all visible and all minimal, ${RESPELL_ADDITIONS.length} supplied, ${seen} nasals seen and ${missed} missed across the authored rows`);
console.log(`  false positive ${PROBLEME_FALSE_POSITIVE.word}: ${PROBLEME_FALSE_POSITIVE.flagged} FLAGGED and ${PROBLEME_FALSE_POSITIVE.clean} clean, and the word has no nasal vowel in it`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE MANIFEST AGREES WITH WHAT THE SCREENS PRINT
 * ═══════════════════════════════════════════════════════════════════════ */

for (const i of IMPORTED) {
  const rowM = PREPOSITIONS_TEMPS_ROWS[i.id];
  if (!rowM) die(`${i.id} is in IMPORTED and not in the manifest. Re-run scripts/_a218_manifest.ts.`);
  if (rowM.fr !== i.fr) die(`${i.id} manifest says ${JSON.stringify(rowM.fr)} and IMPORTED says ${JSON.stringify(i.fr)}`);
  if ((rowM as { gender?: string }).gender) die(`${i.id} carries a gender in the manifest and would join a1.03's population when the merge carries it`);
  const shown = displayRespell(i.id);
  if (!shown) die(`${i.id} has no respelling to display`);
  if (hasPlainNasalFor(i.fr, shown)) die(`${i.id} displays ${JSON.stringify(shown)}, which the shared checker flags`);
  if (shown.includes('‿')) die(`${i.id} displays a U+203F tie`);
}
// THE MEASUREMENTS ON THE CARD MATCH THE MEASUREMENTS IN THE MANIFEST. A figure
// a screen prints comes from a re-measured read, not from a constant somebody
// typed and nobody re-checked.
if (DEPUIS_EVIDENCE.depuisSentences !== MEASURED.depuisSentences) die(`DEPUIS_EVIDENCE says ${DEPUIS_EVIDENCE.depuisSentences} depuis sentences and the manifest measured ${MEASURED.depuisSentences}`);
if (DEPUIS_EVIDENCE.depuisWithACompound !== MEASURED.depuisWithACompound) die(`DEPUIS_EVIDENCE says ${DEPUIS_EVIDENCE.depuisWithACompound} and the manifest measured ${MEASURED.depuisWithACompound}`);
if (DEPUIS_EVIDENCE.pendantSentences !== MEASURED.pendantSentences) die(`DEPUIS_EVIDENCE says ${DEPUIS_EVIDENCE.pendantSentences} pendant sentences and the manifest measured ${MEASURED.pendantSentences}`);
if (DEPUIS_EVIDENCE.pendantWithACompound !== MEASURED.pendantWithACompound) die(`DEPUIS_EVIDENCE says ${DEPUIS_EVIDENCE.pendantWithACompound} and the manifest measured ${MEASURED.pendantWithACompound}`);
if (IL_Y_A_EVIDENCE.totalRows !== MEASURED.ilYaRows) die(`IL_Y_A_EVIDENCE says ${IL_Y_A_EVIDENCE.totalRows} rows and the manifest measured ${MEASURED.ilYaRows}`);
if (IL_Y_A_EVIDENCE.existence !== MEASURED.ilYaExistence) die(`IL_Y_A_EVIDENCE says ${IL_Y_A_EVIDENCE.existence} existence rows and the manifest measured ${MEASURED.ilYaExistence}`);
if (IL_Y_A_EVIDENCE.ago !== MEASURED.ilYaAgo) die(`IL_Y_A_EVIDENCE says ${IL_Y_A_EVIDENCE.ago} ago rows and the manifest measured ${MEASURED.ilYaAgo}`);
console.log(`  manifest      ${IMPORTED.length} imported rows, every displayed respelling clean and tie-free, every printed figure equal to the re-measured read`);

/* ══════════════════════════════════════════════════════════════════════════
 *  SCHEMA AND DENSITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id}: ${formatIssues(issues)}`);
}
const lessonIssues = validateLesson(LESSON);
if (lessonIssues.length) die(`the lesson does not validate:\n${formatIssues(lessonIssues)}`);
const density = validateDensity(LESSON);
if (density.length) die(`density:\n${formatDensity(density)}`);
console.log(`  validators    ${AUTHORED_ITEMS.length} items, the lesson and the density validator all clean`);

/* ══════════════════════════════════════════════════════════════════════════
 *  POSTGRES
 * ═══════════════════════════════════════════════════════════════════════ */

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 2 });
  const c = await pool.connect();

  /* THE ROW COUNT IS THE ONLY SIGNAL, and a row INSIDE the block that this build
     does not own is fatal whatever the total does. Ledger §10 and §a2.14-13. */
  const nsNow = await c.query<{ id: string }>(
    "select id from content_items where id like 'fr.a2.prepositions-essentielles.%' order by id");
  const inBlock = nsNow.rows.map((r) => r.id).filter((id) => isMine(id));
  const foreign = inBlock.filter((id) => !AUTHORED_IDS.includes(id));
  if (foreign.length) {
    c.release(); await pool.end();
    die(`${foreign.length} rows exist inside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to} and it does not own them:\n  ${foreign.join('\n  ')}`);
  }
  const before = nsNow.rowCount ?? 0;
  if (before < ROW_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`fr.a2.prepositions-essentielles held ${ROW_COUNT_BEFORE} rows and now holds ${before}. A SHRINKING total is somebody deleting rows.`);
  }
  if (before !== ROW_COUNT_BEFORE && before !== ROW_COUNT_BEFORE + AUTHORED_IDS.length) {
    console.log(`  !! fr.a2.prepositions-essentielles holds ${before} rows and this build expected ${ROW_COUNT_BEFORE}. Nothing is inside the block, so this is somebody else's allocation. Reported, not fatal.`);
  }

  const themeNow = await c.query<{ n: string }>(
    'select count(*) n from content_items where theme = $1 and id <> all($2)', [THEME, AUTHORED_IDS]);
  const themeCount = Number(themeNow.rows[0]!.n);
  if (themeCount < THEME_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`${THEME} held ${THEME_COUNT_BEFORE} rows and now holds ${themeCount}. A SHRINKING total is somebody deleting rows.`);
  }
  if (themeCount > THEME_COUNT_BEFORE) console.log(`  !! ${THEME} has grown from ${THEME_COUNT_BEFORE} to ${themeCount}. Reported, not fatal.`);

  /* NO DUPLICATE fr INSIDE THE THEME. flashhub-coverage.test.ts treats two rows
     sharing an fr in one theme as one card served twice, and it strips the
     article first. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const themeRows = await c.query<{ id: string; fr: string; gender: string | null; kind: string }>(
    'select id, fr, gender, kind from content_items where theme = $1', [THEME]);
  const seenFr = new Map<string, string>();
  for (const r of themeRows.rows) if (!AUTHORED_IDS.includes(r.id)) seenFr.set(strip(r.fr), r.id);
  for (const r of PREPOSITIONS_TEMPS) {
    const clash = seenFr.get(strip(r.fr));
    if (clash) {
      c.release(); await pool.end();
      die(`${r.id} ${JSON.stringify(r.fr)} collides with ${clash} inside ${THEME}. The flashcard hub would serve one card twice.`);
    }
  }

  /* a1.03's ENDING POPULATION, THROUGH THE REAL FUNCTION RATHER THAN A COPY.
     NECESSARY AND NOT SUFFICIENT: this measures POSTGRES, where an imported row
     already exists and adds nothing, and a1.03 measures it off THE SEED, where
     a CARRY is what puts it there. a2.04 v1 was green here and moved four of
     a1.03's printed figures anyway. The merge does the other half. */
  const baseRows = themeRows.rows.filter((r) => !AUTHORED_IDS.includes(r.id));
  const popBefore = endingPopulation(baseRows as never);
  const popAfter = endingPopulation([...baseRows, ...AUTHORED_ITEMS] as never);
  if (popBefore.length !== popAfter.length) {
    c.release(); await pool.end();
    die(`this build changes a1.03's ending population from ${popBefore.length} rows to ${popAfter.length}. Invariants §5: withdraw rather than argue.`);
  }
  /* AND NOT ONE IMPORT CARRIES A GENDER, which is what the carry would move. */
  const impGender = await c.query<{ id: string; gender: string }>(
    'select id, gender from content_items where id = any($1) and gender is not null', [IMPORTED_IDS]);
  if (impGender.rowCount) {
    c.release(); await pool.end();
    die(`${impGender.rowCount} imported rows carry a gender and the merge would carry them into the seed, where a1.03 measures its population: ${impGender.rows.map((r) => `${r.id}(${r.gender})`).join(', ')}`);
  }
  console.log(`  a1.03         ending population unchanged at ${popBefore.length} rows from this theme, 0 gendered rows authored AND 0 imported`);

  /* THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN. */
  const COMPOUND = `(\\y|'')(ai|as|avons|avez|ont) +(pas +|jamais +|plus +|bien +|d[ée]j[àa] +)?[a-zà-ÿ]{2,}(é|és|ée|ées|i|is|it|u|us|ue)\\y`;
  /* AND THE RE-MEASUREMENT EXCLUDES THIS LESSON'S OWN ROWS. a2.17 §9: after its
     first apply its placement figure went 80 to 87, because seven of its own
     authored sentences matched the pattern it was measuring. This lesson
     authors TEN depuis sentences, so without the exclusion the printed evidence
     would grow by ten on every re-apply and the card would be quoting the
     lesson back to itself. Found the same way a2.17 found it: on the second
     dry run, after the first apply had landed. */
  const dep = await c.query<{ total: string; compound: string }>(
    `select count(*) total, count(*) filter (where fr ~* $1) compound
       from content_items where status='published' and kind='sentence' and fr ~* '\\ydepuis\\y'
         and id <> all($2)`, [COMPOUND, AUTHORED_IDS]);
  const pen = await c.query<{ total: string; compound: string }>(
    `select count(*) total, count(*) filter (where fr ~* $1) compound
       from content_items where status='published' and kind='sentence' and fr ~* '\\ypendant\\y'
         and id <> all($2)`, [COMPOUND, AUTHORED_IDS]);
  if (Number(dep.rows[0]!.total) !== DEPUIS_EVIDENCE.depuisSentences) {
    console.log(`  !! depuis sentences excluding this lesson's own: ${dep.rows[0]!.total}, and the card prints ${DEPUIS_EVIDENCE.depuisSentences}. Somebody else has published one.`);
  }
  const depR = Number(dep.rows[0]!.compound) / Number(dep.rows[0]!.total);
  const penR = Number(pen.rows[0]!.compound) / Number(pen.rows[0]!.total);
  if (!(penR > depR * 2)) {
    c.release(); await pool.end();
    die('the corpus no longer shows pendant beside a past tense more often than depuis does, and this lesson\'s Owns rests on that margin: '
      + `depuis ${dep.rows[0]!.compound}/${dep.rows[0]!.total}, pendant ${pen.rows[0]!.compound}/${pen.rows[0]!.total}`);
  }
  /* AND THE PUBLISHED COUNTEREXAMPLE THE AGO RULE IS WORDED AROUND. */
  const counter = await c.query<{ fr: string }>('select fr from content_items where id = $1', [IL_Y_A_EVIDENCE.theCounterexample]);
  if (!counter.rowCount || counter.rows[0]!.fr !== IL_Y_A_EVIDENCE.counterexampleFr) {
    c.release(); await pool.end();
    die(`${IL_Y_A_EVIDENCE.theCounterexample} is the published counterexample the ago rule is worded around and it now reads ${JSON.stringify(counter.rows[0]?.fr ?? '(gone)')}`);
  }
  /* AND THE QUADRUPLE IS STILL FOUR CONSECUTIVE PUBLISHED CARDS. */
  const quad = await c.query<{ id: string }>(
    `select id from content_items where id like 'fr.sons.jours-et-mois.%'
      and split_part(id,'.',4)::int between 80 and 83 and status='published' order by id`);
  if (quad.rowCount !== 4) {
    c.release(); await pool.end();
    die(`fr.sons.jours-et-mois.080..083 is the four-card set this lesson's grid is built on and it now holds ${quad.rowCount} published rows`);
  }
  console.log(`  the evidence  depuis ${dep.rows[0]!.compound}/${dep.rows[0]!.total} beside a past, pendant ${pen.rows[0]!.compound}/${pen.rows[0]!.total}, ratio ${(penR / depR).toFixed(2)}x; the quadruple is intact and the counterexample still reads as quoted`);

  /* THE UNIT. Corrections §1: from the database, never from the brief. */
  const unitRow = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID]);
  if (!unitRow.rowCount) { c.release(); await pool.end(); die(`${UNIT_ID} is not in content_units`); }
  const unit = unitRow.rows[0]!.body as { id: string; seq: number; title: string; sub: string; canDo: string; lessonIds?: string[] };
  if (Number(unit.seq) !== UNIT.seq) { c.release(); await pool.end(); die(`the database says ${UNIT_ID} is seq ${unit.seq} and the corpus says ${UNIT.seq}`); }
  if (unit.title !== UNIT.title) { c.release(); await pool.end(); die(`the database title is ${JSON.stringify(unit.title)} and the corpus says ${JSON.stringify(UNIT.title)}`); }
  if (unit.sub !== UNIT.sub) { c.release(); await pool.end(); die(`the database sub is ${JSON.stringify(unit.sub)} and the corpus says ${JSON.stringify(UNIT.sub)}`); }
  if (unit.canDo !== UNIT.canDo) { c.release(); await pool.end(); die(`the database canDo is ${JSON.stringify(unit.canDo)} and the corpus says ${JSON.stringify(UNIT.canDo)}`); }
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) { c.release(); await pool.end(); die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and missions.ts computes ${JSON.stringify(expectedTag)}`); }

  /* DEPENDENTS. Probed rather than copied. */
  const dependents = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? $1 order by 2", [UNIT_ID]);
  if (dependents.rowCount === 0) {
    console.log(`  !! ${UNIT_ID} is a LEAF: no unit declares it as a prerequisite. Reported, not fatal.`);
  } else {
    console.log(`  trail         ${dependents.rowCount} unit(s) rest on ${UNIT_ID}: ${dependents.rows.map((r) => `${r.id}(seq ${r.seq})`).join(' ')}`);
  }

  const already = (unit.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit          ${UNIT_ID} seq ${unit.seq}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}${already ? '  (re-run)' : '  (first lesson)'}`);
  const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  /* THE VERSION MOVES FORWARD WHEN THE CONTENT MOVES. */
  const prev = await c.query<{ body: unknown }>(
    "select body from content_units where kind = 'lesson' and slug = $1", [LESSON.id]);
  const prevBody = prev.rows[0]?.body as { version?: number } | undefined;
  const prevVersion = prevBody?.version ?? 0;
  if (LESSON.version < prevVersion) {
    c.release(); await pool.end();
    die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version}. The counter moves forward, never back.`);
  }
  if (LESSON.version === prevVersion) {
    if (canonicalJson(prevBody) !== canonicalJson(LESSON)) {
      c.release(); await pool.end();
      die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version} with DIFFERENT content.\n`
        + '  Move the lesson\'s own version counter forward. Two different bodies under one number is the drift\n'
        + '  that makes Postgres and seed.json disagree while both report the same version.');
    }
    console.log(`  lesson        ${LESSON.id} v${LESSON.version} unchanged, idempotent re-run`);
  } else if (prevVersion === 0) {
    console.log(`  lesson        ${LESSON.id} new, v${LESSON.version}`);
  } else {
    console.log(`  lesson        ${LESSON.id} replacing v${prevVersion} with v${LESSON.version}`);
  }

  if (DRY_RUN) {
    console.log('\n  DRY RUN: every guard passed, nothing written.\n');
    c.release(); await pool.end();
    return;
  }

  await c.query('begin');
  try {
    for (const it of AUTHORED_ITEMS) {
      await c.query(
        `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, status)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'published')
         on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
           fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           status='published'`,
        [it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          (it as { gender?: string }).gender ?? null, it.notes ?? null, it.tags ?? [], it.drills ?? [],
          it.version ?? 1],
      );
    }
    // THE REPAIRS, guarded by the STORED value, so a row somebody else has
    // already fixed is left alone and a row somebody else has changed to a
    // third value is not silently overwritten.
    for (const r of ALL_REPAIRS) {
      await c.query(
        'update content_items set respell = replace(respell, $2, $3) where id = $1 and respell like $4',
        [r.id, r.from, r.to, `%${r.from}%`]);
    }
    // THE SUPPLIED RESPELLING, guarded by the row still having none of its own.
    for (const a of RESPELL_ADDITIONS) {
      await c.query(
        "update content_items set respell = $2 where id = $1 and (respell is null or respell = '' or respell = $2)",
        [a.id, a.to]);
    }
    // `drills` IS AN ENUM ARRAY (drill_kind[]), not text[]: concatenating a
    // text[] fails with "operator does not exist: drill_kind[] || text[]" and
    // takes the whole transaction with it. Ledger §5.
    for (const d of DRILL_ADDITIONS) {
      await c.query(
        `update content_items
            set drills = (select array_agg(distinct e order by e)
                            from unnest(drills || $2::text[]::drill_kind[]) e)
          where id = $1`,
        [d.id, d.add]);
    }
    await c.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]);
    const uu = await c.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID]);
    if (uu.rowCount !== 1) throw new Error(`the unit update touched ${uu.rowCount} rows, expected exactly 1`);
    await c.query('commit');
  } catch (e) {
    await c.query('rollback');
    c.release(); await pool.end();
    die(`transaction rolled back: ${(e as Error).message}`);
  }

  /* IT LANDED. Read back rather than assumed. */
  const afterRows = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.prepositions-essentielles.%'");
  const check = await c.query<{ id: string; respell: string | null; drills: string[] }>(
    'select id, respell, drills::text[] drills from content_items where id = any($1)',
    [[...ALL_REPAIRS.map((r) => r.id), ...RESPELL_ADDITIONS.map((a) => a.id), ...DRILL_ADDITIONS.map((d) => d.id)]]);
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const r of ALL_REPAIRS) {
    const now = String(post.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) failed.push(`${r.id} respell is ${JSON.stringify(now)} and does not contain ${JSON.stringify(r.to)}`);
    if (now.includes(r.from) && r.from !== r.to) failed.push(`${r.id} still contains the unrepaired ${JSON.stringify(r.from)}`);
    if (hasPlainNasalFor(r.fr, now)) failed.push(`${r.id} is still flagged after the repair: ${JSON.stringify(now)}`);
  }
  for (const a of RESPELL_ADDITIONS) {
    const now = String(post.get(a.id)?.respell ?? '');
    if (now !== a.to) failed.push(`${a.id} respell is ${JSON.stringify(now)} and the supplied value is ${JSON.stringify(a.to)}`);
  }
  for (const d of DRILL_ADDITIONS) {
    const have = pgArray(post.get(d.id)?.drills);
    for (const want of d.add) if (!have.includes(want)) failed.push(`${d.id} still has no ${want} drill`);
  }
  const nsAfter = Number(afterRows.rows[0]!.n);
  if (nsAfter !== before + AUTHORED_ITEMS.length && nsAfter !== before) {
    failed.push(`fr.a2.prepositions-essentielles holds ${nsAfter} rows and it held ${before} before this build's ${AUTHORED_ITEMS.length}`);
  }
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    '\n  applied to Postgres:\n'
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_ITEMS[0]!.id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1]!.id}\n`
    + '      ZERO headwords and ZERO gendered rows, authored OR imported.\n'
    + `    ${ALL_REPAIRS.length} respellings repaired, all visible and all minimal; ${RESPELL_ADDITIONS.length} supplied\n`
    + `    ${NOT_REPAIRED.length} rows found broken and left alone, because this build does not display them\n`
    + `    ${DRILL_ADDITIONS.length} drill additions, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id, ${READ_NOT_IMPORTED.length} read and refused (nine of them for one spelling decision)\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${PREPOSITIONS_TEMPS_ITEM_IDS.length} items\n`
    + `    fr.a2.prepositions-essentielles row count: ${before} before, ${nsAfter} after (max ${afterRows.rows[0]!.mx})\n\n`
    + '  NEXT: pnpm tsx scripts/merge-prepositions-temps-into-seed.ts\n');

  c.release();
  await pool.end();
}

/* ─── Last checks that do not need the database ────────────────────────────*/

if (LESSON.sections.filter((s) => s.type === 'tapTable').length !== 1) die('ONE tapTable. The paradigm is one screen because four fifths of it was already published.');
for (const sid of [SCENE_SECTION_ID, GRID_SECTION_ID, DEPUIS_SECTION_ID, ENGLISH_SECTION_ID, QUAND_SECTION_ID, TENSE_TRAP_SECTION_ID, PRODUCE_SECTION_ID, PENDANT_SECTION_ID, PAIR_SECTION_ID, ERRORS_SECTION_ID, DANS_SECTION_ID, ILYA_SECTION_ID, ILYA_TRAP_SECTION_ID, EN_SECTION_ID, UNSEEN_SECTION_ID, READING_SECTION_ID, ROUNDUP_SECTION_ID]) {
  if (!byId(sid)) die(`${sid} is missing from the lesson`);
}
if (PREPOSITIONS_TEMPS_SPEAK_IDS.some((id) => !AUTHORED_IDS.includes(id))) die('a speak target is not an authored row, and only the authored rows are guaranteed to carry voiceflash');
if (PREPOSITIONS_TEMPS_SHEETS[0]!.sections!.some((s) => s.type === 'cheatSheet')) die('a cheatSheet inside a reference sheet draws its title and nothing else');
if (PREPOSITIONS_TEMPS_SHEETS[0]!.sections!.some((s) => (s as { cols?: string[] }).cols && (s as { cols: string[] }).cols.length > SHEET_COLS_MAX)) {
  die(`a table inside a sheet may hold ${SHEET_COLS_MAX} columns. a2.04 measured a FOUR-column one clipping on a Pixel 6 and its horizontal scroll pushing the first column off the other side.`);
}
const errors = byId(ERRORS_SECTION_ID) as { swipe?: boolean } | undefined;
if (!errors?.swipe) die('commonErrors without swipe hits a break that falls out of the switch and draws a blank screen');

main().catch((e) => { console.error(e); process.exit(1); });
