---
phase: 10
slug: feedback-rating-flow
status: approved
reviewed_at: 2026-10-01
shadcn_initialized: false
preset: none
created: 2026-10-01
---

# Phase 10 - UI Design Contract

> Visual and interaction contract for the report-a-problem sheet, its entry points, the Profile row, and the Le Rapport fixes. The existing Ealch visual language is the source of truth. Decisions D-01..D-33 in `10-CONTEXT.md` are locked and are not restated except where they set a visual rule. Items marked **(researcher default)** were not covered by CONTEXT.md and were chosen to match existing screens; the user can override them.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none (Expo / React Native, manual design system; shadcn gate not applicable) |
| Preset | not applicable |
| Component library | `src/components/ui.tsx` (`Press`, `Button`, `Card`, `Toggle`, `ProgressBar`, `FocusHeader`), `src/components/Type.tsx` (`TX`), `src/components/Icon.tsx` |
| Icon library | local `Icon.tsx` on `react-native-svg`. Phase 10 adds ONE glyph: `flag` (24 viewBox, stroke, e.g. `['M5 21V4', 'M5 4h11l-2 4 2 4H5']`). All other icons reuse existing names: `chevronRight`, `chevronDown`, `chevronUp`, `check`, `star`, `wifi`, `x`, `arrowRight`, `book`, `user` |
| Font | Instrument Sans (interface), Instrument Serif (display headings only, as on Le Rapport) |
| Color source | `useTheme()` tokens only (`t.bg`, `t.sheet`, `t.card`, `t.input`, `t.acc`, `t.accInk`, `t.accTx`, `t.danger`, `t.dangerA`, `t.txPrimary`, `t.txSecondary`, `t.txMuted`, `t.txSubtle`, `t.txNonText`, `t.line(pct)`, `t.accA(pct)`) |
| Localization | `useT()` and `src/i18n/strings.ts`. French first, English toggle. Both language blocks get every new key |
| Registry | none |

Sources: `10-CONTEXT.md`, `10-PRE-DISCUSSION-AUDIT.md`, `09-UI-SPEC.md`, `src/components/type.logic.ts`, `src/theme/palette.ts`, `app/_layout.tsx` (formSheet), `app/settings.tsx` (row pattern), `app/feedback.tsx`.

---

## Negative Contract: the native review request has NO app UI

This is a hard rule for FEEDBACK-02 (D-01..D-11), recorded here so the planner and auditor can check for it.

- The review request is a bare call to `expo-store-review` from a pure-logic decision. **No Ealch screen, sheet, modal, banner, toast, emoji row, star row, or text appears before, around, or after it.** Nothing asks "Enjoying Ealch?", "Would you rate us?", or any sentiment or predictive question (Google Play In-App Review guideline; Apple 5.6.1).
- No pre-prompt, no "Not now" card, no custom stars, no thank-you after it (the app cannot know whether the learner rated).
- It is not a PushBanner kind and not a Den card (D-24, S3 in the audit). Do not add a banner kind.
- The only rating UI in the app is the Settings "Rate Ealch" row, which opens the **store listing URL** (D-11). It never calls the review API, and it is never shown as an alternative to, or follow-up of, "Report a problem".
- The report sheet and the review request never appear in the same flow. The report sheet never contains a rating prompt, a link to the store, or the words "rate" or "review".
- The request fires only after the learner has returned to the trail (D-03); it must not delay or cover the trail, celebration, or score.
- The only visible trace is the OS-owned sheet. The `review_requested` analytics event is invisible.

---

## Surfaces

| # | Surface | Route / location | New or changed |
|---|---------|------------------|----------------|
| S1 | Report-a-problem sheet | `app/report-problem.tsx`, `presentation: 'formSheet'` | New |
| S2 | Settings rows "Report a problem" and "Rate Ealch" | `app/settings.tsx`, About section | Changed |
| S3 | Crash fallback report action | `src/components/ErrorScreen.tsx` | Changed |
| S4 | STT no-speech / mic failure action | existing STT failure UI | Changed |
| S5 | Exam grading failure / ungraded action | exam report screen | Changed |
| S6 | Content flag icon | `FocusHeader` `extra` slot on lesson mission and quiz question headers | Changed |
| S7 | Profile "Your report" row | `app/profile.tsx` | Changed |
| S8 | Le Rapport fixes | `app/report.tsx` (renamed from `app/feedback.tsx`) | Changed |

---

## S1. Report-a-problem sheet

### Presentation (D-25, formSheet Android contract)

Register in `app/_layout.tsx` exactly like `fiche` and `preroll`:

```
name="report-problem"
presentation: 'formSheet'
sheetAllowedDetents: [0.92]      // single detent, top <= 0.92, never fitToContents
sheetInitialDetentIndex: 0
sheetCornerRadius: 26
sheetGrabberVisible: true
gestureDirection: 'vertical'
contentStyle: { backgroundColor: t.sheet }   // mandatory, otherwise the Android sheet paints transparent
```

Content is a `ScrollView` with `keyboardShouldPersistTaps="handled"` and `automaticallyAdjustKeyboardInsets`. The **Send button lives in a pinned footer** below the scroll area (not inside it), wrapped in `KeyboardAvoidingView` (`behavior="padding"` on iOS, `behavior="height"` on Android) so the on-screen keyboard can never cover Send. Footer bottom padding is `insets.bottom + 16`. The category list and counter must remain reachable by scrolling at font scale 1.3 and 1.5.

The sheet has no `FocusHeader`. Its header is a row: title (left) and a 44x44 close `Press` (`Icon x`, `accessibilityRole="button"`, label "Close") on the right. Closing with unsaved text (more than 0 characters or a category chosen by the learner, not pre-filled) shows no confirmation; the draft is simply discarded (researcher default: a draft this small is not worth a dialog).

### Focal points

- **Form (idle, sending, 4xx):** the anchor is the pinned Send button (the only accent-filled control, always visible). The second focal point is the selected category row (accent border and check). Nothing else on the sheet uses accent.
- **Sent and saved states:** the focal point is the circle with its check (or wifi) glyph plus the heading directly beneath it; the Close button is the only action.

### Layout, top to bottom

| Order | Element | Contract |
|-------|---------|----------|
| 1 | Title row | `TX font="semi" role="titleLg"`: "Report a problem". Close button on the right. Screen-reader heading (`accessibilityRole="header"`) |
| 2 | Intro line | `TX role="body" color={t.txMuted}`: one sentence, see copy |
| 3 | Category group | Label `TX font="semi" role="meta" ls={2.4} color={t.txSubtle}`: "WHAT WENT WRONG" (required marker is spoken, see a11y). Then 6 rows, one per D-14 category, stacked, `gap: 8`. Container has `accessibilityRole="radiogroup"` |
| 4 | Details field | Label "Details (optional)". Multiline `TextInput`, min height 120, `maxLength={1000}`, `t.input` background, `t.line(10)` 1px border, radius 16, padding 16, `TX` body metrics (15 px). Counter below right-aligned: `{n}/1000`, `TX role="meta" color={t.txMuted}`; turns `t.danger` (with the text still readable) at 950 or more |
| 5 | "What's included" | Single collapsible row, see below |
| 6 | Contact checkbox | Signed-in learners only. Hidden for guests (no disabled placeholder) |
| 7 | Pinned footer | Primary `Button` "Send report" (54 px, accent fill). Status line above it when a state needs one |

### Category row

- Row: `minHeight: 52`, radius 16, `borderWidth: 1`, padding `12 16`, `flexDirection: 'row'`, `gap: 12`, `alignItems: 'center'`.
- Unselected: `t.card` background, `t.line(10)` border. Selected: `t.accA(10)` background, `t.acc` border (1.5), `Icon check` 16 px in `t.accTx` on the right. Selection is never signaled by color alone: the check glyph appears on the selected row.
- Left: a 20 px radio circle (`borderWidth 1.5`, `t.line(30)` unselected; filled `t.acc` dot selected).
- Label: `TX font="semi" role="body"`. No `numberOfLines`, no `flex` on the `Text` itself (wrap the label in a `View` with `flex: 1`; the Text inside stays unstyled by flex, per the font-scale tail-clip rule).
- `accessibilityRole="radio"`, `accessibilityState={{ selected }}`, `accessibilityLabel` = the category label.
- Pre-filled category: row is shown selected on open, learner can change it. Pre-fill is not locked.
- No category selected: Send is `disabled` (opacity 0.4) and its `accessibilityState.disabled` is true. A short hint line "Choose what went wrong to send" appears above Send in `TX role="meta" color={t.txMuted}` only while no category is chosen.

### "What's included" (D-19)

- Collapsed: a `Press` row, `minHeight: 44`, `accessibilityRole="button"`, `accessibilityState={{ expanded }}`, label = the one-liner text. Right side `Icon chevronDown` (`chevronUp` when open), 14 px, `t.txNonText`.
- One-liner (collapsed): "What's included: app version, screen, recent errors. Never your answers or recordings."
- Expanded: inside a `t.card` rounded block (radius 16, padding 16, `gap: 8`), a plain list with one `TX role="body" color={t.txSecondary}` per line, bullet via "·" separator character in the string, covering the full D-16 list:
  - App version, update and platform
  - The screen you were on, and the lesson or item number
  - The last 10 error messages from this session
  - Phone model, text size, and light or dark theme
  - Your email, only if you tick "You can contact me"
  - Never included: your answers, what you said, or your recordings
- Expanding scrolls the row into view; focus stays on the toggle row.

### Contact checkbox (D-17)

- Row: `minHeight: 52`, `Press` with `accessibilityRole="checkbox"`, `accessibilityState={{ checked }}`, label "You can contact me". Left: 24 px square (radius 6, `borderWidth 1.5`, `t.line(30)`; checked: `t.acc` fill with `Icon check` in `t.accInk`). Right: label `TX font="semi" role="body"` and below it `TX role="meta" color={t.txMuted}` "We use your account email to reply. Off unless you tick it."
- Default off every time the sheet opens (not remembered).
- Signed-in only. For guests the row is not rendered and the intro line has no mention of contact.
- Use a custom checkbox, not `Toggle` (switch semantics differ from the "checkbox" role the contract requires).

### States

Every state keeps the user's category and text intact until success.

| State | Visual | Announcement | Controls |
|-------|--------|--------------|----------|
| idle | Form as above, Send enabled once a category is chosen | none | all active |
| sending | Send label becomes "Sending..." with a 18 px `ActivityIndicator` (`t.accInk`) left of the label; Send disabled; category rows, text field, checkbox set to `disabled`. Footer stays visible | `accessibilityLiveRegion="polite"`: "Sending" | close stays active. Closing mid-send is allowed; the send continues and the outcome is queued (D-18) |
| sent | Form replaced by a centered confirmation block: 56 px circle `t.accA(14)` with `Icon check` 24 px `t.accTx`, heading `TX font="semi" role="titleLg"` (Instrument Sans semibold; serif is reserved for the inherited Le Rapport display text), body `TX role="body" color={t.txMuted}` | "Report sent. Thank you." | Primary `Button` "Close". Sheet also auto-dismisses after 2500 ms and returns the learner to where they were (D-26); Close dismisses immediately. Auto-dismiss is suspended while a screen reader is active (TalkBack/VoiceOver on) so the message is fully read; the learner uses Close |
| queued-offline | Same confirmation layout as sent but with `Icon wifi` instead of check and the queued copy. Calm, not an error: `t.accA(14)` circle, no danger color | "Saved. It will send when you are back online." | "Close"; auto-dismiss 2500 ms (suspended with screen reader). Queue and retry follow D-18; no further UI is shown at retry time |
| rate-limited (429) | Treated as queued per D-18: shown as queued-offline copy variant "Too many reports right now. We saved it and will send it later." Not an error color | polite live region | "Close" |
| 5xx / network | Same as queued-offline (saved, retried) | polite live region | "Close" |
| 4xx error (not 429) | Form stays open with text and category preserved. Inline error block above Send: `t.dangerA(12)` background, `t.danger` 1px border, radius 12, padding 12, text only (no icon), `TX role="body" color={t.danger}`. Send stays enabled, label "Try again". The report is NOT queued (D-18) | `accessibilityLiveRegion="assertive"` and `accessibilityRole="alert"`; focus is not moved away from the field | "Try again", plus the learner can edit the text |

Error text color (`t.danger`) is always paired with words; no state is conveyed by color alone.

### Pre-fill and context (D-22, D-16)

The route takes params: `category` (one of `audio | grading | content | crash | payment | other`), `screen` (string), `itemId` (string, optional), `lessonId` (string, optional). The pre-filled category is selected and announced on open ("Audio or voice selected"). Screen, item and lesson ids are attached silently and are NOT shown as editable fields; the one-liner covers them. For content flags (S6) the intro line changes to "You are reporting a mistake in this item." (see copy). Item and lesson ids are never displayed.

---

## S2. Settings rows

Placed in the existing **About** section of `app/settings.tsx`, directly above the Licences row and in this order: "Report a problem", "Rate Ealch", then the existing Licences row. Reuse the Licences row geometry exactly: `Press`, `minHeight: 58`, radius 16, `borderWidth: 1`, `t.line(10)`, `t.card`, `t.cardShadow`, `gap: 14`, `paddingHorizontal: 16`, `paddingVertical: 10`, `marginBottom: 24` (use `marginBottom: 8` between the first two rows, matching the category-row gap; the last row keeps 24).

| Row | Icon (18 px, `t.txSecondary`) | Title (`TX font="semi" role="body"`) | Sub (`TX role="meta" color={t.txMuted}`) | Action | a11y |
|-----|------|-------|-----|--------|------|
| Report a problem | `flag` | Report a problem | Something broken or wrong? Tell us. | `router.push({ pathname: '/report-problem', params: { screen: 'settings' } })`, no category pre-fill | `accessibilityRole="button"`, label = title |
| Rate Ealch | `star` | Rate Ealch | Opens the store page. | opens the store listing URL via `Linking.openURL` (never `requestReview`) | `accessibilityRole="link"`, label = "Rate Ealch, opens the store" |

Trailing glyph: `Icon chevronRight` on the report row; `Icon arrowRight` rotated is NOT used. The rate row's trailing glyph is `chevronRight` too (the label says it opens the store). Neither row is in the danger zone and neither uses accent fill.

---

## S3. Crash fallback (ErrorBoundary)

`ErrorScreen.tsx` is deliberately provider-free (no `useTheme`, `useT`, router, or fonts), because it renders when those may have failed. The report entry must preserve that.

- Add a second action under the existing "Try again" button: ghost/outline "Report this problem" (same 54 px height geometry as the retry button, `borderWidth 1.5`, border and label in the screen's own `tx` colour, not accent). The existing retry stays the single primary action.
- **(researcher default)** Because the router may be unmounted, tapping it expands an **inline** compact panel inside `ErrorScreen` (not a route and not a formSheet): fixed category "App froze or crashed" shown as read-only text, the same optional 1000-char field with counter, and a "Send report" button. It reuses the pure `*.logic.ts` payload builder and the outbox from S1 but none of S1's themed components. The "You can contact me" checkbox is omitted here (no session read is guaranteed). States are the same words as S1 (sending, sent, saved for later, error) rendered inline. If the planner can prove `router.push('/report-problem?category=crash')` works from the boundary on device, it may use the sheet instead, but must keep this inline panel as the fallback.
- Hardcoded `COPY` table gets `fr` and `en` entries (existing pattern): `report` button label, panel title, hint, send, sending, sent, saved.
- A11y: both buttons `accessibilityRole="button"` with labels; the panel is announced when it opens; font scaling uses the screen's existing `maxFontSizeMultiplier` pattern; no `numberOfLines`.
- The raw error message and stack from the boundary are part of the report (they are also in the errors.ts ring); the learner sees only the existing "Technical details" disclosure.

---

## S4. STT "hears nothing" / mic failure

Add a quiet text action beside the existing retry on the existing failure state: "Report a problem" (secondary, `TX font="semi" role="meta" color={t.txSecondary}`, 44 px tall hit area, underline not required, `minHeight: 44`, `accessibilityRole="button"`, label "Report an audio problem"). It must never replace or visually outrank the existing retry or skip action. It appears on EVERY "hears nothing" result and on every mic error (permission denied, unavailable, recorder error), per D-22, with no failure-count condition. It stays a quiet text action so it never competes with the retry. Opens S1 with `category=audio`, `screen` set to the current route.

---

## S5. Exam grading failure / ungraded answer

On the exam report item whose state is "grading failed" or "ungraded", add the same quiet text action "Report a problem" below the state explanation, `minHeight: 44`, label "Report a grading problem". Opens S1 with `category=grading`, plus `screen`, and the exam paper/item stable id as `itemId`. It never replaces the existing "Retry grading" or explanation. It does not appear on successfully graded items (a learner who disputes a score still reaches the Settings route).

---

## S6. Content flag icon (D-23)

- Appears on lesson **mission** pages and **quiz question** pages only. Not on flashcards, dictation, roleplay or exam items (deferred).
- Placement: the `FocusHeader` `extra` slot (left of the gear), a 44x44 `Press` with a centered `Icon flag` 18 px in `t.txSecondary` (not accent; accent stays reserved for the screen's own primary). `accessibilityRole="button"`, `accessibilityLabel="Report a problem with this item"` (FR label in French mode). No gesture alternative is introduced and none is removed; it is a plain tap.
- Must not shift the existing header layout or collide with the English-toggle pill at B1+ (verify at font scale 1.3, where header icons stay a fixed 44 px).
- Tap opens S1 with `category=content`, `screen`, `lessonId` and the current `itemId`/mission id. Opening the sheet never pauses scoring, never marks the question answered, and on dismiss the learner returns to the same mission/question in the same state.
- The icon is hidden while a quiz answer is being graded or an animation is committing the result (avoid a stray tap changing the sheet stack mid-transition); otherwise always visible.

---

## S7. Profile "Your report" row

On `app/profile.tsx`, one row linking to `/report`. Reuse the Settings row geometry from S2 (`minHeight: 58`, radius 16, `t.card`, `t.line(10)`, chevron). Icon `book` 18 px `t.txSecondary` is reused (no new glyph). Title "Your report", sub "Your accuracy and the words to review." The row is placed after the stats block and before account/sign-out controls (researcher default: the exact insertion point follows the existing section order in the file; the planner confirms it against the live layout). `accessibilityRole="button"`, label = title, action `router.push('/report')`. Shown to guests too (Le Rapport is local data). The 07.1 trail and home screens are not touched.

---

## S8. Le Rapport fixes (`app/report.tsx`)

| Fix | Contract |
|-----|----------|
| Route rename (D-30) | `/feedback` becomes `/report`. Update `roleplay.tsx`, `speak.tsx`, deep links, analytics screen name, and the `_layout.tsx` registration. A temporary redirect from `/feedback` to `/report` is allowed for stale deep links. The report sheet route is `/report-problem` and must never be confused with `/report` |
| Activity labels (R1, D-28) | Extend `drillNames` to all 13 `Activity` values (table below). Type becomes `Record<Activity, string>` so a missing key fails typecheck. Add a test that iterates every `Activity` value and asserts a non-empty FR and EN name that is not the raw id |
| Headline accuracy (R2, D-27) | Compute the ring percent, the `correct / total` figure and the "N attempts" tally from attempts with `activity !== 'exam-review'`. The per-drill list omits `exam-review`. `exam-review` attempts still feed the weak-words list. If after filtering there are zero attempts, show the existing empty state. No visual change to the layout |
| Ring a11y (R5, D-31) | Wrap the ring (`View` 120x120 plus its caps label) in one accessible element: `accessible`, `accessibilityRole="progressbar"` is NOT used (not a scrubber); use `accessibilityRole="text"` with `accessibilityLabel` = "accuracy, {n} percent" (FR: "précision, {n} pour cent"). The inner number `TX` and the caps label get `importantForAccessibility="no-hide-descendants"` / `accessibilityElementsHidden` so TalkBack reads one phrase, not "83" then "ACCURACY". SVG is decorative |
| Weak-item links (R6) | Behavior only: rows with an anchor push `/lesson?key=...&at=anchor` and must land on the right block under the Concept C spine. Visual unchanged. Row keeps `accessibilityRole="button"` and gets a label: "{french item}, {correct} of {seen} correct, open the lesson" (FR equivalent). French item text keeps `lang="fr"` |
| Component test (R4) | Render with a populated log and an empty log; assert ring label, exam-review exclusion, all 13 labels resolve |

### Activity labels (13 values, FR and EN)

| Activity | FR | EN |
|----------|----|----|
| `lesson` | Leçons | Lessons |
| `flashcards` | Cartes | Flashcards |
| `voiceflash` | Flash vocal | Voice Flash |
| `dictation` | Dictée | Dictation |
| `sentence` | Constructeur | Builder |
| `roleplay` | Jeu de rôle | Role Play |
| `speak` | Parler | Speaking |
| `player` | Lecteur | Player |
| `review` | Révision | Review |
| `placement` | Niveau | Level check |
| `narrated` | Leçons audio | Narrated lessons |
| `exam` | Examen blanc | Mock exam |
| `exam-review` | Révision d'examen | Exam review |

The first six keep their existing strings unchanged (flashcards 'Cartes', voiceflash 'Flash vocal', dictation 'Dictée', sentence 'Constructeur', roleplay 'Jeu de rôle', placement 'Niveau', and the EN equivalents). `exam-review` is named for completeness and the test, but is not rendered as a drill row (D-27). Row label wraps; no truncation.

---

## Spacing Scale

All new work uses the existing four-point rhythm.

| Token | Value | Phase 10 usage |
|-------|-------|----------------|
| xs | 4 px | Icon to text gap, label to sub gap |
| sm | 8 px | Gap between category rows, counter spacing |
| md | 16 px | Card and row padding, gap between form groups, footer top padding |
| lg | 24 px | Section separation inside the sheet, Settings row bottom margin |
| xl | 32 px | Gap between the intro line and the "WHAT WENT WRONG" label, and the top margin of the sent/saved block (a definite 32 px, not conditional) |
| 2xl | 48 px | Sent-state confirmation top spacing |
| 3xl | 64 px | Not used |

**Exceptions (functional or inherited, not spacing tokens):** touch targets 44 px minimum (close button, flag icon, expandable row, checkbox row at 52, category rows at 52); existing `Button` height 54 px; Settings row `minHeight` 58 and `paddingVertical` 10, copied from the Licences row; 12 px padding in the 4xx error block and category row vertical padding (existing Ealch card rhythm); text field min height 120. Use `minHeight`, wrapping and scrolling instead of fixed heights on any text-bearing element.

---

## Typography

New copy uses a subset of the established `TX` ramp (`type.logic.ts`). Four sizes, two weights.

| Role | TX role | Size | Weight | Line height | Phase 10 usage |
|------|---------|------|--------|-------------|----------------|
| Meta | `meta` | 12 px | Semibold for section label and quiet text actions, Regular for the rest | 1.35 | "WHAT WENT WRONG", counter, category hint, contact sub-line, Settings and Profile row subs, quiet "Report a problem" actions |
| Body | `body` | 15 px | Regular; Semibold for row titles | 1.5 | Intro, category labels, details input, checkbox label, "What's included" list, 4xx error text, status lines, sent/saved body |
| Title | `titleLg` | 21 px | Semibold (Instrument Sans, `font="semi"`) | 1.25 | Sheet title, sent/saved heading |
| Display | `display` | 34 px (Serif regular) | Regular | 1.1 | Existing "Le Rapport" heading only; no new display text |

Weights: Instrument Sans Regular (400) and Semibold (600) only (existing `font="semi"` and default). New copy uses exactly three sizes, 12, 15 and 21, plus the inherited 34. The `label` (13) and `bodySm` (14) roles are NOT used for any new Phase 10 copy. Existing 13 px text that Phase 10 does not author (the `FocusHeader` title, the existing Licences row sub-line, Le Rapport's own `label` text) is inherited and is not changed. Serif (Instrument Serif) is used only by the inherited Le Rapport display text; all new headings are Instrument Sans semibold. Do not set `numberOfLines` on any new text. Do not apply `flex` to a `Text` node (wrap in a `View`); no fixed heights. Font scaling stays through `TX`. Verified requirement: no clipped word endings at OS font scale 1.3 and 1.5 for the category labels, intro, "What's included" list, counter, and sent confirmation.

---

## Color

Everything resolves through `useTheme()` so Automatic, Dark, Light and the selected accent all work.

| Role | Dark | Light | Usage |
|------|------|-------|-------|
| Dominant (60%) | `t.bg` `#0B0C0E` / sheet `t.sheet` `#13161B` | `t.bg` `#F5F3EE` / sheet `t.sheet` `#FFFFFF` | Sheet background (`contentStyle`), screens behind it |
| Secondary (30%) | `t.card` `#101216`, `t.input` `#111318` | `t.card` / `t.input` `#FFFFFF` | Category rows (unselected), details field, "What's included" block, Settings rows |
| Accent (10%) | selected `t.acc` (default Riviera `#2FD6C1`) | selected `t.acc`, `t.accInk` on fills, `t.accTx` for text | Reserved list below |
| Destructive / error | `t.danger` `#FF6B5C` | `t.danger` `#C2412F` | 4xx error text and its tinted block, counter at 950+; never on Send |

**Accent reserved for:** (1) the Send and sent-state Close primary `Button` fill, (2) the selected category row border, radio dot and check, (3) the checked state of the contact checkbox, (4) the check glyph in the sent confirmation circle, (5) Le Rapport's existing ring stroke and "Back" empty-state button (unchanged). Not used for: the flag icon, Settings row icons, the close button, "What's included" row, the STT/exam quiet "Report a problem" actions, or the crash-screen ghost button.

Destructive is not used for any action. There is no destructive action in this phase.

---

## Copywriting Contract

Rules: no em dash in any string; no word "honest"; label separators "·" are fine; French first; French text rendered through `TX` gets `lang="fr"` only where the learner is reading authored French content (interface FR copy is the interface voice and needs no `lang` tag unless the app already tags it; follow existing screens). Straight/curly apostrophes follow `strings.ts`.

| Element | French | English |
|---------|--------|---------|
| Sheet title | Signaler un problème | Report a problem |
| Intro (default) | Dites-nous ce qui ne va pas. Nous lisons chaque message. | Tell us what is wrong. We read every report. |
| Intro (content flag) | Vous signalez une erreur dans cet élément. | You are reporting a mistake in this item. |
| Category group label | QU'EST-CE QUI NE VA PAS | WHAT WENT WRONG |
| Cat: audio | Audio ou voix | Audio or voice |
| Cat: grading | La correction semble fausse | Grading felt wrong |
| Cat: content | Erreur de contenu | Content mistake |
| Cat: crash | L'appli a planté ou s'est figée | App froze or crashed |
| Cat: payment | Paiement ou accès | Payment or access |
| Cat: other | Autre chose | Something else |
| Category hint (none chosen) | Choisissez ce qui ne va pas pour envoyer | Choose what went wrong to send |
| Details label | Détails (facultatif) | Details (optional) |
| Details placeholder | Que s'est-il passé ? | What happened? |
| Counter | {n}/1000 | {n}/1000 |
| What's included (collapsed) | Ce qui est envoyé : version, écran, erreurs récentes. Jamais vos réponses ni votre voix. | What's included: app version, screen, recent errors. Never your answers or recordings. |
| Included list 1 | Version de l'appli, mise à jour et plateforme | App version, update and platform |
| Included list 2 | L'écran où vous étiez, et le numéro de la leçon ou de l'élément | The screen you were on, and the lesson or item number |
| Included list 3 | Les 10 derniers messages d'erreur de cette session | The last 10 error messages from this session |
| Included list 4 | Modèle du téléphone, taille du texte, thème clair ou sombre | Phone model, text size, and light or dark theme |
| Included list 5 | Votre e-mail, seulement si vous cochez « Vous pouvez me contacter » | Your email, only if you tick "You can contact me" |
| Included list 6 | Jamais : vos réponses, ce que vous avez dit, vos enregistrements | Never included: your answers, what you said, or your recordings |
| Contact checkbox | Vous pouvez me contacter | You can contact me |
| Contact sub | Nous utilisons l'e-mail de votre compte pour répondre. Désactivé tant que vous ne cochez pas. | We use your account email to reply. Off unless you tick it. |
| Primary CTA | Envoyer le signalement | Send report |
| Sending | Envoi en cours... | Sending... |
| Sent heading | Merci, c'est envoyé | Thanks, it is sent |
| Sent body | Votre signalement nous est bien parvenu. | Your report reached us. |
| Queued heading | Enregistré | Saved |
| Queued body (offline) | Il sera envoyé dès que vous serez de nouveau en ligne. | It will send when you are back online. |
| Queued body (429 / 5xx) | Trop de signalements en ce moment, ou le service est occupé. Nous l'avons enregistré et l'enverrons plus tard. | We could not send it right now. We saved it and will send it later. |
| 4xx error | Nous n'avons pas pu envoyer ce signalement. Vérifiez le texte et réessayez. | We could not send this report. Check the text and try again. |
| 4xx retry CTA | Réessayer | Try again |
| Close (header button and sent/saved button) | Fermer | Close |
| Settings row title | Signaler un problème | Report a problem |
| Settings row sub | Quelque chose ne marche pas ? Dites-le-nous. | Something broken or wrong? Tell us. |
| Rate row title | Noter Ealch | Rate Ealch |
| Rate row sub | Ouvre la page du magasin. | Opens the store page. |
| Rate row a11y label | Noter Ealch, ouvre le magasin | Rate Ealch, opens the store |
| Crash button | Signaler ce problème | Report this problem |
| STT action | Signaler un problème | Report a problem |
| STT a11y label | Signaler un problème audio | Report an audio problem |
| Exam action | Signaler un problème | Report a problem |
| Exam a11y label | Signaler un problème de correction | Report a grading problem |
| Flag a11y label | Signaler un problème avec cet élément | Report a problem with this item |
| Profile row title | Votre rapport | Your report |
| Profile row sub | Votre précision et les mots à revoir. | Your accuracy and the words to review. |
| Ring a11y label | précision, {n} pour cent | accuracy, {n} percent |
| Weak row a11y label | {fr}, {c} sur {s} réussis, ouvrir la leçon | {fr}, {c} of {s} correct, open the lesson |

**Empty state:** the report sheet has no empty data state (a blank form is idle). Le Rapport keeps its existing empty heading and body (`reportEmptyT`, `reportEmptyS`); it is shown when no non-`exam-review` attempts exist.

**Error state:** 4xx copy above states the problem and the next step. Offline, 429 and 5xx are never shown as errors; they are the calm "Saved" state with the next step stated.

**Destructive actions in this phase:** none. Report submission is not destructive, discarding a draft needs no confirmation, and nothing deletes learner data (report deletion on account delete is server-side, D-20).

---

## Accessibility and Interaction (Phase 8 / 8.1 rules applied)

- Every control has a role and label. Category rows: `radio` with `selected`. Contact row: `checkbox` with `checked`. "What's included": `button` with `expanded`. Send: `button` with `disabled`. Close, flag, Settings rows, Profile row: `button` (Rate row: `link`). Radio group container: `radiogroup` with label "What went wrong, required" (FR: "Ce qui ne va pas, obligatoire").
- No gesture-only action: the flag is a visible icon button, not a long-press; sheet dismiss has a visible Close button in addition to the swipe-down grabber.
- All touch targets 44 pt or larger (rows 52 to 58, buttons 54).
- Screen-reader order in S1: title, intro, category group (rows in order), details field, counter, what's included, contact checkbox, status text, Send. Status or error text is announced via live region when it appears, and precedes Send in order.
- On open, focus moves to the sheet title. After an error, focus stays where the learner was (do not steal it from the text field). After sent/queued, focus moves to the confirmation heading.
- Font scale 1.3 and 1.5: no clipped tails; no `flex` on any `Text`; all text-bearing containers use `minHeight` and wrap; the form scrolls; Send stays visible in its pinned footer and never sits under the keyboard.
- Reduced motion: no new animation beyond the OS sheet and the existing `Press` feedback. Sent confirmation appears without scale-in or confetti; no celebratory motion on a report.
- French text in S8 weak-item rows keeps `lang="fr"` (existing). Interface FR copy follows existing screens.
- Contrast: all text uses theme tokens that already pass; new sub-lines use `t.txMuted` (not `t.txSubtle`), and `t.txSubtle` appears only on the uppercase "WHAT WENT WRONG" label as on existing section labels; never for the 4xx error or the required hint.

---

## Registry Safety

| Registry | Blocks Used | Safety Gate |
|----------|-------------|-------------|
| none | none | not applicable (Expo native app; no shadcn or third-party registry) |

---

## Checker Sign-Off

- [x] Dimension 1 Copywriting: PASS
- [x] Dimension 2 Visuals: PASS
- [x] Dimension 3 Color: PASS
- [x] Dimension 4 Typography: PASS
- [x] Dimension 5 Spacing: PASS
- [x] Dimension 6 Registry Safety: PASS

**Approval:** approved 2026-10-01 (gsd-ui-checker, after 1 revision)

---

## Researcher Defaults (not in CONTEXT.md; overridable)

1. Unsaved draft closes without a confirmation dialog.
2. 429 and 5xx show the calm "Saved" state (consistent with D-18), not an error.
3. Auto-dismiss of Sent/Saved after 2500 ms, suspended while a screen reader is on.
4. Crash screen uses an inline compact report panel (provider-free), because the router may be down.
5. STT report action appears on every hears-nothing result and every mic error (D-22), as a quiet text action below or beside the existing retry.
6. Content flag is hidden while an answer is being graded or committed.
7. Profile row insertion point after stats, before account controls; planner confirms against the live file.
8. Activity names: "Leçons / Lessons", "Parler / Speaking", "Lecteur / Player", "Révision / Review", "Leçons audio / Narrated lessons", "Examen blanc / Mock exam", "Révision d'examen / Exam review".
9. New `flag` icon is added to `Icon.tsx`.
10. Ring a11y is a single text element reading "accuracy, N percent".
