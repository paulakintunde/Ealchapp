// Merge the rebuilt a1.01.l1 into the committed seed.json.
//
// ── Why this is a merge and not `pnpm content:publish` ─────────────────────
//
// publish-content regenerates seed.json FROM Postgres, so it deletes anything
// the database has never seen. Run `pnpm tsx scripts/check-seed-db-parity.ts`
// and it will tell you what that costs today:
//
//   sons.09.l1  in the seed, NOT in Postgres   <- a publish deletes it
//   sons.08.l1  drifted: the database is a version ahead of the seed
//   b2.01.l1    in Postgres at status in_review, not in the seed
//
// So a publish right now would take out the masterclass. Merging touches this
// lesson and nothing else, which is the only safe move while that split is
// open. The split still has to be closed, and this script says so every run.
//
// ── Why this one adds no items ─────────────────────────────────────────────
//
// Unlike the sons merges, this lesson authors NO corpus. All fifty ids it
// teaches already exist in the salutations theme. That makes this script
// strictly narrower than merge-elision-into-seed.ts: it replaces one lesson,
// updates one unit's lessonIds, and is forbidden from touching `items` at all.
// The guard below asserts that rather than trusting it.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-salutations-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-salutations-into-seed.ts

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
import { SALUTATIONS_LESSON } from './data/salutations-lesson.ts';
import { REFRAME } from './data/salutations-terms.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

type Seed = { items: Item[]; lessons: Lesson[]; units: Unit[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const LESSON = SALUTATIONS_LESSON;
const UNIT_ID = LESSON.unitId;

// Checked against what is on disk RIGHT NOW rather than a remembered count,
// because the failure mode this guards against is acting on a stale read: a
// concurrent process added sons.07's items between two runs of the accents
// merge and the second run wrote back a state that no longer had them.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const ITEM_COUNT_BEFORE = seed.items.length;

/* ── Validate before writing anything ──────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const corpusIds = new Set(seed.items.map((i) => i.id));
const dangling = LESSON.itemIds.filter((i) => !corpusIds.has(i));
if (dangling.length) {
  die(`lesson names items that are not in the seed:\n  ${dangling.join('\n  ')}\n  This lesson authors no corpus, so every id must already exist.`);
}

const density = validateDensity(LESSON, corpusIds);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House style, the same rules sons-alphabet.test.ts enforces over the whole
// seed. Checked here too, because a failure found at publish time is found
// too late.
const authored = JSON.stringify(LESSON);
if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

// The bug this rebuild exists to fix. A second quiz section is authored
// content that no learner can reach, so it must never come back.
const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
if (quizzes.length !== 1) {
  die(`this lesson has ${quizzes.length} quiz sections. buildPages pages the FIRST one and app/lesson.tsx drops the rest, so every question after the first quiz would ship unreachable.`);
}

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

/* ── Merge ─────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const nextUnit: Unit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

// `items` is passed through untouched, deliberately. Asserted rather than
// assumed: an accidental item write here is exactly the shape of the 2026-08-02
// incident, where a merge wrote back a seed that had lost another author's rows.
const next: Seed = { ...seed, items: seed.items, lessons: nextLessons, units: nextUnits };
if (next.items.length !== ITEM_COUNT_BEFORE) die(`this script must not change the item count (${ITEM_COUNT_BEFORE} -> ${next.items.length})`);

// Named, not merely counted, so a one-for-one swap cannot pass.
const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lost = OTHER_LESSON_IDS.filter((idx) => !keptLessonIds.includes(idx));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);

/* ── Report ────────────────────────────────────────────────────────────── */

const q = LESSON.sections.find((s) => s.type === 'quiz');
const qs = q && q.type === 'quiz' ? quizQuestions(q) : [];
const rounds = q && q.type === 'quiz' ? (q.rounds?.length ?? 0) : 0;

if (existing) {
  console.log(`  replacing a1.01.l1 v${existing.version}: ${existing.sections.length} sections, ${existing.itemIds.length} items`);
  console.log(`  with            a1.01.l1 v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`);
} else {
  console.log(`  adding a1.01.l1 v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`);
}
console.log(`  acts: ${LESSON.acts?.length ?? 0} | terms: ${Object.keys(LESSON.terms ?? {}).length} | sheets: ${LESSON.sheets?.length ?? 0}`);
console.log(`  quiz: ${qs.length} questions in ${rounds} rounds | drills: ${LESSON.drills?.length ?? 0} | triggers: ${LESSON.errorTriggers?.length ?? 0}`);
console.log(`  reframe: "${REFRAME}"`);
console.log(`  items: ${ITEM_COUNT_BEFORE} unchanged (this lesson authors no corpus)`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  one reachable quiz ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n` +
  `\n  STILL OPEN, and unrelated to this lesson:` +
  `\n  sons.09.l1 is in the seed and NOT in Postgres. \`pnpm content:publish\`` +
  `\n  regenerates seed.json from the database and would delete it. Run` +
  `\n  \`pnpm tsx scripts/check-seed-db-parity.ts\` before anyone publishes.\n`
);
