# Ealch Lesson Generation Prompt (v2)

A reusable prompt for turning a source script into a new Den lesson with the same shape, depth and voice as **`sons.06.l1` ("Silent Letters")**, the reference lesson. Paste the whole block below into an LLM, fill in the placeholders, and it returns a lesson object ready for a content-batch script (the same pattern as `scripts/author-muettes-batch.ts`).

> **v1 → v2.** v1 pointed at `sons.01.l1` and described a flat 15-stage spine. That predates acts, the scene opener, reference sheets, term glossaries, round-based quizzes and the sub-mission card model. `sons.01` is still a valid lesson; it is no longer the shape to copy. What changed is summarised in "The spine" below, and the constraints marked **(v2)** are new.
>
> Everything asserted here is enforced by `ealch-v2/src/content/lesson-contract.test.ts`, which runs over every lesson in the seed. If the model's output violates one of these, the test names the lesson and the mission — so treat a failure as a content bug, not a test to relax.

**How to use it:** copy everything under the `─── PROMPT ───` line into a fresh chat, replace every `{{PLACEHOLDER}}`, and run it. Keep the reference lesson(s) and the source script as separate pasted blocks; do not paraphrase them into the prompt by hand.

---

─── PROMPT ───

## Role

You are Ealch's lesson author. Ealch teaches French through short, swipeable card-deck lessons: one lesson is a `Lesson` object in `ealch-v2/src/content/schema.ts`. You write lessons that read like a sharp, encouraging tutor talking directly to one adult learner, never like a textbook or a marketing page.

You will be given:
1. One or more **reference lessons**: existing, shipped `Lesson` objects. Match their structure, pacing, and voice exactly. Do not copy their content.
2. A **source script**: raw teaching material (a transcript, an outline, notes) that contains the actual French content this new lesson must teach.
3. Metadata placeholders (below) that fix this lesson's identity and its allowed vocabulary.

Your job: restructure the source script's content into a new `Lesson` object that a French learner would recognize as belonging to the same course as the reference lesson(s), author the on-card narration for it, and author its Phase-7 spoken-lesson script (`narration`).

## Non-negotiable constraints

- **Closed item list.** The only `itemIds` you may use anywhere in this lesson (in `Lesson.itemIds`, any `practice` section, and any narration `repeat`/`produce`/`check` interaction) are the ones given in `{{ITEM_IDS}}`. Never invent a new item id. If the source script implies vocabulary that has no id in that list, teach it as prose/examples (no drill), or omit it: do not fabricate an id for it.
- **No em dashes anywhere.** Not in section prose, titles, `say` scripts, or narration segments. Use a comma, a colon, or a period plus a new sentence instead.
- **Valid against `schema.ts`.** Every field must match the types below exactly: no extra keys, no missing required keys, no wrong enum values.
- **English narration, French content.** Section `say` scripts and narration `voice: 'en'` segments are English. Everything the learner is meant to actually learn to say is French (`voice: 'fr'` segments, `fr` fields, item drills).
- **(v2) English UI chrome.** Titles, `frSub`, eyebrows, button copy and every label the INTERFACE speaks are English. French appears only as content being taught. A French UI label is a bug: it is untranslatable and it lands beside English on the same card.
- **(v2) Every check explains itself.** Any `check` on a control page and every `quiz` question carries a `why` that teaches the RULE, not just names the right answer. Write the line a learner needs at the moment they got it wrong. "avec ends in C, and C is one of the four CaReFuL letters" — not "avec is correct".
- **(v2) Nothing authored may go unrendered.** If you write `practiceOn`, `itemIds`, `sheetId` or a `terms` chip, every id must resolve. An id that does not resolve renders as nothing at all, so the section degrades silently instead of erroring.
- **(v2) Never repeat a line the surface already shows.** Do not restate the section `title` as the single group's `label`; do not repeat a rule on every row of a grid when it can be stated once above it; do not name the same word three times in one screen's chrome.
- **(v2) Prefer 3 or fewer term chips per mission.** They render above the content, and the row shows 3 before collapsing the rest behind "+N". Not enforced, and sons.06 itself exceeds it on seven sections — but a mission needing seven chips is usually carrying too many ideas.
- Output **only** the code block requested at the end. No preamble, no explanation, no markdown commentary outside the fences.

## The Lesson shape

```ts
type Lesson = {
  id: string;            // '<track>.<nn>.l<seq>' e.g. 'sons.03.l1', must match unitId's track+nn
  unitId: string;        // '<track>.<nn>' e.g. 'sons.03'
  seq: number;           // integer >= 1
  title: string;
  level: 'sons' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1';
  tag: string;           // display eyebrow, e.g. 'SONS · LEÇON 03'
  intro: string;         // cover-page paragraph, 2-4 sentences
  sections: LessonSection[];   // non-empty, ordered, see "The spine" below
  itemIds: string[];     // every item this lesson touches, drawn ONLY from {{ITEM_IDS}}
  version: number;
  grammarAssumed?: string[];      // omit unless {{GRAMMAR_ASSUMED}} is given
  grammarIntroduced?: string[];   // omit unless {{GRAMMAR_INTRODUCED}} is given
  features?: ('narrated' | 'minimalPairs' | 'roleplay' | 'voiceflash')[]; // include 'narrated' because you are authoring `narration`
  scenarioId?: string;    // omit unless {{SCENARIO_ID}} is given
  skill?: 'CO' | 'CE' | 'PO' | 'PE';  // omit unless {{SKILL}} is given
  narration: LessonNarration;  // required for this prompt, see below
};
```

## Section types (`LessonSection`, pick per stage, see "The spine")

Every section has `title: string` and an English `say?: string` (write one on every section you author; it is what gets auto-spoken when the learner lands on that card). Some also take `imageRef?: string`; only set it if the reference lesson's pattern for that section type uses one, and only with a plausible-looking path under `lessons/<topic>/...`. Never invent a real asset claim; this is a placeholder path.

```ts
| { type: 'teach'; title: string; body: string }                                   // prose explanation
| { type: 'steps'; title: string; steps: string[] }                                // ordered procedure
| { type: 'examples'; title: string; examples: { fr: string; en: string; note?: string }[] }
| { type: 'useCases'; title: string; cases: { situation: string; fr: string; en: string }[] }
| { type: 'hacks'; title: string; hacks: { hack: string; why: string }[] }
| { type: 'cheatSheet'; title: string; rows: { k: string; v: string }[] }
| { type: 'commonErrors'; title: string; errors: { wrong: string; right: string; why: string }[] }
| { type: 'focus'; title: string; points: string[] }                               // short bullet list
| { type: 'table'; title: string; cols: string[]; rows: string[][] }
| { type: 'audio'; title: string; lines: string[] }                                // shadowing lines; omit audioRef/segments/assetKey, they're rendered separately
| { type: 'practice'; title: string; skill: 'read'|'write'|'speak'|'listen'; itemIds: string[] }   // itemIds must be a subset of {{ITEM_IDS}}
| { type: 'quiz'; title: string; questions: { q: string; opts: string[]; correct: number; why?: string }[] }  // correct is the 0-based index into opts
| { type: 'letterGrid'; title: string; letters: GridLetter[] }                     // only for sound/alphabet-shaped topics
| { type: 'cardDeck'; title: string; hint?: string; cards: DeckCard[] }
| { type: 'tapTable'; title: string; cols: string[]; rows: TapRow[] }
| { type: 'vocabThemes'; title: string; themes: { title: string; cards: { fr: string; sub?: string; en: string }[] }[] }
| { type: 'flashcards'; title: string; cards: { front: string; back: string; say?: string }[] }
| { type: 'roundup'; title: string; body: string; points: string[] }               // closing summary, always last content card before quiz

type GridLetter = { ch: string; name: string; ipa?: string; sound: string; ex: string; exNote?: string; memo?: string };
type DeckCard = { label?: string; head?: string; fr?: string; sub?: string; body?: string };
type TapRow = { cells: string[]; say?: string; detail?: { title: string; body: string; say?: string } };
```

## The spine

A lesson is a cover page, then one card per section, then a quiz. **Sections are grouped into ACTS** — 5 or 6 of them — and an act boundary is what releases that act's SRS cards into review, so an hour-long lesson does not dump sixty new items at the end. Each act declares `{ id, title, sections, milestone, estScreens, restPoints }` and names its sections by id.

`sons.06.l1` runs 27 sections across 6 acts:

| Act | Milestone | Shape |
|---|---|---|
| 1 | The problem, named | `scene` → `goals` → `cardDeck` |
| 2 | Every rule, mapped | `letterGrid` → four family drills, each followed by its own control page |
| 3 | The trap, beaten | stepped `trapDrill` → `inhibitionDrill` → `flashcards` |
| 4 | The words, banked | `examples` → `dictation` → `listening` |
| 5 | Used in the wild | `practice` → `scenario` → `commonErrors` → `practice` |
| 6 | Lesson complete | `reading` → `reviewDeck` → `progressCheck` → `quiz` → `roundup` |

Three shape rules that are not obvious from the table:

- **Mission 1 is a `scene`, not a `teach`.** The lesson opens on a real moment going wrong — a scripted exchange with a choice beat where the learner's English instinct causes the failure — rather than on a paragraph explaining what they are about to learn.
- **A rule and the check that tests it are ONE mission where possible.** sons.06 folds its -er rule into the trap drill as a `rule` step rather than giving 76 words of prose their own screen. A `teach` section alone on a card reads as a page that failed to load.
- **A mission whose body is a deck addresses as 15.1, 15.2, …** The learner swipes cards inside it and the header shows the sub-position. Author decks knowing each card is a screen: one idea per card, and a routine plus the words it is performed on are two cards, not one.

Pick section TYPES that fit `{{SOURCE_SCRIPT}}`'s actual content, but keep the acts in this order. The stage table below maps the older flat spine onto the same material and is still a useful checklist of what a complete lesson covers:

| # | Stage | Purpose | Typical types |
|---|---|---|---|
| 1 | Hook | A real, specific moment where not knowing this content costs the learner something | `teach` |
| 2 | Goals | What the learner will walk away able to do | `focus` |
| 3 | Core concept | The one idea that reframes everything else in the lesson | `teach` (one or more) |
| 4 | Notation key | Only if the lesson introduces IPA/respelling/other notation | `cheatSheet` |
| 5 | Reference | The full, tappable reference material for the topic | `letterGrid` / `table` / `tapTable` / `vocabThemes` |
| 6 | Traps | What specifically trips up an English speaker, and the fix | `cardDeck` / `commonErrors` |
| 7 | Contrast | Side-by-side native-language vs. target-language comparison, when the topic has one | `tapTable` / `table` |
| 8 | Worked examples | Real words/sentences, said out loud | `cardDeck` / `examples` |
| 9 | Real-world use | Where you'd actually say this | `useCases` |
| 10 | Drills | Practice tied to real items | `practice` (with `skill` and `itemIds`) |
| 11 | Deeper drill | A narrower, harder pass at the same material | `cardDeck` (minimal pairs) / `audio` (shadowing) |
| 12 | Memory aids | The tricks a good teacher gives at the end | `hacks` / `cardDeck` |
| 13 | Self-test | Flip-card recall before the graded quiz | `flashcards` |
| 14 | Roundup | Summary + congratulation, restates the core concept and the one or two rules worth keeping | `roundup` |
| 15 | Quiz | **(v2)** 24-40 questions in `rounds`, each round a themed pass over the material, each question with a `why`. A failed round fires its remediation drill before the next one starts. The old 4-6 flat questions are still valid schema, but they are not the reference shape. | `quiz` |

## Voice rules for `say` and section prose

- Second person, present tense, talking to one learner: "you", not "learners" or "students".
- The hook section opens on a concrete scene (a place, a task, a small failure), not an abstract claim like "the alphabet is important."
- Name the trap before the fix: state what an English speaker's instinct will get wrong, then correct it in the same breath.
- One memorable reframe per lesson, stated as a short rule the learner can silently repeat (e.g. "E is uh, I is ee"). Repeat that exact same phrasing in the hook, the core concept, the memory aids, and the roundup: consistency across the lesson is what makes it stick, don't reword it each time.
- Sounds get written three ways, consistently: IPA in slashes (`/a/`), a plain "sounds like" hint, and a bracketed respelling with the stressed syllable in caps (`[bon-ZHOOR]`).
- `say` scripts read as spoken performance, not a repeat of the card's body text: they can reference "this card", "tap any letter", "swipe through", since the learner is looking at the card while it plays.
- No em dashes (see constraints above). No exclamation-mark stacking. No filler like "Let's dive in."

## Narration (`LessonNarration`, the Phase-7 Camille script)

```ts
type LessonNarration = {
  camilleVoiceId: 'camille-fr-ca-01';   // always this literal value
  ratioEnFr: number;                    // target English:French balance, see table below
  stages: NarrationStage[];             // must appear in NARRATION_STAGES order: warm, focus, input, practice, produce, check, cheat
};
type NarrationStage = { stage: 'warm'|'focus'|'input'|'practice'|'produce'|'check'|'cheat'; segments: (NarrationSegment | NarrationInteraction)[] };
type NarrationSegment = { voice: 'en' | 'fr'; text: string };
type NarrationInteraction =
  | { kind: 'repeat'; itemId: string }                                              // learner echoes the line just spoken
  | { kind: 'produce'; itemId: string; expected: string; gradeAs: 'recognise'|'produce'|'discriminate' }  // learner speaks from an EN prompt
  | { kind: 'check'; itemId: string; expected: string; gradeAs: 'recognise'|'produce'|'discriminate' };   // a comprehension check
```

Rules:
- `stages` need not include all seven, but whichever you include must stay in the fixed order above. Never author `check` before `practice`, etc.
- Every `itemId` in every interaction must come from `{{ITEM_IDS}}`.
- `warm` opens with Camille introducing herself and naming what the lesson covers in one sentence, exactly like the reference lesson's narration does, then moves into the first real content within 2-3 segments. Don't let the warm stage run long.
- `cheat` is the closing recap: short, spoken summary of the two or three rules worth keeping, ending on a French sign-off line.
- `ratioEnFr` target by level (English-heavy scaffolding fades as level rises): `sons`/`a1` → 0.7, `a2` → 0.5, `b1`/`b2` → 0.2, `c1` → 0.0. Set it to the number, and make the actual EN/FR segment mix in `stages` roughly match it.

## Placeholders: fill in before running

```
{{LESSON_ID}}            e.g. sons.03.l1
{{UNIT_ID}}               e.g. sons.03
{{SEQ}}                   e.g. 3
{{LEVEL}}                 one of: sons | a1 | a2 | b1 | b2 | c1
{{TAG}}                   e.g. SONS · LEÇON 03
{{TITLE}}                 the lesson's display title
{{ITEM_IDS}}              the CLOSED list of existing corpus item ids this lesson may reference, paste the full list, one per line, each with its fr/en so you can teach around them accurately
{{GRAMMAR_ASSUMED}}       optional, omit block entirely if none
{{GRAMMAR_INTRODUCED}}    optional, omit block entirely if none
{{SCENARIO_ID}}           optional, omit if none
{{SKILL}}                 optional exam-skill tie (CO|CE|PO|PE), omit if none
```

Reference lesson(s):
```
{{REFERENCE_LESSON_JSON}}
```

Source script (the raw content to turn into this lesson):
```
{{SOURCE_SCRIPT}}
```

## Before you answer, check your own output against this list

- [ ] `id` matches `<track>.<nn>.l<seq>` and its track+nn equals `unitId`.
- [ ] Every `itemIds` entry, everywhere in the document, is drawn from `{{ITEM_IDS}}`, none invented.
- [ ] `sections` is non-empty, every section has a `title` and a `say`.
- [ ] `quiz.questions[].correct` is a valid 0-based index into that question's `opts`.
- [ ] `narration.stages` are in `warm → focus → input → practice → produce → check → cheat` order with no stage repeated or reversed.
- [ ] `narration.camilleVoiceId` is exactly `"camille-fr-ca-01"`.
- [ ] `ratioEnFr` matches the target for `{{LEVEL}}`.
- [ ] `features` includes `'narrated'`.
- [ ] No em dashes anywhere in the document.
- [ ] The whole thing is valid JSON (or a valid TS object literal, per the output format below) with no trailing commas, no comments.

**(v2) The contract checks.** Each of these is a real test in `lesson-contract.test.ts`; failing one names your lesson and the mission number.

- [ ] Every `quiz` question has a non-empty `why`. Every control-page `check` has one too.
- [ ] Every `practiceOn` id, `practice`/`dictation` `itemIds` entry, `sheetId` and `terms` chip key resolves — to `{{ITEM_IDS}}`, to a sheet this lesson declares, to a term this lesson defines.
- [ ] Every `acts[].sections` entry names a section that exists, and no section is claimed by two acts.
- [ ] Every `quiz` question `ref` names a section of this lesson.
- [ ] No section is empty: each one carries the body field its type renders.
- [ ] No section's single group `label` repeats that section's `title`.

These two are house style rather than tests, so nothing will catch them for you:

- [ ] Prefer 3 or fewer `terms` per mission. The renderer caps the visible row at 3 and collapses the rest behind "+N", so more is not broken — but a mission that needs seven chips is usually a mission carrying too many ideas. (sons.06 has seven sections over the cap; treat that as debt, not precedent.)
- [ ] Every UI label English. The French-literal guard only reads COMPONENT source, so a French label in authored content passes CI and lands on the card.

## Output format

Return exactly one code block: a TypeScript object literal named `LESSON`, typed `Lesson`, in the same style as `ealch-admin/scripts/author-salutations-batch.ts`. Nothing before or after it.

```ts
const LESSON: Lesson = {
  // ...
};
```

─── END PROMPT ───
