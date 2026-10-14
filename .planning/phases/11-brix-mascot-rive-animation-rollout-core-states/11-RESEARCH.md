# Phase 11: Brix Mascot Rive Animation Rollout — Core States - Research

**Researched:** 2026-10-13
**Domain:** React Native native-module animation integration (Rive) replacing an existing JS-driven `Animated` mascot component, inside an Expo SDK 57 / New-Architecture / dev-client app
**Confidence:** MEDIUM — the library/integration mechanics are HIGH confidence (official docs, npm registry, repo code read directly); the actual *scope* of this phase is MEDIUM/LOW confidence because the design source ("the 2026-07-25 7-phase plan") is not in this repository and no `.riv` asset exists yet

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| ANIM-01 (core states only) | Ship idle/listening/speaking/celebrating/thinking Rive states for `MascotAvatar`, squash-and-stretch house style, Brix-led roster, preserving `accessibilityElementsHidden` and `useReduceMotion()` | See Standard Stack, Architecture Patterns, Runtime State Inventory-equivalent (Codebase Context section), Common Pitfalls, Code Examples below. `listening`/`speaking` are **net-new** states — see "What's actually new" |

</phase_requirements>

## Summary

This phase replaces the *internals* of one already-shipped component — `ealch-v2/src/components/MascotAvatar.tsx` — with a Rive-driven renderer, without changing its public prop contract (`size`, `rounded`, `state`, `tier`, `celebrateKey`), because that component is already consumed by **15 screens** (`home.tsx`, `chat.tsx`, `exam-report.tsx`, `flashcards.tsx`, `voiceflash.tsx`, `narrated.tsx`, `speak.tsx`, `lesson.tsx`, `sentence.tsx`, `splash.tsx`, `roleplay.tsx`, `smartreview.tsx`, `speakmap.tsx`, `dictation.tsx`, `LessonRich.tsx`). Keeping the component's API stable and swapping only its rendering engine is the only approach that avoids a 15-file ripple.

Two of the five required states — **`listening`** and **`speaking`** — do not exist anywhere in the codebase today. `MascotAvatar`'s current type union is `'static' | 'idle' | 'thinking' | 'celebrate'`. The one screen that conceptually needs "listening" (`speak.tsx`, shadow-practice) currently fakes it by passing `state="thinking"` while STT is active, and never reflects "speaking" (coach TTS) in the mascot at all. This means roughly half of this phase's visible deliverable is genuinely new UI behavior, not a 1:1 port of existing behavior — the planner should budget for finding/adding the call sites, not just swapping a rendering engine.

The **design source is a blocker, not a research gap.** "The 2026-07-25 7-phase plan" and "squash-and-stretch house style" are referenced three times in this project's own docs (REQUIREMENTS.md, ROADMAP.md, STATE.md) but the actual document does not exist anywhere in this repository or its sibling `ealch-admin` folders (git-grepped, file-grepped — zero hits beyond the planning docs that cite it). The one artifact that *does* exist is the already-shipped `MascotAvatar.tsx` itself (commit `29fe591`, 2026-07-28, co-authored by "Claude Fable 5"), whose code comments explicitly describe itself as the Animated-based *placeholder* for what Rive will later deliver ("Rive slots in later for the richer amplitude-driven glow"). Treat this file's existing animation curves (breathing idle, sway thinking, squash/stretch/jump celebrate with micro/medium tiers) as the de facto spec to port, not a new design to invent.

No `.riv` file exists anywhere in the repo, and no Rive npm package is installed. This phase cannot ship without an external art/export step producing `.riv` files first (see Open Questions) — that is an art-pipeline dependency outside this research's or likely this phase's own control, and the planner should treat it as a blocking external dependency, not an engineering task.

**Primary recommendation:** Use the legacy, stable **`rive-react-native`** package (current 9.8.5, mature, state-machine-input-first API) — not the new Nitro-based `@rive-app/react-native` (0.5.5, pre-1.0, and which has *deprecated* state machine inputs in favor of "data binding," i.e. the exact API this phase needs is the one being phased out there). Keep one Rive `<Rive>` instance per mounted `MascotAvatar`, one state machine per `.riv` file with boolean/trigger inputs for idle/listening/speaking/celebrating/thinking (not multiple state machines — the component only supports one `stateMachineName` at a time), and preserve today's accessibility-hiding pattern unchanged (it operates at the RN View level, independent of what's rendered inside).

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Rive animation rendering (native `.riv` playback) | Browser/Client (native view, on-device) | — | Rive is a native module wrapping iOS/Android runtimes; no server or SSR involvement |
| State-machine input selection (which state to show) | Browser/Client (React component logic) | — | `MascotAvatar.tsx` already owns this today via its `state` prop; Rive migration keeps the same ownership, just changes what consumes the prop internally |
| Reduced-motion detection | Browser/Client (`AccessibilityInfo` via `useReduceMotion()`) | — | OS-level accessibility setting, read client-side only; existing hook stays the single source of truth |
| Accessibility-tree exclusion (`accessibilityElementsHidden`) | Browser/Client (RN View props) | — | Platform accessibility service, enforced by the OS on the native view tree; works regardless of what's inside the hidden View |
| `.riv` asset delivery | CDN/Static (bundled in app binary, NOT OTA) | — | Native module — any `.riv` asset or the player itself ships via EAS binary build, never via `expo-updates` OTA (same pattern as every other native-module phase in this project's history) |
| Live mic-level → animation input (listening amplitude) | Browser/Client (STT level stream → Rive numeric input) | — | `speak.tsx`'s existing `micLevel` state is already client-side; must be throttled before feeding a Rive state-machine number input (see Pitfalls) |

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|---------------|
| `rive-react-native` | 9.8.5 [VERIFIED: npm registry, published 2026-07-17] | Renders `.riv` files via native iOS/Android Rive runtimes; exposes `RiveRef` for imperative state-machine control | Mature (9.x), actively maintained, the API this phase's requirements (listening/speaking/celebrating/thinking driven by inputs) are built around — `setInputState`/`fireState`/`onStateChanged` are all first-class, stable API surface [CITED: github.com/rive-app/rive-react-native README/docs via Context7] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `expo-dev-client` | already installed (`~57.0.10`) [VERIFIED: ealch-v2/package.json] | Required to run any custom native module (Rive is not supported in Expo Go) | Already present in this project — no new install needed, but the existing dev client **must be rebuilt** once `rive-react-native` is added (native fingerprint change) |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `rive-react-native` (legacy) | `@rive-app/react-native` (Nitro rewrite, 0.5.5) | Faster (Margelo claims up to 94× faster multi-view loads [CITED: margelo.com/blog via WebSearch, unverified first-party benchmark]), but pre-1.0, requires `react-native-nitro-modules` as an additional native dependency, and **explicitly deprecates state machine inputs** — the exact mechanism idle/listening/speaking/celebrating/thinking needs — in favor of "data binding." Wrong tool for this phase's actual requirement today; revisit once it reaches 1.0 and the project's "one unproven native module per release" culture (see `MascotAvatar.tsx`'s own comment) tolerates it. |
| Rive | Lottie (`lottie-react-native`) | Not evaluated in depth — out of scope: the phase description, ROADMAP, and REQUIREMENTS all name Rive specifically as the already-approved direction (locked decision, not open for re-litigation by this research) |

**Installation:**
```bash
npx expo install rive-react-native expo-dev-client
```

**Version verification:** Confirmed live against the npm registry during this research session:
```
npm view rive-react-native version        → 9.8.5
npm view rive-react-native time.modified  → 2026-07-17T05:21:23.905Z
npm view rive-react-native engines        → { node: '>=16' }
npm view rive-react-native peerDependencies → { react: '*', 'react-native': '*' }
```
[VERIFIED: npm registry, checked 2026-10-13]

## Architecture Patterns

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│  Screen (speak.tsx / lesson.tsx / home.tsx / ... 15 call sites)  │
│                                                                   │
│   derives a semantic state string:                               │
│   analysed&&good ? 'celebrate'                                   │
│   : listening ? 'listening'      ← NEW                           │
│   : speaking ? 'speaking'         ← NEW                           │
│   : 'idle' | 'thinking' | 'static'                                │
└───────────────────────────┬───────────────────────────────────────┘
                            │ state, tier, celebrateKey props
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│  MascotAvatar.tsx  (PUBLIC API UNCHANGED — size/rounded/state/   │
│                      tier/celebrateKey)                           │
│                                                                   │
│  useReduceMotion() ──► if true: static/minimal, skip Rive drive   │
│                                                                   │
│  state → stateMachine input mapping (pure function, testable      │
│          without a native binary):                                │
│    idle        → bool "Idle" = true (or no-op, machine default)   │
│    listening   → bool "Listening" = true, number "Level" (mic amp)│
│    speaking    → bool "Speaking" = true                           │
│    celebrate   → trigger "Celebrate" + number "Tier" (micro/med)  │
│    thinking    → bool "Thinking" = true                           │
│                                                                   │
│  <View accessibilityElementsHidden                                │
│        importantForAccessibility="no-hide-descendants">            │
│     <Rive ref={riveRef}                                            │
│           source={require('.../brix.riv')}   ← per avatarId        │
│           stateMachineName="Brix"                                  │
│           autoplay={!reduceMotion} />                               │
│  </View>                                                            │
└───────────────────────────┬───────────────────────────────────────┘
                            │ setInputState / fireState (imperative,
                            │ via riveRef, inside a useEffect keyed
                            │ on [state, tier, celebrateKey, reduceMotion])
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│  Native Rive runtime (iOS RiveRuntime.framework /                 │
│                        Android rive-android .aar)                  │
│  — one state machine per .riv file, advances on its own clock,     │
│    renders directly to the native view                             │
└─────────────────────────────────────────────────────────────────┘
```

### Recommended Project Structure
```
ealch-v2/
├── assets/
│   └── mascot/                 # NEW — .riv files, one per avatarId (or one
│                                #        multi-artboard file; see Open Questions)
│       ├── brix.riv
│       ├── sel.riv
│       └── ...
├── src/
│   ├── components/
│   │   └── MascotAvatar.tsx    # MODIFIED — same props, Rive internals
│   ├── content/
│   │   └── avatars.ts          # MODIFIED — add .riv require() alongside .png
│   └── utils/
│       └── reduceMotion.ts     # UNCHANGED — already the single source of truth
├── metro.config.js             # MODIFIED — add 'riv' to resolver.assetExts
└── __mocks__/
    └── rive-react-native.ts    # NEW — jest manual mock (see Validation Architecture)
```

### Pattern 1: Preserve the component's prop contract, swap only the renderer
**What:** `MascotAvatar({ size, rounded, state, tier, celebrateKey })` keeps its exact exported signature; only the function body changes from `Animated.Value` manipulation to `riveRef.current?.setInputState(...)` calls.
**When to use:** Any time a component has many call sites and the underlying rendering technology changes but the semantic contract (what "celebrate" or "idle" *means* to a caller) does not.
**Example:**
```tsx
// Source: pattern derived from the existing MascotAvatar.tsx (ealch-v2/src/components/MascotAvatar.tsx)
// combined with rive-react-native's documented ref API (Context7: /rive-app/rive-react-native)
import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Rive, { RiveRef, Fit, Alignment } from 'rive-react-native';
import { useReduceMotion } from '@/utils/reduceMotion';
import { useStore } from '@/store/useStore';
import { mascotSrc } from '@/content/avatars'; // NEW: .riv require() lookup by avatarId

export type MascotState = 'static' | 'idle' | 'listening' | 'speaking' | 'thinking' | 'celebrate';

export function MascotAvatar({ size = 56, rounded = true, state = 'static', tier = 'micro', celebrateKey }: {
  size?: number; rounded?: boolean; state?: MascotState; tier?: 'micro' | 'medium'; celebrateKey?: number | string;
}) {
  const avatarId = useStore((s) => s.avatarId);
  const reduceMotion = useReduceMotion();
  const riveRef = useRef<RiveRef>(null);

  useEffect(() => {
    if (!riveRef.current) return;
    if (reduceMotion) { riveRef.current.pause(); return; }
    riveRef.current.setInputState('Brix', 'Idle', state === 'idle');
    riveRef.current.setInputState('Brix', 'Listening', state === 'listening');
    riveRef.current.setInputState('Brix', 'Speaking', state === 'speaking');
    riveRef.current.setInputState('Brix', 'Thinking', state === 'thinking');
  }, [state, reduceMotion]);

  useEffect(() => {
    if (state !== 'celebrate' || reduceMotion || celebrateKey === undefined) return;
    riveRef.current?.setInputState('Brix', 'Tier', tier === 'medium' ? 1 : 0);
    riveRef.current?.fireState('Brix', 'Celebrate');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [celebrateKey]);

  return (
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants"
      style={rounded ? { width: size, height: size, borderRadius: size / 2, overflow: 'hidden' } : { width: size, height: size }}>
      <Rive ref={riveRef} source={mascotSrc(avatarId)} stateMachineName="Brix"
        fit={Fit.Contain} alignment={Alignment.Center} autoplay={!reduceMotion}
        style={{ width: size, height: size }} />
    </View>
  );
}
```

### Anti-Patterns to Avoid
- **Driving a continuous numeric input (e.g. live mic level) on every STT callback tick without throttling:** a community-reported bug shows rapid sequential `setInputState` calls on a state machine can result in only the *last* call being reflected [LOW confidence, single forum report, not officially confirmed — CITED: rive.app community forum via WebSearch]. Throttle to roughly 10-15Hz (e.g. via `requestAnimationFrame` gating or a simple timestamp check) rather than calling on every raw mic-level sample.
- **Giving one `<Rive>` component more than one `stateMachineName`:** the component API only accepts a single state machine name per instance — confirmed by a Rive feature-request thread asking for multi-state-machine support that does not yet exist [MEDIUM confidence, CITED: rive.app community feature-request forum]. Design the `.riv` file with one state machine carrying all five states as inputs, not five separate state machines.
- **Re-deriving the squash-and-stretch look from scratch:** the existing `MascotAvatar.tsx` Animated implementation already encodes the approved visual language (breathing idle, curious sway for thinking, squash/stretch/jump celebrate with micro/medium tiers). Port its timing/easing intent into the `.riv` state machine rather than inventing new motion, since the actual 2026-07-25 design doc is not retrievable in this repo.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|--------------|-----|
| Driving animation state transitions from JS state | A custom bridge/event emitter to the native Rive view | `rive-react-native`'s `RiveRef.setInputState` / `fireState` | Already a stable, documented imperative API purpose-built for exactly this |
| Detecting reduced-motion preference | A new hook or polling loop | Existing `src/utils/reduceMotion.ts` `useReduceMotion()` | Already correct, already used by `MascotAvatar.tsx` and `MascotVictoryLap.tsx`, already listens for live OS changes via `AccessibilityInfo.addEventListener` |
| Hiding a decorative visual from screen readers | Per-platform conditional accessibility code | The existing `accessibilityElementsHidden` + `importantForAccessibility="no-hide-descendants"` pair on the wrapping `View` | Cross-platform (iOS + Android) coverage already proven in this codebase; works identically regardless of what's rendered inside the View, so it needs zero changes for the Rive swap |

**Key insight:** almost nothing about the *mechanism* for new-state-safe, accessible, reduced-motion-respecting rendering needs to be invented — it already exists in this file and is proven. The actual engineering risk is entirely in (1) the native module integration itself (first native module since `expo-speech-recognition`) and (2) retrofitting two genuinely new semantic states (`listening`, `speaking`) into call sites that don't yet express them.

## Common Pitfalls

### Pitfall 1: Metro doesn't know `.riv` is an asset
**What goes wrong:** `require('./brix.riv')` throws an "unknown extension"/module-resolution error.
**Why it happens:** Metro requires every asset extension to be explicitly registered; `.riv` is not one of Metro's or Expo's defaults.
**How to avoid:** Add `config.resolver.assetExts.push('riv')` to `ealch-v2/metro.config.js`, then restart Metro with a cache clear (`npx expo start -c`) — Metro caches its resolved config. [CITED: Rive's own React Native docs + Expo "Customizing Metro" docs, cross-verified via WebSearch]
**Warning signs:** A red-screen Metro bundling error naming the `.riv` file the moment any screen imports the updated `avatars.ts`.

### Pitfall 2: Expo Go can't run this, and neither can the stale dev client
**What goes wrong:** `"RiveReactNativeView" was not found in the UIManager"` at runtime, or the app silently shows a blank mascot.
**Why it happens:** `rive-react-native` ships custom native code; it is unsupported in Expo Go, and even in a custom dev client, the *existing* dev client binary predates this native module and doesn't contain it.
**How to avoid:** This project already builds a custom dev client (per existing native deps: `react-native-reanimated`, `react-native-adapty`, etc.) — rebuild it (`eas build --profile development` or local `expo run:android`/`run:ios`) after adding the package, and ship the eventual production build by binary, not OTA (`expo-updates` cannot add a native module). This matches every prior native-module phase in this project's own history (Phase 8.1's font-scale config plugin, Phase 10's `expo-store-review`) — each one's STATE.md/ROADMAP notes say "ships by binary, not OTA." [VERIFIED: STATE.md/ROADMAP.md project history, this repo]
**Warning signs:** Works in a fresh `eas build` but not in whatever dev client the team had installed yesterday.

### Pitfall 3: Android build fails needing a higher `compileSdkVersion`
**What goes wrong:** Gradle build failure referencing an AGP/compileSdk mismatch when first adding Rive.
**Why it happens:** Rive's Android SDK has needed `compileSdkVersion` 36 / AGP 8.9.1+ on some Expo SDK versions.
**How to avoid:** This project is on Expo SDK 57 (well past the SDK 53 threshold where Rive's own docs flag this as a *possible* fix-if-needed step, not a certain one) — attempt a plain install first; only reach for `expo-build-properties` + `expo-custom-agp` overrides if the build actually fails. [CITED: rive.app "Adding Rive to Expo" docs via WebFetch — MEDIUM confidence, docs explicitly scope this to SDK 53 and say "only if the build fails"]
**Warning signs:** A Gradle error mentioning `compileSdkVersion` or Android Gradle Plugin version immediately after the first `expo prebuild`/`eas build` following the Rive install.

### Pitfall 4: No real screen-reader concern, but no test coverage either
**What goes wrong:** Nothing breaks visibly, but a future regression (e.g. someone removes `accessibilityElementsHidden` while refactoring `MascotAvatar.tsx`) goes unnoticed.
**Why it happens:** [VERIFIED: grepped `ealch-v2/__tests__/` directly] zero existing tests reference `MascotAvatar`, `accessibilityElementsHidden`, or `importantForAccessibility` today — this behavior has shipped since 2026-07-28 with no automated proof.
**How to avoid:** This phase's own success criterion 3 requires preserving this behavior — write the first test for it now (see Validation Architecture Wave 0 Gaps below) rather than treating "it already works" as sufficient.
**Warning signs:** None at runtime — this is a silent-regression risk, not a crash risk.

### Pitfall 5: `listening`/`speaking` don't exist yet — this is net-new product behavior, not a port
**What goes wrong:** Treating this phase as "swap Animated for Rive, same five states" undercounts the work; `listening` and `speaking` require new call-site wiring, not just a new case in a switch statement.
**Why it happens:** [VERIFIED: direct code read] `MascotAvatar`'s type union today is `'static' | 'idle' | 'thinking' | 'celebrate'`. `speak.tsx` is the only screen with its own `listening`/`speaking` local state, and it currently maps `listening` → mascot `'thinking'` (a placeholder) and never reflects `speaking` in the mascot at all (`app/speak.tsx:610`). `roleplay.tsx` and `chat.tsx` fire TTS (`tts.speak(fr)`) without tracking a "speaking" boolean for the mascot either.
**How to avoid:** Scope which screens get the new states explicitly during planning (see Open Questions) rather than assuming "normal lesson flow" implies all STT/TTS screens automatically.
**Warning signs:** A plan that lists only "update MascotAvatar.tsx" as its file scope, with no screen-level task to wire the new states into at least `speak.tsx`.

## Code Examples

### Reading the current (pre-Rive) implementation's state contract
```tsx
// Source: ealch-v2/src/components/MascotAvatar.tsx (current, 2026-07-28, commit 29fe591)
export type MascotState = 'static' | 'idle' | 'thinking' | 'celebrate';
export type CelebrateTier = 'micro' | 'medium';
// Accessibility pattern to preserve exactly:
<View
  accessibilityElementsHidden
  importantForAccessibility="no-hide-descendants"
  style={/* size/rounded */}
>
  {/* visual content */}
</View>
```

### The one real "listening" consumer today (to retrofit)
```tsx
// Source: ealch-v2/app/speak.tsx:605-616 (current)
<MascotAvatar
  size={170}
  rounded={false}
  state={analysed && heard?.ok && heard.verdict === 'good' ? 'celebrate' : listening ? 'thinking' : 'idle'}
  //                                                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //                                     placeholder — should become `listening ? 'listening' : 'idle'`
  //                                     once the Rive component has a real listening state
  tier="micro"
  celebrateKey={analysed && heard ? `${heard.transcript}-${heard.score}` : undefined}
/>
```

### Throttling a live mic-level input before feeding a state-machine number input
```tsx
// Source: pattern synthesized from the community-reported "only last setInputState call
// applies" issue [LOW confidence, single forum report] + speak.tsx's existing micLevel state
const lastSentAt = useRef(0);
useEffect(() => {
  const now = Date.now();
  if (now - lastSentAt.current < 80) return; // ~12Hz cap
  lastSentAt.current = now;
  riveRef.current?.setInputState('Brix', 'Level', micLevel);
}, [micLevel]);
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|-------------------|---------------|--------|
| `rive-react-native` imperative `setInputState`/state-machine-input API | New Nitro-based `@rive-app/react-native` with "data binding" preferred, state machine inputs marked deprecated | New runtime first published 2025-12-10, actively released through 2026-10 [VERIFIED: npm `time.created`/`time.modified`] | Do not adopt the new runtime for this phase — its preferred API is the opposite of what this phase's state-driven design needs, and it is pre-1.0 (0.5.5) |

**Deprecated/outdated:**
- None relevant inside the legacy `rive-react-native` package itself — its CHANGELOG shows only native-runtime version bumps (iOS 6.21.x, Android 11.x) through 2026-07, no breaking API changes recently. [CITED: GitHub CHANGELOG.md via WebFetch]

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | The existing `MascotAvatar.tsx` Animated implementation's visual language (breathing/sway/squash-stretch-jump) is an acceptable stand-in for "the squash-and-stretch house style specified in the 2026-07-25 7-phase plan" because that document could not be located anywhere in this repo or its sibling admin folders | Summary, Anti-Patterns | If a real design doc exists outside this repo (e.g. a Claude.ai artifact canvas, following the same pattern as Phase 07.1's spine design) and specifies different motion curves or a richer "amplitude-driven glow," the planner may build the wrong visual target entirely |
| A2 | `speak.tsx` is the primary (possibly only) "normal lesson flow" screen that needs real `listening`/`speaking` mascot states; `roleplay.tsx`/`chat.tsx` are out of this phase's scope unless the planner decides otherwise | Common Pitfalls (Pitfall 5), Open Questions | If "normal lesson flow" was intended to include conversational practice (`roleplay.tsx`, `chat.tsx`) or dictation/voiceflash, the phase ships an inconsistent mascot experience across STT/TTS surfaces |
| A3 | One `.riv` file per roster avatar (7 files, e.g. `brix.riv`, `sel.riv`, ...) each exposing an identically-named state machine ("Brix") and input set, OR a single multi-artboard `.riv` selected by `artboardName`, is a workable asset-pipeline shape — no `.riv` asset or art-pipeline documentation exists in-repo to confirm which | Architecture Patterns, Open Questions | If the art pipeline instead plans to ship only the default `brix` character animated and leave the other 6 roster members on static PNGs (a legitimate scope-reduction the roadmap doesn't rule out), the component needs a fallback-rendering branch this research didn't design |
| A4 | `rive-react-native` (legacy) works acceptably under React Native's New Architecture via its interop layer, since this app (RN 0.86.2 + Reanimated 4.5.1) cannot run the old architecture at all | Standard Stack, Pitfall 2 | Neither the package's README/CHANGELOG nor a targeted web search explicitly confirms Fabric/New-Architecture compatibility; if the legacy package has unresolved New-Architecture issues, the dev-client build could crash on mount rather than merely needing a rebuild |

**If this table is empty:** N/A — see rows above; all four need a human (or a throwaway spike build) to confirm before full implementation, though none blocks starting the integration spike itself.

## Open Questions

1. **Does an approved `.riv` asset actually exist, and for how many roster members?**
   - What we know: Zero `.riv` files exist in this repo. The avatar roster has 7 selectable PNG characters (`brix`, `sel`, `remy`, `pousse`, `fraise`, `mure`, `brixOriginal`). `.planning/` has no record of an art-pipeline deliverable or ticket for `.riv` export.
   - What's unclear: Whether this phase is blocked entirely until an external designer/art pipeline delivers `.riv` file(s), or whether the phase is expected to ship with only the default `brix` avatar animated (others staying on static PNG via a fallback branch in `MascotAvatar.tsx`).
   - Recommendation: This should be the first thing confirmed in discuss-phase/planning, ideally before any task breakdown — it changes whether Wave 0 includes "wait for/obtain .riv asset" as a literal blocking task.

2. **Which screens get `listening`/`speaking`, beyond `speak.tsx`?**
   - What we know: `speak.tsx` has real `listening`/`speaking` local state today, with `listening` faked as mascot `'thinking'` and `speaking` never reflected. `roleplay.tsx` and `chat.tsx` fire TTS without any speaking-state tracking. `voiceflash.tsx`/`dictation.tsx`/`sentence.tsx` have STT-driven phases but don't route them through the mascot's `state` prop at all.
   - What's unclear: The roadmap's criterion 1 says "during normal lesson flow" without naming screens exhaustively.
   - Recommendation: Scope explicitly to `speak.tsx` as the minimum bar (it's the only screen with an existing, if faked, listening concept), and treat `roleplay.tsx`/`chat.tsx` speaking-state wiring as a stretch goal or explicitly deferred — don't let it be decided by accident.

3. **How does the acte 00 pre-roll sheet (`app/preroll.tsx`) want a Brix presence, if at all?**
   - What we know: `preroll.tsx` (the surface Phase 07.1 created and this phase's ROADMAP entry says must be "in scope when the core states are specified") is currently **text-only** — no `MascotAvatar` import, no mascot rendering of any kind.
   - What's unclear: Whether "in scope" means the planner must add a Brix presence here (e.g. an `idle` mascot greeting before the narrated lesson starts) as part of this phase, or whether "in scope" is satisfied by simply ensuring the component API this phase ships *could* be dropped into `preroll.tsx` later without rework (i.e., a non-regression guarantee, not a new UI requirement).
   - Recommendation: Flag for discuss-phase. The ROADMAP's own phrasing ("belongs in scope when the core states are specified rather than retrofitted afterwards") reads as "design the API so it fits here," not necessarily "render it here today" — but this is genuinely ambiguous and affects whether `preroll.tsx` appears in the plan's file list.

## Security Domain

Not materially applicable. This phase touches no auth, session, network, or input-validation surface — it is a client-side rendering/animation change to an already-decorative, accessibility-hidden component. No ASVS category applies beyond the general code-quality bar already enforced by this project's CI/typecheck/test gates.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Jest 29 + `jest-expo` preset + React Native Testing Library (component tests); Node's built-in `node --test` (pure-logic tests) — both already configured [VERIFIED: `ealch-v2/jest.config.js`, `ealch-v2/package.json` scripts] |
| Config file | `ealch-v2/jest.config.js` (component), bare `node --test` glob for logic (`package.json`'s `"test"` script) |
| Quick run command | `npx jest __tests__/mascot-*.test.tsx` (once added) |
| Full suite command | `npm run test:component` (Jest/RNTL) and `npm test` (node --test logic suite) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|---------------------|-------------|
| ANIM-01 (a11y) | `MascotAvatar` stays `accessibilityElementsHidden` + `importantForAccessibility="no-hide-descendants"` regardless of `state` | component (RNTL) | `npx jest __tests__/mascot-a11y.test.tsx -x` | ❌ Wave 0 |
| ANIM-01 (reduced motion) | `useReduceMotion()===true` → Rive playback paused / state machine not driven, no crash | component (RNTL, with a mocked `AccessibilityInfo.isReduceMotionEnabled`) | `npx jest __tests__/mascot-reduce-motion.test.tsx -x` | ❌ Wave 0 |
| ANIM-01 (state mapping) | Each of idle/listening/speaking/celebrating/thinking maps to the correct `setInputState`/`fireState` calls on the mocked `RiveRef` | component (RNTL + the manual `rive-react-native` mock) | `npx jest __tests__/mascot-state-machine.test.tsx -x` | ❌ Wave 0 |
| ANIM-01 (call-site retrofit) | `speak.tsx` passes `'listening'`/`'speaking'` (not the old `'thinking'` placeholder) at the right moments | component (RNTL, existing `a11y-practice-*.test.tsx` pattern as precedent) | `npx jest __tests__/speak-mascot-states.test.tsx -x` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `npx jest <touched test file> -x`
- **Per wave merge:** `npm run test:component && npm test`
- **Phase gate:** Full suite green before `/gsd-verify-work`; plus a real-device check (this project's established pattern for every UI/native-module phase) confirming the Rive view actually renders on a physical Android device (Pixel 6/Pixel 9, per this project's device-testing history), not just in Jest's mocked environment.

### Wave 0 Gaps
- [ ] `__mocks__/rive-react-native.ts` — a manual Jest mock exporting a `forwardRef` stub `<Rive>` component plus a ref object exposing no-op `setInputState`/`fireState`/`play`/`pause`/`stop`/`reset` jest-mock functions, so component tests can assert *what was called* without a native binary. **No official mock ships with the package** [VERIFIED: searched rive-react-native docs/CONTRIBUTING.md — only `yarn test` for the library's own internal tests, nothing exported for consumers].
- [ ] `__tests__/mascot-a11y.test.tsx` — covers ANIM-01's accessibility-preservation criterion; first test ever written against this behavior in this codebase.
- [ ] `__tests__/mascot-reduce-motion.test.tsx` — covers ANIM-01's reduced-motion criterion.
- [ ] `metro.config.js` resolver.assetExts `'riv'` entry — not a test gap but a build-time prerequisite every other Wave 0 item depends on.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| `rive-react-native` npm package | Core rendering | ✗ (not installed) | — | None — must install; low risk, simple `npx expo install` |
| `.riv` asset file(s) for the Brix roster | Everything visible this phase delivers | ✗ (none in repo) | — | **No fallback** — this is the phase's real blocker (see Open Question 1); without it, only the component-level plumbing (state mapping, a11y, reduced-motion, mocked tests) can be built, not anything visually verifiable on-device |
| Custom dev client rebuild capability (EAS or local Android/iOS toolchain) | Running/testing the native module at all | Unconfirmed this session — prior STATE.md entries record local `gradlew assembleRelease` blocked on this machine (Windows/ninja/Defender) with EAS cloud builds used as the workaround | — | EAS cloud build (`eas build --profile development`), the already-established workaround per `STATE.md` Phase 07 notes |
| Physical Android test device | Real-device verification (this project's standing pattern for every UI phase) | Likely yes — Pixel 6/Pixel 9 referenced repeatedly in STATE.md/ROADMAP.md as the project's device-testing hardware | — | — |

**Missing dependencies with no fallback:**
- The `.riv` asset itself. This blocks the *visual* success criteria (1, 2) even though the *mechanical* success criteria (3 accessibility, 4 reduced-motion) can be built and tested against a placeholder/mock `.riv` or even a mocked Rive component.

**Missing dependencies with fallback:**
- `rive-react-native` package install — trivial, no risk.
- Local Android release-build toolchain — EAS cloud build is this project's own proven workaround.

## Sources

### Primary (HIGH confidence)
- `/rive-app/rive-react-native` via Context7 — Expo config plugin setup, `setInputState`/`fireState`/`onStateChanged`/`play`/`pause`/`stop` API reference, local asset loading (`resourceName` vs `url` vs `source={require(...)}`), native SDK version customization
- npm registry (`npm view rive-react-native ...`, `npm view @rive-app/react-native ...`) — versions, publish dates, peer dependencies, checked live 2026-10-13
- Direct repo reads: `ealch-v2/src/components/MascotAvatar.tsx`, `MascotVictoryLap.tsx`, `src/utils/reduceMotion.ts`, `src/content/avatars.ts`, `app/speak.tsx`, `app/voiceflash.tsx`, `app/sentence.tsx`, `app/dictation.tsx`, `app/roleplay.tsx`, `app/chat.tsx`, `app/preroll.tsx`, `ealch-v2/metro.config.js`, `ealch-v2/jest.config.js`, `ealch-v2/package.json`, `ealch-v2/app.json`
- `git log`/`git show 29fe591` — the actual commit that introduced `MascotAvatar.tsx` and the Brix roster, 2026-07-28
- `.planning/REQUIREMENTS.md`, `.planning/STATE.md`, `.planning/ROADMAP.md` (this project's own locked decisions/history)

### Secondary (MEDIUM confidence)
- rive.app "Adding Rive to Expo" page via WebFetch — install steps, iOS/Android minimums, compileSdk caveat scoped to "SDK 53, only if build fails"
- rive-nitro-react-native GitHub README via WebFetch — feature-support/maturity of the new Nitro runtime, explicit "state machine inputs deprecated" note
- GitHub CHANGELOG.md for `rive-react-native` via WebFetch — recent version history, no New-Architecture-specific entries found

### Tertiary (LOW confidence)
- rive.app community forum thread on sequential `setInputState` calls only reflecting the last one — single report, RN 0.75.3, not platform-scoped, not officially confirmed
- rive.app community feature-request thread on single-state-machine-per-component limitation — a feature request, not an official spec statement, though consistent with the documented `stateMachineName: string` (singular) prop shape
- Margelo blog performance claims for the Nitro rewrite — first-party marketing benchmark, not independently verified

## Metadata

**Confidence breakdown:**
- Standard stack (library choice, versions, install): HIGH — verified directly against npm registry and official docs
- Architecture (prop-contract-preservation pattern, state-machine design): HIGH for the pattern itself (derived from real code), MEDIUM for the exact input names/shape (invented here as a reasonable default, not yet matched against a real `.riv` file since none exists)
- Pitfalls: HIGH for Metro/dev-client/compileSdk (CITED, cross-verified with 2+ sources), LOW for the sequential-input-throttling claim (single forum report)
- Scope/requirements interpretation (listening/speaking retrofit, preroll.tsx, asset pipeline): LOW/MEDIUM — this is the biggest risk area and is called out explicitly in Open Questions

**Research date:** 2026-10-13
**Valid until:** ~30 days for the library/version facts (Rive ships native-runtime bumps every few weeks); the scope/asset-pipeline open questions should be resolved in discuss-phase/planning regardless of elapsed time, since they depend on an external, undated art deliverable rather than the library's release cadence
