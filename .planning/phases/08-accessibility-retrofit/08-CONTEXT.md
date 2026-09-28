# Phase 8: Accessibility Retrofit - Context

**Gathered:** 2026-09-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Make interactive controls correctly operable and announced by screen readers, add working OS-following Automatic appearance, and prevent flashcard text from clipping at larger OS font scales. Cover the `Press` call sites and remaining custom/icon controls by actual control type, starting with home, the new Phase 07.1 trail and lesson flow, Settings, and paywall. Verify touched screens with a real-device TalkBack sweep, including panels, overlays, focus order, and stateful controls. The four requirements are A11Y-01 through A11Y-04; this phase does not expand into the separate UDL feature backlog.

Phase 07.1 is the hard dependency because it replaced the screens this phase audits. Its 11 plans are executed. `07.1-VERIFICATION.md` reports 8/8 success criteria met and says the residual device spot checks do not block Phase 8. Plan against the current `den.tsx`, `act.tsx`, `levels.tsx`, and lesson surfaces, not deleted `lessonoverview.tsx` or `missions.tsx`.

</domain>

<decisions>
## Implementation Decisions

### Screen reader announcements and focus

- **D-01:** Use one screen-reader focus stop per action. A trail act row announces its title, relevant progress, and lock status together. A separate action such as Fiche gets its own stop; decorative text and icons do not create redundant stops.
- **D-02:** Interface words in accessible labels, such as “locked” and “continue,” follow the app's selected interface language. Keep authored French lesson content as authored rather than translating it merely to build a label.
- **D-03:** When a level panel, language panel, or paywall opens, focus begins at its title, then proceeds through the choices and actions in reading order. Verify this behavior with TalkBack, including whether overlay controls can be reached.
- **D-04:** A locked act row announces both that it is locked and that activating it opens the Première paywall. Do not announce it as though activation starts the act.

### Automatic appearance

- **D-05:** Fresh installs default to Automatic, following the device's light/dark setting. The current app offers only explicit Dark and Light; Automatic is a new choice to add within A11Y-03.
- **D-06:** Preserve an existing install's saved explicit Dark or Light choice across the update. Do not migrate those users to Automatic.
- **D-07:** While Automatic is selected, a device appearance change updates the app immediately, including while Ealch is open. Explicit Dark or Light remain explicit choices.
- **D-08:** Settings displays the resolved appearance alongside Automatic, for example “Automatic · Dark.” Localize this copy in the current app language.
- **D-09:** Automatic applies coherently across the whole app, including status and navigation bars, sheets, and paywall surfaces.

### Flashcards at larger OS text sizes

- **D-10:** Preserve the learner's larger text. When content exceeds the available height, scroll the flashcard text rather than shrinking text or truncating it.
- **D-11:** Each face begins at the top after a flip, even if the previous face had been scrolled.
- **D-12:** Keep deck progress and the Flip/answer controls visible while the card's text scrolls. Scrolling belongs within the card face rather than moving the entire screen.

### Claude's Discretion

- Exact role/label wording beyond the rules above, layout mechanics for the scrollable face, and implementation details for theme state and OS observation belong to research and planning. The roadmap's per-control semantic role and real-device verification requirements are fixed.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Phase scope and safety

- `.planning/ROADMAP.md` § Phase 8 — goal, dependency, four success criteria, and the explicit warning against a blanket button role.
- `.planning/REQUIREMENTS.md` § Accessibility — A11Y-01 through A11Y-04. Read with the more specific roadmap success criteria and pitfall note; the requirement's “by default” wording does not authorize a blanket button role.
- `.planning/research/PITFALLS.md` § Pitfall 3 — semantic roles and states by control type, curated labels, TalkBack device sweep, and absolute-positioned overlays.
- `.planning/phases/07.1-concept-c-spine-rewrite-trail-act-screen-language-control/07.1-CONTEXT.md` — the approved trail, panel, act, and paywall behavior this phase must preserve.
- `.planning/phases/07.1-concept-c-spine-rewrite-trail-act-screen-language-control/07.1-VERIFICATION.md` — current replacement surfaces and residual device spot checks; the report is present locally but was untracked when this discussion began.

### Existing app surfaces

- `ealch-v2/src/components/ui.tsx` — shared `Press` implementation; accepts native `PressableProps` but currently assigns no role itself.
- `ealch-v2/app/den.tsx`, `ealch-v2/app/act.tsx`, `ealch-v2/app/levels.tsx`, `ealch-v2/app/lesson.tsx` — current high-traffic trail and lesson flow.
- `ealch-v2/app/settings.tsx`, `ealch-v2/src/store/useStore.ts`, `ealch-v2/src/theme/useTheme.ts`, `ealch-v2/src/theme/palette.ts`, `ealch-v2/src/i18n/strings.ts` — current two-choice appearance UI, persisted preference, theme derivation, palette, and localized copy.
- `ealch-v2/app/flashcards.tsx`, `ealch-v2/src/components/Type.tsx` — card-face layout and text scaling.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets

- `Press` in `src/components/ui.tsx` wraps React Native `Pressable`, so per-call-site role, state, and label props can be threaded through it without inventing a new control.
- `TX` in `src/components/Type.tsx` centralizes text rendering and font-scale behavior. Preserve its existing role-based size limits and line-height behavior while fixing card clipping.
- `buildTheme()` and `useTheme()` already derive the active palette from store state; Automatic needs a resolved light/dark value without conflating the saved preference with the current OS result.

### Established Patterns

- Settings strings are localized in `src/i18n/strings.ts` for French and English. Newly spoken UI words and Automatic's resolved label follow that pattern.
- Appearance preferences live in the persisted Zustand `useStore.ts` state; an update must preserve saved explicit modes and handle a fresh-install default separately.
- Phase 07.1 introduced panels, a Levels screen, trail rows, and a paywall gate; roles, focus, and overlay reachability must be audited against these current surfaces.

### Integration Points

- `src/components/ui.tsx` and its call sites are the shared-control audit path. Custom/icon-only controls outside it also need curated labels.
- `app/settings.tsx` currently maps only `dark` and `light`; `src/theme/palette.ts` defines `Mode` as those two values and `useTheme.ts` builds from the stored mode. Research should design the third preference and resolved mode safely.
- `app/flashcards.tsx` renders two absolutely positioned, clipped card faces. Plan the scrollable text region and anchored controls within that structure, then verify on device at increased OS font scale.

</code_context>

<specifics>
## Specific Ideas

- TalkBack should make a locked row's outcome clear before activation: locked content opens the Première paywall.
- Automatic's Settings label should expose the effective mode, for example “Automatic · Dark.”
- A flip starts the new face at the top while deck progress and actions stay visible.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 8's roadmap scope. The broader UDL work described under `ealch-admin/UDL/` remains a separate backlog and was not folded into this phase.

</deferred>

---

*Phase: 08-accessibility-retrofit*
*Context gathered: 2026-09-27*
