// i18n table guard (audit §8-1). Runs on plain Node (types are stripped natively):
//   npm run test:i18n
// strings.ts has only type-only imports, so it loads without the RN runtime.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { T, greetSlot } from './strings.ts';

const collectKeys = (obj: object, prefix = ''): string[] =>
  Object.entries(obj).flatMap(([k, v]) => {
    const path = prefix ? `${prefix}.${k}` : k;
    // Recurse into plain nested objects (levelNames, trackDescs…) but not arrays.
    if (v && typeof v === 'object' && !Array.isArray(v)) return [path, ...collectKeys(v, path)];
    return [path];
  });

test('fr and en tables have identical key sets', () => {
  deepStrictEqual(collectKeys(T.fr).sort(), collectKeys(T.en).sort());
});

test('parallel arrays have equal lengths in both languages', () => {
  const arrays: (keyof typeof T.fr)[] = [
    'obSteps', 'alarmChips', 'expTitles', 'expSubs', 'paceSubs',
    'notifLabels', 'skills', 'weakMeta', 'playlistMeta', 'playlistLabels',
    'examMeta', 'errorIssues', 'dayLetters', 'dlCats', 'dlSubs', 'chatSuggs', 'errorTypes',
  ];
  for (const key of arrays) {
    const fr = T.fr[key] as unknown[];
    const en = T.en[key] as unknown[];
    ok(Array.isArray(fr) && Array.isArray(en), `${key} must be an array in both tables`);
    strictEqual(fr.length, en.length, `${key} length differs: fr=${fr.length} en=${en.length}`);
  }
});

test('greetSlot maps every hour to the right bucket', () => {
  const expected = (h: number) =>
    h >= 5 && h < 12 ? 'morning'
    : h >= 12 && h < 18 ? 'afternoon'
    : h >= 18 && h < 23 ? 'evening'
    : h >= 23 || h < 2 ? 'late'
    : 'early';
  for (let h = 0; h < 24; h++) strictEqual(greetSlot(h), expected(h), `hour ${h}`);
  // every slot has a greeting in both languages
  for (const lang of ['fr', 'en'] as const) {
    for (const slot of ['morning', 'afternoon', 'evening', 'late', 'early'] as const) {
      ok(T[lang].greets[slot]?.length > 0, `${lang}.greets.${slot} missing`);
    }
  }
});

test('known fixed-length arrays match their consumers', () => {
  for (const lang of ['fr', 'en'] as const) {
    strictEqual(T[lang].obSteps.length, 10, `${lang}.obSteps drives the 10-step wizard`);
    strictEqual(T[lang].alarmChips.length, 4, `${lang}.alarmChips drives 4 alarm presets`);
    strictEqual(T[lang].dayLetters.length, 7, `${lang}.dayLetters drives 7 weekday dots`);
    strictEqual(T[lang].notifLabels.length, 3, `${lang}.notifLabels drives 3 toggles`);
  }
});
