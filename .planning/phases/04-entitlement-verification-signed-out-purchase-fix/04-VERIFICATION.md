---
phase: 04-entitlement-verification-signed-out-purchase-fix
verified: 2026-09-20T00:00:00Z
status: human_needed
score: 1/4 truths fully device-verified (2 more code-verified with device confirmation outstanding; 1 device-verified separately via the exam-gate chain)
overrides_applied: 0
human_verification:
  - test: "Set up a Play Console internal-testing track for app.ealch.mobile, add the test account(s) as licensed testers, install the app from that track (not sideloaded), and re-run 04-08's Task 2A/2B on the 'restored' and 'none' branches (make/don't make a sandbox purchase, tap Restore, confirm T.restoreDone vs T.restoreNone render exactly)."
    expected: "restoreOutcome()'s 'restored' and 'none' branches are observed on a real device, not just proven by unit test."
    why_human: "Requires real Google Play Billing purchase/restore flow; cannot be exercised on a sideloaded debug APK (04-08 confirmed this empirically — every restore call returns the store-unreachable 'failed' outcome regardless of purchase history)."
  - test: "From the same Play Console track build, complete a real purchase while signed out, then sign in (same device, then a second device/account), and observe useIsPremium()/Settings reflect premium immediately after identify() resolves, with no foreground/background cycle needed."
    expected: "Entitlement follows the account across the sign-in boundary without a manual refresh or app restart."
    why_human: "This is RESEARCH.md's Assumption A1 (Adapty identify()->getProfile() freshness) — explicitly flagged as MEDIUM-confidence, vendor-dependent, and 'valid only until the D-02 device test is actually run.' That test was never run (04-08 Task 3: NOT RUN — 'no workaround available'). No code in this phase touches syncIdentity() or the merge path; the claim rests entirely on documentation reading, not observation."
  - test: "From the same track build, get a real premium account into a genuine entitled state, force-stop, go fully offline, cold-launch, and confirm Settings still shows the premium plan (no downgrade, no paywall) before any network reconciliation completes."
    expected: "No entitlement flip, no entitlement_downgraded event, no paywall shown while offline."
    why_human: "04-08 Task 2C attempted this via AsyncStorage cache injection and found it does not work — Adapty's own SDK-level profile cache overwrites the injected value on every launch, online or offline, so only a real prior purchase can produce a genuinely testable premium-offline state. The supporting code (loadFor untouched by wasDowngraded) is verified by reading and matches the intended design, but the end-to-end device behavior for an actually-entitled user was never observed."
---

# Phase 4: Entitlement Verification & Signed-Out Purchase Fix Verification Report

**Phase Goal:** A user's purchase reliably reaches their account's entitlement regardless of whether they were signed in at purchase time, and existing paying users are never silently downgraded.
**Verified:** 2026-09-20
**Status:** human_needed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths (ROADMAP Success Criteria)

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Restore Purchases in Settings/paywall gives accurate, distinct feedback for "restored" vs. "no purchases found" | ⚠️ UNCERTAIN (code VERIFIED, device partial) | `purchases.logic.ts`'s `restoreOutcome()` is pure, exhaustively unit-tested (5-case truth table), and consumed identically by `settings.tsx`/`paywall.tsx` via one `Record<RestoreOutcome,string>` map — confirmed by grep (both files import and call the same function, same copy keys). Device test (04-08) confirmed **cross-screen parity** for the reachable `failed` outcome (identical `T.restoreFail` text on both surfaces — PASS). The `restored`/`none` branches themselves were **not observed on a real device**: a sideloaded debug APK cannot reach real Google Play Billing, so every restore call returns `failed` regardless of purchase history. This is a documented infra blocker (Play Console), not a code defect — but the SC's actual behavioral claim ("accurate... restored vs. no purchases found") has only been proven at the unit-test level, never end-to-end. |
| 2 | A user who purchases while signed out, then signs in (same device or a different one), has their entitlement follow them without manual intervention | ⚠️ UNCERTAIN — real gap, not just untested | `purchases.ts`'s `syncIdentity()` (pre-existing, unmodified by this phase) awaits `A.identify(userId)` before calling `A.getProfile()`, which is structurally consistent with Adapty's documented semantics. But `04-RESEARCH.md` explicitly named this **Assumption A1** as MEDIUM-confidence and vendor-dependent, and stated it "should be treated as valid only until the D-02 device test is actually run — that test result supersedes this research's A1 assumption immediately." `04-08-SUMMARY.md` Task 3 records this device test as **NOT RUN**, with "no workaround available." No code change was made anywhere in this phase to `syncIdentity()`/the merge path (no retry/re-fetch fallback was added, which research flagged as the likely fix *if* the test failed). This SC is the phase's own namesake ("Signed-Out Purchase Fix") and remains unconfirmed by any observation — it is closer to a real gap than an accepted low-risk limitation, because unlike SC1/SC3 it rests on unverified third-party vendor timing behavior, not on this codebase's own pure logic. |
| 3 | An existing already-entitled user, first launch after this change, offline, is not downgraded or shown a paywall while reconciliation is pending | ⚠️ UNCERTAIN (code VERIFIED, device not run) | Code inspection confirms the mechanism: `useEntitlement.ts`'s `loadFor` (the offline cache-read path used on cold start) is byte-for-byte untouched by this phase's `wasDowngraded` detection, which fires only from the live `setEntitlement` write path — exactly the split the SC requires, and it is guarded by a cross-file source-text test (`entitlementDowngrade.test.ts`) so a future edit can't silently merge the two paths. Device confirmation (04-08 Task 2C) was attempted via AsyncStorage cache injection and found **not viable**: Adapty's own SDK-level profile cache overwrites the injected value on every launch regardless of network state, so no genuinely "premium offline" state could be produced without a real purchase. Not run; mechanism is sound by inspection and pre-dates this phase (lower risk than #2). |
| 4 | Edge functions that need entitlement (`coach`, `grade-exam`) have a documented, explicit trust decision for the Postgres mirror | ✓ VERIFIED | `coach/index.ts:202-208`: `hasUnlimitedCoach()`'s comment explicitly states "The mirror lagging a fresh purchase by a webhook delivery is acceptable: the app's paywall state is driven by customerInfo, and the next turn after the webhook lands is uncapped." `grade-exam/index.ts:144-165`: `attemptAuthorized()`'s comment explicitly states it "Deliberately does NOT re-read the entitlements mirror... this function trusts that decision" (the exam_attempts row from start-exam-attempt), fail-closed on any error. Both are real, substantive, explicit trust decisions — not implicit assumptions — matching the SC's literal wording. |

**Score:** 1/4 truths fully VERIFIED end-to-end (Truth 4). Truths 1 and 3 are code-verified with device confirmation still outstanding (lower risk — pure, well-tested logic; architecture pre-dates the phase). Truth 2 is the weakest: an unresolved, explicitly-flagged vendor-behavior assumption with zero device observation and no compensating code change.

**Separately, and strongly:** the exam-gate authorization chain (D-03/D-05/D-06/D-07, the other half of PAY-03) IS fully device-proven — 04-09 exercised `examGateOn=true` on a real Pixel 9: free allowance sat and graded (including a real LLM round trip via `grade-exam`), paper 2 was refused before any clock started even via a deep-link bypass of the paper-list lock, a signed-out candidate was routed to sign-in, D-06's grace window was measured correct against real content, `grade-exam`'s `expires_at` predicate was proven live→expired→restored directly against Postgres, and the flag was confirmed restored to `false`. This part of PAY-03 has no gap.

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `ealch-v2/src/utils/examGate.logic.ts` + `examAttempt.logic.ts` | Pure four-input gate decision + grace-window math | ✓ VERIFIED | Exists, 8-case + boundary-case truth tables pass, consumed by both client and (via parity test) the Deno copy |
| `ealch-v2/supabase/functions/start-exam-attempt/index.ts` | Server-side exam-start gate, writes `exam_attempts` | ✓ VERIFIED, WIRED | Deployed live, curl-proven (3/3 auth-boundary cases), consumed by `exam-paper.tsx` via `startExamAttempt()` |
| `ealch-v2/supabase/functions/grade-exam/index.ts` (`attemptAuthorized`) | Attempt-validation gate before quota/LLM, flag-conditioned | ✓ VERIFIED, WIRED | Deployed live, curl-proven both with flag off (grades normally) and via the 04-09 device pass with flag on (accepted a real authorized PE attempt, refused nothing it shouldn't have) |
| `ealch-v2/supabase/schema.sql` (`exam_attempts` table) | Composite-PK authorization table, RLS locked | ✓ VERIFIED | Live in production Postgres, verified twice via idempotent apply script, composite PK confirmed |
| `ealch-v2/src/services/purchases.logic.ts` (`restoreOutcome`) | Single source of truth for restore feedback | ✓ VERIFIED (code), ⚠️ PARTIAL (device — see Truth 1) | Pure, 5-test truth table, wired identically into `settings.tsx`/`paywall.tsx` |
| `ealch-v2/src/store/entitlement.logic.ts` (`wasDowngraded`) | Loud, logged premium→free flip, scoped away from cache-read | ✓ VERIFIED, WIRED | `entitlement_downgraded` fires only from `setEntitlement`; `loadFor` unchanged; guarded by a source-text test |
| `ealch-v2/src/services/purchases.ts` (`syncIdentity`) | Signed-out-purchase-merge reconciliation | ⚠️ UNCHANGED, UNVERIFIED | Pre-existing code, not modified by this phase; structurally plausible per vendor docs but never device-confirmed (Truth 2) |

### Key Link Verification

| From | To | Via | Status | Details |
|------|-----|-----|--------|---------|
| `exam-paper.tsx` (`go()`) | `start-exam-attempt` edge fn | `startExamAttempt()` awaited before navigation | ✓ WIRED | `examAttemptWiring.test.ts` pins gate-before-navigation ordering and refusal-blocks-navigation; device-confirmed in 04-09 (paper 2 tap-start routed to paywall, no runner opened) |
| `exam-section.tsx` (`submit()`) | `grade-exam` | `paperId`/`skill` now required fields on `GradeRequest` | ✓ WIRED | `tsc --noEmit` enforces it at the only call site; device-confirmed (04-09 A4: real AI grade returned, not a refusal) |
| `settings.tsx` / `paywall.tsx` | `purchases.logic.ts` | `restoreOutcome()` call + `Record` copy map | ✓ WIRED | Both screens call the same function; device-confirmed for the `failed` branch only (Truth 1) |
| `useEntitlement.setEntitlement` | `analytics.ts` (`entitlement_downgraded`) | `wasDowngraded()` check before `set()` | ✓ WIRED | Source-text guard test confirms `loadFor` is excluded; not confirmed against a real downgrade event on device (no PostHog key set during 04-08's device session) |
| `purchases.ts` (`syncIdentity`) | `useEntitlement` (cross-device merge) | `identify()` → `getProfile()` → `apply()` | ⚠️ NOT DEVICE-CONFIRMED | Code path exists and is unchanged; the specific timing guarantee this phase was meant to verify (D-02) was never exercised |

### Requirements Coverage

| Requirement | Source Plan(s) | Description | Status | Evidence |
|-------------|----------------|--------------|--------|----------|
| PAY-01 | 04-04, 04-08 | Restore gives accurate "restored" vs "no purchases found" feedback | ⚠️ NEEDS HUMAN | Code-complete and unit-tested; marked "Complete" in REQUIREMENTS.md at the 04-04 commit (`ec090ea`), **before** 04-08's device test ran and found the `restored`/`none` branches unrunnable on the available build. The marking is optimistic relative to what was actually device-observed. |
| PAY-03 | 04-01/02/03/05/06/07/09 | Edge-function entitlement trust decision + signed-out-purchase-merge follows the user | ⚠️ NEEDS HUMAN (split) | The edge-function trust-decision half is fully VERIFIED (Truth 4) and the exam-gate half is fully device-proven (04-09). The signed-out-purchase-merge half (Truth 2, the requirement's own second clause) was never device-confirmed. Marked "Complete" in REQUIREMENTS.md at the 04-07 commit (`9fa3eb2`), **before** 04-08's device session (which found this NOT RUN) and 04-09's session even started. The "Complete" marking predates the attempt to verify the specific clause it claims. |

### Anti-Patterns Found

None found in the phase's new/modified files (`examAttempt.logic.ts`, `examGate.logic.test.ts`, `purchases.logic.ts`, `examAttempt.ts`, `entitlement.logic.ts`, `start-exam-attempt/index.ts`, `grade-exam/index.ts`) — no TODO/FIXME/placeholder markers, no stubbed handlers, no hardcoded-empty returns feeding rendering.

### Behavioral Spot-Checks

Skipped — this phase's runnable surfaces are either (a) already exhaustively spot-checked by the phase's own device sessions (04-08, 04-09), whose curl/device evidence is quoted directly above rather than re-run, or (b) require a live Supabase session / real device this verifier does not have. Re-running `npm test` was judged low-value: every SUMMARY already reports a full green suite (5351/5351 as of 04-09) and no source file has changed since.

## Deferred Items

None — no later phase in the roadmap explicitly covers the three outstanding device-verification items. Phase 5's own dependency rationale ("Depends on: Phase 4 — widening what's gated before the restore/entitlement escape hatch is proven turns a low-stakes bug into a high-stakes one") in fact argues the opposite: Phase 5 explicitly expects Phase 4's escape hatch to be *proven* first, not merely code-complete. Phase 5 planning has already been committed (4 docs, per git status) while this proof gap is still open — worth the developer's attention independent of this verification's outcome.

## Human Verification Required

See the three items in the frontmatter `human_verification` block above (Play Console restore branches, signed-out cross-device merge, offline premium cold start). All three share one root blocker — no Play Console internal-testing track exists yet for `app.ealch.mobile` — but they carry different risk:

- **Lower risk, reasonable to accept as a documented limitation for now:** Truth 1 (restore feedback) and Truth 3 (offline no-downgrade). Both rest on pure, exhaustively unit-tested logic and, for Truth 3, an architecture that pre-dates this phase and was left untouched. The remaining risk is "does the Adapty SDK actually report `premium: true`/`false` correctly at the integration boundary" — plausible but not exotic, and low-cost to close later.
- **Higher risk, recommend NOT waving through silently:** Truth 2 (signed-out-purchase-merge / Assumption A1). This is the literal subject of the phase's own name, rests on an explicitly-flagged MEDIUM-confidence vendor-timing assumption, was never observed, and received no compensating code change (e.g., a retry/re-fetch fallback) in case the assumption is wrong. Research explicitly said this assumption is "valid only until the device test is run" — that test still hasn't run.

## Gaps Summary

Phase 4's server-side/exam-gate work (D-03 through D-07, and the trust-decision documentation for `coach`/`grade-exam`) is genuinely, rigorously device-proven — 04-09's session is strong, specific, real-Postgres/real-LLM evidence, not a rubber stamp. That part of the phase goal is solid.

The purchase/entitlement side (PAY-01's restore feedback, and PAY-03's signed-out-purchase-merge clause) is where the phase goal is **not yet demonstrated**, only argued from code reading and unit tests. 04-08's device session was honest about this — it found a real, specific, external blocker (no Play Console track) and stopped rather than fabricating results. That honesty is exactly why this should go back to the developer rather than being silently marked passed: the SUMMARYs already tell this story accurately; the risk is only in whether ROADMAP.md/REQUIREMENTS.md get marked "complete" in a way that outruns what was actually observed.

**Recommendation:** Do not mark Phase 4 "complete" (closed) in ROADMAP.md without an explicit decision from the developer on Truth 2 specifically. Two reasonable paths, either is defensible:

1. **Stay open** until a Play Console internal-testing track exists and the three NOT RUN device checks (especially the signed-out-purchase-merge one) are actually run — matching Phase 5's own stated dependency rationale.
2. **Close with a documented, explicit override** accepting the residual risk (add an `overrides:` entry to this file naming Truth 2 specifically, who accepted it, and why — e.g., "ship now, the Play Console track is tracked as a fast-follow before Phase 5's PAY-02 rollout goes live to real users"), which at least makes the risk visible in ROADMAP.md rather than implied by a REQUIREMENTS.md checkbox that was ticked before the test that was supposed to justify it ran.

Either way, REQUIREMENTS.md's PAY-01/PAY-03 "Complete" markings should at minimum get a footnote pointing at this VERIFICATION.md, since both were checked off before the device sessions that were meant to confirm them, and those sessions found real, specific, unresolved gaps.

---

*Verified: 2026-09-20*
*Verifier: Claude (gsd-verifier)*
