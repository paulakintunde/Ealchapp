# Phase 4: Entitlement Verification & Signed-Out Purchase Fix - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-20
**Phase:** 04-entitlement-verification-signed-out-purchase-fix
**Areas discussed:** grade-exam entitlement gate, Downgrade monitoring, PAY-01/PAY-03 verification scope, Stale doc/comment cleanup, Grace window, Scope (free-diagnostic-exam boundary), Buffer duration, Trust source, Rejection UX, Monitoring scope

---

## Which areas to discuss (initial selection)

| Option | Description | Selected |
|--------|-------------|----------|
| grade-exam entitlement gate | grade-exam has zero check on the 'examiner' feature today | ✓ |
| Downgrade monitoring | No telemetry exists today for a premium→free flip | ✓ |
| PAY-01/PAY-03 verification scope | Restore-purchases and signed-out-purchase-merge look already built | ✓ |
| Stale doc/comment cleanup | coach/index.ts's hasUnlimitedCoach() comment still says 'revenuecat-webhook' | ✓ |

**User's choice:** All four selected, plus a substantial free-text addition specifying the exam-attempt-continuity policy in detail (checked entitlement at exam start, authorized attempt, grace window to finish/grade even mid-lapse, reject new attempts after expiry, server record authoritative not client `isPremium`, add monitoring, test not rebuild, fix the stale reference now).

---

## Grace window

| Option | Description | Selected |
|--------|-------------|----------|
| Exam's own time limit + a fixed buffer | Ties the window to the paper's already-measured duration | ✓ |
| One flat window for all papers | e.g. 4 hours regardless of paper length | |
| 24 hours | Generous flat window | |

**User's choice:** Exam's own time limit + a fixed buffer.

---

## Scope — free-diagnostic-exam boundary

| Option | Description | Selected |
|--------|-------------|----------|
| Yes, defer to Phase 5 | This is PAY-02's job (paywall coverage), not Phase 4's (entitlement integrity) | ✓ |
| No, decide it now anyway | Lock the policy as part of this phase's CONTEXT.md | |

**User's choice:** Defer to Phase 5.

---

## Buffer duration

| Option | Description | Selected |
|--------|-------------|----------|
| 60 minutes | Covers slow submit + grading + delayed webhook, without much cancel-then-keep-access window | ✓ |
| 30 minutes | Tighter, riskier if webhooks lag | |
| 2 hours | Safest for flaky connections, longest cancel-then-keep-access window | |

**User's choice:** 60 minutes.

---

## Trust source

| Option | Description | Selected |
|--------|-------------|----------|
| Postgres mirror | Same pattern coach already uses — fail-closed, no new external dependency | ✓ |
| Live Adapty server check | Zero webhook-lag window, but adds latency + a new external dependency | |

**User's choice:** Postgres mirror.

---

## Rejection UX

| Option | Description | Selected |
|--------|-------------|----------|
| Client blocks exam start entirely | Defense-in-depth, mirrors Phase 3's TTS guest gate | ✓ |
| Let them start, fail at grading | Simpler, worse experience (finish a whole exam then find out it won't be graded) | |

**User's choice:** Client blocks exam start entirely.

---

## Monitoring scope

| Option | Description | Selected |
|--------|-------------|----------|
| App-wide | One general event wherever entitlement store detects premium→free | ✓ |
| Exam-attempt flow only | Narrower, just the exam-grading rejection case | |

**User's choice:** App-wide.

---

## Claude's Discretion

- Exact analytics event name(s)/schema for the downgrade-monitoring event(s) — follow the existing `trackEvent`/`AnalyticsEvent` pattern.
- New-table-vs-signed-token implementation choice for the exam-attempt authorization construct.
- Fixing the stale `revenuecat-webhook` comment in `coach/index.ts` (user confirmed doing this now, mechanics are Claude's).

## Deferred Ideas

- Free diagnostic/sample exam + "let everyone browse exam info" policy — belongs to Phase 5 (PAY-02: paywall coverage), not Phase 4 (entitlement integrity).
