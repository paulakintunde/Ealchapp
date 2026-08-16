# A2 Situations Band — the id ledger

Doctrine §D: **nobody authors until the ledger exists.** It did not exist when a2.07
started, and a2.07 ships first, so a2.07 produced it. Every figure below was measured
against **Postgres**, 2026-08-15, by `pnpm corpus:probe --theme <theme>`. Nothing here
is carried from a design document.

An author whose block turns out wrong **amends this file and says so in their report.**
Nobody quietly takes another range. Ids are the SRS key: never renumber.

---

## 1. The blocking-step-1 probe, run in full

This is the measurement the collation asked for in §1.3 and blocking step 1, and it
was still outstanding. **The seed side of the collation is right and the Postgres side
is nothing like it.** Every one of the eight author-into themes already holds 300-plus
published rows while the seed shows 0 to 17.

| unit | AUTHOR INTO | published in PG | present in seed | divergence |
|---|---|---|---|---|
| a2.07 | `au-restaurant` | **346** | 17 | 20x |
| a2.26 | `courses` | **316** | 5 | 63x |
| a2.26 | `argent-quotidien` | **300** | 1 | 300x |
| a2.27 | `transports-quotidiens` | **415** | 5 | 83x |
| a2.28 | `symptomes` | **334** | 0 | seed-absent |
| a2.29 | `hebergement` | **312** | 0 | seed-absent |
| a2.30 | `metiers` | **353** | 353 | none |
| a2.31 | `ecole` | **312** | 312 | none |
| a2.32 | `internet` | **336** | 0 | seed-absent |

**What this changes for every builder.** Five of the eight themes are effectively
invisible in the seed and fully populated in Postgres. A builder who measures absence
against `seed.json` will re-author several hundred existing rows. Probe Postgres, then
apply collation §1.3's interpretation rule: **published means REACHABLE and must be
imported by `itemId`, never re-authored.**

Also measured, and it corrects the collation's own table: §1.1 lists `courses` as
"thin, not phantom" on the strength of **5 seed rows**. Postgres holds **316**.
`courses` is not thin. a2.26 should expect to import heavily.

## 2. The two open cells in the theme map, both now closed

> **BLOCKING STEP 2 LANDED 2026-08-15.** The eight `themes` arrays in
> `author-full-curriculum-spine.ts` now match the map below, the dead
> `transport` entry is out of `SEED_CUT.themes`, and all eight unit rows were
> carried to Postgres and `seed.json` in the same change. `spine-drift.test.ts`
> is green and the suite is 4,187 pass / 0 fail.
> **No unit in this band is waiting on a theme.** Details in
> `40-A2-07-BUILD-REPORT.md` §13.
>
> All five phantoms were re-measured against Postgres before the edit rather
> than taken from the collation: `nourriture`, `sante`, `voyage`, `technologie`
> and `transport` all hold 0 published rows and 0 in the seed.

**a2.32 — `internet` vs `technologie-quotidienne`.** Collation §5's rule is "author
into whichever holds the most published rows; if `technologie-quotidienne` is empty,
take `internet`."

```
internet                    336 published
technologie-quotidienne     196 published   <- NOT empty, as §5 supposed it might be
appareils                   321 published   (import-from, unchanged)
```

**SETTLED: a2.32 authors into `internet`.** The tie-break never had to fire; `internet`
wins on the primary rule by 336 to 196. Note for a2.32's builder:
`technologie-quotidienne` is not empty and is a legitimate import source.

**a2.26 — `courses` vs `argent-quotidien`.** Collation §5's rule is that the
transaction goes in `courses` and only rows about money itself go in
`argent-quotidien`, with a fallback of "if `argent-quotidien` is effectively empty in
the DB too, put everything in `courses`".

```
courses             316 published
argent-quotidien    300 published   <- NOT effectively empty; the fallback does not fire
```

**SETTLED: a2.26 keeps the split.** Both themes are real, so the rule applies as
written: the till transaction, asking a price, the shopping act go in `courses`; coins,
notes, change, "j'ai pas de monnaie" go in `argent-quotidien`. a2.26 gets a block in
each.

## 3. The id blocks

Allocated from each theme's measured `NEXT FREE ID` at the `a2` prefix. Blocks are
non-overlapping and deliberately wider than any unit's stated corpus budget, so nobody
needs a second block.

| unit | theme | block | NEXT FREE when allocated | size |
|---|---|---|---|---|
| **a2.07** | `au-restaurant` | `fr.a2.au-restaurant.132` – `.199` | `.132` | 68 |
| **a2.26** | `courses` | `fr.a2.courses.168` – `.239` | `.168` | 72 |
| **a2.26** | `argent-quotidien` | `fr.a2.argent-quotidien.071` – `.100` | `.071` | 30 |
| **a2.27** | `transports-quotidiens` | `fr.a2.transports-quotidiens.135` – `.206` | `.135` | 72 |
| **a2.28** | `symptomes` | `fr.a2.symptomes.194` – `.265` | `.194` | 72 |
| **a2.29** | `hebergement` | `fr.a2.hebergement.074` – `.145` | `.074` | 72 |
| **a2.30** | `metiers` | `fr.a2.metiers.010` – `.081` | `.010` | 72 |
| **a2.31** | `ecole` | `fr.a2.ecole.016` – `.087` | `.016` | 72 |
| **a2.32** | `internet` | `fr.a2.internet.182` – `.253` | `.182` | 72 |

**a2.30 and a2.31 read as low numbers and they are correct.** `metiers` holds 353
published rows but only **9** at the `a2` prefix, and `ecole` holds 312 with only
**15** at `a2`. The bulk of both themes is `a1`. Do not read `fr.a2.metiers.010` as
evidence that the theme is empty.

**Check the row COUNT after your apply, not the maximum.** The maximum has been
useless since a2.10.l2 took `.461..500`, and a concurrent build can land below your top
without a highest-id check seeing it. Two units in this band can land inside another's
range without either collision guard noticing: a2.26 on payment ground and a2.29 on
booking ground both touch restaurant-adjacent content.

## 4. The head of a2.07's block is frozen

`fr.a2.au-restaurant.132` through `.137` are **the six repair-move rows**, authored
once for the whole band under collation §1.6 and §7.1. They are frozen at publication:
the six ids and the six `fr` strings never change, and a test asserts all six by id, by
theme, by `fr`, by rung order and by drill set.

**Do not author repair rows.** Cite these by `itemId`. The list is in
`04-REPAIR-MOVE-IDS.md`, which is the band's citation target.

## 5. Shared decisions (Doctrine §E), settled here so eight authors do not each pick

- **Level tag** is `a2` on every row and every lesson in this band.
- **Sentence budget** is ≤ 14 words; passé composé and futur proche are permitted in
  corpus sentences regardless of the unit's trail position.
- **Respell** per `RESPELL-CONVENTION.md`, and **no `‿` (U+203F) tie characters
  anywhere in this band.** It renders as a low underscore on a Pixel 6 and has already
  hit shipped sons.10 content. Where the convention says carry the tie, write the
  liaison consonant attached with a hyphen and leave a space (`voo-z a-vay`), and never
  make the liaison the point of a scored item.
- **Nasals** close with superscript `ⁿ`. Run every respelling through the real
  `hasPlainNasalFor`, and phrase the finding as "the respelling is correct", never as
  "the checker is quiet". It has three measured blind spots (Corrections §14.1).
- **`drills` is a Postgres enum array** and arrives as the raw literal
  `{flashcard,review}`. A `.includes()` on it is a substring test that lies.
- **Every item must be reachable**: named by a section, or released by a `deckTranche`
  and carrying a `flashcard` drill. `practice` needs `voiceflash` on every item it
  names; `dictation` needs `dictation`. Check against **Postgres**, not the seed.
- **The answer fold.** Before authoring any `typeIn`, `errorSpot` or dictée item, fold
  the expected answer and the most plausible wrong answer. If they collide the item
  tests nothing and must move to `mcq` or `listenChoose`. `fold()`
  (`answer.logic.ts:32`) strips accents, case, punctuation, hyphens, both apostrophes
  and **all whitespace**. See `03-ANSWER-FOLD-FACT.md`.
- **One lesson per unit**, band-wide (collation §C6). `den.tsx:169` opens
  `lessonIds[0]` and nothing else.
- **One quiz per lesson.** A second `quiz` section is silently never rendered.
- **No em dash** in any authored string; a label separator is the exception. The words
  "honest" and "honesty" are banned, and the band's `\bhonest` guard cannot see
  "dishonest", so match the substring.

## 6. Baseline

Test baseline and seed version at the moment a2.07 started, measured rather than
carried:

```
seed.json      version 47, 9,515 items, 65 lessons, 75 units
postgres       aws-0-ca-central-1.pooler.supabase.com:6543/postgres
published      28,147 sentences corpus-wide
```

---

*This file is `.md` and therefore gitignored. `git add -f` to track it.*
