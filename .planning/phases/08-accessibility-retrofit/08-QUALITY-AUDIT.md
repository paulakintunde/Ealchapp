# Phase 8 quality audit

**Audited:** 2026-10-01
**Scope:** discussion (08-CONTEXT, 08-DISCUSSION-LOG), research and UI contract (08-RESEARCH, 08-UI-SPEC, 08-PATTERNS), plans 08-01 to 08-10, execution (commits, summaries, batch audits, code), evidence (08-DEVICE-EVIDENCE, 08-VALIDATION, 08-VERIFICATION) and close-out.
**Method:** document review plus three independent read-only audits: plans against the git trail, theme and font-scale root causes in code, and accessibility semantics by grep and inspection of `ealch-v2/`.
**Outcome:** Phase 8 shipped real, mostly sound code, but it was closed on evidence that does not meet its own acceptance criteria. Several defects in the phase's own scope are confirmed in code. The rework is Phase 08.1 (`.planning/phases/08.1-accessibility-quality-pass/`). Phase 8's artifacts stay as the audit trail; nothing here is rewritten in place except the overstated sign-offs noted at the end.

## Grades

| Stage | Grade | One-line verdict |
|---|---|---|
| Discussion | C | Clean decisions on the three areas raised, but the areas that decide whether a French app works under TalkBack were never raised |
| Research and UI contract | B | Accurate codebase findings and correct API cautions; UI-SPEC sign-off was a self-review, not an independent checker |
| Planning | C+ | Good partition and pitfalls guard; verification deferred to one big-bang checkpoint, many grep-only acceptance criteria |
| Execution (code) | B- | No blanket role, substantive tests, flashcards fixed; the same clipping defect left on the in-lesson flashcard, a dropped handoff, two native defects |
| Evidence and close-out | D | Device checkpoint closed by a one-line report; D-04 never proven; phase marked complete 46 s after verification returned `human_needed` |

## 1. Discussion

What was done well: 14 questions, every one decided by the user, no "you decide" left open, scope held to A11Y-01..04, and the theme decisions (D-05..D-09) are precise enough to test.

What was missing. Each gap below is a decision the phase needed, and the absence of each one shows up later as a defect or as unprovable evidence:

| Gap | Why it mattered | Consequence |
|---|---|---|
| How French content is spoken by TalkBack | The app teaches French; TalkBack reads untagged French in the English voice. D-02 says "keep authored French as authored" but never asks how it is pronounced | `Type.tsx` `lang` prop is inert on Android by its own comment (Type.tsx:70-74); 19 call sites in the whole app carry it. The core content is mispronounced on the only platform tested |
| Announcing dynamic results | Grading feedback, errors and toasts in a learning app are the main feedback loop | Only 4 live-region/announce sites app-wide (onboarding x2, ExamClock, PackProgress). No quiz or mission grading result is announced |
| Swipe, long-press and gesture operability | "Operable" is half the phase goal | Found on device only (A2 mission 8), fixed ad hoc in b5f4fff. `LessonPager` and `LessonRich` swipe decks were not re-checked |
| Large text beyond the standalone flashcards route | A11Y-04 was worded around one screen; the user problem is the learning path | `LessonRich.FlashcardsView` still has the exact pre-fix pattern (fixed height, absolute faces, no scroll) |
| Live configuration changes | Low-vision users change scale mid-task | Font-scale change restarts the activity and drops the learner at Home |
| What counts as device evidence | The roadmap demanded a per-screen TalkBack sweep | Without a standard, a one-line "pass for all eleven groups" was accepted |
| Which account proves the locked path | D-04 needs a free account | The sweep ran on an account with A2 unlocked |

## 2. Research and UI contract

Strong points: it correctly kept `Press` neutral, flagged the false `disabled` on locked rows, separated saved preference from resolved theme, pinned RN 0.86's `'unspecified'` (not `'auto'`), and identified the nested Flip/audio problem and the hidden-face exposure.

Weak points:
- It noted that `Appearance.setColorScheme` overrides the app scheme but did not trace what `useColorScheme()` returns after an override. That is the root of the stale "Automatic · Dark" label (section 4).
- It did not check `configChanges` in the Android manifest.
- It did not look for French language tagging, live regions or gesture-only controls.
- The UI-SPEC records "local review, not a separate agent review" in a Codex runtime. No gsd-plan-checker run is recorded for the plans.

## 3. Planning

Strong points:
- Every action-site file is assigned to exactly one plan.
- Per-batch audit tables are reconciled in Plan 10.
- The threat registers are relevant (spoken destination equals real activation; hidden backgrounds).
- Explicit "do not accept a grep count" language.

Defects:

1. **Big-bang verification.** Plans 01-09 verify with typecheck plus focused tests only. Every summary defers TalkBack to Plan 10, against the roadmap's "per touched screen". Nine plans of semantics first met hardware on 2026-09-28/29, and the one real defect found needed an unplanned fix (b5f4fff, one minute before closure).
2. **No full-suite gate per plan.** Plans 01 and 03 broke four legacy tests that stayed red for about 10 hours until Plan 10 Task 1. The repair rewrote them as source regexes and flipped Phase 07.1's D-22 assertion.
3. **Structural acceptance criteria.** These could all pass while behaviour is wrong:
   - "Press assigns no blanket role"
   - "no `disabled: row.locked`"
   - "strings exist in FR/EN"
   - "scoring handlers unchanged" (no diff guard)
   - "audit row exists for every site"

   The batch audits were generated by an unplanned script (`scripts/phase8-audit-sites.cjs`), so "0 unclassified" means "every site has a role prop", which is the count Plan 10 said not to accept.
4. **Checkpoint closable by one word.** The Plan 10 resume signal was "approved", and the acceptance criterion it guarded ("every touched screen has a pass or a failure plus passing retest", with spoken name, role and state) was not enforced by any artifact shape.
5. **Ten sequential waves without file overlap to justify them.** The real dependencies were only 04→05 (`settings.tsx`), 05→09 (`onboarding.tsx`) and 02/05 (`_layout.tsx`). The cost was not wall-clock time but the deferred device feedback.
6. **Wrong environment assumption.** Plan 05 required "checked-in Android configuration reconciled", but `android/` is gitignored (prebuild output). The criterion was quietly reinterpreted. The same assumption hides the manifest `configChanges` defect.
7. **French rendering of tests.** Only 1 of 8 a11y suites renders in French, although D-02 is a localization rule.

## 4. Execution: confirmed defects in Phase 8 scope

| # | Severity | Defect | Evidence |
|---|---|---|---|
| E1 | Major | Automatic label and theme can resolve from the stale override. `useColorScheme()` returns the app override; RN 0.86 `setColorScheme` writes the JS cache without an event; on Android the `'unspecified'` read runs before `FOLLOW_SYSTEM` is applied. Correctness then depends on one de-duplicated native event | `src/theme/useTheme.ts:11-12`, `appearance.logic.ts:14-18`, `app/_layout.tsx:107-111`, RN `Appearance.js:96-110`, `AppearanceModule.kt:85-112`. Onboarding shares the path (`onboarding.tsx:415`) |
| E2 | Major | OS font-scale or display-size change recreates `MainActivity` and drops the learner at Home, losing deck, lesson position and any recording in progress | `android/app/src/main/AndroidManifest.xml:39` lacks `fontScale\|density`; `MainActivity.kt:23` `onCreate(null)`; `android/` is prebuild output, so the fix needs a config plugin |
| E3 | Major | In-lesson flashcards keep the defect A11Y-04 fixed on the standalone route: one flip `Press` over fixed-height absolute faces, no scroll, no hidden-face gating | `LessonRich.tsx` FlashcardsView ~956, 1006, 1045-1057; voice prompt card ~1160 (`height: cardH`, `overflow: 'hidden'`) |
| E4 | Major | French content is not tagged for TalkBack on Android | `Type.tsx:70-74` (self-declared inert on Android), 19 tagged sites app-wide |
| E5 | Major | Grading results are not announced | 4 live-region/announce sites app-wide; none in QuizRoundsView, MissionRich, LessonRich exercises |
| E6 | Minor | Plan 03 handed Speak's inline `WordPractice` background suppression to Plan 07; Plan 07 dropped it | `app/speak.tsx:808`; absent from 08-AUDIT-07 and 08-07-SUMMARY |
| E7 | Minor | Truncation and tail-clip candidates on the learning path | `WordCardXL.tsx:133-173` (`numberOfLines` 1-2), `MissionRich.tsx:1585, 2228`; `<TX style={{flex:1}}>` in LessonDeck:415, LessonRich:260/674/692/734/764/827, MissionRich:135/1372/2199/2228, SilentCards:574, QuizRoundsView:360/425/426/518 |
| E8 | Minor | Same control, different role: app-language choice is `button`+selected on Home but `radio` in Settings | `home.tsx:308` vs `settings.tsx` |
| E9 | Minor | Focus tests mock `findNodeHandle`/`setAccessibilityFocus`; they prove dispatch on layout, not focus. Focus return (D-03) and background suppression for paywall, BottomSheet and the route stack have no automated test | `__tests__/a11y-*.test.tsx` |
| E10 | Minor | No `accessibilityActions` anywhere; long-press slow-play relies on TalkBack's generic long-press | `den.tsx:278`, `LessonDeck.tsx:164`, `QuizRoundsView.tsx:353`, `WordCardXL.tsx:169` |

Role distribution today: 313 button, 27 radio, 11 header, 4 link, 3 checkbox, 2 tab, 2 progressbar, 1 switch, 1 summary. Not wrong in itself, but it was never checked against behaviour row by row. The audits record the prop, not the outcome.

What execution got right:
- `Press` has no default role.
- Locked rows are actionable and route to the paywall.
- Flashcards scroll per face with reset on flip.
- Flip and audio are separate actions.
- The hidden face is excluded from accessibility.
- `DeckNavigation` exists.
- Explicit saved modes survive an update.
- 8 non-stub a11y suites.

## 5. Evidence and close-out

1. **Checkpoint criterion unmet.** The 08-DEVICE-EVIDENCE table has five rows: four Partial, two Pending, and two rows whose "observation" is the expected-result template text. All were "superseded" by one paragraph reporting a pass for eleven groups, with no spoken output recorded. The mission-8 spoken retest is "pending" twice and is closed only by that paragraph.
2. **D-04 unproven.** The test account had A2 unlocked, and no later entry records switching to the free account.
3. **A1 chip unresolved.** TalkBack read "level A, collapsed…"; whether "A1" is spoken distinctly was flagged and never answered.
4. **Overstated sign-off.** 08-VALIDATION ticks "Any failures fixed, retested" and sets `nyquist_compliant: true`.
5. **Premature closure.** 0eab357 checked A11Y-01..04 in REQUIREMENTS and marked the phase Complete 46 seconds after 08-VERIFICATION returned `human_needed` with five open items. No 08-HUMAN-UAT.md exists and no follow-up was filed.
6. **Traceability lost.** Only plans 01, 02 and 10 carry `08-` commit scopes; 03-09 used `feat(a11y)`. Plan 10 edited `licences.ts` and four legacy tests outside its `files_modified`, recorded only in VALIDATION.

## 6. Decisions taken by this audit

- Phase 8 stays executed, but its requirements are **reopened** until Phase 08.1 closes:
  - A11Y-01 and A11Y-02 are reopened on evidence.
  - A11Y-03 is reopened on E1.
  - A11Y-04 is reopened on E2 and E3.
- 08-VALIDATION's `nyquist_compliant` is set back to `false`, and the "failures fixed, retested" box is unticked, with a pointer here.
- New decisions D-13..D-22 are drafted in `08.1-CONTEXT.md` as PROPOSED. They need the user's confirmation before execution.
- Phase 08.1 runs in seven stages. Each ends in its own device gate with a verbatim evidence record, and no stage may start until the previous gate is recorded.
