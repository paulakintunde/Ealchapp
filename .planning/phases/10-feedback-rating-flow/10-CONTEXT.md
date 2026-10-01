# Phase 10: Feedback & Rating Flow - Context

**Gathered:** 2026-10-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Three deliverables that do not depend on each other (re-specified 2026-10-01, see `10-PRE-DISCUSSION-AUDIT.md`):

1. **Le Rapport correctness (FEEDBACK-01).** Fix the learner performance report at `app/feedback.tsx`.
2. **Native store review request (FEEDBACK-02).** Call `expo-store-review` at a positive moment with **no in-app question before or around it**, capped at 3 per year.
3. **Report a problem (FEEDBACK-03).** A categorised report with free text that is always reachable and never presented as the alternative to rating.

Sentiment gating ("Enjoying Ealch?" leading to the store for yes and a form for no) is **out of scope permanently**. It breaks the Google Play In-App Review guidelines and risks rejection under Apple 5.6.1.

</domain>

<decisions>
## Implementation Decisions

### Review request: trigger
- **D-01:** The only trigger is a completed lesson whose quiz scored **100%**. Completion is the Phase 9 D-18 boundary. A lesson without a quiz never triggers.
- **D-02:** No looser fallback threshold. If the trigger barely fires in practice, `review_requested` volume (D-09) will show it and the threshold can be loosened in a later phase.
- **D-03:** The sheet appears **after the learner leaves the result screen** and lands back on the trail. It never covers the celebration or the score.
- **D-04:** Eligibility needs at least 5 completed lessons **and** at least 7 days since install. Sons lessons do not count toward the 5 and never trigger.
- **D-05:** Guests (no account) are never asked.
- **D-06:** Skip the request without spending the cap when any of these is true:
  - an error was logged this session (`services/errors.ts` ring is not empty);
  - the learner sent a problem report recently (planner picks N days);
  - the device is offline;
  - a paywall or a PushBanner kind showed in the same moment.

### Review request: cap
- **D-07:** At most 3 requests per rolling 365 days, at least 90 days apart. The cap counts **requests**, because neither platform reports whether the sheet appeared or whether the learner rated.
- **D-08:** The counter is per install, stored locally (AsyncStorage, alongside the other per-install state from Phase 9). A reinstall resets it. No server column.
- **D-09:** Send a `review_requested` analytics event each time the request fires, with stable ids only (D-21 rules). No rating outcome is knowable.
- **D-10:** Requests sit behind a remote flag with a cached value, following the `examGateOn` pattern (`src/services/config.ts`). Because the native module needs a binary, the flag is the only way to pause requests after release.
- **D-11:** Settings gets a "Rate Ealch" row that opens the **store listing URL**, never the review API. Google says not to put the API behind a button.

### Report a problem: destination and payload
- **D-12:** Reports go to a new Supabase table (for example `problem_reports`), written only through an edge function with auth and a rate limit (the Phase 3 TTS pattern). The client gets insert only, with no select, update or delete.
- **D-13:** Guests may report. They are keyed on the Phase 9 install ID with a tighter rate limit (around 3 per day). Signed-in users get a looser limit; the planner sets the numbers.
- **D-14:** Six categories, and one must be chosen: **Audio or voice / Grading felt wrong / Content mistake / App froze or crashed / Payment or access / Something else.**
- **D-15:** The free-text box is optional, capped at 1000 characters.
- **D-16:** Automatic context attached to every report:
  - app version, update runtime and platform/OS;
  - current screen plus lesson/content/item ID (stable IDs only);
  - the last 10 errors from the `errors.ts` ring (message and stack);
  - device model, font scale and theme.

  Never attached: answer text, speech transcripts, or email (except as D-17 allows).
- **D-17:** An optional "You can contact me" checkbox, off by default and for signed-in learners only. When ticked, the edge function stores the account email on the report server-side. The client never sends email in the payload.
- **D-18:** When a report can't be sent (offline, 429 or 5xx), it is saved and retried on the next launch and each return to foreground, using the same approach as the Phase 9 D-27 outbox. The learner sees "Sent" or "Will send when you're back online". A 4xx is not retried.
- **D-19:** The sheet shows a one-line "What's included" note that expands to the full D-16 list. Reports are started by the learner and say what they carry, which is the stance taken while D-28 consent is still open.
- **D-20:** Reports are kept for 12 months and then deleted by a scheduled cleanup. Delete-account also removes the learner's reports.
- **D-21:** Triage happens in the Supabase dashboard using a `status` column (`new / seen / fixed / wont_fix`). No admin UI this phase.

### Report a problem: entry points and form
- **D-22:** Entry points:
  - **Settings**: always available.
  - **Crash fallback screen** (the ErrorBoundary in `app/_layout.tsx`): pre-fills "App froze or crashed".
  - **STT "hears nothing" or microphone failure**: pre-fills "Audio or voice".
  - **Exam grading failure or ungraded answer**: pre-fills "Grading felt wrong".
  - **Lesson content flag**: pre-fills "Content mistake" plus the item ID.
- **D-23:** The content flag appears on **lesson missions and quiz questions** only, as a small icon in the page header or overflow menu. It needs a screen-reader label ("Report a problem with this item"). Not a long-press (the Phase 8.1 rule against gesture-only actions).
- **D-24:** No proactive PushBanner offer. Learners report only where they are already looking, so nothing competes with the upgrade nudge for the single banner slot.
- **D-25:** The report UI is a bottom sheet (`presentation: 'formSheet'`, already used in `_layout.tsx`). Known traps: paint the `contentStyle` background, keep the top detent at 0.92 or below, and test at font scale 1.3 for clipped endings.
- **D-26:** After sending, show a short thank-you and return the learner to where they were.

### Le Rapport fixes
- **D-27:** Leave `exam-review` attempts out of the headline accuracy ring and the per-drill rows. They still feed the weak-words list. Exam passes are **not** added to the attempt log, so the SRS is unaffected.
- **D-28:** Give all 13 `Activity` values FR and EN names in `drillNames`. Add a test that fails when an `Activity` exists without a name.
- **D-29:** Add an entry point from `app/profile.tsx` ("Your report" row). The 07.1 trail and home screens are not touched.
- **D-30:** Rename the route `/feedback` to `/report`, and update the two call sites (`roleplay.tsx`, `speak.tsx`), deep links and analytics screen names. The problem-report sheet must use a different, clearly named route (for example `/report-problem`).
- **D-31:** The remaining audit findings are in scope as stated there:
  - R4: add a component test;
  - R5: the ring announces as "accuracy, N percent";
  - R6: weak-item deep links land correctly under the Concept C spine.

### Platforms and proof
- **D-32:** Build for both platforms. The phase closes on **Android device evidence**:
  - review request at the trigger;
  - the cap holding on a repeat trigger;
  - one report from each entry-point type reaching the table;
  - an offline report delivered late;
  - Le Rapport with a populated log and an empty log.

  iOS proof of the review request and report is a named pre-App-Store launch-checklist row, the same route Phase 9 D-22/D-23 option (b) offers.
- **D-33:** Adding `expo-store-review` moves the runtime fingerprint, so this phase ships **by binary, not OTA**. Check the fingerprint before any `eas update`.

### Claude's Discretion
- The "recent report" window in D-06, and the per-user and per-install rate limits in D-13.
- The exact edge function and table names, schema and RLS shape, within D-12, D-17, D-20 and D-21.
- Copy for categories, "What's included", the thank-you and the Settings rows (French first, English toggle). No em dash and no "honest" in copy.
- How "offline" is detected for D-06.
- Whether the report sheet and the review request share a small logic file (pure, `node --test`-able, following the `entitlement.logic.ts` pattern).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase scope and audit
- `.planning/phases/10-feedback-rating-flow/10-PRE-DISCUSSION-AUDIT.md`: spec defects S1-S6 and Le Rapport findings R1-R6 with file and line evidence. The policy reasons gating is excluded.
- `.planning/ROADMAP.md` § Phase 10: the five rewritten success criteria and the pitfall watch.
- `.planning/REQUIREMENTS.md`: FEEDBACK-01, FEEDBACK-02, FEEDBACK-03.

### Prior decisions this phase builds on
- `.planning/phases/09-onboarding-analytics-audit/09-CONTEXT.md`:
  - D-18 (lesson_completed boundary);
  - D-21 (payload exclusions);
  - D-22/D-23 (iPhone proof route);
  - D-27 (persistent outbox, the model for D-18 here);
  - D-28 (consent still open).
- `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-CONTEXT.md`: D-13 (nudge cadence relative to the rating cap) and D-14 (single banner slot; this phase adds no kind, per D-24).

### Platform policy (researcher should re-verify current wording)
- Google Play In-App Review API, design guidelines and quotas: https://developer.android.com/guide/playcore/in-app-review
- Apple App Review Guidelines 5.6.1 (App Store Reviews): https://developer.apple.com/app-store/review/guidelines/
- Expo StoreReview: https://docs.expo.dev/versions/latest/sdk/storereview/

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/services/errors.ts`: ring buffer of the last 10 errors this session. It feeds the D-06 "error this session" blocker and the D-16 attachment. `report()` is the stub where a crash reporter would plug in.
- `app/_layout.tsx` ErrorBoundary: the crash fallback screen that gets the D-22 report entry.
- `src/services/analytics.ts` / `analytics.logic.ts`: event allowlist and the D-27 outbox to copy for report retry.
- `src/services/acquisition.ts`: the Phase 9 per-install identity and first-open state, which gives the guest key and the install date for D-04.
- `src/services/config.ts`: the remote-plus-cached flag pattern (`examGateOn`) for D-10.
- `supabase/functions/tts/index.ts`: auth plus quota limits that can be tuned from `system_config`, the model for the report edge function.
- `formSheet` presentation, already configured twice in `app/_layout.tsx`.

### Established Patterns
- Pure `*.logic.ts` files with zero RN imports, tested with `node --test`. Eligibility and cap math belong in one.
- The app is npm (`ealch-v2`); admin is pnpm. Supabase has two migration planes (see memory).
- Copy rules: no em dash and no "honest" in learner-facing strings (`sons-alphabet.test.ts` enforces "honest").

### Integration Points
- The lesson result screen exit, for the D-03 trigger.
- Settings: the "Rate Ealch" row (store URL) and the "Report a problem" row.
- `app/profile.tsx`: the "Your report" row.
- Lesson mission and quiz headers, for the flag icon.
- STT failure UI, and the exam report's ungraded or grading-error state.
- `delete-account` edge function: must also delete the learner's reports (D-20).

</code_context>

<specifics>
## Specific Ideas

- The phase-close evidence bar is device rows that have been filled in, not green unit tests (house rule from Phases 8.1 and 9).
- The cap is deliberately conservative: a perfect quiz, 5 lessons, 7 days, 90-day spacing. Paul prefers fewer, well-timed asks over volume.

</specifics>

<deferred>
## Deferred Ideas

- **Crash reporter (Sentry or similar).** `errors.ts` `report()` is still a stub. Problem reports partly cover this but are not a substitute. Needs its own phase.
- **Admin triage page in ealch-admin.** Rejected for this phase in favour of the dashboard plus a status column (D-21).
- **Proactive "Having trouble?" banner after repeated failures.** Rejected for now (D-24). Revisit if reports are rare.
- **Flag icon on flashcards, dictation, roleplay and exam items.** This phase covers missions and quiz questions only (D-23).
- **Loosening the review threshold.** Revisit once `review_requested` volume is known (D-02).

</deferred>

---

*Phase: 10-feedback-rating-flow*
*Context gathered: 2026-10-01*
