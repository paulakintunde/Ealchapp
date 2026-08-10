# Build a1.29 "The Partitive Articles"

You are authoring an A1 lesson in Ealch, end to end. Not drafting content for review: authoring it, wiring it, proving it on a device, and leaving it render-ready.

You have latitude on the teaching. You have none on the gates.

**Read first, in this order:**

1. `ealch-admin/A1-LESSON-GENERATION-PROMPT.md` **Part 1**, the A1 doctrine: why an A1 lesson is not a sons lesson with different words, the register of stakes, which section types A1 wants, the voice.
2. **`a1.11.l1` "Les articles indéfinis"**, built 2026-08-05 and device-verified. It is your closest sibling, it explicitly refused to teach your material, and it hands you two things by name: `des`, and the rule that indefinites collapse to `de`. Read `articles-indefinis-lesson.ts` and its test.
3. **`a1.03.l1` "Le genre des noms"**, the strongest lesson in the neighbourhood and the reference for a grammar lesson at this level.
4. `ealch-admin/scripts/data/salutations-lesson.ts`, the A1 reference implementation for tone.

This file does not repeat that doctrine. What follows is the job.

---

## What exists

```
a1.29  The Partitive Articles     seq 8
  sub:    "Les articles partitifs"
  canDo:  "Can ask for an unspecified amount of food or drink with du, de la and de l"
  themes: ["nourriture"]        <- READ THE NEXT SECTION BEFORE YOU DO ANYTHING WITH THIS
  lessonIds: []                 <- you are filling this
  prereqUnitIds: ["a1.04"]      <- The Definite Articles, NOT a1.11
```

Do not change `title`, `sub` or `canDo`. All three are correct and the Den advertises them.

Your `tag` is **`A1 · LEÇON 08`**, not 29. The Den, the unit page and the mission list all derive the lesson number from the unit's `seq`, and `tag` is the one place it is authored by hand. a1.03 shipped `LEÇON 03` at seq 5 and the header above it drew `LEÇON 05` (commit 56c79a7). Derive it, then pin it.

### The theme binding is broken, and it is the first decision you make

`a1.29` declares `themes: ["nourriture"]`. Measured 2026-08-05:

```
nourriture items in Postgres:   0
nourriture items in seed.json:  0
```

**That theme does not exist.** No item in the corpus has ever carried it. The Den renders a unit's theme chips as entry points into a themed deck, so as things stand a1.29 advertises a deck with nothing behind it. a1.01 has the same defect on its second theme (`politesse`, also zero), so there is precedent for it shipping unnoticed.

Three options and you must pick one and say why:

- **Rebind to a theme that exists.** `cuisine` (415 items), `marche` (343) and `cafe` (312) are all in the seed cut and all hold real partitive sentences. This is the smallest change and it makes the chip work.
- **Drop the binding**, as a1.03, a1.04 and a1.11 all do. A grammar unit that claims one theme misrepresents itself, and your nouns will come from six themes whatever you decide.
- **Create the theme**, which means authoring `nourriture` items from nothing and adding it to `SEED_CUT.themes` in `scripts/seed-cut.config.ts`. Most work, and it duplicates `cuisine`.

Whatever you choose, the unit edit is a separate, visible line in your batch and your report. Do not change it silently, and do not leave it pointing at nothing.

### Your neighbourhood, and what each neighbour has already done

```
seq 5   a1.03   Noun Gender             a1.03.l1  26 sections, v2, strong
seq 6   a1.04   The Definite Articles   a1.04.l1  6 sections, v2, the weakest lesson in the app  <- YOUR PREREQ
seq 7   a1.11   The Indefinite Articles a1.11.l1  23 sections, v1, built 2026-08-05
seq 8   a1.29   The Partitive Articles  <- yours, empty
```

**1. `a1.11` deliberately left you `des`, and said so on a card.** It teaches `des` as one thing only, the plural of `un` and `une`, and its test asserts that `du` and `de la` appear on no production surface. Its reference sheet closes with a note that says, in learner English, that `des` has a second life as a quantity word and that it is not started there.

That note is your opening. **`des` is not new vocabulary to this learner, it is a word they own doing a second job**, and that is a better first mission than another table. Its test will not break if you teach it: the assertion is scoped to a1.11's own surfaces.

**2. `a1.11` already taught the `de` collapse under negation.** `J'ai une voiture` becomes `je n'ai pas de voiture`, and `j'aime le café` is unchanged. Your negation rule is the same rule one noun-class further on (`je mange du pain` becomes `je ne mange pas de pain`), which means you are extending something rather than introducing it. Say so, and reference it. A learner who did a1.11 last week should feel the click.

**3. Your prerequisite is a1.04 and a1.04 is the weakest lesson in the app.** As it ships in the seed: 6 sections, 0 acts, 4 itemIds, 3 quiz questions with 0 `why`, on the waiver list in `lesson-contract.test.ts` beside `sons.02`, `sons.03` and `a2.01`. Do not model anything on it and do not add yourself to that list.

There is also an unfinished rebuild of it on disk: `scripts/data/articles-lesson.ts` (1,846 lines) and `articles-terms.ts`, both untracked, with no batch script, no merge script, no `package.json` entry and no test, and a header comment referring to an `a1-04-articles.test.ts` that does not exist. **Do not finish it as part of this job** and do not assume a1.04 has been fixed. Know only that a learner walks out of six thin sections directly into yours.

**4. Your prereq chain names a1.04 and not a1.11, and the whole lesson leans on a1.11.** You need `des`, you need the `de`-under-negation rule, and you need the un/une contrast. All three are a1.11's, and a learner can legitimately reach you without opening it.

Build on what a1.03 and a1.04 established (`le`/`la`/`les`, `un`/`une`) and treat everything a1.11-specific as something you re-establish in one card rather than assume. **Report the inconsistency; do not silently change the unit.** a1.11 has the mirror-image problem and handled it the same way.

---

## The teaching problem, which is a line English does not draw

Read this twice. It decides whether the lesson is worth building.

The canDo asks for "an unspecified amount of food or drink". That is the use case, and it is a good one. But the thing that is actually hard is a **distinction English does not make you make**:

```
un café       one cup of coffee, a countable thing you can put on a table
du café       coffee, the substance, an amount nobody has measured
le café       coffee in general, or the specific coffee we both know about
```

Three articles, one noun, and English gives you "a coffee", "some coffee" and "the coffee" with *some* usually deleted. So the learner has no instinct to transfer and, worse, a1.11 has just taught them that `un` means "new to the listener". **`du café` is also new to the listener.** Newness is not what separates these two. Countability is.

> **The reframe candidate: "`Un` is one of them. `Du` is some of it."**
>
> Nine words. It states the countable/uncountable line rather than the newness line, it is true of `de la` and `de l'` unchanged, and a learner can test it on the next thing they order. State it in `reframe` and carry it verbatim across at least three sections; the density validator enforces three, a1.11 carries eight, and the sons lessons run five to seven.

You have latitude here. If you find a better line, take it and defend it in the report. What you may not do is choose a reframe about newness, because a1.11 already owns that one and it does not separate `un` from `du`.

### The four places an English speaker goes wrong

In the order they cost a learner something:

- **They delete the article.** `Je mange pain.` English says "I eat bread" with nothing in front of it, so there is nothing to translate. This is the same shape as a1.11's `des` error and it is the most frequent one in this topic. It is also the one that sounds most obviously wrong to a French ear.
- **They order `un` when they want `du`, and the other way round.** `Je voudrais un café` and `je voudrais du café` are both correct French and mean different things, so nothing corrects them. This is the mission that makes the lesson worth building rather than being a three-cell table.
- **Every quantity word takes bare `de`.** `beaucoup de café`, never `beaucoup du café`. Same for `un peu de`, `assez de`, `trop de`, `moins de`, and every container: `un kilo de tomates`, `une bouteille d'eau`, `une tranche de fromage`. The article vanishes entirely the moment a quantity is named, which is counterintuitive and completely regular.
- **Negation gives `de`.** `Je mange du pain` becomes `je ne mange pas de pain`. a1.11 taught this for `un`/`une`/`des`; here it is the same rule and the learner should be told that, not taught it twice.

Those four are your `commonErrors` mission and a good part of your quiz. All four are testable, all four are things the learner will get wrong tomorrow, and none of them is a definition.

### The fifth thing, which is disambiguation rather than error

**Most of the `du` in French is not this word.** `près du lit`, `le plat du jour`, `à côté du salon`, `l'odeur du pain` are all `de + le` doing something else entirely, and the learner has been reading them since a1.01 without being told they are a different animal.

Measured across the 776 a1 corpus rows containing `du`, `de la` or `de l'`:

```
in a verb frame (real partitive candidates)      171
after a preposition (près de, à côté de, ...)    118
noun + de + noun (l'odeur du pain, le sol de la) 93
```

Roughly four in five are not partitives. **Give this a mission.** "The other du" is genuinely useful, it is the difference between a learner who has a rule and one who has a rule they can apply, and the corpus is full of clean examples of both sides. It also protects you: see the corpus section.

### Where the canDo is narrower than the word

`du` is not only about food. `faire du sport`, `jouer du piano`, `du courage`, `du bruit`, `du repos` are all the same article and all in the corpus. The canDo frames this lesson around food and drink and you should honour that frame, because it is where a learner will use it this week.

But close on one card showing the word off its home ground, or you have taught a rule about restaurants rather than a rule about French. One card, not a mission.

---

## The corpus: rich, and booby-trapped

Unlike a1.11, which had to author its central narrative because nothing in the corpus did the job, **your material largely exists**. The job here is curation and disambiguation, not authoring. Do not write sentences you can reuse.

### What is reusable, and where

**31 partitive rows sit inside themes that are already in the seed cut** and are therefore reachable with no extra machinery. A sample, all verified published in Postgres and present in `seed.json` on 2026-08-05:

```
fr.a1.cuisine.007   Je mange du pain.
fr.a1.cuisine.004   Je bois du café le matin.
fr.a1.cuisine.199   Tu bois de l'eau avec ton repas.
fr.a1.cuisine.227   Il ajoute du sel dans la soupe.
fr.a1.cuisine.242   Il aime manger du fromage après le repas.
fr.a1.marche.005    J'aime acheter du fromage au marché.
fr.a1.marche.162    Le poissonnier vend du saumon frais.
fr.a1.marche.165    Avez-vous de la monnaie pour vingt euros?
fr.a1.cafe.141      Tu prends du lait dans ton café?
fr.a1.cafe.144      J'ai soif, je commande de l'eau.
fr.a1.animaux.008   La vache mange de l'herbe.
fr.a1.corps.246     Tu bois du sirop contre la toux avant de dormir.
```

`fr.a1.cuisine.007` "Je mange du pain." is as clean a teaching sentence as this corpus contains, and `fr.a1.marche.165` gives you `de la` on a noun that is not food, which the canDo's framing will otherwise leave you short of.

Also present at a1: **59 rows with `pas de` / `pas d'`** (enough to drill negation properly, unlike a1.11 which had ten), **212 rows across a1/a2 with `un peu de` / `beaucoup de` / `trop de`**, and **15 with a container** (`kilo`, `bouteille`, `tranche`, `morceau`, `paquet`, `litre`).

### Two themes that are perfect for this lesson and are NOT in the seed

```
expressions-de-quantite   521 items in Postgres,   0 in seed.json
au-restaurant             216 a1 items in Postgres, 0 in seed.json
```

`expressions-de-quantite` is built for you. It opens with `beaucoup de` as a `phrase` item followed by twelve worked sentences, then `un peu de`, then `assez de`, in exactly the shape a quantity mission wants. `au-restaurant` gives you the ordering frames (`Je voudrais…`, `Je prends…`, `Le serveur apporte du pain frais.`) plus a beautiful trap set: `le plat du jour`, `le menu du jour`, `l'addition à la fin du repas`, all `de + le` and none of them partitive.

They are absent from the seed because `scripts/seed-cut.config.ts` bundles items by theme and neither theme is on the list. **`publish-content.ts` pulls in every item a bundled lesson references**, so naming these ids is legitimate and they would arrive at the next publish. But `lesson-contract.test.ts` resolves `itemIds` against `seed.json`, and you cannot publish (see the hazard below).

So if you want them, **your merge script has to copy the referenced rows into the seed itself**, from the authored source, alongside anything you write. That is new machinery neither `merge-elision-into-seed.ts` nor `merge-articles-indefinis-into-seed.ts` has, it is about thirty lines, and it is worth it: `expressions-de-quantite` alone saves you authoring a whole mission. Decide, implement it deliberately, and say in the report which ids you imported and why.

The alternative, which is also defensible, is to stay inside the cut and author the handful of quantity sentences yourself. Pick one. Do not half-do it and leave ids dangling.

### Trap: the corpus row that states your rule

```
[cuisine] fr.a1.cuisine.008
  "Devant une quantité non comptée : du au masculin, de la au féminin, des au pluriel."
```

This is `kind: 'sentence'`, it resolves happily if you name its id, and it is metalanguage about French rather than French a learner would say. It is also **the exact rule this lesson teaches**, which makes it far more tempting than the equivalents that caught a1.11. Pulled into a listening or dictation mission it is nonsense to hear and impossible to spell.

Two more of the same kind, named so your test can exclude all three: `fr.a1.maison.008` and `fr.a1.metiers.016`.

**Do not reuse them as sentences.** Write your own example, and assert the exclusion.

### If you author items

Follow the shape and header notes in `ealch-admin/scripts/data/articles-indefinis-corpus.ts`, which is the freshest example and was written against these exact gates. Put new entries in `scripts/data/articles-partitifs-corpus.ts`, not inline in the batch. Pick the theme that fits the noun rather than inventing one.

Safe next sequence numbers, checked against **both** Postgres and `seed.json` on 2026-08-05 (the two drift, and a new id must clear the higher of the pair):

```
cuisine 262   marche 201   cafe 151   animaux 309   corps 294
maison 156    objets 217   famille 221
au-restaurant 219   expressions-de-quantite 153
```

- ids continue the chosen theme's existing sequence; never renumber, ids are the SRS key
- **no two non-sentence items in one theme may share an `fr` once the leading article is stripped.** `flashhub-coverage.test.ts` normalises `le|la|les|l'|un|une|des ` off the front before comparing, so `du pain` and `le pain` do NOT collide but `un café` and `le café` do. Note `du ` and `de la ` are not in that strip list, which means a `du pain` item and a `le pain` item can coexist; check anyway.
- every a1 `word` or `phrase` item must carry both `flashcard` and `voiceflash`, or `flashhub-coverage.test.ts` fails the build
- every item must be reachable: named by a section, or released by a `deckTranche` and carrying a `flashcard` drill
- a `practice` mission with `skill: 'speak'` needs `voiceflash` on every item it names; a `dictation` section needs `dictation`. **Check against Postgres, not the seed:** the two drift, and an id that exists only in the seed renders as an empty card

### Respelling, and the debt you are inheriting

House convention: hyphenated syllables, stressed syllable capitalised, **nasal vowels closed with a superscript n and never a plain n or m**, `/ø œ/` as EU, `/y/` as Ü, `/e/` as AY against `/ɛ/` as EH. Brackets are added by the renderer, never stored.

You are luckier than a1.11 here: `du` is `[dü]` and carries no nasal. But `un` still appears all over your contrast cards, and its shipped respelling across the corpus is `uhn`, which fails `hasPlainNasalFor`. **21 of the 37 rows a1.11 reused respell it that way.** a1.11 solved this by carrying its own `RESPELL` map and reading every screen from it rather than from the corpus rows; the shipped rows were left alone because they are shared with a1.01, a1.03 and the flashcard hub.

Do the same. Import a1.11's map if the word is already in it rather than typing a second copy, and put anything new in yours. Verified on a Pixel 6 on 2026-08-05: the superscript n renders correctly, unlike the U+203F tie that shipped broken in sons.10.

---

## Designing this for a learner, on a phone

You asked for the user-friendly version, so this is not decoration. Everything below was watched on a Pixel 6 during the a1.01 rebuild (2026-08-04) and the a1.11 build (2026-08-05).

### What was proven to work, and is worth copying

- **`cardDeck` at `lg` is the workhorse.** It measures the room it is handed, sizes its card, and scrolls its own overflow with a down-chevron that only turns sideways once the learner has reached the bottom. Three or four cards, `label` / `head` / `fr` / `sub` / `body`, and the French line gets a 58dp listen button for free. a1.11 used it five times and every one drew correctly.
- **`cardDeck` at `xl` is legitimate here and rarely elsewhere.** One French unit at display size, no more than 12 words in any string in the section. `un café` against `du café` is exactly the shape that earns it. a1.11's `groupDrill` at `xl` drew one noun per screen with its respelling and gloss and a per-card counter, and it is the best-looking mission in the lesson.
- **`tapTable` is the right shape for a contrast, and only if the cells are short.** Its cells are `<TX style={{flex: 1}}>` inside a row, which is the exact flex-on-Text shape that truncates elsewhere in this codebase. a1.11 kept every cell to two or three words and all five rows drew intact; the detail modal carries the long copy and an audio row. **Keep cells under four words.** Three columns is the maximum that fits.
- **`reading` with `questionsInModal: true` and questions** is the only path that reaches `PassagePage`, and therefore the only path that draws the glossary underlines. Verified: the underlines drew, a tap opened the translation sheet with the note, and per-sentence replay buttons appeared beneath. This is the single highest-value section type in the A1 kit and it is one flag away from being invisible.
- **`commonErrors` with `swipe: true, size: 'lg'`** draws one trap per screen with dots, wrong above right above why, all inside the fold. Without `swipe` it takes a fallback path that drew a completely **blank mission** on sons.08 m22 and a1.01 m5.
- **`scene`** walks beats one at a time with a committed choice and a full-screen break. The choice beat gates its own Continue with "Choose an answer to continue", the `followUp` renders under the options, and `audioFirst` on the break holds the text back until the audio has played. All verified.

### What is still broken, and what to do about it

- **A `scene` break card runs past the fold on a Pixel 6, with its Continue button below it.** Reported on a1.01, confirmed unchanged on a1.11. The page scrolls and a chevron marks it, so it is usable rather than broken, and no amount of copy trimming closes the gap: the card stacks a two-line heading, two reading rows of three or four lines each, a body and a coach line. **The real fix is layout, not copy:** `scene` is absent from `ownsLayout()` in `LessonPager.tsx`, so it renders inside a scrolling page instead of owning the viewport. Adding it there would let the break size itself and would touch nine scene lessons, so it wants a deliberate decision rather than a drive-by. Keep your break body between 24 and 40 words regardless.
- **Two filled gold primary buttons appear on one screen** during a scene: the mission's `Continue` and the pager's `Next`, about 400dp apart, both filled, both gold. The doctrine says one primary action per screen. The a1.11 report's reading was that **`Next` should be demoted while a scene owns the screen**, not that `Continue` should be outlined, because Continue is the learner's real action there and Next does nothing useful mid-scene. This is still open. If your lesson makes the answer obvious, say so and let Paul decide. Do not change it unasked.
- **`Écouter` is French UI chrome** on the reading mission, against the English-chrome-French-content rule. Component copy, pre-existing, not yours to fix, but do not add more.
- **Term chips render above the section title on some types and below it on others.** Cosmetic, pre-existing, noted so you do not think you caused it.

### The layout rules, each of which is a bug that shipped

- **`ownsLayout()` in `LessonPager.tsx`** decides which sections get the viewport: swipe-flagged sections, `cardDeck`, `groupDrill` at `xl`, stepped `trapDrill`, `flashcards`, `reviewDeck`, `practice`, and `reading` with `questionsInModal`. `tapTable`, `vocabThemes`, `story`, `scene`, `examples`, `useCases` and `listening` are **not** in it and render inside a scrolling page.
- **`size` looks decorative and is not.** `ownsLayout()` ignores it; `density.logic.ts` reads `xl` as a 12-word cap on every string in the section. Correct on an article card, fatal on anything with a sentence in it. This cost a session on a1.01.
- **The flex belongs to a wrapper View, never to the Text.** A `<TX>` carrying `flex` inside a hug-content container is measured at its natural width, capped, then shrunk without re-wrapping, so the tail is cut while the audio speaks it in full. Copy `FrenchLine` in `LessonDeck.tsx`.
- **Measure, never guess.** `useMeasuredCardHeight(chrome, reserve)`, where `reserve` is whatever must stay visible below the card.
- **Exactly one child absorbs the slack** (`flex: 1`, `minHeight: 0`); everything else is `flexGrow: 0` with a fixed height.
- **44dp minimum tap target**, `hitSlop` when the visual must stay smaller.
- **Three term chips per section, maximum.** The renderer shows three and collapses the rest; seven sons.06 sections are in that state.
- **Mission titles: 27 characters or fewer.** The missions list gives each row one line and truncates with an ellipsis. Three a1.02 titles shipped over and were cut on a device.
- **Never call a prop callback during render.** ScenePlayer fired `onPlay` from a ref-guard in its render body and put a red "Cannot update a component while rendering a different component" toast over the break card in every scene lesson. Side effects go in `useEffect`.
- **The reading passage is ONE BLOCK with no line breaks.** `PassagePage` splits on `text.split(/(?<=[.!?»])\s+/)` and renders the pieces inline in a single `<TX>`, so every authored `\n` is consumed as whitespace and silently discarded. a1.01 authors them and loses them.

### The dictée is an article exercise if you measure it

`dicteeMode()` switches from letter tiles to **word** tiles above 16 letters, and the word-mode decoy pool is drawn from `['le','la','les','un','une','de','et','très','bien','merci','pour','avec','mais','oui']`.

That pool contains `de`, `le`, `la`, `un` and `une` and **not** `du`. So a word-mode dictée on `Je ne mange pas de pain.` offers the learner `un` and `une` next to the `de` they need, which is exactly the choice this lesson teaches. a1.11 chose all six of its dictation sentences by measuring `letterCount` and rejecting the ones that fell under the threshold. Do the same, and say so in the source: it is a real design decision that looks like an arbitrary list.

---

## The failure this project keeps shipping: authored, valid, invisible

Before you author a single field, read this. Every item below passed schema validation, passed the whole test suite, and drew **nothing** to a learner. All were found on a device.

| What was authored | Why nothing drew it |
|---|---|
| a1.01's 12 final-exam questions | a second `quiz` section; the pager renders only the first |
| a1.01's 5 reading glossary entries | `reading` without `questionsInModal` never reaches the glossary renderer |
| 10 glossary entries across sons.05/.07/.09 | the lookup key was normalised differently from the passage token |
| a1.01 mission 5, a fully blank screen | `commonErrors` without `swipe` hit a `break` that fell out of the switch and returned `undefined` |
| `autoplay: true` in six seed sections | declared in `schema.ts`, implemented in no component, to this day |
| sons.06's 4th and later term chips | the renderer shows 3 and collapses the rest |
| `practice.skill` on every lesson | read by no component; `PracticeVFView` takes `itemIds` and nothing else |
| `useCases[].note` | `useCases` renders situation, fr and en, and no note field |

**The rule: after authoring any field, grep for a component that reads it.** If nothing does, either wire it or do not author it. A field with no reader is worse than an absent one, because it looks like the job is done.

The ones most likely to catch you:

- **One `quiz` section, carrying `rounds`.** `lessonPager.logic.ts` appends exactly one quiz page, resolved with `sections.find(s => s.type === 'quiz')`. A second is unreachable questions, and the contract test now fails on it.
- **`reading` + `glossary` needs `questionsInModal: true` and questions.**
- **A `sheetId` must name a sheet the lesson actually declares.**
- **Do not author `autoplay`.** Use `audioFirst`, which ScenePlayer genuinely implements.
- **Two `practice` sections read as a repeat**, because they render identically whatever `skill` says. sons.06 ships that and it is on the debt list. Author one.

---

## Shape

Follow the v2 spine in `ealch-admin/LESSON-GENERATION-PROMPT.md`. This must be a **v2 lesson**: `acts`, a stable `id` on every section, `reframe`, `deckTranche`, `terms`, `errorTriggers`, `drills`, and a **round-based quiz**.

Length is what the material needs. The v2 lessons run 19 to 31 missions; a1.01 is 21, a1.11 is 23, a1.03 is 26.

**Weight the acts toward the countable/uncountable choice and the quantity rule, not toward the three forms.** The forms are three cells and a learner has them in five minutes. A defensible act structure: the second job of a word you own, one of them against some of it, what a quantity does to it, the other du, and prove it.

Do not spend more than one mission on "du is masculine, de la is feminine". That is a1.03's gender skill wearing a third article, and a1.11 already made the same transfer in a single mission and said so on the card.

### The quiz

Six legal `format` values, from `schema.ts`. There are exactly six:

```
mcq | tapSilent | listenChoose | typeIn | speak | errorSpot
```

- **At most half may be `mcq`.** Recognition can be passed by elimination. a1.11 landed at 10 of 25.
- **`errorSpot` is your best format and you should lean on it.** Every one of the four errors is a wrong sentence a learner would produce: `je mange pain`, `beaucoup du café`, `je ne mange pas du pain`, and `je voudrais du café` said when they wanted one cup. a1.11 ran errorSpot at 8 of 25 and it was the right call.
- **A question about `un` against `du` needs the situation in the stem.** Both are correct French, so a bare "which article" has two right answers. The stem has to say whether the learner wants a cup or the substance, and that usually means a clause of context. These are the hardest questions in the lesson to write well; write them first, not last.
- Every question needs a `why` that teaches the rule rather than restating the answer, and a `ref` naming the section that taught it. **a1.04 shipped 3 questions with 0 whys and sits on a waiver list for it. Do not join it.**
- Correct answers must not cluster: the density validator fails any option slot holding more than 40% once there are eight or more closed questions.
- `listenChoose` falls back to speaking the option text, so options must be French. `du` and `de` are a genuine minimal pair in fast speech and so are `du` and `deux`; both make legitimate teaching rather than a gotcha.
- Free text is compared through `fold()`, which strips accents, case, punctuation and **all whitespace**. `du pain` and `dupain` both pass. Verify with `matchesAccept` that every question accepts the answer it displays; a1.11's test does this and it is four lines.
- Each round names `targets`, and **`drillForRound` fires the drill of the first target only and then stops.** Order targets so the drill that fires is the one a failing learner most needs, and make sure every drill you author is the first resolving target of some round. a1.11 went from four rounds to five precisely because a fifth drill would otherwise have been dead content.

### Audio, briefs only

Author every audio spec so the lesson is render-ready, then stop. `Lesson.audio.recorded` entries with real `recordingId`s, section-level specs, and narration in `warm → focus → input → practice → produce → check → cheat` order.

**Do not run `pnpm audio:render`.** It spends real ElevenLabs credits. `CLIP_MANIFEST` is empty by design, so every card falls back to device TTS until the studio delivers; that is the correct shipping state and a `recordingId` resolving to nothing is not a bug. `ELEVENLABS_API_KEY` is not set in `ealch-admin/.env` in any case, and even `--dry-run` exits 1 on the dictée scope for want of `ELEVENLABS_VOICE_AMELIE`.

**Article-specific brief note:** your minimal pairs are `du` against `de` and `un` against `du`. Both are one vowel and both carry the whole meaning. Each pair must be recorded **by the same voice at the same speed in one take**, or the learner is comparing two performances instead of two articles. Write it into the brief, the way `sons.07`'s `rec-h-pairs` and a1.11's `rec-a1-11-pairs` pin their constraints, and add the warning that `du` must not be over-rounded into `deux`.

---

## Wiring

- **`ealch-admin/scripts/author-articles-partitifs-batch.ts`**, modelled on `author-articles-indefinis-batch.ts`, which is the freshest and was written against these gates. Validate everything before touching the database, upsert in one transaction, idempotent by id, `--dry-run` reports without writing. Assert the reframe count against an **explicit constant**, not a figure derived from the lesson: a derived count compares the content to itself and passes on any rewording.
- Add **`content:partitifs`** to `ealch-admin/package.json` beside the other `content:` scripts.
- **`ealch-admin/scripts/merge-articles-partitifs-into-seed.ts`**, modelled on `merge-articles-indefinis-into-seed.ts`, the most guarded. It must **name the lessons it must not disturb rather than counting them**, because a count alone lets a one-for-one swap through. Name `a1.04.l1` and `a1.11.l1` explicitly: one is your prerequisite and the other is the lesson you inherit `des` from.
- If you import ids from `au-restaurant` or `expressions-de-quantite`, the merge must **copy those rows into `seed.json` from Postgres or from an authored manifest**, because neither theme is in the seed cut. Whichever you choose, the source of truth has to be a file in `scripts/data/`, not a live query, or the merge stops being reproducible.
- **Move the `version` counter forward.** The merge script prints "replacing vX with vY", and a rebuild that restarts its own numbering reads as a rollback in the log.

### The publish hazard, which has cost real work twice

`seed.json` and Postgres are two copies and they drift. `content:publish` regenerates the seed **from the database**, so publishing before applying the batch silently deletes the lesson from the seed. `sons.07.l1` was written to the seed, erased by someone else's publish, and survived only because its source files were intact.

Order: **apply to Postgres first, merge into the seed second, publish only when both agree.**

`pnpm content:parity` answers the question directly. **It currently exits 1**, for reasons that predate you and that you should not try to fix. As of 2026-08-05, after a1.11 landed:

```
✗ SEED ONLY  sons.09.l1   23 sections, 78 items, and a publish would DELETE it
! DB ONLY    b2.01.l1     in_review, so no learner has it
✗ DRIFT      sons.08.l1   the database is a version ahead of the seed
```

So **you cannot publish**, and that is fine: applying and merging is the whole job.

### The cross-lesson hazard a1.11 discovered the hard way

**Adding items to the shared corpus can break another lesson's measured claim.** a1.11 added two feminine nouns ending in `-e` and moved a1.03's measured `-e` statistic from 871 to 873. That figure is printed on two a1.03 cards and re-measured from the seed by `a1-03-genre.test.ts` on every run, so the suite went red on a lesson nobody had touched. The fix was one number plus a version bump plus re-running a1.03's own batch and merge.

Your risk is the same and slightly wider, because `gender.logic.ts` measures endings across the whole corpus and you may be adding food nouns. **Run the full suite after your merge, not just your own test**, and if you move somebody else's number, correct it at the source and re-apply that lesson rather than editing its test.

---

## The gates: you are not done until all of these pass

```bash
cd ealch-v2
npx tsc --noEmit
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
```

**1,124 tests pass today (2026-08-05, after a1.11 landed). Yours must not reduce that.** Use `node --test`, the command in `package.json`. Running through `npx tsx --test` reports failures in `i18n.test.ts` and `content.logic.test.ts` that do not reproduce under the real runner and are not regressions; do not chase them.

`npx tsc --noEmit` in **`ealch-v2` must be 0**. In `ealch-admin` it reports **5 pre-existing errors** in `elision-lesson.ts` and `masterclass-lesson.ts` (a `SoundGroup` missing `items`). Not yours; do not add a sixth. If you author a `groupDrill` control page, give it `items: []` explicitly, which is what keeps a1.11 out of that list.

`lesson-contract.test.ts` runs over every lesson and will fail, naming your lesson and mission number, if a `practiceOn` / `itemIds` / `sheetId` / `terms` id does not resolve, a quiz question or control check has no `why`, an act names a missing section or two acts claim one, a quiz `ref` names a section not in the lesson, a section renders empty, a sub-dividing section does not own its layout, an authored quiz question is unreachable, or a reading glossary is authored where nothing renders it.

Also write **`ealch-v2/src/content/a1-29-partitifs.test.ts`**, modelled on `a1-11-indefinis.test.ts` (closest in shape, 35 assertions, written two days ago) and `sons-07-elision.test.ts` (most thorough):

- your spine in order, and your act structure
- your reframe, verbatim, the exact number of times you authored it, **derived** by comparing the seed count to the source count rather than hardcoded
- **`du`, `de la` and `de l'` are each taught and each tested**, so a later edit cannot drop `de l'`, which is the one most likely to go
- **the countable/uncountable choice is demonstrated on one noun**, not asserted. Find a section that shows the same noun with `un` and with `du` and says what changed. This is the assertion that stops the lesson decaying into a three-cell table, and it is worth the most; write it against the section text rather than against a count
- **all four English-speaker errors are covered**: the deleted article, `un` against `du`, quantity words taking bare `de`, and negation giving `de`. Each present in a taught section and in a quiz question
- **the `de + le` disambiguation is taught**, and no card that teaches the partitive uses a prepositional or genitive `du` as its example. This is the one your corpus will fight you on; write it against the examples the teaching sections name
- **no metalinguistic corpus item is used as a learner sentence**, given the trap above, and assert all three ids
- tranches release only items already taught, once each
- no duplicate headword within a theme, computed the way `flashhub-coverage.test.ts` computes it, and no dead corpus entry
- **every inlined respelling follows the nasal convention.** Import `hasPlainNasalFor` from `density.logic.ts` rather than writing your own check
- **every dictation item lands in word mode.** Import `dicteeMode` and assert it, because a letter-mode dictée on these sentences is a spelling exercise rather than an article one
- the exam is at most half `mcq`, **every question has a `why` and a `ref`**, and every free-text question accepts the answer it displays, checked through the real `matchesAccept`
- every drill is the first resolving target of some round, so none is dead content
- every reading glossary entry underlines a word that is really there, checked through the real `segmentSentence`
- seed parity that **derives** every figure from the authored source rather than hardcoding counts

**Do not reimplement app logic inside a test.** An earlier version of a1.01's test inlined its own copy of the glossary lookup, which made it a second implementation free to drift from the renderer, and it had copied the version that was already broken, so it passed while the feature was dead. Import the real function. If the logic lives in a `.tsx` the runner cannot import, that is the signal to extract it to a `.logic.ts`, which is why `dictee.logic.ts` and `gloss.logic.ts` exist.

A hardcoded count fails on itself the first time content legitimately changes, and the fix is then to edit the test, which is how a test comes to certify a bug.

**Mutation-test your own file before you claim it works.** a1.11's was proven by gutting the passage, breaking the partitive boundary and deleting a trap, and checking each one turned it red. A test that has never failed has never been tested.

---

## Verify on a device before you claim it works

The suite passing is necessary and not sufficient. Four failure classes are invisible to tests and obvious in ten seconds on a phone: a card sized by guessing that runs past the bottom and takes its buttons with it; a field authored, schema-valid and rendered by nothing; a gesture that silently stops meaning anything; and chrome repeated on one screen.

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
  ealch://missions?key=a1.29.l1     the mission list, which lands directly on any mission
  ealch://lesson?key=a1.29.l1       the lesson from the top
  ```
  The `at=` parameter on `/lesson` does **not** jump to a mission; do not rely on it.
- A resume interstitial ("Pick up where you left off") sits in front of the lesson whenever there is progress and swallows the first tap. It names the act you were in, which is a useful check in itself.
- **Taps on the pager's Back/Next frequently do not register.** Horizontal **swipes** do: left to advance, right to go back.
- **Deck sections eat horizontal swipes** (they move the deck, not the page), so swiping through a lesson drifts. Do not count swipes and assume a mission number; read it off the header.
- The soft keyboard's autocorrect will rewrite French words you type into a free-text quiz field. Type the word, do not press space after it, and dismiss the keyboard with the chevron rather than committing the suggestion.
- **Check the reading passage specifically.** Its glossary underlines are the thing most likely to be silently missing, and they are invisible to every test except the one that calls the real matcher.

Verify at minimum: the scene end to end including the choice and the break, the mission that contrasts `un` with `du`, the reading passage with a gloss tap, the `commonErrors` deck, and the quiz through one mcq and one free-text question. Say which ones and by what route.

---

## Known debt: do not copy these

- **`a1.04.l1`, your prerequisite**, is six sections long, the weakest in the app, and ships quiz questions with no `why`. It sits on a waiver list in `lesson-contract.test.ts` with `sons.02`, `sons.03` and `a2.01`; the list can only shrink. Do not add yourself to it, and do not model anything on it. Its unfinished rebuild on disk is not your job.
- Seven sons.06 sections declare more than 3 term chips.
- sons.06 missions 20 and 23 are both `practice` doing the same job. Merge or differentiate sharply.
- `TapRow.say`, `TapRow.detail.say` and `flashcards cards[].say` are device-TTS only and cannot hold a rendered clip: only a section has an `audioRef`.
- 21 of the corpus rows a1.11 reuses respell `un` as `uhn`, which fails the nasal convention. Left alone deliberately; do not copy a respelling out of the corpus without checking it.

**`a1.11.l1` is the reference**, `a1.03.l1` is the model for a grammar lesson at this level, and `a1.01.l1` is the reference for tone.

## House rules

- **No em dashes anywhere.** Enforced by test.
- **No "honest"/"honesty"** in authored content. Enforced by test, and it catches "honestly" too.
- **English UI chrome, French content.** A French UI label is untranslatable and lands beside English on the same card. The existing guard only reads component source, so an authored French label passes CI and reaches the screen. `frSub` is the one field that is deliberately French, and every mission needs one.
- **Instruction and context are English, even inside French content.** Paul's rule, 2026-08-04: in an A1 passage, anything not inside `« »` is English. The learner's effort belongs on the exchange, not on decoding stage directions.
- **No grammar vocabulary in learner copy.** a1.11 bans « article défini », « article indéfini », « partitif », « masculin » and « féminin » from its sections and terms, and asserts it. You inherit that: a learner arriving from a1.03 and a1.04 has never been given those labels and cannot cash them. Teach the behaviour plainly. `grammarIntroduced` is addressed to the curriculum and is better for using the precise words.
- `*.md` is gitignored here; a doc you write needs `git add -f`.

---

## What to report when you finish

- **what you did about the empty `nourriture` binding**, which of the three options you took, and why
- the reframe you chose, and why that one rather than a newness reframe
- **how you separated the partitive `du` from the `de + le` that is four fifths of the corpus**, and which mission carries it
- where each of the four English-speaker errors is taught and tested
- **how you handed `des` over from a1.11**, and confirmation that you did not simply re-teach it
- **what you did about the prereq inconsistency**: your lesson leans on a1.11 and your prereq names only a1.04
- corpus: how many items reused, how many imported from themes outside the seed cut and by what mechanism, how many authored and why, and how many respellings you wrote rather than took from the corpus
- lesson: mission count, act structure, quiz size and format mix, the `errorSpot` share, and confirmation that **every question has a `why` and a `ref`**
- **whether your corpus additions moved a measured figure in another lesson**, and what you did about it
- test count before and after, and confirmation that you mutation-tested your own file
- which missions you verified on the device, with screenshots, and by what route you reached them
- **anything you could not verify, said plainly.** A gap you name costs an hour. A gap you paper over costs a session, and this project has lost two that way. If a claim in this file has gone stale, say so rather than working around it; three facts in the first numbers prompt had rotted within a week, and this file's own predecessor shipped a test count that was 188 short.

Do not use AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the big one", "listen to the trap", "get those two right", "this is the part that pays", "here is the catch", and anything of that register.
