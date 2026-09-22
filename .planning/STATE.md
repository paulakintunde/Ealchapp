---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: planning
stopped_at: Phase 23 context gathered
last_updated: "2026-09-22T07:47:38.282Z"
last_activity: 2026-09-22
progress:
  total_phases: 24
  completed_phases: 8
  total_plans: 42
  completed_plans: 42
  percent: 100
---

# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-09-19)

**Core value:** Users can reliably learn French through Ealch's lessons and practice — the app must teach correctly and not lose or corrupt a learner's progress, content, or purchased access.
**Current focus:** Phase 18 — component-test-infrastructure

## Current Position

Phase: 22.1
Plan: Not started
Status: Ready to plan
Last activity: 2026-09-22

Progress: [██████████] 100%

## Performance Metrics

**Velocity:**

- Total plans completed: 28
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

## Accumulated Context

### Roadmap Evolution

- Phase 22.1 inserted after Phase 22: Bundle exam content in the seed so exams load at first launch, offline; sequenced before Phase 23 (URGENT)

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

### Pending Todos

None yet.

### Blockers/Concerns

- Phase 14 (snapshot split design spike) must resolve the manifest backward-compatibility design and `mergeCorpus` multi-overlay question before Phase 15 can be planned — flagged as a research phase, not a standard plan-and-build phase.
- REQUIREMENTS.md's summary line stated "30 total" v1 requirements; the enumerated requirement list actually contains 29 distinct IDs. Corrected to 29 during roadmap traceability update — worth a quick sanity check next time REQUIREMENTS.md is touched.
- ANIM-01 is the one requirement mapped to two phases (11 and 12) rather than exactly one — a deliberate, documented exception from the Phase 11 split, not an orphan/duplicate error. Flag this if any future coverage-validation tooling assumes strict 1:1 requirement-to-phase mapping.

## Deferred Items

Items acknowledged and carried forward from previous milestone close:

| Category | Item | Status | Deferred At |
|----------|------|--------|-------------|
| *(none — first milestone)* | | | |

## Session Continuity

Last session: 2026-09-22T07:26:38.279Z
Stopped at: Phase 23 context gathered
Resume file: .planning/phases/23-exam-recording-task-restore-grading-path-integrity/23-CONTEXT.md
