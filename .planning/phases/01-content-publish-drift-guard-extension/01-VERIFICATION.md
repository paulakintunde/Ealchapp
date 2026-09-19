---
phase: 01-content-publish-drift-guard-extension
verified: 2026-09-19T22:00:00Z
status: passed
score: 4/4 roadmap success criteria verified; 2/2 requirements satisfied
overrides_applied: 0
---

# Phase 1: Content-Publish Drift Guard Extension Verification Report

**Phase Goal:** Publishing content can never silently destroy unreviewed seed-direct work in any content kind, not just lesson bodies — and an author sees what's about to change before it ships.
**Verified:** 2026-09-19T22:00:00Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths (Roadmap Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | `pnpm content:publish --dry-run` refuses to publish, with an actionable specific message, when a committed unit/scenario/playlist/speak-stage is git-ahead of Postgres | ✓ VERIFIED | `publish-content.ts:634-694` calls `findVersionedLosses`/`findUnitLosses`/`findPresenceLosses` across all five kinds; live-DB proof in 01-04-SUMMARY.md names scenario `sc.a2.questions-du-quotidien.001` blocked with "— this publish would DELETE it" under a `── scenario ──` heading, non-zero exit, nothing uploaded |
| 2 | A normal, healthy publish where Postgres is ahead of git completes without being blocked | ✓ VERIFIED | Code gates all structural signals on `db.version === git.version` (never penalizes a version-ahead DB); live proof (01-04-SUMMARY Step A and Step C) shows a clean `✓ no-silent-regression: ... accounted for` line with no block, reproduced twice (before and after the Step B/C round-trip) |
| 3 | Before publishing, the author sees a human-readable diff report (what changed, size deltas), not just pass/fail | ✓ VERIFIED | `formatDiffReport` (`drift-guard.logic.ts:212-283`) builds a markdown report; `publish-content.ts:1206-1222` prints it and `writeFileSync`s it to `ealch-admin/PUBLISH-REPORT.md` above the noop/dry-run early returns (line 1222 vs. gates at 1228/1242); the file on disk today is genuine generated output (version `v70 → v71`, `speakPath 0 → 31`, real checksums, `## Size` table with a byte delta), not placeholder text |
| 4 | The guard's directionality is regression-tested against the 2026-07-31 incident shape (overview collapse, not just body loss), generalized to units/scenarios/playlists/speak-stages | ✓ VERIFIED | `drift-guard.logic.test.ts` has 19 `node:test` cases (confirmed by direct grep and by running the suite), including the same-version section collapse (sons.03.l1 shape), version-ahead overview erasure, scenario alternate-answer loss, Postgres-ahead non-block, and the step-2 unit-prune non-block; full suite green: `607 pass / 0 fail` |

**Score:** 4/4 roadmap success criteria verified

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|---|---|---|---|---|
| PUBLISH-01 | 01-01, 01-02 | Publish blocks overwriting git-newer content across all content kinds | ✓ SATISFIED | `findVersionedLosses`/`findUnitLosses`/`findPresenceLosses` wired for lessons, units, scenarios, playlists, speak stages in `publish-content.ts` step 4·0; live two-direction proof in 01-04-SUMMARY.md |
| PUBLISH-02 | 01-03, 01-04 | Author sees a human-readable pre-publish diff report before publishing | ✓ SATISFIED | `formatDiffReport` produces the report; step 7 prints and writes it on every path (first-snapshot, no-op, normal, dry-run); real file confirmed on disk with per-kind counts and byte-size deltas |

Note: `.planning/REQUIREMENTS.md` still shows both `PUBLISH-01`/`PUBLISH-02` checkboxes unchecked and their traceability rows as "Pending" (lines 12-13, 112-113). This is a documentation-bookkeeping gap, not a functional one — the codebase evidence above satisfies both requirements. Flagging for whatever process updates REQUIREMENTS.md/traceability at milestone or phase-close time; it does not block this phase's goal achievement and is not a re-openable gap in the code.

### Required Artifacts

| Artifact | Expected | Status | Details |
|---|---|---|---|
| `ealch-admin/scripts/drift-guard.logic.ts` | Pure comparators + `formatDiffReport`, zero I/O | ✓ VERIFIED | 283 lines; `findVersionedLosses`, `findUnitLosses`, `findPresenceLosses`, `formatDiffReport`, `REPORT_KINDS`, `DriftLoss` all exported; no `pg`/`node:fs`/`node:child_process`/`console.*`/`process.exit`/`Date.now` found outside comments |
| `ealch-admin/scripts/drift-guard.logic.test.ts` | node:test regression suite | ✓ VERIFIED | 419 lines, 19 `test()` blocks, all passing standalone and inside full suite |
| `ealch-admin/scripts/publish-content.ts` | Step 4·0 generalized, step 7 report wiring | ✓ VERIFIED | 1342 lines; five-kind loss collection at lines 634-694, block-and-exit at 696+, report build/print/write at 1206-1222 (confirmed ordered above the noop/dry-run gates at 1228/1242), D-05 comment at line 748 |
| `.gitignore` | Negation rule for `PUBLISH-REPORT.md` | ✓ VERIFIED | `!/ealch-admin/PUBLISH-REPORT.md` present (line 19), blanket `*.md` rule (line 8) unweakened; `git check-ignore -q` confirms the file is not ignored |
| `ealch-admin/PUBLISH-REPORT.md` | Real generated report, not placeholder | ✓ VERIFIED | Contains `# Publish report`, `Generated:` timestamp, `Mode: dry run`, `## What changed` table with all ten `REPORT_KINDS` rows including `speakPath`, `## Size` table with byte delta, checksum/content-digest lines; placeholder sentence absent |

### Key Link Verification

| From | To | Via | Status | Details |
|---|---|---|---|---|
| `drift-guard.logic.test.ts` | `drift-guard.logic.ts` | static import of comparators + `formatDiffReport` | ✓ WIRED | `import { findPresenceLosses, findUnitLosses, findVersionedLosses, formatDiffReport, REPORT_KINDS } from './drift-guard.logic.ts'` (line 11) |
| `publish-content.ts` | `drift-guard.logic.ts` | static import at step 4·0 | ✓ WIRED | `import { findPresenceLosses, findUnitLosses, findVersionedLosses, type DriftLoss } from './drift-guard.logic.ts'` plus `formatDiffReport` added per plan 03; all five call sites present and exercised (grep counts match plan's acceptance criteria) |
| step 4·0 unit comparator | step 2 `prunedUnits` | `livePruned` built from `prunedUnits`, never raw `units` | ✓ WIRED | `livePruned: new Map(prunedUnits.map((u) => [u.id, u]))` (line 656/662); no `livePruned: new Map(units...` occurrence |
| step 7 report write | dry-run/no-op early returns | write sits above both gates | ✓ WIRED | `writeFileSync(REPORT_PATH, ...)` at line 1222 precedes `if (noop && !ALLOW_NOOP)` (1228) and `if (DRY_RUN)` (1242) |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|---|---|---|---|
| Full test suite (includes drift-guard's 19 cases + all pre-existing content tests) | `cd ealch-admin && pnpm test` | `607 pass / 0 fail` | ✓ PASS |
| Typecheck | `cd ealch-admin && pnpm typecheck` | exits 0, no errors | ✓ PASS |
| Live git-ahead block / Postgres-ahead pass / restore-clears cycle | `pnpm content:publish --dry-run` against real Postgres (human-in-loop, recorded in 01-04-SUMMARY.md) | Block named `sc.a2.questions-du-quotidien.001` with "would DELETE it"; clean before/after | ✓ PASS (evidence in SUMMARY, cross-checked against current `PUBLISH-REPORT.md` on disk which shows the resulting `v70 → v71` clean state) |

Live-database re-execution was not repeated by this verifier (would require another Ops Console mutation cycle against production Postgres); the SUMMARY's narrative evidence was cross-checked against the actual `PUBLISH-REPORT.md` file left on disk, which is internally consistent with the claimed run (real version bump, real `speakPath` delta, real checksums) and not hand-edited placeholder text.

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|---|---|---|---|---|
| `ealch-admin/scripts/drift-guard.logic.test.ts` | — | `findPresenceLosses<Unit>` (canDo/themes, wired into production at `publish-content.ts:659-667`) has zero dedicated test coverage — only the `Lesson`/`overview` case and the null-committed case are tested | ⚠️ Warning | Carried from 01-REVIEW.md WR-01. A future refactor of `findPresenceLosses` or its `fields` predicates could silently break unit-level canDo/themes detection with nothing failing. Does not block the phase goal (the roadmap's four success criteria don't require this specific field to be unit-tested), but is a real regression-coverage gap in code this phase itself introduced. |
| `ealch-admin/scripts/drift-guard.logic.ts` | 245 | `formatDiffReport` uses `previous!.version` (non-null assertion) when `compareNote` is set, without the type system enforcing `compareNote implies previous` | ⚠️ Warning | Carried from 01-REVIEW.md WR-02. Today's only caller never triggers this path (compareNote is only set inside `if (previous)`), so it does not currently misfire, but the exported pure function could throw a `TypeError` if called with `compareNote` set and `previous: null`. |
| `ealch-admin/scripts/publish-content.ts` | 1206-1222 vs. 1248+ | `PUBLISH-REPORT.md` is written before steps 8-10 (Storage upload, seed.json write, DB insert) are confirmed to succeed; none of those steps are wrapped in try/catch | ⚠️ Warning | Carried from 01-REVIEW.md WR-03. A failed publish (e.g., Storage upload error) after this point leaves a committed-audit-trail file claiming "Mode: publish, v{N-1} → v{N}" for a version that was never actually recorded — undermines the specific "git history IS the audit trail" claim D-03 makes, though it does not affect dry-runs (which never reach steps 8-10 anyway) or the roadmap's stated success criteria. |
| `ealch-admin/scripts/drift-guard.logic.ts` | 181 | `findPresenceLosses` message template is hardcoded singular ("...has themes... would ERASE it" should read "them") | ℹ️ Info | Carried from 01-REVIEW.md IN-01. Cosmetic only, does not affect detection logic. |

All four items were already surfaced by `01-REVIEW.md` (3 warnings, 1 info) and remain unfixed at verification time — confirmed by direct code read, not just trusted from the review document. None of them are must-have failures against this phase's roadmap success criteria or PLAN frontmatter must-haves; they are quality gaps worth tracking but do not block phase completion.

### Human Verification Required

None. The one item that structurally required a human (the live-Postgres two-direction proof, `type="checkpoint:human-verify"` in plan 04) was already executed with a human operator performing the Ops Console clicks while the orchestrator captured real CLI output, as recorded in `01-04-SUMMARY.md`. This verifier independently confirmed the resulting artifact (`PUBLISH-REPORT.md`) is genuine, non-placeholder, and internally consistent with that narrative, and re-ran the full automated test suite (607/607 green) to confirm no regression since that run.

### Gaps Summary

No blocking gaps found. All four roadmap Success Criteria for Phase 1 are verified against actual code and a genuine on-disk artifact, both requirements (PUBLISH-01, PUBLISH-02) are satisfied, the full test suite passes (607/607), and typecheck is clean. Three non-blocking code-review warnings and one info-level cosmetic issue remain open in the codebase (unit-level presence-loss test gap, an unenforced compareNote/previous invariant, and a report-write-before-confirmed-success ordering issue) — none of these affect the phase's stated goal or roadmap success criteria, but they are recorded here so they aren't silently lost, and a follow-up plan may choose to close them. One documentation-only inconsistency was also found: `.planning/REQUIREMENTS.md` has not yet had PUBLISH-01/PUBLISH-02 checked off or their traceability status updated from "Pending," despite the phase being functionally complete and marked `[x]` in ROADMAP.md.

---

_Verified: 2026-09-19T22:00:00Z_
_Verifier: Claude (gsd-verifier)_
