---
phase: 1
slug: content-publish-drift-guard-extension
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-09-19
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Node built-in `node:test`, run via `tsx` (no Jest/Vitest in `ealch-admin`) |
| **Config file** | None — `package.json` script: `"test": "node --import tsx --test \"scripts/**/*.test.ts\""` |
| **Quick run command** | `node --import tsx --test scripts/drift-guard.logic.test.ts` |
| **Full suite command** | `cd ealch-admin && pnpm test` |
| **Estimated runtime** | ~10-20 seconds |

---

## Sampling Rate

- **After every task commit:** Run `node --import tsx --test scripts/drift-guard.logic.test.ts`
- **After every plan wave:** Run `cd ealch-admin && pnpm test`
- **Before `/gsd-verify-work`:** Full suite must be green, PLUS a manual `pnpm content:publish --dry-run` run against a real (dev/staging) Postgres to confirm the guard and report behave correctly end-to-end (no test-Postgres harness exists in this codebase; `publish-content.ts` explicitly refuses to run against PGlite)
- **Max feedback latency:** 20 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 0 | PUBLISH-01 | — | N/A | unit | `node --import tsx --test scripts/drift-guard.logic.test.ts` | ❌ W0 | ⬜ pending |
| 01-0X-0X | TBD | TBD | PUBLISH-01 | — | Guard blocks when a committed unit/scenario/playlist/speak-stage is git-ahead of Postgres | unit | `node --import tsx --test scripts/drift-guard.logic.test.ts` | ❌ W0 | ⬜ pending |
| 01-0X-0X | TBD | TBD | PUBLISH-01 | — | Guard does NOT block when Postgres is ahead of git (routine safe case) — false-positive regression test | unit | same file | ❌ W0 | ⬜ pending |
| 01-0X-0X | TBD | TBD | PUBLISH-01 | — | Guard ignores step-2 unit `lessonIds` pruning as a non-regression | unit | same file | ❌ W0 | ⬜ pending |
| 01-0X-0X | TBD | TBD | PUBLISH-01 | — | Reproduces the 2026-07-31 incident shape (overview collapse) generalized across kinds (roadmap Success Criterion 4) | unit | same file or `drift-guard.incident.test.ts` | ❌ W0 | ⬜ pending |
| 01-0X-0X | TBD | TBD | PUBLISH-01 | — | No-git-history graceful skip still works | unit | same file | ❌ W0 (currently untested even for lessons) | ⬜ pending |
| 01-0X-0X | TBD | TBD | PUBLISH-02 | — | Diff report is printed to terminal and written to a fixed, overwritten file on every publish | unit/manual | same file + manual dry-run | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*
*Exact task IDs to be finalized by the planner; rows above are derived from RESEARCH.md's Phase Requirements → Test Map.*

---

## Wave 0 Requirements

- [ ] `ealch-admin/scripts/drift-guard.logic.ts` — extracted, pure comparator + report-formatting functions (today the logic is inline in `publish-content.ts`'s `main()`)
- [ ] `ealch-admin/scripts/drift-guard.logic.test.ts` — unit tests for the above, following the exact style of `publish-cut.logic.test.ts` (hand-built fixtures, `node:test`, no DB)
- [ ] No framework install needed — `node:test` + `tsx` are already the established, installed pattern

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| End-to-end guard + diff-report behavior against a real publish | PUBLISH-01, PUBLISH-02 | No test-Postgres harness exists; `publish-content.ts` refuses to run against PGlite | Run `pnpm content:publish --dry-run` against a dev/staging Postgres with a fixture where a unit/scenario/playlist/speak-stage is git-ahead (confirm block) and where Postgres is ahead (confirm it proceeds); inspect the printed report and the on-disk `PUBLISH-REPORT.md`-style file |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 20s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
