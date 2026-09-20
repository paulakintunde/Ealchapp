---
phase: 04
slug: entitlement-verification-signed-out-purchase-fix
status: reconciled
nyquist_compliant: true
wave_0_complete: false
created: 2026-09-20
reconciled: 2026-09-20
---

# Phase 04 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.
> **Reconciled against the nine PLAN.md files on 2026-09-20** — the task IDs below are
> now the real plan/task numbers, not the provisional ones.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Node's built-in `node:test` + `node:assert` (no Jest/Vitest in this repo) |
| **Config file** | none — plain `.test.ts` files run directly via `node --test` |
| **Quick run command** | `node --test src/utils/examAttempt.logic.test.ts` (or the specific new/edited `.test.ts` for the task at hand) |
| **Full suite command** | `npm test` (runs `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"`, per `ealch-v2/package.json`) |
| **Typecheck** | `cd ealch-v2 && npx tsc --noEmit` · `cd ealch-admin && pnpm typecheck` |
| **Deno functions** | `cd ealch-v2 && npx deno check supabase/functions/<name>/index.ts` (falls back to the deploy's own server-side check if the CLI is unavailable) |
| **Package managers** | `ealch-v2` is **npm**; `ealch-admin` is **pnpm**. Do not mix. |
| **Estimated runtime** | ~30 seconds for the full `node --test` suite |

---

## Sampling Rate

- **After every task commit:** run the specific new/edited `.test.ts` for that task.
- **After every plan wave:** run `npm test` (full suite across `src/**` and `supabase/functions/**`) plus `npx tsc --noEmit`.
- **Before `/gsd-verify-work`:** full suite green, PLUS the manual device-verification checklist (plans 04-08 and 04-09) signed off.
- **Max feedback latency:** 30 seconds.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 04-01-01 | 01 | 1 | PAY-03 | T-04-09 | The four-input gate decision, incl. `gateOn=false` + unentitled + `paperNo=20` → allowed (the ship-day case) | unit | `node --test src/utils/examGate.logic.test.ts` | created by this task | ⬜ pending |
| 04-01-02 | 01 | 1 | PAY-03 | T-04-12, T-04-13 | Grace window = `timingS + 3600s`, clamped to `[0, 21600]`, expiry exclusive | unit | `node --test src/utils/examAttempt.logic.test.ts` | created by this task | ⬜ pending |
| 04-02-01 | 02 | 1 | PAY-03 | T-04-05, T-04-14, T-04-15 | `exam_attempts` with composite PK, `auth.users` cascade FK, RLS on, zero policies, `skill`/`mode` check constraints | grep gate on `schema.sql` | `grep -c "Exam attempt authorization (Phase 4, PAY-03)" ealch-v2/supabase/schema.sql` | n/a (edit) | ⬜ pending |
| 04-02-02 | 02 | 1 | PAY-03 | T-04-16, T-04-04 | The table exists in LIVE Postgres with the asserted PK/RLS/policy-count; apply is idempotent | live-DB verify (script asserts) | `cd ealch-admin && pnpm tsx scripts/apply-exam-attempts-schema.ts` (twice) | created by this task | ⬜ pending |
| 04-03-01 | 03 | 1 | PAY-03 | T-04-17 | `wasDowngraded` true only for a same-user active-premium → not-premium write; false on sign-out, user swap, already-expired | unit | `node --test src/store/entitlementDowngrade.test.ts` | created by this task | ⬜ pending |
| 04-03-02 | 03 | 1 | PAY-03 | T-04-17, T-04-18, T-04-11 | `entitlement_downgraded` fires from `setEntitlement` only, never from `loadFor` | unit + source-text | `node --test src/store/entitlementDowngrade.test.ts && npx tsc --noEmit` | extends the file above | ⬜ pending |
| 04-04-01 | 04 | 1 | PAY-01 | T-04-19, T-04-22 | Four distinct restore outcomes (`restored`/`none`/`failed`/`unavailable`); status-union parity with `purchases.ts` | unit + typecheck | `node --test src/services/purchases.logic.test.ts && npx tsc --noEmit` | created by this task | ⬜ pending |
| 04-04-02 | 04 | 1 | PAY-01 | T-04-22, T-04-20 | Settings and the paywall render from one exhaustive `Record<RestoreOutcome, string>`; neither recomputes the branch | typecheck + grep | `npx tsc --noEmit && npm test && grep -c "restoreOutcome(" app/settings.tsx app/paywall.tsx` | n/a (edit) | ⬜ pending |
| 04-05-01 | 05 | 2 | PAY-03 | T-04-01, T-04-02, T-04-07, T-04-12, T-04-14, T-04-23 | Server derives all four gate inputs (`system_config`, `entitlements`, `content_exam_papers`); nothing read from the body but identifiers; one conflict-handling upsert | typecheck + grep | `npx deno check supabase/functions/start-exam-attempt/index.ts` | created by this task | ⬜ pending |
| 04-05-02 | 05 | 2 | PAY-03 | T-04-09 | The Deno gate copy is byte-equivalent (modulo comments/whitespace) to `src/utils/examGate.logic.ts`, and the test fails on drift | unit (source parity) | `node --test src/utils/examGate.parity.test.ts` | created by this task | ⬜ pending |
| 04-05-03 | 05 | 2 | PAY-03 | T-04-07 | All three unauthenticated request shapes → HTTP 401 `auth_required`, before any DB read | integration (curl vs production) | `curl -s -o /dev/null -w '%{http_code}' -X POST "$SUPABASE_URL/functions/v1/start-exam-attempt" …` → `401` | n/a (deploy) | ⬜ pending |
| 04-06-01 | 06 | 3 | PAY-03 | T-04-03, T-04-25, T-04-26, T-04-28 | Grading requires a live `exam_attempts` row (`expires_at > now`), keyed on the JWT uid, checked before quota and before any provider call; fail-closed | typecheck + grep | `npx deno check supabase/functions/grade-exam/index.ts` | n/a (edit) | ⬜ pending |
| 04-06-02 | 06 | 3 | PAY-03 | T-04-03, T-04-27, T-04-06 | Gate position, expiry bound, flag-conditioning, log visibility and the absence of an `entitlements` read all asserted; `coach` comment names `adapty-webhook` | unit (source-text) | `node --test supabase/functions/grade-exam/grade-exam-gate.test.ts` | created by this task | ⬜ pending |
| 04-06-03 | 06 | 3 | PAY-03 | T-04-27 | With `examGateOn: false`, a body carrying no attempt reference still grades (no shipped client broken) | integration (curl vs production) | `curl … -d '{}'` → `400 cannot grade: task has no rubric/modelAnswer`; well-formed body → 200/503/429, never 403 | n/a (deploy) | ⬜ pending |
| 04-07-01 | 07 | 3 | PAY-03 | T-04-31 | `startExamAttempt` returns `authorized` / `refused` / `unreachable`, never throws; a 4xx is a decision, a network failure is not | typecheck + grep | `npx tsc --noEmit && npm test` | created by this task | ⬜ pending |
| 04-07-02 | 07 | 3 | PAY-03 | T-04-30 | `paperId`/`skill` are REQUIRED on `GradeRequest`, so `tsc` finds any call site that omits them; the one call site sends them | typecheck | `npx tsc --noEmit` | n/a (edit) | ⬜ pending |
| 04-07-03 | 07 | 3 | PAY-03 | T-04-29, T-04-10, T-04-32 | `examPaperAllowed` runs before `startExamAttempt`, which runs before the navigation; a refusal routes to paywall/sign-in | unit (source-text) | `node --test src/services/examAttemptWiring.test.ts` | created by this task | ⬜ pending |
| 04-08-01 | 08 | 4 | PAY-01 | T-04-37 | The installed build's purchase capability is established mechanically, so "runnable" is not a judgement call | adb probe | `$ADB devices` + `$ADB shell dumpsys window \| grep -c "app.ealch.mobile/.MainActivity"` | n/a | ⬜ pending |
| 04-08-02 | 08 | 4 | PAY-01 | T-04-35, T-04-19 | Restore copy is distinct and identical across both surfaces; an offline cold start of an entitled user shows no paywall and no downgrade | **manual-only** (see below) | — | n/a | ⬜ pending |
| 04-08-03 | 08 | 4 | PAY-01, PAY-03 | T-04-34 | A signed-out purchase follows the account after sign-in, same device and cross-device, with no manual action (resolves research assumption A1) | **manual-only** (see below) | — | n/a | ⬜ pending |
| 04-09-01 | 09 | 5 | PAY-03 | T-04-38 | The flag flip is reversible and announced; a bare/`--show` invocation writes nothing | script + typecheck | `cd ealch-admin && pnpm tsx scripts/set-exam-gate.ts --show && pnpm typecheck` | created by this task | ⬜ pending |
| 04-09-02 | 09 | 5 | PAY-03 | T-04-09, T-04-29 | With `examGateOn: true`: the free-allowance paper still sits AND grades; paper 2 is refused on its own screen before any clock starts; a guest is routed to sign-in | **manual-only** (see below) | — | n/a | ⬜ pending |
| 04-09-03 | 09 | 5 | PAY-03 | T-04-12, T-04-03, T-04-38 | `expires_at - started_at = timingS + 3600` measured against real authored content; the expiry predicate returns 1 row live / 0 expired; the flag is restored to `false` | live-DB query + script | `cd ealch-admin && pnpm tsx scripts/set-exam-gate.ts --show \| grep -i false` | n/a | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Reconciled against the plans. Two items changed shape from the research-stage list, deliberately:

- [ ] `src/utils/examAttempt.logic.ts` + `.test.ts` — grace-window pure math (**plan 04-01, task 2**, as originally specified).
- [ ] ~~`src/utils/examStartGate.logic.ts`~~ → **`src/utils/examGate.logic.test.ts` + `src/utils/examGate.parity.test.ts`** (**plans 04-01 task 1 and 04-05 task 2**). RESEARCH.md allowed "or equivalent". Creating a second client-side copy of `examPaperAllowed` would have made a second source of truth on the side that already has one; instead the EXISTING canonical `src/utils/examGate.logic.ts` gains the truth table it never had, and the Deno duplicate is held to it by a source-text parity test that is demonstrated to fail on drift. This closes the gap `grade-exam`'s own `SCORE_BANDS` comment admits ("there is no test holding the two honest yet").
- [ ] ~~`src/services/purchases.test.ts`~~ → **`src/services/purchases.logic.ts` + `.test.ts`** (**plan 04-04**). `restorePurchases()`'s Adapty SDK calls are not mockable without a harness this repo lacks, so rather than a thin test of an untestable function, the duplicated four-branch outcome decision is extracted from `settings.tsx`/`paywall.tsx` into a pure file and tested there. The SDK-calling remainder stays manual-only (04-08), per D-01's own framing.
- [ ] `supabase/functions/grade-exam/grade-exam-gate.test.ts` — source-text assertions that the gate exists, is positioned before quota and LLM, bounds the window by `expires_at`, and is flag-conditioned (**plan 04-06, task 2**).
- [ ] `src/services/examAttemptWiring.test.ts` — NEW, not in the research-stage list: source-text assertions for the client half (gate before navigation, refusal handling, attempt reference on every grading request), since there is no component-test infrastructure yet (**plan 04-07, task 3**).

---

## Manual-Only Verifications

| Behavior | Requirement | Plan / Task | Why Manual | Test Instructions |
|----------|-------------|-------------|------------|-------------------|
| Settings/paywall render distinct copy for each restore outcome | PAY-01 | 04-08 / Task 2 | No RN component-test infra in this repo (Jest + RNTL is TEST-02, a later phase); this phase must not block on building it | On a real device, trigger restore for each store state the build can reach and compare the message text between `ealch://settings` and `ealch://paywall` |
| Signed-out purchase → sign-in → entitlement follows, same device and cross-device | PAY-01 / PAY-03 | 04-08 / Task 3 | Requires a real store sandbox purchase and a licensed tester account; not reproducible in a unit test | Purchase signed out, sign in, check premium persists with no foreground cycle; repeat on a second device |
| `syncIdentity()`'s post-`identify()` reconciliation is immediate (D-02, research assumption A1) | PAY-01 | 04-08 / Task 3 step 5 | Adapty's `identify()` → `getProfile()` freshness guarantee is not stated in vendor docs; one upstream issue reports the opposite | Sign in with an account holding a signed-out purchase; premium must persist immediately, not after the next foreground |
| Existing paying user, offline cold start, is not downgraded or shown a paywall | ROADMAP SC-3 | 04-08 / Task 2C | Requires real offline device state at cold start; the clock-floor logic is unit-testable but the end-to-end launch is not | Force-stop with an entitlement cached, airplane mode, cold-launch, confirm no paywall and a premium surface still opens |
| The gate in its ON position: free allowance sits and grades, paper 2 refused before any clock | PAY-03 | 04-09 / Task 2 | Requires the flag flipped live, a real paper, a real account and a real grading round trip together | Flip with `set-exam-gate.ts --on --free-papers 1`, cold-launch, follow 04-09's A/B/C steps, then restore with `--off` |

---

## Validation Sign-Off

- [x] All tasks have an `<automated>` verify, or are `checkpoint:human-verify` tasks justified in the Manual-Only table above
- [x] Sampling continuity: no 3 consecutive tasks without an automated verify (the longest manual run is 04-08 Task 2 → Task 3, and 04-09 Task 1 and Task 3 are both automated)
- [x] Wave 0 covers every MISSING test reference, with the two deliberate substitutions documented above
- [x] No watch-mode flags in any verify command
- [x] Feedback latency < 30s for every automated command except the two edge-function deploys and the device checkpoints
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** reconciled against the nine plans on 2026-09-20; pending execution.
