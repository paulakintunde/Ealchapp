# Build a2.34 "Possessive Pronouns"

Trail seq **34** of 35. The last teaching lesson in A2. Build after `a2.33`, before
`a2.35`.

**Read in order, then this file:** `A2-BUILD-DOCTRINE.md` · `A1-BUILD-INVARIANTS.md` ·
`A2-BRIEF-CORRECTIONS.md` · `A2-TAIL-AUDIT.md`. Nothing here repeats them. Then read
**`a1.17` (possessive adjectives) as shipped**, **`a2.33` as shipped** (your shape a
third time), and **`a2.24` as shipped** (its `lui` and `leur`/`leurs` findings are both
yours).

---

## Identity — measured 2026-08-17, use as it stands

```
a2.34   seq 34   level a2   track a2
  title:  Possessive Pronouns
  sub:    Pronoms possessifs
  canDo:  Can say mine, yours and theirs with the right gender and number
  themes: null
  prereqUnitIds: ['a1.17']
  lessonIds:     []          first build, version starts at 1
```

---

## Corpus — measured 2026-08-17

**`possessifs` holds 0 rows and must not be created.** Five of the six headwords exist:

```
le mien    fr.b1.pronoms-essentiels.026   luh myehn
le tien    fr.b1.pronoms-essentiels.031   luh tyehn
le sien    fr.b1.pronoms-essentiels.034   luh syehn
le nôtre   fr.b2.pronoms-essentiels.004   luh NOH-truh
le vôtre   fr.b2.pronoms-essentiels.007   luh VOH-truh
le leur    NO HEADWORD  (but fr.a2.pronoms-essentiels.182 uses it in a sentence)
```

**Import all five and author only `le leur`.** They sit at `b1` and `b2` level in
`pronoms-essentiels`, which is your theme. **You cannot author `a2`-level copies**: no two
non-sentence items in one theme may share an `fr`, and `flashhub-coverage.test.ts` treats
a shared `fr` as one card served twice. Import across the level or the build breaks.

**Home theme: `pronoms-essentiels`**, `fr.a2.*` 336 rows at max `.336`. **NEXT FREE
`fr.a2.pronoms-essentiels.337`**, above whatever `a2.33` applied. Check the row count.

**Your sentence evidence lives in `a2.08`'s theme**, because comparing possessions is the
natural frame for both:

```
la mienne  13     le tien   8     le mien   7     à moi   5
le sien     1     le leur   1
```

Most of those ids are `fr.a2.comparaisons.*`. Import from there; do not move the rows, and
do not teach comparison. `a2.08` was told to flag which of those ids it touched — read its
report.

---

## Owns: it agrees with the thing owned, not the owner

```
le mien       masculine object       la mienne     feminine object
les miens     masculine plural       les miennes   feminine plural
```

`la mienne` is feminine because the **thing** is feminine, not because I am. English
"mine" never changes, so the learner has no instinct for this at all.

That is `a1.17`'s rule extended: possessive adjectives already agree with the thing
possessed, and this is the same principle with new forms and a definite article in front.
**Name `a1.17` and present this as a rule the learner already has**, not a new one.

**Reframe:** *It agrees with what is owned, never with who owns it.*

The generalisation test: hand the learner a noun the lesson never uses and require the
full possessive pronoun. One mission, near the end.

---

## Traps

**1. `le sien` is his or hers.** Gender is lost exactly where the learner expects it to be
marked. `a2.24` shipped the same surprise for `lui` at seq 22 — **quote its framing and
name the unit.** Two lessons, one fact about French: the third person collapses.

**2. `leur` never takes an `-s`; the article does.**

```
le leur · la leur · les leurs
```

`leur` is invariable inside the pronoun. The plural is carried by `les`, and the `-s` on
`leurs` is the article's agreement, not `leur`'s. `a2.24` shipped this exact trap for the
object pronoun against the possessive adjective — **quote it, do not write a third
version.** `fold()` keeps a final `-s`, so this is fully testable by `typeIn` and
`errorSpot`.

**3. `à moi` is what people actually say.** `C'est à moi` is far commoner in speech than
`C'est le mien`, and the learner will hear it first. Teach both, mark which is spoken and
which is written, and stay consistent with the `nous`/`on` register axis `a2.01` set for
the level. Measured: `à moi` occurs 5 times in the corpus.

**4. The circumflex on `le nôtre` and `le vôtre` is doing work.** `notre`/`votre` are the
adjectives; `le nôtre`/`le vôtre` are the pronouns, and the accent is the only written
difference. **`fold()` strips it, so no typed surface can test it** — use mcq. Say so in
your report rather than shipping a `typeIn` that accepts the mistake.

---

## Boundaries

- **Possessive adjectives are `a1.17`, shipped.** You need `mon`/`ma`/`mes` live as the
  contrast. Show them; do not re-teach the system.
- **Object pronouns are `a2.06`, `a2.24`, `a2.25`, shipped.** A possessive pronoun does
  not sit before the verb. One line, because the learner has three lessons of pronouns
  that do.
- **Demonstrative pronouns are `a2.33`, seq 33, shipped.** `celui` and `le mien` have the
  same article-plus-form shape, and `a2.33` had `a2.06`'s two-jobs framing. **Quote
  whichever string `a2.33` shipped**; this is the third occurrence and the learner should
  now recognise it without being told.
- **Comparatives are `a2.08`, seq 32, shipped.** You import from its theme. Teach no
  comparison.
- **Stressed pronouns** (`moi`, `toi`, `lui` after a preposition) are needed for `à moi`
  and are owned by no unit. Use the two or three you need, name the gap in your report,
  and do not build a paradigm.

---

## Shape

**24 missions, 30 quiz questions** — the measured A2 house shape (audit §2).

Three required layouts, each in one section:

1. **All four forms of one possessive**, `le mien` / `la mienne` / `les miens` /
   `les miennes`, with the owned noun visible in each so the agreement's source is
   obvious. This is the Owns.
2. **`mon livre` beside `le mien`**, adjective against pronoun, same referent.
3. **`C'est le mien` beside `C'est à moi`**, with the register marked on each.

One `table` in a reference sheet, one `tapTable` in the flow at six rows or fewer.

**Scene:** the A2 register. Two similar bags, two coats, two phones. Someone claiming
theirs, reaching for the form, agreeing it with themselves instead of the object, and
stopping. The item stays where it is. Nobody corrects them.

---

## Quiz — 30 questions, weighted toward `typeIn`

- **`typeIn` for agreement**, with the owned noun's gender and number fixed in the stem.
  `fold()` keeps a final `-e` and `-s`, so this works.
- **`errorSpot` for `leurs` where `leur` belongs**, and for a pronoun agreed with the
  owner.
- **mcq for `le nôtre` against `notre`**, because the circumflex cannot be typed-tested.
- **`listenChoose`** on `le mien` against `la mienne`, which is audible. Two items.
  **`les miens` and `les miennes` are one sound** — put them in a `HOMOPHONE_FORMS` list
  and never offer both.
- At least one item uses a noun absent from the lesson's own vocabulary.

---

## Test

Assert, and mutation-test each:

- All four forms of at least three possessives appear, asserted cell by cell.
- `mon livre` and `le mien` appear in one section.
- `C'est le mien` and `C'est à moi` appear in one section, each marked for register.
- `a2.24`'s `lui` framing and its `leur`/`leurs` wording are quoted **verbatim**; a
  paraphrase goes red. Same for `a2.33`'s two-jobs string.
- `leur` inside a possessive pronoun never carries an `-s`; only `les` pluralises. Permit
  `leurs` as the adjective and inside an `errorSpot` item as the error.
- The circumflex is present on `nôtre` and `vôtre`, asserted by name with a comment saying
  it is deliberate, and no `typeIn` question turns on it.
- A `HOMOPHONE_FORMS` list contains `miens`/`miennes` and the equivalents.
- The five imported headwords are asserted by id and not re-authored. `le leur` is the
  only authored one.
- No comparison and no demonstrative is taught, scoped to production surfaces.
- **The house word boundary excludes `'`**, so drop the apostrophe from the left boundary
  of any guard that must see `c'est`.
- Widen the jargon walk to `intro` and `overview`, run it over a `display()` walk, check
  the `-s` plural of every entry, guard the `adjective` ratio rather than the word.

---

## Wiring

```
scripts/author-possessifs-batch.ts          content:possessifs
scripts/merge-possessifs-into-seed.ts
scripts/data/possessifs-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-34-possessifs.test.ts
```

**Check for a collision with the existing `author-possessifs-batch.ts`** (a1.17). It
exists and it is not yours; rename if it does.

Ids from `fr.a2.pronoms-essentiels.337`, above `a2.33`. Your merge must carry every
imported row, including the `b1` and `b2` headwords and the `comparaisons` sentences. Do
not hand-bump `seed.version`.

---

## Not measured, and worth one command each

- Whether importing a `b1`-level row into an `a2` lesson trips any level guard. **Check
  before you plan the corpus**; if it does, the answer is a different theme, not a
  duplicate `fr`.
- Whether `les miens` / `les miennes` and the other plurals exist as headwords; only the
  six singulars were probed.
- The baseline test count.

## Report

Doctrine §F and Corrections §12, plus: whether the cross-level import was permitted; the
three quoted strings (`a2.24` × 2, `a2.33` × 1) and whether they were available and
consistent; and the stressed-pronoun gap, named.
