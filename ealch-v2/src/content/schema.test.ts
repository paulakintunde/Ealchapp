// Content schema guard. Runs on plain Node (types are stripped natively):
//   npm test
// schema.ts imports nothing at all, which is the whole reason it can be shared
// between the app, the Ops Console, the generator and this test runner.
//
// These tests are not ceremony. Every referential-integrity case below is a bug
// that does NOT crash in production: a dangling itemId renders as a blank drill
// with no error, and a quiz whose `correct` is out of range tells the learner
// they failed whatever they answered. The publish pipeline runs validateCorpus
// as a gate precisely so these die here instead of on someone's phone.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  EMPTY_CORPUS,
  formatIssues,
  isValidCorpus,
  isValidItem,
  itemId,
  lessonId,
  unitId,
  unitOfLesson,
  validateCorpus,
  validateItem,
  validateLesson,
  validateScenario,
  validateUnit,
  type Corpus,
  type Item,
  type Lesson,
  type LessonSection,
  type Unit,
} from './schema.ts';

/* ─── fixtures ───────────────────────────────────────────────────────────── */

const item = (over: Partial<Item> = {}): Item => ({
  id: 'fr.a1.cafe.001',
  kind: 'phrase',
  level: 'a1',
  theme: 'cafe',
  fr: 'Je voudrais un café',
  en: 'I would like a coffee',
  tags: ['politesse'],
  drills: ['flashcard', 'review'],
  audioRef: null,
  version: 1,
  ...over,
});

const lesson = (over: Partial<Lesson> = {}): Lesson => ({
  id: 'sons.03.l1',
  unitId: 'sons.03',
  seq: 1,
  title: 'Les voyelles nasales',
  level: 'sons',
  tag: 'SONS · LEÇON 03',
  intro: 'Four sounds with no English equivalent.',
  sections: [{ type: 'teach', title: 'The four nasals', body: 'The air escapes through the nose.' }],
  itemIds: [],
  version: 1,
  ...over,
});

const unit = (over: Partial<Unit> = {}): Unit => ({
  id: 'sons.03',
  track: 'sons',
  seq: 3,
  title: 'Les voyelles nasales',
  sub: 'on · en · in · un',
  lessonIds: ['sons.03.l1'],
  ...over,
});

const scenario = (over: Partial<import('./schema.ts').Scenario> = {}): import('./schema.ts').Scenario => ({
  id: 'sc.a1.marche.001',
  level: 'a1',
  theme: 'marche',
  title: 'Au marché',
  turns: [{ ai: 'Bonjour !', en: 'Hello!', user: "Bonjour, trois pommes s'il vous plaît." }],
  version: 1,
  ...over,
});

const corpus = (over: Partial<Corpus> = {}): Corpus => ({
  version: 1,
  units: [unit()],
  lessons: [lesson()],
  items: [item()],
  scenarios: [scenario()],
  ...over,
});

/* ─── identity ───────────────────────────────────────────────────────────── */

test('id helpers build the documented formats', () => {
  strictEqual(itemId('a1', 'cafe', 1), 'fr.a1.cafe.001');
  strictEqual(itemId('sons', 'nasales', 42), 'fr.sons.nasales.042');
  strictEqual(itemId('b2', 'marche', 700), 'fr.b2.marche.700');
  strictEqual(unitId('sons', 3), 'sons.03');
  strictEqual(unitId('a1', 26), 'a1.26');
  strictEqual(lessonId('sons.03', 2), 'sons.03.l2');
});

test('a lesson id carries its unit, and unitOfLesson reads it back', () => {
  strictEqual(unitOfLesson('sons.03.l1'), 'sons.03');
  strictEqual(unitOfLesson('a2.01.l12'), 'a2.01');
  // Round-trip: the two helpers must agree, or a lesson files under one unit
  // and links from another.
  strictEqual(unitOfLesson(lessonId(unitId('a1', 4), 3)), 'a1.04');
});

/* ─── items ──────────────────────────────────────────────────────────────── */

test('a well-formed item validates', () => {
  deepStrictEqual(validateItem(item()), []);
  ok(isValidItem(item()));
});

test('an item id must match fr.<level>.<theme>.<seq>', () => {
  const bad = ['cafe-001', 'fr.a1.cafe', 'fr.zz.cafe.001', 'fr.a1.Cafe.001', 'fr.a1.cafe.1'];
  for (const id of bad) {
    ok(validateItem(item({ id })).length > 0, `"${id}" should be rejected`);
  }
});

test('the id encodes level and theme, and must not contradict the fields', () => {
  // The id says a1/cafe; the fields say a2/marche. One of them is a lie and we
  // cannot know which, so both are refused.
  const issues = validateItem(item({ id: 'fr.a1.cafe.001', level: 'a2', theme: 'marche' }));
  ok(issues.some((i) => /id level .* disagrees/.test(i.message)));
  ok(issues.some((i) => /id theme .* disagrees/.test(i.message)));
});

test('an item with no drills is rejected — no drill could ever reach it', () => {
  const issues = validateItem(item({ drills: [] }));
  ok(issues.some((i) => /drills must not be empty/.test(i.message)));
});

test('unknown drill kinds are rejected', () => {
  const issues = validateItem(item({ drills: ['flashcard', 'karaoke'] as never }));
  ok(issues.some((i) => /unknown drill/.test(i.message)));
});

test('required item fields are all enforced', () => {
  for (const k of ['id', 'kind', 'level', 'theme', 'fr', 'en', 'tags', 'drills', 'version'] as const) {
    const broken = item();
    delete (broken as Record<string, unknown>)[k];
    ok(validateItem(broken).length > 0, `missing "${k}" should be rejected`);
  }
});

test('gender is optional but must be m or f', () => {
  deepStrictEqual(validateItem(item({ gender: 'f' })), []);
  ok(validateItem(item({ gender: 'n' as never })).length > 0);
});

test('validateItem never throws on garbage', () => {
  for (const junk of [null, undefined, 42, 'item', [], true]) {
    ok(Array.isArray(validateItem(junk)));
  }
});

/* ─── lesson sections ────────────────────────────────────────────────────── */

const withSection = (s: LessonSection) => validateLesson(lesson({ sections: [s] }));

test('every documented section type validates when well-formed', () => {
  const all: LessonSection[] = [
    { type: 'teach', title: 'T', body: 'B' },
    { type: 'steps', title: 'T', steps: ['one', 'two'] },
    { type: 'examples', title: 'T', examples: [{ fr: 'Bonjour', en: 'Hello' }] },
    { type: 'useCases', title: 'T', cases: [{ situation: 'At the café', fr: 'Un café', en: 'A coffee' }] },
    { type: 'hacks', title: 'T', hacks: [{ hack: 'Hum it', why: 'Forces nasal airflow' }] },
    { type: 'cheatSheet', title: 'T', rows: [{ k: 'on', v: 'ɔ̃' }] },
    { type: 'commonErrors', title: 'T', errors: [{ wrong: 'bonne', right: 'bɔ̃', why: 'no n sound' }] },
    { type: 'focus', title: 'T', points: ['Keep the mouth open'] },
    { type: 'table', title: 'T', cols: ['a', 'b'], rows: [['1', '2']] },
    { type: 'audio', title: 'T', lines: ['Un bon vin blanc'] },
    { type: 'practice', title: 'T', skill: 'speak', itemIds: ['fr.a1.cafe.001'] },
    { type: 'quiz', title: 'T', questions: [{ q: 'Which?', opts: ['a', 'b'], correct: 1 }] },
  ];
  for (const s of all) {
    deepStrictEqual(withSection(s), [], `section "${s.type}" should validate`);
  }
  // Guard against the union and the runtime list drifting apart.
  strictEqual(all.length, 12);
});

test('an unknown section type is rejected', () => {
  ok(withSection({ type: 'podcast', title: 'T' } as never).length > 0);
});

test('a ragged table is rejected — it would render as silently misaligned cells', () => {
  const issues = withSection({ type: 'table', title: 'T', cols: ['a', 'b', 'c'], rows: [['1', '2']] });
  ok(issues.some((i) => /has 2 cells but there are 3 cols/.test(i.message)));
});

test('a quiz whose `correct` is out of range is rejected', () => {
  // This is the nastiest content bug there is: EVERY option scores wrong, so the
  // learner is told they failed no matter what they picked.
  for (const correct of [2, -1, 1.5]) {
    const issues = withSection({
      type: 'quiz',
      title: 'T',
      questions: [{ q: 'Which?', opts: ['a', 'b'], correct: correct as number }],
    });
    ok(issues.some((i) => /correct must index opts/.test(i.message)), `correct=${correct}`);
  }
});

test('a quiz needs at least two options', () => {
  ok(withSection({ type: 'quiz', title: 'T', questions: [{ q: 'Q', opts: ['only'], correct: 0 }] }).length > 0);
});

test('a practice section must reference well-formed item ids', () => {
  const issues = withSection({ type: 'practice', title: 'T', skill: 'speak', itemIds: ['nope'] });
  ok(issues.some((i) => /is not a valid item id/.test(i.message)));
});

test('a practice section must name one of the four skills', () => {
  ok(withSection({ type: 'practice', title: 'T', skill: 'vibes' as never, itemIds: ['fr.a1.cafe.001'] }).length > 0);
});

test('empty section bodies are rejected — they teach nothing', () => {
  ok(withSection({ type: 'steps', title: 'T', steps: [] }).length > 0);
  ok(withSection({ type: 'focus', title: 'T', points: [] }).length > 0);
  ok(withSection({ type: 'audio', title: 'T', lines: [] }).length > 0);
});

/* ─── lessons and units ──────────────────────────────────────────────────── */

test('a well-formed lesson and unit validate', () => {
  deepStrictEqual(validateLesson(lesson()), []);
  deepStrictEqual(validateUnit(unit()), []);
});

test('a lesson with no sections is rejected', () => {
  ok(validateLesson(lesson({ sections: [] })).length > 0);
});

test("a lesson id that disagrees with its unitId is rejected", () => {
  const issues = validateLesson(lesson({ id: 'sons.03.l1', unitId: 'a1.04' }));
  ok(issues.some((i) => /does not belong to unitId/.test(i.message)));
});

test('a unit with NO lessons is legal — it is honest "coming soon"', () => {
  // This matters: 40 of the Den's 43 units have no lesson written. They must be
  // representable, so the Den can say so instead of falling through to a generic
  // player pretending to be that unit's content.
  deepStrictEqual(validateUnit(unit({ lessonIds: [] })), []);
});

test('a unit id must agree with its track', () => {
  const issues = validateUnit(unit({ id: 'sons.03', track: 'a1' }));
  ok(issues.some((i) => /disagrees with track/.test(i.message)));
});

/* ─── scenarios ──────────────────────────────────────────────────────────── */

test('a well-formed scenario validates', () => {
  deepStrictEqual(validateScenario(scenario()), []);
});

test('a scenario id must match sc.<level>.<theme>.<seq> and agree with its fields', () => {
  ok(validateScenario(scenario({ id: 'a1.marche.001' })).length > 0);
  const issues = validateScenario(scenario({ id: 'sc.a2.marche.001', level: 'a1' }));
  ok(issues.some((i) => /id level .* disagrees/.test(i.message)));
});

test('a scenario with no turns is rejected', () => {
  ok(validateScenario(scenario({ turns: [] })).length > 0);
});

test('each turn needs ai, en and user', () => {
  ok(validateScenario(scenario({ turns: [{ ai: 'x', en: 'y', user: '' } as never] })).length > 0);
  ok(validateScenario(scenario({ turns: [{ ai: 'x', user: 'z' } as never] })).length > 0);
});

test('validateCorpus validates scenarios and catches duplicate scenario ids', () => {
  deepStrictEqual(validateCorpus(corpus()), []);
  ok(validateCorpus(corpus({ scenarios: [scenario(), scenario()] })).some((i) => /duplicate scenario id/.test(i.message)));
  ok(validateCorpus(corpus({ scenarios: [scenario({ turns: [] })] })).some((i) => /turns must not be empty/.test(i.message)));
});

test('a corpus with no scenarios array still validates (back-compat with a v0 seed)', () => {
  const noScenarios = { version: 1, units: [], lessons: [], items: [] };
  deepStrictEqual(validateCorpus(noScenarios), []);
});

/* ─── corpus: referential integrity ──────────────────────────────────────── */

test('a coherent corpus validates, and the empty corpus is valid', () => {
  deepStrictEqual(validateCorpus(corpus()), []);
  ok(isValidCorpus(corpus()));
  deepStrictEqual(validateCorpus(EMPTY_CORPUS), []);
});

test('a lesson referencing an unknown item is caught', () => {
  // The bug this exists for: a dangling itemId does not crash. It renders as an
  // empty practice block and nobody ever hears about it.
  const c = corpus({ lessons: [lesson({ itemIds: ['fr.a1.cafe.999'] })] });
  const issues = validateCorpus(c);
  ok(issues.some((i) => /references unknown item "fr\.a1\.cafe\.999"/.test(i.message)));
});

test('a practice section referencing an unknown item is caught', () => {
  const c = corpus({
    lessons: [
      lesson({
        sections: [{ type: 'practice', title: 'Say it', skill: 'speak', itemIds: ['fr.a1.cafe.404'] }],
      }),
    ],
  });
  ok(validateCorpus(c).some((i) => /practice section references unknown item/.test(i.message)));
});

test('a lesson referencing an unknown unit is caught', () => {
  const c = corpus({
    units: [unit({ id: 'a1.04', track: 'a1', seq: 4, lessonIds: [] })],
    lessons: [lesson({ unitId: 'sons.03' })],
  });
  ok(validateCorpus(c).some((i) => /references unknown unit "sons\.03"/.test(i.message)));
});

test('a unit referencing an unknown lesson is caught', () => {
  const c = corpus({ units: [unit({ lessonIds: ['sons.03.l1', 'sons.03.l9'] })] });
  ok(validateCorpus(c).some((i) => /references unknown lesson "sons\.03\.l9"/.test(i.message)));
});

test('a lesson no unit links to is caught — it is unreachable content', () => {
  // Authored, reviewed, shipped, and no user can ever open it.
  const c = corpus({ units: [unit({ lessonIds: [] })] });
  ok(validateCorpus(c).some((i) => /is not listed in any unit's lessonIds/.test(i.message)));
});

test('duplicate ids are caught for items, lessons and units', () => {
  // A duplicate silently wins in any Map lookup, so two different items share a
  // key and the SRS schedules a ghost.
  ok(validateCorpus(corpus({ items: [item(), item()] })).some((i) => /duplicate item id/.test(i.message)));
  ok(
    validateCorpus(corpus({ units: [unit({ lessonIds: ['sons.03.l1'] })], lessons: [lesson(), lesson()] }))
      .some((i) => /duplicate lesson id/.test(i.message))
  );
  ok(validateCorpus(corpus({ units: [unit(), unit()] })).some((i) => /duplicate unit id/.test(i.message)));
});

test('validateCorpus never throws on garbage', () => {
  for (const junk of [null, undefined, 42, 'corpus', [], { version: 1 }]) {
    ok(Array.isArray(validateCorpus(junk)));
  }
});

test('formatIssues renders something a human can act on', () => {
  const out = formatIssues(validateItem(item({ drills: [] })));
  ok(out.includes('item:'));
  ok(out.includes('drills must not be empty'));
});
