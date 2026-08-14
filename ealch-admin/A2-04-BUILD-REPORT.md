# a2.04 build report — « Prépositions de lieu », seq 13

Doctrine §F. Built 2026-08-13/14. `a2.04.l1` v3, applied to Postgres and merged
into the seed. Not published.

---

## 0. The one thing that changed the whole build

**The brief's central claim is wrong, and it is wrong about the lesson rather
than about the corpus.** It asks for a five-row grid of place types:

```
en France        feminine country
au Japon         masculine country
aux États-Unis   plural country
à Paris          city
chez le médecin  a person
```

**Rows one to three are a1.22's, shipped at seq 25.** Read off
`pays-lesson.ts` `grammarIntroduced`, byte for byte:

```
'en, au and aux with a country name, selected by the country's gender and number'
'de, du and des with a country name, selected by the same property'
'That the preposition absorbs the definite article, so no article follows it'
'en rather than au before a masculine country beginning with a vowel'
```

a1.22 ships `THE_TWELVE` with a `to` and a `from` on every country, a three-row
hero grid keyed on `slot` (f · m · pl), the vowel-masculine exception, and
`sheet.a1.22.grid` holding both prepositional columns.

**And row four is a1.21's**, which says so in its own handover
(`prepositions-lesson.ts:2220`):

> a1.21 DOES teach `à` + place-by-name (`à Paris`, `à la maison`, `au bureau`)
> and the full à-contraction.

So the only row of the five that no shipped lesson owns is **chez**, and
building the brief as written would have repeated two lessons the learner has
already done, which is the exact failure the brief itself warns about.

### What the lesson owns instead

**What each word does to the article.** a1.21 taught that à and de fold into the
definite article. a1.22 taught that a country's article decides between en, au
and aux. Neither could say what the other knew, and a learner arriving at seq 13
has two systems that both claim the word `au` with no statement anywhere that
they are the same operation: **« au Japon » IS « à + le Japon »**, and nobody
has told them.

Put the three behaviours in one column and the lesson is one screen:

```
word    + le       + la      what happened to the article
à       au         à la      folded in                     a1.21
de      du         de la     folded in                     a1.21
en      en         en        thrown away                   a1.22
chez    chez le    chez la   nothing at all                THIS LESSON
```

`chez` is the only place preposition in the language that leaves the article
alone, and it is the only row of that table nobody owns. That is why the lesson
is at seq 13 rather than anywhere else, and it is why the reframe is about the
article rather than about the place.

---

## 1. Every claim in the brief measured false

Nine, which is the highest count in this band; the running rate is three to six.

**1. "Owns: the choice mechanism… the five place types belong in one grid."**
Three of the five are a1.22's and the fourth is a1.21's. §0 above.

**2. "des = de + les was a claim in a1.16's brief. Read what a1.16 and a1.29
actually shipped."** NEITHER OF THEM SHIPPED IT. `a1.16` (Adjective Placement)
contains no contraction language at all; `a1.29` owns `du`, `de la` and `de l'`
as partitives and its canDo does not mention `des`. The unit that owns
`des = de + les` is **a1.21**, in a table cell (`['de + les', 'des']`), in a
reference sheet, and in `grammarIntroduced`. The brief sends the author to the
two lessons that do not have it and not to the one that does.

**3. "Whether a1.21 already covers chez."** It SHOWS it and does not drill it,
and it hands it forward by name. One cardDeck card, one sheet paragraph, one
clause of `grammarIntroduced` (`chez as taking an animate complement`), and no
drill, no quiz question and no production surface. Its roundup says *"Entre needs
two things and chez needs a person, and you will meet both again."* So the lesson
is not narrower than described on this point: chez was promised to a later lesson
and this is that lesson.

**4. "Londres 0 rows ABSENT."** True, and it is the one city in Europe this
corpus has never mentioned. It is also not needed: `à Lyon` has 37 published
rows, `à Montréal` 28, `à Paris` 26, and the CITY row has more evidence behind it
than any other row of the grid. **`Bordeaux` is a trap worth naming: the only
Bordeaux headword in the corpus is a COLOUR** (`fr.sons.couleurs.016`, `bor-DOH`).

**5. "Assume the vocabulary exists… your block may go almost unused, and that is
the expected outcome."** Half right, and the half it is wrong about is the half
the lesson is built on. Every NOUN exists. Not one of the PHRASES does, as a
card:

```
chez le médecin    22 published rows,   0 with a respelling
chez le dentiste   21 published rows,   0 with a respelling
à Paris            26 published rows,   0 with a respelling
en France          30 published rows,   1 with a respelling
au Japon            3 published rows,   0 with a respelling
```

283 published rows hold `chez`, TWENTY carry a respelling, SIX of those twenty
carry the banned U+203F tie, and not one of the remaining fourteen is chez in
front of a named person with an article. a2.13 §1 exactly. So the block is
**not** almost unused: 26 rows authored out of a 40-id block.

**6. "The countries exist… `la France` 2 rows fr.a1.pays-et-nationalites.001."**
Correct, and the brief's own probe line asks for `--theme pays,lieux,…`, which is
two themes that do not exist. It says so itself and then repeats the dead names.

**7. "Every country row carries gender… These are multi-word rows (le Japon), so
they are safe."** **FALSE, AND IT IS THE LARGEST THING THIS BUILD MEASURED
WRONG.** `endingPopulation` strips the article, so `le Japon` is a gendered
SINGLE WORD to it. See §3.

**8. "No ear question can distinguish en from and-like nasal neighbours."** True,
and it misses the bigger one: `au` and `aux` are ONE sound and `du`/`des` are
close to one, so the pairs this lesson would most want to ask about cannot be
asked either. Nothing here is asked by ear and the reason is on the progress card.

**9. "The à/de symmetry belongs in one table with two columns, going and coming
from."** That table is a1.22's `sheet.a1.22.grid`. It survives here as ONE table
in the reference sheet, credited, not as in-flow teaching.

---

## 2. Imported versus authored

**26 authored, 37 imported out of 18 themes, ZERO headwords authored.**
Corrections §2 holds for the eleventh build in a row on headwords and is wrong
about the block going unused.

Every noun and every person is imported. What is authored is the PHRASE, because
that is the unit the lesson teaches and the corpus holds 283 rows of evidence for
it and fourteen usable cards.

```
fr.a2.prepositions-essentielles.129 .. .154   26 rows
  129-132  the four kinds, in ONE frame          sort
  133-137  the phrases that had no card          phrase
  138-140  the man, the shop and the same door   contrast
  141-144  chez with a pronoun                   person
  145-147  a country and two buildings           place
  148-150  the scene                             scene
  151-154  the conversation                      talk
```

The frame `Je vais …` was READ OFF `fr.a2.verbes.261` (« Je vais au parc. »,
`zhuh veh oh PARK`), which a2.02 published at seq 5 and which this lesson imports
as a fifth row of the same shape, so the frame is somebody else's.

Full import list with source themes and the reason for each: `IMPORTED` in
`scripts/data/prepositions-lieu-corpus.ts`. Twelve rows read and refused are in
`READ_NOT_IMPORTED`, **six of them for U+203F**, including the only card-ready
« chez elle » and the only card-ready « aux États-Unis » sentence in the corpus.

---

## 3. a1.03's ending figures, before and after, and the guard that did not exist

**Before: 35 pass. After: 35 pass. Ending population 1890 both ways.**

**And v1 moved four of a1.03's printed figures with every host gate green.**

```
-e     904 -> 909      -in   45 -> 47
-ant    18 ->  19      -al   11 -> 12
```

`a1-22-pays.test.ts` went red on the first full-suite run after the merge.

**THE BATCH'S OWN CHECK RAN THE REAL `endingPopulation` AND REPORTED THE
POPULATION UNCHANGED, AND IT WAS RIGHT.** It was answering a different question.
In POSTGRES those rows already exist, so importing them adds nothing. **a1.03
measures the population off THE SEED, and a CARRY is what puts a row into the
seed.** Fifteen of this lesson's imports are gendered nouns; nine of them were
absent from the seed and joined the population the moment the merge carried them.

Nothing in the doctrine, the invariants, the corrections or the ledger says this,
because **no A2 lesson before this one imported a gendered noun**: a verb, an
adjective and an adverb never carry one.

**Resolved by withdrawal, not by re-rendering a1.03.** a1.22 met the same
arithmetic and re-rendered a1.03 because its whole subject was the gender of
countries and there was no country set that left the counts alone. This lesson's
subject is the word in front of the noun and it teaches no noun's gender
anywhere, so invariants §5 applies as written. The fifteen are DISPLAY rows:
their French, gloss and repaired respelling are printed on cards out of the
manifest, the batch still repairs them in Postgres, and they are not `itemIds`
and not in any tranche. The vocabulary already has homes — a1.22 decks the
countries and `a2.28` is called « Chez le médecin ».

**Nothing was withdrawn from the corpus.** No country was authored, so none had
to be.

The merge now measures the population off the seed before and after and dies on
any move, and it cleans up rows an earlier run of itself introduced.

---

## 4. The reframe

```
À folds the article in. En throws it out. Chez leaves it alone.
```

Thirteen words, three clauses, one per behaviour. It sits ON TOP of a1.22's
reframe rather than beside it: a1.22 says *learn the article*, this says what each
word then does to it. Carried by 6 sections, 11 uses.

**Rejected, and recorded in `REFRAME_REJECTED`:**

- **"The place decides the preposition, so look at the place first."** THE
  BRIEF'S OWN CANDIDATE, and **a1.21 already rejected this exact shape** under
  the name "Look at the word after it": *diagnostic rather than generative, so it
  helps you read French and this lesson fixes something that happens while
  speaking.* It is also eleven words that instruct nothing, and three of the
  branches it points at are a1.22's.
- **"Five kinds of place, five words."** The table of contents, and three of its
  five rows are a1.22's grid with the labels changed.
- **"Chez is for people."** True, and it is one row of four. That is the size of
  a term, and it is one.
- **"Learn the place with its article."** a1.22's reframe with a different noun
  in it.

---

## 5. How the Owns outweighs the paradigm

```
act 1  The word that stopped it       3 sections   scene, goals, the four kinds
act 2  What it does to the article    4 sections   THE OWNS
act 3  Chez                           6 sections   THE OWNS
act 4  The other three kinds          4 sections   the paradigm
act 5  Out loud                       4 sections
act 6  Prove it                       3 sections
```

**Owns 10 sections against the four-kind paradigm's 5**, asserted in all three
layers. 24 sections, 6 acts, 30 questions, 48 items, 2 stepped trapDrills, 1
reference sheet, 8 terms.

Quiz: 14 mcq, 9 typeIn, 7 errorSpot, **0 listenChoose**, 5 rounds each leading on
a different trigger, every question with a `why` and a resolving `ref`, every
free-text question checked through the real `matchesAccept`.

**Questions I wanted and could not write.** An ear question on `au` against
`aux`: they are one sound. An ear question on `du` against `des`: close enough
that a recording cannot settle it. An ear question on whether an unstressed `à`
was there at all: it can vanish. `NO_EAR_QUESTION` holds the pairs and the
progress card tells the learner why nothing here is asked by ear.

---

## 6. Respellings

**Nine repairs: 7 the checker reports, 2 it cannot see, 3 house rather than
minimal.** One table with `half`, `blind` and `house`, per a2.17 §2, and the
guard asserts `(half !== to) === (blind || house)`.

```
fr.a2.systeme-de-sante.001  le médecin      mayd-SAN   -> mayd-SEHⁿ    house
fr.a1.amis.011              le copain       koh-PAN    -> koh-PEHⁿ     house
fr.a1.amis.030              Bienvenue…      byan-…     -> byehⁿ-…      house
fr.a2.courses.024           la boulangerie  lahnzh     -> lahⁿzh       BLIND
fr.a1.la-ville.103          la banque       BAHNK      -> BAHⁿK        BLIND
fr.a2.systeme-de-sante.042  le dentiste     dahn-      -> dahⁿ-
fr.a1.au-restaurant.001     le restaurant   RAHN       -> RAHⁿ
fr.a1.amis.059              passer chez…    KUHN       -> KUHⁿ
fr.a1.routines.067          rentrer à la…   two nasals, both visible
```

**/ɛ̃/ is settled as `EHⁿ`** for this lesson's rows, read off three published
sons rows (`fr.sons.alphabet.224`, `fr.sons.nasales.144`, `fr.sons.voyelles.229`)
against two a1 rows for `SAⁿ`. a1.22 measured that the sons rows follow the
convention and the a1 vocabulary rows do not, nine times out of nine.

**`en` is `ahⁿ`**, read off a1.22's own `toRespell` values and confirmed by
`fr.sons.nasales.029`, which publishes `AHⁿ FRAHⁿS` inside a sentence.

Seven rows found broken and NOT repaired, because this lesson does not display
them: `NOT_REPAIRED`.

### A false positive no document in this band records

**`hasPlainNasal` has two branches and only the second has rescues.**

```
branch 1   /(?:AH|OH|EH|UH|EU|AI|OU)[NM](?![A-Za-zÀ-ÿ])/     NO RESCUE
branch 2   a lone vowel closed by N or M, then two rescues
```

So **the house two-letter vowel spelling cannot be rescued.** `même` is /mɛm/
with a real /m/ and no nasal vowel anywhere:

```
MEHM   FLAGGED     branch 1, and there is no way back
mem    not flagged branch 2, rescued by the `ême` in the French
```

**SEVEN published rows spell it `MEHM` and the checker flags every one**,
including a2's own `fr.a2.expressions-argot.032` and two `quand même` rows. One
row spells it `mem` and passes: `fr.sons.jours-et-mois.133`, « à la même date »,
`ah lah mem DAHT`.

**a2.14 §1 found the checker MISSING a bare-vowel spelling where it SEES the
two-letter one. This is the same asymmetry pointing the other way, and it is
worse, because a2.14's costs a repair and this one cannot be repaired at all in
the notation the house prefers.** This build takes the invariants §3 remedy for
`automne`: `mem`, read off a published row in the same word and the same
position, nothing repaired, and the false positive **asserted as a negative** in
all three layers so the day the checker improves the build fails rather than
carrying an unexplained workaround.

Nasal count across the authored rows: 12 seen, 2 missed. The false-positive path
on a real /n/ was met once, on `même`, and it is the shape above.

---

## 7. What the neighbours keep, and what a2.18 gets

- **a1.21** owns `sur`, `sous`, `dans`, `devant`, `derrière`, `entre`. Absent
  from every production surface, guarded by section TYPE rather than by string,
  with exactly **one recap line, in the roundup**. It also owns the whole
  contraction table including `des = de + les`, which this lesson names and does
  not restate.
- **a1.22** owns countries as vocabulary, nationalities, continents and the -e
  gender rule. Three countries are referenced, all by imported id, asserted by
  id. No country vocabulary section. Eleven of a1.22's terms are guarded absent.
- **a2.18 (seq 14) keeps both temporal senses, untouched and confirmed.** No
  `en` + duration and no `dans` + future point appears anywhere. Guarded as a
  SHAPE with 3 must-fire and 5 must-not-fire lines, because a2.17 §7 measured a
  French-morphology shape firing on the English half of a learner surface. The
  deferral is named on a learner surface so the learner knows it is coming.
- **a2.27 (Transportation, seq 26) declares a2.04 as its prerequisite**, so this
  lesson is NOT a leaf and the strict dependents check was kept.
- **a2.28 is called « Chez le médecin »** and is the only other unit in the
  curriculum whose body holds the word. It is named in the roundup.
- **a1.29** owns the partitive. Named once, and quantity is taught nowhere.

---

## 8. The wording shipped about the contraction

Checked against what a1.16 and a1.29 actually shipped (§1.2). The lesson says,
on a card and in the sheet:

> À plus le is au and de plus le is du, and a1.21 gave you both. Chez does none
> of that: chez le, chez la, chez les, two words every time.

and

> À and les give aux, de and les give des, en still gives en, and chez still
> gives chez les. The plural changes nothing about which of the three things
> happens.

Nothing restates the rule as new. `a1.29` is named once, for the other `du`.

---

## 9. Mutation testing

**26 mutations, 0 caught by nothing, 0 skipped.** The five the brief names by
name are rows 1 to 5. `scripts/_a204_mutate.mjs`.

**SIX revealed a genuine weakness rather than confirming a strength**, which is
above the measured rate of two per build:

1. **The wrong-form guard was a LIST and « chez la gare » went straight through
   it** into the reference sheet. Replaced by `CHEZ_PLACE_SHAPE`, checked in both
   directions. A learner error a guard can only see in the shapes somebody
   thought of is not guarded.
2. **A re-authored country collided with nothing.** The duplicate-`fr` check is
   per THEME, so authoring `la France` into `prepositions-essentielles` quietly
   gives a1.22's card a second copy in a second deck, which
   `flashhub-coverage.test.ts` cannot see across two themes. Added: no authored
   row may re-state an imported one.
3. **The merge had NO jargon check at all**, so `locative` in `intro` and in a
   cardDeck `sub` both went through it. a2.16 §4 exactly: the merge is the layer
   that runs when somebody re-merges without re-applying.
4. **The merge's grid loop agreed with itself**, so dropping a kind out of
   `KIND_ORDER` passed, and setting an owner to `null` skipped its own check.
   Four and three are literals now.
5. **The merge's `en` row check read the behaviour label and not the cells**, so
   giving `en` `en le` and `en la` passed.
6. **The merge's three-value repair assertion sat inside the CARRY loop**, so
   un-repairing the one blind row it does not carry passed.

One mutation (row 25, clustering the exam answers) did not actually remove the
claim: moving one answer took slot 1 from 4/14 to 5/14, still under the 40% cap.
a2.14 §8's phenomenon, not a hole.

---

## 10. Device verification, and the defect it found

**Both halves done, on a Pixel 6 (21041FDF600BMN) over USB with Metro on 8082.**

Host half: the served bundle was pre-built (24.6 MB, http 200) and grepped for
every new string. Device half: the overview, the mission list, missions 3, 4 and
11, and the reference sheet.

**A FOUR-COLUMN TABLE INSIDE A REFERENCE SHEET CLIPS ON A PIXEL 6. a2.03
measured FIVE and this build read four as safe on that authority.**

```
THE PLACE  THE WORD  EXAMPLE  TAU…      `TAUGHT IN` cut, `a1.2…` under it
WORD       + LE      + LA     + LE      `+ LES` cut, `aux` and `des` cut
```

The table does scroll horizontally per table, and scrolling to reach the fourth
column pushes the FIRST column off the other side, so the two things a lookup
exists to be read against each other are never on screen together. Every host
gate was green: the strings are valid, the tables render, and only the width is
wrong. **This is the fourth width defect in the band** after the mission-row
title (a2.13), the term-chip row (a2.03) and the tapTable header and cells
(a2.16, a2.17).

**v2 to v3.** Both sheet tables are three columns and each fourth column is a
`teach` block underneath, which is the only shape a sheet has that cannot clip.
Re-verified after a cold restart: all three tables fit with no clipping. The
guard in the batch, the merge and the test is now `cols.length <= 3`.

**What rendered correctly:** the eyebrow `A2 · LEÇON 13`; `intro` on both the
overview card and the lesson cover; all 24 mission titles in full with none cut
at the hub's 27-character ceiling; the four-kind tapTable with every cell on one
line; the article tapTable with `chez le` / `chez la` and the `en, en, en` row
reading as intended; three term chips per row inside the width; and the chez
trapDrill's stepped RULE step with its own Continue above the fold.

**Gaps I did not close:** I did not walk all 24 missions, and I did not run the
dictée, the speak mission or the exam on the device. The three screens the build
turns on were all read.

---

## 11. The block, and the counts

```
fr.a2.prepositions-essentielles.129 .. .168     40 ids, 129-154 used, 155-168 free
  ROW_COUNT_BEFORE 127   max .128, one gap at .098
  after            153   = 127 + 26, and nothing else landed inside the block
```

The namespace already held 127 rows nobody in this band authored, so the test and
the batch are scoped to the BLOCK and never to the prefix. Ledger §a2.16-1: a
prefix filter here would pick up a hundred and twenty-seven strangers on the
first run.

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3550   pass 3550   fail 0     measured 2026-08-13, before a2.04
  tests 3601   pass 3601   fail 0     after a2.04 (+51)
a1-03-genre.test.ts   35 pass before, 35 pass after; ending population 1890 both ways
seed.json             version 36, 9015 items, 54 lessons, 75 units  (before)
                      version 36, 9047 items, 55 lessons, 75 units  (after,
                        NOT published; the merge left the version alone)
npx tsc --noEmit      0 in ealch-v2 and 0 in ealch-admin
pnpm content:parity   ONE pre-existing divergence (b2.01.l1, database-only,
                        in_review). Nothing in the seed is at risk.
mutation harness      26 mutations, 0 caught by nothing, 0 skipped
```

**15 of this lesson's 37 imports were absent from the seed and would have drawn
blank cards.** Corrections §10 puts a2.11's exposure at two rows; here it is
fifteen, and the merge carries the 22 it owns as items.

---

## 12. What I found wrong or incomplete in A2-BRIEF-CORRECTIONS.md

Per §12 of that file.

**§2's "you will author almost no headwords" is right about HEADWORDS and
misleading about the BLOCK.** It predicts the id block will go almost unused.
Every headword this lesson needs exists and none was authored, and the block
still took 26 rows, because the corpus is rich in evidence and poor in CARDS and
the unit this lesson teaches is the phrase. a2.13 §1 already says this about
sentences; §2 should say it about blocks.

**§11's theme table names `pays`, `lieux` and `temps` as dead and it is the
suffixed-name error a third time.** §14.2 corrects `adjectifs` and `adverbes`;
the same paragraph still lists `pays` bare. The live theme is
`pays-et-nationalites` (337 published rows) and this lesson's own home is
`prepositions-essentielles` (430). **Probe the suffixed name before believing an
absence** now holds for five theme names, not two.

**§6 and §14.1 describe the checker's blind spots and neither describes its
FALSE-POSITIVE asymmetry.** Invariants §3 records the false positive on a real
/n/; what neither says is that **the first branch of `hasPlainNasal` has no
rescue path at all**, so the house two-letter vowel spelling is unrepairable
where the bare-vowel one passes. Seven published rows are affected. §6 gains a
fourth shape.

**§9's list of holes in the guards you will copy gains a fifth: `LessonDrill.items`
holds CORPUS IDS and `groupDrill.items` holds CARD OBJECTS, so a key-based walk
cannot classify either.** Every id in this lesson contains the theme name
`prepositions-essentielles`, so the jargon check fired on the id rather than on
any copy, thirty times over. Filter by SHAPE (`^fr\.…\.\d+$`) rather than by key,
which also covers the section ids and trigger ids a2.14 §6 had to rename around.

**And §7's "no unit owns X" advice worked exactly as written.** Reading the two
briefs and then the two shipped lessons' `grammarIntroduced` is what found §0.
The unit-body search would have said `chez` is named by a2.04 and a2.28 and
nothing else, which is true and would have hidden the whole problem.

---

## 13. What a2.18 and a2.27 inherit

**a2.18, seq 14, the very next lesson.** Both temporal senses are untouched and
named on a learner surface: *"En also means how long something takes and dans
also means how far ahead something is, and both of those are a2.18, which is the
very next lesson."* `TIME_SHAPE` in this lesson's corpus is the guard, checked in
both directions, and a2.18 can invert it. **`il y a` is still owned by no unit at
any level** (corrections §11 lists it as an absence and the preflight confirms no
unit names it); this lesson does not touch it.

**a2.27, Transportation, seq 26.** It declares a2.04 as its prerequisite. It can
rely on the four-kind sort, on `chez`, and on `sheet.a2.04.lieu`, which is a
lookup a learner will come back to. Directions and transport are untouched here:
`aller à la gare` is an example sentence and there is no directions content.

**a2.28, « Chez le médecin », seq 27.** Its whole title is this lesson's third
card. It can assume `chez` and `chez le`/`chez la` outright.

**And the vocabulary is free.** This lesson owns no noun. The fifteen gendered
nouns it prints are display rows with no `itemId` here, so a2.27, a2.28 and
a2.29 can deck any of them without colliding.
