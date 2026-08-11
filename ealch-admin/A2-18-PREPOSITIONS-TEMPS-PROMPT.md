# Build a2.18 "Prépositions de temps"

Trail seq **14** of 32.

**This brief opens with a sequencing problem you must settle before authoring.** Read
"The tense you do not have" below first. It changes the shape of the lesson.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a1.12` (telling time) as shipped** (your prerequisite), **`a2.04` as shipped**
(seq 13, which was told to leave the temporal senses of `en` and `dans` to you), and
**`a2.02`** (whose `venir de` trap is the same shape as yours).

---

## Identity

```
a2.18   Prépositions de temps                              seq 14
  sub:    depuis, pendant, il y a, dans, en
  canDo:  Can say how long, how long ago and when with the right time preposition
  prereqUnitIds: ['a1.12']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## The tense you do not have, and this is the decision

The canDo asks for **"how long ago"**. `Il y a deux ans, j'ai visité Paris` needs the
passé composé, which is `a2.05` at seq 16, two lessons after you. The futur proche, which
`dans` naturally pairs with, is `a2.19` at seq 15, one lesson after you.

**At seq 14 the learner has the present tense, `venir de` for the recent past, and
nothing else.**

Three options:

1. **Restrict to present-anchored uses.** `depuis` and `pendant` work fully with the
   present. `dans` works with the present used futurally (`je pars dans dix minutes`,
   which is idiomatic and correct). `il y a` becomes receptive-only.
2. **Author past-tense examples anyway**, receptively, and accept that the learner meets
   forms they cannot produce.
3. **Escalate a resequence**: this unit arguably belongs after `a2.05`.

**Take option 1 and report option 3.** Option 1 gives a complete, honest lesson at this
trail position. Option 3 is a real curriculum observation and the person who commissioned
this batch should hear it, because the `sub` and the canDo were written without checking
what tense the learner would have.

If you take option 1, say plainly in one mission that `il y a` for "ago" needs a past
tense which is coming, and show one example receptively. **Flag it for `a2.05`** so
`a2.05` closes the loop.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.18 --theme temps,heure
pnpm corpus:probe --words "depuis,pendant,dans,il y a,en,pour"
pnpm corpus:probe --tokens "depuis deux ans,pendant une heure,il y a trois jours,dans dix minutes,en deux heures"
```

---

## The teaching problem

### Owns: the tense each preposition forces

This is not a vocabulary lesson with five words in it. Each preposition **selects a
tense**, and getting the preposition right while getting the tense wrong is the error
that actually happens.

```
depuis    + PRESENT     j'habite ici depuis trois ans      English: "I have lived"
pendant   + any         j'ai dormi pendant deux heures     duration, bounded
il y a    + past        il y a trois jours                 a point, measured back
dans      + future      je pars dans dix minutes           a point, measured forward
en        + any         j'ai fini en deux heures           time taken to complete
```

**`depuis` + present is the single biggest interference point for an English speaker in
the whole A2 level.** English uses a perfect ("I have lived here for three years"), French
uses a present, and the learner who translates produces something that is not just wrong
but incomprehensible about when. Give it the most weight.

### The reframe candidate

> **If it is still happening, French keeps it in the present.**

That covers `depuis` exactly and is a rule the learner can run mid-sentence. Record what
you rejected. "depuis means since or for" is a translation and it is the source of the
error, not the fix.

---

## The trap

**`il y a` means "there is" and it means "ago".** Same three words, two jobs, and the only
distinguisher is what follows: a noun means existence, a time expression means ago.

```
Il y a un problème.        there is
Il y a trois jours.        three days ago
```

**This is the second of four instances of that shape in A2** (doctrine §B.7). `a2.02`
taught the first, with `venir de` + infinitive against `venir de` + place, and was asked
to name the pattern in `terms` so you could quote it. **Find that term and quote it
verbatim.** Then name `a2.02` by unit id. From here on the learner should be recognising
the shape rather than meeting it fresh, and that recognition is worth more than the
trapDrill itself.

Second trap: **`pendant` against `depuis`.** Both translate as "for". `pendant` bounds a
completed stretch; `depuis` measures an ongoing one from its start. The distinguisher is
whether it is still going, which is exactly the reframe.

Third: **`en` against `dans`.** `en deux heures` is the time something took; `dans deux
heures` is when it starts. Learners merge them and produce the wrong one about half the
time.

---

## What is left to neighbours

- **Clock time and dates are `a1.12`, `a1.08`, `a1.09`**, all shipped. You use times and
  durations; you do not teach how to say them.
- **Place senses of `en` and `dans` are `a2.04`** (seq 13, immediately before), which was
  told to leave the temporal senses to you. **Show the place sense only as the contrast**,
  name `a2.04`, and do not teach the place system.
- **The passé composé is `a2.05`**, seq 16. See the sequencing decision above.
- **The futur proche is `a2.19`**, seq 15, immediately after. `dans` pairs with it
  naturally and you must use the present-with-future-meaning instead. **Flag it for
  `a2.19`.**
- **`pour` as a duration** (`je pars pour deux semaines`) is a sixth preposition the `sub`
  does not name. Decide whether to include it as context and report the decision.

---

## Layout and scene

- **The five prepositions belong in one grid**, each with its tense and one example.
  **This is the layout the test must assert.** Five separate sections gives the learner
  five vocabulary items; one grid gives them a choice they can make.
- **`depuis` and `pendant` belong side by side, two columns**, still-going against
  finished. This is the second required contrast.
- **The two `il y a` uses belong side by side.** Third required contrast, and the one that
  carries the doctrine's pattern recognition.
- `trapDrill` for `il y a`.
- A reference sheet with the grid. Genuine lookup value through `a2.05` and beyond.

**The scene:** the A2 register. Someone asked how long they have been in France, who
reaches for a past tense they do not have and stalls, or answers with a bare number that
lands ambiguously. It is the lesson's own subject and it is a question every learner is
actually asked.

---

## Quiz notes

- **mcq with the situation in the stem** for preposition choice. "Which means for?" has
  two answers; "You arrived three years ago and you are still there" has one.
- **`typeIn` for `depuis` + present**, requiring the learner to produce the present tense
  where English wants a perfect. That is the format that tests the Owns.
- **`errorSpot` for the `depuis` + past error**, which is the error they will make.
- `listenChoose` has little to do: the distinctions are semantic, not phonetic. One item
  at most, or none. **Do not pad it.**
- Do not write any question requiring the learner to produce a passé composé.

---

## Wiring

```
scripts/author-prepositions-temps-batch.ts      content:prepositions-temps
scripts/merge-prepositions-temps-into-seed.ts
scripts/data/prepositions-temps-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-18-prepositions-temps.test.ts
```

Ids from your batch-2 ledger block. Row count after the apply.

Corpus sentences **may** use the passé composé (doctrine §C: the corpus is not bound by
trail position) even though the lesson body may not teach it. If you author any, flag
them in the corpus header for `a2.05`.

---

## Your test

- **The five prepositions appear in one section with their tenses**, asserted row by row.
- **`depuis` is taught with the present tense**, and no authored correct sentence pairs
  `depuis` with a past tense. Permit it inside an `errorSpot` item as the error.
- **`depuis` and `pendant` appear as a contrast in one section.**
- **The two `il y a` uses appear as a contrast in one section**, and the `a2.02` term is
  quoted verbatim. Assert the quotation, so an edit that paraphrases it goes red.
- **No passé composé is conjugated in the lesson body**, and the deferral line exists.
- **No place sense of `en` or `dans` is taught**, scoped to production surfaces.
- **The futur proche is not taught**, reserving `a2.19`.
- Whichever way the `pour` decision went, assert it.
- Import `hasPlainNasalFor`. `pendant`, `dans` and `en` are all nasals and appear
  constantly: settle one respelling each and assert them.

**Mutation-test**: pair `depuis` with a past tense, merge the two `il y a` uses, teach the
futur proche, paraphrase the `a2.02` term.

---

## UNVERIFIED

- **Whether a resequence after `a2.05` is wanted.** Nobody has decided and the canDo was
  written without checking. This is the biggest open question in batch 2.
- Whether `a2.02` shipped the "one form, two jobs" term this brief tells you to quote. If
  it did not, name the pattern yourself and report it, so `a2.19` and `a2.15` can quote
  you instead.
- Whether a `temps` theme exists. Ledger decision.
- Whether `a2.04` left the temporal senses alone as instructed. Read the shipped lesson.
- Whether `a1.12` already teaches any duration expression.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the sequencing decision**, and a plain recommendation on whether this unit should sit
  after `a2.05`. This is the report item that matters most.
- **the `pour` decision** and its effect on how the `sub` reads
- whether the `a2.02` term existed and was quotable, or whether you had to name the
  pattern yourself
- how much weight `depuis` + present got, in missions
- any passé composé corpus sentences you authored, flagged for `a2.05`
