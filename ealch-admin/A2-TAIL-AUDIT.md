# A1 + A2 audit, and the gates for the last four lessons

Measured **2026-08-17** against Postgres by `scripts/_a2_audit_tail.ts`. Re-run it if you
are reading this more than a few days later; it prints everything below.

Read this once. The four briefs (`A2-08`, `A2-33`, `A2-34`, `A2-35`) are short because
this file holds what they share.

---

## 1. Where the band actually is

**Seq 1 to 31 are built.** All thirty-one units carry a shipped lesson; `a2.10` carries
two. Four remain:

```
seq 32   a2.08   Comparatives and Superlatives            NOT BUILT
seq 33   a2.33   Demonstrative Adjectives and Pronouns    NOT BUILT
seq 34   a2.34   Possessive Pronouns                      NOT BUILT
seq 35   a2.35   A2 Review                                NOT BUILT
```

A2 is 35 units, not 32. Build in seq order: `a2.35` quotes the other thirty-four.

---

## 2. What a shipped lesson in this project actually looks like

74 lesson bodies read. This is the house shape, measured rather than remembered.

```
                  A1 (31 lessons)          A2 (32 lessons)
missions          min 4 · med 26 · max 30   min 23 · med 24 · max 32
quiz questions    min 22 · med 24 · max 145 min 15 · med 30 · max 45
carries a sheet   29/31                     25/32
```

**A2's shape is 24 missions and 30 quiz questions.** Nineteen of the thirty-two sit
exactly there. The outliers earned it: `a2.13` (32/45) is the modal lesson, `a2.14` and
`a2.15` (28/36) carry a meaning split and three families. **Target 24 and 30. Go past it
only for a reason you can name in one sentence.**

A1's min of 4 missions is `a1.30.l2`, the capstone exam. It is not a teaching lesson and
it is the pattern `a2.35` copies.

### Section types, by total use across the band

```
A2 leans on:   cardDeck 139 · groupDrill 92 · examples 75 · trapDrill 43 · tapTable 41
               listening 38 · commonErrors 34 · scenario 34 · scene 33 · practice 33
spine (32/32): goals · dictation · progressCheck · quiz · roundup
thin in A2:    reading 21 · flashcards 12 · teach 4 · useCases 2 · vocabThemes 1
```

A2 uses `examples` and `trapDrill` where A1 used `vocabThemes` and `flashcards`. That is
the level difference in one line: A2 shows the pattern working and then breaks it, where
A1 listed the words.

### Quiz format mix, by total use

```
A1:   mcq 424 · typeIn 205 · errorSpot 162 · listenChoose 97 · speak 46 · tapSilent 3
A2:   mcq 379 · typeIn 317 · errorSpot 166 · listenChoose 96 · tapSilent 17 · speak 17
```

**`typeIn` rises from 205 to 317 and `speak` falls from 46 to 17.** A2 assesses in
writing, because most of what A2 teaches is inaudible. Match that mix. A 30-question A2
quiz that runs mcq-heavy is out of band.

---

## 3. The A1 capstone, and it is the template for seq 35

```
a1.30.l1  "Leçon par leçon"   5 sections · 29 rounds · 145 questions · remediation ON
            scene · goals · progressCheck · quiz · roundup
a1.30.l2  "L'examen A1"       4 sections · 12 rounds ·  60 questions · exam conditions
            goals · progressCheck · quiz · roundup
```

Four facts, all from `scripts/data/bilan-lesson.ts` and the shipped bodies:

- **Two lessons, because one lesson resolves one quiz.** `contentSections()` strips every
  `quiz` section and appends a single quiz page found with `sections.find()`. A second
  quiz section is not an error; it is silently never rendered.
- **The split is the design, not a workaround.** The review explains every answer as it
  happens and drills a failed round before the next starts. The exam does neither, and
  the learner can sit it again without re-answering the review.
- **One round per lesson, named**, in unit `seq` order. A named round is a diagnostic:
  miss three of five in "Partitive articles" and the report says which half hour to sit
  again. The cost is that a named round stops testing retrieval, which is what the exam
  is for.
- **It owns no corpus.** `itemIds` empty on both, no `deckTranche`, no sheets. A lesson
  quoting twenty-nine others owns none of their rows, and every one is already released
  by the lesson that taught it.

`exam: true` is a lesson-level flag (`schema.ts:1186`) and `a1.30.l2` sets it.

---

## 4. The gates. Every one of these has already cost a build.

Read `A2-BRIEF-CORRECTIONS.md` in full. The short version, and none of the four briefs
repeats it:

**Facts**
- The database `title` is English and `sub` is French. The spine's `sub` exists nowhere.
  **Take your identity block from your brief's measured block or the probe. Never the
  spine.**
- The seed is a cut. Your merge must carry every imported row your lesson references, or
  the cards render empty. Postgres first, seed second. Never `git checkout seed.json`.
- The row COUNT is the only id signal. `max(id)` has been useless since `a2.10.l2` took
  `.461..500`.
- Probe the SUFFIXED theme name before believing an absence. `X` at zero says nothing
  about `X-essentiels`. This has misdirected three builds.

**The app's hard limits**
- `fold()` and `normalizeFr()` strip accents and cedillas. **No typed, spotted or
  assembled surface can test a diacritic, a capital or a space.** Only `mcq` and
  `listenChoose` can. `fold()` **does** keep a final `-e` and `-s`, so agreement and a
  doubled consonant are testable.
- No ear question may offer two members of one homophone group. Enforce it with a
  `HOMOPHONE_FORMS` list, not a sentence in your report.
- `practice` with `skill: 'write'` draws no writing surface.
- One quiz per lesson. `commonErrors` needs `swipe: true`. Three term chips per section.
  A `table` at layer `core` is a density failure; in-flow it is a `tapTable`, six rows
  max on a Pixel 6. A `sheetId` resolves only inside its own lesson.
- `cheatSheet` inside a reference sheet draws its title and nothing else.
- Every `trapDrill` must walk `rule > cards > audio > drill` with `swipe`, an `audio`
  spec, a `say` and a GATED drill step. `lesson-contract.test.ts` enforces it.

**The guards you will copy have four holes**
1. The jargon walk misses `Lesson.intro` and `overview`, which are drawn on the lesson
   cover. Add both.
2. A throwing source import silently skips ~30 assertions. Tell "absent" from "broken".
3. `prose()` drops `sub`, which holds prose on a `cardDeck` card. Run the checks over a
   `display()` walk too.
4. The house word boundary `(?<![\p{L}\p{N}'’-])` excludes `'`, so it cannot see `j'ai`,
   `c'est`, `qu'il` or `celui-ci`. Drop the apostrophe from the left boundary.

Also: guard the THING, not the letters — a shape built from French morphology reads
English as French. And `adjective`/`adverb` are house vocabulary, not jargon: guard the
ratio, so the plain phrase outnumbers the technical one.

**Mutation-test everything, and expect two of your mutations to find a weakness rather
than confirm a strength.** That is the measured rate.

---

## 5. Themes, measured 2026-08-17

```
comparaisons            288 published   fr.a2.* n=129 max=.132   NEXT FREE .133
pronoms-essentiels      634 published   fr.a2.* n=336 max=.336   NEXT FREE .337
adjectifs-essentiels    696 published   fr.a2.* n=51  max=.058
adverbes-essentiels     349 published   fr.a2.* n=24  max=.024
verbes                  870 published   fr.a2.* n=602 max=.833
demonstratifs · possessifs · comparaisons-essentiels · bilan · revision      0 rows, all dead
```

**`comparaisons` and `pronoms-essentiels` are the two live homes for the tail.** Neither
`demonstratifs` nor `possessifs` exists and neither should be created: the words are
already in the corpus, in other themes.

---

## 6. The one cross-lesson collision in the tail

**`fr.a2.comparaisons` holds the possessive-pronoun sentences.** Measured:

```
la mienne  13 hits, mostly fr.a2.comparaisons.*
le tien     8 hits, mostly fr.a2.comparaisons.*
le mien     7 hits, mostly fr.a2.comparaisons.*
```

Comparing possessions is the natural frame for both, so `a2.08` (seq 32) will meet
`a2.34`'s material while importing, and `a2.34` (seq 34) will find its evidence sitting
in `a2.08`'s theme. **Both briefs name it. Neither lesson teaches the other's topic.**
