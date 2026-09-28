# Phase 8 action audit — lesson and overlays

Each row below corresponds to a shared `Press`, direct `Pressable`, shared `Button`, or custom action in Plan 02's file partition. Repeated render instances share a stable site ID. Names beginning `T.` use the current app language. Lesson and sentence titles remain authored content.

| Site | Role | Name source | State or value | Activation | Status |
| --- | --- | --- | --- | --- | --- |
| `act:back` | button | `T.a11yBack` | none | route back | fixed |
| `act:fiche` | button | `T.a11yOpenFiche` | none | Fiche route | fixed |
| `act:previous` | button | `T.a11yPreviousAct` | only rendered when available | previous act | fixed |
| `act:next` | button | `T.a11yNextAct` | only rendered when available | next act | fixed |
| `act:opener-audio` | button | `T.moListen` | visible for authored audio | plays introduction | fixed |
| `act:mission-row` ×N | button | ordinal, authored title, localized done status | completed or incomplete | opens mission | fixed |
| `lesson:FocusHeader-close` | button | `T.a11yClose` via shared header | none | route back | Plan 01 shared fix |
| `lesson:FocusHeader-settings` | button | `T.a11yOpenSettings` | none | Settings route | Plan 01 shared fix |
| `lesson:help` | button | `T.lkHelp` | none | opens lesson key | existing correct |
| `lesson:LanguageChip` | button | `T.langChipLabel` | expanded | opens three-choice language panel | existing correct; ref added for return focus |
| `lesson:SheetLink` | button | `T.sheetLinkA11y` and sheet count | only rendered when sheets exist | opens reference index | existing correct |
| `fiche:see-list` | button | `T.ovSeeList` | none | act list | fixed |
| `fiche:sibling-info` ×N | button | authored sibling title | none | sibling Fiche route | fixed |
| `fiche:sibling-act` ×N | button | `T.a11yOpenAct` and sibling title | none | sibling act route | fixed |
| `fiche:start` | button | `T.ovStart` | none | act route | fixed |
| `fiche:see-all` | button | `T.ovSeeAll` and mission count | count | act route | fixed |
| `ActCheckpoint:rest-continue` via Button | button | `T.cont` | none | continues saved act | localized |
| `ActCheckpoint:rest-stop` | button | `T.restStop` | `T.restStopHint` | leaves with saved place | localized |
| `ActCheckpoint:recap-continue` via Button | button | `T.recapResume` | none | resumes act | localized |
| `ActCheckpoint:recap-restart` | button | `T.recapRestart` | `T.recapRestartHint` | starts lesson cover | localized |
| `ActCheckpoint:warm-continue` via Button | button | `T.cont` | none | completes warm-back | localized |
| `ActCheckpoint:warm-answer` ×N | button | authored answer | selected, disabled after answer, localized correctness hint | grades answer | localized hint |
| `ActCheckpoint:warm-next` via Button | button | `T.warmStart` or `T.lessonNext` | none | next question or lesson | localized |
| `LessonKeyIntro:skip` | button | `T.lkSkip` | none | finishes tour | fixed |
| `LessonKeyIntro:previous` | button | `T.lessonPrev` | disabled on first card | previous tour card | fixed |
| `LessonKeyIntro:start` via Button | button | `T.lkStart` | none | finishes tour | fixed via Button |
| `LessonKeyIntro:next` | button | `T.lessonNext` | none | next tour card | fixed |
| `LessonPager:listen-chip` | button | `T.lessonListen` | playing shown visually | plays or stops lesson audio | fixed |
| `LessonPager:previous` | button | `T.lessonPrev` | disabled on first page | previous page | fixed |
| `LessonPager:next-or-finish` | button | localized next or finish label | disabled if answer required | next page or finishes | existing state, named |
| `LessonSection:example-audio` ×N | button | authored French sentence and `T.playAudioA11y` | playing indicator visual | plays sentence | fixed |
| `LessonSection:audio-line` ×N | button | authored French line and `T.playAudioA11y` | playing indicator visual | plays line | fixed |
| `ReferenceSheet:SheetLink` | button | `T.sheetLinkA11y` with count | absent if zero | opens sheet index | existing correct |
| `ReferenceSheet:index-row` ×N | button | authored sheet title | none | opens sheet | fixed |
| `ReferenceSheet:footer-back` | button | caller's localized return label | none | returns to lesson | existing correct |
| `ReferenceSheet:footer-forward` | button | caller's localized continue label | none | advances lesson | existing correct |
| `ReferenceSheet:header-back` | button | `T.backWord` | none | returns to index or lesson | existing correct |
| `LanguagePanel:chip` | button | `T.langChipLabel` | expanded | opens panel | existing correct |
| `LanguagePanel:backdrop` direct Pressable | button | `T.a11yDismissPanel` | visible while mounted | closes panel | fixed |
| `LanguagePanel:mode` ×3 via PanelRow | button | localized mode and description | selected mode | selects language mode | existing state; focus order fixed |
| `BottomSheet:backdrop` direct Pressable | button | `T.a11yDismissPanel` | visible while sheet mounted | closes sheet | fixed |
| `BottomSheet:vocab-row` ×N | checkbox | authored French and English word | checked | toggles primer checklist | fixed |
| `BottomSheet:vocab-go` | button | `T.go` | none | closes and opens Speak | fixed |
| `BottomSheet:grammar-play-glyph` | decorative View | none | no accessible stop | previous press only played a tap sound; no meaningful action | fixed |
| `BottomSheet:grammar-coach` | button | `T.askCoach` | none | closes and opens Coach | fixed |
| `DictionaryOverlay:backdrop` direct Pressable | button | `T.a11yDismissPanel` | visible while open | closes dictionary | fixed |
| `DictionaryOverlay:close` | button | `T.a11yClose` | none | closes dictionary | fixed |
| `DictionaryOverlay:audio` | button | `T.playAudioA11y` | none | speaks entry | fixed |
| `DictionaryOverlay:save` via Button | button | existing localized save label | saved state in label | toggles carnet save | fixed via Button |
| `LessonModal:backdrop` direct Pressable | button | `T.a11yDismissPanel` | visible while open | closes modal | fixed |
| `LessonModal:close` direct Pressable | button | `T.a11yClose` | none | closes modal | fixed |

Language, global sheet, dictionary, reference sheet, and generic lesson modal titles are accessible headings with focus dispatch on open or title layout. `LessonModal` uses a localized “Details” title until Plan 03's callers can supply a more specific authored title. The root stack is hidden from accessibility traversal while a global sheet or dictionary overlay is open. The lesson header and pager are hidden while its language panel is open. Real traversal and focus restoration remain part of Plan 10's TalkBack checkpoint.
