// Content Batch — Les accents: the sons.05.l1 full-rig lesson.
//
// sons.05 ("Les accents") ships today with lessonIds: [] and zero corpus items
// under the `accents` theme. The unit exists, the lesson does not, and neither
// does a single word to teach it with. This batch authors both: the 62-word
// lexeme corpus and the lesson built on top of it.
//
// The content lives in scripts/data/ (accents-lesson.ts, accents-corpus.ts and
// accents-terms.ts) rather than inline here, because all three are large and
// all three are checked by the app's own test suite at authoring time:
//
//   ealch-v2/src/content/sons-05-accents.test.ts
//
// That test is the real gate. It runs in CI on every push, imports these files
// directly, and asserts the whole self-check list: the spine in order, the
// reframe verbatim across the acts that carry it, 32 questions in 4 rounds each
// with a why and a ref, all 62 itemIds resolving, tranches releasing only
// taught words, every act claiming its sections, the trigger-to-drill wiring
// intact, four reference sheets, thirteen recording briefs, no em dash. This
// script re-runs the same validators before it writes, so a broken batch dies
// before it touches the database, but the durable check is the test.
//
// Same contract as author-muettes-batch.ts: everything validates BEFORE the
// database is touched, then the whole set upserts inside ONE transaction.
// Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm content:accents --dry-run   validate + report only
//   pnpm content:accents             apply, one transaction
//   then: pnpm audio:render --only sons.05.l1   (when the audio pass is
//                                                scheduled; NOT part of this
//                                                batch, and it spends real
//                                                ElevenLabs credit)
//   then: pnpm content:publish       (ships OTA; CHECK git diff on seed.json
//                                     first, see the seed-direct hazard note)

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
import { ACCENTS, ACCENTS_IDS, toItem } from './data/accents-corpus.ts';
import { ACCENTS_LESSON, REFRAME } from './data/accents-lesson.ts';

const NEW_ITEMS: Item[] = ACCENTS.map(toItem);
const LESSON: Lesson = ACCENTS_LESSON;

/** How many sections must carry the reframe verbatim. The density validator's
 *  floor is 3; this lesson carries it in more, and pinning the real number
 *  here means a reworded copy fails the batch rather than quietly dropping to
 *  the minimum. */
const REFRAME_MIN_SECTIONS = 5;

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** Every authored string reachable from a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
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

  // The reframe is the lesson's spine. A reworded appearance is a silent
  // regression the density rule's floor of three would still pass.
  const carrying = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  if (carrying.length < REFRAME_MIN_SECTIONS) {
    die(`the reframe appears in ${carrying.length} sections, expected at least ${REFRAME_MIN_SECTIONS}`);
  }

  // Every itemId the lesson names, anywhere, must be one this batch writes.
  // A dangling id renders as nothing at all, so the section degrades silently.
  const known = new Set(ids);
  const dangling = [...new Set(strings(LESSON).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)))].filter(
    (s) => !known.has(s)
  );
  if (dangling.length) die(`lesson names item ids this batch does not write:\n  ${dangling.join('\n  ')}`);

  // Every tranche entry is taught, and every taught word is released exactly
  // once — otherwise a word either never reaches the SRS or arrives twice.
  const released = (LESSON.deckTranche ?? []).flat();
  if (new Set(released).size !== released.length) die('a word is released to the SRS more than once');
  const unreleased = LESSON.itemIds.filter((id) => !released.includes(id));
  if (unreleased.length) die(`taught but never released to the SRS:\n  ${unreleased.join('\n  ')}`);

  // Every recordingId a card references must be declared, or the card falls
  // back to TTS forever with nobody noticing.
  const declared = new Set((LESSON.audio?.recorded ?? []).map((r) => r.id));
  const referenced = new Set<string>();
  const walkRec = (v: unknown) => {
    if (Array.isArray(v)) v.forEach(walkRec);
    else if (v && typeof v === 'object') {
      const rec = (v as { recordingId?: unknown }).recordingId;
      if (typeof rec === 'string') referenced.add(rec);
      Object.values(v).forEach(walkRec);
    }
  };
  walkRec(LESSON);
  const undeclared = [...referenced].filter((r) => !declared.has(r));
  if (undeclared.length) die(`recordingId referenced but not declared in audio.recorded:\n  ${undeclared.join('\n  ')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must exist after this batch: either it is
    // in the batch, or it is already published.
    const reused = ACCENTS_IDS.filter((id) => !ids.includes(id));
    if (reused.length) {
      const found = await client.query<{ id: string }>(
        `select id from content_items where id = any($1) and status = 'published'`,
        [reused]
      );
      const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
      if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);
    }

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'sons.05'`
    );
    if (unitRow.rowCount !== 1) die(`unit "sons.05" not found in content_units — cannot attach its lesson`);
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
    console.log(`\n  new items: ${NEW_ITEMS.length} (fr.sons.accents.001-${String(NEW_ITEMS.length).padStart(3, '0')})`);
    console.log(`  reused items: ${reused.length}`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'updating' : 'NEW'}, ` +
      `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  quiz: ${quiz && quiz.type === 'quiz' ? quizQuestions(quiz).length : 0} questions in ${quiz && quiz.type === 'quiz' ? (quiz.rounds?.length ?? 0) : 0} rounds`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${released.length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${declared.size} (all fall back to TTS until delivered)`);
    console.log(`  narration: ${LESSON.narration?.stages.length} stages, ratioEnFr ${LESSON.narration?.ratioEnFr}`);
    console.log(`  reframe: "${REFRAME}" in ${carrying.length} sections`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  item resolution ✓`);
    console.log(`  unit sons.05 lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

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
        where kind = 'curriculum_unit' and body->>'id' = 'sons.05'`,
      [JSON.stringify(nextUnit)]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ accents batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published, unit sons.05 linked.` +
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
