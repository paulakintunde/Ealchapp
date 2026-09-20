---
phase: 05-paywall-coverage-expansion-upgrade-nudge
plan: 05
subsystem: ui
tags: [zustand, react-native, banner, discriminated-union, analytics]

# Dependency graph
requires:
  - phase: 05-paywall-coverage-expansion-upgrade-nudge
    plan: 01
    provides: "acctTag/reconcileBody/nudgeRoleplayBody i18n strings and the upgrade_nudge_tapped/upgrade_nudge_shown/reconciliation_shown AnalyticsEvent union members this plan's PushBanner code consumes"
provides:
  - "useUI.banner: BannerState | null — a three-member exported tagged union (speakReminder/upgradeNudge/reconciliation) replacing the old bannerVisible/bannerAt boolean pair"
  - "PushBanner.tsx rendering masthead, badge background/ink, body copy, top-right meta and press target entirely from banner.kind, sharing one unchanged card shell and slide animation"
  - "bannerSlotWiring.test.ts — source-text assertions pinning the full migration so a future edit can't reintroduce the old boolean API or a rival visibility flag"
  - "Component-local 10s auto-hide for upgradeNudge/reconciliation, distinct from speakReminder's unchanged caller-side 12s timer in useAlarmWatcher.ts"
affects: [05-06, 10]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "One nullable tagged-union Zustand field as the structural guarantee for 'exactly one X at a time', instead of a boolean plus coordination logic"
    - "Per-kind presentation derived via banner?.kind === '...' ternary chains inside the single shared component, rather than a switch/branch per render function"

key-files:
  created:
    - ealch-v2/src/store/bannerSlotWiring.test.ts
  modified:
    - ealch-v2/src/store/useUI.ts
    - ealch-v2/src/hooks/useAlarmWatcher.ts
    - ealch-v2/app/settings.tsx
    - ealch-v2/src/components/PushBanner.tsx

key-decisions:
  - "Followed the plan's exact code blocks for both the useUI.ts union and PushBanner.tsx's per-kind derivation — no deviation from specified implementation"
  - "Did not unify speakReminder's caller-side 12s timer with the two new kinds' component-local 10s timer, per the plan's explicit instruction that moving it would change shipped notification behaviour (Phase 6 territory)"

requirements-completed: [PAY-05]

# Metrics
duration: 10min
completed: 2026-09-20
---

# Phase 5 Plan 5: Generalized Banner Slot Summary

**useUI's `banner: BannerState | null` tagged union (speakReminder/upgradeNudge/reconciliation) replaces the old bannerVisible/bannerAt boolean pair, and PushBanner.tsx now derives its masthead, badge, body copy and press target entirely from `banner.kind`**

## Performance

- **Duration:** ~10 min
- **Started:** 2026-09-20T11:35:00-07:00 (first commit)
- **Completed:** 2026-09-20T11:40:21-07:00 (last task commit)
- **Tasks:** 2 completed
- **Files modified:** 5 (1 created, 4 modified)

## Accomplishments

- Replaced `useUI.ts`'s `bannerVisible: boolean` / `bannerAt: string` pair with one nullable `banner: BannerState | null` field typed as a three-member exported union — D-14's "exactly one banner at a time" is now a property of the type, not coordination logic.
- Migrated both existing writers (`useAlarmWatcher.ts`, `app/settings.tsx`) to `showBanner({ kind: 'speakReminder', at })` with zero behaviour change — the reminder still fires at the alarm time, still plays the ding, still keeps its own 12s caller-side auto-hide timer.
- Made `PushBanner.tsx` fully kind-driven: masthead label, badge background/ink, body copy, top-right meta, and press target (`/speak`, `/paywall?from=gate:roleplay`, or `/settings`) all derive from `banner?.kind`, while the card shell, slide animation (500ms, -140 offset) and off-grid spacing (`padding: 13`/`15`) are untouched.
- Added a component-local 10s auto-hide for the two new kinds (`upgradeNudge`, `reconciliation`), since neither has a caller-side timer the way `speakReminder` does.
- Wired `upgrade_nudge_tapped` analytics tracking into the nudge's press path.
- Created `bannerSlotWiring.test.ts` (5 tests) as a permanent source-text pin: no reader/writer anywhere in the tree may reintroduce `bannerVisible`/`bannerAt`, both existing writers must keep raising the reminder kind unchanged, `PushBanner` must handle both new kinds with correct press targets, and exactly one `<PushBanner` mount must exist in `app/_layout.tsx`.

## Task Commits

Each task was committed atomically:

1. **Task 1: Replace the boolean banner slot with a tagged union, and migrate both writers** - `58a9faa` (feat)
2. **Task 2: Make PushBanner render by kind, and pin the whole migration** - `a771b81` (feat)

**Plan metadata:** committed with this SUMMARY.md (worktree mode — orchestrator handles STATE.md/ROADMAP.md centrally after merge)

## Files Created/Modified

- `ealch-v2/src/store/useUI.ts` - `banner: BannerState | null` replaces `bannerVisible`/`bannerAt`; `showBanner`/`hideBanner` rewritten to set/clear the single slot
- `ealch-v2/src/hooks/useAlarmWatcher.ts` - reads `banner` instead of `bannerVisible`, calls `showBanner({ kind: 'speakReminder', at: alarmTime })`; 15s poll and 12000ms caller-side hide timer unchanged
- `ealch-v2/app/settings.tsx` - `testAlarm()` calls `showBanner({ kind: 'speakReminder', at: alarmTime })`
- `ealch-v2/src/components/PushBanner.tsx` - kind-driven masthead/badge/body/press-target derivation, `upgrade_nudge_tapped` analytics call, 10s auto-hide effect for the two new kinds
- `ealch-v2/src/store/bannerSlotWiring.test.ts` - 5 `node --test` cases pinning the migration (new file)

## Decisions Made

Followed the plan's exact code blocks for the `useUI.ts` union and `PushBanner.tsx`'s per-kind derivation — no deviation from the specified implementation. Deliberately left `speakReminder`'s auto-hide in its existing caller (`useAlarmWatcher.ts`'s own `setTimeout`) rather than "unifying" it with the two new kinds' component-local timer, per the plan's explicit note that this would change shipped notification behaviour (out of scope, Phase 6 territory).

## Deviations from Plan

None - plan executed exactly as written. One environment-only adjustment was needed to run verification (not a code change, no deviation rule applies):

- **Environment note:** This worktree had no `node_modules` (git worktrees don't carry gitignored directories). `npm --prefix ealch-v2 run typecheck` and `npm --prefix ealch-v2 test` require `node_modules` for `expo/tsconfig.base` resolution and all package type declarations. Created a temporary Windows junction (`ealch-v2/node_modules` → the main checkout's `ealch-v2/node_modules`, via `fs.symlinkSync(..., 'junction')`) purely to run `tsc --noEmit` and the full test suite, then removed it via `fs.rmdirSync` before staging/committing. Confirmed absent from `git status --short` both before and after every commit in this plan — no tracked file or commit is affected.

## Issues Encountered

None. `npm --prefix ealch-v2 run typecheck` exited 0 on the first run after both tasks; `npm --prefix ealch-v2 test` passed all 5379 tests (including the 5 new `bannerSlotWiring.test.ts` cases and the unchanged 15 `entitlement.test.ts` cases) on the first run.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Plan 06 (and any later work targeting the two new banner kinds) can now call `useUI.getState().showBanner({ kind: 'upgradeNudge', trigger, copy })` or `showBanner({ kind: 'reconciliation' })` directly — `PushBanner.tsx` already renders both correctly, with per-kind badge styling, copy, press target and 10s auto-hide.
- Phase 10's rating prompt can add a fourth `{ kind: 'rating' }` member to `BannerState` and one `PushBanner.tsx` render branch — no other file needs to change, per the plan's success criteria.
- `grep -rn "bannerVisible\|bannerAt" ealch-v2/src ealch-v2/app` returns zero matches outside the wiring test's own literal search needles; `bannerSlotWiring.test.ts` structurally prevents regression.
- No blockers.

---
*Phase: 05-paywall-coverage-expansion-upgrade-nudge*
*Completed: 2026-09-20*

## Self-Check: PASSED

- FOUND: ealch-v2/src/store/bannerSlotWiring.test.ts
- FOUND: ealch-v2/src/store/useUI.ts (banner: BannerState | null)
- FOUND: ealch-v2/src/components/PushBanner.tsx (banner?.kind derivation)
- FOUND commit: 58a9faa (feat: tagged union + writer migration)
- FOUND commit: a771b81 (feat: kind-driven PushBanner + wiring test)
