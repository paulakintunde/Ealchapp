# a2.21 build report

« Le passé composé avec être », seq 18 on the A2 trail. Built 2026-08-14/15.
Applied to Postgres and merged into `seed.json` at **v3**. Not published.

Doctrine §F, plus the five things the brief asks for by name.

---

## 0. THE HEADLINE

```
lesson        a2.21.l1 v3, 25 sections, 6 acts, 36 questions, 68 items
corpus        46 rows authored at fr.a2.verbes.651..696, 22 imported, 0 headwords
              fr.a2.verbes 482 -> 528, exactly +46
seed          9215 -> 9267 items (+46 authored, +6 carried), 59 -> 60 lessons
suite         3779 -> 3860, 0 fail        tsc 0 in ealch-v2 AND 0 in ealch-admin
mutations     47, 0 caught by nothing, 0 skipped, SEVEN finding a weakness
device        9 screens on a Pixel 6; the gaps are named in §11
```

---

## 1. THE TRANSITIVE-AUXILIARY DECISION, WHICH IS THE LARGEST JUDGEMENT CALL

**Decision: name that the split exists, show it receptively on two verbs, leave
the rule to B1.** That is the brief's second option, and the measurement is what
makes it the only one rather than the safer one.

Measured across every published row, a form of avoir in front of any of the four
cells against a form of être, and RE-MEASURED by the manifest on every run:

```
verb        avoir   être
sortir          1     24
monter          4      9
descendre       0      5
passer         45     26
rentrer         0     13
retourner       0      8
```

**THE BRIEF'S GROUP OF SIX IS A GROUP OF TWO.** Three of the six have ZERO
published transitive uses in the whole corpus and a fourth has one. Teaching a
named group of six with a direct-object test would teach a rule against four
verbs this corpus never uses that way, and would spend a mission doing it.

`passer` is not an exotic case either: it is forty-five of the fifty rows, and
almost all of them are `passer un examen`, which the corpus already publishes as
a FAUX-AMI at A1 and at sons level. A learner meeting « elle a passé un examen »
is meeting a lexical item they have, not an auxiliary decision.

So the split gets ONE cardDeck (`s16-object`), five cards, two pairs, and this
line on the last one: *« Recognise it when you read it. Nothing later in this
lesson asks you to produce one, because the thing you are learning is which verbs
need être, and these are the places where they do not. »*

**And it is enforced rather than stated.** No production surface carries either
avoir half; the four transitive rows carry no `dictation` drill; and all three
layers walk the list. Mutation 17 (put a transitive row in the dictée) and
mutation 18 (ask for one in the exam) are both caught by the batch and the merge.

**One refinement the brief did not anticipate.** The first version of the guard
refused BOTH halves of each pair on a production surface, which would have
forbidden « Elle est passée devant la gare » — the INTRANSITIVE use, which is
exactly what the canDo asks the learner to produce. The guard now refuses the
avoir half only.

---

## 2. THE a2.01 BOOKEND, AND THE WORDING QUOTED

**It landed.** `s08-bookend` sits immediately after the four forms arrive, so the
learner meets the parallel while the four spellings are still on the screen
behind them.

The string, verbatim, read off `a2.01.l1` v8 rather than reconstructed:

> **Four of the six forms sound the same, so the pronoun carries the person.**

It is the head of card 1. Card 1's body is the distance:

> a2.01 said it in the first lesson of this level, about six forms of the
> present. Seventeen lessons later it is four forms of the past and the same
> sentence covers them.

And card 3 is the exact parallel, which is the part worth having:

> There the pronoun did the work the ending could not. Here the subject does, and
> there is nothing left for the ear at all: all four are one sound.

**A paraphrase goes red in all three layers.** The literal is asserted in the
batch, in the merge and in the test, and mutation 2 confirms all three.

**And the test asserts a2.01's OWN reframe too**, off `seed.json`, so the day
that lesson rewords it this one fails rather than quoting a line nobody shipped.

---

## 3. THE NEGATION STRING IS IDENTICAL ACROSS THREE LESSONS

Confirmed, byte for byte, and the test reads all three out of `seed.json`:

```
a2.19.l1  reframe   Wrap the verb that changed, not the one carrying the meaning.
a2.05.l1  quotes it verbatim
a2.21.l1  quotes it verbatim
```

**None of the three differs.** a2.19 owns it, a2.05 carried it one lesson later,
and this is the third.

**But the ELISION is not a2.05's, and that is worth the ledger.** The ledger's
a2.05 amendment §2 records that `ne` elides in front of every form of avoir, that
it cost that lesson its pair check, and that a2.21, a2.22 and a2.23 will need
`reduceNegative()`. They do, and the shape is different:

```
je ne suis pas       no elision      nous ne sommes pas   no elision
tu n'es pas          ELIDES          vous n'êtes pas      ELIDES
il n'est pas         ELIDES          ils ne sont pas      no elision
```

**Three of six against a2.05's six of six**, because `suis`, `sommes` and `sont`
open on a consonant. And unlike a2.05 the elision never touches the SUBJECT:
« je n'ai » was that lesson's problem and « je ne suis » is not one at all, so
`reduceNegative()` here is a plainer function than the one it inherits.

---

## 4. THE AGREEMENT RULE, VERBATIM, BECAUSE a2.23 INHERITS IT

> **Add nothing for a man on his own, e for a woman, s for more than one, and es
> for more than one woman.**

Exported as `AGREEMENT_RULE` from `data/passe-compose-etre-corpus.ts`. a2.23
should quote it rather than reword it.

**It is a LITERAL in the batch and the merge as well as in the test.** Mutation 44
found that both layers originally read the constant and compared it against
content built from the same constant, so rewording it satisfied both sides. That
is a2.18 §6 in a new place and it is now closed: the string is a cross-lesson
contract and it belongs on the same footing as a2.01's reframe.

The credit, on the screen where the endings arrive:

> a2.03 taught this on describing words and the endings are the same four.
> « The plain form tells you the other three. » The only new thing is that a verb
> is now doing it.

---

## 5. a2.11's descendre LOOP: IT CANNOT BE CLOSED BY BACK-REFERENCE

The brief says « a2.11 already flagged descendre as having this split. Close that
loop » and asks the test to assert it BY BACK-REFERENCE. Measured against the
shipped `a2.11.l1` body:

```
"descendre"   11 occurrences
"avoir"        0
"être"         0
"auxiliary"    0
"a2.21"        0
```

**a2.11 teaches `descendre` in the present eleven times and names neither
auxiliary once.** Its BUILD REPORT raised the question and was scrupulous about
it — *« a2.21 has no lesson yet, so this is a note for whoever writes it, not a
defect »* — and corrections §7 had already recorded that the unit-body search
behind it proves less than it reads.

**So there is no learner-facing loop to close from a2.11's side, and the brief's
instruction cannot be carried out as written.** What this build did instead is
close it FORWARD, which is assertable:

- `s16-object` names `descendre`, names `a2.11` by unit id, and states the split:
  *« a2.11 taught descendre in the present and did not say which first word it
  takes. It takes être when you go down and avoir when you take something down,
  and this lesson owns that. »*
- All three layers assert both halves of that.
- And the test asserts the NEGATIVE as well: a2.11 still names no auxiliary, so
  if that lesson ever opens the loop properly this one fails and gets closed both
  ways.

---

## 6. EVERY CLAIM IN THE BRIEF I MEASURED FALSE

Nine, which is above the three-to-six rate corrections §12 records.

**1. « Six carry a nasal that is wrong, and four of those the checker cannot
see. »** Measured through the real `hasPlainNasalFor`, ALL FIVE candidates are
FLAGGED:

```
monter     mohn-TAY          FLAGGED        (brief and corrections §11: invisible)
tomber     tohn-BAY          FLAGGED        (brief and corrections §11: invisible)
descendre  day-SAHN-druh     FLAGGED
entrer     ahn-TRAY          FLAGGED
rentrer    rahn-TRAY         FLAGGED
```

The blind shape a2.11 measured is a nasal followed by a consonant INSIDE a token,
as in `PRAHNDR`. In `mohn-TAY` the n ends the token `mohn` because a hyphen
follows it, so the checker sees it perfectly. **Corrections §11's own list is
wrong on four rows**, and a build that trusted the brief would have shipped an
empty INVISIBLE table believing it had found four.

**2. And three of the six are already repaired.** `entrer` at
`fr.sons.verbes-essentiels.043` holds `ahⁿ-TRAY`, `rentrer` at
`fr.a2.verbes.016` holds `rahⁿ-TRAY`, and `descendre` at
`fr.a1.transports-quotidiens.045` holds `day-SAHⁿDR` because a2.11 repaired it.
**This build makes TWO repairs, not six**, and records seven broken copies it
does not display.

**3. « The mnemonic is in the sub so it ships. »** The database `sub` is « Le
passé composé avec être » and names no mnemonic; neither does the `canDo`. This
is corrections §1 for the THIRD consecutive lesson — a2.05's « the sub says
sixty », a2.20's « forty », and now an obligation that does not exist. The
mnemonic ships anyway, once, as a choice.

**4. « sortir, monter, descendre, passer, rentrer, retourner all do this. »**
Three of the six have zero published transitive uses. §1.

**5. « a2.11 already flagged descendre. Close that loop [by back-reference]. »**
a2.11's lesson names neither auxiliary. §5.

**6. « All four forms sound identical. »** True of FOURTEEN of the fifteen.
`mort` /mɔʁ/ against `morte` /mɔʁt/ is audible, and the corpus already respells
both: `fr.sons.adjectifs-essentiels.161` holds « mort » [MOR] and
`fr.b2.musees.048` holds « la nature morte » [lah nah-TÜR MOHRT]. It is the best
card in the lesson and the brief would have had it left out. §7.

**7. Corrections §3, « the corpus has forms and no minimal pairs », is half
false and it is the surprising half.** `fr.a1.rp-recits-temps` is 487 published
rows laid out as a deliberate person walk, and 466 published sentences corpus-wide
put être in front of one of these sixty cells. Every one of the four cells of
`aller` is already published. The other half of §3 holds exactly: they are
sentences written for their own themes and no two differ by one thing, so the
paradigm is still authored. §8.

**8. « One table for the construction across six persons. »** A `table` at layer
`core` is a `table-in-core` density failure (corrections §8) and cannot be
authored in the flow at all. The six-person walk is a `groupDrill`, which owns
its layout and ends in a check, and the table is on the reference sheet.

**9. « lessonIds: [] ... version starts at 1. »** True at the start and the
lesson ships at v3, for reasons recorded in §10.

---

## 7. THE ONE FEMININE YOU CAN HEAR, AND THE EXACT CONVERSE OF a2.03

Measured across the fifteen:

```
gender audible      1 of 15      mourir
number audible      0 of 15
```

`mort` ends on the r and `morte` ends on a t, because the other fourteen end in a
vowel sound and an e after a vowel adds nothing. `morts` and `mortes` are the two
singulars again, so **the plural is inaudible even there**.

**That is the exact converse of a2.03's own `grammarIntroduced`**, which records
that for adjectives *« the feminine is phonologically realised in every regular
class while number is not realised at all »*. One class of fifteen where it is
realised once, against a system where it is realised always.

It gets `s12-audible`, a `listening` section with all four cells and four
questions, and it is **the only ear question the exam asks**. Every other pair in
the lesson is in `NO_EAR_QUESTION` (86 pairs) and all three layers walk it.

---

## 8. THE CORPUS: 46 AUTHORED, 22 IMPORTED, 0 HEADWORDS

Corrections §2 holds for the seventh consecutive build. All fifteen naming forms
exist, and so do `devenir`, `revenir` and `repartir`.

```
authored   46 sentences, fr.a2.verbes.651..696, theme `verbes`, level a2
imported   22 rows out of 6 themes, 6 of them absent from the seed and carried
refused     7, with the reason recorded in READ_NOT_IMPORTED
repaired    2 (monter, tomber), 0 supplied, 7 broken copies left alone
```

**The split is inherited rather than reopened.** a2.05 settled it, a2.20 agreed
it, and this build is the third: a past form is never a corpus item. The manifest
re-measures it over the SIXTY agreed cells and **none of them exists as a
headword**, which is a stronger figure than either neighbour's: `allée`,
`parties` and `venues` are not words in their own right in any useful sense.
(`mort` is, and is imported for exactly that reason.)

**THE PARADIGM EVIDENCE, and why the whole set is still authored:**

```
published sentences with être + one of the sixty cells        466
of those, a1/a2 AND carrying a respelling                       4
of THOSE FOUR, showing a second word with an ending on it       0
```

The four are `fr.a2.expressions-argot.003` « c'est mort » and `.021` « c'est
parti », which contain no past tense at all, and a2.20's own `fr.a2.verbes.620`
and `.621`, which are masculine singular DELIBERATELY so this lesson could
introduce agreement against a clean background. **Not one published card in the
app shows an ending.** a2.13 §1: evidence is not cards.

**THE SEED CUT WAS MISPREDICTED, FOR THE THIRD BUILD RUNNING.** This build
predicted nine absences and the merge measured six: `devenir`, `revenir` and
« sortir la poubelle » are all IN the cut. a2.20 mispredicted its own by four in
the other direction. a2.05 §6 says predict nothing about the cut and measure it,
and three consecutive builds have now been wrong about it, which is the argument
for the surprise check rather than for a better prediction.

---

## 9. THE FALSE-POSITIVE DIRECTION, AND THIS BUILD MET IT

Corrections §6 says the false positive is real but rarer, and asks builds to look
for it and report the absence. **There is no absence to report.**

```
Nous sommes partis tôt.   noo sohm  pahr-TEE TOH   FLAGGED
                          noo som   pahr-TEE TOH   clean
                          noo somm  pahr-TEE TOH   clean, and the house shape
```

`sommes` is /sɔm/ with a real m and no nasal vowel in it at all, so a superscript
there would teach a sound the word does not have. The repair is the one invariants
§3 prescribes for `automne`: DOUBLE THE CONSONANT, `o-TONN` being the precedent.
Four rows carry it.

**And the single-m form is clean too**, which is worth recording: the trigger is
not simply "a vowel then an m at the end of a token", because `som` passes and
`sohm` does not. This build did not chase the mechanism; it recorded the
measurement and took the shape invariants §3 already blesses.

Both directions are asserted, so the day the checker stops false-positiving the
entry goes red rather than dying quietly. Four other candidates were tried
(`la maison`, `minuit`, `la semaine`, `professeur`) and none met it.

**And one BLIND nasal in an authored string**, which is the shape corrections §6
and a2.17 §14.1 describe: « ensemble » is /ɑ̃.sɑ̃bl/ and the second nasal is
followed by B inside its token, so `ahⁿ-SAHNBL` is a wrong value the checker
calls clean. Asserted by name and in both directions.

---

## 10. THE OWNS, THE SHAPE, AND WHY 25

```
act 1  the sentence that meant something else     3 sections
act 2  which fifteen                              3 sections
act 3  the ending nobody hears                    8 sections   <- THE OWNS
act 4  the three ways it goes wrong               4 sections
act 5  on paper                                   3 sections
act 6  prove it                                   4 sections
```

**Eight against three.** Doctrine §B.5: if the act structure gives the paradigm
more missions than the Owns, the wrong lesson got built.

Doctrine §F gives 19 to 24 and this ships 25, declared rather than hidden as
a2.05's 26 and a2.20's 27 were. The reason: the canDo has two halves and the Owns
is the second one. Three sections say which verbs and eight teach the ending, and
the eight are the lesson — the four cells, the bookend, the borrowed rule, the six
persons, the contrast with avoir, the one audible feminine, the generalisation
and the boundary.

**THE EXAM.** 36 questions, six rounds of six, **20 of them typed** (14 typeIn, 6
errorSpot) against 15 mcq and 1 listenChoose. `typeIn` is the format that tests
the Owns and it is the only one that can: measured through the real `fold` and
`normalizeFr`, all four cells of all fifteen verbs stay distinct, so a typed
surface can score an ending. a2.09 lost its best production question to `fold`
and this lesson gets one back. Every agreement question fixes the subject's gender
and number in the stem, asserted.

**THE VERSION IS 3 AND THAT IS RECORDED RATHER THAN HIDDEN.** v1 was applied and
then two corrections landed:

- **v2**: three widths the batch does not measure and the merge does. Two section
  titles at 30 and 32 against the 27-character mission-row title, and
  « partis · parties » at 16 in a sheet table cell against a2.19's measured 12.
  The six-person table now shows the ENDING rather than the whole second word,
  which is narrower and closer to what the table is teaching.
- **v3**: **a2.15's reframe was INVENTED rather than read off the shipped
  lesson.** This build quoted « One verb, and everything in front of it comes
  along. » and a2.15 shipped « Cover the front of the verb. Build what is left. »
  Neither the batch nor the merge could see it, because both compared the constant
  to itself; the lesson's own test caught it against `seed.json` on its first run.
  Both layers now hold the literal, as they already did for a2.01, a2.03, a2.05
  and a2.19.

The counter moves rather than the body being corrected under an old number.
Ledger §10, a2.09's precedent, a2.20's two.

---

## 11. THE DEVICE PASS

Done 2026-08-15 on a Pixel 6 over USB against Metro 8082, cold start after a
force-stop. **NINE SCREENS.**

**What the device confirmed good**, each of these a ceiling an earlier build paid
for:

```
all 25 mission-row titles      render in full, the longest being
                               « When It Takes Avoir Instead » at 26 against 27
the four-form screen           BOTH groups; all four cells; all four respellings
                               ending « tah-LAY » and visibly so; the superscript
                               ⁿ correct in [eel sohⁿ tah-LAY]
the bookend                    a2.01's reframe as the card head, the distance in
                               the body, and the HINT IN FULL at 52 characters
                               against the 60 budget a2.20 measured
the pattern tapTable           4 rows, 3 columns, no horizontal scroll, all four
                               family sizes visible (5/4/3/3)
the contrast screen            both pairs, one word apart, one agreeing and one
                               not, all four rendering their notes in full
the audible listening          all four mort cells, both questions in full, and
                               noStop() working: « Il est mort en mars against
                               Elle est morte en mars. » with ONE stop
the trapDrill                  the rule step and the cards step; « FOUR CARDS »
                               over exactly FOUR dots (a2.18 §3); header reading
                               MISSION 15.2 / 25
the dictée                     LETTERS mode, « DICTÉE · MOT 1 / 6 », nine slots
                               for « Il est allé. » and twelve tiles including É
term-chip rows                 three chips on one row on every screen opened
```

**ONE MEASUREMENT THAT EXTENDS a2.17 §4.** The tapTable cell « going/coming » is
thirteen characters against that section's measured eleven, and it **WRAPS to two
lines rather than clipping**. The row is taller and the table still fits. a2.17's
eleven is a CLIP threshold and a cell above it is not automatically a defect.

**WHAT WAS NOT OPENED, said plainly.** The scene (s01), the crutch deck (s06),
the borrowed-rule screen (s09), the six persons (s10), the generalisation (s13),
the boundary (s14), the transitive deck (s16), the second trapDrill (s17), the
errors (s18), the role play (s19), the speak practice (s21), the review deck
(s22), the progress card (s23), the exam (s24), the roundup (s25) and the
reference sheet. The sheet is the largest of those gaps, because a2.04 measured a
four-column sheet table clipping and this lesson ships three tables; every cell is
inside a2.19's measured twelve except by the merge's own report, which now warns
rather than dies.

---

## 12. THE MUTATION HARNESS

**47 mutations, 0 caught by NOTHING, 0 skipped, SEVEN finding a weakness rather
than confirming a strength.** The measured rate across the band is two.

The five the brief names by name are rows 1 to 5 and all five are caught.

**The seven weaknesses, all fixed in every layer:**

1. **The four-cell guard read the whole section**, so a `check.why` saying
   « allés and allées are one sound » satisfied the assertion that « allées » is
   ON A CARD. Dropping the form from the card, and taking the card out of the
   group, both walked through it. **One hole with three faces** (mutations 1, 7,
   8). It now reads `groups[].items[].fr`.
2. **And the « one sound » claim was satisfied by an OPTION.** « Nothing at all »
   is one of that screen's own wrong answers. It now reads the `say` and the
   `check.why` only.
3. **The merge never checked the audible pair's respellings** (mutation 24).
   Taking the t off `morte` left every other guard green while the screen taught
   the opposite of what it says.
4. **Neither layer refused a superscript on a word with no nasal vowel**
   (mutation 30). Every respelling guard in this band is phrased as "must not be
   FLAGGED", and `sohⁿm` is a value the checker calls clean because its complaint
   about `sommes` was a false positive in the first place. It walks through all of
   them, and only the test caught it.
5. **The merge's scene guard read `SCENE_ERROR`**, the same constant the scene is
   built from, so repairing the French repaired both sides (mutation 33). a2.18 §6
   in a new place; the batch caught it only because its copy was already a literal.
6. **`AGREEMENT_RULE` was compared against itself** in both layers (mutation 44),
   and it is the string a2.23 is told to inherit.
7. **Neither layer checked the role play's alternatives** (mutation 46). The only
   thing that did was the seed-wide `scenario.logic.test.ts`, which runs AFTER the
   merge, which is how a2.03 shipped three one-alt turns with every gate green.

**Plus one content drift the harness exposed rather than a guard hole:** the
bookend deck's `hint` hardcoded `a2.01` while its own cards used the constant, so
renaming `ER_UNIT` left the hint still crediting a2.01 and satisfied the guard
that checks the credit is on the screen. The hint now reads the constant, which
renders byte-identically.

**AND THE HARNESS ITSELF HAD A DEFECT WORTH THE LEDGER.** Every source file in
this repo is CRLF and every anchor in the harness is written with LF. Twelve of
forty-seven rows reported SKIPPED on the first run and **every one of the anchors
was correct**. A skipped row looks exactly like a stale harness, which is the
failure mode point 2 of the harness's own header exists to prevent. `pick()` now
tries both.

---

## 13. WHAT a2.22 AND a2.23 INHERIT

- **THE AGREEMENT RULE IS WORDED ONCE AND EXPORTED.** §4. a2.23 should quote
  `AGREEMENT_RULE` rather than reword it, and the one place the rule does NOT run
  there — a reflexive with a direct object after it — is a2.23's to state.
- **NO REFLEXIVE APPEARS ANYWHERE IN a2.21.** Eleven verbs and fifteen markers are
  refused by the manifest, the batch, the merge and the test, and no authored row
  contains one. The background is clean.
- **The transitive split is named and not taught**, so a2.23 inherits an open
  question rather than a half-taught rule.
- **`reduceNegative()` is here and it is plainer than a2.05's**, because the
  elision never touches the subject. §3.
- **a2.06 is named on `s14-boundary`** for agreement with a preceding direct
  object under avoir, which needs object pronouns and is not here.
- **The one audible feminine is `mourir` and nothing else**, so a2.23's reflexive
  agreement is inaudible everywhere without exception.

---

## 14. ANYTHING I COULD NOT VERIFY, SAID PLAINLY

- **Sixteen screens were never opened on a device.** §11 lists them by id. The
  reference sheet is the one that matters most.
- **Whether « going/coming » wrapping to two lines reads as deliberate.** It does
  not clip and the table fits; whether a two-line cell beside three one-line cells
  looks like a mistake is a judgement and one pass is not a verdict.
- **The audio briefs.** `CLIP_MANIFEST` is empty by design and
  `ELEVENLABS_API_KEY` is not set, so no clip was rendered and none should have
  been. Two of the seven takes pull in OPPOSITE directions and are separate
  recordings for that reason: `rec-a2-21-cells` demands that the second word be
  IDENTICAL in all four lines, and `rec-a2-21-audible` demands that the t at the
  end of « morte » be clearly audible. Whether one voice can hold both
  constraints in one session is not something this build could check.
- **Whether 466 published sentences with être in front of an agreed form means
  the corpus already teaches this tense implicitly.** They are spread across
  forty themes and no lesson claims them; that is an observation about the corpus
  rather than a finding about this lesson.
- **The exam has never been sat.** Its format mix, its `why` coverage and its
  option-slot spread are all asserted, and whether twenty typed questions in a row
  reads as thorough or as long is a judgement nobody has made on a phone.
