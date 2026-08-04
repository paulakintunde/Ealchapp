// Merge the authored sons.09 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-masterclass-batch.ts writes to POSTGRES, which is the source of truth,
// and `pnpm content:publish` then regenerates seed.json from it. That is the
// correct pipeline and this script does not replace it.
//
// But the app READS seed.json — src/services/content.ts imports it directly —
// and so do the tests. lesson-contract.test.ts is the gate that checks every
// lesson in the seed, and sons-09-masterclass.test.ts self-skips its
// seed-parity assertions when the lesson is absent. Until the seed carries this
// lesson it is invisible both to a learner and to the gate.
//
// So this script does the seed-direct half, deliberately and visibly:
//
//   author-masterclass-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-masterclass-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── The publish hazard, which has cost real work twice ─────────────────────
//
// Writing seed.json directly makes git run AHEAD of Postgres. publish-content
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that happens BEFORE the batch has been applied silently deletes this
// lesson from the seed. That is not hypothetical:
//
//   2026-07-31  sons.03.l1 went from 20 sections to 6, and five lessons lost
//               their `overview`, because a publish ran over a newer seed.
//   2026-08-03  sons.07.l1 was written to the seed and then erased by someone
//               else's publish. It survived only because its source files were
//               intact.
//
// So this script REPORTS the split rather than assuming it away. It prints
// which lessons are in the seed, and it refuses outright to drop any of them.
// Before anyone runs content:publish, every lesson in the seed must also exist
// in Postgres and vice versa.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-masterclass-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-masterclass-into-seed.ts

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
import { ALL_IDS, MASTERCLASS, MASTERCLASS_IDS, REUSED, RULES, toItem } from './data/masterclass-corpus.ts';
import { MASTERCLASS_LESSON, REFRAME } from './data/masterclass-lesson.ts';
import { multiRuleCount } from './data/masterclass-quiz.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

type Seed = {
  items: Item[];
  lessons: Lesson[];
  units: Unit[];
  [k: string]: unknown;
};

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const NEW_ITEMS = MASTERCLASS.map(toItem);
const LESSON = MASTERCLASS_LESSON;
const UNIT_ID = 'sons.09';

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own items and lesson and leaves everything
// else alone. So the item and lesson counts can only ever go UP, and a run that
// would reduce either means the file changed underneath it.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone would let a swap through: drop liaison, gain something else, same
// total. These are the ids that exist in the seed today and are not ours.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in the corpus: ${[...new Set(dupeIds)].join(', ')}`);

// Two entries teaching the same WORD is the .057 incident: the flashcard hub
// keys decks on `fr`, so a duplicate serves the same card twice and takes two
// SRS ratings for one word. Sentences are exempt, as in flashhub-coverage.
const byFr = new Map<string, string>();
const dupeWords: string[] = [];
for (const w of NEW_ITEMS) {
  if (w.kind === 'sentence') continue;
  const key = w.fr.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const prior = byFr.get(key);
  if (prior) dupeWords.push(`${prior} vs ${w.id} ("${w.fr}")`);
  else byFr.set(key, w.id);
}
if (dupeWords.length) die(`the same word twice in one theme:\n  ${dupeWords.join('\n  ')}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const density = validateDensity(LESSON, new Set(ALL_IDS));
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// This lesson's own claims, checked here too because this script writes the
// seed directly and a failure found at publish time is a failure found too late.
const thin = MASTERCLASS.filter((w) => w.rules.length < 2).map((w) => `${w.id} "${w.fr}"`);
if (thin.length) die(`entries exercising fewer than two rules:\n  ${thin.join('\n  ')}`);
for (const rule of RULES) {
  const n = MASTERCLASS.filter((w) => w.rules.includes(rule)).length;
  if (n < 8) die(`rule "${rule}" is exercised by only ${n} entries — the unit's canDo promises all five`);
}

// House-style guards, the same rules sons-alphabet.test.ts enforces over the
// whole seed.
const authored = JSON.stringify({ NEW_ITEMS, LESSON });
if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

// Every id the lesson names must resolve once the merge is done: against this
// batch, or against something already in the seed. An id that dangles renders
// as an empty card rather than erroring.
//
// This matters more here than in any earlier merge, because 22 of this lesson's
// 78 itemIds are REUSED from three other themes and are not written by this
// script at all. If one of them has been withdrawn upstream, the lesson would
// ship with a drill that renders nothing.
const willExist = new Set([...seed.items.map((i) => i.id), ...ids]);
const dangling = LESSON.itemIds.filter((id) => !willExist.has(id));
if (dangling.length) {
  die(
    `lesson names items that will not exist:\n  ${dangling.join('\n  ')}\n` +
    `  If these are REUSED ids, they have been withdrawn upstream: fix REUSED, do not add them here.`
  );
}

// And the reused ids must still say what this lesson thinks they say. A reused
// item is content this lesson depends on and does not control, so a silent
// rewrite upstream would leave a mission teaching a contrast that is no longer
// in the sentence.
const seedFr = new Map(seed.items.map((i) => [i.id, i.fr]));
const drifted = REUSED.filter((r) => seedFr.get(r.id) !== r.fr)
  .map((r) => `${r.id}: seed says "${seedFr.get(r.id) ?? '(absent)'}", REUSED says "${r.fr}"`);
if (drifted.length) die(`reused items have drifted:\n  ${drifted.join('\n  ')}`);

// If the seed already has this lesson and it does NOT match what is authored
// here, something has published in between and the two copies have diverged.
const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}` +
    `\n  seed: ${existing.sections.length} sections, ${existing.itemIds.length} items` +
    `\n  here: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items` +
    `\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n`
  );
}

// ── Merge, idempotent by id ─────────────────────────────────────────────────

const byId = new Map(seed.items.map((i) => [i.id, i]));
let added = 0;
let updated = 0;
for (const it of NEW_ITEMS) {
  if (byId.has(it.id)) updated++;
  else added++;
  byId.set(it.id, it);
}
const nextItems = [...byId.values()];

const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const nextUnit: Unit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// A withdrawn id must not survive in the seed. This is the .057 shape: the seed
// was published from an older corpus and kept a row the source had dropped. The
// merge above only ever ADDS, so a stale row would sit there untouched.
const authoredIds = new Set(ids);
const stale = nextItems
  .filter((i) => i.theme === 'masterclass' && !authoredIds.has(i.id))
  .map((i) => `${i.id} "${i.fr}"`);
if (stale.length) {
  die(
    `the seed carries masterclass items this corpus no longer defines:\n  ${stale.join('\n  ')}\n` +
    `  These were withdrawn upstream. Remove them from the seed rather than letting the merge leave them.`
  );
}

// A merge that drops somebody else's content is a bug in this script, not an
// outcome to confirm, so it dies rather than asking.
const keptItems = nextItems.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const keptLessons = nextLessons.filter((l) => l.id !== LESSON.id).length;
const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
if (keptItems < OTHER_ITEMS || keptLessons < OTHER_LESSONS) {
  die(
    `this merge would DROP content that is not its own:\n` +
    `  other items:   ${OTHER_ITEMS} -> ${keptItems}\n` +
    `  other lessons: ${OTHER_LESSONS} -> ${keptLessons}\n` +
    `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`
  );
}
// And named, not merely counted, so a one-for-one swap cannot pass.
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);

const q = LESSON.sections.find((s) => s.type === 'quiz');

console.log(`  items: +${added} new, ${updated} updated (${seed.items.length} → ${nextItems.length})`);
console.log(`  reused (referenced by id, not written): ${REUSED.length}`);
console.log(`  lesson: ${LESSON.id} ${existing ? 'REPLACED' : 'ADDED'} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length} (${MASTERCLASS_IDS.length} authored + ${REUSED.length} reused)`);
console.log(`  quiz: ${q && q.type === 'quiz' ? quizQuestions(q).length : 0} questions, ${multiRuleCount()} of them multi-rule`);
console.log(`  reframe: "${REFRAME}"`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  2+ rules ✓  reused parity ✓  no duplicate words ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n` +
  `\n  BEFORE ANYONE RUNS pnpm content:publish:` +
  `\n  publish regenerates seed.json FROM Postgres, so every lesson listed above` +
  `\n  must exist in the database first. Check each one, do not assume:` +
  `\n` +
  `\n    select slug from content_units where kind = 'lesson' order by slug;` +
  `\n` +
  `\n  A lesson that is in this list and not in that query is one a publish deletes.\n`
);
