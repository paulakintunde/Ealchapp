# App review and feature suggestions

_Started 2026-07-10 18:16 UTC_

---

## User

review the app in a new canvas, determine features that may be missing that would be great for the app. Also have the currency show $ sign, may be changeable to local currency of the user.

## Assistant

_[tool: list_files]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

Making the currency change in the app first, then building the review canvas.

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Done, two things:

1. **App Review canvas** (`App Review.dc.html`, now open) — 10 missing features grouped by priority: **Now** — smart review queue fed by all modes, tap-to-save dictionary, placement test, streaks/goals; **Next** — dictation/writing, offline downloads UI, widgets; **Later** — friends/leagues, CEFR certificates, live tutors.
2. **Currency** — pricing now defaults to **$ USD**, with a currency picker in Settings → Subscription ($ / € / £ / CA$) that updates both plan prices; the note reads "Detected from your region."

Want me to design any of the proposed features into the app next?

## User

In a new canvas design all the new features for the now and next in the app. Do this in a new canvas.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

`New Features.dc.html` is open — seven screens in Ealch's visual language, all Now + Next items:

- **1a** Smart Review — "Due today" queue fed by Role Play, Coach, quizzes, and carnet
- **1b** Tap-to-save dictionary popover over Le Coach chat
- **1c** Adaptive placement test with live CEFR estimate
- **1d** New Home header: goal ring, 14-day streak with a freeze, weekly goal
- **1e** Dictation with accent key row and ces/ses correction
- **1f** Offline downloads manager with storage breakdown
- **1g** Lock-screen widget + word-of-the-day notification

Tell me which ones to build into the working app (interactive, wired into navigation) and I'll start there.

## User

I need to clone the first canvas - Ealch into a new canvas and add the updates in new features to it.

## Assistant

_[tool: copy_files]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

Now adding the new features into the clone.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now the four new screens + dictionary overlay:

_[tool: dc_html_str_replace]_

Now the logic:

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

`Ealch v2.dc.html` is the clone with all Now + Next features wired in (the original stays untouched). Sign in, then:

- **Home**: streak/goal card (ring, 14-day streak, freeze, week dots), Smart Review entry (23 due), word-of-the-day card, and a new La Dictée row
- **Smart Review** screen — Start launches the flashcard deck
- **Placement test** — banner in Beginners' Den; answer → result (A2, start at unit 12)
- **Dictation** — Check reveals the ces/ses correction, accent key row
- **Downloads** — new row in Settings → storage breakdown, Wi-Fi toggle
- **Dictionary** — tap word of the day for the popover; save to carnet toggles

All strings switch with the FR/EN toggle. The widget (1g) is an OS surface, so it's represented in-app by the word-of-the-day card.

## User

Do an audit of the design and write what is good and missing in a new canvas. What can be improved, what can be updated, what should be removed.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

`Design Audit.dc.html` is open — three columns: what's working (visual system, speaking-first practice, Smart Review closing the loop, feedback reports, bilingual UI), what needs work (crowded Home, unsectioned Settings, five lookalike drill tiles, thin pricing copy, no empty/error states), and what to cut (redundant settings gear in-session, unexplained accent picker, possible duplicate coach entry points, debug-y test-alarm button, bloated 10-step onboarding). Closes with a "fix three things next" priority list.

## User

Create this fix in the Ealch V2 canvas. 1. Re-tier the Home feed
One compact "today" strip (streak + review count), then the hero, then everything else collapsed under tabs or a "browse" fold.
2. Group Settings into sections
Account & Billing / Learning / Notifications / Appearance — even as in-page anchors, before it becomes a scrolling wall.
3. Differentiate the five drills
Label each tile by skill (Read / Listen / Speak / Write) so the choice is legible, not five lookalike cards.

## Assistant

_[tool: dc_html_str_replace]_

Now the browse fold + skill badges:

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now skill badges on the four tiles and two rows:

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

All three audit fixes are in `Ealch v2.dc.html`:

1. **Home re-tiered** — the streak card, review card and word-of-the-day are replaced by one compact 3-segment "today" strip (goal ring · 14-day streak · 23 to review, tappable), then the hero; playlists, exams and weak spots now sit behind a "Browse" fold (word of the day lives there too).
2. **Settings grouped** — four accent-colored section headers with dividers: Account & Billing, Learning, Appearance, Notifications; the accent-region picker moved up under Learning.
3. **Drills differentiated** — color-coded skill badges on every tile: Den = COURSE, Flashcards = READ · VOCAB, Voice Flash & Role Play = SPEAK, Sentence Builder = WRITE, Dictée = LISTEN · WRITE. All bilingual with the FR/EN toggle.

## User

Do a new audit and review the design audit again, with current state of Ealch v2, also add any new improve or remove.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

_[tool: snip]_

`Design Audit v2.dc.html` is open. Top row marks the four round-1 items as resolved, then:

- **Good**: Home's new spine, the skill-badge color language, structured Settings, v2 features feeling native
- **Improve (new)**: review CTA opens the generic deck instead of the 23 queued items; only one today-strip segment is tappable; week history/freeze explanation vanished (should move to Profile); no LISTEN badge on playlists; Placement/Dictation have only one scripted outcome — plus carried items (anchor jumps, empty states, pricing)
- **Remove (new)**: dead streak-card code, word-of-the-day buried in the fold, duplicated "23 due" intro on the Review screen — plus the carried in-session gear and dual coach entries

Footer priorities: real review session, week history → Profile, success states for the new drills. Want me to apply those three to v2?

## User

What will this solve in the improve and remove --1. Build a real review session
The queue's 23 items should be what you actually drill — mixed card types (word, sound, grammar), not the generic deck.
2. Move week history to Profile
Week dots + freeze explanation belong with the stats; the "1 freeze" token on Home then has somewhere to point.
3. Add success states to the new drills
A correct dictation, an "all caught up" queue, a placement answer that changes the estimate — one alternate path each.

## Assistant

Here's the mapping to the audit cards:

**1. Real review session** solves:
- *Improve:* "Review CTA opens the wrong content" — the 23-count would finally launch the actual queued items (word/sound/grammar cards) instead of the generic flashcard deck.
- *Remove:* "Duplicate '23 due' surfaces" — with a real session, the Review screen can shrink its intro block since it's now a launcher, not a re-pitch.

**2. Week history → Profile** solves:
- *Improve:* "Week history disappeared entirely" — the dots and freeze explanation get a home with the stats.
- *Improve (partially):* "Only one today-strip segment is tappable" — the streak segment gains a natural destination (Profile), making it meaningfully tappable.
- *Remove:* "Dead code from the old streak card" — wkDots and the streak strings become live again instead of computing for nothing.

**3. Success states** solves:
- *Improve:* "Placement & Dictation have one scripted path" — a correct dictation and an answer-sensitive estimate give each drill an honest alternate outcome.
- *Improve (partially):* "Empty/error states" — the "all caught up" queue is the first designed empty state.

Not touched by these three: Settings anchor chips, pricing comparison, word-of-the-day placement, the in-session gear, and dual coach entries — those would be a separate pass.

Want me to implement all three in Ealch v2?

## User

do the following improvement recommended in Ealch v2 see improvements and fix required here. 1. Build a real review session
The queue's 23 items should be what you actually drill — mixed card types (word, sound, grammar), not the generic deck.
2. Move week history to Profile
Week dots + freeze explanation belong with the stats; the "1 freeze" token on Home then has somewhere to point.
3. Add success states to the new drills
A correct dictation, an "all caught up" queue, a placement answer that changes the estimate — one alternate path each.

## Assistant

_[tool: grep]_

## Assistant

Resuming the three fixes in Ealch v2.

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

Now implementing all three fixes:

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Also make the estimate chip react to the selected answer, then all the logic:

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: grep]_

_[tool: ready_for_verification]_

All three fixes are in `Ealch v2.dc.html`:

1. **Real review session** — "Start review" now launches a dedicated session drilling the queue's actual items with mixed card types (WORD la monnaie, SOUND vous‿avez, GRAMMAR passé composé, CARNET la flânerie): reveal → Again / Got it, progress bar, and "Again" note. Finishing shows the **"All caught up"** state (checkmark, next-due chips) and the Home today-strip flips to "✓ caught up · tomorrow →".
2. **Week history in Profile** — new streak card at the top of Profile stats: 14-day count, freeze chip, week dots, and the frozen-Wednesday explanation. The goal and streak segments of the today strip now tap through to Profile.
3. **Success states** — Dictation now has a second round that checks correct ("Perfect — no mistakes", teal border, 7-day note); Placement's estimate chip reacts to your answer (rising ↑ / dropping ↓) and the result changes accordingly (A2 → unit 12, or A1+ → unit 8).

All bilingual with FR/EN.

## User

La dictee the listen write has poor and partial features. inside play buttons does not work, writing feature not active and the purpose of it is obscure. Though a good feature to have

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

Rebuilding La Dictée as a fully working drill:

_[tool: dc_html_str_replace]_

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now the logic — real TTS, typing, checking:

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

La Dictée is now a real, working drill:

- **Play button works** — speaks the sentence aloud with French text-to-speech (equalizer animation while playing), 3 plays per sentence, and a 0.75× slow toggle
- **Writing is live** — a real text field you type into; the accent keys actually insert é è ê à â ç ù ô ï œ; Enter checks
- **Real checking** — your answer is compared to the target (accents matter, punctuation doesn't): correct → teal success card; wrong → your answer struck through, correct sentence shown, plus a why-tip (ses/ces, a/à, achète)
- **Purpose is stated** — a line under the title explains the drill: train your ear and spelling by writing exactly what you hear
- **3 sentences** with a finish screen showing your score and a redo option

Note: the voice uses your device's French speech voice — on rare setups with none installed the button still plays but silently.

## User

Found issues — fixing…

## Assistant

_[tool: show_html]_

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: grep]_

_[tool: grep]_

_[tool: multi_screenshot]_

