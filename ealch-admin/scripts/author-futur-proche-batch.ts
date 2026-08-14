/* a2.19 « Le futur proche », seq 15. Corpus + lesson + terms, to Postgres.
 *
 *     pnpm content:futur-proche -- --dry-run
 *     pnpm content:futur-proche
 *
 * ── WHAT THIS BATCH REFUSES ──────────────────────────────────────────────
 *
 * `pas` after the naming form, ANYWHERE except the six sections where the error
 *   is the content, and never on a corpus row at all.
 * The affirmative and the negative in different sections. They are asserted as
 *   ADJACENT PAIRS in one section, which is the layout claim the brief makes.
 * A conjugated one-word future anywhere, which is beyond A2 entirely.
 * A conjugated compound tense anywhere, which is a2.05 and one seq ahead.
 * The dropped `ne` on any production surface: no dictée, no speak list, no
 *   typed answer. a1.18 introduced it for reception only.
 * A second verb with an ending on it.
 * Any authored row carrying a gender, and any IMPORTED row carrying one, which
 *   would join a1.03's ending population when the merge carries it.
 * Any authored `fr` that collides with a row already in the theme.
 * A dictée target that `dicteeMode` puts in WORD mode.
 * More than one `listenChoose` question, and any ear question offering two
 *   options the ear cannot separate.
 * Grammar jargon on a learner surface, walked over `sections + sheets + terms
 *   + intro + overview + acts + drills`, in both `prose()` and `display()`,
 *   with every entry checked in its -s plural.
 * A stacked trapDrill, a trapDrill carrying a `size`, or an audio step whose
 *   recording does not contain the cards' own lines.
 */
import './env';
import { Pool } from 'pg';
import {
  canonicalJson, formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  A118_NE_DROP, A118_REFRAME, A213_REFRAME, AFFIRMATIVE_EVIDENCE, ALL_REPAIRS,
  ALLER_UNIT, AUTHORED_HEADWORDS, BREAK_BUDGET,
  AUTHORED_IDS, BLIND_NASAL, COMPOUND_MUST_FIRE, COMPOUND_MUST_NOT_FIRE,
  COMPOUND_SHAPE, DICTEE_LIMIT, DICTEE_MATRIX, DRILL_ADDITIONS,
  EXPECTED_ACTS, EXPECTED_AUTHORED,
  EXPECTED_DISPLAY_ONLY, EXPECTED_IMPORTED, EXPECTED_NASALS_MISSED,
  EXPECTED_NASALS_SEEN, EXPECTED_QUESTIONS, EXPECTED_REPAIRS,
  EXPECTED_SECTIONS, EXPECTED_SOURCE_THEMES, EXPECTED_TERMS,
  EXPECTED_TRAP_DRILLS, FALSE_POSITIVE_CANDIDATES, FRAME_VERB,
  FUTUR_PROCHE, FUTUR_SIMPLE_MUST_FIRE, FUTUR_SIMPLE_MUST_NOT_FIRE,
  FUTUR_SIMPLE_SHAPE, GRID_CELL_MAX, ID_BLOCK, IMPORTED, IMPORTED_IDS,
  HOUSE_CHROME_FUTURE, LESSON_ID, MODAL_UNIT, NEGATION_UNIT, NEGATIVE_EVIDENCE,
  NE_DROP_FR,
  NOT_REPAIRED, NO_EAR_QUESTION, OTHER_FUTURE, PAIRS, PAS_AFTER_INFINITIVE,
  PAS_AFTER_MUST_FIRE, PAS_AFTER_MUST_NOT_FIRE, PAST_UNIT, PERSONS,
  PLACE_UNIT, PUBLISHED_NEGATIVE_IDS, READ_NOT_IMPORTED, REFRAME,
  REJECTED_THEME, RESPELL_ADDITIONS, ROW_COUNT_BEFORE, SHEET_CELL_MAX,
  SHEET_COLS_MAX, SHEET_ID, SHEET_TITLE_MAX, THEME, THEME_COUNT_BEFORE,
  TIME_UNIT, TITLE_MAX, UNIT, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, WRONG, isMine,
} from './data/futur-proche-corpus.ts';
import { FUTUR_PROCHE_TERMS, TERM_ROWS, TERM_ROW_MAX, rowWidth } from './data/futur-proche-terms.ts';
import {
  ANY_SECTION_ID, DICTATION_SECTION_ID, ENGLISH_SECTION_ID, ERRORS_SECTION_ID,
  FUTUR_PROCHE_ACTS, FUTUR_PROCHE_DICTEE_IDS, FUTUR_PROCHE_DRILLS,
  FUTUR_PROCHE_ERROR_TRIGGERS, FUTUR_PROCHE_ITEM_IDS, FUTUR_PROCHE_LESSON,
  FUTUR_PROCHE_SCENE_BEATS, FUTUR_PROCHE_SHEETS, FUTUR_PROCHE_SPEAK_IDS,
  FUTUR_PROCHE_TRANCHES, HEAR_SECTION_ID, MODALS_SECTION_ID, PAIR_SECTION_ID,
  PLACE_SECTION_ID,
  PRODUCE_SECTION_ID, QUIZ_SECTION_ID, READING_SECTION_ID, ROUNDUP_SECTION_ID,
  SCENARIO_SECTION_ID, SCENE_SECTION_ID, SHAPE_SECTION_ID, SIX_SECTION_ID,
  TWICE_TRAP_SECTION_ID, UNSEEN_SECTION_ID, WHEN_SECTION_ID,
  WHERE_TRAP_SECTION_ID, WRONG_FORM_SECTIONS,
} from './data/futur-proche-lesson.ts';
import { FUTUR_PROCHE_ROWS, MEASURED } from './data/futur-proche-rows.gen.ts';
import { displayRespell } from './data/futur-proche-imported.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = FUTUR_PROCHE_LESSON;
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

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);

/** AN ID IS NOT PROSE, WHATEVER KEY IT ARRIVES UNDER. a2.04 §3. */
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub` and drops only machine keys. a2.15 §3: on a cardDeck card `sub`
 *  holds PROSE, and `prose()` drops it as notation. */
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
 *  `\b` is ASCII-only in JavaScript. Invariants §0.
 *
 *  THE LEFT BOUNDARY DROPS THE APOSTROPHE. a2.17 §3: the house boundary cannot
 *  see `n'allons`, which is two of this lesson's six negatives. */
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

/** A UNIT ID IS ALMOST ALWAYS WRITTEN POSSESSIVELY, AND `hasPhrase` CANNOT SEE
 *  ONE THAT IS.
 *
 *  FOUND BY THIS BUILD'S SECOND DRY RUN. a2.17 §3 measured that the house
 *  boundary `(?<![\p{L}\p{N}'’-])` excludes the apostrophe and cannot see
 *  `j'ai`, and fixed the LEFT side. The RIGHT side has the same hole and it
 *  bites the thing doctrine §B.7 asks every lesson in this band to do: « a2.04's
 *  card » does not match `a2.04`, because the character after it is an
 *  apostrophe and the house boundary counts that as a word character.
 *
 *  This lesson names five units and writes four of them possessively, so a
 *  presence check built on `hasPhrase` would have reported four of the five
 *  absent while they were on the screen. */
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

const pgArray = (v: unknown): string[] => {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
};

/** No grammar jargon on a learner surface. Invariants §8.
 *
 *  THE LINE IS MEASURED the way a2.17 §8 asks rather than guessed. `verb`,
 *  `tense`, `present` and `past` are HOUSE VOCABULARY — `verb` is on 2607 cards
 *  across the seed — and this lesson could not say what it is about without
 *  them. What none of the neighbours uses even once is below, and every entry
 *  is checked in its -s plural because `hasPhrase` is boundary-exact and a2.15
 *  shipped "Three paradigms, eighteen cells" past all three of its layers.
 *
 *  `infinitive` IS ON THE LIST and the plain phrase is `naming form`, which is
 *  what a2.02 shipped and called ${A202_NAMING_FORM}. a2.14 carries both words
 *  in its own list one at a time for the same reason. */
const JARGON = [
  'periphrastic', 'synthetic future', 'auxiliary', 'clitic', 'proclitic',
  'infinitive', 'infinitival', 'participle', 'inflection', 'inflected',
  'paradigm', 'morpheme', 'morphology', 'lexeme', 'phoneme', 'phonological',
  'orthography', 'nasal vowel', 'complement', 'constituent', 'predicate',
  'discontinuous', 'invariable', 'locative', 'deictic', 'exponent',
  'first person', 'second person', 'third person', 'compound tense',
  'present perfect', 'futurity',
];

const AUTHORED_ITEMS: Item[] = FUTUR_PROCHE.map((r) => {
  const { role, person, ...rest } = r as Record<string, unknown> & { role: string; person?: string };
  void role; void person;
  return rest as unknown as Item;
});

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.19 "${UNIT.sub}"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS, AGAINST EXPLICIT CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

if (LESSON.unitId !== UNIT_ID) die(`the lesson says unit ${LESSON.unitId} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (FUTUR_PROCHE.length !== EXPECTED_AUTHORED) die(`${FUTUR_PROCHE.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (Object.keys(FUTUR_PROCHE_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(FUTUR_PROCHE_TERMS).length} terms, expected ${EXPECTED_TERMS}`);
if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${ALL_REPAIRS.length} repairs and this build claims to repair nothing`);
if (Object.keys(AUTHORED_HEADWORDS).length !== 0) die('this build authors zero headwords and AUTHORED_HEADWORDS is not empty');
if (RESPELL_ADDITIONS.length !== 4) die(`RESPELL_ADDITIONS holds ${RESPELL_ADDITIONS.length} and this build supplies exactly four respellings`);

const traps = LESSON.sections.filter((s) => s.type === 'trapDrill');
if (traps.length !== EXPECTED_TRAP_DRILLS) die(`${traps.length} trapDrills, expected ${EXPECTED_TRAP_DRILLS}`);
if ((LESSON.sheets ?? []).length !== 1) die(`one reference sheet, and the lesson has ${String((LESSON.sheets ?? []).length)}`);
if ((LESSON.sheets ?? [])[0]?.id !== SHEET_ID) die('the sheet id constant and the sheet disagree');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('ONE quiz section. A second is silently never rendered.');
if (LESSON.sections.filter((s) => s.type === 'tapTable').length !== 1) die('ONE tapTable. The paradigm is one screen because a2.02 already taught it.');

console.log(`  counts        ${FUTUR_PROCHE.length} authored, ${IMPORTED_IDS.length} imported, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  NOT ONE HEADWORD IS AUTHORED, AND NOTHING AUTHORED CARRIES A GENDER
 * ═══════════════════════════════════════════════════════════════════════ */

const authoredWords = FUTUR_PROCHE.filter((r) => r.kind === 'word');
if (authoredWords.length) die(`${authoredWords.length} authored rows are headwords: ${authoredWords.map((r) => r.id).join(', ')}. This lesson authors sentences only.`);
const authoredGendered = FUTUR_PROCHE.filter((r) => (r as { gender?: string }).gender);
if (authoredGendered.length) die(`${authoredGendered.length} authored rows carry a gender. Invariants §5.`);
for (const r of FUTUR_PROCHE) {
  if (!isMine(r.id)) die(`${r.id} is authored and is outside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to}`);
  if (r.level !== 'a2') die(`${r.id} is level ${r.level} and every row this lesson authors is a2`);
  if (r.theme !== THEME) die(`${r.id} is in theme ${r.theme} and this build writes into ${THEME}`);
  // Widened to `string` deliberately: THEME is a literal type, so TypeScript
  // proves the comparison can never be true and refuses to compile it. The
  // check is here for a MUTATION that changes the constant.
  if ((r.theme as string) === (REJECTED_THEME as string)) die(`${r.id} is in ${REJECTED_THEME}, the theme this build considered and rejected`);
}
if (EXPECTED_DISPLAY_ONLY !== 0) die('this lesson has no display-only rows and EXPECTED_DISPLAY_ONLY is not zero');
console.log(`  authored      0 headwords, 0 gendered rows, all ${FUTUR_PROCHE.length} inside ${ID_BLOCK.from}..${ID_BLOCK.to}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE PARADIGM: ONE SCREEN, THREE COLUMNS, AND THE THIRD ONE NEVER CHANGES
 * ═══════════════════════════════════════════════════════════════════════ */

const grid = byId(SHAPE_SECTION_ID) as {
  type?: string; cols?: string[];
  rows?: { cells: string[]; detail?: { title?: string; body?: string } }[];
} | undefined;
if (grid?.type !== 'tapTable') die(`${SHAPE_SECTION_ID} is ${grid?.type} and the construction belongs in ONE grid`);
if ((grid.rows ?? []).length !== PERSONS.length) die(`the grid has ${(grid.rows ?? []).length} rows and there are ${PERSONS.length} persons`);
if ((grid.cols ?? []).length !== 3) die('the grid is three columns wide; a2.17 measured a three-column cell at eleven characters');
PERSONS.forEach((p, i) => {
  const cells = grid.rows![i]!.cells;
  if (cells[0] !== p.person) die(`grid row ${i} names ${JSON.stringify(cells[0])} and the person is ${JSON.stringify(p.person)}`);
  if (cells[1] !== p.aller) die(`grid row ${i} gives the form as ${JSON.stringify(cells[1])} and the table says ${JSON.stringify(p.aller)}`);
  // THE THIRD COLUMN IS THE ARGUMENT. Six rows and one word.
  if (cells[2] !== FRAME_VERB) die(`grid row ${i} third column is ${JSON.stringify(cells[2])} and the whole claim of the screen is that it is ${JSON.stringify(FRAME_VERB)} in all six rows`);
  for (const cell of cells) if (cell.length > GRID_CELL_MAX) die(`grid cell ${JSON.stringify(cell)} is ${cell.length} characters and a three-column cell holds ${GRID_CELL_MAX}`);
});
if (new Set((grid.rows ?? []).map((r) => r.cells[2])).size !== 1) die('the third column of the grid is not one word repeated, and that is the teaching');
console.log(`  the grid      ${PERSONS.length} persons, 3 columns, the third one ${JSON.stringify(FRAME_VERB)} six times, every cell inside ${GRID_CELL_MAX}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: THE AFFIRMATIVE AND THE NEGATIVE, ADJACENT, IN ONE SECTION
 *
 *  THE LAYOUT CLAIM THE BRIEF ASKS THE TEST TO ASSERT. Anything that showed the
 *  negative in a separate section would have hidden the only thing the learner
 *  needs to see, so the pairing is asserted as a pairing rather than as a
 *  presence: example 2i is the affirmative and example 2i+1 is its negative.
 * ═══════════════════════════════════════════════════════════════════════ */

const BY_ROW = new Map(FUTUR_PROCHE.map((r) => [r.id, r]));
const frOf = (id: string) => BY_ROW.get(id)?.fr ?? die(`${id} is not an authored row`);

const pairSection = byId(PAIR_SECTION_ID) as { type?: string; examples?: { fr: string; note?: string }[] } | undefined;
if (pairSection?.type !== 'examples') die(`${PAIR_SECTION_ID} is ${pairSection?.type} and the pair belongs in one examples screen`);
const ex = pairSection.examples ?? [];
if (ex.length % 2 !== 0) die(`${PAIR_SECTION_ID} holds ${ex.length} examples and they are read in pairs`);
if (ex.length < 6) die(`${PAIR_SECTION_ID} holds ${ex.length} examples and the brief asks for the pair in more than one person`);
for (let i = 0; i < ex.length; i += 2) {
  const pos = ex[i]!.fr;
  const neg = ex[i + 1]!.fr;
  // THE NEGATIVE IS THE AFFIRMATIVE WITH THE TWO HALVES IN IT, and nothing else.
  const stripped = neg.replace(/\bne\s+/i, '').replace(/\bn['’]/i, '').replace(/\bpas\s+/i, '');
  const rebuilt = stripped.replace(/allons|allez/i, (m) => m).trim();
  const want = pos.replace(/\ballons\b/i, 'allons').replace(/\ballez\b/i, 'allez');
  if (rebuilt.replace(/\s+/g, '') !== want.replace(/\s+/g, '')) {
    die(`${PAIR_SECTION_ID} example ${i} and ${i + 1} are not the same sentence: ${JSON.stringify(pos)} against ${JSON.stringify(neg)} (which reduces to ${JSON.stringify(rebuilt)})`);
  }
  // AND THE `pas` SITS BETWEEN THE FORM OF ALLER AND THE NAMING FORM.
  const m = /(vais|vas|va|allons|allez|vont)\s+pas\s+([\p{L}]+)/iu.exec(neg);
  if (!m) die(`${PAIR_SECTION_ID} example ${i + 1} does not put pas between a form of aller and the next word: ${JSON.stringify(neg)}`);
  if (m[2]!.toLowerCase() !== FRAME_VERB) die(`${PAIR_SECTION_ID} example ${i + 1} puts pas in front of ${JSON.stringify(m[2])} and the frame is ${JSON.stringify(FRAME_VERB)}`);
}
// AND EVERY PAIR THE CORPUS DECLARES IS A REAL PAIR.
for (const p of PAIRS) {
  const pos = frOf(p.posId);
  const neg = frOf(p.negId);
  if (!/(?:^|\s)(?:ne|n['’])/i.test(neg)) die(`${p.negId} is declared as a negative and holds no ne`);
  if (!/\bpas\b/i.test(neg)) die(`${p.negId} is declared as a negative and holds no pas`);
  if (/\bpas\b/i.test(pos)) die(`${p.posId} is declared as an affirmative and holds a pas`);
}
if (PAIRS.length !== PERSONS.length) die(`${PAIRS.length} pairs and ${PERSONS.length} persons`);
console.log(`  the pair      ${ex.length / 2} pairs adjacent in ${PAIR_SECTION_ID}, ${PAIRS.length} declared, pas between the form of aller and ${FRAME_VERB} every time`);

/* ══════════════════════════════════════════════════════════════════════════
 *  NO CORRECT SENTENCE PUTS `pas` AFTER THE NAMING FORM
 * ═══════════════════════════════════════════════════════════════════════ */

for (const line of PAS_AFTER_MUST_FIRE) if (!fires(PAS_AFTER_INFINITIVE, line)) die(`PAS_AFTER_INFINITIVE does not fire on ${JSON.stringify(line)}`);
for (const line of PAS_AFTER_MUST_NOT_FIRE) if (fires(PAS_AFTER_INFINITIVE, line)) die(`PAS_AFTER_INFINITIVE fires on ${JSON.stringify(line)}, which is correct French or this lesson's own copy`);

const WRONG_FORMS = WRONG.map((w) => w.wrong);
const legalWrong = new Set<string>(WRONG_FORM_SECTIONS);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '';
  if (legalWrong.has(sid)) continue;
  const text = strings(s).join('\n');
  for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${sid} contains the wrong form ${JSON.stringify(w)}. It is permitted only in ${[...legalWrong].join(', ')}.`);
  for (const line of strings(s)) if (fires(PAS_AFTER_INFINITIVE, line)) die(`${sid} puts pas after the naming form: ${JSON.stringify(line)}`);
}
for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', LESSON.terms ?? {}], ['intro', LESSON.intro ?? ''], ['overview', LESSON.overview ?? {}]] as const) {
  const text = strings(v).join('\n');
  for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${label} contains the wrong form ${JSON.stringify(w)}`);
  for (const line of strings(v)) if (fires(PAS_AFTER_INFINITIVE, line)) die(`${label} puts pas after the naming form: ${JSON.stringify(line)}`);
}
// NO CORPUS ROW MAY DO IT, authored or imported. A row holding one would be
// served by the flashcard hub as French.
for (const r of FUTUR_PROCHE) {
  for (const w of WRONG_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} is a corpus row holding the wrong form ${JSON.stringify(w)}`);
  if (fires(PAS_AFTER_INFINITIVE, r.fr)) die(`${r.id} is a corpus row putting pas after the naming form: ${JSON.stringify(r.fr)}`);
}
for (const i of IMPORTED) if (fires(PAS_AFTER_INFINITIVE, i.fr)) die(`${i.id} is imported and puts pas after the naming form`);
// EVERY WRONG FORM APPEARS SOMEWHERE, or the guard above is guarding nothing.
const wrongHomes = LESSON.sections.filter((s) => legalWrong.has((s as { id?: string }).id ?? ''));
for (const w of WRONG_FORMS) {
  if (!wrongHomes.some((s) => strings(s).some((x) => hasPhrase(x, w)))) die(`the wrong form ${JSON.stringify(w)} is declared and appears nowhere. A trap nobody sees is not a trap.`);
}
// AND NO AUTHORED ROW MAY RE-STATE AN IMPORTED ONE. a2.04 found this by
// mutation: the duplicate-fr check is per THEME, so authoring a sentence this
// lesson already imports from another theme collides with nothing.
{
  const importedFrs = new Map(IMPORTED.map((i) => [i.fr.toLowerCase(), i.id] as const));
  for (const r of FUTUR_PROCHE) {
    const clash = importedFrs.get(r.fr.toLowerCase());
    if (clash) die(`${r.id} authors ${JSON.stringify(r.fr)}, which this lesson already imports as ${clash}.`);
  }
}
// THE OWNS GETS ITS WEIGHT. Act 2 is the negative and the paradigm is one section.
const act2 = FUTUR_PROCHE_ACTS.find((a) => a.id === 'act2');
if ((act2?.sections.length ?? 0) < 5) die(`the Owns act has ${act2?.sections.length} sections and the negative act is the heaviest in the lesson`);
if ((act2?.sections.length ?? 0) <= 1) die('doctrine §B.5: the Owns must outweigh the paradigm');
console.log(`  the Owns      act2 ${act2?.sections.length} missions on the negative against 1 on the paradigm, ${WRONG_FORMS.length} wrong forms present only in ${legalWrong.size} sections`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NEIGHBOURS' GROUND: NO ONE-WORD FUTURE, NO COMPOUND TENSE
 * ═══════════════════════════════════════════════════════════════════════ */

for (const line of FUTUR_SIMPLE_MUST_FIRE) if (!fires(FUTUR_SIMPLE_SHAPE, line)) die(`FUTUR_SIMPLE_SHAPE does not fire on ${JSON.stringify(line)}`);
for (const line of FUTUR_SIMPLE_MUST_NOT_FIRE) if (fires(FUTUR_SIMPLE_SHAPE, line)) die(`FUTUR_SIMPLE_SHAPE fires on ${JSON.stringify(line)}. a2.17 §7 and a2.14 §6: guard the thing, not the letters.`);
for (const line of COMPOUND_MUST_FIRE) if (!fires(COMPOUND_SHAPE, line)) die(`COMPOUND_SHAPE does not fire on ${JSON.stringify(line)}`);
for (const line of COMPOUND_MUST_NOT_FIRE) if (fires(COMPOUND_SHAPE, line)) die(`COMPOUND_SHAPE fires on ${JSON.stringify(line)}`);

const learnerText = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
].join('\n');

/* THE ONE-WORD FUTURE IS PERMITTED IN EXACTLY TWO PLACES.
 *
 *   1. THE HOUSE GOALS HEADING. « Ce que vous saurez faire » is savoir in the
 *      synthetic future and 36 lessons in the seed ship it. a2.14 §4 settled
 *      that the chrome stays and that the form is permitted THERE and nowhere
 *      else. Found by this build's first dry run, and it matters more here
 *      than anywhere because this is the lesson that names the form and
 *      refuses to conjugate it.
 *   2. THE TWO SECTIONS WHERE MEETING ONE IS THE CONTENT: the card deck that
 *      names it and the exam question that asks what has happened when the
 *      learner reads one.
 *
 * Everywhere else it is fatal. */
const FUTUR_SIMPLE_HOMES = new Set<string>([HEAR_SECTION_ID, QUIZ_SECTION_ID, ERRORS_SECTION_ID]);
const chromeOk = (line: string) => line === HOUSE_CHROME_FUTURE;
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '';
  for (const line of strings(s)) {
    if (!fires(FUTUR_SIMPLE_SHAPE, line)) continue;
    if (chromeOk(line)) continue;
    if (!FUTUR_SIMPLE_HOMES.has(sid)) die(`${sid} conjugates the one-word future: ${JSON.stringify(line)}. It is beyond A2 entirely.`);
  }
  for (const line of strings(s)) if (fires(COMPOUND_SHAPE, line)) die(`${sid} conjugates a compound tense: ${JSON.stringify(line)}. ${PAST_UNIT} owns it and it is the very next lesson.`);
}
for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', LESSON.terms ?? {}], ['intro', LESSON.intro ?? '']] as const) {
  for (const line of strings(v)) {
    if (fires(FUTUR_SIMPLE_SHAPE, line) && !chromeOk(line)) die(`${label} conjugates the one-word future: ${JSON.stringify(line)}`);
    if (fires(COMPOUND_SHAPE, line)) die(`${label} conjugates a compound tense: ${JSON.stringify(line)}`);
  }
}
/* AND THE CHROME APPEARS EXACTLY ONCE, IN THE GOALS SECTION'S frSub. An
   exemption nobody bounds is an exemption that grows. */
{
  const all = strings(LESSON.sections).concat(strings(LESSON.sheets ?? []), strings(LESSON.terms ?? {}), [LESSON.intro ?? '']);
  const hits = all.filter((l) => l === HOUSE_CHROME_FUTURE).length;
  if (hits !== 1) die(`the house goals heading appears ${hits} times and it is exempted from the one-word-future guard exactly once`);
  const goals = LESSON.sections.find((s) => s.type === 'goals') as { frSub?: string } | undefined;
  if (goals?.frSub !== HOUSE_CHROME_FUTURE) die(`the one place the one-word future is permitted is the goals frSub, and it holds ${JSON.stringify(goals?.frSub)}`);
}
for (const r of FUTUR_PROCHE) {
  if (fires(FUTUR_SIMPLE_SHAPE, r.fr)) die(`${r.id} is a corpus row holding a one-word future`);
  if (fires(COMPOUND_SHAPE, r.fr)) die(`${r.id} is a corpus row holding a compound tense`);
}
for (const i of IMPORTED) {
  if (fires(FUTUR_SIMPLE_SHAPE, i.fr)) die(`${i.id} is imported and holds a one-word future`);
  if (fires(COMPOUND_SHAPE, i.fr)) die(`${i.id} is imported and holds a compound tense`);
}
// AND IT IS NAMED, which is the whole reason it is allowed to be mentioned.
/* THE OWNS, AS A LITERAL, AND THE INVERSION AS A NEGATIVE.
   FOUND BY MUTATION. `OWNS_CLAIM` is one constant rendered on the goals card,
   the trap's rule card and the sheet, so inverting it changed all three at once
   and every guard that looked for it kept finding it. a2.16 §3: a guard looping
   over the constant the content renders is guarding nothing. */
if (!/two halves go round aller/i.test(learnerText)) {
  die('nothing on a learner surface says the two halves go round ALLER, which is the whole of what this lesson owns');
}
if (/go round the verb carrying the meaning/i.test(learnerText)) {
  die('a learner surface says the two halves go round the verb carrying the meaning, which is the error this lesson exists to prevent');
}
if (!hasPhrase(learnerText, OTHER_FUTURE)) die('the second future is never named on a learner surface, and a learner who meets it later concludes they were taught a shortcut');
if (!namesUnit(learnerText, PAST_UNIT)) die(`${PAST_UNIT} is never named and this lesson's rule is the one it is told to extend`);
/* THE HAND-OFF BY ITS OWN WORDING. FOUND BY MUTATION: gutting the sentence left
   a2.05 named on the progress card, so every presence check stayed green while
   the hand-off itself was gone. a2.05 is told to EXTEND this lesson's rule. */
if (!/puts a past tense in front of a second verb/i.test(learnerText)) {
  die(`nothing on a learner surface says that ${PAST_UNIT} does this again with a past tense. It is told to extend this lesson's rule and it gets no hand-off.`);
}
if (!/behaves exactly as it does here/i.test(learnerText)) {
  die(`the hand-off does not say the negative behaves the SAME WAY there, which is the half ${PAST_UNIT} inherits`);
}
/* AND a2.18's OWN SENTENCE IS ON THE SCREEN THAT CLOSES ITS LOOP, beside this
   lesson's version of it. Also found by mutation. */
{
  const when = strings(byId(WHEN_SECTION_ID)).join('\n');
  if (!hasPhrase(when, 'Je pars dans dix minutes.')) die(`${TIME_UNIT}'s own present-tense sentence is not on the screen that closes its loop`);
  if (!hasPhrase(when, 'Je vais partir dans dix minutes.')) die('this lesson\'s verb-in-front version is not beside it, and the pair is the whole hand-off');
  if (!namesUnit(when, TIME_UNIT)) die(`the screen that closes ${TIME_UNIT}'s loop does not name it`);
}
console.log(`  neighbours    one-word future named and conjugated nowhere, compound tense absent (${PAST_UNIT} named forward)`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BACK-REFERENCES, QUOTED VERBATIM AND CREDITED BY ID
 * ═══════════════════════════════════════════════════════════════════════ */

// a2.02's TERM. Doctrine §B.7 and a2.16 §3: a back-reference to a unit id is
// not a variable, so the literal is asserted in the merge as well.
if (!hasPhrase(learnerText, WHAT_FOLLOWS)) die(`the ${WHAT_FOLLOWS_UNIT} term ${JSON.stringify(WHAT_FOLLOWS)} is not quoted anywhere. Doctrine §B.7 tells this lesson to quote it verbatim.`);
if (!namesUnit(learnerText, WHAT_FOLLOWS_UNIT)) die(`${WHAT_FOLLOWS_UNIT} owns the first instance of this shape and is never named by id`);
if (!namesUnit(learnerText, TIME_UNIT)) die(`${TIME_UNIT} met the same shape at seq 14 and is never named by id. Doctrine §B.7 asks for the earlier instances by unit id.`);
const twice = byId(TWICE_TRAP_SECTION_ID) as { rule?: { title?: string; body?: string } } | undefined;
if (!twice) die(`${TWICE_TRAP_SECTION_ID} is missing`);
if (twice.rule?.title !== WHAT_FOLLOWS) die(`the trap's rule card is titled ${JSON.stringify(twice.rule?.title)} and the term is ${JSON.stringify(WHAT_FOLLOWS)}`);

// a2.13's REFRAME. The brief asks for the back-reference by name and it is
// quoted rather than paraphrased, for the same reason as a2.02's.
if (!hasPhrase(learnerText, A213_REFRAME)) die(`${MODAL_UNIT}'s reframe ${JSON.stringify(A213_REFRAME)} is not quoted anywhere`);
if (!namesUnit(learnerText, MODAL_UNIT)) die(`${MODAL_UNIT} is never named by id and this lesson's rule is half of its`);
const modals = byId(MODALS_SECTION_ID);
if (!modals) die(`${MODALS_SECTION_ID} is missing`);
if (!strings(modals).some((s) => namesUnit(s, MODAL_UNIT))) die(`${MODALS_SECTION_ID} is the back-reference section and does not name ${MODAL_UNIT}`);

// a1.18's, which this lesson extends and must not contradict.
if (!namesUnit(learnerText, NEGATION_UNIT)) die(`${NEGATION_UNIT} owns ne ... pas and is never named by id`);
if (!hasPhrase(learnerText, A118_NE_DROP)) die(`${NEGATION_UNIT}'s own line about the dropped ne is not quoted, and this lesson must not say something different about it`);
if (hasPhrase(learnerText, A118_REFRAME) && !hasPhrase(learnerText, REFRAME)) die('a1.18\'s reframe is quoted and this lesson\'s is not');

// a2.02 AND a2.04, whose cards the trap is built out of.
if (!namesUnit(learnerText, ALLER_UNIT)) die(`${ALLER_UNIT} conjugated aller and is never named by id`);
if (!namesUnit(learnerText, PLACE_UNIT)) die(`${PLACE_UNIT} owns the place sense this lesson uses as its contrast and is never named by id`);
console.log(`  references    ${WHAT_FOLLOWS_UNIT} term verbatim, ${MODAL_UNIT} reframe verbatim, ${NEGATION_UNIT} ne-drop verbatim, ${TIME_UNIT} and ${PLACE_UNIT} named by id`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DROPPED ne IS RECEPTION ONLY
 * ═══════════════════════════════════════════════════════════════════════ */

const dropped = FUTUR_PROCHE.filter((r) => r.fr === NE_DROP_FR);
if (dropped.length !== 1) die(`${dropped.length} rows hold the dropped-ne sentence and exactly one may`);
const droppedRow = dropped[0]!;
if (!droppedRow.tags?.includes('receptive')) die(`${droppedRow.id} is the dropped-ne row and is not tagged receptive`);
if (droppedRow.drills.includes('dictation')) die(`${droppedRow.id} carries a dictation drill and a1.18 produces the dropped ne nowhere`);
if (droppedRow.drills.includes('voiceflash')) die(`${droppedRow.id} carries a voiceflash drill and a speak mission is a production surface`);
if (FUTUR_PROCHE_DICTEE_IDS.includes(droppedRow.id)) die(`${droppedRow.id} is a dictée target`);
if (FUTUR_PROCHE_SPEAK_IDS.includes(droppedRow.id)) die(`${droppedRow.id} is a speak target`);
for (const q of qs) {
  if (String(q.answer ?? '') === NE_DROP_FR) die('a quiz question asks the learner to produce the dropped-ne sentence');
  for (const a of (q.accept ?? [])) if (a === NE_DROP_FR) die('a quiz question accepts the dropped-ne sentence as a typed answer');
}
// AND IT IS MARKED AS SPOKEN REGISTER WHEREVER IT APPEARS.
if (!/spoken French/i.test(droppedRow.en)) die(`${droppedRow.id}'s gloss does not mark it as spoken register`);
const earQs = qs.filter((q) => q.format === 'listenChoose');
if (earQs.length !== 1) die(`${earQs.length} listenChoose questions and this lesson asks exactly one`);
if (!(earQs[0]!.opts ?? []).includes(NE_DROP_FR)) die('the one ear question does not offer the dropped-ne sentence, which is the only thing here worth asking the ear about');
if (!/spoken|speech/i.test(String(earQs[0]!.why ?? ''))) die('the ear question does not mark its answer as spoken register');
console.log(`  the ne-drop   1 receptive row (${droppedRow.id}), no dictée, no speak, no typed answer, 1 ear question marked as speech`);

/* ══════════════════════════════════════════════════════════════════════════
 *  AT LEAST ONE VERB IN PRODUCTION IS AN IMPORT FROM ANOTHER THEME
 * ═══════════════════════════════════════════════════════════════════════ */

{
  const themesOfImports = new Set(IMPORTED_IDS.map((id) => FUTUR_PROCHE_ROWS[id]?.theme));
  if (themesOfImports.size < EXPECTED_SOURCE_THEMES) die(`${themesOfImports.size} source themes and the whole argument is that the slot reaches across them`);
  const foreign = IMPORTED_IDS.filter((id) => FUTUR_PROCHE_ROWS[id]?.theme !== THEME);
  if (!foreign.length) die('every import is from this lesson\'s own theme, and the argument of the lesson is that the naming form comes from anywhere');
  // AND ONE OF THEM IS DRAWN ON A PRODUCTION SURFACE, ASSERTED BY ID.
  const inScenario = strings(byId(SCENARIO_SECTION_ID)).join('\n');
  const usedInProduction = PUBLISHED_NEGATIVE_IDS.filter((id) => hasPhrase(inScenario, FUTUR_PROCHE_ROWS[id]!.fr));
  if (!usedInProduction.length) die('no imported sentence from another theme is used on a production surface. The brief asks for at least one, by id.');
  console.log(`  imports       ${themesOfImports.size} themes, ${foreign.length} rows from outside ${THEME}, ${usedInProduction.length} of them on the role-play surface (${usedInProduction.join(', ')})`);
}

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
}
console.log(`  trapDrills    ${traps.length} stepped rule>cards>audio>drill, gated, no size, every card's line in its own take`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE, THROUGH THE REAL FUNCTION, IN BOTH DIRECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

for (const id of FUTUR_PROCHE_DICTEE_IDS) {
  const r = FUTUR_PROCHE.find((x) => x.id === id);
  if (!r) die(`${id} is a dictée target and is not an authored row`);
  if (dicteeMode(r.fr) !== 'letters') die(`${id} "${r.fr}" is ${letterCount(r.fr)} letters and spells in WORD mode, where every word is handed over pre-spelled`);
  if (!r.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill`);
}
const cannot = FUTUR_PROCHE.filter((r) => dicteeMode(r.fr) === 'words' && r.drills.includes('dictation'));
if (cannot.length) die(`${cannot.length} rows spell in WORD mode and carry a dictation drill: ${cannot.map((r) => r.id).join(', ')}`);

/* THE MATRIX, MEASURED THROUGH THE REAL FUNCTION RATHER THAN DESCRIBED.
   Corrections §4 costs this lesson five of its eight persons, and `je` — the
   one a learner most wants to produce — is one letter over. */
for (const d of DICTEE_MATRIX) {
  const person = d.person === 'je' ? 'Je' : d.person.charAt(0).toUpperCase() + d.person.slice(1);
  const aller = PERSONS.find((p) => p.person === d.person)?.aller
    ?? ({ on: 'va', elle: 'va' } as Record<string, string>)[d.person]!;
  const not = PERSONS.find((p) => p.person === d.person)?.not
    ?? ({ on: 'ne va pas', elle: 'ne va pas' } as Record<string, string>)[d.person]!;
  const pos = `${person} ${aller} ${FRAME_VERB}.`;
  const neg = `${person} ${not} ${FRAME_VERB}.`;
  if (letterCount(pos) !== d.affirmative) die(`DICTEE_MATRIX says ${d.person} affirmative is ${d.affirmative} letters and the real function says ${letterCount(pos)}`);
  if (letterCount(neg) !== d.negative) die(`DICTEE_MATRIX says ${d.person} negative is ${d.negative} letters and the real function says ${letterCount(neg)}`);
  if ((dicteeMode(neg) === 'letters') !== d.negativeFits) die(`DICTEE_MATRIX says ${d.person}'s negative ${d.negativeFits ? 'fits' : 'does not fit'} and dicteeMode disagrees`);
  if (dicteeMode(pos) !== 'letters') die(`the affirmative for ${d.person} does not fit either, and the claim is that all eight do`);
}
if (DICTEE_MATRIX.filter((d) => d.negativeFits).length !== 3) die('the claim is that three of the eight negatives fit and the matrix says otherwise');
if (DICTEE_MATRIX.find((d) => d.person === 'je')!.negative !== DICTEE_LIMIT + 1) die('the je negative is supposed to be exactly one letter over the limit, which is the finding');
console.log(`  dictée        ${FUTUR_PROCHE_DICTEE_IDS.length} targets, all LETTERS; 8 affirmatives fit and 3 negatives do, je one letter over`);

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT MAY NOT BE ASKED BY EAR
 * ═══════════════════════════════════════════════════════════════════════ */

for (const q of earQs) {
  const opts = (q.opts ?? []) as string[];
  for (let i = 0; i < opts.length; i += 1) {
    for (let j = i + 1; j < opts.length; j += 1) {
      for (const [x, y] of NO_EAR_QUESTION) {
        if (x !== y && opts[i]!.replace(x, y) === opts[j]) die(`ear options ${JSON.stringify(opts[i])} and ${JSON.stringify(opts[j])} differ only by ${x}/${y}`);
      }
    }
  }
}
console.log(`  by ear        ${earQs.length} listenChoose question, ${NO_EAR_QUESTION.length} forbidden pairs checked`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

const reframeWords = REFRAME.trim().split(/\s+/).length;
if (reframeWords > 14) die(`the reframe is ${reframeWords} words and has to survive recall mid-utterance`);
if (LESSON.reframe !== REFRAME) die('the lesson\'s reframe and the corpus constant disagree');
const reframeUses = countPhrase(learnerText, REFRAME);
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeSections < 6) die(`the reframe is carried by ${reframeSections} sections and this lesson was built to carry it in six`);
// AND IT DOES NOT CONTRADICT a1.18's, WHICH IS THE THING THE BRIEF WARNS ABOUT.
if (!REFRAME.toLowerCase().startsWith('wrap the verb')) {
  die(`the reframe is ${JSON.stringify(REFRAME)} and it was written to open on ${JSON.stringify(A118_REFRAME.slice(0, 13))}, which is ${NEGATION_UNIT}'s own first three words. A rule that extends an earlier one should sound like it.`);
}
/* AND IT IS PINNED WHERE THE LEARNER MEETS IT FIRST. FOUND BY MUTATION:
   rewording it in ONE section left eight carrying it, so a threshold guard let
   it through. A threshold is not a location. */
{
  const scene = byId(SCENE_SECTION_ID) as { closing?: { text?: string } } | undefined;
  if (scene?.closing?.text !== REFRAME) die(`the scene closes on ${JSON.stringify(scene?.closing?.text)} and the reframe is ${JSON.stringify(REFRAME)}`);
  const trap = byId(WHERE_TRAP_SECTION_ID) as { rule?: { body?: string } } | undefined;
  if (!trap?.rule?.body?.includes(REFRAME)) die('the Owns trap\'s rule card does not carry the reframe verbatim');
}
console.log(`  reframe       ${JSON.stringify(REFRAME)} · ${reframeWords} words, ${reframeUses} uses across ${reframeSections} sections`);

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE COPY, JARGON AND THE PLURALS
 * ═══════════════════════════════════════════════════════════════════════ */

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
if (fires(PAS_AFTER_INFINITIVE, LESSON.intro)) die('intro puts pas after the naming form');

for (const bad of ['—', '–']) if (houseText.includes(bad)) die('an em or en dash is on a learner surface');
for (const bad of ['honest', 'honesty', 'honestly']) if (hasPhrase(houseText, bad)) die(`${JSON.stringify(bad)} is banned from authored content`);
for (const tell of ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch']) {
  if (hasPhrase(houseText, tell)) die(`the AI tell ${JSON.stringify(tell)} is on a learner surface`);
}
for (const r of FUTUR_PROCHE) {
  for (const v of [r.fr, r.respell ?? '', r.ipa ?? '', r.en, r.notes ?? '']) if (v.includes('‿')) die(`${r.id} carries U+203F in ${JSON.stringify(v)}`);
}
if (houseText.includes('‿')) die('U+203F is on a learner surface');

// THE RATIO, NOT A BAN. a2.17 §8: the plain phrase must outnumber the technical
// one. `naming form` is a2.02's phrase and `infinitive` is on the jargon list,
// so this measures the plain phrase against the one word this lesson could not
// avoid without lying about what a verb is.
const plain = countPhrase(houseText, 'naming form') + countPhrase(houseText, 'the verb behind');
if (plain < 10) die(`the plain phrase appears ${plain} times and this lesson leans on it in every act`);
console.log(`  house copy    ${JARGON.length} jargon terms absent in both forms, "naming form" ${plain} times, no dash, no tie`);

/* ══════════════════════════════════════════════════════════════════════════
 *  TERM CHIPS
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const t = (s as { terms?: string[] }).terms ?? [];
  if (t.length > 3) die(`${(s as { id?: string }).id} declares ${t.length} term chips and the renderer shows three`);
  for (const name of t) if (!FUTUR_PROCHE_TERMS[name]) die(`${(s as { id?: string }).id} names the term ${JSON.stringify(name)} and the glossary has no such term`);
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
const orphanTerms = Object.keys(FUTUR_PROCHE_TERMS).filter((k) => !usedTerms.has(k));
if (orphanTerms.length) die(`${orphanTerms.length} terms are declared and named by no section: ${orphanTerms.join(', ')}`);
console.log(`  terms         ${Object.keys(FUTUR_PROCHE_TERMS).length} terms, all reachable, every chip row inside ${TERM_ROW_MAX} characters`);

/* ══════════════════════════════════════════════════════════════════════════
 *  MISSION TITLES, ACT WEIGHTS AND REACHABILITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const t = (s as { title?: string }).title ?? '';
  if (t.length > TITLE_MAX) die(`the title ${JSON.stringify(t)} is ${t.length} characters and the hub row cuts at ${TITLE_MAX}`);
}
const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id ?? '');
const claimed = new Map<string, string>();
for (const a of FUTUR_PROCHE_ACTS) {
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
const allRows = [...FUTUR_PROCHE.map((r) => ({ id: r.id, fr: r.fr })), ...IMPORTED.map((i) => ({ id: i.id, fr: i.fr }))];
for (const r of allRows) if (hasPhrase(printed, r.fr)) drawn.add(r.id);
const released = new Set(FUTUR_PROCHE_TRANCHES.flat());
const orphan = FUTUR_PROCHE_ITEM_IDS.filter((id) => !drawn.has(id) && !released.has(id));
if (orphan.length) die(`${orphan.length} declared items are on no screen and in no tranche:\n  ${orphan.join('\n  ')}`);
const ghosts = [...released].filter((id) => !FUTUR_PROCHE_ITEM_IDS.includes(id));
if (ghosts.length) die(`${ghosts.length} tranche ids are not in itemIds: ${ghosts.join(', ')}`);
console.log(`  reachability  ${FUTUR_PROCHE_ITEM_IDS.length} items, ${drawn.size} drawn, ${released.size} released, 0 orphans and 0 ghosts`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq and at most half may be`);
const errorSpot = qs.filter((q) => q.format === 'errorSpot').length;
if (errorSpot < 5) die(`${errorSpot} errorSpot questions. The brief calls it the strongest format here, because word order is the one thing fold() keeps.`);
const noWhy = qs.filter((q) => !q.why);
if (noWhy.length) die(`${noWhy.length} questions have no why`);
const noRef = qs.filter((q) => !q.ref || !sectionIds.includes(q.ref));
if (noRef.length) die(`${noRef.length} questions have a ref naming no section: ${noRef.map((q) => q.ref).join(', ')}`);
const closed = qs.filter((q) => typeof q.correct === 'number');
const slots = new Map<number, number>();
for (const q of closed) slots.set(Number(q.correct), (slots.get(Number(q.correct)) ?? 0) + 1);
for (const [slot, n] of slots) {
  if (n / closed.length > 0.4) die(`slot ${slot} holds ${n} of ${closed.length} closed answers, over the 40% cap`);
}
// Every free-text question accepts the answer it displays, through the REAL
// `matchesAccept` rather than by comparing strings.
for (const q of qs) {
  if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
  if (!q.answer) die(`a ${q.format} question has no answer`);
  if (!matchesAccept(q.answer, q.accept ?? [])) die(`the ${q.format} question ${JSON.stringify(q.q)} displays ${JSON.stringify(q.answer)} and does not accept it`);
  // AND NO ANSWER IT ACCEPTS PUTS THE PAS AFTER THE NAMING FORM.
  if (fires(PAS_AFTER_INFINITIVE, q.answer)) die(`a ${q.format} question displays ${JSON.stringify(q.answer)} as the right answer and it puts pas after the naming form`);
  for (const a of (q.accept ?? [])) if (fires(PAS_AFTER_INFINITIVE, a)) die(`a ${q.format} question accepts ${JSON.stringify(a)}, which puts pas after the naming form`);
}
const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
const leads = rounds.map((r) => r.targets[0]);
if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
const triggerIds = new Set(FUTUR_PROCHE_ERROR_TRIGGERS.map((t) => t.id));
const unled = [...triggerIds].filter((t) => !leads.includes(t));
if (unled.length) die(`${unled.length} triggers lead no round, so their drills can never fire: ${unled.join(', ')}`);
const drillIds = new Set(FUTUR_PROCHE_DRILLS.map((d) => d.id));
for (const t of FUTUR_PROCHE_ERROR_TRIGGERS) {
  if (!drillIds.has(t.drill)) die(`${t.id} names the drill ${t.drill} and the lesson has no such drill`);
  if (t.retest && !drillIds.has(t.retest)) die(`${t.id} names the retest ${t.retest} and the lesson has no such drill`);
  for (const d of t.detectOn) {
    const base = d.split('/')[0]!;
    if (!sectionIds.includes(base)) die(`${t.id} detects on ${d} and there is no section ${base}`);
  }
}
// A DRILL PAIR'S ANSWER SIDE IS A PRODUCTION SURFACE TOO.
for (const d of FUTUR_PROCHE_DRILLS) {
  for (const [, back] of (d as { pairs?: [string, string][] }).pairs ?? []) {
    if (fires(PAS_AFTER_INFINITIVE, back)) die(`${d.id} asks the learner to produce ${JSON.stringify(back)}`);
    if (fires(FUTUR_SIMPLE_SHAPE, back)) die(`${d.id} asks the learner to produce a one-word future`);
  }
}
console.log(`  quiz          ${qs.length} questions, ${mcq} mcq, ${qs.filter((q) => q.format === 'typeIn').length} typeIn, ${errorSpot} errorSpot, ${earQs.length} listenChoose, ${rounds.length} rounds each leading a different trigger`);

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
    if (fires(PAS_AFTER_INFINITIVE, line)) die(`scenario turn ${i} offers ${JSON.stringify(line)}, which puts pas after the naming form`);
    if (fires(COMPOUND_SHAPE, line)) die(`scenario turn ${i} offers ${JSON.stringify(line)}, which is a compound tense`);
    if (fires(FUTUR_SIMPLE_SHAPE, line)) die(`scenario turn ${i} offers ${JSON.stringify(line)}, which is the one-word future`);
  }
}
console.log(`  scenario      ${scenario.turns.length} turns, every one with a userEn and two alternatives`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE READING PASSAGE
 * ═══════════════════════════════════════════════════════════════════════ */

const reading = byId(READING_SECTION_ID) as { text?: string; glossary?: unknown[]; questionsInModal?: boolean } | undefined;
if (!reading?.text) die(`${READING_SECTION_ID} has no text`);
if (reading.text.includes('\n')) die('a reading passage is ONE BLOCK: PassagePage splits on sentence boundaries and an authored newline is silently discarded');
if ((reading.glossary ?? []).length && !reading.questionsInModal) die('a reading glossary needs questionsInModal AND questions, or it never reaches the glossary renderer');
if (fires(COMPOUND_SHAPE, reading.text)) die('the reading passage holds a compound tense');
if (fires(FUTUR_SIMPLE_SHAPE, reading.text)) die('the reading passage holds a one-word future');
if (fires(PAS_AFTER_INFINITIVE, reading.text)) die('the reading passage puts pas after the naming form');
console.log(`  reading       one block, ${(reading.glossary ?? []).length} glossary entries with questionsInModal`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS, THROUGH THE REAL CHECKER
 * ═══════════════════════════════════════════════════════════════════════ */

let seen = 0; let missed = 0;
const missedRows: string[] = [];
for (const r of FUTUR_PROCHE) {
  if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} "${r.fr}" respelled ${JSON.stringify(r.respell)} is flagged by the shared checker`);
  const value = r.respell ?? '';
  for (let k = 0; k < value.length; k += 1) {
    if (value[k] !== 'ⁿ') continue;
    const broken = `${value.slice(0, k)}n${value.slice(k + 1)}`;
    if (hasPlainNasalFor(r.fr, broken)) seen += 1; else { missed += 1; missedRows.push(r.id); }
  }
}
// THE SUPPLIED RESPELLINGS ARE CLEAN TOO, and one of them holds the blind one.
for (const a of RESPELL_ADDITIONS) {
  if (hasPlainNasalFor(a.fr, a.to)) die(`${a.id} supplied value ${JSON.stringify(a.to)} is flagged`);
  if (a.to.includes('‿')) die(`${a.id} supplied value carries U+203F`);
  const value = a.to;
  for (let k = 0; k < value.length; k += 1) {
    if (value[k] !== 'ⁿ') continue;
    const broken = `${value.slice(0, k)}n${value.slice(k + 1)}`;
    if (hasPlainNasalFor(a.fr, broken)) seen += 1; else { missed += 1; missedRows.push(a.id); }
  }
}
if (seen !== EXPECTED_NASALS_SEEN) die(`${seen} nasals the checker can see and the corpus file claims ${EXPECTED_NASALS_SEEN}`);
if (missed !== EXPECTED_NASALS_MISSED) die(`${missed} nasals the checker cannot see and the corpus file claims ${EXPECTED_NASALS_MISSED}: ${missedRows.join(', ')}`);

/* THE ONE BLIND NASAL, ASSERTED BY NAME, AND THE BLINDNESS ASSERTED AS A
   NEGATIVE so the day the checker improves this build finds out rather than
   carrying a dead list. Corrections §6. */
{
  const carrier = RESPELL_ADDITIONS.find((a) => a.id === BLIND_NASAL.inRow);
  if (!carrier) die(`${BLIND_NASAL.inRow} is named as the row carrying the blind nasal and it supplies no respelling`);
  if (!carrier.to.includes(BLIND_NASAL.token)) die(`${BLIND_NASAL.inRow} does not carry ${JSON.stringify(BLIND_NASAL.token)}`);
  const brokenLine = carrier.to.replace(BLIND_NASAL.token, BLIND_NASAL.broken);
  if (hasPlainNasalFor(carrier.fr, brokenLine)) {
    die(`the checker now SEES ${JSON.stringify(BLIND_NASAL.broken)} in ${JSON.stringify(carrier.fr)}. Corrections §6's blind spot has been fixed and this by-name assertion can go.`);
  }
  if (missedRows.length !== 1 || missedRows[0] !== BLIND_NASAL.inRow) {
    die(`the blind nasal is claimed to be in ${BLIND_NASAL.inRow} alone and the measurement says ${missedRows.join(', ')}`);
  }
}
/* THE FALSE-POSITIVE PATH, LOOKED FOR AND REPORTED AS AN ABSENCE, which is what
   corrections §6 asks for. Four candidates, none of them fires. */
{
  const fired = FALSE_POSITIVE_CANDIDATES.filter((c) => hasPlainNasalFor(c.fr, c.respell));
  if (fired.length) die(`the false-positive path fires on ${fired.map((c) => `${c.fr}/${c.respell}`).join(', ')} and this build reports it as an absence`);
}
console.log(`  respellings   0 repairs, ${RESPELL_ADDITIONS.length} supplied, ${seen} nasals seen and ${missed} missed (${BLIND_NASAL.token} in ${BLIND_NASAL.inRow}), false-positive path not met on ${FALSE_POSITIVE_CANDIDATES.length} candidates`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE MANIFEST AGREES WITH WHAT THE SCREENS PRINT
 * ═══════════════════════════════════════════════════════════════════════ */

for (const i of IMPORTED) {
  const rowM = FUTUR_PROCHE_ROWS[i.id];
  if (!rowM) die(`${i.id} is in IMPORTED and not in the manifest. Re-run scripts/_a219_manifest.ts.`);
  if (rowM.fr !== i.fr) die(`${i.id} manifest says ${JSON.stringify(rowM.fr)} and IMPORTED says ${JSON.stringify(i.fr)}`);
  if ((rowM as { gender?: string }).gender) die(`${i.id} carries a gender in the manifest and would join a1.03's population when the merge carries it`);
  const shown = displayRespell(i.id);
  if (!shown) die(`${i.id} has no respelling to display`);
  if (hasPlainNasalFor(i.fr, shown)) die(`${i.id} displays ${JSON.stringify(shown)}, which the shared checker flags`);
  if (shown.includes('‿')) die(`${i.id} displays a U+203F tie`);
}
if (NEGATIVE_EVIDENCE.rows !== MEASURED.publishedNegatives) die(`NEGATIVE_EVIDENCE says ${NEGATIVE_EVIDENCE.rows} published negatives and the manifest measured ${MEASURED.publishedNegatives}`);
if (NEGATIVE_EVIDENCE.respelled !== MEASURED.publishedNegativesRespelled) die(`NEGATIVE_EVIDENCE says ${NEGATIVE_EVIDENCE.respelled} of them carry a respelling and the manifest measured ${MEASURED.publishedNegativesRespelled}`);
if (AFFIRMATIVE_EVIDENCE.rows !== MEASURED.allerPlusInfinitive) die(`AFFIRMATIVE_EVIDENCE says ${AFFIRMATIVE_EVIDENCE.rows} and the manifest measured ${MEASURED.allerPlusInfinitive}`);
if (AFFIRMATIVE_EVIDENCE.respelled !== MEASURED.allerPlusInfinitiveRespelled) die(`AFFIRMATIVE_EVIDENCE says ${AFFIRMATIVE_EVIDENCE.respelled} cards and the manifest measured ${MEASURED.allerPlusInfinitiveRespelled}`);
console.log(`  manifest      ${IMPORTED.length} imported rows, every displayed respelling clean and tie-free, every printed figure equal to the re-measured read`);

/* ══════════════════════════════════════════════════════════════════════════
 *  SHEET, ERRORS, SCHEMA AND DENSITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const sid of [SCENE_SECTION_ID, SHAPE_SECTION_ID, PAIR_SECTION_ID, ENGLISH_SECTION_ID, SIX_SECTION_ID, WHERE_TRAP_SECTION_ID, PRODUCE_SECTION_ID, ANY_SECTION_ID, MODALS_SECTION_ID, ERRORS_SECTION_ID, WHEN_SECTION_ID, PLACE_SECTION_ID, TWICE_TRAP_SECTION_ID, HEAR_SECTION_ID, UNSEEN_SECTION_ID, READING_SECTION_ID, DICTATION_SECTION_ID, ROUNDUP_SECTION_ID]) {
  if (!byId(sid)) die(`${sid} is missing from the lesson`);
}
if (FUTUR_PROCHE_SPEAK_IDS.some((id) => !AUTHORED_IDS.includes(id))) die('a speak target is not an authored row, and only the authored rows are guaranteed to carry voiceflash');
if (FUTUR_PROCHE_SHEETS[0]!.sections!.some((s) => s.type === 'cheatSheet')) die('a cheatSheet inside a reference sheet draws its title and nothing else');
for (const s of FUTUR_PROCHE_SHEETS[0]!.sections!) {
  const cols = (s as { cols?: string[] }).cols;
  if (cols && cols.length > SHEET_COLS_MAX) die(`a table inside a sheet may hold ${SHEET_COLS_MAX} columns. a2.04 measured a FOUR-column one clipping on a Pixel 6.`);
  for (const r of ((s as { rows?: string[][] }).rows ?? [])) {
    for (const cell of r) if (cell.length > SHEET_CELL_MAX) die(`the sheet cell ${JSON.stringify(cell)} is ${cell.length} characters and this build budgeted ${SHEET_CELL_MAX}`);
  }
}
const errorsSection = byId(ERRORS_SECTION_ID) as { swipe?: boolean } | undefined;
if (!errorsSection?.swipe) die('commonErrors without swipe hits a break that falls out of the switch and draws a blank screen');

/* THE SHEET'S OWN TITLE IS DRAWN IN ITS HEADER BAR AND ELLIPSISES THERE.
   FOUND ON A PIXEL 6, v1 to v2. It renders in full on the card that opens the
   sheet, which is why nothing looked wrong anywhere else. */
{
  const t = FUTUR_PROCHE_SHEETS[0]!.title ?? '';
  if (t.length > SHEET_TITLE_MAX) die(`the sheet title ${JSON.stringify(t)} is ${t.length} characters and the sheet's header bar cuts at ${SHEET_TITLE_MAX}`);
}

/* THE BREAK CARD, WHICH IS THE MOST FRAGILE SCREEN IN AN A2 SCENE.
   FOUND ON A PIXEL 6, v1 to v2: its own Continue was under the pager bar
   because three things were over budget at once. Ledger §7 and a2.14 §9.1. */
{
  const brk = FUTUR_PROCHE_SCENE_BEATS.find((b) => b.kind === 'break') as {
    heading?: string; body?: string; coach?: string;
    wrong?: { fr?: string; en?: string }; right?: { fr?: string; en?: string };
  } | undefined;
  if (!brk) die('the scene has no break card, and it is where the rule arrives');
  const words = (s: string) => s.trim().split(/\s+/).length;
  if ((brk.heading ?? '').length > BREAK_BUDGET.heading) die(`the break heading is ${(brk.heading ?? '').length} characters and it wraps past ${BREAK_BUDGET.heading}`);
  if (words(brk.body ?? '') > BREAK_BUDGET.bodyWords) die(`the break body is ${words(brk.body ?? '')} words and the budget is ${BREAK_BUDGET.bodyWords}`);
  if (brk.coach && words(brk.coach) > BREAK_BUDGET.coachWords) die(`the break coach is ${words(brk.coach)} words and the budget is ${BREAK_BUDGET.coachWords}`);
  /* AND NOTHING ON THE BREAK CARD REPEATS THE SCENE'S CLOSING.
     v2 to v3, found on a Pixel 6. Both render on ONE screen, so a break `coach`
     equal to the scene's `closing.text` printed the reframe twice a paragraph
     apart and pushed the card's own Continue back under the pager bar.
     Invariants §7 names chrome repeated on one screen as one of the four
     classes only a device finds; two fields owned by two different objects,
     each correct on its own, is how it happens. */
  {
    const scene = byId(SCENE_SECTION_ID) as { closing?: { text?: string } } | undefined;
    const closing = scene?.closing?.text ?? '';
    for (const line of strings(brk)) {
      if (closing && line === closing) die(`the break card repeats the scene's closing line, and both render on one screen: ${JSON.stringify(line)}`);
    }
  }
  for (const [side, row] of [['wrong', brk.wrong], ['right', brk.right]] as const) {
    if ((row?.fr ?? '').length > BREAK_BUDGET.fr) die(`the break's ${side} French is ${(row?.fr ?? '').length} characters and 31 wrapped on a Pixel 6; the budget is ${BREAK_BUDGET.fr}`);
    if ((row?.en ?? '').length > BREAK_BUDGET.en) die(`the break's ${side} gloss is ${(row?.en ?? '').length} characters and the budget is ${BREAK_BUDGET.en}`);
  }
}

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
  const nsNow = await c.query<{ id: string }>("select id from content_items where id like 'fr.a2.verbes.%' order by id");
  const inBlock = nsNow.rows.map((r) => r.id).filter((id) => isMine(id));
  const foreign = inBlock.filter((id) => !AUTHORED_IDS.includes(id));
  if (foreign.length) {
    c.release(); await pool.end();
    die(`${foreign.length} rows exist inside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to} and it does not own them:\n  ${foreign.join('\n  ')}`);
  }
  const before = nsNow.rowCount ?? 0;
  if (before < ROW_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`fr.a2.verbes held ${ROW_COUNT_BEFORE} rows and now holds ${before}. A SHRINKING total is somebody deleting rows.`);
  }
  if (before !== ROW_COUNT_BEFORE && before !== ROW_COUNT_BEFORE + AUTHORED_IDS.length) {
    console.log(`  !! fr.a2.verbes holds ${before} rows and this build expected ${ROW_COUNT_BEFORE}. Nothing is inside the block, so this is somebody else's allocation. Reported, not fatal.`);
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
     sharing an fr in one theme as one card served twice, article stripped. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const themeRows = await c.query<{ id: string; fr: string; gender: string | null; kind: string }>(
    'select id, fr, gender, kind from content_items where theme = $1', [THEME]);
  const seenFr = new Map<string, string>();
  for (const r of themeRows.rows) if (!AUTHORED_IDS.includes(r.id)) seenFr.set(strip(r.fr), r.id);
  for (const r of FUTUR_PROCHE) {
    const clash = seenFr.get(strip(r.fr));
    if (clash) {
      c.release(); await pool.end();
      die(`${r.id} ${JSON.stringify(r.fr)} collides with ${clash} inside ${THEME}. The flashcard hub would serve one card twice.`);
    }
  }

  /* a1.03's ENDING POPULATION, THROUGH THE REAL FUNCTION RATHER THAN A COPY.
     NECESSARY AND NOT SUFFICIENT: this measures POSTGRES, where an imported row
     already exists and adds nothing, and a1.03 measures it off THE SEED, where
     a CARRY is what puts it there. The merge does the other half. */
  const baseRows = themeRows.rows.filter((r) => !AUTHORED_IDS.includes(r.id));
  const popBefore = endingPopulation(baseRows as never);
  const popAfter = endingPopulation([...baseRows, ...AUTHORED_ITEMS] as never);
  if (popBefore.length !== popAfter.length) {
    c.release(); await pool.end();
    die(`this build changes a1.03's ending population from ${popBefore.length} rows to ${popAfter.length}. Invariants §5: withdraw rather than argue.`);
  }
  const impGender = await c.query<{ id: string; gender: string }>(
    'select id, gender from content_items where id = any($1) and gender is not null', [IMPORTED_IDS]);
  if (impGender.rowCount) {
    c.release(); await pool.end();
    die(`${impGender.rowCount} imported rows carry a gender and the merge would carry them into the seed: ${impGender.rows.map((r) => `${r.id}(${r.gender})`).join(', ')}`);
  }
  console.log(`  a1.03         ending population unchanged at ${popBefore.length} rows from this theme, 0 gendered rows authored AND 0 imported`);

  /* THE MEASUREMENTS THE LESSON RESTS ON, RE-RUN, AND EXCLUDING THIS LESSON'S
     OWN ROWS. a2.17 §9: a lesson that counts itself prints a figure that grows
     on every re-apply, and this one authors twenty-nine matching sentences. */
  const FP_NEG = "(\\y|'')(ne|n'') +(vais|vas|va|allons|allez|vont) +pas +[a-zà-ÿ]{3,}(er|ir|re|oir)\\y";
  const neg = await c.query<{ n: string; respelled: string }>(
    `select count(*) n, count(*) filter (where respell is not null and respell <> '') respelled
       from content_items where status='published' and fr ~* $1 and id <> all($2)`, [FP_NEG, AUTHORED_IDS]);
  if (Number(neg.rows[0]!.n) !== NEGATIVE_EVIDENCE.rows) {
    console.log(`  !! published negatives excluding this lesson's own: ${neg.rows[0]!.n}, and the card prints ${NEGATIVE_EVIDENCE.rows}. Somebody else has published one.`);
  }
  if (Number(neg.rows[0]!.respelled) > RESPELL_ADDITIONS.length) {
    c.release(); await pool.end();
    die(`${neg.rows[0]!.respelled} published negatives now carry a respelling and this build supplies ${RESPELL_ADDITIONS.length}. The whole shape of this lesson rests on the corpus having published the sentence and never the card.`);
  }

  /* a2.02's PARADIGM, WHICH THE TRAP IS BUILT OUT OF. */
  const par = await c.query<{ id: string; fr: string }>(
    `select id, fr from content_items where id like 'fr.a2.verbes.%'
      and split_part(id,'.',4)::int between 261 and 266 and status='published' order by id`);
  if (par.rowCount !== 6) {
    c.release(); await pool.end();
    die(`fr.a2.verbes.261..266 is ${ALLER_UNIT}'s aller paradigm and the trap is built on it; it now holds ${par.rowCount} published rows`);
  }
  console.log(`  the evidence  ${neg.rows[0]!.n} published negatives, ${neg.rows[0]!.respelled} with a respelling; ${ALLER_UNIT}'s six-row paradigm intact`);

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

  /* DEPENDENTS. Probed rather than copied: three builds in batch 1 got three
     different answers. */
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
    // THE SUPPLIED RESPELLINGS, guarded by the row still having none of its own,
    // which is a2.03 §7's one line and the thing that makes the path safe.
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
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'");
  const check = await c.query<{ id: string; respell: string | null; drills: string[] }>(
    'select id, respell, drills::text[] drills from content_items where id = any($1)',
    [[...RESPELL_ADDITIONS.map((a) => a.id), ...DRILL_ADDITIONS.map((d) => d.id)]]);
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const a of RESPELL_ADDITIONS) {
    const now = String(post.get(a.id)?.respell ?? '');
    if (now !== a.to) failed.push(`${a.id} respell is ${JSON.stringify(now)} and the supplied value is ${JSON.stringify(a.to)}`);
    if (hasPlainNasalFor(a.fr, now)) failed.push(`${a.id} is flagged after the addition: ${JSON.stringify(now)}`);
  }
  for (const d of DRILL_ADDITIONS) {
    const have = pgArray(post.get(d.id)?.drills);
    for (const want of d.add) if (!have.includes(want)) failed.push(`${d.id} still has no ${want} drill`);
  }
  const nsAfter = Number(afterRows.rows[0]!.n);
  if (nsAfter !== before + AUTHORED_ITEMS.length && nsAfter !== before) {
    failed.push(`fr.a2.verbes holds ${nsAfter} rows and it held ${before} before this build's ${AUTHORED_ITEMS.length}`);
  }
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    '\n  applied to Postgres:\n'
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_ITEMS[0]!.id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1]!.id}\n`
    + '      ZERO headwords and ZERO gendered rows, authored OR imported.\n'
    + `    0 respellings repaired; ${RESPELL_ADDITIONS.length} SUPPLIED to rows that never had one\n`
    + `    ${NOT_REPAIRED.length} rows found broken and left alone, because this build does not display them\n`
    + `    ${DRILL_ADDITIONS.length} drill additions, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id out of ${EXPECTED_SOURCE_THEMES} themes, ${READ_NOT_IMPORTED.length} read and refused\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${FUTUR_PROCHE_ITEM_IDS.length} items\n`
    + `    fr.a2.verbes row count: ${before} before, ${nsAfter} after (max ${afterRows.rows[0]!.mx})\n\n`
    + '  NEXT: pnpm tsx scripts/merge-futur-proche-into-seed.ts\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
