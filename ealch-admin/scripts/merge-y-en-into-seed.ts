/* a2.25.l1 « Y et EN » — into seed.json.
 *
 *     pnpm tsx scripts/merge-y-en-into-seed.ts -- --dry-run
 *     pnpm tsx scripts/merge-y-en-into-seed.ts
 *
 * ORDER: Postgres first, seed second. `content:publish` regenerates the seed
 * FROM the database, so merging before applying silently loses the lesson.
 * NEVER `git checkout seed.json` to undo anything here: it discards other
 * authors' uncommitted lessons. Re-run this script instead.
 *
 * ── THE SEED CUT ───────────────────────────────────────────────────────────
 *
 * `pronoms-essentiels` holds 584 published rows in Postgres and the seed carries
 * a small fraction of them. a2.06 measured the fraction at TWO rows out of 486
 * before it landed. This lesson imports out of SEVEN themes, and a lesson whose
 * itemIds resolve to nothing renders empty cards, so every imported row is
 * carried explicitly and the prediction is written down BEFORE the measurement
 * so the surprise check can fail.
 *
 * ── AND THE FOUR ROWS THAT ARE BOTH AN IMPORT AND A REPAIR ─────────────────
 *
 * a2.24 had ONE and called it the case with no precedent in the band. This build
 * has FOUR, because the corpus breaks the nasal of the pronoun `en` on almost
 * every row that carries one, and three of the four are the rows this lesson
 * reads its own respellings off. They arrive repaired by the CARRY path.
 *
 * The fifth repair, `fr.b1.verbes.083`, is a second `penser` row this lesson does
 * NOT import; it is repaired in Postgres only and listed below so a later
 * `content:parity` run has the reason to hand.
 */
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { DRILL_KINDS, formatIssues, quizQuestions, validateItem, validateLesson } from '../../ealch-v2/src/content/schema.ts';
import type { Item, Lesson } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import {
  A_FRAMING, A_FRAMING_COUNT, A_FRAMING_MINE, AUTHORED_IDS, DE_FRAMING,
  EN_POSITION_RULE, EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_QUESTIONS,
  EXPECTED_SECTIONS, FROZEN_RULE, IMPORTED, IMPORTED_PHRASES, MUST_RULE,
  ORDER_RULE, OWNS_SECTION_COUNT, PARADIGM_SECTION_COUNT, POSITION_RULE,
  POSITION_RULE_COUNT, REFRAME, REFRAME_COUNT, RESPELL_REPAIRS, ROWS, THEME,
  UNIT,
} from './data/y-en-corpus.ts';
import { Y_EN_LESSON } from './data/y-en-lesson.ts';
import { IMPORTED_IDS } from './data/y-en-imported.ts';
import { Y_EN_IMPORT_ROWS } from './data/y-en-rows.gen.ts';

type Unit = { id: string; seq?: number; title?: string; sub?: string; canDo?: string; lessonIds?: string[] };
type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };

const DRY_RUN = process.argv.includes('--dry-run');
const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const die: (m: string) => never = (m) => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const LESSON: Lesson = Y_EN_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = ROWS.map(({ bucket, pro, prepEn, ...rest }) => rest as Item);

/** WRITTEN BEFORE THE MEASUREMENT. a2.05 §6: the check is the deliverable, not
 *  the prediction, and five builds running got the cut wrong in both directions.
 *
 *  REASONED rather than measured, on 2026-08-15, from what the neighbours
 *  carried: a2.06 and a2.24 put their own `pronoms-essentiels` rows in the cut
 *  and nothing older; a2.04 and a2.18 put their own `prepositions-essentielles`
 *  rows in; a2.24 carried six `verbes-essentiels` rows and none of these seven. */
const PREDICTED_ABSENT: readonly string[] = [
  /* The seven verbs: none of them is one a2.24 carried. */
  'fr.sons.verbes-essentiels.003', 'fr.sons.verbes-essentiels.020',
  'fr.sons.verbes-essentiels.023', 'fr.sons.verbes-essentiels.007',
  'fr.sons.verbes-essentiels.002', 'fr.a1.cuisine.042', 'fr.sons.verbes-essentiels.012',
  /* The six-row set: published years ago, in a theme whose cut a2.06 measured at
   * TWO rows before it landed. */
  'fr.a2.pronoms-essentiels.028', 'fr.a2.pronoms-essentiels.029',
  'fr.a2.pronoms-essentiels.030', 'fr.a2.pronoms-essentiels.031',
  'fr.a2.pronoms-essentiels.032', 'fr.a2.pronoms-essentiels.033',
  /* And the four out of themes no lesson in this block has touched. */
  'fr.sons.expressions-utiles.158', 'fr.a2.rp-voyage.007',
  'fr.a1.cuisine.268', 'fr.a1.cafe.151', 'fr.a1.expressions-de-quantite.001',
  'fr.sons.jours-et-mois.081',
];

/** Repaired in Postgres and NOT in the seed cut, so not carried. ONE, because
 *  the other four repairs are also imports and arrive repaired by the CARRY
 *  path. */
const REPAIRED_NOT_IN_SEED: readonly string[] = ['fr.b1.verbes.083'];

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const UNITS_BEFORE = seed.units.length;
const SEED_VERSION_BEFORE = seed.version;
const ITEMS_BEFORE = seed.items.length;

/** NAMED, NOT COUNTED. Invariants §5: a count alone lets a one-for-one swap
 *  through, and this project has lost a lesson that way. */
const MUST_NOT_DISTURB: string[] = seed.lessons.map((l) => l.id).filter((id) => id !== LESSON.id).sort();

/** Every row this merge is allowed to write. */
const OWNED = new Set<string>([
  ...AUTHORED_IDS,
  ...IMPORTED_IDS,
  ...RESPELL_REPAIRS.map((r) => r.id),
]);
const UNTOUCHED_BEFORE = new Map<string, string>(
  seed.items.filter((i) => !OWNED.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);
const A103_SEED_POPULATION = endingPopulation(seed.items as never).length;

/* ─── Guards that run on the source, before anything is written ───────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`${AUTHORED_ITEMS.length} rows and EXPECTED_AUTHORED is ${EXPECTED_AUTHORED}.`);
{
  const issues = validateLesson(LESSON);
  if (issues.length) die(`the lesson does not validate:\n${formatIssues(issues)}`);
}
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections.`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts.`);
if (LESSON.reframe !== REFRAME) die('Lesson.reframe has drifted from the corpus file.');
if (OWNS_SECTION_COUNT <= PARADIGM_SECTION_COUNT) die('the paradigm outweighs the Owns.');
const qs = quizQuestions(LESSON.sections.find((s) => s.type === 'quiz') as Parameters<typeof quizQuestions>[0]);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions.`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('there is not exactly one quiz section.');

/** THE THREE RULE COUNTS, RE-ASSERTED IN THE MERGE. Corrections §9: a guard that
 *  only lives in the batch does not protect the seed.
 *
 *  The walk is the WIDENED one a2.24 introduced: `drill` and `retest` are skipped
 *  only when they hold a STRING, so a stepped trapDrill's gated drill reaches it.
 *  Every other lesson in this band except a2.24 skips it outright. */
{
  const MACHINE = new Set(['id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn',
    'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId', 'clipIds', 'restPoints']);
  const ID_WHEN_STRING = new Set(['drill', 'retest']);
  const isId = (s: string) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);
  const walk = (v: unknown, out: string[] = []): string[] => {
    if (typeof v === 'string') { if (!isId(v)) out.push(v); }
    else if (Array.isArray(v)) for (const x of v) walk(x, out);
    else if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        if (MACHINE.has(k)) continue;
        if (ID_WHEN_STRING.has(k) && typeof x === 'string') continue;
        walk(x, out);
      }
    }
    return out;
  };
  const surface = [
    ...walk(LESSON.sections), ...walk(LESSON.sheets ?? []), ...walk(LESSON.terms ?? {}),
    ...walk(LESSON.acts ?? []), ...walk(LESSON.drills ?? []), ...walk(LESSON.errorTriggers ?? []),
    ...walk(LESSON.audio ?? {}), ...walk(LESSON.overview ?? {}), LESSON.intro ?? '', LESSON.reframe ?? '',
  ];
  const n = surface.filter((s) => s.includes(REFRAME)).length;
  if (n !== REFRAME_COUNT) die(`the reframe is authored ${n} times and REFRAME_COUNT is ${REFRAME_COUNT}.`);
  const p = surface.filter((s) => s.includes(POSITION_RULE)).length;
  if (p !== POSITION_RULE_COUNT) die(`a2.06's position rule is quoted ${p} times and POSITION_RULE_COUNT is ${POSITION_RULE_COUNT}.`);
  const a = surface.filter((s) => s.includes(A_FRAMING)).length;
  if (a !== A_FRAMING_COUNT) die(`a2.24's à framing is quoted ${a} times and A_FRAMING_COUNT is ${A_FRAMING_COUNT}.`);
  /* THE CLAIMS THE MERGE IS NOT ALLOWED TO LOSE. */
  for (const [what, line] of [
    ['what y replaces', A_FRAMING_MINE], ['what en replaces', DE_FRAMING],
    ['the obligatory rule', MUST_RULE], ['the position distinguisher', EN_POSITION_RULE],
    ['the frozen rule', FROZEN_RULE], ['the order rule', ORDER_RULE],
  ] as const) {
    if (!surface.some((s) => s.includes(line))) die(`${what} is gone from the seed body: « ${line} »`);
  }
  /* `intro` IS PINNED HERE TOO. Corrections §9. */
  if (!/little word/iu.test(LESSON.intro ?? '')) die('the intro no longer names the thing that goes inside.');
}

/** `drills` is written to the seed SORTED and to Postgres VERBATIM. */
const drillOrder = (d: Item['drills']): Item['drills'] =>
  [...d].sort((a, b) => DRILL_KINDS.indexOf(a) - DRILL_KINDS.indexOf(b));
for (const it of AUTHORED_ITEMS) {
  if (JSON.stringify(drillOrder(it.drills)) !== JSON.stringify(it.drills)) {
    die(`${it.id} declares drills out of DRILL_KINDS order, which IS seed/Postgres drift.`);
  }
}

/* ─── The write, into an id-keyed map ─────────────────────────────────────── */

const itemsById = new Map<string, Item>(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;

for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id} does not validate:\n${formatIssues(issues)}`);
  if (it.theme !== THEME) die(`${it.id} is in theme "${it.theme}".`);
  if (hasPlainNasalFor(it.fr, it.respell ?? '')) die(`${it.id} closes a nasal with a plain n or m.`);
  if (itemsById.has(it.id)) updatedItems += 1; else added += 1;
  itemsById.set(it.id, it);
}

/* CARRY. Corrections §10: the seed is a CUT and a lesson whose itemIds resolve
 * to nothing renders empty cards. Every imported row is carried, with the
 * REPAIRED respelling where this build repairs one — which for four of the five
 * repairs is the only way they reach the seed at all. */
const CARRIED: Item[] = [];
let carriedNew = 0;
const repairById = new Map(RESPELL_REPAIRS.map((r) => [r.id, r] as const));
for (const raw of Y_EN_IMPORT_ROWS) {
  const rep = repairById.get(raw.id);
  const it: Item = rep ? { ...raw, respell: rep.to } : raw;
  const issues = validateItem(it);
  if (issues.length) die(`carried row ${it.id} does not validate:\n${formatIssues(issues)}`);
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`carried row ${it.id} is flagged.`);
  if (!itemsById.has(it.id)) carriedNew += 1;
  itemsById.set(it.id, it);
  CARRIED.push(it);
}

/* THE REPAIRS THAT ARE ALREADY IN THE CUT. */
const repairedInSeed: string[] = [];
for (const rep of RESPELL_REPAIRS) {
  const existing = itemsById.get(rep.id);
  if (!existing) {
    if (!REPAIRED_NOT_IN_SEED.includes(rep.id)) {
      die(`${rep.id} is repaired, absent from the seed, and NOT on REPAIRED_NOT_IN_SEED. `
        + 'The cut has moved; re-measure rather than editing the list.');
    }
    continue;
  }
  if (REPAIRED_NOT_IN_SEED.includes(rep.id)) {
    die(`${rep.id} is on REPAIRED_NOT_IN_SEED and IS in the seed. The cut has moved; re-measure.`);
  }
  if (existing.respell !== rep.to) {
    itemsById.set(rep.id, { ...existing, respell: rep.to });
    repairedInSeed.push(rep.id);
  }
}
/* AND THE FOUR THAT ARRIVED BY THE IMPORT PATH LANDED REPAIRED. */
for (const rep of RESPELL_REPAIRS) {
  if (!IMPORTED_IDS.includes(rep.id)) continue;
  const row = itemsById.get(rep.id);
  if (!row) die(`${rep.id} is imported and was not carried.`);
  if (row!.respell !== rep.to) die(`the carried row ${rep.id} holds « ${row!.respell} » and the repair wanted « ${rep.to} ».`);
}

/* THE SURPRISE CHECK. The prediction is what makes this able to fail. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const reallyAbsent = IMPORTED_IDS.filter((id) => !before.has(id)).sort();
  const predicted = [...PREDICTED_ABSENT].sort();
  const missed = reallyAbsent.filter((id) => !predicted.includes(id));
  const wrong = predicted.filter((id) => !reallyAbsent.includes(id));
  console.log(`  seed cut      predicted ${predicted.length} absent of ${IMPORTED_IDS.length}, measured ${reallyAbsent.length}`);
  if (missed.length) console.log(`    NOT PREDICTED and absent: ${missed.join(', ')}`);
  if (wrong.length) console.log(`    predicted absent and PRESENT: ${wrong.join(', ')}`);
  if (!missed.length && !wrong.length) console.log('    the prediction held exactly');
}

/* ─── Post-merge invariants ───────────────────────────────────────────────── */

for (const id of LESSON.itemIds ?? []) if (!itemsById.has(id)) die(`lesson.itemIds holds ${id}, which is not in the merged seed.`);
for (const s of LESSON.sections) {
  for (const id of (s as { itemIds?: string[] }).itemIds ?? []) {
    if (!itemsById.has(id)) die(`${s.id} names ${id}, which is not in the merged seed. The card would draw blank.`);
  }
}
{
  const dictee = (LESSON.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] })?.itemIds ?? [];
  for (const id of dictee) {
    const r = itemsById.get(id)!;
    if (dicteeMode(r.fr) !== 'letters') die(`the dictée targets « ${r.fr} », which dicteeMode puts in WORD mode.`);
    if (!r.drills.includes('dictation')) die(`${id} is a dictée target with no dictation drill.`);
  }
  const speak = (LESSON.sections.find((s) => s.type === 'practice') as { itemIds?: string[] })?.itemIds ?? [];
  for (const id of speak) {
    const r = itemsById.get(id)!;
    if (!r.drills.includes('voiceflash')) die(`${id} is on the speak surface and carries no voiceflash drill.`);
  }
}
/* NO DUPLICATE fr INSIDE THE THEME, computed the way flashhub-coverage does.
 * IT BIT THIS BUILD: the first draft authored « J'y pense. » and the theme
 * already publishes it as a phrase card, so the flashcard hub would have served
 * one card twice. */
{
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/iu, '').toLowerCase().replace(/[.,!?;:«»"]/gu, '').trim();
  const inTheme = [...itemsById.values()].filter((i) => i.theme === THEME);
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
for (const k of ['seq', 'title', 'sub', 'canDo'] as const) {
  if (String((seedUnit as unknown as Record<string, unknown>)[k]) !== String(UNIT[k])) {
    die(`the seed's unit ${k} is « ${String((seedUnit as unknown as Record<string, unknown>)[k])} » and the corpus file claims « ${String(UNIT[k])} ».`);
  }
}
/* BOTH PREREQUISITES ARE SHIPPED IN THE SEED TOO, not just in Postgres. a2.24 is
 * the declared one; a2.06 is the head of the block and this lesson quotes its
 * rule six times. */
for (const p of [...UNIT.prereqUnitIds, 'a2.06']) {
  const pu = seed.units.find((u) => u.id === p);
  if (!pu) die(`${p} is a hard prerequisite and is not in the seed.`);
  if (!(pu!.lessonIds ?? []).length) die(`${p} is a hard prerequisite and has no lesson in the seed.`);
  for (const lid of pu!.lessonIds ?? []) {
    if (!seed.lessons.some((l) => l.id === lid)) die(`${p} lists ${lid} and the seed does not hold it.`);
  }
}
const nextUnit: Unit = { ...seedUnit!, lessonIds: [...new Set([...(seedUnit!.lessonIds ?? []), LESSON.id])] };

const out: Seed = {
  ...seed,
  items: [...itemsById.values()],
  lessons: [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON],
  units: seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u)),
};

{
  const dens = validateDensity(LESSON, new Set(out.items.map((i) => i.id)));
  if (dens.length) die(`the lesson fails density against the merged seed:\n${formatDensity(dens)}`);
}

/* ─── Nothing else moved ──────────────────────────────────────────────────── */

const survivors = out.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lost = MUST_NOT_DISTURB.filter((id) => !survivors.includes(id));
if (lost.length) die(`this merge would DROP lesson(s): ${lost.join(', ')}`);
const gained = survivors.filter((id) => !MUST_NOT_DISTURB.includes(id));
if (gained.length) die(`this merge would ADD lesson(s) it does not own: ${gained.join(', ')}`);
if (out.units.length !== UNITS_BEFORE) die(`unit count moved from ${UNITS_BEFORE} to ${out.units.length}`);
if (out.version !== SEED_VERSION_BEFORE) die('seed.version moved. It is the OTA snapshot number and a merge must never touch it.');

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
  + '\n    ZERO headwords authored, ZERO gendered rows, ZERO duplicate fr inside the theme.'
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${new Set(CARRIED.map((r) => r.theme)).size} themes: ${IMPORTED.length} verbs, ${IMPORTED_PHRASES.length} phrases and 12 published sentences`
  + `\n  ${repairedInSeed.length} respelling(s) repaired IN THE SEED: ${repairedInSeed.join(', ') || 'none'}`
  + `\n    ${RESPELL_REPAIRS.filter((r) => IMPORTED_IDS.includes(r.id)).length} more arrived repaired by the CARRY path, where a2.24 had one`
  + `\n    ${REPAIRED_NOT_IN_SEED.length} repaired in Postgres only, outside the cut and not carried`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${(LESSON.itemIds ?? []).length} items`
  + `\n  the Owns ${OWNS_SECTION_COUNT} sections against the paradigm's ${PARADIGM_SECTION_COUNT}`,
);

if (DRY_RUN) {
  console.log('\n  DRY RUN: every guard passed, seed.json not written.\n');
} else {
  /* CANONICAL FORMATTING. `JSON.stringify(x, null, 2)` with a trailing newline is
     the shape every other merge writes. */
  writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
  console.log(`\n  wrote ${SEED}`);
  console.log(`  seed now: ${out.items.length} items (was ${ITEMS_BEFORE}), ${out.lessons.length} lessons, ${out.units.length} units, version ${out.version} (unchanged)\n`);
  console.log('  NEXT: run the suite, then pnpm content:parity before any publish.\n');
}
