# Phase 10: Pre-discussion audit

**Date:** 2026-10-01
**Scope asked for:** audit the discussion, the plans and the execution of Phase 10, rewrite where needed, and set up a fresh discussion and planning pass.

## 1. What exists

Nothing has been done on Phase 10 yet.

| Artifact | State |
|---|---|
| `10-CONTEXT.md` / `10-DISCUSSION-LOG.md` | Do not exist. No discussion has run. |
| `10-RESEARCH.md`, `10-UI-SPEC.md`, `10-PATTERNS.md` | Do not exist. |
| `10-*-PLAN.md` | None. ROADMAP says `Plans: TBD`. |
| `10-*-SUMMARY.md`, commits | None. No execution. |

I searched every branch (`git log --all`), both worktrees, and `Downloads/` to depth 6. Older commits titled "Phase 10: subscription monetization" (`19d230e`, `3353ff8`) belong to an earlier milestone's numbering and are not this phase.

So there was no discussion or plan to grade. What gets graded is the **input** a discussion would start from: the ROADMAP entry and FEEDBACK-01/02. That input has two defects serious enough to send a discussion the wrong way. Both are fixed in ROADMAP.md and REQUIREMENTS.md (section 4).

## 2. Spec defects (ROADMAP Phase 10 as written on 2026-09-19)

### S1. BLOCKER: criteria 4+5 describe review gating, which Google Play prohibits and Apple disallows

The original goal was "without negative ratings leaking to the public store": ask for a rating in-app, send positive ratings to the store and negative ones to a private form. That is review gating.

- **Google Play, In-App Review API design guidelines (verbatim):** "Your app shouldn't ask the user any questions before or while presenting the rating button or card, including questions about their opinion (such as 'Do you like the app?') or predictive questions (such as 'Would you rate this app 5 stars')." Source: developer.android.com/guide/playcore/in-app-review
- **Apple, App Review Guideline 5.6.1:** apps must use the provided API (`SKStoreReviewController` / `requestReview`) to ask for reviews, and custom review prompts are not allowed. Sentiment pre-gating is a known rejection risk.
- **FTC, 16 CFR 465.7 (in force since 2024-10-21):** prohibits suppressing reviews based on their rating or negative sentiment. Whether in-app gating counts is for legal review to decide, but it adds a third reason not to build it.

**Consequence:** a plan that implements criteria 4+5 as written could get the app rejected or penalised on Play, which is the platform Ealch actually ships on today. Being Android-first makes this risk higher, not lower.

**Fix applied:** split the phase into two flows that do not depend on each other:
1. **Rating:** call the native review API directly at a well-chosen positive moment, with no in-app question first. Fewer negative ratings comes from choosing the moment (after a win, never after an error, never in the first sessions), not from screening users.
2. **Report a problem:** a categorised report plus free text that is always available (Settings, plus failure surfaces), for anyone at any time. It is never shown as the alternative to rating.

### S2. MAJOR: FEEDBACK-01 attaches the wrong screen to the goal

The goal says "users can report a broken experience". `app/feedback.tsx` ("Le Rapport") is the learner's **performance report**: accuracy ring, accuracy per drill, weak words. It is not a feedback or bug-report screen. The route name `/feedback` is a leftover that misleads, and the roadmap carried that confusion straight into a goal. "Verify/fix if anything is broken" also has no acceptance bar, so the phase cannot be closed against it.

**Fix applied:** FEEDBACK-01 is now an explicit Le Rapport correctness pass with a defect list (section 3) and a device-evidence close condition. The bug-report job moves to the new FEEDBACK-03.

### S3. MAJOR: criterion 2 (shared PushBanner nudge pattern) does not fit a compliant design

With no pre-question, there is no custom rating UI to style. The native sheet is the whole prompt. Wrapping it in a PushBanner "Rate us?" card would bring back the pre-prompt that S1 removes. The shared-pattern rule from Phase 5 criterion 5 now applies only if the discussion decides on an in-app "report a problem" nudge after a detected failure.

### S4. MAJOR: the dependency field says "Nothing"

Real dependencies:
- **Phase 9:** the milestone events (lesson complete, streak, exam report) are where the "positive moment" trigger is defined. Analytics consent (D-28) also governs whether a feedback report may carry device/app metadata.
- **Phase 5:** only if a nudge surface is used (S3).
- **Native module:** `expo-store-review` is not installed. Adding it moves the runtime fingerprint, so the rating flow ships **by binary, not OTA** (see memory note "Fingerprint includes EAS config").
- **iOS:** no Apple developer account yet (D-U-N-S pending). iOS proof must be deferred the same way Phase 9 deferred it.

### S5. MINOR: criterion 3 counts something the app cannot see

Neither API reports whether the sheet appeared or whether the user rated (`requestReview()` returns `Promise<void>`; Play applies its own undisclosed quota). The 3-per-365-days cap must count **requests**, persisted locally per install, and the criterion should say so. Google also says never to put the API behind a button. A Settings "Rate Ealch" row must open the store listing URL instead.

### S6. MINOR: the report destination was never named

"Reports to the developer" leaves open where the report goes (Supabase table with RLS, email, PostHog), what it may include (answer text and transcripts are already excluded by Phase 9's analytics rules), whether guests can send one, and how it is rate-limited (Phase 3 TTS lesson: an unauthenticated write endpoint gets abused).

## 3. Le Rapport (`app/feedback.tsx`) code-level findings, for FEEDBACK-01

These come from reading the code, not from device testing. Each one needs device confirmation during the phase.

| # | Finding | Evidence |
|---|---|---|
| R1 | **Raw English activity ids as row labels.** `drillNames` covers 6 activities (flashcards, voiceflash, dictation, sentence, roleplay, placement). `Activity` also has `lesson`, `speak`, `player`, `review`, `narrated`, `exam`, `exam-review`. Any of those falls back to its raw id, so a French UI shows rows titled "lesson" or "exam-review". Lesson practice is likely the biggest source of attempts, so the most prominent row is probably affected. | `feedback.tsx:68`, `strings.ts:64/527/1038`, `progress.logic.ts:19-26` |
| R2 | **Exam misses push accuracy down.** A failed closed exam task adds one `correct:false` `exam-review` attempt per target item. A passed task adds nothing. The headline accuracy ring and the `exam-review` row therefore only ever take exam misses, never exam successes, so the row reads 0% by construction. | `useProgress.ts:178-181`, `progress.logic.ts:1354-1366` |
| R3 | **Hard to reach.** The only entry points are the end of `roleplay.tsx` and `speak.tsx`. There is no route from home, profile or settings, so most learners never see the screen. | `grep router.push('/feedback')` |
| R4 | **No screen test.** None of the 19 component tests under `__tests__/` renders `feedback.tsx`. Phase 18's infrastructure supports one. | `ls __tests__` |
| R5 | **Ring a11y.** The SVG ring's number sits apart from its label. Check under TalkBack that it reads as "accuracy, 83 percent" and not just "83". | `feedback.tsx:22-56` |
| R6 | **Weak-item deep links after 07.1.** Rows push `/lesson?key=…&at=anchor`. Confirm on device that the anchors still land correctly under the Concept C spine. | `feedback.tsx:229-232` |

## 4. Rewrites applied

- **ROADMAP.md, Phase 10:** goal, dependencies, success criteria and pitfall watch rewritten (S1 to S6).
- **REQUIREMENTS.md:** FEEDBACK-01 tightened. FEEDBACK-02 is now non-gated rating. New FEEDBACK-03 covers report-a-problem. Traceability row added.

The earlier wording is kept here so the change can be reversed:
> FEEDBACK-02 (old): "…a positive rating routes to the store review prompt (App Store/Play Store), a negative rating routes to an in-app 'tell us more' flow (categorized problem options + free-text box) that reports to the developer instead of the public store"

## 5. Questions the fresh discussion must settle (none are pre-decided)

1. **Positive moment.** Which Phase 9 milestone triggers the review request: a lesson completed with high accuracy, a 7-day streak, the first exam report, or a level-up? What are the minimum conditions (for example ≥ N completed lessons, ≥ D days since install, no error or crash this session)?
2. **Cap mechanics.** Is it 3 requests per rolling 365 days per install, and is there a minimum gap between requests (for example 60 days)? Does a reinstall reset it? Local storage only, or synced to the account?
3. **Report-a-problem destination.** Supabase table plus RLS (insert-only, no select), email via edge function, or both? What rate limit? Can guests submit?
4. **Report payload.** Category list (audio/voice, grading felt wrong, content error, crash or freeze, payment, other), free text length cap, which automatic metadata (app version, runtime, screen, lesson id) is allowed under D-28.
5. **Where report-a-problem appears.** Settings row (certain), plus which failure surfaces: an STT "hears nothing" state, an exam grading failure, a content load error? Does any of those use the Phase 5 PushBanner kind?
6. **Le Rapport scope.** Fix R1 to R6 only, or also add an entry point from home/profile (R3)? Should exam-review attempts be excluded from the headline accuracy (R2), or should exam passes be logged too?
7. **Route naming.** Rename `/feedback` to `/report` now (deep links, analytics screen names) or leave it?
8. **iOS.** Defer iOS proof explicitly (no developer account) with a written re-entry condition, as Phase 9 did?

## 6. Next steps

1. `/gsd-discuss-phase 10` reads this file plus the rewritten ROADMAP entry. Ask it to work through section 5 and write `10-CONTEXT.md`.
2. `/gsd-ui-phase 10`: two new surfaces (report form, Settings rows) and Le Rapport label fixes.
3. `/gsd-plan-phase 10` with research on, so the researcher confirms current `expo-store-review` behaviour and the Play quota guidance against this file.

New `.md` files are gitignored in this repo. Commit this one with `git add -f`.
