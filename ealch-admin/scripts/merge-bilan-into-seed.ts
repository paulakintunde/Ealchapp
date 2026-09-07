// a1.30 "Bilan A1" -> seed.json. A WIPE AND REPLACE, not a merge.
//
//   pnpm tsx scripts/merge-bilan-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-bilan-into-seed.ts
//
// What this does:
//
//   removes  a1.30.l1          the 19-section teaching lesson, 75-question quiz
//   adds     a1.30.l1          5 sections, 29 rounds, 145 questions
//   adds     a1.30.l2          4 sections, 12 rounds,  60 questions, exam mode
//   rebinds  unit a1.30        lessonIds -> both lessons, canDo rewritten
//
// It does NOT touch `seed.version`. That is the OTA snapshot number, derived by
// publish-content.ts as previous + 1, and a merge must never hand-bump it.
//
// ── Why no items are deleted ───────────────────────────────────────────────
//
// The old lesson listed 101 itemIds and thirteen of those are referenced by no
// other lesson in the seed: the repair-kit phrases, sitting in the themes
// expressions-frequentes, expressions-utiles and rp-etiquette.
//
// They are NOT deleted. They are ordinary corpus rows in shared themes, and the
// theme decks, the flash hub and voiceflash all read the corpus by theme rather
// than through a lesson. Deleting them to tidy up after a1.30 would silently
// shrink three decks that have nothing to do with this unit. What goes is the
// lesson's CLAIM on them, which is the itemIds array, and that is empty on both
// new lessons.
//
// The visible consequence, worth stating because it is a real reduction: a1.30
// no longer releases any SRS cards. It released 101 before, all of them slices
// of other lessons' corpus, and every one of those rows is already released by
// the lesson that actually teaches it.
//
// ── Why the surviving lessons are named rather than counted ────────────────
//
// A count lets a one-for-one swap through: delete somebody else's lesson, add
// yours, total unchanged. The list is captured BY ID before the write and
// compared after it.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  formatIssues,
  quizQuestions,
  validateLesson,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { BILAN_LESSONS, EXAM_LESSON, REVIEW_LESSON } from './data/bilan-lesson.ts';

type Seed = {
  version: number;
  units: (Unit & { themes?: string[]; lessonIds?: string[]; canDo?: string; sub?: string })[];
  lessons: Lesson[];
  items: Item[];
  [k: string]: unknown;
};

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const UNIT_ID = 'a1.30';

/* Explicit, not derived. Invariant §5. */
const EXPECTED_LESSONS = 2;
const EXPECTED_REVIEW_ROUNDS = 29;
const EXPECTED_REVIEW_QUESTIONS = 145;
const EXPECTED_EXAM_ROUNDS = 12;
const EXPECTED_EXAM_QUESTIONS = 60;
const EXPECTED_REVIEW_SECTIONS = 5;
const EXPECTED_EXAM_SECTIONS = 4;

function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

function ok(label: string, detail = '') {
  console.log(`  ✓ ${label}${detail ? `  ${detail}` : ''}`);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/* ── Read ──────────────────────────────────────────────────────────────────── */

const seed: Seed = JSON.parse(readFileSync(SEED, 'utf8'));
console.log(`\n  ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units before`);
console.log(`  seed.version ${seed.version} (not touched by this script)\n`);

const MUST_KEEP_LESSONS = seed.lessons
  .filter((l) => !l.id.startsWith(`${UNIT_ID}.`))
  .map((l) => l.id)
  .sort();
const ITEMS_BEFORE = seed.items.length;
const UNITS_BEFORE = seed.units.map((u) => u.id).sort();

const removing = seed.lessons.filter((l) => l.id.startsWith(`${UNIT_ID}.`));
console.log('── Removing ──');
for (const l of removing) {
  const q = l.sections.filter((s) => s.type === 'quiz').flatMap((s) => quizQuestions(s));
  console.log(`  ${l.id}  v${l.version}  ${l.sections.length} sections, ${q.length} quiz questions, ${l.itemIds.length} itemIds`);
}
if (!removing.length) console.log('  (nothing: no a1.30 lesson in the seed)');

/* ── Validate what is going in, before anything is written ─────────────────── */

console.log('\n── Validating ──');
for (const lesson of BILAN_LESSONS) {
  const issues = validateLesson(lesson);
  if (issues.length) die(`${lesson.id} fails the schema:\n${formatIssues(issues)}`);
  // Empty item set: both lessons carry no corpus ids, so passing an empty set
  // skips exactly the item-resolution rule and runs every other one.
  const density = validateDensity(lesson, new Set());
  if (density.length) die(`${lesson.id} fails density:\n${formatDensity(density)}`);
  ok(`${lesson.id} schema and density`);
}

const reviewQuiz = REVIEW_LESSON.sections.find((s) => s.type === 'quiz');
const examQuiz = EXAM_LESSON.sections.find((s) => s.type === 'quiz');
if (!reviewQuiz || !examQuiz) die('a quiz section went missing');

const reviewRounds = (reviewQuiz as { rounds?: unknown[] }).rounds ?? [];
const examRounds = (examQuiz as { rounds?: unknown[] }).rounds ?? [];
const reviewQs = quizQuestions(reviewQuiz);
const examQs = quizQuestions(examQuiz);

if (reviewRounds.length !== EXPECTED_REVIEW_ROUNDS) die(`review has ${reviewRounds.length} rounds, expected ${EXPECTED_REVIEW_ROUNDS}`);
if (reviewQs.length !== EXPECTED_REVIEW_QUESTIONS) die(`review has ${reviewQs.length} questions, expected ${EXPECTED_REVIEW_QUESTIONS}`);
if (examRounds.length !== EXPECTED_EXAM_ROUNDS) die(`exam has ${examRounds.length} rounds, expected ${EXPECTED_EXAM_ROUNDS}`);
if (examQs.length !== EXPECTED_EXAM_QUESTIONS) die(`exam has ${examQs.length} questions, expected ${EXPECTED_EXAM_QUESTIONS}`);
if (REVIEW_LESSON.sections.length !== EXPECTED_REVIEW_SECTIONS) die(`review has ${REVIEW_LESSON.sections.length} sections, expected ${EXPECTED_REVIEW_SECTIONS}`);
if (EXAM_LESSON.sections.length !== EXPECTED_EXAM_SECTIONS) die(`exam has ${EXAM_LESSON.sections.length} sections, expected ${EXPECTED_EXAM_SECTIONS}`);
ok('counts', `${reviewRounds.length}+${examRounds.length} rounds, ${reviewQs.length}+${examQs.length} questions`);

// Exactly one quiz per lesson, or the second one is authored and never rendered.
for (const lesson of BILAN_LESSONS) {
  const n = lesson.sections.filter((s) => s.type === 'quiz').length;
  if (n !== 1) die(`${lesson.id} has ${n} quiz sections; the pager renders exactly one`);
}
ok('one quiz section per lesson');

// The exam must actually be in exam mode, and must fire no drills.
if ((examQuiz as { exam?: boolean }).exam !== true) die('the exam quiz is not marked exam: true');
if (examRounds.some((r) => ((r as { targets?: string[] }).targets ?? []).length)) {
  die('an exam round declares targets, which would fire a remediation drill mid-exam');
}
ok('exam conditions', 'exam: true, no round targets');

// House rules that are easy to break by hand.
for (const lesson of BILAN_LESSONS) {
  const bad = strings(lesson).filter((s) => s.includes('—'));
  if (bad.length) die(`${lesson.id} has ${bad.length} em dash(es), starting with: ${bad[0].slice(0, 60)}`);
  const honest = strings(lesson).filter((s) => /honest/i.test(s));
  if (honest.length) die(`${lesson.id} uses "honest": ${honest[0].slice(0, 60)}`);
}
ok('no em dash, no "honest"');

/* ── Write ─────────────────────────────────────────────────────────────────── */

seed.lessons = seed.lessons.filter((l) => !l.id.startsWith(`${UNIT_ID}.`));
seed.lessons.push(REVIEW_LESSON, EXAM_LESSON);

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);
unit.lessonIds = [REVIEW_LESSON.id, EXAM_LESSON.id];
unit.title = 'A1 Review';
unit.sub = 'Bilan A1';
unit.canDo =
  'Can demonstrate the whole A1 band under test: twenty-nine review rounds naming the lesson each question came from, then a sixty-question exam that names nothing';

/* ── What must still be true ───────────────────────────────────────────────── */

console.log('\n── After ──');
const after = seed.lessons.filter((l) => !l.id.startsWith(`${UNIT_ID}.`)).map((l) => l.id).sort();
const lost = MUST_KEEP_LESSONS.filter((id) => !after.includes(id));
const gained = after.filter((id) => !MUST_KEEP_LESSONS.includes(id));
if (lost.length) die(`these lessons were lost: ${lost.join(', ')}`);
if (gained.length) die(`these lessons appeared unexpectedly: ${gained.join(', ')}`);
ok('every other lesson survived, by id', `${after.length} of them`);

const mine = seed.lessons.filter((l) => l.id.startsWith(`${UNIT_ID}.`));
if (mine.length !== EXPECTED_LESSONS) die(`${mine.length} a1.30 lessons after the write, expected ${EXPECTED_LESSONS}`);
ok('a1.30 lessons', mine.map((l) => l.id).join(', '));

if (seed.items.length !== ITEMS_BEFORE) die(`item count moved from ${ITEMS_BEFORE} to ${seed.items.length}; this script writes no items`);
ok('items untouched', `${seed.items.length}`);

const unitsAfter = seed.units.map((u) => u.id).sort();
if (unitsAfter.join() !== UNITS_BEFORE.join()) die('the unit list changed');
ok('units untouched', `${unitsAfter.length}`);

// Every lessonId a unit names has to resolve, or the unit renders a dead card.
const lessonIds = new Set(seed.lessons.map((l) => l.id));
for (const u of seed.units) {
  for (const id of u.lessonIds ?? []) {
    if (!lessonIds.has(id)) die(`unit ${u.id} names lesson ${id}, which is not in the seed`);
  }
}
ok('every unit lessonId resolves');

if (DRY_RUN) {
  console.log('\n  DRY RUN, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');
console.log(`\n  written: ${SEED}`);
console.log(`  ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units after\n`);
