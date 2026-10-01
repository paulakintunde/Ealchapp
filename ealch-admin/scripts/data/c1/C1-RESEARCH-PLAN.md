# C1 research plan

Written 2026-09-30 in C1 Phase 0, from five read-only inventories (one per unit;
probes in `ealch-admin/scratch/_c1r_u{1..5}_*.mts`, Postgres read inside
`BEGIN TRANSACTION READ ONLY`) merged and checked here. It is the brief an
author agent reads BEFORE writing a C1 lesson: what C1 adds, what B1/B2 already
own (never re-teach it), what rows exist to reuse, which sources to check, the
exam link, the id home, and the traps. It drafts nothing.

Read with `C1-BUILD-PLAN.md` (the 24 lessons, waves) and `C1-BUILD-LOG.md`
(decisions, ledger, progress).

## Findings that apply to every lesson

1. **The 913 c1 rows ARE published, and reusable by id.** Postgres holds 913 c1
   items, all `status = published` (discours-dexamen 165, nuances-et-registres
   165, francais-professionnel-avance 165, culture-profonde 161, rhetorique 160,
   argot-classique 70, philosophie 10, methode-scientifique 6, ethique 6,
   decouvertes 5). They reach phones in the c1 pack through the Speak trail's
   world 6 (`speak.6.1` to `speak.6.5`). The local test corpus
   (`seedPlusPacks()`) shows only 29 of them because it is a CUT (memory: the
   seed is a cut of the DB), so "absent from the seed" never means "unpublished".
   The importer accepts a reused row that is published in Postgres, and the merge
   pulls it into the seed layer. Since Phase 0 all five themes have a
   `content_themes` row (c1-c2).
2. **Legacy c1 rows are below house standard.** Straight apostrophes, « ? » with
   and without the space, « au delà » without its hyphen, one wrong mood
   (`fr.c1.francais-professionnel-avance.024` « au cas où les tests dérapent »:
   needs the conditionnel « déraperaient »), one real-world figure
   (`fr.c1.discours-dexamen.145`, Vancouver house price) and one sensitive
   Québec topic (`.017`, protecting French at work). Reuse a legacy row only
   after reading it; a fix is a text edit (no version bump) and needs `--reapply`.
3. **Theme ranges.** `validateCorpus` refuses an item whose level is outside its
   theme's range. Widening is a Postgres write (Paul's OK each time). Needed
   before the lesson that uses it imports:

   | Theme | Range today | Needed for |
   |---|---|---|
   | `strategies-de-comprehension` | **b1-c1 (widened in Phase 0)** | c1.20, c1.24 |
   | `litterature` | b1-b2 | c1.02, c1.03 |
   | `pronoms-essentiels` | a1-b2 | c1.04 |
   | `langue-soignee` | a2-b2 | c1.05, c1.22 |
   | `connecteurs-logiques` | a2-b2 | c1.07 |
   | `faux-amis` | sons-sons (its 322 a1 rows already break it) | c1.18 |
   | `philosophie`, `ethique` | b2-c1 | nothing to do |
   | the five new themes | c1-c2 | nothing to do |

4. **Trail positions.** Read from each lesson file's header, never from slug
   order (`B2_SLUGS` lists b2.22-26 last). Cite in words: « la leçon 24 du B2 ».
5. **Exam routing is cosmetic for CE and CO.** All 12 C1 exam tasks are closed
   MCQ (`ce_mcq`, `co_mcq`). `dueExamSkills` routes only OPEN task types, so the
   `CE@c1` / `CO@c1` entries prepared in Phase 0 (and the live `CE@b2` / `CO@b2`)
   are never consulted. A failed closed task only re-queues its `targetItemIds`.
   For c1.20 and c1.21 to help a learner who fails, Paul chooses: repoint the 12
   tasks' `targetItemIds` to c1.20 / c1.21 rows (a content write), or change the
   exam report to offer a prep lesson for closed skills (code), or both.
   **Defect:** the TEF C1 tasks (`exam.tef_canada.blanc-01.ce_mcq.006`,
   `.co_mcq.006`) target A1/A2 rows (`a1.maison`, `a2.communaute`, `a1.la-ville`
   …), so a failed C1 reportage re-queues basic vocabulary.
6. **No PE@c1 or PO@c1 task exists**, and `EXAM_FORMATS` (and the Postgres
   `exam_format` enum) has no `dalf_c1`. A DALF C1 paper needs a new format value,
   an enum migration (two migration systems, one database), and a dossier
   stimulus no task type models. Cheaper route: tag TEF / TCF Canada PE and PO
   tasks at c1. Either way Paul decides before `PE@c1` / `PO@c1` route.
7. **Copyright.** Public domain in France is life + 70 years, with war
   extensions (Saint-Exupéry about 2032). Protected: Camus, Sartre, Beauvoir,
   Duras, Prévert, Queneau, Gary, Roy, Hébert, Tremblay, every film. Quote only
   from Wikisource or Gutenberg, word for word against a dated edition; otherwise
   write original text labelled « texte original écrit pour la leçon ». b2.30
   already used Flaubert, Proust, Maupassant, Daudet, Zola, Nelligan, Hugo,
   Baudelaire and Voltaire lines: do not repeat them.
8. **People and outlets.** Invented speakers, companies, outlets and institutes
   only (house inventions: Tessère, Coworka, Meubles Boréal, Spoke & Chain,
   Institut Verlune). Never a living politician; no real campaign or speech.
9. **Norm disagreements** (Académie vs Le Robert vs OQLF) are the core risk of
   c1.07, c1.11, c1.18, c1.22, c1.23: a card says who says what, never just
   "wrong". France is the default with Québec variants tagged, as b1.25 and
   b2.26 did, and OQLF is cited, not overridden.
10. **TTS limits.** Device TTS and a single ElevenLabs voice cannot render
    overlapping speech; interruption scripts need multi-voice renders (the E8
    turn-list path) or studio voices. Verse needs a line break, not « / ».
11. **The scope check is the main quality risk at C1.** Five lessons (c1.02,
    c1.03, c1.06, c1.07, c1.10) sit close to B2 lessons. Each section below names
    what is already owned; act 1 must say it in a recap and go past it.

## Reference shelf (per lesson below, by key)

- **R** Le Robert · **L** Larousse · **T** TLFi / CNRTL · **G** Grevisse, *Le Bon
  Usage* (cite edition and paragraph) · **A** Académie française « Dire, ne pas
  dire » (quote its exact verdict) · **Q** OQLF Vitrine linguistique and BDL ·
  **U** Usito · **B** BDLP · **W** Wikisource / Gutenberg (PD only, word for
  word) · **F** France Éducation international, DALF C1 épreuves and sample
  papers · **E** TEF Canada (CCI Paris) and TCF Canada (FEI) guides, NCLC 9-10 ·
  **C** CEFR Companion Volume 2020 (quote descriptors only after checking).
- **Fact check** marks a lesson whose history, culture, law, literature or
  statistics must be verified before the pre-review, listed in the corpus header
  §A.7 as at B2.

---

## Unit 1: Expert grammar as interpretation

### c1.01 C1 grammar overview (W, diagnostic)
- **Scope:** audits their own production against the C1 accuracy descriptor and
  sorts every B1-B2 structure into must-produce, recognise-only, and my weak spot.
- **Builds on:** all of B2. B2 builds lessons 1-7 and 10-21; recognition-only
  whole lessons 8 (passé simple) and 9 (subjonctif littéraire); recognition inside
  built lessons: passé antérieur (8, 18), « ayant fini » (12), quelque… que and
  nonobstant (16), ne… point (21), ne explétif (9, 18). B1 recognition-only:
  depuis + imparfait (4), conditionnel d'information (34), ne… guère (20), or (30),
  « après qu'il soit parti » (31). The diagnostic routes each gap back by trail
  position and teaches nothing new.
- **Inventory:** reuse B2 rows by id (all in the b2 pack, fetched before c1).
  `discours-dexamen` c1 1-165 is exposé phrasing, not grammar.
- **Sources:** G, C, F, E, Q. No fact check.
- **Exam:** none.
- **Home:** `discours-dexamen` 1000-1199 (claimed; sub-theme « faire le point
  sur sa grammaire »).
- **Risks:** re-teaching creep; cite only published positions (B2 1-34, v84).

### c1.02 Passé antérieur in literary narrative (R)
- **Scope:** recognises the passé antérieur in an unsimplified literary page and
  explains its sequence effect (immediate anteriority, rapid completion), mapping
  it to today's passé composé or surcomposé.
- **Builds on:** « la leçon 8 du B2 » (passé simple; gave the passé antérieur one
  card and one trap, act 7); « la leçon 18 du B2 » (« Dès qu'il eut fini… » mapped);
  « la leçon 9 du B2 » act 5 (eut / eût); « la leçon 1 du B2 » (anteriority).
  NEW: full paradigm with être; « À peine eut-il… que »; main-clause use with
  bientôt / en un instant; contrast with the plus-que-parfait on one page; the
  surcomposé as spoken counterpart; effect on pace.
- **Inventory:** about nine rows in the whole corpus (`fr.b2.litterature.1122`,
  `.1124`, `.1126`, `fr.b2.connecteurs-logiques.2575`, `.2581`). No c1 rows.
- **Sources:** G, R, L, T, A (surcomposé), Q, W. **Fact check** (literature).
  PD candidates: Mérimée (« Mateo Falcone », « Carmen »), Maupassant (« Boule de
  suif »), Flaubert (« Trois contes »), Dumas, Stendhal, Hémon (« Maria
  Chapdelaine »).
- **Exam:** none.
- **Home:** `litterature` **1600-1799** (plan's 1400 is b2.30's); widen range.
- **Risks:** recognition only (no production card); thin new ground after B2 8,
  9 and 18, so padding is the risk; surcomposé is regional and marked: recognise,
  never prescribe.

### c1.03 Literary subjunctive: concordance and effect (R)
- **Scope:** follows the classic concordance des temps in a literary text, says
  why an author keeps or breaks it and what register effect it creates, and maps
  each form to today's usage.
- **Builds on:** « la leçon 9 du B2 », whose act 7 « La concordance » already
  teaches the core map (past main verb → imparfait du subjonctif in books,
  présent today; eût fini → ait fini) and act 9 the living forms (fût-ce, dût-il).
  Also lessons 5, 6 and 8 of B2. NEW (Paul's refocus): simultaneity vs
  anteriority in full; conditionnel in the main clause (« je voudrais qu'il
  vînt »); concessive and hypothetical inversion (« eût-il su », « fût-il
  roi »); deliberate non-concordance in modern prose and press; register effect
  (solemnity, irony, pastiche).
- **Inventory:** b2.09's 1200-1396 block (`fr.b2.litterature.1326`, `.1327`,
  `.1345` are the concordance rule rows). No c1 rows.
- **Sources:** G, A, Q, T, R, W. **Fact check** (literature). PD candidates:
  Corneille (« Horace » III, 6), La Fayette (« La Princesse de Clèves »),
  Stendhal (« La Chartreuse de Parme »), Balzac (« Eugénie Grandet »),
  Chateaubriand (« Mémoires d'outre-tombe »), Proust (not b2.30's line).
- **Exam:** none.
- **Home:** `litterature` **1800-1999**; widen range.
- **Risks:** heaviest B2 overlap of the band: the first card states what B2 9
  gave, then only the NEW list. Strictness of modern concordance is contested:
  present both, cite G.

### c1.04 Advanced relative clauses (G)
- **Scope:** builds and decodes relatives with distant or clause-length
  antecedents, compound prepositions and nested relatives, and resolves their
  attachment when reading.
- **Builds on:** « les leçons 11, 12 et 13 du B1 » (qui/que look-behind; dont's
  three families and où; lequel, auquel/duquel, the compound preposition forcing
  duquel, ce qui/ce que/ce dont); « la leçon 6 du B2 » acts 5-6 (subjunctive in
  relatives). NEW: partitive dont (« dont deux enfants »); ce à quoi, sans quoi,
  de quoi + infinitive; relative + infinitive (« un endroit où dormir »); lequel
  as subject to disambiguate; attachment ambiguity in long noun groups; nested
  relatives by register; explicative vs déterminative as meaning; où vs dans
  lequel with abstract antecedents.
- **Inventory:** 54 published c1 rows already carry advanced relatives
  (culture-profonde 25, nuances-et-registres 12, rhetorique 9, discours-dexamen
  5, fpa 2), e.g. `fr.c1.nuances-et-registres.047`, `fr.c1.culture-profonde.093`,
  `fr.c1.rhetorique.143`. B1 relative blocks: `pronoms-essentiels` b1 1000-1599.
- **Sources:** G, Q, A (dont redundancy), R, U. Fact check only for reused rows
  touching Canadian history (Conquête, pensionnats).
- **Exam:** indirect; CE/CO texts use « dans laquelle », « pendant lequel ».
- **Home:** `pronoms-essentiels` **2000-2199** (beside the B1 relative blocks;
  plan's `langue-soignee` 1800 is b2.33's); widen range.
- **Risks:** « que je crois qui » is colloquial (recognise, label); « c'est de
  cela dont » trap wording must follow Q/G; b1.13 owns duquel after a compound
  preposition.

### c1.05 Ellipsis and anaphora (G)
- **Scope:** tracks reference chains and recovers omitted material across long
  texts and fast speech, and uses these devices to write cohesive prose.
- **Builds on:** « la leçon 11 du B2 » act 3 (detachment and resuming pronoun);
  « la leçon 10 du B2 » (nominalisation); « la leçon 37 du B1 » act 8 (ce
  dernier, le premier / le second); « la leçon 33 de l'A2 » (démonstratifs).
  NEW: le neutre (« il l'est », « comme je l'ai dit »); faire as pro-verb;
  verb ellipsis (« Pierre lit Proust ; Marie, Zola »; « plus qu'on ne le
  pense »); celui de / celle que; ledit, susdit, le cas échéant; interrogative
  ellipsis (« nous savons laquelle »); repairing ambiguous anaphora; nominal
  reprise by hypernym.
- **Inventory:** no ellipsis rows anywhere; reprise rows
  `fr.b2.pronoms-essentiels.1834`-`.1838`, b1.37 chain rows near
  `fr.b1.strategies-de-comprehension.1146`.
- **Sources:** G, R, L, Q (ce dernier, ledit), U, A. No fact check.
- **Exam:** indirect but the clearest Unit 1 link: a "what does X refer to"
  round in CE format fits.
- **Home:** `langue-soignee` **2000-2199**; widen range.
- **Risks:** « ellipse » in b2.30 is the narrative time-skip: name the
  difference; « fatiguée, je le suis » (invariable le) is a learner trap; ledit
  is administrative and comic in talk.

## Unit 2: Discourse and rhetoric

### c1.06 Hedging and modality in speech (W)
- **Scope:** softens, distances and calibrates claims and requests in speech,
  disagrees diplomatically, marks hearsay and inference, and picks the
  politeness level for the setting and region.
- **Builds on:** « la leçon 9 du B1 » (request ladder, imparfait de politesse);
  « la leçon 8 du B1 »; « les leçons 25 et 26 du B1 »; « la leçon 20 du B2 »
  (impersonal families); « la leçon 22 du B2 » acts 5-6 (written hedging);
  « la leçon 24 du B2 » act 5 (writer's distance); « la leçon 26 du B2 » act 5
  (nuanced disagreement). Already taught: il semblerait que, il se pourrait que,
  vraisemblablement, tout porte à croire, si je peux me permettre, je ne saurais,
  prétendument, sauf erreur and more (full list in the unit 2 inventory). NEW:
  me semble-t-il, si je ne m'abuse, en quelque sorte, il y a fort à parier, il
  est permis de penser, je vous saurais gré de, un tant soit peu, à proprement
  parler, loin de moi l'idée de, sans vouloir + infinitive, avec tout le
  respect…, être amené à, rien n'indique que; epistemic devoir; litote and
  understatement; the hedged criticism in speech.
- **Inventory:** `nuances-et-registres` c1 1-165 (euphemism and understatement
  from about .065; history aphorisms .001-.050).
- **Sources:** R, L, T, G, A, Q, U, C. **Fact check:** Québec vs France
  politeness conventions; quote each A entry only after confirming it exists.
- **Exam:** none (feeds PO, PE).
- **Home:** `nuances-et-registres` 1000-1199 (no widening).
- **Risks:** hedge stacking (teach dosage); « sans vouloir te vexer » often
  introduces the opposite; regional variants tagged; euphemism examples kept
  generic. Ownership: euphemism and litote between c1.06 and c1.17 must be
  named in both briefs.

### c1.07 Expert discourse markers: reframing and closure (W)
- **Scope:** steers a long text or talk with markers of progression,
  reformulation and correction, restricted concession and closure, chosen by
  register and function, without stacking.
- **Builds on:** « les leçons 30, 31 et 32 du B1 »; « la leçon 15 du B2 » (cause,
  consequence, du coup's register ladder); « la leçon 16 du B2 » (concession,
  certes… mais, il n'en reste pas moins, malgré que as contested); « la leçon 22
  du B2 » acts 3-4, 7; « la leçon 26 du B2 » acts 4, 10. NEW (Paul's refocus):
  reframing (plus exactement, ou plutôt, j'entends par là, en l'occurrence, à
  vrai dire, pour mieux dire) and closure (somme toute, tout bien considéré, en
  guise de conclusion, en tout état de cause); also qui plus est, au demeurant, à
  cet égard, dès lors, du reste, d'ailleurs, a fortiori, à plus forte raison,
  quitte à, sans compter que, loin s'en faut.
- **Inventory:** `connecteurs-logiques` a2 132, b1 655, b2 931 (b2 fills to 2599);
  closure rows in `discours-dexamen` c1, concession rows in `rhetorique` c1.
- **Sources:** G, T, R, A (du coup, au final, suite à, en termes de, voire même:
  quote each verdict), Q (par contre, au niveau de), F. **Fact check:** every A
  and Q verdict (they differ).
- **Exam:** none directly (feeds PE@c1 and CE/CO inference).
- **Home:** `connecteurs-logiques` **2600-2799**; widen range; new sub-theme.
- **Risks:** register traps need a ruling: teach « recognise, do not write »
  (b2.16's spoken-variant pattern) or skip; dès lors (temporal vs causal);
  connector stacking. Ownership with c1.10 (transitions) and c1.05.

### c1.08 Rhetoric and persuasion (W)
- **Scope:** recognises and uses credibility, reasoning, emotion, framing,
  analogy, rhetorical question and the pre-empted objection, and judges whether
  a persuasive move is fair.
- **Builds on:** « la leçon 23 du B2 » (thesis, concession, rebuttal, plans, six
  fallacies); « la leçon 24 du B2 » (distance, tone, interest); « la leçon 26 du
  B2 » act 9 (objection ladder); « la leçon 16 du B2 ». NEW: ethos / logos /
  pathos named; prétérition, anaphore, gradation as persuasive figures; analogy
  as an argument; framing and loaded wording; « on m'objectera que… »;
  authority vs expertise; producing a rhetorical question.
- **Inventory:** `rhetorique` c1 1-160 (concession formulas, rhetorical
  questions): good reuse stock.
- **Sources:** W (Aristotle, *Rhétorique*, Ruelle 1883 translation: confirm the
  Wikisource text first), Fontanier (*Les Figures du discours*, PD), R, T, C, F.
  Perelman and Amossy: concepts only.
- **Exam:** none (feeds PE@c1, PO@c1).
- **Home:** `rhetorique` 1000-1199.
- **Risks:** no living politicians, no modern speeches (de Gaulle, Malraux,
  Badinter, Veil are protected); PD oratory (Hugo, Jaurès, Zola's « J'accuse »)
  is loaded: Paul decides if any is used. Teach judge-first so it is not a
  manipulation manual. c1.08 owns persuasion; c1.19 literary effect; c1.24 press.

### c1.09 Debate and formal oral expression (W, future PO@c1)
- **Scope:** delivers a structured exposé from a dossier, then defends it before
  a jury: takes and holds the floor, reformulates a question, concedes and
  counters, closes.
- **Builds on:** « la leçon 26 du B2 » (chairing, floor, reformulating,
  disagreeing, closing); « la leçon 23 du B2 » (plans, problématique);
  « la leçon 25 du B2 » (debate by ear); « la leçon 22 du B2 ». NEW: the exposé
  genre; synthesis aloud from documents; the spoken problématique; formal floor
  toward a jury (vous); buying time under questioning; conceding in public
  without losing the thesis; closing a Q&A.
- **Inventory:** `discours-dexamen` c1 1-165 is exactly this stock (openings,
  plan, examples, closings); check `.145` and `.017` first. No c1 scenarios.
- **Sources:** F (DALF C1 PO: exposé from a dossier plus jury discussion; check
  every number), E (TCF Tâche 3, TEF section B), C, R, L, Q. **Fact check:** DALF
  format numbers.
- **Exam:** PO@c1 has no task. `scenario` can rehearse scripted turns only; the
  real exposé needs `po_monologue` + `po_debate` exam tasks (the DELF B2 pattern)
  under a new `dalf_c1` format, or TEF/TCF PO tasks tagged c1.
- **Home:** `discours-dexamen` 1200-1399.
- **Risks:** STT and grading untested past short answers: keep task segments
  60-120 s; invented dossiers on generic questions; jury register vous, learner
  tu. c1.09 owns formal production; c1.21 listening; c1.23 meetings.

## Unit 3: Advanced writing

### c1.10 Academic essays (W, future PE@c1)
- **Scope:** turns a subject into a real problem question and writes a
  well-structured essay, choosing among dialectical, thematic, analytical and
  comparative plans, with transitions that sum up and announce.
- **Builds on:** « la leçon 22 du B2 » (paragraphs, plan announcement, hedging;
  task 180-250 words); « la leçon 23 du B2 » (problématique as « la question que
  ton texte va trancher », dialectical and thematic plans, transitions; task
  250-350 words, rubric consigne / argumentation / cohérence / langue 4 each).
  NEW (Paul's refocus): the problématique as a tension or paradox, defining the
  sujet's terms; analytical and comparative plans; choosing a plan from the
  problématique; transitions-bilan; conclusion with ouverture; working from
  documents without copying (synthèse, no opinion); 250-400 words; rubric adds
  lexical precision and argument structure.
- **Inventory:** `fr.b2.opinions-et-avis.1717`, `.1732` (b2.23 plan rows);
  `universite` b2 1000-1167; written-register rows in `discours-dexamen` c1.
- **Sources:** F (DALF C1 PE: synthèse about 220 words from about 1000 words of
  documents, then essai of 250+; check), C, R, L, T, G, A, E. **Fact check:**
  DALF format; never name DALF in learner text until checked.
- **Exam:** PE@c1 has no task. One `task` per lesson with one word range, so
  the DALF pair (about 470+ words) does not fit: recommended an essai from a
  short dossier inlined in `brief`, 250-400 words, with the synthèse practised
  ungraded in an earlier act. Paul's call.
- **Home:** `discours-dexamen` 1600-1799.
- **Risks:** visible step past b2.23 or it repeats; « problématique » as a vague
  « problème » is criticised; dossier sources invented, any statistic marked
  invented.

### c1.11 Formal reports (W)
- **Scope:** writes a report (findings, analysis, recommendations), minutes and
  a case analysis in an impersonal register, condensing for purpose and reader.
- **Builds on:** « la leçon 39 du B1 » (email parts and formulas, task 120-150
  words); « la leçon 22 du B2 » (library report and briefing note as anchor
  texts); « la leçon 26 du B2 » (agenda, minutes mentioned); « la leçon 10 du
  B2 » (minutes condense into nouns). NEW: report architecture (objet, contexte,
  constat, analyse, recommandations, annexes); compte rendu vs procès-verbal;
  case analysis (problem, causes, options, criteria, choice); recommendation
  register (nous préconisons, il conviendrait de); executive summary.
- **Inventory:** fpa c1 has compte rendu / procès-verbal / ordre du jour rows;
  `fr.b2.connecteurs-logiques.2569`; b1 `correspondance` 1000-1183.
- **Sources:** Q (Le français au bureau; procès-verbal, compte rendu, minutes),
  R, L, T, A, U. **Fact check:** CR vs PV distinction (stated differently in
  France and Québec).
- **Exam:** none.
- **Home:** **change proposed:** `francais-professionnel-avance` 1200-1399
  (better fit than the plan's `discours-dexamen` 1800-1999; both free).
- **Risks:** anglicisms (les minutes, item, adresser, implémenter, deadline);
  b2.33 already owns supporter, adresser, réaliser, définitivement: cite.

## Unit 4: Culture and abstract vocabulary

### c1.12 Philosophy vocabulary (V)
- **Scope:** defines, distinguishes and uses abstract concepts (nécessité /
  contingence, cause / raison, croyance / connaissance, expliquer / justifier)
  with precise collocations, without name-dropping.
- **Builds on:** no lesson owns philosophy. « la leçon 22 du B2 » (register),
  « la leçon 23 du B2 » (argument moves), « la leçon 10 du B2 » (-ité, -isme
  nouns). About 320 b2 `philosophie` bank nouns (prémisse, sophisme,
  contingence…) were never taught: reuse as known, teach collocation and contrast.
- **Inventory:** `philosophie` b2 320, c1 10. Some b2 rows carry attributions
  (Sartre, Aristote): check before reuse.
- **Sources:** R, T, L, Académie dictionary (9th ed.), W for short PD lines
  (Descartes, Pascal, Montaigne, Rousseau); Lalande consulted only (protected).
  **Fact check:** every attribution.
- **Exam:** TCF blanc-04 CE (« expliquer n'est pas justifier »), blanc-02 CE and
  CO (consent, proof).
- **Home:** `philosophie` 1000-1199 (no widening).
- **Risks:** apocrypha (the « Voltaire » free-speech line is Evelyn Beatrice
  Hall's); headword ownership across c1.12 / c1.15 / c1.16 (proposal: c1.12
  epistemic and logical pairs, c1.15 political and social, c1.16 moral,
  aesthetic, memorial).

### c1.13 French history and culture (W)
- **Scope:** recognises and explains the references francophone press and
  speech take for granted (les Lumières, 1789, mai 68, 1905, l'appel du 18 juin,
  la Révolution tranquille, la Négritude) and says what invoking one means,
  without endorsing a reading.
- **Builds on:** no lesson owns history. « la leçon 31 du B2 » (francophone
  spread), « la leçon 24 du B2 » (stance), « la leçon 34 du B2 » (fixed cultural
  expressions: « franchir le Rubicon » is b2.34's kind, « un Waterloo » c1.13's).
- **Inventory:** about 60 scattered history rows (quebec-et-francophonie 17);
  `nuances-et-registres` c1 .001-.050 memory aphorisms.
- **Sources:** Assemblée nationale, Élysée, Légifrance (1789, loi de 1905),
  Vie-publique, BnF Gallica, Larousse; Québec: Encyclopédie canadienne, Assemblée
  nationale du Québec, Bilan du siècle; Belgium: belgium.be; Switzerland:
  Dictionnaire historique de la Suisse; Africa: UNESCO *Histoire générale de
  l'Afrique*, OIF. **Fact check:** every date, number, quotation and law.
- **Exam:** TCF blanc-01 CO (statues), blanc-04 CO (« autrefois les gens
  tenaient parole »).
- **Home:** `culture-profonde` 1000-1199 (or a new `histoire-et-memoire` theme:
  Paul's call).
- **Risks:** contested history (Vichy, Algeria and its naming, colonisation,
  laïcité 1905 vs Loi 21, the Acadian deportation, the Conquest): literacy, named
  sources, no verdict; at least one act each for Québec, Belgium, Switzerland and
  francophone Africa; apocrypha only as apocrypha (« L'État, c'est moi »,
  « brioche »); date-stamp anything "today".

### c1.14 Film, literature and arts: from reaction to analysis (W)
- **Scope:** moves from « j'ai aimé » to an argued analysis of how a film, text,
  painting or piece of music produces its effect, in a critique that weighs
  strengths and weaknesses.
- **Builds on:** « la leçon 30 du B2 » (narrator, focalisation, analepse,
  ellipse, tonalités, images with effect, incipit and chute, commentary
  formulas). NEW: film language (plan, cadrage, champ / contrechamp,
  plan-séquence, montage, hors-champ, bande-son), visual arts (composition,
  touche, clair-obscur), the critique genre.
- **Inventory:** `culture-profonde` c1 1-161 is reaction and critique lines:
  reuse for the reaction pole; `cinema` a1-b1 is everyday cinema-going.
- **Sources:** T, R, CNC glossary, Cinémathèque française, ONF, museum notices
  (Louvre, Orsay, MNBAQ), Larousse, W. **Fact check:** every film, painting and
  quotation detail.
- **Exam:** TCF blanc-05 CE (irony).
- **Home:** `culture-profonde` 1200-1399.
- **Risks:** films and post-1950 works: describe in original prose, never
  quote; Paul's art must not imitate a protected work or a director by name;
  canon balance (Québec, Belgian, African, Swiss references, verified).

### c1.15 Abstract vocabulary 1: justice, freedom, identity, power (V)
- **Scope:** handles the families and collocations of justice, liberté, identité
  and pouvoir in societal debate (équité vs égalité, libertés publiques, pouvoir /
  puissance / autorité, contre-pouvoir), choosing term and connotation.
- **Builds on:** « la leçon 27 du B2 » (legal-procedural sense); « la leçon 33 du
  B1 » (topic-vocab shape). identité a1-b2 is administrative only: the abstract
  sense is new. Bank rows in `valeurs` and `ethique` b2 (l'État de droit,
  l'impunité).
- **Inventory:** `ethique` b2 320, c1 6.
- **Sources:** R, T, A, L, U; primary texts on Légifrance, Justice Canada and
  LégisQuébec (1789 Déclaration, Charte canadienne 1982, Charte québécoise 1975).
  Fact check any article number.
- **Exam:** TCF blanc-01 CE (le mérite), blanc-02 CE (consent).
- **Home:** `ethique` 1000-1199 (no widening).
- **Risks:** loaded terms (identité nationale, laïcité, communautarisme):
  present uses, not positions; multiculturalisme vs interculturalisme; no legal
  claims without a source.

### c1.16 Abstract vocabulary 2: memory, truth, beauty, ethics (V)
- **Scope:** uses the families of mémoire, vérité, beauté and éthique with the
  right distinctions (sincérité / véracité / vraisemblance; morale / éthique /
  déontologie; le beau / le sublime).
- **Builds on:** no owner. « les leçons 28 et 29 du B2 » (ethics in care and
  research). beauté has no abstract-sense row anywhere: most new rows go there.
- **Inventory:** `philosophie` b2 320; `valeurs` b2 « le devoir de mémoire ».
- **Sources:** R, T, A, L; Ricœur cited, never quoted; Gallica for PD lines
  (Boileau, verify). **Fact check:** devoir de mémoire and memorial laws if named.
- **Exam:** TCF blanc-01 CO (statues), blanc-02 CO (proof), blanc-05 CE
  (collective responsibility), blanc-04 CE (refusing care).
- **Home:** `philosophie` 1200-1399 (no widening).
- **Risks:** memorial laws are sensitive: literacy only; infox (FranceTerme) vs
  fausse nouvelle (OQLF): mark both.

### c1.17 Advanced synonyms and antonyms (V)
- **Scope:** chooses among near-synonyms by intensity, register, connotation and
  collocation, and picks the antonym that matches the sense.
- **Builds on:** « la leçon 25 du B1 » (three registers, triplets, mismatch);
  « la leçon 26 du B1 »; « la leçon 33 du B2 » act 12; « la leçon 32 du B2 ».
  NEW: intensity scales, connotation, collocation, antonymy.
- **Inventory:** `nuances-et-registres` c1 euphemism and connotation rows.
- **Sources:** R (synonymes et nuances), CNRTL synonyms (CRISCO), Beauchesne
  (cooccurrences), U, A. Verify each collocation in a corpus, not by intuition.
- **Exam:** TCF blanc-03 CO (« bien parler »); connotation distractors.
- **Home:** `nuances-et-registres` 1200-1399 (no widening).
- **Risks:** overlap with c1.06 on euphemism and litote; Québec register labels
  differ (char, blonde, magasiner); anchor each judgement in a dictionary label.

### c1.18 False friends: high-level calques (V)
- **Scope:** spots the semantic anglicisms that survive into educated French
  (initier, opportunité, alternative, impacter, académique, versatile,
  juridiction, éligible, digital, faire sens, questionner), knowing which are
  condemned, which accepted, and where Québec and France differ.
- **Builds on:** « la leçon 33 du B2 » (attendre, prétendre, formation,
  introduire, achever, rester, supporter, adresser, définitivement, réaliser);
  also owned: « les leçons 35 et 37 du B1 », « les leçons 27, 28 et 29 du B2 ».
  The `faux-amis` bank (sons 111, a1 322) holds about 110 headwords: reuse as
  known.
- **Sources:** Q (BDL, GDT), U, A, R, FranceTerme, Multidictionnaire, the Belgian
  Service de la langue française. **Fact check:** every accepted / condemned
  verdict.
- **Exam:** TCF blanc-02 CE (« impacter »), blanc-02 CO (« intraduisible »).
- **Home:** `faux-amis` 1000-1199; widen range (also legalises the a1 rows).
- **Risks:** authorities disagree (state who says what); some calques are
  Québec-frequent (faire du sens, canceller, céduler), others France-frequent
  (impacter, deadline); c1.18 owns words, c1.22 ideas.

## Unit 5: Interprétation et médiation

### c1.19 Stylistic devices: the effect, not the name (W)
- **Scope:** identifies a figure or stylistic choice in a literary or
  argumentative text and writes one sentence on its effect.
- **Builds on:** « la leçon 30 du B2 » act 7 (comparaison, métaphore,
  personnification, each with its effect), acts 6, 8, 9, 11. B2 term rows exist
  for anaphore, oxymore, antithèse, hyperbole, euphémisme, métaphore filée,
  ironie (`fr.b2.litterature.031`, `.039`, `.062`, `.074`-`.078`, `.114`,
  `.1505`, `.1511`). NEW: litote, antiphrase, prétérition, chiasme, gradation,
  zeugme, hypallage, métonymie and synecdoque, allitération and assonance,
  rhythm (ternaire, cadence), effects of rupture.
- **Sources:** R, L, T (they differ on hypallage and zeugme), Fontanier (PD), G,
  U, W. **Fact check:** every quotation. PD candidates: Corneille (« Va, je ne te
  hais point »), Racine, La Fontaine, Pascal, La Bruyère, Montesquieu, Rimbaud,
  Verlaine, Apollinaire, Rostand.
- **Exam:** indirect (CE items on the meaning of a final sentence or analogy).
- **Home:** `rhetorique` 1200-1399.
- **Risks:** effect claims are interpretive (one defensible reading, others
  accepted in `why`); sound devices flatten in TTS; boundary with c1.08.

### c1.20 Reading between the lines (W, CE@c1)
- **Scope:** reads a 300-400-word essay or opinion piece and states its thesis,
  what it concedes then restricts, what it presupposes or leaves out, and the
  author's stance toward its sources, answering with the exact scope of a claim.
- **Builds on:** « la leçon 24 du B2 » (thesis vs topic, evidence, the unstated
  assumption, distance markers, tone and irony, soft words and omissions,
  fact / opinion / interpretation); « la leçon 37 du B1 ». NEW: concession then
  restriction as the backbone of essay prose; scope (« exactement »); real vs
  stated object of a debate; function of a paragraph, analogy, last sentence;
  grammatical presupposition (definite article, encore, cesser de, factive verbs);
  irony at C1 (antiphrase, echo); omitted agent (nominalisation, passive, on);
  two texts per task, 7-8 items in 12-13 minutes.
- **Inventory:** `strategies-de-comprehension` b1 376, b2 365, c1 0. The 29 c1
  exam-target rows (ethique, philosophie, methode-scientifique, decouvertes,
  argot-classique).
- **Sources:** C, F (DALF C1 CE; check durations and lengths), E, R, T, Q;
  Ducrot and Kerbrat-Orecchioni for concepts only.
- **Exam:** CE@c1, six tasks: `exam.tef_canada.blanc-01.ce_mcq.006` (357-word
  opinion article, 8 items, 780 s) and `exam.tcf_canada.blanc-01`..`05.ce_mcq.005`
  (two essays of 294-365 words, 4 + 3 items, 720 s). They test concession then
  restriction, the precise conclusion, the real vs stated grievance, the function
  of a paragraph or analogy, stance toward a source, irony as a topic.
  Distractors: overstatement, topic for thesis, true-but-secondary, the other
  camp. The lesson's quiz and task should mirror that.
- **Home:** `strategies-de-comprehension` 1800-1999 (claimed; range widened;
  sub-theme « lire entre les lignes »).
- **Risks:** irony that needs French political culture excludes the learner
  (build it from the text); antiphrase in writing needs a textual cue; scope
  distractors must be unambiguous (pre-review every key); routing is cosmetic
  until Paul's targetItemIds or report decision.

### c1.21 Debates and interviews (W, CO@c1)
- **Scope:** follows a 90-120-second debate or interview between two or three
  speakers, heard once, and says who concedes what, what the disagreement is
  really about, how an objection is answered, and what an allusion means.
- **Builds on:** « la leçon 25 du B2 » (announced plan, positions in a debate,
  interruptions and turn-taking, concession and irony by ear, the polite no,
  recovering a missed chunk); « la leçon 38 du B1 ». NEW: three voices with a
  moderator; agreement before disagreement; disagreement about a name or
  definition; C1 concession formulas by ear (« J'accorde la distinction… »);
  narrowing a claim; analogy and allusion; one play with a 28-30 s read window.
- **Inventory:** `rhetorique` c1 (concession formulas) and `discours-dexamen` c1.
- **Sources:** C, F, E (check section labels and timings), R, L, T (enfin, bon,
  bref, n'empêche), U for any Québec marker; Kerbrat-Orecchioni, Traverso for
  concepts.
- **Exam:** CO@c1, six tasks: `exam.tef_canada.blanc-01.co_mcq.006` (394-word,
  123 s reportage, 1 item) and `exam.tcf_canada.blanc-01`..`05.co_mcq.005` (three
  recordings of 91-116 s, heard once, 3 + 2 + 2 items). **No C1 task tests
  overlap or fillers**: weight the lesson to agreement then disagreement,
  concession, answering objections, narrowed claims, analogy and allusion; keep
  turn-taking and fillers as comprehension aids.
- **Home:** `discours-dexamen` 1400-1599 (claimed; sub-theme « suivre un débat à
  l'oral »).
- **Risks:** overlap needs multi-voice renders or studio (flag per act); TTS
  fillers sound artificial; allusions decodable from context; invented stations
  and hosts; include once-only listening practice.

### c1.22 Translating complex ideas (W)
- **Scope:** conveys the meaning, tone and argumentative structure of a complex
  English text in natural French, by reformulation, and explains the choices.
- **Builds on:** « la leçon 33 du B2 » (three kinds of calque, ten faux amis,
  transposition, modulation, équivalence, étoffement, -ing forms, tone; task
  200-250 words). NEW: idea-level reformulation; hedging and English
  understatement; paragraph logic (topic-sentence linearity vs announcement);
  implicitation and explicitation; cultural equivalence; summary translation;
  register shifts across audiences; 250-400 words.
- **Inventory:** `langue-soignee` b2 calque rows (b2.33).
- **Sources:** C (mediation), Vinay and Darbelnet (techniques, not quotations),
  Q, Termium and the Language Portal of Canada, R, L, T, A. **Fact check:** every
  translation example against a dictionary or BDL entry.
- **Exam:** none (no mediation task type).
- **Home:** **change proposed:** `langue-soignee` **2200-2399**, beside b2.33's
  « traduire sans calquer » (plan had `faux-amis` 1200-1399; both free); widen
  range.
- **Risks:** contested items (réaliser, opportunité, éventuellement, faire du
  sens); OQLF vs France; original English only; LLM grading over-rewards
  literalness, so graderNotes name the target moves.

### c1.23 Professional communication: tact (W)
- **Scope:** writes and presents with tact and precision at work: refusing,
  critical feedback, bad news, relance, presenting and handling questions.
- **Builds on:** « la leçon 26 du B2 » (chairing, floor, reformulating,
  softening, proposing, conceding, closing; spoken task 3-5 min); « la leçon 39
  du B1 » (formal email). NEW (Paul's refocus): tact in writing (refusal, bad
  news, escalation, saying no upward); degrees of indirectness; presentations
  (signposting, slide titles, hostile questions); France vs Québec directness;
  250-400-word written task.
- **Inventory:** `francais-professionnel-avance` c1 1-165 (deadlines 1-45,
  negotiation 60-105, minutes 120, tact 135-165; Québec-leaning; fix « ? »
  spacing on reuse).
- **Sources:** Q (Le français au bureau), U, R, L, A (« revenir vers vous »:
  check status), C, E.
- **Exam:** none.
- **Home:** `francais-professionnel-avance` 1000-1199.
- **Risks:** contested business usage (revenir vers vous, impacter, initier,
  booker, call); over-indirectness reads as passive-aggressive; c1.23 owns
  writing and presenting, c1.06 speech, c1.11 minutes.

### c1.24 Newspaper analysis (W)
- **Scope:** tells a report, an editorial, a column and an op-ed apart, and
  shows how headline, chapô, sources, order and loaded words frame one event.
- **Builds on:** « la leçon 34 du B1 » (media families, headline grammar, selon,
  the hearsay conditional, checking a source; theme `journalisme`); « la leçon
  24 du B2 »; « la leçon 10 du B2 » and « la leçon 18 du B1 » (hiding the agent).
  NEW: genre signals (signature, rubrique, unsigned editorial), pyramide inversée,
  titre / surtitre / chapô / attaque / chute, framing by sources and figures,
  connotation pairs (manifestants / casseurs), two treatments of one event.
- **Inventory:** `journalisme` b1 333, b2 172 (`fr.b2.journalisme.021`, `.037`
  ligne éditoriale).
- **Sources:** CLEMI (check each definition), R, L, T (chapô vs chapeau), Q, U,
  Conseil de presse du Québec (cite, never copy). No article text from any outlet.
- **Exam:** serves CE@c1 directly (task 1 is an opinion article).
- **Home:** `strategies-de-comprehension` 2000-2199 (claimed; sub-theme
  « analyser la presse »).
- **Risks:** invented outlets and bylines (b1.34 named Le Devoir; C1 framing
  analysis would criticise a real paper); low-heat topics only (urban planning,
  a festival, a school reform), Paul approves the list; Canada / France press
  differences in a sentence, not a caricature.

---

## Id homes, all 24 (probed 2026-09-30; re-probe at each wave's dispatch)

| Lesson | Theme | Block | Range change | State |
|---|---|---|---|---|
| c1.01 | discours-dexamen | 1000-1199 | none | **claimed, wave 1** |
| c1.02 | litterature | 1600-1799 (plan said 1400) | b1-b2 → c1 | proposed |
| c1.03 | litterature | 1800-1999 (plan said 1600) | same | proposed |
| c1.04 | pronoms-essentiels | 2000-2199 (plan said langue-soignee 1800) | a1-b2 → c1 | proposed |
| c1.05 | langue-soignee | 2000-2199 | a2-b2 → c1 | proposed |
| c1.06 | nuances-et-registres | 1000-1199 | none | proposed |
| c1.07 | connecteurs-logiques | 2600-2799 | a2-b2 → c1 | proposed |
| c1.08 | rhetorique | 1000-1199 | none | proposed |
| c1.09 | discours-dexamen | 1200-1399 | none | proposed |
| c1.10 | discours-dexamen | 1600-1799 | none | proposed |
| c1.11 | francais-professionnel-avance | 1200-1399 (plan said discours-dexamen 1800) | none | proposed |
| c1.12 | philosophie | 1000-1199 | none | proposed |
| c1.13 | culture-profonde | 1000-1199 | none | proposed (or a new histoire theme) |
| c1.14 | culture-profonde | 1200-1399 | none | proposed |
| c1.15 | ethique | 1000-1199 | none | proposed |
| c1.16 | philosophie | 1200-1399 | none | proposed |
| c1.17 | nuances-et-registres | 1200-1399 | none | proposed |
| c1.18 | faux-amis | 1000-1199 | sons-sons → c1 | proposed |
| c1.19 | rhetorique | 1200-1399 | none | proposed |
| c1.20 | strategies-de-comprehension | 1800-1999 | **b1-c1, done** | **claimed, wave 1** |
| c1.21 | discours-dexamen | 1400-1599 | none | **claimed, wave 1** |
| c1.22 | langue-soignee | 2200-2399 (plan said faux-amis 1200) | a2-b2 → c1 | proposed |
| c1.23 | francais-professionnel-avance | 1000-1199 | none | proposed |
| c1.24 | strategies-de-comprehension | 2000-2199 | **b1-c1, done** | **claimed, wave 1** |

## Ownership to settle in the briefs (so two lessons never teach one thing)

- Literary tenses: c1.02 passé antérieur only; c1.03 concordance and inversion.
- Euphemism and litote: c1.06 in speech (politeness), c1.17 as connotation; c1.19
  litote as a literary figure.
- Abstract headwords: c1.12 epistemic and logical; c1.15 political and social;
  c1.16 moral, aesthetic, memorial.
- Persuasion c1.08, literary effect c1.19, press framing c1.24.
- Formal oral production c1.09, debate listening c1.21, meetings and tact c1.23,
  speech politeness c1.06.
- Words c1.18, ideas and structure c1.22.
- Transitions: c1.07 markers as a system; c1.10 transitions inside an essay plan.

## Decisions for Paul, raised by this research

1. Exam help for closed CE/CO misses: repoint the 12 tasks' `targetItemIds` to
   c1.20 / c1.21 rows, change the exam report, or both (finding 5).
2. Fix the two TEF C1 tasks that target A1/A2 rows (finding 5).
3. PE@c1 / PO@c1 source: a `dalf_c1` format (schema + enum migration) or TEF/TCF
   tasks tagged c1 (finding 6); and c1.10's task shape (essai only vs DALF pair).
4. Range widenings for later waves (finding 3), each a Postgres write.
5. Home changes: c1.11 to `francais-professionnel-avance`, c1.22 to
   `langue-soignee`, c1.04 to `pronoms-essentiels`; optional `histoire-et-memoire`
   theme for c1.13.
6. Register-trap policy for c1.07 (recognise-don't-write, or skip).
7. Any historical quotation in c1.08 at all; c1.24's topic list.
