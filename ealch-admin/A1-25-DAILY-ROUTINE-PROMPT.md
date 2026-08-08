# Build a1.25 "Daily Routine"

You are authoring an A1 lesson in Ealch, end to end. Not drafting content for review: authoring it, wiring it, proving it, and leaving it render-ready.

You have latitude on the teaching. You have none on the gates.

**Read first, in this order:**

1. **`ealch-admin/A1-BUILD-INVARIANTS.md`.** The gates, the layout traps, the wiring pattern, the respelling convention and its blind spots, the quiz rules, the house rules. Everything that does not change between lessons lives there and is not repeated here.
2. `ealch-admin/A1-LESSON-GENERATION-PROMPT.md` **Part 1**, the A1 doctrine: why an A1 lesson is not a sons lesson with different words, the register of stakes, the voice.
3. **a1.20 "Les mots interrogatifs"**, in `ealch-admin/scripts/data/interrogatifs-*.ts`. Newest lesson to ship and your quality bar. **Read `interrogatifs-corpus.ts`'s header before anything else**: it documents how the previous brief's claims failed and what the author did about it.
4. **a1.22 "Pays & nationalités"**, in `scripts/data/pays-*.ts` including **`pays-imported.ts`**, because it is the closest structural shape you have. a1.22's vocabulary already existed in Postgres and it imported rather than authored. So does yours, and more completely than a1.22's did.
5. **a1.08 "Les jours de la semaine"**, in `scripts/data/jours-*.ts`, because it already teaches the habitual `le` (`le lundi` = every Monday) and your lesson extends that exact rule to the parts of the day. Do not re-teach it and do not contradict it.
6. **a1.12 "L'heure"**, the declared prereq. Your day is told in clock times the learner already has.

---

## VERIFIED STATE

> Measured **2026-08-07** against Postgres (`aws-0-ca-central-1.pooler.supabase.com:6543/postgres`,
> 27,353 published sentences) **and** `seed.json` v19 (7,818 items, 36 lessons). Every
> number below carries both. **Re-run before you start**, because this track moves weekly:
>
> ```bash
> cd ealch-admin
> pnpm corpus:probe --unit a1.25 --theme routines,routine,rp-quotidien,verbes-du-quotidien \
>   --words "matin,midi,soir,nuit,se lever,se laver,s'habiller,manger,dormir,se coucher" \
>   --tokens "le matin,à midi,le midi,le soir,la nuit,je me lève,vous vous levez,ils se lèvent"
> ```
>
> If anything below disagrees with what the probe prints, **the probe wins and
> the disagreement goes in your report.**

```
a1.25  Daily Routine   seq 28
  sub:    "La routine quotidienne"
  canDo:  "Can describe their day from getting up to going to bed"
  themes: ["routine"]            0 rows in Postgres, 0 in the seed. DEAD. See the next section.
  lessonIds: []                  you are filling this
  prereqUnitIds: ["a1.12"]       a1.12.l1 ships, v3, 30 sections, 26 quiz questions
```

Do not change `title`, `sub` or `canDo`. All three are correct and the Den advertises them.

**Encoding and naming note.** Postgres holds `t` = `"Daily Routine"` and `sub` = `"La routine quotidienne"`. `scripts/author-full-curriculum-spine.ts:426` holds the opposite: `title: 'La routine quotidienne'`, `sub: 'matin, midi, soir — se lever, manger, dormir'`. **The database is what the Den serves, and it wins.** An English `title` over a French `sub` is the shipped pattern for sons.06 ("Silent Letters") and sons.07 ("Elision"), so this is not an anomaly to repair. Do not "fix" the spine file inside this build. Report the divergence and leave it.

### The track

```
unit    lesson      sections  quizQ  title
a1.01   a1.01.l1    21               Les salutations
a1.02   a1.02.l1    24               Les nombres 1-20
a1.03   a1.03.l1    26               Le genre des noms
a1.04   a1.04.l1    24               Les articles définis
a1.05   a1.05.l1    22               Les pronoms sujets
a1.06   a1.06.l1    26               Le verbe être
a1.07   a1.07.l1    27               Le verbe avoir
a1.08   a1.08.l1    24               Les jours de la semaine
a1.09   a1.09.l1    23               Les mois de l'année
a1.10   a1.10.l1    26               Les saisons & la météo
a1.11   a1.11.l1    23               Les articles indéfinis
a1.12   a1.12.l1    30        26     L'heure
a1.13   a1.13.l1    26               Les couleurs
a1.14   a1.14.l1    25               Les adjectifs de base
a1.15   a1.15.l1    26               La famille
a1.16   a1.16.l1    25               La place de l'adjectif
a1.17   a1.17.l1    27               Les adjectifs possessifs
a1.18   a1.18.l1    28               La négation
a1.19   a1.19.l1    27               Questions oui / non
a1.20   a1.20.l1    27        26     Les mots interrogatifs
a1.21   a1.21.l1    26        24     Prépositions de lieu
a1.22   a1.22.l1    28        26     Pays & nationalités
a1.27   a1.27.l1    28               Les nombres 21-100
a1.28   a1.28.l1    29               Les grands nombres
a1.29   a1.29.l1    23               Les articles partitifs
a2.01   a2.01.l1     7               Verbes réguliers (stub)
```

**25 A1 lessons ship.** Nothing is in flight in `routines` as this brief is written, but a1.23 (La nourriture) and a1.24 (Le corps) sit between a1.22 and you in seq order and are **not built**. You cannot lean on either. If a concurrent author starts one while you work, `nourriture` and `corps` are different themes from yours and you will not collide on ids, but you will collide in the suite. Re-read `seed.json` before your merge, not before your authoring.

Your models, verified in the seed:

```
a1.22.l1  v2  28 sections  26 quizQ  6 acts
          scene 1, goals 1, cardDeck 6, groupDrill 4, tapTable 4, vocabThemes 1,
          commonErrors 1, listening 1, reading 1, flashcards 1, dictation 1,
          practice 1, scenario 1, reviewDeck 1, progressCheck 1, quiz 1, roundup 1

a1.20.l1  v2  27 sections  26 quizQ  6 acts
          scene 1, goals 1, cardDeck 6, tapTable 4, groupDrill 3, listening 1,
          commonErrors 1, reading 1, vocabThemes 1, flashcards 1, dictation 1,
          practice 1, scenario 1, reviewDeck 1, progressCheck 1, quiz 1, roundup 1

a1.12.l1  v3  30 sections  26 quizQ  7 acts   (your prereq, and the largest A1 lesson)
```

---

## THE UNIT IS BOUND TO A DEAD THEME AND THE REAL ONE IS ALREADY FULL

This is the loudest fact in the file. Read it before you plan anything.

`a1.25` declares `themes: ["routine"]`, singular. Measured both ways:

```
theme "routine"    published in postgres: 0      present in seed: 0     DEAD
theme "routines"   published in postgres: 338    present in seed: 338   FULL
```

The vocabulary this lesson is for is in **`routines`**, plural, and it is not thin:

```
fr.a1.routines    178 rows   max=184   NEXT FREE ID = fr.a1.routines.185
                  gaps: 121, 141, 149, 152, 162, 168
                  114 non-sentence (72 word, 42 phrase) + 64 sentence
fr.a2.routines     65 rows   NEXT FREE = fr.a2.routines.066
fr.b1.routines     95 rows   NEXT FREE = fr.b1.routines.096
```

**All 338 are in the seed cut.** `routines` IS in `SEED_CUT.themes`, which makes your merge the simple case: no rows have to be dragged in from outside the cut, and no blank cards can ship from a theme mismatch. That is the one thing about this build that is easier than a1.22's.

**Every headword the unit's own sub names already exists, except one.**

| requested | status | where |
|---|---|---|
| matin | EXISTS | `fr.a1.routines.002` "le matin" |
| midi | EXISTS | `fr.a1.routines.035` "midi" |
| soir | EXISTS | `fr.a1.routines.023` "le soir" |
| se lever | EXISTS | `fr.a1.routines.001` |
| dormir | EXISTS | `fr.a1.routines.021` |
| **manger** | **ABSENT from `routines`** | exists in `cuisine.041`, `rp-repas.013`, `verbes-du-quotidien.101`, `sons.muettes.037` |

**So: you IMPORT. You do not author a vocabulary set.** Authoring `le matin` again inside `routines` would give the theme two rows sharing one `fr`, which `flashhub-coverage.test.ts` treats as one card served twice, and the build fails. This is the failure four consecutive briefs shipped. It is not shipping in this one.

The root cause of the trap here is not the seed cut, for once. It is **a one-letter theme name**. `routine` and `routines` are different themes and only one of them has ever held a row.

### The theme decision

Rebind `a1.25` to `themes: ["routines"]` in the merge, the way `merge-adjectifs-into-seed.ts:483` rebinds with `UNIT_THEMES_TO` and refuses to run if the before-state is not what it expected. Do not create or populate `routine`.

**Downstream, and you must report this:** `a2.22` "Les verbes pronominaux" (`author-full-curriculum-spine.ts:621`) declares the **same dead `routine`**. Your rebind does not fix a2.22 and you should not fix it here. Say in your report that a2.22 is bound to a theme with zero rows and that whoever builds it faces the same decision.

### What is genuinely absent

One item: **`manger`**, in `routines`. It is legal to author, because no row in `routines` at any level carries `manger` as its `fr` (checked: 0 duplicate `fr` values inside the whole theme, all levels). Author it at `fr.a1.routines.185`.

`la journée` is also absent from `routines` (it exists only in `sons.faux-amis.040` and `sons.jours-et-mois.043`). Authoring it is legal. **Decide whether you need it.** `journée` versus `jour` is a faux-ami distinction that `sons.faux-amis` already owns, and pulling it in gives you a second thing to teach for no gain in the canDo.

---

## The teaching problem

A learner who has finished a1.12 can say what time it is. They cannot yet say what they do. The gap between "il est sept heures" and "je me lève à sept heures" is not vocabulary, because the vocabulary is sitting in the corpus already. It is the frame: French marks a habit with an article on the part of the day, and gets that mark wrong in exactly one place. A learner who does not have the frame produces every word of a daily routine correctly and still describes a single Tuesday instead of their life.

### The canDo has two clauses and they are not equal

```
"Can describe their day"                       the easy half. 114 items are already published.
"from getting up to going to bed"              the hard half. This is sequence and habit, not words.
```

The actual lesson is an article contrast, and it is measured, not assumed:

```
le matin          134 pg /  46 seed      takes the article
l'après-midi       21 pg /   2 seed      takes the article
le soir            92 pg /  17 seed      takes the article
la nuit            84 pg /  10 seed      takes the article
le week-end        94 pg /  20 seed      takes the article

à midi             51 pg /  14 seed      takes NOTHING
le midi             0 pg /   0 seed      does not occur, in 27,353 sentences
à minuit           15 pg /   1 seed      takes NOTHING
```

The corpus models the rule in its own headword shapes without being asked to: `fr.a1.routines.002` is stored as **"le matin"**, `.023` as **"le soir"**, `.024` as **"la nuit"**, while `.035` is stored bare as **"midi"** and `.036` bare as **"minuit"**. You do not have to construct this contrast. You have to stop a future author flattening it.

> **The reframe: "The parts of the day take `le`. Midi and minuit take nothing."**
>
> It is a choice the learner makes in the moment of speaking, it is true of the whole lesson rather than one section, and they can check it tomorrow the first time they arrange lunch. Carry it verbatim across at least three sections; a1.01 uses eight, a1.08 seven, a1.09 eight.
>
> **Rejected, and why, so the next author does not re-litigate:**
>
> - *"`le matin` is every morning, `ce matin` is this one."* The sharper contrast and the one with the most evidence (`ce matin` 263 pg / 58 seed). Rejected because `ce / cet / cette / ces` belongs to an A2 unit (`author-full-curriculum-spine.ts:740`) and teaching the demonstrative here takes its lesson. `ce matin` may appear once as CONTEXT in the scene or the reading passage. It may not be drilled, carded, or quizzed. See "left to its neighbours".
> - *"Put the time first and the rest of the sentence stays where it is."* True and corpus-backed (`Le matin, je bois un jus d'orange.`, `Tous les matins, le boulanger se lève à quatre heures.`). Rejected as the reframe because fronting is optional and a learner who never does it is still speaking correct French. It is a good `term` and a good `hacks` line. It is not the choice the lesson turns on.
> - *"Your day is a list."* Rejected. It describes the lesson's structure, not the learner's decision. A reframe the learner cannot act on is a section title.

### What the learner arrives with

- **a1.04 (definite articles)** gave them `le / la / l' / les` and what they select.
- **a1.08 (days)** gave them the habitual `le`: its own sub is "lundi to dimanche and what `le lundi` changes". This is the whole rule, already taught, already tested.
- **a1.11 / a1.29 (indefinite and partitive)** gave them the other article systems, so a bare noun already reads as marked to them.
- **a1.12 (L'heure)** gave them clock times. `à sept heures` is 28 pg / 12 seed and appears in `fr.a1.routines.003` itself.
- **a1.05 (subject pronouns)** gave them je / tu / il / elle / nous / vous / ils / elles.

**a1.08's `le lundi` transfers exactly.** `le lundi` is every Monday; `le matin` is every morning. Name it as a rule they already have rather than teaching it cold, and cite a1.08 by name in the section body.

**`midi` and `minuit` are where that rule stops, and that is the trap.** Say so out loud, by name, in the same section that names the rule. A contradiction a learner discovers alone is a language they decide is arbitrary. `le midi` returning zero rows out of 27,353 sentences is the strongest single piece of evidence in this brief and it belongs in a `commonErrors` entry, not in a footnote.

### The four other things worth naming

- **Half the day's verbs carry a `se` and the learner has never seen one.** `se lever`, `se réveiller`, `se doucher`, `s'habiller`, `se laver`, `se brosser les dents`, `se coucher` are all published headwords. The `se` is not optional and not decoration. Name what it is in one sentence and no more (see the next section for the hard boundary).
- **The corpus writes the day in the present tense throughout.** All 64 published `routines` sentences are present. Nothing in this lesson needs a past or a future, and reaching for one takes a2.21 / a2.23's lesson.
- **`tous les jours` (`fr.a1.routines.026`) and `tous les matins` (36 pg / 11 seed) are the explicit habit marker**, and they are the escape hatch when the article alone feels ambiguous to a learner. Teach one of them beside the article rule, not as a separate act.
- **The corpus's own day is ordinary and specific**, and it is better material than anything you would invent: `Il boit un café noir chaque matin.`, `Elle étudie le français chaque soir.`, `Nous faisons les courses le samedi matin.`, `Il ferme la porte à clé avant de partir.` Use the published sentences. There are 64 of them and 35 carry no `dictation` drill yet.

### What is deliberately left to its neighbours

- **The reflexive paradigm is `a2.22` "Les verbes pronominaux"** (`themes: ['routine']`, canDo "Can describe their routine with reflexive verbs in the present"). The temptation here is near total, because seven of your headwords carry a `se`. **The measured argument for staying out:** `vous vous levez` returns **0 rows**, `ils se lèvent` **0 rows**, `elles se lèvent` **0 rows**, across all 27,353 published sentences. Half the paradigm has no evidence behind it. Teaching a six-person table from three attested persons is how a lesson certifies its own gaps.

  **What is allowed:** `je me`, `tu te`, `il/elle se` as fixed, whole phrases the learner memorises and produces, because those three have real sentence evidence in `routines` (`Je me lève à sept heures.` `.003`, `Tu te douches rapidement avant l'école.` `.157`, `Il se lève tout de suite après le réveil.` `.154`). Also `nous nous`, which has two (`.138`, `.156`), if you want it.

  **What is not allowed:** a conjugation table, a `groupDrill` whose columns are the six persons, a `tapTable` that asks the learner to select the pronoun, any quiz question whose answer is a reflexive pronoun, or the word "pronominal" anywhere a learner reads it.

- **`ce / cet / cette / ces` is an A2 unit** (`spine:740`). `ce matin` may appear once as context and must not be taught. Follow the a1.09 precedent: it shows a day name inside a full date in its reading passage and drills none, and its test enforces the split by scoping the assertion to production surfaces.
- **Food is `a1.23`, and it is not built.** `le café`, `le thé`, `le repas`, `le goûter` are published `routines` rows and you may card them as parts of the day. You may not teach what to order, what you like, or `du / de la`, which is `a1.29`'s and already ships.
- **The house is `a1.26`, and it is not built.** `la douche`, `la baignoire`, `le miroir`, `le bureau` are published `routines` rows. Card them as objects in a routine. Do not teach rooms.
- **The clock is `a1.12` and it ships.** Use `à sept heures` freely as context. Do not teach `et demie` or `moins le quart`.

---

## The corpus

### What exists, measured both ways

```
theme                      postgres   seed    a1 slice   next free id
routines                        338    338         178   fr.a1.routines.185
routine                           0      0           0   dead, do not populate
rp-quotidien                    113      0          33   OUTSIDE the seed cut. Do not import from it.
verbes-du-quotidien             310      0         125   OUTSIDE the seed cut. Do not import from it.
```

`rp-quotidien` and `verbes-du-quotidien` overlap yours heavily and are **zero percent in the seed**. Pulling a row from either means dragging it through the cut, and a row that misses the cut draws a blank card on a device. `routines` gives you everything. Stay in it.

### The 114 published non-sentence rows in `fr.a1.routines`

```
001 se lever            002 le matin            005 je me réveille      006 il dort
007 nous prenons        010 se réveiller        011 se doucher          012 s'habiller
013 prendre le petit déjeuner                   014 aller au travail    015 travailler
016 déjeuner            017 dîner               018 rentrer             019 se brosser les dents
020 se coucher          021 dormir              022 l'après-midi        023 le soir
024 la nuit             025 le week-end         026 tous les jours      027 le petit déjeuner
028 se laver            029 se raser            030 faire le ménage     031 faire la vaisselle
032 faire la lessive    033 ranger              034 se reposer          035 midi
036 minuit              037 tôt                 038 tard                039 se maquiller
040 se peigner          041 s'endormir          042 la sieste           043 faire la sieste
044 le goûter           045 promener le chien   046 arroser les plantes 047 sortir la poubelle
048 mettre la table     049 débarrasser la table                        050 faire son lit
051 repasser            052 passer l'aspirateur 053 prendre une douche  054 prendre un bain
055 se changer          056 la pause déjeuner   057 aller au lit        058 éteindre la lumière
059 se coiffer          060 s'étirer            061 bâiller             062 se moucher
063 aller à l'école     064 aller au marché     065 aller à la mosquée  066 aller à l'église
067 rentrer à la maison 068 faire une pause     069 faire la grasse matinée
070 se mettre au lit    071 rester à la maison  072 garder les enfants
073 donner à manger au bébé                     074 préparer le dîner   075 nourrir le chat
076 étendre le linge    077 plier le linge      078 balayer             079 faire la poussière
080 laver le sol        081 nettoyer la salle de bain                   082 vider la poubelle
083 faire les lits      084 fermer à clé        085 tirer les rideaux   086 mettre le réveil
087 se dépêcher         088 se sécher les cheveux                       091 le réveil
092 la brosse à dents   093 le dentifrice       094 le savon            095 le shampooing
096 la serviette        097 le peignoir         098 les pantoufles      099 le rasoir
100 le miroir           101 la douche           102 la baignoire        103 le café
104 le thé              105 le repas            106 sonner              107 conduire
108 marcher             109 cuisiner            110 le bus              111 le métro
112 la voiture          113 le bureau           114 boire un café       115 allumer la lumière
116 ouvrir les volets   117 fermer les volets   118 arriver au travail  119 quitter le travail
120 faire les courses
```

**This is far more than one lesson can teach.** 114 items across a 26-to-30 section lesson is roughly four per section with nothing left for the contrast. Choose a taught core of about 30 to 40 and release the rest through a `deckTranche` with a `flashcard` drill, per the reachability rule. Every item you name in a section must be taught; every item you do not name must be released by a tranche or it is invisible.

### The 64 published sentences, and the one that is a defect

35 of the 64 carry no `dictation` drill. That is your dictation source and you do not have to write a sentence to fill it.

**`fr.a1.routines.009` is broken content:** its `fr` is `"Le verbe est pronominal, le pronom change avec la personne."` That is a grammar note stored as a learner sentence, in French, in an A1 theme. It will be served as a flashcard or a dictée. **Report it. Do not teach it. Do not include it in any tranche.** Whether you repair or retire it is your call, but say which and why.

### The respelling repair list

Scoped to `routines` rows a learner of a1.25 actually sees. Cross-theme variants are listed after, and most of them you leave alone.

```
fr.a1.routines.002  le matin       luh mah-TAN   plain n closes a nasal   ->  luh mah-TAⁿ
fr.a1.routines.018  rentrer        rahn-TRAY     plain n closes a nasal   ->  rahⁿ-TRAY
fr.a1.routines.005  je me réveille  (none)       no respelling at all     ->  author one
fr.a1.routines.006  il dort         (none)       no respelling, no voiceflash
fr.a1.routines.007  nous prenons    (none)       no respelling, no voiceflash
fr.a1.routines.013  prendre le petit déjeuner    (none)                   ->  author one
fr.a1.routines.019  se brosser les dents         (none)                   ->  author one
NEW  fr.a1.routines.185  manger    must ship as mahⁿ-ZHAY, matching fr.sons.muettes.037.
                                   Do NOT copy fr.a1.cuisine.041's mahn-ZHAY, which is the
                                   same defect as .002 and .018 above.
```

**Three rows carry no `voiceflash`:** `.005`, `.006`, `.007`. If a `practice` with `skill: 'speak'` names any of them it draws nothing. Check against **Postgres**, not the seed.

**Competing respellings across themes, and what to do:**

- `le réveil` has five (`uhn ray-VEY`, `luh reh-VAY`, `luh ray-VAY`, `ray-VAY`, `ray-VEHY`). Yours is `fr.a1.routines.091` = `luh reh-VAY`. The `reh` is the odd one out for `é`. Repairing your own row to `luh ray-VAY` is defensible; repairing the other four is not your build.
- `déjeuner` has four and `dîner` has four, all outside `routines` except your own bare `day-zhuh-NAY` / `dee-NAY`. Leave the others.
- `tard` has two (`TAHR`, `TAR`). Yours is `TAHR`. A variant that merely differs is not a violation. Leave it.
- `travailler` has two (`trah-vah-YAY`, `tra-va-YAY`). Yours is `trah-vah-YAY`. Leave it.

**Check §3 of the invariants for the two blind spots before you extend this list.** `hasPlainNasalFor` cannot see a word-internal nasal, and it false-positives on a real /n/ after a vowel. Candidates in your set to verify **by hand** rather than by validator: `minuit` (`mee-NWEE`), `sonner`, `nettoyer la salle de bain`, `promener le chien`, `nous prenons`. Run the checker over the whole `routines` slice before you write your test and put the verified passing forms in your report.

**A hyphen inconsistency you will trip over:** `fr.a1.routines.027` is `"le petit déjeuner"` and `.013` is `"prendre le petit déjeuner"`, both unhyphenated, while `fr.a1.cafe.070` and `fr.a1.au-restaurant.090` are `"le petit-déjeuner"`, hyphenated. Different `fr` strings, so no collision fires, but a learner sees both in the flashcard hub. Pick the form your lesson displays, be consistent within `routines`, and say what you picked.

### If you author items

You are authoring **one**: `manger`, at `fr.a1.routines.185`. Everything below still applies to it.

- ids continue the **real** sequence the probe prints as NEXT FREE, which is `185`. Do not backfill gaps 121, 141, 149, 152, 162, 168. Never renumber; ids are the SRS key.
- **Headword shape: bare infinitive for verbs, articled for nouns.** That is what `routines` already does (`se lever`, `dormir`, `travailler` bare; `le matin`, `la douche`, `le réveil` articled) and `manger` is a verb, so it ships bare.
- **No two non-sentence items in one theme may share an `fr`.** Verified: `routines` currently has zero duplicates across all levels. `manger` is not among its 114 rows. Confirm again before you insert.
- **`manger` is a verb, so a1.03 does not move.** This is worth stating plainly because it is the one gate this build does not have to fight: every gendered single-word noun in `routines` (`le réveil`, `la douche`, `le savon`, `la serviette`, `le miroir`, `le café`, `le bus`, `le bureau`, `la nuit`, `la sieste`, and the rest) is **already published and already counted** in `a1-03-genre.test.ts`'s measured ending population. Importing them moves nothing. Authoring a new gendered single-word noun would. Do not author one. If you decide you must, check through the real `endingPopulation` and withdraw rather than argue.
- every item must be reachable: named by a section, or released by a `deckTranche` and carrying a `flashcard` drill.
- `practice` with `skill: 'speak'` needs `voiceflash` on every item it names; `dictation` needs `dictation`. Check against **Postgres**, not the seed. `.005`, `.006`, `.007` fail the first; 35 of the 64 sentences fail the second.

---

## Designing this for a learner, on a phone

Layout rules are in `A1-BUILD-INVARIANTS.md` §2. What is specific to this lesson:

- **The hero is a `steps` section: the day in order, one screen.** `steps` is a real type and `LessonSection.tsx:90` draws it. This is the one section that satisfies "from getting up to going to bed" as a single object rather than as six cards the learner assembles mentally. Six to eight beats, no more, because a phone screen that scrolls has stopped being a sequence.

- **The article contrast is a PAIR, so give it two columns on one screen.** `le matin / l'après-midi / le soir / la nuit` on the left, `midi / minuit` on the right, with the same verb in both columns so the only visible difference is the article. **This is the layout the test must assert.** Split across two sections and every other check in the file stays green while the lesson stops arguing anything: the learner reads a list of times, then a second list of times, and never sees that one list is marked and the other is not. Use `tapTable` or `table`; both are drawn.

- **A `groupDrill` for sorting**, with the parts of the day as the buckets and routine verbs as the items. This is where the 30-to-40 taught core earns its place, and it is the only section shape that makes a learner commit before being told.

- **A `cheatSheet` reference sheet** holding the article rule, the day in order, and the ten highest-value verbs. It is what a learner returns to during a1.26 and a2.22. **Wire the `sheetId` early**, and note the known defect: a `cheatSheet` reached through a reference sheet draws its title and nothing else (a1.13 ships the same defect). Put the sheet in the flow, not only behind a `sheetId`, until that is fixed.

- **Do not invent a clock face or a 24-hour timeline.** No component draws one. The legal section types are exactly: `audio`, `cardDeck`, `cheatSheet`, `commonErrors`, `dictation`, `examples`, `flashcards`, `focus`, `goals`, `groupDrill`, `hacks`, `inhibitionDrill`, `letterGrid`, `listening`, `practice`, `progressCheck`, `pronunciationLab`, `quiz`, `reading`, `reviewDeck`, `roundup`, `scenario`, `scene`, `soundGrid`, `steps`, `story`, `table`, `tapTable`, `teach`, `trapDrill`, `useCases`, `vocabThemes`. An authored field no component reads renders nothing. `steps` is the closest thing to a timeline that actually draws.

- **Put `flex` on a wrapper `View`, never on a `TX`.** A `TX` with `flex` loses its last words while the audio speaks them in full, and this lesson has long sentences.

- **`practice` with `skill: 'write'` draws no writing surface.** If you want the learner to produce, use `typeIn` or `errorSpot` in the quiz, or the dictée. Nothing else makes them write.

### The scene

The social failure this lesson prevents is not being misunderstood. It is being heard as describing your life when you meant today, so nobody books anything and nobody knows why.

Two candidate beats:

1. Someone asks the learner when they are free. The learner answers **"Le soir."** They mean tonight. The other person hears "evenings, in general", says something warm and non-committal about finding an evening sometime, and the conversation moves on. Nothing is arranged. The learner thinks it is arranged.
2. The learner is invited to lunch and says **"Je déjeune le midi."** The phrase does not occur in French. The other person understands it perfectly, does not correct it, agrees, and turns up at a different hour because no hour was actually named.

**Beat 1 is sharper.** It turns on the rule the lesson owns, both speakers are correct and kind, and the failure is a plan that quietly does not happen rather than a mistake anyone names. Beat 2's error is the more interesting one linguistically, but it puts the learner in the wrong on the page, which is the sons register in A1 clothes.

Extract beats to a named `SCENE_BEATS` const, give every beat its own `size` (prose at `md`, the choice and the break at `lg`) and its own `audio`, and keep the break body between 24 and 40 words. The natural choice beat is the moment the learner picks between `le soir` and naming an actual hour.

---

## Shape

v2 lesson: `acts`, a stable `id` on every section, `reframe`, `deckTranche`, `terms`, `errorTriggers`, `drills`, round-based quiz. Follow the v2 spine in `ealch-admin/LESSON-GENERATION-PROMPT.md`.

a1.20 is 27 sections, a1.21 is 26, a1.22 is 28, a1.12 is 30. **26 to 30 is your range, and the weight belongs on the article contrast and the sequence, not on the word list.** You have 114 published items and it will be tempting to spend the lesson introducing them. Do not. If naming the six parts of the day takes three missions, that is correct. Do not stretch it because the deck looks thin, and do not add card decks because the deck looks full.

```
act 1  Votre journée          scene, goals, and the day in order as a steps hero
act 2  Le matin, le soir      the article contrast as a two-column pair, plus midi/minuit as the exception
act 3  Les verbes du jour     the taught core: getting up, washing, eating, working, going to bed
act 4  Mettre en ordre        sorting and sequencing: groupDrill, tapTable, commonErrors, listening
act 5  Racontez votre journée production: reading, practice, dictation, scenario
act 6  Bilan                  quiz, reviewDeck, progressCheck, roundup
```

### Quiz notes specific to this lesson

General rules, including the `fold()` limits, the mcq ceiling, the 40% answer-slot cap and the drill-reachability trap, are in `A1-BUILD-INVARIANTS.md` §4.

**Answer randomisation. Read this before you write a single question.**

The renderers do not treat closed questions the same way, and the difference decides how much of this you have to do by hand.

- **The act-6 `quiz` is shuffled for you.** `LessonPager.tsx:839` renders it through `QuizDeckView`, which permutes each question's options per question per attempt (`LessonRich.tsx:1232`, `:1244`, `:1273`). The authored `correct` index never moves; selection uses original indices and only the display order is permuted. Retry reshuffles. So the authored slot is invisible to the learner **here**.
- **In-mission closed questions are NOT shuffled.** Three sites render `q.opts.map` in authored order and nothing permutes them: `MissionRich.tsx:347` (the `check` on a group), `:732` (`TrapOptions`), `:1941` (the `listening` questions). **A learner who meets three control checks in a row with the answer in slot 1 has learned the position, not the rule.** These are the ones you randomise by hand, and they are the ones this lesson has most of, because act 4 is built out of them.

So the requirement is:

1. **Vary the correct index by hand on every in-mission closed question**: group `check`s, `trapDrill` options, and `listening` questions. Aim for a flat distribution across the available slots, and never let two consecutive questions in the same section share a slot.
2. **Keep the 40% cap on the act-6 quiz** as well. It is the authoring-hygiene guard every A1 test carries and it stays, even though the renderer shuffles.
3. **Assert both, separately.** One assertion over the quiz, one over the in-mission surfaces, so a future author who adds five control checks with the answer in slot 1 goes red. See the test section.
4. **Do not add a shuffle to `MissionRich`.** That is a renderer change, it touches every shipped lesson, and it belongs in its own commit with its own review. If you think it should happen, say so in your report.

Beyond that:

- **Every question about the article needs a situation in the stem.** "Which is correct, `le matin` or `matin`?" has no answer without context. "You want to say you go running every morning. Which do you say?" has exactly one.
- **`mcq` is your strongest format here** because the contrast is a choice between two visible forms and the wrong one is a real string a learner produces. `le midi` versus `à midi` is the single best question in the lesson. At most half the questions may be `mcq`; a1.08 landed at 11/24 and a1.09 at 10/24.
- **`listenChoose` has one job in this lesson and it is `le matin` versus `le matin` inside a full sentence at speed**, where the article is unstressed and the learner has to hear that it is there at all. Do **not** use it for `midi` versus `minuit`: they differ by a whole syllable and it tests nothing.
- **`typeIn` genuinely works for the article**, because `fold()` keeps a final `-e` and `-s` and does not strip a leading `le `. It strips whitespace, so `le matin` folds to `lematin` and `lematin` is accepted; that is fine here because the article is present either way. It does **not** work for anything turning on a capital or a space.
- **No free-text format can test a capital letter.** `errorSpot` runs the same `matchesAccept` → `fold()` path as `typeIn`. Both the a1.08 and a1.09 briefs recommended `errorSpot` for a capital and both were wrong. Only `mcq` can.
- **No question may have a reflexive pronoun as its answer.** That is a2.22's and the corpus cannot support it: `vous vous levez` and `ils se lèvent` return zero rows.
- **Each round names `targets`, and `drillForRound` fires the drill of the FIRST resolving target only, then stops.** A drill named in second place is dead content. Make each teaching drill the first resolving target of exactly one round, and assert it.
- Aim for 24 to 26 questions, matching a1.20, a1.21 and a1.22. Every question needs a `why` that teaches the rule and a `ref` naming a section that exists. Every built A1 lesson is at 100% on this. Do not be the first to reverse it.

### Audio brief notes specific to this lesson

- **`le matin` / `à midi` must be one take, one voice, adjacent.** They are the lesson's contrast. Recorded apart, the learner compares two performances instead of two grammars and the teaching is lost. Write the constraint into `desc`, because a constraint on how something is recorded becomes invisible the moment the clip is delivered.
- **`midi` and `minuit` must be adjacent in the same take**, for the same reason at the word level.
- **The `steps` hero's day must be one continuous take**, in order, with the pauses in the performance. Six clips of one beat each, assembled, will not sound like a day.
- **Never record an unstressed article in isolation.** `le` alone is not the sound the learner needs to recognise; `le matin` at speed is.
- **Pronunciation decision that must not be silently changed later:** `manger` is `mahⁿ-ZHAY`, with the superscript. `mahn-ZHAY` exists in `cuisine` and `rp-repas` and is wrong under the house convention. If a later author "fixes" your row to match those, they have introduced the defect. Assert it.

---

## Wiring

Pattern and hazards are in `A1-BUILD-INVARIANTS.md` §5. Specific to you:

- `scripts/author-routine-batch.ts`, `scripts/merge-routine-into-seed.ts`, `scripts/data/routine-{corpus,imported,lesson,terms}.ts`, and `"content:routine": "tsx scripts/author-routine-batch.ts"` in `package.json`.
- **Model the import on `pays-imported.ts`**, not on a corpus file. Your build is 114 imports and 1 authored row, which is the inverse of most A1 lessons and closer to a1.22 than to anything else.
- **The single authored id is `fr.a1.routines.185`.** Confirm with the probe immediately before you insert; the count matters as much as the maximum, because a concurrent author can land a row below your top and a highest-id check will not see it.
- **`routines` IS in `SEED_CUT.themes`** (338 in Postgres, 338 in the seed), so the merge does not have to carry rows through the cut and no blank cards can ship from a theme mismatch. This is the easy case. Do not copy merge logic from `merge-questions-into-seed.ts`, which handles the hard case and will read as necessary when it is not.
- **Rebind the unit's `themes` from `["routine"]` to `["routines"]`** in the merge, with a before-state guard that refuses to run if it is not what this brief measured. `merge-adjectifs-into-seed.ts:483` and `:503` are the pattern.
- **Diff the DB bodies against git before any `content:publish`.** `seed.json` can run ahead of Postgres during authoring and publish has destroyed uncommitted work twice on this project. **Never `git checkout seed.json`**: reverting it discards other authors' uncommitted lessons. Re-run the merge scripts instead.
- **Do not hand-bump `seed.version`.** It is the OTA snapshot number. See §5.
- `*.md` is gitignored here. `git add -f` this brief and any report you write beside it.

---

## Your test: `ealch-v2/src/content/a1-25-routine.test.ts`

Baseline measured **2026-08-07**: `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"` gives **2302 tests, 2302 pass, 0 fail**. Measure it again yourself; do not carry this number.

The always-required assertions are in `A1-BUILD-INVARIANTS.md` §6. Specific to this lesson:

- **`matin`, `midi`, `soir`, `se lever`, `manger` and `dormir` are each taught and tested by name**, asserted individually rather than as a count. `manger` is the one most likely to be dropped, because it is the only authored row and the only one that has to be inserted rather than imported.
- **The article contrast is taught with both sides present**, and at least one section shows the articled parts of the day and the bare `midi` / `minuit` **together on one screen**. Assert it by section id and by the presence of both sets in that one section's body. That contrast is the lesson, and separating it is how the lesson decays into a word list. Check it the way `a1-20-interrogatifs.test.ts` checks its hero: by id, and strictly, because a looser check there passed with the hero deleted.
- **`midi` and `minuit` are taught as the exception**, with an articled part of the day visible beside them.
- **The unit is bound to `routines`, not `routine`.** Assert the seed's `a1.25` unit row carries `themes: ["routines"]`. This is the whole premise of the build and a future author reading the spine file will see `routine` and be tempted to "correct" it back.
- **`fr.a1.routines.185` is `manger`, and its respelling is `mahⁿ-ZHAY`.** Assert the exact string. The superscript is the point.
- **`fr.a1.routines.002` is `luh mah-TAⁿ` and `.018` is `rahⁿ-TRAY`**, if you repair them. Import `hasPlainNasalFor` and additionally assert by name which words must carry the superscript and which must not, because the checker cannot see a word-internal nasal and false-positives on a real /n/ after a vowel.
- **No reflexive paradigm leaks in.** Assert that no `groupDrill`, `tapTable` or quiz question has a reflexive pronoun as an answer, and that the string "pronominal" appears nowhere a learner reads. **Write this against production surfaces (decks, vocab, drills, quiz) rather than over every string**, or it will fire on legitimate context and get deleted. Four ways a content guard fires on legitimate content are documented in the invariants; read them before you write this one.
- **`ce matin` is not taught.** Same scoping: production surfaces only. It is allowed once in the scene or the reading passage.
- **No correct-answer slot holds more than 40% of the act-6 closed questions.** The standard assertion, derived not hardcoded. `a1-20-interrogatifs.test.ts:575` is the pattern.
- **The in-mission closed questions are spread.** A second, separate assertion over the group `check`s, `trapDrill` options and `listening` questions, because `MissionRich` renders those in authored order and does not shuffle. Assert both that no slot exceeds 40% and that no two consecutive questions within one section share a correct index. **This assertion does not exist in any shipped A1 test.** You are adding it. Say so in your report.
- **Every free-text question accepts the answer it displays**, through the real `matchesAccept`.
- **Every item named by a section is reachable**, and every item released by a tranche carries a `flashcard` drill.
- **`fr.a1.routines.009` is not in any tranche or section.** If you retire it, assert it is gone; if you repair it, assert the repaired string. Either way, pin it, because it is the kind of row a later author restores without knowing why it left.
- **The parity tests at the bottom read both sources**, the seed and the authored source in `ealch-admin`, and fail when they drift. a1.20's file is the model.

Counts must be **derived** wherever a count is asserted. A hardcoded number fails on itself the first time content legitimately changes, and the fix is then to edit the test, which is how a test comes to certify a bug. The exceptions are the six named headwords, the article contrast and the exception pair: those are the SHAPE of the lesson rather than a measurement of it, and a later trim that quietly drops one is exactly what the file exists to stop.

**Mutation-test before you call it done.** Break the two-column contrast, drop `manger`, leak a reflexive pronoun into a drill, un-repair `mahⁿ-ZHAY`, put four consecutive control-check answers in slot 1, rebind the unit back to `routine`. Confirm each goes red. An assertion that cannot fail is worse than no assertion.

---

## UNVERIFIED

- **The total item count in Postgres.** The probe printed 27,353 published sentences but not a total item figure, so every theme count above is exact and the whole-database size is not stated. If it matters, add `--unit` to the probe or query `select count(*) from items where published`.
- **`hasPlainNasalFor` has not been run over the `routines` slice.** The two plain-nasal defects listed (`.002`, `.018`) come from the probe's own warnings, which use the same rule. The false-positive candidates (`minuit`, `sonner`, `nettoyer la salle de bain`, `promener le chien`, `nous prenons`) are flagged by inspection, not measured. Run the checker before you write the respelling assertions.
- **Whether `a1-03-genre.test.ts`'s ending population already includes the `routines` gendered nouns** is inferred from the fact that they are published and in the seed, not confirmed by reading that test. The claim "importing moves nothing" depends on it. Read `a1-03-genre.test.ts` and confirm before you rely on it.
- **Which of the 64 published sentences are suitable for a dictée** has not been assessed. 35 carry no `dictation` drill; that is a count, not a judgement about length or vocabulary.
- **Whether a1.23 or a1.24 is in flight.** Neither is in the seed as of v19. A concurrent author could start either during your build.
- **The `sheetId` / `cheatSheet` defect is carried from the a1.13 finding**, not re-measured here. Confirm on a device before you decide how to place the reference sheet.
- **The five items with no respelling** (`.005`, `.006`, `.007`, `.013`, `.019`) were measured in the seed. They were not separately confirmed absent in Postgres, though the seed and Postgres agree at 338/338 for this theme, which makes a divergence unlikely rather than impossible.

---

## What to report

- **The `routine` versus `routines` decision**, and confirmation that you rebound the unit rather than populating the dead theme. Also that **`a2.22` is bound to the same dead theme** and remains so.
- **What the probe said about the vocabulary**, and confirmation that you IMPORTED 114 rows and AUTHORED exactly one (`manger`, `fr.a1.routines.185`), with the count and maximum re-checked immediately before insertion.
- the reframe you chose, and why that one, and what you rejected. If you did not take "The parts of the day take `le`. Midi and minuit take nothing.", say what beat it and on what evidence.
- **`fr.a1.routines.009`**, the French grammar note stored as a learner sentence, and whether you repaired or retired it.
- **your respelling repair list**, and any row you deliberately left alone, including the four cross-theme variants this brief told you not to touch.
- **the hyphen decision** on `le petit déjeuner` versus `le petit-déjeuner`, and what a learner now sees in the flashcard hub.
- **confirmation that a1.03's printed figures did not move**, and which gendered nouns you considered authoring and withdrew.
- how you taught the article contrast, and the section id where a learner sees both sides on one screen.
- **how you handled the reflexive `se`** without teaching the paradigm, and confirmation that no quiz answer is a reflexive pronoun.
- **answer randomisation**: the slot distribution across the act-6 quiz, and separately across the in-mission control checks, traps and listening questions. Say whether you added the in-mission assertion and what it caught.
- corpus: how many items imported, how many authored, in which theme, and confirmation that the bare-infinitive / articled-noun form rule held.
- lesson: mission count, act structure, quiz size and format mix, and confirmation that **every question has a `why`**.
- test count before and after, with the before figure **measured rather than taken from this file**.
- which missions you verified, by what route, and **which half of the verification you did** if adb was unavailable.
- **anything you could not verify, said plainly.** A gap you name costs an hour. A gap you paper over costs a session, and this project has lost two that way. If a claim in this file has gone stale, say so rather than working around it.

Do not use AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the big one", "listen to the trap", "get those two right", "this is the part that pays", "here is the catch", and anything of that register. No em dashes in authored learner-facing copy.
