# `layer: 'more'` is read by no renderer, and a settled decision rests on it

Measured 2026-08-16 against `ealch-v2/src` and `seed.json`. **Finding only. Nothing
was changed.**

---

## The measurement

`section.layer` has exactly three consumers in the whole product, and none of
them draws anything:

```
ealch-v2/src/content/density.logic.ts:358   isDeep — the word-cap exemption for sheets
ealch-v2/src/content/density.logic.ts:362   the same validator
ealch-v2/src/content/schema.ts:2457         validates it is one of core | more | deep
```

**Zero components read it. Zero app routes read it.** There is no `=== 'more'`
anywhere in render code. Grepped across `components/`, `app/` and `content/`.

**`layer: 'more'` therefore draws exactly like `layer: 'core'`.** The section is
a full mission: numbered in the rail, counted in the lesson's mission total,
tappable and completable like any other.

Confirmed visually before it was confirmed by grep. On a Pixel 6, a2.28.l1's two
`more` sections, `s14-notmedical` and `s17-quebec`, appear as ordinary numbered
rows carrying the `CARTES` chip, inside a lesson header reading **"24 missions"**
— which is all 24 sections, the two `more` ones included.

### Blast radius

```
sections by layer:  core 1604   more 8   deep 0   absent 158
render: 'sheet'     2 sections   <- the ONLY thing the layer model actually gates
```

Only **8 sections in the entire product** use `more`, and **7 of the 8 are in
this band**:

| lesson | sections |
|---|---|
| a2.27.l1 | `s15-annonce`, `s20-review` |
| a2.28.l1 | `s14-notmedical`, `s17-quebec` |
| a2.29.l1 | `s05-grid`, `s14-quebec` |
| a2.31.l1 | `s06-quebec` |

`deep` is at **zero**, so the only part of the three-layer model that does
anything is `render: 'sheet'`, used twice, and `density.logic.ts` keys its
exemption off `layer === 'deep' || render === 'sheet'` — meaning the working half
is the `render` half.

---

## Why this matters: a PAUL-SETTLED decision rests on it

Collation §1.13 records option B, and its stated rationale is:

> **"`layer: 'more'`, so it never interrupts the teaching path.** A learner on
> the core path walks past it. That is deliberate and it is why option B cost one
> card rather than a redesign."

**That mechanism does not exist.** There is no core path that routes around a
`more` section. The learner meets `s14-notmedical` as mission 14 of 24, in
sequence, exactly like the gated dosage trap before it.

**This does not make option B wrong.** One card is cheap whether or not it can be
walked past, the placement reasoning (after the gated drill, closing act 3) is
independent of `layer`, and nothing about the card's content changes. What is
wrong is the *premise the decision was argued from*, and the decision is now the
**house position for health-adjacent content**, so every future such unit
inherits it.

The same applies to the band's Quebec cards. Collation C3 says a Quebec card is
"colour" that a France-based learner "walks past". Four units authored one at
`layer: 'more'` on that understanding. All four are full missions.

---

## What should happen, and what should not

**1. Correct the rationale, not the card.** §1.13's parenthetical about walking
past it is false and should be struck. The decision stands on "one card, never
scored, placed after the drill", which is all true and all verifiable.

**2. Do NOT make `layer` work as a repair.** Giving `more` real skip behaviour is
a product feature, not a defect fix: it changes mission numbering, the "N
missions" contract on the overview, progress denominators and the badge
condition. That is Paul's call and a renderer change with its own review, not
something an authoring agent should reach for.

**3. Do not delete the field either.** It is validated, it is authored in 8
places, and `deep` still carries meaning in the density validator alongside
`render: 'sheet'`. Removing it is a bigger change than leaving it inert.

**4. The other band units should check their own.** a2.29 (`s05-grid`,
`s14-quebec`) and a2.31 (`s06-quebec`) were authored on the same assumption. If
either used `more` to mean "optional, and the learner may never see it", that
claim needs re-reading.

**5. If a genuine optional-content mechanism is wanted**, the honest options are
a real `optional` flag the pager understands, or simply not authoring the section
— not a field that validates and draws nothing.

---

## The class of defect

This is the fourth field in this band measured as validated-but-unread, after
`Scenario.exam`, the five audio fields (`modelPlayback`, `wrongThenRight`,
`perSentenceReplay`, `scoreOn`, `autoplay`) and `maxPlays`. In every case the
field validates, publishes, reaches the OTA snapshot, and is rendered by nobody.

`layer` is the most expensive of the four so far, because it is the only one a
**settled product decision was argued from** rather than merely authored into.

**The check that would have caught it, and is worth making routine:** before
relying on a schema field's behaviour, grep `components/` and `app/` for it. The
admin typecheck catches a field that is not in the *type*; nothing catches a
field that is in the type and read by no renderer.

---

*Found while scoping a device pass that is no longer needed: the device could
only have re-observed what the grep proves. This file is `.md` and therefore
gitignored: `git add -f` to track it.*
