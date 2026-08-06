// Content Batch — Les articles indéfinis: the a1.11.l1 full-rig lesson.
//
// a1.11 ships today with lessonIds: [] and no theme binding. This batch authors
// the lesson and the 27 corpus entries it could not build without, as the
// fourth A1 lesson on Lesson Architecture v2 (after a1.01, a1.02 and a1.03).
//
// The content and the corpus live in scripts/data/ (articles-indefinis-lesson,
// -corpus and -terms) rather than inline here, because all three are large and
// all three are checked by the app's own test suite at authoring time:
//
//   ealch-v2/src/content/a1-11-indefinis.test.ts
//
// That test is the real gate. It runs in CI on every push, imports these files
// directly, and asserts the whole self-check list: the mission spine in order,
// the act structure, 25 questions across 5 rounds with a why and a ref on every
// one, the reframe verbatim, un/une/des each taught AND tested, the first-
// mention rule demonstrated in a NARRATIVE rather than asserted, all four
// English-speaker errors taught and tested, nothing partitive on any production
// surface, no metalinguistic corpus row used as a learner sentence, every
// inlined respelling passing the nasal convention, and seed parity derived
// rather than hardcoded. This script re-runs the shared validators before it
// writes so a broken batch dies before it touches the database, but the durable
// check is the test.
//
// Same contract as author-elision-batch.ts: everything validates BEFORE the
// database is touched, then the whole set upserts inside ONE transaction.
// Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm content:indefinis --dry-run   validate + report only
//   pnpm content:indefinis             apply, one transaction
//   then: pnpm tsx scripts/merge-articles-indefinis-into-seed.ts
//   NOT: pnpm audio:render. It spends real ElevenLabs credits and
//        ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
//   NOT: pnpm content:publish. It regenerates seed.json FROM the database and
//        `pnpm content:parity` currently exits 1 for reasons that predate this
//        lesson. Apply, merge, and stop.

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
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { ARTICLES, ARTICLE_IDS, REUSED, RESPELL, toItem } from './data/articles-indefinis-corpus.ts';
import { INDEFINIS_LESSON, REFRAME } from './data/articles-indefinis-lesson.ts';

const NEW_ITEMS: Item[] = ARTICLES.map(toItem);
const LESSON: Lesson = INDEFINIS_LESSON;
const UNIT_ID = 'a1.11';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  An EXPLICIT constant, not a figure derived from the lesson. A derived count
 *  compares the content to itself and passes on any rewording, which is exactly
 *  the regression this guard exists to catch. Eight sections carry it plus the
 *  `reframe` field itself, which `strings()` also walks. */
const REFRAME_APPEARANCES = 9;

/** The lesson is authored around five error triggers, each with a drill and a
 *  retest, and each drill is the FIRST target of exactly one quiz round.
 *  `drillForRound` walks a round's targets and stops at the first one that
 *  resolves, so a drill named only in second place never runs. Stated here so
 *  a reordering of `targets` fails the batch rather than silently orphaning a
 *  drill nobody notices is dead. */
const EXPECTED_DRILLS = 5;

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

  // Two entries teaching the same WORD in one theme is the .057 incident: the
  // flashcard hub keys decks on `fr` with the article stripped, so a duplicate
  // serves the same card twice and takes two SRS ratings for one word.
  // Sentences are exempt, as in flashhub-coverage.test.ts.
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seenWord = new Map<string, string>();
  const dupeWords: string[] = [];
  for (const w of NEW_ITEMS) {
    if (w.kind === 'sentence') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seenWord.get(key);
    if (prior) dupeWords.push(`${prior} vs ${w.id} ("${w.fr}")`);
    else seenWord.set(key, w.id);
  }
  if (dupeWords.length) die(`the same word twice in one theme:\n  ${dupeWords.join('\n  ')}`);

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build.
  //
  // The id set is this batch PLUS everything the lesson declares in `itemIds`,
  // because 37 of the 64 are reused items this batch does not write. That makes
  // `item-resolution` a check that no SECTION names an id the lesson forgot to
  // declare, which is a real error it still catches. Whether the reused ids
  // exist at all is checked properly below, against the database, which is the
  // only copy that can answer it.
  const density = validateDensity(LESSON, new Set([...ids, ...LESSON.itemIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules the per-lesson tests enforce.
  const authored = JSON.stringify({ NEW_ITEMS, LESSON });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  // The reframe is the lesson's spine, and a reworded copy is exactly how the
  // verbatim check starts failing.
  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  // Every respelling this lesson DISPLAYS, against the nasal convention. `un`
  // is the most repeated word in the lesson and its shipped corpus respelling
  // is `uhn`, which fails; that is why the lesson reads from RESPELL rather
  // than from the corpus rows. A regression here would teach a consonant that
  // is not pronounced, on the one word the lesson is named after.
  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }

  // The partitive boundary. a1.29 owns du, de la and de l'. Checked on the
  // surfaces a learner PRODUCES from rather than on every string, because
  // ordinary French prose uses `du` as a preposition ("révision du genre") and
  // a check that fires on that gets deleted rather than fixed.
  const produced = [
    ...quizQuestions(LESSON.sections.find((s) => s.type === 'quiz') as never).flatMap((q) => [
      ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '', q.target ?? '',
    ]),
    ...(LESSON.drills ?? []).flatMap((d) => [...(d.pairs ?? []).map((p) => p[1]), ...(d.opts ?? [])]),
  ];
  const partitive = produced.filter((s) => /(^|\s)(du|de la|de l['’])\s/i.test(s));
  if (partitive.length) {
    die(`partitive forms reached a production surface, and a1.29 owns them:\n  ${partitive.join('\n  ')}`);
  }

  // Every drill has to be reachable. drillForRound stops at a round's first
  // resolving target, so a drill named only in second place is dead content.
  const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];
  const fired = new Set(
    rounds
      .map((r) => (r.targets ?? []).map((t) => drillForTarget.get(t)).find(Boolean) ?? null)
      .filter((x): x is string => Boolean(x))
  );
  const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  if (teaching.length !== EXPECTED_DRILLS) {
    die(`expected ${EXPECTED_DRILLS} teaching drills, found ${teaching.length}`);
  }
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) {
    die(`drill(s) no quiz round can fire: ${orphans.join(', ')}\n  Reorder the round's \`targets\` so this drill's trigger comes first.`);
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must exist after this batch: either it is
    // in the batch, or it is already published.
    const reused = LESSON.itemIds.filter((id) => !ids.includes(id));
    if (reused.length) {
      const found = await client.query<{ id: string }>(
        `select id from content_items where id = any($1) and status = 'published'`,
        [reused]
      );
      const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
      if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);
    }

    // The REUSED list is authored against seed.json, which can run AHEAD of the
    // database. Verified against the DATABASE here, because a reused id that is
    // in the seed but not published would render as an empty card. The `fr` is
    // compared too: an id that resolves to a different word than the one this
    // lesson names is worse than one that does not resolve at all.
    const reusedIds = REUSED.map((r) => r.id);
    const foundReused = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where id = any($1) and status = 'published'`,
      [reusedIds]
    );
    const missingReused = REUSED.filter((r) => !foundReused.rows.some((x) => x.id === r.id));
    if (missingReused.length) {
      die(
        `REUSED names items that are not published in THIS database:\n  ${missingReused.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}\n` +
        `  (seed.json can run ahead of the database — these may exist in the seed but not here.)`
      );
    }
    const drifted = REUSED
      .map((r) => ({ r, row: foundReused.rows.find((x) => x.id === r.id)! }))
      .filter(({ r, row }) => row.fr !== r.fr)
      .map(({ r, row }) => `${r.id}: this lesson says "${r.fr}", the database says "${row.fr}"`);
    if (drifted.length) die(`REUSED has drifted from the database:\n  ${drifted.join('\n  ')}`);

    // Spoken practice draws only from items carrying `voiceflash`, and dictation
    // only from items carrying `dictation`. Checked against POSTGRES rather than
    // the seed: an item whose tag was stripped upstream renders as a card the
    // learner cannot be scored on, which reads as a broken mission.
    const speak = LESSON.sections.find((s) => (s as { id?: string }).id === 's18-speak');
    const dictation = LESSON.sections.find((s) => (s as { id?: string }).id === 's17-dictation');
    for (const [sec, drill] of [[speak, 'voiceflash'], [dictation, 'dictation']] as const) {
      const named = (sec as { itemIds?: string[] } | undefined)?.itemIds ?? [];
      if (!named.length) die(`the ${drill} section names no items`);
      const inBatch = new Map(NEW_ITEMS.map((i) => [i.id, i.drills]));
      const toCheck = named.filter((id) => !inBatch.has(id));
      const rows = toCheck.length
        ? (await client.query<{ id: string; drills: string[] }>(
            `select id, drills from content_items where id = any($1)`, [toCheck]
          )).rows
        : [];
      const bad = [
        ...named.filter((id) => inBatch.has(id) && !inBatch.get(id)!.includes(drill as never)),
        ...toCheck.filter((id) => !(rows.find((r) => r.id === id)?.drills ?? []).includes(drill)),
      ];
      if (bad.length) die(`items named by the ${drill} mission do not carry the "${drill}" drill:\n  ${bad.join('\n  ')}`);
    }

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    // title, sub and canDo are what the Den advertises before a learner opens
    // anything, and authoring the lesson is not a licence to rewrite the promise
    // it was built against. `themes` stays undefined: a grammar unit that claims
    // one theme points the Den's chips at decks it is not about.
    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
    if (nextUnit.themes !== undefined) {
      die(`unit ${UNIT_ID} has grown a themes binding; a grammar unit is deliberately themeless`);
    }

    const existingLesson = await client.query(
      `select 1 from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );

    const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  new items: ${NEW_ITEMS.length} across ${new Set(NEW_ITEMS.map((i) => i.theme)).size} themes`);
    for (const theme of [...new Set(NEW_ITEMS.map((i) => i.theme))]) {
      const inTheme = NEW_ITEMS.filter((i) => i.theme === theme);
      console.log(`    ${theme}: ${inTheme.length} (${inTheme[0].id.split('.').pop()} through .${inTheme[inTheme.length - 1].id.split('.').pop()})`);
    }
    console.log(`  reused items: ${reused.length} named by the lesson, ${REUSED.length} documented and verified against this database`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'updating' : 'NEW'}, ` +
      `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50) | errorSpot share: ${Math.round((formats.errorSpot ?? 0) / qs.length * 100)}%`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills reachable from a round: ${fired.size}/${teaching.length}`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored for this lesson: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  partitive boundary ✓`);
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
      `\n✓ indefinis batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published, unit ${UNIT_ID} linked.` +
      `\n  Next: pnpm tsx scripts/merge-articles-indefinis-into-seed.ts --dry-run` +
      `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database and` +
      `\n  pnpm content:parity currently exits 1 on pre-existing drift (sons.09 seed-only, sons.08 version skew).\n`
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
