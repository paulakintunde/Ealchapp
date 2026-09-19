# Phase 2: Content & Curriculum Gap Audit - Context

**Gathered:** 2026-09-19
**Status:** Ready for planning

<domain>
## Phase Boundary

Systematically audit the shipped A1/A2 curriculum and TEF/TCF/DELF exam content against the intended curriculum plan, and produce a concrete, named list of any remaining gaps. This is a discovery/audit phase — no content is authored or fixed inside this phase; every finding becomes a scoped follow-up item. Closes CONTENT-01.

Pre-audit facts already verified by direct DB read on 2026-09-19 (do not re-derive, but DO verify current-at-planning-time since content changes daily):
- Unit spine matches the approved curriculum exactly: SONS 10 + A1 30 + A2 35 = 75/75 units, zero units with empty `lessonIds`. The 2026-08-24 structural gap-closure (`author-full-curriculum-spine.ts`) is complete.
- 15 exam papers exist, 5 each for TEF Canada / TCF Canada / DELF B2, all `status: published`. This is the current, correct target (NOT the earlier "11 papers" figure from `EXAM-PACK-REDESIGN.md`'s original locked scope — DELF was later expanded from 1 paper to 5; see canonical refs).

</domain>

<decisions>
## Implementation Decisions

### Audit depth
- **D-01:** Audit goes beyond structural existence checks. Also verify the pedagogical fields (`canDo`/`themes`/`prereqUnitIds` from `update-spine.ts`'s pass) are actually filled in and coherent per unit, not just that the unit row exists.
- **D-02:** Also specifically re-check memory-flagged known thin spots (e.g. the b2.01 stub removal leaving an empty PE@b2 remediation slot) as targeted checks, not just a blanket sweep.
- **D-03:** Do NOT trust existing audit/probe tooling output (`corpus:probe`, CEFR heuristic checks, spine-drift tests, etc.) as evidence on its own. This project has a documented history of such tools producing false absences/positives (accented-word probe misses, CEFR heuristic false flags, guard false positives on legitimate content). Every claim in the final findings must be backed by a direct read of `content_units`/`content_items`/source files, not by trusting a script's report at face value.

### Exam paper scope
- **D-04:** Re-verify structural conformance for each of the 15 exam papers (section lengths, task counts, document duration bands) against the format's STANDARD spec — not just existence/publish-status. This is meant to catch issues like the known "Section F shipped at half length" pattern.
- **D-05:** Flag as a named finding: DELF blanc-02 through blanc-05 were promoted to `published` without their audio ever going through the E8 marking/listening pass (~2 hours of unverified French audio across 4 papers). This is a real, specific, already-known gap that CONTENT-01 exists to surface — log it as a follow-up (an audio QA pass), do not silently treat it as settled.

### Gap output format
- **D-06:** Produce a `GAPS.md` findings document in the phase directory. Every finding gets: what was checked, the specific named gap (theme/unit/lesson id/paper), severity, and either a scope estimate for a follow-up content-build item or an explicit deferral reason.
- **D-07:** In addition to GAPS.md, any finding comparable in scope to a full lesson/unit build or a multi-paper audio re-render gets a new stub phase added to ROADMAP.md immediately (not deferred to a later triage session). Single-item fixes (one thin lesson, one unlistened paper) stay recorded only in GAPS.md as named, scoped items — they do not need their own phase.

### Quality vs. coverage boundary
- **D-08:** "Gap" for this phase includes both coverage gaps (missing/thin curriculum topics) AND already-known content-quality defects sitting in project memory (e.g. numbers scored wrong, all 19 playlists sharing one voice drill, 81 flashcards shipping build-note text to users, the DELF audio-unheard issue in D-05).
- **D-09:** Before adding any quality defect as a new GAPS.md finding, cross-reference it against existing roadmap requirements (BUG-01/02/03, QA-01/02, and their phases — 7, 9). If a defect is already owned by an existing requirement/phase, list it in GAPS.md as "already tracked — see Phase {N}/{REQ-ID}", not as a new duplicate finding. Only genuinely new-to-tracking defects get logged as fresh GAPS.md items.

### Claude's Discretion
- Exact GAPS.md format/layout (table vs. per-finding sections) and exact severity taxonomy — pick something consistent with how VERIFICATION.md/REVIEW.md already present findings elsewhere in this project (severity-classified, file/id-referenced).
- Order of investigation (curriculum spine first vs. exam papers first) and how the audit is split across plans/waves.
- Whether the audit needs to run any code (e.g. a one-off script reading `content_units`) versus doing everything via direct SQL queries — implementation detail, not a user-facing choice.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Curriculum spine
- `ealch-admin/scripts/author-full-curriculum-spine.ts` — the 2026-08-24 structural gap-closure pass; documents the approved Stage 0/1/2 curriculum shape (SONS 10, A1 30, A2 35) that the audit checks against
- `ealch-admin/scripts/update-spine.ts` — the pedagogical pass (canDo/themes/prereqUnitIds); documents which units it was last run against — verify it actually covers all 75 current units, per its own header comment about needing extension after new units are added
- `ealch-admin/scripts/_spine_reconcile.ts` — reconciliation script referenced in project memory ([[ealch-spine-script-drift]]) — read for the established reconciliation pattern

### Exam pack
- `ealch-admin/EXAM-PACK-REDESIGN.md` — original research, format blueprints, locked decisions (§11) — note the "11 papers" scope figure here is superseded (see Phase Boundary above)
- `ealch-admin/exam-blueprints/` — STANDARD-{format}.md files define per-section/task length and structure conformance targets for D-04's structural re-verification
- `ealch-admin/exam-blueprints/BLUEPRINT-delf-b2.md` §1 — the two-DELF-format gotcha (only sample 3 is current; samples 1/2 are the old format)

### Requirements & roadmap
- `.planning/REQUIREMENTS.md` — CONTENT-01 (this phase's requirement), and BUG-01/02/03, QA-01/02 (the requirements D-09's cross-reference check must consult)
- `.planning/ROADMAP.md` — Phase 2 section (goal, success criteria); Phases 7 and 9 (where cross-referenced quality defects may already be owned)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `content_units` table (`ealch-admin/src/db/schema.ts`) — `body` jsonb carries `lessonIds`, `canDo`, `themes`, `prereqUnitIds` per unit; queryable directly for the D-01/D-02 structural + pedagogical checks
- `content_exam_papers` / `content_exam_tasks` / `content_exam_sections` tables — carry `format`, `variant`, `paper_no`, `status`, and section/task structure for D-04's conformance re-verification
- `scripts/exam/check-speech-rate.ts` — existing per-pack speech-rate/envelope checker (per [[ealch-tcf-pack-complete]]) — informs what "structural conformance" means for audio-bearing sections, though per D-03 its output should be spot-verified, not trusted blindly

### Established Patterns
- This project has a strong precedent (documented in PROJECT.md's Key Decisions table) of trusting direct source reads over static-analysis/tooling claims when they conflict — D-03 extends that same discipline to this audit.
- VERIFICATION.md / REVIEW.md (from `/gsd-verify-work` and `/gsd-code-review`) already establish a severity-classified, evidence-cited findings format in this project — GAPS.md should follow a similar spirit (per Claude's Discretion above).

### Integration Points
- GAPS.md lives in `.planning/phases/02-content-curriculum-gap-audit/`.
- Any phase-worthy finding (per D-07) gets inserted into `.planning/ROADMAP.md` following the existing phase-insertion convention already used for the 2026-09-19 roadmap revisions (decimal notation reserved for post-approval urgent insertions; a fresh audit finding is neither urgent nor an insertion, so it likely takes the next integer slot — planner's call).

</code_context>

<specifics>
## Specific Ideas

No UI/visual specifics — this is a data-audit phase producing a written report, not app-facing work.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope. The quality-defect cross-referencing (D-09) explicitly routes overlapping concerns to their existing phases (7, 9) rather than deferring anything new.

</deferred>

---

*Phase: 2-Content & Curriculum Gap Audit*
*Context gathered: 2026-09-19*
