---
phase: 08-accessibility-retrofit
plan: "03"
subsystem: ui
tags: [accessibility, lessons, exercises, localization]
requires:
  - phase: 08-accessibility-retrofit
    provides: Plan 02 lesson overlay focus pattern
provides:
  - Explicit action roles and labels throughout lesson and practice components
  - Stateful answer, reveal, tab, radio, and stepper semantics
  - Per-site JSX control inventory for the assigned 14 components
affects: [08-06, 08-07, 08-10]
tech-stack:
  added: []
  patterns: [per-site JSX inventory, localized action labels, selected radio and tab state]
key-files:
  created: [.planning/phases/08-accessibility-retrofit/08-AUDIT-03.md, ealch-v2/__tests__/a11y-lesson-controls.test.tsx]
  modified: [ealch-v2/src/components/LessonRich.tsx, ealch-v2/src/components/MissionRich.tsx, ealch-v2/src/components/TimeWheel.tsx, ealch-v2/src/i18n/strings.ts]
key-decisions:
  - "Wrapping hour and minute steppers use named increment/decrement buttons with current-value hints; there is no finite adjustable range."
  - "A lesson flashcard audio action is a sibling of the flip action so each gets its own focus stop."
requirements-completed: [A11Y-01, A11Y-02]
duration: ~21min
completed: 2026-09-28
---

# Phase 8 Plan 03: Lesson and practice controls

Audited all assigned lesson and practice action sites. Icon controls now announce their function in the app language. Answer choices report selection and verdict, reveals report expansion, pronunciation tabs and segmented choices report selection, and time stepper buttons announce the current value. Lesson detail modals receive specific titles. The lesson flashcard audio action is separate from its flip action. Exercise grading and authored French content were left intact.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd run test:component -- --runInBand __tests__/a11y-lesson-controls.test.tsx`: 3 passed. Answer activation still invokes the existing callback; radio and icon-only stepper semantics are asserted.
- `git diff --cached --check`: passed.
- Site inventory: `08-AUDIT-03.md`.
- Hardware TalkBack traversal remains in Plan 10.

## Task commits

- Tasks 1 and 2: `7cf944d` — lesson semantics, localization, test, and audit.

## Deviations from Plan

- The closely related tasks were committed together. The audit generator is retained in `ealch-v2/scripts/phase8-audit-sites.cjs` for the remaining route inventories.
- Speak's inline `WordPractice` host background suppression is assigned to Plan 07 with that route; its native modal host already hides the background.

## Self-Check: PASSED

All 14 assigned components, the direct word-practice backdrop, and both `Type.tsx` reveal actions are in the site inventory. The focused test and typecheck pass.

## Next Phase Readiness

Ready for Plan 04 settings, paywall, profile, and account action semantics.
