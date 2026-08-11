# Build a2.15 "Irréguliers 5 : prendre, mettre, battre"

Trail seq **9** of 32. The last verb lesson in batch 1 and the one that pays off the
whole irregular block: three paradigms buy the learner twenty-odd verbs.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.11` as shipped** (which named `prendre` and `mettre` as exceptions and did not
conjugate them — you are the payoff), **`a2.09`** (whose stem principle you point back
at), and **`a2.02`** (which was told to name two or three compounds and leave the family
principle to you).

---

## Identity

```
a2.15   Irréguliers 5 : prendre, mettre, battre            seq 9
  sub:    pattern families & their compounds
  canDo:  Can conjugate prendre, mettre and battre and recognise their compounds
  prereqUnitIds: ['a2.02']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.15 --theme verbes,verbes-essentiels
pnpm corpus:probe --words "prendre,apprendre,comprendre,surprendre,mettre,permettre,promettre,remettre,battre,combattre"
pnpm corpus:probe --tokens "je prends,nous prenons,ils prennent,je mets,ils mettent"
```

---

## The teaching problem

### Owns: the family, in the productive sense

Each of the three verbs is the head of a family, and the compounds conjugate identically.

```
prendre    apprendre · comprendre · surprendre · reprendre
mettre     permettre · promettre · remettre · admettre
battre     combattre · débattre · abattre
```

Learn three paradigms, get roughly twenty verbs. That is the largest return on
memorisation anywhere in A2 and it is the argument that makes the whole irregular block
worth the learner's time.

**The mission this lesson exists for: make the learner conjugate a compound the lesson
never showed them.** Give them `reprendre` or `admettre` cold and require the full form.
It should be the last mission before the quiz. Doctrine §B.1 — a pattern that generalises
to items the lesson never taught is the only thing that distinguishes A2 from a table.

### The reframe candidate

> **Learn the head of the family and the rest come free.**

Record what you rejected. "Compounds follow their base verb" is the same fact stated
about the language rather than about what the learner should do with it.

---

## The trap

**The doubled consonant in the plural stem.**

```
nous prenons     one n
ils prennent     two n
nous mettons     two t throughout, so mettre is the control
```

The doubling in `prennent` happens exactly where the ending goes silent — which is
`a2.09`'s principle, stated seven lessons earlier for `appeler` and `jeter`. **Point back
at `a2.09` by unit id.** A learner who sees two lessons connect stops believing French is
arbitrary, and this is the clearest connection available in batch 1.

Second trap: `prendre` looks like a regular `-re` verb and is not. `a2.11` named it and
refused to conjugate it. Close that loop explicitly — the learner was told to wait, and
this is the lesson they were waiting for.

---

## `battre` is the weak member, and say so in your report

The family is smaller, the verbs are less frequent, and the canDo only asks for
**recognition** of the compounds, not production. Give it proportionate weight. Two
missions where `prendre` gets six is correct.

Do not pad `battre` to make the three verbs look equal. A lesson that spends equal time
on an unequal set is teaching the learner that frequency does not matter, which is false
and expensive.

---

## What is left to neighbours

- **`prendre le bus` / `prendre le train`** is `a2.27` (seq 26), transports.
- **`je prends un café`** as an ordering move is `a2.07` (seq 24), au restaurant.
- Both may appear as example sentences. **Neither may become a vocabulary or `scenario`
  section**, or two later units lose their opening.
- **`comprendre` in a classroom frame** touches `a2.31` (seq 31). Same rule.
- **The passé composé of these** (`pris`, `mis`) is `a2.20` (seq 17), the irregular
  participles lesson, and those two participles are among its most important. Do not
  teach them. **Flag in your corpus header that `pris` and `mis` are reserved**, so
  `a2.20` knows this lesson deliberately left them.

---

## Layout and scene

- **`nous prenons` and `ils prennent` belong on one screen, adjacent**, with the
  `a2.09` back-reference visible in the same section. **This is the layout the test must
  assert.**
- **One grid showing a head verb and two of its compounds in the same conjugation**, so
  the identity is visible rather than asserted. This is the layout that makes the Owns
  real: told that compounds follow, the learner believes it; shown three identical rows,
  they know it.
- One `table` for the three paradigms, one `tapTable`, then stop.
- `groupDrill` for the unseen-compound production, against the clock. That pressure is
  what proves the pattern is internalised rather than looked up.

**The scene:** the A2 register. A learner who knows `prendre` and stalls on `apprendre`,
treating a verb they can already conjugate as a new one, and losing the sentence while
they hunt for it. That is the lesson's own argument acted out.

---

## Quiz notes

- **`typeIn` with an unseen compound is the format that tests the Owns.** Several items,
  each with a compound the lesson never conjugated.
- mcq for family membership: which of these follows `mettre`.
- `listenChoose` has one real job: `il prend` against `ils prennent`, which is audible in
  the same way `a2.10`'s `-iss-` pair was. One or two items, and point at `a2.10`.
- Do not test `pris` or `mis`. Those are `a2.20`.
- Every question needs a subject pronoun or a frame that fixes person and number.

---

## Wiring

```
scripts/author-prendre-mettre-batch.ts          content:prendre-mettre
scripts/merge-prendre-mettre-into-seed.ts
scripts/data/prendre-mettre-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-15-prendre-mettre.test.ts
```

Ids from your ledger block. Row count after the apply.

---

## Your test

- **Each of the three heads is taught with at least two compounds named**, asserted by
  name rather than by count.
- **At least one mission requires producing a compound form not otherwise taught**,
  asserted by naming the compound and asserting it appears nowhere in the lesson's own
  vocabulary or decks.
- **The doubled-consonant plural is taught with the singular visible beside it** in one
  section.
- **The `a2.09` back-reference is present**, so an edit that cuts it goes red. Same for
  the `a2.11` loop-closing line.
- **No transport or restaurant vocabulary is taught**, scoped to production surfaces, not
  to every string.
- **`pris` and `mis` appear nowhere**, reserved for `a2.20`.
- **`battre` has strictly fewer missions than `prendre`.** Assert the inequality. It is
  the assertion that stops a future author "balancing" the lesson and making it worse.
- Import `hasPlainNasalFor`. `prennent`, `apprennent`, `comprennent` all carry a
  word-internal nasal the validator cannot see — check §3 and assert verified forms.

**Mutation-test**: teach `pris`, pad `battre` to parity, drop the unseen-compound
mission, separate the `prenons`/`prennent` pair, cut the `a2.09` reference.

---

## UNVERIFIED

- Whether `prendre`, `mettre` or any compound already exists as an item. Probe.
- **Whether `a2.11` shipped the exception naming this brief assumes**, and whether
  `a2.02` left the family principle alone as instructed. Read both shipped lessons.
- Whether `a2.09` shipped its stem principle in a form quotable here.
- Whether `battre`'s compounds are frequent enough to be worth even two missions. If the
  answer is no, say so: the canDo asks only for recognition and that may be one mission.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **which compound you used for the unseen-production mission**, and confirmation it
  appears nowhere else in the lesson
- **the weight `battre` actually got**, in missions, and whether the canDo's "recognise"
  justified it
- confirmation that `pris` and `mis` are flagged as reserved for `a2.20`
- whether the `a2.09` connection landed, or read as a digression
