/* a2.24.l1 « Pronoms d'objet indirect » — corpus, lesson and terms, into Postgres.
 *
 *     pnpm content:pronoms-indirect -- --dry-run
 *     pnpm content:pronoms-indirect
 *
 * Everything is validated BEFORE the database is touched, the write is one
 * transaction, and the whole thing is idempotent by id.
 *
 * ── THE FOUR HOLES IN THE GUARDS THIS FILE INHERITS, AND WHAT IT DOES ──────
 *
 * §9  THE JARGON WALK DOES NOT READ `intro` OR `overview`. Both are drawn on
 *     the lesson overview card AND the lesson cover. `surfaceOf()` reads them,
 *     and `intro` carries its own assertion so a later author who trims it back
 *     fails with the reason.
 * §13 `prose()` DROPS `sub`, WHICH HOLDS PROSE ON A cardDeck CARD. Every
 *     house-copy and jargon check runs over a `display()` walk as well. THIS
 *     LESSON IS THE WORST CASE IN THE BAND FOR IT: its REQUIRED LAYOUT 1 is a
 *     `fr`/`sub` pair — the direct set on one row and the indirect set on the
 *     next — so a guard on `prose()` alone would not see half of the layout it
 *     is supposed to be asserting.
 * §13 `hasPhrase` IS BOUNDARY-EXACT, so a list holding `clitic` misses
 *     `clitics`. Every countable JARGON entry carries its -s plural and a guard
 *     checks that it does. a2.06 §7.2 measured that the rule cannot be applied
 *     to every entry — « accusatives » is not English — so there are two lists
 *     and a second guard refuses a countable noun parked on the adjective one.
 * §14.3 THE HOUSE BOUNDARY EXCLUDES THE APOSTROPHE. Dropped from the LEFT and
 *     kept on the right. It bites this build by name: the unit's own `sub` is
 *     « Pronoms d'objet indirect » and the probe that produced the brief
 *     demonstrated the bug by reporting NO for `objet` against it.
 *
 * ── AND THE TWO SEED-WIDE CONTRACTS NO DOCUMENT IN THIS BAND MENTIONED ─────
 *
 * `scenario.logic.test.ts` requires two `alts` and a `userEn` on every role-play
 *   turn. Asserted here rather than discovered by the suite.
 * `lesson-contract.test.ts` requires every A2 `trapDrill` to walk
 *   rule > cards > audio > drill, with `swipe`, an `audio` spec, a `say` and a
 *   GATED drill step, and `size` comes OFF a stepped one. Asserted here too.
 */
import './env';
import { Pool } from 'pg';
import {
  DRILL_KINDS, canonicalJson, formatIssues, quizQuestions, validateItem, validateLesson,
} from '../../ealch-v2/src/content/schema.ts';
import type { Item, Lesson } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept, fold } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  A, A117_TEST, A118_REFRAME, A206_FRAME_ID, A223_POINTER_TAIL, A223_ROW_ID,
  A_FRAMING, A_VERBS, A_VERBS_MARKED, A_VERBS_SILENT, ACCENT_LIMIT, AUTHORED_IDS,
  DICTEE_MAX_LETTERS, DIRECT_SET, DIRECT_UNIT, ENDING_OWNER, ENDING_RULE,
  EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_IMPORTED, EXPECTED_QUESTIONS,
  EXPECTED_SECTIONS, FALSE_POSITIVES, GENDER_LOST, HOMOPHONE_FORMS, ID_FIRST,
  ID_LAST, IMPORTED, IMPORTED_PHRASES, INDIRECT_SET, JARGON, JARGON_ADJECTIVES,
  JARGON_NOUNS, LEUR_RULE, NEGATION_EXTENSION, NEGATION_RULE, OWNS_SECTION_COUNT,
  PARADIGM_SECTION_COUNT, PLAIN_PHRASE, PLAIN_TARGET, POSITION_RULE,
  POSITION_RULE_COUNT, POSSESSIVE_UNIT, REFLEXIVE_PAST_UNIT, REFRAME,
  REFRAME_COUNT, RESPELL_REPAIRS, ROWS, STRESSED_RULE, TAPTABLE_MAX_ROWS, THEME,
  THEME_ROWS_BEFORE, UNIT, WHAT_FOLLOWS, Y_EN_UNIT, isMine,
} from './data/pronoms-indirect-corpus.ts';
import {
  OWNS_SECTIONS, PARADIGM_SECTIONS, PRONOMS_INDIRECT_LESSON,
  LEURS_TRAP, WRONG_SET_PRESENT, WRONG_SET_TRAP,
} from './data/pronoms-indirect-lesson.ts';
import { PRONOMS_INDIRECT_TERMS } from './data/pronoms-indirect-terms.ts';
/* THE MISSION-ROW WIDTH MODEL, IMPORTED FROM a2.23 RATHER THAN COPIED.
 * Invariants §5: a guard that reimplements the thing it guards drifts from it. */
import { TITLE_MUST_CLIP, TITLE_MUST_FIT, TITLE_WIDTH_MAX, titleWidth } from './data/pronominaux-passe-corpus.ts';
import {
  IMPORTED_AND_REPAIRED, IMPORTED_IDS, REPAIRED_IDS, STORED_RESPELL,
  row as importedRow,
} from './data/pronoms-indirect-imported.ts';
import { PRONOMS_INDIRECT_IMPORT_ROWS, MEASURED_ROWS } from './data/pronoms-indirect-rows.gen.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
const die: (m: string) => never = (m) => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const LESSON: Lesson = PRONOMS_INDIRECT_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = ROWS.map(({ bucket, pro, possessive, ...rest }) => rest as Item);
const IMPORTED_ITEMS: Item[] = PRONOMS_INDIRECT_IMPORT_ROWS;

/* ─── String walks ───────────────────────────────────────────────────────── */

const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** `cards` IS NOT ON THIS LIST AND MUST NOT BE. a2.22 §2: on a cardDeck, a
 *  flashcards section, a reviewDeck and a trapDrill, `cards` holds the entire
 *  learner surface.
 *
 *  ── A FIFTH HOLE IN THE WALK THIS BAND COPIES, FOUND BY THIS BUILD ────────
 *
 *  a2.06's list — which every A2 lesson since a2.01 has copied — holds `drill`,
 *  `retest` and `buckets`, and TWO OF THOSE THREE ARE LEARNER SURFACES HALF THE
 *  TIME:
 *
 *    ErrorTrigger.drill    a string id            machine, correctly skipped
 *    trapDrill.drill       AN ARRAY OF OPTIONS    the gated final step, and the
 *                          the learner is scored on it
 *    LessonDrill.buckets   the sort labels        drawn on the drill screen
 *
 *  So the entire gated drill of every stepped trapDrill in this band is
 *  invisible to the jargon walk, the em-dash walk, the banned-word walk and the
 *  house-copy walk. a2.06 has six option pairs in there and none of them has
 *  ever been looked at by any of its three layers.
 *
 *  Found here because the tranche check reported an item as unshown when it was
 *  on a screen: the item was in the trapDrill's drill and the walk could not see
 *  the screen. `drill` and `retest` are skipped ONLY when they hold a string,
 *  and `buckets` is walked. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn',
  'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'restPoints',
]);
/** Skipped only when the value is a STRING, which is the id case. An array here
 *  is content. */
const ID_WHEN_STRING = new Set(['drill', 'retest']);
const skip = (k: string, x: unknown): boolean =>
  MACHINE_KEYS.has(k) || (ID_WHEN_STRING.has(k) && typeof x === 'string');

const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub`, drops only machine keys. Corrections §13, and this lesson's
 *  REQUIRED LAYOUT 1 lives half in `sub`. */
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!skip(k, x)) display(x, out);
  }
  return out;
}

function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (!skip(k, x) && !NOTATION_KEYS.has(k)) prose(x, out);
    }
  }
  return out;
}

/* THE WIDENING IS PROVED RATHER THAN CLAIMED. The trapDrill's gated drill must
 * reach the walk, and an ErrorTrigger's `drill` id must not. */
{
  const td = LESSON.sections.find((s) => s.id === 's12-trap') as { drill?: { opts?: string[] }[] };
  const first = td?.drill?.[0]?.opts?.[0];
  if (!first) die('the trapDrill has no drill options, so the widened walk cannot be proved.');
  if (!display(td).includes(first)) {
    die(`the walk still cannot see the trapDrill's gated drill: « ${first} » is on a screen and not in display(). `
      + 'That is the hole this build found and it has not been closed.');
  }
  const trigger = (LESSON.errorTriggers ?? [])[0];
  if (!trigger) die('there are no error triggers.');
  if (display(trigger).includes(trigger.drill)) {
    die(`« ${trigger.drill} » is an ErrorTrigger's drill ID and it reached the learner-surface walk.`);
  }
}

/** THE HOUSE BOUNDARY WITH CORRECTIONS §14.3's FIX. The apostrophe is dropped
 *  from the LEFT so a shape can see `l'ai`, `qu'il` and `d'objet`; it stays on
 *  the right so `l'` does not match a bare `l`. */
const bounded = (needle: string): RegExp =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string): boolean => bounded(needle).test(hay);

/** a2.23 §9.1: naming a unit needs the opposite boundary, because the band names
 *  a neighbour with a possessive almost every time and `hasPhrase(_, 'a2.06')`
 *  is blind to « a2.06's ». */
const namesUnit = (hay: string, unit: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}'’-])${unit.replace(/\./gu, '\\.')}(?![\\p{L}\\p{N}-])`, 'iu').test(hay);

const surfaceOf = (walk: (v: unknown, out?: string[]) => string[]): string[] => [
  ...walk(LESSON.sections),
  ...walk(LESSON.sheets ?? []),
  ...walk(LESSON.terms ?? {}),
  ...walk(LESSON.acts ?? []),
  ...walk(LESSON.drills ?? []),
  ...walk(LESSON.errorTriggers ?? []),
  ...walk(LESSON.audio ?? {}),
  ...walk(LESSON.overview ?? {}),
  LESSON.intro ?? '',
  LESSON.reframe ?? '',
];

const PROSE_SURFACE = surfaceOf(prose);
const DISPLAY_SURFACE = surfaceOf(display);
const ALL_SURFACE = [...new Set([...PROSE_SURFACE, ...DISPLAY_SURFACE])];
/** NOT deduped. COUNTING MUST USE THIS ONE — a2.22 §3: a Set collapses a short
 *  quoted line authored twice and the count under-reports. */
const ALL_SURFACE_RAW = [...DISPLAY_SURFACE];

const section = (id: string) => {
  const s = LESSON.sections.find((x) => x.id === id);
  if (!s) die(`the lesson has no section ${id}.`);
  return s!;
};

/* ═══ 1. THE AUTHORED ROWS ═══════════════════════════════════════════════ */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) {
  die(`${AUTHORED_ITEMS.length} rows authored and EXPECTED_AUTHORED is ${EXPECTED_AUTHORED}.`);
}
for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id} does not validate:\n${formatIssues(issues)}`);
  if (it.theme !== THEME) die(`${it.id} is in theme "${it.theme}" and this build writes into "${THEME}".`);
  if (it.level !== 'a2') die(`${it.id} is level "${it.level}" and every row this build authors is a2.`);
  if (!isMine(it.id)) die(`${it.id} is outside this build's block ${ID_FIRST}..${ID_LAST}.`);
  if ((it as { gender?: string }).gender) die(`${it.id} carries gender and would join a1.03's ending population.`);
  /* CORRECTIONS §2, NINTH BUILD RUNNING: NOT ONE HEADWORD. A row whose `fr` has
   * no whitespace is a bare word whatever its `kind` says (a2.05 §4). */
  if (it.kind !== 'sentence') die(`${it.id} is kind "${it.kind}". This build authors sentences only; every infinitive is imported.`);
  if (!/\s/u.test(it.fr)) die(`${it.id} « ${it.fr} » has no whitespace, so it is a headword whatever its kind says.`);
  if (!it.respell) die(`${it.id} has no respelling.`);
  if (!it.ipa || !/^\/.*\/$/u.test(it.ipa)) die(`${it.id} has no slash-wrapped ipa.`);
  const re = it.respell;
  if (hasPlainNasalFor(it.fr, re)) die(`${it.id} « ${it.fr} » [${re}] closes a nasal with a plain n or m.`);
  if (re.includes('‿')) die(`${it.id} carries U+203F, which draws as a low underscore on a Pixel 6.`);
  /* DOCTRINE §C: A2 sentences may run to 14 words. */
  if (it.fr.trim().split(/\s+/u).length > 14) die(`${it.id} « ${it.fr} » is over the 14-word A2 budget.`);
}
{
  const ids = AUTHORED_ITEMS.map((i) => i.id);
  if (new Set(ids).size !== ids.length) die('an authored id appears twice.');
  const frs = AUTHORED_ITEMS.map((i) => i.fr);
  if (new Set(frs).size !== frs.length) die('an authored fr appears twice.');
  if (ids.join() !== AUTHORED_IDS.join()) die('AUTHORED_IDS has drifted from ROWS.');
}

/* THE DRILL ORDER. This batch writes `it.drills` verbatim and the merge writes
 * `drillOrder(it.drills)`, so the two copies agree ONLY IF every array is
 * already in DRILL_KINDS order. a2.22 diverged on all 31 of its rows this way. */
for (const it of AUTHORED_ITEMS) {
  const sorted = [...it.drills].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b));
  if (JSON.stringify(sorted) !== JSON.stringify([...it.drills])) {
    die(`${it.id} declares drills ${JSON.stringify(it.drills)} and DRILL_KINDS order is ${JSON.stringify(sorted)}.`);
  }
}

/* THE ENDING POPULATION, through the REAL function. Invariants §5. */
{
  const before = endingPopulation([]).length;
  const after = endingPopulation([...AUTHORED_ITEMS, ...IMPORTED_ITEMS]).length;
  if (after !== before) die(`this build moves a1.03's ending population by ${after - before} rows.`);
}

/* ═══ 2. THE IMPORT, THE REPAIRS AND THE FALSE POSITIVES ═════════════════ */

if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} rows imported and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
if (MEASURED_ROWS.headwords !== IMPORTED.length) die('the manifest and the corpus file disagree about how many headwords are imported.');
if (MEASURED_ROWS.phrases !== IMPORTED_PHRASES.length) die('the manifest and the corpus file disagree about how many phrases are imported.');
if (MEASURED_ROWS.framesPresentAsWholeSentence !== 0) {
  die('the manifest found an authored frame already published as a whole sentence. The corpus header rests on all fifty being absent.');
}
if (MEASURED_ROWS.themeDuplicateGroups !== 0) {
  die(`${THEME} has ${MEASURED_ROWS.themeDuplicateGroups} pre-existing duplicate fr groups and the corpus file claims a clean sheet.`);
}
if (MEASURED_ROWS.themeRowsBefore !== THEME_ROWS_BEFORE) {
  die(`the manifest measured ${MEASURED_ROWS.themeRowsBefore} rows in ${THEME} and the corpus file records ${THEME_ROWS_BEFORE}.`);
}

/* THE REPAIR TABLE, THROUGH THE REAL FUNCTION, ASSERTED BY NAME.
 *
 * Corrections §14.1: ONE table, and the two reasons for `half !== to` are
 * SEPARATE and mutually exclusive. `(half !== to) === (blind || house)` is the
 * assertion that catches the conflation, and a2.17's first table failed it. */
for (const rep of RESPELL_REPAIRS) {
  const storedFlag = hasPlainNasalFor(rep.fr, rep.from);
  const halfFlag = hasPlainNasalFor(rep.fr, rep.half);
  const toFlag = hasPlainNasalFor(rep.fr, rep.to);
  if (toFlag) die(`the repair target for ${rep.id} « ${rep.to} » is still flagged.`);
  if (halfFlag) die(`the minimal repair for ${rep.id} « ${rep.half} » is still flagged, so it is not the minimal repair.`);
  if ((rep.half !== rep.to) !== (rep.blind || rep.house)) {
    die(`${rep.id}: half !== to is ${rep.half !== rep.to} and (blind || house) is ${rep.blind || rep.house}. `
      + 'Corrections §14.1: the two reasons are separate and one boolean for both conflates a nasal the checker '
      + 'cannot see with a house value the minimal repair does not reach.');
  }
  /* A BLIND ROW IS ONE THE CHECKER DOES NOT FLAG, so `half` is the stored value
   * unchanged. Asserted rather than assumed, because the brief calls répondre a
   * MIXED row and it is not one. */
  if (rep.blind) {
    if (storedFlag) die(`${rep.id} is filed as blind and the checker flags its stored value.`);
    if (rep.half !== rep.from) die(`${rep.id} is blind, so repairing what the checker reports changes NOTHING and half must equal from.`);
  }
  if (!rep.blind && !rep.house && !storedFlag) {
    die(`${rep.id} is filed as neither blind nor house and the checker does not flag its stored value, so there is nothing to repair.`);
  }
  /* THE RECORDED READ AND THE TABLE MUST AGREE. A repair table that has drifted
   * from the database repairs nothing and reports success. */
  const recorded = STORED_RESPELL[rep.id];
  if (recorded !== rep.from && recorded !== rep.to) {
    die(`${rep.id}: the manifest recorded « ${recorded} » and the repair table expects « ${rep.from} ».`);
  }
}
/* THE BLIND SET, BY NAME AND AS A COUNT. Corrections §6 asks for the blindness
 * to be asserted as a negative so the day the checker improves you find out
 * rather than carrying a dead by-name list. a2.06 had ZERO blind rows and said
 * so; this build has SIX and every one of them is répondre. */
{
  const blind = RESPELL_REPAIRS.filter((r) => r.blind);
  if (blind.length !== MEASURED_ROWS.blindRepairs) die(`${blind.length} blind rows in the table and the manifest measured ${MEASURED_ROWS.blindRepairs}.`);
  if (blind.length !== 6) die(`${blind.length} rows are filed as blind and this build measured six. Re-measure rather than editing the count.`);
  for (const b of blind) {
    if (b.fr !== 'répondre') die(`${b.id} is filed as blind and is not répondre. Every blind row in this import is the same word and the same string.`);
  }
  if (hasPlainNasalFor('répondre', 'ray-POHNDR')) {
    die('« ray-POHNDR » is now FLAGGED. It was clean when this was written, which is the entire reason six rows are filed as blind. '
      + 'If the checker has improved, corpus §11 needs rewriting rather than this guard relaxing.');
  }
}
/* THE FALSE POSITIVE, WHICH CORRECTIONS §6 ASKS EVERY BUILD TO LOOK FOR.
 * a2.06 looked and found none and reported the absence. This build found TWO and
 * one of them is on its headline verb, so the value nine cards print depends on
 * this measurement holding. */
{
  if (FALSE_POSITIVES.length !== MEASURED_ROWS.falsePositives) die('the manifest and the corpus file disagree about the false positives.');
  for (const fp of FALSE_POSITIVES) {
    if (!hasPlainNasalFor(fp.fr, fp.flagged)) {
      die(`${fp.fr}: « ${fp.flagged} » is no longer FLAGGED, so it is no longer a false positive. `
        + 'Corpus §11 rests on it being one. Re-measure rather than deleting the entry.');
    }
    if (hasPlainNasalFor(fp.fr, fp.used)) die(`${fp.fr}: the value this lesson uses « ${fp.used} » is FLAGGED.`);
    /* AND THE ROWS THAT PRINT IT ACTUALLY USE IT. */
    const users = AUTHORED_ITEMS.filter((i) => i.respell!.includes(fp.used));
    if (!users.length) die(`no authored row uses « ${fp.used} », so the false-positive finding is documentation rather than a repair.`);
  }
}
/* THE IMPORT THAT IS ALSO A REPAIR, which has no precedent in this band. */
if (IMPORTED_AND_REPAIRED.length !== 1 || IMPORTED_AND_REPAIRED[0] !== 'fr.sons.verbes-essentiels.046') {
  die(`the imported-and-repaired set is ${JSON.stringify(IMPORTED_AND_REPAIRED)} and it should be exactly the envoyer row. `
    + 'All four published envoyer rows are flagged, so there is no correct one to import.');
}

/* ═══ 3. THE LESSON, THROUGH THE REAL VALIDATORS ═════════════════════════ */

{
  const issues = validateLesson(LESSON);
  if (issues.length) die(`the lesson does not validate:\n${formatIssues(issues)}`);
  const known = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
  const dens = validateDensity(LESSON, known);
  if (dens.length) die(`the lesson fails density:\n${formatDensity(dens)}`);
}
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections and EXPECTED_SECTIONS is ${EXPECTED_SECTIONS}.`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts and EXPECTED_ACTS is ${EXPECTED_ACTS}.`);
if (LESSON.unitId !== UNIT_ID) die(`the lesson's unitId is ${LESSON.unitId}.`);

/* DOCTRINE §B.5: THE OWNS OUTWEIGHS THE PARADIGM. */
if (OWNS_SECTIONS.length !== OWNS_SECTION_COUNT) die(`${OWNS_SECTIONS.length} Owns sections and OWNS_SECTION_COUNT is ${OWNS_SECTION_COUNT}.`);
if (PARADIGM_SECTIONS.length !== PARADIGM_SECTION_COUNT) die(`${PARADIGM_SECTIONS.length} paradigm sections and PARADIGM_SECTION_COUNT is ${PARADIGM_SECTION_COUNT}.`);
if (OWNS_SECTION_COUNT <= PARADIGM_SECTION_COUNT) die('the paradigm has at least as many sections as the Owns, which is the wrong lesson.');
for (const id of [...OWNS_SECTIONS, ...PARADIGM_SECTIONS]) section(id);

/* THE TWO RULES ON THIS LESSON'S SURFACE, both against EXPLICIT constants. This
 * lesson carries its own reframe AND quotes a2.06's position rule, so both are
 * counted: at a2.06's seventeen each they would be on every screen between
 * them. */
{
  const n = ALL_SURFACE_RAW.filter((s) => s.includes(REFRAME)).length;
  if (n !== REFRAME_COUNT) die(`the reframe is authored ${n} times and REFRAME_COUNT is ${REFRAME_COUNT}.`);
  if (LESSON.reframe !== REFRAME) die('Lesson.reframe is not the corpus file\'s REFRAME.');
  const p = ALL_SURFACE_RAW.filter((s) => s.includes(POSITION_RULE)).length;
  if (p !== POSITION_RULE_COUNT) die(`a2.06's position rule is quoted ${p} times and POSITION_RULE_COUNT is ${POSITION_RULE_COUNT}.`);
}

/* ═══ 4. THE THREE REQUIRED LAYOUTS ══════════════════════════════════════ */

type Card = { head?: string; label?: string; fr?: string; sub?: string; body?: string };
const cardsOf = (id: string): Card[] => ((section(id) as { cards?: Card[] }).cards ?? []);

/* LAYOUT 1: the two sets, SIX WORDS IN TWO ROWS, on ONE card, with a2.06's
 * position rule quoted VERBATIM beside them. The rows are `fr` and `sub`, which
 * is why every walk in this build is a display() walk: prose() drops `sub` as
 * notation and would not see the second row at all. */
{
  const cards = cardsOf('s02-sets');
  if (!cards.length) die('s02-sets has no cards.');
  const both = cards.find((c) => (c.fr ?? '') === DIRECT_SET && (c.sub ?? '') === INDIRECT_SET);
  if (!both) {
    die('s02-sets has no card carrying the direct set in `fr` and the indirect set in `sub`. '
      + `Wanted fr « ${DIRECT_SET} » and sub « ${INDIRECT_SET} », which is six words in two rows on one screen.`);
  }
  for (const w of ['le', 'la', 'les']) {
    if (!hasPhrase(both!.fr!, w)) die(`the direct row does not carry « ${w} ».`);
  }
  for (const w of ['lui', 'leur']) {
    if (!hasPhrase(both!.sub!, w)) die(`the indirect row does not carry « ${w} ».`);
  }
  if ((both!.sub!.match(/lui/gu) ?? []).length !== 2) {
    die('the indirect row does not show lui TWICE. The learner loses the gender crossing over and the row is where that is visible.');
  }
  /* THE POSITION RULE, VERBATIM, IN THIS SECTION. A paraphrase must go red. */
  const surface = display(section('s02-sets'));
  if (!surface.some((s) => s.includes(POSITION_RULE))) {
    die(`s02-sets does not quote ${DIRECT_UNIT}'s « ${POSITION_RULE} » VERBATIM. A paraphrase is not the same claim, and this is the section whose whole argument is that the slot is shared.`);
  }
  if (!surface.some((s) => namesUnit(s, DIRECT_UNIT))) die(`s02-sets quotes ${DIRECT_UNIT}'s rule and does not name the unit.`);
  /* AND THE GENDER LOSS IS NAMED HERE, because it is the thing the two rows
   * make visible and it is the opposite of what a learner expects. */
  if (!surface.some((s) => s.includes(GENDER_LOST))) die('s02-sets does not state what the learner loses crossing between the two rows.');
}

/* LAYOUT 2: « Je leur parle. » beside the possessive, on ONE line. Both strings
 * are read off the ROWS rather than typed here, so the layout guard and the
 * corpus cannot drift apart. */
const A_LEUR_PRONOUN = ROWS.find((r) => r.id === A(240))!.fr;
const A_LEUR_POSSESSIVE = ROWS.find((r) => r.id === A(259))!.fr;
{
  if (!hasPhrase(A_LEUR_PRONOUN, 'leur')) die(`the pronoun half of layout 2 is « ${A_LEUR_PRONOUN} » and carries no leur.`);
  if (!hasPhrase(A_LEUR_POSSESSIVE, 'leurs')) die(`the possessive half of layout 2 is « ${A_LEUR_POSSESSIVE} » and carries no leurs.`);
  const cards = cardsOf('s11-leurs');
  /* TWO ROWS, NOT ONE LINE. v1 joined them with « · » on a single `fr` and the
   * line CLIPPED on a Pixel 6 at 36 characters, losing « clés. » while the
   * respelling underneath still read `KLAY`. v2 puts the pronoun in `fr` and the
   * possessive in `sub`, which is the shape LAYOUT 1 already uses and which was
   * proved on glass in this same lesson. */
  const both = cards.find((c) => (c.fr ?? '') === A_LEUR_PRONOUN && (c.sub ?? '') === A_LEUR_POSSESSIVE);
  if (!both) die(`s11-leurs has no card carrying « ${A_LEUR_PRONOUN} » in fr and « ${A_LEUR_POSSESSIVE} » in sub.`);
  /* AND NO CARD ANYWHERE REBUILDS THE ONE-LINE VERSION. This is the guard that
   * keeps v2's repair from being undone: a `fr` holding two full sentences
   * joined by the separator is the shape that clipped. */
  for (const s of LESSON.sections) {
    for (const c of ((s as { cards?: Card[] }).cards ?? [])) {
      const f = c.fr ?? '';
      if (f.includes(' · ') && /[.?!]\s*·/u.test(f)) {
        die(`${s.id} has a card joining two sentences on one \`fr\` line: « ${f} ». `
          + 'That is the shape that clipped on a Pixel 6 at 36 characters. Use fr and sub as two rows.');
      }
    }
  }
  const surface = display(section('s11-leurs'));
  if (!surface.some((s) => s.includes(A117_TEST))) {
    die(`s11-leurs does not quote ${POSSESSIVE_UNIT}'s test « ${A117_TEST} » verbatim. It shipped the hand-off and this lesson takes it.`);
  }
  if (!surface.some((s) => namesUnit(s, POSSESSIVE_UNIT))) die(`s11-leurs does not credit ${POSSESSIVE_UNIT} with the possessive.`);
}

/* LAYOUT 3: the à-taking verbs as a tapTable, SIX ROWS, which is the Pixel 6
 * ceiling, and the full ten live in the sheet at layer deep. */
{
  const tt = section('s07-verbs') as { type: string; rows?: { cells?: string[] }[] };
  if (tt.type !== 'tapTable') die(`s07-verbs is a ${tt.type} and corrections §8 says a table at layer core is a density failure.`);
  const rows = tt.rows ?? [];
  if (rows.length > TAPTABLE_MAX_ROWS) die(`${rows.length} tapTable rows and ${TAPTABLE_MAX_ROWS} is the Pixel 6 ceiling.`);
  if (rows.length !== A_VERBS_SILENT.length) die(`${rows.length} tapTable rows and ${A_VERBS_SILENT.length} verbs give the learner no English signal.`);
  /* EVERY VERB BY NAME, NOT AS A COUNT. The brief asks for this specifically. */
  for (const v of A_VERBS_SILENT) {
    const found = rows.some((r) => (r.cells ?? []).some((c) => c === v.frame));
    if (!found) die(`the tapTable has no row for « ${v.frame} », and the brief asks for every verb by name rather than as a count.`);
    const gloss = rows.some((r) => (r.cells ?? []).some((c) => c === v.en));
    if (!gloss) die(`the tapTable shows « ${v.frame} » and not the English « ${v.en} », which is the column that shows the gap.`);
    if (v.englishPrep !== null) die(`« ${v.fr} » is on the no-warning list and declares an English preposition « ${v.englishPrep} ».`);
  }
  /* AND NO TABLE AT LAYER CORE ANYWHERE. */
  for (const s of LESSON.sections) if (s.type === 'table') die(`${s.id} is a table at layer core, which is a density failure.`);
}

/* ═══ 5. THE OWNS: EVERY VERB ASSERTED BY NAME ═══════════════════════════ */

/* The brief: « Every à-taking verb is asserted individually by name, not as a
 * count. » All ten, on the learner surface, with the frame that shows the à. */
for (const v of A_VERBS) {
  if (!ALL_SURFACE.some((s) => hasPhrase(s, v.fr) || s.includes(v.frame))) {
    die(`« ${v.fr} » is one of the ten verbs this lesson owns and it appears on no learner surface.`);
  }
  if (!ALL_SURFACE.some((s) => s.includes(v.frame))) {
    die(`« ${v.frame} » is never shown, so the learner never sees where the à goes for ${v.fr}.`);
  }
  const r = ROWS.find((x) => x.id === A(v.row));
  if (!r) die(`${v.fr} names row ${v.row}, which this build does not author.`);
  if (!ALL_SURFACE.some((s) => s.includes(r!.fr))) die(`${v.fr}'s sentence « ${r!.fr} » reaches no screen.`);
}
if (A_VERBS.length !== 10) die(`${A_VERBS.length} verbs and the ledger decision is ten, split six and four.`);
if (A_VERBS_SILENT.length !== 6) die(`${A_VERBS_SILENT.length} verbs give no English signal and the tapTable ceiling is six.`);
if (A_VERBS_MARKED.length !== 4) die(`${A_VERBS_MARKED.length} verbs are marked in English.`);
for (const v of A_VERBS_MARKED) if (!v.englishPrep) die(`« ${v.fr} » is on the marked list with no English preposition.`);
/* AND THE FOUR HAVE THEIR OWN SECTION, which is what makes the six read as a
 * gap in English rather than a rule in French. */
{
  const surface = display(section('s08-signal'));
  for (const v of A_VERBS_MARKED) {
    if (!surface.some((s) => s.includes(v.frame))) die(`s08-signal does not show « ${v.frame} », and it is the section for the four English marks.`);
  }
}
/* THE à FRAMING, VERBATIM, BECAUSE a2.25 INHERITS IT. */
if (!ALL_SURFACE.some((s) => s.includes(A_FRAMING))) die(`the à framing « ${A_FRAMING} » is not stated verbatim anywhere, and ${Y_EN_UNIT} quotes it.`);
/* AND a2.04's à IS NAMED AND NOT TAUGHT. */
if (!ALL_SURFACE.some((s) => namesUnit(s, 'a2.04'))) die('a2.04 owns à in front of a place and is named nowhere.');
for (const s of ALL_SURFACE) {
  for (const w of ['au cinéma', 'à la gare', 'contraction', 'contracts with']) {
    if (hasPhrase(s, w)) die(`a2.04's own machinery appears: « ${w} ». This lesson names that à and teaches none of it.`);
  }
}

/* ═══ 6. THE TWO ERRORS, GUARDED AS THE THING AND NOT THE LETTERS ════════ */

/** The conjugated forms this lesson prints. Used by both guards so they cannot
 *  drift apart. `expliquer`, `montrer`, `dire`, `donner`, `offrir`, `envoyer`,
 *  `écrire` and `demander` are DELIBERATELY ABSENT from the WRONG-SET list:
 *  every one of them also takes a direct object, so « Elle les explique. » and
 *  « Je le montre. » are real French and a guard that fired on them would be
 *  corrections §14.4's failure in a new place. */
const WRONG_SET_VERBS = [
  'téléphone', 'téléphones', 'téléphonent', 'téléphoné', 'téléphoner',
  'réponds', 'répond', 'répondez', 'répondons', 'répondent', 'répondu', 'répondre',
  'parle', 'parles', 'parlez', 'parlons', 'parlent', 'parlé', 'parler',
  'obéis', 'obéit', 'obéissons', 'obéissez', 'obéissent', 'obéi', 'obéir',
];
/** Every conjugated form a `leurs` could be sitting in front of. The possessive
 *  is always in front of a NOUN, so a verb behind it is always the error. */
const LEURS_VERBS = [
  ...WRONG_SET_VERBS,
  'écris', 'écrit', 'écrivez', 'écrivons', 'écrivent', 'écrire',
  'montre', 'montres', 'montrent', 'montré', 'montrer',
  'donne', 'donnes', 'donnent', 'donné', 'donner',
  'demande', 'demandes', 'demandent', 'demandé', 'demander',
  'dis', 'dit', 'dites', 'disent', 'dire',
  'offre', 'offres', 'offrent', 'offert', 'offrir',
  'envoie', 'envoies', 'envoient', 'envoyé', 'envoyer',
  'explique', 'expliques', 'expliquent', 'expliqué', 'expliquer',
  'ai', 'as', 'a', 'avons', 'avez', 'ont',
];

/** ERROR ONE: a2.06's row of words used for a person who sits behind à. The
 *  optional auxiliary is not decoration — « Je l'ai téléphoné. » is the sentence
 *  the scene dies on and a shape requiring the pronoun to be ADJACENT to the
 *  verb cannot see it. */
const WRONG_SET_RE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(l'|l’|le|la|les)\\s*(?:(?:ai|as|a|avons|avez|ont)\\s+)?(${WRONG_SET_VERBS.join('|')})(?![\\p{L}\\p{N}'’-])`,
  'iu');
const usesWrongSet = (s: string): boolean => WRONG_SET_RE.test(s);

/** ERROR TWO: a1.17's plural -s on a word that can never take one. */
const LEURS_PRONOUN_RE = new RegExp(
  `(?<![\\p{L}\\p{N}-])leurs\\s+(${LEURS_VERBS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const usesLeursAsPronoun = (s: string): boolean => LEURS_PRONOUN_RE.test(s);

/* MUST_FIRE and MUST_NOT_FIRE, because a shape that cannot fire is not a guard
 * and a shape that fires on English is corrections §14.4 all over again. */
{
  const MUST_FIRE_SET = [
    WRONG_SET_TRAP, WRONG_SET_PRESENT, 'Je la réponds.', "Nous l'obéissons.",
    "Je l'ai parlé.", 'Je les ai parlé.', 'Tu le téléphones.',
  ];
  for (const s of MUST_FIRE_SET) if (!usesWrongSet(s)) die(`the wrong-set guard does not fire on « ${s} », so it is not a guard.`);
  const MUST_FIRE_LEURS = [
    LEURS_TRAP, 'Je leurs écris.', 'Nous leurs parlons.', 'Je ne leurs parle pas.',
    'Il leurs a donné les clés.',
  ];
  for (const s of MUST_FIRE_LEURS) if (!usesLeursAsPronoun(s)) die(`the leurs guard does not fire on « ${s} », so it is not a guard.`);

  const MUST_NOT_FIRE = [
    /* The lesson's own correct French. */
    'Je lui parle.', 'Je leur parle.', 'Je leur montre la photo.', 'Je lui dis bonjour.',
    'Je leur donne les clés.', 'Voici leurs clés.', 'Voici leur maison.',
    'Je leur montre leur maison.', 'Elle leur explique.', 'Elle les explique.',
    'Je la connais.', 'Je le vois.', 'Ils ont oublié leurs clés au bureau.',
    /* THE ENGLISH. Half of a learner surface is English by design and the two
     * languages share enough letters that a French-morphology shape reads the
     * English as French. These are real strings from this lesson. */
    'The pronoun goes in front of the verb, not after it.',
    'a possessive has a thing behind it',
    'Look at the word straight after it.',
    'You already get them right.',
    'Several people, so the s looks right and there is nothing in the sound to stop you.',
    'English says the little word out loud, so you reach for one in French without being told to.',
    'The place is the same. Only the words differ.',
  ];
  for (const s of MUST_NOT_FIRE) {
    if (usesWrongSet(s)) die(`the wrong-set guard fires on « ${s} », which it must not. Corrections §14.4.`);
    if (usesLeursAsPronoun(s)) die(`the leurs guard fires on « ${s} », which it must not. Corrections §14.4.`);
  }
}

/** THE PLACES A WRONG FORM IS ALLOWED. Five, and it is backed by the stronger
 *  assertion the brief is really after: inside these sections the wrong form may
 *  appear ONLY as an option that is not the correct one. A section allowlist
 *  alone would let the error ship AS THE ANSWER, which is the failure that
 *  actually matters. */
const WRONG_FORM_SECTIONS = new Set(['s01-scene', 's09-pick', 's10-unseen', 's12-trap', 's14-errors', 's23-quiz']);
/** The eighteen sections where a wrong form is refused outright, as a measured
 *  number rather than an impression. Widening the allowlist should mean
 *  re-reading this line.
 *
 *  THE SCENE IS ON THE ALLOWLIST AND a2.06's IS NOT, which is a difference worth
 *  recording rather than smoothing over. a2.06's scene dies on « Oui, je
 *  connais… la ? » — a sentence that STOPS, so its guard never saw a clause end.
 *  This lesson's scene dies on a sentence that FINISHES, because the whole
 *  premise is that the learner applies a2.06's rule perfectly and picks the
 *  wrong row of words. A complete wrong sentence is exactly what the guard is
 *  built to find, so the scene has to be permitted and then constrained
 *  separately (below). */
const WRONG_FORM_REFUSED_COUNT = 18;

if (LESSON.sections.length - WRONG_FORM_SECTIONS.size !== WRONG_FORM_REFUSED_COUNT) {
  die(`the wrong form is refused on ${LESSON.sections.length - WRONG_FORM_SECTIONS.size} sections and `
    + `WRONG_FORM_REFUSED_COUNT is ${WRONG_FORM_REFUSED_COUNT}. Widening the allowlist weakens this guard, so it is counted.`);
}
for (const s of LESSON.sections) {
  if (WRONG_FORM_SECTIONS.has(s.id!)) continue;
  for (const str of display(s)) {
    if (usesWrongSet(str)) die(`a correct surface uses a2.06's words for a person behind à: « ${str.slice(0, 90)} » in ${s.id}.`);
    if (usesLeursAsPronoun(str)) die(`a correct surface puts an s on the pronoun leur: « ${str.slice(0, 90)} » in ${s.id}.`);
  }
}
/* AND EVERY OTHER SURFACE, NOT JUST THE SECTIONS.
 *
 * MUTATION-FOUND HOLE. The first version walked `LESSON.sections` and then the
 * sheet, the terms and the intro, which leaves `audio.recorded[].desc`,
 * `acts[].milestone` and `overview` unwalked by the error shapes. An audio brief
 * is a string the STUDIO READS AND RECORDS, so a wrong sentence in one gets
 * spoken into a clip and nothing on the host would ever have said so. a2.06's
 * guard has the same gap today.
 *
 * The error triggers and the drills are permitted for a stated reason rather
 * than by oversight: an ErrorTrigger's `description` exists to describe the
 * error, so it necessarily contains it, and the drills' distractors are covered
 * by the never-the-correct-option check above. */
{
  const permitted = new Set<string>([
    ...[...WRONG_FORM_SECTIONS].flatMap((id) => display(section(id))),
    ...display(LESSON.errorTriggers ?? []),
    ...display(LESSON.drills ?? []),
  ]);
  /* AND THE AUDIO BRIEFS QUOTE THE CARDS THEY RECORD, which is a guard of this
   * build's own: §16 REQUIRES the trapDrill's brief to name every card the audio
   * step plays, and one of those cards is the error. So a brief may quote the
   * trap's own cards and nothing else — the card lines come out of the string
   * and the shapes run on what is left, which is stricter than exempting the
   * brief outright. */
  const trapCards = ((section('s12-trap') as { cards?: { fr?: string }[] }).cards ?? []).map((c) => c.fr ?? '');
  const withoutTrapCards = (str: string): string => trapCards.reduce((acc, fr) => (fr ? acc.split(fr).join(' ') : acc), str);
  if (!usesLeursAsPronoun(withoutTrapCards('Some brief. Je leurs écris. More brief.'))) {
    die('stripping the trap cards disarms the guard on a different error, so the exemption is wider than it looks.');
  }
  for (const str of ALL_SURFACE) {
    if (permitted.has(str)) continue;
    const rest = withoutTrapCards(str);
    if (usesWrongSet(rest)) die(`a surface outside the six permitted sections uses the wrong set: « ${str.slice(0, 90)} ».`);
    if (usesLeursAsPronoun(rest)) die(`a surface outside the six permitted sections puts an s on the pronoun: « ${str.slice(0, 90)} ».`);
  }
}
/* AND INSIDE THE PERMITTED SECTIONS IT IS NEVER THE ANSWER. */
{
  type Choice = { opts?: string[]; correct?: number | string };
  const choices: Choice[] = [];
  const collect = (v: unknown): void => {
    if (Array.isArray(v)) { for (const x of v) collect(x); return; }
    if (!v || typeof v !== 'object') return;
    const o = v as Record<string, unknown>;
    if (Array.isArray(o.opts)) choices.push(o as Choice);
    for (const x of Object.values(o)) collect(x);
  };
  for (const id of WRONG_FORM_SECTIONS) collect(section(id));
  for (const d of LESSON.drills ?? []) collect(d);
  if (choices.length < 10) die(`only ${choices.length} option sets found across the permitted sections, so this guard is not reaching the content.`);
  for (const ch of choices) {
    if (typeof ch.correct !== 'number') continue;
    const answer = ch.opts![ch.correct];
    if (answer && (usesWrongSet(answer) || usesLeursAsPronoun(answer))) {
      die(`an error is offered as the CORRECT option: « ${answer} ». The lesson would be marking the mistake right.`);
    }
  }
}
/* AND IT MUST ACTUALLY APPEAR IN EACH PERMITTED PLACE, or the lesson never
 * shows the learner the error it exists to prevent. */
for (const id of WRONG_FORM_SECTIONS) {
  const strs = display(section(id));
  if (!strs.some((s) => usesWrongSet(s) || usesLeursAsPronoun(s))) die(`${id} is permitted to show an error and does not show one.`);
}
/* AND THE SCENE, WHICH IS THE ONE ALLOWLISTED SECTION WITH NO OPTION SETS TO
 * CONSTRAIN, IS CONSTRAINED BY HAND. The error may be what the learner says, the
 * `wrong` half of the break and the option that breaks; it may never be the
 * `right` half or the option that works. */
{
  const scene = section('s01-scene') as {
    beats?: {
      kind?: string; from?: string; fr?: string;
      wrong?: { fr?: string }; right?: { fr?: string };
      options?: { fr?: string; outcome?: string }[];
    }[];
  };
  const beats = scene.beats ?? [];
  const said = beats.find((b) => b.kind === 'bubble' && b.from === 'you');
  if (!said) die('the scene has no beat where the learner speaks, so nothing goes wrong in it.');
  if (!usesWrongSet(said!.fr ?? '')) die(`the scene's learner line « ${said!.fr} » is not the error this lesson exists to prevent.`);
  const brk = beats.find((b) => b.kind === 'break');
  if (!brk) die('the scene has no break beat.');
  if (!usesWrongSet(brk!.wrong?.fr ?? '')) die('the break\'s wrong half is not the error.');
  if (usesWrongSet(brk!.right?.fr ?? '')) die(`the break's RIGHT half « ${brk!.right?.fr} » is the error. The scene would be teaching the mistake.`);
  const choice = beats.find((b) => b.kind === 'choice');
  if (!choice) die('the scene has no choice beat.');
  for (const o of choice!.options ?? []) {
    if (o.outcome === 'works' && usesWrongSet(o.fr ?? '')) die(`the scene marks « ${o.fr} » as the sentence that works and it is the error.`);
  }
  if (!(choice!.options ?? []).some((o) => o.outcome === 'breaks' && usesWrongSet(o.fr ?? ''))) {
    die('the scene never offers the error as the option that breaks, so the learner is not asked to recognise it.');
  }
}
if (!ALL_SURFACE.some((s) => s.includes(WRONG_SET_TRAP))) die(`the lesson never shows « ${WRONG_SET_TRAP} », which is the error the scene dies on.`);
if (!ALL_SURFACE.some((s) => s.includes(LEURS_TRAP))) die(`the lesson never shows « ${LEURS_TRAP} », which is the trapDrill's whole subject.`);

/* AND NO AUTHORED ROW CARRIES `leurs` UNLESS IT IS THE POSSESSIVE. The row-level
 * version of the same claim, read off the declared `possessive` flag rather than
 * re-parsed out of the French, which is corrections §14.4 territory. */
for (const r of ROWS) {
  const carriesLeurs = hasPhrase(r.fr, 'leurs');
  if (carriesLeurs && !r.possessive) {
    die(`${r.id} « ${r.fr} » carries « leurs » and is not declared a possessive row. The pronoun never takes an s.`);
  }
  if (usesLeursAsPronoun(r.fr)) die(`${r.id} « ${r.fr} » puts an s on the pronoun.`);
  if (usesWrongSet(r.fr)) die(`${r.id} « ${r.fr} » uses a2.06's words for a person behind à.`);
}
{
  const possessives = ROWS.filter((r) => r.possessive);
  if (possessives.length !== 3) die(`${possessives.length} rows are declared possessive and the contrast needs exactly three: one thing, several things, and both jobs in one sentence.`);
  if (!possessives.some((r) => hasPhrase(r.fr, 'leurs'))) die('no possessive row carries « leurs », so the s that DOES belong is never shown.');
  if (!possessives.some((r) => hasPhrase(r.fr, 'leur') && !hasPhrase(r.fr, 'leurs'))) die('no possessive row carries a bare « leur ».');
}

/* ═══ 7. THE NEIGHBOURS, RESERVED ════════════════════════════════════════ */

/* a2.25: `y` and `en` AS PRONOUNS, nowhere. GUARD THE THING AND NOT THE LETTERS
 * — corrections §14.4. `en` is a preposition all over the corpus and `y` is an
 * ordinary English letter, so the letters alone are useless. */
{
  const Y_PRONOUN = /(?<![\p{L}\p{N}'’-])(j'y|n'y|il y va|elle y va|on y va|y aller|vas-y|y penser)(?![\p{L}\p{N}'’-])/iu;
  const EN_PRONOUN = /(?<![\p{L}\p{N}-])(j'en|n'en|tu en as|il en a|elle en a|on en a|en veux|en prends)(?![\p{L}\p{N}'’-])/iu;
  const MUST_FIRE = ["J'y vais.", "J'en veux deux.", 'Tu en as ?'];
  for (const s of MUST_FIRE) {
    if (!Y_PRONOUN.test(s) && !EN_PRONOUN.test(s)) die(`the y/en guard does not fire on « ${s} », so it is not a guard.`);
  }
  const MUST_NOT_FIRE = [
    /* `en` as a preposition, which is everywhere in the corpus. */
    'Je leur parle en français.', 'en français', 'Elle est en retard.', 'Il arrive toujours en avance.',
    /* AND THE ENGLISH, which is where a letters-based version dies. */
    'You already know the words, and the only new thing is which ones.',
    'Every question is about somebody who is not in the room.',
    'Yes, I talked to him yesterday.',
  ];
  for (const s of MUST_NOT_FIRE) {
    if (Y_PRONOUN.test(s) || EN_PRONOUN.test(s)) die(`the y/en guard fires on « ${s} », which it must not. Corrections §14.4.`);
  }
  for (const s of ALL_SURFACE) {
    if (Y_PRONOUN.test(s) || EN_PRONOUN.test(s)) die(`${Y_EN_UNIT}'s pronouns appear: « ${s.slice(0, 90)} ».`);
  }
}
/* NO MULTIPLE-PRONOUN SENTENCE, which is a2.25's canDo phrase or nobody's. The
 * temptation is real because this lesson is the second set, and the corpus
 * publishes three of them inside this very theme. Guard the THING: an adjacent
 * pair drawn from the two closed sets, followed by a word. */
{
  /* `nous` AND `vous` ARE NOT IN THE FIRST SET, AND LEAVING THEM IN WAS A REAL
   * DEFECT THIS GUARD SHIPPED FOR ONE RUN. They are the two forms that are
   * SUBJECT and object with the same spelling, so « Nous leur parlons. » — an
   * authored row of this lesson, with exactly one pronoun in it — matched a
   * shape built to find two. That is corrections §14.4 inside French rather
   * than across the two languages: the letters are right and the thing is not.
   *
   * The combos left are the unambiguous ones, and they are also the only ones
   * this corpus actually publishes: all three of the two-pronoun sentences in
   * this theme are `le/la/les` followed by `lui/leur`. */
  const TWO_PRONOUNS =
    /(?<![\p{L}\p{N}'’-])((le|la|les)\s+(lui|leur)|(me|te|se)\s+(le|la|les)|(le|la|les|lui|leur)\s+(y|en))(?![\p{L}\p{N}'’-])\s+\p{L}/iu;
  const MUST_FIRE = [
    'Tu le lui donnes tout de suite.', 'Je ne le lui ai pas encore donné.',
    'Nous allons le leur expliquer calmement.', 'Il me le donne demain.',
  ];
  for (const s of MUST_FIRE) if (!TWO_PRONOUNS.test(s)) die(`the two-pronoun guard does not fire on « ${s} », so it is not a guard.`);
  const MUST_NOT_FIRE = [
    'Je leur montre la photo.', 'Je lui dis bonjour.', 'Je leur donne les clés.',
    /* THE TWO THAT BROKE THE FIRST VERSION. Subject nous and vous, one object
     * pronoun each, and both are authored rows of this lesson. */
    'Nous leur parlons.', 'Vous leur écrivez.', 'Nous lui obéissons.',
    'Je leur montre leur maison.', 'Je leur parle en français.',
    'the person you are talking to', 'One person or several, and nothing else comes into it.',
  ];
  for (const s of MUST_NOT_FIRE) if (TWO_PRONOUNS.test(s)) die(`the two-pronoun guard fires on « ${s} », which it must not.`);
  for (const s of ALL_SURFACE) {
    if (TWO_PRONOUNS.test(s)) die(`two object pronouns in one clause, which is ${Y_EN_UNIT}'s or nobody's: « ${s.slice(0, 90)} ».`);
  }
  for (const r of ROWS) if (TWO_PRONOUNS.test(r.fr)) die(`${r.id} « ${r.fr} » carries two object pronouns.`);
}
/* AND THE NEXT LESSON IS NAMED, so the learner is pointed forward rather than
 * left with a system that looks finished. */
if (!ALL_SURFACE.some((s) => namesUnit(s, Y_EN_UNIT))) die(`${Y_EN_UNIT} is named nowhere, so the next lesson is not handed off to.`);
if (!ALL_SURFACE.some((s) => namesUnit(s, DIRECT_UNIT))) die(`${DIRECT_UNIT} is the prerequisite and is named nowhere.`);
if (!ALL_SURFACE.some((s) => namesUnit(s, POSSESSIVE_UNIT))) die(`${POSSESSIVE_UNIT} owns the possessive and is named nowhere.`);

/* ═══ 8. THE NEGATION ARC ════════════════════════════════════════════════ */

/* The brief: « The negation string matches a2.06's, which matches a2.22's. » It
 * does, verbatim, and this lesson adds NOTHING. a2.23 settled the two-string
 * question and a2.06 re-measured it; the value here is the NEGATIVE that they
 * are still two, so a later harmonisation goes red. */
if (String(A118_REFRAME) === String(NEGATION_RULE)) die('a1.18\'s line and a2.19\'s line are the same string. They are deliberately two.');
if (!ALL_SURFACE.some((s) => s.includes(NEGATION_RULE))) die(`a2.19's « ${NEGATION_RULE} » is not quoted verbatim anywhere.`);
if (!ALL_SURFACE.some((s) => s.includes(A118_REFRAME))) die(`a1.18's « ${A118_REFRAME} » is not quoted verbatim anywhere.`);
if (!ALL_SURFACE.some((s) => s.includes(NEGATION_EXTENSION))) die(`a2.06's « ${NEGATION_EXTENSION} » is not quoted verbatim anywhere.`);
/* AND IT IS CREDITED, because quoting a neighbour's sentence silently is how
 * three lessons come to look like three rules. */
{
  const quoting = ALL_SURFACE.filter((s) => s.includes(NEGATION_EXTENSION));
  if (!quoting.some((s) => namesUnit(s, DIRECT_UNIT))) {
    die(`a2.06's negation sentence is quoted and ${DIRECT_UNIT} is not named beside it anywhere.`);
  }
}

/* ═══ 9. WHAT a2.23 PROMISED, DELIVERED ══════════════════════════════════ */

/* a2.23 SHIPPED A LEARNER SURFACE reading « … and the reason the ending
 * disappears on this screen is waiting there too. » A learner who reaches this
 * lesson and finds nothing has been sent somewhere that does not exist. */
if (ENDING_OWNER !== UNIT.id) die(`ENDING_OWNER is ${ENDING_OWNER} and this lesson is ${UNIT.id}.`);
if (!ALL_SURFACE.some((s) => s.includes(ENDING_RULE))) die('the ending rule is not stated verbatim anywhere and this lesson claims to own it.');
{
  const s16 = display(section('s16-ending'));
  if (!s16.some((s) => s.includes(ENDING_RULE))) die('s16-ending does not state the rule it exists for.');
  if (!s16.some((s) => namesUnit(s, REFLEXIVE_PAST_UNIT))) die(`s16-ending does not name ${REFLEXIVE_PAST_UNIT}, which pointed the learner here on a shipped screen.`);
  if (!s16.some((s) => s.includes(A223_POINTER_TAIL))) {
    die(`s16-ending does not quote a2.23's promise « ${A223_POINTER_TAIL} » verbatim, so the pointer is honoured by coincidence rather than on purpose.`);
  }
  if (!s16.some((s) => s.includes(importedRow(A223_ROW_ID).fr))) die(`s16-ending does not show ${REFLEXIVE_PAST_UNIT}'s own sentence.`);
  /* ONE ACT, NOT THE SPINE, and RECOGNITION ONLY: there is nothing to type
   * because the rule is that nothing is added. */
  const act5 = (LESSON.acts ?? []).find((a) => a.id === 'act5');
  if (!act5) die('act5 is missing and it is where the ending lives.');
  if (act5.sections.length >= OWNS_SECTION_COUNT) {
    die(`the ending act has ${act5.sections.length} sections against the Owns' ${OWNS_SECTION_COUNT}. It is one act, not the spine.`);
  }
  /* AND NO AUTHORED ROW CARRIES AN AGREED PARTICIPLE AFTER lui OR leur, which is
   * the thing the rule says never happens. */
  for (const r of ROWS) {
    if (/(lui|leur)\s+(?:ne\s+)?(?:ai|as|a|avons|avez|ont)\s+\S*(ée|és|ées)(?![\p{L}])/iu.test(r.fr)) {
      die(`${r.id} « ${r.fr} » puts an ending on the second word after lui or leur, which the lesson says never happens.`);
    }
  }
}

/* ═══ 10. THE SIXTH OCCURRENCE OF THE RECURRING SHAPE ════════════════════ */

/* Doctrine §B.7 asks, from seq 14 onward, that the earlier instance is named by
 * unit id. a2.06 was the fifth ONE LESSON AGO, so it is named too. */
{
  const quoting = ALL_SURFACE.filter((s) => s.includes(WHAT_FOLLOWS));
  if (!quoting.length) die(`a2.02's « ${WHAT_FOLLOWS} » is quoted nowhere.`);
  if (!quoting.some((s) => namesUnit(s, 'a2.02'))) die('the recurring shape is quoted and a2.02 is not named beside it.');
  if (!ALL_SURFACE.some((s) => /sixth/iu.test(s))) die('the lesson does not say this is the sixth occurrence, so it reads as a new observation.');
  if (!ALL_SURFACE.some((s) => /sixth/iu.test(s) && namesUnit(s, DIRECT_UNIT))
    && !ALL_SURFACE.some((s) => namesUnit(s, DIRECT_UNIT) && /fifth/iu.test(s))) {
    die(`the sixth occurrence is named and ${DIRECT_UNIT}'s fifth is not credited beside it. Doctrine §B.7 asks for the earlier instance by unit id.`);
  }
  if (!ALL_SURFACE.some((s) => s.includes(STRESSED_RULE))) die('the stressed-pronoun rule is not stated verbatim anywhere.');
}

/* ═══ 11. THE QUIZ ═══════════════════════════════════════════════════════ */

const QUESTIONS = quizQuestions(section('s23-quiz') as Parameters<typeof quizQuestions>[0]);
if (QUESTIONS.length !== EXPECTED_QUESTIONS) die(`${QUESTIONS.length} questions and EXPECTED_QUESTIONS is ${EXPECTED_QUESTIONS}.`);
/* ONE QUIZ. A second is silently never rendered. */
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('there is not exactly one quiz section.');

const ANSWERABLE = new Set<string>(AUTHORED_ITEMS.map((i) => i.fr));
{
  const mcq = QUESTIONS.filter((q) => q.format === 'mcq').length;
  if (mcq > QUESTIONS.length / 2) die(`${mcq} of ${QUESTIONS.length} questions are mcq and at most half may be.`);
  const free = QUESTIONS.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  if (free < 12) die(`only ${free} free-text questions. fold() keeps a final -s, so the central trap of this lesson is fully testable by typing and the exam is shaped around that.`);
  for (const q of QUESTIONS) {
    if (!q.why) die(`a question has no why: ${q.q}`);
    if (!q.ref) die(`a question has no ref: ${q.q}`);
    if (!LESSON.sections.some((s) => s.id === q.ref)) die(`a question refs ${q.ref}, which is not a section.`);
    if (q.opts && new Set(q.opts).size !== q.opts.length) die(`a question has a duplicate option: ${q.q}`);
    if (q.accept) {
      for (const a of q.accept) {
        if (!matchesAccept(a, q.accept)) die(`« ${a} » is not accepted by its own accept list: ${q.q}`);
        if (/\s/u.test(a) && !ANSWERABLE.has(a)) {
          die(`« ${a} » is a free-text answer and is not a sentence this lesson owns.`);
        }
      }
    }
    /* NO EAR QUESTION MAY SEPARATE TWO OPTIONS THAT ARE ONE SOUND, and the group
     * that matters here is the lesson's own trap: leur and leurs. */
    if (q.format === 'listenChoose' && q.opts) {
      for (const g of HOMOPHONE_FORMS) {
        const hits = q.opts.filter((o) => g.some((form) => o === form || hasPhrase(o, form)));
        if (hits.length > 1) die(`an ear question offers « ${hits.join(' » and « ')} », which are one sound: ${q.q}`);
      }
    }
    /* AND NO TYPED QUESTION MAY TURN ON THE GRAVE ON à. fold() strips it, so the
     * app would accept the mistake and tell the learner they spelled it right.
     * This is the single most tempting question in the lesson. */
    if ((q.format === 'typeIn' || q.format === 'errorSpot') && q.accept) {
      for (const a of q.accept) {
        const stripped = a.replace(/à/gu, 'a');
        if (stripped !== a && q.accept.some((x) => x !== a) === false && fold(stripped) === fold(a)
          && /\baccent|\bgrave|à against a|a against à/iu.test(q.q)) {
          die(`a typed question turns on the accent in à: ${q.q}. fold() strips it and the app would mark the mistake right.`);
        }
      }
    }
  }
  /* AND THE ACCENT QUESTION EXISTS, AS AN mcq. a2.09's precedent: the question
   * that cannot be typed is written as a choice rather than dropped. */
  {
    const accent = QUESTIONS.find((q) => q.q.includes(ACCENT_LIMIT));
    if (!accent) die('the accent limit is never put to the learner, and it is the one thing about à they will get wrong in writing.');
    if (accent.format !== 'mcq') die(`the accent question is a ${accent.format} and only an mcq can test a diacritic.`);
    const opts = accent.opts ?? [];
    const withA = opts.filter((o) => o.includes('à')).length;
    const withoutA = opts.filter((o) => /\ba\s/u.test(o)).length;
    if (!withA || !withoutA) die('the accent question does not offer both the accented and the unaccented form, so it is not testing the accent.');
    if (fold(opts[accent.correct as number] ?? '') === fold(opts.find((o) => /\ba\s/u.test(o)) ?? 'x')) {
      /* CONFIRMED, NOT ASSUMED: the two options fold together, which is exactly
       * why this cannot be a typed question. */
    } else {
      die('the two options in the accent question do not fold together, so the untestability claim is wrong and the question could have been typed.');
    }
  }
}
/* THE CORRECT ANSWER MUST NOT CLUSTER. */
{
  const closed = QUESTIONS.filter((q) => typeof (q as { correct?: number }).correct === 'number');
  const bySlot = new Map<number, number>();
  for (const q of closed) {
    const i = (q as { correct: number }).correct;
    bySlot.set(i, (bySlot.get(i) ?? 0) + 1);
  }
  for (const [slot, n] of bySlot) {
    if (n / closed.length > 0.4) die(`option slot ${slot} holds ${n} of ${closed.length} closed answers, over the 40% cap.`);
  }
}
/* `drillForRound` FIRES THE FIRST RESOLVING TARGET ONLY. Invariants §4. */
{
  const rounds = (section('s23-quiz') as { rounds?: { id: string; targets?: string[] }[] }).rounds ?? [];
  const triggers = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t]));
  const leads = new Set<string>();
  for (const r of rounds) {
    const first = (r.targets ?? []).find((t) => triggers.has(t));
    if (!first) die(`round ${r.id} names no target that resolves to an error trigger.`);
    leads.add(first);
    for (const t of r.targets ?? []) if (!triggers.has(t)) die(`round ${r.id} names ${t}, which is not an error trigger.`);
  }
  for (const t of triggers.keys()) {
    if (!leads.has(t)) die(`${t} is never the FIRST resolving target of any round, so its drill is dead content.`);
  }
  for (const t of triggers.values()) {
    if (!(LESSON.drills ?? []).some((d) => d.id === t.drill)) die(`${t.id} names drill ${t.drill}, which does not exist.`);
    if (!(LESSON.drills ?? []).some((d) => d.id === t.retest)) die(`${t.id} names retest ${t.retest}, which does not exist.`);
    for (const sid of t.detectOn ?? []) section(sid);
  }
}

/* ═══ 12. THE DICTÉE ═════════════════════════════════════════════════════ */

{
  const ids = (section('s18-dictation') as { itemIds?: string[] }).itemIds ?? [];
  if (!ids.length) die('the dictée targets nothing.');
  for (const id of ids) {
    if (!AUTHORED_IDS.includes(id)) die(`the dictée targets ${id}, which this build does not author.`);
    const r = AUTHORED_ITEMS.find((i) => i.id === id)!;
    if (dicteeMode(r.fr) !== 'letters') {
      die(`the dictée targets « ${r.fr} », which dicteeMode puts in WORD mode. Word mode hands every real word over `
        + 'pre-spelled, which gives away the SPELLING, and a silent -s is the entire thing this lesson tests.');
    }
    if (r.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length > DICTEE_MAX_LETTERS) die(`« ${r.fr} » is over ${DICTEE_MAX_LETTERS} letters.`);
    if (!r.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill.`);
  }
  /* AND IT CARRIES BOTH PRONOUNS AND BOTH POSSESSIVES, which is why it exists:
   * it is the only surface that makes a learner build the -s decision from
   * nothing. */
  for (const want of ['lui', 'leur'] as const) {
    if (!ids.some((id) => ROWS.find((r) => r.id === id)?.pro === want)) {
      die(`the dictée asks for no « ${want} », and it is the only surface that makes a learner write the choice from nothing.`);
    }
  }
  {
    const poss = ids.map((id) => ROWS.find((r) => r.id === id)!).filter((r) => r.possessive);
    if (!poss.some((r) => hasPhrase(r.fr, 'leurs'))) die('the dictée asks for no « leurs », so the -s that DOES belong is never written.');
    if (!poss.some((r) => hasPhrase(r.fr, 'leur') && !hasPhrase(r.fr, 'leurs'))) die('the dictée asks for no singular possessive « leur ».');
  }
  /* AND fold() KEEPS THE FINAL -s, which is the only reason any of this is
   * testable. Measured through the real function rather than believed. */
  if (fold('Je leur parle.') === fold('Je leurs parle.')) {
    die('fold() collapses leur and leurs, so the central trap of this lesson is NOT testable in writing after all and the whole quiz shape is wrong.');
  }
}
/* EVERY ROW CARRYING THE DICTATION DRILL IS LETTERS-MODE. */
{
  const ids = new Set((section('s18-dictation') as { itemIds?: string[] }).itemIds ?? []);
  for (const o of AUTHORED_ITEMS.filter((i) => i.drills.includes('dictation') && !ids.has(i.id))) {
    if (dicteeMode(o.fr) !== 'letters') die(`${o.id} carries the dictation drill and dicteeMode puts it in WORD mode.`);
  }
}

/* ═══ 13. THE SPEAK AND ROLE-PLAY SURFACES ═══════════════════════════════ */

for (const id of (section('s20-speak') as { itemIds?: string[] }).itemIds ?? []) {
  const r = AUTHORED_ITEMS.find((i) => i.id === id);
  if (!r) die(`the speak surface names ${id}, which this build does not author.`);
  if (!r!.drills.includes('voiceflash')) die(`${id} is on the speak surface and carries no voiceflash drill.`);
}
{
  const turns = (section('s19-talk') as { turns?: { ai: string; en: string; user: string; userEn?: string; alts?: unknown[] }[] }).turns ?? [];
  if (!turns.length) die('the role play has no turns.');
  for (const t of turns) {
    if (!t.userEn) die(`a role-play turn has no userEn: « ${t.user} ».`);
    if ((t.alts ?? []).length < 2) die(`a role-play turn has under two alts: « ${t.user} ».`);
    const r = AUTHORED_ITEMS.find((i) => i.fr === t.user);
    if (!r) die(`a role-play turn says « ${t.user} », which is not an authored row.`);
    if (!r!.drills.includes('roleplay')) die(`${r!.id} is a role-play turn and carries no roleplay drill.`);
  }
}

/* ═══ 14. TRANCHES, ITEMS, AND EVERY ITEM ON A SCREEN ════════════════════ */

{
  const tranches = LESSON.deckTranche ?? [];
  const flat = tranches.flat();
  if (new Set(flat).size !== flat.length) die('an item is released by two tranches.');
  const known = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
  for (const id of flat) if (!known.has(id)) die(`tranche releases ${id}, which this lesson neither authors nor imports.`);
  const declared = new Set(LESSON.itemIds ?? []);
  for (const id of flat) if (!declared.has(id)) die(`${id} is released by a tranche and is not in itemIds.`);
  for (const id of declared) if (!flat.includes(id)) die(`${id} is in itemIds and no tranche releases it.`);
  /* NO TRANCHE RELEASES SOMETHING THE ACTS BEFORE IT HAVE NOT SHOWN. */
  const acts = LESSON.acts ?? [];
  if (tranches.length !== acts.length) die(`${tranches.length} tranches and ${acts.length} acts.`);
  const shown = new Set<string>();
  for (let i = 0; i < acts.length; i += 1) {
    for (const sid of acts[i]!.sections) {
      const sec = section(sid);
      for (const s of display(sec)) {
        for (const id of known) if (s.includes(id)) shown.add(id);
      }
      for (const id of (sec as { itemIds?: string[] }).itemIds ?? []) shown.add(id);
      for (const c of (sec as { cards?: unknown[] }).cards ?? []) {
        for (const s of display(c)) for (const id of known) if (s.includes(id)) shown.add(id);
      }
      /* An authored row is SHOWN when its `fr` reaches a screen in that act. */
      for (const s of display(sec)) {
        for (const r of AUTHORED_ITEMS) if (s.includes(r.fr)) shown.add(r.id);
        for (const id of IMPORTED_IDS) if (s.includes(importedRow(id).fr)) shown.add(id);
      }
    }
    for (const id of tranches[i]!) {
      if (!shown.has(id)) die(`tranche ${i + 1} releases ${id} and no act up to and including act ${i + 1} put it on a screen.`);
    }
  }
  /* AND NOTHING AUTHORED IS DEAD. */
  for (const r of AUTHORED_ITEMS) if (!declared.has(r.id)) die(`${r.id} is authored and no section names it.`);
}

/* ═══ 15. THE HOUSE COPY, IN BOTH WALKS ══════════════════════════════════ */

const DOUBLE_STOP = /[.]\s*[.!?,;:]/u;

/* THE UNIT'S OWN ENGLISH TITLE IS THE ONE PLACE THE TECHNICAL COMPOUNDS MAY
 * APPEAR, and this unit's name contains BOTH of the phrases a2.06 refused
 * outright. The exemption is checked to BE the unit's title. Corpus §8. */
const TITLE_EXEMPT = LESSON.overview?.titleEn ?? '';
if (TITLE_EXEMPT !== UNIT.title) {
  die(`overview.titleEn is « ${TITLE_EXEMPT} » and content_units holds « ${UNIT.title} ».`);
}
if (!/indirect object/iu.test(TITLE_EXEMPT) || !/object pronoun/iu.test(TITLE_EXEMPT)) {
  die('the exempt title no longer contains both technical compounds, so the exemption is wider than it needs to be.');
}
/* EVERY COUNTABLE JARGON ENTRY CARRIES ITS -s PLURAL. Corrections §13. */
for (const j of JARGON_NOUNS) {
  if (j.endsWith('s')) continue;
  if (!JARGON_NOUNS.includes(`${j}s`)) die(`JARGON_NOUNS holds « ${j} » and not « ${j}s ». A boundary-exact check misses the plural.`);
}
/* AND THE ADJECTIVE LIST IS NOT A HIDING PLACE. a2.06 §7.2: an entry parked
 * there to dodge the plural requirement would silently weaken the check. */
for (const j of JARGON_ADJECTIVES) {
  if (JARGON_NOUNS.includes(j)) die(`« ${j} » is on both jargon lists.`);
  if (/(pronoun|object|antecedent|determiner|adjective|clitic$)/u.test(j) && j !== 'proclitic' && j !== 'enclitic') {
    die(`« ${j} » is a countable noun on the adjective list, which dodges the plural requirement.`);
  }
}
/* A SENTENCE MAY NOT START ON A LOWERCASE WORD, AND THIS WAS FOUND ON GLASS.
 *
 * Three strings interpolated a1.17's test — which is a lowercase fragment,
 * « a possessive has a thing behind it » — straight after a full stop, so the
 * trapDrill's rule card drew « … how many people you mean. a possessive has a
 * thing behind it, and a verb is not a thing. » That reads as a typo. The repair
 * is to quote the fragment; the guard is so the next interpolation cannot do it
 * again.
 *
 * TWO EXEMPTIONS, BOTH MEASURED RATHER THAN ASSUMED: a unit id is lowercase by
 * construction (« … not a thing. a1.17 gave you … » is correct house style), and
 * so is a French word inside « » or an authored French sentence starting with a
 * lowercase article. The shape therefore requires an ASCII lowercase letter that
 * is not the start of a unit id and not inside a quotation. */
{
  /* THE CAPTURED WORD MUST INCLUDE DIGITS AND DOTS, or the unit-id exemption
   * cannot see one: `[a-z]+` matches only the `a` of `a1.17` and the exemption
   * then fails on its own MUST_NOT_FIRE case, which is how this was caught. */
  const SENTENCE_START = /[.!?]\s+([a-z][a-z0-9.']*)/gu;
  const startsLower = (s: string): string | null => {
    for (const m of s.matchAll(SENTENCE_START)) {
      const w = m[1]!;
      if (/^(a\d|b\d|sons)/u.test(w)) continue;           // a unit id: a1.17, a2.06, b1, sons
      if (s.slice(0, m.index).endsWith('«')) continue;     // inside a quotation
      const after = s.slice((m.index ?? 0) + m[0].length);
      if (after.startsWith('·')) continue;            // a label separator
      return `${w} …`;
    }
    return null;
  };
  const MUST_FIRE = ['You mean it. a possessive has a thing behind it, and a verb is not a thing.'];
  for (const s of MUST_FIRE) if (!startsLower(s)) die(`the lowercase-start guard does not fire on « ${s} », so it is not a guard.`);
  const MUST_NOT_FIRE = [
    'Nothing is added. a1.17 gave you the test.',
    'The word moves. Nothing else does.',
    'It never has. « a possessive has a thing behind it », and a verb is not a thing.',
    'A verb follows. a2.06 taught the position.',
  ];
  for (const s of MUST_NOT_FIRE) {
    const hit = startsLower(s);
    if (hit) die(`the lowercase-start guard fires on « ${s} » at « ${hit} », which it must not.`);
  }
  for (const s of DISPLAY_SURFACE) {
    const hit = startsLower(s);
    if (hit) die(`a sentence starts on a lowercase word « ${hit} », which reads as a typo: « ${s.slice(0, 110)} ».`);
  }
}

for (const walk of [PROSE_SURFACE, DISPLAY_SURFACE]) {
  for (const s of walk) {
    if (/[—–]/u.test(s)) die(`an em dash reaches a learner surface: « ${s.slice(0, 90)} ».`);
    /* SUBSTRING, NOT A WORD BOUNDARY. a2.06 §7.1: every batch in this band
     * carries `/\bhonest/i`, which does NOT match `dishonest`, and only the
     * seed-wide test caught it after the lesson had been applied. */
    if (/honest/i.test(s)) die(`a banned word reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (DOUBLE_STOP.test(s)) die(`a sentence-final stop with punctuation after it: « ${s.slice(0, 90)} ».`);
    if (s === TITLE_EXEMPT) continue;
    for (const j of JARGON) {
      if (hasPhrase(s, j)) die(`grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 90)} ».`);
    }
  }
}
/* AND THE RATIO, which is corrections §14.5's method rather than a ban. */
{
  const plain = ALL_SURFACE_RAW.filter((s) => hasPhrase(s, PLAIN_PHRASE) || hasPhrase(s, PLAIN_TARGET)).length;
  const technical = ALL_SURFACE_RAW.filter((s) => hasPhrase(s, 'indirect object') || hasPhrase(s, 'object pronoun')).length;
  if (plain <= technical) die(`the plain phrase appears ${plain} times and the technical ones ${technical}. §14.5: the plain phrase must outnumber them.`);
  if (technical !== 1) die(`the technical compounds appear on ${technical} strings and the only permitted one is overview.titleEn.`);
  /* AND `pronoun` IS HOUSE VOCABULARY, measured by a2.06 at 233 uses across the
   * shipped seed. Banning it would be the build inventing a rule. */
  if (!ALL_SURFACE.some((s) => hasPhrase(s, 'pronoun'))) die('« pronoun » appears nowhere, and it is house vocabulary on 233 shipped cards.');
}
/* THREE TERM CHIPS PER SECTION. */
for (const s of LESSON.sections) {
  const t = (s as { terms?: string[] }).terms ?? [];
  if (t.length > 3) die(`${s.id} declares ${t.length} term chips and the renderer shows 3.`);
  for (const k of t) if (!PRONOMS_INDIRECT_TERMS[k]) die(`${s.id} names term « ${k} », which is not defined.`);
}
for (const k of Object.keys(PRONOMS_INDIRECT_TERMS)) {
  if (!LESSON.sections.some((s) => ((s as { terms?: string[] }).terms ?? []).includes(k))) {
    die(`term « ${k} » is defined and no section surfaces it.`);
  }
}
/* `intro` IS PINNED IN ITS OWN ASSERTION. Corrections §9. */
{
  const intro = LESSON.intro ?? '';
  if (!intro) die('the lesson has no intro, and it is drawn on the overview card AND the lesson cover.');
  for (const j of JARGON) if (hasPhrase(intro, j)) die(`grammar jargon in the intro: « ${j} ».`);
  if (!intro.includes('behind à')) die('the intro does not state where the person sits, which is the whole lesson.');
  if (!/ten verbs/iu.test(intro)) die('the intro does not say the list is ten verbs long, and the list is the Owns.');
}

/* ═══ 16. commonErrors, trapDrill AND THE SEED-WIDE CONTRACTS ════════════ */

{
  const ce = section('s14-errors') as { swipe?: boolean; errors?: { wrong: string; right: string; why: string }[] };
  if (!ce.swipe) die('commonErrors has no swipe: true and draws a blank screen without it.');
  if (!(ce.errors ?? []).length) die('commonErrors has no errors.');
  for (const e of ce.errors ?? []) {
    if (!e.why) die(`a common error has no why: « ${e.wrong} ».`);
    if (e.wrong === e.right) die('a common error has the same wrong and right.');
  }
}
{
  const td = section('s12-trap') as {
    swipe?: boolean; size?: string; audio?: { recordingId?: string }; say?: string;
    rule?: unknown; steps?: { kind: string; gate?: boolean }[]; cards?: { fr?: string }[]; drill?: unknown[];
  };
  if (!td.swipe) die('the trapDrill has no swipe: true.');
  if (td.size) die('the trapDrill carries a `size` and size comes OFF a stepped trapDrill. Corrections §14.6.');
  if (!td.audio) die('the trapDrill has no audio spec.');
  if (!td.say) die('the trapDrill has no say.');
  if (!td.rule) die('the trapDrill has no rule block.');
  const kinds = (td.steps ?? []).map((s) => s.kind);
  if (kinds.join(',') !== 'rule,cards,audio,drill') {
    die(`the trapDrill walks ${kinds.join(' > ')} and lesson-contract.test.ts requires rule > cards > audio > drill.`);
  }
  const drillStep = (td.steps ?? []).find((s) => s.kind === 'drill');
  if (!drillStep?.gate) die('the trapDrill\'s drill step is not gated.');
  if (!(td.cards ?? []).length || !(td.drill ?? []).length) die('the trapDrill has no cards or no drill items.');
  /* THE AUDIO STEP PLAYS EACH CARD's `fr`, so the take must contain those lines.
   * The ledger sweep flags this and the contract test does not check it, so the
   * brief is asserted against the recording id here. */
  const takeId = td.audio?.recordingId;
  if (!takeId) die('the trapDrill audio has no recordingId, and the audio step plays each card\'s fr.');
  const brief = (LESSON.audio?.recorded ?? []).find((r) => r.id === takeId);
  if (!brief) die(`the trapDrill points at ${takeId} and no audio brief declares it.`);
  for (const c of td.cards ?? []) {
    if (!brief.desc.includes(c.fr ?? '')) {
      die(`the trapDrill's audio step plays « ${c.fr} » and ${takeId}'s brief does not name that line, so the studio has no way to know it is needed.`);
    }
  }
}

/* ═══ 17. THE MISSION-ROW TITLE WIDTH ════════════════════════════════════ */

/* a2.06 shipped a title that clipped on a Pixel 6 with every host gate green,
 * because it asserted a great deal about each section and nothing about how wide
 * its title draws. `titleWidth` is IMPORTED from a2.23 rather than copied. */
{
  for (const s of TITLE_MUST_FIT) {
    if (titleWidth(s) > TITLE_WIDTH_MAX) die(`the width model has drifted: « ${s} » is measured FITTING on a device and the model says ${titleWidth(s)} > ${TITLE_WIDTH_MAX}.`);
  }
  for (const s of TITLE_MUST_CLIP) {
    if (titleWidth(s) <= TITLE_WIDTH_MAX) die(`the width model has drifted: « ${s} » is measured CLIPPING on a device and the model says ${titleWidth(s)} <= ${TITLE_WIDTH_MAX}.`);
  }
  for (const s of LESSON.sections) {
    const w = titleWidth(s.title ?? '');
    if (w > TITLE_WIDTH_MAX) die(`${s.id} title « ${s.title} » is ${w} em against the mission row's ${TITLE_WIDTH_MAX}. It will clip.`);
  }
}

/* ═══ 18. APPLY ══════════════════════════════════════════════════════════ */

async function main() {
  console.log(`\n  a2.24 « ${UNIT.sub} », seq ${UNIT.seq}\n`);
  console.log(`  guards        all passed over ${ALL_SURFACE.length} learner strings`);
  console.log(`  corpus        ${AUTHORED_ITEMS.length} authored into ${THEME}, ${IMPORTED_IDS.length} imported, 0 headwords authored`);
  console.log(`  lesson        ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions`);
  console.log(`  the Owns      ${OWNS_SECTION_COUNT} sections against the paradigm's ${PARADIGM_SECTION_COUNT}`);
  console.log(`  the verbs     ${A_VERBS.length}, split ${A_VERBS_SILENT.length} with no English signal and ${A_VERBS_MARKED.length} with one`);
  console.log(`  the ending    a2.23's pointer honoured, one section, recognition only`);
  console.log(`  repairs       ${RESPELL_REPAIRS.length}, ${RESPELL_REPAIRS.filter((r) => r.blind).length} BLIND, ${RESPELL_REPAIRS.filter((r) => r.house).length} house, ${FALSE_POSITIVES.length} false positives worked round`);

  const c = await pool.connect();

  const beforeQ = await c.query<{ n: string }>(
    "select count(*)::text n from content_items where theme = $1 and status = 'published'", [THEME]);
  const before = Number(beforeQ.rows[0]!.n);
  const blockQ = await c.query<{ id: string }>("select id from content_items where id like 'fr.a2.pronoms-essentiels.%'");
  const stray = blockQ.rows.map((r) => r.id).filter((id) => isMine(id) && !AUTHORED_IDS.includes(id));
  if (stray.length) { c.release(); await pool.end(); die(`rows inside this build's block that it does not own: ${stray.join(', ')}.`); }

  const unitRow = await c.query<{ body: { id: string; seq: number; title: string; sub: string; canDo: string; lessonIds?: string[]; prereqUnitIds?: string[] } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID]);
  const unit = unitRow.rows[0]?.body;
  if (!unit) { c.release(); await pool.end(); die(`${UNIT_ID} is not in content_units.`); }
  for (const k of ['seq', 'title', 'sub', 'canDo'] as const) {
    if (String(unit![k]) !== String(UNIT[k])) {
      c.release(); await pool.end();
      die(`the unit's ${k} is « ${String(unit![k])} » and the corpus file claims « ${String(UNIT[k])} ». Corrections §1.`);
    }
  }
  /* THE PREREQUISITE IS SHIPPED. a2.23 made this permanent and it is kept, and
   * this build's brief says to STOP if a2.06 is not shipped. */
  {
    const declared = unit!.prereqUnitIds ?? [];
    for (const p of UNIT.prereqUnitIds) {
      if (!declared.includes(p)) { c.release(); await pool.end(); die(`the unit does not declare ${p} as a prerequisite.`); }
      const pq = await c.query<{ body: { lessonIds?: string[] } }>(
        "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [p]);
      if (!(pq.rows[0]?.body?.lessonIds ?? []).length) {
        c.release(); await pool.end();
        die(`${p} is a hard prerequisite and has NO SHIPPED LESSON. The brief says to stop and say so.`);
      }
    }
  }
  /* AND THE ROW THIS LESSON BORROWS FROM a2.06 IS ACTUALLY a2.06's. */
  {
    const fq = await c.query<{ fr: string }>('select fr from content_items where id = $1', [A206_FRAME_ID]);
    if (!fq.rows.length) { c.release(); await pool.end(); die(`${A206_FRAME_ID} is a2.06's frame and is not in the database.`); }
  }
  const expectedTag = `A2 · LEÇON ${String(unit!.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) {
    c.release(); await pool.end();
    die(`the lesson's tag is « ${LESSON.tag} » and missions.ts computes « ${expectedTag} » from the live unit's seq.`);
  }
  const nextUnit = { ...unit!, lessonIds: [...new Set([...(unit!.lessonIds ?? []), LESSON.id])] };
  console.log(`  unit          ${UNIT_ID} seq ${unit!.seq}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit!.lessonIds ?? [])}`);

  const prev = await c.query<{ body: unknown }>("select body from content_units where kind = 'lesson' and slug = $1", [LESSON.id]);
  const prevBody = prev.rows[0]?.body as { version?: number } | undefined;
  const prevVersion = prevBody?.version ?? 0;
  if (LESSON.version < prevVersion) {
    c.release(); await pool.end();
    die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version}. The counter moves forward, never back.`);
  }
  if (LESSON.version === prevVersion && canonicalJson(prevBody) !== canonicalJson(LESSON)) {
    c.release(); await pool.end();
    die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version} with DIFFERENT content. Move the counter.`);
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
        `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, notes, tags, drills, version, status)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,'published')
         on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
           fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           status='published'`,
        [it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.notes ?? null, it.tags ?? [], it.drills ?? [], it.version ?? 1],
      );
    }
    /* THE RESPELLING REPAIRS. Fifteen rows across nine themes, and nothing but
     * the respelling changes. */
    for (const rep of RESPELL_REPAIRS) {
      const r = await c.query('update content_items set respell = $1, updated_at = now() where id = $2', [rep.to, rep.id]);
      if (r.rowCount !== 1) throw new Error(`the repair of ${rep.id} touched ${r.rowCount} rows, expected exactly 1`);
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
    "select count(*)::text n, coalesce(max(id),'') mx from content_items where theme = $1 and status = 'published'", [THEME]);
  const after = Number(afterQ.rows[0]!.n);
  if (after !== before + AUTHORED_ITEMS.length && after !== before) {
    c.release(); await pool.end();
    die(`${THEME} holds ${after} rows and it held ${before} before this build's ${AUTHORED_ITEMS.length}.`);
  }
  const rb = await c.query<{ id: string; fr: string; respell: string | null }>(
    'select id, fr, respell from content_items where id = any($1)', [AUTHORED_IDS]);
  if (rb.rows.length !== AUTHORED_ITEMS.length) { c.release(); await pool.end(); die(`${rb.rows.length} of ${AUTHORED_ITEMS.length} rows read back.`); }
  for (const r of rb.rows) {
    const want = AUTHORED_ITEMS.find((i) => i.id === r.id)!;
    if (r.fr !== want.fr) { c.release(); await pool.end(); die(`${r.id} stored fr="${r.fr}" and the corpus says "${want.fr}".`); }
    if (r.respell !== want.respell) { c.release(); await pool.end(); die(`${r.id} stored respell="${r.respell}".`); }
    if (hasPlainNasalFor(r.fr, String(r.respell ?? ''))) { c.release(); await pool.end(); die(`${r.id} is flagged after the apply.`); }
  }
  /* AND THE REPAIRS LANDED, read back through the real function. The six blind
   * ones cannot be checked that way — the checker never flagged them — so they
   * are checked against the table by string. */
  const rr = await c.query<{ id: string; fr: string; respell: string }>(
    'select id, fr, respell from content_items where id = any($1)', [REPAIRED_IDS]);
  for (const r of rr.rows) {
    const want = RESPELL_REPAIRS.find((x) => x.id === r.id)!;
    if (r.respell !== want.to) { c.release(); await pool.end(); die(`${r.id} stored respell="${r.respell}" and the repair wanted "${want.to}".`); }
    if (hasPlainNasalFor(r.fr, r.respell)) { c.release(); await pool.end(); die(`${r.id} is still flagged after the repair.`); }
    if (want.blind && r.respell !== want.to) { c.release(); await pool.end(); die(`${r.id} is blind, so only the string comparison can prove the repair landed, and it did not.`); }
  }

  console.log(
    '\n  applied to Postgres:\n'
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_IDS[0]}..${AUTHORED_IDS[AUTHORED_IDS.length - 1]}\n`
    + '      ZERO headwords, ZERO gendered rows, ZERO duplicate fr inside the theme.\n'
    + `    ${IMPORTED_IDS.length} rows imported by id, ${RESPELL_REPAIRS.length} respellings repaired across 9 themes\n`
    + `      ${RESPELL_REPAIRS.filter((r) => r.blind).length} of them BLIND to hasPlainNasalFor, which a2.06 had none of\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions, ${(LESSON.itemIds ?? []).length} items\n`
    + `    the Owns ${OWNS_SECTION_COUNT} sections against the paradigm's ${PARADIGM_SECTION_COUNT}\n`
    + `    ${THEME} row count: ${before} before, ${after} after (max ${afterQ.rows[0]!.mx})\n`
    + `    a2.23's pointer honoured by ${ENDING_OWNER}, one section\n\n`
    + '  NEXT: pnpm tsx scripts/merge-pronoms-indirect-into-seed.ts\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
