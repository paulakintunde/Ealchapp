---
phase: 08-accessibility-retrofit
plan: "02"
subsystem: ui
tags: [accessibility, lesson, overlays, TalkBack, localization]
requires:
  - phase: 08-accessibility-retrofit
    provides: Plan 01 semantic Press and panel focus pattern
provides:
  - Named lesson and act actions
  - Title-first language and lesson overlay focus
  - Suppressed route content beneath global overlays
affects: [08-03, 08-10]
tech-stack:
  added: []
  patterns: [accessible title on layout, modal backdrop as named dismiss action]
key-files:
  created: [.planning/phases/08-accessibility-retrofit/08-AUDIT-02.md, ealch-v2/__tests__/a11y-lesson-navigation.test.tsx]
  modified: [ealch-v2/app/lesson.tsx, ealch-v2/src/components/LanguagePanel.tsx, ealch-v2/src/components/BottomSheet.tsx, ealch-v2/src/components/LessonModal.tsx, ealch-v2/app/_layout.tsx]
key-decisions:
  - "An icon that only played a tap cue is decorative, not a screen reader action."
  - "Global overlays hide the navigation stack at the app root while open."
requirements-completed: [A11Y-01, A11Y-02]
duration: ~16min
completed: 2026-09-28
---

# Phase 8 Plan 02: Lesson and overlay accessibility

Act, Fiche, lesson pager, reference sheet, and checkpoint controls now expose their actual actions in the selected interface language. The language panel, global bottom sheet, dictionary overlay, reference sheet, and generic lesson modal have title focus targets. Background lesson controls are hidden while the language panel is open, and the app route stack is hidden beneath global overlays.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd run test:component -- --runInBand __tests__/a11y-lesson-navigation.test.tsx`: 3 passed, including the lesson's hidden background action while its language panel is open.
- `git diff --check`: passed.
- Site inventory: `08-AUDIT-02.md`.
- Hardware TalkBack traversal: remains for Plan 10.

## Task commits

- Tasks 1 and 2: `7ab01ce` — lesson semantics, overlays, localization, audit, and tests.

## Deviations from Plan

- Edited `app/_layout.tsx` to hide the route stack under globally mounted sheets and dictionary overlays. The planned component-only edits could not suppress that background because these overlays are siblings of the navigator.
- The two closely coupled tasks landed in one scoped commit.

## Self-Check: PASSED

All assigned action sites are in the audit, language choices retain selected state, title focus dispatch is tested, and the focused tests and typecheck pass.

## Next Phase Readiness

Ready for Plan 03's in-lesson drills and card controls. Its `LessonModal` callers can pass specific titles to replace the localized generic fallback.
