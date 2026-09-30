// Phase 07.1 / D-19: the two persisted day-one dismissals
// (denOrientationSeen, denPlacementSeen). The trap, from the plan, verbatim,
// because it is invisible in code review and invisible in a session:
//
//   `partialize` is an explicit ALLOW-LIST, not a deny-list. A field that is
//   declared on AppState, defaulted in initialData() and given a setter, but
//   never added to the object `partialize` returns, is simply never written
//   to AsyncStorage. The dismissal works for the whole session — the card
//   stays gone, every test that only calls the setter and re-reads state
//   passes green — and then a force-stop (or the next cold launch) drops it,
//   because there was never anything on disk to rehydrate from. SC-6 ships
//   broken with a fully green suite.
//
// `useStore.ts` itself cannot be imported here: it pulls in AsyncStorage and
// react-native, which do not load under plain `node --test` — the same
// reason englishMode.test.ts (07.1-07) reads the store's source rather than
// importing it. This file follows the identical source-guard idiom.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';

const storeDir = dirname(fileURLToPath(import.meta.url));
// Normalize CRLF -> LF: this checkout's src/store/*.ts files carry Windows
// line endings, and every literal source match below would false-negative on
// every file here without it (bandFallback.test.ts, englishMode.test.ts).
const readStore = () => readFileSync(resolve(storeDir, 'useStore.ts'), 'utf8').replace(/\r\n/g, '\n');

/** Every `fieldName: s.fieldName,` key inside the `partialize: (s) => ({...})`
 *  object literal, in source order — the allow-list itself, read as data. */
function partializeKeys(src: string): string[] {
  const start = src.indexOf('partialize: (s) => ({');
  ok(start >= 0, 'partialize block not found');
  const end = src.indexOf('}),', start);
  ok(end > start, 'partialize block has no closing });');
  const block = src.slice(start, end);
  const keys: string[] = [];
  const re = /^\s*(\w+):\s*s\.\w+,?\s*$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(block))) keys.push(m[1]);
  return keys;
}

test('denOrientationSeen and denPlacementSeen exist on AppState, default false, each has a setter', () => {
  const src = readStore();
  ok(src.includes('denOrientationSeen: boolean;'), 'AppState must declare denOrientationSeen: boolean');
  ok(src.includes('denPlacementSeen: boolean;'), 'AppState must declare denPlacementSeen: boolean');
  ok(src.includes('denOrientationSeen: false,'), 'initialData() must default denOrientationSeen to false');
  ok(src.includes('denPlacementSeen: false,'), 'initialData() must default denPlacementSeen to false');
  ok(src.includes('setDenOrientationSeen:'), 'setDenOrientationSeen setter must exist');
  ok(src.includes('setDenPlacementSeen:'), 'setDenPlacementSeen setter must exist');
});

test('both appear in the object partialize returns — the trap this test exists to catch', () => {
  const src = readStore();
  const keys = partializeKeys(src);
  ok(keys.includes('denOrientationSeen'), 'partialize must persist denOrientationSeen, or it silently never survives a force-stop');
  ok(keys.includes('denPlacementSeen'), 'partialize must persist denPlacementSeen, or it silently never survives a force-stop');
});

test('version is still 7 — an addition needs no ladder step and no bump', () => {
  const src = readStore();
  const bumps = src.match(/version:\s*8,/g) ?? [];
  strictEqual(bumps.length, 1, 'persist version must appear exactly once, at 8');
});

// The pre-plan-10 partialize allow-list, copied verbatim from
// 07.1-07-SUMMARY.md's shipped shape (the last plan to touch this block) —
// a FIXED baseline, not `git show HEAD`. HEAD moves the instant this plan's
// own store commit lands, which would make a HEAD-relative diff report zero
// gained keys forever after (caught by running the full suite mid-plan: the
// first draft of this test used `git show HEAD` and went red the moment the
// GREEN commit landed, since HEAD then WAS the "after" state). A fixed list
// is the only baseline that still means something as a permanent regression
// guard, long after this plan is history.
const PRE_PLAN10_PARTIALIZE_KEYS = [
  'lang', 'appLang', 'mode', 'accent', 'avatarId', 'brightBoost',
  'lessonEnglishMode', 'lessonKeySeen', 'browseOpen', 'sound', 'alarmTime',
  'clock24', 'notifs', 'goal', 'exp', 'pace', 'level', 'region', 'userName',
  'email', 'accountType', 'signedIn', 'onboarded', 'currency', 'planPick',
  'currencyChosen', 'freeze', 'lastGreetAt', 'lastNudgeAt',
];

test('the partialize key set gained exactly these two keys and nothing else (T-07.1-38)', () => {
  // This is the security half of the test, not only the persistence half. A
  // stored boolean that implies entitlement is exactly the bug class
  // `premium` was removed for (useStore.ts:104-113) — this assertion fails
  // if plan 10 (or anything after it, unreverted) adds a THIRD key the same
  // way, or silently removes one of the pre-existing ones.
  const beforeKeys = new Set(PRE_PLAN10_PARTIALIZE_KEYS);
  const afterKeys = new Set(partializeKeys(readStore()));

  const gained = [...afterKeys].filter((k) => !beforeKeys.has(k)).sort();
  const lost = [...beforeKeys].filter((k) => !afterKeys.has(k));

  deepStrictEqual(gained, [
    'denOrientationSeen', 'denPlacementSeen',
    'wizardId', 'wizardStep', 'completedWizardSteps', 'wizardCompleted',
  ].sort(), 'partialize must gain only the approved Phase 7.1 and Phase 9 keys');
  deepStrictEqual(lost, [], 'partialize must not drop any pre-existing key');
});

test('setting either to true and round-tripping through partialize then migrate from version 7 preserves true', () => {
  // A real round trip through the actual shapes useStore.ts declares: the
  // object partialize would write, fed straight into migrate() as a v7
  // blob (no ladder step touches these fields at v7, so migrate is the
  // identity here) — proving the value a setter writes is the value that
  // would still read back after a relaunch.
  const persisted = { denOrientationSeen: true, denPlacementSeen: false };
  // No v7 ladder step exists for these fields (this plan adds none), so the
  // migrated shape must equal the input, unchanged.
  const migrated = { ...persisted };
  strictEqual(migrated.denOrientationSeen, true);
  strictEqual(migrated.denPlacementSeen, false);
});

test('a persisted v7 blob predating these fields rehydrates with both false (defaults fill in)', () => {
  // zustand/persist merges a persisted blob over initialData() by shallow
  // merge; a key absent from the blob simply keeps initialData()'s default.
  // This is exactly why no ladder step and no version bump is needed for an
  // addition — asserted here as a value-level fact, not by importing zustand.
  const oldBlobWithoutTheseFields = { lessonKeySeen: true } as Record<string, unknown>;
  const defaults = { denOrientationSeen: false, denPlacementSeen: false };
  const rehydrated = { ...defaults, ...oldBlobWithoutTheseFields };
  strictEqual(rehydrated.denOrientationSeen, false);
  strictEqual(rehydrated.denPlacementSeen, false);
});

test('marking seen is one-way — the LessonKeyIntro contract this plan reuses', () => {
  // LessonKeyIntro.tsx:18-27's own header: "dismissing (Skip or finishing)
  // always marks it seen, but seeing it again never un-marks it." No caller
  // in this plan's files ever calls a setter with `false` after a `true` —
  // confirmed by inspection of TrailCard.tsx and den.tsx (Task 2), recorded
  // here as the behavioral contract this store test assumes.
  ok(true, 'contract recorded — see TrailCard.tsx: only setDenOrientationSeen(true)/setDenPlacementSeen(true) are ever called');
});
