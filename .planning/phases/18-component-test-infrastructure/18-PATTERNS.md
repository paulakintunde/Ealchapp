# Phase 18: Component Test Infrastructure - Pattern Map

**Mapped:** 2026-09-21
**Files analyzed:** 5 (2 create-config, 1 create-test, 2 modify)
**Analogs found:** 5 / 5 (all role-match or cross-angle match — no exact "component test config" analog exists anywhere in this repo, confirmed by RESEARCH.md; the closest available angle was used for each)

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|-----------------|---------------|
| `ealch-v2/jest.config.js` | config | N/A (build/test config) | none in-repo; `ealch-v2/babel.config.js` (only sibling config file, for module.exports shape/comment style) | no-analog (config-shape only) |
| `ealch-v2/jest.setup.ts` | test-setup / mock-boundary | event-driven (module mock registration) | none in-repo (first mock-boundary file); pattern taken from RESEARCH.md Pattern 3, informed by the real shape of `src/services/sound.ts` and `src/services/supabase.ts` | no-analog (shape from research + real service signatures) |
| `ealch-v2/__tests__/settings.test.tsx` | test (component-render) | request-response (render → query → interact → assert) | `ealch-v2/src/services/examAttemptWiring.test.ts` (for house testing philosophy: explicit assertions, no snapshots, `describe`/`test` naming, one behavior per test) + `ealch-v2/app/settings.tsx` (the screen under test, for exact prop/selector names) | role-match (philosophy) / exact (subject) |
| `ealch-v2/package.json` | config | N/A | `ealch-v2/package.json` itself, `scripts` block lines 50-58 (existing `test`/`test:i18n` pattern to extend, not collide with) | exact |
| `ealch-v2/src/components/ui.tsx` (`Toggle`, modify) | component | request-response (prop-driven render) | same file, `FocusHeader`'s "Close" `Press` button, lines 271-290 (existing in-repo example of explicit `accessibilityRole` + `accessibilityLabel` on a `Press`-based control) | exact (same file, same primitive) |

## Pattern Assignments

### `ealch-v2/jest.config.js` (config, create)

**Analog:** No in-repo Jest config exists (confirmed by RESEARCH.md: no `jest.config*` anywhere in the repo; `ealch-admin` also has no Jest setup). Use RESEARCH.md's verified Code Examples section directly — it was built from `jest-expo@57.0.5`'s own `jest-preset.js` (read from the extracted tarball) plus this repo's real `tsconfig.json` path alias.

**Module resolution pattern to copy** — the `@/*` alias must match `ealch-v2/tsconfig.json` lines 14-18 exactly:
```json
"paths": { "@/*": ["./src/*"] }
```
So `jest.config.js`'s `moduleNameMapper` must be:
```javascript
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
},
```
Note: `app/settings.tsx` imports `'@/components/ui'`, `'@/store/useStore'`, etc. — all resolve under `src/`, confirmed by reading `app/settings.tsx` lines 1-23 directly. This mapping is load-bearing; get it wrong and every import in the test's dependency graph fails to resolve.

**Base shape** (per RESEARCH.md, verified against the installed `jest-expo@57.0.5` tarball):
```javascript
/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['<rootDir>/__tests__/**/*.test.tsx'],
};
```
**Caveat carried over from RESEARCH.md (Open Question 1 / Assumption A1):** the exact Jest 30 config key for module-scope `jest.mock()` registration (`setupFilesAfterEnv` vs `setupFilesAfterEach`) was not independently re-verified this session — confirm with `npx jest --showConfig` after install if mocks in `jest.setup.ts` don't appear to take effect.

**Style reference** (`ealch-v2/babel.config.js`, full file, 10 lines) — the only sibling root-level config file in this repo, for CommonJS `module.exports` conventions already used in this project:
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // react-native-worklets/reanimated must be last
      'react-native-worklets/plugin',
    ],
  };
};
```
Takeaway: this repo's root configs are plain CommonJS, terse, with a one-line comment explaining any non-obvious ordering constraint — `jest.config.js` should match that terseness (no elaborate JSDoc beyond the `@type` pragma already shown in the RESEARCH.md example).

---

### `ealch-v2/jest.setup.ts` (test-setup / mock-boundary, create)

**Analog:** No in-repo precedent. Mock shapes below are grounded in the **real, currently-installed** service files (read directly this session), not just RESEARCH.md's illustrative example — use these exact export shapes so the mocks type-check against the real modules.

**`sound` service — real export shape** (`ealch-v2/src/services/sound.ts` lines 144-166):
```typescript
export const sound = {
  play(cue: Cue) { /* ... */ },
  unlock() { /* ... */ },
};
```
So the D-05 mock must match this exact two-method shape (not a default export, not a class):
```typescript
jest.mock('@/services/sound', () => ({
  sound: { play: jest.fn(), unlock: jest.fn() },
}));
```
Note: `Press` (which `Toggle` wraps) calls `sound.unlock()` then `sound.play(cue)` on every press (`ealch-v2/src/components/ui.tsx` lines 28-31) — both methods on the mock will be invoked by the D-02 interaction test, so both must exist as `jest.fn()`, not just `play`.

**`supabase` service — real export shape** (`ealch-v2/src/services/supabase.ts` lines 1-29): a function, not an object —
```typescript
export function supabase(): SupabaseClient | null { /* lazy, returns null when unconfigured */ }
```
Mock must preserve the "function returning null" shape:
```typescript
jest.mock('@/services/supabase', () => ({
  supabase: () => null,
}));
```
This mirrors the app's own real "offline mode" branch (`!hasSupabase()` → `return null`) — the mock doesn't invent new behavior, it takes the path the app already has for missing config.

**AsyncStorage** — use the package's own official Jest mock (already present in `node_modules`, confirmed by RESEARCH.md), not a hand-rolled fake:
```typescript
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
```
Required because `useStore.ts`'s `persist` middleware (line ~400, confirmed present) reads/writes AsyncStorage on rehydration — an unmocked call hits `NativeModules.RNCAsyncStorage`, undefined in Jest, and throws.

**Adapty** — `react-native-adapty` per RESEARCH.md Pattern 3 (not independently re-read this session; `react-native-adapty` is a native module, its exact export surface is less load-bearing here since `settings.tsx`'s render path only reaches it via `purchasesStatus`/`restorePurchases` service wrappers, not raw `adapty` calls):
```typescript
jest.mock('react-native-adapty', () => ({
  adapty: {
    activate: jest.fn(() => Promise.resolve()),
    isActivated: jest.fn(() => Promise.resolve(false)),
    addEventListener: jest.fn(),
    restorePurchases: jest.fn(() => Promise.resolve({})),
  },
}));
```

**Scope discipline (D-05):** mock exactly these four things — AsyncStorage, `@/services/supabase`, `react-native-adapty`, `@/services/sound` — nothing else. Do NOT mock `@/store/useStore`, `@/store/useUI`, `@/store/useEntitlement` (D-05 explicitly requires real store logic to execute unmocked, so store-wiring bugs are still caught).

---

### `ealch-v2/__tests__/settings.test.tsx` (test, create)

**Analog 1 (testing philosophy):** `ealch-v2/src/services/examAttemptWiring.test.ts` (full file, 51 lines, read this session).

**House style to copy:**
- One `test()`/`describe()` block per distinct behavior, named as a plain-English assertion of intent (not `it('works')`) — e.g. `test('the paper screen consults the gate before it navigates', () => {...})` at line 16.
- Comment at the top of the file explaining *why this test exists and what it does NOT cover* (lines 1-6) — the new file should open with an equivalent note: this is the first Jest/RNTL component test in the repo, runs via `npm run test:component` (separate from `npm test`'s `node --test` suite per D-04), and its scope is smoke + one interaction (D-02), not full screen coverage.
- `ok(...)`-style / `expect(...).toBe(...)`-style **explicit, structural assertions** — never a snapshot. The existing file uses `node:assert`'s `ok()`; the new Jest file will use `expect().toBeTruthy()` / `expect().toBe()` — different assertion library, same "assert one concrete fact per line" discipline (see e.g. lines 20-23: two `ok()` calls plus an explicit ordering assertion, not one big blob).
- No mocking of the thing under test itself — `examAttemptWiring.test.ts` reads real source text; the new file renders the real `Settings` component and real stores, only mocking the native/network boundary (mirrors D-05 exactly).

**Imports pattern** (`examAttemptWiring.test.ts` lines 7-14) — this repo's convention for path resolution in test files (relative `../../` paths, not the `@/` alias, since these run outside the Metro/webpack resolver):
```typescript
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';
```
The new Jest file is a different runtime (Jest, not raw Node ESM) so it will use Jest's own globals/imports instead — but the **relative-path-to-source** convention carries over: `import Settings from '../app/settings'` (relative), matching how `examAttemptWiring.test.ts` reaches into `../../app/exam-paper.tsx` (line 17) rather than using the `@/` alias for the file under test.

**Analog 2 (subject under test — exact selector/prop names):** `ealch-v2/app/settings.tsx`, read directly this session.

Confirmed exact names to use in the test (do not guess or paraphrase):
- Imports (lines 1-23): `Settings` is the default export; `Toggle` and `Press` come from `@/components/ui`; `sound` from `@/services`.
- `ToggleRow` local component (lines 47-85) renders `<Toggle value={value} onChange={onChange} />` at line 82 — the accessible control the test queries is the inner `Toggle`, not `ToggleRow` itself (no separate role/label on the row wrapper).
- The Sound toggle specifically: line 454 —
  ```tsx
  <ToggleRow title={T.soundT} sub={T.soundS} value={soundOn} onChange={setSound} />
  ```
  `soundT`/`soundS` are i18n strings (exact rendered English text not confirmed this session — the test's `getByRole('switch', { name: /sound/i })` regex from RESEARCH.md's example should still match since the row title is expected to contain "Sound").
- Store wiring (lines 92-105): `soundOn` and `setSound` are destructured from `useStore()`'s return value (aliased: `sound: soundOn, setSound` at lines 104-105) — confirms this is the real zustand `useStore` hook per D-05, not a prop.
- Store default (`ealch-v2/src/store/useStore.ts` line 178): `sound: true` — confirms the test's initial assertion `expect(toggle.props.accessibilityState?.checked).toBe(true)` (per RESEARCH.md's example) is correct against the real default state, not an assumption.

**Full worked example** — see RESEARCH.md "Code Examples" § `__tests__/settings.test.tsx` (lines 271-312 of `18-RESEARCH.md`) for the complete, ready-to-adapt file. It already incorporates both analogs above (explicit-assertion philosophy + correct `Settings`/`Toggle` names) and RNTL v14's async API (`await render(...)`, `await fireEvent.press(...)`).

---

### `ealch-v2/package.json` (config, modify)

**Analog:** same file, existing `scripts` block, lines 50-58 (read this session):
```json
"scripts": {
  "start": "expo start",
  "android": "expo run:android",
  "ios": "expo run:ios",
  "web": "expo start --web",
  "typecheck": "tsc --noEmit",
  "test:i18n": "node --test src/i18n/i18n.test.ts",
  "test": "node --test \"src/**/*.test.ts\" \"supabase/functions/**/*.test.ts\""
},
```
**Pattern to copy:** this repo names test scripts `test:<scope>` for narrower runs (`test:i18n` exists alongside the broad `test`) — the new script should follow the same `test:<scope>` convention (D-04's discretion note already suggests `test:component`, which matches this existing naming pattern exactly). Add as a new key, do not touch the existing `test`/`test:i18n` values (D-04: must stay a fully separate command/glob, no collision with the `"src/**/*.test.ts"` glob which only matches `.test.ts`, not the new `.test.tsx` files, so no collision is even possible by extension alone — but keep the script itself separate too, per D-04).

**devDependencies to add** — current `devDependencies` block (lines 45-49) is minimal (3 entries: `@types/react`, `babel-preset-expo`, `typescript`). Add the RESEARCH.md-verified pins:
```json
"devDependencies": {
  "@types/jest": "^30.0.0",
  "@testing-library/react-native": "^14.0.1",
  "jest": "^30.5.2",
  "jest-expo": "57.0.5",
  "test-renderer": "^1.3.0",
  ...(existing 3 entries unchanged)
}
```
Re-verify exact patch versions immediately before install per RESEARCH.md's Open Question 2 (this corner of the ecosystem patches frequently).

---

### `ealch-v2/src/components/ui.tsx` — `Toggle` (component, modify, D-07)

**Analog:** same file, `FocusHeader`'s "Close" button, lines 271-290 (read this session, full `Press` usage in context):
```tsx
<Press
  onPress={onClose}
  accessibilityRole="button"
  accessibilityLabel="Close"
  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
  style={{
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: t.line(6),
  }}
>
  <Icon name="x" size={18} color={t.tx} />
</Press>
```
**Pattern to copy:** `accessibilityRole` and `accessibilityLabel` are passed as plain props directly on `Press` (which spreads `...rest` onto the underlying `Pressable` — confirmed at `ui.tsx` line 37, `<Pressable ... {...rest}>`) — no wrapper, no separate accessibility HOC. This is the only existing in-repo precedent for an explicit accessibility role on a `Press`-based control (confirmed by RESEARCH.md D-07: `Press` itself sets no default role).

**Current `Toggle` (fix target)** — `ealch-v2/src/components/ui.tsx` lines 216-243, full function, read this session:
```tsx
export function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  const t = useTheme();
  return (
    <Press
      cue="tap"
      onPress={() => onChange(!value)}
      scale={1}
      style={{
        width: 48,
        height: 28,
        borderRadius: 14,
        padding: 3,
        backgroundColor: value ? t.acc : t.line(t.isDark ? 14 : 22),
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: 22,
          height: 22,
          borderRadius: 11,
          backgroundColor: value ? t.accInk : t.knob,
          alignSelf: value ? 'flex-end' : 'flex-start',
        }}
      />
    </Press>
  );
}
```
**Required change (D-07):** add `accessibilityRole="switch"` and `accessibilityState={{ checked: value }}` as props on the `<Press>` element, following the exact same "plain props on Press" pattern the Close button uses above:
```tsx
<Press
  cue="tap"
  onPress={() => onChange(!value)}
  scale={1}
  accessibilityRole="switch"
  accessibilityState={{ checked: value }}
  style={{ ... unchanged ... }}
>
```
**Note on `accessibilityLabel` (Claude's discretion per CONTEXT.md line 34):** `Toggle` itself receives no `title`/label prop today — only `ToggleRow` (the wrapper in `settings.tsx`) knows the row's title (`T.soundT` etc.). Two options, consistent with the Close-button precedent of an explicit static string:
1. Leave `Toggle` label-less and rely on `getByRole('switch', { name: /sound/i })` matching via RNTL's accessible-name computation from sibling text in `ToggleRow` (RNTL does compute accessible name from nearby text in some cases, but this is less reliable than an explicit label — verify during test-writing).
2. Thread an optional `accessibilityLabel` prop through `Toggle` (and pass `title` from each `ToggleRow` call site) for a guaranteed-reliable `getByRole` query — closer to the Close button's explicit-string precedent, but touches more call sites than D-07's "minimal, scoped" instruction strictly requires.
Given D-07's explicit scope constraint ("`Toggle` component ONLY"), prefer option 1 first (role + state only, no label prop) and fall back to option 2 only if the test's `getByRole('switch', { name: /sound/i })` query fails to resolve a name from the surrounding `ToggleRow` text during implementation.

**`Press` base (context only, not a fix target)** — `ealch-v2/src/components/ui.tsx` lines 25-42, confirms `Press` sets no default `accessibilityRole` (spreads `{...rest}` onto `Pressable` with no role default), which is why this fix is needed and why it must be scoped to `Toggle` only, not `Press` globally (D-07 explicitly rejects the global fix as out of scope for this phase).

## Shared Patterns

### Mock boundary (D-05)
**Source:** RESEARCH.md Pattern 3, cross-checked against real `src/services/sound.ts` and `src/services/supabase.ts` export shapes (see `jest.setup.ts` section above).
**Apply to:** `jest.setup.ts` only, loaded once via `setupFilesAfterEnv` for every test file this phase and future phases (Phase 19 depends on this convention per D-06).

### Explicit-assertion, no-snapshot testing philosophy (D-03)
**Source:** `ealch-v2/src/services/examAttemptWiring.test.ts` (all 51 lines) — the entire existing test suite in this repo (844+ tests) follows this convention via `node --test`.
**Apply to:** `__tests__/settings.test.tsx` and every future Jest/RNTL component test (Phase 19 and beyond) — this is a repo-wide house style, not specific to this one file.

### `Press`-based explicit accessibility props
**Source:** `ealch-v2/src/components/ui.tsx` lines 271-274 (Close button).
**Apply to:** `Toggle` (this phase, D-07) — and, per the file's own comments, this is the pattern any future Phase 8 accessibility-retrofit work on other `Press`-based controls should also follow (props passed directly, not a wrapper component).

### `test:<scope>` npm script naming
**Source:** `ealch-v2/package.json` lines 50-58 (`test:i18n` alongside `test`).
**Apply to:** the new component-test script (D-04's discretion, `test:component` fits this existing convention exactly).

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| `ealch-v2/jest.config.js` | config | N/A | No Jest config exists anywhere in this repo or in the sibling `ealch-admin` package (confirmed by RESEARCH.md's direct search) — planner should use RESEARCH.md's verified Code Examples section as the primary source, with `babel.config.js` only for surface-level style (module.exports shape, comment terseness) |
| `ealch-v2/jest.setup.ts` | test-setup | event-driven | First mock-boundary file in this repo — no analog; shape combines RESEARCH.md Pattern 3 with the real, currently-installed service export signatures (verified above) |

## Metadata

**Analog search scope:** `ealch-v2/` root config files, `ealch-v2/src/components/ui.tsx`, `ealch-v2/src/services/{sound,supabase}.ts`, `ealch-v2/src/services/examAttemptWiring.test.ts`, `ealch-v2/app/settings.tsx`, `ealch-v2/src/store/useStore.ts` (targeted line reads), `ealch-v2/package.json`, `ealch-v2/tsconfig.json`, `ealch-v2/babel.config.js`
**Files scanned:** 9 read directly this session (all targeted, non-overlapping reads); 2 config-file globs attempted (timed out on ripgrep but RESEARCH.md already confirmed zero results for both — no `jest.config*` and no `*.test.tsx` anywhere in the repo prior to this phase)
**Pattern extraction date:** 2026-09-21
