# Roadmap: Ealch — Full Completion Milestone

## Overview

Ealch already ships a complete A1/A2 curriculum, a full exam pack (TEF/TCF/DELF), Adapty-backed purchases, and a working Postgres-to-seed.json-to-OTA content pipeline. This milestone is not a 0-to-1 build — it closes the specific, named gaps standing between "works for the existing install base" and "safe to submit to the App Store/Play Store publicly": content-publish safety, monetization coverage, accessibility, notifications, TTS cost exposure, known interruption-handling bugs, performance (cold start + snapshot size), test coverage on the highest-risk flows, plus a set of audit/verification passes (content-gap, onboarding/analytics, UI/UX polish) and two feature deliveries (the Brix mascot animation rollout, the feedback/rating flow) that round out launch-readiness. Research corrected several of the original problem statements — four "build from scratch" items turned out to be narrower "extend/verify/generalize" work on code that already exists and mostly works — which is reflected in phase scoping below. The journey runs isolated, low-risk fixes first (publish-safety, TTS auth, entitlement, bugs, accessibility, audits — all independent, most parallelizable), then the one genuinely interdependent arc (snapshot-split design spike → snapshot-split implementation → cold-start lazy-load → notification tap-handler, each restructuring the same files in sequence), then closes with the test-coverage phase that depends on several of the above landing first.

**This is deliberately ONE milestone with no interim "ship after phase N" launch gate.** Full completion means all 21 phases land before public submission; there is no sub-milestone boundary or partial-launch checkpoint in this plan. That was an explicit user choice during roadmap revision (2026-09-19), made after a PM/growth review recommended a mid-roadmap launch gate — the recommendation was considered and declined, not overlooked.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

**2026-09-19 revision note:** The original Phase 11 ("Brix Mascot Rive Animation Rollout") was split into two phases — Phase 11 (core states needed for normal lesson flow) and Phase 12 (delight states outside normal flow). This split is a deliberate roadmap revision, not an urgent post-approval insertion, so it does **not** use decimal notation (which this roadmap reserves for its documented meaning: insertions via `/gsd-insert-phase` after planning is underway). Instead, all phases after the original Phase 11 were renumbered as integers (former Phase 12 → 13, former Phase 13 → 14, … former Phase 18 → 19). Total phase count grew from 18 to 19.

- [x] **Phase 1: Content-Publish Drift Guard Extension** - Generalize the existing version-aware "no-silent-regression" publish guard from lesson bodies to units/scenarios/playlists/speak-stages, plus a human-readable pre-publish diff report (completed 2026-09-19)
- [x] **Phase 2: Content & Curriculum Gap Audit** - Audit the shipped A1/A2/exam content against the intended curriculum plan and close or log any concrete gaps (completed 2026-09-20)
- [x] **Phase 3: TTS Security Hardening** - Close the unmetered-cost exposure on the TTS edge function with real per-user auth and rate limiting
- [ ] **Phase 4: Entitlement Verification & Signed-Out Purchase Fix** - Verify/harden the Adapty entitlement sync so a purchase made signed-out still reaches the right account, and back paying users against a silent downgrade
- [ ] **Phase 5: Paywall Coverage Expansion & Upgrade Nudge** - Replace the single arbitrarily-gated lesson with one coherent, explainable gating rule (determined during phase planning) across the catalogue, plus a proactive upgrade nudge sharing a common interruption pattern
- [ ] **Phase 6: Notification Correctness — Body Format & Toggles** - Fix unfilled notification placeholders and make Settings' notification toggles actually control what fires
- [ ] **Phase 7: Known Bug Fixes** - Fix exam-response-lost-on-process-death (highest priority, revenue-adjacent), lock in the STT continuous-mode regression with a test, and fix audio-doesn't-pause-on-background (lowest priority, cosmetic)
- [ ] **Phase 8: Accessibility Retrofit** - Thread correct screen-reader roles/labels per control type across high-traffic screens, fix dark-mode OS-sync and flashcard font-scale clipping
- [ ] **Phase 9: Onboarding & Analytics Audit** - Verify the onboarding/placement flow end-to-end and audit analytics event coverage/correctness across engagement AND the acquisition/activation funnel
- [ ] **Phase 10: Feedback & Rating Flow** - Verify/fix "Le Rapport" and build a frequency-capped rating flow that routes positive ratings to the store and negative ratings to a private in-app report
- [ ] **Phase 11: Brix Mascot Rive Animation Rollout — Core States** - Ship idle/listening/speaking/celebrating/thinking states for normal lesson flow, preserving existing accessibility-hiding and reduced-motion behavior
- [ ] **Phase 12: Brix Mascot Rive Animation Rollout — Delight States** - Ship tap-easter-egg/dozeOff/transform-in-out states and re-run an accessibility check on the new tap-triggered surface
- [ ] **Phase 13: UI/UX Polish Audit** - Find and triage general visual-consistency/interaction-quality issues beyond the accessibility/font-scale/dark-mode bugs already identified, after the screens it audits stop changing
- [ ] **Phase 14: Content Snapshot Split — Design Spike** - Resolve the manifest backward-compatibility design and `mergeCorpus` multi-overlay question before any snapshot-splitting code is written
- [ ] **Phase 15: Content Snapshot Split — Implementation** - Split the OTA content snapshot by curriculum level so a first-run learner doesn't download the full 27-50MB blob
- [ ] **Phase 16: Cold-Start Lazy Load** - Move the eager `seed.json` import into `initContent()`, using the mascot's existing "thinking" state as the loading cue, so the app reaches an interactive first screen without the multi-second blank splash
- [ ] **Phase 17: Notification Tap-Handler & Push Token Registration** - Wire notification-tap deep-linking (gated on content readiness) and push-token registration
- [x] **Phase 18: Component Test Infrastructure** - Stand up Jest + jest-expo + React Native Testing Library, scoped to component-render tests only (completed 2026-09-22)
- [ ] **Phase 19: High-Risk Test Coverage — Exam Grading & Notification Delivery** - Automated E2E coverage for exam submission→grading→report and notification scheduling→delivery→tap-response
- [ ] **Phase 20: TEF Speech-Rate Verification & Re-render** - Confirm whether blanc-01's hot CO speech-rate pattern (Sections D/E/F) holds across all 5 TEF papers, and re-render any document confirmed to exceed its band's wpm ceiling
- [ ] **Phase 21: DELF blanc-02..05 Audio Listening QA** - Run a human listening pass over the ~36.8 minutes of CO audio across DELF blanc-02 through blanc-05 that shipped without an E8 review, fixing any defect found
- [ ] **Phase 23: Exam Recording-Task Restore & Grading-Path Integrity** - Fix recording-based exam tasks (speak/interaction/débat) to show a restored "already answered" summary after a crash, checkpoint in-progress recordings so a mid-recording kill keeps the answer, and reconcile the submit/report task-list divergence that can silently report a completed section as "not sat"

## Phase Details

### Phase 1: Content-Publish Drift Guard Extension
**Goal**: Publishing content can never silently destroy unreviewed seed-direct work in any content kind, not just lesson bodies — and an author sees what's about to change before it ships.
**Depends on**: Nothing (first phase)
**Requirements**: PUBLISH-01, PUBLISH-02
**Success Criteria** (what must be TRUE):
  1. Running `pnpm content:publish --dry-run` against a fixture where a committed unit/scenario/playlist/speak-stage is git-ahead of Postgres refuses to publish with an actionable, specific message (which unit, which field).
  2. A normal, healthy publish where Postgres is ahead of git (the routine, safe case) completes without being blocked.
  3. Before publishing, the author sees a human-readable diff report (what changed, size deltas) rather than only a pass/fail result.
  4. The guard's directionality is regression-tested against the shape of the 2026-07-31 incident (overview collapse, not just body loss), generalized to units/scenarios/playlists/speak-stages.
**Plans**: 4 plans

Plans:
**Wave 1**
- [x] 01-01-PLAN.md — Extract the drift comparators into a pure, DB-free drift-guard.logic.ts and cover them with the 2026-07-31 incident regression suite

**Wave 2** *(blocked on Wave 1 completion)*
- [x] 01-02-PLAN.md — Generalize publish-content.ts step 4·0 to all five seed-carried kinds, with per-kind block output and real recovery pointers (closes D-05: exam content exempt, with evidence)

**Wave 3** *(blocked on Wave 2 completion)*
- [x] 01-03-PLAN.md — Build the pre-publish diff report, print it and write it to a single tracked ealch-admin/PUBLISH-REPORT.md on every run

**Wave 4** *(blocked on Wave 3 completion)*
- [x] 01-04-PLAN.md — Live two-direction proof against real Postgres (git-ahead blocked, Postgres-ahead allowed) and report confirmation
**Pitfall Watch**: PITFALLS.md Pitfall 6 — the extension must preserve the existing asymmetric/version-aware comparison (git-ahead blocks, Postgres-ahead allows), cover every field seed-direct scripts are known to touch (not just `body` — the actual 2026-07-31 incident hit `overview`), and keep the graceful "no git history" skip so a fresh clone/CI doesn't hard-fail. Plan-check and verification should explicitly dry-run a Postgres-ahead publish and confirm it is NOT blocked, not just confirm the block case works.

### Phase 2: Content & Curriculum Gap Audit
**Goal**: Know, concretely, whether the shipped A1/A2/exam content has any remaining gaps against the intended curriculum plan — scope discovery, not pre-assumed gaps.
**Depends on**: Nothing
**Requirements**: CONTENT-01
**Success Criteria** (what must be TRUE):
  1. Every A1/A2 unit and exam paper has been checked against the curriculum plan/spine, and any gap is logged as a specific, named finding (theme, unit, lesson id).
  2. If gaps are found, each is scoped as a follow-up content-build item (not built inside this phase) or explicitly deferred with a reason.
  3. If no gaps are found, a written closing statement exists citing exactly what was checked, and CONTENT-01 closes as "audited, no gaps."
**Plans**: 6 plans

Plans:
**Wave 1**
- [x] 02-01-PLAN.md — Confirm the Supabase project is ACTIVE_HEALTHY (gated on user approval), take the live baseline census, and stand up the GAPS.md skeleton

**Wave 2** *(blocked on Wave 1 completion; the three plans run in parallel)*
- [x] 02-02-PLAN.md — Curriculum spine audit: per-id structural check of all 75 units, canDo/themes/prereqUnitIds coherence, and the PE@b2 remediation slot (D-01, D-02)
- [x] 02-03-PLAN.md — Exam paper audit: per-paper section shape, blueprint count conformance for all 15 papers, and the DELF blanc-02..05 audio-verification gap (D-04, D-05)
- [x] 02-04-PLAN.md — Re-measure the known quality defects against current state and diff the shipped seed.json cut against the declared units (D-08)

**Wave 3** *(blocked on Wave 2 completion)*
- [x] 02-05-PLAN.md — Cross-reference every finding against BUG-01/02/03, QA-01/02 and the traceability table, then write GAPS.md's Findings and Finding Index (D-06, D-09)

**Wave 4** *(blocked on Wave 3 completion)*
- [x] 02-06-PLAN.md — Insert ROADMAP stub phases for phase-worthy findings, write the CONTENT-01 closing statement, close its traceability row, and take developer sign-off (D-07)
**Pitfall Watch**: RESEARCH.md Pitfall 2 — the Supabase project auto-pauses, and a paused project makes every audit query fail in a way that reads like "no data", which would turn the whole audit into a false "no gaps". Nothing may query before Plan 01 confirms ACTIVE_HEALTHY. RESEARCH.md Pitfall 1 — there is no `content_exam_sections` table; `sections` is a jsonb array column on `content_exam_papers`. D-03 — no finding may cite `corpus:probe`, `content:parity`, a CEFR/nasal heuristic or a guard's exit code as its evidence.

### Phase 3: TTS Security Hardening
**Goal**: The TTS edge function cannot be abused for unmetered cost by an unauthenticated or anonymous caller.
**Depends on**: Nothing
**Requirements**: SEC-01
**Success Criteria** (what must be TRUE):
  1. Calling the TTS endpoint with zero Authorization header is rejected.
  2. Calling the TTS endpoint with only the public anon key is rejected or treated as non-authenticated, not as a legitimate per-user caller.
  3. A real signed-in user's TTS calls succeed and are capped by a per-user (not per-IP) rate limit.
  4. A user who fails the auth check or hits the rate limit still gets usable audio via the existing device-TTS fallback, not silence.
**Plans**: 4 plans

Plans:
**Wave 1**
- [x] 03-01-PLAN.md — TTS quota pure-logic module (tier classification + multi-window quota decision), TDD
- [x] 03-02-PLAN.md — Schema: tts_usage_daily/monthly/minute + tts_free_preview tables, tts_bump/tts_bump_free_preview RPCs, applied to the live DB [BLOCKING]
- [x] 03-03-PLAN.md — Client-side guest gate (shouldAttemptRemoteTts) wired into tts.ts, TDD

**Wave 2** *(blocked on Wave 1 completion)*
- [x] 03-04-PLAN.md — Wire callerUid/tier/quota into tts/index.ts, deploy to live Supabase [BLOCKING], automated + human-verified proof of all 4 success criteria

**Pitfall Watch**: PITFALLS.md Pitfall 1 — flipping `verify_jwt=true` alone is very likely cosmetic, since the anon key is itself a valid JWT. The fix must read `ctx.userClaims.sub` (or equivalent) explicitly inside the function body. Plan-check and verification must explicitly test a fresh-logged-out app state and a call using only the anon key, not just the signed-in happy path.

### Phase 4: Entitlement Verification & Signed-Out Purchase Fix
**Goal**: A user's purchase reliably reaches their account's entitlement regardless of whether they were signed in at purchase time, and existing paying users are never silently downgraded.
**Depends on**: Nothing
**Requirements**: PAY-01, PAY-03
**Success Criteria** (what must be TRUE):
  1. Restore Purchases in Settings/paywall gives accurate, distinct feedback for "restored" vs. "no purchases found."
  2. A user who purchases while signed out, then signs in (same device or a different one), has their entitlement follow them without manual intervention.
  3. An existing already-entitled user, first launch after this change, offline, is not downgraded or shown a paywall while reconciliation is pending.
  4. Edge functions that need entitlement (`coach`, `grade-exam`) have a documented, explicit trust decision for the Postgres mirror (accept webhook lag as a known limitation, or add a real-time Adapty server check) rather than an implicit assumption.
**Plans**: 9 plans
**Pitfall Watch**: PITFALLS.md Pitfall 2 — explicitly test "existing paying user, first launch after update, currently offline" before shipping; treat any entitlement state flip (premium→free) as a loud, logged, monitored event, not a silent cache-miss. Verify `syncIdentity()`'s post-`identify()` reconciliation actually pulls the merged Adapty profile immediately rather than waiting for the next foreground.

Plans:
**Wave 1** *(four independent plans, no shared files)*
- [x] 04-01-PLAN.md — Pin the four-input exam gate decision table and build the pure attempt grace-window logic (timingS + 60min, D-06)
- [x] 04-02-PLAN.md — Create the exam_attempts authorization table in schema.sql and apply it to live Postgres [BLOCKING]
- [x] 04-03-PLAN.md — Make a premium to free flip a loud, logged event (D-08): pure wasDowngraded + entitlement_downgraded fired from setEntitlement only
- [x] 04-04-PLAN.md — Harden PAY-01's restore feedback: one tested restoreOutcome shared by Settings and the paywall

**Wave 2** *(blocked on 04-01, 04-02)*
- [x] 04-05-PLAN.md — Build and deploy start-exam-attempt: the full four-input server gate, plus the parity test binding its Deno copy to the client's decision function

**Wave 3** *(blocked on Wave 2; the two plans touch disjoint files)*
- [x] 04-06-PLAN.md — Add grade-exam's attempt-validation gate before quota and LLM (closes D-03), flag-conditioned so the deploy breaks no shipped client; fix the stale revenuecat-webhook comment
- [x] 04-07-PLAN.md — Wire the client: D-07 gate plus awaited authorization on exam-paper's start, and paperId/skill on every grading request

**Wave 4** *(blocked on 04-03, 04-04 — device checkpoints)*
- [x] 04-08-PLAN.md — Device verification of PAY-01: restore feedback on both surfaces, signed-out purchase merge same/cross-device (resolves research assumption A1), offline cold start with no downgrade

**Wave 5** *(blocked on Wave 3 and 04-08)*
- [x] 04-09-PLAN.md — Exercise the gate with examGateOn true on a real device, measure D-06's window against real content, then restore the flag to false

### Phase 5: Paywall Coverage Expansion & Upgrade Nudge
**Goal**: The paywall gates a coherent, explainable slice of the catalogue, and free users see a reason to upgrade before they hit a wall.
**Depends on**: Phase 4 (widening what's gated before the restore/entitlement escape hatch is proven turns a low-stakes bug into a high-stakes one)
**Requirements**: PAY-02, PAY-05
**Success Criteria** (what must be TRUE):
  1. Phase 5 planning determines and documents one coherent, explainable gating rule (which may treat exam papers as a segment distinct from level progression) and applies it consistently across the catalogue, replacing the current single arbitrarily-gated lesson. The specific boundary (e.g. "A1 free / A2+exams gated" was one candidate raised in research) is a phase-planning decision, not fixed by this roadmap.
  2. A free user encountering gated content sees a clear paywall modal explaining what they get by upgrading, with no accidental dismiss/bypass.
  3. A free user, at a sensible moment during normal use (not only when they hit a gated lesson), sees a proactive upgrade nudge.
  4. A previously-entitled user never sees the paywall reappear without an explanation/reconciliation state shown first.
  5. The proactive upgrade nudge (criterion 3) shares one common interruption/nudge visual pattern with Phase 10's rating prompt — extending or reusing the existing `PushBanner.tsx` pattern where practical — rather than inventing an independent modal/banner/toast treatment.
**Plans**: 7 plans

Plans:

**Wave 1** *(parallel, no shared files)*
- [x] 05-01-PLAN.md -- Gate predicates and phase vocabulary: drillDeckGate/roleplayNudgeDue in entitlement.logic.ts, 12 new FR+EN strings, 3 new analytics events
- [x] 05-02-PLAN.md -- Lock visibility: the setResume leak in lesson/narrated, plus the PREMIERE pill on theme.tsx and the four *themes.tsx browse screens

**Wave 2** *(parallel, all blocked on 05-01)*
- [x] 05-03-PLAN.md -- Close the D-06 gap: band gates for flashcards, dictation, voiceflash and sentence, which have none today
- [x] 05-04-PLAN.md -- Contextual paywall copy keyed on the `from` param, a dismiss-only gate:examiner explainer branch, and gate context on all three exam gates
- [x] 05-05-PLAN.md -- Generalise the banner slot to a tagged union and make PushBanner kind-driven (the pattern Phase 10 extends)

**Wave 3** *(blocked on 05-01, 05-05)*
- [x] 05-06-PLAN.md -- The roleplay upgrade nudge on a 24h cadence, and the reconciliation notice raised inside the existing downgrade branch of setEntitlement

**Wave 4** *(blocked on 05-02 through 05-06 -- device checkpoint)*
- [x] 05-07-PLAN.md -- Write the ratified gating rule document, resolve the validation map, and run the 21-item device verification

**UI hint**: yes

### Phase 6: Notification Correctness — Body Format & Toggles
**Goal**: Notification toggles and message content in Settings are trustworthy.
**Depends on**: Nothing
**Requirements**: NOTIFY-01, NOTIFY-02
**Success Criteria** (what must be TRUE):
  1. Toggling report/nudge/daily in Settings actually changes whether that notification type fires — or, if the product decision is "not building the backend for report/nudge," those toggles are explicitly removed from the UI rather than left dead (a conscious call-out, not a silent change).
  2. No notification body ever renders a literal `{t}`/`{name}` placeholder; all templates route through one shared, tested formatting function.
  3. The daily reminder and `PushBanner.tsx` both use the same shared formatter, eliminating the currently-duplicated, drifted logic.
**Decision (Success Criterion 1 fork, 06-CONTEXT.md D-01)**: build both dead toggles out with real local-notification delivery rather than remove them from the UI. Report fires shortly after a session ends (D-04); nudges fire Monday and Thursday evenings with generic copy (D-05/D-06). Push token registration and tap-to-deep-link stay in Phase 17 (NOTIFY-03).
**Plans**: 5 plans

Plans:
**Wave 1**
- [x] 06-01-PLAN.md — Pure foundations: the shared formatNotifText, the per-kind identifier/cadence vocabulary, and the FR/EN report + nudge copy

**Wave 2** *(blocked on Wave 1 completion)*
- [x] 06-02-PLAN.md — Per-kind scheduling in notifications.ts (weekly nudge, one-shot report, targeted cancel, orphan prune) pinned by a source guard test
- [x] 06-03-PLAN.md — Route the scheduler and PushBanner through the shared formatter, supplying the {name} the scheduler never passed, plus the D-07 placeholder guard

**Wave 3** *(blocked on Wave 2 completion)*
- [x] 06-04-PLAN.md — Wire all three toggles to real scheduling, arm the report from session-end via an injected listener, and re-arm from toggle state at launch

**Wave 4** *(blocked on Wave 3 completion)*
- [x] 06-05-PLAN.md — Phase gate: full suite plus the device verification node --test cannot reach

### Phase 7: Known Bug Fixes
**Goal**: Core in-app interactions behave correctly under interruption (backgrounding, process death), and a known regression can't silently reappear.
**Depends on**: Nothing
**Requirements**: BUG-02, BUG-03, BUG-01
**Priority within phase**: BUG-02 (exam response lost on process death) is revenue-adjacent — exams are a paid/high-stakes feature — and is this phase's highest-priority item, planned and executed first. Considered spinning BUG-02 into its own small phase sequenced adjacent to Phase 4/5 (entitlement/paywall) since exam integrity and monetization are related trust concerns; kept inside Phase 7 instead to avoid a second full renumber, with its priority made explicit here rather than implicitly. BUG-03 (STT regression test) is second. BUG-01 (audio doesn't pause on background) is cosmetic polish and is deprioritized to last within this phase.
**Success Criteria** (what must be TRUE):
  1. **[Highest priority]** A user's exam response is persisted to storage before grading is requested, so force-stopping/crashing mid-exam does not lose the response.
  2. `continuous: false` STT behavior has an automated regression test, so the prior fix (commit 8cd0be3) can't silently regress.
  3. **[Lowest priority]** Audio/TTS playback pauses automatically when the app is backgrounded and resumes appropriately on foreground.
**Plans**: 5 plans in 3 waves

Plans:
- [x] 07-01-PLAN.md - BUG-02: pure exam-draft logic layer (key, serialize, parse, restore, graded-marking) with behavioural unit tests
- [x] 07-02-PLAN.md - BUG-02: wire draft restore, checkpoints, background flush, submit dedupe and clear into app/exam-section.tsx
- [x] 07-03-PLAN.md - BUG-03: re-add the continuous:false regression pin deleted by 17f1fc2, and prove it bites with three mutations
- [x] 07-04-PLAN.md - BUG-01: module-scope AppState listener in tts.ts with pause/resume on the remote path and line-restart on the device path
- [ ] 07-05-PLAN.md - Device verification checkpoints for BUG-02 and BUG-01 on a release build (exams cannot render in dev)

### Phase 8: Accessibility Retrofit
**Goal**: Every interactive control is operable and correctly announced by a screen reader, and dark mode/font-scale behave as advertised.
**Depends on**: Nothing
**Requirements**: A11Y-01, A11Y-02, A11Y-03, A11Y-04
**Success Criteria** (what must be TRUE):
  1. Every control built on the shared `Press` component announces a correct role per its actual type (button/link/switch/tab), audited per screen — home, lesson flow, settings, paywall screens first.
  2. Remaining icon-only/custom buttons not covered by `Press`'s default have explicit, curated accessible labels (not derived from concatenated children).
  3. Selecting "automatic" theme makes the app follow the OS dark/light setting.
  4. Increasing the OS font-scale setting no longer clips flashcard text.
**Plans**: TBD
**Pitfall Watch**: PITFALLS.md Pitfall 3 — do not ship a single blanket `accessibilityRole="button"` default on `Press`; thread role as an explicit per-call-site prop and audit real usage in batches by screen, since a blanket default would misannounce switches/tabs/links. Verification must be a real-device TalkBack sweep per touched screen (not a grep for role presence), and every switch/tab role must be paired with the matching `accessibilityState`/`accessibilityValue`. Also check `position: absolute` elements (modals, overlays, FABs) separately — TalkBack on Android can fail to reach them regardless of role correctness.
**UI hint**: yes

### Phase 9: Onboarding & Analytics Audit
**Goal**: The onboarding/placement screens and analytics instrumentation are confirmed correct — covering engagement events AND the acquisition/activation funnel — or their bugs are found and fixed.
**Depends on**: Nothing
**Requirements**: QA-01, QA-02
**Success Criteria** (what must be TRUE):
  1. A new user can complete the onboarding and placement screens (`app/onboarding.tsx`, `app/placement.tsx`) end-to-end with no dead-end, crash, or incorrect placement result — or any found issue is fixed within this phase.
  2. Key engagement user actions (lesson complete, purchase, exam submit, streak event, etc.) are confirmed to fire the correct `services/analytics.ts` events with correct payloads, or gaps are logged and closed.
  3. Acquisition events are confirmed to exist and fire correctly: first-open, signup started, signup completed, and store-listing referrer capture.
  4. An activation funnel is confirmed instrumented end-to-end at step granularity — `onboarding_started` → per-step events → `placement_result` → `first_lesson_started` — and D1 return is measurable, so real acquisition/activation data is available post-launch, not just crash/correctness verification.
**Plans**: TBD
**UI hint**: yes

### Phase 10: Feedback & Rating Flow
**Goal**: Users can report a broken experience and rate the app, without negative ratings leaking to the public store.
**Depends on**: Nothing
**Requirements**: FEEDBACK-01, FEEDBACK-02
**Success Criteria** (what must be TRUE):
  1. "Le Rapport" (the performance-report screen, `app/feedback.tsx`) renders and functions correctly end-to-end, with any found defects fixed.
  2. The app prompts users to rate their experience at a reasonable moment in normal use, using the same shared interruption/nudge visual pattern as Phase 5's upgrade nudge (see Phase 5 criterion 5) rather than a third independently-designed modal/banner/toast treatment.
  3. The rating prompt is frequency-capped at no more than 3 prompts per user per year — matching Apple's platform-enforced `SKStoreReviewController` cap — with the same discipline self-enforced on the Android path, which has no platform-enforced cap of its own.
  4. A positive rating routes to the native App Store/Play Store review prompt.
  5. A negative rating routes to an in-app "tell us more" flow (categorized problem options + free-text box) that reports to the developer, never the public store.
**Plans**: TBD
**UI hint**: yes

### Phase 11: Brix Mascot Rive Animation Rollout — Core States
**Goal**: The approved Brix mascot animation component is live for the states needed during normal lesson flow, without regressing today's accessibility-hiding or reduced-motion behavior.
**Depends on**: Nothing (unblocked — `expo-speech-recognition` shipped in production, which was the deferral condition)
**Requirements**: ANIM-01 (core states: idle/listening/speaking/celebrating/thinking)
**Success Criteria** (what must be TRUE):
  1. The Brix mascot component renders and animates correctly for idle/listening/speaking/celebrating/thinking states during normal lesson flow.
  2. Animation follows the squash-and-stretch house style specified in the 2026-07-25 7-phase plan, with the selectable Brix-led roster (not the retired Camille avatar).
  3. The existing `accessibilityElementsHidden` behavior from `MascotAvatar.tsx`'s current `Animated`-based component is preserved in the Rive version — the mascot stays hidden from the accessibility tree and is not announced by a screen reader.
  4. `useReduceMotion()` is respected — a reduced-motion user sees a static or minimal-motion presentation, not the full animation.
**Plans**: TBD
**UI hint**: yes

### Phase 12: Brix Mascot Rive Animation Rollout — Delight States
**Goal**: The remaining designed Brix mascot states (outside normal lesson flow) are live, and the new tap-triggered interactive surface they introduce is confirmed accessible.
**Depends on**: Phase 11 (core states ship and harden first; delight states extend the same Rive component)
**Requirements**: ANIM-01 (delight states: tap-easter-egg, dozeOff, transform-in-out)
**Success Criteria** (what must be TRUE):
  1. The tap-easter-egg, dozeOff, and transform-in-out states trigger correctly on their designed conditions.
  2. The `accessibilityElementsHidden` behavior and `useReduceMotion()` handling established in Phase 11 hold for these states too — dozeOff and transform-in-out don't newly announce themselves, and reduced-motion users get a static/minimal presentation of these states as well.
  3. A Phase-8-style accessibility re-check (real-device screen-reader sweep, not a grep) specifically covers this phase's new interactive surface — the tap-easter-egg is a new interactive element that did not exist when Phase 8 ran, so it needs its own role/label/state audit rather than inheriting Phase 8's coverage by assumption.
**Plans**: TBD
**UI hint**: yes

### Phase 13: UI/UX Polish Audit
**Goal**: General visual/interaction polish issues beyond the already-identified accessibility/font-scale/dark-mode bugs are found and triaged.
**Depends on**: Phase 5, Phase 8, Phase 10, Phase 11, Phase 12 (hard dependency — this phase audits the same core screens those five phases change: paywall/nudge UI, accessibility-touched controls, feedback/rating UI, and the mascot component. Auditing before they land would re-flag issues already being fixed elsewhere and re-litigate polish decisions mid-flight.)
**Requirements**: UX-01
**Success Criteria** (what must be TRUE):
  1. A pass across core screens (home, lesson flow, settings, paywall, exams) produces a concrete, specific list of visual-consistency/interaction-quality findings.
  2. Each finding is triaged as fix-now (small, safe) vs. deferred, with fix-now items resolved within this phase.
**Plans**: TBD
**UI hint**: yes

### Phase 14: Content Snapshot Split — Design Spike
**Goal**: Resolve the two open design questions blocking a safe per-level OTA snapshot split before any implementation starts.
**Depends on**: Phase 1 (same publish-pipeline file — avoid restructuring `publish-content.ts` twice in flight)
**Requirements**: None directly — this phase is a research/design prerequisite for PERF-02, delivered in Phase 15
**Success Criteria** (what must be TRUE):
  1. A versioned manifest schema is designed such that an old app binary fails closed ("no update available") on encountering a new-shape manifest, rather than crashing — verified against the existing `isManifest()` fail-closed pattern.
  2. `mergeCorpus`'s actual multi-overlay behavior (sequential seed → split A → split B) is confirmed correct by direct code read/test, not assumed.
  3. A written design doc covers the no-op-first rollout sequence: ship the new manifest shape with old single-snapshot content before any real content split happens, so old app binaries are proven to degrade safely first.
**Plans**: TBD
**Research Flag**: YES — flag for `/gsd-research-phase` / a dedicated spike during planning. Phase 15 (implementation) depends on this phase's design being resolved first; do not begin Phase 15 planning until this phase's three success criteria are answered.

### Phase 15: Content Snapshot Split — Implementation
**Goal**: A first-run learner only downloads the content for the curriculum level(s) they actually need, not the full 27-50MB blob.
**Depends on**: Phase 14
**Requirements**: PERF-02
**Success Criteria** (what must be TRUE):
  1. The publish pipeline produces independently checksummed, per-level (and per-exam) snapshot files instead of one combined blob, generalizing the existing `seed-cut.config.ts` track-filter pattern.
  2. The mobile app fetches and merges only the snapshot(s) for the user's current level (+ one ahead), not the full catalogue.
  3. A device with A1's split cached but not A2's degrades gracefully (an explicit "need network" state) when the user reaches A2 content, rather than crashing.
  4. An app binary built before this phase encountering the new manifest shape fails closed to "no update," proven against a real pre-phase build.
**Plans**: TBD
**Pitfall Watch**: PITFALLS.md Pitfall 5 — version-stamp the snapshot schema separately from content version numbers; never hard-delete a lesson version that has active in-progress user state pointing at it (keep N-1 generations); force a bad/incompatible snapshot in testing and confirm graceful fallback to the bundled seed rather than a rollback loop; roll out the format change gradually (staged rollout percentage) rather than a flag-day cutover for the entire install base.

### Phase 16: Cold-Start Lazy Load
**Goal**: The app reaches an interactive first screen without the multi-second blank/frozen splash currently caused by eager `seed.json` loading.
**Depends on**: Phase 15 (same `initContent()` function being restructured — do the lazy-load rework after the split's shape is settled, not before)
**Requirements**: PERF-01
**Success Criteria** (what must be TRUE):
  1. `seed.json` is no longer imported at module scope; it loads inside `initContent()`, gated by the existing `contentHydrated` readiness flag.
  2. Cold start reaches an interactive screen measurably faster than the current ~2.4s blank-screen baseline, profiled on a real device.
  3. A deep-link launch on a cold-started app renders correctly instead of crashing or showing blank/undefined content.
  4. The fixed 2400ms `splash.tsx` timer is replaced with, or paired with, a real loading-state signal so a slow device doesn't navigate before content is actually ready — and that loading cue reuses the mascot's existing "thinking" state (per `MascotAvatar.tsx`'s documented convention that "thinking" is the app's universal loading cue) rather than introducing a new spinner.
**Plans**: TBD
**Pitfall Watch**: PITFALLS.md Pitfall 4 — grep every direct/synchronous reader of `SEED` / `useContent.getState().corpus` outside the gated render tree (background timers such as `useAlarmWatcher`, deep-link resolvers, the future notification handler built in Phase 17) and route each through the same readiness gate `app/_layout.tsx` already uses. Confirm the seed import is moved into an actual function call (`require()`/dynamic `import()` inside `initContent()`), not just re-exported through another module-scope reference that re-triggers eager evaluation. Test the deep-link path explicitly, not just normal boot. Soft coordination note (not a hard dependency): the pre-Rive mascot already has a working "thinking" state today, so this phase is not blocked on Phase 11 — but once Phase 11 lands, converge this loading cue onto the Rive "thinking" state visually rather than maintaining two divergent implementations.
**UI hint**: yes

### Phase 17: Notification Tap-Handler & Push Token Registration
**Goal**: Tapping a notification opens the specific session it advertised, safely, even on a cold-started app.
**Depends on**: Phase 16 (the content-readiness gate must be trustworthy before a tap-handler resolves a session)
**Requirements**: NOTIFY-03
**Success Criteria** (what must be TRUE):
  1. `Notifications.addNotificationResponseReceivedListener` is registered at app root and resolves the tapped notification's target session/lesson.
  2. Tapping a notification while the app is cold-launching waits for the content-readiness gate before navigating, rather than crashing or showing a blank screen.
  3. Push token registration (`getExpoPushTokenAsync`) is wired and the resulting token is stored keyed to the same `userId` used everywhere else in the app (matching the Adapty/Supabase-uid coupling pattern from Phase 4).
**Plans**: TBD
**Pitfall Watch**: The Fix 4/Fix 5 cross-dependency from ARCHITECTURE.md — explicitly test a notification tap on a cold-started app after Phase 16 lands, confirming the handler does not fire before `ready`/`contentHydrated`. Push-token registration is plumbing only (no dispatch backend exists — out of scope per PROJECT.md); do not treat storing the token as delivering user-visible retention value on its own.
**UI hint**: yes

### Phase 18: Component Test Infrastructure
**Goal**: The app has working component-render test infrastructure capable of testing at least one real screen.
**Depends on**: Nothing
**Requirements**: TEST-02
**Success Criteria** (what must be TRUE):
  1. Jest + jest-expo + React Native Testing Library is configured and runs alongside (not replacing) the existing 844 `node --test` logic tests.
  2. At least one real screen has a passing component-render test using `getByRole`-style assertions, ideally one of the screens touched by Phase 8's accessibility audit so the two efforts reinforce each other.
**Plans**: 2 plans

Plans:
**Wave 1**
- [x] 18-01-PLAN.md — Install jest/jest-expo/RNTL, add the separate `test:component` script, give `Toggle` a switch role plus accessible name (D-07), and prove the harness with a Toggle render/press test

**Wave 2** *(blocked on Wave 1 completion)*
- [x] 18-02-PLAN.md — Render the real `app/settings.tsx` with `getByRole` assertions plus one sound-toggle interaction against the real store, and write the `ealch-v2/TESTING.md` recipe (D-06)

**UI hint**: yes

### Phase 19: High-Risk Test Coverage — Exam Grading & Notification Delivery
**Goal**: The highest-risk untested flows in the app — exam grading and notification delivery/tap — have automated regression coverage.
**Depends on**: Phase 7 (BUG-02's exam-response persistence must exist to test against), Phase 17 (the notification tap-handler must exist to test), Phase 18 (test infrastructure)
**Requirements**: TEST-01, TEST-03
**Success Criteria** (what must be TRUE):
  1. An automated end-to-end test covers exam submission → grading → report generation.
  2. An automated test covers notification scheduling → delivery → tap-response.
  3. Both tests run as part of the existing test-running workflow so a future regression is caught automatically, not just manually.
**Plans**: TBD

### Phase 20: TEF Speech-Rate Verification & Re-render
**Goal**: Every published TEF blanc paper's CO audio runs within its band's documented speech-rate envelope, confirmed by measurement rather than assumed from a single-paper spot-check.
**Depends on**: Nothing
**Requirements**: CONTENT-01 (follow-up; surfaced by Phase 2's audit as GAP-06)
**Success Criteria** (what must be TRUE):
  1. `check-speech-rate.ts` (run from a checkout with `ealch-admin` dependencies installed) measures words-per-minute on every CO Section D/E/F document across all 5 TEF papers (`blanc-01` through `blanc-05`), not just the 3 documents spot-checked in Phase 2 (`exam.tef_canada.blanc-01.co_mcq.004/005/006`, which measured ~169/~192/~192 wpm against ~160/~175/~175 targets).
  2. The audit confirms, per document, whether the hot-running pattern found on `blanc-01` (all 3 spot-checked documents exceeding their band's stated wpm ceiling) holds, is partial, or was a `blanc-01`-only artifact.
  3. Every CO document confirmed to exceed its band's stated wpm ceiling is re-rendered at a corrected TTS rate and re-measured to confirm it now falls within the envelope before being republished.
  4. Documents confirmed already within envelope are left untouched (no unnecessary re-render/re-publish churn on audio that already conforms).
**Plans**: TBD
**Source**: `.planning/phases/02-content-curriculum-gap-audit/GAPS.md` GAP-06 (severity warning, 2026-09-19)

### Phase 21: DELF blanc-02..05 Audio Listening QA
**Goal**: DELF `blanc-02` through `blanc-05`'s CO audio — live in production since before this milestone, per GAP-07 — has actually been listened to by a human, and any real defect that listening pass finds is fixed, closing the E8 gap these four published papers currently carry.
**Depends on**: Nothing
**Requirements**: CONTENT-01 (follow-up; surfaced by Phase 2's audit as GAP-07)
**Success Criteria** (what must be TRUE):
  1. All 12 CO tasks (3 exercises per paper × `blanc-02`, `blanc-03`, `blanc-04`, `blanc-05`; ~36.8 minutes of audio total, per Phase 2's per-paper duration sums of 564s/554s/544s/546s) have been listened to end-to-end by a human reviewer.
  2. Any audio defect found during the listening pass (mispronunciation, wrong speech rate, clipping, wrong voice, content/script mismatch) is logged with the specific `content_exam_tasks` id and fixed before this phase closes.
  3. The listening pass is attested in a durable, re-checkable way — populating the existing but currently-unused `reviewed_by`/`reviewed_at` fields on `content_exam_tasks` (per GAP-08's finding that no such attestation exists anywhere in the schema today) rather than leaving the fact of review undiscoverable a second time.
**Plans**: TBD
**Source**: `.planning/phases/02-content-curriculum-gap-audit/GAPS.md` GAP-07 (severity warning, 2026-09-19)

### Phase 22: General Screen Test Coverage
**Goal**: Component-render regression coverage extends beyond Phase 18's one proof-of-concept screen and Phase 19's two high-risk flows to the rest of the app's screen surface, prioritized by actual historical defect evidence rather than guesswork.
**Depends on**: Phase 18 (test infrastructure/mocking convention must exist), Phase 19 (establishes the pattern for a heavier-mocking-surface screen; sequencing after it avoids rework if that phase's plan reveals infrastructure gaps)
**Requirements**: TEST-04
**Priority within phase**: Tier 1 (21 screens with a documented fix-commit history — see Source doc) before Tier 2 (26 screens with no documented bug yet but still zero coverage). Do not attempt all 47 remaining screens as one undifferentiated pass — this phase's own planning should decide batching/sequencing, informed by the Source document's per-screen line counts and cross-phase notes (e.g. `onboarding.tsx`/`placement.tsx` overlap with Phase 9's audit).
**Success Criteria** (what must be TRUE):
  1. Every Tier 1 screen (21 screens with proven historical bugs, per the Source document) has at least one passing component-render test following Phase 18's established convention (`getByRole`-style assertions, no snapshots, mocking at the service/native boundary).
  2. A documented decision exists (in this phase's CONTEXT.md or a follow-up phase) on whether/when Tier 2's 26 screens get coverage — this phase does not have to close 100% of the screen surface to succeed, but it must not silently leave the question unanswered.
  3. The `TESTING.md` recipe from Phase 18 is followed (not reinvented) for every new test file, or explicitly amended if a genuine new pattern is needed — keeping one coherent convention across the growing test suite rather than N different styles.
**Plans**: TBD
**Source**: `.planning/phases/22-general-screen-test-coverage/22-SCREEN-COVERAGE-AUDIT.md` — 49 screens measured directly (line counts, git fix-commit history); 45% (22/49) have a documented historical bug; only 2/49 get coverage from Phases 18-19. Gathered 2026-09-22 during Phase 18's discuss-phase, at the user's explicit request to document (not yet execute) general screen coverage as future work.

### Phase 23: Exam Recording-Task Restore & Grading-Path Integrity
**Goal**: A candidate who force-kills and relaunches mid-exam sees their recorded or spoken answer reflected on screen instead of a misleading fresh-start prompt, and a section that was genuinely answered is never silently reported as "not sat."
**Depends on**: Phase 7 (BUG-02's draft-persistence/restore mechanism must exist — this phase extends its coverage to the presentation layer and the grading-integrity check BUG-02's own scope never reached)
**Requirements**: BUG-04, BUG-05, BUG-06
**Success Criteria** (what must be TRUE):
  1. After a force-kill/relaunch mid-sitting, `ExamSpeakTask`, `ExamInterlocutorTask`, and `ExamDebateTask` each render a restored "already answered" summary (matching what Writing's plain-text tasks already do today) instead of resetting to their idle "start recording"/"start the interview" screen, whenever a `spoken[task.id]`/`coverage[task.id]`/`debate[task.id]` entry already exists for that task.
  2. `exam-section.tsx`'s `submit()` loop and `exam-report.tsx`'s `sectionStatusFor()` are reconciled so they can no longer silently disagree about which tasks belong to a section — either both are resolved against the same task-id set, or a genuine mismatch between them is surfaced (visibly to the candidate, or at minimum logged) instead of rendering as an unqualified "Not sat."
  3. The BUG-05 divergence (`examTasksOfSection`'s silent `.filter(t => !!t)` dropping an unresolved task id while `sectionStatusFor` still expects it) is covered by an automated test that fails against today's code and passes once fixed — not verified by inspection alone.
  4. A device pass confirms that a real recorded/spoken answer, submitted after a force-kill and relaunch, produces a real grading outcome or an honest "grading failed" message for the section actually completed — never "not sat."
  5. A force-kill DURING a recording (mid-monologue, mid-interview, mid-débat) no longer loses the answer: the in-progress transcript is checkpointed as the candidate speaks, and on relaunch the saved part is shown on the task's finished card and graded as that task's answer, under the same exam-locked / practice-redo rule as a restored finished answer.
**Plans**: TBD
**Source**: `.planning/phases/07-known-bug-fixes/07-VALIDATION.md` and `07-05-SUMMARY.md` — both findings surfaced live on-device during Phase 7's own BUG-02 verification pass (2026-09-22): BUG-04 confirmed directly (restored answer data survives, screen doesn't reflect it); BUG-05 reproduced once (TEF Canada Exam 3, Speaking) and traced to its root cause by code audit, though the exact trigger for that one reproduction (corpus timing vs. another divergence path) is not independently confirmed from device logs.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20 → 21 → 22 → 23

Phases 1, 2, 3, 4 (→5), 6, 7, 8, 9, 10, 11, 18, 20, 21 have no shared files/state with each other and can be planned/executed in parallel per `config.json`'s `parallelization: true`. Phase 12 depends on Phase 11 (delight states extend the same Rive component core states establish) and is not part of the free-parallel set. Phase 13 (UI/UX Polish Audit) is hard-blocked behind Phases 5, 8, 10, 11, and 12 — it has been removed from the parallel set (a change from the original draft, made during 2026-09-19 revision to resolve a contradiction between this table and Phase 13's own dependency note) and should only be planned/executed once those five phases land. Phases 14 → 15 → 16 → 17 form a strict dependency chain (each restructures files the next phase touches again) and should not be parallelized with each other. Phase 19 depends on Phases 7, 17, and 18 all landing first. Phases 20 and 21 were appended after Phase 2's content audit (GAPS.md GAP-06, GAP-07) and have no dependency on any other phase. Phase 22 depends on Phases 18 and 19 (needs the test infrastructure and the established heavier-screen pattern) and is not part of the free-parallel set. Phase 23 depends on Phase 7 (extends BUG-02's restore mechanism to the presentation/grading-integrity layer) and is not part of the free-parallel set — it touches the same exam-runner files (`exam-section.tsx`, `exam-report.tsx`) Phase 19's E2E tests will exercise, so planning it before or alongside Phase 19 is worth considering even though no hard dependency runs in that direction.

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Content-Publish Drift Guard Extension | 4/4 | Complete    | 2026-09-19 |
| 2. Content & Curriculum Gap Audit | 6/6 | Complete    | 2026-09-20 |
| 3. TTS Security Hardening | 0/TBD | Not started | - |
| 4. Entitlement Verification & Signed-Out Purchase Fix | 9/9 | All plans executed — pending gsd-verifier close-out (04-08's restored/none + offline/signed-out-merge branches NOT RUN, blocked on Play Console internal-testing track) | - |
| 5. Paywall Coverage Expansion & Upgrade Nudge | 0/TBD | Not started | - |
| 6. Notification Correctness — Body Format & Toggles | 0/TBD | Not started | - |
| 7. Known Bug Fixes | 0/TBD | Not started | - |
| 8. Accessibility Retrofit | 0/TBD | Not started | - |
| 9. Onboarding & Analytics Audit | 0/TBD | Not started | - |
| 10. Feedback & Rating Flow | 0/TBD | Not started | - |
| 11. Brix Mascot Rive Animation Rollout — Core States | 0/TBD | Not started | - |
| 12. Brix Mascot Rive Animation Rollout — Delight States | 0/TBD | Not started | - |
| 13. UI/UX Polish Audit | 0/TBD | Not started | - |
| 14. Content Snapshot Split — Design Spike | 0/TBD | Not started | - |
| 15. Content Snapshot Split — Implementation | 0/TBD | Not started | - |
| 16. Cold-Start Lazy Load | 0/TBD | Not started | - |
| 17. Notification Tap-Handler & Push Token Registration | 0/TBD | Not started | - |
| 18. Component Test Infrastructure | 2/2 | Complete    | 2026-09-22 |
| 19. High-Risk Test Coverage — Exam Grading & Notification Delivery | 0/TBD | Not started | - |
| 20. TEF Speech-Rate Verification & Re-render | 0/TBD | Not started | - |
| 21. DELF blanc-02..05 Audio Listening QA | 0/TBD | Not started | - |
| 22. General Screen Test Coverage | 0/TBD | Not started | - |
| 23. Exam Recording-Task Restore & Grading-Path Integrity | 0/TBD | Not started | - |

---
*Roadmap created: 2026-09-19*
*Roadmap revised: 2026-09-19 — Phase 11 split into 11/12 (core/delight mascot states), Phase 13 hard-blocked in the parallel plan, Phase 5's gating rule deferred to phase-planning time, shared interruption-pattern criteria added to Phases 5/10, rating-prompt frequency cap added to Phase 10, acquisition/activation funnel scope added to Phase 9, Phase 7 re-prioritized (BUG-02 first). See ROADMAP REVISED return for full changelog.*
*Roadmap revised: 2026-09-19 — Phase(s) 20, 21 added from Phase 2's content audit (GAPS.md GAP-06, GAP-07). Appended as integer slot(s); no renumbering required.*
*Roadmap revised: 2026-09-22 — Phase 22 (General Screen Test Coverage) added, surfaced during Phase 18's discuss-phase when the gap between Phase 18/19's 2-screen coverage and the app's 49-screen surface was measured directly (45% of screens have a documented historical bug). Appended as an integer slot; TEST-04 added to REQUIREMENTS.md. Documented now, execution deferred at the user's explicit request — see `22-SCREEN-COVERAGE-AUDIT.md`.*
*Roadmap revised: 2026-09-22 — Phase 23 (Exam Recording-Task Restore & Grading-Path Integrity) added, surfaced live during Phase 7's own BUG-02 device-verification pass. BUG-04 (recording-task screens never show a restored answer) and BUG-05 (submit()/sectionStatusFor task-list divergence, found by code audit) added to REQUIREMENTS.md and mapped here rather than folded into Phase 7, whose plans and CONTEXT.md were already scoped and written against the original three bugs. Appended as an integer slot; no renumbering required.*
*Granularity: fine (23 phases — large, diverse backlog across 14 requirement categories; most phases are independent/parallelizable per research)*
