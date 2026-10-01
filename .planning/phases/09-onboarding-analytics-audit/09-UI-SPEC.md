---
phase: 9
slug: onboarding-analytics-audit
status: approved
shadcn_initialized: false
preset: none
created: 2026-09-29
reviewed_at: 2026-09-29
---

# Phase 9 — UI Design Contract

> Focused contract for onboarding and placement recovery states. The existing Ealch visual language remains the source of truth. Analytics instrumentation has no new user-facing screen.

## Design System

| Property | Value |
|----------|-------|
| Tool | Existing Ealch Expo / React Native theme and UI primitives; no shadcn |
| Preset | Not applicable to this native app |
| Component library | `src/components/ui.tsx` (`Button`, `Press`, `Card`, `Toggle`, `ProgressBar`, `FocusHeader`), `src/components/Type.tsx` (`TX`), `TrailCard`, existing input and confirmation patterns |
| Icon library | Local `src/components/Icon.tsx` backed by `react-native-svg` |
| Font | Instrument Sans for interface text; Instrument Serif for the existing onboarding and placement display text |
| Color source | `src/theme/palette.ts` and `useTheme`; support both resolved light and dark palettes and the learner's selected accent |
| Localization | Add French and English strings in `src/i18n/strings.ts`; use `useT` at the surface |

The shadcn initialization gate does not apply: Ealch is an Expo native app with a manual design system. Introduce no component registry or new visual system for this audit. Sources: `09-CONTEXT.md`, `08-UI-SPEC.md`, `ui.tsx`, `palette.ts`, `Type.tsx`.

## Screen and Interaction Hierarchy

| Surface or state | Focal point | Contract |
|------------------|-------------|----------|
| Onboarding account step | Account heading, then email and password fields | Use the existing screen, progress header, scroll area, and field styles. Label the primary action “Create account.” On network failure, keep both fields intact, place actionable error text beside the form, offer “Retry account creation” and the quiet “Continue without an account” route. A pending request must not leave the screen permanently disabled. |
| Reminders step | Reminder choice and currently selected time | Keep existing time chips, toggles, and one accent-filled “Enable reminders” button. Add a separate quiet “Continue without reminders” action below it. The quiet action advances without requesting permission. If the daily reminder toggle is off, do not present an action that implies enabling it; make the continue path visually primary for that state. |
| Optional microphone check | Phrase to read, then mic action | Keep the phrase card, waveform, and record control. For no speech or a transient error, show “Try microphone again” and “Continue without mic check.” For denied permission, explain how to enable the microphone in phone settings and retain the skip action. Skipping never blocks the result screen. |
| Wizard resume | Current unfinished step | Reopen directly at the last unfinished step with earlier choices shown. Preserve the familiar step label and progress bar; do not replay Welcome or add a resume modal. Return focus to the step heading, then its controls. |
| Den placement offer | Trail start remains the primary visual action | Keep the existing quiet `TrailCard` appearance. The card opens the check; a specifically labeled “Skip quick check” dismisses it. Dismissing must not obscure or delay the trail start marker. |
| Placement question | Current French word and options | Keep the current progress bar, word/audio card, answer rows, and Continue action. After process death, reopening the check restores the same attempt, chosen answers, and the next unanswered question. Show one low-emphasis “Quick check resumed” status line if useful; do not reset progress or present a blocking modal. |
| Placement checkpoint outdated (added 2026-09-30) | Current question | A saved attempt that names an item an update removed is discarded and a fresh check is drawn, without the unavailable state. No new copy. |
| Placement content unavailable | Problem and recovery actions | Replace the current sole back action with an actionable empty/error state: “Retry quick check” as the main recovery, “Continue without quick check” as the quiet route to the Den. The learner never sees an empty question area or a disabled Continue control. |
| Explicit exit during placement | Clear consequence before leaving | Intercept header Close and back navigation while a result is unfinished. Confirm “End this quick check?” with “Keep checking” and “End quick check.” Confirmed exit marks the attempt abandoned; an app background or process kill retains the attempt for resume and does not show this confirmation. |
| Placement result | Estimated level and start action | Preserve the existing large level, score, starting lesson, contextual Première offer, “Start here,” and retake layout. Retake starts a new attempt without changing the recorded first funnel outcome. |

The account, reminder, microphone, and placement recovery actions stay inside their current screens. Avoid new full-screen routes, popups for inline errors, extra analytics dashboards, or a redesigned onboarding sequence. On smaller screens and larger OS text, the existing scroll areas must reveal every action without fixed-height clipping. New interactive targets are at least 44 dp; use the existing 54 dp `Button` geometry where possible.

### State transitions

| From | Action | Next visible state |
|------|--------|--------------------|
| Account signup failure | Retry account creation | Same step, fields preserved, pending state shown until outcome |
| Account signup failure | Continue without an account | Next wizard step as guest |
| Reminders | Continue without reminders | Next wizard step, no permission request |
| Microphone failure | Continue without mic check | Next wizard step with no mic gate |
| Placement no questions | Retry quick check | Re-attempt question load in place; retain recovery actions if it fails again |
| Placement no questions | Continue without quick check | Den trail; failure remains distinct from voluntary offer skip |
| Placement in progress | App background or process death | Same attempt resumes at next unanswered question when reopened |
| Placement in progress | Confirm End quick check | Den trail; current attempt marked abandoned |

## Spacing Scale

New spacing uses the existing four-point rhythm. Existing production geometry in unchanged parts of onboarding and placement is inherited rather than restyled.

| Token | Value | New-work usage |
|-------|-------|----------------|
| xs | 4 px | Inline icon and text gap |
| sm | 8 px | Error icon/text or compact choice gap |
| md | 16 px | Gap between related actions and card padding |
| lg | 24 px | Error and recovery group separation; section padding |
| xl | 32 px | Larger section break when space permits |
| 2xl | 48 px | Major screen section break |
| 3xl | 64 px | Page-level spacing only where scrolling leaves enough room |

**Exceptions:** Existing screen padding, card radii, and placement word/audio geometry are inherited. Minimum touch target size (44 dp) and existing `Button` minimum height (54 dp) are functional dimensions, not spacing tokens. Use `minHeight`, wrapping, safe-area padding, and scrolling rather than fixed heights on new text-bearing groups.

## Typography

New Phase 9 labels use this four-role subset of the established `TX` ramp. This does not replace the existing larger onboarding/result display sizes or the full `type.logic.ts` scale. Only Instrument Sans regular (400) and semibold (600) are used for new interface copy; existing Instrument Serif display remains regular (400).

| Role for new copy | Base size | Weight | Line height | Usage |
|-------------------|-----------|--------|-------------|-------|
| Meta (`meta`) | 12 px | Regular | 1.35 | Resume status, step progress |
| Body (`body`) | 15 px | Regular | 1.5 | Error explanation and recovery guidance |
| Section (`titleLg`) | 21 px | Semibold | 1.25 | New unavailable-state heading or confirmation title |
| Existing display (`display`) | 34 px | Serif regular | 1.1 | Existing onboarding hero titles; do not create a new hero style |

Action labels use the existing `Button` semibold body styling. Keep `TX` font scaling and line-height computation; no new copy uses `numberOfLines` truncation. Maintain readable wrapping at OS text scale 1.3 and 1.5 on both platforms.

## Color

The 60/30/10 allocation describes hierarchy in newly touched UI, not a repaint of the existing screens. Resolve every value through `useTheme` so Automatic, explicit Dark/Light, and the selected accent work together.

| Role | Dark | Light | Usage |
|------|------|-------|-------|
| Dominant (60%) | `t.bg` = `#0B0C0E` | `t.bg` = `#F5F3EE` | Screen background and open scroll space |
| Secondary (30%) | `t.card` = `#101216`; `t.input` = `#111318` | `t.card` / `t.input` = `#FFFFFF` | Existing cards, fields, question and error containers |
| Accent (10%) | Selected `t.acc`; default Riviera `#2FD6C1` | Selected `t.acc` with `t.accInk` on filled actions and `t.accTx` for accent text | One primary action per state, selected answer, progress bar, active trail marker |
| Destructive / error | `t.danger` = `#FF6B5C` | `t.danger` = `#C2412F` | Error text and confirmed “End quick check” action only |

Accent is reserved for the primary recovery or progression action, selected option, progress bar, and the existing active trail marker. Quiet skip and guest routes use text or outline treatment, not another accent-filled button. Use `t.txPrimary`, `t.txSecondary`, `t.txMuted`, `t.accTx`, and `t.line()` for text and borders; do not use faint decorative colors for explanatory copy. An error icon or color never carries meaning without text.

## Copywriting Contract

Add these localized strings or map to an existing equivalent only when its visible wording says the same action. The selected app language controls interface wording; authored French question words remain French.

| Element | French | English |
|---------|--------|---------|
| Account primary CTA | Créer mon compte | Create account |
| Account error | Impossible de créer le compte. Vérifiez votre connexion, puis réessayez, ou continuez sans compte. | Could not create your account. Check your connection and try again, or continue without an account. |
| Account retry | Réessayer la création du compte | Retry account creation |
| Guest route | Continuer sans compte | Continue without an account |
| Reminder primary CTA | Activer les rappels | Enable reminders |
| Reminder skip | Continuer sans rappels | Continue without reminders |
| Microphone transient error | Le micro n’a pas saisi votre voix. Réessayez ou continuez sans test micro. | The microphone did not catch your voice. Try again or continue without the mic check. |
| Microphone denied | L’accès au micro est refusé. Activez-le dans les réglages du téléphone, ou continuez sans test micro. | Microphone access is denied. Enable it in phone settings, or continue without the mic check. |
| Microphone unavailable (existing `micUnavail`, added to contract 2026-09-30) | Existing app string | Existing app string; keep the retry and skip actions below it |
| Microphone retry | Réessayer le micro | Try microphone again |
| Microphone skip | Continuer sans test micro | Continue without mic check |
| Placement offer skip | Passer la vérification | Skip quick check |
| Placement unavailable heading | Vérification indisponible | Quick check unavailable |
| Placement unavailable body | Les questions ne sont pas disponibles pour le moment. Réessayez ou continuez votre parcours sans vérification. | Questions are unavailable right now. Try again or continue learning without the quick check. |
| Placement retry | Réessayer la vérification | Retry quick check |
| Placement continue route | Continuer sans vérification | Continue without quick check |
| Placement resumed status | Vérification reprise | Quick check resumed |
| Exit confirmation title | Terminer cette vérification ? | End this quick check? |
| Exit confirmation body | Votre résultat ne sera pas calculé. Vous pourrez recommencer plus tard. | Your result will not be calculated. You can start a new check later. |
| Keep current attempt | Poursuivre la vérification | Keep checking |
| Confirm exit | Terminer la vérification | End quick check |

**Empty state:** “Quick check unavailable” is the empty question-bank heading. The body names the missing questions and offers Retry and Continue; do not use a bare “No data” message. **Destructive action:** Only the explicit “End quick check” action discards an unfinished result, and it requires the confirmation above. Reminder, microphone, and placement-offer skips need no confirmation.

## Accessibility and Motion

- Follow Phase 8’s one-focus-stop-per-action rule. Error/status text precedes Retry and Continue in screen-reader order; each button has its visible action label. The explicit-exit confirmation traps focus until dismissed and returns focus to the placement header or question when “Keep checking” is chosen.
- Announce an inline error when it appears without moving focus away from a text field during entry. On restored onboarding and placement screens, focus the current heading or question before the actions. Do not force a permission prompt on a skip route.
- Preserve existing press feedback and progress animation. Do not add celebratory or blocking transitions to failures, skips, or resume. Respect the app’s reduced-motion behavior where existing primitives provide it.

## Registry Safety

| Registry | Blocks used | Safety gate |
|----------|-------------|-------------|
| None | None | Not applicable — existing Expo native components only; no shadcn or third-party registry block |

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS — every new action has a specific label; empty, error, and confirmation states include recovery text.
- [x] Dimension 2 Visuals: PASS — each touched state has a focal point, action hierarchy, and screen-reader order.
- [x] Dimension 3 Color: PASS — existing theme tokens and 60/30/10 allocation; accent and destructive uses are named.
- [x] Dimension 4 Typography: PASS — four new-copy sizes, two weights, and explicit line heights; existing display styles are inherited.
- [x] Dimension 5 Spacing: PASS — new spacing uses the seven-value scale; inherited geometry and functional touch sizes are scoped separately.
- [x] Dimension 6 Registry Safety: PASS — manual native design system with no registry blocks.

**Independent check 2026-09-30:** a separate UI checker found no blocker and flagged copywriting for two uncovered states, now added above. Its code mismatches were fixed in Plan 08 Task 4: danger variant on "End quick check", 44 dp guest route, announced signup error, focused unavailable heading on the 4-point scale. Still open as minor: the microphone error copy uses `bodySm` rather than `body`.

**Approval:** approved 2026-09-29 after applying the six GSD UI checker dimensions to the written contract. The dedicated `gsd-ui-researcher` and `gsd-ui-checker` agent types are not exposed in this Codex runtime, so research and review were performed locally, as for Phase 8.
