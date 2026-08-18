/* Merges a2.20.l1 « Participes passés irréguliers » into
 * ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-participes-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-participes-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * NEVER `git checkout seed.json` to undo anything. It discards other authors'
 * uncommitted lessons. Re-run this script.
 *
 * ── WHY THE CARRY EXISTS, AND IT IS NOT DECORATIVE HERE ───────────────────
 *
 * THIRTEEN OF THE THIRTY-NINE IMPORTS ARE ABSENT FROM THE SEED, and they are
 * the naming forms of `être`, `voir`, `naître`, `mourir`, `croire`, `recevoir`,
 * `construire`, `s'asseoir`, `prendre`, `écrire` and three more. Every one of
 * them is the verb behind a past form this lesson teaches, so without the carry
 * the group screens draw blank cards in the middle of the tables the whole
 * lesson turns on.
 *
 * ── THE ONE TRANSFORM ─────────────────────────────────────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * repairs one respelling on a row it does not own:
 * fr.sons.verbes-essentiels.118 « construire », [kohn-STRWEER] to
 * [kohⁿ-STRWEER]. Carrying the manifest verbatim would ship the flagged value
 * onto the -it group's own card. No respelling is SUPPLIED and no drills are
 * added; both lists are asserted empty rather than omitted.
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
 * by the merge, and a2.05 found four of its own. The reason it matters is
 * procedural: the merge is the layer that runs when somebody re-merges without
 * re-applying. Every guard the batch runs on the content runs here too.
 *
 * a2.18 §7 is the boundary of that: the merge sees only the SEED CUT, so a
 * duplicate of a row that is in Postgres and not in the cut is caught by the
 * batch and by nothing here.
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
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept, fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import {
  A103_SEED_POPULATION, A205_BLOCK, A205_IRREGULAR_PAST, A205_REFRAME,
  A215_REFRAME, ABSENT_FROM_SEED, AGREED_MUST_FIRE, AGREED_MUST_NOT_FIRE,
  AGREED_PAST_FORM, ALL_REPAIRS, ALSO_A_WORD, AUTHORED_HEADWORDS,
  AUTHORED_IDS as AUTHORED_ID_LIST, AUTHORED_PAST_FORMS, AUXILIARY_CHOICE,
  BLIND_NASALS, BUILT_FORMS, CHOICE_MUST_FIRE, CHOICE_MUST_NOT_FIRE, CIRCUMFLEX,
  DERIVABLE, DERIVED_ONLY, DICTEE_LIMIT, DICTEE_MATRIX, DICTEE_NEAR_MISS,
  DU_WITHOUT_CIRCUMFLEX, DU_WITH_CIRCUMFLEX, ETRE_AUXILIARY, ETRE_FORMS,
  ETRE_MUST_FIRE, ETRE_MUST_NOT_FIRE, ETRE_UNIT, EU, EXPECTED_ACTS,
  EXPECTED_AUTHORED, EXPECTED_FORMS, EXPECTED_IMPORTED, EXPECTED_IN_GROUPS,
  EXPECTED_NASALS_MISSED, EXPECTED_NASALS_SEEN, EXPECTED_ODD, EXPECTED_QUESTIONS,
  EXPECTED_REPAIRS, EXPECTED_SECTIONS, EXPECTED_TERMS, EXPECTED_TRAP_DRILLS,
  FALSE_POSITIVE_CANDIDATES, FALSE_POSITIVE_CONTROL, FAMILY_UNIT, FORMS,
  GROUPS, GROUP_SIZES, HINT_MAX, ID_BLOCK, IMPORTED, INFINITIVE_AFTER_AVOIR,
  INFINITIVE_MUST_FIRE, INFINITIVE_MUST_NOT_FIRE, ITEM_IMPORT_IDS,
  MACHINE_MUST_FIRE, MACHINE_MUST_NOT_FIRE, NO_EAR_QUESTION, OWNS_MISSIONS,
  PARADIGM_MISSIONS,
  PARTICIPES, PARTICIPLE_DECISION, PASSE_UNIT, READ_NOT_IMPORTED, REFRAME,
  REGULAR_MACHINE, REJECTED_THEME, RESPELL_ADDITIONS, SCENE_ERROR, SCENE_STALL,
  SECTION_CONVENTION,
  SHEET_CELL_MAX, SHEET_COLS_MAX, SHEET_ID, SHEET_TITLE_MAX, STEP_LABEL_WORDS,
  THEME, TITLE_MAX, UNIT, WRONG, formsOf, isA205, isMine,
} from './data/participes-corpus.ts';
import { PARTICIPES_TERMS, TERM_ROWS, TERM_ROW_MAX, rowWidth } from './data/participes-terms.ts';
import {
  ETRE_SECTIONS, GROUP_SECTIONS, PARTICIPES_ACTS, PARTICIPES_DICTEE_IDS,
  PARTICIPES_DRILLS, PARTICIPES_ERROR_TRIGGERS, PARTICIPES_ITEM_IDS,
  PARTICIPES_LESSON, PARTICIPES_SCENE_BEATS, PARTICIPES_SHEETS,
  PARTICIPES_SPEAK_IDS, PARTICIPES_TRANCHES, PRODUCTION_SECTIONS,
  QUIZ_SECTION_ID, SCENARIO_SECTION_ID, WRONG_FORM_SECTIONS,
} from './data/participes-lesson.ts';
import { PARTICIPES_ROWS, MEASURED } from './data/participes-rows.gen.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = PARTICIPES_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = PARTICIPES.map((r) => {
  const { role, form, ...rest } = r as Record<string, unknown> & { role: string; form?: string };
  void role; void form;
  return rest as unknown as Item;
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
/** THE LEFT BOUNDARY DROPS THE APOSTROPHE. a2.17 §3. */
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
const fires = (re: RegExp, s: string): boolean => new RegExp(re.source, re.flags.replace('g', '')).test(s);

/** The jargon list the batch runs, copied deliberately rather than imported:
 *  a2.04 found its merge had NO jargon check at all and only the batch caught
 *  the word. A list in two files that drift is still better than a check in one
 *  file that the other layer does not run. */
const JARGON = [
  'participle', 'auxiliary', 'periphrastic', 'suppletive', 'suppletion',
  'compound tense', 'present perfect', 'preterite', 'infinitive', 'infinitival',
  'inflection', 'inflected', 'paradigm', 'morpheme', 'morphology', 'lexeme',
  'lexicalised', 'phoneme', 'phonological', 'orthography', 'orthographic',
  'nasal vowel', 'complement', 'constituent', 'predicate', 'invariable',
  'clitic', 'direct object', 'transitive', 'exponent', 'termination',
  'conjugation class', 'first person', 'second person', 'third person',
];
const AI_TELL = [
  'falls fast', 'trip up', 'half of everything', 'this is the big one',
  'listen to the trap', 'get those two right', 'this is the part that pays',
  'here is the catch',
];

/** `drills` is an ENUM array and Postgres orders it by DECLARATION order. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b)) as Item['drills'];

/* ── The carried rows, with this build's one transform applied ────────────── */

const MANIFEST_ROWS: Item[] = Object.values(PARTICIPES_ROWS);
const REPAIR_BY_ID = new Map(ALL_REPAIRS.map((r) => [r.id, r] as const));

/** EVERY IMPORT IS CARRIED, because not one of them is a gendered single word.
 *  Four rows this build wanted and could not take carry `gender`: `le reçu`
 *  twice, and the gendered copies of `écrire` and `lire`. See
 *  READ_NOT_IMPORTED. */
const CARRY_IDS = new Set(ITEM_IMPORT_IDS);

/** FOUND BY MUTATION 9. The carry is `MANIFEST_ROWS.filter(id in CARRY_IDS)`, so
 *  an import that is NOT in the manifest is silently not carried and no guard
 *  here fires: swapping `écrire` for its gendered copy at fr.a1.ecole.049 made
 *  the batch throw and left the merge green. The manifest is the only layer that
 *  refuses a gendered row, so an id that never reaches it never meets that
 *  refusal. One line, and it is the merge's half of a2.04 §0. */
{
  const known = new Set(MANIFEST_ROWS.map((r) => r.id));
  const unknown = ITEM_IMPORT_IDS.filter((id) => !known.has(id));
  if (unknown.length) {
    die(`${unknown.length} import(s) are not in the manifest, so they would not be carried and the manifest's gender and respelling refusals never ran on them: ${unknown.join(', ')}.\n`
      + '  Re-run scripts/_a220_manifest.ts.');
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
  if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`this build repairs ${EXPECTED_REPAIRS} and ALL_REPAIRS holds ${ALL_REPAIRS.length}`);
  if (RESPELL_ADDITIONS.length !== 0) die('this build supplies a respelling and RESPELL_ADDITIONS was asserted empty.');
  for (const rp of ALL_REPAIRS) {
    const now = String(byIdMap.get(rp.id)?.respell ?? '');
    if (now !== rp.to) die(`the carry left ${rp.id} at ${JSON.stringify(now)} and the repaired value is ${JSON.stringify(rp.to)}`);
    if (hasPlainNasalFor(rp.fr, rp.to)) die(`${rp.id} repaired value ${JSON.stringify(rp.to)} is still flagged`);
    if (!hasPlainNasalFor(rp.fr, rp.from)) die(`${rp.id} is filed as VISIBLE and the checker does not flag ${JSON.stringify(rp.from)}`);
    if ((rp.half !== rp.to) !== (rp.blind || rp.house)) die(`${rp.id}: a2.17 §2's two reasons have been conflated`);
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
console.log(`\n  a2.20 « ${UNIT.sub} » merge${DRY_RUN ? '  (dry run)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/** THE CUT, MEASURED RATHER THAN PREDICTED. a2.05 §6: the one row that build
 *  predicted would be missing was not, and the surprise check is what caught it.
 *  Both directions are reported. */
{
  const inSeed = new Set(seed.items.map((i) => i.id));
  const absent = ITEM_IMPORT_IDS.filter((id) => !inSeed.has(id));
  const surpriseMissing = absent.filter((id) => !ABSENT_FROM_SEED.includes(id));
  const surprisePresent = ABSENT_FROM_SEED.filter((id) => inSeed.has(id));
  if (surpriseMissing.length) console.log(`  !! ${surpriseMissing.length} import(s) are absent from the cut and the corpus file did not predict it: ${surpriseMissing.join(', ')}`);
  if (surprisePresent.length) console.log(`  !! ${surprisePresent.length} import(s) the corpus file recorded as absent ARE in the cut: ${surprisePresent.join(', ')}`);
  console.log(`  the cut       ${absent.length} of ${ITEM_IMPORT_IDS.length} imports are missing from the seed and are carried`);
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

/* The split. */
if (PARTICIPLE_DECISION.isCorpusItem) die('PARTICIPLE_DECISION says a past form IS a corpus item.');
if (Object.keys(AUTHORED_HEADWORDS).length) die('this build authors a headword.');
if (Object.keys(AUTHORED_PAST_FORMS).length) die('this build authors a bare past form.');
for (const r of PARTICIPES) {
  if (!/\s/.test(r.fr)) die(`${r.id} authors « ${r.fr} », which has no whitespace. That is a BARE WORD whatever its kind says.`);
  if (r.kind !== 'sentence') die(`${r.id} is kind=${r.kind}`);
  if ((r as { gender?: string }).gender) die(`${r.id} carries a gender.`);
  if (!isMine(r.id)) die(`${r.id} is outside ${ID_BLOCK.from}..${ID_BLOCK.to}`);
  if (isA205(r.id)) die(`${r.id} is inside a2.05's block ${A205_BLOCK.from}..${A205_BLOCK.to}`);
  if (r.theme !== THEME) die(`${r.id} is in theme ${r.theme}`);
  if ((r.theme as string) === (REJECTED_THEME as string)) die(`${r.id} is in the rejected theme`);
}
if (PARTICIPES.length !== EXPECTED_AUTHORED) die(`${PARTICIPES.length} rows and EXPECTED_AUTHORED is ${EXPECTED_AUTHORED}`);
if (ITEM_IMPORT_IDS.length !== EXPECTED_IMPORTED) die(`${ITEM_IMPORT_IDS.length} imports and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}`);
if (MEASURED.glossedAndRespelled !== 0) die('the manifest measured a bare past form glossed as such AND respelled.');
if (MEASURED.a205BlockRows !== 36) die(`a2.05's block holds ${MEASURED.a205BlockRows} rows and that lesson applied 36.`);

/* The list and the grouping. */
if (FORMS.length !== EXPECTED_FORMS) die(`FORMS holds ${FORMS.length} and EXPECTED_FORMS is ${EXPECTED_FORMS}`);
if (FORMS.filter((f) => f.group !== 'odd').length !== EXPECTED_IN_GROUPS) die('EXPECTED_IN_GROUPS disagrees with FORMS');
if (FORMS.filter((f) => f.group === 'odd').length !== EXPECTED_ODD) die('EXPECTED_ODD disagrees with FORMS');
for (const g of GROUPS) if (formsOf(g).length !== GROUP_SIZES[g]) die(`the ${g} group has drifted from GROUP_SIZES`);
{
  const taught = new Set(FORMS.map((f) => f.past));
  const derived = new Set(DERIVED_ONLY.map((d) => d.past));
  const orphans = A205_IRREGULAR_PAST.filter((p) => !taught.has(p) && !derived.has(p));
  if (orphans.length) die(`${orphans.length} of ${PASSE_UNIT}'s thirty-five are taught by nobody: ${orphans.join(', ')}`);
}
if (GROUP_SECTIONS.length !== GROUPS.length) die('a group has no section of its own');
for (const { group, sectionId } of GROUP_SECTIONS) {
  const sec = byId(sectionId);
  if (!sec) die(`the ${group} group names section ${sectionId} and the lesson has no such section`);
  const text = strings(sec).join('\n');
  const missing = formsOf(group as never).map((f) => f.past).filter((p) => !hasPhrase(text, p));
  if (missing.length) die(`the ${group} group's section ${sectionId} does not name ${missing.join(', ')}`);
  for (const other of GROUPS) {
    if (other === group) continue;
    const members = formsOf(other).map((f) => f.past);
    if (members.every((p) => hasPhrase(text, p))) die(`section ${sectionId} holds every member of the ${other} group as well as its own`);
  }
}

const learnerAll = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}), ...strings(LESSON.acts ?? []),
  ...strings(LESSON.drills ?? []),
].join('\n');
{
  const absent = FORMS.map((f) => f.past).filter((p) => !hasPhrase(learnerAll, p));
  if (absent.length) die(`${absent.length} of the thirty-three appear nowhere in the lesson: ${absent.join(', ')}`);
}

/* The circumflex, by name, and the two functions that cannot see it. */
if (DU_WITH_CIRCUMFLEX !== 'dû') die('DU_WITH_CIRCUMFLEX has lost its circumflex. IT IS DELIBERATE.');
if (CIRCUMFLEX.past !== DU_WITH_CIRCUMFLEX) die('CIRCUMFLEX.past has lost its circumflex.');
{
  const f = FORMS.find((x) => x.verb === 'devoir');
  if (!f || f.past !== DU_WITH_CIRCUMFLEX) die('devoir\'s past form has lost its circumflex. IT IS DELIBERATE.');
  const row = PARTICIPES.find((r) => r.id === f.rowId);
  if (!row || !hasPhrase(row.fr, DU_WITH_CIRCUMFLEX)) die('the row teaching devoir\'s past form has lost its circumflex.');
}
if (fold(DU_WITH_CIRCUMFLEX) !== fold(DU_WITHOUT_CIRCUMFLEX)) die('fold() can now tell dû from du; revisit the mcq-only decision.');
if (normalizeFr(DU_WITH_CIRCUMFLEX) !== normalizeFr(DU_WITHOUT_CIRCUMFLEX)) die('normalizeFr() can now tell dû from du; revisit the dictée decision.');
for (const q of qs) {
  const open = q.format === 'typeIn' || q.format === 'errorSpot' || q.format === 'speak';
  if (!open) continue;
  if ([q.answer ?? '', ...(q.accept ?? [])].some((a) => hasPhrase(a, DU_WITH_CIRCUMFLEX))) {
    die(`a ${q.format} question asks for « ${DU_WITH_CIRCUMFLEX} » and fold() strips the circumflex.`);
  }
}

/* The pairs. */
for (const d of DERIVABLE) {
  /* FOUND BY MUTATION 13, and the merge missed it while the batch caught it,
     which is a2.16 §4's shape. Setting `wrong` equal to `right` satisfies the
     both-on-one-card check trivially: the card holds « pris » twice and the
     guard says the pair is there. A pair of one thing is not a pair. */
  if (d.wrong === d.right) die(`the ${d.verb} trap records « ${d.wrong} » as both the invented form and the real one. A pair of one thing is not a pair.`);
  if (!BUILT_FORMS.includes(d.wrong)) die(`the ${d.verb} trap's invented form « ${d.wrong} » is not in BUILT_FORMS, so nothing refuses it outside the trap sections.`);
  const objs: unknown[] = [];
  const walk = (v: unknown) => {
    if (Array.isArray(v)) for (const x of v) walk(x);
    else if (v && typeof v === 'object') { objs.push(v); for (const x of Object.values(v)) walk(x); }
  };
  for (const sid of ['s05-machine', 's15-derivable']) walk(byId(sid));
  const paired = objs.some((o) => {
    const t = strings(o).join('\n');
    return hasPhrase(t, d.wrong) && hasPhrase(t, d.right);
  });
  if (!paired) die(`« ${d.wrong} » and « ${d.right} » never appear on ONE card.`);
}

/* The shapes, in both directions. */
for (const [name, re, must, mustNot] of [
  ['REGULAR_MACHINE', REGULAR_MACHINE, MACHINE_MUST_FIRE, MACHINE_MUST_NOT_FIRE],
  ['INFINITIVE_AFTER_AVOIR', INFINITIVE_AFTER_AVOIR, INFINITIVE_MUST_FIRE, INFINITIVE_MUST_NOT_FIRE],
  ['AGREED_PAST_FORM', AGREED_PAST_FORM, AGREED_MUST_FIRE, AGREED_MUST_NOT_FIRE],
  ['ETRE_AUXILIARY', ETRE_AUXILIARY, ETRE_MUST_FIRE, ETRE_MUST_NOT_FIRE],
  ['AUXILIARY_CHOICE', AUXILIARY_CHOICE, CHOICE_MUST_FIRE, CHOICE_MUST_NOT_FIRE],
] as [string, RegExp, readonly string[], readonly string[]][]) {
  for (const s of must) if (!fires(re, s)) die(`${name} does not fire on ${JSON.stringify(s)}`);
  for (const s of mustNot) if (fires(re, s)) die(`${name} fires on ${JSON.stringify(s)}`);
}

/* No auxiliary choice taught, être confined, no agreement anywhere. */
const surfaces = [
  ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...display(LESSON.overview ?? {}), ...display(LESSON.acts ?? []),
  ...display(LESSON.drills ?? []),
];
for (const s of surfaces) {
  if (fires(AUXILIARY_CHOICE, s)) die(`a learner surface teaches which first word a verb takes: ${JSON.stringify(s)}`);
  if (fires(AGREED_PAST_FORM, s)) die(`a learner surface agrees a past form: ${JSON.stringify(s)}`);
}
for (const r of PARTICIPES) {
  if (fires(AGREED_PAST_FORM, r.fr)) die(`${r.id} agrees a past form: « ${r.fr} »`);
  if (fires(REGULAR_MACHINE, r.fr)) die(`${r.id} runs the regular rule on an irregular verb: « ${r.fr} »`);
  if (fires(INFINITIVE_AFTER_AVOIR, r.fr)) die(`${r.id} leaves a naming form behind avoir: « ${r.fr} »`);
  for (const w of BUILT_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} contains the invented form « ${w} »`);
}
for (const sec of LESSON.sections) {
  const sid = (sec as { id?: string }).id ?? '';
  const hit = strings(sec).find((s) => fires(ETRE_AUXILIARY, s));
  if (hit) {
    if (!(ETRE_SECTIONS as readonly string[]).includes(sid)) die(`section ${sid} puts être in front of a past form: ${JSON.stringify(hit)}`);
    if ((PRODUCTION_SECTIONS as readonly string[]).includes(sid)) die(`section ${sid} is a production surface and it puts être in front of a past form`);
  }
  if ((WRONG_FORM_SECTIONS as readonly string[]).includes(sid)) continue;
  for (const s of display(sec)) {
    for (const w of BUILT_FORMS) if (hasPhrase(s, w)) die(`section ${sid} shows the invented form « ${w} »: ${JSON.stringify(s)}`);
  }
}
for (const id of PARTICIPES_DICTEE_IDS.concat(PARTICIPES_SPEAK_IDS)) {
  if (PARTICIPES.find((x) => x.id === id)?.role === 'etre') die(`${id} is an être row on a production surface`);
}
if (ETRE_FORMS.length !== 3) die(`${ETRE_FORMS.length} forms are flagged être and there are three`);
{
  const NOT_A_WORD = /(?:is not a word|is not one either|does not exist|no such word)/i;
  for (const [key, t] of Object.entries(LESSON.terms ?? {})) {
    for (const s of display(t)) {
      for (const w of BUILT_FORMS) {
        if (hasPhrase(s, w) && !NOT_A_WORD.test(s)) die(`term "${key}" prints « ${w} » without saying it is not a word: ${JSON.stringify(s)}`);
      }
    }
  }
  for (const s of display(LESSON.sheets ?? []).concat([LESSON.intro ?? ''], display(LESSON.overview ?? {}))) {
    for (const w of BUILT_FORMS) if (hasPhrase(s, w)) die(`an invented form « ${w} » reaches the sheet, the intro or the overview`);
  }
}

/* The credits, verbatim. */
if (A215_REFRAME !== 'Cover the front of the verb. Build what is left.') die(`${FAMILY_UNIT}'s reframe has changed and this lesson quotes it verbatim`);
if (A205_REFRAME !== 'One verb, two words, and the small ones go in between.') die(`${PASSE_UNIT}'s reframe has changed and this lesson quotes it verbatim`);
if (!learnerAll.includes(A215_REFRAME)) die(`${FAMILY_UNIT}'s reframe is not quoted verbatim`);
if (!learnerAll.includes(A205_REFRAME)) die(`${PASSE_UNIT}'s reframe is not quoted verbatim`);
/* FOUND BY MUTATION 21, and it is a2.18 §6 exactly: a guard whose expected value
   comes from the same module as the content is guarding nothing. Renaming
   FAMILY_UNIT renamed both sides of `namesUnit(learnerAll, FAMILY_UNIT)` and the
   merge stayed green while a2.15 vanished from every screen. The unit ids are
   LITERALS here. */
if (FAMILY_UNIT !== 'a2.15') die(`FAMILY_UNIT is ${JSON.stringify(FAMILY_UNIT)} and the lesson this one borrows its shape from is a2.15`);
if (PASSE_UNIT !== 'a2.05') die(`PASSE_UNIT is ${JSON.stringify(PASSE_UNIT)} and the prerequisite is a2.05`);
if (ETRE_UNIT !== 'a2.21') die(`ETRE_UNIT is ${JSON.stringify(ETRE_UNIT)} and the lesson that owns the auxiliary is a2.21`);
for (const u of ['a2.15', 'a2.05', 'a2.21']) if (!namesUnit(learnerAll, u)) die(`${u} is never named by unit id`);
if (/(?:sons|a1|a2|b1|b2|c1)\.\d{2}/i.test(LESSON.intro ?? '')) die('the intro names a unit id and it is drawn on the lesson cover');

/* The reframe, act weights, counts. */
if (LESSON.reframe !== REFRAME) die('Lesson.reframe is not the corpus REFRAME');
if (countPhrase(learnerAll, REFRAME) < 3) die('the reframe is carried fewer than three times');
{
  const owns = PARTICIPES_ACTS.find((a) => a.id === 'act3')!;
  const recap = PARTICIPES_ACTS.find((a) => a.id === 'act2')!;
  if (owns.sections.length !== OWNS_MISSIONS) die('the Owns act has drifted from OWNS_MISSIONS');
  if (recap.sections.length !== PARADIGM_MISSIONS) die('the recap act has drifted from PARADIGM_MISSIONS');
  if (owns.sections.length <= recap.sections.length) die('the recap act is not smaller than the Owns act');
  const biggest = Math.max(...PARTICIPES_ACTS.map((a) => a.sections.length));
  if (owns.sections.length !== biggest || PARTICIPES_ACTS.filter((a) => a.sections.length === biggest).length !== 1) {
    die('the Owns act is not the largest act on its own');
  }
}
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections and EXPECTED_SECTIONS is ${EXPECTED_SECTIONS}`);
if (PARTICIPES_ACTS.length !== EXPECTED_ACTS) die(`${PARTICIPES_ACTS.length} acts`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions`);
if (Object.keys(PARTICIPES_TERMS).length !== EXPECTED_TERMS) die('the term count has moved');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('a second quiz section is never rendered');
if (LESSON.sections.filter((s) => s.type === 'trapDrill').length !== EXPECTED_TRAP_DRILLS) die('the trapDrill count has moved');
if (LESSON.sections.length > SECTION_CONVENTION) console.log(`  section count ${LESSON.sections.length}, above the ${SECTION_CONVENTION} convention. Declared.`);

/* The stepped trapDrill shape. */
for (const t of LESSON.sections.filter((s) => s.type === 'trapDrill') as unknown as Record<string, unknown>[]) {
  const id = String(t.id);
  const steps = (t.steps ?? []) as { kind: string; label?: string; gate?: boolean }[];
  if (steps.map((s) => s.kind).join('>') !== 'rule>cards>audio>drill') die(`${id} does not walk rule > cards > audio > drill`);
  if (t.swipe !== true) die(`${id} has no swipe`);
  if (!t.audio) die(`${id} has no audio spec`);
  if (!t.say) die(`${id} has no say`);
  if (!steps.find((s) => s.kind === 'drill')?.gate) die(`${id}'s drill step is not gated`);
  if (t.size) die(`${id} carries a size and size comes OFF a stepped trapDrill`);
  const cards = (t.cards ?? []) as Record<string, string>[];
  const label = String(steps.find((s) => s.kind === 'cards')?.label ?? '').toLowerCase();
  const word = STEP_LABEL_WORDS[cards.length];
  if (word && !label.includes(word)) die(`${id}'s cards step is labelled ${JSON.stringify(label)} and holds ${cards.length} cards`);
  const rec = (LESSON.audio?.recorded ?? []).find((r) => r.id === (t.audio as { recordingId?: string }).recordingId);
  if (!rec) die(`${id} names a recording that is not briefed`);
  for (const cd of cards) {
    if (!cd.fr) die(`${id} has a card with no fr`);
    if (!(rec.clipIds ?? []).includes(cd.fr)) die(`${id}'s audio step plays « ${cd.fr} » and ${rec.id} does not contain it`);
  }
  const wtr = (t.audio as { wrongThenRight?: boolean }).wrongThenRight === true;
  const hasWrong = cards.some((cd) => BUILT_FORMS.some((w) => hasPhrase(cd.fr, w)));
  if (wtr !== hasWrong) die(`${id} sets wrongThenRight=${wtr} and its cards ${hasWrong ? 'do' : 'do not'} contain an invented form`);
}

/* THE HINT LINE, AND THE DOUBLED FULL STOP. Both found on a Pixel 6 by this
   build and by no host gate.

   A `cardDeck`'s `hint` is ONE LINE and ellipsises; a `listening` question that
   quotes two French sentences gets two full stops in a row, because both lines
   already end in one. Neither field is checked by anything anywhere. */
for (const s of LESSON.sections as unknown as Record<string, unknown>[]) {
  const hint = String(s.hint ?? '');
  if (hint.length > HINT_MAX) die(`${String(s.id)}'s hint is ${hint.length} characters and the Pixel 6 cuts it at ${HINT_MAX}: ${JSON.stringify(hint)}`);
}
for (const s of display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}))) {
  // EXACTLY TWO, so a three-dot ellipsis is left alone: the scene's own
  // « Samedi, j'ai... j'ai prendu... » is a stall and not a punctuation defect.
  if (/(?<!\.)\.\.(?!\.)/.test(s)) die(`a doubled full stop reaches a learner surface, which is a quoted sentence keeping its own: ${JSON.stringify(s)}`);
}

/* Chips, titles, the sheet. */
for (const s of LESSON.sections as unknown as Record<string, unknown>[]) {
  const t = (s.terms ?? []) as string[];
  if (t.length > 3) die(`${String(s.id)} declares ${t.length} term chips`);
  for (const k of t) if (!PARTICIPES_TERMS[k]) die(`${String(s.id)} names an unknown term ${k}`);
  if (rowWidth(t) > TERM_ROW_MAX) die(`${String(s.id)}'s chip row is ${rowWidth(t)} characters`);
  if (String(s.title ?? '').length > TITLE_MAX) die(`${String(s.id)}'s title is ${String(s.title).length} characters`);
  if (s.type === 'commonErrors' && s.swipe !== true) die(`${String(s.id)} is a commonErrors without swipe`);
}
for (const r of TERM_ROWS) if (rowWidth(r) > TERM_ROW_MAX) die(`the declared chip row ${r.join('+')} is too wide`);
{
  const sheet = PARTICIPES_SHEETS[0]!;
  if (PARTICIPES_SHEETS.length !== 1) die('this lesson declares more than one reference sheet');
  if (sheet.id !== SHEET_ID) die('the sheet id has moved');
  if ((sheet.title ?? '').length > SHEET_TITLE_MAX) die('the sheet title is cut in the header bar');
  for (const s of sheet.sections!) {
    if (s.type === 'cheatSheet') die('a cheatSheet inside a reference sheet draws nothing');
    const cols = (s as { cols?: string[] }).cols;
    if (cols && cols.length > SHEET_COLS_MAX) die('a four-column table inside a sheet clips');
    for (const row of ((s as { rows?: string[][] }).rows ?? [])) {
      for (const cell of row) if (cell.length > SHEET_CELL_MAX) die(`the sheet cell ${JSON.stringify(cell)} is ${cell.length} characters`);
    }
  }
  const sheetText = strings(sheet).join('\n');
  const missing = FORMS.map((f) => f.past).filter((p) => !hasPhrase(sheetText, p));
  if (missing.length) die(`${missing.length} of the thirty-three are not on the reference sheet: ${missing.join(', ')}`);
  for (const d of DERIVED_ONLY) if (!hasPhrase(sheetText, d.past)) die(`« ${d.past} » is derived rather than taught and is not on the sheet either`);
}

/* The quiz. */
{
  const fmt = (f?: string) => f ?? 'mcq';
  const counts: Record<string, number> = {};
  for (const q of qs) counts[fmt(q.format)] = (counts[fmt(q.format)] ?? 0) + 1;
  if ((counts.mcq ?? 0) > qs.length / 2) die('more than half the questions are mcq');
  const typed = (counts.typeIn ?? 0) + (counts.errorSpot ?? 0);
  if (typed <= qs.length - typed) die('recognition outnumbers production and the canDo says produce');
  for (const q of qs) {
    if (!q.why) die(`a question has no why: ${JSON.stringify(q.q)}`);
    if (!q.ref || !byId(q.ref)) die(`a question refs a section that does not exist: ${JSON.stringify(q.q)}`);
    if ((q.format === 'typeIn' || q.format === 'errorSpot') && !matchesAccept(q.answer ?? '', q.accept ?? [])) {
      die(`the answer shown for ${JSON.stringify(q.q)} is not accepted by its own accept list`);
    }
    if (q.format === 'errorSpot' && !q.prompt) die(`an errorSpot has no prompt: ${JSON.stringify(q.q)}`);
    if (q.format === 'listenChoose' && !q.say) die(`a listenChoose has no say: ${JSON.stringify(q.q)}`);
  }
  const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
  const leads = rounds.map((r) => r.targets[0]);
  if (new Set(leads).size !== leads.length) die('two rounds lead the same trigger, so a drill is unreachable');
  for (const t of PARTICIPES_ERROR_TRIGGERS) {
    if (!leads.includes(t.id)) die(`trigger ${t.id} leads no round`);
    if (!PARTICIPES_DRILLS.find((d) => d.id === t.drill)) die(`trigger ${t.id} names a drill that does not exist`);
    if (!PARTICIPES_DRILLS.find((d) => d.id === t.retest)) die(`trigger ${t.id} names a retest that does not exist`);
  }
  const printed = new Set(FORMS.map((f) => f.past));
  const cold = qs.filter((q) => q.format === 'typeIn').map((q) => String(q.answer ?? '')).filter((a) => a && !printed.has(a));
  if (cold.length < 3) die(`only ${cold.length} typed questions ask for a form the lesson never printed`);
  /* NO EAR QUESTION MAY OFFER TWO OPTIONS THAT ARE ONE SOUND APART.
     FOUND BY MUTATION 28: the merge had no NO_EAR_QUESTION walk at all, which is
     a2.16 §4's finding in a new place — the merge is the layer that runs when
     somebody re-merges without re-applying, and it had drifted thinner than the
     batch on the one guard this lesson's central fact rests on. */
  for (const q of qs) {
    if ((q.format ?? 'mcq') !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i += 1) {
      for (let j = 0; j < opts.length; j += 1) {
        if (i === j) continue;
        for (const [x, y] of NO_EAR_QUESTION) {
          if (x !== y && opts[i]!.replace(x, y) === opts[j]) {
            die(`an ear question offers « ${opts[i]} » against « ${opts[j]} », which differ only by ${x}/${y}. They are one sound and there is no correct answer.`);
          }
        }
      }
    }
  }
}

/* The dictée, through the real functions. */
for (const d of DICTEE_MATRIX) {
  if (letterCount(d.fr) !== d.letters) die(`DICTEE_MATRIX and letterCount disagree about « ${d.fr} »`);
  if (dicteeMode(d.fr) !== 'letters') die(`« ${d.fr} » is in WORD mode`);
  if (d.letters > DICTEE_LIMIT) die(`« ${d.fr} » is over the ${DICTEE_LIMIT}-letter limit`);
}
if (DICTEE_MATRIX.length !== PARTICIPES_DICTEE_IDS.length) die('DICTEE_MATRIX and the dictée disagree about how many rows');
for (const id of PARTICIPES_DICTEE_IDS) {
  const r = PARTICIPES.find((x) => x.id === id)!;
  if (dicteeMode(r.fr) !== 'letters') die(`${id} carries a dictation drill and is in WORD mode`);
}
for (const nm of DICTEE_NEAR_MISS) {
  if ((normalizeFr(nm.target) === normalizeFr(nm.miss)) === nm.canTell) {
    die(`DICTEE_NEAR_MISS and normalizeFr disagree about « ${nm.target} » against « ${nm.miss} »`);
  }
}

/* The nasals, in both directions, and the two blind ones by name. */
{
  let seen = 0; let missed = 0;
  for (const r of PARTICIPES) {
    if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} respelled ${JSON.stringify(r.respell)} is flagged`);
    const v = r.respell ?? '';
    for (let k = 0; k < v.length; k += 1) {
      if (v[k] !== 'ⁿ') continue;
      if (hasPlainNasalFor(r.fr, `${v.slice(0, k)}n${v.slice(k + 1)}`)) seen += 1; else missed += 1;
    }
    if (v.includes('‿')) die(`${r.id} carries U+203F`);
  }
  if (seen !== EXPECTED_NASALS_SEEN) die(`${seen} nasals the checker can see and the corpus file claims ${EXPECTED_NASALS_SEEN}`);
  if (missed !== EXPECTED_NASALS_MISSED) die(`${missed} nasals the checker cannot see and the corpus file claims ${EXPECTED_NASALS_MISSED}`);
  if (BLIND_NASALS.length !== EXPECTED_NASALS_MISSED) die('BLIND_NASALS and the measured count disagree');
  for (const b of BLIND_NASALS) {
    const r = PARTICIPES.find((x) => x.fr === b.fr);
    if (!r || r.respell !== b.respell) die(`BLIND_NASALS no longer matches the row for « ${b.fr} »`);
    if (hasPlainNasalFor(b.fr, b.respell.replace('ⁿ', 'n'))) die(`« ${b.fr} » is recorded BLIND and the checker CAN now see it`);
  }
  const fired = FALSE_POSITIVE_CANDIDATES.filter((c) => hasPlainNasalFor(c.fr, c.respell));
  if (fired.length) die(`the false-positive path fires on ${fired.map((c) => c.fr).join(', ')}`);
  if (!hasPlainNasalFor(FALSE_POSITIVE_CONTROL.fr, FALSE_POSITIVE_CONTROL.respell)) die('the false-positive CONTROL no longer fires');
  for (const r of CARRIED) {
    if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} is carried with a flagged respelling: ${JSON.stringify(r.respell)}`);
    if ((r.respell ?? '').includes('‿')) die(`${r.id} is carried with a U+203F tie`);
    if (!r.respell) die(`${r.id} is carried with no respelling and a card without one cannot be said`);
  }
}

/* House copy, walked over `audio` too. a2.05 §3. */
{
  const houseSurfaces = [
    ...surfaces, ...strings(LESSON.audio ?? {}),
    ...PARTICIPES.map((r) => `${r.en} ${r.notes ?? ''}`),
  ];
  for (const s of houseSurfaces) {
    if (s.includes('—')) die(`an em dash reaches a learner surface: ${JSON.stringify(s)}`);
    if (/\bhonest(ly|y)?\b/i.test(s)) die(`the banned word "honest" reaches a learner surface: ${JSON.stringify(s)}`);
    if (s.includes('‿')) die(`U+203F reaches a learner surface: ${JSON.stringify(s)}`);
    for (const t of AI_TELL) if (s.toLowerCase().includes(t)) die(`AI-tell phrasing: ${JSON.stringify(s)}`);
  }
  if ((LESSON.overview as { titleEn?: string })?.titleEn !== UNIT.title) die('overview.titleEn is not the unit\'s own English name');
  const { titleEn: _t, ...overviewRest } = (LESSON.overview ?? {}) as Record<string, unknown>;
  void _t;
  const jargonSurfaces = [
    ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
    LESSON.intro ?? '', ...prose(overviewRest), ...prose(LESSON.acts ?? []), ...prose(LESSON.drills ?? []),
    ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
  ];
  for (const s of jargonSurfaces) {
    for (const j of JARGON) {
      if (hasPhrase(s, j)) die(`grammar jargon "${j}" on a learner surface: ${JSON.stringify(s)}`);
      if (hasPhrase(s, `${j}s`)) die(`grammar jargon "${j}s" on a learner surface: ${JSON.stringify(s)}`);
    }
  }
  if (countPhrase(learnerAll, 'past form') < 20) die('the plain phrase "past form" has been squeezed out');
}

/* The scene. */
{
  /* FOUND BY MUTATION 16, on both this layer and the batch: walking every string
     in the scene passes on a scene that has been repaired, because the English
     gloss « I took the bus, except that prendu is not a word » still holds the
     token. THE CHECK IS ON THE FRENCH THE SCENE SPEAKS. */
  const sceneFrench = [
    ...PARTICIPES_SCENE_BEATS.flatMap((b) => {
      const o = b as Record<string, unknown>;
      return [
        typeof o.fr === 'string' ? o.fr : '',
        ...((o.options ?? []) as Record<string, string>[]).map((x) => x.fr ?? ''),
        ((o.wrong ?? {}) as Record<string, string>).fr ?? '',
        ((o.right ?? {}) as Record<string, string>).fr ?? '',
      ];
    }),
    SCENE_STALL, SCENE_ERROR,
  ].filter(Boolean);
  if (!BUILT_FORMS.some((w) => sceneFrench.some((s) => hasPhrase(s, w)))) {
    die('no FRENCH line in the scene holds an invented form, and this lesson\'s failure IS a non-word said out loud. A gloss mentioning it is not the same thing.');
  }
  const brk = PARTICIPES_SCENE_BEATS.find((b) => b.kind === 'break') as Record<string, unknown> | undefined;
  if (!brk) die('the scene has no break card');
  if (brk.coach) die('the break card carries a coach line and the scene closing renders on the same screen');
}

/* The scenario, which a SEED-WIDE test also checks. */
{
  const scenario = byId(SCENARIO_SECTION_ID) as { turns?: { userEn?: string; alts?: unknown[] }[] } | undefined;
  for (const [i, t] of (scenario?.turns ?? []).entries()) {
    if (!t.userEn) die(`scenario turn ${i} has no userEn`);
    if ((t.alts ?? []).length < 2) die(`scenario turn ${i} has fewer than two alts`);
  }
}

/* Acts, tranches, reachability. */
{
  const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id!).filter(Boolean);
  const claimed = new Set<string>();
  for (const a of PARTICIPES_ACTS) {
    for (const sid of a.sections) {
      if (!sectionIds.includes(sid)) die(`act ${a.id} names ${sid} and the lesson has no such section`);
      if (claimed.has(sid)) die(`${sid} is claimed by two acts`);
      claimed.add(sid);
    }
  }
  for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);
  if (PARTICIPES_TRANCHES.length !== EXPECTED_ACTS) die('one deck tranche per act');
  const released = PARTICIPES_TRANCHES.flat();
  if (new Set(released).size !== released.length) die('a tranche releases the same item twice');
  const ghosts = released.filter((id) => !PARTICIPES_ITEM_IDS.includes(id));
  if (ghosts.length) die(`${ghosts.length} tranche ids are not in itemIds: ${ghosts.join(', ')}`);
  const unreleased = PARTICIPES_ITEM_IDS.filter((id) => !released.includes(id));
  if (unreleased.length) die(`${unreleased.length} declared items are released by no tranche`);
}

/* Schema and density. */
for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id}: ${formatIssues(issues)}`);
}
{
  const li = validateLesson(LESSON);
  if (li.length) die(`the lesson does not validate:\n${formatIssues(li)}`);
  const d = validateDensity(LESSON);
  if (d.length) die(`density:\n${formatDensity(d)}`);
}
console.log('  guards        every content guard the batch runs has run here too');

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`the seed has no unit ${UNIT_ID}`);
if (String(unit.seq) !== String(UNIT.seq)) die(`unit ${UNIT_ID} is seq ${unit.seq} and the corpus says ${UNIT.seq}`);
if (unit.title !== UNIT.title) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT.sub) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT.canDo) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${unit.seq}`);

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
  const released = new Set(PARTICIPES_TRANCHES.flat());
  const short = [...released].filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = PARTICIPES_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = PARTICIPES_DICTEE_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...AUTHORED_IDS].map((id) => itemsById.get(id)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`authored row(s) carrying a gender: ${gendered.map((r) => r!.id).join(', ')}`);
  const carriedGendered = CARRIED.filter((r) => (r as { gender?: string }).gender);
  if (carriedGendered.length) die(`carried row(s) carrying a gender, which joins a1.03's ending population: ${carriedGendered.map((r) => r.id).join(', ')}`);
  /* NO DUPLICATE fr INSIDE THE THEME, computed the way flashhub-coverage does. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = [...itemsById.values()].filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  if (dupes.length) die(`${dupes.length} duplicate fr inside ${THEME}: ${dupes.slice(0, 5).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; ')}`);
}

/** a1.03's ENDING POPULATION, MEASURED OFF THE SEED. a2.04 §0: this is the half
 *  the batch cannot do, because a CARRY adds a row to the seed that Postgres
 *  already had. */
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
  + `\n    out of ${new Set(MANIFEST_ROWS.map((r) => r.theme)).size} themes, and eleven of them are naming forms this lesson displays`
  + `\n  ${ALL_REPAIRS.length} repaired, ${RESPELL_ADDITIONS.length} supplied, ${IMPORTED.length} imports declared`
  + `\n  ${READ_NOT_IMPORTED.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  ${FORMS.length} forms: ${GROUPS.map((g) => `${g} ${GROUP_SIZES[g]}`).join(', ')}, and ${ALSO_A_WORD.length} of them already published as ordinary words`
  + `\n  dictée: ${PARTICIPES_DICTEE_IDS.length} targets, all LETTERS`,
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
console.log(`  itemIds resolved: ${PARTICIPES_ITEM_IDS.length}\n`);
