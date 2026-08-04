// sons.09 "Masterclass" — batch. The last lesson in the sons track.
//
//   pnpm content:masterclass --dry-run   validate + report only
//   pnpm content:masterclass             apply, one transaction
//   then: pnpm tsx scripts/merge-masterclass-into-seed.ts
//   then, and only once Postgres and the seed agree: pnpm content:publish
//
// DO NOT run `pnpm audio:render` after this. Every recordingId this lesson
// declares resolves to nothing (CLIP_MANIFEST is empty by design) and every
// card falls back to device TTS, which is the correct shipping state. A render
// spends real ElevenLabs credits and per AUDIO-RENDER-SPEC.md only dictation
// and narration may incur that cost. `pnpm audio:render --dry-run` to cost a
// future render is fine.
//
// ── What this batch writes, and what it does not ───────────────────────────
//
// 56 NEW items in theme 'masterclass', inserted whole and idempotent by id.
//
// It does NOT touch the 22 items the lesson REUSES. Those already exist, are
// already published, and are referenced by id from the lesson body: no update
// statement names them, so a mistake here cannot reach them. A dry run must
// report 56 inserts and 0 updates. If it reports anything else, something has
// been re-authored rather than reused: stop.

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
import { referencedRecordingIds } from '../../ealch-v2/src/content/lessonAudio.logic.ts';
import { buildQuizConfig, drillForRound } from '../../ealch-v2/src/content/quizRounds.logic.ts';
import {
  ALL_IDS,
  MASTERCLASS,
  MASTERCLASS_IDS,
  REUSED,
  REUSED_IDS,
  RULES,
  familyIds,
  pairs,
  toItem,
} from './data/masterclass-corpus.ts';
import { MASTERCLASS_LESSON, PIPELINE, REFRAME } from './data/masterclass-lesson.ts';
import { AUTHORED_QUESTIONS, formatMix, multiRuleCount } from './data/masterclass-quiz.ts';

const NEW_ITEMS: Item[] = MASTERCLASS.map(toItem);
const LESSON: Lesson = MASTERCLASS_LESSON;
const UNIT_ID = 'sons.09';

/** The reframe is the lesson's spine. Pinned here AND in
 *  sons-09-masterclass.test.ts; the two must agree or this script dies first. */
const REFRAME_COUNT = 8;
/** How many of the 48 questions need two or more rules. A masterclass quiz that
 *  drifted back to single-rule recall would pass every generic check. */
const MULTI_RULE_FLOOR = 36;

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main(): Promise<void> {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('DATABASE_URL is not set. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  // ── Validation gate. Nothing touches Postgres until every check passes. ──

  for (const it of NEW_ITEMS) {
    const issues = validateItem(it, it.id);
    if (issues.length) die(`item ${it.id} fails the schema:\n${formatIssues(issues)}`);
  }

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids inside the batch:\n  ${[...new Set(dupes)].join('\n  ')}`);

  // An authored id that collides with a reused one would silently overwrite a
  // shipped row with this lesson's copy of it.
  const reused = new Set(REUSED_IDS);
  const collide = ids.filter((id) => reused.has(id));
  if (collide.length) die(`authored ids collide with reused ones: ${collide.join(', ')}`);

  // Two entries teaching the same WORD is the .057 shape: the flashcard hub
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
  if (lessonIssues.length) die(`lesson fails the schema:\n${formatIssues(lessonIssues)}`);

  const density = validateDensity(LESSON, new Set(ALL_IDS));
  if (density.length) die(`lesson fails the density rules:\n${formatDensity(density)}`);

  // House style. Both are test-enforced app-side; catching them here means the
  // batch fails before the database rather than after.
  const authored = JSON.stringify({ MASTERCLASS, LESSON });
  if (authored.includes('—')) die('authored copy contains an em dash');
  if (/honest/i.test(authored)) die('authored copy contains "honest"');

  const reframeHits = (authored.match(new RegExp(REFRAME.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length;
  if (reframeHits !== REFRAME_COUNT) {
    die(`the reframe appears ${reframeHits} times, expected exactly ${REFRAME_COUNT}`);
  }

  // ── The five checks specific to THIS lesson ──

  // 1. Every entry exercises two or more rules. A single-rule item belongs in
  //    the lesson that taught that rule and teaches nothing new here.
  const thin = MASTERCLASS.filter((w) => w.rules.length < 2).map((w) => `${w.id} "${w.fr}"`);
  if (thin.length) die(`entries exercising fewer than two rules:\n  ${thin.join('\n  ')}`);

  // 2. Every one of the five rules the unit's canDo names is actually
  //    exercised, and by enough entries to drill. A rule quietly dropped
  //    during authoring would leave the unit promising something it never
  //    teaches, and nothing else in the pipeline would notice.
  for (const rule of RULES) {
    const n = MASTERCLASS.filter((w) => w.rules.includes(rule)).length;
    if (n < 8) die(`rule "${rule}" is exercised by only ${n} entries — the unit's canDo promises all five`);
  }

  // 3. Minimal pairs are symmetric. A one-way pair renders a contrast whose
  //    other half is not marked as one, which is how a pair silently becomes
  //    two unrelated cards.
  for (const w of MASTERCLASS) {
    if (!w.pair) continue;
    const other = MASTERCLASS.find((x) => x.id === w.pair);
    if (!other) die(`${w.id} pairs with "${w.pair}", which is not in the corpus`);
    if (other.pair !== w.id) die(`${w.id} pairs with ${w.pair}, but ${w.pair} pairs with ${other.pair ?? 'nothing'}`);
  }

  // 4. The quiz is genuinely multi-rule. This is the assertion that separates a
  //    masterclass exam from eight more single-rule rounds.
  const multi = multiRuleCount();
  if (multi < MULTI_RULE_FLOOR) {
    die(`only ${multi}/${AUTHORED_QUESTIONS.length} quiz questions need two or more rules (floor ${MULTI_RULE_FLOOR})`);
  }

  // 5. Two renderer contracts, checked rather than trusted. Both fail silently:
  //    a listenChoose naming a clip has TTS read the clip NAME aloud, and a
  //    typeIn/errorSpot carrying audio renders no audio control at all, so the
  //    question cannot be answered.
  for (const q of AUTHORED_QUESTIONS) {
    if (q.format === 'listenChoose' && q.audio?.clip) {
      die(`listenChoose names clip "${q.audio.clip}" — with CLIP_MANIFEST empty, TTS speaks that string literally: "${q.q}"`);
    }
    if ((q.format === 'typeIn' || q.format === 'errorSpot') && q.audio) {
      die(`a ${q.format} question carries audio, and ErrorSpotCard renders no audio control: "${q.q}"`);
    }
  }

  // Every recordingId a card references must be declared, or the card falls
  // back to TTS forever and nobody finds out.
  const declared = new Set((LESSON.audio?.recorded ?? []).map((r) => r.id));
  for (const id of referencedRecordingIds(LESSON)) {
    if (!declared.has(id)) die(`recordingId "${id}" is referenced but not declared in audio.recorded`);
  }

  // Every quiz round must resolve a drill that exists, or a failed round leaves
  // the learner with a score and no remediation.
  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (!quiz || quiz.type !== 'quiz' || !quiz.rounds?.length) die('the lesson has no round-based quiz');
  const cfg = buildQuizConfig(quiz.rounds, {
    errorTriggers: LESSON.errorTriggers,
    drills: LESSON.drills,
    roundFailThreshold: quiz.roundFailThreshold,
    passMark: quiz.passMark,
  });
  const drillIds = new Set((LESSON.drills ?? []).map((d) => d.id));
  for (let i = 0; i < cfg.rounds.length; i++) {
    const drill = drillForRound(cfg, i);
    if (!drill) die(`quiz round "${cfg.rounds[i].id}" resolves no remediation drill`);
    if (!drillIds.has(drill)) die(`quiz round "${cfg.rounds[i].id}" names drill "${drill}", which does not exist`);
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // The 22 reused items must already be published. The lesson names them in
    // practice, dictation and drill pools, and an id that does not resolve
    // renders an empty drill rather than erroring.
    const found = await client.query<{ id: string }>(
      `select id from content_items where id = any($1) and status = 'published'`,
      [REUSED_IDS]
    );
    const missing = REUSED_IDS.filter((id) => !found.rows.some((r) => r.id === id));
    if (missing.length) {
      die(
        `${missing.length} REUSED items are not published, so the lesson would render empty drills:\n  ` +
          missing.join('\n  ') +
          `\n  These are not authored by this batch. Publish them first, or drop them from REUSED.`
      );
    }

    // Which of the new ids already exist? Zero on a first run, all 56 on a
    // re-run, since the whole thing is idempotent by id.
    const newExisting = await client.query<{ id: string }>(
      `select id from content_items where id = any($1)`,
      [MASTERCLASS_IDS]
    );

    // A theme row this corpus no longer defines is the withdrawn-id case: it
    // would sit in the database and the seed forever, released into the SRS and
    // present on no screen.
    const themeRows = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where theme = 'masterclass'`
    );
    const authoredIds = new Set(MASTERCLASS_IDS);
    const stale = themeRows.rows.filter((r) => !authoredIds.has(r.id));
    if (stale.length) {
      die(
        `the database carries masterclass items this corpus no longer defines:\n  ` +
          stale.map((r) => `${r.id} "${r.fr}"`).join('\n  ') +
          `\n  Withdraw them explicitly rather than letting this batch leave them behind.`
      );
    }

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0]!.body;
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

    console.log(`\n  authored (INSERT): ${NEW_ITEMS.length} (${MASTERCLASS_IDS[0]}-${MASTERCLASS_IDS[MASTERCLASS_IDS.length - 1]}), ${newExisting.rowCount} already present`);
    console.log(`  reused (untouched, referenced by id): ${REUSED.length}`);
    console.log(`  rules: ${RULES.map((r) => `${r} ${MASTERCLASS.filter((w) => w.rules.includes(r)).length}`).join(' · ')}`);
    console.log(`  families: ${(['contrast', 'blocked', 'join', 'pipeline', 'silence'] as const).map((f) => `${f} ${familyIds(f).length}`).join(' · ')}`);
    console.log(`  minimal pairs: ${pairs().length} | entries with 2+ rules: ${MASTERCLASS.filter((w) => w.rules.length >= 2).length}/${MASTERCLASS.length}`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'updating' : 'NEW'}, ` +
        `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds (${MASTERCLASS_IDS.length} authored + ${REUSED_IDS.length} reused)`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  quiz: ${quizQuestions(quiz).length} questions in ${quiz.rounds.length} rounds, ${multi} of them multi-rule`);
    console.log(`  quiz formats: ${Object.entries(formatMix()).map(([k, n]) => `${k} ${n}`).join(' · ')}`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts (reused items are NOT re-released)`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" x${reframeHits} | pipeline: "${PIPELINE}"`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  2+ rules ✓  pairs symmetric ✓  card contracts ✓`);
    console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

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
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ masterclass batch applied: ${NEW_ITEMS.length} items authored, ` +
        `lesson ${LESSON.id} published, unit ${UNIT_ID} linked.` +
        `\n  Next: pnpm tsx scripts/merge-masterclass-into-seed.ts --dry-run` +
        `\n  Then check \`git diff\` on ealch-v2/src/content/seed.json BEFORE anyone runs pnpm content:publish.` +
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
