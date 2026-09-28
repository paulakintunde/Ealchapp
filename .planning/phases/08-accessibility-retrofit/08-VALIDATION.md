---
phase: 8
slug: accessibility-retrofit
status: planned
nyquist_compliant: true
wave_0_complete: false
created: 2026-09-27
---

# Phase 8 — Validation Strategy

> Per-phase feedback and device evidence contract. All 20 planned tasks have an automated command; Plan 10 also has a blocking hardware checkpoint. Test results remain pending execution.

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Jest 30 with React Native Testing Library 14; Node test runner for pure logic |
| **Config file** | `ealch-v2/jest.config.js`; `ealch-v2/package.json` scripts |
| **Quick run command** | `npm run typecheck` plus a focused `npm run test:component -- --runInBand <test-file>` from `ealch-v2/` |
| **Full suite command** | `npm run typecheck`, `npm test`, `npm run test:component -- --runInBand` from `ealch-v2/` |
| **Estimated runtime** | Baseline to be measured during Plan 01 and full-suite time recorded by Plan 10 |

## Sampling Rate

- After each implementation task, run its focused automated test and typecheck where TypeScript changes.
- After each plan wave, run the full suite.
- Before `/gsd-verify-work`, require a green full suite and the device evidence below.
- Keep every task connected to a focused automated check where behavior is automatable.

## Per-Task Verification Map

| Task ID | Wave | Requirement | Threat ref | Automated command from `ealch-v2/` | Test file at plan time | Status |
|---------|------|-------------|------------|------------------------------------|------------------------|--------|
| 08-01-01/02 | 1 | A11Y-01/02 | T-08-01/02 | `npm run typecheck`; `npm run test:component -- --runInBand __tests__/a11y-trail.test.tsx` | Created in Plan 01 | ⬜ pending |
| 08-02-01/02 | 2 | A11Y-01/02 | T-08-03/04 | `npm run typecheck`; `npm run test:component -- --runInBand __tests__/a11y-lesson-navigation.test.tsx` | Created in Plan 02 | ⬜ pending |
| 08-03-01/02 | 3 | A11Y-01/02 | T-08-05/06 | `npm run typecheck`; `npm run test:component -- --runInBand __tests__/a11y-lesson-controls.test.tsx` | Created in Plan 03 | ⬜ pending |
| 08-04-01/02 | 4 | A11Y-01/02 | T-08-07/08 | `npm run typecheck`; `npm run test:component -- --runInBand __tests__/a11y-settings-paywall.test.tsx` | Created in Plan 04 | ⬜ pending |
| 08-05-01 | 5 | A11Y-03 | T-08-09 | `node --test src/theme/appearance.logic.test.ts`; `npm run typecheck` | Created in task | ⬜ pending |
| 08-05-02 | 5 | A11Y-03 | T-08-10 | `npm run typecheck`; resolver test; `npm run test:component -- --runInBand __tests__/settings.test.tsx` | Settings test exists | ⬜ pending |
| 08-06-01/02 | 6 | A11Y-01/02/04 | T-08-11/12 | `npm run typecheck`; `npm run test:component -- --runInBand __tests__/a11y-flashcards.test.tsx` | Created in Plan 06 | ⬜ pending |
| 08-07-01/02 | 7 | A11Y-01/02 | T-08-13/14 | `npm run typecheck`; `npm run test:component -- --runInBand __tests__/a11y-practice-a.test.tsx` | Created in Plan 07 | ⬜ pending |
| 08-08-01/02 | 8 | A11Y-01/02 | T-08-15/16 | `npm run typecheck`; `npm run test:component -- --runInBand __tests__/a11y-practice-b.test.tsx` | Created in Plan 08 | ⬜ pending |
| 08-09-01/02 | 9 | A11Y-01/02 | T-08-17/18 | `npm run typecheck`; `npm run test:component -- --runInBand __tests__/a11y-exam-entry.test.tsx` | Created in Plan 09 | ⬜ pending |
| 08-10-01 | 10 | A11Y-01/02/03/04 | T-08-19/20 | `npm run typecheck`; `npm test`; `npm run test:component -- --runInBand` | Existing suites plus new tests | ⬜ pending |
| 08-10-02 | 10 | A11Y-01/02/03/04 | T-08-19/20 | `npm run typecheck`; blocking device checkpoint also required | Existing | ⬜ pending |

## Wave 0 Requirements

- No separate Wave 0 plan is required: each plan creates its focused test before running its own `<automated>` command. The first task in each plan must write the named test file before verification.
- `jest.config.js` exists. Record baseline runtime during Plan 01 and full-suite runtime during Plan 10.

No new test framework is required. [VERIFIED: `ealch-v2/package.json`]

## Manual-Only Verifications

| Behavior | Requirement | Why manual | Test instructions |
|----------|-------------|------------|-------------------|
| Correct TalkBack role, spoken label, state, action, and focus order | A11Y-01, A11Y-02 | Simulator tree assertions cannot prove spoken behavior or overlay reachability | Sweep home/den, act, lesson, levels, Settings, paywall, and remaining touched screens on Android hardware; record each incorrect announcement and retest fixes. |
| Panel focus and background suppression | A11Y-02 | Native timing and overlay traversal vary | Open level panel, language panel, and paywall; title first, then choices/actions; background unreachable while panel open and focus returns sensibly on close. |
| Native Automatic theme | A11Y-03 | OS settings, status/navigation bars, and native configuration need a rebuilt app | Select Automatic, toggle OS dark/light while app stays foreground, inspect all surfaces including bars, sheets, paywall; repeat after cold start and with explicit Dark/Light. |
| Large-font flashcard layout | A11Y-04 | Actual font metrics and scroll gesture require device | Use OS scale 1.3 and a larger scale, long front/back content, both directions; scroll all text, flip, confirm new face starts at top and controls/progress remain visible. |

## Validation Sign-Off

- [x] All 20 planned tasks have an `<automated>` verification command; the device checkpoint is additional.
- [x] No three consecutive tasks lack automated verification.
- [x] No `MISSING` test reference or separate Wave 0 dependency; tests are created in their owning tasks.
- [x] No watch-mode commands in plan verification.
- [ ] Full suite runtime measured during execution.
- [x] `nyquist_compliant: true` reflects plan coverage, not passing implementation results.

**Approval:** planned verification coverage complete; test and device results pending execution.
