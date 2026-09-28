# Phase 8 action audit — core navigation

The stable IDs below map to every shared `Press`, direct `Pressable`, and shared `Button` site assigned to Plan 01. Labels named `T.*` come from the active interface language. Authored lesson titles remain in their authored language. Visual icons, glow layers, progress bars, and start-marker rings inside these controls are decorative; their action has one parent stop.

| Site | Role | Accessible name source | State or value | Activation | Status |
| --- | --- | --- | --- | --- | --- |
| `home:GlowTile` (course and hub instances) | button | caller's localized title and subtitle | none | routes to Levels or practice hub | fixed |
| `home:language-choice` ×2 | button | `T.appLangNames[l]` | selected language | `setAppLang(l)` | existing correct |
| `home:profile-avatar` | button | `T.tabProfile` | none | profile route | existing correct |
| `home:streak-strip` | button | profile, days and freeze line from `T` | current days | profile route | fixed |
| `home:review-strip` | button | review number and localized labels | current queue | smart review route | fixed |
| `home:hero` | button | hero title, subtitle and CTA | current resume choice | hero route | fixed; vocabulary action is sibling |
| `home:vocabulary-primer` | button | `T.vocabPrime` | visible only with fresh cards | opens vocabulary sheet | fixed; separate hero stop |
| `home:secondary-resume` ×N | button | `T.resumeTag` and activity title | current mode | resume route | fixed |
| `home:premiere-entry` | button | `T.homePremT`, `T.homePremS` | only when free | paywall route | fixed |
| `home:browse-fold` | button | `T.browseOpen` or `T.browseLess` | expanded | toggles browse section | fixed |
| `home:word-entry` | button | `T.wordOfDay` and word | none | opens dictionary entry | fixed; audio is sibling |
| `home:word-audio` | button | `T.playAudioA11y` | none | speaks word | fixed |
| `home:playlist-card` ×N | button | selected interface language playlist title | track count in adjacent text | player route | fixed |
| `home:exam-format` ×N | button | format and localized paper count | available papers | exam route | fixed |
| `home:weak-spot` ×N | button | skill title and localized miss count | miss count | opens corresponding review | fixed |
| `home:section-see-all` | button | localized right-hand caption | none | routes to the named index | fixed |
| `den:back` | button | `T.a11yBack` | none | previous page or Home | fixed |
| `den:settings` | button | `T.a11yOpenSettings` | none | Settings route | fixed |
| `levels:back` | button | `T.a11yBack` | none | previous page or Den | fixed |
| `levels:band-row` ×7 | button | localized band, units/progress, Première status | selected band | selects band and navigates Den | existing correct |
| `ui:Press` direct `Pressable` | neutral primitive | forwarded from call site | forwarded | runs supplied `onPress` with sound | intentionally no blanket role |
| `ui:Button` | button | visible `label` prop | disabled when genuinely unavailable | caller's action | fixed |
| `ui:Toggle` | switch | caller's `accessibilityLabel` | checked | toggles boolean | existing correct |
| `ui:FocusHeader-close` | button | `T.a11yClose` | none | supplied close action | localized |
| `ui:FocusHeader-settings` | button | `T.a11yOpenSettings` | none | supplied Settings action | fixed |
| `TrailCard:skip` (orientation and placement) | button via `Button` | `T.lkSkip` | none | permanently dismisses day-one card | fixed via Button |
| `TrailCard:placement` | button | `T.trailPlacementTitle` | none | placement route | fixed |
| `TrailGateRow:gate-or-boundary` | button | localized lead and Première outcome | none | paywall route | fixed |
| `TrailHeading:fiche` | button | authored unit title and `T.trailFiche` | disabled only if no sheet exists | Fiche route | existing correct; separate from act row |
| `TrailRow:acte0` | button | localized Acte 00 and actual destination | actionable when locked | narrated pre-roll or paywall | fixed |
| `TrailRow:act` | button | authored title, localized progress and actual destination | actionable when locked; start marker is decorative | act route or paywall | fixed |
| `TabBar:tab` ×4 | tab | localized tab label | selected route | replaces route | fixed |
| `LevelPanel:chip` | button | localized level and band | expanded panel | Levels page; long press opens quick panel | existing correct |
| `LevelPanel:backdrop` direct `Pressable` | button | `T.a11yDismissPanel` | visible while panel mounted | closes panel | fixed; modal panel exposed and Den descendants suppressed while open |
| `PanelRow:choice` ×7 in Levels panel | button | localized title and description | selected and genuinely disabled | selects band | fixed; title follows panel heading |

The Level panel heading is an accessible `header` and receives focus after its layout event. The modal view exposes the panel while Den's background descendants are hidden when open. Real TalkBack focus order and return focus remain part of the Plan 10 device checkpoint.
