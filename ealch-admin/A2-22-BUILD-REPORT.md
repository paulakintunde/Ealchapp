# a2.22 build report — « Les verbes pronominaux », seq 19

Shipped to Postgres and to `seed.json` at **v2**. Not published.

```
lesson        a2.22.l1 v2, 24 sections, 6 acts, 30 questions, 51 items
corpus        31 rows authored into `verbes`, fr.a2.verbes.721..751
              20 rows imported by id, 7 read and refused, 0 repaired, 0 supplied
              ZERO headwords authored. ZERO rows in `routines`. ZERO gendered rows.
tests         3860 before, 3906 after (+46), 0 fail
tsc           0 in ealch-v2 AND 0 in ealch-admin
seed          9267 items / 60 lessons before, 9301 / 61 after; version 42, untouched
mutations     35 rows, 0 caught by nothing, 0 skipped, SEVEN finding a weakness
device        Pixel 6, all three required layouts, and it found a defect nothing else could
```

---

## 0. IMPORTED VERSUS AUTHORED: GRAMMAR ONLY, NO VOCABULARY

The brief asks for this plainly and the plain answer is: **not one headword was
authored.** Corrections §2 for the sixth build running.

```
infinitives authored   0        infinitives imported   12
routine rows authored  0        routine rows imported  14 (asserted BY ID)
sentences authored    31        published sentences imported 8
```

Every reflexive the lesson names already existed, and it existed **framed with
`se`** — which settles the shape question doctrine §E left open. Measured:
eight of the eight verbs exist as `se lever`, `se coucher`, `se laver`,
`s'habiller`, `se réveiller`, `se doucher`, `se reposer`, `se dépêcher`; only
two of the eight exist bare. The manifest re-measures both counts on every run
and refuses if the bare set ever overtakes the framed one.

**The 31 authored rows are the paradigm and the trap, not vocabulary**, and §3
below is why they had to be written.

---

## 1. NINE CLAIMS IN THE BRIEF MEASURED FALSE

### 1.1 THE HEADLINE VERB CANNOT CARRY THE LESSON, AND `fold()` IS WHY

The brief gives the paradigm as **`se lever`** and prints all six of its cells.
Measured through the real `fold()`:

```
fold('je me lève') === fold('je me leve')      SAME
```

`fold()` strips every combining mark, so **no typed, spotted or assembled
surface can tell « lève » from « leve »**. The brief's own quiz note says
*« typeIn is the format, because both the pronoun and the verb ending must be
produced »*. On `se lever` the app accepts the missing accent and tells the
learner they spelled it right — which corrections §5 calls worse than not
asking.

**The frame verb shipped is `se laver`**, and every one of its six cells is
distinct under `fold()`, including the two that matter most:

```
je me lave / je lave              DIFFER    the Owns is typeable
nous nous lavons / nous lavons    DIFFER    the doubling is typeable
je ne me lave pas / je me ne lave pas   DIFFER   the trap is typeable
```

`se lever` became the second verb, where the stem change is named. The test pins
the `fold` measurement in **both** directions, so the day `fold` changes, the
header's reasoning goes red rather than silently stale.

### 1.2 AND `se lever` IS NOT a2.09's VERB

The brief says the stem change is *« a2.09's pattern from seq 2 »* and asks the
test to assert the reference. Measured against the shipped `a2.09.l1` body and
against `THE_SEVENTEEN`:

```
"lever"  0 occurrences        "lève"  0 occurrences
THE_SEVENTEEN:  manger nager voyager ranger partager · commencer lancer effacer
                appeler rappeler jeter · acheter geler · préférer espérer
                répéter protéger
```

a2.09 owns the **mechanism** — the stem vowel opens in the four cells where the
ending goes silent — and never names this verb. Its nearest member is `geler`.
So the credit this lesson gives is to the mechanism, by name, and the test
asserts the *negative* as well: if a2.09 ever names `lever`, this lesson fails
and the card gets upgraded from crediting a rule to crediting a verb.

### 1.3 a1.25 ALREADY SHIPPED THE DOUBLED FORM, AND ITS OWN FIELD SAYS OTHERWISE

The brief calls `nous nous levons` *« the single most disbelieved form »* and
treats the reveal as a first sighting. Measured against shipped `a1.25.l1` v2:

```
s12-persons row 4, cell 2:  « Nous nous levons tard le dimanche. »
grammarIntroduced:  "Reflexive verbs as whole lexical items in three attested
                     persons only, with the paradigm reserved for a2.22"
```

**The body shows four persons and the curriculum field claims three.** The
doubled form is on a shipped screen. So this lesson's `nous` moment is written
as a reveal of something already glimpsed, quotes a1.25's own sentence, and
names a1.25 on the card.

### 1.4 a1.25 INSTALLED THE MISCONCEPTION THIS LESSON REMOVES

Its term `seIsPartOfTheVerb` reads *« Learn it as part of the verb »* and its
`s11-se` card head is *« It is part of the word, not in front of it »*. That is
a **fixed particle**, which is exactly what the brief names as the thing the
reframe must reject. a1.25 was right to install it and this lesson is where it
is paid for — and a1.25 hands the job over explicitly, in a sentence this lesson
quotes verbatim:

> « What the small word does across every other person is a lesson of its own
> and it is a whole band from here. »

### 1.5 THE OPENER IS `sons.01`, NOT `a1.01`

The brief says the learner has been saying a pronominal verb *« since a1.01 »*.
Measured across every lesson body: `m'appelle` appears in **sons.01 (2),
sons.03 (1), sons.07 (8) and a1.15 (1)**, and **not in a1.01**. sons.01 is seq 1
of the sons track and the first lesson in the product, and it ships « Je
m'appelle Paul. » The point survives the correction and is stronger than the
brief made it.

### 1.6 THE BRIEF ASKS FOR A LAYOUT THE APP REFUSES

*« One `table`, one `tapTable`, then stop. »* A `table` at layer `core` is a
`table-in-core` density failure (`density.logic.ts:423`) and cannot be authored
in the flow at all. a2.21's brief made the same mistake.

**The required layout was delivered as a THREE-COLUMN `tapTable`**, which is what
actually gives the brief what it asked for: `LessonRich.tsx:670` gives every cell
`flex: 1` and styles column 0 differently from the rest, so `je | me | lave` is
three visually separate columns rather than one string with spaces in it. Six
rows is also the Pixel 6 ceiling and the paradigm is exactly six. The `table`
lives in the reference sheet, where `layer: 'deep'` allows it. **Verified on a
Pixel 6** — see §6.

### 1.7 THE THEME THE UNIT DECLARES DOES NOT EXIST, AND NOTHING READS IT

The brief flagged the name and it is confirmed: `routine` holds **0** rows,
`routines` holds **339**. What the brief does not say is that the declaration is
**inert**: `unit.themes` is declared at `schema.ts:1697`, validated at
`schema.ts:3626`, and **read by no component**. It is invariants §1's
authored-valid-invisible shape at the unit level.

Recorded rather than repaired: `spine-drift.test.ts:105` pins spine and seed
together, so the one-word fix is a two-file spine change. The test pins the
current state and goes red the day somebody fixes it, which is when they should
read the note. **The one-line fix is in `THEME_DEFECT` in the corpus file.**

### 1.8 THE SEED-CUT PREDICTION WAS A TRANSCRIPTION ERROR, AND THE CHECK FOUND IT

The first merge predicted four absent imports and measured three. The extra was
`fr.a1.cuisine.183` « laver », which the probe had reported `inSeed=Y` and this
build's IMPORTED table had recorded `inSeed: false`. **Not a cut surprise: a
copying mistake, found by the surprise check.** Corrected; the prediction is now
three and it held exactly.

### 1.9 lessonIds AND THE IDENTITY BLOCK WERE RIGHT

`lessonIds: []`, and the identity block matched `content_units` byte for byte.
Corrections §1 had already corrected the brief in place. Checked anyway; it cost
one line.

---

## 2. THE NEGATION WORDING: THE THREE AGREE, AND QUOTING THEM PRODUCES THE TRAP

**The brief asks whether the three earlier statements agree. They agree
completely, and that is the problem.** Read off the shipped bodies:

```
a1.18  reframe  « Wrap the verb, then ask what the verb was. »
a2.19  reframe  « Wrap the verb that changed, not the one carrying the meaning. »
a2.05  quotes a2.19 VERBATIM, and adds « One verb, two words, and the small ones
       go in between. »
a2.21  quotes BOTH verbatim
```

One string, three lessons, no disagreement. **And applied literally here it
generates the error the lesson exists to prevent.** a2.05 spells the line out as
*« Ne in front of avoir, pas straight after it »*. The verb that changed is
`lave`. Ne in front of `lave` is:

```
Je me ne lave pas.     ← the error, derived from the inherited rule
Je ne me lave pas.     ← correct
```

A lesson that quotes the line and stops has handed the learner a rule that
produces the mistake. **So the extension is stated rather than assumed**, and it
falls out of this lesson's own reframe rather than contradicting a2.19:

> **« Both words changed for the subject, so both go inside the wrap. »**

The pronoun changed for the subject too, so it goes inside. The inherited line is
quoted verbatim on the same screen and a1.18, a2.19, a2.05 and a2.21 are all
named. **a2.23 inherits this pair**; its brief says the wording must be the same
string across five lessons and it now is, with one sentence added.

**A DEFECT FOUND IN a2.21 WHILE READING IT FOR THIS.** Its `s04-recap` ships
« That is That is a2.19's line, quoted by a2.05 and again here. » — a doubled
« That is » on a learner surface, in v3, past every gate. **Reported, not fixed:
it is another lesson's body and this build does not own it.**

---

## 3. THE CORPUS HAS FORMS AND NO PARADIGM, AND THE MISSING CELLS ARE THE OWNS

Corrections §3 for the sixth build running, and again the zero-count forms are
exactly the ones the lesson exists to teach. Measured over 27,925 published
sentences, this lesson's own rows excluded:

```
je me lève        14      nous nous levons   3
tu te lèves        1      vous vous levez    0   ← the two cells that PROVE
il se lève         5      ils se lèvent      0   ← the pronoun is not a particle
je me lave         1      nous nous lavons   1
tu te laves        0      vous vous lavez    0
il se lave         2      ils se lavent      0
je ne me lève pas  0      je ne me lave pas  0   ← the trap has NO evidence at all
```

**Four of the six cells of the frame verb have zero published sentences, both
proving cells of the second verb have zero, and the negative has zero in every
person.** The whole paradigm and the whole trap are authored, in one frame each,
and the published rows are imported as evidence beside them. The manifest
re-measures the two proving cells on every regeneration and prints a note if
either stops being zero.

---

## 4. THE DECISIONS

### The reframe

> **« The pronoun changes with the subject, because it is the subject. »**

The brief's own candidate, adopted as offered. It passes doctrine §B.4's test
literally: the learner has just said the subject, so they say it again in the
other shape, and the rule runs in the gap between subject and verb. Authored 8
times, which is the house norm (doctrine §B.4 says the good lessons use six to
eight), asserted against an explicit constant in all three layers.

**Rejected, and why:**

- *« Reflexive verbs take an extra pronoun. »* The brief names it as the thing to
  reject and it is right: it gives a fixed particle, which is the error. It is
  also what a1.25 deliberately taught, so shipping it would restate the
  misconception rather than remove it.
- *« The action comes back to the subject. »* True of the meaning, useless as a
  procedure, and **false of a third of the lesson**: `s'appeler`, `se souvenir`
  and `se dépêcher` have no reflexive sense and the pronoun is obligatory anyway.
- *« Store the small word with the verb. »* a1.25's own term, correct at A1, and
  now the obstacle. Naming it as rejected is the lesson's opening move.
- *« Me, te, se, nous, vous, se. »* The table read out loud. A thing to memorise
  rather than a rule to run, and it hides the fact that makes it derivable.

### The reciprocal: ONE LINE, RECEPTIVE, NO MISSION, NO EXAM QUESTION

Measured in corrections §7's order — briefs first, then `grammarIntroduced`, then
the unit bodies. **Owned by nobody, at any level.** The only units naming
reflexives at all are a2.22 and a2.23, and **a2.23's brief makes its decision
depend on this one**: *« If a2.22 left reciprocals out, leave them out. »*

**Named because** the forms are identical to the taught ones, so a learner
meeting « ils se parlent » with only this lesson reads it as *they talk to
themselves* and cannot resolve it. **Not taught because** it is in no canDo, it
needs the indirect object a2.24 owns, and a mission would take weight off the
Owns.

The first draft had an exam question on it. **The batch refused it** — the guard
allows the line on exactly one section — and the question was replaced rather
than the guard relaxed. A quiz question is nearer a mission than it is to
context. Both directions are asserted in all three layers: named once, on
`s13-later`, with no flashcard, voiceflash or dictation drill, and reachable by
no production surface.

### The present-tense framing a2.23 inherits

> **« In the present nothing on the end of the verb knows who the subject is.
> Only the extra word changes. »**

Its brief asks for *« the agreement-free present-tense framing »* by name. This
is the clean background that lesson changes, exported as `PRESENT_NO_AGREEMENT`
and asserted to be on a screen.

### No compound form leaked, so a2.23 still has a lesson

Guarded on **every surface rather than only the production ones**, because the
brief is right that a compound form in an example is still a leak. The shape
requires a reflexive cluster (a pronoun plus a form of être) rather than an
auxiliary-shaped word, because corrections §14.4 measured that a guard built from
French morphology reads the English half of a card as French. **It is proved to
fire over six compound sentences and proved NOT to fire over six legitimate ones,
including the exact English sentence that broke a2.17's version** and a1.25's
hand-off sentence, which this lesson quotes.

Zero participles, zero clusters, on 692 learner strings, on 31 authored rows and
on 20 imported ones.

### Object pronouns are not explained

Scoped to production surfaces, as the brief asks, and the overlap is flagged
forward: **a2.06 and a2.24 are both named on a learner surface**, so a2.06 knows
the forms it inherits have already been met in another job.

---

## 5. THE OWNS GOT THE WEIGHT

```
act 2, the paradigm    2 sections
act 3, the Owns        7 sections
act 4, the trap        3 sections, one a stepped trapDrill
```

Seven against two, asserted in all three layers, and the paradigm act is
deliberately the lightest in the lesson: the table is scaffolding and the learner
has already met half of it in a1.25. The Owns act is where the learner produces a
pronoun for a subject, meets the three verbs that mean nothing by it, meets the
elision, and **builds forms for six verbs the table never conjugated** — which is
doctrine §B.1's test for whether the system was taught rather than the list.

**The exam:** 30 questions, 6 rounds. `typeIn 13 · mcq 10 · errorSpot 4 ·
listenChoose 2 · tapSilent 1`. mcq is a third, against a cap of half. Every
question has a `why` and a resolving `ref`; every produced question names a
subject, because the pronoun depends on it. Correct answers spread 25/33/25/17
across the four slots against a 40% cap.

---

## 6. WHAT THE DEVICE FOUND, AND IT IS WHY v2 EXISTS

**Both halves of the verification were done, on a Pixel 6 over USB.**

Host half: the served bundle carries every new string; all 17 section types have
a reader (`scene` via `MissionSection.tsx` → `ScenePlayer`).

Device half: all 24 missions list correctly; **all three required layouts were
opened and photographed**:

- the six forms as three separate columns, `nous | nous | lavons` visibly doubled
- « Je lave la voiture. » beside « Je me lave. »
- « Je me lave · Je ne me lave pas » adjacent, `ne` visibly in front of `me`

The respelling superscript `ⁿ` draws correctly, three term chips fit one row, and
nothing clipped.

### AND IT FOUND A DEFECT EVERY HOST LAYER WAS GREEN ON

`s06-doubled` drew:

> « ... in Nous nous levons tard le dimanche., beside a verb that carries no
> little word at all. »

**« dimanche., beside »**. A corpus row quoted mid-sentence keeps its own full
stop, and the sentence continues with a comma.

a2.20 found the `..` version of this on a Pixel 6, and **every guard in this band
since checks for two consecutive DOTS**. That is half the shape. The general
defect is a sentence-final stop with punctuation after it, and this one walked
through the batch, the merge, the lesson test and the density validator.

**Fixed with `noStop()`, and the guard widened to `/(?<!\.)\.[.,;:](?!\.)/` in all
three layers.** Re-verified on the device. **The whole band should widen it**:
a2.05, a2.20 and a2.21 all quote corpus rows inside sentences.

**THE COUNTER MOVED RATHER THAN THE BODY CHANGING UNDER v1.** Ledger §10.

---

## 7. WHICH MUTATIONS FOUND A WEAKNESS RATHER THAN CONFIRMING A STRENGTH

35 mutations, 0 caught by nothing, 0 skipped. **Seven found a weakness**, which is
above the measured rate of two.

1. **`cards` WAS IN THE MACHINE-KEY LIST.** On a `cardDeck`, a `flashcards`
   section, a `reviewDeck` and a `trapDrill`, `cards` holds the *entire* learner
   surface. Dropping it hid every card body from the jargon walk, the
   compound-tense guard and the house-copy rules at once. **Found by the reframe
   count refusing to match its own constant**, which is exactly what invariants §5
   says an explicit constant is for.
2. **COUNTING OVER A DEDUPED SET UNDER-REPORTS.** The reviewDeck card back is the
   reframe and nothing else, and so is `Lesson.reframe`; a `Set` collapsed the two
   and the count came out at seven for eight authored occurrences. **Counting now
   uses a non-deduped walk.** Any lesson counting a short line over `[...new Set]`
   has this today.
3. **THE "ACCEPTS THE ANSWER IT DISPLAYS" GUARD IS A TAUTOLOGY, AND THE WHOLE BAND
   CARRIES IT.** Every lesson from a2.01 to a2.21 runs
   `for (const a of q.accept) ok(matchesAccept(a, q.accept))`, which asks whether
   the accept list accepts **itself**. It cannot fail for any value. Replacing an
   accept entry with a different sentence walked through it and through the merge.
   **The check with content is that a multi-word answer is a sentence the lesson
   owns**, and all three layers now do that.
4. **THE MERGE HAD NO LAYOUT-3 CHECK**, so removing the affirmative from the
   negative pair card walked through it. a2.16 §4's shape for the fourth build.
5. **THE MERGE HAD NO TRANCHE CHECK**, so releasing an item twice walked through
   it.
6. **THE BATCH HAD NO ROLE-PLAY CHECK**, so a one-alt turn walked through it —
   which is a2.21 §4.4 in the other direction, and the exact way a2.03 shipped
   three of them with every gate green.
7. **A CROSS-LESSON QUOTE COMPARED AGAINST ITS OWN CONSTANT.** Paraphrasing
   `A201_REFRAME` renamed both sides and was caught only by the version check.
   a2.18 §6 and a2.21 §8, **for the fifth time in this band**. All three quoted
   lines are now LITERALS on the guard side and re-read off the seed in the test.

---

## 8. THE RESPELLINGS, AND A FALSE POSITIVE FOUND RATHER THAN ABSENT

**Every nasal in this lesson is VISIBLE and there are no mixed rows.** The only
nasal shape is the `-ons` ending, which ends a token, so `hasPlainNasalFor` sees
all of them. `RESPELL_REPAIRS_INVISIBLE` is asserted **empty rather than
omitted**, so corrections §14.1's mixed-row problem cannot arrive unnoticed. The
test pins the `-ons` rows by name AND asserts the plain-n form IS flagged, so the
day the checker changes, the claim that these rows are visible goes red.

**Corrections §6 asks builds to report the ABSENCE of the false positive. This
build found two PRESENCES:**

```
fr.sons.verbes-essentiels.101  « se promener »  [suh prohm-NAY]  FLAGGED
fr.a1.animaux-domestiques.100  « promener »     [prohm-NAY]      FLAGGED
```

`promener` is /pʁɔm.ne/: a real /ɔ/ and a real /m/, **no nasal vowel at all**.
Same shape as `jaune` in invariants §3 and `nous sommes` in a2.21 §2. **Neither
row is imported and neither is repaired** — a2.21 §3 measured that a
false-positive row checked against the checker rather than against the fixed
value is a hole in every layer, and the cheapest way not to have the hole is not
to carry the row. `fr.a1.deplacements.148` holds the clean `[suh prom-NAY]`.

---

## 9. THE DICTÉE, AND A CONSTRAINT THIS LESSON DOES NOT HAVE

Twelve targets, **all LETTERS**, checked through the real `dicteeMode`, and every
row carrying the drill is targeted so there is no dead dictation row.

**`ne` never elides here, in any person**, because every form of the pronoun
starts on a consonant. a2.05 §2 needed `reduceNegative()` for the elision and
a2.21 inherited it; **this lesson needs neither**, and the affirmative/negative
pair check is a plain strip. That is a simplification worth handing forward, and
**a2.23 loses it again**: « il ne s'est pas lavé » elides the PRONOUN rather than
the `ne`.

Two rows go to word mode and carry no dictation drill, recorded rather than
worked around: `Nous ne nous lavons pas.` (19) and `Nous nous levons tôt.` (17).

---

## 10. WHAT a2.23 INHERITS, AND IT IS NEXT

- **The negation pair.** a2.19's line verbatim plus this lesson's extension. Five
  lessons, one rule. Both are literals in all three layers.
- **The present-tense framing**, worded so it can be quoted: `PRESENT_NO_AGREEMENT`.
- **The reciprocal decision: LEFT OUT**, named once receptively. Its brief already
  says to follow whatever this lesson did.
- **Not one compound form anywhere**, guarded on every surface, so its whole
  subject is untouched.
- **The verbs and the six cells** are in `PRONOMINAUX` in
  `data/pronominaux-corpus.ts`, and `fr.a2.verbes.791..860` is its reserved block.
- **`se laver` is the frame verb and `fold` is why**, which matters more for a2.23
  than for this lesson: its agreement is orthographic and typed.
- **`Je me lave.` is the affirmative half** of the `j'ai lavé la voiture` /
  `je me suis lavé` contrast its brief requires.
- **The `les mains` case is named receptively and not taught** —
  `fr.a1.corps.209` is imported and shown — so a2.23 inherits an open question
  rather than a half-taught rule.
- **Widen the double-stop guard** (§6) before authoring, not after.

---

## 11. WHAT I COULD NOT VERIFY

- **The audio.** Every spec is a brief and `CLIP_MANIFEST` is empty by design, so
  every card falls back to device TTS. `pnpm audio:render` was not run.
- **Whether the widened stop guard is right for the whole band.** It is right
  here and it is untested against a2.05, a2.20 and a2.21's bodies. Somebody
  should run it over them before adopting it.
- **The exam end to end on the device.** The three required layouts, the missions
  list, the overview and two card decks were opened; the 30-question exam was not
  walked through.
- **Whether `a2.06` will want the overlap flagged differently.** This build names
  it and defers; that lesson has not started.
