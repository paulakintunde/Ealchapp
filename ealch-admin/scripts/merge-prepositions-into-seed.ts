/* a1.21 "Prépositions de lieu" → seed.json.
 *
 *   pnpm tsx scripts/merge-prepositions-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-prepositions-into-seed.ts
 *
 * Run AFTER author-prepositions-batch.ts. Postgres first, seed second, publish
 * only when both agree.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  THE BRIEF HAS THE SEED CUT BACKWARDS AND FOLLOWING IT SHIPS BLANK CARDS.
 * ══════════════════════════════════════════════════════════════════════════
 *
 * A1-21-PREPOSITIONS-PLACE-PROMPT.md says:
 *
 *     "prepositions-essentielles is outside SEED_CUT.themes, so imported rows
 *      will not appear in the seed. Correct behaviour, not a failed merge...
 *      A merge that leaves the seed unchanged for these rows is behaving
 *      correctly and your report should say so before somebody investigates it
 *      as a bug."
 *
 * That is wrong, and it is the kind of wrong that ships. `SEED_CUT` governs what
 * `publish-content.ts` REGENERATES from the database. It does not stop a merge
 * writing the rows a lesson needs, and if the rows are absent the lesson's cards
 * render EMPTY, which nothing in the suite would otherwise report.
 *
 * Measured in seed.json on 2026-08-07, every out-of-cut theme on this track
 * carries its lesson's rows:
 *
 *     couleurs                  48 rows      (a1.13, out of cut)
 *     meteo                     25 rows      (a1.10, out of cut)
 *     adjectifs-essentiels      92 rows      (a1.16, out of cut)
 *     negation-et-restriction   33 rows      (a1.18, out of cut)
 *     pays-et-nationalites      48 rows      (a1.22, out of cut)
 *     prepositions-essentielles  0 rows      because no lesson has merged yet
 *
 * a1.18's own test says it plainly: "negation-et-restriction is NOT in
 * SEED_CUT.themes, so all eighteen of these had to be CARRIED by the merge. If
 * one is missing it renders as an empty card and nothing else in the suite would
 * say so."
 *
 * So this merge CARRIES all 62 rows, and a1-21-prepositions.test.ts asserts
 * every one is present afterwards.
 *
 * ── The other thing this script will not do ────────────────────────────────
 *
 * It never touches `seed.version`. That is the OTA snapshot number, derived by
 * publish-content.ts as previous + 1, and `content.ts` compares it against the
 * downloaded manifest to decide whether to adopt an update. The counter this
 * merge moves is the LESSON's own `version`, printed as "replacing vX with vY".
 */
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import type { Item, Lesson, Unit } from '../../ealch-v2/src/content/schema.ts';
import { validateItem, validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AUTHORED_SENTENCES, AUTHORED_WORDS, ENTRE_REPAIR, PREPOSITIONS, REPAIRS,
  THE_FIVE, toItem,
} from './data/prepositions-corpus.ts';
import { IMPORTED } from './data/prepositions-imported.ts';
import { IMPORTED_ROWS } from './data/prepositions-rows.gen.ts';
import { PREPOSITIONS_LESSON } from './data/prepositions-lesson.ts';
import { REFRAME } from './data/prepositions-terms.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const UNIT_ID = 'a1.21';
const UNIT_THEMES = ['prepositions-essentielles'];
const EXPECTED_AUTHORED = 25;   // 23 sentences + 2 headwords
const REFRAME_APPEARANCES = 8;

type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

const AUTHORED: Item[] = [...AUTHORED_SENTENCES.map(toItem), ...AUTHORED_WORDS];
const LESSON = PREPOSITIONS_LESSON;

console.log(`→ ${SEED}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');

/* ─── The neighbours this merge must not disturb ────────────────────────────
 *
 * NAMED, not counted. A count alone lets a one-for-one swap through: drop a
 * neighbour, add your own, and the total is unchanged. Invariant §5.
 *
 * a1.18 and a1.22 are at the top because BOTH LANDED DURING THIS BUILD, ninety
 * minutes apart, and neither existed when the brief was written. If a merge ever
 * drops one, this is where it shows up.                                       */
const NEIGHBOURS: Record<string, string> = {
  'a1.22.l1': 'Pays & nationalités, which landed mid-build at 02:01 on 2026-08-07 and owns en + country. This lesson deliberately teaches none of that ground.',
  'a1.18.l1': 'La négation, which also landed mid-build and was listed as NOT BUILT by this lesson\'s brief.',
  'a1.29.l1': 'Les articles partitifs, which already owns de + le = du and whose s14-other-du this lesson extends rather than repeats.',
  'a1.11.l1': 'Les articles indéfinis, which owns the des that collides with this lesson\'s de + les.',
  'a1.04.l1': 'Les articles définis, the prerequisite this unit should declare and does not: without le/la/les not one sentence here is formable.',
  'a1.06.l1': 'Le verbe être, which every production surface in this lesson is built on.',
  'a1.07.l1': 'Le verbe avoir, which owns the a that this lesson contrasts with à.',
  'a1.03.l1': 'Le genre des noms, whose twenty printed ending figures this lesson must not move.',
  'a1.17.l1': 'Les adjectifs possessifs, the quality bar and the source of several imported sentences.',
  'sons.05.l1': 'Les accents, which owns à at fr.sons.accents.034 and has that row\'s respelling repaired by this lesson.',
};

const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
for (const [id, why] of Object.entries(NEIGHBOURS)) {
  if (!OTHER_LESSON_IDS.includes(id)) die(`neighbour ${id} is missing from the seed BEFORE this merge runs: ${why}`);
}
console.log(`  ${OTHER_LESSON_IDS.length} other lessons present, ${Object.keys(NEIGHBOURS).length} of them named explicitly`);

/* ─── Everything the batch checked, re-checked here ────────────────────────
 *
 * Not redundant: the batch validates what goes to Postgres and this validates
 * what goes to the device. The two can drift, and the seed is what ships.     */

console.log('\n── schema ──');
for (const it of AUTHORED) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id}: ${JSON.stringify(issues)}`);
}
{
  const issues = validateLesson(LESSON);
  if (issues.length) die(`lesson: ${JSON.stringify(issues)}`);
}
console.log(`  ${AUTHORED.length} authored items and the lesson validate`);

console.log('\n── reframe ──');
{
  const blob = JSON.stringify(LESSON);
  const n = blob.split(REFRAME).length - 1;
  if (n < 3) die(`reframe appears ${n} times; the density validator requires it verbatim in at least three sections`);
  console.log(`  "${REFRAME}" present ${n} times in the serialised lesson`);
}

console.log('\n── density ──');
{
  const known = new Set<string>([
    ...seed.items.map((i) => i.id),
    ...AUTHORED.map((i) => i.id),
    ...IMPORTED.map((i) => i.id),
    ...PREPOSITIONS.map((p) => p.headwordId),
  ]);
  const issues = validateDensity(LESSON, known);
  if (issues.length) die(`density:\n${formatDensity(issues)}`);
  console.log('  no density issues');
}

console.log('\n── autoplay ──');
if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is declared in schema.ts and implemented in NO component. Use audioFirst.');
}
console.log('  no autoplay authored');

/* ─── The rows this merge carries ──────────────────────────────────────────
 *
 * Authored rows come from the corpus file. Imported rows come from
 * prepositions-rows.gen.ts, which is a RECORDED READ of Postgres produced by
 * scripts/_prepositions_manifest.ts.
 *
 * NOT FABRICATED, and the first draft of this script did fabricate them: it
 * invented `drills`, dropped `respell` and `ipa`, and would have written a
 * `dans` headword into the seed with NO RESPELLING AT ALL while the repair loop
 * cheerfully reported "nothing to repair here". Every field is now reproduced
 * exactly as stored, which is what a1.13 does and why it does it.             */

console.log('\n── rows to carry ──');
const seedById = new Map(seed.items.map((i) => [i.id, i]));

// The generated manifest must cover every id the lesson imports.
{
  const have = new Set(IMPORTED_ROWS.map((r) => r.id));
  const wanted = [
    ...IMPORTED.map((r) => r.id),
    ...PREPOSITIONS.filter((p) => p.origin === 'imported').map((p) => p.headwordId),
  ];
  const gap = [...new Set(wanted)].filter((id) => !have.has(id));
  if (gap.length) {
    die(`prepositions-rows.gen.ts is stale, ${gap.length} id(s) missing:\n  ${gap.join('\n  ')}\n  Re-run: pnpm tsx scripts/_prepositions_manifest.ts`);
  }
}
// And the curation manifest's own copy of `fr` must agree with the recorded read.
for (const imp of IMPORTED) {
  const rec = IMPORTED_ROWS.find((r) => r.id === imp.id)!;
  if (rec.fr !== imp.fr) die(`${imp.id}: curation manifest says "${imp.fr}", recorded read says "${rec.fr}"`);
  const inSeed = seedById.get(imp.id);
  if (inSeed && inSeed.fr !== imp.fr) die(`${imp.id} in the seed says "${inSeed.fr}", the manifest says "${imp.fr}"`);
}

const alreadyPresent = IMPORTED_ROWS.filter((r) => seedById.has(r.id)).length;
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTED_ROWS];
console.log(`  ${AUTHORED.length} authored (${AUTHORED_SENTENCES.length} sentences, ${AUTHORED_WORDS.length} headwords)`);
console.log(`  ${IMPORTED_ROWS.length} imported rows from the recorded read (${alreadyPresent} already in the seed, refreshed in place)`);
console.log(`  ${NEW_ITEMS.length} rows total`);
if (AUTHORED.length !== EXPECTED_AUTHORED) die(`authored rows ${AUTHORED.length}, expected ${EXPECTED_AUTHORED}`);
{
  // `drills` and `tags` must be real ARRAYS. node-postgres has no parser for a
  // user-defined enum array, so a manifest generated without an explicit
  // ::text[] cast carries the Postgres literal string "{dictation}" instead of
  // ["dictation"]. That shipped into seed.json for 49 rows and broke
  // seed.backcompat.test.ts 49 times with "drills must be an array". Caught here
  // as well as fixed at the source, because the next generated manifest on this
  // track will hit the same trap.
  const shapeBad = IMPORTED_ROWS.filter((r) => !Array.isArray(r.drills) || !Array.isArray(r.tags));
  if (shapeBad.length) {
    die(`${shapeBad.length} imported row(s) carry a non-array drills or tags, which means the manifest was generated without an explicit ::text[] cast:\n  ${shapeBad.slice(0, 3).map((r) => `${r.id} drills=${JSON.stringify(r.drills)}`).join('\n  ')}\n  Re-run: pnpm tsx scripts/_prepositions_manifest.ts`);
  }

  const noRespell = IMPORTED_ROWS.filter((r) => r.kind !== 'sentence' && !r.respell
    && !REPAIRS.some((x) => x.id === r.id));
  if (noRespell.length) {
    die(`${noRespell.length} imported headword(s) would reach the seed with no respelling and no repair to give them one:\n  ${noRespell.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}`);
  }
  console.log(`  every imported headword carries a respelling or a repair that supplies one`);
}

/* ─── Respelling repairs, applied to the seed's own copies ─────────────────
 *
 * A repair applied to Postgres and not to the seed is a repair the device never
 * sees, because the bundled seed is what a fresh install reads.               */
console.log('\n── respelling repairs, in the seed ──');
{
  // Checked against the POST-MERGE row set, not the pre-merge seed. Four of the
  // five targets are absent from the seed today and ARRIVE with this merge as
  // carried imports, so "not in the seed" was true before the carry and
  // misleading after it. What matters is whether the repaired value ships.
  const postMerge = new Map<string, Item>([
    ...seed.items.map((i) => [i.id, i] as const),
    ...NEW_ITEMS.map((i) => [i.id, i] as const),
  ]);
  let willShip = 0;
  let notShipped = 0;
  for (const r of REPAIRS) {
    if (hasPlainNasalFor(r.fr, r.now)) die(`the repair for ${r.fr} (${r.now}) is itself flagged`);
    const row = postMerge.get(r.id);
    if (!row) {
      notShipped++;
      console.log(`  ${r.id.padEnd(34)} ${r.fr.padEnd(10)} not in the seed after the merge: repaired in Postgres only`);
      continue;
    }
    if (row.fr !== r.fr) die(`repair target ${r.id} says "${row.fr}", not "${r.fr}"`);
    console.log(`  ${r.id.padEnd(34)} ${r.fr.padEnd(10)} ${r.was.padEnd(10)} → ${r.now}`);
    willShip++;
  }
  console.log(`  ${willShip} repair(s) reach the device through the seed, ${notShipped} live in Postgres only`);
  // The one no shared checker can defend.
  if (ENTRE_REPAIR.now !== 'AHⁿ-truh') die(`entre repair changed to ${ENTRE_REPAIR.now}; hand-verify before editing`);
  if (/[^ⁿ]n/i.test(ENTRE_REPAIR.now)) die(`the entre repair contains a plain n: ${ENTRE_REPAIR.now}`);
  console.log('  entre asserted by hand: the shared checker cannot separate AHNTR from the repair');
}

/* ─── a1.03's ending population, against the POST-MERGE item set ───────────*/
console.log('\n── a1.03 ending population ──');
{
  const before = endingPopulation(seed.items).length;
  const merged = [...seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)), ...NEW_ITEMS];
  const after = endingPopulation(merged).length;
  if (before !== after) {
    die(`endingPopulation moves ${before} → ${after}. a1-03-genre.test.ts re-measures twenty printed figures from the SEED on every run.`);
  }
  console.log(`  ${before} rows before and after`);
}

/* ─── The dictée and the free-text answers, against the post-merge set ─────*/
console.log('\n── dictée and free text ──');
{
  const sec = LESSON.sections.find((s) => s.type === 'dictation') as { itemIds: string[] };
  for (const id of sec.itemIds) {
    const row = AUTHORED_SENTENCES.find((s) => s.id === id);
    if (!row) die(`dictation target ${id} is not an authored row`);
    if (dicteeMode(row.fr) !== 'letters') die(`${id} would render in word mode and hand the learner the preposition on a tile`);
  }
  const quiz = LESSON.sections.find((s) => s.type === 'quiz') as never;
  for (const q of quizQuestions(quiz) as { format?: string; accept?: string[]; answer?: string; q: string }[]) {
    if (!['typeIn', 'errorSpot', 'speak'].includes(q.format ?? '')) continue;
    if (!matchesAccept(q.answer!, q.accept!)) die(`the displayed answer is not accepted: ${q.q}`);
  }
  console.log(`  ${sec.itemIds.length} dictée targets in letters mode, every free-text answer accepted`);
}

/* ─── Every taught item is reachable in the post-merge seed ────────────────*/
console.log('\n── reachability ──');
{
  const merged = new Set([...seed.items.map((i) => i.id), ...NEW_ITEMS.map((i) => i.id)]);
  const missing = (LESSON.itemIds ?? []).filter((id) => !merged.has(id));
  if (missing.length) {
    die(`${missing.length} declared itemId(s) will not exist in the seed and would render as empty cards:\n  ${missing.join('\n  ')}`);
  }
  console.log(`  all ${(LESSON.itemIds ?? []).length} declared itemIds resolve in the post-merge seed`);
}

/* ─── The five, taught by name ─────────────────────────────────────────────*/
{
  const blob = JSON.stringify(LESSON);
  for (const w of THE_FIVE) {
    if (!blob.includes(w)) die(`the canDo names "${w}" and the lesson does not carry it`);
  }
}

/* ─── The unit ─────────────────────────────────────────────────────────────*/
console.log('\n── unit ──');
const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);
const themesNow = (unit as { themes?: string[] | null }).themes ?? null;
const nextUnit: Unit = {
  ...unit,
  themes: UNIT_THEMES,
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
} as Unit;

/* ─── Write ────────────────────────────────────────────────────────────────*/
const existingLesson = seed.lessons.find((l) => l.id === LESSON.id);
const nextItems = [
  ...seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)),
  ...NEW_ITEMS,
].map((i) => {
  const repair = REPAIRS.find((r) => r.id === i.id);
  return repair ? { ...i, respell: repair.now } : i;
});

const next: Seed = {
  ...seed,
  // NOT touched. seed.version is the OTA snapshot number.
  version: seed.version,
  items: nextItems,
  lessons: [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON],
  units: seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u)),
};

// The named neighbours must all survive.
{
  const after = new Set(next.lessons.map((l) => l.id));
  for (const [id, why] of Object.entries(NEIGHBOURS)) {
    if (!after.has(id)) die(`this merge would DROP ${id}: ${why}`);
  }
  const lost = OTHER_LESSON_IDS.filter((id) => !after.has(id));
  if (lost.length) die(`this merge would drop lesson(s): ${lost.join(', ')}`);
}

console.log(`  themes:    ${JSON.stringify(themesNow)} → ${JSON.stringify(nextUnit.themes)}`);
console.log(`  lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  prereqUnitIds: ${JSON.stringify((unit as { prereqUnitIds?: unknown }).prereqUnitIds ?? null)} (UNCHANGED; recommend ["a1.04"])`);
console.log(`\n  lesson ${LESSON.id}: ${existingLesson ? `replacing v${(existingLesson as { version?: number }).version} with v${LESSON.version}` : `NEW at v${LESSON.version}`}`);
console.log(`  seed.version stays at ${seed.version} (it is the OTA snapshot number, not this merge's counter)`);
console.log(`  items ${seed.items.length} → ${nextItems.length}`);
console.log(`  prepositions-essentielles in seed: ${seed.items.filter((i) => i.theme === 'prepositions-essentielles').length} → ${nextItems.filter((i) => i.theme === 'prepositions-essentielles').length}`);
console.log(`\n  The theme is OUTSIDE SEED_CUT.themes and the rows are carried ANYWAY, which is`);
console.log(`  what every out-of-cut lesson on this track does. See the header: the brief says`);
console.log(`  the opposite and following it would ship a lesson of empty cards.`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

// Canonical formatting: JSON.stringify(x, null, 2) with a trailing newline.
writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated: ${NEW_ITEMS.length} rows, lesson ${LESSON.id} v${LESSON.version}, unit ${UNIT_ID} bound.`
  + `\n  Next: cd ../ealch-v2 && node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"`
  + `\n  Do NOT run pnpm content:publish unless Postgres and the seed agree.\n`,
);
