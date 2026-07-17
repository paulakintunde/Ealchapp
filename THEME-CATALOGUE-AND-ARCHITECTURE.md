# Ealch — Theme Catalogue & Content Architecture

Status: planning input for the master blueprint. Decisions locked: **mode-first home** (keep the current buckets — see Part E), CEFR level as the difficulty axis, TEF/TCF/DELF as a cross-cutting exam track, AI-generated content with a native-review gate, hybrid narration (guided-autoplay + self-paced). Canonical level ladder = **sons(Foundation)/A1/A2/B1/B2/C1** (C2 = scoring band only). See `CANONICAL-DECISIONS-AND-RECONCILIATION.md`.

---

## Part A — How theme and level-progression reconcile

> **Superseded framing note:** Part A below argues the theme×level model with theme as the *primary navigation spine*. The home is **mode-first** (Part E), NOT theme-spine. Part A's value is the level/theme reconciliation logic and the tagged-pool model, which still hold; read "theme axis" as the browsing lens *inside* buckets, not the home.

### The real problem
Pure theme-first has one weakness: **grammar has prerequisites, themes do not.** You can talk about "shopping" at A1 (`je voudrais un café`) or at B2 (a complaint letter using the conditional). Vocabulary is theme-bound; grammar is level-bound and cumulative. If a learner freely browses themes, nothing guarantees they met the passé composé before a theme assumes it.

### The resolution: a theme × level matrix over one tagged pool

**Layer 1 — the content atom.** Every learning item (flashcard, sentence, dialogue line, dictation, drill, exam task) carries the same tags:
`theme` · `sub-theme` · `CEFR level` · `mode` (flashcard / voice-flash / sentence / roleplay / dictée / playlist / exam) · `skill` (CO listening / CE reading / PO speaking / PE writing) · `grammar points used`.
This single tagging scheme is what lets every view below come out of one content pool.

**Layer 2 — two navigation axes over that pool:**
- **Theme axis (browsing lens).** 108 themes grouped in 15 domains. Open a theme and its content is stratified into level bands (Foundation → C1). Each (theme × level) is a "pack" — exactly your flashcard-pack vision.
- **Level axis (the rail).** A guided path: "you're A2" assembles a cross-theme A2 journey that enforces grammar order. This is the step-up-the-difficulty feeling.

**Layer 3 — three cross-cutting tracks pulling from the same pool:**
- **Grammar spine** — a thin, level-sequenced thread that guarantees grammatical progression no matter which themes you browse. Grammar is delivered in service of the theme's function, never as a bare paradigm.
- **SRS scheduler** — underneath everything, schedules items by memory state, theme/level-agnostic. (The content research names this the single most load-bearing thing to build first.)
- **Examiner** — pulls level-appropriate items into TEF / TCF / DELF task formats. Cross-cutting by definition.

### Why this is elegant: the level ladder is *emergent*, not a second structure
Themes self-stratify. Survival themes (greetings, numbers) exist only at Foundation–A1. Abstract themes (debate, climate) exist only at B2–C1. Practical themes (shopping, health) span A1–B2. So the catalogue itself encodes difficulty:
- A beginner literally sees a **different set of themes** than an advanced learner.
- Shared themes serve **harder content** as the learner levels up.
- "Getting better at French" (level) always happens **inside a concrete scenario** (theme).

You maintain one tagged pool. The level ladder falls out of the tags. Nothing is duplicated.

### Progression rules
- **Within a theme:** finishing a level band suggests the next band up in that theme.
- **Across themes:** the guided path enforces grammar order so theme-hopping never leaves grammar holes.
- **Mastery** comes from the SRS (retention ≥ 0.90 over ≥ 3 reps), never a single quiz.

---

## Part B — Best way to move forward (process)

1. **Lock the content-atom schema first.** The tagging above is the foundation; the research flags several missing fields (register, can-do statements, paradigm/table audio, item ids). Resolve them before any authoring so we never re-tag.
2. **Build the scheduler + attempt log + ContentService before scaling content.** Do not author 100 themes into a player that cannot schedule or track. This is the research's number-one recommendation and it is correct.
3. **Prove the pipeline on a vertical slice.** Pick ~3–5 themes × 3 levels × all modes. Run the full loop: AI generation → native-review gate → narration → shipped end-to-end. This validates the generation pipeline, the human-review cost, and the hybrid narration before committing to the full catalogue.
4. **Then scale, theme by theme and exam-track by exam-track.** Content generation becomes a repeatable job once the slice proves the machine.

(The master doc is vision-only per your choice; this section is process guidance, not phasing inside the blueprint.)

---

## Part C — The theme catalogue (108 themes, 15 domains)

Level range shows where each theme naturally lives. `[exam]` = high value for TEF/TCF/DELF. `[immig]` = high value for immigration/administration goals. Each theme decomposes further into sub-themes (examples shown for a few); the full sub-theme breakout comes in the blueprint.

### 1. First Contact & Survival  (Foundation–A1)
1. Greetings & introductions — Found–A1
2. The alphabet & spelling your name — Found–A1
3. Numbers, prices & counting — Found–A2
4. Days, dates & telling time — Found–A2
5. Politeness & courtesy (s'il vous plaît, pardon) — Found–A1
6. Sounds of French / pronunciation (Sons) — Found *(feeds the phonics thread)*
7. Survival questions & basic phrases — Found–A1
8. Colours, shapes & simple descriptions — A1

### 2. Me, Myself & Others  (identity & relationships)
9. Personal information (name, age, nationality, job) — A1–A2
10. Family & relatives — A1–B1
11. Physical appearance & describing people — A1–B1
12. Personality & character — A2–B2
13. Friendship & relationships — A2–B2
14. Feelings & emotions — A2–B2
15. Dating & romance — B1–B2
16. Life stages & milestones (birth, marriage, retirement) — B1–B2

### 3. Home & Daily Life
17. The home & rooms — A1–A2
18. Furniture & household objects — A1–A2
19. Daily routine — A1–B1  *(sub: morning / work / evening / weekend)*
20. Chores & housework — A1–B1
21. Renting & finding a flat (bail, colocation) — B1–B2 `[immig]`
22. Neighbours & the neighbourhood — A2–B1
23. Utilities & repairs (plumber, internet, electricity) — B1–B2 `[immig]`

### 4. Food & Dining
24. Food & drink basics — A1–A2
25. At the café — A1–A2
26. At the restaurant (ordering, the bill) — A1–B1  *(sub: booking / ordering / complaints / paying)*
27. Cooking & recipes — A2–B1
28. Grocery shopping & markets — A1–B1
29. Diets, tastes & preferences — A2–B2
30. French gastronomy & food culture — B1–C1

### 5. Shopping & Money
31. Shopping for clothes (sizes, trying on) — A1–B1
32. Prices, paying & change — A1–A2
33. At the bank / opening an account — B1–B2 `[immig]`
34. Online shopping & deliveries — A2–B1
35. Complaints, returns & refunds — B1–B2 `[exam: complaint letters]`
36. Budgeting & personal finance — B1–C1

### 6. Getting Around  (travel & transport)
37. Asking for & giving directions — A1–B1
38. Public transport (metro, bus, train) — A1–B1
39. Buying tickets — A1–A2
40. At the airport & flying — A2–B1
41. Driving & the road — A2–B1
42. Booking accommodation (hotel, Airbnb) — A2–B1
43. Holidays & vacations — A2–B2
44. Tourism & sightseeing — A2–B2
45. Describing a trip / travel stories — B1–B2 `[exam: narration]`

### 7. Work & Professional Life
46. Jobs & professions — A1–B1
47. The workplace & colleagues — A2–B2
48. Job hunting & CVs — B1–B2 `[immig]`
49. Job interviews — B1–B2 `[exam: TEF EO]`
50. Meetings & teamwork — B1–C1
51. Professional emails & writing — B1–C1 `[exam: PE registers]`
52. Phone calls & professional interaction — B1–C1 `[exam: TEF Section A]`
53. Careers, ambition & the future of work — B2–C1
54. Business & entrepreneurship — B2–C1

### 8. Education & Learning
55. School & the classroom — A1–B1
56. University & studies — A2–B2
57. Learning French / language learning — A1–B2
58. Exams, grades & academic life — B1–B2
59. Skills, training & professional development — B1–C1

### 9. Health & Body
60. The body & parts — A1–A2
61. At the doctor / describing symptoms — A2–B1 `[immig]`
62. The pharmacy & medicine — A2–B1
63. Emergencies & accidents — A2–B2
64. Wellbeing, fitness & sport — A2–B2
65. Mental health & stress — B1–C1
66. The healthcare system (mutuelle, sécu) — B1–B2 `[immig]`

### 10. Leisure, Culture & Entertainment
67. Hobbies & free time — A1–B1
68. Sports & games — A1–B2
69. Music & concerts — A2–B2
70. Cinema, TV & series — A2–C1
71. Books & reading — B1–C1
72. Art, museums & exhibitions — B1–C1
73. Festivals & celebrations — A2–B2
74. Holidays & traditions (Noël, 14 juillet) — A2–B2
75. Going out & nightlife — A2–B1

### 11. Nature, Animals & Environment
76. Animals & pets — A1–B1
77. The weather & seasons — A1–B1
78. Nature & landscapes — A2–B2
79. City vs countryside — A2–B2
80. Environment & climate change — B1–C1 `[exam: argumentation]`
81. Ecology & sustainable living — B2–C1

### 12. Society, Civic Life & Administration
82. Countries, nationalities & geography — A1–B1
83. French administration (préfecture, CAF) — B1–B2 `[immig — flagship]`
84. Immigration & residency (titre de séjour) — B1–C1 `[immig]`
85. Taxes, bills & official paperwork — B1–C1 `[immig]`
86. Civic life, laws & rights — B2–C1
87. Politics & current affairs — B2–C1 `[exam: debate]`
88. Social issues & society — B2–C1 `[exam]`
89. The news & the press — B2–C1

### 13. Digital, Media & Modern Life
90. Phones, apps & technology — A2–B1
91. The internet & social media — A2–B2
92. Digital life & privacy — B1–C1
93. AI & the future — B2–C1 `[exam: argumentation]`
94. Media & misinformation — B2–C1 `[exam]`

### 14. Ideas, Opinion & the Abstract  (exam argumentation core)
95. Giving opinions & agreeing/disagreeing — B1–C1 `[exam core]`
96. Debating & argumentation (thèse/antithèse/synthèse) — B2–C1 `[exam core]`
97. Advantages & disadvantages / weighing options — B1–C1 `[exam]`
98. Hypotheses, conditions & the "what if" — B1–C1
99. Abstract concepts (freedom, justice, happiness) — B2–C1
100. Culture, identity & belonging — B2–C1

### 15. Exam Preparation  (strategy & skills — distinct from the Examiner mock engine)
These are *prep lessons* (taught in the Den, drilled in modes); the actual timed mock exams live in the **Examiner** bucket.
101. TEF — format, sections & strategy — A2–C1 `[exam]`
102. TCF — format, sections & strategy — A2–C1 `[exam]`
103. DELF/DALF — format, sections & strategy — A1–C1 `[exam]`
104. Listening exam skills (CO) — A2–C1 `[exam]`
105. Reading exam skills (CE) — A2–C1 `[exam]`
106. Speaking exam skills (EO/PO) — A2–C1 `[exam]`
107. Writing exam skills (EE/PE) — B1–C1 `[exam]`
108. Exam-day, timing & model answers (examiner insight) — A2–C1 `[exam]`

---

## Part D — Coverage check (does this satisfy the exams?)
The exams test everyday + practical + civic + argumentative registers. This catalogue covers all four:
- **Everyday / survival** → domains 1–6, 9–11 (A1–B1).
- **Professional / practical** → domains 5, 7, 8 (`[immig]` + `[exam]` markers).
- **Civic / administrative** → domain 12 (the immigration wedge).
- **Argumentation / abstract** → domains 13–14 (B2–C1, DELF B2 monologue, DALF synthèse, TEF/TCF opinion tasks).

Distribution by level weight: Foundation–A2 themes ≈ 45, B1–B2 ≈ 40, C1 ≈ 15 — front-loaded to where most learners start, which matches demand.

---

## Part E — Information architecture (mode-first home, per-bucket indexing)

**Decision (updated, supersedes the theme-spine-home idea):** Home KEEPS the current mode buckets (Den, Flashcards, Voice Flash, Sentences, Role Play, La Dictée, Playlist, Examiner, Smart Review). The format stays; the design work is *inside* each bucket. Every bucket is a view over the one tagged content pool (`schema.ts` `Item`s, already tagged `theme` + `level`; IDs `fr.<level>.<theme>.<seq>`), so a mode-first home + per-bucket theme/level indexing costs nothing extra.

### The indexing principle
Index each bucket by the axis that drives difficulty/relevance in that mode:
- **Vocabulary modes → theme-first** (level = in-bucket filter): Flashcards, Voice Flash, Sentences. Vocabulary is topic-bound.
- **Skill/grammar modes → level-first** (theme = scenario within): La Dictée, Role Play. Difficulty scales by level.
- **The Den → level-sequenced guided course:** the narrated multi-stage mixed-activity lessons; the spine that ties modes together.

### Per-bucket table
| Bucket | Door (primary) | Filter inside | Inside |
|---|---|---|---|
| Den | Level (guided path) | — | Narrated multi-stage swipe lessons, Found→C1; mixes all activity types |
| Flashcards | Theme | Level | Themed decks (shopping, animals…), filter to level |
| Voice Flash | Theme | Level | Themed spoken decks |
| Sentences | Theme | Level | Themed sentence build/say |
| La Dictée | Level | Theme (opt) | Dictation sets by level; homophone/grammar difficulty scales |
| Role Play | Level | Theme (scenario) | Pick level, then a themed scenario |
| Playlist | Theme | Level | Themed audio episodes, filter difficulty |
| Examiner | Exam → Level | — | TEF/TCF/DELF series by level |
| Smart Review | SRS | — | Due items + weak spots across everything |

Still underlying everything: the **Examiner** is a cross-cutting view (pulls level-appropriate items into exam task shapes), a thin **grammar spine** keeps the Den's level sequence gap-free, and the **SRS** surfaces via Smart Review + due-item prompts (not a new tab).

### The narrated swipe-stage lesson lives in the Den
The 7-stage swipe lesson below (walked by Camille, guided-autoplay or self-pace) is the **Den** experience, sequenced by level. The mode buckets are à-la-carte practice on the same pool; they are NOT the full guided walk. Swipe advances/reverses stages and stays inside the lesson (never exits the app); swipe-back = one stage back.

**Drill briefing (all mode buckets):** every drill (a Flashcards deck, Voice Flash set, Sentences set, Dictée set, Role Play scenario) opens with a short **narrated briefing card** — goal, objective, what you'll achieve, how to practice, what to expect inside. This is an authored `instruction` block with optional Camille narration; it is the only narration mode buckets carry (the full guided walkthrough stays in the Den).

| Stage | Purpose | Renderer (build status) |
|---|---|---|
| 1 Warm-up / recall | scene-set + re-test due items | SRS (needs scheduler) |
| 2 Focus / vocab | key words & phrases | `flashcards` + `voiceflash` (built) |
| 3 Input / story | comprehensible dialogue/episode | `player` episode (prototype) |
| 4 Practice | sentence build + dictation | `sentence` + `dictation` (built) |
| 5 Produce | roleplay + speak aloud | `roleplay` + `speak` (built) |
| 6 Check | mastery from SRS, not a gate | SRS |
| 7 Cheat sheet | recap, locked during practice | `Lesson.cheatSheet` (schema exists) |

Swipe advances/reverses stages and **stays inside the pack** (never exits the app); swipe-back = one stage back. Guided-autoplay = Camille advances stages at a set pace (slow/normal/fast); self-pace = learner swipes. One pack = one narrated lesson; both narration modes are the same structure.

### Build status: reframe vs net-new
**Already exists (reuse):** the tagged content pool (`schema.ts` themes+levels), `Unit` = pack, all mode screens as activity renderers (several with real STT), the port-4000 admin **feature-flag + rollout** system, attempt logging.
**Net-new connective tissue:** the swipe container, the pack-hub that sequences renderers, the narration layer (cached + live TTS; remote TTS is currently stubbed, Camille has no avatar), the **FSRS scheduler** (keystone gap), and content authoring at scale (3/43 units real, 0 exam items).

### Two flag systems (keep separate)
- **Feature flags** (experiment/rollout) — already built in `ealch-admin` (prod/staging toggles + % rollout). Missing only the wire: mobile app must read admin flags, not just `system_config`. This is the "switch advanced features to test a use case" surface.
- **Entitlements** (premium gating) — per-user, tied to subscription. Not built (`premium` boolean is fake). Designed in the monetization section.
A flag can gate a feature to everyone during beta before it ever becomes a premium entitlement.
