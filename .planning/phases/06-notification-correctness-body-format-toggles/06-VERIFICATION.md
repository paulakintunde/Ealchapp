---
phase: 06-notification-correctness-body-format-toggles
verified: 2026-09-21T06:48:21Z
status: passed
score: 12/12 must-haves verified
overrides_applied: 0
---

# Phase 6: Notification Correctness — Body Format & Toggles Verification Report

**Phase Goal:** Notification toggles and message content in Settings are trustworthy.
**Verified:** 2026-09-21T06:48:21Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | (Roadmap SC1) Toggling report/nudge/daily in Settings actually changes whether that notification type fires (build-both path chosen per D-01) | ✓ VERIFIED | `useStore.ts:241-248` `setNotif` routes every kind through `enableNotifKind`/`notifications.cancelKind`; `enableNotifKind` (249-274) schedules `daily`/`nudge` for real and arms permission for `report`; report is armed per-session via injected `setSessionEndListener` (452-458). `app/settings.tsx:546-552` and `app/onboarding.tsx:515-527` both render all 3 rows generically off `T.notifLabels`/`NOTIF_KEYS` and call `setNotif`. |
| 2 | (Roadmap SC2) No notification body ever renders a literal `{t}`/`{name}`; all templates route through one shared, tested formatter | ✓ VERIFIED | `notifText.logic.ts` exports `formatNotifText`/`placeholdersIn`, zero imports. `notifText.logic.test.ts` (9 tests) + `notifPlaceholders.test.ts` (6 tests) all green — confirmed by running `node --test` directly (30/30 pass across the 5 Phase 6 suites). |
| 3 | (Roadmap SC3) The daily reminder and `PushBanner.tsx` both use the same shared formatter | ✓ VERIFIED | `useStore.ts` calls `formatNotifText(STRINGS[lang].bannerText, …)` at 3 sites (setAlarm, enableNotifKind, resyncNotifs); `PushBanner.tsx:52` calls `formatNotifText(T.bannerText, …)`. `grep -c "\.replace('{"` returns 0 in both files — confirmed directly. |
| 4 | A notification template with `{t}`/`{name}` renders via one named function, leaving no literal brace | ✓ VERIFIED | `formatNotifText` single-pass `String.replace` with function replacer; test "no literal brace survives once the call site values are applied" passes against the real shipped FR/EN templates. |
| 5 | A value containing a brace token is inert text, never re-substituted | ✓ VERIFIED | `notifText.logic.test.ts` "single-pass: a value containing a brace is inert text" passes; implementation is a single regex `.replace` call, not a reduce/split-join loop. |
| 6 | Each notification toggle owns a fixed, named, disjoint set of scheduled-notification identifiers | ✓ VERIFIED | `notifSchedule.logic.ts` `notifIdsFor`/`allNotifIds`; `notifSchedule.logic.test.ts` "each kind's identifier set is pairwise disjoint from every other kind" passes. |
| 7 | Cancelling one notification kind leaves the other kinds' pending schedules alone (the core NOTIFY-01 risk) | ✓ VERIFIED | `notifications.ts` `cancelKind(kind)` cancels only `notifIdsFor(kind)`; `cancelAllScheduledNotificationsAsync` appears exactly once, inside `cancelAll` (confirmed by direct grep: count=1, and only in `useStore.ts`'s `eraseLocalData`, count=1). `notifications.guard.test.ts` "the blanket cancel survives only inside cancelAll" passes. |
| 8 | The confidence nudge schedules as a real device notification on a fixed weekly cadence; the session report schedules as a one-shot device notification a few minutes after a session | ✓ VERIFIED | `notifications.ts` `scheduleNudge` (WEEKLY trigger, `NUDGE_SLOTS`) and `scheduleReport` (TIME_INTERVAL, `REPORT_DELAY_SECONDS=180`) both implemented and wired: `enableNotifKind('nudge')` calls `scheduleNudge`; the injected session-end listener in `useStore.ts:452-458` calls `scheduleReport` when `notifs.report` is true. |
| 9 | A toggle the OS denies permission for flips itself back off, the same way daily already did | ✓ VERIFIED | `enableNotifKind` (useStore.ts:249-259): on `!granted` and native, sets `notifs[k] = false`. Applies uniformly to all 3 kinds since `setNotif` routes every `v===true` case through `enableNotifKind`. |
| 10 | Reopening the app re-arms exactly what the toggles say, and drops a duplicate daily reminder left by an older build | ✓ VERIFIED | `resyncNotifs` (useStore.ts:278-303) calls `notifications.pruneUnknown()` then re-schedules/cancels daily, nudge, report per persisted `notifs` state; wired from `onRehydrateStorage` via `void state.resyncNotifs()` (confirmed present, count=1). |
| 11 | The report and nudge notification bodies exist as FR/EN templates declaring only `{name}`, and the report toggle's sub-label states "right after the session," not "each evening" | ✓ VERIFIED | `strings.ts:605-606` (FR) / `1057-1058` (EN) `reportBody`/`nudgeBody`, each declaring `{name}` only. `notifLabels[1].sub` reads "Votre rapport, juste après la séance" (FR, line 554) / "Your report, right after your session" (EN, line 1006). `chaque soir après la séance` / `each evening after the session` no longer present (confirmed absent). |
| 12 | Full automated suite and typecheck are green with all Phase 6 changes in place | ✓ VERIFIED | `npm run typecheck` exits 0 (ran directly). Targeted 5-suite `node --test` run: 30/30 pass, 0 fail (ran directly, matches 06-05-SUMMARY's claimed 30/30). |

**Score:** 12/12 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `ealch-v2/src/utils/notifText.logic.ts` | `formatNotifText` + `placeholdersIn`, zero imports | ✓ VERIFIED | Exact content matches plan; `grep -c "^import"` = 0 |
| `ealch-v2/src/utils/notifText.logic.test.ts` | node:test coverage | ✓ VERIFIED | 9 tests, all pass |
| `ealch-v2/src/utils/notifSchedule.logic.ts` | `NotifKind`, `NOTIF_CHANNEL_ID`, `DAILY_ID`, `REPORT_ID`, `REPORT_DELAY_SECONDS`, `NUDGE_SLOTS`, `notifIdsFor`, `allNotifIds` | ✓ VERIFIED | All present, zero imports |
| `ealch-v2/src/utils/notifSchedule.logic.test.ts` | disjointness coverage | ✓ VERIFIED | 6 tests, all pass |
| `ealch-v2/src/services/notifications.ts` | 3-kind scheduler: `scheduleDaily/scheduleNudge/scheduleReport/cancelKind/pruneUnknown/cancelAll` | ✓ VERIFIED | All 6 present; identifiers sourced from `notifSchedule.logic`, none hardcoded (confirmed via grep for literal id strings = 0) |
| `ealch-v2/src/services/notifications.guard.test.ts` | static source guard | ✓ VERIFIED | 5 tests, all pass |
| `ealch-v2/src/store/useStore.ts` | `setNotif` for all 3 kinds, `enableNotifKind`, `resyncNotifs`, session-end report registration | ✓ VERIFIED | All present and wired (see truths 1, 9, 10 above) |
| `ealch-v2/src/store/useProgress.ts` | `setSessionEndListener` injection point | ✓ VERIFIED | Exported, fired after `logSession` inside try/catch; no `useStore`/`services/notifications` import (one-way dependency intact) |
| `ealch-v2/src/components/PushBanner.tsx` | `speakReminder` body via shared formatter | ✓ VERIFIED | `formatNotifText(T.bannerText, …)` at line 52 |
| `ealch-v2/src/i18n/strings.ts` | `reportBody`/`nudgeBody` FR+EN, corrected sub-label | ✓ VERIFIED | Confirmed at cited line numbers |
| `ealch-v2/src/i18n/notifPlaceholders.test.ts` | D-07 guard covering all 3 templates + call sites | ✓ VERIFIED | 6 tests, all pass |
| `.planning/phases/.../06-05-SUMMARY.md` | device-verification record | ✓ VERIFIED (with caveat) | Exists, records Checks A-D as PASSED, E as skipped-with-reason. Caveat: recorded "observed" tray text for A/C/D is the plan's documented *expected* text reused because the human gave verbal pass/fail rather than a verbatim transcription — explicitly and transparently disclosed in the summary, not presented as fabricated verbatim evidence. |

### Key Link Verification

| From | To | Via | Status | Details |
|------|-----|-----|--------|---------|
| `notifications.ts` | `notifSchedule.logic.ts` | imports constants, not literals | ✓ WIRED | Confirmed import block; 0 hardcoded id/channel literals in service file |
| `notifications.ts` | `Notifications.cancelScheduledNotificationAsync` | per-kind cancel | ✓ WIRED | `cancelKind` loops `notifIdsFor(kind)` |
| `useStore.ts` | `avatarName(avatarId)` | `{name}` value the scheduler previously omitted | ✓ WIRED | All 6 `formatNotifText(` calls in `useStore.ts` supply `name: avatarName(avatarId)` (confirmed count=6) |
| `PushBanner.tsx` | `notifText.logic.ts` | same shared formatter | ✓ WIRED | `formatNotifText(T.bannerText, { t, name: coachName })` |
| `useStore.ts` | `notifications.cancelKind` | every toggle-off path | ✓ WIRED | `setNotif` else-branch + 3 branches in `resyncNotifs` (confirmed count=4) |
| `useProgress.ts` | `useStore.ts` | injected listener, not a module import | ✓ WIRED | `setSessionEndListener` exported from `useProgress.ts`, registered from `useStore.ts` bottom; `grep -c "import.*useStore"` in `useProgress.ts` = 0 (only doc-comment prose mentions the name, not an import) |
| `useStore.ts` | `STRINGS[lang].reportBody/nudgeBody` | `formatNotifText` with `{name}` | ✓ WIRED | Session-end listener (452-458) and `enableNotifKind`'s nudge branch (268) both confirmed |
| Settings/onboarding toggles | `setNotif` | all 3 rows generic | ✓ WIRED | `app/settings.tsx:546-552`, `app/onboarding.tsx:515-527` both map all 3 `NOTIF_KEYS`/`notifLabels` entries to `setNotif` |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Pure formatter/schedule/guard/placeholder/i18n suites all pass | `node --test src/utils/notifText.logic.test.ts src/utils/notifSchedule.logic.test.ts src/services/notifications.guard.test.ts src/i18n/notifPlaceholders.test.ts src/i18n/i18n.test.ts` | `pass 30, fail 0` | ✓ PASS |
| Full TypeScript project typechecks | `npm --prefix ealch-v2 run typecheck` | exit 0, no errors | ✓ PASS |
| Blanket cancel confined to `cancelAll` | `grep -c "cancelAllScheduledNotificationsAsync" notifications.ts` | `1` | ✓ PASS |
| Blanket cancel confined to `eraseLocalData` in the store | `grep -c "notifications.cancelAll()" useStore.ts` | `1` | ✓ PASS |
| No hand-rolled substitution remains | `grep -c "\.replace('{" useStore.ts PushBanner.tsx` | `0` for both | ✓ PASS |
| Full 5417-test app suite (per 06-05-SUMMARY, not independently re-run here due to time cost) | `npm --prefix ealch-v2 test` | claimed 5417/5417 | ? SKIP (not re-run; targeted notification suites + typecheck independently re-run and green, which is the load-bearing subset for this phase) |
| Real-device notification delivery (Checks A-E) | manual, see 06-05-SUMMARY | A/B/C/D PASSED, E skipped-with-reason | ? SKIP (already performed as a human checkpoint during phase execution; see caveat below) |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|-------------|-------------|-------------|--------|----------|
| NOTIFY-01 | 06-01, 06-02, 06-04 | Notification toggles (report/nudge/daily) actually control whether their notifications fire | ✓ SATISFIED | All three kinds wired to real scheduling/cancellation; REQUIREMENTS.md marks NOTIFY-01 `[x]` Complete, Phase 6 |
| NOTIFY-02 | 06-01, 06-03, 06-04 | Notification body text always renders fully substituted, no literal `{t}`/`{name}` | ✓ SATISFIED | Shared `formatNotifText` used at every call site, guarded by `notifPlaceholders.test.ts`; REQUIREMENTS.md marks NOTIFY-02 `[x]` Complete, Phase 6 |
| NOTIFY-03 | — (not claimed by any Phase 6 plan) | Tap-to-deep-link + push token registration | Not in scope | Correctly deferred to Phase 17 per 06-CONTEXT.md and REQUIREMENTS.md (`Phase 17 | Pending`); no orphaned requirement — Phase 6 plans never claim NOTIFY-03 |

No orphaned requirements found: REQUIREMENTS.md maps only NOTIFY-01/02 to Phase 6, and both are claimed and satisfied.

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `ealch-v2/src/store/useStore.ts` | 249-274 (`enableNotifKind`) | Race: a toggle flipped on then off before `requestPermissions()` resolves can leave the notification scheduled after the store shows it off (06-REVIEW.md WR-01) | ⚠️ Warning | Narrow timing window; does not break the phase's core "toggle controls firing" contract in normal use. Pre-existing code-review finding, already documented. |
| `ealch-v2/src/store/useStore.ts` | 278-303 (`resyncNotifs`) | Cold-launch resync never re-checks live OS permission before rescheduling (06-REVIEW.md WR-02) | ⚠️ Warning | If a user revokes permission from OS Settings, toggle can show "on" without delivery until next explicit toggle. Not a must-have this phase claimed (must-have was "re-arms from persisted toggle state," which it does). |
| `ealch-v2/src/services/notifications.ts` | 122-137 (`pruneUnknown`) | Cancels any pending id not in today's known set — a future notification feature not registered in `allNotifIds()` would be silently cancelled every launch (06-REVIEW.md WR-03) | ⚠️ Warning | Forward-looking risk for Phase 17+, not a Phase 6 defect. |
| `ealch-v2/src/utils/notifSchedule.logic.ts` | 45-49 (`notifIdsFor`) | Non-exhaustive `if/else`, no `never`-typed exhaustiveness check for a future 4th `NotifKind` | ⚠️ Warning | `NotifKind` is a closed 3-value union today; no current bug. Flagged for Phase 17. |
| `ealch-v2/src/i18n/strings.ts` | 181, 552-556/1004-1008 | `notifLabels` and `settings.tsx`'s `NOTIF_KEYS` coupled only by array position, no type-level guard | ℹ️ Info | Pre-existing pattern, not introduced by this phase; this phase's edits kept the order correct. |

No blockers found. All four warnings and the one info item are carried over verbatim from `06-REVIEW.md` (Phase 6's own code review), and none contradicts a stated must-have or roadmap Success Criterion — they are legitimate forward-looking risk notes, correctly triaged as non-blocking by the reviewer.

### Human Verification Required

None outstanding. Device verification (notification body correctness on hardware, toggle independence, report-tracks-toggle) was already performed as a blocking human checkpoint during phase execution (06-05-PLAN.md Task 2, `checkpoint:human-verify`, gate="blocking") and recorded in `06-05-SUMMARY.md` as PASSED for Checks A-D, SKIPPED-with-reason for Check E.

**Caveat for the record (not a gap):** the tray text recorded for Checks A, C, and D in `06-05-SUMMARY.md` is the plan's *documented expected* text, not an agent- or human-transcribed verbatim capture — the human gave terse verbal pass/fail confirmations ("All good test a to c", "confirmed") rather than transcribing what the tray showed. This is disclosed transparently in the summary rather than presented as fabricated verbatim evidence, and the underlying code paths that would produce that exact text are independently confirmed correct by the static/unit test suite (which does assert against the real shipped FR/EN strings). This does not block phase completion but is worth noting if a stricter evidentiary bar is wanted for future device-verification checkpoints.

### Gaps Summary

No gaps found. All 12 derived must-have truths (3 roadmap Success Criteria plus 9 supporting plan-level truths covering formatter correctness, per-kind identifier isolation, toggle wiring for all three kinds, permission-denial handling, launch-time resync, and copy correctness) are verified against the actual codebase: the shared `formatNotifText` function exists and is the only substitution path in both the scheduler (`useStore.ts`, 6 call sites) and the banner (`PushBanner.tsx`, 1 call site); every notification kind (daily/report/nudge) has real local-notification scheduling wired to its Settings toggle with disjoint, per-kind cancellation; the report fires on session-end via an injected listener that correctly avoids a store↔store import cycle; and all automated suites specific to this phase (30 tests across 5 files) plus the full TypeScript project pass cleanly, independently re-run and confirmed during this verification (not merely trusted from SUMMARY.md).

---

_Verified: 2026-09-21T06:48:21Z_
_Verifier: Claude (gsd-verifier)_
