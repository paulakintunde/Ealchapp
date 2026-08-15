/* a2.23 « Pronominaux au passé composé », seq 20. Corpus + lesson + terms, to
 * Postgres. THE LAST LESSON OF BATCH 2.
 *
 *     pnpm content:pronominaux-passe -- --dry-run
 *     pnpm content:pronominaux-passe
 *
 * ── WHAT THIS BATCH REFUSES ──────────────────────────────────────────────
 *
 * AVOIR AS THE FIRST WORD OF A REFLEXIVE, anywhere except the three places the
 *   lesson shows it AS AN ERROR. This is the hardest guard in the build, because
 *   the lesson's whole subject is a reflexive pronoun beside a form of être and
 *   the thing it must refuse is the same shape with avoir. Corrections §14.4: a
 *   shape built out of French morphology fires on the English, so the guard
 *   requires a SUBJECT PLUS A CLITIC PLUS A FORM OF AVOIR and both lists are
 *   walked, proved to fire and proved not to.
 * AN EXPLANATION OF THE DIRECT AND INDIRECT OBJECT, ANYWHERE AT ALL. Not merely
 *   on a production surface: anywhere. Option 1 names the pattern and says
 *   nothing about the reason, and the reason is a2.24's.
 * AN AGREED FORM IN THE EXCEPTION SHAPE. « s'est lavée les mains » is the
 *   exception taught wrongly and it must not exist on any surface.
 * A RECIPROCAL, anywhere. a2.22 left them out and corpus §9 leaves them out
 *   more strictly, because the reciprocal declines to agree for the same reason
 *   the les mains case does.
 * THE IMPERFECT, or any contrast between two past tenses.
 * A HEADWORD, AUTHORED, and A PARTICIPLE AS A CORPUS ITEM. Corrections §2 and
 *   doctrine §E, settled by a2.05 and agreed by a2.20 and a2.21.
 * A ROW IN THE `routines` THEME. a1.25 owns it; a2.22 kept out and so does this.
 * A GENDERED ROW, authored or imported. a2.04 ledger §0.
 * A ROW INSIDE a2.21's OR a2.22's BLOCK, and a row inside this build's block
 *   that this build does not own.
 * A RESPELLING OF `sommes` THAT IS NOT THE FIXED VALUE, asserted BY NAME rather
 *   than by asking the checker. a2.21 §3: the checker CALLS THE SUPERSCRIPT FORM
 *   CLEAN, because its complaint was a false positive to begin with, so every
 *   guard in this band that asks « is it flagged » walks straight past the
 *   wrong value.
 * A PARAPHRASE OF ANY INHERITED LINE. a2.21's agreement rule, a2.01's reframe,
 *   a1.18's and a2.19's negation lines and a2.22's extension are all LITERALS
 *   here, because a2.21 §8 found that a quoted line compared against the
 *   constant the content is built from renames both sides.
 * AN EAR QUESTION offering two options that are one sound apart, walked over
 *   HOMOPHONE_GROUPS. §7: the ending is inaudible on every verb without
 *   exception, so this list is longer than any earlier lesson's.
 * A DICTÉE TARGET that `dicteeMode` puts in WORD mode, or that carries no
 *   dictation drill.
 * GRAMMAR JARGON on a learner surface, walked over `sections + sheets + terms +
 *   intro + overview + acts + drills + AUDIO`, in both `prose()` and
 *   `display()`, with every entry checked in its -s plural.
 * A TECHNICAL TERM OUTNUMBERING ITS PLAIN PHRASE. a2.17 §5.
 * A STACKED trapDrill, a trapDrill carrying a `size`, or an audio step whose
 *   recording does not contain the cards' own lines.
 * A cardDeck HINT over 60 characters, and A SENTENCE-FINAL STOP WITH
 *   PUNCTUATION AFTER IT anywhere on a learner surface. a2.20 found the `..`
 *   half on a Pixel 6 and a2.22 §4 found the rest of the shape; a2.22 §10 asked
 *   the next build to widen it BEFORE authoring, and this one did.
 * A SCENE BUBBLE whose `fr` contains « ! ». a2.05 §11.2, found on a Pixel 6.
 */
import './env';
import { Pool } from 'pg';
import {
  DRILL_KINDS, canonicalJson, formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  A118_REFRAME, A201_REFRAME, A221_BLOCK, A221_ROWS, A222_BLOCK,
  A222_REFRAME, A222_ROWS, AGREEMENT_RULE, AUTHORED_IDS, AUTHORED_ITEMS,
  AVOIR_MUST_FIRE, AVOIR_MUST_NOT_FIRE, AVOIR_PAIR, AVOIR_ROW_IDS,
  BUILT_FORMS, CELL_IDS, CHIP_ROW_BUDGET, DICTATION_IDS, DICTEE_MAX_LETTERS,
  DOUBLE_STOP, EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_IMPORTED,
  EXPECTED_QUESTIONS, EXPECTED_SECTIONS, FALSE_POSITIVES, FLIP_PAIRS,
  HINT_MAX, HOMOPHONE_GROUPS, ID_BLOCK, IMPERFECT_MARKERS, IMPORTED,
  IMPORTED_HEADWORDS, IMPORTED_IDS, JARGON, LESSON_ID, NEGATION_EXTENSION,
  NEGATION_OUTSIDE, NEGATION_RULE, OBJECT_CLAIM, OBJECT_DECISION,
  OBJECT_PAIR, OBJECT_TERMS, OWNS_SECTIONS, PARADIGM_SECTIONS,
  PERSON_IDS, PLAIN_OVER_TECHNICAL, PRESENT_NO_AGREEMENT,
  READ_NOT_IMPORTED, RECIPROCAL_MARKERS, RECIPROCAL_MUST_FIRE,
  RECIPROCAL_MUST_NOT_FIRE, REFRAME, REFRAME_COUNT,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE, ROUTINE_IDS,
  ROW_COUNT_BEFORE, SLOTS, SLOT_SENTENCE, THEME, UNIT, fr, isA221, isA222,
  isMine, reduceNegative,
} from './data/pronominaux-passe-corpus.ts';
import { PRONOMINAUX_PASSE_TERMS, chipRowWidth } from './data/pronominaux-passe-terms.ts';
import { IMPORTED_ITEMS, imported } from './data/pronominaux-passe-imported.ts';
import { MEASURED_ROWS } from './data/pronominaux-passe-rows.gen.ts';
import {
  AGREEMENT_SECTION_ID, ASSEMBLY_SECTION_ID, DICTATION_SECTION_ID,
  ERRORS_SECTION_ID, FLIP_SECTION_ID, LATER_SECTION_ID,
  LESSON as PP_LESSON, NEGATIVE_SECTION_ID, NEWVERBS_SECTION_ID,
  NOMEANING_SECTION_ID, OBJECT_SECTION_ID, OWNS_SECTION_IDS,
  PARADIGM_SECTION_IDS, PERSONS_SECTION_ID, PP_ACTS, PP_DICTEE_IDS,
  PP_DRILLS, PP_ITEM_IDS, PP_SCENE_BEATS, PP_SHEETS, PP_SPEAK_IDS,
  QUIZ_SECTION_ID, SCENE_SECTION_ID, SILENT_SECTION_ID, SLOTS_SECTION_ID,
  SPEAK_SECTION_ID, TALK_SECTION_ID, WRAP_SECTION_ID,
} from './data/pronominaux-passe-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const LESSON: Lesson = PP_LESSON;
const UNIT_ID = UNIT.id;

/* ─── String walks ─────────────────────────────────────────────────────────*/

/** Notation. A word-level guard must not read a respelling. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces.
 *
 *  `cards` IS NOT ON THIS LIST AND MUST NOT BE. a2.22 §2: on a `cardDeck`, a
 *  `flashcards` section, a `reviewDeck` and a `trapDrill`, `cards` holds the
 *  entire learner surface, and dropping it hides every card body from the jargon
 *  walk, the avoir guard and the house-copy rules at once. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets', 'restPoints',
]);

/** AN ID IS NOT PROSE, WHATEVER KEY IT ARRIVES UNDER. a2.04 §3. */
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub` and drops only machine keys. a2.15 §3: on a cardDeck card `sub`
 *  holds PROSE, and `prose()` drops it as notation, so the house-copy and jargon
 *  checks never saw it and a banned word shipped in one. */
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
    for (const [k, x] of Object.entries(v)) {
      if (!MACHINE_KEYS.has(k) && !NOTATION_KEYS.has(k)) prose(x, out);
    }
  }
  return out;
}

/** THE HOUSE WORD BOUNDARY, with corrections §14.3's fix: the apostrophe is
 *  dropped from the LEFT side, so a shape can see `s'est`, `m'ai` and `t'es`.
 *  It stays on the right, so `l'` does not match `l`.
 *
 *  THIS LESSON IS THE REASON THAT FIX MATTERS MOST. Two of its six persons
 *  elide and the error it exists to prevent is « je m'ai levé », so a boundary
 *  with the apostrophe on the left would make the central guard blind. */
const bounded = (needle: string): RegExp =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string): boolean => bounded(needle).test(hay);

/** NAMING A UNIT NEEDS THE OPPOSITE BOUNDARY, AND THIS IS A NEW HOLE.
 *
 *  Corrections §14.3 records that the house boundary excludes the apostrophe on
 *  the LEFT, so a shape cannot see `j'ai` or `s'est`. **The mirror image on the
 *  RIGHT has not been recorded**, and it makes every `hasPhrase(surface, '<unit
 *  id>')` check in this band blind to the possessive — which is how the band
 *  names a neighbour almost every time. Measured through the real boundary:
 *
 *      "That is a2.01's line."       hasPhrase(_, 'a2.01')   BLIND
 *      "That is a2.01 and nothing."  hasPhrase(_, 'a2.01')   MATCH
 *      "a2.24's lesson owns it."     hasPhrase(_, 'a2.24')   BLIND
 *
 *  So a check that a neighbour is credited passes only by accident, on whichever
 *  screen happens to name it without a possessive. Found here by this lesson's
 *  own test going red on a card reading « That is a2.01's line ». */
const namesUnit = (hay: string, unit: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${unit.replace(/\./gu, '\\.')}(?![\\p{L}\\p{N}-])`, 'iu').test(hay);

/** EVERY LEARNER SURFACE. Corrections §9: the walk must read `intro` and
 *  `overview`, which are drawn on the lesson overview card AND the lesson cover;
 *  a2.05 §3 added `audio`, whose `desc` is authored prose that ships in the
 *  body. `grammarAssumed` and `grammarIntroduced` are DELIBERATELY EXCLUDED:
 *  invariants §8 says those are addressed to the curriculum and may use the
 *  precise words, and this lesson's use them heavily. */
const surfaceOf = (walk: (v: unknown, out?: string[]) => string[]): string[] => [
  ...walk(LESSON.sections),
  ...walk(LESSON.sheets ?? []),
  ...walk(LESSON.terms ?? {}),
  ...walk(LESSON.acts ?? []),
  ...walk(LESSON.drills ?? []),
  ...walk(LESSON.audio ?? {}),
  ...walk(LESSON.overview ?? {}),
  LESSON.intro ?? '',
  LESSON.reframe ?? '',
];

const PROSE_SURFACE = surfaceOf(prose);
const DISPLAY_SURFACE = surfaceOf(display);

/** Deduped. Correct for "does this appear at all" and for walking a banned
 *  pattern over every distinct string. */
const ALL_SURFACE = [...new Set([...PROSE_SURFACE, ...DISPLAY_SURFACE])];

/** NOT deduped, and COUNTING MUST USE THIS ONE. a2.22 §3: the reviewDeck card
 *  back is often a short quoted line and so is `Lesson.reframe`; a Set collapses
 *  the two and the count under-reports every line short enough to be authored
 *  twice. */
const ALL_SURFACE_RAW = [...DISPLAY_SURFACE];

/** THE THREE PLACES A WRONG FORM IS ALLOWED, and nowhere else. The brief:
 *  *« Permit it inside an errorSpot item as the error and scope the assertion to
 *  allow that one location. »* Three locations, because the trap shows it, the
 *  errors card shows it and the exam asks the learner to fix it. */
const WRONG_FORM_SECTIONS = new Set([WRAP_SECTION_ID, ERRORS_SECTION_ID, QUIZ_SECTION_ID]);

/** The surfaces that ask the learner to PRODUCE. */
const PRODUCTION_SECTIONS = new Set([
  QUIZ_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, TALK_SECTION_ID,
  WRAP_SECTION_ID, ASSEMBLY_SECTION_ID, NEWVERBS_SECTION_ID,
]);
const productionSurface = (): string[] => {
  const out: string[] = [];
  for (const s of LESSON.sections) if (PRODUCTION_SECTIONS.has(s.id!)) out.push(...display(s));
  for (const d of LESSON.drills ?? []) out.push(...display(d));
  return out;
};

/** A section by id, or death. */
const section = (id: string) => {
  const s = LESSON.sections.find((x) => x.id === id);
  if (!s) die(`the lesson has no section ${id}.`);
  return s!;
};

/* ═══ 1. THE AUTHORED ROWS ════════════════════════════════════════════════*/

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) {
  die(`${AUTHORED_ITEMS.length} rows authored and EXPECTED_AUTHORED is ${EXPECTED_AUTHORED}.`);
}
for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id} does not validate:\n${formatIssues(issues)}`);
  if (it.theme !== THEME) die(`${it.id} is in theme "${it.theme}" and this build writes into "${THEME}".`);
  if (it.theme === 'routines') die(`${it.id} is in the routines theme, which a1.25 owns. This build carries those rows and writes none.`);
  if (it.level !== 'a2') die(`${it.id} is level "${it.level}" and every row this build authors is a2.`);
  if (!isMine(it.id)) die(`${it.id} is outside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to}.`);
  if (isA221(it.id)) die(`${it.id} is inside a2.21's block.`);
  if (isA222(it.id)) die(`${it.id} is inside a2.22's block.`);
  if ((it as { gender?: string }).gender) die(`${it.id} carries gender and would join a1.03's ending population.`);
  /* CORRECTIONS §2 AND DOCTRINE §E: NOT ONE HEADWORD, AND NO PARTICIPLE AS A
   * CORPUS ITEM. A row whose `fr` has no whitespace is a bare word whatever its
   * `kind` says (a2.05 §4), and an agreed cell is further from a corpus item
   * than a bare form is. */
  if (it.kind !== 'sentence') die(`${it.id} is kind "${it.kind}". This build authors sentences only; every infinitive is imported and no participle is a corpus item.`);
  if (!/\s/u.test(it.fr)) die(`${it.id} « ${it.fr} » has no whitespace, so it is a headword whatever its kind says.`);
  if (!it.respell) die(`${it.id} has no respelling.`);
  const re = it.respell ?? '';
  if (hasPlainNasalFor(it.fr, re)) die(`${it.id} « ${it.fr} » [${re}] closes a nasal with a plain n or m.`);
  if (re.includes('‿')) die(`${it.id} carries U+203F, which draws as a low underscore on a Pixel 6.`);
}
{
  const ids = AUTHORED_ITEMS.map((i) => i.id);
  if (new Set(ids).size !== ids.length) die('an authored id appears twice.');
  const frs = AUTHORED_ITEMS.map((i) => i.fr);
  if (new Set(frs).size !== frs.length) die('an authored fr appears twice.');
}

/* THE DRILL ORDER, AND IT IS NOT COSMETIC.
 *
 * THIS BATCH WRITES `it.drills` TO POSTGRES VERBATIM and the merge writes
 * `drillOrder(it.drills)` to the seed, so the two copies agree ONLY IF every
 * array is already in `DRILL_KINDS` order. a2.12's trap says the merge must
 * match what the database holds, and the fix the band inherited does that by
 * luck rather than by construction.
 *
 * MEASURED ON THIS BUILD BEFORE THE FIX: 38 of 63 rows had a different drill
 * order in Postgres and in seed.json. a2.21 declared its arrays in DRILL_KINDS
 * order and diverged on nothing; a2.22 did not and diverged on all 31 of its
 * rows, healed only when a later publish regenerated the seed from the database.
 *
 * So the order is asserted HERE, where it is written, rather than left to the
 * merge to repair. */
for (const it of AUTHORED_ITEMS) {
  const sorted = [...it.drills].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b));
  if (JSON.stringify(sorted) !== JSON.stringify([...it.drills])) {
    die(`${it.id} declares drills ${JSON.stringify(it.drills)} and DRILL_KINDS order is ${JSON.stringify(sorted)}. `
      + 'This batch writes the array verbatim and the merge sorts it, so a different order here IS seed/Postgres drift.');
  }
}

/* THE ENDING POPULATION, through the REAL function. Invariants §5: a guard that
 * reimplements the thing it guards is free to drift from it. */
{
  const before = endingPopulation([]).length;
  const after = endingPopulation([...AUTHORED_ITEMS, ...IMPORTED_ITEMS]).length;
  if (after !== before) {
    die(`this build moves a1.03's ending population by ${after - before} rows. Every row it authors or carries must be ungendered or multi-word.`);
  }
}

/* THE FALSE POSITIVE, ASSERTED BY NAME AND IN THREE DIRECTIONS.
 *
 * a2.21 §3, and it is the most transferable thing that lesson found: every
 * respelling guard in this band asserts « must not be FLAGGED », and the
 * superscript form of a false positive is CLEAN and WRONG, so it walks through
 * all of them. The only check with content is the FIXED VALUE by name. */
for (const fp of FALSE_POSITIVES) {
  for (const id of fp.ids) {
    const row = AUTHORED_ITEMS.find((i) => i.id === id);
    if (!row) die(`${id} is listed as carrying the « ${fp.word} » false positive and this build does not author it.`);
    const re = row!.respell ?? '';
    if (!re.includes(fp.fixed)) {
      die(`${id} respells « ${fp.word} » as [${re}] and the fixed value is « ${fp.fixed} ». `
        + `a2.21 §2 measured that « ${fp.flagged} » is FLAGGED and that « ${fp.superscript} » is CLEAN AND WRONG, `
        + 'so asking the checker proves nothing here.');
    }
    if (re.includes(fp.superscript)) {
      die(`${id} respells « ${fp.word} » with a superscript. The checker calls that clean and it teaches a nasal the word has not got.`);
    }
  }
  /* AND THE THREE-WAY MEASUREMENT ITSELF, so the day the checker improves this
   * goes red rather than the list going quietly dead. */
  const probe = AUTHORED_ITEMS.find((i) => i.id === fp.ids[0])!;
  const withFlagged = (probe.respell ?? '').replace(fp.fixed, fp.flagged);
  const withSuper = (probe.respell ?? '').replace(fp.fixed, fp.superscript);
  if (!hasPlainNasalFor(probe.fr, withFlagged)) die(`« ${fp.flagged} » is no longer flagged, so the false positive a2.21 §2 measured has gone and FALSE_POSITIVES needs re-reading.`);
  if (hasPlainNasalFor(probe.fr, withSuper)) die(`« ${fp.superscript} » is now flagged, which is the checker improving. Re-read a2.21 §3: the guard can go back to asking it.`);
}
if (RESPELL_REPAIRS_VISIBLE.length || RESPELL_REPAIRS_INVISIBLE.length) {
  die('a repair table is non-empty and this build declares that it repairs nothing. Corrections §14.1: a mixed row belongs in both tables at once, so read that before adding one.');
}

/* ═══ 2. THE IMPORTED ROWS ════════════════════════════════════════════════*/

if (IMPORTED.length !== EXPECTED_IMPORTED) die(`IMPORTED holds ${IMPORTED.length} rows and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
for (const im of IMPORTED) {
  const row = imported(im.id);
  if (row.fr !== im.fr) die(`${im.id} says fr="${row.fr}" and the corpus file claims "${im.fr}".`);
  if ((row as { gender?: string }).gender) die(`${im.id} carries gender and the merge would carry it into a1.03's population.`);
  if (isMine(row.id)) die(`${im.id} is inside this build's block and is being imported rather than authored.`);
}
/* EVERY VERB THE LESSON NAMES IS AN IMPORTED ID, ASSERTED BY ID. The brief asks
 * for this and it is the seventh build running to have nothing to author. */
for (const hw of IMPORTED_HEADWORDS) {
  if (!IMPORTED_IDS.includes(hw.id)) die(`${hw.id} is claimed as a headword import and is not in IMPORTED.`);
  if (AUTHORED_IDS.includes(hw.id)) die(`${hw.id} is claimed as an import and this build authors it.`);
}
if (!ROUTINE_IDS.length) die('ROUTINE_IDS is empty, so the by-id assertion the brief asks for guards nothing.');
for (const id of ROUTINE_IDS) {
  if (!IMPORTED_IDS.includes(id)) die(`${id} is claimed as a routine import and is not in IMPORTED.`);
  if (!PP_ITEM_IDS.includes(id) && !(LESSON.itemIds ?? []).includes(id)) {
    die(`${id} is a routine import the lesson never puts on a screen.`);
  }
}
for (const s of LESSON.sections) {
  if (s.type === 'vocabThemes') die(`${s.id} is a vocabThemes section. a1.25 owns the routine vocabulary and this lesson builds no vocabulary section.`);
}

/* ═══ 3. THE LESSON, THROUGH THE REAL VALIDATORS ══════════════════════════*/

{
  const issues = validateLesson(LESSON);
  if (issues.length) die(`the lesson does not validate:\n${formatIssues(issues)}`);
  const known = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
  const dens = validateDensity(LESSON, known);
  if (dens.length) die(`the lesson fails density:\n${formatDensity(dens)}`);
}
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections and EXPECTED_SECTIONS is ${EXPECTED_SECTIONS}.`);
if (PP_ACTS.length !== EXPECTED_ACTS) die(`${PP_ACTS.length} acts and EXPECTED_ACTS is ${EXPECTED_ACTS}.`);
if (LESSON.unitId !== UNIT_ID) die(`the lesson's unitId is ${LESSON.unitId}.`);

/* DOCTRINE §B.5: THE OWNS OUTWEIGHS THE PARADIGM. */
if (OWNS_SECTION_IDS.length !== OWNS_SECTIONS) die(`the Owns act has ${OWNS_SECTION_IDS.length} sections and OWNS_SECTIONS is ${OWNS_SECTIONS}.`);
if (PARADIGM_SECTION_IDS.length !== PARADIGM_SECTIONS) die(`the paradigm act has ${PARADIGM_SECTION_IDS.length} sections and PARADIGM_SECTIONS is ${PARADIGM_SECTIONS}.`);
if (OWNS_SECTIONS <= PARADIGM_SECTIONS) die('the paradigm has at least as many sections as the Owns, which is the wrong lesson.');

/* THE REFRAME, against an EXPLICIT constant. */
{
  const n = ALL_SURFACE_RAW.filter((s) => s.includes(REFRAME)).length;
  if (n !== REFRAME_COUNT) die(`the reframe is authored ${n} times and REFRAME_COUNT is ${REFRAME_COUNT}.`);
  if (LESSON.reframe !== REFRAME) die('Lesson.reframe is not the reframe constant.');
  if (LESSON.reframe !== 'If the little word is there, the first word is être.') {
    die(`Lesson.reframe is « ${LESSON.reframe} ». The literal is on the guard side so a rewording of the constant cannot rename both sides.`);
  }
}

/* ═══ 4. THE THREE REQUIRED LAYOUTS ═══════════════════════════════════════*/

/* LAYOUT 1: THE SLOT DIAGRAM. One section, all six positions, and a full
 * negative example. a2.21 §4.1: read the cells, never `strings(section)`,
 * because a `why` mentioning a word satisfies an assertion that the word is on a
 * card. */
{
  const s = section(SLOTS_SECTION_ID) as unknown as { type: string; cols: string[]; rows: { cells: string[]; say?: string }[] };
  if (s.type !== 'tapTable') die(`${SLOTS_SECTION_ID} is a ${s.type}. A table at layer core is a table-in-core density failure, so the slot diagram is a three-column tapTable and the table lives in the sheet.`);
  if (s.cols.length !== 3) die(`${SLOTS_SECTION_ID} has ${s.cols.length} columns.`);
  if (s.rows.length !== SLOTS.length) die(`${SLOTS_SECTION_ID} has ${s.rows.length} rows and the diagram is ${SLOTS.length} positions.`);
  if (s.rows.length !== 6) die(`the slot diagram is ${s.rows.length} rows and six is both the sentence and the Pixel 6 ceiling.`);
  for (const [i, slot] of SLOTS.entries()) {
    const cells = s.rows[i]!.cells;
    if (cells.length !== 3) die(`${SLOTS_SECTION_ID} row ${i} has ${cells.length} cells and there are 3 columns.`);
    if (cells[1] !== slot.word) die(`${SLOTS_SECTION_ID} row ${i} column 1 is "${cells[1]}" and position ${i} is "${slot.word}".`);
    if (cells[2] !== slot.job) die(`${SLOTS_SECTION_ID} row ${i} does not say what "${slot.word}" is doing.`);
    if (s.rows[i]!.say !== SLOT_SENTENCE) die(`${SLOTS_SECTION_ID} row ${i} does not speak the whole sentence. A word said on its own is not the word said in place.`);
  }
  /* AND THE FULL NEGATIVE IS WHAT THE DIAGRAM IS BUILT FROM. */
  const words = SLOTS.map((x) => x.word).join(' ');
  if (`${words}.` !== SLOT_SENTENCE) die(`the six positions read « ${words}. » and SLOT_SENTENCE is « ${SLOT_SENTENCE} ».`);
  if (!/\bne\b/u.test(SLOT_SENTENCE) || !/\bpas\b/u.test(SLOT_SENTENCE)) {
    die(`the slot diagram is built from « ${SLOT_SENTENCE} », which is not a full negative. The brief requires all four positions WITH one.`);
  }
  /* AND THE SENTENCE IS AN AUTHORED ROW rather than a string typed twice. */
  if (!AUTHORED_ITEMS.some((i) => i.fr === SLOT_SENTENCE)) die(`« ${SLOT_SENTENCE} » is not an authored row.`);
}

/* LAYOUT 2: THE EXCEPTION PAIR, both halves in ONE section, whichever option
 * was taken. The brief requires this even for the receptive version. */
{
  const cards = (section(OBJECT_SECTION_ID) as unknown as { cards: { fr: string }[] }).cards;
  const stop = (x: string) => x.replace(/\.$/u, '');
  for (const [i, [agrees, doesNot]] of OBJECT_PAIR.entries()) {
    const a = stop(fr(agrees));
    const b = stop(fr(doesNot));
    if (a === b) die(`the exception pair ${i} is the same string twice.`);
    const on = cards.filter((c) => c.fr.includes(a) && c.fr.includes(b));
    if (on.length !== 1) {
      die(`${OBJECT_SECTION_ID} does not put « ${a} » beside « ${b} » on one card. `
        + 'The brief requires the pair on one screen whichever option was taken.');
    }
  }
  /* AND THE PATTERN IS PRESENT RECEPTIVELY. */
  if (!ALL_SURFACE.some((t) => t.includes(OBJECT_CLAIM))) die('the exception is named nowhere, so the pattern the learner will meet in week one is not on a screen.');
}

/* LAYOUT 3: THE AUXILIARY FLIP, both halves in ONE section, showing the first
 * word changing with the little word. THIS IS THE OWNS. */
{
  const cards = (section(FLIP_SECTION_ID) as unknown as { cards: { fr: string }[] }).cards;
  const stop = (x: string) => x.replace(/\.$/u, '');
  for (const [i, [avoirId, etreId]] of FLIP_PAIRS.entries()) {
    const a = stop(fr(avoirId));
    const e = stop(fr(etreId));
    if (a === e) die(`flip pair ${i} is the same string twice.`);
    const on = cards.filter((c) => c.fr.includes(a) && c.fr.includes(e));
    if (on.length !== 1) die(`${FLIP_SECTION_ID} does not put « ${a} » beside « ${e} » on one card. That pair is the Owns.`);
  }
  /* AND THE avoir HALF REALLY IS avoir AND THE être HALF REALLY IS être. */
  for (const [avoirId, etreId] of FLIP_PAIRS) {
    if (!AVOIR_ROW_IDS.includes(avoirId)) die(`${avoirId} is the avoir half of a flip pair and its row does not say so.`);
    if (AVOIR_ROW_IDS.includes(etreId)) die(`${etreId} is the être half of a flip pair and its row says avoir.`);
  }
  if (FLIP_PAIRS.length !== 3) die(`there are ${FLIP_PAIRS.length} flip pairs and the lesson claims three.`);
}

/* ═══ 5. AVOIR IS NEVER THE FIRST WORD OF A REFLEXIVE ═════════════════════
 *
 * THE HARDEST GUARD IN THE BUILD. The shape it must refuse is the shape the
 * lesson is made of, with one word changed. Corrections §14.4: guard the THING
 * rather than the letters, or the English half of a card reads as French.     */

const CLITIC = "(me|m'|m’|te|t'|t’|se|s'|s’|nous|vous)";
const AVOIR = '(ai|as|a|avons|avez|ont)';
const AVOIR_RE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(je|j'|j’|tu|il|elle|on|nous|vous|ils|elles)\\s*${CLITIC}\\s*${AVOIR}(?![\\p{L}\\p{N}'’-])`,
  'iu',
);
const hasAvoirReflexive = (s: string): boolean => {
  if (AVOIR_RE.test(s)) return true;
  for (const b of BUILT_FORMS) if (hasPhrase(s, b)) return true;
  return false;
};
/* PROVED TO FIRE, AND PROVED NOT TO. An assertion that cannot fail is worse
 * than no assertion, and this one has to survive a lesson whose every screen
 * contains a pronoun beside an auxiliary. */
for (const s of AVOIR_MUST_FIRE) if (!hasAvoirReflexive(s)) die(`the avoir guard does not fire on « ${s} », so it guards nothing.`);
for (const s of AVOIR_MUST_NOT_FIRE) if (hasAvoirReflexive(s)) die(`the avoir guard fires on « ${s} », which is legitimate content. Corrections §14.4.`);
/* AND IT IS CLEAN EVERYWHERE EXCEPT THE THREE PLACES THE ERROR IS SHOWN AS ONE. */
for (const s of LESSON.sections) {
  if (WRONG_FORM_SECTIONS.has(s.id!)) continue;
  for (const t of display(s)) {
    if (hasAvoirReflexive(t)) {
      die(`${s.id} uses avoir with a little word: « ${t.slice(0, 110)} ». It is permitted only in ${[...WRONG_FORM_SECTIONS].join(', ')}, as the error.`);
    }
  }
}
for (const t of [...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}), ...display(LESSON.acts ?? []), ...display(LESSON.audio ?? {}), ...display(LESSON.overview ?? {}), LESSON.intro ?? '', LESSON.reframe ?? '']) {
  /* THE AUDIO BRIEF FOR THE TRAP QUOTES THE ERROR DELIBERATELY, which is the
   * one exception outside a section, and it is named rather than blanket. */
  if (hasAvoirReflexive(t) && !t.includes('WRONG-THEN-RIGHT TAKE')) {
    die(`avoir with a little word reaches a learner surface outside a section: « ${t.slice(0, 110)} ».`);
  }
}
/* AND NO AUTHORED ROW USES IT. Every `avoir` row is a verb with no little word. */
for (const it of AUTHORED_ITEMS) {
  if (hasAvoirReflexive(it.fr)) die(`${it.id} « ${it.fr} » puts avoir in front of a little word.`);
}
for (const id of AVOIR_ROW_IDS) {
  const row = AUTHORED_ITEMS.find((i) => i.id === id)!;
  if (new RegExp(`(?<![\\p{L}\\p{N}-])${CLITIC}(?![\\p{L}\\p{N}-])`, 'iu').test(row.fr.replace(/^\S+\s*/u, ''))) {
    die(`${id} « ${row.fr} » is declared an avoir row and carries a little word.`);
  }
}
for (const im of IMPORTED) if (hasAvoirReflexive(im.fr)) die(`${im.id} « ${im.fr} » puts avoir in front of a little word and is being imported.`);

/* ═══ 6. THE INHERITED LINES, AS LITERALS ═════════════════════════════════
 *
 * a2.21 §4.2 and §8: a cross-lesson quote must be a LITERAL on the guard side,
 * because a constant compared against itself renames both sides. a2.21's own
 * quote of a2.15 was INVENTED and neither its batch nor its merge could see it. */
{
  const LIT_AGREEMENT = 'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';
  const LIT_A201 = 'Four of the six forms sound the same, so the pronoun carries the person.';
  const LIT_A222 = 'The pronoun changes with the subject, because it is the subject.';
  const LIT_A118 = 'Wrap the verb, then ask what the verb was.';
  const LIT_A219 = 'Wrap the verb that changed, not the one carrying the meaning.';
  const LIT_EXT = 'Both words changed for the subject, so both go inside the wrap.';

  if (AGREEMENT_RULE !== LIT_AGREEMENT) die(`AGREEMENT_RULE is « ${AGREEMENT_RULE} » and a2.21 exported « ${LIT_AGREEMENT} ».`);
  if (A201_REFRAME !== LIT_A201) die(`A201_REFRAME is « ${A201_REFRAME} » and a2.01 shipped « ${LIT_A201} ».`);
  if (A222_REFRAME !== LIT_A222) die(`A222_REFRAME is « ${A222_REFRAME} » and a2.22 shipped « ${LIT_A222} ».`);
  if (A118_REFRAME !== LIT_A118) die(`A118_REFRAME is « ${A118_REFRAME} » and a1.18 shipped « ${LIT_A118} ».`);
  if (NEGATION_RULE !== LIT_A219) die(`NEGATION_RULE is « ${NEGATION_RULE} » and a2.19 shipped « ${LIT_A219} ».`);
  if (NEGATION_EXTENSION !== LIT_EXT) die(`NEGATION_EXTENSION is « ${NEGATION_EXTENSION} » and a2.22 shipped « ${LIT_EXT} ».`);

  /* AND EACH IS ACTUALLY QUOTED, not merely declared. The brief: assert both
   * strings, and a paraphrase must go red. */
  const quoted = (lit: string) => ALL_SURFACE_RAW.filter((s) => s.includes(lit)).length;
  if (quoted(LIT_AGREEMENT) < 4) die(`a2.21's agreement rule is quoted ${quoted(LIT_AGREEMENT)} times. It is this lesson's inherited contract and belongs on the ending screen, the drill, the sheet and the roundup.`);
  if (quoted(LIT_A201) < 2) die(`a2.01's reframe is quoted ${quoted(LIT_A201)} times, and it is why nothing here can be heard.`);
  if (quoted(LIT_A219) < 3) die(`a2.19's negation line is quoted ${quoted(LIT_A219)} times and this lesson is the fifth to carry it.`);
  if (quoted(LIT_A118) < 1) die("a1.18's negation line is quoted nowhere. §2: the arc holds TWO strings and both have to be here.");
  if (quoted(LIT_EXT) < 3) die(`a2.22's extension is quoted ${quoted(LIT_EXT)} times.`);
  if (quoted(NEGATION_OUTSIDE) < 4) die(`the third negation sentence is authored ${quoted(NEGATION_OUTSIDE)} times, and it is what stops the inherited pair producing « Je ne me suis levé pas. »`);

  /* AND a2.22's CLEAN BACKGROUND IS QUOTED, because it is the sentence this
   * lesson changes and that lesson worded it so this one could.
   *
   * THE LITERAL IS ON THE GUARD SIDE, and it was not in the first draft. FOUND
   * BY MUTATION: paraphrasing the constant renamed both sides and walked past
   * this check, past the merge, and was caught only by the batch's version
   * check and by the lesson's own test, which holds the string by hand. That is
   * a2.18 §6 and a2.21 §4.2 for the sixth time in this band, and it happened
   * here on the ONE inherited line that was not already a literal. */
  const LIT_PRESENT = 'In the present nothing on the end of the verb knows who the subject is. Only the extra word changes.';
  if (PRESENT_NO_AGREEMENT !== LIT_PRESENT) {
    die(`PRESENT_NO_AGREEMENT is « ${PRESENT_NO_AGREEMENT} » and a2.22 shipped « ${LIT_PRESENT} ».`);
  }
  if (!ALL_SURFACE.some((s) => s.includes(LIT_PRESENT))) {
    die('a2.22 worded its present-tense framing so this lesson could quote it, and it reaches no screen.');
  }
}

/* ═══ 7. OPTION 1: THE PATTERN IS NAMED AND THE REASON IS NOT ═════════════
 *
 * The brief: *« If you took option 1, the direct/indirect distinction is not
 * explained, scoped to production surfaces, and the exception is present
 * receptively. »* This build scopes it WIDER than asked, to every surface,
 * because the reason belongs to a2.24 and half-explaining it on a reading card
 * is exactly how that lesson loses its subject.                               */
{
  for (const t of OBJECT_TERMS) {
    for (const s of ALL_SURFACE) {
      if (hasPhrase(s, t)) die(`the object system is explained on a learner surface: « ${t} » in « ${s.slice(0, 100)} ». Option 1 names the pattern and leaves the reason to a2.24.`);
    }
  }
  if (OBJECT_DECISION.option !== 1) die('OBJECT_DECISION says a different option was taken and these guards are option 1\'s.');
  if (OBJECT_DECISION.taught || OBJECT_DECISION.reasonStated) die('OBJECT_DECISION claims the rule is taught and option 1 names it receptively.');
  /* AND THE EXCEPTION IS RECOGNISED AND NEVER PRODUCED.
   *
   * The brief draws the line exactly here: *« Recognition of the pattern is
   * testable; the reason is not yours. »* So the exception IS allowed to appear
   * in an mcq stem, where the learner is asked whether it is correct French,
   * and it must never appear anywhere the learner is asked to WRITE or SAY one:
   * no typed accept list, no dictée, no speak surface, no role play, and no
   * drill that asks for a form. A guard that simply banned it from the exam
   * would delete the only place the receptive naming is ever checked. */
  const exceptionIds = ['fr.a2.verbes.807', 'fr.a2.verbes.808'];
  const PRODUCES = new Set([
    DICTATION_SECTION_ID, SPEAK_SECTION_ID, TALK_SECTION_ID,
    ASSEMBLY_SECTION_ID, NEWVERBS_SECTION_ID, WRAP_SECTION_ID,
  ]);
  for (const id of exceptionIds) {
    const line = fr(id).replace(/\.$/u, '');
    for (const s of LESSON.sections) {
      if (!PRODUCES.has(s.id!)) continue;
      for (const t of display(s)) {
        if (t.includes(line)) die(`the exception « ${line} » reaches a production surface (${s.id}): « ${t.slice(0, 100)} ».`);
      }
    }
    for (const d of LESSON.drills ?? []) {
      for (const t of display(d)) if (t.includes(line)) die(`the exception « ${line} » reaches the drill ${d.id}.`);
    }
    const row = AUTHORED_ITEMS.find((i) => i.id === id)!;
    for (const d of ['flashcard', 'voiceflash', 'dictation'] as const) {
      if (row.drills.includes(d)) die(`${id} carries the ${d} drill and the exception is receptive only.`);
    }
    if (PP_DICTEE_IDS.includes(id) || PP_SPEAK_IDS.includes(id)) die(`${id} is a dictée or speak target and the exception is receptive only.`);
  }
  /* AND NO TYPED QUESTION MAY ASK THE LEARNER TO WRITE ONE. This is the half
   * that matters: `accept` is where production actually happens in a quiz. */
  for (const q of quizQuestions(section(QUIZ_SECTION_ID) as Parameters<typeof quizQuestions>[0])) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    for (const a of q.accept ?? []) {
      for (const id of exceptionIds) {
        if (a.includes(fr(id).replace(/\.$/u, ''))) die(`a typed question accepts « ${a} », which is the exception. Option 1 tests recognition and never production.`);
      }
    }
  }
  /* AND a2.24 IS NAMED, so the hand-off reaches a screen rather than a report. */
  if (!ALL_SURFACE.some((s) => namesUnit(s, 'a2.24'))) die('a2.24 is named on no screen, so the exception is left to a lesson the learner is never pointed at.');
  /* AND NOBODY AGREED THE EXCEPTION. */
  for (const s of ALL_SURFACE) {
    for (const bad of ["s'est lavée les mains", "s'est brossée les dents", "me suis lavée les mains"]) {
      if (s.toLowerCase().includes(bad.toLowerCase())) die(`the exception is agreed on a learner surface: « ${bad} ». That is the case being taught wrongly.`);
    }
  }
}

/* ═══ 8. THE RECIPROCAL AND THE IMPERFECT ARE ABSENT ══════════════════════*/

/* PROVED TO FIRE, AND PROVED NOT TO. The first version of the reciprocal list
 * held the bare phrase « each other » and refused an audio brief saying *« the
 * two sit against each other »*, which is corrections §14.4's shape running the
 * other way round: a marker built from an ENGLISH GLOSS firing on ordinary
 * English. Both lists are walked so neither half of that can come back. */
{
  const fires = (s: string) => RECIPROCAL_MARKERS.some((m) => hasPhrase(s, m));
  for (const s of RECIPROCAL_MUST_FIRE) if (!fires(s)) die(`the reciprocal guard does not fire on « ${s} », so it guards nothing.`);
  for (const s of RECIPROCAL_MUST_NOT_FIRE) if (fires(s)) die(`the reciprocal guard fires on « ${s} », which is legitimate content.`);
}
for (const s of ALL_SURFACE) {
  for (const m of RECIPROCAL_MARKERS) {
    if (hasPhrase(s, m)) die(`a reciprocal reaches a learner surface: « ${m} » in « ${s.slice(0, 100)} ». a2.22 left them out and corpus §9 leaves them out too.`);
  }
  for (const m of IMPERFECT_MARKERS) {
    if (hasPhrase(s, m)) die(`the imperfect reaches a learner surface: « ${m} » in « ${s.slice(0, 100)} ». It is beyond A2's first twenty.`);
  }
}
for (const it of AUTHORED_ITEMS) {
  for (const m of [...RECIPROCAL_MARKERS, ...IMPERFECT_MARKERS]) {
    if (hasPhrase(it.fr, m)) die(`${it.id} « ${it.fr} » carries « ${m} ».`);
  }
}

/* ═══ 9. THE NEGATIVE, AND THE ELISION THAT MOVED ═════════════════════════*/

{
  /* EVERY NEGATIVE REDUCES TO AN AFFIRMATIVE THE LESSON ALSO SHOWS, through the
   * real `reduceNegative`. a2.05 §2's shape, and this build's function is
   * written fresh because the elision is on a different word. */
  const affirmatives = new Set(AUTHORED_ITEMS.map((i) => i.fr));
  const negatives = AUTHORED_ITEMS.filter((i) => /\bne\b/u.test(i.fr));
  if (negatives.length < 6) die(`${negatives.length} negative rows and the lesson walks six persons.`);
  for (const n of negatives) {
    const reduced = reduceNegative(n.fr);
    if (reduced === n.fr) die(`reduceNegative did nothing to « ${n.fr} », so the pair check is inert.`);
    if (/\bne\b|\bpas\b/u.test(reduced)) die(`reduceNegative left « ${reduced} » holding half a negative.`);
    /* AND `ne` NEVER ELIDES HERE, in any person. §3. */
    if (/\bn['’]/u.test(n.fr)) die(`${n.id} « ${n.fr} » elides ne. Every form of the little word starts on a consonant, so ne stays whole in all six persons.`);
  }
  void affirmatives;
  /* AND THE PRONOUN DOES ELIDE, in exactly two persons. */
  const elided = AUTHORED_ITEMS.filter((i) => /(?<![\p{L}])(t|s)['’]e(s|st)(?![\p{L}])/u.test(i.fr));
  if (!elided.length) die('no authored row elides the little word, and two of the six persons do. §3.');
}

/* ═══ 10. THE EAR, THE DICTÉE AND THE FREE TEXT ═══════════════════════════*/

/** Every multi-word string a free-text question may legitimately accept: an
 *  authored row, plus the two forms the lesson teaches without publishing.
 *  a2.22 §1: `matchesAccept(a, q.accept)` for every `a` IN `q.accept` asks
 *  whether the list accepts ITSELF and cannot fail for any value. The check with
 *  content is that a multi-word answer is a sentence THIS LESSON OWNS. */
const ANSWERABLE = new Set<string>([
  ...AUTHORED_ITEMS.map((i) => i.fr),
  'Je me suis levé.',
]);

const QUESTIONS = quizQuestions(section(QUIZ_SECTION_ID) as Parameters<typeof quizQuestions>[0]);
if (QUESTIONS.length !== EXPECTED_QUESTIONS) die(`${QUESTIONS.length} questions and EXPECTED_QUESTIONS is ${EXPECTED_QUESTIONS}.`);
{
  const mcq = QUESTIONS.filter((q) => q.format === 'mcq').length;
  if (mcq > QUESTIONS.length / 2) die(`${mcq} of ${QUESTIONS.length} questions are mcq and at most half may be.`);
  let multiWord = 0;
  for (const q of QUESTIONS) {
    if (!q.why) die(`a question has no why: ${q.q}`);
    if (!q.ref) die(`a question has no ref: ${q.q}`);
    if (!LESSON.sections.some((s) => s.id === q.ref)) die(`a question refs ${q.ref}, which is not a section.`);
    if (q.accept) {
      for (const a of q.accept) {
        if (!matchesAccept(a, q.accept)) die(`« ${a} » is not accepted by its own accept list: ${q.q}`);
        if (/\s/u.test(a)) {
          multiWord += 1;
          if (!ANSWERABLE.has(a)) {
            die(`« ${a} » is offered as a free-text answer and is not a sentence this lesson owns. `
              + 'Every multi-word accept entry must be an authored row or a form the lesson explicitly teaches.');
          }
        }
      }
      const shown = (q as { answer?: string }).answer;
      if (shown && !matchesAccept(shown, q.accept)) die(`the displayed answer « ${shown} » is not accepted: ${q.q}`);
    }
    /* EVERY PRODUCED QUESTION NAMES A SUBJECT, because the little word, the
     * first word AND the ending all depend on it. */
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      const text = `${q.q} ${(q.accept ?? []).join(' ')}`;
      const hasSubject = /(?<![\p{L}\p{N}-])(je|j'|j’|tu|il|elle|on|nous|vous|ils|elles|speaking to|she|he|they|you|i)(?![\p{L}\p{N}'’-])/iu.test(text);
      if (!hasSubject) die(`a produced question names no subject, and three separate decisions depend on it: ${q.q}`);
    }
    /* NO EAR QUESTION MAY SEPARATE TWO OPTIONS THAT ARE ONE SOUND. §7: the
     * ending is inaudible on every verb without exception. */
    if (q.format === 'listenChoose' && q.opts) {
      for (const g of HOMOPHONE_GROUPS) {
        const hits = q.opts.filter((o) => g.includes(o));
        if (hits.length > 1) die(`an ear question offers « ${hits.join(' » and « ')} », which are one sound. Marking one right certifies a bug.`);
      }
    }
    if (q.opts && new Set(q.opts).size !== q.opts.length) die(`a question has a duplicate option: ${q.q}`);
  }
  if (multiWord < 12) die(`only ${multiWord} multi-word answers, and the brief asks for typeIn on the whole form to be the backbone of this exam.`);
}
/* THE DICTÉE: every target in LETTERS mode, and carrying the dictation drill. */
for (const id of PP_DICTEE_IDS) {
  if (!AUTHORED_IDS.includes(id)) die(`the dictée targets ${id}, which this build does not author.`);
  const row = AUTHORED_ITEMS.find((i) => i.id === id)!;
  if (dicteeMode(row.fr) !== 'letters') {
    die(`the dictée targets « ${row.fr} », which dicteeMode puts in WORD mode. Word mode hands every real word over pre-spelled, and the whole point of this dictée is the two letters on the end.`);
  }
  if (row.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length > DICTEE_MAX_LETTERS) die(`« ${row.fr} » is over ${DICTEE_MAX_LETTERS} letters.`);
  if (!row.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill.`);
}
for (const id of DICTATION_IDS) {
  if (!PP_DICTEE_IDS.includes(id)) die(`${id} carries the dictation drill and the dictée does not target it.`);
}
/* AND THE DICTÉE CARRIES THE ENDINGS, which is the only reason it exists. */
{
  const endings = new Set(PP_DICTEE_IDS.map((id) => AUTHORED_ITEMS.find((i) => i.id === id)!.fr).map((f) => {
    const m = /([a-zà-ÿ]+é(e?s?))\b/iu.exec(f);
    return m ? (m[2] ?? '') : 'x';
  }));
  for (const want of ['', 'e', 's']) {
    if (!endings.has(want)) die(`the dictée asks for no « -${want || 'nothing'} » ending, and it is the only surface that can test one.`);
  }
}
/* THE SPEAK SURFACE needs voiceflash on every item it names. */
for (const id of PP_SPEAK_IDS) {
  const row = AUTHORED_ITEMS.find((i) => i.id === id) ?? imported(id);
  if (!row.drills.includes('voiceflash')) die(`${id} is on the speak surface and carries no voiceflash drill.`);
}

/* ═══ 11. THE HOUSE COPY, IN BOTH WALKS ══════════════════════════════════*/

/* THE UNIT'S OWN ENGLISH TITLE IS THE ONE EXEMPTION, AND IT IS NARROW.
 *
 * `content_units` requires `overview.titleEn` to be the unit's English name, and
 * a2.23's is « Pronominal Verbs in the Passé Composé ». a2.17 §5 says to guard
 * the RATIO rather than ban the word, precisely so that field can stay what the
 * database says it is — and that answer works when the technical word merely
 * appears somewhere avoidable. IT DOES NOT WORK HERE: « pronominal verb » is
 * unambiguously jargon on a card and it is contractually fixed in that one
 * field, so the ratio would either let it onto every card or refuse the title.
 *
 * So the exemption is ONE STRING, checked to BE the unit's title, and every
 * other occurrence of the same phrase still fails. */
const TITLE_EXEMPT = LESSON.overview?.titleEn ?? '';
if (TITLE_EXEMPT !== UNIT.title) {
  die(`overview.titleEn is « ${TITLE_EXEMPT} » and content_units holds « ${UNIT.title} ». The jargon exemption is only defensible while the two are the same string.`);
}
for (const walk of [PROSE_SURFACE, DISPLAY_SURFACE]) {
  for (const s of walk) {
    if (/[—–]/u.test(s)) die(`an em dash reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (/\bhonest/i.test(s)) die(`a banned word reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (DOUBLE_STOP.test(s)) die(`a sentence-final stop with punctuation after it reaches a learner surface: « ${s.slice(0, 90)} ». a2.20 found half of this on a Pixel 6 and a2.22 §4 found the rest.`);
    /* JARGON, AND ITS -s PLURAL. a2.15 §3: hasPhrase is boundary-exact. */
    if (s === TITLE_EXEMPT) continue;
    for (const j of JARGON) {
      if (hasPhrase(s, j)) die(`grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 90)} ».`);
      if (hasPhrase(s, `${j}s`)) die(`grammar jargon on a learner surface: « ${j}s » in « ${s.slice(0, 90)} ».`);
    }
  }
}
/* AND THE EXEMPTION IS NOT A LOOPHOLE: the title's own jargon appears NOWHERE
 * else, which is the assertion that makes the `continue` above safe. */
for (const j of JARGON) {
  if (!hasPhrase(TITLE_EXEMPT, j) && !hasPhrase(TITLE_EXEMPT, `${j}s`)) continue;
  const elsewhere = ALL_SURFACE.filter((s) => s !== TITLE_EXEMPT && (hasPhrase(s, j) || hasPhrase(s, `${j}s`)));
  if (elsewhere.length) die(`« ${j} » is exempted only inside the unit's own title and it also appears in: « ${elsewhere[0]!.slice(0, 90)} ».`);
}
/* THE RATIO. a2.17 §5: guard the ratio, not the word. */
{
  const hay = ALL_SURFACE.join('\n').toLowerCase();
  const count = (n: string) => hay.split(n.toLowerCase()).length - 1;
  for (const { plain, technical } of PLAIN_OVER_TECHNICAL) {
    const p = count(plain);
    const t = count(technical);
    if (t > p) die(`« ${technical} » appears ${t} times against « ${plain} » ${p} times. The house prefers the plain phrase.`);
  }
}
/* THE TERM CHIPS: three per section, and the row fits. */
for (const s of LESSON.sections) {
  const chips = (s as { terms?: string[] }).terms ?? [];
  if (chips.length > 3) die(`${s.id} declares ${chips.length} term chips and the renderer shows three.`);
  for (const c of chips) if (!PRONOMINAUX_PASSE_TERMS[c]) die(`${s.id} names the term "${c}", which is not defined.`);
  const labels = chips.map((c) => PRONOMINAUX_PASSE_TERMS[c]!.term);
  const w = chipRowWidth(labels);
  if (w > CHIP_ROW_BUDGET) die(`${s.id}'s chip row is ${w} characters and the budget is ${CHIP_ROW_BUDGET}.`);
}
{
  const used = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const k of Object.keys(PRONOMINAUX_PASSE_TERMS)) if (!used.has(k)) die(`the term "${k}" is defined and surfaced by no section.`);
}
for (const s of LESSON.sections) {
  const hint = (s as { hint?: string }).hint;
  if (hint && hint.length > HINT_MAX) die(`${s.id}'s hint is ${hint.length} characters and ellipsises above ${HINT_MAX}.`);
}

/* ═══ 12. THE trapDrill SHAPE ════════════════════════════════════════════*/

{
  const t = section(WRAP_SECTION_ID) as unknown as {
    steps?: { kind: string; gate?: boolean }[]; swipe?: boolean; size?: string;
    audio?: { recordingId?: string }; say?: string; cards: { fr: string }[]; rule?: unknown;
  };
  const kinds = (t.steps ?? []).map((s) => s.kind).join('>');
  if (kinds !== 'rule>cards>audio>drill') die(`the trapDrill walks ${JSON.stringify(kinds)} and A2 walks rule, cards, audio, drill.`);
  if (t.swipe !== true) die('the trapDrill does not set swipe, so it does not own the viewport.');
  if (t.size) die('the trapDrill carries a size, and size comes OFF a stepped trapDrill.');
  if (!t.audio) die('the trapDrill names an audio step and declares no audio.');
  if (!t.say) die('the trapDrill has no say.');
  if (!t.rule) die('the trapDrill has no rule block and its first step is a rule.');
  if (!(t.steps ?? []).some((s) => s.kind === 'drill' && s.gate === true)) die('the trapDrill step is not gated.');
  const rec = (LESSON.audio?.recorded ?? []).find((r) => r.id === t.audio!.recordingId);
  if (!rec) die(`the trapDrill names recording ${t.audio!.recordingId}, which the lesson does not declare.`);
  for (const c of t.cards) {
    if (!(rec!.clipIds ?? []).includes(c.fr)) die(`the trapDrill's audio recording does not contain « ${c.fr} », which its own card plays.`);
  }
  /* AND ITS FIRST CARD IS THE ERROR, which is what makes it a trap. */
  if (!hasAvoirReflexive(t.cards[0]!.fr)) die(`the trapDrill's first card is « ${t.cards[0]!.fr} » and the trap is avoir on a verb carrying the little word.`);
}

/* ═══ 12b. THE ROLE PLAY ═════════════════════════════════════════════════
 *
 * a2.21 §4.4: the only thing that checks these is the seed-wide
 * `scenario.logic.test.ts`, which runs AFTER the merge, which is exactly how
 * a2.03 shipped three one-alt turns with every gate green. */
{
  const t = section(TALK_SECTION_ID) as unknown as {
    turns: { ai: string; en: string; user: string; userEn?: string; alts?: { fr: string; en: string }[] }[];
  };
  for (const [i, turn] of t.turns.entries()) {
    if (!turn.userEn) die(`role play turn ${i} has no userEn.`);
    if ((turn.alts ?? []).length < 2) die(`role play turn ${i} has ${(turn.alts ?? []).length} alternative(s) and the contract requires two.`);
    for (const a of turn.alts ?? []) {
      if (!a.fr || !a.en) die(`role play turn ${i} has an alternative missing fr or en.`);
      if (a.fr === turn.user) die(`role play turn ${i} offers its own answer as an alternative.`);
    }
  }
}

/* ═══ 13. THE SCENE ══════════════════════════════════════════════════════*/

for (const b of PP_SCENE_BEATS) {
  if (b.kind === 'bubble') {
    /* a2.05 §11.2, found on a Pixel 6: a spaced exclamation mark makes the
     * French line lose its last word while the gloss still translates it. */
    if (b.fr.includes('!')) die(`a scene bubble contains an exclamation mark: « ${b.fr} ». It clips on a Pixel 6.`);
  }
  if (b.kind === 'break') {
    if (b.wrong.fr === b.right.fr) die('the scene break shows the same line as wrong and right.');
    if (!b.wrong.fr.includes("J'ai levé")) die(`the scene break's wrong line is « ${b.wrong.fr} » and the scene is about reaching for avoir.`);
    if (!b.right.fr.includes('Je me suis levé')) die(`the scene break's right line is « ${b.right.fr} ».`);
  }
}

/* ═══ 14. TRANCHES AND REACHABILITY ══════════════════════════════════════*/

{
  const known = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
  const tranche = (LESSON.deckTranche ?? []).flat();
  if (new Set(tranche).size !== tranche.length) die('an item is released by two tranches.');
  for (const id of known) if (!tranche.includes(id)) die(`${id} is authored or imported and released by no tranche.`);
  for (const id of tranche) if (!known.has(id)) die(`a tranche releases ${id}, which this build neither authors nor imports.`);
  for (const id of PP_ITEM_IDS) if (!known.has(id)) die(`a section names ${id}, which this build neither authors nor imports.`);
  if ((LESSON.deckTranche ?? []).length !== EXPECTED_ACTS) die('there is not one tranche per act.');
}
/* EACH DRILL IS THE FIRST RESOLVING TARGET OF SOME ROUND. */
{
  const trigger = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill] as const));
  const rounds = (section(QUIZ_SECTION_ID) as unknown as { rounds: { id: string; targets?: string[] }[] }).rounds;
  const fired = new Set<string>();
  for (const r of rounds) {
    const first = (r.targets ?? []).find((x) => trigger.has(x));
    if (!first) die(`round ${r.id} names no target that resolves to a drill.`);
    fired.add(trigger.get(first!)!);
  }
  for (const d of PP_DRILLS) {
    if (d.id.startsWith('retest-')) continue;
    if (!fired.has(d.id)) die(`${d.id} is the first resolving target of no round, so it is dead content.`);
  }
}
/* THE SHEET RESOLVES, AND IT IS REACHABLE. */
{
  const declared = new Set(PP_SHEETS.map((s) => s.id));
  const named = new Set(LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  for (const id of named) if (!declared.has(id)) die(`a section names sheet ${id}, which the lesson does not declare.`);
  for (const id of declared) if (!named.has(id)) die(`sheet ${id} is declared and reachable from no section.`);
  /* ReferenceSheet.tsx draws teach, letterGrid and table and nothing else. */
  for (const sh of PP_SHEETS) {
    for (const sec of sh.sections ?? []) {
      if (!['teach', 'letterGrid', 'table'].includes(sec.type)) {
        die(`sheet ${sh.id} holds a ${sec.type} block, and ReferenceSheet.tsx draws only teach, letterGrid and table.`);
      }
    }
  }
  /* ONE TABLE. The brief asks for restraint and this is where it is measured. */
  const inFlow = LESSON.sections.filter((s) => s.type === 'table');
  if (inFlow.length) die(`${inFlow.map((s) => s.id).join(', ')} is a table at layer core, which is a table-in-core density failure.`);
  const inSheets = PP_SHEETS.flatMap((sh) => (sh.sections ?? []).filter((x) => x.type === 'table'));
  if (inSheets.length !== 1) die(`${inSheets.length} tables in the sheet and the brief asks for one.`);
}

/* ═══ 15. THE FOUR CELLS AND THE SIX PERSONS ARE ON A SCREEN ═════════════*/

{
  const cellSurface = display(section(AGREEMENT_SECTION_ID)).join('\n');
  for (const id of CELL_IDS) {
    if (!cellSurface.includes(fr(id))) die(`${AGREEMENT_SECTION_ID} does not carry « ${fr(id)} ». The four cells are the agreement layout.`);
  }
  const personSurface = display(section(PERSONS_SECTION_ID)).join('\n');
  const stop = (x: string) => x.replace(/\.$/u, '');
  for (const id of PERSON_IDS) {
    if (!personSurface.includes(stop(fr(id)))) die(`${PERSONS_SECTION_ID} does not carry « ${fr(id)} ».`);
  }
  /* AND THE avoir CONTRAST IS BESIDE THEM, which is a2.21's rule unchanged. */
  if (!cellSurface.includes(fr(AVOIR_PAIR[0]))) die(`${AGREEMENT_SECTION_ID} does not carry « ${fr(AVOIR_PAIR[0])} », which is the half where nothing goes on the end.`);
}
/* AND THE EAR SECTION SAYS THE ENDING CANNOT BE HEARD, on the section itself. */
{
  const s = display(section(SILENT_SECTION_ID)).join('\n');
  if (!namesUnit(s, 'a2.01')) die(`${SILENT_SECTION_ID} does not credit a2.01, whose line this is.`);
}

/* ═══ APPLY ═════════════════════════════════════════════════════════════*/

async function main() {
  console.log(`\n  a2.23 « ${UNIT.sub} », seq ${UNIT.seq}\n`);
  console.log(`  guards        all passed over ${ALL_SURFACE.length} learner strings`);
  console.log(`  corpus        ${AUTHORED_ITEMS.length} authored into ${THEME}, ${IMPORTED.length} imported, 0 headwords authored`);
  console.log(`  lesson        ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions`);
  console.log(`  the Owns      ${OWNS_SECTIONS} sections against the positions' ${PARADIGM_SECTIONS}`);
  console.log(`  the exception named receptively, produced nowhere; the reason left to a2.24`);
  console.log(`  manifest      ${MEASURED_ROWS.frameCellsNonZero} of ${MEASURED_ROWS.frameCellsMeasured} frame-verb cells are non-zero`);

  const c = await pool.connect();

  const beforeQ = await c.query<{ n: string }>("select count(*)::text n from content_items where id like 'fr.a2.verbes.%'");
  const before = Number(beforeQ.rows[0]!.n);
  const blockQ = await c.query<{ id: string }>("select id from content_items where id like 'fr.a2.verbes.%'");
  const allIds = blockQ.rows.map((r) => r.id);
  const inA221 = allIds.filter(isA221);
  const inA222 = allIds.filter(isA222);
  if (inA221.length !== A221_ROWS) { c.release(); await pool.end(); die(`a2.21's block holds ${inA221.length} rows and that lesson applied ${A221_ROWS}.`); }
  if (inA222.length !== A222_ROWS) { c.release(); await pool.end(); die(`a2.22's block holds ${inA222.length} rows and that lesson applied ${A222_ROWS}.`); }
  const stray = allIds.filter((id) => isMine(id) && !AUTHORED_IDS.includes(id));
  if (stray.length) { c.release(); await pool.end(); die(`rows inside this build's block that it does not own: ${stray.join(', ')}.`); }

  const unitRow = await c.query<{ body: { id: string; seq: number; title: string; sub: string; canDo: string; lessonIds?: string[]; prereqUnitIds?: string[] } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID]);
  const unit = unitRow.rows[0]?.body;
  if (!unit) { c.release(); await pool.end(); die(`${UNIT_ID} is not in content_units.`); }
  for (const k of ['seq', 'title', 'sub', 'canDo'] as const) {
    if (String(unit![k]) !== String(UNIT[k])) {
      c.release(); await pool.end();
      die(`the unit's ${k} is « ${String(unit![k])} » and the corpus file claims « ${String(UNIT[k])} ». Corrections §1: take the identity block from the database.`);
    }
  }
  /* BOTH PREREQUISITES ARE SHIPPED. The brief refuses to let this lesson be
   * built against briefs and says so twice; this is the check that makes it
   * true rather than asserted. */
  {
    const declared = unit!.prereqUnitIds ?? [];
    for (const p of UNIT.prereqUnitIds) {
      if (!declared.includes(p)) { c.release(); await pool.end(); die(`the unit does not declare ${p} as a prerequisite and the corpus file claims it does.`); }
      const pq = await c.query<{ body: { lessonIds?: string[] } }>(
        "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [p]);
      const lessons = pq.rows[0]?.body?.lessonIds ?? [];
      if (!lessons.length) {
        c.release(); await pool.end();
        die(`${p} is a hard prerequisite of this lesson and it has NO SHIPPED LESSON. `
          + 'The brief says to stop and say so rather than build against a brief.');
      }
    }
  }
  const expectedTag = `A2 · LEÇON ${String(unit!.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) {
    c.release(); await pool.end();
    die(`the lesson's tag is « ${LESSON.tag} » and missions.ts computes « ${expectedTag} » from the live unit's seq.`);
  }
  const already = (unit!.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit          ${UNIT_ID} seq ${unit!.seq}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit!.lessonIds ?? [])}${already ? '  (re-run)' : '  (first lesson)'}`);
  const nextUnit = { ...unit!, lessonIds: [...new Set([...(unit!.lessonIds ?? []), LESSON.id])] };

  const prev = await c.query<{ body: unknown }>("select body from content_units where kind = 'lesson' and slug = $1", [LESSON.id]);
  const prevBody = prev.rows[0]?.body as { version?: number } | undefined;
  const prevVersion = prevBody?.version ?? 0;
  if (LESSON.version < prevVersion) {
    c.release(); await pool.end();
    die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version}. The counter moves forward, never back.`);
  }
  if (LESSON.version === prevVersion && canonicalJson(prevBody) !== canonicalJson(LESSON)) {
    c.release(); await pool.end();
    die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version} with DIFFERENT content.\n`
      + '  Move the lesson\'s own version counter forward. Two different bodies under one number is the drift\n'
      + '  that makes Postgres and seed.json disagree while both report the same version.');
  }
  console.log(prevVersion === 0
    ? `  lesson        ${LESSON.id} new, v${LESSON.version}`
    : `  lesson        ${LESSON.id} ${LESSON.version === prevVersion ? 'unchanged, idempotent re-run' : `replacing v${prevVersion} with v${LESSON.version}`}`);

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
  const afterQ = await c.query<{ n: string; mx: string }>(
    "select count(*)::text n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'");
  const after = Number(afterQ.rows[0]!.n);
  if (after !== before + AUTHORED_ITEMS.length && after !== before) {
    c.release(); await pool.end();
    die(`fr.a2.verbes holds ${after} rows and it held ${before} before this build's ${AUTHORED_ITEMS.length}.`);
  }
  /* EVERY AUTHORED ROW READ BACK, so a respelling that did not land is loud. */
  const rb = await c.query<{ id: string; fr: string; respell: string | null }>(
    'select id, fr, respell from content_items where id = any($1)', [AUTHORED_IDS]);
  if (rb.rows.length !== AUTHORED_ITEMS.length) {
    c.release(); await pool.end();
    die(`${rb.rows.length} of ${AUTHORED_ITEMS.length} rows read back.`);
  }
  for (const r of rb.rows) {
    const want = AUTHORED_ITEMS.find((i) => i.id === r.id)!;
    if (r.fr !== want.fr) { c.release(); await pool.end(); die(`${r.id} stored fr="${r.fr}" and the corpus says "${want.fr}".`); }
    if (r.respell !== want.respell) { c.release(); await pool.end(); die(`${r.id} stored respell="${r.respell}" and the corpus says "${want.respell}".`); }
    if (hasPlainNasalFor(r.fr, String(r.respell ?? ''))) { c.release(); await pool.end(); die(`${r.id} is flagged after the apply.`); }
  }

  console.log(
    '\n  applied to Postgres:\n'
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_IDS[0]}..${AUTHORED_IDS[AUTHORED_IDS.length - 1]}\n`
    + '      ZERO headwords, ZERO participles as corpus items, ZERO gendered rows, ZERO rows in routines.\n'
    + `    ${IMPORTED.length} rows imported by id, ${READ_NOT_IMPORTED.length} read and refused, 0 repaired\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions, ${(LESSON.itemIds ?? []).length} items\n`
    + `    the Owns ${OWNS_SECTIONS} sections against the positions' ${PARADIGM_SECTIONS}\n`
    + `    fr.a2.verbes row count: ${before} before, ${after} after (max ${afterQ.rows[0]!.mx})\n`
    + `    a2.21's block still holds ${inA221.length}, a2.22's still holds ${inA222.length}\n`
    + `    ROW_COUNT_BEFORE recorded ${ROW_COUNT_BEFORE}, measured ${before}\n\n`
    + '  NEXT: pnpm tsx scripts/merge-pronominaux-passe-into-seed.ts\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
