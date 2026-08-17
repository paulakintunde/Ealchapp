# A2 build doctrine

Read by every A2 lesson author, once, before their own brief. The per-lesson briefs are
`ealch-admin/A2-<ID>-<TOPIC>-PROMPT.md` and none of them repeat what is here.

`*.md` is gitignored in this repo. `git add -f` anything you write.

---

## The trail, and which lessons are in flight

"A2 lesson N" means **`seq` N on the A2 trail**, the order a learner walks. It is not id
order; A2 ids were assigned before the trail was sequenced and the two disagree.
Verified against `ealch-admin/scripts/author-full-curriculum-spine.ts`.

**Batch 1, seq 1 to 10.** Nine verb lessons and one adjective lesson.

```
seq  id      title                                        prereq          brief
 1   a2.01   Les verbes en -ER                            a1.05           A2-01-VERBES-ER
 2   a2.09   Les verbes en -ER : exceptions               a2.01           A2-09-VERBES-ER-EXCEPTIONS
 3   a2.10   Les verbes en -IR                            a2.01           A2-10-VERBES-IR
 4   a2.11   Les verbes en -RE                            a2.01           A2-11-VERBES-RE
 5   a2.02   Irréguliers 1 : aller, venir, tenir          a2.01           A2-02-ALLER-VENIR-TENIR
 6   a2.12   Irréguliers 2 : faire, dire, lire            a2.02           A2-12-FAIRE-DIRE-LIRE
 7   a2.13   Irréguliers 3 : vouloir, pouvoir, devoir     a2.02           A2-13-MODAUX
 8   a2.14   Irréguliers 4 : savoir & connaître           a2.13           A2-14-SAVOIR-CONNAITRE
 9   a2.15   Irréguliers 5 : prendre, mettre, battre      a2.02           A2-15-PRENDRE-METTRE-BATTRE
10   a2.03   L'accord des adjectifs                       a1.14, a1.16    A2-03-ACCORD-ADJECTIFS
```

**Batch 2, seq 11 to 20.** Three mini-arcs: adjective/adverb finish, prepositions, and
the past tense.

```
seq  id      title                                        prereq          brief
11   a2.16   Beau, nouveau, vieux                         a2.03           A2-16-BEAU-NOUVEAU-VIEUX
12   a2.17   Les adverbes                                 a2.03           A2-17-ADVERBES
13   a2.04   Prépositions de lieu                         a1.21           A2-04-PREPOSITIONS-LIEU
14   a2.18   Prépositions de temps                        a1.12           A2-18-PREPOSITIONS-TEMPS
15   a2.19   Le futur proche                              a2.02           A2-19-FUTUR-PROCHE
16   a2.05   Le passé composé avec avoir                  a2.01, a1.07    A2-05-PASSE-COMPOSE-AVOIR
17   a2.20   Participes passés irréguliers                a2.05           A2-20-PARTICIPES-IRREGULIERS
18   a2.21   Le passé composé avec être                   a2.05           A2-21-PASSE-COMPOSE-ETRE
19   a2.22   Les verbes pronominaux                       a2.01           A2-22-PRONOMINAUX
20   a2.23   Pronominaux au passé composé                 a2.22, a2.21    A2-23-PRONOMINAUX-PASSE
```

**Batch 3, seq 21 to 23.** The pronoun block. Briefed 2026-08-15 against a real probe
(`scripts/_a2_preflight_pronouns.ts`), so unlike batches 1 and 2 these three carry
measured corpus claims rather than assumptions.

```
seq  id      title (db)                     sub (db)                    prereq   brief
21   a2.06   Direct Object Pronouns         Pronoms d'objet direct      a2.01    A2-06-PRONOMS-OBJET-DIRECT
22   a2.24   Indirect Object Pronouns       Pronoms d'objet indirect    a2.06    A2-24-PRONOMS-OBJET-INDIRECT
23   a2.25   The Pronouns Y and EN          Y et EN                     a2.24    A2-25-Y-ET-EN
```

All three write into **`pronoms-essentiels`** (486 published; `pronoms` bare is dead —
Corrections §14.2), and they are a strict chain: build 21, then 22, then 23.

**A2 runs to seq 35, not 32.** Measured against the spine 2026-08-15: `a2.33`
Démonstratifs (33), `a2.34` Pronoms possessifs (34), `a2.35` Bilan A2 (35). **Twelve units
remain after these twenty-three: seq 24 to 35**, the situational block plus comparatives,
demonstratives, possessive pronouns and the capstone. They are not briefed yet.

**Identity blocks in the batch-1 and batch-2 tables above are the spine's, and the spine
disagrees with the database.** See `A2-BRIEF-CORRECTIONS.md` §1 and §11: the database
`title` is English and its `sub` is the French name, and the spine's `sub` exists nowhere.
Take yours from §11, from your own brief's measured Identity block, or from the probe.

---

## §A. Read first, in this order

0. **`ealch-admin/A2-BRIEF-CORRECTIONS.md`.** ADDED 2026-08-12, after five lessons
   shipped. It holds the **twenty-one claims the shipped A2 briefs got wrong**, the
   measurements that replace them, the pre-flight for all sixteen remaining lessons
   (identity blocks, which vocabulary already exists, which themes are empty), and
   the two holes in the guards you are about to copy. **Every per-lesson brief has
   been corrected against it and says so.** Read it before your own brief, not
   after: it is the difference between finding these things yourself and being
   told them.

1. **`ealch-admin/A1-BUILD-INVARIANTS.md`.** The gates, the layout traps, the wiring
   pattern, the respelling convention and its blind spots, the quiz rules, the publish
   hazard, the house rules. It is written for A1 and every word holds for A2. It is not
   repeated here. §C is the delta, nothing more.
2. **`ealch-admin/A1-LESSON-GENERATION-PROMPT.md` Part 1**, the A1 doctrine. Read it so
   you know what you are departing from. §B is the departure.
3. **`ealch-admin/A1-LESSON-PROMPT-TEMPLATE.md`**, for brief discipline: measured
   numbers on both sides, an `UNVERIFIED` section, a "do not ship until" checklist.
   Your brief is deliberately thinner than an A1 brief, because A2 corpus state has not
   been measured. Measuring it is step 0 of your job.
4. **The newest shipped lesson**, whichever it is the day you start:
   `git log --oneline -20 -- ealch-admin/scripts/data/`. Read its `-corpus.ts` header
   first: that header documents how the previous brief's claims failed.
5. **`ealch-admin/scripts/data/etre-lesson.ts` and `avoir-lesson.ts`** (a1.06, a1.07),
   the only shipped verb lessons in the project and the closest structural model.
6. **`ealch-admin/scripts/author-verbes-batch.ts` header**, which documents the `verbes`
   theme, where most of batch 1 lands.

---

## §B. Why A2 is not A1 with harder words

A1 has thirty shipped lessons and a mature house style. Copying it into A2 is the most
likely way to produce twenty competent, forgettable lessons.

### 1. A1 taught utterances. A2 teaches generation.

An A1 learner leaves able to say the things the lesson said. An A2 learner leaves able
to say things the lesson never said. The unit of teaching stops being a phrase and
becomes **a pattern with a slot in it**.

A mission that lists ten conjugated forms has taught nothing a table cannot. A mission
that makes the learner produce the eleventh form, from a verb the lesson never showed
them, has taught the system. The word-list half of a grammar lesson is the cheap half.

### 2. The failure is breakdown, not rudeness

A sons scene opens on somebody not being understood. An A1 scene opens on somebody
being misread as a person: every word correct, and the room still changes.

An **A2 scene opens on somebody who started a sentence they could not finish.** They had
the first four words. They knew the verb. The form did not arrive, or the wrong one did,
and the sentence died in the middle while the other person waited. Nobody is rude,
nobody is corrected, nothing is mispronounced. The learner runs out of sentence in
public.

That is the A2 register of stakes: **loss of fluency under load.** If your scene ends
with a French person offended, you wrote an A1 scene. If it ends with them not catching
a sound, you wrote a sons scene.

### 3. A2 lives on a timeline

A1 is the present tense and the current moment. A2 adds time, and by seq 20 the learner
has the recent past, the near future and two past tenses. Sentence budget rises with it:
**A2 sentences may run to 14 words** and may use the passé composé and the futur proche,
where A1 was capped at 9 and the present. Longer is permitted, not required.

**Corpus sentences may use tenses the lesson body may not teach.** The corpus is shared
across the level. Your lesson body is bound by the trail position; the theme is not.

### 4. The reframe is a production rule, not a cultural choice

An A1 reframe is a decision made before opening the mouth. *Bonjour is the price of
entry.*

An **A2 reframe is a rule the learner runs while the sentence is already moving.** Short
enough to survive recall mid-utterance. *Four of the six forms sound the same, so the
ear will not save you.* *The spelling changes so the sound does not.* *Negation wraps
the conjugated verb, not the infinitive.*

Test: could the learner apply it in the half-second between subject and verb? If it
needs a table to apply, it is a `term`, not a reframe. State it in `reframe` and carry
it verbatim across at least three sections. The density validator enforces three; the
good lessons use six to eight.

### 5. Every lesson owns exactly one thing the table does not show

This is the part that goes wrong if nothing is done about it. Batch 1 is nine
consecutive paradigm lessons; batch 2 is five consecutive past-tense lessons. Both
decay into a reference document with pictures unless each lesson has one job.

**Every brief names an `Owns`.** The paradigm is scaffolding around it. If your act
structure gives the paradigm more missions than the Owns, you built the wrong lesson.

The four kinds of thing a grammar lesson can own:

```
the sound       forms spelled apart and heard together, or the reverse
the spelling    a change the learner can predict from a reason
the meaning     a distinction English merges and French splits
the family      a pattern that generalises to items the lesson never taught
```

### 6. Register runs through, and now it is written against spoken

`tu` and `vous` were A1's spine and continue here. A2 adds the second axis: **`nous` is
what is written, `on` is what is said.** Every paradigm in these twenty lessons prints a
`nous` form a learner will rarely hear. Say so once, where it belongs (`a2.01` owns it),
and stay consistent across all twenty. Do not teach `on` as a curiosity in one lesson
and use `nous` in every example of the next.

### 7. Three constructions recur, and pointing at the repeat is the teaching

The same shape appears four times across these twenty lessons: **one form, two jobs,
distinguished only by what follows it.**

```
venir de + infinitive  vs  venir de + place        seq 5
il y a "there is"      vs  il y a "ago"            seq 14
aller + infinitive     vs  aller + place           seq 15
prendre "take"         vs  prendre in idiom        seq 9
```

Each brief teaches its own instance. From seq 14 onward, **name the earlier instance by
unit id.** A learner who sees the pattern repeat stops believing French is arbitrary,
and that is worth more than any single trapDrill.

The second recurring shape is **silent agreement**: `parle/parles/parlent`,
`allé/allée/allés/allées`, `lavé/lavée/lavés/lavées` are spelling distinctions the ear
cannot hear. `a2.01` states the reframe; `a2.21` and `a2.23` pay it off. Bookend it.

### 8. Section types A2 leans on

```
A1 leans on:      story/scene · tapTable · vocabThemes · scenario · useCases · examples
A2 adds:          tapTable (the paradigm) · trapDrill (form choice, stem changes)
                  listening (the silent-ending homophones) · commonErrors (heavier)
                  groupDrill (production against the clock)
shared spine:     goals · cardDeck · flashcards · practice · reading · reviewDeck
                  progressCheck · quiz · roundup · dictation
```

**`tapTable` is the paradigm surface. `table` cannot be used in the flow at all.**
Use `tapTable` once and stop; the fifth grid in a lesson is where the learner closes
the app.

> **CORRECTED 2026-08-16.** This section read *"`table` renders a paradigm and
> `tapTable` makes it audible"* and listed `table` as what A2 adds. **A `table` at
> `layer: 'core'` is refused outright**, and has been the whole time:
>
> ```ts
> // density.logic.ts:423, under a heading reading « Tables never appear in the flow »
> if (s.type === 'table' && layer === 'core') {
>   push('table-in-core', sid, 'a table in a core section — tables belong in a reference sheet (layer deep)');
> }
> ```
>
> That is why **0 of 70 shipped lessons carry a `table` in `sections`** while **152**
> render inside reference sheets. It is an enforced rule, not a convention and not a
> renderer gap: a2.29 device-checked a probe `table` inside a mission on a Pixel 6 and
> all nine cells drew correctly, then `validateDensity` refused it on the first batch
> run. **A device check cannot find this one.**
>
> What to use instead: a `tapTable` at `core`. It carries the identical layout — same
> `cols`, same grid, one screen — and is audible as well, which is the half of the old
> sentence that was true.
>
> **AMENDED the same day, and this half was my own bad advice.** This box first said
> "if you also want a consultable grid, ship the `table` at `layer: 'more'`; any layer
> but `core` passes", and a2.29 shipped one that way. **`layer` is read by NO renderer**
> — three consumers in the product, two in the density validator and one in the
> schema's enum check, and no `=== 'more'` anywhere in render code. So `more` draws
> exactly like `core`: a full numbered mission, counted in the lesson total.
>
> A `table` at `more` is therefore still *in the flow*. a2.29's was mission 5, one after
> the tapTable at mission 4, showing the same nine lines in the same 3x3 shape — the
> "fifth grid is where the learner closes the app" this very section warns about. It has
> been deleted and a2.29 ships zero tables.
>
> **So the honest answer is that `table` has no usable home in a lesson at all.** Not
> "use it at `more`". Use `tapTable`, or a reference sheet via `render: 'sheet'`, which
> is the only part of the three-layer model that works.
>
> Five builds designed around the old sentence before anyone measured it, and the
> replacement was wrong for half a day before anyone measured `layer`.

`trapDrill` is the A2 workhorse the A1 track barely used. a1.30 shipped the first one in
the project. Read it before writing yours.

---

## §C. Invariants delta

Everything in `A1-BUILD-INVARIANTS.md` applies unchanged. These are the additions, and
the three defects that document predates.

**Level tag.** Every item and lesson you author is `A2`, not `A1`. Check what the batch
script defaults to rather than assuming it reads the unit.

**Sentence budget.** ≤ 14 words, passé composé and futur proche permitted in corpus
sentences. The lesson body is bound by trail position; the corpus is not.

**One quiz per lesson.** A second `quiz` section is silently never rendered. A lesson
needing more assessment than one quiz holds needs to be two lessons, and that is a
decision to escalate, not to make.

**Quizzes shuffle, missions do not.** `LessonRich` permutes quiz options at runtime;
`MissionRich` renders authored order exactly. Hand-randomise inside missions where
position gives the answer away; never hand-randomise the quiz.

**`practice` with `skill: 'write'` draws no writing surface.** It renders nothing a
learner can produce into. For production use `typeIn` or `errorSpot` in the quiz, or the
dictée. This matters more across A2 than anywhere before, because the whole claim of an
A2 lesson is that the learner *produces* a form.

**`cheatSheet` inside a reference sheet draws its title and nothing else.** Verify on
device that a sheet's contents appear before writing the test that asserts them.

**Grep the renderer.** A component can be authored, valid, device-proven in isolation
and imported by nothing. Before claiming a section renders, find the file that reads its
`type` and pin it with an assertion.

**Publish is currently blocked.** `content:publish` would delete `sons.09.l1`, which is
seed-only. Run `pnpm content:parity` first. Publishing is not part of a lesson build:
applying to Postgres and merging into the seed is the end of your job.

**Never `git checkout` `seed.json`.** Reverting it discards other authors' uncommitted
lessons. Re-run the merge scripts instead. With ten builds live this is not theoretical.

**House copy rules.** No em dash in any user-facing string (a label separator is the
exception). The words "honest" and "honesty" are banned from authored content and a test
enforces it across the whole seed.

---

## §D. Step 0: the ledger, once per batch

Ten lessons landing in overlapping themes will collide. A1 proved it twice: a concurrent
lesson took an id range mid-build and the copied collision guard could not see it, and a
highest-id check missed a lesson landing *below* the top of the range.

**Before any lesson in a batch starts authoring, one person produces the ledger.**

```bash
cd ealch-admin

# Batch 1: the verb themes.
pnpm corpus:probe --theme verbes,verbes-essentiels
pnpm corpus:probe --words "parler,manger,commencer,appeler,préférer,finir,choisir,vendre,attendre,aller,venir,tenir,faire,dire,lire,vouloir,pouvoir,devoir,savoir,connaître,prendre,mettre,battre"

# Batch 2: adjectives, adverbs, prepositions, routine, and the participle set.
pnpm corpus:probe --theme adjectifs,adverbes,routine,pays,lieux,temps
pnpm corpus:probe --words "beau,nouveau,vieux,lentement,vite,depuis,pendant,chez,se lever,se coucher,se laver"

# Every unit in your batch, one probe each.
pnpm corpus:probe --unit <id>

# Baseline, measured today, not carried over.
cd ../ealch-v2 && node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts" 2>&1 | tail -6
```

The ledger is a committed file, `ealch-admin/A2-BATCH-<N>-LEDGER.md`, holding:

- **an id block per lesson**, non-overlapping, allocated from the probe's NEXT FREE and
  wide enough that nobody needs a second block. Ids are the SRS key: never renumber.
- **which theme each lesson writes into**, decided once. Nine lessons cannot all pour
  into `verbes` without breaking the flashcard hub, which treats two rows sharing an
  `fr` in one theme as one card served twice.
- **the headwords that already exist**, with ids, so authors *import* rather than
  author. Re-authoring `parler` is the most likely single failure of batch 1;
  re-authoring the routine vocabulary is the most likely failure of batch 2.
- **the shared decisions in §E**, written once so ten lessons do not each pick
  differently.
- **the baseline test count**, dated.

Nobody authors until the ledger exists. An author whose block turns out wrong amends the
ledger and says so in their report; they do not quietly take another range.

---

## §E. Decisions that must be identical across the level

Settle these in the ledger. They are where ten authors each pick something reasonable
and the band reads as ten different products.

- **The headword shape for a verb.** Bare infinitive (`parler`) or infinitive with a
  gloss frame. Pick one. Infinitives are not nouns: no gender, no article.
- **Whether a conjugated form is ever a corpus item**, or only infinitives and full
  sentences. The `verbes` theme currently holds conjugation *sentences*, not bare forms.
  Departing from that is allowed and must be a ledger decision.
- **Whether a past participle is a corpus item** (batch 2, seq 16 to 20). Forty
  irregular participles is either forty new rows or zero, and the two answers give very
  different lessons.
- **How a paradigm is written in prose** when it is not in a `table`: pronoun order,
  whether silent endings are marked, and how.
- **The respelling of the silent endings.** `-e`, `-es`, `-ent` are silent and this level
  writes them out thousands of times. One convention. Check §3 of the invariants first:
  `hasPlainNasalFor` cannot see a word-internal nasal and false-positives on a real /n/
  after a vowel, which bites on `viennent`, `prennent`, `connaissent`, `apprennent`.
- **`nous` versus `on`** (§B.6), stated once by `a2.01` and inherited by all others.
- **`drills` arrays are a Postgres enum array.** Read the gotcha in the invariants before
  your first apply, not after it fails.
- **Every item must be reachable**: named by a section, or released by a `deckTranche`
  and carrying a `flashcard` drill. `practice` with `skill: 'speak'` needs `voiceflash`
  on every item it names; `dictation` needs `dictation`. Check against **Postgres**, not
  the seed. The seed is roughly a quarter of the database and a statistic measured on it
  can be an artifact of the cut.

---

## §F. What every lesson delivers

Lesson Architecture v2: `acts`, a stable `id` on every section, `reframe`, `deckTranche`,
`terms`, `errorTriggers`, `drills`, round-based quiz.

```
scripts/author-<name>-batch.ts          corpus + lesson + terms, applied to Postgres
scripts/merge-<name>-into-seed.ts       the seed merge
scripts/data/<name>-corpus.ts           header documenting what the brief got wrong
scripts/data/<name>-lesson.ts
scripts/data/<name>-terms.ts
package.json                            "content:<name>"
ealch-v2/src/content/<test-filename>    the guard
```

Mission count: **23 to 32 is your range, and 24 is the shape to beat.** Every section
is a mission — the renderer numbers one per section and the design distinction between
"missions" and "sections" does not exist (a2.07 verified it on a device). The weight
belongs on the Owns.

> **CORRECTED 2026-08-16, measured across all 70 shipped lessons.** This line read
> *"recent A1 lessons run 19 to 24. **19 to 24 is your range.**"* Both halves were
> wrong for this track, and five builds in a row wrote themselves an apology for
> exceeding a ceiling that was never the ceiling.
>
> | track | lessons | range | median |
> |---|---|---|---|
> | SONS | 10 | 19 – 31 | 24 |
> | A1 | 31 | 21 – 30 (plus two assessment stubs at 4 and 5) | 26 |
> | **A2** | **29** | **23 – 32** | **24** |
>
> Three things the old figure got wrong:
>
> 1. **The floor is not 19.** No A2 lesson has ever shipped under 23. A build
>    aiming at 19 is aiming below anything the track has ever produced.
> 2. **24 is the MEDIAN, not the ceiling.** Ten of the 29 A2 lessons exceed it, and
>    a2.13 ships 32. "19 to 24" described the middle of the distribution as if it
>    were the whole of it.
> 3. **It was an A1 figure quoted at an A2 audience**, and A1's own median is 26.
>
> The A2 distribution is tight around 24 (19 of 29 lessons sit exactly there), so
> **24 remains the number to design toward.** What changed is that 25 to 32 is now
> ordinary rather than an overrun needing a justification, and that under 23 is the
> shape actually worth questioning.
>
> Consequence for the A2 situations band, whose prompts and designs all quote the
> old line: `22-A2-27-TRANSPORTS-PROMPT.md`, `27-a2.28-medecin-DESIGN.md`,
> `29-a2.30-travail-metiers-DESIGN.md`, `30-a2.31-ecole-etudes-DESIGN.md` and
> `40-A2-07-BUILD-REPORT.md` each measure themselves against "19 to 24". None of
> them was over the real range. a2.07 at 25 and a2.29 at 25 were both **inside** it.

Act structure, adapt but do not shrink:

```
act 1  the scene and the goal        the sentence that died in the middle
act 2  the paradigm                  table + tapTable, and then stop
act 3  the Owns                      the heaviest act in the lesson
act 4  the trap                      trapDrill + commonErrors
act 5  production                    scenario, groupDrill, dictation
act 6  quiz and roundup              one quiz
```

**Do not hand-bump `seed.version`.** It is the OTA snapshot number.

### Report, per lesson

- what the probe said about your theme and headwords, and whether you **imported or
  authored** each one
- **every claim in your brief you measured false.** Every A1 build found between three
  and five. These briefs were written without a corpus measurement, so expect more, and
  expect the "does not exist" claims to be the wrong ones.
- the reframe you chose, what you rejected, and why
- how the Owns got more weight than the paradigm, with mission counts
- your id block, whether it held, and the **row count** after your apply, not just the
  highest id
- corpus: authored versus imported, in which theme, and that the form rule held
- lesson: mission count, act structure, quiz size and format mix, and that **every
  question has a `why`**
- test count before and after, the before figure measured rather than taken from the file
- which missions you verified on device, by what route, and which half of the
  verification you did if adb was unavailable
- **anything you could not verify, said plainly.** A gap you name costs an hour. A gap
  you paper over costs a session, and this project has lost two that way.

No AI-tell phrasing. Banned: "falls fast", "trip up", "half of everything", "this is the
big one", "listen to the trap", "get those two right", "this is the part that pays",
"here is the catch", and anything of that register.
