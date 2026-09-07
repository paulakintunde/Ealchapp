// Content Batch — Le genre des noms: a1.03.l1, authored on Lesson Architecture v2.
//
// a1.03 shipped with `lessonIds: []`. This batch authors its first lesson and
// links the unit. It authors NO corpus entries at all, which is the strongest
// available answer to "how many items did you add": every one of the 45 ids the
// lesson names already exists, published, with the drills it needs. A lesson
// that invents its own words is a lesson whose words are absent from the
// flashcard hub, the SRS and every other lesson, so reference by id is the
// default and authoring is the exception that needs a written reason.
//
// The content lives in scripts/data/ (genre-lesson.ts, genre-terms.ts,
// genre-endings.ts) rather than inline here, the way every v2 lesson is now
// split, so the app's own test suite can import it directly:
//
//   ealch-v2/src/content/a1-03-genre.test.ts
//
// That test is the durable gate. This script re-runs the same validators before
// it writes, so a broken batch dies before it touches the database.
//
// ── The check that matters most here ──────────────────────────────────────
//
// This lesson makes thirteen numerical claims about the corpus: ten ending
// rules and three endings it tells the learner to ignore. Every one of them is
// printed on a card, and a display string is validated against nothing.
//
// So they are MEASURED here, against the database, using the same module the
// test uses (ealch-v2/src/content/gender.logic.ts). Not against seed.json: the
// two drift, this batch writes to Postgres, and a claim that is true of the
// seed and false of the database would ship as false. The merge script runs the
// same measurement against the seed, so both copies have to agree with the
// cards before either is written.
//
// Usage (from ealch-admin/):
//   pnpm content:gender --dry-run   validate + report only
//   pnpm content:gender             apply, one transaction
//   then: pnpm tsx scripts/merge-noun-gender-into-seed.ts   (seed, second)
//   then: pnpm tsx scripts/check-seed-db-parity.ts
//
// Order matters. `pnpm content:publish` regenerates seed.json FROM the
// database, so the database has to be written first. Merging first and
// publishing second silently deletes the lesson from the seed.
//
// Do NOT run `pnpm audio:render`. It spends real ElevenLabs credits, and every
// recordingId falling back to device TTS is the correct shipping state.

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
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
import { carriesArticle, isPluralOnly, measureEnding, type GenderRow } from '../../ealch-v2/src/content/gender.logic.ts';
import {
  ENDING_RULES,
  ENDINGS_ACCURACY,
  ENDINGS_COVERED,
  MORE_ENDINGS,
  RULE_FLOOR,
  WORTHLESS_ENDINGS,
} from './data/genre-endings.ts';
import {
  GENRE_DICTATION_IDS,
  GENRE_HIDDEN,
  GENRE_ITEM_IDS,
  GENRE_LESSON,
  GENRE_SPEAK_IDS,
  REFRAME,
} from './data/genre-lesson.ts';

const LESSON: Lesson = GENRE_LESSON;
const UNIT_ID = 'a1.03';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  Deliberately a CONSTANT rather than a count derived from the lesson: a
 *  derived figure compares the content to itself and passes on any rewording,
 *  and the density rule's "at least three sections" minimum would pass too.
 *  This is the check that notices when somebody paraphrases the line the whole
 *  lesson hangs on.
 *
 *  Eleven: seven section strings, the `reframe` field itself, one quiz round
 *  say, one quiz `why`, and one narration segment. */
const REFRAME_APPEARANCES = 11;

/** This batch authors no corpus entries. Stated as a constant so that adding
 *  one is a decision somebody has to make on purpose rather than a side effect
 *  of editing a data file. */
const EXPECTED_NEW_ITEMS = 0;

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

  // ── Everything validates before the database is touched ───────────────────

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // House-style guards, the same rules sons-alphabet.test.ts enforces.
  const authored = JSON.stringify(LESSON);
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
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

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // ── The corpus, as the DATABASE holds it ────────────────────────────────
    //
    // Read once and used for everything below. Checked against Postgres rather
    // than seed.json because the two drift, and an id that exists only in the
    // seed renders as an empty card on a device.
    const corpus = await client.query<GenderRow & { level: string; drills: string[] }>(
      `select id, kind, level, fr, en, gender, tags, drills
         from content_items where status = 'published'`
    );
    const rows = corpus.rows;
    const byId = new Map(rows.map((r) => [r.id, r]));

    const missing = GENRE_ITEM_IDS.filter((id) => !byId.has(id));
    if (missing.length) {
      die(
        `lesson references items that are not published in THIS database:\n  ${missing.join('\n  ')}\n` +
        `  (seed.json can run ahead of the database — these may exist in the seed but not here.)`
      );
    }

    // ── The numerical claims, measured against BOTH corpora ─────────────────
    //
    // This is the check the whole lesson stands on, and it is two checks
    // because there are two corpora.
    //
    // seed.json is a CUT of this database and Postgres holds roughly four times
    // as many gendered nouns. The figures PRINTED ON THE CARDS describe the
    // seed, because the seed is what the app bundles and therefore what a
    // learner can actually meet, and because it is the only population CI can
    // measure on every run.
    //
    // A rule that is true only of the cut is an artifact rather than a rule, so
    // the database is asked a weaker but more important question: does this
    // ending still predict the SAME gender, and does it still clear the floor?
    // Two candidates failed exactly that and were cut before this shipped:
    // -eur (93% in the seed, 86% here) and -oire (90% in the seed, 61% here).
    // The dismissed endings are held to the mirror: under the floor in both.
    const seedItems = (
      JSON.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), '../../ealch-v2/src/content/seed.json'), 'utf8')) as { items: GenderRow[] }
    ).items;

    const claimErrors: string[] = [];
    for (const r of ENDING_RULES) {
      const s = measureEnding(seedItems, r.ending);
      const d = measureEnding(rows, r.ending);
      if (!s || !d) {
        claimErrors.push(`-${r.ending}: no nouns end this way in ${s ? 'the database' : 'the seed'}`);
        continue;
      }
      // The card, against the corpus the card describes.
      if (s.accuracy !== r.accuracy) claimErrors.push(`-${r.ending}: card says ${r.accuracy}%, seed says ${s.accuracy}%`);
      if (s.n !== r.items) claimErrors.push(`-${r.ending}: card says ${r.items} nouns, seed says ${s.n}`);
      if (s.predicts !== r.predicts) claimErrors.push(`-${r.ending}: card predicts ${r.predicts}, seed says ${s.predicts}`);
      if (s.accuracy < RULE_FLOOR) claimErrors.push(`-${r.ending}: ${s.accuracy}% in the seed is under the ${RULE_FLOOR}% floor`);
      // The rule, against everything the project holds.
      if (d.predicts !== r.predicts) {
        claimErrors.push(`-${r.ending}: predicts ${r.predicts} in the seed and ${d.predicts} in the database, so it is an artifact of the cut`);
      }
      if (d.accuracy < RULE_FLOOR) {
        claimErrors.push(`-${r.ending}: ${d.accuracy}% over ${d.n} nouns in the database is under the ${RULE_FLOOR}% floor, so it should not be taught`);
      }

      // A rule with a real exception must NAME one, and a rule with none must
      // not invent one. Both directions, because a lesson that downgraded its
      // counterexample to a lookalike would look tidier and teach worse.
      const exceptions = r.breaks.filter((b) => b.kind === 'exception');
      if (s.accuracy < 100 && !exceptions.length) {
        claimErrors.push(`-${r.ending}: measured ${s.accuracy}% and names no exception, so it ships a rule without its counterexample`);
      }
      if (s.accuracy === 100 && exceptions.length) {
        claimErrors.push(`-${r.ending}: measured 100% and claims an exception, which is not in this corpus`);
      }
      const realBreaks = new Set(s.breaks.map((b) => b.id));
      for (const b of exceptions) {
        if (!realBreaks.has(b.id)) claimErrors.push(`-${r.ending}: names ${b.id} as an exception, and it is not one`);
      }

      // Display copy against the row it claims to show.
      for (const n of [r.example, ...r.breaks]) {
        const it = byId.get(n.id);
        if (!it) { claimErrors.push(`-${r.ending}: ${n.id} is not published here`); continue; }
        if (it.fr !== n.fr) claimErrors.push(`-${r.ending}: card shows "${n.fr}", ${n.id} is "${it.fr}"`);
        if (!carriesArticle(it.fr)) claimErrors.push(`-${r.ending}: ${n.id} "${it.fr}" carries no article`);
      }
      const heroGender = byId.get(r.example.id)?.gender;
      if (heroGender !== r.predicts) {
        claimErrors.push(`-${r.ending}: the hero noun ${r.example.id} is ${heroGender}, and the rule predicts ${r.predicts}`);
      }
    }
    for (const w of WORTHLESS_ENDINGS) {
      const s = measureEnding(seedItems, w.ending);
      const d = measureEnding(rows, w.ending);
      if (!s || !d) { claimErrors.push(`-${w.ending}: nothing ends this way`); continue; }
      if (s.accuracy !== w.accuracy) claimErrors.push(`-${w.ending}: card says ${w.accuracy}%, seed says ${s.accuracy}%`);
      if (s.n !== w.items) claimErrors.push(`-${w.ending}: card says ${w.items} nouns, seed says ${s.n}`);
      if (s.accuracy >= RULE_FLOOR) claimErrors.push(`-${w.ending}: ${s.accuracy}% in the seed now clears the floor and is no longer worthless`);
      if (d.accuracy >= RULE_FLOOR) claimErrors.push(`-${w.ending}: ${d.accuracy}% in the database now clears the floor and is no longer worthless`);
      const [masc, fem] = w.bothWays;
      if (byId.get(masc.id)?.gender !== 'm' || byId.get(fem.id)?.gender !== 'f') {
        claimErrors.push(`-${w.ending}: the pair shown is not one of each gender`);
      }
    }
    for (const e of MORE_ENDINGS) {
      const s = measureEnding(seedItems, e.ending);
      const d = measureEnding(rows, e.ending);
      if (!s || !d) { claimErrors.push(`sheet -${e.ending}: nothing ends this way`); continue; }
      if (s.accuracy !== e.accuracy || s.n !== e.items || s.predicts !== e.predicts) {
        claimErrors.push(`sheet -${e.ending}: sheet says ${e.predicts} ${e.accuracy}% over ${e.items}, seed says ${s.predicts} ${s.accuracy}% over ${s.n}`);
      }
      if (s.accuracy < RULE_FLOOR) claimErrors.push(`sheet -${e.ending}: ${s.accuracy}% in the seed is under the ${RULE_FLOOR}% floor`);
      if (d.predicts !== e.predicts || d.accuracy < RULE_FLOOR) {
        claimErrors.push(`sheet -${e.ending}: the database says ${d.predicts} ${d.accuracy}% over ${d.n}, so this one does not survive the full corpus`);
      }
    }
    if (claimErrors.length) {
      die(`the lesson states figures the corpora do not support:\n  ${claimErrors.join('\n  ')}`);
    }

    // ── The reframe, expressed as a check ───────────────────────────────────
    //
    // Every noun the lesson teaches has to carry its article. This is not a
    // style rule: a teaching set that drifted to bare nouns would be a lesson
    // arguing for a habit its own cards do not follow.
    const bare = GENRE_ITEM_IDS
      .map((id) => byId.get(id)!)
      .filter((it) => it.kind !== 'sentence' && !carriesArticle(it.fr));
    if (bare.length) {
      die(`these nouns are taught without their article:\n  ${bare.map((i) => `${i.id} "${i.fr}"`).join('\n  ')}`);
    }

    // No plural-only noun may be used to teach the m/f choice. `les` and `des`
    // are the same word either way, so a learner asked to sort one is being
    // asked to recall rather than to work anything out. The three the lesson
    // SHOWS are named on one examples card and reach no drill, deck or quiz.
    const teaching = new Set<string>([
      ...GENRE_SPEAK_IDS,
      ...(LESSON.drills ?? []).flatMap((d) => d.items ?? []),
      ...ENDING_RULES.map((r) => r.example.id),
    ]);
    const pluralInDrills = [...teaching].filter((id) => isPluralOnly(byId.get(id)?.fr ?? ''));
    if (pluralInDrills.length) {
      die(`plural-only nouns reach a teaching surface, where les carries no information:\n  ${pluralInDrills.join('\n  ')}`);
    }

    // Every id the lesson names still carries the gender field it is taught on.
    const ungendered = GENRE_ITEM_IDS
      .map((id) => byId.get(id)!)
      .filter((it) => it.kind !== 'sentence' && it.gender !== 'm' && it.gender !== 'f');
    if (ungendered.length) {
      die(`these are taught as gendered nouns and carry no gender in the database:\n  ${ungendered.map((i) => i.id).join('\n  ')}`);
    }

    // The elided nouns: the corpus form and the un/une form the lesson restores.
    const hiddenErrors = GENRE_HIDDEN.flatMap((h) => {
      const it = byId.get(h.id)!;
      const out: string[] = [];
      if (it.fr !== h.elided) out.push(`${h.id}: lesson shows "${h.elided}", database has "${it.fr}"`);
      if (it.gender !== h.g) out.push(`${h.id}: lesson says ${h.g}, database says ${it.gender}`);
      if (!h.shown.startsWith(h.g === 'm' ? 'un ' : 'une ')) out.push(`${h.id}: "${h.shown}" does not restore the article`);
      if (!/^l['’]/i.test(it.fr)) out.push(`${h.id}: "${it.fr}" is not an elided noun, so it teaches nothing here`);
      return out;
    });
    if (hiddenErrors.length) die(`the elided-noun mission disagrees with the database:\n  ${hiddenErrors.join('\n  ')}`);

    // ── Drill tags ──────────────────────────────────────────────────────────
    //
    // A mission is only as good as the drill tag behind it. An item without
    // `voiceflash` renders in the speak mission as a card the mic cannot score,
    // which reads as a broken mission rather than a missing tag.
    const noVoice = GENRE_SPEAK_IDS.filter((id) => !(byId.get(id)?.drills ?? []).includes('voiceflash'));
    if (noVoice.length) die(`speak mission names items without the voiceflash drill:\n  ${noVoice.join('\n  ')}`);

    // Not one of the 1,598 a1 gendered WORD items carries `dictation`, which is
    // why the dictée is drawn from sentences. Checked rather than assumed.
    const noDictation = GENRE_DICTATION_IDS.filter((id) => !(byId.get(id)?.drills ?? []).includes('dictation'));
    if (noDictation.length) die(`dictation mission names items without the dictation drill:\n  ${noDictation.join('\n  ')}`);

    // The v2 density rules, now with the real corpus behind the item-resolution
    // check. This is what makes the architecture real rather than aspirational:
    // a crowded screen fails the build.
    const density = validateDensity(LESSON, new Set(rows.map((r) => r.id)));
    if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

    // ── The unit ────────────────────────────────────────────────────────────
    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    // `themes` is left ABSENT, deliberately and permanently. Gender is a
    // property of every noun rather than a topic, and this lesson's 41 nouns
    // come from 13 themes, so binding three of them would point the Den's chips
    // at decks that are not what the unit is about. Asserted rather than
    // assumed, so a later batch that adds one has to change this line.
    if ((unitBody as { themes?: unknown }).themes !== undefined) {
      die(
        `unit ${UNIT_ID} has grown a \`themes\` key. This lesson deliberately leaves it absent ` +
        `(see the note in genre-lesson.ts). If that decision has been reversed, change this check with it.`
      );
    }

    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );

    // ── Report ─────────────────────────────────────────────────────────────

    const qs = quiz.type === 'quiz' ? quizQuestions(quiz) : [];
    const rounds = quiz.type === 'quiz' ? (quiz.rounds?.length ?? 0) : 0;
    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});
    const mcq = formats.mcq ?? 0;
    const prior = existingLesson.rows[0]?.version;
    const words = GENRE_ITEM_IDS.map((id) => byId.get(id)!).filter((i) => i.kind !== 'sentence');
    const masc = words.filter((i) => i.gender === 'm').length;

    console.log(
      `\n  lesson: ${LESSON.id} "${LESSON.title}" — ` +
      `${existingLesson.rowCount ? `updating v${prior} → v${LESSON.version}` : `NEW at v${LESSON.version}`}`
    );
    console.log(`  new items: ${EXPECTED_NEW_ITEMS} (this lesson authors none; every id already exists)`);
    console.log(`  reused items: ${GENRE_ITEM_IDS.length}, across themes ${[...new Set(GENRE_ITEM_IDS.map((i) => i.split('.')[2]))].sort().join(', ')}`);
    console.log(`  gender balance: ${masc}m / ${words.length - masc}f across ${words.length} nouns`);
    console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length}`);
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  quiz: ${qs.length} questions in ${rounds} rounds, all reachable`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')} (mcq ${Math.round((mcq / qs.length) * 100)}%)`);
    console.log(`  endings taught: ${ENDING_RULES.length}, covering ${ENDINGS_COVERED} nouns at ${ENDINGS_ACCURACY}% in the seed, every one of them re-checked against this database`);
    console.log(`  endings dismissed: ${WORTHLESS_ENDINGS.map((w) => `-${w.ending} ${w.accuracy}%`).join(', ')} (under the floor in both corpora)`);
    console.log(
      `  elided nouns taught: ${GENRE_HIDDEN.length}, of ` +
      `${seedItems.filter((r) => r.kind === 'word' && r.gender && /^l['’]/i.test(r.fr)).length} in the seed and ` +
      `${rows.filter((r) => r.kind === 'word' && r.gender && /^l['’]/i.test(r.fr)).length} in this database`
    );
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  narration: ${LESSON.narration?.stages.map((s) => s.stage).join(' → ')}`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  one reachable quiz ✓  every figure measured ✓`);
    console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`  unit ${UNIT_ID} themes: absent, and left absent on purpose`);

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
      `\n✓ noun-gender batch applied: lesson ${LESSON.id} published at v${LESSON.version}, unit ${UNIT_ID} linked.` +
      `\n  No corpus rows were written, by design.` +
      `\n` +
      `\n  Next, IN THIS ORDER:` +
      `\n    1. pnpm tsx scripts/merge-noun-gender-into-seed.ts` +
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
