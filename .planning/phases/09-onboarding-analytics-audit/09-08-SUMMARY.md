---
phase: 09-onboarding-analytics-audit
plan: "08"
subsystem: analytics-review-gap-closure
tags: [analytics, placement, outbox, attribution, tests]
requires:
  - phase: 09-onboarding-analytics-audit
    provides: Plans 01-07 event boundaries
provides:
  - initial_result defined by the first terminal placement outcome
  - persistent outbox for offline, throttled and server-failed captures
  - once-per-status install attribution with a five-lookup cap
  - fresh placement check when a saved checkpoint no longer matches the corpus
affects: [09-06]
requirements-addressed: [QA-02]
completed: 2026-09-30
---

# Phase 9 Plan 08 Summary

The 2026-09-30 review of the executed phase found five defects. Four are fixed in code and one is recorded as a funnel rule.

## Accomplishments

- **G-09-07:** `placement_result.initial_result` now uses `isInitialResult(firstPlacementOutcome, attemptId)`. A result after a skip, an abandonment or a terminal load failure reports `false`, agreeing with `placement_started.source: 'later'`. Before, it read "no first completed result yet" and reported `true` after a skip, which broke D-05.
- **G-09-08:** every capture, including `$identify`, goes through `deliver()`. Offline, 429 and 5xx failures are saved without the key and resent on launch and foreground with the original event ID and timestamp. A 4xx is not retried. The outbox holds at most 200 events for 14 days.
- **G-09-09:** `install_attribution` has a per-install, per-status milestone key. A failing Play lookup stops after five launches and reports `lookup_failed` once.
- **G-09-10:** a placement checkpoint naming an item that an update removed now starts a fresh check. It was shown as "Quick check unavailable" and recorded as `placement_load_failed`, reason `other`.
- **G-09-11:** no code change. Lesson progress is not synced, so a second device can resend `first_lesson_started` for the same account. The funnel counts first time per person (D-29), and the event audit no longer claims the app deduplicates this.

## Round 2: independent review (Task 4)

A separate code reviewer and UI checker reviewed round 1. Fixed:

- A captive-portal 200 with an HTML body counted as accepted and would have emptied the outbox. A 2xx that is not PostHog JSON now counts as offline.
- Captures time out after 10 seconds, so a hung request cannot stall every later event.
- 408 is retried. Stored entries are validated, so one malformed element cannot block the outbox.
- Flush progress is saved after each entry. While anything is queued, a new event queues behind it, so a queued `$identify` still precedes `signup_completed`.
- A redraw after an outdated placement checkpoint reports `source: 'later'`, not a second initial start.
- UI: `Button` has a `danger` variant used by "End quick check"; the guest route is 44 dp; the signup error is a polite live region and is announced on iOS; the unavailable heading takes focus.

Accepted limitation: a send PostHog accepted but whose response was lost is resent with the same event ID.

## Verification

- `npm run typecheck`: exit 0.
- `npm test`: 5,733 passed, 0 failed.
- `npm run test:component -- --runInBand`: 19 suites, 77 tests passed.
- New tests: 1 pure placement, 6 pure analytics, 3 placement route, 3 outbox route, 1 attribution route. The independent reviewer confirmed the round-1 tests fail on the code they replaced, except the "first result is initial" route test. The round-2 tests were written against the new behaviour and were not checked against the old code.

## Deviations from Plan

None. The fix was written before this plan file during the review session; the plan records it in the standard format.

## Next Phase Readiness

Plan 06 resumes with Task 0. Device proof should include one offline milestone delivered through the outbox.

## Self-Check: PASSED

Source changes are in the working tree with green unit, component and type suites. Not yet committed.
