// Guards a1.01.l1 "Les salutations" — the FIRST lesson a new learner ever
// opens, rebuilt as a full mission journey on the sons.02/sons.03 standard.
// Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts (validateCorpus); this file pins the intent specific
// to THIS lesson, so a later edit that drops the story opener, thins the exam,
// strips the French mission subtitles, or slips an em dash into the copy goes
// red here rather than in front of a beginner.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateLesson, type Lesson } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; lessonIds: string[] }[];
  lessons: Lesson[];
  items: { id: string; drills: string[] }[];
};

const L = seed.lessons.find((l) => l.id === 'a1.01.l1');

test('a1.01.l1 exists and is well-formed', () => {
  ok(L, 'a1.01.l1 is present in the seed');
  strictEqual(validateLesson(L).length, 0);
  strictEqual(L!.unitId, 'a1.01');
  strictEqual(L!.level, 'a1');
  strictEqual(L!.tag, 'A1 · LEÇON 01');
});

test('the a1.01 unit links the lesson (reachable from the Den)', () => {
  const unit = seed.units.find((u) => u.id === 'a1.01');
  ok(unit, 'a1.01 unit exists');
  ok(unit!.lessonIds.includes('a1.01.l1'), 'unit lists the lesson');
});

test('the overview block is authored (the den overview page has real copy)', () => {
  const o = L!.overview;
  ok(o, 'overview is authored');
  ok(o!.titleEn.length > 0 && o!.introFr.length > 0);
  ok(o!.minutes >= 1 && o!.minutes <= 180);
  ok(o!.difficulty >= 1 && o!.difficulty <= 5);
  // This is lesson one of the whole app: it must not present as hard.
  ok(o!.difficulty <= 2, `first lesson difficulty should stay gentle, got ${o!.difficulty}`);
});

test('the journey opens on a story and closes quiz then roundup', () => {
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[0], 'story', 'a learner meets the stakes before any rule');
  strictEqual(types[types.length - 1], 'roundup', 'the badge closes the journey');
  strictEqual(types[types.length - 2], 'quiz', 'the exam sits just before the badge');
});

test('the journey is genuinely multimodal', () => {
  const types = new Set(L!.sections.map((s) => s.type));
  // The mission mechanics a beginner lesson has to exercise: read it, hear it,
  // say it, spell it, play it back in a real conversation, and review it.
  for (const t of [
    'story',
    'goals',
    'cardDeck',
    'tapTable',
    'vocabThemes',
    'flashcards',
    'listening',
    'scenario',
    'reading',
    'dictation',
    'reviewDeck',
    'progressCheck',
    'practice',
    'quiz',
    'roundup',
  ] as const) {
    ok(types.has(t), `section type ${t} present`);
  }
  ok(types.size >= 15, `expected a rich mission mix, got ${types.size} types`);
});

test('difficulty ramps: the first check comes after the teaching, not before', () => {
  const types = L!.sections.map((s) => s.type);
  const firstQuiz = types.indexOf('quiz');
  const firstTeaching = Math.min(
    ...['cardDeck', 'tapTable', 'vocabThemes'].map((t) => types.indexOf(t)).filter((i) => i >= 0)
  );
  ok(firstQuiz > firstTeaching, 'the learner is taught before being tested');
  // And production (speaking, roleplay) comes after recognition (cards, quiz).
  const speak = L!.sections.findIndex((s) => s.type === 'practice' && s.skill === 'speak');
  ok(speak > firstQuiz, 'speaking is asked for only after an early written win');
});

test('the final exam is substantial and every question teaches', () => {
  const quizzes = L!.sections.filter((s): s is Extract<Lesson['sections'][number], { type: 'quiz' }> => s.type === 'quiz');
  ok(quizzes.length >= 2, 'an early confidence check plus the final exam');
  const final = quizzes[quizzes.length - 1];
  ok(final.questions.length >= 10, `at least 10 final questions, got ${final.questions.length}`);
  for (const q of final.questions) {
    strictEqual(new Set(q.opts).size, q.opts.length, `options distinct for "${q.q}"`);
    ok(q.correct >= 0 && q.correct < q.opts.length, `correct in range for "${q.q}"`);
    // Feedback must teach, not just mark: this is the design rule that keeps a
    // wrong answer from being a dead end.
    ok(typeof q.why === 'string' && q.why.length > 0, `"${q.q}" explains its answer`);
  }
});

test('every mission carries its French subtitle and nearly all narrate', () => {
  const missing = L!.sections.filter((s) => !s.frSub);
  strictEqual(missing.length, 0, `sections without frSub: ${missing.map((s) => s.type).join(', ')}`);
  const content = L!.sections.filter((s) => s.type !== 'quiz');
  const spoken = content.filter((s) => typeof s.say === 'string' && s.say.length > 0);
  ok(spoken.length >= content.length - 2, `${spoken.length}/${content.length} missions narrated`);
});

test('practice and dictation drill only resolvable corpus items', () => {
  const known = new Map(seed.items.map((i) => [i.id, i]));
  for (const s of L!.sections) {
    if (s.type !== 'practice' && s.type !== 'dictation') continue;
    ok(s.itemIds.length > 0, `${s.type} "${s.title}" names items`);
    for (const id of s.itemIds) {
      ok(known.has(id), `${s.type} item ${id} exists`);
      ok(L!.itemIds.includes(id), `${s.type} item ${id} is declared on the lesson`);
    }
    // A dictée whose items cannot be dictated is a dead mission.
    if (s.type === 'dictation') {
      for (const id of s.itemIds) {
        ok(known.get(id)!.drills.includes('dictation'), `${id} carries the dictation drill`);
      }
    }
    // Likewise a speak mission whose items have no voice drill.
    if (s.type === 'practice' && s.skill === 'speak') {
      for (const id of s.itemIds) {
        ok(known.get(id)!.drills.includes('voiceflash'), `${id} carries the voiceflash drill`);
      }
    }
  }
});

test('the lesson teaches the tu/vous split it promises', () => {
  const blob = JSON.stringify(L).toLowerCase();
  for (const must of ['bonjour', 'bonsoir', 'salut', 'au revoir', 'merci', 'ça va', 'vous', 'enchanté']) {
    ok(blob.includes(must), `the core expression "${must}" is taught`);
  }
  ok(L!.grammarIntroduced?.some((g) => /tu.*vous/i.test(g)), 'the register split is declared as introduced grammar');
});

test('the authored copy carries no em dash and no honest/honesty (house style)', () => {
  const strings: string[] = [];
  const walk = (v: unknown) => {
    if (typeof v === 'string') strings.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(L);
  const emDash = strings.filter((s) => s.includes('—'));
  strictEqual(emDash.length, 0, `em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
  const honest = strings.filter((s) => /honest/i.test(s));
  strictEqual(honest.length, 0, `honest/honesty found in: ${honest.slice(0, 3).join(' | ')}`);
});
