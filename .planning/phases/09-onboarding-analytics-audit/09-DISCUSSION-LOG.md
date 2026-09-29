# Phase 9: Onboarding & Analytics Audit - Discussion Log

> Audit trail only. Planning and implementation should use `09-CONTEXT.md`.

**Date:** 2026-09-29
**Areas discussed:** Onboarding and placement funnel boundaries; anonymous-to-account continuity; acquisition and D1; event proof; engagement events; store referrer attribution; error paths; QA release gate.

## 2026-09-29 — phase started

Phase 9 is the next roadmap phase: **Onboarding & Analytics Audit**. Its scope is QA-01 and QA-02: verify onboarding and placement end to end, then confirm engagement, acquisition, and activation analytics coverage.

### Initial codebase findings

- `ealch-v2/app/onboarding.tsx` contains a multi-step wizard with guest/email paths, calibration, reminders, preferences, and completion routing.
- `ealch-v2/app/placement.tsx` runs the fixed quick-check, writes attempts and the estimated level, records a placement session, and may offer the Première paywall.
- `ealch-v2/src/services/analytics.ts` currently defines mainly paywall, purchase, entitlement, and nudge events. The Phase 9 acquisition/activation vocabulary is not yet represented as a complete event contract.
- The current Phase 07.1 day-one trail adds an orientation card and placement offer, so the audit must follow the current first-run path rather than an older onboarding-only path.

### Gray areas to settle

1. Onboarding completion: what the user must finish before `onboarding_completed` and `first_lesson_started` count.
2. Funnel event granularity: names and payloads for first open, signup started/completed, each onboarding step, placement result, first lesson, and D1 return.
3. Anonymous-to-account identity: how pre-signup events relate to the later authenticated user without double-counting.
4. Referrer capture: which store/referrer fields are retained and what fallback is recorded when unavailable.
5. Analytics verification: how to prove events without making a real purchase or depending on a live PostHog dashboard.

No implementation changes have been made for Phase 9 yet.


## 2026-09-29 - discussion resumed

### Initial analytics audit

A source scan confirms that `src/services/analytics.ts` currently has the paywall, entitlement, gate, placement-paywall, and upgrade-nudge vocabulary only. No typed events currently cover first-open, signup started/completed, onboarding step completion, placement result, first lesson started, lesson completion, exam submission, streak activity, store referrer capture, or D1 return. `app/onboarding.tsx` completes through `completeOnboarding()` and routes to `/splash`; `app/placement.tsx` grades answers, writes the level, logs a placement session, and may offer the paywall. The first lesson can be entered from the Den or resume paths, so the activation boundary must be explicit before instrumentation is planned.

The next product decision is the canonical activation point: whether `onboarding_completed` is emitted when the user enters the post-onboarding app, and whether `first_lesson_started` is emitted when the first lesson opens or only after it is completed. Identity, payload, and referrer decisions follow that boundary.

## 2026-09-29 - funnel boundary discussion

- Asked when to count onboarding completion and first lesson activation. The user chose completion when leaving the onboarding result screen for the app, and activation when lesson content opens.
- Asked how to treat the optional placement offer when dismissed. The user chose to record placement skipped while still counting first lesson activation.
- Asked how to count placement retakes. The user chose to retain the first result as the initial funnel outcome and record later retakes separately.
- Asked whether existing account sign-in counts as onboarding completion because `app/signin.tsx` calls `completeOnboarding()`. The user chose no: only completion of the first-run wizard counts.
- Asked how to count a step if the learner goes back and changes an answer. The user chose to count it once, on first completion.
- Asked how to handle an app close halfway through the wizard. The user chose to resume at the last unfinished step with earlier choices preserved.
- Asked whether learners need a clear way past the reminders step without requesting notification permission. The user chose an explicit "Continue without reminders" choice.
- Asked about placement taken after an initial skip. The user chose to retain "placement skipped" as the initial funnel outcome and record the later result separately.
- At the area checkpoint, the user requested more funnel boundary detail before moving to account linking.
- Asked whether a gated A2 lesson tap that opens the Première paywall counts as first lesson activation. The user chose no: count only actual lesson content opened.
- Asked which learning routes count as first lesson started. The user chose a structured trail lesson only; practice routes do not satisfy that funnel step.
- Asked how to represent a placement session exited before a result. The user chose started and abandoned, distinct from skipping the offer.
- Asked whether completing the wizard as a guest counts as onboarding completion. The user chose yes, despite no signup.
- At the next checkpoint, the user chose to move to anonymous-to-account continuity.

## 2026-09-29 - account continuity discussion

- Asked whether guest activity should connect to an account created later on the same device. The user chose to link earlier onboarding and learning events into one learner journey.
- Asked about signing in to an existing account after guest use on the same device. The user chose to keep guest events separate because the device may be shared.
- Asked what to do with guest activity after sign-out. The user chose a new anonymous journey, separate from the previous account.
- Asked when to link anonymous events if signup fails and is retried. The user chose only after signup succeeds.
- At the area checkpoint, the user requested more account-linking cases.
- Asked how the same account should appear across devices. The user chose one account learning journey with separate first-open records per install.
- Asked about a guest creating an account days after onboarding. The user chose to retain the original onboarding-completion time and add signup later, with no repeat completion.
- Asked when email signup counts if verification is required. The user chose after verification and authenticated sign-in, not on mere acceptance of the signup request.
- Asked whether signup counts when the learner leaves onboarding unfinished. The user chose to keep signup and onboarding as separate milestones.
- At the checkpoint, the user chose to move to acquisition referrer and D1 rules.

## 2026-09-29 - acquisition and D1 discussion

- Asked when first open should count. The user chose once per installation at first launch, even if onboarding is left immediately.
- Asked how to label missing store referral data. The user chose unknown or unavailable, not organic.
- Asked for the D1 time boundary. The user chose the next calendar day in the learner's local time.
- Asked what triggers a D1 return on that next local day. The user chose opening the app to foreground.

## 2026-09-29 - event proof and QA discussion

- Asked what evidence should prove analytics event names and payloads. The user chose automated event checks and a device walkthrough.
- Asked how to verify purchase analytics without a real charge. The user chose a store sandbox purchase plus automated capture checks.
- Asked which onboarding paths device QA must cover. The user chose guest and email paths, with placement skip, result, and abandonment.
- Asked how to verify D1. The user chose a controlled local-clock boundary test plus a device check of foreground detection.
- At the final checkpoint, the user requested more Phase 9 discussion before context creation.
- The user chose to expand engagement event boundaries and payloads first.

## 2026-09-29 - engagement event discussion

- Asked when lesson completion should fire. The user chose when completion is recorded, after the quiz or final content page, rather than when navigating away.
- Asked when exam submission should fire if an open answer cannot be graded. The user chose after section results are recorded, even when an answer remains ungraded.
- Asked when the streak event should fire. The user chose once per local day on a logged practice session, with updated length, not on Home display.
- Asked what engagement event payloads may contain. The user chose stable IDs and outcomes, excluding answer text, speech transcripts, and email addresses.
- At the checkpoint, the user chose to expand store referrer attribution.

## 2026-09-29 - store referrer attribution discussion

- Research note: Google Play exposes an install-referrer API to the app. Apple campaign-link performance is reported in App Store Connect Analytics with privacy thresholds; an equivalent per-install app value must not be assumed. Sources: https://developer.android.com/google/play/installreferrer and https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links.
- Asked how iPhone acquisition should appear when no per-install store source is available. The user chose an unavailable app value and separate App Store Connect campaign reporting.
- Asked which Android referrer data may be sent. The user chose parsed campaign fields and capture status, excluding the raw referrer URL.
- Asked how to handle Android referrer lookup after first open. The user chose an immediate first-open event and a later attribution event linked to the same install.
- Asked how to represent unavailable-referrer cases. The user chose distinct no-campaign, lookup-failed, and store-unavailable statuses.
- Onboarding and placement error paths became the next topic.

## 2026-09-29 - onboarding and placement error paths

- Asked what to do if email signup service is unavailable. The user chose to preserve entered details and offer Retry or Continue as guest, without recording signup completed.
- Asked how optional microphone or speech-recognition failure should behave. The user chose a skip path that still permits onboarding completion, with the failure recorded separately.
- Asked what to do if placement questions cannot load. The user chose Retry or Continue without placement, with a load-failure event distinct from voluntary skip.
- Asked how to handle an app close mid-placement. The user chose to restore answers and resume the same attempt at the next unanswered question.
- At the checkpoint, the user chose to discuss the QA release gate.

## 2026-09-29 - QA release gate

- Asked which platforms need onboarding and placement walkthroughs. The user chose Android and iPhone.
- Asked what should happen if analytics is offline or rejects a request. The user chose to keep user flows working while QA treats the missing event as a failure.
- Asked what gaps block Phase 9 completion. The user chose to keep the phase incomplete until all roadmap-critical paths and events pass, with unrelated findings logged for later.
- Asked whether local `track()` calls alone satisfy the analytics gate. The user chose to prove that the configured capture endpoint accepted each event.

## Alternatives considered

> Confirmed choices above are canonical in `09-CONTEXT.md`. This table preserves the other options presented during discussion.

### Onboarding and placement funnel boundaries

| Question | Selected answer | Other options presented |
|---|---|---|
| When do onboarding completion and first lesson activation count? | Onboarding completes when the learner leaves the first-run result screen for the app; activation counts when lesson content opens. | Completion at app entry and activation at lesson open; Completion after placement; Activation after first lesson completion |
| What happens in the funnel when optional placement is dismissed? | Record placement skipped and still count first lesson activation. | Record placement skipped and count activation; Leave placement result empty; Require placement before activation |
| How do placement retakes affect the initial funnel result? | Keep the first result as the initial funnel outcome and record later retakes separately. | Keep first and record retakes separately; Replace first with latest; Count only latest |
| Does existing account sign-in count as a new onboarding completion? | No. Only completion of the first-run wizard counts. | Only first-run wizard; Every sign-in; Only on a new phone |
| When a learner revisits and changes a completed onboarding step, how many completions count? | Count the step once, on its first completion. | Once on first completion; Each completion; When shown |
| What should happen if the app closes halfway through the onboarding wizard? | Resume at the last unfinished step with earlier choices preserved. | Resume last unfinished step; Restart at welcome and keep choices; Restart at welcome and clear choices |
| Should the reminders step offer a route that does not request notification permission? | Yes. Offer a clear Continue without reminders choice that completes the step without requesting permission. | Offer a clear skip; Keep the current single action; Remove reminders from onboarding |
| If placement is skipped and completed later, which result belongs to the initial funnel? | Keep placement skipped as the initial funnel outcome and record the later placement result separately. | Keep skip and record later result; Replace skip with later result; Count later result only |
| Does an A2 lesson tap that opens the Première paywall before content count as first lesson activation? | No. Count first lesson activation only when lesson content opens. | Count only content opened; Count the tap |
| What learning route counts as first lesson started? | Only a structured trail lesson. Flashcards, exams, and roleplay are separate activities. | Structured trail lesson only; Any learning activity; Trail lesson or flashcards |
| How should placement be represented if the learner exits after starting but before a result? | Record placement started and abandoned. | Started and abandoned; Placement skipped; Wait until return |
| Does finishing the wizard as a guest count as onboarding completion? | Yes. Guest completion counts despite no signup. | Count guest completion; Count only account holders; Count after guest signup |

### Anonymous to account continuity

| Question | Selected answer | Other options presented |
|---|---|---|
| Should guest activity before creating an account be linked to that new account? | Yes. Link earlier onboarding and learning events to the account for one learner journey. | Link earlier guest events; Keep separate |
| Should guest activity be linked when someone signs in to an existing account on the same device? | No. Keep guest events separate on existing-account sign-in to avoid a potentially incorrect shared-device link. | Keep separate; Always link; Ask learner |
| What happens to anonymous activity after sign-out? | Start a new guest journey so later anonymous events are not mixed with the previous account. | Start new guest journey; Reuse device guest journey |
| When should an anonymous journey be linked if signup initially fails? | Only after signup succeeds. | After signup succeeds; At first signup attempt |
| How should the same account be represented across two devices? | Combine authenticated learning activity into one account journey, while keeping a separate first-open record for each install. | One account journey and separate installs; Separate journeys per device |
| If a guest creates an account days after onboarding, should onboarding completion be recorded again? | No. Keep the original completion at its original time and record signup later. | Keep original completion and add signup; Record onboarding again |
| When does signup completed count if email verification is required? | After verification and authenticated sign-in, not merely after the signup request is accepted. | After verification and sign-in; When signup request accepted |
| Does signup count if account creation succeeds but onboarding remains unfinished? | Yes. Signup completed and onboarding completed are separate milestones. | Keep milestones separate; Count both only after wizard finish |

### Acquisition referrer and D1 return

| Question | Selected answer | Other options presented |
|---|---|---|
| When should first open count? | Once per app installation at first launch, even if the learner leaves onboarding immediately. | Once per install; After onboarding begins; Once per account |
| How should the acquisition source be labeled when the store referrer is unavailable? | Unknown or unavailable, not organic. | Unknown or unavailable; Organic; Empty source |
| Which time boundary defines D1 return? | The next calendar day in the learner's local time, not a rolling 24-hour threshold. | Next local calendar day; After 24 hours; Both separately |
| What counts as a D1 return on the next local calendar day? | App opens to foreground. | App opens to foreground; Learner starts an activity; Learner completes a lesson |

### Event proof and QA acceptance

| Question | Selected answer | Other options presented |
|---|---|---|
| What evidence should Phase 9 require before analytics is accepted? | Automated event checks and a device walkthrough. | Automated event checks and device walkthrough; Device walkthrough and dashboard; Automated event checks only |
| How should purchase analytics be verified without a real charge? | Use a store sandbox purchase plus automated capture checks. | Store sandbox and automated checks; Automated mock only; Live dashboard only |
| Which onboarding routes must the device walkthrough cover? | Guest and email paths, plus placement skip, result, and abandonment. | Guest and email; placement skip, result, and abandon; Guest with result only; Email with result only |
| How should the D1 boundary be verified? | Use a controlled local-clock test of the next-day boundary plus a device check of foreground detection. | Controlled clock plus device check; Wait for real next day; Automated clock only |

### Engagement event boundaries and payloads

| Question | Selected answer | Other options presented |
|---|---|---|
| When should lesson completed fire? | When completion is recorded after the quiz, or after the last content page for lessons without a quiz; do not wait for navigation away. | When completion is recorded; When learner leaves screen |
| When should exam submitted fire if an open answer cannot be graded? | After the section's results are recorded, even if an open answer is marked ungraded. | After results recorded; Only when every answer graded |
| When should a streak event fire? | Once when a real practice session is logged for a new local day, with the updated streak length; not on each Home render. | Once per practiced local day; Each Home display; Only milestones |
| What data should engagement events include? | Send stable IDs and outcome metadata; exclude answer text, speech transcripts, and email addresses. | IDs and outcomes only; Include learner responses |

### Store referrer attribution

| Question | Selected answer | Other options presented |
|---|---|---|
| How should iPhone acquisition be represented when no per-install store source is available? | Use unavailable in the app event and review App Store campaign results separately in App Store Connect; do not infer a per-user source from aggregate totals. | Keep app event and store report distinct; Infer from campaign totals; Omit iPhone source |
| What Android install referrer data may be sent to analytics? | Only parsed, recognized campaign fields and capture status; do not send the raw referrer URL. | Parsed campaign fields only; Full raw referrer; Source only |
| What happens if the Android referrer lookup finishes after first open? | Keep first open immediate and send a separate attribution event linked to the same install when the lookup finishes. | First open now; attribution later; Delay first open; Drop late attribution |
| How should different unavailable-referrer cases be represented? | Keep no campaign, lookup failure, and store-unavailable statuses distinct. | Distinct statuses; One unavailable label |

### Onboarding and placement error paths

| Question | Selected answer | Other options presented |
|---|---|---|
| What should happen when email signup fails because the service is unavailable? | Preserve entered details and offer Retry and Continue as guest; do not record signup completed. | Retry or continue as guest; Require retry; Restart onboarding |
| What should happen if optional microphone permission or speech recognition fails? | Allow skipping and finishing onboarding; record the failure separately. | Allow skip and record failure; Require mic check; Skip silently |
| What should happen if placement questions cannot load? | Offer Retry and Continue without placement; record a load failure distinct from a voluntary skip. | Retry or continue and record failure; Require placement to load; Treat as normal skip |
| What should happen if the app closes mid-placement? | Restore answered questions and resume the same attempt at the next unanswered question. | Resume same attempt; Restart from question one |

### QA release gate

| Question | Selected answer | Other options presented |
|---|---|---|
| Which platforms need onboarding and placement walkthroughs before Phase 9 is complete? | Android and iPhone. | Android and iPhone; Android only; One platform plus automation |
| What happens when analytics is offline or rejects a request? | User flows continue, while QA treats the missing or rejected event as a failure to fix. | Flow continues and QA fails event; Block flow; Ignore missing event |
| What gaps block Phase 9 completion? | All roadmap-critical onboarding paths and acquisition, activation, and engagement events must pass; unrelated findings may be logged for later. | Block on critical gaps; Complete with critical gaps logged |
| Must a configured test build prove analytics endpoint acceptance beyond local track calls? | Yes. Prove the capture endpoint accepted each event. | Prove accepted capture; Local call is enough |

## Implementation Discretion

Exact event names, required metadata fields, idempotency keys, placement-abandonment timing, and test transport mechanics are left to Phase 9 research and planning within the decisions in `09-CONTEXT.md`.

## Deferred Ideas

None from this discussion.
