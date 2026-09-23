# B1 pilot brief: Unit 1, Imparfait and past contrast (b1.01 to b1.04)

> Superseded in part (2026-09-22): tu, French narration and the `recits-au-passe` theme are settled, and English is now always authored and hidden behind the lesson's EN toggle. See B1-C2-BUILD-SEQUENCE.md "Rules every wave follows".

Status: DRAFT authoring. Nothing here is imported, merged into seed.json, or published. Paul reviews these four lessons first, and the other 107 B1 to C2 lessons follow whatever style he approves.

## Decisions already made (do not reopen)

1. **One unit per lesson.** Plan id `b1-l01` becomes unit `b1.01`, lesson `b1.01.l1`, `level: 'b1'`. Paul's "Unit 1: Imperfect and past contrast" is a band grouping (a trail header), not an app unit.
2. **Shape.** These four are grammar lessons, so they use the current mission journey with the Lesson Architecture v2 rig. The model to copy is `a2.34.l1` (`../pronoms-possessifs-{lesson,corpus,terms}.ts`): acts, reframe, errorTriggers, drills, sheets, terms, deckTranche, overview, scene opener, one quiz, progressCheck, then quiz, reviewDeck, roundup. The measured A2 shape is 24 sections, and 30 is the ceiling.
3. **New in B1: the `task` section.** Every lesson closes its production act with ONE `task` section (type in `_task-section.ts`). It is not in schema.ts, so the `sections` array is typed `DraftSection[]`. Put it after the scenario and before `progressCheck`.
4. **Language.** B1 instructions, titles, briefs, drill prompts, coach lines and break bodies are in **simple French** (B1 vocabulary, short sentences). Every grammar explanation (`teach` body, `break` body, `trapDrill.rule`, `commonErrors.why`, term `body`) is followed by a **one-line English gloss** (use `en` fields where the type has them; otherwise add a final sentence starting `EN: `). `overview.titleEn` stays English. Model French is natural, never simplified into something a French speaker would not say.
5. **Setting.** Mixed francophone: France, Québec and wider Canada, Belgium, Switzerland, West Africa (Dakar, Abidjan). Lean slightly towards Canada. Characters recur only inside one lesson. Adult learners, adult situations: work, moving house, childhood memories, travel, administration, family.

## What "advanced" means here, compared with A1/A2

- **Fewer, longer inputs.** A B1 `reading` is 120 to 200 words and a `listening` is 8 to 14 lines, not 4. Learners meet the grammar in a text before they meet the rule (noticing first, then the rule).
- **Meaning before form.** Every form drill is followed by a drill where the learner must choose the form because of what it means.
- **Production is open.** The `task` section is where the lesson outcome is actually tested. The quiz still exists (one per lesson).
- **Rules are not automatic.** Especially b1.03 and b1.04: temporal signals (hier, soudain, tous les jours, pendant que) are cues, not triggers. Show at least one counterexample for each cue you teach.

## House rules that bite (every one has shipped a bug before)

- No em dash (U+2014) in any learner-facing string. Label separators are the only exception.
- The word "honest" or "honesty" never appears anywhere. A test enforces this.
- No U+203F liaison tie. It renders as an underscore on a Pixel 6.
- No spaced exclamation or question mark in a scene bubble (`Oui !`): the bubble loses its last word. Write French punctuation in reading/listening text, but not in bubbles.
- Density: 45 words max for any single authored string at layer core. For B1 French text, this applies to instruction strings, not to `reading.text` or `listening.lines`.
- `table` is forbidden in the flow; use it only in a `ReferenceSheet` (render: 'sheet'). One `tapTable` in the flow at most, 6 rows max.
- One quiz per lesson. A second quiz is never rendered.
- Quiz options are shuffled at runtime, but mission options are not. Scatter the `correct` indices in every trapDrill, groupDrill and listening question, and never put the answer at the same index twice in a row more than twice.
- listenChoose questions need `say`. errorSpot and typeIn questions need `prompt`. `fold()` strips commas, so no answer may depend on a comma.
- Term chips: 3 per section at most, 37-character budget for the chip row. Every term you define must be surfaced by at least one section.
- Respell uses house style: `[zhuh pahr-LEH]`, hyphenated syllables, final stressed syllable in caps, `ü` for French u, nasals `ohⁿ ahⁿ ehⁿ`. Reuse existing respell for any word already in seed.json.
- Never edit, check out or rewrite `ealch-v2/src/content/seed.json`. Read it only.

## Corpus items

- Reuse existing items wherever seed.json has them. Import them by id, as a2.34 does. Seed.json is only about a quarter of Postgres, so write "seed-checked only, DB check pending at import" in the corpus header.
- New items use `fr.b1.<theme>.<seq>`. Theme slugs are `imparfait` for b1.01 and b1.02, and `passe-recit` for b1.03 and b1.04. Seq ranges prevent collisions between parallel authors: b1.01 = 001-099, b1.02 = 101-199 (both in `imparfait`); b1.03 = 001-099, b1.04 = 101-199 (both in `passe-recit`). Neither theme exists yet. Say so in the header, because it has to be created at import.
- Every new item needs fr, en, ipa, respell, level 'b1', theme, drills, and `cardType` where it is not plain vocab.

## Cross-references (the grammar spine)

- `grammarAssumed` may cite A2 units by trail label, the way the corpus does (`a2.05` passé composé with avoir, `a2.21` with être, `a2.20` irregular participles, `a2.22`/`a2.23` pronominals, `a2.01`/`a2.10`/`a2.11` present-tense groups, `a2.19` futur proche, `a2.13` modals, `a2.14` savoir/connaître). Look up real titles in seed.json `units`.
- b1.02 assumes b1.01; b1.03 assumes b1.01 and b1.02; b1.04 assumes all three. Quote an earlier lesson's reframe verbatim instead of retyping it, and import the constant, as a2.34 imports A117_REFRAME.

## Files per lesson (all in this folder)

`<slug>-corpus.ts`, `<slug>-terms.ts`, `<slug>-lesson.ts`, where slug is:

| unit | slug | title |
|---|---|---|
| b1.01 | imparfait-formation | L'imparfait : la formation |
| b1.02 | imparfait-usage | L'imparfait : les emplois |
| b1.03 | pc-imparfait | Passé composé ou imparfait : les bases |
| b1.04 | pc-imparfait-paires | Passé composé ou imparfait : les paires |

Import paths from this folder are one level deeper than a2.34's: `../../../../ealch-v2/src/content/schema.ts`.

## Done means

1. The three files typecheck. From `ealch-admin`, run `pnpm exec tsc --noEmit` and filter the output to `scripts/data/b1/<slug>-*`. Errors in other files are not yours ([[admin typecheck sees ignored files]]).
2. A scratch script in the session scratchpad runs the schema's own validators (`validateLesson`, `validateDensity` and any others that exist) on the lesson with `task` sections filtered out. Report the result verbatim.
3. A header comment at the top of `<slug>-lesson.ts` gives: the section list with types, the reframe, what the lesson owns, what it only quotes, and a list of open questions for Paul.
