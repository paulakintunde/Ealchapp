---
phase: 18-component-test-infrastructure
reviewed: 2026-09-21T00:00:00Z
depth: standard
files_reviewed: 9
files_reviewed_list:
  - ealch-v2/jest.config.js
  - ealch-v2/jest.setup.ts
  - ealch-v2/__tests__/toggle.test.tsx
  - ealch-v2/package.json
  - ealch-v2/package-lock.json
  - ealch-v2/src/components/ui.tsx
  - ealch-v2/app/settings.tsx
  - ealch-v2/__tests__/settings.test.tsx
  - ealch-v2/TESTING.md
findings:
  critical: 0
  warning: 3
  info: 2
  total: 5
status: issues_found
---

# Phase 18: Code Review Report

**Reviewed:** 2026-09-21
**Depth:** standard
**Files Reviewed:** 9
**Status:** issues_found

## Summary

This phase stands up the Jest + jest-expo + React Native Testing Library harness (config, mock boundary, two test files, docs) and threads `accessibilityLabel` through `Toggle`/`ToggleRow` so the new tests have a stable role+name query surface. The harness itself is well-built: the Windows `testMatch` workaround was verified live (`npx jest --showConfig` confirms the pattern resolves), both test files pass (`npx jest` → 2 suites / 5 tests green), and `tsc --noEmit` is clean. The mock boundary in `jest.setup.ts` was cross-checked against the real `src/services/notifications.ts` API surface and matches exactly.

No blocking defects were found. The issues below are real but non-fatal: a live peer-dependency conflict surfaced by `npm ci --dry-run`, a missing mock-hygiene setting that will bite the next test author rather than this one, and a pre-existing accessibility/i18n gap that this phase's own test now silently depends on.

## Warnings

### WR-01: `test-renderer`'s peer dependency does not actually match the pinned React version

**File:** `ealch-v2/package.json:31,52` (react-reconciler transitive dep resolved in `ealch-v2/package-lock.json:18654-18667`)
**Issue:** `test-renderer@1.3.0` depends on `react-reconciler@~0.34.0`, whose `peerDependencies` require `react@^19.3.0`. This project pins `"react": "19.2.3"` exactly. Running `npm ci --dry-run` in `ealch-v2/` reproduces this live:
```
npm warn ERESOLVE overriding peer dependency
npm warn Found: react@19.2.3
npm warn Could not resolve dependency:
npm warn peer react@"^19.3.0" from react-reconciler@0.34.0
```
Tests pass today (verified), but this is a real, currently-unresolved version mismatch in the devDependency that TESTING.md explicitly calls "v14's peer package" and instructs contributors never to substitute. A future patch release of `react-reconciler` that actually exercises 19.3-only internals can break `test-renderer` (and therefore every RNTL render) silently, with only an ERESOLVE warning as the prior signal — a warning that's easy to miss in noisy install logs on a fresh clone.
**Fix:** Either bump `react`/`react-dom` to `^19.3.0` (if compatible with `react-native@0.86.2` and Reanimated 4.5.1), or pin `test-renderer` to a version whose `react-reconciler` range includes `19.2.x`, and note the constraint in TESTING.md's "traps" list alongside the existing v13/v14 warning.

### WR-02: No mock-hygiene setting — `jest.setup.ts` mocks persist uncleared across tests in a file

**File:** `ealch-v2/jest.config.js` (whole file — missing `clearMocks`/`resetMocks`)
**Issue:** `jest.setup.ts` registers `jest.fn()` mocks for `sound.play`/`sound.unlock`, all of `notifications.*`, and `adapty.*` via `setupFilesAfterEnv`, which runs once per test file, not once per test. `jest.config.js` sets neither `clearMocks: true` nor `resetMocks: true`, and neither test file calls `jest.clearAllMocks()` in a `beforeEach`. Today no test asserts on call counts/arguments of these mocks, so this is currently latent. But TESTING.md positions `settings.test.tsx` as "the worked example" for all future component tests, and the very next test author who writes `expect(sound.play).toHaveBeenCalledWith('tap')` inside a multi-test file will get counts/args polluted by earlier tests in the same file with no warning that this is happening.
**Fix:** Add `clearMocks: true` to `jest.config.js` (safe default — it only clears `mock.calls`/`mock.instances`, not mock implementations), or document the manual-clear requirement explicitly in TESTING.md's "Pitfalls" section.

### WR-03: `settings.test.tsx` asserts against a hardcoded, unlocalized accessibility label

**File:** `ealch-v2/src/components/ui.tsx:285`, exercised by `ealch-v2/__tests__/settings.test.tsx:43`
**Issue:** `FocusHeader`'s close button sets `accessibilityLabel="Close"` as a literal string, not sourced from the app's i18n table (`T.*`), even though every other accessible string on this screen — including the `Toggle` labels this same phase just wired up (`T.soundT`, `T.brightT`) — goes through `useT()`. A French-locale user gets an English screen-reader label ("Close" instead of "Fermer"). `settings.test.tsx:43` locks this in with `getByRole('button', { name: 'Close' })`, so the test will break the instant someone correctly localizes the label, rather than exercising locale-aware accessibility the way the sibling `Toggle` assertions do (which correctly pin `lang: 'en'` in `beforeEach` specifically because the labels ARE localized).
**Fix:** Add a `closeT`/`close` key to the i18n strings table and thread it through `FocusHeader`'s `accessibilityLabel`, matching the pattern this phase already established for `Toggle`. Until then, `settings.test.tsx` should have a comment flagging that this assertion is pinned to a known-unlocalized string, so it doesn't get "fixed" by copy-pasting the English literal into future locale-aware tests.

## Info

### IN-01: `Press` silently drops function-valued `style` props

**File:** `ealch-v2/src/components/ui.tsx:33-36`
**Issue:** `Press`'s own style merge is:
```tsx
style={({ pressed }) => [
  { transform: [{ scale: pressed ? scale : 1 }] },
  typeof style === 'function' ? undefined : style,
]}
```
`PressProps` extends `PressableProps`, whose `style` prop legitimately accepts a function of `{ pressed }`. If any caller ever passes a function style (a valid, typed usage), it is silently discarded instead of composed with `Press`'s own pressed-state style — no error, no warning, just a dropped visual state. No current call site in the reviewed files does this (all pass plain style objects/arrays), so it's latent rather than active, but it's a logic gap in a file this phase's `Toggle` change depends on.
**Fix:** Either compose the function (`typeof style === 'function' ? style({ pressed }) : style`) or narrow `PressProps['style']` to exclude the function form so misuse fails at compile time instead of silently at runtime.

### IN-02: `settings.test.tsx` has no guard against the async-rehydration race its own docs warn about

**File:** `ealch-v2/__tests__/settings.test.tsx:32-37`
**Issue:** TESTING.md's Pitfall #4 explicitly warns that zustand's `persist` middleware rehydrates asynchronously and can call `set()` again in a microtask after `render()` has settled, and recommends an `await waitFor(...)` guard before the first assertion. `settings.test.tsx`'s `beforeEach` sets `useStore.setState({ lang: 'en', sound: true })` synchronously and then renders with no such guard. In this run it passes reliably (verified: 5/5 green), because the store's one-time rehydration completes long before the first test's `beforeEach` runs — but that timing is incidental to Jest's module-load order, not something the test asserts or protects. As written, this file is exactly the shape of test TESTING.md predicts will flake later.
**Fix:** No action required while green, but consider adding the `await waitFor(() => expect(useStore.getState().hydrated).toBe(true))` guard mentioned in TESTING.md directly to `settings.test.tsx`'s `beforeEach`, both as a safety net and as the concrete worked example the docs currently only describe in prose.

---

_Reviewed: 2026-09-21_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
