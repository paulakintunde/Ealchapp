// a2.31.l1 « L'école & les études » — the authored corpus and the citation
// constants.
//
//   pnpm content:ecole-etudes             (author-ecole-etudes-batch.ts)
//   pnpm tsx scripts/merge-ecole-etudes-into-seed.ts
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS, AND WHAT IT ONLY QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
// Owns TWO things, and both are lexical rather than grammatical:
//
//   1  THE passer / réussir INVERSION. `passer un examen` means to SIT it.
//      A learner who says « j'ai passé mon examen » meaning "I passed"
//      produces a confidently wrong sentence that nobody corrects, because it
//      is a sentence. Documented at B1 only (fr.b1.universite.008) and once in
//      the SONS band as a bare headword with no teaching
//      (fr.sons.faux-amis.014). Nothing at A2 explains it.
//   2  THE EQUIVALENCE HEDGE. Four chunks, taught whole, for the moment your
//      credential has no French name. Collation C5 gives this unit "academic
//      equivalence hedging" explicitly and says nobody else needs it.
//
// The through-line is ONE DOCUMENT, assembled in four layers and then
// defended out loud:
//
//   layer 1   the ladder      what level was it
//   layer 2   the content     what did you study
//   layer 3   the outcome     how did it go
//   layer 4   the translation say it so a French speaker can place you
//
// QUOTED, NEVER TAUGHT — six boundaries, each settled in collation C5:
//
//   a2.05  the passé composé with avoir. THIS UNIT'S OWN PREREQUISITE and the
//          ENTIRE TENSE BUDGET of the lesson. One recap line, no re-teaching.
//   a2.18  depuis. Shown once inside a contrast card against pendant and en,
//          never taught. Uncontested in C5.
//   a2.30  the interview. It owns the recruitment conversation and the
//          parcours professionnel; we own the dossier and the study history.
//          Our scenario is a REGISTRAR recording what you studied, not an
//          employer deciding whether to hire you.
//   a2.07  the repair move. Six frozen rows, cited by itemId, ZERO authored.
//   a2.29  the register ladder. Three rung names quoted verbatim, ZERO rung
//          rows and ZERO softener rows authored.
//   a2.08  comparatives. Ships AFTER us at seq 31. Not available at all, so
//          there is no « j'étais meilleur en maths qu'en histoire » anywhere.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE IMPARFAIT. THE SINGLE MOST LIKELY WAY THIS BUILD GOES WRONG.
// ══════════════════════════════════════════════════════════════════════════
//
// NO UNIT ANYWHERE IN THE 75-UNIT SPINE TEACHES THE IMPARFAIT. Collation 1.8
// settles it OUT OF BAND: "328 A2 rows already use it incidentally; that is
// exposure, not ownership. Do not open it here."
//
// MEASURED FOR THIS BUILD, 2026-08-16, against published rows only:
//
//     imparfait forms in published a2 rows      306      (the design said 328)
//     imparfait rows inside theme `ecole`         2      exactly as reported
//
// The two are fr.a2.ecole.013 and fr.a2.ecole.015, and they are TWO OF THE
// FIFTEEN A2 ROWS IN THIS UNIT'S OWN THEME. A naive "name every A2 row in
// ecole" import pass drops them straight into a practice or a dictée, which
// is the rule broken on the first commit, silently, by a helper loop.
// THEY ARE EXCLUDED BY ID BELOW AND A TEST ASSERTS THEIR ABSENCE FROM EVERY
// SCORED SECTION.
//
// The lesson runs on the PASSÉ COMPOSÉ ALONE. Every natural sentence about a
// school career wants a background tense — j'étais fort en maths, on avait
// deux heures de sport — and those are better French than the ones this build
// is allowed to write. A completed course of study is a bounded event and the
// passé composé is the right tense for a bounded event, so the worse sentence
// is also the correct analysis.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE THEME IS REAL. DO NOT RE-MAP IT.
// ══════════════════════════════════════════════════════════════════════════
//
// Five of this band's eight units point at a phantom theme. THIS UNIT IS NOT
// ONE OF THEM. `ecole` holds 312 published rows and has a themeMeta entry.
// a2.31's `themes: ['ecole']` in author-full-curriculum-spine.ts IS CORRECT AS
// WRITTEN and this build does not touch the spine file, SEED_CUT.themes, or
// a1-24-corps.test.ts. If a re-map diff arrives that changes a2.31's themes,
// IT IS WRONG (collation §5).
//
// AND `ecole` IS FULLY IN THE SEED: 312 published, 312 present, measured
// 2026-08-16. For this theme a seed-side measurement IS a corpus-wide
// measurement. That is what makes the theme-ownership rule below cheap.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
const Cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ══════════════════════════════════════════════════════════════════════════
 *  §A. IDENTITY
 *  Read from author-full-curriculum-spine.ts L814-822 AND re-read from the
 *  `content_units` row in Postgres on 2026-08-16. THEY AGREE BYTE FOR BYTE.
 *  Corrections §1 (the swapped title/sub that all sixteen briefs carried)
 *  DOES NOT APPLY: this block came from the spine, not from a brief, and the
 *  database confirms it.
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'a2.31',
  seq: 30,
  level: 'a2',
  track: 'a2',
  title: 'School and Studies',
  sub: "L'école & les études",
  gloss: 'subjects, grades & academic vocabulary',
  canDo: 'Can talk about what they studied, which subjects and how it went',
  themes: ['ecole'],
  prereqUnitIds: ['a2.05'],
} as const;

export const LESSON_ID = 'a2.31.l1';
export const THEME = 'ecole';

/** Measured 2026-08-16, `pnpm corpus:probe --theme ecole`, seed v50. */
export const THEME_ROWS_BEFORE = 312;   // published, all levels
export const THEME_A1_BEFORE = 297;
export const THEME_A2_BEFORE = 15;      // max fr.a2.ecole.015, no gaps
export const THEME_SEED_BEFORE = 312;   // present in seed.json v50 — NOT a cut

/** The two rows this build must never put on a scored surface. */
export const IMPARFAIT_IDS = ['fr.a2.ecole.013', 'fr.a2.ecole.015'] as const;

/** Measured 2026-08-16 against published rows. The design said 328; it did not
 *  filter on status. Reported as a correction. */
export const IMPARFAIT_A2_EXPOSURE = 306;

/** A legitimate imparfait sentence from ANOTHER lesson's theme, CHOSEN FROM THE
 *  SEED so the guard can actually prove itself. It exists so the imparfait
 *  assertions can show they are scoped to a2.31 and not to the bundle: a
 *  seed-wide "no imparfait" assertion would go red on 306 published rows that
 *  are none of this unit's business, and four prior builds shipped guards that
 *  fired on other people's content exactly that way.
 *
 *  `fr.a2.metiers.009`, which is a2.30's theme and is in the seed. */
export const IMPARFAIT_MUST_NOT_FIRE = 'Il travaillait comme vendeur, mais il a changé de métier l\'année dernière.';

/** Measured, not derived. Invariants §5: assert the reframe count against an
 *  EXPLICIT CONSTANT, never a figure taken from the lesson, because a derived
 *  count compares the content to itself and passes on any rewording.
 *  `density.logic.ts` requires three; this lesson carries eleven. */
export const REFRAME_SECTIONS = 11;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. THE THEME-OWNERSHIP RULE — THIS BUILD'S DECISION, RECORDED
 *
 *  Collation §8 leaves this "not ratified, yours to decide and to record".
 *  Five themes carry education vocabulary and three of them (`matieres`,
 *  `examens-et-diplomes`, `disciplines`) duplicate each other on un examen,
 *  une note, un cours, un devoir, une leçon, un élève, un étudiant, réussir,
 *  échouer, étudier, réviser, l'inscription, le diplôme and le résultat.
 *  Naming two of them in one lesson surfaces the same card twice.
 *
 *  THE RULE APPLIED HERE, and the next unit that touches education inherits
 *  it:
 *
 *    `ecole` FIRST. Where a concept exists anywhere in `ecole` at any level,
 *    `ecole` owns it and this lesson imports the `ecole` row. Only where
 *    `ecole` genuinely lacks it does the lesson look outward, in this order:
 *
 *      examens-et-diplomes   assessment and credentials
 *      rp-travail-etudes     the credential-recognition and immigration layer
 *      matieres              school life not already in `ecole`
 *      disciplines           academic fields
 *
 *  WHY THIS ORDER AND NOT THE DESIGN'S. The design proposed
 *  `matieres` = school life, `examens-et-diplomes` = assessment,
 *  `disciplines` = fields, and did not put `ecole` first. Measured against
 *  Postgres, that would have imported the ENTIRE SCHOOL LADDER and the ENTIRE
 *  SUBJECT LIST from `matieres` when `ecole` already carries both:
 *
 *      la maternelle       fr.a1.ecole.065   (design would take matieres.069)
 *      l'école primaire    fr.a1.ecole.066   (design would take matieres.054)
 *      le collège          fr.a1.ecole.063   (design would take matieres.055)
 *      le lycée            fr.a1.ecole.064   (design would take matieres.056)
 *      l'université        fr.a1.ecole.181   (design would take matieres.057)
 *      les mathématiques   fr.a1.ecole.130   … and twelve more subjects
 *      étudier             fr.a1.ecole.190
 *      apprendre           fr.a1.ecole.051
 *      enseigner           fr.a1.ecole.191
 *      redoubler           fr.a1.ecole.111
 *      la moyenne          fr.a1.ecole.117
 *      la note             fr.a1.ecole.058
 *      réussir l'examen    fr.a1.ecole.112
 *      échouer à un examen fr.a2.ecole.008
 *      obtenir son diplôme fr.a2.ecole.009
 *
 *  `ecole`-first prevented roughly THIRTY duplicate cards and, because
 *  `ecole` is 312/312 in the seed, it also cost the seed nothing: every one of
 *  those imports is already in seed.json. The design's order would have pulled
 *  the same thirty concepts in from themes holding ZERO seed rows.
 * ══════════════════════════════════════════════════════════════════════════ */

export const THEME_PRIORITY = [
  'ecole', 'examens-et-diplomes', 'rp-travail-etudes', 'matieres', 'disciplines',
] as const;

/** Themes this unit IMPORTS FROM and never authors into (collation §5).
 *  Measured 2026-08-16 — the seed figure is what makes the carry mandatory. */
export const IMPORT_THEME_COUNTS = {
  'matieres': { postgres: 179, seed: 0 },
  'examens-et-diplomes': { postgres: 200, seed: 2 },
  'disciplines': { postgres: 80, seed: 1 },
  'rp-travail-etudes': { postgres: 111, seed: 0 },
} as const;
export const IMPORT_ONLY_THEMES = Object.keys(IMPORT_THEME_COUNTS) as readonly string[];

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE ID BLOCK
 *
 *  `pnpm corpus:probe --theme ecole` printed NEXT FREE ID = fr.a2.ecole.016
 *  with no gaps, in Postgres and in the seed, on 2026-08-16.
 *
 *  Corrections §10: THE MAXIMUM HAS BEEN USELESS SINCE a2.10.l2 TOOK .461..500.
 *  The row COUNT is the only signal. The batch checks the WHOLE BLOCK for
 *  occupancy rather than the top of it, because a1.19/a1.20 and a1.14/a1.15
 *  both had a concurrent build land BELOW a claimed top.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ID_FIRST = 16;
export const ID_LAST = 90;   // requested block; .077 upward deliberately unused
export const ID_USED_LAST = 76;

export const E = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE REFRAME, THE LAYERS, AND THE CITATIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine §B.4: a production rule the learner can run in the half-second
 *  before the sentence, not a description of the vocabulary.
 *
 *  REJECTED, and recorded because doctrine asks for it:
 *    * "Learn the French words for school subjects." — a description of the
 *      content. It gives the learner nothing to DO differently, and the words
 *      already exist in the corpus, so it is also false.
 *    * "French school levels do not map onto yours." — true, and it is a fact
 *      rather than an instruction. It tells you that you have a problem and
 *      not what to say.
 *    * "Translate your diploma." — actionable and wrong: translating it is
 *      exactly the move that fails, because the translation has no referent.
 *
 *  LIMITS.reframeMinSections requires it VERBATIM in at least three sections.
 *  It appears in six here. */
export const REFRAME = 'They will not know the name of your diploma. Say what it was and how long it took.';

export const LAYER_1 = 'the ladder';
export const LAYER_2 = 'the content';
export const LAYER_3 = 'the outcome';
export const LAYER_4 = 'the translation';
export const LAYERS = [LAYER_1, LAYER_2, LAYER_3, LAYER_4] as const;

export const LAYER_EN = {
  [LAYER_1]: 'what level was it',
  [LAYER_2]: 'what did you study',
  [LAYER_3]: 'how did it go',
  [LAYER_4]: 'say it so a French speaker can place you',
} as const;

/* ── a2.05: THE PREREQUISITE, AND THE WHOLE TENSE BUDGET ─────────────────── */

export const TENSE_UNIT = 'a2.05';
export const TIME_UNIT = 'a2.18';    // depuis. Shown in contrast, never taught.
export const INTERVIEW_UNIT = 'a2.30';
export const COMPARATIVE_UNIT = 'a2.08';   // ships AFTER us. Not available.

/* ── a2.07: THE REPAIR MOVE. SIX FROZEN ROWS, ZERO AUTHORED ──────────────── */

export const REPAIR_UNIT = 'a2.07';

/** Frozen at publication in A2-SITUATIONS/04-REPAIR-MOVE-IDS.md. Verified
 *  present and published in Postgres for this build. The other seven units
 *  depend on the order, so the ladder is never reshuffled. */
export const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
] as const;

/** The six strings, in rung order, so the batch can prove the block has not
 *  moved. THIS BUILD AUTHORS NONE OF THEM. */
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

/** a2.29 landed on 2026-08-16 and published these as a short list to paste.
 *  Clause 1 of its contract: quote the three names VERBATIM. A paraphrase is a
 *  second ladder. Clause 2: reuse its rows by itemId and author ZERO rung
 *  lines and ZERO softener rows. Clause 4: never rename, add a fourth, or
 *  reorder.
 *
 *  This unit's register is STABLE — a registrar is `vous` throughout, with no
 *  tu/vous decision to make — so the lightest correct use is what ships: one
 *  reference naming a2.29 by unit id and quoting the three names as they
 *  stand, plus the rung rows released by itemId. */
export const RUNG_1 = 'Ask once, softly.';
export const RUNG_2 = 'Say it again, without the person.';
export const RUNG_3 = 'Ask for the person who can fix it.';
export const RUNGS = [RUNG_1, RUNG_2, RUNG_3] as const;

/** One row per rung, taken from a2.29's published rung-to-itemId table. The
 *  full table runs to nineteen rows; three is the lightest correct citation
 *  for a unit whose register does not move. */
export const LADDER_IDS = [
  'fr.a2.hebergement.077',   // rung 1, the opener
  'fr.a2.hebergement.082',   // rung 2, the restate
  'fr.a2.hebergement.091',   // rung 3, the escalation
] as const;

/* ── a2.30: THE INTERVIEW BOUNDARY, IN ITS OWN WORDS ─────────────────────── */

/** a2.30's build report §3 states the boundary and this unit is bound by it:
 *
 *    "a2.31 authors no second interview scenario, no parcours professionnel
 *     framing, no job titles and no job-title feminines. It owns academic
 *     equivalence hedging, diplomas, and talking about a past course of study,
 *     and it draws on the interview without being it."
 *
 *  a2.30's own s20-interview was read before this scenario was written. Its
 *  interlocutor is forming an opinion about whether to hire; ours is filling
 *  in a form. Its four moves are anchor / duration / detail / hand-back; ours
 *  are the four dossier layers. Its learner only answers; ours ASKS in two of
 *  six turns, which is the TEF Canada EO section A fit the prompt flags as
 *  under-exploited. */
export const A2_30_RESERVED = [
  'parcours professionnel', 'entretien d\'embauche', 'embaucher', 'recruteur',
  'candidature', 'lettre de motivation', 'curriculum vitae',
] as const;

/** a2.30's batch reserves these words for THIS unit and a test in that build
 *  asserts it never authored them. They are ours, and the list is repeated
 *  here so the two builds can be diffed. */
export const OURS_BY_AGREEMENT = [
  'diplôme', 'diplômes', 'équivalence', 'équivalences', 'licence', 'master',
  'baccalauréat', 'université', 'faculté', 'relevé de notes',
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. WHAT THE PROMPT SAID TO AUTHOR, AND WHAT MEASUREMENT CHANGED
 *
 *  The prompt marks every Postgres figure UNVERIFIED and asks for the
 *  re-measurement. Six of its authoring instructions moved.
 *
 *  1. `redoubler` — "13 rows, one at a1, none at a2. Author."
 *     MEASURED: the a1 row IS `fr.a1.ecole.111`, IN THIS UNIT'S OWN THEME,
 *     with flashcard+voiceflash, already in the seed. Authoring `redoubler`
 *     into `ecole` would have been an INTRA-THEME DUPLICATE `fr`, which is
 *     precisely what the flashcard hub serves as one card twice. IMPORTED.
 *     There is also an a2 sentence, fr.a2.matieres.133, which the "none at a2"
 *     claim missed.
 *
 *  2. `une session` — listed as a Quebec word to author.
 *     MEASURED: `fr.a2.examens-et-diplomes.033` "une session" is published at
 *     A2. IMPORTED, and the Quebec academic sense is a note on the colour card
 *     rather than a second row.
 *
 *  3. `équivalence` — "24 rows; the only A2 one is fr.a2.dictee.114, a dictée
 *     row, not an education row. Author. This is your Own."
 *     MEASURED: SIX A2 rows, and four of them ARE education rows —
 *     fr.a2.examens-et-diplomes.119, .149, .174 and the phrases
 *     fr.a2.recherche-emploi.028 and fr.a2.rp-travail-etudes.042. THE NOUN IS
 *     FINISHED AT A2. What returns zero is the HEDGE — `ça correspond à`,
 *     `c'est l'équivalent de`, `chez nous on appelle ça`, `à peu près comme`.
 *     So the Own SURVIVES and gets sharper: this unit owns the MOVE, not the
 *     word. The noun is imported.
 *
 *  4. `licence` / `master` / `mention` — "no A2 row at all. Author."
 *     MEASURED: correct that no A2 row exists. All three exist at B1/B2, and
 *     collation §1.3's import rule is not qualified by level, so this was a
 *     real decision rather than an obvious one. AUTHORED AT A2 ANYWAY, for a
 *     reason that is measured rather than aesthetic: every published `mention`
 *     respelling — `la mahn-SYOHN` at fr.b1.examens-et-diplomes.021,
 *     `mahn-SYOHN` at fr.b1.reseaux-sociaux.073, `la mahn-SYOHN` at
 *     fr.b2.universite.056 — is FLAGGED BY THE REAL hasPlainNasalFor as
 *     closing a nasal with a plain n. Importing one would put a known
 *     convention violation on the card that carries the unit's outcome
 *     vocabulary. `licence` already carries three competing respellings and
 *     `doctorat` six; authoring at A2 adds a correct form rather than a fourth
 *     variant of a wrong one.
 *
 *  5. `disciplines` a2 for "university fields: droit, économie, informatique,
 *     comptabilité".
 *     MEASURED: `disciplines` at A2 is SCIENCE vocabulary — la planète, une
 *     étoile, la cellule, le squelette, l'éclipse. The academic fields it
 *     names live at B1 (`fr.b1.matieres.068` le droit, `.022` l'économie,
 *     `.073` la comptabilité, `.070` l'ingénierie). Two are imported from B1;
 *     `l'informatique` and `la médecine` exist at a1/a2 and come from there.
 *
 *  6. THE PROMPT'S OWN PRE-FLIGHT CANNOT FIND ITS OWN HEADWORDS. Its
 *     `corpus:probe --tokens "…"` line mixes six headwords (un relevé de
 *     notes, une licence, un master, une mention, redoubler, un cégep) into a
 *     probe that queries `kind='sentence'` ONLY (probe-corpus.ts L174). A
 *     headword is never a sentence, so the probe reports pg=0 for words that
 *     exist. `--words` is the headword probe. a2.28 found this same shape and
 *     it is still live in this prompt.
 * ══════════════════════════════════════════════════════════════════════════ */

/** The band's mandate, collation §1.5: at least 40 percent of a unit's newly
 *  authored rows must be in the voice of the person the learner is talking to.
 *  For this unit that person is the REGISTRAR: the admissions officer, the
 *  clerk, the form. Their speech is what returns zero rows and is what this
 *  build exists to author. Measured in the batch and in the test, never
 *  claimed in prose: a sentence in a report cannot fail. */
export const OTHER_VOICE_FLOOR = 0.4;

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE ROWS
 *
 *  Doctrine §E, as settled by a2.05 and a2.20: a conjugated form is not a
 *  corpus item and a participle is NEVER a corpus item. Everything here is a
 *  noun, a phrase or a full sentence.
 *
 *  Sentence budget 14 words. Passé composé and futur proche are permitted in
 *  corpus sentences; THE IMPARFAIT IS NOT, anywhere in this file.
 * ══════════════════════════════════════════════════════════════════════════ */

type Voice = 'learner' | 'other' | 'neutral';
type Row = Item & { voice: Voice };

const sent = (n: number, fr: string, en: string, respell: string, voice: Voice, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1, voice,
});
const phrase = (n: number, fr: string, en: string, respell: string, voice: Voice, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'phrase', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1, voice,
});
const word = (n: number, fr: string, en: string, respell: string, gender: 'm' | 'f', tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'word', level: 'a2', theme: THEME, fr, en, respell, gender, tags, drills, version: 1, voice: 'neutral',
});

const FCV = ['flashcard', 'voiceflash'] as Item['drills'];
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/* ── THE HEDGE. .016-.023. THE OWN, AND IT IS FOUR CHUNKS TAUGHT WHOLE ──────
 *  Measured DB-wide, published: `ça correspond à` 0, `c'est l'équivalent de`
 *  0, `chez nous on appelle ça` 0, `à peu près comme` 0. `à peu près` alone
 *  returns 0 at a1 and a2. The NOUN équivalence is finished at A2 and is
 *  imported; the MOVE does not exist and is authored here.                  */

export const HEDGE_ROWS: Row[] = [
  phrase(16, 'ça correspond à', 'that comes out at', 'sa ko-res-POHⁿ AH', 'learner', ['hedge', 'layer4'], FCVDR),
  phrase(17, "c'est l'équivalent de", "it's the equivalent of", 'seh lay-kee-va-LAHⁿ DUH', 'learner', ['hedge', 'layer4'], FCVR),
  phrase(18, 'chez nous, on appelle ça', 'where I am from we call it', 'shay NOO ohⁿ-na-PEL SA', 'learner', ['hedge', 'layer4'], FCVR),
  phrase(19, 'à peu près comme', 'roughly like', 'ah peu PREH KOM', 'learner', ['hedge', 'layer4'], FCVR),
  sent(20, 'Ça correspond à une licence.', "That comes out at a bachelor's.", 'sa ko-res-POHⁿ ah ün lee-SAHⁿSS', 'learner', ['hedge', 'layer4'], FCVDR),
  sent(21, "C'est l'équivalent d'un master.", "It's the equivalent of a master's.", 'seh lay-kee-va-LAHⁿ duhⁿ mas-TEHR', 'learner', ['hedge', 'layer4'], FCVR),
  sent(22, "Chez nous, on appelle ça autrement.", 'Where I am from we call it something else.', 'shay NOO ohⁿ-na-PEL sa oh-truh-MAHⁿ', 'learner', ['hedge', 'layer4'], FCVR),
  sent(23, "C'est à peu près comme le bac.", "It's roughly like the bac.", 'seh-tah peu PREH kom luh BAK', 'learner', ['hedge', 'layer4'], FCVR),
];

/* ── THE CREDENTIALS WITH NO A2 ROW. .024-.026 ──────────────────────────────
 *  See §E item 4 for why these are authored rather than imported from B1.    */

export const CREDENTIAL_ROWS: Row[] = [
  word(24, 'une licence', "a bachelor's degree (3 years)", 'ün lee-SAHⁿSS', 'f', ['credential', 'layer1'], FCVDR),
  word(25, 'un master', "a master's degree (2 more years)", 'uhⁿ mas-TEHR', 'm', ['credential', 'layer1'], FCVDR),
  word(26, 'une mention', 'a grade of distinction', 'ün mahⁿ-SYOHⁿ', 'f', ['credential', 'layer3'], FCVDR),
];

/* ── QUEBEC. .027-.028. COLOUR, NEVER AN ANSWER ─────────────────────────────
 *  Collation C3, PAUL-SETTLED: France-standard French is what gets scored,
 *  each unit may carry AT MOST ONE cardDeck card naming Quebec divergence,
 *  and nothing on that card is ever the answer to a scored question. These two
 *  rows are named by s05-quebec and by nothing else.
 *
 *  Measured: `cégep|CEGEP|DEC` returns FOUR rows DB-wide, all b1, all in
 *  `quebec-et-francophonie`. There is no A2 Quebec education content at all.
 *  Authoring the two headwords under `ecole` at A2 while `quebec-et-
 *  francophonie` owns the cégep SENTENCES at B1 is a deliberate split and it
 *  is recorded here rather than left as an accident.                        */

export const QUEBEC_ROWS: Row[] = [
  word(27, 'un cégep', 'a Quebec college, between school and university', 'uhⁿ say-ZHEP', 'm', ['quebec', 'colour'], FCVR),
  word(28, 'un DEC', 'a Quebec two-year college diploma', 'uhⁿ DEK', 'm', ['quebec', 'colour'], FCVR),
];

/* ── THE passer / réussir INVERSION. .029-.033. THE SIGNATURE TRAP ──────────
 *  `passer un examen` has NO A2 row. It exists at fr.b1.examens-et-diplomes.057
 *  and once in the SONS band at fr.sons.faux-amis.014, whose respelling
 *  `pah-SAY UHN ehg-zah-MAN` closes TWO nasals with a plain n. Naming the
 *  prior exposure and authoring a correct A2 row is the same move a2.07 made
 *  with its frozen block's twins.
 *
 *  `réussir un examen` DOES exist at A2 (fr.a2.dictee.085, already in the
 *  seed) and `échouer à un examen` exists in THIS THEME at fr.a2.ecole.008.
 *  Both are imported. What is authored is the CONTRAST IN THE PASSÉ COMPOSÉ,
 *  which is the form the learner produces and the form that inverts.        */

export const TRAP_ROWS: Row[] = [
  phrase(29, 'passer un examen', 'to SIT an exam', 'pa-SAY uhⁿ-nehg-za-MEHⁿ', 'learner', ['trap', 'passer', 'layer3'], FCVDR),
  sent(30, "J'ai passé mon examen en juin.", 'I sat my exam in June.', 'zhay pa-SAY mohⁿ-nehg-za-MEHⁿ ahⁿ ZHWEHⁿ', 'learner', ['trap', 'passer', 'layer3'], FCVDR),
  sent(31, "J'ai réussi mon examen.", 'I passed my exam.', 'zhay ray-ü-SEE mohⁿ-nehg-za-MEHⁿ', 'learner', ['trap', 'reussir', 'layer3'], FCVDR),
  sent(32, "J'ai raté mon examen de chimie.", 'I failed my chemistry exam.', 'zhay ra-TAY mohⁿ-nehg-za-MEHⁿ duh shee-MEE', 'learner', ['trap', 'rater', 'layer3'], FCVR),
  sent(33, "J'ai réussi du premier coup.", 'I passed first time.', 'zhay ray-ü-SEE dü pruh-myay KOO', 'learner', ['trap', 'reussir', 'layer3'], FCVR),
];

/* ── THE /20 SCALE. .034-.038 ───────────────────────────────────────────────
 *  Measured: `sur vingt|sur 20|/20` returns TEN rows DB-wide, of which exactly
 *  ONE is A2 education (fr.a2.matieres.160) and two more are money at A2
 *  (`sur vingt euros`). Reporting a result is half of "how it went", which is
 *  half of the canDo, and the scale is barely present. Authored.            */

export const MARK_ROWS: Row[] = [
  phrase(34, 'sur vingt', 'out of twenty', 'sür VEHⁿ', 'learner', ['marks', 'layer3'], FCVDR),
  phrase(35, 'avoir la moyenne', 'to get a pass mark', 'a-VWAR la mwa-YEN', 'learner', ['marks', 'layer3'], FCVDR),
  sent(36, "J'ai eu quatorze sur vingt.", 'I got fourteen out of twenty.', 'zhay ü ka-TORZ sür VEHⁿ', 'learner', ['marks', 'layer3'], FCVDR),
  sent(37, "J'ai eu la moyenne.", 'I got a pass mark.', 'zhay ü la mwa-YEN', 'learner', ['marks', 'layer3'], FCVDR),
  sent(38, "J'ai eu une mention bien.", 'I got a distinction.', 'zhay ü ün mahⁿ-SYOHⁿ BYEHⁿ', 'learner', ['marks', 'layer3'], FCVR),
];

/* ── fort / moyen / nul EN. .039-.042 ───────────────────────────────────────
 *  `fort en` exists once at A2, fr.a2.matieres.009 "Je suis fort en
 *  géographie", and it is imported and anchored on. `nul en` returns ZERO rows
 *  ANYWHERE in the corpus and `moyen en` returns zero in an education sense.
 *  Both authored, so the learner has the whole three-point scale rather than
 *  only its top.                                                            */

export const STRENGTH_ROWS: Row[] = [
  phrase(39, 'nul en', 'hopeless at', 'NÜL AHⁿ', 'learner', ['strength', 'layer2'], FCVDR),
  phrase(40, 'moyen en', 'average at', 'mwa-YEHⁿ AHⁿ', 'learner', ['strength', 'layer2'], FCVDR),
  sent(41, 'Je suis nul en maths.', 'I am hopeless at maths.', 'zhuh swee NÜL ahⁿ MAT', 'learner', ['strength', 'layer2'], FCVDR),
  sent(42, 'Je suis moyen en anglais.', 'I am average at English.', 'zhuh swee mwa-YEHⁿ ahⁿ-nahⁿ-GLEH', 'learner', ['strength', 'layer2'], FCVR),
];

/* ── HOW LONG IT TOOK. .043-.046 ────────────────────────────────────────────
 *  `pendant X` is a completed span and `en X` is the time the thing took to
 *  finish. Both take the passé composé, which is a2.05's and is this lesson's
 *  whole tense budget. `depuis` is a2.18's, at seq 14, uncontested in C5: it
 *  appears ONCE, inside a contrast card, through the IMPORTED row
 *  fr.a2.matieres.010, and this unit neither teaches it nor authors it.     */

export const DURATION_ROWS: Row[] = [
  phrase(43, 'pendant trois ans', 'for three years', 'pahⁿ-DAHⁿ trwa-ZAHⁿ', 'learner', ['duration', 'layer1'], FCVDR),
  phrase(44, 'en trois ans', 'in three years', 'ahⁿ trwa-ZAHⁿ', 'learner', ['duration', 'layer1'], FCVDR),
  sent(45, "J'ai fait des maths pendant trois ans.", 'I did maths for three years.', 'zhay FEH day MAT pahⁿ-DAHⁿ trwa-ZAHⁿ', 'learner', ['duration', 'faireDe', 'layer2'], FCVDR),
  sent(46, "J'ai fini ma licence en trois ans.", "I finished my bachelor's in three years.", 'zhay fee-NEE ma lee-SAHⁿSS ahⁿ trwa-ZAHⁿ', 'learner', ['duration', 'layer1'], FCVR),
];

/* ── THE OUTCOME. .047-.051 ─────────────────────────────────────────────────
 *  Every one in the passé composé with avoir, which is a2.05's and shipped.
 *  `obtenir son diplôme` is imported (fr.a2.ecole.009, this theme) and the
 *  SENTENCE that uses it is authored, because the corpus has forms and no
 *  minimal pairs — Corrections §3, which has held for every A2 build.       */

export const OUTCOME_ROWS: Row[] = [
  sent(47, "J'ai obtenu mon diplôme en juin.", 'I got my diploma in June.', 'zhay ob-tuh-NÜ mohⁿ dee-PLOHM ahⁿ ZHWEHⁿ', 'learner', ['outcome', 'layer3'], FCVDR),
  sent(48, "J'ai redoublé une année.", 'I repeated a year.', 'zhay ruh-doo-BLAY ü-na-NAY', 'learner', ['outcome', 'layer3'], FCVDR),
  sent(49, "J'ai arrêté mes études après deux ans.", 'I stopped studying after two years.', 'zhay a-reh-TAY may-zay-TÜD a-PREH deu-ZAHⁿ', 'learner', ['outcome', 'layer3'], FCVR),
  sent(50, "J'ai étudié le droit à l'université.", 'I studied law at university.', 'zhay ay-tü-DYAY luh DRWA a lü-nee-vehr-see-TAY', 'learner', ['content', 'layer2'], FCVDR),
  sent(51, "J'ai fait trois ans après le bac.", 'I did three years after the bac.', 'zhay FEH trwa-ZAHⁿ a-PREH luh BAK', 'learner', ['duration', 'layer1'], FCVDR),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REGISTRAR'S VOICE. .052-.076. TWENTY-FIVE ROWS, AND THE POINT OF THE
 *  WHOLE BAND.
 *
 *  Collation §1.5: "The corpus authored only the learner's half of every
 *  situation. The nouns are finished. The other party's speech does not
 *  exist." Measured for this unit against published rows: `quel est votre
 *  dernier diplôme` 0, `vous avez un relevé de notes` 0, `ça correspond à quel
 *  niveau` 0, `vous avez redoublé` 0. Twenty-five rows, forty-one percent of
 *  the authored total, and every one of them is a question or an instruction
 *  the learner has to RECEIVE rather than produce.
 *
 *  Register is `vous` throughout and it never moves, which is why this unit
 *  cites a2.29's ladder rather than teaching one.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REGISTRAR_ROWS: Row[] = [
  sent(52, 'Quel est votre dernier diplôme ?', 'What is your most recent qualification?', 'keh-LEH vo-truh dehr-NYAY dee-PLOHM', 'other', ['registrar', 'layer1'], FCVDR),
  sent(53, 'Vous avez fait ça pendant combien de temps ?', 'How long did you do that for?', 'voo-za-VAY FEH sa pahⁿ-DAHⁿ kohⁿ-byehⁿ duh TAHⁿ', 'other', ['registrar', 'layer1'], FCVDR),
  sent(54, 'Ça correspond à quel niveau chez nous ?', 'What level does that come out at here?', 'sa ko-res-POHⁿ ah kel nee-VOH shay NOO', 'other', ['registrar', 'layer4'], FCVDR),
  sent(55, 'Vous avez un relevé de notes ?', 'Do you have a transcript?', 'voo-za-VAY uhⁿ ruh-luh-VAY duh NOT', 'other', ['registrar', 'layer3'], FCVDR),
  sent(56, 'Il nous faut une attestation.', 'We need a certificate of attendance.', 'eel noo FOH ü-na-tes-ta-SYOHⁿ', 'other', ['registrar', 'layer3'], FCVR),
  sent(57, 'Et vous avez obtenu la mention ?', 'And did you get the distinction?', 'ay voo-za-VAY ob-tuh-NÜ la mahⁿ-SYOHⁿ', 'other', ['registrar', 'layer3'], FCVR),
  sent(58, 'Vous avez étudié quoi, exactement ?', 'What did you study, exactly?', 'voo-za-VAY ay-tü-DYAY KWA eg-zak-tuh-MAHⁿ', 'other', ['registrar', 'layer2'], FCVDR),
  sent(59, 'Vous avez fini en quelle année ?', 'What year did you finish?', 'voo-za-VAY fee-NEE ahⁿ kel a-NAY', 'other', ['registrar', 'layer1'], FCVR),
  sent(60, 'Vous avez passé un examen final ?', 'Did you sit a final exam?', 'voo-za-VAY pa-SAY uhⁿ-nehg-za-MEHⁿ fee-NAL', 'other', ['registrar', 'trap', 'layer3'], FCVR),
  sent(61, 'Vous avez réussi du premier coup ?', 'Did you pass first time?', 'voo-za-VAY ray-ü-SEE dü pruh-myay KOO', 'other', ['registrar', 'trap', 'layer3'], FCVR),
  sent(62, 'Je note « licence », c\'est ça ?', "I'll put down bachelor's, is that right?", 'zhuh NOT lee-SAHⁿSS seh SA', 'other', ['registrar', 'layer4'], FCVR),
  sent(63, "Vous pouvez épeler le nom de l'école ?", 'Can you spell the name of the school?', 'voo poo-VAY ay-puh-LAY luh NOHⁿ duh lay-KOL', 'other', ['registrar', 'layer2'], FCVR),
  sent(64, 'On va demander une équivalence.', 'We are going to apply for an equivalency.', 'ohⁿ va duh-mahⁿ-DAY ü-nay-kee-va-LAHⁿSS', 'other', ['registrar', 'layer4'], FCVR),
  sent(65, 'Vous avez redoublé une année ?', 'Did you repeat a year?', 'voo-za-VAY ruh-doo-BLAY ü-na-NAY', 'other', ['registrar', 'layer3'], FCVR),
  sent(66, 'Le dossier est complet, merci.', 'The file is complete, thank you.', 'luh do-SYAY eh kohⁿ-PLEH mehr-SEE', 'other', ['registrar', 'close'], FCVR),
  sent(67, "Ça fait combien d'années après le bac ?", 'How many years is that after the bac?', 'sa FEH kohⁿ-byehⁿ da-NAY a-PREH luh BAK', 'other', ['registrar', 'layer1'], FCVR),
  sent(68, 'Vous avez le diplôme original ?', 'Do you have the original diploma?', 'voo-za-VAY luh dee-PLOHM o-ree-zhee-NAL', 'other', ['registrar', 'layer3'], FCVR),
  sent(69, 'Il me faut la date exacte.', 'I need the exact date.', 'eel muh FOH la dat eg-ZAKT', 'other', ['registrar', 'layer1'], FCVR),
  sent(70, 'Vous avez étudié où ?', 'Where did you study?', 'voo-za-VAY ay-tü-DYAY OO', 'other', ['registrar', 'layer2'], FCVDR),
  sent(71, 'Votre dossier est incomplet.', 'Your file is incomplete.', 'vo-truh do-SYAY eh-tehⁿ-kohⁿ-PLEH', 'other', ['registrar', 'close'], FCVR),
  sent(72, 'Vous avez commencé en quelle année ?', 'What year did you start?', 'voo-za-VAY ko-mahⁿ-SAY ahⁿ kel a-NAY', 'other', ['registrar', 'layer1'], FCVR),
  sent(73, "C'est un diplôme de trois ans ?", 'Is that a three-year qualification?', 'seh-tuhⁿ dee-PLOHM duh trwa-ZAHⁿ', 'other', ['registrar', 'layer1'], FCVR),
  sent(74, 'Vous avez fait quelle spécialisation ?', 'What did you major in?', 'voo-za-VAY FEH kel spay-sya-lee-za-SYOHⁿ', 'other', ['registrar', 'layer2'], FCVR),
  sent(75, 'Je vais noter « équivalent licence ».', "I'll write down bachelor's equivalent.", 'zhuh veh no-TAY ay-kee-va-LAHⁿ lee-SAHⁿSS', 'other', ['registrar', 'layer4'], FCVR),
  sent(76, 'Bon, et après le lycée ?', 'Right, and after high school?', 'BOHⁿ ay a-PREH luh lee-SAY', 'other', ['registrar', 'layer1'], FCVR),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE FULL SET
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS: Row[] = [
  ...HEDGE_ROWS, ...CREDENTIAL_ROWS, ...QUEBEC_ROWS, ...TRAP_ROWS,
  ...MARK_ROWS, ...STRENGTH_ROWS, ...DURATION_ROWS, ...OUTCOME_ROWS,
  ...REGISTRAR_ROWS,
];
export const ALL_ROWS = ROWS;

/** The two trap sentences that must sit SIDE BY SIDE in one section, each with
 *  its English (the prompt's required layout 2). The inversion cannot be
 *  taught in prose: it has to be visible in one glance. */
export const TRAP_PAIR = [E(30), E(31)] as const;
export const TRAP_PAIR_FR = ["J'ai passé mon examen en juin.", "J'ai réussi mon examen."] as const;

/** `passer un examen` used to mean "to pass" is the error this unit exists to
 *  prevent. It is PERMITTED in exactly one place — as the wrong text of an
 *  errorSpot — and the test scopes the assertion to allow that one location. */
export const PASSER_AS_PASS_WRONG = "J'ai passé mon examen, donc j'ai mon diplôme.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. WHAT IS IMPORTED, BY THEME
 *
 *  Collation §1.3's settled interpretation rule: A DB ROW THAT IS PUBLISHED IS
 *  REACHABLE AND MUST BE IMPORTED BY itemId, NEVER RE-AUTHORED.
 *
 *  Applied through the `ecole`-first ownership rule in §B. Because `ecole` is
 *  312/312 in the seed, every `ecole` import below is ALREADY in seed.json and
 *  costs the merge nothing. Only the foreign-theme imports grow the file.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  /** THE LADDER, layer 1. All five rungs, all in `ecole`, all already in the
   *  seed. The design would have taken these from `matieres`; see §B. */
  ladder: [
    'fr.a1.ecole.065',   // la maternelle
    'fr.a1.ecole.066',   // l'école primaire
    'fr.a1.ecole.063',   // le collège
    'fr.a1.ecole.064',   // le lycée
    'fr.a1.ecole.181',   // l'université
  ],

  /** THE CREDENTIALS `ecole` LACKS. The bac in its FRENCH sense comes from
   *  `examens-et-diplomes`; see the Quebec note in the lesson for why the same
   *  word has a second published row with a different meaning. */
  credentials: [
    'fr.a2.examens-et-diplomes.060',   // le baccalauréat — the French exam at 18
    'fr.a2.rp-travail-etudes.039',     // un baccalauréat — "a bachelor's degree"
    'fr.a2.rp-travail-etudes.040',     // une maîtrise
    'fr.a2.rp-travail-etudes.041',     // un doctorat
    'fr.a1.ecole.187',                 // le diplôme
    'fr.a2.ecole.009',                 // obtenir son diplôme
    'fr.a2.examens-et-diplomes.081',   // un relevé de notes
    'fr.a2.examens-et-diplomes.062',   // une attestation
    'fr.a2.examens-et-diplomes.033',   // une session
  ],

  /** THE EQUIVALENCE NOUN. Finished at A2 and imported; the MOVE is this
   *  unit's Own and is authored above. See §E item 3. */
  equivalence: [
    'fr.a2.rp-travail-etudes.042',     // une équivalence de diplôme
    'fr.a2.rp-travail-etudes.037',     // un domaine d'études
    'fr.a2.rp-travail-etudes.001',     // des études
  ],

  /** THE SUBJECTS, layer 2. Every one an `ecole` a1 row already in the seed. */
  subjects: [
    'fr.a1.ecole.130',   // les mathématiques
    'fr.a1.ecole.131',   // le français
    'fr.a1.ecole.132',   // l'histoire
    'fr.a1.ecole.133',   // la géographie
    'fr.a1.ecole.134',   // les sciences
    'fr.a1.ecole.135',   // la physique
    'fr.a1.ecole.136',   // la chimie
    'fr.a1.ecole.137',   // la biologie
    'fr.a1.ecole.138',   // l'anglais
    'fr.a1.ecole.139',   // l'espagnol
    'fr.a1.ecole.140',   // la musique
    'fr.a1.ecole.142',   // l'éducation physique
    'fr.a1.ecole.143',   // l'informatique
  ],

  /** THE UNIVERSITY FIELDS. `disciplines` at A2 turned out to be science
   *  vocabulary, not academic fields (§E item 5), so two come from B1 and two
   *  from a1/a2 rows that already exist. */
  fields: [
    'fr.b1.matieres.022',        // l'économie
    'fr.b1.matieres.068',        // le droit
    'fr.a2.disciplines.003',     // la médecine
  ],

  /** THE THREE-WAY CONTRAST NOTHING IN THE CORPUS WRITES DOWN. All three
   *  headwords exist, and all three are in THIS theme. The contrast is ours. */
  verbs: [
    'fr.a1.ecole.190',   // étudier    — a subject
    'fr.a1.ecole.051',   // apprendre  — a skill
    'fr.a1.ecole.191',   // enseigner  — what somebody does to you
  ],

  /** THE OUTCOME VOCABULARY. `redoubler` and `réussir l'examen` are `ecole`
   *  rows and were going to be re-authored until the probe found them; see
   *  §E item 1. `échouer à un examen` is already an A2 row in this theme. */
  outcome: [
    'fr.a1.ecole.111',                     // redoubler
    'fr.a1.ecole.112',                     // réussir l'examen
    'fr.a2.ecole.008',                     // échouer à un examen
    'fr.a1.ecole.058',                     // la note
    'fr.a1.ecole.117',                     // la moyenne
    'fr.a1.ecole.060',                     // le bulletin
    'fr.a1.ecole.109',                     // avoir une bonne note
    'fr.a1.ecole.110',                     // avoir une mauvaise note
    'fr.a2.examens-et-diplomes.021',       // une moyenne
    // DROPPED, and the reason is measured rather than editorial. Each of these
    // carries `voiceflash` and `review` and NOT `flashcard`, so no deck in the
    // product can serve it, and no section of this lesson names it. Releasing
    // one through a deckTranche would be a line that looks like it works and
    // does nothing (a2.29 found the same shape on four rows):
    //
    //   fr.a2.examens-et-diplomes.088  réussir       — fr.a1.ecole.112
    //                                                  `réussir l'examen` is
    //                                                  used instead and HAS
    //                                                  flashcard
    //   fr.a2.examens-et-diplomes.067  une épreuve orale
    //   fr.a2.examens-et-diplomes.065  une admission
    //   fr.a2.matieres.160             the /20 sentence — `dictation` only, and
    //                                  it is a long sentence, so word mode
    //   fr.a2.matieres.133             the redoubler sentence — sentence/review
    //
    // The last two are the rows the prompt names as its /20 and `redoubler`
    // evidence. They are cited in the build report as evidence and not carried
    // as cards, which is the honest version of "the corpus already has this".
  ],

  /** THE ANCHORS THE PROMPT REQUIRES BY ID. `fr.a2.matieres.011` states the
   *  `faire de` rule AS A RULE. This lesson makes it reachable and drills the
   *  gender and plural variation around it; it does NOT restate it in the
   *  author's own words, and a test asserts the id. */
  anchors: [
    'fr.a2.matieres.011',   // « faire de » : faire des maths, faire de l'anglais
    'fr.a2.matieres.009',   // Je suis fort en géographie.
    'fr.a2.matieres.010',   // J'étudie l'espagnol depuis deux ans.   (a2.18's depuis)
  ],

  /** THE EXAM ROOM, for the listening and the reading. */
  examroom: [
    'fr.a2.examens-et-diplomes.017',   // une épreuve
    'fr.a2.examens-et-diplomes.018',   // une épreuve écrite
    'fr.a2.examens-et-diplomes.013',   // une inscription
  ],

  /** THE CLASSROOM the scene and the reading need, all `ecole` a1. */
  classroom: [
    'fr.a1.ecole.013',   // l'école
    'fr.a1.ecole.115',   // le cours
    'fr.a1.ecole.116',   // le trimestre
    'fr.a1.ecole.017',   // l'élève
    'fr.a1.ecole.018',   // l'étudiant
    'fr.a1.ecole.016',   // le professeur
  ],

  /** a2.07's frozen repair block, and a2.29's ladder. CITED, NEVER AUTHORED. */
  repair: [...REPAIR_IDS],
  ladderRungs: [...LADDER_IDS],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** THE DICTÉE. Corrections §4: `dicteeMode()` switches to WORD tiles above 16
 *  letters and word mode hands every real word over pre-spelled, so a lesson
 *  about spelling a credential needs LETTER mode. EVERY CANDIDATE IS CHECKED
 *  THROUGH THE REAL dicteeMode IN THE BATCH, not counted by eye.
 *
 *  And they are all AUTHORED rows, because the two the prompt names —
 *  `le baccalauréat` (fr.a2.examens-et-diplomes.060) and `un relevé de notes`
 *  (.081) — carry `voiceflash` and `review` and NOT `dictation`. A dictée
 *  naming them would drill nothing. Measured against Postgres, not the seed. */
export const DICTEE_IDS = [E(16), E(24), E(26), E(34), E(37), E(43)];

/** The BAND RULE added on 2026-08-15: fold the expected answer and the most
 *  plausible wrong answer before authoring any typeIn, errorSpot or dictée
 *  item, and if they collide the item tests nothing. These are the near-miss
 *  pairs this lesson leans on; the test asserts fold(a) !== fold(b) for every
 *  one through the REAL fold(). */
export const NEAR_MISSES: [string, string][] = [
  ["J'ai réussi mon examen.", "J'ai passé mon examen."],
  ['une licence', 'une licance'],
  ['une mention', 'une mension'],
  ['sur vingt', 'sur vint'],
  ['pendant trois ans', 'pendant trois an'],
  ['ça correspond à', 'ça corespond à'],
  ["J'ai eu la moyenne.", "J'ai eu la moyene."],
  ["J'ai fait des maths.", "J'ai fait de maths."],
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE GUARDS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine's jargon rule. The walk must cover Lesson.intro and
 *  Lesson.overview as well as the sections (Corrections §9), and it must run
 *  over a display() walk so `sub` on a cardDeck card is seen (§13).
 *
 *  Corrections §14.5: `adjective` and `adverb` are HOUSE VOCABULARY, not
 *  jargon. Nothing here bans a part-of-speech name. */
export const JARGON = [
  'imparfait', 'imperfect tense', 'preterite', 'perfective', 'imperfective',
  'aspectual', 'durative', 'periphrastic', 'lexical set', 'formulaic sequence',
  'schema substitution', 'partitive article', 'false friend', 'faux ami',
  'suppletive', 'deverbal', 'telic', 'atelic',
] as const;

/** The word "imparfait" must appear in NO user-facing string, and in neither
 *  grammarIntroduced nor grammarAssumed. A lesson that claims a tense it does
 *  not teach corrupts the curriculum checkability the two-list design exists
 *  for. Listed in JARGON above and asserted separately by name. */
export const FORBIDDEN_TENSE_WORD = 'imparfait';

/** House style, enforced across the whole seed.
 *
 *  THE BAND'S INHERITED GUARD IS A `\bhonest` PATTERN AND IT CANNOT SEE
 *  "dishonest" — a2.06 found that hole and every A2 lesson before it carries
 *  the broken shape. This is a plain substring test in both directions and it
 *  is deliberately NOT word-bounded. */
export const BANNED_SUBSTRINGS = ['honest', 'honesty'] as const;

/** Claims the app cannot deliver. Collation 1.9: `setInterval` is ZERO across
 *  all four render files, so any "against the clock" framing is void and must
 *  be re-expressed as tap-to-continue. And `reading.questions` render as a
 *  Press that toggles the answer into view: nothing is typed and nothing is
 *  scored, so the lesson must never promise that it is. */
export const FORBIDDEN_CLAIMS = [
  'against the clock', 'you have 30 seconds', 'time yourself', 'countdown',
  'type your answer below', 'we will mark your text', 'write 60 words',
  'graded essay', 'your composition will be scored',
] as const;

/** Collation §3.5: five audio fields validate, publish and are read by NO
 *  renderer. The seed already authors 31 of them. This build authors none. */
export const DEAD_AUDIO_FIELDS = [
  'modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays',
] as const;

/** The five fields a2.07 shipped that draw NOTHING (41-DEAD-FIELDS-WARNING.md).
 *  `pnpm -C ealch-admin typecheck` is the only check in this project that sees
 *  them, and it is run as part of this build rather than recommended. */
export const DEAD_LESSON_FIELDS = ['canDo', 'track', 'teaches'] as const;

/** Collation §1.12, and Paul's decision item 4, ACCEPTED 2026-08-15: the bank
 *  is not seeded and the offer to seed it was DECLINED.
 *
 *  This unit carries exam value by TEACHING WHAT THE EXAM TESTS, not by
 *  producing an ExamTask row and not by populating Scenario.exam. */
export const EXAM_POLICY = {
  examTaskRows: 0,
  examSeriesRows: 0,
  scenarioExam: false,
  addDelfA2ToFormats: false,
} as const;

/** THE TRUTHFUL STATEMENT OF THIS UNIT'S WRITTEN CLAIM, in the exact wording
 *  the prompt requires, carried here so the report and the source agree.
 *
 *  The design wanted this unit to be the band's home for written output. That
 *  ambition is not funded: `openPrompt` is deferred (collation §3.2 rank 2),
 *  `practice` renders the SPEAKING drill regardless of `skill`, and
 *  `reading.questions` are tap-to-reveal. */
export const WRITTEN_CLAIM =
  `${Cap(unitRef('a2.31'))} produces every sentence a written account would need, at clause level, `
  + 'on graded surfaces. It does not produce a graded text. The only surface in the '
  + 'app that can grade a free composition is app/exam-task.tsx via '
  + 'services/examGrader.ts, it is not inside a lesson, and nothing routes a lesson to it.';
