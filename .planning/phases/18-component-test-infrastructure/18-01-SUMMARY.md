---
phase: 18-component-test-infrastructure
plan: 01
subsystem: testing
tags: [jest, jest-expo, react-native-testing-library, expo, react-native, accessibility]

# Dependency graph
requires: []
provides:
  - Working `npm run test:component` (Jest + jest-expo + RNTL v14) inside ealch-v2, fully separate from the existing `npm test` (node --test) suite
  - jest.config.js / jest.setup.ts harness with D-05's native/service mock boundary (AsyncStorage, supabase, adapty, sound, notifications)
  - Toggle component now exposes accessibilityRole="switch", accessibilityState.checked, and an optional accessibilityLabel (D-07)
  - A documented, working `/// <reference types="jest" />` pattern required for any future *.test.tsx file in this project to typecheck
  - A documented testMatch pattern (relative, not <rootDir>-prefixed) required because this worktree's absolute path contains a ".claude" segment
affects: [18-02, 19]

# Tech tracking
tech-stack:
  added: [jest@30.5.2, jest-expo@57.0.5, "@testing-library/react-native@14.0.1", test-renderer@1.3.0, "@types/jest@30.0.0"]
  patterns:
    - "test:component npm script as a Jest-based sibling to the node --test `test` script, never merged"
    - "jest.setup.ts mocks only the native/network boundary (D-05); zustand stores run unmocked"
    - "Explicit accessibilityRole/accessibilityState/accessibilityLabel passed as plain props on Press, following the existing FocusHeader close-button precedent"

key-files:
  created:
    - ealch-v2/jest.config.js
    - ealch-v2/jest.setup.ts
    - ealch-v2/__tests__/toggle.test.tsx
  modified:
    - ealch-v2/package.json
    - ealch-v2/package-lock.json
    - ealch-v2/src/components/ui.tsx
    - ealch-v2/app/settings.tsx

key-decisions:
  - "Added an `overrides` entry pinning @react-native/jest-preset to 0.86.3 in package.json, per the plan's documented Pitfall-1 fallback - jest-expo@57.0.5 peers on ^0.86.3 but react-native@0.86.2 peerOptional-wants exactly 0.86.2"
  - "jest.config.js's testMatch uses a rootDir-relative glob ('**/__tests__/**/*.test.tsx') instead of the plan's literal '<rootDir>/__tests__/**/*.test.tsx' - the <rootDir>-prefixed form silently matches zero files in this specific worktree path"
  - "Both new TypeScript test-harness files open with an explicit `/// <reference types=\"jest\" />` - required for tsc to see describe/test/expect/jest globals in this project's tsconfig"

patterns-established:
  - "Every future ealch-v2 *.test.tsx file needs `/// <reference types=\"jest\" />` at the top or `npm run typecheck` fails with 'Cannot find name describe/expect' and 'Cannot use namespace jest as a value'"
  - "Every future jest.config.js-style testMatch/roots pattern in this repo should stay rootDir-relative (no explicit <rootDir> prefix) to avoid the Windows-path-with-.claude-segment glob bug"

requirements-completed: [TEST-02]

# Metrics
duration: ~55min
completed: 2026-09-22
---

# Phase 18 Plan 01: Component Test Infrastructure Summary

**Jest 30.5.2 + jest-expo 57.0.5 + React Native Testing Library 14.0.1 now run a real component render (`npm run test:component`) against the shared `Toggle` control, fully separate from the existing 5,447-test `node --test` suite, with `Toggle` newly exposing `accessibilityRole="switch"` for `getByRole` queries.**

## Performance

- **Duration:** ~55 min (including a fresh `npm install` in this worktree, ~2 min)
- **Tasks:** 3 completed
- **Files modified/created:** 7 (4 modified, 3 created)

## Accomplishments
- Installed the exact version-pinned Jest/RNTL toolchain (jest 30.5.2, jest-expo 57.0.5, @testing-library/react-native 14.0.1, test-renderer 1.3.0, @types/jest 30.0.0) with no `react-test-renderer` direct devDependency
- Added `Toggle`'s D-07 accessibility fix (`accessibilityRole="switch"`, `accessibilityState={{checked: value}}`, optional `accessibilityLabel`) scoped to `Toggle` only; `Press` and `onboarding.tsx`'s other `Toggle` call site are untouched
- Wired `jest.config.js` (preset, `@/` alias, `setupFilesAfterEnv`, `__tests__`-only `testMatch`) and `jest.setup.ts` (5 native/service mocks per D-05, zero store mocks) and proved the whole stack end to end with 3 passing RNTL v14 async render/interaction tests
- Confirmed the existing `npm test` (5,447 tests) and `npm run typecheck` both stay green throughout

## Task Commits

Each task was committed atomically:

1. **Task 1: Install the Jest/RNTL toolchain and add the test:component script** - `63f375d` (test)
2. **Task 2: Give Toggle a switch role, a checked state and an accessible name (D-07)** - `1b727c8` (fix)
3. **Task 3: Write jest.config.js, jest.setup.ts and the Toggle harness test** - `397c1a5` (test)

_No TDD-style multi-commit tasks; each task's action + verification landed in one commit._

## Files Created/Modified
- `ealch-v2/jest.config.js` - new Jest config: `preset: 'jest-expo'`, `@/*` → `src/*` moduleNameMapper, `setupFilesAfterEnv` wiring `jest.setup.ts`, `testMatch` scoped to `__tests__/**/*.test.tsx`
- `ealch-v2/jest.setup.ts` - new D-05 mock boundary: `jest.mock()` for `@react-native-async-storage/async-storage`, `@/services/supabase`, `react-native-adapty`, `@/services/sound`, `@/services/notifications` (5 total, no store mocks)
- `ealch-v2/__tests__/toggle.test.tsx` - new harness proof: 3 tests (checked-true, checked-false, press-flips-value) using real RNTL v14 async `render`/`fireEvent`
- `ealch-v2/package.json` - added `jest`, `jest-expo`, `@testing-library/react-native`, `test-renderer`, `@types/jest` devDependencies; added `"overrides": {"@react-native/jest-preset": "0.86.3"}`; added `"test:component": "jest"` script directly after `"test"`
- `ealch-v2/package-lock.json` - resolved lockfile for the above
- `ealch-v2/src/components/ui.tsx` - `Toggle` widened to accept optional `accessibilityLabel`; `Press` element now receives `accessibilityRole="switch"`, `accessibilityState={{checked: value}}`, `accessibilityLabel`
- `ealch-v2/app/settings.tsx` - local `ToggleRow`'s `<Toggle .../>` call now passes `accessibilityLabel={title}` so the row's existing i18n title becomes the switch's accessible name

## Decisions Made
- Kept the plan's `test:component` script name, mock list, and file layout exactly as specified - no discretionary naming changes were needed beyond what the plan already fixed.
- Chose `/// <reference types="jest" />` (scoped to the two new files) over adding a project-wide `"types"` compilerOption, to avoid silently dropping automatic ambient-type inclusion for every other `@types/*` package the rest of the app currently relies on implicitly (e.g. `@types/node`'s `process`, confirmed still auto-included without any reference).

## Deviations from Plan

### Auto-fixed Issues

**1. [Environment-specific] `<rootDir>`-prefixed `testMatch` glob matches zero files in this worktree**
- **Found during:** Task 3, first `npx jest --listTests` run after writing `jest.config.js` exactly as the plan specified
- **Issue:** The plan's literal `testMatch: ['<rootDir>/__tests__/**/*.test.tsx']` produced a config (confirmed via `npx jest --showConfig`) where the substituted absolute path read `.../Ealchapp\\.claude/worktrees/.../ealch-v2/__tests__/**/*.test.tsx` - a stray, unconverted backslash sits immediately before the `.claude` path segment while every other separator in the same string is a forward slash. This is Jest's `<rootDir>`-substitution + glob-slash-normalization mishandling a backslash that precedes a literal dot, specific to this worktree's absolute path containing a `.claude` directory. `npx jest --listTests` printed nothing (exit 0, zero matches).
- **Fix:** Changed `testMatch` to `['**/__tests__/**/*.test.tsx']` (rootDir-relative, no `<rootDir>` prefix). Verified this still resolves correctly against `roots: ['<rootDir>']` (the default) and matches exactly the one intended file, nothing under `src/`.
- **Files modified:** `ealch-v2/jest.config.js` (plus an explanatory code comment)
- **Verification:** `npx jest --listTests` now prints exactly `.../ealch-v2/__tests__/toggle.test.tsx` and nothing else; `npm run test:component` passes 1 suite / 3 tests
- **Committed in:** `397c1a5` (Task 3 commit)

**2. [Environment-specific] `@types/jest`'s ambient globals not auto-included by `tsc`**
- **Found during:** Task 3, `npm run typecheck` after writing `jest.setup.ts` and `__tests__/toggle.test.tsx`
- **Issue:** `tsc --noEmit` failed with `Cannot find name 'describe'` / `'test'` / `'expect'` and `Cannot use namespace 'jest' as a value` in both new files, even though `@types/jest@30.0.0` is correctly installed at `ealch-v2/node_modules/@types/jest` and its `index.d.ts` does declare `describe`/`test`/`expect` as ambient globals. Isolated testing confirmed `@types/node`'s ambient globals (e.g. `process`) auto-include fine with no reference needed, but `@types/jest`'s do not, in this project's TypeScript 6.0.3 + tsconfig combination. Root cause not fully pinned down (a `declare namespace jest` also exists in `jest-expo/src/index.d.ts` and `@jest/globals`, which may be interacting with `skipLibCheck: true`), but adding an explicit `/// <reference types="jest" />` - the exact fix TS's own compiler error message suggests - resolved it completely in isolated verification.
- **Fix:** Added `/// <reference types="jest" />` as the first line of both `ealch-v2/jest.setup.ts` and `ealch-v2/__tests__/toggle.test.tsx`, with a comment explaining why it's required and that every future `*.test.tsx` file needs the same line.
- **Files modified:** `ealch-v2/jest.setup.ts`, `ealch-v2/__tests__/toggle.test.tsx`
- **Verification:** `npm run typecheck` exits 0 with zero errors across the whole project
- **Committed in:** `397c1a5` (Task 3 commit)

---

**Total deviations:** 2 auto-fixed (both environment-specific config/typecheck gaps not anticipated by the plan or its research, neither a scope or behavior change)
**Impact on plan:** No scope creep - both fixes are narrowly targeted at making the plan's own stated acceptance criteria pass in this actual execution environment. All of the plan's original acceptance criteria (exact versions, exact devDependency list, exact mock list, exact test assertions, typecheck clean, existing suite green) are met unchanged.

## Issues Encountered

**jest-expo/RN peer-dependency conflict (Pitfall 1, anticipated by the plan).** `npx expo install jest-expo --dev` failed with `ERESOLVE` naming `@react-native/jest-preset` (react-native@0.86.2 peerOptional-wants exactly `0.86.2`; jest-expo@57.0.5 peers on `^0.86.3`). Resolved exactly per the plan's documented fallback: added `"overrides": {"@react-native/jest-preset": "0.86.3"}` to `package.json`, then `npm install` succeeded (jest-expo's own devDependency entry, added by the first failed `expo install` attempt, was already in `package.json` and picked up cleanly). Recorded per the plan's explicit instruction to note whether the override was needed: **yes, it was needed.**

**Fresh worktree had no `node_modules`.** Ran a plain foreground `npm install` (~2 min, 671 packages) before Task 1's own installs, per the execution protocol's instruction to handle this case.

## Facts Recorded for Plan 02 / Phase 19 (per plan's `<output>` requirements)

- **Exact resolved versions:** `jest@30.5.2`, `jest-expo@57.0.5` (devDependency pin recorded as `~57.0.5`), `@testing-library/react-native@14.0.1`, `test-renderer@1.3.0`, `@types/jest@30.0.0`
- **`@react-native/jest-preset` override:** Needed. `"overrides": {"@react-native/jest-preset": "0.86.3"}` is in `ealch-v2/package.json`.
- **Setup-file config key:** `setupFilesAfterEnv` is correct and works as-is in Jest 30 - confirmed via `npx jest --showConfig` (Assumption A1 from 18-RESEARCH.md resolved: no key change was needed).
- **`transformIgnorePatterns` additions:** None. jest-expo's bundled default pattern was sufficient; no `node_modules` package under test required special-casing.
- **Mocks beyond the five specified:** None added. The five in `jest.setup.ts` (AsyncStorage, `@/services/supabase`, `react-native-adapty`, `@/services/sound`, `@/services/notifications`) were sufficient for `Toggle`'s render/interaction path.
- **New environment-specific facts not in RESEARCH.md, worth carrying forward:** (1) `testMatch`/`roots`-style glob patterns must stay rootDir-relative, never `<rootDir>`-prefixed, in any worktree whose absolute path contains a `.claude` directory segment. (2) Every new `*.test.tsx` file in this project needs `/// <reference types="jest" />` as its first line for `npm run typecheck` to pass.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- `npm run test:component` and its full harness (`jest.config.js`, `jest.setup.ts`, D-05 mock boundary) are ready for Plan 02 (the `settings.tsx` screen-level test) and Phase 19 to build on directly.
- Plan 02 and any future `*.test.tsx` file must carry forward both documented deviations above (relative `testMatch`, `/// <reference types="jest" />`) or will hit the same silent-zero-match / typecheck failures this plan diagnosed.
- No blockers identified for Plan 02.

---
*Phase: 18-component-test-infrastructure*
*Completed: 2026-09-22*
