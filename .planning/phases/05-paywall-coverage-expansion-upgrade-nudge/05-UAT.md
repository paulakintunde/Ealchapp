---
status: testing
phase: 05-paywall-coverage-expansion-upgrade-nudge
source:
  - 05-01-SUMMARY.md
  - 05-02-SUMMARY.md
  - 05-03-SUMMARY.md
  - 05-04-SUMMARY.md
  - 05-05-SUMMARY.md
  - 05-06-SUMMARY.md
  - 05-07-SUMMARY.md
started: 2026-09-23T00:00:00Z
updated: 2026-09-23T00:00:00Z
---

## Current Test

number: 12
name: Speak Mode alarm banner unchanged
expected: |
  The daily Speak reminder behaves exactly as it did before Phase 5: it fires at the alarm time,
  plays the ding, shows the Speak banner, taps through to /speak, and auto-hides on its own
  ~12s timer. The two new banner kinds have not disturbed it.
awaiting: user response

## Tests

### 1. Locked drill deck — Flashcards
expected: Free user opening an A2+ theme in Flashcards routes straight to the contextual paywall (levels copy), with no card flashing on screen first.
result: pass

### 2. Locked drill decks — Dictation, Voiceflash, Sentence
expected: The same A2+ theme opened from Dictation, Voiceflash and Sentence each route to the same contextual paywall. Voiceflash in particular never surfaces a card (its gate runs before the production/recognition pair is built).
result: pass

### 3. Mixed-band theme is not falsely locked
expected: A theme containing both free-band (Sons/A1) and A2+ items still opens for a free user, and the deck contains only the free-band items. No paywall.
result: pass

### 4. Sentence with no theme, self-declared B1 level
expected: A free user who has set their own level to B1 opens Sentence with no theme selected. They are gated (paywall) rather than being served B1 sentences — the self-declared level no longer grants content.
result: pass

### 5. PREMIÈRE lock pills before entry
expected: Locked rows carry a PREMIÈRE pill BEFORE you tap them: on theme.tsx parcours step rows when the selected band is above A1, and on rows in Flash/Dictation/Voice/Sentence theme lists whose theme has no free-band content at all. Free-band rows carry no pill.
result: pass

### 6. Resume pointer no longer leaks
expected: Open a locked lesson (or narrated lesson), get bounced to the paywall, dismiss, go Home. Home's "continue" pointer still names the last lesson you actually studied, not the locked one you bounced off.
result: pass
reported: "The block does no register in continue, only free registers as continue"

### 7. Contextual paywall copy per trigger
expected: The paywall headline/lead differ by where you came from: lesson-level gate, coach turn cap and role play cap each show their own headline. Reaching the paywall from home, settings, placement or a direct tap still shows today's generic copy.
result: pass

### 8. Exam gate shows an explainer, not a sell
expected: Hitting an exam gate (paper list, or opening a paper, or a server refusal) shows a screen explaining the exam tier is a separate pass. There is no plan picker and no price on it — only a dismiss button. You cannot be sold a subscription that does not include exams.
result: issue
reported: "no locker on the exam path currently"
severity: major

### 9. Paywall feature list and dismiss
expected: The sell paywall lists exactly three feature bullets, with no "audio packs" bullet anywhere. Closing it returns you to the screen you came from and unlocks nothing — the content you were blocked on is still blocked.
result: pass

### 10. Upgrade nudge after the day's free role play
expected: As a free user, finish today's free role play scenario. A banner slides in offering the upgrade — this happens on completion, not on being blocked. It auto-hides after about 10 seconds. Tapping it opens the paywall with the role play copy.
result: issue
reported: "pass online, fail offline"
severity: major

### 11. Nudge cooldown holds for 24h
expected: After seeing the nudge once, it does not appear again on subsequent role play completions the same day. (Quit and relaunch the app to confirm the cooldown survives a restart.)
result: issue
reported: "notice to upgrade shows on the app after leavng and coing back"
severity: major

### 12. Speak Mode alarm banner unchanged
expected: The daily Speak reminder still behaves exactly as before Phase 5: it fires at the alarm time, plays the ding, shows the Speak banner, taps through to /speak, and auto-hides on its own ~12s timer. The new banner kinds have not disturbed it.
result: [pending]

### 13. Reconciliation banner on a genuine downgrade
expected: When a previously-paying account genuinely loses entitlement, a reconciliation banner explains it. The paywall never simply reappears with no explanation.
result: [pending]

### 14. Offline cold start does not falsely reconcile
expected: A paying user launches the app with no network. They stay premium and NO reconciliation banner appears. (Noted in 05-07-SUMMARY.md as the one checklist item never device-tested — accepted on structural grounds only.)
result: [pending]

## Summary

total: 14
passed: 8
issues: 3
pending: 3
skipped: 0
blocked: 0

## Gaps

- truth: "Hitting an exam gate shows an exam-pass explainer with a dismiss-only CTA, no plan picker and no price"
  status: failed
  reason: "User reported: no locker on the exam path currently"
  severity: major
  test: 8
  root_cause: ""
  artifacts: []
  missing: []
  debug_session: ""
- truth: "Completing the day's free role play raises the upgrade nudge banner, which auto-hides after ~10s and taps through to the role play paywall"
  status: failed
  reason: "User reported: pass online, fail offline"
  severity: major
  test: 10
  root_cause: ""
  artifacts: []
  missing: []
  debug_session: ""
- truth: "The upgrade nudge respects a 24h cooldown and does not reappear after an app restart"
  status: failed
  reason: "User reported: notice to upgrade shows on the app after leavng and coing back"
  severity: major
  test: 11
  root_cause: ""
  artifacts: []
  missing: []
  debug_session: ""
