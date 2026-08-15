# a2.06 build report — « Pronoms d'objet direct »

**seq 21. The HEAD of the pronoun block, so a2.24 and a2.25 both inherit from
here.** Built 2026-08-15. Applied to Postgres and merged into `seed.json`. Not
published.

Doctrine §F, corrections §12, and the seven questions the brief asks by name.

---

## 0. THE HEADLINE

```
authored     48 rows, fr.a2.pronoms-essentiels.189..236    486 before, 534 after, exactly +48
imported      9 rows, 0 headwords authored                  8th build running with none
repaired      8 respellings across 6 themes                 0 blind, 2 house
lesson        a2.06.l1 v3, 24 sections, 6 acts, 30 questions, 57 items
the Owns      7 sections against the paradigm's 3
tests         3950 before, 4015 after (+65), 0 fail
tsc           0 in ealch-v2 AND 0 in ealch-admin
mutations     67, TWO finding a weakness, both closed
parity        clean; only the pre-existing b2.01.l1 database-only divergence
device        FULL PASS on a Pixel 6. One defect found and fixed: §11
```

One new fact, and everything else on every screen is something the learner
already owned, spent in a new place:

> **`The pronoun goes in front of the verb, not after it.`**

---

## 1. THE POSITION RULE, VERBATIM

The brief asks for this on the record because **a2.24 and a2.25 both inherit it
and three lessons should be one rule**:

```
The pronoun goes in front of the verb, not after it.
```

Authored **17 times** across the learner surface, counted on the NOT-deduped
display walk (a2.22 §3: a `Set` collapses a short line authored twice). For
calibration: a2.19 measured 16, a2.22 8.

**The first draft carried it 23 times and that was too many.** At 23 it is on
nearly every screen and reads as a slogan rather than a rule. Six were removed
from places where the surrounding sentence already said the same thing in its
own words. `REFRAME_COUNT` is an explicit constant, asserted in the batch, the
merge and the test.

### It was chosen to be true of the whole block, and that was a constraint

The head of a three-lesson chain does not get to pick a sentence only its own
forms satisfy. `lui` and `leur` go in that slot, `y` and `en` go in that slot,
and a2.22's reflexive words are already in it. The line holds for all of them.

**Rejected, with reasons**, in `REFRAME_REJECTED`:

- *« le, la and les replace a direct object. »* The brief names this as the thing
  to reject and it is right: it describes what the words do and gives the learner
  nothing to do differently. It also spends the technical phrase this build
  decided to keep off the learner surface entirely (§5).
- *« Replace the noun with le, la or les and move it. »* Two instructions where
  the second is the whole lesson. It also says "move it", which is false —
  nothing moves, the word is SAID in a different place, and a learner who
  pictures movement builds the English sentence first and then repairs it, which
  is the slow path this lesson exists to remove.
- *« French puts the object before the verb. »* A fact about French rather than
  an instruction to a speaker, and it forces the technical phrase onto every card
  that quotes it.
- *« The pronoun comes first. »* Short and wrong: it comes after the subject, and
  a learner applying it literally produces « Le je vois. »

---

## 2. THE PRECEDING-DIRECT-OBJECT DECISION

> *« Decide where preceding-direct-object agreement is taught, and report it. »*

**TAKEN. It is a2.06's, and it is one act.**

### The three facts point the same way once the two rules are separated

The brief treats this as one question and it is two:

```
RULE A   « Elle s'est lavé les mains. » has no ending BECAUSE the thing washed
         is named AFTER the verb, and `se` there is not the thing washed at all.
         Explaining it needs the indirect reading.        → a2.24's subject
RULE B   When the thing acted on is said BEFORE the verb, the second word takes
         its ending. « Je l'ai vue. »                     → this lesson's
```

a2.23 met RULE A, named it receptively, refused the explanation on every surface,
and pointed the learner at **a2.24 on a learner surface**. That pointer is
correct and this build does not disturb it. a2.24's brief in turn defers RULE B
here by name and tells its author to read this report.

**RULE B is this lesson's, and taking it makes the chain run in seq order rather
than in a circle.** This lesson installs "said before the verb" at seq 21, which
is the thing RULE A is an exception to; a2.24 at seq 22 explains why the
exception exists. Refusing it here would have left a2.24 explaining an exception
to a rule nobody had stated.

The DB `canDo` asks for replacement and position only. That is an argument for
keeping it to one act, which is what happened, rather than for refusing it: a
canDo is a floor.

### The limit, and it is enforced rather than promised

- **One act.** `act5` has 4 sections against the Owns' 7, asserted in all three
  layers.
- **Recognition plus exactly one typed production.** `fold()` keeps a final `-e`
  and `-s` (corrections §5), which is the only reason a typed surface is
  defensible at all.
- **No ear question anywhere near it.** `vu`, `vue`, `vus`, `vues` are one sound.
  `HOMOPHONE_FORMS` enforces it rather than a sentence in this report.
- **`fr.a2.pronoms-essentiels.229` is receptive-only** — no flashcard, no
  voiceflash, no dictation — because a speak drill on it would score a sound
  carrying none of the information. Asserted by name.
- The compound tense itself is quoted from a2.05, a2.20 and a2.21 and taught
  nowhere.

### WHAT a2.24 INHERITS

- **The position rule verbatim** (§1). It is true of `lui` and `leur` unchanged.
- **RULE A is still yours.** a2.23's screen naming you is untouched, and nothing
  in this lesson explains the direct/indirect distinction: `object pronoun` and
  `indirect object` are refused on every surface in all three layers.
- **`lui`, `leur` and `leurs` appear NOWHERE here**, guarded and mutation-proved.
- **The id block: a2.06 took `fr.a2.pronoms-essentiels.189..236`, 48 of 48.**
  Take yours from `.237`. Theme row count 486 before, 534 after.
- **The frame word is `Je le vois.`** (8 letters). `Je lui parle.` is 12 and
  reusing the frame across the block is a cross-lesson claim in two sentences.

---

## 3. THE NEGATION QUESTION — AND THE BRIEF IS OUT OF DATE

> *« whether the five negation statements … are actually one string. Unchecked
> outside the past-tense arc. You are the sixth to find out. »*

**IT WAS SETTLED ONE LESSON AGO.** `A2-23-BUILD-REPORT.md` §2 answered exactly
this question on 2026-08-15, off the shipped seed bodies. The brief lists it as
UNVERIFIED anyway. **This is the first brief claim measured false.**

Re-measured here independently, off the source rather than the report:

```
a1.18   « Wrap the verb, then ask what the verb was. »
a2.19   « Wrap the verb that changed, not the one carrying the meaning. »
a2.05   quotes a2.19's, as NEGATION_RULE = A219_REFRAME
a2.21   quotes a2.19's
a2.22   quotes a2.19's, and adds its own extension
a2.23   quotes both, and adds a third
```

**TWO STRINGS, NOT ONE, ON PURPOSE, AND NEITHER HAS DRIFTED.** a1.18 says which
words go round the verb; a2.19 says which verb. The brief's "five lessons, one
rule" is right about the RULE and wrong about the count of strings.

Both are quoted verbatim here, and the test asserts the **negative** that they
are still different from each other — a2.23's shape, kept, because if somebody
harmonises them the arc loses the distinction.

### The arc takes a fourth sentence, and a2.22's cannot be quoted unchanged

a2.19's line asks which of two verbs to wrap and there is only one verb here, so
it is true and idle. a2.22's extension is the right SHAPE and is **false of this
lesson word for word**:

> « Both words changed for the subject, so both go inside the wrap. »

The object pronoun **does not change with the subject at all** — that is the one
thing this lesson has to separate from a2.22, one lesson after it. Quoting it
unchanged and silently would teach a reason that does not hold. So:

> **`The wrap goes round the pronoun and the verb together.`**

and the card quoting a2.22 says plainly that the behaviour is the same and the
cause is different. A guard in all three layers refuses the quote unless that
note is beside it.

---

## 4. THE THEME, AND THE ROW COUNT

**`pronoms-essentiels`.** The brief lists the home as UNVERIFIED and offers
`verbes`. Decided here for three reasons, none of them room:

1. **It is the semantic home.** 486 published rows of pronoun material, and the
   only three published sentences carrying this construction are already in it.
2. **a2.22 and a2.23 wrote into `verbes` and that is the wrong precedent to
   copy.** They are VERB lessons and their rows conjugate. This lesson's rows are
   about a word that is not a verb and does not conjugate.
3. **The doctrine's own trail table already says so for all three of seq 21..23**,
   so choosing `verbes` would split the block and hand a2.24 a decision it has no
   reason to revisit.

```
pronoms-essentiels   486 published before   534 after   exactly +48
fr.a2.* sub-range    188 before             236 after
duplicate fr groups  0 before               0 after
```

**The theme had ZERO pre-existing duplicate `fr` groups**, measured the way
`flashhub-coverage.test.ts` measures it. Every authored frame was checked against
all 486 rows *before* it was written, and the manifest refuses the build if any
would collide.

---

## 5. THE RESPELLING REPAIRS

Eight rows across six themes. Split by corrections §14.1's shape, with the two
reasons for `half !== to` kept as **separate, mutually exclusive fields** and
`(half !== to) === (blind || house)` asserted through the real function.

```
id                              fr          from          half          to           blind house
fr.a2.communaute.050            connaître   kon-NETR      kon-NETR      koh-NEHTR    no    YES
fr.a1.famille.094               inviter     an-vee-TAY    aⁿ-vee-TAY    aⁿ-vee-TAY   no    no
fr.a1.evenements-familiaux.058  inviter     an-vee-TAY    aⁿ-vee-TAY    aⁿ-vee-TAY   no    no
fr.a1.les-fetes.083             inviter     an-vee-TAY    aⁿ-vee-TAY    aⁿ-vee-TAY   no    no
fr.a2.communaute.054            inviter     an-vee-TAY    aⁿ-vee-TAY    aⁿ-vee-TAY   no    no
fr.a1.rp-famille.048            inviter     ehn-vee-TAY   ehⁿ-vee-TAY   aⁿ-vee-TAY   no    YES
fr.a1.cuisine.041               manger      mahn-ZHAY     mahⁿ-ZHAY     mahⁿ-ZHAY    no    no
fr.a1.rp-repas.013              manger      mahn-ZHAY     mahⁿ-ZHAY     mahⁿ-ZHAY    no    no
```

### NO ROW IN THIS IMPORT IS BLIND, and §6 asks for that to be reported

Corrections §6 closes by asking builds to report the absence rather than leave a
silence. **Measured: zero blind rows.** §14.1's warning — that following §6
literally ships a wrong value the checker then calls clean — did not bite here,
because no imported row carries two nasals. The test asserts the count is zero,
so if the import ever changes the next author re-measures rather than inherits.

### `connaître` IS NOT THE SHAPE THE BRIEF SAYS IT IS

The brief files `connaître` beside `inviter` and says *« `inviter` is the shape
corrections §6 is about »*, implying both are. Measured through the real
`hasPlainNasalFor`:

```
an-vee-TAY    FLAGGED     kon-NETR    CLEAN
ehn-vee-TAY   FLAGGED     koh-NETR    CLEAN
mahn-ZHAY     FLAGGED     koh-NEHTR   clean
```

`connaître` carries `nn`, so `hasPlainNasalFor` takes the doubled-consonant
branch and **correctly** declines to flag it: /kɔ.nɛtʁ/ has no nasal vowel at
all. `half` is therefore identical to `from` — the checker reports nothing to
repair. The divergence is the vowel, and it is a **house** repair with nothing
to do with §6.

**Filing it under §6 would have produced a guard asserting the stored value is
flagged, which goes red on a correct measurement.** That is corrections §14.1's
conflation one level up: not a half-repair, but a repair with a *different
reason* under the nasal heading.

### The third `inviter` variant, which the brief does not mention

`fr.a1.rp-famille.048` holds `ehn-vee-TAY`. Flagged, so visible, but the minimal
repair gives `ehⁿ` and the other five rows say `aⁿ`. **This is §14.1's `bien`
shape exactly** — the minimal repair is clean and still not the house value — and
a guard using one boolean for both reasons would have filed it with the four
plain ones.

### DELIBERATELY LEFT ALONE, with the reason

- **`acheter`: `ahsh-TAY` (4) vs `ash-TAY` (2).** Both clean; the difference is
  whether the schwa is written, which this project has never settled and which
  invariants §9 lists among the known competing variants. Repairing it would be
  one build inventing a convention for the whole corpus.
- **`inviter` inside a phrase**: `lan-vee-TAY` (2), `uh-nan-vee-TAY` (2), `lay
  zan-vee-TAY`, `lan-vee-ta-SYOHN`. Flagged and wrong, and out of scope — the
  defect the brief names is the flashcard hub serving one HEADWORD two ways.
  a2.15's precedent: repair what you import, record what you did not. **The list
  is in `RESPELL_LEFT_ALONE` so the next build in those themes has it.**
- **`aime` inside a phrase**: `nehm` (`fr.a2.au-restaurant.062`) and `EHM`
  (`fr.sons.questions.054`), both FLAGGED and both pre-existing in themes this
  lesson does not touch.

### And the value « Je l'aime. » had to take

`zhuh LEHM` is **FLAGGED**, and `hasPlainNasal` is what the density validator
calls — with no `fr` in hand, so the doubled-consonant escape is unavailable. The
house form was read off the lesson that owns elision rather than invented:
`fr.sons.elision.001` ships **`ZHEM`** for « J'aime », so `/ɛm/` after an elided
`l` is `EM` and this lesson follows it.

---

## 6. EVERY BRIEF CLAIM MEASURED FALSE

Five, and unlike batches 1 and 2 the brief was written against a real probe, so
these are narrower.

**1. « whether the five negation statements … are actually one string » is listed
as UNVERIFIED and was settled one lesson earlier.** §3.

**2. The respelling repair list is INCOMPLETE, and it names two of four.**
Measured across every published row rather than the probe's first three per word:

```
inviter    THREE variants, not two. FIVE of the six rows are wrong and the
           correct one is the minority.
manger     NOT NAMED AT ALL, and a 2-2 split: mahn-ZHAY (2) · mahⁿ-ZHAY (2).
           This build imports manger, so the split is inside its own list.
acheter    NOT NAMED. ahsh-TAY (4) · ash-TAY (2).
connaître  named correctly.
```

**3. « `inviter` is the shape corrections §6 is about » is half true, and
`connaître` is not that shape at all.** §5.

**4. « je le vois 2 · je la vois 1 » is true as substrings and misleading as
evidence.** The rows are `Je le vois chaque semaine.`, `Je la vois tous les
jours.` and a 13-word B1 sentence. **The bare frame does not exist.** Measured
against all 486 theme rows with the article-stripping rule, every frame this
lesson wanted was free:

```
                     exact   as substring
Je le vois.            0          2
Je la vois.            0          1
Je l'aime.             0          2
Je l'ai vu.            0          3
Je les vois. · Tu le connais. · Je ne le vois pas. · Je l'ai vue.   0 / 0
```

This **sharpens** corrections §3 rather than contradicting it: a construction can
occur twice and still leave you authoring every cell. Seventh build running.

**5. « the seed carries a fraction » understates it.** `pronoms-essentiels` holds
486 rows in Postgres and the seed carried **TWO**. Not a fraction — two. `verbes`
shows 119 of 494 and that was already enough to bite a2.11.

---

## 7. WHAT I FOUND WRONG OR INCOMPLETE IN `A2-BRIEF-CORRECTIONS.md`

§12 asks every build to say this. Three things, and the first has already cost
this build a version number.

### 7.1 THE BAND'S `honest` GUARD IS WEAKER THAN THE RULE IT ENFORCES

Every batch in this band carries `/\bhonest/i`. **A word boundary does not match
inside `dishonest`.** The seed-wide `sons-alphabet.test.ts` matches the
SUBSTRING.

This build's batch, merge and own test were all green on an audio brief reading
« makes the exercise **dishonest** about what it is testing », and only the
seed-wide test caught it — after the lesson had been applied to Postgres. The
batch's own version guard then refused the re-apply, which is the guard working,
and **the counter moved to v2 rather than the body being corrected under v1**
(corrections §10; a2.09's precedent).

All three local guards here are now substring guards. **Every other lesson in
this band still has the `\b` version today.**

### 7.2 §13's "-s PLURAL" RULE CANNOT BE APPLIED TO EVERY ENTRY

§13 says to check the `-s` plural of every JARGON entry. A guard enforcing that
literally went red immediately on `accusative` — an adjective, and « accusatives »
is not English. **Loosening the guard to skip anything awkward would have put
`clitic` back at risk**, which is the entry most likely to be written in the
plural.

The shape that works is two lists: `JARGON_NOUNS`, where the plural is required
and checked, and `JARGON_ADJECTIVES`, where it is not. A second guard refuses a
countable noun parked on the adjective list, so it cannot become a hiding place.

### 7.3 §14.3's APOSTROPHE FIX IS LOAD-BEARING HERE, NOT A CORNER CASE

The brief predicted this and it is worth confirming with a measurement. This
lesson's central trap form **is** `l'`, and the probe that produced the brief
demonstrated the bug by reporting **NO** for `objet` against a unit whose own
`sub` is « Pronoms d'objet direct » — because `d'objet` is not a boundary match.
Dropped from the left, kept on the right, in all three layers.

---

## 8. HOW THE OWNS GOT THE WEIGHT

Doctrine §B.5: if the paradigm gets more missions than the Owns, the wrong lesson
was built. Counted by SUBJECT rather than by act, because the Owns starts in act 1
and finishes in act 5 and an act-level count would miss both ends.

```
the position     7   s02-order s07-move s08-build s09-trap s10-unseen s11-errors s15-past
the paradigm     3   s04-article s05-table s06-persons
```

**The three-word paradigm is deliberately thin.** a1.04 shipped `le`, `la`, `les`
and `l'` with four forms and three questions; a1.03 shipped the gender. Neither is
re-taught — both are named, leaned on, and spent, and a guard refuses any card
explaining how to derive a noun's gender.

### The act structure

```
act 1  The word with nowhere to go        scene · the two orders · goals
act 2  Three words you already have       article/pronoun · tapTable · the persons
act 3  In front of the verb               THE OWNS, 5 sections
act 4  Two things that go wrong           elision · listening · negation
act 5  And in the past                    position in the compound · agreement · flash · dictée
act 6  Prove it                           role play · speak · review · progress · quiz · roundup
```

**Doctrine §B.1 is paid off in `s10-unseen`**: four verbs the lesson never
conjugated and never imported as headwords (`écouter`, `chercher`, `prendre`,
`finir`), with the rule run on them cold. That is the mission that proves a
system was taught rather than three words.

---

## 9. THE ARTICLE/PRONOUN INSTANCE OF THE RECURRING SHAPE

> *« whether the article/pronoun instance of the recurring shape landed as
> recognition »*

**What was shipped to make it recognisable, stated plainly, and then the limit on
what I can claim.**

a2.02's term is quoted **verbatim** — `what comes next decides` — and a2.02 is
named beside it, which is what doctrine §B.7 asks for from seq 14 onward. The
test asserts the string, so a paraphrase goes red.

The brief additionally asks for this instance to be marked as working
*differently*, because the four before it had the distinguisher in what follows
and this one has it in what follows **and where it sits**:

> *« Here the word after it decides, and so does where it sits: an article leans
> on a noun, a pronoun leans on a verb. »*

and the card says out loud that this is the **fifth** time the shape has come
round. A guard requires the word `fifth` to appear, so the lesson cannot quietly
become "here is an observation" again.

**What I cannot claim: whether it lands as recognition for a learner.** That is a
question about a person reading a screen, and the half of verification that would
have shown me the screen did not happen (§11). What is verified is that the
string is there, the unit is credited, the instance is marked as the fifth, and
all three survive mutation.

---

## 10. MUTATION TESTING: 67 RUN, TWO FOUND A WEAKNESS

The doctrine expects roughly two in a dozen to find a weakness rather than
confirm a strength. **Wave 1 caught 35 of 35, which is not evidence** — it can
equally mean the mutations were too obvious. So a second wave was written
deliberately aimed at the edges: claims carried by one loose regex, counts that
might be derived rather than asserted, and coverage checks that could pass on the
wrong row.

**Wave 2 found two, and both were real.**

### HOLE 1: an alternation wide enough that a rewording cannot break it

The a2.22 hand-off check accepted any of « same slot », « already carry », « one
system » or three more. A mutation that removed the slot claim outright **still
passed**, because the roundup's « one system rather than two » satisfied a
different alternative on its own.

An alternation that broad is not asserting the claim, it is asserting that SOME
sentence exists. Narrowed to the literal phrase `same slot`, which is what the
brief asks for. Confirmed red afterwards.

### HOLE 2: the reference sheet could lose the only thing it is for

The sheet check asserted there was exactly one sheet and that it held no
`cheatSheet`. A mutation deleting **every `table`** from it passed. The sheet
exists *because* a table at layer core is a density failure, so a sheet with no
table has lost its whole reason. Now asserts a table is present and that it
carries all four forms. Confirmed red afterwards.

Both holes closed; both waves re-run from their final location: **65/65 caught.**

**Two more were added after the device pass**, so the v3 repair cannot be quietly
reverted: the clipped title coming back, and the width model drifting until it
stops separating the six cases measured on glass. Both confirmed red. **67/67.**

Harnesses kept at `scripts/_a206_mutate.mjs` and `scripts/_a206_mutate2.mjs`.

---

## 11. VERIFICATION: BOTH HALVES DONE, AND THE DEVICE HALF EARNED ITSELF

### The host half

```
tsc --noEmit           0 in ealch-v2, 0 in ealch-admin (none added; §6 caps admin)
node --test            4015 pass, 0 fail   (3950 before, +65)
content:parity         clean; only the pre-existing b2.01.l1 database-only row
bundle served          200, 25,826,472 bytes on 127.0.0.1:8082
```

**The served bundle was grepped for the new strings** and carries every one,
including the reframe at exactly **17** occurrences — an independent confirmation
of `REFRAME_COUNT` measured on the device bundle rather than on the source.

**A renderer `case` was found for all 17 section types used** — invariants §1's
"authored, valid, invisible" failure class:

```
scene cardDeck goals tapTable examples groupDrill trapDrill commonErrors
listening flashcards dictation scenario practice reviewDeck progressCheck
quiz roundup
```

### The device half, on a Pixel 6, and it found the defect the host half could not

**v2 shipped a clipped mission title, and this report said at v2 that it might.**
The gap named there was *« every title here was written inside that budget by
counting rather than by measuring on glass »*. On glass:

```
01  The Word With Nowhere To …      CLIPPED     14.17 em against a 13.55 budget
```

Every other host gate was green. Nothing in the batch, the merge or the test
looked at how wide a title draws, because **this build asserted a great deal
about each section and nothing about its title**. Repaired in v3 as
« The Word That Came Late » (12.02 em), and the guard now exists in the batch
and the test, importing a2.23's `titleWidth` rather than reimplementing it.

**An unplanned validation of a2.23's model.** Run over twenty-four titles it was
never calibrated against, it separated the one clip from the twenty-three passes
exactly — s01 was the only one over budget and the only one that clipped. The
model's `TITLE_MUST_FIT` / `TITLE_MUST_CLIP` lists have gained this lesson's case.

### Everything else walked, and it renders as designed

```
missions list      24 missions + badge, tag « A2 · LEÇON 21 », 0/24, all titles fit
LAYOUT 1  s02      « I see it. → Je le vois. » ONE line, both orders adjacent,
                   the pronoun's position visible in both. Fits with room.
LAYOUT 2  s04      « Je vois le film. · Je le vois. » ONE line, a2.02's term
                   quoted verbatim in the body, a2.02 and a1.04 both named.
LAYOUT 3  s14      « Je le vois. · Je ne le vois pas. » ONE line, `ne` visibly
                   outside the cluster, label reads « ne · le vois · pas ».
tapTable  s05      4 rows, three columns, ONE screen, well inside the 6-row cap.
trapDrill s09      rule 9.1 → cards 9.2 → audio 9.3 → drill 9.4, GATED
                   (« Swipe to continue »). The trap card « Je vois le. » draws
                   in red as the wrong one. Sub-mission numbering works.
glyphs             `ⁿ` draws correctly in [zhuh laⁿ-VEET] — not an underscore,
                   not a box. `l'` draws correctly in text, chips and table cells.
gestures           the resume interstitial swallows the first tap, as invariants
                   §7 says; horizontal swipe advances a cardDeck card correctly.
```

**Route note for the next build:** `ealch://missions?key=<lessonId>` works.
`ealch://lesson?key=<id>&at=<id>#sN.0` did **not** navigate when the lesson route
was already open — it left the pager where it was. The reliable jump is still the
missions list, which is what invariants §7 already says.

### What is still unverified, by name

- **The exam, the dictée and the role play were not walked.** The three required
  layouts, the trap and the paradigm were the ones the brief named as
  load-bearing, and those are done. The quiz's thirty questions are asserted by
  the contract test and by this lesson's own guards, and were not played through.
- **No audio was played.** Every `recordingId` resolves to nothing by design, so
  the device falls back to TTS, and what a rendered clip will sound like cannot
  be checked until the studio delivers.

---

## 12. WHAT IS NOT DONE

- **Not published.** `content:publish` is not part of a lesson build and nobody
  asked for one. Parity is clean and a publish would be safe.
- **`pnpm audio:render` not run**, and must not be — it spends real ElevenLabs
  credits. Every `recordingId` resolves to nothing, which is the correct shipping
  state. Nine audio briefs are authored with the constraints that cannot be
  recovered later written into `desc`, including the one that matters most:
  **« Je l'ai vue. » must be read IDENTICALLY to « Je l'ai vu. »**, because the
  whole point of the line is that the ending is not there to hear.
- **Six of the eight respelling repairs are in Postgres only**, outside the seed
  cut, and deliberately not carried: this lesson does not reference them and
  adding six rows it never shows would be the merge widening its own scope. They
  are listed in `REPAIRED_NOT_IN_SEED` so a later `content:parity` has the
  reason to hand.
- **`*.md` is gitignored here.** This file needs `git add -f`.
- **The exam, the dictée and the role play were not walked on the device.** §11.

---

## 13. FILES

```
ealch-admin/scripts/data/pronoms-direct-corpus.ts      48 rows, the decisions, the repair table
ealch-admin/scripts/data/pronoms-direct-rows.gen.ts    recorded read of Postgres, generated
ealch-admin/scripts/data/pronoms-direct-imported.ts    the layer between the record and a screen
ealch-admin/scripts/data/pronoms-direct-terms.ts       8 terms
ealch-admin/scripts/data/pronoms-direct-lesson.ts      24 sections, 6 acts, 30 questions
ealch-admin/scripts/_a206_manifest.ts                  regenerates the recorded read
ealch-admin/scripts/_a206_mutate.mjs                   mutation wave 1, 35
ealch-admin/scripts/_a206_mutate2.mjs                  mutation wave 2, 30
ealch-admin/scripts/author-pronoms-direct-batch.ts     content:pronoms-direct
ealch-admin/scripts/merge-pronoms-direct-into-seed.ts  the seed merge
ealch-v2/src/content/a2-06-pronoms-direct.test.ts      64 tests, seed-only, no source import
package.json                                           "content:pronoms-direct"
```
