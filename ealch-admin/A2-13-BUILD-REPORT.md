# a2.13 build report — "Irréguliers 3 : vouloir, pouvoir, devoir"

Built 2026-08-12. Trail seq 7 of 35. Doctrine §F, plus the four things
`A2-13-MODAUX-PROMPT.md` asks for by name.

```
lesson      a2.13.l1 v1     32 sections · 7 acts · 45 questions · 50 items
authored    30 rows         fr.a2.verbes.341 .. .370
imported    20 rows         out of 11 themes, 0 infinitives authored
postgres    fr.a2.verbes    280 -> 310
seed        8787 -> 8832 items, 48 -> 49 lessons, version 29 UNCHANGED
suite       3195 -> 3261    (66 new, 0 fail)
mutations   16 run          0 invisible to all three layers
```

---

## 1. THE FOUR QUESTIONS THE BRIEF ASKS

### 1.1 The `il faut` decision, and the gap it exposes

**INCLUDED, as one context card in the boundary act (`s23-ilfaut`), with the two
imported rows and nothing else.** Not conjugated, not drilled, not quizzed as
production, no paradigm. The batch refuses any other form of the impersonal
(`fallait`, `faudra`, `faudrait`, `falloir`) anywhere in the lesson, and refuses
a `typeIn` question whose answer contains `faut`.

**IT IS A CURRICULUM GAP AND IT IS WORSE THAN THE BRIEF SUSPECTED.** The brief
says "it is in no unit's canDo anywhere in A2" and marks it unverified. Measured
against all 75 curriculum units on 2026-08-12:

```
il faut       NO UNIT AT ANY LEVEL names it in a canDo, a title or a grammar list
occurrences   319 published sentences
by comparison peut 190 · doit 103 · dois 76 · veux/veut 63 · doivent 58
```

**`il faut` is the single commonest modal form in the corpus, ahead of every
conjugated form of the three verbs this lesson does teach.** A learner who
finishes A2 will have met it 319 times and been told nothing about it.

The three options were: leave it out and let the gap stand; teach it properly and
give this lesson a fourth paradigm, which would make the impersonal rather than
the modal the thing the learner remembers; or one recognition card. The third
was taken. **It is a compromise, not a fix.** The gap belongs to whoever owns the
A2 spine, and the natural home is a2.19 (The Near Future) or a2.35 (A2 Review),
neither of which currently mentions it.

### 1.2 The unseen verb, and where it came from

**`arroser`, from `fr.a1.jardinage.108`**, a theme this lesson names nowhere
else. Respelled `ah-roh-ZAY`, ungendered, published.

It is the generalisation mission (`s13-unseen`), and the design decision that
matters is this: **it is NOT imported.**

```
in itemIds          no
in a deck tranche   no
in a term           no
in the sheet        no
on a screen         yes, once, inside the mission that hands it over
```

The moment the lesson gives the learner a card for it, the lesson has taught it,
and the claim being tested — that they can use a verb the course never taught
them — is gone. The row is read from Postgres by the manifest so the batch can
check the printed respelling against the database, and there is no accessor in
`modaux-imported.ts` that would let it into `itemIds`. All four absences are
asserted in the batch, the merge and the test.

`nager` was rejected as the unseen verb: `je sais nager` is a2.14's headline
contrast and taking it would have spent that lesson's example.

### 1.3 How `voudrais` was taught without teaching the conditional

`POLITE_FORMS` is a closed list of **two**: `voudrais` and `voudrions`. The batch
refuses fourteen other forms of that family by name, anywhere in the lesson,
including inside a `note` or a `why`.

The words shipped, verbatim:

> **`voudrais` is not a present tense and it is not a version of veux you can
> build. It is one fixed form, and `voudrions` is the only other one worth
> carrying at this stage. Its proper name and its whole family come much later;
> for now, learn these two the way you learned bonjour.**

and on the card:

> **Learn this one whole. It is not a present tense and its own name comes much
> later.**

The batch asserts that the polite section or the `thePolite` term contains one of
`fixed form` / `learn whole` / `learned whole`, so a later author who trims the
naming-as-fixed loses the build rather than shipping a form the learner thinks
they can derive.

**The register pair is a minimal pair INSIDE the lesson's own frame:**

```
fr.a2.verbes.341   Je veux payer.        correct, and it lands as a demand
fr.a2.verbes.362   Je voudrais payer.    the same sentence, asking
```

One word changed, nothing else moved. That is asserted by comparing the two
sentences with their first two words removed and requiring the tails to be equal.
The imported café pair follows as corroboration, and because it is the sentence
**a1.01 already puts in the learner's mouth in the first lesson of the course**,
unexplained. This lesson pays that debt by name.

### 1.4 `savoir` appears nowhere

Confirmed, and the guard is scoped to **production surfaces** — everything except
the boundary card, which has to be able to name a2.14 in order to hand the
material over.

Twelve forms are refused: `savoir sais sait savons savez savent connaître
connais connaît connaissons connaissez connaissent`, plus `nager`.

**AND THE GUARD CAUGHT A REAL COLLISION IN THE HOUSE CHROME.** The standard
roundup heading in this band is `Ce que vous savez faire`, and the goals heading
is `Ce que vous saurez faire`. Both are forms of `savoir`. This lesson uses
`pouvoir` instead:

```
s02-goals    Ce que vous allez pouvoir faire
s32-roundup  Ce que vous pouvez faire maintenant
```

which is better copy for a lesson about `pouvoir` as well as being safe. **Every
other A2 lesson ships the savoir heading**, so a2.14 has to decide whether that
counts as a collision or whether the chrome is exempt. Flagged for the ledger.

---

## 2. THE BRIEF, MEASURED

Nine claims checked. **Five were wrong**, and two of those would have cost the
build.

| # | Claim | Verdict |
|---|---|---|
| 1 | the reframe candidate | **UNSHIPPABLE.** Uses `conjugate`, on the jargon list. Its own rejected alternative uses `infinitive`, also on the list. Both candidates in the brief are unusable. |
| 2 | "SEVEN of ten `devoir` rows are the noun" | **NINE of ten.** Plus `les devoirs` as an uncounted eleventh. Exactly one row is the verb, and it is the one the brief names. |
| 3 | corrections §3, "no minimal pairs" | **FALSE on this lesson's headline contrast.** Two exact pairs exist and both halves of one are imported. |
| 4 | "628 modal + infinitive sentences" | **Right and useless.** TWELVE carry a respelling. A row without one is a card the learner cannot say, so the importable pool is 12, not 628. |
| 5 | "whether A1 holds enough infinitives" | **857 distinct, 815 respelled.** Never in doubt. |
| 6 | "`il faut` is in no A2 canDo" | **Confirmed and worse:** no unit at ANY level. |
| 7 | invariants §3, /ø œ/ is `EU` | **The shipped corpus disagrees.** `peux` is already `puh`, `veut` is `vuh`, `queue` is `KUH`. This build ships `UH`. |
| 8 | — | **A shipped row carries U+203F** and would have imported the underscore bug. |
| 9 | "voudrais is a conditional" | Right, and the brief's containment is looser than needed. Two forms ship and nothing else. |

### 2.4 in detail, because it decided the whole design

The corpus is **rich in evidence and poor in cards**, and those are not the same
measurement. 628 sentences hold modal + infinitive; twelve carry a respelling.
So the paradigm is AUTHORED even though the corpus looks generous, and the
INFINITIVES are imported — which is also the argument of the lesson, so the
corpus now demonstrates the claim the missions make.

### 2.7, the respelling divergence, reported rather than resolved

`A1-BUILD-INVARIANTS §3` gives `EU` for /ø œ/. Measured against published rows:

```
peux      puh        fr.a1.verbes-essentiels.033
veut      vuh        fr.a2.verbes-essentiels.041
la queue  KUH
le neveu  nuh-VUH
nerveux   nehr-VUH
```

This build ships **UH**, matching practice rather than the document, because
inventing a fourth spelling for one sound is exactly what invariants §9 records
as the mistake made with the ɥ glide. **The document and the corpus disagree and
somebody should settle it**; this build did not, and says so.

---

## 3. WHAT THE GUARDS FOUND

Ten defects, none of them found by reading.

1. **A row the house cannot respell at all.** `Je dois étudier pour mon examen
   demain.` — `mon examen` liaises, so the vowel stays nasal AND the n is
   pronounced into the next word. Correct notation needs a superscript and a tie;
   the tie is U+203F, which renders as a low underscore on a Pixel 6.
   `hasPlainNasalFor` flags it however the rest of the line is repaired. **Dropped
   from the imports.** Imports fell 21 → 20.
2. **A second U+203F row**, `fr.sons.voyelles.311`, refused for the same reason
   before it reached the manifest. The generator now refuses any row carrying the
   glyph, so the next author cannot import one by accident.
3. **`Ce que vous savez faire`** — see §1.4.
4. **An orphan item.** One imported sentence sat in `itemIds`, released by an
   act, drawn by no section. The a1.08 defect in miniature (that lesson shipped
   forty-three). There is now a guard that walks sections, drills and terms.
5. **A released row with no `flashcard` drill.** `Il faut aller plus vite.`
   carries `sentence` and `review` only, while its sister `Il faut réserver.` has
   one. Invisible until the pair was checked together. Second drill addition.
6. **Two dictée targets in WORD mode**, at 19 letters against the 16 limit. Word
   mode hands every word over pre-spelled, so they tested nothing. Demoted.
7. **My own arithmetic, twice.** "Three spellings, one sound" is wrong:
   `veux/veux/veut` is TWO spellings across THREE persons. And the endings guard
   asserted `owned === length - 1`, which fails a correct table because `je` and
   `tu` are two cells carrying ONE ending. Both are now derived and pinned.
8. **The batch could not be run twice.** Its manifest-staleness check compared a
   pre-batch manifest against post-batch Postgres, so its own seven transformed
   rows looked like somebody else's edits. Found by the mutation harness's
   **baseline check**, which a2.12's harness did not have.
9. **The grid on screen could disagree with the cards.** Changing the paradigm
   table from `veulent` to `voulent` was caught by the batch and the merge and
   sailed through the test file: the grid renders from its own table and nothing
   compared it to the rows the learner is scored on. A learner would have read
   one spelling and been graded on another with every gate green.
10. **Eighteen em dashes** in shipped strings, most from one template repeated
    across a term, a drill and three quiz answers.

---

## 4. THE DESIGN, AND WHY IT IS THE SIZE IT IS

### 4.1 Thirty-two sections, deliberately

Every A2 lesson before this one shipped exactly 24 sections, 6 acts and 30
questions. **That shape was never measured against a subject** — it was
inherited from a2.01 and copied six times.

Checked before sizing: there is **no ceiling on section count in `schema.ts`**;
the only assertion is `sections must not be empty`. The only real limits are
per-screen (45 words core, 12 xl), and the corpus has already shipped 31 sections
(`sons.05.l1`), 145 questions (`a1.30.l1`) and a 100 KiB body (`a1.19.l1`) on
real devices.

This subject carries one Owns and **four** contexts:

```
the grid       three paradigms, eighteen cells, one frame
the Owns       a modal plus any verb at all, including unseen ones
the register   je veux against je voudrais, and a1.01's debt
the senses     permission, possibility, ability
il faut        an impersonal nobody owns
devoir as owe  the same word with no verb behind it
```

In 24 sections, three of those become one card each, which teaches nothing.

**Cost, stated plainly: 32 sections and 45 questions are past anything
device-tested at A2.**

### 4.2 One frame, which no earlier lesson in the band managed

All eighteen cells sit on `payer`. a2.02 needed three frames and so did a2.12,
because their sentences ran past the dictée's 16-letter limit. Measured through
the real `dicteeMode`: **all eighteen spell from LETTERS and the longest is
exactly 16.** One letter more and the grid would have had to shrink.

That is what makes the comparison real: a learner reading `Je veux payer` and
`Je peux payer` sees a two-letter difference and nothing else moving.

### 4.3 The act structure

```
act1  3   The sentence with no front
act2  5   Three verbs, one frame
act3  7   And any verb behind them        <- the Owns, heaviest ALONE
act4  6   Asking, not demanding
act5  3   What these three do not cover
act6  4   Out in the world
act7  4   Prove it
```

Seven acts against the six every other A2 lesson ships. The extra one is act 5:
folding those three cards into act 4 would have made the politeness act the
heaviest, which would say the register mattered more than the Owns.

### 4.4 The stem recipe, which is the actual teaching

```
veu + l = veul      peu + v = peuv      doi + v = doiv
```

The `ils` stem is the singular stem plus the final consonant of the `nous` stem,
identically on all three verbs, with no exception. The batch **derives** it
rather than trusting the table, so a typo fails the build.

Five of the six endings are ones the learner already owns. **Exactly one letter
in eighteen cells is new**, the `-x` on `veux` and `peux`, and it is silent.

---

## 5. MUTATION TESTING

Sixteen mutations, each run against all three layers **separately**. The test
layer is fed by `_a213_force.ts`, which writes the mutated lesson into the seed
with no guards at all — otherwise a mutation caught by the batch never reaches
the test and a blind test looks fine.

```
caught by all three   15
caught by two          1
caught by one          0
CAUGHT BY NOTHING      0
```

The one caught by two is "swap a row's declared `infinitive` field". That is
**correct rather than a gap**: the field is authoring metadata stripped by
`toItem` and never reaches the seed, so a seed-reading test has nothing to look
at. The version that DOES ship — an un-imported verb in the sentence itself — was
added as a test and is caught by all three.

Two harness lessons worth carrying forward:

- **The baseline check earns its place.** Verifying the unmutated build is green
  on all three layers before believing any result is what found defect §3.8.
- **CRLF.** A multi-line anchor written with `\n` matches nothing on this
  machine. The harness reports that as SKIPPED rather than as a pass, which is
  the right failure mode, and it still lost a mutation until anchors were tried
  in both line-ending forms.

---

## 6. WHAT IS NOT DONE

**NO DEVICE PASS.** The host half is complete and every gate is green, and none
of that is a device. Untested on glass:

- the **32-section spine** and whether act 3's seven missions read as a stretch
- the **six-row grid** in `s05-grid` as `examples` rather than a table
- `s10-frames`, three groups of six cards, the largest groupDrill in the band
- the **stem recipe** cards in `s06-stems`, three groups with a derivation check
- the **45-question quiz** across six rounds
- the scene break card, which took a2.01 three device passes to settle

`pnpm content:rollout 0` stops NEW adopters and heals nobody. See §10.
**Nothing has been published**: seed.version is still 29.

Open and not blocking:

- the `il faut` curriculum gap (§1.1)
- the /ø œ/ divergence between invariants §3 and the corpus (§2.7)
- the `Ce que vous savez faire` chrome collision, which a2.14 has to decide (§1.4)
- the standing 904-row `-tion` nasal debt across the seed, untouched by this build

---

## 7. FILES

```
scripts/data/modaux-corpus.ts        SSOT: 30 rows, every claim, every refusal
scripts/data/modaux-imported.ts      the layer between the manifest and a screen
scripts/data/modaux-rows.gen.ts      GENERATED by _a213_manifest.ts
scripts/data/modaux-terms.ts         12 terms, the reframe, the derived claims
scripts/data/modaux-lesson.ts        32 sections, 7 acts, the sheet, the audio
scripts/author-modaux-batch.ts       content:modaux
scripts/merge-modaux-into-seed.ts
ealch-v2/src/content/a2-13-modaux.test.ts    66 tests, reads the seed only

measurement, not part of the build:
scripts/_a213_probe.ts _a213_check.ts _a213_frame.ts _a213_imports.ts
scripts/_a213_pick.ts _a213_corpus_check.ts _a213_lesson_check.ts
scripts/_a213_manifest.ts _a213_force.ts _a213_mutate.mjs _verbarc.ts
```

---

## 8. THE VERB ARC, MEASURED

Asked whether a2.13 closes the verbs. **It does not.**

```
A2 units        35
verb units      20
built            7   a2.01 a2.09 a2.10(x2) a2.11 a2.02 a2.12 a2.13
open            13   a2.14 a2.15 a2.17 a2.19 a2.05 a2.20 a2.21
                     a2.22 a2.23 a2.06 a2.24 a2.27 a2.35
```

a2.13 closes the **modals** outright — it is the only modal lesson in the level.
The "Irréguliers 1–5" arc closes at **a2.15**, two builds away, and that is the
right place for a closing gesture: a2.15 is the first lesson that must author its
own infinitives, so the arc ends where importing stops working. The A2 verbs
close at **a2.35**.

Two units rest on a2.13: **a2.14 (seq 8)** and **a2.29 (seq 28)**. So a2.02's
strict dependents check was kept rather than loosened the way a2.12 had to.

---

## 9. THE DEVICE PASS, 2026-08-12, Pixel 6

Run on a USB Pixel 6 (oriole) against Metro on 8082. The app is DEBUGGABLE, so
`__DEV__` is true and `refreshFromRemote` returns immediately (content.ts:255) —
**this device never OTA-fetches** and reads whatever Metro serves. A cold restart
was needed before the current seed appeared; the first deep link fell through to
`/den` because `content.lesson('a2.13.l1')` was null against the stale bundle.

**TWO DEFECTS, BOTH SHIPPED IN v1, BOTH GREEN THROUGH EVERY HOST GATE.**

### 9.1 Fifty-nine cards rendered as a bare French string

The one that matters. Eight `lg` groupDrill sections, 59 item cards, every one
passing `respell` and `en` to a renderer that draws neither.

```
schema.ts:899        "fr, ipa and note are the shipped shape. The rest are v2
                      additions FOR A groupDrill RENDERING AT XL: ... respell,
                      en and silent are the XL card's other lines."
MissionRich.tsx:439   draws fr, ipa and note. Nothing else.
```

Every groupDrill in this lesson is `lg`. So on `Je veux payer.` a learner got the
sentence, a play button, **no pronunciation and no meaning** — across six of the
teaching missions, including the whole eighteen-cell frame.

The data was valid, which is why nothing caught it. Same class as the
`cheatSheet` a1.13 still ships inside a reference sheet, which draws its title
and no rows.

**Fixed** by moving the respelling and gloss into `note`, which the `lg` branch
does draw. `respell` and `en` are now REFUSED at that size by all three layers,
because their presence is exactly what reads as correct while doing nothing.

```
before   Je veux payer.
after    Je veux payer.
         [zhuh VUH pay-YAY] · I want to pay.
```

### 9.2 Eight of thirty-two mission titles ellipsised

The hub draws the section title beside a TYPE CHIP and the chip wins.

```
FITS  "What You Will Be Able To Do"   27 chars, chip OBJECTIFS (9)
CUT   "Ten Verbs From Other Lessons"  28 chars, chip GROUPES   (7)
```

Cut in v1: missions 03, 04, 06, 07, 10, 11, 16, 27 — and 18 and 19 by the same
measure. The same titles render IN FULL on the act checkpoint screen, so this is
the hub row layout alone.

**This is a house-wide budget no document records.** a2.12's "One Verb, A Dozen
English Ones" is 29 characters and is cut today.

**Fixed**: ten titles rewritten, longest now 27. `MISSION_TITLE_MAX` is pinned in
the corpus and asserted by the batch, the merge and the test.

### 9.3 What rendered correctly

The tag `A2 · LEÇON 07`, the title, all 32 mission rows and their French
subtitles, the lesson cover with its full intro, the act checkpoint, and the
groupDrill structure itself: section title, both term chips, group progress bar,
the check with four options, and the `Next group` control.

### 9.4 A third finding, in the guards rather than the content

The batch's row-count check compared `fr.a2.verbes` against an equality. A
CONCURRENT a2.14 BUILD landed 30 rows in its own block during this device pass,
taking the theme from 310 to 340, and the guard failed a build that was entirely
correct. The ledger's row-count discipline assumes SERIAL builds.

Narrowed: a total that has grown by somebody else's allocation is reported, a
total that has SHRUNK is fatal, and the check that actually matters — rows inside
this build's range that this build does not own, the a1.20 failure — is unchanged
and still fatal.

### 9.5 Still not done

`a2.13.l1` is now **v2** in Postgres and in the seed, and **v30 on the wire still
carries v1**. A publish would ship v2, and it would ALSO ship a2.14, which is
another session's work and not this build's to release.

The device pass covered the hub, the cover, the act checkpoint and one
groupDrill. **Not yet walked on glass**: the `s13-unseen` trapDrill, the
45-question quiz, the dictée, the scenario, the reading passage and the reference
sheet.

---

## 10. A CORRECTION TO THIS REPORT, AND TO HOW THE OTA STATE WAS DESCRIBED

Added 2026-08-13 after every claim in §6 and §9.5 was checked against the code
and against the bytes actually being served. Five held. **One was materially
incomplete and it was the one offered as a remedy.**

### 10.1 `content:rollout 0` is a tourniquet, not a fix

§6 and the a2.13 commit messages describe it as "the kill switch" that "halts
adoption without a republish". Every word is true and the framing is wrong,
because it was offered as protection against a defect that was ALREADY LIVE.

`set-rollout.ts:13` says the part that was missing:

> **What this cannot do: heal a device that already adopted a bad version.**
> That is content:rollback (republishes the last good snapshot as a NEW
> version). Kill first to stop the bleed, then roll back to heal.

`shouldAdopt` (content.logic.ts:526) confirms the mechanism: adoption needs
`manifestIsNewer` AND `bucket < rollout`, so rollout 0 admits nobody — and the
on-device cache only ever moves FORWARD. A device that already holds a bad
snapshot keeps it, permanently, until a strictly newer one is published.

`OTA-RUNBOOK.md:44` had it right all along: *"This does NOT fix devices that
already adopted it."* The runbook was correct and the summaries in this report
were the lossy copy. **Read the runbook, not a build report, before acting on an
incident.**

The three real options, stated properly:

```
content:rollout 0    stops NEW adopters. Anyone already on the bad version
                     stays on it. Use to stop the bleed, never as the fix.
content:rollback     republishes older CONTENT as a NEW version, so devices
                     "upgrade" onto it. The only move that heals a fleet
                     without shipping whatever else is now in the database.
content:publish      heals, and ships everything else that is published in
                     Postgres at that moment.
```

### 10.2 What the wire actually held, fetched rather than inferred

Every earlier statement about "what a learner sees" was reasoned from the
publish log. `scripts/_a213_wire.ts` downloads the live manifest and snapshot
and reads a2.13 out of them. Measured 2026-08-13:

```
manifest    v30, rollout 100%, snapshots/v30.json, published 02:20:20Z
a2.13.l1    body v1, 32 sections
            59 lg groupDrill cards
              carrying a note       0
              carrying respell/en  59   <- dropped by MissionRich.tsx:439
            10 titles over the 27-character hub budget
a2.14.l1    ABSENT
```

So the defect was real on the served bytes, not merely in the source, and it was
live at 100% from 02:20. Holding the publish did keep a2.14 unreleased, which
was the point of holding it.

**Any claim about learner-visible state should be made with this script, not
from a publish log.** The log says what was uploaded; it does not say what is
being served, at what rollout, or what a body inside it contains.

### 10.3 A smaller one: `seedv` is a local signal

The watch in `_a214_signal.ts` treats a move in `seed.version` as "somebody
published". That holds only for a publish run IN THIS WORKING TREE, because
`publish-content.ts` rewrites the local `seed.json`. A publish from another
clone would not touch it. **`live`, read from the manifest in Storage, is the
authoritative field**; `seedv` is a convenience that happens to work while two
sessions share one tree.
