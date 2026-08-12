# Build a2.21 "Le passé composé avec être"

Trail seq **18** of 32. The lesson where a verb starts agreeing like an adjective, and the
payoff of `a2.01`'s reframe seventeen lessons earlier.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.05` as shipped** (your prerequisite, which stated that `avoir` participles do not
agree — you are the other side of that contrast), **`a2.20` as shipped** (which flagged
which of its participles take `être`), **`a2.03`** (agreement), and **`a2.01`** (the
silent-agreement reframe you are about to pay off).

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
a2.21   seq 18
  title:  The Passé Composé with Être
  sub:    Le passé composé avec être
  canDo:  Can pick être as the auxiliary where French requires it and agree the participle
  prereqUnitIds: ['a2.05']
  lessonIds:     []          <- first build, version starts at 1
```

Use it as it stands. Re-run `scripts/_a2_preflight.ts` if you are reading this
more than a few days after the date above.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.21 --theme verbes,verbes-essentiels
pnpm corpus:probe --tokens "je suis allé,elle est allée,ils sont partis,elles sont venues,je suis né"
```

### What the probe already returned, measured 2026-08-12

**All fifteen être-verbs exist. You author none of them.**

```
aller · venir · partir · sortir · monter · descendre · rester · tomber
naître · mourir · entrer · rentrer · retourner · arriver · passer      all present
```

**Six carry a nasal that is wrong, and four of those the checker cannot see:**

```
monter      mohn-TAY        ⚠ invisible   descendre   day-SAHN-druh   ⚠ visible + schwa tail
tomber      tohn-BAY        ⚠ invisible   entrer      ahn-TRAY        ⚠ visible
rentrer     rahn-TRAY       ⚠ visible     (fr.a2.verbes.016 already holds rahⁿ-TRAY)
```

`a2.11` already repaired `fr.a1.transports-quotidiens.045` (`descendre`) to
`day-SAHⁿDR`. Import that row, not one of the other two.

**`a2.11` (seq 4) recorded that no unit body names `descendre`'s auxiliary
split.** Corrections §7 explains why that finding is weaker than it reads: a unit
body has no content manifest, and **your canDo covers it by topic**. You own it.
Say so, and close the loop `a2.11` opened.

**`a2.10.l2` teaches `partir`, `sortir` and the shedders**, and `a2.11`
teaches `descendre` in the present. Both are shipped. Read them: the present-tense
paradigms arrive already taught and re-teaching them spends missions on last month.

Read `a2.20`'s corpus header for the participles it flagged as `être`-taking. Import them;
do not re-author.

---

## The teaching problem

### Owns: agreement, on a verb

```
il est allé          elle est allée
ils sont allés       elles sont allées
```

**This is the first time in the product that a verb agrees.** Seventeen lessons of
conjugation have trained the learner that verbs change for person, and now the participle
changes for gender and number instead, exactly like an adjective. Name `a2.03` and say so
directly: this participle behaves like an adjective, so agree it like one.

And the payoff: **all four forms sound identical.** `allé`, `allée`, `allés`, `allées` are
one sound and four spellings, which is precisely `a2.01`'s reframe from seq 1.

**Quote `a2.01`'s reframe verbatim and name it by unit id.** This is the bookend the
doctrine (§B.7) asks for, seventeen lessons apart, and it is the strongest structural
moment available anywhere in A2. A learner who sees the first lesson of the level explain
the eighteenth has been given a reason to trust that the course is one thing.

### The reframe candidate

> **With `être`, the participle behaves like an adjective.**

Covers auxiliary choice and agreement in one rule. Record what you rejected: "some verbs
take être" states the fact without giving the learner anything to do.

---

## DR MRS VANDERTRAMP is a crutch, and say so

The mnemonic is in the `sub` so it ships. It is also not a pattern, it is a spelling
accident in English, and a learner who only has the mnemonic cannot decide about a verb
that is not in it.

**Teach the real pattern beside it: verbs of coming, going, arriving, leaving, rising,
falling, being born and dying.** Movement and change of state. Then give the mnemonic as
the memory aid it is. A learner with the pattern and the mnemonic is better off than one
with either.

---

## The traps

**One: several take `avoir` when they have a direct object.**

```
Je suis sorti.               I went out              être
J'ai sorti la poubelle.      I took the bin out      avoir
```

`sortir`, `monter`, `descendre`, `passer`, `rentrer`, `retourner` all do this.

**Decide whether this belongs in A2 at all and report the decision.** It is real, it is
frequent enough to meet, and it doubles the difficulty of the auxiliary choice. Two
defensible answers: teach it as a named group of six with the direct-object test, or name
that the split exists, show one example receptively, and leave the rule to B1. **This
brief recommends the second**, because the canDo asks for "pick être where French requires
it" and the transitive uses are the case where French does not.

Whichever you choose, `a2.11` (seq 4) already flagged `descendre` as having this split.
Close that loop.

**Two: agreement is inaudible.** The learner cannot check their work by ear, which makes
this the strongest dictée in the past-tense arc. A learner writing `elles sont allées`
correctly from dictation has demonstrated the whole lesson.

**Three: `être` is the auxiliary, so `je suis allé` looks like "I am gone".** Learners read
it as a present tense with an adjective. One mission on why it is a past tense despite
looking like a description.

---

## What is left to neighbours

- **Formation and negation are `a2.05`, shipped.** The negation rule is identical
  (`je ne suis pas allé`). **Quote `a2.05`'s wording, which quotes `a2.19`'s.** Three
  lessons, one rule, one string.
- **Irregular participles are `a2.20`, shipped.** Import; do not re-teach the list.
- **Reflexive verbs also take `être`** and that is `a2.23` (seq 20). **Do not teach them**,
  and flag in your report that `a2.23` inherits your agreement rule.
- **Agreement with a preceding direct object** under `avoir` needs object pronouns
  (`a2.06`, seq 21). Not here.
- **`a2.03` owns adjective agreement.** You borrow its rule; you do not re-teach it.

---

## Layout and scene

- **The four agreement forms belong on one screen**, all four, with the sound stated as
  identical. **This is the layout the test must assert**, and it is where `a2.01`'s
  reframe gets quoted.
- **`je suis sorti` and `j'ai sorti la poubelle` belong side by side** if you teach the
  transitive split, or the receptive example sits alone if you do not.
- **An `avoir` participle and an `être` participle belong side by side**, showing one
  agreeing and one not. Second required layout: the contrast with `a2.05` is half the
  lesson.
- One `table` for the construction across six persons, with the agreement visible in the
  participle column.
- `tapTable` for the verb list, grouped by movement / change of state rather than by the
  mnemonic's letters, with the mnemonic given once.
- `dictation` as the heaviest production section.

**The scene:** the A2 register. A woman telling someone where she went, writing it down,
and getting the agreement wrong in a way nobody hears and everybody who reads it sees. Or
spoken: someone who stalls choosing the auxiliary, because `être` for a verb of motion
contradicts everything the previous lesson taught.

---

## Quiz notes

- **`typeIn` for agreement**, with the subject's gender and number fixed in the stem. This
  is the format that tests the Owns, and it is the only one that can.
- **mcq for auxiliary choice**, with the verb and a direct object or its absence visible.
- **`errorSpot` for `avoir` + agreement**, the error `a2.05` learners will import.
- **No ear question can test agreement.** All four forms are identical and any such
  question certifies a bug. Say so in your report.
- Every agreement question needs the subject's gender and number determinable from the
  stem, or there is no single answer.

---

## Wiring

```
scripts/author-passe-compose-etre-batch.ts      content:passe-compose-etre
scripts/merge-passe-compose-etre-into-seed.ts
scripts/data/passe-compose-etre-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-21-passe-compose-etre.test.ts
```

Ids from your batch-2 ledger block. Row count after the apply.

---

## Your test

- **All four agreement forms appear in one section**, asserted form by form, with the
  statement that they sound identical.
- **`a2.01`'s reframe is quoted verbatim.** Assert the string: a paraphrase must go red.
  This is the bookend and it is the assertion most worth having.
- **An `avoir` participle and an `être` participle appear together**, one agreeing and one
  not, in one section.
- **`a2.05`'s negation wording is quoted verbatim.**
- **The real pattern (movement, change of state) is taught, not only the mnemonic**, and
  the mnemonic is present since the `sub` promises it.
- **The transitive decision is asserted whichever way it went**, and if you deferred it,
  no transitive use appears in any production surface.
- **No reflexive verb appears**, reserving `a2.23`.
- **`a2.11`'s `descendre` loop is closed**, asserted by back-reference.
- Every dictée item carries the `dictation` drill, checked against Postgres, not the seed.

**Mutation-test**: drop an agreement form, paraphrase `a2.01`'s reframe, agree an `avoir`
participle, teach a reflexive, remove the pattern and leave only the mnemonic.

---

## Settled before you start

- The identity block, above.
- `lessonIds: []`. First build, version 1.
- All fifteen être-verbs exist; six respellings need repair, four invisibly.
- **You own `descendre`'s transitive/intransitive split.** `a2.11` handed it to
  you by unit id and reported that no unit body names it; Corrections §7 explains
  why that is a query artifact rather than a hole.
- `a2.10.l2` and `a2.11` have shipped and teach these verbs in the present.

## Still unverified

- **`a2.01`'s exact reframe wording.** Read the shipped lesson; do not reconstruct it from
  this file. If `a2.01` shipped a different reframe, quote what it actually shipped and
  report the difference.
- **`a2.05`'s exact negation wording**, and whether it quotes `a2.19`'s.
- Which participles `a2.20` flagged as `être`-taking.
- **Whether the transitive split belongs in A2.** Nobody has decided.
- Whether `a2.11` shipped the `descendre` flag this brief assumes.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the transitive-auxiliary decision**, with reasoning, since it is the largest judgement
  call in the lesson
- **whether the `a2.01` bookend landed**, and the wording you quoted
- confirmation that the negation string is identical across `a2.19`, `a2.05` and this
  lesson, or which one differs
- **the agreement rule as you worded it**, verbatim, because `a2.23` is told to inherit it
- confirmation that `a2.11`'s `descendre` loop is closed
