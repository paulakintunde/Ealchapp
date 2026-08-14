/* Merges a2.17.l1 "Les adverbes" into ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-adverbes-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-adverbes-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * ── WHY THE CARRY EXISTS, AND IT HAS NEVER MATTERED MORE THAN HERE ────────
 *
 * `adverbes-essentiels` HOLDS 325 PUBLISHED ROWS IN POSTGRES AND ZERO IN THE
 * SEED. It is outside `SEED_CUT.themes` entirely, so this lesson's home theme
 * does not exist in the cut at all and NINE of its twenty-eight carried rows —
 * every derived adverb it teaches — would resolve to nothing. `mots-essentiels`
 * is thin too and `bien`, `mal`, `vite`, `souvent` and `toujours` are all
 * outside it. A merge that did not carry them would render most of this lesson
 * as blank cards.
 *
 * Corrections §10 puts it at a fifth for `verbes`. Here it is a whole theme.
 *
 * ── THE TWO TRANSFORMS, AND WHY THEY LIVE HERE TOO ────────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * then changes two kinds of thing about rows it does not own:
 *
 *   1  ten respellings repaired   MAHN to MAHⁿ, plus two rows whose FIRST nasal
 *                                 the checker cannot see, plus BYAN to BYEHⁿ
 *   2  six sets of drills added   four sentences that could not be drawn on a
 *                                 card or spoken, and two words that could not
 *                                 be spelled
 *
 * Carrying the manifest verbatim would put `lahnt-MAHN` in the seed on the hero
 * row of a lesson whose subject is that word, while Postgres held `lahⁿt-MAHⁿ`.
 * Both are applied here, from the same constants, and the result is checked
 * field by field.
 *
 * RESPELL_ADDITIONS IS EMPTY AND ASSERTED EMPTY. Every row this lesson imports
 * already carries a respelling, which is a first in this band.
 *
 * ── THE DRILL-ORDER TRAP, INHERITED FROM a2.12 ────────────────────────────
 *
 * `drills` is a Postgres ENUM array and `array_agg(distinct e order by e)`
 * orders by DECLARATION order, not alphabetically. a2.12's merge sorted the same
 * values as STRINGS and shipped a different order into the seed from the one the
 * database held: same set, same meaning, and a divergence on rows the build
 * owned, invisible to the suite because nothing compares drill ORDER.
 * `drillOrder()` below sorts by `DRILL_KINDS`, which `enum-parity.test.ts`
 * already pins to the enum. This build adds drills to SIX rows.
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
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  ADJ_ORDER, ADVERBES, AGREEMENT_UNIT, ALL_REPAIRS, AMMENT,
  AUTHORED_HEADWORDS, AUTHORED_IDS as AUTHORED_ID_LIST, A203_REFRAME, A203_ROWS,
  BON_BIEN_SHAPE, CITED_UNITS, COMPARATIVE_UNIT, COMPOUND_MUST_FIRE,
  COMPOUND_MUST_NOT_FIRE, COMPOUND_SHAPE, DEFERRAL_LINE, DICTEE_WORD_MODE_ROWS,
  DRILL_ADDITIONS, ENGLISH_ORDER_MUST_FIRE, ENGLISH_ORDER_MUST_NOT_FIRE,
  ENGLISH_ORDER_SHAPE, EXPECTED_ACTS, EXPECTED_AUTHORED,
  EXPECTED_AUTHORED_HEADWORDS, EXPECTED_BLIND_NASALS, EXPECTED_DICTEE,
  EXPECTED_IMPORTED, EXPECTED_QUESTIONS, EXPECTED_REFRAME_SECTIONS,
  EXPECTED_REFRAME_USES, EXPECTED_RESPELL_ADDITIONS, EXPECTED_RESPELL_REPAIRS,
  EXPECTED_SECTIONS, EXPECTED_SEEN_NASALS, EXPECTED_SUPERSCRIPTS, IRREGULARS,
  MENT, MISSION_TITLE_MAX, NEGATION_UNIT, NOT_FROM_FEMININE_SHAPE, PASSE_UNIT,
  PLACEMENT_ROWS, RESERVED_MUST_FIRE, RESERVED_MUST_NOT_FIRE, RESERVED_SHAPE,
  RESPELL_ADDITIONS, STEP_LABEL, STEP_ORDER, SUFFIX_HOMOPHONES,
  TERM_CHIP_ROW_MAX, THEME, UNIT, UNSEEN, UNSEEN_SHAPE, UNSEEN_WORDS,
  addedConsonant, adverbCheck, chainOf, femCheck, pairId, step, stepRespell,
  toItem, type Repair,
} from './data/adverbes-corpus.ts';
import {
  IMPORTED_BY_ID, IMPORTED_IDS, READ_ONLY_ROWS, SOURCE_THEMES,
  TWO_WAYS_EVIDENCE, chainId, chainIsAuthored,
} from './data/adverbes-imported.ts';
import {
  ADVERBES_DICTEE_IDS, ADVERBES_ITEM_IDS, ADVERBES_LESSON, ADVERBES_SPEAK_IDS,
  AMMENT_SECTION_ID, BON_BIEN_SECTION_ID, CHAIN_SECTION_ID, ERRORS_SECTION_ID,
  HEAR_SECTION_ID, IRREGULAR_SECTION_ID, ORDER_SECTION_ID, PAYOFF_SECTION_ID,
  PLACE_SECTION_ID, QUIZ_SECTION_ID, SCENE_SECTION_ID, UNSEEN_SECTION_ID,
} from './data/adverbes-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = ADVERBES_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = ADVERBES.map(toItem);
const AUTHORED_IDS = new Set(AUTHORED_ID_LIST);

function die(msg: string): never {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k) && !MACHINE_KEYS.has(k)) prose(x, out);
  }
  return out;
}
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase(); const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

/* ─── THE CARRIED ROWS, WITH THE BATCH'S OWN TRANSFORMS APPLIED ──────────── */

const REPAIR_BY_ID = new Map(ALL_REPAIRS.map((r) => [r.id, r] as const));
const DRILL_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** Order a drill array the way POSTGRES does: `DRILL_KINDS` order, which is the
 *  enum's declaration order, NOT alphabetical. See the header. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((x, y) => DRILL_KINDS.indexOf(x) - DRILL_KINDS.indexOf(y)) as Item['drills'];

const MANIFEST_ROWS = [...IMPORTED_BY_ID.values()];

const CARRIED: Item[] = MANIFEST_ROWS.map((row) => {
  const fix: Repair | undefined = REPAIR_BY_ID.get(row.id);
  const drill = DRILL_BY_ID.get(row.id);
  if (!fix && !drill) return row;

  let respell = row.respell;
  if (fix) {
    if (!String(respell ?? '').includes(fix.from)) {
      die(`${row.id} is recorded as ${JSON.stringify(respell)} and the repair expects to find ${JSON.stringify(fix.from)} in it. Regenerate the manifest.`);
    }
    respell = String(respell).split(fix.from).join(fix.to);
  }
  const drills = drill
    ? drillOrder([...new Set([...(row.drills ?? []), ...drill.add])] as Item['drills'])
    : row.drills;
  return { ...row, respell, drills };
});

/** Every transform landed on the row it names, and on no other. */
{
  const byIdMap = new Map(CARRIED.map((r) => [r.id, r] as const));
  for (const r of ALL_REPAIRS) {
    const now = String(byIdMap.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) die(`the carry did not apply the repair to ${r.id}: ${JSON.stringify(now)}`);
    if (r.from !== r.to && now.includes(r.from)) die(`the carry left the unrepaired value in ${r.id}: ${JSON.stringify(now)}`);
  }
  if (RESPELL_ADDITIONS.length !== EXPECTED_RESPELL_ADDITIONS) {
    die(`${RESPELL_ADDITIONS.length} respell additions and this build supplies ${EXPECTED_RESPELL_ADDITIONS}. Every imported row already carries a respelling.`);
  }
  for (const d of DRILL_ADDITIONS) {
    for (const want of d.add) {
      if (!(byIdMap.get(d.id)?.drills ?? []).includes(want as Item['drills'][number])) die(`the carry did not add the ${want} drill to ${d.id}`);
    }
  }
  const touched = new Set([...REPAIR_BY_ID.keys(), ...DRILL_BY_ID.keys()]);
  const untouched = CARRIED.filter((r) => !touched.has(r.id));
  const changed = untouched.filter((r) => JSON.stringify(r) !== JSON.stringify(MANIFEST_ROWS.find((x) => x.id === r.id)));
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not own: ${changed.map((r) => r.id).join(', ')}`);
  console.log(`\n  carry: ${CARRIED.length} rows, ${ALL_REPAIRS.length} repaired, ${DRILL_ADDITIONS.length} given drills, ${untouched.length} byte-identical to the manifest`);
}

/** AND THE CARRY COMES OUT CLEAN. The nasal checker runs on the carry rather
 *  than on the manifest, because the carry is what reaches a screen. */
{
  const flagged = CARRIED.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell));
  if (flagged.length) {
    die(`${flagged.length} carried row(s) are flagged by the nasal checker after the carry:\n  ${flagged.map((r) => `${r.id}  ${r.respell}`).join('\n  ')}`);
  }
  /* AND EVERY CARRIED -ment WORD ENDS IN THE HOUSE SUFFIX. This is the decision
     the lesson settles for the level, so it is checked on the rows that reach a
     screen rather than only on the CHAIN constant. */
  for (const r of CARRIED) {
    if (!/(?:^|\s)\p{L}*ment$/u.test(r.fr)) continue;
    if (!String(r.respell ?? '').endsWith(`-${MENT}`)) {
      die(`${r.id} ${JSON.stringify(r.fr)} carries ${JSON.stringify(r.respell)} after the carry and the house suffix is -${MENT}.`);
    }
  }
  /* AND THE TWO BLIND ROWS COME OUT WITH BOTH NASALS REPAIRED, not just the one
     the checker reports. That is the finding this build is here to protect: the
     checker calls the half-repaired value clean. */
  for (const r of ALL_REPAIRS.filter((x) => x.blind)) {
    const now = String(CARRIED.find((x) => x.id === r.id)?.respell ?? '');
    if (now !== r.to) die(`${r.id} carries ${JSON.stringify(now)} and the fully repaired value is ${JSON.stringify(r.to)}`);
    if (hasPlainNasalFor(r.fr, r.half)) die(`${r.id}'s half-repaired value ${JSON.stringify(r.half)} is flagged, so it is not what the checker reports`);
    if (r.half === r.to) die(`${r.id} is recorded as blind and its half-repaired value equals the correct one`);
  }
}

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`  merging ${LESSON.id} into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/* THE CUT, MEASURED RATHER THAN ASSUMED. */
{
  const inSeed = new Set(seed.items.map((i) => i.id));
  const themeInSeed = seed.items.filter((i) => i.theme === THEME).length;
  const absent = IMPORTED_IDS.filter((id) => !inSeed.has(id));
  console.log(`  the cut: ${THEME} holds ${themeInSeed} rows in the seed and 325 in Postgres; ${absent.length} of this lesson's ${IMPORTED_IDS.length} imports are NOT in the seed today`);
  /* ZERO ABSENT IS THE RE-MERGE CASE AND IT IS NORMAL. The first version of this
     check died on it, which made the merge non-idempotent: the run that carries
     the rows in makes the next run look wrong. What matters is that every
     itemId RESOLVES after the merge, and that is asserted below against the
     post-merge id set. */
  if (!absent.length && themeInSeed === 0) {
    die(`${THEME} holds no rows in the seed and no import is missing from it, which cannot both be true. `
      + 'Either the cut has changed or the manifest has.');
  }
}

/* ── The lessons this merge MUST NOT DISTURB, BY NAME ───────────────────── */
const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const UNITS_BEFORE = seed.units.length;
const MINE = new Set<string>([...AUTHORED_IDS, ...CARRIED.map((r) => r.id)]);
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/** THE READ-ONLY ROWS ARE NOT IN `MINE`. The two that matter most are
 *  `parfaitement` and `certainement`: they are the answers to the two
 *  generalisation questions, and carrying either into the seed would put the
 *  answer in the lesson's own vocabulary. */
{
  const carried = READ_ONLY_ROWS.filter((r) => MINE.has(r.id)).map((r) => `${r.fr} (${r.id})`);
  if (carried.length) die(`read-only row(s) in the carry set: ${carried.join(', ')}. They are read, never written.`);
  const tie = CARRIED.filter((r) => String(r.respell ?? '').includes('‿'));
  if (tie.length) die(`${tie.length} carried row(s) hold U+203F: ${tie.map((r) => r.id).join(', ')}`);
}

/* ── Everything the batch checked, checked again against the POST-MERGE seed ─ */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));
const carriedIssues = CARRIED.flatMap((it) => validateItem(it, it.id));
if (carriedIssues.length) die(`the rows carried through the cut do not validate:\n${formatIssues(carriedIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));

const POST_MERGE_IDS = new Set([
  ...seed.items.map((i) => i.id),
  ...AUTHORED_ITEMS.map((i) => i.id),
  ...CARRIED.map((i) => i.id),
]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(formatDensity(density));

const missing = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (missing.length) {
  die(`${missing.length} itemId(s) would not resolve in the seed and would render blank cards:\n  ${missing.join('\n  ')}\n`
    + `  The seed is a CUT and ${THEME} is OUTSIDE it entirely: 325 rows in Postgres and 0 here, so the carry is not optional.`);
}

if (ADVERBES.length !== EXPECTED_AUTHORED) die(`${ADVERBES.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (ALL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`${ALL_REPAIRS.length} repairs, expected ${EXPECTED_RESPELL_REPAIRS}`);

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz) die('the lesson has no quiz section');
const qs = quizQuestions(quiz);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz section; a second is silently never rendered');

/* ── The learner-surface walks, INCLUDING intro, overview and the authored rows ─ */

const production = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro, ...strings(LESSON.overview ?? {}), ...strings(LESSON.acts ?? []),
  ...strings(LESSON.drills ?? []),
  ...ADVERBES.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
];
const learnerDisplay = [
  ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...display(LESSON.acts ?? []), ...display(LESSON.drills ?? []),
  ...ADVERBES.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
].join('\n');
const learnerProse = [
  ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...prose(LESSON.acts ?? []), ...prose(LESSON.drills ?? []),
].join('\n');
if (learnerDisplay.includes('—')) die('an em dash reached a learner surface');
if (/honest/i.test(learnerDisplay)) die('"honest" reached a learner surface');
if (/honest/i.test(learnerProse)) die('"honest" reached a learner surface via prose()');
if (!LESSON.intro || LESSON.intro.length < 80) die('Lesson.intro is missing or too short to be the learner surface it is');
if (LESSON.overview?.titleEn !== UNIT.title) die('overview.titleEn and the unit title disagree');
if (LESSON.overview?.subFr !== UNIT.sub) die('overview.subFr and the unit sub disagree');

/* THE REFRAME. */
if (LESSON.reframe !== 'Say the feminine, then add -ment.') die('Lesson.reframe has drifted from the corpus REFRAME');
if (!/^Say the feminine/.test(LESSON.reframe)) die('the reframe must begin "Say the feminine": `say` is an operation in the mouth and `take` is one on the page');
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(LESSON.reframe!))).length;
if (reframeSections !== EXPECTED_REFRAME_SECTIONS) die(`the reframe is in ${reframeSections} sections, expected ${EXPECTED_REFRAME_SECTIONS}`);
const reframeUses = production.reduce((n, s) => n + countPhrase(s ?? '', LESSON.reframe!), 0);
if (reframeUses !== EXPECTED_REFRAME_USES) die(`the reframe appears ${reframeUses} times, expected ${EXPECTED_REFRAME_USES}`);

/* ── THE OWNS, AGAIN, AGAINST THE POST-MERGE ROWS ────────────────────────── */

const consonants = new Set<string>();
for (const a of ADJ_ORDER) {
  if (!femCheck(a)) die(`${a}: the woman form is not the plain form plus one consonant, and that is the whole lesson`);
  if (!adverbCheck(a)) die(`${a}: the long word is not the woman form plus -${MENT}`);
  consonants.add(addedConsonant(a));
  for (const s of STEP_ORDER) {
    if (chainIsAuthored(a, s)) {
      const row = AUTHORED_ITEMS.find((r) => r.id === chainId(a, s));
      if (!row) die(`no authored row for ${a}/${s}`);
      if (row.fr !== step(a, s)) die(`${chainId(a, s)} is ${JSON.stringify(row.fr)} and the chain says ${JSON.stringify(step(a, s))}`);
      if (row.respell !== stepRespell(a, s)) die(`${chainId(a, s)} respells as ${JSON.stringify(row.respell)} and the chain says ${JSON.stringify(stepRespell(a, s))}`);
      continue;
    }
    const row = CARRIED.find((r) => r.id === chainId(a, s));
    if (!row) die(`${chainId(a, s)} is not in the carry after the merge`);
    if (row.fr !== step(a, s)) die(`${chainId(a, s)} holds ${JSON.stringify(row.fr)} and the chain says ${JSON.stringify(step(a, s))}`);
    if (row.respell !== stepRespell(a, s)) die(`${chainId(a, s)} carries ${JSON.stringify(row.respell)} and the chain says ${JSON.stringify(stepRespell(a, s))}`);
  }
}
if (consonants.size !== ADJ_ORDER.length) die(`the ${ADJ_ORDER.length} chain adjectives add ${consonants.size} different consonants; three DIFFERENT ones is what makes it a rule`);

/* THE CHAIN IS ONE SECTION AND IT IS A CHAIN. */
{
  const chain = LESSON.sections.find((s) => (s as { id?: string }).id === CHAIN_SECTION_ID) as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  if (chain?.type !== 'tapTable') die(`${CHAIN_SECTION_ID} must be a tapTable: the middle step is AUDIBLE and has to be one tap per row`);
  if ((chain.rows ?? []).length !== ADJ_ORDER.length) die(`${CHAIN_SECTION_ID} has ${(chain.rows ?? []).length} rows and there are ${ADJ_ORDER.length} adjectives`);
  (chain.rows ?? []).forEach((r, i) => {
    const want = chainOf(ADJ_ORDER[i]);
    want.forEach((w, j) => {
      if (r.cells[j] !== w) die(`${CHAIN_SECTION_ID} row ${i} cell ${j} is ${JSON.stringify(r.cells[j])} and the chain says ${JSON.stringify(w)}`);
    });
  });
  if (STEP_ORDER.join(',') !== 'masc,fem,adverb') die('the chain columns are not in the order the operation runs');
  if (STEP_LABEL.masc !== 'Plain' || STEP_LABEL.fem !== 'For her') die("the first two column headers must be a2.16's Plain and For her");
}

/* THE PLACEMENT TABLE, WHOSE COLUMNS ARE THE WORD ORDER. */
{
  const place = LESSON.sections.find((s) => (s as { id?: string }).id === PLACE_SECTION_ID) as { type?: string; rows?: { cells: string[] }[] } | undefined;
  if (place?.type !== 'tapTable') die(`${PLACE_SECTION_ID} must be a tapTable`);
  (place.rows ?? []).forEach((r, i) => {
    const p = PLACEMENT_ROWS[i];
    if (r.cells[0] !== p.subject || r.cells[1] !== p.verb || r.cells[2] !== p.adverb) {
      die(`${PLACE_SECTION_ID} row ${i} is ${JSON.stringify(r.cells)} and the corpus says ${JSON.stringify([p.subject, p.verb, p.adverb])}`);
    }
    const sentence = CARRIED.find((x) => x.id === p.id)?.fr ?? '';
    if (sentence.replace(/[.?!]$/, '').split(' ').pop() !== p.adverb) die(`${p.id} does not end with ${JSON.stringify(p.adverb)}`);
  });
}

/* THE a2.03 PAYOFF, ASSERTED AS LITERALS. Ledger §a2.16-3. */
{
  const payoff = LESSON.sections.find((s) => (s as { id?: string }).id === PAYOFF_SECTION_ID);
  if (!payoff) die(`${PAYOFF_SECTION_ID} is missing`);
  if (!strings(payoff).some((s) => hasPhrase(s, 'a2.03'))) die(`${PAYOFF_SECTION_ID} does not name a2.03 by unit id`);
  if (!strings(payoff).some((s) => s.includes('The plain form tells you the other three.'))) {
    die(`${PAYOFF_SECTION_ID} does not quote a2.03's reframe verbatim`);
  }
  if (A203_REFRAME !== 'The plain form tells you the other three.') die('A203_REFRAME has drifted from what a2.03 ships');
  for (const id of [A203_ROWS.mascSentence, A203_ROWS.femSentence, A203_ROWS.fem]) {
    if (!IMPORTED_IDS.includes(id)) die(`${id} is one of a2.03's own rows and this lesson does not import it`);
  }
  if (ADJ_ORDER.some((a) => STEP_ORDER.some((s) => a === 'serieux' && chainIsAuthored(a, s)))) {
    die('one of the sérieux cells is authored; all three are published rows and that is what makes the payoff evidence');
  }
}

/* THE FORMS THAT MAY ONLY APPEAR AS MARKED ERRORS. */
{
  const legalOrder = new Set([SCENE_SECTION_ID, ORDER_SECTION_ID, QUIZ_SECTION_ID]);
  const legalBonBien = new Set([BON_BIEN_SECTION_ID, QUIZ_SECTION_ID]);
  for (const f of ENGLISH_ORDER_MUST_FIRE) if (!ENGLISH_ORDER_SHAPE.test(f)) die(`ENGLISH_ORDER_SHAPE does not fire on ${JSON.stringify(f)}`);
  for (const f of ENGLISH_ORDER_MUST_NOT_FIRE) if (ENGLISH_ORDER_SHAPE.test(f)) die(`ENGLISH_ORDER_SHAPE fires on ${JSON.stringify(f)}, which is correct French`);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (strings(s).some((x) => ENGLISH_ORDER_SHAPE.test(x)) && !legalOrder.has(sid)) die(`${sid} prints the English word order outside the sections that mark it wrong`);
    if (strings(s).some((x) => BON_BIEN_SHAPE.test(x)) && !legalBonBien.has(sid)) die(`${sid} puts a describing word after a verb outside the sections that mark it wrong`);
    if (strings(s).some((x) => NOT_FROM_FEMININE_SHAPE.test(x)) && sid !== QUIZ_SECTION_ID) die(`${sid} prints a form built from a woman form that plays no part`);
  }
  const orderHomes = LESSON.sections.filter((s) => legalOrder.has((s as { id?: string }).id ?? '')
    && strings(s).some((x) => ENGLISH_ORDER_SHAPE.test(x)));
  if (orderHomes.length !== legalOrder.size) die(`the English order is drilled in ${orderHomes.length} of ${legalOrder.size} sections`);
  const bonHomes = LESSON.sections.filter((s) => legalBonBien.has((s as { id?: string }).id ?? '')
    && strings(s).some((x) => BON_BIEN_SHAPE.test(x)));
  if (bonHomes.length !== legalBonBien.size) die(`the bon/bien error is drilled in ${bonHomes.length} of ${legalBonBien.size} sections`);
  const orderFixes = qs.filter((q) => q.format === 'errorSpot' && ENGLISH_ORDER_SHAPE.test(q.prompt ?? ''));
  if (orderFixes.length < 2) die(`${orderFixes.length} errorSpot questions fix the word order, and free text is the only format that can`);
}

/* THE THREE IRREGULARS, EACH NAMED, AND THE REGULARISED FORMS PINNED.
 *
 * TWO CHECKS THE MUTATION HARNESS FOUND THIS LAYER MISSING. Row 3 wrote
 * `bonnement` into the review deck and the batch caught it while the merge did
 * not; row 10 dropped a chain adjective and the same thing happened. Neither
 * shipped, because the batch runs first — but the merge is the layer that runs
 * when somebody re-merges without re-applying, and a merge thinner than the
 * batch has stopped being a check. Ledger §a2.16-4. */
{
  const s = LESSON.sections.find((x) => (x as { id?: string }).id === IRREGULAR_SECTION_ID);
  for (const w of IRREGULARS) {
    if (!strings(s).some((x) => hasPhrase(x, w))) die(`${IRREGULAR_SECTION_ID} does not name ${JSON.stringify(w)}`);
  }
  const REGULARISED = ['bonnement', 'mauvaisement', 'vitement', 'biennement'];
  const legal = new Set([IRREGULAR_SECTION_ID, BON_BIEN_SECTION_ID, ERRORS_SECTION_ID, QUIZ_SECTION_ID]);
  let shown = 0;
  for (const x of LESSON.sections) {
    const sid = (x as { id?: string }).id ?? '?';
    for (const bad of REGULARISED) {
      if (!strings(x).some((t) => hasPhrase(t, bad))) continue;
      if (!legal.has(sid)) die(`${sid} prints ${JSON.stringify(bad)}, which is not a word in French`);
      shown += 1;
    }
  }
  if (!shown) die('nothing anywhere shows a regularised irregular as an error, so the guard is guarding nothing');
  if (ADJ_ORDER.length !== 3) {
    die(`${ADJ_ORDER.length} chain adjectives, and the brief asks for at least three in ONE section. `
      + 'Three with three DIFFERENT added consonants is what makes the derivation a rule rather than a fact about one word.');
  }
}

/* TWO SPELLINGS, ONE SOUND, AND NEITHER FROM THE FEMININE. */
{
  const s = LESSON.sections.find((x) => (x as { id?: string }).id === AMMENT_SECTION_ID) as { type?: string } | undefined;
  if (s?.type !== 'listening') die(`${AMMENT_SECTION_ID} must be a listening section: the pair is only teachable audible and side by side`);
  for (const x of AMMENT) {
    if (!strings(s).some((t) => hasPhrase(t, x.adverb))) die(`${AMMENT_SECTION_ID} does not print ${JSON.stringify(x.adverb)}`);
  }
  const tails = new Set(AMMENT.map((x) => x.adverbRespell.slice(-(`a-${MENT}`).length)));
  if (tails.size !== 1) die(`the two endings respell differently (${[...tails].join(' / ')}) and the screen says they are one sound`);
  if (!strings(s).some((t) => /do not use the woman form|not the answer|taken off and replaced/i.test(t))) {
    die(`${AMMENT_SECTION_ID} does not say that neither of these is built from the woman form`);
  }
  for (const q of qs) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (const [x, y] of SUFFIX_HOMOPHONES) {
      for (let i = 0; i < opts.length; i += 1) for (let j = 0; j < opts.length; j += 1) {
        if (i !== j && opts[i].split(x).join(y) === opts[j]) die(`a listenChoose offers two options that differ only by ${x}/${y} and are ONE SOUND`);
      }
    }
  }
}

/* THE GENERALISATION TEST, IN BOTH DIRECTIONS. */
{
  const legalUnseen = new Set([UNSEEN_SECTION_ID, QUIZ_SECTION_ID]);
  for (const u of UNSEEN) {
    for (const w of [u.adj, u.fem, u.adverb]) {
      if (ADVERBES.some((r) => hasPhrase(r.fr, w))) die(`an authored row holds ${JSON.stringify(w)}, which must be unseen`);
      if (CARRIED.some((r) => hasPhrase(r.fr, w))) die(`a carried row holds ${JSON.stringify(w)}, which must be unseen`);
    }
  }
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (strings(s).some((x) => UNSEEN_SHAPE.test(x)) && !legalUnseen.has(sid)) {
      die(`${sid} prints one of ${UNSEEN_WORDS.join(', ')}, and showing it anywhere else deletes the generalisation question`);
    }
  }
  const asked = qs.filter((q) => (q.format === 'typeIn' || q.format === 'errorSpot') && UNSEEN.some((u) => (q.answer ?? '') === u.adverb));
  if (asked.length < UNSEEN.length) die(`${asked.length} free-text questions build a word from an adjective the lesson never lists, and there are ${UNSEEN.length}`);
  for (const q of asked) {
    const u = UNSEEN.find((x) => x.adverb === q.answer)!;
    if (!hasPhrase(q.q ?? '', u.fem)) die(`the unseen question asking for ${u.adverb} does not give ${u.fem} in the stem`);
  }
}

/* NO COMPOUND TENSE OUTSIDE THE DEFERRAL LINE, AND THE DEFERRAL LINE EXISTS. */
{
  for (const f of COMPOUND_MUST_FIRE) if (!COMPOUND_SHAPE.test(f)) die(`COMPOUND_SHAPE does not fire on ${JSON.stringify(f)}`);
  for (const f of COMPOUND_MUST_NOT_FIRE) if (COMPOUND_SHAPE.test(f)) die(`COMPOUND_SHAPE fires on ${JSON.stringify(f)}, which this lesson prints`);
  const stray = production.filter((s) => COMPOUND_SHAPE.test(s ?? '') && !(s ?? '').includes(DEFERRAL_LINE));
  if (stray.length) die(`a compound tense is conjugated outside the deferral line:\n  ${stray.slice(0, 3).map((s) => JSON.stringify((s ?? '').slice(0, 90))).join('\n  ')}`);
  if (!production.some((s) => (s ?? '').includes(DEFERRAL_LINE))) die('the deferral line appears on no learner surface');
  if (!COMPOUND_SHAPE.test(DEFERRAL_LINE)) die('the deferral line no longer holds the compound-tense example the learner needs it for');
  if (!hasPhrase(DEFERRAL_LINE, 'a2.05')) die('the deferral line does not name a2.05 by unit id');
}

/* `mieux` APPEARS NOWHERE, RESERVING a2.08. */
{
  for (const f of RESERVED_MUST_FIRE) if (!RESERVED_SHAPE.test(f)) die(`RESERVED_SHAPE does not fire on ${JSON.stringify(f)}`);
  for (const f of RESERVED_MUST_NOT_FIRE) if (RESERVED_SHAPE.test(f)) die(`RESERVED_SHAPE fires on ${JSON.stringify(f)}, which this lesson prints`);
  const hit = production.find((s) => RESERVED_SHAPE.test(s ?? ''));
  if (hit) die(`a comparative appears on a learner surface and they are ${COMPARATIVE_UNIT}'s: ${JSON.stringify((hit ?? '').slice(0, 90))}`);
}

/* ── SIX CHECKS THE a2.16 MUTATION HARNESS FOUND ITS MERGE MISSING ────────
 *
 * Ledger §a2.16-4: six of that build's twenty-nine mutations were caught by the
 * batch and missed here, and none of them shipped only because the batch runs
 * first. A merge thinner than the batch has stopped being a check, and it is the
 * layer that runs when somebody re-merges without re-applying.               */

/* THE JARGON WALK, over prose() AND display(), with the -s plural of every
   entry, and INCLUDING `intro` and the authored rows' notes. */
{
  const JARGON = [
    'adverbial', 'derivation', 'derivational', 'derive', 'suffix',
    'suffixation', 'affix', 'stem', 'base form', 'inflection', 'inflected',
    'paradigm', 'morpheme', 'morphology', 'allomorph', 'suppletion',
    'suppletive', 'lexeme', 'phoneme', 'phonological', 'orthography',
    'modifier', 'modifies', 'attributive', 'predicative', 'nasal vowel',
    'first person', 'second person', 'third person', 'inflectional class',
    'productive rule', 'manner adverb',
  ];
  for (const j of JARGON) {
    for (const term of [j, `${j}s`]) {
      for (const [label, text] of [['prose', learnerProse], ['display', learnerDisplay]] as const) {
        const hit = text.split('\n').find((x) => hasPhrase(x, term));
        if (hit) die(`grammar jargon on a learner surface (${label} walk): ${JSON.stringify(term)} in ${JSON.stringify(hit.slice(0, 90))}`);
      }
    }
    if (hasPhrase(LESSON.intro ?? '', j) || hasPhrase(LESSON.intro ?? '', `${j}s`)) {
      die(`\`intro\` holds the jargon ${JSON.stringify(j)}, and it is drawn on the overview card AND the lesson cover`);
    }
  }
  /* AND THE PLAIN PHRASE OUTNUMBERS THE TECHNICAL ONE, which is the house ratio
     rather than a ban. `adjective` is on 147 shipped cards; `adverb` is its
     sibling and is not jargon by that measurement. */
  const cards = display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}),
    display(LESSON.acts ?? []), display(LESSON.drills ?? []), [LESSON.intro ?? '']);
  const technical = cards.reduce((n, s) => n + countPhrase(s, 'adverb') + countPhrase(s, 'adverbs'), 0);
  const plain = cards.reduce((n, s) => n + countPhrase(s, 'word for how') + countPhrase(s, 'the long word'), 0);
  if (technical > plain) die(`the learner surfaces say "adverb" ${technical} times against ${plain} uses of the plain phrase; a1.16 runs 12 against 74`);
  if (!plain) die('no learner surface uses the plain phrase, so the ratio guard is guarding nothing');
}

/* THE OWNS ACT OUTWEIGHS THE PARADIGM ACT. Doctrine §B.5. */
{
  const owns = (LESSON.acts ?? []).find((a) => a.id === 'act3');
  const para = (LESSON.acts ?? []).find((a) => a.id === 'act2');
  if (!owns || !para) die('act2 or act3 is missing');
  if (owns.sections.length <= para.sections.length) {
    die(`the paradigm act has ${para.sections.length} missions and the Owns act has ${owns.sections.length}. `
      + 'Doctrine §B.5: if the paradigm outweighs the Owns, the wrong lesson was built.');
  }
}

/* NEGATION IS NOT RE-TAUGHT, SCOPED TO PRODUCTION SURFACES. */
{
  const PRODUCTION_IDS = new Set([CHAIN_SECTION_ID, PLACE_SECTION_ID, HEAR_SECTION_ID, AMMENT_SECTION_ID, IRREGULAR_SECTION_ID, ERRORS_SECTION_ID]);
  const TEACHING = ['ne goes in front', 'pas goes behind', 'wrap the verb', 'either side of the verb', 'ne wraps'];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (!PRODUCTION_IDS.has(sid)) continue;
    for (const p of TEACHING) {
      if (strings(s).some((x) => hasPhrase(x, p))) die(`${sid} teaches negation (${JSON.stringify(p)}), which is ${NEGATION_UNIT}'s`);
    }
  }
}

/* THE AUDIO BRIEF SAYS "ONE TAKE" FOR THE TWO TAKES WHOSE VALUE IS A CONTRAST.
   Invariants §10: a constraint on how something is recorded becomes invisible
   the moment the clip is delivered, so it is pinned in every layer. */
{
  const recorded = (LESSON.audio?.recorded ?? []) as { id: string; desc: string; clipIds?: string[] }[];
  for (const [id, phrases] of [
    ['rec-a2-17-chain', ['ONE TAKE', 'RECORDED APART']],
    ['rec-a2-17-amment', ['ONE TAKE', 'INDISTINGUISHABLE']],
  ] as [string, string[]][]) {
    const take = recorded.find((r) => r.id === id);
    if (!take) die(`there is no ${id} take, and the contrast is the lesson`);
    for (const p of phrases) if (!take.desc.toUpperCase().includes(p)) die(`${id} does not say ${JSON.stringify(p)}`);
  }
  /* AND THE CHAIN TAKE LISTS EACH PAIR ADJACENTLY, because adjacency IS the
     instruction: recorded apart, the learner compares two performances. */
  const take = recorded.find((r) => r.id === 'rec-a2-17-chain')!;
  const clips = take.clipIds ?? [];
  for (const a of ADJ_ORDER.filter((x) => x !== 'serieux')) {
    const m = AUTHORED_ITEMS.find((r) => r.id === pairId(a, 'masc'))!.fr;
    const f = AUTHORED_ITEMS.find((r) => r.id === pairId(a, 'fem'))!.fr;
    if (clips.indexOf(m) + 1 !== clips.indexOf(f)) die(`rec-a2-17-chain lists the ${a} pair non-adjacently, and adjacency IS the instruction`);
  }
}

/* EVERY A2 trapDrill WALKS ITS JOBS ONE SCREEN AT A TIME.
 *
 * A SEED-WIDE CONTRACT NO DOCUMENT IN THIS BAND MENTIONS, and both of this
 * lesson's trapDrills shipped the stacked shape until `lesson-contract.test.ts`
 * caught them. It is pinned here as well because the mutation harness found the
 * merge missing it: ungating the drill step passed this layer. */
{
  const traps = LESSON.sections.filter((s) => s.type === 'trapDrill');
  if (traps.length !== 2) die(`${traps.length} trapDrills, expected 2`);
  for (const s of traps) {
    const t = s as { id?: string; steps?: { kind: string; gate?: boolean }[]; swipe?: boolean; audio?: unknown; say?: string };
    const kinds = (t.steps ?? []).map((x) => x.kind).join('>');
    if (kinds !== 'rule>cards>audio>drill') die(`${t.id}: trapDrill steps are ${JSON.stringify(kinds)}, and A2 walks rule, cards, audio, drill`);
    if (t.swipe !== true) die(`${t.id}: a stepped trapDrill must set swipe, or the pager hands it a scrolling page`);
    if (!t.audio) die(`${t.id}: names an audio step and declares no audio`);
    if (!t.say) die(`${t.id}: has no say line, so the mission opens with no lead-in`);
    if (!(t.steps ?? []).some((x) => x.kind === 'drill' && x.gate === true)) {
      die(`${t.id}: the drill step is not gated, and a reflex the learner can swipe past is not a reflex that was tested`);
    }
  }
}

/* THE MISSION TITLE CEILING AND THE TERM-CHIP ROW BUDGET. */
{
  const over = LESSON.sections.map((s) => (s as { id?: string; title?: string }))
    .filter((s) => (s.title ?? '').length > MISSION_TITLE_MAX);
  if (over.length) die(`${over.length} mission title(s) past ${MISSION_TITLE_MAX} characters: ${over.map((s) => s.id).join(', ')}`);
  for (const s of LESSON.sections) {
    const terms = (s as { terms?: string[] }).terms ?? [];
    if (terms.length > 3) die(`${(s as { id?: string }).id} declares ${terms.length} term chips and the renderer shows 3`);
    const w = terms.reduce((n, t) => n + ((LESSON.terms ?? {})[t]?.term.length ?? 0), 0) + Math.max(0, terms.length - 1);
    if (w > TERM_CHIP_ROW_MAX) die(`${(s as { id?: string }).id}'s term chips total ${w} characters and the row budget is ${TERM_CHIP_ROW_MAX}`);
  }
}

/* THE FOUR AUTHORED HEADWORDS ARE BARE, UNGENDERED WORDS, AND NONE IS AN ADVERB. */
{
  const words = AUTHORED_ITEMS.filter((r) => r.kind === 'word');
  if (words.length !== EXPECTED_AUTHORED_HEADWORDS) die(`${words.length} authored headwords, expected ${EXPECTED_AUTHORED_HEADWORDS}`);
  for (const row of words) {
    if (!AUTHORED_HEADWORDS[row.fr]) die(`${row.id} authors ${JSON.stringify(row.fr)}, which is not in AUTHORED_HEADWORDS with a reason`);
    if ((row as { gender?: string }).gender) die(`${row.id} carries a gender; it would join a1.03's ending population`);
    if (/\s/.test(row.fr)) die(`${row.id} is a headword with a space in it`);
    if (/ment$/i.test(row.fr)) die(`${row.id} authors ${JSON.stringify(row.fr)}, and ${THEME} already holds 120 of those. Import it.`);
  }
}

/* THE NASALS, ON EVERY ROW THAT REACHES A SCREEN. */
{
  const rows: [string, string][] = [
    ...ADVERBES.map((r) => [r.fr, r.respell ?? ''] as [string, string]),
    ...CARRIED.map((r) => [r.fr, r.respell ?? ''] as [string, string]),
  ];
  let seen = 0; let missed = 0;
  for (const [frText, respell] of rows) {
    for (let i = 0; i < respell.length; i += 1) {
      if (respell[i] !== 'ⁿ') continue;
      const broken = respell.slice(0, i) + 'n' + respell.slice(i + 1);
      if (hasPlainNasalFor(frText, broken)) seen += 1; else missed += 1;
    }
    if (hasPlainNasalFor(frText, respell)) die(`${JSON.stringify(frText)} ${JSON.stringify(respell)} is flagged`);
  }
  if (seen + missed !== EXPECTED_SUPERSCRIPTS) die(`${seen + missed} superscripts, expected ${EXPECTED_SUPERSCRIPTS}`);
  if (seen !== EXPECTED_SEEN_NASALS) die(`${seen} seen, expected ${EXPECTED_SEEN_NASALS}`);
  if (missed !== EXPECTED_BLIND_NASALS) die(`${missed} blind, expected ${EXPECTED_BLIND_NASALS}`);
  /* AND THE THREE ROWS THE REPAIRS WERE READ OFF STILL HOLD THEM, in the carry
     rather than in a comment. */
  for (const e of TWO_WAYS_EVIDENCE) {
    const rep = ALL_REPAIRS.find((r) => r.id === e.headword);
    if (!rep) die(`${e.headword} is in TWO_WAYS_EVIDENCE and is not repaired`);
    if (!e.published.includes(rep.to)) die(`${e.headword} is repaired to ${JSON.stringify(rep.to)} because ${e.sentence} publishes it, and ${e.sentence} holds ${JSON.stringify(e.published)}`);
    const sentenceNow = CARRIED.find((r) => r.id === e.sentence);
    if (sentenceNow && !String(sentenceNow.respell ?? '').includes(rep.to)) {
      die(`${e.sentence} is in the carry and no longer holds ${JSON.stringify(rep.to)}`);
    }
  }
}

/* THE QUIZ. */
{
  const fmt: Record<string, number> = {};
  for (const q of qs) fmt[q.format ?? 'mcq'] = (fmt[q.format ?? 'mcq'] ?? 0) + 1;
  if ((fmt.mcq ?? 0) * 2 > qs.length) die(`${fmt.mcq} of ${qs.length} are mcq and at most half may be`);
  const sectionIds = LESSON.sections.map((s) => (s as { id: string }).id);
  for (const [i, q] of qs.entries()) {
    if (!q.why) die(`question ${i + 1} has no why`);
    if (!q.ref || !sectionIds.includes(q.ref)) die(`question ${i + 1} has no valid ref`);
    if ((q.format === 'typeIn' || q.format === 'errorSpot') && !matchesAccept(q.answer ?? '', q.accept ?? [])) {
      die(`question ${i + 1} does not accept the answer it displays`);
    }
    if (q.format === 'errorSpot' && !q.prompt) die(`question ${i + 1} is an errorSpot with no prompt`);
  }
  const closed = qs.filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct as number, (slots.get(q.correct as number) ?? 0) + 1);
  for (const [slot, n] of slots) {
    if (n / closed.length > 0.4) die(`option slot ${slot} holds ${n} of ${closed.length} closed questions and the cap is 40%`);
  }
}

/* THE DICTÉE. */
if (ADVERBES_DICTEE_IDS.length !== EXPECTED_DICTEE) die(`${ADVERBES_DICTEE_IDS.length} dictée targets, expected ${EXPECTED_DICTEE}`);
{
  const frOf = (id: string) => ADVERBES.find((r) => r.id === id)?.fr ?? CARRIED.find((r) => r.id === id)?.fr ?? '';
  for (const id of ADVERBES_DICTEE_IDS) {
    const text = frOf(id);
    if (!text) die(`${id} is a dictée target and is in neither the authored nor the carried set`);
    if (dicteeMode(text) !== 'letters') die(`${id} ${JSON.stringify(text)} spells in WORD mode and tests nothing`);
    if (/[œŒ]/u.test(text)) die(`${id} holds U+0153, which the letter bank and the target both drop`);
  }
  for (const text of DICTEE_WORD_MODE_ROWS) {
    if (dicteeMode(text) === 'letters') die(`${JSON.stringify(text)} is recorded as too long and dicteeMode puts it in LETTERS`);
  }
  /* THE TWO SPELLINGS ARE BOTH DICTÉE ROWS, AND THEY ARE BARE WORDS. */
  for (const x of AMMENT) {
    const id = IMPORTED_IDS.find((i) => IMPORTED_BY_ID.get(i)?.fr === x.adverb);
    if (!id || !ADVERBES_DICTEE_IDS.includes(id)) die(`${x.adverb} is not a dictée target, and the dictée is the only surface that can test a spelling the sound cannot give`);
  }
  const femInDictee = ADJ_ORDER.filter((a) => ADVERBES_DICTEE_IDS.includes(chainId(a, 'fem')));
  if (femInDictee.length < 2) die(`only ${femInDictee.length} woman form(s) are dictée targets, and it is the step the lesson is about`);
}

/* EVERY ROLE-PLAY TURN OFFERS AT LEAST TWO WAYS TO ANSWER, AND A userEn. */
{
  const scen = LESSON.sections.find((s) => s.type === 'scenario') as { turns?: { alts?: unknown[]; userEn?: string }[] } | undefined;
  if (!scen?.turns?.length) die('the lesson has no scenario turns');
  const thin = scen.turns.map((t, i) => ((t.alts?.length ?? 0) >= 2 ? null : `turn ${i}`)).filter(Boolean);
  if (thin.length) die(`${thin.length} role-play turn(s) offer fewer than two alternatives: ${thin.join(', ')}`);
  const untranslated = scen.turns.map((t, i) => (t.userEn?.trim() ? null : `turn ${i}`)).filter(Boolean);
  if (untranslated.length) die(`${untranslated.length} role-play turn(s) have no userEn: ${untranslated.join(', ')}`);
}

/* EVERY UNIT THIS LESSON CITES IS NAMED ON A LEARNER SURFACE. */
for (const u of CITED_UNITS) {
  if (!production.some((s) => hasPhrase(s ?? '', u))) die(`${u} is in CITED_UNITS and is named on no learner surface`);
}
if (AGREEMENT_UNIT !== 'a2.03' || PASSE_UNIT !== 'a2.05' || COMPARATIVE_UNIT !== 'a2.08' || NEGATION_UNIT !== 'a1.18') {
  die('one of the four cited unit-id constants has drifted');
}

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID) as (Unit & { lessonIds?: string[]; seq?: string | number; sub?: string; canDo?: string }) | undefined;
if (!unit) die(`unit ${UNIT_ID} is not in the seed, so its lesson cannot be attached`);
if (unit.title !== UNIT.title) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT.sub) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT.canDo) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}`);

/* ── Write ───────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing) {
  if (existing.version > LESSON.version) {
    die(`the seed carries v${existing.version} and this source is v${LESSON.version}. Move the LESSON's own version counter forward (not seed.version).`);
  }
  console.warn(
    `\n! seed.json already carries ${LESSON.id}`
    + `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items`
    + `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
    + '\n  Overwriting with the authored copy.\n',
  );
}

const itemsById = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carriedNew = 0;
/** The imported rows FIRST, so an authored id could never be shadowed by one. */
for (const it of CARRIED) {
  if (!itemsById.has(it.id)) carriedNew += 1;
  itemsById.set(it.id, it);
}
for (const it of AUTHORED_ITEMS) {
  if (itemsById.has(it.id)) updatedItems += 1; else added += 1;
  itemsById.set(it.id, it);
}

/** EVERY RELEASED ROW CAN BE SERVED AS THE DECK THAT RELEASES IT EXPECTS. */
{
  const short = LESSON.itemIds.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = ADVERBES_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = ADVERBES_DICTEE_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...MINE].map((id) => itemsById.get(id)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`row(s) in this lesson carrying a gender: ${gendered.map((r) => r!.id).join(', ')}`);
  /* NO DUPLICATE fr INSIDE THE THEME, computed the way flashhub-coverage does:
     article stripped, per theme. THIS IS THE CHECK THAT DECIDED THE THEME:
     `lentement` already has a card in `adverbes-essentiels`, so this build
     IMPORTS it rather than authoring a copy, and all 24 authored strings were
     measured against the theme's 325 before they were written. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = [...itemsById.values()].filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  if (dupes.length) die(`${dupes.length} duplicate fr inside ${THEME}: ${dupes.slice(0, 5).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; ')}`);
}

const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

const out: Seed = {
  ...seed,
  items: [...itemsById.values()],
  lessons: [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON],
  units: seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u)),
};

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
  const introduced = READ_ONLY_ROWS.map((r) => r.id)
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
  + `\n    ${Object.keys(AUTHORED_HEADWORDS).length} ADJECTIVES authored (${Object.keys(AUTHORED_HEADWORDS).join(', ')}) and ZERO adverbs`
  + `\n    ${ADJ_ORDER.map((a) => chainOf(a).join(' > ')).join(' · ')}`
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${SOURCE_THEMES.length} themes: ${SOURCE_THEMES.join(', ')}`
  + `\n    ${ALL_REPAIRS.length} repaired (${ALL_REPAIRS.filter((r) => r.blind).length} of them carrying a nasal the checker cannot see, ${ALL_REPAIRS.filter((r) => r.house).length} a house convention)`
  + `\n    ${RESPELL_ADDITIONS.length} given a respelling they never had, ${DRILL_ADDITIONS.length} given drills`
  + `\n  ${READ_ONLY_ROWS.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  dictée: ${ADVERBES_DICTEE_IDS.length} targets, all LETTERS; ${DICTEE_WORD_MODE_ROWS.length} rows too long and named on the grid`,
);

if (DRY_RUN) {
  console.log('\n  DRY RUN: every guard passed, seed.json not written.\n');
} else {
  /* CANONICAL FORMATTING. `JSON.stringify(x, null, 2)` with a trailing newline is
     the shape every other merge writes, and a whole-file rewrite in any other
     shape produces a diff nobody can read. */
  writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
  console.log(`\n  wrote ${SEED}`);
  console.log(`  seed now: ${out.items.length} items, ${out.lessons.length} lessons, ${out.units.length} units, version ${out.version} (unchanged)\n`);
  console.log('  NEXT: run the suite, then pnpm content:parity before any publish.\n');
}
console.log(`  itemIds resolved: ${ADVERBES_ITEM_IDS.length}\n`);
