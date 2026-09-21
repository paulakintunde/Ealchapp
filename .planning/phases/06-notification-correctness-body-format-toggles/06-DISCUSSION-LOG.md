# Phase 6: Notification Correctness — Body Format & Toggles - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-21
**Phase:** 6-Notification Correctness — Body Format & Toggles
**Areas discussed:** Report & Nudge toggle fate, Delivery mechanism, Report trigger & content, Nudge trigger & content, Body-formatter regression guard

---

## Report & Nudge toggle fate

| Option | Description | Selected |
|--------|-------------|----------|
| Build both | Report and nudge both become real, scheduled local notifications | ✓ |
| Build report, retire nudge | Report has a natural trigger (session report); nudge has no defined content source | |
| Retire both | Remove both toggles from Settings and onboarding; ship only "daily" | |
| You decide | Claude picks based on effort/risk | |

**User's choice:** Build both
**Notes:** Confirmed via codebase read that `notifs.report`/`notifs.nudge` have never been consumed anywhere — only `notifs.daily` is read (in `useAlarmWatcher.ts` and `useStore.ts`). This was the headline scope decision for the phase, explicitly left open by ROADMAP.md Success Criterion 1.

---

## Delivery mechanism (if building report/nudge)

| Option | Description | Selected |
|--------|-------------|----------|
| Device notifications, same as daily | Consistent with existing "daily" precedent; none of the 3 types have tap-to-deep-link yet (Phase 17) | |
| In-app banners only | Reuses Phase 5's multi-kind PushBanner slot; avoids shipping a device notification with no working tap action | |
| You decide | Claude picks during planning | ✓ |

**User's choice:** You decide
**Notes:** Recorded as Claude's Discretion in CONTEXT.md (D-03) with a recommendation toward device notifications, given the consistency argument and that Phase 17 will fix deep-linking for all three types uniformly.

---

## Report trigger & content

| Option | Description | Selected |
|--------|-------------|----------|
| Right after a session ends | Summarizes that session's result, ties to app/feedback.tsx's report data | |
| Once per day, evening digest | Summarizes the day's overall practice at a fixed time | |
| You decide | Claude picks the trigger design during planning | ✓ |

**User's choice:** You decide
**Notes:** CONTEXT.md D-04 notes the existing French sub-copy ("chaque soir après la séance" — "each evening after the session") leans toward the per-session option as a signal for planning.

---

## Nudge trigger & content

| Option | Description | Selected |
|--------|-------------|----------|
| Periodic re-engagement | Lightweight scheduled reminder, generic copy, no new content pipeline | ✓ |
| Tied to a tracked weak spot | References actual weak-spot data; more work, no existing pipeline | |
| You decide | Claude picks during planning | |

**User's choice:** Periodic re-engagement (e.g. a few times/week)
**Notes:** No existing weak-spot-to-notification pipeline in the codebase; generic copy matches existing i18n sub-label ("Micro-défis de confiance, sans streak").

---

## Body-formatter regression guard

| Option | Description | Selected |
|--------|-------------|----------|
| Unit test the shared formatter only | Tests the function directly — matches literal wording of Success Criteria 2/3 | |
| Broader guard across all notification strings | Also scans strings.ts for unsubstituted placeholders at every call site | ✓ |
| You decide | Claude picks the guard's scope | |

**User's choice:** Broader guard across all notification strings
**Notes:** Intended to catch a future new notification type that forgets to route through the shared formatter, not just today's known `{t}`/`{name}` bug.

---

## Claude's Discretion

- Delivery mechanism for report/nudge (device notification vs. in-app banner) — recommendation given toward device notification.
- Report notification's exact trigger point and content shape — leaning signal toward per-session given existing i18n copy.
- Nudge notification's exact cadence/schedule (specific days/times).
- Shared formatter's internal signature/location — never raised as a product question, pure implementation detail.
- Whether report/nudge need their own permission-request flow or reuse `enableDailyReminder()`'s pattern.

## Deferred Ideas

None — discussion stayed within phase scope. "Toggle removal scope (if retiring report/nudge)" was one of the four originally selected discussion areas but became moot once the toggle-fate question resolved to "build both."
