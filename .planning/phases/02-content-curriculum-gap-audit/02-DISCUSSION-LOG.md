# Phase 2: Content & Curriculum Gap Audit - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-19
**Phase:** 2-Content & Curriculum Gap Audit
**Areas discussed:** Audit depth, Exam paper scope, Gap output format, Quality vs. coverage boundary

---

## Audit depth

| Option | Description | Selected |
|--------|-------------|----------|
| Structural + pedagogical fields | Verify canDo/themes/prereqUnitIds are filled in, not just unit existence | |
| Structural only | Confirm unit/lesson counts match spine, no empty lessonIds | |
| Structural + known thin-spots | Skip pedagogical sweep; re-check memory-flagged trouble spots | |
| Everything (structural + pedagogical + thin-spots) | Most thorough combination | ✓ |

**User's choice:** Everything (structural + pedagogical + thin-spots)
**Notes:** Orchestrator had already verified live DB shows 75/75 units matching the approved spine with zero empty lessonIds — user chose the most thorough option anyway given a naive structural check would likely just confirm what's already known.

| Option | Description | Selected |
|--------|-------------|----------|
| Direct DB/source reads only | Verify every claim by direct read, never trust probe/audit script output at face value | ✓ |
| Use existing tooling, spot-check a sample | Run existing scripts for speed, manually verify a sample | |
| Trust existing tooling as-is | Fastest — take existing script output at face value | |

**User's choice:** Direct DB/source reads only
**Notes:** Motivated by this project's documented history of false absences/positives in automated content-checking tools (corpus:probe accent misses, CEFR heuristic false flags, guard false positives).

---

## Exam paper scope

| Option | Description | Selected |
|--------|-------------|----------|
| Re-verify structural conformance | Check section/task lengths against the format spec | ✓ |
| Existence + publish-status only | Faster, treats length conformance as separate from coverage | |

**User's choice:** Re-verify structural conformance
**Notes:** Motivated by memory noting some papers shipped Section F at half length.

**Ad-hoc finding surfaced mid-discussion:** Orchestrator found via live DB query that all three exam formats have exactly 5 papers each (15 total), contradicting a memory entry citing "11 papers" as the locked scope.

| Option | Description | Selected |
|--------|-------------|----------|
| Target was revised to 5 — not a gap | 5/format is current correct target; memory is stale | ✓ |
| This IS a real gap — surface it | 5/11 (or 5/10) is a genuine shortfall to log | |
| Not sure — audit should investigate and report | Defer the determination to the audit itself | |

**User's choice:** Target was revised to 5 — not a gap
**Notes:** Orchestrator's own memory was corrected in place: the "11 papers" figure (5 TEF + 5 TCF + 1 DELF) was superseded once DELF was later expanded from 1 to 5 papers (per [[ealch-delf-pack-build]]), bringing the real final total to 15. Memory file `ealch-exam-pack-redesign.md` updated to note the supersession.

| Option | Description | Selected |
|--------|-------------|----------|
| Yes, log it as a finding | DELF blanc-02–05 audio was never listened to before promotion (E8 marking skipped) | ✓ |
| No, that's a known accepted risk | Already a deliberate trade-off Paul made; don't re-surface | |

**User's choice:** Yes, log it as a finding
**Notes:** ~2 hours of unverified French audio across 4 papers — a concrete, named gap fitting CONTENT-01's exact intent.

---

## Gap output format

| Option | Description | Selected |
|--------|-------------|----------|
| GAPS.md backlog doc | Single findings doc; triage into phases/deferrals later | |
| New ROADMAP phases immediately | Each real gap becomes its own phase right away | |
| Both | GAPS.md for detail/evidence + immediate ROADMAP stubs for phase-sized findings | ✓ |

**User's choice:** Both
**Notes:** —

| Option | Description | Selected |
|--------|-------------|----------|
| Multi-session content builds get a phase | Full lesson/unit build or multi-paper re-render scale gets a phase now; single-item fixes stay in GAPS.md | ✓ |
| You decide per-finding when the audit runs | No pre-set threshold; judge each finding at audit time | |

**User's choice:** Multi-session content builds get a phase
**Notes:** —

---

## Quality vs. coverage boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Coverage only | Stay scoped to curriculum topics/units/lessons/papers; quality bugs stay in BUG-*/QA-* | |
| Coverage + already-known quality defects | Also re-surface known quality defects from memory as part of this audit | ✓ |

**User's choice:** Coverage + already-known quality defects
**Notes:** Examples discussed: numbers scored wrong, 19 playlists sharing one voice drill, 81 flashcards shipping build-note text.

| Option | Description | Selected |
|--------|-------------|----------|
| Yes, cross-reference, don't duplicate | List overlapping defects in GAPS.md pointing to the phase/requirement that already owns the fix | ✓ |
| List everything found, dedup later | Capture everything now, sort ownership out during phase planning | |

**User's choice:** Yes, cross-reference, don't duplicate
**Notes:** Prevents double-tracking against BUG-01/02/03, QA-01/02 and their phases (7, 9).

---

## Claude's Discretion

- Exact GAPS.md format/layout and severity taxonomy (follow the spirit of existing VERIFICATION.md/REVIEW.md conventions)
- Order of investigation (curriculum spine vs. exam papers first) and plan/wave split
- Implementation detail: ad-hoc script vs. direct SQL for the audit itself

## Deferred Ideas

None — discussion stayed within phase scope. Quality-defect cross-referencing (D-09) explicitly routes overlapping concerns to Phases 7/9 rather than deferring anything new or undecided.
