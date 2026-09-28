---
phase: 08-accessibility-retrofit
plan: "06"
subsystem: flashcards
tags: [accessibility, large-text, flashcards]
requires:
  - phase: 08-accessibility-retrofit
    provides: Plan 05 resolved theme and prior control semantics
provides:
  - Bounded front/back face scrolling at large OS text sizes
  - Independent Flip, pronunciation, and answer controls
  - Hidden-face accessibility exclusion and scroll reset
affects: [08-07, 08-10]
tech-stack:
  added: []
  patterns: [scrolling text viewport inside fixed action layout]
key-files:
  created: [.planning/phases/08-accessibility-retrofit/08-AUDIT-06.md, ealch-v2/__tests__/a11y-flashcards.test.tsx]
  modified: [ealch-v2/app/flashcards.tsx, ealch-v2/src/i18n/strings.ts]
key-decisions:
  - "A separate visible Flip button replaces whole-card tap so pronunciation is never nested inside Flip."
  - "Both mounted face scroll views reset before flip, grading, direction change, and restart."
requirements-completed: [A11Y-01, A11Y-02, A11Y-04]
duration: ~30min
completed: 2026-09-28
---

# Phase 8 Plan 06: Large-text flashcards

Front and back text now scroll within the animated card face, without a new text truncation rule. Progress, Flip, grading, and the pronunciation control remain outside the text scroll region. A separate Flip button removes the nested action structure. The turned-away face is excluded from accessibility traversal and touch handling. Existing recall scoring handlers remain intact.

## Verification

- `npm.cmd run test:component -- --runInBand --silent __tests__/a11y-flashcards.test.tsx`: 2 tests passed using long front/back fixtures.
- `npm.cmd run typecheck`: passed.
- `git diff --check`: passed.
- Android TalkBack and font scale 1.3+ remain for Plan 10 hardware verification.

## Deviations from Plan

- Kept both animated face views mounted; each text region uses a bounded `ScrollView` and only the visible face participates in accessibility queries.
- The formerly whole-card Flip action is a separate visible control so audio can have its own button role.

## Self-Check: PASSED

The focused tests confirm content remains untruncated, one visible pronunciation button is reachable, and flip/advance reset scrolling. Device layout and traversal remain a Plan 10 checkpoint.

## Next Phase Readiness

Ready for Plan 07's flash, voice, speech, and review route control audit.
