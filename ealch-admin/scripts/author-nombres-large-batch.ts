// Content Batch — Les grands nombres: the a1.28.l1 full-rig lesson.
//
// a1.28 ("Large Numbers") ships today with lessonIds: []. This batch authors
// the lesson and the five corpus entries it needs, closing the four-lesson
// numbers arc: a1.02 (1 to 20), a1.27 (21 to 100), a1.28 (cent, mille,
// million, milliard).
//
// The content and the corpus live in scripts/data/ (nombres-large-lesson.ts,
// nombres-large-corpus.ts, nombres-large-terms.ts and nombres-large-ids.ts)
// rather than inline here, because all four are large and all four are checked
// by the app's own test suite at authoring time:
//
//   ealch-v2/src/content/a1-28-grands-nombres.test.ts
//
// That test is the real gate. It runs in CI on every push, imports the seed
// directly, and asserts the whole self-check list: the mission spine in order,
// the act structure, 28 questions across 4 rounds with a why and a ref on every
// one, the reframe verbatim, all three multiplier rules taught AND tested, all
// three canDo surfaces covered, `milles` confined to the fields that display a
// wrong form, every inlined respelling passing the real nasal validator,
// tranches releasing only taught items, and no duplicate `fr` in the theme.
// This script re-runs the shape validators before it writes so a broken batch
// dies before it touches the database, but the durable check is the test.
//
// Modelled on author-elision-batch.ts rather than author-salutations-l1-
// journey.ts, because this lesson authors corpus and that one does not.
//
// Same contract as every other batch: everything validates BEFORE the database
// is touched, then the whole set upserts inside ONE transaction. Idempotent by
// id.
//
// Usage (from ealch-admin/):
//   pnpm content:nombreslarge --dry-run   validate + report only
//   pnpm content:nombreslarge             apply, one transaction
//   then: pnpm tsx scripts/merge-nombres-large-into-seed.ts
//   then: NOT content:publish. See the note in the merge script; `pnpm
//         content:parity` currently exits 1 for reasons that predate this
//         lesson, and publishing would delete sons.09.l1 from the seed.

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
import { NOMBRES_LARGE } from './data/nombres-large-corpus.ts';
import {
  NOMBRES_LARGE_LESSON,
  REFRAME,
  NOMBRES_LARGE_SPEAK_IDS,
  NOMBRES_LARGE_DICTATION_IDS,
} from './data/nombres-large-lesson.ts';

const NEW_ITEMS: Item[] = NOMBRES_LARGE;
const LESSON: Lesson = NOMBRES_LARGE_LESSON;
const UNIT_ID = 'a1.28';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  An EXPLICIT constant, not a figure derived from the lesson. A derived count
 *  compares the content to itself and passes on any rewording, which is exactly
 *  the regression a verbatim check exists to catch: the density validator's own
 *  "at least three sections" floor would still be met by a reframe that had
 *  drifted into four different phrasings.
 *
 *  10 = the `reframe` field itself, one narration segment, and eight sections
 *  (s02-goals, s03-three, s07-mille, s10-million, s12-scale, s14-traps,
 *  s28-quiz, s29-roundup). */
const REFRAME_APPEARANCES = 10;

/** The three rules the canDo turns on, each with the string that proves the
 *  lesson still teaches it. Checked here as well as in the test, because this
 *  script is what writes to the database and a rule that has been edited out
 *  should not reach a learner while somebody is waiting for CI. */
const RULE_MARKERS: { rule: string; sectionId: string; needle: string }[] = [
  { rule: 'the S on cents', sectionId: 's04-cent', needle: 'deux cents' },
  { rule: 'mille is invariable', sectionId: 's07-mille', needle: 'deux mille' },
  { rule: 'de after million', sectionId: 's10-million', needle: 'de visiteurs' },
];

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** Every authored string in a value, for the house-style guards. */
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
  //
  // Run with an EMPTY known-id set, which is what validateDensity documents for
  // an authoring script: the corpus join cannot be made before the database has
  // been read. Unlike the elision batch, this lesson reuses 21 of its 26 items,
  // so passing only the ids this batch authors would report every reused one as
  // dangling. The real join runs below, against Postgres, once the connection
  // exists.
  const density = validateDensity(LESSON, new Set());
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules sons-alphabet.test.ts enforces.
  const authored = JSON.stringify({ NEW_ITEMS, LESSON });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  // The reframe is the lesson's spine, and a reworded copy is exactly how the
  // verbatim check starts failing.
  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  // `milles` is the error this lesson exists to stage, and the corpus is clean
  // of it. It must never enter the corpus through this batch.
  const millesInCorpus = NEW_ITEMS.filter((i) => /\bmilles\b/i.test(i.fr));
  if (millesInCorpus.length) {
    die(`the corpus must stay clean of "milles": ${millesInCorpus.map((i) => i.id).join(', ')}`);
  }

  // All three multiplier rules still have a section teaching them. The canDo
  // names three and a lesson that quietly loses one leaves the Den advertising
  // something it does not deliver.
  for (const m of RULE_MARKERS) {
    const sec = LESSON.sections.find((s) => (s as { id?: string }).id === m.sectionId);
    if (!sec) die(`the section teaching "${m.rule}" (${m.sectionId}) is gone`);
    if (!strings(sec).some((s) => s.includes(m.needle))) {
      die(`${m.sectionId} no longer contains "${m.needle}", so "${m.rule}" is not being taught there`);
    }
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must exist after this batch: either it is in
    // the batch, or it is already published. Verified against the DATABASE, not
    // the seed, because the two drift and an id that is in the seed but not
    // published renders as an empty card.
    const reused = LESSON.itemIds.filter((id) => !ids.includes(id));
    const found = await client.query<{ id: string; drills: string[] }>(
      `select id, drills from content_items where id = any($1) and status = 'published'`,
      [reused]
    );
    const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
    if (missing.length) {
      die(
        `lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}\n` +
        `  (seed.json can run ahead of the database — these may exist in the seed and not here.)`
      );
    }

    // Drill coverage, checked against POSTGRES rather than the seed. A speak
    // mission naming an item with no `voiceflash` renders a card the mic cannot
    // score, and a dictée naming one with no `dictation` renders an empty drill.
    // Both look like a broken mission rather than a missing tag.
    const drillsById = new Map<string, string[]>([
      ...found.rows.map((r) => [r.id, r.drills ?? []] as [string, string[]]),
      ...NEW_ITEMS.map((i) => [i.id, i.drills ?? []] as [string, string[]]),
    ]);
    const noVoiceflash = NOMBRES_LARGE_SPEAK_IDS.filter((id) => !drillsById.get(id)?.includes('voiceflash'));
    if (noVoiceflash.length) die(`the speak mission names items with no \`voiceflash\` drill:\n  ${noVoiceflash.join('\n  ')}`);
    const noDictation = NOMBRES_LARGE_DICTATION_IDS.filter((id) => !drillsById.get(id)?.includes('dictation'));
    if (noDictation.length) die(`the dictée names items with no \`dictation\` drill:\n  ${noDictation.join('\n  ')}`);

    // The corpus join the pre-flight density pass could not make. Every id
    // reachable from a section is now checked against what the DATABASE
    // actually publishes, which is the check that matters: an id that resolves
    // in the seed and not here renders as an empty card on a device while every
    // test stays green.
    const resolvable = validateDensity(LESSON, new Set([...ids, ...found.rows.map((r) => r.id)]));
    if (resolvable.length) die(`lesson names items this database does not publish:\n${formatDensity(resolvable)}`);

    // Two entries teaching the same WORD is the .057 incident: the flashcard hub
    // keys decks on `fr`, so a duplicate serves the same card twice and takes
    // two SRS ratings for one word. Sentences are exempt, as in
    // flashhub-coverage.test.ts. Checked against the whole theme in the
    // database, not just against this batch.
    const themeWords = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where theme = 'nombres' and kind <> 'sentence' and status = 'published'`
    );
    const foldFr = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const clashes: string[] = [];
    for (const w of NEW_ITEMS) {
      if (w.kind === 'sentence') continue;
      const hit = themeWords.rows.find((r) => r.id !== w.id && foldFr(r.fr) === foldFr(w.fr));
      if (hit) clashes.push(`${w.id} "${w.fr}" collides with ${hit.id}`);
    }
    if (clashes.length) die(`the same word twice in one theme:\n  ${clashes.join('\n  ')}`);

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;
    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    // The prerequisite chain, reported rather than assumed. The brief said both
    // predecessors might be empty; they are not, and this prints which version
    // of each is live so a future run notices if that changes.
    const prereqs = await client.query<{ slug: string; v: string }>(
      `select slug, body->>'version' v from content_units where kind = 'lesson' and slug = any($1)`,
      [['a1.02.l1', 'a1.27.l1']]
    );

    const existingLesson = await client.query<{ v: string }>(
      `select body->>'version' v from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );

    const quiz = LESSON.sections.find((s) => s.type === 'quiz');
    const qs = quiz && quiz.type === 'quiz' ? quizQuestions(quiz) : [];
    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    const lastId = NEW_ITEMS[NEW_ITEMS.length - 1].id.split('.').pop();
    console.log(`\n  new items: ${NEW_ITEMS.length} (fr.a1.nombres.238 through .${lastId})`);
    console.log(`  reused items: ${reused.length}, every one verified published in THIS database`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? `updating v${existingLesson.rows[0].v} to v${LESSON.version}` : `NEW at v${LESSON.version}`}, ` +
      `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  prerequisites: ${prereqs.rows.map((r) => `${r.slug} v${r.v}`).join(', ') || 'NONE FOUND'}`);
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  quiz: ${qs.length} questions in ${quiz && quiz.type === 'quiz' ? (quiz.rounds?.length ?? 0) : 0} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  written share: ${(formats.typeIn ?? 0) + (formats.errorSpot ?? 0)}/${qs.length} typeIn or errorSpot, mcq ${formats.mcq ?? 0}/${qs.length}`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  three rules taught: ${RULE_MARKERS.map((m) => m.sectionId).join(', ')}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  drill coverage ✓  no duplicate words ✓`);
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
      `\n✓ grands nombres batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published, unit ${UNIT_ID} linked.` +
      `\n  Next: pnpm tsx scripts/merge-nombres-large-into-seed.ts` +
      `\n  Do NOT run pnpm content:publish. \`pnpm content:parity\` exits 1 today for reasons` +
      `\n  that predate this lesson, and a publish would delete sons.09.l1 from the seed.\n`
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
