/* a2.05 « Le passé composé avec avoir », seq 16. Corpus + lesson + terms, to
 * Postgres.
 *
 *     pnpm content:passe-compose -- --dry-run
 *     pnpm content:passe-compose
 *
 * ── WHAT THIS BATCH REFUSES ──────────────────────────────────────────────
 *
 * A BARE PAST FORM AS A CORPUS ROW, which is the ledger decision this lesson
 *   was built to make and which a2.20 inherits. Zero on both sides.
 * `pas` behind the past form, ANYWHERE except the seven sections where the
 *   error is the content, and never on a corpus row at all.
 * A naming form behind avoir — « j'ai manger » — outside those same sections.
 * A past form agreeing with avoir, anywhere in this lesson's own surfaces.
 * être as an auxiliary anywhere. That is a2.21, two lessons ahead.
 * ANY IRREGULAR PAST FORM, by name, on any surface and in any row. a2.20 owns
 *   forty of them and it is the very next lesson.
 * The affirmative and the negative in different sections. They are asserted as
 *   ADJACENT PAIRS in one section, which is the layout claim the brief makes.
 * A dictée target that `dicteeMode` puts in WORD mode.
 * An ear question offering two options that are one sound apart. manger and
 *   mangé have no correct answer between them.
 * Grammar jargon on a learner surface, walked over `sections + sheets + terms
 *   + intro + overview + acts + drills`, in both `prose()` and `display()`,
 *   with every entry checked in its -s plural.
 * A stacked trapDrill, a trapDrill carrying a `size`, a cards-step label that
 *   miscounts its own array, or an audio step whose recording does not contain
 *   the cards' own lines.
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
  A103_SEED_POPULATION, A217_DEFERRAL, A219_JE_NEGATIVE, A219_JE_NEGATIVE_LETTERS,
  A219_REFRAME, A220_BLOCK, ADVERB_EVIDENCE, ADVERB_UNIT, AFFIRMATIVE_EVIDENCE,
  AGREED_AFTER_AVOIR, AGREED_MUST_FIRE, AGREED_MUST_NOT_FIRE, ALL_REPAIRS,
  AUTHORED_HEADWORDS, AUTHORED_IDS, AUTHORED_PAST_FORMS, AVOIR_UNIT,
  BREAK_BUDGET, DEPENDENTS, DICTEE_FORMS, DICTEE_LIMIT, DICTEE_MATRIX,
  DISPLAYED_FALSE_POSITIVES,
  DRILL_ADDITIONS, ENDINGS, ER_UNIT, ETRE_AUXILIARY, ETRE_MUST_FIRE,
  ETRE_MUST_NOT_FIRE, ETRE_UNIT, EXPECTED_ACTS, EXPECTED_AUTHORED,
  EXPECTED_DISPLAY_ONLY, EXPECTED_IMPORTED, EXPECTED_NASALS_MISSED,
  EXPECTED_NASALS_SEEN, EXPECTED_QUESTIONS, EXPECTED_REPAIRS, EXPECTED_SECTIONS,
  EXPECTED_SOURCE_THEMES, EXPECTED_TERMS, EXPECTED_TRAP_DRILLS,
  FALSE_POSITIVE_CANDIDATES, FALSE_POSITIVE_CONTROL, FRAME_PAST, FRAME_VERB,
  FUTUR_UNIT, GRID_CELL_MAX, ID_BLOCK, IL_NEGATIVE_ID, IMPORTED, IMPORTED_IDS,
  INTRO_NAMES_NO_UNIT, INTRO_UNIT_ID_MEASURED_ACROSS, SCENE_BUBBLE_CLIP,
  INFINITIVE_AFTER_AVOIR, INFINITIVE_MUST_FIRE, INFINITIVE_MUST_NOT_FIRE,
  IRREGULAR_BY_NAME, IRREGULAR_PAST, IRREGULAR_UNIT, IR_UNIT, LESSON_ID,
  NEGATION_UNIT, NEGATIVE_EVIDENCE, NOT_REPAIRED, NO_EAR_QUESTION,
  OWNS_MISSIONS, PAIRS, PARADIGM_MISSIONS, PARTICIPLE_DECISION,
  PAS_AFTER_MUST_FIRE, PAS_AFTER_MUST_NOT_FIRE, PAS_AFTER_PAST, PASSE_COMPOSE,
  JE_ELISION, reduceNegative,
  PDO_EVIDENCE, PERSONS, PRONOUN_UNIT, PUBLISHED_NEGATIVE_IDS,
  READ_NOT_IMPORTED, REFRAME, REJECTED_THEME, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE, RE_UNIT,
  ROW_COUNT_BEFORE, SECTION_CONVENTION, SHEET_CELL_MAX, SHEET_COLS_MAX,
  SHEET_ID, SHEET_TITLE_MAX, STEP_LABEL_WORDS, TENSE_PAIR, THEME,
  THEME_COUNT_BEFORE, TIME_UNIT, TITLE_MAX, UNIT, WRONG, isA220, isMine,
} from './data/passe-compose-corpus.ts';
import { PASSE_COMPOSE_TERMS, TERM_ROWS, TERM_ROW_MAX, rowWidth } from './data/passe-compose-terms.ts';
import {
  AGO_SECTION_ID, AVOIR_SECTION_ID, DICTATION_SECTION_ID, ENDINGS_SECTION_ID,
  ENGLISH_SECTION_ID, ERRORS_SECTION_ID, GAP_TRAP_SECTION_ID,
  GROUPS_SECTION_ID, INSIDE_SECTION_ID, LISTEN_SECTION_ID, NOAGREE_SECTION_ID,
  NOTHEAR_SECTION_ID, PAIR_SECTION_ID, PASSE_COMPOSE_ACTS,
  PASSE_COMPOSE_DICTEE_IDS, PASSE_COMPOSE_DRILLS, PASSE_COMPOSE_ERROR_TRIGGERS,
  PASSE_COMPOSE_ITEM_IDS, PASSE_COMPOSE_LESSON, PASSE_COMPOSE_SCENE_BEATS,
  PASSE_COMPOSE_SHEETS, PASSE_COMPOSE_SPEAK_IDS, PASSE_COMPOSE_TRANCHES,
  PRODUCE_SECTION_ID, QUIZ_SECTION_ID, READING_SECTION_ID, ROUNDUP_SECTION_ID,
  SCENARIO_SECTION_ID, SCENE_SECTION_ID, SIX_SECTION_ID, UNSEEN_SECTION_ID,
  WHICH_TRAP_SECTION_ID, WRONG_FORM_SECTIONS,
} from './data/passe-compose-lesson.ts';
import { PASSE_COMPOSE_ROWS, MEASURED } from './data/passe-compose-rows.gen.ts';
import { displayRespell } from './data/passe-compose-imported.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = PASSE_COMPOSE_LESSON;
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
 *  see `j'ai`, which is the first two words of half of this lesson. */
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
 *  ONE THAT IS. a2.19 §1: the house right boundary counts an apostrophe as a
 *  word character, so « a2.17's card » does not match `a2.17`. This lesson names
 *  nine units and writes most of them possessively. */
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
 *  `tense`, `past` and `present` are HOUSE VOCABULARY and this lesson could not
 *  say what it is about without them. `participle` and `auxiliary` are not, and
 *  the plain phrases used instead are « the past form » and « avoir ». Every
 *  entry is checked in its -s plural because `hasPhrase` is boundary-exact and
 *  a2.15 shipped "Three paradigms, eighteen cells" past all three of its
 *  layers. */
const JARGON = [
  'participle', 'auxiliary', 'periphrastic', 'perfective', 'perfect aspect',
  'compound tense', 'present perfect', 'preterite', 'infinitive', 'infinitival',
  'inflection', 'inflected', 'paradigm', 'morpheme', 'morphology', 'lexeme',
  'phoneme', 'phonological', 'orthography', 'nasal vowel', 'complement',
  'constituent', 'predicate', 'discontinuous', 'invariable', 'clitic',
  'proclitic', 'direct object', 'transitive', 'exponent',
  'first person', 'second person', 'third person',
];

const AUTHORED_ITEMS: Item[] = PASSE_COMPOSE.map((r) => {
  const { role, person, ...rest } = r as Record<string, unknown> & { role: string; person?: string };
  void role; void person;
  return rest as unknown as Item;
});

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.05 "${UNIT.sub}"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS, AGAINST EXPLICIT CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

if (LESSON.unitId !== UNIT_ID) die(`the lesson says unit ${LESSON.unitId} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (PASSE_COMPOSE.length !== EXPECTED_AUTHORED) die(`${PASSE_COMPOSE.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (Object.keys(PASSE_COMPOSE_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(PASSE_COMPOSE_TERMS).length} terms, expected ${EXPECTED_TERMS}`);
if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${ALL_REPAIRS.length} repairs and this build claims ${EXPECTED_REPAIRS}`);
if (RESPELL_ADDITIONS.length !== 4) die(`RESPELL_ADDITIONS holds ${RESPELL_ADDITIONS.length} and this build supplies exactly four respellings`);

const traps = LESSON.sections.filter((s) => s.type === 'trapDrill');
if (traps.length !== EXPECTED_TRAP_DRILLS) die(`${traps.length} trapDrills, expected ${EXPECTED_TRAP_DRILLS}`);
if ((LESSON.sheets ?? []).length !== 1) die(`one reference sheet, and the lesson has ${String((LESSON.sheets ?? []).length)}`);
if ((LESSON.sheets ?? [])[0]?.id !== SHEET_ID) die('the sheet id constant and the sheet disagree');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('ONE quiz section. A second is silently never rendered.');
if (LESSON.sections.filter((s) => s.type === 'tapTable').length !== 1) die('ONE tapTable, and it is the endings grid. The paradigm table lives in the sheet.');

/* THE MISSION COUNT IS ABOVE THE CONVENTION AND THIS BUILD SAYS SO OUT LOUD.
   Ledger §a2.13-0: the 24-section shape is a convention and a2.13 shipped 32.
   The overrun is REPORTED here rather than hidden, and the constant is what the
   test asserts, so a later author who trims it back has to change both. */
if (LESSON.sections.length <= SECTION_CONVENTION) {
  die(`this lesson is declared as an overrun of the ${SECTION_CONVENTION}-section convention and it holds ${LESSON.sections.length}. Correct SECTION_CONVENTION or the section list.`);
}
console.log(`  counts        ${PASSE_COMPOSE.length} authored, ${IMPORTED_IDS.length} imported, ${LESSON.sections.length} sections (convention ${SECTION_CONVENTION}, DELIBERATE OVERRUN), ${EXPECTED_ACTS} acts, ${qs.length} questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LEDGER DECISION: A PAST FORM IS NOT A CORPUS ITEM
 * ═══════════════════════════════════════════════════════════════════════ */

if (PARTICIPLE_DECISION.isCorpusItem) die('PARTICIPLE_DECISION says a past form IS a corpus item, and this whole build is written on the answer being no. Amend the ledger first.');
if (PARTICIPLE_DECISION.authoredHere !== 0) die('the ledger decision says this lesson authors zero past forms as rows');
if (PARTICIPLE_DECISION.reservedForA220 !== 0) die(`the ledger decision says ${IRREGULAR_UNIT} authors zero past forms as rows`);
if (Object.keys(AUTHORED_PAST_FORMS).length !== 0) die('AUTHORED_PAST_FORMS is not empty and the ledger decision says it must be');
if (MEASURED.bareRegularPastForms !== 0) die(`the manifest measured ${MEASURED.bareRegularPastForms} bare regular past forms as headwords and the split with ${IRREGULAR_UNIT} rests on zero`);

const authoredWords = PASSE_COMPOSE.filter((r) => r.kind === 'word');
if (authoredWords.length) die(`${authoredWords.length} authored rows are headwords: ${authoredWords.map((r) => r.id).join(', ')}. This lesson authors sentences only.`);
/* AND `kind` ALONE CANNOT SEE A BARE PAST FORM. FOUND BY MUTATION 8.
 *
 * `S()` writes `kind: 'sentence'` on every row it makes, so changing an
 * authored `fr` from « J'ai parlé. » to « parlé » produces a row that IS a
 * headword in everything but the field the guard was reading, and the whole
 * ledger decision walked past it. A row with no whitespace in its `fr` is a
 * bare word whatever it calls itself. */
const authoredBare = PASSE_COMPOSE.filter((r) => !/\s/.test(r.fr));
if (authoredBare.length) {
  die(`${authoredBare.length} authored row(s) hold a single word: ${authoredBare.map((r) => `${r.id} ${JSON.stringify(r.fr)}`).join(', ')}. `
    + 'A bare past form on a card has nobody attached to it, which is the ledger decision this lesson made, and the kind field cannot see it because S() writes sentence on every row.');
}
const authoredGendered = PASSE_COMPOSE.filter((r) => (r as { gender?: string }).gender);
if (authoredGendered.length) die(`${authoredGendered.length} authored rows carry a gender. Invariants §5.`);
if (Object.keys(AUTHORED_HEADWORDS).length !== 0) die('this build authors zero headwords and AUTHORED_HEADWORDS is not empty');
for (const r of PASSE_COMPOSE) {
  if (!isMine(r.id)) die(`${r.id} is authored and is outside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to}`);
  if (isA220(r.id)) die(`${r.id} is inside the block reserved for ${IRREGULAR_UNIT} (${A220_BLOCK.from}..${A220_BLOCK.to})`);
  if (r.level !== 'a2') die(`${r.id} is level ${r.level} and every row this lesson authors is a2`);
  if (r.theme !== THEME) die(`${r.id} is in theme ${r.theme} and this build writes into ${THEME}`);
  // Widened to `string` deliberately: THEME is a literal type, so TypeScript
  // proves the comparison can never be true and refuses to compile it. The
  // check is here for a MUTATION that changes the constant.
  if ((r.theme as string) === (REJECTED_THEME as string)) die(`${r.id} is in ${REJECTED_THEME}, the theme this build considered and rejected`);
}
if (EXPECTED_DISPLAY_ONLY !== 0) die('this lesson has no display-only rows and EXPECTED_DISPLAY_ONLY is not zero');
console.log(`  the ledger    a past form is NOT a corpus item: 0 authored here, 0 reserved for ${IRREGULAR_UNIT}, 0 measured in Postgres`);
console.log(`  authored      0 headwords, 0 gendered rows, all ${PASSE_COMPOSE.length} inside ${ID_BLOCK.from}..${ID_BLOCK.to}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ENDINGS GRID: ONE ROW PER GROUP, AND EVERY GROUP NAMES ITS UNIT
 * ═══════════════════════════════════════════════════════════════════════ */

const grid = byId(ENDINGS_SECTION_ID) as {
  type?: string; cols?: string[];
  rows?: { cells: string[]; detail?: { title?: string; body?: string } }[];
} | undefined;
if (grid?.type !== 'tapTable') die(`${ENDINGS_SECTION_ID} is ${grid?.type} and the three endings belong in ONE grid`);
if ((grid.rows ?? []).length !== ENDINGS.length) die(`the grid has ${(grid.rows ?? []).length} rows and there are ${ENDINGS.length} groups`);
if ((grid.cols ?? []).length !== 3) die('the grid is three columns wide; a2.17 measured a three-column cell at eleven characters');
ENDINGS.forEach((e, i) => {
  const cells = grid.rows![i]!.cells;
  if (cells[0] !== e.group) die(`grid row ${i} names ${JSON.stringify(cells[0])} and the group is ${JSON.stringify(e.group)}`);
  if (cells[1] !== e.verb) die(`grid row ${i} gives the verb as ${JSON.stringify(cells[1])} and the table says ${JSON.stringify(e.verb)}`);
  if (cells[2] !== e.past) die(`grid row ${i} gives the past form as ${JSON.stringify(cells[2])} and the table says ${JSON.stringify(e.past)}`);
  for (const cell of cells) if (cell.length > GRID_CELL_MAX) die(`grid cell ${JSON.stringify(cell)} is ${cell.length} characters and a three-column cell holds ${GRID_CELL_MAX}`);
});
if (new Set(ENDINGS.map((e) => e.past.slice(-1))).size !== 3) die('the three groups do not have three different endings, and that is the whole grid');
/* AND ALL THREE UNITS ARE NAMED ON A LEARNER SURFACE. The brief asks for this by
   name: a learner who sees the three groups reappear intact has been shown that
   fifteen lessons of structure were load-bearing. */
const learnerText = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
].join('\n');
for (const u of [ER_UNIT, IR_UNIT, RE_UNIT]) {
  if (!namesUnit(learnerText, u)) die(`${u} taught one of the three groups and is never named by id`);
}
const groupsText = strings(byId(GROUPS_SECTION_ID)).join('\n');
for (const u of [ER_UNIT, IR_UNIT, RE_UNIT]) {
  if (!namesUnit(groupsText, u)) die(`${GROUPS_SECTION_ID} is the section that pays off the three groups and does not name ${u}`);
}
console.log(`  the endings   ${ENDINGS.length} groups, 3 columns, 3 different endings, ${ER_UNIT}/${IR_UNIT}/${RE_UNIT} all named by id`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: THE AFFIRMATIVE AND THE NEGATIVE, ADJACENT, IN ONE SECTION
 *
 *  THE LAYOUT CLAIM THE BRIEF ASKS THE TEST TO ASSERT. Anything that showed the
 *  negative in a separate section would have hidden the only thing the learner
 *  needs to see, so the pairing is asserted as a pairing rather than as a
 *  presence: example 2i is the affirmative and example 2i+1 is its negative.
 * ═══════════════════════════════════════════════════════════════════════ */

const BY_ROW = new Map(PASSE_COMPOSE.map((r) => [r.id, r]));
const anyFr = (id: string): string => BY_ROW.get(id)?.fr ?? PASSE_COMPOSE_ROWS[id]?.fr ?? die(`${id} is neither an authored row nor in the manifest`);

const pairSection = byId(PAIR_SECTION_ID) as { type?: string; examples?: { fr: string; note?: string }[] } | undefined;
if (pairSection?.type !== 'examples') die(`${PAIR_SECTION_ID} is ${pairSection?.type} and the pair belongs in one examples screen`);
const ex = pairSection.examples ?? [];
if (ex.length % 2 !== 0) die(`${PAIR_SECTION_ID} holds ${ex.length} examples and they are read in pairs`);
if (ex.length < 6) die(`${PAIR_SECTION_ID} holds ${ex.length} examples and the brief asks for the pair in more than one person`);
for (let i = 0; i < ex.length; i += 2) {
  const pos = ex[i]!.fr;
  const neg = ex[i + 1]!.fr;
  // THE NEGATIVE IS THE AFFIRMATIVE WITH THE TWO HALVES IN IT, and in the `je`
  // row that is not quite true of the letters: « J'ai mangé. » elides je + ai
  // and « Je n'ai pas mangé. » does not, because the n' is between them.
  // `reduceNegative` puts the elision back. See JE_ELISION.
  const stripped = reduceNegative(neg);
  if (stripped.replace(/\s+/g, '') !== pos.replace(/\s+/g, '')) {
    die(`${PAIR_SECTION_ID} example ${i} and ${i + 1} are not the same sentence: ${JSON.stringify(pos)} against ${JSON.stringify(neg)} (which reduces to ${JSON.stringify(stripped)})`);
  }
  // AND THE `pas` SITS IN THE GAP, between the form of avoir and the past form.
  const m = /(ai|as|a|avons|avez|ont)\s+pas\s+([\p{L}]+)/iu.exec(neg);
  if (!m) die(`${PAIR_SECTION_ID} example ${i + 1} does not put pas between a form of avoir and the next word: ${JSON.stringify(neg)}`);
  if (m[2]!.toLowerCase() !== FRAME_PAST) die(`${PAIR_SECTION_ID} example ${i + 1} puts pas in front of ${JSON.stringify(m[2])} and the frame is ${JSON.stringify(FRAME_PAST)}`);
}
// AND EVERY PAIR THE CORPUS DECLARES IS A REAL PAIR. The `il` negative is an
// IMPORT, so this walk reads both sides through `anyFr`.
for (const p of PAIRS) {
  const pos = anyFr(p.posId);
  const neg = anyFr(p.negId);
  if (!/(?:^|\s)(?:ne|n['’])/i.test(neg)) die(`${p.negId} is declared as a negative and holds no ne`);
  if (!/\bpas\b/i.test(neg)) die(`${p.negId} is declared as a negative and holds no pas`);
  if (/\bpas\b/i.test(pos)) die(`${p.posId} is declared as an affirmative and holds a pas`);
  if (!pos.endsWith(`${FRAME_PAST}.`)) die(`${p.posId} does not end on the frame's past form`);
  if (!neg.endsWith(`${FRAME_PAST}.`)) die(`${p.negId} does not end on the frame's past form`);
}
if (PAIRS.length !== PERSONS.length) die(`${PAIRS.length} pairs and ${PERSONS.length} persons`);
if (PAIRS.filter((p) => !AUTHORED_IDS.includes(p.negId)).length !== 1) {
  die('exactly one negative in the paradigm is an import, and it is the one published respelled card in the corpus');
}
if (PAIRS.find((p) => p.person === 'il')!.negId !== IL_NEGATIVE_ID) die(`the il negative is meant to be ${IL_NEGATIVE_ID}`);
console.log(`  the pair      ${ex.length / 2} pairs adjacent in ${PAIR_SECTION_ID}, ${PAIRS.length} declared, 1 of them the published card ${IL_NEGATIVE_ID}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FOUR SHAPES, IN BOTH DIRECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const SHAPES: readonly [string, RegExp, readonly string[], readonly string[]][] = [
  ['PAS_AFTER_PAST', PAS_AFTER_PAST, PAS_AFTER_MUST_FIRE, PAS_AFTER_MUST_NOT_FIRE],
  ['INFINITIVE_AFTER_AVOIR', INFINITIVE_AFTER_AVOIR, INFINITIVE_MUST_FIRE, INFINITIVE_MUST_NOT_FIRE],
  ['AGREED_AFTER_AVOIR', AGREED_AFTER_AVOIR, AGREED_MUST_FIRE, AGREED_MUST_NOT_FIRE],
  ['ETRE_AUXILIARY', ETRE_AUXILIARY, ETRE_MUST_FIRE, ETRE_MUST_NOT_FIRE],
];
for (const [name, re, must, mustNot] of SHAPES) {
  for (const line of must) if (!fires(re, line)) die(`${name} does not fire on ${JSON.stringify(line)}`);
  for (const line of mustNot) if (fires(re, line)) die(`${name} fires on ${JSON.stringify(line)}. a2.17 §7 and a2.14 §6: guard the thing, not the letters.`);
}

const WRONG_FORMS = WRONG.map((w) => w.wrong);
const legalWrong = new Set<string>(WRONG_FORM_SECTIONS);
/** The three shapes a section may hold only where the error is the content. The
 *  ÊTRE one is NOT on this list: it is fatal everywhere, including the quiz. */
const ERROR_SHAPES: readonly [string, RegExp][] = [
  ['PAS_AFTER_PAST', PAS_AFTER_PAST],
  ['INFINITIVE_AFTER_AVOIR', INFINITIVE_AFTER_AVOIR],
  ['AGREED_AFTER_AVOIR', AGREED_AFTER_AVOIR],
];
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '';
  for (const line of strings(s)) {
    if (fires(ETRE_AUXILIARY, line)) die(`${sid} uses être as the first word: ${JSON.stringify(line)}. That is ${ETRE_UNIT}, two lessons ahead.`);
  }
  if (legalWrong.has(sid)) continue;
  const text = strings(s).join('\n');
  for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${sid} contains the wrong form ${JSON.stringify(w)}. It is permitted only in ${[...legalWrong].join(', ')}.`);
  for (const line of strings(s)) {
    for (const [name, re] of ERROR_SHAPES) if (fires(re, line)) die(`${sid} matches ${name}: ${JSON.stringify(line)}`);
  }
}
/* `drills` IS NOT ON THIS LIST AND THAT IS DELIBERATE. A retest is a one-question
   mcq whose distractors are the errors: « Elle n'a répondu pas. » is the whole
   point of `retest-the-gap`. Drills get their own narrower check below, where
   the COACH and the ANSWER side of every flashcard pair must be clean and the
   options may hold anything. */
for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', LESSON.terms ?? {}], ['intro', LESSON.intro ?? ''], ['overview', LESSON.overview ?? {}], ['acts', LESSON.acts ?? []]] as const) {
  const text = strings(v).join('\n');
  for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${label} contains the wrong form ${JSON.stringify(w)}`);
  for (const line of strings(v)) {
    for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
      if (fires(re, line)) die(`${label} matches ${name}: ${JSON.stringify(line)}`);
    }
  }
}
// NO CORPUS ROW MAY DO ANY OF IT, authored or imported.
for (const r of PASSE_COMPOSE) {
  for (const w of WRONG_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} is a corpus row holding the wrong form ${JSON.stringify(w)}`);
  for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
    if (fires(re, r.fr)) die(`${r.id} is a corpus row matching ${name}: ${JSON.stringify(r.fr)}`);
  }
}
for (const i of IMPORTED) {
  for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
    if (fires(re, i.fr)) die(`${i.id} is imported and matches ${name}`);
  }
}
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
  for (const r of PASSE_COMPOSE) {
    const clash = importedFrs.get(r.fr.toLowerCase());
    if (clash) die(`${r.id} authors ${JSON.stringify(r.fr)}, which this lesson already imports as ${clash}.`);
  }
}
console.log(`  the shapes    4 guarded in both directions, ${WRONG_FORMS.length} wrong forms present only in ${legalWrong.size} sections, être as a first word nowhere at all`);

/* ══════════════════════════════════════════════════════════════════════════
 *  NOT ONE IRREGULAR PAST FORM, BY NAME
 *
 *  The hardest restriction in the build, because fait, pris, vu and dit are all
 *  extremely frequent. a2.20 owns forty of them and it is the very next lesson,
 *  so this lesson names the fact that they exist and never prints one.
 * ═══════════════════════════════════════════════════════════════════════ */

{
  const surfaces = display(LESSON.sections).concat(
    display(LESSON.sheets ?? []), display(LESSON.terms ?? {}), [LESSON.intro ?? ''],
    display(LESSON.overview ?? {}), display(LESSON.acts ?? []), display(LESSON.drills ?? []),
  ).join('\n');
  for (const w of IRREGULAR_PAST) {
    if (hasPhrase(surfaces, w)) die(`the irregular past form ${JSON.stringify(w)} is on a learner surface. ${IRREGULAR_UNIT} owns all forty and it is the next lesson.`);
  }
  for (const r of PASSE_COMPOSE) {
    for (const w of IRREGULAR_PAST) if (hasPhrase(r.fr, w)) die(`${r.id} holds the irregular past form ${JSON.stringify(w)}`);
  }
  for (const i of IMPORTED) {
    for (const w of IRREGULAR_PAST) if (hasPhrase(i.fr, w)) die(`${i.id} is imported and holds the irregular past form ${JSON.stringify(w)}`);
  }
  // AND THE FIVE THE BRIEF NAMES ARE ASSERTED INDIVIDUALLY, so a change to the
  // list above cannot quietly drop one of the frequent ones.
  for (const w of IRREGULAR_BY_NAME) {
    if (!IRREGULAR_PAST.includes(w)) die(`${JSON.stringify(w)} is one of the five the brief names and is not in IRREGULAR_PAST`);
    if (hasPhrase(surfaces, w)) die(`${JSON.stringify(w)} is on a learner surface`);
  }
  // AND THE FACT THAT THEY EXIST IS SAID, which is why it is allowed to be
  // mentioned at all: a learner who meets « j'ai fait » tomorrow and has not
  // been told concludes they were taught a simplification.
  if (!/past form you could not have guessed/i.test(learnerText)) {
    die(`nothing on a learner surface says that some past forms cannot be built from the naming form, and ${IRREGULAR_UNIT} is the next lesson`);
  }
  if (!namesUnit(learnerText, IRREGULAR_UNIT)) die(`${IRREGULAR_UNIT} owns every past form this lesson refuses and is never named by id`);
  console.log(`  irregulars    ${IRREGULAR_PAST.length} forms absent from every surface and every row, ${IRREGULAR_BY_NAME.length} asserted by name, ${IRREGULAR_UNIT} named forward`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  NO AGREEMENT, AND THE ONE CASE THAT IS NOT THIS LESSON'S
 * ═══════════════════════════════════════════════════════════════════════ */

{
  // The claim is scoped to THIS LESSON. 81 published rows DO agree a past form
  // after avoir and every one of them is the preceding-direct-object case,
  // which is a2.06's at seq 21. Guard false positives: an absence claim is
  // scoped to the lesson, never to the bundle.
  if (MEASURED.precedingObjectAgreements !== PDO_EVIDENCE.rows) {
    console.log(`  !! the preceding-object count is ${MEASURED.precedingObjectAgreements} and the corpus file records ${PDO_EVIDENCE.rows}. Reported, not fatal.`);
  }
  if (!namesUnit(learnerText, PRONOUN_UNIT)) die(`${PRONOUN_UNIT} owns the one case where a past form agrees with avoir and is never named by id`);
  if (!namesUnit(learnerText, ETRE_UNIT)) die(`${ETRE_UNIT} says the opposite of this lesson about agreement and is never named by id`);
  // THE CLAIM AS A LITERAL, AND ITS INVERSION AS A NEGATIVE. a2.16 §3: a guard
  // looping over the constant the content renders is guarding nothing.
  if (!/does not agree with anybody|does not change for anybody|it is one shape/i.test(learnerText)) {
    die('nothing on a learner surface says the past form does not agree after avoir, which is the half a2.21 depends on');
  }
  if (/agrees with the subject after avoir|the past form agrees with avoir/i.test(learnerText)) {
    die('a learner surface says the past form agrees after avoir, which is the opposite of what this lesson owns');
  }
}

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BACK-REFERENCES, QUOTED VERBATIM AND CREDITED BY ID
 * ═══════════════════════════════════════════════════════════════════════ */

/* a2.19's NEGATION RULE. THE BRIEF ASKS FOR IT VERBATIM AND SAYS A PARAPHRASE
   MUST GO RED. It is imported from futur-proche-corpus.ts rather than retyped,
   AND the literal is asserted here as well, so a change on either side is
   caught: a2.16 §3, a back-reference to another unit's line is not a variable. */
{
  const A219_LINE = 'Wrap the verb that changed, not the one carrying the meaning.';
  if (A219_REFRAME !== A219_LINE) {
    die(`${FUTUR_UNIT}'s reframe is ${JSON.stringify(A219_REFRAME)} and this lesson was written to quote ${JSON.stringify(A219_LINE)}. If ${FUTUR_UNIT} changed it, read that lesson before changing this.`);
  }
  if (!hasPhrase(learnerText, A219_LINE)) die(`${FUTUR_UNIT}'s negation rule is not quoted verbatim anywhere. The brief asks for the exact wording and says a paraphrase must go red.`);
  if (!namesUnit(learnerText, FUTUR_UNIT)) die(`${FUTUR_UNIT} owns the negation rule this lesson extends and is never named by id`);
  // AND IT IS ON THE SCREEN WHERE THE NEGATIVE ARRIVES, not only in a term.
  const english = strings(byId(ENGLISH_SECTION_ID)).join('\n');
  if (!hasPhrase(english, A219_LINE)) die(`${ENGLISH_SECTION_ID} is where the negative arrives and it does not carry ${FUTUR_UNIT}'s wording`);
  if (!namesUnit(english, FUTUR_UNIT)) die(`${ENGLISH_SECTION_ID} quotes ${FUTUR_UNIT}'s rule and does not credit it`);
  // AND THIS LESSON HAS NOT WRITTEN A SECOND VERSION OF IT.
  if (/wrap the (?:auxiliary|first word|verb that moved)/i.test(learnerText)) {
    die(`a learner surface carries a second wording of ${FUTUR_UNIT}'s rule. The brief says to use its wording or to report that it is unusable, not to write another one.`);
  }
}

/* a2.17's DEFERRAL, VERBATIM, ON THE SCREEN THAT CLOSES IT. */
{
  const A217_LINE = 'In a past tense the short ones move, and that rule arrives with the tense in a2.05.';
  if (A217_DEFERRAL !== A217_LINE) die(`${ADVERB_UNIT}'s deferral is ${JSON.stringify(A217_DEFERRAL)} and this lesson was written to quote ${JSON.stringify(A217_LINE)}`);
  const inside = strings(byId(INSIDE_SECTION_ID)).join('\n');
  if (!hasPhrase(inside, A217_LINE)) die(`${INSIDE_SECTION_ID} closes ${ADVERB_UNIT}'s deferral and does not quote its own wording`);
  if (!namesUnit(inside, ADVERB_UNIT)) die(`${INSIDE_SECTION_ID} closes ${ADVERB_UNIT}'s loop and does not name it`);
  // AND THE TWO PUBLISHED CARDS THAT PROVE THE SHAPE ARE ON IT.
  for (const id of ['fr.sons.alphabet.402', 'fr.sons.voyelles.355']) {
    if (!hasPhrase(inside, PASSE_COMPOSE_ROWS[id]!.fr)) die(`${INSIDE_SECTION_ID} does not draw ${id}, which is one of three published cards putting a short adverb in the gap`);
  }
}

/* a2.18's DEFERRAL, CLOSED, WITH ITS OWN SENTENCE ON THE SCREEN. */
{
  const ago = strings(byId(AGO_SECTION_ID)).join('\n');
  if (!hasPhrase(ago, "J'ai commencé il y a trois jours.")) die(`${TIME_UNIT}'s own past-referring sentence is not on the screen that closes its loop`);
  if (!hasPhrase(ago, 'il y a trois jours')) die(`${TIME_UNIT}'s phrase card is not beside it`);
  if (!namesUnit(ago, TIME_UNIT)) die(`the screen that closes ${TIME_UNIT}'s loop does not name it`);
  if (!/how long ago/i.test(ago)) die(`${AGO_SECTION_ID} does not say what it is for, and ${TIME_UNIT}'s canDo was reworded because this lesson owns it`);
}

/* a1.07, a1.18 AND THE OTHER NEIGHBOURS, NAMED BY ID. */
for (const u of [AVOIR_UNIT, NEGATION_UNIT, ER_UNIT, IR_UNIT, RE_UNIT, ADVERB_UNIT, TIME_UNIT, FUTUR_UNIT, IRREGULAR_UNIT, ETRE_UNIT, PRONOUN_UNIT]) {
  if (!namesUnit(learnerText, u)) die(`${u} is never named on a learner surface and this lesson leans on it`);
}
/* AND THE THIRD DEPENDENT, WHICH THE BRIEF MISSED. */
for (const u of DEPENDENTS) {
  if (!namesUnit(learnerText, u)) die(`${u} declares this unit as a prerequisite and is never named`);
}
console.log(`  references    ${FUTUR_UNIT} rule verbatim, ${ADVERB_UNIT} deferral verbatim, ${TIME_UNIT} loop closed, ${DEPENDENTS.length} dependents named`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SOUND CONTRAST, AND WHAT NO EAR MAY BE ASKED
 * ═══════════════════════════════════════════════════════════════════════ */

{
  const listen = strings(byId(LISTEN_SECTION_ID)).join('\n');
  const which = byId(WHICH_TRAP_SECTION_ID) as { cards?: { fr: string }[]; audio?: { recordingId?: string } } | undefined;
  if (!which) die(`${WHICH_TRAP_SECTION_ID} is missing and it is the audible half of the contrast`);
  // THE BRIEF'S THIRD REQUIRED LAYOUT: the two sit side by side AND it is a
  // sound contrast rather than a reading one, which is what an audio step is.
  if (!hasPhrase(listen, 'Je vais manger.')) die(`${LISTEN_SECTION_ID} does not hold the futur proche half of the contrast`);
  if (!hasPhrase(listen, "J'ai mangé.")) die(`${LISTEN_SECTION_ID} does not hold the passé composé half of the contrast`);
  if (!hasPhrase(listen, TENSE_PAIR.future)) die(`${LISTEN_SECTION_ID} does not draw ${FUTUR_UNIT}'s own published card`);
  if (!hasPhrase(listen, TENSE_PAIR.past)) die(`${LISTEN_SECTION_ID} does not draw this build's answer to it`);
  const cardFrs = (which.cards ?? []).map((c) => c.fr);
  for (const f of ['Je vais manger.', "J'ai mangé.", TENSE_PAIR.future, TENSE_PAIR.past]) {
    if (!cardFrs.includes(f)) die(`the tense trap does not carry ${JSON.stringify(f)} as a card, so the audio step cannot play it in one take`);
  }
  if (!which.audio?.recordingId) die('the tense trap declares no recording, and one take is the whole point of it');
  // AND NO EAR QUESTION OFFERS TWO OPTIONS THAT ARE ONE SOUND.
  const earQs = qs.filter((q) => q.format === 'listenChoose');
  if (earQs.length !== 1) die(`${earQs.length} listenChoose questions and this lesson asks exactly one`);
  const allEarOptionSets = [
    ...earQs.map((q) => (q.opts ?? []) as string[]),
    ...(which.cards ?? []).map((c) => [c.fr]),
  ];
  for (const opts of allEarOptionSets) {
    for (let i = 0; i < opts.length; i += 1) {
      for (let j = i + 1; j < opts.length; j += 1) {
        for (const [x, y] of NO_EAR_QUESTION) {
          if (x !== y && opts[i]!.replace(x, y) === opts[j]) die(`ear options ${JSON.stringify(opts[i])} and ${JSON.stringify(opts[j])} differ only by ${x}/${y}, which is one sound`);
        }
      }
    }
  }
  // AND THE LESSON SAYS SO, because the brief asks for it and a sentence in a
  // report cannot fail.
  if (!/same sound|one sound/i.test(strings(byId(NOTHEAR_SECTION_ID)).join('\n'))) {
    die(`${NOTHEAR_SECTION_ID} does not say that the pair is one sound, which is the whole reason no ear question offers it`);
  }
  console.log(`  the contrast  ${LISTEN_SECTION_ID} side by side, ${WHICH_TRAP_SECTION_ID} in one take, 1 ear question, ${NO_EAR_QUESTION.length} forbidden pairs checked`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP DRILLS ARE STEPPED, AND THE STEP LABELS COUNT THEIR OWN ARRAYS
 * ═══════════════════════════════════════════════════════════════════════ */

type TrapLike = {
  id?: string; swipe?: boolean; say?: string; size?: string;
  steps?: { kind: string; gate?: boolean; label?: string }[];
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
  /* a2.18 §3: THE CARDS STEP'S LABEL COUNTS ITS OWN ARRAY and the pager draws
     one dot per card directly under it. Found on a Pixel 6 and by nothing else;
     schema.ts, validateDensity and lesson-contract.test.ts all pass a label
     that says THREE CARDS over four dots. */
  const cardsStep = (t.steps ?? []).find((s) => s.kind === 'cards');
  const want = STEP_LABEL_WORDS[(t.cards ?? []).length];
  if (cardsStep?.label && want && !hasPhrase(cardsStep.label, want)) {
    die(`${t.id}'s cards step is labelled ${JSON.stringify(cardsStep.label)} and it holds ${(t.cards ?? []).length} cards`);
  }
  // AND THE `say` COUNTS THEM TOO.
  if (want && !hasPhrase(t.say ?? '', want)) die(`${t.id}'s say does not count its ${(t.cards ?? []).length} cards`);
}
console.log(`  trapDrills    ${traps.length} stepped rule>cards>audio>drill, gated, no size, every label counts its own array`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE, THROUGH THE REAL FUNCTION, IN BOTH DIRECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

for (const id of PASSE_COMPOSE_DICTEE_IDS) {
  const authored = PASSE_COMPOSE.find((x) => x.id === id);
  const text = authored?.fr ?? PASSE_COMPOSE_ROWS[id]?.fr;
  if (!text) die(`${id} is a dictée target and is neither an authored row nor in the manifest`);
  if (dicteeMode(text) !== 'letters') die(`${id} "${text}" is ${letterCount(text)} letters and spells in WORD mode, where every word is handed over pre-spelled`);
  if (authored && !authored.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill`);
}
const cannot = PASSE_COMPOSE.filter((r) => dicteeMode(r.fr) === 'words' && r.drills.includes('dictation'));
if (cannot.length) die(`${cannot.length} rows spell in WORD mode and carry a dictation drill: ${cannot.map((r) => r.id).join(', ')}`);

/* THE MATRIX, MEASURED THROUGH THE REAL FUNCTION RATHER THAN DESCRIBED, AND THE
   COMPARISON WITH a2.19 THAT IS THIS BUILD'S HEADLINE FINDING. */
for (const d of DICTEE_MATRIX) {
  const forms = DICTEE_FORMS[d.person];
  if (!forms) die(`DICTEE_MATRIX names the person ${JSON.stringify(d.person)} and DICTEE_FORMS has no entry for it`);
  const [, aff, neg] = forms;
  const pos = `${aff} ${FRAME_PAST}.`;
  const negative = `${neg} ${FRAME_PAST}.`;
  if (letterCount(pos) !== d.affirmative) die(`DICTEE_MATRIX says ${d.person} affirmative is ${d.affirmative} letters and the real function says ${letterCount(pos)}`);
  if (letterCount(negative) !== d.negative) die(`DICTEE_MATRIX says ${d.person} negative is ${d.negative} letters and the real function says ${letterCount(negative)}`);
  if ((dicteeMode(negative) === 'letters') !== d.negativeFits) die(`DICTEE_MATRIX says ${d.person}'s negative ${d.negativeFits ? 'fits' : 'does not fit'} and dicteeMode disagrees`);
  if (dicteeMode(pos) !== 'letters') die(`the affirmative for ${d.person} does not fit either, and the claim is that all eight do`);
}
if (DICTEE_MATRIX.filter((d) => d.negativeFits).length !== 6) die('the claim is that six of the eight negatives fit and the matrix says otherwise');
/* a2.19 PREDICTED THIS LESSON WOULD BE LONGER AND IT IS FOUR LETTERS SHORTER.
   Both figures go through the real function, and a2.19's sentence is a LITERAL
   here rather than an import: a2.16 §3, a constant whose job is to remember
   another lesson's value has to be one. */
if (letterCount(A219_JE_NEGATIVE) !== A219_JE_NEGATIVE_LETTERS) {
  die(`${FUTUR_UNIT}'s je negative is recorded as ${A219_JE_NEGATIVE_LETTERS} letters and the real function says ${letterCount(A219_JE_NEGATIVE)}`);
}
if (dicteeMode(A219_JE_NEGATIVE) !== 'words') die(`${FUTUR_UNIT}'s je negative is recorded as over the limit and dicteeMode disagrees`);
{
  const mine = `${DICTEE_FORMS.je![2]} ${FRAME_PAST}.`;
  if (dicteeMode(mine) !== 'letters') die('the je negative in this lesson is the finding and it does not fit');
  const saved = letterCount(A219_JE_NEGATIVE) - letterCount(mine);
  if (saved !== 4) die(`the elision is recorded as buying four letters and the real function says ${saved}`);
  if (letterCount(mine) > DICTEE_LIMIT) die('the je negative is over the limit');
}
console.log(`  dictée        ${PASSE_COMPOSE_DICTEE_IDS.length} targets, all LETTERS; 8 affirmatives fit and 6 negatives do, against ${FUTUR_UNIT}'s 3 — the elision buys 4 letters`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

const reframeWords = REFRAME.trim().split(/\s+/).length;
if (reframeWords > 14) die(`the reframe is ${reframeWords} words and has to survive recall mid-utterance`);
if (LESSON.reframe !== REFRAME) die('the lesson\'s reframe and the corpus constant disagree');
const reframeUses = countPhrase(learnerText, REFRAME);
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeSections < 6) die(`the reframe is carried by ${reframeSections} sections and this lesson was built to carry it in six`);
/* AND IT DOES NOT ASSERT THE THING THE BRIEF'S OWN CANDIDATE ASSERTED, which
   this build authors the counterexample to.
 *
 * THE PHRASE IS PERMITTED IN EXACTLY ONE PLACE AND IT MUST BE THERE: the deck
 * that shows « J'ai mangé une pomme. » names the false rule in order to break
 * it, which is the same treatment the four wrong forms get. A guard that banned
 * it outright would have removed the card that makes the reframe true. */
{
  const FALSE_RULE = /everything else goes between|everything goes in the gap/i;
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if (sid === NOAGREE_SECTION_ID) continue;
    for (const line of strings(s)) {
      if (FALSE_RULE.test(line)) die(`${sid} says everything goes in the gap. « J'ai mangé une pomme. » is the counterexample this build authors and the rule has to be about SMALL words.`);
    }
  }
  for (const v of [LESSON.sheets ?? [], LESSON.terms ?? {}, [LESSON.intro ?? ''], LESSON.overview ?? {}]) {
    for (const line of strings(v)) if (FALSE_RULE.test(line)) die(`an off-section surface says everything goes in the gap: ${JSON.stringify(line)}`);
  }
  const noagree = strings(byId(NOAGREE_SECTION_ID)).join('\n');
  if (!FALSE_RULE.test(noagree)) die(`${NOAGREE_SECTION_ID} is where the false rule is named and broken, and it does not name it. A counterexample to a rule nobody stated teaches nothing.`);
  if (!hasPhrase(noagree, "J'ai mangé une pomme.")) die(`${NOAGREE_SECTION_ID} names the false rule and does not show the sentence that breaks it`);
}
/* AND IT IS PINNED WHERE THE LEARNER MEETS IT FIRST. a2.19 §7: rewording it in
   ONE section left eight carrying it, so a threshold guard let it through. A
   threshold is not a location. */
{
  const scene = byId(SCENE_SECTION_ID) as { closing?: { text?: string } } | undefined;
  if (scene?.closing?.text !== REFRAME) die(`the scene closes on ${JSON.stringify(scene?.closing?.text)} and the reframe is ${JSON.stringify(REFRAME)}`);
  const trap = byId(GAP_TRAP_SECTION_ID) as { rule?: { body?: string } } | undefined;
  if (!trap?.rule?.body?.includes(REFRAME)) die('the Owns trap\'s rule card does not carry the reframe verbatim');
  const sheet = PASSE_COMPOSE_SHEETS[0]!.sections!.find((s) => (s as { id?: string }).id === 'sheet-gap') as { body?: string } | undefined;
  if (!sheet?.body?.includes(REFRAME)) die('the reference sheet\'s gap card does not carry the reframe verbatim');
}
console.log(`  reframe       ${JSON.stringify(REFRAME)} · ${reframeWords} words, ${reframeUses} uses across ${reframeSections} sections`);

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT WEIGHTS: THE OWNS OUTWEIGHS THE PARADIGM
 * ═══════════════════════════════════════════════════════════════════════ */

{
  const act2 = PASSE_COMPOSE_ACTS.find((a) => a.id === 'act2');
  const owns = (act2?.sections.length ?? 0) + 1; // + the adverb screen in act 5
  if (owns !== OWNS_MISSIONS) die(`the Owns is declared as ${OWNS_MISSIONS} missions and the acts give it ${owns}`);
  if (OWNS_MISSIONS <= PARADIGM_MISSIONS) die('doctrine §B.5: the Owns must outweigh the paradigm');
  const paradigm = [ENDINGS_SECTION_ID, AVOIR_SECTION_ID, GROUPS_SECTION_ID];
  if (paradigm.length !== PARADIGM_MISSIONS) die(`the paradigm is declared as ${PARADIGM_MISSIONS} missions and the list holds ${paradigm.length}`);
  for (const sid of paradigm) if (!byId(sid)) die(`${sid} is counted as a paradigm mission and does not exist`);
  console.log(`  act weights   Owns ${OWNS_MISSIONS} missions against paradigm ${PARADIGM_MISSIONS}`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE COPY, JARGON AND THE PLURALS
 * ═══════════════════════════════════════════════════════════════════════ */

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
for (const [name, re] of ERROR_SHAPES) if (fires(re, LESSON.intro)) die(`intro matches ${name}`);

/* THE HOUSE-COPY WALK MUST INCLUDE `audio`, AND THE ONE EVERY LESSON IN THIS
   BAND COPIES DOES NOT.
 *
 * FOUND BY `sons-alphabet.test.ts`, WHICH IS SEED-WIDE, AFTER THIS BUILD'S
 * THREE LAYERS WERE ALL GREEN. Every A2 batch, merge and test builds its
 * house-copy string out of `sections + sheets + terms + intro + overview +
 * acts + drills` and stops there. `Lesson.audio.recorded[].desc` is authored
 * prose that ships in the lesson body, and this build put the banned word
 * `honestly` in one of its takes. That is corrections §9's shape again: the
 * jargon walk did not read `intro`, and this walk does not read `audio`.
 *
 * The AUDIO BRIEFS get the house-copy rules and NOT the jargon or error-shape
 * ones: a studio brief is read by a recording engineer, so it may legitimately
 * quote the wrong forms the take contains and may use the precise words. */
const houseCopyText = [houseText, ...strings(LESSON.audio ?? {})].join('\n');
for (const bad of ['—', '–']) if (houseCopyText.includes(bad)) die('an em or en dash is on an authored surface');
for (const bad of ['honest', 'honesty', 'honestly']) if (hasPhrase(houseCopyText, bad)) die(`${JSON.stringify(bad)} is banned from authored content, and that includes the audio briefs`);
for (const tell of ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch']) {
  if (hasPhrase(houseCopyText, tell)) die(`the AI tell ${JSON.stringify(tell)} is on an authored surface`);
}
for (const r of PASSE_COMPOSE) {
  for (const v of [r.fr, r.respell ?? '', r.ipa ?? '', r.en, r.notes ?? '']) if (v.includes('‿')) die(`${r.id} carries U+203F in ${JSON.stringify(v)}`);
}
if (houseCopyText.includes('‿')) die('U+203F is on an authored surface');

/* THE RATIO, NOT A BAN. a2.17 §8: the plain phrase must outnumber the technical
   one, and here the technical one is banned outright, so what is measured is
   that the plain phrase is actually carried rather than avoided. */
const plainPast = countPhrase(houseText, 'past form');
const plainNaming = countPhrase(houseText, 'naming form');
if (plainPast < 20) die(`"past form" appears ${plainPast} times and this lesson leans on it in every act`);
if (plainNaming < 4) die(`"naming form" appears ${plainNaming} times and it is a2.02's phrase for the thing this lesson contrasts the past form with`);
console.log(`  house copy    ${JARGON.length} jargon terms absent in both forms, "past form" ${plainPast} times, "naming form" ${plainNaming}, no dash, no tie`);


/* ══════════════════════════════════════════════════════════════════════════
 *  THE TWO THINGS A PIXEL 6 FOUND
 * ═══════════════════════════════════════════════════════════════════════ */

/* THE INTRO IS THE LESSON COVER AND MAY NOT NAME A UNIT ID. Measured across the
   seed: a2.05 v1 was the ONLY one of 58 lessons that did it. Doctrine §B.7 asks
   for unit ids in the teaching BODY, where the reference has context, and this
   lesson credits eleven units there. */
if (INTRO_NAMES_NO_UNIT.test(LESSON.intro ?? '')) {
  die(`the intro names a unit id: ${JSON.stringify((LESSON.intro ?? '').match(INTRO_NAMES_NO_UNIT)?.[0])}. `
    + `It is drawn on the lesson COVER, before any card has credited anything, and ${INTRO_UNIT_ID_MEASURED_ACROSS - 1} of ${INTRO_UNIT_ID_MEASURED_ACROSS} lessons do not do it.`);
}

/* A SCENE BUBBLE CLIPS ITS OWN TAIL WHEN ITS FRENCH IS WIDER THAN ITS GLOSS.
   FOUND ON A PIXEL 6. App bug (ScenePlayer.tsx:276), not fixed from a content
   build; what a content build controls is not triggering it. */
{
  /* THE PUNCTUATION GUARD THAT USED TO LIVE HERE IS GONE, AND ITS REMOVAL IS
     THE FINDING. It refused a spaced exclamation mark on any `them` bubble,
     on the strength of one sample. The bench (ealch-v2/app/bubblelab.tsx)
     later rendered that very string whole in one position and clipped in
     another, and clipped all four punctuations equally: the trigger was never
     the glyph, it was any sibling in a row beside the French. ScenePlayer now
     ships the fix, so the guard was banning correct French to dodge a bug that
     no longer exists — which is worse than no guard, because it reads like
     knowledge.

     What is still worth asserting is only that the row named in the record is
     really in the scene, so the record cannot rot silently. */
  const bubbles = PASSE_COMPOSE_SCENE_BEATS.filter((b) => b.kind === 'bubble') as unknown as { fr?: string; en?: string }[];
  if (!bubbles.some((b) => b.fr === SCENE_BUBBLE_CLIP.fr)) {
    die(`${SCENE_BUBBLE_CLIP.row} is named in SCENE_BUBBLE_CLIP as ${JSON.stringify(SCENE_BUBBLE_CLIP.fr)} and no bubble carries that line`);
  }
}

/* ══════════════════════════════════════════════════════════════════════════
 *  TERM CHIPS
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const t = (s as { terms?: string[] }).terms ?? [];
  if (t.length > 3) die(`${(s as { id?: string }).id} declares ${t.length} term chips and the renderer shows three`);
  for (const name of t) if (!PASSE_COMPOSE_TERMS[name]) die(`${(s as { id?: string }).id} names the term ${JSON.stringify(name)} and the glossary has no such term`);
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
const orphanTerms = Object.keys(PASSE_COMPOSE_TERMS).filter((k) => !usedTerms.has(k));
if (orphanTerms.length) die(`${orphanTerms.length} terms are declared and named by no section: ${orphanTerms.join(', ')}`);
/* AND NO CHIP LABEL IS A GRAMMAR WORD. */
for (const [k, t] of Object.entries(PASSE_COMPOSE_TERMS)) {
  for (const j of JARGON) if (hasPhrase(t.term, j)) die(`the chip label for ${k} is ${JSON.stringify(t.term)}, which holds the jargon ${JSON.stringify(j)}`);
}
console.log(`  terms         ${Object.keys(PASSE_COMPOSE_TERMS).length} terms, all reachable, every chip row inside ${TERM_ROW_MAX} characters`);

/* ══════════════════════════════════════════════════════════════════════════
 *  MISSION TITLES, ACTS AND REACHABILITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const t = (s as { title?: string }).title ?? '';
  if (t.length > TITLE_MAX) die(`the title ${JSON.stringify(t)} is ${t.length} characters and the hub row cuts at ${TITLE_MAX}`);
}
const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id ?? '');
const claimed = new Map<string, string>();
for (const a of PASSE_COMPOSE_ACTS) {
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
const allRows = [...PASSE_COMPOSE.map((r) => ({ id: r.id, fr: r.fr })), ...IMPORTED.map((i) => ({ id: i.id, fr: i.fr }))];
for (const r of allRows) if (hasPhrase(printed, r.fr)) drawn.add(r.id);
const released = new Set(PASSE_COMPOSE_TRANCHES.flat());
const orphan = PASSE_COMPOSE_ITEM_IDS.filter((id) => !drawn.has(id) && !released.has(id));
if (orphan.length) die(`${orphan.length} declared items are on no screen and in no tranche:\n  ${orphan.join('\n  ')}`);
const ghosts = [...released].filter((id) => !PASSE_COMPOSE_ITEM_IDS.includes(id));
if (ghosts.length) die(`${ghosts.length} tranche ids are not in itemIds: ${ghosts.join(', ')}`);
if (PASSE_COMPOSE_TRANCHES.length !== EXPECTED_ACTS) die(`${PASSE_COMPOSE_TRANCHES.length} deck tranches and ${EXPECTED_ACTS} acts. validateLesson wants one slice per act.`);
const releasedTwice = PASSE_COMPOSE_TRANCHES.flat();
if (new Set(releasedTwice).size !== releasedTwice.length) die('a row is released by two tranches');
console.log(`  reachability  ${PASSE_COMPOSE_ITEM_IDS.length} items, ${drawn.size} drawn, ${released.size} released, 0 orphans and 0 ghosts`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq and at most half may be`);
const errorSpot = qs.filter((q) => q.format === 'errorSpot').length;
if (errorSpot < 5) die(`${errorSpot} errorSpot questions. The brief calls it the format for negation position, because word order is the one thing fold() keeps.`);
const typeIn = qs.filter((q) => q.format === 'typeIn').length;
if (typeIn < 10) die(`${typeIn} typeIn questions. The canDo is production and the brief asks for participle formation from an infinitive, including verbs the lesson never lists.`);
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
  // AND NO ANSWER IT ACCEPTS IS ONE OF THE ERRORS.
  for (const v of [q.answer, ...(q.accept ?? [])]) {
    for (const [name, re] of ERROR_SHAPES) if (fires(re, v)) die(`a ${q.format} question accepts ${JSON.stringify(v)}, which matches ${name}`);
    for (const w of IRREGULAR_PAST) if (hasPhrase(v, w)) die(`a ${q.format} question accepts ${JSON.stringify(v)}, which holds the irregular past form ${JSON.stringify(w)}`);
  }
}
/* AT LEAST ONE typeIn ASKS FOR A PAST FORM THE LESSON NEVER PRINTED, which is
   the generalisation test the brief asks for by name. */
{
  const printedPastForms = new Set(PASSE_COMPOSE.flatMap((r) => r.fr.toLowerCase().split(/[^\p{L}]+/u)));
  const unseen = qs.filter((q) => q.format === 'typeIn'
    && typeof q.answer === 'string'
    && /^[\p{L}]+$/u.test(q.answer)
    && /(é|i|u)$/.test(q.answer)
    && !printedPastForms.has(q.answer.toLowerCase()));
  if (!unseen.length) die('no typed question asks for a past form this lesson never printed. That is the generalisation test and it is the difference between teaching the system and teaching a list.');
  console.log(`  generalise    ${unseen.length} typed question(s) ask for a past form the lesson never printed: ${unseen.map((q) => q.answer).join(', ')}`);
}
const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
const leads = rounds.map((r) => r.targets[0]);
if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
const triggerIds = new Set(PASSE_COMPOSE_ERROR_TRIGGERS.map((t) => t.id));
const unled = [...triggerIds].filter((t) => !leads.includes(t));
if (unled.length) die(`${unled.length} triggers lead no round, so their drills can never fire: ${unled.join(', ')}`);
const drillIds = new Set(PASSE_COMPOSE_DRILLS.map((d) => d.id));
for (const t of PASSE_COMPOSE_ERROR_TRIGGERS) {
  if (!drillIds.has(t.drill)) die(`${t.id} names the drill ${t.drill} and the lesson has no such drill`);
  if (t.retest && !drillIds.has(t.retest)) die(`${t.id} names the retest ${t.retest} and the lesson has no such drill`);
  for (const d of t.detectOn) {
    const base = d.split('/')[0]!;
    if (!sectionIds.includes(base)) die(`${t.id} detects on ${d} and there is no section ${base}`);
  }
}
/* A DRILL'S COACH AND THE ANSWER SIDE OF EVERY PAIR ARE PRODUCTION SURFACES.
   Its `opts` are not: a retest is a one-question mcq whose distractors are the
   errors, which is why `drills` is off the section-wide walk above. */
for (const d of PASSE_COMPOSE_DRILLS) {
  const clean: string[] = [
    (d as { coach?: string }).coach ?? '',
    (d as { title?: string }).title ?? '',
    (d as { why?: string }).why ?? '',
    ...((d as { pairs?: [string, string][] }).pairs ?? []).flat(),
  ];
  for (const line of clean) {
    for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
      if (fires(re, line)) die(`${d.id} puts ${JSON.stringify(line)} on a surface the learner is told is right, and it matches ${name}`);
    }
    for (const w of IRREGULAR_PAST) if (hasPhrase(line, w)) die(`${d.id} holds the irregular past form ${JSON.stringify(w)}`);
  }
  /* AND EVERY mcq DRILL'S CORRECT OPTION IS CLEAN, which is the half that
     matters: an option list may hold the error and the answer may not.
   *
   * NOT every retest's distractors match one of the four shapes, and an earlier
   * version of this guard demanded that they did. Three of the six errors this
   * lesson tracks are not sentence shapes at all — a wrong ENDING, a naming
   * form offered as a bare word, an adverb on the end of a correct sentence —
   * so their distractors are single words or well-formed French. Requiring the
   * shape per drill failed `retest-endings` for being right. What is asserted
   * instead is that the correct option is clean, that no two options are the
   * same, and that the shapes are exercised by at least one drill somewhere. */
  const opts = (d as { opts?: string[]; correct?: number }).opts;
  const correct = (d as { correct?: number }).correct;
  if (opts && typeof correct === 'number') {
    const right = opts[correct] ?? '';
    for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
      if (fires(re, right)) die(`${d.id} marks ${JSON.stringify(right)} correct and it matches ${name}`);
    }
    if (new Set(opts).size !== opts.length) die(`${d.id} offers the same option twice`);
    if (opts.length < 3) die(`${d.id} offers ${opts.length} options and a retest needs three`);
  }
}
if (!PASSE_COMPOSE_DRILLS.some((d) => ((d as { opts?: string[] }).opts ?? []).some((o) => ERROR_SHAPES.some(([, re]) => fires(re, o))))) {
  die('not one drill offers a distractor matching one of the four shapes, so the drills never make the learner meet the error this lesson exists to prevent');
}
console.log(`  quiz          ${qs.length} questions, ${mcq} mcq, ${typeIn} typeIn, ${errorSpot} errorSpot, 1 listenChoose, ${rounds.length} rounds each leading a different trigger`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENARIO AND THE READING PASSAGE
 * ═══════════════════════════════════════════════════════════════════════ */

const scenario = byId(SCENARIO_SECTION_ID) as { turns?: { user?: string; userEn?: string; alts?: unknown[] }[] } | undefined;
if (!scenario?.turns?.length) die(`${SCENARIO_SECTION_ID} has no turns`);
for (const [i, t] of scenario.turns.entries()) {
  if (!t.userEn) die(`scenario turn ${i} has no userEn. scenario.logic.test.ts is a seed-wide test and it requires one.`);
  if ((t.alts ?? []).length < 2) die(`scenario turn ${i} has ${(t.alts ?? []).length} alts and the seed-wide test requires two`);
  // An alternative is an answer the learner is told is right.
  for (const line of strings(t)) {
    for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
      if (fires(re, line)) die(`scenario turn ${i} offers ${JSON.stringify(line)}, which matches ${name}`);
    }
    for (const w of IRREGULAR_PAST) if (hasPhrase(line, w)) die(`scenario turn ${i} offers ${JSON.stringify(line)}, which holds the irregular past form ${JSON.stringify(w)}`);
  }
}
/* AND AT LEAST ONE IMPORTED SENTENCE FROM ANOTHER THEME IS ON THE PRODUCTION
   SURFACE, asserted BY ID, which is what the brief asks for. */
{
  const inScenario = strings(scenario).join('\n');
  const usedInProduction = PUBLISHED_NEGATIVE_IDS.filter((id) => hasPhrase(inScenario, PASSE_COMPOSE_ROWS[id]!.fr));
  if (!usedInProduction.length) die('no imported sentence from another theme is used on a production surface. The brief asks for at least one, by id.');
  console.log(`  scenario      ${scenario.turns.length} turns, every one with a userEn and two alternatives, ${usedInProduction.length} published negative(s) used as answers (${usedInProduction.join(', ')})`);
}

const reading = byId(READING_SECTION_ID) as { text?: string; glossary?: unknown[]; questionsInModal?: boolean } | undefined;
if (!reading?.text) die(`${READING_SECTION_ID} has no text`);
if (reading.text.includes('\n')) die('a reading passage is ONE BLOCK: PassagePage splits on sentence boundaries and an authored newline is silently discarded');
if ((reading.glossary ?? []).length && !reading.questionsInModal) die('a reading glossary needs questionsInModal AND questions, or it never reaches the glossary renderer');
for (const [name, re] of [...ERROR_SHAPES, ['ETRE_AUXILIARY', ETRE_AUXILIARY] as [string, RegExp]]) {
  if (fires(re, reading.text)) die(`the reading passage matches ${name}`);
}
for (const w of IRREGULAR_PAST) if (hasPhrase(reading.text, w)) die(`the reading passage holds the irregular past form ${JSON.stringify(w)}`);
console.log(`  reading       one block, ${(reading.glossary ?? []).length} glossary entries with questionsInModal, no irregular past form`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS, THROUGH THE REAL CHECKER
 * ═══════════════════════════════════════════════════════════════════════ */

let seen = 0; let missed = 0;
const missedRows: string[] = [];
const scan = (frStr: string, value: string, id: string) => {
  if (hasPlainNasalFor(frStr, value)) die(`${id} "${frStr}" respelled ${JSON.stringify(value)} is flagged by the shared checker`);
  for (let k = 0; k < value.length; k += 1) {
    if (value[k] !== 'ⁿ') continue;
    const broken = `${value.slice(0, k)}n${value.slice(k + 1)}`;
    if (hasPlainNasalFor(frStr, broken)) seen += 1; else { missed += 1; missedRows.push(id); }
  }
};
for (const r of PASSE_COMPOSE) scan(r.fr, r.respell ?? '', r.id);
for (const a of RESPELL_ADDITIONS) {
  if (a.to.includes('‿')) die(`${a.id} supplied value carries U+203F`);
  scan(a.fr, a.to, a.id);
}
if (seen !== EXPECTED_NASALS_SEEN) die(`${seen} nasals the checker can see and the corpus file claims ${EXPECTED_NASALS_SEEN}`);
if (missed !== EXPECTED_NASALS_MISSED) die(`${missed} nasals the checker cannot see and the corpus file claims ${EXPECTED_NASALS_MISSED}: ${missedRows.join(', ')}`);

/* THE ONE REPAIR, AND a2.17 §2's THREE-VALUE SHAPE ASSERTED THROUGH THE REAL
   FUNCTION: stored is flagged, the minimal repair is not, and `half !== to` is
   true exactly when the row is blind or the minimal repair misses the house
   value. This one is neither, so `half === to` and both tables are checked. */
for (const rp of ALL_REPAIRS) {
  if (!hasPlainNasalFor(rp.fr, rp.from)) die(`${rp.id} is filed as VISIBLE and the checker does not flag ${JSON.stringify(rp.from)}`);
  if (hasPlainNasalFor(rp.fr, rp.to)) die(`${rp.id}'s repaired value ${JSON.stringify(rp.to)} is still flagged`);
  if (hasPlainNasalFor(rp.fr, rp.half)) die(`${rp.id}'s minimal repair ${JSON.stringify(rp.half)} is still flagged`);
  if ((rp.half !== rp.to) !== (rp.blind || rp.house)) {
    die(`${rp.id}: half !== to is ${rp.half !== rp.to} and (blind || house) is ${rp.blind || rp.house}. a2.17 §2: they are two different reasons for one symptom and they must not be conflated.`);
  }
}
if (RESPELL_REPAIRS_INVISIBLE.length !== 0) die(`this build claims every repair is VISIBLE and ${RESPELL_REPAIRS_INVISIBLE.length} are filed as blind`);
if (RESPELL_REPAIRS_VISIBLE.length !== ALL_REPAIRS.length) die('the visible and total repair counts disagree');

/* a2.14 §1 NAMED THIS LESSON'S SHAPE AS THE NEXT VICTIM OF THE DOUBLED-NASAL
   BLIND SPOT AND IT IS NOT. Asserted in both directions and by name. */
for (const d of [{ fr: "J'ai mangé une pomme.", token: 'mahⁿ' }, { fr: 'Elle a mangé une pomme.', token: 'mahⁿ' }]) {
  const row = PASSE_COMPOSE.find((r) => r.fr === d.fr);
  if (!row) die(`${JSON.stringify(d.fr)} is named as a doubled-nasal row and is not authored`);
  if (!/(?:nn|mm)/i.test(row.fr)) die(`${row.id} is named as a doubled-nasal row and holds no nn or mm`);
  const broken = row.respell!.replace(d.token, d.token.replace('ⁿ', 'n'));
  if (!hasPlainNasalFor(row.fr, broken)) {
    die(`${row.id} holds a doubled nasal AND the checker cannot see its ${d.token}. a2.14 §1 has bitten and the repair tables need the a2.17 §2 shape.`);
  }
}

/* THE FALSE-POSITIVE PATH, LOOKED FOR AND REPORTED AS AN ABSENCE, AND FOR THE
   FIRST TIME IN THIS BAND ALSO ASSERTED IN THE POSITIVE. a2.18 §2 measured that
   the predictor is a real /m/ or /n/ after a two-letter house vowel; if the
   control ever stops firing, the six negatives below stop meaning anything. */
{
  const fired = FALSE_POSITIVE_CANDIDATES.filter((c) => hasPlainNasalFor(c.fr, c.respell));
  if (fired.length) die(`the false-positive path fires on ${fired.map((c) => `${c.fr}/${c.respell}`).join(', ')} and this build reports it as an absence`);
  if (!hasPlainNasalFor(FALSE_POSITIVE_CONTROL.fr, FALSE_POSITIVE_CONTROL.respell)) {
    die(`the false-positive CONTROL ${FALSE_POSITIVE_CONTROL.fr}/${FALSE_POSITIVE_CONTROL.respell} no longer fires. a2.18 §2's path has changed and the six negatives above prove nothing.`);
  }
}
console.log(`  respellings   ${ALL_REPAIRS.length} repair (visible), ${RESPELL_ADDITIONS.length} supplied, ${seen} nasals seen and ${missed} missed, false-positive path absent on ${FALSE_POSITIVE_CANDIDATES.length} candidates and live on the control`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE MANIFEST AGREES WITH WHAT THE SCREENS PRINT
 * ═══════════════════════════════════════════════════════════════════════ */

for (const i of IMPORTED) {
  const rowM = PASSE_COMPOSE_ROWS[i.id];
  if (!rowM) die(`${i.id} is in IMPORTED and not in the manifest. Re-run scripts/_a205_manifest.ts.`);
  if (rowM.fr !== i.fr) die(`${i.id} manifest says ${JSON.stringify(rowM.fr)} and IMPORTED says ${JSON.stringify(i.fr)}`);
  if ((rowM as { gender?: string }).gender) die(`${i.id} carries a gender in the manifest and would join a1.03's population when the merge carries it`);
  const shown = displayRespell(i.id);
  if (!shown) die(`${i.id} has no respelling to display`);
  /* EVERY DISPLAYED RESPELLING IS CLEAN, EXCEPT THE ONE THE CHECKER IS WRONG
     ABOUT. `fr.sons.alphabet.402` holds « deuxième », which is /dø.zjɛm/ with
     a real /m/ after a two-letter house vowel, and a2.04 §2 measured that branch
     as having no rescue path. Invariants §9: a false positive is not a violation.
     Exempted BY NAME and asserted to fire, so a checker fix goes red here. */
  const exempt = DISPLAYED_FALSE_POSITIVES.find((f) => f.id === i.id);
  if (hasPlainNasalFor(i.fr, shown) && !exempt) die(`${i.id} displays ${JSON.stringify(shown)}, which the shared checker flags`);
  if (shown.includes('‿')) die(`${i.id} displays a U+203F tie`);
}
for (const f of DISPLAYED_FALSE_POSITIVES) {
  const shown = displayRespell(f.id);
  if (shown !== f.respell) die(`${f.id} is exempted from the nasal check by name and its stored value is ${JSON.stringify(shown)}, not ${JSON.stringify(f.respell)}`);
  if (!shown.includes(f.token)) die(`${f.id} is exempted because of ${JSON.stringify(f.token)} and does not carry it`);
  if (!hasPlainNasalFor(f.fr, shown)) {
    die(`${f.id} no longer fires. hasPlainNasal has gained a rescue path for a real /m/ after a two-letter house vowel, and this by-name exemption can go.`);
  }
}
if (NEGATIVE_EVIDENCE.rows !== MEASURED.publishedNegatives) die(`NEGATIVE_EVIDENCE says ${NEGATIVE_EVIDENCE.rows} published negatives and the manifest measured ${MEASURED.publishedNegatives}`);
if (NEGATIVE_EVIDENCE.respelled !== MEASURED.publishedNegativesRespelled) die(`NEGATIVE_EVIDENCE says ${NEGATIVE_EVIDENCE.respelled} of them carry a respelling and the manifest measured ${MEASURED.publishedNegativesRespelled}`);
if (AFFIRMATIVE_EVIDENCE.rows !== MEASURED.avoirPlusPastForm) die(`AFFIRMATIVE_EVIDENCE says ${AFFIRMATIVE_EVIDENCE.rows} and the manifest measured ${MEASURED.avoirPlusPastForm}`);
if (AFFIRMATIVE_EVIDENCE.respelled !== MEASURED.avoirPlusPastFormRespelled) die(`AFFIRMATIVE_EVIDENCE says ${AFFIRMATIVE_EVIDENCE.respelled} cards and the manifest measured ${MEASURED.avoirPlusPastFormRespelled}`);
if (ADVERB_EVIDENCE.rows !== MEASURED.adverbInGap) die(`ADVERB_EVIDENCE says ${ADVERB_EVIDENCE.rows} and the manifest measured ${MEASURED.adverbInGap}`);
if (MEASURED.infinitiveAfterAvoir !== 0) die(`${MEASURED.infinitiveAfterAvoir} published rows put a naming form straight after avoir, and a2.01's claim that it kept the evidence clean was measured true`);
console.log(`  manifest      ${IMPORTED.length} imported rows, every displayed respelling clean and tie-free, every printed figure equal to the re-measured read`);

/* ══════════════════════════════════════════════════════════════════════════
 *  SHEET, ERRORS, BREAK CARD, SCHEMA AND DENSITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const sid of sectionIds) if (!byId(sid)) die(`${sid} is missing from the lesson`);
if (PASSE_COMPOSE_SPEAK_IDS.some((id) => !AUTHORED_IDS.includes(id))) die('a speak target is not an authored row, and only the authored rows are guaranteed to carry voiceflash');
if (PASSE_COMPOSE_SHEETS[0]!.sections!.some((s) => s.type === 'cheatSheet')) die('a cheatSheet inside a reference sheet draws its title and nothing else');
for (const s of PASSE_COMPOSE_SHEETS[0]!.sections!) {
  const cols = (s as { cols?: string[] }).cols;
  if (cols && cols.length > SHEET_COLS_MAX) die(`a table inside a sheet may hold ${SHEET_COLS_MAX} columns. a2.04 measured a FOUR-column one clipping on a Pixel 6.`);
  for (const r of ((s as { rows?: string[][] }).rows ?? [])) {
    for (const cell of r) if (cell.length > SHEET_CELL_MAX) die(`the sheet cell ${JSON.stringify(cell)} is ${cell.length} characters and this build budgeted ${SHEET_CELL_MAX}`);
  }
}
{
  const t = PASSE_COMPOSE_SHEETS[0]!.title ?? '';
  if (t.length > SHEET_TITLE_MAX) die(`the sheet title ${JSON.stringify(t)} is ${t.length} characters and the sheet's header bar cuts at ${SHEET_TITLE_MAX}`);
}
const errorsSection = byId(ERRORS_SECTION_ID) as { swipe?: boolean } | undefined;
if (!errorsSection?.swipe) die('commonErrors without swipe hits a break that falls out of the switch and draws a blank screen');
const noAgreeDeck = byId(NOAGREE_SECTION_ID) as { swipe?: boolean } | undefined;
if (!noAgreeDeck?.swipe) die(`${NOAGREE_SECTION_ID} is the deck that holds the wrong form and it has no swipe`);

/* THE BREAK CARD, WHICH IS THE MOST FRAGILE SCREEN IN AN A2 SCENE. a2.19 §4:
   its own Continue went under the pager bar twice, the second time because two
   correct fields both rendered the reframe on one screen. */
{
  const brk = PASSE_COMPOSE_SCENE_BEATS.find((b) => b.kind === 'break') as {
    heading?: string; body?: string; coach?: string;
    wrong?: { fr?: string; en?: string }; right?: { fr?: string; en?: string };
  } | undefined;
  if (!brk) die('the scene has no break card, and it is where the rule arrives');
  const words = (s: string) => s.trim().split(/\s+/).length;
  if ((brk.heading ?? '').length > BREAK_BUDGET.heading) die(`the break heading is ${(brk.heading ?? '').length} characters and it wraps past ${BREAK_BUDGET.heading}`);
  if (words(brk.body ?? '') > BREAK_BUDGET.bodyWords) die(`the break body is ${words(brk.body ?? '')} words and the budget is ${BREAK_BUDGET.bodyWords}`);
  if (brk.coach && words(brk.coach) > BREAK_BUDGET.coachWords) die(`the break coach is ${words(brk.coach)} words and the budget is ${BREAK_BUDGET.coachWords}`);
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
  const ids = nsNow.rows.map((r) => r.id);
  const foreign = ids.filter((id) => isMine(id) && !AUTHORED_IDS.includes(id));
  if (foreign.length) {
    c.release(); await pool.end();
    die(`${foreign.length} rows exist inside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to} and it does not own them:\n  ${foreign.join('\n  ')}`);
  }
  /* AND a2.20's RESERVATION IS STILL CLEAR, or it has started building and the
     ledger entry has to be amended rather than assumed. */
  const inA220 = ids.filter(isA220);
  if (inA220.length) {
    console.log(`  !! ${inA220.length} rows now sit in ${IRREGULAR_UNIT}'s reservation ${A220_BLOCK.from}..${A220_BLOCK.to}. That lesson has started. Reported, not fatal.`);
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
  for (const r of PASSE_COMPOSE) {
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

  /* THE LEDGER DECISION, RE-MEASURED AGAINST POSTGRES AT APPLY TIME. If a bare
     past form has appeared as a headword since the manifest was taken, the split
     with a2.20 is no longer what this build says it is. */
  const bare = await c.query<{ id: string; fr: string }>(
    `select id, fr from content_items where kind='word' and fr = any($1) order by fr`,
    [['parlé', 'mangé', 'fini', 'choisi', 'vendu', 'répondu', 'travaillé', 'attendu', 'perdu', 'entendu']]);
  if (bare.rowCount) {
    c.release(); await pool.end();
    die(`${bare.rowCount} regular past forms now exist as headwords: ${bare.rows.map((r) => `${r.fr} (${r.id})`).join(', ')}. The split with ${IRREGULAR_UNIT} rests on there being none.`);
  }
  console.log(`  the split     0 bare past forms in Postgres, ${A220_BLOCK.from}..${A220_BLOCK.to} reserved for ${IRREGULAR_UNIT} and holding ${inA220.length} rows`);

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

  /* DEPENDENTS. Probed rather than copied: four builds in this band got four
     different answers, and the BRIEF SAYS FOUR UNITS DEPEND ON THIS ONE. */
  const dependents = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? $1 order by 2", [UNIT_ID]);
  const depIds = dependents.rows.map((r) => r.id).sort();
  if (JSON.stringify(depIds) !== JSON.stringify([...DEPENDENTS].sort())) {
    console.log(`  !! the dependents are ${depIds.join(', ')} and the corpus file records ${[...DEPENDENTS].join(', ')}. Reported, not fatal.`);
  }
  console.log(`  trail         ${dependents.rowCount} unit(s) rest on ${UNIT_ID}: ${dependents.rows.map((r) => `${r.id}(seq ${r.seq})`).join(' ')}  [the brief said four]`);

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
    // THE ONE REPAIR, guarded by the stored value still being the one this build
    // read. Invariants §9.
    for (const rp of ALL_REPAIRS) {
      await c.query('update content_items set respell = $2 where id = $1 and respell in ($3, $2)', [rp.id, rp.to, rp.from]);
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
    [[...ALL_REPAIRS.map((r) => r.id), ...RESPELL_ADDITIONS.map((a) => a.id), ...DRILL_ADDITIONS.map((d) => d.id)]]);
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const rp of ALL_REPAIRS) {
    const now = String(post.get(rp.id)?.respell ?? '');
    if (now !== rp.to) failed.push(`${rp.id} respell is ${JSON.stringify(now)} and the repaired value is ${JSON.stringify(rp.to)}`);
    if (hasPlainNasalFor(rp.fr, now)) failed.push(`${rp.id} is still flagged after the repair: ${JSON.stringify(now)}`);
  }
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
    + '      ZERO headwords, ZERO gendered rows and ZERO bare past forms, authored OR imported.\n'
    + `    ${ALL_REPAIRS.length} respelling repaired; ${RESPELL_ADDITIONS.length} SUPPLIED to rows that never had one\n`
    + `    ${NOT_REPAIRED.length} rows found broken and left alone, because this build does not display them\n`
    + `    ${DRILL_ADDITIONS.length} drill additions, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id out of ${EXPECTED_SOURCE_THEMES} themes, ${READ_NOT_IMPORTED.length} read and refused\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${PASSE_COMPOSE_ITEM_IDS.length} items\n`
    + `    fr.a2.verbes row count: ${before} before, ${nsAfter} after (max ${afterRows.rows[0]!.mx})\n`
    + `    ${A220_BLOCK.from}..${A220_BLOCK.to} reserved for ${IRREGULAR_UNIT}, still holding ${inA220.length} rows\n\n`
    + '  NEXT: pnpm tsx scripts/merge-passe-compose-into-seed.ts\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
