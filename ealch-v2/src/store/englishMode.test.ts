// Phase 07.1 / D-42: the v6 → v7 migration that replaces the old boolean
// `lessonEnglish` with the three-valued `lessonEnglishMode` (content/
// english.logic.ts). Three ways this ships broken and green, from the plan,
// verbatim, because each is invisible in code review:
//
//   1. Forgetting to add `lessonEnglishMode` to `partialize` — it will not
//      persist, silently. Works in a session, resets after force-stop.
//   2. Forgetting to remove `lessonEnglish` from `partialize` — the dead key
//      keeps being written and the two can disagree.
//   3. Mapping `true` to `'onDemand'`. Today's `true` prints the translation
//      under every line. That is `'both'`. This is the one that gets shipped.
//
// `useStore.ts` itself cannot be imported here: it pulls in AsyncStorage and
// react-native (Platform, and transitively useProgress.ts's AppState/
// notifications), which do not load under plain `node --test` — proved by
// probing every one of its top-level imports individually; `notifications.ts`
// and `useProgress.ts` both throw "Unexpected token 'typeof'" the moment
// their own react-native imports are parsed. This is the exact reason
// useProgress.ts's own header comment gives for keeping its migration MATH in
// progress.logic.ts, a plain module, and only wiring it into the zustand +
// AsyncStorage shell: "so it stays testable under `node --test`". This file
// follows the same split — english.logic.test.ts unit-tests the pure mapping
// function (migrateLessonEnglishMode) useStore.ts's migrate ladder actually
// calls, and THIS file is the source guard that pins the store's shape
// (partialize allow-list, version, setter, AppState field) the way
// bandFallback.test.ts and drillGateWiring.test.ts already do for app/*.tsx
// files that are equally unimportable here.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { migrateLessonEnglishMode } from '../content/english.logic.ts';

const storeDir = dirname(fileURLToPath(import.meta.url));
// Normalize CRLF -> LF: this checkout's src/store/*.ts files carry Windows
// line endings, and the literal source matches below would false-negative on
// every file here without it (bandFallback.test.ts, drillGateWiring.test.ts).
const readStore = () => readFileSync(resolve(storeDir, 'useStore.ts'), 'utf8').replace(/\r\n/g, '\n');

test('the round trip: set true, migrate from v6, read the mapped mode', () => {
  // A real round trip through the actual function useStore.ts's migrate
  // ladder calls — the store itself cannot be constructed here, but the
  // function it delegates to can, which is the whole point of the split.
  const persistedV6 = { lessonEnglish: true } as { lessonEnglish?: boolean };
  const mode = migrateLessonEnglishMode(persistedV6.lessonEnglish);
  strictEqual(mode, 'both');
});

test('AppState carries lessonEnglishMode, not the old boolean', () => {
  const src = readStore();
  ok(src.includes('lessonEnglishMode: EnglishMode;'), 'AppState must declare lessonEnglishMode: EnglishMode');
  ok(!src.includes('lessonEnglish: boolean;'), 'the old boolean field must be gone, not left beside it');
});

test('the default is fr — the old default was false', () => {
  const src = readStore();
  ok(src.includes("lessonEnglishMode: 'fr' as EnglishMode"), "initialData() must default lessonEnglishMode to 'fr'");
});

test('the setter is setLessonEnglishMode; setLessonEnglish is gone', () => {
  const src = readStore();
  ok(src.includes('setLessonEnglishMode:'), 'the three-valued setter must exist');
  ok(!/setLessonEnglish[:(]/.test(src.replace(/setLessonEnglishMode/g, '')), 'the old two-valued setter must not survive');
});

test('version is 7 and the v6 -> v7 step maps true to both, false to fr, and deletes the old key', () => {
  const src = readStore();
  ok(src.includes('version: 9,'), 'persist version must be 9 after the placement checkpoint migration');
  ok(/if \(version <= 6\) \{[\s\S]{0,200}migrateLessonEnglishMode\(s\.lessonEnglish as boolean \| undefined\)/.test(src),
    'the v6 -> v7 branch must call migrateLessonEnglishMode on the old field');
  ok(/if \(version <= 6\) \{[\s\S]{0,300}delete s\.lessonEnglish;/.test(src),
    'the v6 -> v7 branch must delete the old field so the two can never disagree');
});

test('partialize carries lessonEnglishMode and not the dead lessonEnglish key (the two silent-break modes)', () => {
  const src = readStore();
  const partializeBlock = src.slice(src.indexOf('partialize: (s) => ({'), src.indexOf('}),', src.indexOf('partialize: (s) => ({')));
  ok(partializeBlock.includes('lessonEnglishMode: s.lessonEnglishMode,'), 'partialize must persist lessonEnglishMode (break mode 1)');
  ok(!partializeBlock.includes('lessonEnglish: s.lessonEnglish,'), 'partialize must not still write the dead key (break mode 2)');
});

test('every v0 -> v6 ladder step is unchanged, only v6 -> v7 is new', () => {
  const src = readStore();
  for (const marker of [
    's.lang = deviceLang();',
    "s.userName === 'Maya'",
    'delete s.streak;',
    'delete s.reviewCleared;',
    'delete s.premium;',
  ]) {
    ok(src.includes(marker), `existing migration step "${marker}" must survive untouched`);
  }
});

test('migrateLessonEnglishMode itself: the mapping direction, pinned by value not by source text', () => {
  strictEqual(migrateLessonEnglishMode(true), 'both');
  strictEqual(migrateLessonEnglishMode(false), 'fr');
  strictEqual(migrateLessonEnglishMode(undefined), 'fr');
});

test('nothing in the ladder ever assigns onDemand — it has no old value', () => {
  const src = readStore();
  ok(!/lessonEnglishMode = 'onDemand'/.test(src), "the migration must never hardcode 'onDemand'");
});
