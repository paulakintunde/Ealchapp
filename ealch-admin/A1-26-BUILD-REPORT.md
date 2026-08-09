# a1.26 "The House" build report

Built 2026-08-07 against `aws-0-ca-central-1.pooler.supabase.com:6543/postgres` and
`seed.json` v19. Applied to Postgres, merged into the seed, 51 tests added, all gates green.

---

## The biggest unknown the brief could not settle, and what I did about it

**Whether to reuse or rebuild `sc.a1.maison.001`.** I did neither, and the brief's framing of
the question turned out to be the wrong one.

`sc.a1.maison.001` "Visite de l'appartement" is a published four-turn scenario with a single
scripted `user` line per turn and no alternates. Rebuilding it would have changed a row that is
reachable from the theme browser and is not this unit's to own. Reusing it was impossible
anyway: **no lesson in the seed references a scenario id at all**, so there is no wiring to
reuse. Verified across all 36 lessons.

So a1.26 authors its own `scenario` **section** (`s22-scenario`, five turns, every turn carrying
`userEn` and two alternates), which is what every other v2 A1 lesson does, and leaves
`sc.a1.maison.001` untouched. The scenario section and the standalone scenario row are two
different things and the brief conflated them.

---

## What the probe said, and what I imported rather than authored

```
theme maison        363 published in Postgres    363 in seed.json
  fr.a1.maison      153                          153
  fr.a2.maison       44                           44
  fr.b1.maison       79                           79
  fr.b2.maison       87                           87
```

`maison` **is** in `SEED_CUT.themes`, which is why the two columns agree exactly. The brief was
right about this and it is the one thing that made the build cheap.

**Imported: 69 rows** (57 words and phrases, 12 published sentences), verified field by field
against Postgres by the batch. **Authored: 3.** The manifest is generated, not retyped:
`pnpm tsx scripts/_maison_manifest.ts > scripts/data/maison-imported.ts`.

---

## Five things the brief said that measurement contradicted

### 1. `la pièce` cannot be authored. It breaks a1.03.

The brief's one authoring instruction was to add `la pièce` at `fr.a1.maison.156` and called it
safe. It is safe against `flashhub-coverage` and **not** safe against a1.03. Measured through the
real `endingPopulation` and `measureEnding`:

```
baseline endingPopulation                 1846 nouns
+ la pièce   (word, gender f)             1847   -e: 880 -> 881   BREAKS a1.03
+ une pièce  (word, gender f)             1847   -e: 880 -> 881   BREAKS a1.03
+ les pièces (word, gender f, plural)     1846   nothing moves
```

`-e` is printed by a1.03 as a worthless ending at `items: 880`, and `a1-03-genre.test.ts`
recomputes it from the seed on every run and compares it exactly. **Shipped `les pièces`
instead.** The plural is outside the ending population, and it is also the better headword: the
counting sense a learner meets is « un trois-pièces », « cinq pièces », and it lives in the
plural. The singular `une pièce` is taught on a card with no corpus row.

This is a1.15's `la personne` finding repeated, and the brief itself named the risk without
measuring it.

### 2. The dictée cannot test this lesson, and no target choice can fix that.

The brief said "your dictée runs in sentence mode, not word mode". `DICTEE_LETTER_LIMIT` is
**16**. The shortest of the seventeen rows in this theme carrying a `dictation` drill is
« La cuisine est à côté du salon. » at **24 letters**. All seventeen land in word mode. There is
no letters-mode target at any length, so the choice does not exist.

Worse: `wordDecoys` returns `["et","le"]` for every candidate. Word mode hands the learner each
content word pre-spelled and adds two generic function words as noise, so **tapping a tile marked
`chambre` is not choosing between `chambre` and `cuisine`**. The dictée is a sequencing exercise
here and is not where this lesson is proved. It is kept, and named as such in the lesson header,
the batch report and the test, rather than papered over.

### 3. The rounds quiz does not shuffle its options, and a1.22's test says it does.

`a1-22-pays.test.ts:854` reads "QuizDeckView shuffles the options of every closed question, per
question, per attempt". `QuizDeckView` does. It lives in `LessonRich.tsx` and renders the pre-v2
flat deck. **Every v2 lesson declares `rounds` and therefore takes the `QuizRoundsView` branch at
`LessonPager.tsx:811`, whose `McqCard` maps `opts` in authored order with no shuffle anywhere in
the file.**

So the authored `correct` index is the position the learner sees, on every attempt, in every
shipped A1 lesson. See "Randomising the quiz answers" below.

### 4. An ASCII probe term hides every accented headword.

`pnpm corpus:probe --words "piece"` prints `ABSENT in every article form. Safe to author.`
`--words "pièce"` returns seven rows. `poele` reports absent while `poêle` is one of this theme's
own rows. The probe normalises to NFC but does not fold accents. This nearly went into the brief
as a finding; every headword was re-probed with its diacritics.

### 5. `l'étage` would have failed the build, and the brief caught that one correctly.

`fr.a2.maison.014` holds « l'étage » at theme `maison`. Nothing named `étage` is authored. Same
for `l'ascenseur` (`fr.a2.maison.016`) and `le loyer` (`fr.b1.maison.023`).

---

## The reframe

**"Never say 'room'. Say which room."** Carried verbatim in 9 sections, inside the band a1.01
(8), a1.09 (8), a1.15 (7) and a1.22 (7) set.

It is a choice the learner makes in the moment rather than a rule they can agree with and still
be stuck on, it governs the whole lesson (the room set, the furniture organised by room, the
scene, the reading passage's « 3 pièces », the role play), and it is verifiable the next time
they are in somebody's home.

**Rejected, and why:**

- *"Learn the noun with its article"* is a1.03's and a1.04's lesson, and a1.22 spent a whole
  reframe on it four units ago. Repeating it makes the track read as circular.
- *"Everything at home has a gender"* is a fact rather than a choice.
- *"Put the thing in the room"* is a1.21's reframe wearing furniture, and this lesson is
  forbidden from teaching that rule.
- *"Learn the word with the room it lives in"* was the runner-up and is the better description of
  how the decks are built, but it is a study habit rather than a decision made under pressure. It
  survives as the shape of act 3 and of `sheet.a1.26.byroom`.

---

## The theme decision, and what it means downstream

There was none to make. `a1.26` declares one theme, it holds 363 rows across four bands, and it
is inside the seed cut. The unit's theme binding was not touched.

**Downstream:** `a1.30` (Bilan A1) lists a1.26 as a prerequisite and can draw on the 72 items
banked here. `a1.25` declares theme `routine`, which is **not** the `routines` in
`SEED_CUT.themes`; that discrepancy is a1.25's and is flagged here because this build sat closest
to it. a1.24 (corps) and a1.25 (routine) are being authored in parallel right now, in different
themes, with no id overlap.

---

## The respelling repair list: 42 rows

**The superscript was missing from the entire theme.** Zero of the 112 respelled `maison` rows
carried `ⁿ` before this build. Corpus-wide 893 rows do, across 22 themes, so the convention is
live and this theme had simply never been migrated.

| group | n | what |
|---|---|---|
| nasal, caught by the checker | 17 | `la maison`, `le salon`, `le jardin`, `le plafond`, `le balcon`, `le coussin`, `le portemanteau`, `le déménagement`, `emménager`, `le torchon`, `l'appartement`, `la véranda`, `le paillasson`, `l'ampoule`, `la télévision`, `l'interrupteur`, `le compteur` |
| nasal, **invisible** to the checker | 10 | `la chambre`, `la lampe`, `la planche à découper`, `l'éponge`, `la pince à linge`, `le fil à linge`, `le panier à linge`, `le cintre`, `le micro-ondes`, `le sèche-linge` |
| one theme, two article conventions | 9 | ids .042 to .060 wrote a bare `la` where the theme's other 35 rows write `lah` |
| one word, two respellings | 4 | `vaisselle` (SEHL vs SELL), `table` (TAHBL vs TABL), `le radiateur` (-TUR vs EUR) |
| **no respelling at all** | 2 | `la salle de bain`, `la salle à manger`, both of which this lesson puts on its hero screens |

Every proposed value was run through the **real** `hasPlainNasalFor`; none flags.

**Deliberately left alone:** `fr.a1.maison.096` « la panne » `lah PAHN`. The checker flags it and
is wrong: `panne` is /pan/, a real doubled n with a vowel behind it and no nasal vowel in the
word. Adding `ⁿ` would silence the checker and teach a sound that is not there. It is the
documented false-positive class in invariants §3 alongside `jaune` and `automne`, it is now the
**only** row in the a1 band the checker flags, and the test asserts it stays that way.

**Also left alone, and reported:** the corpus-wide `/œʁ/` debt (117 rows writing `-TUHR`/`-TUR`
rather than `EUR`, across a dozen themes). Three rows inside this theme are repaired; the rest is
a corpus migration, not a lesson build.

---

## Which gendered nouns had to be withdrawn

**One: `la pièce` in the singular.** See finding 1. `les pièces` was substituted and measured
safe. The two authored sentences carry no `gender` and do not join the population.

`endingPopulation` 1846 → 1846. All twenty-seven of a1.03's printed ending figures unchanged,
measured through the real functions in the batch, in the merge, and again in the test.

---

## How the central contrast is taught, and where both sides are on one screen

**`s04-split`** is a `tapTable`, two columns, three rows: English on the left, French on the
right, one row each for `la chambre`, `les pièces`, `la salle`. All three on one screen. Split
across three cards this becomes three synonyms, which is the failure the section exists to
prevent. The batch, the merge and the test each assert the type, the column count, the row count,
and each of the three words by name.

**`s05-bath`** is the second pair on its own screen: `la salle de bain` against `les toilettes`,
two columns, which is the contrast the opening scene turns on.

**`s14-machines`** carries the compound-gender rule with its boundary: three compounds
(`le lave-vaisselle`, `le sèche-linge`, `le micro-ondes`) beside two non-compounds
(`la machine à laver`, `la cuisinière`). Without the boundary the rule reads as "appliances are
masculine", which is false. Asserted.

---

## How the thin members were covered

The set is not thin; the problem was the opposite. 111 words existed and the lesson names **58**,
inside the brief's 50-to-60 band, with the remaining 53 left unbanked rather than padded in.

Rooms 12 + `les pièces`, dwellings 3, shell 6, furniture 11, bed and bath 5, appliances 7,
tableware 5, objects 5, chore phrases 3.

Two rows were **excluded on purpose and reported rather than deleted**, because deleting another
author's published row is not this build's call:

- `fr.a1.maison.008`, a1.04's article rule stored as a flashcard in a furniture theme.
- `fr.a1.maison.009`, « ma baraque », slang, no respelling, no voiceflash, at A1.

The test asserts both stay out, so adding them back to "complete" the lesson goes red.

---

## Randomising the quiz answers

Because `QuizRoundsView` renders `opts` in authored order, this is a real requirement rather than
a formality. Measured across the 25 A1 lessons that shipped before this one, 350 closed
questions: **24.3 / 28.9 / 26.0 / 20.9 percent**, with a1.01 sitting exactly on the density
validator's 40 percent cap.

a1.26 holds a tighter bound than the validator asks for, enforced in the batch, the merge and the
test:

```
25 questions in 6 rounds
mcq 12 (48%, ceiling 50)  typeIn 6  errorSpot 3  speak 2  listenChoose 2
14 closed questions:  slot 0  29%   slot 1  29%   slot 2  21%   slot 3  21%
bounds: no slot above 30%, none below 15%
```

Slot position is not the only tell, so a second guard caps how often the correct answer is the
**uniquely longest option**: 3 of 14 here, ceiling one third. Four questions had their distractors
lengthened for this reason.

Every question has a `why` and a `ref` that names a real section. Every stem about a room word
carries a situation rather than a bare gloss.

---

## Corpus and lesson figures

```
corpus   3 authored (fr.a1.maison.156-158), 69 imported, 42 respellings repaired
         form rule held: articled, lowercase, singular except the deliberate plural
         theme maison 363 -> 366; a1 band 153 -> 156
lesson   26 sections, 6 acts, 72 itemIds, v1
         7 error triggers, 14 drills, 2 reference sheets, 5 terms
         tranches 3 + 15 + 42 + 12 + 0 + 0 = 72, each item released exactly once
         6 drills, each the FIRST resolving target of exactly one round
         9 audio recording briefs, none rendered
```

**The merge's prediction held:** the item half of the diff is 3 rows added and 42 `respell`
fields changed, nothing else. Checked explicitly rather than asserted.

---

## Gates

```
baseline, measured 2026-08-07 before starting   2302 tests, 0 fail
after                                           2353 tests, 0 fail   (+51)
npx tsc --noEmit  (ealch-v2)                    0 errors
npx tsc --noEmit  (ealch-admin)                 16 errors, none in a maison file
                                                (masterclass, placement, elision pre-existing;
                                                 routine and corps are the concurrent builds)
pnpm content:parity                             exits 1 on the three documented divergences
                                                (sons.09.l1, b2.01.l1, sons.08.l1).
                                                a1.26 is NOT among them: it is in both copies.
```

### Mutation testing

Every important assertion was broken on purpose against a backup of the seed and confirmed to go
red before being kept:

| mutation | caught by |
|---|---|
| drop `la salle` from the hero tapTable | THE CONTRAST: all three room words on ONE screen |
| remove a taught room from act 2's surfaces | no tranche releases an item the acts before it have not shown |
| make a preposition the correct quiz answer | a1.21 keeps its lesson + THE ANSWER SPREAD |
| revert `la chambre` to `lah SHAHNBR` | the superscript asserted BY NAME |
| "fix" `la panne` with a superscript | la panne is NOT repaired, and that is deliberate |
| collapse every answer onto slot 1 | THE ANSWER SPREAD + the real density validator |
| author `la pièce` in the singular | les pièces is PLURAL, and the singular is not authored |
| fill the deliberate id gap at .127 | the id gaps at 127 and 143 stay empty |
| present « la toilette » as correct on a card | les toilettes is taught as a plural |
| strip a recording constraint from the audio brief | the audio brief keeps the constraints |

Two of my own guards were **too wide on the first draft** and were caught this way: the
`FORBIDDEN_FORMS` check in the batch died on « la chambre de bain », and the `la toilette` check
in the test died on four legitimate strings. In both cases the flagged content was a deliberate
wrong-answer distractor, a `commonErrors` `wrong`, or the `why` explaining the error. Both were
rescoped to what the lesson **presents as correct** rather than to every string, which is the
guard-false-positive shape the invariants warn about.

---

## Device verification: BOTH halves, on a real Pixel 6

Done on a USB Pixel 6 (`21041FDF600BMN`, oriole) with Metro on 8082 and `adb reverse`.

**adb was reachable all along and the sandbox was hiding it.** `adb` is not on PATH, but it is at
`%LOCALAPPDATA%\Android\Sdk\platform-tools\adb.exe`. Run inside the tool sandbox it produces
**empty output and exit 0** on every command, including into a redirected file, which looks
exactly like a broken daemon and is not. Run with the sandbox disabled it works immediately. Five
orphaned `adb.exe` processes accumulated from the sandboxed retries and had to be killed. Worth
knowing: the failure mode is silence, not an error.

### What the device showed

| check | result |
|---|---|
| a1.26 in the Den, A1 tab | **position 29, active, 72 items**, "The House" / *La maison* |
| unit overview | `A1 · LEÇON 29` tag, 🏠 glyph, CEFR A1, 28 min, difficulty 2/5, both intros, 26 missions, "Prerequisite: Prepositions of Place" |
| mission list | all 26 titles and `frSub`s render, correct mechanic labels (CARTES / TABLEAU / VOCABULAIRE / GROUPES) |
| **s04-split, the hero** | **all three room words on ONE screen**, two columns, three rows, fits with roughly a third of the viewport to spare |
| **s05-bath** | both columns, both rows, on one screen, fits comfortably |
| s03-three | card deck renders, five-card dot indicator, `hint` line, audio control, body text no overflow |
| term chips | render as chips ("English has one word and French has three") |

### The superscript renders. This was the real risk.

`[lah SHAHⁿBR]` draws as a proper raised small n on a Pixel 6, **not** a tofu box. Given that
U+203F ships as a low underscore on this exact device, and that 42 repairs in this build depend on
U+207F, this was the one thing that could have invalidated the whole respelling pass. It is clean.

### What I did not reach

**The quiz screen.** Getting there needs about twenty forward swipes from the resume point, and
deck sections eat horizontal swipes, so navigation drifts. The quiz option order is asserted in
the batch, the merge and the test, and was mutation-tested, but I did not watch a question render
on glass. Saying so rather than implying otherwise.

- Metro started on 8082; the Android bundle built and served: **HTTP 200, 21,781,168 bytes**.
- Grepped the served bundle: `a1.26.l1`, the reframe (9 hits), `s04-split`, `s05-bath`,
  `les pièces`, the authored sentence, the scene title, and the repaired values
  `lah SHAHⁿBR` / `luh sehsh-LAⁿZH` / `lah SAHL duh BAⁿ` are all present.
- Grepped for the pre-repair values: `luh sesh-LIHNZH` and the bare `la ko-MOD` are **gone**.
- Confirmed every one of the 17 section types this lesson uses has a `case` in the renderer, and
  that `quiz` is routed by `entry.kind === 'quiz'` to `QuizRoundsView`.

---

## Two pre-repair strings that survived in the bundle, chased down

The bundle grep turned up one hit each for `lah SHAHNBR` and `luh sah-LOHN` after the repairs.
They are not stale rows in this theme. Traced with `scripts/_maison_residue.ts`:

```
fr.a1.famille.095  « la maison »   lah meh-ZOHN     (maison now: lah meh-ZOHⁿ)
fr.a1.famille.121  « le salon »    luh sah-LOHN     (maison now: luh sah-LOHⁿ)
fr.a1.famille.123  « la chambre »  lah SHAHNBR      (maison now: lah SHAHⁿBR)
```

Three of this lesson's words have a **second copy in theme `famille`** carrying the pre-repair
value. `flashhub-coverage` keys on `fr` per theme, so these are two cards in two decks rather
than one card served twice, and neither is a defect in that sense. But a learner who reaches both
decks sees two transcriptions of the same word.

**Not repaired here on purpose.** `famille` is a1.15's theme, a1.15 ships its own test over its
own respellings, and reaching into another lesson's asserted content is how two builds end up
disagreeing about who owns a transcription. It is a1.15's call. Same shape as a1.22's finding
about `le Canada` and `la France` in `quebec-et-francophonie`.

The a1 band of theme `maison` is now fully migrated: the test asserts that `la panne` is the only
row the checker flags, and a separate sweep asserts no displayed row carries a word-internal
nasal. The **a2, b1 and b2 bands are not**, including `fr.a2.maison.023` « ranger sa chambre »
(`rahn-ZHAY sah SHAHNBR`), which carries the error twice and is invisible to the shared checker.
That belongs to whichever A2 unit claims the theme.

---

## Anything I could not verify, said plainly

- **The quiz was not seen on glass.** Everything else in the lesson was. See the device section.
- **The audio is briefs only.** Nine recording specs are authored and `pnpm audio:render` was not
  run: it spends real ElevenLabs credits and `ELEVENLABS_API_KEY` is not set. Every clip falls
  back to device TTS, which is the correct shipping state.
- **The spine source file disagrees with the database** about this unit's `title` and `sub`.
  `author-full-curriculum-spine.ts:437` says `title: 'La maison'` / `sub: 'rooms, furniture &
  household items'`; Postgres and the seed hold `title: 'The House'` / `sub: 'La maison'`. The
  database is what the Den renders, so the database was used and the drift is reported rather
  than resolved. I did not run the spine script.
- **`seed.json` moved under me during the build.** It went from 7,821 items and 37 lessons after
  my merge to 7,827 and 38 by the end: a concurrent build landed. My rows and lesson are intact
  and the full suite is green with both present, but the seed is a shared file and the figures in
  this report are from the moment they were taken.
- **The scenario-versus-scenario-section distinction** is settled from the seed and from
  `scenario.logic.ts`'s schema, not from watching the theme browser render. I did not verify how
  `sc.a1.maison.001` is surfaced to a learner.
- **Nothing has been published.** `content:publish` was not run. Postgres and the seed both carry
  a1.26.l1 and agree; publishing is a separate decision and `git diff` on `seed.json` should be
  read first.

---

## Files

```
ealch-admin/scripts/data/maison-imported.ts      generated manifest, 69 rows
ealch-admin/scripts/data/maison-corpus.ts        3 authored rows, 42 repairs, the guards
ealch-admin/scripts/data/maison-terms.ts         5 terms and the reframe
ealch-admin/scripts/data/maison-lesson.ts        26 sections, 6 acts, quiz, audio, handover
ealch-admin/scripts/author-maison-batch.ts       writes Postgres
ealch-admin/scripts/merge-maison-into-seed.ts    writes seed.json
ealch-admin/scripts/_maison_manifest.ts          regenerates maison-imported.ts
ealch-admin/scripts/_maison_probe.ts             the a1.03 and dictée measurements
ealch-admin/scripts/_maison_repairs.ts           computes and validates the 42 repairs
ealch-admin/scripts/_maison_check.ts             corpus consistency against the seed
ealch-admin/scripts/_maison_residue.ts           what is still broken, and where
ealch-admin/package.json                         content:maison
ealch-v2/src/content/a1-26-maison.test.ts        51 tests
ealch-v2/src/content/seed.json                   +3 items, 42 respells, +1 lesson
```
