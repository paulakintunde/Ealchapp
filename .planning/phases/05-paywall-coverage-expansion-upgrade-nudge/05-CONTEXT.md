# Phase 5: Paywall Coverage Expansion & Upgrade Nudge - Context

**Gathered:** 2026-09-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Making the *already-built* gating boundary (sons+A1 free, A2+/coach/roleplay gated behind Première, exam papers behind a separate Examiner tier) explainable, consistently enforced, and free of a false-marketing gap — then adding a contextual paywall, a proactive usage-signal-triggered upgrade nudge, and a reconciliation state for genuine entitlement downgrades. This phase is about polish, consistency, and communication of an already-functional gate — not building gating logic from scratch.

**Important finding from source-read research during this discussion:** PROJECT.md/REQUIREMENTS.md's framing ("only 1 of 12+ eligible lessons currently gated," "gates a coherent slice instead of one arbitrary lesson") is stale. Direct code reads found the "A1 free / A2+ gated" boundary ROADMAP.md described as merely "one candidate raised in research" is **already fully implemented**:
- `FREE_BANDS = ['sons', 'a1']` in `entitlement.logic.ts`
- The `'levels.all'` feature check is already wired into `den.tsx`, `lesson.tsx`, `narrated.tsx`, and `placement.tsx`
- `'coach.unlimited'` gates `chat.tsx`, `'roleplay.unlimited'` gates `roleplay.tsx` — both already enforced
- `'examiner'` gates exam content as a fully separate tier (closed in Phase 4)
- The gate is enforced INSIDE each destination screen (render/press-time check), not scattered per-entry-point — a deep link straight to a gated screen is still caught

So this phase's real, confirmed gaps are narrower than the roadmap phrasing suggests — see Decisions below.

</domain>

<decisions>
## Implementation Decisions

### Gating rule scope — ratify, don't rebuild
- **D-01:** The existing free/paid boundary (sons+A1 free forever; A2+, unlimited coach, unlimited roleplay, and exam papers all paid) is confirmed correct and stays as-is. Phase 5 documents it formally rather than redesigning it. This resolves PAY-02 Success Criterion 1's "determine and document one coherent, explainable gating rule."
- **D-02:** Keep exam content (`'examiner'`) as a tier separate from `'levels.all'`/Première, matching what Phase 4 already built. Do not merge into one tier.
- **D-03:** `'audio.packs'` is currently marketed on the paywall (`paywall.tsx`) but has no real content behind it yet — a `downloads.tsx` comment says packs "arrive in a future update" (Phase 7 work). Remove this bullet from paywall marketing copy until Phase 7 actually ships packs. This is a small, in-scope fix (marketing-copy honesty), not a Phase 7 dependency.
- **D-04:** Keep the paywall's messaging granular — separate bullets per capability (every level / unlimited coach / unlimited role plays), not consolidated into fewer, broader promises. Matches what's actually built and lets users see specifically what they're paying for.
- **D-05:** Fix `lesson.tsx`'s gate-check timing: today the redirect fires in a `useEffect` AFTER the component renders, risking a brief flash of real (gated) lesson content on a slow device before the redirect kicks in. Move the check earlier (before rendering lesson content) or show a loading/locked placeholder while the check resolves.
- **D-06:** Before building anything, audit for other content surfaces that should gate on `'levels.all'`/`'coach.unlimited'`/`'roleplay.unlimited'` but currently don't (candidates to check: `smartreview.tsx`, `flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, search/browse screens, and any other screens that render A2+ content or coach/roleplay sessions without going through the known-gated screens). Matches this project's established pattern (Phase 2's content audit, Phase 4's research corrections) of verifying claims against the real codebase rather than trusting prior docs.

### Paywall explainer — contextual, not rebuilt
- **D-07:** `/paywall` already presents as a `slide_from_bottom` route (modal-style) — this satisfies most of Success Criterion 2's "clear paywall modal" intent already; no need to rebuild it as a true overlay.
- **D-08:** Make the paywall contextual: read the `from`/`feature` param it already receives (but currently never reads) and show a different headline/copy depending on the trigger — e.g. "Unlock A2 and beyond" for a lesson gate, "Unlimited coach conversations" for a coach-limit gate, "Full exam papers" for an exam gate — rather than one generic screen regardless of trigger.
- **D-09:** "No accidental dismiss/bypass" (Success Criterion 2) is interpreted as: gated content must never become reachable via the dismiss path. The current close (X) behavior already satisfies this (it returns the user without ever unlocking the content) — confirm/test this holds, don't rebuild the dismiss mechanism.
- **D-10:** Closing the paywall returns the user to where they were (matches current `router.replace`/back-stack behavior), not to a neutral screen like home.

### Upgrade nudge — usage-signal triggered, own cadence
- **D-11:** Trigger the proactive upgrade nudge (PAY-05, Success Criterion 3) on a usage signal — i.e. when a free user brushes a limit without being blocked yet (e.g. uses their one free daily roleplay, nears the coach cap) — not on a fixed schedule and not purely on a content milestone. Ties the nudge to a moment the user is already engaged and may feel the pinch.
- **D-12:** The nudge's copy is tailored to the specific trigger (e.g. "You've used today's free roleplay — go unlimited"), not one generic message regardless of cause.
- **D-13:** Frequency capping is its own cadence, more frequent than Phase 10's rating-prompt cap (3/year) — an upgrade nudge is lower-stakes than a store-review interruption. Exact cadence (e.g. once/week, or per-trigger with a cooldown) is Claude's discretion during planning.
- **D-14:** Generalize `PushBanner.tsx`'s single-purpose `useUI` slot (currently hardcoded to the one coach "Speak Mode" nudge via `bannerVisible`/`bannerAt`) into a multi-kind banner slot (e.g. `banner: {kind, ...content} | null`), so only one banner shows at a time — this naturally prevents nudge pile-up and is the shared pattern Phase 5 and Phase 10 (rating prompt) both extend, per ROADMAP.md's existing note to reuse `PushBanner.tsx` where practical.

### Reconciliation state — reuses Phase 4's detection, reuses the banner pattern
- **D-15:** Hook the reconciliation UI (Success Criterion 4: "never see the paywall reappear without an explanation/reconciliation state shown first") directly onto Phase 4's already-built `entitlement_downgraded` event (fires only from `useEntitlement.ts`'s `setEntitlement` — the live Adapty-derived write path — never from the offline-cache `loadFor` path, so it only fires on a genuine downgrade, never a false-negative offline read). No new detection logic needed.
- **D-16:** The reconciliation message reuses the SAME generalized banner pattern from D-14 (one more `kind` in the multi-kind slot) rather than a separate, more prominent modal/screen. A lapsed subscription is treated as non-blocking — it doesn't need to interrupt what the user is doing.
- **D-17:** Message content is generic ("Your Première access has ended") plus a path to fix it (tap-through to Settings/Restore), not an attempt to explain the SPECIFIC cause (cancelled vs. payment-failed vs. expired) — Adapty's webhook payload doesn't reliably distinguish these, so promising a specific reason risks being wrong.

### Claude's Discretion
- Exact frequency-cap cadence for the upgrade nudge (D-13) — a specific number (e.g. once/week vs. per-trigger-with-cooldown) is left to planning.
- Exact shape of the generalized banner slot's TypeScript type (D-14/D-16) — implementation detail.
- Precise wording/copy for contextual paywall headlines (D-08) and nudge messages (D-12) — content detail, not a locked decision.
- Which specific screens the D-06 audit should check first — planning/research should enumerate the actual candidate list from a fresh codebase scan rather than the illustrative list in D-06.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Existing entitlement/gating architecture (read in full before touching anything)
- `ealch-v2/src/store/entitlement.logic.ts` — `FREE_BANDS`, `hasFeature`, `isPremium`, `wasDowngraded` (D-08 from Phase 4), the pure gating predicates this phase reuses, never reinvents
- `ealch-v2/src/store/useEntitlement.ts` — `setEntitlement` (the only entitlement_downgraded trigger point, per Phase 4's D-08) vs `loadFor` (cache-read path, must never trigger reconciliation UI)
- `ealch-v2/app/den.tsx`, `ealch-v2/app/lesson.tsx`, `ealch-v2/app/narrated.tsx`, `ealch-v2/app/placement.tsx` — the four screens currently enforcing `'levels.all'`, each with its own render/press-time check
- `ealch-v2/app/chat.tsx`, `ealch-v2/app/roleplay.tsx` — `'coach.unlimited'`/`'roleplay.unlimited'` enforcement
- `ealch-v2/app/exam.tsx`, `ealch-v2/app/exam-paper.tsx` — `'examiner'` enforcement (Phase 4)
- `ealch-v2/app/paywall.tsx` — the existing paywall screen (slide-from-bottom route), currently reads no `from`/`feature` context
- `ealch-v2/app/_layout.tsx` (line ~152) — confirms `paywall` route's `animation: 'slide_from_bottom'` presentation
- `ealch-v2/src/components/PushBanner.tsx` — the existing single-purpose banner component to generalize
- `ealch-v2/src/store/useUI.ts` — the `bannerVisible`/`bannerAt`/`showBanner`/`hideBanner` slot to generalize into a multi-kind banner
- `ealch-v2/src/services/analytics.ts` — `trackEvent('gate_blocked', ...)` pattern already in use at every gate site; extend rather than replace

### Prior phase context (Phase 4 — entitlement verification, directly load-bearing here)
- `.planning/phases/04-entitlement-verification-signed-out-purchase-fix/04-CONTEXT.md` — D-08's app-wide downgrade-monitoring decision this phase's reconciliation UI hooks onto
- `.planning/phases/04-entitlement-verification-signed-out-purchase-fix/04-03-SUMMARY.md` — implementation detail of `wasDowngraded`/`entitlement_downgraded`, including the offline-cold-start false-positive guard this phase must not break
- `.planning/phases/04-entitlement-verification-signed-out-purchase-fix/04-08-SUMMARY.md` — device-verification findings; notes that full purchase-flow testing needs a Play Console internal-testing track (relevant if Phase 5 planning wants to device-test the reconciliation banner against a real downgrade)

### Roadmap/requirements
- `.planning/ROADMAP.md` § Phase 5 — the 5 success criteria this phase is scoped against, including the explicit note that Phase 5 and Phase 10 must share one common interruption/nudge visual pattern (extending/reusing `PushBanner.tsx`)
- `.planning/REQUIREMENTS.md` — PAY-02, PAY-05 (this phase's scope)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `entitlement.logic.ts`'s `hasFeature`/`isPremium`/`FREE_BANDS` — the exact predicates any audit (D-06) or new gate should call, not reinvent
- `PushBanner.tsx`'s Animated slide-in shell — the visual pattern to generalize (D-14), not replace
- `trackEvent('gate_blocked', {feature, from})` — the existing analytics pattern already fired at every known gate site; the paywall's contextual headline (D-08) can read the same `from`/`feature` shape already being passed as route params

### Established Patterns
- Gate enforcement lives INSIDE the destination screen (render/press-time check), not at every possible entry point — this is why a deep link is already safe; D-06's audit should look for screens that render gated content WITHOUT this kind of internal check, not for missing entry-point guards
- Pure "logic file" discipline (`entitlement.logic.ts`) — any new predicate (e.g. for nudge trigger conditions) should follow this shape: zero RN imports, `node --test`-able
- Single global banner slot in `useUI` — Zustand store pattern already established for ephemeral UI state; D-14 generalizes this shape rather than introducing a new state-management approach

### Integration Points
- `useUI.ts`'s `showBanner`/`hideBanner` — where D-14's generalized multi-kind API attaches
- `useEntitlement.ts`'s `setEntitlement` — where D-15's reconciliation trigger attaches (subscribe to the `wasDowngraded` transition, same call site D-08/Phase 4 already uses for the analytics event)
- `paywall.tsx`'s route params (`from`, `feature`) — already threaded through from every gate site; D-08 wires them into the displayed copy instead of discarding them

</code_context>

<specifics>
## Specific Ideas

No specific UI mockups or exact copy were dictated during discussion — the user's direction was consistently "confirm what's already built is coherent, fix the honesty gap (audio.packs), and extend the existing banner pattern" rather than prescribing new visual designs. Exact copy/wording is Claude's Discretion (see above).

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope. (The free-tier-boundary-change option was raised and explicitly declined — D-01 confirms the boundary stays as-is.)

</deferred>

---

*Phase: 05-paywall-coverage-expansion-upgrade-nudge*
*Context gathered: 2026-09-20*
