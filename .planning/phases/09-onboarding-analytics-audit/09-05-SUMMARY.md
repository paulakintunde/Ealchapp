---
phase: 09-onboarding-analytics-audit
plan: "05"
subsystem: engagement
tags: [analytics, lessons, exams, streak, purchases]
requires:
  - phase: 09-onboarding-analytics-audit
    provides: typed identity and capture from Plan 01
provides:
  - first structured lesson activation at the visible pager
  - per-visit lesson completion after progress writes
  - durable exam sitting ID and graded/ungraded outcome counts
  - first-practice-day streak milestone and safe purchase outcomes
affects: [09-06]
tech-stack:
  added: []
  patterns: [writer-boundary events, persisted sitting identity, fixed purchase categories]
key-files:
  created:
    - ealch-v2/src/services/engagement.logic.ts
    - ealch-v2/src/services/engagement.logic.test.ts
    - ealch-v2/__tests__/engagement-phase9.test.tsx
  modified:
    - ealch-v2/app/lesson.tsx
    - ealch-v2/app/exam-section.tsx
    - ealch-v2/app/paywall.tsx
    - ealch-v2/src/store/useProgress.ts
    - ealch-v2/src/services/analytics.logic.ts
    - ealch-v2/src/services/analytics.ts
    - ealch-v2/src/services/examDraft.logic.ts
    - ealch-v2/src/services/purchases.ts
requirements-completed: [QA-02]
completed: 2026-09-29
---

# Phase 9 Plan 05 Summary

The first lesson event fires when a structured lesson pager actually mounts, after entitlement and introductory screens. Quiz and no-quiz completion events follow session and progress writes and carry a visit ID. Exam submission follows section result writes, with a sitting ID restored from its draft and graded/ungraded counts only. The first practice session of a local day emits the same streak length shown by the progress engine, including placement sessions. Purchase events share an attempt ID and include a fixed outcome category without raw service errors.

## Verification

- Focused engagement, exam-draft, and analytics pure tests: 23 passed.
- Focused engagement component tests: 3 passed. Focused accepted-capture component tests: 3 passed.
- Full component suite: 62 passed, 0 failed. TypeScript check passed.
- Full unit suite: 5,720 passed, 1 failed. The failure is missing alt text for newly registered B2 lesson images in separate uncommitted content work; no Phase 9 test failed.
- `git diff --cached --check` passed.

## Commit

- `c11f4f8` — lesson, exam, streak, purchase events and focused proof.

## Deviations from Plan

- Adapty's purchase result in this SDK version has no top-level transaction ID. A UUID minted at purchase tap ties its started and terminal events and deduplicates completion within the attempt.
- The exam draft gained additive sitting ID and outcome fields without changing its version. Existing drafts retain answers; a missing legacy sitting ID is assigned on restore and then persisted.

## Next Phase Readiness

Plan 09-06 must audit exact event capture and run Android/iPhone, Play-install, and store-sandbox proof. The repository-wide unit gate must also return green before phase completion.

## Self-Check: PASSED WITH EXTERNAL UNIT-SUITE FAILURE

Plan 05 focused tests, full component tests, and typecheck passed. The unrelated B2 image-alt failure keeps the full unit gate red.
