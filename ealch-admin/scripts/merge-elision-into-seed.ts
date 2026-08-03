// Merge the authored sons.07 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-elision-batch.ts writes to POSTGRES, which is the source of truth,
// and `pnpm content:publish` then regenerates seed.json from it. That is the
// correct pipeline and this script does not replace it.
//
// But the app READS seed.json — src/services/content.ts imports it directly —
// and so do the tests. lesson-contract.test.ts is the gate that checks every
// lesson in the seed, and sons-07-elision.test.ts self-skips its seed-parity
// assertions when the lesson is absent. Until the seed carries this lesson it
// is invisible both to a learner and to the gate.
//
// So this script does the seed-direct half, deliberately and visibly:
//
//   author-elision-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-elision-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── Why a merge rather than `pnpm content:publish` (state, 2026-08-03) ─────
//
// The normal way to get a lesson into the seed is to publish, which rewrites
// seed.json FROM Postgres. Right now that would destroy content:
//
//   sons.07.l1 (elision)  in Postgres, NOT in the seed   <- this script fixes
//   sons.10.l1 (liaison)  in the seed, NOT in Postgres   <- a publish deletes
//
// A publish today regenerates the seed from a database that has never seen
// liaison, so liaison's 24 sections and 213 itemIds would be silently dropped.
// That is exactly what happened to THIS lesson: it was applied to the seed by
// one process and then erased by someone else's publish, and it survived only
// because its source files were intact.
//
// Merging adds elision without touching liaison, so neither lesson is lost and
// nobody has to win. The split is still real and still has to be closed: the
// liaison lesson needs applying to Postgres before anyone publishes again.
// This script prints that, every run.
//
// ── The hazard this script is careful about (incident 2026-07-31) ──────────
//
// Writing seed.json directly makes git run AHEAD of Postgres. publish-content
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that happens BEFORE the batch has been applied will silently delete
// this lesson from the seed. That is not hypothetical: it is what happened to
// sons.03.l1 (20 sections collapsed to 6) and to five lessons' `overview`.
//
// For THIS lesson the batch has already been applied (2026-08-03), so the two
// agree. The script still checks rather than assuming, because "someone told
// me it was applied" is not a guarantee and the cost of being wrong is a
// silent deletion.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-elision-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-elision-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { formatIssues, quizQuestions, validateItem, validateLesson, validateUnit, type Item, type Lesson, type Unit } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { ELISION, toItem } from './data/elision-corpus.ts';
import { ELISION_LESSON, REFRAME } from './data/elision-lesson.ts';

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
const NEW_ITEMS = ELISION.map(toItem);
const LESSON = ELISION_LESSON;
const UNIT_ID = 'sons.07';

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own items and lesson and leaves everything
// else alone. So the item and lesson counts can only ever go UP, and a run that
// would reduce either means the file changed underneath it.
//
// That is not hypothetical, and this lesson is the reason the guard exists. A
// concurrent process added sons.07's items to seed.json between two runs of the
// accents merge, and the second run wrote back a state that no longer had them.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// The lessons this merge must not disturb, named rather than counted. A count
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

const density = validateDensity(LESSON, new Set(ids));
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House-style guards, the same rules sons-alphabet.test.ts enforces over the
// whole seed. Checked here too, because this script writes the seed directly
// and a failure found at publish time is a failure found too late.
const authored = JSON.stringify({ NEW_ITEMS, LESSON });
if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

// Every id the lesson names must resolve once the merge is done: against this
// batch, or against something already in the seed. An id that dangles renders
// as an empty card rather than erroring.
const willExist = new Set([...seed.items.map((i) => i.id), ...ids]);
const dangling = LESSON.itemIds.filter((id) => !willExist.has(id));
if (dangling.length) die(`lesson names items that will not exist:\n  ${dangling.join('\n  ')}`);

// If the seed already has this lesson and it does NOT match what is authored
// here, something has published in between and the two copies have diverged.
// Overwriting would destroy whichever one is newer, so warn loudly and let a
// human decide which is which.
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
// was published from an older corpus and kept a row the source had dropped.
// The merge above only ever ADDS, so a stale row would sit there untouched.
const authoredIds = new Set(ids);
const stale = nextItems
  .filter((i) => i.theme === 'elision' && !authoredIds.has(i.id))
  .map((i) => `${i.id} "${i.fr}"`);
if (stale.length) {
  die(
    `the seed carries elision items this corpus no longer defines:\n  ${stale.join('\n  ')}\n` +
    `  These were withdrawn upstream. Remove them from the seed rather than letting the merge leave them.`
  );
}

// The guard described above. A merge that drops somebody else's content is a
// bug in this script, not an outcome to confirm, so it dies rather than asking.
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
console.log(`  lesson: ${LESSON.id} ${existing ? 'REPLACED' : 'ADDED'} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${q && q.type === 'quiz' ? quizQuestions(q).length : 0}`);
console.log(`  reframe: "${REFRAME}"`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n` +
  `\n  sons.07.l1 is now in BOTH Postgres and the seed, so this lesson is safe.` +
  `\n` +
  `\n  STILL OPEN: sons.10.l1 (liaison) is in the seed and NOT in Postgres.` +
  `\n  \`pnpm content:publish\` regenerates seed.json from the database and would` +
  `\n  delete it. Apply liaison to Postgres before anyone publishes.\n`
);
