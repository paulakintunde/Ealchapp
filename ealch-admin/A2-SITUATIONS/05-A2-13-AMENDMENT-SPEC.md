# a2.13 amendment spec — the four "nothing else from that family" strings

**Status: SPECIFICATION ONLY. Nothing here has been applied.**
`seed.json` has not been edited. No publish, no migration, no database write has been
run. This file exists so the change can be applied later, once, under supervision, by
somebody who can also run the publish.

**Authority.** `12-DECISIONS-FOR-PAUL.md` item 1, **ACCEPTED by Paul 2026-08-15,
option A**. a2.13's boundary claim is softened so it points forward without naming the
form. a2.13's teaching does not change.

**Why it is needed.** `pourriez-vous` is already published upstream of a2.13, in three
SONS rows a learner meets long before it (`fr.sons.alphabet.219`, `.282`, `.422`).
a2.13 is not defending a boundary; it is describing one that was false when it shipped.
a2.29 then teaches the softener ladder as fixed lexis without contradicting a shipped
lesson.

---

## 1. Where the strings are

Measured against `ealch-v2/src/content/seed.json` on 2026-08-15, at commit `4ca3e6c`,
branch `feat/sons-course`.

`a2.13.l1` is **`lessons[47]`** in that file, and it holds **32 sections**. The array
index is given for orientation only; **address every edit by `id`, never by index**, so
that a concurrent merge landing another lesson above it cannot move your edit onto the
wrong section.

| # | section | type | field | JSON path (by id) | array path |
|---|---|---|---|---|---|
| 1 | `s17-polite` | `groupDrill` | `say` | `lessons[id=a2.13.l1].sections[id=s17-polite].say` | `lessons[47].sections[16].say` |
| 2 | `s17-polite` | `groupDrill` | `groups[0].check.why` | `…sections[id=s17-polite].groups[0].check.why` | `lessons[47].sections[16].groups[0].check.why` |
| 3 | `s24-notmine` | `cardDeck` | `cards[1].body` | `…sections[id=s24-notmine].cards[head="Where voudrais comes from"].body` | `lessons[47].sections[23].cards[1].body` |
| 4 | `s31-quiz` | `quiz` | round 4, question 7, `why` | `…sections[id=s31-quiz].rounds[3].questions[6].why` | `lessons[47].sections[30].rounds[3].questions[6].why` |

`s17-polite` is `layer: 'core'`, `size: 'lg'`. `s24-notmine` is `layer: 'core'`,
`size: 'lg'`, `render: 'deck'`, three cards; the target is the **middle** card, headed
*"Where voudrais comes from"*, labelled *"The polite family"*. `s31-quiz` is
`layer: 'core'` with six rounds; round 4 is `rounds[3]` and question 7 is
`questions[6]`, the `typeIn` whose `answer` is `voudrions`.

### The current strings, verbatim

**1. `s17-polite.say`**

> Two cards, and that is the whole of this family you are getting. Learn them the way you learned bonjour.

**2. `s17-polite.groups[0].check.why`**

> No. It belongs to a family this course has not reached and its name comes much later. Two forms, learned as pieces, and nothing else from that family until then.

**3. `s24-notmine.cards[1].body`**

> You have two forms of it and they are the two you need. The family they belong to, and what it is for, is past the end of this level entirely. Nothing here needs it.

**4. `s31-quiz.rounds[3].questions[6].why`**

> The only other one worth carrying. Two fixed forms, and nothing else from that family until much later.

### A fifth string of the same shape, and it does NOT need amending

`s31-quiz.rounds[3].questions[3].why` (round 4, question **4**, the `mcq` "Can you
build voudrais from the forms in this lesson?") reads:

> No. It belongs to a family this course has not reached, and two forms of it is all you are carrying for now.

**Leave it alone.** *"all you are carrying for now"* is already a statement about the
present, not a promise about the rest of the level, so it does not contradict a2.29.
Editing it would be a fifth string of churn for nothing.

`Lesson.terms.thePolite.body` is in the same position: *"Its proper name and its whole
family come much later"* already points forward rather than closing the door. **Do not
touch it**, and note that `terms.thePolite` is one of the two surfaces the "fixed form"
test reads (see §3), so it is the last thing you want to disturb.

---

## 2. The replacement strings

Each replacement keeps a2.13's teaching intact (two fixed forms, learned whole, not
built from anything in the lesson) and moves only the boundary claim, from *"and
nothing else, ever"* to *"and the family and its name come later"*. None names a form.

**1. `s17-polite.say` → 30 words**

> Two cards, and they are the two you carry from here. The family they come from, and what it is called, comes later. Learn them the way you learned bonjour.

**2. `s17-polite.groups[0].check.why` → 31 words**

> No. It belongs to a family this course has not reached and its name comes much later. Two forms, learned as pieces, and the rest of that family waits until then.

**3. `s24-notmine.cards[1].body` → 41 words**

> You have two forms of it and they are the two you need. The family they belong to, and what it is for, comes later than this level. A couple more pieces like these turn up in a situation, learned whole.

**4. `s31-quiz.rounds[3].questions[6].why` → 19 words**

> The only other one worth carrying. Two fixed forms now, and the family they come from waits until later.

### What each one changes, and what it deliberately does not

| # | the promise before | the promise after | teaching unchanged |
|---|---|---|---|
| 1 | "that is the whole of this family you are getting" | "they are the two you carry **from here**", the name "comes later" | still two cards, still learned like `bonjour` |
| 2 | "nothing else from that family until then" | "the rest of that family **waits** until then" | still "No", still not buildable from the lesson, still "learned as pieces" |
| 3 | "past the end of this level entirely. Nothing here needs it." | "comes later than this level. A couple more pieces like these turn up in a situation, learned whole." | still two forms, still not the family's name, still handed forward rather than taught |
| 4 | "nothing else from that family until much later" | "**now**", and the family "waits until later" | still "two fixed forms", still the only other one worth carrying |

**String 3 is the only one that admits new lexis exists**, and it does so in the
weakest terms the constraint allows: *"a couple more pieces like these turn up in a
situation, learned whole"*. It names no form, no unit and no family name. It says
"situation" rather than "a2.29" on purpose: a2.29 has not shipped, and a card that
cites an unbuilt unit is a promise the product cannot keep. **If a2.29 ships and
somebody later wants the card to cite it by unit id, that is a second, separate
amendment** and it must re-run every check in §3.

**None of the four names a conditional form.** `pourriez`, `aimerais`, `voudrait`,
`pourrait`, `devrait` and the other eleven entries of `FORBIDDEN_CONDITIONAL` appear in
none of them. That is the constraint that decides the wording, and it is checked in §3.

---

## 3. Verification against `a2-13-modaux.test.ts`

The suite is `ealch-v2/src/content/a2-13-modaux.test.ts`, 1,145 lines, read
2026-08-15. Every test below either reads one of the four strings or reads a surface
one of them belongs to. Each is named with why it stays green.

### 3.1 The test the constraint comes from

**`:660` — "both polite forms ship, and nothing else from that family does"**

```ts
const everything = strings(L!).join('  ');
for (const f of POLITE_FORMS) ok(hasPhrase(everything, f), ...);
for (const f of FORBIDDEN_CONDITIONAL) ok(!hasPhrase(everything, f), ...);
```

`strings()` (`:290`) walks **every string in the lesson**, including `say`, `why` and
card bodies, so all four replacements are in scope.

- `POLITE_FORMS = ['voudrais', 'voudrions']` (`:248`). Both survive: `voudrais` is in
  `s24-notmine`'s card **head** (untouched), in `terms.thePolite` (untouched) and in
  both quiz questions' `q` (untouched); `voudrions` is the round 4 question 7
  **answer** and `accept` list (untouched). **The amendment removes neither.**
- `FORBIDDEN_CONDITIONAL` (`:249-252`) is the fourteen forms `voudrait`, `voudriez`,
  `voudraient`, `pourrais`, `pourrait`, `pourrions`, `pourriez`, `pourraient`,
  `devrais`, `devrait`, `devrions`, `devriez`, `devraient`, `aimerais`. **All four
  replacements were run through `hasPhrase` against all fourteen: zero hits.**

**Verdict: green.**

### 3.2 The test that makes teaching the forms legal at all

**`:668` — "and they are SAID to be fixed forms"**

```ts
const text = [...prose(section('s17-polite')), ...prose(L!.terms?.thePolite)].join('  ').toLowerCase();
ok(/fixed form|learn(ed)? (it |them )?whole|learned whole/.test(text), ...);
```

Reads exactly two surfaces, and the amendment touches one of them. The regex is
satisfied three times over by strings the amendment does **not** change:

- `s17-polite.title` = "Two Forms, Learned **Whole**"
- `s17-polite.groups[0].check.opts[2]` = "No, it is a **fixed form** to learn whole"
- `terms.thePolite.body` = "It is one **fixed form**"

Replacement 1 does not remove any of them, and `terms.thePolite` is not touched.

**Verdict: green. Do not, in any later revision, drop the word "whole" from the section
title or from `opts[2]`.**

### 3.3 The test that pins the boundary card's existence and its hand-off

**`:719` — "but the boundary card DOES hand a2.14 the other half of 'can'"**

```ts
const s = section(BOUNDARY_SECTION);           // 's24-notmine'
ok(s, ...);
ok(hasPhrase(prose(s).join('  '), A214), ...); // 'a2.14'
```

The amendment edits `cards[1].body` only. **`cards[0].body` carries "That split is
a2.14"** and is untouched, so the section still names `a2.14`. The section is not
removed, the deck is not reordered, and the card count stays at three.

**Verdict: green. The apply procedure MUST edit `cards[1]` in place. Reordering the
deck or dropping a card would break this test and change what the lesson claims.**

### 3.4 The test that would fire if a replacement reached for the wrong verb

**`:703` — "savoir and connaître appear on NO production surface"**

Runs `SAVOIR_FORMS` (`:253`) plus `nager` over every section **except**
`BOUNDARY_SECTION`. So replacements 1, 2 and 4 are in scope; replacement 3 is exempt by
construction, which is a trap rather than a licence.

**All four replacements were run against all thirteen strings (`savoir`, `sais`,
`sait`, `savons`, `savez`, `savent`, `connaître`, `connais`, `connaît`,
`connaissons`, `connaissez`, `connaissent`, `nager`): zero hits.** Note that the
natural English phrasing *"what you know"* is safe, but any French gloss reaching for
`savez` would not be. None does.

**Verdict: green.**

### 3.5 The A2 jargon guard, which bans the family's name outright

**`:810` — "no grammar jargon reaches a learner surface, including the intro"**

```ts
for (const j of JARGON) ok(!hasPhrase(learnerText(), j), ...);
for (const j of JARGON) ok(!hasPhrase(L!.intro!, j), ...);
```

`JARGON` (`:281-286`) is nineteen entries and **includes `'conditional'`**, alongside
`conjugation`, `conjugate`, `conjugated`, `infinitive`, `infinitives`, `indicative`,
`subjunctive`, `morpheme`, `inflection`, `paradigm`, `orthography`, `phoneme`,
`modal verb`, `modal verbs`, `auxiliary`, `first person`, `second person`,
`third person`.

`learnerText()` (`:323`) joins sections, sheets, terms, drills, `intro`, `overview` and
`acts`, so all four replacements are in scope. **All four were run against all nineteen
entries: zero hits.** This is the reason every replacement says *"the family"* and
*"what it is called"* rather than naming it. `hasPhrase` (`:310`) is accent-aware and
treats `'`, `’` and `-` as word characters, so it would catch a possessive form; there
is none to catch.

**Verdict: green.**

### 3.6 The two house-rule guards

**`:805` — "no U+203F anywhere, and no em dash on a learner surface".** No replacement
contains `‿` (U+203F) or `—` (U+2014). Every dash-shaped pause in the four strings is
a comma or a full stop. **Green.**

**`:817` — "'honest' is banned from authored content".** Checked with the same
`hasPhrase`; none of the four contains `honest` or `honesty`, and none contains
`dishonest` either, which the house `\b` boundary cannot see (the a2.06 finding) but
which this suite's `hasPhrase` also would not catch. **Green, and clean on the
substring too.**

### 3.7 The structural tests, which the amendment must not disturb

| test | line | why it stays green |
|---|---|---|
| "the spine is exactly these thirty-two sections, in this order" | `:347` | no section added, removed or reordered; `EXPECTED_SECTIONS = 32` holds |
| "IT IS THE LARGEST LESSON IN THE CORPUS" | `:352` | section count unchanged |
| "seven acts, and the Owns act is the heaviest alone" | `:362` | act membership unchanged |
| "every cited unit is findable by an accent-aware search" | `:725` | `CITED_UNITS` is `a1.01, a2.01, a2.02, a2.11, a2.14`; none of the four strings carries a unit citation today and none of the replacements adds or removes one |
| "a1.01 is paid back by name" | `:677` | neither the citation nor a1.01's quoted reframe lives in these four strings |
| "il faut ships as recognition only" | `:736` | no replacement contains `fallait`, `faudra`, `faudrait` or `falloir` |
| "a2.14 still rests on this unit" | `:1136` | reads the spine and a2.14's prereq, not these strings |
| the quiz-shape tests (`EXPECTED_QUESTIONS = 45`, `EXPECTED_ROUNDS = 6`) | `:274-275` | replacement 4 edits a `why`, not a question, an option or an answer |

**No test in the file asserts any of the four promise strings verbatim.** Confirmed by
reading all 1,145 lines on 2026-08-15. **So the amendment needs no test change.** Re-run
that check before applying: if somebody has since pinned one of these strings, the pin
must be updated in the same commit.

### 3.8 The respelling and nasal guards

`hasPlainNasalFor` is imported from `density.logic.ts` and used at `:753`, `:759`,
`:761` and `:777`, and in every case it runs over a **corpus row's `fr` against that
row's `respell`** (`THE_EIGHTEEN`, `NASAL_REPAIRS`, `RESPELL_ADDITIONS`). **It never
reads a `say`, a `why` or a card body.** The four replacements author no French, carry
no bracketed respelling and touch no corpus row, so no nasal or respelling guard can
see them.

The same holds in the density validator: its `nasal-convention` rule (`density.logic.ts`
`:452`, `:462`) fires on strings that **look like a respelling**, which is detected by
bracket and notation-key shape. None of the four replacements contains a bracket.

**Verdict: out of scope, and deliberately so.**

### 3.9 The density validator, which the suite runs for real

**`:341` — "it passes the real density validator"** calls `validateDensity(L, ids)`.
Two of its rules read these strings:

- **`core-words`, limit 45** (`density.logic.ts` `:59`, `:370-375`). It counts words
  **per authored field** on a `layer: 'core'` section, and its skip set (`:371`)
  excludes `say` but **not `why` and not a card `body`**. Measured with the
  validator's own `wordCount`:

  | field | before | after | limit |
  |---|---|---|---|
  | `s17-polite.say` | 20 | **30** | not counted (`say` is skipped) |
  | `s17-polite.groups[0].check.why` | 30 | **31** | 45 |
  | `s24-notmine.cards[1].body` | 35 | **41** | 45 |
  | `s31-quiz.rounds[3].questions[6].why` | 18 | **19** | 45 |

  **All three counted fields stay under 45. String 3 is the tight one at 41 and it has
  four words of headroom; do not pad it.**

- **`em-dash`** (`:546-549`) walks every string in the lesson. None of the four
  contains one.

- **`reframe`, minimum 3 sections** (`:551-557`). The reframe is *"One verb changes for
  the person, and the next one never does."* and it appears 23 times in the lesson.
  **None of the four strings carries it**, so the count is untouched.

- **`xl-words`, limit 12** does not apply: `s17-polite` and `s24-notmine` are
  `size: 'lg'`, and `s31-quiz` carries no `size`.

**Verdict: green.**

### 3.10 The schema validator

**`:336` — "it validates against the real schema"** calls `validateLesson`. All four
edits replace a string with a string. No field is added, removed or retyped.

**Verdict: green.**

---

## 4. Apply procedure

**None of this has been done. It is the recipe, not a record.**

### 4.1 Before you touch anything

1. **Re-read `a2-13-modaux.test.ts` for a verbatim pin on any of the four strings.**
   §3.7 says there is none as of 2026-08-15. If one has appeared since, it changes in
   the same commit.
2. **Run the suite green first**, so you know the baseline is green and any red
   afterwards is yours: `cd ealch-v2 && node --test src/content/a2-13-modaux.test.ts`
   (or the repo's usual runner). Record the passing test count.
3. **Diff the database body against git before you plan any publish.** This is the
   2026-07-31 incident rule and it is the single largest risk here: **`seed.json` can
   run AHEAD of Postgres.** Read the live `a2.13.l1` body out of the database and
   compare it to the four current strings above. If the database holds different text,
   stop: somebody has published over a seed-direct edit, or a seed-direct edit is
   pending, and the amendment must be planned against whichever is authoritative.
4. **Run `pnpm content:parity`.** `content:publish` is currently **blocked**: it would
   DELETE `sons.09.l1`, which exists only in the seed. Parity names what publish would
   destroy. Do not run publish until parity is clean or the masterclass unblock has
   been applied deliberately.

### 4.2 The edit

5. **Edit `seed.json` by section `id`, not by array index.** Four string replacements,
   nothing else. `lessons[47]` is orientation only.
6. **Keep the file's canonical formatting**: `JSON.stringify(x, null, 2)`. A
   whole-file rewrite in that shape is safe; a huge diff on this file is usually a
   real change and not a reformat, so read the diff.
7. **`git diff` the file and confirm it shows exactly four changed strings.** If it
   shows more, something else was mid-flight and you have picked it up.
8. **NEVER `git checkout seed.json` to undo.** Reverting the file discards other
   authors' uncommitted lessons. If you need to back out, restore the four strings by
   hand from §1 of this file, which is why they are quoted here verbatim.

### 4.3 After the edit

9. Re-run `a2-13-modaux.test.ts` and the full content suite. Expect the same passing
   count as step 2.
10. **Publish and snapshot.** Amending shipped content is not done until the learner
    has it: a `content:publish` (once parity allows it) and an OTA snapshot. Note the
    house rule that **rollout 0 is not a fix** and only the live manifest says what
    learners actually have.
11. Commit the four strings and this spec together, so the reasoning travels with the
    change. `*.md` is gitignored in this repo, so this file needs `git add -f`.

### 4.4 Risks, named

| risk | why it is real | mitigation |
|---|---|---|
| **Postgres holds different text than the seed** | seed-direct authoring runs ahead of the database, and publish then overwrites silently | step 3, and do not skip it because the seed "looks right" |
| **`content:publish` deletes `sons.09.l1`** | it is seed-only and publish is destructive on absence | step 4, parity before publish |
| **A concurrent lesson build moves `lessons[47]`** | A2 builds have raced for ids twice already | edit by `id`, step 5 |
| **A reverted `seed.json` eats another author's work** | it has happened | step 8, restore by hand |
| **The amendment ships without a snapshot** | the seed changes, learners do not | step 10 |
| **A later revision cites a2.29 by unit id** | a2.29 has not been authored; the citation would be a promise the product cannot keep, and `CITED_UNITS` at `:256` would then need a new entry | out of scope for this amendment; §2 says so explicitly |

---

## 5. What this spec does NOT authorise

- No corpus row is authored, imported or edited.
- No `ExamTask` row and no `Scenario.exam` value, per decision item 4.
- No change to a2.13's sections, acts, quiz shape, item ids, terms, sheets or drills.
- No change to `terms.thePolite`, to `s31-quiz` round 4 question 4, or to any of the
  three other cards in `s24-notmine`.
- No test file edit, unless step 1 finds a pin that did not exist on 2026-08-15.

---

*This file is `.md` and therefore gitignored in this repo. It needs `git add -f` to be
tracked. Nothing here has been applied to the seed, the database or a release.*
