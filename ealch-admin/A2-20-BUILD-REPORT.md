# a2.20 build report

`a2.20.l1` « Participes passés irréguliers », **seq 17**, the second lesson of
the five-lesson past-tense arc. Applied to Postgres and merged into `seed.json`
at **v3**, after a Pixel 6 pass. Not published.

Doctrine §F and corrections §12, plus the five things the brief asks for by
name. The ledger amendment is `A2-BATCH-1-LEDGER.md`, "a2.20 amendments,
2026-08-14"; everything there binds the rest of the band and is not repeated
here.

---

## 1. THE SPLIT WITH a2.05: SETTLED BEFORE THIS BUILD STARTED, AND AGREED

The brief calls the split "the first thing to settle" and says neither lesson
may apply until it is done. **It was done on 2026-08-14 by a2.05**, which
shipped one seq before this build began: ledger "a2.05 amendments" §0, and
`PARTICIPLE_DECISION` in `data/passe-compose-corpus.ts`.

```
ZERO ROWS ON BOTH SIDES. A past form is a conjugated form, and a2.01 settled
that a conjugated form is never a corpus item. Only infinitives and sentences.
```

**This build agrees it rather than re-opening it, and that agreement is the
thing a2.05 said it could not verify.** Its report §11: *"Whether a2.20's author
agrees the split. a2.20 has not started ... it is one author's decision written
down rather than two authors agreeing."* It is two authors agreeing now.

**Row counts on each side, and neither re-authored the other's:**

```
                  block                        rows      headwords   bare forms
a2.05  seq 16     fr.a2.verbes.541 .. .590      36           0            0
a2.20  seq 17     fr.a2.verbes.591 .. .650      43           0            0
                  (591..633 used, 634..650 the tail)
fr.a2.verbes      439 before, 482 after         +43 exactly
```

The reservation was measured EMPTY on the read that opened this build, and the
batch, the merge and the test all die on a row of this lesson inside a2.05's
block. a2.05's own test asserted "a2.20's block is reserved and EMPTY", which
went red the moment this lesson applied; **that assertion has been amended
rather than deleted** and now says the durable thing — no row of a2.05 is inside
a2.20's block, and every occupant of that block belongs to a2.20's lesson.

**RE-MEASURED OVER THIS LESSON'S OWN THIRTY-THREE FORMS**, which a2.05 could not
do because it did not have the list:

```
bare rows whose fr is one of the thirty-three                  28
of those, glossed IN SO MANY WORDS as a past participle          4
of those four, carrying a respelling                             0
```

The four are `su`, `bu`, `vu` and `pu` in `fr.sons.voyelles`, published to
demonstrate a vowel and carrying nothing to say them with. **That third figure
is the decision's own evidence and it is asserted in all three layers.** a2.05
counted nine such rows and this build counts four; both are right, and the
difference is the five minimal-pair copies whose glosses read "drunk", "seen",
"under → known" without naming the form. The figure that matters is zero either
way.

The other twenty-four are words in their own right, and **five of them are
imported and taught as exactly that** (§5 below).

---

## 2. IT IS NOT FORTY. IT IS THIRTY-THREE, AND THE `sub` NEVER SAID FORTY.

The brief says "forty" nine times, asks the test to assert "all forty
participles ... by name", and asks the report to say "whether the sub's forty
holds". **The database `sub` is « Participes passés irréguliers » and carries no
number at all.** Neither does the `canDo`. This is corrections §1 in its second
incarnation: a2.05 found "the sub says sixty" resting on a `sub` that exists
nowhere, and the same field is the source here.

The real list is a2.05's own `IRREGULAR_PAST` — the thirty-five names that
lesson refuses by name and hands forward — minus two, both measured:

```
refait   `refaire` exists as a headword at NO level.  refait occurs 2 times.
aperçu   `apercevoir` exists as a headword at NO level.  aperçu occurs ZERO
         times in the whole published corpus.
```

**Neither is orphaned.** Both are derived on the reference sheet from a form
this lesson does teach (`refait` from `fait`, `aperçu` from `reçu`), and
`refait` is one of the four forms the exam asks for cold. A guard walks a2.05's
thirty-five and dies if any name is owned by nobody.

---

## 3. THE GROUPING HELD, AND THE RESIDUE IS FIVE

The brief says to build the list first, check the grouping, then decide the
sections, and not the other way round. Done in that order.

```
-is    7    pris · mis · appris · compris · remis · promis · assis
-it    4    dit · écrit · conduit · construit
-u    13    vu · lu · bu · su · pu · voulu · dû · connu · venu · tenu
            reçu · couru · cru
-ert   4    ouvert · offert · couvert · souffert
odd    5    fait · été · eu · né · mort
```

**Twenty-eight of thirty-three in four groups, five in none.** The brief's own
table lists five in `-is` and ten in `-u`; both are short, and the difference is
the point of the lesson. `remis` and `promis` are `mis` with a front on it, and
`reçu`, `couru` and `cru` are ordinary members of the largest group.

**The -u group is thirteen, and it holds the participle of every irregular verb
batch 1 taught**: `venu` and `tenu` from a2.02, `lu` from a2.12, `voulu`, `pu`
and `dû` from a2.13, `su` and `connu` from a2.14. That is `s11-batch1`, and it
is the connection the brief calls the one that makes the lesson worth building.

---

## 4. DOES IT FILL 19 TO 24 MISSIONS HONESTLY? IT FILLS 27, AND NOT BY PADDING.

**The brief's central question, and the answer is that the premise is wrong.**
It asks whether forty items can fill twenty missions without padding and offers
an escape hatch (fewer taught actively, the rest as a reference sheet and deck).
The hatch was not needed, and the reason is the design the brief itself asks
for: **this is not one mission per form. It is one mission per group.**

```
act 1  the word that was not a word     3   scene · goals · thirty-three or five
act 2  what you already have            2   the recap of a2.05 · where it stops
act 3  FIVE GROUPS                      9   THE OWNS
act 4  the ones that look derivable     5   pairs · trap · eu · dû · errors
act 5  out loud                         4   unseen · role play · dictée · speak
act 6  prove it                         4   review · progress · exam · roundup
                                       27
```

Act weights, asserted in all three layers: **Owns 9 missions, recap 2**, and the
Owns act is the largest act on its own. Ledger §a2.13-0: the 24-section shape
came from a2.01, was copied six times, was never checked against a subject, and
`schema.ts` has no ceiling; a2.13 shipped 32 and a2.05 shipped 26. The overrun
is declared as `SECTION_CONVENTION = 24` plus `SECTION_OVERRUN_REASON` and
reported here rather than hidden.

**Nothing in the nine is filler.** Five groups need five screens because a group
whose members are not visible together is a list with a heading on it, which is
the exact failure the brief names. On top of the five: the compound payoff
(`s08-front`), the screen that hands batch 1's verbs back (`s11-batch1`), and
the boundary with a2.21 (`s14-firstword`).

---

## 5. THE REFRAME, AND WHAT I REJECTED

```
SHIPPED   Do not build these. Reach for the group it is in.        10 words
```

Doctrine §B.4 wants a rule the learner runs while the sentence is already
moving, and the moment this one runs is exact: the learner has said « j'ai »,
the verb is `prendre`, and a2.05's machine is about to produce `prendu`. The
instruction is to stop the machine. It is a2.05's rule with a hole cut in it on
purpose. Carried **6 times**, and `Lesson.reframe` is asserted against it.

```
REJECTED  These must be memorised.
          THE BRIEF NAMES THIS AS THE THING TO REJECT and it is worse than the
          brief says: it is also FALSE. Twenty-eight of the thirty-three sit in
          four groups. It is the sentence that makes the lesson unbuildable.

REJECTED  Learn the head of the family and the rest come free.
          a2.15 rejected this itself, as a reframe, and was right: it promises
          a payoff instead of telling the learner what to do. It ships here as
          the claim of the -is group, credited.

REJECTED  Cover the front of the verb. Build what is left.
          a2.15's own. Quoted verbatim on s08-front, credited by unit id, and
          not taken: it answers how to get the PRESENT of a compound verb.

REJECTED  One verb, two words, and the small ones go in between.
          a2.05's. Quoted verbatim on the recap screen and credited. Carrying
          it would leave this lesson with no rule of its own.

REJECTED  Four groups and five that are not in any of them.
          The table said as a sentence. It ships as GROUP_CLAIM, which is what
          it is: a learner mid-utterance cannot do anything with a count.

REJECTED  If the ending arrives easily, it is the wrong one.
          Runnable, memorable, and false in the direction that costs most. It
          is true of thirty-three verbs and false of every regular one, and a
          learner running it produces « j'ai parlu » out of caution.
```

---

## 6. CLAIMS IN THE BRIEF MEASURED FALSE. NINE.

1. **"Forty items."** THIRTY-THREE. §2. The `sub` carries no number.
2. **"tapTable with a row per participle ... exactly right for forty items."**
   FALSE, and the brief contradicts itself two paragraphs later. `tapTable` is
   not in `ownsLayout()` (corrections §8) and a2.11 measured six rows as the
   Pixel 6 ceiling. A thirty-three-row tapTable is the list wearing a section
   type. The groups are `groupDrill`s, which DO own their layout; the one
   tapTable in the lesson has five rows, one per group.
3. **"a2.15 ... reserved `pris` and `mis` for you."** It reserved the VERBS by
   teaching their present and it never mentions the past forms. What a2.15
   actually hands over is its REFRAME, which this lesson quotes, and the
   `remettre` row it authored from scratch, which this lesson imports.
4. **"THE PARTICIPLES THEMSELVES WERE NOT PROBED and they are the lesson.
   Their existence, or absence, is the authoring case."** Probed: **28 of the
   33 exist as bare rows** and the authoring case was decided by a2.05 a day
   earlier on completely different grounds. Existence turned out to be
   irrelevant; what mattered was that only four are glossed as a past form and
   none of those four has a respelling.
5. **"Several prendre-family respellings are broken in the way Corrections §6
   describes."** TRUE of the corpus and FALSE of what this lesson displays. The
   house value already exists for every one of them: `fr.sons.verbes-essentiels.012`
   holds `PRAHⁿDR`, `.030` holds `kohⁿ-PRAHⁿDR`, `fr.a2.disciplines.051` holds
   `a-PRAHⁿDR`, `fr.a1.routines.107` holds `kohⁿ-DWEER`. **This build made ONE
   repair and it is not in that family**: `construire`, `kohn-STRWEER` to
   `kohⁿ-STRWEER`. Seven broken copies are read, recorded and left alone.
6. **"écrire ... 5 rows, gender=m on that row."** True of `fr.a1.ecole.049` and
   the reason it is refused; `fr.sons.consonnes.110` holds the same word
   ungendered. The same shape refused `lire` (`fr.a1.ecole.048`) and `le reçu`
   twice, which the brief does not mention.
7. **"a2.05 ... If it has not shipped, you cannot start."** It had shipped, and
   the dependency was stronger than the brief expects: this build inherited a
   settled decision, a reserved block, a quotable reframe and a thirty-five-name
   list to be accountable to.
8. **"Import them and attach the participle, rather than authoring a second
   row."** There is nothing to attach a participle TO. `Item` has no field for
   one, and the split forbids a row of its own. The thirty-three infinitives are
   imported and the past forms live in sentences.
9. **"Whether the four-family grouping holds for all forty."** It holds for 28
   of 33 and the residue is 5. §3.

**And one thing in `A2-BRIEF-CORRECTIONS.md` this build found incomplete.**
§3 says "the corpus has forms and no minimal pairs" and predicts you will author
your whole paradigm. Both hold, and the margin here is the widest in the band:
**1,435 published sentences put one of the thirty-three behind a first word, and
TWO of them are cards** (a1/a2, respelled, in a sentence), neither of which is
a passé composé. a2.13 §1 in its sharpest form so far.

---

## 7. CORPUS: AUTHORED AGAINST IMPORTED, AND THE FORM RULE

```
authored   43 rows   fr.a2.verbes.591..633, theme `verbes`, level a2
             0 headwords
             0 bare past forms          <- the split
             0 gendered rows
imported   39 rows   out of TWELVE themes
             33 naming forms, 5 already-a-word rows, 1 phrase
             0 headwords authored, which is corrections §2 holding for the
             sixteenth build in a row
refused     7 rows   READ_NOT_IMPORTED, with reasons
```

**The form rule held.** Every authored row is a full sentence, and a guard
refuses any row whose `fr` has no whitespace, because the corpus helper writes
`kind: 'sentence'` unconditionally and `kind` alone cannot see a bare word
(a2.05 §4, its mutation 8). That is the one line the whole ledger decision rests
on and it is mutation 7 here.

**THE FRAME IS THE FIRST TWO WORDS, NOT A VERB.** Thirty rows open « J'ai » and
the second word is the only thing that changes shape. The complement is not
constant and cannot be: thirty-three different verbs need thirty-three different
things done to them, and forcing one complement would produce sentences nobody
says. It is kept to two words where possible and it is scenery.

**Five of the thirty-three are already published as ordinary words**, and that
is teaching material rather than a footnote:

```
écrit    fr.a2.examens-et-diplomes.045   "written"
ouvert   fr.a2.courses.070               "open"
couvert  fr.a1.meteo.062                 "overcast"
cru      fr.sons.adjectifs-essentiels.082 "raw"
mort     fr.sons.adjectifs-essentiels.161 "dead"
```

Two more were wanted and refused for `gender`: `reçu` (both copies) and `été`
(the ungendered copies carry no respelling at all).

**Respellings.** One repair, none supplied, seven found broken and left alone.

```
REPAIRED   fr.sons.verbes-essentiels.118  construire
           kohn-STRWEER -> kohⁿ-STRWEER    VISIBLE, minimal, house value
           read off fr.sons.verbes-essentiels.030's kohⁿ
```

`RESPELL_ADDITIONS` is asserted EMPTY rather than omitted, so a later author who
adds one meets a2.03 §7's merge path and the rule that makes it safe.

---

## 8. THE NASAL CHECKER'S BLIND SPOT IS EXERCISED HERE, TWICE

a2.05 measured 39 nasals seen and 0 missed, and concluded that the house
spellings its frame needed all closed at a token boundary. **This lesson's frame
needs two that do not**, so corrections §6 and a2.17 §14.1 bite here for the
first time since a2.11:

```
seen 12, missed 2

MISSED  J'ai construit un mur.   ZHAY kohⁿs-TRWEE uhⁿ MÜR   an s follows
MISSED  J'ai su la réponse.      ZHAY SÜ la ray-POHⁿSS      two S's follow
```

Both are asserted **BY NAME and in both directions** in all three layers: the
stored value is clean, and breaking the superscript produces a value the checker
still calls clean. The day it gains the ability to see them, the assertion goes
red rather than the list going quietly dead. Mutation 24 proves it fires.

**The false-positive path is not met.** Six candidates from this lesson's own
strings do not fire and a control (`le problème`) does. Reported as an absence
with a live control, which is what corrections §6 asks for.

---

## 9. THE EXAM, AND THE QUESTIONS I WANTED AND COULD NOT WRITE

36 questions, six rounds of six, each round leading a different error trigger so
all six drills are reachable. **Every question has a `why` and a `ref`.**

```
typeIn 17   errorSpot 6   mcq 12   listenChoose 1
typed 23 against picked 13
```

Production outnumbers recognition, which the canDo requires and which the brief
asks for by name ("Avoid mcq for participle production wherever possible").

**Four typed questions ask for a form the lesson never printed**: `traduit`,
`repris`, `découvert` and `refait`. That is the generalisation claim, and
`refait` is one of the two a2.05 hands over that this lesson does not teach
actively, so the exam closes the loop the sheet opens.

**THE BRIEF ASKS FOR THIS AND IT IS TRUE: NO EAR QUESTION CAN TEST dû AGAINST
du.** They are one sound. It is enforced rather than reported: `NO_EAR_QUESTION`
holds ten one-sound pairs and all three layers walk every option list in a2.10's
and a2.11's shape, so « J'ai dû partir. » against « J'ai bu du thé. » stays legal
and the pair does not. Mutation 28 proves it fires.

**And it is worse than the brief says. NOTHING IN THIS APP CAN TEST IT.**
Measured through the real functions rather than asserted:

```
fold('dû')        === fold('du')          true
normalizeFr('dû') === normalizeFr('du')   true
```

So a typed answer, a spot-the-error and the dictée would all accept `du` and
tell the learner they spelled it right. **The circumflex is testable by `mcq`
and by nothing else**, which is why round 5 is six mcq questions and says so on
the card. A guard refuses any typed, spotted or spoken question whose answer
contains `dû`, and mutation 29 proves it.

**The questions I wanted and could not write:**

- **A typed question on the circumflex.** The one thing in this lesson where an
  accent changes what a word means, and the only surface that can ask about it
  is the one where the learner picks between two spellings they can see.
- **A typed question on the cedilla in `reçu`.** Same path: `fold` strips it.
  The question that asks for `reçu` says so in its `why` rather than pretending.
- **An ear question on any masculine/feminine pair.** `pris` and `prise` are one
  sound, and so are the other nine pairs in `NO_EAR_QUESTION`. That is a2.21's
  subject arriving early and invisibly, and it is stated on the `oneSound` term
  rather than tested.
- **An ear question on `assis`.** Its full past needs the little word in front
  of the verb, which is a2.22.

---

## 10. THE BOUNDARY WITH a2.21, WHICH THE BRIEF CALLS GENUINELY AWKWARD

**Which participles were flagged as être-taking: `venu`, `né`, `mort`.**

The brief asks for the form to be taught, the auxiliary choice not to be, and
the boundary to be named in one line rather than pretended away. All three:

- **The forms are taught.** `venu` is an ordinary member of the -u group and
  sits with the other twelve on `s10-u`; `né` and `mort` are on the odd deck.
  `s14-firstword` names all three, names a2.21, and says in one line that which
  verbs do it and what happens to the form afterwards is that lesson's.
- **The choice is not taught, and it is enforced.** `AUXILIARY_CHOICE` refuses
  an INSTRUCTION TO CHOOSE on any learner surface, in English or French,
  including the three mnemonics people teach this rule with. être in front of a
  past form is CONFINED to the five sections that show the three forms and is
  refused on **every production surface** — the dictée, the speak list, the
  exam, the unseen drill and both traps. Mutations 4, 17 and 19 prove it.
- **And no authored sentence agrees a past form with anything.** The two
  authored être rows are masculine singular deliberately, so a2.21 can introduce
  agreement against a clean background. Mutation 18 proves it.

**One guard here fired on legitimate content and the content was wrong.** The
circumflex trap's fourth card was « Elle est due. », which is the feminine the
brief asks to be shown. The agreement guard refused it, correctly: it is an
agreed past form in a sentence. It ships as « la somme due », a noun phrase,
which shows the spelling without putting a first word in front of it.

---

## 11. VERIFICATION, AND WHAT I COULD NOT VERIFY

**Host half: complete and green.**

```
batch dry run                every guard passed
merge dry run                every guard passed, 9133 untouched rows byte-identical
a2-20-participes.test.ts     49 tests, 49 pass
full suite                   3730 -> 3779 (+49), 0 fail
npx tsc --noEmit             0 in ealch-v2 AND 0 in ealch-admin
pnpm content:parity          one pre-existing divergence (b2.01.l1), nothing at risk
mutation harness             38 mutations, 0 caught by nothing, 0 skipped
a1-03-genre.test.ts          ending population 1890 before and after
```

**FIVE MUTATIONS FOUND A WEAKNESS RATHER THAN CONFIRMING A STRENGTH**, which is
above corrections §9's two-in-eleven rate and in line with a2.05's four in
thirty-eight:

- **9** — importing the gendered copy of `écrire` was caught by the batch (which
  threw) and MISSED by the merge. The carry is `manifest.filter(id in imports)`,
  so an import that is not in the manifest is silently not carried and the
  manifest's own gender refusal never runs on it. One line added to the merge.
- **13** — setting a trap's `wrong` EQUAL to its `right` satisfies the
  both-on-one-card check trivially. A pair of one thing is not a pair. Added to
  the batch and the merge.
- **16** — the scene's "contains an invented form" check walked every string,
  and the English gloss « ...except that prendu is not a word » kept it green on
  a scene that had been repaired. **The check is now on the FRENCH the scene
  speaks**, in all three layers.
- **21** — renaming `FAMILY_UNIT` renamed both sides of the merge's
  `namesUnit(text, FAMILY_UNIT)` and it stayed green while a2.15 vanished from
  every screen. a2.18 §6 exactly. The unit ids are literals in the merge now.
- **28** — the merge had NO ear-question walk at all, on the guard this lesson's
  central fact rests on. a2.16 §4 in a new place.

**And two rows reported a layer blind when the layer was correct**, both because
the seed half of the mutation did not remove the claim: #10 changed a question's
capitalisation instead of dropping the form, and #29 moved a `q` and left the
`accept` list alone. a2.14 §8 applies to the HARNESS as well as to the content.

**DEVICE HALF: DONE, on a Pixel 6 over USB against Metro 8082.** The dev build
never OTA-fetches (a2.14 §12), so every content change needed a force-stop and a
cold start before the phone showed it.

**TWO DEFECTS, both invisible to all three layers and to the whole suite.**

**1. A `cardDeck`'s `hint` IS ONE LINE AND ELLIPSISES.** `s08-front` shipped
« Swipe. Six cards, and the first one is a sentence you have already read. » and
the phone drew « ...you have alread… ». Measured at the cut: **sixty-four
characters shown of seventy-one.** This is the SEVENTH width defect in this band
and the first one on this field; no document in it measures `hint`. Budget set
at `HINT_MAX = 60`, three hints shortened, guarded in all three layers.

**2. A DOUBLED FULL STOP IN THE eu LISTENING.** Question 2 quoted two French
lines that already end in one, so the screen read « J'ai bu un café. against
J'ai eu peur.. ». `noStop()` strips the quoted stop and a guard refuses exactly
two consecutive dots on any learner surface — exactly two, so the scene's own
« Samedi, j'ai... j'ai prendu... » is left alone. **That guard immediately caught
a second instance** in the compound card, where two sentence-length English
glosses had been concatenated.

Both went to **v3** rather than being corrected under v2.

**WHAT THE DEVICE CONFIRMED GOOD**, each a ceiling an earlier build paid for:

```
the trail row               title, sub and 82 items at position 17
the overview                intro in full, naming NO unit id, 27 missions
all 27 mission-row titles   one line each, longest 25 characters
the -is group screen        three sub-screens, both heads with respelling and IPA
the -u group screen         five sub-screens, thirteen members, and the BLIND
                            nasal ray-POHⁿSS rendering its superscript correctly
term-chip rows              three chips on one row on every section (a2.03 §3's 37)
the stepped trapDrill       label "FOUR CARDS" over exactly FOUR dots (a2.18 §3),
                            header reading 18.2 / 27, red eyebrow, own Continue
the eu listening            five lines with audio, four questions in the modal
the reference sheet         title uncut, ALL FIVE tables three-column with no
                            horizontal scroll, and ALL FIVE teach cards rendering
                            their bodies, which is the check the brief asks for
the circumflex              « J'ai dû partir. » renders its roof in the display serif
the superscript ⁿ           renders correctly everywhere; no U+203F anywhere
```

**Screens not opened:** the 36 exam questions, the dictée, the speak mission and
the role play were not stepped through on the phone. They are the surfaces with
the least device-specific risk in this lesson, and saying so is cheaper than
implying a fuller pass than was done.

**Two things I could not verify at all:**

- **Whether a2.21 agrees the boundary.** That lesson has not started. What it
  inherits is written into the ledger and into `HANDOVER`, and every layer here
  refuses an auxiliary choice, but it is one author's decision written down
  rather than two authors agreeing — which is the same gap a2.05 recorded about
  this build, and which this build closed for it.
- **Whether `HINT_MAX = 60` is the real cut or a safe margin below it.** Sixty-
  four characters were shown of seventy-one, so the cut is between 64 and 71 and
  the budget is set below the measurement rather than at it. Nobody has bisected
  it.

---

## 12. WIRING

```
scripts/author-participes-batch.ts          content:participes
scripts/merge-participes-into-seed.ts
scripts/_a220_manifest.ts                   the recorded read
scripts/_a220_mutate.mjs                    38 mutations
scripts/_a220_probe.ts, _a220_probe2.ts     the pre-flight
scripts/_a220_nasal.ts                      the nasal count, both directions
scripts/_a220_seedcut.ts                    which imports the cut is missing
scripts/data/participes-corpus.ts
scripts/data/participes-lesson.ts
scripts/data/participes-terms.ts
scripts/data/participes-imported.ts
scripts/data/participes-rows.gen.ts         generated, do not edit
ealch-v2/src/content/a2-20-participes.test.ts
```
