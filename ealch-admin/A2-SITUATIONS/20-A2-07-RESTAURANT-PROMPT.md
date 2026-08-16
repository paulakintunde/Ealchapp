# Build a2.07 "At the Restaurant"

Trail seq **24** of 35, and the **first** of the eight-unit A2 situations band (seq 24 to 31).

**You ship first and seven units are waiting on you.** a2.07 owns the **repair move** for
the whole band. The other seven author zero repair rows and cite yours by `itemId`. If
your ids churn after you publish them, seven lessons break. The specification that keeps
them stable is in "The repair move" below, and it is the most load-bearing section in this
file.

**Read first:** `ealch-admin/A2-SITUATIONS/10-BAND-COLLATION-AND-DECISIONS.md` **in full**
— it is the settled decision register for the band and it outranks every design document,
including `24-a2.07-restaurant-DESIGN.md`. Then `ealch-admin/A2-BUILD-DOCTRINE.md`,
`A1-BUILD-INVARIANTS.md`, `A2-BRIEF-CORRECTIONS.md`, and **`a1.29` as shipped** (seq 8,
the partitive), whose `deckTranche` already released nine of the rows you are about to
name.

Where this file and the design document disagree, this file wins. The five places they
disagree are listed under "Overruled from the design document", and you must not
reinstate any of them.

---

## Band consistency pass, 2026-08-15

*Eight prompts were written in parallel by eight agents who could not see each other's
work. These corrections were applied afterwards, across all eight. They overrule
anything below them and anything in the collation that disagrees.*

| # | What changed in THIS prompt | Authority |
|---|---|---|
| 1 | **The answer fold.** The quiz is graded by `fold()` in `answer.logic.ts:32`, not `normalizeFr`. The old "an accent, a cedilla or a comma" line was incomplete and the "hyphen exposure is narrower" paragraph was wrong. Corrected in place under **Quiz notes**, and a **band rule** added: fold the answer and the plausible wrong answer, and if they collide move the item to `mcq`/`listenChoose`. | `03-ANSWER-FOLD-FACT.md` (measured, authoritative) |
| 2 | **`corpus:probe` has no `--count` flag.** Removed from the Pre-flight block and the evidence table. `--theme` already prints the count. | `scripts/probe-corpus.ts` arg parsing, re-read 2026-08-15 |
| 3 | **The repair-move citation file is `04-REPAIR-MOVE-IDS.md`, not `11-`.** `11-` is already `11-DESIGN-MOCK-PROMPT.md`. All four references updated; the other seven prompts now cite `04-`. | filename collision |
| 4 | **`practice` is mandatory, not optional.** `lesson-contract.test.ts:505` mirrors the publish gate and fails any non-`assessment` lesson with no `practice` section, an empty `practice.itemIds`, or an empty `Lesson.itemIds`. Your `s21-say` already satisfies it; do not drop it. | `ealch-v2/src/content/lesson-contract.test.ts:505-519`, verified |
| 5 | **Your device check stands and is the band's model.** The collation's blocking step 4 named only you and a2.28; it has been corrected to name a2.07, a2.28, a2.29 and a2.32. Your single-section fallback is unchanged. | collation §1.10, corrected |

---

## Identity

**Carried from the spine and the seed unit row. Every A2 build so far has found its brief's
identity block wrong in at least one field, so verify before you use it.**

```
a2.07   seq 24   level a2   track a2
  title:  At the Restaurant
  sub:    Au restaurant
  gloss:  ordering - the partitive in real use
  canDo:  "Can order a full meal, ask for the bill and handle the waiter's questions"
  themes: ['nourriture', 'cafe']     <- WRONG, see below. Must be ['au-restaurant', 'cafe']
  prereqUnitIds: ['a1.29']
  lessonIds:     []                  <- first build, version starts at 1
```

Source: `ealch-admin/scripts/author-full-curriculum-spine.ts` (A2 array) and the identical
`units` row in `ealch-v2/src/content/seed.json`. Quote `canDo` byte for byte off the spine;
do not retype it from here.

Read the `canDo` twice. The third clause, *handle the waiter's questions*, is a
**comprehension** claim. The spine already says this unit is about the other person's
speech, and that is the whole design.

---

## Your theme is `au-restaurant`, and the spine is wrong

`nourriture` is a **phantom**: zero rows in Postgres, zero in the seed, and no entry in
`ealch-v2/src/content/themeMeta.ts` (124 keys). Creating it would scatter the restaurant
vocabulary across a third theme and give the flashcard hub a chip pointing at a deck
holding only your rows.

```
AUTHOR INTO:   fr.a2.au-restaurant.<nnn>
IMPORT FROM:   cafe, cuisine, rp-repas, nombres, expressions-frequentes, sons.questions
SPINE EDIT:    a2.07.themes  ['nourriture','cafe']  ->  ['au-restaurant','cafe']
```

Settled in collation §5. `au-restaurant`, `cafe` and `cuisine` all have `themeMeta`
entries, which is the property the five phantoms lack and the reason their cards can be
titled and browsed.

**Do not make the spine edit yourself as a side effect of authoring.** It is blocking step
2 of the band sequence and it covers all eight units in one reviewed diff: edit the eight
`themes` arrays in `author-full-curriculum-spine.ts` by hand, let the per-lesson merge
script carry the unit row, and remove the dead `'transport'` entry from `SEED_CUT.themes`
in the same diff. **Never re-run the spine script** — `spine-drift.test.ts` exists because
a naive re-run would have reverted 74 of 75 unit titles.

**If step 2 has not landed when you start, stop and say so.** Do not mint a single id into
`nourriture`.

---

## Pre-flight

Every DB figure quoted anywhere in this file came from the design agent's own probe and
**was not re-verified by the supervisor, who did not query Postgres**. Treat all of them
as unconfirmed until your own run replaces them.

```bash
cd ealch-admin

# 1. Row counts and NEXT FREE. Settles the id block and every "346 rows" claim below.
#    --theme already prints the count; there is no --count flag. See the hazard note below.
pnpm corpus:probe --theme au-restaurant
pnpm corpus:probe --theme cafe,cuisine,rp-repas,nombres,quebec-et-francophonie

# 2. Published vs merely present. Settles what you import and what you author.
pnpm content:parity

# 3. The waiter's half. Every one of these is claimed at ZERO corpus-wide.
pnpm corpus:probe --tokens "et avec ça,et avec ceci,comme boisson,vous avez choisi,c'est pour ici,la carte bleue,ce sera tout,vous réglez comment,ensemble ou séparément"

# 4. The repair rungs, before you author a single one.
pnpm corpus:probe --tokens "pardon,vous pouvez répéter,pouvez-vous répéter,plus lentement,je n'ai pas compris,je n'ai pas bien compris,qu'est-ce que ça veut dire"

# 5. The unit probe and the dated baseline.
pnpm corpus:probe --unit a2.07
cd ../ealch-v2 && node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts" 2>&1 | tail -6
```

**The interpretation rule, settled in collation §1.3, and it decides import-versus-author
for every row you touch:**

> A DB row that is `published` is REACHABLE and must be imported by `itemId`, never
> re-authored. A DB row that is not `published` is invisible to learners and may be
> treated as absent.

**Three probe hazards, all measured.** `corpus:probe` does not strip
accents, so probe `bière`, `réservé`, `l'addition`, `séparément` with real orthography or
you will get a false ABSENT. And `--tokens` has hidden existing rows before (a2.12 found
23), so back a zero from `--tokens` with a theme listing before you believe it.

**And third: there is no `--count` flag.** *(Corrected 2026-08-15 by the consistency
pass; the collation §1.3 named it and this prompt copied it.)* `scripts/probe-corpus.ts`
parses exactly `--theme`, `--words`, `--tokens` and `--unit`, and ignores anything else
in silence, so `--count` was never erroring, it was doing nothing. **`--theme` already
prints the count** as its first line: `published in postgres: <N>   present in seed: <M>`,
then a per-prefix `count=` / `max=` / `NEXT FREE ID` block. Drop the flag.

### What the design agent's probe returned, all UNVERIFIED

| claim | figure | the command that settles it |
|---|---|---|
| `au-restaurant` published in PG | **346** (seed holds 17) | `corpus:probe --theme au-restaurant` |
| `nourriture` | 0 in both | same, `--theme nourriture` |
| `cafe` / `cuisine` / `rp-repas` | 341 / 428 / 113 | same |
| NEXT FREE | `fr.a2.au-restaurant.132` (count 130, max 131, gap at 98) | `corpus:probe --theme au-restaurant` |
| Rows in the **server's** voice | **4 of 346, 1.2%** | the interrogative scan plus §3 above |
| `et avec ça`, `comme boisson`, `vous avez choisi` | **0 each, corpus-wide** | step 3 above |
| `quebec-et-francophonie` | 593 rows, `souper` 8, `liqueur`/`breuvage` 0 | `--theme quebec-et-francophonie` |

**Check the row COUNT after your apply, not the maximum.** The maximum has been useless
since `a2.10.l2` took `.461..500`, and a concurrent build can land *below* your top
without a highest-id check seeing it.

### Your id block

Request `fr.a2.au-restaurant.132` through `.199` (68 ids) from the band ledger, adjusted
to whatever your probe reports as NEXT FREE. **Write the block into the band ledger before
you author**, because seven units follow you and two of them (a2.26 on payment ground,
a2.29 on booking ground) can land inside your range without your collision guard seeing
it. Doctrine §D: nobody authors until the ledger exists.

---

## The teaching problem

### The lesson's Owns: his half of the script

The corpus authored only the learner's half of every situation in this band, and the
restaurant is the sharpest case. A learner reaching seq 24 has already been served fifty
ways to *say* something at a table — `je voudrais` 62 rows, `je prends` 47, `l'addition`
39, `une table pour` 25, `par carte` 15 — and, on the design agent's count, **four rows of
what will be said to them**. The whole of `fr.a2.au-restaurant` is passé-composé narration
about a meal, not an encounter.

**That gap is what you author.** Collation §1.5 sets a band-wide floor and it binds you:

> At least **40 percent** of a unit's newly authored rows must be in the voice of the
> person the learner is talking to.

For you the realistic target is closer to 50 percent, because your Own *is* the waiter.
Import the customer's half; author the waiter's.

### The band's Owns: the repair move

Separate, and bigger than this lesson. See the next section.

### The reframe

> **You never start. He asks, you answer.**

Record what you rejected and why. *"Order in the order he asks"* describes the script but
gives the learner nothing to execute. *"Say what you would like, not what you want"* is the
politeness gradient alone, which is one mission, not a lesson. Doctrine §B.4 wants a rule
runnable in the half-second before the learner opens their mouth; this one is, and it
inverts the skill order to comprehension-first, which is also the order TEF and TCF weight
it.

### The partitive is a RECALL drill, not a reteach

`a1.29` (seq 8, shipped, your declared prereq) already delivered all six partitive claims:
`du / de la / de l'`, countable versus uncountable on the same noun, `des` as the plural,
bare `de` after a quantity, the reduction to `de` under negation, and the formal identity
of partitive `du` with `de + le`. Its reframe is **"Un is one of them. Du is some of it."**

The spine gloss says "the partitive in real use", and *in real use* is the operative half.
**One `groupDrill`, three groups, at the point of ordering** — `du vin` against `un vin`,
`de l'eau` against `une carafe d'eau`. Name `a1.29` in its `say`. A second teaching pass
would break doctrine §B.5 and would collide with `a1-29-partitifs.test.ts`, which asserts
partitive claims across the whole seed.

`a1.29`'s `deckTranche` already releases `fr.a1.au-restaurant.098 .102 .112 .145 .176
.182 .184 .185 .189`. **Name them. Do not touch them.** Editing any one moves a shipped A1
lesson.

---

## The repair move: what you own for the whole band

Settled in collation §1.6 and §7.1. Read both before you author a row.

No lesson in the project teaches "I did not understand, please repeat" as a communicative
move. The forms exist in the corpus, scattered across `salutations`, `sons.alphabet`,
`sons.questions`, `expressions-frequentes` and `verbes-du-quotidien`, and every lesson that
uses them uses them as classroom scaffolding. Meanwhile `a1.30.l2`'s `x12-repair` quiz
round **assesses** the move that was never taught. A restaurant is the right place to claim
it, because it is the first situation where not understanding has a consequence you can
taste.

Eight independent authorings would put eight rows carrying the same `fr` into overlapping
themes and break the flashcard hub's one-card-per-`fr`-per-theme assumption. So it is
authored **once, here**, and the other seven quote `a2.07` by unit id in a `cardDeck` and
reuse the rows by `itemId`.

### The specification. This is a contract, not a suggestion.

**1. Exactly six rows.** Six rungs, no more, no fewer. Seven units have to memorise this
list; a set that grows later is a set nobody trusts.

**2. All six in `au-restaurant`**, as a **contiguous run at the head of your id block** —
`fr.a2.au-restaurant.132` through `.137` if your probe confirms `.132` is NEXT FREE,
otherwise the same six-id run wherever NEXT FREE actually falls. They move as a block or
not at all.

**3. Ordered by face cost, and the order is part of the contract.** Rung 1 is the cheapest
thing you can say; rung 6 is the most explicit. Citing units quote "rung 3", so the
ordering must not be reshuffled after publication. The design's ladder, which you may
refine but must keep monotonic in face cost:

```
rung 1   Pardon ?
rung 2   Vous pouvez répéter, s'il vous plaît ?
rung 3   Plus lentement, s'il vous plaît.
rung 4   Je n'ai pas bien compris.
rung 5   Qu'est-ce que ça veut dire ?
rung 6   Vous pouvez me l'écrire, s'il vous plaît ?
```

**4. Every `fr` string must be DOMAIN-NEUTRAL.** Not one restaurant noun in any of the six.
A doctor's unit, a hotel unit and a technology unit all have to put the same string in
front of a learner. The design's `Qu'est-ce que ça veut dire, "cuisson" ?` is exactly what
you must not author as a citable row; the neutral rung is `Qu'est-ce que ça veut dire ?`
and the restaurant-flavoured variant, if you want one, is a separate non-citable row
outside the six.

**5. Every one of the six carries all three drills: `flashcard`, `voiceflash`,
`dictation`.** A citing unit may reach for a `cardDeck` with a `deckTranche` release, a
`practice` speak drill or a dictée, and doctrine §E requires the matching drill on the
item for each. Check the drills against **Postgres**, not the seed, and remember `drills`
is a Postgres enum array that arrives as the raw literal `{flashcard,review}` — a
`.includes()` on it is a substring test that lies.

**6. Each carries a `respell` per `RESPELL-CONVENTION.md`, with no tie characters.**
`U+203F` renders as a low underscore on a Pixel 6 and has already hit shipped `sons.10`
content.

**7. They are corpus rows FIRST and lesson prose second.** The `cardDeck` in `s17-repair`
quotes them by `itemId`. If a repair utterance exists only inside a card body, the other
seven cannot cite it; they can only re-type it, which is the duplication this whole
decision exists to prevent.

**8. They are frozen at publication.** Once your build report lands, the six ids and the
six `fr` strings never change. A test in your own file asserts all six by id, by theme, by
`fr` string and by drill set, so a later edit goes red rather than quietly breaking seven
lessons.

**9. Publish them as a standalone file** the other seven prompts cite by path:

```
ealch-admin/A2-SITUATIONS/04-REPAIR-MOVE-IDS.md
```

> **Renumbered 2026-08-15 by the consistency pass.** This prompt originally said
> `04-REPAIR-MOVE-IDS.md`, and `11-` is already taken by `11-DESIGN-MOCK-PROMPT.md`.
> `04-` is free and keeps band-level reference material in the `0x` block with
> `03-ANSWER-FOLD-FACT.md`. **Use `04-` and nothing else**; the other seven prompts
> now cite that path.

Six rows, each `rung | itemId | fr | en | respell`, plus one line stating that the list is
frozen. This file is the citation target for the band. Create it in the same change as
your merge, and repeat the list under a fixed heading in your build report.

**On the generic rows that already exist.** The design proposed importing
`fr.a1.expressions-frequentes.124`, `fr.sons.questions.023` and
`fr.a2.expressions-frequentes.073` instead of authoring. **Overruled.** The citable list
must be one contiguous, single-theme, single-owner block; mixing three foreign-theme
imports into the band's most-cited id list makes seven units depend on rows a2.07 neither
owns nor can guarantee stay published. Cross-theme duplication is already legal precedent
here (`l'addition` exists in both `cafe` and `au-restaurant` and collation §7.5 says do not
"fix" it); the rule the flashcard hub actually enforces is **intra**-theme, and one row per
string inside `au-restaurant` satisfies it. Name the pre-existing rows in your report as
prior exposure, and leave them where they are.

---

## The payment boundary with a2.26, settled out loud

Collation §C5 assigns **payment and money to a2.26** and **the bill itself to a2.07**. That
line is settled and neither builder may move it.

| a2.07 owns | a2.26 owns |
|---|---|
| `l'addition` as a **stage of the script** | money as a **topic** |
| Asking for the bill | Asking a price, `ça fait combien` |
| `Vous réglez comment ?` · `Ensemble ou séparément ?` · `par carte` · `en espèces` as the waiter's closing questions | The till transaction, the change, coins and notes |
| `le service est compris` and the tip as a bill fact | **Price and change reception**, including a spoken total |

**Consequences you must obey.**

- **a2.07 authors no price-reception task and no money-vocabulary rows.** The design's
  `s19-money` listening section, six spoken totals with an MCQ on the figure, is **cut**.
  Number reception at speed is a2.26's Owns and a2.07 must not pre-empt it.
- The learner still hears a total exactly once, as the closing turn of the scenario, and is
  **not scored on the figure**. That keeps the encounter complete without taking a2.26's
  Own.
- Every figure you do use is imported from `nombres` (448 rows claimed). Author none.
- **You cannot cite a2.26 by `itemId`**, because it ships after you. Name it by unit id in
  prose only. No unit in this band cites forward by id.

**Message to the a2.26 builder, which your report must carry:** the restaurant total is
yours. Author it in a2.26 and cite a2.07's bill stage by unit id. Do not re-author
`Vous réglez comment ?` or `Ensemble ou séparément ?`; import them from `au-restaurant`.

The design argued that the restaurant total is a different skill from a shop price, spoken
once after commitment rather than printed before choice. It is a good argument and it is
recorded here as rejected: the collation outranks it, and a unit that ships first must not
take an Own the collation assigned to a unit that ships second.

---

## The lesson shape

**24 missions, 26 sections, six acts, one lesson, one quiz.** Doctrine §F's range is 19 to
24; the band clusters at 22 to 24. Act 2 is the waiter's half and it is the heaviest act in
the lesson at 6 of 24 missions, which is the shape's whole argument: in every shipped A2
lesson the heaviest act is a form the learner produces, and here it is a voice the learner
receives.

**One lesson.** `den.tsx:169` pushes `lessonIds[0]` and `lessonoverview.tsx:47` reads
`lessonIds[0] and nothing else`. A second lesson is unreachable. Collation §C6 settles this
band-wide. The design already rejected an `l2` and you must not revive it.

**Chassis, unchanged from a2.2x:** `acts`, a stable `id` on every section, `reframe`,
`deckTranche`, `terms`, `errorTriggers`, `drills`, a single round-based quiz,
`progressCheck`, `roundup`. What changes is what act 2 *contains*, not the container.

| # | section id | `type` | render / layer / size | what it does |
|---|---|---|---|---|
| **act 1** | **the encounter you cannot start** | | | **3 missions** |
| 1 | `s01-scene` | `scene` | screens / core | The learner orders "Je veux le poulet." A beat of silence. `choice` beat on *je veux* against *je voudrais*; `break` puts the two readings side by side in large type. A bistro, Lyon, a Thursday evening. |
| 2 | `s02-goals` | `goals` | core | Four goals, every one phrased as **catch**, not **say**. |
| 3 | `s03-stages` | `tapTable` | core | **The eight stages, in order.** Cols: *Stage · What he says · What you say*. Eight rows, each with a `detail` and a `say`. The lesson's map. |
| **act 2** | **his half, the eight stages in his voice** | | | **6 missions, the heaviest act** |
| 4 | `s04-his-open` | `cardDeck` | deck / core / lg | Stages 1 to 3: greeting, seating, drinks. `Bonsoir, vous avez réservé ?` · `C'est pour combien de personnes ?` · `En terrasse ou à l'intérieur ?` · `Et comme boisson ?` · `Une carafe d'eau, ça ira ?` |
| 5 | `s05-his-order` | `cardDeck` | deck / core / lg | Stage 4: `Vous avez choisi ?` · `Vous avez fait votre choix ?` · `Et ensuite ?` · `Quelle cuisson ?` |
| 6 | `s06-his-check` | `cardDeck` | deck / core / lg | Stages 5 and 6, the check-back and the upsell: `Tout se passe bien ?` · `Ça a été ?` · `Ce sera tout ?` · `Vous prendrez un dessert ?` · `Un café pour finir ?` |
| 7 | `s07-his-close` | `cardDeck` | deck / core / lg | Stages 7 and 8: `Je vous apporte ça tout de suite.` · `Vous réglez comment ?` · `Ensemble ou séparément ?` · `Le service est compris.` **Carries the single Quebec card** (see below). |
| 8 | `s08-fast` | `listening` | core, **`hideLines: true`** | The elision drill. Six of his lines as a native produces them. Questions ask **which stage was that**, never what the words were. `questionsInModal: true`. |
| 9 | `s09-place-it` | `groupDrill` | core / xl | Hear a line, place it in the encounter. Eight groups, one per stage, each with a `check`. This is the mission that proves the learner holds a script and not a word list. **Hand-randomise the options.** |
| **act 3** | **your slot, and the register in it** | | | **5 missions** |
| 10 | `s10-fit` | `cardDeck` | deck / core / lg | The answers that fit. For each of his questions, the two or three second-pair-parts a French speaker would actually produce. The adjacency-pair payload, and the band's **ordering frames**. |
| 11 | `s11-gradient` | `tapTable` | core | **The politeness gradient.** Cols: *You say · What it means · Where it is safe*. Rows `je veux` / `je voudrais` / `je prends` / `je prendrais` / `ce sera`. Six rows is the Pixel 6 cap. |
| 12 | `s12-some` | `groupDrill` | core | The partitive at the point of ordering. **Recall, not instruction.** Three groups. Names `a1.29` in its `say`. |
| 13 | `s13-trap` | `trapDrill` | core | The four English reflexes, in the **stepped** shape: `rule > cards > audio > drill`, `swipe`, a `say`, and `gate: true` on the drill step. `lesson-contract.test.ts` has enforced this since 2026-08-13 and it caught both of a2.17's. **Hand-randomise the options.** |
| 14 | `s14-errors` | `commonErrors` | core / lg | **`swipe: true` is mandatory** or it draws a blank screen. Four errors, each `{wrong, right, why}`. |
| **act 4** | **when the script breaks** | | | **4 missions** |
| 15 | `s15-break` | `scene` | screens / core | The deviation. `Je suis désolé, il n'y en a plus.` The learner's script has no slot for it. `choice`: freeze, or hand the choice back with `Alors qu'est-ce que vous me conseillez ?` **Second `scene` in one lesson. Device-gated, see below.** |
| 16 | `s16-offscript` | `listening` | core, **`hideLines: true`** | Six lines that belong to **none** of the eight stages. The question is not what he said but *what he wants to know*, and which rung of the repair ladder gets you there. |
| 17 | `s17-repair` | `cardDeck` | deck / core / lg | **The repair move.** Six cards, each quoting one of the six frozen `itemId`s, in face-cost order. The band's Owns. |
| 18 | `s18-deploy` | `groupDrill` | core | Deploy the rung. He says something; which rung do you reach for, and why not the one above it. **Hand-randomise the options.** |
| **act 5** | **the whole encounter** | | | **4 missions** |
| 19 | `s19-menu` | `reading` | core | A real French menu as the passage, `glossary` on eight terms, `questionsInModal: true`. Questions require inference across the layout: *what is in the formule at 22 euros?* A genuine CE task and the only place a menu's shape gets taught. |
| 20 | `s20-write` | `dictation` | core | **His lines, not yours.** Eight `itemIds`, every one carrying the `dictation` drill checked against Postgres. |
| 21 | `s21-say` | `practice` | core | `skill: 'speak'`. Every named item carries `voiceflash`. Never `skill: 'write'`. |
| 22 | `s22-service` | `scenario` | core | **The whole encounter, ten turns**, greeting to payment, with the deviation from mission 15 landing at turn 6 and a repair rung available at turn 7. Every turn carries `userEn` and **two `alts`**. |
| **act 6** | **measure** | | | **2 missions, 4 sections** |
| 23 | `s23-deck` + `s24-check` | `reviewDeck` + `progressCheck` | deck / core | Standard close. |
| 24 | `s25-quiz` + `s26-roundup` | `quiz` + `roundup` | core | Six rounds of five, `passMark: 70`, `roundFailThreshold`, `targets` per round. `exam` **absent**. |

**If the count has to come down**, merge `s05` into `s04` and `s06` into `s07`. **Do not
cut `s08`, `s09`, `s17` or `s22`.** Those four are the unit.

**Every section above is SHIPS-TODAY.** All 35 `SECTION_TYPES` have a live render branch:
`MissionSection.tsx` cases sixteen types plus three by `type ===`, then falls through at
line 647 to `SectionView` in `LessonSection.tsx`, which cases eighteen more. The
"does not render" folklore in earlier documents came from being told to grep the wrong
file. `tapTable`, `quiz`, `examples` and `roundup` all draw inside a mission. Do **not**
mark anything NEEDS-ENGINEERING.

---

## Two gates before you author

### Gate 1: repeated `scene` must be device-proven

Collation §1.10 measured which section types already repeat inside a single shipped
lesson. `listening` repeats in six lessons (`a1.02.l1`, `a1.27.l1`, `a1.28.l1`, `a2.10.l1`,
`a2.16.l1`, `a2.17.l1`), and `practice`, `trapDrill`, `examples`, `groupDrill`, `cardDeck`
and `tapTable` repeat almost everywhere. All of those are **approved without a check**, so
your two `listening` sections and three `groupDrill` sections need no gate.

**The genuinely untested set is `scene`, `scenario`, `reading`, `dictation`, `table`.** None
repeats in any shipped lesson. You use `scenario`, `reading` and `dictation` once each, and
`table` not at all. **You use `scene` twice, and that is the exposure.**

**Required before authoring, not after** (band blocking step 4, about fifteen minutes):
build a throwaway local lesson with two `scene` sections and render it on a Pixel 6. If
both draw, author `s15-break` as a `scene`. If the second one does not draw:

> **Fallback, single-section:** `s15-break` becomes a **stepped `trapDrill`** carrying the
> same beats — the deviation as `rule`, the freeze and the hand-back as the two `cards`,
> the audio, then the gated drill. Repeated `trapDrill` ships in ten lessons, so the
> fallback carries no risk of its own, and act 4 keeps its four missions.

Record which branch you took in your report. The other seven units are waiting on this
answer as much as on your ids.

### Gate 2: `s08` and `s16` depend on `listening.hideLines`

`ListeningView` (`MissionRich.tsx:1949`) renders `<TX role="body">{l.fr}</TX>` and
`<TX role="bodySm">{l.en}</TX>` in every line card beside the `PlayDot`. **Every listening
section in the product today is answerable by reading.** `questionsInModal` fixes *when*
the questions appear; it does not hide the passage.

The band funds exactly one engineering item, and this is it (collation §3.5, §3.4, blocking
step 3, about half a day):

```
LessonSection, type 'listening', new optional field:

  hideLines?: boolean
```

When true, the line card keeps its `PlayDot` and its box and replaces the `fr`/`en` text
with a neutral placeholder. After the learner has answered every question, the lines
reveal. **The reveal is not gated on getting them right.**

**Your dependency is explicit and total for `s16-offscript`**, whose questions are about
lines the learner must not read. `s08-fast` survives degraded, because its questions ask
which *stage* a line belongs to and the transcript does not state a stage.

> **If `hideLines` has not shipped when you start:** author `s08-fast` as designed, with
> stage-identification questions only, and **hold `s16-offscript`**. Do not author a
> section whose whole point is that the words are not visible and then ship it with the
> words visible. If the flag slips past your build, drop `s16` and take the lesson to 23
> missions and 25 sections, and say so plainly in your report so it can be added later.

Do not design around `SectionAudio.maxPlays` instead. It validates, `resolveAudio`
(`lessonAudio.logic.ts:74`) resolves it, and **no component reads the resolved value**. A
play budget and a hidden transcript are different features and only the second one fixes
"answerable by reading".

---

## What is left to neighbours

- **The partitive is `a1.29`, shipped.** One recall drill. Never a second teaching pass.
- **Money, price reception and change are `a2.26`** (seq 25). Settled above.
- **The politeness and register ladder is `a2.29`** (seq 28), once, for all eight. You teach
  a **five-rung ordering gradient inside the restaurant frame** and nothing more. Do not
  build a general theory of French politeness, do not name the conditional as a family, and
  do not use `pourriez-vous` — it is unsettled pending a product-owner decision on a2.13's
  three "nothing else from that family" strings, and a2.29 depends on the answer, not you.
- **Fault description is `a2.32`**; room and service complaints as an escalation are
  `a2.29`. Your act 4 is a **script deviation**, not a complaint ladder.
- **Comparatives and superlatives are `a2.08`** at seq 32. The menu reading will naturally
  want *plus copieux que*. **Keep them out.** Settled.
- **`y` and `en` as pronouns are `a2.25`, which has ZERO lessons.** Collation §C8: **no unit
  in this band may build a teaching move on `y` or `en`.** This bites you directly: your
  deviation line `Je suis désolé, il n'y en a plus` contains both. Author it as **unanalysed
  lexis**, a whole chunk the learner recognises. Never gloss it, never decompose it, never
  put it in a scored surface that turns on the pronouns. Guard the thing and not the
  letters: `en` as a preposition is everywhere in the corpus, so a naive `\ben\b` guard will
  fire on legitimate content.
- **Elision is `sons.07`, liaison is `sons.10`.** Your `s08-fast` respellings lean on both.
  Quote them, teach neither.

---

## Band constraints that bind you, verbatim

**Exam claims.** Every prompt in this band carries this, and yours must too:

> This unit carries exam value by **teaching what the exam tests** (transactional reception
> at speed, a request in the right register, a structured turn), not by producing an
> `ExamTask` row and not by populating `Scenario.exam`. Do not author `Scenario.exam`. Do
> not author `ExamTask` rows. Do map each act to a named TEF/TCF/DELF task in the design
> notes, because that mapping is what makes the content right, and because it is what a
> future runner will consume.

Grepping `.exam` across `ealch-v2/src/components` and `ealch-v2/src/app` returns nothing.
`Scenario.exam` is written by no author and read by no code. `delf_a2` is **not** being
added to `EXAM_FORMATS` in this band. Your act-to-task mapping goes in the report: TEF CO
section A/B on missions 8, 9 and 16; TEF EO section A on missions 10, 17 and 22; TEF CE on
mission 19; TCF EO task 1 and DELF A2 PO part 3 on mission 22; DELF A2 CO on mission 8.

**Listening lines must stand alone.** a2.35 (Bilan A2) is at seq 35 and this band is its
reception bank. Author every line in `s08` and `s16` so it makes sense **without** its
lesson's framing, and author `s22-service`'s turns so the scenario is liftable whole. This
costs nothing now and is expensive to retrofit.

**France-primary, Quebec as colour.** Collation §C3. The scored, drilled, quizzed content is
France-standard French. You may carry **at most one `cardDeck` card** naming Quebec
divergence, and nothing on it is ever the answer to a scored question. Put it in
`s07-his-close` and hold it to three contrasts: meal names (`souper`), `l'addition` against
`la facture`, and tipping against `le service est compris`. If you author rows for it, **at
most two**, and they go in `quebec-et-francophonie`, never in `au-restaurant`. The design
asked for a whole Quebec mission and eight rows. **Overruled.** a2.26 is the only unit with
a regional exception, because tax at the till changes an *answer* rather than a word.

**Job-title feminisation** is a2.30's, corpus-first then OQLF. You will not exercise it;
carry the constraint anyway and mint none.

**There is no timer anywhere in the app.** `setInterval` count is **0** across
`MissionSection.tsx`, `LessonSection.tsx`, `MissionRich.tsx` and `LessonRich.tsx`. Doctrine
§B.8 calls `groupDrill` "production against the clock" and that is aspirational. Your three
`groupDrill` sections are **not timed** and no copy may promise a clock. Any design element
assuming a countdown is void and must be re-expressed as tap-to-continue.

**Do not author these fields.** `modelPlayback`, `wrongThenRight`, `perSentenceReplay`,
`scoreOn`, `autoplay` and `maxPlays` all validate, publish, and draw nothing. The seed
already carries 31 instances that do nothing.

---

## Layout and scene

- **The eight stages belong on one screen, in order.** That is the layout the test must
  assert, and it is what makes this a script lesson rather than a phrase list.
- **His question and the answer that fits belong adjacent**, in `s10-fit`. Second required
  layout.
- **The six repair rungs belong in one section in face-cost order.** Third required layout,
  and it is the band's Owns.
- **A `table` at layer `core` is a density failure**, and `table` has been used **zero
  times across all 64 shipped lessons** while `tapTable` has been used 123. The design
  proposed making a2.07 the first `table` in the product. **Overruled**: use `tapTable` for
  both `s03-stages` and `s11-gradient`, and cap each at six rows, which is the Pixel 6 cap
  and has a glyph budget on the headers.
- **`cheatSheet` inside a reference sheet draws its title and nothing else.** If this lesson
  gets a sheet, it must not be a `cheatSheet`. A `sheetId` resolves only inside its own
  lesson; cross-lesson sheets do not exist.
- **Put `flex` on a wrapper `View`, never on a `TX`.** A flexed `Text` loses its last words
  while the audio speaks them in full.
- **Spaced punctuation clips a scene bubble's tail.** A spaced exclamation mark makes the
  French line drop its last word while the gloss still translates it. Restaurant copy is
  unusually dense with `Bonsoir !`, `Voilà !`, `Ce sera tout ?`. Missions 1 and 15 are the
  exposure: device-verify both, or avoid a final ` !` in a scene bubble.
- **`dicteeMode` switches to WORD tiles above 16 letters.** The waiter's lines are long, so
  `s20-write` will be in word mode. Check it through the real function, not by counting, and
  make sure the mission still tests something in word mode.
- **Missions render authored order; only the quiz shuffles.** Hand-randomise the options in
  `s09`, `s13` and `s18`. Never hand-randomise the quiz.

**The scene:** the A2 register, and a sentence that dies mid-way per doctrine §B.2. Someone
who has rehearsed their order all the way to the table, delivers it, and is then asked a
question they did not prepare for. Beats in a named `SCENE_BEATS` const, prose at `md`,
choice and break at `lg`, each with its own `audio`, break body 24 to 40 words.

---

## Quiz notes

Six rounds of five, thirty questions, one quiz. **A second `quiz` section is silently never
rendered.**

- **`listenChoose` is your strongest round** and it is where the CO weight lands. **Every
  listening question must carry `say`**, or the component falls back to speaking
  `opts[correct]` and reads the answer aloud.
- **`errorSpot` for the register errors** — `Je veux le poulet` — and it needs `prompt`, the
  text being worked on, or the learner is asked to fix a phrase that never appears.
- **`typeIn` for the repair rungs**, which is the only format that makes the learner produce
  one. `fold()` keeps a final `-e` and `-s`, so a wrong form will not silently pass.
- **mcq for stage placement**: he said X, where in the meal are you.
- **What no scored surface in this product can test.** *(Corrected 2026-08-15. This
  prompt said "an accent, a cedilla or a comma" and then said the hyphen exposure was
  narrower than reported. Both halves were wrong, because the quiz has its own
  normaliser and neither this prompt nor the collation had read it. Authority:
  `03-ANSWER-FOLD-FACT.md`.)*

  Quiz `typeIn` and `errorSpot` are graded by `matchesAccept`, which calls **`fold()`
  in `ealch-v2/src/content/answer.logic.ts:32`** — not `normalizeFr`. `fold()` strips
  **accents, case, punctuation, hyphens, the middle dot, BOTH apostrophes, and all
  whitespace.** So none of these can ever be the difference between right and wrong:

  | | always passes |
  |---|---|
  | accent, cedilla | `à point` = `a point`, `réglez` = `reglez`, `ça` = `ca` |
  | capital | `Monsieur` = `monsieur` |
  | hyphen | `est-ce que` = `est ce que` |
  | apostrophe, elision | `l'addition` = `laddition`, `n'ai` = `nai` |
  | word division | `s'il vous plaît` = `silvousplait` |
  | comma, punctuation | `Bonjour, monsieur` = `Bonjour monsieur` |

  This bites you harder than most lessons because half the restaurant lexicon is
  accented and the repair rungs are full of elisions. **Say which questions you wanted
  and could not write**; `a2.09`'s section is the model.

  What still discriminates, and is what your questions must turn on: **word choice,
  word order, a present-or-absent word, and inflection that survives folding** —
  `fold()` keeps a final `-e` and `-s`, so `je voudrais` against `je veux`, or a
  missing `vous`, is testable and a wrong form will not silently pass.

- **BAND RULE, and it applies to every `typeIn`, every `errorSpot` and the dictée.**
  Before you author an item, fold the expected answer **and** the most plausible wrong
  answer. **If they fold to the same string the item tests nothing and must be moved to
  `mcq` or `listenChoose`.** Assert this in your test file over every authored
  near-miss: `fold(answer) !== fold(distractor)`.
- **The dictée is graded by the other normaliser** and it is no looser. `normalizeFr`
  (`utils/score.ts:19`) has exactly one render-side caller, `MissionRich.tsx:1385`, the
  dictée tile check, and it strips accents, apostrophes, hyphens and punctuation too.
  So **do not author a dictée whose only difficulty is a hyphen or an apostrophe**.
  `Je n'ai pas bien compris` is fine to dictate; the apostrophe must not be the point.
- **No band-wide hyphen guard is built.** The fix is the band rule above plus one
  assertion, not a renderer change.
- **Every question carries `why`.**

---

## Wiring

```
scripts/author-restaurant-batch.ts              content:restaurant
scripts/merge-restaurant-into-seed.ts
scripts/data/restaurant-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-07-restaurant.test.ts
ealch-admin/A2-SITUATIONS/04-REPAIR-MOVE-IDS.md
```

**`content:nourriture` already exists and it is a1.23's.** Do not run it and do not extend
it.

Ids from your band-ledger block, with the six repair ids at its head. **The seed is a
CUT**: `au-restaurant` is claimed at 346 rows in Postgres and 17 in the seed, a 20x
divergence and the worst in the band. **Your merge must carry every imported row your
lesson references** or the cards render empty on device. Postgres first, seed second.

**Never `git checkout seed.json`** — with eight concurrent builds it discards other
authors' uncommitted work. Re-run the merge scripts instead. **Do not hand-bump
`seed.version`.**

**Publishing is not part of your job.** Applying to Postgres and merging into the seed is
where you stop. `content:publish` is currently blocked: it would delete `sons.09.l1`, which
is seed-only. Run `pnpm content:parity` first if anyone asks you about it.

### Corpus budget

Roughly **55 new rows**, heavily `phrase` and `sentence` and very few `word`, because the
payload is utterances rather than vocabulary.

| bucket | ~count | theme | note |
|---|---|---|---|
| The waiter's script, all eight stages | 30 | `au-restaurant` | The Own. Each needs a `respell` with elision marked. |
| The failure move | 10 | `au-restaurant` | Sending a plate back, `il n'y en a plus`, a wrong bill, escalating an allergy. |
| **The repair move** | **6** | `au-restaurant` | The frozen block. Contract above. |
| Politeness gradient exemplars | 6 | `au-restaurant` | `je prendrais` is claimed at 0 restaurant rows; the conditional of `prendre` in this use is genuinely new lexis. |
| Quebec | ≤2 | `quebec-et-francophonie` | Never `au-restaurant`. Never scored. |

**Author almost no nouns.** `flashhub-coverage.test.ts` treats two rows sharing an `fr`
inside one theme as one card served twice, and `au-restaurant` already holds `le vin
rouge`, `le vin blanc`, `la baguette`, `le croissant`, `la tomate` and thirty more food
nouns at a2. That is a happy constraint, since your payload is utterances.

**Import, do not re-author:** the interrogatives already in the server's voice
(`fr.a1.au-restaurant.111`, `.116`, `fr.a2.au-restaurant.054`, `.063`), `je voudrais` and
`je prends` (`fr.a1.au-restaurant.102`, `.112`), `l'addition` (`.103`), `une table pour`
(`.039`, `.043`), the cuissons (`.020`, `.021`, `.022`), `le pourboire` (`.010`), the
carafe (`.096`, `.159`), the allergy and preference run (`fr.a2.au-restaurant.051`–`.063`),
`Sur place ou à emporter ?` (`fr.a1.cafe.005`), and every figure from `nombres`. **All these
ids are the design agent's and unverified. Confirm each by probe before naming it.**

**Do not write into `rp-repas`.** Its 113 rows are keyed to the standalone `scenarios`
table. Import from it; never author into it.

---

## Your test

Always-required assertions are in `A1-BUILD-INVARIANTS.md` §6, and the guard holes the A2
band carries are in `A2-BRIEF-CORRECTIONS.md` §9, §13, §14.1, §14.3, §14.4 and §14.5. All
of them apply to you. Two bite this lesson specifically:

- **The house word boundary excludes `'`**, so a guard built on it cannot see `l'addition`,
  `qu'est-ce que`, `n'ai` or `c'est`. Drop the apostrophe from the left boundary and keep it
  on the right, or your guard will report a clean absence over content that is right there.
- **`hasPlainNasalFor` has three measured blind spots**: it cannot see a nasal followed by a
  consonant inside a token, it false-positives on a real /n/ after a vowel, and a row with a
  nasal stem and a nasal ending holds one visible and one invisible nasal in one string, so
  repairing only what the checker reports ships a wrong value it then calls clean. Your
  exposure is `Bonsoir`, `combien`, `ensemble`, `boisson`, `commander`, `séparément`. Read
  §14.1 before you build the repair table, and phrase the assertion as "the respelling is
  correct", never as "the checker is quiet".

Specific to this lesson:

- **The six repair rows are asserted by id, by theme, by exact `fr` string, by rung order
  and by drill set** (`flashcard`, `voiceflash`, `dictation` on every one). This is the
  assertion seven other lessons depend on. A rename, a reorder, a re-theme or a dropped
  drill must go red.
- **No repair `fr` string contains a restaurant noun.** Assert domain-neutrality by a word
  list, not by eye.
- **`04-REPAIR-MOVE-IDS.md` exists and its six ids match the six in the seed.**
- **The eight stages appear in one section, in order.** Assert the sequence, not just the
  presence.
- **The partitive is present as recall and absent as instruction**, scoped to production
  surfaces, with `a1.29` named. No new partitive claim anywhere.
- **None of `a1.29`'s nine `deckTranche` ids is edited.**
- **No authored row and no scored question is about a price, a total, change, coins or
  notes**, reserving a2.26. The one spoken total in the scenario is permitted and must be
  scoped as the single allowed location.
- **`pourriez-vous` appears nowhere**, reserving a2.29 and the pending a2.13 decision.
- **`y` and `en` are never explained.** Guard the teaching move, not the letters, and put an
  English sentence and a preposition use in your MUST_NOT_FIRE list.
- **Comparatives appear in no authored copy**, reserving a2.08.
- **Every listening line in `s08` and `s16` is self-contained**, asserted by the absence of
  a back-reference to another section.
- **Every `listenChoose` quiz question carries `say`.**
- **`commonErrors` carries `swipe: true`.** The `trapDrill` walks `rule > cards > audio >
  drill` with a gated drill step.
- **`practice` is `skill: 'speak'` and every item it names carries `voiceflash`.** Every
  dictée item carries the `dictation` drill, **checked against Postgres, not the seed**.
- **Every item is reachable**: named by a section, or released by a `deckTranche` and
  carrying a `flashcard` drill.
- **Exactly one `quiz` section, exactly one lesson.**
- **Widen the jargon walk to include `intro` and `overview`**, and run it over a `display()`
  walk so `sub` on a `cardDeck` card is seen. Check the `-s` plural of every JARGON entry.
- **No em dash in any authored string. No "honest" or "honesty"** — and the band's `\bhonest`
  guard cannot see "dishonest", so match the substring, not the word.
- **No `U+203F`** in any `respell`.

**Mutation-test everything**, and expect two of your mutations to find a weakness rather
than confirm a strength; that is the measured rate. Mutations worth running here: rename one
repair id, reorder the rungs, drop `voiceflash` from a repair row, put a restaurant noun in
a rung, move a stage out of order, teach the partitive a second time, add a price question,
gloss the `y` in `il n'y en a plus`.

---

## Settled before you start

- **Theme `au-restaurant`.** The spine's `nourriture` is a phantom and its amendment is band
  blocking step 2, not your unilateral edit.
- **One lesson.** `lessonIds: []`, version starts at 1.
- **You own the repair move for all eight units**, six rows, frozen, contract above.
- **You own the bill as a stage; a2.26 owns money as a topic.** No price reception here.
- **France-primary, one Quebec card, nothing Quebecois is ever scored.**
- **No timer exists.** No `groupDrill` in this lesson is against a clock.
- **All 35 section types render.** Nothing in this design is NEEDS-ENGINEERING.
- **`hideLines` is the band's one funded engineering item.** Gate 2 above.
- **No `ExamTask` rows, no `Scenario.exam`, no `delf_a2`.**
- **`practice` renders the speaking drill regardless of `skill`.** `skill` is decorative in
  every authored section in the product.

## Still unverified

**Everything Postgres.** The supervisor did not query the database; every DB figure in this
file is the design agent's. In particular:

- **`au-restaurant` at 346 published rows, and 4 of them in the waiter's voice.** This is the
  measurement the entire lesson rests on. `corpus:probe --theme au-restaurant` plus
  the interrogative scan settles it. **If the waiter's half turns out to be larger than four
  rows, say so loudly** and rebalance act 2 toward import.
- **NEXT FREE at `fr.a2.au-restaurant.132`**, count 130, max 131, gap at 98.
- **Every import id listed above.** `content:parity` says whether each is `published` and
  therefore reachable, or merely present and therefore treatable as absent.
- **The zero counts** for `et avec ça`, `comme boisson`, `vous avez choisi`, `c'est pour
  ici`, `la carte bleue`. Probe with real orthography and back a `--tokens` zero with a
  theme listing.
- **`quebec-et-francophonie` at 593 rows** and the `souper` / `la facture` figures.
- Whether repeated `scene` renders. Gate 1.
- Whether `hideLines` has shipped. Gate 2.
- The baseline test count and the current mission-count range. Both move weekly.

## Overruled from the design document

Do not reinstate any of these.

| Design said | Overruled to | Why |
|---|---|---|
| `s12-gradient` and the stage map are `table` sections; a2.07 becomes the first `table` in the product | **`tapTable`** for both | `table` is at zero across 64 shipped lessons, `tapTable` at 123, and a `table` at layer `core` is a density failure |
| `s19-money`, six spoken totals with an MCQ on the figure | **Cut.** One unscored total in the scenario | Collation §C5 gives price and change reception to a2.26 |
| A whole Quebec mission, ~8 rows in `quebec-et-francophonie` | **One card, at most two rows, never scored** | Collation §C3. a2.26 is the band's only regional exception |
| Import the three generic repair rows into the citable set | **Author all six in `au-restaurant`** | The citable list must be one contiguous, single-theme, single-owner block |
| E2 through E5 as NEEDS-ENGINEERING asks (`maxPlays`, `speeds`, `groupDrill` countdown, `documentPick`) | **None funded.** `hideLines` only | Collation §3.2 and §3.4 |
| Five acts | **Six acts**, act 2 the heaviest | Doctrine §F: adapt but do not shrink |

---

## What to report

Write `ealch-admin/A2-SITUATIONS/40-A2-07-BUILD-REPORT.md`. Doctrine §F and
`A2-BRIEF-CORRECTIONS.md` §12, plus, and these seven exist because seven units read your
report before they start:

1. **The six repair-move ids, under a fixed heading, verbatim**, with rung, `itemId`, `fr`,
   `en` and `respell`, and the statement that they are frozen. This is the single most
   important paragraph you will write in this band. Confirm `04-REPAIR-MOVE-IDS.md` matches
   it exactly.
2. **Whether repeated `scene` rendered on device**, and which branch of Gate 1 you took.
3. **Whether `hideLines` existed when you authored**, and whether `s16-offscript` shipped.
4. **The waiter's-voice measurement, re-run**: how many of `au-restaurant`'s published rows
   are actually in the server's voice, and how far off 4 of 346 the truth was. The band's
   whole mandate rests on that number.
5. **The reframe as you worded it**, verbatim, because the other seven inherit the
   comprehension-first framing.
6. **Your id block, whether it held, and the row COUNT after your apply** — not the maximum
   — with how much you imported against how much you authored, and the percentage of newly
   authored rows in the waiter's voice against the band's 40 percent floor.
7. **The message to a2.26's builder** about the payment boundary and the restaurant total,
   in a form that builder can paste into their own file.

Plus, as every A2 build report does: **every claim in this file you measured false.** Every
A1 and A2 build so far has found between three and five, and this file carries an entire
column of figures the supervisor explicitly did not verify, so expect more than five. The
"does not exist" claims are historically the wrong ones.
