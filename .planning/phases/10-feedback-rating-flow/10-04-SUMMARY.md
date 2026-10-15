---
phase: 10-feedback-rating-flow
plan: "04"
subsystem: feedback
tags: [tdd, wire-contract, outbox, privacy]
requires: []
provides:
  - problemReport.logic.ts (builder, strict validator, classify, claim-then-send outbox)
  - contract.fixture.json (shared client/server wire fixture)
affects: [10-03 server validateReport, report UI plans]
tech-stack:
  patterns: [named-key allowlist builder, fixture-pinned contract, zero-import pure logic]
key-files:
  created:
    - ealch-v2/src/services/problemReport.logic.ts
    - ealch-v2/src/services/problemReport.logic.test.ts
    - ealch-v2/src/services/problemReport.contract.test.ts
    - ealch-v2/supabase/functions/report-problem/contract.fixture.json
decisions:
  - "Invalid-fixture field names: errors problems report 'context.errors'; unknown context key 'context.<key>'; oversize body 'body'. Plan 10-03 must match."
  - "Builder accepts an optional valid ISO client_created_at so stored/fixture entries keep their original time; otherwise emits now."
  - "Builder sheds oldest errors if multi-byte text pushes the JSON over 24576 bytes."
metrics:
  tasks: 2
  completed: 2026-10-15
---

# Phase 10 Plan 04: Problem report wire contract Summary

Zero-import client contract for problem reports: allowlist builder, strict validator pinned to a shared JSON fixture, send classification, and a bounded claim-then-send outbox where a 429 waits for the next UTC midnight.

## Commits
- RED 1: test(10-04) failing contract tests plus fixture
- GREEN 1: feat(10-04) builder, validateWire, classifySend, outcomeFor
- RED 2: test(10-04) failing outbox tests
- GREEN 2: feat(10-04) claimReport, settleReport, dueReports, nextUtcDay, pruneReports, validReportOutbox

(Hashes: see `git log --grep "(10-04)"`.)

## Verification
- `node --test` on both test files: 31 pass, 0 fail.
- 4 valid and 15 invalid fixture bodies (including `2026-10-01` and `Oct 1 2026`); the D-40 hybrid item_id is included.
- Zero `import` lines and no `email` reference in the logic file.

## Deviations from Plan

**1. [Rule 1 - Bug] Worst-case byte cap.** 10 errors at 300+1500 multi-byte characters exceed 24576 bytes even though every per-field limit holds. The builder now drops the oldest errors until the body fits, so built payloads always pass `validateWire`. Covered by the worst-case test.

**2. Optional client_created_at input.** Needed so `buildReportPayload(validBody)` deep-equals the body and stored outbox entries keep their creation time (TTL depends on it).

## Deferred / Not run
- `npx tsc --noEmit` could not run: `typescript` is not installed in ealch-v2 (no node_modules/.bin/tsc), and installing packages needs approval. Typecheck is still to be run by the orchestrator or after `npm install`. Full `npm test` was not run for the same reason it was not needed here; only the two new test files were run.

## Known Stubs
None.

## Self-Check: PASSED
All four files exist and the four commits are in git log.
