# a2.19 build report — Le futur proche, seq 15

Doctrine §F, plus the four things the brief asks for by name.

`*.md` is gitignored here; this file needed `git add -f`.

---

## 0. What shipped

```
a2.19.l1   v3    24 sections, 6 acts, 30 questions, 46 items
           29 rows authored into `verbes`, fr.a2.verbes.501..529
           17 rows imported out of 5 themes, 9 read and refused
           0 respellings repaired, 4 SUPPLIED to rows that never had one
           4 drill additions
seed       version 37, 9115 items, 57 lessons, 75 units  (NOT published)
suite      3644 before, 3683 after (+39), 0 fail
tsc        clean in ealch-v2 AND ealch-admin
parity     one pre-existing divergence (b2.01.l1, database-only, in_review)
mutations  36 rows, 0 caught by nothing, 0 skipped, FIVE of them finding a
           weakness rather than confirming a strength
device     Pixel 6, twelve screens read. TWO DEFECTS FOUND, v1 → v3.
```

---

## 1. The negation rule as I worded it, verbatim

`a2.05` is told to extend this rule one lesson later and the two must match, so
here it is exactly as it ships, exported as `REFRAME` in
`scripts/data/futur-proche-corpus.ts`:

> **Wrap the verb that changed, not the one carrying the meaning.**

Eleven words. **Its first three are a1.18's first three, deliberately**, and the
batch, the merge and the test all refuse a reframe that does not open on them.
a1.18 shipped « Wrap the verb, then ask what the verb was. » in a lesson where
there was only ever one verb to wrap; this adds the half that only appears when
there are two, and it contradicts nothing.

The claim it carries, as `OWNS_CLAIM`, on the goals card, the trap's rule card
and the sheet:

> Two verbs, and only one of them gets wrapped. The two halves go round aller,
> which is the one that changed for you, and the verb carrying the meaning stays
> outside them.

And the position, as `POSITION_CLAIM`:

> Ne in front of aller, pas straight after it, and the naming form outside both.
> Nothing else in the sentence moves at all.

### What I rejected, and why

- **"Ne...pas goes around aller."** The brief's own rejection and it is right.
  True of this lesson and of nothing else, so a learner running it arrives at
  a2.05 with nothing. An A1 statement where an A2 rule was available for the same
  number of words.
- **"Negation wraps the conjugated verb, not the one carrying the meaning."**
  The brief's candidate, and the chosen one is it rewritten twice. It opens on a
  grammar noun where a1.18's opens on an instruction, and `conjugated` is the
  technical half of a pair whose plain half — `changed` — is what the rest of the
  lesson uses. a2.17 §8 measured that the house prefers the plain phrase.
- **"The second verb never moves."** True, useful, and already shipped: it is
  a2.13's reframe almost word for word. Taking it would spend this lesson's one
  carried line restating a neighbour's. **It is quoted instead**, verbatim and
  credited by id, and it is the other half of the pair: a2.13 owns what happens
  to the naming form and this lesson owns what happens to the negative.
- **"Pas goes where the ending went."** Six words, memorable, false. In « je ne
  vais pas partir » both verbs carry an ending and only one changed for the
  person, so a learner cannot check it mid-sentence.

---

## 2. The third instance of the one-form-two-jobs shape: recognition, not explanation

**It landed as recognition, and the measurement that made that possible is that
both earlier instances were already quotable.**

`WHAT_FOLLOWS` in `data/aller-venir-terms.ts` is the bare string
`what comes next decides`, exported with `WHAT_FOLLOWS_UNIT = 'a2.02'` beside it
and a comment naming a2.18, a2.19 and a2.15 as the three lessons that will quote
it. a2.18 imported both rather than retyping them and so does this file. The
brief lists this as unverified; it was verified in ten minutes.

So the trap does not explain the shape. It **asks the learner to predict it**,
which is what doctrine §B.7 asks for by the third instance:

- `s13-place` opens on `PATTERN_PREDICTION`: *"Aller has two jobs and the next
  word decides which. Before you look at the cards: what kind of word do you
  think you are looking for?"*
- `s14-twice`'s rule card is **titled with a2.02's term verbatim** and its body
  opens `PATTERN_CLAIM`: *"The third time. a2.02 called it what comes next
  decides, on venir de, and a2.18 met it again on il y a."*

**And the contrast is built out of the earlier lessons' own cards rather than out
of anything this build wrote.** a2.02 published its whole `aller` paradigm as six
sentences in one frame — « Je vais au parc. » through « Ils vont au parc. » — so
the place job arrives already respelled, in this lesson's own theme, in the same
six persons and the same order as the plan job beside it. `fr.a2.verbes.261` and
`.266` are imported for it, and a2.04's « Je vais à Paris. »
(`fr.a2.prepositions-essentielles.130`) is **the brief's exact trap sentence,
already published, already respelled**, imported rather than authored twice.

---

## 3. What a1.18 says about dropping `ne`, and whether this lesson agrees

**It says a great deal, and it is an act of that lesson rather than a footnote.**
The brief lists this as unchecked. Measured against `a1.18` as shipped:

```
grammarIntroduced   "ne-drop in colloquial spoken French, introduced for
                     RECEPTION ONLY and produced nowhere"
roundup             "In writing, both halves every time. In speech the ne very
                     often goes, and you need to hear it."
its one row         fr.a1.negation-et-restriction.068, « j'ai pas de chien »
its own drill       err-ne-dropped, with a trigger of its own
```

**This lesson agrees with it word for word and quotes the roundup line
verbatim**, guarded as a literal in all three layers so a paraphrase fails. What
it ships:

- **one receptive row**, `fr.a2.verbes.522` « Je vais pas sortir. », tagged
  `receptive`, with `flashcard` and `review` and **no `voiceflash` and no
  `dictation`**;
- its full-form pair `fr.a2.verbes.521` « Je ne vais pas sortir. » beside it, so
  the drop is a minimal pair rather than an anecdote;
- **exactly one ear question**, in round 5, whose `why` marks the answer as
  speech, refusing it in every typed answer and accept-list;
- one card in `s15-hear` making the point the construction adds: **the half that
  disappears is the half that was not doing the work.** The `pas` is still
  straight after the form of `aller` and is now carrying the whole negative.

The guards refuse it as a dictée target, a speak target, a typed answer and an
accepted answer, and the mutation harness confirms all four (rows 15, 16).

---

## 4. `dans` from a2.18: the loop is closed, and a2.18 asked for it by name

**Confirmed.** `HANDOVER['a2.19']` in `data/prepositions-temps-terms.ts` reads:

> *"dans is taught here with the present tense, which is correct on its own. The
> verb-in-front version is that lesson, and it should name this one."*

`s12-when` puts **both halves of that hand-off on one screen**:

```
fr.a2.prepositions-essentielles.172   Je pars dans dix minutes.        a2.18's
fr.a2.verbes.519                      Je vais partir dans dix minutes. this one
fr.a2.prepositions-essentielles.184   dans dix minutes                 a2.18's card
fr.a2.verbes.520                      On va manger dans une heure.     the verb-in-front
                                        version of a2.18's own « On mange dans
                                        une heure ? »
```

Both a2.18 rows are **imported, not restated**, the screen names a2.18 by id, and
every time phrase this lesson prints uses a2.18's own respelling unchanged
(`dAHⁿ dee mee-NÜT`). The guard asserts all three facts, and the mutation that
swapped a2.18's sentence for one of this lesson's was caught by the merge and the
test (row 9) — after being MISSED by both on the first run. See §8.

---

## 5. What the probe said, and what I imported against what I authored

**Twelfth build in a row to author ZERO headwords.** Corrections §2 holds again.

```
imported   17 rows, 5 themes         authored   29 rows, 1 theme
  verbes-essentiels  4                 all sentences, all fr.a2.verbes.501..529
  verbes             4                 0 headwords, 0 gendered rows
  prepositions-essentielles 3
  negation-et-restriction   4
  consonnes / muettes       2
```

The seven naming forms — `aller`, `partir`, `manger`, `travailler`, `sortir`,
`payer`, `venir` — all exist, all respelled, **and not one needed a repair**,
which is the second time in the band after a2.14. The reason is the same: six of
the seven come out of `verbes-essentiels`, `muettes` and `consonnes`, which the
sons band already went through, and the three sentence imports were respelled by
a2.02, a2.04, a2.13 and a2.18 inside this same band.

---

## 6. Every claim in the brief I measured false or unverified

Nine, and the count is inside the three-to-six band corrections §12 predicts.

**1. The identity block is RIGHT, byte for byte.** Corrections §1 predicts a swap
for all sixteen remaining units and §11 had already corrected this one. Title,
sub, canDo, prereq and `lessonIds: []` all match `content_units` exactly. It was
re-read anyway because that costs one line. **First A2 brief in the band whose
identity block needed nothing.**

**2. "Whether a2.02 shipped the one form, two jobs term" is not unverified.**
Both a2.02 and a2.18 shipped it and it is the same importable constant. Ten
minutes, not a decision.

**3. "What a1.18 says about dropping ne. Unchecked."** See §3. It is an act of
a1.18 with its own trigger, its own drill and its own row.

**4. "What a2.18 shipped for dans."** See §4. It shipped the hand-off by name and
asked for it back.

**5. "Whether a2.13 shipped its structure in a form quotable here."** It shipped
a REFRAME that is half of this lesson's rule, and its frame verb is `payer`,
which is why the back-reference is two cards with one naming form
(`fr.a2.verbes.347` « Je peux payer. » beside `fr.a2.verbes.513` « Je vais
payer. ») rather than a sentence about a neighbouring unit.

**6. "aller exists (2 rows) and a2.02 conjugates it" UNDERSTATES IT.** a2.02
published its whole paradigm as six consecutive sentences in ONE frame, respelled,
in this lesson's own theme. That is not a fact about a headword; it is the trap's
left-hand column, free.

**7. "Je vais à Paris and Je vais partir belong side by side."** The first of the
two **is already a published card**, a2.04's, one seq position back. Imported.

**8. CORRECTIONS §3 GETS ITS SECOND COUNTEREXAMPLE, IN THE OTHER POLARITY, AND
IT IS THE CENTRE OF THIS BUILD.** See §7.

**9. "One table for the full construction."** Taken, and it is three columns
because that is the measured budget. A `table` at layer `core` is a density
failure (corrections §8), so the in-flow version is a `tapTable` and the full one
is in the sheet.

---

## 7. The finding: the corpus published the negative thirteen times and respelled none of them

**The most useful measurement in this build, and it decided the shape.**

```
sentences putting ne...pas round a conjugated aller with a naming form   13
                                              ... carrying a respelling   0
eleven of the thirteen in ONE theme, negation-et-restriction
five persons, eleven different verbs, seven carrying an IPA
```

a2.18 found corrections §3's first counterexample (four published cards in one
frame). **This is the second, in the other polarity, and a2.13 §1 is the half
that holds:** a row without a respelling reaches a card the learner cannot say,
so the importable pool was not thirteen but **zero**.

So the build splits: **the paradigm is authored** — twelve rows, six affirmative
and six negative, one frame, which is the minimal-pair set the corpus lacks — and
**four of the published negatives are imported and given the respelling they
never had**, which is a2.03 §7's addition path with its one safety line (an
addition may only land on a row whose respelling is EMPTY).

Those four are the evidence that the slot takes anything: `sortir`, `venir`,
`manger`, `finir`, from a theme this lesson does not write into, five persons,
and one of them is a role-play answer. The affirmative side measures the same way:
**721 published sentences hold `aller` plus a naming form and TEN carry a
respelling.**

---

## 8. The five mutations that found a weakness rather than confirming a strength

36 mutations, 0 caught by nothing, 0 skipped, 5 with the seed layer n/a.
**Five found a real hole**, which is above the two-in-eleven rate corrections §9
records:

| # | what it broke | who missed it | the fix |
|---|---|---|---|
| 8 | gutted the a2.05 hand-off | merge and test | a2.05 was still named on the progress card, so every presence check stayed green. The hand-off is now asserted **by its own wording** in all three layers. |
| 9 | dropped a2.18's sentence off the screen that closes its loop | merge | a2.18 is named elsewhere. The screen is now asserted to hold **both halves of the pair**. |
| 12 | inverted `OWNS_CLAIM` so the halves wrap the wrong verb | merge and test | a2.16 §3 exactly: one constant rendered on three screens, so inverting it changed all three and every guard that looked for it kept finding it. The load-bearing half is now a **literal**, plus the inversion as a **negative**. |
| 14 | reworded the reframe in one section only | merge | eight sections still carried it, so a threshold guard passed. **A threshold is not a location**: the scene's closing and the Owns trap's rule are now pinned. |
| 35 | swapped the imported negative off the role-play surface | merge | the brief asks for one imported id in production and the merge never checked. |

**And one bad mutation cost a diagnosis cycle** (a2.15 §9): row 8's first seed
replacement put the guarded phrase back inside a negative frame, so the test
reported MISS while the assertion was working correctly.

---

## 9. Two guard holes this build found, both new to the band

### 9.1 A UNIT ID IN THE POSSESSIVE IS INVISIBLE TO `hasPhrase`

**Found by the second dry run.** a2.17 §3 measured that the house boundary
`(?<![\p{L}\p{N}'’-])` excludes the apostrophe and cannot see `j'ai`, and fixed
the LEFT side. **The RIGHT side has the same hole**, and it bites the thing
doctrine §B.7 asks every lesson in this band to do:

```
« a2.04's card »      does NOT match `a2.04`
« a2.13's reframe »   does NOT match `a2.13`
```

because the character after the id is an apostrophe and the house boundary counts
it as a word character. This lesson names five units and writes four of them
possessively, so a presence check built on `hasPhrase` reported four of five
absent while they were on the screen. `namesUnit()` in the batch, the merge and
the test drops the apostrophe from **both** boundaries. **Every remaining lesson
in this band credits neighbours by id and should copy it.**

### 9.2 THE HOUSE GOALS HEADING IS ITSELF A ONE-WORD FUTURE

**Found by the first dry run**, and it matters more in this lesson than anywhere
else, because this is the lesson that names the synthetic future and refuses to
conjugate it.

```
« Ce que vous saurez faire »   savoir, synthetic future, on 36 of 49 lessons
```

a2.14 §4 settled that the chrome stays and recorded the rider that binds here:
*"the FUTURE form is permitted in the goals heading and nowhere else."* This
build exempts it **by the exact string**, asserts it appears **exactly once**,
and asserts it is in the goals section's `frSub` and nowhere else. Worth knowing:
**36 lessons have been printing that tense unexplained**, and this lesson is the
first one where a learner is told it exists.

---

## 10. What a Pixel 6 found, v1 → v3

**Two defects, both invisible to every host gate, and one of them took two
attempts.** Twelve screens read.

### 10.1 The break card's own Continue, under the pager bar (ledger §7, a2.14 §9.1)

**THREE THINGS WERE OVER BUDGET AT ONCE**, which is why v1 clipped:

```
right-hand French   « Non, je ne vais pas travailler. »   31 chars, WRAPPED
right-hand gloss    « No, I am not going to work. »       27 chars (budget 24)
body                                                      33 words (budget 26)
```

a2.14 §9.1 measured the same thing and named the lever: a right-hand row carrying
an `ipa` AND a `respell` is four lines on its own, so **the French is the only
lever, and 31 characters wraps.** v2 fixed all three — the « Non, » came off
`fr.a2.verbes.524`, the gloss went to `what you meant`, the body to 23 words.

**AND v2 STILL CLIPPED**, which is the part worth recording:

> The break's `coach` and the scene's `closing` **both render on that screen**,
> and both held the reframe. Eleven words printed twice, one paragraph apart.

Two fields owned by two different objects, each correct on its own. Invariants §7
names chrome repeated on one screen as one of the four classes only a device
finds, and this is it. v3 drops the `coach`; the closing carries the rule.
`BREAK_BUDGET` in the corpus now holds all five numbers and a guard refuses any
string on the break card that equals the scene's closing.

### 10.2 A SIXTH WIDTH DEFECT, AND A FIELD NOBODY HAD MEASURED

**A reference sheet's own title is drawn in the sheet's HEADER BAR and
ellipsises there**, while rendering in full on the card that opens it. v1's was
48 characters and the header showed 38.

```
mission-row title        27 characters        a2.13, a2.14 §13
term-chip row            37 characters        a2.03 §3
tapTable header           6 at five columns   a2.16 §2
tapTable cell             6 at five, 11 at three   a2.16, a2.17 §4
reference-sheet table     3 columns           a2.04 §1
reference-sheet TITLE   ~37 characters        THIS BUILD
```

**a2.18's sheet title is 44 characters and is cut today.** House-wide rather than
mine; recorded in the ledger rather than repaired from inside this build, because
repairing a neighbour's lesson from here is how a2.16 broke a2.03.

### 10.3 And one measurement that came out BETTER than budgeted

The corpus file flagged `n'allons pas` (12 characters) as UNVERIFIED, because
a2.17 measured a three-column **tapTable** cell at eleven and nobody had measured
a **sheet table** cell. Read on glass: **twelve fits on one line**, and so does
`n'allez pas`. `SHEET_CELL_MAX` is 12 and is now a measured number rather than a
hope.

### What was read and was clean

All 24 mission titles in full, no ellipsis. The construction grid (three columns,
six rows, `partir` six times, every cell one line). The pair screen with the
affirmative directly above its negative and the `pas` visibly between `vais` and
`partir`. Both stepped trapDrills, header reading **7.2 / 24** exactly as the
ledger's sweep describes. The scene's beats, choice card and superscript nasals.
The lesson overview and its intro in full.

---

## 11. Corpus, lesson and quiz, in the doctrine's terms

**Corpus.** 29 authored rows into `verbes`, `fr.a2.verbes.501..529`, all
sentences, zero headwords, zero gendered rows. 17 imported out of 5 themes. The
form rule held: a2.01 settled that only infinitives and full sentences are corpus
items and nothing here is a bare conjugated form.

**The block held.** `fr.a2.verbes` held exactly **374** rows when a2.19 claimed
`.501`, which is the ledger's own figure after a2.15, unchanged because a2.03,
a2.16, a2.17, a2.04 and a2.18 all wrote into other themes. **403 after**, which
is 374 plus its 29 and nothing else. Nothing was inside `.501..540`.

**The seed cut.** SIX of the seventeen imports were **absent from the seed** —
`fr.sons.consonnes.098`, which is the word the paradigm prints six times, and
four of the published negatives. Corrections §10 and a2.11's finding, and without
the carry five cards draw blank.

**Lesson.** 24 sections, 6 acts `[3,5,4,4,5,3]`, 30 questions. The Owns act is
five sections and the paradigm is one, which is the doctrine §B.5 ratio.

**Quiz.** 30 questions: 15 mcq (exactly half, the cap), 8 typeIn, **6 errorSpot**,
1 listenChoose. Every question has a `why` and a `ref` that resolves. Five rounds,
each leading a **different** trigger, so all five drills are reachable.

**errorSpot is six of thirty and the brief is right about why.** `fold()` strips
accents, case, punctuation and all whitespace — but **word order survives it**,
so `jenevaismangerpas` and `jenevaispasmanger` are different strings. It is the
one production question here that no mcq could ask.

### Questions I wanted and could not write

- **A typed question on the elision in « n'allons pas ».** `fold()` strips the
  apostrophe with the rest of the punctuation, so `nallons` and `n'allons` are
  one string. It is an mcq in round 2 instead.
- **A dictée on the `je` negative**, which is the person a learner most wants to
  produce. « Je ne vais pas partir. » is 17 letters against a limit of 16, and it
  stays over for every six-letter naming form in the language. The dictée frame is
  `il` and `tu`, and this is corrections §4 costing this lesson five of its eight
  persons: **the affirmative spells letter by letter in all eight and the negative
  in three.**

---

## 12. The nasals

```
17 superscripts across the authored rows and the four supplied respellings
15 the checker can SEE
 1 it cannot:  VYAHⁿD  in fr.a2.negation-et-restriction.158
 0 false positives, on four candidates tried
```

The blind one is corrections §6's original shape — a nasal followed by a
consonant inside the token — and it is asserted **by name** in all three layers,
with the blindness itself asserted **as a negative** so the day the checker
improves this build goes red rather than carrying a dead list. The value was read
off `fr.a1.cuisine.014`, which publishes `lah VYAHⁿD`.

The false-positive path was **looked for and not met**: `samedi`, `la semaine
prochaine`, `une heure` and `la personne` were all run through the real function
and none fires. Reported as an absence, as corrections §6 asks.

---

## 13. What a2.05 inherits, and it is the whole point of this lesson

- **The rule, verbatim**, in §1. a2.05 extends it to the auxiliary: the two
  halves go round the verb that changed and the participle stays outside them
  exactly as the naming form does here. `HANDOVER['a2.05']` in the terms file
  says so and the hand-off is on a learner surface in three places.
- **The compound past is conjugated NOWHERE in this lesson**, guarded as a shape
  that requires a French subject pronoun and a participle from a list, so the
  English half of the learner surface cannot match it (a2.14 §6, a2.17 §7).
- **The one-word future is named once and conjugated nowhere**, and 206 published
  sentences already hold one. a2.05 should know that 36 lessons print `saurez` in
  their goals heading unexplained.
- **a2.17's own deferral is still open**: it teaches adverb placement for simple
  tenses only and names a2.05 for the compound rule. This lesson did not touch it.

---

## 14. Anything I could not verify

- **The audio.** Every take is briefed and no clip exists; `CLIP_MANIFEST` is
  empty by design and `pnpm audio:render` was not run. Whether the wrong-then-
  right take in `rec-a2-19-where` actually sounds inaudible-when-wrong is a
  studio question and cannot be checked from here.
- **The exam and the role play were not walked end to end on the device.** I read
  twelve screens: the overview, the mission hub in full, the scene's five beats
  and its break card, the construction grid, the pair screen, both trapDrills'
  first two steps, and the reference sheet. **The quiz, the dictée, the speak
  mission and the scenario were not opened on glass**, so the four classes only a
  device finds are unverified for those five screens.
- **`SHEET_TITLE_MAX` is 37 by inference, not by bisection.** The header cut a
  48-character title at about 38 and a 34-character one renders in full; nothing
  between 35 and 47 was tried.
- **`TrapAudioStep` still hardcodes sons.06's French line** above the audio step
  of every stepped trapDrill in the band, so this lesson's two traps are the
  sixteenth and seventeenth A2 sections telling an English-medium learner about a
  moving R that none of them teaches. It is app code, not content, and it is not
  this build's to fix.
