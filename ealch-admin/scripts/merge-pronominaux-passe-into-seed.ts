/* Merges a2.23.l1 « Pronominaux au passé composé » into
 * ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-pronominaux-passe-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-pronominaux-passe-into-seed.ts
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
 * imported rows. THE PREDICTION IS THAT THREE ARE ABSENT — the two
 * `rp-recits-temps` agreements and the published avoir sentence the scene opens
 * on — and a2.05 §6, a2.20, a2.21 and a2.22 all mispredicted their own cut, in
 * both directions, four builds running. So the prediction is PRINTED and the
 * SURPRISE CHECK is the deliverable: whatever the real figure is, it is measured
 * here and reported, and every one of the twenty is carried regardless.
 *
 * `fr.a1.rp-recits-temps.066` matters most. « Ce matin, j'ai lavé la voiture. »
 * is the sentence the opening scene speaks and the one the whole Owns is set
 * against, and a lesson whose itemIds resolve to nothing renders empty cards.
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
 * by the merge; a2.05, a2.20, a2.21 and a2.22 each found more, all in the merge.
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
 *   6  the slot diagram is checked cell by cell, never `strings(section)`;
 *   7  the free-text answers are checked for CONTENT, not against themselves
 *      (a2.22 §1: the band's version of that guard is a tautology).
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
  AUTHORED_IDS, AUTHORED_ITEMS, AVOIR_MUST_FIRE, AVOIR_MUST_NOT_FIRE,
  AVOIR_PAIR, BUILT_FORMS, CELL_IDS, CHIP_ROW_BUDGET, EXPECTED_ACTS,
  EXPECTED_AUTHORED, EXPECTED_IMPORTED, EXPECTED_QUESTIONS, EXPECTED_SECTIONS,
  FALSE_POSITIVES, FLIP_PAIRS, HOMOPHONE_GROUPS, IMPERFECT_MARKERS, IMPORTED,
  IMPORTED_IDS, JARGON, LESSON_ID, OBJECT_CLAIM, OBJECT_PAIR, OBJECT_TERMS,
  OWNS_SECTIONS, PARADIGM_SECTIONS, PERSON_IDS, READ_NOT_IMPORTED,
  RECIPROCAL_MARKERS, RECIPROCAL_MUST_FIRE, RECIPROCAL_MUST_NOT_FIRE, REFRAME,
  SLOT_CELL_MAX, TITLE_MUST_CLIP, TITLE_MUST_FIT, TITLE_WIDTH_MAX, titleWidth,
  REFRAME_COUNT, ROUTINE_IDS, SLOTS, SLOT_SENTENCE, THEME, UNIT, fr,
} from './data/pronominaux-passe-corpus.ts';
import { PRONOMINAUX_PASSE_TERMS, chipRowWidth } from './data/pronominaux-passe-terms.ts';
import { PRONOMINAUX_PASSE_IMPORT_ROWS } from './data/pronominaux-passe-rows.gen.ts';
import {
  AGREEMENT_SECTION_ID, ASSEMBLY_SECTION_ID, DICTATION_SECTION_ID,
  ERRORS_SECTION_ID, FLIP_SECTION_ID, LESSON as PP_LESSON,
  NEGATIVE_SECTION_ID, NEWVERBS_SECTION_ID, OBJECT_SECTION_ID,
  OWNS_SECTION_IDS, PARADIGM_SECTION_IDS, PERSONS_SECTION_ID, PP_ACTS,
  PP_DICTEE_IDS, PP_DRILLS, PP_ITEM_IDS, PP_SCENE_BEATS, PP_SHEETS,
  PP_SPEAK_IDS, QUIZ_SECTION_ID, SLOTS_SECTION_ID, SPEAK_SECTION_ID,
  TALK_SECTION_ID, WRAP_SECTION_ID,
} from './data/pronominaux-passe-lesson.ts';

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] } & Record<string, unknown>;

const DRY_RUN = process.argv.includes('--dry-run');
const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const LESSON: Lesson = PP_LESSON;
const UNIT_ID = UNIT.id;

/* THE SEED CUT PREDICTION. Printed, and then MEASURED. a2.05 §6: predict
 * nothing about the cut, measure it. Four builds running have got it wrong. */
const PREDICTED_ABSENT: readonly string[] = [
  'fr.a1.rp-recits-temps.180',
  'fr.a1.rp-recits-temps.199',
  'fr.a1.rp-recits-temps.066',
];

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const UNITS_BEFORE = seed.units.length;
const SEED_VERSION_BEFORE = seed.version;

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
/** `cards` is NOT here. a2.22 §2: it holds the entire learner surface of a
 *  cardDeck, a flashcards section, a reviewDeck and a trapDrill. */
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
/** NOT deduped. a2.22 §3: counting over a Set under-reports every short line. */
const ALL_SURFACE_RAW = [...DISPLAY_SURFACE];

const bounded = (needle: string): RegExp =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string): boolean => bounded(needle).test(hay);

const section = (id: string) => {
  const s = LESSON.sections.find((x) => x.id === id);
  if (!s) die(`the lesson has no section ${id}.`);
  return s!;
};

const WRONG_FORM_SECTIONS = new Set([WRAP_SECTION_ID, ERRORS_SECTION_ID, QUIZ_SECTION_ID]);

/* ─── The lesson, through the real validators ──────────────────────────────*/

{
  const issues = validateLesson(LESSON);
  if (issues.length) die(`the lesson does not validate:\n${formatIssues(issues)}`);
}
if (LESSON.id !== LESSON_ID) die(`the lesson id is ${LESSON.id}.`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections and EXPECTED_SECTIONS is ${EXPECTED_SECTIONS}.`);
if (PP_ACTS.length !== EXPECTED_ACTS) die(`${PP_ACTS.length} acts and EXPECTED_ACTS is ${EXPECTED_ACTS}.`);
if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`${AUTHORED_ITEMS.length} authored rows and EXPECTED_AUTHORED is ${EXPECTED_AUTHORED}.`);
if (IMPORTED.length !== EXPECTED_IMPORTED) die(`${IMPORTED.length} imports and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
if (OWNS_SECTION_IDS.length !== OWNS_SECTIONS) die(`the Owns act has ${OWNS_SECTION_IDS.length} sections and OWNS_SECTIONS is ${OWNS_SECTIONS}.`);
if (PARADIGM_SECTION_IDS.length !== PARADIGM_SECTIONS) die(`the positions act has ${PARADIGM_SECTION_IDS.length} sections.`);
if (OWNS_SECTIONS <= PARADIGM_SECTIONS) die('the positions act has at least as many sections as the Owns.');

/* ─── The content guards, all of them, phrased as LITERALS ─────────────────*/

/* THE REFRAME, against an explicit constant. */
{
  const n = ALL_SURFACE_RAW.filter((s) => s.includes(REFRAME)).length;
  if (n !== REFRAME_COUNT) die(`the reframe is authored ${n} times and REFRAME_COUNT is ${REFRAME_COUNT}.`);
  if (LESSON.reframe !== 'If the little word is there, the first word is être.') {
    die(`Lesson.reframe is « ${LESSON.reframe} ». The literal is on the guard side so a rewording of the constant cannot rename both sides.`);
  }
}

/* THE INHERITED LINES, AS LITERALS. a2.21 §8. */
{
  const LIT_AGREEMENT = 'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';
  const LIT_A201 = 'Four of the six forms sound the same, so the pronoun carries the person.';
  const LIT_A222 = 'The pronoun changes with the subject, because it is the subject.';
  const LIT_A118 = 'Wrap the verb, then ask what the verb was.';
  const LIT_A219 = 'Wrap the verb that changed, not the one carrying the meaning.';
  const LIT_EXT = 'Both words changed for the subject, so both go inside the wrap.';
  const LIT_OUTSIDE = 'The wrap goes round the little word and the first word. The second word sits outside it.';
  /* ADDED AFTER MUTATION. This was the one inherited line neither layer held as
   * a literal, so paraphrasing the constant renamed both sides and walked past
   * both. a2.18 §6 and a2.21 §4.2 for the sixth time in this band. */
  const LIT_PRESENT = 'In the present nothing on the end of the verb knows who the subject is. Only the extra word changes.';

  const n = (lit: string) => ALL_SURFACE_RAW.filter((s) => s.includes(lit)).length;
  if (n(LIT_PRESENT) < 1) die("a2.22's present-tense framing is quoted nowhere, and it is the sentence this lesson changes.");
  if (n(LIT_AGREEMENT) < 4) die(`a2.21's agreement rule is quoted ${n(LIT_AGREEMENT)} times and it is this lesson's inherited contract.`);
  if (n(LIT_A201) < 2) die(`a2.01's reframe is quoted ${n(LIT_A201)} times.`);
  if (n(LIT_A219) < 3) die(`a2.19's negation line is quoted ${n(LIT_A219)} times.`);
  if (n(LIT_A118) < 1) die("a1.18's negation line is quoted nowhere.");
  if (n(LIT_EXT) < 3) die(`a2.22's extension is quoted ${n(LIT_EXT)} times.`);
  if (n(LIT_OUTSIDE) < 4) die(`the third negation sentence is authored ${n(LIT_OUTSIDE)} times.`);

  /* AND THE NEIGHBOURS AS SHIPPED STILL CARRY WHAT THIS LESSON QUOTES. a2.21 §8
   * measured that a quoted reframe compared against its own constant renames
   * both sides, and that the only thing that caught it was reading the seed. */
  const carries = (id: string, lit: string): boolean => {
    const n2 = seed.lessons.find((l) => l.id === id);
    if (!n2) return true;
    return [...display(n2.sections), ...display(n2.sheets ?? []), ...display(n2.terms ?? {}), n2.reframe ?? ''].some((s) => s.includes(lit));
  };
  if (!carries('a2.21.l1', LIT_AGREEMENT)) die('a2.21 as shipped does not carry the agreement rule this lesson quotes.');
  if (!carries('a2.01.l1', LIT_A201)) die('a2.01 as shipped does not carry the reframe this lesson quotes.');
  if (!carries('a2.22.l1', LIT_A222)) die('a2.22 as shipped does not carry the reframe this lesson quotes.');
  if (!carries('a2.19.l1', LIT_A219)) die('a2.19 as shipped does not carry the negation line this lesson quotes.');
  if (!carries('a1.18.l1', LIT_A118)) die('a1.18 as shipped does not carry the negation line this lesson quotes.');
  if (!carries('a2.22.l1', LIT_EXT)) die('a2.22 as shipped does not carry the extension this lesson quotes.');
  /* AND THE TWO NEGATION STRINGS ARE STILL TWO. §2: the arc holds a1.18's and
   * a2.19's, and neither has drifted. This is the assertion the brief asked the
   * fifth lesson to make, and it is the negative half that matters. */
  const a118 = seed.lessons.find((l) => l.id === 'a1.18.l1');
  const a219 = seed.lessons.find((l) => l.id === 'a2.19.l1');
  if (a118 && a118.reframe !== LIT_A118) die(`a1.18's reframe is « ${a118.reframe} » and this lesson quotes « ${LIT_A118} ».`);
  if (a219 && a219.reframe !== LIT_A219) die(`a2.19's reframe is « ${a219.reframe} » and this lesson quotes « ${LIT_A219} ».`);
  if (String(LIT_A118) === String(LIT_A219)) die('the two negation strings are now identical, which would mean somebody reworded one of them.');
}

/* AVOIR IS NEVER THE FIRST WORD OF A REFLEXIVE, and the guard is proved to fire
 * and proved not to. */
{
  const CLITIC = "(me|m'|m’|te|t'|t’|se|s'|s’|nous|vous)";
  const AVOIR = '(ai|as|a|avons|avez|ont)';
  const RE = new RegExp(`(?<![\\p{L}\\p{N}-])(je|j'|j’|tu|il|elle|on|nous|vous|ils|elles)\\s*${CLITIC}\\s*${AVOIR}(?![\\p{L}\\p{N}'’-])`, 'iu');
  const bad = (s: string): boolean => RE.test(s) || BUILT_FORMS.some((b) => hasPhrase(s, b));
  for (const s of AVOIR_MUST_FIRE) if (!bad(s)) die(`the avoir guard does not fire on « ${s} ».`);
  for (const s of AVOIR_MUST_NOT_FIRE) if (bad(s)) die(`the avoir guard fires on legitimate content: « ${s} ».`);
  for (const s of LESSON.sections) {
    if (WRONG_FORM_SECTIONS.has(s.id!)) continue;
    for (const t of display(s)) if (bad(t)) die(`${s.id} uses avoir with a little word: « ${t.slice(0, 110)} ».`);
  }
  for (const it of AUTHORED_ITEMS) if (bad(it.fr)) die(`${it.id} « ${it.fr} » puts avoir in front of a little word.`);
  for (const im of IMPORTED) if (bad(im.fr)) die(`${im.id} « ${im.fr} » puts avoir in front of a little word.`);
}

/* THE SLOT DIAGRAM, CELL BY CELL. a2.21 §4.1: never `strings(section)`. */
{
  const s = section(SLOTS_SECTION_ID) as unknown as { type: string; cols: string[]; rows: { cells: string[]; say?: string }[] };
  if (s.type !== 'tapTable') die(`${SLOTS_SECTION_ID} is a ${s.type} and the slot diagram is a three-column tapTable.`);
  if (s.cols.length !== 3) die(`${SLOTS_SECTION_ID} has ${s.cols.length} columns.`);
  if (s.rows.length !== 6) die(`${SLOTS_SECTION_ID} has ${s.rows.length} rows and the diagram is six positions.`);
  for (const [i, slot] of SLOTS.entries()) {
    if (s.rows[i]!.cells[1] !== slot.word) die(`${SLOTS_SECTION_ID} row ${i} column 1 is "${s.rows[i]!.cells[1]}" and position ${i} is "${slot.word}".`);
    if (s.rows[i]!.cells[2] !== slot.job) die(`${SLOTS_SECTION_ID} row ${i} does not say what "${slot.word}" is doing.`);
    if (s.rows[i]!.say !== SLOT_SENTENCE) die(`${SLOTS_SECTION_ID} row ${i} does not speak the whole sentence.`);
  }
  if (`${SLOTS.map((x) => x.word).join(' ')}.` !== SLOT_SENTENCE) die('the six positions do not read as the slot sentence.');
  if (!/\bne\b/u.test(SLOT_SENTENCE) || !/\bpas\b/u.test(SLOT_SENTENCE)) die('the slot diagram is not built from a full negative.');
  /* THE CELL BUDGET, WHICH IS WHY v2 EXISTS. v1 shipped four cells over 44
   * characters; the third column is ~11 characters wide on a Pixel 6, so the
   * six-row diagram spanned two screens. Height is invisible to every other
   * assertion in all three layers. */
  for (const [i, slot] of SLOTS.entries()) {
    if (slot.job.length > SLOT_CELL_MAX) {
      die(`slot ${i} « ${slot.word} » has a ${slot.job.length}-character cell and the budget is ${SLOT_CELL_MAX}.`);
    }
    if (!slot.credit || slot.credit.length < 20) die(`slot ${i} « ${slot.word} » has no credit.`);
  }
}

/* THE MISSION-ROW TITLE BUDGET, AND IT IS A WIDTH. THE SECOND REASON v2 EXISTS.
 * a2.14 §13 said this and v1 carried the number as a character count. */
{
  for (const s of TITLE_MUST_FIT) {
    if (titleWidth(s) > TITLE_WIDTH_MAX) die(`the title model says « ${s} » clips and it was MEASURED FITTING on a Pixel 6.`);
  }
  for (const s of TITLE_MUST_CLIP) {
    if (titleWidth(s) <= TITLE_WIDTH_MAX) die(`the title model says « ${s} » fits and it was MEASURED CLIPPING on a Pixel 6.`);
  }
  for (const s of LESSON.sections) {
    const t = s.title ?? '';
    if (titleWidth(t) > TITLE_WIDTH_MAX) {
      die(`${s.id}'s title « ${t} » is ${titleWidth(t)} em and the mission row cuts at ${TITLE_WIDTH_MAX}. It will ship ellipsised.`);
    }
  }
}

/* THE AUXILIARY FLIP, both halves on one card. THE OWNS. */
{
  const cards = (section(FLIP_SECTION_ID) as unknown as { cards: { fr: string }[] }).cards;
  const stop = (x: string) => x.replace(/\.$/u, '');
  for (const [i, [a, e]] of FLIP_PAIRS.entries()) {
    if (fr(a) === fr(e)) die(`flip pair ${i} is the same string twice.`);
    if (cards.filter((c) => c.fr.includes(stop(fr(a))) && c.fr.includes(stop(fr(e)))).length !== 1) {
      die(`${FLIP_SECTION_ID} does not put « ${stop(fr(a))} » beside « ${stop(fr(e))} » on one card.`);
    }
  }
}

/* THE EXCEPTION PAIR, both halves on one card, and the reason never given. */
{
  const cards = (section(OBJECT_SECTION_ID) as unknown as { cards: { fr: string }[] }).cards;
  const stop = (x: string) => x.replace(/\.$/u, '');
  for (const [i, [agrees, doesNot]] of OBJECT_PAIR.entries()) {
    if (fr(agrees) === fr(doesNot)) die(`exception pair ${i} is the same string twice.`);
    if (cards.filter((c) => c.fr.includes(stop(fr(agrees))) && c.fr.includes(stop(fr(doesNot)))).length !== 1) {
      die(`${OBJECT_SECTION_ID} does not put « ${stop(fr(agrees))} » beside « ${stop(fr(doesNot))} » on one card.`);
    }
  }
  if (!ALL_SURFACE.some((t) => t.includes(OBJECT_CLAIM))) die('the exception is named nowhere.');
  /* FOUND BY MUTATION, AND IT IS a2.16 §4's SHAPE FOR THE FIFTH BUILD RUNNING:
   * the batch caught « give the exception a dictation drill » and « stop naming
   * a2.24 » and this layer did not. It matters procedurally, because the merge
   * is the layer that runs when somebody re-merges without re-applying. */
  for (const id of ['fr.a2.verbes.807', 'fr.a2.verbes.808']) {
    const row = AUTHORED_ITEMS.find((i) => i.id === id);
    if (!row) die(`${id} is the exception and this build does not author it.`);
    for (const d of ['flashcard', 'voiceflash', 'dictation'] as const) {
      if (row!.drills.includes(d)) die(`${id} carries the ${d} drill and the exception is receptive only.`);
    }
    if (PP_DICTEE_IDS.includes(id) || PP_SPEAK_IDS.includes(id)) die(`${id} is a dictée or speak target and the exception is receptive only.`);
  }
  /* NAMING A UNIT NEEDS THE OPPOSITE BOUNDARY. Corrections §14.3 records the
   * apostrophe missing from the LEFT; the mirror on the RIGHT makes
   * `hasPhrase(_, 'a2.24')` blind to « a2.24's », which is how this band names a
   * neighbour almost every time. Measured, and found by this lesson's own test. */
  const namesUnit = (hay: string, unit: string): boolean =>
    new RegExp(`(?<![\\p{L}\\p{N}'’-])${unit.replace(/\./gu, '\\.')}(?![\\p{L}\\p{N}-])`, 'iu').test(hay);
  if (!ALL_SURFACE.some((s) => namesUnit(s, 'a2.24'))) die('a2.24 is named on no screen, so the exception is left to a lesson the learner is never pointed at.');
  for (const t of OBJECT_TERMS) {
    for (const s of ALL_SURFACE) if (hasPhrase(s, t)) die(`the object system is explained: « ${t} » in « ${s.slice(0, 90)} ». a2.24 owns the reason.`);
  }
  for (const s of ALL_SURFACE) {
    for (const b of ["s'est lavée les mains", "s'est brossée les dents", "me suis lavée les mains"]) {
      if (s.toLowerCase().includes(b.toLowerCase())) die(`the exception is agreed on a learner surface: « ${b} ».`);
    }
  }
  /* AND NO TYPED QUESTION ASKS FOR ONE. Recognition is testable; production is
   * not, and `accept` is where a quiz actually produces. */
  for (const q of quizQuestions(section(QUIZ_SECTION_ID) as Parameters<typeof quizQuestions>[0])) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    for (const a of q.accept ?? []) {
      for (const id of ['fr.a2.verbes.807', 'fr.a2.verbes.808']) {
        if (a.includes(fr(id).replace(/\.$/u, ''))) die(`a typed question accepts the exception « ${a} ».`);
      }
    }
  }
}

/* THE FOUR CELLS AND THE SIX PERSONS ARE ON A SCREEN. */
{
  const cellSurface = display(section(AGREEMENT_SECTION_ID)).join('\n');
  for (const id of CELL_IDS) if (!cellSurface.includes(fr(id))) die(`${AGREEMENT_SECTION_ID} does not carry « ${fr(id)} ».`);
  if (!cellSurface.includes(fr(AVOIR_PAIR[0]))) die(`${AGREEMENT_SECTION_ID} does not carry the avoir half.`);
  const personSurface = display(section(PERSONS_SECTION_ID)).join('\n');
  for (const id of PERSON_IDS) if (!personSurface.includes(fr(id).replace(/\.$/u, ''))) die(`${PERSONS_SECTION_ID} does not carry « ${fr(id)} ».`);
}

/* THE RECIPROCAL AND THE IMPERFECT ARE ABSENT, and both lists are walked. */
{
  const fires = (s: string) => RECIPROCAL_MARKERS.some((m) => hasPhrase(s, m));
  for (const s of RECIPROCAL_MUST_FIRE) if (!fires(s)) die(`the reciprocal guard does not fire on « ${s} ».`);
  for (const s of RECIPROCAL_MUST_NOT_FIRE) if (fires(s)) die(`the reciprocal guard fires on legitimate content: « ${s} ».`);
}
for (const s of ALL_SURFACE) {
  for (const m of RECIPROCAL_MARKERS) if (hasPhrase(s, m)) die(`a reciprocal reaches a learner surface: « ${m} » in « ${s.slice(0, 90)} ».`);
  for (const m of IMPERFECT_MARKERS) if (hasPhrase(s, m)) die(`the imperfect reaches a learner surface: « ${m} » in « ${s.slice(0, 90)} ».`);
}

/* THE FALSE POSITIVE, BY NAME. a2.21 §3: asking the checker proves nothing,
 * because the superscript form of a false positive is CLEAN AND WRONG. */
for (const fp of FALSE_POSITIVES) {
  for (const id of fp.ids) {
    const row = AUTHORED_ITEMS.find((i) => i.id === id);
    if (!row) die(`${id} is listed as carrying the « ${fp.word} » false positive and is not authored.`);
    if (!(row!.respell ?? '').includes(fp.fixed)) die(`${id} respells « ${fp.word} » as [${row!.respell}] and the fixed value is « ${fp.fixed} ».`);
    if ((row!.respell ?? '').includes(fp.superscript)) die(`${id} respells « ${fp.word} » with a superscript, which the checker calls clean and which is wrong.`);
  }
}

/* NO ROUTINE VOCABULARY SECTION, AND EVERY ROUTINE WORD IS AN IMPORTED ID. */
for (const s of LESSON.sections) if (s.type === 'vocabThemes') die(`${s.id} is a vocabThemes section and a1.25 owns the routine vocabulary.`);
for (const id of ROUTINE_IDS) {
  if (!IMPORTED_IDS.includes(id)) die(`${id} is a routine word and is not imported.`);
  if (AUTHORED_IDS.includes(id)) die(`${id} is a routine word and this build authors it.`);
}
for (const it of AUTHORED_ITEMS) if (it.theme === 'routines') die(`${it.id} is authored into the routines theme.`);

/* THE HOUSE COPY, IN BOTH WALKS, WITH THE -s PLURAL, AND THE ONE EXEMPTION. */
const TITLE_EXEMPT = LESSON.overview?.titleEn ?? '';
if (TITLE_EXEMPT !== UNIT.title) die(`overview.titleEn is « ${TITLE_EXEMPT} » and content_units holds « ${UNIT.title} ».`);
for (const walk of [PROSE_SURFACE, DISPLAY_SURFACE]) {
  for (const s of walk) {
    if (/[—–]/u.test(s)) die(`an em dash reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (/\bhonest/i.test(s)) die(`a banned word reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (/(?<!\.)\.[.,;:](?!\.)/u.test(s)) die(`a sentence-final stop with punctuation after it reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (s === TITLE_EXEMPT) continue;
    for (const j of JARGON) {
      if (hasPhrase(s, j) || hasPhrase(s, `${j}s`)) die(`grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 90)} ».`);
    }
  }
}
for (const s of LESSON.sections) {
  const chips = (s as { terms?: string[] }).terms ?? [];
  if (chips.length > 3) die(`${s.id} declares ${chips.length} term chips and the renderer shows three.`);
  for (const c of chips) if (!PRONOMINAUX_PASSE_TERMS[c]) die(`${s.id} names the undefined term "${c}".`);
  const w = chipRowWidth(chips.map((c) => PRONOMINAUX_PASSE_TERMS[c]!.term));
  if (w > CHIP_ROW_BUDGET) die(`${s.id}'s chip row is ${w} characters and the budget is ${CHIP_ROW_BUDGET}.`);
}

/* THE SCENE, over THE FRENCH THE SCENE SPEAKS. a2.21 §4.3. */
for (const b of PP_SCENE_BEATS) {
  if (b.kind === 'bubble' && b.fr.includes('!')) die(`a scene bubble contains « ! »: « ${b.fr} ». It clips on a Pixel 6.`);
  if (b.kind === 'break') {
    if (b.wrong.fr === b.right.fr) die('the scene break shows the same line as wrong and right.');
    if (!b.wrong.fr.includes("J'ai levé")) die(`the scene break's wrong line is « ${b.wrong.fr} » and the scene is about reaching for avoir.`);
    if (!b.right.fr.includes('Je me suis levé')) die(`the scene break's right line is « ${b.right.fr} ».`);
  }
}

/* THE ROLE PLAY'S ALTERNATIVES. a2.21 §4.4. */
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
  if (!rec) die('the trapDrill names an undeclared recording.');
  for (const c of t.cards) if (!(rec!.clipIds ?? []).includes(c.fr)) die(`the trapDrill's recording does not contain « ${c.fr} ».`);
  /* FOUND BY MUTATION: the batch caught « take the error off the first card of
   * the trap » and this layer did not. A trap whose first card is correct
   * French is not a trap, it is a fifth example. The literal is on this side. */
  if (t.cards[0]!.fr !== "Je m'ai levé.") {
    die(`the trapDrill opens on « ${t.cards[0]!.fr} » and the error it exists to prevent is « Je m'ai levé. ».`);
  }
}

/* ONE TABLE IN THE FLOW: NONE. ONE IN THE SHEET. */
{
  const inFlow = LESSON.sections.filter((s) => s.type === 'table');
  if (inFlow.length) die(`${inFlow.map((s) => s.id).join(', ')} is a table at layer core.`);
  const inSheets = PP_SHEETS.flatMap((sh) => (sh.sections ?? []).filter((x) => x.type === 'table'));
  if (inSheets.length !== 1) die(`${inSheets.length} tables in the sheet and the brief asks for one.`);
  for (const sh of PP_SHEETS) {
    for (const sec of sh.sections ?? []) {
      if (!['teach', 'letterGrid', 'table'].includes(sec.type)) die(`sheet ${sh.id} holds a ${sec.type} block.`);
    }
  }
  const named = new Set(LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  for (const sh of PP_SHEETS) if (!named.has(sh.id)) die(`sheet ${sh.id} is reachable from no section.`);
}

/* TRANCHES. */
{
  const tranche = (LESSON.deckTranche ?? []).flat();
  if (new Set(tranche).size !== tranche.length) die('an item is released by two tranches.');
  if ((LESSON.deckTranche ?? []).length !== EXPECTED_ACTS) die('there is not one tranche per act.');
  const owned = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
  for (const id of owned) if (!tranche.includes(id)) die(`${id} is owned and released by no tranche.`);
  for (const id of tranche) if (!owned.has(id)) die(`a tranche releases ${id}, which this build neither authors nor imports.`);
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

/** Every multi-word string a free-text question may legitimately accept. a2.22
 *  §1: the band's `matchesAccept(a, q.accept)` guard is a tautology. */
const ANSWERABLE = new Set<string>([...AUTHORED_ITEMS.map((i) => i.fr), 'Je me suis levé.']);

/* THE QUIZ. */
const qs = quizQuestions(section(QUIZ_SECTION_ID) as Parameters<typeof quizQuestions>[0]);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions and EXPECTED_QUESTIONS is ${EXPECTED_QUESTIONS}.`);
{
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq.`);
  let multiWord = 0;
  for (const q of qs) {
    if (!q.why) die(`a question has no why: ${q.q}`);
    if (!q.ref || !LESSON.sections.some((s) => s.id === q.ref)) die(`a question refs ${q.ref}, which is not a section.`);
    if (q.accept) {
      for (const a of q.accept) {
        if (!matchesAccept(a, q.accept)) die(`« ${a} » is not accepted by its own accept list.`);
        if (/\s/u.test(a)) {
          multiWord += 1;
          if (!ANSWERABLE.has(a)) die(`« ${a} » is offered as a free-text answer and is not a sentence this lesson owns.`);
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
  if (multiWord < 12) die(`only ${multiWord} multi-word answers, and typeIn on the whole form is the backbone of this exam.`);
}

/* ─── The items: authored, then carried ────────────────────────────────────*/

const drillOrder = (ds: readonly string[]): string[] =>
  [...ds].sort((a, b) => DRILL_KINDS.indexOf(a as never) - DRILL_KINDS.indexOf(b as never));

const itemsById = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;

for (const raw of AUTHORED_ITEMS) {
  const it: Item = { ...raw, drills: drillOrder(raw.drills) as never };
  const issues = validateItem(it);
  if (issues.length) die(`${it.id} does not validate:\n${formatIssues(issues)}`);
  if (it.theme !== THEME) die(`${it.id} is in theme "${it.theme}".`);
  /* FOUND BY MUTATION: the batch caught « author a headword instead of importing
   * it » and « author a participle as a corpus item » and this layer did not.
   * Corrections §2 and doctrine §E, and a2.05 §4's rule that a row with no
   * whitespace is a bare word whatever its `kind` says. */
  if (it.kind !== 'sentence') die(`${it.id} is kind "${it.kind}". This build authors sentences only; every infinitive is imported and no participle is a corpus item.`);
  if (!/\s/u.test(it.fr)) die(`${it.id} « ${it.fr} » has no whitespace, so it is a headword whatever its kind says.`);
  if (!it.respell) die(`${it.id} has no respelling.`);
  if (hasPlainNasalFor(it.fr, it.respell ?? '')) die(`${it.id} « ${it.fr} » [${it.respell}] closes a nasal with a plain n or m.`);
  if ((it as { gender?: string }).gender) die(`${it.id} carries a gender.`);
  if (itemsById.has(it.id)) updatedItems += 1; else added += 1;
  itemsById.set(it.id, it);
}

/* THE CARRY. Every import must BE in the manifest (a2.20's hole 1), or the
 * manifest's gender and respelling refusals never ran on it. */
const CARRIED: Item[] = [];
let carriedNew = 0;
for (const im of IMPORTED) {
  const row = PRONOMINAUX_PASSE_IMPORT_ROWS[im.id];
  if (!row) die(`${im.id} is declared in IMPORTED and is not in the manifest. Re-run scripts/_a223_manifest.ts.`);
  if (row.fr !== im.fr) die(`${im.id} says fr="${row.fr}" and the corpus file claims "${im.fr}".`);
  if ((row as { gender?: string }).gender) die(`${im.id} carries a gender and the carry would put it in a1.03's population.`);
  /* THE CARRY IS BYTE-FAITHFUL TO THE RECORDED READ, AND drillOrder() IS NOT
   * APPLIED TO IT.
   *
   * FOUND WHILE PREPARING THE COMMIT. The manifest IS a recorded read of
   * Postgres, so `row.drills` already holds exactly what the database holds.
   * Sorting it made the seed disagree with Postgres about a row this build does
   * not own the content of: `fr.a2.corps.001` and `fr.a2.routines.049` are
   * stored « sentence, flashcard, review » and the merge was rewriting them as
   * « flashcard, sentence, review ».
   *
   * a2.12's trap is that the merge must match the database. Re-sorting a row
   * READ FROM the database cannot do that; it can only break it. */
  const it: Item = { ...row };
  if (JSON.stringify(it.drills) !== JSON.stringify(row.drills)) {
    die(`${im.id} is being carried with a different drill order from the recorded read.`);
  }
  if (!itemsById.has(it.id)) carriedNew += 1;
  itemsById.set(it.id, it);
  CARRIED.push(it);
}

/* THE SURPRISE CHECK. a2.05 §6: the check is the deliverable, not the
 * prediction. Four builds running have got the cut wrong in both directions. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const reallyAbsent = IMPORTED_IDS.filter((id) => !before.has(id)).sort();
  const predicted = [...PREDICTED_ABSENT].sort();
  const missed = reallyAbsent.filter((id) => !predicted.includes(id));
  const wrong = predicted.filter((id) => !reallyAbsent.includes(id));
  console.log(`  seed cut      predicted ${predicted.length} absent, measured ${reallyAbsent.length}`);
  if (missed.length) console.log(`    NOT PREDICTED and absent: ${missed.join(', ')}`);
  if (wrong.length) console.log(`    predicted absent and PRESENT: ${wrong.join(', ')}`);
  if (!missed.length && !wrong.length) console.log('    the prediction held exactly');
}

/* ─── Post-merge invariants ────────────────────────────────────────────────*/

{
  for (const id of PP_ITEM_IDS) if (!itemsById.has(id)) die(`a section names ${id}, which is not in the merged seed.`);
  for (const id of LESSON.itemIds ?? []) if (!itemsById.has(id)) die(`lesson.itemIds holds ${id}, which is not in the merged seed.`);
  /* THE DICTÉE, THROUGH THE REAL dicteeMode. */
  for (const id of PP_DICTEE_IDS) {
    const row = itemsById.get(id);
    if (!row) die(`the dictée targets ${id}, which is not in the seed.`);
    if (dicteeMode(row!.fr) !== 'letters') die(`the dictée targets « ${row!.fr} », which dicteeMode puts in WORD mode.`);
    if (!row!.drills.includes('dictation')) die(`${id} is a dictée target with no dictation drill.`);
  }
  for (const id of PP_SPEAK_IDS) {
    const row = itemsById.get(id);
    if (!row) die(`the speak surface names ${id}, which is not in the merged seed.`);
    if (!row!.drills.includes('voiceflash')) die(`${id} is on the speak surface and carries no voiceflash drill.`);
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
/* BOTH PREREQUISITES ARE SHIPPED IN THE SEED TOO, not just in Postgres. The
 * brief says this lesson cannot be built against briefs and this is the seed
 * half of that check. */
for (const p of UNIT.prereqUnitIds) {
  const pu = seed.units.find((u) => u.id === p);
  if (!pu) die(`${p} is a hard prerequisite and is not in the seed.`);
  if (!(pu!.lessonIds ?? []).length) die(`${p} is a hard prerequisite and has no lesson in the seed.`);
  for (const lid of pu!.lessonIds ?? []) {
    if (!seed.lessons.some((l) => l.id === lid)) die(`${p} lists ${lid} and the seed does not hold it.`);
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
if (out.version !== SEED_VERSION_BEFORE) die('seed.version moved. It is the OTA snapshot number and a merge must never touch it.');

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
  + '\n    ZERO headwords authored, ZERO participles as corpus items, ZERO gendered rows, ZERO rows in routines.'
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${new Set(CARRIED.map((r) => r.theme)).size} themes`
  + `\n  0 repaired, 0 supplied, ${IMPORTED.length} imports declared, ${READ_NOT_IMPORTED.length} refused`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${(LESSON.itemIds ?? []).length} items`
  + `\n  the Owns ${OWNS_SECTIONS} sections against the positions' ${PARADIGM_SECTIONS}`
  + `\n  dictée: ${PP_DICTEE_IDS.length} targets, all LETTERS`
  + '\n  the exception: named receptively on one screen, recognised in the exam, produced nowhere'
  + '\n  the reciprocal: absent from every surface',
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
console.log(`  itemIds resolved: ${PP_ITEM_IDS.length}\n`);
