---
phase: 06-notification-correctness-body-format-toggles
plan: 02
subsystem: notifications
tags: [expo-notifications, react-native, node-test, source-guard]

# Dependency graph
requires:
  - phase: 06-notification-correctness-body-format-toggles (plan 01)
    provides: NotifKind/id/channel/cadence constants and notifIdsFor/allNotifIds helpers in utils/notifSchedule.logic.ts
provides:
  - services/notifications.ts extended to five scheduling/cancelling operations (scheduleDaily, scheduleNudge, scheduleReport, cancelKind, pruneUnknown) plus unchanged requestPermissions/cancelAll
  - A static source-guard test pinning the "blanket cancel only inside cancelAll" invariant
affects: [06-03, 06-04]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Per-kind local notification identifiers sourced from a pure logic module, never literals in the service file"
    - "Static source-text guard test (readFileSync + node:test) for files that cannot load under node --test because they import react-native/expo-notifications"

key-files:
  created:
    - ealch-v2/src/services/notifications.guard.test.ts
  modified:
    - ealch-v2/src/services/notifications.ts

key-decisions:
  - "Reworded two doc comments in notifications.ts (removed literal 'cancelAllScheduledNotificationsAsync()' from prose and literal quoted 'daily-reminder' from a comment) because the plan's own literal template text, if copied verbatim, would fail its own acceptance-criteria greps and the guard test's literal-scan assertion — meaning preserved, only the offending substrings paraphrased"

requirements-completed: [NOTIFY-01]

# Metrics
duration: ~20min
completed: 2026-09-21
---

# Phase 06 Plan 02: Per-Kind Notification Scheduling/Cancellation Summary

**services/notifications.ts extended from a one-kind (daily-only) scheduler into a three-kind scheduler (daily/report/nudge) with deterministic per-kind identifiers, per-kind cancellation, and an orphan-prune for pre-identifier builds — pinned by a 5-assertion static source guard test.**

## Performance

- **Duration:** ~20 min
- **Started:** 2026-09-20T19:20:00-07:00 (approx)
- **Completed:** 2026-09-20T19:44:19-07:00
- **Tasks:** 2 completed
- **Files modified:** 2 (1 modified, 1 created)

## Accomplishments
- `notifications.ts` now exposes `scheduleDaily` (unchanged signature, now identified + per-id cancel instead of blanket cancel), `scheduleNudge` (weekly, one request per `NUDGE_SLOTS` entry), `scheduleReport` (one-shot, `TIME_INTERVAL` trigger, `REPORT_DELAY_SECONDS` out), `cancelKind` (cancels exactly what one toggle owns via `notifIdsFor`), and `pruneUnknown` (drops any pending request not in `allNotifIds()`, addressing older builds' auto-id daily reminder)
- The one dangerous line — `cancelAllScheduledNotificationsAsync()` inside `scheduleDaily` — is gone; the blanket cancel now appears exactly once in the file, inside `cancelAll()`, reserved for the account-wide erase path
- Added `notifications.guard.test.ts`: a static, RN/expo-free `node --test` suite that reads `notifications.ts` and `app/_layout.tsx` as text and asserts the five invariants that make the above true, so a future edit that reintroduces the blanket cancel in a per-kind path, drops an identifier, or hardcodes a literal id/channel fails the test suite immediately

## Task Commits

Each task was committed atomically:

1. **Task 1: Give every notification kind its own identifier, trigger and cancel** - `331ceef` (feat)
2. **Task 2: Pin the per-kind cancel rule with a source guard test** - `dc9c1ad` (test)

**Plan metadata:** commit pending (this SUMMARY + REQUIREMENTS)

## Files Created/Modified
- `ealch-v2/src/services/notifications.ts` - rewritten to five operations (scheduleDaily/scheduleNudge/scheduleReport/cancelKind/pruneUnknown/cancelAll), all identifiers/channel/cadence imported from `@/utils/notifSchedule.logic`, blanket cancel confined to `cancelAll`
- `ealch-v2/src/services/notifications.guard.test.ts` - new static source-guard suite, 5 tests, 5/5 passing

## Decisions Made
- Paraphrased two doc-comment lines in `notifications.ts` that, copied verbatim from the plan's literal template, contained the exact banned substrings (`cancelAllScheduledNotificationsAsync` a second time, and a quoted `'daily-reminder'` literal) that the plan's own acceptance criteria and the guard test explicitly forbid. Rule 1 auto-fix: the plan's reference implementation was internally inconsistent between its literal template text and its verification steps; meaning was preserved, only the trigger substrings were reworded.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Plan's literal template text violated its own acceptance criteria**
- **Found during:** Task 1, first verification pass (guard test + acceptance-criteria greps)
- **Issue:** The plan's exact-text code block for `notifications.ts` includes a top-of-file doc comment that names `cancelAllScheduledNotificationsAsync()` in prose (making 2 total occurrences of that string, not 1) and a `pruneUnknown` doc comment that quotes `'daily-reminder'` literally (matching the "no hardcoded literal" ban). Both directly contradict: (a) Task 1's own acceptance criteria (`grep -c "cancelAllScheduledNotificationsAsync"` must return 1; the literal-string grep must return 0), and (b) Task 2's guard test assertions 1 and 4.
- **Fix:** Reworded the two comments to preserve their explanatory intent without the literal trigger substrings — "the blanket-cancel API below has NO filter" instead of naming the function, and "gets the new daily reminder too" instead of quoting the id.
- **Files modified:** `ealch-v2/src/services/notifications.ts`
- **Verification:** Re-ran `node --test ealch-v2/src/services/notifications.guard.test.ts` (5/5 pass) and all seven Task 1 acceptance-criteria greps (all return the required counts)
- **Committed in:** `331ceef` (part of Task 1 commit — caught and fixed before that commit was made)

---

**Total deviations:** 1 auto-fixed (1 bug fix, Rule 1)
**Impact on plan:** Comment wording only; no behavioral change. Necessary for the file to actually satisfy the plan's own stated verification, not scope creep.

## Issues Encountered
- This worktree had no `ealch-v2/node_modules` (worktrees don't share installs with the main checkout). Ran `npm install` inside the worktree to get `tsc` for the typecheck verification step; installation succeeded and `npm --prefix ealch-v2 run typecheck` exits 0. Not a plan deviation, just worktree environment setup.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- `notifications.ts`'s five-operation surface (`scheduleDaily`/`scheduleNudge`/`scheduleReport`/`cancelKind`/`pruneUnknown`/`cancelAll`) is ready for Plan 04 to rewire `useStore.ts`'s callers onto per-kind toggles instead of the old blanket-cancel-on-off pattern.
- No blockers for 06-03 (independent, parallel plan) or 06-04 (depends on this plan's exported surface, which matches the interface Plan 01/06-CONTEXT.md specified exactly).

---
*Phase: 06-notification-correctness-body-format-toggles*
*Completed: 2026-09-21*

## Self-Check: PASSED

- FOUND: ealch-v2/src/services/notifications.ts
- FOUND: ealch-v2/src/services/notifications.guard.test.ts
- FOUND: commit 331ceef (feat: Task 1)
- FOUND: commit dc9c1ad (test: Task 2)
