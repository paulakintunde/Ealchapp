// Merge the authored a1.03 content into the committed seed.json.
//
// ── Why this is a merge and not `pnpm content:publish` ─────────────────────
//
// author-noun-gender-batch.ts writes to POSTGRES, which is the source of truth,
// and `pnpm content:publish` then regenerates seed.json from it. That is the
// correct pipeline and this script does not replace it.
//
// But the app READS seed.json, and so do the tests. lesson-contract.test.ts is
// the gate that checks every lesson in the seed, and a1-03-genre.test.ts
// self-skips its seed assertions when the lesson is absent. Until the seed
// carries this lesson it is invisible to a learner and to the gate.
//
// So this script does the seed-direct half, deliberately and visibly:
//
//   author-noun-gender-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-noun-gender-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// A publish regenerates seed.json FROM the database, so anything that is
// seed-only is deleted by one. Merging touches this lesson and its unit and
// nothing else, which is the safe move whether or not such a split is open.
//
// This file used to assert that `sons.09.l1` was seed-only and would be
// destroyed. THAT WAS TRUE WHEN WRITTEN AND IS NOT TRUE NOW: `content:parity`
// on 2026-08-16 reports 71 lessons in both, with only `b2.01.l1` database-only
// and `in_review`. A hardcoded claim about publish safety goes stale silently
// and talks the next author out of a publish that is actually fine, so the
// claim has been replaced by the instruction to run parity. THIS SCRIPT HAS NO
// DATABASE CONNECTION BY DESIGN and genuinely cannot know the answer itself.
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
// ── This lesson writes no items ────────────────────────────────────────────
//
// a1.03 authors no corpus rows at all, so the item list can only be checked,
// never changed. Every id it names must already be in the seed, and the merge
// refuses rather than adding one: a lesson quietly growing the corpus through
// its merge script is how a duplicate headword gets into a theme.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-noun-gender-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-noun-gender-into-seed.ts

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
import { carriesArticle, measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import {
  ENDING_RULES,
  ENDINGS_ACCURACY,
  ENDINGS_COVERED,
  MORE_ENDINGS,
  RULE_FLOOR,
  WORTHLESS_ENDINGS,
} from './data/genre-endings.ts';
import { GENRE_HIDDEN, GENRE_ITEM_IDS, GENRE_LESSON, REFRAME } from './data/genre-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

type Seed = { items: Item[]; lessons: Lesson[]; units: Unit[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const LESSON = GENRE_LESSON;
const UNIT_ID = LESSON.unitId;

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its lesson, links its unit, and leaves everything
// else alone. So the item count cannot move at all and the lesson list can only
// go up. Both are checked against what is on disk RIGHT NOW rather than against
// a remembered count, because the whole failure mode is acting on a stale read.
const ITEM_COUNT_BEFORE = seed.items.length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone lets a one-for-one swap through: drop sons.09, gain something else,
// same total.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/* ── Validate before writing anything ──────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const byId = new Map(seed.items.map((i) => [i.id, i]));
const dangling = GENRE_ITEM_IDS.filter((id) => !byId.has(id));
if (dangling.length) {
  die(
    `lesson names items the seed does not hold:\n  ${dangling.join('\n  ')}\n` +
    `  This lesson authors no corpus rows, so a missing id is a real gap rather than something to add here.`
  );
}

const density = validateDensity(LESSON, new Set(seed.items.map((i) => i.id)));
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House style, the same rules sons-alphabet.test.ts enforces over the whole
// seed. Checked here too, because this script writes the seed directly and a
// failure found at publish time is found too late.
const authored = JSON.stringify(LESSON);
if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

// One quiz section. buildPages appends exactly one quiz page and resolves it
// with sections.find(s => s.type === 'quiz'), so every question after the first
// quiz section would ship unreachable.
const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
if (quizzes.length !== 1) {
  die(`this lesson has ${quizzes.length} quiz sections. The pager renders the FIRST one only, so the rest would ship unreachable.`);
}

// ── Every figure the cards state, measured against the SEED ────────────────
//
// The batch runs this same measurement against Postgres. Both copies have to
// agree with the cards, because a claim that is true of one and false of the
// other ships as false to whichever half the learner receives.
const claimErrors: string[] = [];
for (const r of ENDING_RULES) {
  const m = measureEnding(seed.items, r.ending);
  if (!m) { claimErrors.push(`-${r.ending}: no nouns in the seed end this way`); continue; }
  if (m.accuracy !== r.accuracy) claimErrors.push(`-${r.ending}: card says ${r.accuracy}%, seed says ${m.accuracy}%`);
  if (m.n !== r.items) claimErrors.push(`-${r.ending}: card says ${r.items} nouns, seed says ${m.n}`);
  if (m.predicts !== r.predicts) claimErrors.push(`-${r.ending}: card predicts ${r.predicts}, seed says ${m.predicts}`);
  if (m.accuracy < RULE_FLOOR) claimErrors.push(`-${r.ending}: ${m.accuracy}% is under the ${RULE_FLOOR}% floor`);
  const exceptions = r.breaks.filter((b) => b.kind === 'exception');
  if (m.accuracy < 100 && !exceptions.length) claimErrors.push(`-${r.ending}: below 100% and names no exception`);
  if (m.accuracy === 100 && exceptions.length) claimErrors.push(`-${r.ending}: at 100% and claims an exception`);
  for (const n of [r.example, ...r.breaks]) {
    const it = byId.get(n.id);
    if (it && it.fr !== n.fr) claimErrors.push(`-${r.ending}: card shows "${n.fr}", ${n.id} is "${it.fr}"`);
    if (it && !carriesArticle(it.fr)) claimErrors.push(`-${r.ending}: ${n.id} "${it.fr}" carries no article`);
  }
}
for (const w of WORTHLESS_ENDINGS) {
  const m = measureEnding(seed.items, w.ending);
  if (!m) { claimErrors.push(`-${w.ending}: nothing ends this way`); continue; }
  if (m.accuracy !== w.accuracy) claimErrors.push(`-${w.ending}: card says ${w.accuracy}%, seed says ${m.accuracy}%`);
  if (m.n !== w.items) claimErrors.push(`-${w.ending}: card says ${w.items} nouns, seed says ${m.n}`);
  if (m.accuracy >= RULE_FLOOR) claimErrors.push(`-${w.ending}: ${m.accuracy}% now clears the floor and is no longer worthless`);
}
for (const e of MORE_ENDINGS) {
  const m = measureEnding(seed.items, e.ending);
  if (!m || m.accuracy !== e.accuracy || m.n !== e.items || m.predicts !== e.predicts) {
    claimErrors.push(`sheet -${e.ending}: sheet says ${e.predicts} ${e.accuracy}% over ${e.items}, seed says ${m ? `${m.predicts} ${m.accuracy}% over ${m.n}` : 'nothing'}`);
  }
}
for (const h of GENRE_HIDDEN) {
  const it = byId.get(h.id);
  if (!it) continue;
  if (it.fr !== h.elided) claimErrors.push(`${h.id}: lesson shows "${h.elided}", seed has "${it.fr}"`);
  if (it.gender !== h.g) claimErrors.push(`${h.id}: lesson says ${h.g}, seed says ${it.gender}`);
}
const bare = GENRE_ITEM_IDS.map((id) => byId.get(id)!).filter((it) => it.kind !== 'sentence' && !carriesArticle(it.fr));
if (bare.length) claimErrors.push(`taught without an article: ${bare.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
if (claimErrors.length) die(`the lesson states figures this seed does not support:\n  ${claimErrors.join('\n  ')}`);

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

// `themes` is left absent on purpose. See the note in genre-lesson.ts and the
// matching check in the batch: reversing that decision has to be a deliberate
// edit in both places rather than something a merge does quietly.
if ((unit as { themes?: unknown }).themes !== undefined) {
  die(`unit ${UNIT_ID} has grown a \`themes\` key. This lesson leaves it absent deliberately; change this check with the decision.`);
}

/* ── Merge, idempotent by id ───────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}` +
    `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items` +
    `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items` +
    `\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n`
  );
}
// REPLACE IN PLACE. The previous line was
//
//     [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON]
//
// which FILTERS THE LESSON OUT AND PUSHES IT ONTO THE END. a1.03.l1 sits near
// the front of the array, so every lesson after it shifted up one index and
// `JSON.stringify` rewrote all of them: a 297,768-line diff for a change that
// touches five printed numbers.
//
// The content was correct and the whole suite was green, which is why this
// survived several re-renders. The cost is a diff nobody can review and a
// guaranteed conflict with every other author writing seed.json, and a2.26
// found it while re-rendering a1.03 with three sibling builds in flight.
//
// a2.07 wrote the same fix for `items` in `merge-restaurant-into-seed.ts` and
// documented a 512,711-line diff there. This is that hazard in the `lessons`
// array, in a script that predates the finding. Existing lessons keep their
// position and are updated in place; a genuinely new lesson still appends.
const nextLessons = [...seed.lessons];
const lessonIx = nextLessons.findIndex((l) => l.id === LESSON.id);
if (lessonIx >= 0) nextLessons[lessonIx] = LESSON;
else nextLessons.push(LESSON);

const nextUnit: Unit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

// Items are passed through untouched. Written out explicitly rather than left
// implicit in the spread, so the intent is visible: this merge does not add,
// change or remove a single corpus row.
const next: Seed = { ...seed, items: seed.items, lessons: nextLessons, units: nextUnits };

// The guards described at the top. A merge that drops somebody else's content
// is a bug in this script, not an outcome to confirm, so it dies rather than
// asking.
if (next.items.length !== ITEM_COUNT_BEFORE) {
  die(`this merge changed the item count ${ITEM_COUNT_BEFORE} -> ${next.items.length}, and it authors no items. Do not force it.`);
}
const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);

/* ── Report ────────────────────────────────────────────────────────────── */

const q = LESSON.sections.find((s) => s.type === 'quiz');
const qs = q && q.type === 'quiz' ? quizQuestions(q) : [];
const rounds = q && q.type === 'quiz' ? (q.rounds?.length ?? 0) : 0;
const words = GENRE_ITEM_IDS.map((id) => byId.get(id)!).filter((i) => i.kind !== 'sentence');
const masc = words.filter((i) => i.gender === 'm').length;

console.log(`  items: unchanged at ${next.items.length} (this lesson authors none)`);
if (existing) {
  console.log(`  replacing a1.03.l1 v${existing.version}: ${existing.sections.length} sections, ${existing.itemIds.length} items`);
  console.log(`  with      a1.03.l1 v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`);
} else {
  console.log(`  adding a1.03.l1 v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`);
}
console.log(`  acts: ${LESSON.acts?.length ?? 0} | terms: ${Object.keys(LESSON.terms ?? {}).length} | sheets: ${LESSON.sheets?.length ?? 0}`);
console.log(`  quiz: ${qs.length} questions in ${rounds} rounds | drills: ${LESSON.drills?.length ?? 0} | triggers: ${LESSON.errorTriggers?.length ?? 0}`);
console.log(`  endings: ${ENDING_RULES.length} taught over ${ENDINGS_COVERED} nouns at ${ENDINGS_ACCURACY}%, every figure measured against this seed`);
console.log(`  gender balance: ${masc}m / ${words.length - masc}f across ${words.length} nouns`);
console.log(`  reframe: "${REFRAME}"`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  unit ${UNIT_ID} themes: absent, and left absent on purpose`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  one reachable quiz ✓  every figure measured ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n` +
  `\n  a1.03.l1 is now in BOTH Postgres and the seed, so this lesson is safe.` +
  `\n` +
  `\n  BEFORE ANY PUBLISH, run \`pnpm content:parity\`. \`content:publish\`` +
  `\n  regenerates seed.json from the database, so anything seed-only is DELETED` +
  `\n  by one. This script has no database connection by design, so it cannot` +
  `\n  tell you whether that is true today — only parity can.\n`
);
