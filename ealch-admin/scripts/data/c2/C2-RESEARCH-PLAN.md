# C2 research plan

Companion to `C2-BUILD-PLAN.md`, written the same day (2026-10-08), at the
same stage C1-RESEARCH-PLAN.md reached before C1's wave 1 was authored. Per
lesson: scope, what it builds on and must not re-teach, DB/seed inventory,
sources, exam target, id home (repeated from the build plan for convenience),
and risks. Nothing here is drafted lesson content; no corpus file exists yet
for any of the 14.

## c2.01 — C2 language use: precision, nuance and the implicit

- **Scope**: after this lesson the learner chooses the one word among several
  near-synonyms that carries the exact register and connotation wanted, AND
  reads what a short text implies without stating it (irony, presupposition,
  understatement), producing a reply that matches the register it was given in.
- **Builds on**: c1.20 taught RECOGNISING irony, presupposition and omission
  (pure R shape, never asks for production); c1.06 taught hedging/modality in
  speech; c1.17 taught connotation and register in synonym choice; c1.19 taught
  naming a stylistic device's effect. c2.01 is the first lesson that asks the
  learner to PRODUCE the implicit, not just spot it.
- **DB/seed inventory**: nuances-et-registres theme (469 items, c1-c2 already)
  holds c1.06 and c1.17's rows; reuse candidates for recap acts live there by
  id, Postgres-first.
- **Sources**: Le Robert and TLFi/CNRTL for connotation entries; Académie
  française « Dire, ne pas dire » for register judgement calls; no history/law
  fact-check needed.
- **Exam target**: none wired; see build plan's "future exam link" note.
- **Id home**: nuances-et-registres, block 1400-1599 (no theme widen needed).
- **Risks**: register judgement is often contested between sources (soutenu vs
  littéraire boundary); state verdicts as « selon … », the c1.18 pattern.

## c2.02 — Literary French: complete analysis

- **Scope**: the learner reads a full literary extract (not an isolated
  sentence) and produces a structured analysis covering register, narrative
  voice, structure and at least one figure of style, tying them together
  rather than naming them in isolation.
- **Builds on**: c1.02 (passé antérieur in narrative sequence), c1.03 (literary
  subjunctive), c1.19 (naming a figure's effect) each taught one piece; c1.14
  (film/literature/arts: reaction to analysis through form) is the closest
  whole-lesson analog and the one c2.02 must clearly go past, into a longer,
  integrated close reading.
- **DB/seed inventory**: litterature theme (1150 items, b1-c1) holds all four
  predecessors' rows; its six sub-themes already map the territory (récit,
  passé simple, narrateur/point de vue, subjonctif littéraire, passé antérieur,
  concordance littéraire) — c2.02 is explicitly the lesson that integrates them.
- **Sources**: Wikisource/Gutenberg for public-domain extracts (verified word
  for word, never paraphrased as if quoted); Grevisse for any grammar aside.
- **Exam target**: none wired.
- **Id home**: litterature, block 2000-2199 (widen theme to c2).
- **Risks**: copyright — only public-domain extracts, or original text clearly
  labelled as such, same rule C1 followed.

## c2.03 — Advanced idiomatic expressions: 100 items

- **Scope**: the learner recognises and correctly uses 100 advanced
  idiomatic/figurative expressions in context (not isolated translation).
- **Builds on**: c1.17 (connotation, register, collocation) is the closest
  cousin but never built a dedicated idiom bank; b1/b2's `expressions-imagees`
  rows (body, animals/food, colours, proverbs) are the expression FAMILIES
  this lesson extends past B2's level into literary/formal idioms.
- **DB/seed inventory**: expressions-imagees theme (692 items, b1-b2, four
  200-blocks already used through 1600-1799) — probe for near-duplicate
  idioms already covered at b1/b2 before picking the 100, so c2.03 extends
  rather than repeats.
- **Sources**: Larousse and Le Robert idiom entries; OQLF BDL for Québécois
  variants if any are included (per the mixed-francophone setting decision).
- **Exam target**: none wired.
- **Id home**: expressions-imagees, block 1800-1999 (widen theme to c2).
- **Risks**: "100 items" is a vocab-lesson scale decision (closer to B1/B2's
  vocab lessons than C1's, which ran smaller word lists) — confirm the mission
  count against RICH-LESSON-STANDARD's cap before authoring.

## c2.04 — Verlan, argot et registres (literary/ironic use, past B2)

- **Scope**: the learner reads verlan/argot used deliberately for literary or
  ironic effect (free indirect style, character voice in fiction, a formal
  text quoting slang for effect) and explains WHY the author chose it there.
- **Builds on**: **b2.32** taught recognise-and-avoid (knowing a slang term
  exists and when NOT to use it in formal writing). c2.04 is the opposite
  direction: analysing slang's deliberate literary deployment. Never re-teach
  b2.32's vocabulary list; cite it by trail position and move past it.
- **DB/seed inventory**: argot-classique theme (110 items, legacy ids only,
  b2-c1) — "L'argot classique" is literally the register this lesson needs;
  verlan/argot-des-jeunes themes (b1-b2 range) are the WRONG home, they are
  about everyday/youth slang, not its literary use.
- **Sources**: Bruant's argot dictionary or Céline/Queneau-era literary slang
  for period-accurate examples if contemporary fiction extracts are not public
  domain; San-Antonio-style contemporary pastiche is an option if no suitable
  public-domain extract exists (write original text, labelled as such).
- **Exam target**: none wired.
- **Id home**: argot-classique, block 1000-1199 (widen theme to c2).
- **Risks**: slang dates fast; verify any contemporary-sounding term is still
  current via OQLF/Usito before using it as a positive example, not just a
  period piece.

## c2.05 — Étymologie et formation des mots

- **Scope**: the learner derives a word's probable meaning from its roots,
  prefixes and suffixes (Greek/Latin stock, native French derivation) and
  explains how French built a given word historically.
- **Builds on**: c1.18 (false friends, word-level) is the closest owner but
  only covers calques; nothing today teaches word FORMATION systematically.
  This merges what were originally Paul's separate items 5 ("word
  formation — prefixes & suffixes") and 6 ("French etymology") into one.
- **DB/seed inventory**: none — this is a genuinely new theme (`etymologie`),
  confirmed absent from all 141 existing `content_themes` rows by direct
  query, 2026-10-08.
- **Sources**: TLFi/CNRTL (every entry carries an etymology section), Bloch
  & Wartburg's "Dictionnaire étymologique de la langue française", Le Robert
  historique.
- **Exam target**: none wired.
- **Id home**: new theme `etymologie` (domain fondations, c1-c2), block
  1000-1199 — the theme row itself does not exist yet, create before import.
- **Risks**: etymology is a research-heavy lesson (every claim needs a named
  source, no folk etymology); budget more fact-check time than the other 13.

## c2.06 — La médiation linguistique

- **Scope**: the learner reformulates a specialist or technical French text
  (legal, medical, scientific) for a named different audience (a child, a
  layperson, a foreign colleague), preserving meaning while changing register
  and complexity — the CEFR C2 "mediation" descriptor, not covered by any
  existing lesson.
- **Builds on**: **c1.22** (translating complex ideas by reformulation) is the
  direct predecessor; c2.06 is that same reformulation skill aimed at a named
  AUDIENCE change rather than a language-to-language translation.
- **DB/seed inventory**: langue-soignee theme already owns "traduire sans
  calquer" (c1.18... no, c1.05's home) and "traduire des idées" (c1.22) as
  sub-themes — c2.06 continues that exact thread, same theme, next block.
- **Sources**: OQLF Vitrine linguistique (plain-language guidance), Légifrance
  or a public health authority's own plain-language rewrite of a technical
  notice, for a real before/after model.
- **Exam target**: none wired.
- **Id home**: langue-soignee, block 2400-2599 (widen theme to c2).
- **Risks**: choosing a real specialist source text risks copyright; prefer a
  government/public-sector plain-language source (usually explicitly reusable)
  or write an original technical passage, labelled as such.

## c2.07 — Translating French poetry (optional enrichment)

- **Scope**: the learner translates or closely paraphrases a short French poem
  into English (or vice versa) while preserving tone, rhythm cues and imagery,
  explicitly accepting that no translation is perfect — an enrichment lesson,
  not an exam-critical one.
- **Builds on**: c1.22 (translating ideas by reformulation), c1.19 (naming a
  stylistic device's effect); this is the only lesson in the 14 explicitly
  flagged optional, per the one surviving hint from the lost 2026-09-22 list
  ("c2.07 poetry is optional enrichment", `B1-C2-BUILD-SEQUENCE.md`).
- **DB/seed inventory**: litterature theme, same as c2.02; no dedicated poetry
  rows exist yet.
- **Sources**: Wikisource/Gutenberg for public-domain French poems (Baudelaire,
  Verlaine, Apollinaire — all public domain); never a post-1960s poem without
  verified public-domain or licensed status.
- **Exam target**: none wired.
- **Id home**: litterature, block 2200-2399 (covered by c2.02's widen).
- **Risks**: same copyright rule as c2.02; also the highest risk of the 14 of
  running over scope if Paul wants it cut under schedule pressure — confirm at
  wave 2 dispatch, not after the lesson is drafted.

## c2.08 — Spontaneous oral production

- **Scope**: the learner responds to an unplanned prompt (a question, an
  objection, a change of topic) in real time, without a prepared script,
  maintaining fluency and coherence.
- **Builds on**: **c1.09** (debate and formal oral expression: exposé, floor,
  objections, reformulation) is the structured predecessor; c2.08 removes the
  preparation time c1.09 assumed.
- **DB/seed inventory**: discours-dexamen theme (745 items, c1-c2 already)
  owns c1.09's rows under its "l'exposé et le jury" sub-theme.
- **Sources**: none fact-heavy; this is a production-shape lesson, sourcing is
  about realistic prompt design, not citations.
- **Exam target**: future PO@c2, if a `dalf_c2` speaking task is ever built.
- **Id home**: discours-dexamen, block 1800-1999 (no widen, already c1-c2).
- **Risks**: grading spontaneous production objectively is harder than a
  scripted task; the rubric needs explicit criteria for "coherent under time
  pressure", not just correctness.

## c2.09 — Maintaining discourse: long, sustained responses

- **Scope**: the learner sustains a single coherent response across several
  minutes (a monologue, a sustained argument) without losing structure.
- **Builds on**: **c1.09** again, from the length angle this time (c1.09 is
  turn-based/debate-shaped; c2.09 is one person holding the floor at length);
  also builds on c2.08 (same wave) for the spontaneity half of the skill.
- **DB/seed inventory**: discours-dexamen theme, next block after c2.08.
- **Sources**: none fact-heavy.
- **Exam target**: future PO@c2.
- **Id home**: discours-dexamen, block 2000-2199 (no widen).
- **Risks**: overlaps c2.08 conceptually; the brief must state the ownership
  split explicitly (c2.08 = unplanned prompts, c2.09 = sustained length) so
  authors do not duplicate missions.

## c2.10 — Synthèse experte et dissertation avancée, au-delà de C1

- **Scope**: the learner synthesises multiple dense sources under tight
  constraints into a structured essay, a harder genre than c1.10 asked for
  (c1.10 was "the problem question and plan types", single-source-oriented).
- **Builds on**: **c1.10** exactly; the brief must name specifically what
  c1.10 already covers (problem question framing, plan types — thèse/
  antithèse/synthèse and comparative plans) so c2.10 does not repeat it, only
  raises source count and density.
- **DB/seed inventory**: discours-dexamen theme owns c1.10's rows under "la
  dissertation et la synthèse" sub-theme; c2.10 continues it, next block.
- **Sources**: DALF C1/C2 writing specifications (France Éducation
  international) for the genre's real exam shape, even though no `dalf_c2`
  format exists yet in this app — useful as a content-difficulty reference.
- **Exam target**: future PE@c2.
- **Id home**: discours-dexamen, block 2200-2399 (no widen).
- **Risks**: the full DALF C2 synthesis task (multiple source documents) is
  long; confirm word/source counts with Paul before drafting, the same open
  question C1-BUILD-PLAN.md left for c1.10 itself.

## c2.11 — Compréhension orale experte, au-delà de B2

- **Scope**: the learner follows overlapping speakers, mixed registers,
  regional accents stacked together, and degraded-audio conditions — never
  asked to produce speech, only to extract the right information (R shape).
- **Builds on**: **b2.25** ("écouter à vitesse réelte", real-time listening at
  natural speed) is the exact predecessor; c1.21 (debates/interviews:
  turn-taking, interruption, fillers) is the closest C1 listening lesson.
  c2.11 stacks difficulty dimensions b2.25 and c1.21 each handled separately.
- **DB/seed inventory**: strategies-de-comprehension theme (1097 items, b1-c1)
  owns both predecessors' rows under "écouter à vitesse réelle" and the
  turn-taking content inside c1.21's discours-dexamen home (cross-theme recap).
- **Sources**: none fact-heavy; sourcing here is AUDIO difficulty design
  (accent selection per the mixed-francophone setting: FR, Québec, Belgique,
  Suisse, West Africa).
- **Exam target**: future CO@c2.
- **Id home**: strategies-de-comprehension, block 2200-2399 (widen to c2).
- **Risks**: ElevenLabs voice availability for stacked/overlapping audio and
  regional accents needs a feasibility check before this lesson is authored —
  flag at wave 3 dispatch, not after scripting.

## c2.12 — C2 reading: dense, unsimplified academic texts

- **Scope**: the learner reads genuinely dense academic/specialist prose
  (unsimplified, assumes background knowledge) and extracts argument
  structure, not just content, under a realistic time constraint.
- **Builds on**: **c1.20** (reading between the lines: stance, irony,
  presupposition) taught INTERPRETATION; c2.12 goes past it into raw density
  and register, not interpretation depth.
- **DB/seed inventory**: strategies-de-comprehension theme, next block after
  c2.11; its "lire de façon critique" and "lire un texte" sub-themes are the
  closest existing territory.
- **Sources**: Le Monde / Cairn.info-style academic register models (never
  copy a live paywalled article verbatim; write an original text in that
  register, labelled as such, per the same copyright rule as c2.02/c2.07).
- **Exam target**: future CE@c2.
- **Id home**: strategies-de-comprehension, block 2400-2599 (covered by
  c2.11's widen).
- **Risks**: "dense academic" risks drifting into a specific discipline's
  jargon (law, medicine, philosophy already have their own C1 vocab lessons);
  keep the TEXTS general-academic register, not discipline-specific terms.

## c2.13 — Correction and self-editing

- **Scope**: the learner reviews their own (or a model) C2-level text and
  finds register slips, redundancy, dangling reference and weak transitions,
  then fixes them.
- **Builds on**: no single owner; draws on c1.05 (ellipsis/anaphora — exactly
  the kind of reference error this lesson catches), c1.06 (register), c1.17
  (connotation/register), c1.22 (reformulation) — the whole langue-soignee
  thread, recapped rather than re-taught.
- **DB/seed inventory**: langue-soignee theme, next block after c2.06 (same
  widen).
- **Sources**: none fact-heavy; model "before" texts should be AUTHORED with
  deliberate, realistic errors (not sourced), so no copyright question.
- **Exam target**: none wired.
- **Id home**: langue-soignee, block 2600-2799 (covered by c2.06's widen).
- **Risks**: writing convincing "flawed" model text that is wrong in the RIGHT
  way (a C2 learner's plausible slip, not a beginner error) is harder than it
  looks; brief the author to model errors on real patterns from pre-review
  notes across B1-C1 (the lesson-standard documents list recurring mistakes).

## c2.14 — Mastery portfolio exercise — capstone

- **Scope**: a single extended task citing skills from across the C2 band (and
  implicitly C1) — the band's closing exercise, mirrored on how B1/B2/C1 each
  ended with a review/bilan-shaped lesson.
- **Builds on**: the whole C2 band; written last, after the other 13 exist, so
  its brief can cite exact trail positions instead of placeholders.
- **DB/seed inventory**: discours-dexamen theme, next block after c2.10.
- **Sources**: none new; this lesson recombines existing C2 rows by id.
- **Exam target**: none wired (it is a capstone exercise, not an exam task).
- **Id home**: discours-dexamen, block 2400-2599 (no widen).
- **Risks**: must be authored LAST in wave 4, after c2.01-13 exist in the seed,
  or its trail-position citations will be placeholders that go stale — do not
  let wave 4 dispatch c2.14 before c2.13 lands.
