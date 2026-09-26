# The workshop shape and the vocab shape

Written 2026-09-26 for waves 7 to 9. The sequence doc names three lesson shapes
(grammar, vocab, workshop) and says the workshop shape was "not yet designed".
This is that design. Read it AFTER `B1-BUILD-PLAYBOOK.md`: everything the
playbook says still holds unless this file overrides it.

**The rule that makes both shapes cheap: NO NEW SECTION TYPES.** A workshop or
vocab lesson is built from the same sections, the same act object with its
opener and art, the same single quiz with per-round drills, the same sheets
and `sheetId` links, the same graded `task`, the same validators and the same
house tests as the grammar lessons. What changes is what an act is BUILT
AROUND. So the preview, `validateLesson`, `validateDensity` and the b1 tests
all work unchanged, and a new shape costs no app code.

Status: these are drafts of a shape. b1.25 and b1.37 are the pilot, Paul
reviews the shape at gate 3 with everything else, and this file is amended by
what he says.

## 1. The workshop shape (skills and register lessons)

Lessons: b1.25 register, b1.26 tu vs vous, b1.37 reading strategy, and later
b1.38 listening strategy and b1.39 emails and letters.

**A grammar act is built around a FORM. A workshop act is built around a TEXT
and a MOVE.** The learner meets a real piece of French (a message, a notice,
an article, an exchange), notices one move that makes it work (a register
marker, a reading strategy, a politeness formula), practises the move, then
uses it.

### 1.1 The act loop

Every act from 2 to the second-last follows the same four beats:

1. **Meet the text.** One anchor text, as a `reading`, `listening`, `scene` or
   `story`. Real length for B1: 60 to 160 words for a reading, 4 to 10 turns
   for an exchange. The text comes FIRST, before any explanation.
2. **Notice the move.** One section that names what the text did: `focus`,
   `examples`, `tapTable` or `useCases`. Short, French-first, with English.
3. **Practise the move.** Two to four checks on NEW material, not on the
   anchor text: `groupDrill`, `trapDrill`, `commonErrors`, `listening`
   questions. Register and strategy are judgements, so most checks are
   "which is better HERE, and why", with the `why` doing the teaching.
4. **Use it.** One small production: a `scenario` with choices, a `practice`,
   or a rewrite (the same message in another register, a summary line).

Act 1 is the scene that shows the problem (as in every B1 lesson). The last
act is the production act: the full `task`, plus the closing sections the
playbook requires (cheatSheet, progressCheck, reviewDeck, roundup).

### 1.2 What is different from a grammar lesson

- **Size.** 60 to 80 missions in 9 to 12 acts. Texts are longer, so there are
  fewer missions for the same time. Do not pad to 85.
- **More texts.** 6 to 9 `reading` or `listening` sections (a grammar lesson
  has 3 to 7). Every act from 2 onward has an anchor text.
- **Fewer cards.** `cardDeck` 4 to 8, not 10 to 12. Items are PHRASES that do
  a job (« Je vous prie de… », « En gros », « Il paraît que »), not word
  lists.
- **The quiz tests judgement.** Most rounds give a short text or situation and
  ask which version fits, what a text is doing, or what a strategy tells you.
  `typeIn` is used for rewriting a short phrase, not for spelling forms.
- **The task is central.** The graded `task` is announced in act 1 ("à la fin,
  tu vas écrire…") and every act adds one tool for it.
- **Register lessons** show the SAME content in two or three registers side by
  side (familier / courant / soutenu) at least once per act. Never label a
  register "wrong": say where it fits and where it does not.
- **Strategy lessons** (reading, listening) teach the strategy on a text the
  learner could NOT read word by word, then show that the strategy got the
  meaning anyway. Unknown words are expected and glossed only after the
  strategy has been tried.

### 1.3 What stays exactly the same

Openers with art on every act, one quiz of 8 to 12 rounds × 8 with one drill
per round, 3 to 5 sheets all linked by `sheetId`, the English always authored,
tu for the learner, no em dash, the banned lists, the answer-slot rules, the
id block, the image prompt file, the per-act validate loop.

### 1.4 Amended after the pilots (2026-09-26, b1.25, b1.26, b1.37)

What three workshop lessons found when they built to 1.1-1.3:

- **Every act still ends with its act check.** The loop in 1.1 is the body of
  the act; the gated check closes it, as in every B1 lesson.
- **The "use it" beat has no free-writing surface.** Short of the `task`, the
  flow has no in-mission free text. So "use it" is a short `scenario` (pick
  the line that fits), or, in a strategy lesson, choosing the best summary
  line. Vary the mechanic across acts where you can; eight identical
  scenarios in a row were the pilot's weak spot.
- **Name the beat the same way in every act** (b1.37 titled it « Pour ton
  résumé » throughout). A reviewer, and a learner, then see the loop.
- **Practise on new material, except when the anchor text needs one more
  look.** A single check on the anchor, placed as part of "meet", is fine.
- **Sizes that landed:** 67 to 77 missions, 10 or 11 acts, about 6 missions
  per act before the closing act.
- **Text counts:** 6 to 9 texts for a register lesson; a STRATEGY lesson needs
  one per act, so about 12.
- **Stories:** the playbook's "3 to 6 stories" does not apply. Workshop acts
  open on readings and listenings, so 1 or 2 stories is normal.
- **Summary tasks need their source text on screen.** `TaskView` has no source
  field, so the text is printed again inside the brief. That works; a
  `source` field on `task` would be the cleaner fix and is an open question.
- **`Lesson.skill` follows what the lesson remediates**: 'CE' for a reading
  lesson, not 'PE', even though its task is written.
- **The quiz is reshuffled every attempt, but validateDensity's quiz-spread
  still checks the authored order.** Rotate each question's options together
  with its `correct` index (`spreadSlots()`), which changes no text.
- **Register lessons may fill each row's `register` field** (familier,
  courant, soutenu). b1.25 is the first corpus to use it.

## 2. The vocab shape (idiom and topic lessons)

Lessons: b1.27 body idioms, b1.28 animal and food idioms, b1.29 colour
expressions, b1.33 environment and society, and later b1.34 to b1.36.

**A vocab act is built around a FAMILY of expressions in USE.** The sequence
doc's line holds: the mission journey, built around word families,
collocations and a reading.

### 2.1 The act loop

1. **Meet them in context.** A `story`, `scene` or short `reading` where 4 to
   8 expressions of the act's family appear naturally.
2. **Learn them.** A `cardDeck` of the act's expressions: `fr`, `en`, a
   literal gloss where it helps (« avoir le bras long », literally "to have a
   long arm", means to have influence), and one example sentence each.
3. **Tell them apart.** `groupDrill` and `trapDrill` on meaning, on the false
   friend with English, and on the expression that looks right but does not
   exist (the trap is always named: « avoir la main verte » vs "green hand").
4. **Use them.** A `scenario` or `practice` where the learner picks or places
   the expression that fits a real situation.

### 2.2 Rules for idioms

- **Only expressions a B1 learner will actually hear.** Frequent, current,
  spoken. Mark register (familier / courant) on every card. No rare literary
  idioms, no dated slang.
- **Mark the francophone variant** when an expression is Québec-, Belgium-,
  Switzerland- or Africa-specific, and never present a regional one as
  universal. The house lean is slightly Canadian.
- **Literal image first, meaning second, then the English equivalent,** which
  is often a different image (« coûter les yeux de la tête » / "cost an arm
  and a leg"). That contrast is the memory hook.
- **No idiom list longer than 8 per act.** 50 to 70 expressions per lesson in
  total is the ceiling, and each must be used at least twice outside its card.
- **Size.** 75 to 90 missions in 10 to 12 acts, like a grammar lesson.
- **Task.** A short text that uses a set number of the lesson's expressions
  correctly and naturally (a message, an anecdote), graded on fit, not count.

### 2.2a Amended after b1.27 and b1.28 (2026-09-26)

- **The loop held with no new section types:** meet in context, `cardDeck`
  (register, literal picture, meaning, English), build from the A1 literal
  word to the idiom, use in situations, a named trap, then the act check.
  About 7 missions per act, 88 in all.
- **Open each build drill with the literal seed word beside its idiom**
  (« un lapin » → « poser un lapin »). That is how the A1 vocabulary rows get
  reused and cited.
- **Traps run both ways:** the English picture carried into French (« donner
  une main »), and a look-alike French phrase that does not exist.
- **Two groupDrills per act is normal** for this shape, so a vocab lesson runs
  to about 30 groupDrills.
- **An idiom whose key image is ambiguous is orphaned** unless someone owns
  it. « avoir la chair de poule » fell between b1.27 and b1.28 and is taught
  by neither. Assign ambiguous idioms by name in the brief.
- **`fold()` does not decompose « œ »**, so a typed answer with cœur, œil or
  œuf also accepts « oe ». And a regex `\w` does not match accented letters:
  count usage with explicit character classes.
- **Mark `register` on every row** (familier or courant), as b1.27 did.

### 2.3 Rules for topic vocabulary (b1.33 and later)

- Word families (polluer, la pollution, polluant, un pollueur) and
  collocations (réduire ses déchets, faire le tri, prendre les transports en
  commun) are the unit of teaching, never isolated nouns.
- At least one `reading` of 120 to 180 words per two acts, from the kinds of
  text a B1 learner meets: a news brief, a municipal notice, a forum post.
- The task is an opinion or proposal text (a message to a local council, a
  forum reply) that links back to b1.14 to b1.16 (the subjunctive) and b1.30 to
  b1.32 (connectors) where natural.
