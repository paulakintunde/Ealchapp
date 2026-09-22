// TEMPORARY seed-direct application of scripts/author-narration-batch.ts.
//
// The canonical path is author-narration-batch.ts writing to Postgres, then
// `pnpm content:publish` regenerating seed.json from the DB. That path is
// blocked right now: the Supabase project (ogbothupjcivwruesgsu) is paused
// (status INACTIVE) and this session has no permission to restore it.
//
// seed.json is what the app actually reads (dev builds and, once an EAS
// Update ships it, production too), so this script applies the SAME
// narration content directly to seed.json — schema-validated with the same
// validateLesson() the DB path uses — to make the goal's effect real and
// testable now, without needing the database up.
//
// HAZARD (see memory: "Ealch seed-direct vs DB hazard" — git can run ahead
// of Postgres): once the Supabase project is restored, `author-narration-
// batch.ts` MUST be run for real against the DB BEFORE anyone runs
// `content:publish` again — a publish regenerates seed.json FROM the DB, so
// running it first would silently wipe every narration script this script
// just added back out. Do the DB batch first, then publish; never publish
// before reconciling.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/apply-narration-seed.ts --dry-run    validate + report only
//   pnpm tsx scripts/apply-narration-seed.ts              write seed.json in place

import * as fs from 'node:fs';
import * as path from 'node:path';
import {
  validateLesson,
  LESSON_FEATURES,
  type Lesson,
  type LessonNarration,
  type LessonFeature,
} from '../../ealch-v2/src/content/schema.ts';

const DRAFTS_DIR =
  'C:\\Users\\harki\\AppData\\Local\\Temp\\claude\\c--Users-harki-Downloads-gitbuild-appealch-Ealchapp\\dee64b68-cb3d-4507-bd05-2b3c59bfc30c\\scratchpad\\narration';

const SEED_PATH = path.resolve(__dirname, '../../ealch-v2/src/content/seed.json');

const CAMILLE_VOICE_ID = 'camille-fr-ca-01';

const LESSON_IDS = [
  'sons.02.l1', 'sons.03.l1', 'sons.06.l1', 'sons.10.l1',
  'a1.01.l1', 'a1.05.l1', 'a1.06.l1', 'a1.07.l1', 'a1.08.l1', 'a1.09.l1',
  'a1.10.l1', 'a1.11.l1', 'a1.12.l1', 'a1.13.l1', 'a1.14.l1', 'a1.15.l1',
  'a1.16.l1', 'a1.17.l1', 'a1.18.l1', 'a1.19.l1', 'a1.20.l1', 'a1.21.l1',
  'a1.22.l1', 'a1.23.l1', 'a1.24.l1', 'a1.25.l1', 'a1.26.l1', 'a1.29.l1',
  'a1.30.l1', 'a1.30.l2',
];

type Draft = { ratioEnFr: number; stages: LessonNarration['stages'] };

function loadDraft(lessonId: string): Draft {
  const p = path.join(DRAFTS_DIR, `draft-${lessonId}.json`);
  return JSON.parse(fs.readFileSync(p, 'utf8')) as Draft;
}

function withNarratedFeature(existing: LessonFeature[] | undefined): LessonFeature[] {
  const set = new Set<LessonFeature>([...(existing ?? []), 'narrated']);
  return LESSON_FEATURES.filter((f) => set.has(f));
}

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

function main() {
  const drafts = new Map<string, Draft>();
  for (const id of LESSON_IDS) drafts.set(id, loadDraft(id));

  const authoredText = JSON.stringify([...drafts.values()]);
  if (authoredText.includes('—')) die('em dash found in authored narration copy, the house style bans it');
  if (/honest/i.test(authoredText)) die('the word "honest" is banned from authored content');

  const seed = JSON.parse(fs.readFileSync(SEED_PATH, 'utf8')) as { lessons: Lesson[]; [k: string]: unknown };

  let updated = 0;
  let skipped = 0;

  for (const id of LESSON_IDS) {
    const idx = seed.lessons.findIndex((l) => l.id === id);
    if (idx === -1) {
      console.error(`  ✗ ${id}: not found in seed.json — skipping`);
      skipped++;
      continue;
    }
    const lesson = seed.lessons[idx];
    if (lesson.narration) {
      console.log(`  · ${id}: already has narration — skipping`);
      skipped++;
      continue;
    }

    const draft = drafts.get(id)!;
    const narration: LessonNarration = {
      camilleVoiceId: CAMILLE_VOICE_ID,
      ratioEnFr: draft.ratioEnFr,
      stages: draft.stages,
    };

    const next: Lesson = {
      ...lesson,
      narration,
      features: withNarratedFeature(lesson.features),
      version: (lesson.version ?? 1) + 1,
    };

    const issues = validateLesson(next, next.id);
    if (issues.length) {
      die(`post-state for lesson ${id} fails validateLesson:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
    }

    console.log(`  ✓ ${id} — v${lesson.version ?? 1} → v${next.version}, ${narration.stages.length} stages, ratioEnFr ${narration.ratioEnFr}, features ${JSON.stringify(next.features)}`);
    seed.lessons[idx] = next;
    updated++;
  }

  console.log(
    DRY_RUN
      ? `\n✓ dry run — ${updated} lesson(s) would be updated in seed.json, ${skipped} skipped.\n`
      : `\n(writing seed.json — ${updated} lesson(s) updated, ${skipped} skipped)\n`
  );

  if (DRY_RUN) return;

  fs.writeFileSync(SEED_PATH, JSON.stringify(seed, null, 2) + '\n');
  console.log(`✓ seed.json written. REMINDER: run author-narration-batch.ts against the DB once it's back up, BEFORE any content:publish.\n`);
}

main();
