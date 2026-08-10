// Content Batch — Les pronoms sujets: a1.05.l1, on Lesson Architecture v2.
//
// a1.05 shipped as a declared unit with `lessonIds: []`. This batch authors its
// first and only lesson, plus the 26 corpus items the lesson could not find in
// the shipped corpus (see the header of scripts/data/pronoms-sujets-corpus.ts
// for why any at all, and why they continue the `cafe` theme rather than
// inventing one).
//
// The content lives in scripts/data/ (pronoms-sujets-{corpus,terms,lesson}.ts)
// rather than inline here, the way every v2 lesson is now split, so the app's
// own test suite can import it directly:
//
//   ealch-v2/src/content/a1-05-pronoms.test.ts
//
// That test is the durable gate. This script re-runs the same validators before
// it writes, so a broken batch dies before it touches the database.
//
// Same contract as author-elision-batch.ts: everything validates BEFORE the
// database is touched, then the items, the lesson and the unit link upsert
// inside ONE transaction. Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm content:pronoms --dry-run   validate + report only
//   pnpm content:pronoms             apply, one transaction
//   then: pnpm tsx scripts/merge-pronoms-sujets-into-seed.ts   (seed, second)
//   then: pnpm tsx scripts/check-seed-db-parity.ts             (a1.05 must agree)
//
// Order matters. `pnpm content:publish` regenerates seed.json FROM the database,
// so the database has to be written first. Merging first and publishing second
// silently deletes the lesson from the seed. That is not hypothetical: it is
// what happened to sons.07.l1, which survived only because its source files
// were intact.
//
// This batch does NOT run `pnpm audio:render`. That spends real ElevenLabs
// credits, ELEVENLABS_API_KEY is not set in this checkout, and CLIP_MANIFEST is
// empty by design, so every card falls back to device TTS until the studio
// delivers. A recordingId resolving to nothing is the correct shipping state.

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
import { dicteeMode, dicteeWords } from '../../ealch-v2/src/content/dictee.logic.ts';
import { guardLessonVersion } from './version-guard.logic.ts';
import {
  METALINGUISTIC_TRAP_IDS,
  PRONOUNS,
  PRONOUN_IDS,
  REUSED_IDS,
  THE_NINE,
  THE_SIX,
  toItem,
} from './data/pronoms-sujets-corpus.ts';
import {
  PRONOMS_DICTATION_IDS,
  PRONOMS_ITEM_IDS,
  PRONOMS_LESSON,
  PRONOMS_SPEAK_IDS,
  REFRAME,
} from './data/pronoms-sujets-lesson.ts';

const LESSON: Lesson = PRONOMS_LESSON;
const UNIT_ID = 'a1.05';
const NEW_ITEMS: Item[] = PRONOUNS.map(toItem);

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  Deliberately a CONSTANT rather than a count derived from the lesson. A
 *  derived figure compares the content to itself and passes on any rewording,
 *  and so would the density rule's "at least three sections" floor. This is the
 *  check that notices when someone paraphrases the line the whole lesson hangs
 *  on into "nine pronouns but only six forms", which reads the same and breaks
 *  the verbatim rule.
 *
 *  Eleven strings, NINE sections: `strings()` walks the whole lesson object, so
 *  `Lesson.reframe` itself is one hit and the exam carries two (the arithmetic
 *  question in round one and the ils/elles question in round four). The density
 *  validator counts SECTIONS and wants at least three; the sons lessons run
 *  five to seven and a1.01 carries eight strings across seven sections. */
const REFRAME_APPEARANCES = 11;
/** Of those ten strings, how many are sections. This is the figure the density
 *  validator actually cares about, so it is stated rather than inferred. */
const REFRAME_SECTIONS = 9;

/** The lesson's own arithmetic, asserted rather than trusted. If a paradigm
 *  sentence is ever reworded onto a different form of être, THE_SIX moves and
 *  the reframe stops being true; this is what stops the lesson shipping a claim
 *  its own content contradicts. */
const EXPECTED_PRONOUNS = 9;
const EXPECTED_FORMS = 6;

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

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const dupes = PRONOUN_IDS.filter((id, i) => PRONOUN_IDS.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  // `on` is a nasal vowel and it is this lesson's signature word, so a
  // respelling of [ON] would be wrong on the one card the unit is named for.
  // Checked with the REAL function rather than a local copy: the corpus at large
  // is not a safe source of truth for this rule (71 of the 180 nombres
  // respellings break it), so a re-implementation here would be a second copy
  // free to drift from the validator that actually gates the build.
  const badNasal = NEW_ITEMS.filter((it) => it.respell && hasPlainNasalFor(it.fr, it.respell));
  if (badNasal.length) {
    die(
      `respellings close a nasal vowel with a plain n or m:\n` +
      badNasal.map((it) => `  ${it.id} "${it.fr}" -> [${it.respell}]`).join('\n')
    );
  }

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build.
  const known = new Set([...PRONOUN_IDS, ...REUSED_IDS]);
  const density = validateDensity(LESSON, known);
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules sons-alphabet.test.ts enforces.
  const authored = JSON.stringify({ NEW_ITEMS, LESSON });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');
  // U+203F, the liaison tie. It renders as a low underscore on a Pixel 6 and
  // shipped that way in sons.10 and a1.04 before anyone looked.
  if (authored.includes('\u203F')) die('U+203F tie character found; it renders as an underscore on a device');

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears in ${hits} strings, expected exactly ${REFRAME_APPEARANCES}`);
  }
  const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  if (reframeSections !== REFRAME_SECTIONS) {
    die(`the reframe carries ${reframeSections} sections, expected exactly ${REFRAME_SECTIONS}`);
  }

  // The reframe is arithmetic, so it can be checked rather than believed.
  if (THE_NINE.length !== EXPECTED_PRONOUNS) die(`the corpus names ${THE_NINE.length} pronouns, the reframe claims ${EXPECTED_PRONOUNS}`);
  if (THE_SIX.length !== EXPECTED_FORMS) {
    die(
      `the paradigm sentences carry ${THE_SIX.length} distinct forms of être (${THE_SIX.join(', ')}), ` +
      `and the reframe claims ${EXPECTED_FORMS}. Either a paradigm sentence was reworded onto a ` +
      `different form, or the reframe is now false.`
    );
  }

  // Exactly one quiz section. The pager appends ONE quiz page and resolves it
  // with sections.find(s => s.type === 'quiz'), so a second quiz section is a
  // set of questions no learner can reach. a1.01 shipped 12 that way.
  const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
  if (quizzes.length !== 1) {
    die(
      `this lesson has ${quizzes.length} quiz sections. The pager can reach exactly one, ` +
      `so any others are unreachable questions. Fold them into the mission they follow.`
    );
  }

  // The dictée has to land in WORD mode or the learner gets a letter bank with
  // no word boundaries, which is a patience test rather than a dictée. Asked of
  // the real module the renderer uses, not of a restated threshold.
  const byId = new Map(NEW_ITEMS.map((i) => [i.id, i]));
  for (const id of PRONOMS_DICTATION_IDS) {
    const it = byId.get(id);
    if (!it) die(`the dictée names ${id}, which this batch does not author`);
    if (dicteeMode(it.fr) !== 'words') die(`dictée "${it.fr}" would spell letter by letter`);
    if (dicteeWords(it.fr).length < 4) die(`dictée "${it.fr}" is too short to be worth assembling`);
  }

  // The metalinguistic trap: three corpus items are `kind: 'sentence'` and are
  // grammar notes written in French, and all three open on `on`. Their generic
  // `on` is a real use of the pronoun, which is exactly what makes them look
  // ideal for this lesson. They are nonsense to hear and impossible to spell.
  const trapped = METALINGUISTIC_TRAP_IDS.filter((id) => PRONOMS_ITEM_IDS.includes(id));
  if (trapped.length) {
    die(`the lesson names metalinguistic corpus items as learner sentences: ${trapped.join(', ')}`);
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every reused item must already be published HERE. Checked against the
    // database, not seed.json, because the seed can run ahead: an id that exists
    // only in the seed renders as an empty card on a device.
    const found = await client.query<{ id: string; drills: string[]; fr: string }>(
      `select id, drills::text[] as drills, fr from content_items where id = any($1) and status = 'published'`,
      [REUSED_IDS]
    );
    const dbById = new Map(found.rows.map((r) => [r.id, r]));
    const missing = REUSED_IDS.filter((id) => !dbById.has(id));
    if (missing.length) {
      die(
        `the lesson reuses items that are not published in THIS database:\n  ${missing.join('\n  ')}\n` +
        `  (seed.json can run ahead of the database; these may exist there and not here.)`
      );
    }

    // A mission is only as good as the drill tag behind it. An item without
    // `voiceflash` renders in the speak mission as a card the mic cannot score,
    // which reads as a broken mission rather than a missing tag. Every speak id
    // is authored here, so this checks the batch's own tags; the reused half is
    // checked for the drills the missions that name them actually run.
    const tagsOf = (id: string): string[] => byId.get(id)?.drills ?? dbById.get(id)?.drills ?? [];
    const noVoice = PRONOMS_SPEAK_IDS.filter((id) => !tagsOf(id).includes('voiceflash'));
    if (noVoice.length) die(`speak mission names items without the voiceflash drill:\n  ${noVoice.join('\n  ')}`);

    const noDictation = PRONOMS_DICTATION_IDS.filter((id) => !tagsOf(id).includes('dictation'));
    if (noDictation.length) die(`dictation mission names items without the dictation drill:\n  ${noDictation.join('\n  ')}`);

    // Nothing this batch authors may collide with a row already in the theme:
    // the flashcard hub keys decks on `fr`, so two non-sentence items with the
    // same spelling serve the same card twice. Every authored entry here is a
    // sentence and therefore exempt, and this checks that that stays true rather
    // than assuming it.
    const nonSentence = NEW_ITEMS.filter((i) => i.kind !== 'sentence');
    if (nonSentence.length) {
      const clash = await client.query<{ id: string; fr: string }>(
        `select id, fr from content_items where theme = 'cafe' and kind <> 'sentence' and fr = any($1) and id <> all($2)`,
        [nonSentence.map((i) => i.fr), nonSentence.map((i) => i.id)]
      );
      if (clash.rowCount) die(`authored words collide with existing cafe items: ${clash.rows.map((r) => `${r.id} "${r.fr}"`).join(', ')}`);
    }

    // Ids continue the theme's run. Checked against the database rather than
    // remembered, because a concurrent batch may have appended since.
    const maxRow = await client.query<{ mx: number }>(
      `select max((substring(id from '[0-9]+$'))::int) as mx from content_items where theme = 'cafe' and level = 'a1' and id <> all($1)`,
      [PRONOUN_IDS]
    );
    const priorMax = maxRow.rows[0]?.mx ?? 0;
    const lowest = Math.min(...PRONOUN_IDS.map((id) => Number(id.split('.').pop())));
    if (lowest <= priorMax) {
      die(
        `this batch would renumber over existing cafe items: the theme runs to .${priorMax} and ` +
        `this batch starts at .${String(lowest).padStart(3, '0')}. Ids are the SRS key and are never reused.`
      );
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
    // The unit has NO `themes` binding and keeps it. A grammar unit that claims
    // one theme misrepresents itself in the Den, and this lesson draws from six.
    if ((nextUnit as { themes?: unknown }).themes !== undefined) {
      die('this batch would give a1.05 a themes binding; a grammar unit does not have one');
    }
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'pronoms-sujets-lesson.ts', dryRun: DRY_RUN, die,
    });

    // ── Report ─────────────────────────────────────────────────────────────

    const quiz = quizzes[0];
    const qs = quiz.type === 'quiz' ? quizQuestions(quiz) : [];
    const rounds = quiz.type === 'quiz' ? (quiz.rounds?.length ?? 0) : 0;
    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});
    const mcq = formats.mcq ?? 0;

    console.log(
      `\n  lesson: ${LESSON.id} "${LESSON.title}" — ` +
      `${existingLesson.rowCount ? `updating v${prior} → v${LESSON.version}` : `NEW at v${LESSON.version}`}`
    );
    console.log(`  new items: ${NEW_ITEMS.length} (${PRONOUN_IDS[0]} through .${PRONOUN_IDS[PRONOUN_IDS.length - 1].split('.').pop()}, continuing cafe from .${priorMax})`);
    console.log(`  reused items: ${REUSED_IDS.length}, all verified published in THIS database`);
    console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length}`);
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the claim: ${THE_NINE.length} pronouns, ${THE_SIX.length} forms of être (${THE_SIX.join(' · ')})`);
    console.log(`  quiz: ${qs.length} questions in ${rounds} rounds, all reachable`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  quiz mcq share: ${mcq}/${qs.length} (${Math.round((mcq / qs.length) * 100)}%, cap 50%)`);
    console.log(`  quiz why coverage: ${qs.filter((q) => q.why).length}/${qs.length}`);
    console.log(`  speak: ${PRONOMS_SPEAK_IDS.length} items | dictée: ${PRONOMS_DICTATION_IDS.length} items, all in word mode`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  nasal ✓  one reachable quiz ✓  dictée word mode ✓`);
    console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`  unit ${UNIT_ID} themes: still unbound, which is correct for a grammar unit`);

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
      `\n✓ pronoms batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published at v${LESSON.version}, unit ${UNIT_ID} linked.` +
      `\n` +
      `\n  Next, IN THIS ORDER:` +
      `\n    1. pnpm tsx scripts/merge-pronoms-sujets-into-seed.ts` +
      `\n    2. pnpm tsx scripts/check-seed-db-parity.ts   (a1.05 must agree on both sides)` +
      `\n` +
      `\n  Check \`git diff\` on ealch-v2/src/content/seed.json BEFORE anyone runs` +
      `\n  pnpm content:publish. The seed can run AHEAD of the database during` +
      `\n  authoring, and a publish regenerates it from the database.\n`
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
