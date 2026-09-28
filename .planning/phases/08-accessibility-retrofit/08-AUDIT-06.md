# Plan 06 flashcard action audit

All `Press` sites in `app/flashcards.tsx` were checked after the large-text refactor. `FocusHeader` close and settings buttons retain their shared component labels.

| Site | Role and spoken name | State/action |
| --- | --- | --- |
| Direction switch | Button, current `FR → EN` or `EN → FR` | Changes the deck direction and resets face scroll. Hidden for single-type prompt decks. |
| Empty deck return | Button, localized `backFeed` | Returns home; no answer is logged. |
| Completed deck redo | Button, localized `redo` | Restarts from card one. |
| Completed deck return | Button, localized `backFeed` | Returns home. |
| Front pronunciation | Button, localized `playAudioA11y` | Speaks French only when the front already shows it. Independent of Flip. |
| Back pronunciation | Button, localized `playAudioA11y` | Speaks French answer. Independent of Flip. |
| Flip | Button, localized `flipCardA11y` | Flips without grading and resets both scroll offsets. |
| Again | Button, localized `again` | Logs the existing unsuccessful recall path. |
| Got it | Button, localized `know` | Logs the existing successful recall path. |

The animated front and back remain mounted for the transform, but the turned-away face has `pointerEvents="none"`, `importantForAccessibility="no-hide-descendants"`, and `accessibilityElementsHidden`. Only its text scrolls inside a bounded `ScrollView`; progress, Flip, answer buttons, and the face's pronunciation button remain outside that scroll. Both face scroll positions reset before flipping, grading, changing direction, and restarting. Plan 10 checks this behavior with TalkBack and OS text scaling on Android hardware.
