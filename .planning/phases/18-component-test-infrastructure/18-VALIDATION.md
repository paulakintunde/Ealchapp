---
phase: 18
slug: component-test-infrastructure
status: approved
nyquist_compliant: true
wave_0_complete: false
created: 2026-09-22
---

# Phase 18 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Jest 30.5.2 + jest-expo 57.0.5 + @testing-library/react-native 14.0.1 (new this phase) — separate from the existing `node --test` framework used for 844+ logic tests |
| **Config file** | `ealch-v2/jest.config.js` (new, this phase) |
| **Quick run command** | `npm run test:component` (exact script name is Claude's discretion per D-04) |
| **Full suite command** | `npm run test:component` (same command — this phase adds exactly one test file; diverges from "quick" once Phase 19 adds more) |
| **Estimated runtime** | ~5-15 seconds (Jest/RNTL cold-start overhead is real; this is why D-04 keeps it separate from the fast `node --test` loop) |

---

## Sampling Rate

- **After every task commit:** `npm run test:component`
- **After every plan wave:** `npm run test:component` AND `npm test` (existing 844+ `node --test` suite) — both must stay green
- **Before `/gsd-verify-work`:** Both suites green, plus `npm run typecheck` clean
- **Max feedback latency:** ~15 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 18-01-01 | 01 | 1 | TEST-02 | T-18-01 | Pinned versions + committed lockfile | infrastructure (install) | `npx jest --version` + package.json assertions + `npm test` | ✅ after task | ⬜ pending |
| 18-01-02 | 01 | 1 | TEST-02 | T-18-03 | Label reuses existing i18n copy, no PII | component prop (a11y) | `grep -F 'accessibilityRole="switch"' src/components/ui.tsx` + `npm run typecheck` + `npm test` | ✅ after task | ⬜ pending |
| 18-01-03 | 01 | 1 | TEST-02 | T-18-04 | testMatch scoped to `__tests__/**/*.test.tsx` | component (render + interaction) | `npx jest --listTests` + `npm run test:component` + `npm run typecheck` | ❌ W0 → created by this task | ⬜ pending |
| 18-02-01 | 02 | 2 | TEST-02 | T-18-07, T-18-09 | No test file under `app/`; mocks hold the native boundary | component (real screen + interaction) | `npm run test:component` + `npm run typecheck` + `npm test` | ❌ W0 → created by this task | ⬜ pending |
| 18-02-02 | 02 | 2 | TEST-02 | T-18-06, T-18-08 | No secrets in the doc; force-added past the `*.md` ignore | docs (structural grep) | heading greps on `TESTING.md` + all three suites green | ❌ W0 → created by this task | ⬜ pending |

*Task IDs assigned by the planner on 2026-09-21: plan 01 tasks 1-3 (wave 1), plan 02 tasks 1-2 (wave 2).*

---

## Wave 0 Requirements

- [ ] `ealch-v2/jest.config.js` — new Jest config (preset: 'jest-expo', transformIgnorePatterns, moduleNameMapper for the `@/` path alias)
- [ ] `ealch-v2/jest.setup.ts` — D-05's mock boundary file (explicit `@react-native-async-storage/async-storage` mock; jest-expo's bundled setup covers most other native modules automatically)
- [ ] `ealch-v2/__tests__/settings.test.tsx` (or equivalent path) — the D-01/D-02 proof test, wrapped in `<SafeAreaProvider>` per research (settings.tsx's `useSafeAreaInsets()` throws without it)
- [ ] `package.json` `"test:component"` script
- [ ] `src/components/ui.tsx` `Toggle` accessibility fix (D-07) — must land before/with the test, since the test's `getByRole` query depends on it
- [ ] Package installs: `jest-expo@57.0.5`, `@testing-library/react-native@^14.0.1`, `test-renderer@^1.3.0`, `jest@^30`, `@types/jest@^30` — re-verify exact resolved versions at install time per research's open question (57.0.5 may have a newer patch by execution time)

---

## Manual-Only Verifications

None — this phase's automated test IS the deliverable (component-render infrastructure proven via a passing automated test, not a manual device check). No device/human verification is required for TEST-02's success criteria.

*All phase behaviors have automated verification.*

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references (plan 01 task 3 creates the config/setup/harness; plan 02 task 1 creates the screen test)
- [x] No watch-mode flags
- [x] Feedback latency < 15s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** planner-signed 2026-09-21 (plans 18-01, 18-02)
