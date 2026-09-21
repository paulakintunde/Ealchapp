---
phase: 06-notification-correctness-body-format-toggles
plan: 01
subsystem: notifications
tags: [i18n, expo-notifications, node-test, pure-functions]

# Dependency graph
requires: []
provides:
  - "formatNotifText/placeholdersIn — the one shared, tested notification/banner body substitution function"
  - "notifSchedule.logic.ts — NotifKind, NOTIF_CHANNEL_ID, DAILY_ID, REPORT_ID, REPORT_DELAY_SECONDS, NUDGE_SLOTS, notifIdsFor, allNotifIds, proven pairwise-disjoint per kind"
  - "reportBody/nudgeBody FR+EN copy in strings.ts, each declaring only {name}"
  - "Corrected report toggle sub-label (no longer promises an evening delivery)"
affects: [06-02, 06-03, PushBanner.tsx, services/notifications.ts, store/useStore.ts, settings.tsx]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Pure .logic.ts files with zero RN/zustand/expo imports, loadable under plain `node --test`, mirroring utils/time.ts"
    - "Single-pass String.replace with a function replacer for token substitution (never eval/Function, never a template engine, never a multi-pass reduce)"
    - "Per-kind fixed identifier sets asserted pairwise-disjoint via a cross-product test, replacing blanket cancelAllScheduledNotificationsAsync()"

key-files:
  created:
    - ealch-v2/src/utils/notifText.logic.ts
    - ealch-v2/src/utils/notifText.logic.test.ts
    - ealch-v2/src/utils/notifSchedule.logic.ts
    - ealch-v2/src/utils/notifSchedule.logic.test.ts
  modified:
    - ealch-v2/src/i18n/strings.ts

key-decisions:
  - "Reworded the notifText.logic.ts header comment from 'never eval' to 'never dynamic code execution' — the plan's own exact-content block for this file contained the literal substring 'eval' in prose, which contradicted its own acceptance criterion (grep -c 'eval|new Function' must return 0). Preserved the documented intent without the literal substring."
  - "Installed ealch-v2's npm dependencies (npm ci) — the worktree had no node_modules, and Task 3's mandated verification (npm run typecheck) is a blocking prerequisite that cannot be skipped."

requirements-completed: [NOTIFY-01, NOTIFY-02]

# Metrics
duration: 12min
completed: 2026-09-21
---

# Phase 06 Plan 01: Notification Formatter, Scheduling Vocabulary & Copy Summary

**Pure, node-testable notification-body formatter and per-kind scheduling id vocabulary, plus FR/EN report/nudge copy with a corrected report sub-label**

## Performance

- **Duration:** 12 min
- **Started:** 2026-09-21T02:22:00Z
- **Completed:** 2026-09-21T02:28:20Z
- **Tasks:** 3
- **Files modified:** 5 (4 created, 1 modified)

## Accomplishments
- `formatNotifText`/`placeholdersIn` in a zero-import pure file, with 9 passing `node --test` cases covering substitution, single-pass inertness (a value containing `{key}` is never re-scanned), unsupplied-token literal passthrough, and placeholder extraction/dedup — this is the one substitution function every notification body and the in-app banner must now share.
- `notifSchedule.logic.ts` establishing `NotifKind`, `NOTIF_CHANNEL_ID`, `DAILY_ID`, `REPORT_ID`, `REPORT_DELAY_SECONDS` (180s), `NUDGE_SLOTS` (Mon/Thu 18:30), `notifIdsFor`, and `allNotifIds`, with a 6-test suite including a real cross-product proof that each toggle's identifier set is pairwise disjoint from the other two.
- `reportBody`/`nudgeBody` templates added to `strings.ts` in both FR and EN, each declaring exactly `{name}`, and the report toggle's sub-label corrected in both languages so it no longer claims an evening delivery.

## Task Commits

Each task was committed atomically (TDD RED/GREEN for Tasks 1-2):

1. **Task 1: Create the shared notification-body formatter**
   - `2b583b3` (test) — failing test for formatNotifText/placeholdersIn
   - `06333af` (feat) — implementation, all 9 tests green
2. **Task 2: Create the per-kind scheduling vocabulary**
   - `67408ed` (test) — failing test for per-kind notification id vocabulary
   - `9192036` (feat) — implementation, all 6 tests green including disjointness cross-product
3. **Task 3: Add report/nudge body templates and correct the report sub-label**
   - `beb3e50` (feat) — strings.ts type decl, FR/EN templates, sub-label fix

_TDD tasks produced test → feat commit pairs; no refactor commit was needed for either._

## Files Created/Modified
- `ealch-v2/src/utils/notifText.logic.ts` - `formatNotifText` (single-pass `{key}` substitution) and `placeholdersIn` (deduped, first-appearance-order token extraction); zero imports
- `ealch-v2/src/utils/notifText.logic.test.ts` - 9 `node --test` cases covering every `<behavior>` row from the plan
- `ealch-v2/src/utils/notifSchedule.logic.ts` - `NotifKind`, `NOTIF_CHANNEL_ID`, `DAILY_ID`, `REPORT_ID`, `REPORT_DELAY_SECONDS`, `NUDGE_SLOTS`, `notifIdsFor`, `allNotifIds`; zero imports
- `ealch-v2/src/utils/notifSchedule.logic.test.ts` - 6 `node --test` cases including the pairwise-disjointness cross-product
- `ealch-v2/src/i18n/strings.ts` - `reportBody`/`nudgeBody` added to type decl + FR + EN tables; report toggle `sub` corrected in both `notifLabels` arrays

## Decisions Made
- Kept `formatNotifText` to a single `String.replace` pass with a function replacer rather than the `Object.entries(...).reduce(...)` shape sketched in 06-RESEARCH.md Pattern 2, per the plan's explicit instruction — the reduce shape re-scans already-substituted text, which would let a value containing `{key}` trigger a second substitution round (this is exactly T-06-01's mitigation).
- Did not touch `notifLabels[0]` (daily) or `notifLabels[2]` (nudge) sub-labels in either language table, and did not add a fourth `notifLabels` entry — both constraints from the plan, verified by `i18n.test.ts`'s length-3 assertion staying green.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Reworded a self-contradicting comment in the plan's own exact-content block**
- **Found during:** Task 1 (notifText.logic.ts implementation)
- **Issue:** The plan's literal file content for `notifText.logic.ts` included the header-comment phrase "never a template engine and never eval", but the plan's own acceptance criterion requires `grep -c "eval\|new Function" ealch-v2/src/utils/notifText.logic.ts` to return `0`. Writing the file exactly as specified would fail its own acceptance check.
- **Fix:** Reworded the comment to "never a template engine and never dynamic code execution", preserving the documented intent (no eval/Function/template-engine substitution path) without the literal substring `eval`.
- **Files modified:** ealch-v2/src/utils/notifText.logic.ts
- **Verification:** `grep -c "eval\|new Function" ealch-v2/src/utils/notifText.logic.ts` returns `0`; all 9 tests still pass.
- **Committed in:** `06333af` (Task 1 feat commit)

**2. [Rule 3 - Blocking] Installed missing ealch-v2 dependencies**
- **Found during:** Task 3 (typecheck verification)
- **Issue:** The worktree had no `ealch-v2/node_modules`, so `npm run typecheck` failed with `'tsc' is not recognized` — a mandated verification step for Task 3 could not run at all.
- **Fix:** Ran `npm ci` in `ealch-v2/` (package-lock.json present, so an exact, reproducible install).
- **Files modified:** none tracked (node_modules is gitignored; no package.json/lockfile changes)
- **Verification:** `npm run typecheck` now runs and exits 0; `npm run test:i18n` passes (4/4).
- **Committed in:** not applicable — no tracked files changed by this fix

---

**Total deviations:** 2 auto-fixed (both Rule 3 - blocking)
**Impact on plan:** Both fixes were necessary to make the plan's own verification commands runnable/passable. No scope creep — no code behavior changed beyond a doc-comment wording fix.

## Issues Encountered
None beyond the two deviations above.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Plan 02 (and any other Wave 2/3 plans consuming this foundation) can now import `formatNotifText`, `placeholdersIn`, and the full `notifSchedule.logic.ts` vocabulary directly — no further foundation work needed.
- `reportBody`/`nudgeBody` are ready for the scheduler (`services/notifications.ts` / `store/useStore.ts`) to call through `formatNotifText` with `{ name: avatarName(avatarId) }`.
- No blockers identified for downstream Phase 6 plans.

---
*Phase: 06-notification-correctness-body-format-toggles*
*Completed: 2026-09-21*

## Self-Check: PASSED

All 5 created/modified files verified present on disk; all 5 task commits (`2b583b3`, `06333af`, `67408ed`, `9192036`, `beb3e50`) verified present in `git log`.
