---
phase: 18
slug: component-test-infrastructure
status: draft
nyquist_compliant: false
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
| 18-01-01 | 01 | 0 | TEST-02 | — | N/A | infrastructure | `npm run test:component` (new script exits 0) | ❌ W0 | ⬜ pending |
| 18-01-02 | 01 | 0 | TEST-02 | — | N/A | component (render) | `npm run test:component` — `getByRole` assertions on settings.tsx | ❌ W0 | ⬜ pending |
| 18-01-03 | 01 | 0 | TEST-02 | — | N/A | component (interaction) | `npm run test:component` — tap Sound toggle, assert state change | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

*Task IDs above are illustrative — the planner assigns final plan/task IDs.*

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

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 15s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
