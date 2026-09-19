---
phase: 02
slug: content-curriculum-gap-audit
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-09-19
---

# Phase 02 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.
> This phase produces no shippable code — it produces an audit findings document (GAPS.md). "Tests" here means: does every claim in GAPS.md trace to a direct query result or file read (per CONTEXT.md D-03), and does the phase close with the exact traceability statement CONTENT-01's success criteria require.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | N/A for this phase's own output (no new code). Existing `node --test` (ealch-admin) and ealch-v2's test suite remain the app's test suites and are unaffected by this phase. |
| **Config file** | none — see Wave 0 |
| **Quick run command** | N/A — see Manual-Only Verifications |
| **Full suite command** | N/A |
| **Estimated runtime** | N/A |

---

## Sampling Rate

- **After every task commit:** Re-read the relevant slice of GAPS.md and confirm the new/updated finding cites a query result or file read, not a trusted-tool-output claim (D-03)
- **After every plan wave:** Re-read GAPS.md in full for citation completeness across all findings added so far
- **Before `/gsd-verify-work`:** Confirm (a) GAPS.md exists and every entry cites direct evidence, (b) any phase-worthy finding (per D-07) has a corresponding ROADMAP.md stub phase, (c) CONTENT-01's row in REQUIREMENTS.md is updated to reflect the audit's actual outcome
- **Max feedback latency:** N/A (no automated test loop; feedback is a human re-read of GAPS.md per wave)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 02-01-01 | 01 | 0 | CONTENT-01 | T-02-01 | Supabase project confirmed `ACTIVE_HEALTHY` before any SQL audit query runs | manual | N/A — MCP `get_project` status check | ❌ W0 | ⬜ pending |
| 02-0X-0X | TBD | 1+ | CONTENT-01 | T-02-01 | Every GAPS.md finding cites a direct query result or file path/line, never a trusted tool-report alone | manual | N/A — re-read GAPS.md | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

*(Full per-task rows to be filled in by the planner once tasks are broken out across plans/waves — this phase's tasks are inherently manual/read-only, not automated-test-shaped.)*

---

## Wave 0 Requirements

- [ ] `.planning/phases/02-content-curriculum-gap-audit/GAPS.md` — does not exist yet; this phase's primary deliverable, created empty/skeleton in Wave 0 and filled in across later waves
- [ ] Confirm Supabase project `ogbothupjcivwruesgsu` is `ACTIVE_HEALTHY` (restore + poll if `INACTIVE`, per RESEARCH.md Environment Availability — requires explicit user go-ahead, not a silent auto-mode action) before any Wave 1+ SQL-based audit task runs

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|--------------------|
| Every A1/A2 unit's structural + pedagogical fields match the approved spine | CONTENT-01 | This is a discovery audit against live DB rows and source files, not a behavior a unit test can assert without re-implementing the audit itself | Query `content_units` directly (not via `corpus:probe` or other flagged tooling per D-03), cross-reference `body.lessonIds`/`canDo`/`themes`/`prereqUnitIds` against `author-full-curriculum-spine.ts` and `update-spine.ts`, record findings with unit id in GAPS.md |
| Each of the 15 exam papers matches its format's structural conformance targets | CONTENT-01 | Structural conformance (section/task counts, duration bands) is a comparison against blueprint documents, not a runnable assertion | Read `ealch-admin/exam-blueprints/STANDARD-*.md` targets, query `content_exam_papers.sections` (jsonb array) directly, compare counts/bands, record any mismatch in GAPS.md with paper id |
| Known-flagged tooling (corpus:probe, CEFR/nasal heuristics, guards, id-range checks) is not trusted as sole evidence | CONTENT-01 / D-03 | These tools have a documented history of false positives/negatives in this exact codebase (see RESEARCH.md Common Pitfalls) — their output can inform investigation but every claim needs an independent direct-read confirmation | For any finding sourced from one of these tools, perform a second, independent direct query/file read before recording it in GAPS.md |
| CONTENT-01 closing statement (if no gaps found) | CONTENT-01 success criterion 3 | This is a written attestation, not a machine-checkable condition | Confirm GAPS.md (or a closing section within it) explicitly states what was checked and that CONTENT-01 closes as "audited, no gaps" if that is the actual outcome |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies — N/A automated; all tasks are manual per the nature of this audit phase, documented above
- [x] Sampling continuity: no 3 consecutive tasks without automated verify — N/A, this phase has no automated test loop; substituted with mandatory per-finding citation requirement (D-03) checked every task
- [x] Wave 0 covers all MISSING references — GAPS.md skeleton + Supabase health check listed above
- [x] No watch-mode flags — N/A, no test runner involved
- [x] Feedback latency < N/A — no automated feedback loop applies to this phase
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
