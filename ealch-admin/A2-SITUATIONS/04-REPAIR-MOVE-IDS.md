# The repair move — the frozen id list for the A2 situations band

**Owner: a2.07 (seq 24).** Authored once, for all eight units, under collation
§1.6 and §7.1. **The other seven units author ZERO repair rows.** They cite these
by `itemId` and quote a2.07 by unit id in prose.

**Status: APPLIED to Postgres and merged into `seed.json`, 2026-08-15.**
`au-restaurant` went 346 → 398 published rows. All six read back from Postgres
with the drill set below.

---

## THE SIX ROWS. FROZEN.

Ordered by **face cost**, and the order is part of the contract: citing units
quote "rung 3", so the ladder must never be reshuffled.

| rung | itemId | fr | en | respell |
|---|---|---|---|---|
| 1 | `fr.a2.au-restaurant.132` | `Pardon ?` | Sorry? | `par-DOHⁿ` |
| 2 | `fr.a2.au-restaurant.133` | `Vous pouvez répéter, s'il vous plaît ?` | Can you say that again, please? | `voo poo-VAY ray-pay-TAY seel voo PLEH` |
| 3 | `fr.a2.au-restaurant.134` | `Plus lentement, s'il vous plaît.` | More slowly, please. | `plü lahⁿt-MAHⁿ seel voo PLEH` |
| 4 | `fr.a2.au-restaurant.135` | `Je n'ai pas bien compris.` | I didn't quite catch that. | `zhuh nay pah byehⁿ kohⁿ-PREE` |
| 5 | `fr.a2.au-restaurant.136` | `Qu'est-ce que ça veut dire ?` | What does that mean? | `kess kuh sa veu DEER` |
| 6 | `fr.a2.au-restaurant.137` | `Vous pouvez me l'écrire, s'il vous plaît ?` | Could you write it down for me, please? | `voo poo-VAY muh lay-KREER seel voo PLEH` |

**This list is FROZEN.** The six ids, the six `fr` strings, the rung order and
the drill set never change. `ealch-v2/src/content/a2-07-restaurant.test.ts`
asserts all five properties plus the contents of this file, so an edit goes red
rather than quietly breaking seven lessons.

## Every row carries the same drills

```
['flashcard', 'voiceflash', 'dictation', 'review']
```

`kind: 'phrase'`, `level: 'a2'`, `theme: 'au-restaurant'`, on all six.

That drill set is deliberate and it is what makes the block citable. A citing
unit may reach for:

| you want | you get |
|---|---|
| a `cardDeck` or a `deckTranche` release | `flashcard` |
| a `practice` section with `skill: 'speak'` | `voiceflash` |
| a `dictation` section | `dictation` |

Verified legal against Postgres before authoring: the
flashcard + voiceflash + dictation triple appears on **861** published rows, and
`dictation` on `kind: 'phrase'` on **60**.

## How to cite them

```ts
// In your lesson file. Do NOT re-type the strings.
const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
] as const;

const S_REPAIR: LessonSection = {
  type: 'cardDeck', id: 's-repair', title: '...',
  itemIds: [...REPAIR_IDS],
  // and quote a2.07 by UNIT ID in prose: "a2.07 taught these six."
};
```

**Your merge script must carry these rows into the seed.** They live in
`au-restaurant`, which is almost certainly not your theme, and the seed is a
CUT: a row that is published in Postgres is not automatically in `seed.json`.
Pull every id your lesson references out of Postgres in your merge, or the cards
render empty on device while your tests pass against a corpus that has them.

## Why all six were authored rather than imported

Six generic repair rows already existed across four themes when this was built:

```
fr.a1.expressions-frequentes.123   Vous pouvez répéter, s'il vous plaît ?
fr.a1.expressions-frequentes.124   Plus lentement, s'il vous plaît.
fr.sons.questions.022              Qu'est-ce que ça veut dire ?
fr.sons.questions.023              pouvez-vous répéter ?
fr.a2.questions-du-quotidien.008   Qu'est-ce que ça veut dire ?
fr.a2.expressions-frequentes.073   Parlez plus lentement, s'il vous plaît.
```

(The prompt named three of these. There are six. Two of the frozen rungs
therefore have an exact twin already published in another theme.)

Importing them was **overruled**, and the reason survives measurement: the
citable list has to be one **contiguous, single-theme, single-owner** block.
Mixing foreign-theme imports into the band's most-cited id list makes seven
units depend on rows a2.07 neither owns nor can guarantee stay published.

Cross-theme duplication is settled legal precedent here (collation §7.5:
`l'addition` exists in both `cafe` and `au-restaurant` and is not to be
"fixed"). The rule the flashcard hub actually enforces is **intra-theme**, and a
fold-based sweep confirmed zero intra-theme collisions for all six.

**Name the six rows above as prior exposure in your own report. Leave them where
they are. Do not cite them.**

## Domain neutrality is a contract term

Not one restaurant noun appears in any of the six strings, and the test asserts
it by word list rather than by eye. A doctor's unit, a hotel unit and a
technology unit all have to put these same strings in front of a learner.

The restaurant-flavoured variant (`Qu'est-ce que ça veut dire, "cuisson" ?`) was
deliberately **not** authored, because it is not citable.

If your unit wants a domain-flavoured variant, author it in **your** theme as a
separate, non-citable row, and cite the neutral rung beside it.

## What the ladder is for

Rung 1 is the cheapest thing you can say and gives away nothing. Rung 6 concedes
that the spoken channel has failed and asks to change medium. The teaching move
is not "here are six phrases": it is **reach for the lowest rung that will
actually fix the problem**, and know what the next one up costs you.

- Rungs 1 and 2 both just ask for a repeat. If the speed was the problem,
  neither of them tells the other person that, and you get the same sentence
  again at the same speed.
- Rung 3 is the first that names the fault.
- Rung 5 narrows the failure to one word rather than the whole turn.

`a1.30.l2`'s `x12-repair` quiz round has been **assessing** this move without it
ever being taught. That is the strongest single argument for the block existing.

---

*Written by the a2.07 build, 2026-08-15. Companion files:
`07-BAND-ID-LEDGER.md` (id blocks and the band-wide probe),
`40-A2-07-BUILD-REPORT.md` (the full report).
This file is `.md` and therefore gitignored: `git add -f` to track it.*
