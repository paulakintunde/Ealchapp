# Build a2.08 "Comparatives and Superlatives"

Trail seq **32** of 35. Build it before seq 33, 34 and 35.

**Read in order, then this file:** `A2-BUILD-DOCTRINE.md` · `A1-BUILD-INVARIANTS.md` ·
`A2-BRIEF-CORRECTIONS.md` · `A2-TAIL-AUDIT.md`. Nothing here repeats them. Then read
**`a2.03` (adjective agreement) and `a2.17` (adverbs) as shipped** — you extend both.

---

## Identity — measured 2026-08-17, use as it stands

```
a2.08   seq 32   level a2   track a2
  title:  Comparatives and Superlatives
  sub:    Comparatifs & superlatifs
  canDo:  Can compare two things and say which is the most or the least
  themes: null
  prereqUnitIds: ['a2.03']
  lessonIds:     []          first build, version starts at 1
```

---

## Corpus — measured 2026-08-17

**Theme: `comparaisons`.** 288 published, `fr.a2.*` 129 rows at max `.132`.
**NEXT FREE is `fr.a2.comparaisons.133`.** Check the row count after your apply.

**All ten adjectives exist as headwords. You author none:**

```
grand 6 · petit 4 · bon 3 · mauvais 1 · bien 4 · mal 4
cher 6 · rapide 5 · facile 4 · difficile 5
```

**The sentence evidence is rich, which is unusual — Corrections §3 does not apply to
you:**

```
plus grand que     5     moins grand que   1     aussi grand que   0
le plus grand     11     le meilleur      16     meilleur         39
mieux            291
```

Author only `aussi ... que`, which has zero occurrences and is one of your three degrees.
Everything else you import.

**Two respellings to repair.** `grand` ships as both `GRAHN` (`fr.sons.faux-amis.024`) and
`GRAHⁿ` (`fr.sons.muettes.002`); `bien` as `BYEHⁿ` (`fr.sons.mots-essentiels.045`) and
`BYAN` (`fr.b2.ethique.052`). The superscript forms are the house values. Read Corrections
§6 **as amended by §14.1** before building the table: one table, every entry carrying the
half-repair, all three states asserted through the real function.

---

## Owns: the frame is fixed and only one word changes

```
plus    + adjective + que        more … than
moins   + adjective + que        less … than
aussi   + adjective + que        as … as
```

Three degrees, one frame. The superlative is the same frame with the article in front:
`le plus grand`, `la plus grande`, `les plus grands`.

A learner who has the frame can compare anything with any adjective they own, including
adjectives this lesson never lists. **Build at least one mission that requires exactly
that** — hand them an adjective from `adjectifs-essentiels` that you do not teach and
require the full comparison.

**Reframe:** *Pick the middle word and keep the frame.*

---

## Traps

**1. `bon → meilleur`, `bien → mieux`, and English merges what French splits.**

English has one "better". French has two, and the split is by part of speech:
`meilleur` is the adjective, `mieux` is the adverb. `plus bon` is not French.

This is `a2.14`'s savoir/connaître shape a second time — name that unit. It is also
`a2.17`'s: `mieux` is the comparative of `bien`, and `a2.17` was told to leave it to you.
**Close that loop by name.** Note the corpus leans on `mieux` (291) nine times harder
than `meilleur` (39); weight your teaching the same way.

Make this the `trapDrill`.

**2. The superlative agrees, and the article carries it.** `la plus grande`,
`les plus grands`. That is `a2.03`'s four-form grid inside your frame. The learner has
the rule and will not think to apply it here.

**3. `que` is obligatory.** `Il est plus grand.` is a complete sentence and it is not a
comparison. If the learner means one, `que` and its object must follow. English drops the
second term freely; French does not.

---

## Boundaries

- **Adjective agreement is `a2.03`, shipped.** One recap. You apply it, you do not teach
  it.
- **Adverbs and `-ment` are `a2.17`, shipped.** `mieux` is yours; `-ment` formation is not.
- **Possessive pronouns are `a2.34`, seq 34.** `la mienne` (13 hits), `le tien` (8) and
  `le mien` (7) sit **inside your own theme**, because comparing possessions is the
  natural frame. You will meet them while importing. **Use them as objects if you need to;
  teach none of them**, and flag in your report which ids you touched so `a2.34` knows.
- **`plus` in negation** (`ne … plus`, "no longer") is a different word doing a different
  job. Name it in one line, teach it nowhere.

---

## Shape

**24 missions, 30 quiz questions** — the measured A2 house shape (audit §2). Go past it
only for a reason you can name in one sentence.

Three required layouts, each in one section:

1. **The three degrees together**, `plus` / `moins` / `aussi` with one adjective, so the
   frame is visibly constant and only the middle word moves. This is the Owns.
2. **`meilleur` and `mieux` side by side**, with `plus bon` shown as what French refuses.
3. **The comparative and the superlative adjacent**, so the article's arrival is visible.

One `table` in a reference sheet, one `tapTable` in the flow at six rows or fewer, then
stop.

**Scene:** the A2 register — a sentence that dies mid-way. Someone comparing two things,
reaching `plus bon`, hearing it land wrong, and abandoning the sentence. Nobody corrects
them.

---

## Quiz — 30 questions, weighted toward `typeIn`

Match the measured A2 mix (mcq 379 / typeIn 317 / errorSpot 166 / listenChoose 96).

- **`typeIn` for the frame**, including one adjective the lesson never lists.
- **`errorSpot` for `plus bon`** and for the missing `que`. Both are whole-sentence errors
  and free-text is the only surface that catches them.
- **mcq for `meilleur` against `mieux`**, with the sentence in the stem so the part of
  speech is determinable.
- **`listenChoose`** on `plus` with its final consonant sounded or silent, which is a real
  audible distinction. Two items.
- **You cannot test the agreement on `la plus grande` by ear** — the four superlative
  forms of most adjectives are one sound. Use `typeIn`: `fold()` keeps a final `-e` and
  `-s`, so agreement is genuinely testable in writing.

---

## Test

Assert, and mutation-test each:

- The three degrees appear in one section with one adjective held constant.
- `meilleur` and `mieux` appear in one section; `plus bon` appears only inside an
  `errorSpot` item as the error, and the assertion is scoped to allow that one location.
- The superlative agrees in all four forms, asserted cell by cell.
- At least one production item uses an adjective absent from the lesson's own vocabulary,
  asserted by naming it and asserting its absence.
- `a2.17` and `a2.03` are named by unit id.
- No possessive pronoun appears in any production surface (decks, vocab, drills, quiz).
- `ne … plus` is not taught.
- The `grand` and `bien` repairs are asserted by name through the real
  `hasPlainNasalFor`, with stored, half-repair and final all asserted.
- Widen the jargon walk to `intro` and `overview`, run it over a `display()` walk, check
  the `-s` plural of every entry, and guard the `adjective` ratio rather than the word.

---

## Wiring

```
scripts/author-comparatifs-batch.ts         content:comparatifs
scripts/merge-comparatifs-into-seed.ts
scripts/data/comparatifs-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-08-comparatifs.test.ts
```

Ids from `fr.a2.comparaisons.133`. Your merge must carry every imported row the lesson
references. Do not hand-bump `seed.version`.

---

## Not measured, and worth one command each

- Whether `aussi … que` occurs anywhere outside the exact string probed.
- Whether `a2.17` shipped a quotable statement leaving `mieux` to you.
- The baseline test count.

## Report

Doctrine §F and Corrections §12, plus: which `comparaisons` ids you touched that carry
possessive pronouns; how `mieux`'s 291-to-39 dominance shaped the weighting; and the
adjective you used for the unseen-production mission.
