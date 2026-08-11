# Build a2.05 "Le passé composé avec avoir"

Trail seq **16** of 32. The largest single lesson in A2 and the head of a five-lesson arc
(seq 16 to 20). Four later lessons declare it as a prerequisite. **Build it before seq 17,
18 and 20**, and get it right, because a defect here propagates to four lessons.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a1.07` (avoir) as shipped** (your prerequisite, the auxiliary's paradigm),
**`a2.01` as shipped** (whose silent-ending reframe you are about to collide with),
**`a2.19` as shipped** (seq 15, whose negation rule you extend and must match verbatim),
and **`a2.18` as shipped** (seq 14, which was told to defer "ago" to you).

---

## Identity

```
a2.05   Le passé composé avec avoir                        seq 16
  sub:    formation, 60 participles, negation
  canDo:  Can talk about the past with avoir and place the negation around the auxiliary
  prereqUnitIds: ['a2.01', 'a1.07']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.05 --theme verbes,verbes-essentiels
pnpm corpus:probe --tokens "j'ai mangé,j'ai fini,j'ai vendu,je n'ai pas mangé,hier j'ai"
```

Then, and this decides how much work the lesson is:

```bash
# Did any earlier lesson author past-referring corpus sentences?
pnpm corpus:probe --tokens "venir de,il y a trois jours,hier,la semaine dernière"
```

`a2.02` and `a2.18` were both told they **may** author past-referring corpus sentences
and **must** flag them in their corpus headers. Read those headers.

---

## The sixty participles are a ledger decision, not yours alone

The `sub` says sixty. Whether a past participle is a **corpus item** or only appears
inside sentences is a level-wide decision listed in doctrine §E, and it decides whether
this lesson authors sixty rows or zero.

`a2.20` (seq 17) claims forty irregular participles on top of yours. **Sixty plus forty
is a hundred rows in one theme, and the flashcard hub treats two rows sharing an `fr` in
one theme as one card served twice.** Settle the split with `a2.20`'s author before either
of you applies anything. Report what was settled.

---

## The teaching problem

### Owns: the two-part verb, and what goes inside it

The learner has conjugated single verbs for fifteen lessons. The passé composé is the
first tense where a verb is **two words**, and everything hard about it follows from that.

```
formation      j'ai mangé              auxiliary + participle
negation       je n'ai pas mangé       pas goes INSIDE, around the auxiliary
adverbs        j'ai bien mangé         short adverbs go INSIDE too
```

The negation position is the same rule `a2.19` shipped one lesson earlier for the futur
proche: **the negation wraps the conjugated verb, not the one carrying the meaning.**

**Find `a2.19`'s wording and use it verbatim.** Not a paraphrase. The learner met this
rule last lesson on an easier structure, and repeating it in the same words is what turns
two lessons into one rule. If `a2.19`'s wording is wrong or unusable, say so in your
report rather than quietly writing a second version.

### The reframe candidate

> **Two words, and everything else goes between them.**

Covers negation and adverb placement in one rule, both of which the canDo and `sub` name.
Record what you rejected: "the passé composé is formed with avoir plus the past
participle" is a description of the form, and the learner's problem is not the form.

---

## The traps

**One, and it is the big one: `-er` and `-é` are homophones.** `parler` and `parlé` are
both /paʁle/. `manger` and `mangé` are both /mɑ̃ʒe/.

```
Je vais manger.      futur proche       seq 15
J'ai mangé.          passé composé      seq 16
```

**In speech these differ only by the auxiliary.** The learner must hear `vais` against
`ai` to know whether they are being told about the future or the past, and both are short
unstressed words. This is the sharpest listening problem in A2 and it is why `a2.19` sits
immediately before you.

`a2.01` was told not to author corpus sentences that make the `-er`/`-é` pair ambiguous,
precisely so you would have clean evidence. **Check whether it complied.**

This is your `listening` centrepiece and your dictée: two spellings, one sound, and only
the auxiliary disambiguates.

**Two: the three regular participle endings.**

```
-er verbs  →  -é       parlé, mangé
-ir verbs  →  -i       fini, choisi
-re verbs  →  -u       vendu, attendu
```

That maps exactly onto `a2.01`, `a2.10` and `a2.11`. **Name all three units.** A learner
who sees the three groups reappear intact has just been shown that fifteen lessons of
structure were load-bearing.

**Three: `avoir` is the auxiliary and the learner will conjugate the participle.**
`j'ai mangé`, not `j'ai mangée` — with `avoir`, there is no agreement in the cases this
lesson covers. Say it plainly, because `a2.21` (seq 18) is about to say the opposite for
`être`, and the contrast only works if this lesson stated its side clearly.

---

## What is left to neighbours

- **Irregular participles are `a2.20`** (seq 17), the very next lesson, and it claims
  forty. **Teach the three regular endings and no irregular participle**, except any that
  the ledger explicitly assigns to you. This is the hardest restriction in the lesson,
  because `fait`, `pris`, `vu`, `dit` are all extremely frequent. Take it.
- **`être` as auxiliary is `a2.21`** (seq 18). Not one verb. `avoir` only.
- **Participle agreement with a preceding direct object** (`la pomme que j'ai mangée`)
  requires object pronouns, which is `a2.06` (seq 21), after you. Do not teach it.
- **Adverb placement in compound tenses** was deferred to you by `a2.17` (seq 12). **Close
  that loop**: one mission, the short adverb between auxiliary and participle, naming
  `a2.17`.
- **"ago" with `il y a`** was deferred to you by `a2.18` (seq 14). **Close that loop too**,
  in one mission, naming `a2.18`.
- **`a2.15` reserved `pris` and `mis`** for `a2.20`. Do not take them.

You are closing three deferrals. That is a real part of your job and it should be visible
in the act structure, not scattered as asides.

---

## Layout and scene

- **The two-part structure with `pas` inside belongs on one screen**, showing
  `j'ai mangé` and `je n'ai pas mangé` adjacent with the position visible. **This is the
  layout the test must assert.**
- **The three regular endings belong in one grid**, one row per verb group, with a
  representative verb from each of `a2.01`, `a2.10` and `a2.11`. Second required layout.
- **`je vais manger` and `j'ai mangé` belong side by side, audible.** Third required
  layout, and it must be a sound contrast, not a reading one.
- One `table` for the full construction across six persons. It is small, because only
  `avoir` changes.
- A reference sheet with the three endings and the negation position. It is the most
  returned-to sheet in A2: `a2.20`, `a2.21` and `a2.23` all lean on it. Verify on device
  that its contents render, not just its title.
- **Watch the length.** This lesson wants to be thirty missions. The range is 19 to 24 and
  a lesson that overruns it should become two lessons, which is an escalation, not a
  decision you make. Report if you hit the ceiling.

---

## Audio brief notes

**`je vais manger` and `j'ai mangé` must be one take, one voice**, recorded adjacently.
Apart, the learner compares two performances instead of two auxiliaries and the entire
listening teaching is lost. Write it into `desc`.

Same for `j'ai mangé` / `je n'ai pas mangé`, where the `ai` is swallowed and the learner
must catch `n'...pas` around it.

---

## Quiz notes

- **`typeIn` for participle formation** from an infinitive, including verbs the lesson
  never lists, which is the generalisation test.
- **`errorSpot` for negation position** (`je n'ai mangé pas`), which is a whole-sentence
  word-order error.
- **`listenChoose` for the auxiliary**, distinguishing future from past. This is the one
  place in A2 where `listenChoose` tests something genuinely hard.
- **No ear question can distinguish `manger` from `mangé`.** That is the point of the
  lesson and any question pretending otherwise certifies a bug. Say so in your report.
- Every past-tense question needs a time expression that fixes the reading.
- **One quiz per lesson.** With sixty participles the temptation to add a second is real
  and a second quiz section is silently never rendered.

---

## Wiring

```
scripts/author-passe-compose-batch.ts       content:passe-compose
scripts/merge-passe-compose-into-seed.ts
scripts/data/passe-compose-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-05-passe-compose.test.ts
```

Ids from your batch-2 ledger block, and **your block must be sized against `a2.20`'s**
(see the participle decision above). Row count after the apply, not just the highest id:
`a2.20` may be building concurrently and can land below your top.

---

## Your test

- **`j'ai mangé` and `je n'ai pas mangé` appear adjacent in one section.**
- **`a2.19`'s negation wording is quoted verbatim.** Assert the string. A paraphrase must
  go red; that is the assertion that keeps the two lessons one rule.
- **The three regular endings appear in one grid**, each with a verb from its group, and
  all three units are named.
- **`je vais manger` and `j'ai mangé` appear as an audible contrast in one section**, with
  at least one `listening` item requiring the auxiliary to be identified.
- **No irregular participle appears** in any production surface, except those the ledger
  assigned. Assert by name for the frequent ones: `fait`, `pris`, `mis`, `vu`, `dit`.
- **No participle agrees with `avoir`** anywhere: no `-ée`, `-és`, `-ées` participle in an
  `avoir` construction.
- **`être` is never used as an auxiliary.**
- **The `a2.17` adverb-placement loop and the `a2.18` "ago" loop are both closed**,
  asserted by the presence of their back-references.
- Mission count is within 19 to 24. Assert it.
- Import `hasPlainNasalFor`. `mangé` and every nasal-stem participle needs checking
  against §3.

**Mutation-test**: move `pas` after the participle, paraphrase `a2.19`'s rule, agree a
participle with `avoir`, teach an irregular participle, drop a deferral loop.

---

## UNVERIFIED

- **Whether participles are corpus items at all.** Ledger decision, unmade, and it changes
  the size of this build by sixty rows.
- **Whether `a2.20`'s author has agreed the split.** Unmade.
- **Whether `a2.01` kept the `-er`/`-é` corpus clean** as instructed. Read its corpus
  header.
- **`a2.19`'s exact negation wording.** Read the shipped lesson; do not reconstruct it
  from this file.
- Which past-referring sentences `a2.02` and `a2.18` already authored.
- Whether 19 to 24 missions can hold formation, sixty participles, negation, adverb
  placement and two deferral loops. **This brief suspects not**, and that is the most
  likely escalation in batch 2.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the participle split with `a2.20`**, settled, with row counts on each side
- **whether the lesson fits in 19 to 24 missions**, and if not, a plain recommendation on
  where the second lesson's boundary should fall
- **`a2.19`'s negation wording**, quoted, and confirmation you did not write a second
  version
- confirmation that both deferral loops (`a2.17`, `a2.18`) are closed, and where
- whether `a2.01`'s corpus was clean for the `-er`/`-é` contrast, or whether you had to
  author around it
