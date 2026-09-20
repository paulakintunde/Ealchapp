# Phase 5: Paywall Coverage Expansion & Upgrade Nudge - Research

**Researched:** 2026-09-20
**Domain:** React Native (Expo Router) client-side entitlement gating, contextual paywall UX, ephemeral banner UI, analytics-driven event wiring
**Confidence:** HIGH (all findings verified by direct code read of the actual files in this repo; no external library research needed — this phase is entirely internal application logic)

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

#### Gating rule scope — ratify, don't rebuild
- **D-01:** The existing free/paid boundary (sons+A1 free forever; A2+, unlimited coach, unlimited roleplay, and exam papers all paid) is confirmed correct and stays as-is. Phase 5 documents it formally rather than redesigning it. This resolves PAY-02 Success Criterion 1's "determine and document one coherent, explainable gating rule."
- **D-02:** Keep exam content (`'examiner'`) as a tier separate from `'levels.all'`/Première, matching what Phase 4 already built. Do not merge into one tier.
- **D-03:** `'audio.packs'` is currently marketed on the paywall (`paywall.tsx`) but has no real content behind it yet — a `downloads.tsx` comment says packs "arrive in a future update" (Phase 7 work). Remove this bullet from paywall marketing copy until Phase 7 actually ships packs. This is a small, in-scope fix (marketing-copy honesty), not a Phase 7 dependency. **RESEARCH CORRECTION: verified stale — see Common Pitfalls #1. `paywall.tsx`'s `featureRows` currently has only 3 entries (levels/coach/roleplay); no `audio.packs` bullet exists to remove.**
- **D-04:** Keep the paywall's messaging granular — separate bullets per capability (every level / unlimited coach / unlimited role plays), not consolidated into fewer, broader promises. Matches what's actually built and lets users see specifically what they're paying for.
- **D-05:** Fix `lesson.tsx`'s gate-check timing: today the redirect fires in a `useEffect` AFTER the component renders, risking a brief flash of real (gated) lesson content on a slow device before the redirect kicks in. Move the check earlier (before rendering lesson content) or show a loading/locked placeholder while the check resolves. **RESEARCH CORRECTION: no visual flash exists — see Common Pitfalls #2. The real, minimal fix is a `setResume` effect leak (also present identically in `narrated.tsx`).**
- **D-06:** Before building anything, audit for other content surfaces that should gate on `'levels.all'`/`'coach.unlimited'`/`'roleplay.unlimited'` but currently don't (candidates to check: `smartreview.tsx`, `flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, search/browse screens, and any other screens that render A2+ content or coach/roleplay sessions without going through the known-gated screens). Matches this project's established pattern (Phase 2's content audit, Phase 4's research corrections) of verifying claims against the real codebase rather than trusting prior docs. **RESEARCH CONFIRMS: `flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, `sentence.tsx` have zero entitlement checks — see Summary and Common Pitfalls #4. `smartreview.tsx` and `chat.tsx` are NOT gaps (see below).**

#### Paywall explainer — contextual, not rebuilt
- **D-07:** `/paywall` already presents as a `slide_from_bottom` route (modal-style) — this satisfies most of Success Criterion 2's "clear paywall modal" intent already; no need to rebuild it as a true overlay.
- **D-08:** Make the paywall contextual: read the `from`/`feature` param it already receives (but currently never reads) and show a different headline/copy depending on the trigger — e.g. "Unlock A2 and beyond" for a lesson gate, "Unlimited coach conversations" for a coach-limit gate, "Full exam papers" for an exam gate — rather than one generic screen regardless of trigger. **RESEARCH CORRECTION: no `feature` param exists anywhere in the app — only `from` is passed, and inconsistently. `exam.tsx`/`exam-paper.tsx` pass no param at all today. See Architecture Patterns Pattern 3.**
- **D-09:** "No accidental dismiss/bypass" (Success Criterion 2) is interpreted as: gated content must never become reachable via the dismiss path. The current close (X) behavior already satisfies this (it returns the user without ever unlocking the content) — confirm/test this holds, don't rebuild the dismiss mechanism.
- **D-10:** Closing the paywall returns the user to where they were (matches current `router.replace`/back-stack behavior), not to a neutral screen like home.

#### Upgrade nudge — usage-signal triggered, own cadence
- **D-11:** Trigger the proactive upgrade nudge (PAY-05, Success Criterion 3) on a usage signal — i.e. when a free user brushes a limit without being blocked yet (e.g. uses their one free daily roleplay, nears the coach cap) — not on a fixed schedule and not purely on a content milestone. Ties the nudge to a moment the user is already engaged and may feel the pinch. **RESEARCH NOTE: roleplay's local counter is ready to reuse today; no equivalent "nearing" signal exists for the coach cap (server-enforced, no remaining-count field) — see Open Questions #2.**
- **D-12:** The nudge's copy is tailored to the specific trigger (e.g. "You've used today's free roleplay — go unlimited"), not one generic message regardless of cause.
- **D-13:** Frequency capping is its own cadence, more frequent than Phase 10's rating-prompt cap (3/year) — an upgrade nudge is lower-stakes than a store-review interruption. Exact cadence (e.g. once/week, or per-trigger with a cooldown) is Claude's discretion during planning.
- **D-14:** Generalize `PushBanner.tsx`'s single-purpose `useUI` slot (currently hardcoded to the one coach "Speak Mode" nudge via `bannerVisible`/`bannerAt`) into a multi-kind banner slot (e.g. `banner: {kind, ...content} | null`), so only one banner shows at a time — this naturally prevents nudge pile-up and is the shared pattern Phase 5 and Phase 10 (rating prompt) both extend, per ROADMAP.md's existing note to reuse `PushBanner.tsx` where practical. See Architecture Patterns Pattern 2 for a proposed concrete shape.

#### Reconciliation state — reuses Phase 4's detection, reuses the banner pattern
- **D-15:** Hook the reconciliation UI (Success Criterion 4: "never see the paywall reappear without an explanation/reconciliation state shown first") directly onto Phase 4's already-built `entitlement_downgraded` event (fires only from `useEntitlement.ts`'s `setEntitlement` — the live Adapty-derived write path — never from the offline-cache `loadFor` path, so it only fires on a genuine downgrade, never a false-negative offline read). No new detection logic needed. **RESEARCH CORRECTION: `entitlement_downgraded` is only a `track()` analytics call, not a subscribable event — the reconciliation trigger must be added as a second statement inside the same `wasDowngraded` branch, not a separate listener. See Common Pitfalls #3.**
- **D-16:** The reconciliation message reuses the SAME generalized banner pattern from D-14 (one more `kind` in the multi-kind slot) rather than a separate, more prominent modal/screen. A lapsed subscription is treated as non-blocking — it doesn't need to interrupt what the user is doing.
- **D-17:** Message content is generic ("Your Première access has ended") plus a path to fix it (tap-through to Settings/Restore), not an attempt to explain the SPECIFIC cause (cancelled vs. payment-failed vs. expired) — Adapty's webhook payload doesn't reliably distinguish these, so promising a specific reason risks being wrong.

### Claude's Discretion
- Exact frequency-cap cadence for the upgrade nudge (D-13) — a specific number (e.g. once/week vs. per-trigger-with-cooldown) is left to planning.
- Exact shape of the generalized banner slot's TypeScript type (D-14/D-16) — implementation detail. See Architecture Patterns Pattern 2 for a proposed shape.
- Precise wording/copy for contextual paywall headlines (D-08) and nudge messages (D-12) — content detail, not a locked decision.
- Which specific screens the D-06 audit should check first — planning/research should enumerate the actual candidate list from a fresh codebase scan rather than the illustrative list in D-06. **Research has enumerated this: `flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, `sentence.tsx` — see Summary.**

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope. (The free-tier-boundary-change option was raised and explicitly declined — D-01 confirms the boundary stays as-is.)
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| PAY-02 | The paywall gates a coherent, explainable slice of content (e.g. A1 free / A2+exams gated) instead of one arbitrary lesson | D-01 ratifies the existing boundary as already coherent (see `entitlement.logic.ts`'s `FREE_BANDS`/`PREMIERE_FEATURES`). The actual remaining work is closing the D-06 coverage gap in `flashcards.tsx`/`dictation.tsx`/`voiceflash.tsx`/`sentence.tsx` (Architecture Patterns Pattern 1, Common Pitfalls #4) and fixing the `lesson.tsx`/`narrated.tsx` `setResume` leak (Common Pitfalls #2), plus the D-08 contextual paywall copy (Pattern 3) and D-15 reconciliation trigger (Common Pitfalls #3) for Success Criteria 2 and 4 |
| PAY-05 | Free users see a proactive upgrade nudge/prompt at a sensible moment in normal use, not only the reactive paywall triggered by a gated lesson | D-11/D-12/D-13/D-14 supported by Architecture Patterns Pattern 2 (generalized banner slot) and the roleplay counter reuse (Code Examples, Open Questions #2). Coach-cap trigger feasibility flagged as an open question pending a scope decision |

</phase_requirements>

## Summary

This phase does not need new libraries, patterns, or architecture. Every decision in CONTEXT.md (D-01 through D-17) is confirmed to be about extending code that already exists: `entitlement.logic.ts`'s pure predicates, `useUI.ts`'s single-slot banner store, and `paywall.tsx`'s route-param-driven screen. The real work of this phase is (a) closing a **genuine, newly-confirmed content-gating gap** in four drill screens that CONTEXT.md only hypothesized, (b) generalizing one Zustand slot from a single hardcoded banner into a tagged union, (c) wiring a few new `router.push`/`trackEvent` call sites with parameters that don't exist yet, and (d) one **correction** to a CONTEXT.md decision that this session's code read found to be already-stale (D-03).

The single most consequential finding: **`flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, and `sentence.tsx` render corpus items filtered only by `theme`/`level` (content difficulty), with zero reference to `hasFeature`, `FREE_BANDS`, or any entitlement predicate anywhere in the four files.** A free user can reach A2-level vocabulary/dictation/pronunciation drills for these four activity types via `theme.tsx` → `flashthemes.tsx`/`dictationthemes.tsx`/`voicethemes.tsx`/`sentencethemes.tsx`, entirely bypassing the "A2+ is Première" boundary that `den.tsx`/`lesson.tsx`/`narrated.tsx`/`placement.tsx` enforce for full lessons. This is the actual, confirmed scope of D-06's audit — not a hypothetical to re-verify, but a concrete list to gate.

A second correction: D-05's premise (a "flash of gated content" caused by a `useEffect`-timed redirect) does not hold up under a full read of `lesson.tsx`. The render function already short-circuits synchronously (`if (bandLocked) return <blank View/>` at line 352) before ever reaching lesson-content JSX — identical to `narrated.tsx`'s pattern. There is no visual flash. There IS a smaller, real bug: `setResume(...)` fires in a `useEffect` gated only on `[L?.id]`, not on `bandLocked`, in **both** `lesson.tsx` and `narrated.tsx` — meaning a gated lesson still gets written into the "continue where you left off" resume pointer. That's the actual minimal fix for D-05, and it applies to both screens, not just `lesson.tsx`.

Third, D-15's phrase "hook the reconciliation UI ... onto Phase 4's already-built `entitlement_downgraded` event" needs a precision correction: `entitlement_downgraded` is only a `track()` call to PostHog (analytics.ts), gated behind `ENV.posthogKey`, with no in-app pub/sub. There is nothing to "subscribe" to. The correct integration point is to add the reconciliation-banner trigger as a second side effect inside the same `wasDowngraded` branch of `useEntitlement.ts`'s `setEntitlement`, right next to the existing `track(...)` call — not a new listener elsewhere.

**Primary recommendation:** Treat this phase as four independent, mechanical extensions of existing code (drill-screen gate, banner generalization, paywall context-copy, reconciliation trigger) rather than new architecture — plan tasks around the specific files and line numbers below.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Content-band gating (levels.all) | Client (React Native screen, render/press-time check) | — | Corpus is bundled/offline; enforcement must work with no network, per `entitlement.logic.ts`'s own design comment |
| Coach turn cap (coach.unlimited) | API/Backend (server-enforced quota, Phase 3) | Client (displays `res.capped`) | `entitlement.logic.ts` comment: "the cap itself is server-enforced" — client has no local counter |
| Roleplay daily cap (roleplay.unlimited) | Client (local, from `attempts` log) | — | `scenariosPlayedOn`/`roleplayLocked` run entirely off the local progress log; no server round-trip |
| Exam tier (examiner) | Client (render/press-time) + Backend (`startExamAttempt` refusal) | — | Double-enforced: client pre-checks via `examPaperAllowed`, server refuses with `needs-exam-tier` as the authoritative backstop |
| Paywall contextual copy | Client (route params → copy map) | — | Pure UI; `from` param already threaded from every gate site |
| Upgrade nudge / reconciliation banner | Client (Zustand `useUI` slot + global overlay component) | — | Ephemeral UI state, no persistence needed beyond in-memory + a frequency-cap timestamp in the persisted store |
| Downgrade detection | Client (`entitlement.logic.ts`'s pure `wasDowngraded`) | — | Already pure/tested; this phase only adds a UI side effect at the existing call site |

## Standard Stack

No new libraries are needed for this phase. Everything below is already installed and in use.

### Core (already in the project)
| Library | Version (verified) | Purpose | Why Standard Here |
|---------|---------|---------|--------------|
| zustand | ^5.0.14 `[VERIFIED: ealch-v2/package.json]` | `useUI`, `useEntitlement`, `useProgress` stores | Existing state-management pattern; `useUI`'s single banner slot is a Zustand `create()` store — D-14 extends this shape, does not introduce a new one |
| expo-router | ~57.0.9 `[VERIFIED: ealch-v2/package.json]` | `/paywall` route, `useLocalSearchParams`, `router.push({ pathname, params })` | All gate-to-paywall navigation already goes through this; D-08 only needs to read a param already declared in every call site's `params` object |
| expo | ~57.0.9 `[VERIFIED: ealch-v2/package.json]` | Runtime | No relevant API surface for this phase |

### Alternatives Considered
None — this phase explicitly reuses existing internal architecture (`entitlement.logic.ts`, `useUI.ts`, `PushBanner.tsx`) per CONTEXT.md's own framing ("polish and consistency," not new build). Introducing a new state library, a toast library, or a separate modal system for the nudge/reconciliation UI would directly contradict D-14/D-16.

**Installation:** None required.

## Architecture Patterns

### System Architecture Diagram

```
                         ┌─────────────────────────────┐
                         │   Adapty profile (webhook /  │
                         │   foreground refresh)         │
                         └───────────────┬───────────────┘
                                         │ entitlementFromProfile()
                                         ▼
                         ┌─────────────────────────────┐
                         │ useEntitlement.setEntitlement │──► wasDowngraded? ──► track('entitlement_downgraded')
                         │  (the ONE write path)          │                  └─► [NEW] showBanner({kind:'reconciliation'})
                         └───────────────┬───────────────┘
                                         │ entitlement (Zustand state)
                    ┌────────────────────┼─────────────────────────────┐
                    ▼                    ▼                             ▼
          useFeature('levels.all')  useFeature('roleplay.unlimited') useFeature('examiner')
                    │                    │                             │
        ┌───────────┼──────────┐        │                   ┌─────────┴─────────┐
        ▼           ▼          ▼        ▼                   ▼                   ▼
   den.tsx      lesson.tsx  narrated.tsx roleplay.tsx    exam.tsx          exam-paper.tsx
   placement.tsx                                     (examPaperAllowed)  (server: startExamAttempt)
        │           │          │        │                   │                   │
        │      [GAP: flashcards.tsx, dictation.tsx, voiceflash.tsx, sentence.tsx
        │       reachable via theme.tsx/*themes.tsx with NO gate check at all]
        ▼
   router.push('/paywall', { from: 'gate:levels' })  ─┐
   router.push('/paywall', { from: 'gate:roleplay' }) ─┤
   router.push('/paywall', { from: 'gate:coach' })    ─┼──► paywall.tsx reads `from` [NEW: switch on it for copy]
   router.push('/paywall')  [NO PARAMS — exam.tsx, exam-paper.tsx] ─┘

   [NEW] usage-signal trigger (e.g. roleplay's Nth-of-day attempt logged)
            │
            ▼
   useUI.showBanner({ kind: 'nudge', trigger, cooldown-checked })
            │
            ▼
   PushBanner.tsx (generalized render switch on banner.kind) — mounted once in _layout.tsx, global overlay
```

### Recommended Project Structure
No new directories. Changes land in existing files:
```
ealch-v2/
├── app/
│   ├── flashcards.tsx      # ADD: useFeature('levels.all') gate for level > 'a1'
│   ├── dictation.tsx       # ADD: same gate
│   ├── voiceflash.tsx      # ADD: same gate
│   ├── sentence.tsx        # ADD: same gate
│   ├── theme.tsx           # CONSIDER: pre-empt navigation into a locked level step (UX, not enforcement — the destination screens are the real chokepoint per established pattern)
│   ├── lesson.tsx          # FIX: gate the setResume effect on !bandLocked too (line 180-182)
│   ├── narrated.tsx        # FIX: same setResume leak (line 100)
│   ├── paywall.tsx         # ADD: read `from`, map to headline/copy; drop the unused `feature` assumption
│   ├── exam.tsx            # ADD: pass `from: 'gate:examiner'` param on the two router.push('/paywall') calls
│   ├── exam-paper.tsx      # ADD: same, on both call sites
│   └── roleplay.tsx        # ADD: fire nudge when today's one free scenario is consumed (not yet capped)
├── src/
│   ├── store/
│   │   ├── useUI.ts        # GENERALIZE: banner: {kind, ...} | null replacing bannerVisible/bannerAt
│   │   └── useEntitlement.ts # ADD: showBanner call inside the wasDowngraded branch
│   ├── components/
│   │   └── PushBanner.tsx  # GENERALIZE: render switch on banner.kind
│   ├── hooks/
│   │   └── useAlarmWatcher.ts # UPDATE: showBanner(alarmTime) → showBanner({ kind: 'speakReminder', at: alarmTime })
│   └── services/
│       └── analytics.ts    # ADD: new AnalyticsEvent union members (e.g. 'upgrade_nudge_shown', 'reconciliation_shown')
```

### Pattern 1: Render/press-time gate inside the destination screen (established, reuse exactly)
**What:** Every gated screen calls `useFeature('<feature>')` (or the local-log-driven `roleplayLocked`) at the top of the component, computes a boolean lock flag, and either (a) redirects in a `useEffect` + renders a blank placeholder synchronously in the same pass (`lesson.tsx`, `narrated.tsx`), or (b) checks at press-time only, leaving the destination visible but the action routed to `/paywall` (`den.tsx`, `roleplay.tsx`, `exam.tsx`).
**When to use:** Any new gate this phase adds (flashcards/dictation/voiceflash/sentence) should follow the render-time-redirect pattern used by `lesson.tsx`/`narrated.tsx`, since these screens (unlike `den.tsx`'s row list) render one item deck immediately on mount — there's no "still show it, lock the tap" affordance the way a Den row has.
**Example (the pattern to replicate, from `ealch-v2/app/narrated.tsx`):**
```typescript
// Source: ealch-v2/app/narrated.tsx lines 54-63, 214-216
const levelsAll = useFeature('levels.all');
const bandLocked =
  !!L && !levelsAll && !(FREE_BANDS as readonly string[]).includes(unitBand(L.unitId) ?? 'a1');
useEffect(() => {
  if (bandLocked) {
    trackEvent('gate_blocked', { feature: 'levels.all', from: 'narrated' });
    router.replace({ pathname: '/paywall', params: { from: 'gate:levels' } });
  }
}, [bandLocked]);
// ... later, before any content render:
if (bandLocked) {
  return <View style={{ flex: 1, backgroundColor: t.bg }} />;
}
```
For `flashcards.tsx`/`dictation.tsx`/`voiceflash.tsx`/`sentence.tsx`, the gate must key off the `level` param (or, for the level-less "practice everything" mode, the resolved item levels) rather than `unitBand`, since these screens have no `unitId`/`L` — they operate over a flat `Item[]` deck. `content.itemsFor` already accepts `level` as a query key (`LEVELS.includes(level as Level) ? { level } : undefined`), so the same `FREE_BANDS`-style check can run on the `level` param directly: `level && !FREE_BANDS.includes(level) && !levelsAll`.

### Pattern 2: Tagged-union ephemeral UI slot (to build, generalizing `useUI.ts`)
**What:** Replace `bannerVisible: boolean; bannerAt: string` with a single `banner: BannerState | null` discriminated union, so exactly one banner kind can be visible at a time (naturally satisfies D-14's "prevents nudge pile-up").
**When to use:** This is the shape D-14 and Phase 10's rating prompt both need — plan this type so Phase 10 can add a `kind: 'rating'` member later without touching this phase's code.
**Example (proposed shape, not yet in the codebase):**
```typescript
// Proposed for ealch-v2/src/store/useUI.ts — replaces bannerVisible/bannerAt
export type BannerState =
  | { kind: 'speakReminder'; at: string }               // existing coach nudge (useAlarmWatcher.ts)
  | { kind: 'upgradeNudge'; trigger: 'roleplay' | 'coach'; copy: string } // Phase 5, D-11/D-12
  | { kind: 'reconciliation' }                           // Phase 5, D-15/D-16/D-17
  | { kind: 'rating' };                                  // Phase 10 (future — do not build here, just leave room)

type UIState = {
  // ... existing sheet/dict fields unchanged
  banner: BannerState | null;
  showBanner: (b: BannerState) => void;
  hideBanner: () => void;
};

export const useUI = create<UIState>((set) => ({
  // ...
  banner: null,
  showBanner: (banner) => set({ banner }),
  hideBanner: () => set({ banner: null }),
}));
```
`PushBanner.tsx` then switches on `banner?.kind` to pick icon/text/press-target, instead of the current single hardcoded `T.bannerText`/`router.push('/speak')`. Every existing call site must migrate in the same change: `useAlarmWatcher.ts` (`showBanner(alarmTime)` → `showBanner({ kind: 'speakReminder', at: alarmTime })`), `settings.tsx` (same), and `PushBanner.tsx`'s own read of `bannerVisible`/`bannerAt` → `banner !== null`/`banner`.

### Pattern 3: Route-param-driven contextual copy (to build, in `paywall.tsx`)
**What:** `paywall.tsx` already declares `useLocalSearchParams<{ from?: string }>()` (line 58) but never reads `from` for anything except the `track('paywall_viewed', { from: from ?? 'direct' })` analytics call (line 77). CONTEXT.md's D-08 assumed a `feature` param also exists and is unread — **this is incorrect**: no call site anywhere in the app passes a `feature` param (verified by grepping every `/paywall` navigation call site). Only `from` is ever passed, and its values are inconsistent today: plain screen names (`'home'`, `'settings'`, `'placement'`) from non-gate entry points, and `'gate:levels'` / `'gate:coach'` / `'gate:roleplay'` (a `gate:` prefix convention) from the three screens that redirect on an actual block. **`exam.tsx` and `exam-paper.tsx` pass NO param at all** on their three `router.push('/paywall')` calls (lines 142, 115, 133) despite tracking `gate_blocked` with `feature: 'examiner'` right next to two of them — this needs a `from: 'gate:examiner'` addition before D-08's "Full exam papers" contextual copy can exist.
**When to use:** Build D-08 entirely off the existing `from` string, parsing the `gate:` prefix; do not add a second `feature` param — it would duplicate information already in `from` and require updating every call site's type signature for no benefit.
**Example:**
```typescript
// Proposed for paywall.tsx — a copy map keyed on the existing `from` convention
const PAYWALL_COPY: Record<string, { title: string; lead: string }> = {
  'gate:levels': { title: T.pwTitleLevels, lead: T.pwLeadLevels },     // "Unlock A2 and beyond"
  'gate:coach': { title: T.pwTitleCoach, lead: T.pwLeadCoach },        // "Unlimited coach conversations"
  'gate:roleplay': { title: T.pwTitleRoleplay, lead: T.pwLeadRoleplay },
  'gate:examiner': { title: T.pwTitleExam, lead: T.pwLeadExam },        // "Full exam papers" — NEW copy needed
};
const copy = PAYWALL_COPY[from ?? ''] ?? { title: T.pwTitle, lead: T.pwLead }; // generic fallback for 'home'/'settings'/'placement'/direct
```
Note: `'examiner'` is deliberately NOT one of `PREMIERE_FEATURES` (`entitlement.logic.ts` line 38-46) — it's a separate product, never sold by this paywall's plan picker (`featureRows` only lists `levels.all`/`coach.unlimited`/`roleplay.unlimited`). Planning must decide whether `gate:examiner` shows the same Première-sell screen with different lead copy (misleading — buying Première does not unlock exams) or a distinct explainer that the exam tier is a separate purchase not yet sold on this screen. **This is a real open question, not a copy-only decision** — flag for discussion/planning, see Open Questions.

### Anti-Patterns to Avoid
- **Adding a `feature` search param to `/paywall`:** Not used anywhere today; `from` already carries equivalent information via its `gate:*` convention. Adding a second param duplicates state and requires touching every call site twice.
- **A second, independent banner/toast component for the nudge or reconciliation message:** Directly contradicts D-14/D-16 and ROADMAP.md's explicit note to share one pattern with Phase 10.
- **Detecting the coach cap "brush" client-side by counting messages locally:** No such counter exists today (`coach.ask()` returns only `{ reply, live, capped }`, no remaining-count field) — inventing one client-side would drift from the server's actual quota (Phase 3's `quota.ts`) the moment either changes independently. See Open Questions.
- **Treating `chat.tsx` as "ungated" during the D-06 audit:** A naive grep for `useFeature`/`hasFeature` will not find `chat.tsx` because its cap is server-enforced (the response's `capped` boolean) by design (`entitlement.logic.ts`'s own comment: "the cap itself is server-enforced"). It IS correctly gated — just not via the client predicate. Don't flag it as a gap.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| "Is this content locked?" | A new gate predicate per screen | `hasFeature`/`levelLocked`/`roleplayLocked` from `entitlement.logic.ts` | Already pure, already unit-tested, already the single source every existing gate calls |
| Multiple simultaneous overlays (nudge + reconciliation + future rating prompt) | Independent visibility booleans per kind | The single `banner: BannerState \| null` slot (Pattern 2) | A `\| null` union structurally guarantees only one banner shows at once — no coordination logic needed |
| Detecting a downgrade | A new comparison of `prev`/`next` entitlement snapshots | `wasDowngraded(prev, next, nowMs)` from `entitlement.logic.ts`, called exactly once already inside `setEntitlement` | Already handles the two false-positive traps (userId change on sign-out/in; already-inactive entitlement) — reimplementing risks reintroducing either |
| Frequency-capping the nudge | A new "last shown" timestamp system | Extend whatever persisted field pattern `useStore.ts` already uses for other once-per-period UI (check `lessonKeySeen`-style persisted flags in `useStore.ts` before inventing a new storage key) | Consistency with existing persisted-flag conventions in the same store |

**Key insight:** Every "don't hand-roll" item in this phase already has exactly one canonical implementation in this codebase (`entitlement.logic.ts`, `useUI.ts`, `useStore.ts`'s persisted-flag pattern). The task in each case is "call the existing thing from a new call site," never "write new decision logic."

## Common Pitfalls

### Pitfall 1: Assuming D-03's `audio.packs` marketing bullet still exists
**What goes wrong:** A plan task titled "remove the `audio.packs` bullet from `paywall.tsx`" will find nothing to remove.
**Why it happens:** CONTEXT.md's D-03 was written from an inference, not a direct read of `paywall.tsx`'s current `featureRows` array. This session's read confirms `featureRows` (paywall.tsx lines 142-146) contains exactly three entries: `pwFeatLevels`, `pwFeatCoach`, `pwFeatRoleplay`. There is no `audio.packs`/`pwFeatPacks` string anywhere in `strings.ts` (verified: only `audioSoonL` exists, used in `downloads.tsx`'s "arrives in a future update" copy, not in the paywall).
**How to avoid:** Treat D-03 as **already satisfied / not applicable** — verify once during planning (re-check `featureRows` and grep `pwFeat` in `strings.ts`) and close it as "no action needed," rather than scheduling a removal task.
**Warning signs:** If a future `git log`/`git blame` shows `paywall.tsx` was edited between 2026-09-19 (roadmap date) and today to already remove this bullet, that confirms the fix already landed; if not, D-03 was simply misdescribed in CONTEXT.md.

### Pitfall 2: Treating D-05 as a visual-flash bug when it's actually a resume-state leak
**What goes wrong:** A plan task scoped as "move the gate check before the first render" will find the check is already effectively before the first paint (see Pattern 1) — the task will appear to have "nothing to fix," and the real bug (stale resume pointer) ships unfixed.
**Why it happens:** `lesson.tsx`'s hooks execute unconditionally on every render (React rule: hooks can't be conditional), so an effect gated only on `[L?.id]` — like `setResume('lesson', ...)` at lines 180-181 — fires even on the render pass where the JSX return will be the blank `bandLocked` placeholder. The effect doesn't know the render "gave up."
**How to avoid:** Scope the fix as: add `&& !bandLocked` to the `setResume` effect's condition in **both** `lesson.tsx` (line 181) and `narrated.tsx` (line 100) — confirmed present in both files identically.
**Warning signs:** A free user who taps a locked A2 lesson, gets bounced to the paywall, then backs out to home — if home's "continue" hero still names that A2 lesson, the leak is present.

### Pitfall 3: Assuming `entitlement_downgraded` is a subscribable event
**What goes wrong:** A plan task like "subscribe the reconciliation banner to the `entitlement_downgraded` event" implies an event emitter/pub-sub that does not exist — `track()` (`analytics.ts` line 75) is a one-way fire-and-forget call to PostHog, gated behind `ENV.posthogKey` even being set.
**Why it happens:** CONTEXT.md's D-15 phrasing ("hook ... onto Phase 4's already-built `entitlement_downgraded` event") reads like pub/sub but Phase 4 only added an analytics call.
**How to avoid:** Add the banner trigger as a second statement in the same `if (wasDowngraded(...))` block inside `useEntitlement.ts`'s `setEntitlement` (lines 52-62), calling `useUI.getState().showBanner({ kind: 'reconciliation' })` right next to the existing `track(...)` call. This is a same-file, same-branch addition — no new wiring needed, no listener elsewhere.
**Warning signs:** If a plan introduces a new file for "downgrade event subscription," that's a sign the pub/sub misreading has propagated into the plan.

### Pitfall 4: Missing that four drill screens have no gate at all
**What goes wrong:** D-06's audit is scoped as "confirm the candidate list is correct" — if planning treats this as a light confirmation pass rather than a real fix, the phase ships without closing the actual, largest coverage gap.
**Why it happens:** `flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, `sentence.tsx` are drill/practice screens, not "lesson" screens, so they're easy to mentally exclude from "the gating boundary" even though they serve the same graded corpus content (`content.itemsFor(drill, { theme, level })`) that `den.tsx` gates for full lessons.
**How to avoid:** Plan an explicit task per screen (four screens) adding the `level`-based gate described in Pattern 1, plus a decision on the upstream browse chain (`theme.tsx`'s `stepRoute`, `flashthemes.tsx`, `dictationthemes.tsx`, `voicethemes.tsx`, `sentencethemes.tsx`) — whether to also visually lock the row/step there (UX nicety, optional) or rely purely on the destination-screen chokepoint (consistent with the established pattern, and sufficient per D-06's own framing: "screens that render gated content WITHOUT this kind of internal check," not "every entry point").
**Warning signs:** A free user with an A2-estimated placement level reaching a full A2 flashcard/dictation/voiceflash/sentence deck with no paywall interaction anywhere in the session.

### Pitfall 5: No client-side "brushing the limit" signal exists for the coach cap
**What goes wrong:** A plan task assumes a "coach nudge" trigger can read from an existing near-cap counter the same way the roleplay nudge reads `scenariosPlayedOn`.
**Why it happens:** `entitlement.logic.ts` documents the coach cap as fully server-enforced; `chat.tsx`'s `coach.ask()` response shape is `{ reply, live, capped }` with no remaining-count field anywhere in the client.
**How to avoid:** Either (a) scope the coach-triggered nudge for a later phase / descope it and ship the roleplay-triggered nudge as this phase's proactive-nudge proof, since D-11 only requires "a usage signal," not necessarily coach-specific, or (b) add a small server-side change (return remaining turns in the coach response) — a bigger unit of work than a UI change, worth flagging to the user as a scope question rather than assuming during planning. See Open Questions.
**Warning signs:** A plan task with no concrete data source cited for "coach nears cap."

## Code Examples

### Roleplay nudge trigger point (the one clean, ready-to-use "brushed the limit" signal)
```typescript
// Source: ealch-v2/src/store/entitlement.logic.ts lines 219-240 (existing, reusable as-is)
export function scenariosPlayedOn(attempts: ScenarioAttemptLike[], day: string): Set<string> { /* ... */ }
export const FREE_SCENARIOS_PER_DAY = 1;

// Proposed hook point — after roleplay.tsx logs the day's first-ever scenario attempt today,
// check whether that attempt just consumed the day's free allowance, and if so, fire the
// nudge (not the paywall — the user was NOT blocked, they just finished their free one).
// This is the "brushes a limit without being blocked yet" moment D-11 describes, expressed
// with the exact function the codebase already has.
```

### Exam-gate call sites needing a `from` param added (currently pass none)
```typescript
// Source: ealch-v2/app/exam-paper.tsx lines 113-116 — CURRENT (no context passed)
if (!decision.allowed) {
  track('gate_blocked', { feature: 'examiner', from: 'exam-paper' });
  router.push('/paywall'); // <-- no params; paywall.tsx cannot show contextual copy
  return;
}
// Proposed: router.push({ pathname: '/paywall', params: { from: 'gate:examiner' } });
```

## State of the Art

Not applicable in the "library ecosystem changed" sense — this is 100% internal-codebase research. The one relevant "state of the art" fact is that this phase's every dependency (Zustand 5, Expo Router ~57) is already current in the project; no upgrade path is implicated by this phase's scope.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `theme.tsx`/`flashthemes.tsx`/`dictationthemes.tsx`/`voicethemes.tsx`/`sentencethemes.tsx` are the only browse/entry paths into the four ungated drill screens (i.e., no other screen also links into `flashcards.tsx`/`dictation.tsx`/`voiceflash.tsx`/`sentence.tsx` with a `level` param) | Common Pitfalls #4, Architecture Patterns Pattern 1 | If another entry point exists (e.g. a "practice weak spots" home-screen link with an implicit A2 level), the destination-screen gate (Pattern 1) still closes it correctly regardless — the chokepoint pattern doesn't depend on knowing every caller — but planning's enumeration of "which screens to also visually lock upstream" could be incomplete |
| A2 | The roleplay-only nudge trigger (D-11) is an acceptable interpretation of "a usage signal" even if the coach-nudge example from CONTEXT.md isn't built this phase | Common Pitfalls #5, Open Questions | If the user actually wants BOTH coach- and roleplay-triggered nudges in this phase, the coach one needs a small server change first — worth confirming with the user/during planning rather than silently descoping |
| A3 | `gate:examiner` paywall copy should explain the exam tier is a separate purchase rather than attempt to sell Première (since Première does not grant `'examiner'`) | Pattern 3 | If planning instead makes `gate:examiner` just show generic Première copy, a user who buys Première expecting exam access based on that screen would be misled — a real trust/refund-risk issue, not just a copy nitpick |

## Open Questions

1. **What should the `gate:examiner` paywall screen actually say/sell?**
   - What we know: `exam.tsx`/`exam-paper.tsx` currently navigate to `/paywall` with zero params; `paywall.tsx`'s plan picker only sells Première features (`levels.all`/`coach.unlimited`/`roleplay.unlimited`), never `examiner`; `entitlement.logic.ts` explicitly documents `examiner` as "granted by no plan."
   - What's unclear: Whether Phase 5 should extend `paywall.tsx` to explain/sell the exam tier as a distinct product on the same screen, or just improve the headline to be honest ("Full exam papers require the Examiner pass — [wherever that's sold]") without adding a purchase flow (which may not exist yet — the exam product's purchase surface wasn't located in this research pass).
   - Recommendation: Confirm during planning/discuss whether an exam-tier purchase flow exists anywhere in the app today (search `ACCESS_LEVEL_EXAM`/`purchaseExam`-style functions in `services/purchases.ts`) before committing to what `gate:examiner` copy promises.

2. **Should the coach-cap nudge trigger ship this phase, given no client-side "remaining" signal exists?**
   - What we know: Roleplay's local counter (`scenariosPlayedOn`) is ready to use today with zero new plumbing. Coach's cap is server-computed with no remaining-count exposed to the client.
   - What's unclear: Whether D-11's "e.g. ... nears the coach cap" was meant as a required trigger or an illustrative one (D-11's actual text says "e.g." before both examples, suggesting either is acceptable evidence of "a usage signal").
   - Recommendation: Plan the roleplay trigger as the phase's proof of Success Criterion 3; treat a coach-side trigger as a stretch item contingent on whether `coach.ask()`'s response can cheaply carry a remaining-turns field (a Phase-3-adjacent backend change) — confirm scope with the user rather than assuming during planning.

3. **Should the upstream browse screens (`theme.tsx`, `flashthemes.tsx`, etc.) visually indicate a locked step, or is the destination-screen gate (Pattern 1) sufficient?**
   - What we know: The established pattern elsewhere is "gate sits on the press/render at the destination, source list stays fully visible" (`den.tsx`'s own comment: "locked units stay fully visible ... they just route to the paywall instead of the lesson").
   - What's unclear: Whether `theme.tsx`'s parcours steps should follow the same "visible but redirects" pattern (consistent, less work) or actually grey out/lock-icon the step (more explicit, matches `den.tsx`'s row treatment more closely since `den.tsx` DOES lock rows visually — worth checking `den.tsx`'s row-lock UI before assuming "invisible chokepoint only" is consistent).
   - Recommendation: Read `den.tsx`'s row-lock rendering (not just its gate logic) during planning to decide whether `theme.tsx` should visually match it.

## Environment Availability

Not applicable — no external tools/services/runtimes are newly required by this phase. All dependencies (Zustand, Expo Router, the existing Adapty/PostHog integrations) are already installed and configured.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | `node --test` (native Node test runner) `[VERIFIED: entitlement.logic.ts comments reference "node --test-able" pure-logic discipline; confirmed pattern via progress.logic.ts/examSection.logic.ts sibling test files]` |
| Config file | none — plain `*.test.ts` files colocated with the logic they test |
| Quick run command | `node --test ealch-v2/src/store/entitlement.logic.test.ts` (or the equivalent new/updated test file) |
| Full suite command | check `ealch-v2/package.json`'s `test` script for the exact glob (not re-verified this session; use whatever `03-01-SUMMARY.md`/`03-02-SUMMARY.md` describe running for prior phases' 18-test `quota.ts` suite as the precedent) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| PAY-02 | `flashcards.tsx`/`dictation.tsx`/`voiceflash.tsx`/`sentence.tsx` deny an A2+ `level` param without `levels.all` | unit (pure predicate) + manual device check (screen-level gate is JSX, not easily unit-testable) | `node --test ealch-v2/src/store/entitlement.logic.test.ts` (if the gate reuses `levelLocked`, existing coverage may already suffice — confirm) | ✅ (predicate) / ❌ Wave 0 (screen-level behavior needs either a component test or a manual device pass, per TEST-02's not-yet-built RNTL infra) |
| PAY-02 | `entitlement_downgraded` triggers the reconciliation banner, never fires from `loadFor` | unit | `node --test ealch-v2/src/store/entitlement.logic.test.ts` (extend `wasDowngraded` tests, or add a `useEntitlement.test.ts` if one doesn't exist) | ❌ Wave 0 — confirm whether `useEntitlement.ts` has any existing test file before assuming one must be created |
| PAY-05 | Roleplay nudge fires exactly when the day's free scenario is consumed, not before, not after a second attempt | unit | New test against `scenariosPlayedOn`/a new `roleplayNudgeDue`-style pure predicate, `node --test` | ❌ Wave 0 — predicate doesn't exist yet |
| PAY-05 | Nudge frequency cap holds across repeated triggers within the cooldown window | unit | New test against whatever persisted-timestamp logic planning designs | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `node --test <touched-logic-file>.test.ts`
- **Per wave merge:** full `node --test` sweep of `src/store/*.logic.test.ts` plus a manual device pass for the four newly-gated screens (component/JSX-level gating isn't unit-testable without RNTL, which TEST-02 — a later phase — hasn't built yet)
- **Phase gate:** Full suite green + a manual device checkpoint (free account, walk all four drill screens with an A2 `level` param, confirm each redirects) before `/gsd-verify-work`

### Wave 0 Gaps
- [ ] A pure predicate for "should the roleplay nudge fire" (extends `entitlement.logic.ts` or a new sibling file, following the same zero-RN-import discipline)
- [ ] Confirm whether `useEntitlement.test.ts` exists; if not, it's needed to cover the new `showBanner` side effect inside `setEntitlement` without importing React Native (mock `useUI`'s `getState()`)
- [ ] No RNTL/component-test infra exists yet (TEST-02 is a later, unrelated phase) — the four drill-screen gates and the paywall contextual copy will need a manual device verification checkpoint in the plan, not an automated screen-render test

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | No | Not touched by this phase — entitlement already hangs off the existing Phase 9 auth uid |
| V3 Session Management | No | Not touched |
| V4 Access Control | Yes | Client-side feature gating via `hasFeature`/`levelLocked`/`roleplayLocked` (existing pattern, extended to 4 more screens) — this is a UX/business-model gate, not a security boundary: the corpus ships bundled in the app binary, so a determined user could bypass any client-side check by inspecting the bundle. The REAL access-control boundary for anything sensitive (coach turns, exam grading) is server-side (Phase 3 quota, `startExamAttempt`'s server refusal) — this phase's gates are consistency/UX fixes, not security fixes. Do not treat closing the drill-screen gap as closing a security vulnerability. |
| V5 Input Validation | No | No new user input surfaces (route params are internal, developer-controlled strings, not user-typed) |
| V6 Cryptography | No | Not touched |

### Known Threat Patterns for this stack
| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Client-side gate bypass (e.g. patched APK, direct deep link with modified state) | Tampering | Already mitigated for the domains that matter: coach cap is server-enforced, exam attempts are server-refused (`startExamAttempt`). This phase's client-side content-band gate is a UX/business boundary, not a security one — no new mitigation needed beyond what exists. |
| Analytics event spoofing/loss (`entitlement_downgraded` never firing due to `ENV.posthogKey` being unset in some build) | — (not a security threat, a correctness risk) | Since this phase should trigger the reconciliation banner as a direct side effect inside `setEntitlement` (not by listening to the analytics event), the banner's correctness is independent of whether PostHog is configured — confirms the Pitfall 3 fix is also the right security/reliability posture. |

## Sources

### Primary (HIGH confidence — direct code read this session)
- `ealch-v2/src/store/entitlement.logic.ts` — full read
- `ealch-v2/src/store/useEntitlement.ts` — full read
- `ealch-v2/src/store/useUI.ts` — full read
- `ealch-v2/src/components/PushBanner.tsx` — full read
- `ealch-v2/app/paywall.tsx` — full read
- `ealch-v2/app/lesson.tsx` — read in full relevant sections (imports, gate logic, effects, render branches)
- `ealch-v2/app/narrated.tsx` — read gate logic, effects, render branches
- `ealch-v2/app/den.tsx` — read gate logic (row-lock UI not re-verified, see Open Question 3)
- `ealch-v2/app/placement.tsx` — read gate logic
- `ealch-v2/app/chat.tsx`, `ealch-v2/app/roleplay.tsx`, `ealch-v2/app/exam.tsx`, `ealch-v2/app/exam-paper.tsx` — read gate logic and paywall call sites
- `ealch-v2/app/smartreview.tsx`, `flashcards.tsx`, `dictation.tsx`, `voiceflash.tsx`, `sentence.tsx`, `theme.tsx` — read for D-06 audit; grepped for `useFeature`/`hasFeature`/`FREE_BANDS` (no matches in the drill screens)
- `ealch-v2/app/_layout.tsx` — confirmed `PushBanner` global mount point and `paywall` route's `slide_from_bottom` animation
- `ealch-v2/src/hooks/useAlarmWatcher.ts` — confirmed the only other `showBanner` call site
- `ealch-v2/src/services/analytics.ts` — confirmed `track()`'s fire-and-forget shape and the `AnalyticsEvent` closed union including `entitlement_downgraded`
- `ealch-v2/src/i18n/strings.ts` — grepped `pwFeat*` to confirm the 3-entry (not 4-entry) paywall feature list
- `ealch-v2/app/downloads.tsx` — confirmed `audio.packs`/`audioSoonL` copy lives here, not in `paywall.tsx`
- `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-CONTEXT.md`, `.planning/REQUIREMENTS.md`, `.planning/STATE.md`, `.planning/config.json` — read in full

### Secondary (MEDIUM confidence)
None — no external library documentation was needed for this phase.

### Tertiary (LOW confidence)
None.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new libraries; versions verified directly from `package.json`
- Architecture: HIGH — every pattern cited is a direct read of the actual current file, not an inference
- Pitfalls: HIGH — each pitfall traces to a specific line range read this session, including two corrections to CONTEXT.md's own premises (D-03, D-05) and one precision fix (D-15)
- D-06 audit gap (flashcards/dictation/voiceflash/sentence): HIGH — confirmed by direct grep (zero matches for any entitlement predicate) across all four files and their upstream browse-chain screens

**Research date:** 2026-09-20
**Valid until:** Until the next commit touches any of the files in Sources — this is internal-codebase research, not ecosystem research, so it goes stale the moment someone edits `paywall.tsx`, `useUI.ts`, or the gate logic, not on a calendar schedule. Re-verify file contents at planning time if more than a few days have passed.
