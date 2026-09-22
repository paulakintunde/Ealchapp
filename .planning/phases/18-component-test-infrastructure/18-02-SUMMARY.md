---
phase: 18-component-test-infrastructure
plan: 02
subsystem: testing
tags: [jest, jest-expo, react-native-testing-library, expo, react-native, zustand]

# Dependency graph
requires: [18-01]
provides:
  - "A passing component-render test for a real screen (app/settings.tsx), using getByRole-style assertions plus one real user interaction that flips a real zustand store value (D-01/D-02)"
  - "ealch-v2/TESTING.md — the written recipe (D-06) documenting the two-suite split, the installed stack, jest.config.js, the D-05 mock boundary, how to add the next component test, and five pitfalls"
affects: [19, 22]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "beforeEach(() => useStore.setState({...})) to pin store fields a screen test asserts on, so a test can't inherit device locale or a prior test's mutated state"
    - "getByRole('switch', { name: <ToggleRow title> }) via Toggle's accessibilityLabel (already threaded from ToggleRow in Wave 1) — no change needed to reach the label"

key-files:
  created:
    - ealch-v2/__tests__/settings.test.tsx
    - ealch-v2/TESTING.md
  modified: []

key-decisions:
  - "No additional mocks were needed beyond Wave 1's five (AsyncStorage, @/services/supabase, react-native-adapty, @/services/sound, @/services/notifications) — settings.tsx's full render/interaction path was already covered"
  - "No act()/waitFor() workaround was needed for zustand persist rehydration — the mocked AsyncStorage starts empty, rehydration confirms the hard-coded defaults (sound: true), and no act() warning appeared in either test run"
  - "Followed Wave 1's /// <reference types=\"jest\" /> convention as the first line of the new test file, per 18-01-SUMMARY.md's explicit instruction that every future *.test.tsx needs it for typecheck to see Jest's ambient globals"

requirements-completed: [TEST-02]

# Metrics
duration: ~35min
completed: 2026-09-22
---

# Phase 18 Plan 02: Component Test Infrastructure — Settings Screen Proof Summary

**`app/settings.tsx`, a real 634-line screen, now has a passing Jest/RNTL component test that renders it through its real (unmocked) zustand store, queries two controls by accessibility role and name, and proves a real tap on the Sound toggle flips both the store value and the rendered `accessibilityState` — plus `ealch-v2/TESTING.md`, the written recipe Phase 19 needs to add its own tests without re-deriving the convention.**

## Performance

- **Duration:** ~35 min (worktree needed a fresh `npm install`, ~3 min, since this is a separate worktree from Plan 01's)
- **Tasks:** 2 completed
- **Files created:** 2 (`ealch-v2/__tests__/settings.test.tsx`, `ealch-v2/TESTING.md`)

## Accomplishments

- Rendered the real `Settings` screen under Jest with no device/simulator, wrapped in `<SafeAreaProvider initialMetrics={...}>` (required — `useSafeAreaInsets()` throws without it)
- Asserted three controls by accessibility role and accessible name: the Close button (`getByRole('button', { name: 'Close' })`), the Sound toggle, and the Boost-brightness toggle — plus a sanity check that more than one `switch` exists on the screen (this screen has five)
- Proved one real user interaction: tapping the Sound toggle flips `useStore.getState().sound` from `true` to `false` (the real, unmocked store) and the re-queried element's `accessibilityState.checked` matches
- Wrote `ealch-v2/TESTING.md`, force-added past the repo's blanket `*.md` gitignore rule, documenting the two-suite split, installed stack, config, D-05 mock boundary, a numbered recipe for the next test, and five pitfalls
- Confirmed `npm run test:component` (2 suites / 5 tests), `npm test` (5,447/5,447 `node --test`), and `npm run typecheck` all stay green throughout both tasks

## Task Commits

Each task was committed atomically:

1. **Task 1: Render the real Settings screen and prove one interaction flows through the store** — `802220d` (test)
2. **Task 2: Write the component-testing recipe (D-06)** — `5f1df1f` (docs)

_No TDD-style multi-commit tasks; each task's action + verification landed in one commit._

## Files Created

- `ealch-v2/__tests__/settings.test.tsx` — 2 tests: a render/role-assertion smoke test and a real-interaction test (tap Sound toggle → store + accessibilityState both flip). Written exactly to the plan's specified content, with `/// <reference types="jest" />` prepended per Wave 1's established convention.
- `ealch-v2/TESTING.md` — the D-06 recipe. Six required H2 headings present verbatim: `## Two test suites, two commands`, `## What is installed`, `## Config`, `## The mock boundary`, `## Writing the next component test`, `## Pitfalls`.

## Decisions Made

- **No mock beyond Wave 1's five was needed.** `settings.tsx`'s full render path (including the `useStore`/`useUI`/`useEntitlement` selectors, `useSafeAreaInsets`, `useRouter`, `useT`, `useTheme`, and the `sound`/`notifications`/`supabase`/`adapty` service boundary) resolved cleanly against Plan 01's existing `jest.setup.ts` on the very first run — nothing new required a native-module or service mock.
- **No `act()` warning or `waitFor` was needed for zustand rehydration.** The mocked AsyncStorage (Plan 01's official async-storage-mock) starts empty in every test run, so `useStore`'s `persist` rehydration on mount just re-confirms the hard-coded default (`sound: true`) rather than changing it — no observable state update lands after the `await render(...)` promise resolves, so no act() warning ever appeared in either the combined or standalone test runs. RESEARCH.md's Pitfall 3 was a real risk to watch for but did not materialize on this screen.
- Kept the plan's exact test file content and structure — no discretionary deviation was needed for Task 1.

## Deviations from Plan

None. Both tasks landed exactly as specified in `18-02-PLAN.md`, using Wave 1's already-resolved facts (relative `testMatch`, the `/// <reference types="jest" />` requirement, the five-mock `jest.setup.ts`) with no new environment-specific surprises.

## Issues Encountered

**Fresh worktree had no `node_modules`.** This worktree is separate from Plan 01's — its own `npm install` was required (~3 min, 1,324 packages, same `@react-native/jest-preset` peer-dependency warning already resolved by the `overrides` entry Plan 01 committed to `package.json`). Ran as a plain foreground `npm install` per the execution protocol.

**Actual wall-clock runtime of `npm run test:component`:** First run after the fresh `npm install` (cold Jest transform cache): 85.3s. Every subsequent run (warm cache) with both `toggle.test.tsx` and `settings.test.tsx`: 7.9s–9.6s. The validation strategy's 5–15s budget describes the warm-cache case; a cold-cache first run in a fresh worktree/environment should be expected to take well over a minute and is not itself a regression.

## Facts Recorded for Phase 19

- No mocks beyond Plan 01's five (`@react-native-async-storage/async-storage`, `@/services/supabase`, `react-native-adapty`, `@/services/sound`, `@/services/notifications`) were needed to render and interact with `settings.tsx` — a considerably heavier screen (634 lines, 5 toggles, 3 zustand stores, purchases/restore flow, router navigation) than Plan 01's single `Toggle` harness test. This is reasonably strong evidence the five-mock boundary generalizes to other screens, though Phase 19's target screens (exam grading, notification delivery) were flagged in CONTEXT.md as having a heavier mocking surface (AsyncStorage, AppState, network) than Settings, so this is not a guarantee.
- zustand `persist` rehydration did not produce an `act()` warning on this screen with an empty mocked AsyncStorage. If Phase 19 seeds AsyncStorage with actual prior state (rather than leaving it empty), rehydration may resolve to a *different* value than the store's hard-coded default, which is more likely to surface the act()-timing issue RESEARCH.md's Pitfall 3 describes — worth testing early rather than assuming it stays silent.
- `ealch-v2/TESTING.md` is the canonical recipe; it documents the `git add -f` requirement so `*.md` files don't silently fail to commit.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- `npm run test:component`, `jest.config.js`, `jest.setup.ts`, and now two worked example test files (`toggle.test.tsx` for a leaf component, `settings.test.tsx` for a full screen with store interaction) are ready for Phase 19 to build directly on.
- `ealch-v2/TESTING.md` is tracked in git (force-added) and is the required reading for anyone adding the next component test.
- No blockers identified for Phase 19.

---
*Phase: 18-component-test-infrastructure*
*Completed: 2026-09-22*
