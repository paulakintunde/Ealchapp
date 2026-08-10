/* Applies a1.16.l1 "La place de l'adjectif" to Postgres: 9 authored rows, the
 * imported manifest verified field by field, 3 respelling repairs, the lesson,
 * and the unit link and theme rebind.  Validates EVERYTHING before it opens a
 * transaction.
 *
 *     pnpm tsx scripts/author-placement-batch.ts --dry-run
 *     pnpm tsx scripts/author-placement-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed.
 *
 * The guards below are not decoration. Each one is either a rule from
 * A1-BUILD-INVARIANTS.md or a requirement this lesson's brief names explicitly,
 * and every one of them runs the REAL app function rather than a copy: a1.08
 * shipped a hand-rolled endingPopulation carrying a filter the real one does not
 * have, let four rows through and moved two of a1.03's printed cards.
 *
 * ── The concurrency note, which is specific to this batch ─────────────────
 *
 * a1.14 was built, applied and merged WHILE THIS LESSON WAS BEING WRITTEN, into
 * the same theme. Three guards below exist only because of that and would be
 * pointless in any other lesson: the id-collision check against a1.14's reserved
 * fr.sons block, the shared-repair check that tolerates a1.14 having got there
 * first, and the check that a1.14's own lesson is still bound and intact after
 * this batch touches its theme.                                              */
import './env';
import { describeTarget } from './env';
import { Pool } from 'pg';
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
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, dicteeWords } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  ALREADY_MET, AUTHORED, BEHIND_HEADWORDS, BEHIND_IDS, CHANGER_HEADWORDS, CLOSED_SET,
  CLOSED_SET_IDS, DE_IDS, IN_FRONT, NEWLY_ADDED, NOT_REPAIRED, RESPELL, RESPELL_REPAIRS,
  SPLIT_IDS, THE_PAIRS, VOWEL_FORMS, frOf, pairFor, toItem,
} from './data/placement-corpus.ts';
import { IMPORTED, REUSED } from './data/placement-imported.ts';
import { PLACEMENT_LESSON } from './data/placement-lesson.ts';
import {
  AGREEMENT_TEACHING, REFRAME, REFRAME_SECTIONS, VOCAB_TEACHING,
} from './data/placement-terms.ts';

const AUTHORED_ITEMS: Item[] = AUTHORED.map(toItem);
/** The manifest carries every field as stored, so an imported row is written to
 *  the seed unchanged. Postgres already has them: they are NOT re-upserted here,
 *  only verified. Re-writing somebody else's published row to the value you read
 *  from it is a no-op on a good day and an overwrite on a bad one. */
const IMPORTS = [...IMPORTED, ...REUSED];
const LESSON: Lesson = PLACEMENT_LESSON;
const UNIT_ID = 'a1.16';

/** Asserted against explicit constants, never a figure derived from the lesson.
 *  A derived count compares the content to itself and passes on any rewording. */
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_SECTIONS = 25;
const EXPECTED_ACTS = 6;
const EXPECTED_AUTHORED = 9;
const EXPECTED_CLOSED_SET = 10;
const EXPECTED_PAIRS = 4;

const UNIT_TITLE = 'Adjective Placement';
const UNIT_SUB = "La place de l'adjectif";
const UNIT_CANDO = 'Can put the adjective on the right side of the noun, and knows which ones go before';

/** The unit declares NO theme and this batch binds it, which is a real edit to
 *  somebody's unit record and is printed rather than done quietly. */
const UNIT_THEMES = ['adjectifs-essentiels'];

/** a1.14's reserved block. Its corpus allocated these four ids to headwords and
 *  its batch has now applied them. This lesson authors NO fr.sons row, and this
 *  constant exists so that a later edit which starts to cannot do it silently. */
const A114_RESERVED = [
  'fr.sons.adjectifs-essentiels.312', 'fr.sons.adjectifs-essentiels.313',
  'fr.sons.adjectifs-essentiels.314', 'fr.sons.adjectifs-essentiels.315',
];

/** The lesson a1.14 shipped into this theme. This batch must not disturb it, and
 *  it is named rather than counted: a count alone lets a one-for-one swap
 *  through. Invariant §5. */
const MUST_NOT_DISTURB = ['a1.14.l1', 'a1.13.l1'];

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

function drillsOf(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Walks the string, checking neighbours against an accent-aware class. NEVER
 *  builds a regex out of the search term: `\b` is ASCII-only in JavaScript, so
 *  /\ben été\b/ matches nothing. Invariant §0. */
const WORDCH = /[a-zà-öø-ÿœæ'’-]/i;
function hasPhrase(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = h.indexOf(n);
  while (i !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = i + n.length >= h.length ? '' : h[i + n.length];
    if (!WORDCH.test(before) && !WORDCH.test(after)) return true;
    i = h.indexOf(n, i + 1);
  }
  return false;
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  console.log(`  a1.16.l1 "${LESSON.title}"  ${AUTHORED_ITEMS.length} authored, ${IMPORTS.length} imported/reused\n`);

  /* ══ EVERYTHING BELOW RUNS BEFORE A CONNECTION IS OPENED ═══════════════ */

  /* ── Shape, against explicit constants ──────────────────────────────── */

  if (LESSON.sections.length !== EXPECTED_SECTIONS) {
    die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
  }
  if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts`);
  if (AUTHORED.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows`);
  if (CLOSED_SET.length !== EXPECTED_CLOSED_SET) die(`the closed set is ${CLOSED_SET.length} words, expected ${EXPECTED_CLOSED_SET}`);
  if (THE_PAIRS.length !== EXPECTED_PAIRS) die(`expected ${EXPECTED_PAIRS} meaning-changing pairs`);
  if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers`);

  /* ── Schema and density, through the real validators ────────────────── */

  for (const it of AUTHORED_ITEMS) {
    const issues = validateItem(it);
    if (issues.length) die(`item ${it.id} is invalid:\n${formatIssues(issues)}`);
  }
  const lessonIssues = validateLesson(LESSON);
  if (lessonIssues.length) die(`the lesson is invalid:\n${formatIssues(lessonIssues)}`);
  const density = validateDensity(LESSON);
  if (density.length) die(`density:\n${formatDensity(density)}`);

  /* ── The minimal-pair discipline, which is the whole lesson ─────────── */

  for (const p of THE_PAIRS) {
    const [before, after] = pairFor(p);
    const b = before.fr.replace(/[.]/g, '').split(' ').sort().join(' ');
    const a = after.fr.replace(/[.]/g, '').split(' ').sort().join(' ');
    if (b !== a) {
      die(
        `the ${p} pair is not minimal:\n  ${before.fr}\n  ${after.fr}\n`
        + `  Both halves must be the same words in a different order. A pair that changes the noun teaches\n`
        + `  "these two phrases differ", which is true of any two phrases.`
      );
    }
    if (before.en === after.en) die(`the ${p} pair carries the same English gloss on both sides`);
  }

  /* ── The default AND the exception are both taught, on one screen ───── */

  const bothSides = LESSON.sections.find((s) => (s as { id?: string }).id === 's06-bothsides');
  if (!bothSides || bothSides.type !== 'tapTable') die('s06-bothsides is missing or is not a tapTable');
  if ((bothSides.cols ?? []).length !== 2) die('s06-bothsides must have exactly two columns, one per side');
  if ((bothSides.rows ?? []).length < 3) die('s06-bothsides must show at least three nouns with an adjective on each side');

  /* ── The pair screen: two columns, all four pairs, both meanings ────── */

  const pairScreen = LESSON.sections.find((s) => (s as { id?: string }).id === 's09-pairs');
  if (!pairScreen || pairScreen.type !== 'tapTable') die('s09-pairs is missing or is not a tapTable');
  if ((pairScreen.cols ?? []).length !== 2) {
    die('s09-pairs must have exactly two columns. Splitting a meaning-changing pair across screens destroys the teaching.');
  }
  if ((pairScreen.rows ?? []).length !== EXPECTED_PAIRS) {
    die(`s09-pairs must carry all ${EXPECTED_PAIRS} pairs, found ${(pairScreen.rows ?? []).length}`);
  }
  const pairText = strings(pairScreen).join('\n');
  for (const p of THE_PAIRS) {
    const [before, after] = pairFor(p);
    if (!pairText.includes(before.fr)) die(`s09-pairs does not show the front order of ${p}`);
    if (!pairText.includes(after.fr)) die(`s09-pairs does not show the behind order of ${p}`);
    if (!pairText.includes(before.en)) die(`s09-pairs does not show the English for the front order of ${p}`);
    if (!pairText.includes(after.en)) die(`s09-pairs does not show the English for the behind order of ${p}`);
  }

  /* ── Every member of the closed set is named, individually ──────────── */

  const all = strings(LESSON);
  /* What a learner can actually read. NOT the whole lesson object.
   *
   * `grammarIntroduced` and `grammarAssumed` are addressed to the CURRICULUM and
   * invariant §8 says in terms that they "may use the precise words"; the same
   * goes for errorTriggers, which the SRS reads, and the audio briefs, which the
   * studio reads. Building learnerText from the whole object made the jargon
   * guard fire on this lesson's own grammarIntroduced line, which is the guard
   * being wrong rather than the content. */
  const learnerText = [
    ...strings(LESSON.sections),
    ...strings(LESSON.drills ?? []),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
    LESSON.intro ?? '',
    ...strings(LESSON.overview ?? {}),
  ].join('\n');
  for (const a of CLOSED_SET) {
    if (!hasPhrase(learnerText, a)) die(`closed-set member "${a}" is never named on any screen`);
  }
  for (const a of ALREADY_MET) {
    if (!CLOSED_SET.includes(a)) die(`ALREADY_MET names "${a}", which is not in the closed set`);
  }
  if (ALREADY_MET.length + NEWLY_ADDED.length !== CLOSED_SET.length) {
    die('ALREADY_MET and NEWLY_ADDED do not partition the closed set');
  }

  /* ── `des beaux` never reaches a production surface ─────────────────── */

  const productionSurfaces = [
    ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable', 'groupDrill'].includes(s.type))),
    ...strings(LESSON.drills ?? []),
    ...strings(LESSON.sheets ?? []),
    ...strings(AUTHORED_ITEMS),
  ].join('\n').toLowerCase();
  /* The brief: "« des beaux » never appears on a production surface. Assert it
   * directly. It is the error the de rule exists to prevent, and authoring it
   * once teaches it."
   *
   * Banning the string outright is the wrong guard, because there are exactly
   * three places the error MUST appear or the lesson cannot teach against it:
   * the `wrong` half of a commonErrors card, which is printed beside its
   * `right`; a quiz distractor; and a retest distractor. All three are options
   * the learner is meant to reject.
   *
   * So this counts instead, across the WHOLE lesson rather than a chosen subset
   * of surfaces, and every appearance must be one of those three. A blanket ban
   * would have to exempt whole sections; this exempts individual strings, so a
   * second copy inside an exempted section is still caught. */
  const DES_ERRORS = ['des beaux', 'des belles', 'des bons', 'des bonnes', 'des petits', 'des jolies', 'des vieux'];

  const wrongHalves = LESSON.sections
    .filter((s) => s.type === 'commonErrors')
    .flatMap((s) => ((s as { errors?: { wrong?: string }[] }).errors ?? []).map((e) => e.wrong ?? ''));

  /** Every option of every closed question and every retest that is NOT the
   *  authored correct answer. These are the options the learner is meant to
   *  reject, so an error string is doing its job in one. */
  const rejectable: string[] = [];
  const quizForOptions = LESSON.sections.find((s) => s.type === 'quiz');
  if (!quizForOptions || quizForOptions.type !== 'quiz') die('no quiz section');
  for (const r of quizForOptions.rounds ?? []) {
    for (const qq of r.questions ?? []) {
      const opts = (qq as { opts?: string[] }).opts;
      const correct = (qq as { correct?: number }).correct;
      if (Array.isArray(opts)) opts.forEach((o, i) => { if (i !== correct) rejectable.push(o); });
    }
  }
  for (const d of LESSON.drills ?? []) {
    const opts = (d as { opts?: string[] }).opts;
    const correct = (d as { correct?: number }).correct;
    if (Array.isArray(opts)) opts.forEach((o, i) => { if (i !== correct) rejectable.push(o); });
  }
  /* Two kinds of string in the lesson object never reach a learner and must be
   * able to name the error in order to do their job at all:
   *
   *   errorTriggers[].description  is curriculum metadata. It describes the
   *                                mistake so the SRS can name it, and no
   *                                component renders it.
   *   audio.recorded[].desc        is the brief to the studio, and the whole
   *                                point of this one is the instruction NOT to
   *                                record the error. A guard that forbade it
   *                                would delete the sentence that prevents the
   *                                clip.
   *
   * Both are exempted BY STRING rather than by turning off the check, so a copy
   * of the error that appears anywhere else, including elsewhere in the same
   * objects, is still caught. */
  const notLearnerFacing = [
    ...(LESSON.errorTriggers ?? []).map((t) => t.description ?? ''),
    ...(LESSON.audio?.recorded ?? []).map((r) => r.desc ?? ''),
  ];
  const sanctioned = new Set([...wrongHalves, ...rejectable, ...notLearnerFacing]);

  for (const bad of DES_ERRORS) {
    const loose = strings(LESSON).filter((t) => hasPhrase(t, bad) && !sanctioned.has(t));
    if (loose.length) {
      die(
        `« ${bad} » appears ${loose.length} time(s) outside a commonErrors "wrong" line and outside a\n`
        + `  rejectable option:\n    ${loose.map((t) => t.slice(0, 90)).join('\n    ')}\n`
        + `  It is the error the de rule exists to prevent, and authoring it anywhere it is not marked wrong teaches it.`
      );
    }
  }
  // And it must appear at least once where it IS marked wrong, or the lesson
  // never shows the learner the thing it is warning them about.
  if (!DES_ERRORS.some((bad) => wrongHalves.some((w) => hasPhrase(w, bad)))) {
    die('no commonErrors card shows the des form that the de rule exists to prevent');
  }
  // The corpus is a separate matter and has no frame to be inside: a corpus row
  // is a flashcard, a dictée target and a voiceflash prompt, so an error there
  // is a model everywhere. Nothing is exempt.
  for (const bad of DES_ERRORS) {
    if (strings(AUTHORED_ITEMS).some((t) => hasPhrase(t, bad))) die(`« ${bad} » is authored into the corpus`);
  }

  /* ── No clip of an error is ever requested ──────────────────────────── */

  const clipIds = (LESSON.audio?.recorded ?? []).flatMap((r) => r.clipIds ?? []);
  for (const bad of ['des beaux', 'des belles', 'une maison grande', 'un vieux ami', 'une rouge voiture']) {
    if (clipIds.some((c) => hasPhrase(c, bad))) {
      die(`a recording was requested for « ${bad} », which is an error. A clip of an error is indistinguishable from a model once it leaves its card.`);
    }
  }
  // Never record a pre-nominal adjective in isolation: a bare `grand` carries no
  // placement information and the lesson is entirely about position.
  for (const a of CLOSED_SET) {
    if (clipIds.includes(a)) die(`a bare "${a}" was requested as a clip. A pre-nominal adjective alone carries no placement information.`);
  }

  /* ── The neighbours keep their lessons ──────────────────────────────── */

  // Written against PRODUCTION SURFACES rather than every string, and as PHRASES
  // rather than words. a1.13's guard fired on « My bags are green. » when it was
  // written as single words, and this lesson is far more exposed: its screens
  // legitimately contain "before the noun", "goes in front" and the word "bangs".
  const agreementHit = AGREEMENT_TEACHING.filter((w) => productionSurfaces.includes(w));
  if (agreementHit.length) {
    die(
      `agreement teaching found, which belongs to a1.13: ${agreementHit.join(', ')}\n`
      + `  This lesson uses agreement correctly everywhere and explains it nowhere.`
    );
  }
  const vocabHit = VOCAB_TEACHING.filter((w) => productionSurfaces.includes(w));
  if (vocabHit.length) {
    die(
      `vocabulary teaching found, which belongs to a1.14: ${vocabHit.join(', ')}\n`
      + `  The six are sorting material here, not a vocabulary act.`
    );
  }

  /* ── BANGS is exactly where it was decided, and nowhere else ────────── */

  const bangsStrings = all.filter((s) => /\bbangs\b/i.test(s));
  const bangsCard = LESSON.sections.find((s) => (s as { id?: string }).id === 's05-list');
  if (!bangsCard || bangsCard.type !== 'cardDeck') die('s05-list is missing');
  const bangsInCard = strings(bangsCard).filter((s) => /\bbangs\b/i.test(s));
  if (bangsInCard.length !== bangsStrings.length) {
    die(
      `BANGS appears outside s05-list. Decided: ONE card, labelled a memory aid.\n`
      + `  in s05-list: ${bangsInCard.length}, in the lesson: ${bangsStrings.length}`
    );
  }
  if (!bangsInCard.some((s) => /memory aid/i.test(s))) {
    die('the BANGS card does not label itself a memory aid, which is the decision this lesson made about it');
  }
  if (!bangsInCard.some((s) => /misses|leaves out/i.test(s))) {
    die('the BANGS card does not name the words the acronym misses. An acronym without its gaps is a test the learner fails and blames themselves for.');
  }

  /* ── The quiz ───────────────────────────────────────────────────────── */

  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (!quiz || quiz.type !== 'quiz') die('no quiz section');
  if ((quiz.rounds ?? []).length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} rounds`);
  // quizQuestions takes a SECTION, not a lesson. Passing LESSON returns [] and
  // every check below then passes on an empty array, which is an assertion that
  // cannot fail. This was live for one dry run and was caught only because the
  // report prints the count.
  const questions = quizQuestions(quiz);
  const mcq = questions.filter((q) => q.format === 'mcq').length;
  if (mcq * 2 > questions.length) die(`mcq is ${mcq} of ${questions.length}, over the half ceiling`);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id));
  for (const q of questions) {
    if (!q.why) die(`quiz question with no why: ${q.q}`);
    if (!q.ref) die(`quiz question with no ref: ${q.q}`);
    if (!sectionIds.has(q.ref)) die(`quiz ref names a section that does not exist: ${q.ref}`);
  }

  const closed = questions.filter((q) => Array.isArray((q as { opts?: string[] }).opts));
  const slots = new Map<number, number>();
  for (const q of closed) {
    const c = (q as { correct?: number }).correct ?? -1;
    slots.set(c, (slots.get(c) ?? 0) + 1);
  }
  for (const [slot, n] of slots) {
    if (n / closed.length > 0.4) die(`authored slot ${slot} holds ${n}/${closed.length} closed questions, over the 40% cap`);
  }

  // QuizDeckView already shuffles every closed question's options, per question,
  // per attempt. So an option that names a position is broken by the runtime, and
  // a duplicate option makes a question genuinely ambiguous rather than merely
  // redundant. This lesson is unusually exposed: a placement question's options
  // are two orderings of the same words.
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last one', 'both of the above',
    'none of these', 'none of the above', 'all of the above', 'a and c', 'the one above', 'the top one'];
  for (const q of closed) {
    const opts = (q as { opts: string[] }).opts;
    if (new Set(opts).size !== opts.length) die(`duplicate option in: ${q.q}`);
    for (const o of opts) {
      for (const p of POSITIONAL) {
        if (o.toLowerCase().includes(p)) die(`an option refers to a position, which the runtime shuffle breaks: "${o}"`);
      }
    }
  }

  // Every free-text question accepts the answer it displays, through the REAL
  // matchesAccept and its fold().
  for (const q of questions) {
    const answer = (q as { answer?: string }).answer;
    const accept = (q as { accept?: string[] }).accept;
    if (!answer || !accept) continue;
    if (!matchesAccept(answer, accept)) {
      die(`the displayed answer "${answer}" is not accepted by ${JSON.stringify(accept)}`);
    }
  }

  /* ── Each drill is the FIRST resolving target of exactly one round ──── */

  const triggers = LESSON.errorTriggers ?? [];
  const drillIds = new Set((LESSON.drills ?? []).map((d) => d.id));
  const fired = new Map<string, string[]>();
  for (const r of quiz.rounds ?? []) {
    const first = (r.targets ?? []).map((t) => triggers.find((x) => x.id === t)).find((t) => t?.drill);
    if (!first?.drill) die(`round ${r.id} fires no drill: drillForRound stops at the first target that resolves`);
    fired.set(first.drill, [...(fired.get(first.drill) ?? []), r.id]);
  }
  for (const t of triggers) {
    if (t.drill && !drillIds.has(t.drill)) die(`trigger ${t.id} names a drill that does not exist: ${t.drill}`);
    if (t.retest && !drillIds.has(t.retest)) die(`trigger ${t.id} names a retest that does not exist: ${t.retest}`);
    const rounds = fired.get(t.drill ?? '') ?? [];
    if (rounds.length !== 1) {
      die(
        `drill ${t.drill} is the first resolving target of ${rounds.length} rounds, not 1.\n`
        + `  drillForRound fires the FIRST resolving target only, so a drill named in second place is dead content.`
      );
    }
  }

  /* ── The reframe, against an explicit constant ──────────────────────── */

  const reframeSections = LESSON.sections.filter((s) => strings(s).some((t) => t.includes(REFRAME))).length;
  if (reframeSections !== REFRAME_SECTIONS) {
    die(`the reframe appears in ${reframeSections} sections, expected ${REFRAME_SECTIONS}`);
  }

  /* ── House rules ────────────────────────────────────────────────────── */

  const corpusStrings = strings(AUTHORED_ITEMS);
  const everything = [...all, ...corpusStrings];
  if (everything.some((s) => s.includes('—'))) die('em dash on an authored surface');
  const BANNED = ['hon', 'est'].join('');
  if (everything.some((s) => new RegExp(`\\b${BANNED}`, 'i').test(s))) die(`"${BANNED}" on an authored surface`);
  // U+203F renders as a low underscore on a Pixel 6 and is already in shipped
  // sons.10 respellings. Invariant §2: do not introduce a new one.
  if (everything.some((s) => s.includes('‿'))) die('U+203F tie on an authored surface');
  // No grammar jargon on a learner surface. `grammarIntroduced` is addressed to
  // the curriculum and may use the precise words.
  for (const j of ['épithète', 'attribut', 'antéposé', 'attributive', 'post-nominal', 'pre-nominal', 'prenominal']) {
    if (learnerText.toLowerCase().includes(j)) die(`grammar jargon on a learner surface: "${j}"`);
  }

  /* ── Respellings, through the real checker ──────────────────────────── */

  const exempt = new Set(NOT_REPAIRED.map((n) => n.fr));
  for (const [fr, d] of Object.entries(RESPELL)) {
    const res = d.respell.replace(/^\[|\]$/g, '');
    if (hasPlainNasalFor(fr, res) && !exempt.has(fr)) die(`the lesson would display a flagged respelling: ${fr} ${res}`);
  }
  for (const r of RESPELL_REPAIRS) {
    if (!hasPlainNasalFor(r.fr, r.was)) die(`${r.fr}: the value being repaired is not flagged, so the repair is unjustified`);
    if (hasPlainNasalFor(r.fr, r.now)) die(`${r.fr}: the repaired value is still flagged`);
  }
  for (const n of NOT_REPAIRED) {
    if (!hasPlainNasalFor(n.fr, n.stored)) {
      die(`${n.fr} is recorded as a checker false positive but the checker no longer flags it. Re-check before shipping the exemption.`);
    }
  }

  /* ── a1.03's ending population must not move ────────────────────────── */

  const popBefore = endingPopulation([]);
  const popAfter = endingPopulation(AUTHORED_ITEMS);
  if (popAfter.length !== popBefore.length) {
    die(
      `authored rows joined a1.03's measured ending population (${popAfter.length - popBefore.length} of them).\n`
      + `  a1-03-genre.test.ts re-measures twenty printed figures on every run, and a1.11 broke its -e statistic exactly this way.`
    );
  }

  /* ── The dictée stays in LETTERS mode ───────────────────────────────── */

  const dictation = LESSON.sections.find((s) => (s as { id?: string }).id === 's19-dictation');
  if (!dictation || dictation.type !== 'dictation') die('s19-dictation is missing or is not a dictation');
  const byId = new Map(AUTHORED_ITEMS.map((i) => [i.id, i] as const));
  for (const id of dictation.itemIds ?? []) {
    const it = byId.get(id);
    if (!it) die(`the dictée names ${id}, which this lesson does not author`);
    // WORDS, not letters, and the direction of this check is the point.
    //
    // Word mode hands the learner a bank of the sentence's OWN words plus two
    // decoys and asks them to assemble it, so the only thing they can get wrong
    // is the ORDER. Letters mode has them type the sentence out, which tests
    // spelling and is what almost every other lesson's dictée wants.
    //
    // A first draft of this guard asserted the opposite, on a wrong reading of
    // what the two modes do. It was caught by running it.
    const mode = dicteeMode(it.fr);
    if (mode !== 'words') {
      die(
        `the dictée target ${id} ("${it.fr}") is in ${mode} mode.\n`
        + `  Letters mode asks the learner to spell the sentence. This lesson teaches word ORDER, and word mode\n`
        + `  is the mode that tests it: a bank of the sentence's own words, plus decoys, to be assembled.\n`
        + `  See DICTEE_PAIRS in placement-corpus.ts for which pair this excludes and why.`
      );
    }
    // And the bank has to be worth assembling: two tiles is a coin toss.
    const tiles = dicteeWords(it.fr).length;
    if (tiles < 4) die(`the dictée target ${id} offers only ${tiles} tiles, which is not an exercise`);
  }

  /* ── No id collides with a1.14's reserved block ─────────────────────── */

  for (const id of AUTHORED_ITEMS.map((i) => i.id)) {
    if (A114_RESERVED.includes(id)) die(`${id} is reserved by a1.14's build`);
    if (id.startsWith('fr.sons.')) die(`${id}: this lesson authors no fr.sons row, by design. See placement-corpus.ts.`);
  }

  console.log('  pre-flight validation: all guards pass, opening a connection\n');

  /* ══ FROM HERE ON THE DATABASE IS READ, AND ONLY THEN WRITTEN ═════════ */

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  try {
    /* ── The imported manifest must not have drifted ──────────────────── */

    const importIds = IMPORTS.map((i) => i.id);
    const rows = await client.query<{
      id: string; fr: string; en: string; respell: string | null; theme: string;
      drills: string[]; status: string;
    }>(
      `select id, fr, coalesce(en,'') as en, respell, theme, drills::text[] as drills, status::text as status
         from content_items where id = any($1)`,
      [importIds]
    );
    const byDbId = new Map(rows.rows.map((r) => [r.id, r] as const));
    const drift: string[] = [];
    for (const it of IMPORTS) {
      const row = byDbId.get(it.id);
      if (!row) { drift.push(`${it.id} is not in this database`); continue; }
      if (row.status !== 'published') drift.push(`${it.id} is ${row.status}, not published`);
      if (row.fr !== it.fr) drift.push(`${it.id}: fr differs ("${it.fr}" vs "${row.fr}")`);
      if (row.en !== it.en) drift.push(`${it.id}: en differs`);
      if (row.theme !== it.theme) drift.push(`${it.id}: theme differs ("${it.theme}" vs "${row.theme}")`);
      const rowDrills = drillsOf(row.drills);
      if ([...rowDrills].sort().join() !== [...it.drills].sort().join()) {
        drift.push(`${it.id}: drills differ`);
      }
      const repairing = RESPELL_REPAIRS.some((r) => r.id === it.id);
      if (!repairing && (row.respell ?? undefined) !== (it.respell ?? undefined)) {
        drift.push(`${it.id}: respell differs ("${String(it.respell)}" vs "${String(row.respell)}")`);
      }
    }
    if (drift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${drift.join('\n  ')}\n`
        + `  Re-run: pnpm tsx scripts/_placement_manifest.ts > scripts/data/placement-imported.ts`
      );
    }

    /* ── The authored ids must actually be free ───────────────────────── */

    const taken = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where id = any($1)`,
      [AUTHORED_ITEMS.map((i) => i.id)]
    );
    const collisions = taken.rows.filter((r) => !AUTHORED.some((a) => a.id === r.id && a.fr === r.fr));
    if (collisions.length) {
      die(
        `id(s) already hold different content:\n  ${collisions.map((c) => `${c.id}  "${c.fr}"`).join('\n  ')}\n`
        + `  Somebody has taken this range since the probe. Re-run the probe for NEXT FREE before renumbering.`
      );
    }

    /* ── No two rows in this theme may share an `fr` ──────────────────── */

    // flashhub-coverage.test.ts treats two rows sharing an fr in one theme as one
    // card served twice, which is the failure three briefs in a row would have
    // caused. Checked against the LIVE theme, which now contains a1.14's rows.
    const themeRows = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES[0]]
    );
    const seen = new Map<string, string>();
    for (const r of themeRows.rows) seen.set(r.fr, r.id);
    const dupes: string[] = [];
    for (const a of AUTHORED) {
      const other = seen.get(a.fr);
      if (other && other !== a.id) dupes.push(`"${a.fr}" is already ${other}`);
    }
    if (dupes.length) die(`authored row(s) duplicate an fr already in this theme:\n  ${dupes.join('\n  ')}`);

    /* ── The respelling repairs, tolerating a1.14 having got there first ─ */

    const repairRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`,
      [RESPELL_REPAIRS.map((r) => r.id)]
    );
    const repairDrift: string[] = [];
    for (const r of RESPELL_REPAIRS) {
      const row = repairRows.rows.find((x) => x.id === r.id);
      if (!row) { repairDrift.push(`${r.id} is not in this database`); continue; }
      if (row.fr !== r.fr) repairDrift.push(`${r.id}: expected "${r.fr}", database says "${row.fr}"`);
      // The stored value must be either the broken one this build measured or the
      // corrected one a1.14 may already have written. Anything else is somebody
      // making a third decision, and two people disagreeing about a transcription
      // is a decision rather than a merge.
      if (row.respell !== r.was && row.respell !== r.now) {
        repairDrift.push(`${r.id}: expected "${r.was}" or "${r.now}", database says "${row.respell}"`);
      }
    }
    if (repairDrift.length) {
      die(`the respelling repairs have drifted:\n  ${repairDrift.join('\n  ')}\n  Somebody has changed these rows. Look before overwriting.`);
    }
    const alreadyRepaired = RESPELL_REPAIRS.filter((r) =>
      repairRows.rows.find((x) => x.id === r.id)?.respell === r.now);

    /* ── The unit ─────────────────────────────────────────────────────── */

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    if (unitBody.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${unitBody.sub}"`);
    if (unitBody.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);

    const expectedTag = `A1 · LEÇON ${unitBody.seq}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    // The prereq. It pointed at an empty unit when this lesson's brief was
    // written and a1.14 has since shipped, so it is now valid and stays.
    const prereq = (unitBody as Unit & { prereqUnitIds?: string[] }).prereqUnitIds ?? [];
    const prereqLessons = await client.query<{ n: string }>(
      `select count(*)::text n from content_units where kind = 'lesson' and body->>'unitId' = any($1) and status = 'published'`,
      [prereq]
    );
    const nPrereq = Number(prereqLessons.rows[0]?.n ?? 0);

    const themeCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES[0]]
    );
    const nTheme = Number(themeCount.rows[0]?.n ?? 0);
    if (nTheme < 500) die(`theme "${UNIT_THEMES[0]}" holds only ${nTheme} published rows, which is not the theme this batch measured`);

    /* ── The neighbours' lessons must still be there afterwards ───────── */

    const neighbours = await client.query<{ id: string }>(
      `select body->>'id' as id from content_units where kind = 'lesson' and body->>'id' = any($1) and status = 'published'`,
      [MUST_NOT_DISTURB]
    );
    const missing = MUST_NOT_DISTURB.filter((id) => !neighbours.rows.some((r) => r.id === id));
    if (missing.length) {
      die(`lesson(s) this batch must not disturb are already absent: ${missing.join(', ')}. Look before writing.`);
    }

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and body->>'id' = $1`,
      [LESSON.id]
    );
    const prevVersion = existingLesson.rows[0]?.version;

    const nextUnit: Unit = {
      ...unitBody,
      themes: UNIT_THEMES,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit);
    if (unitIssues.length) die(`the unit is invalid after the edit:\n${formatIssues(unitIssues)}`);

    /* ── The report, which is printed whether or not anything is written ─ */

    console.log(`  items:      ${AUTHORED_ITEMS.length} authored (written), ${IMPORTS.length} imported/reused (verified, NOT rewritten)`);
    console.log(`  sections:   ${LESSON.sections.length} in ${(LESSON.acts ?? []).length} acts`);
    console.log(`  quiz:       ${questions.length} questions in ${(quiz.rounds ?? []).length} rounds, ${mcq} mcq (${Math.round((mcq / questions.length) * 100)}%), every one with a why and a ref`);
    console.log(`  drills:     ${(LESSON.drills ?? []).length}, each the first resolving target of exactly one round`);
    console.log(`  reframe:    "${REFRAME}" in ${reframeSections} sections`);
    console.log(`  closed set: ${CLOSED_SET.length} words (${ALREADY_MET.length} already met in a1.14, ${NEWLY_ADDED.length} new here)`);
    console.log(`  pairs:      ${THE_PAIRS.map((p) => p).join(', ')} (cher and dernier cut, see placement-corpus.ts)`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      const shared = r.alsoClaimedByA114 ? '  [also claimed by a1.14, identical target value]' : '  [this lesson alone]';
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.now}"${shared}`);
    }
    if (alreadyRepaired.length) {
      console.log(`    ${alreadyRepaired.length} of ${RESPELL_REPAIRS.length} already carry the corrected value (a1.14 got there first); re-writing is a no-op.`);
    }
    console.log(`    NOT repaired, and correct as stored: ${NOT_REPAIRED.map((n) => `${n.fr} ${n.stored}`).join(', ')}`);
    console.log(`      hasPlainNasalFor flags both and is wrong about both. Invariant §3's second blind spot.`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify((unitBody as Unit & { themes?: string[] }).themes ?? null)} → ${JSON.stringify(UNIT_THEMES)}`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(prereq)} (UNCHANGED, and now VALID: ${nPrereq} published lesson(s) behind it)`);
    console.log(`    "${UNIT_THEMES[0]}" holds ${nTheme} published rows and is NOT in SEED_CUT.themes,`);
    console.log(`    so these rows do not reach the seed by theme. merge-placement-into-seed.ts carries them BY ID.`);
    if (prevVersion !== undefined) console.log(`    lesson ${LESSON.id}: replacing v${prevVersion} with v${LESSON.version}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      return;
    }

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
          it.tags, it.drills, it.version, it.cardType ?? null, (it as { prompt?: string }).prompt ?? null,
        ]
      );
    }

    for (const r of RESPELL_REPAIRS) {
      const res = await client.query(
        `update content_items set respell = $1 where id = $2 and fr = $3`,
        [r.now, r.id, r.fr]
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
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
    }

    // The neighbours, re-checked INSIDE the transaction, so a batch that somehow
    // disturbed one rolls back rather than reports.
    const after = await client.query<{ id: string }>(
      `select body->>'id' as id from content_units where kind = 'lesson' and body->>'id' = any($1) and status = 'published'`,
      [MUST_NOT_DISTURB]
    );
    const lost = MUST_NOT_DISTURB.filter((id) => !after.rows.some((r) => r.id === id));
    if (lost.length) {
      await client.query('rollback');
      die(`this batch would have removed ${lost.join(', ')}, rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ placement batch applied: ${AUTHORED_ITEMS.length} authored items`
      + ` + ${RESPELL_REPAIRS.length} respelling repairs + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} bound to "${UNIT_THEMES[0]}" and linked to its lesson.`
      + `\n  ${MUST_NOT_DISTURB.join(', ')} verified intact inside the transaction.`
      + `\n  Next: pnpm tsx scripts/merge-placement-into-seed.ts --dry-run`
      + `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database and`
      + `\n  pnpm content:parity exits 1 on pre-existing divergences that are not this lesson's.\n`
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
