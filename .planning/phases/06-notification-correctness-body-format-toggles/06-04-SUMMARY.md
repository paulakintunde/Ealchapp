---
phase: 06-notification-correctness-body-format-toggles
plan: 04
subsystem: retention
tags: [zustand, expo-notifications, notifications, react-native]

# Dependency graph
requires:
  - phase: 06-notification-correctness-body-format-toggles (Plan 02)
    provides: "notifications.ts's scheduleDaily/scheduleNudge/scheduleReport/cancelKind/pruneUnknown/cancelAll API"
  - phase: 06-notification-correctness-body-format-toggles (Plan 01)
    provides: "notifSchedule.logic.ts's NotifKind, notifText.logic.ts's formatNotifText, and strings.ts's reportBody/nudgeBody templates"
  - phase: 06-notification-correctness-body-format-toggles (Plan 03)
    provides: "enableDailyReminder's formatNotifText-based body and setAlarm's per-kind-safe scheduleDaily call, both left as this plan's starting point"
provides:
  - "setSessionEndListener injection point in useProgress.ts, letting useStore register a post-session side effect without a reverse import"
  - "enableNotifKind: one action that arms any of daily/report/nudge and reverts the toggle on native permission denial"
  - "resyncNotifs: re-arms daily/nudge and prunes pre-identifier orphans once per app launch, from persisted toggle state"
  - "setNotif routes every toggle through enableNotifKind (on) / notifications.cancelKind (off), with cancelAll() now confined to eraseLocalData"
  - "notifPlaceholders.test.ts's D-07 guard extended to reportBody and nudgeBody, plus a new call-site-reachability test"
affects: [17-notification-tap-deep-link]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Cross-store side effect via injected setter (useProgress exposes setSessionEndListener; useStore, which already imports useProgress, registers the handler) instead of a reverse module import — keeps the one-way dependency direction useStore.ts's own comment documents"
    - "Every notification toggle-off calls notifications.cancelKind(k), never cancelAll() — the only surviving blanket cancel is the account-wide eraseLocalData path"

key-files:
  created: []
  modified:
    - ealch-v2/src/store/useProgress.ts
    - ealch-v2/src/store/useStore.ts
    - ealch-v2/src/i18n/notifPlaceholders.test.ts

key-decisions:
  - "Followed the plan's injected-listener design exactly rather than adding a reverse import, preserving the invariant useStore.ts's import-block comment already asserts"
  - "resyncNotifs is a plain function call from onRehydrateStorage (fire-and-forget void), not awaited, matching the existing setHydrated-then-side-effect shape"

requirements-completed: [NOTIFY-01, NOTIFY-02]

# Metrics
duration: ~35min
completed: 2026-09-21
---

# Phase 06 Plan 04: Wire All Three Notification Toggles to Real Delivery Summary

**All three `notifs` toggles (daily/report/nudge) now drive real per-kind `expo-notifications` scheduling through one shared `enableNotifKind` action, with launch-time resync and a widened D-07 placeholder guard — closing the "toggle does nothing" gap for `report` and `nudge`.**

## Performance

- **Duration:** ~35 min
- **Completed:** 2026-09-21T03:05:43Z
- **Tasks:** 3/3
- **Files modified:** 3

## Accomplishments
- `useProgress.ts` gained a session-end injection point (`setSessionEndListener`/`SessionEndListener`) so `useSessionLog`'s callback can fire a side effect after logging, without `useProgress` ever importing `useStore` or the notification service
- `useStore.ts`'s `setNotif` now schedules-on/cancels-off every kind uniformly via the new `enableNotifKind` action and `notifications.cancelKind`, replacing the daily-only branch and its blanket `cancelAll()` on toggle-off
- `enableNotifKind` generalizes the OS-denial-reverts-the-toggle contract from `daily` to all three kinds; `enableDailyReminder` now delegates to it so `app/onboarding.tsx`'s step-8 call site is untouched
- `resyncNotifs` runs once after rehydration: prunes pre-identifier orphans (`pruneUnknown`) and re-arms `daily`/`nudge` from the persisted toggle state, so what Settings shows is what the device will actually do after a cold launch
- The post-session report (D-04) is registered from the bottom of `useStore.ts` via the injected listener, firing `notifications.scheduleReport` with a `formatNotifText`-built body only when `notifs.report` is true
- `notifPlaceholders.test.ts`'s `SUPPLIED` map now covers `reportBody`/`nudgeBody` alongside `bannerText`, and a new sixth test asserts every declared template is actually referenced by a call site

## Task Commits

Each task was committed atomically:

1. **Task 1: Add the session-end injection point in useProgress** - `b8e28c1` (feat)
2. **Task 2: Wire all three toggles to real per-kind scheduling** - `6991e6c` (feat)
3. **Task 3: Extend the placeholder guard to the report and nudge templates** - `03b4abf` (test)

**Plan metadata:** committed alongside this SUMMARY (worktree mode — orchestrator finalizes STATE.md/ROADMAP.md after merge)

## Files Created/Modified
- `ealch-v2/src/store/useProgress.ts` - Exports `SessionEndListener`/`setSessionEndListener`; `useSessionLog`'s callback fires the listener (try/catch-isolated) after `logSession`
- `ealch-v2/src/store/useStore.ts` - `enableNotifKind`, `resyncNotifs`, generalized `setNotif`, `enableDailyReminder` delegation, `onRehydrateStorage` resync call, and the post-session report listener registration
- `ealch-v2/src/i18n/notifPlaceholders.test.ts` - `SUPPLIED` extended to `reportBody`/`nudgeBody`; new "every notification template is used by a call site" test

## Decisions Made
None beyond what the plan specified — implementation followed the plan's exact code blocks for all three tasks.

## Deviations from Plan

### Auto-fixed Issues

None — no bugs, missing functionality, or blocking issues required a fix. All edits matched the plan's action blocks verbatim.

### Plan-text self-contradictions (documented, not corrected)

Two of the plan's own acceptance-criteria greps conflict with verbatim code/comment text the same plan instructs to add. Both are informational grep counts, not functional checks, and the underlying architectural invariants (verified separately below) hold in both cases.

**1. Task 1 acceptance criterion `grep -c "useStore\|services/notifications" ealch-v2/src/store/useProgress.ts` expects `0`, actual is `2`**
- **Cause:** The plan's own mandated doc comment (added verbatim per the task's `<action>` block) reads "`useStore.ts` imports this module..." and "...`useStore` registers a listener..." — two literal matches of the string "useStore" in prose, not code.
- **Verified instead:** `grep -n "^import" ealch-v2/src/store/useProgress.ts` shows no import of `./useStore` or `@/services/notifications` — the actual one-way dependency invariant this criterion exists to protect is intact.
- **No fix applied:** rewording the plan-mandated comment to dodge a grep would depart further from the plan's literal instructions than leaving the (harmless) grep-count mismatch.

**2. Task 2 acceptance criterion `grep -c "enableNotifKind" ealch-v2/src/store/useStore.ts` expects `4`, actual is `5`**
- **Cause:** The plan's own mandated doc comment above `enableDailyReminder` (added verbatim) reads "It is now one case of `enableNotifKind`." — a fifth literal match beyond the type declaration, implementation, `setNotif` call, and `enableDailyReminder` delegation the plan's own parenthetical enumerates.
- **Verified instead:** all four functional call sites the criterion's parenthetical names are present exactly once each; the fifth match is prose in a comment.
- **No fix applied:** same reasoning as above.

Both are also confirmed against the plan's final `<verification>` section (item 4, `grep -c "useStore" ealch-v2/src/store/useProgress.ts` returns `0`) which has the identical self-contradiction with Task 1's own mandated comment text.

---

**Total deviations:** 0 auto-fixed. 2 plan-text self-contradictions noted (informational grep counts only; no functional impact, both underlying invariants independently verified true).
**Impact on plan:** None on delivered functionality — every acceptance criterion whose grep pattern only matches real code (not plan-mandated comment prose) passes exactly as specified, and the full test suite plus typecheck are green.

## Issues Encountered
- `ealch-v2/node_modules` was not present in this worktree (fresh worktree checkout); ran `npm install --prefer-offline --no-audit --no-fund` inside `ealch-v2/` to restore it before typecheck/test could run. `node_modules/` is gitignored, so this produced no tracked-file changes.
- Plan's Task 1 `<verify>` command referenced `ealch-v2/src/store/progress.logic.test.ts`, which does not exist in this codebase (the equivalent suite is `progress.test.ts`). Ran the broader `node --test "ealch-v2/src/store/*.test.ts"` instead, per the task's own acceptance criteria, which explicitly names that broader command — all 259 tests in that glob passed.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- All three notification toggles (`daily`, `report`, `nudge`) now have real, independently-cancellable local-notification delivery — Phase 17's tap-to-deep-link work (NOTIFY-03) can build uniformly on all three kinds using the same `notifIdsFor`/`NotifKind` surface Plan 01/02 established.
- `npm --prefix ealch-v2 run typecheck` and `npm --prefix ealch-v2 test` both exit 0 (5417 tests passing) as of this plan's final commit.
- No blockers for the wave 3 merge.

---
*Phase: 06-notification-correctness-body-format-toggles*
*Completed: 2026-09-21*

## Self-Check: PASSED

- FOUND: ealch-v2/src/store/useProgress.ts
- FOUND: ealch-v2/src/store/useStore.ts
- FOUND: ealch-v2/src/i18n/notifPlaceholders.test.ts
- FOUND: .planning/phases/06-notification-correctness-body-format-toggles/06-04-SUMMARY.md
- FOUND commit: b8e28c1 (Task 1)
- FOUND commit: 6991e6c (Task 2)
- FOUND commit: 03b4abf (Task 3)
