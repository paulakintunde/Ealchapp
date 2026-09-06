# DESIGN — the DELF B2 debate, and where images belong

**Status:** Part 2 BUILT (b97e8cf, dbe3e32). Part 3's gate BUILT. Part 3's
decorative trigger image WITHDRAWN — see 3.3.
**For:** `delf-b2-2026.09`, Production orale phase 2, and the image policy for all four formats.
**Written:** 2026-09-05

---

## Part 1 — Why the current interlocutor cannot do this

`ExamInterlocutor` was built for TEF and TCF, where phase 2 is an **information
exchange**: the candidate rings an agency and asks about a document that
withholds facts, and the bank hands them out one at a time. `selectTurn` matches
the candidate's transcript against cues, never repeats an answer, and closes when
the bank is empty. `coverageOf` then reports which facts the candidate extracted,
and that coverage is direct evidence for the grader.

It is a good model for that task and it is the wrong model for this one, in five
specific ways rather than one general one.

| | TEF/TCF interaction | DELF B2 debate |
|---|---|---|
| Who initiates | candidate asks | **examiner challenges** |
| What the bank holds | facts withheld by a document | **objections to a position** |
| Success | facts extracted | **position held under pressure** |
| Length | ~3 min, 7 answers | **10–13 min** |
| Ends when | bank exhausted | **the clock runs out** |

1. **The direction is inverted.** Our bank answers questions. A DELF examiner
   asks them, and does so about a position the candidate has just taken.
2. **Coverage is the wrong metric and would misreport.** There is nothing to
   extract. A candidate who "covered" every objection by conceding to each one
   has argued badly and would score full marks under `coverageOf`.
3. **There is no escalation.** Every answer in the bank is a peer. A debate
   needs a first objection and a harder one that depends on how the first was
   handled.
4. **The bank is side-blind.** The trigger document raises a question with two
   defensible sides. Which side the candidate takes is unknown until they have
   spoken for five to seven minutes, and every subsequent examiner move depends
   on it. Nothing in the current shape can branch on that.
5. **Exhaustion closes the task.** Seven answers at ~25 seconds each is under
   three minutes. On DELF that is a quarter of the épreuve, after which the
   examiner would fall silent for ten minutes.

**Conclusion: this is a new type, not a bigger bank.** `po_interaction` keeps its
current shape for TEF and TCF; DELF gets `po_debate`. Widening the existing type
would put a `side` field on a bank that has no sides and make `coverage` optional
on a task where it is the whole grade.

---

## Part 2 — The debate as a state machine

A debate is not a lookup table. The examiner's next move depends on three things
the current model does not track: which side the candidate took, how deep the
current line of attack has gone, and whether they are still defending.

### 2.1 The three things to track

```
side     : 'pour' | 'contre' | 'unclear'    detected once, after the monologue
axis     : which line of attack is open      one at a time, several per debate
depth    : 1 | 2 | 3                         how far this axis has been pushed
```

### 2.2 Detecting the side

The monologue transcript is the input, and the bank carries cues for each side,
authored the way the existing `cues` are — things a candidate would actually say,
not keywords.

**When detection is ambiguous, the examiner does what a real one does: asks.**
An opening move exists for exactly this — *"Si je vous comprends bien, vous
défendez plutôt … ? "* — and the next transcript decides. Guessing a side and
attacking the wrong one is the worst available failure, because the candidate's
correct answer then looks like a non-answer.

### 2.3 The move types

This is the heart of the design. Seven kinds, and a bank that has fewer than
five of them will feel like a questionnaire rather than a debate.

| Move | What the examiner does | Why B2 needs it |
|---|---|---|
| `probe` | Ask them to be precise about a term they used loosely | *Peut confirmer et nuancer ses idées, apporter des précisions* |
| `counter` | State the strongest objection to their side | *Peut réagir aux arguments d'autrui* |
| `counter-example` | Offer a case their position handles badly | forces a qualification rather than a repetition |
| `consequence` | "If we did what you propose, then X" | tests whether the position was thought through |
| `concession-probe` | "You accept X — does that not undermine you?" | **the characteristic B2 examiner move** |
| `steelman-swap` | "Suppose I argued the opposite. What is your best answer?" | separates a held position from a recited one |
| `retreat-check` | Fires when they abandon or soften; asks what changed their mind | a candidate who folds must not be rewarded for agreeing |

`concession-probe` and `retreat-check` are the two our existing banks have no
shape for at all, and they are the two that distinguish a defended position from
a stated one.

### 2.4 The escalation ladder

Each **axis** carries up to three depths. Depth advances only if the candidate
engaged; otherwise the examiner re-puts the same point differently and depth
stays put.

```
depth 1   the objection, plainly
depth 2   the objection sharpened, given their answer at depth 1
depth 3   the concession-probe: their own depth-2 answer turned against them
```

An axis exhausted at depth 3 closes and the next axis opens. **Three axes at
three depths is nine examiner turns**, which at 30 to 45 seconds per exchange is
five to seven minutes — so a bank needs **four to five axes per side** to fill
ten to thirteen minutes, and it must have them for BOTH sides.

That is roughly 30 authored turns per trigger document against the seven a TEF
task carries. It is the real cost of this format and it should be budgeted as
such rather than discovered halfway through paper 1.

### 2.5 Ending

**On the clock, never on exhaustion.** If the axes run out before the time does,
the examiner returns to the axis the candidate handled worst and re-opens it at
depth 2 — which is also what a real examiner does. A silent examiner is a broken
exam; a repetitive one is merely a hard exam.

### 2.6 What the grader gets

Not coverage. Four signals, each direct rather than proxied:

| Signal | Measured by |
|---|---|
| Position held | side detected at the start still matches the side at the end |
| Depth reached | the deepest depth engaged with, per axis |
| Concessions | how many `concession-probe` moves drew a qualification rather than a collapse |
| Retreats | how many `retreat-check` moves fired at all |

**A retreat is not automatically a fault** and the grader must be told so. B2's
descriptor is *confirmer et nuancer* — nuancing is the skill. A candidate who
qualifies a position under a good objection is doing well; one who abandons it
and cannot say why is not. The difference is whether they gave a reason, which
is why `retreat-check` asks for one rather than just recording the retreat.

---

## Part 3 — Images

### 3.1 The measurement, first

**DELF B2 uses no content images.** Checked rather than assumed, by extracting
every embedded image from the official samples:

| Document | Pages | Images | What they are |
|---|---|---|---|
| Sample 3, candidate paper | 13 | 1 | a 71 × 12 pt wordmark at the top of page 1 |
| Sample 2, speaking, examiner | 3 | 6 | a 37 × 35 pt footer logo, twice per page |

One wordmark across a thirteen-page paper, and a repeated footer. Every
stimulus — five listening documents, three reading texts, the writing prompt,
the speaking triggers — is text or audio.

So the first rule is a prohibition, and it is not a style preference:

> **No image may carry information in a DELF B2 stimulus.** A candidate who
> needs to look at a picture to answer is sitting a different exam from the one
> we say we are simulating.

### 3.2 The repo already has both kinds of image, and they are opposites

The engine supports images today: `ExamPart.imageRef` with a **mandatory**
`imageAlt`, and `validateExamTask` refuses an image without alt text —
*"an image with no alt text must not ship"*.

Two uses exist in the TEF pack, and the difference between them is the whole
design question here:

**Load-bearing.** TEF listening block A, where the images ARE the options — four
per paper, in all five papers. And TEF blanc-01's reading Section E, a bar chart
of household water consumption whose alt text recites every data point and the
footnote:

> *Graphique en barres, cinq barres verticales… 2021 : 148. 2022 : 141… Une note
> sous le graphique indique qu'une nouvelle tarification est entrée en vigueur
> en 2024.*

That alt is **correctly** exhaustive. The chart is the stimulus; a screen-reader
user who is told "a bar chart about water" cannot answer the questions and a
sighted user can. When the image is the stimulus, the alt must carry all of it.

*(Noted in passing, not a task here: only blanc-01 carries that chart. Papers 2
to 5 have no CE image at all, so one paper's Section E is a different exercise
from the other four's. Worth a look when the TEF pack is next touched.)*

**Decorative.** Nothing in the repo yet. This is what §3.3 proposes for DELF, and
its alt must carry **nothing** the text does not already say.

The two rules are exact opposites, which is why a single "images must have alt
text" rule is not enough and the gate in §3.4 must know which kind it is looking
at. **A check written for decorative images would reject the TEF chart**, and
rejecting it would be wrong.

### 3.3 The decorative trigger image — PROPOSED, then WITHDRAWN

This section originally proposed one permitted image: a decorative photograph on
the Production orale trigger, on the grounds that real press extracts carry them
and it changes nothing about what is tested.

**It has nowhere to live, and that settles it.** `imageRef` is a field on
`ExamPart`, and a PO task has no parts — it carries its trigger in `prompt`, as
every TEF and TCF speaking task does. Shipping a trigger image would mean adding
an image field to `ExamTask` itself.

That is real schema work, on a shared contract both repos type against, to add a
decoration the exam does not have. It is not justified by anything measured, so
it is withdrawn rather than deferred: if someone later wants it, they should
argue for it from a product need rather than find a half-built path waiting.

The useful consequence is that the gate collapses to a single rule.

### 3.4 The gate — BUILT

`validateExamTask` refuses `imageRef` on any part of a `delf_b2` task.

That is the whole rule, and it is complete rather than a subset: the only parts
a DELF paper has are CO and CE parts, PE has none, and PO cannot carry an image
at all. The four separate checks this design first sketched were an artefact of
assuming the trigger image existed.

**Scoped to `delf_b2`, and the scope is load-bearing.** TEF is the opposite
case: block A's images ARE the options in all five papers, and blanc-01's
reading Section E is a bar chart whose alt text recites every data point —
correctly, because there the image is the stimulus. An unscoped rule would
reject it, and a test asserts that it does not.

### 3.5 Accessibility, since images are being added at all

Any image we ship carries the existing obligations. Alt text is mandatory and
the schema enforces it. `accessibilityLanguage` must be set on French strings so
a screen reader does not read French in an English voice — and that one is **not
enforced and barely adopted**: three occurrences across the whole app at the time
of writing, against every French string it should cover.

A French alt text with no `accessibilityLanguage` is read aloud by an English
synthesiser and is worse than useless: it sounds like nonsense and gives no clue
why. So if a DELF trigger image ships, its alt must set it, and the gate should
check that rather than assume the wider adoption problem will be solved first.

---

## Part 4 — What to build, in order

1. **`po_debate` as a task type**, with the state machine of §2. Pure logic,
   testable without a device, the same way `interlocutor.logic.ts` is.
2. **Side detection** and the ambiguity fallback, which is the piece most likely
   to be got wrong and the cheapest to test.
3. **The escalation ladder**, with the depth rule that engagement advances and
   non-engagement re-puts.
4. **The grader signals** of §2.6, replacing coverage.
5. ~~**The image gate** of §3.4~~ — BUILT, and smaller than designed. Writing it
   is what revealed that the trigger image had nowhere to live, which is a good
   argument for building a gate before the content it guards rather than after:
   the gate is where you find out what the schema actually permits.

Authoring the comprehension épreuves does **not** depend on any of this, and can
proceed in parallel: CO and CE map onto `co_mcq` and `ce_mcq` today, with
`points` already shipped.
