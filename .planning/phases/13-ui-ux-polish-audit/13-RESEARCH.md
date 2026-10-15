# Phase 13: UI/UX Polish Audit - Research

**Researched:** 2026-10-13
**Domain:** Static (no-live-device-required) visual-consistency / interaction-quality audit of an Expo/React Native app, scoped against five hard-dependency phases whose landing status is mixed
**Confidence:** HIGH on dependency-status facts and file locations (verified directly in this repo); MEDIUM on audit methodology recommendation (synthesized from this project's own prior audit patterns, no external framework needed); LOW/N-A on anything requiring a live device session (none was available this session)

## Summary

Phase 13 cannot be planned as a simple "go find polish bugs" task — this repo already ran two structured UI/UX audits on exactly the screens Phase 13 is scoped to touch (`07.1-UI-AUDIT.md` for the trail/home/lesson-flow spine, `08-QUALITY-AUDIT.md` for accessibility-adjacent visual defects like clipping and font-scale). Both left named, numbered, still-open findings. The highest-value first step for Phase 13's planner is **reconciling against those two documents**, not re-sweeping from zero — several of the "general visual polish" bugs this phase would otherwise rediscover (tail-clipping on `<TX flex:1>`, truncated mission titles, `numberOfLines` on cards, inconsistent language-toggle affordances) are already catalogued, and some are mid-fix in Phase 08.1 right now.

The dependency-gap risk flagged in the task is real and current, not hypothetical: of Phase 13's six hard dependencies, only **Phase 07.1 is genuinely, fully complete** (11/11 plans, device-verified). **Phase 5 is functionally complete** (7/7 plans, VERIFICATION.md passed 12/12) but carries a cosmetic bookkeeping gap (roadmap checkbox unflipped, one untracked `05-UAT.md` sitting at `status: testing`) that does not block Phase 13. **Phase 8 is the dangerous one**: its roadmap checkbox is checked and all 10 plans executed, but its own requirements (A11Y-01..04) were formally **reopened** by `08-QUALITY-AUDIT.md` on 2026-10-01 because real visual/interaction defects shipped — clipping (E3/E7), theme-resolution races (E1), font-scale activity restarts (E2), unannounced grading (E5), gesture-only actions (E10) — and the fix phase, **Phase 08.1, is 0/8 plans executed**, still mid-flight. **Phase 10, 11, and 12 are 0/TBD, entirely unstarted** — no Le Rapport rewrite, no report-a-problem UI, no mascot Rive component exist yet in any form Phase 13 could audit. Planning Phase 13 broadly right now risks exactly what its own dependency note warns against: re-flagging clipping/font-scale/touch-target issues Phase 08.1 is actively fixing, and attempting to "audit" paywall-nudge, settings, and mascot surfaces that either don't exist yet or will be rebuilt by Phase 10/11/12.

**Primary recommendation:** Do not plan Phase 13 broadly yet. Either (a) genuinely wait until Phase 08.1, 10, 11, and 12 all land (the roadmap's own stated intent), or (b) if the user wants Phase 13 planning work started now, scope it narrowly to the subset of "home, lesson flow" surfaces that Phase 07.1 already finalized and Phase 08.1 does not touch (verified by diffing Phase 08.1's `files_modified` against the audit's intended scope — see Dependency Risk Assessment below), explicitly excluding Settings rows Phase 10 will add, the paywall/nudge pattern Phase 10 extends, any mascot-adjacent chrome, and any exam screen in Phase 08.1's remaining stages. A genuinely narrow first pass is possible without re-litigating anything, but a "home, lesson flow, settings, paywall, exams" sweep as literally named in the phase goal is not safe to execute broadly today.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Visual-consistency audit (spacing, color tokens, button variants) | Client (RN screens/components) | — | Pure presentational layer; no backend involvement |
| Interaction-quality audit (loading/error states, affordances) | Client (RN screens/components) | — | State machines live in `*.logic.ts` pure modules consumed by screens; audit reads both |
| Fix-now execution (small, safe code changes) | Client (RN screens/components) | Theme tokens (`src/theme/`) | Fixes are style/markup edits, not schema or server changes |
| Device verification of fixes | Physical Android hardware (Pixel 6/9 via USB+adb) | EAS preview build pipeline | This repo has no reliable emulator path; release-JS timing and native defects require a real device per `08.1-EVIDENCE-PROTOCOL.md`'s own findings |
| Triage record-keeping | Planning docs (`.planning/phases/13-*/`) | — | Follows this repo's existing audit-document convention (`*-UI-AUDIT.md`, `*-QUALITY-AUDIT.md`) |

## User Constraints

No CONTEXT.md exists yet for Phase 13 (discussion has not run). This section will be populated by `/gsd-discuss-phase 13` before planning finalizes. The planner should treat the findings in this RESEARCH.md as input to that discussion, particularly the dependency-gap question, which is a decision only the user can make (wait vs. narrow-scope-now vs. proceed-broadly-and-filter-at-execution).

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| UX-01 | A phase audits general UI/UX for polish issues (visual consistency, interaction quality) beyond the accessibility/font-scale/dark-mode bugs already identified (scope discovery, same pattern as CONTENT-01) | See Audit Methodology, Dependency Risk Assessment, and the Reusable Prior Findings section below. The "beyond already identified" clause is load-bearing: `07.1-UI-AUDIT.md` and `08-QUALITY-AUDIT.md`'s open items are the baseline Phase 13 must not re-litigate, and must either inherit/triage or explicitly supersede. |

## Dependency Risk Assessment (read this before planning)

This is the section the task explicitly asked to surface. Verified directly against `ROADMAP.md` (lines 19-44 phase checklist; lines 583-661 Progress table and box-vs-table reconciliation) and `STATE.md`, both read in full this session.

| Dependency | Roadmap checkbox | Plans executed | Real status | Risk to Phase 13 |
|---|---|---|---|---|
| Phase 07.1 (Concept C Spine Rewrite) | `[x]` | 11/11 | **Genuinely complete.** Device-verified on Pixel 6 (commits `bd63572`, `a72f284`). Pending only a `gsd-verifier` close-out formality. | LOW. Home/trail/lesson-flow screens are stable. `07.1-UI-AUDIT.md` already lists open polish items on these exact screens (see below) — Phase 13 should inherit, not rediscover, these. |
| Phase 5 (Paywall Coverage Expansion & Upgrade Nudge) | `[ ]` (unflipped) | 7/7 | **Functionally complete.** `05-VERIFICATION.md` passed 12/12. The unchecked box is a documented bookkeeping gap (ROADMAP.md's own "box-versus-table" table calls this "owed", not "incomplete"). One untracked `05-UAT.md` sits at `status: testing` since 2026-09-23 — worth a 2-minute check by the planner, but not evidence of unfinished paywall UI work. | LOW-MEDIUM. The paywall/gating UI itself (`05-GATING-RULE.md`, two trail positions, contextual copy) is done. However Phase 5's shared interruption pattern (`PushBanner.tsx`, kind-driven banners) is explicitly going to be *extended* by Phase 10 (not started) — auditing `PushBanner.tsx`'s visual treatment now risks being invalidated when Phase 10 adds its own banner kind. |
| Phase 8 (Accessibility Retrofit) | `[x]` | 10/10 | **Reopened.** `08-QUALITY-AUDIT.md` (2026-10-01) found Phase 8 was closed on a one-line device sign-off that didn't meet its own acceptance bar, and confirmed 10 real defects (E1-E10) still in code — several are visual/interaction polish, not pure a11y (E3/E7 clipping, E8 inconsistent control roles across screens, E2 font-scale losing state). A11Y-01..04 are formally reopened in REQUIREMENTS.md. The real fix work is **Phase 08.1, currently 0/8 plans executed** — only `08.1-CONTEXT.md` and the 8 plan files exist; no execution has happened. | **HIGH.** Phase 08.1's own `files_modified` lists touch exactly the components Phase 13 would audit for visual-consistency: `LessonRich.tsx`, `WordCardXL.tsx`, `LessonDeck.tsx`, `MissionRich.tsx`, `SilentCards.tsx`, `QuizRoundsView.tsx`, `ScenePlayer.tsx`, `FlipFace.tsx`, `app/flashcards.tsx`, plus theme-resolution (`useTheme.ts`, `appearance.logic.ts`, `app/_layout.tsx`) and touch-target/gesture work still to come in later 08.1 stages. Planning Phase 13 broadly now means auditing components Phase 08.1 is about to rewrite. |
| Phase 10 (Feedback & Rating Flow) | `[ ]` | 0/16 | **Planned, not executed (updated 2026-10-15).** `10-CONTEXT.md` (D-01..D-49), 16 plans and a UI-SPEC exist; no code yet. `10-PRE-DISCUSSION-AUDIT.md` (dated 2026-10-01, the most recent artifact in that phase folder) rewrote the phase's own spec because the original had a compliance blocker (review-gating) — so even the *design* of this phase's UI changed after the roadmap was written. | **HIGH.** Settings screen will gain new rows (Report a problem, Rate Ealch) that don't exist yet. Le Rapport (`app/feedback.tsx`) has 6 known defects (R1-R6, see below) not yet fixed — auditing it for "polish" now would catalogue bugs Phase 10 is already scoped to fix under FEEDBACK-01. |
| Phase 11 (Brix Mascot — Core States) | `[ ]` | 0/TBD | **Not started.** Current mascot is `MascotAvatar.tsx`, an `Animated`-based component, not yet the approved Rive version. | **HIGH.** The mascot appears on Home, Speak, Coach, the narrated player, and Settings (per `07.1-UI-AUDIT.md` item 4's cross-check). Any "visual consistency" finding about the current mascot's presentation is about to be replaced wholesale. |
| Phase 12 (Brix Mascot — Delight States) | `[ ]` | 0/TBD | **Not started; depends on Phase 11.** | **HIGH**, same reasoning as Phase 11, plus it introduces a brand-new tap-interactive surface that doesn't exist to audit yet. |

**Confirmed from ROADMAP.md verbatim** (Progress section, line 588): *"Phase 13 (UI/UX Polish Audit) is hard-blocked behind Phases 07.1, 5, 8, 10, 11, and 12 — it has been removed from the parallel set ... and should only be planned/executed once those five phases land."* Note the roadmap's own prose here says "those five phases" (07.1, 8, 10, 11, 12 — omitting 5 from the count despite listing it, likely because Phase 5 was already known-complete when this sentence was written) while the dependency note names six including Phase 5. Either reading still fails today: Phase 8's reopened status, and Phase 10/11/12's zero-progress status, mean the hard dependency is **not satisfied** under any reading of "landed."

### Direct answer to the risk question

**Confirmed, not disputed.** Planning and executing Phase 13 broadly right now carries real risk of exactly the two failure modes the roadmap's dependency note anticipated:
1. Re-flagging issues Phase 08.1 is actively fixing (clipping E3/E7, theme races E1, font-scale E2, touch targets/gestures in 08.1-05, control-role consistency E8) — all squarely "visual-consistency/interaction-quality" findings Phase 13 would otherwise independently discover and then have invalidated under it.
2. Re-litigating or auditing UI that is either unbuilt (Le Rapport fixes, report-a-problem flow, Rive mascot, mascot delight states) or will be structurally changed by work not yet started (Settings new rows, PushBanner's extended-kind pattern).

**Recommendation:** Prefer genuinely waiting for Phase 08.1 (closes the reopened a11y/visual defects), Phase 10, 11, and 12 to land before executing Phase 13's full five-screen sweep — this matches the roadmap's own explicit intent and this phase's own stated rationale. If the user wants Phase 13 planning to proceed now regardless (e.g., to not block milestone sequencing, or because GSD's `auto_advance: false` / `parallelization: true` config makes this the next unblocked-looking phase), the planner should narrow scope to a **provably safe subset**: visual-consistency findings on screens/components **not** named in any open Phase 08.1 `files_modified` list and **not** touched by Phase 5/10/11/12's remaining or planned work. In practice today that subset is thin — it would cover structural/layout polish on `app/act.tsx`, `app/fiche.tsx`, `app/den.tsx`'s trail chrome (outside `LessonRich`/`MissionRich`/flashcard internals), and `app/levels.tsx` — i.e., exactly the "Found, not fixed" list already sitting in `07.1-UI-AUDIT.md`. Settings, paywall-nudge, and exam-recording screens should be explicitly deferred from this phase's scope until their respective dependencies land. Do **not** let the planner's first instinct be "plan broadly and let execution skip superseded findings" — that approach still burns a planning/discussion cycle auditing surfaces that will visibly change weeks later, and this repo's own `v1.0-MILESTONE-AUDIT.md` (2026-09-21, now stale but instructive) already recorded one instance of a phase shipping past a dependency gate it declared for itself (Phase 5 vs. Phase 4) as a "process risk" worth avoiding a second time.

## Screens/Components Mapped to Phase 13's Named Scope

All paths relative to `ealch-v2/`. Verified by direct directory listing this session.

| Named scope | File(s) | Notes |
|---|---|---|
| Home | `app/home.tsx`, `app/den.tsx` (the trail) | `den.tsx` is the Concept C spine trail screen built in Phase 07.1; `home.tsx` is the separate dashboard/hero screen. Both named "Home" colloquially in prior audits. |
| Lesson flow | `app/lesson.tsx`, `app/act.tsx`, `app/fiche.tsx`, `app/narrated.tsx`, `app/preroll.tsx`, `src/components/LessonRich.tsx`, `LessonPager.tsx`, `LessonDeck.tsx`, `MissionRich.tsx`, `MissionSection.tsx`, `SilentCards.tsx`, `QuizRoundsView.tsx`, `WordCardXL.tsx`, `ScenePlayer.tsx`, `FlipFace.tsx` (introduced by 08.1), `app/flashcards.tsx` | This is the single largest, most component-dense surface, and the one with the most active concurrent work (Phase 08.1 Stage 3/4/5). |
| Settings | `app/settings.tsx` | Phase 10 will add new rows here (Rate Ealch, Report a problem) — not present yet. |
| Paywall | `app/paywall.tsx`, `src/components/PushBanner.tsx` (shared nudge pattern), `05-GATING-RULE.md` for the ratified rule | Functionally stable (Phase 5 done); the shared banner pattern itself will be extended by Phase 10. |
| Exams | `app/exam.tsx`, `app/exam-paper.tsx`, `app/exam-section.tsx`, `app/exam-report.tsx`, `src/components/ExamSpeakTask.tsx`, `ExamInterlocutorTask.tsx`, `ExamDebateTask.tsx`, `ExamClock.tsx`, `ExamDossier.tsx`, `ExamAudioPart.tsx`, `ExamAudioQueue.tsx` | Also has open structural work pending in Phase 23 (BUG-04/05/06, not a Phase 13 dependency but touches the same files) and Phase 08.1's remaining stages (48dp touch targets, gesture alternatives). |
| Shared UI primitives (cross-cutting) | `src/components/ui.tsx` (`Press`, `Button`, `Card`, `Badge`, `Toggle`, `ProgressBar`, `FocusHeader`, `ScreenBg`), `src/theme/color.ts`, `palette.ts`, `useTheme.ts`, `fonts.ts` | `Button` supports 4 variants (`primary`/`ghost`/`outline`/`danger`) — the canonical control for any "fix-now" button-consistency finding. `Press` is the lower-level primitive; 88 raw `<Press` usages exist app-wide vs. 14 `<Button` usages [VERIFIED: grep count], meaning many screens hand-roll button-like styling on `Press` rather than using `Button` — a legitimate, concrete visual-consistency finding candidate for this phase. |
| Mascot (cross-cutting, named in dependency note) | `src/components/MascotAvatar.tsx`, `MascotVictoryLap.tsx` | Current `Animated`-based implementation; will be replaced by Phase 11/12's Rive version. Any Phase 13 finding about the mascot's current look is near-certain to be invalidated. |

## Reusable Prior Findings — Don't Re-Discover These

Two documents in this repo are themselves prior UI/UX polish audits, directly on-scope for Phase 13. The planner MUST read both and treat their open items as Phase 13's starting backlog, not duplicate the sweep from zero.

### `07.1-concept-c-spine-rewrite-trail-act-screen-language-control/07.1-UI-AUDIT.md`
Dated 2026-09-24, run on a Pixel 6 dev client after the spine shipped. Already found-and-fixed 10 issues (chapter art placement, mission counters, home hero empty space, avatar wiring, Levels page, Fiche sheet detents, resume-recap routing, locked-band start marker). **Still open, not yet scheduled** (its own "Every open item" list, items 5-15):
- Dev client's floating "Tools" gear covers content on every screen (dev-only, won't reproduce on a release build — low priority for Phase 13).
- Home's FR/EN toggle and the in-lesson language chip both read as "language" but control different things — a genuine cross-screen consistency/labeling finding.
- Acte 00 rows are told apart from acts only by a speaker glyph, no explanatory sub-line.
- Trail screen: dev-preview banner and orientation card both introduce the page redundantly (B1 trail only).
- Overview art and act 01's chapter card show the same picture back to back.
- `?at=` deep links via adb arrive URL-encoded (`#`) — a test-recipe artifact, not a user-facing bug.
- Recap's "Ignore" branch not device-reproduced, guarded only by a source test.
- Levels-page lock tags not device-verified as a guest account.
- `ealch-admin` curriculum admin UI still caps levels at C1 (out of mobile-app scope, admin tool).
- Five copies of the PREMIÈRE lock tag not migrated to the shared `PremiereLockTag.tsx` component (D-34) — a concrete, scoped, small/safe "fix-now" candidate.
- `T.narrCta` likely orphaned i18n key.

**Deferred explicitly by Paul** (do not re-raise without new information): lesson header crowds the title to "B1 · LEÇ…"; long mission titles cut off on the act screen; resume-recap text is English-only in the French UI; the in-lesson language chip has no chevron affordance.

### `08-accessibility-retrofit/08-QUALITY-AUDIT.md`
Dated 2026-10-01. Confirmed defects E1-E10 (table in that document) blend accessibility and pure visual/interaction polish:
- **E3/E7** (clipping/truncation on the learning path — `numberOfLines`, fixed-height absolute faces, `<TX style={{flex:1}}>` tail-clip pattern) and **E8** (same logical control rendered as `button` on Home vs. `radio` in Settings — a textbook visual/interaction-consistency finding) are squarely "general UI/UX polish," not narrowly accessibility. **These are mid-fix in Phase 08.1 right now** (Stage 3 = E3/E7, per `08.1-03-PLAN.md`; Stage 7 = E8/E9 role consistency, per `08.1-07-PLAN.md`, not yet executed).
- **E1/E2** (theme-resolution race, font-scale activity restart) are accessibility-coded but have visual symptoms (stale "Automatic · Dark" label, losing scroll/task position) a polish audit would also flag.

**Action for Phase 13 planning:** cross-reference every candidate finding Phase 13 generates against this table before including it in the phase's own findings list. Any match to E1/E2/E3/E7/E8/E9/E10 should be excluded (already owned by Phase 08.1) unless Phase 08.1 has landed and verifiably NOT fixed it (check `08.1-DEVICE-EVIDENCE.md` rows, which only count as `pass` on a preview build per that phase's own evidence protocol).

### `10-feedback-rating-flow/10-PRE-DISCUSSION-AUDIT.md`
Dated 2026-10-01. Pre-catalogues 6 defects (R1-R6) in `app/feedback.tsx` ("Le Rapport") already scoped to FEEDBACK-01/Phase 10, not Phase 13: raw English activity-id labels leaking into French UI (R1), exam misses skewing the accuracy ring to 0% by construction (R2), screen is nearly unreachable — no route from home/profile/settings (R3), zero test coverage (R4), ring a11y labeling (R5), deep-link anchors post-07.1 unverified (R6). **None of these belong to Phase 13** even though they are visual/UX defects — they are explicitly Phase 10's job.

## Standard Stack

### Core
No new libraries are needed for this phase — it is an audit-and-fix phase operating entirely within the existing RN/Expo/TypeScript stack already in `ealch-v2/package.json`. [VERIFIED: directory inspection — no new dependency requirement identified]

### Supporting
| Tool | Purpose | When to Use |
|---|---|---|
| `grep`/ripgrep | Static anti-pattern sweep across `src/components` and `app/` | Primary discovery tool given no guaranteed live device during planning |
| `adb` (Android Debug Bridge) | Device verification of fix-now items, deep-linking to specific screens | Execution-time only, on the Pixel 6/9 already used by every prior device-gated phase in this repo |
| EAS `preview` build/update channel | Carries fixes to a real device for the required device gate | Same pipeline `08.1-EVIDENCE-PROTOCOL.md` already established — reuse verbatim |

### Alternatives Considered
| Instead of | Could use | Tradeoff |
|---|---|---|
| Static grep-based sweep | A visual regression/screenshot-diff tool (e.g., Percy, Chromatic) | Not installed in this repo; introducing one is disproportionate for a bounded polish audit and would itself need a design-spike-level decision. Not recommended. |
| Manual device sweep | Automated RN component-render tests asserting style props | Useful as a *regression guard* after a fix-now item lands (follows Phase 18/22's test convention), not as the discovery mechanism — tests only catch regressions on code you already know to check. |

**Installation:** None required.

## Architecture Patterns

### System Architecture Diagram

```
                     ┌──────────────────────────────┐
                     │   Phase 13 Audit Entry Point   │
                     └───────────────┬────────────────┘
                                     │
          ┌──────────────────────────┼──────────────────────────┐
          │                          │                           │
  ┌───────▼────────┐      ┌──────────▼──────────┐     ┌──────────▼──────────┐
  │ 1. Reconcile    │      │ 2. Static grep sweep  │     │ 3. Cross-check vs.   │
  │ against prior    │      │ (anti-pattern scan   │     │ Phase 08.1/5/10/11/  │
  │ audits           │      │  of screens+components)│     │ 12 open work         │
  │ (07.1-UI-AUDIT,  │      │                       │     │ (exclude overlap)    │
  │  08-QUALITY-     │      └──────────┬───────────┘     └──────────┬──────────┘
  │  AUDIT, 10-PRE-  │                 │                             │
  │  DISCUSSION)      │                │                             │
  └───────┬──────────┘                 │                             │
          │                            │                             │
          └──────────────┬─────────────┴──────────────┬──────────────┘
                         │                            │
                 ┌───────▼────────┐          ┌─────────▼─────────┐
                 │ 4. Consolidated │          │ 5. Triage: fix-now │
                 │ findings list   │─────────▶│ vs. deferred       │
                 │ (deduped)       │          │ (objective rule)   │
                 └─────────────────┘          └─────────┬──────────┘
                                                         │
                               ┌─────────────────────────┼─────────────────────────┐
                               │                                                     │
                       ┌───────▼────────┐                                 ┌──────────▼──────────┐
                       │ 6a. Fix-now:    │                                 │ 6b. Deferred: logged │
                       │ code edit +     │                                 │ in findings doc with │
                       │ unit/component  │                                 │ reason, no code touch│
                       │ test, then      │                                 └──────────────────────┘
                       │ device gate     │
                       │ (adb + EAS       │
                       │ preview, per      │
                       │ 08.1-EVIDENCE-    │
                       │ PROTOCOL.md)       │
                       └────────────────┘
```

### Recommended Project Structure for Phase 13 artifacts
```
.planning/phases/13-ui-ux-polish-audit/
├── 13-RESEARCH.md          # this file
├── 13-CONTEXT.md           # from /gsd-discuss-phase (incl. dependency-wait decision)
├── 13-POLISH-FINDINGS.md   # the consolidated, triaged findings list (success criterion 1)
├── 13-NN-PLAN.md           # one or more execute plans for fix-now items
└── 13-DEVICE-EVIDENCE.md   # reuse 08.1's table format for fix-now device proof
```

### Pattern 1: Reconciliation-first audit
**What:** Before generating any new finding, cross-reference it against `07.1-UI-AUDIT.md`'s open-item list, `08-QUALITY-AUDIT.md`'s E1-E10 table, and `10-PRE-DISCUSSION-AUDIT.md`'s R1-R6 table.
**When to use:** Every candidate finding, before it's added to `13-POLISH-FINDINGS.md`.
**Example:**
```markdown
<!-- Source: this repo's own audit convention, 07.1-UI-AUDIT.md / 08-QUALITY-AUDIT.md -->
| # | Finding | Already owned by | Disposition |
|---|---|---|---|
| F1 | Raw Press styled to look like a button, inconsistent with shared Button component | none (new) | fix-now candidate |
| F2 | <TX flex:1> tail-clip on X screen | 08-QUALITY-AUDIT E7 / Phase 08.1 Stage 3 | EXCLUDE — owned elsewhere |
```

### Pattern 2: Grep-scoped static sweep (reused from `08.1-03-PLAN.md`)
**What:** Run targeted regex greps across `src/components` and `app/` for known anti-pattern signatures, then manually classify every hit (keep/fix/defer) rather than trusting the grep count alone.
**When to use:** The primary discovery mechanism given no guaranteed live device during planning.
**Example:**
```bash
# Source: adapted directly from 08.1-03-PLAN.md Task 1, which used this exact technique for clipping
# Button-consistency candidates: raw Press used where Button would normalize styling
grep -rn "backgroundColor:" ealch-v2/src/components ealch-v2/app | grep -v "ui.tsx\|theme/"

# Hardcoded color bypassing theme tokens (dark-mode-adjacent but a general consistency smell)
grep -rnE "#[0-9a-fA-F]{3,8}['\"]" ealch-v2/src ealch-v2/app | grep -v "theme/palette.ts"

# Truncation/clipping candidates (cross-check against 08-QUALITY-AUDIT E3/E7 before counting as new)
grep -rlnE "numberOfLines|overflow: 'hidden'|<TX style=\{\{flex:1\}\}>" ealch-v2/src/components ealch-v2/app

# Loading/error state gaps: screens with no visible loading or error branch
grep -rLn "isLoading\|loading\|ActivityIndicator\|ErrorScreen" ealch-v2/app/*.tsx
```

### Pattern 3: Device gate reuse (from `08.1-EVIDENCE-PROTOCOL.md`)
**What:** Reuse the exact evidence-table format, preview-build requirement, and USB-Pixel/adb setup already established by Phase 08.1 rather than inventing new verification tooling.
**When to use:** Every fix-now item that changes rendered output.
**Example:**
```markdown
<!-- Source: .planning/phases/08.1-accessibility-quality-pass/08.1-EVIDENCE-PROTOCOL.md -->
| Stage | Screen | Control or check | Observed state | Account | Build | Result |
|---|---|---|---|---|---|---|
```
A row counts only on an EAS `preview`-channel build (release JS), never a dev client — this repo's own protocol documents several reasons a dev build gives false signals (Metro reconnect on activity recreate, dev overlays entering focus order, no packs layer, disabled purchases).

### Anti-Patterns to Avoid
- **Re-sweeping screens with a fresh "find everything" pass with no reconciliation step first:** guaranteed to regenerate `07.1-UI-AUDIT.md`/`08-QUALITY-AUDIT.md`'s findings verbatim, wasting the phase's effort and confusing triage (is a finding new or already scheduled?).
- **Treating "fix-now" as a vibes call:** without an objective size/risk rule (see Triage Framework below), minor-looking fixes can touch shared components (`ui.tsx`, `Type.tsx`) with wide blast radius — exactly the kind of file Phase 08.1's pitfall-watch already warns about re: `Lesson.version`/shared-file risk.
- **Skipping the device gate because "it's just a style tweak":** this repo's evidence protocol explicitly rejects dev-build rows as results; a style fix that looks fine in a dev client can still be wrong on release JS/preview build timing (per `08.1-EVIDENCE-PROTOCOL.md`'s own "Which build" rationale).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---|---|---|---|
| Button-like styling | A new `Press` + manual `backgroundColor`/`borderRadius`/`padding` combo | The existing `Button` component (`src/components/ui.tsx`, 4 variants: `primary`/`ghost`/`outline`/`danger`) | 88 raw `<Press` usages exist vs. 14 `<Button` usages app-wide [VERIFIED: grep count] — any fix-now finding about inconsistent button appearance should normalize onto `Button`, not invent a 5th variant |
| Device evidence table format | A new ad hoc screenshot-and-prose report | The table format and build/account/result columns in `08.1-EVIDENCE-PROTOCOL.md` | Already proven across Phase 08.1's 8 stages; reinventing it fragments this repo's audit-trail convention |
| Dark-mode-safe color | A new hardcoded hex value anywhere outside `src/theme/palette.ts`/`color.ts` | `useTheme()`'s token accessors (`t.acc`, `t.line(n)`, `t.txPrimary`, `t.accA(n)`, etc., as used in `Button`) | 14 files currently reference raw hex outside the theme files [VERIFIED: grep count] — each is a candidate dark-mode/consistency finding, not a pattern to extend |

**Key insight:** This codebase already has the primitives (`Button`, `Card`, `Badge`, `Toggle`, theme token accessors) a polish audit would otherwise recommend building. The actual "polish" work in Phase 13 is almost entirely about finding where screens drifted away from using them, not designing new ones.

## Common Pitfalls

### Pitfall 1: Confusing "plan executed" with "requirement satisfied"
**What goes wrong:** Trusting ROADMAP.md's `[x]` checkbox or a phase's plan-completion count as proof a dependency has landed cleanly.
**Why it happens:** This repo has at least one proven precedent (Phase 8) of all plans executing, the roadmap box getting checked, and the requirements later being formally reopened by a dedicated quality audit after real defects were found in the shipped code.
**How to avoid:** Always check the Progress table's narrative status column and look for any `*-QUALITY-AUDIT.md`/`*-PRE-DISCUSSION-AUDIT.md` sibling document before treating a phase as "landed."
**Warning signs:** A phase with `[x]` in the checklist but an inserted decimal-numbered follow-up phase (`X.1`) still at `0/N` plans.

### Pitfall 2: Treating a "visual polish" finding as isolated from the accessibility work already in flight
**What goes wrong:** E3/E7 (clipping) and E8 (role consistency) in `08-QUALITY-AUDIT.md` are simultaneously accessibility defects AND exactly the kind of visual-consistency finding Phase 13 is scoped to find — rediscovering and "fixing" them inside Phase 13 would race Phase 08.1's own in-flight fix and could produce conflicting edits to the same files (`LessonRich.tsx`, `MissionRich.tsx`, etc.).
**Why it happens:** The accessibility/visual-polish line is genuinely blurry in a component-dense RN codebase; the same `<TX flex:1>` tail-clip affects both a screen-reader user and a sighted user scanning for visual consistency.
**How to avoid:** Any finding matching an open E-code in `08-QUALITY-AUDIT.md`'s table must be excluded from Phase 13's findings list, full stop, regardless of how it was independently discovered.
**Warning signs:** A finding that cites the same file:line already named in `08-QUALITY-AUDIT.md`'s evidence column.

### Pitfall 3: Assuming a live device/emulator will be available during execution
**What goes wrong:** Planning fix-now work that cannot be verified without a device, then discovering (as multiple prior phases in this repo's memory notes did) that `gradlew assembleRelease` is blocked locally by a known reanimated/Ninja failure on Windows, and the only path is an EAS cloud build.
**Why it happens:** RN/Expo device verification assumptions carry over from web development where a local browser suffices.
**How to avoid:** Plan every fix-now task with the EAS `preview`-channel path explicit from the start (per `08.1-EVIDENCE-PROTOCOL.md`'s "Which build" section): JS-only changes go via `eas update --channel preview` after an `@expo/fingerprint` check; any native change needs a new `eas build -p android --profile preview` cloud build.
**Warning signs:** A plan task that says "verify on device" with no build/channel specified.

### Pitfall 4: Scoring a fix as "small, safe" by code-diff size alone
**What goes wrong:** A one-line change to a widely shared component (`ui.tsx`'s `Button`, `Type.tsx`, theme token files) can be small by line count but large by blast radius (every screen using it).
**Why it happens:** "Small, safe" is easy to default to "few lines changed."
**How to avoid:** Define the triage rule (see Triage Framework below) around blast radius and file-sharing, not line count.
**Warning signs:** A "fix-now" classification for any change touching `src/components/ui.tsx`, `src/theme/*`, `Type.tsx`, or `Press`'s core implementation without an explicit blast-radius check.

## Triage Framework: Fix-Now vs. Deferred

The phase's second success criterion demands an *objective* rule, not a judgment call per finding. Recommended rule, synthesized from this repo's own risk patterns (no external framework needed — this is a scoping decision, not a technical unknown):

**Fix-now** requires ALL of:
1. Confined to a single screen or a single leaf component (not a shared primitive in `ui.tsx`/`theme/`/`Type.tsx`/`Press`'s core).
2. No schema, store-migration, or `Lesson.version` implication (this repo's own hard rule — bumping `Lesson.version` wipes learner checkmarks/XP, per multiple phase pitfall-watches).
3. Verifiable with the existing device-gate protocol in under one stage (one commit, one device-row set) — not requiring a new native build.
4. Not already owned by an open item in `07.1-UI-AUDIT.md`, `08-QUALITY-AUDIT.md`, or `10-PRE-DISCUSSION-AUDIT.md` (see Reusable Prior Findings).
5. Not on a screen/component listed in an un-landed dependency's `files_modified` (Phase 08.1's 8 plan files, once Phase 10/11/12 get plans).

**Deferred** is everything else, specifically:
- Anything touching a shared primitive (`Button`, `Press`, theme tokens) — even a "safe-looking" tweak there affects every screen and deserves its own reviewed plan, not a drive-by fix inside an audit phase.
- Anything already deferred by the user in a prior audit (`07.1-UI-AUDIT.md`'s explicit "Deferred by Paul" list) — re-raising these without new information contradicts a already-made decision.
- Anything on a screen/component whose owning dependency phase (08.1/10/11/12) hasn't landed yet.
- Anything requiring a new native build or an EAS build-and-wait cycle disproportionate to a polish fix.

## Code Examples

### Reading the existing Button component before adding a 5th variant or hand-rolling styling
```typescript
// Source: ealch-v2/src/components/ui.tsx:105-157 (read directly this session)
export function Button({
  label, onPress, variant = 'primary', cue = 'tap', disabled, style, icon,
}: {
  label: string;
  variant?: 'primary' | 'ghost' | 'outline' | 'danger';
  // ...
}) {
  const t = useTheme();
  const bg = variant === 'primary' ? t.acc : variant === 'outline' || variant === 'danger' ? 'transparent' : t.line(6);
  const fg = variant === 'primary' ? t.accInk : variant === 'danger' ? t.danger : t.txPrimary;
  // ...
}
```
Any "inconsistent button" finding's fix should map onto one of these four variants and theme accessors — not introduce a new ad hoc style object.

### Reusing the device evidence table format
```markdown
<!-- Source: .planning/phases/08.1-accessibility-quality-pass/08.1-EVIDENCE-PROTOCOL.md, lines 43-53 -->
| Stage | Screen | Control or check | Verbatim TalkBack utterance | Activation outcome | Focus after | Account | Font scale / display size | Build | Result |
```
Adapt column headers for Phase 13 (e.g. "Observed visual state" instead of "Verbatim TalkBack utterance" for non-a11y checks), but keep the Build/Account/Result discipline identical.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|---|---|---|---|
| Phase 8's one-line device sign-off closing out a11y requirements | Per-control verbatim evidence rows, closed only by filled table rows, never by the word "approved" | 2026-10-01, `08-QUALITY-AUDIT.md` → `08.1-EVIDENCE-PROTOCOL.md` | Phase 13 should adopt this stricter evidence discipline from the start rather than repeat Phase 8's mistake and risk its own future quality-audit reopening. |

**Deprecated/outdated:** The original Phase 10 spec (review-gating via sentiment pre-question) is dead per `10-PRE-DISCUSSION-AUDIT.md` S1 — not relevant to Phase 13 directly, but confirms this repo's phases do get substantively rewritten after the roadmap is first written, reinforcing why Phase 13 shouldn't be planned as if Phase 10's final shape is knowable yet.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | The roadmap's "those five phases" (omitting Phase 5 from a six-item dependency list) is a wording slip, not an intentional de-scoping of Phase 5 from the hard dependency | Dependency Risk Assessment | If Phase 5 actually was meant to be excluded, the dependency is slightly less broad than assessed here — but since Phase 5 is functionally complete anyway, this doesn't change the recommendation. LOW risk. |
| A2 | The "thin safe subset" (act.tsx, fiche.tsx, den.tsx trail chrome, levels.tsx) named in the Dependency Risk Assessment is actually free of Phase 08.1 touch — based on reading 08.1's 8 plan files' `files_modified` lists only through Stage 3 (08.1-03-PLAN.md) in full; Stages 4-8 were read only via their one-line ROADMAP summaries, not their own plan files | Dependency Risk Assessment | If Stage 4-8's actual file lists touch act.tsx/fiche.tsx/den.tsx/levels.tsx (plausible, since Stage 5 covers "48 dp targets" and Stage 7 covers "role consistency" app-wide), the "safe subset" is smaller than stated. The planner should re-verify by reading all 8 `08.1-*-PLAN.md` files' `files_modified` frontmatter before finalizing a narrow scope. |
| A3 | No live device/emulator was available this research session, so all "static sweep" grep results are illustrative counts, not a verified exhaustive list of every real polish defect | Architecture Patterns, Standard Stack | A planner executing Phase 13 should re-run these greps at planning/execution time (file contents may have changed) and treat counts as directional, not final. |

## Open Questions

1. **Should Phase 13 wait, narrow-scope, or proceed broadly?**
   - What we know: Phase 08.1/10/11/12 are substantively unlanded; Phase 07.1/5 are substantively landed.
   - What's unclear: Whether the user's milestone-sequencing preference (no mid-milestone launch gate, documented in ROADMAP.md/STATE.md) extends to tolerating a planned-but-execution-deferred Phase 13, or whether they want the planner to actively narrow scope now.
   - Recommendation: Surface this exact question in `/gsd-discuss-phase 13` before any plan is written — this is a locked-decision-worthy fork, not a research-resolvable one.

2. **Is `05-UAT.md`'s untracked `status: testing` state relevant to Phase 13?**
   - What we know: It sits untracked in the Phase 5 folder since 2026-09-23, per STATE.md's Blockers/Concerns section.
   - What's unclear: Whether it records any outstanding paywall UI issue that would be a Phase 13 candidate finding.
   - Recommendation: The planner should read `05-UAT.md` directly (not read in this research pass — it's untracked git status, flagged but not opened) before finalizing paywall scope.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Android device (Pixel 6/9) via USB+adb | Device verification of fix-now items | Not checked this session (no device attached to this research environment) | — | None — this repo's own evidence protocol rejects dev-build/emulator rows as results; execution-time planning must assume a physical device session is scheduled separately |
| EAS CLI / cloud build | Shipping fix-now changes to a device | Not checked this session | — | None viable — local `gradlew assembleRelease` is independently documented as blocked (reanimated/Ninja failure on Windows) |
| ripgrep/grep | Static audit sweep | Available (used throughout this research session) | — | — |

**Missing dependencies with no fallback:**
- Physical Android device session for the required device gate — must be scheduled at execution time; cannot be substituted with an emulator per this repo's own protocol.

## Security Domain

This phase is a visual/interaction polish audit with no new data flows, authentication, or storage changes in scope. `security_enforcement: true` / `security_asvs_level: 1` is set in `.planning/config.json`, but no ASVS category is substantively applicable to style/markup-only fix-now work.

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | No | — |
| V3 Session Management | No | — |
| V4 Access Control | No | Paywall gating rule itself is out of scope (owned by `05-GATING-RULE.md`); Phase 13 may touch paywall *visuals* only |
| V5 Input Validation | No | No new user input surfaces introduced by this phase |
| V6 Cryptography | No | — |

If any fix-now item unexpectedly grows into touching a data flow (e.g., "fixing" a loading state by changing how a fetch is triggered), the planner should re-flag it against ASVS and consider whether it has silently expanded beyond polish scope.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Jest + jest-expo + React Native Testing Library (component-render), plus `node --test` (pure-logic), both established in Phase 18 |
| Config file | `ealch-v2/jest.config.*` (component), native `node --test` runner for `*.logic.test.ts` |
| Quick run command | `npm run test:component -- --runInBand --silent` (component), `npm test` (logic) |
| Full suite command | Same two commands — this repo's two suites are both fast enough to run per-plan per `08.1-EVIDENCE-PROTOCOL.md`'s own gate |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| UX-01 | Fix-now item renders without the flagged defect (e.g., no clipping, correct button variant) | component-render | `npm run test:component -- <new test file> --runInBand --silent` | ❌ Wave 0 — one new test per fix-now item, following the Phase 18 `TESTING.md` recipe |

### Sampling Rate
- **Per task commit:** `npm run typecheck && npm test` (fast pure-logic gate)
- **Per wave merge:** `npm run test:component -- --runInBand --silent` plus the device gate for any visual fix
- **Phase gate:** Full suite green before `/gsd-verify-work`, plus every fix-now item's device-evidence row at `pass`

### Wave 0 Gaps
- [ ] No existing test file renders any of the lesson-flow components (`LessonRich.tsx`, `MissionRich.tsx`, etc.) under RNTL beyond what Phase 18/08.1 already add — any fix-now item there needs its own new test file, following `ealch-v2/TESTING.md`'s recipe (written by Phase 18).
- [ ] `.planning/phases/13-ui-ux-polish-audit/13-DEVICE-EVIDENCE.md` does not exist yet — create it following `08.1-EVIDENCE-PROTOCOL.md`'s table format before any device-gated task.

## Sources

### Primary (HIGH confidence)
- `.planning/ROADMAP.md` (full file, both halves read this session) — phase checklist, Progress table, box-vs-table reconciliation, Phase 13's own dependency note
- `.planning/STATE.md` — decision log, Blockers/Concerns, Pending Todos
- `.planning/REQUIREMENTS.md` — UX-01 and full traceability table
- `.planning/phases/07.1-concept-c-spine-rewrite-trail-act-screen-language-control/07.1-UI-AUDIT.md` (full file read)
- `.planning/phases/08-accessibility-retrofit/08-QUALITY-AUDIT.md` (full file read)
- `.planning/phases/08.1-accessibility-quality-pass/08.1-EVIDENCE-PROTOCOL.md` (full file read)
- `.planning/phases/08.1-accessibility-quality-pass/08.1-03-PLAN.md` (full file read, grep methodology)
- `.planning/phases/10-feedback-rating-flow/10-PRE-DISCUSSION-AUDIT.md` (partial, R1-R6 table + S1-S6 read)
- Direct repo inspection: `ealch-v2/app/*.tsx` directory listing, `ealch-v2/src/components/ui.tsx` (`Button` definition, lines 105-157), `grep` counts for `<Button`/`<Press`/hardcoded hex colors

### Secondary (MEDIUM confidence)
- `.planning/v1.0-MILESTONE-AUDIT.md` (dated 2026-09-21 — now stale; many phases it lists as "not started" have since executed, e.g. Phase 5/6/7/07.1/18/22.1. Used only for its still-relevant process-risk pattern precedent, not for current phase-status facts.)

### Tertiary (LOW confidence)
- None — this research relied entirely on direct repo artifacts, no external web search was needed since the domain is this specific codebase's own history, not a general library/framework question.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new tooling needed, directly verified by directory listing
- Architecture/screen mapping: HIGH — directly verified by `ls`/`grep` against the actual repo
- Dependency-gap risk assessment: HIGH — directly verified against ROADMAP.md/STATE.md/the two quality-audit documents, cross-checked against three independent sources (roadmap prose, progress table, quality-audit documents)
- Pitfalls: HIGH — every pitfall cited traces to a specific, named incident already recorded in this repo's own memory/audit trail, not a generic RN pitfall list
- Audit methodology: MEDIUM — synthesized by direct analogy to this repo's own prior audit (`08.1-03-PLAN.md`'s grep technique), not validated against an external UI-audit framework (none was needed; this is a codebase-specific scoping problem, not a technical-unknown problem)

**Research date:** 2026-10-13
**Valid until:** This research is highly time-sensitive on one axis only — the Dependency Risk Assessment table. Re-check Phase 08.1/10/11/12's plan-execution counts in ROADMAP.md immediately before planning, since any of them landing changes the recommendation. Everything else (file paths, component APIs, prior audit findings) is stable for at least 30 days absent a major refactor.
