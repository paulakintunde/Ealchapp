# Build a2.23 "Pronominaux au passé composé"

Trail seq **20** of 32. The last lesson of batch 2 and the capstone of the past-tense arc:
it composes three rules the learner already has and adds one.

**Two prerequisites, both of which must be shipped before you start.** Do not build this
against briefs; build it against the lessons as shipped.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.22` as shipped** (seq 19, the reflexive pronoun), **`a2.21` as shipped** (seq 18,
`être` and agreement — quote its agreement rule), **`a2.05`** (formation and negation),
and **`a2.20`** (the participles).

**And read `A2-BRIEF-CORRECTIONS.md` before you read the rest of this file.** It
holds the twenty-one claims the five shipped A2 briefs got wrong, the measurements
that replace them, and the two holes in the guards you are about to copy. The
sections below have been corrected against it; the ones that were measured are
marked.

---

## Identity

**Measured against Postgres 2026-08-12. This block replaces the one this brief
originally carried, which had `title` and `sub` swapped and a `sub` that exists
nowhere in the database — the same error all four shipped A2 briefs made.**

```
a2.23   seq 20
  title:  Pronominal Verbs in the Passé Composé
  sub:    Pronominaux au passé composé
  canDo:  Can put reflexive verbs into the past with être and agree them correctly
  prereqUnitIds: ['a2.22', 'a2.21']
  lessonIds:     []          <- first build, version starts at 1
```

Use it as it stands. Re-run `scripts/_a2_preflight.ts` if you are reading this
more than a few days after the date above.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.23 --theme routine,verbes
pnpm corpus:probe --tokens "je me suis levé,elle s'est levée,ils se sont couchés,elle s'est lavé les mains,je ne me suis pas levé"
```

### What the probe already returned, measured 2026-08-12

**You are the last lesson of batch 2 and you depend on three that are not
built yet**: `a2.22` (seq 19) for the reflexives, `a2.21` (seq 18) for être as
auxiliary, and `a2.05`/`a2.20` (seq 16, 17) for participles. **Build order is
not negotiable here.**

Probe as `a2.22` does, and read whatever it settled about the shape reflexives are
stored in. Do not re-derive it.

**The agreement rule is this lesson's Owns and it is the hardest in A2**: the
participle agrees with a preceding direct object, so `elle s'est lavée` agrees and
`elle s'est lavé les mains` does not. **`fold()` keeps a final `-e` and
`-s`**, so agreement IS testable by `typeIn` — Corrections §5. That is unusual
for this band and it should shape your quiz.

Read `a2.22`'s corpus header for what it imported from `routine` and what it authored. You
import the same items; you do not author a second set.

---

## The teaching problem

### Owns: the composition

Nothing here is new except one rule. Everything else the learner already has:

```
from a2.22   the reflexive pronoun, agreeing with the subject
from a2.21   être as auxiliary, and participle agreement
from a2.05   the two-part structure and where negation goes
from a2.20   the participle forms
new          reflexives ALWAYS take être, even ones whose base verb takes avoir
```

`laver` takes `avoir` (`j'ai lavé la voiture`). `se laver` takes `être`
(`je me suis lavé`). **The reflexive pronoun changes the auxiliary**, and that is the one
fact this lesson adds.

**Build it as a composition lesson.** The learner assembles four owned rules into one
form, and a mission that walks the assembly step by step is stronger than any drill:
subject, pronoun, auxiliary, participle, agreement. That is what the capstone position is
for.

### The reframe candidate

> **A reflexive verb always takes `être`, whatever the plain verb takes.**

Record what you rejected. Anything phrased as "reflexives are conjugated with être in the
passé composé" is a rule about the tense; the version above is a rule about the pronoun,
and the pronoun is what the learner can see.

### Where everything lands

```
Je   ne   me   suis   pas   levé.
     ne        aux    pas
          pronoun before the auxiliary
                            participle last, agreeing
```

Four positions and the learner has met all four. Show the slot diagram once, in one
section, and let the assembly missions fill it.

---

## The trap, and it is the hardest judgement call in batch 2

**The participle agrees only when the reflexive pronoun is the direct object.**

```
Elle s'est lavée.               she washed herself       agrees
Elle s'est lavé les mains.      she washed her hands     does not agree
```

In the second, `les mains` is the direct object and `se` is indirect, so there is nothing
for the participle to agree with. This is genuinely difficult, it is inaudible, and it
depends on a direct/indirect distinction the learner does not formally have until `a2.24`
(seq 22), two lessons after you.

**Decide, and report the decision:**

1. **Teach the simple case, name the exception receptively.** One mission showing that a
   following direct object stops the agreement, without teaching why. The learner can
   recognise the pattern and produce the common case correctly.
2. Teach the full rule, which requires pre-empting `a2.24`.
3. Say nothing, and ship a lesson that gives wrong output on a frequent sentence type.

**Take option 1.** Option 3 is not available — `se laver les mains` and `se brosser les
dents` are exactly the routine verbs `a2.22` taught, so the learner will hit it in week
one. Option 2 costs `a2.24` its lesson.

Flag for `a2.24` that this exception was named receptively and is theirs to explain.

Second trap: **agreement is inaudible again.** `levé`, `levée`, `levés`, `levées` are one
sound. `a2.21` quoted `a2.01`'s reframe for this; **quote the same string**, do not write
a third version.

---

## What is left to neighbours

- **Reflexive present tense is `a2.22`, shipped.** One recap.
- **`être` agreement is `a2.21`, shipped.** **Quote its agreement rule verbatim**; it was
  told to word it so you could inherit it.
- **Direct and indirect objects proper are `a2.06` and `a2.24`** (seq 21, 22). Not here,
  beyond the receptive naming above.
- **Reciprocal reflexives in the past** (`ils se sont parlé`, which does not agree) follow
  the same indirect-object logic. If `a2.22` left reciprocals out, leave them out.
- **The imperfect** and any contrast between past tenses is beyond A2's first twenty.

---

## Layout and scene

- **The slot diagram belongs on one screen**, all four positions with a full negative
  example. **This is the layout the test must assert**, and it is what makes this a
  composition lesson rather than a fourth past-tense lesson.
- **`elle s'est lavée` and `elle s'est lavé les mains` belong side by side**, with the
  direct object visible in the second. Second required layout, whichever option you took:
  even the receptive version needs the pair on one screen.
- **`j'ai lavé la voiture` and `je me suis lavé` belong side by side**, showing the
  auxiliary flipping with the pronoun. Third required layout, and it is the Owns.
- One `table`. You are the fourth compound-tense lesson in five and restraint matters more
  here than anywhere.
- `dictation` as the heaviest production section: agreement is inaudible, so writing it is
  the only proof.
- **`groupDrill` for the assembly**, against the clock. Four rules composed under time
  pressure is what proves they are internalised rather than looked up.

**The scene:** the A2 register. Someone telling a story about their morning who assembles
three of the four pieces and stalls on the fourth, or picks `avoir` because the plain verb
takes it, and the sentence comes out as something the listener has to re-parse.

---

## Quiz notes

- **`typeIn` for the whole form**, subject through participle. This is the only format
  that tests composition; every recognition format tests one piece.
- **`errorSpot` for `avoir`** (`je m'ai levé`), the single most likely real error.
- **`errorSpot` for pronoun position** (`je suis me levé`).
- mcq for agreement with the subject's gender and number fixed in the stem.
- **No ear question can test agreement.** All forms are identical. Say so in your report.
- **No question may require explaining the direct/indirect distinction** if you took
  option 1. Recognition of the pattern is testable; the reason is not yours.
- **One quiz per lesson.** As the arc's capstone the temptation to add a second is real.

---

## Wiring

```
scripts/author-pronominaux-passe-batch.ts       content:pronominaux-passe
scripts/merge-pronominaux-passe-into-seed.ts
scripts/data/pronominaux-passe-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-23-pronominaux-passe.test.ts
```

Ids from your batch-2 ledger block. Row count after the apply.

Your verbs are `a2.22`'s verbs and your participles are `a2.20`'s. **You should author
almost no corpus**: import from both and record every id with its source in the corpus
header. If your id block goes unused, that is the right outcome.

---

## Your test

- **The slot diagram appears in one section with all four positions and a negative
  example.**
- **`elle s'est lavée` and `elle s'est lavé les mains` appear as a pair in one section**,
  whichever option you took.
- **`j'ai lavé` and `je me suis lavé` appear as a pair in one section**, showing the
  auxiliary flip.
- **`avoir` is never the auxiliary of a reflexive** in any authored correct sentence.
  Permit it inside an `errorSpot` item as the error and scope the assertion to allow that
  one location.
- **`a2.21`'s agreement wording is quoted verbatim**, and **`a2.01`'s reframe via
  `a2.21`**. Assert both strings; paraphrases must go red.
- **The negation wording is the same string as `a2.19` / `a2.05` / `a2.21` / `a2.22`.**
  Five lessons, one rule. Assert it.
- **If you took option 1, the direct/indirect distinction is not explained**, scoped to
  production surfaces, and the exception is present receptively.
- **Every verb and participle used is an imported id**, asserted by id.
- Every dictée item carries the `dictation` drill, checked against Postgres, not the seed.

**Mutation-test**: use `avoir`, move the pronoun after the auxiliary, agree the
`les mains` case, paraphrase an inherited string, drop the auxiliary-flip pair.

---

## Settled before you start

- The identity block, above.
- `lessonIds: []`. First build, version 1.
- Agreement is testable by `typeIn` because `fold()` keeps a final `-e` and
  `-s`. Most A2 spelling distinctions are not; this one is.

## Still unverified

- **Whether `a2.22` and `a2.21` are both shipped.** They are hard prerequisites and this
  lesson cannot be built against briefs. If either is unbuilt, stop and say so.
- **`a2.21`'s exact agreement wording and `a2.01`'s exact reframe.** Read the shipped
  lessons.
- **Whether the five negation statements agree with each other.** If they do not, report
  it rather than picking one.
- **Whether the direct-object exception belongs in A2 at all.** Nobody has decided; this
  brief recommends receptive naming.
- What `a2.22` did about reciprocals.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the direct-object agreement decision**, with reasoning. It is the largest judgement
  call in batch 2 and `a2.24` needs to know what was left to it.
- **whether the five negation statements across `a1.18`, `a2.19`, `a2.05`, `a2.21` and
  `a2.22` are actually one string.** You are the fifth and the last to find out. If they
  have drifted, say so plainly: that is a finding about the whole arc, not about this
  lesson.
- how much you imported versus authored. "Almost nothing authored" is the expected answer.
- whether the composition framing held, or whether the lesson read as a fourth past-tense
  drill
