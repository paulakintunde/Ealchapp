# The rich B1+ lesson standard

Paul, 2026-09-22: "I want a very rich lesson. It can be slow, it can take days. The content must be rich and cover each topic well. If required each lesson can extend to 100 sub-lessons with rich tests." Lessons are built **one at a time**, and each is reviewed on the Pixel 6 before the next one starts.

This extends B1-PILOT-BRIEF.md (house rules, corpus rules, cross-references) and the "Rules every wave follows" section of B1-C2-BUILD-SEQUENCE.md (tu, French-first, English always authored behind the EN toggle, no text-only version bumps). Where they conflict, this file wins on size and shape.

## Size and shape

- **Up to 100 missions** (sections), grouped in **8 to 12 acts**. Each act covers ONE sub-topic of the lesson and ends in its checkpoint (`LessonAct.milestone`, `restPoints`), so a long lesson is a series of short journeys. There is no hard cap in the validators. The largest shipped lesson has 32 missions, and the acts are what make a lesson this long finishable.
- **No padding.** Every mission has a distinct job. Richness means covering the topic completely, with examples and practice at every step, not more screens saying the same thing. If a sub-topic is done in 6 missions, it gets 6.
- **Mechanics rotate.** Two consecutive missions of the same type need a reason. Use the whole palette: scene, story, reading (with glossary), listening, cardDeck, tapTable, examples, useCases, groupDrill, trapDrill (stepped), commonErrors, dictation, flashcards, scenario, practice, task, cheatSheet, hacks, focus.

## One act, the default rhythm (adapt it to the sub-topic)

1. **Meet it:** a short input where the sub-topic appears in real French (reading, listening, scene or story). Noticing comes before the rule.
2. **Name it:** the rule, one screen per idea (cardDeck, tapTable or examples), in simple French with English authored.
3. **Build it:** controlled form practice (groupDrill with a gate per group).
4. **Choose it:** meaning practice, where the learner picks the form because of what it means.
5. **Trap it:** the English-speaker errors for this sub-topic (stepped trapDrill or commonErrors).
6. **Check it:** a gated act check before the checkpoint.

## Tests

- **One quiz** (the renderer shows only one) of **8 to 12 rounds of 8 questions**, one round per act or sub-topic. Each round carries `targets` (errorTrigger ids), and a failed round fires that round's remediation `LessonDrill` (`roundFailThreshold`). Mix the question types: mcq, typeIn, errorSpot, listenChoose.
- **An act check** at the end of every act.
- **The graded `task`** (writing or speaking), placed in the final production act.
- **The progressCheck** before the quiz, and the reviewDeck and roundup after it.

## Corpus

- Every form or sentence the lesson teaches is a corpus item, so SRS can schedule it. `deckTranche` releases each act's items at its checkpoint (one tranche per act).
- Coverage beats sampling. For a conjugation lesson, that means the high-frequency verbs in the persons that matter, not one example per rule.
- **Id ranges, since nothing is imported yet:** b1.01 uses `fr.b1.recits-au-passe.001-099` and `.401-.799`. The other pilot lessons keep their ranges (101-199, 201-299, 301-399) until they are rebuilt.

## Reference sheets

- Full paradigm tables and every rule the flow names go in `sheets` (render 'sheet'), so nothing a learner needs to look up is lost in 100 missions.

## Chapter artwork

- Each act carries `opener: { line, imageRef }`. The pager draws it as a full page before the act's first mission: artwork, "ACTE 03 - 7 MISSIONS", the act title, then the line.
- Art lives in `ealch-v2/assets/lessons/<lesson-slug>/actNN.jpg`, landscape 4:3, and a ref renders only once it is listed in `ealch-v2/src/content/lessonImages.ts`. Register a ref ONLY after its file exists: `require()` resolves statically, so a ref without a file breaks the bundle.
- **Every prompt file gives the FULL save path under each prompt** (Paul, 2026-09-22), e.g. `C:/Users/harki/Downloads/gitbuild appealch/Ealchapp/ealch-v2/assets/lessons/<slug>/act01.jpg`, so a prompt can be pasted into ChatGPT and the result dropped straight into place. Prompts also repeat the house STYLE block in full (see `ealch-admin/scripts/gen-rythme-images.mjs`), carry no lettering, and stand alone.

## Process per lesson

1. **Act plan:** acts, sub-topic, missions per act, items per act. Written in the lesson header.
2. **Author act by act.** Run `validateLesson` and `validateDensity` after each act, never only at the end.
3. **Assemble:** the quiz rounds, drills, sheets and deck tranches, then the full validation and typecheck.
4. **Preview:** regenerate the draft band (`pnpm tsx scripts/data/b1/_preview-b1.ts`), then check on the Pixel 6 through Metro. The B1 band appears in the Den trail on its own.
5. **Paul reviews on the phone.** The next lesson starts only after his OK.
