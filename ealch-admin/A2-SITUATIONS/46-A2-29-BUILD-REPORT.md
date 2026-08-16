# a2.29 « À l'hôtel » — build report

Trail seq 28. Fifth of the eight A2 situational units, and the one a2.30, a2.31
and a2.32 cite for the register ladder. Built 2026-08-16 against branch
`feat/sons-course`, seed v50, Postgres `ogbothupjcivwruesgsu`.

**Shipped to Postgres and merged into `seed.json`. Not published, not
snapshotted.**

| | |
|---|---|
| Lesson | `a2.29.l1`, v1, 25 sections, 25 missions, six acts, one quiz |
| Corpus | 59 authored rows, `hebergement` `.074`–`.132`, contiguous |
| Theme | `hebergement` 312 → **371** published; seed 0 → **77** |
| Seed | 9,876 → **9,959** items; 69 → **70** lessons; version left at 50 |
| Tests | 4,319 → **4,389**, 0 fail. `tsc --noEmit` 0 in both packages |
| Neighbour moved | `a1.03.l1` v8 → **v9**, applied to Postgres and the seed |

---

## 1. THE DELIVERABLE THE REST OF THE BAND DEPENDS ON

### The three rung names. FROZEN. Quote them verbatim.

```
Rung 1   Ask once, softly.
Rung 2   Say it again, without the person.
Rung 3   Ask for the person who can fix it.
```

### The rung-to-itemId table, ready to paste

```ts
// a2.29's register ladder. Reuse these by itemId; author no rung lines of your own.
const RUNG_1 = 'Ask once, softly.';
const RUNG_2 = 'Say it again, without the person.';
const RUNG_3 = 'Ask for the person who can fix it.';

const LADDER = {
  rung1: {
    name: RUNG_1,
    request:  ['fr.a2.hebergement.074', 'fr.a2.hebergement.075', 'fr.a2.hebergement.078',
               'fr.a2.hebergement.079', 'fr.a2.hebergement.080'],
    fault:    ['fr.a2.hebergement.076', 'fr.a2.hebergement.081'],
    opener:   ['fr.a2.hebergement.077'],
  },
  rung2: {
    name: RUNG_2,
    request:  ['fr.a2.hebergement.083', 'fr.a2.hebergement.084', 'fr.a2.hebergement.088'],
    fault:    ['fr.a2.hebergement.085', 'fr.a2.hebergement.087', 'fr.a2.hebergement.089'],
    restate:  ['fr.a2.hebergement.082', 'fr.a2.hebergement.086', 'fr.a2.hebergement.090'],
    brake:    ['fr.a2.hebergement.132'],
  },
  rung3: {
    name: RUNG_3,
    escalate: ['fr.a2.hebergement.091', 'fr.a2.hebergement.092', 'fr.a2.hebergement.093',
               'fr.a2.hebergement.094', 'fr.a2.hebergement.095'],
  },
};

// The NINE the table, the tapTable and the practice section all resolve to,
// row by row, three rungs across:
const NINE = [
  ['fr.a2.hebergement.074', 'fr.a2.hebergement.084', 'fr.a2.hebergement.091'],
  ['fr.a2.hebergement.076', 'fr.a2.hebergement.085', 'fr.a2.hebergement.092'],
  ['fr.a2.hebergement.078', 'fr.a2.hebergement.087', 'fr.a2.hebergement.093'],
];
```

### The citation contract

- Quote the three rung names **verbatim**. A paraphrase is a second ladder.
- Reuse the rung rows **by itemId**. Author no rung lines of your own.
- You may add **your own column**, your own move, filled with your own vocabulary.
- You may **not** rename a rung, add a fourth, or reorder them.

`a2-29-hotel.test.ts` asserts all three names as exact strings, in order, in one
section, and `author-hotel-batch.ts` pins them against hardcoded literals.

---

## 2. THE a2.29 / a2.32 BOUNDARY, in the words the prompt required

> **a2.29 owns the impersonal complaint frame and the escalation ladder. a2.32
> owns the diagnostic vocabulary of a malfunction (`ne s'allume pas`, `ça
> bugue`, `redémarrer`). a2.29 describes a room problem: something is missing,
> broken or noisy. It authors no device-fault vocabulary.**

Enforced by `A2_32_RESERVED` in the batch and by a test. **No forward citation:**
a2.30, a2.31 and a2.32 are named nowhere in this lesson, asserted by
`ok(!/\ba2\.3[012]\b/.test(ALL_TEXT))`.

`ne fonctionne pas` is an **import**, measured at 14 published rows. Both units
import it, neither authors the paradigm, and a `MUST_NOT_FIRE` test keeps the
a2.32 guard from ever growing to cover it.

---

## 3. THE a2.13 AMENDMENT WAS NOT APPLIED WHEN THIS SHIPPED

**a2.29 is live against an unamended a2.13, and the amendment is still owed.**

Paul accepted option A on 2026-08-15. `05-A2-13-AMENDMENT-SPEC.md` specifies all
four strings. **Nothing has been applied**: `a2.13.l1` is still at its shipped
body in Postgres and in the seed, and its four boundary strings still tell the
learner they get nothing more from that family at this level — while a2.29 now
teaches five softeners, two of them from exactly that family.

This build did not write it, did not apply it and did not publish it, as
instructed. It is a supervised commit that needs a publish and an OTA snapshot.

**What binds a2.29 and what does not.** `a2-13-modaux.test.ts:249`'s
`FORBIDDEN_CONDITIONAL` is asserted over **a2.13's own strings**, not over the
seed, so a2.29 carries `pourriez` and `aimerais` freely and the whole suite is
green. What a2.29 may not do is name the family or the tense, and it does not:
the jargon guard bans `conditional`, `conditionnel` and `tense`, over a
`display()` walk that includes `intro`, `overview` and every cardDeck `sub`.

---

## 4. THE BLOCKING SEQUENCE, verified rather than assumed

| step | what | found |
|---|---|---|
| 1 | corpus probe | `hebergement` **312 published / 0 in seed**, `fr.a2.hebergement` next free `.074` |
| 2 | theme re-map | **already landed** in the spine script, in Postgres and in the seed. This build changed nothing and `spine-drift.test.ts` needed nothing |
| 3 | `listening.hideLines` | **landed.** `schema.ts:676`, validated at `:2474`. The prompt says "Measured 2026-08-15: it returns nothing" — that is now false |
| 4 | device check | **RUN, both exposures PASS, neither fallback taken.** See §5 |
| 5 | Paul's item 1 | answered 2026-08-15, option A. Full ladder built |
| 6 | a2.07 merged | six frozen repair ids published, read back and cited |

---

## 5. BAND BLOCKING STEP 4: RUN ON A PIXEL 6, BOTH EXPOSURES PASS

A throwaway probe lesson carrying **two `scenario` sections and one `table`
section** was rendered on a Pixel 6 (`21041FDF600BMN`) over Metro on 8082, then
removed. Both fallbacks were **declined**.

**Repeated `scenario`.** Measured first: 0 of 69 shipped lessons repeat the type.
The second scenario draws as its own mission with its own setting, title,
opening turn and Speak / Show me controls, and nothing bleeds from the first.
`MissionSection.tsx:560` returns a fresh `<ScenarioView>` per section and nothing
in that path is keyed by type. **Re-verified in the shipped lesson**: missions 18
and 19 both render.

**`table` in a mission.** It draws — and it cannot ship. See §6, which is the
larger finding.

**The clip risk was real and did not fire.** `TableView` (`LessonRich.tsx:705`)
puts `flex: 1` **directly on the `TX`** for every header and every cell, which is
the exact shape invariants §2 documents as clipping a tail. It does not clip
because these cells wrap to multiple lines inside a row with `alignItems:
'center'`, and the documented failure is a single-line hug-content box. **A
one-word-per-cell table would be the dangerous case, not this one.**

---

## 6. THE DOCTRINE QUESTION THIS BAND HAS BEEN CARRYING, SETTLED

The prompt asks whether `table` worked on device, "since you are the first user
of it in the product", and says the answer settles a doctrine question.

**It renders correctly and it is forbidden in the flow, and the device check
could never have found the second half.**

`density.logic.ts:423`, under a heading reading « Tables never appear in the
flow »:

```ts
if (s.type === 'table' && layer === 'core') {
  push('table-in-core', sid, 'a table in a core section — tables belong in a reference sheet (layer deep)');
}
```

So the reason **0 of 69** shipped lessons carry a `table` in `sections`, while
**152** tables render inside reference sheets, is not convention and not a
renderer gap. It is an enforced rule, and it fired on this build's first
`validateDensity` run.

**`A2-BUILD-DOCTRINE.md` §B.8 is wrong.** It names `table` as the A2 paradigm
surface and tells authors to "use each once"; the validator has been refusing it
in the flow the whole time, and 64 lessons used `tapTable` because that is the
only thing that works there.

**What shipped.** `s04-ladder` is a **`tapTable`** at `core`: identical layout —
the three rung names as `cols`, nine cells, one screen — and audible as well.
The **`table` ships as `s05-grid` at `layer: 'more'`**, the only layer that
passes, as the consultable grid the prompt's fallback would have put in a
reference sheet. It costs no sheet, and a sheet would have been worse: a
`cheatSheet` inside one draws its title and nothing else.

**Nothing was lost, and the band now has a working precedent for the type.**

---

## 7. WHAT THE PROBE MEASURED FALSE, and there were nine

Doctrine §F asks for every brief claim measured false. A1 builds found three to
five each.

| # | claim | measured |
|---|---|---|
| 1 | "you are `hideLines`' first content customer" | **False.** a2.07 (×2), a2.26, a2.27 and a2.28 already ship six `hideLines` sections |
| 2 | corpus plan: author `Excusez-moi, il y a un problème avec la douche.` | **`Il y a un problème avec la douche.` already exists** as `fr.a2.bricolage.041`. Imported as the bare report; the softened one authored beside it |
| 3 | corpus plan: author the hot-water fault line | **`fr.a2.hebergement.068`** already publishes it, inside this unit's own theme |
| 4 | corpus plan: `ne fonctionne pas` needs a hotel row | **`fr.a2.hebergement.062`** already publishes one |
| 5 | corpus plan: one authored Quebec `word` row | **Zero authored.** The divergence is already published: `fr.b1.quebec-et-francophonie.025/.026/.027` and the a2 sentence `.121`. `le déjeuner` exists **five** times across five themes |
| 6 | `Excusez-moi de vous déranger.` is a gap | **Exists** as `fr.a1.expressions-frequentes.002`. Deliberately twinned anyway — see §8 |
| 7 | "55 to 70 rows", corrected to "50 to 64" | **59**, and zero of them are nouns |
| 8 | doctrine §F: "19 to 24 is your mission range" | **Stale for A2, and corrected in §F on 2026-08-16.** The 29 shipped A2 lessons run **23 to 32**, median **24** (a2.13 at 32). The floor of 19 has never been hit and 24 was the median being quoted as a ceiling. 25 is one above the median and well inside the range |
| 9 | the prompt's own section plan gives acts 2 and 3 five sections each | That **fails doctrine §B.5**, which requires act 3 to be heaviest. Fixed by moving a2.07's repair citation into act 3, where fixed lexis belongs |

**Confirmed, all five:** `parler au responsable`, `ça ne marche pas`, `désolé de
vous déranger`, `vous avez une réservation` and `ce serait possible de` are **0
rows at any level**. The corpus authored the learner's half of every situation
and left the middle of every argument out. That is what this unit is for.

---

## 8. CORPUS: authored against imported

**59 authored**, `fr.a2.hebergement.074`–`.132`, contiguous, all `a2`, all
`hebergement`, **zero intra-theme fold collisions** against 312 published rows.

| block | ids | n |
|---|---|---|
| Rung 1 | `.074`–`.081` | 8 |
| Rung 2 | `.082`–`.090` | 9 |
| Rung 3 | `.091`–`.095` | 5 |
| Impersonal complaint frames | `.096`–`.105` | 10 |
| **The receptionist** | `.106`–`.129` | **24** |
| Politeness chunks (`phrase`) | `.130`–`.131` | 2 |
| The escalation brake | `.132` | 1 |

**Zero hotel nouns authored.** Every headword the lesson needs was already
published, and the batch refuses any `kind: 'word'` row outright. Thirteen are
imported: `.001 l'hôtel`, `.002 la chambre`, `.003 la réception`, `.015 la clé`,
`.016 l'ascenseur`, `.017 l'étage`, `.018 le rez-de-chaussée`, `.019 la
réservation`, `.021 la salle de bain`, `.026 la climatisation`, `.027 la
serviette`, `.028 l'oreiller`, `.053 la douche`.

**Voice floor: 24/59 = 40.7%** in the receptionist's voice (band floor 40%).

**39 imported ids, every one verified published**, from `hebergement`,
`au-restaurant` (a2.07's frozen six), `bricolage`, `expressions-frequentes`,
`salutations`, `questions`, `alphabet` and `quebec-et-francophonie`. 35 were
carried into the seed by the merge; 17 land in themes this unit does not own.

**One deliberate cross-theme twin.** `Excusez-moi de vous déranger.` is authored
as `.077` **and** imported as `fr.a1.expressions-frequentes.002`, because the
published row carries `drills = {dictation}` and nothing else: it can be released
by no `deckTranche` and reached by no `practice`, so it cannot do the rung-1
opener's job. The ladder is this band's citable block, exactly parallel to
a2.07's, and `04-REPAIR-MOVE-IDS.md` settles that such a block must be
contiguous, single-theme and single-owner — a2.07 authored six rows with exact
twins for the same reason. Cross-theme duplication is settled legal precedent
(collation §7.5). The twin is named, imported and reported, not "fixed".

### A corpus defect found and NOT repaired

Four published rows carry no `flashcard` drill, so **no deck in the product can
serve them**, and a `deckTranche` release would be a line that looks like it
works and does nothing:

```
fr.a2.hebergement.053            la douche                       {voiceflash, review}
fr.a2.expressions-frequentes.072 Pourriez-vous m'aider…          {sentence}
fr.a2.expressions-frequentes.077 Excusez-moi, pourriez-vous…     {sentence}
fr.sons.alphabet.282             Pourriez-vous répéter…          {sentence, review}
```

`la douche` is the noun this lesson's scene, trap and six authored rows are all
built on. The three `pourriez-vous` rows are the published evidence that decided
Paul's item 1 — the form is already live upstream of a2.13 — and not one of them
is servable as a card. **Repairing another theme's drill arrays is a repair pass,
not a lesson build.** Pinned by a test that goes red on purpose if they are ever
fixed.

---

## 9. a1.03 MOVED, AND AN IMPORT IS NOT INERT — for the fourth build running

Six of a1.03's printed ending figures moved. **Eleven rows joined its population
and ZERO of them were authored**: this build authored 59 rows and not one is a
noun. All eleven are **carried imports**.

```
-age    29 → 30       -tion   37 → 40       -ette   37 → 38
-e     928 → 932      -on    146 → 149 (60% → 59%)     -é   54 → 55 (54% → 53%)
```

Both accuracy moves are downward, one point, on endings a1.03 **already
dismisses** for being under the 90% floor. The dismissal and the teaching are
unchanged; only the printed counts moved.

Withdrawal does not fit (invariants §5): these eleven are the entire hotel noun
set the lesson's cards, scenarios and trap are built on.

`genre-endings.ts` re-measured, `a1.03.l1` re-rendered to **v9**, applied to
**Postgres and the seed** so git does not run ahead of the database.

---

## 10. THE LESSON

25 sections, 25 missions, six acts, one lesson, one quiz. **Acts 3 / 5 / 6 / 3 /
4 / 4** — act 3 is the heaviest, which doctrine §B.5 requires and the prompt's
own plan did not achieve.

**Reframe, authored 5 times verbatim:** « Take the person out of the sentence. »
Rejected and recorded: "Name the problem, not the person" (complaint only,
leaves check-in homeless); "Ask twice before you ask for the manager" (advice,
not a rule); "The polite word goes at the front" (false — `Excusez-moi` does,
`s'il vous plaît` does not, and the lesson teaches that split as its own card).

**Both required layouts verified on device.**
1. The rude line and the impersonal line on **one card**, `Vous devez réparer la
   douche.` above `Excusez-moi, il y a un problème avec la douche.`, each with
   IPA, respelling and English, marked ✗ and ✓. The `break` beat carries `wrong`
   and `right` as separate objects, so this is **structural**, not just asserted.
2. The three rung names **visible together, in order**, above all nine cells, on
   one screen.

**Quiz:** 30 questions, six rounds of five, `passMark: 70`,
`roundFailThreshold: 60`, every round targets an errorTrigger, every question
carries `why` and a `ref` that resolves. `mcq 13 · errorSpot 6 · listenChoose 6 ·
typeIn 5` — mcq is 43%, inside the half-the-quiz rule.

**The five softeners**, as unnamed lexis, never a family, never a tense:
`je voudrais` and `est-ce que je peux` inherited from a2.13; `j'aimerais` (38
published rows) and `pourriez-vous` (22) imported; **`ce serait possible de`
authored** — 0 rows at any level, the genuine gap.

---

## 11. THE ANSWER FOLD, and what it cost this lesson

This is the band's most hyphen- and elision-dense material, so the band rule bit
hardest here. `fold()` (`answer.logic.ts:32`) strips accents, case, punctuation,
hyphens, the middle dot, **both** apostrophes and **all** whitespace:

```
Excusez-moi     == Excusez moi     == excusezmoi
pourriez-vous   == pourriez vous
s'il vous plaît == silvousplait
l'eau           == leau
```

Every free-text item's expected answer was folded against its most plausible
wrong answer before authoring. **The batch found two real defects the author did
not:**

- **two `errorSpot` questions in different rounds folded onto the same answer.**
  Round 6's opener duplicated round 2's exactly. Rewritten onto a different
  rung-1 line.
- **six `accept` arrays were decoration.** They listed hyphenated and
  unhyphenated forms that had already folded to one string. Trimmed to what
  actually discriminates, so the arrays now say something true.

The **dictée** is no looser: `normalizeFr` strips the same marks.
`fr.a2.hebergement.107` « C'est à quel nom, s'il vous plaît ? » was the obvious
fourth item and is **disqualified by exactly that rule** — two apostrophes and
nothing else hard in it. `.110` replaced it. The guard found this, not the author.

All four dictée items run in **word mode**, checked through the real
`dicteeMode`, and none carries an apostrophe or a hyphen.

**Questions I wanted and could not write:** a `typeIn` on `Excusez-moi` versus
`Excusez moi` (folds), one on `s'il vous plaît` as three words versus one
(folds), and one on the `-vous` hyphen in `pourriez-vous` (folds). All three
would have been the lesson's most natural spelling checks and all three are
untestable. The contrasts that survive folding — `toujours pas` against `pas
encore`, and the whole rude-versus-impersonal choice — carry the free-text half
instead, and they are word-choice distinctions rather than orthographic ones.

---

## 12. MUTATION TESTING: two of seven found a weakness

The measured rate the corrections predict.

| # | mutation | result |
|---|---|---|
| 1 | put the person back in a rung 2 line | RED (batch) |
| 2 | rename a rung | **GREEN in the batch — a tautology.** RED in the test |
| 3 | paraphrase the reframe | **GREEN in the batch — a tautology.** RED in the test |
| 4 | drop `swipe` from `commonErrors` | RED (batch) |
| 5 | author a repair row | RED (batch) |
| 6 | add a fourth rung | RED (batch) |
| 7 | call a softener a family | RED (batch) |

**2 and 3 could not fail.** `RUNGS` is derived from `RUNG_2`, and the reframe
count matched the constant against itself — comparing a value to itself always
passes. `a2-29-hotel.test.ts` caught both because it hardcodes the strings
independently and reads the seed, which is the right design. But a batch guard
that cannot fail is worse than no batch guard, so **the four strings are now
pinned as literals in the batch as well**, and both mutations go red there too.
Re-verified after the fix.

Mutation 5 also needed doing twice: the first attempt escaped an apostrophe and
so changed the string it was testing. A bad mutation looks exactly like a
surviving one.

---

## 13. THE PHONE SUB-SITUATION: what was folded and what was dropped

**Folded in** (collation C6, one lesson per unit — `den.tsx:169` pushes
`lessonIds[0]` and a second lesson is unreachable):

- `s03-arrival`, a `hideLines` listening on the receptionist's four formulas
  with every question on the numbers or the action;
- `s18-checkin` turn 3, where the learner **spells a name back** — a call
  forward to `sons.alphabet`, which had already done it in a hotel frame, rather
  than a rebuild of it.

**Dropped, all four named as the prompt requires:**

1. **the telephone audio filter** — 2 to 3 days of native work in `tts.ts` plus a
   device pass;
2. **`SceneSetting.ambience`** — typed, and `ScenePlayer` never reads it;
3. **a no-text turn mode** — no renderer;
4. **a second lesson** — unreachable from the Den.

---

## 14. EXAM

Carried verbatim, as required:

> This unit carries exam value by teaching what the exam tests (transactional
> reception at speed, a request in the right register, a structured 60-second
> turn), not by producing an `ExamTask` row and not by populating
> `Scenario.exam`.

**Zero `ExamTask` rows. Zero `Scenario.exam` values.** Asserted as an absence,
because it is band policy and not an oversight. The design's `po_interaction`
offer stands declined.

`Lesson.skill = 'PO'` is set so `dueExamSkills()` can deep-link in — and **a2.29
is the first lesson in the product to set it.** `progress.logic.ts:1281` reads
`l.skill` and two tests in `progress.test.ts` cover that path, so the field is
live; it simply had no lesson to resolve to until now. The "carries no field the
shipped corpus does not" test allowlists exactly this one key, with the evidence,
and a second test goes red if another lesson ever adopts it so the allowlist
cannot rot.

**Mapping, for the runner that does not exist yet:** act 1 and act 4 are TEF
Canada Section A / TCF tâche 1 comprehension orale; act 5's two scenarios are
TEF Section A / TCF tâche 2 / DELF A2 exercice 2 (monologue suivi) and exercice 3
(exercice en interaction).

**These listening missions are CO-*shaped*, not CO *conditions*.**
`audio.maxPlays` is validated and read by no renderer, so a TEF "plays once"
condition cannot be enforced today. `modelPlayback`, `wrongThenRight`,
`perSentenceReplay`, `scoreOn` and `autoplay` are in the same state, and a test
asserts this lesson authors none of them.

---

## 15. DEVICE VERIFICATION

Pixel 6 `21041FDF600BMN`, Metro on 8082, `ealch://missions?key=a2.29.l1`.

### First pass

Verified: the missions hub (all 25, labels derived correctly); mission 1 through
the full scene (establishing card, both narration beats, the bubble, the gated
choice, **the break beat**, resolve); **mission 4, the ladder**; mission 2 goals;
**mission 19, the second scenario**, with its own setting, title, opening turn
and controls.

**One real defect found and fixed on device.** In the ladder's three equal
~240dp columns, `Excusez-moi,` is one token too wide and broke **mid-word** as
« Excusez-m / oi » on the lesson's most important screen. The cell now drops the
opener and its `say` and `detail.say` keep it in full; the shortened cell is
itself a published row (`fr.a2.bricolage.041`). Re-verified: clean wrap, layout
intact. **Nothing else clipped**, and the superscript `ⁿ` renders correctly
everywhere it appears.

### Second pass — the four missions the first pass left

Run on the same device at Paul's request. **All four work.**

**`s15-trap`, the stepped trapDrill.** All four steps draw as separate
sub-missions with the sub-mission number visible throughout — **15.1** rule
(title and body, its own Continue), **15.2** cards (five flip cards with a pager,
`One trap at a time. Tap a card to flip it.`), **15.3** audio (each pair at
Normal and Lent), **15.4** the drill. The drill step **is gated**: the footer
reads « Swipe to continue. » rather than advancing. Answering scores correctly —
the right option marks ✓, the distractors grey out, and a running `1 / 1` appears
top right. This is the shape `lesson-contract.test.ts` enforces and that a2.03,
a2.16 and a2.17 shipped wrong.

**`s20-dictation`, the dictée.** Header reads **`DICTÉE · MOT 1 / 4`** — word
mode, confirming `dicteeMode` on device as well as in the batch. The tile bank is
whole words with two distractors (`le`, `et`) and a delete tile; used tiles grey
in place rather than reflowing; `Écouter le mot (3)` gives three plays. Built
`Bonsoir, vous avez une réservation` and it graded **correct without the `?`** —
the punctuation strip, demonstrated live.

**`s21-speak`, the practice.** Renders the Voice Flash surface at **`1 / 9`**, so
all nine ladder itemIds resolve and all nine carry `voiceflash`. Card 1 shows the
French, the English, an audio chip with waveform, and « Say it in French ».

> **A correction to this report's own wording.** §15 previously called this "the
> practice mic pass". There is **no mic here.** `practice` renders a
> **self-graded** Voice Flash pass — the learner speaks and then taps « Not
> quite » or « I said it right ». Live `stt.listen()` scoring exists only behind
> the scenario's **Speak** button. The doctrine note that `practice` "renders the
> speaking drill regardless of `skill`" is right; what it does not say is that
> the drill is self-assessed.

**`s24-quiz`.** Opens on round 1 with the round label « WHICH RUNG IS THIS? » and
`Finish the lesson` disabled until answered. An `mcq` scores with the correct
option highlighted, distractors greyed, the authored `why` printed beneath, and a
« See this again » link built from the question's `ref`. A **`typeIn` draws its
`prompt` in its own box on screen** — the a1.16 defect avoided — with a gated
`Check`.

**The answer fold, proved on the device rather than in a comment.** Typing
**`TOUJOURS`** in capitals into the `toujours` gap graded **Correct**, against an
`accept` array holding only the lowercase form. That is `fold()` stripping case
exactly as `03-ANSWER-FOLD-FACT.md` says, and it is the reason no free-text item
in this lesson tests a capital, a hyphen, an apostrophe or a space.

### A pre-existing renderer defect this lesson now also carries

`s15-trap`'s audio step prints a hardcoded instruction line:

> « Écoutez la paire. Le R sonne, puis le R se tait. »

There is **no R contrast in this lesson** — these are politeness registers, not a
pronunciation pair, so the line is nonsense on this screen. It is **not
authored**: it is hardcoded at `ealch-v2/src/components/MissionRich.tsx:871` and
printed on every stepped trapDrill audio step in the product. Measured after this
merge: **46 audio steps across 34 lessons**, up from the 41 a2.27 recorded. a2.29
does not introduce it and cannot fix it from a lesson build; it is a one-line
renderer change (read the step's own copy, or drop the line) and it is worth
doing before the band's remaining three units add three more.

**Still not verified on device:** the remaining 28 quiz questions and the round
remediation loop (`roundFailThreshold` firing a drill), and the scenario's live
`stt` mic scoring. Named rather than papered over.

---

## 16. STATE, AND WHAT IS OWED

- **`content:publish` is NOT blocked.** `pnpm content:parity` after this build:
  70 lessons in the seed, 71 in Postgres, one pre-existing database-only lesson
  (`b2.01.l1`, `in_review`), and *"Nothing in the seed is at risk from a
  publish."* The `sons.09.l1` hazard the doctrine records is resolved.
  Publishing is still not part of a lesson build.
- **`seed.version` left at 50.** Not hand-bumped.
- **The a2.13 amendment is specified and not applied.** §3.
- **Four unservable published rows**, §8, awaiting a repair pass.
- **`A2-BUILD-DOCTRINE.md` §B.8 still needs editing**: it names `table` as the
  A2 paradigm surface when the validator forbids it in the flow.
  **§F is DONE** — the mission range was corrected on 2026-08-16 to 23 to 32,
  median 24, measured across all 70 shipped lessons.
- **`MissionRich.tsx:871`'s hardcoded R line** is live on 46 trapDrill audio
  steps across 34 lessons and reads as nonsense on every lesson that is not
  about pronunciation. One line to fix, and three more band units are coming.

Files: `scripts/author-hotel-batch.ts`, `scripts/merge-hotel-into-seed.ts`,
`scripts/data/hotel-{corpus,lesson,terms}.ts`, `package.json` (`content:hotel`),
`ealch-v2/src/content/a2-29-hotel.test.ts` (70 tests).

*This file is `.md` and therefore gitignored: `git add -f` to track it.*
