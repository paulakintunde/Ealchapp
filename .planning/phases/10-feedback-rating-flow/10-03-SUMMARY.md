---
phase: 10-feedback-rating-flow
plan: "03"
subsystem: feedback-server
tags: [supabase, edge-function, rate-limit, privacy]
requires: ["10-04"]
provides:
  - problem_reports + problem_report_usage tables, problem_report_submit RPC, problem_reports_purge
  - report-problem edge function, limits.ts validator
  - delete-account guest-era report cleanup
affects: [10-06 client outbox and delete-account call, 10-09 apply and deploy]
key-files:
  created:
    - ealch-v2/src/services/problemReportSchema.test.ts
    - ealch-v2/supabase/functions/report-problem/limits.ts
    - ealch-v2/supabase/functions/report-problem/limits.test.ts
    - ealch-v2/supabase/functions/report-problem/index.ts
  modified:
    - ealch-v2/supabase/schema.sql
    - ealch-v2/supabase/functions/delete-account/index.ts
decisions:
  - "Admission, insert and counter increments are one SQL function; only accepted reports count (D-35)."
  - "Server validateReport deep-equals client validateWire on all 4 valid and 15 invalid fixture cases."
metrics:
  tasks: 3
  completed: 2026-10-15
---

# Phase 10 Plan 03: Report-a-problem server half Summary

Atomic accepted-only problem report ingestion: RLS-locked tables, a single SQL function that admits, inserts and counts, a fail-closed edge function, and guest-era cleanup on account deletion. Nothing applied or deployed (plan 10-09).

## Commits
- 9b3688c schema.sql block + schema test
- 0c033cb limits.ts + limits.test.ts (fixture parity)
- 503132c report-problem/index.ts + delete-account

## For plan 10-09
- Phase 10 block in `ealch-v2/supabase/schema.sql`: lines 461-571 (end of file). Seed keys (`reviewPromptOn`, `reportDaily*`) are in the system_config seed JSON; the live row needs the `config = config || '{...}'` update described in the caveat comment.
- Deploy: `supabase functions deploy report-problem --no-verify-jwt`; redeploy delete-account.
- Client (10-06) must send `{ install_id }` in the delete-account POST body.

## Verification
- `node --test` limits.test.ts + problemReportSchema.test.ts: 29 pass, 0 fail.
- `deno check supabase/functions/report-problem/index.ts supabase/functions/delete-account/index.ts`: both "Check" lines, exit 0, no errors.
- `node node_modules/typescript/bin/tsc --noEmit`: clean.
- Full `npm test` not run.

## Deviations from Plan
- [Rule 3] In problem_report_submit the usage selects use a table alias (`u.count`, `u.day`) to avoid ambiguity with plpgsql names; behavior identical to the plan SQL.
- Schema test reads schema.sql via `import.meta.url` (ESM; `__dirname` is undefined under node --test).
- D-37/D-46: schema.sql and delete-account were clean before edit; no open 08.1 plan lists either file. Diffs reviewed before each commit; only own hunks (schema.sql: 124 insertions, 3 deletions).

## Known Stubs
None.

## Threat Flags
None beyond the plan's threat model.

## Self-Check: PASSED
All six files exist and three commits are in git log.
