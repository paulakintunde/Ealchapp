// Content Batch — Les lettres muettes: the sons.06.l1 full-rig lesson.
//
// sons.06 ("Les lettres muettes") ships today with lessonIds: [] — the unit
// exists, the lesson does not. This batch authors it, plus the 63-word lexeme
// corpus it teaches from, as the first lesson built on Lesson Architecture v2.
//
// The content and the corpus live in scripts/data/ (muettes-lesson.ts and
// muettes-corpus.ts) rather than inline here, because both are large and both
// are checked by the app's own test suite at authoring time:
//
//   ealch-v2/src/content/sons-06-muettes.test.ts
//
// That test is the real gate. It runs in CI on every push, imports these two
// files directly, and asserts the whole self-check list: 20 missions in spine
// order, 32 questions across 4 rounds with a why and a ref on every one, the
// reframe verbatim seven times, all 63 itemIds resolving, tranches releasing
// only taught words, every act claiming its sections, no act running past the
// checkpoint limit, the trigger-to-drill wiring intact, four reference sheets,
// eleven recording briefs, no em dash. This script re-runs the same
// validators before it writes so a broken batch dies before it touches the
// database, but the durable check is the test.
//
// Same contract as author-consonnes-batch.ts: everything validates BEFORE the
// database is touched, then the whole set upserts inside ONE transaction.
// Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-muettes-batch.ts --dry-run   validate + report only
//   pnpm tsx scripts/author-muettes-batch.ts             apply, one transaction
//   then: pnpm audio:render --only sons.06.l1   (when the audio pass is scheduled)
//   then: pnpm content:publish                  (ships OTA; CHECK git diff on
//                                                seed.json first — see the
//                                                seed-direct hazard note below)

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
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
import { MUETTES, MUETTES_IDS, toItem } from './data/muettes-corpus.ts';
import { MUETTES_LESSON, REFRAME } from './data/muettes-lesson.ts';

const NEW_ITEMS: Item[] = MUETTES.map(toItem);
const LESSON: Lesson = MUETTES_LESSON;

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  // ── Everything validates before the database is touched ──────────────────

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build.
  const density = validateDensity(LESSON, new Set(ids));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules sons-alphabet.test.ts enforces.
  const authored = JSON.stringify({ NEW_ITEMS, LESSON });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  // The reframe is the lesson's spine. Seven verbatim appearances, and a
  // reworded one is a silent regression the density rule alone would pass.
  const reframeHits = (authored.match(new RegExp(REFRAME.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length;
  if (reframeHits !== 7) die(`the reframe appears ${reframeHits} times, expected exactly 7`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must exist after this batch: either it is
    // in the batch, or it is already published.
    const reused = MUETTES_IDS.filter((id) => !ids.includes(id));
    if (reused.length) {
      const found = await client.query<{ id: string }>(
        `select id from content_items where id = any($1) and status = 'published'`,
        [reused]
      );
      const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
      if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);
    }

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'sons.06'`
    );
    if (unitRow.rowCount !== 1) die(`unit "sons.06" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;
    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query(
      `select 1 from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );

    const quiz = LESSON.sections.find((s) => s.type === 'quiz');
    console.log(`\n  new items: ${NEW_ITEMS.length} (fr.sons.muettes.001-${String(NEW_ITEMS.length).padStart(3, '0')})`);
    console.log(`  reused items: ${reused.length}`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'updating' : 'NEW'}, ` +
      `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  quiz: ${quiz && quiz.type === 'quiz' ? quizQuestions(quiz).length : 0} questions in ${quiz && quiz.type === 'quiz' ? (quiz.rounds?.length ?? 0) : 0} rounds`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" x${reframeHits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓`);
    console.log(`  unit sons.06 lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version,
        ]
      );
    }

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = 'sons.06'`,
      [JSON.stringify(nextUnit)]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ muettes batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published, unit sons.06 linked.` +
      `\n  Next: check \`git diff\` on ealch-v2/src/content/seed.json BEFORE running pnpm content:publish.` +
      `\n  (seed.json can run AHEAD of the database during authoring; publishing over it destroys the newer copy.)\n`
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
