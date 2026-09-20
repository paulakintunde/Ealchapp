---
phase: 04
slug: entitlement-verification-signed-out-purchase-fix
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-09-20
---

# Phase 04 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Node's built-in `node:test` + `node:assert` (no Jest/Vitest in this repo) |
| **Config file** | none — plain `.test.ts` files run directly via `node --test` |
| **Quick run command** | `node --test src/utils/examAttempt.logic.test.ts` (or the specific new/edited `.logic.test.ts` for the task at hand) |
| **Full suite command** | `npm test` (runs `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"`, per `ealch-v2/package.json`) |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run the specific new/edited `.logic.test.ts` file for that task.
- **After every plan wave:** Run `npm test` (full suite across `src/**` and `supabase/functions/**`).
- **Before `/gsd-verify-work`:** Full suite must be green, PLUS the manual device-verification checklist below signed off.
- **Max feedback latency:** 30 seconds.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 04-01-01 | 01 | 0 | PAY-01 | — | `restorePurchases()` returns distinct `{ok,premium}` for restored vs. not-found vs. unavailable | unit | `node --test src/services/purchases.test.ts` | ❌ W0 | ⬜ pending |
| 04-01-02 | 01 | 0 | PAY-03 | V4 | Server gate mirrors `examPaperAllowed()`: `gateOn=false` → always allowed; `gateOn=true` + unentitled + `paperNo<=freePapers` → allowed; `gateOn=true` + unentitled + `paperNo>freePapers` → rejected; entitled → always allowed | unit | `node --test src/utils/examStartGate.logic.test.ts` | ❌ W0 | ⬜ pending |
| 04-01-03 | 01 | 0 | PAY-03 | V4 | Grace window: attempt at T, section `timingS` S, request at T+S+59min → graded; at T+S+61min → rejected | unit | `node --test src/utils/examAttempt.logic.test.ts` | ❌ W0 | ⬜ pending |
| 04-02-01 | 02 | 1 | PAY-03 | V4 / Tampering | `grade-exam` rejects grading when no valid `exam_attempts` row exists or the row is expired | unit (source-text) + integration (manual/staging) | `node --test supabase/functions/grade-exam/grade-exam-gate.test.ts` | ❌ W0 | ⬜ pending |
| 04-02-02 | 02 | 1 | PAY-03 | — | `hasUnlimitedCoach()` comment says `adapty-webhook`, not `revenuecat-webhook` | trivial (source-text assertion) | grep-based check in same test file | — | ⬜ pending |
| 04-03-01 | 03 | 1 | PAY-03 / D-08 | — | Downgrade event fires exactly once on a premium→free `setEntitlement` transition, never on `loadFor` | unit | `node --test src/store/entitlement.logic.test.ts` | Partial (extend existing) | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*
*Task IDs above are provisional — the planner assigns final plan/task numbering; this map should be reconciled against the actual PLAN.md files once written.*

---

## Wave 0 Requirements

- [ ] `src/utils/examAttempt.logic.ts` + `.test.ts` — grace-window pure math (new)
- [ ] `src/utils/examStartGate.logic.ts` (or equivalent) + `.test.ts` — the four-input decision (gateOn/entitled/freePapers/paperNo), mirroring client `examGate.logic.ts`'s `examPaperAllowed()` shape server-side (Deno functions duplicate rather than cross-import from `ealch-v2/src`, per existing `grade-exam` convention)
- [ ] `src/services/purchases.test.ts` — does not exist today; extract and test the realistically-testable pure decision shape of `restorePurchases()`/`syncIdentity()` (the Adapty SDK calls themselves are not mockable without a test harness this repo doesn't have)
- [ ] `supabase/functions/grade-exam/grade-exam-gate.test.ts` (or extend `examSection.logic.test.ts`) — source-text assertions that the new gate logic exists and runs before grading, matching house pattern

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Settings/paywall screens render distinct copy for each `restorePurchases()` outcome | PAY-01 | No RN component-test infra in this repo (Jest+RNTL is a separate, still-pending phase-19 item — TEST-02); this phase should not block on building that infra | On a real device: trigger restore with an active subscription (expect "restored"), with no purchase history (expect "no purchases found"), and with network off (expect "unavailable") on both `app/settings.tsx` and `app/paywall.tsx` |
| Signed-out purchase → sign-in → entitlement follows, same device and cross-device | PAY-01 / PAY-03 | Requires a real store sandbox purchase + Adapty dashboard state; not reproducible in a unit test | Purchase signed-out on device A, sign in, confirm entitlement appears without manual action; repeat signing in on device B |
| `syncIdentity()`'s post-`identify()` reconciliation pulls the merged profile immediately, not a stale pre-merge one (D-02) | PAY-01 | Adapty vendor timing behavior is not independently verifiable from docs alone (MEDIUM-confidence claim in research) | On a real device: sign in with an account that has a pre-existing signed-out purchase and confirm premium status reflects immediately post sign-in, not after the next foreground/relaunch |
| Existing paying user, first launch after this change, offline, is not downgraded or shown a paywall while reconciliation is pending | Success Criterion 3 | Requires real offline device state at cold start; cache-floor logic (`advancedFloor`/`effectiveNow`) is unit-testable but the end-to-end cold-start UX is not | Force-quit app with an active entitlement cached, enable airplane mode, cold-launch, confirm no paywall/downgrade appears |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
