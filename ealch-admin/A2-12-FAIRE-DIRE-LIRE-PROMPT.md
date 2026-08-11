# Build a2.12 "Irréguliers 2 : faire, dire, lire"

Trail seq **6** of 32. The first lesson in batch 1 where the paradigm is genuinely not
the point: the `sub` promises thirty expressions and the canDo names them.

**Read first:** `ealch-admin/A2-BUILD-DOCTRINE.md`, `A1-BUILD-INVARIANTS.md`, then
**`a2.02` as shipped** (your prerequisite), and **`a1.10` (meteo) as shipped**, because
you are about to walk into its vocabulary.

---

## Identity

```
a2.12   Irréguliers 2 : faire, dire, lire                  seq 6
  sub:    three verbs, thirty everyday expressions
  canDo:  Can use faire, dire and lire and the common expressions built on faire
  prereqUnitIds: ['a2.02']
```

Copy `title`, `sub` and `canDo` byte-for-byte from the probe's unit dump.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.12 --theme verbes,verbes-essentiels,meteo
pnpm corpus:probe --words "faire,dire,lire,écrire"
pnpm corpus:probe --tokens "il fait beau,il fait froid,faire les courses,faire la cuisine,faire attention,vous faites,vous dites,ils font"
```

**Run the `il fait beau` token probe before authoring anything.** a1.10 shipped the
weather lesson and the `meteo` theme. The `faire` weather expressions almost certainly
already exist. If they do, you **import** them.

---

## The teaching problem

### Owns: the family, in the idiom sense

The canDo asks for "the common expressions built on faire", so the expressions are the
lesson and the paradigm is support.

```
faire les courses    faire la cuisine     faire attention
faire le ménage      faire du sport       faire la queue
il fait beau         il fait froid        faire un voyage
```

French uses `faire` where English uses a dozen different verbs: do the shopping, cook,
pay attention, queue, be sunny. That is not a vocabulary quirk, it is a fact about how
the language carves up doing, and a learner who understands it stops trying to translate
each English verb separately.

### The reframe candidate

> **French does with `faire` what English does with a different verb each time.**

Record what you rejected. "faire means to do or to make" is the translation the learner
already has, and it is the reason they cannot produce any of the thirty expressions.

### Thirty is a real number

The `sub` says thirty and the Den advertises it. Count what you ship. If the honest total
after imports is twenty-six, that is a `sub` problem to report, not a licence to pad with
expressions nobody says.

---

## The trap

Three shapes here look regular and are not, and all three are high-frequency:

```
vous faites      not faisez
vous dites       not disez
ils font         not faisent
```

`-tes` as a second-person plural exists in only a handful of verbs in the language
(`faire`, `dire`, `être`). Drill those three cells specifically. They are the single
most-corrected forms at this level and a learner who gets them right sounds noticeably
better than one who does not.

Note that `lire` does **not** join the pattern (`vous lisez`, `ils lisent` are regular in
shape). That makes `lire` the control case: put it beside `faire` and `dire` so the
learner sees that "irregular" is not a blanket.

---

## What is left to neighbours

- **Weather is `a1.10`, shipped.** `il fait beau` and its family may be used as `faire`
  expressions. **Weather vocabulary may not be taught**, and the collision guard will
  fire if you build a weather vocabulary section. Import, do not author.
- **Shopping is `a2.26` (seq 25).** `faire les courses` is a `faire` expression here and
  a topic there. Same rule: expression, not vocabulary section.
- **`faire du sport`** touches the sports theme. Same rule.
- **`dire que` + clause** shades into reported speech, which is beyond A2. Use `dire` with
  a direct object and with simple `que` clauses only, and do not teach the structure.

The general principle, and state it in your corpus header: **this lesson borrows other
themes' nouns as the objects of `faire`. It teaches none of them.**

---

## Layout and scene

- **`vous faites` / `vous dites` / `vous lisez` belong on one screen**, three cells
  adjacent, so the learner sees the pattern and its limit at once. **This is the layout
  the test must assert.**
- One `table` for the three paradigms side by side. `lire` in the same grid is what makes
  the control case visible.
- **`tapTable` is the workhorse here**, not the table: a row per `faire` expression, tap
  to hear it, tap to open the detail. Thirty expressions is exactly the shape `tapTable`
  was built for and `letterGrid` is not.
- `vocabThemes` is tempting for the thirty and is the wrong choice, because it frames
  them as vocabulary rather than as a verb's reach. Use it only if the ledger says
  otherwise.

**The scene:** the A2 register. Someone reaching for a verb that does not exist in French
— trying to say "I do the shopping" by translating "do" — and stalling. It is the
lesson's own trap acted out, which is the strongest kind of opening.

---

## Quiz notes

- **`typeIn` for the three irregular cells.** They are spelling and form, and no ear
  question can catch `faisez` because a learner producing it produces it aloud too.
- **mcq for expression choice**: given a situation, which `faire` expression. That is the
  Owns and mcq tests it cleanly.
- `listenChoose` has a small job: `ils font` is short and audibly unlike anything else in
  the paradigm.
- Do not write questions that require weather knowledge. That tests `a1.10`, not you.
- Every question about an expression needs the situation in the stem.

---

## Wiring

```
scripts/author-faire-dire-lire-batch.ts     content:faire-dire-lire
scripts/merge-faire-dire-lire-into-seed.ts
scripts/data/faire-dire-lire-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-12-faire-dire-lire.test.ts
```

Ids from your ledger block. **Your imports come from at least two themes** (`meteo`, and
whichever holds shopping). Record every imported id in the corpus header with its source
theme. Row count after the apply, not just the highest id.

---

## Your test

- **The thirty expressions are asserted individually by name**, not as a count. If the
  real number is not thirty, assert the real number and report the `sub` mismatch.
- **`vous faites`, `vous dites` and `ils font` are each drilled**, asserted by item.
- **`lire` is present as the regular-shaped control**, in the same section as the other
  two.
- **No weather or shopping vocabulary is taught**, scoped to production surfaces (decks,
  vocab, drills, quiz), not to every string. A guard over every string fires on
  legitimate context and gets deleted.
- **Every imported item is imported, not re-authored**: assert that the ids you reference
  in `meteo` are the pre-existing ones.
- Import `hasPlainNasalFor` and assert respellings by name. `font` and `disent` both need
  checking against §3 of the invariants.

**Mutation-test**: drop an expression, regularise `vous faites`, add a weather vocabulary
section, re-author an imported id.

---

## UNVERIFIED

- **Whether the `faire` weather expressions exist in `meteo`.** Very likely, from a1.10.
  Unchecked. This is the single most important thing to probe before you write a line.
- Whether thirty distinct expressions can be assembled without padding.
- Whether shopping vocabulary exists yet at all: `a2.26` is seq 25 and unbuilt, so
  `faire les courses` may have no noun to borrow.
- Whether `a2.02` shipped the "one form, two jobs" term this brief's siblings reference.
- Baseline test count and mission range.

---

## What to report

Doctrine §F, plus:

- **the real expression count**, and whether the `sub`'s "thirty" holds
- **every id you imported and from which theme**, because this lesson borrows more
  widely than any other in batch 1
- how you kept thirty expressions from reading as a vocabulary list
- whether `lire` earned its place or is carried by the unit title
