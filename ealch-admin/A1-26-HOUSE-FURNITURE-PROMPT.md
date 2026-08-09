# Build a1.26 "The House"

You are authoring an A1 lesson in Ealch, end to end. Not drafting content for review: authoring it, wiring it, proving it, and leaving it render-ready.

You have latitude on the teaching. You have none on the gates.

**Read first, in this order:**

1. **`ealch-admin/A1-BUILD-INVARIANTS.md`.** The gates, the layout traps, the wiring pattern, the respelling convention and its blind spots, the quiz rules, the house rules. Everything that does not change between lessons lives there and is not repeated here.
2. `ealch-admin/A1-LESSON-GENERATION-PROMPT.md` **Part 1**, the A1 doctrine: why an A1 lesson is not a sons lesson with different words, the register of stakes, the voice.
3. **a1.21 "Prépositions de lieu"**, in `ealch-admin/scripts/data/prepositions-*.ts`. Your direct prerequisite and your closest structural model. **Read `prepositions-corpus.ts`'s header before anything else**: it records five claims its own brief made that measured false, including seed-cut advice that would have shipped blank cards. You are in the same position and the theme is bigger.
4. **a1.22 "Pays & nationalités"**, in `scripts/data/pays-*.ts`, newest lesson to ship and your quality bar.
5. **a1.11 "Les articles indéfinis"**, in `scripts/data/indefinis-*.ts`, because the contrast this lesson is built on is a1.11's first-mention rule, and you must apply it without re-teaching it.

---

## VERIFIED STATE

> Measured **2026-08-07** against Postgres (`aws-0-ca-central-1.pooler.supabase.com:6543/postgres`,
> 27,353 published sentences) **and** `seed.json` v19 (7,818 items, 36 lessons).
> Every number below carries both. **Re-run before you start**, because this
> track moves weekly:
>
> ```bash
> cd ealch-admin
> pnpm corpus:probe --unit a1.26 --theme "maison,objets"
> pnpm corpus:probe --words "la pièce,l'étage,le meuble,le canapé,la commode,le placard,le tiroir"
> pnpm corpus:probe --tokens "il y a,il n'y a pas,dans le salon,sur la table,à côté du"
> ```
>
> If anything below disagrees with what the probe prints, **the probe wins and
> the disagreement goes in your report.**

```
a1.26  The House   seq 29
  sub:    "La maison"
  canDo:  "Can name the rooms and the furniture and say where things are at home"
  themes: ["maison"]             maison holds 363 rows. 153 of them are fr.a1.
  lessonIds: []                  you are filling this
  prereqUnitIds: ["a1.21"]       Prepositions of Place. Shipped, v1, 26 sections.
```

Do not change `title`, `sub` or `canDo`. All three are correct and the Den advertises them.

`sub` and `canDo` above are copied byte-for-byte from the probe's unit dump. Neither carries a curly apostrophe or any other character that retyping would damage. Your `tag` is `A1 · LEÇON 29`, matching `seq`, which is what every shipped A1 lesson does (a1.20 seq 23 / LEÇON 23, a1.21 seq 24 / LEÇON 24, a1.22 seq 25 / LEÇON 25). The middle dot is U+00B7.

### The track

```
seq  unit    title                        state
  1  a1.01   Greetings                    shipped
  2  a1.02   Numbers 1 to 20              shipped
  3  a1.27   Numbers 21 to 100            shipped
  4  a1.28   Large Numbers                shipped
  5  a1.03   Noun Gender                  shipped
  6  a1.04   The Definite Articles        shipped
  7  a1.11   The Indefinite Articles      shipped   <- the contrast you apply
  8  a1.29   The Partitive Articles       shipped
  9  a1.05   Subject Pronouns             shipped   <- already owns il y a
 10  a1.06   The Verb Être                shipped
 11  a1.07   The Verb Avoir               shipped
 12  a1.08   Days of the Week             shipped
 13  a1.09   Months of the Year           shipped
 14  a1.10   Seasons and Weather          shipped
 15  a1.12   Telling Time                 shipped
 16  a1.13   Colors                       shipped
 17  a1.14   Basic Adjectives             shipped
 18  a1.16   Adjective Placement          shipped
 19  a1.15   Family Vocabulary            shipped
 20  a1.17   Possessive Adjectives        shipped
 21  a1.18   Negation                     shipped
 22  a1.19   Yes/No Questions             shipped
 23  a1.20   Question Words               shipped
 24  a1.21   Prepositions of Place        shipped   <- your prereq
 25  a1.22   Countries and Nationalities  shipped
 26  a1.23   Food Vocabulary              no lesson
 27  a1.24   The Body                     no lesson, brief written
 28  a1.25   Daily Routine                no lesson
 29  a1.26   The House                    YOU
 30  a1.30   A1 Review                    no lesson
```

**25 A1 lessons ship.** A brief for a1.24 exists and no build has started on it; it takes ids in `corps` and does not touch you. Nothing else is in flight in `maison`. Confirm that before you take ids, because two authors racing for a range inside one theme has now happened twice (a1.19 took a1.20's range mid-build, and a1.14 and a1.15 collided in `famille`). **Check the row count, not only the highest id.**

Your models, verified in the seed:

```
lesson     v   sections  acts  quiz Q  rounds  itemIds  sheets
a1.21.l1   1      26       6     24      6       74       2
a1.22.l1   2      28       6     26      7       55       2
a1.20.l1   2      27       6     26      6       74       1
a1.17.l1   4      27       6     26      6       58       2
a1.16.l1   1      25       6     24      6       73       2
a1.13.l1   2      26       6     24      6       53       3
```

---

## Read this before you plan a single item

Three things the probe found that will change how you build this, all of which contradict what a house-and-furniture brief would normally assume.

### 1. The corpus is already built, and for once the seed can be trusted

```
theme     postgres   seed    in SEED_CUT.themes?
maison       363      363    YES  <- the seed is a COMPLETE read
objets       352      352    YES  <- also complete, and it overlaps you heavily
```

Both are inside `SEED_CUT.themes` (`scripts/seed-cut.config.ts:68`). **For these two themes the seed is not a cut and its numbers can be trusted directly.** That is unusual here; every other brief in this series had to warn you of the reverse, because the four briefs before a1.10 all reasoned from an absence that was an artefact of the cut.

`fr.a1.maison` holds **153 rows: 116 non-sentence and 37 sentences.** Gaps at 127 and 143. **NEXT FREE ID is `fr.a1.maison.156`.** Never renumber; ids are the SRS key.

| block | ids | what |
|---|---|---|
| rooms | 001-003, 010, 038, 104 | maison, chambre, salon, salle de bain, salle à manger, cuisine |
| structure | 012-013, 019-021, 033-034, 052-053, 097 | porte, fenêtre, escalier, mur, toit, plafond, sol, grenier, palier, couloir |
| furniture | 014-017, 025-032, 041-048, 085-088 | lit, table, chaise, canapé, lampe, armoire, étagère, rideau, couverture, drap, oreiller, fauteuil, commode, table basse, coussin, vase, cadre, portemanteau, tiroir, placard, meuble, buffet |
| appliances | 105-112 | frigo, four, micro-ondes, cuisinière, lave-vaisselle, machine à laver, sèche-linge, télévision |
| tableware | 113-120 | fourchette, couteau, cuillère, assiette, verre, tasse, bol, casserole |
| kitchen kit | 061-075 | théière, poêle, couvercle, planche à découper, évier, torchon, éponge, seau, balai, serpillière, cintre |
| outside | 018, 023, 039-040, 059-060, 079-082 | jardin, garage, balcon, cave, pelouse, clôture, portail, barrière, véranda, volet |
| utilities | 089-096, 100 | électricité, gaz, eau chaude, chauffage, compteur, robinet, fuite, panne, ampoule |
| housing types | 076-078 | studio, appartement, villa |
| sentences | 004-008, 101-103, 124-155 | 37 of them, including "Il y a une table dans le salon", "Le lit est près de la fenêtre", "La cuisine est à côté du salon", "Il n'y a pas d'ascenseur dans l'immeuble" |

Gender is close to even: **52 feminine, 58 masculine, 6 with no gender** (the phrases and verbs). Drills: 94 rows carry `flashcard/voiceflash`, 20 carry `flashcard/review/voiceflash`, 16 carry `flashcard/review/sentence`, 17 are `dictation` only and **6 carry `flashcard` alone with no `voiceflash`**. `practice` with `skill: 'speak'` needs `voiceflash` on every item it names; those six will render nothing.

There are **zero duplicate `fr` values inside `fr.a1.maison`** once articles are stripped. You are the one who can break that.

**You are importing. You are not authoring a furniture list.**

### 2. `objets` holds 39 of your headwords with the opposite article

This is the finding that shapes the lesson, and it is the one most likely to be missed.

`fr.a1.objets` holds 104 non-sentence rows, and **39 of them are the same word as a `maison` row, differing only in the article**:

```
maison 015  la table          objets 026  une table
maison 014  le lit            objets 028  un lit
maison 012  la porte          objets 030  une porte
maison 013  la fenêtre        objets 031  une fenêtre
maison 026  l'armoire         objets 036  une armoire
maison 029  le rideau         objets 035  un rideau
maison 086  le placard        objets 052  un placard
maison 116  l'assiette        objets 053  une assiette
maison 105  le frigo          objets 065  un frigo
... 30 more, listed by re-running the overlap check in the pre-flight
```

**No unit declares `objets`.** It is a practice-hub theme, populated so Voice Flash and the By Theme parcours work offline. So nothing owns it and nothing is contradicted by your using it.

`flashhub-coverage.test.ts` keys on `fr` **per theme**, so these are not collisions and the build will not fail on them. But a learner does see the same object twice in the hub under two chips, and the two themes respell differently: `maison` puts the article inside the respelling (`lah TAHBL`) and `objets` does not (`fuh-NEHTR`). Do not try to reconcile the two conventions. §9 of the invariants is explicit that a variant is not a violation, and `objets` is not yours.

**What this overlap is actually for.** It is the cleanest evidence in the whole corpus for the one contrast this lesson can teach, and it fell out of two unrelated import waves rather than being designed. Use it. See the teaching problem below.

### 3. There is no new grammar in this unit, and the brief you were expecting is wrong about that

A house-and-furniture lesson looks like it should introduce `il y a`. It does not.

```
a1.05 grammarIntroduced: "Impersonal il, in il y a, il faut and the weather
                          and clock frames"
a1.10 grammarIntroduced: "il y a plus a partitive article as a weather
                          expression, and its overlap with il fait du"
```

**`il y a` was introduced nineteen units before you** and reinforced by a1.10. 201 published sentences carry it, 42 of them in the seed. Presenting it as new is a re-teach, and the learner will notice.

The locative half is equally spoken for. a1.21's `grammarIntroduced` already covers `sur, sous, dans, devant, derrière`, `à` as a locative, simple against compound prepositions, the obligatory `de` on a compound, `à + le = au`, `à + les = aux`, that `à la` and `à l'` do not contract, `de` contracting in a locative context, `entre` and `chez`. **All of it. Verbatim, in the seed.**

Negation after `il y a` is a1.11's and a1.18's: a1.11 introduced "Under negation un, une and des all reduce to de", which is exactly `il n'y a pas de fenêtre`.

**So a1.26 introduces no new grammar, and that is the real shape of the unit.** Say so in `grammarIntroduced` rather than inventing a rule to fill it. What goes there is the assembly, and probably one genuine addition: the article flip described below.

---

## The teaching problem

Every A1 learner reaching this unit can produce four things separately and none of them together. They know gender. They know `le` against `une`. They know `il y a`. They know `dans` and `sur`. Describing a room is the first task in the course that requires all four inside a single breath, and the thing that breaks is not any of the four. It is the handover between them.

They will say *il y a la table dans le salon*, which is comprehensible, ungrammatical, and the exact error a phrasebook produces. Then, having been understood, they will keep saying it.

### The canDo has three clauses and they are not equal

```
"name the rooms"                       six words. The corpus holds all of them.
"and the furniture"                    about forty. The corpus holds all of them.
"and say where things are at home"     the whole lesson.
```

The first two clauses are a word list of roughly fifty items that already exist, fully respelled, fully drilled, sitting in a theme inside the seed cut. **They are the cheap half and abundance is what makes this lesson easy to get wrong.** The third clause is the only one that can fail.

### The contrast that is the actual lesson

```
first mention, introducing it     Il y a une table dans le salon.        maison.005
second mention, locating it       Le lit est près de la fenêtre.         maison.152
                                  La cuisine est à côté du salon.        maison.124
first mention, plural             Nous avons deux chambres.              maison.144
first mention, negated            Il n'y a pas d'ascenseur.              maison.154
```

`il y a` puts something into the room and takes `un`, `une`, `des`. Once it is in the room, it is known, and every sentence after that takes `le`, `la`, `les`. **The same table changes its article between the first sentence and the second**, and the corpus hands you both forms of thirty-nine objects across two themes to prove it.

This is a1.11's first-mention rule. You are not teaching it. You are giving it the one situation where a learner has to run it twice in ten seconds and can feel why it exists.

> **The reframe candidate: "First time, il y a une. After that, le, la, les."**
>
> It is a single choice made at the moment of speaking, it covers the only clause of the canDo that can fail, it is true across the whole lesson rather than one section, and it is checkable tomorrow in any room description the learner produces. Carry it verbatim across at least three sections. Measured 2026-08-07, counting exact-string occurrences: a1.01 uses its reframe 8 times, a1.21 8, a1.14 9, a1.13 12, a1.17 12, a1.22 13. Anything in that range is defensible; three is the floor.

Alternatives considered, and why they lose. Record your own rejections the way `mois-terms.ts` does:

- *"Every room has a gender."* True, and it is a1.03's rule, not yours. It is also not a choice the learner makes; it is a fact they look up.
- *"Say where it is, not just what it is."* Restates the canDo without telling anybody what to do differently.
- *"il y a never changes."* One narrow fact, already a1.05's, and it leaves the learner saying *il y a la table*.
- *"Learn the furniture with its article."* This is a1.22's reframe wearing new clothes ("Learn the country with its article. Everything else follows.") and it would read as a repeat to anyone who did a1.22 four units ago.

### What the learner arrives with

- **a1.03 Noun Gender.** Fifty-two feminine and fifty-eight masculine nouns is as close to an even split as this course gets, which makes `maison` an unusually fair place to drill gender. Use it.
- **a1.04 / a1.11 the articles.** The definite-against-indefinite contrast is the lesson. a1.11 also gave them `des` and the reduction to `de` under negation.
- **a1.05 Subject Pronouns** gave them `il y a` as an impersonal frame.
- **a1.21 Prepositions of Place** gave them the entire locative apparatus including both contractions. **Name it as a rule they already have and show it working on a room, rather than teaching it cold.**

**a1.21 transfers exactly** and this is the friendliest handover in the A1 band: a1.21's scene is somebody looking for keys, and its reading passage is called "The Flat". It already used `fr.a1.maison.124` and `fr.a1.objets.122` as its own evidence. You are the room those prepositions were learned for.

**a1.11's rule is where it gets subtle**, and that is the trap. a1.11 taught first-mention against second-mention on abstract examples. Here the two mentions are ten seconds apart in the same description, and the learner has to switch article mid-paragraph. Say out loud that this is the same rule, by name, with a1.11's own framing beside yours. A rule a learner meets twice without being told it is the same rule becomes two rules they half-remember.

### The four other things worth naming

- **`chambre` is a bedroom and nothing else.** It is not "room". English speakers reach for it constantly for any room in the house. `fr.a1.maison.002` is glossed "the bedroom" correctly; the failure is in production, not in the card.
- **The word for "room" is `la pièce`, and it is not in this theme.** See the corpus section: this is the one genuine authoring job in the whole lesson, and `pièce` is a faux-ami carrying coin, play and part as well as room.
- **`la salle de bain` and `les toilettes` are two rooms in France and usually one in an English-speaking house.** `fr.a1.maison.010` and `.011` both exist. This is a real-world fact a learner needs before they ask where something is, and it costs one card.
- **`il n'y a pas DE`, never `pas un`.** `fr.a1.maison.154` is your evidence: "Il n'y a pas d'ascenseur dans l'immeuble". a1.11 and a1.18 both taught the reduction. One `commonErrors` entry, not a section.

### What is deliberately left to its neighbours

- **Housework verbs** are `a1.25 "Daily Routine"`, whose canDo is "describe their day from getting up to going to bed". `fr.a1.maison.121-123` (`faire la vaisselle`, `faire le lit`, `mettre la table`) and sentences 126, 130, 142, 147, 153 are all in that space. **They may appear as reading and listening context and may be released by a tranche as review cards. They may not be taught, drilled or quizzed as the lesson's content.**
- **Food and drink in the kitchen** are `a1.23 "Food Vocabulary"` (theme `nourriture`, currently 0 rows in the seed) and `a1.29 "The Partitive Articles"` (theme `cuisine`, 425 rows). The kitchen is your room. What is in the fridge is not. `fr.a1.maison.145` "Le frigo est vide" is exactly the right depth.
- **Renting, moving and the building** are partly `a2`. `fr.a1.maison.057 le déménagement` and `.058 emménager` are in your theme and are legitimately yours; `le loyer` is not in `fr.a1.maison` at all (it lives in `fr.a1.argent-quotidien.080` and `fr.b1.maison.023`), and `l'étage`, `le rez-de-chaussée`, `l'ascenseur` and `l'aspirateur` are all `fr.a2.maison` rows. **Do not pull a2 rows into an a1 lesson.** `fr.a1.maison.150` "Le loyer est cher dans ce quartier" may appear as context.
- **Prepositions as a system** are a1.21. Apply them, show them on a room, and do not build a section that re-explains the contraction.
- **Adjective agreement** is a1.13 and a1.14. `fr.a1.maison.131` "Les rideaux sont bleus dans le salon" is a gift for the reading passage and is not a place to re-teach the plural `-s`.

Be specific about the split when you write the test. a1.09 shows a day name inside a full date in its reading passage and drills none of them; its test enforces that by scoping the assertion to production surfaces. **A guard written over every string in the lesson fires on legitimate context and gets deleted by the next author**, which is worse than not writing it.

---

## The corpus

### What you author

Almost nothing. The measured count is one to four rows.

```
la pièce      ABSENT from `maison` in both copies.  Four rows exist elsewhere and
              none of them is the room sense:
                fr.a1.argent-quotidien.055   "la pièce"  the coin
                fr.a2.economie.007           "la pièce"  the coin
                fr.sons.faux-amis.020        "la pièce"  the faux-ami card
                fr.sons.noms-essentiels.142   "la pièce"
              Authoring it into `maison` at 156 is legitimate and is probably
              correct: the canDo says "name the rooms" and the theme has room
              names but not the word for room. It does not collide, because
              flashhub keys per theme.
```

Everything else you would reach for exists. Verified absent from `fr.a1.maison` and present elsewhere: `l'étage` (`fr.a2.maison.014`), `le rez-de-chaussée` (`fr.a2.maison.015`), `l'aspirateur` (`fr.a2.maison.006`), `la nappe` (`fr.a2.maison.012`), `le bureau` as a desk (eight rows, none of them in a home sense), `le tableau` as wall art (four rows, all classroom or museum). **The a2 rows are not yours.** If the lesson genuinely needs a desk in a bedroom, author it; do not import from a2.

If you author:

- ids continue `fr.a1.maison` from **156**. Confirm with the probe.
- **Headword shape: articled, definite.** That is what all 116 non-sentence `maison` rows do (`la table`, `le lit`, `l'armoire`), and consistency inside a theme matters more than the choice. Note this is the opposite of `objets`, which is uniformly indefinite. Do not mix.
- **No two non-sentence items in one theme may share an `fr`.** `fr.a1.maison` has zero duplicates today. `la pièce` does not collide with anything in `maison`. Check through the real comparison in `flashhub-coverage.test.ts`, not a hand-written article strip.
- **`la pièce` is a gendered single-word noun and it ends in `-e`.** It joins a1.03's measured ending population, and `a1-03-genre.test.ts` re-measures twenty printed figures on every run. a1.22's country nouns already forced a1.03 to v3 once, and a1.11's corpus additions broke a1.03's measured `-e` statistic. **Check through the real `endingPopulation` and withdraw rather than argue.** One row is unlikely to move a figure, and "unlikely" is not the standard.
- every item must be reachable: named by a section, or released by a `deckTranche` and carrying a `flashcard` drill.

### The respelling repair list

Two separate defects, and they are different sizes.

**The article casing, 9 rows.** The theme's convention is a lowercase two-letter or three-letter article followed by the stressed word: `lah`, `luh`, `lay`. Measured across the 96 rows whose respelling carries a leading article: `luh` 53, `lah` 33, `lay` 1, and **`la` 9**. The nine odd ones out:

```
042  la commode              la ko-MOD           ->  lah ko-MOD
043  la table basse          la TABL BAS         ->  lah TAHBL BAHSS
048  la poubelle             la poo-BEL          ->  lah poo-BEHL
051  la cheminée             la shuh-mee-NAY     ->  lah shuh-mee-NAY
054  la serrure              la seh-RÜR          ->  lah seh-RÜR
055  la sonnette             la so-NET           ->  lah so-NEHT
056  la boîte aux lettres    la BWAHT oh LETR    ->  lah BWAHT oh LEHTR
059  la pelouse              la puh-LOOZ         ->  lah puh-LOOZ
060  la clôture              la kloh-TÜR         ->  lah kloh-TÜR
```

Repair the article on all nine. The vowel changes shown on the right (`BEL` to `BEHL`, `NET` to `NEHT`) are a second, separate question and the theme is inconsistent on them; **do not fold a vowel rewrite into an article repair**, and say in your corpus header which you did.

**The nasals, 18 rows, and a systemic finding you must not overreact to.** Run through the real `hasPlainNasalFor` on 2026-08-07:

```
theme       rows respelled   carrying ⁿ   flagged
maison             112            0          18
corps              191            0          50
objets             170            0          46
sons.couleurs       16            3           0
sons.nasales         8            5           0
```

**The superscript convention is honoured in the `sons.*` themes and is absent from the whole `fr.a1.*` bulk-import wave.** Not just yours. This is a corpus-wide condition, not a defect you introduced or can fix, and **the suite is green at 2302 tests today**, which tells you no test runs that checker over the whole bundle. It runs per lesson, over the rows the lesson names.

So the rule for you is precise: **any of these 18 that your lesson names must be repaired, or your own test goes red. The ones you do not name are not your problem and you must not take on `objets`.**

```
001  la maison          lah meh-ZOHN         ->  lah meh-ZOHⁿ
003  le salon           luh sah-LOHN         ->  luh sah-LOHⁿ
018  le jardin          luh zhahr-DAN        ->  luh zhahr-DAⁿ
033  le plafond         luh plah-FOHN        ->  luh plah-FOHⁿ
039  le balcon          luh bahl-KOHN        ->  luh bahl-KOHⁿ
044  le coussin         luh koo-SAN          ->  luh koo-SAⁿ
047  le portemanteau    luh por-tuh-mahn-TOH ->  luh por-tuh-mahⁿ-TOH
049  l'interrupteur     lan-tay-rüp-TUR      ->  laⁿ-tay-rüp-TUR
057  le déménagement    luh day-may-nazh-MAHN -> luh day-may-nazh-MAHⁿ
058  emménager          ahn-may-na-ZHAY      ->  ahⁿ-may-na-ZHAY
066  le torchon         luh tor-SHOHN        ->  luh tor-SHOHⁿ
077  l'appartement      lah-par-tuh-MAHN     ->  lah-par-tuh-MAHⁿ
081  la véranda         lah vay-rahn-DAH     ->  lah vay-rahⁿ-DAH
093  le compteur        luh kohn-TUHR        ->  luh kohⁿ-TUHR
099  le paillasson      luh pah-yah-SOHN     ->  luh pah-yah-SOHⁿ
100  l'ampoule          lahn-POOL            ->  lahⁿ-POOL
112  la télévision      lah tay-lay-vee-ZYOHN -> lah tay-lay-vee-ZYOHⁿ
096  la panne           lah PAHN             ->  PROBABLE FALSE POSITIVE. Verify.
```

**`la panne` is almost certainly the checker's known false-positive class**, the same one that flags `jaune` and `automne`: `panne` is /pan/ with a real /n/ and no nasal vowel at all. §3 of the invariants records `jaune -> ZHOHN` and `automne -> o-TON` as flagged and correct. "Fixing" `panne` with a superscript teaches a sound that is not there. **Verify by hand, choose a form that avoids a token-final vowel-plus-N if you must name it at all, and write in your corpus header that you did and why.** If your lesson does not name `la panne`, leave it alone and say so.

**Also know the checker's other blind spot before you trust this list.** `hasPlainNasalFor` cannot see a word-internal nasal, so `luh SHAHNBR` (`la chambre`, 002) and `lah kwee-ZEEN` and `lah LAHNP` (`la lampe`, 025) and `luh SANTR` (`le cintre`, 075) are not in the flagged list and `la chambre` and `la lampe` are wrong. **If your lesson names them, assert the superscript on them BY NAME as well as calling the shared checker.** `la chambre` is a core room word and will certainly be in your lesson.

Cross-theme variants the probe surfaced on words near this lesson. §9 says repair only what breaks a stated rule; a variant is not a violation. None of these is in `fr.a1.maison`, so **none of them is yours to repair**. They are listed so you do not think you found something:

```
le voisin      seven different respellings across seven themes
le loyer       five
le bureau      four
l'immeuble     three
la pièce       three, all in the coin sense
```

### The theme

`a1.26` declares `["maison"]` only. 363 published, 363 in the seed, inside the cut. **There is no theme decision to make**, which is the first time in this series that has been true. Do not create `mobilier`; the probe confirms it is empty in Postgres, and `maison` already holds the furniture.

Report what your item choices mean for **`a1.25 "Daily Routine"`** and **`a1.30 "A1 Review"`**, which have no lessons yet. a1.25 will want the housework verbs sitting in your theme, and a1.30 will want to re-serve your rooms.

---

## Designing this for a learner, on a phone

Layout rules are in `A1-BUILD-INVARIANTS.md` §2. What is specific to this lesson:

- **`cardDeck` for the rooms and the furniture.** One item per card, French large, English small, respelling under it. `ownsLayout()` gives `cardDeck` the viewport, and a furniture word is a one-word card, so `size: 'xl'` is safe here in a way it is not anywhere a sentence appears. **`xl` is read by `density.logic.ts` as a 12-word cap on every string in the section**, which is fatal the moment a card carries an example sentence. This cost a session on a1.01.
- **The article flip is a PAIR and belongs on one screen.** `Il y a une table dans le salon.` directly above `La table est près de la fenêtre.`, same object, two articles, marked. **Separating them across two cards destroys the teaching**, because the whole point is that one object changed its article between two consecutive sentences. Use a `tapTable` with two rows, or a `cardDeck` card carrying both lines. **This is the layout the test must assert.**
- **`groupDrill` for sorting furniture into `le` and `la`.** Fifty-two feminine against fifty-eight masculine is the most even gender split available in this corpus, so this drill is unusually fair here and it makes a1.03 pay off. **A `groupDrill` control page carries `items: []` explicitly and no `size`**, and an `xl` groupDrill must never stack words and a check in one group.
- **Rooms want a `tapTable` walking through the house**, not six separate cards. `tapTable` is not in `ownsLayout()` and renders inside a scrolling page, which is correct for a six-row grid. A learner needs the shape of the set.
- **A reference sheet with the article flip and the room list.** It is what a learner returns to during a1.25 and a1.30. Wire the `sheetId` early.
- **Do not use a `cheatSheet` block inside a `sheets[]` entry.** It draws its title and nothing else. a1.13 ships that defect twice, at `sheet.a1.13.forms` and `sheet.a1.13.invariable`, and it is known debt rather than a code fix. Use `table` and `teach` blocks. Verify by rendering, not by reading the schema.
- **Do not invent a floor plan or a labelled house diagram.** No component draws one. `lesson-contract.test.ts` **does not check `imageRef`**, so an authored diagram field is schema-valid, passes CI, and renders nothing. This project has lost a session to exactly that class of defect. A `tapTable` walking room by room is what actually draws.
- **A reading passage is ONE BLOCK.** `PassagePage` splits on `/(?<=[.!?»])\s+/`, so an authored newline is silently discarded. A room-by-room description is the natural passage here and the temptation to paragraph it is strong.
- **The flex belongs to a wrapper View, never to the Text**, or the tail is cut while the audio speaks it in full. Copy `FrenchLine` in `LessonDeck.tsx`.
- **Three term chips per section, maximum.** The renderer shows three.

### The scene

The learner is being shown a flat. Or standing in a friend's kitchen being asked to put something away. They know every word in the room. They say *il y a la table dans le salon*, or they point and say *table*. The other person understands completely, answers in English, and starts naming things for them, slowly, the way you would for somebody who does not have the words. They have all the words.

Two candidate beats:

1. **The flat viewing.** The agent asks what they think of the place. They produce a string of nouns with the wrong articles. The agent switches to English and starts pointing. Sharp, because the learner knows every single word and the failure is entirely in the handover between systems.
2. **Being asked where something goes.** They are helping unpack. Somebody asks where the plates live. They say *dans le placard* correctly, then cannot say *il y a un placard dans la cuisine* when asked which cupboard, and the conversation gets handed to somebody else.

**The first is sharper**, because the vocabulary was never the problem and the learner can tell it was not, which is the exact frustration this lesson resolves. Use the second in the `scenario` section, where the learner produces.

Extract beats to a named `SCENE_BEATS` const, give every beat its own `size` (prose at `md`, the choice and the break at `lg`) and its own `audio`, and keep the break body between 24 and 40 words. The natural choice beat is the moment the agent starts naming the furniture, before the learner is told anything.

An A1 scene opens on somebody being misread as a person, not on being misunderstood. Every word correct, and the interaction still goes wrong. Nobody is corrected and nobody is unkind; the plan simply does not happen. If your scene ends with someone being told they made a mistake, it is a sons scene wearing A1 clothes.

---

## Shape

v2 lesson: `acts`, a stable `id` on every section, `reframe`, `deckTranche`, `terms`, `errorTriggers`, `drills`, round-based quiz. Follow the v2 spine in `ealch-admin/LESSON-GENERATION-PROMPT.md`.

Recent lessons run 25 to 28 sections. **26 to 28 is your range, and the weight belongs on the article flip and the assembly, not on the furniture.** The corpus holds roughly fifty nameable objects and naming them is the cheap half. If the rooms take three missions and the flip takes six, that is correct. **Do not stretch the deck because the vocabulary looks abundant**; abundance is exactly what makes this lesson decay into a word list.

```
act 1  Every Word, Still Wrong          scene, goals
act 2  Six Rooms                        the rooms, a tapTable walk, gender sorting
act 3  What Is In Them                  the furniture decks, tranche-released
act 4  Putting It There, Finding It There   the article flip, the pair layout, il n'y a pas de
act 5  Describe Your Own Place          reading, flashcards, dictation, practice, scenario
act 6  The Exam                         quiz and roundup
```

Every act names sections that exist and no section is claimed by two acts; `lesson-contract.test.ts` fails by name on both.

### Quiz notes specific to this lesson

General rules, including the `fold()` limits, the mcq ceiling, the 40% answer-slot cap and the drill-reachability trap, are in `A1-BUILD-INVARIANTS.md` §4.

- **Every question about the flip needs two sentences in the stem.** "Which article goes with table?" has no answer. "You have just said « Il y a une table dans le salon ». Now say where it is." has exactly one.
- **`errorSpot` is your strongest format here** because the target error is a well-formed sentence that is wrong: « Il y a la table dans le salon. » Each has one repair and the repair is the reframe. `fold()` keeps a final `-e` and `-s` and strips accents, case, punctuation and all whitespace, so the article itself is testable and the accents in `fenêtre` are not.
- **`typeIn` for the gender**, because `le` against `la` survives `fold()` cleanly.
- **`listenChoose` has one job in this lesson and it is `un` against `le`.** In connected speech `il y a un placard` and `il y a le placard` are genuinely distinguishable and a learner can get it wrong. **Do not use it on the gender of a noun in isolation**, because the article is right there in the audio and the question tests nothing. A question whose answer is not in the audio, or is trivially in it, certifies a bug either way.
- **No free-text format can test a capital letter**, and no ear question can test a silent plural. Both were recommended by earlier briefs in this series and both were wrong.
- **Six rounds, 24 to 26 questions**, matching the shipped range. Each round names `targets`, and `drillForRound` fires the drill of the FIRST resolving target only, then stops. **Make each teaching drill the first resolving target of exactly one round, and assert it.** a1.05 shipped two dead drills and a1.07's first draft a third.

### Randomising the answers

The runtime already shuffles. `QuizDeckView` in `LessonRich.tsx` builds a fresh permutation per question on mount (line 1232), reshuffles on retry (line 1273), and the authored `correct` index never moves. **So the authored order is not what the learner sees, and this cuts both ways:**

- **Never write an option that refers to a position.** "Both of the above", "the first one", "neither of the last two" are meaningless once shuffled. a1.16's test asserts against this by name and yours must too.
- **Never repeat an option inside one question.** A duplicate is merely redundant in the authored order and genuinely ambiguous once shuffled, because two slots then hold the same text and only one is `correct`. a1.22 currently ships two questions with case-insensitive duplicate options; do not copy that.
- **Watch this one especially closely here.** Your natural distractor set is `le / la / un / une`, four short strings, and a question about `la table` whose options are `le, la, un, une` is fine while a question that accidentally lists `la` twice in different sentence frames is not. Compare folded, not raw.
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

Nothing in that table is close to the ceiling and nothing needs to be. **Author the correct answer into a deliberately varied slot rather than writing four plausible distractors and putting the answer wherever it landed.** The practical target is every slot between 20% and 35%, which every shipped lesson already meets. Assert it with the real validator, not a hand-rolled count.

- **Distractors must be wrong for a reason the `why` can name.** A shuffled question with three filler options teaches nothing regardless of where the answer sits. Each distractor should be an error the lesson has an `errorTrigger` for: the definite article after `il y a`, `pas un` instead of `pas de`, `chambre` for any room, the uncontracted `à le`.

### Audio brief notes specific to this lesson

- **The two halves of the flip are one take, one voice.** « Il y a une table dans le salon. » and « La table est près de la fenêtre. » recorded apart become two performances and the learner compares delivery instead of grammar. Write that into `desc`.
- **`un placard` and `le placard` must be adjacent in the same take**, because the whole `listenChoose` round rests on the two being separable and the learner needs them back to back to trust it.
- **Never record a room name in isolation for the flip section.** `salon` on its own carries no article and the article is the entire lesson.
- **`la chambre` is `lah SHAHⁿBR`, with the superscript.** The stored respelling is `lah SHAHNBR`, which the shared checker cannot see because the nasal is word-internal. Decide once, write the decision into `desc`, and do not let it be silently normalised back.

**Do not run `pnpm audio:render`.** It spends real ElevenLabs credits and `ELEVENLABS_API_KEY` is not set. A `recordingId` resolving to nothing is the correct shipping state.

---

## Wiring

Pattern and hazards are in `A1-BUILD-INVARIANTS.md` §5. Model on `author-prepositions-batch.ts` / `merge-prepositions-into-seed.ts` / `prepositions-{corpus,lesson,terms}.ts`, which is your prereq and the closest precedent. Specific to you:

- `scripts/author-maison-batch.ts`, `scripts/merge-maison-into-seed.ts`, `scripts/data/maison-{corpus,lesson,terms}.ts`, `content:maison` in `package.json`.
- **Ids start at `fr.a1.maison.156`.** Confirm with the probe. Gaps at 127 and 143 are pre-existing; do not backfill them.
- **`maison` IS in `SEED_CUT.themes`**, so the merge will change seed contents and that is correct, not a bug. It also means the seed is a complete read today, so your parity check can compare the two directly and should fail loudly if they diverge.
- **`objets` IS also in `SEED_CUT.themes`**, so any `objets` row your lesson names is already in the seed and needs no special carriage. **This is the opposite of a1.21's situation and a1.21's brief got its equivalent claim backwards, in the direction that would have shipped blank cards.** Verify it yourself against `seed-cut.config.ts` rather than trusting this line.
- **The merge script must name the lessons it must not disturb rather than counting them.** A count alone lets a one-for-one swap through.
- **Do not hand-bump `seed.version`.** It is the OTA snapshot number. See §5.
- **Never `git checkout` `seed.json`.** Reverting it discards other authors' uncommitted work. Re-run the merge scripts instead.
- **Diff the DB bodies against git before any `content:publish`.** git can run ahead of Postgres and publish then destroys the difference silently. This cost real work on 2026-07-31.
- **Run the real functions in your guards.** a1.08 shipped a hand-rolled copy of `endingPopulation` carrying a filter the real one does not have, let four rows through, and moved two of a1.03's printed cards.

---

## Your test: `ealch-v2/src/content/a1-26-maison.test.ts`

The always-required assertions are in `A1-BUILD-INVARIANTS.md` §6. Model on `a1-22-pays.test.ts` (newest) and `sons-07-elision.test.ts` (most thorough). Specific to this lesson:

- **Every room is taught and tested by name**, asserted individually rather than as a count. Name the set explicitly in a const. The one most likely to be dropped in a rewrite is `la salle à manger`, because it is the longest and the least used in a small flat.
- **The article flip is taught with both sides present**, and at least one section shows the two sentences **together on one screen**. Assert the section id and that both strings live in the same section. That flip is the lesson, and separating it is how this decays into a furniture list.
- **`chambre` is taught as a bedroom specifically**, and `la pièce` (if you authored it) as the general word. Assert both glosses. If you did not author `la pièce`, assert that no surface glosses `chambre` as "room", so the next author cannot quietly widen it.
- **`il n'y a pas de` appears with `de` and never with `un` or `une`** anywhere in the lesson.
- **a1.25's housework verbs are not taught.** Write it against production surfaces (decks, vocab, drills, quiz) rather than every string, or it fires on the reading passage's legitimate `Elle fait la vaisselle après le dîner` and gets deleted.
- **No `fr.a2.*` id appears in `itemIds`.** One line, and it stops the easiest mistake available in this theme.
- **The respelling assertion.** Import `hasPlainNasalFor` from `density.logic.ts`; never write your own. Additionally assert by name that `la chambre`, `la cuisine`, `la lampe` and `le cintre` carry the superscript, because the shared checker cannot see a word-internal nasal and all four pass it while being wrong.
- **Assert the article-casing convention over every `maison` row your lesson names**, so the nine repaired rows cannot regress and a tenth cannot appear.
- **The quiz: no positional options, no duplicate options compared folded, spread under 40% through the real validator, at most half `mcq`, every question has a `why` and a resolving `ref`, every free-text question accepts the answer it displays through the real `matchesAccept`.**
- **Assert the reframe count against an explicit constant**, not a figure derived from the lesson. A derived count compares the content to itself and passes on any rewording.
- **Assert the decision that looks like a bug.** If you leave `la panne` unrepaired because it is a false positive, assert that it is unrepaired, so the next author's "fix" goes red instead of shipping a sound that is not in the word. Same for any `maison` row you deliberately left alone, and for the deliberate divergence from `objets`. **This is the bullet people skip and it is worth the most.**

**Mutation-test before you claim it works.** Break the pair layout, drop a room, put `la` after `il y a`, change `pas de` to `pas un`, drill a housework verb, import an `fr.a2.maison` id, un-repair one of the nine article casings, add an option that says "both of the above". Confirm each one goes red. An assertion that cannot fail is worse than no assertion.

### The gates

```bash
cd ealch-v2
npx tsc --noEmit                                                    # must be 0
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
```

**Baseline measured 2026-08-07: 2302 tests, 2302 pass, 0 fail.** Re-measure before you start; it moves every time a lesson lands. Yours must not reduce whatever it is when you begin. A lesson brings roughly 60 to 80 tests. Use `node --test`, not `npx tsx --test`, which reports failures in `i18n.test.ts` and `content.logic.test.ts` that do not reproduce under the real runner. `npx tsc --noEmit` in `ealch-v2` must be 0; `ealch-admin` carries five pre-existing errors in older lesson data files and you must not add to them.

---

## UNVERIFIED

Everything below is believed and not checked. It is quarantined here so you know which parts of this brief to trust; a claim in the body reads as measured.

- **That `la panne` is a false positive rather than a real violation.** Reasoned from §3's `jaune` and `automne` precedent, not confirmed against the checker's source. Read `hasPlainNasalFor` in `density.logic.ts` before you act on it.
- **That no test runs `hasPlainNasalFor` across the whole bundle.** Inferred from the suite being green while 114 rows across three themes are flagged. If it matters, grep the test directory for `hasPlainNasalFor` and read every call site.
- **That `a1.23`, `a1.24` and `a1.25` are not being built concurrently.** All three had empty `lessonIds` at 09:00 on 2026-08-07 and none shares a theme with you. If it matters, `git log --oneline -20` and look for a new `author-*-batch.ts`.
- **That the 39-row `maison` / `objets` overlap is an accident of two import waves rather than a deliberate design.** No corpus header states either. If it matters, `git log -p --follow` on whichever data file introduced `fr.a1.objets.026` onward.
- **That `la pièce` will not move one of a1.03's twenty printed figures.** Reasoned from it being a single row, not measured. Run the real `endingPopulation` before you write it.
- **That the `maison` scenarios already in the seed do not conflict with the `scenario` section you author.** The seed carries 60 scenarios and at least one is themed `maison`; none was read. If it matters, read them before writing yours.
- **The 40% ceiling is a density-validator rule quoted from the invariants**, and the ten-lesson spread table above was computed independently rather than through that validator. The numbers are right; whether the validator counts `speak` and `tapSilent` questions as closed-format was not verified. Run the real validator.

---

## What to report

- **that this unit introduces no new grammar**, and what you put in `grammarIntroduced` instead of inventing one.
- **what the probe said about `maison`**, and confirmation that you imported rather than authored, with the count of each.
- **whether you authored `la pièce`**, how you checked it against the real duplicate comparison, and what `endingPopulation` said.
- **how you used the 39-row `objets` overlap**, or why you decided not to.
- the reframe you chose, why that one, and what you rejected.
- **your respelling repair list**: the nine article casings, which of the 18 flagged nasals your lesson named and repaired, whether you touched `la panne`, and any row you deliberately left alone.
- **which word-internal nasals you asserted by name**, since the shared checker cannot see them.
- how you taught the article flip, and the section id where a learner sees both sentences on one screen.
- how you bounded a1.25 and a1.29 without teaching them, and how the test scopes that.
- confirmation that **no `fr.a2.*` id reached `itemIds`**.
- corpus: how many items authored, how many imported, in which theme, and confirmation that the articled-definite form rule held.
- lesson: mission count, act structure, quiz size and format mix, **the measured answer-slot spread**, and confirmation that every question has a `why`.
- test count before and after, with the before figure **measured rather than taken from this file**.
- which missions you verified, by what route, and **which half of the verification you did** if adb was unavailable.
- **anything you could not verify, said plainly.** A gap you name costs an hour. A gap you paper over costs a session, and this project has lost two that way. If a claim in this file has gone stale, say so rather than working around it.

House rules that apply to every string you write: no em dashes, no "honest" or "honesty" in authored content, English instruction and context even inside French content, no grammar jargon on a learner surface, three term chips per section maximum. Do not use AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the big one", "listen to the trap", "get those two right", "this is the part that pays", "here is the catch", and anything of that register.

`*.md` is gitignored here. This file needs `git add -f`.
