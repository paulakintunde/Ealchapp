# a2.11 "Les verbes en -RE" build report

Trail seq 4 of 32. Doctrine §F, plus the three things `A2-11-VERBES-RE-PROMPT.md`
asked for by name.

Applied to Postgres and merged into `seed.json`. Not published; publishing is not
part of a lesson build.

```
scripts/_a211_manifest.ts                  the recorded read, regenerable
scripts/_a211_probe.ts                     the discovery measurement
scripts/_a211_measure.ts                   hasPlainNasalFor / dicteeMode / normalizeFr
scripts/_a211_blindspot.ts                 which nasals the checker can see
scripts/author-verbes-re-batch.ts          content:verbes-re
scripts/merge-verbes-re-into-seed.ts
scripts/data/verbes-re-{corpus,imported,display,terms,lesson}.ts
scripts/data/verbes-re-rows.gen.ts         generated
ealch-v2/src/content/a2-11-verbes-re.test.ts
package.json                               content:verbes-re
```

---

## 1. The three things the brief asked for by name

### The reference-sheet decision: my own, and here is why the brief's option did not exist

The brief said a2.01's sheet "should cover the ending set for all three groups.
Check whether it does, and extend it rather than making a second one."

**It does not, and it could not have been extended at any price.**

Measured 2026-08-11 by reading every shipped sheet in the band out of
`content_units`:

```
a2.01.l1   sheet.a2.01.endings      "The -ER endings, in full"
a2.01.l1   sheet.a2.01.thirty       "The thirty verbs"
a2.09.l1   sheet.a2.09.patterns     "The four patterns, in full"
a2.09.l1   sheet.a2.09.lists        "Which verbs double, which take the accent"
a2.10.l1   sheet.a2.10.endings      "The -IR endings, in full"
a2.10.l1   sheet.a2.10.ten          "The ten verbs"
a2.10.l2   sheet.a2.10l2.families   "Both families, in full"
a2.10.l2   sheet.a2.10l2.lists      "The twelve, sorted"
```

Each covers one pattern, because each was written before the pattern it would
have had to cover existed. And a sheet is **not addressable across lessons**:
`schema.ts:3490` collects sheet ids from the lesson being validated and fails any
section naming one it does not declare, and `lesson-contract.test.ts:91` re-checks
it against `lesson.sheets`. No section of a2.11 can point at a sheet of a2.01.

So the choice was not "extend or duplicate". It was "what do I ship that is not a
third copy of the same idea".

**One sheet, `sheet.a2.11.threegroups`, and its centre is a table that neither
predecessor could have held**: every pronoun against all three groups at once,
with the il row reading `parle · finit · vend`. It names a2.01 and a2.10 in its
own prose so a learner knows the set is finished and a future author knows which
sheet is which. The count and the id are recorded as `SHEET_DECISION` in the
corpus and asserted, so somebody reaching for "the -RE endings, in full" breaks a
constant rather than shipping a fourth competing reference.

### How this was kept from reading as a repeat, in section terms

The risk was not stylistic. It was phonetic, and it nearly took the lesson.

`il vend` is /il vɑ̃/ and `ils vendent` is /il vɑ̃d/: **the stem-final d is silent
at the end of a word and said in the middle of one**, so the -RE plural is
audible against the singular in exactly the way the -IR plural is. a2.10, ONE
LESSON AGO, owns *"The plural puts a sound on the end"*, and it is true of -RE
verbs too. A lesson that reached for the audible half would have been a2.10 with
different letters, at seq 4, in a run of three consecutive paradigm lessons.

The refusal is what shapes every act, and none of it is adjectival:

| | a2.10 | a2.11 |
|---|---|---|
| reframe | about the sound | about the CELL. `sound`, `hear` and `plural` are banned from it by the batch |
| paradigm act | a six-row audible `tapTable` | **no table and no tapTable at all**, three light missions, full paradigm in the sheet |
| the one `tapTable` | the paradigm, act 2 | the **cross-group comparison**, act 3. The only screen with per-row audio compares three lessons rather than six persons |
| act-3 shape | 2 `listening` + 1 `groupDrill` | **2 `groupDrill` + 1 `listening`**. The weight moved from the ear to the hand |
| dictée | 8 targets | **11 targets**, the heaviest production section in the lesson |
| quiz | 11 typed, 6 listenChoose | **16 typed, 4 listenChoose**, and the batch fails if typed does not outweigh listened by more than two to one |
| paradigm order | departed from the ledger, ordered by sound | **the ledger's order**, because the contrast lives in a different table |

The audible fact is not discarded. It is the glossary term `theD` and one mission
(`s12-dsound`), which is where a true fact belonging to the previous lesson
should sit. `EXPECTED_TAPTABLES`, the one-listening rule and the typed-versus-
listened ratio are all enforced, so drifting back towards a2.10 fails the build.

### prendre and mettre: named, and conjugated nowhere

Named on `s16-notmine` with `battre` and all five compounds (`apprendre`,
`comprendre`, `permettre`, `promettre`, `combattre`), with `a2.15` named as the
destination. Enforced three ways:

- `NOT_THIS_FAMILY_FORMS` (24 correct forms) may reach no **production surface**:
  quiz answers, every quiz option, scenario turns and alts, groupDrill checks,
  listening options, trapDrill options, drill answers, and the vocabulary decks.
- `OVER_GENERALISED_FORMS` (`prendent`, `prendons`, `metts`, `batt` …) may appear
  **nowhere at all**, not even to be rejected. This follows a2.10's reasoning
  exactly: a `commonErrors` card can show `il vende` because the learner holds
  `il vend` to replace it with, and nobody here holds `ils prennent`, because
  a2.15 is five units away.
- The two rows are **read from Postgres and never carried**. They are in the
  manifest so the decision was taken with the rows in front of it, and absent from
  `IMPORTED_ROWS`, from `itemIds` and from the merge. `prendre` reaching the seed
  through this build fails the merge.

`met`, `mets`, `bat` and `bats` are deliberately **not** in the ban list, and that
is recorded in the corpus: `bat` and `bats` are ordinary English words and every
instruction line in this lesson is English. A guard that fires on legitimate
content is a guard the next author deletes.

---

## 2. What the probe said, and what I imported rather than authored

**All nine verbs exist. This lesson authors not one infinitive.**

```
vendre     5 rows      entendre   1 row       prendre    3 rows  (named only)
attendre   8 rows      perdre     2 rows      mettre     1 row   (named only)
répondre   7 rows      rendre     1 row       descendre  3 rows
```

| verb | imported id | stored respelling | action |
|---|---|---|---|
| vendre | `fr.a2.verbes.027` | `VAHNDR` | repaired → `VAHⁿDR` |
| attendre | `fr.sons.verbes-essentiels.028` | `ah-TAHNDR` | repaired → `ah-TAHⁿDR` |
| répondre | `fr.a2.verbes.020` | `ray-PONDR` | repaired → `ray-POHⁿDR` |
| entendre | `fr.sons.verbes-essentiels.029` | `ahn-TAHNDR` | repaired → `ahⁿ-TAHⁿDR` |
| perdre | `fr.sons.verbes-essentiels.032` | `PEHRDR` | no repair needed |
| rendre | `fr.sons.verbes-essentiels.128` | `RAHNDR` | repaired → `RAHⁿDR` |
| descendre | `fr.a1.transports-quotidiens.045` | `day-SAHN-druh` | repaired → `day-SAHⁿDR` |
| prendre | `fr.sons.consonnes.107` | `PRAHⁿDR` | **named, not imported** |
| mettre | `fr.sons.verbes-essentiels.014` | `METR` | **named, not imported** |

**Seven and not ten, and that is a decision.** Past these seven the next
candidates are `tondre`, `mordre`, `fondre`, `pondre` and `dépendre`. Padding the
set to a2.10's ten would mean teaching a learner at seq 4 how to say a sheep is
being sheared. `fondre` and `mordre` appear instead as the verbs the generation
missions use, in a drill stem and never as vocabulary.

**Zero drill additions**, measured rather than assumed: all seven already carry a
`flashcard` drill. a2.10 had to add two. The check still runs.

---

## 3. Every claim in the brief I measured false

Five, and one of them is the reason the lesson has the shape it has.

**1. "a2.01's sheet should cover the ending set for all three groups."** It covers
one, and no lesson can reference another lesson's sheet anyway. §1 above.

**2. "After two lessons of adding letters to a stem, the learner has to remove
one."** The learner removes nothing and the machine has not changed at all.
`parler` minus its last two letters is `parl-`, `finir` minus its last two is
`fin-`, `vendre` minus its last two is `vend-`. All three groups cut exactly two
letters. What is new is one **cell** of the ending set, not a new operation. The
brief rejects "-re verbs drop the ending in the third person" for inviting a
deletion, and then invites the same one a paragraph earlier. The machine card says
so instead, and `verbStem()` is the same arithmetic a2.10's is.

**3. "prendre and mettre look like regular -re verbs and are not. They are a2.15."**
CONFIRMED, and it is the **only one of the four hand-off claims that the data
supports**. See §4.

**4. "je vends, tu vends, il vend sound identical ... the strongest dictée
candidate in batch 1."** True, and the completion is sharper than the claim.
Counted across all 27,499 published sentences:

```
je vends       0        il vend         3
tu vends       0        ils vendent     3
elle vend      0        elle attend    36
on vend        0        nous attendons 21
vous vendez    0        j'attends      16
elles vendent  0        ils répondent   0
ils entendent  0        il rend         0
ils rendent    0        ils descendent  0
```

**Two of the three members of the triple this lesson exists to install do not
occur once in the corpus.** The forms a learner can settle by ear are attested and
the forms only the page can settle are not. That is the entire authoring case, in
one table, and it is why four of the six paradigm rows had to be authored.

**5. "The trap: je vends, tu vends, il vend sound identical."** Also true, and
INCOMPLETE in the direction that matters. `il vend` /vɑ̃/ and `ils vendent` /vɑ̃d/
are **not** homophones: the -ent is silent and it still puts letters after the d,
so the d is said. The brief's framing implies the whole paradigm is an ear
problem; in fact the ear settles the plural cleanly and settles nothing at all in
the singular. That measurement is what forced the lesson onto the page. §1.

### And one the brief marked UNVERIFIED that turned out worse than it feared

**"Whether any unit owns `descendre`'s auxiliary split. a2.21 is the likely home,
not confirmed."**

All 76 curriculum units were read out of `content_units` and searched.
**a2.21 exists at seq 18, titled "The Passé Composé with Être", and its body
contains neither `descendre` nor `monter` nor any other verb of the split. NOR
DOES ANY OTHER UNIT AT ANY LEVEL: not one of the 76 names `descendre`, `vendre`,
`attendre`, `entendre`, `perdre`, `rendre` or `répondre` anywhere.**

`a2.11` is the only unit in the curriculum that owns a regular -RE verb at all.
This is smaller than the hole a2.10 found (a2.21's topic will plainly cover
`descendre` when it is written, and the eight -IR verbs a2.10 found had no
plausible home at all), but it is reported rather than assumed: nothing in the
data today says so. **a2.21 has no lesson yet, so this is a note for whoever
writes it, not a defect.**

`répondre à` → `a2.24`, seq 22, canDo *"Can replace an indirect object with lui or
leur and knows which verbs take à"*. Confirmed. No authored row puts an `à` after
`répondre`, and the batch fails any that does.

### The identity block, for the fourth time in four A2 builds

`title` and `sub` are SWAPPED in the brief and its `sub` is not in the database at
all. The unit dump says `t: "Regular -RE Verbs"`, `sub: "Les verbes en -RE"`. The
brief's *"the vendre model — and the bare il form"* exists nowhere in Postgres and
carries an em dash besides. **The canDo is right this time** and matches byte for
byte. Copied from the probe, not from the brief.

---

## 4. The reframe, and what was rejected

```
The il form takes nothing, and that is the ending.
```

The brief's own candidate, unchanged. Four were weighed and the record is in
`verbes-re-terms.ts`:

- **"-re verbs drop the ending in the third person."** The brief's own rejection
  and it is right, plus it is false about the machine: nothing is dropped.
- **"The stem is the whole word."** The closest miss. True of the cell the lesson
  owns and **false in the other five**, and a reframe carried through nine
  sections cannot be false in five of them. Same reason a2.01 rejected "Endings
  are silent" and a2.10 rejected "The plural grows a syllable".
- **"The plural is where the D wakes up."** TRUE, SHORT, TEACHABLE, AND REJECTED
  ANYWAY. It is a2.10's reframe in new clothes, and taking it would have made this
  the second consecutive lesson about the ear. It would also be authoring against
  the unit's own promise: the `sub` reads "the vendre model" and the canDo reads
  "including the il form that takes no ending". It survives as the term `theD` and
  one mission.
- **What survived.** It names the one cell the learner cannot derive from the two
  lessons before this one, it frames the absence as a positive form rather than a
  deletion, and it runs in the half-second it has: subject is `il`, write nothing.

Carried in **9 sections, 10 appearances**, against explicit constants.
`THREE_GROUPS` ("Three groups, three endings on the il form, and one of them is
nothing.") is carried in 3 sections plus the sheet, the way a2.10 carried
`BOTH_HALVES`. `NOUS_ON` is a2.01's constant, imported and not reworded, with
exactly one home (`s08-nothing`): `on` takes the il form, so on a -RE verb the
commonest spoken plural in French lands on the cell that writes nothing.

---

## 5. How the Owns got more weight than the paradigm

```
act 1   the third and last one        3 missions   s01 s02 s03
act 2   the same machine, one new cell 3 missions  s04 s05 s06     NO table, NO tapTable
act 3   the cell where you write nothing 7 missions s07 … s13      THE OWNS
act 4   the letter you want to add    3 missions   s14 s15 s16
act 5   out in the world              4 missions   s17 s18 s19 s20
act 6   prove it                      4 missions   s21 s22 s23 s24
                                     24 missions
```

Act 3 holds seven against the paradigm's three, and the test fails if it is not
more than double. It holds the lesson's only `tapTable`, both production
`groupDrill`s and the one `listening`. The paradigm act carries no table of any
kind, and a test asserts that too.

`s07-cells` is the whole lesson on one screen: three rows, three groups, one
frame, each with its own audio.

```
Group        He does it    What you write
-er · a2.01  il parle      -e
-ir · a2.10  il finit      -it
-re · a2.11  il vend       nothing
```

Three rows and not nine, because `tapTable` is not in `ownsLayout()` and renders
inside a scrolling page. Three sit above the fold, which is part of why this is
the table that gets to be a tapTable and the six-form paradigm does not.

The empty cell is asserted as **data** in four places, not as prose: the `ENDINGS`
row, the `THREE_CELLS` row, the authored row's `ending`, and the string the table
prints. Prose saying "nothing" survives a card that has quietly started showing
something.

---

## 6. Corpus

**24 authored, 7 imported, 2 read and not imported.** `fr.a2.verbes.221 .. .244`,
inside the ledger block `.221 .. .260`. Theme `verbes`, level `a2`, every row a
`sentence`, no `gender`, none over 14 words.

```
paradigm  6   the vendre frame, all six persons, frame word `ici`
cross     2   Il parle ici. / Il finit ici.
hidden    3   the répondre triple, frame word `vite`
apply    13   the seven verbs across all seven persons
```

**The two cross rows are the only place this build authors a neighbour's verb**,
and it is deliberate. a2.01 ships `Il parle français.` and a2.10 ships `Il finit
tôt.`; putting those beside `Il vend ici.` would compare three frames as well as
three endings, and the whole claim of the screen is that only the verb moves. The
batch asserts the shared frame and fails on three different objects.

**The second triple is `répondre`, and `attendre` cannot carry one.** A triple is
worth authoring only if the three respellings are one string once the pronoun
comes off, and `attendre` begins with a vowel: `j'attends` elides, `il attend`
liaises, `tu attends` does neither. Three different pronoun boundaries and nothing
to compare. `attendre` earns two rows in the apply family instead.

**The form rule held**: both triples are one string after the pronoun (asserted as
an equality), each holds exactly one bare form, all five d-pairs are the singular
plus exactly one d, and the three pronoun-blind pairs differ by the d and by
nothing else.

**a1.03 does not move**: zero joiners in the real `endingPopulation`, authored and
carried.

### The nasal checker is blind to eleven of this lesson's nasals

Measured by breaking every superscript back to a plain n, one at a time, and
asking `hasPlainNasalFor` whether it noticed: **25 it can see, 11 it cannot.**

The eleven have one shape between them: **a nasal followed by a d inside the
token.** The checker needs the n to end a space-delimited token, and every regular
-RE stem ends in d, so every plural form and every infinitive is invisible to it.

`entendre` is the whole problem on one row. `ahn-TAHNDR` **is** flagged, because
its first nasal ends a token; `ahⁿ-TAHNDR` is **not**, because its second does
not. **Repairing what the checker reports produces a value it then calls clean and
which is still wrong.** That is asserted as a negative in the batch, the merge and
the test.

This broke the inherited guard. a2.10's repair check requires the stored value to
be flagged, and **it would have rejected four of my six repairs as "not a
violation"**. The repair table is split into `RESPELL_REPAIRS_VISIBLE` (2, proved
through the shared function exactly as a2.10 does) and
`RESPELL_REPAIRS_INVISIBLE` (4, where the guard runs the opposite way: the stored
value must be unseen, the replacement must be unseen, and the replacement is
asserted by name). The correct convention is not invented here:
`fr.sons.consonnes.146` already holds `a-TAHⁿDR` and `fr.sons.consonnes.107`
already holds `PRAHⁿDR`, so this build brings the verb themes into line with a
theme that got there first.

**The checker's other blind spot does not arise.** Invariants §3 records that it
false-positives on a real /n/ after a vowel. Four candidates were tried against
this lesson's strings (`une`, `pommes`, `la semaine`, `la panne`) and not one is
flagged, so there is no row in that direction to protect. Asserted rather than
left as a silence: the absence was looked for.

14 rows carrying the same broken respellings are recorded in `NOT_REPAIRED` and
left alone: they are somebody else's theme and are not on a screen this lesson
draws.

---

## 7. Lesson

24 missions, 6 acts, 31 items, v1 (a first build: the unit dump said
`"lessons": []`).

**Quiz: 30 questions in 5 rounds, every one with a `why` and a live `ref`.**

```
typeIn 11 · mcq 8 · errorSpot 5 · listenChoose 4 · tapSilent 1 · speak 1
16 typed against 4 listened, and the batch fails below a 2:1 ratio
6 of the typed turn on the bare form
answer slots: quiz 0:2 1:4 2:4 3:2 · in-mission 0:5 1:6 2:5 3:1
```

**No ear question asks about the singular triple, and the brief asked for this to
be said here.** `je vends`, `tu vends` and `il vend` are one sound; a
`listenChoose` offering two of them has no correct answer and marking one right
would certify a bug. It is said here **and enforced**: `HOMOPHONE_FORMS` holds
seven groups and the batch, the merge and the test all check that no
`listenChoose` has two options differing only by a member of one group. A sentence
in a report cannot fail; this can.

**The dictée is the heaviest production section.** Eleven targets against a2.10's
eight, all in LETTERS mode through the real `dicteeMode` (9 to 14 letters; `ici`
and `vite` are the frame words for exactly that reason). Every target carries the
`dictation` drill, checked against Postgres. It covers **both** singular triples
and **all three cross-group cells**, so the learner spells `-e`, `-it` and nothing
in one mission. Ten of the eleven are graded on exactly what the lesson teaches,
proved through the real `normalizeFr` in both directions; the eleventh turns on
the accent of `réponds`, which `normalizeFr` folds away, and it is recorded rather
than discovered. The two errors the lesson exists to stop — `Il vende ici.` and
`Il réponds vite.` — are both gradeable, and the batch fails if either stops being
so.

The scene is spoken, per the brief. A market in Nantes; a customer asks whether
this is the cheese stall; the learner reaches for `il vend`, does not believe a
form that short, and adds the letter that would finish it. **On a -RE verb that
letter is a sound as well**: `il vende` is /vɑ̃d/, which is what `ils vendent`
sounds like, so she hears a plural and goes to look for a row of sellers. Nobody
is rude, nobody is corrected, nothing is mispronounced. That failure is unique to
this lesson and neither neighbour could have staged it.

---

## 8. Gates

```
                                 before          after
node --test (full suite)         2964 pass       3074 pass, 0 fail    (+110)
npx tsc --noEmit  ealch-v2       clean           clean
npx tsc --noEmit  ealch-admin    clean           clean
seed.json                        v26, 8687 items, 45 lessons
                                 v26, 8718 items, 46 lessons
fr.a2.verbes row count           202             226                  (202 + 24 exactly)
content:parity                   1 divergence    1 divergence, the same one
```

The baseline was measured, not carried: the ledger records 2951 after a2.10.l2 and
the suite stood at **2964** when this build started.

**The id block held.** `fr.a2.verbes` held exactly 202 rows when `.221` was
claimed, which is the ledger's own figure after a2.10.l2, and 226 after, which is
202 plus this build's 24 and nothing else. Nobody landed inside it. Worth noting
that **the maximum was no use at all here**: a2.10.l2 took `.461..500`, above the
whole batch-1 reservation, so `max` has been past this block since before it was
claimed. The row count was the only signal left.

`content:parity` reports the same single pre-existing divergence before and after
(`b2.01.l1`, database-only) and says *"Nothing in the seed is at risk from a
publish."* Not mine, and unchanged by this build.

### Mutation-tested

Every assertion that matters was broken on purpose and confirmed to go red.
Thirteen mutations, thirteen caught:

```
RED  give il vend an ending (in the corpus data)
RED  give il vend an ending (in the ENDINGS table only)
RED  conjugate prendre on a production surface
RED  print ils prendent anywhere
RED  drop the three-way comparison (remove the -ir cell)
RED  break the shared frame (give the -er cell its own object)
RED  revert a nasal the checker cannot see (vendre)
RED  half-repair entendre, which the shared checker calls clean
RED  break the singular triple (clarify one respelling)
RED  drop a dictée target from the triple
RED  add a second reference sheet
RED  make the reframe about the sound (a2.10 again)
RED  swap one of the seven verbs
```

**The last one found a real hole in the inherited test shape.** Swapping a verb
makes the lesson module throw at import, and a2.10's `try { … } catch {}` swallows
that: `noSrc` goes true and roughly thirty source-derived assertions silently skip
while the file still reports green. The mutation was caught by the batch only.
The test file now distinguishes "the source is genuinely absent" (a checkout
without `ealch-admin`, where skipping is correct) from "the source exists and
throws" (a broken build), and fails on the second. Re-run afterwards, the mutation
is caught by the test alone.

---

## 9. Device verification: the HOST HALF ONLY

**adb reported no device attached, so the phone half was not done. Saying which
half plainly, per invariants §7.**

What was done, against Metro on 8082 and a served 23.3 MB bundle:

- **Every section type this lesson uses has a renderer `case`.** All eighteen
  (`scene`, `goals`, `cardDeck`, `examples`, `groupDrill`, `tapTable`,
  `listening`, `flashcards`, `trapDrill`, `commonErrors`, `practice`,
  `dictation`, `scenario`, `reading`, `reviewDeck`, `progressCheck`, `quiz`,
  `roundup`) resolve in `MissionSection.tsx` or `LessonSection.tsx`, and both
  sheet section types (`table`, `teach`) are drawn by `ReferenceSheet.tsx`.
- **Every new string is in the served bundle**, including `a2.11.l1`, the reframe
  (10 occurrences, matching the constant), the three-cell sentences, the scene's
  failing option, `sheet.a2.11.threegroups`, `s07-cells`, `s18-dictation`,
  `rec-a2-11-cells` and the repaired `VAHⁿDR`. A form the lesson never authored
  (`Il repond vite.`, unaccented) is correctly absent.

**What this cannot tell anybody, and what a phone pass should look at first:**

1. **Whether the three rows of `s07-cells` sit above the fold on a Pixel 6.**
   `tapTable` is not in `ownsLayout()`, so it renders inside a scrolling page.
   Three rows should be comfortable where a2.10's six were the limit, but that is
   an inference from a2.10's measurement, not a measurement.
2. **Whether the break card's Continue is above the fold on first paint.** The
   heading (11 characters), body (26 words), coach (7 words) and both glosses (19
   and 18 characters) are all inside the budget a2.01 established over three
   device passes and are asserted by test, but a2.01 needed three passes to find
   those numbers and this card has not been looked at.
3. **Whether `s09-triple` at `size: 'xl'` sizes correctly.** Every string in it is
   a two-word form, which is the one case where `xl` is right, but the 12-word cap
   is a validator rule rather than a layout proof.
4. **Whether an eleven-item dictée reads as thorough or as long.** It is the
   heaviest section in the lesson by design and the only one whose length is a
   judgement rather than a constraint.

---

## 10. Anything I could not verify, said plainly

- **The device half, above.** Four named gaps.
- **`a2.21` and `descendre`'s auxiliary split.** a2.21 has no lesson, so nothing
  can be confirmed beyond "no unit's body mentions it today". Reported for
  whoever builds seq 18.
- **The audio briefs.** `CLIP_MANIFEST` is empty by design and
  `ELEVENLABS_API_KEY` is not set, so no clip was rendered and none should have
  been. The two most important instructions in this lesson pull in **opposite
  directions** and are separate recordings for that reason:
  `rec-a2-11-cells` demands the three il forms be indistinguishable, and
  `rec-a2-11-dpairs` demands the d be clearly audible. Both are pinned by test so
  a studio cannot quietly reverse either. Whether a real voice can hold both
  constraints in one session is not something this build could check.
- **The `il` person count.** Eight authored rows carry `person: 'il'`, more than
  any other. That is correct for a lesson about the il form, but it means the
  speak mission is weighted towards one cell and nobody has heard it.

---

## 11. Ledger amendments

`A2-BATCH-1-LEDGER.md` §2, §5 and §6 amended in place: the block, the row count
after this apply, the new baseline, and two decisions later lessons in the band
will need (the checker's blind spot on any stem ending in a consonant, and the
one-sheet precedent).

**Not committed.** `*.md` is gitignored here, so the report and the ledger need
`git add -f`.
