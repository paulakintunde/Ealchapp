# Phase 6: Notification Correctness — Body Format & Toggles - Context

**Gathered:** 2026-09-21
**Status:** Ready for planning

<domain>
## Phase Boundary

Make the notification toggles in Settings/onboarding trustworthy (every toggle actually controls whether its notification type fires) and make notification body text always fully substituted (no literal `{t}`/`{name}` placeholders), via one shared, tested formatter used by both the scheduler and `PushBanner.tsx`.

**Explicitly out of scope for this phase** (belongs to Phase 17, NOTIFY-03): push token registration, tapping a notification to deep-link into the specific session it advertised, and any backend/remote push dispatch. None of the three local notification types this phase touches (daily, report, nudge) will have a working tap-to-deep-link handler when this phase ships — that's consistent with today's existing behavior for "daily" (tapping currently just opens the app to its default screen) and gets fixed uniformly for all three in Phase 17.

</domain>

<decisions>
## Implementation Decisions

### Report & Nudge toggle fate — build both, not retire
- **D-01:** Both dead toggles get built out with real local-notification delivery rather than removed from the UI. Confirmed via codebase read that neither `notifs.report` nor `notifs.nudge` has ever been consumed anywhere (only `notifs.daily` is read, in `useAlarmWatcher.ts` and `useStore.ts`'s `setNotif`/`enableDailyReminder`) — this was a genuine build-vs-retire fork explicitly left open by ROADMAP.md's Success Criterion 1, and the user chose to build.
- **D-02:** No push token registration or remote dispatch needed for either — local scheduled notifications only, same API surface `notifications.ts`'s existing `scheduleDaily`/`cancelAll` already use (`expo-notifications`).

### Delivery mechanism — Claude's discretion, with a recommendation
- **D-03 (recommended default, not locked):** Report and nudge should use real device-level scheduled notifications, matching how "daily" already works — for consistency with existing behavior and because Phase 17 will add tap-to-deep-link for all three notification types uniformly, not just "daily." The alternative (in-app-only banners reusing Phase 5's multi-kind `PushBanner`/`useUI` slot, see `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-CONTEXT.md` D-14) was raised and not rejected — the user explicitly deferred this choice to planning ("you decide"). Planning should pick one (device notification is the stronger default per the reasoning above) rather than re-asking.

### Report trigger & content — Claude's discretion
- **D-04:** User deferred report's trigger design ("you decide") after two options were raised: (a) fire shortly after a session ends, summarizing that session (ties to the existing report data in `app/feedback.tsx` / "Le Rapport"), or (b) one evening digest per day if any practice happened. Planning should pick — per-session is the more immediately relevant/simpler-to-scope option given "Daily report" i18n copy already reads "Votre rapport, chaque soir après la séance" (French: "each evening after the session"), which leans toward option (a).

### Nudge trigger & content — periodic re-engagement, generic copy
- **D-05:** "Confidence nudges" fire on a periodic schedule (a few times/week), not tied to a specific tracked weak spot. There is no existing weak-spot-to-notification pipeline in the codebase today (weak-spot data feeds the in-app report screen, not notifications), so building that pipeline is out of scope here — generic encouraging copy only, consistent with the existing i18n sub-label "Micro-défis de confiance, sans streak" / "Micro-challenges, no streaks."
- **D-06:** Exact cadence (e.g. 2x/week, specific days/times) is Claude's discretion during planning.

### Body-formatter regression guard — broader than the minimum
- **D-07:** Beyond unit-testing the new shared formatter function directly (feeding it templates + values, asserting no braces survive — satisfies Success Criteria 2/3's literal wording), also add a broader guard test that scans every notification-related entry in `strings.ts` and asserts each placeholder it declares actually gets substituted at its call site(s). This is meant to catch a *future* new notification type that forgets to route through the shared formatter, not just today's known `{t}`/`{name}` bug in `useStore.ts:225,244` (only replaces `{t}`) vs. `PushBanner.tsx:51` (replaces both, correctly).

### Claude's Discretion
- Delivery mechanism for report/nudge (device notification vs. in-app banner) — D-03, user said "you decide," recommendation given above.
- Report notification's exact trigger point and content shape — D-04, user said "you decide."
- Nudge notification's exact cadence/schedule — D-06.
- Shared formatter's internal signature/location (e.g. generic `{key: value}` map vs. hardcoded `{t}`/`{name}`, which file it lives in) — pure implementation detail, never raised as a product question.
- Whether report/nudge notifications need their own opt-in permission-request flow or reuse the existing `requestPermissions()`/`enableDailyReminder()` pattern.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Roadmap/requirements
- `.planning/ROADMAP.md` § Phase 6 — the 3 success criteria this phase is scoped against
- `.planning/REQUIREMENTS.md` — NOTIFY-01, NOTIFY-02 (this phase's scope); NOTIFY-03 explicitly belongs to Phase 17, not here
- `.planning/codebase/CONCERNS.md` — "Notification body formatting broken" and "Retention mechanics mostly dead" writeups (lines ~73-92, ~167-172), the source of the confirmed root-cause analysis this phase fixes

### Existing notification code (read in full before touching anything)
- `ealch-v2/src/services/notifications.ts` — `scheduleDaily`/`cancelAll`, the local-notification API pattern report/nudge scheduling should follow
- `ealch-v2/src/store/useStore.ts` (lines ~217-252) — `Notifs` type, `setNotif`, `enableDailyReminder`; only `daily` is currently wired to any consumer
- `ealch-v2/src/hooks/useAlarmWatcher.ts` — the in-app clock-watcher that also only reads `notifs.daily`
- `ealch-v2/src/components/PushBanner.tsx` (line ~51) — the one call site that currently does BOTH replaces correctly (`{t}` and `{name}`); the pattern the shared formatter should match
- `ealch-v2/src/i18n/strings.ts` — `bannerText` (fr line 603, en line 1053) and `notifLabels` (fr line 551, en line 1001) — the templates and toggle copy in scope
- `ealch-v2/app/settings.tsx` (line 25 `NOTIF_KEYS`, lines ~544-555) — Settings toggle rendering
- `ealch-v2/app/onboarding.tsx` (lines ~514-531) — onboarding shows the same 3-toggle list; must be updated in sync with any Settings change since both read `T.notifLabels`/`NOTIF_KEYS`-equivalent local array

### Prior phase context (Phase 5 — directly relevant to the delivery-mechanism discretion, D-03)
- `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-CONTEXT.md` D-14 — the multi-kind `banner: {kind, ...} | null` slot in `useUI.ts` that Phase 5 generalized `PushBanner.tsx` into; if planning chooses the in-app-banner route for report/nudge, this is the slot to extend, not a new one to build

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `notifications.ts`'s `scheduleDaily`/`requestPermissions`/`cancelAll` — the local-notification pattern any new report/nudge scheduling should follow, not reinvent
- `PushBanner.tsx`'s multi-kind `banner` slot (Phase 5) — available if report/nudge go the in-app-banner route
- `app/feedback.tsx` ("Le Rapport") — the existing session-report screen/data report notifications could reference if triggered per-session

### Established Patterns
- Local notifications only — no push token registration exists anywhere in the codebase (confirmed absent in `notifications.ts`), and this phase does not add it (that's Phase 17/NOTIFY-03)
- `Notifs` toggle state lives in the persisted Zustand store (`useStore.ts`), gated by `signedIn` in the alarm watcher — any new toggle-to-behavior wiring should follow the same `setNotif(k, v)` → side-effect pattern `daily` already uses
- No tap-response listener exists (`addNotificationResponseReceivedListener` is absent app-wide) — this phase must not attempt to add one; that's explicitly Phase 17 scope

### Integration Points
- `useStore.ts`'s `setNotif` — where report/nudge scheduling side effects attach, mirroring the existing `if (k === 'daily') { ... }` branch
- `strings.ts`'s `bannerText`/`notifLabels` — templates the shared formatter and any new report/nudge body strings both draw from

</code_context>

<specifics>
## Specific Ideas

No exact copy/wording was dictated for report or nudge notification bodies — existing i18n sub-labels ("Votre rapport, chaque soir après la séance" / "Micro-défis de confiance, sans streak") are the closest signal of intended tone and were used to inform D-04/D-05's discretion notes, not locked as final copy.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope. (Toggle-removal-scope was one of the originally selected discussion areas but became moot once D-01 resolved to "build both" rather than retire.)

### Reviewed Todos (not folded)
None — `todo.match-phase` returned zero matches for Phase 6.

</deferred>

---

*Phase: 6-Notification Correctness — Body Format & Toggles*
*Context gathered: 2026-09-21*
