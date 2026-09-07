/* Merges a2.21.l1 « Le passé composé avec être » into
 * ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-passe-compose-etre-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-passe-compose-etre-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * NEVER `git checkout seed.json` to undo anything. It discards other authors'
 * uncommitted lessons. Re-run this script.
 *
 * ── WHY THE CARRY EXISTS, AND IT IS NOT DECORATIVE HERE ───────────────────
 *
 * NINE OF THE TWENTY-TWO IMPORTS ARE ABSENT FROM THE SEED: `monter`, `rester`,
 * `tomber`, `retourner`, `passer`, `devenir`, `revenir`, `repartir` and
 * `sortir la poubelle`. Every one of them names something a screen in this
 * lesson draws, and three of them are the whole content of the generalisation
 * mission. Without the carry those cards render blank.
 *
 * ── THE TWO TRANSFORMS ────────────────────────────────────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * repairs two respellings on rows it does not own:
 * `fr.a1.transports-quotidiens.044` « monter » [mohn-TAY] to [mohⁿ-TAY], and
 * `fr.sons.verbes-essentiels.044` « tomber » [tohn-BAY] to [tohⁿ-BAY]. Carrying
 * the manifest verbatim would ship the flagged values onto the up-and-down
 * family's own cards. No respelling is SUPPLIED and no drills are added; both
 * lists are asserted empty rather than omitted.
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
 * by the merge; a2.05 found four of its own and a2.20 found four more, all in
 * the merge. The reason it matters is procedural: the merge is the layer that
 * runs when somebody re-merges without re-applying. Every guard the batch runs
 * on the content runs here too, and the four holes a2.20 found are closed here
 * by construction:
 *
 *   1  every import must BE in the manifest, or the carry silently drops it and
 *      the manifest's gender and respelling refusals never ran on it;
 *   2  a pair guard is not satisfied by `wrong === right`;
 *   3  the scene guard checks the FRENCH THE SCENE SPEAKS, not every string;
 *   4  every unit id in a guard is a LITERAL, never a constant.
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
import { matchesAccept, fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import {
  A103_SEED_POPULATION, A201_REFRAME, A203_REFRAME, A205_REFRAME, A215_REFRAME, A220_REFRAME,
  ABSENT_FROM_SEED, AGREEMENT_RULE, AUDIBLE, AUTHORED_IDS as AUTHORED_ID_LIST,
  BLIND_NASALS, BUILT_FORMS, CELL_IDS, CONTRAST_PAIRS, DICTEE_TOO_LONG,
  ETRE_ROWS, ETRE_VERBS, EXPECTED_ACTS, EXPECTED_AUDIBLE_F, EXPECTED_AUTHORED,
  EXPECTED_DRILLS, EXPECTED_FALSE_POSITIVES_FOUND, EXPECTED_IMPORTED,
  EXPECTED_NASALS_MISSED, EXPECTED_ONE_SOUND_VERBS, EXPECTED_QUESTIONS,
  EXPECTED_REPAIRS, EXPECTED_SECTIONS, EXPECTED_TERMS, EXPECTED_TRAP_DRILLS,
  EXPECTED_TRIGGERS, EXPECTED_VERBS, FALSE_POSITIVES, FAMILIES, FAMILY_SIZES,
  HINT_MAX, IMPORTED, IMPORTED_IDS, MNEMONIC, NEGATION_RULE, NO_EAR_QUESTION,
  OWNS_SECTIONS, PARADIGM_EVIDENCE, PARTICIPLE_DECISION, PATTERN_CLAIM, READ_NOT_IMPORTED,
  REFLEXIVE_MARKERS, REFLEXIVE_VERBS, REFRAME, REFRAME_COUNT, REPAIRS,
  RESPELL_ADDITIONS, SCENE_ERROR, SHEET_CELL_MAX, SHEET_COLS_MAX, SHEET_ID,
  SHEET_TITLE_MAX, THEME, TITLE_MAX, TRANSITIVE, TRANSITIVE_DECISION,
  TRANSITIVE_PAIRS, UNIT, WHICH_VERBS_SECTIONS, WRONG, reduceNegative, verbsIn,
} from './data/passe-compose-etre-corpus.ts';
import { ETRE_TERMS, TERM_ROWS, TERM_ROW_MAX, rowWidth } from './data/passe-compose-etre-terms.ts';
import {
  AUDIBLE_SECTION_ID, BOOKEND_SECTION_ID, CONTRAST_SECTION_ID, ETRE_ACTS,
  ETRE_DICTEE_IDS, ETRE_DRILLS, ETRE_ERROR_TRIGGERS, ETRE_ITEM_IDS,
  ETRE_LESSON, ETRE_SCENE_BEATS, ETRE_SHEETS, ETRE_SPEAK_IDS, ETRE_TRANCHES,
  FOURFORMS_SECTION_ID, OBJECT_SECTION_ID, OWNS_SECTION_IDS,
  PATTERN_SECTION_ID, PRODUCTION_SECTIONS, QUIZ_SECTION_ID,
  WHICH_VERBS_SECTION_IDS, WRONG_FORM_SECTIONS,
} from './data/passe-compose-etre-lesson.ts';
import { ETRE_IMPORT_ROWS, MEASURED, TRANSITIVE_MEASURED } from './data/passe-compose-etre-rows.gen.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = ETRE_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = ETRE_ROWS.map((r) => {
  const { role, verb, cell, why, ...rest } = r as Record<string, unknown> & {
    role: string; verb?: string; cell?: number; why: string;
  };
  void role; void verb; void cell; void why;
  return { ...rest, kind: 'sentence', level: 'a2', theme: THEME, version: 1 } as unknown as Item;
});
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
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k) && !MACHINE_KEYS.has(k)) prose(x, out);
  }
  return out;
}
function hasPhrase(hay: string, needle: string): boolean {
  const isWordL = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const isWordR = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWordL(i === 0 ? '' : h[i - 1]!) && !isWordR(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}
/** A LEARNER SURFACE NAMES A LESSON BY ITS LABEL, NOT BY ITS ID.
 *
 *  Resolved through the shipped `unit.seq`, never by slicing the id: 31 of 35
 *  A2 units disagree with their own id number. Case-insensitive, and it does
 *  NOT also accept the raw id: a guard taking either would pass on exactly the
 *  thing this change removed. */
const namesUnit = (hay: string, id: string): boolean => namesUnitLabel(hay, id);
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

const JARGON = [
  'participle', 'auxiliary', 'agreement', 'agrees with', 'periphrastic',
  'intransitive', 'transitive', 'suppletive', 'compound tense',
  'present perfect', 'preterite', 'infinitive', 'infinitival', 'inflection',
  'inflected', 'paradigm', 'morpheme', 'morphology', 'lexeme', 'lexicalised',
  'phoneme', 'phonological', 'orthography', 'orthographic', 'nasal vowel',
  'complement', 'constituent', 'predicate', 'copula', 'invariable', 'clitic',
  'direct object', 'exponent', 'termination', 'conjugation class',
  'first person', 'second person', 'third person', 'gender and number',
];

const AI_TELLS = [
  'falls fast', 'trip up', 'half of everything', 'this is the big one',
  'listen to the trap', 'get those two right', 'this is the part that pays',
  'here is the catch',
];

/** `drills` is an ENUM array and Postgres orders it by DECLARATION order. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b)) as Item['drills'];

/* ── The carried rows, with this build's two transforms applied ───────────── */

const MANIFEST_ROWS: Item[] = Object.values(ETRE_IMPORT_ROWS);
const REPAIR_BY_ID = new Map(REPAIRS.map((r) => [r.id, r] as const));
const CARRY_IDS = new Set(IMPORTED_IDS);

/** a2.20 §5.1, AND IT IS THE MERGE'S HALF OF a2.04 §0. The carry is
 *  `MANIFEST_ROWS.filter(id in CARRY_IDS)`, so an import that is NOT in the
 *  manifest is silently not carried and no guard here fires. The manifest is the
 *  only layer that refuses a gendered row, so an id that never reaches it never
 *  meets that refusal. */
{
  const known = new Set(MANIFEST_ROWS.map((r) => r.id));
  const unknown = IMPORTED_IDS.filter((id) => !known.has(id));
  if (unknown.length) {
    die(`${unknown.length} import(s) are not in the manifest, so they would not be carried and the manifest's gender and respelling refusals never ran on them: ${unknown.join(', ')}.\n`
      + '  Re-run scripts/_a221_manifest.ts.');
  }
}

const CARRIED: Item[] = MANIFEST_ROWS.filter((r) => CARRY_IDS.has(r.id)).map((row) => {
  const rep = REPAIR_BY_ID.get(row.id);
  let respell = row.respell;
  if (rep) {
    if (respell && respell !== rep.from && respell !== rep.to) {
      die(`${row.id} is recorded with ${JSON.stringify(respell)} and this build repairs ${JSON.stringify(rep.from)} to ${JSON.stringify(rep.to)}. Read it before overwriting it.`);
    }
    respell = rep.to;
  }
  return { ...row, respell, drills: drillOrder(row.drills) };
});

/* Every transform landed, and nothing else moved. */
{
  const byIdMap = new Map(CARRIED.map((r) => [r.id, r] as const));
  if (REPAIRS.length !== EXPECTED_REPAIRS) die(`this build repairs ${EXPECTED_REPAIRS} and REPAIRS holds ${REPAIRS.length}`);
  if (RESPELL_ADDITIONS.length !== 0) die('this build supplies a respelling and RESPELL_ADDITIONS was asserted empty.');
  for (const rp of REPAIRS) {
    const now = String(byIdMap.get(rp.id)?.respell ?? '');
    if (now !== rp.to) die(`the carry left ${rp.id} at ${JSON.stringify(now)} and the repaired value is ${JSON.stringify(rp.to)}`);
    if (hasPlainNasalFor(rp.fr, rp.to)) die(`${rp.id} repaired value ${JSON.stringify(rp.to)} is still flagged`);
    if (!hasPlainNasalFor(rp.fr, rp.from)) die(`${rp.id} is filed as VISIBLE and the checker does not flag ${JSON.stringify(rp.from)}`);
    if ((rp.half !== rp.to) !== (rp.blind || rp.house)) die(`${rp.id}: a2.17 §14.1's two reasons have been conflated`);
    if (rp.blind) die(`${rp.id} is filed as blind and this build measured all five candidates as VISIBLE.`);
  }
  const untouched = CARRIED.filter((r) => !REPAIR_BY_ID.has(r.id));
  const changed = untouched.filter((r) => {
    const src = MANIFEST_ROWS.find((x) => x.id === r.id)!;
    return JSON.stringify(r) !== JSON.stringify({ ...src, drills: drillOrder(src.drills) });
  });
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not transform: ${changed.map((r) => r.id).join(', ')}`);
}

/* ── The seed ────────────────────────────────────────────────────────────── */

type Seed = {
  version: number;
  items: Item[];
  lessons: Lesson[];
  units: Unit[];
  [k: string]: unknown;
};

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
console.log(`\n  a2.21 « ${UNIT.sub} » merge${DRY_RUN ? '  (dry run)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/** THE CUT, MEASURED RATHER THAN PREDICTED. a2.05 §6, and a2.20 mispredicted its
 *  own by four in the other direction. Both directions are reported. */
{
  const inSeed = new Set(seed.items.map((i) => i.id));
  const absent = IMPORTED_IDS.filter((id) => !inSeed.has(id));
  const surpriseMissing = absent.filter((id) => !ABSENT_FROM_SEED.includes(id));
  const surprisePresent = ABSENT_FROM_SEED.filter((id) => inSeed.has(id));
  if (surpriseMissing.length) console.log(`  !! ${surpriseMissing.length} import(s) are absent from the cut and the corpus file did not predict it: ${surpriseMissing.join(', ')}`);
  if (surprisePresent.length) console.log(`  !! ${surprisePresent.length} import(s) the corpus file recorded as absent ARE in the cut: ${surprisePresent.join(', ')}`);
  console.log(`  the cut       ${absent.length} of ${IMPORTED_IDS.length} imports are missing from the seed and are carried`);
}

const MUST_NOT_DISTURB = seed.lessons.map((l) => l.id).filter((id) => id !== LESSON.id).sort();
const UNITS_BEFORE = seed.units.length;
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !AUTHORED_IDS.has(i.id) && !CARRY_IDS.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/* ══════════════════════════════════════════════════════════════════════════
 *  EVERY CONTENT GUARD THE BATCH RUNS, RUN AGAIN HERE
 * ═══════════════════════════════════════════════════════════════════════ */

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);
const sectionIds = LESSON.sections.map((s) => (s as { id: string }).id);

const learnerAll = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}), ...strings(LESSON.acts ?? []),
  ...strings(LESSON.drills ?? []),
].join('\n');

/* ── 1. The split. ────────────────────────────────────────────────────────*/
if (PARTICIPLE_DECISION.isCorpusItem) die('PARTICIPLE_DECISION says a past form IS a corpus item.');
if (PARTICIPLE_DECISION.authoredHere !== 0) die('PARTICIPLE_DECISION.authoredHere is not zero.');
if (MEASURED.agreedCellsAsHeadwords !== 0) die(`the manifest measured ${MEASURED.agreedCellsAsHeadwords} agreed cells existing as headwords.`);
if (MEASURED.a220BlockRows !== 43) die(`a2.20's block holds ${MEASURED.a220BlockRows} rows and that lesson applied 43.`);
if (MEASURED.a205BlockRows !== 36) die(`a2.05's block holds ${MEASURED.a205BlockRows} rows and that lesson applied 36.`);
for (const r of ETRE_ROWS) {
  if (!/\s/.test(r.fr)) die(`${r.id} authors « ${r.fr} », which is a BARE WORD whatever its kind says.`);
  if (!r.respell) die(`${r.id} has no respelling.`);
}
if (ETRE_ROWS.length !== EXPECTED_AUTHORED) die(`${ETRE_ROWS.length} rows authored and EXPECTED_AUTHORED is ${EXPECTED_AUTHORED}.`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imports and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
if (new Set(ETRE_ROWS.map((r) => r.fr)).size !== ETRE_ROWS.length) die('two authored rows share an `fr`.');

/* ── 2. The fifteen and the four families. ────────────────────────────────*/
if (ETRE_VERBS.length !== EXPECTED_VERBS) die(`ETRE_VERBS holds ${ETRE_VERBS.length} and EXPECTED_VERBS is ${EXPECTED_VERBS}.`);
for (const f of FAMILIES) {
  if (verbsIn(f.key).length !== FAMILY_SIZES[f.key]) die(`the ${f.key} family holds ${verbsIn(f.key).length} and FAMILY_SIZES says ${FAMILY_SIZES[f.key]}.`);
}
if (ETRE_VERBS.filter((v) => v.family !== 'still').length !== 12) die('the lesson claims twelve of the fifteen move and the families do not say so.');
{
  const patternText = strings(byId(PATTERN_SECTION_ID)).join('\n');
  const unnamed = ETRE_VERBS.filter((v) => !hasPhrase(patternText, v.verb)).map((v) => v.verb);
  if (unnamed.length) die(`the pattern table does not name ${unnamed.join(', ')}.`);
  const formless = ETRE_VERBS.filter((v) => !hasPhrase(patternText, v.past)).map((v) => v.verb);
  if (formless.length) die(`the pattern table names ${formless.join(', ')} without their past forms.`);
}

/* ── 3. The four forms, on one screen, form by form. ──────────────────────*/
{
  const fourSec = byId(FOURFORMS_SECTION_ID);
  const aller = ETRE_VERBS.find((v) => v.verb === 'aller')!;
  /* THE CARDS, NOT THE SECTION TEXT. Mutations 1, 7 and 8, one hole with three
     faces: a `check.why` mentioning a form satisfied the assertion that the form
     is on a CARD, and « Nothing at all » is one of this screen's own wrong
     answers. a2.20 §5.3 in a new place. */
  const fourCards = ((fourSec as unknown as { groups?: { items?: { fr?: string }[] }[] })?.groups ?? [])
    .flatMap((g) => (g.items ?? []).map((i) => i.fr ?? ''));
  if (!fourCards.length) die(`${FOURFORMS_SECTION_ID} draws no cards at all.`);
  for (const cell of aller.cells) {
    if (!fourCards.some((f) => hasPhrase(f, cell))) die(`no CARD on ${FOURFORMS_SECTION_ID} shows « ${cell} ».`);
  }
  const fourTaught = [
    (fourSec as unknown as { say?: string })?.say ?? '',
    ...((fourSec as unknown as { groups?: { check?: { why?: string } }[] })?.groups ?? []).map((g) => g.check?.why ?? ''),
  ].join('\n');
  if (!/one sound|identical|completely identical/i.test(fourTaught)) {
    die(`${FOURFORMS_SECTION_ID} shows the four spellings and never TEACHES that they are one sound.`);
  }
  const tails = CELL_IDS.map((id) => ETRE_ROWS.find((x) => x.id === id)!.respell.split(' ').pop()!);
  if (new Set(tails).size !== 1) die(`the four cells respell their second word as ${tails.join(', ')}.`);
}

/* ── 4. The bookend, as a LITERAL. ────────────────────────────────────────*/
{
  const LITERAL_A201 = 'Four of the six forms sound the same, so the pronoun carries the person.';
  if (A201_REFRAME !== LITERAL_A201) die(`A201_REFRAME is « ${A201_REFRAME} » and a2.01 shipped « ${LITERAL_A201} ».`);
  const bookendText = strings(byId(BOOKEND_SECTION_ID)).join('\n');
  if (!bookendText.includes(LITERAL_A201)) die(`${BOOKEND_SECTION_ID} does not carry a2.01's reframe verbatim. A paraphrase must go red.`);
  if (!namesUnit(bookendText, 'a2.01')) die(`${BOOKEND_SECTION_ID} quotes a2.01's reframe and does not name a2.01.`);
  if (!/seventeen/i.test(bookendText)) die(`${BOOKEND_SECTION_ID} does not say how far apart the two lessons are.`);
}

/* ── 5. The other three quotes, as LITERALS. ──────────────────────────────*/
{
  const LITERAL_A203 = 'The plain form tells you the other three.';
  const LITERAL_A205 = 'One verb, two words, and the small ones go in between.';
  const LITERAL_A219 = 'Wrap the verb that changed, not the one carrying the meaning.';
  if (A203_REFRAME !== LITERAL_A203) die(`A203_REFRAME is « ${A203_REFRAME} » and a2.03 shipped « ${LITERAL_A203} ».`);
  if (A205_REFRAME !== LITERAL_A205) die(`A205_REFRAME is « ${A205_REFRAME} » and a2.05 shipped « ${LITERAL_A205} ».`);
  if (NEGATION_RULE !== LITERAL_A219) die(`NEGATION_RULE is « ${NEGATION_RULE} » and a2.19 shipped « ${LITERAL_A219} ».`);
  const LITERAL_A215 = 'Cover the front of the verb. Build what is left.';
  const LITERAL_A220 = 'Do not build these. Reach for the group it is in.';
  if (A215_REFRAME !== LITERAL_A215) die(`A215_REFRAME is « ${A215_REFRAME} » and a2.15 shipped « ${LITERAL_A215} ».`);
  if (A220_REFRAME !== LITERAL_A220) die(`A220_REFRAME is « ${A220_REFRAME} » and a2.20 shipped « ${LITERAL_A220} ».`);
  for (const lit of [LITERAL_A215, LITERAL_A220]) {
    if (!learnerAll.includes(lit)) die(`« ${lit} » appears nowhere and this lesson quotes it.`);
  }
  for (const [what, lit] of [['a2.03', LITERAL_A203], ['a2.05', LITERAL_A205], ['a2.19', LITERAL_A219]] as [string, string][]) {
    if (!learnerAll.includes(lit)) die(`${what}'s line « ${lit} » appears nowhere.`);
  }
  for (const id of ['a2.01', 'a2.03', 'a2.05', 'a2.11', 'a2.15', 'a2.19', 'a2.20', 'a2.22', 'a2.23']) {
    if (!namesUnit(learnerAll, id)) die(`${id} is never named on a learner surface and this lesson stands on it or hands to it.`);
  }
}

/* ── 6. The contrast pairs, one word apart. ───────────────────────────────*/
{
  const contrastText = strings(byId(CONTRAST_SECTION_ID)).join('\n');
  for (const [av, et] of CONTRAST_PAIRS) {
    const a = ETRE_ROWS.find((r) => r.id === av)!;
    const e = ETRE_ROWS.find((r) => r.id === et)!;
    if (a.fr === e.fr) die(`the contrast pair ${av}/${et} is one sentence twice. A pair of one thing is not a pair.`);
    if (!contrastText.includes(a.fr) || !contrastText.includes(e.fr)) {
      die(`the contrast pair ${av}/${et} is not both on ${CONTRAST_SECTION_ID}.`);
    }
    const aw = a.fr.split(/\s+/); const ew = e.fr.split(/\s+/);
    if (aw.filter((w, i) => w !== ew[i]).length > 2) die(`the contrast pair ${av}/${et} differs in more than two words.`);
  }
}

/* ── 7. No ending after avoir outside the sections that teach the error. ──*/
const AGREED_AFTER_AVOIR = new RegExp(
  '(?<![\\p{L}\\p{N}-])'
  + "(j'|n'|qu'il |qu'elle |il |elle |on |ils |elles |nous |vous |tu |je )"
  + '(ai|as|a|avons|avez|ont) +'
  + '(pas +|bien +|mal +|déjà +|encore +|toujours +|jamais +|beaucoup +|trop +|tout +)?'
  + '[\\p{L}]+(ée|ées|és)(?![\\p{L}\\p{N}\'’-])',
  'iu',
);
for (const s of ['Elle a mangée au marché.', "J'ai mangée.", 'Ils ont allés au marché.', "Elle n'a pas mangée."]) {
  if (!AGREED_AFTER_AVOIR.test(s)) die(`the avoir-agreement guard does not fire on « ${s} ».`);
}
for (const s of ['Elle a mangé au marché.', 'Elle est allée au marché.', 'You have already learned the ending, and it goes on after être.', 'Elles sont allées au bureau.']) {
  if (AGREED_AFTER_AVOIR.test(s)) die(`the avoir-agreement guard fires on « ${s} », which is correct.`);
}
for (const sec of LESSON.sections) {
  const id = (sec as { id: string }).id;
  if ((WRONG_FORM_SECTIONS as readonly string[]).includes(id)) continue;
  for (const s of strings(sec)) if (AGREED_AFTER_AVOIR.test(s)) die(`${id} carries an ending after avoir: « ${s} ».`);
}
for (const s of [...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}), LESSON.intro ?? '', ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? [])]) {
  if (AGREED_AFTER_AVOIR.test(s)) die(`an ending appears after avoir outside the sections: « ${s} ».`);
}

/* ── 8. The transitive decision, enforced. ────────────────────────────────*/
if (TRANSITIVE_DECISION.taught) die('TRANSITIVE_DECISION says the split is taught.');
if (!TRANSITIVE_DECISION.receptiveOnly) die('TRANSITIVE_DECISION is not receptive-only.');
for (const t of TRANSITIVE) {
  const m = TRANSITIVE_MEASURED[t.verb];
  if (!m) die(`${t.verb} is in TRANSITIVE and the manifest did not measure it.`);
  if (m.avoir !== t.avoir || m.etre !== t.etre) die(`${t.verb}: corpus says ${t.avoir}/${t.etre}, manifest measured ${m.avoir}/${m.etre}.`);
}
if (TRANSITIVE.filter((t) => t.avoir === 0).length !== TRANSITIVE_DECISION.zeroEvidence.length) {
  die('the number of transitive candidates with zero evidence has moved.');
}
{
  const objectText = strings(byId(OBJECT_SECTION_ID)).join('\n');
  for (const v of TRANSITIVE_DECISION.verbsShown) if (!hasPhrase(objectText, v)) die(`${OBJECT_SECTION_ID} does not name ${v}.`);
  for (const [et, av] of TRANSITIVE_PAIRS) {
    const e = ETRE_ROWS.find((r) => r.id === et)!;
    const a = ETRE_ROWS.find((r) => r.id === av)!;
    if (e.fr === a.fr) die(`the transitive pair ${et}/${av} is one sentence twice.`);
    if (!objectText.includes(e.fr) || !objectText.includes(a.fr)) die(`the transitive pair ${et}/${av} is not both on ${OBJECT_SECTION_ID}.`);
    for (const r of [e, a]) if (r.drills.includes('dictation')) die(`${r.id} is a transitive row and carries a dictation drill.`);
  }
  const avoirHalves = TRANSITIVE_PAIRS.map(([, av]) => ETRE_ROWS.find((r) => r.id === av)!.fr);
  for (const id of PRODUCTION_SECTIONS) {
    const text = strings(byId(id)).join('\n');
    for (const f of avoirHalves) if (text.includes(f)) die(`${id} is a production surface and it carries « ${f} ».`);
  }
  if (!hasPhrase(objectText, 'descendre')) die(`${OBJECT_SECTION_ID} does not name descendre.`);
  if (!namesUnit(objectText, 'a2.11')) die(`${OBJECT_SECTION_ID} owns descendre's split and does not name a2.11.`);
}

/* ── 9. No reflexive, anywhere. ───────────────────────────────────────────*/
const hasReflexive = (s: string): boolean =>
  REFLEXIVE_VERBS.some((v) => hasPhrase(s, v))
  || REFLEXIVE_MARKERS.some((m) => s.toLowerCase().includes(m.toLowerCase()));
for (const s of ['Je me suis levé tôt.', "Elle s'est habillée.", 'Nous nous sommes couchés tard.']) {
  if (!hasReflexive(s)) die(`the reflexive guard does not fire on « ${s} ».`);
}
for (const s of ['Je suis allé au bureau.', 'Elle est restée à la maison.', 'Nous sommes partis tôt.']) {
  if (hasReflexive(s)) die(`the reflexive guard fires on « ${s} », which is this lesson's own French.`);
}
for (const s of [...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}), LESSON.intro ?? '', ...display(LESSON.drills ?? [])]) {
  if (hasReflexive(s)) die(`a reflexive verb reaches a learner surface: « ${s} ».`);
}
for (const r of ETRE_ROWS) if (hasReflexive(r.fr)) die(`${r.id} authors a reflexive: « ${r.fr} ».`);

/* ── 10. The ear. a2.20 §5 gave the merge no ear walk at all. ─────────────*/
if (ETRE_VERBS.filter((v) => !v.audibleF).length !== EXPECTED_ONE_SOUND_VERBS) die('the one-sound count has moved.');
if (ETRE_VERBS.filter((v) => v.audibleF).length !== EXPECTED_AUDIBLE_F) die('the audible-feminine count has moved.');
for (const q of qs) {
  if (q.format !== 'listenChoose') continue;
  const opts = q.opts ?? [];
  for (let i = 0; i < opts.length; i += 1) {
    for (let j = i + 1; j < opts.length; j += 1) {
      for (const [x, y] of NO_EAR_QUESTION) {
        if (x !== y && opts[i]!.replace(x, y) === opts[j]) {
          die(`an ear question offers « ${opts[i]} » against « ${opts[j]} », which differ only by ${x}/${y}.`);
        }
      }
    }
  }
  if (!(q as { say?: string }).say) die('a listenChoose question has no `say`, so the card speaks the correct option aloud.');
}
{
  const ear = qs.filter((q) => q.format === 'listenChoose');
  if (ear.length !== 1) die(`the exam holds ${ear.length} ear questions and exactly one is legal here.`);
  const earOpts = (ear[0]!.opts ?? []).join('|');
  if (!earOpts.includes(AUDIBLE.masculine) || !earOpts.includes(AUDIBLE.feminine)) {
    die('the one ear question does not offer mort against morte.');
  }
  const audibleSection = strings(byId(AUDIBLE_SECTION_ID)).join('\n');
  for (const w of [AUDIBLE.masculine, AUDIBLE.feminine, 'morts', 'mortes']) {
    if (!hasPhrase(audibleSection, w)) die(`${AUDIBLE_SECTION_ID} does not name « ${w} ».`);
  }
  /* FOUND BY MUTATION 24, AND THE MERGE WAS BLIND TO IT. The whole mission is
     that mort ends on the r and morte on the t; taking the t off the feminine
     respelling leaves every other guard here green while the screen teaches the
     opposite of what it says. */
  const mSg = ETRE_ROWS.find((r) => r.verb === 'mourir' && r.cell === 0);
  const fSg = ETRE_ROWS.find((r) => r.verb === 'mourir' && r.cell === 1);
  if (!mSg || !fSg) die('the audible pair rows are not in the corpus.');
  if (!mSg!.respell.includes(AUDIBLE.respellM) || !fSg!.respell.includes(AUDIBLE.respellF)) {
    die(`the audible pair is respelled ${mSg!.respell} / ${fSg!.respell} and the claim is ${AUDIBLE.respellM} against ${AUDIBLE.respellF}.`);
  }
  if (mSg!.respell.includes(AUDIBLE.respellF)) {
    die(`the masculine « ${mSg!.respell} » carries the feminine's t, so the one pair the ear can settle is respelled as though it could not.`);
  }
}
for (const v of ETRE_VERBS) {
  const seen = new Set<string>();
  for (const cell of v.cells) {
    if (seen.has(fold(cell))) die(`${v.verb}'s cells fold together and the whole Owns is typed.`);
    seen.add(fold(cell));
  }
  const [m, f, mp, fp] = v.cells;
  for (const [a, b] of [[m, f], [m, mp], [m, fp], [f, mp], [f, fp], [mp, fp]] as [string, string][]) {
    if (normalizeFr(a) === normalizeFr(b)) die(`normalizeFr collapses ${v.verb}'s « ${a} » and « ${b} ».`);
  }
}

/* ── 11. The dictée, through the real dicteeMode. ─────────────────────────*/
if (!ETRE_DICTEE_IDS.length) die('the dictée names no rows.');
for (const id of ETRE_DICTEE_IDS) {
  const r = ETRE_ROWS.find((x) => x.id === id);
  if (!r) die(`${id} is a dictée target and is not an authored row.`);
  if (dicteeMode(r!.fr) !== 'letters') die(`${id} « ${r!.fr} » is in words mode.`);
  if (r!.role === 'transitive') die(`${id} is a transitive row and it is in the dictée.`);
}
for (const t of DICTEE_TOO_LONG) {
  if (dicteeMode(t.fr) === 'letters') die(`DICTEE_TOO_LONG says « ${t.fr} » does not fit and dicteeMode now puts it in LETTERS.`);
}
for (const id of CELL_IDS) if (!ETRE_DICTEE_IDS.includes(id)) die(`${id} is one of the four cells and it is not in the dictée.`);

/* ── 12. The negative and the elision. ────────────────────────────────────*/
{
  const negatives = ETRE_ROWS.filter((r) => r.role === 'negative');
  if (!negatives.length) die('the lesson authors no negative.');
  for (const n of negatives) {
    const reduced = reduceNegative(n.fr);
    if (/\bne\b|n['’]|\bpas\b/i.test(reduced)) die(`reduceNegative left « ${reduced} » on ${n.id}.`);
    if (reduced === n.fr) die(`reduceNegative changed nothing on ${n.id}.`);
  }
  if (!negatives.some((r) => /\bne\s/i.test(r.fr))) die('every authored negative elides, and three of the six persons do not.');
  if (!negatives.some((r) => /n['’]/i.test(r.fr))) die('no authored negative elides, and three of the six persons do.');
}

/* ── 13. The respellings, both directions. ────────────────────────────────*/
for (const b of BLIND_NASALS) {
  const row = ETRE_ROWS.find((r) => r.id === b.id);
  if (!row) die(`${b.id} is in BLIND_NASALS and is not an authored row.`);
  if (row!.respell !== b.good) die(`${b.id} is respelled « ${row!.respell} » and BLIND_NASALS claims « ${b.good} ».`);
  if (hasPlainNasalFor(b.fr, b.good)) die(`${b.id}'s stored value is flagged and this is a BLIND entry.`);
  if (hasPlainNasalFor(b.fr, b.broken)) die(`hasPlainNasalFor now SEES « ${b.broken} ». The by-name list can be retired.`);
}
if (BLIND_NASALS.length !== EXPECTED_NASALS_MISSED) die(`BLIND_NASALS holds ${BLIND_NASALS.length} and EXPECTED_NASALS_MISSED is ${EXPECTED_NASALS_MISSED}.`);
for (const r of ETRE_ROWS) {
  if (BLIND_NASALS.some((b) => b.id === r.id)) continue;
  if (hasPlainNasalFor(r.fr, r.respell)) die(`${r.id} « ${r.respell} » is flagged by hasPlainNasalFor.`);
}
if (FALSE_POSITIVES.length !== EXPECTED_FALSE_POSITIVES_FOUND) die(`FALSE_POSITIVES holds ${FALSE_POSITIVES.length}.`);
for (const fp of FALSE_POSITIVES) {
  if (!hasPlainNasalFor(fp.fr, fp.flagged)) die(`hasPlainNasalFor no longer flags « ${fp.flagged} ». The entry can be retired.`);
  if (hasPlainNasalFor(fp.fr, fp.fixed)) die(`the repaired value « ${fp.fixed} » is still flagged.`);
  if (/ⁿ/.test(fp.fixed)) die(`« ${fp.word} » has no nasal vowel and the repair carries a superscript.`);
  /* FOUND BY MUTATION 30, AND BOTH THE BATCH AND THE MERGE WERE BLIND TO IT.
     Putting a superscript on `sommes` produces a value hasPlainNasalFor calls
     CLEAN, because its complaint about that word was a false positive in the
     first place. Every other respelling guard in both layers is phrased as
     "must not be flagged", so a wrong value the checker likes walks through all
     of them. The ROW has to be checked, not only the recorded fix. */
  const fpRows = ETRE_ROWS.filter((r) => r.fr.toLowerCase().includes(fp.word.toLowerCase()));
  if (!fpRows.length) die(`FALSE_POSITIVES names « ${fp.word} » and no authored row contains it.`);
  for (const r of fpRows) {
    if (hasPlainNasalFor(r.fr, r.respell)) die(`${r.id} carries « ${fp.word} » and is still flagged: « ${r.respell} ».`);
    if (/ⁿ/.test(r.respell.split(' ')[1] ?? '')) {
      die(`${r.id} respells « ${fp.word} » as « ${r.respell.split(' ')[1]} », with a superscript on a word that has no nasal vowel in it at all.`);
    }
  }
}

/* ── 14. No wrong form outside the sections that teach the error. ─────────*/
for (const sec of LESSON.sections) {
  const id = (sec as { id: string }).id;
  if ((WRONG_FORM_SECTIONS as readonly string[]).includes(id)) continue;
  const text = strings(sec).join('\n');
  for (const b of BUILT_FORMS) if (hasPhrase(text, b)) die(`${id} carries « ${b} », which is not French.`);
  for (const w of WRONG) if (text.includes(w.wrong)) die(`${id} carries « ${w.wrong} ».`);
}
for (const w of WRONG) {
  if (w.wrong === w.right) die(`the error « ${w.wrong} » is identical to its own correction.`);
  if (fold(w.wrong) === fold(w.right)) die(`the error « ${w.wrong} » folds to the same string as its correction.`);
}
for (const r of ETRE_ROWS) for (const w of WRONG) if (r.fr === w.wrong) die(`${r.id} authors one of the five errors.`);

/* ── 15. The scene: the FRENCH THE SCENE SPEAKS. a2.20 §5.3. ──────────────*/
{
  const bubbles = ETRE_SCENE_BEATS.filter((b) => b.kind === 'bubble');
  if (bubbles.length < 4) die(`the scene has ${bubbles.length} bubbles.`);
  for (const b of ETRE_SCENE_BEATS) {
    const f = (b as { fr?: string }).fr;
    if (typeof f === 'string' && f.includes(' !')) die(`a scene beat's fr is « ${f} » and a spaced exclamation mark loses the last word on a Pixel 6.`);
  }
  const spokenFrench = ETRE_SCENE_BEATS.flatMap((b) => {
    const out: string[] = [];
    const add = (v: unknown) => { if (typeof v === 'string') out.push(v); };
    add((b as { fr?: string }).fr);
    for (const o of ((b as { options?: { fr?: string }[] }).options ?? [])) add(o.fr);
    const br = b as { wrong?: { fr?: string }; right?: { fr?: string } };
    add(br.wrong?.fr); add(br.right?.fr);
    return out;
  }).join('\n');
  /* THE LITERAL, NOT THE CONSTANT. FOUND BY MUTATION 33: this guard read
     SCENE_ERROR, which is the same constant the scene is BUILT from, so
     repairing the French repaired both sides and the merge stayed green while
     the English gloss still named an error the scene no longer makes. a2.18 §6
     in a new place, and the batch caught it only because its copy was already a
     literal. */
  const SCENE_ERROR_LITERAL = 'J’ai sorti avec des amis.';
  if (SCENE_ERROR !== SCENE_ERROR_LITERAL) {
    die(`SCENE_ERROR is « ${SCENE_ERROR} » and the scene's failure is « ${SCENE_ERROR_LITERAL} ».`);
  }
  if (!spokenFrench.includes(SCENE_ERROR_LITERAL)) {
    die('the scene never SPEAKS the wrong sentence. A scene whose failure is only described in English is a scene that did not happen.');
  }
}

/* ── 16. The mnemonic against the pattern, as a RATIO. ────────────────────*/
{
  if (!learnerAll.includes(MNEMONIC)) die(`${MNEMONIC} appears nowhere.`);
  const patternCount = ['movement', 'move', 'moves', 'moving']
    .reduce((n, w) => n + (hasPhrase(learnerAll, w) ? countPhrase(learnerAll, w) : 0), 0);
  const crutchCount = countPhrase(learnerAll, MNEMONIC);
  if (patternCount === 0) die('the mnemonic is present and the real pattern is not.');
  /* AND THE STATEMENT ITSELF, AS A LITERAL. FOUND BY MUTATION 5: the ratio above
     counts the word « movement », which is also a TERM CHIP LABEL, so replacing
     the whole pattern with the crutch left the count non-zero and every layer
     green. The claim has to be on a screen, not a word that happens to be. */
  const LITERAL_PATTERN = 'Twelve of the fifteen move, and the other three change what is true rather than where you are.';
  if (PATTERN_CLAIM !== LITERAL_PATTERN) die(`PATTERN_CLAIM is « ${PATTERN_CLAIM} » and the pattern this lesson teaches is « ${LITERAL_PATTERN} ».`);
  if (!learnerAll.includes(LITERAL_PATTERN)) die('the pattern statement appears on no screen, and a crutch is not a pattern.');
  if (crutchCount >= patternCount) die(`${MNEMONIC} appears ${crutchCount} times against ${patternCount} for the pattern.`);
  if (!hasPhrase(learnerAll, 'passer')) die('the lesson never names passer.');
  if (!hasPhrase(learnerAll, 'rester')) die('the lesson never names rester.');
}

/* ── 17. Act weights. ─────────────────────────────────────────────────────*/
if (OWNS_SECTION_IDS.length !== OWNS_SECTIONS) die(`OWNS_SECTION_IDS holds ${OWNS_SECTION_IDS.length}.`);
if (WHICH_VERBS_SECTION_IDS.length !== WHICH_VERBS_SECTIONS) die(`WHICH_VERBS_SECTION_IDS holds ${WHICH_VERBS_SECTION_IDS.length}.`);
if (OWNS_SECTIONS <= WHICH_VERBS_SECTIONS) die('the paradigm gets more sections than the Owns.');

/* ── 18. The shape. ───────────────────────────────────────────────────────*/
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections and EXPECTED_SECTIONS is ${EXPECTED_SECTIONS}.`);
if (ETRE_ACTS.length !== EXPECTED_ACTS) die(`${ETRE_ACTS.length} acts.`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions.`);
if (Object.keys(ETRE_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(ETRE_TERMS).length} terms and EXPECTED_TERMS is ${EXPECTED_TERMS}.`);
if (ETRE_DRILLS.length !== EXPECTED_DRILLS) die(`${ETRE_DRILLS.length} drills and EXPECTED_DRILLS is ${EXPECTED_DRILLS}.`);
if (ETRE_ERROR_TRIGGERS.length !== EXPECTED_TRIGGERS) die(`${ETRE_ERROR_TRIGGERS.length} triggers.`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz section.');
if (LESSON.sections.filter((s) => s.type === 'trapDrill').length !== EXPECTED_TRAP_DRILLS) die('the trapDrill count has moved.');
{
  const claimed = ETRE_ACTS.flatMap((a) => a.sections);
  if (new Set(claimed).size !== claimed.length) die('two acts claim one section.');
  for (const id of sectionIds) if (!claimed.includes(id)) die(`${id} is in no act.`);
  for (const id of claimed) if (!sectionIds.includes(id)) die(`an act names ${id} and there is no such section.`);
  const released = ETRE_TRANCHES.flat();
  if (new Set(released).size !== released.length) die('a tranche releases an item twice.');
  for (const id of released) if (!ETRE_ITEM_IDS.includes(id)) die(`a tranche releases ${id}, which is not in itemIds.`);
  const unreleased = ETRE_ITEM_IDS.filter((id) => !released.includes(id));
  if (unreleased.length) die(`${unreleased.length} items are never released: ${unreleased.slice(0, 6).join(', ')}`);
}
for (const q of qs) {
  if (!q.why) die(`a quiz question has no why: « ${q.q} »`);
  const ref = (q as { ref?: string }).ref;
  if (!ref || !sectionIds.includes(ref)) die(`a quiz question refs ${ref}, which is not a section here.`);
  if (['typeIn', 'errorSpot'].includes(q.format ?? '')) {
    const answer = (q as { answer?: string }).answer;
    if (!answer) die(`a ${q.format} question has no answer.`);
    if (!matchesAccept(answer, (q as { accept?: string[] }).accept)) die(`a ${q.format} question does not accept its own answer « ${answer} ».`);
  }
}
{
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq} of ${qs.length} questions are mcq.`);
  const closed = qs.filter((q) => typeof (q as { correct?: number }).correct === 'number');
  const slots: Record<number, number> = {};
  for (const q of closed) { const i = (q as { correct: number }).correct; slots[i] = (slots[i] ?? 0) + 1; }
  for (const [slot, n] of Object.entries(slots)) {
    if (n / closed.length > 0.4) die(`option slot ${slot} holds ${n} of ${closed.length} closed answers.`);
  }
  const rounds = (quizSection as { rounds?: { targets?: string[] }[] }).rounds ?? [];
  const leads = rounds.map((r) => r.targets?.[0]);
  if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}.`);
  for (const t of ETRE_ERROR_TRIGGERS) {
    if (!leads.includes(t.id)) die(`${t.id} leads no round, so its drill never fires.`);
    if (!ETRE_DRILLS.find((d) => d.id === t.drill)) die(`${t.id} names drill ${t.drill}, which does not exist.`);
    if (!ETRE_DRILLS.find((d) => d.id === t.retest)) die(`${t.id} names retest ${t.retest}, which does not exist.`);
  }
}

/* ── 19. House copy, jargon, and the two things a Pixel 6 found. ──────────*/
{
  const houseSurfaces = [
    ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
    LESSON.intro ?? '', ...display(LESSON.overview ?? {}), ...display(LESSON.acts ?? []),
    ...display(LESSON.drills ?? []), ...display(LESSON.audio ?? {}),
  ];
  for (const s of houseSurfaces) {
    if (s.includes('—') || s.includes('–')) die(`an em dash reaches a learner surface: « ${s} »`);
    if (/\bhonest(y|ly)?\b/i.test(s)) die(`a banned word reaches a learner surface: « ${s} »`);
    if (s.includes('‿')) die(`U+203F reaches a learner surface: « ${s} »`);
    if (/(?<!\.)\.\.(?!\.)/.test(s)) die(`a doubled full stop reaches a learner surface: « ${s} »`);
    for (const t of AI_TELLS) if (s.toLowerCase().includes(t)) die(`an AI tell reaches a learner surface: « ${t} » in « ${s} »`);
  }
  const titleEn = (LESSON.overview as { titleEn?: string } | undefined)?.titleEn ?? '';
  if (titleEn !== UNIT.title) die(`overview.titleEn is « ${titleEn} » and the unit's title is « ${UNIT.title} ».`);
  const proseSurfaces = [
    ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
    LESSON.intro ?? '', ...prose(LESSON.overview ?? {}), ...prose(LESSON.acts ?? []),
    ...prose(LESSON.drills ?? []),
  ];
  for (const s of proseSurfaces) {
    if (s === titleEn) continue;
    for (const j of JARGON) if (hasPhrase(s, j) || hasPhrase(s, `${j}s`)) die(`grammar jargon « ${j} » reaches a learner surface: « ${s} »`);
  }
  const plain = countPhrase(learnerAll, 'describing word');
  const technical = countPhrase(learnerAll, 'adjective');
  if (technical > plain) die(`« adjective » appears ${technical} times against « describing word » ${plain}.`);
  for (const sec of LESSON.sections) {
    const hint = (sec as { hint?: string }).hint;
    if (hint && hint.length > HINT_MAX) die(`${(sec as { id: string }).id}'s hint is ${hint.length} characters and the budget is ${HINT_MAX}.`);
    const title = (sec as { title?: string }).title ?? '';
    if (title.length > TITLE_MAX) console.log(`  !! ${(sec as { id: string }).id}'s title is ${title.length} characters against a measured cut of ${TITLE_MAX}: « ${title} ». Reported, not fatal.`);
    const terms = (sec as { terms?: string[] }).terms ?? [];
    if (terms.length > 3) die(`${(sec as { id: string }).id} declares ${terms.length} term chips.`);
    for (const t of terms) if (!ETRE_TERMS[t]) die(`${(sec as { id: string }).id} names term ${t}, which does not exist.`);
    if (terms.length && rowWidth(terms) > TERM_ROW_MAX) die(`${(sec as { id: string }).id}'s chip row is ${rowWidth(terms)} characters.`);
  }
  for (const row of TERM_ROWS) if (rowWidth(row) > TERM_ROW_MAX) die(`the declared chip row ${row.join('+')} is ${rowWidth(row)} characters.`);
}

/* ── 20. The reframe, against the explicit constant. ──────────────────────*/
if (LESSON.reframe !== REFRAME) die(`the lesson's reframe is « ${LESSON.reframe} ».`);
{
  const n = countPhrase(learnerAll, REFRAME);
  if (n !== REFRAME_COUNT) die(`the reframe is authored ${n} times and REFRAME_COUNT is ${REFRAME_COUNT}.`);
}
/* THE LITERAL, NOT THE CONSTANT. Mutation 44, and a2.18 §6 in a third place. */
const LITERAL_AGREEMENT = 'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';
if (AGREEMENT_RULE !== LITERAL_AGREEMENT) die(`AGREEMENT_RULE is « ${AGREEMENT_RULE} » and a2.23 is told to inherit « ${LITERAL_AGREEMENT} ».`);
if (!learnerAll.includes(LITERAL_AGREEMENT)) die('the rule a2.23 is told to inherit appears nowhere.');

/* A FLOOR ON TYPED QUESTIONS, NOT ONLY A CEILING ON mcq. Mutation 40. */
{
  const typedCount = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '')).length;
  if (typedCount < 18) die(`${typedCount} of ${qs.length} questions are typed and the canDo says produce.`);
}

/* EVERY ROLE-PLAY TURN HAS TWO ALTERNATIVES AND A userEn. Mutation 46. */
{
  const talk = LESSON.sections.find((x) => x.type === 'scenario') as unknown as {
    id: string; turns?: { alts?: unknown[]; userEn?: string }[];
  } | undefined;
  if (!talk?.turns?.length) die('the lesson has no role play.');
  for (const turn of talk!.turns!) {
    if ((turn.alts ?? []).length < 2) die(`a turn in ${talk!.id} has ${(turn.alts ?? []).length} alternatives and scenario.logic.test.ts requires two.`);
    if (!turn.userEn) die(`a turn in ${talk!.id} has no userEn.`);
  }
}

/* ── 21. The trapDrill shape and the reference sheet. ─────────────────────*/
{
  const traps = LESSON.sections.filter((s) => s.type === 'trapDrill') as unknown as {
    id: string; swipe?: boolean; size?: string; say?: string;
    steps?: { kind: string; label?: string; gate?: boolean }[];
    cards?: { fr?: string }[]; audio?: { recordingId?: string };
  }[];
  for (const t of traps) {
    if (!t.swipe) die(`${t.id} is a trapDrill without swipe.`);
    if (t.size) die(`${t.id} carries a size, and size comes OFF a stepped trapDrill.`);
    if (!t.say) die(`${t.id} has no say.`);
    const kinds = (t.steps ?? []).map((s) => s.kind);
    if (kinds.join('>') !== 'rule>cards>audio>drill') die(`${t.id} walks ${kinds.join('>')}.`);
    if (!(t.steps ?? []).find((s) => s.kind === 'drill')?.gate) die(`${t.id}'s drill step is not gated.`);
    if (!t.audio?.recordingId) die(`${t.id} has no audio recordingId.`);
    const label = (t.steps ?? []).find((s) => s.kind === 'cards')?.label ?? '';
    const n = t.cards?.length ?? 0;
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    if (!label.toLowerCase().includes(words[n] ?? '@@') && !label.includes(String(n))) {
      die(`${t.id}'s cards step is labelled « ${label} » and it holds ${n} cards.`);
    }
    const rec = (LESSON.audio?.recorded ?? []).find((r) => r.id === t.audio!.recordingId);
    if (!rec) die(`${t.id} names recording ${t.audio!.recordingId} and no brief declares it.`);
    for (const c of t.cards ?? []) {
      if (!c.fr) die(`${t.id} has a card with no fr.`);
      if (!(rec.clipIds ?? []).includes(c.fr) && !(rec.desc ?? '').includes(c.fr)) {
        die(`${t.id}'s card « ${c.fr} » is not in recording ${rec.id}.`);
      }
    }
  }
  for (const sheet of ETRE_SHEETS) {
    if (sheet.title.length > SHEET_TITLE_MAX) die(`the sheet title « ${sheet.title} » is ${sheet.title.length} characters.`);
    for (const sec of sheet.sections ?? []) {
      const t = sec as { type: string; id: string; cols?: string[]; rows?: string[][]; body?: string };
      if (!['table', 'teach', 'letterGrid'].includes(t.type)) {
        die(`sheet section ${t.id} is a ${t.type}, and ReferenceSheet.tsx draws teach, letterGrid and table and nothing else.`);
      }
      if (t.type === 'table') {
        if ((t.cols ?? []).length > SHEET_COLS_MAX) die(`sheet table ${t.id} has ${(t.cols ?? []).length} columns.`);
        for (const row of t.rows ?? []) {
          for (const cell of row) {
            if (cell.length > SHEET_CELL_MAX) console.log(`  !! sheet cell « ${cell} » is ${cell.length} characters against a measured ${SHEET_CELL_MAX}. Reported, not fatal.`);
          }
        }
      }
      if (t.type === 'teach' && !t.body) die(`sheet teach ${t.id} has no body.`);
    }
    const reachable = strings(LESSON.sections).includes(SHEET_ID) || LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === SHEET_ID);
    if (!reachable) die(`${SHEET_ID} is declared and no section names it.`);
  }
}

/* ── 22. The schema and the density validator. ────────────────────────────*/
for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id} fails validateItem:\n${formatIssues(issues)}`);
}
{
  const issues = validateLesson(LESSON);
  if (issues.length) die(`the lesson fails validateLesson:\n${formatIssues(issues)}`);
  const density = validateDensity(LESSON);
  if (density.length) die(`the lesson fails validateDensity:\n${formatDensity(density)}`);
}

/* ── The unit ─────────────────────────────────────────────────────────────*/

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`${UNIT_ID} is not in the seed's units.`);
for (const k of ['seq', 'title', 'sub', 'canDo'] as const) {
  if (String((unit as unknown as Record<string, unknown>)[k]) !== String(UNIT[k])) {
    die(`the seed unit's ${k} is « ${String((unit as unknown as Record<string, unknown>)[k])} » and the corpus file claims « ${String(UNIT[k])} ».`);
  }
}

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
  const missing = LESSON.itemIds.filter((id) => !itemsById.has(id));
  if (missing.length) die(`itemId(s) resolve to nothing in the seed: ${missing.join(', ')}`);
  const released = new Set(ETRE_TRANCHES.flat());
  const short = [...released].filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = ETRE_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash: ${unspeakable.join(', ')}`);
  const undictatable = ETRE_DICTEE_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...AUTHORED_IDS].map((id) => itemsById.get(id)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`authored row(s) carrying a gender: ${gendered.map((r) => r!.id).join(', ')}`);
  const carriedGendered = CARRIED.filter((r) => (r as { gender?: string }).gender);
  if (carriedGendered.length) die(`carried row(s) carrying a gender: ${carriedGendered.map((r) => r.id).join(', ')}`);
  /* NO DUPLICATE fr INSIDE THE THEME, computed the way flashhub-coverage does. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = [...itemsById.values()].filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  if (dupes.length) die(`${dupes.length} duplicate fr inside ${THEME}: ${dupes.slice(0, 5).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; ')}`);
}

/** a1.03's ENDING POPULATION, MEASURED OFF THE SEED. a2.04's ledger amendment
 *  §0: this is the half the batch cannot do, because a CARRY adds a row to the
 *  seed that Postgres already had. */
{
  const popBefore = endingPopulation(seed.items as never).length;
  const popAfter = endingPopulation([...itemsById.values()] as never).length;
  if (popBefore !== popAfter) {
    die(`this merge moves a1.03's ending population from ${popBefore} to ${popAfter}. Invariants §5: withdraw rather than argue.`);
  }
  if (popBefore !== A103_SEED_POPULATION) {
    console.log(`  !! a1.03's ending population is ${popBefore} and the corpus file records ${A103_SEED_POPULATION}. Somebody else has moved it. Reported, not fatal.`);
  }
  console.log(`  a1.03         ending population unchanged at ${popBefore} rows`);
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
  + '\n    ZERO headwords, ZERO gendered rows and ZERO bare past forms authored or carried.'
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${new Set(MANIFEST_ROWS.map((r) => r.theme)).size} themes`
  + `\n  ${REPAIRS.length} repaired, ${RESPELL_ADDITIONS.length} supplied, ${IMPORTED.length} imports declared`
  + `\n  ${READ_NOT_IMPORTED.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  ${ETRE_VERBS.length} verbs in ${FAMILIES.length} families; the Owns ${OWNS_SECTIONS} sections against the list's ${WHICH_VERBS_SECTIONS}`
  + `\n  the paradigm: ${PARADIGM_EVIDENCE.corpusWide} published sentences, ${PARADIGM_EVIDENCE.cardsShowingAnEnding} of them cards showing an ending`
  + `\n  dictée: ${ETRE_DICTEE_IDS.length} targets, all LETTERS`,
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
console.log(`  itemIds resolved: ${ETRE_ITEM_IDS.length}\n`);
