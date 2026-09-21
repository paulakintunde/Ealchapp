# Phase 6: Notification Correctness — Body Format & Toggles - Research

**Researched:** 2026-09-20
**Domain:** React Native local notification scheduling (`expo-notifications`) + shared string-template formatting + Zustand cross-store wiring
**Confidence:** HIGH

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Phase Boundary:** Make the notification toggles in Settings/onboarding trustworthy (every toggle actually controls whether its notification type fires) and make notification body text always fully substituted (no literal `{t}`/`{name}` placeholders), via one shared, tested formatter used by both the scheduler and `PushBanner.tsx`.

**Explicitly out of scope for this phase** (belongs to Phase 17, NOTIFY-03): push token registration, tapping a notification to deep-link into the specific session it advertised, and any backend/remote push dispatch. None of the three local notification types this phase touches (daily, report, nudge) will have a working tap-to-deep-link handler when this phase ships — that's consistent with today's existing behavior for "daily" (tapping currently just opens the app to its default screen) and gets fixed uniformly for all three in Phase 17.

- **D-01 (Report & Nudge toggle fate — build both, not retire):** Both dead toggles get built out with real local-notification delivery rather than removed from the UI. Confirmed via codebase read that neither `notifs.report` nor `notifs.nudge` has ever been consumed anywhere (only `notifs.daily` is read, in `useAlarmWatcher.ts` and `useStore.ts`'s `setNotif`/`enableDailyReminder`) — this was a genuine build-vs-retire fork explicitly left open by ROADMAP.md's Success Criterion 1, and the user chose to build.
- **D-02:** No push token registration or remote dispatch needed for either — local scheduled notifications only, same API surface `notifications.ts`'s existing `scheduleDaily`/`cancelAll` already use (`expo-notifications`).
- **D-03 (recommended default, not locked — delivery mechanism):** Report and nudge should use real device-level scheduled notifications, matching how "daily" already works — for consistency with existing behavior and because Phase 17 will add tap-to-deep-link for all three notification types uniformly, not just "daily." The alternative (in-app-only banners reusing Phase 5's multi-kind `PushBanner`/`useUI` slot, see `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-CONTEXT.md` D-14) was raised and not rejected — the user explicitly deferred this choice to planning ("you decide"). Planning should pick one (device notification is the stronger default per the reasoning above) rather than re-asking.
- **D-04 (Report trigger & content — Claude's discretion):** User deferred report's trigger design ("you decide") after two options were raised: (a) fire shortly after a session ends, summarizing that session (ties to the existing report data in `app/feedback.tsx` / "Le Rapport"), or (b) one evening digest per day if any practice happened. Planning should pick — per-session is the more immediately relevant/simpler-to-scope option given "Daily report" i18n copy already reads "Votre rapport, chaque soir après la séance" (French: "each evening after the session"), which leans toward option (a).
- **D-05 (Nudge trigger & content — periodic re-engagement, generic copy):** "Confidence nudges" fire on a periodic schedule (a few times/week), not tied to a specific tracked weak spot. There is no existing weak-spot-to-notification pipeline in the codebase today (weak-spot data feeds the in-app report screen, not notifications), so building that pipeline is out of scope here — generic encouraging copy only, consistent with the existing i18n sub-label "Micro-défis de confiance, sans streak" / "Micro-challenges, no streaks."
- **D-06:** Exact cadence (e.g. 2x/week, specific days/times) is Claude's discretion during planning.
- **D-07 (Body-formatter regression guard — broader than the minimum):** Beyond unit-testing the new shared formatter function directly (feeding it templates + values, asserting no braces survive — satisfies Success Criteria 2/3's literal wording), also add a broader guard test that scans every notification-related entry in `strings.ts` and asserts each placeholder it declares actually gets substituted at its call site(s). This is meant to catch a *future* new notification type that forgets to route through the shared formatter, not just today's known `{t}`/`{name}` bug in `useStore.ts:225,244` (only replaces `{t}`) vs. `PushBanner.tsx:51` (replaces both, correctly).

### Claude's Discretion
- Delivery mechanism for report/nudge (device notification vs. in-app banner) — D-03, user said "you decide," recommendation given above.
- Report notification's exact trigger point and content shape — D-04, user said "you decide."
- Nudge notification's exact cadence/schedule — D-06.
- Shared formatter's internal signature/location (e.g. generic `{key: value}` map vs. hardcoded `{t}`/`{name}`, which file it lives in) — pure implementation detail, never raised as a product question.
- Whether report/nudge notifications need their own opt-in permission-request flow or reuse the existing `requestPermissions()`/`enableDailyReminder()` pattern.

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope. (Toggle-removal-scope was one of the originally selected discussion areas but became moot once D-01 resolved to "build both" rather than retire.)

### Canonical References (from CONTEXT.md, downstream agents MUST read before planning/implementing)
- `.planning/ROADMAP.md` § Phase 6 — the 3 success criteria this phase is scoped against
- `.planning/REQUIREMENTS.md` — NOTIFY-01, NOTIFY-02 (this phase's scope); NOTIFY-03 explicitly belongs to Phase 17, not here
- `.planning/codebase/CONCERNS.md` — "Notification body formatting broken" and "Retention mechanics mostly dead" writeups (lines ~73-92, ~167-172), the source of the confirmed root-cause analysis this phase fixes
- `ealch-v2/src/services/notifications.ts` — `scheduleDaily`/`cancelAll`, the local-notification API pattern report/nudge scheduling should follow
- `ealch-v2/src/store/useStore.ts` (lines ~217-252) — `Notifs` type, `setNotif`, `enableDailyReminder`; only `daily` is currently wired to any consumer
- `ealch-v2/src/hooks/useAlarmWatcher.ts` — the in-app clock-watcher that also only reads `notifs.daily`
- `ealch-v2/src/components/PushBanner.tsx` (line ~51) — the one call site that currently does BOTH replaces correctly; the pattern the shared formatter should match
- `ealch-v2/src/i18n/strings.ts` — `bannerText` (fr line 603, en line 1053) and `notifLabels` (fr line 551, en line 1001) — the templates and toggle copy in scope
- `ealch-v2/app/settings.tsx` (line 25 `NOTIF_KEYS`, lines ~544-555) — Settings toggle rendering
- `ealch-v2/app/onboarding.tsx` (lines ~514-531) — onboarding shows the same 3-toggle list; must be updated in sync with any Settings change since both read `T.notifLabels`/`NOTIF_KEYS`-equivalent local array
- `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-CONTEXT.md` D-14 — the multi-kind `banner: {kind, ...} | null` slot in `useUI.ts` that Phase 5 generalized `PushBanner.tsx` into; if planning chooses the in-app-banner route for report/nudge, this is the slot to extend, not a new one to build
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-------------------|
| NOTIFY-01 | Notification toggles in Settings (report/nudge/daily) actually control whether their respective notifications fire | Pattern 3 (deterministic per-kind identifiers) + Pitfall 1 (`cancelAllScheduledNotificationsAsync()` wiping all kinds) directly address the wiring gap; Architecture Diagram shows the `setNotif` → `notifications.ts` → per-kind schedule/cancel path; Validation Architecture flags this as device-verification (manual), consistent with existing project convention, since `expo-notifications` cannot run under the repo's `node --test` runner |
| NOTIFY-02 | Notification body text always renders fully substituted — no literal `{t}`/`{name}` placeholders | Pattern 2 (`formatNotifText` generic `{key}` substitution) + Pitfall 2 (the `{name}` bug is a missing-argument bug, not just a chaining bug) + Code Examples (exact current bug locations) + Validation Architecture's Phase Requirements → Test Map (unit test for the formatter + D-07's broader placeholder-guard test) |
</phase_requirements>

## Summary

This phase fixes two independent, well-scoped defects in `ealch-v2`: (1) `notifs.report` and `notifs.nudge` toggles in Settings/onboarding are wired to state but have zero consumers, and (2) the daily-reminder scheduler only substitutes `{t}` in `bannerText`, never `{name}`, while `PushBanner.tsx` does both — so a device notification can literally read `"...with {name}."` even though the in-app banner never shows that bug.

Per CONTEXT.md D-01/D-02, the fix path is "build both" — give `report` and `nudge` real `expo-notifications`-backed local scheduling using the exact same API surface `scheduleDaily`/`cancelAll` already use, not push tokens, not a backend. The codebase's own `notifications.ts` and Expo's SDK 57 `expo-notifications` (verified `~57.0.20` installed) fully support what's needed: `SchedulableTriggerInputTypes.WEEKLY` for a "few times/week" nudge, and `SchedulableTriggerInputTypes.TIME_INTERVAL` (non-repeating, `seconds` delay) for a fire-shortly-after-session-ends report. Both trigger types accept `channelId`, matching the existing Android-channel pattern in `app/_layout.tsx`.

The **critical pitfall to avoid** discovered during code research: `notifications.cancelAll()` calls `Notifications.cancelAllScheduledNotificationsAsync()`, which wipes **every** pending local notification, not just the one type being toggled off. If `report`/`nudge` reuse this function when their own toggle flips off, they will also silently kill the *other* two types' pending schedules (and vice versa) — this is a **new bug the plan must design around**, not an existing one. The fix is deterministic per-kind identifiers (`scheduleNotificationAsync({ identifier: 'daily-reminder', ... })`) plus `cancelScheduledNotificationAsync(identifier)` for the one kind whose toggle changed, never `cancelAllScheduledNotificationsAsync()` once more than one kind exists.

For the formatter (Success Criteria 2/3), the codebase already has an established "pure `.logic.ts` file + colocated `.logic.test.ts`, tested via plain `node --test`" convention (`frNumbers.logic.ts`, `time.ts`/`time.test.ts`, `src/i18n/i18n.test.ts`'s key-parity guard). The shared formatter and its CONTEXT.md D-07 broader placeholder-guard test should follow this exact pattern — a pure, RN-free function importable by both `useStore.ts` (scheduler) and `PushBanner.tsx` (display), plus a `node:test` file that scans `strings.ts`'s notification-related string entries and asserts every `{…}` placeholder they declare is actually substituted at each call site.

**Primary recommendation:** Extract one pure `formatNotifText(template, values)`-style function (generic `{key}` substitution, not hardcoded `{t}`/`{name}`) into a new `.logic.ts`-style file; route `useStore.ts`'s `setAlarm`/`enableDailyReminder` and `PushBanner.tsx`'s `bodyText` derivation through it; give `report`/`nudge` real `expo-notifications` scheduling with per-kind deterministic identifiers and per-kind (not blanket) cancellation; hook the "report" trigger into the existing `useSessionLog()` callback (already called at session-end across 11 screens) rather than inventing a new session-end signal.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Notification toggle state (`notifs.daily/report/nudge`) | Client state (Zustand `useStore`, persisted) | — | Already lives here; no backend exists or is being added (D-02) |
| Local notification scheduling/cancellation | Client (`expo-notifications` via `notifications.ts`) | OS notification center (Android channel / iOS UNUserNotificationCenter) | Purely on-device; no push token registration in scope |
| Notification body text formatting | Client (shared pure formatter) | — | Must be identical logic whether called from the scheduler (background-eligible code path) or `PushBanner.tsx` (React component) — a pure function is the only shape both can call without duplicating logic |
| Session-end trigger point (for "report") | Client (`useSessionLog()` hook, `useProgress.ts`) | Screens that call it (11 call sites: lesson, roleplay, dictation, etc.) | Already the single choke point every practice screen funnels through at session end — the natural, existing hook, not a new one |
| i18n template source | Client (`src/i18n/strings.ts`) | — | `notifLabels`/`bannerText` already live here; new report/nudge body templates belong beside them |
| Regression guard (placeholder substitution) | Test tier (`node --test`, plain Node, no RN) | — | `strings.ts` has only type-only imports so it loads under plain Node, matching the existing `i18n.test.ts` pattern |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `expo-notifications` | `~57.0.8` declared / `57.0.20` latest on npm [VERIFIED: npm registry] | Local notification scheduling, permissions, Android channels | Already the project's only notification dependency; SDK 57-pinned per `ealch-v2/AGENTS.md`'s explicit instruction to use versioned docs |
| `node:test` + `node:assert` | Node 24.15.0 built-in [VERIFIED: `node --version` in repo] | Test runner for the new formatter + placeholder-guard tests | Project's own convention — `"test": "node --test \"src/**/*.test.ts\" ..."` in `ealch-v2/package.json`; zero new dependency needed |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Zustand (`useStore`, `useProgress`, `useUI`) | already in use | State ownership for toggles, session log, banner slot | No new store needed — this phase extends existing stores, does not add one |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Device-scheduled notifications for report/nudge (recommended, D-03) | In-app-only banners via `useUI`'s `BannerState` union (Phase 5's multi-kind slot) | Banners only fire while the app is foregrounded/backgrounded-briefly; device notifications work when the app is fully closed, which matches "daily"'s existing behavior and what Phase 17's tap-to-deep-link will need uniformly across all three kinds. CONTEXT.md D-03 recommends device notification as the default; this research concurs — device notification is the only option that makes NOTIFY-03 (Phase 17) apply uniformly later without special-casing report/nudge. |
| One `WEEKLY` trigger per nudge instance | A single `TIME_INTERVAL` trigger with `seconds: 60*60*24*3.5, repeats: true` (rough "every 3.5 days") | `WEEKLY` triggers land on a fixed, predictable weekday/time (better UX, matches "a few times/week" as discrete named days) and are simpler to reason about for cancellation; a `TIME_INTERVAL` repeat drifts relative to wall-clock day/time and is harder to explain to a user or test deterministically. Use N separate `WEEKLY` triggers (e.g., Monday + Thursday), one identifier each. |

**Installation:** No new packages required — `expo-notifications` is already installed at the correct SDK-57-compatible version.

**Version verification:**
```
$ npm view expo-notifications version
57.0.20
```
Installed range in `ealch-v2/package.json`: `"expo-notifications": "~57.0.8"` — compatible; no upgrade needed for this phase's scope (`SchedulableTriggerInputTypes`, `WEEKLY`, `TIME_INTERVAL`, per-notification `identifier`, and `cancelScheduledNotificationAsync` have all been stable since well before SDK 57).

## Architecture Patterns

### System Architecture Diagram

```
┌─────────────────────────────┐      ┌──────────────────────────────┐
│  Settings screen / Onboarding │      │  useSessionLog() (useProgress) │
│  ToggleRow → setNotif(k, v)   │      │  called at session-end by      │
└──────────────┬────────────────┘      │  11 screens (lesson, roleplay,  │
               │                        │  dictation, review, ...)        │
               ▼                        └───────────────┬──────────────────┘
    ┌─────────────────────┐                              │
    │ useStore.setNotif    │                              │ (report trigger,
    │  k==='daily' → existing branch                      │  D-04: per-session)
    │  k==='report' → NEW branch                          ▼
    │  k==='nudge'  → NEW branch                 ┌──────────────────────┐
    └──────────┬────────────┘                    │ scheduleReport() NEW  │
               │                                  │ TIME_INTERVAL trigger │
               ▼                                  └──────────┬────────────┘
    ┌─────────────────────────────┐                          │
    │ notifications.ts (service)   │◄─────────────────────────┘
    │  scheduleDaily (existing)     │
    │  scheduleNudge()   NEW        │──► expo-notifications ──► OS notification
    │  scheduleReport()  NEW        │                             center
    │  cancel(kind: Notifs key) NEW │◄── per-kind identifier,
    │   (replaces blanket cancelAll │     NOT cancelAllScheduledNotificationsAsync()
    │    for any single-toggle-off) │
    └──────────────┬────────────────┘
                   │ both read the same
                   ▼
    ┌───────────────────────────────┐
    │ formatNotifText() NEW          │◄──── strings.ts templates
    │ pure {key}→value substitution  │      (bannerText, new reportBody/nudgeBody)
    └───────────────┬────────────────┘
                     │
        ┌────────────┴─────────────┐
        ▼                           ▼
┌───────────────────┐    ┌──────────────────────┐
│ useStore.ts         │    │ PushBanner.tsx         │
│ setAlarm/            │    │ bodyText derivation     │
│ enableDailyReminder  │    │ (speakReminder kind)    │
│ (scheduler-side body)│    │ (in-app display-side)   │
└───────────────────┘    └──────────────────────┘
```

### Recommended Project Structure
```
ealch-v2/src/
├── services/
│   └── notifications.ts        # extend: scheduleNudge, scheduleReport, cancel(kind)
├── utils/
│   ├── notifText.logic.ts      # NEW — pure formatNotifText(template, values)
│   └── notifText.logic.test.ts # NEW — unit tests + D-07 placeholder-guard scan
├── store/
│   ├── useStore.ts              # setNotif gains report/nudge branches; setAlarm/
│   │                              enableDailyReminder route body through formatNotifText
│   └── useProgress.ts           # useSessionLog() gains the report-trigger call (or a
│                                   thin wrapper hook does, to avoid a useProgress→
│                                   useStore import cycle — see Pitfall 3)
├── components/
│   └── PushBanner.tsx           # bodyText derivation routes through formatNotifText
└── i18n/
    └── strings.ts                # notifLabels unchanged; add reportBody/nudgeBody
                                     templates beside bannerText
```

### Pattern 1: Pure logic file + colocated `node:test`
**What:** Every non-trivial piece of business logic in this codebase (`frNumbers.logic.ts`, `time.ts`, `delf.logic.ts`, `quota.ts` per STATE.md Phase 3) is a plain TypeScript module with no RN/Zustand imports, paired with a `*.test.ts` file run by `node --test`.
**When to use:** For the shared formatter, and for any report/nudge trigger-shape computation (e.g., "given `notifs` state, which identifiers should be scheduled vs. cancelled") that can be expressed as pure data-in/data-out, separate from the actual `expo-notifications` calls (which cannot run under plain Node).
**Example (existing convention, source: `ealch-v2/src/utils/time.test.ts`):**
```typescript
// Source: ealch-v2/src/utils/time.test.ts (existing pattern to mirror)
import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { formatTime } from './time.ts';

test('formatTime renders 12h with AM/PM correctly', () => {
  strictEqual(formatTime('19:00', false), '7:00 PM');
});
```

### Pattern 2: `{key}` generic substitution, not hardcoded `.replace('{t}', ...)`
**What:** Replace the two independent `.replace('{t}', ...)` call in `useStore.ts` and the two chained `.replace('{t}', ...).replace('{name}', ...)` calls in `PushBanner.tsx` with one function taking a template string and a `Record<string, string>` of values, substituting every `{key}` occurrence.
**When to use:** Any place a notification/banner body is derived from an i18n template with one or more placeholders — today `bannerText` (`{t}`, `{name}`), and going forward any new report/nudge body templates.
**Example:**
```typescript
// NEW — ealch-v2/src/utils/notifText.logic.ts
export function formatNotifText(template: string, values: Record<string, string>): string {
  return Object.entries(values).reduce(
    (acc, [key, val]) => acc.split(`{${key}}`).join(val),
    template
  );
}
```
Call sites become:
```typescript
// useStore.ts — was: STRINGS[lang].bannerText.replace('{t}', formatTime(...))
formatNotifText(STRINGS[lang].bannerText, { t: formatTime(alarmTime, clock24), name: avatarName(get().avatarId) })

// PushBanner.tsx — was: T.bannerText.replace('{t}', ...).replace('{name}', ...)
formatNotifText(T.bannerText, { t: formatTime(banner.at, clock24), name: coachName })
```
Note: `useStore.ts`'s current `setAlarm`/`enableDailyReminder` calls never pass `{name}` today (only `{t}`) — this is the confirmed root cause of the literal-`{name}`-in-device-notification bug (`{name}` in `bannerText` was never in scope of the scheduler's `.replace` call at all). Fixing this requires the scheduler to also know the coach's display name (`avatarName(avatarId)`), which `useStore.ts` can already resolve locally (`avatarId` is a field on the same store; `avatarName` is imported from `@/content/avatars`, already imported in `PushBanner.tsx` and trivially importable into `useStore.ts`).

### Pattern 3: Deterministic per-kind notification identifiers
**What:** Pass an explicit `identifier` string when scheduling (`'daily-reminder'`, `'nudge-mon'`, `'nudge-thu'`, `'report-session'`) instead of relying on the auto-generated one `scheduleNotificationAsync` returns.
**When to use:** Whenever more than one notification kind can be pending at once — required as soon as report/nudge exist alongside daily, so each kind can be cancelled/rescheduled independently.
**Example:**
```typescript
// Source: expo-notifications SDK docs (Context7 /websites/expo_dev_versions_sdk_notifications)
// NotificationRequestInput = { identifier?: string; content; trigger } — confirmed via
// WebSearch cross-referencing the type against expo/expo's published types [CITED, MEDIUM]
await Notifications.scheduleNotificationAsync({
  identifier: 'daily-reminder',
  content: { title: 'Ealch', body },
  trigger: { type: Notifications.SchedulableTriggerInputTypes.DAILY, hour: h, minute: m, channelId: 'practice-reminders' },
});
// ...later, toggling only 'daily' off:
await Notifications.cancelScheduledNotificationAsync('daily-reminder'); // NOT cancelAllScheduledNotificationsAsync()
```

### Pattern 4: WEEKLY trigger for "a few times a week" nudge (D-05/D-06)
**What:** `SchedulableTriggerInputTypes.WEEKLY` fires when `weekday`/`hour`/`minute` match, once per matching week. `weekday` is `1`–`7`, `1` = Sunday [VERIFIED: Context7 `/websites/expo_dev_versions_sdk_notifications`].
**When to use:** For "confidence nudges" firing 2x/week (D-06 discretion) — schedule two separate `WEEKLY` requests (e.g., `weekday: 2` Monday, `weekday: 5` Thursday), each with its own deterministic identifier (`'nudge-mon'`, `'nudge-thu'`) so toggling nudge off cancels exactly those two, no more, no less.
**Example:**
```typescript
// Source: Context7 /websites/expo_dev_versions_sdk_notifications — WeeklyTriggerInput
await Notifications.scheduleNotificationAsync({
  identifier: 'nudge-mon',
  content: { title: 'Ealch', body: nudgeBody },
  trigger: {
    type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
    weekday: 2, // Monday
    hour: 18,
    minute: 0,
    channelId: 'practice-reminders',
  },
});
```

### Pattern 5: TIME_INTERVAL trigger for "fire shortly after session ends" report (D-04)
**What:** `SchedulableTriggerInputTypes.TIME_INTERVAL` with a `seconds` delay and `repeats: false` (default) fires once, N seconds after scheduling — the right primitive for "notify a few minutes after this session ended," not a fixed clock time.
**When to use:** For the report notification, scheduled from the session-end hook (`useSessionLog()`).
**Example:**
```typescript
// Source: Context7 /websites/expo_dev_versions_sdk_notifications — TimeIntervalTriggerInput
await Notifications.scheduleNotificationAsync({
  identifier: 'report-session', // deterministic: a 2nd session ending before the 1st
                                  // report fires REPLACES the pending one rather than stacking
  content: { title: 'Ealch', body: reportBody },
  trigger: {
    type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
    seconds: 120, // exact value is Claude's discretion (D-04) — a few minutes is reasonable
    channelId: 'practice-reminders',
  },
});
```
Note: iOS requires repeating `TIME_INTERVAL` triggers to use `seconds >= 60`; this trigger is non-repeating so that floor does not apply, but keeping the delay well above zero avoids the notification firing while the user is still on the just-completed screen.

### Pattern 6: Session-end hook as the report trigger point
**What:** `useSessionLog()` (`ealch-v2/src/store/useProgress.ts:258-290`) is already the single choke-point every practice screen (`lesson.tsx`, `roleplay.tsx`, `dictation.tsx`, `sentence.tsx`, `speak.tsx`, `voiceflash.tsx`, `flashcards.tsx`, `review.tsx`, `placement.tsx`, `narrated.tsx`, `MissionRich.tsx`) calls at session end via `logSession(activity, minutes)`.
**When to use:** As the trigger point for D-04's "fire shortly after a session ends" report, instead of adding a new call site to 11 files.
**Caution:** `useProgress.ts` currently has **zero** import of `useStore.ts` (confirmed by grep) — `useStore.ts` imports `useProgress.ts`, one direction only, and a comment at `useStore.ts:13-14` explicitly notes this is deliberate to avoid a cycle. Do not add `useProgress.ts → useStore.ts`. Since `useSessionLog()` is a **React hook**, not a store action, the cleanest fix is for the hook itself (or a thin wrapper hook colocated with it, called from the same place `useSessionLog()` already is) to also read `useStore.getState().notifs.report` and call the scheduling service — hooks can freely read multiple stores; only the store *modules* must stay acyclic.

### Anti-Patterns to Avoid
- **Reusing `cancelAll()`/`cancelAllScheduledNotificationsAsync()` for a single-toggle-off:** Confirmed via Expo docs that `cancelAllScheduledNotificationsAsync()` has no filter — it removes every pending local notification regardless of kind. Once report/nudge exist alongside daily, any code path that still calls this blanket cancel when only one toggle changes will silently break the other two currently-enabled kinds. This is not hypothetical — it is the literal, easiest-to-write-by-accident implementation.
- **Hardcoding `.replace('{t}', ...).replace('{name}', ...)` in a third call site:** This is exactly how the current bug exists (two call sites independently reimplementing the same substitution, one incompletely). Any new report/nudge body construction must go through the one shared `formatNotifText`, never a third bespoke `.replace()` chain.
- **Scheduling nudge/report bodies without routing through i18n `strings.ts`:** The existing `notifLabels`/`bannerText` pattern keeps all user-facing copy in `strings.ts` under both `fr`/`en`. New `reportBody`/`nudgeBody` templates must live there too, or the `i18n.test.ts` key-parity guard (`deepStrictEqual(collectKeys(T.fr).sort(), collectKeys(T.en).sort())`) has nothing to check and FR/EN drift becomes invisible.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Recurring "a few times/week" scheduling | A custom setInterval/AppState clock-watcher polling loop for nudge (like `useAlarmWatcher.ts` does for the in-app daily banner) | `expo-notifications`' native `SchedulableTriggerInputTypes.WEEKLY` trigger | The native trigger survives app-closed/killed states; a JS interval only fires while the app is running, which is the opposite of what a re-engagement nudge needs |
| Delayed one-shot "fire after N minutes" scheduling | A `setTimeout` in the session-end handler | `SchedulableTriggerInputTypes.TIME_INTERVAL` (non-repeating) | `setTimeout` dies with the JS context if the user backgrounds/closes the app before it fires; the native trigger survives |
| Cross-language placeholder validation | Manual code review before each release | Extend `i18n.test.ts`'s existing `collectKeys`/`deepStrictEqual` pattern, or a sibling test, to also assert placeholder sets match between `fr`/`en` for notification templates | The project already has this exact class of guard test; duplicating the concept in a new one-off script instead of extending the established convention creates two sources of truth for "how do we validate strings.ts" |

**Key insight:** Every piece of this phase's scope already has a directly analogous, working pattern elsewhere in the codebase (`scheduleDaily` for scheduling, `.logic.ts`/`.test.ts` for pure-function testing, `i18n.test.ts` for cross-language guards, `useSessionLog()` for session-end hooks). The risk in this phase is not "what library do we need" — it's silently reintroducing the `cancelAll()`-wipes-everything bug while fixing the toggle bug, and silently reintroducing a third divergent `.replace()` implementation while fixing the `{name}` bug. Both are structural pitfalls, not missing-tool problems.

## Common Pitfalls

### Pitfall 1: `cancelAllScheduledNotificationsAsync()` cancels ALL kinds, not one
**What goes wrong:** Toggling `nudge` off silently also cancels `daily` and `report`'s pending native notifications, because the current `notifications.cancelAll()` (and `scheduleDaily`'s own internal `cancelAllScheduledNotificationsAsync()` call before rescheduling) has no per-kind filter.
**Why it happens:** `cancelAll()` was written when only `daily` existed, so "cancel everything" and "cancel the one kind I care about" were the same operation. They stop being the same operation the moment a second kind is added.
**How to avoid:** Use deterministic per-kind `identifier`s (Pattern 3) and `cancelScheduledNotificationAsync(identifier)` for any single-toggle-off; reserve a true "cancel everything" (`cancelAllScheduledNotificationsAsync()`) only for account-wide resets (e.g., sign-out, `eraseLocalData()`), if that's even still desired there.
**Warning signs:** A device-verification checkpoint where toggling one notification off makes a *different*, still-enabled notification stop firing too.

### Pitfall 2: `{name}` was never in scope of the scheduler's substitution — it's not a chained-`.replace()` bug, it's a missing-argument bug
**What goes wrong:** It's tempting to "fix" `useStore.ts`'s `.replace('{t}', ...)` by chaining `.replace('{name}', someValue)` onto it without first confirming the scheduler has a `someValue` to substitute. `useStore.ts` does have `avatarId` on the same store, so `avatarName(avatarId)` is available — but this must be explicitly wired in, it is not already there.
**Why it happens:** The two current call sites (`setAlarm`, `enableDailyReminder`) only ever passed one value into `.replace()`; there's no existing pathway carrying a "name" value into that part of the code today.
**How to avoid:** When building `formatNotifText`, the migration of `useStore.ts`'s two call sites must add `avatarName(get().avatarId)` as the `{name}` value (mirroring exactly what `PushBanner.tsx` already does with `avatarName(useStore((s) => s.avatarId))`), not just swap `.replace()` for `formatNotifText()` while still only passing `{t}`.
**Warning signs:** The new formatter test passes (because it correctly substitutes whatever values it's given), but a real scheduled notification still shows `{name}` — meaning the call site, not the formatter, forgot the value.

### Pitfall 3: Store import-cycle risk when wiring report scheduling into session-end
**What goes wrong:** The natural place to read `notifs.report` and trigger scheduling is at session-end (`useSessionLog()` in `useProgress.ts`), but `useProgress.ts` importing `useStore.ts` would be a new bidirectional store dependency the codebase has explicitly avoided (see the comment at `useStore.ts:13-14`).
**Why it happens:** `useStore.ts` already imports `useProgress.ts` (line 14) for other reasons; adding the reverse import for this feature is the path of least resistance and easy to miss as a regression risk.
**How to avoid:** Keep the report-trigger read/call inside a React hook (which may read both stores freely) rather than inside a Zustand store action/module. `useSessionLog()` itself is already a hook — it, or a hook that wraps it at the same call sites, can call `useStore.getState().notifs.report` without creating a module-level cycle.
**Warning signs:** TypeScript/bundler circular-import warnings, or `useStore.ts`'s own in-code comment ("useProgress does not import this store back, so this is not a cycle either") becoming false.

### Pitfall 4: Android channel importance affects whether a "nudge"/"report" is silently dropped
**What goes wrong:** Android 8+ requires every notification to be attached to a channel (`app/_layout.tsx:62-67` already creates `'practice-reminders'` at `AndroidImportance.DEFAULT`). If report/nudge reuse this channel, that's fine and simplest; if a plan introduces a *new* channel without registering it at startup the same way, notifications targeting that unregistered channel are silently dropped on Android 8+.
**Why it happens:** Channel registration is a one-time side effect at app boot (`app/_layout.tsx`), separate from the per-notification `channelId` reference at schedule time — easy to add the `channelId` reference without adding the matching `setNotificationChannelAsync` registration.
**How to avoid:** Default recommendation: reuse the existing `'practice-reminders'` channel for report/nudge too (all three are practice-related reminders; no product requirement calls for OS-level independent silencing per kind). If a plan chooses separate channels instead (better Android UX — lets a user mute just "nudges" from OS settings while keeping "daily" — reasonable but not required), each new channel needs its own `setNotificationChannelAsync` call added to `app/_layout.tsx`'s existing registration block.
**Warning signs:** Notifications work on iOS/device-verification but silently never appear on Android.

### Pitfall 5: `notifications.ts` cannot be unit-tested as-is (imports `react-native`/`expo-notifications` directly)
**What goes wrong:** A plan that tries to add `node --test` coverage directly against `notifications.ts` will fail to even load the module under plain Node (no RN runtime).
**Why it happens:** `notifications.ts` is an impure service wrapper by design (`import { Platform } from 'react-native'; import * as Notifications from 'expo-notifications';`).
**How to avoid:** Follow the established `.logic.ts` split (Pattern 1): put anything testable (trigger-shape computation, identifier naming, the formatter) in a pure file; leave `notifications.ts` itself device-verified only, same as `scheduleDaily`/`cancelAll` are today (no test file exists for `notifications.ts`, and that's consistent with the rest of the codebase's convention — see Validation Architecture below for what IS automatable in this phase vs. what stays manual-only).
**Warning signs:** `node --test` throwing on an RN-runtime `import` from a file the plan tried to add a test for.

## Code Examples

### The exact current bug (confirmed by direct read, 2026-09-20)
```typescript
// ealch-v2/src/store/useStore.ts:224-227 (setAlarm) — only {t}, no {name}
if (get().notifs.daily) {
  void notifications.scheduleDaily(
    alarmTime,
    STRINGS[get().lang].bannerText.replace('{t}', formatTime(alarmTime, get().clock24)),
  );
}
// ealch-v2/src/store/useStore.ts:242-245 (enableDailyReminder) — same bug
await notifications.scheduleDaily(
  alarmTime,
  STRINGS[lang].bannerText.replace('{t}', formatTime(alarmTime, clock24)),
);
```
```typescript
// ealch-v2/src/components/PushBanner.tsx:50-52 — does BOTH replaces correctly (the reference pattern)
? T.bannerText.replace('{t}', formatTime(banner.at, clock24)).replace('{name}', coachName)
```
```typescript
// ealch-v2/src/i18n/strings.ts:603 (fr) / :1053 (en)
bannerText: 'Votre séance de {t} vous attend : Au Café, 4 min avec {name}.',
bannerText: 'Your {t} session is waiting: Au Café, 4 min with {name}.',
```

### Existing scheduler to extend (source of the pattern to mirror for nudge/report)
```typescript
// ealch-v2/src/services/notifications.ts — full file, current state
export const notifications = {
  async requestPermissions(): Promise<boolean> { /* ... */ },
  async scheduleDaily(time: string, body: string): Promise<void> {
    if (Platform.OS === 'web') return;
    try {
      const [h, m] = time.split(':').map((n) => parseInt(n, 10));
      await Notifications.cancelAllScheduledNotificationsAsync(); // ← the blanket-cancel pitfall
      await Notifications.scheduleNotificationAsync({
        content: { title: 'Ealch', body },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DAILY,
          hour: h, minute: m,
          channelId: 'practice-reminders',
        },
      });
    } catch { /* ignore — the in-app banner still fires */ }
  },
  async cancelAll(): Promise<void> { /* cancelAllScheduledNotificationsAsync() */ },
};
```

### NotifLabel / toggle structure (both Settings and onboarding read this)
```typescript
// ealch-v2/src/i18n/strings.ts:5
export type NotifLabel = { label: string; sub: string };
// :551 (fr), index order MUST match NOTIF_KEYS = ['daily','report','nudge']
notifLabels: [
  { label: 'Rappel du soir', sub: "Une notification à l'heure choisie" },
  { label: 'Rapport quotidien', sub: 'Votre rapport, chaque soir après la séance' },
  { label: 'Encouragements', sub: 'Micro-défis de confiance, sans streak' },
],
```
```typescript
// ealch-v2/app/settings.tsx:25 — the array both screens key by index into notifLabels
const NOTIF_KEYS = ['daily', 'report', 'nudge'] as const;
```
```typescript
// ealch-v2/app/onboarding.tsx:516 — SEPARATE inline literal, same order, must stay in sync
const key = (['daily', 'report', 'nudge'] as const)[i];
```
**Note for planning:** `onboarding.tsx` does NOT import `settings.tsx`'s `NOTIF_KEYS` constant — it re-declares the same three-item tuple inline at the call site. Any plan touching toggle behavior must update both, and should flag whether extracting one shared constant (e.g., into `strings.ts` or a small shared module) is worth doing here to prevent future drift — not required by CONTEXT.md, but a natural adjacent improvement CONTEXT.md's "Claude's Discretion" section implicitly allows (shared formatter's "internal signature/location...pure implementation detail" language extends naturally to this).

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|---------------|--------|
| N/A — this is the first time report/nudge get real scheduling | `expo-notifications` `SchedulableTriggerInputTypes` enum (`WEEKLY`, `TIME_INTERVAL`, `DAILY`, `CALENDAR`, `DATE`, `MONTHLY`, `YEARLY`) with explicit `type` discriminant | Introduced pre-SDK-51 (this typed-trigger shape has been stable across the last several Expo SDKs) | The plan can rely on this API shape without a migration path — `scheduleDaily`'s existing `DAILY` usage is already on the current API, not a deprecated one |

**Deprecated/outdated:** None identified — `expo-notifications`' scheduling API in use (and to be extended) is the current, non-deprecated shape per SDK 57 docs.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `NotificationRequestInput` accepts an optional custom `identifier: string` field that, when provided, is used as the notification's ID instead of an auto-generated one | Pattern 3 | If wrong, per-kind cancellation must instead track auto-generated identifiers in `useStore`'s persisted state (one extra field per kind) rather than using fixed string constants — more code, but not a blocker. Confirmed via WebSearch cross-referencing the published TypeScript type shape (`identifier?: string; content; trigger`), not directly pulled from Context7's prose docs, so tagged CITED/MEDIUM rather than VERIFIED/HIGH. Planner should have the executor do one quick device/type-check confirmation (`Notifications.NotificationRequestInput` in the installed `node_modules/expo-notifications` type defs) before relying on it. |
| A2 | Providing the same `identifier` twice to `scheduleNotificationAsync` replaces the previously-pending request rather than stacking a duplicate | Pattern 5 | If wrong, the report notification could stack duplicates when sessions end in quick succession. Low risk either way, since this research recommends explicit `cancelScheduledNotificationAsync(identifier)` before rescheduling (matching the codebase's own existing `cancelAllScheduledNotificationsAsync()`-then-schedule pattern in `scheduleDaily`) rather than relying on implicit dedup — so the plan should schedule via cancel-then-reschedule regardless, making this assumption low-stakes. |
| A3 | 2x/week (Monday + Thursday) is a reasonable default nudge cadence | Pattern 4, D-06 | D-06 explicitly leaves exact cadence to planning discretion — this is a starting suggestion, not a locked value; low risk, easily adjusted by the planner without further research. |

**None of these assumptions touch Success Criteria 2/3 (formatter correctness) or the core toggle-wiring requirement (Success Criterion 1) — all three are HIGH confidence, directly verified against the current codebase and Context7-sourced official docs.**

## Open Questions (RESOLVED)

Both questions were resolved during planning. Resolutions are recorded inline below and are binding on the plans.

1. **Exact report trigger delay (seconds) and nudge weekday/time defaults**
   - What we know: D-04/D-06 explicitly leave these to planning discretion; Pattern 5/4 above give reasonable starting values (120s delay; Monday+Thursday at 18:00).
   - What's unclear: Whether the planner should hardcode these or expose them as future-tunable constants.
   - Recommendation: Hardcode as named constants (e.g., `REPORT_DELAY_SECONDS`, `NUDGE_WEEKDAYS`) in `notifications.ts` or a config module — easy to change later, no product decision is being locked in by doing so.
   - **RESOLVED (Plan 06-01, Task 2):** hardcoded as named constants in a new `ealch-v2/src/utils/notifSchedule.logic.ts` (not `notifications.ts`, so the values stay importable by a plain `node --test` suite). `REPORT_DELAY_SECONDS = 180`; `NUDGE_SLOTS = [{ id: 'nudge-mon', weekday: 2, hour: 18, minute: 30 }, { id: 'nudge-thu', weekday: 5, hour: 18, minute: 30 }]` — Monday and Thursday at 18:30, matching the Pattern 4 suggestion. Both constants are range-asserted by `notifSchedule.logic.test.ts`, so a later tune stays inside sane bounds.

2. **Whether report/nudge scheduling needs its own `requestPermissions()` call or reuses the existing permission grant from `enableDailyReminder()`**
   - What we know: CONTEXT.md flags this explicitly as Claude's discretion. `expo-notifications` permissions are app-wide (not per-notification-type) on both iOS and Android — a single `requestPermissionsAsync()` grant covers all locally-scheduled notifications from the app.
   - What's unclear: Whether UX should re-prompt if a user enables `report`/`nudge` without ever having enabled `daily` (and thus never having triggered a permission prompt).
   - Recommendation: `setNotif(k, v)`'s new `report`/`nudge` branches should call the same `enableDailyReminder()`-style permission-check-then-schedule pattern (a permission request is a no-op if already granted, and shows the OS prompt if not) rather than assuming `daily` was toggled first.
   - **RESOLVED (Plan 06-04, Task 2):** the recommendation is adopted, generalised. `enableDailyReminder` is refactored into `enableNotifKind(k)`, which runs `requestPermissions()` then schedules for whichever kind was toggled on; `setNotif(k, v)` routes all three kinds through it, so `report` and `nudge` each trigger the OS prompt on their own without `daily` ever having been enabled. `enableDailyReminder` survives as `enableNotifKind('daily')` because `app/onboarding.tsx` calls it by name. A native denial flips that one toggle back off (06-UI-SPEC.md Permission-denial state); no re-prompt loop.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| `expo-notifications` | Nudge/report scheduling | ✓ | `57.0.20` (registry) / `~57.0.8` (declared) | — |
| Node.js (`node --test`) | Formatter + placeholder-guard tests | ✓ | `24.15.0` | — |
| Android emulator/device for channel verification | Pitfall 4 device-check | Not probed this session (research session has no device attached) | — | Human device-verification checkpoint, same convention as Phase 3/Phase 5's approved device-verify items in STATE.md |

**Missing dependencies with no fallback:** None.

**Missing dependencies with fallback:** Physical/emulator device verification for actual notification firing — this phase's precedent (Phase 3, Phase 5) already uses human-in-the-loop device-verification checkpoints for exactly this class of native-behavior confirmation; no automated substitute exists for "does Android actually deliver this."

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Node.js built-in `node:test` / `node:assert` (no Jest/Vitest in this repo) |
| Config file | none — driven by `package.json` script globs |
| Quick run command | `node --test src/utils/notifText.logic.test.ts` (or `npm run test:i18n`-style targeted invocation once the new file exists) |
| Full suite command | `npm test` (repo root: `ealch-v2`) → `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| NOTIFY-02 | `formatNotifText` substitutes every declared `{key}` with no literal braces surviving | unit | `node --test src/utils/notifText.logic.test.ts` | ❌ Wave 0 |
| NOTIFY-02 | Every notification-related `strings.ts` entry (`bannerText`, new `reportBody`/`nudgeBody`) has its declared placeholders substituted at each call site (D-07 broader guard) | static/regression | `node --test src/i18n/i18n.test.ts` (extend existing file) or a new sibling `src/i18n/notifPlaceholders.test.ts` | ❌ Wave 0 (extension or new file) |
| NOTIFY-02 | `useStore.ts` scheduler body and `PushBanner.tsx` display body produce IDENTICAL output for the same inputs (no drift) | unit | New test asserting both call sites route through the same `formatNotifText` — can be checked structurally (both files import the shared function) or behaviorally (feed the same template+values through both derivation paths if extracted into comparably-testable pure helpers) | ❌ Wave 0 |
| NOTIFY-01 | Toggling `report`/`nudge`/`daily` off cancels exactly that kind's pending schedule (not the others) | integration (device-only — `expo-notifications` cannot run under `node --test`) | manual-only: device-verification checklist item, per existing Phase 3/5 convention | N/A — manual by design |
| NOTIFY-01 | Toggling `report`/`nudge` on schedules real device notifications matching D-04/D-05 cadence | integration (device-only) | manual-only: device-verification checklist item | N/A — manual by design |

### Sampling Rate
- **Per task commit:** `node --test src/utils/notifText.logic.test.ts` (and any newly-touched `.test.ts` files)
- **Per wave merge:** `npm test` (full suite, `ealch-v2` package)
- **Phase gate:** Full suite green before `/gsd-verify-work`, PLUS the manual device-verification checklist items above (toggle-fires-correctly cannot be automated under this repo's plain-Node test runner — `expo-notifications` requires a native runtime)

### Wave 0 Gaps
- [ ] `src/utils/notifText.logic.ts` — the shared formatter itself, does not exist yet
- [ ] `src/utils/notifText.logic.test.ts` — unit tests for the formatter (covers NOTIFY-02's literal wording: "no literal `{t}`/`{name}` placeholder")
- [ ] Broader placeholder-guard test (D-07) — either extend `src/i18n/i18n.test.ts` or add a sibling file scanning `strings.ts`'s notification-related keys
- [ ] Framework install: none — `node:test` is a Node built-in, already used repo-wide

*(No test framework gap — the repo's `node --test` convention fully covers everything in this phase that CAN be automated; the toggle-fires-correctly behavior is manual-only by the nature of `expo-notifications` requiring a native runtime, consistent with how `scheduleDaily`/`cancelAll` have zero existing test coverage today per CONCERNS.md's own quality note ("Only the scheduler itself is tested (3/10 quality)" — meaning even today's baseline is largely untested at the native-call layer).*

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-------------------|
| V2 Authentication | No | This phase touches only local, on-device notification scheduling — no auth surface |
| V3 Session Management | No | No session/token handling introduced |
| V4 Access Control | No | No new access-controlled resource; notification toggles are per-device user preferences, not privileged operations |
| V5 Input Validation | Marginal | Notification body values (`{t}` time, `{name}` avatar/coach name) are derived from trusted, closed-set app state (`avatarId` is constrained to `AVATARS`, a fixed content list; `formatTime` output is deterministic) — not free-text user input. No injection surface (notification bodies are plain text rendered by the OS notification tray, not HTML/markup). `formatNotifText`'s substitution should still be simple literal-string replacement (as designed), not template-eval, to keep it that way. |
| V6 Cryptography | No | No secrets, tokens, or encrypted data involved — purely local scheduling metadata |

### Known Threat Patterns for this stack
None applicable — this phase has no network surface, no user-supplied free text reaching notification bodies, and no privileged operation gated by the toggle state. The only "trust boundary" is OS-level notification permission (already handled by `expo-notifications`' `requestPermissionsAsync()`), which this phase reuses rather than reimplements.

## Sources

### Primary (HIGH confidence)
- Context7 `/websites/expo_dev_versions_sdk_notifications` — `SchedulableTriggerInputTypes` enum, `WeeklyTriggerInput`, `TimeIntervalTriggerInput`, `scheduleNotificationAsync`/`cancelScheduledNotificationAsync`/`cancelAllScheduledNotificationsAsync`/`getAllScheduledNotificationsAsync` signatures — fetched 2026-09-20
- Direct codebase reads (2026-09-20): `ealch-v2/src/services/notifications.ts`, `ealch-v2/src/store/useStore.ts` (lines 1-282), `ealch-v2/src/components/PushBanner.tsx`, `ealch-v2/src/hooks/useAlarmWatcher.ts`, `ealch-v2/src/store/useUI.ts`, `ealch-v2/src/store/useProgress.ts` (lines 130-290), `ealch-v2/src/i18n/strings.ts` (lines 160-370, 540-640), `ealch-v2/app/settings.tsx` (lines 1-40, 525-565), `ealch-v2/app/onboarding.tsx` (lines 100-135, 495-535), `ealch-v2/app/_layout.tsx` (lines 40-75), `ealch-v2/app/feedback.tsx` (lines 1-60), `ealch-v2/src/i18n/i18n.test.ts`, `ealch-v2/src/utils/time.test.ts`, `ealch-v2/src/content/sons-alphabet.test.ts`, `ealch-v2/package.json`, `ealch-v2/AGENTS.md`, `.planning/codebase/CONCERNS.md`
- `npm view expo-notifications version` → `57.0.20` [VERIFIED: npm registry, 2026-09-20]
- `node --version` in repo → `v24.15.0` [VERIFIED: local environment, 2026-09-20]

### Secondary (MEDIUM confidence)
- WebSearch cross-referencing `NotificationRequestInput`'s `identifier?: string` field against expo/expo's published TypeScript types (Pattern 3 / Assumption A1) — not directly quoted from Context7's prose docs, so held at MEDIUM rather than promoted to HIGH

### Tertiary (LOW confidence)
- None used without escalation — all LOW-confidence leads were either cross-verified (promoted to MEDIUM) or excluded from prescriptive claims and moved to the Assumptions Log / Open Questions instead

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — `expo-notifications` is already the sole, correct dependency; version verified against npm registry live
- Architecture: HIGH — every pattern recommended has a directly analogous, working precedent already in this exact codebase (not a generic best-practice import)
- Pitfalls: HIGH — all five pitfalls were discovered by direct code read (not inferred), each citing exact file/line evidence

**Research date:** 2026-09-20
**Valid until:** 30 days (stable API surface; `expo-notifications` scheduling primitives have not changed across recent SDKs, and this is a local-only feature with no external service dependency to drift)
