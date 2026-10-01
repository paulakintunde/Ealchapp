# Phase 9 Event Audit

Audit date: 2026-09-29; configuration and partial Pixel capture rechecked 2026-09-30. This records code, automated observations, and the limited configured capture below. Every critical row still needs a configured test-build capture ID and accepted response before QA-02 can pass. The local debug build uses the PostHog test project; preview capture remains pending.

| Event | Boundary, count, safe payload | Automated observation | Configured capture |
|---|---|---|---|
| `first_open` | First launch once per install; `local_day`, `opened_at`, common `install_id` | Acquisition pure/component tests pass; no referral wait | Pixel debug ID and timestamp verified in PostHog; client HTTP diagnostic and true fresh-install proof pending |
| `install_attribution` | Separate later result; `campaign` fields or `no_campaign`/`lookup_failed`/`unavailable`; no raw URL; once per install and status, at most five lookups (Plan 08) | Parser, Android retry, iPhone unavailable, and native Android build pass | Pixel debug `lookup_failed` ID/timestamp verified in PostHog; client HTTP diagnostic, Play install, and iPhone pending |
| `d1_return` | First foreground on next local calendar day once | Midnight, same-day, and late day-two tests pass | Pending device foreground |
| `signup_started` | Each email attempt, including unavailable backend; method only | Unavailable signup service test passes | Pending |
| `signup_completed` | Only verified new account session; method and account ID | Fake HTTP sequence shows `$identify` then one completion; existing sign-in remains separate | Pending |
| `onboarding_started` | First-run wizard once by wizard ID | Guest wizard route test passes | Pending Android/iPhone |
| `onboarding_step_completed` | Each step once at first completion by wizard ID/index | Back/edit/resume route test passes | Pending Android/iPhone |
| `onboarding_mic_failed` | Permission/recognition failure category only | Denial/retry/skip route test passes | Pending Android/iPhone |
| `onboarding_completed` | Wizard result exit once; guest counts, existing sign-in does not | Guest and existing-sign-in route tests pass | Pending Android/iPhone |
| `placement_started` | New attempt ID, initial/later source | Retry and retake route tests pass | Pending Android/iPhone |
| `placement_skipped` | Voluntary offer dismissal once; `source: offer` | Den offer dismissal route test passes | Pending Android/iPhone |
| `placement_load_failed` | Empty/unavailable bank with attempt ID and fixed reason; distinct from skip | Empty-bank and Retry/Continue route tests pass | Pending Android/iPhone |
| `placement_abandoned` | Confirmed exit once with attempt ID and answer count | Confirmed exit route test passes | Pending Android/iPhone |
| `placement_result` | After level/session result; first result immutable, retake separate; counts only; `initial_result` true only when this result was the first terminal outcome (D-29, Plan 08) | Result/retake route and persisted-attempt tests pass | Pending Android/iPhone |
| `first_lesson_started` | Structured pager mounted after gate/intro/recap; once per learner journey on a device; a second device can resend it for the same account (funnel counts first time per person) | Intro then pager, locked A2, and verified guest-to-account tests pass | Pixel debug HTTP 200/accepted and exact ID verified in PostHog; preview/iPhone pending |
| `lesson_completed` | After session/progress write; visit ID, lesson ID/version, quiz/no-quiz | Quiz retry and no-quiz finish route tests pass; safe-property test excludes response text | Pending Android/iPhone |
| `exam_submitted` | After section results; sitting ID and graded/ungraded counts only | Restored sitting with ungraded open answer route test passes; no response content | Pending Android/iPhone |
| `streak_updated` | First logged practice session of local day; updated days | Pure freeze/placement checks plus one accepted fake-HTTP capture after two same-day sessions | Pending device/new-day |
| `purchase_started` | Authenticated Adapty tap; plan, currency, attempt ID | Purchase route tests pass | Pending store sandbox |
| `purchase_completed` | Adapty success after entitlement apply; same attempt ID | Success route test passes | Pending store sandbox |
| `purchase_cancelled` | Adapty cancellation; same attempt ID | Cancellation route test passes | Pending store sandbox |
| `purchase_failed` | Unavailable/pending/other category; no raw service text | Failure route and safe-property tests pass | Pending store sandbox/rejection |

## Identity and privacy checks

- A verified new account receives the guest's prior journey through `$identify` and carries its first-lesson/streak milestone claims. An existing-account sign-in leaves earlier guest activity separate; sign-out rotates the guest journey. Two devices use the account as the authenticated distinct ID and retain separate install IDs. **Corrected 2026-09-30:** this does not deduplicate one-time learner milestones across devices. Claims are stored per device and lesson progress is not synced, so an account's second device can send `first_lesson_started` again. The funnel below handles this; the app does not.
- Typed allowlists omit email, password, answer text, transcripts, prompt text, raw referrers, and raw purchase errors from the event body. Tests exercise malicious extra fields and encoded/referrer input.
- Fake HTTP tests distinguish accepted 2xx, rejected 4xx, and offline capture without interrupting learner actions. These are code-path tests, not proof that a configured PostHog project ingested an event.

- Failed captures (offline, 429, 5xx) wait in a persistent outbox and are resent with the original event ID and timestamp on launch and foreground; the stored copy never holds the key. A 4xx is not retried and stays a QA failure (D-24, D-27).

## Activation funnel definition (D-29)

Build as a PostHog funnel, aggregated by person, each step counted as **first time for user**:

1. `first_open`
2. `onboarding_started`
3. `onboarding_step_completed` (break down by `step_index` for the step-level view)
4. `onboarding_completed`
5. `placement_result` with `initial_result = true`, or `placement_skipped` (two funnel variants; `placement_load_failed` and `placement_abandoned` explain the drop-off)
6. `first_lesson_started`

D1 retention: `first_open` cohort, return event `d1_return`. Building the saved insight needs a write-scoped PostHog token or Paul in the PostHog UI.

## Gate

Automated event paths are covered. QA-01 and QA-02 remain **blocked** on configured accepted capture, the Android walkthrough, offline outbox delivery on a device, D1 foreground, the Android store sandbox purchase, and the iPhone decision (G-09-12). Play-delivered campaign attribution is deferred to launch (D-26). See `09-DEVICE-EVIDENCE.md` and `09-GAPS.md`.
