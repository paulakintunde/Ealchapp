# Phase 1: Content-Publish Drift Guard Extension - Context

**Gathered:** 2026-09-19
**Status:** Ready for planning

<domain>
## Phase Boundary

Generalize the existing "4·0 RULE no-silent-regression" publish guard in `ealch-admin/scripts/publish-content.ts` (which today only protects lesson bodies) so it also protects `curriculum_unit`, `scenario`, `playlist`, and `speak_stage` content authored seed-direct — closing PUBLISH-01. Add a human-readable pre-publish diff report (what changed, size deltas) — closing PUBLISH-02. This is a publish-pipeline safety extension, not a new subsystem: the guard, its asymmetric git-ahead-blocks/Postgres-ahead-allows logic, and its graceful no-git-history skip already exist and are proven (they're the reason a publish dies today rather than silently destroying lesson content). Zero mobile-app surface. Whether exam papers/tasks also need this guard is an open scope question for this phase's research (see Decisions below).

</domain>

<decisions>
## Implementation Decisions

### Diff report delivery (PUBLISH-02)
- **D-01:** The pre-publish diff report is delivered BOTH ways: printed to the terminal during `pnpm content:publish --dry-run` (and the real publish), AND written to a file on disk.
- **D-02:** The report generates on every publish, not just when something's about to change — build the review habit, don't make it conditional on there being news.
- **D-03:** The on-disk file is a single, overwritten file (e.g. a `PUBLISH-REPORT.md`-style artifact at a fixed path) — not a timestamped history. Git history is the audit trail if a past report needs to be recovered.

### Block strictness (PUBLISH-01)
- **D-04:** All four newly-covered content kinds (units, scenarios, playlists, speak-stages) hard-block on any detected regression, exactly like lessons do today. No warn-only tier for any kind. If a legitimate trim gets blocked, the resolution is the same one the existing guard already supports: push the DB-side change first (the guard has always tolerated Postgres-ahead-of-git; it only refuses git-ahead-of-Postgres).

### Exam content scope
- **D-05:** Whether exam papers/tasks (TEF/TCF/DELF) are authored seed-direct the same vulnerable way, and therefore need the same guard, is explicitly undecided by the user — **this phase's research/planning must investigate how exam content is actually authored and published, then make the call**, rather than assuming either way. This is not "Claude's discretion" in the sense of an unimportant detail — it's a real scope question the user wants answered with evidence before it's decided.

### Claude's Discretion
- The exact "richness" comparator per content kind (unit → lessonIds.length, scenario/playlist → a size/version field, speak_stage → block count) — per research/ARCHITECTURE.md, this is a data-shape problem with a generalizable pattern from the existing lesson comparator, not something the user needs to weigh in on. Pick comparators consistent with each kind's existing versioning/richness signal.
- Exact diff report format/layout (markdown table, plain text, etc.) and the exact fixed file path/name for the on-disk report.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Requirements & roadmap
- `.planning/REQUIREMENTS.md` — PUBLISH-01, PUBLISH-02 (this phase's requirements)
- `.planning/ROADMAP.md` — Phase 1 section (goal, success criteria, Pitfall Watch)

### Research (read before planning — this phase already has a detailed, source-grounded integration analysis)
- `.planning/research/ARCHITECTURE.md` — "Fix 1 — Content-publish safety (drift guard extension)" section: concrete integration point (`publish-content.ts` lines ~560-655), the asymmetric git-ahead/Postgres-ahead logic that must be preserved, per-kind comparator approach, blast-radius analysis. Also see "Corrections to CONCERNS.md" item 1 at the top of the file — CONCERNS.md understates what already exists here.
- `.planning/research/PITFALLS.md` — Pitfall 6 (directional/version-aware comparison, cover every field the 2026-07-31 incident actually hit — `overview`, not just `body` — and preserve the graceful no-git-history skip)

### The code being extended
- `ealch-admin/scripts/publish-content.ts` (step 4·0, lines ~560-655) — the existing guard to generalize
- `ealch-admin/scripts/restore-lesson-bodies-from-seed.ts` — the manual recovery script the guard's block message points to today; may need extending for the newly-covered kinds

**Project memory:** the incident this phase exists to prevent recurrence of is documented in the user's memory system as the 2026-07-31 incident (20 sections in `sons.03.l1` destroyed, `sons.01/02/03` + `a1.04` + `a2.01` overviews collapsed) — the researcher/planner should be aware the failure mode hit `overview` fields specifically, not just lesson `body`, which is why Pitfall 6 calls out "every field seed-direct scripts are known to touch."

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- The existing step 4·0 guard's git-diff-vs-Postgres comparison logic, its asymmetric blocking rule, and its no-git-history graceful skip are all directly reusable patterns — this phase generalizes them, it doesn't invent new logic.
- `restore-lesson-bodies-from-seed.ts` is the existing recovery-script pattern; extending it (or adding sibling scripts) for the four new kinds keeps recovery UX consistent with what already exists for lessons.

### Established Patterns
- Publish pipeline is a single script (`publish-content.ts`) run via `pnpm content:publish [--dry-run]` — a CLI tool, not a UI. All Phase 1 work stays inside this script; no mobile-app or admin-console UI changes.
- The guard's git-ahead-blocks / Postgres-ahead-allows asymmetry is deliberate and load-bearing — any extension must preserve it exactly, or routine safe publishes (the common case) start getting blocked.

### Integration Points
- Step 4·0 in `publish-content.ts` is the single integration point for PUBLISH-01. The same script (likely the same step, or an adjacent new step) is where PUBLISH-02's diff report generation belongs, since it needs the same "what's about to change" comparison data the guard already computes.

</code_context>

<specifics>
## Specific Ideas

No UI or visual specifics — this is a CLI/tooling phase. The concrete "I want it like X" decisions are captured above: printed + file-saved diff report, always generated, single overwritten file, hard-block all four kinds.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope. The exam-content question (D-05) is not deferred to a future phase; it's an open investigation *within* this phase that research/planning must resolve before or during implementation.

</deferred>

---

*Phase: 1-Content-Publish Drift Guard Extension*
*Context gathered: 2026-09-19*
