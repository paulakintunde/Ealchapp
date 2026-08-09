# Build a1.26 "The House"

You are authoring an A1 lesson in Ealch, end to end. Not drafting content for review: authoring it, wiring it, proving it, and leaving it render-ready.

You have latitude on the teaching. You have none on the gates.

**Read first, in this order:**

1. **`ealch-admin/A1-BUILD-INVARIANTS.md`.** The gates, the layout traps, the wiring pattern, the respelling convention and its blind spots, the quiz rules, the house rules. Everything that does not change between lessons lives there and is not repeated here.
2. `ealch-admin/A1-LESSON-GENERATION-PROMPT.md` **Part 1**, the A1 doctrine: why an A1 lesson is not a sons lesson with different words, the register of stakes, the voice.
3. **a1.22 Pays & nationalités**, in `ealch-admin/scripts/data/pays-*.ts`. Newest lesson to ship and your quality bar. **Read `pays-corpus.ts`'s header before anything else**: it opens with six of its own brief's claims measured wrong, and it is the model for how you are expected to answer this file.
4. **a1.15 La famille**, in `scripts/data/famille-*.ts`, because it is the closest structural shape you have: a themed noun set that was almost entirely already in the corpus, so the work was curation, repair and organisation rather than authoring. Its `famille-imported.ts` / `famille-wanted.ts` split is the pattern you want.
5. **a1.21 Prépositions de lieu**, in `scripts/data/prepositions-*.ts`, because it already owns half of your `canDo` and you must not take it back. See "What is deliberately left to its neighbours".

---

## VERIFIED STATE

> Measured **2026-08-07** against Postgres (`aws-0-ca-central-1.pooler.supabase.com:6543/postgres`)
> **and** `seed.json` v19 (7,818 items, 36 lessons). Every theme number below carries both.
> **Re-run before you start**, because this track moves weekly:
>
> ```bash
> cd ealch-admin
> pnpm corpus:probe --unit a1.26 --theme maison \
>   --words "la pièce,l'étage,la salle,le sol,le seau,la poêle" \
>   --tokens "il y a,dans le salon,à côté du"
> ```
>
> If anything below disagrees with what the probe prints, **the probe wins and
> the disagreement goes in your report.**

```
a1.26  The House                 seq 29
  sub:    "La maison"
  canDo:  "Can name the rooms and the furniture and say where things are at home"
  themes: ['maison']            363 published, 363 in the seed. Fully populated.
  lessonIds: []                 you are filling this
  prereqUnitIds: ['a1.21']      Prépositions de lieu, shipped, v1, 26 sections
```

Do not change `title`, `sub` or `canDo`. All three are correct and the Den advertises them.

**Encoding note.** `title` is the English string `"The House"` and `sub` is the French `"La maison"`. That is the right way round for this schema and it is the same orientation as a1.22 (`title: "Countries and Nationalities"`, `sub: "Pays & nationalités"`). `canDo` contains no curly apostrophe and no non-ASCII character; copy it byte-for-byte anyway.

> **The spine source file disagrees with the database.** `scripts/author-full-curriculum-spine.ts:437` declares `title: 'La maison'` and `sub: 'rooms, furniture & household items'`. Postgres and the seed both hold `title: 'The House'`, `sub: 'La maison'`. **The database is what the Den renders, so the database wins.** Do not "fix" the unit to match the spine script, and do not re-run the spine authoring script as part of your build. Report the drift; do not resolve it.

### The track

```
a1.01  Les salutations            v9   21 sections
a1.02  Les nombres 1-20           v2   24
a1.03  Le genre des noms          v3   26
a1.04  Les articles définis       v3   24
a1.05  Les pronoms sujets         v4   22
a1.06  Le verbe être              v4   26
a1.07  Le verbe avoir             v6   27
a1.08  Les jours de la semaine    v7   24
a1.09  Les mois de l'année        v1   23
a1.10  Les saisons & la météo     v4   26
a1.11  Les articles indéfinis     v1   23
a1.12  L'heure                    v3   30
a1.13  Les couleurs               v2   26
a1.14  Les adjectifs de base      v1   25
a1.15  La famille                 v4   26
a1.16  La place de l'adjectif     v1   25
a1.17  Les adjectifs possessifs   v4   27
a1.18  La négation                v3   28
a1.19  Questions oui / non        v3   27
a1.20  Les mots interrogatifs     v2   27
a1.21  Prépositions de lieu       v1   26
a1.22  Pays & nationalités        v2   28
a1.27  Les nombres 21-100         v3   28
a1.28  Les grands nombres         v7   29
a1.29  Les articles partitifs     v1   23
```

**25 A1 lessons ship.** a1.23 (nourriture), a1.24 (corps), a1.25 (routine) and a1.30 (Bilan A1) are declared and empty. Nothing else is in flight in the `maison` theme as this brief is written, but **check `git status` and the id count before you claim a range**: a1.19 took a1.20's ids mid-build and the collision guard could not see it.

Your models, verified in the seed:

```
a1.22.l1   28 sections   6 acts   7 quiz rounds   26 questions   12 mcq / 7 typeIn / 3 errorSpot / 2 speak / 2 listenChoose
a1.15.l1   26 sections   6 acts   6 quiz rounds   24 questions   11 mcq / 6 typeIn / 3 errorSpot / 2 listenChoose / 1 tapSilent / 1 speak
a1.21.l1   26 sections   6 acts   6 quiz rounds   24 questions   10 mcq / 7 typeIn / 4 errorSpot / 2 listenChoose / 1 speak
```

---

## THE VOCABULARY YOU WERE ABOUT TO AUTHOR ALREADY EXISTS. ALL OF IT.

The request that produced this brief asked for **50 words**. The theme holds **111 words, 5 phrases and 37 sentences at a1**, every one of them already published and already in the seed.

```
theme maison            published in Postgres    in seed.json
  fr.a1.maison                  153                   153      count=153  max=155  gaps 127, 143
  fr.a2.maison                   44                    44      NEXT FREE fr.a2.maison.046
  fr.b1.maison                   79                    79
  fr.b2.maison                   87                    87
  TOTAL                         363                   363
```

**`maison` IS in `SEED_CUT.themes`** (`scripts/seed-cut.config.ts:69`). That is why the two columns match exactly, and it is the reason you can trust the seed here in a way three earlier briefs could not trust it for their themes.

**Your job is curation, repair and organisation. It is not authoring a word list.**

Concretely, of the 111 a1 words:

| group | n | examples |
|---|---|---|
| rooms and spaces | 18 | la chambre, le salon, la cuisine, la salle de bain, les toilettes, la salle à manger, la cave, le grenier, le couloir, le palier, le balcon, la véranda |
| dwelling types | 5 | la maison, l'appartement, le studio, la villa, le garage |
| structure and openings | 15 | la porte, la fenêtre, le mur, le toit, le plafond, le sol, l'escalier, le volet, la vitre, la poignée, le portail |
| furniture | 22 | le lit, la table, la chaise, le canapé, le fauteuil, l'armoire, la commode, l'étagère, le tiroir, le placard, le buffet, le meuble |
| soft furnishings and decor | 9 | le tapis, le rideau, la couverture, le drap, l'oreiller, le coussin, le vase, le cadre, la moquette |
| kitchen appliances | 8 | le frigo, le four, le micro-ondes, la cuisinière, le lave-vaisselle, la machine à laver, le sèche-linge, la télévision |
| tableware and cookware | 9 | la fourchette, le couteau, la cuillère, l'assiette, le verre, la tasse, le bol, la casserole, la poêle |
| cleaning and laundry | 13 | le balai, le seau, la serpillière, l'éponge, le torchon, le cintre, le panier à linge, la poubelle |
| utilities and faults | 9 | l'électricité, le gaz, l'eau chaude, le chauffage, le compteur, le robinet, la fuite, la panne |
| garden and outside | 5 | le jardin, la pelouse, la clôture, la barrière, la cheminée |
| chore phrases | 3 | faire la vaisselle, faire le lit, mettre la table |

**You must not re-author any of these.** `flashhub-coverage.test.ts` treats two non-sentence rows sharing an `fr` inside one theme as one card served twice, and the build fails.

### What IS genuinely absent, verified both ways

Exactly one headword that this lesson needs does not exist anywhere in theme `maison`:

```
la pièce      7 rows exist, in argent-quotidien, rp-achats, rp-maison, economie,
              faux-amis, noms-essentiels and voyelles. ZERO in theme maison.
              flashhub keys per theme, so authoring it at fr.a1.maison.156 is SAFE.
```

That is the whole authoring job: **one word.** Everything else is import.

### The word that looks absent and would collide

```
l'étage       fr.a2.maison.014  "l'étage"  theme=maison  respell=lay-TAHZH  inSeed=Y
```

`l'étage` is not in `fr.a1.maison`, so a probe scoped to the a1 band reports it missing. **It is in your theme.** Authoring `l'étage` at an a1 id would put two non-sentence rows with the same `fr` in theme `maison` and fail the build. If you want `étage` on a card, **import `fr.a2.maison.014`**. `fr.a1.maison.155` ("La salle de bains est au premier étage.") already gives you the word in a sentence for free.

The same check applies to `l'ascenseur` (`fr.a2.maison.016`) and `le loyer` (`fr.b1.maison.023`), both of which are in theme `maison` and both of which appear in a1 sentences you may want (154, 150).

### Why three earlier briefs got this wrong, and the new way to get it wrong

The old trap was measuring `seed.json`, which is a cut. That trap is not live here: `maison` is inside the cut and both numbers agree.

**The trap that is live here is the accent.** Probing `--words "piece"` returns `ABSENT in every article form. Safe to author.` Probing `--words "pièce"` returns seven rows. `poele` reports absent; `poêle` returns three rows including one of your own (`fr.a1.maison.062`). The probe normalises to NFC but it does not fold accents, so an ASCII search term silently misses every accented headword. **Type your search terms with their accents, and re-probe anything the tool calls absent if the French word carries a diacritic.** This one nearly went into this brief as a finding.

### Twelve of your rows are already claimed by shipped lessons

Not a blocker, but the deck you build must know it. These items are already in another lesson's `itemIds`:

```
a1.03  Le genre des noms      077 l'appartement · 016 la chaise · 020 le mur · 015 la table
                              001 la maison · 022 la clé · 019 l'escalier · 026 l'armoire · 011 les toilettes
a1.04  Les articles définis   001 la maison · 015 la table · 077 l'appartement · 011 les toilettes
a1.11  Les articles indéfinis 005 Il y a une table dans le salon.
a1.05  Les pronoms sujets     005 Il y a une table dans le salon.
a1.17  Les possessifs         101 Notre maison a un grand jardin.
a1.21  Les prépositions       124 La cuisine est à côté du salon.
a1.29  Les articles partitifs 124 La cuisine est à côté du salon.
```

Nine of your best-known nouns were the worked examples in a1.03's gender lesson. Treat them as **recall, not introduction**: the learner has met `la maison`, `la table`, `la chaise`, `le mur` and `les toilettes` and knows their articles. Naming that out loud is better teaching than pretending they are new, and it buys you screen budget for the words that are new.

---

## The teaching problem

A home lesson at the end of A1 arrives with almost nothing left to teach grammatically. a1.03 gave the learner gender, a1.04 and a1.11 gave the articles, a1.16 gave adjective placement, a1.17 gave the possessives, and a1.21, this unit's direct prerequisite, gave the entire locative system: `sur`, `sous`, `dans`, `devant`, `derrière`, `à côté de`, and the contractions `à + le = au` and `de + le = du`. a1.21's fifth act is literally titled "Say where things are". So the second half of this unit's `canDo` is already delivered, and a lesson that re-teaches it is a worse copy of its own prerequisite.

What is left is the part the grammar cannot reach: **English says "room" and French makes you choose which kind.** That choice is not derivable from anything the learner already has, it is wrong in a way that is socially visible rather than merely incorrect, and it is the one thing in this unit that no other unit owns.

### The canDo has two clauses and they are not equal

```
"Can name the rooms and the furniture"        ~75% of the lesson. This is yours.
"and say where things are at home"            ~25%, and it is a1.21's rule REUSED,
                                              not re-taught. It is the production
                                              surface, not the teaching surface.
```

The actual lesson is the three-way split of English "room":

```
English            French               why
─────────────────────────────────────────────────────────────────────────────
"my room"          ma chambre           chambre is a BEDROOM and nothing else
"a room" (unit)    une pièce            the countable room of a floor plan
"the ___ room"     la salle de ___      the room named by what happens in it
                                        salle de bain, salle à manger
```

And the consequence a learner meets in week one: **`la salle de bain` is where the bath is, `les toilettes` is where the toilet is, and in most French homes they are two different rooms.** Asking for one when you want the other is not a grammar error. It gets you a towel.

> **The reframe candidate: "Never say 'room'. Say which room."**
>
> It is a choice the learner makes in the moment rather than a rule about the language, it is true of the whole lesson rather than one section (it governs the room set, the furniture-by-room organisation, the scene, the reading passage and the scenario), and it is verifiable the next time they are in somebody's flat. Carry it verbatim across at least three sections; a1.01 uses eight, a1.08 seven, a1.09 eight.

> **What was rejected, and why, so you do not re-litigate it:**
>
> - *"Learn the noun with its article."* True, and owned twice over: it is a1.03's and a1.04's lesson, and a1.22 already shipped it as a reframe three units ago ("Half A Word Is Not A Word"). Repeating it here teaches nothing new and makes the track read as circular.
> - *"Everything at home has a gender."* Same objection, plus it is a fact about the language rather than an action.
> - *"Put the thing in the room."* This is a1.21's reframe wearing furniture. Its own is "One word goes straight onto the noun. A phrase needs de first."
> - *"Learn the word with the room it lives in."* Close, and it is a good ORGANISING principle for your decks, but it is not a decision the learner makes under pressure and it is not falsifiable in an interaction. Use it as structure, not as the reframe.

### What the learner arrives with

- **a1.03** gave gender and the ending heuristics, and used nine of your nouns as its worked examples.
- **a1.04 / a1.11 / a1.29** gave `le/la/les`, `un/une/des` and `du/de la`.
- **a1.16** gave adjective placement, including the pre-nominal `grand` and `petit` that saturate your corpus sentences.
- **a1.17** gave the possessives, including `ma chambre`.
- **a1.21** gave the whole locative system and the `au` / `du` contractions.
- **a1.05** introduced impersonal `il`, explicitly including `il y a`. Verified: `grammarIntroduced` on a1.05.l1 reads "Impersonal il, in il y a, il faut and the weather and clock frames", and a1.05 carries it as a `term`.

**a1.21's locative system transfers exactly.** `Le lit est près de la fenêtre` (152), `La cuisine est à côté du salon` (124), `La salle de bain est au bout du couloir` (134) are already in your corpus and every one of them is a1.21's rule applied to your nouns. Name it as a rule they already have. Do not derive it again.

**`il y a` also transfers, and it is the frame this lesson actually runs on.** Four of your sentences use it (005, 125, 139, 141) and so does the existing scenario, three turns out of four. Treat it as banked from a1.05 and use it freely; do not spend a section deriving it.

**Where the transfer stops is the lexicon, and that is the trap.** A learner who has `chambre = room` from a bilingual list will produce `Je suis dans ma chambre` for "I'm in the living room" with perfect grammar. Nothing in a1.03 through a1.21 catches that, because nothing about it is grammatically wrong. Say so out loud, by name. A contradiction a learner discovers alone is a language they decide is arbitrary.

### The four other things worth naming

- **`les toilettes` is plural and has no singular.** Row 011 already stores it as `les toilettes`, `gender: f`. It is the only room in the set that behaves this way, and it collides directly with the `salle de bain` distinction, so teach the two together or neither.
- **`la salle de bain` and `la salle de bains` are both in your corpus.** Row 010 and sentence 134 use the singular; sentences 144 and 155 use the plural. Both spellings are attested in real French and both are correct. **Your corpus is not allowed to show a learner both without saying so.** See the repair list.
- **The appliance compounds are a free gender lesson.** `le lave-vaisselle`, `le sèche-linge`, `le micro-ondes` and `le lave-linge` pattern are verb-plus-noun compounds and all masculine; `la machine à laver` and `la cuisinière` are not compounds and are feminine. That is a sortable rule with eight corpus rows behind it, which is enough for a `groupDrill`. It is also the one place in this lesson where gender is predictable, which is worth a sentence given how much of A1 has told the learner it is not.
- **`la cuisine` is both the room and the cooking.** Row 104 glosses it "the kitchen" only. The double sense is real, it is one line of copy, and it pays off in a1.23 (nourriture). Mention it; do not build a section on it.

### What is deliberately left to its neighbours

- **Prepositions of place are `a1.21`.** The temptation is maximal, because the second clause of your own `canDo` names them and a third of your corpus sentences contain them. **They may appear as CONTEXT everywhere**: in reading passages, in the scene, in the scenario, in dictation sentences, in `why` strings. **They may not be TAUGHT**: no section may have a preposition as its teaching point, no `term` may define one, and no quiz question may have a preposition as its correct answer. Scope that assertion to production surfaces, not to every string, or it will fire on `Le lit est près de la fenêtre` and the next author will delete it.
- **Possessive adjectives are `a1.17`.** `ma chambre`, `mon frère`, `nos affaires` appear throughout your sentences. Context only.
- **Adjective placement is `a1.16`.** `un grand lit`, `la petite chambre`, `un canapé confortable` are all in your corpus. Context only.
- **Household chores as conjugated verbs are `a1.25` (routine quotidienne).** You have three fixed phrases (121 `faire la vaisselle`, 122 `faire le lit`, 123 `mettre la table`) and they are yours **as phrases**. Do not conjugate them, do not build a verb paradigm, and do not take `ranger`, `balayer` or `passer l'aspirateur`, which are in your sentences (126, 130, 142, 153) as context and belong to a1.25.
- **Food is `a1.23`.** Tableware and cookware are yours. What goes on the plate is not.
- **Renting, moving and the landlord relationship are A2 and B1.** `le déménagement` (057), `emménager` (058), `le loyer` (150), `Nous déménageons ce week-end` (151) exist at a1, and `fr.b1.maison` holds 31 rows of tenancy vocabulary. Use 150/151 as reading or dictation context if you want the register. Do not teach the topic.

---

## The corpus

### What exists, measured both ways

```
                              Postgres    seed.json
theme maison, all bands          363         363
  fr.a1.maison                   153         153
    kind=word                    111         111
    kind=phrase                    5           5
    kind=sentence                 37          37
  rows carrying respell          112         112
  rows carrying voiceflash       114         114
  rows carrying dictation         17          17
  rows carrying review            36          36
  ids in use             001-126, 128-142, 144-155      gaps: 127, 143
  NEXT FREE ID                   fr.a1.maison.156
```

**Duplicate check, run and clean.** Zero non-sentence rows share an `fr` inside theme `maison`, across all four bands. Zero sentences share an `fr`. Zero a1 headwords collide with an a2/b1/b2 row on the bare noun. The theme is in good shape and **you are the author most likely to break that**, because you are the first to add to it in a while.

### The headwords

```
EXISTS, IMPORT IT (111 words + 5 phrases). Full id list in the group table above.
  Every one is published, in the seed, and carries `flashcard`.
  114 of 116 carry `voiceflash`, so `practice` with skill 'speak' is safe on
  almost anything. The two without it are 006 `j'habite` and 009 `ma baraque`.
  17 carry `dictation`: 101, 102, 124, 125, 126, 128-139. Every one is a
  SENTENCE, so your dictée runs in sentence mode, not word mode.

GENUINELY ABSENT, AUTHOR IT (1 word)
  la pièce      fr.a1.maison.156    f    lah PYESS    "the room (as a unit)"
                Four competing respellings exist elsewhere in the corpus
                (lah PYESS · PYESS · lah PYES · LAH PYEHS). `lah PYESS` matches
                two of them including fr.sons.noms-essentiels.142, and it is
                the house `lah` article form. Use it.

DO NOT AUTHOR, ALREADY IN YOUR THEME AT ANOTHER BAND
  l'étage       fr.a2.maison.014     import it or use sentence 155
  l'ascenseur   fr.a2.maison.016     import it or use sentence 154
  le loyer      fr.b1.maison.023     leave it; the topic is B1's
```

**You are importing, not authoring.** If your build report says otherwise, something has gone wrong and you should stop and re-probe rather than proceed.

### The respelling repair list

Nine defects, all measured, all visible to a learner in the flashcard hub. Repair what breaks a stated rule; a variant that merely differs is not a violation.

**A. The superscript nasal is missing from every row in the theme.** Zero of 112 respelled `maison` rows carry `ⁿ`. Corpus-wide, 893 rows do, across 22 themes, so the convention is live and this theme is simply un-migrated. **27 rows need it:**

```
validator-flagged (17)   001 la maison    lah meh-ZOHN   -> lah meh-ZOHⁿ
                         003 le salon · 018 le jardin · 033 le plafond
                         039 le balcon · 044 le coussin · 047 le portemanteau
                         049 l'interrupteur · 057 le déménagement · 058 emménager
                         066 le torchon · 077 l'appartement · 081 la véranda
                         093 le compteur · 099 le paillasson · 100 l'ampoule
                         112 la télévision
```

```
NOT flagged, and wrong anyway (10)   the checker cannot see a word-internal
                                     nasal, so every one of these PASSES today

  002 la chambre            lah SHAHNBR       -> lah SHAHⁿBR
  025 la lampe              lah LAHNP         -> lah LAHⁿP
  064 la planche à découper lah PLAHNSH ...   -> lah PLAHⁿSH ...
  067 l'éponge              lay-POHNZH        -> lay-POHⁿZH
  072 la pince à linge      lah PANSS ah LANZH-> lah PAⁿSS ah LAⁿZH
  073 le fil à linge        luh FEEL ah LANZH -> ... LAⁿZH
  074 le panier à linge     luh pah-NYAY ah LANZH -> ... LAⁿZH
  075 le cintre             luh SANTR         -> luh SAⁿTR
  107 le micro-ondes        luh mee-kroh-OHND -> luh mee-kroh-OHⁿD
  111 le sèche-linge        luh sesh-LIHNZH   -> see C below
```

**B. One validator false positive. Leave it alone and say you did.**

```
  096 la panne   lah PAHN   FLAGGED, and CORRECT as written.
                 panne is /pan/. The n is a real consonant followed by a
                 vowel in the French spelling, which is the documented
                 false-positive class (§3: jaune, automne). Adding ⁿ here
                 would teach a nasal vowel that is not in the word.
```

**C. `linge` has two respellings inside one theme.**

```
  111 le sèche-linge   luh sesh-LIHNZH   contradicts 072, 073 and 074, which
                       all use LANZH for the same word.
                       -> luh sehsh-LAⁿZH
```

**D. `vaisselle` has two respellings inside one theme.**

```
  068 le produit vaisselle   luh pro-DWEE veh-SEHL
  109 le lave-vaisselle      luh lahv-veh-SELL
  121 faire la vaisselle     fehr lah veh-SELL
                       Pick one. veh-SEHL matches the house EH convention
                       and is the minority form, so this is a two-row change.
```

**E. `table` has two respellings inside one theme.**

```
  015 la table       lah TAHBL      \
  123 mettre la table  ... lah TABL  > 043 is the odd one out
  043 la table basse   la TABL BAS  /
                       -> la table basse: lah TAHBL BAHSS
```

**F. Nine rows use a bare `la` where the theme's other 35 use `lah`.** One authoring batch, ids 042 to 060, broke the convention:

```
  042 la commode · 043 la table basse · 048 la poubelle · 051 la cheminée
  054 la serrure · 055 la sonnette · 056 la boîte aux lettres
  059 la pelouse · 060 la clôture
                       -> lah, in all nine
```

**G. Three rows write /œʁ/ as `-TUR` / `-TUHR` where the house convention is `EU`.**

```
  049 l'interrupteur   lan-tay-rüp-TUR   -> laⁿ-tay-rüp-TEUR
  050 le radiateur     luh ra-dya-TUR    -> luh ra-dya-TEUR
  093 le compteur      luh kohn-TUHR     -> luh kohⁿ-TEUR
```

> **Scope this one and no further.** 117 rows corpus-wide carry `-TUHR` / `-TUR`, across `metiers`, `deplacements`, `transport` and a dozen other themes. That is a real, wider debt and **it is not this lesson's job**. Fix your three, say in your header that the wider debt exists and that you deliberately left it, and move on. A guard written over the whole bundle will fire on legitimate content in themes you do not own and will be deleted by whoever it blocks.

**H. Four non-sentence rows carry no respelling at all.**

```
  006 j'habite            (also has no voiceflash)
  009 ma baraque          (also has no voiceflash)
  010 la salle de bain
  038 la salle à manger
```

010 and 038 are rooms you will certainly teach, so they need respellings: `lah SAHL duh BAⁿ` and `lah SAHL ah mahⁿ-ZHAY`. 006 and 009 are discussed under I.

**I. Two rows should not be in a vocabulary theme at all.** Report them; do not silently delete anything the SRS may have scheduled.

```
  008  "Le pour le masculin, la pour le féminin, l' devant une voyelle."
       tagged articles+grammar-rule, kind=sentence, drills=[flashcard]
       This is a1.04's rule stored as a flashcard in a furniture theme. A
       learner drilling "maison" gets a grammar sentence with no context.
       Recommend: exclude from your deck and flag for removal. Do not import it.

  009  "ma baraque", slang, glossed "my place, my pad (slang)", no respell,
       no voiceflash, at A1, in the unit that teaches a learner how to talk
       about where they live. Recommend: exclude from your deck. Register
       this far from neutral belongs in a later band if anywhere.
```

**J. The `salle de bain` / `salle de bains` split.** Row 010 and sentence 134 use the singular. Sentences 144 and 155 use the plural. Both are correct French. Pick the singular as the headword (it is what row 010 already holds and it is the more common written form), keep the plural sentences as they are, and **put one line of copy in the lesson telling the learner both exist**. A learner who meets both in one lesson and is told nothing concludes the app has a typo. Note that `fold()` keeps a final `-s`, so if you want to test this, `typeIn` genuinely can.

### The tags are three incompatible vocabularies

Ids 001-040 use `home+rooms`, `home+furniture`. Ids 041-060 use `maison+furniture+salon`, `maison+objects+entree`. Ids 061-100 use a bare `noun` and nothing else, 53 rows of it. Ids 104-123 use `noun+appliance+kitchen`, `noun+tableware+kitchen`. Sixteen rows have no tags.

This matters because a `vocabThemes` section groups by what you give it, and there is no single tag you can group these 111 rows by. **Do not try to repair the tag vocabulary as part of this build**: it is 111 rows of churn, it touches a2/b1/b2 by precedent, and it is not visible to a learner. Build your groupings from an explicit const in `maison-lesson.ts` instead, the way `SCENE_BEATS` works, and say in your header that the tags were left alone deliberately and why.

### The theme

`a1.26` declares exactly one theme, `maison`, and that theme holds 363 published rows across four bands with 153 at a1. There is no theme decision to make and no theme to create. This is the first A1 build in some time where that is true; do not go looking for a decision that is not there.

**What your choice means downstream:** `a1.30` (Bilan A1) lists `a1.26` as a prerequisite and will draw on whatever you bank. `a1.25` (routine quotidienne) declares theme `routine`, which is a different theme from `routines` in `SEED_CUT.themes`; that discrepancy is a1.25's problem, not yours, but note it in your report because you are the author who is closest to it.

### If you author items

You are authoring **one item**. The rules still bind:

- id continues the theme's real sequence: **`fr.a1.maison.156`**. The probe prints it as NEXT FREE. Never renumber; ids are the SRS key.
- **Leave gaps 127 and 143 empty.** They are gaps in a shipped, SRS-scheduled sequence. Filling them looks tidy and is not. Assert this, so the next author's tidy-up goes red.
- **Headword shape: articled, lowercase, singular.** `la pièce`, not `pièce`, not `La pièce`, not `les pièces`. That is what all 111 existing rows do and consistency inside a theme is the whole point.
- **No two non-sentence items in one theme may share an `fr`.** Your specific hazards are `l'étage` (`fr.a2.maison.014`), `l'ascenseur` (`fr.a2.maison.016`) and `le loyer` (`fr.b1.maison.023`). Check `la pièce` against theme `maison` one more time before you write it.
- **`la pièce` is a gendered single-word noun ending in `-e`.** It joins a1.03's measured ending population, and `a1-03-genre.test.ts` re-measures twenty printed figures on every run. One feminine `-e` noun is very unlikely to move a printed figure, but **run the test and read the numbers rather than assuming**: a1.11 broke a1.03's measured `-e` statistic by adding corpus nouns, and a1.22 forced a1.03 to v3. If it moves, withdraw the item and teach `pièce` without a card rather than arguing with the figure.
- every item you name must be reachable: named by a section, or released by a `deckTranche` and carrying a `flashcard` drill.
- `practice` with `skill: 'speak'` needs `voiceflash` on every item it names; `dictation` needs `dictation`. Both verified above against the seed, and `maison` is inside the cut so the seed is authoritative here. **Your dictation pool is 17 sentences and zero words.**

---

## Designing this for a learner, on a phone

Layout rules are in `A1-BUILD-INVARIANTS.md` §2. What is specific to this lesson:

- **A `cardDeck` is the hero, not a `vocabThemes`.** The rooms are the teaching and they need one screen each with the reframe on them. `vocabThemes` is not in `ownsLayout()` and renders inside a scrolling page, which is right for banking and wrong for teaching. Use `cardDeck` at `lg` for the room set and `vocabThemes` later, once, to bank the long tail.
- **`chambre` / `pièce` / `salle` is a THREE-WAY CONTRAST, so it must be one `tapTable` on one screen.** Splitting it across three cards destroys the teaching: the whole point is that English collapses three words into one, and a learner who meets them on separate screens learns three synonyms. **This is the layout the test must assert.** Two columns, three rows: the English on the left, the French on the right, with the "which room" cue in the row.
- **`salle de bain` against `toilettes` is a PAIR, so give it two columns on one screen.** Same reasoning. This is the one that produces the scene.
- **The appliance gender sort is a `groupDrill`.** Two groups, compound and not-compound, eight items. **A `groupDrill` control page carries `items: []` explicitly and no `size`**, and an `xl` groupDrill must never stack words and a check in one group.
- **A reference sheet** listing each room with the things that live in it. It is what a learner returns to during a1.25 and a1.30. Wire the `sheetId` early. **Do not put a `cheatSheet` inside it**: a `cheatSheet` nested in a reference sheet renders its title and nothing else, which a1.13 already ships as a defect. Use the sheet's own row types.
- **Do not invent a floor plan.** No component draws a diagram, a plan, an SVG or a positioned image, and there is no hero image slot in a story or scenario section. An authored `floorPlan` field no component reads renders nothing, and the "authored, valid, invisible" failure is the one this project keeps shipping. **Grep the renderer for every section type you use before you write it, and pin the ones you rely on with a test.**
- **`size: 'xl'` is a 12-word cap on every string in the section.** Correct on a one-word room card, fatal on any card carrying a sentence. Your corpus sentences run to 9 words (`Il y a beaucoup de bruit chez les voisins.`), so a card pairing a room with an example sentence must not be `xl`.
- **Three term chips per section, maximum.** The renderer shows three.
- **The flex belongs to a wrapper View, never to the `TX`.** Copy `FrenchLine` in `LessonDeck.tsx`.
- **A reading passage is ONE BLOCK.** `PassagePage` splits on `/(?<=[.!?»])\s+/`, so an authored newline is silently discarded. If you want a flat-listing passage with `3 pièces` in it, write it as continuous prose.

### The scene

The social failure this lesson prevents: **being read as the kind of guest who wants a shower at a dinner party.**

Two candidate beats:

*Candidate A, the bathroom.* The learner is at a French friend's flat for dinner. They need the toilet. They say « Où est la salle de bain ? », which is grammatically perfect and is the phrase every English-language course gave them. They are shown a room with a bath, a basin and no toilet. They come back out. The host, helpful, offers a towel and says take your time. Dinner waits. Nobody has corrected anybody and nobody is annoyed; the learner is simply now the guest who is having a wash before the starter.

*Candidate B, the flat listing.* The learner books a viewing for a « 3 pièces », expecting three bedrooms, and arrives at a one-bedroom flat. The agent is not wrong and neither is the listing.

**A is sharper** and it is the one to build. It is bodily, it is immediate, it needs no property vocabulary, and the misreading is about the learner as a person rather than about a transaction. B's fact is worth having, so put `3 pièces` in the reading passage where it explains the listing convention in one line, and leave the scene alone.

Extract beats to a named `SCENE_BEATS` const, give every beat its own `size` (prose at `md`, the choice and the break at `lg`) and its own `audio`, and keep the break body between 24 and 40 words. The natural choice beat is the moment at the door: `la salle de bain` or `les toilettes`, with the consequence of each already visible to the reader and not to the learner in the story.

> An A1 scene opens on somebody being MISREAD AS A PERSON, not on being misunderstood. Every word correct, and the interaction still goes wrong. Nobody is corrected and nobody is angry; the plan simply does not happen. If your scene ends with someone being told they made a mistake, it is a sons scene wearing A1 clothes.

### The scenario: one already exists, and it is not the shape you want

```
sc.a1.maison.001   "Visite de l'appartement"   4 turns, level a1, theme maison
sc.a1.rp-maison.001 "Chez moi"                 theme rp-maison
```

`sc.a1.maison.001` is a flat viewing: four turns, each `{ai, en, user}`, with a single scripted `user` line per turn and no alternates. **That is the old scenario shape.** The current standard is a paced conversation where a turn accepts more than one reasonable answer. Verified: **no lesson in the seed references a scenario id at all**, so scenarios are currently reached by theme rather than by lesson wiring.

Decide and report which you did:

1. **Reuse `sc.a1.maison.001` as it is.** Cheapest, ships, and leaves the lesson with a scenario that is behind the current standard.
2. **Rebuild it with alternate answers**, matching the current conversation shape. More work, and it changes a scenario that is already published and may be reached from the theme browser.

Recommendation: **rebuild it**, because your reframe is a word choice and a scenario with one scripted answer per turn cannot test a choice. Keep the flat-viewing setting and the id, so nothing that reaches it by theme breaks. Its existing content is already good evidence for you: three of its four turns use `il y a`, and it already contains « Il y a deux chambres et une salle de bain », which is your exact teaching point sitting in a published scenario.

---

## Shape

v2 lesson: `acts`, a stable `id` on every section, `reframe`, `deckTranche`, `terms`, `errorTriggers`, `drills`, round-based quiz. Follow the v2 spine in `ealch-admin/LESSON-GENERATION-PROMPT.md`.

Recent lessons run 23 to 30 sections; a1.22 landed at 28, a1.21 and a1.15 at 26. **24 to 28 is your range, and the weight belongs on the room distinction and the room-by-room organisation, not on the object inventory.** If naming eighteen rooms and sorting sixty objects into them takes twelve missions, that is correct. Do not stretch the lesson because the deck looks thin, and do not pad it with a preposition act you are not allowed to teach.

```
act 1  Which room is it          scene, goals, the three-way split, the salle/toilettes pair
act 2  The rooms                 the room set, taught then banked, then checked without the deck
act 3  What is in each room      furniture and objects sorted by room, the appliance gender sort
act 4  Saying where it is        a1.21's rule REUSED on your nouns, plus common errors
act 5  Production                reading, flashcards, dictation, practice, scenario, review
act 6  Prove it                  progressCheck, quiz, roundup
```

Aim for roughly 50 to 60 items named across the lesson's sections, and release the remainder through `deckTranche`. All 111 words carry `flashcard`, so every one of them is legally bankable. A defensible named spine, all ids existing except 156:

```
rooms (12)      001 002 003 010 011 038 040 052 097 104 018 039  + 156 la pièce
dwelling (3)    077 076 023
structure (8)   012 013 019 020 021 033 034 082
furniture (12)  014 015 016 017 041 025 026 027 028 029 085 086
bed & bath (5)  030 032 035 036 037
appliances (5)  105 106 107 109 110
tableware (5)   113 114 115 116 117
objects (5)     022 048 100 070 055
chores (3)      121 122 123
                                                          58 named
```

Trim toward 50 rather than growing past 60. The remaining 53 words go in `deckTranche`.

### Quiz notes specific to this lesson

General rules, including the `fold()` limits, the mcq ceiling, the 40% answer-slot cap and the drill-reachability trap, are in `A1-BUILD-INVARIANTS.md` §4. Target 24 to 26 questions across 6 or 7 rounds, matching a1.15 and a1.22.

**Randomise the correct answer, and prove you did.**

Every closed question in the seed carries exactly 4 `opts` and an integer `correct`. Measured across all 25 shipped A1 lessons, 350 closed questions:

```
slot 0   85   24.3%
slot 1  101   28.9%
slot 2   91   26.0%
slot 3   73   20.9%
```

The 40% cap holds today, but a1.01 sits exactly on it at 40%, and slot 3 is under-used band-wide. Do better than the cap:

- **No slot may hold more than 30% of your closed questions**, and **no slot may hold less than 15%**. On 14 closed questions that is between 2 and 4 in every slot.
- **Shuffle deterministically at authoring time, not at render time.** Write the option list in whatever order is natural for you, then permute it with a fixed, seeded shuffle in `maison-lesson.ts` and commit the result. A render-time shuffle would break the stored `correct` index, break `quiz-duplicate-option`, and make the quiz unreproducible between runs. Date.now() and Math.random() must not appear in authored content.
- **The correct answer must not be the longest option, and must not be the only one carrying an article.** Slot position is not the only tell a learner reads. On a lesson whose whole subject is which noun to choose, a distractor set of three bare nouns and one articled noun gives the answer away without any French being understood.
- **Assert the distribution in your test.** A cap that is only in a brief is not a cap.

Everything else specific to this lesson:

- **Every question about which room word needs a situation in the stem.** "Which word means room?" has no answer. "You are at a friend's flat for dinner and you need the toilet. Which do you ask for?" has exactly one. Same for `pièce`: "A listing says 3 pièces. How many bedrooms might it have?" is answerable; "What does pièce mean?" is not.
- **`mcq` is your strongest format** because the lesson is lexical selection under a situation, and `mcq` is the only format where the learner picks between the three room words with their articles visible. It is also the only format that can test `les toilettes` at all: see below. Keep it at or under half, which on 26 questions means 13.
- **`listenChoose` has one job here, and it is the two pairs the ear actually fails on.** `le sol` (034, `luh SOL`) against `le seau` (069, `luh SOH`), and `la poêle` (062, `lah PWAHL`), whose spelling predicts nothing about its sound. Both `sol` and `seau` carry `voiceflash`, so both are recordable. **Do not use `listenChoose` on the room names.** `salon`, `balcon` and `plafond` are not confusable with each other, and an ear question there certifies nothing except that audio played.
- **No free-text format can test `les toilettes`.** The plural is carried entirely by the article, and `fold()` strips nothing that would help: a learner who believes the word is singular types `toilettes` and passes. Only `mcq`, with `la toilette` and `les toilettes` as visible options, can test it. Both the a1.08 and a1.09 briefs recommended `errorSpot` for an equivalent job and both were wrong; `errorSpot` runs the same `matchesAccept` and `fold()` path as `typeIn`.
- **`typeIn` CAN test the `-s` on `salle de bains`**, because `fold()` keeps a final `-s`. It cannot test the space (`salledebains`) and it cannot test an accent. If you use it, accept both the singular and the plural, because both are correct French and you will have told the learner so.
- **No ear question can test a silent plural.** `le rideau` and `les rideaux` are identical in the audio you have.
- **Each round names `targets`, and `drillForRound` fires the drill of the FIRST resolving target only, then stops.** A drill named in second place is dead content. a1.05 shipped two such drills. Make each teaching drill the first resolving target of exactly one round, and assert it.
- **Every question needs a `why` that teaches the rule** and a `ref` naming a section that exists. Every built A1 lesson is at 100%. Do not be the first to reverse it.
- **Check your evidence before committing to a round.** A round on the utilities vocabulary (`le compteur`, `la fuite`, `la panne`) has nine corpus rows and no sentence evidence behind it. That is cards, not a round.

### Audio brief notes specific to this lesson

- **`la chambre`, `la pièce` and `la salle de bain` must be ONE take, one voice, adjacent.** They are the lesson's central contrast. Recorded apart, the learner compares two performances instead of three meanings and the teaching is lost.
- **`la salle de bain` and `les toilettes` must be adjacent in the same take**, for the same reason. This is the pair the scene turns on.
- **`le sol` and `le seau` must be adjacent in the same take.** They are the `listenChoose` pair and any difference in delivery between two sessions makes the question answerable from the recording rather than from the vowel.
- **Never record `salle` in isolation.** It does not occur alone in this lesson and a card that plays a bare `salle` teaches a word the learner will never need on its own.
- **`la poêle` is /pwal/ and must not be silently respelled toward its spelling later.** Write it into `desc`. A future author reading `lah PWAHL` next to `poêle` will read it as a typo, and the constraint on why it is right becomes invisible the moment the clip is delivered.
- **The nasals are the point of half your repair list.** Any narrator direction that flattens `chambre`, `salon`, `jardin` or `plafond` toward an English -n undoes 27 rows of repair.

---

## Wiring

Pattern and hazards are in `A1-BUILD-INVARIANTS.md` §5. Model on `author-pays-batch.ts` / `merge-pays-into-seed.ts`, and on `famille-imported.ts` for the import/author split. Specific to you:

- `scripts/author-maison-batch.ts`, `scripts/merge-maison-into-seed.ts`, `scripts/data/maison-{corpus,imported,lesson,terms}.ts`, `"content:maison": "tsx scripts/author-maison-batch.ts"` in `package.json`.
- **Ids start at `fr.a1.maison.156`.** Confirm with the probe. Gaps 127 and 143 stay empty.
- **`maison` IS in `SEED_CUT.themes`.** All 363 rows are already in the seed. So your merge should change **almost no items**: one new row (156), plus the ~40 rows whose respellings you repair, plus the lesson. **If the item half of your seed diff is large, something is wrong.** That is a strong, checkable prediction, so check it.
- **Diff the DB bodies against git before you run `content:publish`.** git can run ahead of Postgres and publish will then destroy the newer side silently. This has cost real work twice.
- **Never `git checkout seed.json`.** Reverting it discards other authors' uncommitted lessons. Re-run the merge scripts instead.
- **Do not hand-bump `seed.version`.** It is the OTA snapshot number. See §5.
- `*.md` is gitignored in this repo, so `git add -f` this brief and any report you write beside it.

No other author is live in theme `maison` as this brief is written. **Verify that yourself before you claim ids**: check the row count as well as the highest id, because a concurrent lesson landing below your top is invisible to a highest-id check.

---

## Your test: `ealch-v2/src/content/a1-26-maison.test.ts`

The always-required assertions are in `A1-BUILD-INVARIANTS.md` §6. Baseline measured **2026-08-07**: **2,302 tests, 2,302 pass, 0 fail.** Measure it again yourself; do not take that figure from this file.

Specific to this lesson:

- **Every room in the taught set is named individually**, asserted by name rather than as a count, and specifically `les toilettes` and `la salle à manger`, which are the two most likely to be dropped when the section count runs long.
- **The three-way split is taught with all three sides present**, and at least one section shows `chambre`, `pièce` and `salle` **together on one screen**. That contrast is the lesson, and separating it is how the lesson decays into a word list. Assert the section type and that all three appear in it.
- **`salle de bain` and `les toilettes` appear together in one section**, for the same reason, and the scene resolves on that choice.
- **`les toilettes` is stored and taught as a plural**, with `les` present wherever it is drilled.
- **The appliance gender rule is taught with both sides visible**: at least one non-compound feminine (`la machine à laver` or `la cuisinière`) sits beside the masculine compounds, or the rule reads as "compounds are masculine" with no boundary.
- **Every headword the lesson names is lowercase and articled**, so the corpus itself models the form rule.
- **No preposition of place is a teaching point.** Write this against production surfaces (deck ids, `vocabThemes` entries, `terms` keys, quiz `correct` answers) rather than every string, or it will fire on `Le lit est près de la fenêtre` and get deleted. Assert that no quiz question's correct answer is one of `sur`, `sous`, `dans`, `devant`, `derrière`, `à côté de`.
- **No chore verb is conjugated.** `faire la vaisselle`, `faire le lit` and `mettre la table` appear as fixed phrases only; a1.25 keeps its lesson.
- **The respellings.** Import `hasPlainNasalFor` and run it across every row the lesson names. Then **additionally assert by name**, because the checker cannot see a word-internal nasal: `chambre`, `lampe`, `planche`, `éponge`, `pince`, `linge` (all three rows), `cintre` and `micro-ondes` must each carry `ⁿ`. And assert that **`la panne` does NOT carry one**, with a comment saying why, so the next author's "fix" goes red instead of shipping a nasal vowel that is not in the word.
- **Assert `linge` has exactly one respelling across the theme**, and likewise `vaisselle` and `table`. These are the three that were measurably wrong and the assertion is what stops them drifting back.
- **Assert ids 127 and 143 remain absent.** They are gaps in a shipped SRS sequence, leaving them empty is deliberate, and it looks exactly like an oversight to the next person.
- **Assert the quiz answer distribution**: no `correct` slot above 30%, none below 15%, across the closed-format questions. And assert the correct answer is never the longest option.
- **Assert that item 008 and item 009 are not in the lesson's `itemIds`**, with a comment saying why, so excluding a grammar-rule sentence and a slang row reads as a decision rather than an omission.

> **Mutation-test all of it.** Break the three-way contrast onto separate screens, drop `les toilettes`, put a preposition in a quiz answer, un-repair one `LANZH`, add `ⁿ` to `la panne`, move a correct answer to make slot 1 hit 40%, and confirm each one goes red. An assertion that cannot fail is worse than no assertion.

---

## UNVERIFIED

Everything below is believed and not checked. It is quarantined here so you know which parts of this brief to trust.

- **The global Postgres item and sentence counts.** The probe prints per-theme figures and the seed totals (7,818 items, 36 lessons) but not a corpus-wide Postgres count, so the header of this brief carries theme numbers only. Not checked because no probe flag produces it. If it matters, query `select count(*) from items where status='published'` directly.
- **That `sc.a1.maison.001` is reached by the theme browser today.** No lesson references any scenario id, which is measured; that scenarios are therefore surfaced by theme is inferred from that absence, not verified in the app. Check `ScenarioBrowser` or whatever resolves `seed.scenarios` before you decide that rebuilding it is safe.
- **That `la pièce` will not move a1.03's printed ending figures.** Reasoned from it being one feminine `-e` noun against a population in the hundreds, not measured. Run `a1-03-genre.test.ts` and read the numbers.
- **That the current scenario standard requires alternate answers per turn.** Taken from the recent role-play rebuild, not re-read from the schema for this brief. Check `scenario.logic.ts` and `scenario.logic.test.ts` before you rebuild.
- **That `le lave-linge` follows the same compound pattern as `le sèche-linge`.** It is not in the corpus at a1 and was not probed. If you want it in the gender sort, probe it first, with the hyphen.
- **The suggested 58-item named spine.** It is a defensible reading of the group table, not a validated curation. Every id in it was verified to exist; whether those are the right 58 is your judgement.
- **That no other author is live in `maison`.** True of the working tree when this brief was written. Re-check.

---

## What to report

- **The biggest unknown this brief could not settle: whether to reuse or rebuild `sc.a1.maison.001`**, and what you did about it.
- **What the probe said about theme `maison`**, and explicit confirmation that you **imported** rather than authored, with the count of items authored (expected: 1).
- **The accent trap**: whether re-probing any word this brief calls absent, with its diacritics, turned up rows this brief missed.
- the reframe you chose, and why that one, and what you rejected.
- **The respelling repair list you actually applied**, by id, and any row you deliberately left alone, with `la panne` named explicitly and the corpus-wide `-TUHR` debt named as out of scope.
- **Whether `la pièce` moved any of a1.03's twenty printed figures**, and if it did, what you withdrew.
- **What you did with items 008 and 009**, and whether you recommended removal or only exclusion.
- **How you taught the three-way split**, and the section id where a learner sees `chambre`, `pièce` and `salle` on one screen.
- **How you kept a1.21's prepositions as context without teaching them**, and how your test draws that line without firing on legitimate context.
- **The quiz answer-slot distribution you shipped**, as four numbers, and confirmation that the shuffle is deterministic and committed rather than computed at render time.
- corpus: how many items authored, how many imported, in which theme, how many respellings repaired, and confirmation that the articled-lowercase-singular form rule held.
- lesson: section count, act structure, quiz size and format mix, and confirmation that **every question has a `why`**.
- **The size of the item half of your seed diff**, against this brief's prediction that it should be small.
- test count before and after, with the before figure **measured rather than taken from this file**.
- which missions you verified, by what route, and **which half of the verification you did** if adb was unavailable.
- **Anything you could not verify, said plainly.** A gap you name costs an hour. A gap you paper over costs a session, and this project has lost two that way. If a claim in this file has gone stale, say so rather than working around it.

Do not use AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the big one", "listen to the trap", "get those two right", "this is the part that pays", "here is the catch", and anything of that register. No em dash in any authored copy. The words "honest" and "honesty" are banned from authored content and `sons-alphabet.test.ts` enforces it across the whole seed.
