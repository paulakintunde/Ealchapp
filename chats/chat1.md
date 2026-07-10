# # Ealch mobile UI mockups

_Started 2026-07-10 07:17 UTC_

---

## User

Create a series of high-fidelity, ultra-sophisticated mobile UI mockups for 'Elle,' a French learning app that blends the high-production cinematic aesthetic of Boldvoice with the immersive, personalized, 'on-demand' content flow of Spotify.Design Requirements & Key Interactions:The 'Content-First' UI (The Spotify Influence): Abandon the static grid or list. Use a dark-mode, content-heavy interface with edge-to-edge imagery, subtle gradients, and high-quality motion. The home screen should feel like a 'Learning Feed'—a vertical scroll of personalized 'Learning Playlists' (e.g., 'French for Business,' 'Casual Parisian Slang,' 'Pronunciation Deep-Dives'). Use large, hero-style cards with subtle parallax effects.The 'Performance Coach' (The Boldvoice Influence): The AI interaction must feel like a premium coaching session. When in 'Speak Mode,' the UI should feature a cinematic, full-screen immersive view of the AI tutor or a clean, focus-weighted interface. Use high-contrast typography, elegant progress bars that feel like media playback scrubbers, and high-fidelity haptic feedback during speech analysis.Dynamic Navigation: Use Spotify-style 'bottom-sheets' for context menus, allowing users to dive into grammar explanations or vocabulary lists without ever losing their place in the conversation.Visual Language: A 'Premium Dark' theme (Deep Charcoal, Slate, and Obsidian) punctuated by a singular, vibrant brand color (e.g., a 'French Riviera' teal or a bold, high-fashion coral). Use sophisticated motion—the UI should feel 'liquid' and responsive, with transitions that mimic the smoothness of an album transition in a music player."Revised UX Reference Map (Spotify/Boldvoice Primary)ComponentPrimary InspirationImplementation StyleHome ScreenSpotifyInfinite vertical feed of "Learning Playlists"; dynamic hero cards.Core InteractionBoldvoicePerformance-coaching focus; cinematic UI; focus on audio-visual immersion.Micro-learningDuolingo/BrilliantTiny "tracks" that feel like mini-podcasts or video clips.Speech FeedbackELSA SpeakWaveform overlays that look like audio spectrum visualizers.Social/ChatWhatsAppSeamless, "texting" overlay mode for off-hours practice.NavigationLinear/AirbnbGesture-heavy; card-based transitions; no clunky menus.The "Elle" Design Strategy (The "Why")The "Feed" vs. The "Lesson": Instead of a linear path (Duolingo), the user interacts with a curated daily feed. The app predicts what the user needs next based on past pronunciation errors, making it feel more like a Spotify recommendation algorithm than a school curriculum.Cinematic Immersion: Borrowing from Boldvoice, we use full-screen, high-quality visuals. When the AI speaks, the UI fades away to leave only the audio/visual waveform, putting 100% of the cognitive load on the language and the voice, not on the UI controls.Media-Player Controls: By treating "Lessons" like "Tracks," we can use familiar playback patterns:Skip/Rewind: Allows users to repeat specific sentences.Playback Speed: Toggle 0.75x or 1x for listening comprehension.Queueing: Users can "Add to my practice" for later.Implementation Note:To capture that specific Boldvoice energy, the "Face-to-Face" aspect is crucial. Even if the avatar is AI-generated, it needs to move and respond with the fluid, high-frame-rate smoothness of a real video stream. Your mockups should feature the AI as a "hero" element—not a cartoon, but a sleek, high-fidelity presence that dominates the screen during speaking sessions. Create each design in a separate canvas. Change the App name to Ealch and not Elle.

## Assistant

I'll explore the design system first, then confirm a few specifics before building.

_[tool: list_files]_

_[tool: list_files]_

The design system project is empty, so I'll work from the detailed visual language in your brief. Let me check the current project state.

_[tool: list_files]_

Your brief is remarkably detailed — the aesthetic and interaction model are fully specified. Let me confirm just a few scoping decisions before I build.

_[tool: questions_v2]_

## User

Questions answered:
- screens: Home — Learning Feed, Speak Mode — cinematic AI coach, Micro-lesson 'track' player, Speech feedback — waveform analysis, Grammar/vocab bottom-sheet, WhatsApp-style chat practice, Explore a few options, Profile & progress, Onboarding / placement
- fidelity: Fully clickable prototype
- device: both
- brandcolor: Show me both
- hero: Stylized silhouette + waveform
- tone: Elegant / editorial (Vogue-like)
- content: This is the technical prompt --# Fable Build Prompt: AI French Learning Ecosystem (Advanced MVP)

## 1. Your Role

You are the Lead Architect for a high-performance, AI-driven French learning ecosystem. You are building an Advanced MVP whose defining property is total system modularity: every AI model, voice service, and endpoint can be swapped or toggled in real time through remote administrative control, with no app redeploy.

Optimize for three properties, in priority order:
1. **Resilience** - the app degrades gracefully and never hard-fails on a single provider outage.
2. **Modularity** - no provider is load-bearing in a way that resists replacement.
3. **Low latency** - this is a voice-first product; conversational round-trip time is a first-class metric.

## 2. Product Context

A voice-first French learning app built around a single AI voice engine exposed through two modes:

* **Real-World Survival:** scenario roleplay (opening a bank account, complaining to a landlord, ordering at a café) with a realistic native-speaker persona, task-completion feedback, idiom coaching, and ambient background audio.
* **The Examiner:** official exam simulation (TEF, TCF, DELF) with an interrupting examiner persona that grades against CEFR rubrics.

Supporting the engine: conversation replay with a post-session daily report, an unlimited "Why?" tutor attached to that report, and a pre-scenario vocab/grammar injector. Everything else (grammar maps, gamification, media lessons, social) is out of scope for this MVP.

## 3. The Control Plane Philosophy

This is the core of the architecture. Treat the app as a thin, configurable client driven by a remote control plane.

### Dynamic Orchestration

* No API endpoints, model identifiers, or provider selections are hardcoded in the app.
* On launch, the app fetches its operational configuration (active orchestrator, enabled services, endpoint references, model selections, active prompt version) from a Supabase configuration table.
* Config is cached locally and refreshed on a defined interval and on app foreground.

### Secret Handling (non-negotiable)

* API keys are never shipped in the bundle and never exposed to the client.
* The client fetches only non-sensitive configuration (which services are active, which models, which prompt version). All calls to paid AI providers are proxied through Supabase Edge Functions that inject secrets server-side.
* The configuration table therefore stores references, flags, and prompt text, never raw credentials.

### Admin Control

An external Admin Portal (Retool, a small Next.js dashboard, or Supabase's table interface) must let the administrator do the following with no app redeploy:

1. Swap the primary AI orchestrator (Kie.ai vs. NVIDIA NIM/Build).
2. Toggle individual services independently (Fish Audio, Azure, Glif.app).
3. Edit system prompts, versioned, so every change is auditable and reversible.

### Fallback Logic (circuit breaker)

* Wrap the primary orchestrator in a circuit breaker with a defined failure threshold and cooldown.
* On repeated Kie.ai failure, automatically fail over to NVIDIA NIM/Build as the secondary engine.
* Emit a structured failure and failover event to PostHog every time the breaker trips or recovers.
* Failover behavior toward the user (visible toast vs. transparent) is a product decision. See Clarifying Questions.

## 4. Core Technical Stack

* **Framework:** React Native + Expo (`expo-router`).
* **Infrastructure:** Supabase (Auth, Row Level Security, Storage, Edge Functions).
* **AI Orchestration:** Kie.ai (primary), NVIDIA NIM/Build (secondary and test).
* **Swappable Services:** Fish Audio (voice synthesis), Azure (alternate speech provider), Glif.app (generative media / workflows). Each is independently toggleable via config.
* **Dynamic Assets:** Cloudflare R2 (media storage), Mux (video), Remotion (programmatic video rendering).
* **Observability & Monetization:** PostHog (session replay, analytics, failover events), Superwall (paywalls and subscriptions).
* **Styling & Motion:** NativeWind (Tailwind for React Native), Reanimated (fluid interactions).
* **Onboarding State:** `xstate` (state machine), `MMKV` (local persistence).

## 5. The Advanced Onboarding Wizard (10 to 15 pages)

### Persistence

* Model the entire flow as an `xstate` machine.
* Persist machine state to `MMKV` on every transition.

### Resilience (hard requirement)

* The wizard must survive app process death. On restart, the machine hydrates from `MMKV` and resumes at the exact sub-page it left off, not the top of the flow.

### Dynamic Feedback

* The wizard captures a short spoken "calibration" sample and sends it, through the active orchestrator via the Edge Function proxy, to suggest a starting proficiency level.
* This suggestion path must respect the same orchestrator selection and fallback logic as the rest of the app.

## 6. Development Workflow & Guidelines

* **Phase 1: Architecture.** Define the directory structure (`services/`, `store/`, `config/`, plus whatever else the design requires).
* **Phase 2: Admin-Driven Config.** Build a `ConfigService` that fetches operational parameters from Supabase and exposes them to the app.
* **Phase 3: Resilience.** Build the onboarding state machine.

### Verification gate (strict)

You are forbidden from writing any core logic until I have reviewed and approved your directory structure. Producing implementation code before approval is a failure of the task.

## 7. Instructions for This Session

Do the following, in order, then stop and wait for my approval:

1. Analyze the requirements, with particular attention to the Admin Control Plane.
2. Propose the directory structure. Explicitly justify the inclusion and contents of `services/` (orchestration and circuit breaker), `store/` (onboarding state and resilience), and `config/` (remote admin-controlled settings).
3. Define a Supabase schema that includes a `system_config` table for the Admin Portal. At minimum it should support: active orchestrator selection, per-service enable/disable flags, model selections, versioned system prompts, and endpoint/config references (no raw secrets). State the RLS posture (who can read config vs. who can write it).
4. Ask me the three clarifying questions below.

Do not write the onboarding machine, the `ConfigService`, or any provider integration in this session.

## 8. Clarifying Questions to Ask Me

1. **Admin Portal:** separate web dashboard (Retool / Next.js), or managed directly through Supabase's table interface?
2. **AI swapping granularity:** should we be able to swap models mid-conversation, or only between sessions?
3. **Failover UX:** show a "Reconnecting to primary server" toast, or keep the transition completely transparent to the user?

## Task

Initiate Phase 1. Present the directory structure and the `system_config` schema, then ask me the three questions. Write no core logic until I approve the structure.  
All projects
French App



How can I help you today?


Modular French learning app architecture with dynamic AI orchestration
Last message 23 minutes ago
Memory
Only you
Project memory will show here after a few chats.

Instructions
Add instructions to tailor Claude’s responses

Files
1% of project capacity used

Lessons
103 lines

text



topics
160 lines

text



Scope lite
58 lines

text



build preference
33 lines

text



IDea 2
39 lines

text



Idea
950 lines

text


Scope lite
## Minimum Viable Product (MVP) Features
 
* **Dynamic Voice Simulator:** Real-time, low-latency AI conversations supporting "Real-World Survival" and "The Examiner" modes.
* **Conversation Replay & Daily Report:** Full text transcripts of roleplays highlighting grammar errors, mental translation pauses, and vocabulary usage.
* **Unlimited "Why?" AI Tutor:** On-demand chat interface attached to the daily report allowing users to ask limitless questions about their corrections.
* **Targeted Vocab/Grammar Injector:** Pre-scenario objectives giving the user specific words or grammar rules they must successfully use during the simulation.
 
***Basic Foundation lessons, A1 lessons, A2, lessons only for those who indicate they are beginners. 
***Flash cards 
***Audio listen and translate in voice or text. Here a word in fr translate to en and vice versa
 
---
 
### Core AI & Tutoring
 
* **Dynamic Grammar Notebook:** Automatically logs and categorizes recurring user mistakes into a personalized study guide.
* **Weakness Engine:** Tracks recurring errors to dynamically adjust lesson sequences.
* **Visual Grammar Pattern Maps:** Visual node maps explaining verb rules and exceptions to reduce rote memorization.
 
### Spoken Fluency & Pronunciation
 
* **Real Pronunciation Analysis:** Phonetic feedback mapping tongue placement, airflow, and mouth opening.
* **3D Mouth Animation:** Visual guides for complex sounds, nasal vowels, and liaisons.
* **Accent Training:** Selectable regional dialects including Parisian, Québecois, Belgian, and African French.
* **Contraction Trainer:** Explicit instruction on spoken street French and common abbreviations.
 
### Listening & Real-World Immersion
 
* **Audio Degradation Training:** Listening practice layered with realistic background noise like metros, cafés, and static.
* **Native Speech Progression:** Audio that graduates from slow, teacher-enunciated French to rapid street-level speech.
* **Bureaucratic French:** Curriculums focused on reading and filling out forms, rental agreements, and taxes.
* **Official Letter Translator:** A tool to upload real French mail and receive plain English translations with vocabulary breakdowns.
 
### Vocabulary & Memory Mechanics
 
* **Context Vocabulary:** Grouping words by survival scenarios (e.g., apartment rental) rather than generic categories.
* **Smart Gender Memory:** Color-coded visual anchors and AI mnemonics to lock in masculine vs. feminine nouns.
* **Idiom Library:** Continuously updated database of native expressions and conversational filler words.
* **Predictive Spaced Repetition:** Memory decay algorithms that test users right before they forget, without manual flashcard decks.
 
### Motivation & Analytics
 
* **Alternative Success Metrics:** Dashboards tracking hours spoken, conversations completed, and confidence scores instead of just daily streaks.
* **Intermediate Plateau Detection:** Automatically pivots the curriculum from vocabulary to conversation when progress stalls.
* **Burnout Detection:** Reduces lesson difficulty or changes the learning modality upon detecting repeated mistakes and frustration.
* **Confidence Builder:** Daily micro-challenges to build speaking courage in low-stakes environments.
 
### Exam Preparation Expansion
 
* **Writing Grader:** Evaluates uploaded essays against official CEFR rubrics for structure and vocabulary.
* **Listening Simulator:** Mimics the exact pressure, noise, and single-play rules of official TEF/DELF exams.
* **Immigration Mode:** Generates a reverse-engineered 90-day roadmap based on the user's required language score.
 
### Social & Content Integration
 
* **Interactive Media Lessons:** Tools that turn YouTube videos, Netflix clips, and podcasts into interactive lessons.
* **Social Features:** AI-driven matching for local language partners, weekly debates, and voice rooms.
* **Accessibility Features:** Offline mode, slow playback, dyslexia fonts, and dark mode.

## Assistant

The empty design system aside, your brief + answers give me everything. Plan: one fully clickable prototype — Ealch — in a phone frame, dark editorial theme, with tweaks for accent color (Riviera teal ↔ coral) and device (iPhone ↔ Android). Screens: onboarding w/ voice calibration → Learning Feed → track player → cinematic Speak Mode → feedback report → "Why?" chat → grammar bottom-sheet → profile.

_[tool: update_todos]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

Now building the full prototype.

_[tool: dc_write]_

_[tool: ready_for_verification]_

**Ealch** is live — a fully clickable prototype in an iPhone frame:

- **Onboarding** — editorial welcome → goal → voice calibration → suggested level B1
- **Home feed** — hero "Au Café" survival scenario, playlist rows (La Voix, Argot, L'Argent, L'Oreille), Examiner cards, Weakness Engine
- **Track player** — scrubber, phrase skip, speed toggle, practice queue
- **Speak Mode** — cinematic silhouette + live waveform, simulated speech analysis with flagged liaison
- **Le Rapport** — confidence ring, skill bars, per-error "Pourquoi ?" that auto-asks the coach
- **Chat with Camille** — typing indicator, quick replies
- **Profile** — spoken-hours metrics, week chart, accent selector
- **Bottom sheets** — vocab injector + liaison grammar, without leaving context

Tweaks (top of the panel): accent color (Riviera teal / coral / champagne), iPhone ↔ Android, start screen, user name. Try switching to coral to see the second direction instantly.

## User

Integrate a translation toggle for the app for french and english. Also can you add a feature for Beginners den, learning basics, and also flash card for recall.

## Assistant

Adding: a global FR ↔ EN interface toggle, a Beginners' Den (A1 basics) screen, and a flip-card flashcard deck — all wired into the feed. Rewriting the DC with these integrated.

_[tool: dc_write]_

_[tool: ready_for_verification]_

All three features are in:

- **FR ↔ EN toggle** — a pill in the home header and profile switches the entire interface language live (headings, buttons, tabs, captions, feedback report, sheets). French content stays French.
- **Beginners' Den** — new "Foundations" section on the feed → A1 unit path (greetings → introductions → numbers → gender → être & avoir → café scenario) with done/active/locked states and progress.
- **Flashcards** — 3D flip cards with "Again / Got it" recall, deck progress, direction toggle (FR→EN / EN→FR), and an end-of-deck score screen.

Both new screens are reachable from the feed's Foundations row; the Den also keeps the tab bar so it feels like part of the feed.

## User

I want to include the color theme changer, the 10 onboarding wizard, login features, signin and sign out. Integrate a alarm and notification system for practice into the build, for beginners add a good curriculum, like alphabet, vowel, nasal vowels, consonant sounds, accent markes, silent letters, elison, rythm and intonation, pronunciation master class also include A1 courses with verb greetings, number, noun gender, definite articles, subject pronouns, verb etre, verb avoir, calendar and time, season, weather, describing things, colors, basic adjectives, family vocab, possessive adjective, adjective placement, asking and locating, negation, yes/no questions, questions words, prepositions of place, countries and nationalities, every day vocabulary food, body part, daily routines, home and furniture. for A2 go deep dive into regular verbs, irregular verbs, adjectives and adverbs, prepositions, the past tense, object pronouns, everyday situations, comparasion and references.

## Assistant

Big additions — I'll expand the build: 10-step onboarding wizard (account creation → goal → experience → pace → accent → practice alarm → theme → calibration → level), a sign-in screen + sign-out, an in-app color theme changer (wizard + profile), a practice alarm/notification system with a simulated push banner, and a full curriculum in the Beginners' Den (Sounds ×9, A1 ×26, A2 ×8) behind segmented tabs.

_[tool: dc_write]_

_[tool: dc_write]_

## Assistant

_[tool: update_todos]_

_[tool: ready_for_verification]_

_[tool: update_todos]_

Everything from your last request is now live:

- **10-step onboarding wizard** — welcome → account creation (email / Apple / Google) → goal → experience → pace → accent → practice alarm → theme color → voice calibration → level result (beginners get A1 and are routed to the Den; others B1). Back button + progress bar throughout.
- **Sign in / sign out** — "Se connecter" screen from the welcome page; sign-out button at the bottom of the profile returns you to onboarding.
- **Color theme changer** — in wizard step 07 and in the profile (Riviera / Corail / Champagne / Nuit); re-themes the whole app instantly.
- **Alarm & notifications** — daily practice alarm time (matin/midi/soir/nuit) + three toggles, set during onboarding and editable in profile. A few seconds after entering the app, a push-style banner drops in ("Votre séance de 19:00 vous attend…") — tap it to jump straight into Speak Mode.
- **Full beginners curriculum** in the Den under three tabs: **SONS** (9 units: alphabet → vowels → nasal vowels → consonants → accents → silent letters → élision → rhythm & intonation → masterclass), **A1** (all 26 units you listed, greetings through home & furniture), **A2** (8 deep-dives: regular/irregular verbs, adjectives & adverbs, prepositions, passé composé, object pronouns, everyday situations, comparisons).

Note: since you're viewing with start = Home, sign out or switch the start tweak to Onboarding to walk the new wizard.

## User

like the flashcard design a system that is solely for voice flash and translation. Image appears on card, choose to translate with voice or type in the chat. The translation could ask you to do so in english or french. French word appears, say what it is in french, and vice versa. Also create a card for sentence builder, learn a few words and arange it into a sentence at the end. say it and write it to pass. Do quizes to text. Add quizes to lessons for pass. include role play, where you have a conversation with ai, level of conversation varies with level you select. include animation to the design for nice effects, include sound as well, Add calendar to track daily progress, integrate with real alarm clock, make user set any time and available during onboarding if not there already, create a white switch mode. Let user choose app language during onboarding, this will allow them to read if they are beginners. English, French, Spanish, Mandarin Chinese, Portuguese, Arabic, Japanese. use icons for circles with character inside. add the icons inside the circles. For weakness engine and your weak spots, and any other similar ones. include tap able back button where there is not menu showing by default under, add an x icon and settings icon, x takes you back to home, setting to setting, x on the left of the screen and settings on the right. expecially with speak. Try to extend the lessons, to include, quizes after the lessons, text based lessons, show tables where applicable, examples where applicable, video where applicable, practice audio, where applicable, show examples and use cases, common errors. This will be a lesson extension. do something unique for SONS, lesson 3. and extend when clicked, same for A1, lesson 4, A2, lesson 1. For A2 be minful that each of the lessons have sub lessons . see full breakdown here -- Regular Verbs
Regular -ER Verbs — The Full System
-ER Verbs — Spelling Quirks
Regular -IR Verbs
Regular -RE Verbs
Irregular Verbs
Irregular Verbs 1 — aller, venir, tenir
Irregular Verbs 2 — faire, dire, lire
Irregular Verbs 3 — vouloir, pouvoir, devoir
Irregular Verbs 4 — savoir vs connaître
Irregular Verbs 5 — prendre, mettre, battre
Adjectives & Adverbs
Adjective Agreement — The Full System
beau, nouveau, vieux — The Triple Forms
Adverbs — Formation & Placement
Prepositions
Prepositions of Place — Full Set
Prepositions of Time
The Past Tense
Futur Proche — Going to
Passé Composé with avoir
Irregular Past Participles
Passé Composé with être
Reflexive Verbs — Present Tense
Reflexive Verbs — Passé Composé
Object Pronouns
Direct Object Pronouns — le/la/les
Indirect Object Pronouns — lui/leur
Y and EN — The Two Neutral Pronouns
Everyday Situations
Food, Restaurant & Ordering
Shopping, Money & Prices
Transport & Travel
At the Doctor / Health
At the Hotel / Accommodation
Work & Professions
School & Education
Technology & Daily Life
Comparison & Reference
Comparatives & Superlatives
Demonstratives — this / that
Possessive Pronouns — mine, yours, his/hers

## Assistant

This is a major expansion — I'll add Voice Flash, Sentence Builder, Role Play, extended lessons with quizzes/tables/audio, a settings screen with X/gear navigation, light mode, sounds, a progress calendar, real-clock alarm, and the 7-language picker. One big rebuild.

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

## Assistant

_[tool: run_script]_

Palette converted. Now wiring the theme engine, sound engine, and new state.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Now the interaction logic for the new systems.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Now the big renderVals extension exposing everything to the template.

_[tool: dc_js_str_replace]_

Now the template: five new screens (Voice Flash, Sentence Builder, Role Play, Lesson, Settings) inserted in one edit.

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

Now the Den A2 sub-lesson accordion and profile calendar.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now retrofit the X / settings headers on Player, Speak, Feedback, and Flashcards.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now the onboarding upgrades: custom alarm time, and mode + app-language pickers on the theme step.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

All edits in. Verifying.

_[tool: ready_for_verification]_

_[tool: update_todos]_

Everything is in — here's what's new:

- **Voice Flash** (home → Foundations): icon card, alternating "say it in French" / "translate to English", answer by mic or typed input, scored session.
- **Sentence Builder**: learn 5 words → arrange chips into the sentence → say it → write it → passed, with error shake and success chime.
- **Role Play** ("Au marché"): pick A1/A2/B1/B2 — the conversation's complexity changes with level; 3 voice exchanges, then a report link.
- **Extended lessons with quizzes**: SONS lesson 3 (unique tappable nasal-vowel sound pads + spelling table + video + audio practice + common errors), A1 lesson 4 (Les articles définis, full table), A2 lesson 1 (Verbes réguliers with its 4 sub-lessons and the parler conjugation table). Each ends in a 3-question quiz with a PASSED stamp. All other A2 units expand in the Den to show your full sub-lesson breakdown (35 sub-lessons).
- **Settings screen** (gear icon): app language (7 circles — EN/FR/ES/中/PT/ع/日, also in onboarding), dark/light **white mode switch**, theme colors, sound effects toggle, custom alarm time (any time via time picker), test-alarm button, notification toggles, accent, sign out.
- **X + gear headers** on Speak, Player, Flashcards, Feedback and all new focus screens — X (left) → home, gear (right) → settings.
- **Real alarm**: the app watches the actual clock and fires the notification banner + chime when your set time arrives.
- **Progress calendar** in profile (current month, practiced days filled, today ringed).
- **Sound design** throughout: taps, card flips, success arpeggios, error tones, alarm ding, and a synthesized vowel drone on the nasal pads.

One caveat: only FR/EN interfaces are fully translated — other languages select but fall back to English with a note.

## User

Create a lettered logo with the "E." for ealch. This will be an animated screen when regular uses are coming back to use the app, or when the app is for any reason slow, or delaying. Add pricing and upgrade to the settings, billing etc. may need to separate settings from profile features. Move wizard number seven to number 2. Love the learn these words, under sentences. For the first screen where words are broken down. Add a audio feature to spell each word. They can tap and icon to hear the voice or click on the card to expose the audio voice and speaker practice. Issue with the flash vocal, The say it in English already gives away the clue with the icon attached, for the french, english words should be available, plus audio. and vice versa for french

## Assistant

Adding: animated "E." splash, pricing/billing in settings, wizard reorder (theme → step 2), per-word audio in Sentence Builder, and the Voice Flash prompt fix. First, checking the profile section to cleanly separate settings from profile.

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: run_script]_

Now the splash screen, Voice Flash card fix, Sentence Builder word rows, and settings pricing section.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

_[tool: snip]_

All five requests are in:

- **Animated "E." splash** — serif "E." with accent period, spinning ring, wordmark, and loading dots. It plays whenever a returning user signs in (and doubles as the slow/loading screen) before easing into the feed.
- **Pricing & billing in Settings** — Subscription section at the top: current plan card, Monthly (€9.99) vs Annual (€6.58/mo, "best value" badge) selector, upgrade button (flips the plan card to Première ✓), plus billing rows (payment method, restore purchases). Profile is now purely personal (stats, calendar, weakness engine) with a single Settings link — all controls live in Settings.
- **Wizard reorder** — theme/appearance/language personalization is now step 02, right after account creation; everything renumbered.
- **Sentence Builder word audio** — each word row has a play button (voice + waveform), and tapping the card expands a panel with the waveform and a "Répétez" mic chip for speaker practice.
- **Voice Flash fix** — answering **in French**: icon + the English word + an audio chip (no answer leak). Answering **in English**: the French word + audio only — the giveaway icon is hidden in that direction.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Fixed — the phone's status bar now follows the theme, so in white mode the clock and battery icons render dark and stay visible.

