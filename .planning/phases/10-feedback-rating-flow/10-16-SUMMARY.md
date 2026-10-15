---
phase: 10-feedback-rating-flow
plan: "16"
subsystem: content
tags: [feedback, item-keys, tdd]
requires: []
provides: [quizItemKey, missionItemKey, hash8]
affects: [10-14]
key-files:
  created:
    - ealch-v2/src/content/quizItemKey.logic.ts
    - ealch-v2/src/content/quizItemKey.test.ts
decisions:
  - "KNOWN_DUPLICATES positions are flat authored indexes across the quiz (rounds flattened), so c2.04.l1 q4 and q61 are r1-costume.q4 and r8-bilan.q5"
metrics:
  completed: 2026-10-15
---

# Phase 10 Plan 16: Report item keys Summary

Stable one-way report item ids: quiz key is authored position plus FNV-1a hash8 of the canonical question text, mission key is section id plus card sub-index.

## Commits
- b5978e5 test(10-16): failing test (RED)
- a0ee80a feat(10-16): implementation (GREEN)

## Results
- Live corpus (seed.json + seed-packs.json): 12046 questions, longest key 59 characters.
- KNOWN_DUPLICATES: `[{ lesson: 'c2.04.l1', a: 'q4', b: 'q61' }]`, asserted identical in canonical text.
- Full `npm test` in ealch-v2: 5832 pass, 0 fail.

## Deviations from Plan
- The test reimplements the quiz walk instead of importing quizQuestions, to keep round ids for keys. The test does import the type only.
- The KNOWN_DUPLICATES positions are the flat index, since the key position inside rounds is round-relative.

## Self-Check: PASSED
