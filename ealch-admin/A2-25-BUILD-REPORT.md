# a2.25 build report — « Y et EN »

**seq 23. The THIRD and last lesson of the pronoun block, so it inherits
`a2.06`'s position rule and `a2.24`'s `à` framing and completes both.** Built
2026-08-15. Applied to Postgres and merged into `seed.json`. Not published.

Doctrine §F, corrections §12, and every item the brief asks to be reported.

---

## 0. THE HEADLINE

```
authored     50 rows, fr.a2.pronoms-essentiels.287..336   584 before, 634 after, exactly +50
imported     27 rows, 0 verbs authored                     10th build running with none
repaired      5 respellings across 4 themes                1 BLIND, 0 house, 0 false positives
lesson        a2.25.l1 v1, 24 sections, 6 acts, 30 questions, 77 items
the Owns      7 sections against the paradigm's 3
the halves    5 sections on the obligatory en against 3 on y
the order     OPTION 1: y before en, and the rest escalated as a curriculum gap
tests         4084 before, 4155 after (+71), 0 fail
tsc           0 in ealch-v2 AND 0 in ealch-admin
mutations     123 across two waves, NINE finding a weakness, all closed
parity        clean; only the pre-existing b2.01.l1 database-only divergence
device        SIX surfaces walked on a Pixel 6, no defects. Four not reached: §9
```

One new fact, and everything else on every screen is something the learner
already owned:

> **`The preposition goes inside the pronoun, so it does not get said twice.`**

---

## 1. THE PREREQUISITES, WHICH THE BRIEF SAYS TO STOP OVER

> *« Whether `a2.06` and `a2.24` are shipped. Both are hard prerequisites. If
> either is not, stop and say so. »*

**BOTH ARE SHIPPED.** Measured against Postgres and against the seed before a
line was authored:

```
a2.06   lessonIds ["a2.06.l1"]   v3   seq 21   applied and merged
a2.24   lessonIds ["a2.24.l1"]   v3   seq 22   applied and merged
a2.25   lessonIds []                  seq 23   greenfield, version starts at 1
```

The batch refuses the apply if either unit has an empty `lessonIds`, and the
test asserts both by name and by minimum version.

---

## 2. THE SLOT-ORDER DECISION, AND THE CURRICULUM GAP

**This is the report item the brief says matters most, so it is second.**

### OPTION 1 IS TAKEN, UNCHANGED

The canDo says « in the right slot ». This lesson teaches **y before en, and
nothing else**: `Il y en a.` is the one multiple-pronoun sequence its own
inventory can generate, and it is worth having because it is one of the
commonest answers in the language. `s16-order` states it, the dictée asks for
it, and the sheet holds it.

Both the batch and the test refuse any other adjacent pair from the closed sets,
anywhere on the surface or on any authored row.

### THE GAP, AND NOBODY HAS DECIDED IT

**Re-measured here rather than taken from the brief.** The brief ran corrections
§7's first test (the brief files) and could not run the second (shipped
`grammarIntroduced`). Both were run:

```
unit bodies         no A2 unit's title, sub or canDo names pronoun order
                    the preflight's own hand-off probe: « a2.29 ordre → NO UNIT
                    AT ANY LEVEL »
brief files         a2.26..a2.35 have no brief file at all. Twenty exist, all
                    for seq 1..23.
grammarIntroduced   swept across all 65 shipped lessons: NOT ONE claims
                    multiple-pronoun order. a2.24's reserves it explicitly
                    (« the co-occurrence of two object pronouns in one clause is
                    reserved beyond this unit ») and a2.06's says nothing.
corpus evidence     29 published rows carry two object pronouns in one clause.
                    EVERY ONE IS B1 OR B2. The A-level corpus publishes none of
                    the other combinations at all, which is an argument for the
                    deferral rather than against it.
```

**So: either a later A2 unit owns multiple-pronoun order, or `a2.35` (Bilan A2)
inherits it, and nobody has decided.** This build does not resolve it. It names
the question on a learner surface instead, verbatim:

> `Two of these small words in one sentence is a further question, and it is not
> answered here.`

and the test carries a **forward-looking assertion**: if any unit's identity
block ever starts naming pronoun order, this lesson's hand-off goes red so the
next author finds out rather than leaving a stale pointer. That assertion was
mutation-tested by inventing an `a2.29` that takes the topic; it goes red.

**Recommendation, escalated rather than acted on:** `a2.29` or `a2.30` in the
situational block is the natural home, because by then the learner has all five
sets and a situation to use them in. `a2.35` inheriting it would put a first
teaching of a hard ordering rule inside a review unit, which is the shape
a2.18's build report warned about for tense availability.

---

## 3. EVERY BRIEF CLAIM MEASURED FALSE

**Seven, and the first one changes the shape of the lesson.**

### 3.1 « CORRECTIONS §3 HOLDS FOR THE EIGHTH BUILD RUNNING » — FALSE, AND MORE COMPLETELY FALSE THAN FOR ANY EARLIER LESSON IN THE BAND

The brief: *« the forms are scattered, no two sentences differ by one thing, and
the cells you need are the empty ones. Author your paradigm in one frame. »*

`fr.a2.pronoms-essentiels.028` to `.033` are **SIX CONSECUTIVE PUBLISHED ROWS IN
THIS LESSON'S OWN THEME**, and between them they are this lesson's paradigm:

```
.028  « j'y pense »                                       [zhee PAHNSS]
.029  « Je vais à Paris ; j'y vais en train. »
.030  « Tu penses à ton examen ? Oui, j'y pense souvent. »
.031  « j'en veux »                                       [zhahn VUH]
.032  « Tu veux du café ? Oui, j'en veux bien. »
.033  « Elle a trois frères ; elle en parle souvent. »
```

`.029` carries the à-half, the pronoun-half AND a preposition `en` — this
lesson's opening screen and its largest trap — in one published string, with a
semicolon between the halves. Somebody wrote it years ago for a pronoun theme.

This is **a2.18's find repeating** (four consecutive published time-preposition
cards nobody had noticed) and it is the second time §3's « most reliable single
prediction in this file » has failed. All six are imported rather than
re-authored, and `zhee` and `zhahⁿ` are read off them.

### 3.2 « il y a OCCURS IN 195 PUBLISHED SENTENCES » — IT IS 245 ROWS, 223 AS A WHOLE-WORD MATCH

And the brief's UNVERIFIED question — *« whether the 195 il y a rows are usable
as imports »* — has a sharper answer than either option it offers:

```
223  rows carry « il y a » as a whole word
 18  of those have a respelling AND no gender
  0  of those are in pronoms-essentiels
```

**Not one is in this lesson's theme.** The import had to come from a2.18's, and
it did: both of a2.18's own cards are carried.

### 3.3 « THE PRODUCTIVE USES OCCUR ONCE OR TWICE » — TRUE OF FIVE EXACT FRAMES, FALSE OF THE CONSTRUCTION

Measured across all 48,360 published rows:

```
j'en 30 · n'y 61 · j'y 11 · n'en 27      192 rows carry an elided y or en pronoun
```

a2.06 sharpened §3 by finding a construction that occurs twice and still leaves
you authoring every cell. a2.24 sharpened it the other way. **This build finds
the third case: the construction is COMMON, the bare frames are all absent, and
the theme already publishes the paradigm.**

### 3.4 « prendre IMPORTS AS PRAHⁿDR … BRING ANY COMPETING COPY INTO LINE » — THERE IS NO COMPETING COPY

All three published `prendre` rows already hold `PRAHⁿDR`. The brief predicts a
repair that does not exist, and it names the one word in the import list that
needs nothing.

### 3.5 AND IT MISSES THE ONE THAT DOES

**`penser`** — the verb behind « j'y pense », this lesson's second frame — is
`pahn-SAY` on BOTH its published rows and both are FLAGGED. The brief's
respelling section names four words and not this one. §5.

### 3.6 « J'y vais. IS 7 LETTERS » — IT IS SIX

Measured through the real `dicteeMode` letter count. Immaterial and recorded
because §4 asks for the count to be proved by the function. a2.24's brief made
the same slip in the other direction.

### 3.7 « n'y va pas 0 » IS TRUE AND READS AS AN ABSENCE THAT IS NOT THERE

The imperative frame is absent. `n'y` is on 61 published rows and `n'en` on 27.
The probe asked for the one shape nobody says.

---

## 4. THE FIND THE BRIEF COULD NOT HAVE PREDICTED

**THE CORPUS SYSTEMATICALLY BREAKS THE NASAL OF THE PRONOUN `en`.**

Of the 19 published rows carrying an elided y or en pronoun AND a respelling,
**FOURTEEN are FLAGGED**, and every one breaks in the same place: the nasal of
`en` written as a plain `n`.

```
FLAGGED  fr.sons.expressions-utiles.130  « j'en ai marre »        zhahn-NAY MAHR
FLAGGED  fr.sons.expressions-utiles.136  « j'en ai besoin »       ZHAHN NAY buh-ZWUHN
FLAGGED  fr.sons.expressions-utiles.059  « je t'en prie »         zhuh tahn PREE
FLAGGED  fr.sons.expressions-utiles.158  « il y en a encore »     EEL YAHN NAH ahn-KOR
FLAGGED  fr.a2.pronoms-essentiels.031    « j'en veux »            zhahn VUH
FLAGGED  fr.sons.expressions-utiles.157  « il n'y a plus de pain » EEL NYAH PLÜ DUH PUHN
        … and eight more, listed in RESPELL_LEFT_ALONE
```

Four are imported and repaired here. The other ten are recorded with the reason
(a2.15's precedent: repair what you import, record what you did not). **This is
the largest single respelling defect any build in this band has surfaced and it
is not this lesson's to fix.**

---

## 5. THE RESPELLING REPAIRS, AND THE SHARPEST §14.1 CASE IN THE BAND

Five rows across four themes. **ONE BLIND, ZERO house, ZERO false positives.**

```
id                                fr                from                   half                   to                     blind house
fr.sons.verbes-essentiels.020     penser            pahn-SAY               pahⁿ-SAY               pahⁿ-SAY               no    no
fr.b1.verbes.083                  penser            pahn-SAY               pahⁿ-SAY               pahⁿ-SAY               no    no
fr.a2.pronoms-essentiels.028      j'y pense         zhee PAHNSS            zhee PAHNSS            zhee PAHⁿSS            YES   no
fr.a2.pronoms-essentiels.031      j'en veux         zhahn VUH              zhahⁿ VUH              zhahⁿ VUH              no    no
fr.sons.expressions-utiles.158    il y en a encore  EEL YAHN NAH ahn-KOR   EEL YAHⁿ NAH ahⁿ-KOR   EEL YAHⁿ NAH ahⁿ-KOR   no    no
```

### THE BLIND ROW IS THE SAME FRENCH WORD AS THE TWO VISIBLE ONES

Corrections §14.1 says the split is by NASAL rather than by ROW. **This is the
sharpest case in the band so far, because it is by nasal WITHIN ONE WORD
FAMILY:**

```
penser      pahn-SAY      FLAGGED    `pahn` ends a token, so the checker sees it
j'y pense   zhee PAHNSS   CLEAN      `PAHNSS` has SS after the N, so it does not
```

Same word, same vowel, one respelling visible and one invisible, and only what
follows the `n` **in the respelling** decides. An author who filed « j'y pense »
under VISIBLE, repaired what the checker reported and got a green report would
have repaired **nothing**. Both layers assert the contrast by name, and both
assert the blindness as a negative so the day the checker improves this goes red
rather than carrying a dead list.

### FOUR OF THE FIVE ARE ROWS THIS LESSON IMPORTS

a2.24 had ONE and called it the case with no precedent in the band. This build
has **FOUR**, and three of them are the rows it reads its own respellings off.
They arrive repaired by the CARRY path.

### THE FALSE POSITIVE: LOOKED FOR, AND NONE FOUND

Corrections §6 closes by asking every build to look and to report the absence.
a2.06 found none, a2.24 found two. **This build found none**, measured through
the real function across every word it prints with a real /n/ after a vowel
(`une`, `bureau`, `tennis`, `personne`, `téléphone`, `marché`, `assez`, `sucre`,
`travail`, `merci`). The test asserts the absence **and** asserts the checker
still has the defect (`hasPlainNasalFor('la semaine', 'suh-MEHN')` is still
flagged), because reporting zero is only a finding if the shape still exists.

### THE /ø/ QUESTION, DODGED RATHER THAN SETTLED

`veux` is `VUH` on twelve published rows and `VEU` on one; `deux` is `DEU` on two
and `DUH` on one. Invariants §3 says `/ø œ/` is `EU`, so the corpus's own
majority for `veux` contradicts the stated convention. Repairing either would be
one build inventing a convention (invariants §9), and printing both would put
two spellings of one vowel on adjacent cards. **This build takes `VUH` — the
12-to-1 majority and the value on the row it imports — and uses `trois` and `un`
rather than `deux` wherever a number is needed**, which removes the clash instead
of resolving it. Recorded so the next author knows the question is open.

---

## 6. HOW THE OWNS GOT THE WEIGHT, AND HOW MUCH THE OBLIGATORY en GOT

Doctrine §B.5, counted by SUBJECT rather than by act.

```
what they replace   7   s02-two s04-person s07-de s08-must s09-quantity s10-unseen s14-errors
the two words       3   s05-there s06-listening s15-negation
```

And the split the brief asks to be reported, because *« y has an English analogue
in "there" and en has none »*:

```
the en half   5   s07-de s08-must s09-quantity s11-threeens s12-trap
the y half    3   s04-person s05-there s13-frozen
```

**Both ratios are asserted in the batch, the merge and the test.** The en half
also takes the trapDrill, the scene and the largest share of the exam: rounds 2,
3 and 6 are en-led, rounds 1 and 5 are shared, round 4 is the frozen phrase.

### The act structure

```
act 1  The answer that had nowhere to go   scene · both words · goals
act 2  A person, a place, a thing          the a2.24 handshake · y · listening
act 3  The word you cannot leave out       de · THE OBLIGATORY · quantity · unseen
act 4  One word, three jobs                the three ens · trap · il y a · errors
act 5  Saying no, and the order            negation · y before en · flash · dictée
act 6  Prove it                            role play · speak · review · progress · quiz · roundup
```

**Doctrine §B.1 is paid off in `s10-unseen`**: four things on no list in this
lesson (`rêver de`, `revenir de`, `répondre à` with a thing, `avoir besoin de`),
with the rule run on them cold. `revenir de Paris` is the sharpest case: the
thing behind `de` is a PLACE and the answer is still `en`, which is exactly what
a learner holding « y is there and en is some » gets wrong every time.

---

## 7. HOW il y a WAS HANDLED, AND WHETHER a2.18 MADE IT HARDER

> *« how you handled `il y a` — shown as containing `y`, or left alone — and
> whether `a2.18`'s shipped treatment made that harder than this brief
> expects. »*

**SHOWN AS CONTAINING y, IN ONE MISSION, AND a2.18's SHIPPED TREATMENT MADE IT
EASIER RATHER THAN HARDER.**

The brief warns that a2.18 « had a tense-availability problem and may not have
shipped what the brief planned ». Read as shipped: a2.18 took option 1, kept
`il y a` for "ago" receptive-only, changed its own canDo after the build on
Paul's instruction, and **shipped both senses on cards it authored or imported**
(`fr.a2.prepositions-essentielles.186` « il y a trois jours » and
`fr.sons.jours-et-mois.081` « il y a une heure », both respelled `EEL EE AH`).
Its rule — *« A measurement and then a full stop means ago. A time word still
being described is a thing. »* — is intact.

So this lesson had two published cards to lean on rather than a hole. `s13-frozen`
shows the phrase, names a2.18, and states:

> `Il y a is three words that arrived together, and they do not come apart.`

and shows what taking it apart gives you (« Il en a. », real French meaning
something else). **Neither of a2.18's senses is re-taught.** Enforced by TYPE
rather than by a count: exactly one TEACHING section may state the frozen rule,
and the recap surfaces may repeat it — a bare count would have let a second
teaching section in as soon as a recap dropped the line.

**One thing a2.18 did NOT leave behind:** its one-spelling-per-lesson guard is
scoped to its own rows and cannot reach here. That was checked rather than
assumed, and the convention is followed anyway, including on `il y en a` —
which is where the first version of the check could not see, because a
boundary-exact « il y a » does not match « il y en a ». Mutation found it.

---

## 8. THE en GUARD SHAPE THAT WORKED

> *« the `en` guard shape that worked, with the sentences in MUST_FIRE and
> MUST_NOT_FIRE, because it is the hardest guard in the pronoun block and the
> next author will copy it. »*

**The pronoun is either ELIDED, or it sits IMMEDIATELY IN FRONT OF A CONJUGATED
VERB. The preposition never does either.** Guard the thing, not the letters.

```ts
const EN_ELIDED      = /(?<![\p{L}\p{N}-])(j|n|m|t|s|qu)['’]en(?![\p{L}\p{N}'’-])/iu;
const EN_BEFORE_VERB = new RegExp(`(?<![\\p{L}\\p{N}'’-])en\\s+(${EN_VERBS.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
const usesEnPronoun  = (s) => EN_ELIDED.test(s) || EN_BEFORE_VERB.test(s);
```

**The verb list is the load-bearing part and it is deliberately narrow: it holds
no form that is also a common noun.** `avance` and `retard` are OUT, because
« en avance » and « en retard » are prepositional phrases and a list holding them
fires on both. That single decision is the difference between a guard and noise.

```
MUST_FIRE      J'en ai. · J'en parle. · Tu en as ? · Je n'en veux pas. · Elle en parle.
               Nous en prenons. · Il y en a. · J'en bois. · Vous en voulez ?

MUST_NOT_FIRE  Elle habite en France. · Je vais en France. · Je finis en deux heures.
               en deux heures · en France · Elle est en retard. · Il arrive toujours en avance.
               Nous voyageons en train. · Je leur parle en français.
               ── AND THE ENGLISH ──
               You did not stall on a word you had not learned.        ← a2.17's sentence
               The preposition goes inside the pronoun, so it does not get said twice.
               Yes, I do. · One word, three jobs, three lessons.
```

The English sentences do not fire because a standalone `en` almost never occurs
in English and the house boundary blocks `then`, `open`, `when`. a2.17's sentence
is in the list by name, as the brief asks.

**And a CLASSIFIER on top of it**, because the two ens are the same string and
the same sound:

```ts
const enJob = (s) => usesEnPronoun(s) ? 'pronoun'
                   : EN_PREPOSITION.test(s) ? 'preposition' : null;
```

An ear question may not offer one option of each job. **A HOMOPHONE_FORMS list
cannot express that** — it compares different strings and these are the same
string — which is why the brief's instruction to « enforce it with a
HOMOPHONE_FORMS list » is answered with a classifier instead. Mutation found
that the first version ran over the QUIZ only and the LISTENING section has its
own `questions`; both surfaces are walked now.

### AND THE SURVIVING-PREPOSITION SHAPE, WHICH IS THE ERROR THE REFRAME PREDICTS

```ts
Y_KEEPS_A  = (y-pronoun)  [^.!?»]*? (à|au|aux)
EN_KEEPS_DE = (en-pronoun) [^.!?»]*? (de|du|des)
keepsPreposition = (s) => { const t = stripFrozen(s); return Y_KEEPS_A.test(t) || EN_KEEPS_DE.test(t); }
```

Two things make it work. **`[^.!?»]*?` scopes it to one clause**, so a
preposition in the next sentence of the same string cannot trip it — which
matters because half this lesson's card bodies quote two sentences. And
**`stripFrozen` treats « il y a » as one word**, which is the same claim the
lesson makes on a card: « Il y a du pain. » holds a y and a `de` and is perfectly
correct. The test asserts that stripping does not disarm the guard on anything
else.

---

## 9. VERIFICATION: BOTH HALVES DONE, AND THE GAPS BY NAME

### The host half

```
tsc --noEmit           0 in ealch-v2, 0 in ealch-admin
node --test            4155 pass, 0 fail   (4084 before, +71)
content:parity         clean; only the pre-existing b2.01.l1 database-only row
bundle served          200, 26,139,808 bytes on 127.0.0.1:8082
```

The served bundle was grepped for every new string and carries all of them,
**including the reframe at exactly 15** — an independent confirmation of
`REFRAME_COUNT` measured on the device bundle rather than on the source. A
renderer `case` was found for all 17 section types used and both sheet section
types.

### The device half, on a Pixel 6

**SIX SURFACES WALKED, NO DEFECTS FOUND.** Unusually for this band: a2.06,
a2.24, a2.03 and a2.16 all shipped a layout defect that only glass caught, and
this build starts from their repairs rather than rediscovering them.

```
missions list   24 missions, tag « A2 · LEÇON 23 », 0/24. ALL 24 TITLES FIT,
                checked across three scroll positions.
home            « Y et EN » is the CONTINUE card after a cold start.
LAYOUT 1  s02   « y  =  à + a thing » over « en  =  de + a thing », TWO ROWS on
                one card, the preposition visible in each, a2.06's rule quoted in
                the body, 3 term chips. Fits with room.
LAYOUT 2  s04   « Je parle à Marie. » over « Tu vas à Paris ? », both complete,
                both respellings in the body, a2.24 credited. `à` draws correctly.
LAYOUT 3  s11   THREE ROWS, three columns, ONE screen with Next still visible.
                The « whose lesson » column reads a2.04 / a2.18 / a2.25.
LAYOUT 4  s08   « Oui, j'en ai. » over « Oui, j'ai. », both complete. `ⁿ` draws
                correctly in [wee, zhahⁿ NAY] — not an underscore, not a box.
trapDrill s12   rule 12.1 → cards 12.2, sub-numbering works, red eyebrow
                « THE RULE » / « FOUR CARDS », the error card « J'y vais à
                Paris. » drawn IN RED as card 1, 4 card dots, its own Continue.
s13-frozen      « Il y a du pain. » with its respelling and gloss, the frozen
                rule and a2.18 named in the body.
gestures        the resume interstitial swallows the first tap, as invariants §7
                says. The deep link is swallowed on cold start and works on the
                second firing.
```

### What is NOT verified, by name

- **The dictée, the exam, the role play and the reference sheet were not
  walked.** Three attempts to reach `s18-dictation` were lost to device
  navigation rather than to content: the resume interstitial's « Pick up where
  you left off » resumed a different lesson (the `a2.999` device-check fixture)
  because the app's global resume pointer had moved there, and the dev client
  then lost Metro and fell back to a stored LAN URL with a full-screen
  `java.net.ConnectException`. **Logcat shows no FATAL and no AndroidRuntime
  exception at any point**, so this is infrastructure, not a defect in the
  content. The dictée is the one load-bearing surface of the four and the gap is
  named rather than papered over.
- **The dictée's LETTERS-mode claim is asserted three ways off the device**:
  every one of its 14 lines runs through the real `dicteeMode` in the batch, the
  merge and the test, and every row carrying the dictation drill is checked even
  if the dictée does not name it.
- **No audio was played.** Every `recordingId` resolves to nothing by design.
- **The trapDrill's audio and gated drill steps (12.3, 12.4) were not reached**;
  12.1 and 12.2 were, and the four-step contract is asserted by
  `lesson-contract.test.ts` and by this lesson's own test.

---

## 10. THE THREE QUOTED STRINGS: AVAILABLE, CONSISTENT, AND ONE SURPRISE

> *« whether the three quoted strings (`a2.06` position, `a2.24` `à`, the
> negation rule) were actually available and consistent, or which had drifted. »*

**ALL THREE WERE AVAILABLE AND NONE HAD DRIFTED.** Each was read off the shipped
neighbour rather than off its brief, and the test re-reads all of them out of the
seed so a drift on either side goes red.

```
a2.06 position   The pronoun goes in front of the verb, not after it.
                 Quoted by three lessons now. Present in a2.06.l1 AND a2.24.l1
                 in the shipped seed. Quoted 6 times here.
a2.24 à framing  À plus a person becomes lui or leur, and the à disappears with it.
                 Quoted 5 times here.
the negation     a1.18 « Wrap the verb, then ask what the verb was. »
                 a2.19 « Wrap the verb that changed, not the one carrying the meaning. »
                 a2.06 « The wrap goes round the pronoun and the verb together. »
                 THREE strings, still three, and this lesson quotes all three and
                 adds NOTHING. The brief's « matches a2.24's, which matches
                 a2.06's » is now true of four lessons.
```

**THE SURPRISE, AND IT IS A GOOD ONE.** a2.24's report says it wrote its à
framing *« to survive a2.25's substitution »* and exported the half this lesson
replaces as `A_FRAMING_NEXT = 'à plus a thing'`. It did survive. This lesson's
own half is **the same sentence with one phrase changed**:

```
À plus a person becomes lui or leur, and the à disappears with it.   a2.24
À plus a thing  becomes y,           and the à disappears with it.   a2.25
```

Both layers assert that the two share their second half verbatim, so a later
author who rewords either one breaks the pattern visibly rather than quietly.
That is a neighbour writing a string for a lesson that did not exist yet, and it
worked.

---

## 11. QUESTIONS I WANTED AND COULD NOT WRITE

Corrections §5, and a2.09's section is the model.

- **A typed question on the grave in à.** MEASURED: `fold('Je vais à Paris.')
  === fold('Je vais a Paris.')`. Written as an mcq instead.
- **A typed question on `où` against `ou`.** THE SAME LIMIT, measured. **Both of
  this lesson's live diacritics are untestable by typing**, which is unusual, and
  it is why the exam carries mcq that would otherwise have been typed. Not
  written at all: one accent mcq makes the point.
- **An ear question asking which `en` is which.** IT HAS NO CORRECT ANSWER. Same
  word, same sound, and the whole distinguisher is what comes after. Enforced by
  a classifier over BOTH the quiz and the listening section.
- **A typed question on the apostrophe in `j'en`.** `fold()` strips punctuation
  and whitespace, so « J'en ai. », « Jen ai. » and « J en ai. » are one answer.
- **An ear question separating « J'y pense. » from « Ils y pensent. » beyond the
  subject.** `pense` and `pensent` are one sound.

**And the two that CAN be written, which is the unusual part.** Measured through
the real `fold()`:

```
fold("J'y vais.") !== fold('Je vais.')      the replacement is TYPEABLE
fold("Oui, j'en ai.") !== fold("Oui, j'ai.") the obligatory case is TYPEABLE
```

Both halves of this lesson can be asked for in writing, which is rare in this
band, and the exam is shaped around it: **14 free-text of 30** against a floor of
12, with 12 mcq, 2 listenChoose and 2 tapSilent.

---

## 12. MUTATION TESTING: 123 RUN, NINE FOUND A WEAKNESS

The doctrine expects roughly two in a dozen to find a weakness. **Wave 1 caught
90 of 90 and that is not evidence.** Wave 2 was written for the shapes a2.06 and
a2.24 found: an assertion satisfied by a different sentence, a coverage check
passing on the wrong row, a check scoped to the quiz the defect can walk round,
and a count that is an equality in one direction only.

**Wave 2 found nine. Eight were real holes and one was a weak mutation.**

### HOLE 1 — a coverage check passing on the wrong row. a2.24's HOLE 1 exactly

The dictée's past check asked for a row matching `/\bai\b/`. **« Oui, j'en ai. »
satisfies it** — the obligatory answer, the whole point of the lesson, and a
present tense. Removing BOTH real past rows passed. Now the check is an
auxiliary AND a participle, and the test asserts the new shape does NOT match the
obligatory answer.

### HOLE 2 — an assertion satisfied by a different sentence

« the lesson shows the errors it exists to prevent » walked the whole surface, so
an error could leave the commonErrors deck and survive only as a quiz distractor.
Now the four production errors are required **on the deck, where the learner
meets them**.

### HOLE 3 — a check scoped to the quiz, and it is the thing the brief forbids

The ear-job classifier ran over the QUIZ only. **`s06-listening` is `audioFirst`
and has its own `questions` with their own `opts`**, so a question asking which
`en` is which by ear could sit there and pass. Both surfaces are walked now, in
the test and in the batch.

### HOLES 4 and 5 — the frozen-spelling check could not see « il y en a »

`/il y a/` boundary-exact does not match « il y en a » — the one place the phrase
takes a passenger, and two of this lesson's own rows. Both got a second spelling
and the test passed. Widened to `/il y (en )?a/`.

### HOLES 6, 7 and 8 — the three-ens claim was in the prose and not in the cells

The section's `say` names both neighbours, so a version asserting only the
section's strings passed a table that **named the wrong unit in its own cells**,
**carried the same job twice with three different sentences**, and **lost its
middle column outright**. The claim of that screen IS the table, so the columns,
the cell count, the three owners and the three jobs are all asserted now — in the
test and in the batch.

### AND ONE THAT WAS WEAK RATHER THAN REVEALING

« a typed answer no longer matches its own accept list » set the accept list to
`['zzz']`, and `matchesAccept('zzz', ['zzz'])` is **true by construction**, so
the mutation never created the defect it named. That assertion is a control
against a `fold()` change, not a guard on the content. Replaced with a real one:
**a typed question may not quote its own answer**, which is a live risk here
because every `typeIn` quotes the source sentence and asks for the replacement.

**Both waves re-run from their final location: 90/90 and 33/33.** Harnesses at
`scripts/_a225_mutate.mjs` and `scripts/_a225_mutate2.mjs`.

---

## 13. WHAT I FOUND WRONG OR INCOMPLETE IN `A2-BRIEF-CORRECTIONS.md`

### 13.1 §5's HOMOPHONE CHECK IS SHIPPED IN THE WRONG SHAPE BY THREE LESSONS

§5 gives the right shape in its own code sample —
`opts[i].replace(x, y) === opts[j]` — and **a2.10, a2.11 and a2.24 all ship a
different one**: they count how many options carry a member of a group and refuse
the question at two. It works for them because their groups (`leur`/`leurs`,
`vu`/`vue`) never both appear in one legal pair.

**It does not work here.** « J'y vais. » against « Je vais. » is this lesson's
single most useful ear question, both options carry `vais`, and the counting
check refuses it. This build implements §5's own sample instead, and the test
asserts BOTH directions: it catches a real swap and it permits the pair the
lesson turns on.

### 13.2 §5's « ENFORCE IT WITH A HOMOPHONE_FORMS LIST » CANNOT BE DONE FOR THE CASE THIS LESSON HAS

A word list compares different strings. **The two `en`s are the same string**, so
no list can express « these two options are one sound ». It needs a classifier on
the JOB. §5 should say that a homophone list handles two spellings of one sound
and that one spelling with two jobs needs something else.

### 13.3 §14.1's SPLIT-BY-NASAL HAS A CASE SHARPER THAN THE ONES IT NAMES

§14.1 illustrates the by-nasal split with `lentement` and `kohn-PRAHNDR`, both
two-nasal rows. **The sharpest case is ONE nasal, one word, and two respellings**:
`penser` → `pahn-SAY` is FLAGGED and `j'y pense` → `zhee PAHNSS` is CLEAN. The
blindness is a property of the RESPELLING and not of the word, and a build that
files by word gets one of the two wrong.

### 13.4 §14.3's APOSTROPHE FIX IS LOAD-BEARING HERE, AS THE BRIEF PREDICTED

Confirmed with a measurement rather than assumed: `j'y`, `j'en`, `n'y` and `n'en`
are on **192 published rows** and on most of this lesson's own surface. The
band's boundary sees none of them. Dropped from the left, kept on the right, in
all three layers.

### 13.5 §11's THEME TABLE IS STALE FOR THIS BLOCK

It records `pronoms-essentiels` nowhere. The theme now holds **634 published
rows** after three lessons, `fr.a2.*` runs .001 to .336 with no gaps, and it is
the settled home for seq 21..23. Worth adding, because the next author in this
namespace will look for it.

---

## 14. WHAT IS NOT DONE

- **Not published.** `content:publish` is not part of a lesson build and nobody
  asked for one. Parity is clean and a publish would be safe.
- **`pnpm audio:render` not run**, and must not be. Eleven audio briefs are
  authored with the constraints that cannot be recovered later written into
  `desc`, including the two that matter most: **« Oui, j'ai. » must be read as a
  COMPLETE utterance with a falling intonation**, exactly as an English speaker
  would say it, because the whole point is that the wrong one sounds finished and
  nobody corrects it; and **the `en` in all three of the three-ens lines must be
  INDISTINGUISHABLE**, because a reader who marks the pronoun differently makes
  the exercise measure something that is not in the language.
- **One repair is in Postgres only** (`fr.b1.verbes.083`, the second `penser`
  row), outside the seed cut and deliberately not carried; it is listed in
  `REPAIRED_NOT_IN_SEED` so a later `content:parity` has the reason.
- **Ten of the fourteen broken pronoun respellings are left alone**, recorded in
  `RESPELL_LEFT_ALONE` with the reason. §4.
- **The dictée, the exam, the role play and the reference sheet were not walked
  on the device.** §9.
- **`*.md` is gitignored here.** This file needs `git add -f`.

### The seed-cut prediction, and it was wrong in one direction

a2.05 §6 asks for the prediction to be written before the measurement so the
check can fail. It failed, and that is the mechanism working:

```
predicted absent   19 of 27
measured absent    10 of 27
over-predicted      9   fr.a1.cafe.151 · fr.a1.cuisine.042 · fr.a1.cuisine.268
                        fr.a1.expressions-de-quantite.001 · fr.sons.jours-et-mois.081
                        fr.sons.verbes-essentiels.002 · .003 · .007 · .012
missed              0
```

Nothing absent went unpredicted, so no card would have drawn blank. The
over-prediction is the interesting half: **the `sons.verbes-essentiels` and
`a1.cuisine` themes are far better represented in the cut than a2.24's report
implies**, and a build that skipped the carry on that reasoning would have been
fine. The prediction was too pessimistic, not too optimistic, which is the safe
direction to be wrong in.

---

## 15. FILES

```
ealch-admin/scripts/data/y-en-corpus.ts          50 rows, the decisions, the repair table
ealch-admin/scripts/data/y-en-rows.gen.ts        recorded read of Postgres, generated
ealch-admin/scripts/data/y-en-imported.ts        the layer between the record and a screen
ealch-admin/scripts/data/y-en-terms.ts           10 terms
ealch-admin/scripts/data/y-en-lesson.ts          24 sections, 6 acts, 30 questions
ealch-admin/scripts/_a225_probe.ts               the measurement probe
ealch-admin/scripts/_a225_probe2.ts              the candidate rows and the broken-nasal sweep
ealch-admin/scripts/_a225_probe3.ts              the six-row set and the /ø/ population
ealch-admin/scripts/_a225_probe4.ts              gender and status on every import candidate
ealch-admin/scripts/_a225_probe5.ts              every authored respelling through the real function
ealch-admin/scripts/_a225_count.ts               the three rule counts on the display walk
ealch-admin/scripts/_a225_manifest.ts            regenerates the recorded read
ealch-admin/scripts/_a225_mutate.mjs             mutation wave 1, 90
ealch-admin/scripts/_a225_mutate2.mjs            mutation wave 2, 33
ealch-admin/scripts/author-y-en-batch.ts         content:y-en
ealch-admin/scripts/merge-y-en-into-seed.ts      the seed merge
ealch-v2/src/content/a2-25-y-en.test.ts          71 tests, seed-only, no source import
ealch-admin/package.json                         "content:y-en"
```

---

## 16. WHAT THE NEXT BUILD IN THIS THEME INHERITS

- **The id block: a2.25 took `.287..336`, 50 of 50. Take yours from `.337`.**
  Theme row count 584 before, 634 after.
- **`pronoms-essentiels` is settled for the whole pronoun block**, three lessons
  running, and it now holds the paradigm rows for all three.
- **The en guard shape (§8) and the classifier**, which is the hardest guard in
  the block and which the brief predicted the next author would copy.
- **The swap-based homophone check (§13.1)**, which is what corrections §5
  actually prescribes and which three lessons in this band ship differently.
- **Ten broken pronoun respellings, listed by id**, for whoever next touches
  `expressions-utiles`, `mots-de-liaison` or `expressions-argot`.
- **Multiple-pronoun order is still nobody's**, and §2 escalates it.
