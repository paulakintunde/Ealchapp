# a2.35 "Bilan A2" — build report

Built 2026-08-18 against `A2-35-BILAN-A2-PROMPT.md`. Trail seq 35 of 35, the A2
capstone, and the last thing in the band.

Applied to Postgres and merged into `seed.json`. Not published.

---

## 1. What shipped

```
a2.35.l1   "Bilan A2 : leçon par leçon"   5 sections · 34 rounds · 170 questions
             scene · goals · progressCheck · quiz · roundup      remediation ON
a2.35.l2   "L'examen A2"                  4 sections · 12 rounds ·  60 questions
             goals · progressCheck · quiz · roundup              exam: true
```

Both at `version: 1`, `itemIds: []`, no `deckTranche`, no sheets, no practice,
`features: ['assessment']`. **Not one `content_item` was inserted, updated or
deleted** (48,995 before and after, asserted inside the transaction), and no
theme was created: `bilan` and `revision` both still hold zero rows.

`unit a2.35` relinked to `['a2.35.l1', 'a2.35.l2']`, review first, because
`den.tsx` opens `lessonIds[0]`.

### The round count and question count actually shipped

**34 rounds, 170 questions in l1. Every unit got a round; none was dropped.**

The brief asked whether `a2.10.l2` should get its own round or be folded into
`a2.10`'s. **Folded, as the brief proposed**, and the fifth question of round 3
is l2's: *"Which of these does NOT take -iss- in the plural?"* with `partir`
against `finir`, `choisir` and `remplir`. That is the exact thing l2 exists to
answer, and giving the unit two rounds would have made the round count 35 while
the trail is 34, which is the sort of off-by-one a capstone should not ship.

**The exam stayed at 12 rounds and 60 questions**, and its rounds are grouped by
skill rather than by unit, following the `canDo`:

```
verbs in three tenses     x01 to x06     30 questions, half the paper
pronouns                  x07 to x09     15 questions
the everyday situations   x11, x12       10 questions
what modifies them        x10             5 questions
```

**The tenses are weighted.** x04, x05 and x06 are the passé composé arc:
15 of 60, a quarter of the paper, for five of the thirty-four units. Adjectives,
adverbs, prepositions and comparatives get one round of their own and appear
throughout the other eleven as the material being modified.

---

## 2. Where the format mix landed

Measured across all thirty-four A2 units' quizzes in `seed.json` on 2026-08-18,
and against `A2-TAIL-AUDIT.md` §2's Postgres measurement of 2026-08-17. The two
agree to within a point on every format from a band three units shorter, which
is the reason to trust either.

| format | a2.35 (230 q) | share | A2 band | audit §2 |
|---|---|---|---|---|
| mcq | 87 | **37.8%** | 37.2% | 38.2% |
| typeIn | 76 | **33.0%** | 33.1% | 32.0% |
| errorSpot | 39 | **17.0%** | 17.0% | 16.7% |
| listenChoose | 21 | **9.1%** | 9.5% | 9.7% |
| speak | 4 | **1.7%** | 1.6% | 1.7% |
| tapSilent | 3 | **1.3%** | 1.6% | 1.7% |

Every format is within 0.6 percentage points of the live band. The declared
tolerance is 5 points, asserted in both the batch and the test, so an edit that
turns the capstone into a multiple-choice test goes red rather than drifting.

**This is a deliberate departure from a1.30, and it is departure number one.**
a1.30 runs **103 mcq of 205, which is 50%**. The A2 band runs 37%, because most
of what A2 teaches is inaudible and is therefore assessed in writing. A
230-question capstone at a1.30's mix would have been materially easier than the
units it reviews.

### Departure two: not every round carries an ear question

`bilan-rounds.ts` states that each of its rounds runs a recognition question, a
production question and at least one of `listenChoose` or `speak`. **This build
could not hold that and says so rather than quietly dropping it.**

Nineteen of the thirty-four A2 units teach a contrast that is **silent by
construction**: participle agreement, the `-s` of `leurs`, `cet` against
`cette`, the `-x` of `nouveaux`, `le mien` against `les miens` in writing. An
ear question on any of those has no correct answer. So sixteen rounds carry a
`listenChoose` and three carry a `speak`, chosen where the contrast is genuinely
audible (`vient`/`viennent`, `prend`/`prennent`, `il vend`/`ils vendent`,
`heureux`/`heureuse`, and `il est mort`/`elle est morte`, which is the only
audible participle agreement in the fifteen être verbs). The remaining fifteen
rounds carry none.

### Departure three: the round ids carry both numbers

`r16-a2-05-passe-compose-avoir` is the sixteenth round and it is a2.05's. A2's
seq and its ids disagree far harder than A1's did, and the coverage check reads
the **id**, not the label, so a reworded label cannot make the check agree with
itself.

---

## 3. What I found stale in the thirty-four lessons while quoting them

This is the part the brief said is worth more than the lesson, and it is.

### 3.1 The band never settled on ONE name for the homophone list

The brief says to *"build the `HOMOPHONE_FORMS` list from all thirty-four
lessons' own lists"*. That is not one grep. **Thirteen lessons carry a list and
they call it five different things**, and three of the five hold something other
than a pair of surface forms:

```
HOMOPHONE_FORMS      a2.02 a2.06 a2.08 a2.10 a2.11 a2.12 a2.15 a2.24 a2.25
                     a2.33 a2.34
HOMOPHONE_GROUPS     a2.16 a2.22 a2.23
HOMOPHONE_PAIRS      a2.01   holds ITEM IDS, not forms
SUFFIX_HOMOPHONES    a2.17   holds SUFFIXES, not forms
SINGULAR_TRIPLES     a2.13   a paradigm slice, homophonous by construction
```

a2.01's ids were resolved against the corpus, a2.17's suffixes expanded onto the
adverbs the band prints, and a2.13's triples flattened. The union is 95 groups
in `bilan-a2-spread.ts`.

### 3.2 `pronoms-direct-corpus.ts` ships a homophone group that cannot fire

```ts
export const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  ["Je l'aime.", "Je l'aime."],     // <- two identical strings
  ...
```

Every guard in this band, including this one, fires only when the two forms
differ (`if (x !== y && opts[i].replace(x, y) === opts[j])`). **That group has
been inert since a2.06 shipped.** It is not carried into the union, and the test
asserts no group repeats a form so another one cannot arrive unnoticed.

Worth noting the shape of the mistake rather than the instance: a2.06's own
TEST file carries a copy of the list with that group removed, so the source and
the test have disagreed since the day it landed and nothing compares them.

### 3.3 Five grammar words are live on drawn learner surfaces across the band

Measured across every shipped A2 lesson's drawn surfaces:

| where | word | the string |
|---|---|---|
| `a2.28.l1` sections[5].cards[1].tip | partitive | "De la is the partitive and a1.29 owns it" |
| `a2.28.l1` round why | partitive | "with the partitive a1.29 owns" |
| `a2.05.l1` sections[18].questions[3].a | conjugate | "a little word you conjugate" |
| `a2.32.l1` sections[19].stats[0].v | referent | "three, one referent" |
| `a2.24.l1` round why | auxiliary | "an ending appearing with the same auxiliary" |

None is mine to fix and none is catastrophic. They are recorded because each
passed its own lesson's jargon walk, which means five separate JARGON lists each
happened not to hold the word its own lesson reached for.

### 3.4 A RAW walk over-reports jargon by a factor of five, and Corrections §13 does not say where to stop

This is the finding that changed how this build's own guard is written, and it
is the **mirror image** of the hole §13 records.

§13 says `prose()` drops `sub`, which holds prose on a `cardDeck` card, so run
the checks over a `display()` walk instead. It does not say what a `display()`
walk keeps OUT. A raw walk over the shipped band reports:

```
paradigm  13 hits   ALL of them: audio.recordingId `rec-a2-10-paradigm` (x5),
                    sheets[].sections[].id `sheet-endings-paradigm`
clitic    10 hits   ALL of them: a quiz round's targets[] `err-wrong-clitic`,
                    drills[].id `drill-pick-clitic`
```

**Twenty-three false positives and zero real ones.** None of those strings is
drawn anywhere. A guard built on a raw walk fails on content that is correct,
which is how a build comes to relax a guard that was working.

`bilan-a2-spread.ts` now defines `MACHINE_KEYS` and a `display()` that keeps
`sub` and drops `recordingId`, `id`, `targets`, `ref`, `clip`, `imageRef` and
the rest, with a test that probes all three behaviours. **That definition should
go into `A2-BRIEF-CORRECTIONS.md` §13**, because every lesson after this one
will write the same walk.

Related: `a2.20.l1`'s `overview.titleEn` is "Irregular Past Participles", which
a naive jargon list flags. It is the unit's own English name and
`content_units` requires it to match, so it is correct and any list must not
ban `participles` from `overview.titleEn`. Corrections §14.5 makes this point
about `adjective`; it holds for a unit title too.

### 3.5 Every `accept` list in the band carries dead entries

a1.30 and every A2 lesson list an accent-free twin beside the real answer:

```ts
accept: ['Enchanté', 'Enchante']
accept: ['J’ai mangé à midi', 'jai mange a midi']
```

`fold()` strips accents, case, punctuation **and all whitespace** before the
comparison, so both entries are one string and the second one accepts nothing
the first did not. **85 such entries were written into this build and then
stripped**, and the test now asserts that no `accept` list holds two entries
that fold to one.

They are not merely redundant. They make a question **look** as though it is
testing an accent, which no typed format can do, and that is the misreading
Corrections §5 exists to prevent.

### 3.6 Metro's transform cache genuinely does go stale on `seed.json`

Invariants §7 records that *"Metro is serving a stale bundle"* was a
misdiagnosis and the real cause was the AsyncStorage overlay. That fix is real
and this is a different thing: after the merge, the **host-served bundle** was
missing every new string while `seed.json` on disk held them.

```
seed.json on disk    "a2.35.l1"  3 hits
served bundle        "a2.35.l1"  0 hits     and a2.34's reframe present 25 times
```

`--clear` fixed it. The tell is the opposite of the AsyncStorage one: there, a
newly ADDED lesson appeared and an EDITED one did not; here, nothing new
appeared at all while everything old was correct. Worth adding to §7 so the next
author does not spend the hour re-reading `content.logic.ts`.

---

## 4. Claims in the brief measured against reality

| brief said | measured |
|---|---|
| Identity block: id, seq, title, sub, canDo, prereqUnitIds, `lessonIds: []` | **All correct, byte for byte.** First brief in this band with nothing wrong in its identity block. |
| "A2's shipped quizzes run mcq 379 · typeIn 317 · errorSpot 166 · listenChoose 96 · tapSilent 17 · speak 17 (audit §2)" | Still true of the audit's snapshot. The band has since grown to 403/358/184/103/17/17 with a2.08, a2.33 and a2.34. Shares moved by under a point. |
| "`bilan` and `revision` both hold 0 rows" | Correct, and neither was created. |
| "Mirror a1.30's four-file split: the lesson bodies, the review rounds, the exam rounds, and **the spread check that proves coverage**" | **The fourth file is not a coverage check.** `bilan-spread.ts` is answer-slot spreading and nothing else; coverage lives in a1.30's test. `bilan-a2-spread.ts` does both, which is what the sentence describes and what a 34-unit capstone needs. |
| "Check for a collision with the existing `author-bilan-batch.ts`" | It exists, it is a1.30's, and there is no collision: mine is `author-bilan-a2-batch.ts` and is scoped to the slug prefix `a2.35.`. Same for the merge and the four data files. |
| "a1.30.l1 ships 145 and is the closest evidence" for whether 170 renders | 145 is right. See §6. |

The brief was right about a great deal more than it was wrong about, which is a
first for this band, and the reason is that it was written after `A2-TAIL-AUDIT.md`
had measured the things earlier briefs guessed at.

---

## 5. The tests, and which mutations found a weakness

`ealch-v2/src/content/a2-35-bilan.test.ts`, **57 tests**.

Suite before: **4912**, measured 2026-08-18 rather than carried over.
Suite after: **4972**, 0 failing. `npx tsc --noEmit` in `ealch-v2` is clean.

One existing test was widened deliberately:
`lesson-contract.test.ts` asserted that exactly `a1.30.l1, a1.30.l2` carry
`features: ['assessment']`. Its own comment says *"widen this list deliberately
when a B1 or B2 bilan lands"*, and this is that. It now names four and says
when and why in the body.

### Mutation results

**Eighteen mutations, eighteen red**, applied to a copy of `seed.json` and
restored byte for byte afterwards. Four were spot-checked to confirm they failed
the assertion they were written for rather than a collateral count:

| mutation | assertion that fired |
|---|---|
| give a2.05 two rounds and a2.20 none, counts unchanged | *every A2 unit seq 1 to 34 is named by exactly one review round* |
| swap two rounds out of seq order, counts unchanged | *the rounds run in seq order, not id order* |
| let an exam round name its unit, counts unchanged | *no exam round names a unit, by id or in words* |
| offer `parle` against `parlent` in an ear question | *no listenChoose offers two members of one homophone group* |

The other fourteen: dropping a round, dropping a `why`, adding a second quiz
section, putting the review into exam mode, putting a grammar word in `intro`,
giving a round two targets, claiming a corpus row, taking the clip off an ear
question, making an errorSpot correction invisible to `fold()`, asking for a
conditional form, dropping the assessment flag, letting a review round stop
naming its unit, and turning thirty typeIn questions into mcq.

**Corrections §9 predicts that roughly two mutations in a dozen find a weakness
rather than confirming a strength. None of these eighteen did, and that is worth
being suspicious of rather than pleased about.** The honest reading is that the
mutations were written after the assertions, by the same person, and so tested
what the assertions were already looking at. Two things did go wrong and were
caught by the batch rather than by a mutation, which is the same signal one
level up:

1. **The ratio guard was comparing a word to a phrase containing it.** The first
   pair was `past form` against `past`, and the boundary test matches the `past`
   inside `past form`, so every plain use was counted as technical. It read
   11 against 22 on a lesson whose plain phrasing was winning. The second
   attempt, `past form` against `participle`, was a **tautology**, because
   `participle` is on the JARGON list and so is already zero: a guard comparing
   a constant to itself, which is a2.29's finding in a new place. The pair that
   works is `describing word` against `adjective`: both live in the band,
   neither banned, neither containing the other. **It then caught this build at
   1 against 4** and four `why` strings were reworded.

2. **The diacritic guard was measuring the wrong thing.** Its first form banned
   the five diacritic words from any open-format question, and it fired on
   « Je préfère celui », a legitimate `errorSpot` whose correction is `celui-ci`
   and whose accent is incidental. The form that works is mechanical and
   general: **an `errorSpot` whose prompt and answer fold to one string is
   unanswerable**, because the learner can retype the mistake and be marked
   right. That is what "no typed surface can test an accent, a cedilla, a
   capital or a space" actually means in code, and it now covers all 39.

---

## 6. Whether 170 questions held up on a device

**Verified on a Pixel 6 over USB, Metro 8082.** Both halves, not one.

What was confirmed:

- `a2.35.l1` cover: "A2 · LEÇON 35", "Bilan A2 : leçon par leçon", the intro
  draws in full without clipping.
- The roundup: a long paragraph at no `layer` renders complete, all four points
  visible, nothing cut.
- The l1 quiz: header reads **"UNIT 1 · REGULAR -ER VERBS"**, so the round label
  IS visible before the learner answers, which is precisely why the exam must
  not carry one. The `why` renders in full under the answer with "See this
  again".
- `a2.35.l2`: header reads "A2 · EXAMEN", round label reads **"SAYING WHAT
  HAPPENS"** and names no unit.
- **`exam: true` confirmed on the device.** A wrong pick outlines both the pick
  and the correct option and shows **no `why` and no jump** — only Continue.
  That is the one behaviour separating the two lessons and it works.
- `typeIn` renders its input and shows the canonical answer when wrong.
- `listenChoose` renders audio-first with the options hidden behind "Listen
  first", so the spellings cannot answer the question before the ear does.

**What was NOT verified, said plainly: whether 170 questions is a tolerable
sitting.** Four of the exam's sixty were answered by hand and one of the
review's hundred and seventy. Nothing about the RENDER breaks at 170 — the quiz
pager, the progress bar and the round headers all behave — but pacing is not
something tapping through five questions can establish, and it is a product
judgement rather than a layout one.

**The build ships 170 rather than the fallback 136.** The brief said to cut to
four per round rather than drop units if 170 proved too long. Nothing found on
the device argues for cutting, eleven rest points break the run every three
rounds (the checkpoint rule caps a stretch at 22 screens and fifteen questions
sits inside it), and the fallback remains available as a later edit that costs
one line per round. Coverage was the point and coverage is intact.

---

## 7. Wiring

```
ealch-admin/scripts/data/bilan-a2-lesson.ts      the two lesson bodies
ealch-admin/scripts/data/bilan-a2-rounds.ts      34 review rounds, 170 questions
ealch-admin/scripts/data/bilan-a2-exam.ts        12 exam rounds, 60 questions
ealch-admin/scripts/data/bilan-a2-spread.ts      spreading, homophones, coverage,
                                                 format mix, display(), JARGON
ealch-admin/scripts/author-bilan-a2-batch.ts     content:bilan-a2
ealch-admin/scripts/merge-bilan-a2-into-seed.ts
ealch-v2/src/content/a2-35-bilan.test.ts         57 tests
ealch-v2/src/content/lesson-contract.test.ts     assessment list widened to four
ealch-admin/package.json                         "content:bilan-a2"
```

`seed.version` untouched at 53. `content:parity` reports the one pre-existing
divergence (`b2.01.l1`, database-only, `in_review`) and says nothing in the seed
is at risk.

**Publish dry-run is GREEN**, v53 → v54, and the gate that matters reports:

```
✓ lesson-has-practice: every teaching lesson feeds the SRS
  (4 assessment lesson(s) exempt: a2.35.l1, a2.35.l2, a1.30.l1, a1.30.l2)
```

The `+3 lessons / +32 items` in that diff is the snapshot being behind the
database, not this build: a2.34 landed after v53 and this unit writes no items.
Publishing was not asked for and was not done.

---

## 8. What is unresolved, and for whom

- **A2 is complete.** Thirty-five units, thirty-six lesson bodies, all shipped.
- **§3.4's `display()` definition belongs in `A2-BRIEF-CORRECTIONS.md` §13.**
  Every lesson after this one writes the same walk and there is now a measured
  answer to what it should exclude.
- **§3.2's degenerate homophone group in `pronoms-direct-corpus.ts`** is a2.06's
  to fix or to leave. It is inert either way, and the fact that a2.06's test
  carries a divergent copy of the same list is the more interesting half.
- **The five jargon leaks in §3.3** belong to a2.05, a2.24, a2.28 and a2.32.
- **Whether a learner sits 170 questions** is not a question a device can answer
  and is not a question this build should answer alone.
