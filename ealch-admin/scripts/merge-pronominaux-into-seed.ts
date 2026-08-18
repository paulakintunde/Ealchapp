/* Merges a2.22.l1 « Les verbes pronominaux » into ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-pronominaux-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-pronominaux-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * NEVER `git checkout seed.json` to undo anything. It discards other authors'
 * uncommitted lessons. Re-run this script.
 *
 * ── WHY THE CARRY EXISTS ──────────────────────────────────────────────────
 *
 * The seed holds roughly a quarter of Postgres and this lesson leans on twenty
 * imported rows. THE PREDICTION IS THAT FOUR ARE ABSENT — `laver` bare,
 * `s'appeler`, `se souvenir` and « Je m'appelle Sophie. » — and a2.05 §6, a2.20
 * and a2.21 all mispredicted their own cut, in both directions, three builds
 * running. So the prediction is PRINTED and the SURPRISE CHECK is the
 * deliverable: whatever the real figure is, it is measured here and reported,
 * and every one of the twenty is carried regardless.
 *
 * `laver` and `s'appeler` matter most. The bare verb is the whole evidence that
 * « je lave » is ordinary French rather than a broken « je me lave », and
 * `s'appeler` is the opener. A lesson whose itemIds resolve to nothing renders
 * empty cards.
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
 * by the merge; a2.05, a2.20 and a2.21 each found four more, all in the merge.
 * It matters procedurally, because the merge is the layer that runs when
 * somebody re-merges without re-applying. Every content guard the batch runs
 * runs here too, and the holes the band has found are closed by construction:
 *
 *   1  every import must BE in the manifest, or the carry silently drops it;
 *   2  a pair guard is not satisfied by `wrong === right`;
 *   3  the scene guard checks THE FRENCH THE SCENE SPEAKS, not every string;
 *   4  every unit id and every quoted line in a guard is a LITERAL;
 *   5  the role play's ALTERNATIVES are checked here, because the seed-wide
 *      `scenario.logic.test.ts` runs after the merge and that is exactly how
 *      a2.03 shipped three one-alt turns with every gate green;
 *   6  the six-form layout is checked cell by cell, never `strings(section)`.
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
  A209_CREDIT, AUDIBLE_CONTRAST, AUTHORED_IDS, AUTHORED_ITEMS,
  COMPOUND_CLUSTERS, COMPOUND_MUST_FIRE, COMPOUND_MUST_NOT_FIRE,
  EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_IMPORTED, EXPECTED_QUESTIONS,
  EXPECTED_SECTIONS, HOMOPHONE_GROUPS, IMPORTED, IMPORTED_IDS, JARGON,
  LESSON_ID, OBJECT_TERMS, OWNS_SECTIONS, PARADIGM_IDS, PARADIGM_SECTIONS,
  PARTICIPLES, READ_NOT_IMPORTED, RECIPROCAL_ID, REFRAME, REFRAME_COUNT,
  ROUTINE_IDS, THEME, UNIT, fr,
} from './data/pronominaux-corpus.ts';
import { CHIP_ROW_BUDGET, PRONOMINAUX_TERMS, chipRowWidth } from './data/pronominaux-terms.ts';
import { PRONOMINAUX_IMPORT_ROWS } from './data/pronominaux-rows.gen.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  CONTRAST_SECTION_ID, DICTATION_SECTION_ID, LATER_SECTION_ID,
  LESSON as PRON_LESSON, NEGATIVE_SECTION_ID, NOMEANING_SECTION_ID,
  OWNS_SECTION_IDS, PARADIGM_SECTION_IDS, PERSONS_SECTION_ID, PRON_ACTS,
  PRON_DICTEE_IDS, PRON_DRILLS, PRON_ITEM_IDS, PRON_SCENE_BEATS, PRON_SHEETS,
  QUIZ_SECTION_ID, SPEAK_SECTION_ID, TALK_SECTION_ID, VOWEL_SECTION_ID,
  WRAP_SECTION_ID,
} from './data/pronominaux-lesson.ts';

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] } & Record<string, unknown>;

const DRY_RUN = process.argv.includes('--dry-run');
const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const LESSON: Lesson = PRON_LESSON;
const UNIT_ID = UNIT.id;

/* THE SEED CUT PREDICTION. Printed, and then MEASURED. a2.05 §6: predict
 * nothing about the cut, measure it. */
const PREDICTED_ABSENT: readonly string[] = [
  'fr.a1.rencontres.105',
  'fr.sons.verbes-essentiels.056', 'fr.a1.presentation-personnelle.001',
];
/* THE FIRST RUN PREDICTED FOUR AND MEASURED THREE. `fr.a1.cuisine.183` « laver »
 * was in the prediction because this build's IMPORTED table recorded it
 * `inSeed: false`, and the probe had said `inSeed=Y`. A TRANSCRIPTION ERROR, not
 * a cut surprise, and the surprise check is what found it. The corpus file is
 * corrected and the prediction is now three. */

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const UNITS_BEFORE = seed.units.length;

/** Every lesson this merge must not disturb, BY ID rather than by count. A count
 *  alone lets a one-for-one swap through (invariants §5). */
const MUST_NOT_DISTURB: string[] = seed.lessons.map((l) => l.id).filter((id) => id !== LESSON.id).sort();

/** Every row this merge does not own, byte-for-byte, before it runs. */
const OWNED = new Set<string>([...AUTHORED_IDS, ...IMPORTED_IDS]);
const UNTOUCHED_BEFORE = new Map<string, string>(
  seed.items.filter((i) => !OWNED.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);
const A103_SEED_POPULATION = endingPopulation(seed.items as never).length;

/* ─── String walks. Identical to the batch's, on purpose. ──────────────────*/

const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);
/** `cards` is NOT here. See the batch's note: it holds the entire learner
 *  surface of a cardDeck, a flashcards section, a reviewDeck and a trapDrill. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets', 'restPoints',
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
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k) && !NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}
const surfaceOf = (walk: (v: unknown, out?: string[]) => string[]): string[] => [
  ...walk(LESSON.sections), ...walk(LESSON.sheets ?? []), ...walk(LESSON.terms ?? {}),
  ...walk(LESSON.acts ?? []), ...walk(LESSON.drills ?? []), ...walk(LESSON.audio ?? {}),
  ...walk(LESSON.overview ?? {}), LESSON.intro ?? '', LESSON.reframe ?? '',
];
const PROSE_SURFACE = surfaceOf(prose);
const DISPLAY_SURFACE = surfaceOf(display);
const ALL_SURFACE = [...new Set([...PROSE_SURFACE, ...DISPLAY_SURFACE])];
/** NOT deduped. Counting must use this: two sections carrying one short line
 *  collapse to one under a Set, and the reframe count came out at seven for
 *  eight authored occurrences before this was split out. */
const ALL_SURFACE_RAW = [...DISPLAY_SURFACE];

const bounded = (needle: string): RegExp =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string): boolean => bounded(needle).test(hay);

const section = (id: string) => {
  const s = LESSON.sections.find((x) => x.id === id);
  if (!s) die(`the lesson has no section ${id}.`);
  return s!;
};

/* ─── The lesson, through the real validators ──────────────────────────────*/

{
  const issues = validateLesson(LESSON);
  if (issues.length) die(`the lesson does not validate:\n${formatIssues(issues)}`);
}
if (LESSON.id !== LESSON_ID) die(`the lesson id is ${LESSON.id}.`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections and EXPECTED_SECTIONS is ${EXPECTED_SECTIONS}.`);
if (PRON_ACTS.length !== EXPECTED_ACTS) die(`${PRON_ACTS.length} acts and EXPECTED_ACTS is ${EXPECTED_ACTS}.`);
if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`${AUTHORED_ITEMS.length} authored rows and EXPECTED_AUTHORED is ${EXPECTED_AUTHORED}.`);
if (IMPORTED.length !== EXPECTED_IMPORTED) die(`${IMPORTED.length} imports and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
if (OWNS_SECTION_IDS.length !== OWNS_SECTIONS) die(`the Owns act has ${OWNS_SECTION_IDS.length} sections and OWNS_SECTIONS is ${OWNS_SECTIONS}.`);
if (PARADIGM_SECTION_IDS.length !== PARADIGM_SECTIONS) die(`the paradigm act has ${PARADIGM_SECTION_IDS.length} sections.`);
if (OWNS_SECTIONS <= PARADIGM_SECTIONS) die('the paradigm has at least as many sections as the Owns.');

/* ─── The content guards, all of them, phrased as LITERALS ─────────────────*/

/* THE REFRAME, against an explicit constant. */
{
  const n = ALL_SURFACE_RAW.filter((s) => s.includes(REFRAME)).length;
  if (n !== REFRAME_COUNT) die(`the reframe is authored ${n} times and REFRAME_COUNT is ${REFRAME_COUNT}.`);
  if (LESSON.reframe !== 'The pronoun changes with the subject, because it is the subject.') {
    die(`Lesson.reframe is « ${LESSON.reframe} ». The literal is on the guard side so a rewording of the constant cannot rename both sides.`);
  }
}

/* THE NEGATION CONTRACT, as a LITERAL. a2.21 §8. */
{
  const A219 = 'Wrap the verb that changed, not the one carrying the meaning.';
  const EXT = 'Both words changed for the subject, so both go inside the wrap.';
  if (ALL_SURFACE_RAW.filter((s) => s.includes(A219)).length < 3) die("a2.19's negation line is quoted fewer than three times.");
  if (ALL_SURFACE_RAW.filter((s) => s.includes(EXT)).length < 3) die('the negation extension is authored fewer than three times.');
  const TRAP = 'Je me ne lave pas.';
  if (!display(section(WRAP_SECTION_ID)).some((s) => s.includes(TRAP))) die(`the trap section does not show « ${TRAP} ».`);
  for (const s of LESSON.sections) {
    if ([WRAP_SECTION_ID, QUIZ_SECTION_ID, 's16-errors'].includes(s.id!)) continue;
    if (display(s).some((t) => t.includes(TRAP))) die(`${s.id} carries « ${TRAP} » outside the trap, the errors card and the exam.`);
  }
  /* AND THE PAIR GUARD IS NOT SATISFIED BY wrong === right. a2.20's hole. */
  const errs = (section('s16-errors') as unknown as { errors: { wrong: string; right: string }[] }).errors;
  for (const e of errs) if (e.wrong === e.right) die(`a commonErrors card has wrong === right: « ${e.wrong} ».`);
}

/* NO COMPOUND TENSE, ANYWHERE, and the guard proved to fire and not to. */
{
  const CLITIC = "(me|m'|te|t'|se|s'|nous|vous)";
  const ETRE = '(suis|es|est|sommes|êtes|sont)';
  const RE = new RegExp(`(?<![\\p{L}\\p{N}-])(je|tu|il|elle|on|nous|vous|ils|elles)\\s+${CLITIC}\\s*${ETRE}(?![\\p{L}\\p{N}'’-])`, 'iu');
  const hasCompound = (s: string): boolean => {
    if (RE.test(s)) return true;
    for (const c of COMPOUND_CLUSTERS) if (hasPhrase(s, c)) return true;
    for (const p of PARTICIPLES) if (hasPhrase(s, p)) return true;
    return false;
  };
  for (const s of COMPOUND_MUST_FIRE) if (!hasCompound(s)) die(`the compound guard does not fire on « ${s} ».`);
  for (const s of COMPOUND_MUST_NOT_FIRE) if (hasCompound(s)) die(`the compound guard fires on legitimate content: « ${s} ».`);
  for (const s of ALL_SURFACE) if (hasCompound(s)) die(`a compound tense reaches a learner surface: « ${s.slice(0, 110)} ». a2.23 owns it.`);
  for (const it of AUTHORED_ITEMS) if (hasCompound(it.fr)) die(`${it.id} « ${it.fr} » is a compound tense.`);
}

/* THE SIX-FORM LAYOUT, CELL BY CELL. a2.21 §4.1: never `strings(section)`. */
{
  const s = section(PERSONS_SECTION_ID) as unknown as { type: string; cols: string[]; rows: { cells: string[]; say?: string }[] };
  if (s.type !== 'tapTable') die(`${PERSONS_SECTION_ID} is a ${s.type} and the six forms are a three-column tapTable.`);
  if (s.cols.length !== 3) die(`${PERSONS_SECTION_ID} has ${s.cols.length} columns.`);
  if (s.rows.length !== 6) die(`${PERSONS_SECTION_ID} has ${s.rows.length} rows and the paradigm is six.`);
  const clitics = ['me', 'te', 'se', 'nous', 'vous', 'se'];
  const subjects = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  for (const [i, row] of s.rows.entries()) {
    if (row.cells[0] !== subjects[i]) die(`${PERSONS_SECTION_ID} row ${i} column 0 is "${row.cells[0]}".`);
    if (row.cells[1] !== clitics[i]) die(`${PERSONS_SECTION_ID} row ${i} column 1 is "${row.cells[1]}" and should be "${clitics[i]}".`);
    if (hasPhrase(row.cells[2]!, clitics[i]!)) die(`${PERSONS_SECTION_ID} row ${i} has the pronoun inside the verb column.`);
  }
  const says = s.rows.map((r) => r.say ?? '');
  for (const id of PARADIGM_IDS) if (!says.includes(fr(id))) die(`${PERSONS_SECTION_ID} does not carry « ${fr(id)} ».`);
}

/* THE MEANING CONTRAST, both halves in one section. */
{
  const ex = (section(CONTRAST_SECTION_ID) as unknown as { examples: { fr: string }[] }).examples.map((e) => e.fr);
  for (const id of [AUDIBLE_CONTRAST.with, AUDIBLE_CONTRAST.without]) {
    if (!ex.includes(fr(id))) die(`${CONTRAST_SECTION_ID} does not carry « ${fr(id)} ».`);
  }
  if (fr(AUDIBLE_CONTRAST.with) === fr(AUDIBLE_CONTRAST.without)) die('the two halves of the contrast are the same string.');
}

/* LAYOUT 3: THE AFFIRMATIVE AND THE NEGATIVE ADJACENT. Found missing by
 * mutation: the batch caught « take the affirmative off the negative pair card »
 * and this layer did not, which is a2.16 §4's shape for the fourth build. */
{
  const cards = (section(NEGATIVE_SECTION_ID) as unknown as { cards: { fr: string }[] }).cards;
  const stop = (s: string) => s.replace(/\.$/u, '');
  const aff = stop(fr('fr.a2.verbes.721'));
  const neg = stop(fr('fr.a2.verbes.728'));
  if (!cards[0]!.fr.includes(aff) || !cards[0]!.fr.includes(neg)) {
    die(`${NEGATIVE_SECTION_ID}'s first card does not put « ${aff} » beside « ${neg} ».`);
  }
  if (!/\bne me lave\b/u.test(neg)) die(`the negative row is « ${neg} » and the whole trap is that ne precedes the pronoun.`);
  if (/\bme ne\b/u.test(neg)) die('the negative row puts ne after the pronoun, which is the error.');
}

/* THE RECIPROCAL: named once, receptive, nowhere else. */
{
  const line = fr(RECIPROCAL_ID);
  const carrying = LESSON.sections.filter((s) => display(s).some((t) => t.includes(line)));
  if (carrying.length !== 1) die(`the reciprocal appears in ${carrying.length} sections (${carrying.map((s) => s.id).join(', ')}).`);
  if (carrying[0]!.id !== LATER_SECTION_ID) die(`the reciprocal is on ${carrying[0]!.id}.`);
  const row = AUTHORED_ITEMS.find((i) => i.id === RECIPROCAL_ID)!;
  for (const d of ['flashcard', 'voiceflash', 'dictation'] as const) {
    if (row.drills.includes(d)) die(`${RECIPROCAL_ID} carries the ${d} drill and the decision is receptive only.`);
  }
}

/* THE NOT-REFLEXIVE GROUP, THE a2.09 CREDIT, AND THE NEIGHBOURS. */
{
  const s = display(section(NOMEANING_SECTION_ID)).join('\n');
  for (const v of ["s'appeler", 'se dépêcher', 'se souvenir']) if (!s.includes(v)) die(`${NOMEANING_SECTION_ID} does not name « ${v} ».`);
  if (!display(section(VOWEL_SECTION_ID)).join('\n').includes(A209_CREDIT)) die(`${VOWEL_SECTION_ID} does not carry the a2.09 credit.`);
  for (const u of ['a2.09', 'a1.25', 'a2.01', 'a2.19', 'a2.23', 'a2.06', 'a2.24', 'sons.01']) {
    if (!ALL_SURFACE.some((t) => namesUnitLabel(t, u))) die(`${u} is named on no learner surface.`);
  }
}

/* NO ROUTINE VOCABULARY SECTION, AND EVERY ROUTINE WORD IS AN IMPORTED ID. */
for (const s of LESSON.sections) if (s.type === 'vocabThemes') die(`${s.id} is a vocabThemes section and a1.25 owns the routine vocabulary.`);
for (const id of ROUTINE_IDS) {
  if (!IMPORTED_IDS.includes(id)) die(`${id} is a routine word and is not imported.`);
  if (AUTHORED_IDS.includes(id)) die(`${id} is a routine word and this build authors it.`);
}
for (const it of AUTHORED_ITEMS) if (it.theme === 'routines') die(`${it.id} is authored into the routines theme.`);

/* THE OBJECT PRONOUNS ARE NOT EXPLAINED, on a production surface. */
{
  const PRODUCTION = new Set([QUIZ_SECTION_ID, DICTATION_SECTION_ID, SPEAK_SECTION_ID, TALK_SECTION_ID, WRAP_SECTION_ID]);
  const prod = LESSON.sections.filter((s) => PRODUCTION.has(s.id!)).flatMap((s) => display(s));
  for (const t of OBJECT_TERMS) for (const s of prod) if (hasPhrase(s, t)) die(`a production surface explains « ${t} ».`);
}

/* THE HOUSE COPY, IN BOTH WALKS, WITH THE -s PLURAL. */
for (const walk of [PROSE_SURFACE, DISPLAY_SURFACE]) {
  for (const s of walk) {
    if (/[—–]/u.test(s)) die(`an em dash reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (/\bhonest/i.test(s)) die(`a banned word reaches a learner surface: « ${s.slice(0, 90)} ».`);
    /* WIDER THAN THE BAND'S. a2.20 found the `..` case on a Pixel 6 and every
     * guard since checks for two dots only. A quoted row landing mid-sentence
     * produces a stop followed by whatever came next, and this build shipped
     * « dimanche., beside » past all four host layers. */
    if (/(?<!\.)\.[.,;:](?!\.)/u.test(s)) die(`a sentence-final stop with punctuation after it reaches a learner surface: « ${s.slice(0, 90)} ».`);
    for (const j of JARGON) {
      if (hasPhrase(s, j) || hasPhrase(s, `${j}s`)) die(`grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 90)} ».`);
    }
  }
}
for (const s of LESSON.sections) {
  const chips = (s as { terms?: string[] }).terms ?? [];
  if (chips.length > 3) die(`${s.id} declares ${chips.length} term chips and the renderer shows three.`);
  for (const c of chips) if (!PRONOMINAUX_TERMS[c]) die(`${s.id} names the undefined term "${c}".`);
  const w = chipRowWidth(chips.map((c) => PRONOMINAUX_TERMS[c]!.term));
  if (w > CHIP_ROW_BUDGET) die(`${s.id}'s chip row is ${w} characters and the budget is ${CHIP_ROW_BUDGET}.`);
}

/* THE SCENE, over THE FRENCH THE SCENE SPEAKS. a2.21 §4.3. */
for (const b of PRON_SCENE_BEATS) {
  if (b.kind === 'bubble' && b.fr.includes('!')) die(`a scene bubble contains « ! »: « ${b.fr} ». It clips on a Pixel 6.`);
  if (b.kind === 'break') {
    if (b.wrong.fr === b.right.fr) die('the scene break shows the same line as wrong and right.');
    if (!b.wrong.fr.includes('Je lève')) die(`the scene break's wrong line is « ${b.wrong.fr} » and the scene is about the dropped pronoun.`);
    if (!b.right.fr.includes('Je me lève')) die(`the scene break's right line is « ${b.right.fr} ».`);
  }
}

/* THE ROLE PLAY'S ALTERNATIVES. a2.21 §4.4: the only thing that checks these is
 * the seed-wide `scenario.logic.test.ts`, which runs AFTER the merge. */
{
  const t = section(TALK_SECTION_ID) as unknown as {
    turns: { ai: string; en: string; user: string; userEn: string; alts?: { fr: string; en: string }[] }[];
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

/* THE trapDrill SHAPE, and the audio step's recording. */
{
  const t = section(WRAP_SECTION_ID) as unknown as {
    steps?: { kind: string; gate?: boolean }[]; swipe?: boolean; size?: string;
    audio?: { recordingId?: string }; cards: { fr: string }[];
  };
  if ((t.steps ?? []).map((s) => s.kind).join('>') !== 'rule>cards>audio>drill') die('the trapDrill does not walk rule, cards, audio, drill.');
  if (t.swipe !== true) die('the trapDrill does not set swipe.');
  if (t.size) die('the trapDrill carries a size.');
  if (!(t.steps ?? []).some((s) => s.kind === 'drill' && s.gate === true)) die('the trapDrill step is not gated.');
  const rec = (LESSON.audio?.recorded ?? []).find((r) => r.id === t.audio?.recordingId);
  if (!rec) die(`the trapDrill names an undeclared recording.`);
  for (const c of t.cards) if (!(rec!.clipIds ?? []).includes(c.fr)) die(`the trapDrill's recording does not contain « ${c.fr} ».`);
}

/* THE CROSS-LESSON QUOTES, AS LITERALS. a2.21 §8, and found here by mutation
 * for the fifth time in this band: comparing a quoted line against the constant
 * the content is built from renames both sides. */
{
  const A201 = 'Four of the six forms sound the same, so the pronoun carries the person.';
  const A209 = 'The spelling changes so the sound does not.';
  const A125 = 'What the small word does across every other person is a lesson of its own and it is a whole band from here.';
  if (!ALL_SURFACE_RAW.some((s) => s.includes(A201))) die("a2.01's reframe is not quoted verbatim anywhere.");
  if (!ALL_SURFACE_RAW.some((s) => s.includes(A209))) die("a2.09's reframe is not quoted verbatim anywhere.");
  if (!ALL_SURFACE_RAW.some((s) => s.includes(A125))) die("a1.25's hand-off sentence is not quoted verbatim anywhere.");
}

/* TRANCHES. Found missing by mutation: the batch caught « release an item by
 * two tranches » and this layer did not. */
{
  const tranche = (LESSON.deckTranche ?? []).flat();
  if (new Set(tranche).size !== tranche.length) die('an item is released by two tranches.');
  if ((LESSON.deckTranche ?? []).length !== EXPECTED_ACTS) die('there is not one tranche per act.');
  const owned = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
  for (const id of owned) if (!tranche.includes(id)) die(`${id} is owned and released by no tranche.`);
  for (const id of tranche) if (!owned.has(id)) die(`a tranche releases ${id}, which this build neither authors nor imports.`);
}

/** Every multi-word string a free-text question may legitimately accept. */
const ANSWERABLE = new Set<string>([
  ...AUTHORED_ITEMS.map((i) => i.fr),
  'Je me lève à sept heures.',
]);

/* THE QUIZ. */
const qs = quizQuestions(section(QUIZ_SECTION_ID) as Parameters<typeof quizQuestions>[0]);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions and EXPECTED_QUESTIONS is ${EXPECTED_QUESTIONS}.`);
{
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq.`);
  for (const q of qs) {
    if (!q.why) die(`a question has no why: ${q.q}`);
    if (!q.ref || !LESSON.sections.some((s) => s.id === q.ref)) die(`a question refs ${q.ref}, which is not a section.`);
    /* THE TAUTOLOGY THE WHOLE BAND CARRIES. `matchesAccept(a, q.accept)` for
     * every `a` IN `q.accept` asks whether the list accepts itself, which cannot
     * fail. Found by mutation here. The check with content is that a
     * multi-word answer is a sentence this lesson owns. */
    if (q.accept) {
      for (const a of q.accept) {
        if (!matchesAccept(a, q.accept)) die(`« ${a} » is not accepted by its own accept list.`);
        if (/\s/u.test(a) && !ANSWERABLE.has(a)) {
          die(`« ${a} » is offered as a free-text answer and is not a sentence this lesson owns.`);
        }
      }
      const shown = (q as { answer?: string }).answer;
      if (shown && !matchesAccept(shown, q.accept)) die(`the displayed answer « ${shown} » is not accepted.`);
    }
    if (q.format === 'listenChoose' && q.opts) {
      for (const g of HOMOPHONE_GROUPS) {
        if (q.opts.filter((o) => g.includes(o)).length > 1) die('an ear question offers two options that are one sound.');
      }
    }
  }
}

/* ─── The items: authored, then carried ────────────────────────────────────*/

/** THE ORDER THE DATABASE ACTUALLY HOLDS, WHICH IS INSERTION ORDER.
 *
 * MEASURED AFTER THE v43 PUBLISH. a2.12's finding is that sorting `drills` as
 * STRINGS ships a different order from the database, and the fix the band
 * adopted was to sort by `DRILL_KINDS` declaration order instead. **That is
 * still a sort, and the database does not sort at all**: `content_items.drills`
 * comes back in the order it was written, and `content:publish` regenerates the
 * seed with that order verbatim.
 *
 * So this merge was rewriting 29 rows into an order the database did not hold,
 * and the next publish silently corrected all 29 back. Harmless in content
 * terms — membership never changed — and it made every publish after a merge
 * show a spurious diff.
 *
 * The order is therefore PRESERVED rather than imposed. `DRILL_KINDS` is still
 * imported, to validate membership rather than to reorder.
 *
 * EVERY MERGE IN THIS BAND SORTS HERE AND SHOULD NOT. */
const drillOrder = (ds: readonly string[]): string[] => {
  for (const d of ds) {
    if (!DRILL_KINDS.includes(d as never)) throw new Error(`unknown drill kind "${d}"`);
  }
  return [...ds];
};

const itemsById = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;

for (const raw of AUTHORED_ITEMS) {
  const it: Item = { ...raw, drills: drillOrder(raw.drills) as never };
  const issues = validateItem(it);
  if (issues.length) die(`${it.id} does not validate:\n${formatIssues(issues)}`);
  if (it.theme !== THEME) die(`${it.id} is in theme "${it.theme}".`);
  if (!it.respell) die(`${it.id} has no respelling.`);
  const re = it.respell ?? '';
  if (hasPlainNasalFor(it.fr, re)) die(`${it.id} « ${it.fr} » [${re}] closes a nasal with a plain n or m.`);
  if ((it as { gender?: string }).gender) die(`${it.id} carries a gender.`);
  if (itemsById.has(it.id)) updatedItems += 1; else added += 1;
  itemsById.set(it.id, it);
}

/* THE CARRY. Every import must BE in the manifest (a2.20's hole 1), or the
 * manifest's gender and respelling refusals never ran on it. */
const CARRIED: Item[] = [];
let carriedNew = 0;
for (const im of IMPORTED) {
  const row = PRONOMINAUX_IMPORT_ROWS[im.id];
  if (!row) die(`${im.id} is declared in IMPORTED and is not in the manifest. Re-run scripts/_a222_manifest.ts.`);
  if (row.fr !== im.fr) die(`${im.id} says fr="${row.fr}" and the corpus file claims "${im.fr}".`);
  if ((row as { gender?: string }).gender) die(`${im.id} carries a gender and the carry would put it in a1.03's population.`);
  const it: Item = { ...row, drills: drillOrder(row.drills) as never };
  if (!itemsById.has(it.id)) carriedNew += 1;
  itemsById.set(it.id, it);
  CARRIED.push(it);
}

/* THE SURPRISE CHECK. a2.05 §6: the check is the deliverable, not the
 * prediction. Three builds running have got the cut wrong in both directions. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const reallyAbsent = IMPORTED_IDS.filter((id) => !before.has(id)).sort();
  const predicted = [...PREDICTED_ABSENT].sort();
  const missedByPrediction = reallyAbsent.filter((id) => !predicted.includes(id));
  const wronglyPredicted = predicted.filter((id) => !reallyAbsent.includes(id));
  console.log(`  seed cut      predicted ${predicted.length} absent, measured ${reallyAbsent.length}`);
  if (missedByPrediction.length) console.log(`    NOT PREDICTED and absent: ${missedByPrediction.join(', ')}`);
  if (wronglyPredicted.length) console.log(`    predicted absent and PRESENT: ${wronglyPredicted.join(', ')}`);
  if (!missedByPrediction.length && !wronglyPredicted.length) console.log('    the prediction held exactly, which is the first time in four builds');
}

/* ─── Post-merge invariants ────────────────────────────────────────────────*/

{
  /* EVERY ITEM THE LESSON NAMES RESOLVES IN THE SEED. */
  for (const id of PRON_ITEM_IDS) if (!itemsById.has(id)) die(`a section names ${id}, which is not in the merged seed.`);
  for (const id of LESSON.itemIds ?? []) if (!itemsById.has(id)) die(`lesson.itemIds holds ${id}, which is not in the merged seed.`);
  /* THE DICTÉE, THROUGH THE REAL dicteeMode. */
  for (const id of PRON_DICTEE_IDS) {
    const row = itemsById.get(id);
    if (!row) die(`the dictée targets ${id}, which is not in the seed.`);
    if (dicteeMode(row!.fr) !== 'letters') die(`the dictée targets « ${row!.fr} », which dicteeMode puts in WORD mode.`);
    if (!row!.drills.includes('dictation')) die(`${id} is a dictée target with no dictation drill.`);
  }
  /* NO DUPLICATE fr INSIDE THE THEME, computed the way flashhub-coverage does. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = [...itemsById.values()].filter((i) => i.theme === THEME && i.kind !== 'sentence');
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  if (dupes.length) die(`${dupes.length} duplicate fr inside ${THEME}: ${dupes.slice(0, 5).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; ')}`);
}

/* a1.03's ENDING POPULATION, MEASURED OFF THE SEED. This is the half the batch
 * cannot do, because a CARRY adds a row the database already had. */
{
  const popAfter = endingPopulation([...itemsById.values()] as never).length;
  if (A103_SEED_POPULATION !== popAfter) {
    die(`this merge moves a1.03's ending population from ${A103_SEED_POPULATION} to ${popAfter}. Invariants §5: withdraw rather than argue.`);
  }
  console.log(`  a1.03         ending population unchanged at ${A103_SEED_POPULATION} rows`);
}

const seedUnit = seed.units.find((u) => u.id === UNIT_ID);
if (!seedUnit) die(`${UNIT_ID} is not in the seed.`);
const unit: Unit = seedUnit!;
for (const k of ['seq', 'title', 'sub', 'canDo'] as const) {
  if (String((unit as unknown as Record<string, unknown>)[k]) !== String(UNIT[k])) {
    die(`the seed's unit ${k} is « ${String((unit as unknown as Record<string, unknown>)[k])} » and the corpus file claims « ${String(UNIT[k])} ».`);
  }
}
const nextUnit: Unit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

const out: Seed = {
  ...seed,
  items: [...itemsById.values()],
  lessons: [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON],
  units: seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u)),
};

/* THE DENSITY VALIDATOR, over the MERGED item set. */
{
  const dens = validateDensity(LESSON, new Set(out.items.map((i) => i.id)));
  if (dens.length) die(`the lesson fails density against the merged seed:\n${formatDensity(dens)}`);
}

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
  + '\n    ZERO headwords authored, ZERO gendered rows, ZERO rows in the routines theme.'
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${new Set(CARRIED.map((r) => r.theme)).size} themes`
  + `\n  0 repaired, 0 supplied, ${IMPORTED.length} imports declared, ${READ_NOT_IMPORTED.length} refused`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${(LESSON.itemIds ?? []).length} items`
  + `\n  the Owns ${OWNS_SECTIONS} sections against the paradigm's ${PARADIGM_SECTIONS}`
  + `\n  dictée: ${PRON_DICTEE_IDS.length} targets, all LETTERS`
  + `\n  the reciprocal: named once, on ${LATER_SECTION_ID}, receptive only`,
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
console.log(`  itemIds resolved: ${PRON_ITEM_IDS.length}\n`);
