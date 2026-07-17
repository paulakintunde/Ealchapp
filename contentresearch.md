# Content Research — Ealch v2

**Status:** research and planning only. Nothing here is implemented.
**Date:** 2026-07-14
**Scope:** review of the proposed content/UI module list against the app as it actually exists, and a proposed content architecture, lesson formula set, and mobile design system for it.

Reviewed by four independent specialists — French curriculum design (CEFR, adult beginners), mobile UX/UI (React Native, reading-heavy interfaces), content-systems architecture (schema, pipeline, renderer), and learning-science assessment (SRS, adaptive testing, ethical game mechanics). Where they disagreed, the disagreement is recorded rather than smoothed over.

---

## 0. The headline

**The proposal is a good feature list and a poor course, and it is blocked on something none of it mentions.**

Three facts, established by reading the code, that reorder everything:

**0.1 — The canonical schema exists and nothing uses it.**
[`src/content/schema.ts`](ealch-v2/src/content/schema.ts) defines a 12-type `LessonSection` union — `teach · steps · examples · useCases · hacks · cheatSheet · commonErrors · focus · table · audio · practice · quiz`. That list already covers most of the proposal's "Teach" section. But [`app/lesson.tsx:15`](ealch-v2/app/lesson.tsx#L15) imports from `content/lessons.ts`, not from the schema. The renderer draws a fixed, named-field lesson in fixed source order.

| | |
|---|---|
| Section types defined in `schema.ts` | **12** |
| Section types with any renderer | **5** |
| Section types shape-compatible with what renders | **4** |
| `Item`s in the corpus | **0** |
| Lessons authored (against 43 units) | **3** |
| Files in the app importing `schema.ts` | **0** |

**Every breaking schema change proposed below is free today and expensive in three weeks.** Amend the schema *before* the corpus is written, then write the corpus once. This is the single highest-leverage decision in this document.

**0.2 — A third of the proposal is a desktop web spec.**
Hover states, dual-column sidebars, split-screen alignment, and a sticky sidebar index are not touch patterns. They need translating, and several need killing rather than translating. §4 does this one by one.

**0.3 — A third of the proposal is already built, under different names.**
The "sentence unscrambler" is [`app/sentence.tsx:226-271`](ealch-v2/app/sentence.tsx#L226-L271), and it is tap-to-place. The "instant error-correction drawer" is [`app/dictation.tsx:296-341`](ealch-v2/app/dictation.tsx#L296-L341), inline, and better than a drawer. Progressive-disclosure accordions exist three times over. The `quiz.why` field the error drawer needs has been authored and thrown away since day one ([`schema.ts:181`](ealch-v2/src/content/schema.ts#L181)).

And what the proposal is **missing** matters more than what it contains. There is no perception-before-production step, no comprehensible-input volume, and no spaced retrieval — the three things that actually drive French acquisition. See §3.

---

## 1. Verdict on every proposed module

Legend: **SHIP** as proposed · **TRANSLATE** (right idea, wrong form for mobile) · **REBUILD** (exists, but the current version is inadequate) · **KILL** (do not build) · **BLOCKED** (needs something else first)

### 1.1 Teach

| Proposed | Verdict | Why |
|---|---|---|
| Golden Rule focus box | **SHIP** | Already `focus` ([`schema.ts:171`](ealch-v2/src/content/schema.ts#L171)). Add a `rule` field for the one proposition; cap `points` at 3 in validation or it stops being a focus. |
| Step-by-Step Builder | **SHIP, widened** | `steps: string[]` cannot show the transformation each step performs, which is the whole point. Widen to `BuildStep[]`. As a *static diagram* it is theatre; as a thing the learner assembles it is the best grammar drill in the list. |
| Interactive paradigm tables (tap → audio) | **SHIP — top priority** | The most French-specific module here. `parle / parles / parle / parlent` is four spellings and **one sound**. A silent conjugation table actively teaches a falsehood, and `table` ([`schema.ts:172`](ealch-v2/src/content/schema.ts#L172)) has no audio field, so today it teaches that falsehood. |
| Split-screen bilingual align, word-level linking | **KILL** | Two reasons, either sufficient. **Pedagogically** it teaches that French is English with different words — and the alignment is false for exactly the structures beginners get wrong (`ne…pas`, clitics, `il y a`, `j'ai faim`). **Typographically** a 165pt column is ~22 characters per line against a 45-character floor. See §4.3. |
| Idiomatic "Use Cases" | **SHIP, extended** | `useCases` ([`schema.ts:164`](ealch-v2/src/content/schema.ts#L164)) has `{situation, fr, en}` and **no register field**. A French use case without tu/vous is not yet correct. This is the most important single-field gap in the schema. |
| "Hacks" corner (mnemonics) | **SHIP, with a filter** | The mandatory `why` on `hacks` ([`schema.ts:166`](ealch-v2/src/content/schema.ts#L166)) is a real guard against folklore. **Dr & Mrs Vandertramp fails it** — see §3.4. |
| Common pitfalls / faux amis | **SHIP** | Fields on `commonErrors`, not a new type. Curate to the ones that cause real communication failure. See §3.5. |
| Literal vs Figurative toggle | **KILL** | It installs word-by-word decomposition at exactly the moment the learner should be acquiring chunks whole. It produces `je suis faim`, `je suis 30 ans`, and via "I am hot" → `je suis chaud`, which means something else. Keep a `literal` field on the example row, teach-side only, never a toggle beside a practice item. |
| Cultural context notes (sidebar) | **TRANSLATE** | Split in two. **Pragmatic register rules** (tu/vous; *bonjour* as an obligatory entry ritual) are not colour — they are the function, and they go **inline, in `useCases`, and get assessed**. **Encyclopedic colour** (why Québec says *courriel*) is optional, collapsed, and not at A1. A sidebar is the universal UI signal for "skip me". |

### 1.2 Practice

| Proposed | Verdict | Why |
|---|---|---|
| Shadowing player | **SHIP — without a score** | Best-evidenced technique for prosody, and French is syllable-timed where English is stress-timed, which is the #1 accent giveaway. But see the next row. **And it must refuse to run on device TTS** — scoring a learner's rhythm against a handset's synthesiser scores the handset. |
| …with waveform / accuracy score | **KILL** | Two separate lies. [`src/components/Waveform.tsx`](ealch-v2/src/components/Waveform.tsx) is **decorative** — the bars are `0.18 + 0.72 * abs(sin(i * 0.85 + 1.2))`, not derived from audio, and cannot be: `expo-audio` exposes no PCM/FFT. A "side-by-side waveform" is two fake sine curves next to each other. The accuracy score is worse — see §5.3. |
| Voice conversation sim | **SHIP at A2+** | Near-useless at A1 (nothing to produce yet). Must be tu/vous-aware or it trains register-blindness. |
| Pronunciation drill (STT) | **SHIP as practice, not as a score** | Ship `record → hear native → hear yourself → self-rate`. Self-comparison against a native model is the mechanism anyway; the number adds only false authority. |
| Audio speed toggles 0.5×–1.25× | **SHIP, floor at 0.75×** | **0.5× destroys liaison and enchaînement, which are the entire point.** Slow French is not French. And "slow" must be natively re-synthesised slow speech, never client-side time-stretch — a pitch-shifted French vowel is a different vowel. Exists twice already ([`player.tsx:87`](ealch-v2/app/player.tsx#L87), [`dictation.tsx:69`](ealch-v2/app/dictation.tsx#L69)); consolidate to one 3-way segment. |
| Transcription gap-fill (dictation) | **SHIP — top priority** | French has the largest written/spoken divergence of the major Western languages. Dictation is the **only** exercise that forces sound→grammar mapping (`ses/ces`, `a/à`, `parle/parles/parlent`). [`drills.ts:80-105`](ealch-v2/src/content/drills.ts#L80-L105) is already the most pedagogically sophisticated content in the repo. Expand it; do not leave it as a side drill. |
| Multi-voice / regional accent selector | **SHIP gender + speed. DEFER region.** | Input variability helps *once a phonological category exists*; before that it **prevents the category forming**. Fix one variety (standard metropolitan), build the categories, introduce Québécois/Southern from mid-A2 as an explicitly-labelled listening-robustness skill. Also: hide the selector when `< 2` FR voices exist, or it does nothing on half of Android installs. |
| Sentence unscrambler | **ALREADY BUILT** | [`sentence.tsx:226-271`](ealch-v2/app/sentence.tsx#L226-L271), tap-to-place, ~45 lines, accessible. Reserve it for word-order-hard structures (clitic order: `Je ne le lui ai pas donné`; BAGS adjectives). Worthless on basic SVO. **Do not add drag-and-drop** — see §4.6. |
| Conjugation grid run | **SHIP the grid. KILL the clock.** | Timed + typing + accents on a phone measures thumb speed. A countdown punishes precisely the learner who needs to think. If they want a pressure signal, give them a correct-in-a-row counter. |
| Free-response AI evaluator | **SHIP at A2+, with an authored rubric** | An LLM grading against no rubric marks correct answers wrong, at scale, invisibly. The rubric must be authored and human-approved, not invented at grade time. |
| Interactive story mode | **SHIP — and promote it** | Filed 4th under Reading; it should be the **backbone**. It is nearly free: tap-word → definition + gender + pronunciation *is* `Item`, which already carries `fr/en/gender/ipa/audioRef`. See §2.10. |
| SRS flashcard decks | **BLOCKED** | `Item.id` exists *explicitly* to be the SRS key ([`schema.ts:29-34`](ealch-v2/src/content/schema.ts#L29-L34)) and the SRS does not exist. This is not a module; it is the spine. See §5.2. |
| Inline clues | **SHIP** | Tap-to-reveal **in place**, not a tooltip and not a sheet. Anchored to a token, not to the sentence. |

### 1.3 Quiz and gamification

| Proposed | Verdict | Why |
|---|---|---|
| Progressive-difficulty quiz (5 questions) | **KILL the within-lesson adaptivity** | You cannot adapt on 5 items. See §5.1 — this includes a live bug in the current pass threshold. Adapt **across the corpus over time**, off the attempt log, which is what `Item.id` was designed for. |
| "Boss Fight" cumulative time-attack gate | **KILL as specified** | Time pressure aids automatisation of *already-learned* mappings and **degrades production of not-yet-automatised structure** — French-specifically, it trains the learner to drop agreement, gender, the second half of `ne…pas`, and liaison, because those are what cost processing time. You would build a machine that drills the errors and then gates progression on them. Ship an **untimed can-do check** instead. §5.4. |
| Visual matcher | **SHIP (weak, cheap)** | Weakest form of retrieval; harmless warm-up. Same interaction primitive already exists. **Blocked on image licensing**, not on capability — keep `imageRef` nullable and degrade to text. |
| Streaks | **KEEP — it is already honest** | Derived from a real session log ([`home.tsx:68-77`](ealch-v2/app/home.tsx#L68-L77) → `progress.logic.ts`). Needs humane break/repair rules. §5.5. |
| XP and levels | **REJECT** | A second, fabricated currency layered on the same events. [`useStore.ts:239-246`](ealch-v2/src/store/useStore.ts#L239-L246) **deleted** seeded streak/review/week data because "they shipped seeded… and every install carried the same fabricated fortnight." [`home.tsx:79-84`](ealch-v2/app/home.tsx#L79-L84) leaves a count visibly unfinished rather than show a plausible number that means nothing. **Adding XP directly reverses a documented, committed-to principle of this codebase.** |
| Instant error-correction drawer | **REBUILD as inline** | The *loop* is right and the *drawer* is wrong: a drawer covers the thing you got wrong, so you cannot compare your answer to the correction while reading the explanation. [`dictation.tsx:296-341`](ealch-v2/app/dictation.tsx#L296-L341) already does it inline and correctly. The deep-link back to the exact step needs an anchor scheme — §6.4. |

### 1.4 UI/UX patterns

| Proposed | Verdict | Why |
|---|---|---|
| Dual-column sticky sidebar | **KILL** | 390pt phone at `paddingHorizontal: 24` = 342pt of measure, which is *already the floor*. A sidebar takes measure from the only thing on screen that matters. **And the obvious translation — a 40pt sticky progress rail — is also wrong**, for the same reason. §4.2. |
| Progressive-disclosure accordions | **SHIP** | Already built three times ([`den.tsx:278-297`](ealch-v2/app/den.tsx#L278-L297), [`home.tsx:311-318`](ealch-v2/app/home.tsx#L311-L318), [`sentence.tsx:202-216`](ealch-v2/app/sentence.tsx#L202-L216)). Extract one primitive into `ui.tsx`. |
| Cheat-sheet drawer | **SHIP — but `BottomSheet` must be rebuilt** | Content already exists as `cheatSheet`. The vehicle does not: [`BottomSheet.tsx`](ealch-v2/src/components/BottomSheet.tsx) has a **closed union of hardcoded content**, no snap points, no pan gesture, and a **40×4 grabber that looks draggable and is not**. §4.2. |
| Theme toggle Light/Dark/**Sepia** | **SKIP sepia** | [`palette.ts:34`](ealch-v2/src/theme/palette.ts#L34) — `LIGHT.bg` is **already `#F5F3EE`**, a warm paper cream. The only white surface is `LIGHT.card = #FFFFFF`. **Light mode is already 80% sepia; the white card was the bug.** Warm two hex values and you capture the entire perceptual delta with no third mode, no third contrast matrix, no third settings row. |
| Zen mode | **KILL as a mode** | It is "hide the chrome on scroll-down, restore on scroll-up" — ~20 lines, zero store surface, zero settings rows. And it is *better* than a mode, because the reader never has to decide to enter it. |
| Sticky vocabulary banner | **REJECT as specified** | 3–5 French vocab chips wrap to two rows ≈ 100pt, on top of 117pt of existing chrome = **217pt of furniture above the first word, 26% of the screen, permanently.** Indefensible for a reading app. Fold into the collapsed header as an unfoldable 40pt row. §4.4. |

---

## 2. The section catalogue

What each content type should actually look like on a phone, with its data shape. These are the building blocks; §3 assembles them into lesson formulas.

Wireframes are drawn at phone width (390pt, ~40 chars).

### 2.1 `focus` — the Golden Rule

The one proposition, at typographic weight, with the elaboration beneath it. Deliberately short. Validation caps `points` at 3, or it stops being a focus.

```
┌────────────────────────────────────────┐
│  ▌ LA RÈGLE D'OR                       │  ← accent bar, t.accTx
│  ▌                                     │
│  ▌ Le passé composé = auxiliaire       │  ← serif, 22px, the RULE
│  ▌ + participe passé.                  │
│  ▌                                     │
│  ▌ · Choisir avoir ou être             │  ← 15px, max 3 points
│  ▌ · Accorder avec être                │
│  ▌ · Le participe ne change pas        │
│  ▌   avec avoir                        │
└────────────────────────────────────────┘
   accA(8) fill · 3pt accent left rule
```

```ts
| { type: 'focus'; title: string; rule?: string; points: string[] }
```

### 2.2 `steps` — the Step-by-Step Builder

The ladder for the learner who needs the ladder, not the lecture. The current `steps: string[]` cannot show the *transformation* each step performs, which is the entire point of a builder.

```
┌────────────────────────────────────────┐
│  CONSTRUIRE LE PASSÉ COMPOSÉ           │
│                                        │
│  ①  Prendre le sujet                   │
│      ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈       │
│      Je                          ▸     │  ← `result`, grows each step
│                                        │
│  ②  Choisir l'auxiliaire               │
│      être — mouvement / réflexif       │  ← `note`
│      ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈       │
│      Je suis                     ▸     │
│                                        │
│  ③  Former le participe passé          │
│      aller → allé                      │
│      ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈       │
│      Je suis allé                ▸     │
│                                        │
│  ④  Accorder — avec être seulement     │
│      ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈       │
│      Je suis allée  (f.)         ⏵     │  ← ⏵ = tap to hear
└────────────────────────────────────────┘
   `result` string GROWS down the card.
   that growth IS the teaching.
```

```ts
export type BuildStep = {
  step: string;                        // 'Choisir l'auxiliaire'
  example?: { fr: string; en: string };
  result?: string;                     // 'Je suis' — the string so far
  note?: string;
};
| { type: 'steps'; title: string; steps: BuildStep[] }
```

### 2.3 `paradigm` — the interactive conjugation table

**The one genuinely new section type, and the highest-value item in the whole proposal.**

`parle / parles / parle / parlent` — four spellings, one sound. A silent conjugation table teaches a falsehood. The "sounds like" column *is* the lesson, and no generic `table` can give it to a drill as data.

```
┌────────────────────────────────────────┐
│  PARLER — PRÉSENT              ⏵ tout  │
│  ┌──────────┬───────────┬───────────┐  │
│  │ je       │ parle     │  par-l    │◀─┼─ tap ROW → audio
│  │ tu       │ parles    │  par-l    │  │
│  │ il/elle  │ parle     │  par-l    │  │
│  ├──────────┼───────────┼───────────┤  │
│  │ nous     │ parlons   │  par-lõ   │  │
│  │ vous     │ parlez    │  par-lé   │  │
│  ├──────────┼───────────┼───────────┤  │
│  │ ils      │ parl(ent) │  par-l    │  │  ← `silent: true` → the -ent
│  └──────────┴───────────┴───────────┘  │     renders greyed. it is silent.
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ▌ 4 formes. 1 son. Seuls « nous »     │  ← `rule`
│  ▌ et « vous » s'entendent.            │
└────────────────────────────────────────┘
   the highlighted band is the whole
   point. tap any row → hear it, and
   hear that four of them are identical.
```

```ts
export const PERSONS = ['je','tu','il','nous','vous','ils'] as const;

export type ParadigmCell = {
  person: Person;
  form: string;              // 'parlons'
  sounds?: string;           // 'par-lõ'
  silent?: boolean;          // the -ent of 'ils parlent' — a real teaching fact
  audio?: AudioAsset | null;
};

| { type: 'paradigm'; title: string;
    lemma: string;           // 'parler' — the drill's prompt
    tense: string;           // 'présent'
    cells: ParadigmCell[];   // all six persons; a half-paradigm teaches a half-verb
    rule?: string;
  }
```

**Why a new type and not object-cells on `table`:** the timed conjugation grid must consume this **as data**, not as a rendered table. Forcing it through `table` means a drill parsing display strings to find "the *nous* form of the present" — exactly the class of bug the schema exists to kill. A paradigm has real axes; a table does not.

> **⚠ rely on real example researched and online sourced example for LLM-generate verb forms.** A hallucinated conjugation is a *taught lie* in the one place a learner cannot self-correct. Generate paradigms from a deterministic conjugator or a curated data file. The LLM may write `rule` and `sounds`, nothing else, until it has verifiable examples to use.

### 2.4 `examples` — bilingual, stacked (this replaces split-screen)

This type **already is** the bilingual align, done at the only defensible level: the chunk. The proposal would regress it to word level. See §4.3 for the typographic arithmetic; here is the design.

```
   AT REST — French owns the full measure
┌────────────────────────────────────────┐
│  « Je voudrais un café, s'il vous      │  ← serif italic, 19px
│    plaît »                             │     full 342pt measure
│  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈  │
│  voir la traduction              ⏵     │  ← 44pt row. tap.
└────────────────────────────────────────┘

   REVEALED — expands IN PLACE. no sheet.
┌────────────────────────────────────────┐
│  « Je voudrais un café, s'il vous      │
│    plaît »                             │
│  I'd like a coffee, please             │  ← t.txMuted
│  « je voudrais » is the polite form.   │  ← `note`
│  « je veux » sounds like a demand.     │
└────────────────────────────────────────┘
   the learner controls when the crutch
   appears. THAT is the pedagogy.
   ⏵ long-press any word → tts.speak
```

```ts
export type ExampleRow = {
  fr: string;
  en: string;                 // the IDIOMATIC translation
  literal?: string;           // word-for-word — teach-side only, never in practice
  note?: string;
  align?: Align;              // §6.2 — chunk-level, flagship examples only
  audio?: AudioAsset | null;
};
```

This is a **three-line diff** on the existing example cards at [`lesson.tsx:277-297`](ealch-v2/app/lesson.tsx#L277-L297): the `ex.en` line becomes conditional on a per-index `revealed` state.

### 2.5 `useCases` — where you would actually say it

**The most important schema gap.** The same situation has two different correct utterances depending on who you are speaking to, **and that is the teaching point.** A French use case without register is not yet correct.

```
┌────────────────────────────────────────┐
│  QUAND L'UTILISER                      │
│                                        │
│  ┌────────────────────────────────┐    │
│  │ AU CAFÉ · avec le serveur      │    │
│  │                       ╭──────╮ │    │
│  │                       │ VOUS │ │    │  ← register chip.
│  │                       ╰──────╯ │    │     NOT decoration.
│  │ « Bonjour, je voudrais un      │    │
│  │   café, s'il vous plaît. »     │    │
│  │ Hello, I'd like a coffee.      │    │
│  └────────────────────────────────┘    │
│                                        │
│  ┌────────────────────────────────┐    │
│  │ CHEZ UN AMI                    │    │
│  │                        ╭─────╮ │    │
│  │                        │ TU  │ │    │
│  │                        ╰─────╯ │    │
│  │ « Tu me fais un café ? »       │    │
│  │ Make me a coffee?              │    │
│  └────────────────────────────────┘    │
│                                        │
│  ▌ On dit TOUJOURS bonjour en          │  ← teach variant:'register'
│  ▌ entrant. Ce n'est pas une           │     INLINE. not a sidebar.
│  ▌ politesse — c'est la règle.         │     this is the FUNCTION.
└────────────────────────────────────────┘
```

```ts
export const REGISTERS = ['formel','standard','familier','argot'] as const;
export const REGIONS   = ['fr','qc','be','ch'] as const;

| { type: 'useCases'; title: string;
    cases: { situation: string; fr: string; en: string;
             register?: Register; region?: Region }[] }
```

### 2.6 `hacks` — the memory hooks, with a folklore filter

The mandatory `why` ([`schema.ts:166`](ealch-v2/src/content/schema.ts#L166)) is a real guard. Apply it ruthlessly. See §3.4 for why Vandertramp fails it and what replaces it.

```
┌────────────────────────────────────────┐
│  🔑 LES ASTUCES                        │
│                                        │
│  ┌────────────────────────────────┐    │
│  │ -tion · -sion · -té · -ette    │    │
│  │ -ance · -ence · -ude    → LA   │    │
│  │                                │    │
│  │ -age · -ment · -eau            │    │
│  │ -isme · -oir            → LE   │    │
│  │ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈  │    │
│  │ POURQUOI  ~90% de fiabilité et │    │  ← `why` is MANDATORY.
│  │ ça marche sur des mots que     │    │     it is what separates
│  │ vous n'avez jamais vus.        │    │     a rule from folklore.
│  └────────────────────────────────┘    │
│                                        │
│  exceptions ⌄  la page · la plage      │  ← accordion, collapsed
└────────────────────────────────────────┘
```

### 2.7 `commonErrors` — pitfalls and faux amis

One type, three kinds. A faux ami is a wrong/right pair with one extra fact — the English word it resembles. That is a field, not a new section.

```
┌────────────────────────────────────────┐
│  ⚠ LES PIÈGES                          │  ← t.danger
│                                        │
│  ┌────────────────────────────────┐    │
│  │  ~~j'ai allé~~   →   je suis   │    │  ← strike + arrow + right
│  │                       allé     │    │
│  │  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈  │    │
│  │  « aller » = mouvement.        │    │
│  │  Mouvement → être.             │    │
│  └────────────────────────────────┘    │
│                                        │
│  ┌────────────────────────────────┐    │
│  │  FAUX AMI            ╭───────╮ │    │  ← kind: 'fauxAmi'
│  │                      │ ~ EN  │ │    │
│  │  sensible            ╰───────╯ │    │
│  │  ≠ sensible (EN)               │    │  ← `looksLike`
│  │  = sensitive                   │    │
│  │  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈  │    │
│  │  Vous direz « je suis          │    │  ← the WHY is a
│  │  sensible » en pensant         │    │     CONSEQUENCE, not
│  │  « raisonnable ». On           │    │     a definition.
│  │  comprendra que vous pleurez   │    │
│  │  facilement.                   │    │
│  └────────────────────────────────┘    │
└────────────────────────────────────────┘
```

```ts
export const ERROR_KINDS = ['error','fauxAmi','pitfall'] as const;

| { type: 'commonErrors'; title: string;
    errors: { wrong: string; right: string; why: string;
              kind?: ErrorKind; looksLike?: string }[] }
```

**A list of faux amis is trivia. A consequence is teaching.** Author the `why` as what will happen to the learner, not as a definition.

### 2.8 `minimalPair` — NEW, and the biggest omission in the proposal

English speakers cannot *hear* the contrasts they cannot produce. Perception must be driven to criterion **before** production is asked for.

The current code does the exact opposite: `sons3` explains nasals in a table and jumps straight to *production* via the nasal pads ([`lesson.tsx:201-206`](ealch-v2/app/lesson.tsx#L201-L206)). There is no perception step anywhere in `src/content/`.

```
   MODE: discriminate   ← run to criterion (8/10) FIRST
┌────────────────────────────────────────┐
│  ÉCOUTEZ                        6 / 10 │
│                                        │
│              ╭─────────╮               │
│              │    ⏵    │               │  ← 72pt. plays ONE of them.
│              ╰─────────╯               │
│                                        │
│  Lequel avez-vous entendu ?            │
│                                        │
│  ┌──────────────┐  ┌──────────────┐    │
│  │              │  │              │    │
│  │     tu       │  │    tout      │    │  ← 2AFC. nothing else.
│  │     /y/      │  │    /u/       │    │     no text hint, no
│  │              │  │              │    │     spelling crutch.
│  └──────────────┘  └──────────────┘    │
│                                        │
│  ▓▓▓▓▓▓▓▓░░░░  6 correct               │
└────────────────────────────────────────┘

   MODE: produce   ← ONLY after criterion is met
```

```ts
| { type: 'minimalPair'; title: string;
    contrast: string;    // 'y-vs-u' | 'nasal-vs-oral' — matches an Item tag
    pairs: { a: string; b: string; ipaA: string; ipaB: string; gloss?: string }[];
    mode: 'discriminate' | 'identify' | 'produce';   // strictly in this order
  }
```

**The contrasts that matter, by communicative cost:**

| Contrast | Examples | Why it matters |
|---|---|---|
| **/y/ – /u/** | `tu/tout`, `rue/roue`, `dessus/dessous`, `vous/vu` | **Causes actual misunderstanding.** Currently has **no unit at all** in [`curriculum.ts`](ealch-v2/src/content/curriculum.ts). |
| **/ɛ̃/ – /ɑ̃/ – /ɔ̃/** | `vin / vent / vont` | Three different words. |
| **nasal vs oral+n** | `bon/bonne`, `un/une`, `plein/pleine` | **This contrast *is* the m/f distinction** for a large class of adjectives. A learner who cannot hear it cannot hear gender agreement. |
| /e/ – /ɛ/, /ø/ – /œ/ | `é/è` | Lower cost; later. |

> **Misallocated phonics effort in the current curriculum:** [`curriculum.ts:9`](ealch-v2/src/content/curriculum.ts#L9) gives a **full unit** to "the French r", while [`curriculum.ts:7`](ealch-v2/src/content/curriculum.ts#L7) crams `a, e, i, o, u, ou, eu` into one. This is backwards. A slightly-wrong /ʁ/ is universally understood; /y/ vs /u/ is not. **Allocate drilling time by communicative cost, not by how exotic the sound feels.**

### 2.9 `audio` — listening, with liaison made visible

The codebase already invented the right convention and has not formalised it: [`drills.ts:29`](ealch-v2/src/content/drills.ts#L29) writes `vous‿avez` and [`lessons.ts:79`](ealch-v2/src/content/lessons.ts#L79) writes `les‿amis`.

**Formalise `‿` as the corpus liaison marker.** The renderer strips it for TTS and renders it as a link mark. Liaison is the #1 cause of "I can read French but I cannot understand spoken French" — the learner hears `[lezami]` and cannot find the word boundary.

```
┌────────────────────────────────────────┐
│  À L'ÉCOUTE            [0.75│ 1.0 │1.25]│  ← 3-way. NO 0.5×.
│                                        │
│  ┌────────────────────────────────┐    │
│  │ ⏵  Les‿amis sont‿arrivés       │    │  ← ‿ rendered as a
│  │    ▁▃▅▇▅▃▁▃▅▇▅▃▁                │    │     visible link mark
│  │    The friends have arrived    │    │
│  └────────────────────────────────┘    │
│  ┌────────────────────────────────┐    │
│  │ ⏵  Vous‿avez un‿enfant ?       │    │
│  │    ▁▃▅▇▅▃▁▃▅▇▅▃▁                │    │
│  └────────────────────────────────┘    │
└────────────────────────────────────────┘
```

```ts
| { type: 'audio'; title: string;
    lines: { fr: string; en?: string; audio?: AudioAsset | null }[] }
```

### 2.10 `story` — NEW. The comprehensible-input backbone.

**This is the highest-leverage content investment in the entire proposal, and it is filed as a reading *feature*.**

A 43-unit course with three authored lessons gives the learner a few hundred tokens of French, total. Acquisition needs *volume* of mostly-known, i+1 text with audio.

```
┌────────────────────────────────────────┐
│  ✕  L'HISTOIRE · A1        ▓▓▓░░  ⚙   │
├────────────────────────────────────────┤
│                                        │
│  Marie entre dans le café. Il est      │
│  huit heures. Elle a faim et elle      │
│  ┈┈┈┈┈                                 │  ← tapped word underlines
│  voudrait un croissant.                │     IN PLACE. nothing moves.
│                                        │
│  ┌────────────────────────────────┐    │
│  │  faim              ⏵  /fɛ̃/    │    │  ← inline gloss card,
│  │  hunger · f.                   │    │     expands under the line
│  │  « avoir faim » = to be hungry │    │
│  │  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈  │    │
│  │  ⓘ chunk — apprenez-le entier  │    │  ← kind:'phrase' → says so.
│  └────────────────────────────────┘    │     DOES NOT decompose it.
│                                        │
│  Le serveur arrive. « Bonjour ! »      │
│  ...                                   │
│                                        │
│                            ╭─────╮     │
│                            │  ⏵  │     │  ← play whole story
│                            ╰─────╯     │
└────────────────────────────────────────┘
```

```ts
| { type: 'story'; title: string;
    level: Level;
    body: { fr: string; en?: string; tokens?: Token[] }[];
    glossItemIds: string[];   // tap-a-word resolves against the CORPUS
    audio?: AudioAsset | null;
    questions?: { q: string; opts: string[]; correct: number }[];  // comprehension
  }
```

**Why it is nearly free:** tap-word → definition + gender + pronunciation *is* `Item` ([`schema.ts:117-143`](ealch-v2/src/content/schema.ts#L117-L143)), which already carries `fr / en / gender / ipa / audioRef`.

**And this one validation rule turns a feature into a curriculum:**

> **≥90% of a story's tokens must resolve to corpus items at or below this level.**

That rule forces every story to be built from taught vocabulary. It is the difference between "story mode" and comprehensible input.

### 2.11 `cheatSheet` — the thing you screenshot before the exam

Content type already exists. The delivery is a persistent-peek bottom sheet (§4.2).

> **One rule: the cheat sheet must be LOCKED during quiz and production sections.** Otherwise it removes the retrieval effort that *is* the learning.

### 2.12 `recall` — NEW. The spine.

Nothing in the proposal *schedules* retrieval. Without it, a 43-unit track is 43 disconnected experiences and retention at unit 20 is near zero.

**Every lesson opens by re-testing due items from previous lessons.** Retrieval goes first, while attention is fresh — it is the only section that gets skipped if placed last.

```
┌────────────────────────────────────────┐
│  AVANT DE COMMENCER              3 / 5 │
│                                        │
│  De la leçon 2 — il y a 4 jours        │  ← honest. from the log.
│                                        │
│         ╭────────────────────╮         │
│         │                    │         │
│         │      le pain       │         │
│         │                    │         │
│         ╰────────────────────╯         │
│                                        │
│  ┌──────────────┐  ┌──────────────┐    │
│  │  the bread   │  │  the wine    │    │
│  └──────────────┘  └──────────────┘    │
│                                        │
│  ░░░░░░░░  passer  ⏵                   │  ← always skippable.
└────────────────────────────────────────┘     never a gate.
```

```ts
| { type: 'recall'; title: string;
    itemIds: string[];                    // empty ⇒ defer to the scheduler
    scope: 'due' | 'unit' | 'explicit';
    mode: 'produce' | 'recognise';
  }
```

### 2.13 `practice` — the join between a lesson and the drills

**This is the economy argument of the whole schema.** Seven of the proposal's practice modules are not new *content shapes* — they are new *ways to ask about an item you already have*. One field absorbs all of them.

```ts
// DRILL_KINDS extends the list that already exists at schema.ts:52-59
export const DRILL_KINDS = [
  'flashcard','voiceflash','dictation','sentence','roleplay','review',
  // ── additions ──
  'shadow','pronounce','gapfill','unscramble','conjugate','freeResponse','story','match',
] as const;

| { type: 'practice'; title: string;
    skill: Skill;          // read | write | speak | listen  (already exists)
    mode: DrillKind;       // ← THE addition
    itemIds: string[];
    opts?: PracticeOpts;
  }
```

Because `Item.drills` already declares eligibility ([`schema.ts:137-139`](ealch-v2/src/content/schema.ts#L137-L139)), the corpus validator can now enforce a rule it cannot today:

> **A practice section may not ask an item to do a drill the item does not declare.**

Without that check, the failure mode is a **blank drill screen with no error anywhere** — the hardest possible bug to diagnose from a crash report.

**If this field is rejected in favour of a section type per drill, `SECTION_TYPES` goes from 12 to 21** and the renderer's exhaustiveness check becomes the only thing holding it together.

---

## 3. The lesson formulas

A lesson is an ordered section list. The order is the pedagogy. Four lesson types, four orders.

### 3.0 The universal spine

```
recall  →  focus  →  [type-specific core]  →  practice  →  mastery check  →  cheatSheet
```

**Retrieval first, always.** It is the only section that gets skipped if placed last.

### 3.1 Phonics / Sons

The change from what exists today: **perception gates production.** `sons3` currently does the reverse.

```
recall           due phoneme items
focus            the contrast, and why it matters
                 "vin / vent / vont are three different words"
minimalPair      mode: discriminate      ◀── PERCEPTION FIRST
                 criterion 8/10 before proceeding
teach            what the mouth does. articulation, not history. short.
table            spelling → sound → example, `say` on every row  ⏵
minimalPair      mode: identify — in running speech
audio            the sound in context. 0.75× and 1.0× only.
shadow           focus: 'phoneme' | 'rhythm'
minimalPair      mode: produce           ◀── NOW, and only now
commonErrors     name the English-transfer error explicitly
practice         listen → dictation
practice         speak  → voiceflash
cheatSheet
```

### 3.2 Vocabulary

**The governing rule: never a bare noun.** Always `une voiture`, never `voiture (f.)`. Gender is not metadata; it is part of the phonological word. Every flashcard face, story gloss, quiz option, and drill prompt carries the determiner.

> ⚠ The corpus already half-violates this. `vfItems` gets it right (`un café`, `une maison` — [`index.ts:37-42`](ealch-v2/src/content/index.ts#L37-L42)), but `sbWords` splits `un` from `café` into **separate draggable bubbles** ([`index.ts:48-53`](ealch-v2/src/content/index.ts#L48-L53)), teaching that the article is detachable. Grammatically it is. For a beginner, **`un café` must be one bubble.**

```
recall
focus            the can-do: "I can name what's on a café table"
examples         chunk-level. words IN a phrase, never bare.
table            field table, gender colour-coded, `say` per cell  ⏵
                 ALWAYS with the article
hacks            gender-by-ending (generative rules only)
audio            the words in natural sentences, at speed
story            ◀── THE INPUT. words met in context, tap to gloss.
practice         read   → the story's gloss pass
practice         listen → voiceflash / dictation
practice         speak  → produce the item WITH ITS ARTICLE
commonErrors     the faux amis living in this field
                 (la monnaie / l'argent · la librairie / la bibliothèque)
useCases         where you'd actually say it — WITH REGISTER
quiz + gender-snap drill    ◀── the ONE place speed is right
cheatSheet
```

**The gender-snap drill is the single defensible use of time pressure in this app.** Gender retrieval *should* become automatic, it is recognition-only, and it is the one thing that genuinely benefits from a clock. `le` or `la`, fast. Nothing else gets a timer.

### 3.3 Grammar

```
recall
focus            the golden rule, one line
examples         the structure IN USE, before the paradigm.
                 form emerges from meaning.
teach            the concept, stated GENERATIVELY:
                 "être = motion + change of state + ALL reflexives"
                 — not "here are 14 verbs"
paradigm         the forms, with audio, HIGHLIGHTING the homophones  ⏵
                 (parle/parles/parle/parlent = one sound.
                  the sound column IS the lesson.)
steps            the procedure: choose aux → conjugate → form participle
                 → check agreement
practice         mode: 'unscramble' or a builder — the learner ASSEMBLES it.
                 MUST include the transitive flip (j'ai monté les valises)
                 and the reflexives, or you have taught Vandertramp
                 and nothing more.
commonErrors     « j'ai allé » · « je me suis levé(e) » agreement
hacks            only with a real `why`
audio            the structure in natural speech — where "je suis allé"
                 becomes [ʒɥi.za.le] and the learner cannot find the words
practice         write  → conjugation grid, UNTIMED
practice         speak  → produce the structure aloud
practice         listen → dictation (silent morphology: parle/parlent/parlez)
mastery check    at least half PRODUCTION items
cheatSheet
```

### 3.4 The Vandertramp problem

The proposal names Dr & Mrs Vandertramp specifically. It fails the `why` test, and here is the argument:

1. **It is a 14-letter acronym for verbs whose first letters you must already know.** Retrieving "the second R is *retourner*" is harder than retrieving the rule.
2. **It is a list instead of a concept.** The concept — intransitive verbs of **motion and change of state** — is generative and explains `naître/mourir/devenir`. Vandertramp cannot explain the transitive flip (`j'ai monté les valises`), so acronym-reliant learners get those wrong ~100% of the time.
3. **It omits the pronominal verbs entirely**, which are the other and larger être class. A learner who has perfectly memorised Vandertramp still says *« j'ai me levé »*.

**Teach the concept** (motion + change of state + **all reflexives**), keep the house image as illustration, give Vandertramp **one `cheatSheet` row** as a revision aid, and make sure practice includes the transitive flip and the reflexives.

**Hacks that ARE generative and earn their slot:**

| Hack | Why it survives the filter |
|---|---|
| **Gender by ending** — `-tion/-sion/-té/-ette/-ance/-ence/-ude` → f.; `-age/-ment/-eau/-isme/-oir` → m. | ~90% reliable, high coverage, and **works on words you have never seen**. |
| **BAGS/BANGS** for pre-nominal adjectives | Adjective position is otherwise opaque. |
| **Definite article for generalities** — `J'aime le café` | Beginners omit it constantly. |

### 3.5 Conversation / Function

**The type the curriculum has least of, and needs most.**

```
recall
focus            the CEFR can-do:
                 "I can order in a café and ask the price"
story or audio   ◀── INPUT FIRST. hear the whole exchange BEFORE
                 being asked to say anything. twice: cold, then
                 with transcript.
examples         the chunks, WHOLE.
                 « je voudrais » · « l'addition s'il vous plaît »
                 · « ça fait combien »
                 ← these are items of kind:'phrase'. NOT analysed.
                   learned whole. they carry grammar the learner
                   cannot yet build, AND THAT IS THE POINT.
useCases         ◀── THE CORE. same situation, tu vs vous.
                 register LIVES here, not in a sidebar.
teach            variant: 'register'.
                 "You say bonjour when you enter." that is not colour;
                 it is the difference between being served and being ignored.
shadow           focus: 'intonation' (question contour, politeness contour)
practice         speak → roleplay.
                 CORRECTION AT END OF TURN. one error type only.
practice         listen → the exchange with variations
commonErrors     the register error: « tu » to a stranger,
                 « je veux » instead of « je voudrais »
                 ← the most common way a polite English speaker
                   sounds rude in French
practice         mode: 'unscramble' — assemble the exchange
cheatSheet       the survival lines
```

### 3.6 Ordering principles, in descending confidence

1. Retrieval of old material **first**, always.
2. Phonics: **perception → production.** Non-negotiable.
3. Conversation: **input → chunks → production.** Never a paradigm.
4. Grammar: **examples → rule → paradigm → assembly.** The reverse order is a reference book, not a lesson.
5. Vocabulary: **never a bare noun.**
6. Mastery check is **production**; MCQ is a supplement, never the gate.
7. The cheat sheet is last, and is the **only** aid available during later practice.

### 3.7 What the curriculum itself gets wrong (found while mapping the formulas)

These are independent of the proposal and worth fixing regardless.

| Finding | Cite |
|---|---|
| **Negation and questions arrive two-thirds of the way through A1.** Negation is unit **18 of 26**; yes/no questions 19; question words 20. So the learner **cannot ask anything or deny anything** for two-thirds of A1, while spending units 1–17 on nouns, colours, adjectives and possessives. Every A1 can-do statement ever written requires interrogation and negation. **Move both into the first third.** | [`curriculum.ts:35-37`](ealch-v2/src/content/curriculum.ts#L35-L37) |
| **`on` is missing entirely.** Subject pronouns are listed as "je, tu, il, elle, nous, vous, ils". Native speakers almost never say `nous` in speech. A course that drills `nous parlons` while every French person says `on parle` is teaching a register the learner will not hear. **Teach `on` at A1, alongside `nous`.** | [`curriculum.ts:21`](ealch-v2/src/content/curriculum.ts#L21) |
| **No CEFR can-do statement anywhere.** `Unit` is `{title, sub}`. Without a can-do there is no valid assessment, no honest progress signal, and nothing stopping the curriculum drifting into grammar-topic-listing — **which it already has.** "Le genre des noms" is a grammar label. *Nobody ever needed to **do** noun gender.* **Functions must drive the units; grammar is delivered in service of the function.** | [`curriculum.ts:3`](ealch-v2/src/content/curriculum.ts#L3), [`schema.ts:204-212`](ealch-v2/src/content/schema.ts#L204-L212) |
| **No /y/ vs /u/ unit**, while "the French r" gets a full one. See §2.8. | [`curriculum.ts:7-9`](ealch-v2/src/content/curriculum.ts#L7-L9) |

**Add to `Unit`:**

```ts
export type Unit = {
  // … existing …
  canDo: string[];       // 'I can order a drink and ask what it costs'
  exitCheck?: string;    // lessonId of the unit's production assessment
  gateLessonId?: string; // §5.4 — must be one of this unit's own lessonIds
};
```

### 3.6 The faux amis that actually matter

Curated by communicative cost. The rest is trivia.

| French | Is NOT | It means | The real one is |
|---|---|---|---|
| `journée / jour`, `an / année`, `matin / matinée`, `soir / soirée` | — | **an aspectual distinction English lacks** | *(not a faux ami at all — and worth more teaching time than the whole rest of this list)* |
| `actuellement` | actually | currently | `en fait` |
| `éventuellement` | eventually | possibly | `finalement` |
| `sensible` | sensible | sensitive | `raisonnable` |
| `librairie` | library | bookshop | `bibliothèque` |
| `monnaie` | money | change, coins | `argent` *(already in [`drills.ts:20-25`](ealch-v2/src/content/drills.ts#L20-L25) — good instinct)* |
| `demander` | to demand | to ask | `exiger` |
| `attendre` | to attend | to wait for | `assister à` |
| `préservatif` | preservative | condom | `conservateur` |

> **The false-friend *prepositions* cause more errors than the nouns**, and no list ever includes them: `penser à` vs `penser de`, `jouer à` (sport) vs `jouer de` (instrument), `être en retard`.

---

## 4. The mobile design system

### 4.1 The governing rule

> **A tap that expands *in place* costs the reader nothing. A tap that opens a sheet costs the reader their place.**

[`BottomSheet.tsx:69`](ealch-v2/src/components/BottomSheet.tsx#L69) sets `maxHeight: '78%'` and `:60` puts a 60% scrim over the rest. So a sheet occludes 78% of the lesson and dims the remaining 22%. That is right for a reference you *consult*. It is hostile for a hint on the word your eye is currently on.

### 4.2 Every hover pattern, translated

**Hover does not exist on touch.** This is not a detail; it is a third of the proposal.

| Proposed (hover) | Mobile replacement | Breaks reading flow? |
|---|---|---|
| Bilingual align, "hover-states linking matching words" | **Tap-to-highlight in place.** Tap a FR word → it and its EN gloss both take an accent underline. Tap again → clears. **Long-press → `tts.speak(word)`.** | **No.** Nothing moves. |
| Conjugation table, "hover over endings" | **Kill the interaction entirely.** Hover-to-reveal-the-ending solves a *desktop density* problem that does not exist here — you have the whole column. Render the ending in `t.accTx` permanently. | **No** — nothing to break. |
| "Inline clues", dashed underline, hover for hint | **Tap-to-reveal in place.** The clue appears inline; the paragraph reflows by at most one line. **Explicitly not a tooltip** — RN has no anchor-positioning primitive, and a popover on a 390pt screen collides with the notch, the keyboard, or the edge. **Explicitly not a sheet.** | **No.** |
| Cheat-sheet floating widget | **Persistent-peek bottom sheet with snap points.** | **Mildly** — occludes but does not scroll you away. The correct trade for a *reference*. |
| Error-correction "slide-up drawer" | **Kill the drawer.** A drawer covers the thing you got wrong, so you cannot compare your answer to the correction *while reading the explanation*. [`dictation.tsx:296-341`](ealch-v2/app/dictation.tsx#L296-L341) already renders struck-answer → correct-answer → why-card, inline, stacked. That is the right answer and it is already in the codebase. | **The drawer breaks it. The existing inline card doesn't.** |

> **Long-press budget: one convention, app-wide.** Long-press is undiscoverable; it can carry exactly one meaning. Spend it on **"hear this word."** Do not spend it on translation reveal — that is the primary action, so it gets the tap.

### 4.3 Split-screen bilingual: the arithmetic

Not close.

| | |
|---|---|
| Screen | 390pt |
| `paddingHorizontal: 24` ([`lesson.tsx:122`](ealch-v2/app/lesson.tsx#L122)) | → **342pt of measure** |
| Split into two columns + 12pt gutter | → **165pt per column** |
| Body text, `role="body"` = 15px ([`Type.tsx:33`](ealch-v2/src/components/Type.tsx#L33)), ~7.5pt/char | → **~22 characters per line** |
| Example rows at serif 19px, ~8.5pt/char | → **~19 CPL** |

The measure band for continuous reading is **45–75 characters** (Bringhurst's 66 as optimum). **22 CPL is a third of the minimum.** One to two words per line, the rag becomes a river, and hyphenation-free French — mean word length ~13% longer than English — breaks worse. `« Je voudrais un café, s'il vous plaît »` is 37 characters: two lines at full width, **five-plus lines in a 165pt column.**

And note where that leaves the single-column case: **342pt at 15px is already ~45 CPL — the bottom edge of the acceptable band.** The single column is not a comfortable measure you can afford to halve. **It is the floor.** Halving it is not a trade-off; it is going under the floor.

**Interlinear** (§2.4's `⏵` mode) works as an **opt-in on one sentence**, because each column is one word wide and the whole thing wraps. It fails as the *default reading mode*, because the eye can no longer take the French clause in one saccade — which is exactly the skill being trained.

### 4.4 The lesson reader: navigation model

**Kill the sidebar. And kill the obvious translation too.** A 40pt sticky vertical rail drops the measure from 342pt to 302pt — from ~45 CPL to ~40, below the floor — to buy a navigational affordance the reader looks at twice per lesson.

```
A) AT REST
┌────────────────────────────────────────┐
│ ✕            SONS · 03            ⚙   │ 62pt FocusHeader
├────────────────────────────────────────┤
│▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  2pt read-progress
│                                        │
│  PRONONCIATION                         │
│  Les voyelles                          │
│  nasales                               │
│  Four sounds with no English…          │
│                                        │
│  LE TABLEAU ─────────────────────────  │ ← sticky section label
│  ┌──────────────────────────────────┐  │
│  │ Spelling   Sound    Example      │  │
│  │ on · om    ɔ̃        bon, nom     │  │
│  └──────────────────────────────────┘  │
│                                        │
│                          ╭──────┬─────╮│
│                          │  ≡   │  ⚏  ││ 48pt, thumb arc
│                          ╰──────┴─────╯│ index │ cheat
└────────────────────────────────────────┘

B) AFTER 120pt OF SCROLL — the header collapses
┌────────────────────────────────────────┐
│ ✕  LE TABLEAU             ▓▓▓░░  34%  │ 44pt
├────────────────────────────────────────┤
   the section name and % take over the
   62pt the title was using.
   scroll up → it comes back.

   THIS COLLAPSE *IS* ZEN MODE.
   you do not need a mode.

C) INDEX SHEET — the sidebar, folded into a sheet
┌────────────────────────────────────────┐
│           (lesson, dimmed 60%)         │
├────────────────────────────────────────┤
│                  ▭   ← actually drags  │
│  DANS CETTE LEÇON                      │
│                                        │
│  ●  Intro                         lu   │
│  ●  Les quatre sons               lu   │
│  ◐  Le tableau            ← vous ici   │
│  ○  Exemples                           │
│  ○  Erreurs courantes                  │
│  ○  Quiz · 3 questions                 │
└────────────────────────────────────────┘
   tap → closeSheet(), then scrollTo(y)

D) CHEAT SHEET — persistent peek
│  … lesson text continues, fully        │
│    readable, nothing dimmed …          │
├────────────────────────────────────────┤
│  ▭  L'AIDE-MÉMOIRE   ɔ̃ ɑ̃ ɛ̃ œ̃     ▲ │ 56pt
└────────────────────────────────────────┘
   snap: 56pt (peek, no scrim)
       · 45%  (scrim 30%)
       · 88%  (scrim 60%)
   at peek it costs 56pt and zero
   attention. that is the whole point.
```

**Chaptered scroll — hybrid, not paged.** Reading is a scroll gesture; **do not page the lesson.** Paged cards destroy the ability to compare row 1 of the nasal table to row 5, or to glance back at the intro while reading the errors. That comparison *is* the reading. Paging is right for exactly one thing: **the quiz** — one question at a time, no free scroll, no back.

**Promote the quiz to its own route** (`/lesson/quiz?id=`). It is a different interaction contract, it needs its own scroll position and back behaviour, and separating it deletes a live bug rather than patching it:

> 🐛 **`startQuiz` ([`lesson.tsx:75-81`](ealch-v2/app/lesson.tsx#L75-L81)) changes phase but never resets scroll.** The reader taps "Commencer le quiz" at the *bottom* of ~2,500pt of content; the content collapses to ~600pt. iOS clamps and snaps; **Android can leave you scrolled past the end, looking at nothing.** Same on `retry` ([`:105`](ealch-v2/app/lesson.tsx#L105)).

### 4.5 `BottomSheet` must be rebuilt

It is the vehicle for the cheat sheet, the index, and the vocab injector. As written it cannot carry any of them.

| | Current state | Cite |
|---|---|---|
| **Not a primitive** | It is a *screen* that slides up. Content is hardcoded consts **inside the component**; kind is a closed union `'vocab' \| 'grammar' \| null`. Adding a cheat sheet means adding a third literal and a third hardcoded JSX block. | [`BottomSheet.tsx:12-23`](ealch-v2/src/components/BottomSheet.tsx#L12-L23), [`useUI.ts:3`](ealch-v2/src/store/useUI.ts#L3) |
| **No snap points** | `translateY` animates 600 → 0. One open position. | [`:39,44`](ealch-v2/src/components/BottomSheet.tsx#L39) |
| **No pan gesture** | The grabber is a **40×4 non-interactive `View`**. It *looks* draggable and is not. That is a lie told to the user on every open. | [`:79`](ealch-v2/src/components/BottomSheet.tsx#L79) |
| **No persistent peek** | Cannot sit at 56pt at the bottom of a lesson. Modal or absent. | [`:58-61`](ealch-v2/src/components/BottomSheet.tsx#L58-L61) |

**The good news:** `react-native-gesture-handler@2.32`, `react-native-reanimated@4.5` and `react-native-worklets@0.10` are already in `package.json`, and `GestureHandlerRootView` is already mounted at [`_layout.tsx:82`](ealch-v2/app/_layout.tsx#L82). **A real snap-point, pan-driven, persistent-peek sheet is buildable today with zero new dependencies.**

```ts
<Sheet snapPoints={[56, '45%', '88%']}>{children}</Sheet>
// vocab / grammar / cheat become CALLERS, not variants.
```

### 4.6 Drag-and-drop: reject it

**The unscrambler already exists as tap-to-place** — [`sentence.tsx:226-271`](ealch-v2/app/sentence.tsx#L226-L271). ~45 lines. Tap a bubble in the bank → appended. Tap a placed bubble → removed by index, the rest close up, so mid-word correction works. Every bubble is a `Press` at `minHeight: 40` — VoiceOver-navigable by default.

**What drag would cost:** a `PanGestureHandler` + shared value per bubble; drop-zone hit-testing against a *wrapping flex container* that has no stable slot geometry (measure every child on every layout, rebuild an index→rect map); reflow animation; autoscroll when the bank falls below the fold; and on Android, a pan gesture inside a `ScrollView` needs `simultaneousHandlers`/`waitFor` wiring or the scroll steals it. Realistically **250–400 LOC and a permanent Android gesture-conflict surface.**

**And the accessibility cost is the disqualifier.** Drag is not expressible to a screen reader. RN has no "drag to position N" VoiceOver/TalkBack primitive. The standard mitigation is `accessibilityActions` — *move left / move right / place here*.

> **That parallel path *is* tap-to-place. You would build it anyway, as the accessible fallback, *after* building drag.** So drag is 350 lines and an Android bug class **on top of what already works**, to buy a ~200ms nicer feel.

**Take the 6-line upgrade instead:** add Reanimated's `layout` prop (already a dependency) so bubbles *slide* rather than jump, and fire `expo-haptics` `impactAsync(Light)` on place — **`expo-haptics` is already in `package.json` and is not imported in `sentence.tsx`.** That captures ~80% of what drag was actually for, at ~2% of the cost.

### 4.7 Sepia and Zen: skip both

**Sepia.** [`palette.ts:34`](ealch-v2/src/theme/palette.ts#L34) — `LIGHT.bg` is **already `#F5F3EE`**, a warm paper cream. The only truly white surface in the app is `LIGHT.card = '#FFFFFF'` ([`:36`](ealch-v2/src/theme/palette.ts#L36)). **Light mode is already 80% sepia; the white card was the bug.**

Warm `LIGHT.card` to `#FDFBF6` and `LIGHT.input` likewise and you capture essentially the whole perceptual delta — for a **two-hex-value diff**, with no third mode to test, no third contrast matrix to maintain, and no third settings row.

> The cost people assume is expensive isn't (sepia is a *light-surface* mode, so it ships `isDark: false` and every derived branch resolves correctly — the matrix does not double). **The one real cost is a contrast re-verification.** [`palette.ts:114-116`](ealch-v2/src/theme/palette.ts#L114-L116) carries a load-bearing claim — *"50% is the deepest blend that still reads as the accent… worst case 4.81:1"* — and that 4.81:1 was computed against `LIGHT.card = #FFFFFF`. On a sepia card it changes for all four accents.
>
> And there is a second argument against: [`useReadingBrightness.ts`](ealch-v2/src/hooks/useReadingBrightness.ts) exists to **raise** luminance so text is readable in a dim room. Sepia's value proposition is **lowering** peak luminance. Shipping both means shipping two features that fight each other. The app has already picked a side.

**Zen mode.** A `mode` in this app means a persisted store field, a settings row, a state to reason about in every screen, and a migration liability. Zen buys none of that. It is **"hide the chrome on scroll-down, restore on scroll-up"** — ~20 lines in `lesson.tsx`, an `Animated.Value` driven by scroll velocity, collapsing `FocusHeader` 62pt → 44pt. **Zero store surface. Zero settings rows. Zero tests.** And it is *better* than a mode, because the reader never has to decide to enter it — it happens because they are reading.

### 4.8 The sticky vocab banner: the vertical budget

On a 390×844 iPhone:

| | pt |
|---|---|
| Safe-area top (notch; 59 on Dynamic Island) | 47 |
| `FocusHeader` — `paddingVertical: 12` ×2 + 38pt button ([`ui.tsx:238-247`](ealch-v2/src/components/ui.tsx#L238-L247)) | 62 |
| `ScrollView` `paddingTop: 8` | 8 |
| **Chrome before the first glyph** | **117** |
| Home indicator | 34 |
| **Usable fold** | **693** |

A banner holding 3–5 French vocab items at ~36pt chips wraps to **two rows ≈ 88pt, plus a label ≈ 100pt.** That is **217pt of furniture above the first word — 26% of the screen, permanently, on every scroll.** For an app whose entire job is presenting text: **indefensible.**

```
   ACCEPTED — 0pt of new chrome:
┌────────────────────────────────────────┐
│ ✕  5 MOTS ⌄          ▓▓░░ 34%     ⚙   │ 44
├────────────────────────────────────────┤
   the collapsed header (§4.4) freed 18pt.
   spend it here. tap "5 MOTS" → one 40pt
   row unfolds IN PLACE, scrolls
   horizontally, and STAYS unfolded until
   folded back. sticky when the reader
   ASKS for it, gone when not.
   ceiling: 44 + 40 = 84pt, and only in
   the state the reader chose.
```

And the words are already sticky in the only sense that matters: they are in the cheat-sheet peek, 56pt from the thumb, at all times.

### 4.9 Accessibility — three findings that need fixing regardless

**A. The 44pt audit. `den.tsx` gets it right and almost nothing else does.**

| File:line | Target | Size | |
|---|---|---|---|
| [`ui.tsx:244-252`](ealch-v2/src/components/ui.tsx#L244-L252) | **`FocusHeader` close (✕)** | **38×38** | **FAIL** |
| [`ui.tsx:273-281`](ealch-v2/src/components/ui.tsx#L273-L281) | **`FocusHeader` settings (⚙)** | **38×38** | **FAIL** |
| [`dictation.tsx:382`](ealch-v2/app/dictation.tsx#L382) | Accent keys (é è à ç…) | 42×42, 6pt gap | **FAIL** |
| [`dictation.tsx:244`](ealch-v2/app/dictation.tsx#L244) | SLOW toggle | 30 | FAIL |
| [`flashcards.tsx:105`](ealch-v2/app/flashcards.tsx#L105) | Direction toggle | 32 | FAIL |
| [`home.tsx:122`](ealch-v2/app/home.tsx#L122) | FR/EN toggle | 32 | FAIL |
| [`home.tsx:143`](ealch-v2/app/home.tsx#L143) | Profile avatar | 40×40 | FAIL |
| [`player.tsx:180`](ealch-v2/app/player.tsx#L180) | Speed pill | 34 | FAIL |
| [`chat.tsx:158`](ealch-v2/app/chat.tsx#L158) | Suggested-question chips | 34 | FAIL |
| [`profile.tsx:220`](ealch-v2/app/profile.tsx#L220) | Save name (✓) | 36×36 | FAIL |
| [`den.tsx:54-68`](ealch-v2/app/den.tsx#L54-L68) | Back / settings | **44×44** | **PASS** ✓ |

> **`FocusHeader` at 38×38 is the headline.** It is mounted on `lesson`, `flashcards`, `sentence`, `dictation`, `speak`, `player`, `feedback`. **One component, seven screens, both targets undersized.** Changing `38` → `44` at [`ui.tsx:245`](ealch-v2/src/components/ui.tsx#L245) and [`:275`](ealch-v2/src/components/ui.tsx#L275) fixes the most-touched miss in the app **in two characters.** (Keep the visual circle at 38 — expand the `Press` to 44 and inset, or use `hitSlop`.)
>
> The dictation accent keys are second: **8 targets at 42pt with a 6pt gap**, on the one screen where a mis-tap costs you the answer.

**B. No French text in this app is marked as French.**

RN's `Text` supports `accessibilityLanguage`. Without it, **VoiceOver reads French with the English TTS voice.**

- [`lesson.tsx:290`](ealch-v2/app/lesson.tsx#L290) — `« {ex.fr} »`
- [`lesson.tsx:369`](ealch-v2/app/lesson.tsx#L369) — the audio-practice strings
- [`dictation.tsx:296`](ealch-v2/app/dictation.tsx#L296), [`sentence.tsx:280`](ealch-v2/app/sentence.tsx#L280), [`flashcards.tsx:184`](ealch-v2/app/flashcards.tsx#L184)

*"Un bon vin blanc"* read by an English synthesiser is not "accented" — **it is unintelligible, and it is actively wrong pedagogy in a pronunciation lesson.**

**Fix:** add a `lang?: 'fr' | 'en'` prop to `TX` ([`Type.tsx:46-63`](ealch-v2/src/components/Type.tsx#L46-L63)) that sets `accessibilityLanguage`, and apply it wherever `font="serif"` / `"serifI"` appears — the serif faces are already, in practice, this app's "this is French" signal.

**C. Interlinear text is a screen-reader trap, and both naive builds fail.**
Built as two rows: VoiceOver reads the whole French line, then the whole English line — tolerable, but then it is *stacked*, not interlinear, so build stacked. Built as a wrap of per-word columns (the actual interlinear layout): VoiceOver reads `Je / I / voudrais / would like / un / a / café / coffee`. **Word salad.**

**Fix:** wrap the sentence in one `accessible` `View` whose `accessibilityLabel` is the full French sentence (in `fr-FR`) and whose `accessibilityHint` is the full English; set per-word children to `importantForAccessibility="no-hide-descendants"`; expose the word-by-word breakdown as an explicit `accessibilityActions` custom action. **Sighted users get a layout; screen-reader users get a sentence.**

**D. `Type.tsx` is genuinely well built** — `ROLE` carries a per-role `max` multiplier and `lineHeight` derives from the *scaled* size, so line boxes grow with the glyphs. Two defects: `PixelRatio.getFontScale()` at [`Type.tsx:87`](ealch-v2/src/components/Type.tsx#L87) is **not reactive** (use `useWindowDimensions().fontScale` — one line), and [`flashcards.tsx`](ealch-v2/app/flashcards.tsx) will **clip at large text scales** (absolutely-positioned text inside a `maxHeight: 400` box).

---

## 5. Assessment, progression, and honesty

### 5.0 The rule this section is built on

This codebase already has a stated principle, and it is worth quoting exactly. [`useStore.ts:242-246`](ealch-v2/src/store/useStore.ts#L242-L246):

```
// v3 → v4: streak/reviewDue/weekDots are gone. They shipped seeded (14, 23,
// five dots on), nothing ever wrote them, and every install carried the same
// fabricated fortnight.
```

**Generalise it into a review gate:**

> **If a number on screen cannot be expressed as a pure fold over the attempt log or the session log, it does not ship.**

That is the v4 migration stated once instead of relearned per feature. It catches every liability in this section — including two that are on screen *right now*.

### 5.1 The quiz gate is not real, in two independent ways

[`lesson.tsx:113`](ealch-v2/app/lesson.tsx#L113) — `const pass = quizScore >= 2` on **3 questions, 3 options each**.

| | |
|---|---|
| Guessing floor, single attempt | **25.9%** — someone who knows nothing passes 1 in 4 |
| P(pass within 3 random retries) | 59.4% |
| **P(pass on retry #2, in practice** | **~100%)** |

That last row is the one that matters. [`lesson.tsx:443-446`](ealch-v2/app/lesson.tsx#L443-L446) reveals the correct option the moment the user picks, and [`:105-111`](ealch-v2/app/lesson.tsx#L105-L111) restarts **the same three questions, unlimited**. The second attempt is not a 26% coin-flip — it is a memory test on answers shown five seconds ago.

**Currently this is harmless**, because `pass` is wired to nothing: it selects a sound and a label. The danger is that the proposal wants to promote this exact instrument into something that **locks content**.

### 5.2 You cannot adapt on 5 items

Standard error of an ability estimate, items **perfectly targeted** (the best case adaptivity can ever deliver):

| items | constructed response | **3-option MCQ** |
|---|---|---|
| **5** | SE 0.89 logits | **SE 1.24 — the 95% CI is 4.84 logits WIDE** |
| 12 | SE 0.58 | SE 0.80 |
| 20 | SE 0.45 | SE 0.62 |

A CEFR sub-level is on the order of 1–2 logits. **A 5-item three-option quiz cannot reliably tell A1 from A2.** So the "adaptive" branch is driven by noise — and worse, because it branches on noise, **two learners of identical ability get different, non-comparable item sets.** Adaptivity at n=5 does not add precision; it destroys comparability *and* adds the appearance of precision. That is the worst possible trade.

(Reliability, same story: a generous 5-item form reaches α ≈ 0.55. Reaching α = 0.80 needs ~17 items.)

**And the deeper problem: a single lesson does not deserve a mastery check at all.** On day 1 of exposure, any test measures short-term memory and nothing else. That is the unfixable flaw in every end-of-lesson quiz as a mastery instrument — **and it is the whole reason the SRS *is* the assessment.**

**So:**

- **In-lesson = practice.** Immediate feedback, no score, no gate, unlimited retry, log every attempt. Stop calling it pass/fail; show the score and move on.
- **Unit-level = Checkpoint.** 12–16 items, **production ≥ 60%** (a learner who can pick `l'école` from three options cannot necessarily *say* it — and in a voice-first app, gating on recognition is measuring the wrong construct on purpose). **Kill 3-option MCQ as an assessment format** — 4 minimum, and prefer constructed response where the floor is ~0.
- **Threshold: none.** Mastery is `R ≥ 0.90 ∧ reps ≥ 3` from the SRS, evaluated continuously. A checkpoint's job is to *update* that estimate, not render a verdict.

**Where adaptivity legitimately belongs — two places, neither is the lesson quiz:**

1. **The placement test** ([`app/placement.tsx`](ealch-v2/app/placement.tsx)) — genuinely wide ability range, genuinely worth a CAT. 20–30 items, stopping rule at SE ≤ 0.5, **and it must be allowed to say "not sure, start at A1."** Right now [`useStore.ts:133`](ealch-v2/src/store/useStore.ts#L133) defaults `level: 'B1'` and [`supabase/schema.sql:29`](ealch-v2/supabase/schema.sql#L29) does the same server-side. **A B1 claim on zero evidence is itself a fabricated metric** — the seeded 14-day streak with a nicer name.
2. **The review queue.** And this is the punchline: **an SRS *is* the adaptive engine.** It selects by predicted retrievability, which is the measurement-grounded version of "harder if you're doing well." Build the scheduler and you have built adaptivity — correctly, across the whole corpus, instead of inside a 5-item toy.

### 5.3 The pronunciation score is already shipped, and already fabricated

This is the finding that changes the priority order. It is not a proposal — it is live.

[`score.ts:100-112`](ealch-v2/src/utils/score.ts#L100-L112):

```ts
const chars = similarity(e, h);           // normalized Levenshtein on TEXT
const words = wordCoverage(expected, heard);
const score = 0.45 * chars + 0.55 * words;
```

Rendered as a percentage at [`speak.tsx:252`](ealch-v2/app/speak.tsx#L252) and [`voiceflash.tsx:273`](ealch-v2/app/voiceflash.tsx#L273).

**That number is a text-match ratio computed on an ASR transcript. It is not a measurement of pronunciation, and it cannot be** — the recogniser's language model has already destroyed the phonetic evidence before `score.ts` ever sees the string. Concretely, it is structurally blind to:

| Error | Why the score cannot see it |
|---|---|
| **/y/ vs /u/** (`rue` / `roue`) | The LM writes `rue` because `rue` was contextually expected. **You score 100% while producing the wrong vowel.** |
| **Nasal confusion** (`vin` / `vent` / `vont`) | ASR normalises toward a real word. **This is the entire subject of lesson `sons1`** ([`lessons.ts:52`](ealch-v2/src/content/lessons.ts#L52)) — the app's flagship phonetics lesson is scored by an instrument blind to the error it teaches. |
| **Liaison** (`les‿amis`) | Not present in the transcript at all. |

**The codebase already has the right instinct and stopped one step short.** [`voiceflash.tsx:270`](ealch-v2/app/voiceflash.tsx#L270) — *"so a wrong verdict is always explained rather than asserted"* — shows the raw transcript next to the verdict. Finish the job:

1. **Kill the percentage.** Keep the three-way verdict (`good`/`close`/`off`, [`score.ts:114-118`](ealch-v2/src/utils/score.ts#L114-L118)) and **always show what was heard.** *"I heard: « ou est la gare »"* is honest and actionable. *"73%"* is neither.
2. **Never label an ASR-derived number "pronunciation."** It is *what the recogniser heard*. Say that.
3. Real pronunciation scoring needs **phoneme-level posteriors** — forced alignment + GOP (Azure Pronunciation Assessment, SpeechAce, or self-hosted MFA+GOP). That is a genuine product decision with a genuine cost. **Make it or don't. What you may not do is keep printing a two-significant-figure percentage derived from a string diff and call it accuracy — that is the seeded 14-day streak wearing a lab coat.**

### 5.4 The SRS — the spine, and the thing to build first

`Item.id` exists explicitly to be the SRS key ([`schema.ts:118`](ealch-v2/src/content/schema.ts#L118)). Nothing hangs off it.

**First: the Supabase table is wrong.** [`supabase/schema.sql:37-49`](ealch-v2/supabase/schema.sql#L37-L49):

```sql
prompt text not null,        -- ❌ content DENORMALISED into the schedule row
answer text,                 -- ❌ ditto
stability real default 1,    -- ❌ FSRS init value as a column DEFAULT
difficulty real default 5,   -- ❌ ditto
-- ❌ no last_review_at → FSRS cannot run
-- ❌ no reps / lapses    → leeches cannot be detected
-- ❌ there is no attempts table at all
```

[`schema.ts:87-89`](ealch-v2/src/content/schema.ts#L87-L89) already warns against exactly this: *"an item may be rewritten… but its id must not change, or every attempt logged against it and every SRS interval built on it is orphaned."* Regenerate the corpus and those `prompt`/`answer` rows hold stale text forever. **It must be `item_id` + `modality`, unique on `(user_id, item_id, modality)`.**

Also: **[`supabase/schema.sql:33`](ealch-v2/supabase/schema.sql#L33) — `streak int default 0` on `profiles`. Drop the column.** It is a server-side stored streak counter: precisely what [`useStore.ts:242-246`](ealch-v2/src/store/useStore.ts#L242-L246) deleted from the client. The streak is a fold ([`progress.logic.ts:98-129`](ealch-v2/src/store/progress.logic.ts#L98-L129)). **A stored aggregate drifts; a fold cannot. This codebase has already shipped and deleted this exact bug once.**

**The attempt record — every drill emits exactly this, on every answer:**

```ts
// The ONLY source of truth about knowledge. Append-only. Never updated, never deleted.
export type Attempt = {
  id: string;              // client UUIDv7 — the idempotency key for sync
  userId: string | null;   // null while guest; backfilled on sign-in
  itemId: string;          // 'fr.a1.cafe.001'
  modality: Modality;      // NOT the drill. See below.
  drill: DrillKind;
  surface: 'lesson' | 'review' | 'checkpoint' | 'placement' | 'freeplay';

  at: string;              // UTC instant — an attempt IS an instant
  day: string;             // local calendar day, stamped at write time.
                           // Same rule and reason as progress.logic.ts:14-18.
  latencyMs: number;       // a SIGNAL, never a constraint. §5.6.

  correct: boolean;        // the honest binary, independent of the grade mapping
  grade: 0 | 1 | 2 | 3;    // again | hard | good | easy — the SRS input

  /** What the grade was DERIVED from. Never discard this: the grade is a LOSSY
   *  function of the raw signal, and if the mapping changes you must be able to
   *  REPLAY history rather than reinterpret it. */
  raw:
    | { kind: 'mcq';   chosen: number; correctIx: number; nOptions: number }
    | { kind: 'asr';   expected: string; heard: string; score: number; verdict: Verdict }
    | { kind: 'typed'; expected: string; typed: string }
    | { kind: 'match'; pairs: number; misses: number };

  errorClass?: ErrorClass; // §5.7 — AUTHORED, not inferred
  schedulerVersion: string;// 'fsrs-5' — so a reschedule is replayable
  appVersion: string;
};
```

**The SRS key is `(user, item, modality)` — not `(user, item)`.**

This is the most important non-obvious call in this document, and it follows directly from the product being voice-first:

```ts
export type Modality = 'recognise' | 'produce' | 'discriminate';
// recognise    fr → en. Pick or recall the meaning.
// produce      en → fr. SAY it or TYPE it.  ← the one that matters here
// discriminate audio → symbol. The `sons` track. (§2.8)
```

> *"I recognise **la gare**"* and *"I can **say** la gare"* are **different memories, with different stabilities and different forgetting curves.** Scheduling them as one card means the easy one masks the hard one — **and in a voice-first app the hard one is the whole product.**

**Sibling gating, or you triple the review load on day one:** an item's `produce` card is not created until its `recognise` card reaches `stability ≥ 7d`. You do not drill production of a word the learner cannot yet recognise.

**Algorithm: FSRS. Not SM-2, not Leitner.** Four reasons specific to this app:

1. **The state shape is already FSRS.** [`schema.sql:46-47`](ealch-v2/supabase/schema.sql#L46-L47) already has `stability` and `difficulty`. Someone made this call; honouring it costs nothing.
2. **FSRS separates retrievability from stability, and retrievability is the only defensible mastery number this app can show.** `R(t)` is a *probability of recall* — falsifiable, interrogable, and **it goes down over time.** SM-2's ease factor is not interpretable as anything. **This is the deciding argument**, because §5.8 needs an honest mastery signal and FSRS is the only one of the three that produces one.
3. **SM-2's reset-to-zero on a lapse is hostile** — and in a language app the items that lapse are exactly the ones a learner must not be punished for.
4. **Leitner is too coarse** — fixed boxes cannot express "you know this word but cannot say it yet", which is the central distinction here.

**One honest caveat.** FSRS expects a 4-point self-graded recall. This app produces MCQ binaries and a fuzzy ASR score. **Do not pretend the ASR score is a self-report.** Map conservatively and *asymmetrically*:

```ts
function gradeFromAsr(v: Verdict): 0|1|2|3 {
  if (v === 'good')  return 2;   // good
  if (v === 'close') return 1;   // hard
  return 0;                      // again
}
// NEVER 'easy' from ASR. False negatives are common in ASR:
// a false 'again' costs one extra review. A false 'easy' costs a forgotten word.
```

**Leeches:** FSRS has no leech concept — add one. `lapses >= 8` → `suspended`, surfaced as **stuck, not failed**: pull it out of rotation and route it back to teaching. *Drilling a leech is how you make a learner hate an app.*

**Two product rules that matter more than the algorithm:**

- **Due = `dueAt <= end of the user's local day`, not `<= now`.** Otherwise the home count creeps upward through the day and is never stable enough to trust.
- **Cap the daily queue.** An uncapped queue after a two-week absence presents the returning learner with 340 cards, and **that screen is the single biggest churn event in the entire SRS product category.** When there is a backlog the app says *"You have 340 due. Let's do 20 today and clear the rest over the week."* It does not display 340 as a debt.

**Offline and sync — attempts are the truth; cards are derived.**

**Do not sync `Card` as a mutable row with last-write-wins.** Two devices, one wins, the other's session vanishes, and the user's intervals are quietly wrong forever.

Instead: `attempts` is a **grow-only set** keyed by client UUID. On sync, **union the attempt sets, sort by `at`, and replay FSRS over the union.** Because replay is deterministic given `(params, ordered attempts)`, **both sides converge to identical card state. There is no conflict to resolve.**

> That is **a CRDT by construction** — a grow-only set plus a deterministic fold. You get multi-device correctness without writing a merge algorithm, and you get *"change the grade mapping and rebuild all history"* for free.
>
> The one real hazard is **clock skew**: if a client's `at` is >24h ahead of server receipt, clamp to receipt time and flag it. Do not let one device with a broken clock permanently mangle a user's intervals.

### 5.5 Boss Fight: no. And the one place speed *is* defensible.

**A cumulative time-attack that gates progression should not ship.** Four reasons, each independently sufficient:

1. **Construct invalidity.** A timed test measures ability × processing speed × anxiety × thumb dexterity × whether they are on a train. **You gate on a noisier number and feel more confident doing it.**
2. **Time pressure and production are actively antagonistic — and this is a voice-first app.** Speech production under time pressure degrades exactly what a beginner is fighting to install: gender agreement, verb morphology, liaison. **If the thesis is "speak French," a timer trains "recite French, fast." The mechanic is at war with the product.**
3. **Anxiety, and who it selects out.** A cumulative, timed, pass-or-be-locked-out event is maximally anxiogenic, and the learner it hurts most is the anxious beginner — the one who most needs to stay. Duolingo can absorb this because it is free. **A paid app cannot.**
4. **The paywall failure mode ends the argument.** A paying adult fails the Boss Fight and is locked out of content they bought. **And note the trap: there is no design that both (a) can be failed and (b) cannot lock someone out.** If it cannot lock you out, it is not a gate — it is a quiz with a scary name. In which case ship the quiz and drop the name.

**Ship instead: the Checkpoint. No hard gate.**

- **Content is never locked.** Adults paid. Adults choose.
- At the end of a module block the app **offers** a Checkpoint: untimed, mixed-modality, 12–16 items weighted toward low predicted retrievability.
- It produces a **per-item and per-tag read, not a pass/fail**:

  > *"You're solid on the café unit. Two things are still shaky: nasal vowels, and the -er present tense. The next lesson leans on both. Shore them up first, or push on?"*

  Two buttons. **Both live. Default is "push on."**
- **The Checkpoint writes to the SRS** — they are real attempts against real item ids, so sitting one is never wasted time. **That is what makes it worth doing voluntarily, which is what makes it work without a gate.**

**The one defensible use of speed, precisely:**

1. **Latency as a signal, never a constraint.** Record `latencyMs` on every attempt. Use it **against the user's own median for that drill** to disambiguate `hard` from `good` where there is no self-report. Personal baseline, never a global threshold, **never surfaced as a score.**
2. **A fluency workout — opt-in, mastered items only, gates nothing.** Retrieval automaticity is a real goal for high-frequency function words (articles, `être`/`avoir`, numbers, greetings) — it is what lets a beginner keep up in a real conversation. Defensible under four hard constraints: **opt-in; drawn only from items already at `R > 0.9`; never a first exposure; never scored, never gated, never an assessment.**

> **The proposal's "timed conjugation grid run" is fine under exactly that framing and indefensible as an assessment. Same mechanic, two completely different products — and the difference is entirely whether it can be failed.**
>
> (This converges with §3.2's gender-snap drill from an entirely independent direction: recognition-only, already-known items, no gate.)

### 5.6 Streaks: already close to right

**The existing implementation is unusually good, and that deserves saying before the critique.** [`progress.logic.ts:84-129`](ealch-v2/src/store/progress.logic.ts#L84-L129):

- **It is a fold over a real session log, not a stored counter.** No seed, no drift.
- **A day counts when the user shows up, not when they score.** [`lesson.tsx:95-97`](ealch-v2/app/lesson.tsx#L95-L97) logs the session *on a fail* — *"the streak is a record of showing up, not of scoring."* **This is correct and rare, and it is what stops the streak from creating an incentive to avoid hard content.**
- **Today-in-progress does not break the run.** No midnight execution.
- **A freeze is only charged if it actually protected something** ([`:95-97`](ealch-v2/src/store/progress.logic.ts#L95-L97)) — *"Spending one on the empty void before a user's first session would report 'protected' when nothing was protected."*
- **The day is stamped at write time in local time.** No DST or travel flicker, and it is tested.

| Known dark pattern | Status here |
|---|---|
| Streak-freeze **monetisation** | **Not present. Ban permanently.** |
| Punishing a missed day | **Present** — streak → 0 and silence. The one thing to change. |
| Loss-framed notifications | Risk. Ban the frame now. |
| Public/social comparison | Not present. Keep it that way. |
| **Server-side counter** | **Present: [`schema.sql:33`](ealch-v2/supabase/schema.sql#L33). Delete the column.** |

**The humane version:**

- **What counts as a day: one logged session.** Any activity, any outcome. **Do NOT raise the bar to "hit your daily goal"** — that converts the streak from *you showed up* into *you performed*, which is the exact incentive you must not create. The goal ring already carries "did you do enough today." **Two facts, two instruments.**
- **Repair, not purchase.** A broken streak can be repaired within 48h **by doing a session**. Not by paying. And the UI says plainly what happened: *"You missed Thursday. Today's session brought your run back."*
- **Freeze grant: 1 per 7 practised days, cap 2 in hand. Earned by practice. Never sold, never ad-gated, never gem-gated.**
- **On break: the run resets, the best does not.** *"Your run is 0. Your best is 23 days."* This removes most of the sting without lying about the current state — **and it means a broken streak stops being a reason to uninstall**, which is the actual failure mode being designed against.

### 5.7 The error-correction loop: **you author the diagnosis, you do not infer it**

The proposal assumes the app can look at a wrong answer and *work out* why. For open production that is an NLP research project. **For closed-response drills — which is most of them — it is free, if the content carries it.** This is the highest-leverage change in the whole gamification tier and it costs **nothing at runtime**.

Today, [`lessons.ts:6`](ealch-v2/src/content/lessons.ts#L6):

```ts
export type QuizQ = { q: string; opts: string[]; correct: number };
```

A wrong answer here is an integer. It carries no information, and it cannot be logged against anything **because the question has no item id.** *That* is why the error loop cannot be built — not a missing algorithm, **a missing field.**

```ts
export type ErrorClass =
  | 'gender' | 'agreement' | 'article' | 'conjugation' | 'auxiliary'
  | 'preposition' | 'pronoun' | 'negation' | 'wordOrder'
  | 'lexis' | 'fauxAmi' | 'orthography'
  | 'nasal' | 'liaison' | 'phoneme'
  | 'unknown';                     // the honest default. NEVER guess.

export type Choice = {
  text: string;
  /** Present on WRONG choices only. The distractor NAMES the error it diagnoses. */
  errorClass?: ErrorClass;
  /** One authored sentence, shown in the drawer. Absent → the drawer shows NOTHING. */
  why?: string;
};

export type QuizQ = {
  itemId: string;      // ← currently ABSENT. This is why nothing can be logged.
  probes: string[];    // tags from Item.tags
  q: string;
  choices: Choice[];   // 4+, not 3 (§5.2)
  correct: number;
};
```

Now a wrong answer is diagnosed in **O(1) with zero inference**: `choices[chosen].errorClass`. The drawer text is `choices[chosen].why` — **authored, correct, and human-reviewed before it ever ships. Distractors stop being noise and become instruments.**

> **And the diagnostic information already exists — it is simply not written down.** [`lessons.ts:52`](ealch-v2/src/content/lessons.ts#L52) — `opts: ['vin', 'nom', 'vent']` is a deliberate nasal-contrast triple. **The author knew exactly what each wrong choice diagnoses. The schema gave them nowhere to say it.**

**`'unknown'` is the load-bearing member of that union.** Most diagnostic systems fail by forcing a class. Log `'unknown'` freely and let the corpus author see how often it fires: **that frequency *is* your content-quality metric.**

**Diagnosis by tier:**

| Tier | Approach |
|---|---|
| **Closed response** (MCQ, matcher, grid) | **Authored**, as above. Free, deterministic, correct. |
| **Typed production** (dictation, cloze) | A small, precise rule set. `normalizeFr` ([`score.ts:19-28`](ealch-v2/src/utils/score.ts#L19-L28)) already strips diacritics, which hands you one class **for free today**: `if (normalizeFr(got) === normalizeFr(want) && got !== want) return 'orthography'`. **Keep the rules few. When nothing matches, emit `'unknown'`. Do not build a French grammar engine.** |
| **Spoken production** | **Do not classify from the transcript.** The LM has destroyed the evidence (§5.3). Either leave spoken errors `'unknown'` and use verdict + transcript only, or buy phoneme-level assessment. **Never anything in between — a fake phonetic diagnosis is worse than none, because the learner will act on it.** |

**How error class drives selection — keep it orthogonal to the scheduler. The SRS decides WHEN. The error profile decides WHAT ELSE.**

1. Take all due cards, cap at ~20.
2. **If short of the cap, fill from the weak-tag pool** — items whose `tags` intersect the user's top error classes. **This is literally what that field was built for** ([`schema.ts:134-135`](ealch-v2/src/content/schema.ts#L134-L135): *"The handle a future SRS uses to say 'you are weak at nasals', rather than 'you are weak at item 47'"*).
3. **Never let the fill displace a due card.** Review debt beats enrichment, always.

**Weak-spot detection — rank by Wilson lower bound, not raw rate**, so a 1-of-2 miss does not outrank a 12-of-40 miss. `MIN_ATTEMPTS = 8`, 30-day window, max 3 shown.

> **"You're weak at liaison" on the evidence of two attempts is a fabricated metric** — same family as everything else in this section. **If nothing clears the bar, the UI must say so: *"Not enough practice yet to spot a pattern."*** That sentence is the whole design principle in one line, and it is the sentence a fresh install must show.

**Timing — and this is where the proposal is wrong:**

| Context | Timing | Why |
|---|---|---|
| **Form-focused, closed response** (MCQ, dictation, matcher, grid) | **IMMEDIATE** | The item is still in working memory; the learner can bind the correction to the specific retrieval that failed. The lesson quiz already does this. **Keep it — just add the authored `why`.** |
| **Communicative production** (roleplay, speak, live coach) | **DEFER to end of turn** | **Interrupting a learner mid-utterance to correct a gender article is the most reliable way to destroy the exact thing you are building: willingness to speak.** In-conversation *recasts* are fine — Camille naturally says the correct form back. An explicit correction UI is not. |

> **Ealch is voice-first, so this is load-bearing: the roleplay screen must never slide a grammar drawer up over a live conversation.**

**The deep link: right instinct, wrong default. Do not auto-navigate.** Yanking a user out of a drill mid-way is disorienting *and* it breaks the drill's own logging. Offer it as a **secondary action** (*"See this in the lesson"*), pushed onto the stack, returning to the drill in the same state.

**What the drawer shows, in this order:** (1) the correct form, plainly, first — not a quiz-within-a-quiz; (2) the authored `why` for **the distractor the user actually picked**; (3) optionally the rule handle, tappable; (4) **nothing else. No XP, no confetti, no "you're on fire."**

> **If `errorClass` is `'unknown'` or `why` is absent, show nothing.** A generic *"Not quite, try again!"* is a **fabricated explanation** — the same sin as a fabricated number.

### 5.8 The honest progress model

**Two words for two facts. Stop conflating them.**

- **complete = you did the work.** Binary. A fold over the session/attempt log.
- **mastered = you can currently recall it.** Probabilistic. A fold over the SRS state.

**"Unit complete"** means every lesson has been sat and its practice attempted at least once. **Coverage, not competence.** It says *you have been here* — 100% true, 100% verifiable. **It is not a knowledge claim and must never be dressed as one.**

```ts
function masteredNow(c: Card, at: Date): boolean {
  return c.state === 'review'
      && c.reps >= 3                    // one lucky answer is not knowledge
      && retrievability(c, at) >= 0.90;
}
```

**Home shows "12 of 30 retained", never "40% mastered."** An average hides the shape; a count is auditable. **A percentage invites rounding a lie.** And the definition must be visible: **tap the number, read the rule. A number a user cannot interrogate is a number you should not show.**

### 5.9 Day 1 of a fresh install — and the numbers that are lying right now

The codebase gets this right for the today-strip and **breaks its own rule twelve lines later.**

[`home.tsx:66-67`](ealch-v2/app/home.tsx#L66-L67):
> *"Every number below is a view over the session log. Nothing is seeded, so a fresh install reads 0/10 min and 'Day 1 starts today' — which is the truth."*

[`home.tsx:79-84`](ealch-v2/app/home.tsx#L79-L84):
```ts
// TODO(SRS): the review count is still a literal.
const revNum = reviewCleared ? '✓' : '23';
```

**That `'23'` is a direct survivor of the exact set v4 deleted** — [`useStore.ts:242-246`](ealch-v2/src/store/useStore.ts#L242-L246) reads *"they shipped seeded (14, **23**, five dots on)"*. It is annotated and known, which is good. It is still on screen.

**And it is not alone.** [`app/smartreview.tsx`](ealch-v2/app/smartreview.tsx):

| Line | What it is |
|---|---|
| [`:74-75`](ealch-v2/app/smartreview.tsx#L74-L75) | hardcoded next-due chips: `+14 tomorrow`, `+9 in 3 days` |
| [`:94`](ealch-v2/app/smartreview.tsx#L94) | the progress ring is a literal `strokeDashoffset={111}` |
| **[`:150-153`](ealch-v2/app/smartreview.tsx#L150-L153)** | **the UI states an SRS interval schedule to the user: *"Items return in 1 → 3 → 7 → 21 days as you get them right."*** There is no scheduler. **This is a promise in the UI about an algorithm that does not exist — and when FSRS ships, those intervals will not be 1/3/7/21.** Either the copy goes, or it becomes true. It cannot stay. |

**The truthful fresh-install home screen:**

| Element | Day 1 value | Status |
|---|---|---|
| Goal ring | **0 / 10 min** | already true ✓ |
| Streak | **"Day 1 starts today."** | already true ✓ |
| Week dots | all off | already true ✓ |
| **Review** | **empty state, no number** | **currently a fake `23`** ✗ |
| Continue | the next lesson | true ✓ |

The review tile on day 1 must read: **"Nothing to review yet. Reviews appear after your first lesson."**

> That is a *better* first-run experience than a fake 23, and the reason is worth stating plainly: **a fake 23 that opens a hardcoded session teaches the user, on day one, that this app's numbers are decorative. Every real number you show them afterwards inherits that discount.**
>
> **Design the empty state deliberately — it is the state every single user sees first, and it is the state the app currently lies in.**

### 5.10 XP and levels: rejected, and what replaces them

**XP cannot go down. Forgetting is the central fact of language learning. A number that structurally cannot decrease is therefore incapable of representing learning — which means it is not a measurement of anything. It is a payout schedule.** That is the entire case, and it is dispositive.

**"Levels" additionally collides with a real word:** `level` in this app already means CEFR ([`schema.ts:38`](ealch-v2/src/content/schema.ts#L38)). Shipping a gamified "Level 7" next to CEFR "A2" teaches the user that a made-up number and an external standard are the same kind of thing.

**If leadership insists on a headline number, there are already three real ones — and a fourth arriving with the SRS:**

| Real signal | Source |
|---|---|
| minutes practised today | [`progress.logic.ts:51-55`](ealch-v2/src/store/progress.logic.ts#L51-L55) |
| items attempted | `SessionEntry.items` |
| days shown up | [`streak()`](ealch-v2/src/store/progress.logic.ts#L98-L129) |
| **items you can currently recall** | **count of cards with `R ≥ 0.90 ∧ reps ≥ 3`** |

**That last one is the honest headline.** It is real, it is falsifiable, and — critically — **it goes down when you stop practising.** Which is the truth, and which is a *stronger* motivator than a monotone counter precisely because it can be lost by inaction rather than by punishment.

### 5.11 The telemetry model, entire

```
attempts   append-only, immutable   ← the ONLY source of truth about knowledge
sessions   append-only, immutable   ← the source of truth about showing up (EXISTS)
cards      DERIVED, replayable from attempts
```

**Everything on screen is a pure fold over those three. If a number cannot be expressed as such a fold, it does not ship.**

### 5.12 Anti-patterns to ban outright

| # | Ban | Reason |
|---|---|---|
| 1 | **Any counter that cannot go down** (XP, lifetime points, levels) | Learning includes forgetting. A monotone number cannot represent forgetting, so it is a payout schedule, not a measurement. |
| 2 | **Any on-screen number that is not a fold over the logs** | The v4 principle. **Live violations: [`home.tsx:82`](ealch-v2/app/home.tsx#L82), [`smartreview.tsx:74-75`](ealch-v2/app/smartreview.tsx#L74-L75), [`:94`](ealch-v2/app/smartreview.tsx#L94).** |
| 3 | **A UI claim about an algorithm that does not exist** | [`smartreview.tsx:150-153`](ealch-v2/app/smartreview.tsx#L150-L153) — a fabricated metric in prose form. |
| 4 | **Selling / ad-gating / gem-gating a streak freeze** | Monetising loss aversion against a loss you invented. |
| 5 | **Loss-framed push** (*"your streak dies in 3 hours"*) | Converts a habit tool into a threat. Threats churn the anxious first. |
| 6 | **Hard content gates for paying adults** | You cannot defensibly lock a customer out of what they bought on a 5-item test (SE ≈ 1.2 logits). |
| 7 | **Time pressure in any assessment, first exposure, or production drill** | Speed is a downstream *effect* of mastery, never a route to it. |
| 8 | **"Pronunciation accuracy: N%" from an ASR transcript** | A text-match ratio in a lab coat, blind to the nasal contrasts the app's own flagship lesson teaches. **Currently shipping.** |
| 9 | **Leaderboards or any inter-user comparison** | Adult self-directed learners are not competing. Drives the anxious out, gives the confident nothing. |
| 10 | **Loot-box / variable-reward mechanics** | A short walk from gambling design. |
| 11 | **Any number without a tap target explaining what it counts** | If you cannot explain it in one sentence, you cannot show it. |
| 12 | **A "mastered" claim from a single correct answer** | `reps >= 3`, or it is merely *seen*. |
| 13 | **Interrupting live speech with a correction UI** | Trains silence — the one outcome a voice-first app cannot survive. |
| 14 | **Denormalising content into scheduling rows** | [`schema.sql:42-43`](ealch-v2/supabase/schema.sql#L42-L43). The id is the join; the content is regenerable. |
| 15 | **A server-side streak counter** | [`schema.sql:33`](ealch-v2/supabase/schema.sql#L33). A stored aggregate drifts; a fold cannot. **Already shipped and deleted once.** |
| 16 | **A default CEFR level with no evidence** | [`useStore.ts:133`](ealch-v2/src/store/useStore.ts#L133) / [`schema.sql:29`](ealch-v2/supabase/schema.sql#L29) default to `'B1'`. A placement claim on zero data is a fabricated metric with a respectable name. |
| 17 | **Congratulating a user for something they did not do** | [`lesson.tsx:93`](ealch-v2/app/lesson.tsx#L93) already distinguishes the `ding` from the `tap`. Keep that instinct everywhere. |

### 5.13 The visual matcher, and "SRS flashcard decks"

**Visual Matcher — ship it, with two constraints.** It is the **only drill that can teach a concrete noun without routing through English**, which cuts the L1 translation step. Genuinely valuable. But: (1) it works only for **imageable concrete nouns** — do not attempt to illustrate *peut-être*; gate on `kind === 'word'` plus a curated `imageable` flag. (2) **A match is weak evidence** — it is an N-way forced choice with elimination, and the last pair is free. So a matcher attempt counts as **`recognise` modality only, grade `good` at best, never `easy`, never `produce`** — and **it must never be the drill that promotes an item to mastered.**

**"SRS flashcard decks" is not a feature.** It is the *default surface* of the scheduler. Once cards exist, a flashcard deck is just a view over `dueAt`. **Build the scheduler and the deck falls out. Build the deck first and you get [`smartreview.tsx`](ealch-v2/app/smartreview.tsx) again — a beautiful screen with a `strokeDashoffset` of 111.**

---

## 6. The schema delta

**Economy claim: the entire wish-list needs THREE new section types, ONE new sub-item layer, and everything else is fields.**

New section types: `paradigm` (§2.3), `minimalPair` (§2.8), `story` (§2.10), `recall` (§2.12). *(Four — the fourth reviewer may collapse `recall` into a runtime concern; see §5.)*

Everything else is a field on a type that already exists. That economy comes almost entirely from `practice.mode` (§2.13).

### 6.1 Field additions to existing types

```ts
export const REGIONS   = ['fr','qc','be','ch'] as const;
export const REGISTERS = ['formel','standard','familier','argot'] as const;
export const TEACH_VARIANTS = ['prose','culture','register','warning'] as const;
export const ERROR_KINDS = ['error','fauxAmi','pitfall'] as const;

| { type: 'teach'; title: string; body: string;
    variant?: TeachVariant;    // 'culture' renders INLINE, not as a sidebar
    region?: Region; register?: Register }

| { type: 'focus'; title: string; rule?: string; points: string[] }   // + rule

| { type: 'steps'; title: string; steps: BuildStep[] }                // widened

| { type: 'examples'; title: string; examples: ExampleRow[] }         // + literal, align, audio

| { type: 'useCases'; title: string;
    cases: { situation: string; fr: string; en: string;
             register?: Register; region?: Region }[] }               // + register ← CRITICAL

| { type: 'commonErrors'; title: string;
    errors: { wrong: string; right: string; why: string;
              kind?: ErrorKind; looksLike?: string }[] }              // + kind, looksLike

| { type: 'audio'; title: string;
    lines: { fr: string; en?: string; audio?: AudioAsset | null }[] } // widened from string[]

| { type: 'practice'; title: string; skill: Skill;
    mode: DrillKind;                                                  // ← the economy
    itemIds: string[]; opts?: PracticeOpts }

| { type: 'quiz'; title: string;
    questions: { q: string; opts: string[]; correct: number;
                 why?: string;          // ALREADY EXISTS. never rendered. §5.
                 difficulty?: 1 | 2 | 3;
                 itemId?: string;       // credits the SRS
                 teaches?: string;      // an anchor → the error drawer's deep link
                 tags?: string[] }[] }
```

**And on `Lesson`:**

```ts
export const LESSON_KINDS = ['lesson','boss'] as const;

export type Lesson = {
  // … existing …
  levelLabel: string;   // the chip 'PRONONCIATION' that lesson.tsx:140 renders
                        // and the schema has NOWHERE to put today
  kind?: LessonKind;    // 'boss' — a boss fight IS a lesson of quiz+practice
                        // sections drawn from earlier units. Not a new entity.
};
```

### 6.2 Word-level data: `Item` *is* the lexeme table

Three proposals need sub-`Item` granularity: bilingual linking, tap-any-word story mode, inline clues.

**Rejected: a bare alignment array** (`[[0,0],[1,2]]` on an example) — it cannot carry gender or per-word audio, so story mode and inline clues get nothing from it. Dead end.

**Rejected for now: a separate `Lexeme` entity** — the right long-term denormalisation (~16k tokens collapsing to ~1.5k lexemes), but it introduces a second identity space, a second review queue, and a join the app must resolve offline for every rendered sentence.

**Taken: `Item` with `kind: 'word'` already *is* a lexeme table** — it has `fr`, `en`, `ipa`, `gender`, `audioRef`, `notes`. So a token carries an inline gloss for immediate rendering **and** an optional `Item` id when a corpus word exists. The lexeme table then becomes a pure denormalisation later, **with zero token-shape change.**

```ts
/** One rendered word. Punctuation is its own token, so join(tokens)
 *  reconstructs the source exactly — the validator depends on it. */
export type Token = {
  t: string;         // surface form. Elisions SPLIT: "j'aime" → "j'" + "aime"
  en?: string;       // inline gloss, when no corpus item backs this word
  gender?: 'm' | 'f';
  lex?: string;      // the corpus Item this word IS. The lexeme link.
  clue?: string;     // a teaching clue anchored to THIS WORD, not the sentence
  p?: boolean;       // punctuation. never tappable, never blanked.
};

/** Alignment is n:m — "il y a" ↔ "there is", "j'aime" ↔ "I love".
 *  Any 1:1 design is a LIE ABOUT THE LANGUAGE, so pairs are index SETS. */
export type Align = {
  fr: Token[]; en: Token[];
  pairs: [number[], number[]][];
};
```

**The two validators that actually catch LLM failure:**

```ts
/** THE check. The dominant LLM failure here is silently dropping a word or
 *  fusing an elision — which renders as a sentence missing a word, and nobody
 *  notices. Make this a hard publish gate. */
function tokensReconstruct(tokens: Token[], src: string): boolean {
  const flat = tokens.map((k) => k.t).join('');
  const norm = (s: string) => s.replace(/\s+/g, '').replace(/[’]/g, "'");
  return norm(flat) === norm(src);
}
// + align: index bounds · no double-link (a word linked twice highlights two
//   English phrases at once — a visible lie) · ≥80% coverage (a half-aligned
//   sentence renders as half the words being dead to the touch).
```

> **Cost, stated plainly:**
> 1. Authoring volume roughly **triples** for aligned sentences.
> 2. **Tokens are derived data** and must be regenerated whenever `fr` changes. This breaks the schema's "an item may be rewritten and its id survives" property in one specific way, and `tokensReconstruct` is the only thing standing between that and a shipped bug.
> 3. **Alignment is the least reliable thing an LLM will produce here** — expect a 10–30% regeneration rate. **Recommendation for v1: align only the ~6 flagship examples per lesson, not the corpus.**
> 4. **French elision is a tokenisation trap** (`j'aime`, `l'eau`, `qu'est-ce que`). Do the split with a **deterministic tokeniser in the runner script**, not in the prompt. The LLM supplies glosses; the script supplies the split.

### 6.3 Audio addressing

Today `Item.audioRef?: string | null`, and the remote-provider path in [`tts.ts:21-24`](ealch-v2/src/services/tts.ts#L21-L24) **is a comment** — selecting ElevenLabs does nothing and execution falls through to device TTS. Every screen calls `tts.speak` directly, so there is **no single place a fallback ladder could live.**

**Do not put a variant map in the corpus.** A `Record<voice, url>` multiplies corpus size by voices × speeds, goes stale the instant a voice is added (you would republish the entire corpus to ship a Québécois voice), and URLs in the corpus poison the snapshot checksum on a CDN domain change.

```ts
/** What audio EXISTS. Not where it lives — the app derives the URL. ~40 bytes. */
export type AudioAsset = {
  ref: string;            // content-addressed base key: 'a1/cafe/001/main'
  voices: string[];       // voice ids with a native-speed take. [] ⇒ TTS only.
  slow?: string[];        // voice ids with a NATIVELY-GENERATED slow take.
                          // never client pitch-shifted — a pitch-shifted French
                          // vowel is a DIFFERENT VOWEL.
  durationMs?: number;    // shadowing needs it to align the learner's take
};

/** Ships WITH the corpus. A new voice is one corpus republish and ZERO app
 *  releases. That is the whole reason it is not baked into the binary. */
export type AudioPolicy = {
  cdn: string;
  voices: Voice[];        // { id, label, region: 'fr-FR'|'fr-CA', gender, synthetic }
  defaultVoice: string;
  keyTemplate: string;    // 'audio/fr/{voice}/{ref}{slow}.opus'
};

export type Corpus = { version; audio: AudioPolicy; units; lessons; items; scripts };
```

**One resolver, and every screen goes through it.** The fallback ladder in ONE place — requested voice+speed → requested voice, native speed → default voice → any voice → device TTS (the guaranteed floor).

> **Shadowing must REFUSE to fall back.** This is the one place degradation is wrong: device TTS timing varies by handset and OS voice, so scoring a learner's rhythm against it **scores the handset.** `practice.opts.minVoices` exists for exactly this — if `asset.voices.length < minVoices`, the renderer **hides the section** rather than degrading it. Same principle as [`schema.ts:201-203`](ealch-v2/src/content/schema.ts#L201-L203): render honestly, or not at all.
>
> **New publish abort condition:** any `mode: 'shadow'` section whose items have `voices.length === 0` fails validation. Ship a broken shadowing drill once and the feature is dead.

### 6.4 Anchors — the error drawer's deep link

Extend the existing dot grammar downward, with `#` marking the boundary between *addressable content* and *position within it*.

```
section     <lessonId>#s<n>            sons.03.l1#s4
step        <lessonId>#s<n>.<k>        sons.03.l1#s4.2
question    <lessonId>#s<n>.q<k>       sons.03.l1#s6.q3
paradigm    <lessonId>#s<n>.<person>   sons.03.l1#s3.nous
example     <lessonId>#s<n>.e<k>       sons.03.l1#s2.e1
```

**Anchors are positional — derived from array index, not authored.** `sections.map((s, i) => …)`. Free, no generator burden, no uniqueness for a human to police.

**The cost is real: a section reorder invalidates every historical anchor.** The mitigation is sufficient, and it is why this is safe:

- `AttemptEntry.corpusVersion` is stamped on write. On mismatch, the error drawer deep-links to the **lesson top**, not to section 4 of a lesson that has since been rewritten.
- **Anchors are never an SRS key.** They are ephemeral UI affordances. The SRS keys off `Item.id`, which is stable by construction. **That separation is what makes positional anchors safe.**

> 🐛 Also: [`lesson.tsx:40-44`](ealch-v2/app/lesson.tsx#L40-L44) takes `?key=sons3` and **falls back to `'sons3'` on anything unknown** — a silent wrong-lesson bug. Unknown id must render "not found", never a default lesson.

### 6.5 The renderer: a registry, not a switch

```ts
/** A MAPPED TYPE over the union, not a switch with a default. Adding a member
 *  to LessonSection and forgetting its component is then a COMPILE error —
 *  which is the entire point. A switch with a default silently renders nothing. */
export const REGISTRY: {
  [K in LessonSection['type']]:
    React.ComponentType<SectionProps<Extract<LessonSection, { type: K }>>>
} = { teach, steps, examples, useCases, hacks, cheatSheet, commonErrors,
      focus, table, paradigm, minimalPair, story, recall, audio, practice, quiz };
```

**Unknown / future section types degrade to *nothing*.** The corpus ships over the air, so **the corpus will routinely be newer than the installed binary. That is not an edge case; it is the steady state.**

```tsx
if (!C) { track('corpus.unknownSection', section.type); return null; }
// Render NOTHING. Not a placeholder, not "unsupported content".
// A lesson the app half-understands must still be COMPLETABLE, and a grey box
// saying "update your app" mid-lesson is worse than a shorter lesson.
```

> **Corollary, and it is load-bearing:** lesson completion must **never** depend on a section the app might not have. The quiz gate reads from what actually rendered; a boss gate reads the **attempt log**, not a section count.

**Performance at 15+ sections:**
1. **`ScrollView` → `FlatList`.** [`lesson.tsx:121`](ealch-v2/app/lesson.tsx#L121) mounts every block eagerly. Record `y` per anchor via `onLayout` into a ref map — **the same map the deep-link scroll needs, so it pays for itself.**
2. **`React.memo` every section.** Today the whole screen re-renders on every `setQuizSel`.
3. **One audio owner.** Sections emit; the screen owns the player. 🐛 **[`app/lesson.tsx`](ealch-v2/app/lesson.tsx) never calls `tts.stop()`** — not on unmount, not on navigation ([`sentence.tsx:52`](ealch-v2/app/sentence.tsx#L52) and [`roleplay.tsx:57`](ealch-v2/app/roleplay.tsx#L57) do). **Navigating away mid-utterance leaves French being spoken over the next screen.** The registry fixes this structurally, because no section can reach `tts`.
4. **Prefetch audio ~2 viewports ahead**, never the whole lesson.

### 6.6 What an LLM must NOT generate

Three things an LLM will get wrong **invisibly**. Each needs a non-LLM gate. Their failure mode is not a crash — it is **a confidently taught lie, discovered by a user.**

| Field | Why not | The gate |
|---|---|---|
| **`paradigm.cells` (verb forms)** | It will hallucinate a form for an irregular or a rare tense. A hallucinated conjugation is a taught lie **in the one place a learner cannot self-correct.** | Deterministic conjugator or curated data file. LLM may write `rule` and `sounds`. |
| **`Item.gender`** | [`schema.ts:129-130`](ealch-v2/src/content/schema.ts#L129-L130) calls gender the #1 beginner error. An LLM gender error teaches a lie. | **Lexicon lookup or human. Non-negotiable.** |
| **`teach` `variant:'culture'`** | An LLM invents plausible cultural claims with total confidence. **Highest reputational risk, lowest detectability** — nothing mechanical can check it. | Native reviewer. |
| `Item.ipa` | LLM IPA is confidently wrong. | Phonemizer (espeak-ng / lexicon). |
| `quiz` distractors | The mechanical check (`correct` in range) **cannot catch a distractor that is also correct** — a common failure. | Hostile-examiner LLM cross-check pass. |
| `practice.opts.rubric` | A bad rubric silently marks correct answers wrong, at scale, invisibly. | Draft only; human approves. |
| `align.pairs` | The least reliable output here. 10–30% regeneration rate. | Restrict to flagship examples. |

> **And one thing the prompt cannot own: ids.** The generator cannot invent `fr.a1.cafe.007` — it will collide. **The runner script must allocate the next `seq` per `(level, theme)` and inject it.** Same for `version`. Getting this wrong means the SRS schedules a ghost.

---

## 7. The phased plan

The ordering constraint the proposal hides: **almost nothing in the quiz/gamification tier can exist before two unglamorous things — ids on the drill content, and an attempt log.** Adaptive difficulty, boss fights, weak-spot detection, SRS, and the error drawer are **all downstream of the attempt log.**

### Phase 0 — Close the schema/renderer gap. Alone. (~1 day, blocked on nothing.)

Convert the three existing lessons into schema `Lesson` objects using **only the 12 types that exist today**. Write the section registry with the 6 components those lessons need. Route `den.tsx` by lesson id, not by the `extendedLesson` string map. Delete `lessons.ts`'s private types.

Three content decisions it forces, all improvements:
- **`unique: 'nasal'`** ([`lesson.tsx:19-24`](ealch-v2/app/lesson.tsx#L19-L24)) — content living in the view layer. It leaves the component.
- **`video: true`** ([`lesson.tsx:300-332`](ealch-v2/app/lesson.tsx#L300-L332)) — **drop it.** There is no video, and a play button over a hardcoded `2:14` that does nothing is exactly the dishonesty this codebase has been carefully removing.
- **`subs: string[]`** ([`lesson.tsx:153-199`](ealch-v2/app/lesson.tsx#L153-L199)) — a list of **titles with nothing behind them.** They become real `Lesson` rows. [`schema.ts:154-156`](ealch-v2/src/content/schema.ts#L154-L156) already says so.

**After Phase 0, the app renders the canonical schema and the central gap is closed. Everything below is additive.**

### Phase 1 — Amend the schema. One commit. Before any authoring.

All of §6, with validators and tests, landed together. **There are zero authored `Item`s and zero schema `Lesson`s, so there is nothing to migrate.** `ealch-admin` moves in lockstep.

> **This is the decision point. After content exists, every one of these changes costs a migration.**

### Phase 2 — Items. Give the drill content ids.
The six private, id-less arrays become `Item`s. ~30 items, a morning's work, and `practice` sections become authorable for the first time.

### Phase 3 — The attempt log + SRS. **The keystone.**

Every drill emits an `Attempt` on every answer (§5.4). FSRS on `(user, item, **modality**)`, on-device, replay-based sync. Fix `review_items`; drop `profiles.streak`. Smart Review stops being four hardcoded literals.

**Nothing adaptive exists before this — and neither does an honest home screen.**

> **Delete the fake `'23'` ([`home.tsx:82`](ealch-v2/app/home.tsx#L82)) and the `smartreview.tsx` literals *in the same PR*.** Their only justification was that the real number did not exist yet. The moment it does, they are simply lies.

(Storage: `expo-sqlite`, not AsyncStorage. Attempts run 10–50 per session; a year of daily use is 50k–100k rows, over a megabyte of JSON parsed on every cold start, and "what is due today" becomes a full-array scan on the JS thread. `WHERE due <= ?` with an index is the whole point. The pure logic files stay `node --test`-runnable either way — only the persistence shell differs. **Do this at the start of Phase 3, not after the first performance complaint.**)

### Phase 4 — `ContentService` + `seed.json`.
The publish pipeline **already writes `seed.json`. The app has simply never read it.**

### Phase 5 — Audio. `AudioPolicy` + CDN + the resolver.
Unblocks speed toggles, multi-voice, **and only then** shadowing.

### Phase 6 — Tokens and alignment.
Unblocks story mode, gap-fill, unscrambler, inline clues. Highest generation cost — do it after the pipeline has proven itself on one bundle.

### Phase 7 — `Script` entity.
Roleplay, interactive story, and player episodes are **one document shape**: an ordered list of lines with speaker, gloss, audio, timing, optional branches. Three features, one entity.

### Phase 8 — The fun stuff.
Adaptive selection, gates, the error drawer. **Every one is a pure function over `AttemptEntry[]`** and needs no further content work. This is the payoff for doing Phase 3 properly.

---

## 8. Fix these regardless of what is built from the proposal

### 8.1 Numbers on screen that are not true, today

These are live. They are not proposals, and they are the reason §5 exists.

| # | Finding | Cite |
|---|---|---|
| A | **The review count is a hardcoded `'23'`** — and `23` is *literally one of the numbers* the v4 migration deleted for being fabricated. | [`home.tsx:82`](ealch-v2/app/home.tsx#L82) vs [`useStore.ts:242-246`](ealch-v2/src/store/useStore.ts#L242-L246) |
| B | **The pronunciation percentage is a text-match ratio on an ASR transcript**, rendered as *"73%"*. It is structurally blind to the nasal contrast that lesson `sons1` exists to teach. | [`score.ts:100-112`](ealch-v2/src/utils/score.ts#L100-L112) → [`speak.tsx:252`](ealch-v2/app/speak.tsx#L252), [`voiceflash.tsx:273`](ealch-v2/app/voiceflash.tsx#L273) |
| C | **Smart Review promises an SRS schedule that does not exist** — *"Items return in 1 → 3 → 7 → 21 days."* When FSRS ships, those intervals will not be 1/3/7/21. | [`smartreview.tsx:150-153`](ealch-v2/app/smartreview.tsx#L150-L153) |
| D | Smart Review's next-due chips (`+14 tomorrow`, `+9 in 3 days`) and its progress ring (`strokeDashoffset={111}`) are literals. | [`smartreview.tsx:74-75`](ealch-v2/app/smartreview.tsx#L74-L75), [`:94`](ealch-v2/app/smartreview.tsx#L94) |
| E | **Every user is defaulted to CEFR `B1` on zero evidence** — client and server. | [`useStore.ts:133`](ealch-v2/src/store/useStore.ts#L133), [`schema.sql:29`](ealch-v2/supabase/schema.sql#L29) |
| F | **`profiles.streak` is a server-side stored counter** — the exact bug v4 deleted from the client. | [`schema.sql:33`](ealch-v2/supabase/schema.sql#L33) |
| G | **`review_items` denormalises `prompt`/`answer` into the scheduling row**, has no `last_review_at`/`reps`/`lapses`, and there is **no `attempts` table at all**. | [`schema.sql:37-49`](ealch-v2/supabase/schema.sql#L37-L49) |

### 8.2 Everything else

| # | Finding | Cite |
|---|---|---|
| 1 | **`FocusHeader` targets are 38×38** on seven screens. Two characters. | [`ui.tsx:245`](ealch-v2/src/components/ui.tsx#L245), [`:275`](ealch-v2/src/components/ui.tsx#L275) |
| 2 | **No French text is marked `fr-FR`.** VoiceOver reads French in an English voice — in a pronunciation app. | [`Type.tsx:46-63`](ealch-v2/src/components/Type.tsx#L46-L63) |
| 3 | **`lesson.tsx` never calls `tts.stop()`.** French keeps speaking over the next screen. | [`app/lesson.tsx`](ealch-v2/app/lesson.tsx) |
| 4 | **The quiz gate does not gate.** `pass = quizScore >= 2` on a 3-question, 3-option quiz. The guessing floor is 33%. | [`lesson.tsx:113`](ealch-v2/app/lesson.tsx#L113) |
| 5 | **Phase change never resets scroll.** Android can leave you scrolled past the end of the quiz. | [`lesson.tsx:75-81`](ealch-v2/app/lesson.tsx#L75-L81) |
| 6 | **Unknown lesson key silently loads `sons3`.** | [`lesson.tsx:43-44`](ealch-v2/app/lesson.tsx#L43-L44) |
| 7 | **`table` has no audio.** For a French conjugation table this is not a missing feature — **it is a wrong teaching.** | [`schema.ts:172`](ealch-v2/src/content/schema.ts#L172) |
| 8 | **`useCases` has no register.** No use case in the corpus can currently be *correct* for French. | [`schema.ts:164`](ealch-v2/src/content/schema.ts#L164) |
| 9 | **`quiz.why` is authored and never rendered.** The error drawer's payload has been thrown away since day one. | [`schema.ts:181`](ealch-v2/src/content/schema.ts#L181) |
| 10 | **`PixelRatio.getFontScale()` is not reactive.** Android users who change font scale get stale line heights. | [`Type.tsx:87`](ealch-v2/src/components/Type.tsx#L87) |
| 11 | **`sbWords` splits `un` from `café`** into separate bubbles, teaching that the article is detachable. | [`index.ts:48-53`](ealch-v2/src/content/index.ts#L48-L53) |
| 12 | **Negation and questions are at unit 18–20 of 26.** | [`curriculum.ts:35-37`](ealch-v2/src/content/curriculum.ts#L35-L37) |

---

## 9. The decisions this document is asking for

1. **Amend the schema now, before the corpus is authored?** (§6) — the one with a clock on it. Zero `Item`s exist today; every change here is free now and a migration later.
2. **`practice.mode` as the economy, or a section type per drill?** (§2.13) — 12 section types, or 21.
3. **Accept that word-level bilingual alignment is killed** (§1.1, §4.3) — chunk-level only, on both pedagogical and typographic grounds.
4. **Kill the shipped pronunciation percentage** (§5.3) — keep the verdict and the transcript. Buy phoneme-level assessment, or show no number. **Never anything in between.**
5. **Accept that XP and levels are rejected** (§5.10) — the streak stays; the fabricated currency does not. The honest headline is *"items you can currently recall,"* and it goes down when you stop.
6. **Accept that no content is hard-gated** (§5.5) — Boss Fight becomes an untimed, advisory, skippable Checkpoint. There is no design that can both be failed and not lock a paying adult out.
7. **The SRS keys on `(user, item, modality)`, not `(user, item)`** (§5.4) — this is the voice-first decision, and it is expensive to retrofit.
8. **Comprehensible input (`story`) promoted from a reading feature to the curriculum backbone?** (§2.10) — the largest content-authoring commitment in this document.
9. **Budget the three non-LLM gates** (§6.6): a conjugator, a gender lexicon, and a native reviewer for cultural claims. Their failure mode is not a crash — it is a confidently taught lie, discovered by a user.

### The one-line summary

> **Build the attempt log and the scheduler. They are the SRS, the adaptive engine, the mastery instrument, and the only honest source for the numbers the home screen currently fakes — all at once. Almost everything else in the proposal is downstream of them, and the three things that aren't (`paradigm` audio, `useCases` register, perception-before-production) are schema fields you can add this week for free.**
