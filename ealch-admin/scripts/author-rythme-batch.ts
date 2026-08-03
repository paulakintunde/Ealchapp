// Content Batch — Rythme & intonation: the sons.08.l1 lesson, and the CURATION
// of the 165 corpus items it teaches from.
//
// ── This batch is different from every other author-*-batch script ─────────
//
// The others create items. This one mostly UPDATES them. The 165
// `theme: 'rythme'` items already exist and are already published; what they
// lacked was any rhythm markup at all (no stress mark, no phrase break, no
// respelling, no tags, and drills that excluded them from dictation).
//
// So the safety property that matters here is not "did it insert cleanly" but
// "did it insert AT ALL when it should have updated". The dry run prints the
// split, and it must read:
//
//     updates: 165    inserts: 24
//
// If it reports ~189 inserts, the corpus has been re-authored rather than
// curated: two sets of items would both resolve, the lesson would drill a
// random half, and the published rows would be silently orphaned. Stop and fix
// that before applying.
//
// Usage (from ealch-admin/):
//   pnpm content:rythme --dry-run   validate + report the update/insert split
//   pnpm content:rythme             apply, one transaction
//   then: pnpm audio:render --only sons.08.l1   (when the audio pass is scheduled)
//   then: pnpm content:publish                  (ships OTA; CHECK git diff on
//                                                seed.json first, and see the
//                                                note at the bottom of this file)

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
import { EXISTING_IDS, NEW_IDS, RYTHME, RYTHME_IDS } from './data/rythme-corpus.ts';
import { REFRAME, RYTHME_LESSON } from './data/rythme-lesson.ts';

/** The corpus rows as full Items. `drills` is where the curation actually
 *  bites: every one of the 165 shipped as ["sentence","review"], which excludes
 *  them from dictation and voiceflash. A dictée section naming an item with no
 *  'dictation' drill renders EMPTY, and lesson-contract.test.ts fails the
 *  lesson for it. */
const ITEMS: Item[] = RYTHME.map((r) => ({
  id: r.id,
  kind: 'sentence',
  level: 'sons',
  theme: 'rythme',
  fr: r.fr,
  en: r.en,
  ipa: r.ipa,
  respell: r.respell,
  tags: r.tags,
  // 'dictation' so the dictée can speak them; 'voiceflash' so the beat rows can
  // be reached from Flash; 'sentence' and 'review' preserved from the shipped
  // rows so nothing that already selects them stops working.
  drills: ['sentence', 'review', 'dictation', 'voiceflash'],
  audioRef: null,
  version: 2,
  register: 'courant',
}));

const LESSON: Lesson = RYTHME_LESSON;

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

  const itemIssues = ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const ids = ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  const density = validateDensity(LESSON, new Set(ids));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules the seed-wide tests enforce.
  const authored = JSON.stringify({ ITEMS, LESSON });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  // The reframe is the lesson's spine. A reworded appearance is a silent
  // regression that every other validator would pass.
  const reframeHits = (authored.match(new RegExp(REFRAME.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&'), 'gu')) ?? []).length;
  if (reframeHits < 6) die(`the reframe appears ${reframeHits} times, expected at least 6`);

  // The curation invariant, checked BEFORE any connection is opened: every one
  // of the 165 must carry the markup this batch exists to add.
  const bare = RYTHME.filter((r) => !r.respell || !r.tags.length);
  if (bare.length) die(`${bare.length} corpus rows still have no respell or no tags: ${bare.slice(0, 3).map((r) => r.id).join(', ')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // ── The check this script exists for ─────────────────────────────────
    // Which of our ids are ALREADY in the database? That, not our own
    // bookkeeping, is what decides update vs insert.
    const found = await client.query<{ id: string }>(
      `select id from content_items where id = any($1)`,
      [ids]
    );
    const present = new Set(found.rows.map((r) => r.id));
    const updates = ids.filter((id) => present.has(id));
    const inserts = ids.filter((id) => !present.has(id));

    console.log(`\n  corpus: ${ITEMS.length} rows`);
    console.log(`    updates: ${updates.length}   (already published, curated in place)`);
    console.log(`    inserts: ${inserts.length}   (authored to fill the audited gap)`);

    if (updates.length !== EXISTING_IDS.length || inserts.length !== NEW_IDS.length) {
      console.log(`\n  ⚠ expected ${EXISTING_IDS.length} updates and ${NEW_IDS.length} inserts.`);
      console.log('    A large insert count means the corpus was re-authored rather than curated.');
      if (inserts.length > NEW_IDS.length) {
        die(`${inserts.length} inserts is more than the ${NEW_IDS.length} authored additions — refusing to duplicate the corpus`);
      }
    }

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'sons.08'`
    );
    if (unitRow.rowCount !== 1) die('unit "sons.08" not found in content_units — cannot attach its lesson');
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
    const qs = quiz && quiz.type === 'quiz' ? quizQuestions(quiz) : [];
    const mix: Record<string, number> = {};
    for (const q of qs) mix[q.format ?? 'mcq'] = (mix[q.format ?? 'mcq'] ?? 0) + 1;
    const audible = (mix.speak ?? 0) + (mix.listenChoose ?? 0);

    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'updating' : 'NEW'}, ` +
      `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  quiz: ${qs.length} questions in ${quiz && quiz.type === 'quiz' ? (quiz.rounds?.length ?? 0) : 0} rounds`);
    console.log(`    format mix: ${Object.entries(mix).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`    speak+listenChoose: ${audible}/${qs.length} (${Math.round((100 * audible) / qs.length)}%) — the audible skill`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" x${reframeHits}`);
    console.log('  validators: schema ✓  density ✓  house style ✓');
    console.log(`  unit sons.08 lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of ITEMS) {
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
        where kind = 'curriculum_unit' and body->>'id' = 'sons.08'`,
      [JSON.stringify(nextUnit)]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ rythme batch applied: ${updates.length} items curated, ${inserts.length} added, lesson ${LESSON.id} published, unit sons.08 linked.` +
      '\n  Next: check `git diff` on ealch-v2/src/content/seed.json BEFORE running pnpm content:publish.' +
      '\n  This batch UPDATES 165 already-published rows, so a careless publish here can regress' +
      '\n  live content rather than merely fail to add to it.\n'
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
