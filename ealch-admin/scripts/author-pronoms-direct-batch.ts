/* a2.06.l1 « Pronoms d'objet direct » — corpus, lesson and terms, into Postgres.
 *
 *     pnpm content:pronoms-direct -- --dry-run
 *     pnpm content:pronoms-direct
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
 *     house-copy and jargon check runs over a `display()` walk as well, which
 *     keeps `sub` and drops only machine keys. This lesson puts real teaching in
 *     `sub` on nine cards, so the display walk is not a formality here.
 * §13 `hasPhrase` IS BOUNDARY-EXACT, so a list holding `pronoun` misses
 *     `pronouns`. Every JARGON entry carries its -s plural and a guard checks
 *     that it does, rather than trusting the author to have remembered.
 * §14.3 THE HOUSE BOUNDARY EXCLUDES THE APOSTROPHE, so a shape built on it
 *     cannot see `j'ai`, `qu'il` or `c'est`. THIS LESSON IS THE WORST CASE IN
 *     THE BAND FOR IT: its central trap form IS `l'`, and the brief's own probe
 *     demonstrated the bug by reporting NO for `objet` against a unit whose sub
 *     is « Pronoms d'objet direct ». Dropped from the LEFT, kept on the right.
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
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  A, AGREEMENT_OWNER, AGREEMENT_RULE, A118_REFRAME, A222_NEGATION_EXTENSION,
  AUTHORED_IDS, DICTEE_MAX_LETTERS, ELISION_LIMIT, EXPECTED_ACTS, EXPECTED_AUTHORED,
  EXPECTED_IMPORTED, EXPECTED_QUESTIONS, EXPECTED_SECTIONS, HOMOPHONE_FORMS,
  ID_FIRST, ID_LAST, IMPORTED, INDIRECT_UNIT, JARGON, JARGON_ADJECTIVES, JARGON_NOUNS, NEGATION_EXTENSION,
  NEGATION_RULE, OWNS_SECTION_COUNT, PARADIGM_SECTION_COUNT, PLAIN_PHRASE,
  PLAIN_POSITION, REFRAME, REFRAME_COUNT, RESPELL_REPAIRS, ROWS, THEME,
  THEME_ROWS_BEFORE, UNIT, WHAT_FOLLOWS, Y_EN_UNIT, isMine, CLIPPED_AT_V2,
} from './data/pronoms-direct-corpus.ts';
import {
  OWNS_SECTIONS, PARADIGM_SECTIONS, PRONOMS_DIRECT_LESSON, AFTER_VERB_TRAP,
} from './data/pronoms-direct-lesson.ts';
import { PRONOMS_DIRECT_TERMS } from './data/pronoms-direct-terms.ts';
/* THE MISSION-ROW WIDTH MODEL, IMPORTED FROM a2.23 RATHER THAN COPIED.
 * Invariants §5: a guard that reimplements the thing it guards drifts from it. */
import { TITLE_MUST_CLIP, TITLE_MUST_FIT, TITLE_WIDTH_MAX, titleWidth } from './data/pronominaux-passe-corpus.ts';
import { IMPORTED_IDS, REPAIRED_IDS, STORED_RESPELL, row as importedRow } from './data/pronoms-direct-imported.ts';
import { PRONOMS_DIRECT_IMPORT_ROWS, MEASURED_ROWS } from './data/pronoms-direct-rows.gen.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
const die: (m: string) => never = (m) => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const LESSON: Lesson = PRONOMS_DIRECT_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = ROWS.map(({ bucket, pro, ...rest }) => rest as Item);
const IMPORTED_ITEMS: Item[] = PRONOMS_DIRECT_IMPORT_ROWS;

/* ─── String walks ───────────────────────────────────────────────────────── */

const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** `cards` IS NOT ON THIS LIST AND MUST NOT BE. a2.22 §2: on a cardDeck, a
 *  flashcards section, a reviewDeck and a trapDrill, `cards` holds the entire
 *  learner surface. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets', 'restPoints',
]);

const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub`, drops only machine keys. Corrections §13. */
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

/** THE HOUSE BOUNDARY WITH CORRECTIONS §14.3's FIX. The apostrophe is dropped
 *  from the LEFT so a shape can see `l'aime`, `qu'il` and `d'objet`; it stays on
 *  the right so `l'` does not match a bare `l`. */
const bounded = (needle: string): RegExp =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu');
const hasPhrase = (hay: string, needle: string): boolean => bounded(needle).test(hay);

/** a2.23 §9.1: naming a unit needs the opposite boundary, because the band
 *  names a neighbour with a possessive almost every time and `hasPhrase(_,
 *  'a2.24')` is blind to « a2.24's ». */
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

/** THE PLACES A WRONG FORM IS ALLOWED.
 *
 *  The brief says to permit it inside an errorSpot item as the error and to
 *  scope the assertion to that one location. Scoping it to THREE sections was
 *  the first draft and it was wrong in a way worth recording: a `groupDrill`
 *  check offers the error as a DISTRACTOR, with a `why` explaining it, and that
 *  is the same act of teaching as the trap card. Two sections were failing the
 *  guard for doing exactly what the lesson wants them to do.
 *
 *  So the allowlist is five, and it is backed by the stronger assertion the
 *  brief is really after: inside these sections the wrong form may appear ONLY
 *  as an option that is not the correct one. A section allowlist alone would let
 *  the error ship AS THE ANSWER, which is the failure that actually matters. */
const WRONG_FORM_SECTIONS = new Set([
  's08-build', 's09-trap', 's10-unseen', 's11-errors', 's14-negation', 's23-quiz',
]);

/** The eighteen sections where a wrong form is refused outright, listed so the
 *  guard's reach is a measured number rather than an impression: the scene, both
 *  order decks, the goals, the table, the persons, the examples, the elision
 *  deck, the listening, both past sections, the flashcards, the dictée, the role
 *  play, the speak list, the review deck, the progress card, the roundup and the
 *  sheet. Widening the allowlist any further should mean re-reading this. */
const WRONG_FORM_REFUSED_COUNT = 18;

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
  /* CORRECTIONS §2, EIGHTH BUILD RUNNING: NOT ONE HEADWORD. A row whose `fr`
   * has no whitespace is a bare word whatever its `kind` says (a2.05 §4). */
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

/* THE DRILL ORDER. a2.23 §: this batch writes `it.drills` verbatim and the merge
 * writes `drillOrder(it.drills)`, so the two copies agree ONLY IF every array is
 * already in DRILL_KINDS order. Asserted where it is written. */
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

/* ═══ 2. THE IMPORT, AND THE REPAIRS ═════════════════════════════════════ */

if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} rows imported and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
if (MEASURED_ROWS.headwords !== IMPORTED.length) die('the manifest and the corpus file disagree about how many headwords are imported.');
if (MEASURED_ROWS.framesPresentAsWholeSentence !== 0) {
  die('the manifest found an authored frame already published as a whole sentence. Corpus §3 rests on all of them being absent.');
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
  if (rep.blind && storedFlag) die(`${rep.id} is filed as blind and the checker flags its stored value.`);
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
/* AND THE BLINDNESS ITSELF, AS A NEGATIVE. Corrections §6: assert it so the day
 * the checker improves you find out rather than carrying a dead by-name list.
 * THIS LESSON HAS NO BLIND ROW, which is the thing to report. */
{
  const blind = RESPELL_REPAIRS.filter((r) => r.blind);
  if (blind.length !== 0) {
    die(`${blind.length} rows are filed as blind and this build measured none. If the import has changed, re-measure rather than editing the count.`);
  }
  /* The false positive, looked for and reported rather than left as a silence.
   * `connaître` IS one: kon-NETR is clean because of the `nn` branch, and the
   * word has no nasal vowel at all. */
  const conn = RESPELL_REPAIRS.find((r) => r.fr === 'connaître');
  if (!conn) die('the connaître repair is gone and the guard that documents why it is not a nasal repair rests on it.');
  if (hasPlainNasalFor(conn!.fr, conn!.from)) {
    die('kon-NETR is now FLAGGED. It was clean when this was written, because connaître carries nn and has no nasal vowel. '
      + 'If the checker has changed, corpus §8 needs rewriting, not this guard relaxing.');
  }
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
if (LESSON.version < 3) die(`the version is ${LESSON.version}.`);

/* DOCTRINE §B.5: THE OWNS OUTWEIGHS THE PARADIGM. */
if (OWNS_SECTIONS.length !== OWNS_SECTION_COUNT) die(`${OWNS_SECTIONS.length} Owns sections and OWNS_SECTION_COUNT is ${OWNS_SECTION_COUNT}.`);
if (PARADIGM_SECTIONS.length !== PARADIGM_SECTION_COUNT) die(`${PARADIGM_SECTIONS.length} paradigm sections and PARADIGM_SECTION_COUNT is ${PARADIGM_SECTION_COUNT}.`);
if (OWNS_SECTION_COUNT <= PARADIGM_SECTION_COUNT) die('the paradigm has at least as many sections as the Owns, which is the wrong lesson.');
for (const id of [...OWNS_SECTIONS, ...PARADIGM_SECTIONS]) section(id);

/* THE REFRAME, against an EXPLICIT constant. */
{
  const n = ALL_SURFACE_RAW.filter((s) => s.includes(REFRAME)).length;
  if (n !== REFRAME_COUNT) die(`the reframe is authored ${n} times and REFRAME_COUNT is ${REFRAME_COUNT}.`);
  if (LESSON.reframe !== REFRAME) die('Lesson.reframe is not the corpus file\'s REFRAME.');
}

/* ═══ 4. THE THREE REQUIRED LAYOUTS ══════════════════════════════════════ */

/* Each is ONE CARD carrying both halves, because "adjacent" means one screen
 * and a guard reading strings(section) cannot tell one screen from two. The
 * guards read the CARD's own fields. */
type Card = { head?: string; label?: string; fr?: string; sub?: string; body?: string };
const cardsOf = (id: string): Card[] => ((section(id) as { cards?: Card[] }).cards ?? []);

/* LAYOUT 1: the English order and the French order, adjacent. */
{
  const cards = cardsOf('s02-order');
  if (!cards.length) die('s02-order has no cards.');
  for (const card of cards) {
    const f = card.fr ?? '';
    if (!f.includes('→')) die(`a card in s02-order does not put the two orders on one line: « ${f} ».`);
    const [english, french] = f.split('→').map((x) => x.trim());
    if (!/[a-z]/iu.test(english ?? '')) die('a card in s02-order has no English half.');
    if (!/(le|la|les|l')\s/u.test(`${french} `)) die(`a card in s02-order shows no pronoun in the French half: « ${french} ».`);
    /* AND THE POSITION IS VISIBLE IN BOTH. The English half must put the word
     * last and the French half must not. */
    const frWords = (french ?? '').replace(/[.]$/u, '').split(/\s+/u);
    if (frWords.length < 3) die(`the French half of an s02-order card is under three words: « ${french} ».`);
    if (/(le|la|les)$/u.test(frWords[frWords.length - 1] ?? '')) {
      die(`the French half of an s02-order card ends on the pronoun, which is the error: « ${french} ».`);
    }
  }
}

/* LAYOUT 2: the article use and the pronoun use, one section, and a2.02's term
 * QUOTED VERBATIM. A paraphrase must go red. */
{
  const cards = cardsOf('s04-article');
  if (!cards.length) die('s04-article has no cards.');
  for (const card of cards) {
    const f = card.fr ?? '';
    if (!f.includes('·')) die(`a card in s04-article does not carry both uses on one line: « ${f} ».`);
  }
  const surface = display(section('s04-article'));
  if (!surface.some((s) => s.includes(WHAT_FOLLOWS))) {
    die(`s04-article does not quote a2.02's « ${WHAT_FOLLOWS} » verbatim. A paraphrase is not the same claim.`);
  }
  if (!surface.some((s) => namesUnit(s, 'a2.02'))) die('s04-article quotes a2.02\'s term and does not name the unit.');
  if (!surface.some((s) => namesUnit(s, 'a1.04'))) die('s04-article does not credit a1.04 with the article.');
}

/* LAYOUT 3: « Je le vois. » beside « Je ne le vois pas. », ne visibly outside. */
{
  const cards = cardsOf('s14-negation');
  const both = cards.find((c) => (c.fr ?? '').includes('Je le vois.') && (c.fr ?? '').includes('Je ne le vois pas.'));
  if (!both) die('s14-negation has no card carrying « Je le vois. » and « Je ne le vois pas. » on one line.');
  const f = both.fr!;
  if (f.indexOf('ne') > f.indexOf('le vois pas')) die('ne is not visibly outside the cluster on the negation card.');
}

/* ═══ 5. THE OWNS: NO CORRECT SENTENCE PUTS THE PRONOUN AFTER THE VERB ═══ */

/* GUARD THE THING, NOT THE LETTERS (corrections §14.4). A shape built out of
 * French morphology reads the English as French: `le`, `la` and `les` are all
 * ordinary English-adjacent letter runs, and « the file » or « les » inside an
 * English word would fire a naive version. This requires a FRENCH VERB from the
 * lesson's own list immediately followed by a bare pronoun at a clause end. */
const LESSON_VERBS = [
  'vois', 'voit', 'voyez', 'voyons', 'voient', 'regarde', 'regardes', 'regardez',
  'connais', 'connaît', 'connaissez', 'achète', 'achètes', 'achètent', 'invite',
  'invitons', 'invitez', 'aime', 'aimes', 'écoute', 'cherches', 'prend', 'finissons',
];
/** The verb, then optionally `pas`, then a bare pronoun at a clause end. The
 *  `pas` branch is not decoration: « Je ne vois pas le. » is the negation
 *  version of the same error and the brief names it, and a shape requiring the
 *  pronoun to be ADJACENT to the verb cannot see it. */
const AFTER_VERB_RE = new RegExp(
  `(?<![\\p{L}\\p{N}-])(${LESSON_VERBS.join('|')})\\s+(pas\\s+)?(le|la|les)(?![\\p{L}\\p{N}'’-])\\s*[.?!»]`, 'iu');
const putsPronounAfterVerb = (s: string): boolean => AFTER_VERB_RE.test(s);

/* MUST_FIRE and MUST_NOT_FIRE, because a shape that cannot fire is not a guard
 * and a shape that fires on English is corrections §14.4 all over again. */
{
  const MUST_FIRE = [
    'Je vois le.', 'Je connais la.', 'Tu connais le.', 'Elle prend le.',
    'Nous invitons les.', 'Je regarde la.', 'Je ne vois pas le.',
  ];
  for (const s of MUST_FIRE) if (!putsPronounAfterVerb(s)) die(`the after-verb guard does not fire on « ${s} », so it is not a guard.`);
  const MUST_NOT_FIRE = [
    'Je le vois.', 'Je la connais.', 'Je les invite.',
    /* THE ENGLISH. Half of a learner surface is English by design and the two
     * languages share enough letters that a French-morphology shape reads the
     * English as French. These are real strings from this lesson. */
    'You replace the noun or you keep it; you never say both.',
    'Look at the word straight after it.',
    'The word moves. Nothing else does.',
    'See what? Le film. That is the what or the who.',
    'Read the noun, not the sentence.',
    'English says the verb and then the word.',
  ];
  for (const s of MUST_NOT_FIRE) if (putsPronounAfterVerb(s)) die(`the after-verb guard fires on « ${s} », which it must not.`);
}
if (LESSON.sections.length - WRONG_FORM_SECTIONS.size !== WRONG_FORM_REFUSED_COUNT) {
  die(`the wrong form is refused on ${LESSON.sections.length - WRONG_FORM_SECTIONS.size} sections and `
    + `WRONG_FORM_REFUSED_COUNT is ${WRONG_FORM_REFUSED_COUNT}. Widening the allowlist weakens this guard, so it is counted.`);
}
for (const s of LESSON.sections) {
  if (WRONG_FORM_SECTIONS.has(s.id!)) continue;
  for (const str of display(s)) {
    if (putsPronounAfterVerb(str)) {
      die(`a correct surface outside the trap, the errors card and the exam puts the pronoun after the verb: `
        + `« ${str.slice(0, 90)} » in ${s.id}.`);
    }
  }
}
/* AND INSIDE THE PERMITTED SECTIONS IT IS NEVER THE ANSWER. This is the guard
 * the section allowlist exists to make possible, and it is the one that would
 * catch the failure that matters: the error shipped as the correct option. */
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
    if (answer && putsPronounAfterVerb(answer)) {
      die(`the error is offered as the CORRECT option: « ${answer} ». The lesson would be marking the mistake right.`);
    }
  }
}
/* AND IT MUST ACTUALLY APPEAR IN EACH PERMITTED PLACE, or the lesson never
 * shows the learner the error it exists to prevent. */
for (const id of WRONG_FORM_SECTIONS) {
  if (!display(section(id)).some(putsPronounAfterVerb)) die(`${id} is permitted to show the error and does not show it.`);
}
if (!ALL_SURFACE.some((s) => s.includes(AFTER_VERB_TRAP))) die('the lesson never shows « Je vois le. », which is the error it exists to prevent.');

/* ═══ 6. THE NEGATION ARC ════════════════════════════════════════════════ */

/* Both inherited strings quoted VERBATIM, and the NEGATIVE that they are still
 * different from each other. a2.23 §2: if somebody harmonises them the arc loses
 * the distinction between which words and which verb. */
if (String(A118_REFRAME) === String(NEGATION_RULE)) die('a1.18\'s line and a2.19\'s line are the same string. They are deliberately two.');
if (!ALL_SURFACE.some((s) => s.includes(NEGATION_RULE))) die(`a2.19's « ${NEGATION_RULE} » is not quoted verbatim anywhere.`);
if (!ALL_SURFACE.some((s) => s.includes(A118_REFRAME))) die(`a1.18's « ${A118_REFRAME} » is not quoted verbatim anywhere.`);
if (!ALL_SURFACE.some((s) => s.includes(A222_NEGATION_EXTENSION))) die(`a2.22's extension is not quoted verbatim anywhere.`);
if (!ALL_SURFACE.some((s) => s.includes(NEGATION_EXTENSION))) die('this lesson\'s own negation sentence is not authored anywhere.');
/* AND a2.22's EXTENSION IS QUOTED WITH ITS REASON MARKED AS NOT APPLYING HERE.
 * « Both words changed for the subject » is FALSE of this lesson: the object
 * pronoun does not change with the subject at all. Quoting it unchanged and
 * silently would teach a reason that does not hold. */
{
  const withReason = ALL_SURFACE.filter((s) => s.includes(A222_NEGATION_EXTENSION));
  if (!withReason.some((s) => /does not (change|apply)|reason is different|not apply here/iu.test(s))) {
    die('a2.22\'s extension is quoted and nowhere is it said that its reason does not hold here. '
      + 'The object pronoun does not change with the subject, so the sentence is true of the behaviour and false of the cause.');
  }
}

/* ═══ 7. THE NEIGHBOURS, RESERVED ════════════════════════════════════════ */

/* a2.24: NOT ONE INDIRECT OBJECT PRONOUN, anywhere. */
for (const s of ALL_SURFACE) {
  for (const w of ['lui', 'leur', 'leurs']) {
    if (hasPhrase(s, w)) die(`« ${w} » is a2.24's entire lesson and it appears: « ${s.slice(0, 90)} ».`);
  }
}
/* a2.25: `y` and `en` AS PRONOUNS, nowhere. GUARD THE THING AND NOT THE LETTERS
 * — corrections §14.4. `en` is a preposition all over the corpus and `y` is an
 * ordinary English letter, so the letters alone are useless. */
{
  const Y_PRONOUN = /(?<![\p{L}\p{N}'’-])(j'y|n'y|il y va|elle y va|on y va|y aller|vas-y)(?![\p{L}\p{N}'’-])/iu;
  const EN_PRONOUN = /(?<![\p{L}\p{N}-])(j'en|n'en|tu en as|il en a|on en a|j’en)(?![\p{L}\p{N}'’-])/iu;
  const MUST_FIRE = ["J'y vais.", "J'en veux deux.", 'Tu en as ?'];
  for (const s of MUST_FIRE) {
    if (!Y_PRONOUN.test(s) && !EN_PRONOUN.test(s)) die(`the y/en guard does not fire on « ${s} », so it is not a guard.`);
  }
  const MUST_NOT_FIRE = [
    /* `en` as a preposition, which is everywhere in the corpus. */
    'Je les invite en ville.', 'en français', 'Elle est en retard.',
    /* AND THE ENGLISH, which is where a letters-based version dies. */
    'You already know the words, and the only new thing is where they go.',
    'Every question is about a person or a thing.',
    'Yes, I know her well.',
  ];
  for (const s of MUST_NOT_FIRE) {
    if (Y_PRONOUN.test(s) || EN_PRONOUN.test(s)) die(`the y/en guard fires on « ${s} », which it must not. Corrections §14.4.`);
  }
  for (const s of ALL_SURFACE) {
    if (Y_PRONOUN.test(s) || EN_PRONOUN.test(s)) die(`${Y_EN_UNIT}'s pronouns appear: « ${s.slice(0, 90)} ».`);
  }
}
/* AND BOTH NEIGHBOURS ARE NAMED, so the learner is pointed forward rather than
 * left with a system that looks finished. */
if (!ALL_SURFACE.some((s) => namesUnit(s, INDIRECT_UNIT))) die(`${INDIRECT_UNIT} is named nowhere, so the next lesson is not handed off to.`);
if (!ALL_SURFACE.some((s) => namesUnit(s, Y_EN_UNIT))) die(`${Y_EN_UNIT} is named nowhere.`);
/* THE REFLEXIVE LOOP, CLOSED. a2.22 was told to leave the object-pronoun system
 * to this lesson and its report confirms it did; the brief asks for one line
 * saying the words the learner already has are in the same slot. */
{
  const closes = ALL_SURFACE.filter((s) => namesUnit(s, 'a2.22'));
  if (!closes.length) die('a2.22 is named nowhere and the brief asks this lesson to close its loop.');
  if (!closes.some((s) => /same slot|this same slot|already (carry|have|in it)|one system/iu.test(s))) {
    die('a2.22 is named and nowhere is it said that its small words sit in this same slot.');
  }
}

/* ═══ 8. THE ELISION LIMIT ═══════════════════════════════════════════════ */

if (!ALL_SURFACE.some((s) => s.includes(ELISION_LIMIT))) die('the elision limit is not stated verbatim anywhere.');
if (!ALL_SURFACE.some((s) => namesUnit(s, 'sons.07'))) die('sons.07 owns elision and is credited nowhere.');
/* AND IT IS QUOTED, NOT TAUGHT. sons.07's own machinery must not reappear. */
for (const s of ALL_SURFACE) {
  for (const w of ['h aspiré', 'h muet', 'aspirated h', 'mute h']) {
    if (hasPhrase(s, w)) die(`sons.07's own material appears: « ${w} ». This lesson quotes elision and teaches none of it.`);
  }
}

/* ═══ 9. THE PRECEDING-DIRECT-OBJECT DECISION, ASSERTED ══════════════════ */

/* The brief: « The preceding-direct-object decision is asserted whichever way it
 * went. » It went TAKEN, in one act. Corpus §6. */
if (AGREEMENT_OWNER !== UNIT.id) die(`AGREEMENT_OWNER is ${AGREEMENT_OWNER} and this lesson is ${UNIT.id}. If the decision is being reversed, the act has to go too.`);
if (!ALL_SURFACE.some((s) => s.includes(AGREEMENT_RULE))) die('the agreement rule is not stated verbatim anywhere and this lesson claims to own it.');
{
  const agreementSections = ['s15-past', 's16-agreement'];
  for (const id of agreementSections) section(id);
  /* ONE ACT, NOT THE SPINE. The agreement gets a strict minority of the
   * lesson, and the Owns keeps the weight. */
  const act5 = (LESSON.acts ?? []).find((a) => a.id === 'act5')!;
  if (!act5) die('act5 is missing and it is where the agreement lives.');
  if (act5.sections.length >= OWNS_SECTION_COUNT) {
    die(`the agreement act has ${act5.sections.length} sections against the Owns' ${OWNS_SECTION_COUNT}. It is one act, not the spine.`);
  }
  /* AND IT IS RECOGNITION PLUS EXACTLY ONE TYPED PRODUCTION. */
  const agreed = ROWS.filter((r) => /(vue|vues|achetés|regardées)\.?$/u.test(r.fr));
  if (!agreed.length) die('no authored row carries an agreed participle.');
  for (const r of agreed) {
    if (r.drills.includes('voiceflash') && !r.drills.includes('dictation')) {
      die(`${r.id} carries an agreed ending and a speak drill without a dictation drill, so it is scored by ear on a rule the ear cannot carry.`);
    }
  }
}

/* ═══ 10. THE QUIZ ═══════════════════════════════════════════════════════ */

const QUESTIONS = quizQuestions(section('s23-quiz') as Parameters<typeof quizQuestions>[0]);
if (QUESTIONS.length !== EXPECTED_QUESTIONS) die(`${QUESTIONS.length} questions and EXPECTED_QUESTIONS is ${EXPECTED_QUESTIONS}.`);
/* ONE QUIZ. A second is silently never rendered. */
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('there is not exactly one quiz section.');

const ANSWERABLE = new Set<string>([
  ...AUTHORED_ITEMS.map((i) => i.fr),
  "Je l'invite.", "Je l'aime.",
]);
{
  const mcq = QUESTIONS.filter((q) => q.format === 'mcq').length;
  if (mcq > QUESTIONS.length / 2) die(`${mcq} of ${QUESTIONS.length} questions are mcq and at most half may be.`);
  const free = QUESTIONS.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot').length;
  if (free < 12) die(`only ${free} free-text questions, and errorSpot plus typeIn is the backbone of this exam: a word-order error is a whole-sentence error.`);
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
    /* NO EAR QUESTION MAY SEPARATE TWO OPTIONS THAT ARE ONE SOUND. §7. Two
     * groups here where a2.10 and a2.11 had one, and the elision group is the
     * one the brief singles out: « Je l'aime » for either gender has NO correct
     * answer. */
    if (q.format === 'listenChoose' && q.opts) {
      for (const g of HOMOPHONE_FORMS) {
        const hits = q.opts.filter((o) => g.some((form) => o === form || hasPhrase(o, form)));
        if (hits.length > 1) die(`an ear question offers « ${hits.join(' » and « ')} », which are one sound: ${q.q}`);
      }
      /* AND NO EAR QUESTION GOES NEAR THE ELIDED FORM'S GENDER. */
      if (q.opts.some((o) => /l'/u.test(o)) && /masculine|feminine|man|woman|gender/iu.test(`${q.q} ${q.opts.join(' ')}`)) {
        die(`an ear question asks the gender of an elided form, which the sentence does not carry: ${q.q}`);
      }
    }
  }
}
/* THE CORRECT ANSWER MUST NOT CLUSTER. The density validator fails any slot
 * holding more than 40% of closed-format questions. */
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
/* `drillForRound` FIRES THE FIRST RESOLVING TARGET ONLY. Every drill must lead
 * at least one round or it is dead content. Invariants §4. */
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
        + 'pre-spelled, which gives away the ORDER, and the order is the entire thing this lesson tests.');
    }
    if (r.fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length > DICTEE_MAX_LETTERS) die(`« ${r.fr} » is over ${DICTEE_MAX_LETTERS} letters.`);
    if (!r.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill.`);
  }
  /* AND IT CARRIES THE THREE FORMS AND THE AGREEMENT, which is why it exists. */
  for (const want of ['le', 'la', 'les', "l'"] as const) {
    const found = ids.some((id) => ROWS.find((r) => r.id === id)?.pro === want);
    if (!found) die(`the dictée asks for no « ${want} », and it is the only surface that makes a learner build the order from nothing.`);
  }
  if (!ids.some((id) => /vue|vues|achetés|regardées/u.test(ROWS.find((r) => r.id === id)?.fr ?? ''))) {
    die('the dictée asks for no agreed ending, and it is the only surface that can test one.');
  }
}
/* EVERY ROW CARRYING THE DICTATION DRILL IS A DICTÉE TARGET, or it is a drill
 * nothing can reach. */
{
  const ids = new Set((section('s18-dictation') as { itemIds?: string[] }).itemIds ?? []);
  const orphan = AUTHORED_ITEMS.filter((i) => i.drills.includes('dictation') && !ids.has(i.id));
  /* This lesson deliberately gives more rows the dictation drill than the twelve
   * the dictée names, so the SRS can select them later. What it must not do is
   * give the drill to a row word mode would break. */
  for (const o of orphan) {
    if (dicteeMode(o.fr) !== 'letters') die(`${o.id} carries the dictation drill and dicteeMode puts it in WORD mode.`);
  }
}

/* ═══ 12. THE SPEAK AND ROLE-PLAY SURFACES ═══════════════════════════════ */

for (const id of (section('s20-speak') as { itemIds?: string[] }).itemIds ?? []) {
  const r = AUTHORED_ITEMS.find((i) => i.id === id);
  if (!r) die(`the speak surface names ${id}, which this build does not author.`);
  if (!r!.drills.includes('voiceflash')) die(`${id} is on the speak surface and carries no voiceflash drill.`);
}
/* `scenario.logic.test.ts` REQUIRES TWO `alts` AND A `userEn` ON EVERY TURN.
 * a2.03 was caught by it after the fact; asserted here instead. */
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

/* ═══ 14. THE HOUSE COPY, IN BOTH WALKS ══════════════════════════════════ */

const DOUBLE_STOP = /[.]\s*[.!?,;:]/u;

/* THE UNIT'S OWN ENGLISH TITLE IS THE ONE PLACE THE TECHNICAL COMPOUND MAY
 * APPEAR, and it is checked to BE the unit's title. Corpus §5. */
const TITLE_EXEMPT = LESSON.overview?.titleEn ?? '';
if (TITLE_EXEMPT !== UNIT.title) {
  die(`overview.titleEn is « ${TITLE_EXEMPT} » and content_units holds « ${UNIT.title} ».`);
}
/* EVERY JARGON ENTRY CARRIES ITS -s PLURAL. Corrections §13: hasPhrase is
 * boundary-exact, so a list holding `clitic` misses `clitics`, and a2.15 shipped
 * « Three paradigms » past all three layers because of it. */
for (const j of JARGON_NOUNS) {
  if (j.endsWith('s')) continue;
  const plural = j.endsWith('a') ? `${j}s` : `${j}s`;
  if (!JARGON_NOUNS.includes(plural)) die(`JARGON_NOUNS holds « ${j} » and not « ${plural} ». A boundary-exact check misses the plural.`);
}
/* AND THE ADJECTIVE LIST IS NOT A HIDING PLACE. An entry parked there to dodge
 * the plural requirement would silently weaken the check, so a countable noun
 * on it fails. */
for (const j of JARGON_ADJECTIVES) {
  if (JARGON_NOUNS.includes(j)) die(`« ${j} » is on both jargon lists.`);
  if (/(pronoun|object|antecedent|clitic$)/u.test(j) && j !== 'proclitic' && j !== 'enclitic') {
    die(`« ${j} » is a countable noun on the adjective list, which dodges the plural requirement.`);
  }
}
for (const walk of [PROSE_SURFACE, DISPLAY_SURFACE]) {
  for (const s of walk) {
    if (/[—–]/u.test(s)) die(`an em dash reaches a learner surface: « ${s.slice(0, 90)} ».`);
    /* SUBSTRING, NOT A WORD BOUNDARY, AND THIS BUILD IS THE REASON.
     *
     * Every batch in this band carries `/\bhonest/i`, which does NOT match
     * `dishonest`. The seed-wide `sons-alphabet.test.ts` matches the SUBSTRING,
     * so this build's own guard passed on an audio brief reading « makes the
     * exercise dishonest about what it is testing » and only the seed-wide test
     * caught it. The band's copy of this guard is weaker than the rule it is
     * meant to enforce, and every lesson in it has that today. */
    if (/honest/i.test(s)) die(`a banned word reaches a learner surface: « ${s.slice(0, 90)} ».`);
    if (DOUBLE_STOP.test(s)) die(`a sentence-final stop with punctuation after it: « ${s.slice(0, 90)} ».`);
    /* THE ONE EXEMPTION, AND IT IS ONE STRING. `content_units` requires
     * `overview.titleEn` to BE the unit's English name, and this unit's name is
     * « Direct Object Pronouns », which contains two entries on the list. The
     * exemption is checked to be that exact string (above), so every OTHER
     * occurrence of the same phrases still fails. */
    if (s === TITLE_EXEMPT) continue;
    for (const j of JARGON) {
      if (hasPhrase(s, j)) die(`grammar jargon on a learner surface: « ${j} » in « ${s.slice(0, 90)} ».`);
    }
    if (hasPhrase(s, 'direct object')) {
      die(`« direct object » appears outside overview.titleEn: « ${s.slice(0, 90)} ». `
        + 'The plain phrase does the work everywhere else.');
    }
  }
}
/* AND THE RATIO, which is corrections §14.5's method rather than a ban: the
 * plain phrase must OUTNUMBER the technical one. */
{
  const plain = ALL_SURFACE_RAW.filter((s) => hasPhrase(s, PLAIN_PHRASE) || hasPhrase(s, PLAIN_POSITION)).length;
  const technical = ALL_SURFACE_RAW.filter((s) => hasPhrase(s, 'direct object')).length;
  if (plain <= technical) die(`the plain phrase appears ${plain} times and the technical one ${technical}. §14.5: the plain phrase must outnumber it.`);
  if (technical !== 1) die(`« direct object » appears ${technical} times and the only permitted occurrence is overview.titleEn.`);
}
/* THREE TERM CHIPS PER SECTION. The renderer shows three and collapses the
 * rest, so a fourth is authored into nothing. */
for (const s of LESSON.sections) {
  const t = (s as { terms?: string[] }).terms ?? [];
  if (t.length > 3) die(`${s.id} declares ${t.length} term chips and the renderer shows 3.`);
  for (const k of t) if (!PRONOMS_DIRECT_TERMS[k]) die(`${s.id} names term « ${k} », which is not defined.`);
}
/* EVERY DEFINED TERM IS USED. */
for (const k of Object.keys(PRONOMS_DIRECT_TERMS)) {
  if (!LESSON.sections.some((s) => ((s as { terms?: string[] }).terms ?? []).includes(k))) {
    die(`term « ${k} » is defined and no section surfaces it.`);
  }
}
/* `intro` IS PINNED IN ITS OWN ASSERTION. Corrections §9: a2.11 shipped jargon
 * here in v1 with every host gate green, because the walk read
 * sections + sheets + terms and not this. */
{
  const intro = LESSON.intro ?? '';
  if (!intro) die('the lesson has no intro, and it is drawn on the overview card AND the lesson cover.');
  for (const j of JARGON) if (hasPhrase(intro, j)) die(`grammar jargon in the intro: « ${j} ».`);
  if (hasPhrase(intro, 'direct object')) die('« direct object » is in the intro, which is not overview.titleEn.');
  if (!intro.includes('in front of the verb')) die('the intro does not state the position, which is the whole lesson.');
}

/* ═══ 15. commonErrors, trapDrill AND THE SEED-WIDE CONTRACTS ════════════ */

{
  const ce = section('s11-errors') as { swipe?: boolean; errors?: { wrong: string; right: string; why: string }[] };
  if (!ce.swipe) die('commonErrors has no swipe: true and draws a blank screen without it.');
  if (!(ce.errors ?? []).length) die('commonErrors has no errors.');
  for (const e of ce.errors ?? []) {
    if (!e.why) die(`a common error has no why: « ${e.wrong} ».`);
    if (e.wrong === e.right) die('a common error has the same wrong and right.');
  }
}
{
  const td = section('s09-trap') as {
    swipe?: boolean; size?: string; audio?: unknown; say?: string;
    rule?: unknown; steps?: { kind: string; gate?: boolean }[]; cards?: unknown[]; drill?: unknown[];
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
}

/* ═══ 15b. THE MISSION-ROW TITLE WIDTH ═══════════════════════════════════ */

/* THIS GUARD DID NOT EXIST AT v2 AND THAT IS WHY v3 EXISTS.
 *
 * The mission row cuts a title at roughly 13.55 em on a Pixel 6. This build
 * asserted a great deal about every section and NOTHING about how wide its
 * title draws, so « The Word With Nowhere To Go » (14.17 em) shipped clipped
 * with every host gate green.
 *
 * `titleWidth` and the budget are IMPORTED from a2.23 rather than copied.
 * Invariants §5: a guard that reimplements the thing it guards is free to drift
 * from it, and this model is calibrated against four cases measured on glass.
 * Re-measured here on twenty-four titles it was not calibrated against, it
 * separated the one clip from the twenty-three passes exactly. */
{
  for (const s of TITLE_MUST_FIT) {
    if (titleWidth(s) > TITLE_WIDTH_MAX) die(`the width model has drifted: « ${s} » is measured FITTING on a device and the model says ${titleWidth(s)} > ${TITLE_WIDTH_MAX}.`);
  }
  for (const s of TITLE_MUST_CLIP) {
    if (titleWidth(s) <= TITLE_WIDTH_MAX) die(`the width model has drifted: « ${s} » is measured CLIPPING on a device and the model says ${titleWidth(s)} <= ${TITLE_WIDTH_MAX}.`);
  }
  /* AND THIS LESSON'S OWN MEASURED CASE, kept by name so the repair cannot be
   * quietly reverted. */
  if (titleWidth(CLIPPED_AT_V2) <= TITLE_WIDTH_MAX) {
    die(`« ${CLIPPED_AT_V2} » shipped CLIPPED on a Pixel 6 at v2 and the model now says it fits.`);
  }
  for (const s of LESSON.sections) {
    const w = titleWidth(s.title ?? '');
    if (w > TITLE_WIDTH_MAX) die(`${s.id} title « ${s.title} » is ${w} em against the mission row's ${TITLE_WIDTH_MAX}. It will clip.`);
    if (s.title === CLIPPED_AT_V2) die(`${s.id} has gone back to the title that clipped at v2.`);
  }
}

/* ═══ 16. THE FIFTH OCCURRENCE OF THE RECURRING SHAPE ════════════════════ */

/* Doctrine §B.7 asks, from seq 14 onward, that the earlier instance is named by
 * unit id. The brief asks additionally that this instance be marked as working
 * differently, because the four before it had the distinguisher in what follows
 * and this one has it in what follows AND where it sits. */
{
  const quoting = ALL_SURFACE.filter((s) => s.includes(WHAT_FOLLOWS));
  if (!quoting.length) die(`a2.02's « ${WHAT_FOLLOWS} » is quoted nowhere.`);
  if (!quoting.some((s) => namesUnit(s, 'a2.02'))) die('the recurring shape is quoted and a2.02 is not named beside it.');
  if (!ALL_SURFACE.some((s) => /fifth/iu.test(s))) die('the lesson does not say this is the fifth occurrence, so it reads as a new observation.');
}

/* ═══ 17. APPLY ══════════════════════════════════════════════════════════ */

async function main() {
  console.log(`\n  a2.06 « ${UNIT.sub} », seq ${UNIT.seq}\n`);
  console.log(`  guards        all passed over ${ALL_SURFACE.length} learner strings`);
  console.log(`  corpus        ${AUTHORED_ITEMS.length} authored into ${THEME}, ${IMPORTED_IDS.length} imported, 0 headwords authored`);
  console.log(`  lesson        ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions`);
  console.log(`  the Owns      ${OWNS_SECTION_COUNT} sections against the paradigm's ${PARADIGM_SECTION_COUNT}`);
  console.log(`  agreement     TAKEN by ${AGREEMENT_OWNER}, one act, recognition plus one typed production`);
  console.log(`  repairs       ${RESPELL_REPAIRS.length}, 0 blind, ${RESPELL_REPAIRS.filter((r) => r.house).length} house`);

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
  /* THE PREREQUISITE IS SHIPPED. a2.23 made this permanent and it is kept. */
  {
    const declared = unit!.prereqUnitIds ?? [];
    for (const p of UNIT.prereqUnitIds) {
      if (!declared.includes(p)) { c.release(); await pool.end(); die(`the unit does not declare ${p} as a prerequisite.`); }
      const pq = await c.query<{ body: { lessonIds?: string[] } }>(
        "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [p]);
      if (!(pq.rows[0]?.body?.lessonIds ?? []).length) {
        c.release(); await pool.end();
        die(`${p} is a hard prerequisite and has NO SHIPPED LESSON.`);
      }
    }
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
    /* THE RESPELLING REPAIRS. Eight rows across six themes, and nothing but the
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
  /* AND THE REPAIRS LANDED, read back through the real function. */
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
    + `    ${IMPORTED_IDS.length} rows imported by id, ${RESPELL_REPAIRS.length} respellings repaired across 6 themes\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${QUESTIONS.length} questions, ${(LESSON.itemIds ?? []).length} items\n`
    + `    the Owns ${OWNS_SECTION_COUNT} sections against the paradigm's ${PARADIGM_SECTION_COUNT}\n`
    + `    ${THEME} row count: ${before} before, ${after} after (max ${afterQ.rows[0]!.mx})\n`
    + `    preceding-direct-object agreement: TAKEN by ${AGREEMENT_OWNER}, one act\n\n`
    + '  NEXT: pnpm tsx scripts/merge-pronoms-direct-into-seed.ts\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
