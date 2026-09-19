# Phase 2: Content & Curriculum Gap Audit - Pattern Map

**Mapped:** 2026-09-19
**Files analyzed:** 3 (this phase's own deliverables — no application source is created or modified)
**Analogs found:** 3 / 3

## Scope note (read before using this map)

Per `02-CONTEXT.md`'s Phase Boundary and `02-RESEARCH.md`'s Summary, this phase authors **no application code**. It is a read-only audit against Postgres/seed.json/blueprint docs. The planner should NOT invent controller/service/component files here. The only artifacts this phase produces are:

1. `GAPS.md` — the phase's primary deliverable, a findings document (required, D-06)
2. Optionally, one or more one-off, strictly `SELECT`-only Node/`tsx` query scripts, used as scratch tooling to gather evidence for GAPS.md (Claude's Discretion in CONTEXT.md — "whether the audit needs to run any code... versus doing everything via direct SQL queries")
3. `.planning/ROADMAP.md` — an edit inserting stub phase(s), only if a finding is phase-worthy (D-07)
4. `.planning/REQUIREMENTS.md` — a traceability-row status edit for `CONTENT-01` at phase close (matching the precedent Phase 1 left, see below)

There is no "controller/service/component" classification that applies here. The table below classifies these against the closest available roles (findings-doc, audit-script, planning-doc-edit) instead of forcing them into an app-layer taxonomy.

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|---|---|---|---|---|
| `.planning/phases/02-content-curriculum-gap-audit/GAPS.md` | findings-doc (planning artifact) | batch (evidence-gather → written report) | `.planning/phases/01-content-publish-drift-guard-extension/01-VERIFICATION.md` (severity/evidence table shape) + `01-REVIEW.md` (per-finding narrative shape) | exact (same project, same findings-doc genre, most recently produced) |
| One-off audit query script(s) (e.g. `ealch-admin/scripts/_audit-spine-coherence.ts`, `ealch-admin/scripts/_audit-exam-conformance.ts`) — optional, Claude's Discretion | utility / read-only audit script | request-response (one-shot `pg` query → console report, non-zero exit optional) | `ealch-admin/scripts/exam/check-orphans.ts` (report-only branch) and `ealch-admin/scripts/exam/check-speech-rate.ts` (multi-target conformance-vs-spec report) | exact (both are current, existing read-only-by-default audit scripts already following the exact "query Postgres, print a report, `process.exitCode = 1` on findings" shape this phase needs) |
| `.planning/ROADMAP.md` (conditional edit, only if D-07 fires) | config / planning-doc | transform (append phase entry + table row) | Roadmap's own 2026-09-19 revision note (self-documented in `ROADMAP.md` lines 15-17) — the existing "insert a new phase" convention | role-match (no separate analog file exists; the roadmap documents its own insertion convention inline) |
| `.planning/REQUIREMENTS.md` (conditional edit, traceability row status) | config / planning-doc | transform (status field flip) | Phase 1's precedent: `PUBLISH-01`/`PUBLISH-02` rows, and `01-VERIFICATION.md`'s note that this bookkeeping step was left pending after Phase 1 | exact (literally the same table, same "Pending" → status edit this phase will need to make for `CONTENT-01`) |

## Pattern Assignments

### `GAPS.md` (findings-doc, batch)

**Analogs:** `.planning/phases/01-content-publish-drift-guard-extension/01-VERIFICATION.md` (table-driven, evidence-cited) and `01-REVIEW.md` (severity-classified, per-finding prose with fix suggestions)

**Frontmatter pattern** (VERIFICATION.md lines 1-7 / REVIEW.md lines 1-17):
```yaml
---
phase: 01-content-publish-drift-guard-extension
verified: 2026-09-19T22:00:00Z
status: passed
score: 4/4 roadmap success criteria verified; 2/2 requirements satisfied
overrides_applied: 0
---
```
For GAPS.md, adapt to an audit-shaped frontmatter, e.g.:
```yaml
---
phase: 02-content-curriculum-gap-audit
audited: <date>
status: <gaps-found | no-gaps>
units_checked: 75/75
exam_papers_checked: 15/15
new_findings: <n>
already-tracked_findings: <n>
---
```

**Evidence-table pattern** (`01-VERIFICATION.md` lines 20-26, the "Observable Truths" table) — copy this shape for spine/exam checks, one row per checked dimension, every "Status" cell backed by a concrete citation, never a trusted-tool claim (this directly satisfies CONTEXT.md's D-03):
```markdown
| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | ... | ✓ VERIFIED | `file.ts:12-18` does X; live query result: `<pasted row(s)>` |
```

**Severity-classified per-finding pattern** (`01-REVIEW.md` lines 51-162, the Warnings/Info sections) — copy this shape per GAPS.md finding, one heading per gap:
```markdown
### GAP-01: <short name>

**Checked:** <what query/file was read>
**Finding:** <the specific named gap — theme/unit/lesson id/paper id>
**Severity:** critical | warning | info
**Evidence:**
```sql
<the exact query run>
```
<pasted result>
**Scope estimate / Deferral:** <follow-up content-build item sizing, OR explicit deferral reason (D-06)>
**Cross-reference (D-09):** already tracked — see Phase {N}/{REQ-ID} | new finding
```

**Closing-statement pattern** (`01-VERIFICATION.md` lines 82-84, "Gaps Summary") — required by CONTEXT.md decision D-06/roadmap Success Criterion 3 ("if no gaps are found, a written closing statement exists citing exactly what was checked"):
```markdown
## Gaps Summary

No blocking gaps found. All ... verified against actual code and a genuine
[query result / file read], ... . N non-blocking findings remain open,
recorded here so they aren't silently lost.
```
Adapt the "codebase evidence above satisfies both requirements" phrasing (`01-VERIFICATION.md` line 36) for the "audited, no gaps" closing statement CONTENT-01 requires if the audit turns up clean.

**Documentation-bookkeeping-gap callout pattern** (`01-VERIFICATION.md` line 36) — reusable verbatim shape for noting REQUIREMENTS.md/ROADMAP.md are not yet updated at the moment GAPS.md is written; use this note-shape rather than silently updating those files mid-audit:
```markdown
Note: `.planning/REQUIREMENTS.md` still shows CONTENT-01 as "Pending" ...
This is a documentation-bookkeeping gap, not a functional one.
```

---

### One-off audit query script(s) (utility, request-response)

**Analogs:** `ealch-admin/scripts/exam/check-orphans.ts` (structural existence/orphan report) and `ealch-admin/scripts/exam/check-speech-rate.ts` (numeric-conformance-vs-spec report)

**Imports/bootstrap pattern** (`check-orphans.ts` line 40, `check-speech-rate.ts` line 29, `find-french-notes.ts` line 24):
```typescript
import './../env';   // or import './env'; depending on script's directory depth
```
This loads `.env`/`.env.local` before anything reads `process.env.DATABASE_URL` (see `ealch-admin/scripts/env.ts`) — every existing DB-reading script in this repo does this first. Any audit script this phase writes MUST do the same, or it will silently take the PGlite-throwaway branch and report a false "0 rows" (exactly the Pitfall 2 failure mode RESEARCH.md warns about).

**Connection pattern** (`check-orphans.ts` lines 55-57, `check-speech-rate.ts` lines 91-93):
```typescript
const { Pool } = await import('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
const c = await pool.connect();
try {
  // ... queries ...
} finally {
  c.release();
  await pool.end();
}
```

**Read-only-by-construction pattern** (`check-orphans.ts` header comment lines 1-39 + its `--archive` opt-in gate at lines 101-120): the analog script defaults to report-only and only mutates behind an explicit `--archive` flag, itself refusing to touch `published` rows. **This phase's audit scripts must go further and never call `.query('begin')`/`update`/`insert` at all** — per RESEARCH.md's Security Domain section: "any script that opens a `client.query('begin')` transaction [is] out of scope for this phase entirely." Use `check-speech-rate.ts` as the purer analog (zero writes anywhere in the file) if writing a script for this phase.

**Multi-format/multi-target report loop pattern** (`check-speech-rate.ts` lines 90-234): iterate per exam format/variant or per curriculum track, print a labeled section per target, accumulate a `failures`/`rateOff`/`lengthOff`-style array of named violation strings, and set a non-zero exit code only if the caller wants this runnable as a gate — for this phase's purposes exit code is optional/informational since GAPS.md, not the script's exit code, is the actual deliverable:
```typescript
console.log(`\n  ${rateOff.length} document(s) outside the ±${...}% rate band:`);
for (const l of rateOff) console.log(`    · ${l}`);
...
if (failures) process.exitCode = 1;
```

**jsonb-array query pattern for exam papers** (`check-orphans.ts` lines 62-67, matches RESEARCH.md's corrected Pattern 2 query) — use this exact shape, NOT a `content_exam_sections` table join (RESEARCH.md Pitfall 1: that table does not exist):
```sql
select jsonb_array_elements_text(s->'taskIds') as task_id
  from content_exam_papers p, jsonb_array_elements(p.sections) s
```

**Scored-classification pattern (for judgment calls like D-01's "coherent," not just "present")** — `ealch-admin/scripts/find-french-notes.ts` (untracked/new in this repo, lines 73-95) is the closest existing analog for a check that requires a coherence judgment rather than a boolean existence check. It documents why a naive keyword/regex approach failed twice (99 then 568 false-flagged) and replaced it with a comparative function-word score plus an explicit "which side wins" decision rule, and prints both a summary count and a `--list` detail mode:
```typescript
export function frenchScore(note: string): { fr: number; en: number; french: boolean } {
  // ... comparative scoring, not a keyword hit ...
  return { fr, en, french: fr >= 2 && fr > en };
}
```
If the audit needs a "is this canDo a specific, non-generic capability statement" check (RESEARCH.md Open Question 2), model it on this file's shape: score rather than boolean-match, document the false-positive/negative history that justifies the scoring approach, and offer a `--list` mode to inspect borderline cases by hand — never trust a single-pass regex as the GAPS.md citation itself (per D-03).

**Placement:** Per RESEARCH.md's Recommended Project Structure note, any such script does **not** belong in `ealch-admin/scripts/` proper (reserved for reusable authoring tooling) unless prefixed `_audit-` and clearly read-only, or it can live purely in the scratchpad and never be committed. Do not name it like an authoring script (`author-*`, `merge-*`).

---

### `.planning/ROADMAP.md` stub-phase insertion (conditional, D-07)

**Analog:** the roadmap's own documented 2026-09-19 revision note (`ROADMAP.md` lines 15-17) and its "Phase Numbering" convention (lines 11-15)

**Pattern:**
```markdown
**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)
```
Per CONTEXT.md's own integration-points note (line 79), a fresh audit finding discovered mid-phase-2-execution is "neither urgent nor an insertion" in the sense decimal notation exists for — it is closer to the 2026-09-19 Phase-11-split precedent (a deliberate roadmap revision using the next integer slot, renumbering subsequent phases, and leaving a dated revision note at the top of the Phases section), not a decimal `/gsd-insert-phase` urgent patch. If a phase-worthy finding surfaces, add it as the next integer phase, renumber phases after it (+1, matching the exact renumbering the 2026-09-19 note performed), and append a dated revision-note line following the existing `*Roadmap revised: 2026-09-19 — ...*` format at the bottom of the file (line 304).

---

### `.planning/REQUIREMENTS.md` traceability status edit (at phase close)

**Analog:** Phase 1's own precedent and self-flagged gap — `01-VERIFICATION.md` line 36 explicitly calls out that `PUBLISH-01`/`PUBLISH-02`'s traceability rows were left "Pending" even after the phase was functionally complete, describing this as "a documentation-bookkeeping gap ... flagging for whatever process updates REQUIREMENTS.md/traceability at milestone or phase-close time."

**Pattern:** The traceability table row for `CONTENT-01` (currently `REQUIREMENTS.md` line 114: `| CONTENT-01 | Phase 2 | Pending |`) should be updated to `Complete` (or an equivalent closed status) once GAPS.md's closing statement exists — this phase should not repeat Phase 1's left-behind gap. Also flip the `- [ ]` checkbox at `REQUIREMENTS.md` line 58 to `- [x]` to match the `PUBLISH-01`/`PUBLISH-02` checkbox precedent at lines 12-13.

## Shared Patterns

### Evidence discipline (D-03) — applies to every finding in GAPS.md and every audit script
**Source:** `02-CONTEXT.md` D-03, reinforced by `02-RESEARCH.md`'s Common Pitfalls #3/#4/#6 and its own Pattern 1/2 SQL
**Apply to:** GAPS.md (every row), any audit script (comments explaining why a naive check would mislead)
Never cite `corpus:probe`, `content:parity`, or a heuristic guard's "0 findings" as the GAPS.md evidence itself — cite the direct SQL/file-read result. `find-french-notes.ts`'s header comment (lines 13-23) is the canonical in-repo example of documenting *why* a naive approach was rejected before landing on the trusted one; mirror that documentation discipline for any new audit logic.

### Read-only-only (Security Domain, RESEARCH.md)
**Source:** `02-RESEARCH.md` Security Domain / Known Threat Patterns table
**Apply to:** any script written for this phase
No `client.query('begin')`, no `update`/`insert`/`delete`. `check-speech-rate.ts` is the cleanest zero-write analog; `check-orphans.ts` is an acceptable secondary reference ONLY for its report-only default branch (ignore its `--archive` write path entirely — do not port it).

### `.env` bootstrap before any `process.env.DATABASE_URL` read
**Source:** `ealch-admin/scripts/env.ts`, imported by every DB-touching script in the repo
**Apply to:** any audit script
```typescript
import './../env'; // or the correct relative path
```
Skipping this is the exact failure mode `env.ts`'s own header comment documents: a script silently takes the PGlite-throwaway branch and reports false "no data," which for this phase would masquerade as either "Supabase confirmed paused" (already a known blocker, RESEARCH.md Pitfall 2) or a false gap.

## No Analog Found

None. This phase's file set is small (findings doc + optional scratch scripts + two conditional planning-doc edits) and every item has a same-project analog (Phase 1's VERIFICATION.md/REVIEW.md, and existing `ealch-admin/scripts/exam/` audit scripts).

## Metadata

**Analog search scope:** `.planning/phases/01-content-publish-drift-guard-extension/`, `ealch-admin/scripts/exam/`, `ealch-admin/scripts/env.ts`, `ealch-admin/scripts/find-french-notes.ts`, `.planning/ROADMAP.md`, `.planning/REQUIREMENTS.md`
**Files scanned:** ~15 (targeted; stopped once 3 strong analogs were confirmed per file-role, per early-stopping guidance)
**Pattern extraction date:** 2026-09-19
