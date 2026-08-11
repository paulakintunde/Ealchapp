# Build a2.16 "Beau, nouveau, vieux"

Trail seq **11** of 32. First lesson of batch 2, and the payoff `a2.03` was told to
refuse.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.03` as shipped** (your prerequisite, which built the four-form grid and was
forbidden from touching your three adjectives), **`a1.16` (placement)**, and
**`sons.07` (L'élision)**, because the reason your third forms exist is the reason
elision exists and the learner has already met it.

---

## Identity

```
a2.16   Beau, nouveau, vieux                               seq 11
  sub:    the triple forms — bel, nouvel, vieil
  canDo:  Can use bel, nouvel and vieil before a vowel and agree all three in the plural
  prereqUnitIds: ['a2.03']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.16 --theme adjectifs
pnpm corpus:probe --words "beau,belle,bel,nouveau,nouvelle,nouvel,vieux,vieille,vieil"
pnpm corpus:probe --tokens "un bel appartement,un nouvel ami,un vieil homme,de beaux enfants"
```

---

## The teaching problem

### Owns: the third form, and the sound reason it exists

Three adjectives, five forms each instead of four:

```
            m.sg     m.sg before vowel    f.sg        m.pl       f.pl
beau        beau     bel                  belle       beaux      belles
nouveau     nouveau  nouvel               nouvelle    nouveaux   nouvelles
vieux       vieux    vieil                vieille     vieux      vieilles
```

`bel`, `nouvel` and `vieil` exist for exactly one reason: **French does not want two
vowels colliding.** `un beau appartement` puts /o/ against /a/ and the language refuses.

That is not a new rule. It is the rule `sons.07` taught as elision, and the same
pressure behind liaison. **Name `sons.07` by unit id and quote its reframe.** A learner
who sees a pronunciation lesson explain an adjective lesson has just learned that the
tracks are one language, and that is worth more than the paradigm.

### The reframe candidate

> **The extra form exists so two vowels never meet.**

Record what you rejected. "beau becomes bel before a vowel" is the fact without the
reason, and the reason is the only thing that makes the form memorable rather than
arbitrary.

---

## The trap

**The plurals, and each of the three does something different.**

```
beaux      -x, not -s
nouveaux   -x, not -s
vieux      already ends in -x; the masculine plural is identical to the singular
```

Two separate errors follow: learners write `beaus`, and learners add something to
`vieux`. The `vieux` case is the same shape as `a2.03`'s `-eux` family, where the
masculine plural equals the singular. **Point back at `a2.03`.**

Second trap, and it matters: **`bel`, `nouvel` and `vieil` are masculine singular only.**
There is no feminine equivalent, because the feminine forms already end in a consonant
sound and there is no collision to avoid. Learners produce `belle` where they wanted
`bel`, or invent `belle` as the "vowel form". Make the masculine-only constraint explicit
and drill the rejection.

---

## What is left to neighbours

- **The four-form system is `a2.03`, shipped.** One recap and a pointer. Your lesson is
  the exception to it, which only works if the learner has the rule.
- **Placement before the noun is `a1.16`, shipped.** These three are among the small set
  that precede the noun, which is *why* they meet the following vowel at all. Say that
  in one line, name `a1.16`, and do not teach placement.
- **Elision and liaison are the sons track.** Quote `sons.07`, teach neither.
- **`-ment` adverbs from these** is `a2.17` (seq 12). `belle` → `bellement` is rare and
  not worth it, but do not pre-empt `a2.17`'s pattern.

---

## Layout and scene

- **The five forms of one adjective belong on one screen**, all five cells, so the third
  form is visibly an addition to a grid the learner already knows. **This is the layout
  the test must assert.**
- **`un beau livre` and `un bel appartement` belong side by side**, audible, one tap
  each. The contrast is the lesson and it is a sound contrast, so it must be heard, not
  read. **This is the second required layout.**
- One `table` covering all three adjectives × five forms. Fifteen cells is at the top of
  what one grid should hold; check on device that it does not need horizontal scroll,
  and remember that a `flex` on a `Text` clips the tail — put the flex on a wrapper
  `View`.
- `listening` for the vowel-collision contrast.

**The scene:** the A2 register. Someone describing a flat, or a friend, who reaches the
adjective and hears themselves produce a collision, stops, restarts, and loses the
sentence. The stall is audible and self-inflicted, which is a good A2 opening.

---

## Audio brief notes

**`un beau livre` and `un bel appartement` must be one take, one voice**, recorded
adjacently. Recorded apart, the learner compares two performances instead of two sounds
and the entire teaching is lost. Write the constraint into `desc`.

Same for `un vieux monsieur` / `un vieil homme`, where the `h` is silent and the
collision happens anyway. That pair is the strongest evidence in the lesson that the rule
is about **sound and not spelling**, so brief it carefully.

---

## Quiz notes

- **mcq on form choice with the noun in the stem** is the core format: the answer depends
  entirely on what follows.
- **`errorSpot` for the invented feminine** (`une belle appartement`, `un belle ami`),
  because free-text is the only format that catches a form the learner made up.
- `listenChoose` for `beau`/`bel`, which is genuinely audible.
- **No question can test the `vieux` masculine plural by ear**, since it is identical to
  the singular. Say so in your report.
- Every question needs a noun whose gender and initial sound are both determinable.

---

## Wiring

```
scripts/author-beau-nouveau-batch.ts        content:beau-nouveau
scripts/merge-beau-nouveau-into-seed.ts
scripts/data/beau-nouveau-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-16-beau-nouveau.test.ts
```

Ids from your batch-2 ledger block. Row count after the apply.

Your example nouns should be **imported**, not authored: the vowel-initial nouns you need
(`appartement`, `ami`, `homme`, `hôtel`) almost certainly exist in A1 themes. Any gendered
single-word noun you do author joins a1.03's measured ending population and
`a1-03-genre.test.ts` re-measures twenty printed figures on every run.

---

## Your test

- **All five forms of all three adjectives are present**, asserted cell by cell.
- **`beau` and `bel` appear in one section with a vowel-initial and a consonant-initial
  noun**, adjacent.
- **The masculine-only constraint on `bel`/`nouvel`/`vieil` is stated**, and no feminine
  vowel-form appears in any authored correct sentence. Permit it inside an `errorSpot`
  item as the error, and write the assertion so it allows that one location.
- **`beaux` and `nouveaux` take `-x`**, asserted by name so a future "fix" to `-s` goes
  red.
- **The `vieux` masculine plural is asserted as identical to the singular**, with a
  comment saying it is deliberate.
- **The `sons.07` back-reference is present**, and the `a2.03` one.
- **Placement is not taught**, scoped to production surfaces.
- **`-ment` is not taught.**
- a1.03's printed ending figures still pass. Report before and after.

**Mutation-test**: pluralise with `-s`, add an `s` to `vieux`, invent a feminine `bel`,
separate the audible contrast, cut the `sons.07` reference.

---

## UNVERIFIED

- Whether these three adjectives already exist in `adjectifs`. Given a1.14 found
  forty-four pre-existing adjectives, **assume they do until the probe says otherwise.**
- Whether `a2.03` shipped clean and left all three alone. Read the shipped lesson.
- **Whether `sons.07` shipped with a quotable reframe.** `sons.07` was authored but the
  memory of this project records it as not yet applied to DB or seed at the time of
  writing. **Check it is live before building a back-reference on it.**
- Whether the vowel-initial example nouns exist.
- Baseline test count, a1.03's printed figures, mission range.

---

## What to report

Doctrine §F, plus:

- **whether `sons.07` is live**, and what you did if it was not
- **a1.03's printed ending figures before and after**, and any noun you withdrew
- how the vowel-collision reason landed: as the reason for the form, or as a decoration
  on a table
- confirmation that the two contrast pairs were briefed as one take
