# Build a2.14 "Irréguliers 4 : savoir & connaître"

Trail seq **8** of 32. Only two verbs, so the paradigm is small and **the choice is the
whole lesson**. Positioned immediately after the modals so it can bring `pouvoir` back
as a contrast.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.13` as shipped** (your prerequisite). `a2.13` was told to leave `savoir` entirely
alone. Confirm it did, and if it leaked, report it rather than working around it.

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
a2.14   seq 8
  title:  Irregular Verbs 4: Savoir and Connaître
  sub:    Irréguliers 4 : savoir & connaître
  canDo:  Can pick savoir or connaître correctly, the distinction English does not make
  prereqUnitIds: ['a2.13']
  lessonIds:     []          <- first build, version starts at 1
```

Use it as it stands. Re-run `scripts/_a2_preflight.ts` if you are reading this
more than a few days after the date above.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.14 --theme verbes,verbes-essentiels
pnpm corpus:probe --words "savoir,connaître,reconnaître,paraître"
pnpm corpus:probe --tokens "je sais,je connais,je sais nager,je ne sais pas,nous connaissons"
```

### What the probe already returned, measured 2026-08-12

**All four headwords exist. You author none of them.**

```
savoir        1 row    fr.sons.verbes-essentiels.009 [sah-VWAR]
connaître     3 rows   fr.sons.verbes-essentiels.048 [koh-NETR]
reconnaître   3 rows   fr.sons.verbes-essentiels.187
paraître      1 row    fr.sons.verbes-essentiels.217
```

**Three competing respellings for `connaître`**: `koh-NETR`, `kon-NETR`,
`koh-NEHTR`. Invariants §9: a variant is not a violation, so repair only what
breaks a stated rule. `kon-NETR` (fr.a2.communaute.050) closes a nasal with a
plain n and the checker cannot see it — Corrections §6.

**`connaissent` is the word the invariants name** as the checker's blind spot.
Assert it by name.

**`connaître` carries a circumflex and the probe does not strip accents.** Probe it with
real orthography or you will be told it does not exist when it does. This has produced a
false ABSENT before, on `bière`, `café` and `bœuf`.

---

## The teaching problem

English has one verb and gives the learner no instinct at all. French has two and the
choice is obligatory in every sentence, so a learner who guesses is wrong half the time
in a very visible way.

### Owns: the meaning split

```
savoir      facts, skills, and anything followed by a clause
            je sais nager · je sais où il habite · je ne sais pas

connaître   people, places, and things you are acquainted with
            always followed by a direct object, never by a clause
            je connais Marie · je connais Paris · tu connais ce film ?
```

### The reframe candidate, and there are two

> **A. One is for what you know how to do, one is for who and where you know.**
>
> **B. `connaître` always takes a thing. `savoir` can take a whole sentence.**

**Prefer B.** The semantic version breaks on cases the learner will meet within a week
(`je sais où il habite` is a place, and takes `savoir`). The syntactic version survives
contact, and doctrine §B.4 asks for a rule that can be run mid-utterance: "is what comes
next a thing or a sentence?" is answerable in half a second.

Ship one, record the other as rejected, and say why. If you ship A, you are overriding
this brief and that goes in the report.

---

## The trap

**`je sais nager` against `je peux nager`.** Skill against permission or possibility, and
this is exactly why the unit sits after `a2.13` and declares it as a prerequisite.

```
je sais nager     I know how to swim      learned ability
je peux nager     I can swim              nothing is stopping me
```

Bring `pouvoir` back in, name `a2.13` by unit id, and make the three-way choice the
`trapDrill`. A learner who has `savoir`/`connaître`/`pouvoir` straight has something most
English speakers never fully sort out.

Second trap: `connaître` is not used with a clause, ever, and learners produce
`je connais où il habite` by direct translation. Drill the rejection, not just the
selection: `errorSpot` on a sentence that uses `connaître` before `que` or `où`.

---

## What is left to neighbours

- **`pouvoir` is `a2.13`, shipped.** Use it as the contrast. Do not re-teach its
  paradigm; one recap line and a pointer.
- **`reconnaître` and `paraître`** follow `connaître` exactly. The family principle is
  `a2.15` (seq 9), the very next lesson. **Name one, do not teach the principle**, and
  say so in your report so `a2.15` can point back.
- **The passé composé of these two** carries a real meaning shift (`j'ai su` = I found
  out, `j'ai connu` = I met). That is genuinely interesting and it is `a2.05`'s territory
  (seq 16). Present tense only. Do not mention the shift.

---

## Layout and scene

- **Both verbs belong on one screen, two columns**, with `savoir` + clause on one side
  and `connaître` + object on the other, adjacent. **This is the layout the test must
  assert.** Separated, the lesson is two small paradigms and the choice never appears.
- One `table` with both paradigms side by side. Two verbs is small enough that a single
  grid is obviously right.
- `trapDrill` for the three-way `savoir`/`connaître`/`pouvoir` choice.
- `tapTable`: a row per situation ("you have met this person", "you can do this thing",
  "you have the information"), tap to hear the sentence. This is the A1 workhorse shape
  and it fits a choice lesson better than any grammar section type.
- Because there are only two paradigms, **you have room for more production than any
  other lesson in batch 1.** Use it. `scenario`, `groupDrill`, and a dictée.

**The scene:** the A2 register. Someone asked whether they know a person or a place, who
picks the wrong verb and is understood to mean something they did not: claiming to know
a fact when they meant they had met someone, or the reverse. The conversation continues
on a false footing and nobody notices for a while. That is a very A2 failure.

---

## Corpus and respelling

`connaître`'s plural stem produces `connaissons`, `connaissez`, `connaissent`. Those meet
the nasal validator's **false-positive** path: `hasPlainNasalFor` flags a real /n/ after
a vowel as a missing nasal, which is how it wrongly flagged `aime`, `dame` and `scène`.

**Check §3 of `A1-BUILD-INVARIANTS.md` before writing the respellings**, give the
verified passing forms in your corpus header, and assert them by name in the test so a
future author's "fix" goes red instead of shipping.

The circumflex on `connaître` is orthographically live (French spelling reform makes
`connaitre` also valid). **Pick one and be consistent across every item.** Report which.

---

## Quiz notes

- **mcq with the situation in the stem is your strongest format**, because the lesson is
  a choice. "Which verb?" has no answer; "You met Marie at a party last year" has one.
- **`errorSpot` for the `connaître` + clause rejection.** Free-text is the only format
  that can catch a structurally wrong sentence the learner would otherwise produce.
- `listenChoose` has little to do here: `sais` and `connais` are not confusable by ear
  and the lesson is not phonetic. One item at most, or none. Do not pad.
- Include at least two `pouvoir` distractors, so the three-way choice is tested and not
  just the two-way.

---

## Wiring

```
scripts/author-savoir-connaitre-batch.ts        content:savoir-connaitre
scripts/merge-savoir-connaitre-into-seed.ts
scripts/data/savoir-connaitre-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-14-savoir-connaitre.test.ts
```

Ids from your ledger block. Row count after the apply.

---

## Your test

- **Both verbs are taught with the contrast in one section**, both sides present.
- **At least one item shows `savoir` + clause and one shows `connaître` + direct object,
  adjacent**, asserted as a pair.
- **The `savoir`/`pouvoir` contrast is present** and names `a2.13`.
- **`connaître` never appears before `que`, `où`, `quand` or `si`** in any authored
  correct sentence. The only place that shape may appear is inside an `errorSpot` item
  as the error. Write the assertion so it permits that one location.
- **The passé composé meaning shift is not taught.**
- **`connaissons` and `connaissent` respellings are asserted by name**, with a comment
  saying why they look wrong to the validator. This is the assertion that stops a future
  author "fixing" a correct decision.
- The circumflex decision is asserted, so items stay consistent.

**Mutation-test**: separate the contrast, drop the `pouvoir` distractors, "correct" the
respellings, add a `connaître` + clause sentence outside the errorSpot.

---

## Settled before you start

- The identity block, above.
- `lessonIds: []`. First build, version 1.
- All four headwords exist; `connaître` has three competing respellings and one
  real violation.
- `a2.13` (seq 7) is your prerequisite and will have conjugated `savoir`. Read
  it before deciding how much paradigm you owe.

## Still unverified

- **Whether `a2.13` leaked `savoir`.** It was told not to. Read the shipped lesson.
- Whether the project has an existing convention on the circumflex in `connaître` /
  `connaitre`. Check other themes before deciding.
- Whether reframe B holds across the full item set you end up authoring. Test it against
  every sentence before committing to it.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **which reframe you shipped and why**, with the rejected one written out. The next
  author needs to know B was considered.
- **the verified passing respellings for `connaissons` / `connaissent`**, and
  confirmation you asserted them by name
- **the circumflex decision**
- confirmation that `a2.13` had not leaked `savoir`, or that it had
- how much of the lesson went to production, given that two paradigms left you room
