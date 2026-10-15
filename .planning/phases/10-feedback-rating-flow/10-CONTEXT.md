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

  *Amended 2026-10-01 (fresh review):* `finish()` is `router.back()` (`lesson.tsx:689`), and `/lesson` is also pushed from `exam-report`, `report`, `placement` and `weakness.ts`, so "back" does not always reach the trail. The request is therefore **armed** at completion and **fired** only when `act.tsx` or `den.tsx` gains focus. The arm expires after 30 minutes. It survives a "next lesson" chain (`router.replace('/lesson')`), because it fires on the next trail focus. Killing the app clears it, because the arm lives in memory only. Returning to any non-trail screen does not fire it.
- **D-04:** Eligibility needs at least 5 completed lessons **and** at least 7 days since install. Sons lessons do not count toward the 5 and never trigger.

  *Amended 2026-10-01 (fresh review):* the unit is **distinct non-Sons lesson ids**, persisted in the review state (D-08). Existing learners get a one-time seed from `useProgress.lessonMissions`, and the seed runs only after `useProgress` has hydrated and content (including packs) is ready. Otherwise it is deferred and not marked done. A version bump wipes `lessonMissions`, so the seed can undercount but never overcount. Install age comes from the Phase 9 `ealch-acquisition-first-open` record.
- **D-05:** Guests (no account) are never asked.
- **D-06:** Skip the request without spending the cap when any of these is true:
  - an error was logged this session (`services/errors.ts` ring is not empty);
  - the device is offline;
  - a paywall or a PushBanner kind showed in the same moment.

  *Amended 2026-10-01 (quality review):* the "sent a problem report recently" skip is **dropped**. Choosing whom to ask based on whether they complained is selective solicitation, which the FTC Endorsement Guides (16 CFR Part 255) address. Part 465 (16 CFR 465.7) covers review suppression. A report never affects review eligibility.

  *Corrected 2026-10-01 (fresh review):*
  - **Error ring sources.** The `errors.ts` ring is fed by `logError` from three places: the ErrorBoundary (`_layout.tsx:47`), the global JS handler (`errors.ts:102`) and unhandled promise rejections (`errors.ts:116`). Caught STT, TTS and network failures do not reach it. This narrowness is **accepted** for this phase. Success criterion 2's "never in a session with an error" is read as "an error that reached the ring", and the ring is not widened.
  - **"In the same moment."** A paywall or a PushBanner shown in the **10 minutes before the fire** skips the request without spending it.
  - **Offline.** Any `system_config` read error or timeout (`refreshConfigWithin(4000)`), including a paused project, counts as offline.
  - **Review-quota caveat.** A review request only ever goes to learners who just scored 100% (D-01). This is a choice of trigger moment that the Play and Apple guidance recommends ("after a positive experience"). It is not a filter on learner sentiment: every eligible learner who reaches the moment is asked, and nothing asks how they feel first.

### Review request: cap
- **D-07:** At most 3 requests per rolling 365 days, at least 90 days apart. The cap counts **requests**, because neither platform reports whether the sheet appeared or whether the learner rated.
- **D-08:** The counter is per install, stored locally (AsyncStorage, alongside the other per-install state from Phase 9). A reinstall resets it. No server column.
- **D-09:** Send a `review_requested` analytics event each time the request fires, with stable ids only (Phase 9 D-21 rules, not this file's D-21). No rating outcome is knowable.
- **D-10:** Requests sit behind a remote flag with a cached value, following the `examGateOn` pattern (`src/services/config.ts`). Because the native module needs a binary, the flag is the only way to pause requests after release.
- **D-11:** Settings gets a "Rate Ealch" row that opens the **store listing URL**, never the review API. Google says not to put the API behind a button. *Amended 2026-10-01:* the row is **Android only** until an App Store id exists. The iOS row is a named pre-App-Store launch-checklist item.

### Report a problem: destination and payload
- **D-12:** Reports go to a new Supabase table (for example `problem_reports`), written only through an edge function with auth and a rate limit (the Phase 3 TTS pattern). The client gets insert only, with no select, update or delete.
- **D-13:** Guests may report. They are keyed on the Phase 9 install ID with a tighter rate limit (around 3 per day). Signed-in users get a looser limit; the planner sets the numbers. *Superseded in part by D-35, which fixes the numbers.*
- **D-14:** Six categories, and one must be chosen: **Audio or voice / Grading felt wrong / Content mistake / App froze or crashed / Payment or access / Something else.**
- **D-15:** The free-text box is optional, capped at 1000 characters.
- **D-16:** Automatic context attached to every report:
  - app version, update runtime and platform/OS;
  - current screen plus lesson/content/item ID (stable IDs only; quiz item identity is defined in D-40);
  - the last 10 errors from the `errors.ts` ring (message and stack);
  - device model, font scale and theme.

  Never attached: answer text, speech transcripts, or email (except as D-17 allows).
- **D-17:** An optional "You can contact me" checkbox, off by default and for signed-in learners only. When ticked, the edge function stores the account email on the report server-side. The client never sends email in the payload. *Reconciled 2026-10-01 with roadmap success criterion 4 ("carries no … email"):* the criterion is read as "the **client payload** carries no email". The server-side `contact_email`, opt-in and taken from the verified token only, is the single permitted exception. ROADMAP criterion 4 is reworded to say so.
- **D-18:** When a report can't be sent (offline, 429 or 5xx), it is saved and retried on the next launch and each return to foreground, using the same approach as the Phase 9 D-27 outbox. The learner sees "Sent" or "Will send when you're back online". A 4xx is not retried. *Superseded in part by D-35:*
  - **429:** the report stays queued and is retried no sooner than the next UTC day. The learner is online, so they see the "queued, limited" copy ("will send tomorrow or later"), not the offline copy.
  - **Timestamps:** `client_created_at` must be strict ISO-8601 UTC (`/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/`) on both client and server, so a value that passes validation can never fail the `::timestamptz` cast.
  - **Expiry:** queued reports are pruned after 30 days.
- **D-19:** The sheet shows a one-line "What's included" note that expands to the full D-16 list. Reports are started by the learner and say what they carry, which is the stance taken while **Phase 9 D-28** consent is still open. *Launch gate added 2026-10-01:* guest and signed-in diagnostics (install id, error stacks, device model) ship on this disclosure-only basis for the Android release. If Phase 9 D-28 later requires opt-in consent for analytics, the report payload follows the same ruling before the iOS or EU launch. This is a named row on the pre-App-Store gate (10-12).
- **D-20:** Reports are kept for 12 months and then deleted by a scheduled cleanup. Delete-account also removes the learner's reports. *Amended 2026-10-01:*
  - **Guest-era reports.** Reports filed before sign-up are keyed on `install_id` only. Delete-account receives the install id from the client and deletes those rows too.
  - **Local outbox.** Delete-account also **clears the local report outbox**, so a queued report cannot recreate a row after deletion.
  - **Retention mechanism.** The cleanup uses `pg_cron` if the extension exists live. Otherwise the edge function purges opportunistically, at most once a day.
- **D-21:** Triage happens in the Supabase dashboard using a `status` column (`new / seen / fixed / wont_fix`). No admin UI this phase.

### Report a problem: entry points and form
- **D-22:** Entry points:
  - **Settings**: always available.
  - **Crash fallback screen** (the ErrorBoundary in `app/_layout.tsx`): pre-fills "App froze or crashed".
  - **STT "hears nothing" or microphone failure**: pre-fills "Audio or voice".
  - **Exam grading failure or ungraded answer**: pre-fills "Grading felt wrong". *Clarified 2026-10-01:* this covers both real `NoBandReason` values in `exam-report.tsx`, `not-graded` and `audio-failed`, and both pre-fill "Grading felt wrong", as locked here. (The UI-SPEC researcher default of "Audio or voice" for `audio-failed` is reverted; Paul may change this.)
  - **Roleplay "not heard"** (`rpNotHeard`) counts as an STT failure surface and pre-fills "Audio or voice". There are 7 such surfaces in total (see UI-SPEC S4).
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
- **D-32:** Build for both platforms (*clarified 2026-10-01:* an Android binary now; iOS once the Apple developer account exists). The phase closes on **Android device evidence**:
  - review request at the trigger;
  - the cap holding on a repeat trigger;
  - one report from each entry-point type reaching the table;
  - an offline report delivered late;
  - Le Rapport with a populated log and an empty log.

  iOS proof of the review request and report is a named pre-App-Store launch-checklist row, the same route Phase 9 D-22/D-23 option (b) offers.

  *Amended 2026-10-01 (quality review):* the review-sheet proof uses a **Play internal-track build** on the Pixel 9, because a sideloaded build does not show the Play In-App Review sheet. Checking that build's prerequisites is a **wave-1 checkpoint**, not a wave-5 decision. Prerequisites are a Play Console upload, the Pixel 9 account as an internal tester, and an install from the Play link.

  *Proof recipes added 2026-10-01 (fresh review).* No row may depend on the device clock disagreeing with the server.
  - **Review request (R-01):**
    - Install the Play-delivered build on the Pixel 9 **in wave 1**, so the 7-day install age accrues naturally, then upgrade it through the internal track. No clock move.
    - Preconditions: the tester's Google account has never reviewed Ealch, and Play's quota makes the sheet effectively one-shot per account and app. One clean attempt is the budget.
  - **Cap and 90-day spacing:** proven by seeding the review state through the RKStorage recipe, not by moving the clock.
  - **Rate-limit rows:** reset only the tester's **exact** usage keys (`i:<install>`, `u:<uid>`, `ip:<the runner's exact IP>`), never a wildcard. The "next UTC day" row either waits for a real UTC midnight or resets usage and asserts 201.
  - **Crash entry:** a dev-only crash trigger, or a release-safe forced render error behind a debug flag.
  - **Ungraded exam:** an exam answer submitted with the grading function unreachable (`not-graded`) or with audio missing (`audio-failed`).
  - **Production rollout:** promoting the binary to the production track is a named launch-gate row.
- **D-33:** Adding `expo-store-review` moves the runtime fingerprint, so this phase ships **by binary, not OTA**. Check the fingerprint before any `eas update`. *Amended 2026-10-01:* the install moves HEAD's runtime for **every session**, and an `eas update` cut from HEAD afterwards reaches no current production user. The `npx expo install expo-store-review` step is therefore deferred to the wave that first imports the module (10-07), not wave 1. Whoever installs it appends a dated notice to `.planning/STATE.md` ("runtime moved by expo-store-review; no eas update from HEAD until the Phase 10 binary ships").

### Added 2026-10-01 (quality review of discussion, UI-SPEC and plans)
- **D-34:** A review request is counted against the cap **immediately before** `requestReview()` is called, and it stays counted even if the call rejects. This follows D-07. Only `isAvailableAsync() === false` skips the request without counting it, because then no request is made.
- **D-35:** Report rate limits are 3 per day per guest install, 10 per day per signed-in learner, 200 per day globally, and 20 per day per IP when the header is present. **Only accepted reports increment the counters.** A rejected or 429 attempt never consumes the global ceiling. When the server returns 429, the client keeps the report in its outbox and retries no sooner than the next calendar day (UTC), never in a backoff loop. If the counter cannot be read, the server returns 503 (fail closed).
- **D-36:** New Phase 10 French strings use a narrow no-break space (U+202F) before `? ! ;` and a no-break space (U+00A0) before `:`. They use the ellipsis character `…`, never `...`. A test checks the new keys. The existing strings (0 NBSP today) go on the backlog and are not converted in this phase. The no-em-dash and no-"honest" rules still apply.
- **D-37:** The concurrent 08.1 session gets a per-file guard. Before editing a shared file (`_layout.tsx`, `settings.tsx`, `speak.tsx`, `lesson.tsx`, `den.tsx`, `LessonPager.tsx`, `paywall.tsx`, `strings.ts`, `app.json`, `MissionRich.tsx`, `WordPractice.tsx`, `onboarding.tsx`, `sentence.tsx`, `profile.tsx`), the executor runs `git status --porcelain -- <file>`. If the file has uncommitted hunks the executor did not make, it **stops and waits** for 08.1 to commit. It never builds on top of another session's hunks and never commits them.

  *Strengthened 2026-10-01 (fresh review).* After its own first edit, an executor can no longer tell its hunks from foreign ones with `git status`, so the guard compares diffs:
  1. **Before** the first edit of any pre-existing file, check `git status --porcelain -- <file>`. It must be clean. This applies to every pre-existing file, not only the list above.
  2. **After each of its own edits,** save `git diff -- <file>` to the scratchpad as the expected diff.
  3. **Immediately before each commit,** recompute `git diff -- <file>` and compare. Any difference means a foreign hunk. Stop.
  4. **Waiting:** "Stop and wait" means poll every 5 minutes for up to 60 minutes. If the file is still dirty with foreign hunks, return **BLOCKED** naming the file, and never proceed.

  Plans that share files with open 08.1 plans (10-07, 10-08, 10-13, 10-14) also list those 08.1 plans in a `coordinate_with` note.
- **D-38:** Review state and the report outbox each serialise every read-modify-write on a single promise queue. A report is **added to the outbox before it is sent** (claim-then-send), so killing the app mid-send cannot lose it.
- **D-39:** "Retry can never re-arm" holds across visits. The review request arms only on the **first** perfect completion of a given lesson id, and the armed ids are persisted. *Added 2026-10-01:* if writing the spend to the cap fails, `requestReview()` is **not** called (D-34 requires the spend to be recorded first).
- **D-40:** (2026-10-01, fresh review) **Quiz item identity is a hybrid key.**
  - **No shuffle to undo.** Quiz questions are never shuffled; only options are (`LessonRich.tsx` `orders`), and rounds render in authored order (`QuizRoundsView.tsx:144`). The flat deck renders a **filtered** list (`lesson.tsx:553-556`), so the authored index is `quizSection.questions.indexOf(question)`, never the display index.
  - **Key format.** The key is `<position>:h<hash8>`:
    - flat: `${L.id}#quiz.q${authoredIndex}:h${hash8}`
    - rounds: `${L.id}#quiz.${round.id}.q${i}:h${hash8}`
  - **The hash.** `hash8` is the first 8 hex characters of a deterministic hash over `format | normalised q | prompt | say | word | correct answer text`. It uses no native dependency.
    - Measured 2026-10-01 over 9,487 questions: 0 hash collisions. *Re-measured 2026-10-15 over about 12,046 questions (1,217 in `seed.json` + 10,829 in `seed-packs.json`, after the C1 and C2 content): 1 duplicate question, `c2.04.l1` q4 and q61 (identical typeIn text, not a hash collision).* The two keys still differ because the position is part of the key. The corpus test therefore asserts that every **full key** is unique within a lesson, and lists known identical-text duplicates (currently `c2.04.l1`) separately. It does not assert hash8 uniqueness. The test prints the live question count.
    - The hash is one-way, so no answer text is sent (D-16).
  - **Fits the wire contract.** The key matches `/^[A-Za-z0-9._#:-]{1,120}$/`; the longest is 59 characters.
  - **No content change.** This needs no content edit and no publish.
  - **Deferred.** Authored per-question ids (a schema field plus a backfill of 156 lessons) are deferred to a content phase, which may reuse the hash as the backfilled id.
- **D-41:** (2026-10-01) **The mission flag points at the card.** A content flag on a mission page carries the **card-level** id: the section `id` (100% coverage in the corpus) plus the card sub-index (`lastSub`). It does not carry the mission-level `#s{ix}.0`.

### Added 2026-10-15 (staleness review, 14 days after the record was written)
- **D-42:** (D-02 measurement) the trigger stays at a perfect quiz (D-01) and no looser threshold ships (D-02). To make D-02's "loosen it later" real, `lesson_completed` gains a `quiz_score_bucket` property: one of `'100'`, `'95-99'`, `'90-94'`, `'<90'`, `'none'` (no quiz). It is a stable, non-PII value (Phase 9 D-21 rules). A review of `review_requested` volume against `lesson_completed` buckets is due **30 days after the binary ships**. If fewer than 1 in 50 eligible completions fire the request, loosen to 95% on quizzes of 40 or more questions in a later phase. Rationale: the corpus has 190 lessons, every one with a quiz, a median of 80 questions and a maximum of 170, so a perfect score is rare.
- **D-43:** (report analytics) the report flow emits `report_submitted` (accepted by the server) and `report_queued` (saved to the outbox), each with only `category` and `entry_point` (stable ids, Phase 9 D-21 rules; never free text, stacks or ids of content). This gives the triage volume that D-24 and D-21 need.
- **D-44:** (D-22 addition) the exam report's `examShortUnchecked` state (typed DALF C1 answers the grader could not check; `exam-report.tsx:113`, `:545`) is a third exam grading-failure surface. It gets the same report action, pre-filling "Grading felt wrong". It is not a `NoBandReason`.
- **D-45:** (D-19 and consent) Phase 9 D-28 consent gates the report payload for **EU, Quebec and iOS launches only**. The Android release ships on the disclosure-only basis in D-19 (the "What's included" note). A named pre-launch row in 10-12 records this. Paul may tighten it.
- **D-46:** (D-37 restated for today's repo) there is no concurrent dirty 08.1 session now (`git status` is clean apart from unrelated files). 08.1 plans 02 to 08 are unexecuted (0 SUMMARY files; Stage 1 closed by Paul's override, `5381e1e`) and share files with Phase 10. The diff-snapshot guard in D-37 still applies. "Stop and wait" now means: **sequence by plan, not by session.** Before editing a shared file, read the open 08.1 plans' `files_modified`, and if an unexecuted 08.1 plan owns the file, flag it in the SUMMARY. Poll-then-BLOCKED applies only if the working tree is actually dirty.
- **D-47:** (Play track and the Pixel 9) Paul does not have a Play internal-testing track yet, so plan 10-15 begins with a **setup guide** and waits (checkpoint, not autonomous). Start it first, because the 7-day install clock only starts on the Play install. The Pixel 9 currently has a sideloaded 2026-09-29 build. If its signing key differs from the Play build, the Play install needs an uninstall, which wipes AsyncStorage and restarts the install-age clock. 10-15 records the signing check and says so.
- **D-48:** (policy re-check) Google's In-App Review guideline text is confirmed current (developer.android.com/guide/playcore/in-app-review, 2026-10-15). Apple 5.6.1 and the FTC wording are **not** re-fetched. A pre-iOS-launch row in 10-12 re-checks them.
- **D-49:** (Settings placement) the Android "Rate Ealch" row and the "Report a problem" row sit in **separate Settings sections** with neutral copy, so they never read as a happy/unhappy split. After the 3-per-year cap, the Settings row stays the permanent way to rate. Phase 11/12 mascot celebration states must not cover the lesson result screen (D-03) when they land.

### Claude's Discretion
- (Superseded by D-35 and the D-06 amendment: the "recent report" window and the rate limits.)
- The exact edge function and table names, schema and RLS shape, within D-12, D-17, D-20 and D-21.
- Copy for categories, "What's included", the thank-you and the Settings rows (French first, English toggle). No em dash and no "honest" in copy.
- (Settled by the D-06 correction: how "offline" is detected.)
- Whether the report sheet and the review request share a small logic file (pure, `node --test`-able, following the `src/store/entitlement.logic.ts` pattern; that file exists).

*Cross-phase references in this file are prefixed "Phase 9" (for example Phase 9 D-21 and D-28). An unprefixed D-NN always means this file.*

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
