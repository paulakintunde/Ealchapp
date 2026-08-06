// Merge the authored a1.02 content into the committed seed.json.
//
// ── Why this is a merge and not `pnpm content:publish` ─────────────────────
//
// author-nombres-batch.ts writes to POSTGRES, which is the source of truth, and
// `pnpm content:publish` then regenerates seed.json from it. That is the
// correct pipeline and this script does not replace it.
//
// But the app READS seed.json, and so do the tests. lesson-contract.test.ts is
// the gate that checks every lesson in the seed, and a1-02-nombres.test.ts
// self-skips its seed assertions when the lesson is absent. Until the seed
// carries this lesson it is invisible to a learner and to the gate.
//
// So this script does the seed-direct half, deliberately and visibly:
//
//   author-nombres-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-nombres-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// A publish today would still destroy content unrelated to this lesson. Run
// `pnpm content:parity` and it says so: sons.09.l1 is in the seed and not in
// Postgres, so regenerating the seed from the database deletes the masterclass.
// Merging touches this lesson, its two new items and its unit, and nothing
// else, which is the only safe move while that split is open.
//
// ── The hazard this script is careful about (incident 2026-07-31) ──────────
//
// Writing seed.json directly makes git run AHEAD of Postgres. publish-content
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that happens BEFORE the batch has been applied silently deletes this
// lesson from the seed. That is not hypothetical: it is what happened to
// sons.03.l1, which lost fourteen sections, and to sons.07.l1, which survived
// only because its source files were intact.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-nombres-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-nombres-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  validateUnit,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { NOMBRES } from './data/nombres-corpus.ts';
import { NOMBRES_LESSON, REFRAME } from './data/nombres-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

type Seed = { items: Item[]; lessons: Lesson[]; units: Unit[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const NEW_ITEMS = NOMBRES;
const LESSON = NOMBRES_LESSON;
const UNIT_ID = LESSON.unitId;

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own two items and its lesson and leaves
// everything else alone. So both counts can only go UP, and a run that would
// reduce either means the file changed underneath it.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read: a concurrent
// process added sons.07's items to seed.json between two runs of the accents
// merge, and the second run wrote back a state that no longer had them.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone lets a one-for-one swap through: drop sons.09, gain something else,
// same total.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/* ── Validate before writing anything ──────────────────────────────────── */

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const newIds = NEW_ITEMS.map((i) => i.id);
const dupeIds = newIds.filter((id, i) => newIds.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in the corpus: ${[...new Set(dupeIds)].join(', ')}`);

// Two entries teaching the same WORD in one theme is the .057 incident: the
// flashcard hub keys decks on `fr`, so a duplicate serves the same card twice
// and takes two SRS ratings for one word. Checked against the whole theme as it
// stands in the seed, not just against this batch, because the words this
// lesson adds are exactly the ones most likely to already be somewhere.
const fold = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
for (const it of NEW_ITEMS) {
  const prior = seed.items.find(
    (r) => r.theme === it.theme && r.kind !== 'sentence' && r.id !== it.id && fold(r.fr) === fold(it.fr)
  );
  if (prior) die(`"${it.fr}" is already in the ${it.theme} theme as ${prior.id} — reference it instead of authoring ${it.id}`);
}

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

// Every id the lesson names must resolve once the merge is done: against this
// batch, or against something already in the seed. An id that dangles renders
// as an empty card rather than erroring.
const willExist = new Set([...seed.items.map((i) => i.id), ...newIds]);
const dangling = LESSON.itemIds.filter((id) => !willExist.has(id));
if (dangling.length) die(`lesson names items that will not exist:\n  ${dangling.join('\n  ')}`);

const density = validateDensity(LESSON, willExist);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House style, the same rules sons-alphabet.test.ts enforces over the whole
// seed. Checked here too, because this script writes the seed directly and a
// failure found at publish time is found too late.
const authored = JSON.stringify({ NEW_ITEMS, LESSON });
if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

// One quiz section. buildPages appends exactly one quiz page and resolves it
// with sections.find(s => s.type === 'quiz'), so every question after the first
// quiz section would ship unreachable.
const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
if (quizzes.length !== 1) {
  die(`this lesson has ${quizzes.length} quiz sections. The pager renders the FIRST one only, so the rest would ship unreachable.`);
}

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

/* ── Merge, idempotent by id ───────────────────────────────────────────── */

const byId = new Map(seed.items.map((i) => [i.id, i]));
let added = 0;
let updated = 0;
for (const it of NEW_ITEMS) {
  if (byId.has(it.id)) updated++;
  else added++;
  byId.set(it.id, it);
}
const nextItems = [...byId.values()];

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}` +
    `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items` +
    `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items` +
    `\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n`
  );
}
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const nextUnit: Unit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// The guard described at the top. A merge that drops somebody else's content is
// a bug in this script, not an outcome to confirm, so it dies rather than
// asking.
const keptItems = nextItems.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
if (keptItems < OTHER_ITEMS) {
  die(
    `this merge would DROP items that are not its own: ${OTHER_ITEMS} -> ${keptItems}.\n` +
    `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`
  );
}
const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);

/* ── Report ────────────────────────────────────────────────────────────── */

const q = LESSON.sections.find((s) => s.type === 'quiz');
const qs = q && q.type === 'quiz' ? quizQuestions(q) : [];
const rounds = q && q.type === 'quiz' ? (q.rounds?.length ?? 0) : 0;

console.log(`  items: +${added} new, ${updated} updated (${seed.items.length} → ${nextItems.length})`);
console.log(`  new ids: ${newIds.join(', ')}`);
if (existing) {
  console.log(`  replacing a1.02.l1 v${existing.version}: ${existing.sections.length} sections, ${existing.itemIds.length} items`);
  console.log(`  with      a1.02.l1 v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`);
} else {
  console.log(`  adding a1.02.l1 v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`);
}
console.log(`  acts: ${LESSON.acts?.length ?? 0} | terms: ${Object.keys(LESSON.terms ?? {}).length} | sheets: ${LESSON.sheets?.length ?? 0}`);
console.log(`  quiz: ${qs.length} questions in ${rounds} rounds | drills: ${LESSON.drills?.length ?? 0} | triggers: ${LESSON.errorTriggers?.length ?? 0}`);
console.log(`  reframe: "${REFRAME}"`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  one reachable quiz ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n` +
  `\n  a1.02.l1 is now in BOTH Postgres and the seed, so this lesson is safe.` +
  `\n` +
  `\n  STILL OPEN, and unrelated to this lesson: sons.09.l1 is in the seed and` +
  `\n  NOT in Postgres. \`pnpm content:publish\` regenerates seed.json from the` +
  `\n  database and would delete it. Run \`pnpm content:parity\` before anyone` +
  `\n  publishes.\n`
);
