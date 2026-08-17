# Build a2.33 "Demonstrative Adjectives and Pronouns"

Trail seq **33** of 35. Build after `a2.08`, before `a2.34` and `a2.35`.

**Read in order, then this file:** `A2-BUILD-DOCTRINE.md` · `A1-BUILD-INVARIANTS.md` ·
`A2-BRIEF-CORRECTIONS.md` · `A2-TAIL-AUDIT.md`. Nothing here repeats them. Then read
**`a2.06` (direct object pronouns) as shipped**, because your lesson is its shape a second
time, and **`a2.16` (beau, nouveau, vieux) as shipped**, because your `cet` exists for its
reason.

---

## Identity — measured 2026-08-17, use as it stands

```
a2.33   seq 33   level a2   track a2
  title:  Demonstrative Adjectives and Pronouns
  sub:    Démonstratifs
  canDo:  Can point something out with ce and cette and replace it with celui and celle
  themes: null
  prereqUnitIds: ['a1.03']
  lessonIds:     []          first build, version starts at 1
```

---

## Corpus — measured 2026-08-17

**`demonstratifs` holds 0 rows and must not be created.** All eight headwords already
exist, in `mots-essentiels`:

```
ce      fr.sons.mots-essentiels.089   SUH        cet     fr.sons.mots-essentiels.090   SEHT
cette   fr.sons.mots-essentiels.091   SEHT       ces     fr.sons.mots-essentiels.092   SAY
celui   fr.sons.mots-essentiels.105   suh-LWEE   celle   fr.sons.mots-essentiels.106   SEHL
ceux    fr.sons.mots-essentiels.107   SUH        celles  fr.sons.mots-essentiels.108   SEHL
```

**You author no headwords.** Import all eight.

**Home theme: `pronoms-essentiels`** — 634 published, `fr.a2.*` 336 rows at max `.336`,
**NEXT FREE `fr.a2.pronoms-essentiels.337`.** Half this lesson is pronouns and `a2.06`,
`a2.24` and `a2.25` all live there. Check the row count after your apply.

**Sentence evidence splits sharply, and it decides where the authoring goes:**

```
ADJECTIVE  ce livre 37 · cet homme 12 · cette femme 8 · ces gens 2       rich, import
PRONOUN    celui-ci 3 · celle-là 0                                       thin, author
```

**Author the pronoun paradigm. Import the adjective evidence.** That is the whole corpus
job.

**Two respellings are already identical and that is not an error.** `cet` and `cette` both
ship as `SEHT`; `ceux` and `celles` share with `ce` and `celle`. See trap 1.

---

## Owns: two jobs, one root, and the noun tells you which

```
ce · cet · cette · ces          attach to a noun          ce livre
celui · celle · ceux · celles   replace the noun          celui-ci
```

Same root. The difference is whether a noun follows.

**This is exactly `a2.06`'s article-against-pronoun shape** — an article leans on a noun,
a pronoun leans on nothing. `a2.06` shipped that framing at seq 21. **Quote its wording
verbatim and name the unit.** By the second occurrence the learner should recognise the
shape rather than meet it fresh, and that recognition is worth more than the paradigm.

**Reframe:** *A noun after it means it points. No noun means it replaces.*

---

## Traps

**1. `cet` and `cette` are one sound and two spellings.** Both are `SEHT` in the corpus,
measured. `cet` is masculine before a vowel; `cette` is feminine. The ear cannot separate
them and the learner must decide from the noun's gender.

**No ear question may offer both.** Enforce it with a `HOMOPHONE_FORMS` list, not a
sentence in your report. Test it with `typeIn` instead — `fold()` keeps a final `-e`.

**2. `cet` exists only to stop two vowels colliding.** `cet homme`, `cet ami` — including
before a silent `h`, which is the proof that the rule is about sound and not spelling.
That is `a2.16`'s reason for `bel`, `nouvel` and `vieil`, and `sons.07`'s reason for
elision. **Name `a2.16` by unit id.** Three lessons, one phonological pressure, is the
strongest structural moment available in the tail.

**3. `celui` cannot stand alone.** It needs `-ci`, `-là`, a `de` phrase, or a relative
clause.

```
Je veux celui.        not French
Je veux celui-ci.     French
```

English "that one" works alone, so the learner produces the bare form. Measured: the
corpus has `celui-ci` three times and `celle-là` never, so this is where your authoring
goes. Make it the `trapDrill`.

**4. `ce` in `c'est` and `ce sont` is a third job.** 40 occurrences of `ce sont`, and it is
an impersonal subject, not your demonstrative adjective. **Name it in one line, teach it
nowhere.** A learner who has met `c'est` since a1.01 will otherwise fold it into the rule.

---

## Boundaries

- **Gender and number are `a1.03`, shipped.** Load-bearing here: a learner who cannot
  gender a noun cannot pick `ce` or `cette`. Lean on it, do not re-teach it.
- **Elision is `sons.07`.** Quoted as the reason for `cet`, taught nowhere.
- **Object pronouns are `a2.06`, `a2.24`, `a2.25`, all shipped.** `celui` is not one of
  them and does not sit before the verb. Say so in one line, because the learner has just
  spent three lessons putting pronouns there.
- **Possessive pronouns are `a2.34`, seq 34, immediately after.** `le mien` has the same
  article-plus-form shape as `celui`. Name it as coming next; teach none of it.

---

## Shape

**24 missions, 30 quiz questions** — the measured A2 house shape (audit §2).

Three required layouts, each in one section:

1. **The four adjectives and the four pronouns together**, in two rows, so the shared root
   and the split job are visible at once. This is the Owns.
2. **`ce livre` beside `celui-ci`**, the same referent with and without the noun.
3. **`cet homme` beside `ce livre`**, audible, one tap each, so the vowel collision is
   heard rather than read.

One `table` in a reference sheet, one `tapTable` in the flow at six rows or fewer.

**Scene:** the A2 register. Someone in a shop pointing at one of two things, who reaches
for `celui`, produces it bare, and is handed the wrong item — or nothing, while the
assistant waits for the rest of the sentence. Nobody corrects them.

**Audio:** `cet homme` and `ce livre` must be **one take, one voice, recorded adjacently**.
Apart, the learner compares two performances instead of two sounds. Write it into `desc`.

---

## Quiz — 30 questions, weighted toward `typeIn`

- **`typeIn` for `ce`/`cet`/`cette`/`ces`**, with the noun in the stem so gender and
  initial sound are determinable. This is the only surface that can separate `cet` from
  `cette`.
- **`errorSpot` for bare `celui`**, which is the error learners actually produce.
- **mcq for adjective against pronoun**, with the full sentence in the stem.
- **`listenChoose`** on `ce` against `ces` (`SUH` against `SAY`), which is genuinely
  audible. Two items. **Never `cet` against `cette`.**
- **No typed surface can test the accent on `celle-là`.** `fold()` strips it. Use mcq.

---

## Test

Assert, and mutation-test each:

- The four adjectives and four pronouns appear in one section, both rows present.
- `a2.06`'s article-against-pronoun wording is quoted **verbatim**; a paraphrase goes red.
- `a2.16` is named by unit id as the reason for `cet`.
- No authored correct sentence carries a bare `celui`, `celle`, `ceux` or `celles` without
  `-ci`, `-là`, `de` or a relative clause. Permit the bare form only inside an `errorSpot`
  item as the error, scoped to that one location.
- A `HOMOPHONE_FORMS` list contains `cet`/`cette` and no quiz option pair differs only by
  a member of it.
- `c'est` and `ce sont` are named and not taught, scoped to production surfaces.
- No object pronoun and no possessive pronoun is taught.
- All eight headwords are imported ids, asserted by id, not re-authored.
- **The house word boundary excludes `'`**, so it cannot see `c'est` or `celui-ci`. Drop
  the apostrophe from the left boundary of any guard that must see them.
- Widen the jargon walk to `intro` and `overview`, run it over a `display()` walk, check
  the `-s` plural of every entry, and guard the `adjective` ratio rather than the word.

---

## Wiring

```
scripts/author-demonstratifs-batch.ts       content:demonstratifs
scripts/merge-demonstratifs-into-seed.ts
scripts/data/demonstratifs-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-33-demonstratifs.test.ts
```

Ids from `fr.a2.pronoms-essentiels.337`, above whatever `a2.08` applied. Your merge must
carry every imported row the lesson references, including the eight from
`mots-essentiels`. Do not hand-bump `seed.version`.

---

## Not measured, and worth one command each

- Whether `celui de` or `celui qui` occurs in the corpus at all; only `celui-ci` and
  `celle-là` were probed.
- Whether `a2.06` shipped a quotable article-against-pronoun string. Read the lesson.
- The baseline test count.

## Report

Doctrine §F and Corrections §12, plus: `a2.06`'s wording, quoted; whether the `cet`/`cette`
homophone reshaped the quiz as much as this brief expects; and how many pronoun sentences
you had to author against the three the corpus held.
