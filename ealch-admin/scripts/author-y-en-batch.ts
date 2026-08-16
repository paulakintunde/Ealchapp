/* a2.25.l1 « Y et EN » — corpus, lesson and terms, into Postgres.
 *
 *     pnpm content:y-en -- --dry-run
 *     pnpm content:y-en
 *
 * Everything is validated BEFORE the database is touched, the write is one
 * transaction, and the whole thing is idempotent by id.
 *
 * ── THE FOUR HOLES IN THE GUARDS THIS FILE INHERITS, AND WHAT IT DOES ──────
 *
 * §9  THE JARGON WALK DOES NOT READ `intro` OR `overview`. Both are drawn on
 *     the lesson overview card AND the lesson cover. `surfaceOf()` reads them,
 *     and `intro` carries its own assertion.
 * §9  A SOURCE THAT THROWS SILENTLY DISABLES HALF A TEST FILE. Closed outright
 *     in the test, which imports nothing from here.
 * §13 `prose()` DROPS `sub`, WHICH HOLDS PROSE ON A cardDeck CARD. Every
 *     house-copy and jargon check runs over a `display()` walk as well. THIS
 *     LESSON'S REQUIRED LAYOUT 1 IS A `fr`/`sub` PAIR — the y row on one line
 *     and the en row on the next — so a guard on `prose()` alone would not see
 *     half of the layout it is supposed to be asserting.
 * §13 `hasPhrase` IS BOUNDARY-EXACT, so a list holding `clitic` misses
 *     `clitics`. Every countable JARGON entry carries its -s plural.
 * §14.3 THE HOUSE BOUNDARY EXCLUDES THE APOSTROPHE, AND THIS IS THE LESSON THE
 *     BRIEF SAYS IT MATTERS MOST IN: `j'y`, `j'en`, `n'y` and `n'en` are most of
 *     the content. Dropped from the LEFT and kept on the right, everywhere.
 *
 * ── AND THE TWO SEED-WIDE CONTRACTS ───────────────────────────────────────
 *
 * `scenario.logic.test.ts` requires two `alts` and a `userEn` on every role-play
 *   turn. Asserted here rather than discovered by the suite.
 * `lesson-contract.test.ts` requires every A2 `trapDrill` to walk
 *   rule > cards > audio > drill, with `swipe`, an `audio` spec, a `say` and a
 *   GATED drill step, and `size` comes OFF a stepped one.
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
  A, A118_REFRAME, A204_CITY_ID, A204_ROW_ID, A206_FRAME_ID, A218_EN_ROW_ID,
  A218_ILYA_AGO_ID, A218_ILYA_ROW_ID, A224_NAMED_ID, A224_PRONOUN_ID, A_FRAMING,
  A_FRAMING_COUNT, A_FRAMING_MINE, ACCENT_LIMIT, AUTHORED_IDS, DE_FRAMING,
  DICTEE_MAX_LETTERS, DIRECT_UNIT, EN_JOBS, EN_POSITION_RULE, EN_ROW,
  EN_SECTION_COUNT, EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_IMPORTED,
  EXPECTED_QUESTIONS, EXPECTED_SECTIONS, FALSE_POSITIVES, FROZEN_ERROR,
  FROZEN_RULE, HOMOPHONE_FORMS, ID_FIRST, ID_LAST, IMPORTED, IMPORTED_PHRASES,
  INDIRECT_UNIT, JARGON, JARGON_ADJECTIVES, JARGON_NOUNS, KEEPS_A_ERROR,
  KEEPS_DE_ERROR, MUST_RIGHT, MUST_RULE, MUST_WRONG, NEGATION_EXTENSION,
  NEGATION_RULE, ORDER_OPTION, ORDER_PAIR, ORDER_RULE, OWNS_SECTION_COUNT,
  PARADIGM_SECTION_COUNT, PARTITIVE_ROW_ID, PERSON_ERROR, PLACE_UNIT,
  PLAIN_PHRASE, PLAIN_TARGET, POSITION_RULE, POSITION_RULE_COUNT, REFRAME,
  REFRAME_COUNT, RESPELL_REPAIRS, ROWS, THEME, THEME_ROWS_BEFORE, TIME_UNIT,
  UNIT, WHAT_FOLLOWS, Y_ROW, Y_SECTION_COUNT, isMine,
} from './data/y-en-corpus.ts';
import {
  EN_SECTIONS, OWNS_SECTIONS, PARADIGM_SECTIONS, WRONG_FORM_SECTIONS,
  Y_EN_LESSON, Y_SECTIONS,
} from './data/y-en-lesson.ts';
import { Y_EN_TERMS } from './data/y-en-terms.ts';
/* THE MISSION-ROW WIDTH MODEL, IMPORTED FROM a2.23 RATHER THAN COPIED.
 * Invariants §5: a guard that reimplements the thing it guards drifts from it. */
import { TITLE_MUST_CLIP, TITLE_MUST_FIT, TITLE_WIDTH_MAX, titleWidth } from './data/pronominaux-passe-corpus.ts';
import {
  IMPORTED_AND_REPAIRED, IMPORTED_IDS, REPAIRED_IDS, STORED_RESPELL,
  row as importedRow,
} from './data/y-en-imported.ts';
import { Y_EN_IMPORT_ROWS, MEASURED_ROWS } from './data/y-en-rows.gen.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
const die: (m: string) => never = (m) => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const LESSON: Lesson = Y_EN_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = ROWS.map(({ bucket, pro, prepEn, ...rest }) => rest as Item);
const IMPORTED_ITEMS: Item[] = Y_EN_IMPORT_ROWS;

/* ─── String walks ───────────────────────────────────────────────────────── */

const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** a2.24 §7.1 found the FIFTH hole in the walk this band copies: `drill` and
 *  `retest` are blanket machine keys everywhere else, and on a stepped
 *  `trapDrill` `drill` is THE ARRAY OF GATED OPTIONS the learner is scored on.
 *  Kept here: skipped only when the value is a STRING, which is the id case. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn',
  'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'restPoints',
]);
const ID_WHEN_STRING = new Set(['drill', 'retest']);
const skip = (k: string, x: unknown): boolean =>
  MACHINE_KEYS.has(k) || (ID_WHEN_STRING.has(k) && typeof x === 'string');

const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub`, drops only machine keys. Corrections §13. */
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

/* THE WIDENING IS PROVED RATHER THAN CLAIMED. */
{
  const td = LESSON.sections.find((s) => s.id === 's12-trap') as { drill?: { opts?: string[] }[] };
  const first = td?.drill?.[0]?.opts?.[0];
  if (!first) die('the trapDrill has no drill options, so the widened walk cannot be proved.');
  if (!display(td).includes(first)) {
    die(`the walk still cannot see the trapDrill's gated drill: « ${first} » is on a screen and not in display().`);
  }
  const trigger = (LESSON.errorTriggers ?? [])[0];
  if (!trigger) die('there are no error triggers.');
  if (display(trigger).includes(trigger.drill)) {
    die(`« ${trigger.drill} » is an ErrorTrigger's drill ID and it reached the learner-surface walk.`);
  }
}

/** THE HOUSE BOUNDARY WITH CORRECTIONS §14.3's FIX. The apostrophe is dropped
 *  from the LEFT so a shape can see `j'y`, `j'en`, `n'y` and `n'en`, which is
 *  most of this lesson; it stays on the right so `l'` does not match a bare `l`. */
const bounded = (needle: string): RegExp =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string): boolean => bounded(needle).test(hay);

/** a2.23 §9.1: naming a unit needs the opposite boundary, because the band names
 *  a neighbour with a possessive almost every time. */
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
/** NOT deduped. COUNTING MUST USE THIS ONE — a2.22 §3. */
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
  /* CORRECTIONS §2, TENTH BUILD RUNNING: NOT ONE HEADWORD. */
  if (it.kind !== 'sentence') die(`${it.id} is kind "${it.kind}". This build authors sentences only; every verb is imported.`);
  if (!/\s/u.test(it.fr)) die(`${it.id} « ${it.fr} » has no whitespace, so it is a headword whatever its kind says.`);
  if (!it.respell) die(`${it.id} has no respelling.`);
  if (!it.ipa || !/^\/.*\/$/u.test(it.ipa)) die(`${it.id} has no slash-wrapped ipa.`);
  if (hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} « ${it.fr} » [${it.respell}] closes a nasal with a plain n or m.`);
  if (it.respell.includes('‿')) die(`${it.id} carries U+203F, which draws as a low underscore on a Pixel 6.`);
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

/* THE DRILL ORDER. */
for (const it of AUTHORED_ITEMS) {
  const sorted = [...it.drills].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b));
  if (JSON.stringify(sorted) !== JSON.stringify([...it.drills])) {
    die(`${it.id} declares drills ${JSON.stringify(it.drills)} and DRILL_KINDS order is ${JSON.stringify(sorted)}.`);
  }
}

/* THE ENDING POPULATION, through the REAL function. */
{
  const before = endingPopulation([]).length;
  const after = endingPopulation([...AUTHORED_ITEMS, ...IMPORTED_ITEMS]).length;
  if (after !== before) die(`this build moves a1.03's ending population by ${after - before} rows.`);
}

/* ═══ 2. THE IMPORT AND THE REPAIRS ══════════════════════════════════════ */

if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} rows imported and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
if (MEASURED_ROWS.headwords !== IMPORTED.length) die('the manifest and the corpus file disagree about how many headwords are imported.');
if (MEASURED_ROWS.phrases !== IMPORTED_PHRASES.length) die('the manifest and the corpus file disagree about how many phrases are imported.');
if (MEASURED_ROWS.framesPresentAsWholeSentence !== 0) {
  die('the manifest found an authored frame already published as a whole sentence. Corrections §2: import it rather than re-authoring it.');
}
if (MEASURED_ROWS.themeDuplicateGroups !== 0) {
  die(`${THEME} has ${MEASURED_ROWS.themeDuplicateGroups} pre-existing duplicate fr groups and the corpus file claims a clean sheet.`);
}
if (MEASURED_ROWS.themeRowsBefore !== THEME_ROWS_BEFORE) {
  die(`the manifest measured ${MEASURED_ROWS.themeRowsBefore} rows in ${THEME} and the corpus file records ${THEME_ROWS_BEFORE}.`);
}
/* THE HEADER'S §3 CLAIM: the construction the brief calls rare is not rare. */
if (MEASURED_ROWS.elidedPronounRows < 100) {
  die(`the manifest measured ${MEASURED_ROWS.elidedPronounRows} published rows carrying an elided y or en, and the corpus header claims the construction is common. Re-measure rather than editing the header.`);
}
/* AND THE il y a ANSWER THE BRIEF LISTS AS UNVERIFIED. */
if (MEASURED_ROWS.ilYaInTheme !== 0) {
  die(`the manifest found ${MEASURED_ROWS.ilYaInTheme} « il y a » rows inside ${THEME} and the corpus header §2 says there are none, which is why the import comes from ${TIME_UNIT}'s themes.`);
}

/* THE REPAIR TABLE, THROUGH THE REAL FUNCTION, ASSERTED BY NAME.
 * Corrections §14.1: `(half !== to) === (blind || house)`. */
for (const rep of RESPELL_REPAIRS) {
  const storedFlag = hasPlainNasalFor(rep.fr, rep.from);
  const halfFlag = hasPlainNasalFor(rep.fr, rep.half);
  const toFlag = hasPlainNasalFor(rep.fr, rep.to);
  if (toFlag) die(`the repair target for ${rep.id} « ${rep.to} » is still flagged.`);
  if (halfFlag) die(`the minimal repair for ${rep.id} « ${rep.half} » is still flagged, so it is not the minimal repair.`);
  if ((rep.half !== rep.to) !== (rep.blind || rep.house)) {
    die(`${rep.id}: half !== to is ${rep.half !== rep.to} and (blind || house) is ${rep.blind || rep.house}. `
      + 'Corrections §14.1: the two reasons are separate and one boolean for both conflates them.');
  }
  if (rep.blind) {
    if (storedFlag) die(`${rep.id} is filed as blind and the checker flags its stored value.`);
    if (rep.half !== rep.from) die(`${rep.id} is blind, so repairing what the checker reports changes NOTHING and half must equal from.`);
  }
  if (!rep.blind && !rep.house && !storedFlag) {
    die(`${rep.id} is filed as neither blind nor house and the checker does not flag its stored value, so there is nothing to repair.`);
  }
  const recorded = STORED_RESPELL[rep.id];
  if (recorded !== rep.from && recorded !== rep.to) {
    die(`${rep.id}: the manifest recorded « ${recorded} » and the repair table expects « ${rep.from} ».`);
  }
}
/* THE ONE BLIND ROW, BY NAME, AND THE BLINDNESS ASSERTED AS A NEGATIVE so the
 * day the checker improves this goes red rather than carrying a dead list.
 *
 * IT IS THE SAME FRENCH WORD AS THE TWO VISIBLE ONES, which is the finding:
 * `pahn-SAY` is flagged and `zhee PAHNSS` is not, and only the respelling
 * differs. Corrections §14.1 says the split is by NASAL and not by ROW; this is
 * the sharpest case in the band so far, because it is by nasal WITHIN ONE WORD. */
{
  const blind = RESPELL_REPAIRS.filter((r) => r.blind);
  if (blind.length !== MEASURED_ROWS.blindRepairs) die(`${blind.length} blind rows in the table and the manifest measured ${MEASURED_ROWS.blindRepairs}.`);
  if (blind.length !== 1) die(`${blind.length} rows are filed as blind and this build measured one. Re-measure rather than editing the count.`);
  if (blind[0]!.id !== 'fr.a2.pronoms-essentiels.028') die(`the blind row is ${blind[0]!.id} and it should be the « j'y pense » card.`);
  if (hasPlainNasalFor("j'y pense", 'zhee PAHNSS')) {
    die('« zhee PAHNSS » is now FLAGGED, so it is not blind and corrections §6 has been fixed. Corpus §11 needs rewriting rather than this guard relaxing.');
  }
  if (!hasPlainNasalFor('penser', 'pahn-SAY')) {
    die('« pahn-SAY » is no longer flagged, so the visible half of the same word family is gone and §11 rests on the contrast.');
  }
}
/* THE FALSE POSITIVE. a2.06 found none, a2.24 found two, and corrections §6 asks
 * every build to report the ABSENCE rather than leave a silence. */
{
  if (FALSE_POSITIVES.length !== MEASURED_ROWS.falsePositives) die('the manifest and the corpus file disagree about the false positives.');
  for (const fp of FALSE_POSITIVES) {
    if (!hasPlainNasalFor(fp.fr, fp.flagged)) die(`${fp.fr}: « ${fp.flagged} » is no longer FLAGGED.`);
    if (hasPlainNasalFor(fp.fr, fp.used)) die(`${fp.fr}: the value this lesson uses « ${fp.used} » is FLAGGED.`);
  }
  /* AND THE SHAPE STILL EXISTS IN THE CORPUS, so reporting zero is a statement
   * about this import rather than about the checker being fixed. */
  if (!hasPlainNasalFor('la semaine', 'suh-MEHN')) {
    die('the real-/n/ false positive has been fixed in hasPlainNasalFor, so reporting ZERO for this import is no longer the finding it is.');
  }
}
/* THE IMPORTS THAT ARE ALSO REPAIRS. a2.24 had ONE and called it the case with
 * no precedent; this build has FOUR, because the corpus breaks the nasal of the
 * pronoun `en` on almost every row that has one. */
if (IMPORTED_AND_REPAIRED.length !== 4) {
  die(`the imported-and-repaired set is ${JSON.stringify(IMPORTED_AND_REPAIRED)} and it should be four rows: the penser headword and the three respelled pronoun phrases.`);
}
if (MEASURED_ROWS.flaggedPronounRows < 10) {
  die(`the manifest measured ${MEASURED_ROWS.flaggedPronounRows} flagged pronoun rows and the corpus header claims the corpus breaks this nasal systematically.`);
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
/* AND THE HALF THE BRIEF SAYS DESERVES MORE WEIGHT ACTUALLY HAS IT. */
if (EN_SECTIONS.length !== EN_SECTION_COUNT) die(`${EN_SECTIONS.length} en sections and EN_SECTION_COUNT is ${EN_SECTION_COUNT}.`);
if (Y_SECTIONS.length !== Y_SECTION_COUNT) die(`${Y_SECTIONS.length} y sections and Y_SECTION_COUNT is ${Y_SECTION_COUNT}.`);
if (EN_SECTION_COUNT <= Y_SECTION_COUNT) {
  die('the y half has at least as many sections as the en half. The brief: the obligatory en deserves more weight, because y has an English analogue in "there" and en has none.');
}
for (const id of [...EN_SECTIONS, ...Y_SECTIONS]) section(id);

/* THE THREE RULES ON THIS LESSON'S SURFACE, all against EXPLICIT constants. */
{
  const n = ALL_SURFACE_RAW.filter((s) => s.includes(REFRAME)).length;
  if (n !== REFRAME_COUNT) die(`the reframe is authored ${n} times and REFRAME_COUNT is ${REFRAME_COUNT}.`);
  if (LESSON.reframe !== REFRAME) die('Lesson.reframe is not the corpus file\'s REFRAME.');
  const p = ALL_SURFACE_RAW.filter((s) => s.includes(POSITION_RULE)).length;
  if (p !== POSITION_RULE_COUNT) die(`${DIRECT_UNIT}'s position rule is quoted ${p} times and POSITION_RULE_COUNT is ${POSITION_RULE_COUNT}.`);
  const a = ALL_SURFACE_RAW.filter((s) => s.includes(A_FRAMING)).length;
  if (a !== A_FRAMING_COUNT) die(`${INDIRECT_UNIT}'s à framing is quoted ${a} times and A_FRAMING_COUNT is ${A_FRAMING_COUNT}.`);
  /* THE TWO BORROWED RULES ARE THE QUIETER ONES. Three rules at a2.06's
   * seventeen each would put one of them on every screen twice over. */
  if (p >= n || a >= n) die('a borrowed rule is louder than this lesson\'s own.');
}

/* ═══ 4. THE FOUR REQUIRED LAYOUTS ═══════════════════════════════════════ */

type Card = { head?: string; label?: string; fr?: string; sub?: string; body?: string };
const cardsOf = (id: string): Card[] => ((section(id) as { cards?: Card[] }).cards ?? []);

/* LAYOUT 1: y and en on ONE card with what each replaces, THE PREPOSITION
 * VISIBLE INSIDE THE PRONOUN. The rows are `fr` and `sub`, which is why every
 * walk in this build is a display() walk. */
{
  const cards = cardsOf('s02-two');
  if (!cards.length) die('s02-two has no cards.');
  const both = cards.find((c) => (c.fr ?? '') === Y_ROW && (c.sub ?? '') === EN_ROW);
  if (!both) {
    die('s02-two has no card carrying the y row in `fr` and the en row in `sub`. '
      + `Wanted fr « ${Y_ROW} » and sub « ${EN_ROW} », which is both words and what each replaces on one screen.`);
  }
  /* THE PREPOSITION IS VISIBLE IN EACH ROW, which is the whole claim of the
   * layout and the thing a row reading « y = a place » would lose. */
  if (!both!.fr!.includes('à')) die(`the y row « ${both!.fr} » does not show the à inside it.`);
  if (!hasPhrase(both!.sub!, 'de')) die(`the en row « ${both!.sub} » does not show the de inside it.`);
  if (!hasPhrase(both!.fr!, 'y')) die('the y row does not carry y.');
  if (!hasPhrase(both!.sub!, 'en')) die('the en row does not carry en.');
  const surface = display(section('s02-two'));
  if (!surface.some((s) => s.includes(POSITION_RULE))) {
    die(`s02-two does not quote ${DIRECT_UNIT}'s « ${POSITION_RULE} » VERBATIM. A paraphrase is not the same claim.`);
  }
  if (!surface.some((s) => namesUnit(s, DIRECT_UNIT))) die(`s02-two quotes ${DIRECT_UNIT}'s rule and does not name the unit.`);
  if (!surface.some((s) => s.includes(A_FRAMING_MINE))) die('s02-two does not state what y replaces.');
  if (!surface.some((s) => s.includes(DE_FRAMING))) die('s02-two does not state what en replaces.');
}

/* LAYOUT 2: « à Marie → lui » beside « à Paris → y », person against thing, one
 * preposition, and it is the a2.24 handshake built out of a2.24's own rows. */
{
  const cards = cardsOf('s04-person');
  const named = importedRow(A224_NAMED_ID).fr;
  const pronoun = importedRow(A224_PRONOUN_ID).fr;
  const mineNamed = ROWS.find((r) => r.id === A(287))!.fr;
  const minePronoun = ROWS.find((r) => r.id === A(288))!.fr;
  const cA = cards.find((c) => (c.fr ?? '') === named && (c.sub ?? '') === mineNamed);
  if (!cA) die(`s04-person has no card carrying « ${named} » in fr and « ${mineNamed} » in sub, which is one preposition with a person behind it and a place behind it.`);
  const cB = cards.find((c) => (c.fr ?? '') === pronoun && (c.sub ?? '') === minePronoun);
  if (!cB) die(`s04-person has no card carrying « ${pronoun} » in fr and « ${minePronoun} » in sub, which is the two answers side by side.`);
  const surface = display(section('s04-person'));
  if (!surface.some((s) => s.includes(A_FRAMING))) {
    die(`s04-person does not quote ${INDIRECT_UNIT}'s « ${A_FRAMING} » VERBATIM, and the brief says to quote its framing.`);
  }
  if (!surface.some((s) => s.includes(A_FRAMING_MINE))) die('s04-person does not state this lesson\'s half of the same sentence.');
  if (!surface.some((s) => namesUnit(s, INDIRECT_UNIT))) die(`s04-person does not name ${INDIRECT_UNIT} beside the sentence it borrows.`);
  /* AND THE TWO STRINGS ARE THE SAME SENTENCE WITH ONE PHRASE CHANGED, which is
   * what makes it a pattern being completed rather than a new rule. */
  const tail = ', and the à disappears with it.';
  if (!A_FRAMING.endsWith(tail) || !A_FRAMING_MINE.endsWith(tail)) {
    die('a2.24\'s framing and this lesson\'s no longer share their second half, so the substitution the brief asks for is not visible.');
  }
}

/* LAYOUT 3: the three ens in ONE section, with the position marked, and a2.04
 * and a2.18 both named BY UNIT ID. A `table` at layer core is a density failure,
 * so this is a tapTable. */
{
  const tt = section('s11-threeens') as { type: string; rows?: { cells?: string[] }[] };
  if (tt.type !== 'tapTable') die(`s11-threeens is a ${tt.type} and corrections §8 says a table at layer core is a density failure.`);
  const rows = tt.rows ?? [];
  if (rows.length !== 3) die(`${rows.length} tapTable rows and there are exactly three jobs.`);
  if (rows.length > 6) die('the tapTable is over the Pixel 6 six-row ceiling.');
  if (EN_JOBS.length !== 3) die(`${EN_JOBS.length} en jobs declared and there are three.`);
  const surface = display(section('s11-threeens'));
  for (const u of [PLACE_UNIT, TIME_UNIT]) {
    if (!surface.some((s) => namesUnit(s, u))) die(`s11-threeens does not name ${u}, and the brief asks for both neighbours by unit id.`);
  }
  if (!surface.some((s) => s.includes(EN_POSITION_RULE))) die('s11-threeens does not state the distinguisher, which is position.');
  /* ALL THREE JOBS ARE ON IT, and the three example lines are three different
   * sentences rather than three glosses of one. */
  const lines = rows.map((r) => (r.cells ?? [])[0] ?? '');
  if (new Set(lines).size !== 3) die('the three en rows do not carry three different sentences.');
  /* AND THE CLAIM IS IN THE CELLS RATHER THAN IN THE PROSE. MUTATION-FOUND:
   * the say names both neighbours, so a version asserting only the section's
   * strings passed a table that named the wrong unit in its own cells, carried
   * the same job twice, or lost its middle column outright. */
  const cols = (tt as unknown as { cols?: string[] }).cols ?? [];
  if (cols.join('|') !== 'French|what comes next|whose lesson') {
    die(`the tapTable's columns are ${cols.join(', ')} and the middle one IS the distinguisher.`);
  }
  for (const r of rows) if ((r.cells ?? []).length !== 3) die('a tapTable row does not fill all three columns.');
  const owners = rows.map((r) => (r.cells ?? [])[2] ?? '').sort();
  if (owners.join('|') !== `${PLACE_UNIT}|${TIME_UNIT}|${UNIT.id}`) {
    die(`the three rows are owned by ${owners.join(', ')} and they should be one each by ${PLACE_UNIT}, ${TIME_UNIT} and ${UNIT.id}.`);
  }
  const jobs = rows.map((r) => (r.cells ?? [])[1] ?? '');
  if (new Set(jobs).size !== 3) die('the three rows do not carry three different jobs.');
  if (jobs.filter((j) => /verb/iu.test(j)).length !== 1) {
    die('more or fewer than one of the three rows has a verb after it, and that is the only one that is the pronoun.');
  }
  /* AND THE TWO NEIGHBOURS' ROWS ARE THEIR OWN. */
  for (const id of [A204_ROW_ID, A218_EN_ROW_ID]) {
    const f = importedRow(id).fr;
    if (!surface.some((s) => s.includes(f.replace(/\s*[.]$/u, '')))) die(`s11-threeens does not show « ${f} », which is the neighbour's own published row.`);
  }
  /* AND NO TABLE AT LAYER CORE ANYWHERE. */
  for (const s of LESSON.sections) if (s.type === 'table') die(`${s.id} is a table at layer core, which is a density failure.`);
}

/* LAYOUT 4: « Oui, j'en ai. » beside the impossible « Oui, j'ai. » The obligatory
 * case only teaches if the learner sees what French refuses. */
{
  const cards = cardsOf('s08-must');
  const both = cards.find((c) => (c.fr ?? '') === MUST_RIGHT && (c.sub ?? '') === MUST_WRONG);
  if (!both) die(`s08-must has no card carrying « ${MUST_RIGHT} » in fr and « ${MUST_WRONG} » in sub. The impossible answer has to be visible.`);
  const surface = display(section('s08-must'));
  if (!surface.some((s) => s.includes(MUST_RULE))) die('s08-must does not state that the word cannot be left out.');
  /* AND THE TWO REALLY ARE DIFFERENT ANSWERS THROUGH THE REAL fold(), which is
   * the only reason this can be asked for by typing at all. */
  if (fold(MUST_RIGHT) === fold(MUST_WRONG)) {
    die('fold() collapses the right answer and the impossible one, so the central claim of this lesson is not testable in writing and the whole exam shape is wrong.');
  }
}
/* AND NO CARD ANYWHERE JOINS TWO SENTENCES ON ONE `fr` LINE. a2.24's v1 did and
 * it CLIPPED on a Pixel 6 at 36 characters with every host gate green. */
for (const s of LESSON.sections) {
  for (const c of ((s as { cards?: Card[] }).cards ?? [])) {
    const f = c.fr ?? '';
    if (f.includes(' · ') && /[.?!]\s*·/u.test(f)) {
      die(`${s.id} has a card joining two sentences on one \`fr\` line: « ${f} ». `
        + 'That is the shape that clipped on a Pixel 6. Use fr and sub as two rows.');
    }
  }
}

/* ═══ 5. THE PRONOUN GUARDS, AS THE THING AND NOT THE LETTERS ════════════ */

/* CORRECTIONS §14.4, AND THE BRIEF CALLS THIS THE HARDEST GUARD IN THE BLOCK.
 * `en` is a preposition in a very large number of corpus sentences and a guard
 * built on the two letters fires constantly. So: the pronoun is either ELIDED —
 * `j'en`, `n'en`, `s'en` — or it sits IMMEDIATELY IN FRONT OF A CONJUGATED VERB,
 * and the preposition never does either.
 *
 * The verb list is deliberately narrow and holds no form that is also a common
 * noun: `avance` and `retard` are out, because « en avance » and « en retard »
 * are prepositional phrases and a list holding them would fire on both. */
const EN_VERBS = [
  'ai', 'as', 'a', 'avons', 'avez', 'ont',
  'veux', 'veut', 'voulons', 'voulez', 'veulent',
  'prends', 'prend', 'prenons', 'prenez', 'prennent',
  'bois', 'boit', 'buvons', 'buvez', 'boivent',
  'parle', 'parles', 'parlons', 'parlez', 'parlent',
  'rêve', 'rêves', 'rêvent',
  'reviens', 'revient', 'revenons', 'revenez', 'reviennent',
];
const Y_VERBS = [
  'vais', 'vas', 'va', 'allons', 'allez', 'vont',
  'pense', 'penses', 'pensons', 'pensez', 'pensent', 'pensé',
  'joue', 'joues', 'jouons', 'jouez', 'jouent',
  'réponds', 'répond', 'répondons', 'répondez', 'répondent',
  'suis', 'es', 'est', 'sommes', 'êtes', 'sont',
  'ai', 'as', 'a', 'avons', 'avez', 'ont',
];
const EN_ELIDED = /(?<![\p{L}\p{N}-])(j|n|m|t|s|qu)['’]en(?![\p{L}\p{N}'’-])/iu;
const Y_ELIDED = /(?<![\p{L}\p{N}-])(j|n|m|t|s)['’]y(?![\p{L}\p{N}'’-])/iu;
const EN_BEFORE_VERB = new RegExp(`(?<![\\p{L}\\p{N}'’-])en\\s+(${EN_VERBS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const Y_BEFORE_VERB = new RegExp(`(?<![\\p{L}\\p{N}'’-])y\\s+(${Y_VERBS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const usesEnPronoun = (s: string): boolean => EN_ELIDED.test(s) || EN_BEFORE_VERB.test(s);
const usesYPronoun = (s: string): boolean => Y_ELIDED.test(s) || Y_BEFORE_VERB.test(s);

/** `en` AS THE PREPOSITION, so an ear question can be refused for offering both.
 *  The two are the same string and the same sound, so a HOMOPHONE_FORMS list
 *  cannot express it and a classifier can. */
const EN_NOUNS = [
  'France', 'Espagne', 'Italie', 'Belgique', 'Allemagne', 'Suisse',
  'deux', 'trois', 'une', 'train', 'avion', 'retard', 'avance', 'français', 'anglais',
];
const EN_PREPOSITION = new RegExp(`(?<![\\p{L}\\p{N}'’-])en\\s+(${EN_NOUNS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const enJob = (s: string): 'pronoun' | 'preposition' | null => {
  if (usesEnPronoun(s)) return 'pronoun';
  if (EN_PREPOSITION.test(s)) return 'preposition';
  return null;
};

/** THE PHRASE THAT DOES NOT COME APART, TREATED AS ONE WORD BY THE GUARDS.
 *  « Il y a du pain. » holds a y and a de and is perfectly correct; a guard that
 *  read the y inside a frozen phrase as this lesson's pronoun would fire on it.
 *  The stripping is the same claim the lesson makes on a card. */
const stripFrozen = (s: string): string => s.replace(/(?<![\p{L}\p{N}'’-])il y (en )?a(?![\p{L}\p{N}'’-])/giu, ' ');

/** THE ERROR THE REFRAME PREDICTS: the little word survives into the sentence
 *  and gets said twice. Scoped to one clause with `[^.!?»]*?` so a preposition in
 *  the NEXT sentence of the same string cannot trip it. */
const Y_KEEPS_A = new RegExp(
  `(?<![\\p{L}\\p{N}-])((j|n|m|t|s)['’]y|y\\s+(${Y_VERBS.join('|')}))[^.!?»]*?(?<![\\p{L}\\p{N}'’-])(à|au|aux)(?![\\p{L}\\p{N}'’-])`, 'iu');
const EN_KEEPS_DE = new RegExp(
  `(?<![\\p{L}\\p{N}-])((j|n|m|t|s|qu)['’]en|en\\s+(${EN_VERBS.join('|')}))[^.!?»]*?(?<![\\p{L}\\p{N}'’-])(de|du|des)(?![\\p{L}\\p{N}'’-])`, 'iu');
const keepsPreposition = (s: string): boolean => {
  const t = stripFrozen(s);
  return Y_KEEPS_A.test(t) || EN_KEEPS_DE.test(t);
};

/* MUST_FIRE and MUST_NOT_FIRE, because a shape that cannot fire is not a guard
 * and a shape that fires on English is corrections §14.4 all over again. */
{
  const MUST_FIRE_EN = [
    "J'en ai.", "J'en parle.", 'Tu en as ?', "Je n'en veux pas.", 'Elle en parle.',
    'Nous en prenons.', "Il y en a.", "J'en bois.", 'Vous en voulez ?',
  ];
  for (const s of MUST_FIRE_EN) if (!usesEnPronoun(s)) die(`the en-pronoun guard does not fire on « ${s} », so it is not a guard.`);
  const MUST_FIRE_Y = ["J'y vais.", "Je n'y vais pas.", 'Tu y vas souvent ?', 'Elle y répond.', "J'y ai pensé."];
  for (const s of MUST_FIRE_Y) if (!usesYPronoun(s)) die(`the y-pronoun guard does not fire on « ${s} », so it is not a guard.`);

  /** THE LIST THE BRIEF ASKS FOR BY NAME. `en` as a preposition is everywhere in
   *  the corpus, and half of a learner surface is English by design. a2.17
   *  shipped a guard that matched « You did not stall ON A WORD YOU had not
   *  learned » because `on` is a French pronoun and `a` a French auxiliary; that
   *  exact sentence is in this list. */
  const MUST_NOT_FIRE_EN = [
    /* `en` as a preposition, which is what makes the two letters useless. */
    'Elle habite en France.', 'Je vais en France.', 'Je finis en deux heures.',
    'en deux heures', 'en France', 'Elle est en retard.', 'Il arrive toujours en avance.',
    'Nous voyageons en train.', 'Je leur parle en français.',
    /* THE ENGLISH. */
    'You did not stall on a word you had not learned.',
    'The preposition goes inside the pronoun, so it does not get said twice.',
    'Yes, I do.',
    'Every answer here is about something that has already been named.',
    'One word, three jobs, three lessons.',
  ];
  for (const s of MUST_NOT_FIRE_EN) {
    if (usesEnPronoun(s)) die(`the en-pronoun guard fires on « ${s} », which it must not. Corrections §14.4.`);
  }
  const MUST_NOT_FIRE_Y = [
    'Il y a du pain.', 'Je vais à Paris.', 'Tu vas au marché ?',
    'You already know where the word goes.', 'Look at the word straight after it.',
    'y  =  à + a thing',
  ];
  for (const s of MUST_NOT_FIRE_Y) {
    if (usesYPronoun(stripFrozen(s))) die(`the y-pronoun guard fires on « ${s} », which it must not.`);
  }
  /* AND THE CLASSIFIER SEPARATES THE TWO JOBS, which is what an ear question is
   * refused for offering both of. */
  if (enJob('Elle en parle.') !== 'pronoun') die('the en classifier does not read « Elle en parle. » as the pronoun.');
  if (enJob('Elle habite en France.') !== 'preposition') die('the en classifier does not read « Elle habite en France. » as the preposition.');
  if (enJob('Je vais à Paris.') !== null) die('the en classifier reads a sentence with no en in it as one of the two.');

  /* THE SURVIVING-PREPOSITION SHAPE. */
  const KEEPS_FIRE = [
    KEEPS_A_ERROR, KEEPS_DE_ERROR, "J'en ai des.", "J'en parle de mon travail.",
    "Je n'y vais pas à Paris.", "Oui, j'y vais au marché.", 'Nous en revenons de Paris.',
    "J'en ai des enfants.", 'Il en rêve de cette maison.',
  ];
  for (const s of KEEPS_FIRE) if (!keepsPreposition(s)) die(`the surviving-preposition guard does not fire on « ${s} », so it is not a guard.`);
  const KEEPS_QUIET = [
    /* This lesson's own correct French, including every shape that looks like
     * the error and is not. */
    "J'y vais.", "J'en ai.", "J'en parle.", "J'en bois.", 'Nous en revenons.',
    "J'en ai trois.", "J'en ai beaucoup.", "J'en veux un peu.", "J'en ai assez.",
    "J'y pense souvent.", 'Elle y répond.', 'Elle en parle.', 'Elle habite en France.',
    'Je vais à Paris.', 'Je bois du café.', 'Je parle de mon travail.',
    'Tu as du sucre ?', "Oui, j'en ai.", "J'en ai besoin.",
    /* THE FROZEN PHRASE, which holds a y and a de and comes apart for nobody. */
    'Il y a du pain.', 'Il y en a.', 'Il y en a trois.',
    'Il y en a un à quatorze heures, quai trois.', 'il y en a encore',
    "Je vais à Paris ; j'y vais en train.",
    'Tu penses à ton examen ? Oui, j\'y pense souvent.',
    'Tu veux du café ? Oui, j\'en veux bien.',
    /* AND THE ENGLISH. */
    'The little word is already inside the pronoun, so saying it again says it twice.',
    'Say the verb, then say à, then the person.',
    'de plus a thing',
  ];
  for (const s of KEEPS_QUIET) {
    if (keepsPreposition(s)) die(`the surviving-preposition guard fires on « ${s} », which it must not.`);
  }
  /* AND STRIPPING THE FROZEN PHRASE DOES NOT DISARM THE GUARD ON ANYTHING ELSE,
   * which is the exemption a2.24 had to prove for its trap cards. */
  if (!keepsPreposition('Il y a du pain. Et j\'y vais à Paris.')) {
    die('stripping « il y a » disarms the surviving-preposition guard on a different sentence, so the exemption is wider than it looks.');
  }
}

/** THE PLACES A WRONG FORM IS ALLOWED, and the number of sections where it is
 *  refused, counted rather than left as an impression. Widening the allowlist
 *  should mean re-reading this line. */
const WRONG_FORM_REFUSED_COUNT = 19;
{
  const allow = new Set<string>(WRONG_FORM_SECTIONS);
  if (LESSON.sections.length - allow.size !== WRONG_FORM_REFUSED_COUNT) {
    die(`the wrong form is refused on ${LESSON.sections.length - allow.size} sections and WRONG_FORM_REFUSED_COUNT is ${WRONG_FORM_REFUSED_COUNT}.`);
  }
  for (const s of LESSON.sections) {
    if (allow.has(s.id!)) continue;
    for (const str of display(s)) {
      if (keepsPreposition(str)) die(`a correct surface keeps the little word after the pronoun: « ${str.slice(0, 90)} » in ${s.id}.`);
    }
  }
  /* AND EVERY OTHER SURFACE, NOT JUST THE SECTIONS. a2.24 §7.2: an audio brief is
   * a string the STUDIO READS AND RECORDS, so a wrong sentence in one gets spoken
   * into a clip and nothing on the host would ever have said so. The error
   * triggers and the drills are permitted for a stated reason: a trigger's
   * `description` exists to describe the error, and the drills' distractors are
   * covered by the never-the-correct-option check below. */
  const permitted = new Set<string>([
    ...[...allow].flatMap((id) => display(section(id))),
    ...display(LESSON.errorTriggers ?? []),
    ...display(LESSON.drills ?? []),
  ]);
  /* THE TRAP'S AUDIO BRIEF QUOTES THE CARDS IT RECORDS, and two of them are the
   * error. So a brief may quote the trap's own cards and nothing else: the card
   * lines come out and the shape runs on what is left. */
  const trapCards = ((section('s12-trap') as { cards?: { fr?: string }[] }).cards ?? []).map((c) => c.fr ?? '');
  const withoutTrapCards = (str: string): string => trapCards.reduce((acc, f) => (f ? acc.split(f).join(' ') : acc), str);
  if (!keepsPreposition(withoutTrapCards("Some brief. J'en parle de mon travail. More brief."))) {
    die('stripping the trap cards disarms the guard on a different error, so the exemption is wider than it looks.');
  }
  for (const str of ALL_SURFACE) {
    if (permitted.has(str)) continue;
    if (keepsPreposition(withoutTrapCards(str))) {
      die(`a surface outside the permitted sections keeps the little word after the pronoun: « ${str.slice(0, 90)} ».`);
    }
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
  if (choices.length < 12) die(`only ${choices.length} option sets found across the permitted sections, so this guard is not reaching the content.`);
  for (const ch of choices) {
    if (typeof ch.correct !== 'number') continue;
    const answer = ch.opts![ch.correct];
    if (answer && (keepsPreposition(answer) || answer === MUST_WRONG || answer === PERSON_ERROR || answer === FROZEN_ERROR)) {
      die(`an error is offered as the CORRECT option: « ${answer} ». The lesson would be marking the mistake right.`);
    }
  }
}
/* AND EVERY PERMITTED SECTION ACTUALLY SHOWS AN ERROR, or the lesson never puts
 * the mistake in front of the learner. The scene is the one that shows a
 * DIFFERENT error and is checked by hand below. */
for (const id of WRONG_FORM_SECTIONS) {
  if (id === 's01-scene') continue;
  const strs = display(section(id));
  if (!strs.some((s) => keepsPreposition(s) || s.includes(MUST_WRONG) || s.includes(PERSON_ERROR) || s.includes(FROZEN_ERROR))) {
    die(`${id} is permitted to show an error and does not show one.`);
  }
}
/* THE SCENE, CONSTRAINED BY HAND, because it has no option sets to constrain and
 * the error it dies on is the DROPPED word rather than the doubled one. */
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
  if (!said) die('the scene has no beat where the learner speaks.');
  if (said!.fr !== MUST_WRONG) die(`the scene's learner line is « ${said!.fr} » and it should be the two-word answer that is not a sentence.`);
  const brk = beats.find((b) => b.kind === 'break');
  if (!brk) die('the scene has no break beat.');
  if (brk!.wrong?.fr !== MUST_WRONG) die('the break\'s wrong half is not the error.');
  if (brk!.right?.fr !== MUST_RIGHT) die('the break\'s right half is not the sentence that closes.');
  const choice = beats.find((b) => b.kind === 'choice');
  if (!choice) die('the scene has no choice beat.');
  for (const o of choice!.options ?? []) {
    if (o.outcome === 'works' && o.fr === MUST_WRONG) die('the scene marks the impossible answer as the one that works.');
  }
  if (!(choice!.options ?? []).some((o) => o.outcome === 'breaks' && o.fr === MUST_WRONG)) {
    die('the scene never offers the impossible answer as the option that breaks.');
  }
  /* THE BREAK BODY BUDGET, 24 to 40 words. */
  const words = String((brk as { body?: string }).body ?? '').trim().split(/\s+/u).length;
  if (words < 24 || words > 40) die(`the break body is ${words} words and the budget is 24 to 40.`);
}
/* AND NO AUTHORED ROW CARRIES THE ERROR. */
for (const r of ROWS) {
  if (keepsPreposition(r.fr)) die(`${r.id} « ${r.fr} » keeps the little word after the pronoun.`);
  if (r.fr === MUST_WRONG || r.fr === PERSON_ERROR || r.fr === FROZEN_ERROR) die(`${r.id} is an error and it is an authored row.`);
}
/* AND THE `prepEn` FLAG IS TOLD APART FROM THE PRONOUN BY THE CLASSIFIER RATHER
 * THAN BY THE AUTHOR'S SAY-SO, which is what makes the three-ens claim real. */
for (const r of ROWS) {
  const job = enJob(r.fr);
  if (r.prepEn && job !== 'preposition') die(`${r.id} « ${r.fr} » is declared a preposition row and the classifier reads it as ${job}.`);
  if (r.pro === 'en' && job !== 'pronoun') die(`${r.id} « ${r.fr} » is declared an en row and the classifier reads it as ${job}.`);
  if (r.pro === 'y' && !usesYPronoun(stripFrozen(r.fr)) && !/(?<![\p{L}\p{N}'’-])y(?![\p{L}\p{N}'’-])/iu.test(r.fr)) {
    die(`${r.id} « ${r.fr} » is declared a y row and carries no y.`);
  }
}
{
  const prep = ROWS.filter((r) => r.prepEn);
  if (prep.length !== 1) die(`${prep.length} rows are declared preposition rows and the three-ens contrast needs exactly one authored one; the other two are the neighbours' own published rows.`);
}

/* ═══ 6. THE SLOT-ORDER DECISION, ASSERTED ═══════════════════════════════ */

/* Corpus §7: OPTION 1. Teach y before en only, and name multiple-pronoun order
 * as coming later. The brief: « Whichever slot-order option you took is
 * asserted, and if you took option 1, no multiple-pronoun sentence beyond y en
 * appears anywhere. » */
if (ORDER_OPTION !== 1) die('the slot-order decision is not option 1 and the guards below are written for option 1.');
if (!ALL_SURFACE.some((s) => s.includes(ORDER_RULE))) die(`the order rule « ${ORDER_RULE} » is stated nowhere, and the canDo says "in the right slot".`);
{
  const s16 = display(section('s16-order'));
  if (!s16.some((s) => s.includes(ORDER_RULE))) die('s16-order does not state the order it exists for.');
  /* AND THE QUESTION IT DOES NOT ANSWER IS NAMED RATHER THAN QUIETLY TAUGHT. */
  if (!ALL_SURFACE.some((s) => /further question|not answered|belongs to a later lesson/iu.test(s))) {
    die('multiple-pronoun order is reserved and no surface says so, so the learner is left with a system that looks finished.');
  }
}
{
  /* `nous` and `vous` are DELIBERATELY ABSENT from the first set: they are
   * subject and object with the same spelling, so a version holding them fires
   * on « Nous en prenons. », which carries exactly one pronoun. a2.24 shipped
   * that defect for one run and this build inherits the fix.
   *
   * `y en` is ALSO absent, because it is the one order this lesson teaches. */
  const TWO_PRONOUNS =
    /(?<![\p{L}\p{N}'’-])((le|la|les)\s+(lui|leur)|(me|te|se)\s+(le|la|les|y|en)|(le|la|les|lui|leur)\s+(y|en))(?![\p{L}\p{N}'’-])\s+\p{L}/iu;
  const MUST_FIRE = [
    'Tu le lui donnes tout de suite.', 'Je ne le lui ai pas encore donné.',
    'Nous allons le leur expliquer calmement.', 'Il me le donne demain.',
    'Je lui en parle demain.', 'Elle me le dit souvent.',
  ];
  for (const s of MUST_FIRE) if (!TWO_PRONOUNS.test(s)) die(`the two-pronoun guard does not fire on « ${s} », so it is not a guard.`);
  const MUST_NOT_FIRE = [
    /* THE ONE PAIR THIS LESSON TEACHES. */
    'Il y en a.', 'Il y en a trois.', 'il y en a encore',
    'Il y en a un à quatorze heures, quai trois.',
    /* AND THE TWO THAT BROKE a2.24's FIRST VERSION: subject nous and vous. */
    'Nous en prenons.', 'Vous en voulez ?', 'Nous en revenons.', 'Nous y allons ensemble.',
    'Je leur montre la photo.', 'Je lui parle.',
    'the little word inside', 'One person or several, and nothing else comes into it.',
  ];
  for (const s of MUST_NOT_FIRE) if (TWO_PRONOUNS.test(s)) die(`the two-pronoun guard fires on « ${s} », which it must not.`);
  for (const s of ALL_SURFACE) {
    if (TWO_PRONOUNS.test(s)) die(`two object pronouns other than « ${ORDER_PAIR} » in one clause, which option 1 reserves: « ${s.slice(0, 90)} ».`);
  }
  for (const r of ROWS) if (TWO_PRONOUNS.test(r.fr)) die(`${r.id} « ${r.fr} » carries two object pronouns other than « ${ORDER_PAIR} ».`);
  /* AND THE ONE ORDER IT DOES TEACH IS ACTUALLY THERE, or the canDo's "in the
   * right slot" is unmet. */
  const YEN = /(?<![\p{L}\p{N}'’-])y\s+en(?![\p{L}\p{N}'’-])/iu;
  if (!ROWS.some((r) => YEN.test(r.fr))) die(`no authored row carries « ${ORDER_PAIR} », so option 1 teaches nothing.`);
}

/* ═══ 7. il y a: SHOWN CONTAINING y, AND STATED NOT TO DECOMPOSE ═════════ */

{
  const s13 = display(section('s13-frozen'));
  if (!s13.some((s) => s.includes(FROZEN_RULE))) die('s13-frozen does not state that the phrase does not come apart.');
  if (!s13.some((s) => namesUnit(s, TIME_UNIT))) die(`s13-frozen does not name ${TIME_UNIT}, which owns the phrase in both its senses.`);
  if (!s13.some((s) => s.includes(FROZEN_ERROR))) die(`s13-frozen does not show « ${FROZEN_ERROR} », which is what happens if the learner takes the phrase to pieces.`);
  /* AND IT SHOWS THE PHRASE ITSELF, with the y in the middle of it. */
  const frozenRow = ROWS.find((r) => r.tags?.includes('frozen') && /il y a/iu.test(r.fr));
  if (!frozenRow) die('no authored row carries the frozen phrase.');
  if (!s13.some((s) => s.includes(frozenRow!.fr))) die('s13-frozen does not show the phrase itself.');
  /* AND NEITHER OF a2.18's TWO SENSES IS RE-TAUGHT. */
  for (const s of ALL_SURFACE) {
    for (const w of ['ago', 'how long ago', 'there is', 'there are']) {
      if (hasPhrase(s, w) && !namesUnit(s, TIME_UNIT) && !/does not come apart|frozen|arrived together/iu.test(s)) {
        /* « There is some. » is this lesson's own gloss for « Il y en a. » and is
         * the one place the English words are unavoidable, so the check is that
         * a2.18's senses are never EXPLAINED rather than never written. */
        if (/means|sense|two jobs|when it happened/iu.test(s)) {
          die(`${TIME_UNIT}'s own senses are explained here: « ${s.slice(0, 90)} ».`);
        }
      }
    }
  }
  /* ONE MISSION, which is what the brief asks for, and it is enforced by TYPE
   * rather than by a count: exactly one TEACHING section may state the frozen
   * rule, and the recap surfaces may repeat it because repeating is what they
   * are for. A bare count would have let a second teaching section in as soon as
   * a recap dropped the line. */
  const RECAP_TYPES = new Set(['reviewDeck', 'roundup', 'progressCheck', 'quiz']);
  const frozenSections = LESSON.sections.filter((s) => display(s).some((x) => x.includes(FROZEN_RULE)));
  const teaching = frozenSections.filter((s) => !RECAP_TYPES.has(s.type));
  if (teaching.length !== 1) {
    die(`${teaching.length} teaching sections state the frozen rule (${teaching.map((s) => s.id).join(', ')}) and the brief asks for exactly one mission.`);
  }
  if (teaching[0]!.id !== 's13-frozen') die(`the frozen rule is taught in ${teaching[0]!.id} and it belongs in s13-frozen.`);
  /* AND THE SPELLING IS a2.18's, because three words with two jobs should not
   * also have two spellings. a2.18's own guard is scoped to a2.18's rows and
   * cannot reach here, which was checked rather than assumed. */
  for (const r of ROWS) {
    if (/(?<![\p{L}\p{N}'’-])il y a(?![\p{L}\p{N}'’-])/iu.test(r.fr)) {
      if (!r.respell!.toUpperCase().includes('EEL EE AH')) {
        die(`${r.id} « ${r.fr} » holds « ${r.respell} » and ${TIME_UNIT} spells the phrase EEL EE AH on both of its own rows.`);
      }
    }
  }
}

/* ═══ 8. THE OBLIGATORY en, AND THE NEGATION ARC ═════════════════════════ */

if (!ALL_SURFACE.some((s) => s.includes(MUST_RULE))) die('the obligatory rule is stated verbatim nowhere.');
if (!ALL_SURFACE.some((s) => s.includes(MUST_WRONG))) die(`the lesson never shows « ${MUST_WRONG} », and the obligatory case only teaches if the learner sees what French refuses.`);

/* The brief: « The negation string matches a2.24's, which matches a2.06's. » It
 * does, and this build adds nothing, which makes it true of four lessons. */
if (String(A118_REFRAME) === String(NEGATION_RULE)) die('a1.18\'s line and a2.19\'s line are the same string. They are deliberately two.');
if (!ALL_SURFACE.some((s) => s.includes(NEGATION_RULE))) die(`a2.19's « ${NEGATION_RULE} » is not quoted verbatim anywhere.`);
if (!ALL_SURFACE.some((s) => s.includes(A118_REFRAME))) die(`a1.18's « ${A118_REFRAME} » is not quoted verbatim anywhere.`);
if (!ALL_SURFACE.some((s) => s.includes(NEGATION_EXTENSION))) die(`a2.06's « ${NEGATION_EXTENSION} » is not quoted verbatim anywhere.`);
{
  const negation = display(section('s15-negation'));
  if (!negation.some((s) => s.includes(NEGATION_EXTENSION))) die('s15-negation does not carry the sentence it borrows.');
  if (!negation.filter((s) => s.includes(NEGATION_EXTENSION)).some((s) => namesUnit(s, DIRECT_UNIT))) {
    die(`the negation deck quotes ${DIRECT_UNIT}'s sentence and does not name the unit beside it.`);
  }
}

/* ═══ 9. THE SEVENTH OCCURRENCE OF THE RECURRING SHAPE ═══════════════════ */

{
  const quoting = ALL_SURFACE.filter((s) => s.includes(WHAT_FOLLOWS));
  if (!quoting.length) die(`a2.02's « ${WHAT_FOLLOWS} » is quoted nowhere.`);
  if (!quoting.some((s) => namesUnit(s, 'a2.02'))) die('the recurring shape is quoted and a2.02 is not named beside it.');
  if (!ALL_SURFACE.some((s) => /seventh/iu.test(s))) die('the lesson does not say this is the seventh occurrence, so it reads as a new observation.');
  if (!ALL_SURFACE.some((s) => /six times|sixth/iu.test(s))) die('the lesson does not credit the earlier instances, which doctrine §B.7 asks for from seq 14 onward.');
}

/* ═══ 10. THE QUIZ ═══════════════════════════════════════════════════════ */

/** TWO OPTIONS THAT DIFFER ONLY BY A HOMOPHONE SWAP, which is corrections §5's
 *  own code sample and NOT the counting shape a2.10, a2.11 and a2.24 shipped.
 *  The counting shape refuses « J'y vais. » against « Je vais. », which is this
 *  lesson's single most useful ear question: both carry `vais` and they differ by
 *  the word the whole lesson is about. */
const swap = (s: string, x: string, y: string): string =>
  s.replace(new RegExp(`(?<![\\p{L}\\p{N}-])${x}(?![\\p{L}\\p{N}'’-])`, 'giu'), y);
const earClash = (opts: string[]): string | null => {
  for (const g of HOMOPHONE_FORMS) {
    for (const x of g) {
      for (const y of g) {
        if (x === y) continue;
        for (let i = 0; i < opts.length; i += 1) {
          for (let j = 0; j < opts.length; j += 1) {
            if (i !== j && swap(opts[i]!, x, y) === opts[j]) return `${opts[i]} » and « ${opts[j]}`;
          }
        }
      }
    }
  }
  return null;
};
{
  /* The shape is proved rather than trusted: it must catch a real swap and it
   * must NOT catch the pair this lesson turns on. */
  if (!earClash(['Tu prends du sucre ?', 'Tu prend du sucre ?'])) die('the ear-clash check does not catch a real homophone swap, so it is not a guard.');
  if (!earClash(['Ils y pensent.', 'Ils y pense.'])) die('the ear-clash check misses a swap in the middle of a sentence.');
  if (earClash(["J'y vais.", 'Je vais.'])) die('the ear-clash check refuses « J\'y vais. » against « Je vais. », which is the one contrast the ear can settle here.');
  if (earClash([MUST_RIGHT, MUST_WRONG])) die('the ear-clash check refuses the obligatory pair, which is audible.');
}

const QUESTIONS = quizQuestions(section('s23-quiz') as Parameters<typeof quizQuestions>[0]);
if (QUESTIONS.length !== EXPECTED_QUESTIONS) die(`${QUESTIONS.length} questions and EXPECTED_QUESTIONS is ${EXPECTED_QUESTIONS}.`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('there is not exactly one quiz section.');

const ANSWERABLE = new Set<string>([...AUTHORED_ITEMS.map((i) => i.fr), ...IMPORTED_IDS.map((id) => importedRow(id).fr)]);
{
  const mcq = QUESTIONS.filter((q) => q.format === 'mcq').length;
  if (mcq > QUESTIONS.length / 2) die(`${mcq} of ${QUESTIONS.length} questions are mcq and at most half may be.`);
  const free = QUESTIONS.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  if (free < 12) die(`only ${free} free-text questions. BOTH halves of this lesson are typeable through the real fold(), which is unusual in this band, so the exam is shaped around it.`);
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
    /* NO EAR QUESTION MAY SEPARATE TWO OPTIONS THAT ARE ONE SOUND, checked by the
     * SWAP rather than by the count. Corrections §5's own sample. */
    if (q.format === 'listenChoose' && q.opts) {
      const clash = earClash(q.opts);
      if (clash) die(`an ear question offers « ${clash} », which differ only by a homophone swap: ${q.q}`);
      /* AND THE ONE THE BRIEF NAMES, WHICH A WORD LIST CANNOT EXPRESS: the two
       * ens are THE SAME STRING, so the check is on the JOB rather than on the
       * spelling. An ear question offering both has no correct answer. */
      const jobs = new Set(q.opts.map(enJob).filter(Boolean));
      if (jobs.size > 1) {
        die(`an ear question offers both jobs of « en », which are one sound and have no correct answer: ${q.q}`);
      }
    }
    /* AND NO TYPED QUESTION MAY TURN ON A DIACRITIC. */
    if ((q.format === 'typeIn' || q.format === 'errorSpot') && /accent|grave|à against a|où against ou/iu.test(q.q)) {
      die(`a typed question turns on a diacritic: ${q.q}. fold() strips it and the app would mark the mistake right.`);
    }
  }
  /* AND THE LISTENING SECTION'S OWN QUESTIONS ARE EAR QUESTIONS TOO.
   * MUTATION-FOUND: the check above walks the quiz, and s06-listening is
   * audioFirst with its own `questions`, so a question asking which en is which
   * by ear could sit there and pass. That is the exact thing the brief forbids. */
  {
    const lq = (section('s06-listening') as { questions?: { q: string; opts?: string[] }[] }).questions ?? [];
    for (const q of lq) {
      const jobs = new Set((q.opts ?? []).map(enJob).filter(Boolean));
      if (jobs.size > 1) die(`a listening question offers both jobs of « en », which are one sound: ${q.q}`);
      const clash = earClash(q.opts ?? []);
      if (clash) die(`a listening question offers « ${clash} », which differ only by a homophone swap.`);
    }
  }
  /* AND THE FROZEN PHRASE'S SPELLING COVERS « il y en a » TOO. MUTATION-FOUND:
   * the boundary-exact « il y a » shape cannot see the one place the phrase
   * takes a passenger, which is two of this lesson's own rows. */
  for (const r of ROWS) {
    if (!/(?<![\p{L}\p{N}'’-])il y (en )?a(?![\p{L}\p{N}'’-])/iu.test(r.fr)) continue;
    if (!r.respell!.toUpperCase().includes('EEL EE AH')) {
      die(`${r.id} « ${r.fr} » holds « ${r.respell} » and ${TIME_UNIT} spells the phrase EEL EE AH.`);
    }
  }
  /* AND THE ACCENT QUESTION EXISTS, AS AN mcq. a2.09's precedent. */
  {
    const accent = QUESTIONS.find((q) => q.q.includes(ACCENT_LIMIT));
    if (!accent) die('the accent limit is never put to the learner, and it is the one thing about à they will get wrong in writing.');
    if (accent.format !== 'mcq') die(`the accent question is a ${accent.format} and only an mcq can test a diacritic.`);
    const opts = accent.opts ?? [];
    if (!opts.some((o) => o.includes('à')) || !opts.some((o) => /(?<![\p{L}])a\s/u.test(o))) {
      die('the accent question does not offer both the accented and the unaccented form.');
    }
    const withA = opts.find((o) => o.includes('à'))!;
    const withoutA = opts.find((o) => /(?<![\p{L}])a\s/u.test(o))!;
    if (fold(withA) !== fold(withoutA)) {
      die('the two options in the accent question do not fold together, so the untestability claim is wrong and the question could have been typed.');
    }
  }
  /* AND THE TWO CLAIMS THE WHOLE EXAM SHAPE RESTS ON, MEASURED. */
  if (fold("J'y vais.") === fold('Je vais.')) die('fold() collapses the y sentence with the one without it, so the replacement is not typeable.');
  if (fold(MUST_RIGHT) === fold(MUST_WRONG)) die('fold() collapses the obligatory answer with the impossible one.');
  if (fold('Je vais à Paris.') !== fold('Je vais a Paris.')) {
    die('fold() no longer collapses the accent, so the untestability claim in corpus §16 is stale.');
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

/* ═══ 11. THE DICTÉE ═════════════════════════════════════════════════════ */

{
  const ids = (section('s18-dictation') as { itemIds?: string[] }).itemIds ?? [];
  if (!ids.length) die('the dictée targets nothing.');
  for (const id of ids) {
    if (!AUTHORED_IDS.includes(id)) die(`the dictée targets ${id}, which this build does not author.`);
    const r = AUTHORED_ITEMS.find((i) => i.id === id)!;
    if (dicteeMode(r.fr) !== 'letters') {
      die(`the dictée targets « ${r.fr} », which dicteeMode puts in WORD mode. Word mode hands every real word over `
        + 'pre-spelled, and this lesson turns on one or two letters in the right place.');
    }
    if (r.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length > DICTEE_MAX_LETTERS) die(`« ${r.fr} » is over ${DICTEE_MAX_LETTERS} letters.`);
    if (!r.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill.`);
  }
  /* AND IT CARRIES BOTH WORDS, THE OBLIGATORY CASE, THE ORDER AND A NEGATIVE,
   * which is why it exists: it is the only surface that makes a learner build
   * these two letters from nothing. */
  const rowsIn = ids.map((id) => ROWS.find((r) => r.id === id)!);
  for (const want of ['y', 'en'] as const) {
    if (!rowsIn.some((r) => r.pro === want)) die(`the dictée asks for no « ${want} ».`);
  }
  if (!rowsIn.some((r) => r.bucket === 'must')) die('the dictée never asks for the obligatory answer, which is the half English gives no help with.');
  if (!rowsIn.some((r) => r.bucket === 'order')) die(`the dictée never asks for « ${ORDER_PAIR} », which is the canDo's "in the right slot".`);
  if (!rowsIn.some((r) => r.bucket === 'negative')) die('the dictée asks for no negative.');
  if (!rowsIn.some((r) => r.bucket === 'past')) die('the dictée asks for no past.');
}
/* EVERY ROW CARRYING THE DICTATION DRILL IS LETTERS-MODE. */
{
  const ids = new Set((section('s18-dictation') as { itemIds?: string[] }).itemIds ?? []);
  for (const o of AUTHORED_ITEMS.filter((i) => i.drills.includes('dictation') && !ids.has(i.id))) {
    if (dicteeMode(o.fr) !== 'letters') die(`${o.id} carries the dictation drill and dicteeMode puts it in WORD mode.`);
  }
}

/* ═══ 12. THE SPEAK AND ROLE-PLAY SURFACES ═══════════════════════════════ */

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

/* ═══ 13. TRANCHES, ITEMS, AND EVERY ITEM ON A SCREEN ════════════════════ */

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
      const strings = display(sec);
      for (const s of strings) {
        for (const id of known) if (s.includes(id)) shown.add(id);
      }
      for (const id of (sec as { itemIds?: string[] }).itemIds ?? []) shown.add(id);
      for (const s of strings) {
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
  for (const id of IMPORTED_IDS) if (!declared.has(id)) die(`${id} is imported and reaches no screen.`);
}

/* ═══ 14. THE HOUSE COPY, IN BOTH WALKS ══════════════════════════════════ */

const DOUBLE_STOP = /[.]\s*[.!?,;:]/u;

/* THIS UNIT NEEDS NO JARGON EXEMPTION AT ALL, WHICH IS NEW IN THIS BLOCK.
 * a2.06's English name is « Direct Object Pronouns » and a2.24's is « Indirect
 * Object Pronouns », so both had to exempt `overview.titleEn`. This one is « The
 * Pronouns Y and EN » and contains no technical compound, so the exemption count
 * is ZERO and is asserted as zero. */
{
  const titleEn = LESSON.overview?.titleEn ?? '';
  if (titleEn !== UNIT.title) die(`overview.titleEn is « ${titleEn} » and content_units holds « ${UNIT.title} ».`);
  for (const j of JARGON) {
    if (hasPhrase(titleEn, j)) die(`the unit's own English name contains « ${j} », so this build needs an exemption after all and the guard below is wrong.`);
  }
}
/* EVERY COUNTABLE JARGON ENTRY CARRIES ITS -s PLURAL. Corrections §13. */
for (const j of JARGON_NOUNS) {
  if (j.endsWith('s')) continue;
  if (!JARGON_NOUNS.includes(`${j}s`)) die(`JARGON_NOUNS holds « ${j} » and not « ${j}s ». A boundary-exact check misses the plural.`);
}
/* AND THE ADJECTIVE LIST IS NOT A HIDING PLACE. a2.06 §7.2. */
for (const j of JARGON_ADJECTIVES) {
  if (JARGON_NOUNS.includes(j)) die(`« ${j} » is on both jargon lists.`);
  if (/(pronoun|object|antecedent|determiner|article|clitic$)/u.test(j) && j !== 'proclitic' && j !== 'enclitic') {
    die(`« ${j} » is a countable noun on the adjective list, which dodges the plural requirement.`);
  }
}
/* A SENTENCE MAY NOT START ON A LOWERCASE WORD. a2.24 v3 shipped four of these
 * and they were found on glass. TWO EXEMPTIONS, both measured: a unit id is
 * lowercase by construction, and so is a fragment already inside « ». */
{
  const SENTENCE_START = /[.!?]\s+([a-z][a-z0-9.']*)/gu;
  const startsLower = (s: string): string | null => {
    for (const m of s.matchAll(SENTENCE_START)) {
      const w = m[1]!;
      if (/^(a\d|b\d|sons)/u.test(w)) continue;           // a unit id
      if (s.slice(0, m.index).endsWith('«')) continue;     // inside a quotation
      const after = s.slice((m.index ?? 0) + m[0].length);
      if (after.startsWith('·')) continue;                 // a label separator
      return `${w} …`;
    }
    return null;
  };
  const MUST_FIRE = ['You mean it. de plus a thing becomes en.'];
  for (const s of MUST_FIRE) if (!startsLower(s)) die(`the lowercase-start guard does not fire on « ${s} », so it is not a guard.`);
  const MUST_NOT_FIRE = [
    'Nothing is added. a2.24 gave you the test.',
    'The word moves. Nothing else does.',
    'It never has. « de plus a thing », and a verb is not a thing.',
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
    /* SUBSTRING, NOT A WORD BOUNDARY. a2.06 §7.1: the band's `\bhonest` cannot
     * see `dishonest` and only the seed-wide test caught it. */
    if (/honest/i.test(s)) die(`a banned word reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (DOUBLE_STOP.test(s)) die(`a sentence-final stop with punctuation after it: « ${s.slice(0, 90)} ».`);
    for (const j of JARGON) {
      if (hasPhrase(s, j)) die(`grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 90)} ».`);
    }
  }
}
/* AND THE RATIO, which is corrections §14.5's method rather than a ban. */
{
  const plain = ALL_SURFACE_RAW.filter((s) => hasPhrase(s, PLAIN_PHRASE) || hasPhrase(s, PLAIN_TARGET)).length;
  const technical = ALL_SURFACE_RAW.filter((s) => hasPhrase(s, 'object pronoun') || hasPhrase(s, 'adverbial pronoun') || hasPhrase(s, 'neutral pronoun')).length;
  if (technical !== 0) die(`the technical compounds appear on ${technical} strings and this unit needs no exemption, so the count is zero.`);
  if (plain < 2) die(`the plain phrase appears ${plain} times, which is not enough for §14.5's ratio to mean anything.`);
  /* AND `pronoun` IS HOUSE VOCABULARY, measured by a2.06 at 233 uses. */
  if (!ALL_SURFACE.some((s) => hasPhrase(s, 'pronoun'))) die('« pronoun » appears nowhere, and it is house vocabulary on 233 shipped cards.');
  /* AND SO ARE `adjective` AND `adverb` (§14.5), so the guard is that the plain
   * phrase outnumbers them rather than that they are banned. */
  const partOfSpeech = ALL_SURFACE_RAW.filter((s) => hasPhrase(s, 'adjective') || hasPhrase(s, 'adverb') || hasPhrase(s, 'adjectives') || hasPhrase(s, 'adverbs')).length;
  if (partOfSpeech > plain) {
    die(`the part-of-speech names appear ${partOfSpeech} times against the plain phrase's ${plain}. §14.5: guard the ratio, and the plain phrase must win.`);
  }
}
/* THREE TERM CHIPS PER SECTION. */
for (const s of LESSON.sections) {
  const t = (s as { terms?: string[] }).terms ?? [];
  if (t.length > 3) die(`${s.id} declares ${t.length} term chips and the renderer shows 3.`);
  for (const k of t) if (!Y_EN_TERMS[k]) die(`${s.id} names term « ${k} », which is not defined.`);
}
for (const k of Object.keys(Y_EN_TERMS)) {
  if (!LESSON.sections.some((s) => ((s as { terms?: string[] }).terms ?? []).includes(k))) {
    die(`term « ${k} » is defined and no section surfaces it.`);
  }
}
/* `intro` IS PINNED IN ITS OWN ASSERTION. Corrections §9. */
{
  const intro = LESSON.intro ?? '';
  if (!intro) die('the lesson has no intro, and it is drawn on the overview card AND the lesson cover.');
  for (const j of JARGON) if (hasPhrase(intro, j)) die(`grammar jargon in the intro: « ${j} ».`);
  if (!/little word/iu.test(intro)) die('the intro does not name the thing that goes inside, which is the whole lesson.');
  if (!/leave these words out|cannot be left out|will not let you leave/iu.test(intro)) {
    die('the intro does not say the words cannot be left out, and that is the half English gives no help with.');
  }
}

/* ═══ 15. commonErrors, trapDrill AND THE SEED-WIDE CONTRACTS ════════════ */

{
  const ce = section('s14-errors') as { swipe?: boolean; errors?: { wrong: string; right: string; why: string }[] };
  if (!ce.swipe) die('commonErrors has no swipe: true and draws a blank screen without it.');
  if (!(ce.errors ?? []).length) die('commonErrors has no errors.');
  for (const e of ce.errors ?? []) {
    if (!e.why) die(`a common error has no why: « ${e.wrong} ».`);
    if (e.wrong === e.right) die('a common error has the same wrong and right.');
    if (keepsPreposition(e.right) || e.right === MUST_WRONG) die(`a common error offers « ${e.right} » as the right answer and it is an error.`);
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
  /* THE FIRST CARD IS THE ERROR. a2.24's HOLE 2: the cards are the teaching and
   * the drill is the check, and it is the CARDS the audio step reads aloud. */
  if ((td.cards ?? [])[0]?.fr !== KEEPS_A_ERROR) {
    die(`the trap's first card is « ${(td.cards ?? [])[0]?.fr} » and it should open on the error.`);
  }
  if (!(td.cards ?? []).some((c) => keepsPreposition(c.fr ?? ''))) {
    die('no trapDrill CARD shows the error, so the audio step never reads it.');
  }
  /* THE AUDIO STEP PLAYS EACH CARD's `fr`, so the take must contain those lines. */
  const takeId = td.audio?.recordingId;
  if (!takeId) die('the trapDrill audio has no recordingId, and the audio step plays each card\'s fr.');
  const brief = (LESSON.audio?.recorded ?? []).find((r) => r.id === takeId);
  if (!brief) die(`the trapDrill points at ${takeId} and no audio brief declares it.`);
  for (const c of td.cards ?? []) {
    if (!brief.desc.includes(c.fr ?? '')) {
      die(`the trapDrill's audio step plays « ${c.fr} » and ${takeId}'s brief does not name that line.`);
    }
  }
}
/* EVERY sheetId RESOLVES INSIDE THIS LESSON. Cross-lesson sheets do not exist. */
{
  const declared = new Set((LESSON.sheets ?? []).map((s) => s.id));
  for (const s of LESSON.sections) {
    const id = (s as { sheetId?: string }).sheetId;
    if (id && !declared.has(id)) die(`${s.id} names sheet ${id}, which this lesson does not declare.`);
  }
  for (const id of declared) {
    if (!LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id)) die(`sheet ${id} is declared and no section reaches it.`);
  }
  /* AND THE SHEET HOLDS THE THING NEITHER NEIGHBOUR'S COULD: THE PREPOSITION. */
  const sheet = (LESSON.sheets ?? [])[0];
  if (!sheet) die('there is no reference sheet.');
  for (const ss of sheet.sections ?? []) {
    if (ss.type === 'cheatSheet') die('a cheatSheet inside a reference sheet draws its title and nothing else.');
  }
  const tables = (sheet.sections ?? []).filter((ss) => ss.type === 'table');
  if (tables.length < 2) die(`the sheet holds ${tables.length} tables and it exists to hold two: what each word swallows, and the three ens.`);
  const sheetText = JSON.stringify(sheet);
  for (const w of ['à plus', 'de plus']) {
    if (!sheetText.includes(w)) die(`the sheet does not carry « ${w} », and the preposition is the thing a2.06's and a2.24's sheets could not hold.`);
  }
}

/* ═══ 16. THE MISSION-ROW TITLE WIDTH ════════════════════════════════════ */

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

/* ═══ 17. APPLY ══════════════════════════════════════════════════════════ */

async function main() {
  console.log(`\n  a2.25 « ${UNIT.sub} », seq ${UNIT.seq}\n`);
  console.log(`  guards        all passed over ${ALL_SURFACE.length} learner strings`);
  console.log(`  corpus        ${AUTHORED_ITEMS.length} authored into ${THEME}, ${IMPORTED_IDS.length} imported, 0 headwords authored`);
  console.log(`  lesson        ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions`);
  console.log(`  the Owns      ${OWNS_SECTION_COUNT} sections against the paradigm's ${PARADIGM_SECTION_COUNT}`);
  console.log(`  the halves    ${EN_SECTION_COUNT} on the obligatory en against ${Y_SECTION_COUNT} on y`);
  console.log(`  the order     option ${ORDER_OPTION}, « ${ORDER_PAIR} » only, and the rest reserved`);
  console.log(`  repairs       ${RESPELL_REPAIRS.length}, ${RESPELL_REPAIRS.filter((r) => r.blind).length} BLIND, ${RESPELL_REPAIRS.filter((r) => r.house).length} house, ${FALSE_POSITIVES.length} false positives`);
  console.log(`  the corpus    ${MEASURED_ROWS.flaggedPronounRows} of ${MEASURED_ROWS.respelledPronounRows} respelled pronoun rows are FLAGGED; this build repairs ${IMPORTED_AND_REPAIRED.length} it imports`);

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
  /* BOTH PREREQUISITES ARE SHIPPED, AND THE BRIEF SAYS TO STOP IF EITHER IS NOT.
   * a2.24 is the declared prerequisite; a2.06 is the head of the block and this
   * lesson quotes its rule five times, so it is checked too. */
  {
    const declared = unit!.prereqUnitIds ?? [];
    for (const p of UNIT.prereqUnitIds) {
      if (!declared.includes(p)) { c.release(); await pool.end(); die(`the unit does not declare ${p} as a prerequisite.`); }
    }
    for (const p of [...UNIT.prereqUnitIds, DIRECT_UNIT]) {
      const pq = await c.query<{ body: { lessonIds?: string[] } }>(
        "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [p]);
      if (!(pq.rows[0]?.body?.lessonIds ?? []).length) {
        c.release(); await pool.end();
        die(`${p} is a hard prerequisite and has NO SHIPPED LESSON. The brief says to stop and say so.`);
      }
    }
  }
  /* AND THE ROWS THIS LESSON BORROWS FROM ITS NEIGHBOURS ARE THEIRS. */
  for (const [id, owner] of [
    [A206_FRAME_ID, DIRECT_UNIT], [A224_NAMED_ID, INDIRECT_UNIT], [A224_PRONOUN_ID, INDIRECT_UNIT],
    [A204_ROW_ID, PLACE_UNIT], [A204_CITY_ID, PLACE_UNIT], [A218_EN_ROW_ID, TIME_UNIT],
    [A218_ILYA_ROW_ID, TIME_UNIT], [A218_ILYA_AGO_ID, TIME_UNIT], [PARTITIVE_ROW_ID, 'a1.29'],
  ] as const) {
    const fq = await c.query<{ fr: string }>('select fr from content_items where id = $1', [id]);
    if (!fq.rows.length) { c.release(); await pool.end(); die(`${id} is ${owner}'s row and is not in the database.`); }
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
    /* THE RESPELLING REPAIRS. Five rows across four themes, and nothing but the
     * respelling changes. */
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
  /* AND THE REPAIRS LANDED. The one blind row cannot be checked through the
   * function — the checker never flagged it — so it is checked by string. */
  const rr = await c.query<{ id: string; fr: string; respell: string }>(
    'select id, fr, respell from content_items where id = any($1)', [REPAIRED_IDS]);
  for (const r of rr.rows) {
    const want = RESPELL_REPAIRS.find((x) => x.id === r.id)!;
    if (r.respell !== want.to) { c.release(); await pool.end(); die(`${r.id} stored respell="${r.respell}" and the repair wanted "${want.to}".`); }
    if (hasPlainNasalFor(r.fr, r.respell)) { c.release(); await pool.end(); die(`${r.id} is still flagged after the repair.`); }
  }

  console.log(
    '\n  applied to Postgres:\n'
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_IDS[0]}..${AUTHORED_IDS[AUTHORED_IDS.length - 1]}\n`
    + '      ZERO headwords, ZERO gendered rows, ZERO duplicate fr inside the theme.\n'
    + `    ${IMPORTED_IDS.length} rows imported by id, ${RESPELL_REPAIRS.length} respellings repaired across 4 themes\n`
    + `      ${IMPORTED_AND_REPAIRED.length} of them are rows this lesson IMPORTS, where a2.24 had one\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions, ${(LESSON.itemIds ?? []).length} items\n`
    + `    the Owns ${OWNS_SECTION_COUNT} sections against the paradigm's ${PARADIGM_SECTION_COUNT}\n`
    + `    ${THEME} row count: ${before} before, ${after} after (max ${afterQ.rows[0]!.mx})\n`
    + `    slot order: option ${ORDER_OPTION}, and multiple-pronoun order is reserved and named\n\n`
    + '  NEXT: pnpm tsx scripts/merge-y-en-into-seed.ts\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
