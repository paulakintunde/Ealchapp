# a2.14 build report — "Irréguliers 4 : savoir & connaître"

Built 2026-08-12. Trail seq 8 of 32. Doctrine §F, corrections §12, plus the five
things `A2-14-SAVOIR-CONNAITRE-PROMPT.md` asks for by name.

```
lesson      a2.14.l1 v2     28 sections · 6 acts · 36 questions · 42 items
authored    30 rows         fr.a2.verbes.381 .. .410
imported    12 rows         out of 6 themes, 0 naming forms authored
postgres    fr.a2.verbes    310 -> 340
seed        8832 -> 8865 items, 49 -> 50 lessons, version 30 UNCHANGED
suite       3261 -> 3325    (64 new, 0 fail)
mutations   25 run          0 invisible to all three layers
```

---

## 1. THE FIVE QUESTIONS THE BRIEF ASKS

### 1.1 Which reframe shipped, and the one that was rejected

**SHIPPED, and it is candidate B tightened from a statement into a test:**

> **connaître stops at a thing. savoir keeps going.**

Eight words, so it fits inside an `xl` section's 12-word cap on every string, and
it is carried verbatim across 14 sections and 20 strings. The question it turns
into is carried with it:

> Ask one question before you pick: does my sentence stop here, or does it keep
> going?

Doctrine §B.4 asks for a rule the learner can run in the half-second between
subject and verb. "Does my sentence stop here?" is answerable in that time;
"which of these is a person or a place?" is a lookup.

**REJECTED, written out because the next author needs it:**

**A, the brief's semantic candidate.** *"One is for what you know how to do, one
is for who and where you know."* It breaks inside a week, on a sentence the
learner will meet almost immediately:

```
Je sais où elle habite.        a PLACE, and it takes savoir
```

`où` is exactly the "where you know" the rule assigns to connaître, and the rule
sends the learner to the wrong verb on one of the most useful sentences in the
language. It is also eighteen words, which no card in an `xl` section can hold.

**AND THE CORPUS ALREADY PUBLISHES A, IN FRENCH, ON A CARD.**

```
fr.a2.collegues.009
« Connaître » s'utilise avec une personne ou un lieu, « savoir » avec un fait
ou une compétence.
```

That is reframe A almost word for word. It is in `READ_NOT_IMPORTED` for two
reasons: it is French metalanguage on a learner surface, which invariants §8
forbids, and it teaches the rule this build rejects. A later author who goes
looking for corpus support for the semantic version will find it, and this is
where the reason not to use it is written down.

**B verbatim.** *"connaître always takes a thing. savoir can take a whole
sentence."* Right, and it describes rather than tests: `can take` grants a
permission where the learner needs a question. It also misses half of savoir,
because `je sais nager` is followed by a bare verb and not by a sentence.

**C.** *"Two verbs, and the next word picks which."* Six words, and it states the
problem instead of solving it: a learner who has not chosen the verb has not
written the next word either.

`s11-place` is the mission the choice of reframe was made for, and the test
asserts it holds at least two lines of each verb, all of them about places. If a
later author swaps in the semantic version, that is the screen that stops making
sense.

### 1.2 The verified passing respellings, and they are not what the brief predicted

**THE BRIEF SAYS `connaissons`, `connaissez` AND `connaissent` MEET THE NASAL
VALIDATOR'S FALSE-POSITIVE PATH. MEASURED THROUGH THE REAL FUNCTION: THEY DO NOT,
AND THE MECHANISM IS THE OPPOSITE OF WHAT THE BRIEF DESCRIBES.**

```
koh-neh-SOHⁿ   koh-neh-SAY   koh-NEHS   koh-NEHTR   koh-NEH   SAV   sa-VOHⁿ
   -> not one is flagged by hasPlainNasalFor, and not one should be
```

The false-positive path needs a token ENDING in a vowel plus a plain N or M.
`koh-NEHS` ends in S and `koh-neh-SAY` in a vowel, so the path is never entered.
And if it were, `hasPlainNasalFor` checks the FRENCH for a doubled nasal on its
first real branch: `connaître` is written with `nn`, so it returns false there,
which is correct rather than lucky. The invariants list `connaissent` alongside
`viennent` and `prennent`; `viennent` genuinely is that shape and `connaissent`
is not, because its respelling has no vowel-plus-N anywhere in it.

**All six forms are asserted BY NAME anyway**, in the corpus (`ASSERTED_RESPELLINGS`),
the batch, the merge and the test — not because the checker gets them wrong, but
because a later author reading a rule about superscripts will want to "fix"
`koh-NEHS` into `koh-NEHⁿ`, and that would teach a sound the word does not
contain. Two mutations attack exactly that and both go red.

### 1.3 The circumflex decision

**CIRCUMFLEX, and it was not a judgement call.** Measured across every published
row on 2026-08-12:

```
82 rows hold a word ending in -aître      68 of those are one of the verbs
0 spell one flat
```

One spelling, no exceptions, in 27,600 published sentences. The batch, the merge,
the manifest and the test all refuse `connaitre`, `connait`, `reconnaitre`,
`reconnait`, `paraitre` and `parait`.

**AND THE FIRST MEASUREMENT OF IT WAS WRONG IN THE WAY INVARIANTS §0 SAYS IT WILL
BE.** A bare substring query reported TWO flat rows; both were `préparait`, which
contains `parait`. The manifest now carries only the boundary-aware query and
says so in a comment, because the next author will write the naive one.

**One consequence that reshaped the quiz: no typed surface can test the accent.**
`fold()` strips combining marks, so `Il connaît Paris.` and `Il connait Paris.`
are one string to `typeIn`, `errorSpot` and the dictée. A typed question turning
on it would accept the mistake and tell the learner they spelled it right. Only
`mcq` can ask, so the lesson asks exactly once, and `Il connait Paris.` is the
single flat spelling permitted on any display surface in the lesson — as that
question's wrong option. The permit is enumerated and the test checks it appears
in exactly one question and that the question is an `mcq`.

### 1.4 a2.13 did not leak savoir

**CONFIRMED, and it went further than it had to.**

Verified against the shipped `a2.13.l1` in BOTH Postgres and the seed, walking
the corrections §9 surface (`sections + sheets + terms + intro + overview`): not
one of the twelve present-tense forms of `savoir` or `connaître` appears anywhere
in it. `scripts/_a214_check.ts` §1 is the measurement.

It also reserved two rows for this lesson rather than merely avoiding them:
`savoir` and `nager` are both in a2.13's `RESERVED_FOR_NEIGHBOURS`, and a2.13
chose `arroser` as its unseen verb specifically so that `je sais nager` would
still be free. This lesson's savoir frame IS `nager`, so that reservation was
load-bearing.

**And it left this build a decision, which §1.5 answers.**

### 1.5 The house chrome, which a2.13 handed here

a2.13 §1.4 found that the standard goals heading is `Ce que vous saurez faire`
and the standard roundup heading is `Ce que vous savez faire`, that BOTH are
forms of savoir, and that it could not decide whether that counted as a collision
because a2.14 owns the verb. It replaced both with pouvoir versions to stay clear.

**THE DECISION: THE CHROME IS NOT A COLLISION, IT IS THE PAYOFF, AND THIS LESSON
SHIPS IT.**

Measured in the seed on 2026-08-12: **36 of 49 lessons head their goals with
`Ce que vous saurez faire` and 34 head their roundup with `Ce que vous savez
faire`.** A learner reaching seq 8 has read one or the other at the top or the
bottom of every lesson they have ever finished.

And `Ce que vous savez faire` **is savoir followed by a verb**: what you know how
to do. It is this lesson's own headline structure, sitting unexplained on a
screen the learner has seen thirty-four times. The roundup names it in one line,
and the last question of the exam asks what it means. That is worth more than any
card this build could have written instead, and it cost nothing.

**The future form is a different matter and is contained.** `saurez` is a tense
this lesson does not teach and must not appear to. It is permitted in EXACTLY ONE
PLACE — the goals heading, where 36 lessons already put it — and the batch, the
merge and the test each refuse every future form of savoir anywhere else,
including inside a `why` or a `note`. A mutation moves it into a term body and
goes red.

---

## 2. THE BRIEF, MEASURED

Fourteen claims checked. **Six were wrong**, and two of those would have shipped a
false statement to a learner.

| # | Claim | Verdict |
|---|---|---|
| 1 | "connaissons, connaissez and connaissent meet the false-positive path" | **FALSE, and the mechanism is inverted.** See §1.2. Not one is flagged and not one should be. |
| 2 | "`kon-NETR` closes a nasal with a plain n and the checker cannot see it" | **FALSE ON BOTH HALVES.** `connaître` is /kɔ.nɛtʁ/; the `nn` means the vowel is a plain /ɔ/ and there is no nasal to close. The checker not flagging it is the checker being RIGHT. Not imported, NOT repaired. |
| 3 | "reconnaître and paraître follow connaître exactly" | **FALSE FOR SYNTAX, which is the half this lesson teaches.** Six published sentences put `reconnaître` straight before `que`, which is the exact shape this lesson teaches the learner to reject for `connaître`. |
| 4 | "connaître never appears before que, où, quand or si in any correct sentence" | **TRUE OF THIS LESSON AND FALSE OF FRENCH.** `Je ne connais que le centre-ville.` is published three times. See §3.1. |
| 5 | "Whether the project has a convention on the circumflex" is unverified | **SETTLED, NOT OPEN.** 82 rows, one spelling, zero exceptions. |
| 6 | "a2.13 will have conjugated savoir. Read it before deciding how much paradigm you owe" | **IT DID NOT.** Zero leaks in Postgres and the seed. This lesson owes the whole paradigm from cold. |
| 7 | corrections §3, "the corpus has the forms and no minimal pairs" | **TRUE, and worse in the way a2.13 found.** 230 published sentences hold a form of one of these verbs; THREE carry a respelling and one of those carries U+203F. The importable pool of sentences is TWO. |
| 8 | "All four headwords exist. You author none of them." | **CONFIRMED.** Sixth A2 build in a row to author no naming form. |
| 9 | "listenChoose has little to do here. One item at most, or none." | **RIGHT, and for a reason the brief does not give.** See §3.3. |
| 10 | "mcq with the situation in the stem is your strongest format" | Confirmed and used. 13 of 36, 36%. |
| 11 | "errorSpot for the connaître + clause rejection" | Confirmed and doubled: two errorSpot rejections, in the singular and the plural. |
| 12 | "at least two pouvoir distractors" | Confirmed and exceeded: 9 questions involve pouvoir and 2 are answered with it. |
| 13 | the identity block | **RIGHT, for the first time in the band.** Corrections §11 had already fixed it; the probe re-confirmed it byte for byte. |
| 14 | "Baseline test count and mission range" unverified | Measured: 3261 before, and the range is discussed in §4.1. |

### 2.3 in detail, because it changed what the lesson says

The brief asks this lesson to name one of `reconnaître` / `paraître` and leave the
family principle to a2.15. That is right. What is not right is the reason it
gives: they do **not** follow connaître exactly.

```
fr.b2.recherche.151          L'auteur reconnaît QUE son raisonnement ...
fr.b2.recits-au-passe.007    Nous avons dû reconnaître QUE notre stratégie ...
fr.b2.methode-scientifique.232, fr.c1.discours-dexamen.136,
fr.c1.rhetorique.037, fr.a2.conflits-reconciliation.029
```

Six published sentences put `reconnaître` immediately before `que`. `reconnaître`
means to admit as well as to recognise, and in that sense it takes a clause —
which is the shape the learner has just been taught to reject for `connaître`, on
the previous screen.

So the family card claims its ENDINGS and nothing else, in as many words, and the
batch refuses four phrasings of the stronger claim. **a2.15 should know this
before it writes the family principle**: verbs in a family share their inflection
and do not always share their complements, and `reconnaître` is the counterexample
sitting inside its own headline set.

---

## 3. WHAT THE GUARDS FOUND

Eleven things, none of them found by reading.

### 3.1 « Je ne connais que le centre-ville. » is correct French

The brief's test spec says connaître never appears before `que`, `où`, `quand` or
`si` in a correct sentence. It is published three times:

```
fr.a2.negation-et-restriction.177   Je ne connais que le centre-ville.
fr.b1.negation-et-restriction.068   Je ne connais que le titre de ce livre.
fr.b1.negation-et-restriction.283   Elle ne connaît que les grandes lignes ...
```

`ne … que` is the restriction, not a clause opener, and the thing is still there
behind it. **THE REFRAME SURVIVES THIS AND THE BRIEF'S PROPOSED ASSERTION DOES
NOT**, which is one of the reasons the reframe is worded as it is: "stops at a
thing" is still true of `ne … que`, and "never before que" is not.

The guard is therefore **scoped to this lesson's own authored strings** and its
failure message says so, names the three rows, and tells the next author to widen
it deliberately if they are adding a `ne … que` sentence on purpose. This lesson
authors none.

### 3.2 A BLIND SPOT IN `hasPlainNasalFor` THAT NOBODY HAS RECORDED

The one finding here worth carrying into the corrections file.

Every superscript in the lesson was broken back to a plain `n`, one at a time,
and the checker was asked whether it noticed: **13 SEEN, 1 MISSED.** The one it
misses is `byaⁿ` in « Il connaît bien la ville. », and the reason is not the shape
corrections §6 describes.

`hasPlainNasalFor` runs its doubled-nasal rescue on the **WHOLE FRENCH STRING**:

```js
if (/(?:nn|mm)/i.test(fr)) return false;
```

For a WORD that is right: `connaître` has a real /n/ and its respelling may
legitimately end in one. **For a SENTENCE it is not**: one doubled nasal anywhere
in the line switches the check off for every other word in it. And `connaître` is
spelled with `nn`, so every sentence in this lesson that uses it is exempt.

It only bites where the respelling puts a bare vowel letter before the n, because
`hasPlainNasal`'s own list (`AH OH EH UH EU AI OU`) catches the rest on the first
branch before the French is ever consulted. `SOHⁿ` is seen; `byaⁿ` is not.

The proof is one pair, identical but for the doubled n:

```
Il sait bien nager.        eel SEH byan nah-ZHAY        SEEN
Il connaît bien la ville.  eel koh-NEH byan la VEEL     MISSED
```

`scripts/_a214_blindspot.ts` isolates it. **a2.13 is not exposed**: it uses the
same bare-vowel spellings (`PAⁿ`, `MAⁿ`, `zhar-DAⁿ`) and not one of its French
strings contains a doubled nasal. This is the first lesson in the band whose
headline verb is spelled with `nn`, which is why it is the first to meet it.

**THIS IS WIDER THAN CORRECTIONS §6**, which records the blind spot as a nasal
followed by a consonant inside the TOKEN. That shape is a property of the
respelling. This one is a property of the FRENCH and it applies to the whole line.
Both are real and neither implies the other. `fr.a2.verbes.401` is asserted by
name in the corpus, the batch, the merge and the test, and the blindness itself is
asserted as a negative so the day the checker improves this goes red rather than
carrying a dead by-name list.

### 3.3 The false-positive path is met once, and correctly not flagged

Corrections §6 asks every build to look for the other blind spot — a real /n/ the
checker reads as an unmarked nasal — and to report the absence if it finds none.
**This build found one.**

```
la voisine   vwah-ZEEN   ends in a vowel plus N at a token boundary,
                         which is exactly what flagged jaune and scène
```

It is NOT flagged, and the reason is worth recording: `hasPlainNasalFor`'s last
line checks the FRENCH for a vowel after the n, and `voisine` has `ine`. The
rescue added for `aime` and `dame` is doing its job on a word nobody had in mind
when they wrote it. The masculine `le voisin` IS flagged, correctly, which is why
this lesson prints the feminine — and the test asserts both directions, so a
checker that had simply stopped working would not pass.

### 3.4 THIRTEEN ITEMS IN `itemIds` DRAWN BY NOTHING

The a1.08 defect, which shipped forty-three of them. a2.13 shipped one before its
guard caught it. This build had **thirteen** on the first run of the same guard:
four authored rows and all nine imported ones.

The cause is a real distinction rather than an oversight. A section that prints
`fr: fr(id)` puts the SENTENCE on the screen; it does not put the ROW on it. Only
`itemId`-carrying surfaces do — `groupDrill` items, `practice`/`dictation`
`itemIds`, drill items and term examples. Three sections were display-only.

**The fix is a better lesson, not a smaller one.** `s13-things`, `s14-evidence`
and `s16-pouvoir` were converted from `cardDeck`/`examples` to `groupDrill`, which
gave each of them a scored check the learner has to answer, and two more groups
were added to `s06-savoir` and `s07-second-verb` so the naming forms and the
connaître frame reach a card. The lesson gained six checks and lost nothing.

### 3.5 THE SHEET'S RESPELLINGS AND THE CARDS WERE TWO INDEPENDENT COPIES

a2.13 §6.2 in the respelling dimension, and it cost this build a mutation.

The sheet's `sheet-say` table renders from `PARADIGM.respells` and the cards
render from the authored rows' own `respell` fields. Twelve values, twice, and
nothing compared them. "Correct" one of the sheet's respellings and the learner
reads one pronunciation and is scored on another, with every other gate green —
exactly the shape that let `veulent` become `voulent` on a2.13's grid.

Found by two mutations that were caught by the batch and the merge and **missed by
the test**, which is the definition of a hole in the test. There is now an
assertion comparing the sheet row by row to the card the learner is scored on.

### 3.6 The elision in `qu'elle` made a guard fire on correct content

The reframe guard walks the word after each verb and compares it against a set of
clause openers. `que` elides onto a following vowel and arrives as ONE token —
`qu'elle`, `qu'il`, `qu'on` — so a set-membership test reports the commonest
shape in the lesson as "not a clause" and would let a real connaître-plus-clause
sentence through. Found by the guard firing on `fr.a2.verbes.408`, which is
correct savoir-plus-clause. The check is now a predicate, not a lookup.

### 3.7 A SECTION ID CONTAINING `connaitre` TRIPPED THE CIRCUMFLEX GUARD

Section ids are ASCII, and `s07-connaitre` contains a flat spelling. The guard
read it, along with `err-connaitre-clause` and the two `accept` entries that
deliberately carry the flat form because `fold()` cannot tell them apart.

Two fixes rather than one exemption: the guard walks DISPLAY strings and skips
machine keys (`id`, `ref`, `accept`, `targets`, `detectOn`), and the two
identifiers were renamed to `s07-second-verb` and `err-clause-after-it` so no id
in the lesson contains a spelling any guard is looking for. A guard with an
exception list nobody can reason about is worse than a rename.

### 3.8 The dictée has an asymmetry and it cannot be fixed

`connaissons` is eleven letters before anything follows it. Measured through the
real `dicteeMode` against every object tried:

```
Nous connaissons Paris.   20      Nous connaissons Rome.   19
Vous connaissez Paris.    19      Ils connaissent Rome.    18
Nous connaissons Marie.   20      Nous connaissons ce film. 21
```

There is no object short enough. **The connaître plural cannot be dictated in
this app at any object length.** The savoir column spells from LETTERS in all six
cells on `nager`; the connaître column manages three of six on anything at all.

The dictée is ten targets built around that rather than pretending otherwise, and
the ABSENCE is asserted: a later author who "adds the missing cells" gets a
failure that explains why they are missing.

### 3.9 Five density failures and a clustered answer key

Five bodies ran past the 45-word core limit and 57% of the closed questions had
their correct answer in position 1, against a 40% ceiling. Both were caught by
`validateDensity` in the batch. Trimmed and redistributed to 21/36/21/21.

### 3.10 A term body tripped its own guard, and the version moved

`theFamily` said *"Do not assume it BEHAVES LIKE CONNAÎTRE in that respect,
because it does not."* Correct content. The guard that stops a later author making
the opposite claim is a substring check, so it fired on the negation.

The sentence is reworded and the guard keeps its teeth. **The lesson went to v2
for it rather than being corrected under v1**, which is the ledger §10 rule: two
different bodies under one number is the drift this project has lost work to
twice, and the batch refuses it by comparing `canonicalJson`.

### 3.11 `nager` was released an act before it was drawn

The act-2 tranche released the savoir frame verb while the ROW is first drawn in
`s10-skill`, in act 3. Act 2's cards carry `nager` inside their sentences, which
is not the same thing as putting the card in front of the learner. Moved.

---

## 4. THE DESIGN, AND WHY IT IS THE SHAPE IT IS

### 4.1 Twenty-eight sections, and the weight is on the choice

```
act1  3   One word in English, two in French
act2  4   Two verbs, twelve cells              <- the SMALLEST paradigm act in batch 1
act3  8   What comes next decides              <- the Owns, heaviest ALONE
act4  5   The third verb, and the one that does not exist
act5  5   Out loud                             <- more production than any other batch-1 lesson
act6  3   Prove it
```

Thirteen missions on the choice against four on the forms. Doctrine §B.5: if the
paradigm act outweighs the Owns, this is a reference document with pictures, and
twelve cells is not worth a lesson.

Twenty-eight is past the doctrine's 19-to-24 range at the section level and the
reason is in the brief: *"Because there are only two paradigms, you have room for
more production than any other lesson in batch 1. Use it. scenario, groupDrill,
and a dictée."* All three are there, plus the speak deck and the review deck. It
is four sections smaller than a2.13 and nine questions lighter.

### 4.2 TWO FRAMES, WHICH IS THE ONE PLACE THIS LESSON REFUSES a2.13'S BEST IDEA

a2.13 got all eighteen of its cells onto `payer`, and that was its single best
decision: the claim was that the back of the sentence never moves, so putting
every cell on one frame made the claim visible.

**Copying it here would delete the lesson.** The complement IS what is being
taught. savoir takes a verb or a clause; connaître takes a thing; a shared frame
erases the only difference the grid exists to show.

```
savoir     + nager     je sais nager      6/6 cells spell from LETTERS
connaître  + Paris     je connais Paris   3/6, and no object does better
```

Both frames were chosen through the real `dicteeMode`. `nager` was RESERVED FOR
THIS LESSON BY a2.13. `Paris` is a name, carries no gender — so it cannot join
a1.03's ending population — is respelled, and already carries a `dictation` drill.

The batch asserts the inverse of a2.13's check: each column uses exactly one
frame, each row ENDS on it, and the two frames must differ. A mutation that gives
both verbs `nager` goes red on all three layers.

### 4.3 What the singular costs, which is one line

Both verbs do what a2.13 named on all three of its own: three persons, two
spellings, one sound. `sais/sais/sait` and `connais/connais/connaît`.

a2.13 spent a whole `listening` mission establishing it. This lesson pays it one
line and a pointer, because re-deriving a neighbour's finding is how nine
consecutive paradigm lessons decay into one document. Doctrine §B.7: pointing at
the repeat is the teaching.

### 4.4 The ear, used once

`sais/sait` and `connais/connaît` are each ONE SOUND, so no `listenChoose` may
offer two members of one group: the question would have no correct answer and
marking one right certifies a bug. Enforced by a `HOMOPHONE_FORMS` list rather
than by a sentence in this report, because a sentence cannot fail.

The lesson ships **exactly one** `listenChoose` and it is `Je sais nager.` against
`Je peux nager.` — genuinely different sounds, and it tests the trap rather than
padding the format mix. The brief says "one item at most, or none"; one is the
right answer and this is the one.

`s15-listening` does the opposite thing, which is the only other correct use of
the ear here: it proves the singular CANNOT be separated, and asks what the
learner used instead.

### 4.5 Production, which is what the extra room bought

```
s21-scenario   five turns, and every one requires the choice before speaking
s22-build      three groups, English prompts, no French given
s23-dictation  ten targets, all LETTERS
s24-speak      21 mic-scored sentences
s25-review     18 cards
```

Plus 14 `typeIn` and 5 `errorSpot` in the exam. `practice` with `skill: 'write'`
draws no writing surface, so none is authored; the surfaces that make a learner
produce here are `typeIn`, `errorSpot`, the groupDrill checks and the dictée.

---

## 5. MUTATION TESTING

**Twenty-five mutations, each run against all three layers separately.** The test
column is fed by `_a214_force.ts`, which writes the mutated lesson into the seed
with no guards at all; otherwise a mutation caught by the batch never reaches the
test and a blind test looks fine.

The four the brief asks for by name are all there: separate the contrast (two
ways), drop the pouvoir distractors, "correct" the respellings (three ways), and
add a connaître + clause sentence outside the errorSpot.

### 5.1 The first run found seven test-blind mutations, and five were real

`0 CAUGHT BY NOTHING` on the first run, and **7 invisible to the TEST alone**,
which is the figure that matters. Diagnosed one at a time:

| Mutation | Why the test missed it | Outcome |
|---|---|---|
| savoir taking a bare name | the reframe assertion only checked connaître before a clause, not savoir before a name | **REAL HOLE.** Assertion widened. |
| "correct" connaissent | the mutation edits `PARADIGM.respells`, which reaches the seed only through the sheet; the test read the CARDS | **REAL HOLE.** §3.5. |
| "correct" connaissons | same | **REAL HOLE.** §3.5. |
| claim reconnaître follows connaître exactly | the guard read the SECTION and the mutation was in the TERM | **REAL HOLE.** Guard widened to terms. |
| drop the pouvoir distractors | nine questions mention pouvoir, so changing one ANSWER left the count at eight | **REAL HOLE.** Now counts pouvoir as the correct ANSWER, not as a mention. |
| stop naming a2.13 | the section names it in three places; changing one left the claim true | **BAD MUTATION.** The test was right. Strengthened to strip all three. |
| homophone in listenChoose | it offered `Je sais nager.` against `Il sait nager.`, which is LEGAL because the pronouns differ | **BAD MUTATION.** The test was right, per corrections §5. Strengthened to differ only by the verb. |

Five real holes in a test file that was already written against a brief that
named four of them. That is the measured value of running the harness rather than
reasoning about coverage: **corrections §9 predicts one or two per build and this
one found five.**

### 5.2 A harness fact worth carrying forward

**ONCE THE LESSON HAS BEEN APPLIED, THE BATCH COLUMN GOES PARTLY UNINFORMATIVE.**

The batch compares the source against the stored body through `canonicalJson` and
refuses equal versions with different content. So after the first apply, EVERY
content mutation trips the version check, and four of them were reported as
"batch caught" with that message rather than on their merits. The batch was doing
its job; it just was not the guard being tested.

Reading a "caught" as evidence of the guard you meant to test is a mistake this
harness makes easy. The fix is to read the failure MESSAGE, not the column, which
is why the harness prints the first line of it.

### 5.2b The second run found two more, and both were the mutation's fault

```
25 mutations run   caught by all three 17   by two 6   by one 2
CAUGHT BY NOTHING  0
invisible to the TEST alone  2
```

Both were insufficient mutations rather than holes, and diagnosing them is the
useful part:

- **drop the pouvoir distractors.** The tightened assertion was a FLOOR of two
  and three questions are answered with a pouvoir form, so dropping to two still
  cleared it. Changed to an exact figure: three is the shape of the three-way
  choice here (permission, the impersonal `on`, and the sentence holding both
  verbs) and a quiet drop to two is what this guards against. Invariants §6 on
  when a hardcoded count is the right thing.
- **stop naming a2.13.** The section names it in FOUR places — the title, the
  `say`, a group label and a check `q` — and the mutation covered three. The
  fourth left the claim true and the test was right to pass again.

### 5.3 The third run

```
25 mutations run, 0 skipped
caught by all three : 18
caught by two       : 7
caught by one       : 0
CAUGHT BY NOTHING   : 0
invisible to the TEST alone: 0
```

Nothing is caught by one layer alone, which means no guard in this build is
load-bearing on its own. The seven caught by two are all caught by the batch and
the test with the merge missing them, and the merge is the layer that deliberately
does not re-check quiz internals.

---

## 6. WHAT IS NOT DONE

**NO DEVICE PASS.** `adb devices` returns nothing on this machine, so there is no
phone attached. The host half is complete and every gate is green, and none of
that is glass. Untested on a device:

- **the 28-section spine**, and whether act 3's eight missions read as a stretch
- **the two-column grid** in `s04-grid`, which is the brief's layout claim and the
  one thing on this list most likely to be wrong: six lines each carrying two
  verbs and two complements is a wide row on a Pixel 6, and `examples` is not in
  `ownsLayout()`
- **`s05-situations`**, a five-row tapTable, which renders inside a scrolling page
- **the scene break card**, which took a2.01 three device passes to settle
- **the 36-question quiz** across six rounds
- `s17-three`, a four-step stepped trapDrill
- the six new groupDrill checks added in §3.4

**What the host half DID verify.** Metro served the entry bundle (200, 23.9 MB)
and it was grepped for every string this build adds and for the strings it must
not contain:

```
present     a2.14.l1 · the reframe · both impossible sentences · koh-neh-SOHⁿ
            koh-NEHS · byaⁿ · Ce que vous savez faire · s04-grid · s17-three
            sheet.a2.14.choice · reconnaître
absent      j'ai connu · j'ai su · Je connais que
```

Plus: every section type used has a `case` in the renderer (18 of 18), the whole
suite is green with the lesson in the seed, and `content:parity` reports one
pre-existing divergence (`b2.01.l1`, database-only) and says nothing in the seed
is at risk.

**One fragility the grep turned up.** The bundle holds 21 occurrences of the flat
string `connaitre`, and every one is the term KEY `connaitreReach`. It is a
machine identifier that reaches no screen, and the circumflex guard correctly does
not fire on it — but only because the next character is a capital `R`, which the
case-insensitive `[a-zà-ÿ]` lookahead treats as a letter. Rename that key to
`connaitre_reach` and the guard would fire on correct content. It is not worth a
version bump to rename a key nobody renders, and the next author should know the
guard is one character away from a false positive. Ledger §6 is the general
version of this.

**Nothing has been published.** `seed.version` is 30 and untouched. Note that
a2.13's report records it as 29; a publish landed between the two builds
(`399b04a chore(publish): snapshot v30`), so 30 is the correct figure now.

Open and not blocking:

- **the `hasPlainNasalFor` sentence-level blind spot (§3.2)**, which belongs in
  `A2-BRIEF-CORRECTIONS.md` §6 and is not this build's to add
- **the reconnaître complement finding (§2.3)**, which a2.15 needs before it
  writes the family principle
- the /ø œ/ divergence between invariants §3 and the corpus, raised by a2.13 and
  still unresolved. This lesson does not print the sound and does not touch it.
- `fr.sons.expressions-utiles.228` (`on ne sait jamais`) respells a nasal with a
  plain n and IS flagged. Not repaired, because this build does not display it;
  recorded in `NOT_REPAIRED` with the value it needs.

---

## 7. FILES

```
scripts/data/savoir-connaitre-corpus.ts     SSOT: 30 rows, every claim, every refusal
scripts/data/savoir-connaitre-imported.ts   the layer between the manifest and a screen
scripts/data/savoir-connaitre-rows.gen.ts   GENERATED by _a214_manifest.ts
scripts/data/savoir-connaitre-terms.ts      12 terms, the reframe, the derived claims
scripts/data/savoir-connaitre-lesson.ts     28 sections, 6 acts, the sheet, the audio
scripts/author-savoir-connaitre-batch.ts    content:savoir-connaitre
scripts/merge-savoir-connaitre-into-seed.ts
ealch-v2/src/content/a2-14-savoir-connaitre.test.ts   64 tests, reads the seed only

measurement, not part of the build:
scripts/_a214_probe.ts       the corpus, the unit, the id block
scripts/_a214_check.ts       the a2.13 leak, the respellings, dicteeMode, fold, the chrome
scripts/_a214_pick.ts        frame selection and import candidates
scripts/_a214_blindspot.ts   the hasPlainNasalFor finding, isolated
scripts/_a214_spread.ts      the quiz answer distribution
scripts/_a214_flat.ts        the circumflex, and the substring trap in it
scripts/_a214_manifest.ts _a214_force.ts _a214_mutate.mjs
```

---

## 8. WHAT a2.15 SHOULD KNOW

It is seq 9 and the next lesson, and three things here are addressed to it.

1. **`reconnaître` is named once, for its endings only.** The family principle is
   yours. §2.3 is the finding that should shape it: verbs in a family share their
   inflection and do NOT always share their complements, and `reconnaître` is the
   counterexample inside your own headline set.
2. **`paraître`, `apparaître`, `disparaître` and `naître` are named nowhere** in
   this lesson, deliberately, and the batch refuses them. They are free.
3. **You are the first A2 lesson that must author its own infinitives** —
   `battre`, `combattre` and `remettre` are the six absences corrections §2 lists.
   Everything this lesson wanted already existed.

And one that is not about a2.15: **a2.14 is a LEAF.** No unit at any level
declares it as a prerequisite, measured 2026-08-12. a2.15 rests on a2.02. The
batch reports that rather than failing on it, the way a2.12 had to.
