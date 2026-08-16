// a2.30.l1 « Le travail & les métiers » — the authored corpus and the citation
// constants.
//
//   pnpm content:travail-metiers          (author-travail-metiers-batch.ts)
//   pnpm tsx scripts/merge-travail-metiers-into-seed.ts
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS, AND WHAT IT ONLY QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
// Owns: THE SHAPE OF AN EXTENDED ANSWER. Four moves, in order, and the last
// one hands the conversation back. Every other unit in this band teaches a
// script both parties know. This one has no script: the other party is forming
// an opinion rather than serving you, the turn runs sixty seconds rather than
// two exchanges, and the content is the learner's own history, so no model
// dialogue can carry it. What CAN be given is the shape.
//
//   1  l'ancrage    what you are            a1.06's rule, QUOTED
//   2  la durée     for how long            a2.18's rule, QUOTED
//   3  le détail    what that means daily   OURS
//   4  l'ouverture  a hook back to them     OURS
//
// Moves 3 and 4 are the Owns. Move 3 is the "describe a workplace" half of the
// canDo. Move 4 is the half nobody teaches and the half that makes the answer a
// conversation rather than a recital.
//
// QUOTED, NEVER TAUGHT — four boundaries, each settled in collation C5:
//
//   a1.06  the zero article after être. THIS UNIT'S OWN PREREQUISITE, and it
//          already owns the rule in six of its twenty-six sections. Measured
//          again for this build: 37 of a1.06.l1's 45 item ids are `metiers`
//          rows. We quote its string verbatim and we do not re-teach it.
//   a2.18  depuis / pendant / il y a, at seq 14, with 24 sections and 247
//          occurrences of `depuis`. We take the QUESTION FORM only, because
//          `Depuis combien de temps` is in the OTHER party's voice and returns
//          zero rows. We leave the paradigm and we build no tense trapDrill:
//          that drill is a2.18's s07-tense and ours would be the second copy.
//   a2.07  the repair move. Six frozen rows, cited by itemId, ZERO authored.
//   a2.29  the register ladder. Three rung names quoted verbatim, rung rows
//          cited by itemId, ZERO softener rows authored.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT WAS OVERRULED BEFORE THIS BUILD STARTED
// ══════════════════════════════════════════════════════════════════════════
//
// The design document (29-a2.30-travail-metiers-DESIGN.md) is good work and
// three of its load-bearing pieces are gone.
//
//   1. `monologue` IS NOT FUNDED, and neither is `openPrompt`. The design's
//      spine was the learner's own sixty-second parcours, delivered into a
//      proposed new section type with a prep beat, an uncapped capture, a live
//      checklist and rubric feedback. Collation §3.3 merged it with a2.28's
//      `openPrompt`, cut the two pieces carrying the unknowns, and §3.2 ranked
//      the merged component second and deferred it. The band funds exactly one
//      engineering item and it is `listening.hideLines` — WHICH HAS SINCE
//      LANDED (MissionRich.tsx:1976). The spine is rebuilt on shipped
//      surfaces; see §4 of the prompt and the header of the lesson file.
//   2. The zero-article rule is fully owned by a1.06 and act 2 of this lesson
//      is not allowed to be a second run at the prerequisite.
//   3. depuis belongs to a2.18. We take the question, not the paradigm.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE THEME IS REAL. DO NOT RE-MAP IT.
// ══════════════════════════════════════════════════════════════════════════
//
// Five of this band's eight units point at a phantom theme and must be
// re-mapped before they can mint an id. THIS UNIT IS NOT ONE OF THEM.
// `metiers` holds 353 published rows and has a themeMeta entry
// (themeMeta.ts:100, "Les métiers / Job titles"). a2.30's `themes: ['metiers']`
// in author-full-curriculum-spine.ts:804 IS CORRECT AS WRITTEN and this build
// does not touch the spine file. If a re-map diff arrives that changes a2.30's
// themes, IT IS WRONG (collation §5).
//
// AND `metiers` IS THE ONE PLACE IN THIS PROJECT WHERE THE SEED IS NOT A CUT.
// Measured 2026-08-16 against Postgres and seed v50: 353 published, 353 in the
// seed. The standing warning that the seed holds roughly a quarter of the
// database is true in aggregate and FALSE FOR THIS THEME. For `metiers` only, a
// seed-side measurement is a corpus-wide measurement and the highest-id check
// is trustworthy rather than merely indicative.
//
// EVERYTHING ELSE THIS UNIT TOUCHES IS CUT-AFFECTED. `bureau` is 337 published
// and 0 in the seed. `recherche-emploi` is 592 and 0. `collegues` is 317 and 0.
// `affaires` is 316 and 0. The merge script pulls every referenced row out of
// Postgres or the imported cards render empty on device while the tests pass.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §A. IDENTITY
 *  Measured in author-full-curriculum-spine.ts:804 and in the seed unit row.
 *  They agree byte for byte. This unit does NOT carry the title/sub swap that
 *  every batch-1 and batch-2 A2 brief carried.
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'a2.30',
  seq: 29,
  level: 'a2',
  track: 'a2',
  title: 'Work and Jobs',
  sub: 'Le travail & les métiers',
  gloss: 'job titles & workplace vocabulary',
  canDo: 'Can say what they do for a living and describe a workplace',
  themes: ['metiers'],
  prereqUnitIds: ['a1.06'],
} as const;

export const LESSON_ID = 'a2.30.l1';
export const THEME = 'metiers';

/** Measured 2026-08-16, `pnpm corpus:probe --theme metiers`, seed v50. */
export const THEME_ROWS_BEFORE = 353;   // published, all levels
export const THEME_A2_BEFORE = 9;       // published, a2 slice, max .009
export const THEME_SEED_BEFORE = 353;   // present in seed.json v50 — NOT a cut

/** Themes this unit IMPORTS FROM and never authors into (collation §5). Every
 *  one is published in Postgres and absent from the seed, so every referenced
 *  row has to be carried by the merge. */
export const IMPORT_ONLY_THEMES = ['bureau', 'recherche-emploi', 'collegues', 'affaires'] as const;

/** Measured the same day. The seed figure is ZERO for all four, which is what
 *  makes the carry mandatory rather than tidy. */
export const IMPORT_THEME_COUNTS = {
  bureau: { postgres: 337, seed: 0 },
  'recherche-emploi': { postgres: 592, seed: 0 },
  collegues: { postgres: 317, seed: 0 },
  affaires: { postgres: 316, seed: 0 },
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. THE ID BLOCK
 *
 *  `metiers` a2 rows numbered 9 at build time, max fr.a2.metiers.009, and
 *  because this theme is fully in the seed that maximum is CORPUS-WIDE rather
 *  than cut-limited. Confirmed against Postgres anyway.
 *
 *  The block starts above the maximum WITH A GAP. The measured failure mode is
 *  a concurrent lesson landing BELOW the top of a range while a highest-id
 *  check looks only at the top: a1.19 and a1.20 collided exactly that way.
 *  VERIFY BY ROW COUNT AFTER THE APPLY, NOT BY HIGHEST ID.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ID_FIRST = 20;
export const ID_LAST = 89;   // requested block; .088 and .089 deliberately unused
export const ID_USED_LAST = 87;

export const M = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE REFRAME, THE MOVES, AND THE CITATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: a production rule, not a cultural observation. It runs
 *  mid-sentence (you have already said the first thing), it names the failure
 *  it prevents (delivering the anchor AS the answer), and it predicts what the
 *  learner will otherwise do (stop, and let the other person wait).
 *
 *  REJECTED, and recorded because doctrine asks for it:
 *    * "Structure your answer with an opening, a duration, a detail and a
 *      closing question." — that is the TABLE, not a rule a learner can act on
 *      while a stranger is looking at them.
 *    * "One sentence is an answer. Four is a story." — true, and it is a
 *      description of the lesson rather than an instruction inside the turn.
 *    * "Say what you are, then keep going." — actionable and it names no
 *      failure, so it degrades into encouragement.
 *
 *  LIMITS.reframeMinSections (density.logic.ts:76) requires it VERBATIM in at
 *  least three sections. It appears in five here. */
export const REFRAME = 'The first sentence is the anchor, not the answer.';

export const MOVE_1 = "l'ancrage";
export const MOVE_2 = 'la durée';
export const MOVE_3 = 'le détail';
export const MOVE_4 = "l'ouverture";
export const MOVES = [MOVE_1, MOVE_2, MOVE_3, MOVE_4] as const;

export const MOVE_EN = {
  [MOVE_1]: 'what you are',
  [MOVE_2]: 'for how long',
  [MOVE_3]: 'what that means daily',
  [MOVE_4]: 'a hook back to them',
} as const;

/* ── a1.06: THE PREREQUISITE, AND THE STRING WE QUOTE ────────────────────── */

/** a1.06.l1 has 26 sections and 37 of its 45 item ids are `metiers` rows. The
 *  zero-article rule is taught in six of them: s01-scene (the whole scene IS
 *  this rule), s10-jobs (five worked examples, terms: ['noArticle']),
 *  s11-joberrors (first card is `Je suis un architecte.` against
 *  `Je suis architecte.`), s15-test (the c'est / il est determiner test),
 *  s16-contrast (a tapTable running both on one row) and s21/s22/s23/s25.
 *
 *  Serialised string counts inside a1.06.l1: médecin 40, article 16,
 *  ingénieur 13, "Il est médecin" 15, "Je suis un" 4. a1.11.l1 imports ten more
 *  `metiers` rows and names professions as the case it taught first.
 *
 *  SO THE RULE IS NOT AVAILABLE TO BE THIS LESSON'S OWNS. Doctrine §B.5
 *  requires every lesson to own one thing the table does not show, and act 2
 *  of this lesson is not allowed to be a second run at its own prerequisite.
 *  We quote, we recruit and we TEST. We do not teach. */
export const ZERO_ARTICLE_UNIT = 'a1.06';

/** Lifted verbatim from a1.06.l1 s10-jobs, example 1, `note`. Measured in the
 *  seed, not retyped from memory. The test asserts the quotation and a
 *  paraphrase must go red. */
export const A1_06_QUOTE = 'No un. The gap after suis is the grammar.';

/* ── a2.18: depuis. USED, NEVER TAUGHT ───────────────────────────────────── */

/** a2.18.l1 ships with 24 sections, 247 occurrences of `depuis` and 87 of
 *  `pendant`. Its section list includes s04-depuis, s05-english, s06-quand,
 *  s07-tense (a trapDrill on the tense depuis forces), s09-pendant, s10-pair,
 *  s12-dans, s13-ilya and s14-twice.
 *
 *  WHAT IS GENUINELY OURS, AND IT IS NARROW: the question form.
 *  `Depuis combien de temps` returns ZERO rows. It is what the interviewer
 *  asks, it is in the other party's voice, and that is exactly what this band
 *  exists to author. We take the question. We leave the paradigm, and we build
 *  NO trapDrill about the tense depuis takes. */
export const TIME_UNIT = 'a2.18';

/* ── a2.07: THE REPAIR MOVE. FROZEN, CITED, ZERO AUTHORED ────────────────── */

export const REPAIR_UNIT = 'a2.07';

/** 04-REPAIR-MOVE-IDS.md. Six rows, `au-restaurant`, contiguous,
 *  domain-neutral, ordered by FACE COST, frozen at publication. The order is
 *  part of the contract because citing units say "rung 3".
 *
 *  a2.07 is SHIPPED: verified in the seed before this build started
 *  (a2.07.l1 present, unit seq 24). This unit authors ZERO repair rows. */
export const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
] as const;

/** The six strings, for the ONE purpose of asserting that this lesson never
 *  re-authors any of them. Never rendered from here: the cards read the rows. */
export const REPAIR_FR = [
  'Pardon ?',
  "Vous pouvez répéter, s'il vous plaît ?",
  "Plus lentement, s'il vous plaît.",
  "Je n'ai pas bien compris.",
  "Qu'est-ce que ça veut dire ?",
  "Vous pouvez me l'écrire, s'il vous plaît ?",
] as const;

/* ── a2.29: THE REGISTER LADDER. THREE NAMES, QUOTED VERBATIM ────────────── */

export const LADDER_UNIT = 'a2.29';

/** a2.29 is SHIPPED (seq 28, a2.29.l1 in the seed), so this is a real citation
 *  and not the forward-citation fallback. The three names are learner-facing
 *  strings quoted VERBATIM: a paraphrase is a second ladder.
 *
 *  THE CONTRACT, five clauses, binding on a2.30, a2.31 and a2.32 alike:
 *    1. quote the three rung names verbatim
 *    2. reuse a2.29's rung rows by itemId; author no rung lines and zero
 *       softener rows
 *    3. you MAY add your own column, your own move, in your own vocabulary —
 *       the workplace request is a legitimate fourth column on a three-rung
 *       ladder, and that is the one this unit adds
 *    4. you may NOT rename a rung, add a fourth, or reorder them
 *    5. a2.29's build report publishes the rung-to-itemId table; it is pasted
 *       below rather than re-derived */
export const RUNG_1 = 'Ask once, softly.';
export const RUNG_2 = 'Say it again, without the person.';
export const RUNG_3 = 'Ask for the person who can fix it.';
export const RUNGS = [RUNG_1, RUNG_2, RUNG_3] as const;

/** Pasted from 46-A2-29-BUILD-REPORT.md §1. One id per rung is all this unit
 *  cites: the ladder is a2.29's teaching and ours is a reference to it. */
export const LADDER_IDS = [
  'fr.a2.hebergement.074',   // rung 1, a request
  'fr.a2.hebergement.082',   // rung 2, a restatement
  'fr.a2.hebergement.091',   // rung 3, the escalation
] as const;

/* ── a2.31: THE FORWARD BOUNDARY. BY UNIT ID ONLY ────────────────────────── */

/** a2.31 ships AFTER this unit (seq 30), so it can be cited by unit id and NOT
 *  by item id: the ids do not exist yet. A forward citation by unit id reads as
 *  "that comes next" and is fine.
 *
 *  THE BOUNDARY, in the terms collation §1.2 and C5 require, so the a2.31
 *  builder cannot contradict it:
 *
 *    a2.30 authors the interview scenario, the parcours professionnel framing,
 *    the interviewer's questions and follow-ups, job titles and their
 *    feminines, workplace nouns and the workday verbs.
 *
 *    a2.31 authors NO second interview scenario, NO parcours professionnel
 *    framing, NO job titles and NO job-title feminines. It owns academic
 *    equivalence hedging, diplomas, and talking about a past course of study,
 *    and it draws on the interview without being it.
 *
 *    a2.30 authors NO diploma, equivalence or subject-of-study rows. Where the
 *    interview needs one line of study history it is ONE line, it is
 *    unanalysed, and it names a2.31 as where that is taught. */
export const STUDY_UNIT = 'a2.31';

/** Words this unit must never author, because they are a2.31's ground. The
 *  guard is a whole-word test over the authored copy, not a substring test:
 *  a substring `\bdiplome` cannot see `diplômes` and a bare `equivalence`
 *  fires on nothing at all. */
export const A2_31_RESERVED = [
  'diplôme', 'diplômes', 'équivalence', 'équivalences', 'licence', 'master',
  'baccalauréat', 'université', 'faculté', 'relevé de notes',
] as const;

/* ── OTHER BOUNDARIES, CITED AND NOT RE-AUTHORED ─────────────────────────── */

export const PRONOUN_UNIT = 'a1.05';   // tu vs vous AS A FORM. We own the trigger.
export const PLACE_UNIT = 'a2.04';     // prepositions of place. Used in move 3.
export const MONEY_UNIT = 'a2.26';     // money, payment, salary as a transaction.

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. FEMINISATION — THIS UNIT OWNS THE RULE FOR THE WHOLE BAND
 *
 *  Collation C4 settles the policy as CORPUS-FIRST, THEN OQLF, assigns it to
 *  a2.30, and binds the other seven units to whatever lands here. This is the
 *  unit with more job titles than any other, so the rule has to be OPERATIONAL
 *  rather than a principle.
 *
 *  ── WHAT IS ACTUALLY IN THE CORPUS, measured 2026-08-16 ──
 *
 *  `metiers` word rows: 99 begin `un `, 9 begin `une `. Of the nine, EIGHT are
 *  feminine-by-noun (une usine, une équipe, une entreprise, une réunion, une
 *  pause, une profession, une secrétaire, une hôtesse de l'air) and EXACTLY ONE
 *  is the feminine of a masculine headword that also exists: `une avocate`,
 *  fr.a1.metiers.248.
 *
 *  ── THE DESIGN'S POSTGRES FIGURES WERE WRONG IN FOUR CASES OF FIVE ──
 *
 *  The design measured autrice 6, auteure 2, ingénieure 5, travailleuse 4,
 *  professeure 1. Re-queried for this build:
 *
 *      autrice        0   (design said 6)   ABSENT
 *      auteure        0   (design said 2)   ABSENT
 *      travailleuse   0   (design said 4)   ABSENT
 *      ingénieure     1   (design said 5)   fr.b2.decouvertes.152
 *      professeure    1   (design said 1)   fr.a2.examens-et-diplomes.058
 *
 *  SO THE BAND'S CONTESTED CASE NEVER AROSE. Rule 2 below ("where two variants
 *  both exist, take the more numerous one") was written for autrice/auteure and
 *  is MOOT: neither exists. And rule 6 (pairs only) removes it a second time —
 *  `metiers` carries `un écrivain`, not `un auteur`; the only `auteur` in the
 *  corpus is fr.b1.litterature.030, which is B1 and outside this level. There
 *  is no masculine anchor, so no feminine is minted and the debate is not this
 *  unit's to settle. IF A FUTURE UNIT ACQUIRES `un auteur` AT A2, rule 3 gives
 *  `une auteure`, because rule 1 will still have given nothing.
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE RULE, IN THE ORDER IT IS APPLIED. Quotable in one screen, which is what
 *  the other seven units need.
 *
 *   1. IMPORT BEFORE YOU MINT. If a feminine form already exists ANYWHERE in
 *      the corpus, import that exact form. Any theme, any level. Do not mint a
 *      competing variant and do not "correct" a shipped one. This is the rule
 *      that stops eight units drifting apart.
 *   2. WHERE TWO VARIANTS BOTH EXIST, TAKE THE MORE NUMEROUS ONE. Moot here;
 *      see above.
 *   3. WHERE NO FEMININE EXISTS, MINT THE OQLF FORM, because the exam base is
 *      TEF and TCF Canada:
 *        -teur          -> -trice      traductrice, factrice
 *        -eur (live verb stem) -> -euse  coiffeuse
 *        -ier / -ien / -er -> ordinary written feminine
 *                                      ouvrière, pâtissière, jardinière,
 *                                      informaticienne, mécanicienne
 *        epicene        -> final -e    une ingénieure, une professeure
 *        no feminine    -> article only  une médecin / un médecin
 *   4. NEVER MINT A FEMININE THAT IS A DIFFERENT WORD. `la médecine` is the
 *      discipline, not the doctor. `la physique` is not a physicist. One card
 *      names this trap, because it is the error a learner PRODUCES from the
 *      pattern.
 *   5. PAIRS ONLY. Author a feminine only where the masculine already exists as
 *      a corpus row, so every new row is half of a pair the learner can see.
 *      `une avocate` / `un avocat` is the shape the corpus already ships.
 *   6. CAP IT. This is a card deck, not a wordlist. Eight minted here.
 *   7. SAY IT ONCE, IN THE LEARNER'S WORDS. The learner needs to know which
 *      form to say about themselves, not the history of the debate. */
export const FEMINISATION_RULE = [
  'If the corpus already has the feminine, use that one.',
  'If it does not, build it the ordinary written way.',
  'If the word has no feminine at all, only the article moves.',
  'Never invent one that is already a different word.',
] as const;

/** THE PAIRS THIS LESSON SHOWS. Ten cards, masculine and feminine ON ONE CARD
 *  (§13 required layout 3), demonstrating five shapes. Two of the ten are
 *  minted; eight are imported, and every import is a figure this build did not
 *  have to move.
 *
 *  `m` and `f` are corpus ids. A `null` f means the row is minted below. */
export const PAIRS: { m: string; f: string | null; shape: string }[] = [
  { m: 'fr.a1.metiers.003', f: 'fr.a1.metiers.248', shape: 'add -e' },              // un avocat / une avocate
  { m: 'fr.a1.metiers.159', f: 'fr.a2.collegues.017', shape: 'add -e' },            // un employé / une employée
  { m: 'fr.a1.metiers.020', f: 'fr.a1.rp-sante.010', shape: '-ien -> -ienne' },     // un pharmacien / une pharmacienne
  { m: 'fr.a1.metiers.047', f: 'fr.a1.cafe.063', shape: '-ier -> -ière' },          // un caissier / la caissière
  { m: 'fr.a1.metiers.002', f: 'fr.a1.rp-sante.011', shape: '-ier -> -ière' },      // un infirmier / une infirmière
  { m: 'fr.a1.metiers.004', f: 'fr.a1.marche.011', shape: '-eur -> -euse' },        // un vendeur / la vendeuse
  { m: 'fr.a1.metiers.025', f: 'fr.a2.marche.009', shape: '-teur -> -trice' },      // un agriculteur / l'agricultrice
  { m: 'fr.a1.metiers.135', f: 'fr.a1.ecole.020', shape: '-teur -> -trice' },       // le directeur / la directrice
  { m: 'fr.a1.metiers.034', f: 'fr.b2.decouvertes.152', shape: 'epicene, add -e' }, // un ingénieur / une ingénieure
  { m: 'fr.a1.metiers.005', f: 'fr.a2.examens-et-diplomes.058', shape: 'epicene, add -e' }, // un professeur / une professeure
];

/** The MINTED feminines, .074 to .081. Every one is half of a pair whose
 *  masculine is an imported `metiers` row: NO ORPHAN FEMININES.
 *
 *  THE HAZARD THIS CREATES, AND IT HAS FIRED FOUR TIMES. A gendered
 *  single-word row joins the ending population a1.03 (Le genre des noms)
 *  measures, and a1.11, a1.22, a1.23 and a1.26 all broke a1-03-genre.test.ts
 *  this way. `genre-endings.ts` pins EXACT accuracy AND item counts per ending
 *  and the test compares them against the live seed.
 *
 *  Measured exposure for these eight plus the carried imports:
 *    -euse   7 -> 10   (coiffeuse minted; serveuse and chanteuse CARRIED)
 *    -e      the worthless bucket, +8 minted and +6 carried
 *  A CARRY MOVES A POPULATION EVEN WHEN AN AUTHORING DOES NOT — a1.23 proved
 *  it, a2.26 and a2.27 met it again, and the fix is to reconcile
 *  genre-endings.ts AFTER the merge and re-run the neighbouring suite. The
 *  baseline was captured BEFORE the apply: a1-03-genre.test.ts, 35 tests,
 *  35 passing, seed v50. */
export const MINTED_FEMININE_IDS = [
  M(74), M(75), M(76), M(77), M(78), M(79), M(80), M(81),
] as const;

/** The masculine anchor for each minted feminine, index-aligned. The test
 *  walks this and fails on an orphan. */
export const MINTED_FEMININE_ANCHORS = [
  'fr.a1.metiers.022',   // un coiffeur    -> une coiffeuse
  'fr.a1.metiers.043',   // un traducteur  -> une traductrice
  'fr.a1.metiers.044',   // un informaticien -> une informaticienne
  'fr.a1.metiers.056',   // un ouvrier     -> une ouvrière
  'fr.a1.metiers.027',   // un mécanicien  -> une mécanicienne
  'fr.a1.metiers.024',   // un pâtissier   -> une pâtissière
  'fr.a1.metiers.026',   // un jardinier   -> une jardinière
  'fr.a1.metiers.019',   // un facteur     -> une factrice
] as const;

/** Rule 4's trap, and it is worth a card because it is what a learner PRODUCES
 *  from the pattern. None of these is authored as a row; the card names them
 *  and the guard asserts they were never minted into `metiers`. */
export const NOT_A_FEMININE = [
  { wrong: 'la médecine', right: 'une médecin', why: 'la médecine is the subject you study.' },
  { wrong: 'la physique', right: 'une physicienne', why: 'la physique is the subject, not the person.' },
  { wrong: 'la politique', right: 'une politicienne', why: 'la politique is the field.' },
] as const;

/** Polysemy that has to be glossed narrowly or left alone. `un poste` carries
 *  20 rows in the seed and 184 corpus-wide: it is a job position, a television
 *  set AND a police station. One card names it. The three minted feminines
 *  below also carry a second everyday sense and their `en` is written narrow
 *  for exactly that reason. */
export const POLYSEMY = [
  { fr: 'un poste', senses: ['a position at work', 'a television set', 'a police station'] },
  { fr: 'une coiffeuse', senses: ['a hairdresser', 'a dressing table'] },
  { fr: 'une jardinière', senses: ['a gardener', 'a window box'] },
  { fr: 'une factrice', senses: ['a mail carrier', 'a maker (rare)'] },
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE BAND'S OTHER-VOICE MANDATE
 *
 *  Collation §1.5, settled band policy: AT LEAST 40 PERCENT of a unit's newly
 *  authored rows must be in the voice of the person the learner is talking to.
 *
 *  For this unit that person is the interviewer and the new acquaintance. The
 *  nouns of work are FINISHED — 353 published rows, 179 of them single words —
 *  and the QUESTIONS of work do not exist:
 *
 *      vous faites quoi           0 rows
 *      Depuis combien de temps    0 rows
 *      parcours                   0 rows in the seed
 *
 *  Authoring the questions is what makes this a situational unit rather than a
 *  vocabulary review, and it is what feeds a2.35's mixed-situation CO set.
 *
 *  MEASURED FOR THIS BUILD: 28 of 68 authored rows are `other`, which is
 *  41.2 percent. The floor is asserted in the test, against the live count and
 *  not against this comment.
 * ══════════════════════════════════════════════════════════════════════════ */

export const OTHER_VOICE_FLOOR = 0.4;

type Voice = 'learner' | 'other' | 'neutral';

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE ROWS
 *
 *  Doctrine §E: a conjugated form is not a corpus item and a participle is
 *  NEVER a corpus item. Everything here is an infinitive, a noun, a phrase or
 *  a full sentence. Sentence budget 14 words; the four moves JOINED run past
 *  that, so the joined answer is authored LESSON TEXT and never a corpus row.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item & { voice: Voice };

const sent = (n: number, fr: string, en: string, voice: Voice, tags: string[], drills: Item['drills']): Row => ({
  id: M(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, tags, drills, version: 1, voice,
});
const phrase = (n: number, fr: string, en: string, respell: string, voice: Voice, tags: string[], drills: Item['drills']): Row => ({
  id: M(n), kind: 'phrase', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1, voice,
});
const word = (n: number, fr: string, en: string, respell: string, gender: 'm' | 'f', tags: string[], drills: Item['drills']): Row => ({
  id: M(n), kind: 'word', level: 'a2', theme: THEME, fr, en, respell, gender, tags, drills, version: 1, voice: 'neutral',
});

const FCV = ['flashcard', 'voiceflash'] as Item['drills'];
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/* ── MOVE 1: l'ancrage. .020-.023 ────────────────────────────────────────────
 *  a1.06's rule, RECRUITED. Four different jobs and four different sectors so
 *  the pattern is visibly about the shape and not about one word. Every one of
 *  these is a bare `Je suis` + job with NO article, which is the thing a1.06
 *  taught and this lesson only quotes.                                       */

export const MOVE1_ROWS: Row[] = [
  sent(20, 'Je suis ingénieur.', 'I am an engineer.', 'learner', ['move1', 'ancrage', 'noArticle'], FCVDR),
  sent(21, 'Je suis infirmière.', 'I am a nurse.', 'learner', ['move1', 'ancrage', 'noArticle', 'feminine'], FCVDR),
  // NOT `Je suis professeur.` — that row ALREADY EXISTS, at fr.a1.metiers.244,
  // published and in the seed. Rule 1 is import before you mint and the
  // flashcard hub keys on `fr` PER THEME, so authoring it here would have made
  // one card that the hub serves twice. Found by the batch's intra-theme
  // duplicate guard on the dry run; the professeur anchor is now an IMPORT and
  // this slot carries a job the corpus genuinely lacked.
  sent(22, 'Je suis comptable.', 'I am an accountant.', 'learner', ['move1', 'ancrage', 'noArticle'], FCVDR),
  sent(23, 'Je suis cuisinier.', 'I am a cook.', 'learner', ['move1', 'ancrage', 'noArticle'], FCVDR),
];

/* ── MOVE 2: la durée. .024-.027 ─────────────────────────────────────────────
 *  a2.18's rule, USED. Present tense throughout, which is the form `depuis`
 *  forces — and this lesson NEVER SAYS SO, because that is a2.18's s07-tense.
 *  The learner meets the correct form four times and is corrected on the wrong
 *  one in the trap, which is a re-test rather than a second teaching.        */

export const MOVE2_ROWS: Row[] = [
  sent(24, 'Je travaille là-bas depuis six ans.', 'I have worked there for six years.', 'learner', ['move2', 'duree', 'depuis'], FCVDR),
  sent(25, 'Je fais ce métier depuis trois ans.', 'I have done this job for three years.', 'learner', ['move2', 'duree', 'depuis'], FCVDR),
  sent(26, 'Je suis dans cette entreprise depuis deux ans.', 'I have been at this company for two years.', 'learner', ['move2', 'duree', 'depuis'], FCVR),
  sent(27, 'Je travaille dans un hôpital depuis dix ans.', 'I have worked in a hospital for ten years.', 'learner', ['move2', 'duree', 'depuis'], FCVR),
];

/* ── MOVE 3: le détail. .028-.031 ────────────────────────────────────────────
 *  OURS, and the "describe a workplace" half of the canDo. Every verb here
 *  leans on shipped grammar: s'occuper de is a2.22's pronominaux, gérer and
 *  aider are a2.01's -ER, être responsable de is a1.06's être.               */

export const MOVE3_ROWS: Row[] = [
  sent(28, "Je m'occupe des dossiers clients.", 'I handle the client files.', 'learner', ['move3', 'detail', 'workday'], FCVDR),
  sent(29, 'Je gère une petite équipe.', 'I manage a small team.', 'learner', ['move3', 'detail', 'workday'], FCVDR),
  sent(30, 'Je suis responsable de la sécurité.', 'I am responsible for safety.', 'learner', ['move3', 'detail', 'workday'], FCVR),
  sent(31, 'Je travaille avec des enfants tous les jours.', 'I work with children every day.', 'learner', ['move3', 'detail', 'workday'], FCVR),
];

/* ── MOVE 4: l'ouverture. .032-.035 ──────────────────────────────────────────
 *  OURS, and the half nobody teaches. `Et vous, vous faites quoi ?` returns
 *  ZERO rows in the corpus. This is the move that turns an answer into a
 *  conversation, and it is the only move whose failure costs the learner the
 *  whole exchange rather than a mark.                                        */

export const MOVE4_ROWS: Row[] = [
  sent(32, 'Et vous, vous faites quoi ?', 'And you, what do you do?', 'learner', ['move4', 'ouverture', 'handback'], FCVDR),
  sent(33, 'Et vous, vous faites quoi dans la vie ?', 'And you, what do you do for a living?', 'learner', ['move4', 'ouverture', 'handback'], FCVDR),
  sent(34, "Et vous, c'est quoi votre métier ?", 'And you, what is your job?', 'learner', ['move4', 'ouverture', 'handback'], FCVR),
  sent(35, 'Et vous, vous travaillez dans quoi ?', 'And you, what field do you work in?', 'learner', ['move4', 'ouverture', 'handback'], FCVR),
];

/* ── THE OTHER PARTY'S VOICE. .036-.059, twenty-four rows ────────────────────
 *  The interviewer, and the stranger at a party who asks the same thing less
 *  formally. This is the bucket the band mandate is about and it is the single
 *  largest bucket in the build.
 *
 *  .036-.052 are the interview. .053-.059 are the same question in the other
 *  register, which is what makes s17-register a contrast rather than a claim. */

export const INTERVIEWER_ROWS: Row[] = [
  sent(36, 'Parlez-moi de votre parcours.', 'Tell me about your background.', 'other', ['interview', 'opener', 'parcours'], FCVDR),
  sent(37, "Qu'est-ce que vous faites en ce moment ?", 'What are you doing at the moment?', 'other', ['interview', 'opener'], FCVR),
  sent(38, 'Depuis combien de temps vous travaillez là-bas ?', 'How long have you been working there?', 'other', ['interview', 'duree', 'depuis'], FCVR),
  sent(39, 'Vous faites quoi exactement ?', 'What exactly do you do?', 'other', ['interview', 'detail'], FCVDR),
  sent(40, 'Racontez-moi une journée typique.', 'Tell me about a typical day.', 'other', ['interview', 'detail'], FCVR),
  sent(41, 'Vous travaillez avec combien de personnes ?', 'How many people do you work with?', 'other', ['interview', 'detail'], FCVR),
  sent(42, "Qu'est-ce qui vous plaît dans ce travail ?", 'What do you like about this job?', 'other', ['interview', 'followup'], FCVR),
  sent(43, 'Pourquoi vous voulez changer ?', 'Why do you want to change?', 'other', ['interview', 'followup'], FCVR),
  sent(44, 'Vous êtes disponible à partir de quand ?', 'When are you available from?', 'other', ['interview', 'closing'], FCVR),
  sent(45, 'Vous avez des questions pour moi ?', 'Do you have any questions for me?', 'other', ['interview', 'closing', 'handback'], FCVDR),
  sent(46, 'Parlez-moi de votre poste actuel.', 'Tell me about your current position.', 'other', ['interview', 'opener', 'poste'], FCVR),
  sent(47, 'Vous êtes responsable de quoi ?', 'What are you responsible for?', 'other', ['interview', 'detail'], FCVDR),
  sent(48, 'Ça fait combien de temps ?', 'How long has it been?', 'other', ['interview', 'duree'], FCVDR),
  sent(49, 'Vous préférez travailler seul ou en équipe ?', 'Do you prefer working alone or in a team?', 'other', ['interview', 'followup'], FCVR),
  sent(50, 'Et après, vous avez fait quoi ?', 'And after that, what did you do?', 'other', ['interview', 'followup'], FCVR),
  sent(51, 'Vous vous occupez de quoi, exactement ?', 'What do you handle, exactly?', 'other', ['interview', 'detail'], FCVR),
  sent(52, 'Merci, on vous rappelle la semaine prochaine.', 'Thank you, we will call you back next week.', 'other', ['interview', 'closing'], FCVR),
  sent(53, 'Vous travaillez dans quoi ?', 'What field do you work in?', 'other', ['party', 'opener'], FCVDR),
  sent(54, 'Alors, vous faites quoi dans la vie ?', 'So, what do you do for a living?', 'other', ['party', 'opener'], FCVDR),
  sent(55, 'Ah bon ? Et ça vous plaît ?', 'Really? And do you enjoy it?', 'other', ['party', 'followup'], FCVR),
  sent(56, 'Vous êtes là depuis longtemps ?', 'Have you been there long?', 'other', ['party', 'duree', 'depuis'], FCVR),
  sent(57, "C'est un grand bureau ?", 'Is it a big office?', 'other', ['party', 'followup'], FCVR),
  sent(58, 'Vous commencez à quelle heure le matin ?', 'What time do you start in the morning?', 'other', ['party', 'followup'], FCVR),
  sent(59, 'Et vous voulez faire ça toute votre vie ?', 'And do you want to do that all your life?', 'other', ['party', 'followup'], FCVR),
];

/* ── THE SPOKEN QUESTION FORMS. .060-.065 ────────────────────────────────────
 *  Six phrases, and they are the pieces the learner has to RECOGNISE at speed
 *  rather than produce. All six were measured at zero or near-zero:
 *  `vous faites quoi` 0, `dans la vie` 1 row and none of it in a work theme,
 *  `depuis combien de temps` 0.
 *
 *  RESPELLING: the house convention. Caps mark phrase-final stress and a nasal
 *  NEVER closes on a plain n or m — it takes the superscript. `hasPlainNasalFor`
 *  is imported by the test and every one of these is asserted through the real
 *  function rather than by eye.                                              */

export const QUESTION_FORM_ROWS: Row[] = [
  phrase(60, 'vous faites quoi', 'what do you do', 'voo feht KWAH', 'other', ['question', 'spoken'], FCVR),
  phrase(61, 'dans la vie', 'for a living', 'dahⁿ lah VEE', 'other', ['question', 'spoken'], FCVR),
  phrase(62, 'depuis combien de temps', 'for how long', 'duh-pwee kohⁿ-byaⁿ duh TAHⁿ', 'other', ['question', 'spoken', 'depuis'], FCVR),
  phrase(63, 'ça fait combien de temps', 'how long has it been', 'sah feh kohⁿ-byaⁿ duh TAHⁿ', 'other', ['question', 'spoken'], FCVR),
  phrase(64, "c'est quoi votre métier", 'what is your job', 'seh kwah vo-truh may-TYAY', 'learner', ['question', 'spoken'], FCVR),
  phrase(65, 'vous travaillez dans quoi', 'what field do you work in', 'voo trah-vah-yay dahⁿ KWAH', 'learner', ['question', 'spoken'], FCVR),
];

/* ── THE WORKDAY VERBS IN CONTEXT. .066-.073 ─────────────────────────────────
 *  Move 3's engine. Five verbs carry an entire workday and every one of them
 *  is grammar this learner already has.                                      */

export const WORKDAY_ROWS: Row[] = [
  sent(66, "Je m'occupe des clients toute la journée.", 'I look after customers all day.', 'learner', ['workday', 'soccuper'], FCVR),
  sent(67, 'Elle gère une équipe de huit personnes.', 'She manages a team of eight people.', 'learner', ['workday', 'gerer'], FCVR),
  sent(68, 'Il est responsable du planning.', 'He is responsible for the schedule.', 'learner', ['workday', 'responsable'], FCVDR),
  sent(69, 'Nous travaillons avec des clients étrangers.', 'We work with foreign clients.', 'learner', ['workday', 'travailler'], FCVR),
  sent(70, "J'aide les nouveaux pendant leur première semaine.", 'I help the new ones during their first week.', 'learner', ['workday', 'aider'], FCVR),
  sent(71, "Je m'occupe de la caisse le samedi.", 'I look after the till on Saturdays.', 'learner', ['workday', 'soccuper'], FCVR),
  sent(72, 'Elle gère les commandes et les livraisons.', 'She handles the orders and the deliveries.', 'learner', ['workday', 'gerer'], FCVR),
  sent(73, 'Il aide le chef en cuisine.', 'He helps the chef in the kitchen.', 'learner', ['workday', 'aider'], FCVDR),
];

/* ── THE MINTED FEMININES. .074-.081 ─────────────────────────────────────────
 *  Eight, per §D. Every one is half of a pair whose masculine is an existing
 *  `metiers` row, and every `en` is written NARROW because three of the eight
 *  carry a second everyday sense (§D POLYSEMY).                              */

export const FEMININE_ROWS: Row[] = [
  word(74, 'une coiffeuse', 'a hairdresser (f)', 'ün kwah-FUHZ', 'f', ['feminine', 'pair', 'euse'], FCVR),
  word(75, 'une traductrice', 'a translator (f)', 'ün trah-dük-TREES', 'f', ['feminine', 'pair', 'trice'], FCVR),
  word(76, 'une informaticienne', 'a computer specialist (f)', 'ü-naⁿ-for-ma-tee-SYENN', 'f', ['feminine', 'pair', 'ienne'], FCVR),
  word(77, 'une ouvrière', 'a factory worker (f)', 'ü-noo-vree-YEHR', 'f', ['feminine', 'pair', 'iere'], FCVR),
  word(78, 'une mécanicienne', 'a mechanic (f)', 'ün may-ka-nee-SYENN', 'f', ['feminine', 'pair', 'ienne'], FCVR),
  word(79, 'une pâtissière', 'a pastry chef (f)', 'ün pah-tee-SYEHR', 'f', ['feminine', 'pair', 'iere'], FCVR),
  word(80, 'une jardinière', 'a gardener (f)', 'ün zhar-dee-NYEHR', 'f', ['feminine', 'pair', 'iere'], FCVR),
  word(81, 'une factrice', 'a mail carrier (f)', 'ün fak-TREES', 'f', ['feminine', 'pair', 'trice'], FCVR),
];

/* ── THE WORKPLACE PREPOSITIONAL PHRASES. .082-.087 ──────────────────────────
 *  Move 3's other half: where, and with whom. The prepositions themselves are
 *  a2.04's and are USED here rather than taught.                             */

export const PLACE_ROWS: Row[] = [
  phrase(82, 'dans un bureau', 'in an office', 'dahⁿ-zaⁿ bü-ROH', 'learner', ['place', 'move3'], FCVR),
  phrase(83, "à l'hôpital", 'at the hospital', 'ah loh-pee-TAL', 'learner', ['place', 'move3'], FCVR),
  phrase(84, 'sur un chantier', 'on a building site', 'sü-raⁿ shahⁿ-TYAY', 'learner', ['place', 'move3'], FCVR),
  phrase(85, 'en équipe', 'as a team', 'ahⁿ-nay-KEEP', 'learner', ['place', 'move3'], FCVR),
  phrase(86, 'avec des clients', 'with clients', 'ah-vek day klee-YAHⁿ', 'learner', ['place', 'move3'], FCVR),
  phrase(87, 'derrière un comptoir', 'behind a counter', 'deh-ryeh-raⁿ kohⁿ-TWAR', 'learner', ['place', 'move3'], FCVR),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE FULL SET
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS: Row[] = [
  ...MOVE1_ROWS, ...MOVE2_ROWS, ...MOVE3_ROWS, ...MOVE4_ROWS,
  ...INTERVIEWER_ROWS, ...QUESTION_FORM_ROWS, ...WORKDAY_ROWS,
  ...FEMININE_ROWS, ...PLACE_ROWS,
];
export const ALL_ROWS = ROWS;

/** The four moves as model rows, in move order. s21-deliver takes exactly
 *  these four and it is the seam where `openPrompt` lands later. */
export const MOVE_MODEL_IDS = [M(20), M(24), M(28), M(32)] as const;

/** The four moves JOINED. This is authored LESSON TEXT and NOT a corpus row:
 *  it runs to nineteen words and the sentence budget is fourteen. It is here
 *  so the lesson and the test read the same string. */
export const JOINED_ANSWER =
  "Je suis ingénieur. Je travaille là-bas depuis six ans. Je m'occupe des dossiers clients. Et vous, vous faites quoi ?";

/** The one-sentence answer the scene shows failing. */
export const ONE_SENTENCE_ANSWER = 'Je suis ingénieur.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. WHAT IS IMPORTED, BY THEME
 *
 *  Collation §1.3's settled interpretation rule: A DB ROW THAT IS PUBLISHED IS
 *  REACHABLE AND MUST BE IMPORTED BY itemId, NEVER RE-AUTHORED. A row that is
 *  not published is invisible to learners and may be treated as absent.
 *
 *  All four import-from themes were confirmed PUBLISHED for this build, which
 *  is the answer four other units in this band are waiting on. See the build
 *  report.
 *
 *  SEED_CUT.tracks is ['sons','a1','a2'] and a track pulls in its units, its
 *  lessons and every item those lessons reference, automatically. So a card
 *  inside a mission does NOT render blank because its theme sits outside the
 *  cut: this lesson references the item, so the item is bundled. What is
 *  affected is theme browsing and the flashcard hub, which is a real product
 *  cost, is not this unit's, and is not blocking (collation §1.2).
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  /** Job titles, by sector, for s06-jobwords. Every one an existing `metiers`
   *  row. This is where the 179 existing single-word rows get their first real
   *  use rather than a second authoring. */
  sante: [
    'fr.a1.metiers.001',  // un médecin
    'fr.a1.metiers.002',  // un infirmier
    'fr.a1.metiers.020',  // un pharmacien
    'fr.a1.metiers.021',  // un dentiste
    'fr.a1.metiers.052',  // un chirurgien
  ],
  education: [
    'fr.a1.metiers.005',  // un professeur
    'fr.a1.metiers.054',  // un bibliothécaire
    'fr.a1.metiers.135',  // le directeur
  ],
  batiment: [
    'fr.a1.metiers.028',  // un électricien
    'fr.a1.metiers.029',  // un plombier
    'fr.a1.metiers.030',  // un maçon
    'fr.a1.metiers.026',  // un jardinier
  ],
  bureau: [
    'fr.a1.metiers.034',  // un ingénieur
    'fr.a1.metiers.035',  // un architecte
    'fr.a1.metiers.044',  // un informaticien
    'fr.a1.metiers.045',  // un comptable
  ],
  service: [
    'fr.a1.metiers.004',  // un vendeur
    'fr.a1.metiers.006',  // un cuisinier
    'fr.a1.metiers.007',  // un serveur
    'fr.a1.metiers.022',  // un coiffeur
    'fr.a1.metiers.047',  // un caissier
  ],

  /** The workplace nouns. Finished, and imported wholesale. */
  workplace: [
    'fr.a1.metiers.127',  // une usine
    'fr.a1.metiers.131',  // une équipe
    'fr.a1.metiers.140',  // une entreprise
    'fr.a1.metiers.145',  // une pause
    'fr.a1.metiers.151',  // une réunion
    'fr.a1.metiers.136',  // un poste
    'fr.a1.metiers.141',  // un entretien
    'fr.a1.metiers.129',  // un collègue
    'fr.a1.metiers.150',  // un client
    'fr.a1.metiers.153',  // un atelier
  ],

  /** The remaining masculine halves of the pair deck, where the sector lists
   *  above have not already carried them. */
  pairsM: [
    'fr.a1.metiers.003',  // un avocat
    'fr.a1.metiers.159',  // un employé
    'fr.a1.metiers.019',  // un facteur
    'fr.a1.metiers.024',  // un pâtissier
    'fr.a1.metiers.025',  // un agriculteur
    'fr.a1.metiers.027',  // un mécanicien
    'fr.a1.metiers.043',  // un traducteur
    'fr.a1.metiers.056',  // un ouvrier
  ],

  /** The feminines that ALREADY EXIST. Rule 1: import the exact form, any
   *  theme, any level. Eight of the ten pair cards are satisfied here and
   *  every one of them is an a1.03 figure this build did not have to move.
   *  `fr.b2.decouvertes.152` is B2 in an A2 lesson: cross-level references are
   *  established precedent, eleven of them in the shipped seed. */
  feminines: [
    'fr.a1.metiers.248',              // une avocate      (already in `metiers`)
    'fr.a2.collegues.017',            // une employée
    'fr.a1.rp-sante.010',             // une pharmacienne
    'fr.a1.rp-sante.011',             // une infirmière
    'fr.a1.cafe.063',                 // la caissière
    'fr.a1.marche.011',               // la vendeuse
    'fr.a2.marche.009',               // l'agricultrice
    'fr.a1.ecole.020',                // la directrice
    'fr.b2.decouvertes.152',          // une ingénieure
    'fr.a2.examens-et-diplomes.058',  // une professeure
  ],

  /** The job-advert vocabulary for s18-posting. All from the import-only
   *  themes, all published, none in the seed before this merge. */
  jobAd: [
    'fr.a2.metiers.006',  // une offre d'emploi   (already a2, already in seed)
    'fr.a2.metiers.007',  // postuler
    'fr.a1.metiers.139',  // un contrat
    'fr.a1.metiers.133',  // un horaire
    'fr.a1.metiers.146',  // un congé
    'fr.a1.metiers.125',  // un emploi
  ],

  /** Anchor sentences the corpus ALREADY HAD. `Je suis professeur.` was going
   *  to be authored at .022 until the batch's intra-theme duplicate guard
   *  caught it on the dry run. It is imported instead, which is rule 1 doing
   *  exactly what it exists for. */
  anchors: [
    'fr.a1.metiers.244',  // Je suis professeur.
    'fr.a1.metiers.260',  // Je suis architecte.
  ],

  /** a2.07's frozen repair block, and a2.29's ladder. Cited, never authored. */
  repair: [...REPAIR_IDS],
  ladder: [...LADDER_IDS],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** The dictée set. Word mode, and every one of these must carry the
 *  `dictation` drill — CHECKED AGAINST POSTGRES, NOT THE SEED. The article
 *  gap is the one safe written trap this lesson has (§7 of the prompt), so the
 *  dictée leans on move 1 and move 4 where a missing word survives the fold. */
export const DICTEE_IDS = [M(20), M(22), M(28), M(32), M(39), M(48)];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE GUARDS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Terms a learner-facing surface must never carry. Doctrine's jargon rule,
 *  and the walk has to cover Lesson.intro and Lesson.overview as well as the
 *  sections — Corrections §9 and §13, which a2.11 found the hard way. */
export const JARGON = [
  'zero article', 'zero-article', 'null article', 'copula', 'predicate nominal',
  'attributive', 'epicene', 'agentive suffix', 'derivational', 'periphrastic',
  'durative', 'aspectual', 'interrogative pronoun', 'wh-question',
] as const;

/** House style, enforced across the whole seed.
 *
 *  THE BAND'S EXISTING GUARD IS A `\bhonest` PATTERN AND IT CANNOT SEE
 *  "dishonest". a2.06 found that hole and every A2 lesson before it carries
 *  the broken shape. This one is a plain substring test in both directions and
 *  it is deliberately NOT word-bounded. */
export const BANNED_SUBSTRINGS = ['honest', 'honesty'] as const;

/** §12, and it is the temptation this unit has more of than any other in the
 *  band. Collation §1.12, and decisions item 4 which Paul ACCEPTED on
 *  2026-08-15: the bank is not seeded, and the offer to seed it was DECLINED.
 *  That is a decision and not a pending recommendation.
 *
 *  This unit carries exam value by TEACHING WHAT THE EXAM TESTS, not by
 *  producing an ExamTask row and not by populating Scenario.exam. */
export const EXAM_POLICY = {
  examTaskRows: 0,
  examSeriesRows: 0,
  scenarioExam: false,
  addDelfA2ToFormats: false,
  /** The ONE exam-layer artefact that is permitted, and it is free. The field
   *  exists (schema.ts:1303, validated at :3311 against EXAM_SKILLS) and it is
   *  the remediation join that lets a missed PO band resolve back to a lesson.
   *  Nothing at a2 currently sets it, nothing can currently miss a PO band,
   *  and setting it breaks nothing. */
  lessonSkill: 'PO' as const,
} as const;

/** The exam tasks that already exist, measured for this build so the report
 *  can state it rather than repeat the design's guess. */
export const EXAM_TASKS_MEASURED = {
  rows: 2,
  note: 'both delf_b2, both blanc-01, both in_review, and both about work. '
      + 'Invisible to every learner for two independent reasons: publish-content.ts '
      + 'selects where status = published, and exam entities are excluded from the '
      + 'seed cut. The only exam content this project has ever authored is already '
      + 'in this unit’s subject area and nobody can see it.',
} as const;

/** The act-to-exam-task mapping collation §1.12 asks for. This is design
 *  metadata a future runner consumes; it produces no row and no field. */
export const EXAM_MAPPING = [
  { act: 'act1', task: 'TEF Canada EO section B — the career narrative warm-up' },
  { act: 'act2', task: 'TCF Canada EO tâche 3 — "Parlez-moi de votre parcours professionnel"' },
  { act: 'act3', task: 'TCF Canada EO tâche 3 — "Décrivez votre travail"' },
  { act: 'act4', task: 'TEF Canada EO section B — register and self-correction under load' },
  { act: 'act5', task: 'TCF Canada CE — the job posting as stock stimulus' },
  { act: 'act6', task: 'DELF A2 monologue suivi — the closest pedagogic match, and NOT representable: EXAM_FORMATS is delf_b2 | tef_canada | tcf_canada' },
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. WHAT WAS LOST WITH `monologue`
 *
 *  Six losses, and the build report states all six PLAINLY. They are recorded
 *  here rather than only in prose because the next person to price
 *  `openPrompt` will read them as evidence.
 *
 *  MEASURED, not asserted:
 *    longest capture the app asks for   7,000 ms   app/roleplay.tsx:171
 *    the service's own default          6,000 ms   src/services/stt.ts:130
 *    how a capture is scored            similarity blend vs a target + alts
 *    open exam tasks are answered by    a TextInput   app/exam-task.tsx:19,:246
 *    timingS                            a display estimate, nothing else
 *    any countdown anywhere             none; setInterval is 0 across four files
 *
 *  A ninety-second turn is nineteen times what the app will hold open, and a
 *  speaking task authored as an exam task is answered by typing.
 * ══════════════════════════════════════════════════════════════════════════ */

export const MONOLOGUE_LOSSES = [
  'Continuous capture. The app never hears the four moves as one stretch. It hears four captures of up to seven seconds each.',
  "The learner's own content. stt.listen scores against a target string. No surface accepts an arbitrary sentence about the learner's real job and says anything true about it. What the lesson rehearses is a model parcours with slots.",
  'Feedback. No band, no rubric, no feedback string. examGrader cannot be reached from a lesson section.',
  'The prep beat. Tap-to-continue only. There is no timer to build one from.',
  'The live checklist. Nothing ticks a move off a partial transcript, so the checklist becomes something the learner reads and judges themselves against, afterwards.',
  'Evidence of fluency under sustained load. Nothing distinguishes four moves said in one breath from four sentences said with long pauses. The unit teaches the shape and cannot measure the delivery.',
] as const;

/** No learner-facing string in this lesson may claim it is an exam task, an
 *  exam rehearsal under exam conditions, or that the app has SCORED an exam
 *  answer. Naming the exam as context is fine. Claiming delivery is not. */
export const FORBIDDEN_CLAIMS = [
  'we will record', 'we will score', 'your score', 'exam conditions',
  'thirty seconds to prepare', '60 seconds', 'sixty seconds to speak',
  'the app will grade', 'your band', 'rubric',
] as const;
