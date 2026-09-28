---
phase: 8
slug: accessibility-retrofit
status: approved
shadcn_initialized: false
preset: none
created: 2026-09-27
---

# Phase 8 — UI Design Contract

> Accessibility retrofit contract for the existing React Native app. Preserve Ealch's present visual language while making actions, appearance, and flashcard text behave as agreed in `08-CONTEXT.md`. Checked against the six GSD UI review dimensions.

## Design System

| Property | Value |
|----------|-------|
| Tool | Existing Ealch React Native components and theme tokens; no shadcn |
| Preset | Not applicable — native Expo app |
| Component library | `src/components/ui.tsx` (`Press`, `Button`, `Toggle`, `Card`), `PanelRow`, `LevelPanel`, `LanguagePanel`, `TX` |
| Icon library | Local `src/components/Icon.tsx`, rendered with `react-native-svg` |
| Font | Instrument Sans for interface copy; Instrument Serif for established display/card text; platform font for notation/IPA |
| Theme | `src/theme/palette.ts` binary palettes, existing selectable accent; resolve saved appearance preference before building palette |

The phase adds no new screen type or component registry. Existing layout geometry and type roles are retained unless they prevent text or controls from being reached. Sources: `08-CONTEXT.md`, `08-RESEARCH.md`, `src/theme/palette.ts`, `src/components/type.logic.ts`, `src/theme/fonts.ts`.

## Screen and Interaction Hierarchy

| Surface | Visual focal point | Accessible reading/action order |
|---------|--------------------|---------------------------------|
| Home/Den trail | Current level and next act | Heading and progress, then each actionable trail row. A row is one stop containing title, progress, lock, and action outcome. Separate Fiche action is its own stop. |
| Act and lesson | Current lesson content | Current title/content, then each explicit navigation, language, audio, answer, and help action. Decorative icons do not add stops. |
| Level and language panels | Panel title | Move focus to title on open, then choices in visual order; selected state is spoken. Backdrop content is not reachable until close. Return focus to opener on close where the platform permits. |
| Settings | Section title and current choice | Appearance choices occur in Automatic, Dark, Light order; each communicates selection. Automatic also reads its current resolved appearance. Accent swatches have curated names and selected state. |
| Paywall | Existing Première title and offer | Start focus at title, then benefits, plan choices, purchase/restore actions, and legal links. A locked-row activation reaches this title. |
| Flashcards | Current face's question or answer | Deck progress, visible face text, independent audio action, Flip action, then answer actions. Only the visible face is exposed to the screen reader. |

One focus stop represents one action. Do not make the whole flashcard an accessible Flip button while keeping audio nested within it; separate the interactive targets. A locked trail row remains enabled because activation opens the Première paywall. Preserve the existing sheet shape and card face design while changing their focus and scrolling behavior. Sources: D-01 through D-04, D-10 through D-12; `TrailRow.tsx`, `flashcards.tsx`, `LevelPanel.tsx`, `LanguagePanel.tsx`.

## Spacing Scale

Use the established screen layouts. For any new layout or spacing introduced by this retrofit, use this scale:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4 px | Inline icon/text gap |
| sm | 8 px | Compact control gap |
| md | 16 px | Card padding and control separation |
| lg | 24 px | Section padding |
| xl | 32 px | Major vertical gap |
| 2xl | 48 px | Screen section break |
| 3xl | 64 px | Page-level break where space permits |

**Exceptions:** Existing production component geometry is inherited, including current panel, trail row, paywall, and flashcard spacing. Do not change unrelated spacing to satisfy this retrofit's new-work scale. Interactive regions must remain usable as text grows; use minimum height, content growth, and scroll instead of fixed clipping.

## Typography

New labels or revised UI text use existing `TX` roles and the existing scaling rules. This four-role subset is a constraint for **new Phase 8 copy**, not a replacement for `type.logic.ts`'s wider production ramp.

| Role | Base size | Weight | Line height | Usage |
|------|-----------|--------|-------------|-------|
| Supporting label (`meta`) | 12 px | Instrument Sans regular | 1.35 | Resolved Automatic status, progress metadata |
| Body (`body`) | 15 px | Instrument Sans regular | 1.5 | Choice descriptions, action explanation |
| Heading (`title`) | 18 px | Instrument Sans semibold | 1.3 | New section or panel heading if needed |
| Display (`display`) | 34 px | Instrument Serif regular | 1.1 | Existing card/offer hero; do not add a new display style |

Existing larger/smaller role variants, semibold action labels, and the `TX` font-scale caps remain as implemented. They are not new type styles for this phase. Flashcard text must stay readable at the user's chosen OS scale; when it exceeds the face, scroll its text region. Never solve overflow by reducing the user's requested scale or truncating the content. Sources: `src/components/type.logic.ts`, `src/components/Type.tsx`, D-10.

## Color

Preserve Ealch's existing palette and selectable accents. The 60/30/10 allocation is a hierarchy for newly touched UI, not a direction to repaint existing screens.

| Role | Dark | Light | Usage |
|------|------|-------|-------|
| Dominant (60%) | `#0B0C0E` | `#F5F3EE` | Screen background |
| Secondary (30%) | `#101216` / `#14171C` | `#FFFFFF` / `#FBF9F4` | Cards, row and sheet surfaces |
| Accent (10%) | Current selected accent; default Riviera `#2FD6C1` | Current selected accent with `accTx` for readable text | Selected choice, primary action, active trail marker, focus emphasis |
| Destructive | `#FF6B5C` | `#C2412F` | Existing destructive actions only |

Accent is reserved for selected appearance/plan states, existing primary CTA, active trail marker, and keyboard/focus emphasis where appropriate. It is not a blanket color for all interactive controls. Use existing `t.txPrimary`, `t.txSecondary`, `t.txMuted`, `t.txSubtle`, `t.accTx`, and `t.line()` roles for contrast. Automatic selects the appropriate complete palette and system-bar contrast; sheets and paywall follow the same resolved appearance. Sources: `src/theme/palette.ts`, D-07 through D-09.

## Appearance States

| Saved choice | Display in Settings | Effective palette | Runtime behavior |
|--------------|---------------------|-------------------|------------------|
| Automatic (fresh default) | Localized “Automatic · Dark” or “Automatic · Light” | Current OS mode | Switch as OS mode changes while open; include status/navigation bars, panels, paywall |
| Dark (existing saved choice preserved) | Localized Dark | Dark | Remain dark regardless of OS change |
| Light (existing saved choice preserved) | Localized Light | Light | Remain light regardless of OS change |

Show Automatic, Dark, and Light as three peer choices with one selected state. Add localized French and English copy through `src/i18n/strings.ts`; speak interface words in the selected app language. Keep authored French lesson text intact. Source: D-02, D-05 through D-09.

## Flashcard Layout States

| State | Contract |
|-------|----------|
| Front visible | Front content alone is exposed and scrollable within the face. Audio is a separate action where present. Progress, Flip, and answer controls stay in place. |
| Back visible | Back content alone is exposed and scrollable within the face. On flip, back text starts at top, even after scrolling the front. |
| Next card or reverse direction | New visible face starts at top; no previous scroll offset or hidden-face controls remain reachable. |
| Larger OS text | Text can wrap and scroll inside the face. Face content and controls remain reachable without shrinking or clipping text. |

## Copywriting Contract

| Element | French | English | Scope |
|---------|--------|---------|-------|
| Primary Phase 8 action | “Retourner la carte” | “Flip card” | Existing specific accessible Flip label; keep action independent from audio |
| Audio action | “Écouter la prononciation” | “Play pronunciation” | Existing specific accessible label; separate focus stop |
| Icon-only navigation | “Retour à l'apprentissage”, “Fermer le panneau”, “Ouvrir les paramètres” as appropriate to the actual icon action | “Return to learning”, “Close panel”, “Open settings” as appropriate to the actual icon action | Supply a curated action label; the icon glyph itself is decorative |
| Automatic choice | “Automatique · Sombre/Clair” | “Automatic · Dark/Light” | New Settings copy; resolved word changes with OS |
| Locked act outcome | Localized title/progress + “verrouillé · ouvre Ealch Première” | Localized interface words around authored title/progress + “locked · opens Ealch Première” | New accessible description; exact grammar can follow `strings.ts` conventions |
| Empty state heading | “Rien à réviser ici” | “Nothing to review here” | Preserve existing flashcard empty state |
| Empty state body | “Ce thème n'a pas encore de cartes à ce niveau. Essayez un autre thème ou revenez plus tard.” | “This theme has no cards at this level yet. Try another theme, or check back later.” | Preserve existing next step |
| Error/unavailable state | “Les achats ne sont pas disponibles dans cette version. Rien ne vous a été facturé. Revenez au parcours gratuit.” | “Purchases are not available in this build. Nothing was charged. Return to the free path.” | Retain the current paywall explanation, add a recovery path, and keep the back action reachable |
| Destructive confirmation | No new destructive action in Phase 8 | No new destructive action in Phase 8 | Existing destructive flows are outside this retrofit |

Do not concatenate decorative children to fabricate accessible names. Plan/purchase button visible wording stays governed by the existing paywall; Phase 8 supplies correct role, selected state, and focused title. Sources: `src/i18n/strings.ts`, `app/paywall.tsx`, `app/flashcards.tsx`, D-01 through D-04.

## Registry Safety

| Registry | Blocks used | Safety gate |
|----------|-------------|-------------|
| None | None | Not applicable — this is an Expo native app using its existing manual design system; no shadcn or third-party registry block is introduced |

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS — specific Flip and audio labels, localized Automatic/lock wording, actionable empty and unavailable states.
- [x] Dimension 2 Visuals: PASS — screen focal points, traversal order, icon label fallbacks, and flashcard/panel hierarchy are declared.
- [x] Dimension 3 Color: PASS — existing dark/light palettes and 60/30/10 allocation with named accent uses.
- [x] Dimension 4 Typography: PASS — four new-copy roles, two weights, line heights; existing type system is preserved.
- [x] Dimension 5 Spacing: PASS — new spacing uses the seven-value scale; inherited geometry is explicitly scoped.
- [x] Dimension 6 Registry Safety: PASS — manual native design system; no registry blocks or third-party additions.

**Approval:** approved 2026-09-27 after applying the GSD UI checker rubric to the written contract. The dedicated `gsd-ui-checker` agent type is not exposed in this Codex runtime, so this is a local review, not a separate agent review.
