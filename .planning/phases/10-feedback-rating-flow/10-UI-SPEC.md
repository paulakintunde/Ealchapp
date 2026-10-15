---
phase: 10
slug: feedback-rating-flow
status: approved
created: 2026-10-01
revised: 2026-10-15
reviewed_at: 2026-10-15
reviewed_by: gsd-ui-checker (APPROVED, no BLOCK; citations re-grepped 2026-10-15)
---

# Phase 10 - UI Design Contract

> Visual and interaction contract for the report-a-problem sheet, its entry points, the Profile row, and the Le Rapport fixes. The existing Ealch visual language is the source of truth. Decisions D-01..D-49 in `10-CONTEXT.md` are locked and are not restated except where they set a visual rule. Items marked **(researcher default)** were not covered by CONTEXT.md and were chosen to match existing screens; the user can override them.
>
> Revision 2026-10-01: every control this spec builds on is cited as `file:line` from the live `ealch-v2` tree. Where a control does not exist yet, it is listed under "New component and API changes" so the plans pick it up.

---

## Design System

| Property | Value |
|----------|-------|
| Tool | none (Expo SDK 57 / React Native 0.86, manual design system) |
| Component library | `src/components/ui.tsx` (`Press`, `Button`, `Card`, `Toggle`, `ProgressBar`, `FocusHeader`), `src/components/Type.tsx` (`TX`), `src/components/Icon.tsx` |
| Icon library | local `Icon.tsx` on `react-native-svg`. Phase 10 adds TWO glyphs: `flag` (24 viewBox, stroke, e.g. `['M5 21V4', 'M5 4h11l-2 4 2 4H5']`) and `more` (24 viewBox, three vertical dots as **`fill` path strings only**: `Spec` is `{ vb; stroke?: string[]; fill?: string[]; sw? }` (`Icon.tsx:46`) and every `fill` entry renders as a `<Path>` (`Icon.tsx:141`), so no `<Circle>` element is possible. Each dot is two half-circle arcs, the same idiom as the dot in `wifi`: `fill: ['M12 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z', 'M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z', 'M12 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z']`). All other icons reuse existing names (`Icon.tsx:4-46`): `chevronRight`, `chevronDown`, `chevronUp`, `check`, `star`, `wifi`, `x`, `book` |
| Font | Instrument Sans (interface), Instrument Serif (display headings only, as on Le Rapport) |
| Color source | `useTheme()` tokens only (`src/theme/palette.ts:99-150`). ErrorScreen is the one exception (provider-free, own hex values at `ErrorScreen.tsx:46-51`) |
| Localization | `useT()` and `src/i18n/strings.ts`. French first, English toggle. Both language blocks get every new key |

Sources: `10-CONTEXT.md`, `10-PRE-DISCUSSION-AUDIT.md`, `09-UI-SPEC.md`, `src/components/type.logic.ts`, `src/theme/palette.ts`, `src/theme/color.ts`, `app/_layout.tsx` (formSheet), `app/settings.tsx` (row pattern), `app/feedback.tsx`, `app/lesson.tsx`, `app/exam-report.tsx`, `app/profile.tsx`, `src/components/ErrorScreen.tsx`.

---

## New component and API changes (the plans must include these)

| # | Change | Where | Why |
|---|--------|-------|-----|
| N1 | `Button` gains `loading?: boolean` | `src/components/ui.tsx:105-157` | `Button` today takes `icon?: IconName` only (`ui.tsx:112,121`) and has no spinner. See S1 "Send button loading" |
| N2 | `HeaderMenuButton` + `HeaderMenu` (new component, anchored popover) | new `src/components/HeaderMenu.tsx`; replaces the "?" `Press` at `app/lesson.tsx:780-788` | S6: the header has no room for a fourth icon |
| N3 | `Icon` gains `flag` and `more` | `src/components/Icon.tsx` (`IconName` union at :4, `ICONS` map) | Settings row, overflow button |
| N4 | `ReportProblemLink` (new shared component) | new `src/components/ReportProblemLink.tsx` | S4 and S5 use one quiet action, one implementation |
| N5 | `LessonPager` gains `onQuizItemChange?: (key: string \| null, answerPending: boolean) => void` and `onPageKindChange?: (kind: 'cover' \| 'act' \| 'image' \| 'section' \| 'quiz') => void` | `src/components/LessonPager.tsx` (`PageEntry` kinds at :331-338, props at :348-370), `QuizRoundsView.tsx`, `LessonRich.tsx` (QuizDeckView) | `key` is the D-40 hybrid key: flat `${L.id}#quiz.q${authoredIndex}:h${hash8}`, rounds `${L.id}#quiz.${round.id}.q${i}:h${hash8}`, where `authoredIndex = quizSection.questions.indexOf(question)` (questions are never reordered; only options are, and the flat deck renders a filtered list, `lesson.tsx:553-556`). `key` is `null` on the quiz result card and on every non-quiz page. `answerPending` is `true` while an answer is committing or grading. Page kinds mirror `PageEntry`, including `'act'` (the act opener card, `LessonPager.tsx:336`) |
| N6 | `SectionRow` and `DelfRow` gain a `paperId: string` prop | `app/exam-report.tsx:323` and `:521`; `paperId` comes from `:62` | S5 attaches `paperId` and skill as the item id |
| N7 | Pure helper `headlineAttempts(attempts)` (drops `activity === 'exam-review'`) | `src/store/report.logic.ts` (the file `10-05-PLAN.md:39-41` creates, next to `reportFigures`), used by `app/report.tsx` and `app/profile.tsx:120-122` | Ring and Profile StatCard must agree (S7, S8) |
| N8 | `ErrorScreen` restructured: ScrollView root, KeyboardAvoidingView, inline report panel, text through `typeMetrics` | `src/components/ErrorScreen.tsx:61-143` | S3 |
| N9 | `WordPractice` mic error text loses `numberOfLines={2}` | `src/components/WordPractice.tsx:278` | House rule: no `numberOfLines` on body copy; the link now sits below it |
| N10 | Settings "Rate Ealch" row is Android only | `app/settings.tsx` About section | No App Store id exists yet |

---

## Negative Contract: the native review request has NO app UI

This is a hard rule for FEEDBACK-02 (D-01..D-11, D-34, D-39), recorded here so the planner and auditor can check for it.

- The review request is a bare call to `expo-store-review` from a pure-logic decision. **No Ealch screen, sheet, modal, banner, toast, emoji row, star row, or text appears before, around, or after it.** Nothing asks "Enjoying Ealch?", "Would you rate us?", or any sentiment or predictive question (Google Play In-App Review guideline; Apple 5.6.1).
- No pre-prompt, no "Not now" card, no custom stars, no thank-you after it (the app cannot know whether the learner rated).
- It is not a PushBanner kind and not a Den card (D-24, S3 in the audit). Do not add a banner kind.
- The only rating UI in the app is the Settings "Rate Ealch" row, which opens the **store listing URL** (D-11). It never calls the review API, and it is never shown as an alternative to, or follow-up of, "Report a problem".
- The report sheet and the review request never appear in the same flow. The report sheet never contains a rating prompt, a link to the store, or the words "rate" or "review".
- **D-06 amended: no state anywhere ties a report to rating.** Sending, queuing, failing or dropping a report writes nothing that review eligibility reads, and review eligibility reads nothing the report flow writes. A report outcome is never logged to the `errors.ts` ring (which D-06 does read).
- D-03 as amended: the request is **armed** at the perfect completion and **fired** only when `act.tsx` or `den.tsx` gains focus, within 30 minutes; any other screen never fires it. It must not delay or cover the trail, celebration, or score, and nothing visible marks the armed state.
- The only visible trace is the OS-owned sheet. The `review_requested` analytics event is invisible.

---

## House copy and text rules (checkable)

Every new Phase 10 string, in both languages, and every new `Text`/`TX` node must pass all of these. The auditor checks each one by grep or test.

| # | Rule | Check |
|---|------|-------|
| C1 | No em dash (U+2014 `—`) in any new string. The label separator "·" is allowed | grep new keys for `—` returns nothing |
| C2 | The word "honest" (any case, either language) never appears | `sons-alphabet.test.ts` pattern, extended to the new keys |
| C3 | D-36: in NEW French strings, a narrow no-break space U+202F sits before `?`, `!` and `;`, and a no-break space U+00A0 sits before `:`. A plain space or no space before those marks fails | the D-36 test over the new keys |
| C4 | Ellipsis is the single character `…` (U+2026), never `...`, in both languages | grep new keys for `\.\.\.` returns nothing |
| C5 | No `flex` style on a `Text`/`TX` node; wrap in a `View` with `flex: 1` instead | review of new JSX |
| C6 | No `numberOfLines` on body copy. The only allowed use in this phase is the inherited one-line `FocusHeader` title (`ui.tsx:344`), which ellipsizes visibly | grep new JSX |
| C7 | No `maxFontSizeMultiplier` and no absolute `lineHeight` on new text. Size and line height come from `typeMetrics` (`type.logic.ts:87-95`) through `TX`, or directly in provider-free code. `type.logic.ts:64-80` documents why: a cap on the glyphs with a separately scaled line box dropped word endings at font scale 1.3 | grep new JSX |
| C8 | Guillemets in new French strings carry U+202F inside: `« texte »` (house choice, matches C3) | the D-36 test |

In the copy table below, every no-break space is written as the real character and also marked: `[NNBSP]` = U+202F, `[NBSP]` = U+00A0. The marker column is documentation only; the string in the French column is the exact value to put in `strings.ts`.

---

## Surfaces

| # | Surface | Route / location | New or changed |
|---|---------|------------------|----------------|
| S1 | Report-a-problem sheet | `app/report-problem.tsx`, `presentation: 'formSheet'` | New |
| S2 | Settings row "Report a problem" (About section) and the Android-only "Rate Ealch" row (its own "Play Store" section) | `app/settings.tsx` | Changed |
| S3 | Crash fallback report panel | `src/components/ErrorScreen.tsx` | Changed |
| S4 | STT no-speech / mic failure action, 7 surfaces | `speak.tsx`, `voiceflash.tsx`, `sentence.tsx`, `onboarding.tsx`, `roleplay.tsx`, `MissionRich.tsx`, `WordPractice.tsx` | Changed |
| S5 | Exam report grading-failure surfaces: `audio-failed`, `not-graded` and `examShortUnchecked` | `app/exam-report.tsx` `SectionRow` / `DelfRow` | Changed |
| S6 | Lesson header overflow menu with the content report | `app/lesson.tsx` `FocusHeader` `extra` slot | Changed |
| S7 | Profile "Your report" row and accuracy StatCard | `app/profile.tsx` | Changed |
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

**Keyboard contract (one strategy, no variants).** The sheet's root is `KeyboardAvoidingView` with `behavior="padding"` on both platforms and `keyboardVerticalOffset={0}`. It wraps the **whole** sheet content: the header row, the `ScrollView` body and the pinned footer. The `ScrollView` has `keyboardShouldPersistTaps="handled"` and does **not** set `automaticallyAdjustKeyboardInsets` (that would add a second keyboard inset on top of the KAV padding). The **Send button lives in the pinned footer** below the `ScrollView`, never inside it. Footer bottom padding is `keyboardVisible ? 16 : insets.bottom + 16`. `keyboardVisible` comes from `Keyboard.addListener('keyboardDidShow' / 'keyboardDidHide')`, removed on unmount; while the keyboard is up the navigation-bar inset is already covered by it and is not added again. The category list and counter remain reachable by scrolling at font scale 1.3 and 1.5. Proof: Pixel 9, 3-button navigation, font scale 1.3, keyboard open on the details field: Send and the counter are both fully visible above the keyboard. If this check fails on device, the executor records a deviation in the SUMMARY and **stops**; no other strategy is improvised.

The sheet has no `FocusHeader`. Its header is a row: title (left) and a 44x44 close `Press` (`Icon x`, `accessibilityRole="button"`, label "Close") on the right. Closing with unsaved text (more than 0 characters or a category chosen by the learner, not pre-filled) shows no confirmation; the draft is simply discarded (researcher default: a draft this small is not worth a dialog).

### Focal points

- **Form (idle, sending, 4xx):** the anchor is the pinned Send button, the only control with an accent **fill** in `t.acc`, always visible. The second focal point is the selected category row. Accent appears on this sheet only in the uses named under Color "Accent reserved for": the Send fill (`t.acc`), and the selection indicators in `t.accTx` (selected row border, radio and check; the checked contact checkbox fill; the sent-circle check). No other element uses accent.
- **Sent and saved states:** the focal point is the circle with its check (or wifi) glyph plus the heading directly beneath it; the Close button is the only action.

### Layout, top to bottom

| Order | Element | Contract |
|-------|---------|----------|
| 1 | Title row | `TX font="semi" role="titleLg"`: "Report a problem". Close button on the right. Screen-reader heading (`accessibilityRole="header"`) |
| 2 | Intro line | `TX role="body" color={t.txMuted}`: one sentence, see copy |
| 3 | Category group | Label `TX font="semi" role="meta" ls={2.4} color={t.txSubtle}`: "WHAT WENT WRONG" (required marker is spoken, see a11y). Then 6 rows, one per D-14 category, stacked, `gap: 8`. Container has `accessibilityRole="radiogroup"` |
| 4 | Details field | Label "Details (optional)". Multiline `TextInput`, min height 120, `maxLength={1000}`, `textAlignVertical="top"`, `t.input` background, **`t.txNonText` 1 px border** (1.5 px while focused; the field sits on a same-colour sheet, so the border is its only boundary and must reach 3:1), radius 16, padding 16, `TX` body metrics (15 px, via `typeMetrics`), `placeholderTextColor={t.txSubtle}`. Counter below right-aligned: `{n}/1000`, `TX role="meta" color={t.txMuted}`; turns `t.danger` at 950 or more |
| 5 | "What's included" | Single collapsible row, see below |
| 6 | Contact checkbox | Signed-in learners only. Hidden for guests (no disabled placeholder) |
| 7 | Pinned footer | Primary `Button` "Send report" (54 px, accent fill). Status line above it when a state needs one |

### Category row

- Row: `minHeight: 52`, radius 16, `borderWidth: 1`, padding `12 16`, `flexDirection: 'row'`, `gap: 12`, `alignItems: 'center'`.
- Unselected: `t.card` background, `t.line(10)` border (decorative; the radio circle identifies the control). Selected: `t.accA(10)` background, **`t.accTx` border (1.5)**, `Icon check` 16 px in `t.accTx` on the right. Selection is never signaled by color alone: the check glyph appears on the selected row.
- Left: a 20 px radio circle, `borderWidth 1.5`. Unselected border **`t.txNonText`**. Selected border **`t.accTx`** with a 10 px **`t.accTx`** dot. (Raw `t.acc` is not used for any border, dot or glyph on this sheet: Riviera `#2FD6C1` on white measures 1.82:1.)
- Label: `TX font="semi" role="body"`. No `numberOfLines`, no `flex` on the `Text` itself (wrap the label in a `View` with `flex: 1`; the Text inside stays unstyled by flex, per C5).
- `accessibilityRole="radio"`, `accessibilityState={{ selected }}`, `accessibilityLabel` = the category label.
- Pre-filled category: row is shown selected on open, learner can change it. Pre-fill is not locked.
- No category selected: Send is `disabled` (opacity 0.4) and its `accessibilityState.disabled` is true. A short hint line "Choose what went wrong to send" appears above Send in `TX role="meta" color={t.txMuted}` only while no category is chosen.

### "What's included" (D-19)

- Collapsed: a `Press` row, `minHeight: 44`, `accessibilityRole="button"`, `accessibilityState={{ expanded }}`, label = the one-liner text. Right side `Icon chevronDown` (`chevronUp` when open), 14 px, `t.txNonText`.
- One-liner (collapsed): see copy table.
- Expanded: inside a `t.card` rounded block (radius 16, padding 16, `gap: 8`), a plain list with one `TX role="body" color={t.txSecondary}` per line, bullet via "·" separator character in the string, covering the full D-16 list (Included list 1 to 6 in the copy table).
- Expanding scrolls the row into view; focus stays on the toggle row.

### Contact checkbox (D-17)

- Row: `minHeight: 52`, `Press` with `accessibilityRole="checkbox"`, `accessibilityState={{ checked }}`, label "You can contact me". Left: 24 px square (radius 6, `borderWidth 1.5`). Unchecked: **`t.txNonText`** border, transparent fill. Checked: **`t.accTx`** fill and border, `Icon check` 16 px in **`t.sheet`**. Right: label `TX font="semi" role="body"` and below it `TX role="meta" color={t.txMuted}` (contact sub, see copy).
- Default off every time the sheet opens (not remembered).
- Signed-in only. For guests the row is not rendered and the intro line has no mention of contact.
- Use a custom checkbox, not `Toggle` (switch semantics differ from the "checkbox" role the contract requires).

### Send button loading (NEW: N1, `Button` `loading` prop)

`Button` (`ui.tsx:105-157`) has no loading state today: its props are `label, onPress, variant, cue, disabled, style, icon` (`ui.tsx:106-112`) and the only leading slot is `{icon ? <Icon name={icon} size={18} color={fg} /> : null}` (`ui.tsx:151`). Add:

- `loading?: boolean`. While true: an `ActivityIndicator` `size={18}` `color={fg}` renders in the icon slot (replacing `icon` if one is set); `onPress` is not wired; `accessibilityState={{ disabled: true, busy: true }}`; opacity stays 1 (loading is not the 0.4 disabled look).
- The label text does not change while loading, so the label width is stable and the button never resizes. Progress is announced by the status line, not by the button label.
- Default `false`; every existing call site renders exactly as before.

### States

Every state keeps the user's category and text intact until success. A report is written to the outbox **before** it is sent (D-38, claim-then-send), so every state below starts from a saved report.

| State | Visual | Announcement | Controls |
|-------|--------|--------------|----------|
| idle | Form as above, Send enabled once a category is chosen | none | all active |
| sending | Send uses `loading` (N1): spinner in the icon slot, label stays "Send report". Status line above Send: "Sending…" (`TX role="meta" color={t.txMuted}`). Category rows, text field and checkbox are `disabled`. Footer stays visible | status line has `accessibilityLiveRegion="polite"`: "Sending…" | close stays active. Closing mid-send is allowed; the send continues in the background (see "after close" rows) |
| double-submit guard | Send is inactive from the **first** tap until the sheet resolves to sent, queued or 4xx. The guard is a synchronous ref set inside the press handler before any `await`, not only React state, so a second tap in the same frame cannot create a second outbox entry | none | Send inactive |
| send timeout (15 s) | If the request has not resolved 15 s after the tap, the sheet stops the spinner and shows the 5xx "Saved" state (heading "Saved", body "Queued body (5xx)"). The report is already claimed in the outbox (D-38), so nothing is lost. The in-flight request is not cancelled: if it later succeeds, the outbox entry is cleared silently; if it later returns 4xx, the "4xx, after close" row applies. The outbox never re-sends an entry while its first request is still in flight (D-38 single queue) | the heading and body | "Close" |
| outbox write fails (claim step) | Writing the report to the outbox fails (storage error). Nothing is sent, because D-38 sends only a claimed report. The form stays open with category and text kept. Inline block in the 4xx style above Send with the `probSaveFailed` copy ("Outbox write failure" row). Send is re-enabled with its normal label | `accessibilityLiveRegion="assertive"`, `accessibilityRole="alert"` | "Send report" |
| sent | Form replaced by a centered confirmation block: 56 px circle `t.accA(14)` with `Icon check` 24 px `t.accTx`, heading `TX font="semi" role="titleLg"`, body `TX role="body" color={t.txMuted}` | the heading then the body: "Sent. Thank you." "Your report reached us." | Primary `Button` "Close". Sheet auto-dismisses after 2500 ms and returns the learner to where they were (D-26); Close dismisses immediately. Auto-dismiss is suspended while a screen reader is active (TalkBack/VoiceOver on) so the message is fully read; the learner uses Close |
| queued-offline | Same confirmation layout as sent but with `Icon wifi` instead of check. Calm, not an error: `t.accA(14)` circle, no danger color. Heading "Saved", body "Queued body (offline)" | the heading and body | "Close"; auto-dismiss 2500 ms (suspended with screen reader). Retried on next launch and each return to foreground (D-18) |
| rate-limited (429) | Same layout as queued-offline. Heading "Saved", body **"Queued body (429)"**, word-for-word the copy table row. Not an error color. The report stays in the outbox and is not retried before the next calendar day, UTC (D-35) | the heading and body | "Close" |
| 5xx / network error | Same layout as queued-offline. Heading "Saved", body "Queued body (5xx)". Retried as offline (D-18) | the heading and body | "Close" |
| 4xx error (not 429) | Form stays open with text and category preserved. Inline error block above Send: **`t.dangerA(8)` background, `t.danger` 1 px border, radius 12, padding 12, text `TX role="body" color={t.txPrimary}`** (words carry the error; the red border and tint reinforce it). Send stays enabled, label "Try again". The report is removed from the outbox, NOT retried (D-18) | `accessibilityLiveRegion="assertive"` and `accessibilityRole="alert"`; focus is not moved away from the field | "Try again", plus the learner can edit the text |
| sent, after the learner closed mid-send | No UI. The outbox entry is cleared | none | none |
| 4xx, after the learner closed mid-send **(researcher default)** | The report is dropped: removed from the outbox, not retried, and the learner is **not** re-notified (no toast, banner, badge or next-open message). Rationale: a 4xx means the payload itself was refused, the learner already left the context, and resurfacing it would interrupt an unrelated screen. The drop is NOT written to the `errors.ts` ring (that ring feeds the D-06 review skip, and a report must never affect review eligibility) | none | none |
| 429 / 5xx / offline, after close | Stays in the outbox exactly as if the sheet were open. No UI | none | none |
| repeated 429 from the queue (guest or signed-in) | Still queued. Each retry happens no sooner than the next UTC day (D-35), on launch or foreground. **No UI at any retry, ever:** no toast, no banner, no badge, no repeated "Saved". The learner saw "Saved" once, when they sent it | none | none |
| app killed mid-send | The claimed report is already in the outbox (D-38) and is retried on next launch. No UI | none | none |
| queued report older than 30 days | Pruned from the outbox (D-18 expiry). No UI | none | none |
| account deleted with reports still queued | Delete-account clears the local outbox (D-20), so no queued report can recreate a row. No UI beyond the existing delete flow | none | none |

Error text is always paired with words; no state is conveyed by color alone.

### Pre-fill and context (D-22, D-16)

The route takes params: `category` (one of `audio | grading | content | crash | payment | other`), `screen` (string), `itemId` (string, optional), `lessonId` (string, optional). The pre-filled category is selected and announced on open with the "Category selected announcement" copy row (EN "Audio or voice selected"). Screen, item and lesson ids are attached silently and are NOT shown as editable fields; the one-liner covers them. For content reports (S6) the intro line changes to the content-flag intro (see copy). Item and lesson ids are never displayed.

---

## S2. Settings rows (D-49: two separate sections)

**Section order (D-49).** The two rows never share a section, so they cannot read as a happy/unhappy split:
1. **About** (existing `SectionHead` `T.aboutSec`, `settings.tsx:577`): "Report a problem" first, directly above the existing Licences row, then Licences.
2. **Play Store** (NEW section, Android only): `SectionHead label={T.storeSec.toUpperCase()}` containing the single "Rate Ealch" row. It sits **after About and before the danger zone** (`SectionHead` `T.dangerZone`, `settings.tsx:612`); deletion stays last. On iOS the whole section, heading included, is not rendered.

New string `storeSec`: FR "Play Store", EN "Play Store" (identical in both languages; see the copy table). Both rows reuse the Licences row geometry exactly: `Press`, `minHeight: 58`, radius 16, `borderWidth: 1`, `t.line(10)` (decorative; title and chevron identify the row), `t.card`, `t.cardShadow`, `gap: 14`, `paddingHorizontal: 16`, `paddingVertical: 10`. "Report a problem" takes `marginBottom: 8`, because Licences follows it in the same section. Licences keeps its own `marginBottom: 24` (`settings.tsx:594`). "Rate Ealch" is the only row in its section and takes `marginBottom: 24`, like the last row of any section.

**Neutral-copy rule (D-49).** Neither row's title or sub-line may suggest a sentiment or a choice between them: no "Enjoying Ealch?", no "Having a problem?", no "Love it?", no cross-reference from one row to the other, no icon or accent that ranks them. The titles stay the plain verbs "Report a problem" and "Rate Ealch". After the review cap is spent (3 per rolling 365 days, D-07), the Rate row stays in Settings unchanged: it is the permanent way to rate, and nothing in the UI tells the learner the cap was reached.

**"Rate Ealch" is Android only until an App Store id exists.** Render it only when `Platform.OS === 'android'`. On iOS the row is not rendered at all (no disabled placeholder); adding it is a named row on the pre-App-Store launch checklist, alongside the D-32 iOS proof.

| Row | Icon (18 px, `t.txSecondary`) | Title (`TX font="semi" role="body"`) | Sub (`TX role="label" color={t.txSubtle} style={{ marginTop: 1 }}`, identical to the adjacent Licences sub at `settings.tsx:602-604`) | Action | a11y |
|-----|------|-------|-----|--------|------|
| Report a problem | `flag` | Report a problem | Something broken or wrong? Tell us. | `router.push({ pathname: '/report-problem', params: { screen: 'settings' } })`, no category pre-fill | `accessibilityRole="button"`, label = title |
| Rate Ealch (Android only) | `star` | Rate Ealch | Opens the Play Store page. | `Linking.openURL('market://details?id=app.ealch.mobile')`; if that rejects, `Linking.openURL('https://play.google.com/store/apps/details?id=app.ealch.mobile')` (package from `app.json:26`). Never `requestReview` | `accessibilityRole="link"`, label = "Rate Ealch, opens the Play Store" |

**Rate row open failure:** if both `openURL` calls reject, a quiet inline line appears directly below the Rate row (`marginTop: 4`, `marginBottom: 8`, inside the Play Store section, between the Rate row and the section's end; the Rate row's own `marginBottom: 24` is then applied to the wrapper that holds row and line): `TX role="meta" color={t.txMuted}` "Could not open the Play Store. Try again later." in a `View` with `accessibilityLiveRegion="polite"`. No icon, no danger color, no dialog. It clears on the next tap of the row or when Settings unmounts.

Trailing glyph: `Icon chevronRight` (14 px, `t.txNonText`) on both rows. Neither row is in the danger zone and neither uses accent fill.

---

## S3. Crash fallback (ErrorBoundary)

`ErrorScreen.tsx` is deliberately provider-free (`ErrorScreen.tsx:3-8`: no `useTheme`, `useT`, router, or fonts), because it renders when those may have failed. The report entry must preserve that.

### What is wrong with the current layout

- The root is a non-scrolling `View` with `flex: 1` and fixed `paddingTop: 96` (`ErrorScreen.tsx:62`), and the "Technical details" box is a `ScrollView` with `flex: 1` (`ErrorScreen.tsx:115-117`) that takes all remaining height. A text field added to that root has nowhere to go when the keyboard opens.
- Every `Text` uses `maxFontSizeMultiplier` together with an absolute `lineHeight` (e.g. `ErrorScreen.tsx:72-73`: `maxFontSizeMultiplier={1.25}` with `fontSize: 32, lineHeight: 38`). That is exactly the pattern `type.logic.ts:64-80` identifies as the cause of dropped word endings at font scale 1.3. **Do not reuse it.** Rule C7 applies.

### Layout tree (replaces `ErrorScreen.tsx:61-143`)

```
View  root                         flex:1, backgroundColor: bg
└─ KeyboardAvoidingView            flex:1, behavior="padding" (both platforms), keyboardVerticalOffset={0}
   └─ ScrollView                   flex:1, keyboardShouldPersistTaps="handled", ref=scrollRef
      contentContainerStyle        flexGrow:1, paddingHorizontal:28, paddingTop:64,
                                   paddingBottom: (initialWindowMetrics?.insets.bottom ?? 48) + 24
      ├─ Text tag                  "ERROR"
      ├─ Text title                "Something broke."
      ├─ Text body                 new body (no em dash)
      ├─ Pressable retry           filled tx, minHeight 54 (unchanged look, the single filled button)
      ├─ Pressable report          outline, minHeight 54, marginTop 12. Hidden once the panel is open
      ├─ View panel (when open)    marginTop 24, gap 12, onLayout -> panelY
      │  ├─ Text panelTitle        accessibilityRole="header"
      │  ├─ Text categoryLabel     "CATEGORY" (meta, uppercase)
      │  ├─ Text categoryValue     "App froze or crashed" (read-only text, not a control)
      │  ├─ Text detailsLabel      "Details (optional)"
      │  ├─ TextInput              multiline, minHeight 120, maxLength 1000, textAlignVertical top,
      │  │                         borderWidth 1, borderColor dim, radius 14, padding 14, bg surface
      │  ├─ Text counter           "{n}/1000", right-aligned
      │  ├─ Text status            live region (sending / sent / saved / error)
      │  └─ Pressable send         outline (borderWidth 1.5, tx), minHeight 54
      ├─ Text detailsHeading       "TECHNICAL DETAILS", marginTop 32
      └─ View details              radius 14, border line, bg surface, padding 14
         └─ Text (selectable)      version + formatForReport(entry), full height, no inner ScrollView
```

- The details box is a plain `View`, not a `flex: 1` `ScrollView`; the outer ScrollView scrolls the whole screen. It sits **below** the panel so the panel is never pushed off screen by a long stack.
- `initialWindowMetrics` comes from `react-native-safe-area-context` (`package.json:41`) and is static, so it needs no provider. The fallback of 48 covers 3-button navigation.
- On `TextInput` focus, call `scrollRef.current?.scrollTo({ y: panelY - 16 })` so the field, counter and Send are in view above the keyboard.
- Proof target: Pixel 9, 3-button navigation, font scale 1.3, keyboard open: the TextInput, the counter and the Send button are all fully visible with no clipped text.

### Text metrics (rule C7)

Every `Text` and the `TextInput` in `ErrorScreen` uses `allowFontScaling={false}` and takes `fontSize` and `lineHeight` from `typeMetrics({ role, fontScale: PixelRatio.getFontScale() })` (`type.logic.ts:87-95`, pure, no RN or provider imports). Roles: tag `meta`, title `titleLg` (replaces the hand-set 32/38), body `body`, buttons `bodyLg`, panel labels and counter `meta`, input `body`, details `meta`. This applies to the existing text in the file too, since the same layout change touches all of it. No `maxFontSizeMultiplier` anywhere in the file after this change.

### Copy changes in `COPY` (`ErrorScreen.tsx:14-31`)

- `body` FR (`:18`) and EN (`:26`) each contain an em dash today. Replace with the copy-table "Crash body" row.
- `help` FR (`:21`) and EN (`:29`), "send a screenshot of this screen", is **removed**, together with its `Text` (`:135-141`). The "Report this problem" button replaces it.
- The version fallback `'—'` at `ErrorScreen.tsx:59` becomes `'?'` (C1).
- New `COPY` keys, FR and EN (values in the copy table): `report`, `panelTitle`, `categoryLabel`, `categoryValue`, `detailsLabel`, `placeholder`, `send`, `sending`, `sent`, `saved`, `error`, `saveFailed`.

### Behaviour

- Tapping "Report this problem" opens the panel inline (not a route, not a formSheet), hides the report button, and moves screen-reader focus to `panelTitle` (`AccessibilityInfo.setAccessibilityFocus`).
- The panel reuses the pure `*.logic.ts` payload builder and the outbox from S1 but none of S1's themed components. The "You can contact me" checkbox is omitted (no session read is guaranteed).
- States reuse the S1 wording: sending, sent, saved (offline, 429 and 5xx all show "saved"), error (4xx). The status line uses the screen's `tx` colour, never `danger`. While sending, the Send `Pressable` is disabled with `accessibilityState={{ disabled: true, busy: true }}` and shows an `ActivityIndicator` (size 18, colour `tx`) before its unchanged label.
- The S1 double-submit guard and 15 s send timeout apply here unchanged (a timeout shows "saved").
- **Outbox write failure:** if writing the report to the outbox fails (the D-38 claim step), nothing is sent. The panel keeps the typed text, shows the `saveFailed` copy ("Outbox write failure" row) in the status line in `tx` with `accessibilityLiveRegion="assertive"`, and re-enables Send.
- If the planner proves `router.push('/report-problem?category=crash')` works from the boundary on device, it may use the sheet, but the inline panel stays as the fallback.
- The raw error message and stack are part of the report; the learner sees only the existing "Technical details" text.
- Light-mode tag colour: `#E5484D` on `#FAF7F0` measures 3.66:1 (fails 4.5:1 for 12 px text). Use `#C2412F` in light mode (4.80:1); dark mode keeps `#E5484D` (5.00:1 on `#0B0C0E`).

---

- **After sent or saved (crash panel):** the Send button is hidden, the status line stays showing the sent or saved text, the typed text is cleared, and the panel offers no second send. The learner still has the existing restart action. Focus moves to the status line.

## S4. STT "hears nothing" / mic failure (7 surfaces)

One shared component, `ReportProblemLink` (N4):

- Props: `category: 'audio' | 'grading'`, `screen: string`, `itemId?: string`, `lessonId?: string`, `a11yLabel: string`, `align?: 'center' | 'flex-start' | 'flex-end'` (default `'center'`).
- Renders a `Press` with `minHeight: 44`, `justifyContent: 'center'`, `paddingHorizontal: 8`, `alignSelf: align`, `accessibilityRole="button"`, `accessibilityLabel={a11yLabel}`. Inside, `TX font="semi" role="meta" color={t.txSecondary}`: "Report a problem". No icon, no accent, no underline.
- Opens S1 with the given params.
- Always placed **on its own line directly below the failure message**, so it never shares a row with, or competes in width against, retry, skip or continue. It never replaces or outranks those actions.
- Rendered only while the failure message is showing; hidden while listening or recording.

It appears on every no-speech result and every mic error (permission denied, unavailable, recorder error) with no failure-count condition (D-22). `category="audio"`, `a11yLabel` = "Report an audio problem".

| # | File | Failure message today | `ReportProblemLink` placement | `screen` / ids |
|---|------|------------------------|-------------------------------|----------------|
| 1 | `app/speak.tsx` | Card text at `:707-719` (`micDenied` / `micUnavail` / `micCantHear` / `micNoSpeechHint` / `micNoSpeech`). The bottom caption at `:798-802` repeats `micCaption` (`:376-387`) | Directly below the `TX` at `:709-719`, inside the same branch, `align="flex-start"`, `marginTop: 4`, above the counter/actions row at `:720`. **Not** under the bottom caption (one link per screen) | `screen: 'speak'`, `itemId` = current card id |
| 2 | `app/voiceflash.tsx` | `TX role="meta"` at `:524-530` | Directly below it, `align="center"` | `screen: 'voiceflash'`, `itemId` = card id |
| 3 | `app/sentence.tsx` | `TX role="label"` inside the result card at `:517-519` | Inside the same card, below that text, `align="center"` | `screen: 'sentence'`, `itemId` = sentence id |
| 4 | `app/onboarding.tsx` | `micError` in a polite live region at `:635-639` (`obMicDenied` / `micUnavail` / `obMicTransient`, built at `:275-278`) | Below the live-region `View`, `align="flex-start"`. Outside the live region so it is not re-announced | `screen: 'onboarding'` |
| 5 | `src/components/MissionRich.tsx` | `attempt.kind === 'unheard'` block at `:1913-1929` (`rpNotHeard` / `micDenied` / `rpMicBlocked`). **C7 hazard, existing:** the non-silent branch sets an absolute `lineHeight: 19` (`:1921`). Decision: that `TX` is **left untouched** in this phase (shared file under the D-37 guard, and not new text); it goes on the backlog for a `typeMetrics` fix. The link is a separate sibling below it, so the link itself is unaffected | Inside the block's `View` (`:1914`), as a sibling **after** the `TX`, never inside it. `align="flex-end"` when `attempt.reason === 'silent'` (matches the right-aligned message), else `"flex-start"` | `screen: 'lesson'`, `lessonId`, `itemId` = the D-41 card id `${L.id}#${section.id}.c${sub}` |
| 6 | `src/components/WordPractice.tsx` | `captureErr` `TX` at `:277-280` inside a `minHeight: 20` centered container (`:272`) | Below the `captureErr` `TX`, `align="center"`. Remove `numberOfLines={2}` from that `TX` (`:278`, N9) | `screen` = host screen, `itemId` = word |
| 7 | `app/roleplay.tsx` | `rpNotHeard` in the learner bubble at `:376-379` (`m.heardOk === false`) | Below the bubble, `align="flex-end"` (learner side), **only under the most recent unheard turn**; earlier turns in the transcript do not carry it | `screen: 'roleplay'`, `itemId` = scenario id |

---

## S5. Exam grading-failure surfaces (`audio-failed`, `not-graded`, `examShortUnchecked`)

There is **no "Retry grading" control** in `app/exam-report.tsx`. What exists: `noBandNote(reason: NoBandReason, T)` (`exam-report.tsx:575`; `case 'audio-failed'` at `:557`, `case 'not-graded'` at `:558`), a switch over `NoBandReason` (`src/utils/nclc.logic.ts:83`). `SectionRow` computes the note and its colour at `:318-319` and renders it at `:341-343`; `DelfRow` computes it at `:511` and renders it at `:534-539`. Both failure reasons are already coloured `t.danger` (`:319`, `:536`).

Per locked D-22 (clarified 2026-10-01), **both** `NoBandReason` failures pre-fill "Grading felt wrong"; `audio-failed` does NOT pre-fill "Audio or voice". D-44 adds a third surface that is not a `NoBandReason`: `T.examShortUnchecked` (typed DALF C1 answers the grader could not check). It also pre-fills "Grading felt wrong". One label, "Report a grading problem", covers all three.

| `NoBandReason` | Existing note (`noBandNote`) | Report action | Pre-filled category | `a11yLabel` |
|----------------|------------------------------|---------------|---------------------|-------------|
| `'not-graded'` | `T.examUngraded` (`:578`) | `ReportProblemLink` "Report a problem" | `grading` ("Grading felt wrong") | "Report a grading problem" |
| `'audio-failed'` | `T.examAudioFailed` (`:577`) | `ReportProblemLink` "Report a problem" | `grading` ("Grading felt wrong") | "Report a grading problem" |
| `examShortUnchecked` (DelfRow only; `unchecked > 0`; `uncheckedBySkill` at `exam-report.tsx:106-115`, rendered at `:544-546` as `T.examShortUnchecked.replace('{n}', ...)`) | `T.examShortUnchecked` ("Typed answers not checked: {n}. They count as 0 for now.") | `ReportProblemLink` "Report a problem", **below that line** | `grading` ("Grading felt wrong") | "Report a grading problem" |
| `practice`, `not-sat`, `not-answered`, `no-scoring`, `below-scale`, or scored with `unchecked === 0` | unchanged | none | none | none |

Placement: the row's note column is capped at `maxWidth: 140` (`:341`, `:537`), so the link does not go there. The row container (`:322-327` in `SectionRow`, the matching `View` in `DelfRow`) becomes a column: the existing horizontal row unchanged on top, and below it, for the three surfaces above, `ReportProblemLink` with `align="flex-start"`, `marginTop: 4`, inside the same card. The card's padding (16) and `marginBottom: 10` are unchanged.

**One link per row.** A `DelfRow` can show both a no-band note (`audio-failed` or `not-graded`) and the `examShortUnchecked` line. It still renders exactly **one** `ReportProblemLink`, once, below the whole content block, never one per message. Its params are identical in every case, so nothing is lost. The `examShortUnchecked` link also appears when the épreuve **has a mark** (`e.mark !== null`), because the unchecked answers counted as 0 and the mark may be understated.

Params: `screen: 'exam-report'`, `itemId: \`${paperId}:${skill}\`` (`paperId` from `exam-report.tsx:62`, passed to both rows as a new prop, N6), the same for all three surfaces. The link does not appear on scored sections with `unchecked === 0`; a learner who disputes such a score uses the Settings row.

---

## S6. Lesson header overflow menu (D-23)

### Why the flag cannot be a fourth icon

The `FocusHeader` row (`ui.tsx:291` onward) is: close (38 px visible, `hitSlop` 8, `ui.tsx:317-336`), title (`TX ... numberOfLines={1} style={{ flex: 1, marginHorizontal: 8 }}`, `ui.tsx:338-348`, `numberOfLines` at `:344`), then a right cluster with `gap: 8` holding `extra` and the gear (38 px, no `hitSlop`, `ui.tsx:355-369`). In `app/lesson.tsx:768-790` the `extra` slot already holds the `LanguageChip` at B1+ (`minHeight 32`, label capped at `maxScale 1.3`, `LanguagePanel.tsx:43-62`), `SheetLink` (32 px, `hitSlop` 8, `ReferenceSheet.tsx:43-53`) and the 32 px "?" help button (`lesson.tsx:780-789`, `onPress` at `:782`, `hitSlop` 8). On a 412 dp-wide Pixel 9 at B1+ and font scale 1.3 the title is already down to about 108 dp. A fourth 44 px control would take most of what is left.

### Design: one overflow button replaces the "?" (N2)

- Replace the "?" `Press` at `lesson.tsx:780-789` with `HeaderMenuButton`: visible circle **36x36** (radius 18, `borderWidth: 1`, `t.line(14)`), centered `Icon more` 16 px `t.txSecondary`. The 36 px size is **deliberately 4 dp larger** than its 32 px neighbours (`SheetLink` and the "?" it replaces): 36 is the smallest visible size that reaches a 44x44 target without overlapping any neighbour's touch area. A 32 px circle would need left slop, and that slop would overlap `SheetLink`'s 8 dp right slop.
- **Hit target 44x44:** `hitSlop={{ top: 4, bottom: 4, left: 0, right: 8 }}`. Right 8 fills the 8 dp gap to the gear exactly (the gear has no `hitSlop`). Left 0 because `SheetLink`'s own `hitSlop` 8 already reaches this button's left edge; this avoids the overlapping touch areas the "?" has today. Net cost to the title: 4 dp.
- `accessibilityRole="button"`, `accessibilityLabel` "More options", `accessibilityState={{ expanded: menuOpen }}`.
- Tapping opens `HeaderMenu`: a transparent `Modal` (`onRequestClose` closes it, so Android Back works) with a full-screen dismiss `Press` (no visible scrim) and a card anchored top-right just below the header (`top: headerHeight + 4`, `right: 20`). **`headerHeight`** is measured with `onLayout` on the `View` that wraps `FocusHeader` at `lesson.tsx:763`; that View already carries `paddingTop: insets.top`, so the measured height includes the status-bar inset. The `Modal` sets `statusBarTranslucent` on Android, so its origin is the top of the screen, the same origin as the edge-to-edge app content. `insets.top` is therefore counted once, inside `headerHeight`, and never added again. On iOS a full-screen `Modal` also starts at the screen top. Card: `t.sheet` background, radius 16, `borderWidth: 1`, `t.line(12)`, `t.cardShadow`, `minWidth: 240`, `maxWidth: windowWidth - 40`, `paddingVertical: 4`, `accessibilityViewIsModal`.
- Menu rows: `Press`, `minHeight: 48`, `paddingHorizontal: 16`, `paddingVertical: 10`, `flexDirection: 'row'`, `gap: 12`, `alignItems: 'center'`; leading icon 18 px `t.txSecondary` in a fixed 18 px box; label `TX role="body" color={t.txPrimary}` inside a `View` with `flex: 1` (wraps, C5 and C6).
  1. **Help:** label `T.lkHelp` ("How lessons work", `strings.ts:1201`; FR "Comment fonctionnent les leçons", `:690`), no icon box content (empty 18 px spacer keeps labels aligned), action = the existing `setShowKeyOverride(true)` (`lesson.tsx:782`).
  2. **Report a problem with this item:** icon `flag`, label and `accessibilityLabel` "Report a problem with this item". Action: close the menu, then push S1 with `category=content`, `screen: 'lesson'`, `lessonId: L.id`, and `itemId` =
     - on a mission page, the **D-41 card id** `${L.id}#${section.id}.c${lastSub.current ?? 1}`: `section` is `L.sections[lastFullIx.current]` (`lastFullIx` set at `lesson.tsx:573`), `section.id` is the authored section id (100% coverage), and `lastSub` (`lesson.tsx:423`, set by `onLessonSubIndexChange` at `:595`) is the 1-based card index, `null` meaning card 1. Never the mission-level `#s{ix}.0`;
     - on a quiz question page, the `key` from `onQuizItemChange` (N5), the D-40 hybrid key, used as is.
- Row 2 is rendered only when `onPageKindChange` last reported `'section'`, or `'quiz'` with a non-null `key` from `onQuizItemChange`. On `'cover'`, `'act'` (act opener cards), `'image'`, and the quiz result card (`key === null`) the menu holds Help only.
- Focus: on open, screen-reader focus goes to the first row; on close (any path), focus returns to `HeaderMenuButton` (the 08.1-01 focus-return pattern, commit `55f3755`).
- While `answerPending` is `true`, row 2 stays visible but is **disabled**: `accessibilityState={{ disabled: true }}`, opacity 0.4, no `onPress`. The overflow button itself always responds, so Help is always reachable and the header never shifts. Opening the menu or the sheet never pauses scoring and never marks a question answered; on dismiss the learner is on the same page in the same state.
- No gesture alternative is introduced and none is removed.
- Flag scope stays missions and quiz questions (not flashcards, dictation, roleplay or exam items; deferred).

### Title behaviour at font scale 1.3

- The title is the **only** element in the header that may shrink or truncate. It keeps `numberOfLines={1}` (`ui.tsx:344`) and truncates at the tail with a visible `…`. **No accessibility label is added:** TalkBack and VoiceOver read the full text of an ellipsized `Text`, so the full lesson tag is already announced. This is why `FocusHeader` needs no new prop.
- Close, `LanguageChip`, `SheetLink`, `HeaderMenuButton` and gear are fixed-size and must **never** be clipped, squeezed or pushed off screen. React Native's default `flexShrink: 0` already protects them; no style on them may set `flexShrink` or `flex`.
- The `LanguageChip` label must never be clipped: it keeps its `maxScale={1.3}` cap (`LanguagePanel.tsx:60`).
- No change to `FocusHeader` itself. The `flex: 1` on its title `TX` is an inherited exception to C5, acceptable only because the one-line ellipsis is visible.
- The gear's 38 px target (no `hitSlop`) is an existing gap, out of scope here; do not add a gear `hitSlop` in this phase, because it would overlap the overflow button's right slop.

---

## S7. Profile "Your report" row and accuracy StatCard

- On `app/profile.tsx`, one row linking to `/report`. Reuse the Settings row geometry from S2 (`minHeight: 58`, radius 16, `t.card`, `t.line(10)`, chevron), including the sub style (`TX role="label" color={t.txSubtle}`). Icon `book` 18 px `t.txSecondary`. Title "Your report", sub "Your accuracy and the words to review." **Insertion point:** directly after the primary stats block (`profile.tsx:305-309`, StatCards at `:306-308`), so it sits under the Accuracy card it explains; this is well before the Sign out `Press` at `:550`. `accessibilityRole="button"`, label = title, action `router.push('/report')`. Shown to guests too (Le Rapport is local data). The 07.1 trail and home screens are not touched.
- **Accuracy StatCard must agree with the Le Rapport ring.** Today `profile.tsx:120-122` computes `graded = attempts.length` and `correct` over all attempts, including `exam-review`. Change both to use `headlineAttempts(attempts)` (N7), the same helper the ring uses, so a learner never sees two different accuracy numbers. `wordsMet` (`profile.tsx:119`, `itemsPracticed(attempts)`) is unchanged: it counts words met, not accuracy. With zero non-`exam-review` attempts the card shows `'—'` as it does today for a fresh install.

---

## S8. Le Rapport fixes (`app/report.tsx`)

| Fix | Contract |
|-----|----------|
| Route rename (D-30) | `/feedback` becomes `/report`. Update `roleplay.tsx`, `speak.tsx`, deep links, analytics screen name, and the `_layout.tsx` registration. A temporary redirect from `/feedback` to `/report` is allowed for stale deep links. The report sheet route is `/report-problem` and must never be confused with `/report` |
| Activity labels (R1, D-28) | Extend `drillNames` to all 13 `Activity` values (table below). Type becomes `Record<Activity, string>` so a missing key fails typecheck. Add a test that iterates every `Activity` value and asserts a non-empty FR and EN name that is not the raw id |
| Headline accuracy (R2, D-27) | Compute the ring percent, the `correct / total` figure and the "N attempts" tally from `headlineAttempts(attempts)` (N7). The per-drill list omits `exam-review`. `exam-review` attempts still feed the weak-words list. If after filtering there are zero attempts, show the existing empty state. No visual change to the layout. Profile's StatCard uses the same helper (S7) |
| Ring a11y (R5, D-31) | Wrap the ring (`View` 120x120 plus its caps label) in one accessible element: `accessible`, `accessibilityRole="text"` (not `progressbar`, it is not a scrubber), `accessibilityLabel` = "accuracy, {n} percent" (FR: "précision, {n} pour cent"). The inner number `TX` and the caps label get `importantForAccessibility="no-hide-descendants"` / `accessibilityElementsHidden` so TalkBack reads one phrase. SVG is decorative |
| Weak-item links (R6) | Behavior only: rows with an anchor push `/lesson?key=...&at=anchor` and must land on the right block under the Concept C spine. Visual unchanged. Row keeps `accessibilityRole="button"` and gets a label: "{french item}, {correct} of {seen} correct, open the lesson" (FR equivalent). French item text keeps `lang="fr"` |
| Component test (R4) | Render with a populated log and an empty log; assert ring label, exam-review exclusion, all 13 labels resolve, and that Profile's StatCard and the ring compute the same percent from the same log |

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

The six keys that exist today (`strings.ts:64`, values at `:527` FR and `:1038` EN) keep their strings unchanged: `flashcards`, `voiceflash`, `dictation`, `sentence`, `roleplay`, `placement`. The seven new keys are `lesson`, `speak`, `player`, `review`, `narrated`, `exam`, `exam-review`. `exam-review` is named for completeness and the test, but is not rendered as a drill row (D-27). Row label wraps; no truncation.

---

## Spacing Scale

All new work uses the existing four-point rhythm.

| Token | Value | Phase 10 usage |
|-------|-------|----------------|
| xs | 4 px | Icon to text gap, label to sub gap, link `marginTop` under a failure message, Rate-row failure line |
| sm | 8 px | Gap between category rows and Settings rows, counter spacing, header cluster gap (inherited) |
| md | 16 px | Card and row padding, gap between form groups, footer top padding, menu row horizontal padding |
| lg | 24 px | Section separation inside the sheet, Settings row bottom margin, crash panel top margin |
| xl | 32 px | Gap between the intro line and the "WHAT WENT WRONG" label, the top margin of the sent/saved block, crash "Technical details" top margin |
| 2xl | 48 px | Sent-state confirmation top spacing |
| 3xl | 64 px | Crash screen top padding (replaces the fixed 96) |

**Exceptions (functional or inherited, not spacing tokens):** touch targets 44 px minimum (close button, `HeaderMenuButton` 36 visible plus slop, `ReportProblemLink`, expandable row, checkbox row at 52, category rows at 52, menu rows at 48); existing `Button` height 54 px; Settings row `minHeight` 58 and `paddingVertical` 10, copied from the Licences row; 12 px padding in the 4xx error block and category row vertical padding (existing Ealch card rhythm); 28 px and 14 px in ErrorScreen (inherited); text field min height 120. Use `minHeight`, wrapping and scrolling instead of fixed heights on any text-bearing element.

---

## Typography

New copy uses a subset of the established `TX` ramp (`type.logic.ts:20-31`). Four sizes, two weights.

| Role | TX role | Size | Weight | Line height | Phase 10 usage |
|------|---------|------|--------|-------------|----------------|
| Meta | `meta` | 12 px | Semibold for section label and quiet text actions, Regular for the rest | 1.35 | "WHAT WENT WRONG", counter, category hint, status lines, contact sub-line, `ReportProblemLink`, Rate-row failure line |
| Label | `label` | 13 px | Regular | 1.4 | Settings and Profile row subs only, matching the adjacent Licences sub (`settings.tsx:602`) |
| Body | `body` | 15 px | Regular; Semibold for row titles | 1.5 | Intro, category labels, details input, checkbox label, "What's included" list, 4xx error text, sent/saved body, menu rows |
| Title | `titleLg` | 21 px | Semibold (Instrument Sans, `font="semi"`) | 1.25 | Sheet title, sent/saved heading, crash screen title |
| Display (inherited, not new) | `display` | 34 px (Serif regular) | Regular | 1.1 | Existing "Le Rapport" heading only; no new display text. Not counted among the new-type sizes. Button labels (16 px) are inherited from `Button` |

Weights: Instrument Sans Regular (400) and Semibold (600) only. New copy uses exactly four sizes, 12, 13, 15 and 21, plus the inherited 34; 13 is used only for the two row subs that sit next to the existing 13 px Licences sub. `Button` labels stay on the inherited `bodyLg` 16 px (`ui.tsx:152`). Existing 13 px text that Phase 10 does not author (the `FocusHeader` title, the existing Licences row sub-line, Le Rapport's own `label` text, the exam row notes) is inherited and is not changed. Rules C5, C6 and C7 apply to every new text node. Verified requirement: no clipped word endings at OS font scale 1.3 and 1.5 for the category labels, intro, "What's included" list, counter, sent confirmation, menu rows, every `ReportProblemLink`, and the full crash screen.

---

## Color

Everything resolves through `useTheme()` so Automatic, Dark, Light and the selected accent all work. ErrorScreen keeps its own provider-free values.

| Role | Dark | Light | Usage |
|------|------|-------|-------|
| Dominant (60%) | `t.bg` `#0B0C0E` / sheet `t.sheet` `#13161B` | `t.bg` `#F5F3EE` / sheet `t.sheet` `#FFFFFF` | Sheet background (`contentStyle`), screens behind it, menu card |
| Secondary (30%) | `t.card` `#101216`, `t.input` `#111318` | `t.card` / `t.input` `#FFFFFF` | Category rows (unselected), details field, "What's included" block, Settings rows |
| Accent (10%) | `t.acc` (default Riviera `#2FD6C1`); `t.accTx` = `t.acc` in dark | `t.acc` for the Send fill only; `t.accTx` (accent blended 50% into `#17181B`) for every selection indicator | Reserved list below |
| Destructive / error | `t.danger` `#FF6B5C` | `t.danger` `#C2412F` | 4xx block border and tint, counter at 950+; never on Send, never as body text on a tint |

**Accent reserved for:** (1) the Send and sent-state Close primary `Button` fill (`t.acc`, label `t.accInk`), (2) the selected category row border, radio border, radio dot and check (`t.accTx`), (3) the checked contact checkbox fill and border (`t.accTx`), (4) the check glyph in the sent confirmation circle (`t.accTx` on `t.accA(14)`), (5) Le Rapport's existing ring stroke and "Back" empty-state button (unchanged). Not used for: the overflow button, the menu, Settings row icons, the close button, the "What's included" row, `ReportProblemLink`, or the crash screen.

Destructive is not used for any action. There is no destructive action in this phase.

### Measured contrast

Computed from `src/theme/palette.ts` (DARK `:18-32`, LIGHT `:34-49`, derived tokens `:99-125`) with `alpha()` composited over the named surface, WCAG 2.x relative luminance. Text needs 4.5:1 (1.4.3); non-text UI needs 3:1 (1.4.11). Accent rows give the worst of the four accents (Riviera, Corail, Champagne, Nuit).

| Pair (foreground / background) | Used for | Dark | Light | Need | Result |
|--------------------------------|----------|------|-------|------|--------|
| `txPrimary` / `sheet` | titles, menu rows, 4xx text base | 16.21 | 17.75 | 4.5 | pass |
| `txSecondary` / `sheet` | "What's included" list | 8.78 | 8.75 | 4.5 | pass |
| `txSecondary` / `card` | Settings icons, `ReportProblemLink` on cards | 8.97 | 8.75 | 4.5 | pass |
| `txSecondary` / `bg` | `ReportProblemLink` on screens, overflow glyph | 9.19 | 8.22 | 4.5 | pass |
| `txSecondary` / `card2` | `ReportProblemLink` near roleplay bubbles | 8.73 | 8.49 | 4.5 | pass |
| `txMuted` / `sheet` | intro, hint, status, contact sub, counter | 6.09 | 5.70 | 4.5 | pass |
| `txMuted` / `card` | Rate failure line | 6.17 | 5.70 | 4.5 | pass |
| `txSubtle` / `card` | Settings and Profile row subs | 4.58 | 4.80 | 4.5 | pass |
| `txSubtle` / `sheet` | "WHAT WENT WRONG" label | 4.56 | 4.80 | 4.5 | pass |
| `txSubtle` / `input` | details placeholder | 4.58 | 4.80 | 4.5 | pass |
| `danger` / `sheet` | counter at 950+ | 6.48 | 5.13 | 4.5 | pass |
| `danger` / `dangerA(12)` over `sheet` | (old 4xx text) | 5.54 | **4.32** | 4.5 | **fail, removed** |
| `txPrimary` / `dangerA(8)` over `sheet` | **new** 4xx text | 14.70 | 15.85 | 4.5 | pass |
| `danger` border / `sheet` | 4xx block border | 6.48 | 5.13 | 3.0 | pass |
| `accInk` / `acc` (worst: Corail) | Send label on accent fill | 6.86 | 6.86 | 4.5 | pass |
| `accTx` / `accA(10)` over `card` (worst) | selected check, radio dot, selected border inner edge | 5.94 (Corail) | 4.99 (Riviera) | 3.0 | pass |
| `accTx` / `sheet` (worst) | selected border outer edge, checkbox fill edge | 6.48 (Corail) | 5.34 (Riviera) | 3.0 | pass |
| `sheet` glyph / `accTx` fill (worst) | check inside checked checkbox | 6.48 (Corail) | 5.34 (Riviera) | 3.0 | pass |
| `accTx` / `accA(14)` over `sheet` (worst) | sent/saved circle glyph | 5.37 (Corail) | 4.87 (Riviera) | 3.0 | pass |
| `txPrimary` / `accA(10)` over `card` (worst) | selected row label | 14.12 | 16.05 | 4.5 | pass |
| `acc` raw / `sheet` (worst) | (old selected border, dot, checkbox fill) | 6.48 | **1.82** (Riviera) | 3.0 | **fail, replaced by `accTx`** |
| `line(30)` / `card` | (old radio and checkbox borders) | **2.68** | **1.95** | 3.0 | **fail, replaced by `txNonText`** |
| `txNonText` / `card` | radio, checkbox, chevrons | 3.55 | 3.38 | 3.0 | pass |
| `txNonText` / `sheet` | details field border, chevrons | 3.55 | 3.38 | 3.0 | pass |
| `input` / `sheet` | field fill vs sheet (why the border must carry 3:1) | 1.02 | 1.00 | n/a | border required |
| `line(10)` / `card` | unselected row and Settings row borders | 1.26 | 1.28 | n/a | decorative only; radio, text and chevron identify the controls |
| ErrorScreen `tx` / `bg` | title, input text | 17.49 | 16.59 | 4.5 | pass |
| ErrorScreen `dim` / `bg` | body, labels, counter, status | 6.24 | 5.54 | 4.5 | pass |
| ErrorScreen `dim` / `surface` | details text, input placeholder | 6.05 | 5.36 | 4.5 | pass |
| ErrorScreen `bg` / `tx` | retry label on filled button | 17.49 | 16.59 | 4.5 | pass |
| ErrorScreen `dim` border / `bg` | TextInput border | 6.24 | 5.54 | 3.0 | pass |
| ErrorScreen tag `#E5484D` / `bg` | (old light tag) | 5.00 | **3.66** | 4.5 | **fail, light uses `#C2412F`: 4.80** |

Disabled Send (opacity 0.4) is exempt from 1.4.3 as an inactive control; the hint line states why it is disabled. The Send fill's own edge against the sheet (Riviera light 1.82) is not a 1.4.11 failure because the 4.5:1 label identifies the button.

---

## Copywriting Contract

Rules C1 to C8 above apply to every row. Label separators "·" are fine. French first. French text rendered through `TX` gets `lang="fr"` only where the learner is reading authored French content (interface FR copy follows existing screens). Apostrophes are straight `'`, as in `strings.ts`.

`[NNBSP]` = U+202F narrow no-break space. `[NBSP]` = U+00A0 no-break space. The French column contains the real characters.

**Writing these in `strings.ts`:** every U+202F and U+00A0 in a French string is written as the escape `\u202F` or `\u00A0` inside the string literal, never as the raw character, so editors, formatters and agent tools cannot silently turn it into a plain space. Example: `"Que s'est-il passé\u202F?"`. The D-36 test checks the resulting string value.

| Element | French | NBSP marks (FR) | English |
|---------|--------|-----------------|---------|
| Sheet title | Signaler un problème | none | Report a problem |
| Intro (default) | Dites-nous ce qui ne va pas. Nous lisons chaque message. | none | Tell us what is wrong. We read every report. |
| Intro (content flag) | Vous signalez une erreur dans cet élément. | none | You are reporting a mistake in this item. |
| Category group label | QU'EST-CE QUI NE VA PAS | none | WHAT WENT WRONG |
| Cat: audio | Audio ou voix | none | Audio or voice |
| Cat: grading | La correction semble fausse | none | Grading felt wrong |
| Cat: content | Erreur de contenu | none | Content mistake |
| Cat: crash | L'appli a planté ou s'est figée | none | App froze or crashed |
| Cat: payment | Paiement ou accès | none | Payment or access |
| Cat: other | Autre chose | none | Something else |
| Category hint (none chosen) | Choisissez ce qui ne va pas pour envoyer | none | Choose what went wrong to send |
| Details label | Détails (facultatif) | none | Details (optional) |
| Details placeholder | Que s'est-il passé ? | `passé[NNBSP]?` | What happened? |
| Counter | {n}/1000 | none | {n}/1000 |
| What's included (collapsed) | Ce qui est envoyé : version, écran, erreurs récentes. Jamais vos réponses ni vos enregistrements. | `envoyé[NBSP]:` | What's included: app version, screen, recent errors. Never your answers or recordings. |
| Included list 1 | Version de l'appli, mise à jour et plateforme | none | App version, update and platform |
| Included list 2 | L'écran où vous étiez, et l'identifiant de la leçon ou de l'élément | none | The screen you were on, and the lesson or item id |
| Included list 3 | Les 10 derniers messages d'erreur de cette session | none | The last 10 error messages from this session |
| Included list 4 | Modèle du téléphone, taille du texte, thème clair ou sombre | none | Phone model, text size, and light or dark theme |
| Included list 5 | Votre e-mail, seulement si vous cochez « Vous pouvez me contacter » | `«[NNBSP]Vous`, `contacter[NNBSP]»` | Your email, only if you tick "You can contact me" |
| Included list 6 | Jamais : vos réponses, ce que vous avez dit, vos enregistrements | `Jamais[NBSP]:` | Never included: your answers, what you said, or your recordings |
| Contact checkbox | Vous pouvez me contacter | none | You can contact me |
| Contact sub | Nous utilisons l'e-mail de votre compte pour répondre, seulement si vous cochez cette case. | none | We use your account email to reply, only if you tick this box. |
| Primary CTA | Envoyer le signalement | none | Send report |
| Sending (status line) | Envoi en cours… | `…` is U+2026 | Sending… |
| Sent heading | Envoyé. Merci. | none | Sent. Thank you. |
| Sent body | Votre signalement nous est bien parvenu. | none | Your report reached us. |
| Queued heading (offline, 429, 5xx) | Enregistré | none | Saved |
| Queued body (offline) | Il sera envoyé dès que vous serez de nouveau en ligne. | none | It will send when you are back online. |
| Queued body (429) | Nous ne pouvons pas l'envoyer aujourd'hui. Il est enregistré et partira demain ou plus tard. | none | We cannot send it today. It is saved and will go tomorrow or later. |
| Queued body (5xx) | Nous n'avons pas pu l'envoyer pour le moment. Il est enregistré et nous réessaierons plus tard. | none | We could not send it right now. It is saved and we will try again later. |
| 4xx error | Nous n'avons pas pu envoyer ce signalement. Vérifiez le texte et réessayez. | none | We could not send this report. Check the text and try again. |
| 4xx retry CTA | Réessayer | none | Try again |
| Close (header button and sent/saved button) | Fermer | none | Close |
| Settings row title | Signaler un problème | none | Report a problem |
| Settings row sub | Quelque chose ne marche pas ? Dites-le-nous. | `pas[NNBSP]?` | Something broken or wrong? Tell us. |
| Play Store section heading (Android only; rendered upper-case by `SectionHead`) | Play Store | none | Play Store |
| Rate row title (Android only) | Noter Ealch | none | Rate Ealch |
| Rate row sub | Ouvre la page du Play Store. | none | Opens the Play Store page. |
| Rate row a11y label | Noter Ealch, ouvre le Play Store | none | Rate Ealch, opens the Play Store |
| Rate row open failure | Impossible d'ouvrir le Play Store. Réessayez plus tard. | none | Could not open the Play Store. Try again later. |
| Crash body (replaces `COPY.body`) | L'application a rencontré une erreur inattendue. Vos données sont intactes. Vous pouvez réessayer. | none | The app hit an unexpected error. Your data is intact. You can try again. |
| Crash button | Signaler ce problème | none | Report this problem |
| Crash panel title | Signaler ce problème | none | Report this problem |
| Crash category label | CATÉGORIE | none | CATEGORY |
| Crash category value | L'appli a planté ou s'est figée | none | App froze or crashed |
| Crash details label | Détails (facultatif) | none | Details (optional) |
| Crash placeholder | Que faisiez-vous ? | `vous[NNBSP]?` | What were you doing? |
| Crash send | Envoyer le signalement | none | Send report |
| Crash sending | Envoi en cours… | `…` is U+2026 | Sending… |
| Crash sent | Envoyé. Merci. | none | Sent. Thank you. |
| Crash saved | Enregistré. Il sera envoyé plus tard. | none | Saved. It will send later. |
| Crash error (4xx) | Nous n'avons pas pu envoyer ce signalement. Réessayez. | none | We could not send this report. Try again. |
| Report link (STT, exam) | Signaler un problème | none | Report a problem |
| Audio link a11y label (STT surfaces) | Signaler un problème audio | none | Report an audio problem |
| Grading link a11y label (exam `not-graded` and `audio-failed`) | Signaler un problème de correction | none | Report a grading problem |
| Overflow button a11y label | Plus d'options | none | More options |
| Menu row: help | (existing `lkHelp`) Comment fonctionnent les leçons | none | How lessons work |
| Menu row: report (label and a11y) | Signaler un problème avec cet élément | none | Report a problem with this item |
| Profile row title | Votre rapport | none | Your report |
| Profile row sub | Votre précision et les mots à revoir. | none | Your accuracy and the words to review. |
| Ring a11y label | précision, {n} pour cent | none | accuracy, {n} percent |
| Weak row a11y label | {fr}, {c} sur {s} réussis, ouvrir la leçon | none | {fr}, {c} of {s} correct, open the lesson |
| Radio group a11y label | Ce qui ne va pas, obligatoire | none | What went wrong, required |
| Category selected announcement | Choix : {category} | `Choix[NBSP]:` | {category} selected |
| Outbox write failure `probSaveFailed` (sheet, crash panel `saveFailed`) | Impossible d'enregistrer votre signalement. Réessayez. | none | Could not save your report. Try again. |

The 429 body is the same string in the States table (S1) and here. It promises only that the report is saved and will go no earlier than tomorrow, which matches D-35 (retry no sooner than the next UTC day). FR and EN say the same thing.

**Empty state:** the report sheet has no empty data state (a blank form is idle). Le Rapport keeps its existing empty heading and body (`reportEmptyT`, `reportEmptyS`); it is shown when `headlineAttempts(attempts)` is empty.

**Error state:** 4xx copy states the problem and the next step. Offline, 429 and 5xx are never shown as errors; they are the calm "Saved" state with the next step stated. Background outcomes after the sheet closes are silent (S1 States).

**Destructive actions in this phase:** none. Report submission is not destructive, discarding a draft needs no confirmation, and nothing deletes learner data. On account delete, the server removes the learner's reports (including guest-era rows keyed on the install id) and the client clears the local report outbox (D-20 as amended); neither adds UI.

---

## Accessibility and Interaction (Phase 8 / 8.1 rules applied)

- Every control has a role and label. Category rows: `radio` with `selected`. Contact row: `checkbox` with `checked`. "What's included": `button` with `expanded`. Send: `button` with `disabled`, plus `busy` while loading. Close, `HeaderMenuButton` (with `expanded`), menu rows, `ReportProblemLink`, Settings rows, Profile row: `button` (Rate row: `link`). Radio group container: `radiogroup` with the radio-group label.
- No gesture-only action: the content report is a visible menu row, not a long-press; sheet dismiss has a visible Close button in addition to the swipe-down grabber; the menu closes with Back and an outside tap.
- All touch targets 44 dp or larger: rows 48 to 58, buttons 54, `HeaderMenuButton` 44x44 via `hitSlop`, `ReportProblemLink` `minHeight: 44`.
- Screen-reader order in S1: title, intro, category group (rows in order), details field, counter, what's included, contact checkbox, status text, Send. Status or error text is announced via live region when it appears, and precedes Send in order.
- On open, focus moves to the sheet title. After an error, focus stays where the learner was. After sent/queued, focus moves to the confirmation heading. Menu: focus to the first row on open, back to `HeaderMenuButton` on close. Crash panel: focus to the panel title on open.
- Font scale 1.3 and 1.5: no clipped tails; rules C5 to C7; all text-bearing containers use `minHeight` and wrap; the form scrolls; Send stays visible in its pinned footer and never sits under the keyboard; the crash screen scrolls as a whole.
- Reduced motion: no new animation beyond the OS sheet, the `Modal` fade, and the existing `Press` feedback. Sent confirmation appears without scale-in or confetti.
- French text in S8 weak-item rows keeps `lang="fr"` (existing). Interface FR copy follows existing screens.
- Contrast: see the measured table in Color. `t.txSubtle` appears only on the "WHAT WENT WRONG" label and the placeholder; never for the 4xx error, a status line or the required hint.

---

## Verification checks (replaces the stock sign-off)

These are the dimensions the quality review failed. The checker and auditor tick each against the code and the device, not against this document.

**Grounding (every referenced control exists, or is listed as new)**
- [ ] `noBandNote` and the `'not-graded'` / `'audio-failed'` reasons exist at `app/exam-report.tsx:575`; no "Retry grading" control is referenced anywhere
- [ ] The "?" help `Press` being replaced is at `app/lesson.tsx:780-789`; `FocusHeader` title is `flex: 1` + `numberOfLines={1}` at `ui.tsx:338-348` (`:344`)
- [ ] The mission flag carries the D-41 card id (section `id` + `lastSub`), never `#s{ix}.0`; the quiz flag carries the D-40 hybrid key with `:h{hash8}`
- [ ] `Button` props at `ui.tsx:105-122` have no loading slot before N1 lands; N1 adds it
- [ ] The 7 STT surfaces are at the file:line refs in S4 (re-grep `micNoSpeech|micDenied|micUnavail|rpNotHeard` before executing; lines drift)
- [ ] `ErrorScreen.tsx:62` root `View` and `:115-117` `flex: 1` ScrollView are replaced by the S3 tree
- [ ] `profile.tsx:120-122` uses `headlineAttempts`
- [ ] Every item in "New component and API changes" maps to a plan task

**Measured contrast**
- [ ] The Color "Measured contrast" table is recomputed from `palette.ts` after any token change; every row used by a new element passes (text 4.5:1, non-text 3:1)
- [ ] No raw `t.acc` on any border, dot or glyph in S1; no `t.line(30)` on any control boundary; 4xx text is `t.txPrimary`

**House copy rules**
- [ ] C1 no `—` in new keys, including ErrorScreen `COPY` and the version fallback
- [ ] C2 no "honest"
- [ ] C3 / C8 U+202F before `? ! ;` and inside `« »`, U+00A0 before `:` in every new FR string (D-36 test green)
- [ ] C4 no `...` in new keys
- [ ] C5 / C6 / C7 no `flex` on `Text`, no `numberOfLines` on body copy, no `maxFontSizeMultiplier` or absolute `lineHeight` on new text (including all of ErrorScreen)

**Layout at font scale 1.3 with 3-button navigation (Pixel 9, Android device evidence)**
- [ ] S1 sheet: keyboard open on the details field, Send and counter fully visible; every category label ends in full
- [ ] S3 crash screen: keyboard open, TextInput, counter and Send visible; title and body end in full
- [ ] S6 header at B1+ (chip present): title ellipsizes with `…`; close, chip, book, overflow and gear all fully visible and tappable; menu rows wrap without clipping
- [ ] S4: each of the 7 surfaces shows the failure message and the link in full
- [ ] S5: a `not-graded` section, an `audio-failed` section and a DELF épreuve with `unchecked > 0` (with and without a mark) each show exactly one link under the row, and all open S1 with "Grading felt wrong" selected (D-22, D-44)
- [ ] S1 keyboard contract holds as written; on failure a deviation is recorded and execution stopped
- [ ] S2: "Report a problem" sits in About above Licences; on Android the Rate row sits alone under a "Play Store" heading after About and before the danger zone; on iOS neither the row nor the heading renders; no copy links the two rows (D-49)

---

## Researcher Defaults (not in CONTEXT.md; each checked against the locked decisions)

1. Unsaved draft closes without a confirmation dialog.
2. 429 and 5xx show the calm "Saved" state, not an error, each with its own body copy. Aligned with D-18 and D-35 (429 copy says "tomorrow or later").
3. Auto-dismiss of Sent/Saved after 2500 ms, suspended while a screen reader is on. Aligned with D-26 (short thank-you, then back to where they were).
4. Crash screen uses an inline compact report panel (provider-free), because the router may be down; its Send is an outline button so the retry stays the single filled action. Aligned with D-22 (crash entry point, crash pre-fill).
5. STT report action appears on every hears-nothing result and every mic error (D-22), on its own line below the failure message, on 7 surfaces.
6. The content report lives in a header overflow menu that replaces the "?" button (D-23 allows "page header or overflow menu"); its Report row is disabled while `answerPending`.
7. Profile row sits directly after the primary stats block (`profile.tsx:305-309`), before Sign out (`:550`). D-29 does not fix a position.
8. Activity names: "Leçons / Lessons", "Parler / Speaking", "Lecteur / Player", "Révision / Review", "Leçons audio / Narrated lessons", "Examen blanc / Mock exam", "Révision d'examen / Exam review".
9. New `flag` and `more` icons are added to `Icon.tsx`.
10. Ring a11y is a single text element reading "accuracy, N percent".
11. A 4xx that arrives after the learner closed the sheet drops the report silently; nothing re-notifies the learner. Aligned with D-18 (a 4xx is not retried); D-18 says nothing about notification.
12. A send that has not resolved after 15 s is shown as queued ("Saved", 5xx copy); the claimed report stays in the outbox (D-38).
13. Rate row: `market://` first, `https://play.google.com/...` fallback, quiet inline line if both fail. Lives in its own "Play Store" section (D-49).

## Needs Paul

These touch a locked decision, so they are not chosen silently. The spec currently follows the lock in both cases.

1. **D-22, exam `audio-failed` category.** The spec follows the lock: `audio-failed` pre-fills "Grading felt wrong", like `not-graded`. CONTEXT notes Paul may change this to "Audio or voice", since the failure was audio playback rather than grading. If he does, only the S5 table row and the S5 link label change.
2. **D-36 and guillemets (rule C8).** D-36 names U+202F before `? ! ;` and U+00A0 before `:` only. C8 extends this to U+202F inside `« »` (one string, "Included list 5"). If Paul declines, the two U+202F in that row become plain spaces and C8 is deleted; the D-36 test is unaffected either way.
