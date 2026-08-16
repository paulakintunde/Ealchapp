# a2.26.l1 « Les courses & l'argent » — build report

**Trail seq 25. Second of eight in the A2 situations band, and the second built.**
Shipped to Postgres and `seed.json` on 2026-08-15. Not published; `seed.version`
left at 49, which belongs to the publish step.

Both gates were open before a line was authored:

- `04-REPAIR-MOVE-IDS.md` exists and all six rows read back from Postgres as
  published, so **a2.07 has landed** and this unit was built against a2.07 as
  shipped rather than against its design document.
- **`listening.hideLines` shipped** (`schema.ts:676`, `MissionRich.tsx:1966`,
  `listening-hidelines.test.ts`, and a2.07 already uses it). `s07-heard` is the
  blind CO mission as specified. The dictation fallback was **not** taken, so
  this unit is **not** exposed by blocking step 4.

---

## 1. Numbers

| | before | after |
|---|---|---|
| `courses` published in PG | 316 | **353** (+37 authored) |
| `argent-quotidien` published in PG | 300 | **316** (+16 authored) |
| `quebec-et-francophonie` published in PG | 595 | **597** (+2 authored) |
| `courses` in the seed | 5 | **61** |
| `argent-quotidien` in the seed | 1 | **28** |
| seed items | 9,599 | **9,685** |
| seed lessons | 66 | **67** |
| test suite | **4,195** pass / 0 fail | **4,237** pass / 0 fail |

55 rows authored, 45 imported and carried. **Row counts moved by exactly the
authored count in all three themes**, so no concurrent build landed inside a
block. Checked as a count, not a maximum.

**Vendor voice: 36 of 53 = 67.9%**, against the band floor of 40% (collation
§1.5). Measured on the `voice` tag over the two author-into themes; the Quebec
rows are recognition vocabulary with no speaker and are excluded from both
halves. Asserted by the batch script and by the test.

**Id blocks held exactly as the ledger allocated them.**
`fr.a2.courses.168`–`.204` (of `.168`–`.239`),
`fr.a2.argent-quotidien.071`–`.086` (of `.071`–`.100`),
`fr.a2.quebec-et-francophonie.199`–`.200`. No amendment to `07-BAND-ID-LEDGER.md`
is needed.

---

## 2. Twelve claims measured false, and one is a live tool defect

Full detail in the header of `scripts/data/courses-corpus.ts`. The five that
change what another author should do:

### 2.1 `corpus:probe --words` reports a false ABSENCE for any articled input. FIXED AT SOURCE.

`probe-corpus.ts:131` read:

```ts
const forms = [w, ...ARTICLES.map((a) => (a.endsWith("'") ? a + w : a + w))];
```

It maps every article onto `w` **as passed** and never strips one the caller
supplied, so `--words "le dépanneur"` probed `le dépanneur`, `le le dépanneur`,
`un le dépanneur` … and never `un dépanneur`, which is published at
`fr.a2.quebec-et-francophonie.031`. It printed **"ABSENT in every article form.
Safe to author."** The ternary's two branches are identical, which is how the
line survived review.

The header's advice ("pass bare words") is sound and bare words did work. But
**every pre-flight command in this band passes articled forms**, including this
unit's, because that is how the corpus stores nouns — six of this build's eight
probed headwords were articled. Found when a `--find` sweep turned up the row
the `--words` probe had just called absent.

Fixed in this commit, because seven more units run this script. Same family as
the accent defect (a1.21) and the `--tokens` under-report (a2.12): **a false
absence reads as permission to author.**

### 2.2 The corpus was NOT silent on asking a price

The prompt's sharpest miss. Two price questions are already published:

```
fr.a2.courses.007            Quel est le prix, s'il vous plaît ?
fr.a1.argent-quotidien.077   combien ça coûte              (kind: phrase)
```

Both are the learner's, both are the classroom register, neither is what is said
at a till. That sharpens the unit rather than weakening it: `s05-yourside` card 3
and quiz r3 q7 now teach the contrast explicitly. Imported, not re-authored.

`ça fait combien` itself **is** 0 rows, confirmed against Postgres. So are
`ça vous fait`, `ça fera`, `et avec ceci`, `je vous rends` and
`vous avez la monnaie`.

### 2.3 "Nothing in the corpus covers change" is half false, and the halves matter

The topic is covered three times and **always in the third person**:

```
fr.a1.argent-quotidien.017   Le vendeur me rend la monnaie.
fr.a2.courses.108            Le vendeur a compté la monnaie deux fois.
fr.a2.courses.137            Le vendeur m'a rendu la monnaie.
```

A learner who has met all three has still never heard « Je vous rends deux euros
soixante » said **to** them. The gap is the grammatical person, not the
vocabulary. That is a more precise statement of the band's mandate than the
prompt's.

### 2.4 The vendor voice is at ZERO, lower than a2.07 found

a2.07 hand-classified 7 of 346 `au-restaurant` rows (2.0%) as server-voice. The
same sweep over `courses` + `argent-quotidien` at a1 and a2 returns four
second-person or interrogative rows and **not one is the vendor** (two are a
friend using `tu`, one is the learner, one is a friend). Every other row is a
noun, an infinitive phrase, or a declarative in the first or third person.
**The cashier did not exist.**

### 2.5 The prompt's own 24-mission table omits the MANDATORY practice section

The prompt states the band rule ("practice is mandatory, not optional …
every lesson in this band ships exactly one speaking drill and cannot opt out")
and then lists 24 missions with no practice row. `lesson-contract.test.ts:505`
fails the lesson without one.

**This unit ships 25 sections.** `s20-say` is the practice section; the prompt's
`s20-scenario` through `s24-roundup` shifted to `s21`–`s25`. a2.07 hit the same
arithmetic and also shipped 25.

---

## 3. What was measured true

`courses` 164 a2 rows / next free `.168`; `argent-quotidien` 70 / `.071`;
`marche` 343 published and 343 in the seed; `nombres` 448/448; `vetements` 181
a2 published and 0 in the seed; `quebec-et-francophonie` a2 179 / next free
`.199`. The DB unit row matches the spine **byte for byte**, including the curly
apostrophe in `Les courses & l’argent`, and already carried
`['courses', 'argent-quotidien']` because blocking step 2 landed first. The
ledger's split decision (§2) held: `argent-quotidien` has 300 published rows, so
collation §5's "if it is empty, use courses" fallback never fired.

Also verified true: a1.28 `s15-prices` ("A Price Is One Run"), a1.28
`s17-written` ("What The Label Actually Says"), a1.28 `s16-pricehear`, a1.27
`s17-speed` ("Faster Than You Can Add") and a1.29 `s11-containers` ("A Kilo, a
Slice, a Bottle") all exist as shipped and teach exactly what the prompt says.
None is re-taught here; all are quoted by unit id.

---

## 4. The reframe

> **The number comes once. Asking again is part of the script.**

Carried verbatim across seven sections. The second sentence is a **citation, not
a claim**: asking again is a2.07's move, and every surface carrying the reframe
also names a2.07 or refs its material.

Rejected: *"Currency, then the small number"* and *"A price is one run"* (both
a1.28 §15's, one of them its card head verbatim); *"Learn the shape, not the
sum"* (a1.27's reframe verbatim); *"Wait for the till, not the label"* (true, but
it describes one unscored mission of three); *"Listen for ça fait, the number is
next"* (accurate, and it collapses to `s09` alone).

---

## 5. Act structure: the Owns outweighs the paradigm

| act | missions | |
|---|---|---|
| 1 the transaction that died at the till | 2 | scene, goals |
| 2 the script takes the paradigm's slot | **4** | shape, theirside, yourside, quantity |
| 3 the number, and the number after it | **7** | heard, tail, total, which, repair, change, paying |
| 4 the ways the counter breaks you | 4 | refuse, quebec, errors, followup |
| 5 the whole counter | 4 | dictee, receipt, say, scenario |
| 6 measure | 4 | review, progress, quiz, roundup |

There is no paradigm at a till, so the seven-move script takes act 2's slot and
act 3 is price and change reception alone: **7 against 4.**

One scene, one scenario, one reading, one dictation, one listening pair, zero
`table`. `table` renders but has never been used in any shipped lesson while
`tapTable` has been used 123 times, so `tapTable` it is. None of the
genuinely-untested types repeats.

### Folded, and dropped (collation §C6 requires this named)

**Folded.** The boulangerie, the market stall, the supermarket till and the
clothing shop are the same seven moves with one slot swapped, so they are
rotated as *settings* across `s03`, `s07`, `s17`, `s19` and `s21` rather than
taught four times.

**Dropped.** (a) The clothing shop as a teaching block — it survives as one
setting and one phrase, `Vous avez ça en trente-huit ?`, which carries the size
question without needing `la taille` or `la pointure`, both of which already
exist in `vetements` and `rp-achats`. **Zero `vetements` ids are named.**
(b) **Returns and exchanges**, which inverts the information gradient and needs
`parce que` and a held position. It is B1, it is **unowned and available**, and
it would have been the weakest thing in the lesson.

---

## 6. The Quebec exception, and how it is enforced

Six rules, written out in `courses-corpus.ts` §D. Every one is asserted rather
than asserted-about:

1. **Every scored surface is France, in euros.** A learner never has to know
   which country they are in to answer.
2. **The currency word is the region flag and is always audible.** Test:
   no scored option and no `listenChoose` `say` contains `dollars`.
3. **Quebec appears in exactly two places, both `cardDeck`.** Test asserts the
   section list is exactly `['s13-paying', 's15-quebec']`.
4. **No arithmetic.** No `TPS`, no `TVQ`, no rate, no "plus tax". Asserted by
   four regexes in both the batch script and the test.
5. **No Quebec form is a correct answer and none is a distractor.** A form that
   is correct in Montreal and marked red is a defect a TEF Canada candidate will
   notice and be right about. `QUEBEC_FORMS` is walked against **184 scored
   options** — quiz opts, quiz `accept` entries, speak targets, trapDrill
   options, groupDrill checks and listening options.
6. **The scenario is France throughout**, `vous`, eleven turns. The design's
   alternate Quebec setting is cut.

Enforced further by the drill array rather than by intention: **all three Quebec
rows carry no `voiceflash`**, so none can reach a speak drill even if a later
edit names it in one.

`s15-quebec` sits in **act 4**, so no dollar figure is ever adjacent to a euro
figure being tested. Its card 1 carries **both currencies in one body**, which
the test asserts, because separating them turns the exception back into a
vocabulary note.

`un dépanneur` is **imported** (§2.1). Only `magasiner` and one framing sentence
are authored, into `quebec-et-francophonie`, matching a2.07's convention and its
cap of two.

---

## 7. The repair move: zero rows authored

`s11-repair` cites a2.07's six frozen ids and names a2.07 by unit id. The design's
`s12-sayit` production drill is **cut**, because a card plus a dedicated drill is
re-teaching a neighbour's Owns (doctrine §B.7). Production survives at scenario
turn 8 and quiz round 4, both already in the design.

**No drill kind was added to any of the six.** a2.07's frozen set already carries
`voiceflash` and `dictation`, so no mutation of another unit's rows was needed.

The guard is written as a **fold** test over every row in both author-into
themes, not a string test, so a later author cannot slip `pardon ?` in under
different punctuation.

Prior exposure named and left where it is: `fr.b1.courses.103` and
`fr.a1.argent-quotidien.034`.

---

## 8. Four gates fired during the build

1. **`validateDensity` core-words** — eight card bodies over the 45-word limit.
   Trimmed.
2. **`validateDensity` quiz-spread** — 100% of correct answers at position 0.
   Worth recording as a **contradiction in the doctrine**: §C says *never
   hand-randomise the quiz* (because `LessonRich` permutes options at runtime),
   while `validateDensity` requires ≤40% at position 0 and is a publish gate.
   Both are true; the gate wins. 24 option sets were spread deterministically.
3. **`validateDensity` reframe** — needs the reframe verbatim in ≥3 sections; it
   was in 2. Now 7.
4. **The `honest` guard and the `ladder` guard, both mine, both on my own copy.**
   The `ladder` one was right and the copy was imprecise: the quiz now says
   *repair ladder* explicitly, which is clearer for a learner anyway.

---

## 9. The neighbour this build moved, and the one it withdrew from

**a1.03 is now v6.** The merge carried imported shop and money nouns into the
seed and moved **five** of a1.03's printed ending counts:

```
-e     905 -> 912        -on   143 -> 144       -ant  18 -> 20
-al     11 -> 12         -euse   6 -> 7
```

**Not one accuracy moved** (70→70, 60→60, 100→100 ×3), so every rule a1.03
teaches is exactly as true as it was and only the counters changed. This is the
maintenance `genre-endings.ts` documents in-source and that a2.07 performed one
day earlier for `le pourboire`, and that a1.22 institutionalised with
`a1-22-pays.test.ts`'s "after the move" assertion.

**Measured, not guessed: removing all 55 authored rows moves a1.03 by nothing.**
Every bit of the drift came from **imports**. That is a1.23's finding exactly —
a carry moves a population even when an authoring does not, and an
authored-only guard is blind to it. So a2.26's guard walks what the lesson
**names**, not what it authored.

**Where withdrawal fit, it was applied.** Three carries whose only effect was on
a1.03 were pruned, because this lesson did not need them: `le billet` (`-et`),
`une réduction` and `la promotion` (`-tion`). Those two endings went back to 29
and 36 and never appear in the change above. Invariants §5's "withdraw rather
than argue" was applied where it fit and not where it would have gutted the
lesson: a shopping unit that cannot name `la caisse` or `la vendeuse` is not a
shopping unit.

The merge script upserts and never deletes, so the prune is an **explicit list
by id** with the reason beside it.

### A second defect found in a shipped merge script, and fixed

`merge-noun-gender-into-seed.ts` wrote

```ts
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];
```

which **filters a1.03.l1 out and pushes it onto the end**. a1.03 sits near the
front, so every lesson after it shifted one index and `JSON.stringify` rewrote
all of them: a **297,768-line diff** for a change touching five numbers. The
content was correct and the suite was green, which is why it survived several
re-renders; the cost is an unreviewable diff and a guaranteed conflict with
every concurrent author. a2.07 wrote this fix for `items` in its own merge and
documented a 512,711-line diff; this is the same hazard in the `lessons` array,
in a script that predates the finding.

Fixed to replace in place. The order the earlier run destroyed was restored
programmatically — **`seed.json` was never `git checkout`ed**, per the standing
rule.

### And a diff-reading correction worth having

After the fix, `git diff --stat` still reported 37,596/32,252. That is a **git
diff alignment artifact**, not a rewrite: 400k lines of highly repetitive JSON
defeat the default Myers algorithm.

```
default    37,596 / 32,252
patience    7,322 /  1,978        <- the honest figure
histogram   8,081 /  2,737
```

Verified structurally instead: item order identical across all 9,599
pre-existing items, lesson order identical across all 66, `scenarios`,
`playlists` and `speakPath` untouched, exactly **8** pre-existing items changed
(a key added) and exactly **7** real deltas inside a1.03 (five figures, one card
body, the version). **Read this file's diffs with `--patience`.**

---

## 9b. The dead-field pass, applied after the first green run

`_a226_deadfield_fix.mjs` was run against `courses-lesson.ts` **after** this
unit had already been applied and merged, so for a short window the source and
the shipped copy disagreed. That is the drift `genre-lesson.ts` documents at its
own scenario block, and it is the reason a re-apply followed. **Source and seed
now agree.** Four changes, all verified against the renderer rather than taken
on trust:

| change | verified how |
|---|---|
| `sub` -> `note` on 17 groupDrill items | `sub` is not a rendered field. `groupdrill-second-line.test.ts` documents 583 of 730 lg cards across 28 lessons showing the French and nothing else. a2.07 is already fully converted: 0 `sub`, 38 `note`. |
| `itemIds` stripped from six sections | `cardDeck` and `groupDrill` never read `itemIds`; only `practice` and `dictation` do. a2.07 hit the same thing on its own `s17-repair`, stripped it and re-applied, and `a2-07-restaurant.test.ts:106` now asserts the ABSENCE. |
| `beats` and `DRILLS` typings | TypeScript only. |

**Reachability was checked before accepting it, not after.** All six removed
sets — 34 ids including a2.07's frozen six — are still released by this
lesson's own `deckTranche`, so `ITEM_IDS` is unchanged at **100** and nothing
became unreachable.

The script's own list named five sections; **six** lost their `itemIds`
(`s06-quantity`'s went too, and it was not in the list). No harm done, because
`groupDrill` does not read the field either, but the discrepancy is recorded
rather than smoothed over.

**Three test consequences.** `s11-repair` can no longer prove its citation by
`itemIds`, so it now proves it the way a2.07 does: the section must carry NO
`itemIds`, the six ids must still be released by a `deckTranche`, and the first
three cards must quote rungs 1 to 3 verbatim. Two assertions were added: one
that only `s18-dictee` and `s20-say` carry `itemIds` at all, and one that no
groupDrill item carries `sub`. **40 assertions, up from 38.**

### And 17 typecheck errors, all mine

`pnpm typecheck` was clean in both packages before this build and reported 17
errors afterwards, every one in `author-courses-batch.ts` or
`merge-courses-into-seed.ts`. One root cause:

```ts
const die = (m: string): never => { ... };      // narrows NOTHING
const die: (m: string) => never = (m) => { ... };  // narrows
```

TypeScript treats a call as a never-returning assertion only when the **const**
carries the type annotation, not when the arrow does. The two read identically.
Every error was a guard that was itself correct, complaining about code after a
`die()` that TS could not see was unreachable. Fixed in both scripts; both
packages are back to **0 errors**.

`ealch-v2` and `ealch-admin` both typecheck clean, and the whole suite is
**4,237 pass / 0 fail**.

---

## 10. Corpus plan, as executed

Authored into `courses` (the till transaction), `argent-quotidien` (money
itself: coins, notes, change), and `quebec-et-francophonie` (two recognition
rows). **Nothing authored into `nombres`, `expressions-de-quantite`, `marche` or
`vetements`.**

| kind | count | |
|---|---|---|
| phrase | 26 | the vendor's nine lines, the learner's four moves, the four refusals, the payment formulas, the change lines |
| sentence | 21 | priced and change utterances, every number **spelled in words** |
| word | 6 | `le paiement sans contact`, `le code`, `le sous-total`, `le rendu`, `l'appoint`, `magasiner` |
| Quebec | 2 | of the above, authored into `quebec-et-francophonie` |

Formulaic sequences are stored **whole** as `phrase` and never decomposed: at A2
the learner stores `ça fait combien` as one unanalysed unit, not as
ça + faire + combien.

Imported rather than authored: 45 rows, from `courses` (the entire noun
inventory and five of the payment phrases), `argent-quotidien`, `marche` (the
stall and the people behind it) and `au-restaurant` (a2.07's six).

---

## 11. Quiz: 4 rounds of 8, and what the fold made impossible

`passMark` 70. Every question carries a `why` and a `ref`. Every `listenChoose`
carries `say`. Every `errorSpot` carries `prompt`.

Round 1 is **eight `listenChoose` with digit-string options** and it carries the
unit's real CO payload alongside `s07-heard`. `ListenChooseCard` plays
`audio.clip ?? say ?? opts[correct]` and never prints `say`, which makes it the
only genuinely audio-only scored surface in the app; and mcq options are graded
on an **index**, never folded, which is the only way a number can be tested at
all.

**Questions I wanted and could not write:**

- *"Write ninety-seven euros thirty in digits"* as a `typeIn`. `97,30`, `97 30`
  and `9730` all fold identically. a1.28 §17 teaches the decimal comma and **no
  scored surface in this app can grade it.** Moved to round 1.
- *"Is it quatre-vingt-dix or quatre vingt dix?"* Word division folds away.
- A `typeIn` on `Ça fait combien ?` testing the cedilla — `ca fait combien`
  passes. The question survives, but its difficulty is now **word choice**
  (`fait` not `coûte`, `combien` not `quel prix`), which does survive folding.

The band rule is asserted rather than asserted-about: every `typeIn` and
`errorSpot` is checked so that `fold(prompt) !== fold(answer)` and so that some
`accept` entry folds onto the stated answer. **Every price on every scored
surface is spelled in words**, which makes `quatre-vingt-dix-sept euros trente`
and `quatre vingt dix sept euros trente` fold the same — correct behaviour, not
a defect, because both are right.

---

## 12. Exam mapping — recorded here, authored nowhere

Zero `ExamTask` rows and zero `Scenario.exam` values, per collation §1.12. The
`EXAM_FORMATS` enum was **not** touched: `delf_a2` is approved in principle and
deferred to the commit that authors the first `delf_a2` task (C1).

| surface | maps to |
|---|---|
| `s07-heard`, quiz r1 | **TEF CO** / **TCF CO** — short transactional exchange, one figure, one hearing |
| `s17-followup` | **TEF CO** — the unscripted service question |
| `s19-receipt` | **DELF A2 CE** — a real document, questions requiring inference across layout |
| `s21-scenario` | **DELF A2 PO monologue suivi / exercice en interaction** — a full transactional exchange |
| `s20-say`, quiz r4 | **DELF A2 PO** — the repair move under pressure |

---

## 13. Not verified, said plainly

- **No device check was run.** No Pixel 6 was attached during this build. The
  unit uses one each of the five untested section types and takes no fallback,
  so blocking step 4 does not gate it (collation §1.10 as corrected). What that
  leaves unverified is **layout**, and four places are named for whoever has a
  device next:
  - `s01-scene`'s longest bubble, « Ça fait quatre-vingt-dix-sept euros
    trente. » at 43 characters, against the scene bubble's tail-clipping;
  - `s04-theirside`, `s08-tail` and `s12-change`, all six-row `tapTable`s with
    price strings in the cells;
  - `s15-quebec` card 1, which the test pins as containing both currencies but
    cannot prove renders them on one screen;
  - `s07-heard`'s masked state, which is one day old in the product.
- **`s10-which` trains discrimination with the text visible.** `TrapDrillView`
  prints `promptSay` as text in all four render paths. The contrast is real and
  worth drilling; it is not the blind test, and the copy says so. `s07` and quiz
  round 1 are the blind ones.
- The five **`la monnaie`** respellings across six themes are named and not
  reconciled; not this unit's to fix.
- Three published rows this unit imports are flagged by the real
  `hasPlainNasalFor` and are genuine defects rather than blind spots:
  `fr.a2.courses.015` `uhn ruh-SÜ`, `fr.a2.quebec-et-francophonie.031`
  `uhn day-pah-NUHR`, and both `la pointure` rows (`pwan-TÜR`). Imported, not
  repaired: this build does not widen its scope to another lesson's
  respellings. **Worth a ticket.**

---

## 14. For the six units still to build

1. **`corpus:probe --words` is fixed. Re-run any absence you measured with an
   articled form before 2026-08-15.** a2.27 and a2.28 were authored in parallel
   with this build and may be carrying a false absence.
2. **Your merge will move a1.03.** Any gendered single-word noun you carry into
   the seed does it. Measure with the real `measureEnding` before you apply, and
   decide per row whether to withdraw the carry or move the counter. Both are
   legitimate and both have precedent.
3. **`practice` is mandatory and the prompts' mission tables omit it.** Budget
   25 sections, not 24.
4. **The quiz-spread gate contradicts "never hand-randomise the quiz".** Spread
   your authored positions anyway.
5. **Read `seed.json` diffs with `--patience`.**
6. **`cardDeck` and `groupDrill` never read `itemIds`, and `sub` on a
   groupDrill item draws nothing.** Put the second line in `note`. Cite a
   neighbour's rows through a `deckTranche` and prove the citation with card
   text, not with a dead array.
7. **Annotate `die` on the const, not the arrow**, or every guard you write
   produces typecheck errors in the code after it.
8. **`Vous réglez comment ?` now exists in two themes** (`au-restaurant`,
   a2.07's, and `courses.204`, this unit's). Cross-theme duplication is settled
   legal precedent (collation §7.5). Do not "fix" it.

---

*Companion files: `scripts/data/courses-corpus.ts` (the full measurement
header), `scripts/data/courses-lesson.ts`, `scripts/data/courses-terms.ts`,
`scripts/author-courses-batch.ts`, `scripts/merge-courses-into-seed.ts`,
`ealch-v2/src/content/a2-26-courses.test.ts` (40 assertions).
This file is `.md` and therefore gitignored: `git add -f` to track it.*
