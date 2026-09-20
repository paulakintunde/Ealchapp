---
phase: 3
slug: tts-security-hardening
status: draft
nyquist_compliant: true
wave_0_complete: true
created: 2026-09-20
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Node's built-in test runner (`node --test`), native TypeScript type-stripping (Node v24.15.0 confirmed) — same framework the whole repo already uses (844 existing `node --test` logic tests). `deno check` (Deno 2.9.5 confirmed) for the one Deno-only file (`tts/index.ts`) that cannot run under `node --test`. |
| **Config file** | None — driven by `ealch-v2/package.json`'s `test` script: `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"` |
| **Quick run command** | `cd ealch-v2 && node --test "supabase/functions/tts/quota.test.ts"` (03-01) or `node --test "src/services/tts.logic.test.ts"` (03-03) |
| **Full suite command** | `cd ealch-v2 && npm test` |
| **Estimated runtime** | ~15-25 seconds (existing suite is already 844 tests; the ~25 new tests added by this phase add negligible time) |

---

## Sampling Rate

- **After every task commit:** Run the quick command for whichever plan's file the task touched (`quota.test.ts` for 03-01, `tts.logic.test.ts` for 03-03, `deno check index.ts` for 03-04)
- **After every plan wave:** Run `cd ealch-v2 && npm test` (full suite)
- **Before `/gsd-verify-work`:** Full suite must be green AND the live curl smoke tests (03-04 Task 2) must show 401/401-guest_not_allowed
- **Max feedback latency:** ~25 seconds (full suite)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 03-01-01 | 01 | 1 | SEC-01 | T-3-02 / T-3-04 | quota.test.ts pins tier classification + all 4 premium windows in isolation + one-shot free structure (RED state) | unit | `node --test "supabase/functions/tts/quota.test.ts"` | ❌ W0 → created by this task | ⬜ pending |
| 03-01-02 | 01 | 1 | SEC-01 | T-3-02 / T-3-04 | quota.ts implements the above, all tests GREEN | unit | `node --test "supabase/functions/tts/quota.test.ts"` | ✅ (created by 03-01-01) | ⬜ pending |
| 03-02-01 | 02 | 1 | SEC-01 | T-3-02 / T-3-03 | schema.sql has 4 new tables + 2 RPCs + revokes + 5 config keys | static (grep) | `grep -c "create table if not exists public.tts_" ealch-v2/supabase/schema.sql` | ✅ (edited by this task) | ⬜ pending |
| 03-02-02 | 02 | 1 | SEC-01 | T-3-02 / T-3-03 / T-3-04 | Live DB has the objects; already-seeded config row merged with new keys | integration (live DB) | `cd ealch-admin && npx tsx scripts/apply-tts-quota-schema.ts` | ✅ (created by this task) | ⬜ pending |
| 03-02-03 | 02 | 1 | SEC-01 | — | SETUP.md documents the 3 tts smoke-test cases | static (grep) | `grep -c "guest_not_allowed" ealch-v2/supabase/SETUP.md` | ✅ (edited by this task) | ⬜ pending |
| 03-03-01 | 03 | 1 | SEC-01 | T-3-05 | shouldAttemptRemoteTts() rejects guest remote attempts regardless of config flag | unit | `node --test "src/services/tts.logic.test.ts"` | ❌ W0 → created by this task | ⬜ pending |
| 03-03-02 | 03 | 1 | SEC-01 | T-3-05 | tts.ts's speak() calls the predicate before attempting remote | unit + typecheck | `node --test "src/services/tts.logic.test.ts" && npx tsc --noEmit` | ✅ (tts.ts edited by this task) | ⬜ pending |
| 03-04-01 | 04 | 2 | SEC-01 | T-3-01 / T-3-02 / T-3-04 | callerUid/ttsTier/quota wiring type-checks against quota.ts's real exports | static (deno check) | `cd ealch-v2/supabase/functions/tts && deno check index.ts` | ✅ (edited by this task) | ⬜ pending |
| 03-04-02 | 04 | 2 | SEC-01 | T-3-01 / T-3-02 | Deployed function rejects zero-auth (401) and anon-key-only (401, guest_not_allowed) | manual/smoke (live deployment) | `curl ... -H "Authorization: Bearer $ANON" ...` — see 03-04-PLAN.md Task 2 | ✅ (SETUP.md documents the pattern) | ⬜ pending |
| 03-04-03 | 04 | 2 | SEC-01 | T-3-02 (residual) | Signed-in caps enforced; device fallback never silent; guest client never calls remote | manual (real device + real account) | Human-verify checklist, 03-04-PLAN.md's checkpoint task | N/A — device-only | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [x] `ealch-v2/supabase/functions/tts/quota.test.ts` — created and made to fail (RED) by 03-01-PLAN.md Task 1, then made to pass by Task 2. No separate Wave 0 plan needed — the RED→GREEN cycle IS Wave 0 for this file, folded into 03-01-PLAN.md per the TDD task-type convention.
- [x] `ealch-v2/src/services/tts.logic.test.ts` — same pattern, folded into 03-03-PLAN.md.
- [x] No test-framework install needed — `node --test` and `deno check` are both already wired (`npm test` in `ealch-v2/package.json`; `deno` 2.9.5 present locally).

*Wave 0 gaps from RESEARCH.md are fully covered by 03-01-PLAN.md and 03-03-PLAN.md's own Task 1s — no separate Wave 0 plan file was needed because both pure-logic modules are small enough to build test-first within their own dedicated TDD plan, per the tdd_integration guidance (RED→RED cycle inside one plan rather than a phase-wide Wave 0 plan).*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| A real signed-in premium user's calls succeed and are capped per D-05's daily/monthly/burst numbers | SEC-01 (ROADMAP criterion 3) | Requires a live deployed function, a real Supabase Auth session (JWT), and enough real requests to cross a window boundary — none of which `node --test`/`deno check` can exercise without a live network + live account | 03-04-PLAN.md's `checkpoint:human-verify` task, steps 1-2 |
| A guest never issues a remote TTS call in the real app UI, even with `ttsProvider` forced to `'elevenlabs'` | SEC-01 (ROADMAP criteria 1, 4) + D-01 | Requires observing real app behavior (network/function-invocation logs) on a device, not just reading code | 03-04-PLAN.md's `checkpoint:human-verify` task, step 3 |
| Device-TTS fallback is audible (never silent) after a 401/429 from the hardened function | SEC-01 (ROADMAP criterion 4) | Audio output can only be confirmed by a human listening on a real device; `resolveRemote()`'s code path was already verified by static read (RESEARCH.md), but "the user actually hears something" is inherently a manual check | 03-04-PLAN.md's `checkpoint:human-verify` task, steps 1-3 |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or are explicitly the checkpoint:human-verify task with documented manual steps
- [x] Sampling continuity: no 3 consecutive tasks without automated verify (03-04's Task 3 is the only manual task, immediately preceded by two automated tasks)
- [x] Wave 0 covers all MISSING references (folded into 03-01/03-03's own RED→GREEN task pairs)
- [x] No watch-mode flags anywhere in this phase's automated commands
- [x] Feedback latency < 30s (full suite ~15-25s)
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** approved 2026-09-20 (set by /gsd-plan-phase during phase planning)
