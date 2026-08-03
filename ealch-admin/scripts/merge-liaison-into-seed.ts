// Merge the authored sons.10 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-liaison-batch.ts writes to POSTGRES, which is the source of truth,
// and `pnpm content:publish` then regenerates seed.json from it. That is the
// correct pipeline and this script does not replace it.
//
// But the app reads seed.json, not Postgres. Until someone with database
// access runs the batch and publishes, the lesson is invisible both to
// lesson-contract.test.ts (the gate that checks EVERY lesson in the seed) and
// to the device, so it could not be walked or verified.
//
//   author-liaison-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-liaison-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── What is different about THIS merge ─────────────────────────────────────
//
// The other merges only ADD items. This one CURATES 165 rows that already
// exist in the seed and are already live: it writes tags, respell, notes and
// drills onto them and must leave fr, en and ipa exactly as found. The
// curation is keyed by id and copies the existing row forward, so the sentence
// text is never sourced from this repo and cannot be clobbered by a typo here.
// The script asserts that afterwards rather than trusting it.
//
// ── The hazard (incidents 2026-07-31 and 2026-08-02) ───────────────────────
//
// Writing seed.json directly makes git run AHEAD of Postgres. publish-content
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that happens BEFORE the batch has been applied silently deletes this
// work. It matters more here than usual: this merge UPDATES 165 rows that are
// already published, so a careless publish regresses live content rather than
// merely losing an addition.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-liaison-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-liaison-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { formatIssues, validateItem, validateLesson, validateUnit, type Item, type Lesson, type Unit } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { LIAISON_IDS, NEW, UPDATES, toItem } from './data/liaison-corpus.ts';
import { LIAISON_LESSON } from './data/liaison-lesson.ts';

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
const NEW_ITEMS = NEW.map(toItem);
const LESSON = LIAISON_LESSON;

// Never shrink the seed: this script merges, so counts can only go up.
const OWN = new Set(LIAISON_IDS);
const OTHER_ITEMS = seed.items.filter((i) => !OWN.has(i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const density = validateDensity(LESSON, new Set(LIAISON_IDS));
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

const unit = seed.units.find((u) => u.id === 'sons.10');
if (!unit) die('unit sons.10 is not in the seed');

// Every curated id must already be in the seed. If one is missing there is
// nothing to curate and the row would be written with no sentence at all.
const seedById = new Map(seed.items.map((i) => [i.id, i]));
const missing = UPDATES.filter((u) => !seedById.has(u.id));
if (missing.length) {
  die(
    `${missing.length} curated items are not in the seed, so there is nothing to curate:\n  ` +
      missing.slice(0, 10).map((m) => m.id).join('\n  ')
  );
}

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

const byId = new Map(seed.items.map((i) => [i.id, { ...i }]));

// The curation. Note what is NOT assigned: fr, en and ipa are carried straight
// through from the existing row.
let curated = 0;
for (const u of UPDATES) {
  const row = byId.get(u.id)!;
  byId.set(u.id, {
    ...row,
    tags: u.tags,
    drills: u.drills,
    ...(u.respell ? { respell: u.respell } : {}),
    ...(u.notes ? { notes: u.notes } : {}),
    version: (row.version ?? 1) + 1,
  });
  curated++;
}

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
const nextUnits = seed.units.map((u) => (u.id === 'sons.10' ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// ── Guards ──────────────────────────────────────────────────────────────────

const keptItems = nextItems.filter((i) => !OWN.has(i.id)).length;
const keptLessons = nextLessons.filter((l) => l.id !== LESSON.id).length;
if (keptItems < OTHER_ITEMS || keptLessons < OTHER_LESSONS) {
  die(
    `this merge would DROP content that is not its own:\n` +
      `  other items:   ${OTHER_ITEMS} -> ${keptItems}\n` +
      `  other lessons: ${OTHER_LESSONS} -> ${keptLessons}\n` +
      `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`
  );
}

// The curation must not have touched a single sentence.
const nextById = new Map(nextItems.map((i) => [i.id, i]));
for (const u of UPDATES) {
  const before = seedById.get(u.id)!;
  const after = nextById.get(u.id)!;
  for (const field of ['fr', 'en', 'ipa'] as const) {
    if (before[field] !== after[field]) {
      die(
        `the curation changed ${u.id}.${field}, which it must never do:\n` +
          `  before: ${JSON.stringify(before[field])}\n` +
          `  after:  ${JSON.stringify(after[field])}`
      );
    }
  }
}

console.log(`  curated: ${curated} existing items (tags, respell, notes, drills; fr/en/ipa untouched)`);
console.log(`  authored: +${added} new, ${updated} updated (${seed.items.length} → ${nextItems.length})`);
console.log(`  lesson: ${LESSON.id} ${existing ? 'REPLACED' : 'ADDED'} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  unit sons.10 lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  validators: schema ✓  density ✓  no sentence altered ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
    `\n  IMPORTANT: seed.json now runs AHEAD of Postgres.` +
    `\n  Run \`pnpm content:liaison\` before anyone runs \`pnpm content:publish\`,` +
    `\n  or the publish will regenerate seed.json from the database and delete this work.` +
    `\n  This merge CURATES 165 already-published rows, so that publish would regress live content.\n`
);
