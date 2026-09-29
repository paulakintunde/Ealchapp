# Phase 9: Onboarding & Analytics Audit - Context

**Gathered:** 2026-09-29
**Status:** Ready for planning

<domain>
## Phase Boundary

Audit and fix the existing first-run onboarding and optional placement journey end to end (QA-01). Audit and close engagement, acquisition, and activation analytics gaps (QA-02), including event payloads and accepted delivery. Preserve the existing learning, grading, entitlement, and navigation authorities unless the audit finds a defect. Phase 9 does not add a new analytics provider or unrelated growth feature.

</domain>

<decisions>
## Implementation Decisions

### Onboarding and activation

- **D-01:** `onboarding_completed` counts once when the learner leaves the first-run wizard result screen for the app. Guest completion counts. Existing-account sign-in and later guest signup do not create another onboarding completion.
- **D-02:** Each onboarding step counts once, on first completion, even if the learner returns and changes an answer. An interrupted wizard resumes at the last unfinished step with earlier choices preserved.
- **D-03:** The reminders step offers an explicit “Continue without reminders” action that advances without requesting notification permission.
- **D-04:** `first_lesson_started` counts only when structured trail lesson content opens. Tapping a locked A2 lesson that opens the Première paywall does not count. Flashcards, exams, and roleplay do not satisfy this funnel step.

### Placement

- **D-05:** Placement is optional. Dismissing its offer records `placement_skipped` and does not prevent first lesson activation. A result obtained after an initial skip is a separate later outcome; the initial funnel remains skipped.
- **D-06:** Keep the first completed placement result as the initial funnel result. Record later retakes separately, without rewriting the first outcome.
- **D-07:** Starting placement and exiting before a result is distinct from voluntarily skipping the offer. Record started and abandoned when an attempt is actually abandoned. If the app closes mid-check, restore answers and resume the same attempt at the next unanswered question.
- **D-08:** If placement questions cannot load, offer Retry and Continue without placement. Record a load failure distinct from a voluntary skip.

### Signup and identity

- **D-09:** Signup completion and onboarding completion are separate milestones. An authenticated signup may complete while the wizard remains unfinished. If email verification is required, `signup_completed` waits for verification and an authenticated session, not merely an accepted signup request.
- **D-10:** Link earlier guest onboarding and learning events to an account created successfully by that guest on the same device. Do not link merely on a failed signup attempt.
- **D-11:** Do not merge preceding guest events when someone signs in to an existing account on the device; it may be shared. After sign-out, start a new anonymous journey. Authenticated learning activity for the same account across devices forms one account journey, while each installation keeps its own first-open record.
- **D-12:** If email signup is unavailable, preserve entered details and offer Retry or Continue as guest. Do not record signup completion. If optional microphone permission or speech recognition fails, allow the learner to skip and finish onboarding, and record that failure separately.

### Acquisition and D1 return

- **D-13:** `first_open` counts once per installation at first launch, even if onboarding is left immediately.
- **D-14:** D1 return means opening the app to foreground on the next calendar day in the learner’s local time. Verify the date boundary with a controlled clock and foreground detection on a device.
- **D-15:** An unavailable acquisition source is not automatically “organic.” Distinguish no campaign referrer, lookup failure, and a store that cannot provide a per-install value.
- **D-16:** On Android, send recognized parsed campaign fields (such as source, medium, campaign) and capture status, never the raw install-referrer URL. Fire first-open immediately; if lookup finishes later, send a separate attribution event tied to the same install.
- **D-17:** When iPhone provides no per-install source to the app, mark it unavailable in the app event. Review App Store campaign-link reporting separately in App Store Connect; do not infer a learner-level source from aggregate campaign totals.

### Engagement events and payloads

- **D-18:** `lesson_completed` fires when completion is recorded: after the quiz, or after the final content page for a lesson without a quiz. Leaving the screen is not the event boundary.
- **D-19:** `exam_submitted` fires after section results are recorded, even if an open answer is marked ungraded. It does not wait for every answer to receive a grade.
- **D-20:** A streak event fires once when a real practice session is logged for a new local day, with the updated streak length. Merely displaying the streak on Home does not fire it.
- **D-21:** Engagement payloads contain stable content or product IDs and outcome metadata. Exclude answer text, speech transcripts, and email addresses.

### Proof and completion gate

- **D-22:** Acceptance requires automated checks of event sequence and payloads plus device walkthroughs of guest and email onboarding, placement skip/result/abandon, and relevant learning paths. Run onboarding and placement walkthroughs on Android and iPhone.
- **D-23:** Verify purchase analytics with a store sandbox purchase and automated capture checks; do not require a real charge.
- **D-24:** A configured analytics test build must prove the capture endpoint accepted each event, beyond proving a local `track()` call. If analytics is offline or rejects a request, the learner’s onboarding, placement, lesson, and purchase flows continue, while QA records the missing event as a failure to fix.
- **D-25:** Phase 9 remains incomplete until every roadmap-critical onboarding path and acquisition, activation, and engagement event passes. Log unrelated findings for later work.

### Implementation Discretion

- Choose exact typed event names and required payload fields within these boundaries, including attempt/install identifiers and idempotency keys. Do not duplicate an event when a screen rerenders, a step is revisited, a placement attempt resumes, or a learner switches devices.
- Decide the precise timeout or explicit-exit rule that marks an interrupted placement attempt abandoned, while preserving D-07’s ability to resume the same attempt.
- Choose a test capture mechanism and diagnostics that prove endpoint acceptance without delaying user-facing flows or logging sensitive content.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Scope and earlier product rules

- `.planning/ROADMAP.md` — Phase 9 goal, hard Phase 07.1 dependency, and success criteria.
- `.planning/REQUIREMENTS.md` — QA-01 and QA-02.
- `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-GATING-RULE.md` — A2+ Première gate; informs the first-lesson activation boundary.
- `.planning/phases/07.1-concept-c-spine-rewrite-trail-act-screen-language-control/07.1-CONTEXT.md` — current day-one trail, orientation, and optional placement offer.
- `.planning/phases/09-onboarding-analytics-audit/09-REVIEW.md` — source findings and gaps found before this discussion; findings need runtime verification.

### Platform attribution references

- [Google Play Install Referrer](https://developer.android.com/google/play/installreferrer) — available Android install-referrer data and first-execution guidance.
- [Apple App Store Connect campaign links](https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links) — campaign reporting and privacy thresholds; does not establish a per-install value available to the app.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `ealch-v2/src/services/analytics.ts` — typed event-name union, stable anonymous installation ID, explicit PostHog HTTP capture, and nonblocking `track()` entry point.
- `ealch-v2/src/store/progress.logic.ts` and `ealch-v2/src/store/useProgress.ts` — placement estimator, persisted attempts/sessions, and local-day streak logic.
- `ealch-v2/src/services/auth.ts` and `ealch-v2/src/services/session.ts` — signup result and verified auth-session boundary.

### Established Patterns

- Analytics is explicit, fire-and-forget, and a no-op without a configured key. It currently switches from a stored anonymous ID to an auth user ID without linking them, and it does not inspect capture HTTP status.
- Onboarding preferences persist, but the wizard step is local screen state. Placement records each answer and a result but does not currently preserve an unfinished question position.
- Phase 5 gates A2+ lesson content. Paywall routing must not inflate `first_lesson_started`.

### Integration Points

- `ealch-v2/app/index.tsx`, `app/onboarding.tsx`, and `app/signin.tsx` — first open, wizard step, signup, and completion boundaries. `signIn` also calls `completeOnboarding`, so the analytics completion event must be wizard-specific.
- `ealch-v2/app/den.tsx`, `app/placement.tsx`, and `app/lesson.tsx` — orientation and placement offer, attempt/result/retake, and true lesson entry/completion.
- `ealch-v2/app/exam-section.tsx`, `app/paywall.tsx`, and progress/session writers — exam submission, sandbox purchase/restore, and streak engagement events.
- App lifecycle and a platform-specific Android referral bridge — D1 foreground detection and install attribution; confirm exact implementation during Phase 9 research/planning.

</code_context>

<specifics>
## Specific Ideas

- Device proof must include guest and email paths and the placement skip, result, and abandonment branches on both Android and iPhone.
- Automated tests should assert exact event order, one-time behavior, required metadata, the absence of learner response content, and handling of accepted/rejected capture responses.
- Android and iPhone attribution must be reported honestly at the level each platform actually exposes; a store dashboard total is not a per-learner referrer.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 9 scope. Unrelated issues found during QA may be logged for a later phase under D-25.

</deferred>

---

*Phase: 09-onboarding-analytics-audit*
*Context gathered: 2026-09-29*
