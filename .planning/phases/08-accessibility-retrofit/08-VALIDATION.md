---
phase: 8
slug: accessibility-retrofit
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-09-27
---

# Phase 8 — Validation Strategy

> Per-phase feedback and device evidence contract. Task IDs and waves are assigned when Phase 8 plans are written.

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Jest 30 with React Native Testing Library 14; Node test runner for pure logic |
| **Config file** | `ealch-v2/jest.config.js` (confirm filename when planning); `ealch-v2/package.json` scripts |
| **Quick run command** | `npm run typecheck` plus a focused `npm run test:component -- --runInBand <test-file>` from `ealch-v2/` |
| **Full suite command** | `npm run typecheck`, `npm test`, `npm run test:component -- --runInBand` from `ealch-v2/` |
| **Estimated runtime** | Measure first run; do not assume a timeout before it is observed |

## Sampling Rate

- After each implementation task, run its focused automated test and typecheck where TypeScript changes.
- After each plan wave, run the full suite.
- Before `/gsd-verify-work`, require a green full suite and the device evidence below.
- Keep every task connected to a focused automated check where behavior is automatable.

## Per-Task Verification Map

| Capability | Requirement | Automated check to assign to plan tasks | File exists | Status |
|------------|-------------|-----------------------------------------|-------------|--------|
| Shared action semantics and states | A11Y-01 | RNTL role/state/value assertions for representative buttons, tabs, switches, and trail rows; source inventory for remaining `Press` sites | Existing Settings/Toggle test patterns; phase-specific tests pending | ⬜ pending |
| Icon labels and panel focus | A11Y-02 | RNTL label/focus event assertions where host refs and timing can be simulated | Phase-specific tests pending | ⬜ pending |
| Automatic preference and resolved theme | A11Y-03 | Pure preference × OS resolver tests; persisted explicit choice; Settings selected state | Phase-specific tests pending | ⬜ pending |
| Flashcard overflow and flip reset | A11Y-04 | Component structure and scroll-reset behavior tests, with meaningful long-content fixture | Phase-specific tests pending | ⬜ pending |

*Plan task IDs, waves, exact commands, and threat references must be filled in during `/gsd-plan-phase 8`.*

## Wave 0 Requirements

- [ ] Add focused accessibility component tests near existing `__tests__/settings.test.tsx` and `__tests__/toggle.test.tsx`.
- [ ] Add a pure theme resolution test if a resolver module is introduced.
- [ ] Add a flashcard test fixture that exercises a long prompt or note and face reset.
- [ ] Confirm the actual Jest config path and baseline test runtime before writing plan verification commands.

No new test framework is required. [VERIFIED: `ealch-v2/package.json`]

## Manual-Only Verifications

| Behavior | Requirement | Why manual | Test instructions |
|----------|-------------|------------|-------------------|
| Correct TalkBack role, spoken label, state, action, and focus order | A11Y-01, A11Y-02 | Simulator tree assertions cannot prove spoken behavior or overlay reachability | Sweep home/den, act, lesson, levels, Settings, paywall, and remaining touched screens on Android hardware; record each incorrect announcement and retest fixes. |
| Panel focus and background suppression | A11Y-02 | Native timing and overlay traversal vary | Open level panel, language panel, and paywall; title first, then choices/actions; background unreachable while panel open and focus returns sensibly on close. |
| Native Automatic theme | A11Y-03 | OS settings, status/navigation bars, and native configuration need a rebuilt app | Select Automatic, toggle OS dark/light while app stays foreground, inspect all surfaces including bars, sheets, paywall; repeat after cold start and with explicit Dark/Light. |
| Large-font flashcard layout | A11Y-04 | Actual font metrics and scroll gesture require device | Use OS scale 1.3 and a larger scale, long front/back content, both directions; scroll all text, flip, confirm new face starts at top and controls/progress remain visible. |

## Validation Sign-Off

- [ ] All planned tasks have automated verification or a documented device-only reason.
- [ ] No three consecutive planned tasks lack automated verification.
- [ ] Wave 0 test dependencies exist before implementation tasks use them.
- [ ] No watch-mode commands in plan verification.
- [ ] Full suite baseline runtime measured.
- [ ] `nyquist_compliant: true` set after plan task mapping is complete.

**Approval:** pending plan generation and device execution.
