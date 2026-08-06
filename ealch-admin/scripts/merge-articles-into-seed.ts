// Merge the rebuilt a1.04 lesson into the committed seed.json.
//
// ── Why this is a merge and not `pnpm content:publish` ─────────────────────
//
// author-articles-batch.ts writes to POSTGRES, which is the source of truth,
// and `pnpm content:publish` then regenerates seed.json from it. That is the
// correct pipeline and this script does not replace it.
//
// But the app READS seed.json, and so do the tests. lesson-contract.test.ts is
// the gate that checks every lesson in the seed, and a1-04-articles.test.ts
// self-skips its seed assertions when the lesson is absent. Until the seed
// carries this rebuild, the OLD six-section lesson is what a learner receives
// and what the gate checks.
//
// So this script does the seed-direct half, deliberately and visibly:
//
//   author-articles-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-articles-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// A publish today would still destroy content unrelated to this lesson. Run
// `pnpm content:parity` and it says so: sons.09.l1 is in the seed and not in
// Postgres, so regenerating the seed from the database deletes the masterclass.
// Merging touches this lesson and its unit and nothing else, which is the only
// safe move while that split is open.
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
// ── This merge writes NO items ─────────────────────────────────────────────
//
// Unlike merge-nombres-into-seed.ts, there is no corpus half here. Every one of
// the fifty ids this lesson names already ships. That removes a whole class of
// risk (duplicate `fr` inside a theme, wrong theme, renumbered ids) and it also
// means the item count in the seed must come out EXACTLY unchanged, which is
// asserted below rather than assumed.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-articles-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-articles-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues,
  quizQuestions,
  validateLesson,
  validateUnit,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { ARTICLES_LESSON, ARTICLES_PRESERVED_IDS, REFRAME } from './data/articles-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

type Seed = { items: Item[]; lessons: Lesson[]; units: Unit[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const LESSON = ARTICLES_LESSON;
const UNIT_ID = LESSON.unitId;

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script replaces one lesson and leaves everything else alone. So the item
// count must be identical afterwards and no other lesson may disappear.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read: a concurrent
// process added sons.07's items to seed.json between two runs of the accents
// merge, and the second run wrote back a state that no longer had them.
const ITEM_COUNT_BEFORE = seed.items.length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone lets a one-for-one swap through: drop sons.09, gain something else,
// same total.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/* ── Validate before writing anything ──────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

// Every id the lesson names must already be in the seed. This merge adds no
// items, so an id that dangles here would dangle after the write too, and a
// dangling id renders as an empty card rather than erroring.
const present = new Set(seed.items.map((i) => i.id));
const dangling = LESSON.itemIds.filter((id) => !present.has(id));
if (dangling.length) {
  die(
    `lesson names items that are not in the seed:\n  ${dangling.join('\n  ')}\n` +
    `  This merge writes no items, so these would ship as empty cards.`
  );
}

const density = validateDensity(LESSON, present);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House style, checked here too because this script writes the seed directly
// and a failure found at publish time is found too late. The lesson being
// replaced ships four em dashes and two U+203F ties, both of which reached a
// device, so these two guards are the specific reason this rebuild exists.
const authored = JSON.stringify(LESSON);
if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
if (authored.includes('‿')) die('U+203F tie character found; it renders as a low underscore on a device');
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

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (!existing) {
  // Not fatal, but worth saying out loud: this script was written as a REBUILD
  // and a missing predecessor means something else already removed it.
  console.warn(`\n! seed.json does not currently carry ${LESSON.id}. Adding it as new rather than replacing.\n`);
} else if (existing.version >= LESSON.version) {
  die(
    `seed.json holds ${LESSON.id} at v${existing.version} and this source is v${LESSON.version}. ` +
    `Overwriting would be a rollback. Move the version forward, or restore the seed copy from git first.`
  );
} else {
  // The rebuild must not silently drop anything the shipped lesson taught.
  const lost = ARTICLES_PRESERVED_IDS.filter((id) => !LESSON.itemIds.includes(id));
  if (lost.length) die(`the rebuild drops items the shipped lesson taught: ${lost.join(', ')}`);
  const droppedFromSeed = (existing.itemIds ?? []).filter((id) => !LESSON.itemIds.includes(id));
  if (droppedFromSeed.length) {
    die(`the rebuild drops itemIds the seed copy declares: ${droppedFromSeed.join(', ')}`);
  }
}

const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const nextUnit: Unit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

const next: Seed = { ...seed, lessons: nextLessons, units: nextUnits };

// The guards described at the top. A merge that drops somebody else's content
// is a bug in this script, not an outcome to confirm, so it dies rather than
// asking.
if (next.items.length !== ITEM_COUNT_BEFORE) {
  die(`this merge changed the item count ${ITEM_COUNT_BEFORE} -> ${next.items.length}, and it authors no items.`);
}
const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lostLessons = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lostLessons.length) die(`this merge would drop lesson(s) it does not own: ${lostLessons.join(', ')}`);

/* ── Report ────────────────────────────────────────────────────────────── */

const q = LESSON.sections.find((s) => s.type === 'quiz');
const qs = q && q.type === 'quiz' ? quizQuestions(q) : [];
const rounds = q && q.type === 'quiz' ? (q.rounds?.length ?? 0) : 0;

console.log(`  items: unchanged at ${next.items.length} (this lesson authors none)`);
if (existing) {
  const oldQuiz = existing.sections.find((s) => s.type === 'quiz');
  const oldQs = oldQuiz && oldQuiz.type === 'quiz' ? quizQuestions(oldQuiz) : [];
  console.log(`  replacing a1.04.l1 v${existing.version}: ${existing.sections.length} sections, ${existing.itemIds.length} items, ${(existing.acts ?? []).length} acts, ${oldQs.length} quiz questions`);
  console.log(`  with      a1.04.l1 v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items, ${(LESSON.acts ?? []).length} acts, ${qs.length} quiz questions`);
} else {
  console.log(`  adding a1.04.l1 v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`);
}
console.log(`  acts: ${LESSON.acts?.length ?? 0} | terms: ${Object.keys(LESSON.terms ?? {}).length} | sheets: ${LESSON.sheets?.length ?? 0}`);
console.log(`  quiz: ${qs.length} questions in ${rounds} rounds | drills: ${LESSON.drills?.length ?? 0} | triggers: ${LESSON.errorTriggers?.length ?? 0}`);
console.log(`  preserved from v2: ${ARTICLES_PRESERVED_IDS.join(', ')}`);
console.log(`  reframe: "${REFRAME}"`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  no em dash ✓  no U+203F ✓  one reachable quiz ✓  item count unchanged ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n` +
  `\n  a1.04.l1 v${LESSON.version} is now in BOTH Postgres and the seed, so this lesson is safe.` +
  `\n` +
  `\n  STILL OPEN, and unrelated to this lesson: sons.09.l1 is in the seed and` +
  `\n  NOT in Postgres. \`pnpm content:publish\` regenerates seed.json from the` +
  `\n  database and would delete it. Run \`pnpm content:parity\` before anyone` +
  `\n  publishes.\n`
);
