// Content Batch — narration for every sons.* and a1.* lesson that still
// lacks it (goal: "add narration to all the sons lessons and A1 lessons").
//
// Before this batch: sons.01, .04, .05, .07, .08, .09 and a1.02, .03, .04,
// .27, .28 already carry a LessonNarration. This batch fills the remaining
// 4 sons lessons (.02, .03, .06, .10) and 26 a1 lessons (.01, .05-.26 minus
// the five above, .29, .30.l1, .30.l2), so every lesson in both levels has a
// narration script and the 'narrated' feature.
//
// Each lesson's script (7 stages: warm/focus/input/practice/produce/check/
// cheat) was drafted against that lesson's own real content (title, intro,
// grammarIntroduced, corpus sample items pulled from seed.json) and is read
// here from a JSON file per lesson — see DRAFTS_DIR. Two lessons (a1.30.l1,
// the bilan, and a1.30.l2, the exam) carry no new grammar/items, so their
// scripts are review/exam framing instead, per the same house pattern.
//
// This ONLY adds `narration` + the 'narrated' feature to lessons that
// already exist and already ship real content — no new items, no new
// itemIds, no id-range concerns (see memory: concurrent lesson builds race
// for ids — this batch mints none). Audio stays on-device TTS, same as
// every other narrated lesson today (`pnpm audio:render` is a separate,
// later pass, unchanged by this batch).
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-narration-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-narration-batch.ts              apply, one transaction per lesson
//   then: pnpm content:publish                              ships OTA; check git diff on seed.json first

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
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

const SEED = path.resolve(__dirname, '../../ealch-v2/src/content/seed.json');

const CAMILLE_VOICE_ID = 'camille-fr-ca-01'; // same value every already-shipped narrated lesson uses

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

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Narration is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const drafts = new Map<string, Draft>();
  for (const id of LESSON_IDS) drafts.set(id, loadDraft(id));

  // Reference for the self-heal branch below: the working-tree seed already
  // carries this batch's post-narration version for each of the LESSON_IDS
  // (apply-narration-seed.ts's version+1 twin). If a lesson already has
  // narration in Postgres but its version is one behind the seed's, an
  // earlier run of this script wrote the narration without the version bump
  // (fixed below) — repair it instead of leaving the two copies mismatched.
  const seedVersion = new Map<string, number>();
  for (const l of (JSON.parse(fs.readFileSync(SEED, 'utf8')) as { lessons: Lesson[] }).lessons) {
    seedVersion.set(l.id, l.version);
  }

  // House-style guards, same rules sons-alphabet.test.ts enforces on the seed.
  const authoredText = JSON.stringify([...drafts.values()]);
  if (authoredText.includes('—')) die('em dash found in authored narration copy, the house style bans it');
  if (/honest/i.test(authoredText)) die('the word "honest" is banned from authored content');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  let updated = 0;
  let skipped = 0;

  try {
    for (const id of LESSON_IDS) {
      const row = await client.query<{ body: Lesson }>(
        `select body from content_units where kind = 'lesson' and body->>'id' = $1`,
        [id]
      );
      if (row.rowCount !== 1) {
        console.error(`  ✗ ${id}: expected 1 row, found ${row.rowCount} — skipping`);
        skipped++;
        continue;
      }

      const lesson: Lesson = row.rows[0].body;
      if (lesson.narration) {
        const wantVersion = seedVersion.get(id);
        if (wantVersion !== undefined && lesson.version === wantVersion - 1) {
          const healed: Lesson = { ...lesson, version: wantVersion };
          const issues = validateLesson(healed, healed.id);
          if (issues.length) {
            die(`version-heal post-state for lesson ${id} fails validateLesson:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
          }
          console.log(`  ~ ${id}: narration present, version behind seed — healing v${lesson.version} → v${healed.version}`);
          if (!DRY_RUN) {
            await client.query('begin');
            try {
              const res = await client.query(
                `update content_units set body = $1::jsonb, updated_at = now() where kind = 'lesson' and body->>'id' = $2`,
                [JSON.stringify(healed), id]
              );
              if (res.rowCount !== 1) throw new Error(`version-heal touched ${res.rowCount} rows for lesson ${id}`);
              await client.query('commit');
            } catch (e) {
              await client.query('rollback').catch(() => {});
              throw e;
            }
          }
          updated++;
          continue;
        }
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

      if (DRY_RUN) {
        updated++;
        continue;
      }

      await client.query('begin');
      try {
        const res = await client.query(
          `update content_units set body = $1::jsonb, updated_at = now() where kind = 'lesson' and body->>'id' = $2`,
          [JSON.stringify(next), id]
        );
        if (res.rowCount !== 1) throw new Error(`update touched ${res.rowCount} rows for lesson ${id}`);
        await client.query('commit');
      } catch (e) {
        await client.query('rollback').catch(() => {});
        throw e;
      }
      updated++;
    }

    console.log(
      DRY_RUN
        ? `\n✓ dry run — ${updated} lesson(s) would be updated, ${skipped} skipped.\n`
        : `\n✓ narration applied to ${updated} lesson(s), ${skipped} skipped. Run content:publish.\n`
    );
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
