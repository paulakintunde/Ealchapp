// Merge the authored sons.05 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-accents-batch.ts writes to POSTGRES, which is the source of truth,
// and `pnpm content:publish` then regenerates seed.json from it. That is the
// correct pipeline and this script does not replace it.
//
// But the app's tests read seed.json, not Postgres. Until someone with
// database access runs the batch and publishes, the lesson would be invisible
// to lesson-contract.test.ts, which is the gate that checks EVERY lesson in
// the seed. Shipping a lesson that has never been through that gate is
// exactly the failure mode the contract test was written for.
//
// So this script does the seed-direct half, deliberately and visibly:
//
//   author-accents-batch.ts   → Postgres   (needs DATABASE_URL)
//   merge-accents-into-seed.ts → seed.json (no DB, runs anywhere)
//
// ── The hazard this script is careful about (incident 2026-07-31) ──────────
//
// Writing seed.json directly makes git run AHEAD of Postgres. publish-content
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that happens BEFORE the batch has been applied will silently delete
// this lesson from the seed. That is not hypothetical: it is what happened to
// sons.03.l1 (20 sections collapsed to 6) and to five lessons' `overview`.
//
// The rule, therefore: run the batch too. This script prints that reminder
// every time, and refuses to run if the seed already carries a DIFFERENT copy
// of the lesson than the one being authored, because that would mean someone
// has published in between and the two have diverged.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-accents-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-accents-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { formatIssues, validateItem, validateLesson, validateUnit, type Item, type Lesson, type Unit } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { ACCENTS, toItem } from './data/accents-corpus.ts';
import { ACCENTS_LESSON } from './data/accents-lesson.ts';

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
const NEW_ITEMS = ACCENTS.map(toItem);
const LESSON = ACCENTS_LESSON;

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own items and lesson and leaves everything
// else alone. So the item and lesson counts can only ever go UP, and a run that
// would reduce either means the file changed underneath it.
//
// That is not hypothetical. A concurrent process added the sons.07 elision
// lesson (72 items) to seed.json between two runs of this script, and the
// second run wrote back a state that no longer had them. The content was
// recoverable only because its source files were intact.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const density = validateDensity(LESSON, new Set(NEW_ITEMS.map((i) => i.id)));
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

const unit = seed.units.find((u) => u.id === 'sons.05');
if (!unit) die('unit sons.05 is not in the seed');

// If the seed already has this lesson and it does NOT match what is authored
// here, something has published in between and the two copies have diverged.
// Overwriting would destroy whichever one is newer, so stop and let a human
// decide which is which.
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
const nextUnits = seed.units.map((u) => (u.id === 'sons.05' ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// The guard described above. A merge that drops somebody else's content is a
// bug in this script, not an outcome to confirm, so it dies rather than asking.
const keptItems = nextItems.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const keptLessons = nextLessons.filter((l) => l.id !== LESSON.id).length;
if (keptItems < OTHER_ITEMS || keptLessons < OTHER_LESSONS) {
  die(
    `this merge would DROP content that is not its own:\n` +
    `  other items:   ${OTHER_ITEMS} -> ${keptItems}\n` +
    `  other lessons: ${OTHER_LESSONS} -> ${keptLessons}\n` +
    `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`
  );
}

console.log(`  items: +${added} new, ${updated} updated (${seed.items.length} → ${nextItems.length})`);
console.log(`  lesson: ${LESSON.id} ${existing ? 'REPLACED' : 'ADDED'} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  unit sons.05 lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  validators: schema ✓  density ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n  IMPORTANT: seed.json now runs AHEAD of Postgres.` +
  `\n  Run \`pnpm content:accents\` before anyone runs \`pnpm content:publish\`,` +
  `\n  or the publish will regenerate seed.json from the database and delete this lesson.\n`
);
