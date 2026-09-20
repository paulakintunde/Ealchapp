---
phase: 02-content-curriculum-gap-audit
plan: 05
subsystem: content
tags: [postgres, gap-audit, curriculum-spine, exam-papers, requirements-traceability]

# Dependency graph
requires:
  - phase: 02-content-curriculum-gap-audit (Plan 02)
    provides: 02-EVIDENCE-spine.md (SPINE-01..04 findings, curriculum spine)
  - phase: 02-content-curriculum-gap-audit (Plan 03)
    provides: 02-EVIDENCE-exams.md (EXAM-01..04 findings, exam paper structure/audio)
  - phase: 02-content-curriculum-gap-audit (Plan 04)
    provides: 02-EVIDENCE-defects.md (DEF-01 finding, content-item notes contamination)
provides:
  - GAPS.md Finding Index mapping 9 local ids (SPINE/EXAM/DEF) to GAP-01..09
  - GAPS.md D-09 cross-reference against the full REQUIREMENTS.md traceability table
  - GAPS.md Findings section with 9 named, evidence-cited, severity-classified gaps
affects: [02-06 (roadmap stubs and CONTENT-01 closing statement)]

# Tech tracking
tech-stack:
  added: []
  patterns: []

key-files:
  created: []
  modified:
    - .planning/phases/02-content-curriculum-gap-audit/GAPS.md

key-decisions:
  - "All 9 local findings classified 'new' — none is owned by an existing requirement; Already Tracked Elsewhere records 'None' with per-requirement reasoning"
  - "GAP-03/GAP-04 (PE@b2, PO@b2 remediation slots) scoped as Deferral, not Scope estimate, because the full fix would introduce a new taught curriculum level, which conflicts with PROJECT.md's explicit Out-of-Scope decision"
  - "GAP-06/GAP-07 flagged Phase-worthy (D-07): yes — both are multi-paper audio verification/QA efforts comparable to the plan's own 'multi-paper audio re-render' phase-worthy example"
  - "GAP-08 (no audio-attestation schema field) flagged Phase-worthy: no — a targeted schema addition, not lesson/unit-build scale, though it underlies GAP-06/GAP-07 being durably recordable"

patterns-established: []

requirements-completed: []

# Metrics
duration: ~12min
completed: 2026-09-20
---

# Phase 2 Plan 05: D-09 Cross-Reference + GAPS.md Findings Summary

**Classified all 9 findings from Plans 02-04's evidence files as new-to-tracking (none owned by an existing requirement) and wrote GAPS.md's Finding Index, D-09 cross-reference, and 9 fully evidence-cited GAP entries.**

## Performance

- **Duration:** ~12 min
- **Tasks:** 2 completed
- **Files modified:** 1 (`GAPS.md`)

## Accomplishments

- Enumerated all 9 local findings from `02-EVIDENCE-spine.md` (SPINE-01..04), `02-EVIDENCE-exams.md` (EXAM-01..04), and `02-EVIDENCE-defects.md` (DEF-01) into one Finding Index, mapped to `GAP-01`..`GAP-09` in spine/exam/defect order
- Cross-referenced every finding against the full `REQUIREMENTS.md` traceability table (BUG-01/02/03, QA-01/02, A11Y-01..04, UX-01, PERF-01/02, SEC-01, and the rest) — none matched, all 9 are new-to-tracking
- Wrote all 9 `GAP-nn` blocks with the required six labels each (`Checked`, `Finding`, `Severity`, `Evidence`, `Cross-reference (D-09)`, `Phase-worthy (D-07)`) plus exactly one of `Scope estimate`/`Deferral`
- Finalized GAPS.md frontmatter: `status: gaps-found`, `units_checked: 75/75`, `exam_papers_checked: 15/15`, `new_findings: 9`, `already_tracked_findings: 0`

## Task Commits

Each task was committed atomically:

1. **Task 1: D-09 cross-reference — classify every finding as new or already tracked** - `5a240bf` (docs)
2. **Task 2: Write the GAPS.md Findings section (D-06)** - `8956fb7` (docs)

_Note: this plan is docs-only (D-09 cross-reference + GAPS.md authoring); no code, so no feat/fix/test commits._

## Files Created/Modified

- `.planning/phases/02-content-curriculum-gap-audit/GAPS.md` - Finding Index, Already Tracked Elsewhere (D-09), and Findings (D-06) sections populated; frontmatter finalized

## Decisions Made

- All 9 findings classified `new` — the D-09 cross-reference against the full requirement set (not just the plan's named minimum of BUG-01/02/03, QA-01/02) returned no owner for any finding, so `## Already Tracked Elsewhere (D-09)` records "None" with the per-requirement reasoning that produced that answer.
- GAP-03 and GAP-04 (the PE@b2 and PO@b2 exam-remediation routing gaps) are recorded with a `Deferral`, not a `Scope estimate`, because their full fix (a prep lesson at b2) would require introducing b2 as a taught curriculum level — which conflicts directly with `PROJECT.md`'s own Out-of-Scope decision ("New curriculum levels beyond A1/A2/exams... user decision 2026-09-19"). Both are flagged `Phase-worthy (D-07): no` for the same reason, so Plan 06 does not mistakenly stub an out-of-scope roadmap phase from these.
- GAP-06 (TEF speech-rate spot-check) and GAP-07 (DELF audio never QA'd) are flagged `Phase-worthy (D-07): yes` — both match the plan's own "multi-paper audio re-render" phase-worthy example (verification/re-render across 5 TEF papers; audio QA across 4 DELF papers, ~37 minutes).
- GAP-08 (no schema field for audio-listening attestation) is flagged `Phase-worthy: no` — it's a targeted schema/tooling addition, not lesson/unit-build scale, even though it's a prerequisite for GAP-06/GAP-07's work being durably recorded in the future.

## Deviations from Plan

None — plan executed exactly as written. Both tasks' automated verification scripts passed on the first attempt (Task 1: Finding Index row count 9 = evidence finding count 9, all five named requirement IDs present in the D-09 section; Task 2: all 9 `### GAP-` blocks carry all six required labels and exactly one of Scope estimate/Deferral, no prohibited scope-reduction language, frontmatter finalized to real totals).

## Issues Encountered

One verification-script friction, not a plan or content issue: the acceptance-criteria checker's `grep -qiF "$bad" "$F"` invocation (combining `-i` and `-F` on this environment's grep build) aborted with a core dump rather than returning a clean non-match. Re-ran the same prohibited-language check with a simpler `grep -i -- "$bad" "$F"` per phrase, which completed cleanly and confirmed none of the four prohibited phrases ("simplified version", "static for now", "basic version", "will be wired later") appear anywhere in `GAPS.md`. No fix needed in `GAPS.md` itself; this was purely a shell/grep-flag interaction issue while confirming a check the plan already specified.

## User Setup Required

None - no external service configuration required. This plan issued no database statement and touched no code; it only edited a git-tracked planning document.

## Next Phase Readiness

- Plan 06 can now read every `**Phase-worthy (D-07):**` flag directly from `GAPS.md`'s 9 `GAP-nn` entries to decide which findings (if any) warrant a roadmap stub phase — GAP-06 and GAP-07 are the two candidates flagged `yes`.
- `## Gaps Summary` remains the one placeholder left in `GAPS.md` (`_(populated by Plan 06)_`), per this plan's own scope boundary (Plan 06 owns the roadmap stubs and the CONTENT-01 closing statement).
- No blockers. All evidence carried forward verbatim from Plans 02-04's evidence files; no re-querying of the database was needed or performed (per this plan's own threat-model constraint, T-02-01).

---
*Phase: 02-content-curriculum-gap-audit*
*Completed: 2026-09-20*

## Self-Check: PASSED

- FOUND: `.planning/phases/02-content-curriculum-gap-audit/GAPS.md`
- FOUND: `.planning/phases/02-content-curriculum-gap-audit/02-05-SUMMARY.md`
- FOUND: commit `5a240bf` (Task 1)
- FOUND: commit `8956fb7` (Task 2)
