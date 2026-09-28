# Phase 8: Accessibility Retrofit - Discussion Log

> **Audit trail only.** Downstream research and planning should use `08-CONTEXT.md` for the decisions. This log records the options considered.

**Date:** 2026-09-27
**Phase:** 08-accessibility-retrofit
**Areas discussed:** Screen reader announcements and focus; Automatic dark/light behavior; Flashcards at larger text sizes

---

## Screen reader announcements and focus

| Question | Options presented | Selected |
|---|---|---|
| How should TalkBack focus a trail act row containing a title, progress, and lock status? | One item per action; separate text and action stops; you decide | One item per action |
| Which language should interface words in mixed French-content labels use? | Current app language; always French; always English | Current app language |
| Where should focus begin when a level panel, language panel, or paywall opens? | Panel title, then choices; first choice or primary action; keep focus on opener | Panel title, then choices |
| Should a locked act row say activation opens the Première paywall? | Announce lock and paywall action; announce lock only; you decide | Announce lock and paywall action |

The user chose to move to theme behavior after these four questions.

## Automatic dark/light behavior

| Question | Options presented | Selected |
|---|---|---|
| What should a fresh install use by default? | Automatic, follow device; Dark as today; Light | Automatic, follow device |
| What should happen to existing saved Dark or Light choices? | Keep saved choice; move everyone to Automatic; you decide | Keep saved choice |
| How soon should Automatic react to an OS appearance change? | Immediately; next foreground; next launch | Immediately |
| Should Settings show the resolved appearance alongside Automatic? | Show current appearance; show Automatic only; you decide | Show current appearance |
| Which further theme detail should be settled? | System bars and overlays; switching during a lesson; something else | System bars and overlays |
| Should bars, sheets, and paywall follow Automatic with the rest of the app? | Whole app; content screens only; you decide | Whole app |

The user then chose to move to flashcards.

## Flashcards at larger text sizes

| Question | Options presented | Selected |
|---|---|---|
| How should text remain reachable if a large flashcard exceeds the screen? | Scroll card or screen; shrink text; expand card on tap | Scroll card or screen |
| Where should the new face begin after a scrolled card flips? | At top; keep scroll position; you decide | At top |
| Should Flip and answer controls stay visible while content scrolls? | Keep controls visible; scroll controls with content; you decide | Keep controls visible |
| Should the card face or whole screen scroll? | Scroll card text only; scroll whole screen; you decide | Scroll card text only |

The user chose to write the context after these areas.

## Claude's Discretion

No “you decide” option was selected. The exact code approach and wording details not settled here remain for Phase 8 research and planning.

## Deferred Ideas

None.
