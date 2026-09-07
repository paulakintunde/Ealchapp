/* Applies a2.09.l1 "Les verbes en -ER : exceptions" to Postgres: 26 authored
 * rows, 3 respelling repairs, and the lesson (a FIRST build, v1 — the unit dump
 * says `"lessons": []` and that was probed rather than assumed). Validates
 * EVERYTHING before it opens a transaction.
 *
 *     pnpm tsx scripts/author-verbes-er-exceptions-batch.ts --dry-run
 *     pnpm tsx scripts/author-verbes-er-exceptions-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed. Publishing is BLOCKED today anyway
 * and is not part of a lesson build.
 *
 * ── THE THINGS TO READ BEFORE RUNNING THIS ────────────────────────────────
 *
 * 1. DO NOT RUN `pnpm content:verbes`. scripts/author-verbes-batch.ts declares
 *    `fr.a2.verbes.016 = 'les devoirs'` and `fr.a2.verbes.019 = 'le vélo'` while
 *    Postgres holds `rentrer` and `demander` at those ids, and it upserts by id.
 *    Ledger §0.
 *
 * 2. THIS LESSON AUTHORS NO INFINITIVE. All seventeen already exist and are
 *    imported by id. The manifest in data/verbes-er-exceptions-imported.ts is a
 *    recorded read and is verified field by field below; a stale manifest puts
 *    the lesson ahead of rows nobody has looked at.
 *
 * 3. a1.03 DOES NOT MOVE. Every authored row is a `sentence` with no `gender`
 *    and no bare single-word `fr`, so none can join a1.03's measured ending
 *    population. Proved through the REAL `endingPopulation`.
 *
 * 4. THE APP CANNOT SCORE AN ACCENT OR A CEDILLA. `fold()` and `normalizeFr()`
 *    both strip combining marks, which is why this lesson's quiz leans on `mcq`
 *    and why three of its nine dictée targets are documented as unscored. Both
 *    claims are run through the real functions below rather than written in a
 *    comment that could go stale.
 */
import './env';
import { describeTarget } from './env';
import {
  canonicalJson,
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import { Pool } from 'pg';
import {
  ACCENT_TAKERS, ALLER_FORMS, AUTHORED_IDS, CHANGED_FORMS, DICTATION_IDS, DICTEE_NEAR_MISS,
  DOUBLERS, DRILL_ADDITIONS, MECHANISMS, MINIMAL_PAIRS, OWNED_ID_RANGE, PATTERNS,
  RESPELL_REPAIRS, SOFT_STEM_SOUND, SPLIT_PAIR, THEME, THE_SEVENTEEN, VERBES_ER_EXC,
  YER_FORMS, YER_INFINITIVES, toItem,
} from './data/verbes-er-exceptions-corpus.ts';
import { IMPORTED_ROWS, IMPORTED_VERBS } from './data/verbes-er-exceptions-imported.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  A201_BACKREF, GRID_SECTION_ID, NOUS_ON, REFRAME, SPLIT_COLUMNS, SPLIT_SECTION_ID,
  TWO_MECHANISMS, VERBES_ER_EXC_LESSON, VERBES_ER_EXC_DICTATION_IDS, VERBES_ER_EXC_SPEAK_IDS,
} from './data/verbes-er-exceptions-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = VERBES_ER_EXC_LESSON;
const UNIT_ID = 'a2.09';

/** Asserted against explicit constants, never figures derived from the lesson. A
 *  derived count compares the content to itself and passes on any rewording. */
/** TEN over the whole lesson object: NINE learner-facing appearances across nine
 *  different sections, plus the `reframe` field itself, which `strings()` walks
 *  like any other. The density validator's own rule counts SECTIONS and wants at
 *  least three; the doctrine says the good lessons use six to eight. */
const REFRAME_APPEARANCES = 10;
const REFRAME_SECTIONS = 9;
const EXPECTED_SECTIONS = 24;
const EXPECTED_ACTS = 6;
const EXPECTED_TRIGGERS = 5;
const EXPECTED_ROUNDS = 5;
const EXPECTED_QUESTIONS = 30;
const EXPECTED_AUTHORED = 26;
const EXPECTED_IMPORTED_VERBS = 17;
const EXPECTED_RESPELL_REPAIRS = 3;
const EXPECTED_DICTATION = 9;
const EXPECTED_SHEETS = 2;
const EXPECTED_PATTERNS = 4;
const EXPECTED_MECHANISMS = 2;
/** The five that are learnt rather than derived, and the only memorised list in
 *  the lesson. If this grows, the claim on every screen that says "five" is
 *  wrong, so it is a constant rather than a count. */
const EXPECTED_MEMORISED = 5;

/** Copied BYTE FOR BYTE from the probe's unit dump on 2026-08-11, not from the
 *  brief. The brief has `title` and `sub` SWAPPED — exactly as a2.01's did — and
 *  its `sub` ("-ger, -cer, -eler, -eter and the é_er patterns") is not in the
 *  database at all. */
const UNIT_TITLE = '-ER Verbs: The Exceptions';
const UNIT_SUB = 'Les verbes en -ER : exceptions';
const UNIT_CANDO = 'Can spell the stem changes in manger, commencer, appeler and préférer without guessing';

/** Grammar vocabulary that must not reach a learner surface. Deliberately short:
 *  a checker that fires on ordinary teaching prose gets silenced wholesale.
 *  `infinitive` is NOT here, because the chip a learner sees reads "the naming
 *  form"; nor is `stem`, which this band uses as ordinary English. */
const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'third person'];

function die(msg: string): never {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}

/** Every string anywhere inside a value, so a guard reads what a learner could
 *  possibly see rather than the fields somebody remembered to check. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** The same walk with the TRANSCRIPTION fields left out.
 *
 *  A word-level guard must not read IPA. IPA separates syllables with a full
 *  stop, so `/nu vwa.ja.ʒɔ̃/` reads as a standalone word `ja`, and a2.01's aller
 *  check fired on `.va.` while its lesson was correct. A guard that fires on
 *  legitimate content is a guard the next author deletes. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Accent-aware word-boundary search. Never build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. */
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

const AUTHORED_ITEMS: Item[] = VERBES_ER_EXC.map(toItem);

console.log(`\n  a2.09.l1 "Les verbes en -ER : exceptions" → ${describeTarget()}${DRY_RUN ? '  (DRY RUN)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED_ITEMS.length}`);
if (IMPORTED_VERBS.length !== EXPECTED_IMPORTED_VERBS) die(`expected ${EXPECTED_IMPORTED_VERBS} imported verbs, found ${IMPORTED_VERBS.length}`);
if (THE_SEVENTEEN.length !== EXPECTED_IMPORTED_VERBS) die(`THE_SEVENTEEN holds ${THE_SEVENTEEN.length} verbs, expected ${EXPECTED_IMPORTED_VERBS}`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`expected ${EXPECTED_RESPELL_REPAIRS} respelling repairs, found ${RESPELL_REPAIRS.length}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts, found ${(LESSON.acts ?? []).length}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`expected ${EXPECTED_SHEETS} reference sheets, found ${(LESSON.sheets ?? []).length}`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`expected ${EXPECTED_DICTATION} dictée targets, found ${DICTATION_IDS.length}`);
if (VERBES_ER_EXC_DICTATION_IDS.join() !== DICTATION_IDS.join()) die('the dictée section and the corpus disagree about the targets');
if (PATTERNS.length !== EXPECTED_PATTERNS) die(`expected ${EXPECTED_PATTERNS} patterns, found ${PATTERNS.length}`);
if (MECHANISMS.length !== EXPECTED_MECHANISMS) die(`"${TWO_MECHANISMS}" but PATTERNS declares ${MECHANISMS.length} mechanisms: ${MECHANISMS.join(', ')}`);
if (DOUBLERS.length + ACCENT_TAKERS.length !== EXPECTED_MEMORISED) {
  die(`the memorised list is ${DOUBLERS.length + ACCENT_TAKERS.length} verbs and every screen says ${EXPECTED_MEMORISED}`);
}

/* ── The authored rows ───────────────────────────────────────────────────── */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));

for (const it of AUTHORED_ITEMS) {
  if (it.id < OWNED_ID_RANGE.from || it.id > OWNED_ID_RANGE.to) {
    die(`${it.id} is outside this lesson's owned range ${OWNED_ID_RANGE.from}..${OWNED_ID_RANGE.to}`);
  }
  if (it.theme !== THEME) die(`${it.id} is in theme "${it.theme}". This lesson writes only into "${THEME}".`);
  if (it.level !== 'a2') die(`${it.id} is level "${it.level}". Everything authored here is a2 (doctrine §C).`);
  if (it.kind !== 'sentence') die(`${it.id} is kind "${it.kind}". Every authored row here is a sentence; see the corpus header.`);
  if (it.gender) die(`${it.id} carries a gender. Nothing authored here may join a1.03's ending population.`);
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m: ${it.respell}`);
  /** ≤ 14 words, doctrine §C. */
  const words = it.fr.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  if (words > 14) die(`${it.id} runs to ${words} words, over the A2 budget of 14: "${it.fr}"`);
}

/** THE CLAIM THIS LESSON IS BUILT ON, CHECKED AS AN EQUALITY.
 *
 *  For -ger and -cer the letter went in SO THE SOUND WOULD NOT HAVE TO MOVE. If
 *  the two halves of a pair carry respellings whose stem syllable differs, the
 *  lesson prints a difference it spends four missions denying, and no schema
 *  check anywhere would catch it. */
for (const p of SOFT_STEM_SOUND) {
  const a = VERBES_ER_EXC.find((w) => w.id === p.still);
  const b = VERBES_ER_EXC.find((w) => w.id === p.moving);
  if (!a || !b) die(`soft pair ${p.still} / ${p.moving} does not resolve against the authored corpus`);
  const sound = p.sound.toLowerCase();
  if (!(a.respell ?? '').toLowerCase().includes(sound) || !(b.respell ?? '').toLowerCase().includes(sound)) {
    die(
      `${p.still} is respelled "${a.respell}" and ${p.moving} is respelled "${b.respell}".\n`
      + `  Both must carry "${p.sound}". The letter in ${b.fr} exists SO THAT THE SOUND DOES NOT CHANGE.\n`
      + `  If the two respellings disagree about the stem, the lesson teaches a difference that is not there.`,
    );
  }
  if (a.fr === b.fr) die(`${p.still} and ${p.moving} are the same sentence, so the pair proves nothing`);
}
console.log(`  soft pairs verified: stem sound unchanged in ${SOFT_STEM_SOUND.map((p) => p.sound).join(', ')}`);

/** Every minimal pair really is a pair: one row where the stem moves, one where
 *  it does not, and both in the corpus. */
for (const p of MINIMAL_PAIRS) {
  const a = VERBES_ER_EXC.find((w) => w.id === p.moving);
  const b = VERBES_ER_EXC.find((w) => w.id === p.still);
  if (!a || !b) die(`minimal pair ${p.moving} / ${p.still} does not resolve`);
  if (!a.moves) die(`${p.moving} is listed as the moving half of "${p.what}" and its corpus row says moves: false`);
  if (b.moves) die(`${p.still} is listed as the still half of "${p.what}" and its corpus row says moves: true`);
}
console.log(`  ${MINIMAL_PAIRS.length} minimal pairs, each one moving row against one still row`);

/** The word-internal nasals, asserted BY NAME. hasPlainNasalFor needs the n or m
 *  to END a token, so `koh-MAHNS`, `lahns` and `mahnzh` would all pass while
 *  being wrong. This is invariants §3's blind spot and it bites three shapes
 *  here, all of them frequent in this lesson. */
{
  const BY_NAME: { id: string; must: string; why: string }[] = [
    { id: 'fr.a2.verbes.143', must: 'koh-MAHⁿS', why: 'commence: the nasal is followed by an s inside the token' },
    { id: 'fr.a2.verbes.160', must: 'koh-MAHⁿS', why: 'commences, the same shape' },
    { id: 'fr.a2.verbes.165', must: 'koh-MAHⁿS', why: 'commence again, on the on row' },
    { id: 'fr.a2.verbes.164', must: 'lahⁿs', why: 'lancent: the nasal is followed by an s inside the token' },
    { id: 'fr.a2.verbes.141', must: 'mahⁿzh', why: 'mange: the nasal is followed by zh inside the token' },
  ];
  for (const b of BY_NAME) {
    const row = VERBES_ER_EXC.find((w) => w.id === b.id);
    if (!row?.respell?.includes(b.must)) {
      die(`${b.id} must respell with "${b.must}" (${b.why}). hasPlainNasalFor cannot see a word-internal nasal, so this is checked by name.`);
    }
  }
  if (hasPlainNasalFor('Il commence ici.', 'eel koh-MAHNS ee-SEE')) {
    die('hasPlainNasalFor now catches a word-internal nasal. If the checker has learned to see them, invariants §3 needs updating and these by-name checks can go.');
  }
  console.log(`  ${BY_NAME.length} word-internal nasals asserted by name, and the checker's blind spot re-confirmed`);
}

/** The false-positive side of the same checker, also by name, so a later author
 *  does not "repair" a correct row. `cuisine` and `pain` are different cases and
 *  both must come out right. */
if (hasPlainNasalFor('Nous rangeons la cuisine.', 'noo rahⁿ-ZHOHⁿ la kwee-ZEEN')) {
  die('the cuisine row is now flagged. /zin/ is a real n and must not take a superscript.');
}
if (!hasPlainNasalFor('Elle achète du pain.', 'el ah-SHET dü PAN')) {
  die('a plain-N spelling of "pain" is no longer flagged. The nasal check has gone quiet and the respellings here are trusting it.');
}

/* ── a1.03: authored joiners enforced to ZERO ────────────────────────────── */
{
  const joiners = endingPopulation(AUTHORED_ITEMS);
  if (joiners.length !== 0) {
    die(
      `${joiners.length} authored row(s) join a1.03's measured ending population: ${joiners.map((j) => j.fr).join(', ')}\n`
      + `  a1-03-genre.test.ts re-measures twenty printed figures on every run. Withdraw rather than argue.`,
    );
  }
  console.log('  a1.03 ending population: 0 authored joiners, so no printed figure moves');
}

/* ── The repairs, through the REAL checker, in both directions ───────────── */

for (const r of RESPELL_REPAIRS) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" still closes a nasal with a plain n or m: ${r.to}`);
  if (!hasPlainNasalFor(r.fr, r.from)) {
    die(
      `${r.id} "${r.fr}" is listed as a repair but its stored value "${r.from}" is NOT flagged by hasPlainNasalFor.\n`
      + `  A variant that merely differs is not a violation (invariants §9). Withdraw it from the repair list.`,
    );
  }
}
console.log(`  ${RESPELL_REPAIRS.length} repairs: every "from" is flagged and every "to" is clean, through the real checker`);

/* ── The lesson ──────────────────────────────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));
const density = validateDensity(LESSON);
if (density.length) die(formatDensity(density));

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
{
  const carrying = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  if (carrying.length !== REFRAME_SECTIONS) {
    die(`the reframe reaches ${carrying.length} sections, expected ${REFRAME_SECTIONS}. A reframe repeated once is a sentence that happened.`);
  }
  console.log(`  reframe in ${carrying.length} sections: ${carrying.map((s) => (s as { id?: string }).id).join(', ')}`);
}

if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
}
if (JSON.stringify(LESSON).includes('"imageRef"')) {
  die('an imageRef is authored. lesson-contract.test.ts does not check it and an unregistered ref draws a blank box.');
}

const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one.`);

/* ── The learner-facing surfaces ─────────────────────────────────────────── */

const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const learnerText = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
].join('\n');
/** The same surfaces with transcriptions excluded, for the word-level guards. */
const learnerProse = [
  ...prose(LESSON.sections),
  ...prose(LESSON.sheets ?? []),
  ...prose(LESSON.terms ?? {}),
];

const jargon = JARGON.filter((j) => hasPhrase(learnerText, j));
if (jargon.length) die(`grammar vocabulary reached a learner surface: ${jargon.join(', ')}`);

/* ── EVERY PATTERN IS TAUGHT WITH ITS REASON, NOT JUST ITS FORM ──────────── */
{
  const noReason = PATTERNS.filter((p) => !learnerText.includes(p.reason));
  if (noReason.length) {
    die(
      `pattern(s) whose sound-preservation reason appears on NO screen: ${noReason.map((p) => p.label).join(', ')}\n`
      + `  A pattern taught as a form is a list. The reason is what still works on a verb nobody has shown the learner.`,
    );
  }
  const noForm = PATTERNS.filter((p) => !learnerText.includes(p.form));
  if (noForm.length) die(`pattern(s) whose form appears on no screen: ${noForm.map((p) => p.label).join(', ')}`);
  console.log(`  all ${PATTERNS.length} patterns present WITH their reason string`);
}

/* ── THE GRID: FOUR PATTERNS AND THEIR REASONS, ON ONE SCREEN ───────────── */
{
  const grid = LESSON.sections.find((s) => (s as { id?: string }).id === GRID_SECTION_ID);
  if (!grid) die(`${GRID_SECTION_ID} is gone. That is where "two reasons, not four" becomes visible.`);
  if (grid.type !== 'cheatSheet') {
    die(
      `${GRID_SECTION_ID} is a ${grid.type}, expected a cheatSheet.\n`
      + `  A \`table\` at layer 'core' is a table-in-core density failure, which is why the full grid is in a sheet\n`
      + `  and the in-flow one is a cheatSheet. LessonSection.tsx routes cheatSheet to CheatSheetView, which draws\n`
      + `  its rows; a cheatSheet INSIDE a sheet draws its title and nothing (a1.13 ships that today).`,
    );
  }
  if (grid.rows.length !== PATTERNS.length) die(`${GRID_SECTION_ID} has ${grid.rows.length} rows for ${PATTERNS.length} patterns`);
  const text = strings(grid).join('\n');
  const missing = PATTERNS.filter((p) => !text.includes(p.reason));
  if (missing.length) {
    die(`${GRID_SECTION_ID} does not carry the reason for ${missing.map((p) => p.label).join(', ')}. Split across four screens the claim is invisible.`);
  }
  console.log(`  the grid is one screen: ${GRID_SECTION_ID}, ${grid.rows.length} rows, every reason present`);
}

/* ── -eler AND -eter ARE A PAIR, IN TWO COLUMNS, ON ONE SCREEN ──────────── */
{
  const pair = LESSON.sections.find((s) => (s as { id?: string }).id === SPLIT_SECTION_ID);
  if (!pair) die(`${SPLIT_SECTION_ID} is gone`);
  if (pair.type !== 'tapTable') die(`${SPLIT_SECTION_ID} is a ${pair.type}, expected a tapTable`);
  if (pair.cols.length !== 3 || pair.cols[1] !== SPLIT_COLUMNS.doubles || pair.cols[2] !== SPLIT_COLUMNS.accents) {
    die(
      `${SPLIT_SECTION_ID} columns are ${JSON.stringify(pair.cols)}, expected a person column then ${SPLIT_COLUMNS.doubles} and ${SPLIT_COLUMNS.accents}.\n`
      + `  SEPARATING THESE TWO DESTROYS THE TEACHING. The whole point is that identical-looking infinitives diverge,\n`
      + `  and a learner who meets them a screen apart overwrites the first with the second.`,
    );
  }
  if (pair.rows.length !== 6) die(`${SPLIT_SECTION_ID} has ${pair.rows.length} rows, expected 6. tapTable is not in ownsLayout(), so a longer table runs past the fold.`);
  const cells = pair.rows.flatMap((r) => r.cells);
  const doubled = cells.filter((c) => /ll|tt/.test(c));
  const accented = cells.filter((c) => /è/.test(c));
  if (!doubled.length) die(`${SPLIT_SECTION_ID} shows no doubled consonant, so only half the contrast is on the screen`);
  if (!accented.length) die(`${SPLIT_SECTION_ID} shows no accented form, so only half the contrast is on the screen`);
  // The nous and vous rows must show BOTH columns unchanged: that is the second
  // half of the teaching and it is the part a learner is least likely to expect.
  const nous = pair.rows.find((r) => r.cells[0] === 'nous');
  if (!nous || /ll|tt|è/.test(`${nous.cells[1]}${nous.cells[2]}`)) {
    die(`${SPLIT_SECTION_ID}: the nous row must show BOTH verbs with the plain stem. Two of the six cells never move and that is half the rule.`);
  }
  console.log(`  the split is two columns on one screen: ${SPLIT_SECTION_ID}, ${doubled.length} doubled and ${accented.length} accented forms`);
}

/** Both sides of the split exist as CORPUS ROWS as well as display strings, so
 *  the drills and the dictée score the same evidence the table shows. */
for (const id of [SPLIT_PAIR.doubles, SPLIT_PAIR.accents]) {
  if (!VERBES_ER_EXC.some((w) => w.id === id)) die(`the split pair names ${id}, which is not an authored row`);
}

/* ── THE nous CELL, AND THE TWO SENTENCES THAT ARE THE WHOLE TEACHING ───── */
for (const form of ['nous mangeons', 'nous commençons']) {
  if (!learnerText.toLowerCase().includes(form)) {
    die(`"${form}" appears on no screen. The nous cell is the entire -ger/-cer teaching and both verbs have to be in it.`);
  }
}
console.log('  nous mangeons and nous commençons both present');

/* ── THE BACK-REFERENCE TO a2.01 ─────────────────────────────────────────── */
{
  const holders = LESSON.sections
    .filter((s) => strings(s).some((x) => namesUnitLabel(x, A201_BACKREF)))
    .map((s) => (s as { id?: string }).id ?? '?');
  if (!holders.length) {
    die(
      `${A201_BACKREF} is named by no section.\n`
      + `  This is seq 2 of 32 and the second half of the lesson rests on a fact ${A201_BACKREF} taught last lesson.\n`
      + `  Naming the unit is the teaching, not a citation: a learner who sees the pieces connect stops treating\n`
      + `  each lesson as a fresh list.`,
    );
  }
  console.log(`  ${A201_BACKREF} named in ${holders.length} section(s): ${holders.join(', ')}`);
}

/** AND THE PARADIGM IS NOT RESTATED IN DIFFERENT WORDS. The nous/on statement is
 *  a2.01's constant, imported. If the lesson has come to hold a paraphrase
 *  instead, this fires. */
if (!learnerText.includes(NOUS_ON)) {
  die(
    `the nous/on statement does not appear verbatim.\n`
    + `  The ledger binds all twenty A2 lessons to a2.01's wording and this lesson has the strongest reason to\n`
    + `  quote it, because the -ger/-cer change lives in the nous cell. Import the constant; do not reword it.`,
  );
}

/* ── The neighbours keep their lessons ───────────────────────────────────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
const qs = quizQuestions(quiz);

/** WHAT THE LEARNER IS ASKED TO PRODUCE OR CHOOSE, plus the vocabulary decks.
 *  Narrower than "a production section", and the only scope on which the
 *  neighbour guards are honest: s16-notmine NAMES payer and aller in order to
 *  hand them over, which is the lesson doing its job rather than crossing a
 *  boundary. A guard that fires on that is a guard the next author deletes. */
function producedStrings(): string[] {
  const out: string[] = [];
  for (const q of qs) {
    if (q.answer) out.push(q.answer);
    if (q.target) out.push(q.target);
    for (const a of q.accept ?? []) out.push(a);
    // EVERY option, not only the correct one. A learner reads all four and has to
    // consider each, so a neighbour's material in a distractor is still a
    // neighbour's material put in front of them.
    for (const o of q.opts ?? []) out.push(o);
  }
  for (const s of LESSON.sections) {
    if (s.type === 'scenario') for (const t of s.turns) out.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) out.push(...g.check.opts);
    if (s.type === 'listening') for (const q2 of s.questions) out.push(...q2.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) out.push(...d.opts);
  }
  for (const d of LESSON.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) out.push(o.opts[o.correct]);
  }
  return out;
}

function deckStrings(): string[] {
  const out: string[] = [];
  for (const s of LESSON.sections) {
    if (['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) out.push(...strings(s));
    if (s.type === 'groupDrill') for (const g of s.groups) out.push(...strings(g.items ?? []));
  }
  return out;
}

const PRODUCTION_SURFACES = [...producedStrings(), ...deckStrings()];

/** THE -yer DECISION, ASSERTED IN BOTH DIRECTIONS.
 *
 *  Named as context on exactly one card, taught nowhere. Whichever way this went
 *  it had to be a decision somebody could see, so both halves are checked: the
 *  infinitives ARE named, and no conjugated form reaches anything the learner
 *  produces into or is handed as vocabulary. */
{
  const leaked = YER_FORMS.filter((f) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, f)));
  if (leaked.length) {
    die(
      `a -yer form reached a production surface: ${leaked.join(', ')}\n`
      + `  -yer is named as CONTEXT on s16-notmine and taught nowhere, because payer has two accepted spellings\n`
      + `  (je paie and je paye) and this lesson's hardest screen insists there is one right answer.`,
    );
  }
  const unnamed = YER_INFINITIVES.filter((v) => !hasPhrase(learnerText, v));
  if (unnamed.length) {
    die(
      `${unnamed.join(', ')} named nowhere. The -yer decision was to NAME the pattern and not teach it, and a\n`
      + `  learner who meets je paie in the wild with no place to put it concludes the system is unreliable.`,
    );
  }
  const inItems = YER_INFINITIVES.filter((v) => IMPORTED_VERBS.some((iv) => iv.verb === v));
  if (inItems.length) die(`-yer verb(s) imported as items: ${inItems.join(', ')}. Context is a display string, not a released row.`);
  console.log(`  -yer: named as context (${YER_INFINITIVES.join(', ')}), no conjugated form on any production surface, no item released`);
}

/** aller may be NAMED, once, as the trap. It may not be conjugated anywhere. */
{
  const conjugated = ALLER_FORMS.filter((f) => learnerProse.some((s) => hasPhrase(s, f)));
  if (conjugated.length) die(`a form of aller reached a learner surface: ${conjugated.join(', ')}. aller is a2.02.`);
  if (!hasPhrase(learnerText, 'aller')) die('aller is named nowhere. One line naming it as a trap is the ceiling, and it is also the floor.');
  console.log('  aller named as a trap, conjugated nowhere');
}

/** THE CHANGED FORMS THIS LESSON OWNS ARRIVE. a2.01 proved none of them reached
 *  one of ITS production surfaces; this proves they reached one of these. A guard
 *  written only over infinitives sees none of them: `mangeons` does not contain
 *  `manger`. */
{
  const missing = CHANGED_FORMS.filter((f) => !hasPhrase(learnerText, f));
  if (missing.length > 6) {
    die(`${missing.length} of the ${CHANGED_FORMS.length} changed forms this lesson owns appear on no screen: ${missing.slice(0, 8).join(', ')}`);
  }
  const onProduction = CHANGED_FORMS.filter((f) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, f)));
  if (onProduction.length < 12) {
    die(`only ${onProduction.length} changed forms reach a surface the learner produces into or is handed. This lesson is the one that teaches them.`);
  }
  console.log(`  changed forms: ${CHANGED_FORMS.length - missing.length}/${CHANGED_FORMS.length} on a screen, ${onProduction.length} on a production surface`);
}

/** All seventeen, BY NAME. A count passes after somebody swaps one out. */
{
  const missing = THE_SEVENTEEN.filter((v) => !hasPhrase(learnerText, v));
  if (missing.length) die(`verb(s) named by no screen: ${missing.join(', ')}`);
  const ids = new Set(LESSON.itemIds);
  const unreleased = IMPORTED_VERBS.filter((v) => !ids.has(v.id)).map((v) => v.verb);
  if (unreleased.length) die(`verb(s) on a screen but not in itemIds: ${unreleased.join(', ')}`);
  console.log(`  all ${THE_SEVENTEEN.length} verbs named individually and released by id`);
}

/** The memorised list is named as a memorised list. A rule that pretends to be
 *  complete and is not is how a learner decides the language is arbitrary. */
for (const v of [...DOUBLERS, ...ACCENT_TAKERS]) {
  if (!hasPhrase(learnerText, v)) die(`${v} is on the memorised list and named by no screen`);
}

/* ── The ear mission exists and knows what it can and cannot settle ─────── */
{
  const ear = LESSON.sections.find((s) => s.type === 'listening');
  if (!ear || ear.type !== 'listening') die('no listening section. One mechanism is audible and one is not, and that split is worth a mission.');
  const splitsTheMechanisms = ear.questions.some((q) => {
    const t = `${q.q} ${q.opts.join(' ')} ${q.why ?? ''}`.toLowerCase();
    return t.includes('nothing') && (t.includes('mange') || t.includes('same'));
  });
  if (!splitsTheMechanisms) {
    die('no listening question asks what the -ger change does to the SOUND. "Nothing" is the answer and it is the reframe.');
  }
  for (const q of ear.questions) if (!q.why) die(`listening question has no why: ${q.q}`);
  console.log(`  listening: ${ear.lines.length} lines, ${ear.questions.length} questions, and the inaudible-change question is present`);
}

/* ── The quiz ────────────────────────────────────────────────────────────── */

const rounds = quiz.rounds ?? [];
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`expected ${EXPECTED_QUESTIONS} quiz questions, found ${qs.length}`);

const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half limit`);
for (const q of qs) {
  if (!q.why) die(`quiz question has no why: ${q.q}`);
  if (!q.ref || !sectionIds.includes(q.ref)) die(`quiz question ref "${q.ref}" names no section: ${q.q}`);
  if (q.opts && new Set(q.opts).size !== q.opts.length) die(`duplicate option in: ${q.q}`);
  // TYPED formats only. `speak` is scored by STT against `target` and never
  // reaches matchesAccept.
  if (['typeIn', 'errorSpot'].includes(q.format ?? '')) {
    if (!matchesAccept(q.answer ?? '', q.accept ?? [])) {
      die(`free-text question does not accept the answer it displays: ${q.answer}`);
    }
  }
  if (q.format === 'speak' && !q.target) die(`speak question has no target: ${q.q}`);
  /** A `listenChoose` whose options are the thing being heard needs `say`, or
   *  ListenChooseCard speaks opts[correct]. */
  if (q.format === 'listenChoose' && !q.say) die(`listenChoose without a say: ${q.q}`);
}

/** NO TYPED QUESTION MAY TURN ON AN ACCENT OR A CEDILLA.
 *
 *  `fold()` strips combining marks, so a typeIn whose answer differs from the
 *  learner's likely error only by a diacritic ACCEPTS THE ERROR. That is worse
 *  than not asking: the learner is told they spelled it right. Every accent
 *  question in this lesson is an mcq, and this proves it through the real
 *  matchesAccept rather than by inspection. */
{
  const DIACRITIC_ERRORS: [string, string][] = [
    ['commençons', 'commencons'],
    ['achètes', 'achetes'],
    ['achète', 'achete'],
    ['préfère', 'prefere'],
    ['répètent', 'repetent'],
    ['gèle', 'gele'],
    ['protégeons', 'protegeons'],
  ];
  const bad: string[] = [];
  for (const q of qs) {
    if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
    for (const [right, wrong] of DIACRITIC_ERRORS) {
      if (!(q.accept ?? []).some((a) => a.includes(right))) continue;
      if (matchesAccept(wrong, q.accept ?? []) || matchesAccept((q.answer ?? '').replace(right, wrong), q.accept ?? [])) {
        bad.push(`"${q.q}" would accept ${wrong}`);
      }
    }
  }
  if (bad.length) {
    die(
      `typed question(s) that turn on a diacritic and therefore accept the mistake:\n    ${bad.join('\n    ')}\n`
      + `  fold() normalises to NFD and strips every combining mark, so ç == c and è == e. Ask these as mcq.`,
    );
  }
  console.log(`  no typed question turns on a diacritic (${DIACRITIC_ERRORS.length} error shapes checked through the real matchesAccept)`);
}

/** AND THE MCQ THAT DO ASK THEM REALLY DO OFFER THE WRONG SPELLING. An accent
 *  question whose distractors are all obviously wrong tests nothing. */
{
  const asksTheCedilla = qs.some((q) => q.format === 'mcq' && (q.opts ?? []).some((o) => o.includes('commencons')) && (q.opts ?? []).some((o) => o.includes('commençons')));
  if (!asksTheCedilla) die('no mcq puts commencons and commençons side by side. That is the one question typeIn cannot ask and the reason the mcq share is high.');
  const asksTheAccent = qs.some((q) => q.format === 'mcq' && (q.opts ?? []).some((o) => o === 'achete') && (q.opts ?? []).some((o) => o === 'achète'));
  if (!asksTheAccent) die('no mcq puts achete and achète side by side, for the same reason.');
}

console.log(`  quiz: ${qs.length} questions, ${mcq} mcq, formats ${[...new Set(qs.map((q) => q.format ?? 'mcq'))].sort().join('/')}`);

/** THE QUIZ IS SHUFFLED AT RUNTIME (QuizDeckView), so the authored slot is
 *  invisible to a learner. The cap is authoring hygiene and it stays. */
{
  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) {
    if ((c / closed.length) * 100 > 40) die(`quiz answer slot ${s} holds ${Math.round((c / closed.length) * 100)}% of the ${closed.length} closed questions, over 40`);
  }
  console.log(`  quiz slots over ${closed.length} closed questions: ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/** THE IN-MISSION CLOSED QUESTIONS ARE NOT SHUFFLED BY ANYTHING.
 *  MissionRich renders q.opts.map in AUTHORED ORDER. */
{
  type Closed = { section: string; correct: number; opts: string[] };
  const inMission: Closed[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct, opts: g.check.opts });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct, opts: q.opts });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct, opts: d.opts });
  }
  if (!inMission.length) die('no in-mission closed questions found. The spread check would pass vacuously.');
  const slots = new Map<number, number>();
  for (const q of inMission) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) {
    if ((c / inMission.length) * 100 > 40) {
      die(`in-mission answer slot ${s} holds ${Math.round((c / inMission.length) * 100)}% of the ${inMission.length} closed questions, over 40. MissionRich does NOT shuffle these.`);
    }
  }
  const bySection = new Map<string, Closed[]>();
  for (const q of inMission) {
    const list = bySection.get(q.section) ?? [];
    list.push(q);
    bySection.set(q.section, list);
  }
  for (const [sid, list] of bySection) {
    for (let k = 1; k < list.length; k++) {
      if (list[k].correct === list[k - 1].correct) die(`${sid}: consecutive in-mission questions both answer in slot ${list[k].correct}, and nothing shuffles them`);
    }
    for (const q of list) if (q.correct >= q.opts.length) die(`${sid}: correct index ${q.correct} is out of range for ${q.opts.length} options`);
  }
  console.log(`  in-mission slots over ${inMission.length} closed questions: ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/** drillForRound fires the drill of the FIRST resolving target and stops. */
{
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => (LESSON.errorTriggers ?? []).some((e) => e.id === x && e.drill));
    if (t) fired.add(t);
  }
  const orphans = (LESSON.errorTriggers ?? []).filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id);
  if (orphans.length) die(`trigger(s) whose drill no round can fire: ${orphans.join(', ')}. drillForRound stops at the first resolving target.`);
  console.log(`  all ${fired.size} drills reachable, one per round`);
}

/* ── Sheets ──────────────────────────────────────────────────────────────── */
{
  const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
  // The predicate narrows BEFORE the set lookup. Written the other way round,
  // `sheetIds.has(id)` sees `string | undefined` and tsc rejects it.
  const dangling = LESSON.sections
    .map((s) => (s as { sheetId?: string }).sheetId)
    .filter((id): id is string => typeof id === 'string')
    .filter((id) => !sheetIds.has(id));
  if (dangling.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(dangling)].join(', ')}`);
  const unreachable = [...sheetIds].filter((id) => !LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
  if (unreachable.length) die(`sheet(s) no section links to: ${unreachable.join(', ')}`);
  /** ReferenceSheet.tsx draws these three and nothing else. A cheatSheet inside a
   *  sheet draws its title and no rows, which a1.13 ships today. */
  const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
  const dead = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
    .filter((sec) => !SHEET_RENDERS.has(sec.type))
    .map((sec) => `${sh.id}: a ${sec.type} section, which the sheet renderer does not draw`));
  if (dead.length) die(dead.join('\n  '));
}

/* ── Tranches release what has been shown, and nothing else ─────────────── */
{
  const tranche = LESSON.deckTranche ?? [];
  if (tranche.length !== (LESSON.acts ?? []).length) die(`${tranche.length} tranches for ${(LESSON.acts ?? []).length} acts; they are index-aligned`);
  const seen = new Set<string>();
  for (const [i, slice] of tranche.entries()) {
    for (const id of slice) {
      if (seen.has(id)) die(`${id} is released twice, in tranche ${i}`);
      seen.add(id);
      if (!LESSON.itemIds.includes(id)) die(`tranche ${i} releases ${id}, which is not in itemIds`);
    }
  }
  const never = LESSON.itemIds.filter((id) => !seen.has(id));
  if (never.length) die(`item(s) in itemIds that no tranche ever releases: ${never.join(', ')}`);
  console.log(`  ${seen.size} items released across ${tranche.length} tranches, each exactly once`);
}

/* ── Against the live database ───────────────────────────────────────────── */

function pgArray(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const touched = IMPORTED_ROWS.map((r) => r.id);
  const live = await c.query<{
    id: string; fr: string; en: string; respell: string | null; gender: string | null;
    theme: string; drills: string[]; status: string;
  }>('select id, fr, en, respell, gender, theme, drills, status from content_items where id = any($1)', [[...new Set(touched)]]);
  const byId = new Map(live.rows.map((r) => [r.id, r] as const));

  /* THE MANIFEST IS A RECORDED READ AND IT IS VERIFIED FIELD BY FIELD.
     TWO VALUES ARE LEGAL FOR A ROW THIS BUILD REPAIRS: the value the manifest
     recorded (this batch has not run yet) and the value this build writes (it
     has). Anything else is somebody else's edit. Without this the script is not
     idempotent. */
  const repairedTo = new Map<string, string>(RESPELL_REPAIRS.map((r) => [r.id, r.to] as const));
  const drillsAdded = new Map<string, string>(DRILL_ADDITIONS.map((d) => [d.id, d.add] as const));

  const drift: string[] = [];
  for (const row of IMPORTED_ROWS) {
    const id = row.id;
    const x = byId.get(id);
    if (!x) { drift.push(`${id} is no longer in Postgres`); continue; }
    if (x.status !== 'published') drift.push(`${id} is ${x.status}, not published`);
    if (x.fr !== row.fr) drift.push(`${id} fr: manifest ${JSON.stringify(row.fr)} vs db ${JSON.stringify(x.fr)}`);
    if (x.en !== row.en) drift.push(`${id} en: manifest ${JSON.stringify(row.en)} vs db ${JSON.stringify(x.en)}`);
    if (x.theme !== row.theme) drift.push(`${id} theme: manifest ${JSON.stringify(row.theme)} vs db ${JSON.stringify(x.theme)}`);
    const legal = [row.respell ?? null, repairedTo.get(id) ?? null];
    if (!legal.includes(x.respell ?? null)) {
      drift.push(`${id} respell: manifest ${JSON.stringify(row.respell ?? null)} or this build's ${JSON.stringify(repairedTo.get(id) ?? null)}, db says ${JSON.stringify(x.respell)}`);
    }
    const d = pgArray(x.drills).slice().sort();
    const add = drillsAdded.get(id);
    const stored = (row.drills ?? []).slice().sort().join();
    const after = [...new Set([...(row.drills ?? []), ...(add ? [add] : [])])].sort().join();
    if (d.join() !== stored && d.join() !== after) {
      drift.push(`${id} drills: manifest ${JSON.stringify(row.drills)} or this build's +${add ?? 'nothing'}, db says ${JSON.stringify(d)}`);
    }
  }
  if (drift.length) {
    c.release(); await pool.end();
    die(`the recorded manifest has DRIFTED from Postgres:\n  ${drift.slice(0, 8).join('\n  ')}\n  Regenerate with pnpm tsx scripts/_a209_manifest.ts`);
  }
  console.log(`  manifest verified against Postgres: ${touched.length} rows, field by field`);

  /** NOT ONE of the seventeen may carry a gender. A gendered single-word row joins
   *  a1.03's ending population, and this lesson RELEASES all seventeen into the
   *  flashcard hub. */
  {
    const gendered = IMPORTED_VERBS.filter((v) => byId.get(v.id)?.gender);
    if (gendered.length) {
      c.release(); await pool.end();
      die(`imported verb(s) carrying a gender: ${gendered.map((v) => `${v.verb} (${v.id})`).join(', ')}. An infinitive is not a noun.`);
    }
  }

  /* The ids this lesson claims must be free, and the check is a COUNT as well as
     a maximum: a highest-id check misses a concurrent lesson landing below it. */
  const range = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where theme = $1 and id like 'fr.a2.verbes.%'", [THEME],
  );
  const claimed = await c.query<{ id: string; fr: string; theme: string }>(
    'select id, fr, theme from content_items where id = any($1)', [AUTHORED_ITEMS.map((i) => i.id)],
  );
  // A row already at this id is only a collision if it is SOMEBODY ELSE'S. If the
  // fr and theme match, this batch has already run and is being re-run.
  const foreign = claimed.rows.filter((r) => {
    const mine = AUTHORED_ITEMS.find((a) => a.id === r.id);
    return !mine || mine.fr !== r.fr || mine.theme !== r.theme;
  });
  if (foreign.length) {
    c.release(); await pool.end();
    die(`id(s) taken in Postgres by DIFFERENT content: ${foreign.map((r) => `${r.id} "${r.fr}" (${r.theme})`).join(', ')}. A concurrent build has landed inside your block.`);
  }
  if (claimed.rows.length) console.log(`  ${claimed.rows.length} authored id(s) already present with matching content: this is a re-run`);
  console.log(`  fr.a2.verbes: ${range.rows[0].n} rows, max ${range.rows[0].mx}, claiming ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}`);

  /* No two non-sentence rows in one theme may share an `fr`. Every authored row
     here is a sentence, so this should find nothing; it runs anyway, because
     "should" is what the flashhub failure mode is made of. */
  const nonSentence = AUTHORED_ITEMS.filter((i) => i.kind !== 'sentence');
  if (nonSentence.length) {
    c.release(); await pool.end();
    die(`${nonSentence.length} authored row(s) are not sentences. See the corpus header: this lesson authors sentences only.`);
  }

  /* THE DICTÉE MODE, THROUGH THE REAL FUNCTION. */
  for (const id of DICTATION_IDS) {
    const row = AUTHORED_ITEMS.find((i) => i.id === id);
    if (!row) { c.release(); await pool.end(); die(`dictée target ${id} is not an authored row`); }
    const mode = dicteeMode(row.fr);
    if (mode !== 'letters') {
      c.release(); await pool.end();
      die(
        `dictée target ${id} "${row.fr}" is in ${mode} mode.\n`
        + `  Word mode hands every real word over as a pre-spelled tile, so it CANNOT test a spelling, which is this lesson's whole subject. Shorten it under the letter limit.`,
      );
    }
    if (!row.drills?.includes('dictation')) { c.release(); await pool.end(); die(`dictée target ${id} carries no dictation drill`); }
  }

  /* AND WHAT THE DICTÉE CAN ACTUALLY GRADE, THROUGH THE REAL normalizeFr.
     The claim is documented in the corpus and it is PROVED here in both
     directions, so it fails rather than goes stale if normalizeFr ever changes. */
  {
    const wrongWay: string[] = [];
    for (const d of DICTEE_NEAR_MISS) {
      const row = AUTHORED_ITEMS.find((i) => i.id === d.id);
      if (!row) { c.release(); await pool.end(); die(`DICTEE_NEAR_MISS names ${d.id}, which is not an authored row`); }
      if (!DICTATION_IDS.includes(d.id)) { c.release(); await pool.end(); die(`DICTEE_NEAR_MISS names ${d.id}, which is not a dictée target`); }
      const distinguishable = normalizeFr(row.fr) !== normalizeFr(d.wrong);
      if (distinguishable !== d.scorable) {
        wrongWay.push(
          `${d.id} is marked scorable: ${d.scorable} and normalizeFr says ${distinguishable}`
          + ` ("${row.fr}" vs "${d.wrong}")`,
        );
      }
    }
    if (wrongWay.length) {
      c.release(); await pool.end();
      die(
        `the dictée's scoring claims disagree with the real normalizeFr:\n    ${wrongWay.join('\n    ')}\n`
        + `  If normalizeFr has learned to keep diacritics, this lesson can move its accent questions out of mcq\n`
        + `  and the corpus header needs rewriting. If it has not, fix the table.`,
      );
    }
    const scorable = DICTEE_NEAR_MISS.filter((d) => d.scorable).length;
    console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${scorable} graded on the distinction and ${DICTEE_NEAR_MISS.length - scorable} not (accent or cedilla, folded by normalizeFr)`);
  }

  /* Every speak target must carry voiceflash. */
  for (const id of VERBES_ER_EXC_SPEAK_IDS) {
    const mine = AUTHORED_ITEMS.find((i) => i.id === id);
    const live2 = byId.get(id);
    const drills = mine ? (mine.drills ?? []) : [...pgArray(live2?.drills), ...(drillsAdded.has(id) ? [drillsAdded.get(id)!] : [])];
    if (!drills.includes('voiceflash')) {
      c.release(); await pool.end();
      die(`speak target ${id} carries no voiceflash, so the mic-scored deck cannot score it`);
    }
  }
  console.log(`  speak: ${VERBES_ER_EXC_SPEAK_IDS.length} targets, all voiceflash`);

  /* The unit. Units live in content_units as kind = 'curriculum_unit' with the
     whole unit in a jsonb body; there is no flat `sub` column. */
  const u = await c.query<{ body: Unit & { themes?: string[]; seq?: string | number } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID],
  );
  if (u.rowCount !== 1) { c.release(); await pool.end(); die(`unit ${UNIT_ID} is not in content_units`); }
  const unit = u.rows[0].body;
  if (unit.title !== UNIT_TITLE) { c.release(); await pool.end(); die(`unit title is ${JSON.stringify(unit.title)}, expected ${JSON.stringify(UNIT_TITLE)}. Do not change it; report the divergence.`); }
  if (unit.sub !== UNIT_SUB) { c.release(); await pool.end(); die(`unit sub is ${JSON.stringify(unit.sub)}, expected ${JSON.stringify(UNIT_SUB)}`); }
  if (unit.canDo !== UNIT_CANDO) { c.release(); await pool.end(); die(`unit canDo is ${JSON.stringify(unit.canDo)}, expected ${JSON.stringify(UNIT_CANDO)}`); }
  if (!(unit.prereqUnitIds ?? []).includes('a2.01')) {
    c.release(); await pool.end();
    die(`unit ${UNIT_ID} declares prereqUnitIds ${JSON.stringify(unit.prereqUnitIds ?? [])}, and this lesson rests on a2.01`);
  }
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) {
    c.release(); await pool.end();
    die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the header will draw ${JSON.stringify(expectedTag)}`);
  }
  const already = (unit.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit ${UNIT_ID}: seq ${JSON.stringify(unit.seq)}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}${already ? '  (re-run)' : '  (first lesson)'}`);
  const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  /** The version must move FORWARD when the CONTENT moves, and an unchanged
   *  re-run must be a no-op. Equal version is legal only when the stored body is
   *  byte-identical, compared through canonicalJson because Postgres `jsonb`
   *  normalises key order on write and a plain stringify would never match. */
  const prev = await c.query<{ body: unknown }>(
    "select body from content_units where kind = 'lesson' and slug = $1", [LESSON.id],
  );
  const prevBody = prev.rows[0]?.body as { version?: number } | undefined;
  const prevVersion = prevBody?.version ?? 0;
  if (LESSON.version < prevVersion) {
    c.release(); await pool.end();
    die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version}. The counter moves forward, never back.`);
  }
  if (LESSON.version === prevVersion) {
    const same = canonicalJson(prevBody) === canonicalJson(LESSON);
    if (!same) {
      c.release(); await pool.end();
      die(
        `the stored lesson is v${prevVersion} and this one is v${LESSON.version} with DIFFERENT content.\n`
        + `  Move the lesson's own version counter forward. Two different bodies under one number is exactly the\n`
        + `  drift that makes Postgres and seed.json disagree while both report the same version.`,
      );
    }
    console.log(`  lesson ${LESSON.id}: v${LESSON.version} unchanged, this is an idempotent re-run`);
  } else if (prevVersion === 0) {
    console.log(`  lesson ${LESSON.id}: new, v${LESSON.version}`);
  } else {
    console.log(`  lesson ${LESSON.id}: replacing v${prevVersion} with v${LESSON.version}`);
  }

  if (DRY_RUN) {
    console.log('\n  DRY RUN: nothing written.\n');
    c.release(); await pool.end();
    return;
  }

  await c.query('begin');
  try {
    for (const it of AUTHORED_ITEMS) {
      await c.query(
        `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, card_type, status)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,'published')
         on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
           fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           card_type=excluded.card_type, status='published'`,
        [it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.notes ?? null, it.tags ?? [], it.drills ?? [], it.version ?? 1, it.cardType ?? null],
      );
    }
    for (const r of RESPELL_REPAIRS) {
      const x = byId.get(r.id)!;
      if ((x.respell ?? null) !== r.from && x.respell !== r.to) {
        throw new Error(`respelling for ${r.id}: expected ${JSON.stringify(r.from)}, Postgres says ${JSON.stringify(x.respell)}. Somebody has changed this row.`);
      }
      await c.query('update content_items set respell = $2 where id = $1', [r.id, r.to]);
    }
    for (const d of DRILL_ADDITIONS) {
      // `drills` is an ENUM ARRAY (drill_kind[]), not text[]. Concatenating a
      // text[] onto it fails with "operator does not exist: drill_kind[] ||
      // text[]" and takes the whole transaction with it. The double cast is the
      // only route Postgres offers.
      await c.query(
        `update content_items
            set drills = (select array_agg(distinct e order by e)
                            from unnest(drills || $2::text[]::drill_kind[]) e)
          where id = $1`,
        [d.id, [d.add]],
      );
    }
    await c.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
    );
    const ur = await c.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (ur.rowCount !== 1) throw new Error(`the unit update touched ${ur.rowCount} rows, expected exactly 1`);
    await c.query('commit');
  } catch (e) {
    await c.query('rollback');
    c.release(); await pool.end();
    die(`transaction rolled back: ${(e as Error).message}`);
  }

  const after = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where theme = $1 and id like 'fr.a2.verbes.%'", [THEME],
  );
  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored, ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}\n`
    + `    ${RESPELL_REPAIRS.length} respellings repaired (nasal closed with a plain n)\n`
    + `    ${IMPORTED_VERBS.length} verbs imported by id, 0 authored\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items\n`
    + `    fr.a2.verbes row count: ${range.rows[0].n} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-verbes-er-exceptions-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
