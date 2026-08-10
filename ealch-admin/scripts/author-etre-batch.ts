// Content Batch — Le verbe être: a1.06.l1, on Lesson Architecture v2.
//
// a1.06 shipped as a declared unit with `lessonIds: []`. This batch authors its
// first and only lesson, plus the 32 corpus items the lesson could not find in
// the shipped corpus (see the header of scripts/data/etre-corpus.ts for why so
// many, and why they continue `metiers` rather than inventing a theme).
//
// It ALSO clears the unit's `themes: ["identite"]` binding, which names a theme
// that does not exist and never has. See the note at the clearing below.
//
// The content lives in scripts/data/ (etre-{corpus,terms,lesson}.ts) rather than
// inline here, the way every v2 lesson is now split, so the app's own test suite
// can import it directly:
//
//   ealch-v2/src/content/a1-06-etre.test.ts
//
// That test is the durable gate. This script re-runs the same validators before
// it writes, so a broken batch dies before it touches the database.
//
// Same contract as author-elision-batch.ts and author-pronoms-sujets-batch.ts:
// everything validates BEFORE the database is touched, then the items, the
// lesson and the unit upsert inside ONE transaction. Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm content:etre --dry-run   validate + report only
//   pnpm content:etre             apply, one transaction
//   then: pnpm tsx scripts/merge-etre-into-seed.ts    (seed, second)
//   then: pnpm tsx scripts/check-seed-db-parity.ts    (a1.06 must agree)
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
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode, dicteeWords } from '../../ealch-v2/src/content/dictee.logic.ts';
import { guardLessonVersion } from './version-guard.logic.ts';
import {
  CONTRAST_PAIRS,
  ETRE,
  ETRE_IDS,
  PARADIGM_FORMS,
  REUSED_IDS,
  THE_SIX,
  THE_USES,
  toItem,
  useIds,
} from './data/etre-corpus.ts';
import {
  ETRE_DICTATION_IDS,
  ETRE_ITEM_IDS,
  ETRE_LESSON,
  ETRE_SPEAK_IDS,
  REFRAME,
} from './data/etre-lesson.ts';

const LESSON: Lesson = ETRE_LESSON;
const UNIT_ID = 'a1.06';
const THEME = 'metiers';
const NEW_ITEMS: Item[] = ETRE.map(toItem);

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  Deliberately a CONSTANT rather than a count derived from the lesson. A
 *  derived figure compares the content to itself and passes on any rewording,
 *  and so would the density rule's "at least three sections" floor. This is the
 *  check that notices when someone paraphrases the line the whole lesson hangs
 *  on into "there is no pattern, only six forms", which reads the same and
 *  breaks the verbatim rule.
 *
 *  `strings()` walks the whole lesson object, so `Lesson.reframe` itself is one
 *  of the hits. The density validator counts SECTIONS and wants at least three;
 *  the sons lessons run five to seven and a1.01 carries eight strings across
 *  seven sections. */
const REFRAME_APPEARANCES = 9;
/** Of those strings, how many are sections. This is the figure the density
 *  validator actually cares about, so it is stated rather than inferred. */
const REFRAME_SECTIONS = 8;

/** The lesson's own arithmetic, asserted rather than trusted. If a paradigm
 *  sentence is ever reworded onto a different form of être, PARADIGM_FORMS moves
 *  and the reframe stops being true; this is what stops the lesson shipping a
 *  claim its own content contradicts. */
const EXPECTED_FORMS = 6;
const EXPECTED_USES = 4;

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

  const dupes = ETRE_IDS.filter((id, i) => ETRE_IDS.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  // `sont` IS a nasal vowel and it is one of the six forms this lesson is named
  // for, so [SONT] or [SON] would be wrong on the single card the unit exists to
  // teach. Checked with the REAL function rather than a local copy: the corpus at
  // large is not a safe source of truth for this rule (71 of the 180 nombres
  // respellings break it), so a re-implementation here would be a second copy
  // free to drift from the validator that actually gates the build.
  //
  // Note this must NOT fire on `sommes` -> [SOM]. The doubled m in the spelling
  // is a real pronounced consonant, which is the distinction hasPlainNasalFor
  // draws and hasPlainNasal alone cannot.
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
  const known = new Set([...ETRE_IDS, ...REUSED_IDS]);
  const density = validateDensity(LESSON, known);
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules sons-alphabet.test.ts enforces.
  const authored = JSON.stringify({ NEW_ITEMS, LESSON });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');
  // U+203F, the liaison tie. It renders as a low underscore on a Pixel 6 and
  // shipped that way in sons.10 and a1.04 before anyone looked. This lesson
  // teaches a liaison, so the temptation to reach for it is real.
  if (authored.includes('\u203F')) die('U+203F tie character found; it renders as an underscore on a device');

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears in ${hits} strings, expected exactly ${REFRAME_APPEARANCES}`);
  }
  const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  if (reframeSections !== REFRAME_SECTIONS) {
    die(`the reframe carries ${reframeSections} sections, expected exactly ${REFRAME_SECTIONS}`);
  }

  // The reframe's arithmetic, so it can be checked rather than believed.
  if (THE_SIX.length !== EXPECTED_FORMS) die(`THE_SIX names ${THE_SIX.length} forms, the reframe claims ${EXPECTED_FORMS}`);
  if (PARADIGM_FORMS.length !== EXPECTED_FORMS) {
    die(
      `the paradigm sentences carry ${PARADIGM_FORMS.length} distinct forms of être (${PARADIGM_FORMS.join(', ')}), ` +
      `and the reframe claims ${EXPECTED_FORMS}. Either a paradigm sentence was reworded onto a ` +
      `different form, or the reframe is now false.`
    );
  }
  const missingForm = THE_SIX.filter((f) => !PARADIGM_FORMS.includes(f));
  if (missingForm.length) die(`the paradigm never puts these forms on screen: ${missingForm.join(', ')}`);

  // Each use the canDo names has to reach the corpus, and so does the fourth one
  // this lesson chose to add. A use that quietly loses its items is a use the
  // lesson still claims in its roundup and no longer teaches.
  if (THE_USES.length !== EXPECTED_USES) die(`THE_USES names ${THE_USES.length} uses, expected ${EXPECTED_USES}`);
  for (const u of THE_USES) {
    if (!useIds(u).length) die(`use "${u}" has no corpus items at all`);
  }

  // Exactly one quiz section. The pager appends ONE quiz page and resolves it
  // with sections.find(s => s.type === 'quiz'), so a second quiz section is a set
  // of questions no learner can reach. a1.01 shipped 12 that way.
  const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
  if (quizzes.length !== 1) {
    die(
      `this lesson has ${quizzes.length} quiz sections. The pager can reach exactly one, ` +
      `so any others are unreachable questions. Fold them into the mission they follow.`
    );
  }

  // Every drill must be REACHABLE. drillForRound walks a round's targets and
  // returns the first one that has a drill, then stops, so a drill whose trigger
  // is never named first can never fire however many rounds mention it. a1.05
  // ships two such drills and its own test fails on them today; this is the
  // check that stops the same thing happening here.
  {
    const quiz = quizzes[0];
    const rounds = quiz.type === 'quiz' ? (quiz.rounds ?? []) : [];
    const drillFor = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
    const fired = new Set<string>();
    for (const r of rounds) {
      for (const target of r.targets ?? []) {
        const d = drillFor.get(target);
        if (d) {
          fired.add(d);
          break;
        }
      }
    }
    const authoredDrills = (LESSON.drills ?? []).map((d) => d.id);
    const retests = new Set((LESSON.errorTriggers ?? []).map((t) => t.retest).filter(Boolean) as string[]);
    const unreachable = authoredDrills.filter((id) => !fired.has(id) && !retests.has(id));
    if (unreachable.length) {
      die(
        `drill(s) no round can fire, because drillForRound only reads as far as the first ` +
        `target that has one: ${unreachable.join(', ')}`
      );
    }
    // And every trigger a round names has to exist.
    const knownTriggers = new Set((LESSON.errorTriggers ?? []).map((t) => t.id));
    const ghosts = rounds.flatMap((r) => (r.targets ?? []).filter((t) => !knownTriggers.has(t)));
    if (ghosts.length) die(`round(s) target triggers that are not authored: ${[...new Set(ghosts)].join(', ')}`);
  }

  // The dictée has to land in WORD mode or the learner gets a letter bank with
  // no word boundaries, which is a patience test rather than a dictée. Asked of
  // the real module the renderer uses, not of a restated threshold.
  const byId = new Map(NEW_ITEMS.map((i) => [i.id, i]));
  for (const id of ETRE_DICTATION_IDS) {
    const it = byId.get(id);
    if (!it) die(`the dictée names ${id}, which this batch does not author`);
    if (dicteeMode(it.fr) !== 'words') die(`dictée "${it.fr}" would spell letter by letter`);
    if (dicteeWords(it.fr).length < 4) die(`dictée "${it.fr}" is too short to be worth assembling`);
  }

  // A `dictation` tag is a PROMISE about what the renderer will do, and an item
  // that cannot reach word mode breaks it: the learner gets a bank of single
  // letters with no word boundaries. Several sentences here sit within a letter
  // or two of the threshold (`Vous êtes en retard.` is exactly 16 and falls to
  // letter mode), so this is checked on every authored item rather than only on
  // the ones the dictée currently names.
  const brokenPromise = NEW_ITEMS.filter((it) => it.drills.includes('dictation') && dicteeMode(it.fr) !== 'words');
  if (brokenPromise.length) {
    die(
      `item(s) carry the dictation drill but would spell letter by letter:\n` +
      brokenPromise.map((it) => `  ${it.id} "${it.fr}" (${it.fr.replace(/[^\p{L}]/gu, '').length} letters, threshold is 16)`).join('\n')
    );
  }

  // No wrong French may ever become a corpus row. `Il est un médecin.` is the
  // error this lesson exists to stop, and a corpus item is released to the
  // flashcard hub and to spaced repetition, so authoring it would DRILL the
  // error. Wrong forms belong in commonErrors, scene breaks and errorSpot
  // prompts, which are the surfaces that show a thing in order to reject it.
  const WRONG_FRENCH = [/\bil est un\b/i, /\belle est une\b/i, /\bon sommes\b/i, /\bvous es\b/i, /\bnous êtes\b/i];
  const drilled = NEW_ITEMS.filter((it) => WRONG_FRENCH.some((re) => re.test(it.fr)));
  if (drilled.length) {
    die(`the batch would publish a WRONG sentence as a corpus item: ${drilled.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
  }

  // No avoir conjugation reaches the corpus. `ils ont` is a display line in one
  // listening section and one quiz clip, which is a forward pointer to a1.07;
  // a corpus row would be taking a1.07's material.
  const avoir = NEW_ITEMS.filter((it) => /\b(ai|as|avons|avez|ont)\b/i.test(it.fr));
  if (avoir.length) die(`the batch authors avoir forms, which belong to a1.07: ${avoir.map((i) => i.id).join(', ')}`);

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

    // The contrast pairs are the act this lesson is for, and one of the three is
    // a1.11's. If either half of it ever moves, the two-column table draws a
    // comparison with a hole in it.
    for (const [withDet, bare] of CONTRAST_PAIRS) {
      for (const id of [withDet, bare]) {
        if (!byId.has(id) && !dbById.has(id)) die(`contrast pair names ${id}, which is neither authored here nor published`);
      }
    }

    // A mission is only as good as the drill tag behind it. An item without
    // `voiceflash` renders in the speak mission as a card the mic cannot score,
    // which reads as a broken mission rather than a missing tag.
    const tagsOf = (id: string): string[] => byId.get(id)?.drills ?? dbById.get(id)?.drills ?? [];
    const noVoice = ETRE_SPEAK_IDS.filter((id) => !tagsOf(id).includes('voiceflash'));
    if (noVoice.length) die(`speak mission names items without the voiceflash drill:\n  ${noVoice.join('\n  ')}`);

    const noDictation = ETRE_DICTATION_IDS.filter((id) => !tagsOf(id).includes('dictation'));
    if (noDictation.length) die(`dictation mission names items without the dictation drill:\n  ${noDictation.join('\n  ')}`);

    // Nothing this batch authors may collide with a row already in the theme: the
    // flashcard hub keys decks on `fr`, so two non-sentence items with the same
    // spelling serve the same card twice. Every authored entry here is a sentence
    // and therefore exempt, and this checks that that stays true rather than
    // assuming it.
    const nonSentence = NEW_ITEMS.filter((i) => i.kind !== 'sentence');
    if (nonSentence.length) {
      const clash = await client.query<{ id: string; fr: string }>(
        `select id, fr from content_items where theme = $3 and kind <> 'sentence' and fr = any($1) and id <> all($2)`,
        [nonSentence.map((i) => i.fr), nonSentence.map((i) => i.id), THEME]
      );
      if (clash.rowCount) die(`authored words collide with existing ${THEME} items: ${clash.rows.map((r) => `${r.id} "${r.fr}"`).join(', ')}`);
    }

    // Ids continue the theme's run. Checked against the database rather than
    // remembered, because a concurrent batch may have appended since.
    const maxRow = await client.query<{ mx: number }>(
      `select max((substring(id from '[0-9]+$'))::int) as mx from content_items where theme = $2 and level = 'a1' and id <> all($1)`,
      [ETRE_IDS, THEME]
    );
    const priorMax = maxRow.rows[0]?.mx ?? 0;
    const lowest = Math.min(...ETRE_IDS.map((id) => Number(id.split('.').pop())));
    if (lowest <= priorMax) {
      die(
        `this batch would renumber over existing ${THEME} items: the theme runs to .${priorMax} and ` +
        `this batch starts at .${String(lowest).padStart(3, '0')}. Ids are the SRS key and are never reused.`
      );
    }

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    // ── The `identite` decision, applied ──────────────────────────────────
    //
    // a1.06 ships declaring `themes: ["identite"]`. There is no `identite` theme:
    // 33 exist and it is not one of them, so this binding has resolved to nothing
    // since the day it was written. Three options were on the table (create the
    // theme, rebind to an existing one, or clear it) and clearing is taken:
    // a1.03, a1.04, a1.05 and a1.11 are all grammar units carrying no theme, a
    // new theme is product-visible in the flashcard hub and the Den, and this
    // lesson draws from five themes rather than one.
    //
    // `title`, `sub` and `canDo` are NOT touched. All three are correct and the
    // Den advertises them.
    //
    // a1.07 declares the same non-existent theme and inherits the same argument,
    // and is deliberately NOT touched here: changing another unit's shipped body
    // from this batch would be an edit nobody reviewing a1.06 would see.
    const { themes: priorThemes, ...withoutThemes } = unitBody as Unit & { themes?: string[] };
    const nextUnit: Unit = {
      ...withoutThemes,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    if ((nextUnit as { themes?: unknown }).themes !== undefined) {
      die('the themes binding survived the clearing; a1.06 would still declare a theme that does not exist');
    }
    if (nextUnit.title !== unitBody.title || nextUnit.sub !== unitBody.sub || nextUnit.canDo !== unitBody.canDo) {
      die('this batch would change the unit title, sub or canDo. All three are correct and the Den advertises them.');
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
      sourceFile: 'etre-lesson.ts', dryRun: DRY_RUN, die,
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
    const errorSpot = formats.errorSpot ?? 0;

    console.log(
      `\n  lesson: ${LESSON.id} "${LESSON.title}" — ` +
      `${existingLesson.rowCount ? `updating v${prior} → v${LESSON.version}` : `NEW at v${LESSON.version}`}`
    );
    console.log(`  new items: ${NEW_ITEMS.length} (${ETRE_IDS[0]} through .${ETRE_IDS[ETRE_IDS.length - 1].split('.').pop()}, continuing ${THEME} from .${priorMax})`);
    console.log(`  reused items: ${REUSED_IDS.length}, all verified published in THIS database`);
    console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length}`);
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length}`);
    console.log(`  terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the claim: ${PARADIGM_FORMS.length} forms of être (${PARADIGM_FORMS.join(' · ')}), ${THE_USES.length} uses`);
    console.log(`  uses: ${THE_USES.map((u) => `${u} ${useIds(u).length}`).join(', ')}`);
    console.log(`  quiz: ${qs.length} questions in ${rounds} rounds, all reachable`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  quiz mcq share: ${mcq}/${qs.length} (${Math.round((mcq / qs.length) * 100)}%, cap 50%)`);
    console.log(`  quiz errorSpot share: ${errorSpot}/${qs.length} (${Math.round((errorSpot / qs.length) * 100)}%)`);
    console.log(`  quiz why coverage: ${qs.filter((q) => q.why).length}/${qs.length}`);
    console.log(`  quiz ref coverage: ${qs.filter((q) => q.ref).length}/${qs.length}`);
    console.log(`  speak: ${ETRE_SPEAK_IDS.length} items | dictée: ${ETRE_DICTATION_IDS.length} items, all in word mode`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" x${hits} strings across ${reframeSections} sections`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  nasal ✓  one reachable quiz ✓  every drill firable ✓  dictée word mode ✓  no wrong French ✓  no avoir ✓`);
    console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`  unit ${UNIT_ID} themes: ${JSON.stringify(priorThemes ?? null)} → cleared (no such theme exists; a1.07 declares the same one and is NOT touched here)`);

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
      `\n✓ être batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published at v${LESSON.version}, unit ${UNIT_ID} linked and its dead theme binding cleared.` +
      `\n` +
      `\n  Next, IN THIS ORDER:` +
      `\n    1. pnpm tsx scripts/merge-etre-into-seed.ts` +
      `\n    2. pnpm tsx scripts/check-seed-db-parity.ts   (a1.06 must agree on both sides)` +
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
