# Phase 9 device and capture evidence

Status: **pending device and configured capture proof**. This is the execution sheet for Plan 09-06 Task 2; blank results do not count as passes. Record build ID, device model/OS, account kind, event ID, accepted/rejected HTTP status, and outcome. Do not record email, credentials, answers, transcripts, raw referrer URLs, payment details, or the PostHog key.

## Capture setup

1. Use a disposable PostHog project. Set `EXPO_PUBLIC_POSTHOG_KEY`, `EXPO_PUBLIC_POSTHOG_HOST`, and `EXPO_PUBLIC_ANALYTICS_TEST_BUILD=true` in the local `ealch-v2/.env`, then rebuild each native app. Do not paste the key into this file or commit `.env`.
2. In device logs, filter `[analytics-capture]`. Each line gives event name, event ID, status, and accepted boolean. Confirm the accepted event ID appears in the disposable project as well. A local `track()` call or a fake HTTP test alone does not prove ingestion.
3. For each critical event in `09-EVENT-AUDIT.md`, record its ID and accepted status. Exercise one offline or rejected capture: the learner flow must continue, and that missing event must be logged as a QA failure.

| Platform | Build ID | Device / OS | Account kind | Capture project / time | Result |
|---|---|---|---|---|---|
| Android | Pending | Pending | guest and email | Pending | Pending |
| iPhone | Pending | Pending | guest and email | Pending | Pending |

## Onboarding and placement, on each platform

For every row, record **Pass/Fail**, screen or route, expected versus observed result, and relevant accepted event IDs. Use fresh installs/accounts where the event is a one-time milestone.

| Scenario | Android | iPhone | Expected event or behavior |
|---|---|---|---|
| First launch, guest wizard, Back/edit, force-stop/resume | Pending | Pending | One `first_open`, `onboarding_started`, each step once, preserved choices |
| Reminders skip, mic denial/failure and skip | Pending | Pending | Clear way forward; `onboarding_mic_failed` category where applicable |
| Email signup, service failure with Retry/Continue as guest, verified signup | Pending | Pending | `signup_started` on each tap; completion only after verified session |
| Guest completion and existing-account sign-in | Pending | Pending | Completion only from first-run wizard; existing sign-in leaves guest journey separate |
| Placement offer dismissal | Pending | Pending | One voluntary `placement_skipped`; lesson remains available |
| Placement all-correct and all-wrong result fixtures | Pending | Pending | Expected level and one `placement_result` per attempt |
| Placement confirmed exit; force-stop and resume | Pending | Pending | `placement_abandoned` once on exit; same attempt and answers on resume |
| Empty/unavailable questions, Retry/Continue | Pending | Pending | `placement_load_failed`, distinct from voluntary skip; no dead end |
| Retake placement | Pending | Pending | First result retained; later attempt/result separate |
| Unlocked lesson, locked A2 paywall, quiz/no-quiz completion | Pending | Pending | First lesson only when content opens; completion after progress save |
| Exam with ungraded open answer; new-day practice | Pending | Pending | `exam_submitted` outcome counts; one `streak_updated` per practiced local day |

Check focused headings, readable recovery text, and absence of route crashes or dead ends in each run.

## Acquisition and purchase

| Check | Evidence to record | Status |
|---|---|---|
| Android Play internal-test install via encoded campaign link | Build/track, parsed `source`/`medium`/`campaign`, `install_attribution` event ID and accepted status; test `no_campaign` and `lookup_failed` separately | Pending |
| iPhone app attribution | `install_attribution` with `unavailable`, event ID and accepted status | Pending |
| App Store Connect campaign report | Aggregate campaign view and date; do not infer a per-person iPhone source | Pending |
| D1 return | Controlled next-local-day boundary test plus real device foreground detection and accepted `d1_return` | Pending |
| Android store sandbox | Test product/entitlement outcome and accepted `purchase_started`/terminal event with one attempt ID; no real charge | Pending |
| iPhone store sandbox | Test product/entitlement outcome and accepted `purchase_started`/terminal event with one attempt ID; no real charge | Pending |

## Verdict

QA-01: **Pending**. QA-02: **Pending**. Phase 9 remains incomplete until all critical rows pass. Add any failure with reproducible device/build/event details to `09-GAPS.md`, repair it, then retest the affected row.
