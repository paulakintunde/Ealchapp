---
phase: 06-notification-correctness-body-format-toggles
plan: 03
subsystem: notifications
tags: [notifications, i18n, node-test, zustand, expo-notifications]

# Dependency graph
requires:
  - phase: 06-notification-correctness-body-format-toggles (Plan 01, Wave 1)
    provides: "formatNotifText/placeholdersIn in notifText.logic.ts, bannerText/reportBody/nudgeBody templates in strings.ts"
provides:
  - "Both notification-body call sites (scheduler + in-app banner) built by the one shared formatter"
  - "The daily-reminder scheduler now supplies {name} via avatarName(avatarId) — the confirmed root cause of the literal '{name}' bug is closed"
  - "D-07 placeholder guard test (notifPlaceholders.test.ts) preventing future call sites from hand-rolling substitution or forgetting a declared placeholder"
affects: [06-04 (reportBody/nudgeBody wiring extends SUPPLIED and CALL_SITES in this guard test)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Notification body call sites must import formatNotifText from utils/notifText.logic.ts; no .replace('{ substitution is permitted anywhere in a call site file"
    - "notifPlaceholders.test.ts drives a SUPPLIED map (template key -> values its call site supplies) and a CALL_SITES list (files allowed to format a notification body) — extend both when adding a new notification kind"

key-files:
  created:
    - ealch-v2/src/i18n/notifPlaceholders.test.ts
  modified:
    - ealch-v2/src/store/useStore.ts
    - ealch-v2/src/components/PushBanner.tsx

key-decisions:
  - "Followed the plan's exact code for setAlarm/enableDailyReminder/PushBanner bodyText verbatim — no deviation needed."

patterns-established:
  - "A new notification template must add itself to SUPPLIED in notifPlaceholders.test.ts or the guard's own placeholder-coverage test fails on the new template silently declaring an unsupplied token."

requirements-completed: [NOTIFY-02]

# Metrics
duration: 25min
completed: 2026-09-20
---

# Phase 6 Plan 03: Route notification bodies through shared formatter Summary

**Scheduler and in-app banner now both build notification text with the same `formatNotifText`, and the scheduler passes `{name}` for the first time — closing the bug where a real device notification read "...4 min avec {name}." while the in-app banner read correctly.**

## Performance

- **Duration:** ~25 min
- **Started:** 2026-09-20T19:36:00Z (approx, worktree creation)
- **Completed:** 2026-09-21T02:46:58Z
- **Tasks:** 2/2 completed
- **Files modified:** 2 modified, 1 created

## Accomplishments
- `useStore.ts`'s `setAlarm` and `enableDailyReminder` now build the scheduled body with `formatNotifText(STRINGS[lang].bannerText, { t, name })`, supplying `avatarName(avatarId)` for `{name}` — the value the scheduler never passed before.
- `PushBanner.tsx`'s `speakReminder` body uses the same `formatNotifText` call with the same two keys, replacing its previously-correct-but-divergent chained `.replace()` calls.
- Added `ealch-v2/src/i18n/notifPlaceholders.test.ts`: a 5-test node:test guard (D-07) checking FR/EN placeholder parity, call-site placeholder coverage, no-literal-brace-after-formatting, no-hand-rolled-substitution, and every `notifications.schedule*()` call site has a matching `formatNotifText()` call.
- Negative control manually confirmed: temporarily reintroducing `.replace('{t}', 'x')` in `PushBanner.tsx` fails the guard suite (`no notification call site hand-rolls its own substitution`); file was restored to its committed state immediately after (confirmed via `git diff` showing no residual change).

## Task Commits

Each task was committed atomically:

1. **Task 1: Route the scheduler and the banner through the shared formatter** - `cdc4a66` (fix)
2. **Task 2: Add the D-07 placeholder guard** - `872c349` (test)

**Plan metadata:** (this commit, docs)

## Files Created/Modified
- `ealch-v2/src/store/useStore.ts` - `setAlarm`/`enableDailyReminder` import `avatarName` and `formatNotifText`; both now build the scheduled body via `formatNotifText(STRINGS[lang].bannerText, { t, name: avatarName(avatarId) })`
- `ealch-v2/src/components/PushBanner.tsx` - imports `formatNotifText`; `speakReminder` branch of `bodyText` now calls `formatNotifText(T.bannerText, { t, name: coachName })` instead of chained `.replace()`
- `ealch-v2/src/i18n/notifPlaceholders.test.ts` - new D-07 guard: 5 tests covering FR/EN parity, placeholder-supply coverage, no-literal-brace, no-hand-rolled-substitution, schedule/format call-count parity

## Decisions Made
None - plan executed exactly as written, including the exact code blocks given for `setAlarm`, `enableDailyReminder`, and the `bodyText` derivation.

## Deviations from Plan

None - plan executed exactly as written.

One immaterial note: the plan's acceptance criterion `grep -c "fileURLToPath" ealch-v2/src/i18n/notifPlaceholders.test.ts` returns `1` was written assuming a single matching line, but `grep -c` counts matching LINES and the file has two (the `import` line and the `dirname(fileURLToPath(...))` usage line), so the actual count is `2` — identical in shape to the existing `a1-10-meteo.test.ts` reference pattern the plan told this task to follow. This is a grep-counting artifact in the plan's stated criterion, not a defect in the test file; the negative-control and all 5 functional tests pass as specified.

## Issues Encountered
- This worktree had no `node_modules` installed for `ealch-v2` (worktrees do not inherit the main repo's install). Ran `npm install --prefer-offline --no-audit --no-fund` inside `ealch-v2/` in this worktree only, to enable `npm run typecheck` and `node --test` to run. This is a local, worktree-scoped install with no source changes; nothing was committed for it (node_modules is gitignored).

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- `notifPlaceholders.test.ts`'s `SUPPLIED` map and `CALL_SITES` list are ready to extend: Plan 04 wires `reportBody`/`nudgeBody` and per the plan's own note should add both keys to `SUPPLIED` and expect `useStore.ts`'s schedule-call and `formatNotifText`-call counts to grow in pairs.
- No blockers for Plan 04.

---
*Phase: 06-notification-correctness-body-format-toggles*
*Completed: 2026-09-20*

## Self-Check: PASSED

- FOUND: ealch-v2/src/store/useStore.ts
- FOUND: ealch-v2/src/components/PushBanner.tsx
- FOUND: ealch-v2/src/i18n/notifPlaceholders.test.ts
- FOUND commit: cdc4a66
- FOUND commit: 872c349
