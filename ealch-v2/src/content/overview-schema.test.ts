// The Lesson.overview contract: optional as a whole, strict when present.
// The den overview page hides what is absent and never invents numbers, so
// the validator is what keeps an authored block renderable.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateLesson, type Lesson } from './schema.ts';

const base: Lesson = {
  id: 'sons.01.l1',
  unitId: 'sons.01',
  seq: 1,
  title: 'T',
  level: 'sons',
  tag: 'SONS · LEÇON 01',
  intro: 'An intro.',
  sections: [
    { type: 'teach', title: 'A', body: 'b' },
    { type: 'quiz', title: 'Q', questions: [{ q: 'q', opts: ['a', 'b'], correct: 0 }] },
  ],
  itemIds: [],
  version: 1,
};

test('a lesson without overview stays valid', () => {
  strictEqual(validateLesson(base).length, 0);
});

test('a complete overview passes', () => {
  const l = {
    ...base,
    overview: { titleEn: 'The Alphabet', subFr: "L'alphabet", introFr: 'Le vrai son de chaque lettre.', minutes: 45, difficulty: 1 as const, glyph: 'Aa' },
  };
  strictEqual(validateLesson(l).length, 0);
});

test('overview field rules reject bad blocks', () => {
  const bad = (overview: unknown) => validateLesson({ ...base, overview } as unknown as Lesson).length > 0;
  ok(bad({ titleEn: '', introFr: 'x', minutes: 45, difficulty: 1 }), 'empty titleEn');
  ok(bad({ titleEn: 'x', introFr: '', minutes: 45, difficulty: 1 }), 'empty introFr');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 0, difficulty: 1 }), 'minutes below 1');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 200, difficulty: 1 }), 'minutes above 180');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 45, difficulty: 0 }), 'difficulty below 1');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 45, difficulty: 6 }), 'difficulty above 5');
  ok(bad({ titleEn: 'x', introFr: 'y', minutes: 45, difficulty: 1.5 }), 'difficulty not an integer');
});

test('frSub is accepted on sections', () => {
  const l = {
    ...base,
    sections: [{ type: 'teach', title: 'A', body: 'b', frSub: 'La grande idée' }, ...base.sections.slice(1)],
  } as Lesson;
  strictEqual(validateLesson(l).length, 0);
});
