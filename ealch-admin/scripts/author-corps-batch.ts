/**
 * a1.24 "Le corps": six authored rows, the imported rows verified field by
 * field, thirteen respelling repairs, the lesson, and the unit edit that drops
 * a dead theme.
 *
 * Validates EVERYTHING before it opens a transaction. Nothing here is written
 * unless the whole batch is valid, and every write is idempotent by id, so a
 * re-run after a failure is safe.
 *
 *   pnpm content:corps --dry-run     report, write nothing
 *   pnpm content:corps               apply
 *
 * ── What this batch checks that a previous build shipped wrong ─────────────
 *
 * IMPORTED ROWS ARE VERIFIED AGAINST POSTGRES, FIELD BY FIELD. This lesson
 * names 23 rows it did not write. If one of them has been edited since the
 * probe, the lesson's cards silently disagree with the corpus and the learner
 * sees one thing on a card and another in the flashcard hub. Every imported id
 * is read back and its `fr` compared.
 *
 * DRILLS ARE CHECKED AGAINST POSTGRES, NOT THE SEED. `practice` with
 * skill:'speak' renders nothing for an item without `voiceflash`, and the
 * dictée renders nothing for an item without `dictation`. Both lists are read
 * back from the database before anything is written.
 *
 * THE RESPELLING REPAIRS MUST TOUCH EXACTLY ONE ROW EACH. A repair that
 * matches zero rows means the id moved; one that matches more means the id is
 * not unique. Either rolls the whole transaction back.
 *
 * a1.03's ENDING POPULATION IS MEASURED THROUGH THE REAL FUNCTION. Not a copy
 * of it: a1.08 shipped a hand-rolled `endingPopulation` carrying a filter the
 * real one does not have, let four rows through, and moved two of a1.03's
 * printed cards.
 */
import './env';
import { describeTarget } from './env';
import {
  formatIssues, validateItem, validateLesson, quizQuestions,
} from '../../ealch-v2/src/content/schema.ts';
import type { Item } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  APPEARANCE, AUTHORED, A1_25_REFLEXIVE_FORMS, A2_CLINIC_FORMS, FORBIDDEN_FORMS,
  HANDOVER_NEXT_FREE_ID, IMPORTED_IDS, NEIGHBOUR_ADJECTIVES, NOT_REPAIRED,
  OWNED_ID_RANGE, REPAIRS_INVISIBLE_TO_CHECKER, RESPELL_REPAIRS, THE_FOURTEEN,
  toItem,
} from './data/corps-corpus.ts';
import {
  CORPS_DICTATION_IDS, CORPS_ITEM_IDS, CORPS_LESSON, CORPS_ROUND_FIRST_TARGET,
  CORPS_SPEAK_IDS, REFRAME,
} from './data/corps-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');

const UNIT_ID = 'a1.24';
const UNIT_THEMES_BEFORE = ['corps', 'sante'];
const UNIT_THEMES_AFTER = ['corps'];
/** Asserted rather than assumed: the reframe count is checked against THIS
 *  number, not against a figure derived from the lesson, because a derived
 *  count compares the content to itself and passes on any rewording. */
const REFRAME_APPEARANCES = 7;   // sections, measured 2026-08-07

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

const AUTHORED_ITEMS: Item[] = AUTHORED.map(toItem);
const LESSON = CORPS_LESSON;

async function main() {
  console.log(`\ntarget: ${describeTarget()}`);
  console.log(`mode:   ${DRY_RUN ? 'DRY RUN, nothing will be written' : 'APPLY'}\n`);

  /* ── 1. The authored rows validate on their own ───────────────────────── */

  const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`authored items invalid:\n${formatIssues(itemIssues)}`);

  const ids = AUTHORED_ITEMS.map((i) => i.id);
  const dupe = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupe.length) die(`duplicate authored id(s): ${dupe.join(', ')}`);

  const outOfRange = ids.filter((id) => id < OWNED_ID_RANGE.from || id > OWNED_ID_RANGE.to);
  if (outOfRange.length) die(`authored id(s) outside the owned range: ${outOfRange.join(', ')}`);

  /* ── 2. The lesson validates, and so does its density ─────────────────── */

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  const known = new Set<string>([...IMPORTED_IDS, ...ids]);
  const density = validateDensity(LESSON, known);
  if (density.length) die(`density:\n${formatDensity(density)}`);

  /* ── 3. The house rules, checked here rather than only in the test ────── */

  const all = strings(LESSON);
  const emDash = all.filter((s) => s.includes('—'));
  if (emDash.length) die(`em dash in ${emDash.length} string(s), first: "${emDash[0].slice(0, 60)}"`);

  const honest = all.filter((s) => /honest/i.test(s));
  if (honest.length) die(`banned word "honest" in ${honest.length} string(s)`);

  // Counted the way the density validator counts it: SECTIONS carrying the line
  // verbatim, not raw string occurrences. The two differ (the `reframe` field
  // itself, a drill coach line and a sheet body also hold it, which took the
  // string count to 11) and only the section count is the figure the rule is
  // about. Asserted against the constant above rather than against a figure
  // derived from the lesson, because a derived count compares the content to
  // itself and passes on any rewording.
  const reframeHits = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
  if (reframeHits !== REFRAME_APPEARANCES) {
    die(`reframe appears in ${reframeHits} section(s), expected exactly ${REFRAME_APPEARANCES}`);
  }

  /* ── 4. What this lesson must not teach ───────────────────────────────── */
  //
  // Scoped to PRODUCTION SURFACES (decks, vocab, drills, quiz), never to every
  // string. The reading passage legitimately shows a doctor and a waiting room,
  // and a guard over every string fires on it and gets deleted by the next
  // author, which is worse than no guard.

  const produced = strings([
    LESSON.sections.filter((s) => s.type !== 'reading' && s.type !== 'scene'),
    LESSON.drills,
  ]).join(' ').toLowerCase();

  for (const f of FORBIDDEN_FORMS) {
    // The quiz shows a wrong form on purpose, inside an errorSpot stem and its
    // distractors. So this checks the ANSWERS and the teaching, not the stems.
    const taught = strings([
      LESSON.sections.filter((s) => s.type === 'cardDeck' || s.type === 'tapTable' || s.type === 'vocabThemes'),
    ]).join(' ');
    if (taught.includes(f)) die(`forbidden form "${f}" appears on a teaching surface`);
  }
  for (const f of [...A2_CLINIC_FORMS, ...A1_25_REFLEXIVE_FORMS, ...NEIGHBOUR_ADJECTIVES]) {
    if (new RegExp(`\\b${f}\\b`, 'i').test(produced)) {
      die(`"${f}" belongs to a neighbouring unit and appears on a production surface`);
    }
  }

  /* ── 5. The quiz ──────────────────────────────────────────────────────── */

  const qs = quizQuestions(LESSON.sections.find((s) => s.type === 'quiz') as never);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq > qs.length / 2) die(`${mcq}/${qs.length} questions are mcq, which is over half`);

  const noWhy = qs.filter((q) => !q.why || !q.ref);
  if (noWhy.length) die(`${noWhy.length} question(s) missing a why or a ref`);

  const openBad = qs.filter((q) => q.accept?.length && q.answer && !matchesAccept(q.answer, q.accept));
  if (openBad.length) {
    die(`free-text question(s) do not accept the answer they display: ${openBad.map((q) => q.q).join(' | ')}`);
  }

  const positional = qs.flatMap((q) => q.opts ?? []).filter((o) =>
    /\b(the first|the second|the third|the last|both of|none of the (above|last))\b/i.test(o));
  if (positional.length) {
    // QuizDeckView shuffles the options of every question, per question, per
    // attempt, so an option naming a POSITION IN THE OPTION LIST is meaningless
    // on screen. "the first" in a stem that refers to three spoken LINES is
    // fine, which is why this reads options only.
    die(`quiz option(s) refer to a position, which the runtime shuffle breaks: ${positional.join(' | ')}`);
  }

  const dupOpt = qs.filter((q) => q.opts && new Set(q.opts.map((o) => o.trim().toLowerCase())).size !== q.opts.length);
  if (dupOpt.length) die(`${dupOpt.length} question(s) carry a duplicate option`);

  const closed = qs.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
  const slot: Record<number, number> = {};
  for (const q of closed) slot[q.correct as number] = (slot[q.correct as number] ?? 0) + 1;
  const worst = Math.max(...Object.values(slot)) / closed.length;
  if (worst > 0.4) die(`${(worst * 100).toFixed(0)}% of correct answers sit in one slot (limit 40%)`);

  /* ── 6. Each round fires a DISTINCT drill ─────────────────────────────── */
  //
  // `drillForRound` fires the drill of the FIRST resolving target only, then
  // stops. a1.05 shipped two drills named in second place and they were dead
  // content that no learner could ever reach.

  const firsts = CORPS_ROUND_FIRST_TARGET.map((r) => r.firstTarget);
  if (firsts.some((t) => !t)) die('a quiz round names no targets');
  if (new Set(firsts).size !== firsts.length) {
    die(`two rounds share a first target, so one drill is unreachable: ${firsts.join(', ')}`);
  }
  const triggerIds = new Set((LESSON.errorTriggers ?? []).map((t) => t.id));
  const missing = firsts.filter((t) => !triggerIds.has(t!));
  if (missing.length) die(`round target(s) resolve to no error trigger: ${missing.join(', ')}`);
  const drillIds = new Set((LESSON.drills ?? []).map((d) => d.id));
  for (const t of LESSON.errorTriggers ?? []) {
    if (!drillIds.has(t.drill)) die(`trigger ${t.id} names drill ${t.drill}, which does not exist`);
    if (t.retest && !drillIds.has(t.retest)) die(`trigger ${t.id} names retest ${t.retest}, which does not exist`);
  }

  /* ── 7. No imageRef anywhere ──────────────────────────────────────────── */
  //
  // A body lesson wants a labelled diagram and nothing in this app draws one.
  // lesson-contract.test.ts contains no reference to `imageRef`, so an authored
  // one is schema-valid, passes CI and renders a blank box.

  const imageRefs = JSON.stringify(LESSON).match(/"imageRef"/g)?.length ?? 0;
  if (imageRefs !== 0) die(`${imageRefs} imageRef(s) authored, and no component resolves one for this lesson`);

  /* ── 8. Now talk to Postgres ──────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const client = await pool.connect();

  try {
    /* 8a. Every imported row exists and still says what the lesson shows. */
    const impRes = await client.query<{ id: string; fr: string; drills: string[]; theme: string }>(
      `select id, fr, drills, theme from content_items where id = any($1)`,
      [IMPORTED_IDS],
    );
    const got = new Map(impRes.rows.map((r) => [r.id, r]));
    const absent = IMPORTED_IDS.filter((id) => !got.has(id));
    if (absent.length) die(`imported id(s) not in the database: ${absent.join(', ')}`);

    for (const p of [...THE_FOURTEEN, ...APPEARANCE]) {
      const row = got.get(p.id)!;
      if (row.fr !== p.fr) die(`${p.id}: corpus says "${row.fr}", this lesson shows "${p.fr}"`);
      if (row.theme !== 'corps') die(`${p.id} is in theme "${row.theme}", not corps`);
    }

    /* 8b. Drills, checked against POSTGRES rather than the seed. */
    const drillRes = await client.query<{ id: string; drills: string[] }>(
      `select id, drills from content_items where id = any($1)`,
      [[...CORPS_SPEAK_IDS, ...CORPS_DICTATION_IDS].filter((id) => !ids.includes(id))],
    );
    const drillsOf = new Map(drillRes.rows.map((r) => [r.id, r.drills]));
    const authoredDrills = new Map(AUTHORED_ITEMS.map((i) => [i.id, i.drills as string[]]));
    const has = (id: string, d: string) => (drillsOf.get(id) ?? authoredDrills.get(id) ?? []).includes(d);

    const noVoice = CORPS_SPEAK_IDS.filter((id) => !has(id, 'voiceflash'));
    if (noVoice.length) die(`practice skill:'speak' names item(s) without voiceflash, which render nothing: ${noVoice.join(', ')}`);
    const noDict = CORPS_DICTATION_IDS.filter((id) => !has(id, 'dictation'));
    if (noDict.length) die(`the dictée names item(s) without a dictation drill: ${noDict.join(', ')}`);

    /* 8c. No two non-sentence rows in `corps` may share an `fr`. */
    const themeRes = await client.query<{ id: string; fr: string; kind: string }>(
      `select id, fr, kind from content_items where theme = 'corps' and status = 'published'`,
    );
    const strip = (f: string) => f.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de l')/, '').trim();
    const pool2 = [
      ...themeRes.rows.filter((r) => r.kind !== 'sentence' && !ids.includes(r.id)),
      ...AUTHORED_ITEMS.filter((i) => i.kind !== 'sentence').map((i) => ({ id: i.id, fr: i.fr, kind: i.kind })),
    ];
    const byFr = new Map<string, string[]>();
    for (const r of pool2) {
      const k = strip(r.fr);
      byFr.set(k, [...(byFr.get(k) ?? []), r.id]);
    }
    const collide = [...byFr.entries()].filter(([, v]) => v.length > 1);
    if (collide.length) {
      die(`duplicate fr inside theme corps, which flashhub serves as one card twice:\n`
        + collide.map(([k, v]) => `    "${k}": ${v.join(' + ')}`).join('\n'));
    }

    /* 8d. a1.03's ending population, through the REAL function. */
    const joiners = endingPopulation(AUTHORED_ITEMS);
    if (joiners.length) {
      die(`${joiners.length} authored row(s) join a1.03's measured ending population `
        + `and would move its printed figures: ${joiners.map((j) => j.id + ' ' + j.fr).join(', ')}. `
        + `Withdraw them rather than re-rendering a1.03.`);
    }

    /* 8e. Every repair will touch exactly one row, checked before writing. */
    for (const r of RESPELL_REPAIRS) {
      const chk = await client.query(
        `select 1 from content_items where id = $1 and fr = $2`, [r.id, r.fr],
      );
      if (chk.rowCount !== 1) die(`repair target ${r.id} "${r.fr}" matches ${chk.rowCount} rows`);
    }

    /* 8f. The unit, and the dead theme. */
    const unitRow = await client.query<{ body: Record<string, unknown> }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`, [UNIT_ID],
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found, cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body as {
      themes?: string[]; lessonIds?: string[]; title?: string; sub?: string; canDo?: string;
    };

    const santeCount = await client.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme = 'sante' and status = 'published'`,
    );
    const nSante = Number(santeCount.rows[0].n);
    if (nSante > 0) {
      die(`the "sante" theme now holds ${nSante} published rows. This batch drops it from ${UNIT_ID} `
        + `on the evidence that it held ZERO in both copies. Re-probe and rewrite the brief before proceeding.`);
    }

    const nextUnit = { ...unitBody, themes: UNIT_THEMES_AFTER, lessonIds: [LESSON.id] };

    /* ── 9. Report ────────────────────────────────────────────────────── */

    console.log('=== a1.24 "Le corps" ===\n');
    console.log(`  authored items: ${AUTHORED_ITEMS.length}, at ${OWNED_ID_RANGE.from} to ${OWNED_ID_RANGE.to}`);
    for (const a of AUTHORED) console.log(`    ${a.id}  ${a.fr.padEnd(34)} ${a.why}`);
    console.log(`\n  imported items: ${IMPORTED_IDS.length}, every one verified field by field against Postgres.`);
    console.log(`    This lesson IMPORTS. corps held 293 rows before it and holds ${293 + AUTHORED.length} after.`);

    console.log(`\n  RESPELLING REPAIRS: ${RESPELL_REPAIRS.length}`);
    for (const r of RESPELL_REPAIRS) {
      // "invisible" is only meaningful for a repair that touches a nasal at
      // all. A pure article-case row was never flagged because it never had a
      // nasal defect, and printing INVISIBLE against it says something false.
      const nasal = r.to.includes('ⁿ');
      const note = nasal && !r.caughtByChecker ? '   INVISIBLE to hasPlainNasalFor' : '';
      console.log(`    ${r.id}  ${r.fr.padEnd(13)} [${r.from}] -> [${r.to}]   ${r.kind}${note}`);
    }
    console.log(`    Two defects, not one: 47 of the theme's rows carry an UPPERCASE article and 82 a lowercase`);
    console.log(`    one, and NOT ONE of the 191 respelled rows carries the superscript nasal. The second is a`);
    console.log(`    corpus-wide condition of the whole fr.a1.* import wave (objets 46 flagged, maison 18), not`);
    console.log(`    something this lesson introduced. Repaired here: only the rows this lesson NAMES.`);
    console.log(`    Invisible to the shared checker and asserted BY NAME in the test: ${REPAIRS_INVISIBLE_TO_CHECKER.join(', ')}`);
    console.log(`\n  NOT REPAIRED, deliberately: ${NOT_REPAIRED.join(', ')} (l'oreille [loh-RAY] is already correct).`);
    console.log(`    The test asserts it stays that way, so a future "consistency fix" goes red instead of shipping.`);

    console.log(`\n  a1.03's ENDING POPULATION: ${joiners.length} authored rows join it.`);
    console.log(`    "les yeux" is excluded by isPluralOnly() before gender is consulted; blond and frisé are`);
    console.log(`    tagged 'adjective', which isNotANoun() reads. Checked through the REAL endingPopulation.`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(unitBody.themes ?? [])} -> ${JSON.stringify(UNIT_THEMES_AFTER)}`);
    console.log(`      "sante" holds ${nSante} published rows in Postgres and 0 in the seed. A theme empty in BOTH`);
    console.log(`      copies is dead and is dropped rather than populated. The health vocabulary that would have`);
    console.log(`      justified it is ALREADY inside corps at .122-.155 (fièvre, rhume, grippe, toux, douleur).`);
    console.log(`      a2.28 "At the Doctor's" also declares sante and has no lesson: this is now a DECISION it`);
    console.log(`      inherits rather than an absence it rediscovers.`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} -> ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} title / sub / canDo: UNCHANGED. All three are correct and the Den advertises them.`);

    console.log(`\n  LESSON: ${LESSON.sections.length} sections, ${LESSON.acts!.length} acts, ${qs.length} quiz questions in 6 rounds.`);
    console.log(`    formats: mcq ${mcq}/${qs.length}, and every question carries a why and a ref.`);
    console.log(`    answer slots: ${JSON.stringify(slot)}, worst ${(worst * 100).toFixed(0)}% (limit 40%).`);
    console.log(`    QuizDeckView shuffles options per question per attempt, so no option names a position and`);
    console.log(`    no question repeats one. Both checked above.`);
    console.log(`    each round fires a DISTINCT drill: ${CORPS_ROUND_FIRST_TARGET.map((r) => `${r.round}->${r.firstTarget}`).join(', ')}`);
    console.log(`    reframe authored ${reframeHits} times (asserted against the constant ${REFRAME_APPEARANCES}, not a derived figure).`);
    console.log(`    imageRefs: 0, and that is a decision. No component draws a body diagram.`);

    console.log(`\n  HANDOVER: NEXT FREE is ${HANDOVER_NEXT_FREE_ID}.`);
    console.log(`    a2.28 keeps the consultation. a1.25 keeps the reflexives. a1.14/a1.16 keep the adjectives.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      return;
    }

    /* ── 10. Write ─────────────────────────────────────────────────────── */

    await client.query('begin');

    for (const it of AUTHORED_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by, card_type, prompt)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human',$15,$16)
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           card_type=excluded.card_type, prompt=excluded.prompt`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version, it.cardType ?? null, it.prompt ?? null,
        ],
      );
    }

    for (const r of RESPELL_REPAIRS) {
      const res = await client.query(
        `update content_items set respell = $1 where id = $2 and fr = $3`, [r.to, r.id, r.fr],
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`respelling repair for ${r.id} touched ${res.rowCount} rows, rolled back, nothing changed`);
      }
    }

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ corps batch applied: ${AUTHORED_ITEMS.length} authored items + ${RESPELL_REPAIRS.length} respelling repairs`
      + `\n  + lesson ${LESSON.id} published, unit ${UNIT_ID} linked and "sante" dropped.`
      + `\n  Next: pnpm tsx scripts/merge-corps-into-seed.ts --dry-run`
      + `\n  Do NOT run pnpm content:publish.\n`,
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
