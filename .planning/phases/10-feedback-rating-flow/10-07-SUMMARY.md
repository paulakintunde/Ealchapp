---
phase: 10-feedback-rating-flow
plan: "07"
subsystem: feedback
tags: [expo-store-review, review-prompt, analytics]
requires: ["10-02"]
provides: ["native review request wiring (FEEDBACK-02)"]
affects: [lesson.tsx, LessonPager.tsx, act.tsx, den.tsx, paywall.tsx]
tech-stack:
  added: ["expo-store-review ~57.0.3"]
key-files:
  created:
    - ealch-v2/src/services/reviewPrompt.ts
    - ealch-v2/src/hooks/useReviewPromptOnFocus.ts
    - ealch-v2/src/services/reviewPrompt.wiring.test.ts
    - ealch-v2/__tests__/reviewPrompt-phase10.test.tsx
  modified:
    - ealch-v2/package.json
    - ealch-v2/package-lock.json
    - ealch-v2/src/services/acquisition.ts
    - ealch-v2/src/content/licences.ts
    - ealch-v2/app/lesson.tsx
    - ealch-v2/src/components/LessonPager.tsx
    - ealch-v2/app/paywall.tsx
    - ealch-v2/app/act.tsx
    - ealch-v2/app/den.tsx
metrics:
  tasks: 3
  completed: 2026-10-15
---

# Phase 10 Plan 07: Native review request wiring Summary

expo-store-review installed and wired: first perfect non-Sons quiz arms an in-memory 30-minute request that fires on the next act/den focus, with a serialised persisted spend written before the native call.

## Commits
- Task 1: 5027966 feat install expo-store-review, add review request I/O layer and focus hook (package.json, lock, reviewPrompt.ts, hook, acquisition.firstOpenAt, 20 jest behaviour tests)
- Task 2: a743e16 score plumbing, arming, completion counting, paywall note
- Task 3: 1204188 act/den hook calls and wiring contract test
- Deviation fix: 011c83c licences.ts entry

## Outcomes recorded
- app.json plugin: `node_modules/expo-store-review/app.plugin.js` does not exist, so app.json was NOT edited.
- Packs-readiness signal: no single "packs ready" flag exists. The seed gate is `useProgress.persist.hasHydrated() && useContent.hydrated && usePackSync.status === 'idle'`.
- Seed source: non-Sons keys of `useProgress.lessonMissions` with at least one done mission.
- expo-store-review is loaded with a lazy `require` inside try/catch (jest in this repo cannot run a dynamic `import()`; it also keeps a binary without the native module from crashing at import).
- lesson_completed now carries `quiz_score_bucket` ('none' for no-quiz).
- Skipped per orchestrator: the STATE.md "runtime moved" notice (orchestrator owns STATE.md). Orchestrator should append: "2026-10-15: runtime moved by expo-store-review (Phase 10, 10-07); no eas update from HEAD until the Phase 10 binary ships (D-33)." Plan 10-07 acceptance check `grep -c "runtime moved by expo-store-review" .planning/STATE.md` will fail until that is done.
- D-37: act.tsx, den.tsx, lesson.tsx, LessonPager.tsx, paywall.tsx, package files were clean before editing and diffs contained only this plan's hunks. Open 08.1 plans (02, 05, 06, 07) own LessonPager/den/paywall/app.json and are unexecuted; flagged, proceeded.

## Deviations
**1. [Rule 2 - Missing] licences.ts attribution.** `src/content/licences.test.ts` fails if a dependency is not credited; added `expo-store-review` (MIT). Commit 011c83c.

## Verification
- jest reviewPrompt-phase10: 20 passed (spend failure, seed not hydrated, arm expires after 30 minutes, cleared on app kill, concurrency, order, skips).
- node wiring + bannerSlotWiring tests pass; reviewPrompt.logic 16 pass; tsc clean; a11y lesson/paywall/trail/engagement jest pass.
- Full run: node tests 5796 pass, 0 fail after the licences fix. Full jest: 2 failing suites, `analytics-phase9` (offline outbox first_open) and `onboarding-phase9` (signup failure text). Neither touches code from this plan; other sessions have uncommitted edits to app/_layout.tsx and others. Not investigated further (out of scope).

## Notes for later plans
- 10-11 device seed keys: `ealch-review-state` (`{"v":1,"requests":[],"completed":[...],"armed":[],"seeded":true}`) and `ealch-acquisition-first-open`.
- D-42 follow-up: 30 days after the Phase 10 binary ships, compare `review_requested` volume with `lesson_completed` by quiz_score_bucket; if fewer than 1 in 50 eligible completions fire, propose loosening to 95% on quizzes of 40+ questions.

## Known Stubs
None.

## Self-Check: PASSED
