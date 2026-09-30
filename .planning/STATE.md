---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: executing
stopped_at: Phase 09 plan 04 executed; next 09-05
last_updated: "2026-09-30T02:11:53.000Z"
last_activity: 2026-09-29
progress:
  total_phases: 25
  completed_phases: 9
  total_plans: 79
  completed_plans: 74
  percent: 92
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-09-19)

**Core value:** Users can reliably learn French through Ealch's lessons and practice — the app must teach correctly and not lose or corrupt a learner's progress, content, or purchased access.
**Current focus:** Phase 09 - onboarding-analytics-audit (4/6 plans executed)

## Current Position

Phase: 09 (onboarding-analytics-audit) - EXECUTING
Plan: 4/6 plans executed; next is 09-05
  font scale 1.3); its findings and a first-lesson crash were closed in a72f284.
  07.1-07 had shipped the three-state B1+ language control (fr/both/onDemand):
  englishMode()/migrateLessonEnglishMode() in english.logic.ts, the v6-to-v7 store
  migration, Type.tsx's on-demand reveal, MissionRich's group-drill reveal,
  LanguageChip/LanguagePanel in app/lesson.tsx, and answers-not-glosses.test.ts.
Status: Phase 09 Plan 04 complete; continue with 09-05
NOTE: The frontmatter `percent` above measures written plans, not milestone
  progress. Phase 09 now has 2 unexecuted plans. The figure of record is
  in ROADMAP.md's "How to read this table". Do not re-add
  percent_basis/percent_note here; the handler has deleted them twice.
Prior phase: 22.1 (bundle-exam-content-in-the-seed-so-exams-load-at-first-launc) — ALL PLANS EXECUTED, still awaiting close-out verification
Last activity: 2026-09-28

Progress: [█████████░] 89%

## Performance Metrics

**Velocity:**

- Total plans completed: 61 of 61 written (was recorded as 28 until 2026-09-23; that count stopped being updated around Phase 5). Every written plan is executed; 15 of the 25 phases have never been planned, which is what that ratio hides.
- Average duration: ~15 min
- Total execution time: 0 hours

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1 | 4 | - | - |
| 2 | 6 | ~60min | ~10min |
| 3 | 4 | ~90min | ~22min |
| 05 | 7 | - | - |
| 06 | 5 | - | - |
| 18 | 2 | - | - |

**Recent Trend:**

- Last 5 plans: 03-01 (15min), 03-03 (10min), 03-02 (20min), 03-04 (45min)
- Trend: stable

| 5 | 7 | ~40min (P07) | - |

*Updated after each plan completion*
| Phase 06 P05 | 25min | 2 tasks | 1 files |
| Phase 22.1 P05 | 25min | 3 tasks | 30 files |
| Phase 22.1 P06 | 75min | 3 tasks | 1 files |
| Phase 07.1 P01 | 40min | 4 tasks | 6 files |
| Phase 07.1 P03 | 50min | 3 tasks | 7 files |
| Phase 07.1 P04 | 55min | 3 tasks | 7 files |
| Phase 07.1 P05 | 70min | 3 tasks | 4 files |
| Phase 07.1 P06 | 45min | 3 tasks | 4 files |
| Phase 07.1 P07 | 45min | 3 tasks | 10 files |
| Phase 07.1 P08 | 50min | 3 tasks | 18 files |
| Phase 07.1 P09 | 65min | 3 tasks | 10 files |
| Phase 07.1 P10 | 1h10min | 3 tasks | 8 files |
| Phase 08 P01 | 90min | 2 tasks | 13 files |
| Phase 08 P02 | 16min | 2 tasks | 16 files |
| Phase 08 P03 | 21min | 2 tasks | 17 files |
| Phase 08 P04 | 25min | 2 tasks | 14 files |
| Phase 08 P05 | 35min | 2 tasks | 13 files |
| Phase 08 P06 | 30min | 2 tasks | 5 files |
| Phase 08 P07 | 40min | 2 tasks | 14 files |
| Phase 08 P08 | 40min | 2 tasks | 16 files |
| Phase 08 P09 | 50min | 2 tasks | 19 files |

## Accumulated Context

### Roadmap Evolution

- Phase 22.1 inserted after Phase 22: Bundle exam content in the seed so exams load at first launch, offline; sequenced before Phase 23 (URGENT)
- Phase 07.1 inserted after Phase 7: Concept C spine rewrite: replaces den.tsx, lessonoverview.tsx and missions.tsx. Phases 8, 9, 11, 12 and 13 now depend on it (URGENT)

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- Roadmap: Content scope frozen at A1/A2/exams — no new curriculum levels this milestone.
- Roadmap: Acoustic/phoneme pronunciation scoring and real push-campaign backend both stay out of scope (flagged in research as multi-week efforts disproportionate to a solo-dev launch-readiness pass).
- Roadmap: Phases 14→15→16→17 (snapshot split → cold start → notification tap-handler) form a strict sequential chain because each restructures the same files the next phase touches again; do not parallelize these four.
- Roadmap: Phase 5 (paywall expansion) deliberately sequenced after Phase 4 (entitlement/restore verification) so widening what's gated never outruns the ability to recover access.
- Roadmap (2026-09-19 revision): Original Phase 11 split into Phase 11 (Brix mascot core states: idle/listening/speaking/celebrating/thinking) and Phase 12 (delight states: tap-easter-egg/dozeOff/transform-in-out). All phases after the original Phase 11 renumbered +1 (former 12→13 ... former 18→19), rather than using decimal notation, because decimal is reserved for post-approval urgent insertions per ROADMAP.md's own convention and this split is neither urgent nor an insertion.
- Roadmap (2026-09-19 revision): No mid-milestone launch gate. User explicitly declined a PM/growth-recommended "ship after phase N" checkpoint — this stays one complete milestone, deliberately.
- Roadmap (2026-09-19 revision): Phase 5's specific paywall gating boundary (e.g. "A1 free / A2+exams gated") is deferred to Phase 5's own planning rather than fixed by the roadmap; PAY-02's success criterion now requires Phase 5 planning to determine and document one coherent rule.
- Roadmap (2026-09-19 revision): Phase 13 (UI/UX Polish Audit) is hard-blocked behind Phases 5, 8, 10, 11, and 12 in both its own dependency note and the Progress section's parallel-phases list (previously only the prose note said this, creating a contradiction with the parallel list).
- Roadmap (2026-09-19 revision): Phases 5 and 10 must share one common interruption/nudge visual pattern (upgrade nudge and rating prompt) rather than each inventing its own modal/banner/toast — extending/reusing `PushBanner.tsx` where practical.
- Roadmap (2026-09-19 revision): Phase 10's rating prompt is capped at 3 prompts/user/year on both platforms, matching Apple's `SKStoreReviewController` platform-enforced cap (Android has no equivalent enforced cap, so this is self-imposed there).
- Roadmap (2026-09-19 revision): Phase 9's analytics audit (QA-02) scope expanded to include acquisition/activation funnel events (first-open, signup started/completed, referrer capture, onboarding step-level funnel, D1 return), not just engagement events.
- Roadmap (2026-09-19 revision): Phase 7 re-prioritized internally — BUG-02 (exam response lost on process death) is the phase's highest-priority item (revenue-adjacent, planned/executed first); BUG-01 (audio pause on background) is cosmetic and deprioritized to last. Kept as one phase rather than split, to avoid a second full renumber.
- Roadmap (2026-09-19 revision): Phase 11/12 (mascot) success criteria now explicitly require preserving `MascotAvatar.tsx`'s existing `accessibilityElementsHidden` behavior and `useReduceMotion()` handling in the Rive version, plus a Phase-8-style real-device accessibility re-check specifically for Phase 12's new tap-easter-egg interactive surface.
- Roadmap (2026-09-19 revision): Phase 16 (Cold-Start Lazy Load) reuses the mascot's existing "thinking" state as its loading cue instead of a new spinner, per `MascotAvatar.tsx`'s documented convention; soft (non-blocking) coordination note to visually converge with Phase 11's Rive "thinking" state once that lands.
- Roadmap (2026-09-22 addition): Phase 22 (General Screen Test Coverage) added, appended as an integer slot, depends on Phases 18 and 19. Surfaced during Phase 18's discuss-phase — direct measurement found only 2 of 49 screens get any component-render test coverage from Phases 18/19, and 22 of 49 screens (45%) have a documented historical fix-commit. New requirement TEST-04 added to REQUIREMENTS.md. User explicitly asked to document this now and defer execution to a later stage — see `.planning/phases/22-general-screen-test-coverage/22-SCREEN-COVERAGE-AUDIT.md` for the full evidence base (per-screen line counts, bug history, Tier 1/Tier 2 prioritization). Do not start `/gsd-discuss-phase 22` or `/gsd-plan-phase 22` without the user explicitly asking to begin it.
- Phase 02 Plan 01: Supabase project `ogbothupjcivwruesgsu` confirmed ACTIVE_HEALTHY (direct read via fallback `select 1` smoke query — Supabase MCP tools were unavailable in the executor's toolset this session); restore checkpoint resolved by user as `already-healthy`, no restore performed.
- Phase 02 Plan 01: Live baseline census agrees exactly with CONTEXT.md's pre-audit facts — 75 curriculum units (sons 10 / a1 30 / a2 35, 0 with empty `lessonIds`), 15 published exam papers (5 each delf_b2/tcf_canada/tef_canada). Recorded in `GAPS.md`.
- Phase 02 Plan 01: CONTENT-01 requirement is deliberately left unmarked in REQUIREMENTS.md — plan 01 only established environment health + census; the requirement closes only once Plans 05/06 populate GAPS.md's Findings/Gaps Summary sections.
- Phase 02 Plans 02-04 (Wave 2, parallel): curriculum spine audit (75/75 units clean structurally; 2 phantom theme slugs found; PE@b2 and PO@b2 exam-remediation routing both empty), exam paper audit (15/15 papers structurally conformant; TEF blanc-01 audio spot-check runs hot vs. speech-rate envelope; DELF blanc-02..05 audio never went through an E8 listening pass, revised to ~37min not "~2 hours"; no schema field anywhere records an audio-listening attestation), and known-defect re-measurement (numbers-scoring and playlist-voice-deck fixes both still solid; 1 residual build-note-contamination row survives in shipped seed.json; seed.json's 75 units match Postgres's 75 exactly, no drift).
- Phase 02 Plan 05: D-09 cross-reference against the full REQUIREMENTS.md traceability table (not just the plan's named minimum of BUG-01/02/03, QA-01/02) found no existing requirement owns any of the 9 findings from Plans 02-04 — all 9 classified `new`, written into GAPS.md as GAP-01..GAP-09. GAP-03/GAP-04 (PE@b2/PO@b2 remediation slots) are deferred rather than scoped for build, because the fix would introduce a new taught curriculum level, conflicting with PROJECT.md's Out-of-Scope decision. GAP-06 (TEF speech-rate spot-check) and GAP-07 (DELF audio never QA'd) are flagged Phase-worthy (D-07): yes for Plan 06 to weigh as candidate roadmap stubs.
- Phase 02 Plan 06 (final plan of Phase 2): GAP-06 and GAP-07 promoted to two new integer-slot ROADMAP phases — Phase 20 (TEF Speech-Rate Verification & Re-render) and Phase 21 (DELF blanc-02..05 Audio Listening QA) — appended after Phase 19 with no renumbering, each carrying named success criteria that reuse the specific ids/numbers GAP-06/GAP-07 measured. CONTENT-01 closed in REQUIREMENTS.md as "audited, gaps found and scoped" (not "audited, no gaps") — 9 gaps total: 2 promoted to phases, 5 scoped as in-document follow-ups (GAP-01, GAP-03, GAP-04, GAP-08, GAP-09), 2 documented as intentional design/non-defects (GAP-02, GAP-05), 0 already owned by an existing requirement. Developer reviewed GAPS.md and the ROADMAP diff at the Task 3 blocking checkpoint and approved without requesting changes. Phase 02's own ROADMAP checklist entry (`- [ ] **Phase 2:`) was deliberately left unchecked per plan instruction — that flip belongs to `/gsd-verify-work`, not this plan.
- Phase 03 (TTS Security Hardening, all 4 plans): closed SEC-01. 03-01 built the pure `quota.ts` decision layer (18 tests). 03-02 appended `tts_usage_daily/monthly/minute`+`tts_free_preview` tables and `tts_bump`/`tts_bump_free_preview` RPCs to `schema.sql` and applied them live to `ogbothupjcivwruesgsu` (idempotent, verified with 2 runs) — fixed a path bug in the plan's own apply-script template (`import.meta.url`-relative path was one level short). 03-03 added the client-side `shouldAttemptRemoteTts()` guest gate in `tts.ts`. 03-04 wired `callerUid()`/tier classification/quota enforcement into `tts/index.ts`, deployed to production, and passed both the automated curl proof (zero-auth → 401, anon-key-only → 401 guest_not_allowed) and a human-verify device checkpoint (free-tier exhaustion, premium burst cap, and guest-never-calls-remote all fall back to audible device speech correctly). `system_config.ttsProvider` was temporarily flipped to `'elevenlabs'` for the device test and confirmed restored to `'device'` immediately after. This session's `gsd-sdk` CLI was not installed (only the older `gsd-tools.cjs`) — phase execution, commits, and STATE/ROADMAP/REQUIREMENTS updates were done directly rather than via the SDK's query handlers; worth fixing the GSD install before the next `/gsd-execute-phase` if the SDK-driven automation (worktree wave orchestration, auto-advance, etc.) is wanted.
- [Phase 05]: Phase 05 (paywall-coverage-expansion-upgrade-nudge) closed: 05-GATING-RULE.md is the rule of record citing entitlement.logic.ts as source of truth; all 21 device-verification items reported and approved, with items 20/21 verified by targeted method (production setEntitlement() path / structural test-suite guarantee) rather than an ordinary tap, and this distinction is recorded in 05-VALIDATION.md rather than glossed over.
- [Phase 06]: Plan 05: NOTIFY-01/NOTIFY-02 closed via human-confirmed on-device pass (Pixel 9) — toggle independence, report-tracks-toggle, and no literal placeholders in delivered bodies all verified; Check E (duplicate-daily-after-upgrade) skipped, no pre-Phase-6 build available to test the upgrade path.
- [Phase 07]: Plan 05 (device verification, 2026-09-22): BUG-02 verified on real hardware — local `gradlew assembleRelease` remains blocked (Windows/ninja/Defender, needs admin access this session doesn't have), routed around via an EAS cloud build (`preview` profile) instead. Force-kill/relaunch on a real Pixel 9 confirmed answers survive intact (Writing section, word-for-word) and a retry cannot double-grade (confirmed via a real submit). Surfaced a new, distinct finding while testing the same fix against speaking/recording tasks: the answer DATA survives a crash correctly, but `ExamSpeakTask`/`ExamInterlocutorTask`/`ExamDebateTask` all reset to a blank "start recording" screen on restore with no indication an answer already exists — confirmed via the section-level "X/2 answered" count staying accurate across two independent kill/relaunch cycles while the task's own screen showed nothing. Tracked as new requirement **BUG-04** in REQUIREMENTS.md. A follow-up submit (developer-run, on a fresh paper, Pro account) surfaced a second, more serious finding: the submit came back "Not sat" for a section genuinely completed with a real restored answer — traced by code audit (not device logs, which weren't accessible on a release build without `run-as`) to a real structural gap: `content.logic.ts`'s `examTasksOfSection()` silently drops any task id that fails to resolve against the loaded corpus, while `exam-report.tsx`'s `sectionStatusFor()` checks the section's original, unfiltered task-id list — a divergence between the two that `submit()` never guards against. Filed as new requirement **BUG-05**. Both BUG-04 and BUG-05 given their own new phase — **Phase 23: Exam Recording-Task Restore & Grading-Path Integrity** — rather than folded into Phase 7, whose plans/CONTEXT.md were already scoped to the original three bugs. BUG-01 was already device-verified in a prior session.
- [Phase 22.1]: Plan 05: Paul approved option-a (author-narration-batch.ts canonical DB write) at the Task 2 checkpoint, plus commit of the 30 listed narration-batch files by explicit path
- [Phase 22.1]: Plan 05: fixed a Rule 1 bug in author-narration-batch.ts (missing version bump, unlike seed twin apply-narration-seed.ts) discovered while proving content:parity clean; added a self-healing repair path and used it to correct the 30 already-written Postgres rows
- [Phase 22.1]: Plan 06: D-09 baseline recorded — EAS preview build 2987661d confirmed exam-less (gitCommitHash matches HEAD b85fa55), cold start median 524ms (514-570ms) on the connected Pixel 9, offline Examiner confirmed 'No exams available yet.'
- [Phase 22.1]: Plan 06: discovered the fresh-unauthenticated-install onboarding gate blocks the ealch://downloads deep link (redirects to sign-up/sign-in); recorded as a contingency for plan 08's after-pass rather than worked around
- [Phase 22.1]: Plan 07 (2026-09-23): published **v73** (v71 exams, v72/v73 the a1.03 correction). The dry run blocked first on `a2.20.l1: DB is v3, committed seed is v4`; the tool's suggested remedy (`restore-lesson-bodies-from-seed.ts`) would have pushed the accidental v4 bump into Postgres and reset a2.20 progress, so the fix ran the other way — commit the working tree (f32f05d) and let the regeneration bring a2.20.l1 back as v3. `content:parity` clean, 78 lessons both sides. Recorded while there: `attempts`, `learning_sessions`, `entitlements` and `subscriptions` are all **0 rows**, so every version constraint on this repo is currently protecting nothing.
- [Phase 07.1]: Plan 01: authored acts/section-ids/deckTranche for sons.01-04 (D-31), applied Postgres-first then merged into seed.json; Lesson.version held at 3/5/5/2 (D-25, check-version-bumps.ts demand ignored deliberately); Board C4's six invented sons.01 act rows accepted as indicative, not redrawn
- [Phase 07.1]: Plan 03: D-32 implemented — LEVELS widened to 7 members (sons..c2), TRACKS stayed at 3, FREE_BANDS untouched. drizzle/0022 applied live to ogbothupjcivwruesgsu, dropping items_level_not_c2; content_level enum needed no migration (already carried c2, verified live before/after). c2 is now expressible everywhere but authored nowhere — 0 c2 content_items rows, confirmed both before and after the migration.
- [Phase 07.1]: Plan 03: found but did not fix a same-shape band-list under-count in the live curriculum admin UI (src/app/admin/curriculum/actions.ts + NewThemeButton.tsx, both still capped at c1) — out of this plan's named file scope; documented in 07.1-03-SUMMARY.md as a follow-up for whichever plan next touches that screen.
- [Phase 07.1]: D-37: acte 00 renders on a locked band and routes to the paywall like every other locked row (reverses den.tsx's old hide-on-lock). — D-22 requires locked rows to stay readable and pressable; narrated.tsx still gates on arrival regardless of visibility.
- [Phase 07.1]: Act and mission titles render exactly as authored, with no language swap and no titleFr/titleEn schema addition (the deferred naming question CONTEXT flagged). — Titles are already authored in each lesson's own instruction language, so 'as authored' is the no-op that invents no parallel copy table; a later phase may revisit once the act screen is in front of a reviewer.
- [Phase 07.1]: Plan 05: D-38's PASS verdict (real Android bottom sheet, plan 02) consumed without re-testing; fiche.tsx built as a formSheet route with the three measured defects handled at registration (contentStyle background, 0.92 top detent) and in the screen body (no numberOfLines truncation, minHeight not height on text-bearing UI). act.tsx resolves the mission deep-link section index against L.sections (not act.sections' own index).
- [Phase 07.1]: Plan 05: both act.tsx and fiche.tsx use router.back() first and router.replace('/den') only when router.canGoBack() is false — the plan's explicit correction to missions.tsx's own dead-link verb (D-41).
- [Phase 07.1]: Plan 06: PanelRow.tsx built as the shared presentational row (props only, no store read) both LevelPanel and LanguagePanel are built on; leading/trailing render outside the title's own flex:1 wrapper, carrying the flex-on-a-TX fix forward from lessonoverview.tsx
- [Phase 07.1]: Plan 06: LevelPanel (D-06/D-07) and LanguagePanel (D-13/D-14) both take their data (unitCounts/levelsAll/band, mode/open) as props, not a store read - keeps plan 07/08's wiring additive and lets level-panel.test.ts prove the 44px/flex rules with no device
- [Phase 07.1]: Plan 06: level-panel.test.ts extends sons-07-elision.test.ts's flex/44px finding to PanelRow/LevelPanel/LanguagePanel, anchored on PanelRow's own flex-wrapper boundary rather than a blind 400-char scan (which would flag the BottomSheet.tsx row analog the plan named to copy)
- [Phase 07.1]: Plan 07: shipped the three-state B1+ language control (fr/both/onDemand) end to end — english.logic.ts's englishMode(), a v6-to-v7 store migration, Type.tsx's on-demand reveal, MissionRich's group-drill reveal, and LanguageChip/LanguagePanel wired into app/lesson.tsx
- [Phase 07.1]: Plan 07: the v6-to-v7 store migration's mapping was pulled into a pure, exported migrateLessonEnglishMode() in english.logic.ts because useStore.ts cannot be imported under node --test at all (proved by probing its imports; same reason useProgress.ts keeps its own migration math in progress.logic.ts) — store SHAPE is pinned by a source-guard, mapping BEHAVIOUR by a real function call
- [Phase 07.1]: Plan 07: D-36's answers-not-glosses.test.ts anchors the flashcard-back check on app/flashcards.tsx (the real, hardware-uncovered D-16 surface) rather than the plan's named LessonDeck.tsx/WordCardXL.tsx, whose own gloss sites are legitimate members of the known-13 count, not answers
- [Phase ?]: [Phase 07.1]: Plan 08 shipped the trail - den.tsx is now a FlashList 2.0.2 over trailRows(), the level panel mounted, the three-tab pill row gone (SC-2); band/level-panel-open/scroll-anchor moved into useUI.ts (not persisted), useStore.ts untouched
- [Phase ?]: [Phase 07.1]: Plan 08 deleted app/lessonoverview.tsx and app/missions.tsx in the same commit that repaired lesson-siblings.test.ts's module-scope read (D-33) and retargeted its den-tap assertion at trail.logic.ts's row enumeration; useProgress bumped to persist v5 to drop stale resumeByMode routes
- [Phase ?]: [Phase 07.1]: Plan 09: acte 00 uses the existing speaker glyph (no new headphone icon added); PremiereLockTag.tsx is used on TrailRow.tsx's act/acte0 trailing icon but deliberately not on TrailHeading.tsx (no chevron-equivalent slot, out of both tasks' file scope); the other five PREMIERE-tag copies stay unmigrated per the plan's own scope decision
- [Phase ?]: [Phase 07.1]: Plan 09: the only edit to app/narrated.tsx is the two exit controls (D-41) becoming a shared canGoBack-preferring exit(), confirmed via git diff --stat as a 10-line change; D-37 reverses den.tsx's old hide-on-lock for the narrated entry point, now rendering readable/pressable and routing to the paywall on a locked band instead of disappearing
- [Phase 07.1]: D-19's two day-one cards persist their dismissal via useStore's partialize allow-list (denOrientationSeen/denPlacementSeen); neither is styled with the primary Button variant so neither competes with the start marker for the primary action — The partialize allow-list is the one place a field must appear to survive a force-stop, and a stored boolean implying entitlement was already the exact bug class premium was removed for

### Pending Todos

None yet.

### Blockers/Concerns

- Phase 14 (snapshot split design spike) must resolve the manifest backward-compatibility design and `mergeCorpus` multi-overlay question before Phase 15 can be planned — flagged as a research phase, not a standard plan-and-build phase.
- REQUIREMENTS.md's summary line stated "30 total" v1 requirements; the enumerated requirement list actually contains 29 distinct IDs. Corrected to 29 during roadmap traceability update — worth a quick sanity check next time REQUIREMENTS.md is touched.
- ANIM-01 is the one requirement mapped to two phases (11 and 12) rather than exactly one — a deliberate, documented exception from the Phase 11 split, not an orphan/duplicate error. Flag this if any future coverage-validation tooling assumes strict 1:1 requirement-to-phase mapping.
- ~~Phase 22.1 Plan 05 flag: an uncommitted a2.20.l1 version 3-to-4 edit sitting in the working tree~~ — **resolved 2026-09-23 by plan 07**, committed as f32f05d so HEAD, the working tree and Postgres all agree on v3.
- ~~The working tree holds the uncommitted B1+ English toggle and the a2.20 gloss correction~~ — **all committed 2026-09-23**: a2.20 glosses as `ac97d69`, the alt-text caller as `f6b8b24`, the English toggle as `0b6a1a9`, and the act chapter cards plus the b1.01 dev preview as `39baeec`.
- The tree is **still deliberately dirty, with different contents now.** In flight as of 2026-09-24: B1 wave 2 (`politesse`, `qui-que`, `si-clauses`, corpus/lesson/terms each, untracked), and a temporary Phase 07.1 D-38 probe (`app/devsheet.tsx` plus a `_layout.tsx` hunk) that settles whether `presentation: 'formSheet'` gives a real Android bottom sheet or falls back to a full-screen modal — both self-labelled for deletion once the verdict is recorded. Genuinely stray: `ealch-v2/bash.exe.stackdump`. Generated and always flapping: `ealch-admin/PUBLISH-REPORT.md`, `ealch-v2/supabase/.temp/cli-latest`.
- **`act.opener` shipped untested.** The chapter-card field and its `LessonPager` branch landed in `39baeec`, and nothing asserts on `act.opener` in any test. `image-refs.test.ts` walks every `imageRef` recursively so it *would* guard the 12 authored openers, but only for lessons in `seed.json`, and b1.01 is not published — so that guard is inert today. Pin it when b1.01 publishes.
- **STATE.md's `percent` is machine output. The figure of record is in ROADMAP.md.**
  `gsd-sdk`'s plan-completion handlers rewrite this file's frontmatter and its
  Current Position section on every run, and they recompute `percent` as
  completed_plans/total_plans. A `percent_basis`/`percent_note` pair was written
  into the frontmatter twice (2026-09-23 and 2026-09-24) to carry the explanation,
  and the handler deleted both fields both times. Do not try a third. The phase
  figure lives in ROADMAP.md under "How to read this table", which nothing
  rewrites. Everything in THIS section survives the handler; the frontmatter does
  not.

- **Two verifier boxes are owed and one was flipped early.** Phases 5 and 6 both have a `passed` VERIFICATION.md (12/12 each) and unchecked boxes; Phase 3's box is checked with no report written at all. `05-UAT.md` has sat untracked at `status: testing` since 2026-09-23. See ROADMAP.md's box-versus-table table.

## Deferred Items

Items acknowledged and carried forward from previous milestone close:

| Category | Item | Status | Deferred At |
|----------|------|--------|-------------|
| *(none — first milestone)* | | | |

## Phase transition note (2026-09-29)

Phase 09 (onboarding-analytics-audit) discussion and UI design contract are complete. Decisions are in `.planning/phases/09-onboarding-analytics-audit/09-CONTEXT.md`; the approved contract is `09-UI-SPEC.md` in the same directory. Phase 08's spoken TalkBack sweep and fresh-install Automatic hardware checkpoint are complete.

## Session Continuity

Last session: 2026-09-29T21:39:53.000Z
Stopped at: Phase 09 plans quality-reviewed; ready to execute 09-01
Resume file: .planning/phases/09-onboarding-analytics-audit/09-01-PLAN.md
