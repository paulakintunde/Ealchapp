/* Applies a2.10.l1 "Les verbes en -IR" to Postgres: 25 authored rows, 3
 * respelling repairs, 2 drill additions, and the lesson (a FIRST build, v1 — the
 * unit dump says `"lessons": []` and that was probed rather than assumed).
 * Validates EVERYTHING before it opens a transaction.
 *
 *     pnpm tsx scripts/author-verbes-ir-batch.ts --dry-run
 *     pnpm tsx scripts/author-verbes-ir-batch.ts
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
 * 2. THIS LESSON AUTHORS NO INFINITIVE. All ten already exist and are imported by
 *    id. The manifest in data/verbes-ir-rows.gen.ts is a recorded read and is
 *    verified field by field below; a stale manifest puts the lesson ahead of
 *    rows nobody has looked at.
 *
 * 3. a1.03 DOES NOT MOVE. Every authored row is a `sentence` with no `gender` and
 *    no bare single-word `fr`, so none can join a1.03's measured ending
 *    population. Proved through the REAL `endingPopulation`.
 *
 * 4. THE CONTRAST IS A LAYOUT CLAIM AND IT IS CHECKED AS ONE. `il finit` and
 *    `ils finissent` must be ADJACENT ROWS of one tapTable, each with its own
 *    audio. That is asserted by row index below, not by "both strings appear
 *    somewhere".
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
  AUTHORED_IDS, CONTRAST_PAIR, DICTATION_IDS, DICTEE_NEAR_MISS, DRILL_ADDITIONS, ENDINGS,
  GROWING_ENDINGS, HOMOPHONE_FORMS, NOT_THIS_FAMILY, NOT_THIS_FAMILY_FORMS,
  NOT_THIS_FAMILY_HOMED, NOT_THIS_FAMILY_UNIT, NUMBER_PAIRS, OVER_GENERALISED_FORMS,
  OWNED_ID_RANGE, PRONOUN_BLIND_PAIRS, RESPELL_REPAIRS, SILENT_ENDINGS, SINGULAR_TRIPLES,
  THEME, THE_TEN, VERBES_IR, afterPronoun, toItem,
} from './data/verbes-ir-corpus.ts';
import { IMPORTED_ROWS, IMPORTED_VERBS } from './data/verbes-ir-imported.ts';
import {
  A201_BACKREF, A201_REFRAME, BOTH_HALVES, BOUNDARY_SECTION_ID, CONTRAST_ROW_IDS,
  CONTRAST_SECTION_ID, NOUS_ON, NOUS_ON_SECTION_ID, REFRAME, VERBES_IR_LESSON,
  VERBES_IR_DICTATION_IDS, VERBES_IR_SPEAK_IDS,
} from './data/verbes-ir-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = VERBES_IR_LESSON;
const UNIT_ID = 'a2.10';

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
const EXPECTED_AUTHORED = 25;
const EXPECTED_IMPORTED_VERBS = 10;
const EXPECTED_RESPELL_REPAIRS = 3;
const EXPECTED_DRILL_ADDITIONS = 2;
const EXPECTED_DICTATION = 8;
const EXPECTED_SHEETS = 2;
/** The class that ends in -ir and takes no -iss-. Named on one card, conjugated
 *  nowhere. If this grows, the card that says "ten" is wrong, so it is a constant
 *  rather than a count. */
const EXPECTED_NOT_THIS_FAMILY = 10;
/** How many of the six endings put a sound on the end. Three, and the whole
 *  lesson says so. */
const EXPECTED_GROWING = 3;

/** Copied BYTE FOR BYTE from the probe's unit dump on 2026-08-11, not from the
 *  brief. The brief has `title` and `sub` SWAPPED — the third A2 brief in a row
 *  to do so — and its `sub` ("the finir model - and the -iss- in the plural") is
 *  not in the database at all, and carries an em dash besides. */
const UNIT_TITLE = 'Regular -IR Verbs';
const UNIT_SUB = 'Les verbes en -IR';
const UNIT_CANDO = 'Can conjugate regular -ir verbs and hear where the -iss- belongs';

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
 *  stop, so `/nu fi.ni.sɔ̃/` reads as a standalone word `ni`, and a2.01's aller
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

const AUTHORED_ITEMS: Item[] = VERBES_IR.map(toItem);

console.log(`\n  a2.10.l1 "Les verbes en -IR" → ${describeTarget()}${DRY_RUN ? '  (DRY RUN)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED_ITEMS.length}`);
if (AUTHORED_IDS.length !== EXPECTED_AUTHORED) die(`AUTHORED_IDS holds ${AUTHORED_IDS.length} ids, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_VERBS.length !== EXPECTED_IMPORTED_VERBS) die(`expected ${EXPECTED_IMPORTED_VERBS} imported verbs, found ${IMPORTED_VERBS.length}`);
if (THE_TEN.length !== EXPECTED_IMPORTED_VERBS) die(`THE_TEN holds ${THE_TEN.length} verbs, expected ${EXPECTED_IMPORTED_VERBS}`);
if (NOT_THIS_FAMILY.length !== EXPECTED_NOT_THIS_FAMILY) die(`NOT_THIS_FAMILY holds ${NOT_THIS_FAMILY.length} verbs and every screen says ${EXPECTED_NOT_THIS_FAMILY}`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`expected ${EXPECTED_RESPELL_REPAIRS} respelling repairs, found ${RESPELL_REPAIRS.length}`);
if (DRILL_ADDITIONS.length !== EXPECTED_DRILL_ADDITIONS) die(`expected ${EXPECTED_DRILL_ADDITIONS} drill additions, found ${DRILL_ADDITIONS.length}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts, found ${(LESSON.acts ?? []).length}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`expected ${EXPECTED_SHEETS} reference sheets, found ${(LESSON.sheets ?? []).length}`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`expected ${EXPECTED_DICTATION} dictée targets, found ${DICTATION_IDS.length}`);
if (VERBES_IR_DICTATION_IDS.join() !== DICTATION_IDS.join()) die('the dictée section and the corpus disagree about the targets');
if (ENDINGS.length !== 6) die(`ENDINGS holds ${ENDINGS.length} rows and a paradigm has six`);
if (GROWING_ENDINGS.length !== EXPECTED_GROWING) die(`${GROWING_ENDINGS.length} endings put a sound on the end and every screen says ${EXPECTED_GROWING}`);
if (SILENT_ENDINGS.length !== ENDINGS.length - EXPECTED_GROWING) die('the silent and growing endings do not add up to six');

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

/** THE SINGULAR TRIPLES, CHECKED AS AN EQUALITY.
 *
 *  je finis / tu finis / il finit are three spellings and one sound. If the three
 *  respellings ever disagree about anything after the pronoun, the lesson prints
 *  a difference it spends two missions denying, and no schema check would catch
 *  it. This is a2.01's `.102`/`.105` assertion applied to the half of this
 *  paradigm where a2.01's fact is still true. */
for (const triple of SINGULAR_TRIPLES) {
  const rows = triple.map((id) => {
    const w = VERBES_IR.find((x) => x.id === id);
    if (!w) die(`SINGULAR_TRIPLES names ${id}, which is not an authored row`);
    return w;
  });
  const tails = rows.map((w) => afterPronoun(w.respell ?? ''));
  if (new Set(tails).size !== 1) {
    die(
      `the singular triple ${triple.join(' / ')} does not sound the same:\n    ${rows.map((w, i) => `${w.fr}  ->  ${tails[i]}`).join('\n    ')}\n`
      + `  Everything after the pronoun MUST be one string. Three spellings and one sound is half of what this lesson teaches.`,
    );
  }
  if (new Set(rows.map((w) => w.fr)).size !== 3) die(`the triple ${triple.join(' / ')} does not hold three different sentences`);
  if (rows.some((w) => w.grows)) die(`a row in the singular triple ${triple.join(' / ')} is marked grows: true`);
}
console.log(`  ${SINGULAR_TRIPLES.length} singular triples: everything after the pronoun is one string, on ${SINGULAR_TRIPLES.length} different verbs`);

/** THE NUMBER PAIRS: one singular row against one plural row, and the plural must
 *  really carry the extra sound in its respelling. */
for (const [sing, plur] of NUMBER_PAIRS) {
  const a = VERBES_IR.find((w) => w.id === sing);
  const b = VERBES_IR.find((w) => w.id === plur);
  if (!a || !b) die(`number pair ${sing} / ${plur} does not resolve against the authored corpus`);
  if (a.grows) die(`${sing} is the singular half of a number pair and its row says grows: true`);
  if (!b.grows) die(`${plur} is the plural half of a number pair and its row says grows: false`);
  if (a.fr === b.fr) die(`${sing} and ${plur} are the same sentence, so the pair proves nothing`);
  const ra = a.respell ?? '';
  const rb = b.respell ?? '';
  if (ra === rb) die(`${sing} and ${plur} carry the SAME respelling. The whole lesson is that these two are different out loud.`);
  if (rb.length <= ra.length) {
    die(
      `${plur} "${b.fr}" is respelled "${rb}", which is no longer than the singular's "${ra}".\n`
      + `  The plural puts a sound on the end. If the respelling does not show it, the card teaches the opposite.`,
    );
  }
}
console.log(`  ${NUMBER_PAIRS.length} number pairs, each one singular row against one plural row, plural respelling longer every time`);

/** AND THE SUBSET WHERE THE PRONOUN IS NO HELP, which is the only set a listening
 *  question may ask "one or several?" about. Both halves must respell their
 *  pronoun IDENTICALLY, or the learner can answer from the pronoun and the
 *  mission proves nothing. */
for (const [sing, plur] of PRONOUN_BLIND_PAIRS) {
  const a = VERBES_IR.find((w) => w.id === sing)!;
  const b = VERBES_IR.find((w) => w.id === plur)!;
  const pa = (a.respell ?? '').split(' ')[0];
  const pb = (b.respell ?? '').split(' ')[0];
  if (pa !== pb) {
    die(
      `${sing} respells its pronoun "${pa}" and ${plur} respells its "${pb}".\n`
      + `  PRONOUN_BLIND_PAIRS is the set where the pronoun gives the learner NOTHING, and it is what makes the\n`
      + `  listening mission possible at all. If the pronouns differ, move the pair out of this list.`,
    );
  }
  if (!NUMBER_PAIRS.some(([x, y]) => x === sing && y === plur)) die(`${sing} / ${plur} is pronoun-blind and is not in NUMBER_PAIRS`);
}
console.log(`  ${PRONOUN_BLIND_PAIRS.length} pronoun-blind pairs: the pronoun respells identically on both sides`);

/** The word-internal nasal and the real /n/, BOTH asserted BY NAME.
 *  hasPlainNasalFor needs the n or m to END a token, so `ahⁿ-SAHNBL` would sail
 *  through it while being wrong; and it FALSE-POSITIVES on a genuine n after a
 *  vowel, so a later author who trusts it could "repair" `suh-MEN` into a nasal
 *  that is not there. Invariants §3, and this lesson meets both blind spots. */
{
  const BY_NAME: { id: string; must: string; why: string }[] = [
    { id: 'fr.a2.verbes.196', must: 'ahⁿ-SAHⁿBL', why: 'ensemble: the second nasal is followed by BL inside the token, which the checker cannot see' },
    { id: 'fr.a2.verbes.200', must: 'zahⁿ-fahⁿ', why: 'les enfants: two nasals, the first followed by f inside the word' },
    { id: 'fr.a2.verbes.204', must: 'suh-MEN', why: 'la semaine: a REAL n, and it must NOT take a superscript' },
  ];
  for (const b of BY_NAME) {
    const row = VERBES_IR.find((w) => w.id === b.id);
    if (!row?.respell?.includes(b.must)) {
      die(`${b.id} must respell with "${b.must}" (${b.why}). Checked by name because the shared checker cannot see it.`);
    }
  }
  if (hasPlainNasalFor('Nous réfléchissons ensemble.', 'noo ray-flay-shee-sohⁿ ahⁿ-SAHNBL')) {
    die('hasPlainNasalFor now catches a word-internal nasal. If the checker has learned to see them, invariants §3 needs updating and these by-name checks can go.');
  }
  if (hasPlainNasalFor('Je choisis un cours dans la semaine.', 'zhuh shwah-zee uhⁿ koor dahⁿ la suh-MEN')) {
    die('the semaine row is now flagged. /sə.mɛn/ is a real n and must not take a superscript.');
  }
  if (!hasPlainNasalFor('Elle grandit vite.', 'el grahn-dee VEET')) {
    die('a plain-N spelling of "grandit" is no longer flagged. The nasal check has gone quiet and the respellings here are trusting it.');
  }
  console.log(`  ${BY_NAME.length} respellings asserted by name, and both of the checker's blind spots re-confirmed`);
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

/* ── THE CONTRAST: TWO ROWS, ADJACENT, ONE SCREEN, ONE TAP EACH ──────────── */
{
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === CONTRAST_SECTION_ID);
  if (!sec) die(`${CONTRAST_SECTION_ID} is gone. That is the one screen the whole lesson turns on.`);
  if (sec.type !== 'tapTable') {
    die(
      `${CONTRAST_SECTION_ID} is a ${sec.type}, expected a tapTable.\n`
      + `  A \`table\` at layer 'core' is a table-in-core density failure, and only a tapTable gives each row its own\n`
      + `  audio. The learner has to be able to play one row and then the next without leaving the screen.`,
    );
  }
  if (sec.rows.length !== 6) die(`${CONTRAST_SECTION_ID} has ${sec.rows.length} rows, expected 6. tapTable is not in ownsLayout(), so a longer table runs past the fold.`);
  if (sec.cols.length !== 3) die(`${CONTRAST_SECTION_ID} has ${sec.cols.length} columns, expected 3`);

  const iSing = CONTRAST_ROW_IDS.indexOf(CONTRAST_PAIR.singular);
  const iPlur = CONTRAST_ROW_IDS.indexOf(CONTRAST_PAIR.plural);
  if (iSing < 0 || iPlur < 0) die(`${CONTRAST_SECTION_ID} does not hold both halves of the contrast pair`);
  if (Math.abs(iSing - iPlur) !== 1) {
    die(
      `${CONTRAST_PAIR.singular} is row ${iSing + 1} and ${CONTRAST_PAIR.plural} is row ${iPlur + 1} of ${CONTRAST_SECTION_ID}.\n`
      + `  THEY MUST BE NEIGHBOURS. Two rows apart the learner scrolls between them and compares two playbacks\n`
      + `  rather than two forms, which is the same defect as recording them in two sessions.`,
    );
  }
  // AND BOTH MUST BE AUDIBLE WITH ONE TAP. A row with no `say` renders as text.
  const singRow = sec.rows[iSing];
  const plurRow = sec.rows[iPlur];
  for (const [label, row] of [['singular', singRow], ['plural', plurRow]] as const) {
    if (!row.say) die(`the ${label} row of ${CONTRAST_SECTION_ID} carries no \`say\`, so it cannot be played with one tap`);
  }
  const singFr = VERBES_IR.find((w) => w.id === CONTRAST_PAIR.singular)!.fr;
  const plurFr = VERBES_IR.find((w) => w.id === CONTRAST_PAIR.plural)!.fr;
  if (singRow.say !== singFr || plurRow.say !== plurFr) {
    die(`the contrast rows play ${JSON.stringify([singRow.say, plurRow.say])}, expected ${JSON.stringify([singFr, plurFr])}`);
  }
  // The row order must be the SOUND order the corpus declares, index for index.
  if (sec.rows.some((r, i) => r.cells[0] !== ENDINGS[i].person)) {
    die(`${CONTRAST_SECTION_ID} rows are not index-aligned with ENDINGS. The table is ordered by sound and the constant is the record of that.`);
  }
  console.log(`  the contrast is adjacent: ${CONTRAST_SECTION_ID} rows ${iSing + 1} and ${iPlur + 1}, both with their own audio`);
}

/* ── THE BACK-REFERENCE, AND a2.01's OWN REFRAME QUOTED VERBATIM ─────────── */
{
  const holders = LESSON.sections
    .filter((s) => strings(s).some((x) => hasPhrase(x, A201_BACKREF)))
    .map((s) => (s as { id?: string }).id ?? '?');
  if (holders.length < 2) {
    die(
      `${A201_BACKREF} is named by ${holders.length} section(s).\n`
      + `  This lesson INVERTS ${A201_BACKREF} and keeps half of it. A learner who is not told which lesson is being\n`
      + `  contradicted, and where the line falls, has been handed a contradiction instead of a teaching.`,
    );
  }
  if (!learnerText.includes(A201_REFRAME)) {
    die(
      `a2.01's reframe does not appear verbatim.\n`
      + `  The opening act rests on the two lessons saying opposite things, and quoting the earlier one means\n`
      + `  IMPORTING THE CONSTANT. A paraphrase would let a2.01 be reworded and this lesson misquote it.`,
    );
  }
  if (!learnerText.includes(BOTH_HALVES)) die(`"${BOTH_HALVES}" appears on no screen, and it is where the line between the two lessons is drawn`);
  const bothHalves = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(BOTH_HALVES)));
  if (bothHalves.length < 3) die(`"${BOTH_HALVES}" reaches ${bothHalves.length} sections, expected at least 3`);
  console.log(`  ${A201_BACKREF} named in ${holders.length} sections, its reframe quoted verbatim, both halves stated in ${bothHalves.length}`);
}

/** THE nous/on STATEMENT IS a2.01's CONSTANT AND IT HAS EXACTLY ONE HOME.
 *
 *  Quoted here because `on finit` is the one form that makes this lesson's
 *  reframe misfire: it means we and it takes the singular shape. A paraphrase
 *  would be the ledger's binding broken in the third lesson of the band. */
{
  if (!learnerText.includes(NOUS_ON)) {
    die(
      `the nous/on statement does not appear verbatim.\n`
      + `  The ledger binds all twenty A2 lessons to a2.01's wording, and this lesson needs it: on takes the il form,\n`
      + `  so the commonest spoken plural in French sounds singular. Import the constant; do not reword it.`,
    );
  }
  const holders = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  if (holders.length !== 1 || holders[0] !== NOUS_ON_SECTION_ID) {
    die(`the nous/on statement is in ${JSON.stringify(holders)}, expected exactly [${JSON.stringify(NOUS_ON_SECTION_ID)}]`);
  }
}

/* ── The quiz, needed before the production-surface scope is built ───────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
const qs = quizQuestions(quiz);

/** WHAT THE LEARNER IS ASKED TO PRODUCE OR CHOOSE, plus the vocabulary decks.
 *  Narrower than "a production section", and the only scope on which the
 *  neighbour guards are honest: s16-notmine NAMES partir and dormir in order to
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

/* ── THE BOUNDARY CLASS: NAMED, NEVER CONJUGATED ─────────────────────────── */
{
  const unnamed = NOT_THIS_FAMILY.filter((v) => !hasPhrase(learnerText, v));
  if (unnamed.length) {
    die(
      `verb(s) of the non--iss- class named nowhere: ${unnamed.join(', ')}\n`
      + `  Naming the class IS the mission. A learner who generalises the pattern onto one of these produces a form\n`
      + `  no French speaker says, and nothing else in this lesson will stop them.`,
    );
  }
  const leaked = NOT_THIS_FAMILY_FORMS.filter((f) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, f)));
  if (leaked.length) {
    die(
      `a conjugated form of the non--iss- class reached a production surface: ${leaked.join(', ')}\n`
      + `  These verbs are named and not taught. venir and tenir are ${NOT_THIS_FAMILY_UNIT}; the rest are owned by no unit\n`
      + `  in the curriculum, which is in the build report and is not this lesson's to fix.`,
    );
  }
  // The over-generalised forms are banned EVERYWHERE, not merely on a production
  // surface. See the corpus header: showing `ils partissent` in order to reject
  // it leaves it in memory with nothing to overwrite it, because nobody here
  // holds the right form.
  const invented = OVER_GENERALISED_FORMS.filter((f) => learnerProse.some((s) => hasPhrase(s, f)));
  if (invented.length) {
    die(
      `an over-generalised form reached a learner surface: ${invented.join(', ')}\n`
      + `  This lesson does not print the error in order to reject it. See the corpus header for why.`,
    );
  }
  const inItems = NOT_THIS_FAMILY.filter((v) => IMPORTED_VERBS.some((iv) => iv.verb === v));
  if (inItems.length) die(`non--iss- verb(s) imported as items: ${inItems.join(', ')}. Context is a display string, not a released row.`);
  // AND THE HAND-OVER IS SPECIFIC. "Some verbs are different" is not a boundary.
  const card = LESSON.sections.find((s) => (s as { id?: string }).id === BOUNDARY_SECTION_ID);
  if (!card) die(`${BOUNDARY_SECTION_ID} is gone, and with it the only place the boundary is named`);
  const cardText = strings(card).join('\n');
  const notOnCard = NOT_THIS_FAMILY.filter((v) => !hasPhrase(cardText, v));
  if (notOnCard.length) die(`${BOUNDARY_SECTION_ID} does not name ${notOnCard.join(', ')}. The whole class belongs on one screen.`);
  if (!cardText.includes(NOT_THIS_FAMILY_UNIT)) {
    die(`${BOUNDARY_SECTION_ID} does not say where ${NOT_THIS_FAMILY_HOMED.join(' and ')} are taught. A boundary with no destination is a warning, not a teaching.`);
  }
  console.log(`  the boundary: all ${NOT_THIS_FAMILY.length} named on ${BOUNDARY_SECTION_ID}, 0 forms on a production surface, 0 invented forms anywhere`);
}

/** All ten, BY NAME. A count passes after somebody swaps one out. */
{
  const missing = THE_TEN.filter((v) => !hasPhrase(learnerText, v));
  if (missing.length) die(`verb(s) named by no screen: ${missing.join(', ')}`);
  const ids = new Set(LESSON.itemIds);
  const unreleased = IMPORTED_VERBS.filter((v) => !ids.has(v.id)).map((v) => v.verb);
  if (unreleased.length) die(`verb(s) on a screen but not in itemIds: ${unreleased.join(', ')}`);
  console.log(`  all ${THE_TEN.length} verbs named individually and released by id`);
}

/* ── The neighbours keep their lessons ───────────────────────────────────── */
{
  const RE_VERBS = ['vendre', 'attendre', 'répondre', 'entendre', 'descendre', 'perdre'];
  const leaked = RE_VERBS.filter((v) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, v)));
  if (leaked.length) die(`-RE verb(s) on a production surface: ${leaked.join(', ')}. a2.11 is the very next lesson.`);
  const STEM_CHANGERS = ['mangeons', 'commençons', 'appelle', 'achète', 'préfère', 'jette'];
  const stems = STEM_CHANGERS.filter((v) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, v)));
  if (stems.length) die(`a2.09's changed stems reached a production surface: ${stems.join(', ')}`);
  // The bare participles `fini` and `choisi` are NOT guarded, and that is a
  // deliberate narrowing rather than an oversight: `choisi` is a legitimate WRONG
  // STEM in the r1 distractor list, which is exactly what a distractor is for,
  // and a guard that fires on it is a guard the next author deletes (invariants
  // §1). What is guarded is the auxiliary frame and the imperfect stem, neither
  // of which has any innocent reading in this lesson.
  const PAST = ['ai fini', 'a fini', 'ai choisi', 'a choisi', 'avons fini', 'finissais', 'finissions', 'choisissais', 'choisissions'];
  const past = PAST.filter((v) => learnerProse.some((s) => hasPhrase(s, v)));
  if (past.length) die(`a past or imperfect form is on a learner surface: ${past.join(', ')}. Every row here is a simple present.`);
}

/* ── The ear missions exist, and they know what they can settle ─────────── */
{
  const ears = LESSON.sections.filter((s) => s.type === 'listening');
  if (ears.length < 2) {
    die(
      `${ears.length} listening section(s).\n`
      + `  The canDo says "hear", and the listening missions ARE the lesson rather than decoration around a table.\n`
      + `  This is the only lesson in batch 1 where the ear can do the job at all.`,
    );
  }
  let asksTheNumber = false;
  for (const ear of ears) {
    if (ear.type !== 'listening') continue;
    for (const q of ear.questions) {
      if (!q.why) die(`listening question has no why: ${q.q}`);
      const t = `${q.q} ${q.opts.join(' ')}`.toLowerCase();
      if ((t.includes('how many people') || t.includes('one person, or several')) && q.opts.length >= 3) asksTheNumber = true;
    }
  }
  if (!asksTheNumber) {
    die(
      `no listening question asks the learner to name the NUMBER from what they heard.\n`
      + `  That task is impossible in a2.01 and possible here, and it is the entire point of the unit.`,
    );
  }
  // AND AT LEAST ONE LINE MUST BE THE CONTRAST PAIR ITSELF, BY ID.
  const earLines = ears.flatMap((s) => (s.type === 'listening' ? s.lines.map((l) => l.fr) : []));
  for (const id of [CONTRAST_PAIR.singular, CONTRAST_PAIR.plural]) {
    const row = VERBES_IR.find((w) => w.id === id)!;
    if (!earLines.includes(row.fr)) {
      die(`the listening missions never play ${id} "${row.fr}". The contrast has to be heard where it is being tested.`);
    }
  }
  const totalQs = ears.reduce((n, s) => n + (s.type === 'listening' ? s.questions.length : 0), 0);
  console.log(`  listening: ${ears.length} missions, ${earLines.length} lines, ${totalQs} questions, and both halves of the contrast are played`);
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

/** NO EAR QUESTION MAY ASK BETWEEN TWO FORMS THAT ARE ONE SOUND.
 *
 *  je finis, tu finis and il finit are identical out loud. A `listenChoose`
 *  offering two of them has no correct answer and marking one of them right would
 *  certify a bug. The brief asked for this to be said in the report; it is
 *  enforced instead.
 *
 *  Checked as "these two options differ ONLY by a member of one homophone group",
 *  not as "two options mention homophones", because a question offering
 *  « Il finit tôt. » against « Je finis tôt. » is legitimate: the PRONOUNS are
 *  audibly different and that is what the learner is being asked to catch. */
{
  const bad: string[] = [];
  for (const q of qs) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        for (const group of HOMOPHONE_FORMS) {
          for (const x of group) {
            for (const y of group) {
              if (x === y) continue;
              if (opts[i].replace(x, y) === opts[j]) bad.push(`"${q.q}" offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}`);
            }
          }
        }
      }
    }
  }
  if (bad.length) {
    die(
      `ear question(s) whose options are the same sound:\n    ${[...new Set(bad)].join('\n    ')}\n`
      + `  No recording can separate finis from finit. Ask that one as typeIn or errorSpot.`,
    );
  }
  console.log(`  no listenChoose asks between two forms that are one sound (${HOMOPHONE_FORMS.length} groups checked)`);
}

/** AND THE SINGULAR TRIPLE IS TESTED WHERE IT CAN BE: TYPED. */
{
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? ''));
  if (typed.length < 10) die(`only ${typed.length} typed questions; the singular triple is a spelling and the page is the only place it exists`);
  const singularTyped = typed.filter((q) => {
    const t = `${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`;
    return /\b(finis|finit|remplis|remplit|choisis|choisit)\b/i.test(t);
  });
  if (singularTyped.length < 4) {
    die(`only ${singularTyped.length} typed questions turn on the singular triple, and the dictée plus these are the only surfaces that can`);
  }
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  if (listen < 5) {
    die(
      `only ${listen} listenChoose questions.\n`
      + `  This is the one lesson in batch 1 where the ear can genuinely do the job, and the format should carry\n`
      + `  weight here in a way it cannot anywhere else in the band.`,
    );
  }
  console.log(`  quiz: ${qs.length} questions, ${mcq} mcq, ${typed.length} typed, ${listen} listenChoose, formats ${[...new Set(qs.map((q) => q.format ?? 'mcq'))].sort().join('/')}`);
}

/** EVERY GAP QUESTION FIXES THE NUMBER. A stem with no subject has no single
 *  answer, and in this lesson the subject is the only thing that decides which
 *  half of the paradigm is wanted. */
{
  const SUBJECTS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les'];
  const gap = qs.filter((q) => q.q.includes('___'));
  if (gap.length < 6) die(`only ${gap.length} gap questions`);
  for (const q of gap) {
    if (!/\([a-zà-ÿ]+ir\)/i.test(q.q)) die(`no -ir naming form in the stem, so the question has no single answer: ${q.q}`);
    const first = q.q.trim().split(/\s+/)[0].toLowerCase();
    if (!SUBJECTS.includes(first)) die(`no subject fixing the number at the head of the stem: ${q.q}`);
  }
  console.log(`  ${gap.length} gap questions, every one with a naming form and a subject that fixes the number`);
}

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
  /** AND THE CANONICAL PRONOUN ORDER IS IN THE SHEET. The in-flow tapTable is
   *  ordered by SOUND so the contrast pair can be adjacent, and that departure is
   *  only defensible because the ordinary order is one tap away. */
  const endings = (LESSON.sheets ?? []).find((s) => s.id === 'sheet.a2.10.endings');
  if (!endings) die('sheet.a2.10.endings is gone');
  const paradigm = (endings.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-endings-paradigm');
  if (!paradigm || paradigm.type !== 'table') die('the nine-pronoun table is gone from sheet.a2.10.endings');
  const order = paradigm.rows.map((r) => r[0]);
  const EXPECTED_ORDER = ["je / j'", 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'];
  if (order.join(',') !== EXPECTED_ORDER.join(',')) {
    die(`the sheet's paradigm runs ${order.join(', ')}. The in-flow table departs from the usual order, so this one may not.`);
  }
  console.log(`  sheets: ${sheetIds.size}, both reachable, and the canonical nine-pronoun order is in ${endings.id}`);
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

/** AND EVERY ITEM IS ON A SCREEN, not merely resolvable. a1.08 declared 43
 *  itemIds that resolved perfectly and were drawn by nothing, and a2.01 shipped
 *  nine of the same shape until its own test found them. */
{
  const shown = new Set<string>();
  for (const s of LESSON.sections) {
    if (s.type === 'groupDrill') for (const g of s.groups) for (const it of g.items ?? []) if (it.itemId) shown.add(it.itemId);
    if (s.type === 'practice') for (const id of s.itemIds ?? []) shown.add(id);
    if (s.type === 'dictation') for (const id of s.itemIds ?? []) shown.add(id);
  }
  for (const d of LESSON.drills ?? []) for (const it of (d as { items?: string[] }).items ?? []) shown.add(it);
  const orphan = LESSON.itemIds.filter((id) => !shown.has(id));
  if (orphan.length) die(`item(s) declared, resolvable and drawn by nothing: ${orphan.join(', ')}`);
  console.log(`  all ${LESSON.itemIds.length} items reach a screen that renders the row`);
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
    die(`the recorded manifest has DRIFTED from Postgres:\n  ${drift.slice(0, 8).join('\n  ')}\n  Regenerate with pnpm tsx scripts/_a210_manifest.ts`);
  }
  console.log(`  manifest verified against Postgres: ${touched.length} rows, field by field`);

  /** NOT ONE of the ten may carry a gender. A gendered single-word row joins
   *  a1.03's ending population, and this lesson RELEASES all ten into the
   *  flashcard hub. */
  {
    const gendered = IMPORTED_VERBS.filter((v) => byId.get(v.id)?.gender);
    if (gendered.length) {
      c.release(); await pool.end();
      die(`imported verb(s) carrying a gender: ${gendered.map((v) => `${v.verb} (${v.id})`).join(', ')}. An infinitive is not a noun.`);
    }
  }

  /** AND EVERY ONE MUST END UP WITH A `flashcard` DRILL, because every one is
   *  released by a tranche and served as a hub card. Two of the ten arrive
   *  without it and DRILL_ADDITIONS is what fixes that; this proves the fix
   *  covers the whole set rather than the two somebody happened to notice. */
  {
    const short = IMPORTED_VERBS.filter((v) => {
      const now = pgArray(byId.get(v.id)?.drills);
      const add = drillsAdded.get(v.id);
      return !now.includes('flashcard') && add !== 'flashcard';
    });
    if (short.length) {
      c.release(); await pool.end();
      die(`verb row(s) released to the hub with no flashcard drill: ${short.map((v) => `${v.verb} (${v.id})`).join(', ')}`);
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
        + `  Word mode hands every real word over as a pre-spelled tile, so it CANNOT test a spelling, which is half of\n`
        + `  what this lesson teaches. The paradigm frame is "tôt" for exactly this reason: "Ils finissent le travail."\n`
        + `  is 21 letters and switches, and "Ils finissent tôt." is 15 and does not.`,
      );
    }
    if (!row.drills?.includes('dictation')) { c.release(); await pool.end(); die(`dictée target ${id} carries no dictation drill`); }
  }

  /* AND WHAT THE DICTÉE CAN ACTUALLY GRADE, THROUGH THE REAL normalizeFr.
     Documented in the corpus and PROVED here in both directions, so it fails
     rather than goes stale if normalizeFr ever changes. */
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
        + `  If normalizeFr has learned to keep diacritics, the circumflex row can move and the corpus header needs\n`
        + `  rewriting. If it has not, fix the table.`,
      );
    }
    const scorable = DICTEE_NEAR_MISS.filter((d) => d.scorable).length;
    if (scorable < 7) {
      c.release(); await pool.end();
      die(`only ${scorable} of ${DICTEE_NEAR_MISS.length} dictée targets are graded on the distinction they teach. -IS against -IT against -ISSENT is letters all the way down and should score.`);
    }
    console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${scorable} graded on the distinction and ${DICTEE_NEAR_MISS.length - scorable} not (the circumflex, folded by normalizeFr)`);
  }

  /* Every speak target must carry voiceflash. */
  for (const id of VERBES_IR_SPEAK_IDS) {
    const mine = AUTHORED_ITEMS.find((i) => i.id === id);
    const live2 = byId.get(id);
    const drills = mine ? (mine.drills ?? []) : [...pgArray(live2?.drills), ...(drillsAdded.has(id) ? [drillsAdded.get(id)!] : [])];
    if (!drills.includes('voiceflash')) {
      c.release(); await pool.end();
      die(`speak target ${id} carries no voiceflash, so the mic-scored deck cannot score it`);
    }
  }
  console.log(`  speak: ${VERBES_IR_SPEAK_IDS.length} targets, all voiceflash`);

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
    + `    ${DRILL_ADDITIONS.length} drill addition(s)\n`
    + `    ${IMPORTED_VERBS.length} verbs imported by id, 0 authored\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items\n`
    + `    fr.a2.verbes row count: ${range.rows[0].n} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-verbes-ir-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
