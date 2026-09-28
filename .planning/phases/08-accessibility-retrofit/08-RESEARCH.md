# Phase 8: Accessibility Retrofit - Research

**Researched:** 2026-09-27
**Domain:** React Native and Expo accessibility, appearance, and large text
**Confidence:** HIGH for codebase findings and documented APIs; MEDIUM for final native behavior until device verification

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Use one screen-reader focus stop per action. A trail act row announces its title, relevant progress, and lock status together. A separate action such as Fiche gets its own stop; decorative text and icons do not create redundant stops.
- **D-02:** Interface words in accessible labels, such as “locked” and “continue,” follow the app's selected interface language. Keep authored French lesson content as authored rather than translating it merely to build a label.
- **D-03:** When a level panel, language panel, or paywall opens, focus begins at its title, then proceeds through the choices and actions in reading order. Verify this behavior with TalkBack, including whether overlay controls can be reached.
- **D-04:** A locked act row announces both that it is locked and that activating it opens the Première paywall. Do not announce it as though activation starts the act.
- **D-05:** Fresh installs default to Automatic, following the device's light/dark setting. The current app offers only explicit Dark and Light; Automatic is a new choice to add within A11Y-03.
- **D-06:** Preserve an existing install's saved explicit Dark or Light choice across the update. Do not migrate those users to Automatic.
- **D-07:** While Automatic is selected, a device appearance change updates the app immediately, including while Ealch is open. Explicit Dark or Light remain explicit choices.
- **D-08:** Settings displays the resolved appearance alongside Automatic, for example “Automatic · Dark.” Localize this copy in the current app language.
- **D-09:** Automatic applies coherently across the whole app, including status and navigation bars, sheets, and paywall surfaces.
- **D-10:** Preserve the learner's larger text. When content exceeds the available height, scroll the flashcard text rather than shrinking text or truncating it.
- **D-11:** Each face begins at the top after a flip, even if the previous face had been scrolled.
- **D-12:** Keep deck progress and the Flip/answer controls visible while the card's text scrolls. Scrolling belongs within the card face rather than moving the entire screen.

### Claude's Discretion

- Exact role/label wording beyond the rules above, layout mechanics for the scrollable face, and implementation details for theme state and OS observation belong to research and planning. The roadmap's per-control semantic role and real-device verification requirements are fixed.

### Deferred Ideas (OUT OF SCOPE)

- None — discussion stayed within Phase 8's roadmap scope. The broader UDL work described under `ealch-admin/UDL/` remains a separate backlog and was not folded into this phase.
</user_constraints>

## Architectural Responsibility Map

Single-tier mobile client for these requirements. Native OS settings and accessibility services are external inputs; persisted preference is local storage. No backend or schema change is indicated. [VERIFIED: `app.json`, `package.json`, `useStore.ts`, Phase 8 roadmap]

## Summary

The shared `Press` forwards `PressableProps` and adds no role. Retrofit semantics at each action call site, with the shared component remaining neutral. Existing `Toggle` already demonstrates a switch role plus checked state. A screen-reader audit must cover current Phase 07.1 surfaces, icon actions, overlay focus, and hidden animated content. [VERIFIED: `src/components/ui.tsx`, `src/components/TrailRow.tsx`, Phase 8 roadmap]

The app declares native `userInterfaceStyle: "automatic"` but stores `mode: 'dark' | 'light'` with a fresh default of dark and derives palettes directly from that preference. Introduce a three-way preference while keeping the resolved theme binary. Preserve persisted explicit choices and make system changes observable while open. Android's Expo configuration needs `expo-system-ui` and a native build check. React Native **0.86** uses `Appearance.setColorScheme('unspecified')` to remove an app override; the newer unversioned docs use `'auto'`, so execution must follow the 0.86 API. [VERIFIED: `app.json`, `useStore.ts`, `palette.ts`, `useTheme.ts`, `settings.tsx`; CITED: https://docs.expo.dev/versions/v57.0.0/sdk/system-ui/, https://reactnative.dev/docs/0.86/appearance]

The flashcard already scales `TX` text but clips both absolute-positioned faces with `overflow: hidden` in a card capped at 480 px. Make the text region bounded and scrollable, keep progress and actions anchored, reset the new face to top, and correct the nested Flip/audio interaction. [VERIFIED: `app/flashcards.tsx`, `src/components/Type.tsx`; CITED: https://reactnative.dev/docs/scrollview]

**Primary recommendation:** Split implementation into screen-by-screen semantics, panel focus, automatic theme, and flashcard overflow; finish with a real TalkBack and appearance/font-scale device pass.

## Standard Stack

| Tool | Existing or required version | Use | Evidence |
|------|-----------------------------|-----|----------|
| React Native `Pressable`, accessibility props, `AccessibilityInfo`, `useColorScheme`, `ScrollView` | RN 0.86.2 installed | roles/states/focus, OS appearance, scrollable faces | [VERIFIED: `package.json`; CITED: https://reactnative.dev/docs/accessibility, https://reactnative.dev/docs/appearance, https://reactnative.dev/docs/scrollview] |
| Expo `expo-system-ui` | SDK 57 recommends `~57.0.4`; currently absent | honor native automatic appearance on Android | [VERIFIED: `package.json`; CITED: https://docs.expo.dev/versions/v57.0.0/sdk/system-ui/] |
| Zustand persist and existing palettes | Zustand ^5.0.14 installed | save preference, derive effective theme | [VERIFIED: `package.json`, `useStore.ts`, `palette.ts`] |
| Jest/RNTL and Node test runner | existing | behavior and semantic regression tests | [VERIFIED: `package.json`, `__tests__/settings.test.tsx`, `__tests__/toggle.test.tsx`] |

Use `npx expo install expo-system-ui` during execution so Expo chooses the compatible package and updates the lockfile. A new binary may be needed to apply native app configuration. [CITED: https://docs.expo.dev/versions/v57.0.0/sdk/system-ui/]

## Architecture Patterns

```text
OS color scheme ──┐
                  ├── preference resolver ── binary palette ── screens, sheets, paywall, system bars
saved choice ─────┘

localized app copy + content ── action-specific label/state ── Pressable ── TalkBack
panel open ── title ref / accessibility focus ── choices in reading order

OS font scale ── TX measured text ── bounded face ScrollView ── visible fixed actions
```

### Component responsibilities

| Area | Existing files | Planning direction |
|------|----------------|--------------------|
| Shared actions | `src/components/ui.tsx`, call sites in `app/` and `src/components/` | Keep `Press` semantically neutral; require explicit actual role, state/value, and useful name at each interactive use. Do not assign a blanket button role. |
| Trail and lesson | `app/den.tsx`, `app/act.tsx`, `app/levels.tsx`, `app/lesson.tsx`, `src/components/TrailRow.tsx` | Audit one action per focus stop, localized lock/progress/outcome, panel title focus. |
| Paywall and settings | `app/paywall.tsx`, `app/settings.tsx` | Audit icon/choice labels, selected states, title focus, appearance selector. |
| Appearance | `src/store/useStore.ts`, `src/theme/palette.ts`, `src/theme/useTheme.ts`, `app/_layout.tsx`, `app.json` | Store `automatic | dark | light`; resolve to `dark | light`; apply the resolved theme and native system chrome. |
| Flashcards | `app/flashcards.tsx`, `src/components/Type.tsx` | Scroll face text only; maintain visible controls and clean accessibility tree. |

### Accessibility semantics and focus

An accessible parent groups its children into one element. Use that for one trail-row action, but do not hide a separate action inside the same accessible parent. `accessibilityRole`, `accessibilityState`, and `accessibilityValue` need to describe the actual action. A locked row is still actionable because its handler opens the paywall; it must not claim `disabled: true`. `selected: row.startMarker` also needs review: a visual start marker does not necessarily mean a selected control. [VERIFIED: `TrailRow.tsx`; CITED: https://reactnative.dev/docs/accessibility]

Panels need an accessible title and deliberate focus after presentation. React Native documents `AccessibilityInfo.sendAccessibilityEvent(host, 'focus')`; current docs mark `setAccessibilityFocus` deprecated. Hide background descendants appropriately when a modal is open, then restore focus on close. Actual ordering and reachability require TalkBack verification because overlays may differ from source order. [CITED: https://reactnative.dev/docs/accessibility, https://reactnative.dev/docs/accessibilityinfo]

### Appearance preference

Keep the saved preference distinct from the effective theme. A fresh install can default to `automatic` while a hydrated older install retains persisted `dark` or `light`. `buildTheme` continues to accept only an effective binary mode. Settings shows the selected preference and, when Automatic, the current effective mode. Watch OS changes through `useColorScheme` or documented `Appearance` events; verify active-app switching. Explicit modes must control the native appearance too, not just React colors. In RN 0.86, remove the app override with `Appearance.setColorScheme('unspecified')`. [VERIFIED: `useStore.ts`, `palette.ts`, `useTheme.ts`; CITED: https://reactnative.dev/docs/0.86/appearance, https://docs.expo.dev/develop/user-interface/color-themes/]

### Flashcard structure

The outer card is currently a Flip `Press` containing an audio `Press`; the source deliberately omits audio's button role to avoid a nested HTML button on web. Plan a separate Flip control from the independently focusable audio action rather than layering an interactive child inside an accessible button. Both faces remain mounted, so `pointerEvents` alone does not guarantee the hidden face is absent from the accessibility tree. Add explicit hidden-face semantics and device-check. Give the scroll area bounded height/flex, expose all text, and reset scroll on flip or card advance. [VERIFIED: `app/flashcards.tsx`; CITED: https://reactnative.dev/docs/accessibility, https://reactnative.dev/docs/scrollview]

## Don't Hand-Roll

- Do not build custom screen-reader traversal or announce every decorative node. Use React Native accessibility props and platform focus events. [CITED: https://reactnative.dev/docs/accessibility]
- Do not implement a custom OS theme event bus. Use `useColorScheme`/`Appearance` and Expo's supported native setup. [CITED: https://reactnative.dev/docs/appearance, https://docs.expo.dev/versions/v57.0.0/sdk/system-ui/]
- Do not shrink flashcard text until it fits. Use a bounded `ScrollView` with existing text scale logic. [VERIFIED: D-10; CITED: https://reactnative.dev/docs/scrollview]

## Common Pitfalls

1. **Blanket role on `Press`:** misannounces switch, tab, link, and special gestures. Audit each actual action; preserve the roadmap's explicit prohibition. [VERIFIED: `.planning/ROADMAP.md` Phase 8]
2. **False disabled locked row:** `TrailRow` declares `disabled: row.locked` but its handler opens paywall. Remove false state and announce the action. [VERIFIED: `TrailRow.tsx`]
3. **A label is not a focus test:** an icon can have a label but still be unreachable under an overlay or incorrectly grouped. Use real-device TalkBack per touched screen and panel. [VERIFIED: `.planning/ROADMAP.md` Phase 8; CITED: https://reactnative.dev/docs/accessibility]
4. **Theme preference conflated with result:** extending `Mode` to `'automatic'` and passing it directly into `buildTheme` silently selects the dark branch. Keep a resolved binary mode. [VERIFIED: `palette.ts`]
5. **Native configuration absent:** `app.json` alone currently cannot prove Android follows appearance; `expo-system-ui` is absent and a native rebuild is needed for configuration changes. [VERIFIED: `app.json`, `package.json`; CITED: https://docs.expo.dev/versions/v57.0.0/sdk/system-ui/]
6. **Nested card actions and hidden face:** outer Flip includes audio; turned-away face is mounted and only touch-gated. Separate actions and exclude the hidden face from accessibility traversal. [VERIFIED: `app/flashcards.tsx`]
7. **Text still clips despite text metrics:** both faces have `overflow: hidden` and no scroll; verify OS scale 1.3 and a larger scale on device. [VERIFIED: `app/flashcards.tsx`, `src/components/type.logic.ts`]

## Project Constraints

- `ealch-v2/AGENTS.md` requires reading the exact Expo SDK 57 docs before writing app code. The versioned docs were checked during research: https://docs.expo.dev/versions/v57.0.0/ . [VERIFIED: `ealch-v2/AGENTS.md`; CITED: https://docs.expo.dev/versions/v57.0.0/]
- Phase 07.1 is a hard dependency and its 11 plans are executed. Its verification report is currently untracked and records residual device spot checks, but does not block Phase 8. Plan against current replacement screens. [VERIFIED: `08-CONTEXT.md`, `07.1-VERIFICATION.md`, `.planning/ROADMAP.md`]
- The broader UDL pronunciation and language backlog is outside this phase. [VERIFIED: `08-CONTEXT.md`]

## Validation Architecture

| Requirement | Automated checks during execution | Real-device proof |
|-------------|-----------------------------------|-------------------|
| A11Y-01 | RNTL `getByRole` and state/value assertions for representative shared actions; source inventory to ensure every interactive `Press` is classified | TalkBack sweep of home/den, act, lesson, levels, Settings, paywall, then remaining touched screens; verify role, action, order, and state |
| A11Y-02 | Label assertions for icon/custom buttons; test one stop per action on trail rows | TalkBack icon announcement and panel title focus; verify overlay and background traversal |
| A11Y-03 | Pure resolver tests for preference × OS mode, fresh default and persisted explicit modes; Settings choice/state tests | Switch OS dark/light while app remains open; verify screens, sheets, paywall, status/navigation bars; verify explicit override and cold start |
| A11Y-04 | Component test that face content is in a scroll container and actions outside it; reset-on-flip test where practical | Font scale 1.3 and larger on Android, long prompt/back note, both directions; scroll entire text, flip/reset, progress and controls remain visible |

Existing commands: `npm run typecheck`, `npm test`, and `npm run test:component` from `ealch-v2/`. Existing `settings.test.tsx` and `toggle.test.tsx` provide RNTL patterns. New tests should target behavior that grep or typecheck cannot prove. Device evidence cannot be replaced by an automated role count. [VERIFIED: `package.json`, `__tests__/settings.test.tsx`, `__tests__/toggle.test.tsx`, Phase 8 roadmap]

## Open Questions (RESOLVED for planning; device proof pending)

1. **RESOLVED for planning — Plan 05:** Confirm the effective Android native setup after installing `expo-system-ui`: this repo includes an `android/` directory, so inspect whether Expo config changes alone are applied or native project configuration needs updating, then rebuild the test binary. The actual native behavior still needs device proof. [VERIFIED: local repository; CITED: https://docs.expo.dev/versions/v57.0.0/sdk/system-ui/]
2. **RESOLVED for planning — Plans 01, 02, 04, and 10:** Implement title focus for level/language panels and paywall, then verify target and timing on device. The API exists; correct behavior depends on mounted host refs and navigation timing. [CITED: https://reactnative.dev/docs/accessibilityinfo]
3. **RESOLVED for planning — Plan 10:** Establish a device evidence record for the final TalkBack/appearance/font-scale sweep. Hardware behavior is not proven by this research pass. [VERIFIED: Phase 8 roadmap]

## Sources

- Local: `.planning/ROADMAP.md`, `.planning/REQUIREMENTS.md`, `.planning/research/PITFALLS.md`, `08-CONTEXT.md`, `ealch-v2/AGENTS.md`, and the app files cited above.
- Official: https://docs.expo.dev/versions/v57.0.0/ ; https://docs.expo.dev/versions/v57.0.0/sdk/system-ui/ ; https://docs.expo.dev/develop/user-interface/color-themes/ ; https://reactnative.dev/docs/accessibility ; https://reactnative.dev/docs/accessibilityinfo ; https://reactnative.dev/docs/appearance ; https://reactnative.dev/docs/scrollview .
