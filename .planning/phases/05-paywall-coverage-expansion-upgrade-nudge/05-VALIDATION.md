---
phase: 05
slug: paywall-coverage-expansion-upgrade-nudge
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-09-20
---

# Phase 05 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | `node --test` (native Node test runner) |
| **Config file** | none — plain `*.test.ts` files colocated with the logic they test |
| **Quick run command** | `node --test ealch-v2/src/store/entitlement.logic.test.ts` (or the equivalent touched logic test file) |
| **Full suite command** | check `ealch-v2/package.json`'s `test` script for the exact glob; see 05-RESEARCH.md Validation Architecture |
| **Estimated runtime** | ~{N} seconds — TBD by planner from actual suite size |

---

## Sampling Rate

- **After every task commit:** Run `node --test <touched-logic-file>.test.ts`
- **After every plan wave:** Run full `node --test` sweep of `src/store/*.logic.test.ts` plus a manual device pass for the four newly-gated drill screens (no RNTL/component-test infra exists yet)
- **Before `/gsd-verify-work`:** Full suite green + manual device checkpoint (free account, walk all four drill screens with an A2 `level` param, confirm each redirects)
- **Max feedback latency:** TBD by planner

---

## Per-Task Verification Map

*Populated by the planner from 05-RESEARCH.md's Phase Requirements → Test Map during PLAN.md creation.*

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| TBD | TBD | TBD | PAY-02 | — | flashcards/dictation/voiceflash/sentence deny A2+ level without `levels.all` | unit + manual | `node --test ealch-v2/src/store/entitlement.logic.test.ts` | ❌ Wave 0 | ⬜ pending |
| TBD | TBD | TBD | PAY-02 | — | `entitlement_downgraded` triggers reconciliation banner, never from `loadFor` | unit | `node --test ealch-v2/src/store/entitlement.logic.test.ts` | ❌ Wave 0 | ⬜ pending |
| TBD | TBD | TBD | PAY-05 | — | Roleplay nudge fires exactly when the day's free scenario is consumed | unit | new predicate test, `node --test` | ❌ Wave 0 | ⬜ pending |
| TBD | TBD | TBD | PAY-05 | — | Nudge frequency cap holds across repeated triggers within cooldown | unit | new test, `node --test` | ❌ Wave 0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] A pure predicate for "should the roleplay nudge fire" (extends `entitlement.logic.ts` or a new sibling file, zero-RN-import discipline)
- [ ] Confirm whether `useEntitlement.test.ts` exists; if not, add coverage for the new `showBanner` side effect inside `setEntitlement` (mock `useUI`'s `getState()`, no React Native import)
- [ ] No component-test render assertions for the four drill-screen gates or paywall contextual copy — use a manual device verification checkpoint instead (TEST-02, a later phase, hasn't built RNTL infra yet)

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Drill-screen gate redirects (flashcards/dictation/voiceflash/sentence) | PAY-02 | JSX render-gating isn't unit-testable without RNTL, which doesn't exist yet | On a free test account, deep-link into each drill screen with an A2+ `level` param; confirm redirect/lock, no content flash |
| Contextual paywall copy per trigger (`from`/`feature`) | PAY-02 | Visual/copy correctness, not logic | Trigger paywall from a lesson gate, a coach-limit gate, and an exam gate; confirm distinct headline/copy per D-08 |
| Reconciliation banner on genuine downgrade | PAY-02 | Requires a real Adapty-derived downgrade transition, not mockable without RNTL | Force `wasDowngraded` transition path per Phase 4's device test method; confirm banner shows before any paywall reappearance |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < {N}s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
