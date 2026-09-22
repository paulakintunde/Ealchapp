# Ealch

## What This Is

Ealch is a mobile French-learning app (Expo/React Native, `ealch-v2`) backed by a Supabase Postgres database and a Next.js authoring console (`ealch-admin`). It teaches French through structured lessons, pronunciation/speaking practice, flashcard/SRS review, and includes practice-exam papers (TEF, TCF, DELF) as one of its features. Content is authored in `ealch-admin` and shipped to devices via a bundled `seed.json` plus Expo Updates OTA snapshots.

## Core Value

Users can reliably learn French through Ealch's lessons and practice — the app must teach correctly and not lose or corrupt a learner's progress, content, or purchased access. Exam prep is an important supported use case, not the sole reason the app exists.

## Requirements

### Validated

<!-- Shipped and confirmed valuable — inferred from the existing codebase (2026-09-19 codebase map) and project history. -->

- ✓ A1 curriculum (grammar, vocabulary, pronunciation "sons" modules) — existing, published
- ✓ A2 curriculum, ending in a2.35 bilan (A2 complete) — existing, published
- ✓ Mission-journey lesson format (guided narrated lessons, quizzes, trap drills) — existing
- ✓ Flashcard/SRS review across decks — existing
- ✓ Speak mode — STT-based practice with transcription-only scoring — existing (documented limitation: no acoustic/pronunciation analysis)
- ✓ Practice exam papers — TEF blanc-01, full TCF pack (10 papers), DELF pack (B2 sample + others) — existing, published
- ✓ Supabase auth, progress sync, and content publish pipeline (Postgres → `seed.json` → OTA snapshot) — existing
- ✓ Purchases/entitlement gating via Adapty, synced cross-device by Supabase auth uid — existing, corrected 2026-09-19 (research read `purchases.ts`/`entitlement.ts` directly; entitlement is NOT AsyncStorage-only as CONCERNS.md's static analysis implied)
- ✓ Paywall coverage is coherent and consistently enforced across the catalogue (sons+A1 free forever; A2+, unlimited coach, unlimited role plays are Première; exam papers are a separate Examiner pass), contextual paywall copy per trigger, a distinct exam-tier explainer, a usage-signal-triggered upgrade nudge, and an entitlement-downgrade reconciliation notice sharing one generalized banner slot with Phase 10's rating prompt — validated in Phase 5: Paywall Coverage Expansion & Upgrade Nudge (2026-09-21). Closed the confirmed real gap (flashcards/dictation/voiceflash/sentence drill screens had zero entitlement checks) rather than the originally-assumed "1 of 12+ lessons gated" framing, which two rounds of research found stale — the A1/A2 lesson boundary was already fully enforced before this phase.
- ✓ Content-publish drift guard ("4.0 RULE no-silent-regression" in `publish-content.ts`) blocking the 2026-07-31 incident class across all seed-carried content kinds (lessons, units, scenarios, playlists, speak stages), plus a printed + on-disk (`ealch-admin/PUBLISH-REPORT.md`) pre-publish diff report generated on every run — validated in Phase 1: Content-Publish Drift Guard Extension (2026-09-19), including a live proof against real Postgres of both the block and the pass-through directions
- ✓ Notification toggles (daily/report/nudge) each control a real, per-kind local notification, and every notification body routes through one shared, tested formatter with no unfilled `{t}`/`{name}` placeholders — validated in Phase 6: Notification Correctness — Body Format & Toggles (2026-09-21), confirmed on real hardware. Push token registration and tap-to-deep-link are explicitly deferred to Phase 17 (NOTIFY-03), not part of this phase's scope.
- ✓ Content snapshot delivered via filesystem cache (moved off AsyncStorage after a v66 incident), 50MiB ceiling, no separate `content-snapshot` edge function — existing, corrected 2026-09-19 (CONCERNS.md's "30MB ceiling vs 6MB AsyncStorage cap" was already fixed)
- ✓ Legal: store-required paywall disclosure, third-party notices in-app — existing (recent)
- ✓ Accessibility: French `lang` tagging on text components (UDL 08, partial) — existing, in progress
- ✓ RLS policies on all 41 public Supabase tables — existing, verified correct 2026-09-01
- ✓ Component-render test infrastructure (Jest + jest-expo + React Native Testing Library) runs alongside the existing 5,447-test `node --test` suite as a separate `test:component` command, with one real screen (`settings.tsx`) covered by a `getByRole`-style render + interaction test against the real (unmocked) zustand store — validated in Phase 18: Component Test Infrastructure (2026-09-22). Closes TEST-02. Surfaced during this phase's discussion that only 2 of the app's 49 screens (~4%) get any component-render coverage from Phases 18-19 combined; general screen coverage beyond that is deliberately deferred as Phase 22 (new requirement TEST-04), not silently dropped — see `.planning/phases/22-general-screen-test-coverage/22-SCREEN-COVERAGE-AUDIT.md`.

### Active

<!-- Full completion for this milestone: close content gaps within A1/A2/exams AND reach launch-readiness. Exact phase breakdown and sequencing is the roadmapper's job — these are the requirement areas, not a pre-set order. -->

- [ ] Content: close the concrete gaps surfaced by Phase 2's audit (`.planning/phases/02-content-curriculum-gap-audit/GAPS.md`) — 9 findings, of which 2 are promoted to Phase 20 (TEF speech-rate re-render) and Phase 21 (DELF blanc-02..05 audio QA); the remaining 7 (phantom theme slugs, dead PE@b2/PO@b2 remediation routing, one build-note leak, etc.) stay as named items in GAPS.md, not separately phased
- [ ] Fix known bugs blocking normal use: audio doesn't pause on backgrounding, exam response lost on process death, dark mode toggle ignored, STT continuous-mode regression risk (notification body placeholders were fixed in Phase 6, see Validated)
- [ ] Security: authenticate/rate-limit the TTS edge function — note: `verify_jwt=true` alone is insufficient (accepts the public anon key too), needs an explicit authenticated-user check plus per-user rate limiting
- [ ] Monetization: verify/harden entitlement sync for the signed-out-purchase-then-sign-in-elsewhere case (Phase 4's `04-08-SUMMARY.md` left this NOT RUN — needs a Play Console internal-testing track build, sideloading cannot exercise real Play Billing purchase/restore flows)
- [ ] Accessibility: finish the UDL pass — TalkBack/screen-reader roles and labels across all interactive controls (currently ~64 of 353 controls announce properly); a default `accessibilityRole="button"` on the shared `Press` component likely closes most of the gap, but needs a per-screen audit for switches/tabs/links that need different roles
- [ ] Performance: reduce cold start (currently ~2.4s blank screen from eager seed.json load, fix is moving the import from module-scope into `initContent()`) and split the existing ~27-50MB content snapshot by curriculum level (not "implement pruning before a ceiling" — the ceiling was already raised/fixed post-v66; this is a scaling/download-size improvement now)
- [ ] Retention: notification subsystem's dead toggles and body-format bug are fixed (Phase 6); still needed for launch: tap handler and push token registration (Phase 17)
- [ ] Test coverage: close the remaining highest-risk gaps — exam grading E2E and notification delivery (component-rendering infrastructure itself is done, see Validated) — enough to trust future changes. General screen coverage beyond the exam-grading/notification/settings screens (TEST-04, Phase 22) is explicitly out of this milestone's "highest-risk" framing and deferred, per user decision 2026-09-22.
- [ ] General launch-readiness pass: whatever else surfaces as blocking a public App Store/Play Store submission

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- New curriculum levels beyond A1/A2/exams (e.g. B1, B2 full courses) — user confirmed 2026-09-19 that content scope for this milestone is A1/A2/exams only; extending further is future work
- Acoustic/phoneme pronunciation scoring — not excluded outright, but flagged as a ~2-3 month effort; left for the roadmapper to schedule (or not) rather than pre-committed to this milestone
- Real push notification campaigns (token registration + backend dispatch) — same treatment: not excluded, but a multi-day build the roadmapper may defer

## Context

**Repo layout:** One git repo, two apps — `ealch-v2/` (Expo/React Native mobile app, npm) and `ealch-admin/` (Next.js authoring console + Supabase functions, pnpm) — sharing one Supabase Postgres database but two separate package managers and dependency trees. See `.planning/codebase/STRUCTURE.md` and `ARCHITECTURE.md`.

**Content pipeline hazard:** Content can be authored two ways — through `ealch-admin` (writes to Postgres, source of truth) or directly into `ealch-v2/src/content/seed.json` via "seed-direct" scripts. Publishing overwrites `seed.json` from Postgres, which has previously destroyed uncommitted seed-direct content (2026-07-31 incident). A manual pre-publish dry-run discipline exists but isn't enforced by tooling yet.

**Solo-maintained, budget-conscious:** Paul is the sole developer, working with Claude Code as build partner. Backend runs on Supabase's free tier (~5,000-user ceiling before hitting DB/bandwidth limits) and TTS costs scale with unmetered abuse risk if the open endpoint isn't secured — cost discipline matters more than it would on a funded team.

**Extensive project memory exists** in `C:\Users\harki\.claude\projects\...\memory\MEMORY.md` (150+ entries) covering nearly every lesson build, publish, and bug fix to date, even though this is GSD's first time formally tracking the project. Treat that memory as background institutional knowledge; `.planning/codebase/*.md` (this session's fresh map) is the current ground truth for code structure.

**Full concerns inventory:** `.planning/codebase/CONCERNS.md` has the detailed, file-referenced writeup of every tech-debt item, bug, security issue, and test gap referenced in Active requirements above — use it as the source of truth when phases get planned, rather than re-deriving root causes from scratch.

## Constraints

- **Tech stack**: React Native/Expo (mobile) + Next.js/Supabase Postgres (admin/backend) is locked — no framework rewrite in scope
- **Team**: Solo developer + AI pair-programming — favor changes one person can review and ship confidently over ones requiring a team to land safely
- **Budget**: Supabase free tier and pay-per-use TTS (ElevenLabs) — cost-aware decisions, especially anything that removes rate limits or auth from paid endpoints
- **Backward compatibility**: Existing users' progress, purchases, and installed content must not break — this repo has already had one content-loss incident from an unguarded publish; treat that class of risk seriously
- **Timeline**: No hard deadline — prioritize by impact/dependency, not by date

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| GSD scope = "full completion": content gaps + launch-readiness together, not a narrower slice | User explicitly asked for a fresh, comprehensive look at the whole remaining backlog rather than just the current branch's in-flight work | — Pending |
| Core value framed as general French learning, not exam-prep-only | User corrected the initial exam-centric framing during questioning | — Pending |
| Content scope frozen at A1/A2/exams for this milestone | User decision 2026-09-19; B1+ is explicitly future work | — Pending |
| No pre-set priority order — roadmapper sequences by dependency | User chose not to pre-bias toward "bugs first" or "content first" | — Pending |
| `.planning/` carved out of the repo's blanket `*.md` gitignore rule | GSD's commit tooling stages files with plain `git add`, which was silently skipping every planning doc under the existing `*.md` ignore rule | ✓ Good — verified working via test commit |
| Trust direct-source-read research over `CONCERNS.md`'s static-analysis claims where they conflict | Architecture/Features research (2026-09-19) read `publish-content.ts`, `purchases.ts`, `entitlement.ts`, and `content.ts` in full and found 3 "missing" items (drift guard, cross-device entitlement, snapshot ceiling) were already partially/fully built; CONCERNS.md was generated from a codebase map, not a full read | ✓ Good — narrowed Active requirements accordingly |
| CONTENT-01 closed as "audited, gaps found and scoped" not "no gaps" | Phase 2's evidence-cited audit of all 75 units + 15 exam papers found 9 real findings; per D-07, phase-worthy findings get a roadmap phase immediately rather than deferred triage | ✓ Good — Phase 20/21 added, 7 smaller items tracked in GAPS.md |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-09-21 after Phase 6: Notification Correctness — Body Format & Toggles*
*Last updated: 2026-09-22 after Phase 18: Component Test Infrastructure*
