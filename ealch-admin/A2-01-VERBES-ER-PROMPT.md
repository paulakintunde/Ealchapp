# Build a2.01 "Les verbes en -ER"

Trail seq **1** of 32. The foundation of the whole A2 level: seven of the other nine
lessons in batch 1 declare this unit as a prerequisite, directly or through `a2.02`.
**Build it first**, and let the other nine read it before they start.

You are authoring an A2 lesson end to end. Not drafting content for review: authoring
it, wiring it, proving it, and leaving it render-ready. You have latitude on the
teaching. You have none on the gates.

**Read first:**

1. `ealch-admin/A2-BUILD-DOCTRINE.md`, all of it. Everything shared lives there.
2. `ealch-admin/A1-BUILD-INVARIANTS.md`, referenced throughout the doctrine.
3. `ealch-admin/scripts/data/etre-lesson.ts` and `avoir-lesson.ts` (a1.06, a1.07), the
   only shipped verb lessons in the project and your closest structural model.
4. `ealch-admin/scripts/data/pronoms-sujets-*.ts` (a1.05), your declared prerequisite.
   The learner arrives with the six subject pronouns and nothing else about verbs.
5. `ealch-admin/scripts/author-verbes-batch.ts` header, which documents the `verbes`
   theme you are most likely writing into.

---

## Identity

```
a2.01   Les verbes en -ER                                  seq 1
  sub:    the full system — endings & 30 common verbs
  canDo:  Can conjugate any regular -er verb in the present and use it in a real sentence
  prereqUnitIds: ['a1.05']
  lessonIds: []                                            you are filling this
```

Do not change `title`, `sub` or `canDo`. The Den advertises all three. **Copy them
byte-for-byte from the probe's unit dump, not from this file** — these were transcribed
from the spine source and a retyped apostrophe has made a batch guard fire before.

---

## Pre-flight

```bash
cd ealch-admin
pnpm corpus:probe --unit a2.01 --theme verbes,verbes-essentiels
pnpm corpus:probe --words "parler,regarder,écouter,aimer,habiter,travailler,manger,commencer,appeler,préférer"
pnpm corpus:probe --tokens "je parle,nous parlons,ils parlent"
cd ../ealch-v2 && node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts" 2>&1 | tail -6
```

Probe with real orthography: the probe does not strip accents, and it will report
`préférer` and `écouter` absent if you strip them. It adds articles for you, so give
bare forms.

If the probe says a theme holds rows, you are **importing, not authoring**. The
`author-verbes-batch.ts` header claims eight infinitives were already placed as
vocabulary items. Confirm the list and import them.

---

## The teaching problem

The learner arrives with six subject pronouns and no verb system at all. They leave able
to conjugate a verb they have never seen. That is the largest single jump in the app,
and it is not the jump the `sub` describes: thirty verbs is a word list, and a word list
is the cheap half of this lesson.

### Owns: the sound

`-e`, `-es` and `-ent` are all silent. `je parle`, `tu parles`, `il parle` and
`ils parlent` are four spellings and one sound.

```
je parle       silent -e        \
tu parles      silent -es        |  one sound
il parle       silent -e         |
ils parlent    silent -ent      /
nous parlons   audible          -- the pronoun is not doing the work here
vous parlez    audible          --
```

A learner taught the table has been taught to **write** the verb. They still cannot hear
who is speaking, and in real conversation the pronoun is carrying the person on its own.
That is the fact this lesson exists to install, and no other lesson in A2 is positioned
to install it.

It also pays off twice later: `a2.21` (silent participle agreement) and `a2.23` both
depend on the learner already knowing that French writes distinctions it does not say.
Word the reframe so those two can quote it.

### The reframe candidate

> **Four of the six forms sound the same, so the pronoun carries the person.**

Short enough to run mid-sentence, true of the whole lesson, and verifiable the moment
the learner hears any French. Record what you rejected. "Endings are silent" was
considered and is weaker: it states a fact without telling the learner what to do about
it, and the doctrine's test for an A2 reframe is whether it can be applied between the
subject and the verb.

### This lesson introduces `nous` versus `on` for the entire level

`nous parlons` is one of only two audible forms, which makes it structurally important
here, and it is also the form a learner will almost never hear in speech, because
spoken French uses `on`. Both facts are true and the lesson has to hold them together.

State it once, plainly, in one mission. **Every other A2 lesson inherits your wording.**
Write it so it can be inherited: do not bury it in an example, and do not hedge.

### What the learner arrives with

`a1.05` gave them the six subject pronouns, including the `tu`/`vous` register split
that runs through the whole product. That transfers exactly. Name it as a rule they
already have rather than teaching it cold.

`a1.06` and `a1.07` gave them `être` and `avoir` fully conjugated. Those are the two
verbs that look nothing like this system, and the learner may reasonably conclude every
French verb is memorised individually. **Say out loud that they are not.** The whole
point of a regular verb is that it is derived, not learnt.

---

## The trap

**Learners stress the ending.** English puts weight on the verb's inflection; French has
nothing there to weigh. This produces a very recognisable accent and it is a habit, not
a knowledge gap, so drill it as a habit: `groupDrill`, production, against the clock.

**Second, and defer it:** `-er` infinitives and `-é` past participles are homophones
(`parler` and `parlé` are both /paʁle/). That collision belongs to `a2.05` (seq 16) and
must not be taught here. But do not author corpus sentences where the two are ambiguous,
because `a2.05` will import from this theme and needs clean evidence.

---

## What is left to neighbours

**Every stem change is `a2.09`** (seq 2), and every stem-changing verb is an `-er` verb,
so the temptation is total. `manger`, `commencer`, `appeler`, `préférer`, `acheter`,
`payer`, `essayer`, `jeter` may appear as context. **None may be drilled, and none may
be among your thirty.** Choose thirty verbs with clean stems.

This is a real constraint and it costs you the most frequent verb in the set (`manger`).
Take the cost. `a2.09` is the lesson immediately after and it has nothing else to teach.

**`aller` is not a regular -er verb** despite its ending. It is `a2.02` (seq 5). One line
naming it as a trap is the ceiling.

---

## Layout and scene

Layout rules are in `A1-BUILD-INVARIANTS.md` §2. Specific to you:

- **The four silent forms belong on one screen**, in one section, with the two audible
  forms beside them. Split across four missions, the contrast is invisible and the
  lesson becomes a table. **This is the layout the test must assert.**
- One `table` for the paradigm, one `tapTable` to make it audible, and then stop.
- `listening` carries the Owns. Give it real weight: the learner hears a sentence and
  identifies the person from the pronoun, because the verb cannot tell them.
- A reference sheet with the ending set. It is what a learner returns to during `a2.09`,
  `a2.10`, `a2.11` and `a2.05`. Wire the `sheetId` early, and verify on device that its
  contents render, not just its title.

**The scene:** somebody who knows the verb and stalls on the form. Four words in, the
sentence stops. Nobody corrects them, nobody is annoyed, the other person just waits and
then moves on without the thing that was being asked for. Extract beats to a named
`SCENE_BEATS` const, prose at `md`, the choice and the break at `lg`, each with its own
`audio`, break body between 24 and 40 words.

---

## Quiz notes

General rules, the `fold()` limits, the mcq ceiling, the 40% answer-slot cap and the
drill-reachability trap are in `A1-BUILD-INVARIANTS.md` §4.

- **`listenChoose` has exactly one job here: proving the ear cannot separate the four
  silent forms.** Use it where that is the point. Do not use it to test which form is
  correct, because the correct form is inaudible and the question would certify a bug.
- **`typeIn` is your strongest format**, because the whole lesson is a spelling
  distinction the ear cannot make. This is the format that tests the Owns.
- No free-text format can test a capital letter, and no ear question can test a silent
  ending. Both apply to you. Say which questions you wanted and could not write.
- Every question needs a subject in the stem. "Which ending?" has no answer; "`Ils ___`
  (parler)" has exactly one.

---

## Wiring

Pattern and hazards are in `A1-BUILD-INVARIANTS.md` §5.

```
scripts/author-verbes-er-batch.ts       content:verbes-er
scripts/merge-verbes-er-into-seed.ts
scripts/data/verbes-er-{corpus,lesson,terms}.ts
ealch-v2/src/content/a2-01-verbes-er.test.ts
```

**Check for a collision with the existing `author-verbes-batch.ts` before naming
anything.** It exists and it is not yours.

Ids start at your ledger block. Confirm against the probe's NEXT FREE, and check the
**row count** after your apply, not just the highest id: a concurrent lesson can land
below your top and a highest-id check will not see it.

Do not hand-bump `seed.version`.

---

## Your test: `ealch-v2/src/content/a2-01-verbes-er.test.ts`

Always-required assertions are in `A1-BUILD-INVARIANTS.md` §6. Specific to this lesson:

- **The four silent-ending forms appear together in one section**, with `nous` and
  `vous` present as the audible pair. Assert the section, not just the strings. This
  contrast is the lesson and separating it is how the lesson decays into a table.
- **All thirty verbs are asserted individually by name**, not as a count. A count passes
  after somebody quietly swaps one out.
- **No stem-changing verb appears in any production surface** (decks, vocab, drills,
  quiz). Scope this to production surfaces, not to every string, or it fires on
  legitimate context and the next author deletes it.
- **`aller` is not conjugated anywhere.**
- **The `nous`/`on` statement exists and is a single section.** Later lessons quote it;
  assert it so a future edit that scatters it goes red.
- At least one `listening` item requires identifying the person from the pronoun.
- Import `hasPlainNasalFor` and assert your respellings. Check §3 of the invariants
  first for the two blind spots.

**Mutation-test.** Break the four-form contrast, drop a verb, leak `manger` into a
drill, un-repair a respelling. Confirm each goes red. An assertion that cannot fail is
worse than no assertion.

---

## UNVERIFIED

- **Whether the `verbes` theme already holds some of your thirty infinitives.** The
  `author-verbes-batch.ts` header says eight were placed. Not confirmed against
  Postgres. Probe before authoring a single row.
- **Whether `verbes` or `verbes-essentiels` is the right home**, and whether it can
  absorb nine batch-1 lessons. That is a ledger decision (doctrine §D) and it is not
  made here.
- Whether a1.06/a1.07 already state anything about `nous` versus `on`. If they do, match
  their wording rather than inventing a second one.
- The current baseline test count and the current mission-count range. Both move weekly.

If anything above disagrees with the probe, **the probe wins and the disagreement goes
in your report.**

---

## What to report

Everything in doctrine §F, plus:

- **the thirty verbs you chose**, and which frequent verbs you had to give up to keep
  `a2.09` intact
- **the exact `nous`/`on` wording you shipped**, because nine other lessons inherit it
- whether the ear-versus-spelling reframe survived contact, and what you rejected
- where in the lesson a learner sees all four silent forms on one screen
