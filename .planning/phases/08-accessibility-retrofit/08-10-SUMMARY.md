---
phase: 08-accessibility-retrofit
plan: "10"
subsystem: device-verification
tags: [accessibility, TalkBack, automatic-appearance, font-scale, Android]
requires:
  - phase: 08-accessibility-retrofit
    provides: Plans 01-09 accessibility semantics and automated gates
provides:
  - Completed Pixel 6 TalkBack sweep evidence for all eleven requested groups
  - Fresh-install Automatic appearance proof and resolved Settings label
  - Phase 8 hardware checkpoint approval
affects: [09-onboarding-analytics-audit]
tech-stack:
  added: []
  patterns: [real-device evidence, cleared-install verification]
key-files:
  created: [.planning/phases/08-accessibility-retrofit/08-10-SUMMARY.md]
  modified: [.planning/phases/08-accessibility-retrofit/08-DEVICE-EVIDENCE.md, .planning/phases/08-accessibility-retrofit/08-VALIDATION.md, .planning/ROADMAP.md, .planning/STATE.md]
key-decisions:
  - "A cleared install defaults to Automatic; under Android Light, Settings resolves it as AUTOMATIC · LIGHT."
  - "The user-reported TalkBack pass covers all eleven requested route groups."
requirements-completed: [A11Y-01, A11Y-02, A11Y-03, A11Y-04]
duration: ~30min
completed: 2026-09-29
---

# Phase 8 Plan 10: Device verification and hardware checkpoint

The Pixel 6 fresh-install assessment is complete. After `adb shell pm clear app.ealch.mobile`, Android reported Light mode (`Night mode: no`) and font scale `1.0`. The onboarding appearance step visibly selected `AUTOMATIC`, rendered the app in Light, and Settings resolved the choice as `AUTOMATIC · LIGHT`.

The user also reported a passing TalkBack result for all eleven requested groups: Home/Den, locked act and Première paywall, Levels panel, language and overlays, A2 mission 8 cards, lesson exercises, large-text flashcards at 1.3/1.5, Settings/theme, paywall/account, practice routes, and exam/onboarding/media.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd test`: 5,689 passed, 1 skipped, 0 failed.
- `npm.cmd run test:component -- --runInBand --silent`: 11 suites, 40 tests passed.
- Pixel 6 fresh-install check: passed; Automatic selected by default and `AUTOMATIC · LIGHT` shown in Settings.
- `git diff --check`: run after evidence updates.

## Deviations from Plan

- Onboarding was completed as a guest. Reminder notifications were not enabled; Settings was opened directly through the app deep link after the appearance default was observed.

## Self-Check: PASSED

All four Phase 8 requirements have automated and device evidence. The hardware checkpoint is complete; Phase 8 is ready to close.
