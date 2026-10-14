# Phase 12: Brix Mascot Rive Animation Rollout — Delight States - Research

**Researched:** 2026-10-13
**Domain:** React Native / Expo mobile animation (Rive state machines), accessibility (screen-reader semantics for a newly-interactive decorative element), idle-timer UX pattern
**Confidence:** LOW-MEDIUM overall — see "Dependency Status: Phase 11" below. Individual findings are tagged per-claim.

## Dependency Status: Phase 11 (read this first)

**Checked at research time (2026-10-13):** `.planning/phases/11-brix-mascot-rive-animation-rollout-core-states/` is **empty** — no `CONTEXT.md`, `RESEARCH.md`, `UI-SPEC.md`, or `PLAN.md` exists on disk. `[VERIFIED: directory listing]`

**What this means concretely:**
- The actual `<Rive>` component wrapper, its prop/ref contract, the chosen state-machine name(s), and the input names for `idle`/`listening`/`speaking`/`celebrating`/`thinking` do not exist anywhere in this codebase yet. There is nothing to extend.
- `rive-react-native` (or any Rive package) is **not installed** — confirmed by reading `ealch-v2/package.json` in full: no `rive-react-native`, `@rive-app/*`, or any Rive dependency appears under `dependencies` or `devDependencies`. `[VERIFIED: package.json contents]`
- `MascotAvatar.tsx`'s own header comment states explicitly it is "Animated via React Native's built-in Animated API, not Rive" and that "Rive slots in later." `[VERIFIED: ealch-v2/src/components/MascotAvatar.tsx:8-17]`
- The current component's state union is `'static' | 'idle' | 'thinking' | 'celebrate'` — none of Phase 11's names (`listening`, `speaking`, `celebrating`) or Phase 12's names (`tap-easter-egg`, `dozeOff`, `transform-in-out`) exist as code today. `[VERIFIED: MascotAvatar.tsx:21]`
- `rive-react-native` is a **native module** (iOS pod + Android AAR), not a pure-JS package. Installing/upgrading it is a native build event, which this codebase's own process notes treat specially: local `gradlew assembleRelease` is deterministically blocked (reanimated/Ninja/Windows — see project memory `ealch-android-release-build-ninja-blocked`), and `.planning/phases/08.1-accessibility-quality-pass/08.1-EVIDENCE-PROTOCOL.md` documents that native changes "ship by EAS cloud build, never by OTA." `[VERIFIED: 08.1-EVIDENCE-PROTOCOL.md:37-38, grepped this session]`

**Recommendation for the planner:**
1. **Do not invent concrete Rive asset filenames, state-machine names, or input names.** Any task referencing them should use an explicit placeholder (e.g. `{{STATE_MACHINE_NAME}}`, `{{RIVE_INPUT_dozeOff}}`) with a note "resolve against Phase 11's actual implementation before executing this task" — or, if Phase 11 genuinely has not landed by the time Phase 12 is planned, treat Phase 12's plan as provisional/blocked and flag that explicitly rather than silently filling in guessed names.
2. **Design Phase 12's tasks against the *contract* Phase 11 is specified to deliver**, not against code: a React component that (a) accepts a `state` prop drawn from a shared `MascotState`-like union, (b) exposes a ref or callback mechanism for firing one-shot trigger inputs (this is what `fireState(stateMachineName, inputName)` is for in `rive-react-native`'s actual API — see Standard Stack below), (c) preserves the existing `accessibilityElementsHidden`/`importantForAccessibility="no-hide-descendants"` wrapper, and (d) preserves `useReduceMotion()` gating. Phase 12's delight states are additions to this same surface, not a new component.
3. **If Phase 11 has landed by the time Phase 12 is actually planned/executed, re-read its RESEARCH.md/PLAN.md/SUMMARY.md files before trusting anything in this document about the Rive component's shape** — this research was written when Phase 11 did not exist, and some of its "how it will probably work" framing may be wrong once Phase 11's real decisions are made (e.g., whether the Rive view is wrapped per-call-site or as a single shared component, what the state machine is actually named, whether Phase 11 chose the legacy Inputs system or Rive's newer Data Binding system — see State of the Art below).
4. **The external design doc** ("the 2026-07-25 7-phase plan" cited in ROADMAP.md, which presumably defines what `tap-easter-egg`/`dozeOff`/`transform-in-out` are supposed to look like) was not found anywhere in this repository. `grep`s across both `Ealchapp` and `ealch-admin` for "Brix Mascot amendment", "Playfulness addendum", and "Accessibility Gate amendment" (all phrases `MascotAvatar.tsx`/`MascotVictoryLap.tsx` cite as if a document exists) returned zero hits. `[VERIFIED: grep, this session]` The planner is working from ROADMAP.md's and REQUIREMENTS.md's own prose description of these three states, not the original design doc. Flag this to the user if more specific interaction design (exact doze timeout, exact easter-egg trigger count/gesture, exact transform-in-out visual) is needed before planning concrete animation behavior — it may need a `/gsd-discuss-phase 12` decision rather than an assumption.

## Summary

Phase 12 adds three "delight" mascot states — `tap-easter-egg`, `dozeOff`, `transform-in-out` — to a Rive-based mascot component that Phase 11 is supposed to build first but has not yet been planned or built. Two of the three states (`dozeOff`, `transform-in-out`) are presentation-only extensions of the same pattern Phase 11 already has to solve (a named state drives a Rive state-machine animation, gated by `useReduceMotion()`, hidden from the accessibility tree). The third, `tap-easter-egg`, is qualitatively different: it is **the first interactive surface on the mascot**, and it directly conflicts with the mascot's current accessibility contract, which hides it entirely (`accessibilityElementsHidden` + `importantForAccessibility="no-hide-descendants"`) on the premise that it is purely decorative. A tappable element, by WCAG/ADA operability rules, must be reachable and operable by assistive tech — so "hidden" and "tappable" cannot both hold for the same node. The established React Native pattern for this (seen elsewhere in this very codebase via the shared `Press` component) is to put the accessible semantics on an **outer wrapper** (a `Press`/`Pressable` with its own `accessibilityRole="button"` and `accessibilityLabel`) while the **inner** Rive view stays hidden from the tree as a decorative child — this resolves the tension without inventing a new pattern, and the planner/UI-SPEC should adopt it rather than treat it as unsolved.

`dozeOff` most plausibly means an idle-timeout state (mascot "falls asleep" after N seconds of no interaction) — there is no existing idle-timer utility named for this, but the codebase has a directly reusable shape in `useAlarmWatcher.ts` (ref-held timer, cleanup on unmount, generation-guarded to avoid stale-timer races). `transform-in-out` most plausibly refers to a transition animation either (a) when the user switches their selected avatar in Settings → Appearance → Avatar (confirmed: this screen exists, `app/settings.tsx`, and currently switches avatars with no transition animation at all — `setAvatarId` fires a plain state update), or (b) a mascot-internal costume/shape change as its own idle-timeout-adjacent easter egg. Both are documented here as genuinely ambiguous — this is flagged as an Open Question, not resolved by assumption.

**Primary recommendation:** Treat this phase's plan as a thin extension of whatever component Phase 11 delivers, written against Phase 11's documented *contract* (state prop + trigger mechanism + a11y/reduce-motion guarantees) with explicit TBD markers over any Rive-internal naming; build the new `dozeOff` idle timer as an extracted, pure, unit-testable `*.logic.ts` module following this codebase's own established convention; resolve the tap-easter-egg accessibility tension by wrapping the Rive view in the existing `Press` component (outer accessible wrapper, inner decorative Rive child) rather than inventing new a11y plumbing; and budget a real-device TalkBack sweep specifically for the new tappable surface, following `.planning/phases/08.1-accessibility-quality-pass/08.1-EVIDENCE-PROTOCOL.md`'s exact methodology (verbatim-utterance rows, preview build only, before/after device state restoration).

## Architectural Responsibility Map

This app has no server/SSR tier for this feature — it is a 100% on-device React Native concern. The "tiers" below are internal to the client app.

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Rive state-machine playback (all 3 delight states) | Client — Rive native view (Phase 11's component) | — | Rive runtime is a native module (iOS/Android); React only drives it via props/ref |
| Tap-gesture detection on the mascot | Client — `Press`/`Pressable` wrapper | Client — Rive view (if Rive's own `touchBegan`/`touchEnded` scrubbing is used instead) | `Press` is this codebase's established gesture+a11y wrapper (`ui.tsx`); prefer it over Rive's raw touch API so the existing a11y pattern and haptic/sound cue (`cue`) composition stay consistent |
| Idle/doze timeout detection | Client — new hook, local to mascot (e.g. `useMascotIdleTimer`) | Client — `AppState` (must pause/reset on background) | No existing hook owns "seconds since last interaction" generically; `useAlarmWatcher.ts` is the closest shape to copy (ref timer + cleanup + generation guard), not a reusable dependency |
| Avatar-switch transition trigger (if `transform-in-out` = avatar switching) | Client — `app/settings.tsx` call site | Client — mascot component's trigger API | Settings screen already owns `setAvatarId`; it would need to additionally fire the mascot's transform trigger if this interpretation is confirmed |
| Reduced-motion gating | Client — shared `useReduceMotion()` hook | — | Already centralized (`src/utils/reduceMotion.ts`); Phase 12 must call the same hook, not reimplement |
| Accessibility tree exposure (hidden mascot vs. reachable tap target) | Client — component tree structure (wrapper vs. inner view) | — | Pure React Native composition; no platform/OS-level config needed beyond standard `accessibilityElementsHidden`/`importantForAccessibility` props already in use |
| Screen-reader sweep / audit evidence | Process (human + device), not code | — | Governed by `08.1-EVIDENCE-PROTOCOL.md`'s methodology, not a library choice |

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ANIM-01 (delight-states portion) | Ship `tap-easter-egg`, `dozeOff`, `transform-in-out` mascot states, squash-and-stretch house style, extending Phase 11's Rive component | Standard Stack (rive-react-native API), Architecture Patterns (contract-first extension given Phase 11 absence), Don't Hand-Roll (idle timer, gesture detection), Common Pitfalls (a11y tension, OTA-vs-native-build boundary), Open Questions (exact meaning of `dozeOff`/`transform-in-out` thresholds and visuals) |

</phase_requirements>

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|---------------|
| `rive-react-native` | 9.8.5 (published 2026-07-17) `[VERIFIED: npm view rive-react-native version/time.modified, this session]` | React Native bindings to the native Rive runtime; what Phase 11 is expected to install | It is the only maintained official Rive runtime for React Native (`rive-app/rive-react-native` on GitHub, Context7-documented, "High" source reputation) `[VERIFIED: Context7 resolve-library-id results, this session]` |

Phase 12 adds **no new core dependency** of its own — it consumes whatever Phase 11 installs. Do not add a second Rive package or pin a different version than Phase 11 chose; version consistency across the two phases matters because both share one native module and one `.riv` asset format.

**Version verification:** `npm view rive-react-native version` → `9.8.5`, last published 2026-07-17. `peerDependencies`: `{ react: '*', 'react-native': '*' }` — no stated minimum, but this is a native module so actual compatibility depends on the Expo SDK/New Architecture status, which is Phase 11's concern to verify, not Phase 12's. `[VERIFIED: npm registry, this session]`

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `react-native-gesture-handler` | ~2.32.0 (already installed) | Already in the project; `Press`/`Pressable` built on RN's own `Pressable`, not gesture-handler directly, so no new usage is required for a simple tap | Only relevant if the tap-easter-egg needs something gesture-handler owns and `Pressable` doesn't (e.g. a long-press-vs-tap disambiguation) — a plain tap does not need it |
| None new | — | — | No animation-timing library, no separate state-machine library is needed; Rive's own state machine is the state machine |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `rive-react-native`'s `fireState`/`setInputState` (legacy Inputs) | Rive's newer **Data Binding** API | Rive's own docs mark legacy Inputs as deprecated in favor of Data Binding for new projects `[CITED: WebSearch summary of rive.app/docs/runtimes/inputs, this session — could not independently re-verify the exact deprecation wording against the live page in this session, treat as MEDIUM confidence]`. Which one to use is **Phase 11's decision** (it builds the component first) — Phase 12 should follow whatever Phase 11 chose for consistency, not introduce a second input paradigm on the same `.riv` file. |
| `Press`-wrapped tap for the easter egg | Rive's native `touchBegan`/`touchEnded` ref methods (scrub/drag-style interaction) | Rive exposes raw touch coordinate methods on its ref (`riveRef.current?.touchBegan(x, y)` / `touchEnded(x, y)`) `[VERIFIED: Context7 /rive-app/rive-react-native docs, this session]`, intended for continuous pointer-tracking interactions (e.g. eyes following a cursor), not a discrete "tap" gesture. For a one-shot easter-egg tap, wrapping in `Press`/`Pressable` and calling `fireState(...)` on `onPress` is simpler, matches this codebase's existing a11y pattern, and avoids re-deriving touch coordinates manually. |

**Installation:** None required by this phase directly — contingent entirely on Phase 11's install. If Phase 11 has not run `npm install rive-react-native` (and the corresponding native prebuild) by the time Phase 12 executes, Phase 12 cannot execute either; this is the hard dependency ROADMAP.md already states.

## Architecture Patterns

### System Architecture Diagram

```
User interaction / passage of time
        │
        ├─ Tap on mascot view ──────────────► Press/Pressable (outer, accessible)
        │                                           │
        │                                           ├─ accessibilityRole="button"
        │                                           ├─ accessibilityLabel="…"
        │                                           ├─ sound.play(cue) [existing Press behavior]
        │                                           └─ onPress → riveRef.fireState(machine, "tapEasterEgg")
        │                                                             │
        ├─ N seconds with no interaction ──► useMascotIdleTimer() ────┤
        │   (new hook, mirrors useAlarmWatcher's                     │
        │    ref-timer + cleanup + generation-guard shape)           │
        │        │                                                   │
        │        └─ onIdle() → parent sets state="dozeOff" ──────────┤
        │                                                            │
        ├─ Avatar switched in Settings (if this is transform-in-out) ┤
        │        app/settings.tsx: setAvatarId(id) ───────────────── ┤
        │                                                            ▼
        │                                              <Rive> (inner, DECORATIVE)
        │                                              accessibilityElementsHidden
        │                                              importantForAccessibility=
        │                                                "no-hide-descendants"
        │                                                      │
        │                                              useReduceMotion() gate:
        │                                              true  → static/minimal frame,
        │                                                       skip fireState entirely
        │                                              false → full Rive animation plays
        │                                                      │
        │                                                      ▼
        │                                            Rive state machine (Phase 11's
        │                                            asset) plays the named state/trigger
        ▼
  (TalkBack/VoiceOver reads ONLY the outer Press's
   accessibilityLabel — never announces the inner
   Rive view or its internal layers)
```

### Recommended Project Structure

No new top-level folders. Extends existing locations:

```
ealch-v2/src/
├── components/
│   ├── MascotAvatar.tsx       # Phase 11 rewrites this to wrap <Rive>; Phase 12 adds
│   │                          # the 3 new MascotState union members + tap wrapper here
│   └── MascotVictoryLap.tsx   # unaffected — separate component, separate tier
├── hooks/
│   └── useMascotIdleTimer.ts  # NEW — pure timer hook for dozeOff, mirrors
│                               # useAlarmWatcher.ts's ref+cleanup+generation-guard shape
├── utils/
│   └── reduceMotion.ts        # unchanged — reused, not modified
└── store/ (or a new *.logic.ts file, per house convention)
    └── mascotDelight.logic.ts # NEW (recommended) — pure functions for "should dozeOff
                                 # fire given lastInteractionAt/now" and any transform-
                                 # eligibility logic, kept framework-free so it is
                                 # testable with `node --test` per house convention
                                 # (english.logic.ts, quota.ts, report.logic.ts, etc.)
```

### Pattern 1: Outer-accessible / inner-decorative wrapping (resolves the a11y tension)

**What:** The interactive affordance (tap-easter-egg) gets its accessible semantics on a wrapper component; the Rive view itself stays hidden from the accessibility tree, exactly as it is today.
**When to use:** Any time a decorative, programmatically-hidden visual becomes tappable. This is a well-established React Native / WCAG pattern (operability lives on the control, not on every pixel inside it) and this codebase already does the inverse shape elsewhere — e.g. `ui.tsx`'s close button uses `hitSlop` to grow a *visually* small 38dp target to a 44dp *tap* target without changing what's announced; the same separation-of-concerns applies here between "what's announced" (outer) and "what's decorative" (inner).

```tsx
// Illustrative — NOT a literal file in the codebase. Resolve {{...}} placeholders
// against Phase 11's real component/prop names before use.
import { Press } from '@/components/ui';

function MascotAvatar({ state, onTapEasterEgg, ...props }: MascotAvatarProps) {
  const riveRef = useRef<RiveRef>(null);
  const reduceMotion = useReduceMotion();

  const handleTap = () => {
    onTapEasterEgg?.(); // let caller track analytics/whatever, if needed
    if (reduceMotion) return; // reduced-motion: no animation plays, tap is still a no-op visually
    riveRef.current?.fireState('{{STATE_MACHINE_NAME}}', 'tapEasterEgg');
  };

  return (
    <Press
      accessibilityRole="button"
      accessibilityLabel={T.mascotTapHint /* e.g. "Tap Brix" — needs real copy */}
      onPress={handleTap}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} // if visual size < 44dp, per ui.tsx precedent
    >
      <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        <Rive ref={riveRef} resourceName="{{RIVE_ASSET_NAME}}" stateMachineName="{{STATE_MACHINE_NAME}}" autoplay />
      </View>
    </Press>
  );
}
```

### Pattern 2: Idle timer as a ref-held, cleanup-safe hook (for `dozeOff`)

**What:** Track "time since last interaction" without re-rendering on every tick; fire a callback once a threshold passes; reset on any interaction; clean up on unmount; guard against stale timers racing a newer one (same shape as `useAlarmWatcher.ts`'s `hideTimer`/generation pattern).
**When to use:** `dozeOff`'s trigger condition.

```typescript
// Source pattern: ealch-v2/src/hooks/useAlarmWatcher.ts (existing file in this repo)
// Illustrative adaptation — exact threshold/API TBD, needs a product decision
// on "how many seconds of inactivity = dozeOff" (not found anywhere in this repo).
export function useMascotIdleTimer(thresholdMs: number, onIdle: () => void) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reset = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(onIdle, thresholdMs);
  }, [thresholdMs, onIdle]);
  useEffect(() => {
    reset();
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [reset]);
  return reset; // call on any user interaction to restart the countdown
}
```

Note: `useAlarmWatcher.ts` does not check `AppState` — it runs its interval regardless of foreground/background. For a doze timer this is a meaningful difference to consider explicitly (should the mascot "wake up" to a fresh screen rather than appearing to have been asleep while the app was backgrounded?). This is an Open Question below, not resolved by this research.

### Anti-Patterns to Avoid

- **Making the whole mascot `accessible` without a wrapper split:** Simply removing `accessibilityElementsHidden` so the tap target becomes reachable would make TalkBack announce the Rive view itself, which was deliberately hidden as "decorative" (`MascotAvatar.tsx`'s own comment: the mascot sits beside a voice line that is what should be announced, not "mascot avatar"). This would regress Phase 11's hard-won accessibility baseline. Use Pattern 1 instead.
- **Re-implementing reduced-motion checks per new state:** `useReduceMotion()` already exists and is a hard always-on default per the "Accessibility Gate amendment" convention cited in `MascotAvatar.tsx`. Call the existing hook; do not add a second check or a per-state override.
- **Driving the Rive native touch API (`touchBegan`/`touchEnded`) for a simple discrete tap:** That API is for continuous pointer-tracking; a `Press` + `fireState` on `onPress` is simpler and keeps this codebase's a11y/haptic conventions intact.
- **Sending a brand-new Rive asset or state-machine version out via EAS Update (OTA) without checking whether it crosses the native-module/runtime-version boundary:** per `08.1-EVIDENCE-PROTOCOL.md`'s documented policy, this project runs on a `fingerprint` runtime policy — a pure asset/JS change (new states inside the *same* already-shipped `.riv` file plus new JS trigger-calling code) should be OTA-shippable, but adding/upgrading the `rive-react-native` native module itself is not. Verify with `npx @expo/fingerprint .` before/after, exactly as that file instructs, rather than assuming either way.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Firing a named Rive state-machine trigger from JS | A custom bridge/event system to the native Rive view | `riveRef.current?.fireState(stateMachineName, inputName)` (or `setInputState` for boolean/number inputs) — both are first-class ref methods on `rive-react-native`'s `RiveRef` | This is the library's documented, supported mechanism; building a parallel signaling path would duplicate what the native module already does `[VERIFIED: Context7 /rive-app/rive-react-native docs, this session]` |
| Deciding "should the tap register as a gesture" (debounce, double-tap, touch target size) | Custom `onTouchStart`/`onTouchEnd` handling on a raw `View` | The existing shared `Press` component (`src/components/ui.tsx`) | It already encodes this codebase's tap-cue sound, pressed-scale animation, a11y warning-on-missing-role dev check, and `hitSlop` precedent (see the 38dp visual / 44dp tap target close-button example) — reusing it keeps the new tap target consistent with every other tappable control in the app and keeps `A11Y-01`'s "every `Press`-built control announces a role by default" guarantee intact |
| Tracking "seconds since last interaction" for the doze timeout | A new generic app-wide inactivity-tracking singleton | A small hook local to the mascot (see Pattern 2), modeled on `useAlarmWatcher.ts`'s ref-timer shape | No existing generic inactivity tracker exists in this codebase to reuse (checked: `useAlarmWatcher.ts` is alarm-clock-time-of-day based, not elapsed-inactivity based) — building a narrowly-scoped hook is correctly sized; building an app-wide inactivity framework would be over-engineering for a mascot-only feature |
| Reduced-motion detection | A second `AccessibilityInfo.isReduceMotionEnabled()` call site | The existing `useReduceMotion()` hook (`src/utils/reduceMotion.ts`) | Already centralized; the file's own comment states it is deliberately the one place this check lives for the mascot |

**Key insight:** Nothing in this phase requires new infrastructure-level code. Every piece (gesture handling, a11y role/label, reduced-motion gating, timer-with-cleanup shape) already has a direct analog elsewhere in this codebase. The actual net-new work is wiring, not invention — which also means the plan should be able to point every new file/hook at a specific existing analog rather than design from scratch.

## Common Pitfalls

### Pitfall 1: The decorative-hidden vs. tappable-reachable contradiction (the core a11y risk of this phase)
**What goes wrong:** If the tap-easter-egg is added by simply removing or weakening `accessibilityElementsHidden` on the existing mascot view, TalkBack/VoiceOver will start announcing the Rive view itself (and possibly its internal layer names, depending on how Rive exposes its native view to the accessibility tree) — a regression of a deliberate, already-shipped accessibility decision, and a single ambiguous screen-reader focus stop where there wasn't one before.
**Why it happens:** The straightforward way to "make something tappable" in RN is to add `onPress`/`accessible={true}` directly to the thing you want pressed — but here, "the thing" (the Rive view) was deliberately made invisible to the tree, and that decision must survive.
**How to avoid:** Use Pattern 1 (outer `Press` wrapper carries the accessible semantics and the `onPress`; the inner `<Rive>` keeps `accessibilityElementsHidden`/`importantForAccessibility="no-hide-descendants"` unchanged). This is a structural decision for the UI-SPEC, not just an implementation detail — flag it there explicitly so it isn't improvised mid-execution.
**Warning signs:** A TalkBack sweep (per Pitfall-5 / the required device check) hears anything from the mascot area other than the one intended label on tap, or hears it on *focus* (swipe-to-navigate) when it should only be reachable, not auto-announced while idle.

### Pitfall 2: Treating Phase 11's not-yet-chosen Rive input system as settled
**What goes wrong:** Phase 12's plan hard-codes `fireState`/`setInputState` calls (the legacy Inputs API) while Phase 11 actually adopts Rive's newer Data Binding approach (or vice versa), creating two incompatible ways of talking to the same `.riv` file/state machine.
**Why it happens:** This research had to describe *a* mechanism to be concrete (legacy Inputs, because it's what's documented today), but Rive's own docs mark it deprecated for new projects — Phase 11, being built after this research, might reasonably choose Data Binding.
**How to avoid:** Phase 12's plan should explicitly say "use whatever trigger mechanism Phase 11's `MascotAvatar.tsx` already exposes" rather than hard-coding `fireState` calls as a foregone conclusion — treat the exact call as TBD/resolve-against-Phase-11, consistent with the Dependency Status section above.
**Warning signs:** Phase 12 code calls Rive ref methods Phase 11's actual component doesn't support, surfacing as a runtime `undefined is not a function` rather than a compile error (TS may not catch this if the ref type is loosely typed).

### Pitfall 3: Rapid repeated triggers dropping all but the last one
**What goes wrong:** A community forum report (unverified independently, flagged LOW confidence) describes sequential `setInputState` calls on a large state machine in `rive-react-native` only applying the last call — i.e., if `tap-easter-egg` can be triggered in quick succession (a user tapping repeatedly), only the final tap's trigger may visibly fire.
**Why it happens:** Reported as a library-level behavior with large state machines; root cause unconfirmed, no official fix found in this session's search.
**How to avoid:** Debounce/ignore taps while a tap-easter-egg animation is already in flight (track a local "is animating" boolean/ref, same shape `MascotAvatar.tsx` already uses for `celebrateKey`-gated animations) rather than relying on the library to queue or coalesce rapid triggers correctly.
**Warning signs:** Manual testing shows rapid taps only animate once, or animate a garbled partial state.
`[LOW confidence — single community-forum source, not independently reproduced or confirmed against an official changelog this session]`

### Pitfall 4: `dozeOff` firing or persisting across app backgrounding in a confusing way
**What goes wrong:** If the idle timer keeps counting (or doesn't reset) while the app is backgrounded, a user returning to the app after, say, 10 minutes away sees the mascot "already asleep" with no clear affordance to wake it, or — worse — the timer fires a dozeOff transition animation while the screen isn't even visible, then replays confusingly on foreground.
**Why it happens:** `setTimeout`/`setInterval` in RN continue to fire in JS even when the app is backgrounded (subject to OS throttling), and the `useAlarmWatcher.ts` precedent in this codebase does not guard on `AppState` at all — copying that shape verbatim would carry this gap forward.
**How to avoid:** Explicitly decide (Open Question below) whether the doze timer should pause/reset on `AppState` transitions, and encode that decision in `useMascotIdleTimer`'s hook rather than silently inheriting `useAlarmWatcher.ts`'s background-agnostic behavior.
**Warning signs:** Device testing shows the mascot is "asleep" immediately on every app foreground-return regardless of how long the user was away just now, or animates a wake-up transition the instant the screen draws (jarring, looks like a glitch rather than a designed state).

### Pitfall 5: Treating Phase 8's prior accessibility sweep as covering this new surface
**What goes wrong:** Assuming the mascot is "already accessibility-clean" because Phase 8/8.1 passed, and skipping a dedicated device sweep for the tap-easter-egg.
**Why it happens:** Phase 8's `08-PATTERNS.md` file-partition inventory (the authoritative list of every `<Press`/`<Pressable`/`<Button>` call site audited in that phase) does **not** include `MascotAvatar.tsx` or `MascotVictoryLap.tsx` at all — confirmed by reading the full partition table across all 9 plan rows. `[VERIFIED: 08-PATTERNS.md, this session]` Those files had no tappable surface at the time Phase 8 ran, so they were correctly out of scope then — but that also means there is no prior audit to "inherit." The phase's own Success Criterion 3 already states this explicitly; this research corroborates it with the actual Phase 8 inventory.
**How to avoid:** Run a dedicated sweep for the mascot's new tap target following `08.1-EVIDENCE-PROTOCOL.md`'s exact methodology (see Validation Architecture below) rather than a lighter-weight check.
**Warning signs:** A plan that marks ANIM-01's Success Criterion 3 "satisfied" without a new `12-DEVICE-EVIDENCE.md`-equivalent file containing verbatim TalkBack utterance rows.

## Code Examples

### Fire a Rive state-machine trigger from a ref (legacy Inputs API)
```tsx
// Source: Context7 /rive-app/rive-react-native docs (rive-react-native-reference.md), this session
import Rive, { RiveRef } from 'rive-react-native';

const riveRef = React.useRef<RiveRef>(null);
const handleFireState = () => {
  riveRef.current?.fireState('Swipe to delete', 'Trigger Delete'); // (stateMachineName, inputName)
};
```

### Set a non-trigger (boolean/number) input value
```tsx
// Source: Context7 /rive-app/rive-react-native docs, this session
riveRef.current?.setInputState('Swipe to delete', 'Swipe Threshold', 50); // (stateMachineName, inputName, value)
```

### Existing idle/timer shape to copy for the doze hook
```typescript
// Source: ealch-v2/src/hooks/useAlarmWatcher.ts (this repo, read in full this session)
// Demonstrates the house pattern: ref-held timer, generation-guard against stale
// timers, cleanup on unmount. useMascotIdleTimer should follow this shape, not
// invent a different one.
```
(See the file directly — `ealch-v2/src/hooks/useAlarmWatcher.ts` — for the full 47-line implementation; it is short enough to read in place rather than excerpt destructively here.)

### Existing hitSlop-for-small-tap-target precedent
```tsx
// Source: ealch-v2/src/components/ui.tsx (this repo), lines ~319-334
<Press
  accessibilityRole="button"
  accessibilityLabel={T.a11yClose}
  // The visible circle stays 38 for the design, but the TAP TARGET is
  // grown to the 44dp minimum with hitSlop.
  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
  style={{ width: 38, height: 38, borderRadius: 19, /* ... */ }}
/>
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|---------------|--------|
| Rive legacy "Inputs" system (`fireState`/`setInputState` by name-string lookup) | Rive "Data Binding" (binding view-model properties directly, no string-keyed lookup) | Ongoing migration per Rive's own docs; exact version this took effect in was not confirmed this session `[CITED: WebSearch summary, MEDIUM confidence — not independently cross-checked against Rive's official changelog]` | If Phase 11 adopts Data Binding, Phase 12's trigger-calling code should use the same paradigm, not fall back to legacy Inputs out of familiarity |

**Deprecated/outdated:** Rive's own documentation signals the legacy string-keyed Inputs system as not the recommended approach for *new* projects, while still functional and extensively documented (426 code snippets in Context7's index for this library, many of them Inputs-based) — this is a "still works, not the forward direction" situation rather than a hard break.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `dozeOff` means an idle-timeout-triggered state (mascot "falls asleep" after N seconds of no interaction) | Summary, Architecture Patterns (Pattern 2) | If it actually means something else (e.g., only triggers during a specific screen/flow, or is tied to time-of-day rather than elapsed inactivity), the entire idle-timer hook design is the wrong shape |
| A2 | `transform-in-out` means a transition animation tied to avatar switching in Settings → Appearance → Avatar | Summary, Architectural Responsibility Map | If it actually means a mascot-internal costume-change easter egg unrelated to the avatar roster, the `app/settings.tsx` integration point named in this research is wrong, and a different trigger site is needed |
| A3 | No new native module is required for Phase 12 beyond what Phase 11 already installs (i.e., Phase 12's states live in the same `.riv` asset/state machine Phase 11 ships, not a separate Rive file requiring separate native wiring) | Dependency Status, Anti-Patterns | If Phase 12 actually needs a second `.riv` asset or a Rive SDK version bump, the OTA-vs-native-build boundary analysis (and the "no new native dependency" claim in Standard Stack) is wrong, and Phase 12 would also need an EAS cloud build, not just an OTA update |
| A4 | The tap-easter-egg's accessible label/role can be satisfied by wrapping the Rive view in the existing `Press` component with an outer accessible wrapper, rather than needing new a11y infrastructure | Architecture Patterns (Pattern 1), Pitfall 1 | If platform screen readers (TalkBack/VoiceOver specifically, on the actual devices this project tests against) still partially expose the inner native Rive view despite the wrapper's `importantForAccessibility="no-hide-descendants"`, this pattern needs device verification before being treated as "solved" — this is exactly why Success Criterion 3's device sweep exists, so the plan should not skip it on the strength of this pattern alone |
| A5 | `rive-react-native`'s legacy Inputs API (`fireState`/`setInputState`) is the correct mechanism to reference in code examples, even though it may not be what Phase 11 ultimately chooses | Standard Stack, Code Examples, Pitfall 2 | If Phase 11 chooses Data Binding, any task that copy-pastes this research's `fireState` examples verbatim will not compile/run against Phase 11's actual component |

**If this table is empty:** N/A — see rows above; multiple claims in this research needed to be flagged as assumptions precisely because Phase 11 and the original design doc are both unavailable.

## Open Questions

1. **What exactly triggers `dozeOff`, and does it pause/reset while the app is backgrounded?**
   - What we know: It is almost certainly an idle-timeout state based on the name and on Duolingo-style mascot precedent in the broader app genre; `useAlarmWatcher.ts` provides a reusable *shape* (not a reusable value) for a timer hook.
   - What's unclear: The exact threshold (10 seconds? 60 seconds? only on specific screens?), and whether `AppState` backgrounding should pause the countdown.
   - Recommendation: This is a product/UX decision, not a research question — raise it in `/gsd-discuss-phase 12` (or the UI-SPEC step) rather than guessing a number into the plan.

2. **What does `transform-in-out` actually mean?**
   - What we know: `avatars.ts` defines a 7-member selectable roster with no existing switch-transition animation (`setAvatarId` in `app/settings.tsx` is a plain, unanimated state write today).
   - What's unclear: Whether this delight state is that avatar-switch transition, or an unrelated mascot-internal "costume change" easter egg disconnected from the Settings screen, or something else the (inaccessible) original design doc specifies.
   - Recommendation: Needs explicit user confirmation before planning concrete tasks — do not let the planner silently pick one interpretation and build toward it as if it were settled.

3. **Has Phase 11 been planned/built by the time Phase 12 is actually executed?**
   - What we know: As of this research (2026-10-13), Phase 11's directory is empty.
   - What's unclear: Whether another agent/session completes Phase 11 before Phase 12's plan is executed, and if so, what concrete contract it lands with.
   - Recommendation: Re-check `.planning/phases/11-brix-mascot-rive-animation-rollout-core-states/` immediately before executing any Phase 12 plan step that touches `MascotAvatar.tsx`; if Phase 11 artifacts now exist, re-derive the concrete Rive names from them instead of this research's placeholders.

4. **Can the original external design doc (2026-07-25 7-phase plan, "Brix Mascot amendment," "Playfulness addendum," "Accessibility Gate amendment") be made available to this workspace?**
   - What we know: `MascotAvatar.tsx`/`MascotVictoryLap.tsx` quote these document names as if they're authoritative sources already consulted by whoever built those files; none of the three phrases appear anywhere in this repo (`Ealchapp`) or in the sibling `ealch-admin` directory this session could read.
   - What's unclear: Where it actually lives (the task description speculates "a separate ealch-admin directory not accessible from this workspace," but the `ealch-admin` directory that *is* in this workspace's reach does not contain it either — it may be in a location outside both, or may only exist as prior chat/session context not persisted to a file).
   - Recommendation: Ask the user directly whether this document exists in writing anywhere, before the planner commits to specific animation-visual details (the house style — "squash-and-stretch" — is well-documented in code comments and safe to build toward; the *specific* delight-state behaviors are not).

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| `rive-react-native` (npm package) | Rive component Phase 12 extends | ✗ (not installed) | — (latest on npm: 9.8.5) | None — this is Phase 11's hard blocker, inherited by Phase 12 |
| Native Android/iOS build capability (for any native-module change) | Only if Phase 12 itself needs a native change (expected: no, per Assumption A3) | ✗ local `gradlew assembleRelease` deterministically blocked (project memory: `ealch-android-release-build-ninja-blocked`) | — | EAS cloud build (`eas build -p android --profile preview`), already the established workaround for this exact project per `08.1-EVIDENCE-PROTOCOL.md` |
| EAS Update / OTA channel | Shipping the new `.riv` states + JS trigger code, if purely additive | Presumed ✓ (already used throughout this project — `preview` channel referenced repeatedly in `08.1-EVIDENCE-PROTOCOL.md`) | — | — |
| Physical test device with TalkBack (Android) | Success Criterion 3's device sweep | ✓ — project memory confirms a USB-connected Pixel 9 (and Pixel 6) is the established test device | — | — |
| `jest` / `jest-expo` / `@testing-library/react-native` (component tests) | Any unit/component test for the new hook/logic module | ✓ already in `devDependencies` | jest ^30.5.2, jest-expo ~57.0.5, RNTL ^14.0.1 `[VERIFIED: package.json]` | — |

**Missing dependencies with no fallback:**
- `rive-react-native` itself — this blocks Phase 12 entirely until Phase 11 installs it. Not addressable within Phase 12's own scope.

**Missing dependencies with fallback:**
- Local native release builds — already has an established fallback (EAS cloud build) used successfully elsewhere in this project.

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Two-track: `node --test` for pure logic modules (`*.logic.ts`, no React/RN import), `jest` + `jest-expo` + `@testing-library/react-native` for component-render tests `[VERIFIED: package.json scripts]` |
| Config file | `ealch-v2/package.json` (`"test"` and `"test:component"` scripts); no separate jest.config file found — jest config likely lives in `jest-expo`'s preset defaults, not independently verified this session |
| Quick run command | `node --test src/hooks/<new-file>.logic.test.ts` (if a pure logic module is extracted, per the Don't-Hand-Roll/Architecture recommendation) |
| Full suite command | `npm run typecheck && npm test && npm run test:component -- --runInBand --silent` (exact three-command gate `08.1-EVIDENCE-PROTOCOL.md` already mandates for this kind of phase) |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|---------------------|-------------|
| ANIM-01 (dozeOff trigger logic) | "should dozeOff fire given elapsed-inactivity ≥ threshold" as a pure function | unit | `node --test src/hooks/mascotIdleTimer.logic.test.ts -x` (hypothetical name) | ❌ Wave 0 — needs both the logic module and its test written |
| ANIM-01 (reduced-motion gating holds for new states) | Calling into any new state with `useReduceMotion()` returning true skips the Rive trigger / shows static frame | component (RNTL) | `npm run test:component -- MascotAvatar` (hypothetical filter) | ❌ Wave 0 — depends on Phase 11's component existing first |
| ANIM-01 (accessibility structure: outer-accessible / inner-hidden) | Rendered tree has the accessible node outside, `accessibilityElementsHidden` node inside | component (RNTL, `getByRole`/tree inspection) | `npm run test:component -- MascotAvatar` | ❌ Wave 0 — same dependency |
| ANIM-01 (tap-easter-egg real-device screen-reader sweep) | TalkBack reads the correct, single label on the new tap target and nothing from inside the Rive view | manual-only (device) | N/A — human-verify checkpoint, not automatable | N/A by nature — see Phase-8-style sweep requirement below |
| ANIM-01 (dozeOff / transform-in-out don't newly announce themselves) | No TalkBack announcement fires on these state transitions themselves | manual-only (device), can be partially unit-tested by asserting no new `accessibilityLiveRegion`/announcement call is made in the component's code path | mixed | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** the relevant quick unit test for any new `*.logic.ts` module; `npm run typecheck` always.
- **Per wave merge:** full `npm run typecheck && npm test && npm run test:component -- --runInBand --silent`.
- **Phase gate:** full suite green AND a completed device-evidence file (see below) before `/gsd-verify-work`.

### Wave 0 Gaps
- [ ] A pure logic module for the doze-timeout decision (e.g. `src/hooks/mascotIdleTimer.logic.ts` or similar) and its `node --test` coverage — does not exist yet, and cannot be meaningfully written until the dozeOff threshold/AppState behavior (Open Question 1) is decided.
- [ ] A component test for `MascotAvatar.tsx`'s new states — blocked on Phase 11 landing the base Rive-wrapped component first; there is currently no test file for `MascotAvatar.tsx` at all (not found in this session's search).
- [ ] A new `12-DEVICE-EVIDENCE.md`-equivalent file (or an appended section in an existing one) that follows `08.1-EVIDENCE-PROTOCOL.md`'s row format verbatim, scoped specifically to the mascot's new tap target — this is what actually closes Success Criterion 3, and nothing in Phase 8/8.1's existing evidence files covers it (confirmed: `MascotAvatar.tsx`/`MascotVictoryLap.tsx` are absent from `08-PATTERNS.md`'s file partition).

## Security Domain

`security_enforcement` is `true` in `.planning/config.json` (ASVS level 1, block-on `high`), so this section is included per the standing rule, but this phase's actual security surface is minimal — it is a local, on-device animation/UI feature with no new network calls, no new stored user data, and no new auth surface.

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-------------------|
| V2 Authentication | No | — |
| V3 Session Management | No | — |
| V4 Access Control | No | — |
| V5 Input Validation | Marginal — the only "input" is a tap gesture and an elapsed-time value, both already bounded/typed by React Native's own event system; no user-supplied strings or payloads are involved | N/A beyond normal TypeScript typing |
| V6 Cryptography | No | — |

### Known Threat Patterns for this stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|----------------------|
| None identified specific to this phase | — | — |

No new threat surface was identified for this phase beyond the accessibility-correctness concern already covered in depth above (which is a usability/compliance concern, not a STRIDE security category).

## Sources

### Primary (HIGH confidence)
- Context7 `/rive-app/rive-react-native` — fetched docs on `fireState`, `setInputState`, `touchBegan`/`touchEnded`, Expo config-plugin setup, install instructions (via `npx ctx7@latest docs`, this session)
- `npm view rive-react-native version` / `time.modified` / `peerDependencies` — registry truth on current published version (9.8.5, 2026-07-17)
- Direct reads of `ealch-v2/src/components/MascotAvatar.tsx`, `MascotVictoryLap.tsx`, `ealch-v2/src/utils/reduceMotion.ts`, `ealch-v2/src/content/avatars.ts`, `ealch-v2/package.json`, `ealch-v2/src/hooks/useAlarmWatcher.ts`, `ealch-v2/src/components/ui.tsx` (Press/Button/Toggle/close-button sections)
- `.planning/phases/08.1-accessibility-quality-pass/08.1-EVIDENCE-PROTOCOL.md` and `.planning/phases/08-accessibility-retrofit/08-PATTERNS.md` — full reads, this session
- `.planning/ROADMAP.md` (Phase 11/12 sections), `.planning/REQUIREMENTS.md` (ANIM-01 + Traceability), `.planning/STATE.md` (Decisions log) — full/targeted reads, this session
- Directory listing confirming `.planning/phases/11-brix-mascot-rive-animation-rollout-core-states/` and `.../12-.../` are both empty, this session

### Secondary (MEDIUM confidence)
- WebSearch summary describing Rive's legacy Inputs system as deprecated in favor of Data Binding, and a community forum report of a `setInputState` rapid-call-coalescing issue — both relayed via WebSearch's own synthesis rather than this session directly reading the cited rive.app pages

### Tertiary (LOW confidence)
- The exact meaning of `dozeOff`'s timeout threshold and `transform-in-out`'s visual intent — no source at all found this session; documented as Open Questions and Assumptions, not stated as fact anywhere in this file

## Metadata

**Confidence breakdown:**
- Standard stack (rive-react-native API shape): MEDIUM-HIGH — Context7-sourced and npm-registry-verified, but Phase 11 hasn't chosen its actual integration shape yet
- Architecture / accessibility pattern (outer-wrapper resolution): MEDIUM — the pattern itself is standard RN/WCAG practice and has a direct in-repo precedent, but is unverified on an actual device against this specific Rive native view; the required device sweep is what ultimately confirms it
- Pitfalls: MEDIUM — most are derived directly from this codebase's own documented conventions and known constraints (native build blocker, Phase 8 inventory gap); one (rapid-trigger coalescing) is LOW, single-source
- `dozeOff`/`transform-in-out` concrete behavior: LOW — genuinely unknown, flagged as Open Questions requiring user input, not guessed

**Research date:** 2026-10-13
**Valid until:** Re-research or at minimum re-verify the Dependency Status section the moment Phase 11 produces any artifact — this document's central caveat (Phase 11 doesn't exist yet) has a very short shelf life by design.
