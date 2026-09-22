# Requirements: Ealch

**Defined:** 2026-09-19
**Core Value:** Users can reliably learn French through Ealch's lessons and practice — the app must teach correctly and not lose or corrupt a learner's progress, content, or purchased access.

## v1 Requirements

Requirements for this milestone (full completion: content gaps + launch-readiness). Each maps to roadmap phases.

### Content-Publish Safety

- [x] **PUBLISH-01**: Publishing content blocks overwriting git-newer content across all content kinds (units, scenarios, playlists, speak-stages) — not just lesson bodies, which the existing guard already covers
- [x] **PUBLISH-02**: An author sees a human-readable pre-publish diff report (what changed, size deltas) before publishing, not just a pass/fail guard

### Monetization

- [x] **PAY-01**: A user can restore a previous purchase from Settings/paywall and gets accurate feedback ("restored" vs "no purchases found")
- [x] **PAY-02**: The paywall gates a coherent, explainable slice of content (e.g. A1 free / A2+exams gated) instead of one arbitrary lesson
- [x] **PAY-03**: Server-side/edge-function entitlement checks trust a verified, synced Postgres mirror, and a user who purchases while signed out keeps their entitlement after signing in elsewhere
- [x] **PAY-05**: Free users see a proactive upgrade nudge/prompt at a sensible moment in normal use, not only the reactive paywall triggered by a gated lesson

### Accessibility

- [ ] **A11Y-01**: Every interactive control built on the shared `Press` component announces a role to screen readers by default
- [ ] **A11Y-02**: Remaining icon-only/custom buttons not covered by the `Press` default have accessible labels
- [ ] **A11Y-03**: The app's dark/light theme follows the OS setting when "automatic" is selected
- [ ] **A11Y-04**: Flashcard text doesn't get clipped when the OS font-scale setting is increased

### Notifications

- [x] **NOTIFY-01**: Notification toggles in Settings (report/nudge/daily) actually control whether their respective notifications fire
- [x] **NOTIFY-02**: Notification body text always renders fully substituted — no literal `{t}`/`{name}` placeholders
- [ ] **NOTIFY-03**: Tapping a notification opens the specific session it advertised (deep link, including cold start via push token registration)

### Security

- [x] **SEC-01**: The TTS edge function rejects unauthenticated requests (real `auth.uid()` check, not just `verify_jwt=true` which still accepts the anon key) and enforces a per-user rate limit

### Performance

- [ ] **PERF-01**: The app reaches an interactive first screen without the multi-second blank/frozen splash currently caused by eager content loading
- [ ] **PERF-02**: The content snapshot is split/delivered by curriculum level instead of shipping as one growing single blob (needs a design spike first — `mergeCorpus` multi-overlay behavior is unconfirmed)

### Bug Fixes

- [ ] **BUG-01**: Audio/TTS playback pauses when the app is backgrounded and resumes appropriately on foreground
- [ ] **BUG-02**: A user's exam response is persisted before grading is requested, so it survives a crash/force-stop/process death
- [ ] **BUG-03**: STT continuous-mode behavior (`continuous: false`) is covered by a regression test so a prior fix (8cd0be3) can't silently regress
- [ ] **BUG-04**: Every recording-based exam task (`ExamSpeakTask`, `ExamInterlocutorTask`, `ExamDebateTask`) shows a restored, already-answered summary after a crash/relaunch instead of resetting to its fresh "start recording" screen — added 2026-09-22, surfaced by Phase 7's own BUG-02 device verification (see `07-VALIDATION.md`/`07-05-SUMMARY.md`). The underlying answer data (transcript, coverage, delivery signals) DOES survive a force-kill via BUG-02's fix — confirmed live on device via the section-level "X/2 answered" count staying accurate across two independent kill/relaunch cycles. The defect is presentational only: all three components initialize `phase` to `'idle'` unconditionally on mount with no prop reflecting a prior answer, so a user has no way to know their answer already exists and is invited to redo it, silently overwriting the good data.
- [ ] **BUG-05**: `exam-section.tsx`'s `submit()` and `exam-report.tsx`'s `sectionStatusFor()` can silently disagree about which tasks belong to a section, producing a "Not sat" report for a section the candidate actually completed — added 2026-09-22, surfaced by the same device-verification pass as BUG-04, confirmed by code audit (see `07-05-SUMMARY.md`). Root cause: `content.logic.ts`'s `examTasksOfSection()` silently drops (`.filter(t => !!t)`) any task id in `section.taskIds` that fails to resolve against the currently-loaded `corpus.examTasks`, and `submit()`'s grading loop only ever sees that filtered list — while `exam-report.tsx:74`'s `sectionStatusFor(sec.taskIds, ...)` checks against the original, unfiltered, authored task-id list. Any divergence between the two (a corpus replaced mid-session by `refreshFromRemote()`, a content gap, a load-timing race) causes `submit()` to silently skip logging results for the dropped tasks with no error surfaced, while the report reads the resulting absence as "never attempted" rather than "something went missing." Live-reproduced once (TEF Canada Exam 3, Speaking, real restored answer submitted, report showed "Not sat" instead of the expected "not-graded"/"X of Y" status) but the exact trigger for that instance is not confirmed — device-side `examResults` state was not directly inspectable (no `run-as` on a release build) to prove which of the two candidate mechanisms fired.
- [ ] **BUG-06**: A force-kill DURING a recording-based exam task (`ExamSpeakTask`, `ExamInterlocutorTask`, `ExamDebateTask`) no longer loses the whole answer: the in-progress transcript (plus the signals, coverage and debate report derived from it) is checkpointed while the candidate speaks, and on relaunch the saved part is treated as the task's answer (shown on its finished card, graded as-is) - added 2026-09-22 during Phase 23's discuss-phase, which found that all three components call `onAnswer` only on reaching `done`, so a mid-recording kill restores nothing and the task silently returns to idle.

### Test Coverage

- [ ] **TEST-01**: Exam submission → grading → report generation has an automated end-to-end test
- [x] **TEST-02**: The app has component-render test infrastructure (Jest + React Native Testing Library) capable of testing at least one real screen
- [ ] **TEST-03**: Notification scheduling → delivery → tap-response has automated test coverage
- [ ] **TEST-04**: General component-render test coverage extends beyond the one proof-of-concept screen (Phase 18) and the two high-risk flows (Phase 19) to the remaining screen surface — prioritized by `.planning/phases/22-general-screen-test-coverage/22-SCREEN-COVERAGE-AUDIT.md`'s evidence (22 of 49 screens have a documented fix-commit history; 21 of those remain uncovered after Phase 18/19)

### Content

- [x] **CONTENT-01**: An early phase audits the current A1/A2/exam content against the intended curriculum plan to identify any concrete remaining gaps (scope discovery — no gaps are pre-assumed; if none are found, this requirement closes as "audited, no gaps")

### Onboarding & Analytics

- [ ] **QA-01**: The onboarding flow (including the placement test) is audited end-to-end for bugs/regressions — both already ship as `app/onboarding.tsx` and `app/placement.tsx`; this verifies rather than builds
- [ ] **QA-02**: Analytics event tracking (`services/analytics.ts`) is audited for coverage/correctness against key user actions, including the acquisition/activation funnel (first-open, signup, referrer capture, onboarding step-level funnel, D1 return), not just engagement events

### Animation

- [ ] **ANIM-01**: Ship the approved Brix mascot Rive-animation rollout (idle/listening/speaking/celebrating/thinking/tap-easter-egg/dozeOff/transform-in-out states, squash-and-stretch house style) per the 2026-07-25 7-phase plan — unblocked now that `expo-speech-recognition` has shipped in production, which was the deferral condition. Delivered across two phases (core states, then delight states) — see Traceability.

### Feedback

- [ ] **FEEDBACK-01**: The existing performance-report screen ("Le Rapport," `app/feedback.tsx`) is verified/fixed if anything is broken
- [ ] **FEEDBACK-02**: The app prompts users to rate their experience; a positive rating routes to the store review prompt (App Store/Play Store), a negative rating routes to an in-app "tell us more" flow (categorized problem options + free-text box) that reports to the developer instead of the public store (does not exist today)

### UI/UX Polish

- [ ] **UX-01**: A phase audits general UI/UX for polish issues (visual consistency, interaction quality) beyond the accessibility/font-scale/dark-mode bugs already identified (scope discovery, same pattern as CONTENT-01)

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Retention

- **RETAIN-01**: Finish the streak-freeze writer so the existing freeze logic actually grants frozen days (logic exists; currently always returns 0 frozen days)
- **RETAIN-02**: Personalized notification copy beyond basic template filling (reference the specific session/lesson a user was mid-way through)

### Monetization

- **PAY-04**: Tune the paywall gating boundary based on real conversion data, once PAY-02 is live and PAY-01 is proven solid

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| New curriculum levels beyond A1/A2/exams (B1, B2, etc.) | User decision 2026-09-19 — content scope for this milestone is A1/A2/exams only |
| Acoustic/phoneme pronunciation scoring | ~2-3 month effort requiring a phoneme recognizer or cloud ASR with phoneme feedback, plus new privacy/GDPR surface (recording user audio); unrelated to the launch-readiness gaps in this milestone |
| Real server-dispatched push-campaign backend (token registration + segmentation + win-back sequences) | Disproportionate for a solo dev whose actual gap is that *local* notifications don't even toggle/deep-link/format correctly yet — fix the basics first |
| Custom receipt-validation / entitlement backend | Adapty already exists to remove exactly this class of work; rolling your own means owning App Store/Play Store receipt format changes indefinitely, solo, for zero user-facing benefit |
| Formal WCAG 2.1 AA certification / VPAT | The regulatory deadlines found in research target government/regulated entities specifically, not a proportionate bar for a solo indie app's first accessibility pass; revisit only if a business reason (enterprise/government customer) makes it necessary |
| Real-time multi-editor content locking / merge-conflict resolution in the authoring pipeline | Solves for a multi-tenant editorial team this project doesn't have; the pre-publish diff guard (PUBLISH-01/02) is the correctly-scoped fix for a solo author |
| ML-driven notification send-time optimization (bandit algorithms) | Optimizing send-time before basic delivery (NOTIFY-01/02/03) even works is solving problem 3 before problem 1 |
| Mid-milestone launch gate / sub-milestone split | Considered during 2026-09-19 roadmap revision (PM/growth review recommended shipping after an earlier phase); user explicitly declined — this milestone ships as one complete unit, no partial-launch checkpoint |

## Traceability

Which phases cover which requirements. Updated during roadmap creation and revision.

| Requirement | Phase | Status |
|-------------|-------|--------|
| PUBLISH-01 | Phase 1 | Complete |
| PUBLISH-02 | Phase 1 | Complete |
| CONTENT-01 | Phase 2 | Complete |
| CONTENT-01 (follow-up: GAP-06) | Phase 20 | Pending |
| CONTENT-01 (follow-up: GAP-07) | Phase 21 | Pending |
| SEC-01 | Phase 3 | Complete |
| PAY-01 | Phase 4 | Complete |
| PAY-03 | Phase 4 | Complete |
| PAY-02 | Phase 5 | Complete |
| PAY-05 | Phase 5 | Complete |
| NOTIFY-01 | Phase 6 | Complete |
| NOTIFY-02 | Phase 6 | Complete |
| BUG-01 | Phase 7 | Pending |
| BUG-02 | Phase 7 | Pending |
| BUG-03 | Phase 7 | Pending |
| BUG-04 | Phase 23 | Pending |
| BUG-05 | Phase 23 | Pending |
| BUG-06 | Phase 23 | Pending |
| A11Y-01 | Phase 8 | Pending |
| A11Y-02 | Phase 8 | Pending |
| A11Y-03 | Phase 8 | Pending |
| A11Y-04 | Phase 8 | Pending |
| QA-01 | Phase 9 | Pending |
| QA-02 | Phase 9 | Pending |
| FEEDBACK-01 | Phase 10 | Pending |
| FEEDBACK-02 | Phase 10 | Pending |
| ANIM-01 | Phase 11 (core states) + Phase 12 (delight states) | Pending |
| UX-01 | Phase 13 | Pending |
| PERF-02 | Phase 15 (design spike: Phase 14) | Pending |
| PERF-01 | Phase 16 | Pending |
| NOTIFY-03 | Phase 17 | Pending |
| TEST-02 | Phase 18 | Done |
| TEST-01 | Phase 19 | Pending |
| TEST-03 | Phase 19 | Pending |
| TEST-04 | Phase 22 | Pending |

**Coverage:**
- v1 requirements: 33 total (29 original + TEST-04, added 2026-09-22 when Phase 18's discuss-phase surfaced that only 2 of 49 screens would ever get component-render coverage under the original 29-requirement scope — see `22-SCREEN-COVERAGE-AUDIT.md`; + BUG-04 and BUG-05, added 2026-09-22, surfaced by Phase 7's own device verification of BUG-02 — see `07-VALIDATION.md`/`07-05-SUMMARY.md`)
- Mapped to phases: 33, now spanning 23 phases (up from 22 — Phase 23 appended for BUG-04/BUG-05)
- Unmapped: 0 ✓
- Note: ANIM-01 and CONTENT-01 are the two ORIGINAL requirements mapped to more than one phase. During the 2026-09-19 roadmap revision, Phase 11 was split into Phase 11 (core states) and Phase 12 (delight states); the two phases jointly, not redundantly, deliver ANIM-01's full scope. CONTENT-01 closed as "audited, gaps found and scoped" against Phase 2 itself, and its two phase-worthy follow-up findings (GAP-06, GAP-07) were promoted to Phase 20 and Phase 21 rather than left untracked in GAPS.md. TEST-04 (added 2026-09-22) is a genuinely new requirement, not a follow-up of an existing one — it was never implicitly covered by TEST-01/02/03, which only ever committed to 2 of 49 screens. BUG-04 and BUG-05 (added 2026-09-22) are genuinely new requirements surfaced by Phase 7's own device-verification pass, not pre-existing gaps in BUG-01/02/03 — they were given their own phase (23) rather than folded into Phase 7, since Phase 7's plans and CONTEXT.md were already scoped and written against the original three bugs.

---
*Requirements defined: 2026-09-19*
*Last updated: 2026-09-19 after roadmap revision — traceability re-mapped, 100% coverage across 19 phases (Phase 14 is a design-spike prerequisite for PERF-02/Phase 15, not a requirement-bearing phase itself; Phase 11 split into 11/12 for ANIM-01; all phases after the original Phase 11 renumbered by +1)*
*Last updated: 2026-09-19 — CONTENT-01 closed by Phase 2's content audit*
*Last updated: 2026-09-22 — TEST-04 added (general screen-coverage gap surfaced during Phase 18 discussion), Phase 22 appended*
*Last updated: 2026-09-22 — BUG-04 added (recording-task restore-view gap surfaced during Phase 7's BUG-02 device verification), unmapped pending phase-sequencing decision*
*Last updated: 2026-09-22 — BUG-05 added (submit()/sectionStatusFor task-list divergence, found by code audit of the same device-verification session), Phase 23 appended, BUG-04 mapped to Phase 23 (was unmapped)*
*Last updated: 2026-09-22 - BUG-06 added (mid-recording kill loses the in-progress spoken answer, surfaced in Phase 23 discuss-phase), mapped to Phase 23*
