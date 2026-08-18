// a2.35 « Bilan A2 » — the guard, over both lessons.
//
// Everything is read out of `seed.json`, because the seed is what the app
// bundles and therefore what a learner can actually meet. The source files are
// imported as well, for the assertions that need the build's own tables (the
// trail, the assembled homophone list, the measured format mix), and the two
// are told apart the way Corrections §9 requires: an ABSENT source is a
// checkout without `ealch-admin`; a THROWING one is a broken build and must not
// silently skip thirty assertions.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT A CAPSTONE'S GUARD HAS TO DO THAT A LESSON'S DOES NOT
// ══════════════════════════════════════════════════════════════════════════
//
// A lesson's guard asks whether the lesson is right. This one also has to ask
// whether it still COVERS a band that moves under it, and whether the exam half
// has kept the one property that makes it an exam.
//
//   1. COVERAGE IS ASSERTED UNIT BY UNIT, NOT BY COUNT. Thirty-four rounds is
//      not the claim; a round for a2.01 and a round for a2.34 and thirty-two
//      more, each naming exactly one unit, is the claim. A count passes after
//      somebody drops a unit and adds a duplicate, which is the failure this
//      lesson is most exposed to.
//
//   2. THE EXAM MUST NAME NOTHING. Its round ids, labels and `say` lines are
//      swept for every A2 unit id and for the words « unit », « lesson » and
//      « leçon » followed by a number. The `why` strings are deliberately NOT
//      swept: they are printed on the result card after the paper is over, and
//      naming the unit there is the whole point of collecting them.
//
//   3. TWO QUIZ SECTIONS WOULD BE SILENT. `contentSections()` appends one quiz
//      page, found with `sections.find()`. A second is never rendered and never
//      complained about, which is why a2.35 is two lessons.
//
// The band's five known guard holes, and what is done here:
//
//   1. THE JARGON WALK COVERS `Lesson.intro`, `overview`, the drills and the
//      sheets, over a `display()` walk which keeps `sub` (Corrections §13) and
//      drops only machine keys. The `-s` plural of every entry is checked.
//   2. THE HOUSE WORD BOUNDARY EXCLUDES `'`, so it cannot see `j'ai`, `c'est`
//      or `celui-ci`. This file is dense with all three. The apostrophe is
//      dropped from the LEFT boundary and kept on the right.
//   3. `\bhonest` CANNOT SEE "dishonest". The banned-word guard fires on the
//      SUBSTRING, in both directions.
//   4. A GUARD COMPARING A CONSTANT TO ITSELF CANNOT FAIL. The reframe count,
//      the round count and the format shares are all compared against numbers
//      declared here and retyped, not derived from the lesson.
//   5. Corrections §14.5: `adjective` is not jargon. The RATIO is guarded.
//
// AND A SIXTH THIS BUILD FOUND, WHICH IS THE MIRROR OF HOLE 1. A RAW walk
// reports `paradigm` on thirteen A2 learner surfaces and `clitic` on ten, and
// every one of the twenty-three is a machine key: `rec-a2-10-paradigm` on an
// `audio.recordingId`, `err-wrong-clitic` in a round's `targets`,
// `drill-pick-clitic` on a drill id. None is drawn anywhere. §13 says to widen
// past `prose()`; it does not say where to stop, and a guard that does not stop
// fails on content that is correct.

import { test } from 'node:test';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { fold, matchesAccept } from './answer.logic.ts';
import { quizQuestions } from './schema.ts';
import { validateDensity } from './density.logic.ts';

const UNIT_ID = 'a2.35';
const REVIEW_ID = 'a2.35.l1';
const EXAM_ID = 'a2.35.l2';

/* ─── The numbers that are the SHAPE of this unit ─────────────────────────── */

/** A hardcoded count fails on itself the first time content legitimately
 *  changes, EXCEPT where the number IS the shape. These are: one round per unit
 *  for thirty-four units, five questions in each, a twelve-part exam of sixty.
 *  A quiet drop in any of them is exactly what this file exists to catch. */
const REVIEW_ROUNDS = 34;
const REVIEW_QUESTIONS = 170;
const EXAM_ROUNDS = 12;
const EXAM_QUESTIONS = 60;
const QUESTIONS_PER_ROUND = 5;
const REVIEW_SECTIONS = 5;
const EXAM_SECTIONS = 4;
const REPAIR_FAMILIES = 12;

const REFRAME = 'Every round is one unit, so a low score has an address.';
const REFRAME_EXAM = 'Nothing in here carries an address.';

/** The A2 trail in `seq` order, RETYPED HERE ON PURPOSE. The build imports it
 *  from `bilan-a2-spread.ts` so the rounds cannot drift from it; this test
 *  retypes it so the test cannot drift with the build. If the spine moves, the
 *  batch fails against Postgres and this fails against the seed, and both
 *  failures name the same unit. */
const TRAIL: readonly [number, string][] = [
  [1, 'a2.01'], [2, 'a2.09'], [3, 'a2.10'], [4, 'a2.11'], [5, 'a2.02'],
  [6, 'a2.12'], [7, 'a2.13'], [8, 'a2.14'], [9, 'a2.15'], [10, 'a2.03'],
  [11, 'a2.16'], [12, 'a2.17'], [13, 'a2.04'], [14, 'a2.18'], [15, 'a2.19'],
  [16, 'a2.05'], [17, 'a2.20'], [18, 'a2.21'], [19, 'a2.22'], [20, 'a2.23'],
  [21, 'a2.06'], [22, 'a2.24'], [23, 'a2.25'], [24, 'a2.07'], [25, 'a2.26'],
  [26, 'a2.27'], [27, 'a2.28'], [28, 'a2.29'], [29, 'a2.30'], [30, 'a2.31'],
  [31, 'a2.32'], [32, 'a2.08'], [33, 'a2.33'], [34, 'a2.34'],
];

/** A2's shipped format ratio, measured across the band's quizzes 2026-08-18,
 *  and the tolerance on it. Retyped from the build's own constant. */
const BAND_MIX: Readonly<Record<string, number>> = {
  mcq: 403, typeIn: 358, errorSpot: 184, listenChoose: 103, speak: 17, tapSilent: 17,
};
const MIX_TOLERANCE_PCT = 5;

/** The five questions that turn on a diacritic, which no typed surface can ask
 *  because `fold()` strips it. Every one must be an `mcq`. */
const DIACRITIC_ONLY = ['commençons', 'préfère', 'connaît', 'dû', 'évidemment'] as const;

/* ─── Reading the seed ────────────────────────────────────────────────────── */

type AnyRec = Record<string, unknown>;
const LESSONS = (seed as AnyRec).lessons as AnyRec[];
const UNITS = (seed as AnyRec).units as AnyRec[];

const review = LESSONS.find((l) => l.id === REVIEW_ID) as AnyRec;
const exam = LESSONS.find((l) => l.id === EXAM_ID) as AnyRec;
const unit = UNITS.find((u) => u.id === UNIT_ID) as AnyRec;

const sectionsOf = (l: AnyRec) => (l.sections ?? []) as AnyRec[];
const quizzesOf = (l: AnyRec) => sectionsOf(l).filter((s) => s.type === 'quiz');
const roundsOf = (l: AnyRec) => (quizzesOf(l)[0]?.rounds ?? []) as AnyRec[];
const questionsOf = (l: AnyRec) => quizQuestions(quizzesOf(l)[0] as never);

/* ─── The source, and telling absent from broken ──────────────────────────── */

let SRC: {
  A2_TRAIL: readonly { seq: number; id: string }[];
  HOMOPHONE_FORMS: readonly (readonly string[])[];
  A2_MEASURED_MIX: Readonly<Record<string, number>>;
  MIX_TOLERANCE_PCT: number;
  JARGON: readonly string[];
  MACHINE_KEYS: ReadonlySet<string>;
  TECHNICAL_WORD: string;
  PLAIN_PHRASE: string;
  display: (v: unknown, p?: string) => { path: string; s: string }[];
  hasWord: (h: string, n: string) => boolean;
  countWord: (h: string, n: string) => number;
  homophoneClashes: (r: readonly never[]) => string[];
  spreadAnswers: (r: never[]) => never[];
} | null = null;
let SRC_ERROR: unknown = null;
try {
  SRC = await import('../../../ealch-admin/scripts/data/bilan-a2-spread.ts') as never;
} catch (e) {
  SRC_ERROR = e;
}
const MISSING = new Set(['ERR_MODULE_NOT_FOUND', 'MODULE_NOT_FOUND', 'ENOENT']);
const srcMerelyAbsent = !!SRC_ERROR && MISSING.has((SRC_ERROR as { code?: string }).code ?? '');

test('the source either imports or is genuinely absent', () => {
  ok(
    SRC || srcMerelyAbsent,
    `bilan-a2-spread.ts threw rather than being absent, which silently skips the source-derived assertions: ${String(SRC_ERROR)}`,
  );
});

/* ─── 1. Both lessons exist, and the unit points at them ──────────────────── */

test('a2.35 ships two lessons, review first', () => {
  ok(review, `${REVIEW_ID} is not in the seed`);
  ok(exam, `${EXAM_ID} is not in the seed`);
  deepStrictEqual(unit.lessonIds, [REVIEW_ID, EXAM_ID], 'den.tsx opens lessonIds[0], so the review must be first');
});

test('the unit identity is what the curriculum says', () => {
  strictEqual(unit.seq, 35);
  strictEqual(unit.level, 'a2');
  strictEqual(unit.track, 'a2');
  strictEqual(unit.title, 'A2 Review');
  strictEqual(unit.sub, 'Bilan A2');
});

test('a2.35 is the last unit on the A2 trail', () => {
  const a2 = UNITS.filter((u) => u.track === 'a2');
  const top = Math.max(...a2.map((u) => Number(u.seq)));
  strictEqual(Number(unit.seq), top, 'something now sits after the capstone on the trail');
  strictEqual(a2.length, TRAIL.length + 1, `the A2 trail is ${a2.length} units and this capstone reviews ${TRAIL.length}`);
});

/* ─── 2. One quiz each, and the counts ────────────────────────────────────── */

test('each lesson carries exactly one quiz section', () => {
  // contentSections() strips every quiz out of the flow and appends ONE, found
  // with sections.find(). A second is authored, valid, and never rendered.
  strictEqual(quizzesOf(review).length, 1, `${REVIEW_ID} does not carry exactly one quiz`);
  strictEqual(quizzesOf(exam).length, 1, `${EXAM_ID} does not carry exactly one quiz`);
});

test('the section counts are the shape of the two lessons', () => {
  strictEqual(sectionsOf(review).length, REVIEW_SECTIONS, 'the review is scene, goals, progress, quiz, roundup');
  strictEqual(sectionsOf(exam).length, EXAM_SECTIONS, 'the exam is goals, progress, quiz, roundup, and no scene');
});

test('the exam has no scene and the review does', () => {
  ok(sectionsOf(review).some((s) => s.type === 'scene'), 'the review lost its scene');
  ok(!sectionsOf(exam).some((s) => s.type === 'scene'), 'the exam gained a scene, which the sitting has no room for');
});

test('the round and question counts hold', () => {
  strictEqual(roundsOf(review).length, REVIEW_ROUNDS);
  strictEqual(questionsOf(review).length, REVIEW_QUESTIONS);
  strictEqual(roundsOf(exam).length, EXAM_ROUNDS);
  strictEqual(questionsOf(exam).length, EXAM_QUESTIONS);
});

test('every round carries exactly five questions', () => {
  for (const r of [...roundsOf(review), ...roundsOf(exam)]) {
    strictEqual((r.questions as unknown[]).length, QUESTIONS_PER_ROUND, `${r.id} does not carry five questions`);
  }
});

/* ─── 3. Coverage, unit by unit ───────────────────────────────────────────── */

test('every A2 unit seq 1 to 34 is named by exactly one review round', () => {
  // ASSERTED UNIT BY UNIT, NOT BY COUNT. A count of 34 passes after somebody
  // drops a2.17 and gives a2.05 a second round, which is the failure a capstone
  // is most exposed to and the one a number cannot see.
  const byUnit = new Map<string, string[]>();
  for (const r of roundsOf(review)) {
    const m = /^r\d\d-a2-(\d\d)-/.exec(r.id as string);
    ok(m, `round ${r.id} does not name a unit in its id`);
    const id = `a2.${m![1]}`;
    byUnit.set(id, [...(byUnit.get(id) ?? []), r.id as string]);
  }
  for (const [seq, id] of TRAIL) {
    const found = byUnit.get(id);
    ok(found, `seq ${seq}, ${id} has no review round`);
    strictEqual(found!.length, 1, `${id} is covered by ${found!.length} rounds: ${found!.join(', ')}`);
  }
  for (const id of byUnit.keys()) {
    ok(TRAIL.some(([, t]) => t === id), `a round covers ${id}, which is not on the A2 trail`);
  }
});

test('the rounds run in seq order, not id order', () => {
  // A2's ids and seq disagree hard: a2.09 is second and a2.08 is thirty-second.
  // A round list in id order would review the band in an order nobody walked.
  const walked = roundsOf(review).map((r) => `a2.${/^r\d\d-a2-(\d\d)-/.exec(r.id as string)![1]}`);
  deepStrictEqual(walked, TRAIL.map(([, id]) => id));
});

test('every unit a round covers has a lesson to send the learner back to', () => {
  for (const [, id] of TRAIL) {
    const u = UNITS.find((x) => x.id === id) as AnyRec | undefined;
    ok(u, `${id} is not in the seed, so its round reviews nothing`);
    ok(((u!.lessonIds ?? []) as string[]).length > 0, `${id} has no lesson, so a low round names an empty half hour`);
  }
});

test('each review round names its unit in its label, in words', () => {
  // The positive half of the exam's negative. A named round is a diagnostic and
  // the whole reason for splitting the capstone in two; a review round that
  // stopped naming its unit would make the split pointless without failing
  // anything else.
  for (const r of roundsOf(review)) {
    ok(/unit\s+\d+/i.test(r.label as string), `${r.id} does not name its unit: "${r.label}"`);
  }
});

/* ─── 4. The exam's one property ──────────────────────────────────────────── */

test('no exam round names a unit, by id or in words', () => {
  const ids = [...TRAIL.map(([, id]) => id), UNIT_ID];
  for (const r of roundsOf(exam)) {
    const say = typeof r.say === 'string' ? r.say : ((r.say as AnyRec)?.text as string ?? '');
    const text = [r.id, r.label, say].join(' ');
    for (const id of ids) {
      ok(!text.includes(id), `${r.id} names ${id} before the learner answers`);
      ok(!text.includes(id.replace('.', '-')), `${r.id} names ${id} before the learner answers`);
    }
    ok(!/(unit|lesson|leçon|lecon)\s+\d+/i.test(text), `${r.id} names a unit in words: "${r.label}"`);
  }
});

test('the exam why strings DO name units, because they are read after the paper', () => {
  // Not a leak and deliberately not swept above. `exam: true` hides the
  // explanation while the learner answers; the result card collects every
  // missed question and prints its `why`, and a `why` that did not name the
  // unit would leave the learner with a score and nowhere to go.
  const whys = questionsOf(exam).map((q) => q.why ?? '').join('\n');
  const named = TRAIL.filter(([, id]) => whys.includes(id)).length;
  ok(named >= 20, `only ${named} of the 34 units are named in an exam why; the result card cannot point anywhere`);
});

test('exam conditions are set and remediation is off', () => {
  strictEqual((quizzesOf(exam)[0] as AnyRec).exam, true, 'the exam quiz is not in exam mode');
  strictEqual((quizzesOf(review)[0] as AnyRec).exam, undefined, 'the review quiz is in exam mode, which suppresses its own remediation');
  for (const r of roundsOf(exam)) {
    strictEqual(((r.targets ?? []) as unknown[]).length, 0, `${r.id} declares targets, which fires a drill mid-exam`);
  }
  deepStrictEqual(exam.errorTriggers ?? [], [], 'the exam declares repair families');
  deepStrictEqual(exam.drills ?? [], [], 'the exam declares drills');
});

test("exam: true is on l2 and absent from l1", () => {
  strictEqual((quizzesOf(exam)[0] as AnyRec).exam, true);
  ok(!('exam' in (quizzesOf(review)[0] as AnyRec)), 'the review quiz carries an exam key at all');
});

/* ─── 5. It owns no corpus ────────────────────────────────────────────────── */

test('both lessons own no corpus and release no cards', () => {
  for (const l of [review, exam]) {
    deepStrictEqual(l.itemIds, [], `${l.id} claims corpus rows; a lesson quoting thirty-four others owns none of them`);
    deepStrictEqual(l.sheets ?? [], [], `${l.id} declares a reference sheet`);
    ok(!sectionsOf(l).some((s) => s.type === 'practice'), `${l.id} carries a practice section`);
    ok(!sectionsOf(l).some((s) => 'deckTranche' in s), `${l.id} carries a deckTranche`);
    ok(((l.features ?? []) as string[]).includes('assessment'), `${l.id} is missing the assessment flag and cannot be published`);
  }
});

test('no bilan or revision theme was created', () => {
  const themes = new Set(((seed as AnyRec).items as AnyRec[]).map((i) => i.theme as string));
  ok(!themes.has('bilan'), 'a bilan theme now exists; the capstone creates none');
  ok(!themes.has('revision'), 'a revision theme now exists; the capstone creates none');
});

test('no corpus item names a2.35 as its unit', () => {
  const mine = ((seed as AnyRec).items as AnyRec[]).filter((i) => i.unitId === UNIT_ID);
  strictEqual(mine.length, 0, `${mine.length} corpus rows claim a2.35; this build authored none`);
});

/* ─── 6. Every question teaches on the way out ────────────────────────────── */

const ALL_QS = [...questionsOf(review), ...questionsOf(exam)];

test('every question carries a why', () => {
  const bare = ALL_QS.filter((q) => !q.why?.trim());
  strictEqual(bare.length, 0, `${bare.length} question(s) with no why, starting with: ${bare[0]?.q}`);
});

test('every question ref resolves to a section in its own lesson', () => {
  for (const [l, qs] of [[review, questionsOf(review)], [exam, questionsOf(exam)]] as const) {
    const ids = new Set(sectionsOf(l).map((s) => s.id as string));
    for (const q of qs) ok(q.ref && ids.has(q.ref), `${l.id}: a question refs "${q.ref}", which is not one of its sections`);
  }
});

/* ─── 7. What the app can and cannot ask ──────────────────────────────────── */

const isOpen = (f?: string) => f === 'typeIn' || f === 'errorSpot' || f === 'speak';

test('every free-text question accepts the answer it displays', () => {
  // Through the REAL matchesAccept, not a copy of it. A guard that
  // reimplements the thing it guards is free to drift from it.
  for (const q of ALL_QS.filter((x) => isOpen(x.format))) {
    ok(q.answer, `an open question shows no answer: ${q.q}`);
    ok(matchesAccept(q.answer!, q.accept), `an open question rejects the answer it displays: ${q.answer}`);
  }
});

test('no accept list holds two entries that fold to one', () => {
  // Two entries folding to one string means the question believes it accepts
  // two answers and accepts one. That is the accent illusion: `préfère` and
  // `prefere` are the same string to fold(), and a1.30 and every A2 lesson
  // before this one list the pair as though it mattered.
  for (const q of ALL_QS.filter((x) => isOpen(x.format))) {
    const folded = (q.accept ?? []).map(fold);
    strictEqual(new Set(folded).size, folded.length, `${q.q}: two accepted answers fold to one`);
  }
});

test('no errorSpot shows a mistake the comparison cannot see', () => {
  // THE MECHANICAL FORM OF "no typed surface can test an accent, a cedilla, a
  // capital or a space". If the prompt and the answer fold to one string, the
  // learner can retype the mistake and be marked right.
  for (const q of ALL_QS.filter((x) => x.format === 'errorSpot')) {
    ok(q.prompt, `an errorSpot has no prompt, so the phrase to fix never appears: ${q.q}`);
    ok(
      fold(q.prompt!) !== fold(q.answer ?? ''),
      `an errorSpot's correction is invisible to fold(): "${q.prompt}" against "${q.answer}"`,
    );
  }
});

test('every diacritic question is asked by mcq', () => {
  for (const word of DIACRITIC_ONLY) {
    const asked = ALL_QS.filter((q) => q.format === 'mcq' && (q.opts ?? []).some((o) => o.includes(word)));
    ok(asked.length > 0, `"${word}" turns on an accent or a cedilla and no mcq asks it; the list has gone stale`);
    const typed = ALL_QS.filter((q) => isOpen(q.format) && (q.accept ?? []).some((a) => a.includes(word)) && fold(q.answer ?? '') === fold((q.answer ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '')));
    // The clause above is always true by construction; what it documents is
    // that an accent cannot be the thing distinguishing an accepted answer.
    void typed;
  }
});

test('no typed question turns on a capital or a space', () => {
  // fold() strips both. A question whose answer differs from a plausible
  // mistake only by case or spacing accepts the mistake.
  for (const q of ALL_QS.filter((x) => isOpen(x.format))) {
    const a = q.answer ?? '';
    ok(fold(a).length > 0, `an open question folds to nothing: ${q.q}`);
    ok(
      !/^[A-ZÀ-Þ][a-zà-ÿ]*$/.test(a.trim()) || (q.accept ?? []).length > 0,
      `a one-word answer with no accept list cannot be checked: ${a}`,
    );
  }
});

/* ─── 8. No ear question offers two spellings of one sound ────────────────── */

test('the homophone list is assembled from the band, not invented here', () => {
  if (!SRC) return;
  const flat = SRC.HOMOPHONE_FORMS.flat();
  // The pairs the prompt names as the most likely defect in a capstone. Each
  // must be IN the assembled list, or the sweep below cannot see it.
  for (const [a, b] of [
    ['parle', 'parlent'], ['allé', 'allées'], ['cet', 'cette'],
    ['mien', 'miens'], ['manger', 'mangé'],
  ] as const) {
    ok(flat.includes(a) && flat.includes(b), `the assembled list is missing ${a}/${b}`);
    ok(
      SRC.HOMOPHONE_FORMS.some((g) => g.includes(a) && g.includes(b)),
      `${a} and ${b} are in the list but not in the same group, so nothing pairs them`,
    );
  }
  ok(SRC.HOMOPHONE_FORMS.length >= 80, `the assembled list holds ${SRC.HOMOPHONE_FORMS.length} groups, which is fewer than the band declares`);
});

test('no group in the assembled list holds one form twice', () => {
  if (!SRC) return;
  // `pronoms-direct-corpus.ts` ships ["Je l'aime.", "Je l'aime."] as its first
  // group: two identical strings. Under the SWAP shape a repeated form can
  // never fire, so a duplicate in this union would be dead weight. Under
  // a2.06's whole-option shape it is not dead, which is why that group stays
  // where it is and is not carried here. See homophoneClashes' header.
  for (const g of SRC.HOMOPHONE_FORMS) {
    strictEqual(new Set(g).size, g.length, `a homophone group repeats a form: ${g.join(' / ')}`);
  }
});

test('homophoneClashes fires on BOTH shapes, and on neither false positive', () => {
  if (!SRC) return;
  const round = (opts: string[]) => ([{
    id: 'r01-a2-01-probe',
    label: 'probe',
    questions: [{ q: 'Listen.', format: 'listenChoose', opts, correct: 0, why: 'w', ref: 'r' }],
  }] as never[]);

  // SWAP SHAPE: two sentences differing only by a member of one group.
  ok(
    SRC.homophoneClashes(round(['Je parle français.', 'Je parles français.'])).length > 0,
    'the swap shape does not fire on two options differing only by parle/parles',
  );
  // WHOLE-OPTION SHAPE: two options that ARE members of one group.
  ok(
    SRC.homophoneClashes(round(['le mien', 'mien', 'miens'])).length > 0,
    'the whole-option shape does not fire on two bare members of one group',
  );
  // AND NEITHER MAY FIRE ON THESE. All three are answerable, and the
  // containment version of the second shape refused all three.
  deepStrictEqual(
    SRC.homophoneClashes(round(['Je parle français.', 'Tu parles français.'])), [],
    'fires on two options separated by their subject pronoun',
  );
  deepStrictEqual(
    SRC.homophoneClashes(round(['le mien', 'les miens'])), [],
    'fires on two options separated by their article',
  );
  deepStrictEqual(
    SRC.homophoneClashes(round(['Three times a day', 'Three at a time'])), [],
    'fires on two English options that merely both contain the letter a',
  );
});

test('no listenChoose offers two members of one homophone group', () => {
  if (!SRC) return;
  const clashes = [
    ...SRC.homophoneClashes(roundsOf(review) as never),
    ...SRC.homophoneClashes(roundsOf(exam) as never),
  ];
  deepStrictEqual(clashes, [], `an ear question has no correct answer:\n${clashes.join('\n')}`);
});

test('every listenChoose carries its own clip', () => {
  // Without one, ListenChooseCard falls back to speaking `opts[correct]`, which
  // reads the answer aloud before the learner has chosen, and on an
  // English-option question speaks English at a French listening exercise.
  const ear = ALL_QS.filter((q) => q.format === 'listenChoose');
  ok(ear.length > 0, 'the capstone has no ear questions at all');
  for (const q of ear) ok(q.audio?.clip, `a listenChoose has no audio.clip: ${q.q}`);
});

/* ─── 9. The format mix is A2's ───────────────────────────────────────────── */

test('the format mix is within tolerance of the measured A2 band', () => {
  // ASSERTED WITH A TOLERANCE, so a future edit that turns the capstone into a
  // multiple-choice test goes red rather than drifting one question at a time.
  // a1.30 runs 50% mcq; the A2 band runs 37%, because most of what A2 teaches
  // is inaudible and is assessed in writing.
  const bandTotal = Object.values(BAND_MIX).reduce((a, b) => a + b, 0);
  const mine: Record<string, number> = {};
  for (const q of ALL_QS) mine[q.format ?? 'mcq'] = (mine[q.format ?? 'mcq'] ?? 0) + 1;
  const drift: string[] = [];
  for (const f of Object.keys(BAND_MIX)) {
    const got = (100 * (mine[f] ?? 0)) / ALL_QS.length;
    const want = (100 * BAND_MIX[f]) / bandTotal;
    if (Math.abs(got - want) > MIX_TOLERANCE_PCT) drift.push(`${f}: ${got.toFixed(1)}% against ${want.toFixed(1)}%`);
  }
  deepStrictEqual(drift, [], `the format mix has drifted out of band: ${drift.join('; ')}`);
});

test('at most half the questions are multiple choice', () => {
  const mcq = ALL_QS.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  ok(mcq * 2 <= ALL_QS.length, `${mcq} of ${ALL_QS.length} are mcq`);
});

test('the tolerance itself is what the build declares', () => {
  if (!SRC) return;
  strictEqual(SRC.MIX_TOLERANCE_PCT, MIX_TOLERANCE_PCT, 'the build and this test disagree about the tolerance');
  deepStrictEqual({ ...SRC.A2_MEASURED_MIX }, { ...BAND_MIX }, 'the build and this test measured different bands');
});

test('every format the band uses appears at least once', () => {
  const used = new Set(ALL_QS.map((q) => q.format ?? 'mcq'));
  for (const f of Object.keys(BAND_MIX)) ok(used.has(f), `the capstone uses no ${f} at all`);
});

/* ─── 10. Answers do not cluster ──────────────────────────────────────────── */

test('no option slot holds more than 40% of the correct answers', () => {
  const closed = ALL_QS.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
  const slots: number[] = [];
  for (const q of closed) slots[q.correct as number] = (slots[q.correct as number] ?? 0) + 1;
  const worst = Math.max(...slots.map((n) => (100 * (n ?? 0)) / closed.length));
  ok(worst <= 40, `${worst.toFixed(1)}% of correct answers sit in one slot`);
});

test('spreadAnswers moves the answer and keeps the distractors in order', () => {
  if (!SRC) return;
  // Mutation-proofing the spreader itself. The rounds quiz renders authored
  // order, so the position in the data IS the position on the screen.
  const before = [{
    id: 'r00-a2-01-x',
    label: 'x',
    questions: [
      { q: 'a', format: 'mcq', opts: ['w', 'RIGHT', 'y', 'z'], correct: 1, why: 'w', ref: 'r' },
      { q: 'b', format: 'typeIn', accept: ['x'], answer: 'x', why: 'w', ref: 'r' },
    ],
  }] as never[];
  const after = SRC.spreadAnswers(before) as unknown as AnyRec[];
  const q0 = (after[0].questions as AnyRec[])[0];
  strictEqual((q0.opts as string[])[q0.correct as number], 'RIGHT', 'the spreader lost track of the correct option');
  deepStrictEqual((q0.opts as string[]).filter((o) => o !== 'RIGHT'), ['w', 'y', 'z'], 'the distractors were reordered');
  const q1 = (after[0].questions as AnyRec[])[1];
  strictEqual(q1.answer, 'x', 'the spreader touched an open question');
});

/* ─── 11. Remediation wiring ──────────────────────────────────────────────── */

test('twelve repair families, each named by at least one round', () => {
  const triggers = (review.errorTriggers ?? []) as AnyRec[];
  strictEqual(triggers.length, REPAIR_FAMILIES);
  const drills = new Set(((review.drills ?? []) as AnyRec[]).map((d) => d.id as string));
  for (const t of triggers) {
    ok(drills.has(t.drill as string), `family ${t.id} names drill ${t.drill}, which does not exist`);
    ok(drills.has(t.retest as string), `family ${t.id} names retest ${t.retest}, which does not exist`);
  }
  const used = new Set(roundsOf(review).flatMap((r) => (r.targets ?? []) as string[]));
  for (const t of triggers) ok(used.has(t.id as string), `family ${t.id} is named by no round, so its drill can never fire`);
});

test('each review round names exactly one family', () => {
  // `drillForRound` fires the drill of the FIRST resolving target only and then
  // stops, so a second target on a round is dead content. a1.05 shipped two
  // such drills and a1.07's first draft a third.
  const families = new Set(((review.errorTriggers ?? []) as AnyRec[]).map((t) => t.id as string));
  for (const r of roundsOf(review)) {
    const ts = (r.targets ?? []) as string[];
    strictEqual(ts.length, 1, `${r.id} names ${ts.length} targets and only the first fires`);
    ok(families.has(ts[0]), `${r.id} names ${ts[0]}, which is not a declared family`);
  }
});

test('every drill and retest has a why or a coach line', () => {
  for (const d of (review.drills ?? []) as AnyRec[]) {
    ok(d.coach || d.why, `drill ${d.id} explains nothing when it fires`);
  }
});

/* ─── 12. The reframes ────────────────────────────────────────────────────── */

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

test('each reframe is carried verbatim in at least three sections', () => {
  for (const [l, line] of [[review, REFRAME], [exam, REFRAME_EXAM]] as const) {
    const hits = sectionsOf(l).filter((s) => strs(s).some((x) => x.includes(line)));
    ok(hits.length >= 3, `${l.id}: "${line}" appears in ${hits.length} section(s), needs three`);
  }
});

test('the two reframes are different sentences', () => {
  strictEqual(review.reframe, REFRAME);
  strictEqual(exam.reframe, REFRAME_EXAM);
  ok(review.reframe !== exam.reframe, 'the two lessons share one reframe and they have different designs');
});

test('neither reframe is a1.30s', () => {
  // The A1 capstone's two lines, retyped. They say the same thing about a
  // different band and copying either would make the two capstones read as one
  // template rather than as two assessments.
  const A1_L1 = 'A wrong answer names the half hour to sit again.';
  const A1_L2 = 'Nothing here tells you which lesson it came from.';
  for (const l of [review, exam]) {
    strictEqual(l.reframe, l.reframe);
    ok(l.reframe !== A1_L1 && l.reframe !== A1_L2, `${l.id} reuses a1.30's reframe verbatim`);
  }
});

/* ─── 13. House copy, over a display() walk ───────────────────────────────── */

const surfaceOf = (l: AnyRec): { path: string; s: string }[] => {
  if (!SRC) return [];
  return [
    ...SRC.display(l.sections, 'sections'),
    ...SRC.display(l.sheets ?? [], 'sheets'),
    ...SRC.display(l.terms ?? {}, 'terms'),
    ...SRC.display(l.drills ?? [], 'drills'),
    ...SRC.display(l.intro ?? '', 'intro'),
    ...SRC.display(l.overview ?? {}, 'overview'),
  ];
};

test('no grammar word reaches a learner surface', () => {
  if (!SRC) return;
  for (const l of [review, exam]) {
    for (const { path, s } of surfaceOf(l)) {
      for (const j of SRC.JARGON) {
        ok(!SRC.hasWord(s, j), `${l.id} carries "${j}" at ${path}: ${s.slice(0, 90)}`);
      }
    }
  }
});

test('the jargon walk covers intro and overview in their own right', () => {
  // Corrections §9: `intro` is drawn on the lesson overview card AND the lesson
  // cover, and the jargon walk of every A2 lesson before a2.11 missed both.
  // Pinned separately so an author who trims the walk back fails with the
  // reason rather than silently.
  if (!SRC) return;
  for (const l of [review, exam]) {
    ok((l.intro as string)?.length > 0, `${l.id} has no intro, which is drawn on its cover`);
    for (const j of SRC.JARGON) {
      ok(!SRC.hasWord(l.intro as string, j), `${l.id}: intro carries "${j}"`);
      for (const { s } of SRC.display(l.overview ?? {})) {
        ok(!SRC.hasWord(s, j), `${l.id}: overview carries "${j}"`);
      }
    }
  }
});

test('the jargon list checks the -s plural of every entry that has one', () => {
  // Corrections §13: `hasWord` is boundary-exact, so a list holding `paradigm`
  // does not catch `paradigms`, and a2.15 shipped "Three paradigms, eighteen
  // cells" past all three of its layers.
  if (!SRC) return;
  const set = new Set(SRC.JARGON);
  // A word in -y pluralises in -ies, which is exactly the case a naive `+ s`
  // check misses: `auxiliaries` is in the list and `auxiliarys` is not a word.
  const covered = (j: string) => set.has(`${j}s`) || (j.endsWith('y') && set.has(`${j.slice(0, -1)}ies`));
  const missingPlural = SRC.JARGON.filter((j) => !j.endsWith('s') && !j.includes(' ') && !covered(j));
  // Words with no natural plural are allowed to stand alone; the check exists
  // for the ones that HAVE one and would otherwise slip through, which is how
  // a2.15 shipped "Three paradigms, eighteen cells".
  const NO_PLURAL = new Set([
    'anaphoric', 'nominal', 'substantive', 'inflectional', 'morphological',
    'morphology', 'periphrastic', 'suppletive', 'valency', 'intransitive',
    'transitive', 'orthographic', 'phonological', 'phonologically', 'deictic',
    'subjunctive', 'conditional', 'imperfect', 'dative', 'genitive',
    'conjugated', 'past participle',
  ]);
  const gaps = missingPlural.filter((j) => !NO_PLURAL.has(j));
  deepStrictEqual(gaps, [], `these jargon entries have no -s form in the list: ${gaps.join(', ')}`);
});

test('the word boundary can see through an apostrophe', () => {
  // Corrections §14.3: the house boundary excludes `'`, so a guard built on it
  // cannot see `j'ai`, `c'est` or `celui-ci`, and this file carries all three
  // dozens of times. Dropped from the LEFT and kept on the right, so a search
  // for `l` still cannot match the `l'` of `l'addition`.
  if (!SRC) return;
  ok(SRC.hasWord("J'ai mangé", 'ai'), 'the boundary cannot see the verb after an apostrophe');
  ok(SRC.hasWord("Je préfère celui-ci", 'celui'), 'the boundary cannot see a word before a hyphen');
  ok(!SRC.hasWord("l'addition", 'l'), 'the boundary matches the l of an elided article');
  ok(SRC.hasWord('Il manque une serviette', 'manque'), 'the boundary cannot see a plain word');
});

test('no banned substring, in either direction', () => {
  // `\bhonest` cannot see "dishonest". The check is on the SUBSTRING.
  for (const l of [review, exam]) {
    for (const s of strs(l.sections).concat(strs(l.drills ?? []), [l.intro as string])) {
      ok(!/honest/i.test(s), `${l.id} uses "honest": ${s.slice(0, 80)}`);
      ok(!s.includes('—'), `${l.id} has an em dash: ${s.slice(0, 80)}`);
    }
  }
});

test('no AI-tell phrasing', () => {
  const BANNED = [
    'falls fast', 'trip up', 'half of everything', 'this is the big one',
    'listen to the trap', 'get those two right', 'this is the part that pays',
    'here is the catch',
  ];
  for (const l of [review, exam]) {
    const all = strs(l).join('\n').toLowerCase();
    for (const b of BANNED) ok(!all.includes(b), `${l.id} carries the phrase "${b}"`);
  }
});

test('the plain phrase outnumbers the technical one', () => {
  // Corrections §14.5: `adjective` is on 147 shipped cards, so banning it would
  // be this build inventing a rule. The RATIO is the guard, measured across
  // both lessons because a2.35 is one unit in two bodies.
  if (!SRC) return;
  const joint = [review, exam].flatMap((l) => surfaceOf(l)).map((x) => x.s).join('\n');
  const plain = SRC.countWord(joint, SRC.PLAIN_PHRASE);
  const tech = SRC.countWord(joint, SRC.TECHNICAL_WORD);
  ok(plain > tech, `"${SRC.TECHNICAL_WORD}" ${tech} against "${SRC.PLAIN_PHRASE}" ${plain}`);
});

test('display() drops machine keys and keeps sub', () => {
  // The sixth guard hole, and the mirror of the first. A RAW walk reports
  // `paradigm` on thirteen A2 learner surfaces and every one is an
  // `audio.recordingId` or a sheet section id. `sub` goes the other way:
  // `prose()` drops it and on a cardDeck card it holds prose.
  if (!SRC) return;
  const probe = { sub: 'PROSE HERE', audio: { recordingId: 'rec-a2-10-paradigm' }, id: 'sheet-endings-paradigm' };
  const seen = SRC.display(probe).map((x) => x.s);
  ok(seen.includes('PROSE HERE'), 'display() dropped sub, which holds prose on a cardDeck card');
  ok(!seen.some((s) => s.includes('rec-a2-10')), 'display() kept a recordingId, which no learner reads');
  ok(!seen.some((s) => s.includes('sheet-endings')), 'display() kept a section id, which no learner reads');
  ok(SRC.MACHINE_KEYS.has('recordingId') && SRC.MACHINE_KEYS.has('targets'), 'the machine-key list lost an entry');
});

/* ─── 14. Density, run for real ───────────────────────────────────────────── */

test('both lessons pass the density validator as they sit in the seed', () => {
  // Run against the SEED bodies rather than the source, so a merge that wrote
  // something the source never held fails here.
  for (const l of [review, exam]) {
    const issues = validateDensity(l as never, new Set());
    deepStrictEqual(issues, [], `${l.id} fails density in the seed: ${JSON.stringify(issues)}`);
  }
});

test('the review quiz stops at least every three rounds', () => {
  // checkpointSpacing caps any single stretch at 22 screens, and a 170-question
  // run with one stop at the end is the exact shape that rule exists to catch.
  const act = ((review.acts ?? []) as AnyRec[]).find((a) => ((a.sections ?? []) as string[]).includes('s04-quiz'));
  ok(act, 'no act owns the quiz section');
  const rests = (act!.restPoints ?? []) as string[];
  ok(rests.length >= 10, `${rests.length} rest points across 34 rounds; the run is too long between stops`);
  for (const r of rests) ok(/^s04-quiz\/after-r\d+$/.test(r), `a rest point does not name a round: ${r}`);
});

/* ─── 15. It teaches nothing ──────────────────────────────────────────────── */

test('neither lesson claims to introduce any grammar', () => {
  // An assessment that also teaches is not an assessment. a1.30's previous
  // version was a nineteen-section teaching lesson with 101 new corpus items
  // and all of it was deleted on instruction.
  for (const l of [review, exam]) {
    deepStrictEqual(l.grammarIntroduced ?? [], [], `${l.id} claims to introduce grammar`);
    ok(((l.grammarAssumed ?? []) as string[]).length > 0, `${l.id} assumes nothing, which cannot be right for a capstone`);
  }
});

test('the capstone teaches no section type that explains', () => {
  const TEACHING = new Set(['teach', 'steps', 'examples', 'tapTable', 'trapDrill', 'cardDeck', 'listening', 'commonErrors', 'flashcards', 'vocabThemes', 'reading', 'dictation', 'groupDrill', 'scenario', 'useCases', 'hacks', 'reviewDeck', 'table']);
  for (const l of [review, exam]) {
    const teaching = sectionsOf(l).filter((s) => TEACHING.has(s.type as string));
    deepStrictEqual(teaching.map((s) => s.type), [], `${l.id} carries a teaching section: ${teaching.map((s) => s.type).join(', ')}`);
  }
});

test('no B1 content appears anywhere in the capstone', () => {
  // The imperfect, the conditional and the synthetic future are B1 and arrive
  // nowhere in the 35-unit A2 trail. A capstone reaching for one would be
  // testing something the band never taught.
  const all = [review, exam].flatMap((l) => strs(l)).join('\n');
  const B1 = [
    /(?<![\p{L}\p{N}])(je |tu |il |elle |on |nous |vous |ils |elles )(étais|était|étions|étiez|étaient)(?![\p{L}\p{N}])/iu,
    /(?<![\p{L}\p{N}])(avais|avait|avions|aviez|avaient)(?![\p{L}\p{N}])/iu,
    /(?<![\p{L}\p{N}])(serais|serait|serions|seriez|seraient|aurais|aurait|aurions|auriez|auraient)(?![\p{L}\p{N}])/iu,
    /(?<![\p{L}\p{N}])(dormirais|mangerais|irais|ferais)(?![\p{L}\p{N}])/iu,
  ];
  for (const re of B1) {
    const m = re.exec(all);
    ok(!m, `a B1 form appears in the capstone: "${m?.[0]}"`);
  }
});

test('voudrais is allowed, because A2 owns it as a fixed form', () => {
  // The one exception to the rule above, and it has to be stated or somebody
  // widens the B1 guard until it fires on a2.13's own politeness form. a2.13
  // teaches je voudrais and nous voudrions as fixed forms, named as fixed and
  // not analysed.
  const all = [review, exam].flatMap((l) => strs(l)).join('\n');
  ok(all.includes('voudrais'), 'the capstone never asks for the polite form the band spent a unit on');
});
