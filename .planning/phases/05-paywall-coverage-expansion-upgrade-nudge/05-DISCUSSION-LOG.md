# Phase 5: Paywall Coverage Expansion & Upgrade Nudge - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-20
**Phase:** 05-paywall-coverage-expansion-upgrade-nudge
**Areas discussed:** Gating rule scope, Paywall explainer, Upgrade nudge trigger + banner reuse, Reconciliation state

---

## Gating rule scope

| Option | Description | Selected |
|--------|-------------|----------|
| Ratify as-is | Sons+A1 free, A2+examiner gated — document formally, audit for gaps | |
| Widen the free tier | e.g. taste of A2 before the wall | |
| Something else | User-described alternative | ✓ (redirected to a broader review) |

**User's choice:** "Let's review the scope of the premium features, what makes sense for a language app." Claude surfaced the full existing bundle (levels.all, coach.unlimited, roleplay.unlimited, examiner, plus unshippable audio.packs) discovered via direct code reads, then the discussion converged on ratifying the existing boundary after review.
**Notes:** PROJECT.md/REQUIREMENTS.md's "only 1 of 12+ lessons gated" framing was found stale — 4+ screens already enforce the gate, matching common language-app monetization shape (content depth + AI usage caps + practice caps + exam tier).

| Sub-question | Selected |
|---|---|
| lesson.tsx gate-timing flash (useEffect-after-render) | Fix it |
| Audit for ungated content surfaces first | Yes, audit first |
| Two tiers (Première + Examiner) vs merge | Keep two tiers |
| audio.packs marketed but not shippable | Remove from marketing |
| Paywall messaging granularity | Keep it granular |
| Free/paid boundary itself | Right as-is, no change |

---

## Paywall explainer

| Option | Description | Selected |
|--------|-------------|----------|
| Yes, contextual headline | Reuse the from/feature param already passed but never read | ✓ |
| Keep one generic paywall | Same screen regardless of trigger | |
| You decide | | |

**User's choice:** Contextual headline per gate trigger.
**Notes:** `/paywall` already presents as `slide_from_bottom` (modal-style) per `_layout.tsx` — the "modal" feel is largely already there; the gap was purely the missing context-awareness.

| Sub-question | Selected |
|---|---|
| What should "no accidental dismiss/bypass" prevent | Current close behavior already fine — confirm/test, don't rebuild |
| Close-to destination | Back to where they were |

---

## Upgrade nudge trigger + banner reuse

| Option | Description | Selected |
|--------|-------------|----------|
| Usage-signal based | Nudge after brushing a limit without being blocked | ✓ |
| Milestone based | e.g. after finishing A1, streak day 3/7 | |
| Time/schedule based | Fixed interval, untargeted | |

**User's choice:** Usage-signal based trigger.
**Notes:** Ties the nudge to an already-engaged moment.

| Sub-question | Selected |
|---|---|
| Frequency cap vs. Phase 10's 3/year | Own cadence, more frequent — planning picks specifics |
| PushBanner/useUI generalization | Generalize into multi-kind slot (one banner at a time) |
| Nudge copy | Tailored to the trigger |

---

## Reconciliation state

| Option | Description | Selected |
|--------|-------------|----------|
| Yes, hook onto entitlement_downgraded | Reuses Phase 4's already-verified detection | ✓ |
| Something different | | |

**User's choice:** Hook directly onto Phase 4's `entitlement_downgraded` event.
**Notes:** That event only fires from `setEntitlement` (live Adapty write path), never `loadFor` (cache-read) — so it's already false-positive-safe against offline cold starts.

| Sub-question | Selected |
|---|---|
| UI weight (banner vs modal) | Reuse the generalized banner pattern (non-blocking) |
| Message specificity | Generic + path to fix it, not a guessed specific cause |

---

## Claude's Discretion

- Exact frequency-cap cadence for the upgrade nudge (once/week vs. per-trigger-with-cooldown, etc.)
- Exact TypeScript shape of the generalized banner slot
- Precise copy/wording for contextual paywall headlines and nudge messages
- Which specific screens the pre-build audit checks first (illustrative candidates given: smartreview, flashcards, dictation, voiceflash, search/browse — planning should do a fresh scan)

## Deferred Ideas

None — discussion stayed within phase scope. The free-tier-boundary-change option was raised and explicitly declined in favor of keeping the existing boundary.
