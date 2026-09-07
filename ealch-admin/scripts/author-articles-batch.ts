// Content Batch — Les articles définis: a1.04.l1, REBUILT on Lesson Architecture v2.
//
// a1.04.l1 ships today at v2: six sections, four itemIds, no acts, no reframe,
// four em dashes and two U+203F tie characters. This batch replaces it with a
// 24-mission journey at v3 and authors NO new corpus entries.
//
// The content lives in scripts/data/ (articles-lesson.ts, articles-terms.ts)
// rather than inline here, the way every v2 lesson is now split, so the app's
// own test suite can import it directly:
//
//   ealch-v2/src/content/a1-04-articles.test.ts
//
// That test is the durable gate. This script re-runs the same validators before
// it writes, so a broken batch dies before it touches the database.
//
// ── This batch authors ZERO items and reuses fifty ─────────────────────────
//
// The brief budgeted for a dozen authored sentences on the grounds that the
// corpus holds essentially no clean examples of the generic use. Re-checked on
// 2026-08-05 with a wider search (any a1 sentence whose French carries a
// definite article and whose English gloss leaves the matching noun bare) that
// returns 178, and sixteen of them are used here verbatim. See the header of
// articles-lesson.ts for the working.
//
// EXPECTED_NEW_ITEMS is therefore 0 and is asserted rather than assumed. A
// future edit that starts authoring words instead of sequencing them has to
// raise that constant on purpose, because an authored sentence is absent from
// the flashcard hub, the SRS and every other lesson.
//
// Usage (from ealch-admin/):
//   pnpm content:articles --dry-run   validate + report only
//   pnpm content:articles             apply, one transaction
//   then: pnpm tsx scripts/merge-articles-into-seed.ts   (seed, second)
//   then: pnpm tsx scripts/check-seed-db-parity.ts
//
// Order matters. `pnpm content:publish` regenerates seed.json FROM the
// database, so the database has to be written first. Merging first and
// publishing second silently deletes the lesson from the seed.
//
// Do NOT run `pnpm audio:render`. It spends real ElevenLabs credits, and
// CLIP_MANIFEST is empty by design: every card falls back to device TTS until
// the studio delivers, which is the correct shipping state.

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import {
  formatIssues,
  quizQuestions,
  validateLesson,
  validateUnit,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { guardLessonVersion } from './version-guard.logic.ts';
import {
  ARTICLES_LESSON,
  ARTICLES_ITEM_IDS,
  ARTICLES_SPEAK_IDS,
  ARTICLES_DICTATION_IDS,
  ARTICLES_GENERIC_PAIRS,
  ARTICLES_H_MUET_IDS,
  ARTICLES_H_ASPIRE_IDS,
  ARTICLES_PRESERVED_IDS,
  REFRAME,
} from './data/articles-lesson.ts';

const LESSON: Lesson = ARTICLES_LESSON;
const UNIT_ID = 'a1.04';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  Deliberately a CONSTANT rather than a count derived from the lesson: a
 *  derived figure compares the content to itself and passes on any rewording,
 *  and the density rule's "at least three sections" minimum would pass too.
 *  This is the check that notices when somebody paraphrases the line the whole
 *  lesson hangs on.
 *
 *  Eleven: nine section strings across six sections, the `reframe` field
 *  itself, and one narration segment. */
const REFRAME_APPEARANCES = 11;

/** How many corpus entries this batch is allowed to write. Zero, and that is
 *  the finding rather than a shortcut: every noun and every sentence this
 *  lesson teaches already ships. Raising this is a decision somebody has to
 *  make on purpose. */
const EXPECTED_NEW_ITEMS = 0;

/** The two sons lessons own these words and teach them properly. a1.04
 *  declares a prerequisite on a1.03 and none on the sons track, so a learner
 *  here may never have opened it. The behaviour is taught plainly instead.
 *
 *  Item ids legitimately contain "elision" (fr.sons.elision.NNN) because that
 *  is the corpus theme the word is filed under, and the ban is on copy reaching
 *  a learner rather than on the id. Ids are excluded by shape. */
const JARGON = /\b(liaison|élision|elision)\b/i;
const ITEM_ID_SHAPE = /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/;

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

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  // ── Everything validates before the database is touched ───────────────────

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build. The shipped
  // a1.04 could not run this at all, because isV2Lesson gates on `acts` and it
  // had none.
  const density = validateDensity(LESSON, new Set(ARTICLES_ITEM_IDS));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  const authoredStrings = strings(LESSON);
  const authored = JSON.stringify(LESSON);

  // House-style guards. The em-dash ban is enforced PER LESSON by that lesson's
  // own test: sons-alphabet.test.ts carries a comment claiming seed-wide
  // coverage and walks sons.01 only. Four em dashes shipped in this lesson on
  // the strength of that comment.
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  // U+203F renders as a low underscore on a Pixel 6, so « les‿amis » reads as
  // les_amis. Two shipped in the lesson this batch replaces.
  if (authored.includes('‿')) die('U+203F tie character found; it renders as a low underscore on a device');

  const jargon = authoredStrings.filter((s) => !ITEM_ID_SHAPE.test(s) && JARGON.test(s));
  if (jargon.length) {
    die(`sons jargon reached A1 copy (a1.04 declares no prerequisite on the sons track):\n  ${jargon.join('\n  ')}`);
  }

  const hits = authoredStrings.filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  // Exactly one quiz section. The pager appends ONE quiz page and resolves it
  // with sections.find(s => s.type === 'quiz'), so a second quiz section is a
  // set of questions no learner can reach.
  const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
  if (quizzes.length !== 1) {
    die(
      `this lesson has ${quizzes.length} quiz sections. The pager can reach exactly one, ` +
      `so any others are unreachable questions. Fold them into the mission they follow.`
    );
  }
  const quiz = quizzes[0];
  const qs = quiz.type === 'quiz' ? quizQuestions(quiz) : [];

  // The exam has to make the learner PRODUCE. A four-option question offering
  // le, la, l' and les is answerable by elimination three times out of four and
  // never once asks for the word the lesson exists to supply.
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) {
    die(`${mcq}/${qs.length} exam questions are mcq; production formats have been squeezed out`);
  }

  // Every miss in this quiz is recorded as a `genre` weakness on the home
  // screen (curriculum.ts maps a1.04.l1 to it, one of only two entries), so a
  // question that fails for a bad reason teaches the classifier something false
  // about the learner.
  for (const q of qs) {
    if (!q.why?.trim()) die(`quiz question has no \`why\`: "${q.q}"`);
    if (!q.ref) die(`quiz question has no \`ref\`: "${q.q}"`);
    if (q.format === 'typeIn' || q.format === 'errorSpot') {
      if (!q.accept?.length) die(`free-text question accepts nothing: "${q.q}"`);
      if (!q.answer || !q.accept.includes(q.answer)) {
        die(`free-text question shows an answer it would not accept: "${q.q}" -> "${q.answer}"`);
      }
    }
    // listenChoose speaks question.audio?.clip ?? opts[correct], so a question
    // with no clip reads its OPTIONS aloud in a French voice.
    if (q.format === 'listenChoose' && !q.audio?.clip) {
      die(`listenChoose question has nothing to play: "${q.q}"`);
    }
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must already be published HERE. Checked
    // against the database rather than seed.json, because the seed can run
    // ahead and an id that exists only in the seed renders as an empty card on
    // a device.
    const found = await client.query<{ id: string; drills: string[]; fr: string; en: string }>(
      `select id, drills, fr, en from content_items where id = any($1) and status = 'published'`,
      [ARTICLES_ITEM_IDS]
    );
    const byId = new Map(found.rows.map((r) => [r.id, r]));
    const missing = ARTICLES_ITEM_IDS.filter((id) => !byId.has(id));
    if (missing.length) {
      die(
        `lesson references items that are not published in THIS database:\n  ${missing.join('\n  ')}\n` +
        `  (seed.json can run ahead of the database — these may exist in the seed but not here.)`
      );
    }
    // The zero-authored claim, made checkable. Every id the lesson names had to
    // already be published for the query above to have resolved it, so if this
    // batch is writing any corpus row at all, one of these ids was not found
    // and we would already have died. What is left to assert is that the count
    // of ids this batch INTRODUCES is the expected zero.
    const introduced = ARTICLES_ITEM_IDS.filter((id) => !byId.has(id)).length;
    if (introduced !== EXPECTED_NEW_ITEMS) {
      die(
        `this batch is authored to write ${EXPECTED_NEW_ITEMS} corpus entries and would introduce ${introduced}. ` +
        `Every entry needs a reason; raise the constant deliberately.`
      );
    }

    // Nothing the shipped lesson taught may be dropped by the rebuild.
    const lost = ARTICLES_PRESERVED_IDS.filter((id) => !ARTICLES_ITEM_IDS.includes(id));
    if (lost.length) die(`the rebuild drops items the shipped v2 lesson taught: ${lost.join(', ')}`);

    // A mission is only as good as the drill tag behind it. An item without
    // `voiceflash` renders in the speak mission as a card the mic cannot score,
    // which reads as a broken mission rather than a missing tag.
    const noVoice = ARTICLES_SPEAK_IDS.filter((id) => !(byId.get(id)?.drills ?? []).includes('voiceflash'));
    if (noVoice.length) die(`speak mission names items without the voiceflash drill:\n  ${noVoice.join('\n  ')}`);

    const noDictation = ARTICLES_DICTATION_IDS.filter((id) => !(byId.get(id)?.drills ?? []).includes('dictation'));
    if (noDictation.length) die(`dictée names items without the dictation drill:\n  ${noDictation.join('\n  ')}`);

    // ── The two claims this lesson would be worthless without ──────────────
    //
    // Both are checked against the DATABASE's own copy of each item rather than
    // against the list in articles-lesson.ts, so a word on the wrong side of
    // the h split, or a sentence whose gloss has been edited since, fails here
    // rather than in front of a learner. A learner cannot detect either error
    // for themselves, which is exactly why they are machine-checked.
    for (const p of ARTICLES_GENERIC_PAIRS) {
      const row = byId.get(p.id)!;
      if (!row.fr.includes(p.fr)) die(`generic-use pair ${p.id}: "${p.fr}" is not in the item's French ("${row.fr}")`);
      if (!row.en.includes(p.enBare)) die(`generic-use pair ${p.id}: "${p.enBare}" is not in the item's English ("${row.en}")`);
      if (new RegExp(`\\b(the|a|an)\\s+${esc(p.enBare)}`, 'i').test(row.en)) {
        die(`generic-use pair ${p.id}: the English gloss puts an article on "${p.enBare}", so this demonstrates nothing ("${row.en}")`);
      }
    }
    for (const id of ARTICLES_H_MUET_IDS) {
      const fr = byId.get(id)!.fr;
      if (!/^l['’]h/i.test(fr)) die(`${id} "${fr}" is taught as an h that lets the article shorten, and its own entry disagrees`);
    }
    for (const id of ARTICLES_H_ASPIRE_IDS) {
      const fr = byId.get(id)!.fr;
      if (!/^(le|la|les)\sh/i.test(fr)) die(`${id} "${fr}" is taught as an h that keeps the article whole, and its own entry disagrees`);
    }

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

    const existingLesson = await client.query<{ version: number; sections: number }>(
      `select (body->>'version')::int as version, jsonb_array_length(body->'sections') as sections
         from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );
    const prior = existingLesson.rows[0];

    // A rebuild that restarts its own numbering reads as a rollback in the log.
    guardLessonVersion({
      lessonId: LESSON.id, prior: prior?.version, authored: LESSON.version,
      sourceFile: 'articles-lesson.ts', dryRun: DRY_RUN, die,
    });

    // ── Report ─────────────────────────────────────────────────────────────

    const rounds = quiz.type === 'quiz' ? (quiz.rounds?.length ?? 0) : 0;
    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});
    const themes = [...new Set(ARTICLES_ITEM_IDS.map((i) => i.split('.')[2]))];

    console.log(
      `\n  lesson: ${LESSON.id} "${LESSON.title}" — ` +
      `${prior ? `REBUILD, replacing v${prior.version} (${prior.sections} sections) with v${LESSON.version}` : `NEW at v${LESSON.version}`}`
    );
    console.log(`  new items: 0 (every noun and sentence this lesson teaches already ships)`);
    console.log(`  reused items: ${ARTICLES_ITEM_IDS.length}, across ${themes.length} themes: ${themes.join(', ')}`);
    console.log(`  preserved from v2: ${ARTICLES_PRESERVED_IDS.join(', ')}`);
    console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length}`);
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  quiz: ${qs.length} questions in ${rounds} rounds, all reachable`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')} (mcq ${Math.round((mcq / qs.length) * 100)}%)`);
    console.log(`  generic use: ${ARTICLES_GENERIC_PAIRS.length} corpus pairs where the English noun is bare and the French is not`);
    console.log(`  h split: ${ARTICLES_H_MUET_IDS.length} that shorten, ${ARTICLES_H_ASPIRE_IDS.length} that do not, each checked against its own entry`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  narration: ${LESSON.narration?.stages.map((s) => s.stage).join(' → ')}`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  no em dash ✓  no U+203F ✓  no sons jargon ✓  one reachable quiz ✓  every why and ref ✓`);
    console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');

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
      `\n✓ articles batch applied: lesson ${LESSON.id} published at v${LESSON.version}, unit ${UNIT_ID} linked, 0 items written.` +
      `\n` +
      `\n  Next, IN THIS ORDER:` +
      `\n    1. pnpm tsx scripts/merge-articles-into-seed.ts` +
      `\n    2. pnpm tsx scripts/check-seed-db-parity.ts` +
      `\n` +
      `\n  Do NOT run pnpm content:publish. It regenerates seed.json from the` +
      `\n  database and sons.09.l1 is still seed-only, so a publish would delete it.\n`
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
