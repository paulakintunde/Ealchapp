# a2.10.l2 build report — Les autres verbes en -IR

The second lesson of unit a2.10. Closes the curriculum hole reported in
`A2-10-BUILD-REPORT.md` §9. Built 2026-08-11, applied to Postgres and merged into
`seed.json`. Not published.

Scoped in `A2-10-L2-VERBES-IR-IRREGULIERS-SCOPE.md`; the Den rider is
`A2-10-L2-DEN-ROUTE-PROPOSAL.md`.

---

## 1. What shipped

```
a2.10.l2  "Les autres verbes en -IR"   seq 2 within unit a2.10   v1
23 missions · 26 authored rows fr.a2.verbes.461..486 · 12 verbs imported, 0 authored
2 respelling repairs · 0 drill additions · 8 dictée targets
74 new tests, 11 mutation-tested.  Suite 2877 -> 2951, 0 fail.
```

It is a **second lesson in an existing unit**, not a new unit. `a1.30` is the only
precedent and it holds: `lessonsOfUnit` sorts by `Lesson.seq`, and `lesson.tsx`'s
`nextL` walks band order, so finishing a2.10.l1 hands the learner straight in.

---

## 2. The Owns is a sort, and neither paradigm is new

Split by **sound** rather than by spelling, the twelve are two families and each
runs a rule the learner already holds:

```
THE SHEDDERS (6)     il part /paʁ/  ·  ils partent /paʁt/
  partir sortir dormir servir sentir mentir
  a2.10.l1's rule exactly. The plural puts a sound on the end — a returning
  consonant instead of an inserted -iss-, but the same thing at the ear.

THE -ER ENDINGS (5)  il couvre /kuvʁ/  ·  ils couvrent /kuvʁ/
  ouvrir offrir couvrir découvrir souffrir
  a2.01's rule exactly. Four spellings, one sound.

NEITHER (1)          il court /kuʁ/  ·  ils courent /kuʁ/
  courir: the shedders' endings on a stem with no consonant to shed.
```

Both earlier reframes are **quoted verbatim**, imported from those lessons' own
terms files so a rewording there moves this lesson rather than leaving it
misquoting a lesson the learner just finished. The thesis —
`Two families, and you already know both rules.` — is carried in three sections.

So nothing new has to be learned about the ear. **The new skill is the decision**,
and the reframe is the instruction that makes it: `Check the family before you
build.` Nine sections.

Weight: paradigm acts 2 and 2, **the sort act 6**.

---

## 3. THE FINDING THAT CHANGED THE DESIGN: liaison

The obvious paradigm verb for the -ER-ending family is `ouvrir`, far the most
common of the five. **It cannot be, and working out why is the sharpest thing in
the lesson.**

```
il ouvre      /i.luvʁ/     the l of `il` links onto the vowel
ils ouvrent   /il.zuvʁ/    the SILENT s of `ils` wakes up as a /z/
```

They are **not** identical. For a vowel-initial verb the plural is audible after
all — not from the verb, from the link. a2.01 could state four-spellings-one-sound
with `travailler` because a consonant blocks liaison; state it with `ouvrir` and it
is false.

So the paradigm runs on **`couvrir`**, where the claim is exactly true, and the
vowel-initial case gets two corpus rows and a mission of its own (`s11-waking`).
That is not a caveat bolted on: **two of the five are vowel-initial and they are
the two a learner meets first**, so it is the case they will actually hit. It also
connects straight back to sons.10.

Had I not checked, the lesson would have taught a false claim on its headline verb.

---

## 4. And the spelling only half-predicts the sort — measured

| ending | predicts? | evidence |
|---|---|---|
| `-vrir` / `-frir` | **YES** | all five -ER-ending verbs; no -iss- verb ends this way |
| `-tir` | **NO** | `ralentir` takes the -iss-, `sentir` does not |
| `-rir` | **NO** | `guérir` takes it, `courir` does not |

Both counterexamples are inside **a2.10.l1's own ten**, so `s10-nopredict` proves
it against l1's **actual published rows** (`fr.a2.verbes.202`, `.198`) rather than
authoring twins. The contradiction is with the learner's memory of last lesson, not
with a fresh example built to make the point. The test asserts those exact rows are
on the screen.

One reliable tell, one memorised list of six. Six is the price and they are six a
learner needs in week one.

---

## 5. The error form: the guard from l1, inverted

a2.10.l1 banned `ils partissent` from **every** surface including commonErrors,
because a card that shows an error only works when the learner holds the form that
replaces it, and nobody in l1 held `ils partent`.

**This lesson teaches it**, so the guard inverts:

- **Banned on every production surface** (quiz answers, accepts, *all* options,
  scenario turns, decks, drill answers, groupDrill checks).
- **REQUIRED on a reject surface** — the scene's failing choice, the break card,
  commonErrors, an errorSpot stem. A lesson that exists to stop an error and never
  shows it has not met the learner where the mistake happens.

Both halves are asserted, in the batch, the merge and the test. One consequence:
`couvrissent` was my first distractor in a groupDrill check and came out — a
closed-question option **is** a production surface, because the learner weighs all
four and a non-word weighed four times starts to look plausible.

---

## 6. Corpus

26 authored rows, `fr.a2.verbes.461..486`, block `.461..500` allocated above the
whole of batch 1's reservation so it cannot collide with a held block.

```
shed      6   the partir frame, all six persons
ercase    6   the couvrir frame, all six persons
liaison   2   ouvrir, where the s of ils wakes up
sort      4   sentir and courir, the halves that contradict l1's endings
apply     8   the twelve used by a person, across all seven persons
```

**The frame words are chosen by `dicteeMode`, not by taste.** `tôt` for the
shedders and `tout` for the -ER family, because every paradigm row has to be able
to be a dictée target and word tiles hand a spelling over pre-spelled. `tôt` is
**also a2.10.l1's frame word, deliberately**: `Il finit tôt.` beside `Il part tôt.`
is the cross-lesson claim in two sentences a learner can hold side by side.

Two equalities the whole lesson rests on, asserted as equalities and not as
presence:

- **the shedders' singular triple** — `je pars / tu pars / il part` are one string
  after the pronoun (`par TOH`), which is a2.01's fact still holding
- **the -ER family's silent quartet** — `je/tu/il/ils couvre(s|nt)` are one string,
  and the il/ils pair is identical **in full**

And the guard that would catch the lesson collapsing: **one pair must be audible
and the other silent.** If they ever matched, the sort would have nothing to sort.

All twelve verbs imported, none authored, all already carrying a `flashcard` drill
(measured by the manifest, so `DRILL_ADDITIONS` is empty). Two nasal repairs:
`sentir` `sahn-TEER`→`sahⁿ-TEER`, `mentir` `mahn-TEER`→`mahⁿ-TEER`. `partir`
deliberately takes `verbes-essentiels.040` and not `fr.a2.verbes.014`, which is the
minority `pahr-TEER` variant — not repaired, not displayed.

---

## 7. The unit changes, made deliberately

**`canDo` widened.** a2.10 promised only what l1 delivers. It now reads:

> Can conjugate regular -ir verbs, hear where the -iss- belongs, and tell them
> apart from the -ir verbs that take no -iss- at all

a2.10.l1's batch, merge and test each asserted the old string byte for byte. All
three were updated **in the same change**, and so was the spine — see §9.

**`lessonIds` appended, not replaced.** l1 stays at index 0, because `den.tsx:169`
indexes rather than sorts. The merge asserts that and refuses to write otherwise,
and it also proves **a2.10.l1 comes out byte-identical**.

**The tag differs from l1's.** `A2 · LEÇON 03 · SUITE`. `lessonEyebrow` computes
the same string for both lessons of a unit and that is correct — it answers "where
am I in the track". `lesson.tsx` uses the raw `tag` for the in-lesson header, which
is where they must differ, and a1.30.l2 is the precedent. The batch asserts the tag
**starts with** the computed eyebrow, so a re-seq still fails loudly, **and** that
it is not equal to it, so the two lessons can never become indistinguishable.

---

## 8. Gates

```
baseline (after the spine work)   tests 2877   pass 2877   fail 0
after                             tests 2951   pass 2951   fail 0   (+74)
npx tsc --noEmit  ealch-v2        clean
npx tsc --noEmit  ealch-admin     clean
pnpm content:parity               exit 0, one PRE-EXISTING divergence (b2.01.l1)
fr.a2.verbes                      176 before, 202 after — 176 + 26 and nothing else
seed items                        8649 -> 8687 (26 authored + 12 carried)
seed.version                      untouched at 25
a2.10.l1                          byte-identical, asserted by the merge
```

### The eleven mutations, all confirmed red

| mutation | assertion that fired |
|---|---|
| shedder pair two rows apart | THE SHEDDER PAIR IS ADJACENT AND AUDIBLY DIFFERENT |
| -er pair stops being identical | THE -ER PAIR IS ADJACENT AND EXACTLY IDENTICAL |
| paraphrase a2.01's reframe | AND BOTH ARE ON THE OPENING CARD |
| paraphrase a2.10's reframe | AND BOTH ARE ON THE OPENING CARD |
| `ils partissent` into a quiz option | NO OVER-GENERALISED FORM REACHES A PRODUCTION SURFACE |
| remove it from every reject surface | BUT AT LEAST ONE IS CONFRONTED ON A REJECT SURFACE |
| conjugate venir in the scenario | venir, tenir and mourir are named and conjugated nowhere |
| l2 becomes `lessonIds[0]` | den.tsx opens lessonIds[0], so l1 must be first |
| revert the unit canDo | the unit's canDo was widened to cover both lessons |
| drop the liaison z | its pair really is audible, with the z in the respelling |
| l2 claims `seq: 1` | THE REAL lessonsOfUnit ORDERS THEM l1 THEN l2 |

**Two of those mutations found real weaknesses rather than confirming strengths.**
The two reframe mutations initially fired only on the canonicalJson check, because
both reframes are also quoted in the reference sheet — so a paraphrase on the
opening card left the seed-wide `includes` green. The assertion was rewritten to
require them **on the opening card**, where the comparison is actually made.

The `l2first` mutation also exposed a harness limit worth recording: the merge
**refuses** to repair a wrong `lessonIds` order rather than silently fixing it,
which is correct behaviour and meant the harness could not self-restore. The seed
was repaired by hand and re-merged; `git checkout seed.json` was not used.

---

## 9. The spine caught the canDo change immediately

Within minutes of applying, the full suite went red on **`spine-drift.test.ts`**,
the guard built earlier the same session:

```
✖ EVERY UNIT AGREES ON seq, title, sub AND canDo
  1 field(s) drifted. Running the spine script would overwrite the shipping curriculum.
```

That is the guard doing exactly what it was built for, on its first real
opportunity, roughly an hour after it was written. The spine's a2.10 `canDo` was
widened to match and the suite went green. Without it the script would have gone
stale again the same day it was reconciled.

---

## 10. Device verification — Pixel 6

**Host half.** Bundle pre-built and served (23 MB, HTTP 200); all 14 probe strings
present, all 18 section types have a renderer `case`.

**Device half, by screenshot:**

| screen | result |
|---|---|
| mission list | 23 missions, correct titles and frSubs, **both** TABLEAU missions (05, 07) |
| in-lesson header | **`A2 · LEÇON 03 · SUITE`** — the distinct tag working, and distinguishable from l1's |
| mission 5, shedders | all six rows above the fold; `il part / nothing at the end` and `ils partent / a T` **adjacent**, each with its own chevron |
| mission 7, -ER endings | all six rows above the fold; **four consecutive `nothing at the end`** rows, which is the quartet |
| the two side by side | the "What you hear" columns are the lesson: `…/a T/par-tohⁿ` against `…/nothing/koo-vrohⁿ` |

**Not verified on device:** the dictée keyboard, the mic mission, the quiz end to
end, and — importantly — **the l1 → l2 hand-off through l1's result card**. That
last one is the mechanism the whole design rests on; the code path is read and
asserted through the real `lessonsOfUnit`, but nobody has walked it on a phone.
Named rather than papered over.

---

## 11. Anything I could not verify, plainly

- **l2 is reachable by finishing l1 and by nothing else.** `den.tsx:169` opens
  `lessonIds[0]`. A learner who has already finished l1 cannot return to l2 from
  the Den. Rider 1 of the scope; proposal written, **no app code changed**, per
  instruction. If it does not land, this is invariants §1's eighth entry.
- **The l1 → l2 hand-off is unwalked on a device.** §10.
- **No audio exists.** The one-take constraints in §6's recordings are briefs to a
  studio and unverifiable by anybody today, including whoever delivers the clip.
  Three of them carry opposite instructions (the shedder pair must differ, the
  quartet must not, the liaison pair must differ **only** in the link) and getting
  one wrong inverts a mission.
- **`mourir` remains owned by no unit.** Excluded deliberately: its stem vowel
  moves (`je meurs` / `nous mourons`), a third mechanism. It is named on the
  hand-over card as having no home, which is the honest state.
- **`souffrir` is a b1 row** (`fr.b1.verbes.054`), the only one that exists. A
  row's level is where it was authored, not who may reference it, but it is the one
  imported row outside a1/a2/sons.
- **Two of the twelve carry competing respellings elsewhere** (`partir` has
  `par-TEER` and `pahr-TEER`; `dormir` has `dor-MEER` and `dawr-MEER`). Variants,
  not violations, so untouched.
