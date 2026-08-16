# a2.27 · Transportation · Les transports — build report

Trail seq 26. Unit 3 of the A2 situational band (seq 24 to 31). Built 2026-08-16
against seed v50 and Postgres `content_items` (48,325 rows before this build).

**Status: applied to Postgres and merged into `seed.json`. NOT published.**
`content:parity` is green and nothing in the seed is at risk from a publish.

---

## §0. Both of Paul's blocking decisions were answered before this build started, and neither ever blocked it

`12-DECISIONS-FOR-PAUL.md` item 1 (the a2.13 collision) went **option A**: a2.13
is amended and a2.29 takes `pourriez-vous`, which is still not this unit's.
Item 2 (the imperative) went **option B**: **nobody owns it.** a2.27 and a2.32
both use the direction verbs as unanalysed lexis, in the same terms, and neither
cites the other for the form.

Nothing in this build moved on either answer. The wording did: §3.2 is now
settled rather than provisional, and the hand-off to a2.32 says explicitly that
neither unit cites the other. **No step of this build waited on a person.**

The two funded gates were both open:

| gate | state |
|---|---|
| `04-REPAIR-MOVE-IDS.md` exists, all six rows read back from Postgres | a2.07 landed. This unit cites six ids and authors zero repair rows. |
| `listening.hideLines` shipped 2026-08-15 | `s10-three` is authored with `hideLines: true`. The transcript-study fallback was NOT taken. |

---

## §1. What shipped

```
a2.27.l1   « Les transports »
  23 sections, 23 missions, 6 acts, ONE lesson, ONE quiz
  106 authored corpus rows   104 in transports-quotidiens .135-.238
                               2 in quebec-et-francophonie .201-.202
  50 imported ids, every one verified published before a row was written
  30 quiz questions, 5 rounds of 6
  transports-quotidiens: 415 -> 519 published
  seed.json: 9,685 -> 9,812 items, 67 -> 68 lessons
```

**Owns:** multi-step direction chains, and ordinals in directions.
**Reframe, carried verbatim in eight sections and the roundup:**
*Find the joints, then take one move at a time.*

The other party's voice is **80.8 percent** of newly authored rows (84 of 104),
against the band floor of 40. The passer-by, the station announcer and the
counter agent are the bulk of the block, which is what the band's mandate asked
for and is easy to meet in a unit whose whole premise is that the reply is the exam.

**The exam claim, carried verbatim as the collation requires:**

> This unit carries exam value by teaching what the exam tests (transactional
> reception at speed, a request in the right register, a structured 60-second
> turn), not by producing an ExamTask row and not by populating Scenario.exam.

Zero `ExamTask` rows and zero `Scenario.exam` values were authored, and the test
asserts the absence.

---

## §2. Claims measured FALSE

Every DB figure in the prompt and the design was flagged UNVERIFIED and re-run.
Most held exactly. **Eight did not**, and five of the eight are the same failure:
an absence claimed from a token probe whose shape could not see the thing it was
looking for.

### 2.1 « The spine theme amendment is yours to make » — ALREADY DONE

The prompt hands this unit a one-line spine edit as its own work, with
`spine-drift.test.ts` behind it. It was already applied, in all three places,
before this build started:

```
author-full-curriculum-spine.ts:789   themes: ['transports-quotidiens', 'deplacements']
Postgres content_units a2.27          themes: ['transports-quotidiens', 'deplacements']
seed.json unit a2.27                  themes: ['transports-quotidiens', 'deplacements']
```

Band blocking step 2 landed for all eight units. **Nothing was edited and
`spine-drift.test.ts` needed no re-run on this unit's account.** `transport` is
still absent from `content_themes`, which is what makes it a phantom.

**`SEED_CUT.themes` still lists the dead `transport`, and it was deliberately
left.** That is the single band-level diff somebody makes once, after the re-map
and after at least one unit is authored. The test records that it was left
rather than missed.

### 2.2 « 3 imperative direction verbs in 1,161 rows » — it is at least 4, and the fourth is a chain

```
fr.a2.verbes-essentiels.042   Continuez tout droit jusqu'au feu.
                              drills = flashcard, voiceflash, sentence, dictation
```

A **two-move chain with a joint**, published, in a theme the design's sweep never
covered (it looked at `deplacements`, `la-ville` and `transports-quotidiens`).
It is the only pre-existing multi-move instruction in the product. **Imported,
not re-authored**, and released in act 3's tranche.

### 2.3 « 0 rows use `y` for a place » — FALSE, and false inside this unit's own theme

```
fr.a2.transports-quotidiens.121   Puisqu'il faisait beau, j'ai décidé d'y aller à vélo.
```

Published, and in the seed. A wider sweep returns **40 published rows** using `y`
for a place, 11 of them at a1, five of them seeded `j'y vais` rows in
`pronoms-essentiels`. The design probed the tokens `j'y vais`, `on y va`,
`vous y allez`, none of which matches `d'y aller` or `allons-y`, the two
commonest shapes.

**The ban is unchanged and was obeyed absolutely:** nothing in this lesson uses
`y` or `en` as a pronoun in any surface. But the collation's stated *rationale*
is wrong. The prompt says "there is nothing to import and nothing to preserve"
and "a learner arriving at seq 26 may never have met it". The learner's own
transport theme has already published it. **C8 is a teaching decision, not an
absence, and the seven other units should stop justifying it as one.**

### 2.4 « en/à + transport mode = 20 rows » — true as a substring count, misleading as coverage

Exactly **two** published rows are a bare mode phrase: `fr.a1.rp-voyage.004`
(à pied) and `fr.sons.liaisons.176` (en avion). `en bus`, `en voiture`,
`en métro` and `à vélo` do not exist as headwords anywhere. Four were authored
(.235 to .238) and the RULE is quoted from `fr.a1.deplacements.014` rather than
restated, exactly as the prompt asked.

### 2.5 « sortie versus sorti is an ear trap » — it is a HOMOPHONE PAIR

Both are /sɔʁ.ti/. Nothing distinguishes them by ear and a listening trap built
on them tests nothing. Dropped. `s14-ear` carries two genuine minimal pairs
instead, both of which send a learner to a different place:

| pair | why it costs a street |
|---|---|
| `deuxième` / `douzième` | one vowel apart, both ordinals fit the sentence. The best trap in the unit. |
| `à droite` / `tout droit` | one is a turn and one is not a move at all |
| `Tournez` / `Retournez` | an unstressed syllable at the front sends you back the way you came |
| `Continuez` / `Contournez` | same two opening syllables, and one means go AROUND the roundabout |

### 2.6 « if a2.07 shipped a `table`, mission 6 is a table » — a2.07 SHIPPED NO TABLE

Measured across all 67 seeded lessons: **`table` is still at ZERO.** a2.07 used
`tapTable` twice (`s03-stages`, `s11-gradient`). Mission 6 therefore took the
settled fallback, **a second `tapTable`**, which is pre-approved and needs no
device check. Doctrine §B.8's "one tapTable then stop" is a rule about the
paradigm act, and this unit has no paradigm.

**This unit is neither the first nor the second `table` in the product. There
still is none.**

### 2.7 The `xl` card size the prompt recommends cannot carry a teaching card

`LIMITS.xlWords` is **12** and `validateDensity` applies it **per field**. All
four move-type cards failed at 22 to 28 words in the `body` alone. `xl` gives a
caption, not a card that can say what a move type IS. `s04-moves` ships at
`size: 'lg'`, comfortably under the 45-word core cap.

The `xl-single-unit` rule the prompt cites is a different rule about the number
of French units on a screen, and it is moot here.

### 2.8 Confirmed exactly, for the record

| claim | verdict |
|---|---|
| `transports-quotidiens` 415 DB / 5 seed, next free a2 id `.135`, no gaps | **TRUE** |
| `deplacements` 320/320, `la-ville` 347/0 | **TRUE** |
| `rp-voyage` 426 DB | **TRUE**, seed shows 1 rather than 0 |
| ordinals in a direction = 0 | **TRUE.** `la première à droite` 0, `la deuxième à droite` 0, `la troisième rue` 0, `prenez la deuxième` 0 |
| station or airport announcements = 0 in 48,325 rows | **TRUE.** `à destination de` 0, `en provenance de` 0, `attention au départ` 0, `voie numéro` 0, `voie douze` 0 |
| `corpus:probe` has no `--count` flag (C-2) | **TRUE.** `probe-corpus.ts` parses `--theme`, `--words`, `--tokens`, `--unit` and silently ignores anything else. Dropped. |

---

## §3. C-1, the answer fold, and why it is a BAND finding

The prompt handed this correction down and asked for it to be carried into the
report because seven other units are copying collation §0.3's consequence. It is
confirmed, and the collation has already withdrawn its overrule of agent 8.

`fold()` (`ealch-v2/src/content/answer.logic.ts:32`) is what `matchesAccept`
uses, and `matchesAccept` is what grades quiz `typeIn` and `errorSpot`. It strips
**accents, case, all punctuation, hyphens, the middle dot, BOTH apostrophes, and
all whitespace** — which also kills capitals and word division.

For a transport lesson that is not academic:

```
un aller-retour = un aller retour = unallerretour
jusqu'au feu    = jusquau feu
à droite        = a droite            l'arrêt = larret
au bout de      = aubout de           Tournez = tournez
```

**Items this unit wanted and could not write:** a `typeIn` testing the hyphen in
`aller-retour`; a `typeIn` testing the elision in `jusqu'au`; an `errorSpot` on
`arrêt` against `arret`. Each survives only where its difficulty is WORD CHOICE
(`aller-retour` against `aller simple`, `en bus` against `à bus`), which does
survive folding.

**The band rule was applied item by item, not once in prose.** Both the apply
script and the test assert `fold(answer) !== fold(distractor)` over every
authored near-miss, and `fold(prompt) !== fold(answer)` on every `errorSpot`, so
an item that tests nothing fails rather than ships.

---

## §4. The renderer defect the band did not record, and it is already live

The prompt asks for a device check on `TrapAudioStep`'s reported hardcoded line
before authoring mission 11. **It is settled by reading, and it is worse than the
design guessed.**

`ealch-v2/src/components/MissionRich.tsx:870` is a bare JSX literal:

```tsx
<TX role="bodySm" color={t.txMuted} style={{ marginBottom: 12 }}>
  Écoutez la paire. Le R sonne, puis le R se tait.
</TX>
```

It is not read from the section and has no prop. Measured across the seed:
**41 shipped stepped `trapDrill` sections carry an `audio` step**, and every one
of them prints that sentence above its cards. **38 are A2 lessons**, including
a2.07's `s13-trap` and a2.26's `s10-which`. Only four are sound lessons where
"Écoutez la paire" is even approximately right, and none of those is about R
except sons.06.

**This build did not create the defect and did not fix it.** Fixing it changes a
renderer that 41 shipped sections depend on, and the correct default is not
obvious: making the current string the default leaves all 41 printing the wrong
thing. It needs its own commit, its own decision about the default, and its own
device check. **Filed here as a band-level renderer defect with a measured blast
radius, which is what the collation was missing.**

The two stepped trapDrills in this lesson keep their audio steps, because
dropping them would cost the slow replay and would not fix the 41 that already
ship.

---

## §5. What was lost by not building `chainDrill`, said plainly

`chainDrill` was DECLINED (collation §3.2, C2). The replacement is the chain
ladder on today's renderer: two `groupDrill`, one `listening` with `hideLines`,
one stepped `trapDrill`, rungs climbing 1, 2, 3, 4.

**What is genuinely lost.** `trapDrill` prints `promptSay` on screen, so the
learner SEES the four-move chain while answering. The pure working-memory
element is not recovered.

**What carries it instead.** The `audio` step precedes the gated drill, so the
first encounter is by ear. And the ten quiz `listenChoose` items are genuinely
audio-first, because `ListenChooseCard` hides its options behind `heard`.

**What survives intact, and it is the Owns.** The Owns is chunking and
**ordering**, not memory. Three correct moves in the wrong order put you
somewhere else entirely, and every option in the rung-4 drill contains the same
moves with only the sequence changed. The test asserts this directly: for each
question it checks that at least two options share a word multiset, so a
question that could be answered on vocabulary alone fails the suite.

---

## §6. Doctrine departures, both deliberate

### 6.1 The scene opens on failed reception, not a died sentence

§B.2 wants an A2 scene opening on somebody who started a sentence they could not
finish. This one opens on somebody who **finished** their sentence and could not
process the reply. Same failure, loss of fluency under load, relocated from
production to reception, and it is the only honest scene for a canDo ending "and
follow the answer".

**Fallback if a reviewer rejects it:** the learner's own question stalls mid-way
and the reply still runs long. The rest of the design is unaffected.

### 6.2 The scene is in Lyon, and the prompt says Berri-UQAM

**This is a departure from the prompt, taken on the collation's authority, and it
is reported as the prompt requires.**

The prompt's mission table names Berri-UQAM, Montreal. Collation C3, confirmed by
Paul, settles the band as **France-primary with Quebec as at most ONE non-scored
card**, and §7.3 warns that eight authors with eight registers is how this band
embarrasses itself. A Montreal scene in front of 104 France-standard rows, a
France-standard scenario and a France-standard quiz is exactly that
inconsistency, and a Montreal passer-by giving France-standard directions is
false in a way the learner can feel.

The scene is **Lyon Part-Dieu**. Quebec is where the policy puts it: one card on
`s07-mode`, two recognition rows in `quebec-et-francophonie` carrying no
`voiceflash`, and nothing on either is ever the answer to a scored question. The
apply script and the test both prove that by walking every option of every scored
surface against the form list, rather than by asserting it in prose.

If the supervisor wants Montreal back, it is a one-section change and nothing
else in the build moves.

---

## §7. Ownership boundaries, and what was NOT taken

| boundary | owner | what this unit did |
|---|---|---|
| The repair move | **a2.07** | Cited six itemIds, authored ZERO rows, named a2.07 by unit id and a1.30.l2 as where it is assessed |
| The register / politeness ladder | **a2.29** | Taught two openings as two SHAPES. No escalation, no softening as a system. `pourriez-vous` appears nowhere. |
| Money, the till, change | **a2.26** | The ticket price is stated once and nothing is counted or paid. A guard bans `ça fait combien`, `la monnaie` and `je vous rends`. |
| The preposition system | **a2.04**, a1.21, a1.22 | Named, not retaught. Only `en` against `à` with transport MODES was taken, one card, rule quoted from a corpus row. |
| Job-title feminines | **a2.30** | `le contrôleur` is imported as published. No `la contrôleuse` was minted. |
| `y` and `en` as pronouns | **a2.25**, unbuilt | Banned outright, guarded by pronoun SHAPES rather than bare letters, because the preposition `en` is legal and is a whole card. |
| The imperative mood | **nobody** (Paul, option B) | The forms are used whole. The words "imperative" and "impératif", the vous-form contrast and any `tu` form are banned in every surface. |

**The counter script was NOT taken.** The design proposed a2.27 own it and a2.29
cite it. The collation did not grant that, so this unit keeps the guichet as a
setting because its canDo says "buy a ticket" and teaches no general counter
script and no register.

**`je voudrais` appears once**, as unanalysed lexis, on one card, with one line
saying it is a softer `je veux`.

---

## §8. Withdrawals, and the one that did not fit

### 8.1 Two prior instructions are named and NOT cited

The `deckTranche` guard caught them: `fr.a1.deplacements.245`
(*Tournez à gauche après le pont.*) and `.246` (*Allez tout droit, puis tournez à
droite.*) carry `{sentence, review}` and **no `flashcard`**, so a tranche release
would have produced nothing at all.

**This build does not widen another lesson's drill arrays to suit itself**, which
is the line a2.26 drew when the same guard dropped three of its imports. They
stay named in the corpus file's `PRIOR_INSTRUCTIONS` as prior exposure and are
left exactly where they are. That is the pattern a2.07 set for the six generic
repair rows it found already published: name them, leave them, do not cite them.

### 8.2 a1.03 went to v7, and withdrawal did NOT fit

The merge carried 34 rows into four themes this unit does not own, and it moved
**eight** of a1.03's printed ending counts:

```
-e    912 -> 919      -tion  36 -> 37      -ment  20 -> 21      -on  144 -> 145
-in    45 ->  46      -ent   29 -> 30      -ard   17 ->  18     -ance 10 ->  11
```

**Not one accuracy moved** (100/100 x4, 70/70, 60/60, 98/98, 97/97), so every
rule a1.03 teaches is exactly as true as it was and only the counters changed.

Measured through the real `endingPopulation`
(`ealch-admin/scripts/_a227_genre_impact.ts`, kept as evidence beside
`_pays_genre_impact.ts` and `_nourriture_genre_impact.ts`): of the 25 rows this
build put into a1.03's population, **ZERO were authored and all 25 were CARRIED
imports.** That is a1.23's finding for the fourth time, and it is why an
authored-only guard cannot see this class of drift.

**Withdrawal was considered and rejected, and the contrast with a2.26 is the
point.** a2.26 pruned `le billet`, `une réduction` and `la promotion` because
they were tranche-only releases it did not need. Every one of a2.27's 25 is a
landmark named inside a direction chain (`la pharmacie`, `la poste`, `la banque`,
`le pont`, `le parc`, `la place`), a station noun the counter scenario needs
(`la gare`, `le quai`, `le guichet`, `un aller-retour`), or a row in this unit's
OWN theme (`la correspondance`, `le contrôleur`, `la ligne`). Pruning any of them
renders a card blank in a transport lesson. Invariants §5's "withdraw rather than
argue" applies where it fits, and here it does not.

`genre-endings.ts` was re-measured, `genre-lesson.ts` went to **v7** with the
reasoning in-source, and a1.03 was re-applied to Postgres and merged into the
seed. **4,277 of 4,277 tests pass.**

---

## §9. The quiz, and the inversion

```
listenChoose  10   the chains, destinations and orderings
mcq            8   announcements, the mode preposition, ordinals, register
typeIn         7   the ask side, and the targeted repair
errorSpot      4   en/à with modes; over-wide repairs
speak          1   one SHORT chain repeated back
```

The band's shipped maximum for `listenChoose` is **3 of 30**, across four
consecutive lessons. This unit ships **10**, and both justifications hold
independently:

1. The weight has to sit on reception, because the learner's turn is trivial and
   the reply is the exam. That is what makes this unit different from the other
   seven.
2. `listenChoose` is the only genuinely audio-only surface in the product.
   `ListenChooseCard` hides its `opts` behind `heard`. So the inversion would
   have survived even if `hideLines` had never landed.

**All four listenChoose rules were applied and are asserted:**

- Every one of the ten carries `say` explicitly, so the card never falls back to
  speaking `opts[correct]`. a1.25 shipped that defect and spoke English at a
  listening exercise.
- Every distractor occurs inside the `say` line, or is a near-miss the clip makes
  audible: the RIGHT ordinal with the WRONG side, `avant` where `après` was said.
  That single rule is most of what makes an item feel like the exam.
- Every option is five words or fewer, guarded in both the apply script and the
  test, because `ListenChooseCard` is the tallest card in the quiz.
- The replay divergence is **said** rather than papered over. Round 1's `say`
  line tells the learner the real exam plays it once. No `maxPlays` was authored:
  it is resolved by `lessonAudio.logic.ts` and consumed by no component.

Round 5 is **"When it goes wrong"**, deliberately echoing a1.30.l2's
`x12-repair`: four items on a2.07's rungs and two on the state this unit adds.

---

## §10. What this unit adds that a2.07's move does not cover

a2.07's ladder answers *"I understood nothing."* In a restaurant that is the real
state: you either caught "with or without cheese" or you did not.

Here the failure is **partial**. You routinely catch three moves of four, and
there is a correct thing to say:

```
fr.a2.transports-quotidiens.231   C'est la deuxième ou la troisième ?
fr.a2.transports-quotidiens.232   À gauche ou à droite, pardon ?
fr.a2.transports-quotidiens.233   Après le pont ou avant ?
fr.a2.transports-quotidiens.234   C'est quelle rue, pardon ?
```

These are not repair formulae. They are direction questions built out of this
unit's own ordinal and joint content, and they are authored in this unit's own
theme. The teaching is the contrast: a targeted question gets you four words
back, a generic one gets you fourteen at the speed that beat you the first time.
That is a2.07's own principle (reach for the lowest rung that will actually fix
the problem) applied below its lowest rung.

The apply script and the test both prove by FOLD that none of the four duplicates
one of a2.07's six.

---

## §11. Still open

**Device checks this build could not run.** None of them gates the lesson; all
three are visual.

1. **Ten `listenChoose` in one quiz has never been rendered on a Pixel 6.** The
   card's own source calls it the tallest in the quiz, and the band has had four
   width defects. Options are guarded at five words or fewer, which is the
   mitigation. **Check round 1 before anyone publishes.**
2. **French spaced punctuation.** A spaced terminal mark has made a scene bubble
   lose its last word while the gloss translated it in full. Measured on the
   merged lesson: **54 authored strings end in a spaced mark, all of them `?`
   and none of them `!`**, and none is a `scene` bubble. The exposure is in
   scenario turns, card `fr` values and quiz options instead, which is a
   different and less-tested surface than the one the defect was found on.
   Longest is `C'est la deuxième ou la troisième ?` at 34 characters. If it
   recurs, the fix is a flex on a wrapper View and never on the TX.
3. **The `TrapAudioStep` string** (§4). Already live in 41 shipped sections, so
   this is a check on somebody else's defect rather than on this build's.

**Not this build's, deliberately, and recorded so it is not read as an oversight:**

- `'transport'` is still in `SEED_CUT.themes`. One band-level diff, once, after
  at least one unit is authored. That condition is now met.
- The a2.13 amendment is specified in `05-A2-13-AMENDMENT-SPEC.md` and still not
  applied. It touches shipped content and needs its own supervised commit.
- Nothing was published. `content:parity` is green; `sons.09.l1` is still
  seed-only, so `content:publish` still needs `content:masterclass` first.

---

## §12. Hand-off

**To a2.35 (Bilan A2), which names a2.27 in its `prereqUnitIds`.**
Everything liftable was authored to be lifted, and the test asserts it: no
`listening` line and no `scenario` turn refers to this lesson's framing.

- **A reception bank.** 16 station announcements, a genre that did not exist
  anywhere in 48,325 rows and that DELF A2's CO syllabus names by name. They
  serve a2.29's hotel PA and a2.31 as much as this unit.
- **A situation script.** The eleven-turn guichet, `vous` throughout, `alts` and
  `userEn` on every turn, and one turn whose correct move is a repair.
- **A chain bank.** 56 direction chains at one, two, three and four moves, plus
  ten ordinal rows, all reusable as CO items with no lesson context.

**To a2.32 (Technologie, seq 31).** We do the same thing with the direction and
instruction verbs: use them whole, name the mood nowhere. **Neither unit cites
the other**, because neither owns it. Both build reports should file the form as
used-untaught so the B1 slot Paul noted has evidence behind it when somebody
opens it. This report files it here.

**To a2.29 (Hôtel, seq 28).** The counter script was NOT taken by this unit, so
the hotel desk is unencumbered. `pourriez-vous` is untouched and waiting.

**To the whole band.** Three findings worth copying:

1. **C-1 is real and it is one item longer than the collation's correction says:
   the fold also kills capitals and word division.** Fold each pair, not just the
   famous ones.
2. **A carry moves a population even when an authoring does not**, and this is
   the fourth time. Run the impact probe BEFORE the merge, not after the suite
   goes red.
3. **`table` is still at zero after three units of this band.** Two prompts have
   now gated a section on "if the previous unit shipped one". Nobody has. Either
   doctrine §B.8 should say `tapTable`, or somebody should decide to build the
   first one on purpose rather than by inheritance.

---

*This file is `.md` and therefore gitignored: `git add -f` to track it.*
