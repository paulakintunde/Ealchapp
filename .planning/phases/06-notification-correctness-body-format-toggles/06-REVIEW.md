---
phase: 06-notification-correctness-body-format-toggles
reviewed: 2026-09-20T00:00:00Z
depth: standard
files_reviewed: 11
files_reviewed_list:
  - ealch-v2/src/components/PushBanner.tsx
  - ealch-v2/src/i18n/notifPlaceholders.test.ts
  - ealch-v2/src/i18n/strings.ts
  - ealch-v2/src/services/notifications.guard.test.ts
  - ealch-v2/src/services/notifications.ts
  - ealch-v2/src/store/useProgress.ts
  - ealch-v2/src/store/useStore.ts
  - ealch-v2/src/utils/notifSchedule.logic.test.ts
  - ealch-v2/src/utils/notifSchedule.logic.ts
  - ealch-v2/src/utils/notifText.logic.test.ts
  - ealch-v2/src/utils/notifText.logic.ts
findings:
  critical: 0
  warning: 4
  info: 1
  total: 5
status: issues_found
---

# Phase 6: Code Review Report

**Reviewed:** 2026-09-20
**Depth:** standard
**Files Reviewed:** 11
**Status:** issues_found

## Summary

Reviewed the shared notification formatter (`notifText.logic.ts`), the per-kind
scheduling vocabulary (`notifSchedule.logic.ts`), the three-kind
`expo-notifications` service (`notifications.ts`), the toggle wiring and
session-end report hook (`useStore.ts`, `useProgress.ts`), the in-app banner
(`PushBanner.tsx`), the two notification body templates in `strings.ts`, and
all four accompanying test files. All 26 tests in the four `node --test`
suites pass (`notifText.logic.test.ts`, `notifSchedule.logic.test.ts`,
`notifPlaceholders.test.ts`, `notifications.guard.test.ts`), and the FR/EN
`bannerText`/`reportBody`/`nudgeBody` templates declare and are supplied
matching `{t}`/`{name}` placeholders — the specific regression this phase set
out to fix (a scheduled notification body with a literal `{name}` still in
it) is closed and is guarded well enough that a future notification type
reintroducing it would fail the suite.

No critical/security issues were found. Four warnings concern real but
narrower correctness gaps that the current tests do not (and structurally
cannot, since they require either timing or a hypothetical future kind)
exercise: a race in `enableNotifKind` that can leave a notification scheduled
after the user has already turned its toggle back off, `resyncNotifs`
re-scheduling on every cold launch without ever checking whether the OS
permission is still granted, `pruneUnknown`'s blanket "cancel anything not in
today's registry" policy being a footgun for any future notification feature,
and a non-exhaustive `if/else` in `notifIdsFor` that would silently mis-route
ids for a fourth `NotifKind` added later without any compiler or test
signal. One info-level note covers a pre-existing positional coupling between
`notifLabels` and Settings' `NOTIF_KEYS` that this phase's `strings.ts` edits
touch but do not make any safer.

## Warnings

### WR-01: `enableNotifKind` can re-schedule a notification the user just turned off

**File:** `ealch-v2/src/store/useStore.ts:249-274`
**Issue:** `setNotif(k, v)` sets `notifs[k]` synchronously and then fires
`enableNotifKind(k)` (when turning on) or `notifications.cancelKind(k)` (when
turning off) without awaiting either (`ealch-v2/src/store/useStore.ts:241-248`).
`enableNotifKind` itself does `await notifications.requestPermissions()` and
then, once resolved, reads `get()` again for `alarmTime`/`lang`/`clock24`/
`avatarId` and unconditionally calls `notifications.scheduleDaily(...)` or
`notifications.scheduleNudge(...)` — it never re-checks `get().notifs[k]`
before scheduling. If a user flips a toggle on and then off again before the
in-flight `requestPermissions()` promise resolves (a very plausible sequence
when permission was already granted, since the promise then resolves almost
immediately after a native bridge round-trip), the `cancelKind` call fires
and finds nothing pending yet, and then `enableNotifKind`'s continuation
still runs and schedules the notification anyway — leaving a notification
armed for a toggle the store now shows as off.
**Fix:**
```ts
enableNotifKind: async (k) => {
  const granted = await notifications.requestPermissions();
  if (!granted) { /* ...unchanged... */ }
  if (!get().notifs[k]) return granted; // toggle was flipped off while we awaited permission
  const { alarmTime, lang, clock24, avatarId } = get();
  // ...unchanged scheduling...
},
```

### WR-02: `resyncNotifs` schedules on every cold launch without checking live OS permission

**File:** `ealch-v2/src/store/useStore.ts:278-303`
**Issue:** `resyncNotifs` runs unconditionally from `onRehydrateStorage`
(`ealch-v2/src/store/useStore.ts:433-441`) on every app launch and, for each
kind whose persisted toggle is `true`, calls `scheduleDaily`/`scheduleNudge`
directly — it never calls `notifications.requestPermissions()` or otherwise
checks whether the OS still grants permission. Two consequences:
1. On a fresh install, `notifs.daily` and `notifs.report` both default to
   `true` (`ealch-v2/src/store/useStore.ts:181`), so the very first
   `resyncNotifs` run schedules the daily reminder before the user has ever
   seen a permission prompt (onboarding requests it later via
   `enableDailyReminder`). The scheduled request silently never displays
   until permission is eventually granted — harmless, but the toggle
   misrepresents reality in the interim.
2. If the user revokes notification permission from the device's OS Settings
   (not through the app), the next cold launch's `resyncNotifs` will still
   try to reschedule daily/nudge and leave the toggles showing "on," instead
   of flipping them back off the way `enableNotifKind`'s explicit-enable path
   does on denial. The "a toggle the OS denied permission for flips itself
   back off" guarantee this phase establishes (06-CONTEXT.md D-blocks,
   `06-04-PLAN.md` must-have) only holds at the moment of toggling, not on
   relaunch.
**Fix:** Have `resyncNotifs` check `await notifications.requestPermissions()`
(or an equivalent permission-status read that doesn't re-prompt) before
scheduling, and flip any `true` toggle whose kind lacks permission back to
`false`, mirroring `enableNotifKind`'s denial branch.

### WR-03: `pruneUnknown` will silently and permanently cancel any future notification feature's ids

**File:** `ealch-v2/src/services/notifications.ts:122-137`
**Issue:** `pruneUnknown` treats every pending scheduled notification whose
identifier is not in `allNotifIds()` (today: `daily-reminder`,
`report-session`, `nudge-mon`, `nudge-thu`) as an orphan from an older build
and cancels it, and this runs on every cold launch via `resyncNotifs`. This
is a sound design for today's known migration case (an old auto-generated
daily-reminder id), but the check has no way to distinguish "orphan from an
old build" from "notification scheduled by a feature this module doesn't
know about." The codebase's own roadmap (06-CONTEXT.md, "Explicitly out of
scope... push token registration... Phase 17, NOTIFY-03") anticipates a
future notification feature; if that (or any other future feature) ever
schedules a local notification with an identifier not registered in
`notifSchedule.logic.ts`'s `allNotifIds()`, `pruneUnknown` will cancel it on
the very next app launch, every time, with no error or log to signal why.
**Fix:** At minimum, document this constraint loudly at the point every
future notification-scheduling call site must register its id in
`allNotifIds()`, or scope `pruneUnknown` to a denylist/allowlist of legacy-id
patterns (e.g. only prune ids that don't match this module's own naming
scheme) rather than "not in today's exact 4-id set."

### WR-04: `notifIdsFor` is a non-exhaustive `if/else` that will silently mis-route a future `NotifKind`

**File:** `ealch-v2/src/utils/notifSchedule.logic.ts:45-49`
**Issue:**
```ts
export function notifIdsFor(kind: NotifKind): readonly string[] {
  if (kind === 'daily') return [DAILY_ID];
  if (kind === 'report') return [REPORT_ID];
  return NUDGE_SLOTS.map((s) => s.id);
}
```
The final branch is an unconditional `else`, not a checked `kind === 'nudge'`
followed by a `never`-typed exhaustiveness failure. `NotifKind` is a closed
union today (`'daily' | 'report' | 'nudge'`), so this happens to be correct,
but if a future phase adds a fourth kind to `NotifKind` (very plausible given
Phase 17's planned push notifications), TypeScript will not flag this
function, and `notifIdsFor('newKind')` will silently return the nudge ids —
which per this phase's own core invariant ("each toggle owns its own
identifiers... cancelling one kind must not touch another") is exactly the
class of bug this file exists to prevent, just moved one layer up.
**Fix:**
```ts
export function notifIdsFor(kind: NotifKind): readonly string[] {
  if (kind === 'daily') return [DAILY_ID];
  if (kind === 'report') return [REPORT_ID];
  if (kind === 'nudge') return NUDGE_SLOTS.map((s) => s.id);
  const _exhaustive: never = kind;
  throw new Error(`notifIdsFor: unhandled NotifKind ${_exhaustive}`);
}
```

## Info

### IN-01: `notifLabels` and Settings' `NOTIF_KEYS` are coupled only by array position

**File:** `ealch-v2/src/i18n/strings.ts:181` (type), `:552-556` / `:1004-1008` (fr/en values)
**Issue:** `T.notifLabels` is declared as a plain `NotifLabel[]` and is
indexed positionally against `app/settings.tsx`'s `const NOTIF_KEYS =
['daily', 'report', 'nudge']` (`ealch-v2/app/settings.tsx:25,546-550`, outside
this phase's file scope but reading the same array this phase edited). Today
the three entries line up correctly (evening reminder → daily, daily report →
report, confidence nudges → nudge), and this phase's own edit — correcting
the report sub-label to "right after your session" — kept that order intact.
But nothing (type-level or test-level) asserts the correspondence, so a
future edit to `strings.ts` that reorders or adds an entry to `notifLabels`
without a matching edit to `NOTIF_KEYS` (or vice versa) would silently
mislabel a toggle, with no test catching it — unlike the FR/EN placeholder
parity this phase did add a guard test for.
**Fix:** Consider keying `notifLabels` by `NotifKind` (e.g.
`Record<NotifKind, NotifLabel>`) instead of a positional array, or add a
guard test alongside `notifPlaceholders.test.ts` asserting
`T.notifLabels.length === 3` and that `app/settings.tsx`'s `NOTIF_KEYS` order
is referenced consistently.

---

_Reviewed: 2026-09-20_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
