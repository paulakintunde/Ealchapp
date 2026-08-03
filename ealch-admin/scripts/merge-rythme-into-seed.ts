// Merge the authored sons.08 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-rythme-batch.ts writes to POSTGRES, which is the source of truth, and
// `pnpm content:publish` then regenerates seed.json from it. That is the
// correct pipeline and this script does not replace it.
//
// But the app reads seed.json, not Postgres. Until someone with database access
// runs the batch and publishes, the lesson is invisible both to
// lesson-contract.test.ts (the gate that checks EVERY lesson in the seed) and
// to the device, so it could not be walked or verified.
//
//   author-rythme-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-rythme-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── What is different about THIS merge, and it matters ─────────────────────
//
// merge-liaison-into-seed.ts asserts that `fr`, `en` and `ipa` come through the
// curation untouched. This one CANNOT assert that about `ipa`, because adding
// the phrase-break mark to the IPA is the entire point of the curation:
//
//   before:  lə ma.tɛ̃ ʒə bwa mɔ̃ ka.fe tʁɑ̃.kil.mɑ̃
//   after:   lə ma.tɛ̃ | ʒə bwa mɔ̃ ka.fe tʁɑ̃.kil.mɑ̃
//
// So the guard here is narrower and stricter instead: `fr` and `en` must be
// byte-identical, and the new `ipa` must equal the old one with ' | ' marks
// inserted and nothing else changed. Stripping the marks back out must return
// exactly the published string. That is checked per row, after the merge, and
// it is what makes a typo in this repo unable to clobber a published sentence.
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
//   pnpm tsx scripts/merge-rythme-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-rythme-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues,
  validateItem,
  validateLesson,
  validateUnit,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { EXISTING_IDS, NEW_IDS, RYTHME, RYTHME_IDS } from './data/rythme-corpus.ts';
import { RYTHME_LESSON } from './data/rythme-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

type Seed = { items: Item[]; lessons: Lesson[]; units: Unit[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const LESSON = RYTHME_LESSON;

/** The full Item for a curated or authored row. */
const toItem = (r: (typeof RYTHME)[number], prev?: Item): Item => ({
  ...(prev ?? {}),
  id: r.id,
  kind: 'sentence',
  level: 'sons',
  theme: 'rythme',
  // fr and en are carried from the PUBLISHED row wherever one exists, so the
  // sentence text can never be sourced from this repo for an item that already
  // shipped. Only the 24 new rows take their text from here.
  fr: prev?.fr ?? r.fr,
  en: prev?.en ?? r.en,
  ipa: r.ipa,
  respell: r.respell,
  tags: r.tags,
  drills: ['sentence', 'review', 'dictation', 'voiceflash'],
  audioRef: null,
  version: (prev?.version ?? 1) + 1,
  register: 'courant',
});

// Never shrink the seed: this script merges, so counts can only go up.
const OWN = new Set(RYTHME_IDS);
const OTHER_ITEMS = seed.items.filter((i) => !OWN.has(i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

const seedById = new Map(seed.items.map((i) => [i.id, i]));

// Every curated id must already be in the seed. If one is missing there is
// nothing to curate and the row would be written with no sentence at all.
const missing = EXISTING_IDS.filter((id) => !seedById.has(id));
if (missing.length) {
  die(
    `${missing.length} curated items are not in the seed, so there is nothing to curate:\n  ` +
      missing.slice(0, 10).join('\n  ')
  );
}
// And every authored id must NOT be, or this is a re-run over a different set.
const collided = NEW_IDS.filter((id) => seedById.has(id));
if (collided.length && !DRY_RUN) {
  console.warn(`\n! ${collided.length} authored ids already exist in the seed; they will be replaced.\n`);
}

// ── Validate before writing anything ────────────────────────────────────────

const nextItemList = RYTHME.map((r) => toItem(r, seedById.get(r.id)));
const itemIssues = nextItemList.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const density = validateDensity(LESSON, new Set(RYTHME_IDS));
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

const unit = seed.units.find((u) => u.id === 'sons.08');
if (!unit) die('unit sons.08 is not in the seed');

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}` +
      `\n  seed: ${existing.sections.length} sections, ${existing.itemIds.length} items` +
      `\n  here: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items` +
      '\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n'
  );
}

// ── Merge, idempotent by id ─────────────────────────────────────────────────

const byId = new Map(seed.items.map((i) => [i.id, { ...i }]));
let curated = 0;
let added = 0;
for (const it of nextItemList) {
  if (byId.has(it.id)) curated++;
  else added++;
  byId.set(it.id, it);
}
const nextItems = [...byId.values()];
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];
const nextUnit: Unit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === 'sons.08' ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// ── Guards ──────────────────────────────────────────────────────────────────

const keptItems = nextItems.filter((i) => !OWN.has(i.id)).length;
const keptLessons = nextLessons.filter((l) => l.id !== LESSON.id).length;
if (keptItems < OTHER_ITEMS || keptLessons < OTHER_LESSONS) {
  die(
    'this merge would DROP content that is not its own:\n' +
      `  other items:   ${OTHER_ITEMS} -> ${keptItems}\n` +
      `  other lessons: ${OTHER_LESSONS} -> ${keptLessons}\n` +
      '  Something rewrote seed.json underneath this run. Re-run it; do not force it.'
  );
}

// The curation must not have altered a published sentence. `fr` and `en` are
// byte-identical; `ipa` may gain ' | ' marks and NOTHING else, which is checked
// by stripping them back out and demanding the published string returns.
const nextById = new Map(nextItems.map((i) => [i.id, i]));
const stripBreaks = (s: string) => s.replace(/\s*\|\s*/gu, ' ').replace(/\s+/gu, ' ').trim();
for (const id of EXISTING_IDS) {
  const before = seedById.get(id)!;
  const after = nextById.get(id)!;
  for (const field of ['fr', 'en'] as const) {
    if (before[field] !== after[field]) {
      die(
        `the curation changed ${id}.${field}, which it must never do:\n` +
          `  before: ${JSON.stringify(before[field])}\n` +
          `  after:  ${JSON.stringify(after[field])}`
      );
    }
  }
  if (stripBreaks(after.ipa ?? '') !== stripBreaks(before.ipa ?? '')) {
    die(
      `the curation changed ${id}.ipa by more than inserting phrase breaks:\n` +
        `  before: ${JSON.stringify(before.ipa)}\n` +
        `  after:  ${JSON.stringify(after.ipa)}\n` +
        '  Adding " | " is allowed. Changing a single sound is not.'
    );
  }
}

const marked = EXISTING_IDS.filter((id) => (nextById.get(id)!.ipa ?? '').includes('|')).length;

console.log(`  curated: ${curated} existing items (ipa gains phrase breaks; respell, tags and drills added)`);
console.log(`    of those, ${marked} carry a phrase-break mark (the rest are single-group phrases)`);
console.log(`  authored: +${added} new (${seed.items.length} → ${nextItems.length})`);
console.log(`  lesson: ${LESSON.id} ${existing ? 'REPLACED' : 'ADDED'} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  unit sons.08 lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log('  validators: schema ✓  density ✓  no sentence altered ✓');

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  '\n✓ seed.json updated.' +
    '\n  IMPORTANT: seed.json now runs AHEAD of Postgres.' +
    '\n  Run `pnpm content:rythme` before anyone runs `pnpm content:publish`,' +
    '\n  or the publish will regenerate seed.json from the database and delete this work.' +
    '\n  This merge CURATES 165 already-published rows, so that publish would regress live content.\n'
);
