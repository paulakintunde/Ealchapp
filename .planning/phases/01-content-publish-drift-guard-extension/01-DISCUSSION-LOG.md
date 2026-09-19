# Phase 1: Content-Publish Drift Guard Extension - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-19
**Phase:** 1-Content-Publish Drift Guard Extension
**Areas discussed:** Diff report delivery, Block strictness per content kind, Exam content in scope?

---

## Diff report delivery

| Option | Description | Selected |
|--------|-------------|----------|
| Printed to terminal during --dry-run | Matches how publish-content.ts already works | |
| Written to a file for review | e.g. PUBLISH-REPORT.md, generated alongside the dry-run | |
| Both — printed AND saved to a file | Terminal for the quick read, file for anything to keep or share | ✓ |

**User's choice:** Both — printed AND saved to a file

| Option | Description | Selected |
|--------|-------------|----------|
| Always, every publish | Consistent habit, always see what a publish will do | ✓ |
| Only when there's something to report | Silent on a routine no-op publish | |

**User's choice:** Always, every publish

| Option | Description | Selected |
|--------|-------------|----------|
| Single overwritten file | Simplest — e.g. PUBLISH-REPORT.md at repo root, overwritten each publish | ✓ |
| One file per publish, timestamped | Keeps a running audit trail on disk | |

**User's choice:** Single overwritten file
**Notes:** User reasoning matched the recommended defaults throughout — no additional rationale volunteered beyond selecting the options as presented.

---

## Block strictness per content kind

| Option | Description | Selected |
|--------|-------------|----------|
| Hard-block all four kinds, same as lessons | Matches existing guard's proven behavior exactly | ✓ |
| Hard-block units/speak-stages, warn-only on scenarios/playlists | Treats scenarios/playlists as more editorially fluid | |
| Something else — I'll specify per kind | Different strictness per content kind | |

**User's choice:** Hard-block all four kinds, same as lessons
**Notes:** Single-question resolution — no follow-up needed.

---

## Exam content in scope?

| Option | Description | Selected |
|--------|-------------|----------|
| Yes, include exam content in the guard | Exams are revenue-driving and high-stakes | |
| No, exams are out of scope for Phase 1 | Exam papers authored/published differently | |
| Not sure — have this phase's planning investigate and decide | Don't lock the answer now | ✓ |

**User's choice:** Not sure — have this phase's planning investigate and decide
**Notes:** This is captured in CONTEXT.md as an open investigation for research/planning to resolve with evidence (how exam content is actually authored), not as "Claude's discretion" — the user wants it answered, just not guessed at now.

---

## Claude's Discretion

- Exact "richness" comparator per content kind (unit → lessonIds.length, scenario/playlist → a size/version field, speak_stage → block count) — per research/ARCHITECTURE.md, a generalizable data-shape problem, not a user decision point.
- Exact diff report format/layout and the fixed file path/name for the on-disk report.

## Deferred Ideas

None — discussion stayed within phase scope.
