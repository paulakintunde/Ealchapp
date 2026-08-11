# a2.09 build report — "Les verbes en -ER : exceptions"

Trail seq 2 of 32. Built 2026-08-11. Applied to Postgres and merged into
`seed.json`; not published, because publishing is not part of a lesson build.

---

## 0. Identity, and the brief's first error

The brief's identity block has `title` and `sub` **swapped**, exactly as `a2.01`'s
did, and its `sub` is not in the database at all. The probe's unit dump:

```
t:     "-ER Verbs: The Exceptions"
sub:   "Les verbes en -ER : exceptions"
cando: "Can spell the stem changes in manger, commencer, appeler and préférer without guessing"
seq:   "2"                       <- a STRING, so the eyebrow is "A2 · LEÇON 02"
lessons: []                      <- genuinely empty, unlike a2.01
prereq:  ["a2.01"]
```

The brief's `sub` — "-ger, -cer, -eler, -eter and the é_er patterns" — exists
nowhere in Postgres. That is not cosmetic: the brief's whole `-yer` argument rests
on "the `sub` is fixed and lists four", so the constraint it was reasoning under
does not exist. See §3.

`lessons: []` was probed rather than assumed, so this really is a first build.

---

## 1. The probe: what existed, and what was imported

```
theme verbes              393 published in postgres,  35 in seed
  fr.a2.verbes            count=125  max=125   NEXT FREE = .126   gaps: none
theme verbes-essentiels   535 published in postgres,  17 in seed
```

**Twelve of the thirteen verbs the brief names already exist**, most of them
several times over, and so does every other verb this lesson wanted. `placer` is
the single absence and this lesson does not teach it: `commencer`, `lancer` and
`effacer` carry `-cer` and adding a headword nobody needs is how a theme fills up
with rows no lesson releases.

**THIS LESSON AUTHORS NOT ONE INFINITIVE.** All seventeen are imported by id:

```
-ger      manger      fr.a1.routines.185              nager       fr.sons.verbes-essentiels.088
          voyager     fr.sons.verbes-essentiels.130   ranger      fr.a1.routines.033        [repaired]
          partager    fr.a2.communaute.052
-cer      commencer   fr.sons.verbes-essentiels.036   [repaired]  lancer  fr.sons.verbes-essentiels.132  [repaired]
          effacer     fr.a1.dictee.099
double    appeler     fr.a2.verbes.050                rappeler    fr.a2.verbes.051
          jeter       fr.sons.verbes-essentiels.069
accent    acheter     fr.a2.verbes.026                geler       fr.a1.meteo.167
é_er      préférer    fr.sons.verbes-essentiels.108   espérer     fr.sons.verbes-essentiels.107
          répéter     fr.sons.verbes-essentiels.209   protéger    fr.a2.verbes.055
```

The corpus also already holds the CONJUGATED forms, in quantity: `nous mangeons`
30 sentences, `je préfère` 40, `j'achète` 15, `nous appelons` 7, `nous achetons`
7, `nous préférons` 6, `nous voyageons` 5, `j'appelle` 2, `nous commençons` 1,
`je jette` 0. Not one of them is used, and that is the whole authoring case:
every one was written for its own theme, so comparing two of them compares their
subject matter as well as their person. This lesson needs pairs in **one frame**
where nothing moves but the person and one letter.

**26 rows authored**, `fr.a2.verbes.141..166`, theme `verbes`, level `a2`, every
one a `sentence` (the ledger's rule: only infinitives and full sentences are
corpus rows). Families: `soft` 6, `silent` 6, `split` 5, `both` 2, `apply` 7.

**Row count after the apply: 125 before, 151 after.** Exactly +26, so no
concurrent lesson landed inside the block. Block `.141..180` is now recorded in
the ledger as taken with `.167..180` free.

**3 respellings repaired**, all three flagged by the real `hasPlainNasalFor` and
all three on rows this lesson prints as cards:

```
fr.sons.verbes-essentiels.036  commencer  koh-mahn-SAY -> koh-mahⁿ-SAY
fr.sons.verbes-essentiels.132  lancer     lahn-SAY     -> lahⁿ-SAY
fr.a1.routines.033             ranger     rahn-ZHAY    -> rahⁿ-ZHAY
```

`commencer` is the one that mattered: the lesson prints it on the same screen as
`nous commençons`, and `koh-mahn-SAY` beside `koh-mahⁿ-SOHⁿ` would have taught a
vowel difference that does not exist.

---

## 2. Every brief claim measured false

Five, which is at the top of the range the doctrine predicts.

1. **`title` and `sub` are swapped and the `sub` does not exist.** §0.
2. **"Whether any of these verbs already exist as corpus items. Probe."** Twelve
   of thirteen do. The brief's UNVERIFIED note was right to flag it and wrong to
   leave it open in the direction it did.
3. **"`typeIn` is the format. The entire lesson is a spelling distinction, and no
   ear question can test it."** Half true, and the false half reshaped the whole
   quiz. See §4.
4. **"`listenChoose` has almost no job here."** It has exactly one, and it is
   worth a whole mission rather than one question: **one of the two mechanisms is
   inaudible and the other is not.** `je mange` and `nous mangeons` carry the
   identical stem sound — that is *why* the e is written — while `je préfère` and
   `nous préférons` genuinely differ. `s09-ear` exists because of that split and
   it is the mission that makes "two mechanisms" audible rather than asserted.
5. **"`-eler`/`-eter` ... the split is not predictable from the ending alone and
   has to be learnt per verb."** True, and the brief draws it as a *third*
   mechanism when it is not. See §5.

---

## 3. The `-yer` decision, and what it does to the `sub`

**`payer` and `essayer` are NAMED AS CONTEXT ON ONE CARD (`s16-notmine`) and
taught nowhere**: no corpus row, no itemId, no deck, no drill, no dictée, no quiz
answer. This is `a2.01`'s own hand-off shape, which named `manger` on exactly one
card in order to give it away.

**Effect on how the `sub` reads: none.** The brief's argument was that the `sub`
lists four patterns and would read as incomplete if five were taught. That
constraint is not real. The `sub` in Postgres is "Les verbes en -ER : exceptions"
and names no pattern at all, so the decision had to be made on the teaching.

**The reason that survives is about the rule.** `-yer` is the *same* mechanism as
`-eler`/`-eter`/`é_er` — the stem responds when the ending goes silent — so naming
it strengthens the claim this lesson is built on, and the card says so. But
`payer` has two accepted outputs, `je paie` and `je paye`, and no other pattern
here does. A lesson whose hardest screen is a `trapDrill` insisting that `appeler`
doubles and `acheter` does not cannot, three missions later, hand the learner a
pattern where both answers are right.

Asserted in both directions: `payer` and `essayer` **are** named; no conjugated
`-yer` form reaches a production surface; neither is released as an item. The
mutation test confirms the second half goes red (§8, M4).

---

## 4. What the app cannot test, and what it did to the quiz

The single most consequential measurement of this build.

`fold()` in `answer.logic.ts` normalises to NFD and **strips every combining
mark** before comparing, so for `typeIn` and `errorSpot`:

```
commençons == commencons          préfère == préfére == prefere
```

`normalizeFr()` in `score.ts` does exactly the same, and that is what the DICTÉE
compares with (`MissionRich.tsx`: `normalizeFr(filled) === normalizeFr(target)`).

**So no typed, spotted or assembled surface in this app can test a cedilla or an
accent.** A `typeIn` on `nous commençons` accepts `nous commencons` and tells the
learner they spelled it right, which is worse than not asking.

What survives a fold, and therefore what `typeIn` really carries here: the
inserted `e` (`mangeons` / `mangons`), the doubled consonant (`appelles`,
`jette`), and its absence (`appelons` / `appellons`).

Consequences, all deliberate:

- **The quiz is 12 mcq of 30** rather than the four or five an -ER lesson would
  normally carry. Every one of the twelve asks something no other format could.
  The cedilla question and the accent question both put the wrong spelling on the
  screen as a live option, and the batch asserts that by name.
- **11 typeIn and 4 errorSpot** carry the half that *is* typable, so the lesson
  still makes the learner produce.
- **The dictée is split and the split is proved.** `DICTEE_NEAR_MISS` pairs each
  of the nine targets with the near miss a learner would actually make and runs
  both through the real `normalizeFr`: **six are graded on the thing this lesson
  teaches and three are not.** The three are in the dictée anyway, because the
  tile bank is built from the target's own letters, so a `ç` and an `è` are in the
  learner's hand and have to be placed. The claim fails rather than goes stale if
  `normalizeFr` ever changes.

### Questions I wanted and could not write

- **A `typeIn` for `nous commençons`.** The single most useful production question
  in the lesson. It is an mcq in r5 instead.
- **An `errorSpot` on « Elle achete du pain. »** Same fold, same problem. Every
  accent question is an mcq.
- **A `listenChoose` on `nous mangeons` against `je mange`.** Answerable, but it
  tests `a2.01`'s endings rather than this lesson, because the stem sound is
  identical in both. The one `listenChoose` is `je préfère`, the only place the
  ear hears the stem itself move.
- **A `speak` question scored on the cedilla.** Authored, and the recogniser could
  return `commencons` and score full marks. It stays because saying the sentence
  is worth doing; its `why` does not claim the spelling was checked.

---

## 5. Did "two mechanisms, not four" survive the real verb lists?

**Yes, and it came out stronger than the brief drew it.**

The brief treats `-eler`/`-eter` as one pattern with an unpredictable output and
`é_er` as another, which reads as three mechanisms wearing two coats. Measured
against the forms, they are one mechanism and the `-eler`/`-eter` split is not a
second: `j'appelle`, `j'achète`, `je jette` and `je préfère` all land on the
**same open è**, in the **same four cells**, for the **same reason**. The doubled
consonant and the accent are **two spellings of one sound**.

That reframes the trap rather than softening it. The learner is not choosing
between two rules; they already know the sound. They are choosing how it is
written, on a list of five verbs.

`protéger` is the proof, and `s12-both` exists for it: it is `é_er` **and**
`-ger`, so `je protège` runs one mechanism and `nous protégeons` runs the other. A
learner holding four lists has nowhere to put that verb.

`MECHANISMS` is derived from `PATTERNS` rather than typed, and the batch fails if
it is ever anything but two, or if the four patterns do not split two and two.

---

## 6. Which verbs are memorised rather than derived

**Five, and they are the only memorised thing in the lesson.**

```
double:  appeler · rappeler · jeter
accent:  acheter · geler
```

`s11-lists` presents them as two short lists and says outright that they have to
be learnt, and immediately beside them puts the `é_er` group with a check whose
answer is *"No, the é always opens to è when the ending is silent"* — so the
learner sees the boundary between the derived part and the remembered part rather
than being left to assume everything is one or the other.

Everything else is derived: the `-ger` and `-cer` verbs from the letters, the
`é_er` verbs from where the stress lands, and the lesson says so on every screen
that shows them. The reference sheet `sheet.a2.09.lists` is the lookup.

---

## 7. What was NOT restated differently from a2.01

Confirmed, and enforced:

- **The endings.** `s04-recap` imports `ENDINGS`, `SILENT_ENDINGS` and
  `AUDIBLE_ENDINGS` from `data/verbes-er-corpus.ts` and prints those. `a2.09`
  cannot come to disagree with `a2.01` about what the six endings are.
- **`nous` versus `on`.** `NOUS_ON` is imported from `data/verbes-er-terms.ts` and
  quoted verbatim in `s07-nouscell`. Not paraphrased. The batch, the merge and
  the test all fail if the string stops appearing.
- **The back-reference.** `A201_BACKREF` is `'a2.01'` and it is named in five
  sections. The brief asked for it explicitly and the mutation test confirms
  removing it goes red.
- **The register position.** `s07-nouscell` sits *on top of* `a2.01`: it adds the
  fact `a2.01` did not have a reason to state, which is that `on` never reaches
  the cell where the `-ger`/`-cer` change lives. It does not restate the register
  claim in its own words.

---

## 8. The lesson, the acts, and the weight

**24 missions**, house range 19 to 24.

```
act1  The note you rewrote                     3   s01 s02 s03
act2  What has not changed                     2   s04 s05
act3  The spelling changes so the sound...     8   s06 s07 s08 s09 s10 s11 s12 s13
act4  -eler against -eter                      3   s14 s15 s16
act5  Out in the world                         4   s17 s18 s19 s20
act6  Prove it                                 4   s21 s22 s23 s24
```

**The Owns act is EIGHT against the paradigm act's TWO.** The base paradigm is
`a2.01`'s and gets one recap mission plus the grid; re-teaching it would have
spent a third of the lesson on last week. The test asserts the ratio, not just
the presence.

**Reframe:** *"The spelling changes so the sound does not."* The brief's own
candidate, unchanged. Carried in nine sections (ten appearances with the field).

Rejected, and recorded in `verbes-er-exceptions-terms.ts`:

- *"Some -er verbs are irregular."* Rejected as **false**, not merely weak. Not
  one verb here is irregular; every change is the regular system keeping a sound
  where it was. `s03-notirregular` names it as false outright, and a test asserts
  the word is never used on a teaching surface without being denied.
- *"Four patterns: -ger, -cer, -eler/-eter, é_er."* A table of contents. It says
  what to memorise and nothing about what to do at the moment of writing.
- *"Keep the sound, change the letter."* The closest miss. Rejected because the
  agent is wrong: the learner is not keeping the sound, the language is.

**Layout decisions, and why:**

- A `table` at layer `core` is a `table-in-core` density failure, so the full
  four-pattern grid is in `sheet.a2.09.patterns` and the **in-flow grid is
  `s05-grid`, a `cheatSheet`** — which `LessonSection.tsx:201` routes to
  `CheatSheetView` and which draws its rows. a1.13's known defect is a
  `cheatSheet` *inside* a sheet, where `ReferenceSheet.tsx` draws only
  teach/letterGrid/table. The test pins both renderers.
- **`s10-pair` is the `-eler`/`-eter` contrast as two columns of one `tapTable`**,
  six rows: `['Person', 'appeler', 'acheter']`. That is the layout the brief asked
  the test to assert, and the test asserts the section, the column names, the row
  count, that both spellings of the open è are present, and that the `nous` and
  `vous` rows show BOTH verbs unchanged — which is the half of the rule a learner
  is least likely to expect.
- Nothing is `xl`. Every deck here carries explanation and `xl` is a 12-word cap
  on every string in the section.

**Quiz:** 5 rounds, 30 questions, every one with a `why` and a live `ref`.
Formats: 12 mcq, 11 typeIn, 4 errorSpot, 1 listenChoose, 1 tapSilent, 1 speak.
Answer spread `0:3 1:4 2:4 3:2` over 13 closed; in-mission `0:4 1:6 2:6 3:1` over
17, which nothing shuffles. Five error triggers, five drills, each round leading
on a different trigger so all five can fire.

---

## 9. Tests, gates, mutations

```
node --test  before  2672 pass, 0 fail    measured, not carried over
             after   2773 pass, 0 fail    +101
npx tsc --noEmit     ealch-v2 clean, ealch-admin clean
pnpm content:parity  one divergence, b2.01.l1 db-only, and it exits saying
                     nothing in the seed is at risk. a2.09 is not named.
```

`a2-09-er-exceptions.test.ts` is 101 tests. **Five mutations, each broken on
purpose and confirmed red** (the three the brief required, plus two):

| mutation | result |
|---|---|
| M1 strip the accented column from `s10-pair` | RED — *both spellings of the open è are on that one screen* |
| M2 replace a pattern's reason with a bare statement of form | RED — three tests: the reason sweep, the grid, the sheet |
| M3 remove the `a2.01` back-reference | RED — the section sweep, the recap, the source constant |
| M4 leak `je paie` into the flashcards deck | RED — *no -yer form reaches a production surface* |
| M5 break the `mange`/`mangeons` stem-sound identity | RED **in the batch**, before the apply |

Two mutations were additionally **refused by the merge script before the test
could run** (an earlier form of M1 produced a duplicate quiz option; an earlier
form of M3 pushed a body over the 45-word core cap). That is a second layer
working, and it is recorded rather than hidden.

**The lesson's own guard fired on its own content once**, which is worth naming:
`v1` shipped `« Nous commencions à huit heures. »` as a distractor in the cedilla
question, and `commencions` is the **imperfect**. The test that forbids reaching
into a tense the trail has not taught went red. The option is now
`« Nous commençon à huit heures. »`, wrong in the way this lesson actually
teaches, and the version counter moved to **v2** rather than the guard being
relaxed.

---

## 10. Device verification, and the half I did not do

Metro on 8082, bundle pre-built on the host (22.8 MB, HTTP 200), Pixel 6
`21041FDF600BMN` over `adb reverse`.

**Verified on the device:**

- `lessonoverview?key=a2.09.l1`: eyebrow **A2 · LEÇON 02**, title *-ER Verbs: The
  Exceptions*, sub *« Les verbes en -ER : exceptions »*, glyph **Ç**, 29 min,
  difficulty 3/5, both intros, **24 missions**, *Prerequisite: Regular -ER Verbs*.
- The full mission list, all 24, with the right mechanic label on each. **`s05-grid`
  draws as MÉMO**, so the `cheatSheet` really does get its own mechanic in the
  flow rather than falling through.
- Two mission titles ellipsise in the list ("The Letter That Protects A ...",
  "One Cell In Six, And Mostly On P..."). Normal for the list; `a2.01` does the
  same.

**Verified on the host instead of the device:** all 17 target strings present in
the served bundle, and every one of the 20 section types this lesson uses has a
`case` in `MissionSection.tsx` or `LessonSection.tsx`.

**NOT verified, said plainly:**

- **The 24 mission cards themselves.** A2 is behind the `levels.all` paywall in
  the dev build and `app/lesson.tsx` gates every route in. Opening them needs a
  local entitlement written into the app's SQLite database on Paul's phone, and
  the ledger says to ask first. I did not ask and did not do it. **So no card in
  this lesson has been seen at its real size**, and the class of defect that costs
  sessions here is exactly the one tests cannot see: a card that runs past the
  fold and takes its buttons with it.
- The break card is the highest risk of those. It is authored to `a2.01`'s
  MEASURED Pixel 6 budget (heading ≤ 13 chars, glosses ≤ 24, body ~26 words,
  coach ~8) and a test asserts all four numbers, but a2.01 needed **three** device
  passes on that one card and every pass found something no test could see.
- A toast reading *"Can't perform a React state update on a comp…"* appeared once
  on first paint after the deep link. It did not recur, and it did **not** appear
  on `a2.01`'s overview reached the same way, so it looks like a
  navigation/unmount warning rather than anything this lesson introduced. I did
  not chase it to a root cause.

---

## 11. Handover

- `content:verbes-er-exceptions` is in `ealch-admin/package.json`.
- The merge carried **14 rows** through the seed cut; without it the verb cards
  would draw empty.
- `seed.version` untouched at 23. Publishing is blocked and is not part of a
  lesson build.
- The ledger is amended: `a2.09`'s block is marked taken, the running row count
  for `fr.a2.verbes` is recorded so seq 3 has a figure to check against, the
  diacritic finding in §4 is written into §5 of the ledger because it binds every
  later lesson that teaches an accent, and the stale baseline figures are
  corrected with the note that they were re-measured rather than carried forward.
