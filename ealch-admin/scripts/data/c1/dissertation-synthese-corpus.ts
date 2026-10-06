// c1.10.l1 « Dissertation et synthèse » — the authored corpus, the imports,
// the anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape) on top of
// B1-BUILD-PLAYBOOK.md, with the C1 rules of C1-BUILD-LOG.md (« What is
// different at C1 », decisions 1, 23 and 24, the wave 2 and wave 4 notes).
// Structural model: b2.23 (`../b2/argumentation-*`); C1 voice, helpers and
// file layout as c1.08 (`./persuader-*`), which has the same model.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, PG_ROWS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE WRITTEN ESSAY AT C1, PAST b2.23 (Paul's refocus, decision 1): the
//   problématique as a TENSION or a PARADOX, found by defining the subject's
//   terms; the analytical and comparative plans; choosing a plan FROM the
//   problématique; the transition-bilan; the conclusion that answers without
//   erasing the tension and the ouverture it earns; the WRITTEN synthèse of
//   documents (one new text, own words, no opinion, no added idea, key words
//   reusable but not whole sentences, a word range), practised UNGRADED in
//   acts 9 and 10 (decision 24); the essai argumenté from a dossier in a real
//   genre (the graded task, act 12).
//
//     act 1   the subject that traps you (the problem); recap of b2.22 and
//             b2.23 in ONE recap page; the task announced
//     act 2   defining the subject's terms, the small words, delimiting
//     act 3   the problématique as a tension or a paradox (not a theme, not a
//             « problème », not a yes / no restatement)
//     act 4   the analytical plan (constat, causes ranked, enjeux)
//     act 5   the comparative plan (criterion by criterion; à l’instar de,
//             au même titre que, à la différence de, autant… autant)
//     act 6   choosing the plan FROM the problématique; the third part that
//             goes beyond, not « un peu des deux » (a one-take listening)
//     act 7   the transition-bilan and the partial conclusion
//     act 8   the conclusion that answers, and the earned ouverture
//             (prolonger, déplacer, élargir)
//     act 9   reading a dossier by ideas: convergences, divergences
//     act 10  writing the synthèse (ungraded practice, phrase by phrase)
//     act 11  the essai argumenté from a dossier: genre, addressee, the
//             dossier used without copying
//     act 12  the task: a lettre ouverte of 250 to 400 words from a dossier
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1's one recap page, never
//   re-taught):
//     - b2.22 « Le style académique » (« la leçon 22 du B2 »): one idea per
//       paragraph, the plan announced and followed, cautious claims,
//       « il convient d’abord de préciser les termes du débat » (its row
//       .1031 is reused: this lesson DOES the defining that b2.22 names).
//     - b2.23 « Argumenter » (« la leçon 23 du B2 »): the problématique as
//       « la question que ton texte va trancher », the introduction (amorce,
//       problématique, thèse or annonce), the conclusion (bilan, answer,
//       ouverture), the dialectical and thematic plans and the rule « pour ou
//       contre : dialectique », the transition « Après avoir vu les avantages,
//       examinons maintenant les limites », comparing two points of view.
//       Act 6 goes past its plan rule; act 7 past its transition; act 8 past
//       its ouverture.
//     - c1.09 « L’exposé et le jury » (« la leçon 9 du C1 », live): the
//       synthesis ALOUD with stance verbs (souligner, avancer, mettre en garde
//       contre) and the SPOKEN problématique formulas (dès lors, on peut se
//       demander si ; toute la question est de savoir ; la question n’est pas
//       tant de… que de…). Acts 3 and 9 cite it and reuse its rows; none of
//       its spoken formulas is taught here.
//     - c1.07 « Reformuler et conclure » (« la leçon 7 du C1 », live): the
//       closure markers (somme toute, tout bien considéré, en guise de
//       conclusion, en tout état de cause). Act 8 cites it; none is taught.
//       c1.07 left transitions inside an essay plan to this lesson.
//     - c1.08 « Persuader » (« la leçon 8 du C1 », live): the pre-empted
//       objection at its strongest. Act 11 cites it and reuses its row.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ
//      ONLY … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `discours-dexamen`: range c1-c2, sub_themes ['faire le point sur
//     sa grammaire', 'suivre un débat à l'oral', 'l'exposé et le jury', 'la
//     dissertation et la synthèse'] (wave 4 setup). 165 legacy c1 rows
//     (.001-.165, all published, drills {sentence, review}: none
//     flashcard-able, none speakable).
//
//  2. ID BLOCK: this lesson owns `fr.c1.discours-dexamen.1600` to `.1799`
//     AND NOTHING ELSE (ledger, C1-BUILD-LOG.md). Re-probed 2026-10-06: 0
//     rows in 1600-1799 at any level. Used: .1600-.1770, 171 rows in twelve
//     act blocks (§G). Nothing outside the block.
//
//  3. REUSED ROWS (§F). In seedPlusPacks(): b2.22 (universite .1031, .1036,
//     .1043), b2.23 (opinions-et-avis .1717, .1723, .1725, .1726, .1727,
//     .1730, .1731, .1732, .1735, .1742, .1745), c1.09 (discours-dexamen
//     .1205, .1236), c1.08 (rhetorique .1168) and two legacy rows
//     (discours-dexamen .122, .132), c1.24 (strategies-de-comprehension
//     .2084). PUBLISHED IN POSTGRES BUT ABSENT FROM
//     THE SEED CUT, carried in `PG_ROWS` with fr / en / drills copied
//     verbatim on 2026-10-06:
//       fr.c1.discours-dexamen.036   Finalement, la question reste ouverte, et c'est peut-être là sa richesse.
//       fr.c1.discours-dexamen.048   La synthèse de ces différents points fait apparaître un besoin criant de coordination.
//       fr.c1.discours-dexamen.050   Reste une interrogation en suspens, que je laisse volontiers à votre réflexion.
//       fr.c1.discours-dexamen.055   De cette comparaison, il se dégage un enseignement précieux pour nos politiques publiques.
//       fr.c1.discours-dexamen.067   Clarifions dès maintenant ce que recouvre cette expression.
//       fr.c1.discours-dexamen.096   Cette première observation nous conduit directement au deuxième point que je souhaite développer.
//       fr.c1.discours-dexamen.098   Il me paraît essentiel de distinguer d’emblée deux réalités que l’on confond souvent.
//       fr.c1.discours-dexamen.114   La question posée peut sembler technique, mais elle engage en réalité des choix de société fondamentaux.
//       fr.c1.discours-dexamen.152   Il importe néanmoins de distinguer les causes profondes des simples effets de mode.
//     DECISION 13 TYPOGRAPHY EDIT NEEDED AT IMPORT (straight ' to ’): .036,
//     .055, .096 and .152. .048, .050, .067, .098, .114 need no edit. Seed
//     rows with a straight ' (b2.22 .1031, .1043; b2.23 .1732) are printed
//     only through `src()` and never inside the scenario.
//
//  4. NO AUTHORED ROW TWINS A PUBLISHED ROW. Every `fr` folded (accents,
//     case, punctuation, apostrophes) and compared with all Postgres rows
//     (scratch check `twins.mts`, 2026-10-06). Reused instead of twinned:
//     « la problématique » (b2.opinions-et-avis.1723), « une ouverture »
//     (.1725), « le plan dialectique » (.1730), « le plan thématique »
//     (.1731), « faire dialoguer les documents » (c1.discours-dexamen.1205),
//     « une lettre ouverte » (c1.strategies-de-comprehension.2084). « un
//     phénomène » (b2 PG-only rows) avoided by authoring « expliquer un
//     phénomène » (.1650).
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ after a vowel at the end of a respelling token is written
//     double: problème pro-BLEMM, thème TEMM, même MEMM, semaine suh-MENN,
//     domaine do-MENN, personne pehr-SONN, donne DONN, humaine ü-MENN,
//     prochaine pro-SHENN, chacune sha-KÜNN. Every doubled consonant is
//     really pronounced. No U+203F tie anywhere.
//
//  6. THE TEXTS IN §I ARE ORIGINAL, WRITTEN FOR THE LESSON (« texte original
//     écrit pour la leçon »). No quotation of any real person, no real
//     outlet. Every person, place, outlet and figure is invented: the town of
//     Sorbevaux (checked 2026-10-06: no commune of that name found), its
//     Maison des savoirs, its halle, the rue Haute, the école des Tilleuls,
//     « Le Courrier de Sorbevaux », the association « Les Amis de la halle »;
//     Irène Lamothe (the teacher), Karim, Solène and Yanis (her students),
//     Agnès Morvillier, Bruno Lacaze and Claire Dutertre (the act 9
//     dossier), Inès Kerbrat and Gérard Pelletan (the act 12 dossier),
//     Nadia Chérif (the act 11 letter). Every figure in the dossiers (costs,
//     stalls, dates, survey numbers) is invented and internal to the lesson;
//     the task brief says so in so many words. Low-heat topics only (§A.8).
//
//  7. FACT CHECK LIST (for the pre-review). Every claim about the REAL world
//     made anywhere in this lesson:
//       a. School terms: « plan dialectique », « plan thématique », « plan
//          analytique », « plan comparatif », « problématique », « transition »,
//          « ouverture », « conclusion partielle », « synthèse de documents »,
//          « essai argumenté » are the usual names in French-language school
//          and university writing method. Stated as conventions.
//       b. The synthèse de documents, as taught here: one new text organised
//          by ideas (not one summary per document), the writer’s own words,
//          key words may be reused but not whole sentences, no personal
//          opinion, no idea absent from the dossier, a word range set by the
//          instructions. Stated in sheet-synthese and act 10 as the genre’s
//          rules, with « en général » / « la consigne ». No exam is named
//          (wave 4 brief: never name the DALF in learner text).
//       c. Word counting: « on compte en général comme un mot tout ce qui
//          se trouve entre deux espaces » (sheet-synthese, act 10 tapTable),
//          with « en général » and « vérifie la consigne ».
//       d. « Thèse, antithèse, synthèse » named as a common school label of
//          the dialectical plan (act 6); no attribution to any philosopher.
//       e. Letter formulas: « Veuillez agréer, Madame la Directrice,
//          l’expression de mes salutations distinguées » and « Je vous prie
//          d’agréer, Monsieur le Maire, l’expression de ma haute
//          considération » are standard French closing formulas (acts 11,
//          12). « Lettre ouverte »: a letter addressed to one person and
//          published for all to read.
//       f. Idiom « rester au milieu du gué » (row .1698): to stop halfway.
//       g. « Le dictionnaire donne un sens ; le sujet en appelle souvent
//          deux » (row .1619): a method statement, not a dictionary claim.
//     QUOTATIONS: none. Every text and every line is original.
//
//  8. LOW-HEAT TOPICS ONLY, for Paul to approve: technical progress and
//     time (act 1), leisure and free time (act 2), comfort and freedom (acts
//     3, 7, 8), adults and board games (act 4), town and country (act 5),
//     boredom (acts 6, 9, 10), a greener school yard (act 11), restoring or
//     transforming an old covered market (act 12, the task). No health
//     claim, no politics, no religion.
//
//  9. APOSTROPHES: every authored French string uses the typographic ’, so
//     the scenario never mixes ’ and ' (the app check).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.10',
  seq: 10,
  title: 'Essays and Document Synthesis',
  sub: 'Dissertation et synthèse',
  canDo: 'Can turn a subject into a real problem question by defining its terms, choose among dialectical, thematic, analytical and comparative plans from that question, link the parts with transitions that sum up and move on, conclude with an earned opening, write a synthesis of documents in their own words without opinion, and write a structured argumentative essay in a real genre from a short dossier',
  prereqUnitIds: ['b2.22', 'b2.23'],
} as const;

export const LESSON_ID = 'c1.10.l1';
export const THEME = 'discours-dexamen';
export const LEVEL = 'c1' as const;

/** ONE block, by the ledger (sub-theme « la dissertation et la synthèse »). */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in words, read from the seed units. A C1 surface is
 *  French: never a raw id on screen, always « la leçon N du B2 / C1 ».
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  const n = SEQ.get(unitId);
  if (n) return `la leçon ${n} du ${band.toUpperCase()}`;
  if (band === 'b1' || band === 'b2' || band === 'c1') throw new Error(`c1.10: ${unitId} is not in the seed`);
  return unitRef(unitId);
}

export const ACADEMIQUE_UNIT = 'b2.22';
export const ARGU_UNIT = 'b2.23';
export const REFORMULER_UNIT = 'c1.07';
export const PERSUADER_UNIT = 'c1.08';
export const EXPOSE_UNIT = 'c1.09';

export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT); // la leçon 22 du B2
export const ARGU_REF = refFr(ARGU_UNIT);             // la leçon 23 du B2
export const REFORMULER_REF = refFr(REFORMULER_UNIT); // la leçon 7 du C1
export const PERSUADER_REF = refFr(PERSUADER_UNIT);   // la leçon 8 du C1
export const EXPOSE_REF = refFr(EXPOSE_UNIT);         // la leçon 9 du C1

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B222_REFRAME } from '../b2/style-academique-corpus.ts';
export { REFRAME as B223_REFRAME } from '../b2/argumentation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE FOLD. A subject is a sheet folded on itself: the crease is the
 *  tension, two true ideas pressed against each other. Defining the terms
 *  finds the crease (act 2); the problématique names it (act 3); the plan
 *  unfolds the sheet panel by panel (acts 4 to 6); each transition is a
 *  crease between two panels (act 7); the conclusion lays the sheet flat and
 *  lifts one corner, the ouverture (act 8); a synthèse folds several sheets
 *  into one (acts 9, 10); the essay hands the unfolded sheet to someone
 *  (acts 11, 12).
 *
 *  It is NOT « find the right answer »: a tension is unfolded, not deleted;
 *  act 6 refuses the third part that averages the first two, and act 8 the
 *  conclusion that forgets one side. It is NOT « every subject is a
 *  for-and-against »: acts 4 and 5 unfold tensions with no « pour » and no
 *  « contre ».
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un sujet cache une tension : ton plan la déplie.';
export const REFRAME_EN = 'A subject hides a tension: your plan unfolds it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'La problématique, c’est la question que ton texte va trancher.',
    why: 'b2.23’s definition, owned at B2 and recapped in act 1. A yes / no question restated from the subject satisfies it and teaches nothing: act 3’s first introduction does exactly that.',
  },
  {
    text: 'Thèse, antithèse, synthèse.',
    why: 'One plan of four, and the act 6 trap: its third part invites « un peu des deux ». The word « synthèse » would also collide with the synthèse de documents of acts 9 and 10.',
  },
  {
    text: 'Une bonne introduction pose une question.',
    why: 'Too thin: a question with no tension is a restatement of the subject. False where act 3 has to hold.',
  },
  {
    text: 'Résume les documents, puis donne ton avis.',
    why: 'False twice: the synthèse forbids the opinion (act 10), and the essay is not a summary followed by a verdict (act 11).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-10-06 and, where present, from
 *  seedPlusPacks(); its French is in the trailing comment. `NOT_DECK_ABLE`
 *  and `NOT_SPEAKABLE` are COMPUTED from the drills (§F end), so they cannot
 *  drift from the rows.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DE = (n: number) => `fr.c1.discours-dexamen.${String(n).padStart(3, '0')}`;

export const IMPORTED = {
  act1: [
    'fr.b2.universite.1043',            // Annonce ton plan, puis suis-le dans l'ordre annoncé.  (b2.22, flashcard only)
    'fr.b2.opinions-et-avis.1723',      // la problématique  (b2.23)
    'fr.b2.opinions-et-avis.1726',      // Amorcer, poser la question, puis donner sa thèse ou annoncer le plan.  (b2.23, flashcard only)
    'fr.b2.opinions-et-avis.1742',      // Pour ou contre : un plan dialectique. Quels effets, quelles causes : un plan thématique.  (b2.23, flashcard only)
  ],
  act2: [
    'fr.b2.universite.1031',            // Il convient d'abord de préciser les termes du débat.  (b2.22)
    DE(122),                            // Pour amorcer la discussion, je voudrais d’abord m’arrêter sur les termes mêmes du sujet qui nous est proposé.
    DE(67),                             // Clarifions dès maintenant ce que recouvre cette expression.  (Postgres only)
    DE(98),                             // Il me paraît essentiel de distinguer d’emblée deux réalités que l’on confond souvent.  (Postgres only)
  ],
  act3: [
    'fr.b2.opinions-et-avis.1717',      // Faut-il pour autant la généraliser ?  (b2.23)
    DE(114),                            // La question posée peut sembler technique, mais elle engage en réalité des choix de société fondamentaux.  (Postgres only)
    DE(132),                            // Il serait réducteur de voir dans ce phénomène une simple question d’argent.
  ],
  act4: [
    DE(152),                            // Il importe néanmoins de distinguer les causes profondes des simples effets de mode.  (Postgres only)
  ],
  act5: [
    'fr.b2.opinions-et-avis.1745',      // Là où le premier voit un prix, le second voit un impôt.  (b2.23)
    DE(55),                             // De cette comparaison, il se dégage un enseignement précieux pour nos politiques publiques.  (Postgres only)
  ],
  act6: [
    'fr.b2.opinions-et-avis.1730',      // le plan dialectique  (b2.23)
    'fr.b2.opinions-et-avis.1731',      // le plan thématique  (b2.23)
    'fr.b2.opinions-et-avis.1732',      // La question appelle un oui ou un non : le plan dialectique s'impose.  (b2.23)
  ],
  act7: [
    'fr.b2.opinions-et-avis.1735',      // Après avoir vu les avantages, examinons maintenant les limites.  (b2.23)
    'fr.b2.universite.1036',            // Après avoir examiné les avantages, voyons à présent les limites.  (b2.22)
    DE(96),                             // Cette première observation nous conduit directement au deuxième point que je souhaite développer.  (Postgres only)
  ],
  act8: [
    'fr.b2.opinions-et-avis.1725',      // une ouverture  (b2.23)
    'fr.b2.opinions-et-avis.1727',      // La conclusion répond à la question posée, sans nouvel argument.  (b2.23, flashcard only)
    DE(50),                             // Reste une interrogation en suspens, que je laisse volontiers à votre réflexion.  (Postgres only)
    DE(36),                             // Finalement, la question reste ouverte, et c'est peut-être là sa richesse.  (Postgres only)
  ],
  act9: [
    'fr.c1.discours-dexamen.1236',      // Une synthèse dit où les documents se rejoignent, puis où ils se séparent.  (c1.09, flashcard only)
    'fr.c1.discours-dexamen.1205',      // faire dialoguer les documents  (c1.09)
    DE(48),                             // La synthèse de ces différents points fait apparaître un besoin criant de coordination.  (Postgres only)
  ],
  act10: [] as string[],
  act11: [
    'fr.c1.rhetorique.1168',            // Je réponds à l’objection la plus forte, pas à la plus facile.  (c1.08)
    'fr.c1.strategies-de-comprehension.2084', // une lettre ouverte  (c1.24)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied VERBATIM on 2026-10-06 (straight apostrophes kept: the decision 13
 *  edit happens at import), so `src()` can print them. */
export const PG_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: DE(36), fr: "Finalement, la question reste ouverte, et c'est peut-être là sa richesse.", en: 'In the end, the question remains open, and perhaps that is its richness.', drills: ['sentence', 'review'] },
  { id: DE(48), fr: 'La synthèse de ces différents points fait apparaître un besoin criant de coordination.', en: 'The synthesis of these various points reveals a glaring need for coordination.', drills: ['sentence', 'review'] },
  { id: DE(50), fr: 'Reste une interrogation en suspens, que je laisse volontiers à votre réflexion.', en: 'One question remains unresolved, which I gladly leave for you to ponder.', drills: ['sentence', 'review'] },
  { id: DE(55), fr: 'De cette comparaison, il se dégage un enseignement précieux pour nos politiques publiques.', en: 'From this comparison emerges a valuable lesson for our public policies.', drills: ['sentence', 'review'] },
  { id: DE(67), fr: 'Clarifions dès maintenant ce que recouvre cette expression.', en: 'Let us clarify right away what this expression actually covers.', drills: ['sentence', 'review'] },
  { id: DE(96), fr: 'Cette première observation nous conduit directement au deuxième point que je souhaite développer.', en: 'This first observation leads us directly to the second point I wish to develop.', drills: ['sentence', 'review'] },
  { id: DE(98), fr: 'Il me paraît essentiel de distinguer d’emblée deux réalités que l’on confond souvent.', en: 'It seems essential to me to distinguish from the outset two realities that are often confused.', drills: ['sentence', 'review'] },
  { id: DE(114), fr: 'La question posée peut sembler technique, mais elle engage en réalité des choix de société fondamentaux.', en: 'The question posed may seem technical, but it actually involves fundamental choices about society.', drills: ['sentence', 'review'] },
  { id: DE(152), fr: 'Il importe néanmoins de distinguer les causes profondes des simples effets de mode.', en: 'It is nevertheless important to distinguish deep causes from mere passing trends.', drills: ['sentence', 'review'] },
];

type DrillSrc = { id: string; drills: string[] };
const DRILLS_OF = new Map<string, string[]>([
  ...((seed as unknown as { items: DrillSrc[] }).items.map((i) => [i.id, i.drills] as [string, string[]])),
  ...PG_ROWS.map((r) => [r.id, r.drills] as [string, string[]]),
]);
function drillsOf(id: string): string[] {
  const d = DRILLS_OF.get(id);
  if (!d) throw new Error(`c1.10: imported ${id} not found in the seed or PG_ROWS`);
  return d;
}

/** No `flashcard` drill: nameable, never releasable. Computed: the nine
 *  Postgres-only legacy rows and .122, .132 (all {sentence, review}). */
export const NOT_DECK_ABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('flashcard'));

/** No `voiceflash`: never in a `practice` speak section. Computed: the rows
 *  above plus the flashcard-only rule rows (b2.22 .1043, b2.23 .1726,
 *  .1742, .1727, c1.09 .1236). */
export const NOT_SPEAKABLE: string[] = IMPORT_IDS.filter((id) => !drillsOf(id).includes('voiceflash'));

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: a line met in a copy, a
 *  question a writer asks the subject, or a line the learner can reuse in
 *  the essay. Faulty moves (the restated subject, the empty transition, the
 *  cliché ouverture, the opinion in a synthèse) are grammatical French
 *  tagged `contre-exemple` with drills ['review'] only: recognised, never
 *  produced as a model. Each act from 1 to 11 has one flashcard-only rule
 *  card (`rule()`), whose prompt is a situation and whose `fr` is the move.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];
/** Faulty moves and dialogue lines: recognised, never produced as a model. */
const RECO = ['review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['dissertation-synthese'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the situation, `fr` the move. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE SUJET QUI PIÈGE ─────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1600, 'Nous nous demanderons si le progrès technique nous fait gagner du temps.', 'We will ask whether technical progress saves us time.', '/nu nu də.mɑ̃.də.ʁɔ̃ si lə pʁɔ.ɡʁɛ tɛk.nik nu fɛ ɡa.ɲe dy tɑ̃/', 'noo noo duh-mahⁿ-duh-ROHⁿ see luh pro-greh tek-NEEK noo feh ga-NYAY dü TAHⁿ', ['scene', 'redite', 'contre-exemple'], RECO),
  sent(1601, 'Chaque machine nous fait gagner du temps : pourquoi en manquons-nous toujours ?', 'Every machine saves us time: why are we always short of it?', '/ʃak ma.ʃin nu fɛ ɡa.ɲe dy tɑ̃ puʁ.kwa ɑ̃ mɑ̃.kɔ̃.nu tu.ʒuʁ/', 'shak ma-SHEEN noo feh ga-nyay dü TAHⁿ poor-KWA ahⁿ mahⁿ-kohⁿ-NOO too-ZHOOR', ['scene', 'tension']),
  sent(1602, 'Recopier le sujet sous forme de question, ce n’est pas poser une problématique.', 'Copying the subject out as a question is not setting a problem question.', '/ʁə.kɔ.pje lə sy.ʒɛ su fɔʁm də kɛs.tjɔ̃ sə nɛ pa po.ze yn pʁɔ.ble.ma.tik/', 'ruh-ko-PYAY luh sü-ZHEH soo form duh kes-TYOHⁿ suh neh pa poh-zay ün pro-blay-ma-TEEK', ['regle'], FCVDR),
  sent(1603, 'Où le sujet résiste-t-il ?', 'Where does the subject push back?', '/u lə sy.ʒɛ ʁe.zis.tə.til/', 'oo luh sü-zheh ray-zees-tuh-TEEL', ['question']),
  sent(1604, REFRAME, REFRAME_EN, '/œ̃ sy.ʒɛ kaʃ yn tɑ̃.sjɔ̃ tɔ̃ plɑ̃ la de.pli/', 'uhⁿ sü-ZHEH kash ün tahⁿ-SYOHⁿ tohⁿ PLAHⁿ la day-PLEE', ['regle', 'reframe'], FC,
    rule('Le sujet est donné. Que cherches-tu avant de faire ton plan ?', 'La tension qu’il cache : deux idées vraies qui se heurtent. Un sujet cache une tension : ton plan la déplie.')),
  phrase(1605, 'la tension d’un sujet', 'the tension in a subject, the two true ideas that clash in it', '/la tɑ̃.sjɔ̃ dœ̃ sy.ʒɛ/', 'la tahⁿ-syohⁿ duhⁿ sü-ZHEH', ['mot', 'tension']),
  sent(1606, 'Chaque outil fait gagner du temps, et nous en manquons de plus en plus.', 'Every tool saves time, and we are shorter and shorter of it.', '/ʃak u.ti fɛ ɡa.ɲe dy tɑ̃ e nu.zɑ̃ mɑ̃.kɔ̃ də ply.zɑ̃ ply/', 'shak oo-TEE feh ga-nyay dü TAHⁿ ay noo-zahⁿ mahⁿ-KOHⁿ duh plü-zahⁿ PLÜ', ['tension']),
  phrase(1607, 'un essai argumenté', 'an argumentative essay, written for a reader in a real genre', '/œ̃.nɛ.sɛ aʁ.ɡy.mɑ̃.te/', 'uhⁿ-neh-SEH ar-gü-mahⁿ-TAY', ['mot', 'essai']),
  phrase(1608, 'une synthèse de documents', 'a synthesis of documents, one new text that reports a dossier', '/yn sɛ̃.tɛz də dɔ.ky.mɑ̃/', 'ün sehⁿ-TEZ duh do-kü-MAHⁿ', ['mot', 'synthese']),
  sent(1609, 'Une dissertation répond à une question ; une synthèse rend compte de documents.', 'An essay answers a question; a synthesis reports on documents.', '/yn di.sɛʁ.ta.sjɔ̃ ʁe.pɔ̃ a yn kɛs.tjɔ̃ yn sɛ̃.tɛz ʁɑ̃ kɔ̃t də dɔ.ky.mɑ̃/', 'ün dee-sehr-ta-SYOHⁿ ray-POHⁿ a ün kes-TYOHⁿ ün sehⁿ-TEZ rahⁿ KOHⁿT duh do-kü-MAHⁿ', ['distinction'], FCVDR),
  sent(1610, 'Avant d’écrire, je cherche ce qui, dans le sujet, fait problème.', 'Before writing, I look for what, in the subject, is a problem.', '/a.vɑ̃ de.kʁiʁ ʒə ʃɛʁʃ sə ki dɑ̃ lə sy.ʒɛ fɛ pʁɔ.blɛm/', 'a-vahⁿ day-KREER zhuh SHEHRSH suh KEE dahⁿ luh sü-ZHEH feh pro-BLEMM', ['methode']),
  sent(1611, 'Une introduction qui recopie le sujet n’apprend rien au lecteur.', 'An introduction that copies out the subject teaches the reader nothing.', '/y.nɛ̃.tʁɔ.dyk.sjɔ̃ ki ʁə.kɔ.pi lə sy.ʒɛ na.pʁɑ̃ ʁjɛ̃ o lɛk.tœʁ/', 'ü-nehⁿ-tro-dük-SYOHⁿ kee ruh-ko-PEE luh sü-ZHEH na-PRAHⁿ ryehⁿ oh lek-TUHR', ['regle']),
];

/* ── ACT 2 · LES TERMES DU SUJET ─────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1612, 'Définir les termes, c’est déjà commencer à répondre.', 'Defining the terms is already starting to answer.', '/de.fi.niʁ le tɛʁm sɛ de.ʒa kɔ.mɑ̃.se a ʁe.pɔ̃dʁ/', 'day-fee-NEER lay TEHRM seh day-ZHA ko-mahⁿ-SAY a ray-POHⁿDR', ['regle', 'termes'], FCVDR),
  sent(1613, 'Que veut dire « libre » dans ce sujet ?', 'What does “free” mean in this subject?', '/kə vø diʁ libʁ dɑ̃ sə sy.ʒɛ/', 'kuh veu DEER LEEBR dahⁿ suh sü-ZHEH', ['question', 'termes']),
  sent(1614, 'Le mot « encore » suppose que quelque chose a changé.', 'The word “still” assumes that something has changed.', '/lə mo ɑ̃.kɔʁ sy.poz kə kɛl.kə ʃoz a ʃɑ̃.ʒe/', 'luh MOH ahⁿ-KOR sü-POHZ kuh kel-kuh SHOHZ a shahⁿ-ZHAY', ['petit-mot', 'termes'], FCVDR),
  sent(1615, 'Un loisir est ce qu’on choisit de faire quand on ne doit rien faire.', 'A leisure activity is what you choose to do when you have nothing you must do.', '/œ̃ lwa.ziʁ ɛ sə kɔ̃ ʃwa.zi də fɛʁ kɑ̃.tɔ̃ nə dwa ʁjɛ̃ fɛʁ/', 'uhⁿ lwa-ZEER eh suh kohⁿ shwa-ZEE duh FEHR kahⁿ-tohⁿ nuh dwa ryehⁿ FEHR', ['definition']),
  sent(1616, 'Le temps libre se définit d’abord par ce qu’il n’est pas : le travail.', 'Free time is defined first by what it is not: work.', '/lə tɑ̃ libʁ sə de.fi.ni da.bɔʁ paʁ sə kil nɛ pa lə tʁa.vaj/', 'luh tahⁿ LEEBR suh day-fee-NEE da-BOR par suh keel neh PA luh tra-VAHY', ['definition']),
  sent(1617, 'Un loisir organisé, payé et réservé est-il encore libre ?', 'Is an organised, paid-for, booked leisure activity still free?', '/œ̃ lwa.ziʁ ɔʁ.ɡa.ni.ze pe.je e ʁe.zɛʁ.ve ɛ.til ɑ̃.kɔʁ libʁ/', 'uhⁿ lwa-ZEER or-ga-nee-ZAY pay-YAY ay ray-zehr-VAY eh-teel ahⁿ-kor LEEBR', ['question', 'tension']),
  sent(1618, 'Définis chaque mot du sujet, puis regarde où les définitions se heurtent.', 'Define every word of the subject, then look at where the definitions clash.', '/de.fi.ni ʃak mo dy sy.ʒɛ pɥi ʁə.ɡaʁd u le de.fi.ni.sjɔ̃ sə œʁt/', 'day-fee-NEE shak MOH dü sü-ZHEH pwee ruh-GARD oo lay day-fee-nee-SYOHⁿ suh UHRT', ['regle', 'termes'], FC,
    rule('Tu as le sujet sous les yeux. Par quoi commences-tu ?', 'Par définir chaque mot, y compris les petits : « encore », « seulement », « faut-il ». Là où deux définitions se heurtent, tu tiens ta tension.')),
  sent(1619, 'Le dictionnaire donne un sens ; le sujet en appelle souvent deux.', 'The dictionary gives one meaning; the subject often calls for two.', '/lə dik.sjɔ.nɛʁ dɔn œ̃ sɑ̃s lə sy.ʒɛ ɑ̃.na.pɛl su.vɑ̃ dø/', 'luh deek-syo-NEHR donn uhⁿ SAHⁿSS luh sü-ZHEH ahⁿ-na-PEL soo-vahⁿ DEU', ['regle', 'termes']),
  sent(1620, 'Ne remplace pas le sujet par un sujet voisin, plus facile.', 'Do not swap the subject for a neighbouring, easier one.', '/nə ʁɑ̃.plas pa lə sy.ʒɛ paʁ œ̃ sy.ʒɛ vwa.zɛ̃ ply fa.sil/', 'nuh rahⁿ-PLASS pa luh sü-ZHEH par uhⁿ sü-zheh vwa-ZEHⁿ plü fa-SEEL', ['hors-sujet'], FCVDR),
  sent(1621, '« Les loisirs », c’est trop large : je parle des loisirs du quotidien.', '“Leisure” is too broad: I am talking about everyday leisure.', '/le lwa.ziʁ sɛ tʁo laʁʒ ʒə paʁl de lwa.ziʁ dy kɔ.ti.djɛ̃/', 'lay lwa-ZEER seh troh LARZH zhuh PARL day lwa-zeer dü ko-tee-DYEHⁿ', ['delimiter']),
  phrase(1622, 'délimiter le sujet', 'to set the limits of the subject', '/de.li.mi.te lə sy.ʒɛ/', 'day-lee-mee-tay luh sü-ZHEH', ['mot', 'delimiter']),
  phrase(1623, 'les termes du sujet', 'the key words of the subject', '/le tɛʁm dy sy.ʒɛ/', 'lay TEHRM dü sü-ZHEH', ['mot', 'termes']),
  sent(1624, 'Depuis toujours, les hommes aiment se divertir.', 'People have always liked to be entertained.', '/də.pɥi tu.ʒuʁ le.zɔm ɛm sə di.vɛʁ.tiʁ/', 'duh-pwee too-ZHOOR lay-ZOMM emm suh dee-vehr-TEER', ['amorce', 'cliche', 'contre-exemple'], RECO),
  sent(1625, 'Je retiens le sens qui fait apparaître la difficulté.', 'I keep the meaning that brings out the difficulty.', '/ʒə ʁə.tjɛ̃ lə sɑ̃s ki fɛ a.pa.ʁɛtʁ la di.fi.kyl.te/', 'zhuh ruh-TYEHⁿ luh SAHⁿSS kee feh a-pa-REHTR la dee-fee-kül-TAY', ['methode', 'termes']),
];

/* ── ACT 3 · LA TENSION ──────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  phrase(1626, 'une tension', 'a tension, two ideas pulling against each other', '/yn tɑ̃.sjɔ̃/', 'ün tahⁿ-SYOHⁿ', ['mot', 'tension']),
  phrase(1627, 'un paradoxe', 'a paradox, something that seems to contradict itself and is true', '/œ̃ pa.ʁa.dɔks/', 'uhⁿ pa-ra-DOKS', ['mot', 'paradoxe']),
  sent(1628, 'Ce qui devait nous libérer finit par nous attacher.', 'What was meant to free us ends up tying us down.', '/sə ki də.vɛ nu li.be.ʁe fi.ni paʁ nu.za.ta.ʃe/', 'suh kee duh-VEH noo lee-bay-RAY fee-NEE par noo-za-ta-SHAY', ['paradoxe'], FCVDR),
  sent(1629, 'Une problématique met face à face deux idées vraies toutes les deux.', 'A problem question puts face to face two ideas that are both true.', '/yn pʁɔ.ble.ma.tik mɛ fas a fas dø.zi.de vʁɛ tut le dø/', 'ün pro-blay-ma-TEEK meh fass a FASS deu-zee-day VREH toot lay DEU', ['regle', 'tension'], FCVDR),
  sent(1630, 'Comment le confort, qui nous libère de l’effort, peut-il nous rendre dépendants ?', 'How can comfort, which frees us from effort, make us dependent?', '/kɔ.mɑ̃ lə kɔ̃.fɔʁ ki nu li.bɛʁ də le.fɔʁ pø.til nu ʁɑ̃dʁ de.pɑ̃.dɑ̃/', 'ko-MAHⁿ luh kohⁿ-FOR kee noo lee-BEHR duh lay-FOR peu-teel noo rahⁿdr day-pahⁿ-DAHⁿ', ['problematique', 'paradoxe']),
  sent(1631, 'Dans quelle mesure peut-on profiter du confort sans y perdre sa liberté ?', 'To what extent can one enjoy comfort without losing one’s freedom to it?', '/dɑ̃ kɛl mə.zyʁ pø.tɔ̃ pʁɔ.fi.te dy kɔ̃.fɔʁ sɑ̃.zi pɛʁdʁ sa li.bɛʁ.te/', 'dahⁿ kel muh-ZÜR peu-TOHⁿ pro-fee-tay dü kohⁿ-FOR sahⁿ-zee pehrdr sa lee-behr-TAY', ['problematique']),
  sent(1632, 'Une problématique est une tension, ni un thème ni un problème.', 'A problem question is a tension, neither a theme nor a problem.', '/yn pʁɔ.ble.ma.tik ɛ.tyn tɑ̃.sjɔ̃ ni œ̃ tɛm ni œ̃ pʁɔ.blɛm/', 'ün pro-blay-ma-TEEK eh-tün tahⁿ-SYOHⁿ nee uhⁿ TEMM nee uhⁿ pro-BLEMM', ['regle', 'problematique'], FC,
    rule('« La problématique du confort » : est-ce une problématique ?', 'Non, c’est un thème. Une problématique est une tension entre deux idées vraies, formulée en question.')),
  sent(1633, 'Le confort est-il une bonne ou une mauvaise chose ?', 'Is comfort a good or a bad thing?', '/lə kɔ̃.fɔʁ ɛ.til yn bɔn u yn mo.vɛz ʃoz/', 'luh kohⁿ-FOR eh-TEEL ün BONN oo ün moh-vez SHOHZ', ['oui-non', 'contre-exemple'], RECO),
  sent(1634, 'Nous allons étudier la problématique du confort.', 'We are going to study the issue of comfort.', '/nu.za.lɔ̃.ze.ty.dje la pʁɔ.ble.ma.tik dy kɔ̃.fɔʁ/', 'noo-za-lohⁿ-zay-tü-DYAY la pro-blay-ma-TEEK dü kohⁿ-FOR', ['theme', 'contre-exemple'], RECO),
  sent(1635, 'Le confort pose de nombreux problèmes dans notre société.', 'Comfort raises many problems in our society.', '/lə kɔ̃.fɔʁ poz də nɔ̃.bʁø pʁɔ.blɛm dɑ̃ nɔtʁ so.sje.te/', 'luh kohⁿ-FOR pohz duh nohⁿ-BREU pro-BLEMM dahⁿ notr so-syay-TAY', ['vague', 'contre-exemple'], RECO),
  sent(1636, 'Le confort nous libère du froid, de la faim et de la fatigue.', 'Comfort frees us from cold, hunger and tiredness.', '/lə kɔ̃.fɔʁ nu li.bɛʁ dy fʁwa də la fɛ̃ e də la fa.tiɡ/', 'luh kohⁿ-FOR noo lee-BEHR dü FRWA duh la FEHⁿ ay duh la fa-TEEG', ['pole']),
  sent(1637, 'Mais on ne sait plus se passer de ce qui nous libère.', 'But we no longer know how to do without what frees us.', '/mɛ ɔ̃ nə sɛ ply sə pa.se də sə ki nu li.bɛʁ/', 'meh ohⁿ nuh seh PLÜ suh pa-SAY duh suh kee noo lee-BEHR', ['pole']),
  sent(1638, 'Sans tension, la question n’a plus besoin d’un essai.', 'Without a tension, the question no longer needs an essay.', '/sɑ̃ tɑ̃.sjɔ̃ la kɛs.tjɔ̃ na ply bə.zwɛ̃ dœ̃.nɛ.sɛ/', 'sahⁿ tahⁿ-SYOHⁿ la kes-TYOHⁿ na plü buh-ZWEHⁿ duhⁿ-neh-SEH', ['regle']),
  sent(1639, 'Ma question doit pouvoir recevoir deux réponses sérieuses.', 'My question must be able to receive two serious answers.', '/ma kɛs.tjɔ̃ dwa pu.vwaʁ ʁə.sə.vwaʁ dø ʁe.pɔ̃s se.ʁjøz/', 'ma kes-TYOHⁿ dwa poo-VWAR ruh-suh-VWAR deu ray-POHⁿSS say-RYEUZ', ['test'], FCVDR),
  phrase(1640, 'formuler une problématique', 'to word a problem question', '/fɔʁ.my.le yn pʁɔ.ble.ma.tik/', 'for-mü-LAY ün pro-blay-ma-TEEK', ['mot', 'problematique']),
];

/* ── ACT 4 · LE PLAN ANALYTIQUE ──────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  phrase(1641, 'le plan analytique', 'the analytical plan: the facts, their causes, what is at stake', '/lə plɑ̃ a.na.li.tik/', 'luh plahⁿ a-na-lee-TEEK', ['mot', 'analytique']),
  sent(1642, 'Le constat d’abord, les causes ensuite, les enjeux enfin.', 'The facts first, the causes next, what is at stake last.', '/lə kɔ̃s.ta da.bɔʁ le koz ɑ̃.sɥit le.zɑ̃.ʒø ɑ̃.fɛ̃/', 'luh kohⁿs-TA da-BOR lay KOHZ ahⁿ-SWEET lay-zahⁿ-ZHEU ahⁿ-FEHⁿ', ['regle', 'analytique'], FCVDR),
  sent(1643, 'Le plan analytique explique un phénomène avant de le juger.', 'The analytical plan explains a phenomenon before judging it.', '/lə plɑ̃ a.na.li.tik ɛk.splik œ̃ fe.nɔ.mɛn a.vɑ̃ də lə ʒy.ʒe/', 'luh plahⁿ a-na-lee-TEEK ek-SPLEEK uhⁿ fay-no-MENN a-vahⁿ duh luh zhü-ZHAY', ['regle', 'analytique'], FC,
    rule('Le sujet demande « pourquoi » ou « comment l’expliquer ». Quel plan ?', 'Un plan analytique : le constat, puis les causes, de la plus visible à la plus profonde, puis les enjeux. Il explique avant de juger.')),
  sent(1644, 'Le bar à jeux de la rue Haute affiche complet trois soirs par semaine.', 'The board-game bar on rue Haute is fully booked three evenings a week.', '/lə baʁ a ʒø də la ʁy ot a.fiʃ kɔ̃.plɛ tʁwa swaʁ paʁ sə.mɛn/', 'luh BAR a ZHEU duh la rü OHT a-FEESH kohⁿ-PLEH trwa SWAR par suh-MENN', ['constat']),
  sent(1645, 'Le jeu de société offre ce que l’écran retire : des visages autour d’une table.', 'A board game offers what the screen takes away: faces around a table.', '/lə ʒø də sɔ.sje.te ɔfʁ sə kə le.kʁɑ̃ ʁə.tiʁ de vi.zaʒ o.tuʁ dyn tabl/', 'luh zheu duh so-syay-TAY OFR suh kuh lay-KRAHⁿ ruh-TEER day vee-ZAZH oh-toor dün TABL', ['cause']),
  sent(1646, 'Une partie a des règles claires, un début et une fin.', 'A game has clear rules, a beginning and an end.', '/yn paʁ.ti a de ʁɛɡl klɛʁ œ̃ de.by e yn fɛ̃/', 'ün par-TEE a day regl KLEHR uhⁿ day-BÜ ay ün FEHⁿ', ['cause']),
  sent(1647, 'Les causes ne se valent pas : je commence par la plus visible.', 'The causes are not equal: I start with the most visible one.', '/le koz nə sə val pa ʒə kɔ.mɑ̃s paʁ la ply vi.zibl/', 'lay KOHZ nuh suh val PA zhuh ko-MAHⁿSS par la plü vee-ZEEBL', ['hierarchie'], FCVDR),
  sent(1648, 'Ce retour révèle un besoin de lien plus qu’un goût du jeu.', 'This return reveals a need for connection more than a taste for play.', '/sə ʁə.tuʁ ʁe.vɛl œ̃ bə.zwɛ̃ də ljɛ̃ ply.kœ̃ ɡu dy ʒø/', 'suh ruh-TOOR ray-VEL uhⁿ buh-ZWEHⁿ duh LYEHⁿ plü-kuhⁿ goo dü ZHEU', ['enjeu']),
  sent(1649, 'Les jeux sont amusants, les jeux sont anciens, les jeux sont variés.', 'Games are fun, games are old, games are varied.', '/le ʒø sɔ̃.ta.my.zɑ̃ le ʒø sɔ̃.tɑ̃.sjɛ̃ le ʒø sɔ̃ va.ʁje/', 'lay ZHEU sohⁿ-ta-mü-ZAHⁿ lay ZHEU sohⁿ-tahⁿ-SYEHⁿ lay ZHEU sohⁿ va-RYAY', ['catalogue', 'contre-exemple'], RECO),
  phrase(1650, 'expliquer un phénomène', 'to explain a phenomenon, something observed that calls for an explanation', '/ɛk.spli.ke œ̃ fe.nɔ.mɛn/', 'ek-splee-kay uhⁿ fay-no-MENN', ['mot', 'analytique']),
  phrase(1651, 'les causes profondes', 'the deep causes', '/le koz pʁɔ.fɔ̃d/', 'lay kohz pro-FOHⁿD', ['mot', 'analytique']),
  sent(1652, 'Je range les causes de la plus visible à la plus profonde.', 'I order the causes from the most visible to the deepest.', '/ʒə ʁɑ̃ʒ le koz də la ply vi.zibl a la ply pʁɔ.fɔ̃d/', 'zhuh RAHⁿZH lay KOHZ duh la plü vee-ZEEBL a la plü pro-FOHⁿD', ['methode', 'hierarchie'], FCVDR),
  sent(1653, 'L’analyse dit pourquoi ; elle ne dit pas encore s’il faut s’en réjouir.', 'The analysis says why; it does not yet say whether one should be glad of it.', '/la.na.liz di puʁ.kwa ɛl nə di pa.zɑ̃.kɔʁ sil fo sɑ̃ ʁe.ʒwiʁ/', 'la-na-LEEZ dee poor-KWA el nuh dee pa-zahⁿ-KOR seel foh sahⁿ ray-ZHWEER', ['regle']),
  sent(1654, 'Il ne suffit pas d’aligner des causes, il faut les relier.', 'It is not enough to line up causes, you have to link them.', '/il nə sy.fi pa da.li.ɲe de koz il fo le ʁə.lje/', 'eel nuh sü-FEE pa da-lee-NYAY day KOHZ eel foh lay ruh-LYAY', ['regle', 'hierarchie']),
];

/* ── ACT 5 · LE PLAN COMPARATIF ──────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  phrase(1655, 'le plan comparatif', 'the comparative plan: two realities set against the same criteria', '/lə plɑ̃ kɔ̃.pa.ʁa.tif/', 'luh plahⁿ kohⁿ-pa-ra-TEEF', ['mot', 'comparatif']),
  sent(1656, 'Je compare critère par critère, jamais un bloc puis l’autre.', 'I compare criterion by criterion, never one block then the other.', '/ʒə kɔ̃.paʁ kʁi.tɛʁ paʁ kʁi.tɛʁ ʒa.mɛ œ̃ blɔk pɥi lotʁ/', 'zhuh kohⁿ-PAR kree-TEHR par kree-TEHR zha-MEH uhⁿ BLOK pwee LOHTR', ['regle', 'comparatif'], FCVDR),
  sent(1657, 'Le plan comparatif confronte deux réalités sur les mêmes critères.', 'The comparative plan sets two realities against the same criteria.', '/lə plɑ̃ kɔ̃.pa.ʁa.tif kɔ̃.fʁɔ̃t dø ʁe.a.li.te syʁ le mɛm kʁi.tɛʁ/', 'luh plahⁿ kohⁿ-pa-ra-TEEF kohⁿ-FROHⁿT deu ray-a-lee-TAY sür lay memm kree-TEHR', ['regle', 'comparatif'], FC,
    rule('Le sujet met deux réalités face à face. Comment organiser l’essai ?', 'Critère par critère : le temps, l’espace, les liens. Un bloc sur la ville puis un bloc sur la campagne ne compare rien.')),
  sent(1658, 'À la ville comme à la campagne, on cherche du temps pour soi.', 'In town as in the country, people look for time for themselves.', '/a la vil kɔm a la kɑ̃.paɲ ɔ̃ ʃɛʁʃ dy tɑ̃ puʁ swa/', 'a la VEEL komm a la kahⁿ-PANY ohⁿ SHEHRSH dü tahⁿ poor SWA', ['ressemblance']),
  sent(1659, 'À la différence du citadin, le rural gagne de l’espace et perd du temps sur la route.', 'Unlike the town dweller, the country dweller gains space and loses time on the road.', '/a la di.fe.ʁɑ̃s dy si.ta.dɛ̃ lə ʁy.ʁal ɡaɲ də lɛs.pas e pɛʁ dy tɑ̃ syʁ la ʁut/', 'a la dee-fay-RAHⁿSS dü see-ta-DEHⁿ luh rü-RAL GANY duh les-PASS ay pehr dü TAHⁿ sür la ROOT', ['difference']),
  sent(1660, 'À l’instar de la ville, la campagne a ses embouteillages : ceux du matin vers la gare.', 'Like the town, the country has its traffic jams: the morning ones towards the station.', '/a lɛ̃s.taʁ də la vil la kɑ̃.paɲ a se.zɑ̃.bu.tɛ.jaʒ sø dy ma.tɛ̃ vɛʁ la ɡaʁ/', 'a lehⁿs-TAR duh la VEEL la kahⁿ-PANY a say-zahⁿ-boo-teh-YAZH seu dü ma-TEHⁿ vehr la GAR', ['ressemblance', 'instar']),
  sent(1661, 'Autant la ville rapproche les gens, autant elle les presse.', 'The town brings people together as much as it rushes them.', '/o.tɑ̃ la vil ʁa.pʁɔʃ le ʒɑ̃ o.tɑ̃ ɛl le pʁɛs/', 'oh-tahⁿ la VEEL ra-PROSH lay ZHAHⁿ oh-tahⁿ el lay PRESS', ['autant'], FCVDR),
  sent(1662, 'Au même titre que le jardin, la place du village est un espace partagé.', 'Just as the garden is, the village square is a shared space.', '/o mɛm titʁ kə lə ʒaʁ.dɛ̃ la plas dy vi.laʒ ɛ.tœ̃.nɛs.pas paʁ.ta.ʒe/', 'oh memm TEETR kuh luh zhar-DEHⁿ la plass dü vee-LAZH eh-tuhⁿ-nes-PASS par-ta-ZHAY', ['ressemblance', 'meme-titre']),
  phrase(1663, 'un critère de comparaison', 'a criterion of comparison', '/œ̃ kʁi.tɛʁ də kɔ̃.pa.ʁɛ.zɔ̃/', 'uhⁿ kree-TEHR duh kohⁿ-pa-reh-ZOHⁿ', ['mot', 'comparatif']),
  sent(1664, 'Première partie, la ville ; deuxième partie, la campagne.', 'Part one, the town; part two, the country.', '/pʁə.mjɛʁ paʁ.ti la vil dø.zjɛm paʁ.ti la kɑ̃.paɲ/', 'pruh-myehr par-TEE la VEEL deu-zyemm par-TEE la kahⁿ-PANY', ['bloc', 'contre-exemple'], RECO),
  sent(1665, 'Les ressemblances d’abord, puis la différence qui décide.', 'The similarities first, then the difference that decides.', '/le ʁə.sɑ̃.blɑ̃s da.bɔʁ pɥi la di.fe.ʁɑ̃s ki de.sid/', 'lay ruh-sahⁿ-BLAHⁿSS da-BOR pwee la dee-fay-RAHⁿSS kee day-SEED', ['methode', 'comparatif']),
  sent(1666, 'Comparer, c’est chercher le point où deux réalités se séparent vraiment.', 'Comparing is looking for the point where two realities truly part.', '/kɔ̃.pa.ʁe sɛ ʃɛʁ.ʃe lə pwɛ̃ u dø ʁe.a.li.te sə se.paʁ vʁɛ.mɑ̃/', 'kohⁿ-pa-RAY seh shehr-SHAY luh PWEHⁿ oo deu ray-a-lee-TAY suh say-PAR vreh-MAHⁿ', ['regle', 'comparatif']),
  phrase(1667, 'à l’instar de', 'like, following the example of (formal)', '/a lɛ̃s.taʁ də/', 'a lehⁿs-TAR duh', ['mot', 'instar']),
  phrase(1668, 'au même titre que', 'in the same way as, just as much as (formal)', '/o mɛm titʁ kə/', 'oh memm TEETR kuh', ['mot', 'meme-titre']),
];

/* ── ACT 6 · CHOISIR LE PLAN ─────────────────────────────────────────────── *
 *  .1669-.1680 are the lines of the one-take listening (act 6 anchor): a
 *  tutorial at the Maison des savoirs. Dialogue lines carry ['review'] only,
 *  except the teacher's three rule lines.                                  */

export const ACT6_ROWS: Row[] = [
  sent(1669, 'Le sujet du jour : faut-il avoir peur de l’ennui ? Karim, je t’écoute.', 'Today’s subject: should we be afraid of boredom? Karim, I’m listening.', '/lə sy.ʒɛ dy ʒuʁ fo.til a.vwaʁ pœʁ də lɑ̃.nɥi kaʁim ʒə te.kut/', 'luh sü-zheh dü ZHOOR foh-teel a-vwar PUHR duh lahⁿ-NWEE ka-REEM zhuh tay-KOOT', ['ecoute'], RECO),
  sent(1670, 'Je pars sur un plan dialectique : oui, il faut en avoir peur ; non, il ne faut pas.', 'I’m going for a dialectical plan: yes, we should be afraid of it; no, we shouldn’t.', '/ʒə paʁ syʁ œ̃ plɑ̃ dja.lɛk.tik wi il fo ɑ̃.na.vwaʁ pœʁ nɔ̃ il nə fo pa/', 'zhuh PAR sür uhⁿ plahⁿ dya-lek-TEEK WEE eel foh ahⁿ-na-vwar PUHR NOHⁿ eel nuh foh PA', ['ecoute'], RECO),
  sent(1671, 'Et ta troisième partie ?', 'And your third part?', '/e ta tʁwa.zjɛm paʁ.ti/', 'ay ta trwa-zyemm par-TEE', ['ecoute'], RECO),
  sent(1672, 'Un peu des deux, ça dépend des gens.', 'A bit of both, it depends on the person.', '/œ̃ pø de dø sa de.pɑ̃ de ʒɑ̃/', 'uhⁿ peu day DEU sa day-PAHⁿ day ZHAHⁿ', ['ecoute', 'compromis', 'contre-exemple'], RECO),
  sent(1673, 'Alors tu n’as pas de tension, tu as un compromis. Solène ?', 'Then you have no tension, you have a compromise. Solène?', '/a.lɔʁ ty na pa də tɑ̃.sjɔ̃ ty a œ̃ kɔ̃.pʁɔ.mi sɔ.lɛn/', 'a-lor tü na pa duh tahⁿ-SYOHⁿ tü a uhⁿ kohⁿ-pro-MEE so-LENN', ['ecoute'], RECO),
  sent(1674, 'Moi, je me demande pourquoi l’ennui fait si peur aujourd’hui.', 'Me, I wonder why boredom is so frightening today.', '/mwa ʒə mə də.mɑ̃d puʁ.kwa lɑ̃.nɥi fɛ si pœʁ o.ʒuʁ.dɥi/', 'MWA zhuh muh duh-MAHⁿD poor-kwa lahⁿ-NWEE feh see PUHR oh-zhoor-DWEE', ['ecoute'], RECO),
  sent(1675, 'Une question en « pourquoi » : un plan analytique, avec le constat, les causes, les enjeux.', 'A “why” question: an analytical plan, with the facts, the causes, the stakes.', '/yn kɛs.tjɔ̃ ɑ̃ puʁ.kwa œ̃ plɑ̃ a.na.li.tik a.vɛk lə kɔ̃s.ta le koz le.zɑ̃.ʒø/', 'ün kes-TYOHⁿ ahⁿ poor-KWA uhⁿ plahⁿ a-na-lee-TEEK a-vek luh kohⁿs-TA lay KOHZ lay-zahⁿ-ZHEU', ['ecoute'], RECO),
  sent(1676, 'Et si on disait : l’ennui nous pèse, et pourtant c’est souvent de lui que naissent les idées ?', 'And what if we said: boredom weighs on us, and yet it is often where ideas are born?', '/e si ɔ̃ di.zɛ lɑ̃.nɥi nu pɛz e puʁ.tɑ̃ sɛ su.vɑ̃ də lɥi kə nɛs le.zi.de/', 'ay see ohⁿ dee-ZEH lahⁿ-NWEE noo PEZ ay poor-TAHⁿ seh soo-VAHⁿ duh LWEE kuh ness lay-zee-DAY', ['ecoute', 'paradoxe'], RECO),
  sent(1677, 'Là, tu tiens un paradoxe : ton plan doit le déplier, pas le couper en deux.', 'Now you have a paradox: your plan must unfold it, not cut it in two.', '/la ty tjɛ̃.zœ̃ pa.ʁa.dɔks tɔ̃ plɑ̃ dwa lə de.pli.je pa lə ku.pe ɑ̃ dø/', 'LA tü tyehⁿ-zuhⁿ pa-ra-DOKS tohⁿ PLAHⁿ dwa luh day-plee-YAY pa luh koo-pay ahⁿ DEU', ['ecoute', 'paradoxe']),
  sent(1678, 'Donc d’abord ce que l’ennui coûte, puis ce qu’il produit, puis à quelles conditions ?', 'So first what boredom costs, then what it produces, then under what conditions?', '/dɔ̃k da.bɔʁ sə kə lɑ̃.nɥi kut pɥi sə kil pʁɔ.dɥi pɥi a kɛl kɔ̃.di.sjɔ̃/', 'dohⁿk da-BOR suh kuh lahⁿ-NWEE KOOT pwee suh keel pro-DWEE pwee a kel kohⁿ-dee-SYOHⁿ', ['ecoute'], RECO),
  sent(1679, 'Oui : ta troisième partie dépasse les deux premières au lieu de faire la moyenne.', 'Yes: your third part goes beyond the first two instead of averaging them.', '/wi ta tʁwa.zjɛm paʁ.ti de.pas le dø pʁə.mjɛʁ o ljø də fɛʁ la mwa.jɛn/', 'WEE ta trwa-zyemm par-TEE day-PASS lay deu pruh-MYEHR oh lyeu duh fehr la mwa-YENN', ['ecoute', 'depassement']),
  sent(1680, 'Retenez-le : ce n’est pas le sujet qui choisit le plan, c’est votre problématique.', 'Remember it: it is not the subject that chooses the plan, it is your problem question.', '/ʁə.tə.ne.lə sə nɛ pa lə sy.ʒɛ ki ʃwa.zi lə plɑ̃ sɛ vɔtʁ pʁɔ.ble.ma.tik/', 'ruh-tuh-NAY-luh suh neh pa luh sü-ZHEH kee shwa-zee luh PLAHⁿ seh votr pro-blay-ma-TEEK', ['ecoute', 'regle']),
  sent(1681, 'Ce n’est pas le sujet qui choisit le plan, c’est la problématique.', 'It is not the subject that chooses the plan, it is the problem question.', '/sə nɛ pa lə sy.ʒɛ ki ʃwa.zi lə plɑ̃ sɛ la pʁɔ.ble.ma.tik/', 'suh neh pa luh sü-ZHEH kee shwa-zee luh PLAHⁿ seh la pro-blay-ma-TEEK', ['regle', 'choix'], FC,
    rule('Le sujet commence par « faut-il ». Le plan dialectique s’impose-t-il ?', 'Pas forcément. Regarde ta problématique : une tension à déplier, une cause à expliquer, deux réalités à comparer. C’est elle qui choisit le plan.')),
  sent(1682, 'La troisième partie dépasse les deux premières ; elle ne les coupe pas en deux.', 'The third part goes beyond the first two; it does not cut them in half.', '/la tʁwa.zjɛm paʁ.ti de.pas le dø pʁə.mjɛʁ ɛl nə le kup pa.zɑ̃ dø/', 'la trwa-zyemm par-TEE day-PASS lay deu pruh-MYEHR el nuh lay KOOP pa-zahⁿ DEU', ['depassement'], FCVDR),
  phrase(1683, 'dépasser une opposition', 'to go beyond an opposition', '/de.pa.se y.nɔ.po.zi.sjɔ̃/', 'day-pa-SAY ü-no-poh-zee-SYOHⁿ', ['mot', 'depassement']),
  sent(1684, 'Chaque partie doit répondre, à sa manière, à la problématique.', 'Each part must answer the problem question, in its own way.', '/ʃak paʁ.ti dwa ʁe.pɔ̃dʁ a sa ma.njɛʁ a la pʁɔ.ble.ma.tik/', 'shak par-TEE dwa ray-POHⁿDR a sa ma-NYEHR a la pro-blay-ma-TEEK', ['test', 'choix'], FCVDR),
  sent(1685, 'Thèse, antithèse, synthèse : et la synthèse dit « un peu des deux ».', 'Thesis, antithesis, synthesis: and the synthesis says “a bit of both”.', '/tɛz ɑ̃.ti.tɛz sɛ̃.tɛz e la sɛ̃.tɛz di œ̃ pø de dø/', 'TEZ ahⁿ-tee-TEZ sehⁿ-TEZ ay la sehⁿ-TEZ dee uhⁿ peu day DEU', ['compromis', 'contre-exemple'], RECO),
  sent(1686, 'Mon plan répond à la question que j’ai posée, pas à une autre.', 'My plan answers the question I asked, not another one.', '/mɔ̃ plɑ̃ ʁe.pɔ̃ a la kɛs.tjɔ̃ kə ʒe po.ze pa.za yn otʁ/', 'mohⁿ PLAHⁿ ray-POHⁿ a la kes-TYOHⁿ kuh zhay poh-ZAY pa-za ün OHTR', ['methode', 'choix']),
];

/* ── ACT 7 · LES TRANSITIONS-BILAN ───────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  phrase(1687, 'une transition-bilan', 'a summing-up transition: what the part established, then what comes next', '/yn tʁɑ̃.zi.sjɔ̃ bi.lɑ̃/', 'ün trahⁿ-zee-syohⁿ bee-LAHⁿ', ['mot', 'transition']),
  sent(1688, 'Une transition dit ce que la partie a établi et pourquoi il faut aller plus loin.', 'A transition says what the part established and why one must go further.', '/yn tʁɑ̃.zi.sjɔ̃ di sə kə la paʁ.ti a e.ta.bli e puʁ.kwa il fo a.le ply lwɛ̃/', 'ün trahⁿ-zee-SYOHⁿ dee suh kuh la par-TEE a ay-ta-BLEE ay poor-KWA eel foh a-lay plü LWEHⁿ', ['regle', 'transition'], FCVDR),
  sent(1689, 'Une bonne transition résume, puis relance.', 'A good transition sums up, then moves on.', '/yn bɔn tʁɑ̃.zi.sjɔ̃ ʁe.zym pɥi ʁə.lɑ̃s/', 'ün bonn trahⁿ-zee-SYOHⁿ ray-ZÜMM pwee ruh-LAHⁿSS', ['regle', 'transition'], FC,
    rule('Tu passes de la première à la deuxième partie. Que doit faire ta phrase ?', 'Dire ce que la première partie a établi, puis la limite ou la question qui oblige à aller plus loin. Elle résume, puis relance.')),
  sent(1690, 'Passons maintenant à la deuxième partie.', 'Let us now move on to the second part.', '/pa.sɔ̃ mɛ̃t.nɑ̃ a la dø.zjɛm paʁ.ti/', 'pa-sohⁿ mehⁿt-NAHⁿ a la deu-zyemm par-TEE', ['vide', 'contre-exemple'], RECO),
  sent(1691, 'Le confort nous a donc libérés de bien des contraintes ; reste à savoir à quel prix.', 'Comfort has therefore freed us from many constraints; the question is at what cost.', '/lə kɔ̃.fɔʁ nu.za dɔ̃k li.be.ʁe də bjɛ̃ de kɔ̃.tʁɛ̃t ʁɛst a sa.vwaʁ a kɛl pʁi/', 'luh kohⁿ-FOR noo-za dohⁿk lee-bay-RAY duh byehⁿ day kohⁿ-TREHⁿT rest a sa-VWAR a kel PREE', ['bilan', 'transition']),
  sent(1692, 'Si le confort libère le corps, il n’est pas certain qu’il libère l’esprit.', 'If comfort frees the body, it is not certain that it frees the mind.', '/si lə kɔ̃.fɔʁ li.bɛʁ lə kɔʁ il nɛ pa sɛʁ.tɛ̃ kil li.bɛʁ lɛs.pʁi/', 'see luh kohⁿ-FOR lee-behr luh KOR eel neh pa sehr-TEHⁿ keel lee-behr les-PREE', ['bilan', 'transition'], FCVDR),
  sent(1693, 'Cette liberté a pourtant une contrepartie, que la première partie laissait dans l’ombre.', 'This freedom has a price, however, which the first part left in the shadows.', '/sɛt li.bɛʁ.te a puʁ.tɑ̃ yn kɔ̃.tʁə.paʁ.ti kə la pʁə.mjɛʁ paʁ.ti lɛ.sɛ dɑ̃ lɔ̃bʁ/', 'set lee-behr-TAY a poor-TAHⁿ ün kohⁿ-truh-par-TEE kuh la pruh-myehr par-TEE leh-SEH dahⁿ LOHⁿBR', ['relance', 'transition']),
  sent(1694, 'Une fois établi ce que le confort nous donne, il faut mesurer ce qu’il nous prend.', 'Once we have established what comfort gives us, we must measure what it takes.', '/yn fwa e.ta.bli sə kə lə kɔ̃.fɔʁ nu dɔn il fo mə.zy.ʁe sə kil nu pʁɑ̃/', 'ün FWA ay-ta-BLEE suh kuh luh kohⁿ-FOR noo DONN eel foh muh-zü-RAY suh keel noo PRAHⁿ', ['relance', 'transition'], FCVDR),
  sent(1695, 'Ce premier constat appelle une question plus délicate.', 'This first finding calls for a trickier question.', '/sə pʁə.mje kɔ̃s.ta a.pɛl yn kɛs.tjɔ̃ ply de.li.kat/', 'suh pruh-myay kohⁿs-TA a-PEL ün kes-TYOHⁿ plü day-lee-KAT', ['relance']),
  phrase(1696, 'une conclusion partielle', 'a partial conclusion, the sentence that closes one part', '/yn kɔ̃.kly.zjɔ̃ paʁ.sjɛl/', 'ün kohⁿ-klü-ZYOHⁿ par-SYEL', ['mot', 'transition']),
  sent(1697, 'Chaque partie s’achève sur une phrase qui en tire la leçon.', 'Each part ends on a sentence that draws its lesson.', '/ʃak paʁ.ti sa.ʃɛv syʁ yn fʁaz ki ɑ̃ tiʁ la lə.sɔ̃/', 'shak par-TEE sa-SHEV sür ün FRAHZ kee ahⁿ teer la luh-SOHⁿ', ['regle', 'transition']),
  sent(1698, 'Une transition qui n’annonce rien laisse le lecteur au milieu du gué.', 'A transition that announces nothing leaves the reader stranded halfway.', '/yn tʁɑ̃.zi.sjɔ̃ ki na.nɔ̃s ʁjɛ̃ lɛs lə lɛk.tœʁ o mi.ljø dy ɡe/', 'ün trahⁿ-zee-SYOHⁿ kee na-NOHⁿSS RYEHⁿ less luh lek-TUHR oh mee-lyeu dü GAY', ['regle']),
  sent(1699, 'La transition montre le lien : une limite, une objection, un approfondissement.', 'The transition shows the link: a limit, an objection, a deepening.', '/la tʁɑ̃.zi.sjɔ̃ mɔ̃tʁ lə ljɛ̃ yn li.mit y.nɔb.ʒɛk.sjɔ̃ œ̃.na.pʁɔ.fɔ̃.dis.mɑ̃/', 'la trahⁿ-zee-SYOHⁿ mohⁿtr luh LYEHⁿ ün lee-MEET ü-nob-zhek-SYOHⁿ uhⁿ-na-pro-fohⁿ-dees-MAHⁿ', ['regle', 'transition']),
  sent(1700, 'Après le confort, parlons maintenant de la liberté.', 'After comfort, let us now talk about freedom.', '/a.pʁɛ lə kɔ̃.fɔʁ paʁ.lɔ̃ mɛ̃t.nɑ̃ də la li.bɛʁ.te/', 'a-preh luh kohⁿ-FOR par-lohⁿ mehⁿt-NAHⁿ duh la lee-behr-TAY', ['vide', 'contre-exemple'], RECO),
];

/* ── ACT 8 · CONCLURE ET OUVRIR ──────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1701, 'La conclusion répond à la problématique sans effacer la tension.', 'The conclusion answers the problem question without erasing the tension.', '/la kɔ̃.kly.zjɔ̃ ʁe.pɔ̃ a la pʁɔ.ble.ma.tik sɑ̃.ze.fa.se la tɑ̃.sjɔ̃/', 'la kohⁿ-klü-ZYOHⁿ ray-POHⁿ a la pro-blay-ma-TEEK sahⁿ-zay-fa-SAY la tahⁿ-SYOHⁿ', ['regle', 'conclusion'], FC,
    rule('Ta conclusion doit-elle choisir un camp et oublier l’autre ?', 'Non. Elle répond à la problématique en gardant ce que chaque partie a établi, puis elle ouvre une question que ta réponse fait naître.')),
  sent(1702, 'Le confort ne nous rend libres que si nous restons capables de nous en passer.', 'Comfort makes us free only if we remain able to do without it.', '/lə kɔ̃.fɔʁ nə nu ʁɑ̃ libʁ kə si nu ʁɛs.tɔ̃ ka.pabl də nu.zɑ̃ pa.se/', 'luh kohⁿ-FOR nuh noo rahⁿ LEEBR kuh see noo res-TOHⁿ ka-PABL duh noo-zahⁿ pa-SAY', ['reponse', 'conclusion'], FCVDR),
  sent(1703, 'Une ouverture prolonge la réflexion ; elle ne la recommence pas.', 'An opening extends the reflection; it does not start it again.', '/y.nu.vɛʁ.tyʁ pʁɔ.lɔ̃ʒ la ʁe.flɛk.sjɔ̃ ɛl nə la ʁə.kɔ.mɑ̃s pa/', 'ü-noo-vehr-TÜR pro-LOHⁿZH la ray-flek-SYOHⁿ el nuh la ruh-ko-MAHⁿSS PA', ['regle', 'ouverture'], FCVDR),
  sent(1704, 'Et vous, qu’en pensez-vous ?', 'And you, what do you think?', '/e vu kɑ̃ pɑ̃.se.vu/', 'ay VOO kahⁿ pahⁿ-say-VOO', ['cliche', 'contre-exemple'], RECO),
  sent(1705, 'Seul l’avenir nous le dira.', 'Only the future will tell.', '/sœl la.və.niʁ nu lə di.ʁa/', 'suhl la-vuh-NEER noo luh dee-RA', ['cliche', 'contre-exemple'], RECO),
  sent(1706, 'Reste à savoir si une société peut apprendre l’inconfort à ses enfants.', 'It remains to be seen whether a society can teach its children discomfort.', '/ʁɛst a sa.vwaʁ si yn sɔ.sje.te pø a.pʁɑ̃dʁ lɛ̃.kɔ̃.fɔʁ a se.zɑ̃.fɑ̃/', 'rest a sa-VWAR see ün so-syay-TAY peu a-PRAHⁿDR lehⁿ-kohⁿ-FOR a say-zahⁿ-FAHⁿ', ['ouverture', 'prolonger']),
  sent(1707, 'La même question se pose, à une autre échelle, pour les villes et leurs services.', 'The same question arises, on another scale, for towns and their services.', '/la mɛm kɛs.tjɔ̃ sə poz a y.no.tʁe.ʃɛl puʁ le vil e lœʁ sɛʁ.vis/', 'la memm kes-TYOHⁿ suh POHZ a ü-noh-tray-SHEL poor lay VEEL ay luhr sehr-VEESS', ['ouverture', 'deplacer']),
  sent(1708, 'On pourrait en dire autant du numérique, qui promet lui aussi de nous libérer.', 'The same could be said of digital technology, which also promises to free us.', '/ɔ̃ pu.ʁɛ ɑ̃ diʁ o.tɑ̃ dy ny.me.ʁik ki pʁɔ.mɛ lɥi o.si də nu li.be.ʁe/', 'ohⁿ poo-REH ahⁿ deer oh-TAHⁿ dü nü-may-REEK kee pro-MEH lwee oh-SEE duh noo lee-bay-RAY', ['ouverture', 'elargir']),
  phrase(1709, 'une ouverture qui prolonge', 'an opening that extends the answer just given', '/y.nu.vɛʁ.tyʁ ki pʁɔ.lɔ̃ʒ/', 'ü-noo-vehr-TÜR kee pro-LOHⁿZH', ['mot', 'ouverture']),
  sent(1710, 'Le bilan rappelle le chemin parcouru, en une ou deux phrases.', 'The summary recalls the ground covered, in one or two sentences.', '/lə bi.lɑ̃ ʁa.pɛl lə ʃə.mɛ̃ paʁ.ku.ʁy ɑ̃.nyn u dø fʁaz/', 'luh bee-LAHⁿ ra-PEL luh shuh-MEHⁿ par-koo-RÜ ahⁿ-nün oo deu FRAHZ', ['regle', 'conclusion']),
  sent(1711, 'Aucun argument nouveau dans la conclusion, mais une question nouvelle à la fin.', 'No new argument in the conclusion, but a new question at the end.', '/o.kœ̃.naʁ.ɡy.mɑ̃ nu.vo dɑ̃ la kɔ̃.kly.zjɔ̃ mɛ yn kɛs.tjɔ̃ nu.vɛl a la fɛ̃/', 'oh-kuhⁿ-nar-gü-MAHⁿ noo-VOH dahⁿ la kohⁿ-klü-ZYOHⁿ meh ün kes-TYOHⁿ noo-VEL a la FEHⁿ', ['regle', 'conclusion'], FCVDR),
  sent(1712, 'De plus, le confort coûte cher aux ménages.', 'Moreover, comfort is expensive for households.', '/də plys lə kɔ̃.fɔʁ kut ʃɛʁ o me.naʒ/', 'duh PLÜSS luh kohⁿ-FOR koot SHEHR oh may-NAZH', ['argument-nouveau', 'contre-exemple'], RECO),
  phrase(1713, 'faire le bilan', 'to take stock, to sum up the ground covered', '/fɛʁ lə bi.lɑ̃/', 'fehr luh bee-LAHⁿ', ['mot', 'conclusion']),
  sent(1714, 'Une bonne ouverture naît de la réponse que tu viens de donner.', 'A good opening is born of the answer you have just given.', '/yn bɔ.nu.vɛʁ.tyʁ nɛ də la ʁe.pɔ̃s kə ty vjɛ̃ də dɔ.ne/', 'ün bo-noo-vehr-TÜR NEH duh la ray-POHⁿSS kuh tü vyehⁿ duh do-NAY', ['methode', 'ouverture']),
];

/* ── ACT 9 · LIRE UN DOSSIER ─────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  phrase(1715, 'le thème commun', 'the common theme of a dossier', '/lə tɛm kɔ.mœ̃/', 'luh temm ko-MUHⁿ', ['mot', 'dossier']),
  sent(1716, 'Avant d’écrire, je cherche ce que les documents ont en commun.', 'Before writing, I look for what the documents have in common.', '/a.vɑ̃ de.kʁiʁ ʒə ʃɛʁʃ sə kə le dɔ.ky.mɑ̃ ɔ̃.tɑ̃ kɔ.mœ̃/', 'a-vahⁿ day-KREER zhuh SHEHRSH suh kuh lay do-kü-MAHⁿ ohⁿ-tahⁿ ko-MUHⁿ', ['methode', 'dossier'], FCVDR),
  sent(1717, 'Je classe les idées du dossier, pas les documents.', 'I sort the ideas of the dossier, not the documents.', '/ʒə klas le.zi.de dy dɔ.sje pa le dɔ.ky.mɑ̃/', 'zhuh KLASS lay-zee-DAY dü do-SYAY pa lay do-kü-MAHⁿ', ['regle', 'dossier'], FCVDR),
  sent(1718, 'Lis le dossier par idées : où les documents se rejoignent, où ils divergent.', 'Read the dossier by ideas: where the documents meet, where they diverge.', '/li lə dɔ.sje paʁ i.de u le dɔ.ky.mɑ̃ sə ʁə.ʒwaɲ u il di.vɛʁʒ/', 'lee luh do-SYAY par ee-DAY oo lay do-kü-MAHⁿ suh ruh-ZHWANY oo eel dee-VEHRZH', ['regle', 'dossier'], FC,
    rule('Tu as trois documents. Comment les lis-tu pour une synthèse ?', 'Par idées : pour chaque idée, quels documents la portent, où ils se rejoignent, où ils divergent. Ta synthèse suivra ces idées, pas l’ordre des documents.')),
  sent(1719, 'La psychologue et l’institutrice voient toutes deux dans l’ennui une étape utile.', 'The psychologist and the primary teacher both see boredom as a useful stage.', '/la psi.kɔ.lɔɡ e lɛ̃s.ti.ty.tʁis vwa tut dø dɑ̃ lɑ̃.nɥi y.ne.tap y.til/', 'la psee-ko-LOG ay lehⁿs-tee-tü-TREESS vwa toot DEU dahⁿ lahⁿ-NWEE ü-nay-TAP ü-TEEL', ['convergence']),
  sent(1720, 'Le père de famille, lui, y voit d’abord une souffrance à épargner.', 'The father, for his part, sees in it first of all a suffering to be spared.', '/lə pɛʁ də fa.mij lɥi i vwa da.bɔʁ yn su.fʁɑ̃s a e.paʁ.ɲe/', 'luh pehr duh fa-MEEY LWEE ee vwa da-BOR ün soo-FRAHⁿSS a ay-par-NYAY', ['divergence']),
  sent(1721, 'Le document 1 dit que l’ennui est utile. Le document 2 dit le contraire.', 'Document 1 says boredom is useful. Document 2 says the opposite.', '/lə dɔ.ky.mɑ̃ œ̃ di kə lɑ̃.nɥi ɛ.ty.til lə dɔ.ky.mɑ̃ dø di lə kɔ̃.tʁɛʁ/', 'luh do-kü-mahⁿ UHⁿ dee kuh lahⁿ-NWEE eh-tü-TEEL luh do-kü-mahⁿ DEU dee luh kohⁿ-TREHR', ['document-par-document', 'contre-exemple'], RECO),
  phrase(1722, 'une grille de lecture', 'a reading grid, a table to sort a dossier’s ideas', '/yn ɡʁij də lɛk.tyʁ/', 'ün GREEY duh lek-TÜR', ['mot', 'dossier']),
  sent(1723, 'Pour chaque idée, je note les documents qui la portent.', 'For each idea, I note the documents that carry it.', '/puʁ ʃa.ki.de ʒə nɔt le dɔ.ky.mɑ̃ ki la pɔʁt/', 'poor sha-kee-DAY zhuh NOT lay do-kü-MAHⁿ kee la PORT', ['methode', 'dossier']),
  sent(1724, 'Une idée qu’un seul document avance compte aussi, si elle éclaire le débat.', 'An idea put forward by a single document also counts, if it sheds light on the debate.', '/y.ni.de kœ̃ sœl dɔ.ky.mɑ̃ a.vɑ̃s kɔ̃t o.si si ɛl e.klɛʁ lə de.ba/', 'ü-nee-DAY kuhⁿ suhl do-kü-MAHⁿ a-VAHⁿSS kohⁿt oh-SEE see el ay-KLEHR luh day-BA', ['regle']),
  phrase(1725, 'les points de convergence', 'the points where the documents agree', '/le pwɛ̃ də kɔ̃.vɛʁ.ʒɑ̃s/', 'lay pwehⁿ duh kohⁿ-vehr-ZHAHⁿSS', ['mot', 'convergence']),
  phrase(1726, 'les points de divergence', 'the points where the documents disagree', '/le pwɛ̃ də di.vɛʁ.ʒɑ̃s/', 'lay pwehⁿ duh dee-vehr-ZHAHⁿSS', ['mot', 'divergence']),
  sent(1727, 'Tous les documents parlent de l’ennui, mais pas de la même façon.', 'All the documents talk about boredom, but not in the same way.', '/tu le dɔ.ky.mɑ̃ paʁl də lɑ̃.nɥi mɛ pa də la mɛm fa.sɔ̃/', 'too lay do-kü-MAHⁿ PARL duh lahⁿ-NWEE meh pa duh la memm fa-SOHⁿ', ['constat', 'dossier']),
  sent(1728, 'La synthèse a besoin d’une problématique, elle aussi, mais neutre.', 'The synthesis needs a problem question too, but a neutral one.', '/la sɛ̃.tɛz a bə.zwɛ̃ dyn pʁɔ.ble.ma.tik ɛl o.si mɛ nøtʁ/', 'la sehⁿ-TEZ a buh-ZWEHⁿ dün pro-blay-ma-TEEK el oh-SEE meh NEUTR', ['regle', 'synthese']),
];

/* ── ACT 10 · ÉCRIRE LA SYNTHÈSE ─────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1729, 'Une synthèse dit ce que disent les documents, avec tes mots, sans ton avis.', 'A synthesis says what the documents say, in your words, without your opinion.', '/yn sɛ̃.tɛz di sə kə diz le dɔ.ky.mɑ̃ a.vɛk te mo sɑ̃ tɔ̃.na.vi/', 'ün sehⁿ-TEZ dee suh kuh deez lay do-kü-MAHⁿ a-vek tay MOH sahⁿ toh-na-VEE', ['regle', 'synthese'], FC,
    rule('Qu’est-ce qu’une synthèse de documents n’a jamais le droit de contenir ?', 'Ton opinion, une idée absente du dossier, des phrases recopiées. Une synthèse dit ce que disent les documents, avec tes mots, sans ton avis.')),
  sent(1730, 'Je reformule chaque idée avec mes propres mots.', 'I reword each idea in my own words.', '/ʒə ʁə.fɔʁ.myl ʃa.ki.de a.vɛk me pʁɔ.pʁə mo/', 'zhuh ruh-for-MÜL sha-kee-DAY a-vek may pro-pruh MOH', ['regle', 'reformuler'], FCVDR),
  sent(1731, 'Je peux reprendre un mot-clé, jamais une phrase entière.', 'I may reuse a key word, never a whole sentence.', '/ʒə pø ʁə.pʁɑ̃dʁ œ̃ mo.kle ʒa.mɛ yn fʁa.zɑ̃.tjɛʁ/', 'zhuh peu ruh-PRAHⁿDR uhⁿ moh-KLAY zha-MEH ün fra-zahⁿ-TYEHR', ['regle', 'reformuler'], FCVDR),
  sent(1732, 'Aucune idée extérieure au dossier, même juste.', 'No idea from outside the dossier, even a correct one.', '/o.kyn i.de ɛks.te.ʁjœʁ o dɔ.sje mɛm ʒyst/', 'oh-kün ee-DAY eks-tay-RYUHR oh do-SYAY memm ZHÜST', ['regle', 'synthese'], FCVDR),
  sent(1733, 'Aucun jugement personnel : ni « à mon avis », ni « heureusement ».', 'No personal judgement: neither “in my opinion” nor “fortunately”.', '/o.kœ̃ ʒyʒ.mɑ̃ pɛʁ.sɔ.nɛl ni a mɔ̃.na.vi ni œ.ʁøz.mɑ̃/', 'oh-kuhⁿ zhüzh-MAHⁿ pehr-so-NEL nee a moh-na-VEE nee uh-reuz-MAHⁿ', ['regle', 'synthese']),
  sent(1734, 'Il est évident que l’ennui est une chance pour les enfants.', 'It is obvious that boredom is a blessing for children.', '/i.lɛ.te.vi.dɑ̃ kə lɑ̃.nɥi ɛ.tyn ʃɑ̃s puʁ le.zɑ̃.fɑ̃/', 'ee-leh-tay-vee-DAHⁿ kuh lahⁿ-NWEE eh-tün SHAHⁿSS poor lay-zahⁿ-FAHⁿ', ['opinion', 'contre-exemple'], RECO),
  sent(1735, 'Selon la psychologue, l’ennui laisse à l’imagination le temps de se mettre en route.', 'According to the psychologist, boredom gives the imagination time to get going.', '/sə.lɔ̃ la psi.kɔ.lɔɡ lɑ̃.nɥi lɛs a li.ma.ʒi.na.sjɔ̃ lə tɑ̃ də sə mɛ.tʁɑ̃ ʁut/', 'suh-lohⁿ la psee-ko-LOG lahⁿ-NWEE less a lee-ma-zhee-na-SYOHⁿ luh TAHⁿ duh suh meh-trahⁿ ROOT', ['reformulation', 'synthese']),
  sent(1736, 'Je compte mes mots : la consigne donne une fourchette, et je la respecte.', 'I count my words: the instructions give a range, and I keep to it.', '/ʒə kɔ̃t me mo la kɔ̃.siɲ dɔ.nyn fuʁ.ʃɛt e ʒə la ʁɛs.pɛkt/', 'zhuh KOHⁿT may MOH la kohⁿ-SEENY do-nün foor-SHET ay zhuh la res-PEKT', ['regle', 'longueur']),
  phrase(1737, 'une fourchette de mots', 'a word range, a minimum and a maximum', '/yn fuʁ.ʃɛt də mo/', 'ün foor-SHET duh MOH', ['mot', 'longueur']),
  sent(1738, 'Un titre, une courte introduction, deux ou trois parties, une conclusion brève.', 'A title, a short introduction, two or three parts, a brief conclusion.', '/œ̃ titʁ yn kuʁ.tɛ̃.tʁɔ.dyk.sjɔ̃ dø.zu tʁwa paʁ.ti yn kɔ̃.kly.zjɔ̃ bʁɛv/', 'uhⁿ TEETR ün koor-tehⁿ-tro-dük-SYOHⁿ deu-zoo trwa par-TEE ün kohⁿ-klü-zyohⁿ BREV', ['structure', 'synthese']),
  sent(1739, 'Deux des trois documents voient dans l’ennui une étape utile.', 'Two of the three documents see boredom as a useful stage.', '/dø de tʁwa dɔ.ky.mɑ̃ vwa dɑ̃ lɑ̃.nɥi y.ne.tap y.til/', 'deu day trwa do-kü-MAHⁿ vwa dahⁿ lahⁿ-NWEE ü-nay-TAP ü-TEEL', ['synthese', 'convergence'], FCVDR),
  sent(1740, 'Heureusement, de plus en plus de parents le comprennent.', 'Fortunately, more and more parents understand this.', '/œ.ʁøz.mɑ̃ də ply.zɑ̃ ply də pa.ʁɑ̃ lə kɔ̃.pʁɛn/', 'uh-reuz-MAHⁿ duh plü-zahⁿ PLÜ duh pa-RAHⁿ luh kohⁿ-PRENN', ['opinion', 'idee-ajoutee', 'contre-exemple'], RECO),
  phrase(1741, 'reformuler une idée', 'to reword an idea', '/ʁə.fɔʁ.my.le y.ni.de/', 'ruh-for-mü-LAY ü-nee-DAY', ['mot', 'reformuler']),
  sent(1742, 'La synthèse s’efface derrière les documents.', 'The synthesis steps back behind the documents.', '/la sɛ̃.tɛz se.fas dɛ.ʁjɛʁ le dɔ.ky.mɑ̃/', 'la sehⁿ-TEZ say-FASS deh-ryehr lay do-kü-MAHⁿ', ['regle', 'synthese']),
  sent(1743, 'Des études récentes montrent que les écrans font disparaître l’ennui.', 'Recent studies show that screens make boredom disappear.', '/de.ze.tyd ʁe.sɑ̃t mɔ̃tʁ kə le.ze.kʁɑ̃ fɔ̃ dis.pa.ʁɛtʁ lɑ̃.nɥi/', 'day-zay-TÜD ray-SAHⁿT mohⁿtr kuh lay-zay-KRAHⁿ fohⁿ dees-pa-REHTR lahⁿ-NWEE', ['idee-ajoutee', 'contre-exemple'], RECO),
  sent(1744, 'Pour le père de famille, en revanche, l’ennui reste une épreuve qu’il faut écourter.', 'For the father, on the other hand, boredom remains an ordeal to be cut short.', '/puʁ lə pɛʁ də fa.mij ɑ̃ ʁə.vɑ̃ʃ lɑ̃.nɥi ʁɛs.ty.ne.pʁœv kil fo e.kuʁ.te/', 'poor luh pehr duh fa-MEEY ahⁿ ruh-VAHⁿSH lahⁿ-NWEE res-tü-nay-PRUHV keel foh ay-koor-TAY', ['synthese', 'divergence']),
];

/* ── ACT 11 · L’ESSAI SUR DOSSIER ────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  phrase(1745, 'la place de l’auteur', 'the writer’s standing: who writes, and on whose behalf', '/la plas də lo.tœʁ/', 'la plass duh loh-TUHR', ['mot', 'genre']),
  sent(1746, 'Un essai argumenté a un destinataire, une situation et un but.', 'An argumentative essay has an addressee, a situation and an aim.', '/œ̃.nɛ.sɛ aʁ.ɡy.mɑ̃.te a œ̃ dɛs.ti.na.tɛʁ yn si.tɥa.sjɔ̃ e œ̃ byt/', 'uhⁿ-neh-SEH ar-gü-mahⁿ-TAY a uhⁿ des-tee-na-TEHR ün see-twa-SYOHⁿ ay uhⁿ BÜT', ['regle', 'genre'], FCVDR),
  sent(1747, 'L’essai prend position ; il s’appuie sur le dossier sans le recopier.', 'The essay takes a position; it draws on the dossier without copying it.', '/le.sɛ pʁɑ̃ po.zi.sjɔ̃ il sa.pɥi syʁ lə dɔ.sje sɑ̃ lə ʁə.kɔ.pje/', 'lay-SEH prahⁿ poh-zee-SYOHⁿ eel sa-PWEE sür luh do-SYAY sahⁿ luh ruh-ko-PYAY', ['regle', 'genre'], FC,
    rule('Quelle différence entre la synthèse et l’essai argumenté ?', 'La synthèse rend compte du dossier sans avis. L’essai prend position, pour un destinataire, et s’appuie sur le dossier sans le recopier.')),
  sent(1748, 'Madame la Directrice, je vous écris au nom des parents de l’école des Tilleuls.', 'Dear Headteacher, I am writing to you on behalf of the parents of the école des Tilleuls.', '/ma.dam la di.ʁɛk.tʁis ʒə vu.ze.kʁi o nɔ̃ de pa.ʁɑ̃ də le.kɔl de ti.jœl/', 'ma-damm la dee-rek-TREESS zhuh voo-zay-KREE oh NOHⁿ day pa-RAHⁿ duh lay-KOL day tee-YUHL', ['destinataire', 'genre']),
  sent(1749, 'Comme le rappelle l’article du Courrier, la cour est la plus chaude du quartier en été.', 'As the Courrier article points out, the yard is the hottest spot in the neighbourhood in summer.', '/kɔm lə ʁa.pɛl laʁ.tikl dy ku.ʁje la kuʁ ɛ la ply ʃod dy kaʁ.tje ɑ̃.ne.te/', 'komm luh ra-PEL lar-TEEKL dü koo-RYAY la KOOR eh la plü SHOHD dü kar-TYAY ahⁿ-nay-TAY', ['appui', 'dossier']),
  sent(1750, 'Je vous demande donc d’inscrire ce projet à l’ordre du jour du prochain conseil d’école.', 'I therefore ask you to put this project on the agenda of the next school council.', '/ʒə vu də.mɑ̃d dɔ̃k dɛ̃s.kʁiʁ sə pʁɔ.ʒɛ a lɔʁ.dʁə dy ʒuʁ dy pʁɔ.ʃɛ̃ kɔ̃.sɛj de.kɔl/', 'zhuh voo duh-MAHⁿD dohⁿk dehⁿs-KREER suh pro-ZHEH a lor-druh dü ZHOOR dü pro-shehⁿ kohⁿ-SEHY day-KOL', ['demande', 'genre']),
  sent(1751, 'Dans cette dissertation, nous verrons d’abord les avantages des arbres.', 'In this essay, we will first look at the advantages of trees.', '/dɑ̃ sɛt di.sɛʁ.ta.sjɔ̃ nu vɛ.ʁɔ̃ da.bɔʁ le.za.vɑ̃.taʒ de.zaʁbʁ/', 'dahⁿ set dee-sehr-ta-SYOHⁿ noo veh-ROHⁿ da-BOR lay-za-vahⁿ-TAZH day-ZARBR', ['ton-scolaire', 'contre-exemple'], RECO),
  sent(1752, 'On objectera que des arbres coûtent cher ; une cour qu’il faut fermer en juin coûte davantage.', 'It will be objected that trees are expensive; a yard that must be closed in June costs more.', '/ɔ̃.nɔb.ʒɛk.tə.ʁa kə de.zaʁbʁ kut ʃɛʁ yn kuʁ kil fo fɛʁ.me ɑ̃ ʒɥɛ̃ kut da.vɑ̃.taʒ/', 'oh-nob-zhek-tuh-RA kuh day-ZARBR koot SHEHR ün KOOR keel foh fehr-may ahⁿ ZHWEHⁿ koot da-vahⁿ-TAZH', ['objection', 'genre']),
  sent(1753, 'Le genre décide du ton : une lettre ouverte s’adresse à quelqu’un, et le public la lit.', 'The genre decides the tone: an open letter is addressed to someone, and the public reads it.', '/lə ʒɑ̃ʁ de.sid dy tɔ̃ yn lɛ.tʁu.vɛʁt sa.dʁɛs a kɛl.kœ̃ e lə py.blik la li/', 'luh ZHAHⁿR day-SEED dü TOHⁿ ün leh-troo-VEHRT sa-DRESS a kel-KUHⁿ ay luh pü-BLEEK la LEE', ['regle', 'genre']),
  phrase(1754, 'le destinataire', 'the addressee, the person the text is written to', '/lə dɛs.ti.na.tɛʁ/', 'luh des-tee-na-TEHR', ['mot', 'genre']),
  sent(1755, 'Je cite le dossier pour appuyer une idée, pas pour la remplacer.', 'I quote the dossier to support an idea, not to replace it.', '/ʒə sit lə dɔ.sje puʁ a.pɥi.je y.ni.de pa puʁ la ʁɑ̃.pla.se/', 'zhuh SEET luh do-SYAY poor a-pwee-YAY ü-nee-DAY pa poor la rahⁿ-pla-SAY', ['regle', 'dossier'], FCVDR),
  sent(1756, 'Veuillez agréer, Madame la Directrice, l’expression de mes salutations distinguées.', 'Yours faithfully (formal closing to a headteacher).', '/vœ.je.za.ɡʁe.e ma.dam la di.ʁɛk.tʁis lɛks.pʁɛ.sjɔ̃ də me sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'vuh-yay-za-gray-AY ma-damm la dee-rek-TREESS leks-preh-SYOHⁿ duh may sa-lü-ta-SYOHⁿ dees-tehⁿ-GAY', ['formule', 'genre']),
  sent(1757, 'Un exemple tiré du dossier vaut mieux qu’une généralité.', 'An example taken from the dossier is worth more than a generality.', '/œ̃.nɛɡ.zɑ̃pl ti.ʁe dy dɔ.sje vo mjø kyn ʒe.ne.ʁa.li.te/', 'uhⁿ-neg-ZAHⁿPL tee-RAY dü do-SYAY voh MYEU kün zhay-nay-ra-lee-TAY', ['regle', 'dossier']),
  sent(1758, 'La cour est très chaude. Il faut des arbres. Les enfants souffrent.', 'The yard is very hot. Trees are needed. The children suffer.', '/la kuʁ ɛ tʁɛ ʃod il fo de.zaʁbʁ le.zɑ̃.fɑ̃ sufʁ/', 'la KOOR eh treh SHOHD eel foh day-ZARBR lay-zahⁿ-fahⁿ SOOFR', ['juxtaposition', 'contre-exemple'], RECO),
];

/* ── ACT 12 · TON ESSAI ──────────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1759, 'Monsieur le Maire, j’habite le quartier de la halle et j’y fais mon marché chaque samedi.', 'Dear Mayor, I live in the market-hall district and do my shopping there every Saturday.', '/mə.sjø lə mɛʁ ʒa.bit lə kaʁ.tje də la al e ʒi fɛ mɔ̃ maʁ.ʃe ʃak sam.di/', 'muh-syeu luh MEHR zha-BEET luh kar-TYAY duh la AL ay zhee feh mohⁿ mar-SHAY shak sam-DEE', ['essai', 'destinataire']),
  sent(1760, 'Restaurer ou transformer : la question est mal posée si l’on oublie ceux qui font vivre la halle.', 'Restore or transform: the question is badly put if we forget those who keep the hall alive.', '/ʁɛs.to.ʁe u tʁɑ̃s.fɔʁ.me la kɛs.tjɔ̃ ɛ mal po.ze si lɔ̃.nu.bli sø ki fɔ̃ vivʁ la al/', 'res-toh-RAY oo trahⁿs-for-MAY la kes-TYOHⁿ eh mal poh-ZAY see loh-noo-BLEE seu kee fohⁿ veevr la AL', ['essai', 'problematique']),
  sent(1761, 'Comment préserver un lieu sans le figer ?', 'How can a place be preserved without freezing it?', '/kɔ.mɑ̃ pʁe.zɛʁ.ve œ̃ ljø sɑ̃ lə fi.ʒe/', 'ko-MAHⁿ pray-zehr-VAY uhⁿ LYEU sahⁿ luh fee-ZHAY', ['essai', 'problematique'], FCVDR),
  sent(1762, 'Une halle restaurée mais vide ne serait qu’un décor.', 'A restored but empty hall would be nothing but a stage set.', '/yn al ʁɛs.to.ʁe mɛ vid nə sə.ʁɛ kœ̃ de.kɔʁ/', 'ün AL res-toh-RAY meh VEED nuh suh-REH kuhⁿ day-KOR', ['essai', 'argument']),
  sent(1763, 'Une halle transformée qui chasserait ses marchands perdrait son âme.', 'A transformed hall that drove out its stallholders would lose its soul.', '/yn al tʁɑ̃s.fɔʁ.me ki ʃa.sʁɛ se maʁ.ʃɑ̃ pɛʁ.dʁɛ sɔ̃.nam/', 'ün AL trahⁿs-for-MAY kee sha-sreh say mar-SHAHⁿ pehr-DREH soh-NAMM', ['essai', 'argument']),
  sent(1764, 'Je vous demande de garder le marché du matin et d’ouvrir la halle le soir.', 'I ask you to keep the morning market and to open the hall in the evening.', '/ʒə vu də.mɑ̃d də ɡaʁ.de lə maʁ.ʃe dy ma.tɛ̃ e du.vʁiʁ la al lə swaʁ/', 'zhuh voo duh-MAHⁿD duh gar-DAY luh mar-SHAY dü ma-TEHⁿ ay doo-VREER la AL luh SWAR', ['essai', 'demande']),
  sent(1765, 'Selon le Courrier, la restauration coûterait quatre millions d’euros.', 'According to the Courrier, the restoration would cost four million euros.', '/sə.lɔ̃ lə ku.ʁje la ʁɛs.to.ʁa.sjɔ̃ ku.tʁɛ katʁ mi.ljɔ̃ dø.ʁo/', 'suh-lohⁿ luh koo-RYAY la res-toh-ra-SYOHⁿ koo-TREH katr mee-lyohⁿ deu-ROH', ['essai', 'appui']),
  phrase(1766, 'restaurer à l’identique', 'to restore exactly as it was', '/ʁɛs.to.ʁe a li.dɑ̃.tik/', 'res-toh-RAY a lee-dahⁿ-TEEK', ['mot', 'essai']),
  sent(1767, 'Je ne prétends pas que ce choix plaira à tous.', 'I do not claim that this choice will please everyone.', '/ʒə nə pʁe.tɑ̃ pa kə sə ʃwa plɛ.ʁa a tus/', 'zhuh nuh pray-TAHⁿ pa kuh suh SHWA pleh-RA a TOOSS', ['essai', 'limite']),
  sent(1768, 'Ce que nous voulons préserver, ce n’est pas la halle, c’est ce qui s’y passe.', 'What we want to preserve is not the hall, it is what happens in it.', '/sə kə nu vu.lɔ̃ pʁe.zɛʁ.ve sə nɛ pa la al sɛ sə ki si pas/', 'suh kuh noo voo-LOHⁿ pray-zehr-VAY suh neh pa la AL seh suh kee see PASS', ['essai', 'these'], FCVDR),
  phrase(1769, 'figer un lieu', 'to freeze a place, to stop it from living and changing', '/fi.ʒe œ̃ ljø/', 'fee-zhay uhⁿ LYEU', ['mot', 'essai']),
  sent(1770, 'Je vous prie d’agréer, Monsieur le Maire, l’expression de ma haute considération.', 'Yours faithfully (formal closing to a mayor).', '/ʒə vu pʁi da.ɡʁe.e mə.sjø lə mɛʁ lɛks.pʁɛ.sjɔ̃ də ma ot kɔ̃.si.de.ʁa.sjɔ̃/', 'zhuh voo PREE da-gray-AY muh-syeu luh MEHR leks-preh-SYOHⁿ duh ma oht kohⁿ-see-day-ra-SYOHⁿ', ['essai', 'formule']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE ANCHOR TEXTS
 *
 *  All original, written for the lesson: copies, handouts and dossiers of
 *  Irène Lamothe’s evening class at the Maison des savoirs, in the invented
 *  town of Sorbevaux. Every figure is internal to the lesson.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Karim’s introduction, and Irène’s note in the margin. */
export const COPIE_TEXT =
  'Sujet : « Le progrès technique nous fait-il gagner du temps ? » Introduction de Karim. Depuis toujours, l’homme invente des machines pour se faciliter la vie. La roue, l’imprimerie, l’ordinateur : chaque invention a changé notre quotidien. Aujourd’hui, le progrès technique est partout, dans nos poches comme dans nos cuisines. Nous nous demanderons donc si le progrès technique nous fait gagner du temps. Dans une première partie, nous verrons qu’il nous fait gagner du temps. Dans une deuxième partie, nous verrons qu’il ne nous en fait pas gagner. Enfin, nous conclurons. '
  + 'Note d’Irène dans la marge : « Karim, ton introduction est propre, et pourtant elle n’apprend rien à ton lecteur. Ta question recopie le sujet, ton plan recopie ta question, et ta conclusion est déjà écrite : oui et non. Où est le problème ? Cherche ce qui résiste. Chaque machine nous fait gagner quelques minutes ; pourquoi avons-nous l’impression d’en manquer de plus en plus ? Voilà une tension : deux idées vraies qui se heurtent. Avec elle, tu n’as plus besoin de deviner ton plan, il se dessine tout seul. Reprends aussi ta première phrase : « depuis toujours » ne dit rien qu’on ne sache déjà. Pars d’un fait précis, d’une scène, d’un chiffre. »';

/** Act 2: Irène’s handout on reading a subject. */
export const TERMES_TEXT =
  'Lire un sujet avant de l’écrire. Fiche d’Irène Lamothe pour le cours du mardi. Sujet : « Nos loisirs sont-ils encore du temps libre ? » Avant toute idée, prends chaque mot au sérieux. « Nos loisirs » : ce que nous choisissons de faire quand nous ne devons rien faire, le sport du dimanche, la lecture, le cinéma, les jeux. Le possessif compte : il s’agit de nos loisirs à nous, pas de ceux d’une élite. « Le temps libre » se définit d’abord par ce qu’il n’est pas, le travail et les obligations ; mais « libre » a un second sens, plus exigeant : un temps dont on dispose comme on veut. Et voici le petit mot que la moitié de la classe oublie : « encore ». Il suppose que nos loisirs ont été du temps libre, et qu’ils risquent de ne plus l’être. Le sujet te demande donc ce qui a changé. Mets maintenant les définitions côte à côte. Un loisir organisé, payé d’avance, réservé à heure fixe et noté sur une application est-il encore un temps dont on dispose librement ? Là, les deux sens de « libre » se heurtent : nos loisirs restent hors du travail, mais ils ressemblent de plus en plus à un emploi du temps. Tu tiens ta tension. Deux erreurs à éviter. La première : changer de sujet sans le voir, par exemple écrire sur le travail, plus facile, au lieu des loisirs. La seconde : tout embrasser. « Les loisirs », c’est trop large ; dis tout de suite que tu parles des loisirs du quotidien, pas des voyages ni des vacances. Définir les termes, c’est déjà commencer à répondre.';

/** Act 3: three introductions to the same subject. */
export const TROIS_INTROS_TEXT =
  'Sujet : « Le confort nous rend-il plus libres ? » Trois introductions écrites au cours du mardi. '
  + 'INTRODUCTION A. Le confort fait partie de notre vie. Nous allons étudier la problématique du confort. Le confort est-il une bonne ou une mauvaise chose ? Nous verrons ses avantages, puis ses inconvénients. '
  + 'INTRODUCTION B. Aujourd’hui, le confort pose de nombreux problèmes dans notre société : la consommation d’énergie, la sédentarité, le coût des équipements. Ces problèmes sont graves et il faut les étudier. Nous verrons donc les problèmes du confort, puis les solutions. '
  + 'INTRODUCTION C. Un soir de janvier, une coupure de courant plonge un immeuble de Sorbevaux dans le noir. En quelques minutes, les habitants découvrent qu’ils ne savent plus ni se chauffer, ni cuisiner, ni même ouvrir la porte du garage. Le confort nous libère du froid, de la faim et de la fatigue : c’est sa raison d’être. Mais on ne sait plus se passer de ce qui nous libère. Comment le confort, qui nous libère de l’effort, peut-il nous rendre dépendants ? Nous verrons d’abord en quoi le confort a réellement élargi nos libertés, puis comment il crée de nouvelles dépendances, avant de chercher à quelles conditions il peut rester une liberté. '
  + 'Note d’Irène : l’introduction A pose une question à laquelle on répond par oui ou par non, et elle appelle « problématique » ce qui n’est qu’un thème. L’introduction B confond problématique et problèmes : elle énumère, elle ne met rien en tension. L’introduction C met face à face deux idées vraies toutes les deux, et sa question peut recevoir deux réponses sérieuses.';

/** Act 4: Solène’s essay, analytical plan. */
export const ANALYTIQUE_TEXT =
  'Pourquoi les adultes reviennent-ils aux jeux de société ? Copie de Solène. Le bar à jeux de la rue Haute affiche complet trois soirs par semaine ; à la médiathèque, le rayon des jeux se vide chaque vendredi, et ce ne sont plus les enfants qui empruntent. Ce retour des adultes autour d’une table surprend, à l’heure où chacun a un écran dans sa poche. Il mérite d’être expliqué avant d’être jugé. '
  + 'La cause la plus visible tient au prix : une boîte de jeu coûte moins qu’une soirée au restaurant, et elle sert cent fois. Mais cette raison ne suffit pas, car les jeux vidéo sont souvent moins chers encore. Une deuxième cause, plus profonde, tient à la forme même de la partie : elle a des règles claires, un début et une fin, ce que la journée de travail n’offre plus guère. Le jeu de société offre enfin ce que l’écran retire : des visages autour d’une table. On y joue ensemble, dans la même pièce, et l’on ne peut pas faire défiler ses partenaires. '
  + 'Ces causes ne se valent pas. Le prix explique l’achat ; le besoin d’être ensemble explique le retour. Ce retour révèle donc un besoin de lien plus qu’un goût du jeu. L’enjeu dépasse le loisir : il dit quelque chose de nos solitudes, et de la difficulté de se retrouver sans prétexte. Reste à savoir si un jeu suffit à créer du lien, ou s’il ne fait que le rendre possible. L’analyse dit pourquoi ; elle ne dit pas encore s’il faut s’en réjouir.';

/** Act 5: Yanis’s essay, comparative plan. */
export const COMPARATIF_TEXT =
  'Vivre en ville, vivre à la campagne : deux façons de chercher la même chose ? Copie de Yanis. On oppose volontiers le citadin pressé au rural tranquille. Pourtant, quand on demande aux uns et aux autres pourquoi ils vivent là où ils vivent, ils donnent souvent la même réponse : pour avoir du temps à soi. Comparons donc ces deux façons de vivre sur trois critères : le temps, l’espace et les liens. '
  + 'Le temps, d’abord. À la ville comme à la campagne, on cherche du temps pour soi, mais on ne le trouve pas au même endroit. À la différence du citadin, le rural gagne de l’espace et perd du temps sur la route. À l’instar de la ville, la campagne a d’ailleurs ses embouteillages : ceux du matin vers la gare. '
  + 'L’espace, ensuite. Le citadin vit à l’étroit, mais tout est à sa porte ; le rural a un jardin, mais tout est loin. Au même titre que le jardin, pourtant, la place du village est un espace partagé, et c’est elle qui fait la vie du bourg. '
  + 'Les liens, enfin. Autant la ville rapproche les gens, autant elle les presse : on croise mille visages, on en connaît peu. À la campagne, on en croise peu, et on les connaît tous, ce qui rassure et parfois étouffe. '
  + 'Au terme de la comparaison, la ville et la campagne poursuivent bien le même but, du temps à soi ; elles diffèrent par le prix qu’elles font payer, l’une en espace, l’autre en trajets. Comparer, c’est chercher le point où deux réalités se séparent vraiment.';

/** Act 7: Irène’s model development, transitions highlighted in class. */
export const TRANSITIONS_TEXT =
  'Le confort nous rend-il plus libres ? Le développement de la copie modèle, avec ses deux transitions. '
  + 'Première partie. Le chauffage central, l’eau courante, la machine à laver : chacun de ces conforts a rendu des heures à la vie. Une famille qui ne passe plus sa journée de lundi à la lessive dispose de ce temps pour lire, sortir ou se reposer. Le confort a aussi rendu le corps plus libre : on vit plus longtemps et l’on se fatigue moins. Le confort nous a donc libérés de bien des contraintes ; reste à savoir à quel prix. '
  + 'Deuxième partie. Cette liberté a pourtant une contrepartie, que la première partie laissait dans l’ombre. Plus un confort est installé, moins on sait s’en passer : une panne de courant suffit à paralyser un immeuble entier. Le confort crée des besoins qu’il est seul à pouvoir satisfaire, et des gestes que plus personne ne sait faire. Si le confort libère le corps, il n’est pas certain qu’il libère l’esprit. '
  + 'Troisième partie. Faut-il alors renoncer au confort ? Ce serait oublier tout ce qu’il donne. La question devient plutôt celle de notre rapport à lui : un confort dont on peut se passer quelques jours reste une liberté ; un confort sans lequel on ne sait plus vivre devient une dépendance. '
  + 'Remarque d’Irène : dans le premier brouillon, la première transition disait « Passons maintenant à la deuxième partie », et la seconde « Après le confort, parlons maintenant de la liberté ». Elles changeaient de sujet sans dire ce qui avait été établi, ni pourquoi il fallait aller plus loin.';

/** Act 8: three conclusions to the same essay. */
export const CONCLUSIONS_TEXT =
  'Le confort nous rend-il plus libres ? Trois conclusions pour la même copie. '
  + 'CONCLUSION A. En conclusion, le confort a des avantages et des inconvénients. De plus, le confort coûte cher aux ménages, ce qui pose un vrai problème. Chacun doit donc se faire son opinion. Et vous, qu’en pensez-vous ? '
  + 'CONCLUSION B. Nous avons vu que le confort nous libère du froid, de la fatigue et de bien des corvées, mais qu’il crée aussi des besoins dont on ne sait plus se passer. Le confort est donc une liberté, mais aussi une dépendance. Seul l’avenir nous le dira. '
  + 'CONCLUSION C. Le confort a bien élargi nos libertés : il a rendu du temps à la vie et du repos au corps. Mais il a créé, dans le même mouvement, des dépendances que la moindre panne révèle. Il ne faut donc ni le célébrer sans réserve, ni le condamner : le confort ne nous rend libres que si nous restons capables de nous en passer. Reste à savoir si une société peut apprendre l’inconfort à ses enfants, et à quel âge. '
  + 'Note d’Irène : la conclusion A ajoute un argument nouveau, le coût, et se termine sur une question qui n’ouvre rien. La conclusion B fait le bilan, mais sa réponse se contente de juxtaposer les deux parties, et sa dernière phrase esquive. La conclusion C fait le bilan, répond à la problématique sans oublier la tension, puis ouvre une question que sa propre réponse fait naître.';

/** Act 9: the practice dossier on children’s boredom (three documents). */
export const DOSSIER_ENNUI_TEXT =
  'Dossier : l’ennui des enfants. Trois documents. '
  + 'DOCUMENT 1. Entretien avec Agnès Morvillier, psychologue, publié dans le bulletin de la Maison des savoirs. « Un enfant qui s’ennuie n’est pas un enfant en danger. L’ennui est souvent le moment où l’imagination se met en route : faute de programme, l’enfant invente le sien. Encore faut-il lui en laisser le temps. Les agendas d’enfants que je vois aujourd’hui sont pleins du lundi au samedi. Je ne dis pas qu’il faut supprimer les activités ; je dis qu’il faut garder des heures vides. » '
  + 'DOCUMENT 2. Tribune de Bruno Lacaze, père de trois enfants, dans le Courrier de Sorbevaux. « On fait aujourd’hui l’éloge de l’ennui. Je veux bien, mais qui l’a vécu sait que l’ennui d’un enfant de huit ans un mercredi pluvieux n’a rien de poétique : c’est une petite souffrance, qui finit souvent en dispute. Je préfère proposer à mes enfants une activité, un livre ou un jeu. Leur laisser le temps de s’ennuyer, c’est parfois leur laisser surtout le temps de tourner en rond. » '
  + 'DOCUMENT 3. Témoignage de Claire Dutertre, institutrice à l’école des Tilleuls. « Chaque année, je fais une expérience : vingt minutes sans consigne, le vendredi après-midi. Les premières semaines, certains élèves s’agitent ou me demandent quoi faire. Puis ils construisent, dessinent, inventent des jeux. Les plus inquiets au début sont souvent les plus inventifs à la fin. L’ennui ne dure pas, si on accepte de le traverser. »';

/** Act 10: two synthèses of the act 9 dossier. B is the model (200 to 240
 *  words, counted by the scratch harness). */
export const SYNTHESE_A_TEXT =
  'COPIE A. Le document 1 est un entretien avec une psychologue. Elle dit que l’ennui est le moment où l’imagination se met en route. Le document 2 dit le contraire : pour le père, c’est une petite souffrance, qui finit souvent en dispute. Le document 3 dit que les enfants inventent des jeux. Il est évident que l’ennui est une chance pour les enfants. Des études récentes montrent que les écrans font disparaître l’ennui. Heureusement, de plus en plus de parents le comprennent.';

export const SYNTHESE_B_TEXT =
  'COPIE B. Faut-il laisser les enfants s’ennuyer ? Trois documents interrogent la place de l’ennui dans la vie des enfants : l’entretien d’une psychologue, la tribune d’un père et le témoignage d’une institutrice. Ils se demandent si ce temps vide est une perte ou une ressource. '
  + 'Deux des trois documents voient dans l’ennui une étape utile. Selon la psychologue, l’ennui laisse à l’imagination le temps de se mettre en route : privé d’occupation imposée, l’enfant crée la sienne. L’institutrice le constate en classe : après une période d’agitation, ses élèves se mettent à construire et à inventer, et ce sont souvent les plus anxieux qui finissent par se montrer les plus créatifs. '
  + 'Ces deux auteures posent toutefois une condition : il faut accepter de traverser ce moment. La psychologue regrette des emplois du temps trop chargés et défend des plages libres, sans pour autant rejeter les activités. '
  + 'Pour le père de famille, en revanche, l’ennui reste une épreuve qu’il faut écourter. Il le décrit comme un malaise qui dégénère souvent en conflit et préfère proposer un livre, un jeu ou une occupation, de peur que ses enfants ne fassent que s’agiter sans but. '
  + 'Les documents s’opposent donc moins sur la nature de l’ennui que sur la manière d’y répondre : l’accompagner jusqu’à ce qu’il devienne fécond, ou l’abréger.';

/** Act 11: Nadia Chérif’s open letter (the model essay on another dossier). */
export const LETTRE_TEXT =
  'Lettre ouverte publiée dans le Courrier de Sorbevaux. Le dossier de départ : un article du Courrier sur la chaleur dans les cours d’école, le compte rendu d’un conseil d’école, et la lettre d’un enseignant qui craint l’entretien des arbres. '
  + 'Madame la Directrice, je vous écris au nom des parents de l’école des Tilleuls, dont je suis la représentante élue. Comme le rappelle l’article du Courrier, la cour est la plus chaude du quartier en été : en juin dernier, elle a été fermée trois après-midi, faute d’ombre. Nous vous proposons de la transformer en cour plantée, avec des arbres, un sol qui absorbe l’eau et des coins calmes. '
  + 'Ce projet ne relève pas du simple embellissement. Une cour plantée protège les enfants de la chaleur, et le compte rendu du dernier conseil d’école montre que les enseignants en ont fait leur première demande. Elle change aussi les jeux : là où le bitume réserve le centre au ballon, une cour variée laisse une place à ceux qui préfèrent parler, lire ou observer. '
  + 'On objectera que des arbres coûtent cher ; une cour qu’il faut fermer en juin coûte davantage. On objectera aussi, comme le fait un enseignant dans sa lettre, que l’entretien retombera sur l’équipe. L’inquiétude est légitime, et nous proposons que l’association des parents prenne en charge l’arrosage d’été, comme cela se fait déjà pour le potager. '
  + 'Je vous demande donc d’inscrire ce projet à l’ordre du jour du prochain conseil d’école. Nos enfants passent près de deux heures par jour dans cette cour : elle mérite qu’on la pense. '
  + 'Veuillez agréer, Madame la Directrice, l’expression de mes salutations distinguées. Nadia Chérif, représentante des parents d’élèves.';

/** Act 12, THE TASK DOSSIER. Printed twice: as the act’s reading, and
 *  inside the task brief (no `source` field on `task`). All figures are
 *  invented for the exercise, and the brief says so. */
export const DOSSIER_TEXT =
  'Dossier : l’avenir de la halle de Sorbevaux. Documents et chiffres inventés pour l’exercice. '
  + 'DOCUMENT 1. Article du Courrier de Sorbevaux. Construite à la fin du XIXe siècle, en brique et en fer, la halle du centre-ville est fermée depuis deux ans pour raisons de sécurité. La mairie hésite entre deux projets. Le premier propose une restauration à l’identique, pour quatre millions d’euros : la charpente et les vitres d’origine seraient refaites, et le marché alimentaire reviendrait le matin avec ses vingt-deux étals. Le second propose une transformation, pour cinq millions et demi : le marché du matin serait conservé, mais une mezzanine et des comptoirs de restauration ouvriraient la halle le soir, pour des concerts et des repas. Selon un sondage réalisé par le journal auprès de six cents lecteurs, une moitié des répondants préfère la restauration, un tiers la transformation, et les autres n’ont pas d’avis. Les plus de soixante ans choisissent surtout la restauration ; les moins de trente ans, la transformation. Avant sa fermeture, le marché attirait encore une clientèle fidèle le samedi, mais les étals restaient souvent vides en semaine. La décision sera prise après une consultation publique, au printemps. '
  + 'DOCUMENT 2. Tribune d’Inès Kerbrat, architecte, dans le Courrier. « Un monument où personne n’entre est un monument qui meurt. Avant sa fermeture, la halle n’ouvrait plus que trois matinées par semaine, et la moitié de ses étals étaient vides. La restaurer à l’identique, ce serait offrir un bel écrin à un marché qui s’éteint. Je défends la transformation, à une condition : que tout ajout soit réversible, et que la charpente reste visible. Une halle vivante le soir, c’est aussi une clientèle nouvelle pour les marchands du matin. D’autres villes ont fait ce pari, avec des fortunes diverses : là où les loyers des étals ont été protégés, le marché a survécu ; ailleurs, il a laissé la place aux bars. Tout dépend donc des règles que la mairie fixera. » '
  + 'DOCUMENT 3. Lettre de Gérard Pelletan, président de l’association « Les Amis de la halle », au maire. « Nous refusons que la halle devienne un lieu de sortie pour quelques soirées branchées. Ce bâtiment appartient à la mémoire de la ville, et son marché fait vivre des producteurs de la région. Une transformation ferait monter les loyers des étals, et les petits producteurs partiraient les premiers. Restaurer à l’identique, c’est respecter ceux qui ont fait la halle. Nous ne sommes pas contre toute nouveauté : un marché du soir, une fois par semaine, ne nous ferait pas peur. Mais ce sont les marchands qui doivent rester au centre du projet, pas les comptoirs. Que la mairie aide d’abord les marchands à revenir, par des loyers modérés et des horaires mieux adaptés, et la halle revivra. »';
