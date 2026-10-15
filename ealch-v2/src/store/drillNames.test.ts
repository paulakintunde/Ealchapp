// Only `npx tsc` catches a NEW Activity without a name, through strings.ts's Record<Activity, string>. This test is excluded from tsc (tsconfig **/*.test.ts) and checks the 13 ids listed here.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { T } from '../i18n/strings.ts';

const ALL = [
  'lesson', 'flashcards', 'voiceflash', 'sentence', 'roleplay', 'dictation', 'speak',
  'player', 'review', 'placement', 'narrated', 'exam', 'exam-review',
] as const;

test('ALL lists 13 activities', () => {
  strictEqual(ALL.length, 13);
});

test('every activity has a non-id FR and EN drill name', () => {
  for (const lang of ['fr', 'en'] as const) {
    const names = T[lang].drillNames as Record<string, string>;
    for (const id of ALL) {
      ok(typeof names[id] === 'string' && names[id].length > 0, `${lang}.${id} empty`);
      ok(names[id] !== id, `${lang}.${id} is the raw id`);
    }
  }
});
