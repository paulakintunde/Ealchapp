# Ealch gating rule (ratified Phase 5)

**Status:** This is the rule of record for what is free and what is paid in Ealch, as of Phase 5. It supersedes the "only 1 of 12+ eligible lessons is gated" framing that PROJECT.md and REQUIREMENTS.md carried into Phase 5 planning, and the ROADMAP.md line describing "A1 free, A2+ gated" as merely "one candidate raised in research." Both were stale. Direct code reads done during this phase's discussion found the boundary already fully implemented before a single Phase 5 task started. Phase 5's job was never to invent this rule; it was to close the coverage gaps around it (D-06), make its enforcement consistent, and write it down once, in one place, instead of leaving it as tribal knowledge spread across sixteen files.

## The rule, in one sentence

Sons and A1 are free forever; everything past A1, unlimited coach turns, and unlimited role plays are Première; exam papers are a separate Examiner pass that Première does not include (D-01, D-02).

## Where the rule lives in code

| Concept | Single source of truth |
|---|---|
| The free bands | `FREE_BANDS` in `ealch-v2/src/store/entitlement.logic.ts` |
| What Première grants | `PREMIERE_FEATURES` in the same file |
| The full feature vocabulary | `FEATURES` in the same file |
| "Is this band locked?" | `levelLocked` (unit-shaped surfaces) / `drillDeckGate` (deck-shaped surfaces) |
| "Is this role play locked?" | `roleplayLocked` |
| "Should the upgrade nudge fire?" | `roleplayNudgeDue` |
| "Is this exam paper allowed?" | `examPaperAllowed` (`ealch-v2/src/utils/examGate.logic.ts`) plus the server's `startExamAttempt` refusal |

No screen re-derives a gate from `entitlement.plan` or `entitlement.features.includes(...)`. A new surface that needs a gate calls one of the predicates above, or reads `FREE_BANDS`/`useFeature('levels.all')` directly the way the unit-shaped screens below do; nothing may invent a rival source of truth.

## Enforcement inventory

Twelve screens enforce this rule today. Four are new to Phase 5 (D-06's coverage audit found them ungated); the other eight were already correct going into this phase.

| Screen | What it gates | Predicate | Enforcement point |
|---|---|---|---|
| `den.tsx` | Opening a track tab's unit list past the free bands | Inline `FREE_BANDS` + `useFeature('levels.all')` (the same logic `levelLocked` expresses) | Press-time route: `tabLocked` is checked in the unit-press handler before `router.push` |
| `lesson.tsx` | A single lesson's content | Inline `FREE_BANDS` + `useFeature('levels.all')` (`bandLocked`) | Render-time redirect: a `useEffect` fires `router.replace` to `/paywall?from=gate:levels`, and a synchronous pre-return short-circuit renders a bare themed `View` so gated content never paints |
| `narrated.tsx` | A single guided/narrated lesson's content | Same shape as `lesson.tsx` | Render-time redirect, identical pattern |
| `placement.tsx` | Not itself an enforcement chokepoint. Offers a Première CTA when the placement result grades A2 | `useFeature('levels.all')` via `offerPremiere` | Press-time route to `/paywall?from=placement`; the real gate fires downstream in `lesson.tsx`/`den.tsx` when the graded content is actually opened |
| `flashcards.tsx` | New in Phase 5. All three deck shapes: `?theme=`, `?domain=`, `?deck=new` | `drillDeckGate` | Render-time redirect + short-circuit, same pattern as `lesson.tsx` |
| `dictation.tsx` | New in Phase 5. Themed sentence deck | `drillDeckGate` | Render-time redirect + short-circuit |
| `voiceflash.tsx` | New in Phase 5. Themed production/recognition deck, gated before `entries` doubles each item into its pair | `drillDeckGate` | Render-time redirect + short-circuit |
| `sentence.tsx` | New in Phase 5. Themed deck, and the no-theme `introEligible` self-declared-level deck | `drillDeckGate` | Render-time redirect + short-circuit |
| `chat.tsx` | Coach turns past the free daily cap | None client-side by design; the server enforces it | Server-side: the coach edge function's quota check (Phase 3 `quota.ts`). The client only reads the `{ reply, live, capped }` shape `coach.ask()` returns |
| `roleplay.tsx` | Starting a second distinct role-play scenario the same day | `roleplayLocked` | Press-time route: checked in `start()` before the scenario begins |
| `exam.tsx` | Opening an exam paper beyond the free-paper allowance, from the paper list | `examPaperAllowed` | Press-time route: checked per paper row before push |
| `exam-paper.tsx` | Opening or continuing a specific exam paper | `examPaperAllowed`, twice: a client pre-check, and the server's own re-check | Press-time route (client pre-check) plus server-side: `startExamAttempt`'s `needs-exam-tier` refusal is the real chokepoint if the client check is ever bypassed |

**`chat.tsx` is correctly gated even though a grep for `useFeature` will not find one there.** That absence is by design, not a gap: the coach turn cap has no client-readable remaining-turn count to gate a render on. `coach.ask()` returns only `{ reply, live, capped }`, and the server (Phase 3's `quota.ts`, deployed to the coach edge function) is the actual enforcement point. The client shows a capped message and tracks `gate_blocked` when `capped` comes back true; it never decides on its own that the user is over the limit.

## Why the two deck shapes need two rules

`theme.tsx` receives an explicit `?slug=&level=` pair naming one parcours step: a single band, known before any content loads. When that band is locked, the whole screen redirects; there is nothing partial worth showing. The four `*themes.tsx` browse screens (`flashthemes.tsx`, `dictationthemes.tsx`, `voicethemes.tsx`, `sentencethemes.tsx`) push into their matching drill screen with `?theme=` (and, for flashcards, `?domain=`) only, with no `level` param at all; a theme can legitimately span sons through B1, so the deck it opens is mixed-band by construction, not single-band. `flashcards.tsx`'s `?domain=` and `?deck=new` shapes carry the same absence of an explicit level, and `sentence.tsx`'s no-theme path (keyed on the user's self-declared `introEligible` level, not on an entitlement at all) is the same shape again: a deck with no single band to test against.

`drillDeckGate`'s three-case contract handles both shapes in one pass:

1. An explicit, non-free `level` route param locks the whole deck and redirects. This is `theme.tsx`'s shape.
2. Otherwise, keep only `FREE_BANDS` items from whatever deck was queried. This is the mixed-deck shape every `*themes.tsx` screen and no-theme path uses.
3. If step 2 empties a deck that was not already empty, everything in it was gated, and it redirects too. If the raw query was already empty, that is a thin corpus, not a paywall, and it is deliberately never locked, so a real content gap never gets mistaken for gated content.

## Visibility versus enforcement

The PREMIÈRE pill on `den.tsx`, `theme.tsx`, and the four `*themes.tsx` screens is visibility only. Locked rows stay pressable by design; the destination screen is the chokepoint, not the row a user sees in a list. `den.tsx`'s own comment states the intent directly: "locked units stay fully visible (what you would get), they just route to the paywall instead of the lesson" (UI-SPEC Copywriting item 6).

## What the paywall says, and when

| `from` value | Headline shown |
|---|---|
| `gate:levels` | "Unlock A2 and beyond" |
| `gate:coach` | "Unlimited coach conversations" |
| `gate:roleplay` | "Unlimited role plays" |
| `gate:examiner` | Not a headline swap. A distinct third render branch, checked ahead of the already-premium branch: neutral grey lock badge, "Exam papers are a separate pass," one dismiss-only "Got it" CTA, no plan picker, no price |
| `home` / `settings` / `placement` / no `from` at all | The generic fallback sell screen, unchanged from before this phase |

`gate:examiner` is deliberately not a key in `PAYWALL_COPY`; it short-circuits to its own branch before the copy map is even consulted. `'examiner'` is not in `PREMIERE_FEATURES`, so selling Première under an exam-flavored headline would take money for something that does not unlock what the user tried to open (D-08; UI-SPEC Copywriting item 2).

## What this rule is NOT

**Not a security boundary.** The corpus ships bundled in the app binary, so every client-side band check is bypassable by inspecting the bundle. The real access-control boundaries are server-side and were not touched by this phase: the coach turn cap (Phase 3 `quota.ts`) and `startExamAttempt`'s `needs-exam-tier` refusal. See 05-RESEARCH.md's Security Domain section.

**Not final pricing policy.** PAY-04 ("tune the gating boundary on real conversion data") is a deferred requirement, not part of this milestone.

## Known temporary state

`DEV_UNLOCK_A2` (declared in `entitlement.logic.ts`, exposed through `a2LockLifted()`) currently reads `false`. It is `__DEV__`-only: a release build cannot take the branch whatever the constant says. It is also scoped to `levels.all` alone; `coach.unlimited`, `roleplay.unlimited`, `audio.packs`, and `examiner` all gate exactly as before regardless of its value. `useFeature` (in `useEntitlement.ts`) is the ONE read that consults it, which is why every gate added in this phase goes through `useFeature` rather than a raw `hasFeature` call, and why `drillDeckGate` takes a plain `levelsAll` boolean parameter rather than a whole `Entitlement` object: the dev-only escape hatch stays honored in exactly one place, and cannot leak into a predicate that takes the raw entitlement instead.

## Deliberate follow-ups (named, not dropped)

| Item | Why it is not in Phase 5 | Where it goes |
|---|---|---|
| Coach-cap upgrade nudge | No client-side remaining-turn signal exists; `coach.ask()` returns `{ reply, live, capped }` only, and the cap is server-enforced. A client-side counter would drift from Phase 3's `quota.ts` the moment either changed. `BannerState` already reserves `trigger: 'coach'` alongside `'roleplay'`, so adding this later needs no type change. | A phase that touches the coach edge function |
| An exam-tier purchase surface | No purchase flow for the Examiner pass exists anywhere in the app, which is why `gate:examiner` explains and dismisses rather than selling. | Out of this milestone's monetisation scope |
| `audio.packs` | Listed in `FEATURES` and granted by `PREMIERE_FEATURES`, but no packs exist yet and nothing markets it on the paywall. Verified in Phase 5: `featureRows` has exactly three entries, so CONTEXT.md's D-03 removal was already satisfied, and closed by verification rather than by an edit. | Phase 7 |
| RNTL component tests for the gated screens | No render-test infrastructure exists yet; Phase 5's screen-level guarantees are source-text assertions plus a device pass. | TEST-02 |
| PAY-04 boundary tuning | Requires real conversion data, which requires PAY-02 to be live first. | Deferred requirement |
