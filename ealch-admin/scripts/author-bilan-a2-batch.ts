// a2.35 "Bilan A2" -> Postgres.
//
//   pnpm tsx scripts/author-bilan-a2-batch.ts --dry-run    validate, write nothing
//   pnpm tsx scripts/author-bilan-a2-batch.ts              write in ONE transaction
//
// NOT `author-bilan-batch.ts`. That one exists, it is a1.30's, and it writes
// a1.30.l1 and a1.30.l2. The two scripts share no state and neither can touch
// the other's rows: this one is scoped to the slug prefix `a2.35.`.
//
// ORDER MATTERS AND IT IS COUNTER-INTUITIVE. Postgres first, THEN the seed, and
// publish only once the two agree. `content:publish` regenerates seed.json FROM
// the database, so a seed written before this batch is a seed the next publish
// silently deletes. That is the 2026-07-31 incident, and running these two in
// the wrong order is the whole way it happens.
//
// What this writes:
//
//   inserts  content_units slug a2.35.l1   new row
//   inserts  content_units slug a2.35.l2   new row
//   updates  content_units a2.35           the curriculum_unit body, relinked
//
// What it does NOT write:
//
//   content_items. Not one row, inserted, updated or deleted. Both lessons
//   carry an empty itemIds, no theme is created, and every row the questions
//   quote is already published by the unit that taught it.

import './env';
import { describeTarget, isRemoteTarget } from './env';
import {
  formatIssues,
  quizQuestions,
  validateLesson,
  type Lesson,
  type QuizQuestion,
  type QuizRound,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { fold, matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  BILAN_A2_LESSONS, EXAM_LESSON, REVIEW_LESSON, REFRAME, REFRAME_EXAM, REVIEW_TRIGGERS,
} from './data/bilan-a2-lesson.ts';
import {
  A2_TRAIL,
  BANNED_SUBSTRINGS,
  FORBIDDEN_CLAIMS,
  JARGON,
  PLAIN_PHRASE,
  TECHNICAL_WORD,
  countWord,
  display,
  formatMix,
  hasWord,
  homophoneClashes,
  measuredShares,
  mixDrift,
  unitsNamedByRoundIds,
  unitsNamedInText,
} from './data/bilan-a2-spread.ts';

const DRY_RUN = process.argv.includes('--dry-run') || process.argv.includes('--dry');
const UNIT_ID = 'a2.35';

/* Explicit, not derived. Invariants §5: a figure derived from the lesson
 * compares the lesson to itself and passes on any edit. */
const EXPECTED_REVIEW_ROUNDS = 34;
const EXPECTED_REVIEW_QUESTIONS = 170;
const EXPECTED_EXAM_ROUNDS = 12;
const EXPECTED_EXAM_QUESTIONS = 60;
const EXPECTED_REVIEW_SECTIONS = 5;
const EXPECTED_EXAM_SECTIONS = 4;
const EXPECTED_FAMILIES = 12;

/** The five questions in this build that turn on a diacritic, and therefore
 *  the five that MUST be `mcq`.
 *
 *  Corrections §5: `fold()` and `normalizeFr()` strip accents and cedillas, so
 *  a typed, spotted or assembled surface asking one of these ACCEPTS THE
 *  MISTAKE and tells the learner they spelled it right. Options are picked
 *  rather than typed, so only `mcq` and `listenChoose` can ask, and none of
 *  these five is audible either. Named here so a later edit that turns one into
 *  a typeIn fails rather than ships. */
const DIACRITIC_ONLY = [
  'commençons', 'préfère', 'connaît', 'dû', 'évidemment',
] as const;

function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

function ok(label: string, detail = '') {
  console.log(`  ✓ ${label}${detail ? `  ${detail}` : ''}`);
}

const roundsOf = (l: Lesson): QuizRound[] => {
  const q = l.sections.find((s) => s.type === 'quiz') as { rounds?: QuizRound[] } | undefined;
  return q?.rounds ?? [];
};

const quizOf = (l: Lesson) => l.sections.find((s) => s.type === 'quiz')!;
const questionsOf = (l: Lesson) => quizQuestions(quizOf(l));
const isOpen = (q: QuizQuestion) => q.format === 'typeIn' || q.format === 'errorSpot' || q.format === 'speak';

/** Every string a learner can read, across a lesson. Corrections §9 and §13:
 *  `intro` and `overview` are drawn on the lesson cover and the overview card
 *  and the jargon walk of every A2 lesson before this one missed both. */
const learnerText = (l: Lesson): { path: string; s: string }[] => [
  ...display(l.sections, 'sections'),
  ...display(l.sheets ?? [], 'sheets'),
  ...display(l.terms ?? {}, 'terms'),
  ...display(l.drills ?? [], 'drills'),
  ...display(l.intro ?? '', 'intro'),
  ...display(l.overview ?? {}, 'overview'),
];

async function main() {
  console.log(`\na2.35 "Bilan A2" -> ${describeTarget()}`);
  if (isRemoteTarget()) console.log('  TARGET IS REMOTE.');
  if (DRY_RUN) console.log('  (dry run, nothing will be written)');

  /* ── 1. Schema and density ──────────────────────────────────────────── */

  console.log('\n── Validating ──');
  for (const lesson of BILAN_A2_LESSONS) {
    const issues = validateLesson(lesson);
    if (issues.length) die(`${lesson.id} fails the schema:\n${formatIssues(issues)}`);
    // Empty item set: both lessons carry no corpus ids, so passing an empty set
    // skips exactly the item-resolution rule and runs every other one.
    const density = validateDensity(lesson, new Set());
    if (density.length) die(`${lesson.id} fails density:\n${formatDensity(density)}`);
    ok(`${lesson.id} schema and density`, `${lesson.sections.length} sections, ${questionsOf(lesson).length} questions`);
  }

  /* ── 2. It owns no corpus ───────────────────────────────────────────── */

  for (const lesson of BILAN_A2_LESSONS) {
    if (lesson.itemIds.length) die(`${lesson.id} claims ${lesson.itemIds.length} corpus rows; this unit owns none`);
    if ((lesson.sheets ?? []).length) die(`${lesson.id} declares a reference sheet; the capstone has none`);
    if (lesson.sections.some((s) => s.type === 'practice')) die(`${lesson.id} carries a practice section, which the assessment flag forbids`);
    if (lesson.sections.some((s) => 'deckTranche' in s)) die(`${lesson.id} carries a deckTranche; the capstone releases no SRS cards`);
    if (!lesson.features?.includes('assessment')) die(`${lesson.id} is missing features: ['assessment'], without which the publish gate rejects it`);
  }
  ok('owns no corpus', 'itemIds empty, no sheets, no practice, no deckTranche, assessment flagged');

  /* ── 3. One quiz per lesson, and the counts ─────────────────────────── */

  for (const lesson of BILAN_A2_LESSONS) {
    const n = lesson.sections.filter((s) => s.type === 'quiz').length;
    if (n !== 1) die(`${lesson.id} has ${n} quiz sections; the pager renders exactly one and the rest are never drawn`);
  }
  ok('one quiz section per lesson');

  const reviewRounds = roundsOf(REVIEW_LESSON);
  const examRounds = roundsOf(EXAM_LESSON);
  const reviewQs = questionsOf(REVIEW_LESSON);
  const examQs = questionsOf(EXAM_LESSON);

  if (reviewRounds.length !== EXPECTED_REVIEW_ROUNDS) die(`review has ${reviewRounds.length} rounds, expected ${EXPECTED_REVIEW_ROUNDS}`);
  if (reviewQs.length !== EXPECTED_REVIEW_QUESTIONS) die(`review has ${reviewQs.length} questions, expected ${EXPECTED_REVIEW_QUESTIONS}`);
  if (examRounds.length !== EXPECTED_EXAM_ROUNDS) die(`exam has ${examRounds.length} rounds, expected ${EXPECTED_EXAM_ROUNDS}`);
  if (examQs.length !== EXPECTED_EXAM_QUESTIONS) die(`exam has ${examQs.length} questions, expected ${EXPECTED_EXAM_QUESTIONS}`);
  if (REVIEW_LESSON.sections.length !== EXPECTED_REVIEW_SECTIONS) die(`review has ${REVIEW_LESSON.sections.length} sections, expected ${EXPECTED_REVIEW_SECTIONS}`);
  if (EXAM_LESSON.sections.length !== EXPECTED_EXAM_SECTIONS) die(`exam has ${EXAM_LESSON.sections.length} sections, expected ${EXPECTED_EXAM_SECTIONS}`);
  if (reviewRounds.some((r) => r.questions.length !== 5)) die('a review round does not carry exactly five questions');
  if (examRounds.some((r) => r.questions.length !== 5)) die('an exam round does not carry exactly five questions');
  ok('counts', `${reviewRounds.length}+${examRounds.length} rounds, ${reviewQs.length}+${examQs.length} questions`);

  /* ── 4. Coverage, unit by unit ──────────────────────────────────────── */

  const named = unitsNamedByRoundIds(reviewRounds);
  const missing = A2_TRAIL.filter((u) => !named.has(u.id));
  if (missing.length) die(`no review round covers: ${missing.map((u) => `seq ${u.seq} ${u.id}`).join(', ')}`);
  const doubled = [...named.entries()].filter(([, ids]) => ids.length > 1);
  if (doubled.length) die(`covered twice: ${doubled.map(([id, ids]) => `${id} by ${ids.join(' and ')}`).join('; ')}`);
  const stray = [...named.keys()].filter((id) => !A2_TRAIL.some((u) => u.id === id));
  if (stray.length) die(`a round names a unit that is not on the trail: ${stray.join(', ')}`);
  // And the ROUND ORDER is the trail order, not id order.
  const walked = reviewRounds.map((r) => /^r\d\d-a2-(\d\d)-/.exec(r.id)![1]).map((n) => `a2.${n}`);
  const wanted = A2_TRAIL.map((u) => u.id);
  if (walked.join(',') !== wanted.join(',')) {
    die(`the rounds are not in seq order.\n    got:  ${walked.join(' ')}\n    want: ${wanted.join(' ')}`);
  }
  ok('coverage', `all ${A2_TRAIL.length} trail units, one round each, in seq order`);

  /* ── 5. The exam names nothing ──────────────────────────────────────── */

  const examQuiz = quizOf(EXAM_LESSON) as { exam?: boolean };
  const reviewQuiz = quizOf(REVIEW_LESSON) as { exam?: boolean };
  if (examQuiz.exam !== true) die('the exam quiz is not marked exam: true');
  if (reviewQuiz.exam !== undefined) die('the review quiz carries an exam flag; remediation would be suppressed');
  if (examRounds.some((r) => (r.targets ?? []).length)) die('an exam round declares targets, which fires a remediation drill mid-exam');
  const leaks = unitsNamedInText(examRounds);
  if (leaks.length) die(`an exam round names a unit, which is the one thing it must not do:\n    ${leaks.join('\n    ')}`);
  // The positive half. Every REVIEW round must name its unit, or the round is
  // no longer a diagnostic and the whole split has no reason to exist.
  const unnamed = reviewRounds.filter((r) => !/(unit)\s+\d+/i.test(r.label));
  if (unnamed.length) die(`a review round does not name its unit in its label: ${unnamed.map((r) => r.id).join(', ')}`);
  ok('exam conditions', 'exam: true, no targets, no round names a unit; all 34 review rounds do');

  /* ── 6. Every question teaches on the way out ───────────────────────── */

  const allQs = [...reviewQs, ...examQs];
  const noWhy = allQs.filter((q) => !q.why?.trim());
  if (noWhy.length) die(`${noWhy.length} question(s) carry no why, starting with: ${noWhy[0].q.slice(0, 60)}`);
  const sectionIds = new Set([...REVIEW_LESSON.sections, ...EXAM_LESSON.sections].map((s) => (s as { id: string }).id));
  const badRef = allQs.filter((q) => !q.ref || !sectionIds.has(q.ref));
  if (badRef.length) die(`${badRef.length} question(s) name a ref that is not a section in either lesson`);
  ok('every question has a why and a resolving ref', `${allQs.length} of them`);

  /* ── 7. Open formats accept what they display ───────────────────────── */

  for (const q of allQs.filter(isOpen)) {
    const shown = q.answer ?? '';
    if (!shown) die(`open question with no answer to show: ${q.q.slice(0, 60)}`);
    if (!matchesAccept(shown, q.accept)) {
      die(`an open question does not accept the answer it displays:\n    q: ${q.q}\n    shows: ${shown}\n    accepts: ${JSON.stringify(q.accept)}`);
    }
    // Two accept entries that fold to one string mean the question believes it
    // is accepting two answers and is accepting one. That is the accent
    // illusion: `préfère` and `prefere` are the same string to fold().
    const folded = (q.accept ?? []).map(fold);
    const dupes = folded.filter((f, i) => folded.indexOf(f) !== i);
    if (dupes.length) {
      die(`an open question lists two accepted answers that fold to one:\n    q: ${q.q}\n    both fold to: ${dupes[0]}`);
    }
  }
  ok('open formats', `${allQs.filter(isOpen).length} accept the answer they display, with no folded duplicates`);

  /* ── 8. Nothing typed turns on a diacritic ──────────────────────────── */

  // THE MECHANICAL HALF, AND IT IS THE ONE THAT GENERALISES. An errorSpot
  // whose prompt and answer fold to one string is unanswerable: the learner is
  // shown a mistake, types the correction, and the comparison cannot tell the
  // two apart, so the wrong answer is also accepted. Every way of testing a
  // diacritic, a capital or a space with a typed format lands here.
  for (const q of allQs.filter((x) => x.format === 'errorSpot')) {
    if (!q.prompt) die(`an errorSpot carries no prompt, so the learner is asked to fix a phrase that never appears: ${q.q}`);
    if (fold(q.prompt) === fold(q.answer ?? '')) {
      die(`an errorSpot's mistake is invisible to the comparison, so both answers are accepted:\n    shown:    ${q.prompt}\n    expected: ${q.answer}\n    both fold to: ${fold(q.prompt)}`);
    }
  }

  // THE DECLARED HALF. These five are the questions this build wanted and could
  // only write as `mcq`. Asserting that each is asked by a picked format keeps
  // the decision on the record: a later author who turns one into a typeIn gets
  // the reason rather than a silent regression into a question that accepts the
  // mistake it is asking about.
  //
  // Note the test is on the OPTIONS, not on the whole question. « Je préfère
  // celui » is a legitimate errorSpot prompt whose correction is `celui-ci`,
  // and the accent in it is incidental; the first version of this guard failed
  // on exactly that and was measuring the wrong thing.
  for (const word of DIACRITIC_ONLY) {
    const asked = allQs.filter((q) => q.format === 'mcq' && (q.opts ?? []).some((o) => o.includes(word)));
    if (!asked.length) die(`"${word}" is declared diacritic-only and is asked by no mcq; the list has gone stale`);
  }
  ok('diacritics', `${DIACRITIC_ONLY.length} accent and cedilla questions asked by mcq, ${allQs.filter((q) => q.format === 'errorSpot').length} errorSpots whose correction survives fold()`);

  /* ── 9. No ear question offers two spellings of one sound ───────────── */

  const clashes = [...homophoneClashes(reviewRounds), ...homophoneClashes(examRounds)];
  if (clashes.length) {
    die(`a listenChoose offers two members of one homophone group, so it has no correct answer:\n    ${clashes.join('\n    ')}`);
  }
  const ear = allQs.filter((q) => q.format === 'listenChoose');
  const noClip = ear.filter((q) => !q.audio?.clip);
  if (noClip.length) {
    die(`${noClip.length} listenChoose question(s) carry no audio.clip, so the card falls back to speaking the correct option`);
  }
  ok('ear questions', `${ear.length} listenChoose, every one with a clip, no homophone clash`);

  /* ── 10. The format mix is A2's ─────────────────────────────────────── */

  const mine = formatMix(allQs);
  const want = measuredShares();
  console.log('\n── Format mix ──');
  for (const f of Object.keys(want)) {
    const n = mine[f] ?? 0;
    console.log(`  ${f.padEnd(13)} ${String(n).padStart(3)}  ${((100 * n) / allQs.length).toFixed(1)}%   band ${want[f].toFixed(1)}%`);
  }
  const drift = mixDrift(allQs);
  if (drift.length) die(`the format mix is out of band:\n    ${drift.join('\n    ')}`);
  const mcqShare = (100 * (mine.mcq ?? 0)) / allQs.length;
  if (mcqShare > 50) die(`${mcqShare.toFixed(1)}% mcq; at most half may be multiple choice`);
  ok('format mix', 'every format within tolerance of the band, mcq under half');

  /* ── 11. Answers do not cluster in one slot ─────────────────────────── */

  const closed = allQs.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
  const slots: number[] = [];
  for (const q of closed) slots[q.correct as number] = (slots[q.correct as number] ?? 0) + 1;
  const worst = Math.max(...slots.map((n) => (100 * n) / closed.length));
  if (worst > 40) die(`${worst.toFixed(1)}% of correct answers sit in one option slot; the cap is 40%`);
  ok('answer spread', `${closed.length} closed questions, heaviest slot ${worst.toFixed(1)}%`);

  /* ── 12. Remediation wiring ─────────────────────────────────────────── */

  if (REVIEW_TRIGGERS.length !== EXPECTED_FAMILIES) die(`${REVIEW_TRIGGERS.length} repair families, expected ${EXPECTED_FAMILIES}`);
  const familyIds = new Set(REVIEW_TRIGGERS.map((t) => t.id));
  const drillIds = new Set((REVIEW_LESSON.drills ?? []).map((d) => d.id));
  for (const t of REVIEW_TRIGGERS) {
    if (!drillIds.has(t.drill!)) die(`family ${t.id} names drill ${t.drill}, which does not exist`);
    if (!drillIds.has(t.retest!)) die(`family ${t.id} names retest ${t.retest}, which does not exist`);
  }
  for (const r of reviewRounds) {
    const ts = r.targets ?? [];
    // ONE target per round, deliberately. `drillForRound` fires the drill of
    // the FIRST resolving target only and then stops, so a second target is
    // dead content. a1.05 shipped two such drills and a1.07 a third.
    if (ts.length !== 1) die(`${r.id} names ${ts.length} targets; exactly one fires and the rest are dead`);
    if (!familyIds.has(ts[0])) die(`${r.id} names target ${ts[0]}, which is not a declared family`);
  }
  const used = new Set(reviewRounds.flatMap((r) => r.targets ?? []));
  const unused = [...familyIds].filter((id) => !used.has(id));
  if (unused.length) die(`these repair families are named by no round, so their drills can never fire: ${unused.join(', ')}`);
  if (EXAM_LESSON.errorTriggers?.length || EXAM_LESSON.drills?.length) die('the exam lesson declares remediation, which exam conditions forbid');
  ok('remediation', `${REVIEW_TRIGGERS.length} families, ${(REVIEW_LESSON.drills ?? []).length} drills, every family named by a round`);

  /* ── 13. The reframe is carried ─────────────────────────────────────── */

  for (const [lesson, line] of [[REVIEW_LESSON, REFRAME], [EXAM_LESSON, REFRAME_EXAM]] as const) {
    const hits = lesson.sections.filter((s) => display(s).some((x) => x.s.includes(line)));
    if (hits.length < 3) die(`${lesson.id}: the reframe appears verbatim in ${hits.length} section(s), needs at least 3`);
  }
  // Widened to `string` on purpose. REFRAME and REFRAME_EXAM are imported
  // `const` literals, so TypeScript narrows them to two non-overlapping literal
  // types and rejects the comparison outright (TS2367) — the guard reads as
  // proven at compile time and never runs. But what it is guarding is the pair
  // of sentences, not their current values: the day somebody edits one constant
  // to match the other, the compile-time proof evaporates and this is the only
  // thing that would catch it. Keep the widening; it is what makes the check a
  // real runtime assertion instead of a comment.
  if ((REFRAME as string) === (REFRAME_EXAM as string)) die('the two lessons share one reframe; they have different designs and need different sentences');
  ok('reframe', 'both carried verbatim in at least three sections');

  /* ── 14. House copy, over a display() walk ──────────────────────────── */

  for (const lesson of BILAN_A2_LESSONS) {
    const surface = learnerText(lesson);
    const all = surface.map((x) => x.s).join('\n');

    for (const bad of BANNED_SUBSTRINGS) {
      const hit = surface.find((x) => x.s.toLowerCase().includes(bad));
      if (hit) die(`${lesson.id} carries "${bad}" at ${hit.path}: ${hit.s.slice(0, 80)}`);
    }
    for (const claim of FORBIDDEN_CLAIMS) {
      const hit = surface.find((x) => x.s.toLowerCase().includes(claim));
      if (hit) die(`${lesson.id} carries the AI-tell phrase "${claim}" at ${hit.path}`);
    }
    for (const j of JARGON) {
      const hit = surface.find((x) => hasWord(x.s, j));
      if (hit) die(`${lesson.id} carries the grammar word "${j}" on a learner surface at ${hit.path}:\n    ${hit.s.slice(0, 120)}`);
    }
    // `intro` and `overview` in their own right, so a later author who trims
    // the walk back fails with the reason rather than silently.
    for (const j of JARGON) {
      if (hasWord(lesson.intro ?? '', j)) die(`${lesson.id}: intro carries "${j}", and intro is drawn on the lesson cover`);
      if (display(lesson.overview ?? {}).some((x) => hasWord(x.s, j))) die(`${lesson.id}: overview carries "${j}", and it is drawn on the overview card`);
    }
    void all;
  }
  // The ratio, not the word (Corrections §14.5), and measured across BOTH
  // lessons rather than each. a2.35 is one unit in two bodies and its register
  // is one register; the exam half is sixty questions and would carry too few
  // of either word for a per-lesson count to mean anything.
  const joint = BILAN_A2_LESSONS.flatMap((l) => learnerText(l)).map((x) => x.s).join('\n');
  const plain = countWord(joint, PLAIN_PHRASE);
  const tech = countWord(joint, TECHNICAL_WORD);
  if (plain <= tech) {
    die(`"${TECHNICAL_WORD}" appears ${tech} times against "${PLAIN_PHRASE}" ${plain}; the house prefers the plain phrase and the plain one must lead`);
  }
  console.log(`  plain phrase "${PLAIN_PHRASE}" ${plain}, technical "${TECHNICAL_WORD}" ${tech}`);
  ok('house copy', 'no em dash, no banned word, no jargon on a drawn surface, plain phrase ahead');

  /* ── 15. Connect and write ──────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    console.log('\n── What is there now ──');

    const itemsBefore = await client.query('select count(*)::int as n from content_items');
    console.log(`  content_items  ${itemsBefore.rows[0].n} rows  ->  this batch writes none`);

    const unitRow = await client.query(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID],
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lessons`);
    const currentUnit = unitRow.rows[0].body as Record<string, unknown> & { lessonIds?: string[] };
    console.log(`  unit ${UNIT_ID}  lessonIds ${JSON.stringify(currentUnit.lessonIds ?? [])}`);

    // Every unit the rounds quote must actually be there, or the capstone
    // reviews a band that has moved under it.
    const trail = await client.query(
      `select body->>'id' as id, (body->>'seq')::int as seq, body->'lessonIds' as lessons
         from content_units where kind = 'curriculum_unit' and body->>'track' = 'a2'
        order by (body->>'seq')::int`,
    );
    for (const u of A2_TRAIL) {
      const row = trail.rows.find((r) => r.id === u.id);
      if (!row) die(`round for ${u.id} quotes a unit that is not in the database`);
      if (row.seq !== u.seq) die(`${u.id} is seq ${row.seq} in the database and seq ${u.seq} in A2_TRAIL; the trail moved`);
      if (!(row.lessons ?? []).length) die(`${u.id} has no lesson, so there is nothing for its round to review`);
    }
    ok('the band it quotes', `${A2_TRAIL.length} units, all present at the seq this build assumes, all with a lesson`);

    const existing = await client.query(
      `select slug, jsonb_array_length(body->'sections') as sections, body->>'version' as version
         from content_units where kind = 'lesson' and slug like $1 order by slug`,
      [`${UNIT_ID}.%`],
    );
    for (const r of existing.rows) console.log(`  lesson ${r.slug}  v${r.version}, ${r.sections} sections  ->  will be REPLACED`);
    if (!existing.rowCount) console.log('  (no a2.35 lesson rows in the database; this is a first build)');

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      return;
    }

    await client.query('begin');

    for (const lesson of BILAN_A2_LESSONS) {
      await client.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
         on conflict (slug) do update set
           title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
        [lesson.id, lesson.title, lesson.level, JSON.stringify(lesson)],
      );
    }

    const nextUnit = { ...currentUnit, lessonIds: [REVIEW_LESSON.id, EXAM_LESSON.id] };

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
    }

    // Read back inside the transaction: an upsert that silently matched nothing
    // would otherwise commit a no-op and report success.
    const check = await client.query(
      `select slug, jsonb_array_length(body->'sections') as sections
         from content_units where kind = 'lesson' and slug like $1 order by slug`,
      [`${UNIT_ID}.%`],
    );
    if (check.rowCount !== 2) {
      await client.query('rollback');
      die(`expected 2 a2.35 lesson rows after the write, found ${check.rowCount}, rolled back`);
    }

    const itemsAfter = await client.query('select count(*)::int as n from content_items');
    if (itemsAfter.rows[0].n !== itemsBefore.rows[0].n) {
      await client.query('rollback');
      die(`content_items moved from ${itemsBefore.rows[0].n} to ${itemsAfter.rows[0].n}; this batch writes no items`);
    }

    await client.query('commit');

    console.log('\n── Written ──');
    for (const r of check.rows) console.log(`  ${r.slug}  ${r.sections} sections`);
    console.log(
      `\n✓ bilan a2 batch applied: ${REVIEW_LESSON.id} and ${EXAM_LESSON.id} created,`
      + `\n  unit ${UNIT_ID} relinked to both. content_items unchanged at ${itemsAfter.rows[0].n}.`
      + `\n  Next: pnpm tsx scripts/merge-bilan-a2-into-seed.ts --dry-run\n`,
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
