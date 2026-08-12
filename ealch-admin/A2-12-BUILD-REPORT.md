# a2.12 build report — "Irréguliers 2 : faire, dire, lire"

Trail seq 6, batch 1. Built 2026-08-12. Applied to Postgres and merged into
`seed.json`; **not published**.

`*.md` is gitignored here. `git add -f` this file.

---

## 0. What shipped

```
lesson    a2.12.l1  v2   24 missions, 6 acts, 51 items, 1 reference sheet
corpus    25 authored rows, fr.a2.verbes.301 .. .325
            18 paradigm sentences  (faire · dire · lire, six cells each)
             7 expressions the corpus does not have anywhere
imports   26 rows by id, out of FIFTEEN themes
            3 naming forms + 23 expressions
repairs    2 respellings, both on imported rows
drills     3 rows gain `flashcard`, nothing else moves
quiz      30 questions, 5 rounds, 13 mcq / 13 typed / 2 listenChoose /
          1 tapSilent / 1 speak
dictée    10 targets, every one LETTERS mode
tests     3135 before → 3195 after (+60), 0 fail
tsc       ealch-v2 clean, ealch-admin clean
parity    1 pre-existing divergence (b2.01.l1, database-only, in_review)
```

The Owns is the **reach of `faire`**: thirty everyday expressions, grouped by the
English verb French refuses to use. Act 3 holds six missions against the
paradigm act's four, and 18 of the 30 quiz questions touch an expression.

---

## 1. Every claim in the brief I measured false

Eight, which is above the three-to-six rate the corrections file predicts. Two of
them would have cost the build.

### 1.1 "`lire` 5 rows `fr.sons.verbes-essentiels.*`" and the same for `écrire`

**NOT ONE** of the five `lire` rows is in `verbes-essentiels`, and nor is any of
the five `écrire` rows. Measured against Postgres:

```
lire     fr.a1.dictee.091 · fr.a1.ecole.048 (gender=m) · fr.a1.rp-loisirs.041 ·
         fr.a1.rp-travail-etudes.040 · fr.a1.verbes-du-quotidien.112
écrire   fr.a1.dictee.090 · fr.a1.ecole.049 (gender=m) ·
         fr.a1.rp-travail-etudes.039 · fr.a1.verbes-du-quotidien.113 ·
         fr.sons.consonnes.110
```

`faire` and `dire` **are** there, at `.004` and `.005`, which is almost certainly
where the pattern came from. The half that holds is the important half: all four
exist and this lesson authors none of them.

### 1.2 "The `faire` expressions are a phrase set, not headwords. Probe them as `--tokens`, not `--words`." (marked SETTLED)

**This is the claim that would have cost the build.** Twenty-three of the
forty-eight candidates I probed exist as full ITEM rows, published, most with a
respelling and a `flashcard` drill. `faire la queue` has TEN.

And a `--tokens` probe is precisely the probe that hides them, because it reports
SENTENCE evidence: **`faire la cuisine` returns `pg=0` there** while
`fr.a1.famille.136` has held it as a published phrase all along. Following the
brief would have authored twenty-three duplicate rows and the flashcard hub would
have served every one of those expressions twice.

### 1.3 "`tapTable` is the workhorse here... Thirty expressions is exactly the shape `tapTable` was built for"

Half right, and the other half would have shipped a screen nobody can use.
`tapTable` is **not** in `ownsLayout()` (`LessonPager.tsx:162`) so it renders
inside a scrolling page, and `A2-BRIEF-CORRECTIONS` §8 puts the measured ceiling
at **six rows on a Pixel 6**. Thirty rows is five screens of scroll with no
checkpoint in it.

So the tapTable holds the **six groups**, one per English verb, with the
expressions behind each row in its detail. That is also the better teaching: a
learner who reads thirty rows has a word list, a learner who reads six has the
rule. The thirty reach screens through four `groupDrill`s, which **do** own their
layout, and the full thirty-row table lives in the reference sheet at layer
`deep`, which is a scrolling page the learner opened on purpose.

### 1.4 "The `sub` says thirty and the Den advertises it"

It does not. The database `sub` is `Irréguliers 2 : faire, dire, lire` and holds
no number, and neither does the `canDo`. The `2` is this unit's place in the
irregular-verbs series. **Nothing in the product advertises a count**, so nothing
had to be padded to meet one. Thirty is this build's own target and it was
assembled rather than padded. The batch asserts the `sub` still carries no count,
so if one ever appears the two have to be reconciled.

### 1.5 "`font` and `disent` both need checking against §3 of the invariants"

Neither is a blind spot and **one of them has no nasal at all**. `ils disent` is
/diz/ — an oral vowel and a real /z/, respelled `DEEZ`, with nothing to miss.
`ils font` is /fɔ̃/, respelled `FOHⁿ`, and the checker **sees** the broken form.

Measured the way a2.11 measured it: every superscript broken back to a plain `n`,
one at a time. **Eleven superscripts, eleven seen, zero blind.** This is the first
lesson in the band with no blind nasal, and the reason is structural: every nasal
here ends a space- or hyphen-delimited token, which is exactly the shape
`hasPlainNasalFor` can reach.

### 1.6 "Whether shopping vocabulary exists yet at all: `a2.26` is seq 25 and unbuilt, so `faire les courses` may have no noun to borrow." (UNVERIFIED)

The `courses` theme exists and holds `faire les courses` outright, at
`fr.a2.courses.018` with the respelling `FEHR lay KOORS`. A unit having no lesson
says nothing about whether its theme has rows.

### 1.7 The brief's own nine expressions include `faire un voyage`

It does not exist. Zero as an item and zero inside a published sentence, across
20,233 non-sentence rows and 27,552 sentences. Nor do `faire des progrès`,
`faire une erreur`, `faire de la musique`, `faire les valises`, `faire semblant`
or `faire plaisir`. Those seven are the only rows this lesson authored beyond its
paradigm.

### 1.8 "importing the gendered `lire` row moves a1.03's printed figures"

Sound as a habit and **not true here**. Run through the real `endingPopulation`,
`fr.a1.ecole.048` does **not** join: the population admits gendered single-word
NOUNS and an infinitive is not one. The same holds for the two gendered
`il fait <adjective>` rows in `meteo` (`.037`, `.039`) that invariants §5 calls
radioactive — three words each, so they are safe. Measured for all 51 rows this
build writes or carries: **0 joiners**. The ungendered `lire` row is imported
anyway, because a `gender` on an infinitive is wrong about the language whatever
the test does.

### And one thing in `A2-BRIEF-CORRECTIONS` that needed adapting rather than copying

§9 says to copy a2.02's shapes. Two of them are **wrong for this lesson** and
copying them verbatim would have failed the build for true statements:

- **a2.02's number-pair guard requires the singular to be nasal and the plural
  oral.** True of `venir`; false of all three verbs here. `faire` is the other
  way round (`FEH` against `FOHⁿ`) and `dire` and `lire` have no nasal on either
  side. My guard asserts what is actually claimed on the screen: the pronoun is
  identical, the verb differs, and nothing else moves.
- **a2.02's batch DIES when no unit declares it a prerequisite**, because the
  brief calls it the hinge of batch 1. **a2.12 is a leaf**: measured, no unit at
  any level rests on it, and a2.13, a2.14 and a2.15 all rest on a2.02. That is
  reported rather than fatal, so the day something does depend on it the line
  changes and somebody sees it.

---

## 2. The Owns, and how thirty expressions avoided being a vocabulary list

**By grouping them on the English verb rather than on the topic.**
`faire la vaisselle` sits beside `faire les courses` because both are *do*, not
because both happen in a house. The six groups are the Owns as data
(`REACH` in the corpus) and every screen reads them:

```
English reaches for      French says                  n
do                       faire, and then the job      5
make                     faire, and then the thing    5
go, or play              faire du, de la, des         5
take, or go for          faire, and then the outing   3
be                       il fait, and then how it is  5
a verb of its very own   faire, and then one word     7
```

Three things follow from the grouping and none of them would work on a topic
list:

1. **The tapTable is six rows, not thirty.** The row is the rule; the list is one
   tap behind it.
2. **The reframe is a production rule.** *French keeps faire where English
   reaches for a different verb every time.* Twelve words, which is the ceiling,
   and it runs in the direction a speaker moves: the learner is at the point of
   changing verb and it says do not.
3. **The paradigm is not a detour.** The `faire` cells run on `le lit`, which is
   `faire le lit` — one of the thirty. Act 2 conjugates the Owns.

Rejected reframes, recorded in `faire-dire-lire-terms.ts`:

- *"faire means to do or to make"* — the brief's own rejection and it is right.
  It is the translation the learner already has and the reason they cannot
  produce one of the thirty.
- *"French does with faire what English does with a different verb each time"* —
  the brief's candidate. Thirteen words, over the ceiling, and a **description**
  rather than an instruction.
- *"Where English changes the verb, French changes what comes after it"* — sharp,
  and rejected because it is a2.02's pattern name in different clothes. That unit
  shipped `what comes next decides` and this lesson quotes it for a different
  job; two near-identical phrases meaning two different things on one trail is
  worse than either.

### Mission counts

```
act 1  the verb you already had        3    scene · goals · cardDeck
act 2  three verbs, three surprises    4    naming forms · grid · THE vous ROW · ear
act 3  everything faire does           6    cardDeck · tapTable · 4 groupDrills
act 4  the ending you expect           3    trapDrill · commonErrors · boundaries
act 5  out in the world                4    speak · dictée · scenario · reading
act 6  prove it                        4    review · progress · quiz · roundup
```

**Six on the Owns against four on the paradigm**, and act 4's trap only exists
because the expressions have to be usable. The batch, the merge and the test all
assert the inequality.

---

## 3. Did `lire` earn its place, or is it carried by the unit title?

**It earned it, and the argument is arithmetic rather than prose.**

`BREAKS` in the corpus is derived: every cell at `vous` or `ils` whose form does
not end in the ending a2.01 taught. It is exactly three — `faites`, `dites`,
`font` — and `CONTROL_BREAKS`, the subset belonging to `lire`, is **empty**. If
it ever stops being empty the constant fills, the build stops before any prose is
read, and `lire` has become a third trap instead of the measuring stick.

The measurement also **corrects the brief**. It gives three shapes and implies
`dire` is irregular throughout. It is not: **`ils disent` ends in `-ent`** like
every regular plural in the language. So `faire` breaks at both cells and `dire`
breaks at one, and the lesson says so.

That is what makes the control worth a third of the paradigm act. Without it,
*irregular* reads as a warning about the whole language; with it, it is a short
list you can finish. Which is the other reason the verb is here:

**Two closed clubs finish in this lesson.**

```
vous, -tes    vous êtes · vous faites · vous dites          a1.06 + here ×2
ils, -ont     ils sont · ils ont · ils vont · ils font      a1.06 a1.07 a2.02 + here
```

Both are genuinely closed in the present tense, the learner already held three of
the seven members, and this is where each set is completed. Every member carries
the unit id where it was met, measured against `content_units`, and the counts in
the prose are derived from the arrays. That is a much stronger thing to tell
somebody than "here are three more irregular verbs".

---

## 4. Every id imported, and from which theme

Twenty-six rows out of **fifteen themes**, against a2.02's ten out of three. Not
sprawl: the reach of `faire` **is** the list of themes. The corpus filed
`faire le ménage` under routines, `faire du ski` under sports, `il fait beau`
under meteo and `faire la queue` under tourism, each time because of the noun.
Putting them back together is the lesson.

```
NAMING FORMS
  faire                  fr.sons.verbes-essentiels.004    verbes-essentiels
  dire                   fr.sons.verbes-essentiels.005    verbes-essentiels
  lire                   fr.a1.dictee.091                 dictee            +flashcard

do
  faire les courses      fr.a2.courses.018                courses
  faire le ménage        fr.a1.routines.030               routines
  faire la vaisselle     fr.a1.routines.031               routines
  faire la lessive       fr.a1.routines.032               routines
  faire ses devoirs      fr.a1.ecole.106                  ecole
make
  faire le lit           fr.a1.maison.122                 maison
  faire du bruit         fr.b1.voisinage.062              voisinage
  faire un effort        fr.b2.rp-achats.004              rp-achats         no respell
  faire des progrès      fr.a2.verbes.319                 AUTHORED
  faire une erreur       fr.a2.verbes.320                 AUTHORED
go
  faire du sport         fr.b1.bien-etre.035              bien-etre
  faire du vélo          fr.a1.sports-et-loisirs.109      sports-et-loisirs
  faire du ski           fr.a1.sports-et-loisirs.074      sports-et-loisirs
  faire de la natation   fr.a1.sports-et-loisirs.073      sports-et-loisirs REPAIRED
  faire de la musique    fr.a2.verbes.321                 AUTHORED
take
  faire une promenade    fr.a1.animaux-domestiques.123    animaux-...       REPAIRED
  faire un voyage        fr.a2.verbes.322                 AUTHORED
  faire les valises      fr.a2.verbes.323                 AUTHORED
be   (all five are a1.10's)
  il fait beau           fr.a1.meteo.027                  meteo
  il fait chaud          fr.a1.meteo.029                  meteo
  il fait froid          fr.a1.meteo.028                  meteo
  il fait frais          fr.a1.meteo.039                  meteo   kind=word g=m
  il fait mauvais        fr.a1.meteo.037                  meteo   kind=word g=m
own
  faire la cuisine       fr.a1.famille.136                famille  +flashcard, no respell
  faire la queue         fr.b1.tourisme.039               tourisme
  faire la fête          fr.a1.amis.026                   amis
  faire la sieste        fr.a1.routines.043               routines
  faire attention        fr.a1.dictee.122                 dictee   +flashcard, no respell
  faire semblant         fr.a2.verbes.324                 AUTHORED
  faire plaisir          fr.a2.verbes.325                 AUTHORED
```

**Read and refused, so the decision was taken with the row in front of it:**

```
écrire                   fr.a1.dictee.090     the fourth headword the brief probes.
                                              The unit names three verbs; a fourth
                                              paradigm would give the paradigm act
                                              more weight than the Owns.
faire son lit            fr.a1.routines.050   respelled FEHR sohn LEE, which the
                                              checker FLAGS and which is genuinely
                                              wrong. Not repaired: this lesson does
                                              not display it. Recorded so it is
                                              findable.
faire la queue           fr.b1.courses.023    `fair lah kuh`, no stressed syllable.
                                              The tourisme row has one.
```

Five levels appear in the imports (`sons`, `a1`, `a2`, `b1`, `b2`) and that is
correct: a row's level is a fact about where it was authored, not about who may
reference it. All 25 authored rows are `level: 'a2'`.

---

## 5. Row count, and the id block

`fr.a2.verbes.301 .. .340`, from the batch-1 ledger. The block was **empty** when
claimed, checked by selecting the range rather than by reading the maximum — the
maximum has been useless since a2.10.l2 took `.461..500`.

```
255 rows   when the block was claimed  (ledger: 226 after a2.11, + a2.02's 29)
280 rows   after this apply            (255 + exactly 25, nothing else landed)
```

The batch now asserts the count against `ROW_COUNT_BEFORE = 255` and refuses
anything that is not that or that plus its own 25, so a concurrent lesson landing
*below* the top of a block fails loudly rather than being invisible.

---

## 6. Corpus: authored versus imported, and the form rule

**25 authored, all into `verbes`, all `level: 'a2'`, none carrying `gender`.**

- 18 **sentences**: three paradigms, six cells each, one frame per verb.
- 7 **phrases**: the expressions that exist nowhere. `kind: 'phrase'` matches
  every one of the 23 imported expressions, so the two classes are not split on
  the same screen.

Frames, and why they are what they are:

```
faire  le lit     Vous faites le lit.    15 letters   LETTERS   ← and it is one
                  Ils font le lit.       12 letters   LETTERS      of the thirty
dire   bonjour    Vous dites bonjour.    16 letters   LETTERS
                  Nous disons bonjour.   17 letters   words     ← not a target
lire   le menu    Vous lisez le menu.    15 letters   LETTERS
```

**All three breaking cells are spellable.** One more letter in either frame and
`dites` would have arrived pre-spelled on a tile. Proved through the real
`dicteeMode` in the batch and again in the merge and the test.

`flashhub-coverage` risk: seven authored non-sentence rows is new in this band.
Checked against every row in the corpus, not only `verbes`: **zero fr collisions
anywhere**, and the batch re-checks it live against Postgres.

---

## 7. Lesson shape

- **24 missions**, at the top of doctrine §F's 19-to-24 range.
- **Acts** as above; the Owns act is the heaviest and three gates assert it.
- **Quiz**: 30 questions, 5 rounds, **every one with a `why` and a `ref`**.
  13 mcq (the cap is 15), 13 typed, 2 listenChoose, 1 tapSilent, 1 speak.
  18 questions touch one of the thirty and **9 make the learner choose between
  them in a described situation**, which is the sharper measure: touching one is
  cheap, because the `faire` paradigm runs on `faire le lit` by construction.
- **One quiz, one tapTable, no `table` at layer core.** The grids are in the
  sheet.
- **One reference sheet**, and its centre is a **thirty-row table of the
  expressions** — something none of the four earlier sheets in the band could
  have held. a2.01, a2.10 and a2.11 list endings; a2.02 lists forms; this lesson
  has a lexical set worth carrying around.
- **Five error triggers, five drills, five rounds, each round leading on a
  different trigger**, so `drillForRound` can reach all five.

### Questions I wanted and could not write

- **An ear question between `vous faites` and `vous faisez`.** `faisez` is not a
  form, so it has no row and no recording, and inventing one would put a
  pronunciation in the corpus that does not exist. It is a `typeIn` instead, in
  round 1, plus a dictée target and a `commonErrors` card.
- **An ear question between `je fais` and `il fait`.** They are one sound. Three
  homophone groups are enforced by `HOMOPHONE_FORMS` in the batch, the merge and
  the test rather than reported, because a sentence in a report cannot fail.
- **A typed question on `ça fait mal`.** `faire mal` was in the first draft of the
  thirty and came out: "say what hurts" is a2.28's canDo (seq 27, At the
  Doctor's). `faire un effort` took its place, and it already existed.

---

## 8. What the neighbours keep

Every guard is scoped to **production surfaces** — decks, vocabulary, group
checks, drills, the scenario's own turns and the quiz — and not to every string,
because `s16-notmine` has to be able to name a1.10 and a2.26 in order to hand
them back. Invariants §1 records four ways a guard that fires on legitimate
content came to be deleted.

```
a1.10  weather vocabulary   0 words on 509 production surfaces
a2.26  shopping vocabulary  0 words
a2.13  modal + naming form  0, and `Il faut faire la queue.` is a published
                            sentence, so the temptation is real
a2.19  futur proche         0, and `Je vais faire les courses.` is published too
a2.05  passé composé        0 on any learner surface. Sharper here than for
                            a2.02, because `fait` is this verb's participle as
                            well as its il form
       reported speech      0. `dire` takes a direct object on every screen
```

**The weather is a payoff, not a borrowing of convenience.** a1.10's own
`grammarIntroduced` says it taught `il fait` + an adjective *"as one frozen form
and never conjugated"*. This lesson is where those five stop being frozen, and it
teaches not one weather word: a learner leaves it able to say `il fait beau` and
no better at naming the sky than they were.

**Reported speech is handed over without a destination, and that is deliberate.**
No unit at any level owns it. That finding is weak in exactly the way corrections
§7 describes — it comes from searching 76 unit bodies, which hold nine fields and
no content manifest — so the card says the structure exists and is not needed
here, and names no unit. Naming one that does not own it would be worse.

---

## 9. The respellings

**Two repairs, both on imported rows, and one of them is deliberately not a
superscript.**

```
fr.a1.sports-et-loisirs.073    na-ta-SYOHN  →  na-ta-SYOHⁿ
fr.a1.animaux-domestiques.123  prohm-NAHD   →  prom-NAHD
```

The second is invariants §3's `jaune` case. `promenade` is /pʁɔm.nad/ with a
**real /m/ and no nasal vowel**, so a superscript would teach a sound that is not
in the word. The `OH` digraph is what makes the checker read a nasal; dropping it
satisfies the checker for the right reason. Both directions are asserted, and the
test pins that exactly one of the two repairs uses no superscript.

**Zero blind nasals**, measured rather than claimed, and the batch re-runs the
measurement on every run: each superscript is broken back one at a time (a row
with two, like `sahⁿ-BLAHⁿ`, is broken at each position separately so one blind
half cannot hide behind a seen one).

**Three imported rows display with no respelling at all** and this build does not
invent one: `faire la cuisine`, `faire attention`, `faire un effort`. Adding a
transcription to somebody else's row is authoring, not importing. The cards show
the French and the English and no bracket. It is a real gap, it is named in
`NO_RESPELL_IDS`, and the batch fails if an imported row loses its respelling
without joining that list.

### A finding that is bigger than this lesson

Measured after the merge by `scripts/_a212_nasal_scan.ts`:

```
904 of 8,787 rows in seed.json carry a respelling the shared checker FLAGS
 36 of those are the -tion shape: SYOHN where the house form is SYOHⁿ
  0 of them are this lesson's, authored or carried
```

`fr.a1.sports-et-loisirs.005` (`la natation`) is the same word as the row this
build repaired, on the noun instead of the expression, and it is still wrong.
Repairing 904 rows is a sweep, not a lesson build, and doing it inside this
transaction would have carried 904 unrelated rows into the seed. The figure is
recorded in `SEED_NASAL_DEBT` so somebody can decide to run that sweep on
purpose. Note that 904 is a **seed** figure and the seed is roughly a quarter of
Postgres; nobody has measured the database.

---

## 10. Mutation testing

Sixteen mutations, each applied to the source, with **all three layers asked
independently** rather than stopping at the first red. Corrections §9 is explicit
that a mutation caught only by the batch is a hole in the test, and that can only
be measured by getting the broken content past the batch — which every real
script refuses to do. `scripts/_a212_force.ts` exists for that and nothing else;
it writes `seed.json` unguarded and is marked NOT PART OF THE BUILD.

```
16 of 16 caught
   seen by the batch:  16
   seen by the merge:  14
   seen by the TEST:   16
   invisible to the test: 0
```

The brief's four are in there: drop an expression, regularise `vous faites`, put
a weather word on a production surface, re-author an imported id. The other
twelve: split the vous row into two groups, grow the tapTable to seven rows,
un-repair the natation respelling, strip a superscript from `ils font`, introduce
a word-internal nasal the checker cannot see, take `vous faites` out of the
dictée, break a singular triple, offer two homophones in an ear question, put a
modal in the scenario, reword the reframe in one place, move a mission from the
Owns act to the paradigm act, and give the nous/on statement a second home.

**Two of the sixteen found a weakness rather than confirming a strength**, which
is the measured rate for this band:

1. **The merge did not check the homophone rule**, so an ear question offering
   `Il fais le lit.` against `Il fait le lit.` passed it. The batch and the test
   both caught it, so nothing could have shipped, but the merge is the gate that
   writes the seed. Added.
2. **The merge did not check the act structure**, so moving a mission off the
   Owns act passed it. Added.

Both were added after the run and the run was repeated.

### And one thing the harness itself got wrong, worth recording

The first version of the "drop an expression" mutation inserted a **duplicate
`reach` key** into an object literal. The later key wins in JavaScript, so the
mutation did nothing and the harness reported *"caught by NOTHING"* — a false
hole. A mutation harness needs its own sanity check: a mutation that does not
change the meaning of the file is not evidence of anything.

---

## 11. Device verification: the host half only

**adb is present and no device is attached**, so the phone half was not done.
Naming the gaps rather than papering over them, per invariants §7.

What I did do:

- **Metro on 8082, real bundle build**: `http=200 bytes=23,599,992`.
- **Grepped the served bundle** for the lesson identity, the reframe, all five
  carried claims, the pattern name, all three breaking cells plus the control,
  a sample of the thirty from both halves (imported and authored), both repairs
  in both directions, and four section ids. Every string that should be there is
  there and **`prohm-NAHD` is absent**, which is the repair landing.
- **Grepped the renderer** for a `case` handling every one of the seventeen
  section types this lesson uses: all seventeen present. `ReferenceSheet.tsx`
  draws `teach`, `letterGrid` and `table`, which are the three the sheet uses.

**What that cannot tell me, by name:**

1. **Whether the scene break card's Continue sits above the fold.** The card is
   budgeted against ledger §7's measured figures and the test asserts every one
   of them (heading ≤ 16 characters, body ≤ 26 words, coach ≤ 9 words, each
   reading row ≤ 22 characters and each gloss ≤ 26), but a2.01 needed three
   device passes to establish those and a2.02 still shipped a v4 for it.
2. **Whether the six-row tapTable fits.** Six is corrections §8's measured
   ceiling and a2.11 used three "with room to spare". Six is untested on glass,
   and each of my rows carries two cells and a detail sheet.
3. **Whether the ten-item and eight-item groupDrills scroll well.** `s10-chores`
   carries ten items across two groups, which is the heaviest groupDrill in the
   band; a2.02's largest was six.
4. **Whether the thirty-row sheet table is usable** on a phone.
5. **Whether the three cards with no respelling look broken** rather than
   deliberately bare, next to twenty-seven that have one.

Items 2, 3 and 4 are the ones I would look at first with a phone in hand.

---

## 12. Anything else I could not verify

- **The device half, above.**
- **Whether `faire un effort`'s stored gloss reads well at A2.** The b2 row says
  *"to make an effort, to meet halfway"* and the second half is b2 nuance. I
  imported it rather than authoring a cleaner row, because doctrine §2 says
  import; a reader on a phone may find the second clause puzzling.
- **Whether thirty is the right number.** It is the brief's number and I met it
  honestly, but I have no evidence about whether thirty expressions in one lesson
  is more than a learner absorbs. Twenty-three of them are already in the
  flashcard hub under other themes, so the spaced-repetition load is not new.
- **The `-tion` sweep in §9**, which is out of scope for a lesson build and is
  now a decision somebody has to take.

---

## 13. Wiring

```
scripts/_a212_probe.ts                        the pre-flight, re-runnable
scripts/_a212_check.ts                        the design checks: endingPopulation,
                                              dicteeMode, hasPlainNasalFor
scripts/_a212_units.ts                        the unit measurements behind the
                                              cross-lesson claims
scripts/_a212_manifest.ts                     regenerates the recorded read
scripts/_a212_nasal_scan.ts                   the 904 figure in §9
scripts/_a212_force.ts                        MUTATION TOOL. Not part of the build.
scripts/data/faire-dire-lire-corpus.ts
scripts/data/faire-dire-lire-imported.ts
scripts/data/faire-dire-lire-rows.gen.ts      GENERATED
scripts/data/faire-dire-lire-terms.ts
scripts/data/faire-dire-lire-lesson.ts
scripts/author-faire-dire-lire-batch.ts       content:faire-dire-lire
scripts/merge-faire-dire-lire-into-seed.ts
ealch-v2/src/content/a2-12-faire-dire-lire.test.ts    60 tests
```

---

## 14. Why the lesson is at v2

v1 was applied to Postgres and then the guard that checks every boundary unit is
cited by id found that **`a2.26` was cited nowhere a search could see**: the card
and the term both wrote it as a possessive, and an accent-aware word-boundary
search treats `'` as a **word character**, so `a2.26's` does not match `a2.26`.
The earlier version of that guard looked only for `a1.10`, which happened to
appear unpossessed in a term body, so it passed while the other boundary was
invisible.

The learner-visible change is two words. The counter moved anyway: the batch
refuses to write a different body under the same number, which is how this became
a v2 rather than a quiet edit.

---

## 15. For the ledger

Amend `A2-BATCH-1-LEDGER.md` §2:

```
 6   a2.12   fr.a2.verbes.301 .. .340    TAKEN, 301-325 used, 326-340 free
```

and the count table:

```
280 rows   after a2.12 (255 + 25),  max .486,  gaps: + .326-.340
```

The block **held**: `fr.a2.verbes` held exactly 255 rows when `.301` was claimed,
which is the ledger's figure after a2.11 plus a2.02's 29, and 280 after, which is
255 plus this build's 25 and nothing else.

Baseline for the next author, measured 2026-08-12:

```
node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"
  tests 3135   pass 3135   fail 0      before a2.12
  tests 3195   pass 3195   fail 0      after a2.12 (+60)
seed.json                              version 28, 8787 items, 48 lessons
pnpm content:parity                    exits 0. ONE divergence, b2.01.l1,
                                       database-only, in_review. Not yours.
```

`seed.json` was at **snapshot v28** when this build started, not the v27 the
ledger records after a2.11: somebody published between a2.02 landing and this
lesson starting. The merge left `seed.version` alone, as it must.
