/* a2.22 « Les verbes pronominaux », seq 19. Corpus + lesson + terms, to Postgres.
 *
 *     pnpm content:pronominaux -- --dry-run
 *     pnpm content:pronominaux
 *
 * ── WHAT THIS BATCH REFUSES ──────────────────────────────────────────────
 *
 * A COMPOUND TENSE ANYWHERE AT ALL. Not on a production surface: ANYWHERE.
 *   a2.23 is seq 20 and the compound past of these verbs is its entire subject,
 *   so a participle in an example is still a leak. Walked over every surface,
 *   and the guard is proved to fire and proved not to over two lists, because
 *   corrections §14.4 measured that a shape built from French morphology reads
 *   the English half of a card as French.
 * A NEGATION STRING THAT IS NOT a2.19's. The line is quoted through a2.05 and
 *   a2.21 to here and it is asserted as a LITERAL, because a2.21 §8 found that
 *   a quoted reframe compared against its own constant renames both sides.
 * A HEADWORD, AUTHORED. Corrections §2: this build authors sentences only, and
 *   every infinitive on a screen is an imported id.
 * A ROW IN THE `routines` THEME. a1.25 owns that theme and this lesson adds
 *   nothing to it; every routine word is carried, not written.
 * A GENDERED ROW, authored or imported. a2.04 ledger §0: it joins a1.03's
 *   measured ending population the moment the merge carries it.
 * A ROW INSIDE a2.21's BLOCK or a2.23's RESERVATION, and a row inside this
 *   build's block that this build does not own.
 * AN EXPLANATION OF THE OBJECT-PRONOUN SYSTEM on a production surface. a2.06
 *   and a2.24 own it and the forms overlap almost completely.
 * THE RECIPROCAL ON ANY PRODUCTION SURFACE, or named more than once. The
 *   decision is one receptive card and this is the guard that makes it true
 *   rather than stated.
 * A PARADIGM CELL MISSING FROM THE SIX-FORM SECTION, form by form, and a
 *   contrast pair whose two halves are not in one section.
 * AN EAR QUESTION offering two options that are one sound apart, walked over
 *   HOMOPHONE_GROUPS.
 * A DICTÉE TARGET that `dicteeMode` puts in WORD mode, or that carries no
 *   dictation drill.
 * GRAMMAR JARGON on a learner surface, walked over `sections + sheets + terms +
 *   intro + overview + acts + drills + AUDIO`, in both `prose()` and
 *   `display()`, with every entry checked in its -s plural.
 * A TECHNICAL TERM OUTNUMBERING ITS PLAIN PHRASE. a2.17 §5: the house prefers
 *   the plain phrase rather than banning the technical one.
 * A STACKED trapDrill, a trapDrill carrying a `size`, or an audio step whose
 *   recording does not contain the cards' own lines.
 * A cardDeck HINT over 60 characters, and EXACTLY TWO consecutive dots anywhere
 *   on a learner surface. Both were found on a Pixel 6 by a2.20.
 * A SCENE BUBBLE whose `fr` contains « ! ». a2.05 §11.2, found on a Pixel 6.
 */
import './env';
import { Pool } from 'pg';
import {
  canonicalJson, formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { fold, matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  A125_HANDOFF, A201_REFRAME, A209_CREDIT, A209_REFRAME, A221_BLOCK,
  A223_BLOCK, AUDIBLE_CONTRAST, AUTHORED_IDS, AUTHORED_ITEMS,
  COMPOUND_CLUSTERS, COMPOUND_MUST_FIRE, COMPOUND_MUST_NOT_FIRE,
  DICTATION_IDS, DICTEE_MAX_LETTERS, DOUBLE_STOP, EXPECTED_ACTS,
  EXPECTED_AUTHORED, EXPECTED_IMPORTED, EXPECTED_QUESTIONS, EXPECTED_SECTIONS,
  FALSE_POSITIVES, HINT_MAX, HOMOPHONE_GROUPS, ID_BLOCK, IMPORTED,
  IMPORTED_IDS, JARGON, LESSON_ID, NEGATION_EXTENSION, NEGATION_RULE,
  OBJECT_TERMS, OWNS_SECTIONS, PARADIGM_IDS, PARADIGM_SECTIONS, PARTICIPLES,
  PLAIN_OVER_TECHNICAL, PRESENT_NO_AGREEMENT, RECIPROCAL_ID,
  READ_NOT_IMPORTED, REFRAME, REFRAME_COUNT, ROUTINE_IDS, ROW_COUNT_BEFORE,
  STEM_IDS, THEME, THEME_DEFECT, UNIT, fr, isA221, isMine, respellOf,
} from './data/pronominaux-corpus.ts';
import { CHIP_ROW_BUDGET, PRONOMINAUX_TERMS, chipRowWidth } from './data/pronominaux-terms.ts';
import { IMPORTED_ITEMS, imported } from './data/pronominaux-imported.ts';
import { MEASURED_ROWS } from './data/pronominaux-rows.gen.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  CONTRAST_SECTION_ID, DICTATION_SECTION_ID, LATER_SECTION_ID,
  LESSON as PRON_LESSON, LISTEN_SECTION_ID, NEGATIVE_SECTION_ID,
  NOMEANING_SECTION_ID, OWNS_SECTION_IDS, PARADIGM_SECTION_IDS,
  PERSONS_SECTION_ID, PRON_ACTS, PRON_DICTEE_IDS, PRON_DRILLS,
  PRON_ITEM_IDS, PRON_SCENE_BEATS, PRON_SHEETS, PRON_SPEAK_IDS,
  QUIZ_SECTION_ID, SCENE_SECTION_ID, SPEAK_SECTION_ID, TALK_SECTION_ID,
  VOWEL_SECTION_ID, WRAP_SECTION_ID,
} from './data/pronominaux-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const LESSON: Lesson = PRON_LESSON;
const UNIT_ID = UNIT.id;

/* ─── String walks ─────────────────────────────────────────────────────────*/

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** Notation. A word-level guard must not read a respelling. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces.
 *
 *  `cards` IS NOT ON THIS LIST AND MUST NOT BE. It was, in the first draft of
 *  this file, and the reframe count went from eight to six: on a `cardDeck`, a
 *  `flashcards` section, a `reviewDeck` and a `trapDrill`, `cards` holds the
 *  entire learner surface. Dropping it would have hidden every card body from
 *  the jargon walk, the compound-tense guard and the house-copy rules at once.
 *  Found by the reframe count refusing to match its own constant, which is what
 *  invariants §5 says an explicit constant is for. */
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
 *  dropped from the LEFT side, so a shape can see `s'est`, `m'habille` and
 *  `qu'il`. It stays on the right, so `l'` does not match `l`. */
const bounded = (needle: string): RegExp =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string): boolean => bounded(needle).test(hay);

/** EVERY LEARNER SURFACE. Corrections §9: the walk must read `intro` and
 *  `overview`, which are drawn on the lesson overview card AND the lesson cover;
 *  a2.05 §3 added `audio`, whose `desc` is authored prose that ships in the
 *  body. `grammarAssumed` and `grammarIntroduced` are DELIBERATELY EXCLUDED:
 *  invariants §8 says those are addressed to the curriculum and may use the
 *  precise words. */
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

/** NOT deduped, and COUNTING MUST USE THIS ONE. The reviewDeck card back is the
 *  reframe and nothing else, and so is `Lesson.reframe`; a Set collapses the two
 *  into one and the count came out at seven for eight authored occurrences.
 *  Found by REFRAME_COUNT refusing to match. A count taken over distinct strings
 *  silently under-reports every line short enough to be authored twice. */
const ALL_SURFACE_RAW = [...DISPLAY_SURFACE];

/** The surfaces that ask the learner to PRODUCE. Scoped guards use this. */
const PRODUCTION_SECTIONS = new Set([
  QUIZ_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, TALK_SECTION_ID,
  WRAP_SECTION_ID,
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
  if ((it as { gender?: string }).gender) die(`${it.id} carries gender and would join a1.03's ending population.`);
  /* CORRECTIONS §2: NOT ONE HEADWORD. A row whose `fr` has no whitespace is a
   * bare word whatever its `kind` says (a2.05 §4). */
  if (it.kind !== 'sentence') die(`${it.id} is kind "${it.kind}". This build authors sentences only; every infinitive is imported.`);
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

/* THE ENDING POPULATION, through the REAL function. Invariants §5: a guard that
 * reimplements the thing it guards is free to drift from it. */
{
  const before = endingPopulation([]).length;
  const after = endingPopulation([...AUTHORED_ITEMS, ...IMPORTED_ITEMS]).length;
  if (after !== before) {
    die(`this build moves a1.03's ending population by ${after - before} rows. Every row it authors or carries must be ungendered or multi-word.`);
  }
}

/* ═══ 2. THE IMPORTED ROWS ════════════════════════════════════════════════*/

if (IMPORTED.length !== EXPECTED_IMPORTED) die(`IMPORTED holds ${IMPORTED.length} rows and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
for (const im of IMPORTED) {
  const row = imported(im.id);
  if (row.fr !== im.fr) die(`${im.id} says fr="${row.fr}" and the corpus file claims "${im.fr}".`);
  if ((row as { gender?: string }).gender) die(`${im.id} carries gender and the merge would carry it into a1.03's population.`);
  if (isMine(row.id)) die(`${im.id} is inside this build's block and is being imported rather than authored.`);
}
for (const fp of FALSE_POSITIVES) {
  if (IMPORTED_IDS.includes(fp.id)) die(`${fp.id} is a measured false positive and it is imported. The decision was not to carry these.`);
  if (!READ_NOT_IMPORTED.some((r) => r.id === fp.id)) die(`${fp.id} is a false positive with no READ_NOT_IMPORTED entry, so nothing records why it is missing.`);
}
/* EVERY ROUTINE WORD ON A SCREEN IS AN IMPORTED ID, ASSERTED BY ID. */
if (!ROUTINE_IDS.length) die('ROUTINE_IDS is empty, so the by-id assertion the brief asks for guards nothing.');
for (const id of ROUTINE_IDS) {
  if (!IMPORTED_IDS.includes(id)) die(`${id} is claimed as a routine import and is not in IMPORTED.`);
  if (!PRON_ITEM_IDS.includes(id) && !(LESSON.itemIds ?? []).includes(id)) {
    die(`${id} is a routine import the lesson never puts on a screen.`);
  }
}
/* AND NO ROUTINE VOCABULARY SECTION EXISTS. */
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
if (PRON_ACTS.length !== EXPECTED_ACTS) die(`${PRON_ACTS.length} acts and EXPECTED_ACTS is ${EXPECTED_ACTS}.`);
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
}

/* ═══ 4. THE THREE REQUIRED LAYOUTS ═══════════════════════════════════════*/

/* LAYOUT 1: the six forms in ONE section, with the pronoun in its own column,
 * asserted FORM BY FORM. a2.21 §4.1: read the cells, never `strings(section)`,
 * because a `why` mentioning a form satisfies an assertion that the form is on a
 * card. */
{
  const s = section(PERSONS_SECTION_ID) as unknown as { type: string; cols: string[]; rows: { cells: string[] }[] };
  if (s.type !== 'tapTable') die(`${PERSONS_SECTION_ID} is a ${s.type}. A table at layer core is a table-in-core density failure, so the six forms are a three-column tapTable and the table lives in the sheet.`);
  if (s.cols.length !== 3) die(`${PERSONS_SECTION_ID} has ${s.cols.length} columns and the pronoun needs a column of its own.`);
  if (s.rows.length !== 6) die(`${PERSONS_SECTION_ID} has ${s.rows.length} rows and the paradigm is six. Six is also the Pixel 6 ceiling.`);
  const clitics = ['me', 'te', 'se', 'nous', 'vous', 'se'];
  const subjects = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  for (const [i, row] of s.rows.entries()) {
    if (row.cells.length !== 3) die(`${PERSONS_SECTION_ID} row ${i} has ${row.cells.length} cells and there are 3 columns.`);
    if (row.cells[0] !== subjects[i]) die(`${PERSONS_SECTION_ID} row ${i} column 0 is "${row.cells[0]}" and should be "${subjects[i]}".`);
    /* THE PRONOUN IS IN ITS OWN CELL, not spliced into the verb. */
    if (row.cells[1] !== clitics[i]) die(`${PERSONS_SECTION_ID} row ${i} column 1 is "${row.cells[1]}" and the pronoun for ${subjects[i]} is "${clitics[i]}".`);
    if (hasPhrase(row.cells[2]!, clitics[i]!)) die(`${PERSONS_SECTION_ID} row ${i} has the pronoun inside the verb column, so the two are not visually separate.`);
  }
  /* AND EVERY PARADIGM ROW IS REACHABLE FROM IT. */
  const says = s.rows.map((r) => (r as { say?: string }).say ?? '');
  for (const id of PARADIGM_IDS) {
    if (!says.includes(fr(id))) die(`${PERSONS_SECTION_ID} does not carry « ${fr(id)} » as a row's own audio line.`);
  }
}

/* LAYOUT 2: the meaning contrast, both halves in ONE section. */
{
  const s = section(CONTRAST_SECTION_ID) as unknown as { examples: { fr: string }[] };
  const frs = s.examples.map((e) => e.fr);
  for (const id of [AUDIBLE_CONTRAST.with, AUDIBLE_CONTRAST.without]) {
    if (!frs.includes(fr(id))) die(`${CONTRAST_SECTION_ID} does not carry « ${fr(id)} » as an example. The meaning contrast needs both halves in one section.`);
  }
}

/* LAYOUT 3: the affirmative and the negative adjacent, ne visibly in front.
 *
 * A card quoting two corpus rows strips their final stops, because a2.20 found
 * « ... peur.. » on a Pixel 6 when it did not. So the comparison strips too,
 * rather than the content being bent to suit the guard. */
{
  const cards = (section(NEGATIVE_SECTION_ID) as unknown as { cards: { fr: string }[] }).cards;
  const stop = (s: string) => s.replace(/\.$/u, '');
  const aff = stop(fr('fr.a2.verbes.721'));
  const neg = stop(fr('fr.a2.verbes.728'));
  const first = cards[0]!.fr;
  if (!first.includes(aff) || !first.includes(neg)) {
    die(`${NEGATIVE_SECTION_ID}'s first card does not put « ${aff} » beside « ${neg} ». The brief requires the pair adjacent, with the ne visibly in front of the cluster.`);
  }
  /* AND THE ne IS IN FRONT OF THE PRONOUN, not between it and the verb. */
  if (!/\bne me lave\b/u.test(neg)) die(`the negative row is « ${neg} » and the whole trap is that ne precedes the pronoun.`);
  if (/\bme ne\b/u.test(neg)) die(`the negative row puts ne after the pronoun, which is the error.`);
}

/* ═══ 5. THE NEGATION CONTRACT ════════════════════════════════════════════*/

/* a2.21 §4.2 and §8: a cross-lesson quote must be a LITERAL on the guard side,
 * because a constant compared against itself renames both sides. */
{
  const LITERAL = 'Wrap the verb that changed, not the one carrying the meaning.';
  if (NEGATION_RULE !== LITERAL) die(`NEGATION_RULE is « ${NEGATION_RULE} » and a2.19 shipped « ${LITERAL} ».`);
  const quoted = ALL_SURFACE_RAW.filter((s) => s.includes(LITERAL)).length;
  if (quoted < 3) die(`a2.19's negation line is quoted ${quoted} times and this lesson is the fourth to carry it; three is the floor.`);
  const ext = ALL_SURFACE_RAW.filter((s) => s.includes(NEGATION_EXTENSION)).length;
  if (ext < 3) die(`the negation extension is authored ${ext} times. It is the sentence that stops the inherited rule producing the trap, so it belongs on the card, the trap and the sheet.`);
  /* AND THE ERROR THE INHERITED RULE PRODUCES IS SHOWN AS AN ERROR. */
  const TRAP = 'Je me ne lave pas.';
  const onTrap = display(section(WRAP_SECTION_ID)).some((s) => s.includes(TRAP));
  if (!onTrap) die(`the trap section does not show « ${TRAP} », which is what a2.19's line produces when it is read at its word.`);
  /* IT MUST NOT BE ANYWHERE THE LEARNER COULD TAKE IT FOR CORRECT. */
  for (const s of LESSON.sections) {
    if (s.id === WRAP_SECTION_ID || s.id === 'ler') continue;
    if (s.id === QUIZ_SECTION_ID || s.id === 'ss') continue;
    if (s.id === 's16-errors') continue;
    if (display(s).some((t) => t.includes(TRAP))) die(`${s.id} carries « ${TRAP} » outside the trap, the errors card and the exam.`);
  }
}

/* ═══ 6. NO COMPOUND TENSE, ANYWHERE ══════════════════════════════════════*/

/* THE SHAPE: a reflexive pronoun plus a form of être, or a past participle of a
 * verb this lesson names. Corrections §14.4: guard the THING rather than the
 * letters, or the English half of a card reads as French. */
const CLITIC = "(me|m'|te|t'|se|s'|nous|vous)";
const ETRE = '(suis|es|est|sommes|êtes|sont)';
const COMPOUND_RE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(je|tu|il|elle|on|nous|vous|ils|elles)\\s+${CLITIC}\\s*${ETRE}(?![\\p{L}\\p{N}'’-])`,
  'iu',
);
const hasCompound = (s: string): boolean => {
  if (COMPOUND_RE.test(s)) return true;
  for (const c of COMPOUND_CLUSTERS) if (hasPhrase(s, c)) return true;
  for (const p of PARTICIPLES) if (hasPhrase(s, p)) return true;
  return false;
};
/* PROVED TO FIRE, AND PROVED NOT TO. */
for (const s of COMPOUND_MUST_FIRE) if (!hasCompound(s)) die(`the compound guard does not fire on « ${s} », so it guards nothing.`);
for (const s of COMPOUND_MUST_NOT_FIRE) if (hasCompound(s)) die(`the compound guard fires on « ${s} », which is legitimate content. Corrections §14.4.`);
/* AND IT IS CLEAN, ON EVERY SURFACE RATHER THAN ONLY THE PRODUCTION ONES. */
for (const s of ALL_SURFACE) {
  if (hasCompound(s)) die(`a compound tense reaches a learner surface: « ${s.slice(0, 120)} ». a2.23 is seq 20 and this is its whole lesson.`);
}
for (const it of AUTHORED_ITEMS) if (hasCompound(it.fr)) die(`${it.id} « ${it.fr} » is a compound tense.`);
for (const im of IMPORTED) if (hasCompound(im.fr)) die(`${im.id} « ${im.fr} » is a compound tense and is being imported.`);
/* AND THE DEFERRAL IS STATED, so a learner meeting one first does not conclude
 * they were taught a simplification. a2.05's precedent. */
if (!ALL_SURFACE.some((s) => s.includes(PRESENT_NO_AGREEMENT))) {
  die('the present-tense framing a2.23 inherits is on no screen.');
}

/* ═══ 7. THE OBJECT PRONOUNS ARE NOT EXPLAINED ════════════════════════════*/

{
  const prod = productionSurface();
  for (const t of OBJECT_TERMS) {
    for (const s of prod) {
      if (hasPhrase(s, t)) die(`a production surface explains the object-pronoun system: « ${t} » in « ${s.slice(0, 100)} ». a2.06 and a2.24 own it.`);
    }
  }
  /* AND IT IS NAMED AS DEFERRED SOMEWHERE, so the overlap is flagged. */
  if (!ALL_SURFACE.some((s) => namesUnitLabel(s, 'a2.06')) || !ALL_SURFACE.some((s) => namesUnitLabel(s, 'a2.24'))) {
    die('neither a2.06 nor a2.24 is named, so the overlap the brief asks to be flagged reaches no screen.');
  }
}

/* ═══ 8. THE RECIPROCAL DECISION, ASSERTED BOTH WAYS ══════════════════════*/

{
  const line = fr(RECIPROCAL_ID);
  const carrying = LESSON.sections.filter((s) => display(s).some((t) => t.includes(line)));
  if (carrying.length !== 1) {
    die(`the reciprocal line appears in ${carrying.length} sections (${carrying.map((s) => s.id).join(', ')}). The decision is ONE receptive card.`);
  }
  if (carrying[0]!.id !== LATER_SECTION_ID) die(`the reciprocal line is on ${carrying[0]!.id} and the decision puts it on ${LATER_SECTION_ID}.`);
  /* AND IT REACHES NO PRODUCTION SURFACE. */
  for (const s of productionSurface()) {
    if (s.includes(line)) die(`the reciprocal reaches a production surface: « ${s.slice(0, 100)} ».`);
  }
  const row = AUTHORED_ITEMS.find((i) => i.id === RECIPROCAL_ID)!;
  for (const d of ['flashcard', 'voiceflash', 'dictation'] as const) {
    if (row.drills.includes(d)) die(`${RECIPROCAL_ID} carries the ${d} drill. The decision is receptive only.`);
  }
  if (PRON_DICTEE_IDS.includes(RECIPROCAL_ID) || PRON_SPEAK_IDS.includes(RECIPROCAL_ID)) {
    die(`${RECIPROCAL_ID} is a dictée or speak target and the decision is receptive only.`);
  }
}

/* ═══ 9. THE NOT-REFLEXIVE GROUP AND THE a2.09 CREDIT ═════════════════════*/

{
  const s = display(section(NOMEANING_SECTION_ID)).join('\n');
  for (const v of ["s'appeler", 'se dépêcher', 'se souvenir']) {
    if (!s.includes(v)) die(`${NOMEANING_SECTION_ID} does not name « ${v} ». The brief asks for the group, with s'appeler at minimum.`);
  }
  /* THE OPENER: the learner has been saying one since sons.01. */
  if (!ALL_SURFACE.some((t) => namesUnitLabel(t, 'sons.01'))) {
    die('sons.01 is named on no screen, so the opener the brief asks for is not credited to the lesson that shipped it.');
  }
}
{
  const s = display(section(VOWEL_SECTION_ID)).join('\n');
  if (!s.includes(A209_CREDIT)) die(`${VOWEL_SECTION_ID} does not carry the a2.09 stem-change credit.`);
  /* LITERALS, NOT THE CONSTANTS. a2.18 §6 and a2.21 §8: a guard comparing a
   * quoted line against the constant the content is built from renames both
   * sides when the constant moves. Found here by mutation for the fifth time in
   * this band: paraphrasing A201_REFRAME walked through every real guard and was
   * caught only by the version check. */
  if (A209_REFRAME !== 'The spelling changes so the sound does not.') {
    die(`A209_REFRAME is « ${A209_REFRAME} » and a2.09 shipped « The spelling changes so the sound does not. »`);
  }
  if (A201_REFRAME !== 'Four of the six forms sound the same, so the pronoun carries the person.') {
    die(`A201_REFRAME is « ${A201_REFRAME} » and a2.01 shipped « Four of the six forms sound the same, so the pronoun carries the person. »`);
  }
  if (A125_HANDOFF !== 'What the small word does across every other person is a lesson of its own and it is a whole band from here.') {
    die(`A125_HANDOFF is « ${A125_HANDOFF} » and a1.25 shipped a different sentence on s11-se.`);
  }
  if (!ALL_SURFACE.some((t) => t.includes(A209_REFRAME))) die("a2.09's reframe is quoted nowhere, and it is the rule the vowel change belongs to.");
  if (!ALL_SURFACE.some((t) => namesUnitLabel(t, 'a2.09'))) die('a2.09 is named on no screen.');
  /* AND a1.25 IS CREDITED, because it owns the theme and shipped the hand-off. */
  if (!ALL_SURFACE.some((t) => t.includes(A125_HANDOFF))) die("a1.25's hand-off sentence is quoted nowhere.");
  if (!ALL_SURFACE.some((t) => t.includes(A201_REFRAME))) die("a2.01's reframe is quoted nowhere, and it is why four of the six cells are one sound.");
}

/* ═══ 10. THE EAR, THE DICTÉE AND THE FREE TEXT ═══════════════════════════*/

/** Every multi-word string a free-text question may legitimately accept: an
 *  authored row, plus the two sentences the scene teaches as the repair. */
const ANSWERABLE = new Set<string>([
  ...AUTHORED_ITEMS.map((i) => i.fr),
  'Je me lève à sept heures.',
]);

const QUESTIONS = quizQuestions(section(QUIZ_SECTION_ID) as Parameters<typeof quizQuestions>[0]);
if (QUESTIONS.length !== EXPECTED_QUESTIONS) die(`${QUESTIONS.length} questions and EXPECTED_QUESTIONS is ${EXPECTED_QUESTIONS}.`);
{
  const mcq = QUESTIONS.filter((q) => q.format === 'mcq').length;
  if (mcq > QUESTIONS.length / 2) die(`${mcq} of ${QUESTIONS.length} questions are mcq and at most half may be.`);
  for (const q of QUESTIONS) {
    if (!q.why) die(`a question has no why: ${q.q}`);
    if (!q.ref) die(`a question has no ref: ${q.q}`);
    if (!LESSON.sections.some((s) => s.id === q.ref)) die(`a question refs ${q.ref}, which is not a section.`);
    /* EVERY FREE-TEXT QUESTION ACCEPTS THE ANSWER IT DISPLAYS.
     *
     * FOUND BY MUTATION, AND THE WHOLE BAND CARRIES THIS HOLE. The guard every
     * lesson from a2.01 to a2.21 runs is
     *
     *     for (const a of q.accept) ok(matchesAccept(a, q.accept))
     *
     * which asks whether the accept list accepts ITSELF. It is a tautology: it
     * cannot fail for any value at all. Replacing an accept entry with a
     * different sentence walked through it and through the merge, and the batch
     * noticed only because the mutated lesson then tripped the version check.
     *
     * The check that has content is that a full-sentence answer is a sentence
     * THIS LESSON OWNS. `q.answer` is the canonical displayed answer where one
     * exists; where it does not, the accept list is the displayed answer and it
     * must name a real row. */
    if (q.accept) {
      for (const a of q.accept) {
        if (!matchesAccept(a, q.accept)) die(`« ${a} » is not accepted by its own accept list: ${q.q}`);
        if (/\s/u.test(a) && !ANSWERABLE.has(a)) {
          die(`« ${a} » is offered as a free-text answer and is not a sentence this lesson owns. `
            + 'Every multi-word accept entry must be an authored row or a form the lesson explicitly teaches.');
        }
      }
      const shown = (q as { answer?: string }).answer;
      if (shown && !matchesAccept(shown, q.accept)) die(`the displayed answer « ${shown} » is not accepted: ${q.q}`);
    }
    /* EVERY QUESTION HAS A SUBJECT, because the pronoun depends on it. */
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      const text = `${q.q} ${(q.accept ?? []).join(' ')}`;
      const hasSubject = /(?<![\p{L}\p{N}-])(je|j'|tu|il|elle|on|nous|vous|ils|elles|speaking to)(?![\p{L}\p{N}'’-])/iu.test(text);
      if (!hasSubject) die(`a produced question names no subject, and the pronoun depends on it: ${q.q}`);
    }
    /* NO EAR QUESTION MAY SEPARATE TWO OPTIONS THAT ARE ONE SOUND. */
    if (q.format === 'listenChoose' && q.opts) {
      for (const g of HOMOPHONE_GROUPS) {
        const hits = q.opts.filter((o) => g.includes(o));
        if (hits.length > 1) die(`an ear question offers « ${hits.join(' » and « ')} », which are one sound. Marking one right certifies a bug.`);
      }
    }
    if (q.opts && new Set(q.opts).size !== q.opts.length) die(`a question has a duplicate option: ${q.q}`);
  }
}
/* THE DICTÉE: every target in LETTERS mode, and carrying the dictation drill. */
for (const id of PRON_DICTEE_IDS) {
  if (!AUTHORED_IDS.includes(id)) die(`the dictée targets ${id}, which this build does not author.`);
  const row = AUTHORED_ITEMS.find((i) => i.id === id)!;
  if (dicteeMode(row.fr) !== 'letters') {
    die(`the dictée targets « ${row.fr} », which dicteeMode puts in WORD mode. Word mode hands every real word over pre-spelled, and this lesson is about producing a word.`);
  }
  if (row.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length > DICTEE_MAX_LETTERS) die(`« ${row.fr} » is over ${DICTEE_MAX_LETTERS} letters.`);
  if (!row.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill.`);
}
for (const id of DICTATION_IDS) {
  if (!PRON_DICTEE_IDS.includes(id)) die(`${id} carries the dictation drill and the dictée does not target it.`);
}
/* THE SPEAK SURFACE needs voiceflash on every item it names. */
for (const id of PRON_SPEAK_IDS) {
  const row = AUTHORED_ITEMS.find((i) => i.id === id) ?? imported(id);
  if (!row.drills.includes('voiceflash')) die(`${id} is on the speak surface and carries no voiceflash drill.`);
}

/* ═══ 11. THE HOUSE COPY, IN BOTH WALKS ══════════════════════════════════*/

for (const walk of [PROSE_SURFACE, DISPLAY_SURFACE]) {
  for (const s of walk) {
    if (/[—–]/u.test(s)) die(`an em dash reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (/\bhonest/i.test(s)) die(`a banned word reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (DOUBLE_STOP.test(s)) die(`two consecutive dots reach a learner surface: « ${s.slice(0, 90)} ». a2.20 found this on a Pixel 6.`);
    /* JARGON, AND ITS -s PLURAL. a2.15 §3: hasPhrase is boundary-exact. */
    for (const j of JARGON) {
      if (hasPhrase(s, j)) die(`grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 90)} ».`);
      if (hasPhrase(s, `${j}s`)) die(`grammar jargon on a learner surface: « ${j}s » in « ${s.slice(0, 90)} ».`);
    }
  }
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
  for (const c of chips) if (!PRONOMINAUX_TERMS[c]) die(`${s.id} names the term "${c}", which is not defined.`);
  const labels = chips.map((c) => PRONOMINAUX_TERMS[c]!.term);
  const w = chipRowWidth(labels);
  if (w > CHIP_ROW_BUDGET) die(`${s.id}'s chip row is ${w} characters and the budget is ${CHIP_ROW_BUDGET}.`);
}
/* EVERY DEFINED TERM IS SURFACED BY SOME SECTION. */
{
  const used = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
  for (const k of Object.keys(PRONOMINAUX_TERMS)) if (!used.has(k)) die(`the term "${k}" is defined and surfaced by no section.`);
}
/* A cardDeck HINT over the budget ellipsises on a Pixel 6. */
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
  if (!(t.steps ?? []).some((s) => s.kind === 'drill' && s.gate === true)) die('the trapDrill step is not gated.');
  /* THE AUDIO STEP PLAYS EACH CARD'S `fr`, so the recording must contain them. */
  const rec = (LESSON.audio?.recorded ?? []).find((r) => r.id === t.audio!.recordingId);
  if (!rec) die(`the trapDrill names recording ${t.audio!.recordingId}, which the lesson does not declare.`);
  for (const c of t.cards) {
    if (!(rec!.clipIds ?? []).includes(c.fr)) die(`the trapDrill's audio recording does not contain « ${c.fr} », which its own card plays.`);
  }
}

/* ═══ 12b. THE ROLE PLAY ═════════════════════════════════════════════════
 *
 * a2.21 §4.4: the only thing that checks these is the seed-wide
 * `scenario.logic.test.ts`, which runs AFTER the merge, which is exactly how
 * a2.03 shipped three one-alt turns with every gate green. Found missing HERE by
 * mutation: the merge caught the one-alt turn and this layer did not. */
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

for (const b of PRON_SCENE_BEATS) {
  if (b.kind === 'bubble') {
    /* a2.05 §11.2, found on a Pixel 6: a spaced exclamation mark makes the
     * French line lose its last word while the gloss still translates it. */
    if (b.fr.includes('!')) die(`a scene bubble contains an exclamation mark: « ${b.fr} ». It clips on a Pixel 6.`);
  }
}

/* ═══ 14. TRANCHES AND REACHABILITY ══════════════════════════════════════*/

{
  const known = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
  const tranche = (LESSON.deckTranche ?? []).flat();
  if (new Set(tranche).size !== tranche.length) die('an item is released by two tranches.');
  for (const id of known) if (!tranche.includes(id)) die(`${id} is authored or imported and released by no tranche.`);
  for (const id of tranche) if (!known.has(id)) die(`a tranche releases ${id}, which this build neither authors nor imports.`);
  for (const id of PRON_ITEM_IDS) if (!known.has(id)) die(`a section names ${id}, which this build neither authors nor imports.`);
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
  for (const d of PRON_DRILLS) {
    if (d.id.startsWith('retest-')) continue;
    if (!fired.has(d.id)) die(`${d.id} is the first resolving target of no round, so it is dead content.`);
  }
}
/* THE SHEET RESOLVES, AND IT IS REACHABLE. */
{
  const declared = new Set(PRON_SHEETS.map((s) => s.id));
  const named = new Set(LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  for (const id of named) if (!declared.has(id)) die(`a section names sheet ${id}, which the lesson does not declare.`);
  /* ReferenceSheet.tsx draws teach, letterGrid and table and nothing else. */
  for (const sh of PRON_SHEETS) {
    for (const sec of sh.sections ?? []) {
      if (!['teach', 'letterGrid', 'table'].includes(sec.type)) {
        die(`sheet ${sh.id} holds a ${sec.type} block, and ReferenceSheet.tsx draws only teach, letterGrid and table.`);
      }
    }
  }
}

/* ═══ APPLY ═════════════════════════════════════════════════════════════*/

async function main() {
  console.log(`\n  a2.22 « ${UNIT.sub} », seq ${UNIT.seq}\n`);
  console.log(`  guards        all passed over ${ALL_SURFACE.length} learner strings`);
  console.log(`  corpus        ${AUTHORED_ITEMS.length} authored into ${THEME}, ${IMPORTED.length} imported, 0 headwords authored`);
  console.log(`  lesson        ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions`);
  console.log(`  the Owns      ${OWNS_SECTIONS} sections against the paradigm's ${PARADIGM_SECTIONS}`);
  console.log(`  themes        routine ${THEME_DEFECT.declaredRowsPublished} (the unit declares it) · routines ${MEASURED_ROWS.themeRoutines}`);

  const c = await pool.connect();

  const beforeQ = await c.query<{ n: string }>("select count(*)::text n from content_items where id like 'fr.a2.verbes.%'");
  const before = Number(beforeQ.rows[0]!.n);
  const blockQ = await c.query<{ id: string }>("select id from content_items where id like 'fr.a2.verbes.%'");
  const allIds = blockQ.rows.map((r) => r.id);
  const inA221 = allIds.filter(isA221);
  if (inA221.length !== 46) { c.release(); await pool.end(); die(`a2.21's block holds ${inA221.length} rows and that lesson applied 46.`); }
  const stray = allIds.filter((id) => isMine(id) && !AUTHORED_IDS.includes(id));
  if (stray.length) { c.release(); await pool.end(); die(`rows inside this build's block that it does not own: ${stray.join(', ')}.`); }

  const unitRow = await c.query<{ body: { id: string; seq: number; title: string; sub: string; canDo: string; lessonIds?: string[] } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID]);
  const unit = unitRow.rows[0]?.body;
  if (!unit) { c.release(); await pool.end(); die(`${UNIT_ID} is not in content_units.`); }
  for (const k of ['seq', 'title', 'sub', 'canDo'] as const) {
    if (String(unit![k]) !== String(UNIT[k])) {
      c.release(); await pool.end();
      die(`the unit's ${k} is « ${String(unit![k])} » and the corpus file claims « ${String(UNIT[k])} ». Corrections §1: take the identity block from the database.`);
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
    + '      ZERO headwords, ZERO gendered rows, ZERO rows in the routines theme.\n'
    + `    ${IMPORTED.length} rows imported by id, ${READ_NOT_IMPORTED.length} read and refused, 0 repaired\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions, ${(LESSON.itemIds ?? []).length} items\n`
    + `    the Owns ${OWNS_SECTIONS} sections against the paradigm's ${PARADIGM_SECTIONS}\n`
    + `    fr.a2.verbes row count: ${before} before, ${after} after (max ${afterQ.rows[0]!.mx})\n`
    + `    a2.21's block still holds ${inA221.length} rows\n`
    + `    ROW_COUNT_BEFORE recorded ${ROW_COUNT_BEFORE}, measured ${before}\n\n`
    + '  NEXT: pnpm tsx scripts/merge-pronominaux-into-seed.ts\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
