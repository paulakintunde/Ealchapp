---
phase: 10-feedback-rating-flow
plan: "05"
subsystem: report
tags: [le-rapport, a11y, routing, accuracy]
requires: ["10-01"]
provides:
  - "headlineAttempts / reportFigures in src/store/report.logic.ts (single home of the exam-review exclusion)"
  - "Le Rapport at /report; /feedback redirects"
  - "Profile 'Your report' row"
affects: [10-11]
key-files:
  created:
    - ealch-v2/src/store/report.logic.ts
    - ealch-v2/src/store/reportAccuracy.test.ts
    - ealch-v2/src/store/reportRouteWiring.test.ts
    - ealch-v2/__tests__/report-phase10.test.tsx
    - ealch-v2/app/feedback.tsx (now a redirect stub)
  modified:
    - ealch-v2/app/report.tsx (git mv from feedback.tsx)
    - ealch-v2/app/roleplay.tsx
    - ealch-v2/app/speak.tsx
    - ealch-v2/app/_layout.tsx
    - ealch-v2/app/profile.tsx
requirements-completed: [FEEDBACK-01]
completed: 2026-10-15
---

# Phase 10 Plan 05: Le Rapport fixes Summary

Le Rapport now lives at /report with headline figures that exclude exam-review misses, localized drill names, an accessible ring and labelled weak rows, reachable from Profile.

## Commits
- 07c49c2: Task 1, report.logic.ts + reportAccuracy.test.ts
- 65246c4: Task 2, /report rename, a11y, redirect, Profile row
- 20046f9: Task 3, component test

## Verification
- node --test reportAccuracy / reportRouteWiring / drillNames: 14 pass.
- tsc --noEmit: clean.
- jest report-phase10.test.tsx: 8 pass (FR and EN x empty, exam-review-only, populated, Profile agreement 83%). Act warnings from Profile animations are noise only.
- `npm test`: 5884 of 5885 pass. The one failing file set (dependency attribution test and src/services/reviewPrompt.wiring.test.ts) belongs to plan 10-07 (expo-store-review), running concurrently; not caused by this plan and not touched.

## Deviations from Plan
None in behaviour. Notes:
- Weak list still uses the full log (D-27); only headline/drill figures use headlineAttempts.
- ConfidenceRing takes an `a11y` prop computed in the parent from T.reportRingA11y.
- Wiring test initially failed to parse because of a halved backslash in a heredoc; rewritten with String.fromCharCode(92).

## D-37 / D-46
All five pre-existing shared files were clean before editing, and the diff was checked as own-hunks-only before commit. 08.1-02, 08.1-04 and 08.1-05 (own _layout.tsx / speak.tsx) have no SUMMARY yet: they are unexecuted and must rebase onto the /report change in _layout.tsx and speak.tsx (`router.push('/report')`).

## Known Stubs
None.

## Self-Check: PASSED
