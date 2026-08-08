# Build a1.30 "A1 Review"

You are authoring the A1 band capstone in Ealch, end to end. Not drafting content for review: authoring it, wiring it, proving it, and leaving it render-ready.

You have latitude on the teaching. You have none on the gates.

**This lesson is not shaped like the twenty-nine before it, and the differences are not stylistic.** Three of them will break your build if you carry an ordinary lesson's habits into it. They are the first three sections of this brief.

---

## v2 REWORK, DECIDED AFTER SEEING v1 ON A DEVICE

v1 SHIPPED AND IS LIVE: applied to Postgres, merged to the seed, 2514 tests
green, and verified on a Pixel 6 including the trapDrill. **Do not start the
rework until you can finish it**, because a half-applied restructure leaves the
capstone broken in both copies and it is currently working.

The product owner's reaction to v1 was that it should feel more like an exam
across lessons 1 to 29. Two decisions follow, and one correction.

**The correction:** the exam engine is NOT the home for this. `EXAM_FORMATS` is
`['delf_b2', 'tef_canada', 'tcf_canada']` and `ExamTask` is built for
certification prep. There is no `delf_a1`. a1.30 is the right home and this is
not a case of building in the wrong place.

**Decision 1: keep act 1, exam everything after it.** The five repair-kit
sections stay, because twenty-nine lessons teach production and none teaches
repair, and a1.30 is the band's only remaining slot. Everything from act 2 on
becomes assessment. Target ~16 sections and 110 to 130 scored moments, against
v1's 25 and 88.

> A caution to carry into the build: 130 scored moments is 45 to 60 minutes.
> sons.09 is 63 and a1.25 is 37. The risk is not that it is wrong, it is that a
> learner abandons it halfway. 110 is the safer number.

**Decision 2: the final exam is BY UNIT; the in-mission drills stay MIXED.**
In-mission trains combining, which is what the reframe claims. The exam diagnoses
which lesson leaked, which is what a band review is for. Fifteen rounds of five,
paired in curriculum order:

```
r1  a1.01 a1.02      r6  a1.07 a1.18      r11 a1.17 a1.21
r2  a1.27 a1.28      r7  a1.08 a1.09      r12 a1.19 a1.20
r3  a1.03 a1.04      r8  a1.10 a1.12      r13 a1.22 a1.23
r4  a1.11 a1.29      r9  a1.13 a1.14      r14 a1.24 a1.26
r5  a1.05 a1.06      r10 a1.16 a1.15      r15 a1.25 + the repair kit
```

### THE THING THAT MAKES THE CUT POSSIBLE, AND THE ONLY THING THAT DOES

Cutting the review sections strands the review items. **Every `itemId` must be on
a screen**, that is a1.08's failure and the test asserts it, and a lesson that
shows nothing cannot declare 101 of them. Dropping `s10-bank`, `s21-flash` and
`s22-review` removes the screens that 87 rows currently live on.

**A by-unit exam fixes this and a mixed-topic one cannot.** If each round names
its own two units' six contributions inside its questions and explanations, the
EXAM BECOMES THE SCREEN. Fifteen rounds times six rows is ninety, which covers
all 87 with room to spare.

So the two decisions are not independent. **By-unit rounds are a precondition of
the section cut, not a separate preference.** If a later author reverts the exam
to mixed-topic while keeping the cut, the reachability test goes red and the
obvious fix, re-adding the vocab sections, undoes the exam.

### What to cut, what to keep

```
KEEP   act 1 entire            s01-s05   the repair kit, the only new content
KEEP   s16, s17 trapDrills               the best exam-shaped surface in the app
KEEP   s20-scenario                      performance, and the signature section
KEEP   s23, s24, s25                     progress, exam, roundup
CUT    s08-mixed, s10-bank               teaching and banking, replaced by the exam
CUT    s11-oneturn, s19-reading          prose, not assessment
CUT    s21-flash, s22-review             their job moves into the by-unit rounds
KEEP   s06, s07, s09, s12, s15, s18      already assessment, stay mixed
ADD    one or two more trapDrills        to reach the in-mission target
```

### What must NOT change

- the tranche contract, which still releases only the 13 owned rows
- the reframe, which is still true of a by-unit exam: a round pairs two units
- even coverage, three contributions per unit, now surfaced through the rounds
- both answer-spread checks, on a quiz that is half again as long
- `version: 2` on the lesson, and the batch and merge re-run in that order

---

## SETTLED DECISIONS

Taken 2026-08-08 with the product owner, after measurement. These are not open.

**Item selection: EVEN COVERAGE across all 29 units, three contributions each.**

A contribution is a HEADWORD for a vocabulary unit and a SENTENCE for a grammar
unit, because two units cannot supply a headword at all. Measured:

```
a1.05  Subject Pronouns    0 headwords, 45 sentences
a1.06  The Verb Être       0 headwords, 45 sentences
a1.18  Negation            3 headwords, 48 sentences
a1.19  Yes/No Questions    7 headwords, 44 sentences
```

Insisting on three headwords per unit is impossible. Three contributions per unit
is not, and for a grammar unit the sentence is the better representative anyway:
a sentence carries vocabulary from other units for free, which is the whole point
of this lesson.

**Assessment target: ~90 scored moments**, against sons.09's 63 and a1.25's 37.
Roughly 60 quiz questions across 10 rounds, plus ~30 in-mission. **You cannot add
a second quiz section**; `lessonPager.logic.ts:87` uses `.find()` and only the
first renders. Weight goes into rounds and into in-mission surfaces.

**"Fluid" means three specific things, all live in the engine:**

1. **Branching via rounds and drills.** Ten or more rounds, each with its own
   error trigger, drill and retest, so `roundFailThreshold` and `drillForRound`
   give a failing learner a genuinely different path. **`adaptive` is a DEAD
   FIELD** (declared `schema.ts:1068`, read by no component, same class as
   `autoplay`). Do not author it.
2. **Mixed topic in every section.** No act is about one unit. Every card, drill
   and question pulls from two or more units at once.
3. **`trapDrill` rapid-fire rounds.** Scored, fast, and **never used anywhere in
   the A1 band**, though every sons lesson has one and it renders correctly
   (`MissionSection.tsx:484`). Two of them.

Deliberately NOT chosen: shorter denser missions.

**Theme: `expressions-frequentes`.**

The instruction was to bind to the themes the chosen items sit in. Computed, the
87 review items span **26 distinct themes**, which is a truthful and useless
array. The reading that survives contact is: bind to the theme this unit OWNS,
because the other 26 are owned by the units that taught them. a1.30 owns the
repair kit and nine of its thirteen rows are in `expressions-frequentes`,
including both authored ones.

> **This is bookkeeping, not design.** `unit.themes` is read by a validator at
> `schema.ts:4034` and by NOTHING ELSE: no screen, no query, no item selection
> consumes it. Get it truthful and spend no further thought on it. The a1.25
> rebinding was correct and also changed nothing a learner sees.

### What this means for the tranche contract, which is the subtle part

Even coverage means every review item is one its own unit already released. So
**the review half of this lesson releases NOTHING**, and that is correct rather
than a bug.

What it releases instead is the one genuinely new thing a capstone can own:

**THE CONVERSATIONAL REPAIR KIT.** Measured 2026-08-08:

```
IMPORT, published in Postgres and ABSENT from the seed:
  fr.a1.expressions-frequentes.099   pardon                 sorry
  fr.a1.expressions-frequentes.100   de rien                you're welcome
  fr.a1.expressions-frequentes.104   bien sûr               of course
  fr.a1.expressions-frequentes.105   pas de problème        no problem
  fr.a1.expressions-frequentes.106   d'accord               okay
  fr.a1.expressions-frequentes.118   peut-être              maybe
  fr.a1.expressions-frequentes.122   voilà                  there you go
  fr.a1.expressions-frequentes.079   Excusez-moi, je ne comprends pas.
  fr.a1.rp-etiquette.016             excusez-moi            excuse me (formal)
  fr.sons.expressions-utiles.038     je ne comprends pas    I don't understand
  fr.sons.expressions-utiles.044     un instant             one moment

REUSED, already in the seed:
  fr.sons.elision.033                je ne sais pas         I do not know

AUTHOR, because the corpus has no usable A1 form of either:
  fr.a1.expressions-frequentes.123   Vous pouvez répéter, s'il vous plaît ?
  fr.a1.expressions-frequentes.124   Plus lentement, s'il vous plaît.
```

**The two authored rows are the point.** A search for répéter and lentement at
a1 and sons returns only long narrative sentences: « Elle a demandé de répéter le
nom une deuxième fois, plus lentement. » is a story about somebody else asking.
**The corpus cannot currently teach a learner to ask for repetition**, which is
the single most useful thing an A1 speaker can say. `fr.a1.expressions-
frequentes` runs to 122 with no gaps, so 123 and 124 are free. Re-probe first.

Twenty-nine lessons teach a learner to produce French and **not one teaches them
what to say when they do not understand.** "Can hold a short everyday exchange"
is exactly the thing that fails without it. This is the capstone's own material,
it is roughly a dozen rows, it is outside the seed cut so it must be carried, and
it is the only content the tranches release.

### The act structure that follows

Mixed topic forbids the usual one-unit-per-act shape, so the organising axis is
PRESSURE rather than topic:

```
act 1  What you already have, and the one thing you do not   the repair kit
act 2  Recognise it, whoever says it                          mixed listening and sorting
act 3  Produce one turn                                       mixed drills
act 4  Under pressure                                         the two trapDrills
act 5  Hold a long exchange                                   the signature scenario
act 6  The exam                                               10 rounds, roundup
```

**The signature section is act 5's scenario.** Every role play in the band runs
3 to 6 turns on ONE topic, 144 turns in total. This one runs longer and crosses
units deliberately, so a single turn needs two lessons at once. That is the only
thing the band has never asked for.

**Read first, in this order:**

1. **`ealch-admin/A1-BUILD-INVARIANTS.md`.** The gates, the layout traps, the wiring pattern, the respelling convention and its blind spots, the quiz rules, the house rules.
2. **`sons.09.l1` "Masterclass", the ONLY band capstone that has ever shipped**, in `scripts/data/masterclass-*.ts`. It is your structural model and there is no second one. Read its `deckTranche` before anything else: it does something no other lesson does and this brief's first section is about it.
3. `ealch-admin/A1-LESSON-GENERATION-PROMPT.md` **Part 1**, the A1 doctrine.
4. **a1.22 "Pays & nationalités"** (`scripts/data/pays-*.ts`), because its corpus situation is yours: everything it needed was OUTSIDE `SEED_CUT.themes` and had to be carried or it would have rendered blank cards. That is your situation too, and it is the opposite of a1.25's.
5. **a1.25 "La routine quotidienne"** (`scripts/data/routine-*.ts`), the newest lesson to ship and your quality bar. Read `routine-lesson.ts`'s header for the two-surface answer-randomisation finding, which applies to you unchanged.
6. **Your four prerequisites, all now built**: a1.20 (question words), a1.23 (food), a1.25 (daily routine), a1.26 (the house). You may not contradict any of them.

---

## 1. A CAPSTONE'S TRANCHE CONTRACT IS THE INVERSE OF EVERY OTHER LESSON'S

Every A1 lesson so far enforces this, in its own source and again in its test:

> every taught item is released by exactly one tranche, and nothing taught is left unreleased

**A capstone cannot satisfy that and must not try.** Measured on `sons.09.l1`, 2026-08-07:

```
itemIds named                                    78
released by its own tranches                     56
NAMED BUT DELIBERATELY NOT RELEASED              22
  of those, already released by an earlier lesson  21
double releases (released here AND earlier)        0
```

The SRS keys on `(itemId, modality)`. An item released by a1.05's tranche and again by yours takes **two ratings for one card**, and the learner is asked to grade something they already graded. So the contract for this lesson is:

> **show freely, release only what no earlier lesson released, and assert zero double-releases across the whole band.**

Your test's tranche assertion is therefore **not** the one you will find in `a1-25-routine.test.ts` or any of its siblings. Copying that file's tranche test into this lesson will fail on correct content, and the tempting fix, releasing everything, is the actual defect. Write the capstone version:

- every id in a tranche is one **no other lesson in the seed releases** (compute it, do not list it)
- every id in `itemIds` is either released here **or** released by a named earlier lesson, and nothing is orphaned
- every id in `itemIds` is still **on a screen**, which is the one rule that does not change

> **FILL:** state the measured double-release count for YOUR lesson in the report, and say which items you showed without releasing and which lesson released each of them. sons.09 does not document its 21 anywhere, which is why they had to be measured for this brief instead of read.

---

## 2. THE UNIT BINDS TO NO THEME AT ALL

Measured 2026-08-07 against Postgres and `seed.json` v19:

```
a1.30  A1 Review   seq 30
  sub:    "Bilan A1"
  canDo:  "Can hold a short everyday exchange using the whole A1 band: introduce
           themselves, ask questions, count, tell the time and describe their world"
  themes: null                  NOT an empty array. NULL.
  lessonIds: []                 you are filling this
  prereqUnitIds: ["a1.20", "a1.23", "a1.25", "a1.26"]   all four now ship
```

Do not change `title`, `sub` or `canDo`. All three are correct and the Den advertises them. Note the same English-title-over-French-sub pattern a1.25 and a1.26 carry; it is the shipped convention, not a defect to repair.

`themes: null` is a real decision left open, not an oversight. Your options, measured:

```
theme                        postgres   seed    a1 slice   verdict
bilan                               0      0           0   empty in BOTH. Creatable.
revision                            0      0           0   empty in BOTH. Creatable.
expressions-utiles                614      7         328   ALIVE, and 98% outside the cut
presentation-personnelle          300     12         179   ALIVE, and 96% outside the cut
questions-du-quotidien            300      2         180   ALIVE, and 99% outside the cut
```

**The recommendation is to bind to the live themes and import, not to create `bilan`.** The invariants are explicit that "create the theme" is only on the table once the probe says a theme is empty in Postgres, and `bilan` is. But a capstone whose vocabulary lives in a theme nobody else uses is a capstone that teaches its own private word list, which is the one thing it must not do. Whatever you decide, **report what it means for the A2 band**, which will face this question again at its own capstone.

---

## 3. EVERYTHING YOU NEED IS OUTSIDE THE SEED CUT

This is the a1.22 and a1.13 situation, and it is the exact inverse of a1.25, which had all 52 of its rows already in the seed and could merge one item and stop.

`expressions-utiles` holds 614 published rows and **seven** are in the seed. `questions-du-quotidien` holds 300 and **two** are in the seed. Every row you name that is not carried by your merge **renders as an empty card on a device** and nothing in the suite will say so.

So: your `IMPORTED` array will be large, your merge will be the heavy kind, and `scripts/_pays_manifest.ts` plus `scripts/_routine_manifest.ts` are the two generators to model on. **Do not retype a row.** Generate the manifest, verify it field by field against the live database in the batch, and die on drift.

> **FILL:** paste the probe output for every theme you bind to, with both numbers, and state the IMPORTED / REUSED split before you author anything.

---

## The teaching problem

Twenty-nine A1 lessons ship. Between them they name **1,658 itemIds across 54 distinct themes**, in **751 sections**, with **732 quiz questions**. A learner arriving here has been taught more French than they can hold in one place, and has never once been asked to use two lessons in the same breath.

That is the gap, and it is the only thing a capstone can legitimately own. Every individual thing this lesson could teach has already been taught. What has not happened is **a turn that costs more than one lesson to take**.

### The canDo has five clauses and they are deliberately from five different units

```
"introduce themselves"        a1.01, a1.06, a1.22
"ask questions"               a1.19, a1.20
"count"                       a1.02, a1.27, a1.28
"tell the time"               a1.12
"describe their world"        a1.13, a1.14, a1.16, a1.25, a1.26
```

**Not one of those is new.** If your lesson teaches any of them again, it has become a thirtieth ordinary lesson and the band has no capstone. The integration is the content.

> **The reframe candidate: "One turn, more than one lesson."**
>
> A capstone reframe has one extra requirement the others do not: **it must be true of material the learner already has.** A reframe that introduces an idea is teaching, and this lesson does not teach.
>
> ── The obvious candidate was measured and it is WRONG ─────────────────────
>
> The first thing this brief reached for was *"An exchange is a turn you take and a turn you give back"*, on the assumption that A1 teaches sentences and never sustained turns. **Measured 2026-08-07, that assumption is false:**
>
> ```
> A1 lessons                             29
> lessons carrying a `scenario` section  29     every single one
> conversational turns across the band  144
> turns carrying alternate answers      144     all of them
> turns per scenario     min 3, median 5, max 6
> ```
>
> The learner arrives having taken 144 turns, every one of which showed them that a reply has more than one right form. Turn-taking is not the gap and a reframe built on it would be teaching something they have done twenty-nine times.
>
> **What the same measurement DOES show is the real gap.** Every one of those 29 scenarios is confined to its own lesson's topic: the food role play is about food, the routine role play is about a day. **Not one turn in the band requires two units at once.** That is what has never happened, and it is what "hold a short everyday exchange" actually asks for.
>
> So the candidate above is offered as the corrected one, and you should still check it rather than inherit it. **Write down what you rejected and why**, the way this section just did, because the next author needs to know which alternatives were already tested and killed.

### What is deliberately left to its neighbours

- **Every A1 rule.** Name the lesson that owns each one when you lean on it, the way a1.22 names a1.06 and a1.13. Do not restate the rule.
- **Anything A2.** The band ends here. Check the spine before reaching for a verb tense, a pronominal paradigm or a demonstrative.
- **The exam.** Measured 2026-08-07: `seed.json` has **no exams key at all** (`version, units, lessons, items, scenarios, playlists, speakPath`) and zero `ExamTask` content exists. The examiner engine ships and has nothing to grade. A capstone is the natural home for the first exam tasks and **that is a separate build**. Do not smuggle one in. Say in your report that the slot is open and empty.

---

## Shape

a1.25 is 27 sections, a1.22 is 28, a1.12 is 30. **sons.09, the capstone, is 23** and that is the number to weigh most: a capstone earns its length by integrating rather than by covering, and 23 sections with 78 items is a much thinner deck than an ordinary lesson carries.

```
sons.09.l1  v1  23 sections  78 items  6 acts
            scene 1, goals 1, cardDeck 2, groupDrill 4, trapDrill 2, listening 1,
            dictation 1, flashcards 1, commonErrors 1, inhibitionDrill 1,
            practice 2, scenario 1, reading 1, reviewDeck 1, progressCheck 1,
            quiz 1, roundup 1
            reframe: "French pronounces the phrase, not the word."
            tranches: 0 / 10 / 14 / 14 / 18 / 0
```

**22 to 26 is your range, and the weight belongs on production, not on review.** A capstone that spends fifteen missions reminding the learner of things is a revision sheet. Note that sons.09 releases **nothing** in acts 1 and 6.

### Quiz notes specific to this lesson

General rules are in `A1-BUILD-INVARIANTS.md` §4. What is specific:

- **Answer randomisation is two problems, not one, and this is unchanged from a1.25.** The act-6 quiz renders through `QuizDeckView` ([LessonPager.tsx:839](../ealch-v2/src/components/LessonPager.tsx#L839)) and IS shuffled per question per attempt. The in-mission closed questions are NOT: `MissionRich.tsx:347`, `:732` and `:1941` render `q.opts.map` in authored order. Spread the correct slot by hand across the in-mission surface, never let two consecutive questions in one section share a slot, and **assert the two surfaces separately**. `a1-25-routine.test.ts` has the assertion; copy it.
- **A capstone quiz should draw from units the lesson never drilled.** That is the only way to test the band rather than the lesson, and it is exactly what a1.22 did with countries it never taught.
- **At most half may be `mcq`.** Every question needs a `why` that teaches and a `ref` naming a section that exists.
- **No free-text format can test a capital letter**, a space, or an accent. `fold()` strips all three. Only `mcq` can.

---

## Wiring

- `scripts/author-bilan-batch.ts`, `scripts/merge-bilan-into-seed.ts`, `scripts/data/bilan-{corpus,imported,lesson,terms}.ts`, `content:bilan` in `package.json`.
- **`package.json` is being edited by more than one build right now.** Add your line and check you have not dropped anybody else's.
- **`seed.json` is being written by concurrent builds.** a1.23, a1.24, a1.25 and a1.26 all landed within one session and one of them was clobbered and had to be re-merged. Re-read the seed immediately before your merge, and have the merge **name the lessons it must not disturb rather than counting them**.
- **Apply to Postgres FIRST, merge into the seed SECOND, publish only when both agree.** Make the batch idempotent: a1.25's first run rolled back on a `drill_kind[]` cast and the second had to land the same rows, which every guard in it initially read as a collision.
- **`drills` is an enum array.** `drills || $2::text[]` fails; you need `$2::text[]::drill_kind[]`.
- **Do not hand-bump `seed.version`.** It is the OTA snapshot number.

---

## Your test: `ealch-v2/src/content/a1-30-bilan.test.ts`

Baseline measured **2026-08-07**: **2514 tests, 2514 pass, 0 fail**. Measure it again yourself.

Beyond the always-required assertions in §6:

- **The capstone tranche contract from section 1**, computed rather than listed, plus an explicit **zero double-releases** assertion across every lesson in the seed
- **Every one of the canDo's five clauses is exercised by a section**, asserted by name, because a capstone quietly losing one is invisible
- **Nothing is taught that a prerequisite already owns**, scoped to production surfaces rather than to every string, or the guard fires on legitimate context and gets deleted
- **The two answer-spread assertions**, exam and in-mission, separately
- **Every imported row resolves in the seed after the merge**, which matters more here than in any lesson so far because almost nothing you name is in the cut today
- **Seed parity that derives every figure from the authored source**

**Mutation-test before you claim it works.** Break the integration, release an item an earlier lesson already released, leak an A2 rule, drop a canDo clause, cluster four in-mission answers in one slot. `scripts/_routine_mutate.mjs` is a working harness to copy: it backs the seed up, mutates one thing at a time, asserts the named test goes red, and restores byte for byte.

---

## UNVERIFIED

- **That the 29 scenarios are single-topic** is inferred from each one sitting inside a lesson about that topic, not from reading all 144 turns. It is the load-bearing claim under the reframe. Read a sample before you build on it.
- **Which specific items a capstone should draw on.** 1,658 are in play and this brief does not pick them. That is the authoring job and it is the largest open question here.
- **Whether 22 to 26 sections is right for an A1 capstone.** Extrapolated from sons.09's 23, which is a sons-band lesson with a different job.
- **Whether `expressions-utiles` is the right binding.** It is the largest live candidate; it was not read row by row.
- **sons.09's 21 unreleased items were measured, not read.** The lesson documents no reasoning for them, so the contract in section 1 is inferred from behaviour rather than from a stated rule.
- **a1.24.l1 is seed-only as this brief is written**, so a publish would delete it. Not yours, and worth confirming it has landed in Postgres before you publish anything.

---

## What to report

- **the tranche contract**: how many items you showed without releasing, which lesson released each, and the measured double-release count
- **the theme decision**, and what it means for the A2 capstone
- **the IMPORTED / REUSED split**, and confirmation that every named row is in the seed after the merge
- the reframe you chose, why that one, and what you rejected
- **which of the canDo's five clauses got the most weight**, and why
- **what you deliberately did not re-teach**, by unit
- answer spread across both surfaces, exam and in-mission, as two figures
- test count before and after, with the before figure **measured rather than taken from this file**
- **whether the exam-task slot is still empty**, and what a first A1 exam task would need
- **anything you could not verify, said plainly.** A gap you name costs an hour. A gap you paper over costs a session, and this project has lost two that way.

Do not use AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the big one", "listen to the trap", "get those two right", "this is the part that pays", "here is the catch". No em dashes in authored learner-facing copy.
