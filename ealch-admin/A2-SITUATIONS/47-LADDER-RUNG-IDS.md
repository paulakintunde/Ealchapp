# The register ladder — the frozen id list for the A2 situations band

**Owner: a2.29 (seq 28).** Authored once, for a2.30, a2.31 and a2.32, under
collation §1.2 and C5. **Those three units author ZERO rung rows.** They quote
the three names verbatim and cite these rows by `itemId`.

**Status: APPLIED to Postgres and merged into `seed.json`, 2026-08-16.**
`hebergement` went 312 → 371 published rows. All 23 rows below read back: 22 rung
rows plus the brake.

Companion to `04-REPAIR-MOVE-IDS.md`, which does the same job for a2.07's repair
move. Same shape, same rules, same reason it exists as a file rather than a
paragraph in a build report.

---

## THE THREE RUNG NAMES. FROZEN.

```
Rung 1   Ask once, softly.
Rung 2   Say it again, without the person.
Rung 3   Ask for the person who can fix it.
```

Learner-facing English, no jargon. **A paraphrase is a second ladder.**

`ealch-v2/src/content/a2-29-hotel.test.ts` asserts all three as exact strings, in
order, in one section, and `scripts/author-hotel-batch.ts` pins them against
hardcoded literals. Both were needed: the batch's first version derived the check
from the same constant it was checking, so renaming a rung passed. **A guard that
compares a value to itself cannot fail.**

## THE REFRAME, quoted the same way

```
Take the person out of the sentence.
```

Authored five times verbatim in a2.29. Quote it; do not reword it.

---

## THE ROWS

All in `hebergement`, all `a2`, all `kind: 'sentence'`, frozen at publication.
The 22 rung rows are contiguous at `.074`–`.095`; the brake is `.132`, at the end
of a2.29's block, because it is the one line that is not a rung.

### Rung 1 — Ask once, softly.

| itemId | fr | move |
|---|---|---|
| `fr.a2.hebergement.074` | `Est-ce que je peux avoir une serviette, s'il vous plaît ?` | request |
| `fr.a2.hebergement.075` | `Pourriez-vous m'apporter une serviette, s'il vous plaît ?` | request |
| `fr.a2.hebergement.076` | `Excusez-moi, il y a un problème avec la douche.` | fault |
| `fr.a2.hebergement.077` | `Excusez-moi de vous déranger.` | opener |
| `fr.a2.hebergement.078` | `Est-ce que ce serait possible d'avoir une autre chambre ?` | request |
| `fr.a2.hebergement.079` | `J'aimerais changer de chambre, si c'est possible.` | request |
| `fr.a2.hebergement.080` | `Est-ce que je peux avoir un oreiller de plus ?` | request |
| `fr.a2.hebergement.081` | `Excusez-moi, il y a beaucoup de bruit dans le couloir.` | fault |

### Rung 2 — Say it again, without the person.

| itemId | fr | move |
|---|---|---|
| `fr.a2.hebergement.082` | `C'est toujours le même problème.` | restate |
| `fr.a2.hebergement.083` | `Ça fait deux fois que je demande.` | request |
| `fr.a2.hebergement.084` | `Je vous ai demandé une serviette il y a une heure.` | request |
| `fr.a2.hebergement.085` | `L'eau chaude ne fonctionne toujours pas.` | fault |
| `fr.a2.hebergement.086` | `Le problème n'est pas réglé.` | restate |
| `fr.a2.hebergement.087` | `Ça ne marche toujours pas.` | fault |
| `fr.a2.hebergement.088` | `J'ai appelé la réception hier soir, et personne n'est venu.` | request |
| `fr.a2.hebergement.089` | `La climatisation ne marche pas non plus.` | fault |
| `fr.a2.hebergement.090` | `C'est la deuxième nuit avec le même bruit.` | restate |
| `fr.a2.hebergement.132` | `Je repasse dans une heure, alors.` | **the brake** |

### Rung 3 — Ask for the person who can fix it.

| itemId | fr |
|---|---|
| `fr.a2.hebergement.091` | `Je voudrais parler au responsable, s'il vous plaît.` |
| `fr.a2.hebergement.092` | `Est-ce que quelqu'un peut venir voir ?` |
| `fr.a2.hebergement.093` | `Est-ce que je peux parler à quelqu'un d'autre ?` |
| `fr.a2.hebergement.094` | `Qui est-ce que je peux voir pour ce problème ?` |
| `fr.a2.hebergement.095` | `Le responsable est là ce soir ?` |

### The nine cells

Three rungs across, three moves down. What a2.29's `tapTable`, its `table` and
its `practice` section all resolve to, and the smallest usable quotation of the
ladder.

```
                   rung 1     rung 2     rung 3
the request        .074       .084       .091
the fault report   .076       .085       .092
still not fixed    .078       .087       .093
```

## Ready to paste

```ts
const RUNG_1 = 'Ask once, softly.';
const RUNG_2 = 'Say it again, without the person.';
const RUNG_3 = 'Ask for the person who can fix it.';

/** a2.29's ladder. Cite by itemId; author no rung lines of your own. */
const LADDER_IDS = {
  rung1: ['fr.a2.hebergement.074', 'fr.a2.hebergement.075', 'fr.a2.hebergement.076',
          'fr.a2.hebergement.077', 'fr.a2.hebergement.078', 'fr.a2.hebergement.079',
          'fr.a2.hebergement.080', 'fr.a2.hebergement.081'],
  rung2: ['fr.a2.hebergement.082', 'fr.a2.hebergement.083', 'fr.a2.hebergement.084',
          'fr.a2.hebergement.085', 'fr.a2.hebergement.086', 'fr.a2.hebergement.087',
          'fr.a2.hebergement.088', 'fr.a2.hebergement.089', 'fr.a2.hebergement.090',
          'fr.a2.hebergement.132'],
  rung3: ['fr.a2.hebergement.091', 'fr.a2.hebergement.092', 'fr.a2.hebergement.093',
          'fr.a2.hebergement.094', 'fr.a2.hebergement.095'],
} as const;

const NINE = [
  ['fr.a2.hebergement.074', 'fr.a2.hebergement.084', 'fr.a2.hebergement.091'],
  ['fr.a2.hebergement.076', 'fr.a2.hebergement.085', 'fr.a2.hebergement.092'],
  ['fr.a2.hebergement.078', 'fr.a2.hebergement.087', 'fr.a2.hebergement.093'],
];
```

## The contract, in five clauses

1. Quote the three rung names **verbatim**. A paraphrase is a second ladder.
2. Reuse the rung rows **by itemId**. Author no rung lines of your own.
3. You **may** add your own column, your own move, filled with your own
   vocabulary.
4. You **may not** rename a rung, add a fourth, or reorder them.
5. Quote a2.29 by **unit id** in prose where you use the ladder.

## Every row carries the same drills

```
['flashcard', 'voiceflash', 'review']
```

plus `dictation` on `.077`, `.082`, `.083`, `.087`, `.091`. `kind: 'sentence'`,
`level: 'a2'`, `theme: 'hebergement'`, on all 23.

| you want | you get |
|---|---|
| a `cardDeck` or a `deckTranche` release | `flashcard` |
| a `practice` section with `skill: 'speak'` | `voiceflash` |
| a `dictation` section | `dictation`, on the five above only |

**Your merge must carry these rows into the seed.** They live in `hebergement`,
which is almost certainly not your theme, and the seed is a CUT: before a2.29,
`hebergement` held 312 published rows in Postgres and **zero** in `seed.json`.
Pull every id your lesson references out of Postgres in your merge, or the cards
render empty on device while your tests pass against a corpus that has them.

## Why the ladder was authored rather than imported

`parler au responsable`, `ça ne marche pas`, `désolé de vous déranger`,
`vous avez une réservation` and `ce serait possible de` are **0 rows at any
level**, measured 2026-08-16. The corpus had authored the learner's half of every
situation and left the middle of every argument out. Rungs 2 and 3 did not exist
in any theme.

Rung 1 is different and worth knowing: much of it *did* exist, and a2.29 imported
what it could. `Il y a un problème avec la douche.` is `fr.a2.bricolage.041` and
is imported as the **bare** report so `.076`, the softened one, has a minimal
pair to sit beside. `Excusez-moi de vous déranger.` exists as
`fr.a1.expressions-frequentes.002` and `.077` is a deliberate cross-theme twin:
the published row carries `drills: {dictation}` and nothing else, so it can be
released by no `deckTranche` and reached by no `practice`. Cross-theme
duplication is settled legal precedent (collation §7.5); the rule the flashcard
hub enforces is **intra-theme**, and the intra-theme fold sweep is clean.

## What the ladder is for

The learner's failure is not vocabulary. It is that they have two settings,
apologetic and furious, because nobody taught them the middle one. **Rung 2 is
the missing rung and it is what the unit exists for.**

- Rung 1 costs nothing and gives nothing away.
- Rung 2 says *this has happened before* without saying whose fault that is.
  `toujours pas` carries the whole history in two words.
- Rung 3 ends the conversation you were having and starts a different one. **It
  works once.** `.132` is the brake: what you say instead, when you have only
  asked once.

## First consumer, and it held

a2.30 « Le travail et les métiers » was built the same day and quoted all three
names verbatim as constants (`travail-metiers-corpus.ts:266-268`), reusing
`.074`, `.082` and `.091` — one per rung. The contract survived its first
downstream use before this file existed. It exists so a2.31 and a2.32 do not have
to find it inside a 560-line build report.

---

*Written by the a2.29 build, 2026-08-16. Companion files:
`04-REPAIR-MOVE-IDS.md` (a2.07's repair move, same shape),
`46-A2-29-BUILD-REPORT.md` (the full report).
This file is `.md` and therefore gitignored: `git add -f` to track it.*
