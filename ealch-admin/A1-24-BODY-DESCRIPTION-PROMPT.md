# Build a1.24 "The Body"

You are authoring an A1 lesson in Ealch, end to end. Not drafting content for review: authoring it, wiring it, proving it, and leaving it render-ready.

You have latitude on the teaching. You have none on the gates.

**Read first, in this order:**

1. **`ealch-admin/A1-BUILD-INVARIANTS.md`.** The gates, the layout traps, the wiring pattern, the respelling convention and its blind spots, the quiz rules, the house rules. Everything that does not change between lessons lives there and is not repeated here.
2. `ealch-admin/A1-LESSON-GENERATION-PROMPT.md` **Part 1**, the A1 doctrine: why an A1 lesson is not a sons lesson with different words, the register of stakes, the voice.
3. **a1.22 "Pays & nationalités"**, in `ealch-admin/scripts/data/pays-*.ts`. Newest lesson to ship and your quality bar. **Read `pays-corpus.ts`'s header before anything else**: it documents how its own brief's claims failed and what the author did about it. Yours is in the same position, for the same reason, at a larger scale.
4. **a1.13 "Les couleurs"**, in `scripts/data/couleurs-*.ts`, because half of what you are teaching is a1.13's rule meeting the one pair of nouns where its exceptions are most visible. You apply that rule. You do not re-teach it.
5. **a1.17 "Les adjectifs possessifs"**, in `scripts/data/possessifs-*.ts`, because a1.17 taught that a possessive occupies the determiner slot and excludes the article, and your lesson is the place where French takes that slot back. Contradicting a1.17 by accident is the single worst outcome available to this build.

---

## VERIFIED STATE

> Measured **2026-08-07** against Postgres (`aws-0-ca-central-1.pooler.supabase.com:6543/postgres`,
> 27,353 published sentences) **and** `seed.json` v19 (7,818 items, 36 lessons).
> Every number below carries both. **Re-run before you start**, because this
> track moves weekly:
>
> ```bash
> cd ealch-admin
> pnpm corpus:probe --unit a1.24 --theme "corps,sante,couleurs,adjectifs-essentiels"
> pnpm corpus:probe --words "blond,frisé,châtain,roux,les yeux,les cheveux,mal,chauve"
> pnpm corpus:probe --tokens "j'ai mal,mal au,mal aux,il a les yeux,elle a les cheveux,les yeux bleus"
> ```
>
> If anything below disagrees with what the probe prints, **the probe wins and
> the disagreement goes in your report.**

```
a1.24  The Body   seq 27
  sub:    "Le corps"
  canDo:  "Can name the parts of the body, say what hurts, and describe how someone looks"
  themes: ["corps","sante"]      corps holds 313 rows. sante holds 0, in both copies.
  lessonIds: []                  you are filling this
  prereqUnitIds: ["a1.13"]       Colors. Shipped, v2, 26 sections.
```

Do not change `title`, `sub` or `canDo`. All three are correct and the Den advertises them.

`sub` and `canDo` above are copied byte-for-byte from the probe's unit dump. Neither carries a curly apostrophe or any other character that retyping would damage. Your `tag` is `A1 · LEÇON 27`, matching `seq`, which is what every shipped A1 lesson does (a1.20 seq 23 / LEÇON 23, a1.21 seq 24 / LEÇON 24, a1.22 seq 25 / LEÇON 25). The middle dot is U+00B7.

### The track

```
seq  unit    title                        state
  1  a1.01   Greetings                    shipped
  2  a1.02   Numbers 1 to 20              shipped
  3  a1.27   Numbers 21 to 100            shipped
  4  a1.28   Large Numbers                shipped
  5  a1.03   Noun Gender                  shipped
  6  a1.04   The Definite Articles        shipped
  7  a1.11   The Indefinite Articles      shipped
  8  a1.29   The Partitive Articles       shipped
  9  a1.05   Subject Pronouns             shipped
 10  a1.06   The Verb Être                shipped
 11  a1.07   The Verb Avoir               shipped
 12  a1.08   Days of the Week             shipped
 13  a1.09   Months of the Year           shipped
 14  a1.10   Seasons and Weather          shipped
 15  a1.12   Telling Time                 shipped
 16  a1.13   Colors                       shipped   <- your prereq
 17  a1.14   Basic Adjectives             shipped
 18  a1.16   Adjective Placement          shipped
 19  a1.15   Family Vocabulary            shipped
 20  a1.17   Possessive Adjectives        shipped   <- the one you must not contradict
 21  a1.18   Negation                     shipped
 22  a1.19   Yes/No Questions             shipped
 23  a1.20   Question Words               shipped
 24  a1.21   Prepositions of Place        shipped   <- gives you au / à la / aux
 25  a1.22   Countries and Nationalities  shipped
 26  a1.23   Food Vocabulary              no lesson
 27  a1.24   The Body                     YOU
 28  a1.25   Daily Routine                no lesson
 29  a1.26   The House                    no lesson
 30  a1.30   A1 Review                    no lesson
```

**25 A1 lessons ship.** Nothing else is in flight in `corps` as this brief is written. Confirm that before you take ids, because two authors racing for a range inside one theme has now happened twice (a1.19 took a1.20's range mid-build, and a1.14 and a1.15 collided in `famille`). Check the row count, not only the highest id.

Your models, verified in the seed:

```
lesson     v   sections  acts  quiz Q  rounds  itemIds  sheets
a1.13.l1   2      26       6     24      6       53       3
a1.14.l1   1      25       6     24      6       55       2
a1.16.l1   1      25       6     24      6       73       2
a1.15.l1   4      26       6     24      6       50       1
a1.17.l1   4      27       6     26      6       58       2
a1.20.l1   2      27       6     26      6       74       1
a1.21.l1   1      26       6     24      6       74       2
a1.22.l1   2      28       6     26      7       55       2
```

---

## Read this before you plan a single item: the corpus is already built

This is the largest already-populated theme any A1 lesson has been handed, and the last four briefs in this series all failed by telling their author something was absent when it was not. Yours is the opposite failure risk. **You are importing. You are not authoring a vocabulary list.**

```
theme                   postgres   seed    in SEED_CUT.themes?
corps                      313      313    YES  <- the seed is a COMPLETE read
sante                        0        0    no   <- dead in both copies
couleurs                   339       48    no   <- a1.13's, outside the cut
adjectifs-essentiels       645       92    no   <- a1.14's and a1.16's
```

`corps` is inside `SEED_CUT.themes` (`scripts/seed-cut.config.ts:68`). 313 published, 313 in the seed. **For this one theme, the seed is not a cut and its numbers can be trusted directly.** That is unusual here and it is worth saying out loud, because every other brief in this series had to warn you of the reverse.

What `fr.a1.corps` already holds, across 293 rows:

| block | ids | what |
|---|---|---|
| core parts | 001-062 | tête, bras, main, dos, ventre, genou, visage, nez, bouche, dent, oreille, jambe, pied, main, cœur, peau, and the rest |
| appearance nouns | 063-101 | barbe, moustache, ride, cicatrice, frange, fossette, teint, silhouette, taille |
| gesture verbs | 091-098 | respirer, cligner des yeux, froncer les sourcils, hausser les épaules, hocher la tête, serrer la main |
| more parts | 110-121 | aisselle, tempe, narine, rotule, index, majeur, annulaire, auriculaire, fesses, buste, tronc, bassin |
| symptoms | 122-155 | fièvre, rhume, grippe, toux, vertige, nausée, douleur, frisson, crampe, entorse, blessure, tousser, éternuer, guérir |
| anatomy, deep | 156-201 | tibia, fémur, omoplate, rétine, tympan, ligament, tendon, and the idioms avoir le hoquet, avoir la chair de poule |
| sentences | 202-293 | 92 of them, including "J'ai mal au ventre après le déjeuner", "Elle a les cheveux longs", "J'ai les yeux bleus", "Mon petit frère a mal aux oreilles" |

`fr.a2.corps` holds a further 20 rows and belongs to a2.28.

**NEXT FREE ID is `fr.a1.corps.294`.** No gaps in the sequence. Never renumber; ids are the SRS key.

### What is genuinely absent

Probed bare and with every article form. Of the 36 headwords a describing-people lesson would reach for, **two** came back absent anywhere in the corpus:

```
blond    ABSENT in every article form.   Safe to author.
frisé    ABSENT in every article form.   Safe to author.
```

Everything else exists somewhere. The ones you will want and where they already live:

```
les cheveux   fr.a1.corps.014                        in corps, in seed
la barbe      fr.a1.corps.063                        in corps, in seed
la taille     fr.a1.corps.100                        in corps, in seed
raide         fr.a1.corps.193                        in corps, in seed
les yeux      fr.a1.mots-essentiels.002, fr.a1.rp-sante.036
châtain       fr.sons.couleurs.051
roux          fr.sons.couleurs.052
chauve        fr.a2.description-personnes-objets.104
grand/petit/jeune/vieux/mince/gros/beau/joli/fatigué
              fr.a1.description-personnes-objets.151-169   (no respellings on any of them)
```

**`les yeux` is not in `corps`.** It is the one headword central to your lesson that the theme does not own, and `fr.a1.corps.014 les cheveux` sits right beside the hole. Authoring `les yeux` into `corps` at 294 is legitimate and is probably correct, because a theme that teaches the eye parts and not the eyes reads as an omission in the flashcard hub. Confirm with the probe that no `corps` row already carries `l'œil` as a plural before you do: `fr.a1.corps.017` is `l'œil`, singular, and `flashhub-coverage.test.ts` strips articles but not number, so the two do not collide. Say in your report which way you went.

**Do not import `grand`, `petit`, `jeune`, `vieux`, `mince` or `gros` into `corps`.** They are a1.14's and a1.16's, they carry no respelling in `description-personnes-objets`, and pulling them into your theme would put a second card for each into the hub. Name them in a `vocabThemes` section pointing at their existing ids if you want them on screen.

---

## The teaching problem

An A1 learner reaches this unit able to describe a thing and unable to describe a person, because every sentence they want to make about a body runs through a structure French does not share with English. They will say *mon dos fait mal* and *ses yeux sont bleus*, both of which are comprehensible, both of which mark them instantly, and neither of which they will hear anybody else use. The words for the parts are the easy half and the corpus has already done that half for you.

### The canDo has three clauses and they are not equal

```
"name the parts of the body"          the smallest. The corpus holds all of it.
"say what hurts"                      one structure: avoir mal à + definite article.
"describe how someone looks"          one structure: avoir + definite article + colour.
```

The first clause is a word list and needs four or five missions. The other two are the same grammatical move wearing two coats, and that is the lesson.

```
English                        French                         what moved
my head hurts                  j'ai mal à la tête             the person went into the verb
his eyes are blue              il a les yeux bleus            the person went into the verb
her hair is long               elle a les cheveux longs       and the body part took le/la/les
my back hurts                  j'ai mal au dos                à + le contracted to au
my teeth hurt                  j'ai mal aux dents             à + les contracted to aux
```

One rule covers all five rows: **the person is carried by `avoir`, and the body part takes the definite article.** English carries the person on the noun with a possessive and puts the state in the verb. French carries the person in the verb and leaves the noun with a plain article. That inversion is the whole unit.

> **The reframe candidate: "The person goes in the verb. The body part takes le, la or les."**
>
> It is a single choice the learner makes at the moment of speaking, it is true of both hard clauses of the canDo rather than one of them, and it is checkable tomorrow in any sentence they produce about a body. Carry it verbatim across at least three sections. Measured 2026-08-07, counting exact-string occurrences in each shipped lesson: a1.01 uses it 8 times, a1.21 8, a1.14 9, a1.13 12, a1.17 12, a1.22 13. Anything in that range is defensible; three is the floor.

Alternatives considered, and why they lose. Record your own rejections the way `mois-terms.ts` does, because the next author needs to know what was already weighed:

- *"Use avoir, not être."* True of the describing half and false of the hurting half in the form a learner will apply it, and it says nothing about the article, which is the part they actually get wrong.
- *"Never use mon with a body part."* Negative, and also not quite true: `mon dos` is fine as a bare noun phrase and only wrong inside the `avoir mal` frame. A reframe the learner can falsify in a week is worse than no reframe.
- *"Body parts take the."* Half the rule. It leaves the learner with `la tête a mal`.

### What the learner arrives with

- **a1.07 Avoir** gave them the full present of `avoir`. Every target sentence in this lesson is an `avoir` sentence. Name it as a verb they already own.
- **a1.04 The Definite Articles** gave them `le, la, l', les` and the three questions that choose between them.
- **a1.21 Prepositions of Place** already taught `à + le = au`, `à + les = aux`, and that `à la` and `à l'` do not contract. Verified in its `grammarIntroduced`. **You inherit the whole contraction and must not re-teach it.** Say the learner already has it, show the four shapes in one table, and move on.
- **a1.13 Colors** gave them agreement, the audible feminines, the silent plural, and that `marron` and `orange` never change.
- **a1.14 / a1.16** gave them the base adjectives and where an adjective sits.
- **a1.17 Possessives** gave them `mon/ma/mes` and the rule that a possessive excludes the article.

**a1.13's colour rule transfers exactly.** `les yeux` and `les cheveux` are both masculine plural, so every colour on them takes the plural `-s` and none takes the feminine `-e`: `les yeux bleus`, `les cheveux noirs`, `les yeux verts`. The learner already knows this. Frame it as a rule they have, applied to two nouns they are meeting.

**a1.17's rule is where the trap is.** a1.17 taught, in its own `grammarIntroduced`, that "a possessive occupies the determiner slot and excludes the definite and indefinite articles". Your lesson is the place where French takes that slot back and the possessive is the wrong answer. Say so out loud, by name, with a1.17's own example beside yours. A contradiction a learner finds alone is a language they decide is arbitrary, and this one is three lessons apart and looks exactly like an inconsistency.

### The four other things worth naming

- **`marron` bites hardest here.** `les yeux marron` is the single most common brown-eye sentence in French and the invariable rule is what makes it correct. The learner who has just learned agreement will write `marrons`. a1.13 taught the rule with shoes and curtains; you are the place it costs something. The corpus has `marron` at `fr.sons.couleurs.011` with respelling `mah-ROHⁿ`.
- **Compound colours are invariable too, and hair is where they live.** `châtain clair`, `blond foncé`, `bleu clair`, `vert foncé`. a1.13 already quizzes `des yeux vert foncé` in its round 6. **You may not present the compound rule as new.** Apply it, name a1.13 as where it came from, and spend the screen on hair rather than on the rule.
- **`avoir mal` takes no article of its own.** `j'ai mal`, not `j'ai un mal` or `j'ai le mal`. `le mal` exists at `fr.b2.ethique.053` and means something else entirely. The frame is `avoir mal à` plus whatever the body part's own article is.
- **`les cheveux` is plural and English is not.** "Her hair is long" is one thing in English and several in French, which is why it is `les cheveux longs` with an `-s` on both words. Corpus evidence: `fr.a1.corps.106` "Elle a les cheveux longs", plus eight more rows in Postgres.

### What is deliberately left to its neighbours

- **The consultation** is `a2.28 "At the Doctor's"`, which declares `corps` and `sante` exactly as you do. The temptation is total, because `fr.a1.corps.202-293` is full of doctors, prescriptions, waiting rooms and ultrasounds. Those rows may appear as **reading and listening context** and may be released by a tranche as review cards. **`ordonnance`, `consultation`, `traitement`, `symptôme` and the clinic vocabulary may not be taught, drilled or quizzed.** Your half of "say what hurts" is one structure, not a medical encounter.
- **Reflexive body verbs** are `a1.25 "Daily Routine"`. `fr.a1.corps.209` "Je me lave les mains avant de manger" and `fr.a1.corps.212` "Elle se brosse les dents tous les soirs" are exactly the shape you are teaching and they carry a reflexive pronoun a1.25 owns. Show them as context in the reading passage if you want; **do not drill them and do not put one in the quiz.**
- **Adjective placement** is `a1.16`. Colours already go after the noun and the learner knows it. State it as a fact, not as a system.
- **Adjective agreement as a rule** is `a1.13`. You apply it. Any section that reads like a re-teach of the feminine `-e` belongs in a1.13, not here.
- **Clothing and accessories** have no A1 unit; `porter des lunettes` has 13 rows in Postgres and is genuinely useful for describing a person. One card, in context, is defensible. A clothing sub-lesson is not.

Be specific about the split when you write the test. a1.09 shows a day name inside a full date in its reading passage and drills none of them; its test enforces that by scoping the assertion to production surfaces. **A guard written over every string in the lesson fires on legitimate context and gets deleted by the next author**, which is worse than not writing it.

---

## The corpus

### The respelling repair list

This is the largest real defect the probe found and it is inside your own theme.

**`corps` uses two different conventions for the article, split by authoring date.** Measured across the 191 non-sentence rows that carry a respelling:

```
47 rows   uppercase article:  LAH TEHT, LUH BRAH, LAH MAN, LAY shuh-VUH     ids 001-062
82 rows   lowercase article:  la BARB, lah RAHT, luh BLUH, lah TAHY         ids 063 onward
62 rows   no leading article in the respelling at all
```

All three appear in one theme, which means the flashcard hub shows a learner three conventions for the same thing. The house rule in §3 of the invariants is "stressed syllable capitalised", and an unstressed article is not the stressed syllable, so **the lowercase form is the correct one and the 47 uppercase rows are the defect.** Repairing them is a 47-row mechanical edit inside a theme you already own. Do it, or state plainly in your report why you did not; either is acceptable, silence is not.

Cross-theme collisions the probe flagged on words this lesson names. §9 of the invariants says a variant is not a violation, so repair what breaks the stated rule and leave the rest:

```
la tête     LAH TEHT (corps.001)  |  TET (rp-sante.003)  |  TEHT (sons.accents.040)
le dos      LUH DOH (corps.004)   |  luh DOH  |  luh-DOH  |  DOH        four forms
la gorge    LAH GORZH (corps.027) |  la GORZH |  lah-GORZH             three forms
les yeux    YUH (mots-essentiels.002)  |  lay-ZYUH (rp-sante.036)
le bleu     luh BLUH (corps.144)  |  LUH BLUH (a2.symptomes.030)  |  BLUH (sons.couleurs.002)
la taille   lah TAHY (corps.100)  |  TAHY (a2.rp-achats.002)
malade      mah-LAHD |  ma-LAD
```

Nasal rule, and **check §3 of the invariants for the two blind spots before you write this list.** Verified passing forms for the words this lesson is most likely to touch:

```
châtain   currently  shah-TAN  at fr.sons.couleurs.051   FLAGGED, plain n closing a nasal
                     shah-TAⁿ  is the repair
marron    currently  mah-ROHⁿ  at fr.sons.couleurs.011   correct, leave it
blanc     currently  BLAHⁿ                                correct, leave it
brun      currently  BRUHⁿ                                correct, leave it
long      currently  LOHN  at fr.sons.adjectifs-essentiels.010   FLAGGED, not yours to fix
jeune     currently  ZHUHNN at fr.sons.adjectifs-essentiels.009  word-internal nasal the
                     checker cannot see. Verify by hand. Not yours to fix.
```

`hasPlainNasalFor` cannot see a word-internal nasal, so `sep-TAHNBR` passes and is wrong. Several `corps` rows are in that class: `le menton` `LUH mahn-TOHN`, `le talon` `LUH tah-LOHN`, `le poumon` `LUH poo-MOHN`, `le tympan` `luh tan-PAHN`, `le gonflement` `gohn-fluh-MAHN`. **If you touch any of them, assert the superscript on them by name as well as calling the shared checker.**

### The theme

`a1.24` declares `["corps","sante"]`. **`sante` holds 0 rows in Postgres and 0 in the seed.** By the rule in the invariants, a theme empty in both copies is dead and should be dropped or replaced, not populated.

The health vocabulary that would justify a `sante` theme is **already inside `corps`**, at ids 122-155: fièvre, rhume, grippe, toux, éternuement, vertige, nausée, douleur, frisson, crampe, entorse, fracture, brûlure, blessure, démangeaison, tousser, éternuer, vomir, saigner, guérir. Creating `sante` now would split one coherent theme across two hub chips for no learner benefit and would put a second card for several words into the hub.

**Recommendation: drop `sante` from `a1.24.themes` and ship with `["corps"]`.** Do not create the theme.

`a2.28 "At the Doctor's"` is the only other unit declaring `sante` and has no lesson. Dropping it from a1.24 does not touch a2.28, but **report the decision so whoever builds a2.28 inherits it as a decision rather than rediscovering it as an absence.** If you would rather leave the declaration untouched and simply not populate it, that is defensible and also needs saying; what is not acceptable is authoring rows into `sante` to justify the declaration.

### If you author items

You will author very few. Probably `blond`, `frisé`, possibly `les yeux`, possibly two or three sentences that put the reframe on screen in a shape the existing 92 do not. Everything else is an import.

- ids continue `fr.a1.corps` from **294**. Confirm with the probe; it prints NEXT FREE.
- **Headword shape: articled for nouns, bare for adjectives and verbs.** That is what `corps` already does across all 293 rows (`la tête`, `le bras`, but `raide`, `endolori`, `tousser`) and consistency inside a theme matters more than the choice. `blond` and `frisé` are adjectives and go in bare.
- **No two non-sentence items in one theme may share an `fr`.** Verified 2026-08-07: `corps` currently has **zero** duplicates once articles are stripped. You are the one who can break that. The live risks are `les yeux` against `l'œil` at `fr.a1.corps.017` (different number, does not collide, but check with the real comparison), and `le bleu` at `fr.a1.corps.144`, which is a bruise and would collide with any attempt to add the colour to this theme. **Do not put a colour word into `corps`.** Colours are `couleurs`.
- **Watch the gendered single-word nouns.** Every noun you add to `corps` joins a1.03's measured ending population, and `a1-03-genre.test.ts` re-measures twenty printed figures on every run. `les yeux` is plural and `blond` and `frisé` are adjectives, so on the current plan none of them lands in that population. Check through the real `endingPopulation` and withdraw rather than argue. This has already forced a1.03 to v3 once, from a1.22's country nouns.
- Every item must be reachable: named by a section, or released by a `deckTranche` and carrying a `flashcard` drill.
- **Check the drills on every row you import.** This theme is not uniform and importing blind will produce sections that render nothing:

```
flashcard + voiceflash    96 rows    safe for flashcards and for practice skill:'speak'
flashcard only             6 rows    no voiceflash, so practice skill:'speak' renders nothing
flashcard + review        49 rows
review + voiceflash       49 rows    NO flashcard drill. ids 156-201, the deep anatomy.
                                     A flashcards section naming these draws an empty card.
dictation                 57 rows    ids 248-293. Dictation only, no flashcard, no voiceflash.
review + sentence         49 rows
```

`practice` with `skill: 'speak'` needs `voiceflash` on every item it names; `dictation` needs `dictation`. Check against **Postgres**, not the seed, even though for this theme they agree today.

---

## Designing this for a learner, on a phone

Layout rules are in `A1-BUILD-INVARIANTS.md` §2. What is specific to this lesson:

- **`cardDeck` for the parts.** One part per card, French large, English small, respelling under it. This is the section type `ownsLayout()` gives the viewport to, and a body part is a one-word card, so `size: 'xl'` is safe here in a way it is not anywhere a sentence appears. Twelve to sixteen core parts across two or three decks; the theme has 100 and the lesson does not need them.
- **The `avoir mal` frame is a PAIR and belongs on one screen.** `j'ai mal à la tête` beside `my head hurts`, with the person's position marked in both. **Separating the English from the French across two cards destroys the teaching**, because the whole point is which slot the person occupies. Use a `tapTable` with two columns, or a `cardDeck` card carrying both lines. **This is the layout the test must assert.**
- **The four contractions want a `tapTable`, not four cards.** `à la tête` / `au dos` / `aux dents` / `à l'oreille` are one paradigm and a learner needs to see the shape of the set. `tapTable` is not in `ownsLayout()` and renders inside a scrolling page, which is correct for a four-row grid.
- **`groupDrill` for sorting a body part into its article.** The learner picks `le`, `la` or `les` for each part. This is the drill that makes a1.04 pay off and it is the cheapest way to make 100 nouns feel like a system.
- **A reference sheet with the frame and the contraction table.** It is what a learner returns to during a1.25 and a2.28. Wire the `sheetId` early.
- **Do not use a `cheatSheet` block inside a `sheets[]` entry.** It draws its title and nothing else. a1.13 ships that defect twice, at `sheet.a1.13.forms` and `sheet.a1.13.invariable`, and it is on the known-debt list rather than in the code. Use `table` and `teach` blocks. Verify by rendering, not by reading the schema.
- **Do not invent a labelled body diagram.** No component draws one. `lesson-contract.test.ts` **does not check `imageRef`**, so an authored diagram field is schema-valid, passes CI, and renders nothing. This project has lost a session to exactly that class of defect. If you want a head-to-toe order on screen, a `tapTable` walking down the body is what actually draws.
- **Three term chips per section, maximum.** The renderer shows three.

### The scene

The learner is at a pharmacy counter, or a reception desk, or in front of somebody's parent. They have the word. They say *mon dos fait mal*, or they point. The pharmacist understands perfectly, answers slowly and in English, and hands them the wrong thing, because pointing at your back is what somebody with no French does and that is the person they have just been read as. Nobody corrects them. Nobody is unkind. The interaction simply ends with the learner holding something they did not want.

Two candidate beats:

1. **The pharmacy.** They know `le dos`. They say the words in the English order. The pharmacist switches to English. Sharp, because the learner did know the word, and the failure is entirely structural.
2. **Describing a friend to somebody meeting them at a station.** They say *ses cheveux sont bruns*. It is understood. It is also the sentence a phrasebook produces, and the person at the other end starts speaking English before the friend arrives.

**The first is sharper**, because the vocabulary was not the problem and the learner can tell it was not, which is the exact frustration this lesson resolves. Use the second in the `scenario` section, where the learner produces.

Extract beats to a named `SCENE_BEATS` const, give every beat its own `size` (prose at `md`, the choice and the break at `lg`) and its own `audio`, and keep the break body between 24 and 40 words. The natural choice beat is the moment the pharmacist switches to English, before the learner is told anything.

An A1 scene opens on somebody being misread as a person, not on being misunderstood. Every word correct, and the interaction still goes wrong. If your scene ends with someone being told they made a mistake, it is a sons scene wearing A1 clothes.

---

## Shape

v2 lesson: `acts`, a stable `id` on every section, `reframe`, `deckTranche`, `terms`, `errorTriggers`, `drills`, round-based quiz. Follow the v2 spine in `ealch-admin/LESSON-GENERATION-PROMPT.md`.

Recent lessons run 25 to 28 sections. **26 to 28 is your range, and the weight belongs on the two structures, not on the word list.** The corpus has 100 body parts and naming them is the cheap half. If naming the core parts takes four missions and the `avoir mal` frame takes six, that is correct. Do not stretch the deck because the vocabulary looks abundant; abundance is what makes this lesson easy to get wrong.

```
act 1  The Word Was Not The Problem     scene, goals
act 2  Head To Toe                      the core parts, decks and a sorting drill
act 3  Where It Hurts                   avoir mal à, the four contractions, the pair layout
act 4  What They Look Like              avoir les yeux / les cheveux, colour applied
act 5  Say It About Someone             reading, flashcards, dictation, practice, scenario
act 6  The Exam                         quiz and roundup
```

Every act names sections that exist and no section is claimed by two acts; `lesson-contract.test.ts` fails by name on both.

### Quiz notes specific to this lesson

General rules, including the `fold()` limits, the mcq ceiling, the 40% answer-slot cap and the drill-reachability trap, are in `A1-BUILD-INVARIANTS.md` §4.

- **Every question about the frame needs a person and a body part in the stem.** "Which article goes with tête?" has no answer worth having. "You want to say your head hurts. Complete: j'ai mal ___ tête." has exactly one.
- **`typeIn` is your strongest format here** because `fold()` keeps a final `-e` and `-s`, so `bleus` against `bleu` and `marron` against `marrons` are genuinely testable by typing. Use it for the agreement on `les yeux` and `les cheveux`, and for the invariable `marron`.
- **`errorSpot` is your second strongest**, because the target errors are all well-formed sentences that are wrong: « Mon dos fait mal. », « Ses yeux sont bleus. », « Elle a les yeux marrons. » Each has one repair and the repair is the reframe.
- **`listenChoose` has one job in this lesson and it is the contraction.** `au dos` against `à la` against `aux dents` is a real ear distinction a learner can make and get wrong. **Do not use it on the colour agreement**, because `bleu` and `bleus` are the same sound, and a question whose answer is not in the audio certifies a bug. a1.13 already handles that squarely, with a question whose answer is "they are identical"; do not repeat it.
- **No free-text format can test a capital letter**, and no ear question can test the silent `-s` on a plural colour. Both were recommended by earlier briefs in this series and both were wrong.
- **Six rounds, 24 to 26 questions**, matching the shipped range. Each round names `targets`, and `drillForRound` fires the drill of the FIRST resolving target only. Make each teaching drill the first resolving target of exactly one round, and assert it. a1.05 shipped two dead drills and a1.07's first draft a third.

### Randomising the answers

The runtime already shuffles. `QuizDeckView` in `LessonRich.tsx` builds a fresh permutation per question on mount (line 1232), reshuffles on retry (line 1273), and the authored `correct` index never moves. **So the authored order is not what the learner sees, and this cuts both ways:**

- **Never write an option that refers to a position.** "Both of the above", "the first one", "neither of the last two" are meaningless once shuffled. a1.16's test asserts against this by name and yours must too.
- **Never repeat an option inside one question.** A duplicate is merely redundant in the authored order and genuinely ambiguous once shuffled, because two slots then hold the same text and only one is `correct`. a1.22 currently ships two questions with case-insensitive duplicate options; do not copy that.
- **The authored spread still matters and is still gated.** The density validator fails any option slot holding more than 40% of closed-format questions, whatever the runtime does. Measured across the ten most recent A1 lessons on 2026-08-07:

```
lesson     closed Q   slot 0 / 1 / 2 / 3    worst slot
a1.13         12        3  2  4  3            33%
a1.14         13        3  4  3  3            31%
a1.15         13        3  4  3  3            31%
a1.16         14        5  4  3  2            36%
a1.17         14        4  5  4  1            36%
a1.18         11        3  3  3  2            27%
a1.19         15        5  4  3  3            33%
a1.20         14        5  5  3  1            36%
a1.21         12        2  4  4  2            33%
a1.22         14        4  3  3  4            29%
```

Nothing in that table is close to the ceiling and nothing needs to be. **Author the correct answer into a deliberately varied slot rather than writing four plausible distractors and putting the answer wherever it landed.** The practical target is every slot between 20% and 35%, which every shipped lesson already meets. Assert it in your test with the real validator, not a hand-rolled count.

- **Distractors must be wrong for a reason the `why` can name.** A shuffled question with three filler options teaches nothing regardless of where the answer sits. Each distractor should be an error the lesson has an `errorTrigger` for: the possessive instead of the article, the uncontracted `à le`, the agreed `marrons`, `être` instead of `avoir`.

### Audio brief notes specific to this lesson

- **The four contractions are one take, one voice.** `à la tête`, `au dos`, `aux dents`, `à l'oreille` recorded apart become four performances and the learner compares delivery instead of sound. Write that into `desc`.
- **`les yeux bleus` and `les yeux bleu clair` must be adjacent in the same take**, because the teaching is that the second adds no ending and the learner needs the two side by side to trust it.
- **Never record `mal` in isolation.** It carries no meaning outside the frame and an isolated clip invites the learner to treat it as a noun, which is the `j'ai un mal` error.
- **`les yeux` is `lay-ZYUH`, with the liaison.** `fr.a1.mots-essentiels.002` stores it as `YUH`, without. Decide once, write the decision into `desc`, and do not let it be silently normalised later. The liaison form is the one a learner will hear and the one `fr.a1.rp-sante.036` already uses.

**Do not run `pnpm audio:render`.** It spends real ElevenLabs credits and the key is not set. A `recordingId` resolving to nothing is the correct shipping state.

---

## Wiring

Pattern and hazards are in `A1-BUILD-INVARIANTS.md` §5. Model on `author-mois-batch.ts` / `merge-mois-into-seed.ts` / `mois-{corpus,lesson,terms}.ts`. Specific to you:

- `scripts/author-corps-batch.ts`, `scripts/merge-corps-into-seed.ts`, `scripts/data/corps-{corpus,lesson,terms}.ts`, `content:corps` in `package.json`.
- **Ids start at `fr.a1.corps.294`.** Confirm with the probe.
- **`corps` IS in `SEED_CUT.themes`**, so the merge will change seed contents and that is correct, not a bug. It also means the seed is a complete read of the theme today, so your parity check can compare the two directly and should fail loudly if they diverge.
- **`couleurs`, `adjectifs-essentiels` and `description-personnes-objets` are NOT in `SEED_CUT.themes`.** Any row you name from those themes has to be carried into the seed by your merge script explicitly or the card renders blank on a fresh install. a1.21's brief got this backwards and its advice would have shipped blank cards. Name every out-of-cut id your lesson references, in the merge script, individually.
- **The merge script must name the lessons it must not disturb rather than counting them.** A count alone lets a one-for-one swap through.
- **Do not hand-bump `seed.version`.** It is the OTA snapshot number. See §5.
- **Never `git checkout` `seed.json`.** Reverting it discards other authors' uncommitted work. Re-run the merge scripts instead.
- **Diff the DB bodies against git before any `content:publish`.** git can run ahead of Postgres and publish then destroys the difference silently. This cost real work on 2026-07-31.

---

## Your test: `ealch-v2/src/content/a1-24-corps.test.ts`

The always-required assertions are in `A1-BUILD-INVARIANTS.md` §6. Model on `a1-22-pays.test.ts` (newest) and `sons-07-elision.test.ts` (most thorough). Specific to this lesson:

- **Every core body part is taught and tested by name**, asserted individually rather than as a count. Name the set explicitly in a const; a count passes while a part quietly disappears. The one most likely to be dropped in a rewrite is `le ventre`, because it is the least like its English translation.
- **The `avoir mal à` frame is taught with both sides present**, and at least one section shows the English and the French **together on one screen**. That inversion is the lesson, and separating it is how the lesson decays into a word list. Assert the section id and that both strings live in the same section.
- **All four contractions appear**: `à la`, `au`, `aux`, `à l'`. Assert each by name. `à l'` is the one a rewrite drops, because it looks like a special case of `à la`.
- **The possessive is taught as the wrong answer, not omitted.** Assert that at least one `commonErrors` entry or quiz distractor contains a possessive with a body part, and that no production surface teaches it as correct. **Scope that assertion to decks, vocab, drills and quiz, not to every string**, or it fires on the reading passage's legitimate `Mon petit frère a mal aux oreilles` and gets deleted.
- **`marron` appears unagreed on `les yeux` and is never `marrons` anywhere in the lesson.** This is the highest-value single assertion in the file.
- **Colours on `les yeux` and `les cheveux` carry the plural `-s`.** `bleus`, `verts`, `noirs`, `bruns`, `longs`. Assert by name, because a well-meaning future author will "fix" one to the singular.
- **a2.28's clinic vocabulary is not taught.** Write it against production surfaces so the reading passage's doctor stays legal.
- **a1.25's reflexives are not drilled.** Same scoping.
- **The respelling assertion.** Import `hasPlainNasalFor` from `density.logic.ts`; never write your own. Additionally assert by name that `le menton`, `le talon`, `le poumon` and `le tympan` carry the superscript, because the shared checker cannot see a word-internal nasal and all four pass it while being wrong if written with a plain n.
- **If you repaired the 47 uppercase-article respellings, assert the convention on the whole theme** so the next author cannot reintroduce one. If you did not repair them, assert nothing about casing and say why in the corpus header.
- **The quiz: no positional options, no duplicate options, spread under 40% through the real validator, at most half `mcq`, every question has a `why` and a resolving `ref`, every free-text question accepts the answer it displays through the real `matchesAccept`.**
- **Assert the reframe count against an explicit constant**, not a figure derived from the lesson. A derived count compares the content to itself and passes on any rewording.
- **Assert the decision that looks like a bug.** If you leave `les yeux` respelled with the liaison while `mots-essentiels` has it without, assert that, so the next author's "consistency fix" goes red instead of shipping. Same for any `corps` row you deliberately left unrepaired. This is the bullet people skip and it is worth the most.

**Mutation-test before you claim it works.** Break the pair layout, drop `le ventre`, put an `-s` on `marron`, teach a possessive on a body part, un-repair a respelling, add a fifth option that says "both of the above". Confirm each one goes red. An assertion that cannot fail is worse than no assertion.

### The gates

```bash
cd ealch-v2
npx tsc --noEmit                                                    # must be 0
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
```

**Baseline measured 2026-08-07: 2302 tests, 2302 pass, 0 fail.** Re-measure before you start; it moves every time a lesson lands. Yours must not reduce whatever it is when you begin. A lesson brings roughly 60 to 80 tests. Use `node --test`, not `npx tsx --test`, which reports failures in `i18n.test.ts` and `content.logic.test.ts` that do not reproduce under the real runner.

---

## UNVERIFIED

Everything below is believed and not checked. It is quarantined here so you know which parts of this brief to trust; a claim in the body reads as measured.

- **That `a1.23 "Food Vocabulary"` and `a1.25 "Daily Routine"` are not being built concurrently.** Not checked; both had empty `lessonIds` at 07:00 on 2026-08-07 and neither shares a theme with you. If it matters, `git log --oneline -20` and check for an `author-*-batch.ts` in a theme adjacent to yours.
- **That the 47 uppercase-article respellings in `corps` are all pre-2026-07 authoring rather than a deliberate convention for the first 62 ids.** Not checked; no corpus header states either. If it matters, `git log -p --follow` on whichever data file first introduced them.
- **That no section type renders a body diagram.** Checked negatively (nothing in the section list looked like one) rather than positively. If it matters, grep `LessonRich.tsx` and `MissionRich.tsx` for `imageRef` and confirm no renderer reads it.
- **That `les yeux` is safe to author into `corps` at 294.** The duplicate check was run with a hand-written article strip, not with the real comparison in `flashhub-coverage.test.ts`. Re-run it through the real function before you write the row.
- **That `a2.28` has no in-flight build that would want `sante` alive.** Its `lessonIds` is empty in the seed; nothing beyond that was checked.
- **The 40% ceiling is a density-validator rule quoted from the invariants**, and the ten-lesson spread table above was computed independently rather than through that validator. The numbers are right; whether the validator counts `speak` and `tapSilent` questions as closed-format was not verified. Run the real validator.

---

## What to report

- **The `sante` decision**, and what it means for `a2.28`, which declares the same two themes and has no lesson.
- **What the probe said about `corps`**, and confirmation that you imported rather than authored, with the count of each.
- **Whether you authored `les yeux` into `corps`**, and how you confirmed it does not collide with `l'œil` at 017.
- the reframe you chose, why that one, and what you rejected.
- **your respelling repair list**, including whether you took on the 47-row casing repair, and any row you deliberately left alone.
- **which gendered nouns you had to withdraw** to keep a1.03's twenty printed figures stable, or confirmation that none of your rows entered the ending population.
- how you taught the `avoir` + article inversion, and the section id where a learner sees English and French on one screen.
- how you bounded a1.17 without contradicting it, and where the learner is told the possessive stops.
- how you kept a2.28's consultation and a1.25's reflexives as context without teaching them, and how the test scopes that.
- corpus: how many items authored, how many imported, in which theme, and confirmation that the articled-noun / bare-adjective form rule held.
- lesson: mission count, act structure, quiz size and format mix, **the measured answer-slot spread**, and confirmation that every question has a `why`.
- test count before and after, with the before figure **measured rather than taken from this file**.
- which missions you verified, by what route, and **which half of the verification you did** if adb was unavailable.
- **anything you could not verify, said plainly.** A gap you name costs an hour. A gap you paper over costs a session, and this project has lost two that way. If a claim in this file has gone stale, say so rather than working around it.

House rules that apply to every string you write: no em dashes, no "honest" or "honesty", English instruction and context even inside French content, no grammar jargon on a learner surface. Do not use AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the big one", "listen to the trap", "get those two right", "this is the part that pays", "here is the catch", and anything of that register.

`*.md` is gitignored here. This file needs `git add -f`.
