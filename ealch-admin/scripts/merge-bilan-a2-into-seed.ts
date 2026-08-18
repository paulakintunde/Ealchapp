// a2.35 "Bilan A2" -> seed.json.
//
//   pnpm tsx scripts/merge-bilan-a2-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-bilan-a2-into-seed.ts
//
// NOT `merge-bilan-into-seed.ts`. That one is a1.30's and it wipes and replaces
// the a1.30 lessons. This one is scoped to the id prefix `a2.35.` and cannot
// see them.
//
// What this does:
//
//   adds     a2.35.l1        5 sections, 34 rounds, 170 questions
//   adds     a2.35.l2        4 sections, 12 rounds,  60 questions, exam mode
//   rebinds  unit a2.35      lessonIds -> both lessons, l1 first
//
// It does NOT touch `seed.version`. That is the OTA snapshot number, derived by
// publish-content.ts as previous + 1, and a merge must never hand-bump it.
//
// ── Why no items move ──────────────────────────────────────────────────────
//
// Both lessons carry an empty itemIds. The capstone quotes thirty-four units
// and owns none of their rows, and every row it quotes is already released by
// the unit that taught it. The item count is captured before the write and
// compared after it, so a stray edit that touched one fails here rather than at
// the next publish.
//
// THIS IS ALSO WHY THE MERGE CARRIES NOTHING. Invariants §5 records that a
// merge must carry every imported row its lesson references or the cards render
// empty; that rule exists for lessons that reference rows. This one references
// none, so there is nothing to carry, and a merge that added rows would be
// inventing a claim the lesson does not make.
//
// ── Why the surviving lessons are named rather than counted ────────────────
//
// A count lets a one-for-one swap through: delete somebody else's lesson, add
// yours, total unchanged. The list is captured BY ID before the write and
// compared after it. With several builds live in this repo at once this is not
// theoretical: seed.json moves under you.

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
import { BILAN_A2_LESSONS, EXAM_LESSON, REVIEW_LESSON } from './data/bilan-a2-lesson.ts';
import {
  A2_TRAIL, homophoneClashes, mixDrift, unitsNamedByRoundIds, unitsNamedInText,
} from './data/bilan-a2-spread.ts';

type Seed = {
  version: number;
  units: (Unit & { themes?: string[]; lessonIds?: string[]; canDo?: string; sub?: string })[];
  lessons: Lesson[];
  items: Item[];
  [k: string]: unknown;
};

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run') || process.argv.includes('--dry');

const UNIT_ID = 'a2.35';

/* Explicit, not derived. Invariants §5. */
const EXPECTED_LESSONS = 2;
const EXPECTED_REVIEW_ROUNDS = 34;
const EXPECTED_REVIEW_QUESTIONS = 170;
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
  console.log(`  ${l.id}  v${l.version}  ${l.sections.length} sections, ${q.length} quiz questions`);
}
if (!removing.length) console.log('  (nothing: no a2.35 lesson in the seed, this is a first build)');

/* ── Validate what is going in, before anything is written ─────────────────── */

console.log('\n── Validating ──');
for (const lesson of BILAN_A2_LESSONS) {
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

const reviewRounds = ((reviewQuiz as { rounds?: unknown[] }).rounds ?? []) as { id: string; label: string; targets?: string[] }[];
const examRounds = ((examQuiz as { rounds?: unknown[] }).rounds ?? []) as { id: string; label: string; targets?: string[] }[];
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
for (const lesson of BILAN_A2_LESSONS) {
  const n = lesson.sections.filter((s) => s.type === 'quiz').length;
  if (n !== 1) die(`${lesson.id} has ${n} quiz sections; the pager renders exactly one`);
}
ok('one quiz section per lesson');

// Coverage, unit by unit rather than by count. A count passes after somebody
// drops one and adds another.
const named = unitsNamedByRoundIds(reviewRounds as never);
const missing = A2_TRAIL.filter((u) => !named.has(u.id));
if (missing.length) die(`no review round covers: ${missing.map((u) => `seq ${u.seq} ${u.id}`).join(', ')}`);
const doubled = [...named.entries()].filter(([, ids]) => ids.length > 1);
if (doubled.length) die(`covered twice: ${doubled.map(([id, ids]) => `${id} by ${ids.join(' and ')}`).join('; ')}`);
ok('coverage', `all ${A2_TRAIL.length} trail units, one round each`);

// The exam must actually be in exam mode, must fire no drills, and must not
// name a unit anywhere a learner reads before answering.
if ((examQuiz as { exam?: boolean }).exam !== true) die('the exam quiz is not marked exam: true');
if ((reviewQuiz as { exam?: boolean }).exam !== undefined) die('the review quiz carries an exam flag, which suppresses its remediation');
if (examRounds.some((r) => (r.targets ?? []).length)) die('an exam round declares targets, which would fire a remediation drill mid-exam');
const leaks = unitsNamedInText(examRounds as never);
if (leaks.length) die(`an exam round names a unit:\n    ${leaks.join('\n    ')}`);
ok('exam conditions', 'exam: true, no targets, names no unit');

// Every ear question is answerable.
const clashes = [...homophoneClashes(reviewRounds as never), ...homophoneClashes(examRounds as never)];
if (clashes.length) die(`a listenChoose offers two spellings of one sound:\n    ${clashes.join('\n    ')}`);
ok('ear questions', 'no homophone clash');

// The format mix is A2's, not a1.30's.
const drift = mixDrift([...reviewQs, ...examQs]);
if (drift.length) die(`the format mix is out of band:\n    ${drift.join('\n    ')}`);
ok('format mix', 'every format within tolerance of the measured band');

// Every question teaches on the way out.
const noWhy = [...reviewQs, ...examQs].filter((q) => !q.why?.trim());
if (noWhy.length) die(`${noWhy.length} question(s) carry no why`);
ok('every question has a why', `${reviewQs.length + examQs.length} of them`);

// House rules that are easy to break by hand.
for (const lesson of BILAN_A2_LESSONS) {
  const bad = strings(lesson).filter((s) => s.includes('—'));
  if (bad.length) die(`${lesson.id} has ${bad.length} em dash(es), starting with: ${bad[0].slice(0, 60)}`);
  const honest = strings(lesson).filter((s) => /honest/i.test(s));
  if (honest.length) die(`${lesson.id} uses "honest": ${honest[0].slice(0, 60)}`);
  if (lesson.itemIds.length) die(`${lesson.id} claims corpus rows; this unit owns none`);
}
ok('house copy', 'no em dash, no "honest", no itemIds');

/* ── Write ─────────────────────────────────────────────────────────────────── */

seed.lessons = seed.lessons.filter((l) => !l.id.startsWith(`${UNIT_ID}.`));
seed.lessons.push(REVIEW_LESSON, EXAM_LESSON);

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);
// l1 FIRST. den.tsx opens lessonIds[0], and opening the exam before the review
// would put a learner into sixty unexplained questions cold.
unit.lessonIds = [REVIEW_LESSON.id, EXAM_LESSON.id];

/* ── What must still be true ───────────────────────────────────────────────── */

console.log('\n── After ──');
const after = seed.lessons.filter((l) => !l.id.startsWith(`${UNIT_ID}.`)).map((l) => l.id).sort();
const lost = MUST_KEEP_LESSONS.filter((id) => !after.includes(id));
const gained = after.filter((id) => !MUST_KEEP_LESSONS.includes(id));
if (lost.length) die(`these lessons were lost: ${lost.join(', ')}`);
if (gained.length) die(`these lessons appeared unexpectedly: ${gained.join(', ')}`);
ok('every other lesson survived, by id', `${after.length} of them`);

const mine = seed.lessons.filter((l) => l.id.startsWith(`${UNIT_ID}.`));
if (mine.length !== EXPECTED_LESSONS) die(`${mine.length} a2.35 lessons after the write, expected ${EXPECTED_LESSONS}`);
if (unit.lessonIds[0] !== REVIEW_LESSON.id) die(`lessonIds[0] is ${unit.lessonIds[0]}; den.tsx opens it and it must be the review`);
ok('a2.35 lessons', `${mine.map((l) => l.id).join(', ')}, review first`);

if (seed.items.length !== ITEMS_BEFORE) die(`item count moved from ${ITEMS_BEFORE} to ${seed.items.length}; this script writes no items`);
ok('items untouched', `${seed.items.length}`);

const unitsAfter = seed.units.map((u) => u.id).sort();
if (unitsAfter.join() !== UNITS_BEFORE.join()) die('the unit list changed');
ok('units untouched', `${unitsAfter.length}`);

// No theme is created. `bilan` and `revision` both hold zero rows and neither
// should come into existence because of this build.
const themes = new Set(seed.items.map((i) => (i as { theme?: string }).theme).filter(Boolean) as string[]);
for (const dead of ['bilan', 'revision']) {
  if (themes.has(dead)) die(`the theme "${dead}" now exists; the capstone creates no theme`);
}
ok('no theme created', 'bilan and revision both still absent');

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
