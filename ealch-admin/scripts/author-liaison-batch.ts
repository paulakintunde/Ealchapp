// sons.10 "La liaison" — batch.
//
//   pnpm tsx scripts/author-liaison-batch.ts --dry-run   validate + report only
//   pnpm tsx scripts/author-liaison-batch.ts             apply, one transaction
//   then: pnpm audio:render --only sons.10.l1            (studio only, see below)
//   then: pnpm content:publish
//
// THIS BATCH IS NOT LIKE THE OTHERS. 165 of the 221 items it touches ALREADY
// EXIST and are already published. For those it writes a CURATION: tags,
// respell, notes and drills, and it deliberately does NOT write fr, en or ipa,
// because those are the asset and this script has no better copy of them than
// the database does. The update statement for curated rows names only the
// columns being curated, so a mistake here cannot destroy a sentence.
//
// The remaining 56 are new and are inserted whole.
//
// A dry run must report roughly 165 updates and 56 inserts. If it reports ~221
// inserts, the corpus has been re-authored rather than curated: stop.

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
import {
  LIAISON_IDS,
  NEW,
  UPDATES,
  obligationIds,
  tiesOf,
  toItem,
  text,
} from './data/liaison-corpus.ts';
import { LIAISON_LESSON, REFRAME } from './data/liaison-lesson.ts';

const NEW_ITEMS: Item[] = NEW.map(toItem);
const LESSON: Lesson = LIAISON_LESSON;

/** The reframe is the lesson's spine. Pinned here AND in
 *  sons-10-liaison.test.ts; the two must agree or this script dies first. */
const REFRAME_COUNT = 8;

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

  const ids = [...UPDATES.map((u) => u.id), ...NEW_ITEMS.map((i) => i.id)];
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids inside the batch:\n  ${[...new Set(dupes)].join('\n  ')}`);

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson fails the schema:\n${formatIssues(lessonIssues)}`);

  const density = validateDensity(LESSON, new Set(LIAISON_IDS));
  if (density.length) die(`lesson fails the density rules:\n${formatDensity(density)}`);

  // House style. The em dash and honest/honesty are both test-enforced app-side;
  // catching them here means the batch fails before the database, not after.
  const authored = JSON.stringify({ UPDATES, NEW, LESSON });
  if (authored.includes('—')) die('authored copy contains an em dash');
  if (/honest/i.test(authored)) die('authored copy contains "honest"');

  const reframeHits = (authored.match(new RegExp(REFRAME.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length;
  if (reframeHits !== REFRAME_COUNT) {
    die(`the reframe appears ${reframeHits} times, expected exactly ${REFRAME_COUNT}`);
  }

  // ── The two checks specific to THIS lesson. ──

  // 1. A tag naming a linking consonant must be backed by a real tie in the
  //    IPA. Tags were derived from the IPA; this pins that they still agree,
  //    so a hand-edit later cannot silently mislabel a family.
  for (const id of LIAISON_IDS) {
    const t = text(id);
    const ties = tiesOf(t.ipa);
    const tags = UPDATES.find((u) => u.id === id)?.tags ?? NEW.find((n) => n.id === id)?.tags ?? [];
    for (const tag of tags) {
      const m = /^liaison-([ztnlv])$/.exec(tag);
      if (m && !ties.includes(m[1]!)) {
        die(`${id} is tagged "${tag}" but its IPA carries no ${m[1]} tie: "${t.ipa}"`);
      }
    }
  }

  // 2. Nothing may be both forbidden and required. Teaching a forbidden
  //    liaison as a compulsory one is the worst failure available here.
  const interdite = new Set(obligationIds('interdite'));
  const both = obligationIds('obligatoire').filter((id) => interdite.has(id));
  if (both.length) die(`items marked both obligatoire and interdite:\n  ${both.join('\n  ')}`);
  if (interdite.size === 0) die('no liaison interdite items — the lesson cannot teach half its canDo');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // The curated 165 must already be published: this batch updates them, it
    // does not create them. If one is missing, the curation would silently
    // write nothing for that row.
    const curatedIds = UPDATES.map((u) => u.id);
    const found = await client.query<{ id: string }>(
      `select id from content_items where id = any($1) and status = 'published'`,
      [curatedIds]
    );
    const missing = curatedIds.filter((id) => !found.rows.some((r) => r.id === id));
    if (missing.length) {
      die(
        `${missing.length} curated items are not published, so there is nothing to curate:\n  ` +
          missing.slice(0, 10).join('\n  ') +
          (missing.length > 10 ? `\n  ...and ${missing.length - 10} more` : '')
      );
    }

    // Which of the new ids already exist? Should be zero on a first run, and
    // all 56 on a re-run, since the whole thing is idempotent by id.
    const newExisting = await client.query<{ id: string }>(
      `select id from content_items where id = any($1)`,
      [NEW_ITEMS.map((i) => i.id)]
    );

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'sons.10'`
    );
    if (unitRow.rowCount !== 1) die(`unit "sons.10" not found in content_units — cannot attach its lesson`);
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

    const quiz = LESSON.sections.find((s) => s.type === 'quiz');
    console.log(`\n  curated (UPDATE, text untouched): ${UPDATES.length}`);
    console.log(`  authored (INSERT): ${NEW_ITEMS.length} (fr.sons.liaisons.166-${String(165 + NEW_ITEMS.length)}), ${newExisting.rowCount} already present`);
    console.log(`  respelled: ${UPDATES.filter((u) => u.respell).length} of ${UPDATES.length} curated, ${NEW.filter((n) => n.respell).length} of ${NEW.length} authored`);
    console.log(`  obligation: obligatoire ${obligationIds('obligatoire').length} | interdite ${interdite.size} | facultative ${obligationIds('facultative').length}`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'updating' : 'NEW'}, ` +
        `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  quiz: ${quiz && quiz.type === 'quiz' ? quizQuestions(quiz).length : 0} questions in ${quiz && quiz.type === 'quiz' ? (quiz.rounds?.length ?? 0) : 0} rounds`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" x${reframeHits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  tag/IPA ✓  interdite ✓`);
    console.log(`  unit sons.10 lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');

    // The curated 165. Note the column list: tags, respell, notes, drills and
    // version ONLY. fr, en and ipa are not named, so they cannot be touched.
    for (const u of UPDATES) {
      const res = await client.query(
        `update content_items
            set tags = $2, respell = coalesce($3, respell), notes = coalesce($4, notes),
                drills = $5, version = version + 1
          where id = $1`,
        [u.id, u.tags, u.respell ?? null, u.notes ?? null, u.drills]
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`curating ${u.id} touched ${res.rowCount} rows — rolled back, nothing changed`);
      }
    }

    // The 56 authored items, inserted whole and idempotent by id.
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
        where kind = 'curriculum_unit' and body->>'id' = 'sons.10'`,
      [JSON.stringify(nextUnit)]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ liaison batch applied: ${UPDATES.length} items curated + ${NEW_ITEMS.length} authored, ` +
        `lesson ${LESSON.id} published, unit sons.10 linked.` +
        `\n  Next: check \`git diff\` on ealch-v2/src/content/seed.json BEFORE running pnpm content:publish.` +
        `\n  (seed.json can run AHEAD of the database during authoring; publishing over it destroys the newer copy.` +
        `\n   This batch UPDATES 165 live rows, so a careless publish regresses shipped content rather than merely adding.)\n`
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
