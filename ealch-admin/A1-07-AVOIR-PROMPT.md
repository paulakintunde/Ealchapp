# Build a1.07 "Le verbe avoir"

You are authoring an A1 lesson in Ealch, end to end. Not drafting content for review: authoring it, wiring it, proving it on a device, and leaving it render-ready.

You have latitude on the teaching. You have none on the gates.

**Read first, in this order:**

1. `ealch-admin/A1-LESSON-GENERATION-PROMPT.md` **Part 1**, the A1 doctrine: why an A1 lesson is not a sons lesson with different words, the register of stakes, which section types A1 wants, the voice.
2. **`a1.05.l1` "Les pronoms sujets"**, built since a1.29 and sitting directly upstream of you. Its reframe is **"Nine pronouns. Six verb forms."** and its own test asserts that it teaches no conjugation, so it has deliberately set up a paradigm and left it empty. Read `pronoms-sujets-lesson.ts` and `a1-05-pronoms.test.ts`. **You are the lesson that keeps that promise.**
3. **`a1.29.l1` "Les articles partitifs"** and **`a1.11.l1` "Les articles indéfinis"**, the two most recent grammar builds. `articles-partitifs-*` is the freshest source to copy shape from; a1.11 is where the `de` rule you inherit was taught.
4. `ealch-admin/scripts/data/salutations-lesson.ts`, the A1 reference implementation for tone.

This file does not repeat that doctrine. What follows is the job.

---

## What exists

```
a1.07  The Verb Avoir (To Have)   seq 11
  sub:    "Le verbe avoir"
  canDo:  "Can say their age and what they have with avoir"
  themes: ["identite"]          <- READ THE NEXT SECTION, THIS THEME IS EMPTY
  lessonIds: []                 <- you are filling this
  prereqUnitIds: ["a1.05"]      <- Subject Pronouns, NOT a1.06
```

Do not change `title`, `sub` or `canDo`. All three are correct and the Den advertises them.

Your `tag` is **`A1 · LEÇON 11`**, not 07. The Den, the unit page and the mission list derive the lesson number from the unit's `seq`, and `tag` is the one place it is authored by hand. a1.03 shipped `LEÇON 03` at seq 5 and the header above it drew `LEÇON 05` (commit 56c79a7). a1.05 gets this right at `LEÇON 09`; derive it the same way, then pin it.

### The theme binding is empty, and it is the first decision you make

`a1.07` declares `themes: ["identite"]`. Measured 2026-08-05:

```
identite items in Postgres:   0
identite items in seed.json:  0
```

That theme has never existed. The Den renders a unit's theme chips as entry points into a themed deck, so as things stand a1.07 advertises a deck with nothing behind it. **a1.29 hit exactly this** with `nourriture` and resolved it by rebinding the unit to `cuisine`, which is a theme that exists and holds the lesson's material.

`a1.06` (Être) carries the same empty `identite` binding and is still unbuilt, so whatever you decide sets the precedent for it. Three options, pick one and say why:

- **Rebind to a theme that exists and holds your material.** `emotions` is where the fourteen expressions live and `nombres` is where the age sentences live; neither is a perfect fit for a verb unit and `emotions` is not in the seed cut (see the corpus section).
- **Drop the binding**, as a1.03, a1.04, a1.05 and a1.11 all do. A grammar unit that claims one theme misrepresents itself, and your material comes from six themes whatever you decide. **This is the option most consistent with the units around you**, and a1.05 immediately upstream is themeless.
- **Create `identite`**, which means authoring items from nothing and adding the theme to `SEED_CUT.themes` in `scripts/seed-cut.config.ts`. Most work, and it would need doing for a1.06 too.

Whichever you take, the unit edit is a separate visible line in your batch and in your report. Do not change it silently and do not leave it pointing at nothing.

### The suite is currently RED, and it is not your fault

Measured 2026-08-05, three consecutive runs, identical result:

```
tests 1249   pass 1248   fail 1
✖ a1-05-pronoms.test.ts: every round targets a trigger that is authored, and its drill exists
  "drill(s) no round can fire, because drillForRound only reads the first target:
   drill-elles-or-ils, drill-il-nobody"
```

`a1.05.l1` is in the seed and its own test says two of its drills are dead content. That is somebody else's in-flight work and **it is not yours to fix**. But two things follow:

- **Your baseline is 1249 tests with 1 failing, not a green suite.** When you report "tests before and after", say so. Do not let your own build hide behind an existing red, and do not claim green if that assertion is still failing when you finish.
- **That failure is the single most-warned-about trap in this codebase and it still landed.** It is described in the quiz section below. Read it twice.

### Your neighbourhood, and what each neighbour has already done

```
seq  9   a1.05   Subject Pronouns          a1.05.l1  22 sections, 6 acts, BUILT, 1 red assertion  <- YOUR PREREQ
seq 10   a1.06   The Verb Être (To Be)     empty, themes ["identite"], prereq ["a1.05"]
seq 11   a1.07   The Verb Avoir (To Have)  <- yours, empty
seq 21   a1.18   Negation                  empty, prereq ["a1.06", "a1.07"]
```

**1. a1.05 ends on a promise addressed to you.** Its reframe is "Nine pronouns. Six verb forms.", it teaches the nine-to-six collapse as its central mission, and `a1-05-pronoms.test.ts` carries an assertion literally named *"no verb conjugation is taught, so this does not become a1.06"*. A learner finishes a1.05 holding nine pronouns and the knowledge that they map onto six slots, and nothing has yet filled a slot.

**Fill them.** Open on that, by name. A learner who did a1.05 last week should recognise the grid the moment it appears, and your first mission is close to free because the hard idea is already theirs.

**2. If you ship before a1.06, you are the first conjugation lesson in the app.** a1.06 is unbuilt and you do not declare it as a prerequisite, so a learner can reach you with être unlearned. That means:

- You cannot lean on `être` for contrast beyond what a1.03 and a1.05 established, and you must not teach it. Naming être is fine; conjugating it is a1.06's job and duplicating it would leave two lessons owning one paradigm.
- **Whatever shape you choose for the six forms, a1.06 will inherit it.** Choose it deliberately and write down why in the source header, because the next author will copy it rather than re-derive it.

**3. Two later units are waiting on you.** `a1.18` Negation declares `prereqUnitIds: ["a1.06", "a1.07"]`. Your negation card is not a tidy extra; it is the ground a1.18 stands on. See the fourth error below, which is subtler than it looks.

**4. Your prereq names a1.05 and not a1.02.** Your canDo is half about age, and age is a number. `a1.02` (Numbers 1 to 20), `a1.27` (21 to 100) and `a1.28` (Large Numbers) are all built, and the age sentences you will reuse live in the `nombres` theme those lessons were built on. Treat the numbers as known and say so; do not teach counting. **Report the omission**, as a1.11 and a1.29 both reported theirs, and do not silently change the unit.

---

## The teaching problem, which is one rule wearing three costumes

Read this twice. It decides whether the lesson is worth building.

The canDo names two things and the brief names three: the conjugation, the age rule, and fourteen expressions. Shipped as three separate blocks, this is a paradigm table, a fact, and a vocabulary list, and a learner will forget two of the three by Thursday.

They are not three things. **Eleven of the fourteen expressions and the age rule are the same rule**, and it is a rule about English rather than about French:

```
J'ai faim.        I am hungry.
J'ai vingt ans.   I am twenty.
J'ai froid.       I am cold.
J'ai peur.        I am afraid.
J'ai raison.      I am right.
J'ai de la chance. I am lucky.
```

Every one of those is English **be** against French **have**. The learner does not need fourteen facts, they need one swap plus a list of the nouns it applies to. And the error it prevents is the loudest one an English speaker makes at A1: `Je suis vingt ans`, `Je suis faim`, which are not mildly wrong, they are not sentences.

> **The reframe candidate: "French has it. English is it."**
>
> Six words. It covers the age rule and eleven of the fourteen expressions unchanged, it explains why the errors happen rather than just forbidding them, and a learner can test it on themselves before they finish the mission. State it in `reframe` and carry it verbatim across at least three sections; the density validator enforces three, a1.11 and a1.29 carry eight, and the sons lessons run five to seven.

You have latitude. If you find a better line, take it and defend it in the report. What you may not do is choose a reframe about conjugation, because the conjugation is six forms a learner memorises in ten minutes and it is the least interesting thing in the lesson.

### The three expressions that do not fit, and why naming them helps

`avoir besoin de`, `avoir envie de` and `avoir mal` do **not** map onto English *be*. They map onto *need*, *want* and *hurt*, and all three take a complement:

```
J'ai besoin d'un stylo.     I need a pen.
J'ai envie d'un café.       I feel like a coffee.
J'ai mal à la tête.         My head hurts.
```

Do not hide them to keep the reframe tidy. Teach the eleven as one group and these three as a second, smaller group that behaves differently, and the learner gets a shape rather than a list of fourteen. `avoir mal à` is also the highest-frequency of the fourteen in this corpus by a distance, so it earns its own card whatever you do.

### Where English speakers actually go wrong

Four, in the order they cost a learner something:

- **`Je suis vingt ans` / `Je suis faim`.** The direct import of English *be*. This is the error the reframe exists to kill and the one that makes a learner sound like a beginner in their first sentence about themselves. **The corpus contains zero examples of `être` used with `ans`**, which is correct, because it is not French. You will be authoring the wrong side of this card yourself.
- **`avoir` is the wrong verb entirely for one of them.** `J'ai chaud` is "I am hot"; `Il fait chaud` is "it is hot" (the weather). Learners produce `Je suis chaud`, which is wrong, and `Il a chaud` for the weather, which is worse. One card, and it protects the whole `chaud`/`froid` pair.
- **The past tense ambush.** `J'ai mangé` is not "I have eaten a thing", it is a past tense, and it is 30% of what the corpus shows for these forms. See the corpus trap below. A learner who meets `j'ai` only as "I have" will read every passé composé as possession for months.
- **Negation drops the article, and sometimes there is no article to drop.** a1.11 taught that `un`/`une`/`des` collapse to `de` under a negative: `J'ai une voiture` becomes `je n'ai pas de voiture`. But `J'ai faim` becomes `je n'ai pas faim`, with no `de` at all, because `faim` never had an article. **That contrast is the best single question in your quiz** and it is what a1.18 will build on. Teach both halves on one screen.

Those four are your `commonErrors` mission and a good part of your exam. All four are testable, all four are things the learner will get wrong tomorrow, and none of them is a definition.

---

## The corpus: rich where you expect nothing, empty where you expect plenty

All figures measured against Postgres and `seed.json` on 2026-08-05.

### The age rule is already written, and it is in `nombres`

This is the happiest finding in the file. The age sentences you need are in the seed already, filed under the numbers theme that a1.02, a1.27 and a1.28 were built on:

```
fr.a1.nombres.026   Il a soixante ans.
fr.a1.nombres.027   Mon père a soixante-cinq ans.
fr.a1.nombres.043   Mon frère a vingt et un ans.
fr.a1.nombres.051   Elle a quatre-vingt-un ans aujourd'hui.
fr.a1.nombres.056   Ma grand-mère a quatre-vingt-dix ans.
fr.a1.nombres.121   Mon voisin a soixante-dix-sept ans mais il court encore.
fr.a1.nombres.132   Camille a fêté ses dix-huit ans samedi dernier.
fr.a1.nombres.175   Le chien de mon grand-père a treize ans.
fr.a1.nombres.237   Ma sœur a soixante et onze ans.
fr.a1.famille.010   Mon frère a dix ans.
fr.a1.ecole.263     Elle a six ans et demi.
```

Plus four in the sons track, which is also in the seed: `fr.sons.nasales.136` "Il a vingt ans.", `fr.sons.nasales.021` "J'ai trente ans en janvier.", `fr.sons.liaisons.101` "Ma fille a trois ans demain.", `fr.sons.voyelles.305` "C'est son anniversaire, elle a vingt ans aujourd'hui."

**Author nothing for the age rule.** Reuse these, and use the fact that they come from the numbers lessons: the learner already owns the number, and this mission gives them the frame it goes in. That is a better hook than any scene you could invent, and `fr.a1.ecole.263` "Elle a six ans et demi" hands you the half-year for free.

### The fourteen expressions exist, and almost none of them are in the seed

They live in `emotions`, as clean `word` and `phrase` items in exactly the shape a card deck wants, followed by worked sentences:

```
fr.a1.emotions.012  avoir faim        fr.a1.emotions.087  Nous avons faim après le travail.
fr.a1.emotions.013  avoir soif        fr.a1.emotions.100  Elle a soif pendant la marche.
fr.a1.emotions.016  avoir sommeil     fr.a1.emotions.091  Elle a chaud dans la salle d'attente.
fr.a1.emotions.017  avoir froid       fr.a1.emotions.096  Il a froid dans le bureau.
fr.a1.emotions.018  avoir chaud       fr.a1.emotions.042  Il a peur du noir.
fr.a1.emotions.019  avoir raison      fr.a1.emotions.080  Elle a peur des examens.
fr.a1.emotions.020  avoir tort        fr.a1.emotions.105  Nous avons peur de l'orage.
fr.a1.emotions.076  avoir envie de
```

Counts across a1 and a2, DB against seed:

```
avoir mal        49 / 12      the one with real seed coverage, in `corps`
avoir besoin de  78 /  6
avoir faim       16 /  1      only fr.a1.cuisine.185
avoir soif       11 /  2
avoir peur       18 /  0
avoir raison     20 /  0
avoir envie de   17 /  0
avoir tort        8 /  0
avoir l'air       6 /  0
avoir froid       4 /  1
avoir chaud       3 /  0
avoir de la chance 2 / 0      fr.a1.mots-essentiels.007
avoir sommeil     1 /  0      one row in the entire corpus
```

**Eight of the fourteen have zero seed coverage**, and `emotions` (108 a1 items) is not in `SEED_CUT.themes`, so none of its rows reaches `seed.json` today. `lesson-contract.test.ts` resolves `itemIds` against the seed, and you cannot publish (see the hazard below).

**a1.29 solved this exact problem and the machinery exists.** Read `merge-articles-partitifs-into-seed.ts` for how it copies referenced rows from outside the cut into the seed, and copy that approach rather than reinventing it. It is the difference between reusing a ready-made set of fourteen and authoring fourteen from scratch.

If you would rather stay inside the cut, that is defensible too, and it means authoring roughly ten expression items plus their worked sentences. Pick one deliberately. Do not half-do it and leave ids dangling.

`avoir sommeil` has exactly one row in the whole corpus and will need authoring whichever route you take.

### The trap: a third of `j'ai` is a past tense

```
a1 rows opening on an avoir form                         522
  ...of those, followed by a past participle              158   (30%)
```

`J'ai perdu mes clés`, `Il a mangé ses croissants`, `J'ai acheté trois kilos de pommes`, `Nous avons visité quinze pays`. These are **passé composé**, they are not this lesson, and a learner at a1.07 has not met a past tense at all.

This is the same shape as a1.29's problem, where four fifths of `du` turned out to be `de + le` rather than a partitive, and a1.29 answered it with a dedicated mission (`s14-other-du`). **Do the same.** One mission that says "you will see `j'ai` in front of another verb and it stops meaning have" is worth more than any drill, it stops a learner mis-parsing a third of the sentences they meet, and the corpus gives you 158 clean examples to pick from.

It also protects you mechanically: a grep-driven author fills the practice section with passé composé and teaches a tense the lesson does not cover.

### The conjugation cards already have a shape, and half the paradigm is missing

The corpus has an established shape for a conjugated form: `cardType: 'conjugation'` with `prompt` as the card front.

```
fr.a1.famille.007   prompt "avoir · présent · je"    fr "j'ai"          [seed]
fr.a1.corps.009     prompt "avoir · présent · je"    fr "j'ai"          [seed]
fr.a1.ecole.008     prompt "avoir · présent · nous"  fr "nous avons"    [seed]
```

96 conjugation cards exist across the DB. For avoir, **only `je` and `nous` are covered**; `tu as`, `il a`, `vous avez` and `ils ont` do not exist as conjugation cards anywhere. Author the missing four in the theme you settle on, following the `prompt` format above exactly, because `content.logic.ts` filters the themed flashcard hub on `cardType` and a card that breaks the format is a card the hub serves wrong.

Note `validateItem` **requires** `prompt` on any item whose `cardType` is not `vocab`. And note the two duplicate `avoir · présent · je` rows above: per-theme deduping is what allows that, and it is fine.

### **`prompt` is rendered by no lesson component. Read this before you design the paradigm mission.**

Grep it. The only `.prompt` in the component tree is `ScenePlayer` reading a scene *choice* beat's prompt, which is an unrelated field on an unrelated type.

So a `practice` or `flashcards` section built from conjugation items will show `j'ai` and `I have` and **silently drop the "avoir · présent · je" front that makes it a conjugation card at all.** The paradigm would render as six vocabulary cards.

This is the "authored, valid, invisible" failure in its purest form and it is aimed directly at this lesson. Two honest ways out:

- **Carry the paradigm in the section**, not in the items: a `cardDeck` or a `groupDrill` whose cards state the pronoun and the form themselves, with `itemId` joining each card to its corpus row for audio and scoring. This is what a1.03 does with `wordCard` and it needs no component change.
- **Wire `prompt` into the practice card**, which is a real fix, touches `PracticeVFView`, and needs its own test. Bigger, and it would make every conjugation card in the app work properly.

Take the first unless you have a reason. Say which, and if you take the first, do not also author `prompt` on items nothing will read.

### Where a table is allowed, and where it is not

A six-form paradigm wants to be a table and **`density.logic.ts` fails any `table` section at `layer: 'core'`** (`table-in-core`). That rule exists because a table on a phone is a wall.

The way every v2 lesson handles it: the flow gets a walkable shape (`cardDeck` at `lg`, or `groupDrill`), and the full grid lives in a **reference sheet** at `layer: 'deep'`, reachable from the section via `sheetId`. a1.04's rebuild moved its grid to a sheet for exactly this reason. Your paradigm belongs in a sheet, and one card per form belongs in the flow.

### If you author items

Follow the shape and header notes in `ealch-admin/scripts/data/articles-partitifs-corpus.ts`, the freshest example, written against these exact gates. Put new entries in `scripts/data/avoir-corpus.ts`, not inline in the batch. Pick the theme that fits the noun rather than inventing one.

Safe next sequence numbers, checked against **both** Postgres and `seed.json` on 2026-08-05 (the two drift, and a new id must clear the higher of the pair):

```
famille 221   corps 294   ecole 298   nombres 243   cuisine 272
cafe 154      objets 217  routines 185  metiers 249  maison 156
emotions 109 (DB only)    au-restaurant 219 (DB only)
```

- ids continue the chosen theme's existing sequence; never renumber, ids are the SRS key
- **no two non-sentence items in one theme may share an `fr` once the leading article is stripped.** `flashhub-coverage.test.ts` strips `le|la|les|l'|un|une|des ` before comparing, so `avoir faim` and `la faim` would collide in one theme
- every a1 `word` or `phrase` item must carry both `flashcard` and `voiceflash`, or `flashhub-coverage.test.ts` fails the build
- every item must be reachable: named by a section, or released by a `deckTranche` and carrying a `flashcard` drill
- a `practice` mission with `skill: 'speak'` needs `voiceflash` on every item it names; a `dictation` section needs `dictation`. **Check against Postgres, not the seed:** the two drift, and an id that exists only in the seed renders as an empty card
- an item with a `cardType` other than `vocab` **must** carry a `prompt`, or `validateItem` fails

### Respelling

House convention: hyphenated syllables, stressed syllable capitalised, **nasal vowels closed with a superscript n and never a plain n or m**, `/ø œ/` as EU, `/y/` as Ü, `/e/` as AY against `/ɛ/` as EH. Brackets are added by the renderer, never stored.

This lesson is full of nasals: `ans` is `[ahⁿ]`, `faim` is `[fɛ̃]` → `[FAⁿ]`, `besoin` is `[buh-ZWAⁿ]`, `ont` is `[ohⁿ]`. **`ils ont` against `ils sont` is a liaison minimal pair** and the single hardest listening item in the lesson: `/il.zɔ̃/` against `/il.sɔ̃/`, one consonant. Get those two respellings right and pin them.

a1.11 and a1.29 both carry their own `RESPELL` map rather than reading the corpus rows, because 21 of the shipped rows respell `un` as `uhn`, which fails `hasPlainNasalFor`. Do the same, import from theirs where a word already appears, and run `hasPlainNasalFor` over your whole map in the batch. Verified on a Pixel 6 on 2026-08-05: the superscript n renders correctly, unlike the U+203F tie that shipped broken in sons.10.

---

## Designing this for a learner, on a phone

You asked for the user-friendly version, so this is not decoration. Everything below was watched on a Pixel 6 during the a1.01 rebuild (2026-08-04) and the a1.11 build (2026-08-05).

### What was proven to work, and is worth copying

- **`cardDeck` at `lg` is the workhorse.** It measures the room it is handed, sizes its card, and scrolls its own overflow with a down-chevron that only turns sideways once the learner has reached the bottom. Three or four cards, `label` / `head` / `fr` / `sub` / `body`, and the French line gets a 58dp listen button for free.
- **`cardDeck` or `groupDrill` at `xl` is right for one short French unit per screen.** `j'ai` is three characters. a1.11's `groupDrill` at `xl` drew one noun per screen with its respelling and gloss and a per-card counter, and it was the best-looking mission in that lesson. **This is the shape your six forms want.** Remember `xl` caps every string in the section at 12 words, which is fine for a form and fatal for a sentence.
- **`tapTable` is the right shape for a two-column contrast, and only if the cells are short.** Its cells are `<TX style={{flex: 1}}>` inside a row, the exact flex-on-Text shape that truncates elsewhere. a1.11 and a1.29 kept every cell to two or three words and all rows drew intact; the detail modal carries the long copy and an audio row. **Keep cells under four words. Three columns is the maximum that fits.** `J'ai faim | I am hungry | have vs be` is exactly this shape.
- **`reading` with `questionsInModal: true` and questions** is the only path that reaches `PassagePage`, and therefore the only path that draws the glossary underlines. Verified: the underlines drew, a tap opened the translation sheet with the note, and per-sentence replay buttons appeared beneath. One flag away from being invisible.
- **`commonErrors` with `swipe: true, size: 'lg'`** draws one trap per screen with dots, wrong above right above why, all inside the fold. Without `swipe` it takes a fallback path that drew a completely **blank mission** on sons.08 m22 and a1.01 m5.
- **`scene`** walks beats one at a time with a committed choice and a full-screen break. The choice beat gates its own Continue with "Choose an answer to continue", the `followUp` renders under the options, and `audioFirst` on the break holds the text back until the audio has played. All verified. `Je suis vingt ans` said to a French person is a perfect choice beat: both options are things a learner would say and exactly one is not French.

### What is still broken, and what to do about it

- **A `scene` break card runs past the fold on a Pixel 6, with its Continue button below it.** Reported on a1.01, confirmed unchanged on a1.11. The page scrolls and a chevron marks it, so it is usable rather than broken, and no amount of copy trimming closes the gap. **The real fix is layout, not copy:** `scene` is absent from `ownsLayout()` in `LessonPager.tsx`, so it renders inside a scrolling page instead of owning the viewport. Adding it there would let the break size itself and would touch ten scene lessons, so it wants a deliberate decision rather than a drive-by. Keep your break body between 24 and 40 words regardless.
- **Two filled gold primary buttons appear on one screen** during a scene: the mission's `Continue` and the pager's `Next`, about 400dp apart, both filled, both gold. The doctrine says one primary action per screen. The reading from the a1.11 device pass was that **`Next` should be demoted while a scene owns the screen**, not that `Continue` should be outlined, because Continue is the learner's real action there and Next does nothing useful mid-scene. Still open. If your lesson makes the answer obvious, say so and let Paul decide. Do not change it unasked.
- **`Écouter` is French UI chrome** on the reading mission, against the English-chrome-French-content rule. Component copy, pre-existing, not yours to fix, but do not add more.

### The layout rules, each of which is a bug that shipped

- **`ownsLayout()` in `LessonPager.tsx`** decides which sections get the viewport: swipe-flagged sections, `cardDeck`, `groupDrill` at `xl`, stepped `trapDrill`, `flashcards`, `reviewDeck`, `practice`, and `reading` with `questionsInModal`. `tapTable`, `vocabThemes`, `story`, `scene`, `examples`, `useCases` and `listening` are **not** in it and render inside a scrolling page.
- **`size` looks decorative and is not.** `ownsLayout()` ignores it; `density.logic.ts` reads `xl` as a 12-word cap on every string in the section. This cost a session on a1.01.
- **`table` at `layer: 'core'` fails the density validator.** Tables go in a reference sheet at `layer: 'deep'`.
- **The flex belongs to a wrapper View, never to the Text.** A `<TX>` carrying `flex` inside a hug-content container is measured at its natural width, capped, then shrunk without re-wrapping, so the tail is cut while the audio speaks it in full. Copy `FrenchLine` in `LessonDeck.tsx`.
- **Measure, never guess.** `useMeasuredCardHeight(chrome, reserve)`, where `reserve` is whatever must stay visible below the card.
- **Exactly one child absorbs the slack** (`flex: 1`, `minHeight: 0`); everything else is `flexGrow: 0` with a fixed height.
- **44dp minimum tap target**, `hitSlop` when the visual must stay smaller.
- **Three term chips per section, maximum.** The renderer shows three and collapses the rest; seven sons.06 sections are in that state.
- **Mission titles: 27 characters or fewer.** The missions list gives each row one line and truncates with an ellipsis. Three a1.02 titles shipped over and were cut on a device.
- **Never call a prop callback during render.** ScenePlayer fired `onPlay` from a ref-guard in its render body and put a red "Cannot update a component while rendering a different component" toast over the break card in every scene lesson. Side effects go in `useEffect`.
- **The reading passage is ONE BLOCK with no line breaks.** `PassagePage` splits on `text.split(/(?<=[.!?»])\s+/)` and renders the pieces inline in a single `<TX>`, so every authored `\n` is consumed as whitespace and silently discarded.

### The dictée is a verb-form exercise if you measure it

`dicteeMode()` switches from letter tiles to **word** tiles above 16 letters, and the word-mode decoy pool is `['et','le','la','les','de','un','une','très','bien','merci','pour','avec','mais','oui']`.

That pool contains no verb forms, so a word-mode dictée on `Je n'ai pas faim.` will not offer `as` next to `ai`. **Letter mode is arguably the better choice for this lesson**, because `ai` against `as` against `a` is a spelling contrast and spelling it is the exercise. a1.11 and a1.29 both chose word mode by measuring `letterCount`; you may well want the opposite, and if so, choose short targets deliberately and **say in the source why you inverted the previous two lessons' decision**. Assert whichever you choose with the real `dicteeMode`.

---

## The failure this project keeps shipping: authored, valid, invisible

Before you author a single field, read this. Every item below passed schema validation, passed the whole test suite, and drew **nothing** to a learner. All were found on a device.

| What was authored | Why nothing drew it |
|---|---|
| **`Item.prompt` on every conjugation card** | **no lesson component reads it; the flashcard hub does** |
| a1.01's 12 final-exam questions | a second `quiz` section; the pager renders only the first |
| a1.01's 5 reading glossary entries | `reading` without `questionsInModal` never reaches the glossary renderer |
| 10 glossary entries across sons.05/.07/.09 | the lookup key was normalised differently from the passage token |
| a1.01 mission 5, a fully blank screen | `commonErrors` without `swipe` hit a `break` that fell out of the switch and returned `undefined` |
| `autoplay: true` in six seed sections | declared in `schema.ts`, implemented in no component, to this day |
| sons.06's 4th and later term chips | the renderer shows 3 and collapses the rest |
| `practice.skill` on every lesson | read by no component; `PracticeVFView` takes `itemIds` and nothing else |
| `useCases[].note` | `useCases` renders situation, fr and en, and no note field |
| **a1.05's `drill-elles-or-ils` and `drill-il-nobody`** | **`drillForRound` reads only a round's FIRST target; this is red right now** |

**The rule: after authoring any field, grep for a component that reads it.** If nothing does, either wire it or do not author it. A field with no reader is worse than an absent one, because it looks like the job is done.

The ones most likely to catch you:

- **One `quiz` section, carrying `rounds`.** `lessonPager.logic.ts` appends exactly one quiz page, resolved with `sections.find(s => s.type === 'quiz')`. A second is unreachable questions, and the contract test fails on it.
- **`reading` + `glossary` needs `questionsInModal: true` and questions.**
- **A `sheetId` must name a sheet the lesson actually declares.** You will have a sheet; wire it.
- **Do not author `autoplay`.** Use `audioFirst`, which ScenePlayer genuinely implements.
- **Two `practice` sections read as a repeat**, because they render identically whatever `skill` says. Author one.

---

## Shape

Follow the v2 spine in `ealch-admin/LESSON-GENERATION-PROMPT.md`. This must be a **v2 lesson**: `acts`, a stable `id` on every section, `reframe`, `deckTranche`, `terms`, `errorTriggers`, `drills`, and a **round-based quiz**.

Length is what the material needs. The v2 lessons run 19 to 31 missions; a1.01 is 21, a1.05 is 22, a1.11 and a1.29 are 23, a1.03 is 26.

**Weight the acts toward the have/be swap, not toward the paradigm.** Six forms is one act at most, and a1.05 has already taught the nine-to-six collapse the forms sit in. A defensible structure: the six slots a1.05 left empty, French has it and English is it, the fourteen in two groups, where it goes wrong including the past-tense ambush, and prove it.

Do not spend three missions drilling `ai / as / a / avons / avez / ont`. It is a closed set of six, the learner can see all of it on one screen, and a lesson that treats it as the hard part has misread which half of the canDo is difficult.

### The quiz

Six legal `format` values, from `schema.ts`. There are exactly six:

```
mcq | tapSilent | listenChoose | typeIn | speak | errorSpot
```

- **At most half may be `mcq`.** Recognition can be passed by elimination. a1.11 and a1.29 both landed at 10 of 25.
- **`errorSpot` is your best format and you should lean on it.** Every one of the four errors is a wrong sentence a learner would produce: `Je suis vingt ans`, `Je suis faim`, `Je suis chaud`, `Je n'ai pas de faim`. Showing the wrong sentence and asking for the fix tests exactly the thing. a1.11 and a1.29 both ran errorSpot at 8 of 25 and it was right both times.
- **`listenChoose` has a real job here.** `ils ont` against `ils sont` is one consonant across a liaison and it is genuinely hard; so is `il a` against `ils ont`. Both are legitimate teaching rather than a gotcha.
- Every question needs a `why` that teaches the rule rather than restating the answer, and a `ref` naming the section that taught it. **a1.04 shipped 3 questions with 0 whys and sat on a waiver list for it.** Do not join it.
- Correct answers must not cluster: the density validator fails any option slot holding more than 40% once there are eight or more closed questions.
- Free text is compared through `fold()`, which strips accents, case, punctuation and **all whitespace**. `j'ai faim` and `jaifaim` both pass. Verify with `matchesAccept` that every question accepts the answer it displays.
- **Each round names `targets`, and `drillForRound` walks them and stops at the FIRST one that resolves to a drill.** A drill named only in second place never fires and is dead content.

**That last rule is currently failing in a1.05, in this repo, today**, with two drills no round can reach. It was written into the a1.11 prompt and the a1.29 prompt and it still landed. a1.11 went from four rounds to five specifically so that a fifth drill would be reachable, and a1.29 did the same.

**Make every teaching drill the first resolving target of exactly one round, assert it in your test, and assert it in your batch script so a reordering fails before it reaches the database.** If you have five drills, you need five rounds, or fewer drills.

### Audio, briefs only

Author every audio spec so the lesson is render-ready, then stop. `Lesson.audio.recorded` entries with real `recordingId`s, section-level specs, and narration in `warm → focus → input → practice → produce → check → cheat` order.

**Do not run `pnpm audio:render`.** It spends real ElevenLabs credits. `CLIP_MANIFEST` is empty by design, so every card falls back to device TTS until the studio delivers; that is the correct shipping state and a `recordingId` resolving to nothing is not a bug. `ELEVENLABS_API_KEY` is not set in `ealch-admin/.env` in any case.

**Verb-specific brief note:** your minimal pairs are `ils ont` against `ils sont`, and `il a` against `ils ont`. The first is a liaison /z/ against an /s/ and the second is a liaison that exists against one that does not. Each pair must be recorded **by the same voice at the same speed in one take**, or the learner is comparing two performances instead of two forms. Write it into the brief, the way `sons.07`'s `rec-h-pairs` and a1.11's `rec-a1-11-pairs` pin theirs. Add the instruction that the six forms be read as one continuous take in paradigm order, because a learner replaying a paradigm hears the rhythm of the set as much as the forms.

---

## Wiring

- **`ealch-admin/scripts/author-avoir-batch.ts`**, modelled on `author-articles-partitifs-batch.ts`, the freshest and written against these gates. Validate everything before touching the database, upsert in one transaction, idempotent by id, `--dry-run` reports without writing. Assert the reframe count against an **explicit constant**, not a figure derived from the lesson: a derived count compares the content to itself and passes on any rewording. **Also assert drill reachability**, given the live failure above.
- Add **`content:avoir`** to `ealch-admin/package.json` beside the other `content:` scripts.
- **`ealch-admin/scripts/merge-avoir-into-seed.ts`**, modelled on `merge-articles-partitifs-into-seed.ts`, the most guarded and the one that already knows how to copy rows from outside the seed cut. It must **name the lessons it must not disturb rather than counting them**, because a count alone lets a one-for-one swap through. Name `a1.05.l1` explicitly: it is your prerequisite and it is somebody else's in-flight work.
- **Move the `version` counter forward** on any lesson you touch. The merge script prints "replacing vX with vY", and a rebuild that restarts its own numbering reads as a rollback in the log.

### The publish hazard, which has cost real work twice

`seed.json` and Postgres are two copies and they drift. `content:publish` regenerates the seed **from the database**, so publishing before applying the batch silently deletes the lesson from the seed. `sons.07.l1` was written to the seed, erased by someone else's publish, and survived only because its source files were intact.

Order: **apply to Postgres first, merge into the seed second, publish only when both agree.**

`pnpm content:parity` answers the question directly, and **it exits 1** for reasons that predate you and that you should not try to fix: `sons.09.l1` is seed-only and a publish would delete it, `b2.01.l1` is database-only and `in_review`, and `sons.08.l1` is a version ahead in the database. So **you cannot publish**, and that is fine: applying and merging is the whole job.

### The cross-lesson hazard, which has now bitten once

**Adding items to the shared corpus can break another lesson's measured claim.** a1.11 added two feminine nouns ending in `-e` and moved a1.03's measured `-e` statistic from 871 to 873. That figure is printed on two a1.03 cards and re-measured from the seed by `a1-03-genre.test.ts` on every run, so the suite went red on a lesson nobody had touched. The fix was one number, a version bump, and re-running a1.03's own batch and merge.

Your exposure is the same. **Run the full suite after your merge, not just your own test**, and if you move somebody else's number, correct it at the source and re-apply that lesson rather than editing its test.

You also have a live neighbour: `a1.05.l1` was built between a1.29 shipping and this file being written, and the seed changed underneath a read during that window. **Re-read the seed immediately before your merge** rather than trusting a figure you measured an hour earlier.

---

## The gates: you are not done until all of these pass

```bash
cd ealch-v2
npx tsc --noEmit
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
```

**Baseline 2026-08-05: 1,249 tests, 1,248 passing, 1 failing** (`a1-05-pronoms.test.ts`, drill reachability, described above). Yours must not add a second failure and must not reduce the pass count. Use `node --test`, the command in `package.json`. Running through `npx tsx --test` reports failures in `i18n.test.ts` and `content.logic.test.ts` that do not reproduce under the real runner and are not regressions; do not chase them.

`npx tsc --noEmit` in **`ealch-v2` must be 0**. In `ealch-admin` it reports **5 pre-existing errors** in `elision-lesson.ts` and `masterclass-lesson.ts` (a `SoundGroup` missing `items`). Not yours; do not add a sixth. If you author a `groupDrill` control page, give it `items: []` explicitly, which is what keeps a1.11 and a1.29 out of that list.

`lesson-contract.test.ts` runs over every lesson and will fail, naming your lesson and mission number, if a `practiceOn` / `itemIds` / `sheetId` / `terms` id does not resolve, a quiz question or control check has no `why`, an act names a missing section or two acts claim one, a quiz `ref` names a section not in the lesson, a section renders empty, a sub-dividing section does not own its layout, an authored quiz question is unreachable, or a reading glossary is authored where nothing renders it.

Also write **`ealch-v2/src/content/a1-07-avoir.test.ts`**, modelled on `a1-29-partitifs.test.ts` and `a1-05-pronoms.test.ts`, the two closest in shape and both written in the last few days:

- your spine in order, and your act structure
- your reframe, verbatim, the exact number of times you authored it, **derived** by comparing the seed count to the source count rather than hardcoded
- **all six forms are taught and all six are tested.** `vous avez` and `ils ont` are the two most likely to be dropped in a later trim
- **the have/be swap is demonstrated on a pair, not asserted.** Find a section that shows a French `avoir` sentence beside its English `be` translation and says what swapped. This is the assertion that stops the lesson decaying into a table plus a word list, and it is worth the most; write it against the section text rather than against a count
- **the age rule is taught with a number the learner already owns**, and `Je suis vingt ans` appears as an error and never as a model
- **all fourteen expressions are present**, and the three that take a complement (`besoin de`, `envie de`, `mal à`) are taught as a distinct group rather than mixed into the eleven
- **the past-tense ambush is taught**, and no card teaching possession uses a passé composé sentence as its example. This is the one your corpus will fight you on; write it against the examples the teaching sections name
- **the negation contrast is present**: `pas de voiture` against `pas faim`, both on one surface
- **no verb other than avoir is conjugated**, so this does not become a1.06. a1.05's test has the equivalent assertion; copy its shape
- no metalinguistic corpus item is used as a learner sentence
- tranches release only items already taught, once each
- no duplicate headword within a theme, computed the way `flashhub-coverage.test.ts` computes it, and no dead corpus entry
- **every inlined respelling follows the nasal convention.** Import `hasPlainNasalFor` from `density.logic.ts` rather than writing your own check
- **every dictation item lands in the mode you chose**, asserted with the real `dicteeMode`
- the exam is at most half `mcq`, **every question has a `why` and a `ref`**, and every free-text question accepts the answer it displays, checked through the real `matchesAccept`
- **every drill is the first resolving target of some round.** Not optional. This assertion is red in a1.05 today
- every reading glossary entry underlines a word that is really there, checked through the real `segmentSentence`
- **no `prompt` is authored on an item this lesson displays**, unless you wired the renderer, in which case assert the wiring instead
- seed parity that **derives** every figure from the authored source rather than hardcoding counts

**Do not reimplement app logic inside a test.** An earlier version of a1.01's test inlined its own copy of the glossary lookup, which made it a second implementation free to drift from the renderer, and it had copied the version that was already broken, so it passed while the feature was dead. Import the real function. If the logic lives in a `.tsx` the runner cannot import, that is the signal to extract it to a `.logic.ts`, which is why `dictee.logic.ts` and `gloss.logic.ts` exist.

A hardcoded count fails on itself the first time content legitimately changes, and the fix is then to edit the test, which is how a test comes to certify a bug.

**Mutation-test your own file before you claim it works.** a1.11's was proven by gutting the passage, breaking the article boundary and deleting a trap, and checking each one turned it red. A test that has never failed has never been tested.

---

## Verify on a device before you claim it works

The suite passing is necessary and not sufficient. Four failure classes are invisible to tests and obvious in ten seconds on a phone: a card sized by guessing that runs past the bottom and takes its buttons with it; a field authored, schema-valid and rendered by nothing; a gesture that silently stops meaning anything; and chrome repeated on one screen.

**The `prompt` problem above is precisely a device finding.** Every conjugation card will pass every test and may show the wrong face. Look at it.

```bash
cd ealch-v2
node node_modules/expo/bin/cli start --port 8082
```

Practical notes from the 2026-08-05 session, which will save an hour:

- **Check whether Metro is already running on 8082 before starting one.** An instance from a previous session is usually there. `node .../cli start` in non-interactive mode will not prompt, it will print "Port 8082 is being used" and skip the dev server, which looks like a start.
- **A live Metro can take 60 seconds to answer its first manifest request.** A `curl -m 20` returns status 000 and looks dead. Retry at 60 before concluding anything.
- **Pre-build the bundle on the host** by fetching `entry.bundle` for `platform=android` before pointing the phone at Metro. An 18 MB cold build over `adb reverse` times out and dies with `unexpected end of stream`.
- **Then grep the served bundle for your own new strings.** Metro on this project has twice served a stale bundle while the tester believed they were testing a new build, and two sessions of work were reported as done on the strength of one. Grep for four or five strings you wrote, including one respelling.
- The dev-launcher scheme comes from the **slug**: `exp+wonerock://expo-development-client/?url=http://127.0.0.1:8082`, not the app name. The package is `app.ealch.mobile`.
- **An adb daemon restart silently drops `adb reverse`.** The symptom is a full-screen `java.net.ConnectException` that looks like Metro died. Re-run `adb reverse tcp:8082 tcp:8082` and reload.
- **Do not use `adb shell input keyevent`.** It crashes this New Architecture dev build with a native NPE in `ReactActivityDelegate.onKeyDown`, and it looks exactly like an app crash. Use `input tap` and `input swipe` only.
- **Screenshot with `adb exec-out screencap -p > file.png`.** `adb pull /sdcard/...` fails under Git Bash, which rewrites the device path into a Windows path.
- The app takes 40 to 60 seconds to render after launch. A white screen is usually patience.

**Navigating the lesson, which is fiddlier than it looks:**

- **These two deep links work and are much faster than tapping through the Den:**
  ```
  ealch://missions?key=a1.07.l1     the mission list, which lands directly on any mission
  ealch://lesson?key=a1.07.l1       the lesson from the top
  ```
  The `at=` parameter on `/lesson` does **not** jump to a mission; do not rely on it.
- A resume interstitial ("Pick up where you left off") sits in front of the lesson whenever there is progress and swallows the first tap. It names the act you were in, which is a useful check in itself.
- **Taps on the pager's Back/Next frequently do not register.** Horizontal **swipes** do: left to advance, right to go back.
- **Deck sections eat horizontal swipes** (they move the deck, not the page), so swiping through a lesson drifts. Do not count swipes and assume a mission number; read it off the header.
- The soft keyboard's autocorrect will rewrite French words you type into a free-text quiz field. Type the word, do not press space after it, and dismiss the keyboard with the chevron rather than committing the suggestion.
- **Check the paradigm mission and the reading passage specifically.** The first is where an unrendered `prompt` will show, and the second is where a glossary underline goes silently missing.

Verify at minimum: the scene end to end including the choice and the break, the six-form paradigm mission, one expression mission, the `commonErrors` deck, the reading passage with a gloss tap, and the quiz through one mcq and one free-text question. Say which ones and by what route.

---

## Known debt: do not copy these

- **`a1.05.l1`, your prerequisite, ships two unreachable drills** and its own test says so. Do not copy its round-and-target wiring; copy a1.11's or a1.29's.
- **`a1.04.l1`** was six sections long and on the `why` waiver list in `lesson-contract.test.ts` beside `sons.02`, `sons.03` and `a2.01`. A rebuild with its own test has since landed. The waiver list can only shrink; do not add yourself to it.
- Seven sons.06 sections declare more than 3 term chips.
- sons.06 missions 20 and 23 are both `practice` doing the same job. Merge or differentiate sharply.
- `TapRow.say`, `TapRow.detail.say` and `flashcards cards[].say` are device-TTS only and cannot hold a rendered clip: only a section has an `audioRef`.
- 21 of the shipped corpus rows respell `un` as `uhn`, which fails the nasal convention. Left alone deliberately; do not copy a respelling out of the corpus without checking it.

**`a1.29.l1` and `a1.11.l1` are the references**, `a1.05.l1` is the lesson you continue from, and `a1.01.l1` is the reference for tone.

## House rules

- **No em dashes anywhere.** Enforced by test.
- **No "honest"/"honesty"** in authored content. Enforced by test, and it catches "honestly" too.
- **English UI chrome, French content.** A French UI label is untranslatable and lands beside English on the same card. The existing guard only reads component source, so an authored French label passes CI and reaches the screen. `frSub` is the one field that is deliberately French, and every mission needs one.
- **Instruction and context are English, even inside French content.** Paul's rule, 2026-08-04: in an A1 passage, anything not inside `« »` is English. The learner's effort belongs on the exchange, not on decoding stage directions.
- **No grammar vocabulary in learner copy.** a1.11 and a1.29 ban « article défini », « partitif », « masculin » and « féminin » from their sections and terms and assert it. You inherit that and add to it: **« conjugaison », « auxiliaire », « participe passé », « présent de l'indicatif » and « verbe irrégulier » have no place on a card here.** A learner arriving from a1.05 has never been given those labels. Teach the behaviour plainly. `grammarIntroduced` is addressed to the curriculum and is better for using the precise words.
- `*.md` is gitignored here; a doc you write needs `git add -f`.

---

## What to report when you finish

- **what you did about the empty `identite` binding**, which of the three options you took, and whether it sets a precedent you would want a1.06 to follow
- the reframe you chose, and why that one rather than one about the paradigm
- **how you connected to a1.05's "Nine pronouns. Six verb forms."**, and what a learner who did a1.05 recognises in your first mission
- **what shape you gave the six forms**, whether the paradigm went to a reference sheet, and what a1.06 should copy
- **what you did about `Item.prompt`**: carried the paradigm in the section, or wired the renderer, and how you proved a conjugation card shows the right face on a device
- how the fourteen expressions are grouped, and where the three that take a complement sit
- **where the past-tense ambush is taught**, and confirmation that no possession card uses a passé composé example
- where each of the four English-speaker errors is taught and tested, and where the `pas de` against `pas faim` contrast lives
- **what you did about the prereq omission**: your canDo is half about age and a1.02/a1.27/a1.28 are not declared
- corpus: how many items reused, how many imported from themes outside the seed cut and by what mechanism, how many authored and why, and how many respellings you wrote rather than took from the corpus
- lesson: mission count, act structure, quiz size and format mix, the `errorSpot` share, and confirmation that **every question has a `why` and a `ref`** and **every drill is reachable**
- **whether your corpus additions moved a measured figure in another lesson**, and what you did about it
- test count before and after, **stated against the true baseline of 1,249 with 1 failing**, and confirmation that you mutation-tested your own file
- which missions you verified on the device, with screenshots, and by what route you reached them
- **anything you could not verify, said plainly.** A gap you name costs an hour. A gap you paper over costs a session, and this project has lost two that way. If a claim in this file has gone stale, say so rather than working around it: the seed changed under a read while this file was being written, and its predecessor shipped a test count that was 188 short.

Do not use AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the big one", "listen to the trap", "get those two right", "this is the part that pays", "here is the catch", and anything of that register.
