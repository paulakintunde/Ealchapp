---
phase: 05
slug: paywall-coverage-expansion-upgrade-nudge
status: planned
nyquist_compliant: true
wave_0_complete: false
created: 2026-09-20
updated: 2026-09-20
---

# Phase 05 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | `node --test` (native Node test runner, Node v24.15.0 — TypeScript type-stripping is native, no transpile step) |
| **Config file** | none — plain `*.test.ts` files colocated under `src/**` |
| **Quick run command** | `node --test ealch-v2/src/store/<file>.test.ts` (runs from the repo root; a single store suite completes in under 1s) |
| **Full suite command** | `npm --prefix ealch-v2 test` (glob: `src/**/*.test.ts` plus `supabase/functions/**/*.test.ts`) |
| **Typecheck** | `npm --prefix ealch-v2 run typecheck` |
| **i18n parity** | `npm --prefix ealch-v2 run test:i18n` |
| **Measured runtime** | full suite 5351 tests, 36.3s test time / ~40s wall clock (baseline measured 2026-09-20, pre-phase, 0 failures) |

**Note on the test glob:** `package.json`'s `test` script sweeps `src/**/*.test.ts` only. `app/**` is NOT swept. Every wiring suite in this phase therefore lives under `ealch-v2/src/store/` and reads the screen it asserts against via `readFileSync(resolve(srcDir, '../../app/<screen>.tsx'))`, following the pattern `entitlementDowngrade.test.ts` already established in Phase 4.

---

## Sampling Rate

- **After every task commit:** the task's own `<automated>` command (a single store suite, under 1s, or `typecheck` at ~15s).
- **After every plan wave:** `npm --prefix ealch-v2 test` plus `npm --prefix ealch-v2 run typecheck`.
- **Before `/gsd-verify-work`:** full suite green, typecheck clean, i18n parity green, plus the 21-item device checkpoint in Plan 07 Task 2.
- **Max feedback latency:** 40s (the full suite). Per-task latency is under 1s for the pure-predicate tasks and under 20s for the typecheck-gated ones. No task in this phase waits longer than one full-suite run for its signal.
- **No watch-mode flags** are used anywhere in this phase.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 05-01-T1 | 01 | 1 | PAY-02 | T-05-01, T-05-12 | An explicit A2+ level, an unrecognised band, and a mixed deck that filters to nothing all read as locked; an empty corpus query does not | unit (pure) | `node --test ealch-v2/src/store/entitlementDrillGate.test.ts` | created by this task | pending |
| 05-01-T2 | 01 | 1 | PAY-05 | T-05-02 | The nudge is due only when the free allowance is spent AND the 24h cooldown elapsed; never for an entitled user | unit (pure) | `node --test ealch-v2/src/store/entitlementNudge.test.ts` | created by this task | pending |
| 05-01-T3 | 01 | 1 | PAY-02, PAY-05 | T-05-03, T-05-04 | Every new user-facing string exists in both language tables; reconciliation copy names no cause | unit (i18n parity) | `npm --prefix ealch-v2 run test:i18n && npm --prefix ealch-v2 run typecheck` | yes (`src/i18n/i18n.test.ts`) | pending |
| 05-02-T1 | 02 | 1 | PAY-02 | T-05-07 | A gated lesson is never written into the persisted resume pointer | source-text assertion (covered by 05-02-T3's suite) + typecheck | `npm --prefix ealch-v2 run typecheck` | yes | pending |
| 05-02-T2 | 02 | 1 | PAY-02 | T-05-06, T-05-09 | A locked parcours step shows the lock before the tap and stays pressable | source-text assertion (covered by 05-02-T3's suite) + typecheck | `npm --prefix ealch-v2 run typecheck` | yes | pending |
| 05-02-T3 | 02 | 1 | PAY-02 | T-05-06 | Only themes with no free band carry the lock pill; all seven Plan-02 edits are pinned | source-text assertion | `node --test ealch-v2/src/store/lockVisibilityWiring.test.ts` | created by this task | pending |
| 05-03-T1 | 03 | 2 | PAY-02 | T-05-10, T-05-11, T-05-13 | flashcards and dictation gate through the shared predicate, redirect with gate context, and never paint gated content | source-text assertion (covered by 05-03-T2's suite) + typecheck | `npm --prefix ealch-v2 run typecheck` | yes | pending |
| 05-03-T2 | 03 | 2 | PAY-02 | T-05-13, T-05-15 | All four drill screens gate, redirect and short-circuit; a forged level param cannot reach A2 items | source-text assertion | `node --test ealch-v2/src/store/drillGateWiring.test.ts` | created by this task | pending |
| 05-04-T1 | 04 | 2 | PAY-02 | T-05-18, T-05-19 | The examiner gate never shows the Premiere plan picker, and is checked before the already-premium branch | source-text assertion (covered by 05-04-T2's suite) + typecheck | `npm --prefix ealch-v2 run typecheck` | yes | pending |
| 05-04-T2 | 04 | 2 | PAY-02 | T-05-18, T-05-21 | Every exam gate carries its context; the paywall never writes entitlement state; the feature list stays at three real gates | source-text assertion | `node --test ealch-v2/src/store/paywallContextWiring.test.ts` | created by this task | pending |
| 05-05-T1 | 05 | 2 | PAY-05 | T-05-23 | One nullable slot structurally guarantees one banner at a time; both existing writers migrated | source-text assertion (covered by 05-05-T2's suite) + typecheck | `npm --prefix ealch-v2 run typecheck` | yes | pending |
| 05-05-T2 | 05 | 2 | PAY-05 | T-05-24, T-05-25, T-05-26 | Each kind has its own press target and copy; the old boolean API is gone tree-wide; new kinds auto-hide | source-text assertion | `node --test ealch-v2/src/store/bannerSlotWiring.test.ts` | created by this task | pending |
| 05-06-T1 | 06 | 3 | PAY-05 | T-05-27 | The nudge cooldown persists across restarts and needs no migration for existing installs | typecheck | `npm --prefix ealch-v2 run typecheck` | yes | pending |
| 05-06-T2 | 06 | 3 | PAY-05 | T-05-28, T-05-33 | The cooldown is stamped before the banner is raised; no coach nudge is hand-rolled; the block gate is untouched | source-text assertion | `node --test ealch-v2/src/store/nudgeTriggerWiring.test.ts` | created by this task | pending |
| 05-06-T3 | 06 | 3 | PAY-02 | T-05-29, T-05-30, T-05-31, T-05-32 | Reconciliation fires from `setEntitlement` and never from `loadFor`; no subscription exists; Phase 4's offline guard intact | source-text assertion (extends Phase 4's suite) | `node --test ealch-v2/src/store/entitlementDowngrade.test.ts` | yes (extended) | pending |
| 05-07-T1 | 07 | 4 | PAY-02, PAY-05 | T-05-36 | The written rule states it is not a security boundary and names every deferred follow-up | doc assertions + full suite | `npm --prefix ealch-v2 test` | created by this task | pending |
| 05-07-T2 | 07 | 4 | PAY-02, PAY-05 | T-05-34, T-05-35, T-05-37 | Render-level behaviour confirmed on device, including the over-blocking false-positive check | manual (blocking checkpoint) | `npm --prefix ealch-v2 test && grep -n "const DEV_UNLOCK_A2 = false" ealch-v2/src/store/entitlement.logic.ts` | n/a | pending |

*Status: pending · green · red · flaky*

---

## Wave 0 Requirements

All four gaps named in 05-RESEARCH.md's Validation Architecture are assigned to a task in this phase. None blocks Wave 1 start, because Plan 01 creates the two missing predicate suites as its own first two tasks.

- [ ] A pure predicate for "should the roleplay nudge fire" — **assigned: 05-01-T2**, new file `ealch-v2/src/store/entitlementNudge.test.ts`, zero-RN-import discipline preserved.
- [ ] A pure predicate for the drill-deck band gate (not named in RESEARCH, added by planning once the two deck shapes were confirmed) — **assigned: 05-01-T1**, new file `ealch-v2/src/store/entitlementDrillGate.test.ts`.
- [ ] Coverage for the new `showBanner` side effect inside `setEntitlement` — **resolved: `ealch-v2/src/store/entitlementDowngrade.test.ts` already exists** (Phase 4) and already reads `useEntitlement.ts` as source text to assert the `setEntitlement` / `loadFor` split. **05-06-T3 extends that same test** rather than adding a rival file. No React Native import is introduced.
- [ ] No RNTL/component-test infra exists (TEST-02 is a later, unrelated phase) — **resolved by substitution, not by deferral**: every screen-level behaviour in this phase is pinned by a source-text assertion suite (`lockVisibilityWiring`, `drillGateWiring`, `paywallContextWiring`, `bannerSlotWiring`, `nudgeTriggerWiring`), and the render-level proof is the blocking device checkpoint in 05-07-T2. The residual gap is recorded in `05-GATING-RULE.md`'s follow-up table so TEST-02 inherits it explicitly.

---

## Manual-Only Verifications

Every row below maps to a numbered item in Plan 07 Task 2's 21-item device checklist.

| Behavior | Requirement | Device items | Why Manual |
|----------|-------------|--------------|------------|
| Drill-screen gate redirects, with no content flash | PAY-02 | A1-A4 | JSX render-gating is not unit-testable without RNTL. Source-text assertions prove the code says it; only a device proves the frame. |
| The gate does not over-block free content (mixed deck, no-theme deck, free-band step) | PAY-02 | B5-B7 | The false-positive failure mode. A gate that walls off paid-for or free content is a refund event and cannot be caught by asserting the code's presence. |
| Lock pill visible before the tap, locked rows still pressable | PAY-02 | C8, C9 | Visual placement and press behaviour. |
| Resume pointer no longer names a locked lesson | PAY-02 | D10 | Requires a real bounce-and-back navigation sequence across two screens. |
| Contextual paywall copy per trigger, including the examiner explainer with no plan picker | PAY-02 | E11-E16 | Copy and layout correctness, plus the confirmation that no price appears on the examiner branch. |
| Existing Speak Mode reminder unchanged after the banner refactor | PAY-05 | F17 | Regression check on shipped notification behaviour. |
| Upgrade nudge fires once, auto-hides at 10s, and respects the 24h cadence | PAY-05 | F18, F19 | Timing and cadence across two sessions. |
| Reconciliation banner on a genuine downgrade, and NOT on an offline cold start | PAY-02 | G20, G21 | Requires a real Adapty-derived transition plus an airplane-mode cold start; the offline guard is Phase 4's contract and must be re-proven. |

---

## Validation Sign-Off

- [x] All tasks have an `<automated>` verify command, or an explicit Wave 0 dependency that this phase itself creates
- [x] Sampling continuity: no 3 consecutive tasks without an automated verify (every task in Plans 01-07 carries one)
- [x] Wave 0 covers all MISSING references (two new predicate suites created in 05-01; the third gap resolved against an existing Phase 4 file; the fourth resolved by source-text substitution plus a blocking device checkpoint)
- [x] No watch-mode flags
- [x] Feedback latency under 40s (full suite); under 1s for the pure-predicate tasks
- [x] `nyquist_compliant: true` set in frontmatter
- [ ] `wave_0_complete` flips to true in 05-07-T1, once the suites actually exist and pass

**Approval:** planned (2026-09-20). Statuses in the Per-Task Verification Map are filled in by 05-07-T1 after execution.
