# Build a1.23 "Food Vocabulary"

You are authoring an A1 lesson in Ealch, end to end. Not drafting content for review: authoring it, wiring it, proving it, and leaving it render-ready.

You have latitude on the teaching. You have none on the gates.

**Read first, in this order:**

1. **`ealch-admin/A1-BUILD-INVARIANTS.md`.** The gates, the layout traps, the wiring pattern, the respelling convention and its blind spots, the quiz rules, the house rules. Everything that does not change between lessons lives there and is not repeated here.
2. `ealch-admin/A1-LESSON-GENERATION-PROMPT.md` **Part 1**, the A1 doctrine: why an A1 lesson is not a sons lesson with different words, the register of stakes, the voice.
3. **a1.22 "Pays & nationalités"**, in `ealch-admin/scripts/data/pays-*.ts`. Newest lesson to ship and your quality bar. **Read `pays-corpus.ts`'s header before anything else**: it opens with "THE PROBE RAN. SIX OF THE BRIEF'S CLAIMS ARE WRONG" and shows exactly what an author does when a brief misleads them. Yours will mislead you too, in places this file cannot predict.
4. **a1.29 "Les articles partitifs"**, in `scripts/data/articles-partitifs-*.ts`, because it is your direct prerequisite, it declares **your** best theme, and it already owns the grammar a food lesson reaches for by reflex. This is the single most important file in the list after the invariants.
5. **a1.11 "Les articles indéfinis"** and **a1.04 "The Definite Articles"**, because between them and a1.29 every article a food word can take is already taught. You are teaching none of them.

---

## VERIFIED STATE

> Measured **2026-08-07** against Postgres (`aws-0-ca-central-1.pooler.supabase.com:6543/postgres`,
> 27,353 published sentences) **and** `seed.json` v19 (7,818 items, 36 lessons).
> Every number below carries both. **Re-run before you start**, because this track
> moves weekly:
>
> ```bash
> cd ealch-admin
> pnpm corpus:probe --unit a1.23 --theme nourriture,cuisine,marche,au-restaurant,cafe \
>   --words "pain,fromage,pomme,banane,orange,poulet,poisson,viande,riz,lait,beurre,sucre,sel,café,thé,bière,gâteau,crème,bœuf,pâtes,œuf,légume,pizza,céréales,faim,soif" \
>   --tokens "je mange,j'aime,je voudrais,j'ai faim"
> ```
>
> If anything below disagrees with what the probe prints, **the probe wins and
> the disagreement goes in your report.**

```
a1.23  Food Vocabulary   seq 26
  sub:    "La nourriture"
  canDo:  "Can name everyday food and say what they like and eat"
  themes: ["nourriture"]        DEAD. 0 rows in Postgres, 0 in the seed. See below.
  lessonIds: []                 you are filling this
  prereqUnitIds: ["a1.29"]      a1.29 ships. It owns du / de la / des.
```

Do not change `title`, `sub` or `canDo`. All three are correct and the Den advertises them.

`sub` and `canDo` are copied byte-for-byte from the probe's unit dump. Neither carries a curly apostrophe or any other character that survives a retype badly. `sub` is `La nourriture`, plain ASCII plus one space.

### The track

```
a1.01  seq  1  Greetings                    ships
a1.02  seq  2  Numbers 1 to 20              ships
a1.27  seq  3  Numbers 21 to 100            ships
a1.28  seq  4  Large Numbers                ships
a1.03  seq  5  Noun Gender                  ships
a1.04  seq  6  The Definite Articles        ships
a1.11  seq  7  The Indefinite Articles      ships
a1.29  seq  8  The Partitive Articles       ships   <- your prerequisite
a1.05  seq  9  Subject Pronouns             ships
a1.06  seq 10  The Verb Être                ships
a1.07  seq 11  The Verb Avoir               ships
a1.08  seq 12  Days of the Week             ships
a1.09  seq 13  Months of the Year           ships
a1.10  seq 14  Seasons and Weather          ships
a1.12  seq 15  Telling Time                 ships
a1.13  seq 16  Colors                       ships
a1.14  seq 17  Basic Adjectives             ships
a1.16  seq 18  Adjective Placement          ships
a1.15  seq 19  Family Vocabulary            ships
a1.17  seq 20  Possessive Adjectives        ships
a1.18  seq 21  Negation                     ships
a1.19  seq 22  Yes/No Questions             ships
a1.20  seq 23  Question Words               ships
a1.21  seq 24  Prepositions of Place        ships
a1.22  seq 25  Countries and Nationalities  ships   <- newest, your quality bar
a1.23  seq 26  Food Vocabulary              YOU
a1.24  seq 27  The Body                     empty
a1.25  seq 28  Daily Routine                empty
a1.26  seq 29  The House                    empty
a1.30  seq 30  A1 Review                    empty, and gates on YOU
```

**25 A1 lessons ship.** Nothing else is in flight in `cuisine` or `marche` as of the measurement. Confirm that yourself: another author landing in `cuisine` while you work will take ids below your top and a highest-id check will not see it. Watch the row count, not the maximum.

`a1.30 "A1 Review"` names `a1.23` in its `prereqUnitIds`. Your lesson unblocks the band's capstone, so a half-built a1.23 is a gate that never opens.

Your models, verified in the seed:

```
a1.22.l1  28 sections   6 acts   26 quiz questions   mcq 12 / typeIn 7 / errorSpot 3 / speak 2 / listenChoose 2
a1.20.l1  27 sections   6 acts   26 quiz questions   mcq 12 / typeIn 5 / errorSpot 5 / speak 2 / listenChoose 2
a1.15.l1  26 sections   6 acts   24 quiz questions   the closest shape: a pure vocabulary set, taught by category
a1.29.l1  23 sections   5 acts   25 quiz questions   your prerequisite, and the lesson you must not repeat
```

---

## THE BRIEF YOU WERE GIVEN SAYS "60 ESSENTIAL FOOD WORDS WITH ARTICLES". ALMOST ALL OF THEM ALREADY EXIST, WITH THEIR ARTICLES, IN ONE THEME

This is the loudest section in the file because four briefs in a row died here.

`fr.a1.cuisine` holds **271 published rows, all 271 of them in the seed**. 176 are `kind: 'word'`, 162 of those carry a `gender`, and they are **already stored with their article attached**. The article shape, measured:

```
le   74      la   57      l'   15      les   7
une   6      un    2      other 1
```

The food headwords below were probed bare AND with every article. **Every one of them exists. Do not author them.** `flashhub-coverage.test.ts` treats two rows sharing an `fr` in one theme as one card served twice, so a re-authored `le pain` in `cuisine` is a build failure, not a duplicate.

```
fr.a1.cuisine.002  le pain          fr.a1.cuisine.040  le repas
fr.a1.cuisine.003  une pomme        fr.a1.cuisine.041  manger
fr.a1.cuisine.010  l'eau            fr.a1.cuisine.042  boire
fr.a1.cuisine.011  le fromage       fr.a1.cuisine.047  la poire
fr.a1.cuisine.012  le beurre        fr.a1.cuisine.050  la pêche
fr.a1.cuisine.013  un œuf           fr.a1.cuisine.053  le champignon
fr.a1.cuisine.014  la viande        fr.a1.cuisine.054  le yaourt
fr.a1.cuisine.016  le poisson       fr.a1.cuisine.055  la crème
fr.a1.cuisine.017  le riz           fr.a1.cuisine.056  le lait
fr.a1.cuisine.018  les pâtes        fr.a1.cuisine.057  la farine
fr.a1.cuisine.019  la soupe         fr.a1.cuisine.058  le sucre
fr.a1.cuisine.020  la salade        fr.a1.cuisine.059  l'huile
fr.a1.cuisine.021  une banane       fr.a1.cuisine.061  le miel
fr.a1.cuisine.022  une orange       fr.a1.cuisine.062  le gâteau
fr.a1.cuisine.023  le sel           fr.a1.cuisine.064  le jus
fr.a1.cuisine.024  le poivre        fr.a1.cuisine.066  le goûter
fr.a1.cuisine.030  le légume        fr.a1.cuisine.114  le croissant
fr.a1.cuisine.031  la tomate        fr.a1.cuisine.115  la baguette
fr.a1.cuisine.033  la carotte       fr.a1.cuisine.123  le bœuf
fr.a1.cuisine.034  l'oignon
fr.a1.cuisine.035  la fraise        tableware, NOT food, do not count toward 60:
fr.a1.cuisine.036  le citron          .025 une assiette   .026 une fourchette
fr.a1.cuisine.037  le jambon          .027 un couteau     .028 une cuillère
fr.a1.cuisine.038  la confiture
fr.a1.cuisine.039  la glace
```

That is **44 food headwords in one theme, already articled**. `fr.a1.marche` (195 A1 rows, all in the seed) carries a second copy of roughly twenty of them plus its own. `fr.a1.cafe` adds `un café`, `un thé`, `un croissant`, `une baguette`, `le lait`, `le sucre`, `le goûter`, `un sandwich`.

**Genuinely absent, verified both ways, probed with every article:**

```
pizza        ABSENT everywhere
céréales     ABSENT everywhere
faim         ABSENT everywhere        (needed for « j'ai faim »)
soif         ABSENT everywhere        (needed for « j'ai soif »)
```

**Four words.** That is the entire authoring job on headwords. Everything else is assembly.

### Why the first probe lied to you, and will lie to you again

`probe-corpus.ts` **does not strip accents or normalise ligatures.** The first run of this brief's own probe reported these as "ABSENT in every article form. Safe to author":

```
biere  cafe  the  gateau  creme  boeuf  pates  oeuf  legume
```

Every single one exists. `bière` has 2 rows, `café` has **20**, `thé` has 8, `gâteau` 6, `crème` 3, `bœuf` 1 (`fr.a1.cuisine.123`, with the `œ` ligature), `pâtes` 3, `œuf` 3, `légume` 5.

**Probe with the real orthography, including `œ`.** `boeuf` and `oeuf` spelled with `oe` return ABSENT and are wrong. This is the same class of bug as the `\b`-is-ASCII-only trap in the invariants, and on a food lesson it is not an edge case: accented and ligatured words are most of the word list.

### What this makes a1.23

Not an authoring lesson. **An import, assembly and repair lesson**, like a1.14, which authored 4 words against 44 imported. Your corpus file's job is to declare which existing ids the lesson serves, in what order, under what grouping, and to fix the transcriptions. Expect to author four headwords, some sentences, and nothing else.

One consequence you get for free, and must say out loud in your report: **importing adds nothing to `a1.03`'s ending population.** Only a newly authored row with `gender` set, `kind: 'word'` and no space in its bare noun joins the population that `a1-03-genre.test.ts` re-measures. Your four candidates are the only risk, and two of them (`faim`, `soif`) should probably not be gendered word rows at all. See "If you author items".

---

## The theme, which is the decision this brief cannot make for you

`a1.23` declares `themes: ["nourriture"]`. Measured:

```
nourriture               postgres 0     seed 0      DEAD IN BOTH COPIES
cuisine                  postgres 425   seed 425    fr.a1.cuisine  271 rows, next free .272, no gaps
marche                   postgres 343   seed 343    fr.a1.marche   195 rows, next free .201, gaps 152,153,161,163,197
au-restaurant            postgres 346   seed 10     fr.a1.au-restaurant 216 rows, next free .219, gaps 187,213
cafe                     postgres 341   seed 341
expressions-de-quantite  postgres 521   seed 18     fr.a1.expressions-de-quantite 148 rows, next free .153
```

The unit's declared theme is empty in Postgres, so per the invariants it is dead and should be **dropped or replaced, not populated**.

Two facts make the replacement non-obvious:

- **`cuisine` is already declared by `a1.29`**, your prerequisite. Nothing forbids two units declaring one theme, and the vocab hub keys on the theme rather than the unit, so both units would surface the same 271 cards. Ask whether that is a feature (the learner who finishes partitives finds the food deck waiting) or a duplicate.
- **`nourriture` is also declared by `a2.07 "At the Restaurant"`.** If you populate `nourriture` instead of rebinding, you are filling an A2 unit's vocabulary hub with A1 words, and you would be building a 60-row theme next door to a 271-row theme that already holds the same words. Do not do this without saying so.

**Recommendation, which you may overturn with evidence:** rebind `a1.23.themes` to `["cuisine", "marche"]`. Both are fully inside the seed cut, both are already populated, `marche` is currently declared by **no unit at all** despite holding 343 published rows, and rebinding surfaces those 343 rows in the Den for the first time. Report what you chose.

Report what your choice means for **`a2.07 "At the Restaurant"`**, which today declares `["nourriture", "cafe"]` and would be left with one live theme and one dead one, and for **`a1.30 "A1 Review"`**, which gates on you.

### The seed cut, and the one wiring trap on this lesson

`ealch-admin/scripts/seed-cut.config.ts`, read today:

```
tracks: ['sons', 'a1', 'a2']
themes: cafe, objets, dictee, marche, salutations, nombres, transport,
        cuisine, ecole, deplacements, metiers, corps, maison, animaux,
        routines, famille, sports-et-loisirs
```

**`cuisine`, `marche` and `cafe` are all in the cut.** Their rows ship in the binary in full, which is why the probe shows 425/425 and 343/343.

**`au-restaurant` and `expressions-de-quantite` are NOT.** They show 346/10 and 521/18. Those seed rows are there only because a1.29 references 9 au-restaurant ids and 18 expressions-de-quantite ids, and publish pulls lesson-referenced items into the cut.

So the rule for you:

- An `au-restaurant` id **named by your lesson** will reach the seed. It is safe in a `deckTranche`.
- The other 336 `au-restaurant` rows will **not** be in the binary, so they never appear in the offline theme hub. Do not tell the learner "there is more in the market theme" and point at a theme that is empty on a fresh install.
- Prefer `cuisine`, `marche` and `cafe` ids. They are in the cut, they are already proven present, and they cost you nothing.

`le vin`, `la bière` and `les frites` exist **only** outside `cuisine`: `fr.a1.au-restaurant.007`, `.008` and `.069`. If your 60 needs them, reference those ids rather than authoring copies into `cuisine`.

### What a1.29 already owns, so you do not re-release it

a1.29 names **81 ids**. Twenty-one of them are yours by theme:

```
fr.a1.cuisine.003 .004 .007 .189 .195 .199 .214 .220 .227 .240 .242
fr.a1.cuisine.262 .263 .264 .265 .266 .267 .268 .269 .270 .271
```

`.262` through `.271` are its partitive rows (`du pain`, `du lait`, `du café` and so on) and `.003` is `une pomme`. Sharing an id across two lessons is legal, and a1.11 already shares `fr.a1.cuisine.003` with a1.29. But a tranche of yours that re-releases a1.29's partitive block is a review deck wearing a food lesson's clothes. Name what you release and why.

---

## The teaching problem

Every article a food word can take is already taught. a1.03 gave the learner gender. a1.04 gave `le / la / les`. a1.11 gave `un / une / des`. a1.29, immediately upstream, gave `du / de la / des` and shipped the reframe "Un is one of them. Du is some of it." A food lesson that teaches articles is the fifth lesson in a row teaching articles, and the learner will read it as the app running out of ideas.

What is genuinely unowned sits in the second half of your own canDo.

### The canDo has two clauses and they are not equal

```
"Can name everyday food"                    the deck. Necessary, and not the lesson.
"and say what they like and eat"            THE LESSON. Nobody has taught this.
```

The contrast the learner has no way to derive, and that no shipped lesson covers:

```
                  what you like                 what you are eating
                  the whole category            some of it, right now

  aimer           J'aime le pain.               ...
  adorer          J'adore le fromage.
  détester        Je déteste le poisson.

  manger          ...                           Je mange du pain.
  boire                                         Je bois du café.
  prendre                                       Je prends de la soupe.
```

`J'aime du pain` is wrong. `Je mange le pain` is a different sentence about a specific loaf. The learner who has just finished a1.29 has been told for a whole lesson that uncounted food takes `du`, and will apply it to `aimer` on the first try. **That is the trap, it is created by the lesson immediately before yours, and it is yours to defuse.**

> **The reframe: "Aimer takes the whole thing. Manger takes a part of it."**
>
> It is a choice the learner makes inside a real sentence, it is true across every
> verb in both columns rather than one section, and it is verifiable tomorrow at a
> table. Carry it verbatim across at least three sections. a1.01 uses eight, a1.09
> eight, a1.22 one per act.
>
> **Rejected, and why, so the next author does not re-litigate:**
> - *"Learn the food with its article."* This is a1.22's reframe almost word for word ("Learn the country with its article. Everything else follows.") and it is already true of the corpus, which stores every noun articled. It restates the storage format, not a decision.
> - *"Du is some of it."* This is a1.29's reframe. Repeating your prerequisite's reframe is how two lessons become one.
> - *"French names food by gender."* A rule about the language, not a choice the learner makes. It is a `term`, not a reframe.

### What the learner arrives with

- **a1.03 Noun Gender** and **a1.04 The Definite Articles** give them `le / la / l'`. Every one of your 60 cards is stored in exactly that shape.
- **a1.29 The Partitive Articles** gives them `du / de la / des`, and gives them the habit that breaks `aimer`.
- **a1.07 Avoir** gives them `j'ai`, which is what `j'ai faim` and `j'ai soif` are built on.
- **a1.18 Negation** gives them `ne ... pas`, and with it `je ne mange pas de viande`, where the partitive collapses to `de`. a1.29 taught that collapse. You may use it; you may not re-teach it.

**a1.04's `le` transfers exactly** into `J'aime le pain`. Name it as a rule they already have rather than teaching it cold: the definite article they learned for "the bread" is the same word that means "bread in general".

**a1.29's `du` is where that rule stops.** After `aimer`, `adorer`, `détester` and `préférer`, the partitive they just spent a lesson on is wrong. Say so out loud, by name, with a1.29 named. A contradiction a learner discovers alone is a language they decide is arbitrary.

### The three other things worth naming

- **The article is not a hint about the food, it is part of the word.** The corpus proves it: `le lait` and `la crème` sit in the same fridge and take different articles. This is a1.03's rule, restated on a set where guessing feels tempting because the objects are familiar.
- **`l'` hides the gender.** `l'eau` is feminine, `l'oignon` is masculine, `l'huile` is feminine, and the card shows neither. The corpus carries `gender` on all four (`fr.a1.cuisine.010` f, `.034` m, `.059` f). These are the cards a learner gets wrong a month later, and they deserve their own screen rather than being scattered through the deck.
- **Plural-only food.** `les pâtes` (`fr.a1.cuisine.018`) and `les frites` (`fr.a1.au-restaurant.069`) have no singular in normal use. Two items is a card, not a round. Show them; do not build a section on them.

### What is deliberately left to its neighbours

- **The partitive rule itself** is `a1.29`. The temptation is total, because `je mange du pain` is the most natural sentence in the lesson. **Allowed as context:** partitive sentences on reading and listening surfaces, and in the scene. **Not allowed as teaching:** no section whose job is to explain when to use `du` versus `de la` versus `des`, no drill that asks the learner to choose between them, no quiz round on the partitive form alone. Scope any guard you write to production surfaces (decks, vocab, drills, quiz stems), not to every string, or it will fire on legitimate context and the next author will delete it.
- **Ordering in a restaurant** is `a2.07`. `je voudrais` may appear in the scene. `l'addition`, `le serveur`, `le plat du jour` and the ordering script may not be taught.
- **Quantities** (`un kilo de`, `une bouteille de`, `beaucoup de`) live in `expressions-de-quantite`, which a1.29 already draws on. Out of scope entirely.
- **Meals as a daily rhythm** (`le petit déjeuner`, `le déjeuner`, `le dîner`) is `a1.25 Daily Routine`, which is empty and declares `routines`. Note that `fr.a1.routines.027 le petit déjeuner`, `.016 déjeuner` and `.017 dîner` already exist there. You may name a meal to place a sentence in time. Do not build the meal set as a taught group; a1.25 needs it.

---

## The corpus

### What exists, measured both ways

```
theme                     pg     seed    in cut    a1 rows   next free id
nourriture                 0        0      n/a          0    n/a (dead)
cuisine                  425      425      yes        271    fr.a1.cuisine.272
marche                   343      343      yes        195    fr.a1.marche.201
cafe                     341      341      yes          -    (not counted; check before use)
au-restaurant            346       10       no        216    fr.a1.au-restaurant.219
expressions-de-quantite  521       18       no        148    fr.a1.expressions-de-quantite.153
```

`fr.a1.cuisine` has **no gaps**. `fr.a1.marche` has gaps at 152, 153, 161, 163, 197. Do not fill gaps; ids are the SRS key and a reused id inherits another card's history.

### Sentence evidence

```
"je mange"           pg 8    seed 2    fr.a1.cuisine.007 "Je mange du pain."
                                       fr.a1.cuisine.168 "Je mange une pomme après le déjeuner."
"j'aime"             pg 56   seed 13   fr.a1.marche.005 "J'aime acheter du fromage au marché."
"je voudrais"        pg 55   seed 13   fr.a1.cafe.027 "Je voudrais un thé, s'il vous plaît."
"tu manges"          pg 10   seed 3    fr.a1.questions.090 "Qu'est-ce que tu manges au petit-déjeuner ?"
"j'ai faim"          pg 3    seed 3    fr.a1.famille.227 "J'ai faim."
```

`fr.a1.cuisine` holds **86 sentences** and `fr.a1.marche` holds **101**, all in the seed. That is a large body of production evidence you did not have to write.

**Check this before you build the contrast round.** `j'aime` returns 56 rows in Postgres, but the sample above is `j'aime acheter`, an infinitive rather than a food noun. Enumerate the real `aimer + le/la/les + food` sentences before you claim the corpus models the contrast. If it does not, that is your authoring job on sentences, and it is the part of this lesson worth spending words on.

### The respelling repair list

The probe found competing respellings on nearly every headword. These are visible to the learner in the flashcard hub, where one word shows two transcriptions.

**Repair, because each breaks the stated nasal rule** (a nasal vowel must close with the superscript `ⁿ`, not a plain `n` or `m`):

```
fr.a1.cuisine.002    le pain          luh PAN             -> luh PAⁿ
                     (cuisine.265 already ships "dü PAⁿ" in the same theme)
fr.a1.cuisine.016    le poisson       luh pwah-SOHN       -> luh pwah-SOHⁿ
fr.a1.cuisine.034    l'oignon         loh-NYOHN           -> loh-NYOHⁿ
fr.a1.cuisine.053    le champignon    luh shahn-pee-NYOHN -> luh shahⁿ-pee-NYOHⁿ   (BOTH nasals)
fr.a1.cuisine.036    le citron        luh see-TROHN       -> luh see-TROHⁿ
fr.a1.cuisine.037    le jambon        luh zhahn-BOHN      -> luh zhahⁿ-BOHⁿ        (BOTH nasals)
fr.a1.cuisine.038    la confiture     lah kohn-fee-TÜR    -> lah kohⁿ-fee-TÜR
fr.a1.cuisine.114    le croissant     LUH krwah-SAHN      -> luh krwah-SAHⁿ        (also fix the shouted LUH)
fr.a1.cuisine.021    une banane       ün bah-NAHN         -> ün bah-NAHN is WRONG for a different reason, see below
fr.a1.cuisine.013    un œuf           uhn UHF             -> uhⁿ UHF
fr.a1.cuisine.041    manger           mahn-ZHAY           -> mahⁿ-ZHAY  (sons.muettes.037 already ships this)
fr.a1.cafe.009       un café          uhn kah-FAY         -> uhⁿ kah-FAY
fr.a1.cafe.010       un thé           uhn TAY             -> uhⁿ TAY
fr.a1.marche.061     l'oignon         lo-NYOHN            -> loh-NYOHⁿ  (also aligns the vowel with cuisine)
fr.a1.marche.073     le jambon        luh jahn-BOHN       -> luh zhahⁿ-BOHⁿ  (the j/zh is a second defect)
```

**Repair, because the transcription is shouted mid-phrase.** The house convention caps the phrase-final stress only. These carry a capitalised article, which tells the learner to stress `le`:

```
fr.a1.cuisine.114    LUH krwah-SAHN   -> luh ...
fr.a1.cuisine.115    LAH bah-GEHT     -> lah bah-GEHT
fr.a1.cuisine.123    LUH BUHF         -> luh BUHF
```

**Repair, because one word shows two vowels across two themes the learner browses side by side:**

```
tomate     cuisine.031 lah toh-MAHT   vs  marche.057 lah toh-MAT
carotte    cuisine.033 lah kah-ROT    vs  marche.058 lah kah-ROT    (aligned; a2 has kah-RUT, out of scope)
salade     cuisine.020 lah sah-LAHD   vs  marche.059 lah sah-LAD
poire      cuisine.047 lah PWAHR      vs  marche.046 lah PWAR
pêche      cuisine.050 lah PEHSH      vs  marche.052 lah PESH
miel       cuisine.061 luh MYEHL      vs  marche.079 luh MYEL
banane     cuisine.021 ün bah-NAHN    vs  marche.047 lah bah-NAN
fromage    cuisine.011 luh froh-MAHZH vs  marche.074 luh fro-MAJ    (the MAJ is also just wrong)
baguette   cuisine.115 LAH bah-GEHT   vs  marche.078 lah bah-GET
```

Pick one form per word and say which you picked. A variant that merely differs in a theme the learner will never see beside this one is not a violation; `cuisine` and `marche` are both in your unit under the recommended rebinding, so these nine are.

### DO NOT "REPAIR" THESE. The checker is wrong about them.

Per §3 of the invariants, `hasPlainNasalFor` false-positives on a real `/n/` or `/m/` after a vowel. The probe flagged all of these and **every one is correctly transcribed today**:

```
fr.a1.cuisine.055    la crème     lah KREHM     REAL /m/. crème is /kʁɛm/, not a nasal vowel.
fr.a1.cuisine.021    banane       bah-NAHN      the final N is a REAL /n/. Only the FIRST syllable is at issue,
                                                and it is not nasal either. Leave the final N alone.
fr.a1.cafe.054       un sandwich  sahnd-WEETCH  WORD-INTERNAL nasal the checker cannot see at all.
                                                sahⁿd-WEETCH is the correct form. Verify by hand.
fr.a1.cuisine.014    la viande    lah VYAHND    WORD-INTERNAL. Correct form is lah VYAHⁿD.
                                                The checker passes the wrong one and cannot see the right one.
fr.a1.cuisine.022    une orange   ün oh-RAHNZH  WORD-INTERNAL. Correct form is ün oh-RAHⁿZH,
                                                which sons.consonnes.055 and sons.couleurs.009 already ship.
```

**Assert `crème` and the final `-N` of `banane` by name in your test**, so the next author's "fix" goes red instead of shipping. This is the assertion worth the most in the whole file and it is the one people skip.

### If you author items

You should be authoring four headwords and some sentences. For those four:

- ids continue **`fr.a1.cuisine`** from **`.272`**, which the probe prints as NEXT FREE and which has no gaps. Never renumber.
- **Store the headword articled, matching the theme's overwhelming majority: `le` / `la` / `l'` / `les`.** 146 of the 162 gendered word rows are in that shape; the 8 `un`/`une` rows (`.003 une pomme`, `.013 un œuf`, `.021 une banane`, `.022 une orange`, plus the four tableware rows) are the minority and are the ones a1.11 borrowed for indefinite-article teaching. Do not add to the minority.
- **`pizza`** and **`céréales`**: `la pizza` and `les céréales`. `la pizza` is a gendered single-word noun and **joins a1.03's ending population**; `-a` is not a common French ending and one row can move a printed figure. Run it through the real `endingPopulation` before you commit, and withdraw rather than argue. `les céréales` is plural and should carry `gender: 'f'` with a plural `fr`; check how `fr.a1.cuisine.018 les pâtes` is stored and match it exactly.
- **`faim`** and **`soif`**: do **not** author these as gendered single-word nouns. The learner never says `la faim`. Author `avoir faim` and `avoir soif` as phrases, or author the sentences `J'ai faim.` and `J'ai soif.` directly. A phrase with a space in it is not in the ending population and costs a1.03 nothing. Note `fr.a1.famille.227 "J'ai faim."` already exists as a sentence with a full drill set, so you may simply reference it.
- **No two non-sentence items in one theme may share an `fr`**, compared with the article stripped. Before adding `la pizza` to `cuisine`, confirm no `pizza` row exists in `cuisine` under any article. The probe says none exists anywhere; re-confirm at authoring time.
- every item must be reachable: named by a section, or released by a `deckTranche` and carrying a `flashcard` drill.
- `practice` with `skill: 'speak'` needs `voiceflash` on every item it names; `dictation` needs `dictation`. **Check against Postgres, not the seed.** Most `fr.a1.cuisine` rows carry `flashcard/voiceflash` and **no `dictation`**, so a dictation section naming them will render nothing. `fr.sons.elision.013 l'eau` and `fr.sons.consonnes.073 citron` do carry `dictation`. Enumerate before you wire.

---

## Designing this for a learner, on a phone

Layout rules are in `A1-BUILD-INVARIANTS.md` §2. What is specific to this lesson:

- **Sixty cards is the design problem.** A single deck of 60 is a scroll, not a lesson. Split by category into decks of six to eight: fruits, légumes, viande et poisson, pain et laitier, boissons, épicerie. Six named decks of ten is worse than eight decks of seven; the learner counts what is left. a1.15 solved the same problem for family and is your closest structural model.
- **The `aimer` / `manger` contrast is a PAIR, so give it two columns on one screen.** A `tapTable` with `J'aime le fromage` beside `Je mange du fromage`, same noun, both verbs, one screen. Separating them across two sections destroys the teaching, because the whole point is that the same food takes two different words depending on the verb in front of it. **This is the layout the test must assert.**
- **The `l'` group is a sorting problem, so make it a sort.** `l'eau`, `l'oignon`, `l'huile`, plus a masculine and a feminine decoy, with the gender revealed on tap. A `groupDrill` or `tapTable`, not a card deck: the learner has to commit before seeing the answer or they learn nothing.
- **A reference sheet** with the six categories and their articles, the `l'` list with genders spelled out, and the `aimer` / `manger` pair. It is what a learner returns to during `a1.25 Daily Routine` and `a2.07 At the Restaurant`. Wire the `sheetId` early.
- **Check which section types the sheet renderer actually draws before you fill it.** A `cheatSheet` nested inside a reference sheet renders its title and nothing else; `a1.13` ships that defect today. Verify against the renderer, not the schema, and pick a type that draws.
- **Do not invent food photography.** No component draws a hero image for a food card, `lesson-contract.test.ts` does not check `imageRef`, and an authored field no component reads renders nothing at all. If you want the deck to feel like food, that is the respelling and the audio, not an image slot.

### The scene

The failure this lesson prevents: a learner is handed a menu or a market stall, knows every word on it, and still cannot say what they want, because naming a food and choosing a food are different acts.

Two candidates:

- **A dinner invitation.** The host asks what the learner likes. They answer `j'aime du poulet`, having just finished a1.29. The host hears a half-sentence, decides the learner is struggling, and switches to English for the rest of the evening. Nobody is corrected. The plan (a French evening) simply does not happen.
- **A market stall.** The learner points and the vendor bags it. Nothing goes wrong, so there is no scene.

**The first is sharper**, because the words are all correct and the interaction still goes wrong, and because the error is one the previous lesson taught them. Nobody is angry and nobody is corrected; the evening just switches language.

Extract beats to a named `SCENE_BEATS` const, give every beat its own `size` (prose at `md`, the choice and the break at `lg`) and its own `audio`, and keep the break body between 24 and 40 words. The natural choice beat is the moment the learner picks between `j'aime le poulet` and `j'aime du poulet`.

---

## Shape

v2 lesson: `acts`, a stable `id` on every section, `reframe`, `deckTranche`, `terms`, `errorTriggers`, `drills`, round-based quiz. Follow the v2 spine in `ealch-admin/LESSON-GENERATION-PROMPT.md`.

Recent lessons run 23 to 28 sections across 5 or 6 acts. **26 to 30 is your range, and the weight belongs on the `aimer` / `manger` contrast and on production, not on the word list.** Sixty cards across six decks is six sections and it is correct that it is only six. Do not stretch the naming half because the deck looks like the point; it is the half the learner needs least help with.

```
act 1  You already know how to say it       the article is part of the word, l' hides the gender
act 2  The six shelves                      the six category decks, plus the plural-only pair
act 3  What you like                        aimer / adorer / détester + le / la / les
act 4  What you are eating                  manger / boire + du / de la / des, named as a1.29's rule, not retaught
act 5  At the table                         production: the pair on one screen, dictation, speak, scenario
act 6  Prove it                             quiz and roundup
```

Acts 3 and 4 exist as a pair on purpose, and act 5 is where they meet on one screen. If you merge 3 and 4 you have a section, not a lesson.

### Quiz notes specific to this lesson

General rules, including the `fold()` limits, the mcq ceiling, the 40% answer-slot cap and the drill-reachability trap, are in `A1-BUILD-INVARIANTS.md` §4. Target 24 to 26 questions across 5 or 6 rounds, matching a1.20 and a1.22.

- **Every question about the article needs a verb in the stem.** "Which article goes with `pain`?" has four defensible answers. "You are telling someone that bread, in general, is something you like. `J'____ pain.`" has exactly one.
- **`mcq` is your strongest format here** and it is the only one that can test the `aimer` / `manger` split cleanly, because the choice is between two function words and free text would accept either through `fold()`. Use it for `J'aime ___ fromage` and `Je mange ___ fromage` as adjacent questions with the same noun.
- **`listenChoose` has one job in this lesson: the `l'` words.** `l'eau`, `l'oignon`, `l'huile` all hide their gender in writing, and the ear gets no help either, which is exactly the point worth hearing. **Do not use it for `le` versus `la`**; that contrast is trivially audible and the question certifies nothing.
- **`errorSpot` cannot test what it looks like it tests here.** It runs the same `matchesAccept` and `fold()` path as `typeIn`. `fold()` strips accents, so it cannot distinguish `pêche` from `peche`, and it strips all whitespace, so `du pain` and `dupain` are the same answer. It **does** keep a final `-e` and `-s`, so `les pâtes` versus `le pâte` is genuinely testable. Use it there and nowhere near an accent.
- **No format can test a capital letter except `mcq`.** Not relevant to food, and stated so you do not rediscover it.
- **Each round names `targets`, and `drillForRound` fires the drill of the FIRST resolving target only, then stops.** Make each teaching drill the first resolving target of exactly one round, and assert it. a1.05 shipped two dead drills this way and a1.07's first draft a third.

### Randomising the answers, which behaves differently in two places

This was asked for explicitly, and the answer is not uniform across the lesson. Measured in the code today:

**In the lesson quiz section, options are already shuffled at runtime.** `LessonRich.tsx:1196` documents it and `:1232` does it: `QuizDeckView` permutes the display order of every question's `opts` on mount and again on every retry, while the authored `correct` index never moves. **A learner never sees your authored order in the quiz.** Do not waste effort hand-shuffling for the learner's benefit there, and do not write a test asserting a visual order that the component reshuffles.

**In the mission journey, options are NOT shuffled.** Every option surface in `MissionRich.tsx` renders `q.opts` in authored order and compares the tapped index against `q.correct` directly: lines 347, 732, 944, 1026, 1941 and 1991. Inline mcq checks, `groupDrill` and `tapTable` checks and the control checks all render exactly what you wrote, in the order you wrote it. **Randomisation there is your job at authoring time**, and a lesson that always puts the right answer first teaches the learner to tap first.

So:

- **Vary the correct slot by hand in every mission-level check.** Never place the correct option in the same slot twice in a row within one act.
- **Vary it in the authored quiz too**, because the density validator reads the authored data even though the learner does not. `density.logic.ts` sets `quizSpreadPct: 40` and fails any slot holding more than 40% of closed questions, checked only once there are 8 or more closed questions. The comparison is strictly greater than, so exactly 40% passes; a1.01 sits on that boundary today.
- **Aim for 25% per slot, not for "under 40%".** The whole A1 band, measured across 350 closed questions in 25 lessons: slot 0 at 24.3%, slot 1 at 28.9%, slot 2 at 26.0%, slot 3 at 20.9%. No shipped lesson exceeds 40% and the worst is 40% exactly. Land inside that spread.
- **Do not make the correct option identifiable by shape.** The runtime shuffle moves position; it does not move the fact that the right answer is the longest, the only accented one, or the only grammatical one. On a food lesson the decoys are easy to build well: use real French words the learner has met, with the wrong article or the wrong verb pairing.
- **Assert the spread in your test**, computing it the way `validateDensity` does, and assert it against an explicit constant rather than a figure derived from the lesson.

### Audio brief notes specific to this lesson

- **`J'aime le fromage` and `Je mange du fromage` must be one take, one voice, adjacent.** Recorded apart, the learner compares two performances instead of two grammatical choices, and the teaching is lost. This is the single most important audio constraint in the lesson. Write it into `desc`, because a constraint on how something is recorded becomes invisible the moment the clip is delivered.
- **The three `l'` words must be adjacent in the same take**, for the same reason: the point is that the elided article sounds identical regardless of gender, and that only holds if one voice says all three.
- **Never record `du`, `de la` or `des` in isolation.** They are unstressed function words and a solo recording gives them a stress they never have in speech, which is precisely the mispronunciation the lesson exists to prevent.
- **`le bœuf` is `luh BUHF`, one syllable in the noun**, and a later author "correcting" it toward a two-syllable reading would be wrong. State the decision in `desc`.
- **`le poisson` and `le poison` are not in this lesson together** and must not be recorded as a pair for colour. Only `poisson` is taught.

---

## Wiring

Pattern and hazards are in `A1-BUILD-INVARIANTS.md` §5. Model on `author-pays-batch.ts` / `merge-pays-into-seed.ts` / `pays-{corpus,lesson,terms,imported}.ts`, the newest precedent, which also solved the import-heavy case.

- `scripts/author-nourriture-batch.ts`, `scripts/merge-nourriture-into-seed.ts`, `scripts/data/nourriture-{corpus,lesson,terms}.ts`, and `scripts/data/nourriture-imported.ts` for the imported-id manifest, which a1.22 and a1.20 both needed and you will need more than either.
- Add **`content:nourriture`** to `package.json` beside the other `content:` scripts. Keep the script name even if you rebind the theme to `cuisine`; the script is named for the unit's job, and `content:cuisine` would read as a1.29's.
- **Authored ids start at `fr.a1.cuisine.272`.** Confirm with the probe, and check the row count rather than the maximum, in case another author landed below your top.
- **`cuisine` and `marche` ARE in `SEED_CUT.themes`**, so the merge changes seed contents for both and the diff will be large. That is correct, not a bug. `au-restaurant` is not; ids you reference from it reach the seed, and the rest of that theme does not.
- **Your merge must name the lessons it must not disturb rather than counting them.** A count alone lets a one-for-one swap through.
- **Your respelling repairs touch rows other lessons own.** `fr.a1.cuisine.002 le pain` is referenced by a1.29's neighbourhood, `fr.a1.cafe.009 un café` and `.011 un croissant` and `.012 une baguette` are in a1.29's tranche and `.011`/`.012` are in a1.11's. Repairing a transcription does not move an id and does not break a reference, but it does change what another lesson displays. List every id you touch outside your own tranche, and check whether a shipped test asserts the old string before you change it.
- **Run the real functions in your guards.** a1.08 shipped a hand-rolled `endingPopulation` copy that let four rows through and moved two of a1.03's printed cards.
- **Do not hand-bump `seed.version`.** It is the OTA snapshot number, currently 19. Move the lesson's own `version`. See §5.
- **Apply to Postgres first, merge into the seed second, publish only when both agree.** Run `pnpm content:parity` before you start and again before you finish. It has been exiting 1 on three pre-existing divergences (`sons.09.l1` seed-only, `b2.01.l1` db-only, `sons.08.l1` shape drift) that are not yours. If it names your lesson, that is yours.
- **Never `git checkout seed.json`** to undo something. It discards other authors' uncommitted lessons. Re-run the merge scripts.

Nobody else is live in `cuisine` or `marche` as of 2026-08-07. Re-check, because a1.19 took a1.20's id range mid-build and the copied collision guard could not see it.

---

## Your test: `ealch-v2/src/content/a1-23-nourriture.test.ts`

The always-required assertions are in `A1-BUILD-INVARIANTS.md` §6. Model on `a1-22-pays.test.ts` (newest) and `sons-07-elision.test.ts` (most thorough). Specific to this lesson:

- **All 60 food words are served and asserted individually by name**, not as a count. A count passes when a category silently loses a member. Assert the thin categories hardest: the plural-only pair (`les pâtes`, `les frites`) and the `l'` group are the ones most likely to be dropped in a late edit.
- **The `aimer` / `manger` contrast is taught with both sides present**, and at least one section shows them **together on one screen**, with the same noun on both sides. That contrast is the lesson, and separating it is how the lesson decays into a word list. Assert the section type and that both verbs appear inside the same section's payload.
- **`l'` is taught as a group with its genders stated**, and the test asserts that `l'eau` is marked feminine and `l'oignon` masculine on the surface the learner sees, not just in the corpus row.
- **Every headword the lesson serves is stored articled**, so the corpus itself models the rule. Assert it over your authored rows: no bare noun, and the article is `le` / `la` / `l'` / `les` rather than `un` / `une`.
- **The partitive rule is not taught**, so a1.29 keeps its lesson. Write this against production surfaces (decks, vocab, drills, quiz stems) rather than every string, or it will fire on the scene and the reading passage, where partitives belong, and get deleted.
- **Correct answers do not cluster.** Compute the spread the way `validateDensity` does, over closed-format questions only, and fail any slot over 40%. Model the assertion on `a1-05-pronoms.test.ts:791`. Separately, assert that no mission-level check places the correct option in the same slot as the check before it within an act, because `MissionRich` does not shuffle.
- **The respelling assertions.** Import `hasPlainNasalFor` and run it over your repaired rows. Then, **additionally and by name**, assert that `la crème` is `lah KREHM` **without** a superscript, that `une banane`'s final `N` is plain, and that `la viande`, `une orange` and `un sandwich` carry the word-internal `ⁿ` that `hasPlainNasalFor` cannot see. These five are the assertions that stop a future author "fixing" correctly authored content, and they are worth more than the rest of the file.
- **Assert the reframe verbatim against an explicit constant**, and the exact number of times it is authored. A count derived from the lesson compares the content to itself and passes on any rewording.
- **Assert that the theme rebinding held**: `a1.23.themes` contains no dead theme, and every theme it names holds rows in the seed.

**Mutation-test before you call it done.** Break the `aimer` / `manger` pair across two sections, drop `les frites`, leak a partitive-choice drill into act 4, "repair" `crème` to `KREHⁿ`, and push every correct answer into slot 0. Confirm each one goes red. An assertion that cannot fail is worse than no assertion.

---

## UNVERIFIED

- **The exact count of `aimer + article + food noun` sentences in the corpus.** The token probe returned 56 rows for `j'aime` in Postgres but the visible sample was `j'aime acheter` and `j'aime la lecture`. Not enumerated because the probe prints five and summarises the rest. If it matters, and it does for act 3, run a targeted enumeration the way `_pays_probe.ts` did rather than trusting the summary.
- **The full `fr.a1.cafe` A1 row count and next-free id.** The theme probe returned 341 published and 341 in the seed but this brief did not break it down by band. Run `pnpm corpus:probe --theme cafe` if you intend to author into it.
- **Whether `poulet` and `porc` exist in `cuisine` specifically.** The probe confirmed `poulet` exists in at least five places including `fr.a1.argot-du-quotidien.099`, but the output was truncated before the `cuisine` rows. `porc` was never probed. Both are core to the viande category. Probe them first.
- **Which section types the reference-sheet renderer actually draws.** The `cheatSheet`-renders-only-its-title defect is known and `a1.13` ships it, but the full list of types the sheet renderer handles was not enumerated for this brief. Read the renderer before you fill the sheet.
- **Whether any shipped test asserts the exact respelling strings you are about to repair.** Not checked. `sons` lessons in particular pin transcriptions. Grep for each string before you change it.
- **The total Postgres item count.** The probe prints published sentence count (27,353) but not total items, so the seed's 7,818 has no Postgres counterpart in this brief. Not needed for any decision here, and named so you do not quote a number this file never measured.
- **Whether `a2.07` has a lesson in flight that depends on `nourriture` staying declared.** `a2.07` has no lesson in the seed today. Not checked against Postgres.

---

## What to report

- **The theme decision**, which is the biggest thing this brief could not settle: whether you rebound `a1.23` to `cuisine` + `marche`, populated `nourriture`, or did something else, and what it means for `a2.07` (which declares `nourriture` today) and for `a1.30` (which gates on you).
- **What the probe said about the 60 words**, and confirmation that you imported rather than authored. Give the split: how many referenced from `cuisine`, from `marche`, from `cafe`, from `au-restaurant`, and how many authored.
- **Whether the accent trap caught you.** Say plainly which words your first probe reported ABSENT that turned out to exist, so the next author expects it.
- the reframe you chose, and why that one, and what you rejected.
- **Your respelling repair list**, split into three: repaired because it breaks the nasal rule, repaired because two themes disagreed, and **deliberately left alone because the checker is wrong**. The third list is the one that matters most.
- **Every id you touched outside your own tranche**, and whether a shipped test asserted the old string.
- **Which gendered nouns you had to withdraw** to keep a1.03's printed figures stable, and what `endingPopulation` said about `la pizza`.
- how you taught the `aimer` / `manger` contrast, and **where a learner sees both sides on one screen**.
- how you covered the thin members: the plural-only pair and the `l'` group.
- corpus: how many items authored, how many imported, in which theme, and confirmation that every authored headword is stored articled with `le` / `la` / `l'` / `les`.
- lesson: mission count, act structure, quiz size and format mix, confirmation that **every question has a `why`**, and **the measured answer-slot distribution across all four slots**, for the quiz and separately for the mission-level checks.
- test count before and after. The before figure, **measured 2026-08-07, is 2302 passing, 0 failing**. Re-measure rather than quoting this; it moves every time a lesson lands.
- which missions you verified, by what route, and **which half of the verification you did** if adb was unavailable.
- **anything you could not verify, said plainly.** A gap you name costs an hour. A gap you paper over costs a session, and this project has lost two that way. If a claim in this file has gone stale, say so rather than working around it.

Do not use AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the big one", "listen to the trap", "get those two right", "this is the part that pays", "here is the catch", and anything of that register.
