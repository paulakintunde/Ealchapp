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
  DRILL_KINDS,
  EMPTY_CORPUS,
  EXAM_SECTIONS,
  EXAM_SKILLS,
  LESSON_ID_RE,
  LEVELS,
  MODALITIES,
  PRACTICE_SKILLS,
  REGISTERS,
  SCORE_BANDS,
  UNIT_ID_RE,
  formatIssues,
  examSeriesId,
  examTaskId,
  isValidCorpus,
  isValidDomain,
  isValidExamSeries,
  isValidExamTask,
  isValidItem,
  isValidPack,
  isValidTheme,
  itemId,
  lessonId,
  packId,
  unitBand,
  unitId,
  unitOfLesson,
  validateCorpus,
  validateDomain,
  validateExamSeries,
  validateExamTask,
  validateItem,
  validateLesson,
  validatePack,
  validateScenario,
  validateTheme,
  validateUnit,
  type AudioSegment,
  type Corpus,
  type Domain,
  type ExamSeries,
  type ExamTask,
  type Item,
  type Lesson,
  type LessonSection,
  type Pack,
  type PracticeSkill,
  type Theme,
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

const domain = (over: Partial<Domain> = {}): Domain => ({
  slug: 'vie-quotidienne',
  title: 'Vie quotidienne',
  order: 1,
  ...over,
});

const theme = (over: Partial<Theme> = {}): Theme => ({
  slug: 'cafe',
  title: 'Au café',
  domain: 'vie-quotidienne',
  levelRange: ['a1', 'b1'],
  examFlag: false,
  immigFlag: false,
  subThemes: ['commander', 'payer'],
  ...over,
});

const pack = (over: Partial<Pack> = {}): Pack => ({
  id: 'pack.a1.cafe',
  theme: 'cafe',
  level: 'a1',
  goal: 'I can order a coffee and pay for it',
  modeTargets: { flashcard: 40, roleplay: 6 },
  status: 'draft',
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

const withSection = (s: LessonSection) => validateLesson(lesson({ sections: [s] }));

/** A closed (machine-markable) task: listening/reading, with questions. */
const closedTask = (over: Partial<ExamTask> = {}): ExamTask => ({
  id: 'exam.tcf.2024a.co.001',
  family: 'tcf',
  variant: '2024a',
  section: 'co',
  level: 'b1',
  formatVersion: 'tcf-2024.1',
  prompt: 'Écoutez le dialogue et répondez.',
  items: [{ q: 'Où sont-ils ?', opts: ['À la gare', 'Au café'], correct: 1 }],
  timingS: 90,
  ...over,
});

/** An open (human-marked) task: speaking/writing, with a rubric. */
const openTask = (over: Partial<ExamTask> = {}): ExamTask => ({
  id: 'exam.delf.2024a.ee.001',
  family: 'delf',
  variant: '2024a',
  section: 'ee',
  level: 'b1',
  formatVersion: 'delf-2020.2',
  prompt: 'Vous écrivez à votre propriétaire pour signaler une fuite.',
  rubric: {
    criteria: [
      { key: 'coherence', label: 'Cohérence', maxPoints: 5, descriptors: ['Idées liées et ordonnées'] },
      { key: 'lexique', label: 'Lexique', maxPoints: 5 },
    ],
  },
  modelAnswer: 'Madame, Monsieur, je vous écris au sujet d\'une fuite…',
  timingS: 1800,
  ...over,
});

const series = (over: Partial<ExamSeries> = {}): ExamSeries => ({
  id: 'series.tcf.2024a.1',
  family: 'tcf',
  variant: '2024a',
  seriesNo: 1,
  taskIds: ['exam.tcf.2024a.co.001'],
  ...over,
});

/* ─── value lists ────────────────────────────────────────────────────────── */

test('content stops at c1; only an exam SCORE can be c2', () => {
  // The two lists do different jobs and neither contains the other. LEVELS is
  // what we author; SCORE_BANDS is what a paper can award. 'sons' is our own
  // pronunciation track and not a CEFR band at all, so it can never be a score.
  deepStrictEqual([...LEVELS], ['sons', 'a1', 'a2', 'b1', 'b2', 'c1']);
  deepStrictEqual([...SCORE_BANDS], ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']);
  ok(!(LEVELS as readonly string[]).includes('c2'), 'we author no c2 content');
  ok((SCORE_BANDS as readonly string[]).includes('c2'), 'but a learner can score c2');
  ok(!(SCORE_BANDS as readonly string[]).includes('sons'), "nobody's CEFR level is 'sons'");
});

test('a c2 content id is now rejected everywhere an id is parsed', () => {
  // Dropping c2 from LEVELS must drop it from the id regexes too. It does,
  // because they are derived from LEVELS rather than restating it — this test
  // is what proves the derivation is wired up and not just described.
  ok(validateItem(item({ id: 'fr.c2.affaires.001', level: 'c2' as never })).length > 0);
  ok(validateScenario(scenario({ id: 'sc.c2.affaires.001', level: 'c2' as never })).length > 0);
  // c1 is the highest band we author, and it must still pass.
  deepStrictEqual(validateItem(item({ id: 'fr.c1.affaires.001', level: 'c1', theme: 'affaires' })), []);
});

test('the new value lists exist and hold what the rest of the phase assumes', () => {
  deepStrictEqual([...MODALITIES], ['recognise', 'produce', 'discriminate']);
  deepStrictEqual([...REGISTERS], ['familier', 'courant', 'soutenu']);
  deepStrictEqual([...EXAM_SKILLS], ['CO', 'CE', 'PO', 'PE']);
  deepStrictEqual([...EXAM_SECTIONS], ['co', 'ce', 'eo', 'ee']);
});

test('the shipped drill-kind strings are append-only', () => {
  // These values live inside cached OTA snapshots on real installs. Adding a
  // kind is safe; renaming one silently empties every deck built from an old
  // cache, with no error anywhere. Pinning the prefix makes that a red test
  // rather than a support ticket.
  deepStrictEqual(
    [...DRILL_KINDS].slice(0, 6),
    ['flashcard', 'voiceflash', 'dictation', 'sentence', 'roleplay', 'review'],
    'the six original drill kinds must keep their exact strings and order'
  );
  ok((DRILL_KINDS as readonly string[]).includes('playlist'));
  ok((DRILL_KINDS as readonly string[]).includes('exam'));
});

test('practice skills keep their shipped string values under the new name', () => {
  // PRACTICE_SKILLS is a renamed identifier, not new data. The strings are what
  // cached snapshots hold, so they must not have moved.
  deepStrictEqual([...PRACTICE_SKILLS], ['read', 'write', 'speak', 'listen']);
  // And the renamed type still types the thing it was renamed for.
  const s: PracticeSkill = 'speak';
  const sections: LessonSection[] = [{ type: 'practice', title: 'T', skill: s, itemIds: ['fr.a1.cafe.001'] }];
  deepStrictEqual(validateLesson(lesson({ sections })), []);
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

/* ─── the optional spine on Item and Lesson ──────────────────────────────── */

test('an item with the full spine validates', () => {
  deepStrictEqual(
    validateItem(
      item({
        skill: 'PO',
        register: 'courant',
        canDo: 'I can order a coffee',
        grammarPoints: ['conditionnel-politesse'],
        modality: 'produce',
        provenance: { model: 'claude-opus-4-8', promptVersion: 'v3', generatedBy: 'llm', sourceRefs: ['Grevisse §912'] },
      })
    ),
    []
  );
});

test('an item with NONE of the spine still validates — this is the whole seed', () => {
  // Not a nicety. Every one of the ~2k items already on people's phones looks
  // like this. The moment any of these becomes required, the shipped corpus is
  // invalid and a fresh offline install renders nothing.
  deepStrictEqual(validateItem(item()), []);
  const bare = item();
  for (const k of ['skill', 'register', 'canDo', 'grammarPoints', 'modality', 'provenance'] as const) {
    strictEqual(bare[k], undefined, `the base fixture must not set ${k}`);
  }
});

test('the spine is checked for TYPE when present, and only then', () => {
  ok(validateItem(item({ skill: 'listen' as never })).length > 0, 'PracticeSkill is not ExamSkill');
  ok(validateItem(item({ skill: 'CO' })).length === 0);
  ok(validateItem(item({ register: 'street' as never })).length > 0);
  ok(validateItem(item({ modality: 'recall' as never })).length > 0);
  ok(validateItem(item({ canDo: '' })).length > 0);
  ok(validateItem(item({ grammarPoints: 'passe-compose' as never })).length > 0);
  ok(validateItem(item({ grammarPoints: [''] })).length > 0);
});

test('the two skill vocabularies are not interchangeable', () => {
  // The rename exists to stop exactly this confusion. An item's `skill` is the
  // exam taxonomy; a practice section's `skill` is what the learner does. Each
  // must reject the other's values, or the distinction is decorative.
  ok(validateItem(item({ skill: 'speak' as never })).length > 0);
  const sections: LessonSection[] = [{ type: 'practice', title: 'T', skill: 'PO' as never, itemIds: ['fr.a1.cafe.001'] }];
  ok(validateLesson(lesson({ sections })).length > 0);
});

test('a lesson carries a grammar spine, and both halves are optional', () => {
  deepStrictEqual(validateLesson(lesson({ grammarAssumed: ['present'], grammarIntroduced: ['passe-compose'] })), []);
  deepStrictEqual(validateLesson(lesson()), [], 'the shipped lessons have neither');
  ok(validateLesson(lesson({ grammarAssumed: 'present' as never })).length > 0);
  ok(validateLesson(lesson({ grammarIntroduced: [42] as never })).length > 0);
});

test('provenance is optional everywhere, and validated when claimed', () => {
  // Absent means UNKNOWN, never 'human'. Hand-written content from before any of
  // this existed has no history to claim, and inventing one would make the audit
  // trail a liar.
  deepStrictEqual(validateItem(item({ provenance: {} })), [], 'an empty claim is legal');
  ok(validateItem(item({ provenance: { generatedBy: 'robot' } as never })).length > 0);
  ok(validateItem(item({ provenance: { sourceRefs: 'Grevisse' } as never })).length > 0);
  ok(validateItem(item({ provenance: 'llm' as never })).length > 0);
  ok(validateItem(item({ provenance: [] as never })).length > 0);
  // Every entity that can be generated can say where it came from.
  deepStrictEqual(validateLesson(lesson({ provenance: { generatedBy: 'human' } })), []);
  deepStrictEqual(validateScenario(scenario({ provenance: { model: 'x' } })), []);
  deepStrictEqual(validatePack(pack({ provenance: { promptVersion: 'v1' } })), []);
  ok(validateScenario(scenario({ provenance: { model: 42 } as never })).length > 0);
  ok(validatePack(pack({ provenance: { reviewedBy: '' } as never })).length > 0);
});

/* ─── audio segments ─────────────────────────────────────────────────────── */

const seg = (over: Partial<AudioSegment> = {}): AudioSegment => ({
  blockId: 'b1',
  startMs: 0,
  endMs: 1200,
  text: 'Un bon vin blanc',
  ...over,
});

test('an item with an ordered, non-overlapping segment map validates', () => {
  deepStrictEqual(
    validateItem(
      item({
        audioRef: 'a/cafe-001.mp3',
        assetKey: 'sha256:abc123',
        segments: [seg(), seg({ blockId: 'b2', startMs: 1200, endMs: 2400, text: 'Je voudrais un café' })],
      })
    ),
    []
  );
  // Touching is not overlapping: one ends exactly where the next begins.
  deepStrictEqual(validateItem(item({ segments: [seg({ endMs: 500 }), seg({ startMs: 500, endMs: 900 })] })), []);
  // And no segments at all is fine — that is every item we ship today.
  deepStrictEqual(validateItem(item()), []);
});

test('overlapping segments are rejected — "which line is playing?" must have one answer', () => {
  // A player answering that with find() silently picks whichever was authored
  // first, so the wrong line highlights on some segments and nobody can say why.
  const issues = validateItem(item({ segments: [seg({ endMs: 1200 }), seg({ startMs: 900, endMs: 2000 })] }));
  ok(issues.some((i) => /must not overlap/.test(i.message)));
});

test('out-of-order segments are rejected', () => {
  const issues = validateItem(item({
    segments: [seg({ startMs: 2000, endMs: 3000 }), seg({ startMs: 0, endMs: 1000 })],
  }));
  ok(issues.some((i) => /must not overlap/.test(i.message)));
});

test('a segment must have real duration', () => {
  // Zero-length and reversed spans do not throw: the highlight just never lights
  // up, on one line, sometimes.
  ok(validateItem(item({ segments: [seg({ startMs: 500, endMs: 500 })] })).some((i) => /must have duration/.test(i.message)));
  ok(validateItem(item({ segments: [seg({ startMs: 900, endMs: 400 })] })).some((i) => /must have duration/.test(i.message)));
});

test('segment times are non-negative integer milliseconds', () => {
  ok(validateItem(item({ segments: [seg({ startMs: -1 })] })).length > 0);
  ok(validateItem(item({ segments: [seg({ startMs: 1.5 })] })).length > 0);
  ok(validateItem(item({ segments: [seg({ endMs: '1200' as never })] })).length > 0);
});

test('a segment must say which block it voices and what it says', () => {
  ok(validateItem(item({ segments: [seg({ blockId: '' })] })).length > 0);
  ok(validateItem(item({ segments: [seg({ text: '' })] })).length > 0);
  ok(validateItem(item({ segments: 'none' as never })).length > 0);
  ok(validateItem(item({ segments: [null as never] })).length > 0);
});

test('an audio SECTION can carry the same map, and needs a file to map onto', () => {
  deepStrictEqual(
    withSection({
      type: 'audio',
      title: 'T',
      lines: ['Un bon vin blanc'],
      audioRef: 'a/sons-03.mp3',
      segments: [seg()],
    }),
    []
  );
  // Timings with no file point at nothing: the section falls back to TTS while
  // claiming to be seekable.
  const issues = withSection({ type: 'audio', title: 'T', lines: ['x'], segments: [seg()] });
  ok(issues.some((i) => /segments need an audioRef/.test(i.message)));
  // Lines with no segments stay legal — that is the shipped shape.
  deepStrictEqual(withSection({ type: 'audio', title: 'T', lines: ['x'] }), []);
});

/* ─── lesson sections ────────────────────────────────────────────────────── */

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

/* ─── the Den's level cap, lifted ────────────────────────────────────────── */

test('a b1 unit and its lesson are now legal — the Den cap is lifted', () => {
  // Before this, UNIT_ID_RE and LESSON_ID_RE capped at (sons|a1|a2), so a B1
  // lesson could not be represented at all: items and scenarios have always been
  // taggable to c1, but there was nowhere to file the unit that teaches them.
  const b1 = unit({ id: 'b1.01', track: undefined, level: 'b1', seq: 1, lessonIds: ['b1.01.l1'] });
  deepStrictEqual(validateUnit(b1), []);
  const b1Lesson = lesson({ id: 'b1.01.l1', unitId: 'b1.01', level: 'b1' });
  deepStrictEqual(validateLesson(b1Lesson), []);
  deepStrictEqual(validateCorpus(corpus({ units: [b1], lessons: [b1Lesson] })), []);
});

test('every band we author is a legal unit band, and none we do not is', () => {
  // Derived from LEVELS, so this cannot drift from the list above it.
  for (const l of LEVELS) {
    ok(UNIT_ID_RE.test(`${l}.01`), `${l}.01 should be a legal unit id`);
    ok(LESSON_ID_RE.test(`${l}.01.l1`), `${l}.01.l1 should be a legal lesson id`);
  }
  ok(!UNIT_ID_RE.test('c2.01'), 'c2 is not a band we author');
  ok(!UNIT_ID_RE.test('zz.01'));
});

test('unitBand reads the band off the id, and refuses to guess', () => {
  strictEqual(unitBand('sons.03'), 'sons');
  strictEqual(unitBand('b1.01'), 'b1');
  strictEqual(unitBand('b1.01.l1'), 'b1');
  // Null, not a fallback. A caller must not mistake a parse failure for a band.
  strictEqual(unitBand('c2.01'), null);
  strictEqual(unitBand('nonsense'), null);
});

test('a unit in a Den band with no track is rejected — it would render nowhere', () => {
  // unitsInTrack() filters on `track`, and the Den is the only screen that shows
  // units. A trackless sons/a1/a2 unit is published, valid-looking, and invisible.
  const issues = validateUnit(unit({ id: 'a1.04', track: undefined, seq: 4, lessonIds: [] }));
  ok(issues.some((i) => /has no track — it would render in no column/.test(i.message)));
});

test('past a2 a unit must NOT claim a track, and may state its level', () => {
  // There is no b1 column to belong to, so `track` is meaningless there and the
  // type makes it unrepresentable. `level` is the field that carries the band.
  const issues = validateUnit(unit({ id: 'b1.01', track: 'a1', level: 'b1', seq: 1, lessonIds: [] }));
  ok(issues.some((i) => /disagrees with track/.test(i.message)));
  ok(validateUnit(unit({ id: 'b1.01', track: undefined, level: 'a2', seq: 1, lessonIds: [] }))
    .some((i) => /disagrees with level/.test(i.message)));
});

test('a shipped unit with a track and no level still validates', () => {
  // Every unit in the committed seed looks like this. `level` arrived after they
  // were published, so requiring it would mean the corpus on people's phones
  // stops validating. Optional until a publish backfills it.
  const shipped = unit({ id: 'sons.03', track: 'sons', level: undefined });
  deepStrictEqual(validateUnit(shipped), []);
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

/* ─── domains and themes ─────────────────────────────────────────────────── */

test('a well-formed domain and theme validate', () => {
  deepStrictEqual(validateDomain(domain()), []);
  deepStrictEqual(validateTheme(theme()), []);
  ok(isValidDomain(domain()));
  ok(isValidTheme(theme()));
});

test('domain and theme slugs must be lowercase slugs', () => {
  ok(validateDomain(domain({ slug: 'Vie Quotidienne' })).length > 0);
  ok(validateTheme(theme({ slug: 'Au Café' })).length > 0);
  ok(validateTheme(theme({ domain: 'Vie Quotidienne' })).length > 0);
});

test('a theme spans a band RANGE, because a theme is not a level', () => {
  // 'cafe' is orderable at a1 and still worth teaching at b2 — same situation,
  // different language. A single level would force the catalogue to duplicate
  // the theme per band or lie about it.
  deepStrictEqual(validateTheme(theme({ levelRange: ['a1', 'c1'] })), []);
  deepStrictEqual(validateTheme(theme({ levelRange: ['a1', 'a1'] })), [], 'a single-band range is legal');
});

test('an inverted level range is rejected — it selects nothing, silently', () => {
  const issues = validateTheme(theme({ levelRange: ['b2', 'a1'] }));
  ok(issues.some((i) => /levelRange is inverted/.test(i.message)));
});

test('a level range must be made of bands we actually author', () => {
  ok(validateTheme(theme({ levelRange: ['a1', 'c2'] as never })).length > 0, 'c2 is not authored');
  ok(validateTheme(theme({ levelRange: ['zz', 'b1'] as never })).length > 0);
  ok(validateTheme(theme({ levelRange: ['a1'] as never })).length > 0, 'a range needs both ends');
  ok(validateTheme(theme({ levelRange: 'a1' as never })).length > 0);
});

test('theme flags are booleans, and a theme may serve both tracks or neither', () => {
  // Two flags rather than one 'purpose' field precisely so both/neither are
  // representable: 'logement' is exam material AND immigration material.
  deepStrictEqual(validateTheme(theme({ examFlag: true, immigFlag: true })), []);
  deepStrictEqual(validateTheme(theme({ examFlag: false, immigFlag: false })), []);
  ok(validateTheme(theme({ examFlag: 'yes' as never })).length > 0);
  ok(validateTheme(theme({ immigFlag: undefined as never })).length > 0);
});

test('validateDomain and validateTheme never throw on garbage', () => {
  for (const junk of [null, undefined, 42, 'theme', [], true]) {
    ok(Array.isArray(validateDomain(junk)));
    ok(Array.isArray(validateTheme(junk)));
  }
});

/* ─── packs ──────────────────────────────────────────────────────────────── */

test('a well-formed pack validates', () => {
  deepStrictEqual(validatePack(pack()), []);
  ok(isValidPack(pack()));
  strictEqual(packId('a1', 'cafe'), 'pack.a1.cafe');
});

test('a pack id must match pack.<level>.<theme> and agree with its fields', () => {
  // The same rule as Item, and it matters more here: a pack's items are found by
  // filtering on (level, theme), so a pack whose id says a1 and whose fields say
  // a2 collects a different set of items than its name claims.
  ok(validatePack(pack({ id: 'pack.a1' })).length > 0);
  ok(validatePack(pack({ id: 'pack.c2.affaires', level: 'c2' as never })).length > 0, 'c2 is not authored');
  const issues = validatePack(pack({ id: 'pack.a1.cafe', level: 'a2', theme: 'marche' }));
  ok(issues.some((i) => /id level .* disagrees/.test(i.message)));
  ok(issues.some((i) => /id theme .* disagrees/.test(i.message)));
});

test('a pack must state a can-do goal — without one it has no definition of done', () => {
  ok(validatePack(pack({ goal: '' })).some((i) => /goal is required/.test(i.message)));
});

test('modeTargets must name real drills', () => {
  // A target for a drill that does not exist can never be met, so the pack can
  // never be finished and nothing anywhere says why.
  ok(validatePack(pack({ modeTargets: { karaoke: 5 } as never })).some((i) => /unknown drill "karaoke"/.test(i.message)));
  deepStrictEqual(validatePack(pack({ modeTargets: { flashcard: 40, roleplay: 6 } })), []);
});

test('an empty modeTargets is legal, but a zero target is not', () => {
  // {} is a pack that wants nothing yet. `{ dictation: 0 }` is a second way of
  // spelling "not wanted", and two spellings invite code that treats them
  // differently — so absence is the only way to say it.
  deepStrictEqual(validatePack(pack({ modeTargets: {} })), []);
  ok(validatePack(pack({ modeTargets: { dictation: 0 } })).some((i) => /omit the key/.test(i.message)));
  ok(validatePack(pack({ modeTargets: { dictation: -1 } })).length > 0);
  ok(validatePack(pack({ modeTargets: { dictation: 2.5 } })).length > 0);
  ok(validatePack(pack({ modeTargets: [] as never })).length > 0);
});

test('a pack status must be a real content status', () => {
  deepStrictEqual(validatePack(pack({ status: 'published' })), []);
  ok(validatePack(pack({ status: 'nearly' as never })).length > 0);
});

test('validatePack never throws on garbage', () => {
  for (const junk of [null, undefined, 42, 'pack', [], true]) ok(Array.isArray(validatePack(junk)));
});

/* ─── exam tasks and series ──────────────────────────────────────────────── */

test('a well-formed closed task and open task both validate', () => {
  deepStrictEqual(validateExamTask(closedTask()), []);
  deepStrictEqual(validateExamTask(openTask()), []);
  ok(isValidExamTask(closedTask()));
  strictEqual(examTaskId('tcf', '2024a', 'co', 1), 'exam.tcf.2024a.co.001');
  strictEqual(examSeriesId('tcf', '2024a', 1), 'series.tcf.2024a.1');
});

test('an OPEN task without a rubric is rejected — nothing could mark it', () => {
  // The rule from the Examiner spec. A prompt with no rubric does not produce a
  // score, it produces an opinion, and the candidate cannot tell the difference.
  for (const section of ['eo', 'ee'] as const) {
    const t = openTask({ id: `exam.delf.2024a.${section}.001`, section });
    const issues = validateExamTask({ ...t, rubric: undefined });
    ok(issues.some((i) => /MUST have a rubric/.test(i.message)), `${section} without rubric`);
    const noModel = validateExamTask({ ...t, modelAnswer: undefined });
    ok(noModel.some((i) => /MUST have a modelAnswer/.test(i.message)), `${section} without modelAnswer`);
  }
});

test('a CLOSED task must carry the questions it is marked on', () => {
  const issues = validateExamTask({ ...closedTask(), items: undefined });
  ok(issues.some((i) => /MUST have items to mark/.test(i.message)));
});

test('formatVersion is required — a task nobody can date cannot be retired', () => {
  // Boards change formats. A task written to the old one is not wrong, it is
  // stale, and without this field the two are indistinguishable without reading
  // every task. A candidate sat on a stale mock prepares for the wrong paper.
  const issues = validateExamTask({ ...closedTask(), formatVersion: undefined });
  ok(issues.some((i) => /formatVersion is required/.test(i.message)));
});

test('an exam task is banded by SCORE, not by content level', () => {
  // The reason SCORE_BANDS was split out. c2 papers are real even though we
  // author no c2 content; no paper has ever tested 'sons'.
  deepStrictEqual(validateExamTask(closedTask({ level: 'c2' })), []);
  ok(validateExamTask(closedTask({ level: 'sons' as never })).some((i) => /level must be one of/.test(i.message)));
});

test('an exam task needs a clock', () => {
  ok(validateExamTask(closedTask({ timingS: 0 })).some((i) => /without a clock is a worksheet/.test(i.message)));
  ok(validateExamTask(closedTask({ timingS: -30 })).length > 0);
});

test('an exam task id must agree with its family, variant and section', () => {
  const issues = validateExamTask(closedTask({ id: 'exam.tcf.2024a.co.001', family: 'delf', section: 'ce', variant: 'x' }));
  ok(issues.some((i) => /id family .* disagrees/.test(i.message)));
  ok(issues.some((i) => /id section .* disagrees/.test(i.message)));
  ok(issues.some((i) => /id variant .* disagrees/.test(i.message)));
  ok(validateExamTask(closedTask({ id: 'exam.toefl.2024a.co.001' as never })).length > 0, 'unknown family');
});

test('a rubric criterion must be able to move the score', () => {
  // A zero-point criterion is a thing the examiner is asked to judge and then
  // ignore, on the one task where their attention is the entire product.
  ok(validateExamTask(openTask({ rubric: { criteria: [{ key: 'k', label: 'L', maxPoints: 0 }] } }))
    .some((i) => /maxPoints must be an integer >= 1/.test(i.message)));
  ok(validateExamTask(openTask({ rubric: { criteria: [] } }))
    .some((i) => /criteria must be a non-empty array/.test(i.message)));
});

test('duplicate rubric keys are rejected — the total stops adding up', () => {
  const issues = validateExamTask(openTask({
    rubric: { criteria: [
      { key: 'coherence', label: 'Coherence', maxPoints: 5 },
      { key: 'coherence', label: 'Again', maxPoints: 5 },
    ] },
  }));
  ok(issues.some((i) => /duplicates key "coherence"/.test(i.message)));
});

test('an unsatisfiable responseSpec is rejected', () => {
  // min > max means every answer is both too short and too long: the candidate
  // fails whatever they write.
  ok(validateExamTask(openTask({ responseSpec: { kind: 'text', minWords: 200, maxWords: 120 } }))
    .some((i) => /no answer can satisfy it/.test(i.message)));
  ok(validateExamTask(openTask({ responseSpec: { kind: 'audio', minDurationS: 180, maxDurationS: 60 } })).length > 0);
  deepStrictEqual(validateExamTask(openTask({ responseSpec: { kind: 'text', minWords: 120, maxWords: 200 } })), []);
  ok(validateExamTask(openTask({ responseSpec: { kind: 'essay' as never } })).length > 0);
});

test('a scoring map must ascend — thresholds are read in order', () => {
  // Out of order, a reader that returns the first match awards high scorers the
  // low band, and it reads as a marking error rather than a data error.
  const issues = validateExamTask(closedTask({
    scoringMap: [{ band: 'b1', minPoints: 60 }, { band: 'a2', minPoints: 30 }],
  }));
  ok(issues.some((i) => /minPoints must ascend/.test(i.message)));
  deepStrictEqual(
    validateExamTask(closedTask({ scoringMap: [{ band: 'a2', minPoints: 30 }, { band: 'b1', minPoints: 60 }] })),
    []
  );
});

test('a well-formed series validates, and an empty one does not', () => {
  deepStrictEqual(validateExamSeries(series()), []);
  ok(isValidExamSeries(series()));
  ok(validateExamSeries(series({ taskIds: [] })).some((i) => /not a paper/.test(i.message)));
});

test('seriesNo is 1..5 and must agree with the id', () => {
  ok(validateExamSeries(series({ id: 'series.tcf.2024a.6', seriesNo: 6 })).length > 0);
  ok(validateExamSeries(series({ seriesNo: 0 })).length > 0);
  const issues = validateExamSeries(series({ id: 'series.tcf.2024a.1', seriesNo: 2 }));
  ok(issues.some((i) => /disagrees with seriesNo/.test(i.message)));
});

test('a series must not sit the same task twice', () => {
  const issues = validateExamSeries(series({ taskIds: ['exam.tcf.2024a.co.001', 'exam.tcf.2024a.co.001'] }));
  ok(issues.some((i) => /appears twice — a candidate would sit it twice/.test(i.message)));
});

test('exam validators never throw on garbage', () => {
  for (const junk of [null, undefined, 42, 'exam', [], true]) {
    ok(Array.isArray(validateExamTask(junk)));
    ok(Array.isArray(validateExamSeries(junk)));
  }
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

// ── The curriculum spine (CF-17): canDo, themes, prereqUnitIds ──

test('a unit with the full spine validates; each field is optional', () => {
  // Optional-by-design: every unit on phones today has none of these. The
  // publish gate, not the type, is where presence gets enforced post-backfill.
  deepStrictEqual(validateUnit(unit()), []);
  deepStrictEqual(
    validateUnit(
      unit({
        canDo: 'Can distinguish the four nasal vowels by ear',
        themes: ['prononciation'],
        prereqUnitIds: ['sons.02'],
      })
    ),
    []
  );
});

test('malformed spine fields are rejected', () => {
  ok(validateUnit(unit({ canDo: '' })).some((i) => /canDo/.test(i.message)));
  ok(validateUnit(unit({ themes: ['Not A Slug!'] })).some((i) => /themes\[0\]/.test(i.message)));
  ok(validateUnit(unit({ themes: 'cafe' as never })).some((i) => /themes must be an array/.test(i.message)));
  ok(validateUnit(unit({ prereqUnitIds: ['nope'] })).some((i) => /prereqUnitIds\[0\]/.test(i.message)));
});

test('a unit cannot be its own prerequisite', () => {
  ok(
    validateUnit(unit({ id: 'sons.03', prereqUnitIds: ['sons.03'] })).some((i) =>
      /own prerequisite/.test(i.message)
    )
  );
});

test('a dangling prereqUnitId is caught at the corpus level', () => {
  // The failure mode: a gate the learner can never open, because the unit it
  // waits on is in no corpus.
  const c = corpus({ units: [unit({ prereqUnitIds: ['a1.99'] })] });
  ok(validateCorpus(c).some((i) => /requires unknown prerequisite unit "a1\.99"/.test(i.message)));
  // And a prereq that exists (itself, here as a second unit) passes.
  const good = corpus({
    units: [unit(), unit({ id: 'sons.04', track: 'sons', seq: 4, lessonIds: [], prereqUnitIds: ['sons.03'] })],
  });
  deepStrictEqual(validateCorpus(good), []);
});

// ── Lesson.features and Lesson.scenarioId ──

test('lesson features validate as a set drawn from LESSON_FEATURES', () => {
  deepStrictEqual(validateLesson(lesson({ features: ['narrated', 'minimalPairs'] })), []);
  ok(validateLesson(lesson({ features: ['karaoke' as never] })).some((i) => /features\[0\]/.test(i.message)));
  ok(validateLesson(lesson({ features: ['narrated', 'narrated'] })).some((i) => /must not repeat/.test(i.message)));
});

test('a lesson scenarioId must be well-formed and resolve in the corpus', () => {
  ok(validateLesson(lesson({ scenarioId: 'not-a-scenario' })).some((i) => /scenarioId/.test(i.message)));
  deepStrictEqual(validateLesson(lesson({ scenarioId: 'sc.a1.marche.001' })), []);
  // Well-formed but unshipped: the Den would advertise a Roleplay entry point
  // that opens onto nothing.
  const c = corpus({ lessons: [lesson({ scenarioId: 'sc.a1.marche.999' })] });
  ok(validateCorpus(c).some((i) => /references unknown scenario "sc\.a1\.marche\.999"/.test(i.message)));
  deepStrictEqual(validateCorpus(corpus({ lessons: [lesson({ scenarioId: 'sc.a1.marche.001' })] })), []);
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

/* ─── corpus: the new entities ───────────────────────────────────────────── */

test('a v0 corpus with none of the new arrays still validates', () => {
  // THE back-compat rule. The committed seed.json and every cached snapshot on
  // every install is exactly this shape. If it ever fails, a fresh offline
  // install renders nothing and existing installs bin a cache they could use.
  deepStrictEqual(validateCorpus({ version: 1, units: [], lessons: [], items: [] }), []);
  deepStrictEqual(validateCorpus(corpus()), []);
  deepStrictEqual(validateCorpus(EMPTY_CORPUS), []);
});

test('a corpus carrying the whole catalogue validates', () => {
  deepStrictEqual(
    validateCorpus(corpus({
      domains: [domain()],
      themes: [theme()],
      packs: [pack()],
      examTasks: [closedTask()],
      examSeries: [series()],
    })),
    []
  );
});

test('a theme pointing at an unknown domain is caught', () => {
  // It does not crash. The theme is filed under nothing, never appears in the
  // picker, and no error is raised between authoring it and not seeing it.
  const issues = validateCorpus(corpus({ domains: [domain()], themes: [theme({ domain: 'travail' })] }));
  ok(issues.some((i) => /theme "cafe" references unknown domain "travail"/.test(i.message)));
});

test('a pack pointing at an unknown theme is caught', () => {
  const issues = validateCorpus(corpus({ themes: [theme()], packs: [pack({ id: 'pack.a1.marche', theme: 'marche' })] }));
  ok(issues.some((i) => /pack "pack\.a1\.marche" references unknown theme "marche"/.test(i.message)));
});

test('a pack outside its theme’s declared level range is caught', () => {
  // Two rows we authored, contradicting each other: the pack would generate
  // content at a band the catalogue says the theme does not reach.
  const issues = validateCorpus(corpus({
    themes: [theme({ levelRange: ['a1', 'a2'] })],
    packs: [pack({ id: 'pack.c1.cafe', level: 'c1' })],
  }));
  ok(issues.some((i) => /is at level "c1" but theme "cafe" declares levelRange a1\.\.a2/.test(i.message)));
  // In range is silent.
  deepStrictEqual(
    validateCorpus(corpus({ themes: [theme({ levelRange: ['a1', 'c1'] })], packs: [pack({ id: 'pack.b2.cafe', level: 'b2' })] })),
    []
  );
});

test('an empty catalogue is not "everything is dangling"', () => {
  // A v0 corpus has no themes at all. Reporting every pack as pointing at an
  // unknown theme would make the back-compat gate unpassable for no reason.
  deepStrictEqual(validateCorpus(corpus({ packs: [pack()] })), []);
  deepStrictEqual(validateCorpus(corpus({ themes: [theme()] })), []);
});

test('a series pointing at an unknown task is caught', () => {
  // A mock exam that is shorter than it claims, and the candidate cannot tell.
  const issues = validateCorpus(corpus({
    examTasks: [closedTask()],
    examSeries: [series({ taskIds: ['exam.tcf.2024a.co.001', 'exam.tcf.2024a.ce.009'] })],
  }));
  ok(issues.some((i) => /series "series\.tcf\.2024a\.1" references unknown exam task "exam\.tcf\.2024a\.ce\.009"/.test(i.message)));
});

test('duplicate ids are caught for every new entity', () => {
  ok(validateCorpus(corpus({ packs: [pack(), pack()], themes: [theme()] }))
    .some((i) => /duplicate pack id/.test(i.message)));
  ok(validateCorpus(corpus({ examTasks: [closedTask(), closedTask()] }))
    .some((i) => /duplicate exam task id/.test(i.message)));
  ok(validateCorpus(corpus({ examTasks: [closedTask()], examSeries: [series(), series()] }))
    .some((i) => /duplicate exam series id/.test(i.message)));
  // Domains and themes key on slug, and the failure is identical: the later row
  // wins the lookup, so a theme silently points at a domain nobody meant.
  ok(validateCorpus(corpus({ domains: [domain(), domain()] }))
    .some((i) => /duplicate domain slug/.test(i.message)));
  ok(validateCorpus(corpus({ domains: [domain()], themes: [theme(), theme()] }))
    .some((i) => /duplicate theme slug/.test(i.message)));
});

test('an id may not be shared by two different KINDS of entity', () => {
  // Prefixes make this unlikely, not impossible, and "unlikely" should not be
  // defended by nothing: anything building one lookup map over all content —
  // the obvious thing to write — silently loses one of the two.
  const clash = validateCorpus(corpus({
    examTasks: [closedTask()],
    examSeries: [series({ id: 'series.tcf.2024a.1', taskIds: ['exam.tcf.2024a.co.001'] })],
    packs: [pack({ id: 'series.tcf.2024a.1' as never })],
  }));
  ok(clash.some((i) => /is used by more than one kind of entity/.test(i.message)));
});

test('the new entities are validated, not merely listed', () => {
  // The corpus must run each entity's own validator, or a corpus of broken rows
  // passes as long as the references happen to line up.
  ok(validateCorpus(corpus({ domains: [domain()], themes: [theme({ levelRange: ['c1', 'a1'] })] }))
    .some((i) => /levelRange is inverted/.test(i.message)));
  ok(validateCorpus(corpus({ examTasks: [{ ...openTask(), rubric: undefined }] }))
    .some((i) => /MUST have a rubric/.test(i.message)));
  ok(validateCorpus(corpus({ themes: [theme()], packs: [pack({ goal: '' })] }))
    .some((i) => /goal is required/.test(i.message)));
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
