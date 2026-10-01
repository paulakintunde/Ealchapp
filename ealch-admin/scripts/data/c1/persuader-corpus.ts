// c1.08.l1 « Persuader » — the authored corpus, the imports, the anchor
// texts and the citation constants. DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md
// §1 (the workshop shape) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules
// of C1-BUILD-LOG.md (« What is different at C1 », decisions 17-19).
// Structural model: b2.23 (`../b2/argumentation-*`); C1 voice and file layout
// as c1.24 (`./analyse-presse-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons, c1.19 first, may import REFRAME from this
// file and quote it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID,
// THEME, LEVEL, E, ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   PERSUASION AT C1, TAUGHT JUDGE-FIRST: every move is shown with the
//   question « est-ce loyal ? », never as a recipe.
//
//     act 1   a speech that works too well (the problem); recap of b2.23,
//             b2.24, b2.26 act 9 and b2.16 by trail position
//     act 2   l’ethos: credibility built (competence bounded, interest
//             declared, limits admitted) or borrowed (prestige, flattery,
//             false unanimity)
//     act 3   le logos: reasons the audience can check; rule, cases,
//             consequences; the declared assumption
//     act 4   le pathos: emotion in proportion to the facts, or in their
//             place (fear, guilt, « votez avec votre cœur »)
//     act 5   authority vs expertise: the field, the name, the method, who
//             pays, the consensus
//     act 6   analogy as an argument: the shared feature the conclusion
//             depends on; answering an analogy with its disanalogy
//     act 7   framing and loaded wording IN ARGUMENT (the word that holds
//             the conclusion, gain / loss frames); press framing stays
//             c1.24’s and is cited
//     act 8   the rhetorical question, recognised AND produced
//     act 9   anaphore and gradation as persuasive figures
//     act 10  la prétérition
//     act 11  the pre-empted objection: « on m’objectera que… », the
//             strongest form, the true part conceded
//     act 12  the task: a 250 to 400 word plaidoyer that names its own moves
//             and answers one objection fairly
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recaps, never re-teaches):
//     - b2.23 « Argumenter » (« la leçon 23 du B2 »): thesis, argument and
//       example, concession then rebuttal, plans, the six fallacies
//       (generalisation, false cause, attack on the person, false dilemma,
//       straw man, slippery slope). Act 11 cites its straw man; act 10 its
//       false dilemma. Not re-taught.
//     - b2.24 « Lire de façon critique » (« la leçon 24 du B2 »): what a
//       text claims vs what it proves, the writer’s distance and interest
//       (« Qui a payé l’étude ? »). Act 5 cites it.
//     - b2.26 « Réunions et négociation » act 9 (« la leçon 26 du B2 »):
//       naming the objection before the other person, orally (« je sais ce
//       que tu vas me dire »). Act 11 goes past it in writing.
//     - b2.16 « La concession » (« la leçon 16 du B2 »): the concession
//       forms and their moods. Used, never re-taught.
//     - c1.24 « Analyser la presse » (« la leçon 24 du C1 », live): press
//       framing, loaded pairs, the neutral-word test. Act 7 cites it and
//       reuses its rows; this lesson takes framing into ARGUMENT only.
//     - c1.20 « Lire entre les lignes » (« la leçon 20 du C1 », live): the
//       presupposing question and irony in reading; what an analogy is
//       DOING in a text. Acts 6 and 8 cite it.
//     - c1.21 « Débats et entretiens » (« la leçon 21 du C1 », live): an
//       objection answered, by ear. Act 11 cites it.
//     - LEFT to unbuilt C1 lessons and never cited on screen: literary
//       effect of figures (c1.19), politeness formulas in speech (c1.06:
//       « loin de moi l’idée de », « sans vouloir », never used here).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-01 inside BEGIN TRANSACTION READ
//      ONLY … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `rhetorique`: range c1-c2, sub_themes ['persuader'] (wave 3
//     setup). 160 legacy c1 rows (.001-.160, all published, drills
//     {sentence, review}: none flashcard-able, none speakable), nothing at
//     or above .161 at any level before this lesson.
//
//  2. ID BLOCK: this lesson owns `fr.c1.rhetorique.1000` to `.1199` AND
//     NOTHING ELSE (ledger, C1-BUILD-LOG.md). Re-probed 2026-10-01: 0 rows
//     in 1000-1199 at any level. Used: .1000-.1177, 178 rows in twelve act
//     blocks (§G); .1174-.1177 sit in the act 4 block (added with the
//     listening). Nothing outside the block.
//
//  3. REUSED ROWS (§F). In seedPlusPacks(): b2.23, b2.24, b2.26, b2.16,
//     c1.20, c1.21 and c1.24 rows, and six legacy rhetorique rows (.005,
//     .020, .032, .092, .113, .141). PUBLISHED IN POSTGRES BUT ABSENT FROM
//     THE SEED CUT, carried in `PG_ROWS` with fr / en / drills copied
//     verbatim on 2026-10-01 (as c1.20’s PG_ROWS):
//       fr.c1.rhetorique.008   Votre remarque est juste, mais elle ne prouve rien.
//       fr.c1.rhetorique.065   Faut-il rappeler une telle évidence à chaque débat ?
//       fr.c1.rhetorique.094   Pour peu que la salle soit acquise, le moindre slogan passe pour un argument.
//       fr.c1.rhetorique.095   Faute d'un vrai contre-argument, il s'est contenté d'attaquer la personne plutôt que les idées.
//       fr.c1.rhetorique.127   Ce sont les faits qui parlent, pas moi.
//       fr.c1.rhetorique.136   C'est par la précision des exemples qu'un argument devient convaincant.
//       fr.c1.rhetorique.138   L'important, ce n'est pas de gagner, c'est de convaincre durablement.
//       fr.b2.litterature.074  l'anaphore     {flashcard, review}
//       fr.b2.litterature.063  le pathos      {flashcard, review}
//     DECISION 13 TYPOGRAPHY EDIT NEEDED AT IMPORT (straight ' to ’): .095,
//     .136, .138 and fr.b2.litterature.074. .065 and .113 carry « ? » after a
//     plain space (the house form in the seed; listed for the same pass).
//     .008, .094, .127 need no edit. Seed rows with a straight ' (b2.23
//     .1774, .1772; b2.16 .2013; c1.21 .1473, .1496) are printed only through
//     `src()` and never inside the scenario.
//
//  4. NO AUTHORED ROW TWINS A PUBLISHED ROW. Every `fr` folded (accents,
//     case, punctuation, apostrophes) and compared with all 62 786 Postgres
//     rows (scratch check, 2026-10-01). Reused instead of twinned:
//     « l’anaphore » (b2.litterature.074), « le pathos » (.063),
//     « Comparaison n’est pas raison. » (c1.discours-dexamen.1496), « Qui a payé l’étude ? »
//     (b2.strategies-de-comprehension.1409), « J’ai compris le texte ;
//     maintenant, je le juge. » (.1412).
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ after a vowel is written double: semaine suh-MENN, pleine
//     PLENN, domaine do-MENN, personne pehr-SONN, donne(rait) donn, nomme(nt)
//     NOMM, graine GRENN, se promène pro-MENN, prochaine pro-SHENN. Every
//     doubled consonant is really pronounced. No U+203F tie anywhere.
//
//  6. THE ANCHOR TEXTS IN §I ARE ORIGINAL, WRITTEN FOR THE LESSON (« texte
//     original écrit pour la leçon », decision 18): no historical speech, no
//     oratory, no quotation of any real person. Every person, place,
//     association and figure is invented: the town of Combelune, its
//     quartier des Tanneurs, rue des Tanneurs, rue de la Gare, école
//     Pasteur, piscine des Glycines, médiathèque, Radio Combelune; the
//     Atelier de la Clé, the collectif Gare à vélo, the association des
//     commerçants de la rue de la Gare, the Observatoire régional de la
//     lecture publique; Joëlle Marchetti, Armelle Quintin, Théo Lambrecht,
//     Hortense Vallier, Nadège Pellerin, Rémi Castagné, Samir Haddad, Gilles
//     Morvan, Maud Lefranc, Bastien Roux, Nora Benkirane. The « grand
//     champion de natation » of act 1 is unnamed on purpose (it is the
//     lesson’s example of an unverifiable authority). Low-heat topics only
//     (§A.8). No living politician, no party, no election beyond a
//     neighbourhood vote on a participatory budget.
//
//  7. FACT CHECK LIST (for the pre-review). Every claim about the REAL world
//     made anywhere in this lesson:
//       a. Aristotle, Rhetoric I.2 (1356a): three kinds of proof supplied by
//          speech, residing in the speaker’s character (ethos), in putting
//          the audience in a certain frame of mind (pathos), and in the
//          speech itself, by proving or seeming to prove (logos). Stated in
//          act 2’s card, sheet-preuves and term `ethos`; « IVe siècle avant
//          notre ère ». Aristotle’s three sources of the speaker’s
//          credibility (phronèsis, aretè, eunoia, Rhetoric II.1, 1378a)
//          rendered as « bon jugement (la prudence), vertu, bienveillance » in
//          sheet-preuves. No quotation; concepts only (decision 18).
//       b. Pierre Fontanier, nineteenth-century French grammarian, classified
//          the figures of speech (treatises of 1821 and 1827, later published
//          together as « Les Figures du discours »). Named once in
//          sheet-figures, concepts only.
//       c. Spelling: « ethos » (also written « éthos ») and « logos » are the
//          usual forms in French rhetoric; « pathos » is in every dictionary.
//          This lesson writes « l’ethos », « le logos », « le pathos ».
//       d. Definitions to check against Le Robert / TLFi: prétérition
//          (« figure par laquelle on déclare ne pas vouloir dire ce que l’on
//          dit néanmoins »), anaphore (repetition of a word or group at the
//          head of successive clauses or lines), gradation (a sequence of
//          terms in increasing, or decreasing, intensity), question
//          rhétorique / question oratoire, argument d’autorité, argument par
//          analogie.
//       e. « On oppose souvent convaincre (la raison) et persuader (les
//          sentiments) » (row .1010): the classical school distinction,
//          stated as a convention (« souvent »), not as a rule.
//       f. « Comparaison n’est pas raison » is a French proverb (row reused
//          from c1.21).
//       g. Gain / loss framing changes choices: one of the best-documented
//          framing effects in psychology (Tversky and Kahneman, Science,
//          1981). Act 7, stated without numbers or names on screen.
//       h. « Une question rhétorique négative affirme le plus souvent le
//          positif » (act 8): stated with « le plus souvent ».
//     QUOTATIONS: none. Every text and every line is original; all figures
//     are invented and internal to the lesson.
//
//  8. LOW-HEAT TOPICS ONLY, for Paul to approve: one neighbourhood’s
//     participatory budget (« budget participatif », 300 000 euros) and five
//     projects competing for it: a pool renovation (acts 1, 4, 10), a shared
//     garden on a car park (acts 2, 9, 10, 12), Sunday opening of the media
//     library (acts 5, 8, 12), a repair workshop (acts 3, 6), a covered bike
//     shelter at the station (acts 7, 8, 11, 12). No health, religion, crime
//     or party politics.
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
  id: 'c1.08',
  seq: 8,
  title: 'Rhetoric and Persuasion',
  sub: 'Persuader',
  canDo: 'Can recognise and use credibility, reasoning, emotion, authority, analogy, framing, the rhetorical question, anaphora, gradation, paralipsis and the pre-empted objection, judge whether each persuasive move is fair, and write a persuasive piece that names its own moves and answers an objection fairly',
  prereqUnitIds: ['b2.16', 'b2.23', 'b2.24', 'b2.26'],
} as const;

export const LESSON_ID = 'c1.08.l1';
export const THEME = 'rhetorique';
export const LEVEL = 'c1' as const;

/** ONE block, by the brief (sub-theme « persuader »). */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in words, read from the seed units (B2 and the live C1
 *  units carry their `seq`). A C1 surface is French: never a raw id on
 *  screen, always « la leçon N du B2 / C1 ».
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  const n = SEQ.get(unitId);
  if (n) return `la leçon ${n} du ${band.toUpperCase()}`;
  if (band === 'b1' || band === 'b2' || band === 'c1') throw new Error(`c1.08: ${unitId} is not in the seed`);
  return unitRef(unitId);
}

export const ARGU_UNIT = 'b2.23';
export const CRITIQUE_UNIT = 'b2.24';
export const NEGO_UNIT = 'b2.26';
export const CONCESSION_UNIT = 'b2.16';
export const PRESSE_UNIT = 'c1.24';
export const LIGNES_UNIT = 'c1.20';
export const DEBATS_UNIT = 'c1.21';

export const ARGU_REF = refFr(ARGU_UNIT);             // la leçon 23 du B2
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);     // la leçon 24 du B2
export const NEGO_REF = refFr(NEGO_UNIT);             // la leçon 26 du B2
export const CONCESSION_REF = refFr(CONCESSION_UNIT); // la leçon 16 du B2
export const PRESSE_REF = refFr(PRESSE_UNIT);         // la leçon 24 du C1
export const LIGNES_REF = refFr(LIGNES_UNIT);         // la leçon 20 du C1
export const DEBATS_REF = refFr(DEBATS_UNIT);         // la leçon 21 du C1

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B223_REFRAME } from '../b2/argumentation-corpus.ts';
export { REFRAME as B224_REFRAME } from '../b2/lecture-critique-corpus.ts';
export { REFRAME as B226_REFRAME } from '../b2/reunions-negociation-corpus.ts';
export { REFRAME as B216_REFRAME } from '../b2/concession-avancee-corpus.ts';
export { REFRAME as C124_REFRAME } from './analyse-presse-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE LAMP. A persuasive move held under a lamp: a solid object keeps its
 *  shape and casts a clear shadow; a cut-out that only worked in the dark
 *  goes thin and see-through. Naming a move aloud is turning on the lamp.
 *  A fair move still works once named (« je vous dis d’où je parle », « je
 *  prends l’objection dans sa forme la plus forte »); a trick stops working
 *  (« je ne dirai pas que… », « les experts sont unanimes »). The task asks
 *  the learner to turn the lamp on their own text.
 *
 *  It is NOT « rhetoric is manipulation »: acts 2, 3, 6, 9 and 11 each show
 *  a fair version of the move that persuades better than the trick. And it
 *  is NOT « avoid emotion and figures »: act 4 shows a fair appeal to
 *  emotion, act 9 a fair anaphora.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un procédé loyal résiste quand on le nomme.';
export const REFRAME_EN = 'A fair move still works once you name it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Persuader, c’est manipuler avec élégance.',
    why: 'Cynical and false where the lesson has to hold: Armelle’s declared interest (act 2), Théo’s checkable register (act 3) and Maud’s strongest-form objection (act 11) persuade precisely because they hide nothing. It would also turn the lesson into the manipulation manual the brief forbids.',
  },
  {
    text: 'Un bon argument n’a pas besoin de rhétorique.',
    why: 'False: every speech has an ethos and a form, and act 9’s fair anaphora carries three real facts. Refusing all rhetoric is still a rhetorical stance, and it leaves the learner unarmed against the unfair kind.',
  },
  {
    text: 'Ethos, logos, pathos : utilise les trois.',
    why: 'A recipe, not a judgement. It says nothing about the champion with no name (act 5), the guilt line (act 4) or the prétérition that insinuates (act 10), all of which « use the three ».',
  },
  {
    text: 'Prends position, prouve-la, et réponds à ceux qui pensent le contraire.',
    why: 'b2.23’s reframe, owned at B2 and quoted in act 1. It names the structure of an argument; this lesson judges the moves inside it.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from Postgres on 2026-10-01 and, where present, from
 *  seedPlusPacks(); its French is in the trailing comment. `NOT_DECK_ABLE`
 *  rows carry no `flashcard` drill (named, never released); `NOT_SPEAKABLE`
 *  adds the rows with no `voiceflash`, which a `practice` speak section may
 *  never name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const RH = (n: number) => `fr.c1.rhetorique.${String(n).padStart(3, '0')}`;

export const IMPORTED = {
  act1: [
    'fr.b2.opinions-et-avis.1611',               // Une opinion dit ce que tu penses ; un argument dit pourquoi.  (b2.23, flashcard only)
    'fr.b2.opinions-et-avis.1774',               // Critique l'idée, jamais la personne.  (b2.23, flashcard only)
    RH(95),                                      // Faute d'un vrai contre-argument, il s'est contenté d'attaquer la personne plutôt que les idées.  (Postgres only)
    'fr.b2.strategies-de-comprehension.1412',    // J’ai compris le texte ; maintenant, je le juge.  (b2.24)
    'fr.b2.affaires.1360',                       // Persuader, c’est répondre à l’objection avant qu’elle arrive.  (b2.26, flashcard only)
    'fr.b2.affaires.1343',                       // Olivier, je sais ce que tu vas me dire : l’atelier est déjà plein.  (b2.26)
    'fr.b2.connecteurs-logiques.2013',           // Je comprends votre colère ; il n'en reste pas moins que le quartier étouffe.  (b2.16)
  ],
  act2: [
    RH(141),                                     // S’il y a un point où je vous rejoins, c’est celui-là.
  ],
  act3: [
    RH(127),                                     // Ce sont les faits qui parlent, pas moi.  (Postgres only)
    RH(136),                                     // C'est par la précision des exemples qu'un argument devient convaincant.  (Postgres only)
    RH(92),                                      // En admettant que les chiffres soient exacts, la conclusion ne s’impose pas forcément.
  ],
  act4: [
    'fr.b2.litterature.063',                     // le pathos  (Postgres only)
    RH(94),                                      // Pour peu que la salle soit acquise, le moindre slogan passe pour un argument.  (Postgres only)
  ],
  act5: [
    'fr.b2.strategies-de-comprehension.1409',    // Qui a payé l’étude ?  (b2.24)
  ],
  act6: [
    'fr.c1.discours-dexamen.1496',               // Comparaison n'est pas raison.  (c1.21)
    'fr.c1.strategies-de-comprehension.1906',    // Une analogie compare un trait, jamais tout.  (c1.20, flashcard only)
    RH(5),                                       // Sans doute, mais votre conclusion va trop loin.
  ],
  act7: [
    'fr.c1.strategies-de-comprehension.2131',    // Remplace le mot chargé par un mot neutre : regarde ce qui reste.  (c1.24, flashcard only)
    'fr.c1.strategies-de-comprehension.2152',    // Le cadrage n’est pas un mensonge, c’est un choix.  (c1.24)
  ],
  act8: [
    RH(113),                                     // Si la mesure est aussi efficace qu’on le prétend, pourquoi aucun des pays voisins ne l’a-t-il encore adoptée ?
    RH(65),                                      // Faut-il rappeler une telle évidence à chaque débat ?  (Postgres only)
  ],
  act9: [
    'fr.b2.litterature.074',                     // l'anaphore  (Postgres only)
  ],
  act10: [] as string[],
  act11: [
    'fr.c1.discours-dexamen.1473',               // On m'objectera que les gens ne rapporteront pas leurs bouteilles.  (c1.21)
    RH(20),                                      // Votre objection se tient, sauf qu’elle ignore complètement le principal intéressé.
    RH(32),                                      // La réforme part d’une bonne intention, je le concède, mais l’intention ne suffit pas.
    RH(8),                                       // Votre remarque est juste, mais elle ne prouve rien.  (Postgres only)
    'fr.b2.opinions-et-avis.1772',               // l'homme de paille  (b2.23)
  ],
  act12: [
    RH(138),                                     // L'important, ce n'est pas de gagner, c'est de convaincre durablement.  (Postgres only)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied VERBATIM on 2026-10-01 (straight apostrophes kept: the decision 13
 *  edit happens at import), so `src()` can print them. */
export const PG_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: RH(8), fr: 'Votre remarque est juste, mais elle ne prouve rien.', en: 'Your point is fair, but it proves nothing.', drills: ['sentence', 'review'] },
  { id: RH(65), fr: 'Faut-il rappeler une telle évidence à chaque débat ?', en: 'Do we have to restate something so obvious at every debate?', drills: ['sentence', 'review'] },
  { id: RH(94), fr: 'Pour peu que la salle soit acquise, le moindre slogan passe pour un argument.', en: 'As long as the room is already won over, the flimsiest slogan passes for an argument.', drills: ['sentence', 'review'] },
  { id: RH(95), fr: "Faute d'un vrai contre-argument, il s'est contenté d'attaquer la personne plutôt que les idées.", en: 'Lacking a real counterargument, he settled for attacking the person rather than the ideas.', drills: ['sentence', 'review'] },
  { id: RH(127), fr: 'Ce sont les faits qui parlent, pas moi.', en: 'It is the facts talking, not me.', drills: ['sentence', 'review'] },
  { id: RH(136), fr: "C'est par la précision des exemples qu'un argument devient convaincant.", en: 'It is through precise examples that an argument becomes convincing.', drills: ['sentence', 'review'] },
  { id: RH(138), fr: "L'important, ce n'est pas de gagner, c'est de convaincre durablement.", en: 'What matters is not winning, it is convincing people for the long term.', drills: ['sentence', 'review'] },
  { id: 'fr.b2.litterature.074', fr: "l'anaphore", en: 'the anaphora (rhetorical repetition)', drills: ['flashcard', 'review'] },
  { id: 'fr.b2.litterature.063', fr: 'le pathos', en: 'pathos', drills: ['flashcard', 'review'] },
];

/** No `flashcard` drill: nameable, never releasable. The legacy rhetorique
 *  rows carry {sentence, review} only. */
export const NOT_DECK_ABLE: string[] = [RH(5), RH(8), RH(20), RH(32), RH(65), RH(92), RH(94), RH(95), RH(113), RH(127), RH(136), RH(138), RH(141)];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = [
  ...NOT_DECK_ABLE,
  'fr.b2.opinions-et-avis.1611',                 // flashcard only
  'fr.b2.opinions-et-avis.1774',                 // flashcard only
  'fr.b2.affaires.1360',                         // flashcard only
  'fr.c1.strategies-de-comprehension.1906',      // flashcard only
  'fr.c1.strategies-de-comprehension.2131',      // flashcard only
  'fr.b2.litterature.063',                       // flashcard, review
  'fr.b2.litterature.074',                       // flashcard, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: a line met in a speech or
 *  a leaflet, a question a listener asks a speaker, or a line the learner
 *  can reuse in the plaidoyer. Unfair moves are grammatical French tagged
 *  `contre-exemple` with drills ['review'] only: recognised, never produced
 *  as a model. Each act has one flashcard-only rule card (`rule()`), whose
 *  prompt is a situation and whose `fr` is the act’s move.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];
/** Unfair moves: recognised, never produced, never spoken as a model. */
const RECO = ['review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['persuader'], ...extra,
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

/* ── ACT 1 · LE DISCOURS QUI MARCHE TROP BIEN ───────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Elle nous a tous émus : votons pour la piscine.', 'She moved us all: let’s vote for the pool.', '/ɛl nu.za tus e.my vɔ.tɔ̃ puʁ la pi.sin/', 'ehl noo-za TOOSS ay-MÜ vo-tohⁿ poor la pee-SEEN', ['scene', 'naif', 'contre-exemple'], RECO),
  sent(1001, 'Elle a deux vraies raisons ; le reste tient à l’émotion.', 'She has two real reasons; the rest comes down to emotion.', '/ɛ.la dø vʁɛ ʁɛ.zɔ̃ lə ʁɛst tjɛ̃ a le.mo.sjɔ̃/', 'eh-la deu vreh reh-ZOHⁿ luh REST tyehⁿ a lay-mo-SYOHⁿ', ['scene', 'tri']),
  sent(1002, 'Un discours qui émeut ne prouve pas forcément.', 'A speech that moves you does not necessarily prove anything.', '/œ̃ dis.kuʁ ki e.mø nə pʁuv pa fɔʁ.se.mɑ̃/', 'uhⁿ dees-KOOR kee ay-MEU nuh proov pa for-say-MAHⁿ', ['regle'], FCVDR),
  sent(1003, 'Que veut-on me faire croire, et par quels moyens ?', 'What am I being led to believe, and by what means?', '/kə vø.tɔ̃ mə fɛʁ kʁwaʁ e paʁ kɛl mwa.jɛ̃/', 'kuh veu-TOHⁿ muh fehr KRWAR ay par kel mwa-YEHⁿ', ['question']),
  sent(1004, 'Ce procédé tiendrait-il si on le nommait ?', 'Would this device still hold if it were named?', '/sə pʁɔ.se.de tjɛ̃.dʁɛ.til si ɔ̃ lə nɔ.mɛ/', 'suh pro-say-DAY tyehⁿ-dreh-TEEL see ohⁿ luh no-MEH', ['question', 'test'], FCVDR),
  sent(1005, REFRAME, REFRAME_EN, '/œ̃ pʁɔ.se.de lwa.jal ʁe.zist kɑ̃.tɔ̃ lə nɔm/', 'uhⁿ pro-say-day lwa-YAL ray-ZEEST kahⁿ-tohⁿ luh NOMM', ['regle', 'reframe'], FC,
    rule('Un discours t’a ému. Comment savoir s’il était loyal ?', 'Nomme chaque procédé à voix haute. Un procédé loyal résiste quand on le nomme ; celui qui triche ne marche plus une fois nommé.')),
  sent(1006, 'Le champion n’a pas de nom : impossible de vérifier ce qu’il a dit.', 'The champion has no name: impossible to check what he said.', '/lə ʃɑ̃.pjɔ̃ na pa də nɔ̃ ɛ̃.pɔ.sibl də ve.ʁi.fje sə ki.la di/', 'luh shahⁿ-PYOHⁿ na pa duh NOHⁿ ehⁿ-po-SEEBL duh vay-ree-FYAY suh kee-la DEE', ['autorite']),
  sent(1007, 'Quarante minutes de car : voilà une raison qu’on peut vérifier.', 'Forty minutes by coach: there is a reason one can check.', '/ka.ʁɑ̃t mi.nyt də kaʁ vwa.la yn ʁɛ.zɔ̃ kɔ̃ pø ve.ʁi.fje/', 'ka-rahⁿt mee-NÜT duh KAR vwa-la ün reh-ZOHⁿ kohⁿ peu vay-ree-FYAY', ['logos']),
  sent(1008, 'Avant de voter, je sépare les raisons des procédés.', 'Before voting, I separate the reasons from the devices.', '/a.vɑ̃ də vɔ.te ʒə se.paʁ le ʁɛ.zɔ̃ de pʁɔ.se.de/', 'a-vahⁿ duh vo-TAY zhuh say-PAR lay reh-zohⁿ day pro-say-DAY', ['methode'], FCVDR),
  phrase(1009, 'un procédé rhétorique', 'a rhetorical device', '/œ̃ pʁɔ.se.de ʁe.tɔ.ʁik/', 'uhⁿ pro-say-DAY ray-to-REEK', ['mot']),
  sent(1010, 'On oppose souvent convaincre, qui vise la raison, à persuader, qui touche aussi le cœur.', 'Convincing, aimed at reason, is often set against persuading, which also touches the heart.', '/ɔ̃.nɔ.pɔz su.vɑ̃ kɔ̃.vɛ̃kʁ ki viz la ʁɛ.zɔ̃ a pɛʁ.sɥa.de ki tuʃ o.si lə kœʁ/', 'oh-no-POZ soo-VAHⁿ kohⁿ-VEHⁿKR kee veez la reh-ZOHⁿ a pehr-swa-DAY kee toosh oh-see luh KUHR', ['mot', 'distinction']),
  sent(1011, 'Un bon discours peut émouvoir et prouver à la fois.', 'A good speech can move and prove at the same time.', '/œ̃ bɔ̃ dis.kuʁ pø e.mu.vwaʁ e pʁu.ve a la fwa/', 'uhⁿ bohⁿ dees-KOOR peu ay-moo-VWAR ay proo-VAY a la FWA', ['regle']),
];

/* ── ACT 2 · L’ETHOS ─────────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1012, 'Je jardine depuis douze ans dans les bacs de l’école Pasteur.', 'I have been gardening for twelve years in the planters of the Pasteur school.', '/ʒə ʒaʁ.din də.pɥi du.zɑ̃ dɑ̃ le bak də le.kɔl pas.tœʁ/', 'zhuh zhar-DEEN duh-pwee doo-ZAHⁿ dahⁿ lay BAK duh lay-kol pas-TUHR', ['ethos', 'competence']),
  sent(1013, 'J’habite à trente mètres du parking : j’en profiterai la première.', 'I live thirty metres from the car park: I will be the first to benefit.', '/ʒa.bit a tʁɑ̃t mɛtʁ dy paʁ.kiŋ ʒɑ̃ pʁɔ.fi.tʁe la pʁə.mjɛʁ/', 'zha-BEET a trahⁿt METR dü par-KEENG zhahⁿ pro-fee-TRAY la pruh-MYEHR', ['ethos', 'interet']),
  sent(1014, 'Je n’ai pas chiffré l’arrosage ; les services techniques le feront.', 'I have not costed the watering; the technical services will do it.', '/ʒə ne pa ʃi.fʁe la.ʁo.zaʒ le sɛʁ.vis tɛk.nik lə fə.ʁɔ̃/', 'zhuh neh pa shee-FRAY la-ro-ZAZH lay sehr-vees tek-NEEK luh fuh-ROHⁿ', ['ethos', 'limite']),
  sent(1015, 'Venez voir les bacs samedi, et jugez sur pièces.', 'Come and see the planters on Saturday, and judge for yourselves.', '/və.ne vwaʁ le bak sam.di e ʒy.ʒe syʁ pjɛs/', 'vuh-nay vwar lay BAK sam-DEE ay zhü-zhay sür PYESS', ['ethos', 'verifier'], FCVDR),
  sent(1016, 'Quarante-trois voisins ont signé, pas tout le quartier.', 'Forty-three neighbours signed, not the whole neighbourhood.', '/ka.ʁɑ̃t.tʁwa vwa.zɛ̃ ɔ̃ si.ɲe pa tu lə kaʁ.tje/', 'ka-rahⁿt-TRWA vwa-ZEHⁿ ohⁿ see-NYAY pa too luh kar-TYAY', ['ethos', 'exactitude']),
  sent(1017, 'L’ethos se gagne en disant d’où l’on parle, sans se grandir.', 'Ethos is earned by saying where you speak from, without inflating yourself.', '/le.tɔs sə ɡaɲ ɑ̃ di.zɑ̃ du lɔ̃ paʁl sɑ̃ sə ɡʁɑ̃.diʁ/', 'lay-TOSS suh GANY ahⁿ dee-zahⁿ doo lohⁿ PARL sahⁿ suh grahⁿ-DEER', ['regle', 'ethos'], FC,
    rule('Une oratrice se présente avant d’argumenter. À quoi cela sert-il ?', 'À établir la confiance : elle dit sa compétence, ses limites et son intérêt. L’ethos se gagne en disant d’où l’on parle, sans se grandir.')),
  phrase(1018, 'l’ethos de l’orateur', 'the speaker’s ethos, the trust the speaker inspires', '/le.tɔs də lɔ.ʁa.tœʁ/', 'lay-toss duh lo-ra-TUHR', ['mot', 'ethos']),
  sent(1019, 'En tant que mère de famille, je sais ce qui est bon pour la ville.', 'As a mother, I know what is good for the town.', '/ɑ̃ tɑ̃ kə mɛʁ də fa.mij ʒə sɛ sə ki ɛ bɔ̃ puʁ la vil/', 'ahⁿ tahⁿ kuh mehr duh fa-MEEY zhuh SEH suh kee eh BOHⁿ poor la VEEL', ['ethos', 'emprunte', 'contre-exemple'], RECO),
  sent(1020, 'Vous êtes bien trop avisés pour écouter mes adversaires.', 'You are far too wise to listen to my opponents.', '/vu.zɛt bjɛ̃ tʁo.pa.vi.ze puʁ e.ku.te me.zad.vɛʁ.sɛʁ/', 'voo-ZET byehⁿ troh-pa-vee-ZAY poor ay-koo-TAY may-zad-vehr-SEHR', ['ethos', 'flatterie', 'contre-exemple'], RECO),
  sent(1021, 'Je travaille pour l’entreprise qui fabriquerait l’abri ; je préfère vous le dire.', 'I work for the company that would build the shelter; I prefer to tell you.', '/ʒə tʁa.vaj puʁ lɑ̃.tʁə.pʁiz ki fa.bʁi.kʁɛ la.bʁi ʒə pʁe.fɛʁ vu lə diʁ/', 'zhuh tra-VAHY poor lahⁿ-truh-PREEZ kee fa-bree-kreh la-BREE zhuh pray-FEHR voo luh DEER', ['ethos', 'interet']),
  sent(1022, 'Sur le coût, fiez-vous au rapport des services techniques, pas à moi.', 'On the cost, trust the technical services’ report, not me.', '/syʁ lə ku fje.vu o ʁa.pɔʁ de sɛʁ.vis tɛk.nik pa.za mwa/', 'sür luh KOO fyay-VOO oh ra-POR day sehr-vees tek-NEEK pa-za MWA', ['ethos', 'limite']),
  sent(1023, 'Tout le quartier est derrière moi.', 'The whole neighbourhood is behind me.', '/tu lə kaʁ.tje ɛ dɛ.ʁjɛʁ mwa/', 'too luh kar-TYAY eh deh-ryehr MWA', ['ethos', 'unanimite', 'contre-exemple'], RECO),
  sent(1024, 'Se rendre crédible, ce n’est pas se grandir.', 'Making yourself credible is not making yourself bigger.', '/sə ʁɑ̃dʁ kʁe.dibl sə nɛ pa sə ɡʁɑ̃.diʁ/', 'suh rahⁿdr kray-DEEBL suh neh pa suh grahⁿ-DEER', ['regle', 'ethos'], FCVDR),
  sent(1025, 'Avant de vous convaincre, je vous dis d’où je parle.', 'Before convincing you, I tell you where I am speaking from.', '/a.vɑ̃ də vu kɔ̃.vɛ̃kʁ ʒə vu di du ʒə paʁl/', 'a-vahⁿ duh voo kohⁿ-VEHⁿKR zhuh voo dee doo zhuh PARL', ['plaidoyer', 'ethos']),
];

/* ── ACT 3 · LE LOGOS ────────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1026, 'Sur 412 objets apportés, 287 ont été réparés, soit sept sur dix.', 'Of 412 objects brought in, 287 were repaired, that is seven in ten.', '/syʁ katʁ sɑ̃ duz ɔb.ʒɛ a.pɔʁ.te dø sɑ̃ ka.tʁə.vɛ̃.sɛt ɔ̃.te.te ʁe.pa.ʁe swa sɛt syʁ dis/', 'sür katr sahⁿ DOOZ ob-ZHEH a-por-TAY deu sahⁿ ka-truh-vehⁿ-SET ohⁿ-tay-tay ray-pa-RAY swa set sür DEESS', ['logos', 'chiffre']),
  sent(1027, 'Un objet réparé est un objet qu’on ne rachète pas.', 'A repaired object is an object you do not buy again.', '/œ̃.nɔb.ʒɛ ʁe.pa.ʁe ɛ.tœ̃.nɔb.ʒɛ kɔ̃ nə ʁa.ʃɛt pa/', 'uhⁿ-nob-zheh ray-pa-RAY eh-tuhⁿ-nob-ZHEH kohⁿ nuh ra-shet PA', ['logos', 'regle-generale'], FCVDR),
  sent(1028, 'Si l’on retient quarante euros par appareil, l’économie dépasse onze mille euros.', 'If we take forty euros per appliance, the saving exceeds eleven thousand euros.', '/si lɔ̃ ʁə.tjɛ̃ ka.ʁɑ̃.tø.ʁo paʁ a.pa.ʁɛj le.kɔ.nɔ.mi de.pas ɔ̃z mil ø.ʁo/', 'see lohⁿ ruh-TYEHⁿ ka-rahⁿ-teu-ROH par a-pa-REHY lay-ko-no-MEE day-PASS ohⁿz meel eu-ROH', ['logos', 'hypothese']),
  sent(1029, 'Nous ne savons pas encore de combien la facture baissera.', 'We do not yet know by how much the bill will fall.', '/nu nə sa.vɔ̃ pa.zɑ̃.kɔʁ də kɔ̃.bjɛ̃ la fak.tyʁ bɛ.sə.ʁa/', 'noo nuh sa-vohⁿ pa-zahⁿ-KOR duh kohⁿ-BYEHⁿ la fak-TÜR beh-suh-RA', ['logos', 'limite']),
  sent(1030, 'Notre registre est en annexe : chacun peut le recompter.', 'Our register is in the appendix: anyone can count it again.', '/nɔtʁ ʁə.ʒistʁ ɛ.tɑ̃.na.nɛks ʃa.kœ̃ pø lə ʁə.kɔ̃.te/', 'notr ruh-ZHEESTR eh-tahⁿ-na-NEKS sha-KUHⁿ peu luh ruh-kohⁿ-TAY', ['logos', 'verifier'], FCVDR),
  sent(1031, 'Les chiffres ne parlent pas tout seuls, mais ils peuvent être vérifiés.', 'Figures do not speak for themselves, but they can be checked.', '/le ʃifʁ nə paʁl pa tu sœl mɛ il pœv ɛtʁ ve.ʁi.fje/', 'lay SHEEFR nuh parl pa too SUHL meh eel puhv ehtr vay-ree-FYAY', ['logos', 'regle'], FCVDR),
  sent(1032, 'Le logos, ce sont les raisons que l’auditoire peut vérifier.', 'Logos is the reasons the audience can check.', '/lə lɔ.ɡɔs sə sɔ̃ le ʁɛ.zɔ̃ kə lo.di.twaʁ pø ve.ʁi.fje/', 'luh lo-GOSS suh sohⁿ lay reh-ZOHⁿ kuh loh-dee-TWAR peu vay-ree-FYAY', ['regle', 'logos'], FC,
    rule('Un orateur avance un chiffre. Que demandes-tu d’abord ?', 'D’où il vient et sur quelle base il repose. Le logos, ce sont les raisons que l’auditoire peut vérifier.')),
  sent(1033, 'La médiathèque est pleine le samedi ; elle le sera donc le dimanche.', 'The media library is full on Saturdays; so it will be on Sundays.', '/la me.dja.tɛk ɛ plɛn lə sam.di ɛl lə sə.ʁa dɔ̃k lə di.mɑ̃ʃ/', 'la may-dya-TEK eh PLENN luh sam-DEE ehl luh suh-RA dohⁿk luh dee-MAHⁿSH', ['logos', 'induction-hative', 'contre-exemple'], RECO),
  sent(1034, 'La piscine est vieille, donc elle est dangereuse.', 'The pool is old, so it is dangerous.', '/la pi.sin ɛ vjɛj dɔ̃k ɛ.lɛ dɑ̃ʒ.ʁøz/', 'la pee-SEEN eh VYEHY dohⁿk eh-leh dahⁿzh-REUZ', ['logos', 'lien-absent', 'contre-exemple'], RECO),
  sent(1035, 'Une déduction va de la règle au cas ; une induction, des cas à la règle.', 'A deduction goes from the rule to the case; an induction, from cases to the rule.', '/yn de.dyk.sjɔ̃ va də la ʁɛɡl o ka yn ɛ̃.dyk.sjɔ̃ de ka a la ʁɛɡl/', 'ün day-dük-SYOHⁿ va duh la REGL oh KA ün ehⁿ-dük-SYOHⁿ day KA a la REGL', ['regle', 'logos'], FC,
    rule('« Sept objets sur dix ont été réparés : l’atelier sait réparer la plupart des objets. » Quel chemin ?', 'Des cas à la règle : une induction. Elle vaut ce que vaut l’échantillon. Une déduction va de la règle au cas.')),
  sent(1036, 'Ce chiffre repose sur une hypothèse, et je vous la donne.', 'This figure rests on an assumption, and I am giving it to you.', '/sə ʃifʁ ʁə.poz syʁ y.ni.pɔ.tɛz e ʒə vu la dɔn/', 'suh SHEEFR ruh-POZ sür ü-nee-po-TEZ ay zhuh voo la DONN', ['logos', 'hypothese']),
  sent(1037, 'Ouvert trois jours par semaine, l’atelier devrait réparer bien davantage.', 'Open three days a week, the workshop should repair far more.', '/u.vɛʁ tʁwa ʒuʁ paʁ sə.mɛn la.tə.lje də.vʁɛ ʁe.pa.ʁe bjɛ̃ da.vɑ̃.taʒ/', 'oo-vehr trwa zhoor par suh-MENN la-tuh-LYAY duh-VREH ray-pa-RAY byehⁿ da-vahⁿ-TAZH', ['logos', 'consequence']),
  phrase(1038, 'un raisonnement par les conséquences', 'an argument from consequences', '/œ̃ ʁɛ.zɔn.mɑ̃ paʁ le kɔ̃.se.kɑ̃s/', 'uhⁿ reh-zonn-MAHⁿ par lay kohⁿ-say-KAHⁿSS', ['mot', 'logos']),
  sent(1039, 'Une raison vaut ce que vaut sa preuve.', 'A reason is worth what its proof is worth.', '/yn ʁɛ.zɔ̃ vo sə kə vo sa pʁœv/', 'ün reh-ZOHⁿ voh suh kuh voh sa PRUHV', ['plaidoyer', 'logos'], FCVDR),
];

/* ── ACT 4 · LE PATHOS ───────────────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1040, 'Imaginez un enfant de huit ans, debout au bord du grand bassin.', 'Picture an eight-year-old child, standing at the edge of the big pool.', '/i.ma.ʒi.ne œ̃.nɑ̃.fɑ̃ də ɥi.tɑ̃ də.bu o bɔʁ dy ɡʁɑ̃ ba.sɛ̃/', 'ee-ma-zhee-NAY uhⁿ-nahⁿ-FAHⁿ duh wee-TAHⁿ duh-BOO oh bor dü grahⁿ ba-SEHⁿ', ['pathos', 'radio']),
  sent(1041, 'Il a peur, et il a raison : il ne sait pas nager.', 'He is scared, and he is right to be: he cannot swim.', '/i.la pœʁ e i.la ʁɛ.zɔ̃ il nə sɛ pa na.ʒe/', 'ee-la PUHR ay ee-la reh-ZOHⁿ eel nuh seh pa na-ZHAY', ['pathos', 'radio']),
  sent(1042, 'Savoir nager, ce n’est pas un loisir : c’est ce qui protège un enfant au bord de l’eau.', 'Knowing how to swim is not a hobby: it is what protects a child at the water’s edge.', '/sa.vwaʁ na.ʒe sə nɛ pa.zœ̃ lwa.ziʁ sɛ sə ki pʁɔ.tɛʒ œ̃.nɑ̃.fɑ̃ o bɔʁ də lo/', 'sa-vwar na-ZHAY suh neh pa-zuhⁿ lwa-ZEER seh suh kee pro-TEZH uhⁿ-nahⁿ-FAHⁿ oh bor duh LOH', ['pathos', 'radio', 'loyal']),
  sent(1043, 'Si la piscine ferme, nos enfants grandiront sans savoir nager.', 'If the pool closes, our children will grow up without knowing how to swim.', '/si la pi.sin fɛʁm no.zɑ̃.fɑ̃ ɡʁɑ̃.di.ʁɔ̃ sɑ̃ sa.vwaʁ na.ʒe/', 'see la pee-seen FEHRM noh-zahⁿ-FAHⁿ grahⁿ-dee-ROHⁿ sahⁿ sa-vwar na-ZHAY', ['pathos', 'radio', 'exageration', 'contre-exemple'], RECO),
  sent(1044, 'Les vestiaires sont froids, et les plus âgés n’osent plus venir.', 'The changing rooms are cold, and the oldest no longer dare come.', '/le vɛs.tjɛʁ sɔ̃ fʁwa e le ply.za.ʒe noz ply və.niʁ/', 'lay ves-TYEHR sohⁿ FRWA ay lay plü-za-ZHAY noz plü vuh-NEER', ['pathos', 'radio', 'fait']),
  sent(1045, 'Quarante minutes de car, pour vingt minutes dans l’eau.', 'Forty minutes on the coach, for twenty minutes in the water.', '/ka.ʁɑ̃t mi.nyt də kaʁ puʁ vɛ̃ mi.nyt dɑ̃ lo/', 'ka-rahⁿt mee-nüt duh KAR poor vehⁿ mee-nüt dahⁿ LOH', ['pathos', 'radio', 'fait']),
  sent(1046, 'Pensez à vos petits-enfants, pensez à leurs étés.', 'Think of your grandchildren, think of their summers.', '/pɑ̃.se a vo pə.ti.zɑ̃.fɑ̃ pɑ̃.se a lœʁ.ze.te/', 'pahⁿ-say a voh puh-tee-zahⁿ-FAHⁿ pahⁿ-say a luhr-zay-TAY', ['pathos', 'radio']),
  sent(1047, 'Vous ne voudriez pas avoir à vous le reprocher un jour.', 'You would not want to have to blame yourselves for it one day.', '/vu nə vu.dʁi.je pa a.vwaʁ a vu lə ʁə.pʁɔ.ʃe œ̃ ʒuʁ/', 'voo nuh voo-dree-YAY pa a-vwar a voo luh ruh-pro-SHAY uhⁿ ZHOOR', ['pathos', 'radio', 'culpabilite', 'contre-exemple'], RECO),
  sent(1048, 'Je ne vous demande pas de pleurer, je vous demande de compter.', 'I am not asking you to cry, I am asking you to count.', '/ʒə nə vu də.mɑ̃d pa də plœ.ʁe ʒə vu də.mɑ̃d də kɔ̃.te/', 'zhuh nuh voo duh-mahⁿd pa duh pluh-RAY zhuh voo duh-mahⁿd duh kohⁿ-TAY', ['pathos', 'radio', 'loyal'], FCVDR),
  sent(1049, 'Votez avec votre cœur, et vous voterez juste.', 'Vote with your heart, and you will vote right.', '/vɔ.te a.vɛk vɔtʁ kœʁ e vu vɔt.ʁe ʒyst/', 'vo-tay a-vek votr KUHR ay voo vot-ray ZHÜST', ['pathos', 'radio', 'contre-exemple'], RECO),
  sent(1050, 'Le pathos est loyal quand l’émotion est à la mesure des faits.', 'Pathos is fair when the emotion matches the facts.', '/lə pa.tɔs ɛ lwa.jal kɑ̃ le.mo.sjɔ̃ ɛ.ta la mə.zyʁ de fɛ/', 'luh pa-TOSS eh lwa-YAL kahⁿ lay-mo-SYOHⁿ eh-ta la muh-ZÜR day FEH', ['regle', 'pathos'], FC,
    rule('Un orateur te fait peur pour ton enfant. Comment juger ?', 'Regarde si la peur est à la mesure des faits, et si elle te conduit vers eux. Le pathos est loyal quand l’émotion est à la mesure des faits.')),
  sent(1051, 'Une émotion juste conduit aux faits ; une émotion qui triche les remplace.', 'A fair emotion leads to the facts; a cheating emotion replaces them.', '/y.ne.mo.sjɔ̃ ʒyst kɔ̃.dɥi o fɛ y.ne.mo.sjɔ̃ ki tʁiʃ le ʁɑ̃.plas/', 'ü-nay-mo-SYOHⁿ ZHÜST kohⁿ-dwee oh FEH ü-nay-mo-SYOHⁿ kee TREESH lay rahⁿ-PLASS', ['regle', 'pathos'], FCVDR),
  sent(1052, 'Sans cet abri, vos enfants risqueront leur vie chaque matin.', 'Without this shelter, your children will risk their lives every morning.', '/sɑ̃ sɛ.ta.bʁi vo.zɑ̃.fɑ̃ ʁis.kə.ʁɔ̃ lœʁ vi ʃak ma.tɛ̃/', 'sahⁿ seh-ta-BREE voh-zahⁿ-FAHⁿ rees-kuh-ROHⁿ luhr VEE shak ma-TEHⁿ', ['pathos', 'peur', 'contre-exemple'], RECO),
  sent(1053, 'Le dimanche, des collégiens n’ont nulle part où travailler au calme.', 'On Sundays, some secondary pupils have nowhere to work in peace.', '/lə di.mɑ̃ʃ de kɔ.le.ʒjɛ̃ nɔ̃ nyl paʁ u tʁa.va.je o kalm/', 'luh dee-MAHⁿSH day ko-lay-ZHYEHⁿ nohⁿ nül PAR oo tra-va-YAY oh KALM', ['pathos', 'loyal']),
  sent(1054, 'Une mère m’a dit qu’elle révisait avec son fils à la médiathèque, faute de place chez elle.', 'A mother told me she revised with her son at the media library, for lack of room at home.', '/yn mɛʁ ma di kɛl ʁe.vi.zɛ a.vɛk sɔ̃ fis a la me.dja.tɛk fot də plas ʃe.zɛl/', 'ün MEHR ma DEE kel ray-vee-ZEH a-vek sohⁿ FEESS a la may-dya-TEK foht duh PLASS shay-ZEL', ['pathos', 'temoignage', 'loyal']),
  sent(1174, 'Bonjour, ici Joëlle Marchetti, maître-nageuse à la piscine des Glycines.', 'Hello, this is Joëlle Marchetti, swimming instructor at the Glycines pool.', '/bɔ̃.ʒuʁ i.si ʒɔ.ɛl maʁ.kɛ.ti mɛ.tʁə.na.ʒøz a la pi.sin de ɡli.sin/', 'bohⁿ-ZHOOR ee-SEE zho-EL mar-keh-TEE meh-truh-na-ZHEUZ a la pee-SEEN day glee-SEEN', ['pathos', 'radio']),
  sent(1175, 'Depuis vingt-deux ans, j’apprends aux enfants de Combelune à ne plus avoir peur de l’eau.', 'For twenty-two years, I have been teaching Combelune’s children not to be afraid of the water.', '/də.pɥi vɛ̃t.dø.zɑ̃ ʒa.pʁɑ̃ o.zɑ̃.fɑ̃ də kɔ̃b.lyn a nə ply.za.vwaʁ pœʁ də lo/', 'duh-pwee vehⁿt-deu-ZAHⁿ zha-PRAHⁿ oh-zahⁿ-FAHⁿ duh kohⁿb-LÜN a nuh plü-za-vwar PUHR duh LOH', ['pathos', 'radio', 'ethos']),
  sent(1176, 'Les douches sont froides depuis l’hiver, et le rapport des services techniques le confirme.', 'The showers have been cold since the winter, and the technical services’ report confirms it.', '/le duʃ sɔ̃ fʁwad də.pɥi li.vɛʁ e lə ʁa.pɔʁ de sɛʁ.vis tɛk.nik lə kɔ̃.fiʁm/', 'lay DOOSH sohⁿ FRWAD duh-pwee lee-VEHR ay luh ra-POR day sehr-vees tek-NEEK luh kohⁿ-FEERM', ['pathos', 'radio', 'fait']),
  sent(1177, 'Le rapport chiffre les travaux à cent quatre-vingt mille euros, et je ne vous le cache pas.', 'The report puts the works at one hundred and eighty thousand euros, and I am not hiding it from you.', '/lə ʁa.pɔʁ ʃifʁ le tʁa.vo a sɑ̃ ka.tʁə.vɛ̃ mi.lø.ʁo e ʒə nə vu lə kaʃ pa/', 'luh ra-POR SHEEFR lay tra-VOH a sahⁿ ka-truh-vehⁿ mee-leu-ROH ay zhuh nuh voo luh kash PA', ['pathos', 'radio', 'fait']),
  phrase(1055, 'jouer sur la peur', 'to play on fear', '/ʒwe syʁ la pœʁ/', 'zhway sür la PUHR', ['mot', 'pathos']),
  phrase(1056, 'faire appel aux sentiments', 'to appeal to feelings', '/fɛ.ʁa.pɛl o sɑ̃.ti.mɑ̃/', 'feh-ra-PEL oh sahⁿ-tee-MAHⁿ', ['mot', 'pathos']),
];

/* ── ACT 5 · L’AUTORITÉ ET L’EXPERTISE ───────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1057, 'Ce n’est pas nous qui le disons : c’est une romancière célèbre.', 'It is not us saying it: it is a famous novelist.', '/sə nɛ pa nu ki lə di.zɔ̃ sɛ.ty.nə ʁɔ.mɑ̃.sjɛʁ se.lɛbʁ/', 'suh neh pa NOO kee luh dee-ZOHⁿ seh-tü-nuh ro-mahⁿ-syehr say-LEBR', ['autorite', 'prestige', 'contre-exemple'], RECO),
  sent(1058, 'Les experts sont unanimes : le dimanche est le jour de la culture.', 'The experts are unanimous: Sunday is the day for culture.', '/le.zɛks.pɛʁ sɔ̃.ty.na.nim lə di.mɑ̃ʃ ɛ lə ʒuʁ də la kyl.tyʁ/', 'lay-zeks-PEHR sohⁿ-tü-na-NEEM luh dee-MAHⁿSH eh luh zhoor duh la kül-TÜR', ['autorite', 'vague', 'contre-exemple'], RECO),
  sent(1059, 'Les grandes villes l’ont compris depuis longtemps.', 'The big cities understood this long ago.', '/le ɡʁɑ̃d vil lɔ̃ kɔ̃.pʁi də.pɥi lɔ̃.tɑ̃/', 'lay grahⁿd VEEL lohⁿ kohⁿ-PREE duh-pwee lohⁿ-TAHⁿ', ['autorite', 'nombre', 'contre-exemple'], RECO),
  sent(1060, 'Une romancière connaît les romans, pas la fréquentation des bibliothèques.', 'A novelist knows novels, not library attendance.', '/yn ʁɔ.mɑ̃.sjɛʁ kɔ.nɛ le ʁɔ.mɑ̃ pa la fʁe.kɑ̃.ta.sjɔ̃ de bi.bli.jɔ.tɛk/', 'ün ro-mahⁿ-SYEHR ko-neh lay ro-MAHⁿ pa la fray-kahⁿ-ta-SYOHⁿ day bee-blee-yo-TEK', ['autorite', 'domaine'], FCVDR),
  sent(1061, 'L’effet sur la lecture des adolescents n’a pas été mesuré.', 'The effect on teenagers’ reading has not been measured.', '/le.fɛ syʁ la lɛk.tyʁ de.za.dɔ.le.sɑ̃ na pa.ze.te mə.zy.ʁe/', 'lay-FEH sür la lek-TÜR day-za-do-lay-SAHⁿ na pa-zay-tay muh-zü-RAY', ['expertise', 'limite']),
  sent(1062, 'L’étude est financée en partie par une association qui milite pour ces horaires.', 'The study is partly funded by an association that campaigns for these opening hours.', '/le.tyd ɛ fi.nɑ̃.se ɑ̃ paʁ.ti paʁ y.na.sɔ.sja.sjɔ̃ ki mi.lit puʁ se.zɔ.ʁɛʁ/', 'lay-TÜD eh fee-nahⁿ-SAY ahⁿ par-TEE par ü-na-so-sya-SYOHⁿ kee mee-LEET poor say-zo-REHR', ['expertise', 'interet']),
  sent(1063, 'Je ne vous promets pas que les adolescents liront deux fois plus.', 'I do not promise you that teenagers will read twice as much.', '/ʒə nə vu pʁɔ.mɛ pa kə le.za.dɔ.le.sɑ̃ li.ʁɔ̃ dø fwa plys/', 'zhuh nuh voo pro-MEH pa kuh lay-za-do-lay-SAHⁿ lee-ROHⁿ deu fwa PLÜSS', ['expertise', 'prudence']),
  sent(1064, 'Une autorité ne vaut que dans son domaine, et avec ses preuves.', 'An authority counts only in its own field, and with its evidence.', '/y.no.tɔ.ʁi.te nə vo kə dɑ̃ sɔ̃ dɔ.mɛn e a.vɛk se pʁœv/', 'ü-noh-to-ree-TAY nuh voh kuh dahⁿ sohⁿ do-MENN ay a-vek say PRUHV', ['regle', 'autorite'], FC,
    rule('Un tract cite une célébrité. Que vérifies-tu ?', 'Si c’est son domaine, comment elle le sait, et si d’autres spécialistes disent la même chose. Une autorité ne vaut que dans son domaine, et avec ses preuves.')),
  phrase(1065, 'l’argument d’autorité', 'the argument from authority', '/laʁ.ɡy.mɑ̃ do.tɔ.ʁi.te/', 'lar-gü-MAHⁿ doh-to-ree-TAY', ['mot', 'autorite']),
  sent(1066, 'Est-ce bien son domaine ?', 'Is that really their field?', '/ɛs bjɛ̃ sɔ̃ dɔ.mɛn/', 'ess byehⁿ sohⁿ do-MENN', ['question', 'autorite']),
  sent(1067, 'Comment le sait-elle ?', 'How does she know?', '/kɔ.mɑ̃ lə sɛ.tɛl/', 'ko-mahⁿ luh seh-TEL', ['question', 'autorite']),
  sent(1068, 'Un expert peut se tromper, mais il peut dire comment il sait.', 'An expert can be wrong, but can say how they know.', '/œ̃.nɛks.pɛʁ pø sə tʁɔ̃.pe mɛ il pø diʁ kɔ.mɑ̃ il sɛ/', 'uhⁿ-neks-PEHR peu suh trohⁿ-PAY meh eel peu deer ko-mahⁿ eel SEH', ['regle', 'expertise'], FCVDR),
  sent(1069, 'Je cite l’étude, sa méthode et ses limites.', 'I cite the study, its method and its limits.', '/ʒə sit le.tyd sa me.tɔd e se li.mit/', 'zhuh seet lay-TÜD sa may-TOD ay say lee-MEET', ['plaidoyer', 'expertise']),
  sent(1070, 'Un grand champion m’a dit qu’une ville sans piscine renonce à ses enfants.', 'A great champion told me that a town without a pool gives up on its children.', '/œ̃ ɡʁɑ̃ ʃɑ̃.pjɔ̃ ma di kyn vil sɑ̃ pi.sin ʁə.nɔ̃s a se.zɑ̃.fɑ̃/', 'uhⁿ grahⁿ shahⁿ-PYOHⁿ ma DEE kün VEEL sahⁿ pee-SEEN ruh-nohⁿs a say-zahⁿ-FAHⁿ', ['autorite', 'anonyme', 'contre-exemple'], RECO),
];

/* ── ACT 6 · L’ANALOGIE ──────────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1071, 'Une ville qui jette ses objets ressemble à un médecin qui remplacerait le patient.', 'A town that throws its objects away is like a doctor who would replace the patient.', '/yn vil ki ʒɛt se.zɔb.ʒɛ ʁə.sɑ̃bl a œ̃ med.sɛ̃ ki ʁɑ̃.plas.ʁɛ lə pa.sjɑ̃/', 'ün VEEL kee zhet say-zob-ZHEH ruh-SAHⁿBL a uhⁿ med-SEHⁿ kee rahⁿ-plass-REH luh pa-SYAHⁿ', ['analogie', 'faible']),
  sent(1072, 'L’image est forte, je l’admets, et elle a ses limites.', 'The image is strong, I admit, and it has its limits.', '/li.maʒ ɛ fɔʁt ʒə lad.mɛ e ɛ.la se li.mit/', 'lee-MAZH eh FORT zhuh lad-MEH ay eh-la say lee-MEET', ['analogie', 'limite']),
  sent(1073, 'L’atelier fait pour les lampes ce que le cordonnier faisait pour les chaussures.', 'The workshop does for lamps what the cobbler did for shoes.', '/la.tə.lje fɛ puʁ le lɑ̃p sə kə lə kɔʁ.dɔ.nje fə.zɛ puʁ le ʃo.syʁ/', 'la-tuh-LYAY feh poor lay LAHⁿP suh kuh luh kor-do-NYAY fuh-ZEH poor lay shoh-SÜR', ['analogie', 'solide'], FCVDR),
  sent(1074, 'Une fuite ne rapporte rien, alors que l’atelier évite des achats.', 'A leak brings in nothing, whereas the workshop saves purchases.', '/yn fɥit nə ʁa.pɔʁt ʁjɛ̃ a.lɔʁ kə la.tə.lje e.vit de.za.ʃa/', 'ün FWEET nuh ra-port RYEHⁿ a-lor kuh la-tuh-LYAY ay-veet day-za-SHA', ['analogie', 'refutation']),
  sent(1075, 'Une analogie devient un argument quand le point commun est celui dont dépend la conclusion.', 'An analogy becomes an argument when the shared feature is the one the conclusion depends on.', '/y.na.na.lɔ.ʒi də.vjɛ̃ œ̃.naʁ.ɡy.mɑ̃ kɑ̃ lə pwɛ̃ kɔ.mœ̃ ɛ sə.lɥi dɔ̃ de.pɑ̃ la kɔ̃.kly.zjɔ̃/', 'ü-na-na-lo-ZHEE duh-vyehⁿ uhⁿ-nar-gü-MAHⁿ kahⁿ luh pwehⁿ ko-MUHⁿ eh suh-LWEE dohⁿ day-PAHⁿ la kohⁿ-klü-ZYOHⁿ', ['regle', 'analogie'], FC,
    rule('« L’atelier est un cordonnier pour les lampes. » Est-ce un argument ?', 'Oui, si le point commun (prolonger la vie d’objets qui en valent la peine) est celui dont dépend la conclusion. Une analogie devient un argument quand le point commun est celui dont dépend la conclusion.')),
  sent(1076, 'Quel est le point commun, et compte-t-il ici ?', 'What is the shared feature, and does it count here?', '/kɛ.lɛ lə pwɛ̃ kɔ.mœ̃ e kɔ̃t.til i.si/', 'keh-leh luh pwehⁿ ko-MUHⁿ ay kohⁿt-teel ee-SEE', ['question', 'analogie']),
  sent(1077, 'Un jardin partagé, c’est comme une salle de sport : on paie et on n’y va jamais.', 'A shared garden is like a gym: you pay and never go.', '/œ̃ ʒaʁ.dɛ̃ paʁ.ta.ʒe sɛ kɔm yn sal də spɔʁ ɔ̃ pɛ e ɔ̃ ni va ʒa.mɛ/', 'uhⁿ zhar-dehⁿ par-ta-ZHAY seh komm ün sal duh SPOR ohⁿ PEH ay ohⁿ nee va zha-MEH', ['analogie', 'surface', 'contre-exemple'], RECO),
  sent(1078, 'Le budget est un gâteau : la part de l’un réduit celle des autres.', 'The budget is a cake: one person’s slice reduces the others’.', '/lə byd.ʒɛ ɛ.tœ̃ ɡa.to la paʁ də lœ̃ ʁe.dɥi sɛl de.zotʁ/', 'luh büd-ZHEH eh-tuhⁿ ga-TOH la par duh LUHⁿ ray-dwee sel day-ZOHTR', ['analogie', 'solide']),
  phrase(1079, 'l’argument par analogie', 'the argument by analogy', '/laʁ.ɡy.mɑ̃ pa.ʁa.na.lɔ.ʒi/', 'lar-gü-MAHⁿ pa-ra-na-lo-ZHEE', ['mot', 'analogie']),
  sent(1080, 'L’analogie éclaire ; à elle seule, elle ne prouve rien.', 'An analogy sheds light; on its own, it proves nothing.', '/la.na.lɔ.ʒi e.klɛʁ a ɛl sœl ɛl nə pʁuv ʁjɛ̃/', 'la-na-lo-ZHEE ay-KLEHR a el SUHL el nuh proov RYEHⁿ', ['regle', 'analogie'], FCVDR),
  sent(1081, 'À ce compte, il faudrait un atelier dans chaque rue.', 'By that reckoning, every street would need a workshop.', '/a sə kɔ̃t il fo.dʁɛ œ̃.na.tə.lje dɑ̃ ʃak ʁy/', 'a suh KOHⁿT eel foh-DREH uhⁿ-na-tuh-LYAY dahⁿ shak RÜ', ['analogie', 'objection']),
  sent(1082, 'Comme une bibliothèque prête des livres, l’atelier prêterait des outils.', 'Just as a library lends books, the workshop would lend tools.', '/kɔm yn bi.bli.jɔ.tɛk pʁɛt de livʁ la.tə.lje pʁɛ.tʁɛ de.zu.ti/', 'komm ün bee-blee-yo-TEK PRET day LEEVR la-tuh-LYAY preh-TREH day-zoo-TEE', ['analogie', 'solide']),
  sent(1083, 'Ma comparaison tient sur un point, et je dis lequel.', 'My comparison holds on one point, and I say which.', '/ma kɔ̃.pa.ʁɛ.zɔ̃ tjɛ̃ syʁ œ̃ pwɛ̃ e ʒə di lə.kɛl/', 'ma kohⁿ-pa-reh-ZOHⁿ tyehⁿ sür uhⁿ PWEHⁿ ay zhuh dee luh-KEL', ['plaidoyer', 'analogie'], FCVDR),
  sent(1084, 'Une médiathèque fermée le dimanche, c’est un parc fermé le jour où l’on se promène.', 'A media library closed on Sundays is a park closed on the day people go walking.', '/yn me.dja.tɛk fɛʁ.me lə di.mɑ̃ʃ sɛ.tœ̃ paʁk fɛʁ.me lə ʒuʁ u lɔ̃ sə pʁɔ.mɛn/', 'ün may-dya-TEK fehr-MAY luh dee-MAHⁿSH seh-tuhⁿ PARK fehr-MAY luh ZHOOR oo lohⁿ suh pro-MENN', ['analogie', 'partielle']),
];

/* ── ACT 7 · LES MOTS QUI CADRENT ────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1085, 'Quarante vélos à l’abri pour le prix de douze voitures.', 'Forty bikes under cover for the price of twelve cars.', '/ka.ʁɑ̃t ve.lo a la.bʁi puʁ lə pʁi də duz vwa.tyʁ/', 'ka-rahⁿt vay-LOH a la-BREE poor luh pree duh dooz vwa-TÜR', ['cadrage', 'tract-a']),
  sent(1086, 'Douze places de stationnement sacrifiées.', 'Twelve parking spaces sacrificed.', '/duz plas də sta.sjɔn.mɑ̃ sa.kʁi.fje/', 'dooz PLASS duh sta-syonn-MAHⁿ sa-kree-FYAY', ['cadrage', 'tract-b']),
  sent(1087, 'L’abri libérerait les trottoirs.', 'The shelter would free up the pavements.', '/la.bʁi li.be.ʁə.ʁɛ le tʁɔ.twaʁ/', 'la-BREE lee-bay-ruh-REH lay tro-TWAR', ['cadrage', 'tract-a']),
  sent(1088, 'Le projet supprimerait douze places devant nos commerces.', 'The project would remove twelve spaces in front of our shops.', '/lə pʁɔ.ʒɛ sy.pʁim.ʁɛ duz plas də.vɑ̃ no kɔ.mɛʁs/', 'luh pro-ZHEH sü-preem-REH dooz PLASS duh-vahⁿ noh ko-MEHRS', ['cadrage', 'tract-b']),
  sent(1089, 'Un investissement modeste pour une ville qui veut respirer.', 'A modest investment for a town that wants to breathe.', '/œ̃.nɛ̃.vɛs.tis.mɑ̃ mɔ.dɛst puʁ yn vil ki vø ʁɛs.pi.ʁe/', 'uhⁿ-nehⁿ-ves-tees-MAHⁿ mo-DEST poor ün VEEL kee veu res-pee-RAY', ['cadrage', 'tract-a']),
  sent(1090, 'Une dépense lourde, au moment où le centre a besoin de clients.', 'A heavy expense, just when the town centre needs customers.', '/yn de.pɑ̃s luʁd o mɔ.mɑ̃ u lə sɑ̃tʁ a bə.zwɛ̃ də kli.jɑ̃/', 'ün day-PAHⁿSS LOORD oh mo-MAHⁿ oo luh SAHⁿTR a buh-zwehⁿ duh klee-YAHⁿ', ['cadrage', 'tract-b']),
  sent(1091, 'Le projet remplace douze places de stationnement par un abri de quarante places pour vélos.', 'The project replaces twelve parking spaces with a forty-space bike shelter.', '/lə pʁɔ.ʒɛ ʁɑ̃.plas duz plas də sta.sjɔn.mɑ̃ paʁ œ̃.na.bʁi də ka.ʁɑ̃t plas puʁ ve.lo/', 'luh pro-ZHEH rahⁿ-PLASS dooz plass duh sta-syonn-MAHⁿ par uhⁿ-na-BREE duh ka-rahⁿt PLASS poor vay-LOH', ['cadrage', 'neutre']),
  sent(1092, 'Un mot qui contient déjà la conclusion la dispense de preuve.', 'A word that already contains the conclusion spares it any proof.', '/œ̃ mo ki kɔ̃.tjɛ̃ de.ʒa la kɔ̃.kly.zjɔ̃ la dis.pɑ̃s də pʁœv/', 'uhⁿ MOH kee kohⁿ-tyehⁿ day-ZHA la kohⁿ-klü-ZYOHⁿ la dees-PAHⁿSS duh PRUHV', ['regle', 'cadrage'], FC,
    rule('Un tract écrit « sacrifiées » plutôt que « remplacées ». Qu’a-t-il fait ?', 'Il a mis sa conclusion dans le mot : sacrifier, c’est déjà dire que la perte est injuste. Un mot qui contient déjà la conclusion la dispense de preuve.')),
  sent(1093, 'Neuf abonnés sur dix renouvellent leur abonnement.', 'Nine subscribers out of ten renew their subscription.', '/nœ.fa.bɔ.ne syʁ dis ʁə.nu.vɛl lœ.ʁa.bɔn.mɑ̃/', 'nuh-fa-bo-NAY sür DEESS ruh-noo-VEL luh-ra-bonn-MAHⁿ', ['cadrage', 'gain']),
  sent(1094, 'Un abonné sur dix ne renouvelle pas.', 'One subscriber in ten does not renew.', '/œ̃.na.bɔ.ne syʁ dis nə ʁə.nu.vɛl pa/', 'uhⁿ-na-bo-NAY sür DEESS nuh ruh-noo-vel PA', ['cadrage', 'perte']),
  sent(1095, 'Un mot chargé est loyal si tu peux défendre ce qu’il affirme.', 'A loaded word is fair if you can defend what it asserts.', '/œ̃ mo ʃaʁ.ʒe ɛ lwa.jal si ty pø de.fɑ̃dʁ sə ki.la.fiʁm/', 'uhⁿ moh shar-ZHAY eh lwa-YAL see tü peu day-FAHⁿDR suh kee-la-FEERM', ['regle', 'cadrage'], FCVDR),
  sent(1096, 'Quarante places, ce ne sont pas « quelques abonnés ».', 'Forty spaces are not "a few subscribers".', '/ka.ʁɑ̃t plas sə nə sɔ̃ pa kɛl.kə.za.bɔ.ne/', 'ka-rahⁿt PLASS suh nuh sohⁿ pa kel-kuh-za-bo-NAY', ['cadrage', 'quantite']),
  phrase(1097, 'orienter le débat', 'to steer the debate', '/ɔ.ʁjɑ̃.te lə de.ba/', 'o-ryahⁿ-tay luh day-BA', ['mot', 'cadrage']),
  sent(1098, 'J’appelle les choses par leur nom, puis je dis pourquoi elles comptent.', 'I call things by their name, then I say why they matter.', '/ʒa.pɛl le ʃoz paʁ lœʁ nɔ̃ pɥi ʒə di puʁ.kwa ɛl kɔ̃t/', 'zha-PEL lay SHOHZ par luhr NOHⁿ pwee zhuh dee poor-KWA el KOHⁿT', ['plaidoyer', 'cadrage']),
];

/* ── ACT 8 · LA QUESTION RHÉTORIQUE ──────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1099, 'Que font, le dimanche, les collégiens qui n’ont pas de bureau chez eux ?', 'What do pupils without a desk at home do on Sundays?', '/kə fɔ̃ lə di.mɑ̃ʃ le kɔ.le.ʒjɛ̃ ki nɔ̃ pa də by.ʁo ʃe.zø/', 'kuh FOHⁿ luh dee-MAHⁿSH lay ko-lay-ZHYEHⁿ kee nohⁿ pa duh bü-ROH shay-ZEU', ['question', 'vraie']),
  sent(1100, 'Faut-il refuser des lecteurs parce qu’ils lisent le mauvais jour ?', 'Should we turn readers away because they read on the wrong day?', '/fo.til ʁə.fy.ze de lɛk.tœʁ paʁs kil liz lə mo.vɛ ʒuʁ/', 'foh-TEEL ruh-fü-ZAY day lek-TUHR parss keel leez luh moh-veh ZHOOR', ['question', 'rhetorique']),
  sent(1101, 'Une famille ne peut-elle pas lire ensemble ?', 'Can a family not read together?', '/yn fa.mij nə pø.tɛl pa liʁ ɑ̃.sɑ̃bl/', 'ün fa-MEEY nuh peu-TEL pa leer ahⁿ-SAHⁿBL', ['question', 'rhetorique']),
  sent(1102, 'Qui oserait mettre un prix sur la culture ?', 'Who would dare put a price on culture?', '/ki o.zʁɛ mɛtʁ œ̃ pʁi syʁ la kyl.tyʁ/', 'kee oh-ZREH metr uhⁿ PREE sür la kül-TÜR', ['question', 'rhetorique', 'esquive', 'contre-exemple'], RECO),
  sent(1103, 'Est-ce trop cher pour un lieu ouvert à tous ?', 'Is it too expensive for a place open to all?', '/ɛs tʁo ʃɛʁ puʁ œ̃ ljø u.vɛʁ a tus/', 'ess troh SHEHR poor uhⁿ LYEU oo-vehr a TOOSS', ['question', 'rhetorique']),
  sent(1104, 'Où voulez-vous que vos enfants passent leurs dimanches de pluie ?', 'Where do you want your children to spend their rainy Sundays?', '/u vu.le.vu kə vo.zɑ̃.fɑ̃ pas lœʁ di.mɑ̃ʃ də plɥi/', 'oo voo-lay-VOO kuh voh-zahⁿ-FAHⁿ pass luhr dee-mahⁿsh duh PLWEE', ['question', 'ouverte']),
  sent(1105, 'Une question rhétorique affirme sans le dire : la réponse est supposée évidente.', 'A rhetorical question asserts without saying so: the answer is assumed to be obvious.', '/yn kɛs.tjɔ̃ ʁe.tɔ.ʁik a.fiʁm sɑ̃ lə diʁ la ʁe.pɔ̃s ɛ sy.po.ze e.vi.dɑ̃t/', 'ün kes-TYOHⁿ ray-to-REEK a-FEERM sahⁿ luh DEER la ray-POHⁿSS eh sü-poh-zay ay-vee-DAHⁿT', ['regle', 'question'], FC,
    rule('« Qui veut d’une gare où un cycliste sur cinq s’est déjà fait voler son vélo ? » Que fait cette question ?', 'Elle affirme que personne n’en veut, sans le dire. Une question rhétorique affirme sans le dire : la réponse est supposée évidente.')),
  sent(1106, 'N’est-il pas temps d’ouvrir le dimanche ?', 'Is it not time to open on Sundays?', '/nɛ.til pa tɑ̃ du.vʁiʁ lə di.mɑ̃ʃ/', 'neh-teel pa TAHⁿ doo-vreer luh dee-MAHⁿSH', ['question', 'negative']),
  sent(1107, 'Il est temps d’ouvrir le dimanche.', 'It is time to open on Sundays.', '/i.lɛ tɑ̃ du.vʁiʁ lə di.mɑ̃ʃ/', 'ee-leh TAHⁿ doo-vreer luh dee-MAHⁿSH', ['question', 'affirmation']),
  sent(1108, 'Qui veut d’une gare où un cycliste sur cinq s’est déjà fait voler son vélo ?', 'Who wants a station where one cyclist in five has already had their bike stolen?', '/ki vø dyn ɡaʁ u œ̃ si.klist syʁ sɛ̃k sɛ de.ʒa fɛ vɔ.le sɔ̃ ve.lo/', 'kee veu dün GAR oo uhⁿ see-KLEEST sür SEHⁿK seh day-ZHA feh vo-LAY sohⁿ vay-LOH', ['question', 'produire']),
  sent(1109, 'Une question rhétorique est loyale quand presque tout le monde donnerait la même réponse.', 'A rhetorical question is fair when almost everyone would give the same answer.', '/yn kɛs.tjɔ̃ ʁe.tɔ.ʁik ɛ lwa.jal kɑ̃ pʁɛs.kə tu lə mɔ̃d dɔn.ʁɛ la mɛm ʁe.pɔ̃s/', 'ün kes-TYOHⁿ ray-to-REEK eh lwa-YAL kahⁿ press-kuh too luh MOHⁿD donn-REH la mem ray-POHⁿSS', ['regle', 'question']),
  phrase(1110, 'la question rhétorique', 'the rhetorical question', '/la kɛs.tjɔ̃ ʁe.tɔ.ʁik/', 'la kes-TYOHⁿ ray-to-REEK', ['mot', 'question']),
  sent(1111, 'Personne ne veut voir la piscine fermer.', 'Nobody wants to see the pool close.', '/pɛʁ.sɔn nə vø vwaʁ la pi.sin fɛʁ.me/', 'pehr-SONN nuh veu vwar la pee-SEEN fehr-MAY', ['question', 'affirmation']),
  sent(1112, 'Qui veut voir la piscine fermer ?', 'Who wants to see the pool close?', '/ki vø vwaʁ la pi.sin fɛʁ.me/', 'kee veu vwar la pee-SEEN fehr-MAY', ['question', 'produire']),
  sent(1113, 'Bonsoir, ce soir on parle de l’abri à vélos de la gare.', 'Good evening, tonight we are talking about the station bike shelter.', '/bɔ̃.swaʁ sə swaʁ ɔ̃ paʁl də la.bʁi a ve.lo də la ɡaʁ/', 'bohⁿ-SWAR suh SWAR ohⁿ parl duh la-bree a vay-LOH duh la GAR', ['radio']),
  sent(1114, 'Combien de vélos sont volés chaque année devant la gare ?', 'How many bikes are stolen each year outside the station?', '/kɔ̃.bjɛ̃ də ve.lo sɔ̃ vɔ.le ʃa.ka.ne də.vɑ̃ la ɡaʁ/', 'kohⁿ-byehⁿ duh vay-LOH sohⁿ vo-LAY sha-ka-NAY duh-vahⁿ la GAR', ['radio', 'vraie']),
  sent(1115, 'Franchement, qui a envie de retrouver sa selle trempée chaque matin ?', 'Frankly, who wants to find their saddle soaked every morning?', '/fʁɑ̃ʃ.mɑ̃ ki a ɑ̃.vi də ʁə.tʁu.ve sa sɛl tʁɑ̃.pe ʃak ma.tɛ̃/', 'frahⁿsh-MAHⁿ kee a ahⁿ-VEE duh ruh-troo-vay sa sel trahⁿ-PAY shak ma-TEHⁿ', ['radio', 'rhetorique']),
  sent(1116, 'Les commerçants ne comptent-ils donc plus pour rien ?', 'So do the shopkeepers count for nothing any more?', '/le kɔ.mɛʁ.sɑ̃ nə kɔ̃t.til dɔ̃k ply puʁ ʁjɛ̃/', 'lay ko-mehr-SAHⁿ nuh kohⁿt-teel dohⁿk plü poor RYEHⁿ', ['radio', 'rhetorique']),
  sent(1117, 'Où les livreurs se gareront-ils pendant les travaux ?', 'Where will delivery drivers park during the works?', '/u le li.vʁœʁ sə ɡaʁ.ʁɔ̃.til pɑ̃.dɑ̃ le tʁa.vo/', 'oo lay lee-VRUHR suh gar-rohⁿ-TEEL pahⁿ-dahⁿ lay tra-VOH', ['radio', 'vraie']),
  sent(1118, 'Va-t-on vraiment sacrifier le centre-ville pour quarante vélos ?', 'Are we really going to sacrifice the town centre for forty bikes?', '/va.tɔ̃ vʁɛ.mɑ̃ sa.kʁi.fje lə sɑ̃.tʁə.vil puʁ ka.ʁɑ̃t ve.lo/', 'va-TOHⁿ vreh-MAHⁿ sa-kree-FYAY luh sahⁿ-truh-VEEL poor ka-rahⁿt vay-LOH', ['radio', 'rhetorique']),
  sent(1119, 'Qui paiera l’entretien de l’abri, la ville ou les abonnés ?', 'Who will pay for the shelter’s upkeep, the town or the subscribers?', '/ki pɛ.ʁa lɑ̃.tʁə.tjɛ̃ də la.bʁi la vil u le.za.bɔ.ne/', 'kee peh-RA lahⁿ-truh-TYEHⁿ duh la-BREE la VEEL oo lay-za-bo-NAY', ['radio', 'vraie']),
  sent(1120, 'On en reparle la semaine prochaine, après le vote.', 'We will talk about it again next week, after the vote.', '/ɔ̃.nɑ̃ ʁə.paʁl la sə.mɛn pʁɔ.ʃɛn a.pʁɛ lə vɔt/', 'ohⁿ-nahⁿ ruh-PARL la suh-menn pro-SHENN a-preh luh VOT', ['radio']),
];

/* ── ACT 9 · ANAPHORE ET GRADATION ───────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1121, 'Un jardin où les enfants de l’école sèmeront leurs radis.', 'A garden where the school’s children will sow their radishes.', '/œ̃ ʒaʁ.dɛ̃ u le.zɑ̃.fɑ̃ də le.kɔl sɛm.ʁɔ̃ lœʁ ʁa.di/', 'uhⁿ zhar-DEHⁿ oo lay-zahⁿ-FAHⁿ duh lay-KOL sem-ROHⁿ luhr ra-DEE', ['anaphore', 'discours']),
  sent(1122, 'Un jardin où les retraités auront enfin un banc à l’ombre.', 'A garden where the retired will at last have a bench in the shade.', '/œ̃ ʒaʁ.dɛ̃ u le ʁə.tʁɛ.te o.ʁɔ̃.tɑ̃.fɛ̃ œ̃ bɑ̃ a lɔ̃bʁ/', 'uhⁿ zhar-DEHⁿ oo lay ruh-treh-TAY oh-rohⁿ-tahⁿ-FEHⁿ uhⁿ BAHⁿ a LOHⁿBR', ['anaphore', 'discours']),
  sent(1123, 'Un jardin où des voisins qui ne se parlent pas se prêteront un arrosoir.', 'A garden where neighbours who do not talk to each other will lend each other a watering can.', '/œ̃ ʒaʁ.dɛ̃ u de vwa.zɛ̃ ki nə sə paʁl pa sə pʁɛt.ʁɔ̃ œ̃.na.ʁo.zwaʁ/', 'uhⁿ zhar-DEHⁿ oo day vwa-ZEHⁿ kee nuh suh parl PA suh pret-rohⁿ uhⁿ-na-ro-ZWAR', ['anaphore', 'discours']),
  sent(1124, 'C’est une graine, bientôt une parcelle, et un jour une rue qui change de visage.', 'It is a seed, soon a plot, and one day a street that changes its face.', '/sɛ.tyn ɡʁɛn bjɛ̃.to yn paʁ.sɛl e œ̃ ʒuʁ yn ʁy ki ʃɑ̃ʒ də vi.zaʒ/', 'seh-tün GRENN byehⁿ-TOH ün par-SEL ay uhⁿ ZHOOR ün RÜ kee shahⁿzh duh vee-ZAZH', ['gradation', 'discours']),
  sent(1125, 'Je vous promets des tomates en août, et des voisins qui se connaissent.', 'I promise you tomatoes in August, and neighbours who know each other.', '/ʒə vu pʁɔ.mɛ de tɔ.mat ɑ̃.nu e de vwa.zɛ̃ ki sə kɔ.nɛs/', 'zhuh voo pro-MEH day to-MAT ahⁿ-NOO ay day vwa-ZEHⁿ kee suh ko-NESS', ['discours', 'promesse']),
  sent(1126, 'Nous voulons un abri qui ferme, nous voulons des arceaux solides, nous voulons un éclairage le soir.', 'We want a shelter that locks, we want sturdy racks, we want lighting in the evening.', '/nu vu.lɔ̃ œ̃.na.bʁi ki fɛʁm nu vu.lɔ̃ de.zaʁ.so sɔ.lid nu vu.lɔ̃ œ̃.ne.klɛ.ʁaʒ lə swaʁ/', 'noo voo-LOHⁿ uhⁿ-na-bree kee FEHRM noo voo-LOHⁿ day-zar-soh so-LEED noo voo-LOHⁿ uhⁿ-nay-kleh-razh luh SWAR', ['anaphore']),
  sent(1127, 'Quelques retards, des plaintes, une pétition, et bientôt la colère de tout un quartier.', 'A few delays, complaints, a petition, and soon the anger of a whole neighbourhood.', '/kɛl.kə ʁə.taʁ de plɛ̃t yn pe.ti.sjɔ̃ e bjɛ̃.to la kɔ.lɛʁ də tu.tœ̃ kaʁ.tje/', 'kel-kuh ruh-TAR day PLEHⁿT ün pay-tee-SYOHⁿ ay byehⁿ-toh la ko-LEHR duh too-tuhⁿ kar-TYAY', ['gradation']),
  sent(1128, 'L’anaphore répète un même début ; la gradation, le plus souvent, fait monter l’intensité.', 'Anaphora repeats the same opening; gradation, most often, makes the intensity rise.', '/la.na.fɔʁ ʁe.pɛ.tœ̃ mɛm de.by la ɡʁa.da.sjɔ̃ lə ply su.vɑ̃ fɛ mɔ̃.te lɛ̃.tɑ̃.si.te/', 'la-na-FOR ray-peh-tuhⁿ mem day-BÜ la gra-da-SYOHⁿ luh plü soo-VAHⁿ feh mohⁿ-TAY lehⁿ-tahⁿ-see-TAY', ['regle', 'anaphore', 'gradation'], FC,
    rule('Trois phrases commencent par « Un jardin où ». Quelle figure ?', 'Une anaphore : le même début revient. Si les termes montaient en force, ce serait une gradation. L’anaphore répète un même début ; la gradation, le plus souvent, fait monter l’intensité.')),
  sent(1129, 'Une figure est loyale quand chaque reprise apporte quelque chose de vrai.', 'A figure is fair when each repetition brings something true.', '/yn fi.ɡyʁ ɛ lwa.jal kɑ̃ ʃak ʁə.pʁiz a.pɔʁt kɛl.kə ʃoz də vʁɛ/', 'ün fee-GÜR eh lwa-YAL kahⁿ shak ruh-PREEZ a-port kel-kuh SHOHZ duh VREH', ['regle', 'anaphore'], FC,
    rule('Un discours répète trois fois « nous voulons ». Est-ce loyal ?', 'Oui, si chaque reprise ajoute une demande réelle. Une figure est loyale quand chaque reprise apporte quelque chose de vrai.')),
  phrase(1130, 'une gradation', 'a gradation, a climax (a rising sequence)', '/yn ɡʁa.da.sjɔ̃/', 'ün gra-da-SYOHⁿ', ['mot', 'gradation']),
  sent(1131, 'Le rythme fait retenir ; il ne fait pas preuve.', 'Rhythm makes you remember; it is not proof.', '/lə ʁitm fɛ ʁə.tə.niʁ il nə fɛ pa pʁœv/', 'luh REETM feh ruh-tuh-NEER eel nuh feh pa PRUHV', ['regle', 'rythme'], FCVDR),
  sent(1132, 'Votez pour le jardin, votez pour la rue, votez pour ceux qui y vivront après nous.', 'Vote for the garden, vote for the street, vote for those who will live there after us.', '/vɔ.te puʁ lə ʒaʁ.dɛ̃ vɔ.te puʁ la ʁy vɔ.te puʁ sø ki i viv.ʁɔ̃ a.pʁɛ nu/', 'vo-tay poor luh zhar-DEHⁿ vo-tay poor la RÜ vo-tay poor seu kee ee veev-ROHⁿ a-preh NOO', ['anaphore', 'gradation', 'discours']),
  sent(1133, 'Ce que nous demandons, ce n’est pas votre émotion : c’est votre voix.', 'What we are asking for is not your emotion: it is your vote.', '/sə kə nu də.mɑ̃.dɔ̃ sə nɛ pa vɔ.tʁe.mo.sjɔ̃ sɛ vɔtʁ vwa/', 'suh kuh noo duh-mahⁿ-DOHⁿ suh neh pa vo-tray-mo-SYOHⁿ seh votr VWA', ['discours']),
  sent(1134, 'Chaque fois que je reprends la formule, j’ajoute une raison nouvelle.', 'Each time I repeat the phrase, I add a new reason.', '/ʃak fwa kə ʒə ʁə.pʁɑ̃ la fɔʁ.myl ʒa.ʒut yn ʁɛ.zɔ̃ nu.vɛl/', 'shak FWA kuh zhuh ruh-PRAHⁿ la for-MÜL zha-ZHOOT ün reh-zohⁿ noo-VEL', ['plaidoyer', 'anaphore']),
];

/* ── ACT 10 · LA PRÉTÉRITION ─────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1135, 'Je ne rappellerai pas que l’association n’a jamais géré plus de quatre bacs.', 'I will not point out that the association has never run more than four planters.', '/ʒə nə ʁa.pɛl.ʁe pa kə la.sɔ.sja.sjɔ̃ na ʒa.mɛ ʒe.ʁe ply də katʁ bak/', 'zhuh nuh ra-pel-RAY pa kuh la-so-sya-SYOHⁿ na zha-meh zhay-RAY plü duh katr BAK', ['preterition', 'insinuation']),
  sent(1136, 'Je ne dirai pas que vingt mille euros, c’est cher payé pour des radis.', 'I will not say that twenty thousand euros is a high price for radishes.', '/ʒə nə di.ʁe pa kə vɛ̃ mi.lø.ʁo sɛ ʃɛʁ pɛ.je puʁ de ʁa.di/', 'zhuh nuh dee-RAY pa kuh vehⁿ mee-leu-ROH seh shehr peh-YAY poor day ra-DEE', ['preterition', 'insinuation']),
  sent(1137, 'Je passerai sur les rumeurs d’arrosage avec l’eau de la ville.', 'I will pass over the rumours of watering with town water.', '/ʒə pas.ʁe syʁ le ʁy.mœʁ da.ʁo.zaʒ a.vɛk lo də la vil/', 'zhuh pass-RAY sür lay rü-MUHR da-ro-ZAZH a-vek LOH duh la VEEL', ['preterition', 'rumeur', 'contre-exemple'], RECO),
  sent(1138, 'Inutile de vous rappeler ce qu’il en coûterait de la fermer.', 'No need to remind you what closing it would cost.', '/i.ny.til də vu ʁa.plə.le sə ki.lɑ̃ ku.tʁɛ də la fɛʁ.me/', 'ee-nü-TEEL duh voo ra-pluh-LAY suh kee-lahⁿ koo-TREH duh la fehr-MAY', ['preterition']),
  sent(1139, 'Je n’évoquerai pas les familles du car : d’autres l’ont fait, et très bien.', 'I will not bring up the coach families: others have done so, and very well.', '/ʒə ne.vɔk.ʁe pa le fa.mij dy kaʁ do.tʁə lɔ̃ fɛ e tʁɛ bjɛ̃/', 'zhuh nay-vok-RAY pa lay fa-MEEY dü KAR doh-truh lohⁿ FEH ay treh BYEHⁿ', ['preterition', 'courtoisie']),
  sent(1140, 'La prétérition dit une chose en prétendant la taire.', 'Paralipsis says something while claiming to leave it unsaid.', '/la pʁe.te.ʁi.sjɔ̃ di yn ʃoz ɑ̃ pʁe.tɑ̃.dɑ̃ la tɛʁ/', 'la pray-tay-ree-SYOHⁿ dee ün SHOHZ ahⁿ pray-tahⁿ-DAHⁿ la TEHR', ['regle', 'preterition'], FC,
    rule('« Je ne dirai pas que c’est cher. » Qu’a fait l’orateur ?', 'Il l’a dit, en prétendant ne pas le dire. La prétérition dit une chose en prétendant la taire.')),
  sent(1141, 'Une prétérition est loyale si tu peux dire la même chose ouvertement, preuve à l’appui.', 'A paralipsis is fair if you can say the same thing openly, with proof.', '/yn pʁe.te.ʁi.sjɔ̃ ɛ lwa.jal si ty pø diʁ la mɛm ʃoz u.vɛʁt.mɑ̃ pʁœv a la.pɥi/', 'ün pray-tay-ree-SYOHⁿ eh lwa-YAL see tü peu deer la mem SHOHZ oo-vehrt-MAHⁿ pruhv a la-PWEE', ['regle', 'preterition'], FC,
    rule('« Je passerai sur les rumeurs. » Comment juger ?', 'Demande-toi s’il pourrait le dire ouvertement, preuve à l’appui. Une rumeur sans source ne le peut pas. Une prétérition est loyale si tu peux dire la même chose ouvertement, preuve à l’appui.')),
  phrase(1142, 'une prétérition', 'a paralipsis (saying something by claiming not to say it)', '/yn pʁe.te.ʁi.sjɔ̃/', 'ün pray-tay-ree-SYOHⁿ', ['mot', 'preterition']),
  sent(1143, 'L’association a géré quatre bacs ; trente parcelles seraient un autre défi.', 'The association has run four planters; thirty plots would be another challenge.', '/la.sɔ.sja.sjɔ̃ a ʒe.ʁe katʁ bak tʁɑ̃t paʁ.sɛl sə.ʁɛ.tœ̃.no.tʁə de.fi/', 'la-so-sya-SYOHⁿ a zhay-RAY katr BAK trahⁿt par-SEL suh-reh-tuhⁿ-noh-truh day-FEE', ['preterition', 'ouvertement']),
  sent(1144, 'Le rapport chiffre la rénovation à cent quatre-vingt mille euros.', 'The report puts the renovation at one hundred and eighty thousand euros.', '/lə ʁa.pɔʁ ʃifʁ la ʁe.nɔ.va.sjɔ̃ a sɑ̃ ka.tʁə.vɛ̃ mi.lø.ʁo/', 'luh ra-POR SHEEFR la ray-no-va-SYOHⁿ a sahⁿ ka-truh-vehⁿ mee-leu-ROH', ['preterition', 'ouvertement']),
  sent(1145, 'Je ne reviendrai pas sur le coût, cent quatre-vingt mille euros, détaillé page six du rapport.', 'I will not go back over the cost, one hundred and eighty thousand euros, set out on page six of the report.', '/ʒə nə ʁə.vjɛ̃.dʁe pa syʁ lə ku sɑ̃ ka.tʁə.vɛ̃ mi.lø.ʁo de.ta.je paʒ sis dy ʁa.pɔʁ/', 'zhuh nuh ruh-vyehⁿ-DRAY pa sür luh KOO sahⁿ ka-truh-vehⁿ mee-leu-ROH day-ta-YAY pazh SEESS dü ra-POR', ['preterition', 'loyale']),
  sent(1146, 'Je ne m’attarderai pas sur l’état des vestiaires.', 'I will not dwell on the state of the changing rooms.', '/ʒə nə ma.taʁ.də.ʁe pa syʁ le.ta de vɛs.tjɛʁ/', 'zhuh nuh ma-tar-duh-RAY pa sür lay-TA day ves-TYEHR', ['preterition', 'joelle']),
  sent(1147, 'Si je le pense, je le dis, et je le prouve.', 'If I think it, I say it, and I prove it.', '/si ʒə lə pɑ̃s ʒə lə di e ʒə lə pʁuv/', 'see zhuh luh PAHⁿSS zhuh luh DEE ay zhuh luh PROOV', ['plaidoyer', 'preterition'], FCVDR),
  sent(1148, 'Le jardin est une idée sympathique ; la piscine est un service public.', 'The garden is a nice idea; the pool is a public service.', '/lə ʒaʁ.dɛ̃ ɛ.ty.ni.de sɛ̃.pa.tik la pi.sin ɛ.tœ̃ sɛʁ.vis py.blik/', 'luh zhar-DEHⁿ eh-tü-nee-DAY sehⁿ-pa-TEEK la pee-SEEN eh-tuhⁿ sehr-vees pü-BLEEK', ['discours', 'opposition']),
];

/* ── ACT 11 · L’OBJECTION PRÉVENUE ───────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1149, 'On m’objectera que l’abri supprime douze places de stationnement.', 'It will be objected that the shelter removes twelve parking spaces.', '/ɔ̃ mɔb.ʒɛk.tə.ʁa kə la.bʁi sy.pʁim duz plas də sta.sjɔn.mɑ̃/', 'ohⁿ mob-zhek-tuh-RA kuh la-BREE sü-PREEM dooz plass duh sta-syonn-MAHⁿ', ['objection']),
  sent(1150, 'C’est exact, et je ne veux pas le minimiser.', 'That is true, and I do not want to play it down.', '/sɛ.tɛɡ.zakt e ʒə nə vø pa lə mi.ni.mi.ze/', 'seh-teg-ZAKT ay zhuh nuh veu pa luh mee-nee-mee-ZAY', ['objection', 'concession']),
  sent(1151, 'D’aucuns diront que quarante places, c’est un luxe pour quelques abonnés.', 'Some will say that forty spaces are a luxury for a few subscribers.', '/do.kœ̃ di.ʁɔ̃ kə ka.ʁɑ̃t plas sɛ.tœ̃ lyks puʁ kɛl.kə.za.bɔ.ne/', 'doh-KUHⁿ dee-ROHⁿ kuh ka-rahⁿt PLASS seh-tuhⁿ LÜKS poor kel-kuh-za-bo-NAY', ['objection']),
  sent(1152, 'Je prends l’objection dans sa forme la plus forte.', 'I take the objection in its strongest form.', '/ʒə pʁɑ̃ lɔb.ʒɛk.sjɔ̃ dɑ̃ sa fɔʁm la ply fɔʁt/', 'zhuh prahⁿ lob-zhek-SYOHⁿ dahⁿ sa FORM la plü FORT', ['objection', 'loyal'], FCVDR),
  sent(1153, 'Vous me direz que les vols baisseront de toute façon avec les caméras.', 'You will tell me that thefts will fall anyway with the cameras.', '/vu mə di.ʁe kə le vɔl bɛs.ʁɔ̃ də tut fa.sɔ̃ a.vɛk le ka.me.ʁa/', 'voo muh dee-RAY kuh lay VOL bess-ROHⁿ duh toot fa-SOHⁿ a-vek lay ka-may-RA', ['objection']),
  sent(1154, 'Je n’ai pas de chiffres sur ce point, et je ne vais pas en inventer.', 'I have no figures on this point, and I am not going to invent any.', '/ʒə ne pa də ʃifʁ syʁ sə pwɛ̃ e ʒə nə vɛ pa.zɑ̃.nɛ̃.vɑ̃.te/', 'zhuh neh pa duh SHEEFR sür suh PWEHⁿ ay zhuh nuh veh pa-zahⁿ-nehⁿ-vahⁿ-TAY', ['objection', 'limite'], FCVDR),
  sent(1155, 'Reste un point où les commerçants ont raison.', 'There remains one point on which the shopkeepers are right.', '/ʁɛs.tœ̃ pwɛ̃ u le kɔ.mɛʁ.sɑ̃ ɔ̃ ʁɛ.zɔ̃/', 'res-tuhⁿ PWEHⁿ oo lay ko-mehr-SAHⁿ ohⁿ reh-ZOHⁿ', ['objection', 'concession']),
  sent(1156, 'Prévenir l’objection, c’est la formuler aussi bien que l’adversaire, puis y répondre.', 'Anticipating the objection means stating it as well as the opponent would, then answering it.', '/pʁe.və.niʁ lɔb.ʒɛk.sjɔ̃ sɛ la fɔʁ.my.le o.si bjɛ̃ kə lad.vɛʁ.sɛʁ pɥi i ʁe.pɔ̃dʁ/', 'pray-vuh-NEER lob-zhek-SYOHⁿ seh la for-mü-LAY oh-see BYEHⁿ kuh lad-vehr-SEHR pwee ee ray-POHⁿDR', ['regle', 'objection'], FC,
    rule('Tu connais l’argument de tes adversaires. Que fais-tu ?', 'Tu le formules toi-même, dans sa forme la plus forte, et tu y réponds. Prévenir l’objection, c’est la formuler aussi bien que l’adversaire, puis y répondre.')),
  phrase(1157, 'on m’objectera que', 'it will be objected that', '/ɔ̃ mɔb.ʒɛk.tə.ʁa kə/', 'ohⁿ mob-zhek-tuh-RA kuh', ['mot', 'objection']),
  phrase(1158, 'd’aucuns diront que', 'some will say that (formal)', '/do.kœ̃ di.ʁɔ̃ kə/', 'doh-KUHⁿ dee-ROHⁿ kuh', ['mot', 'objection']),
  sent(1159, 'Les commerçants se moquent bien des cyclistes.', 'The shopkeepers could not care less about cyclists.', '/le kɔ.mɛʁ.sɑ̃ sə mɔk bjɛ̃ de si.klist/', 'lay ko-mehr-SAHⁿ suh mok BYEHⁿ day see-KLEEST', ['objection', 'paille', 'contre-exemple'], RECO),
  sent(1160, 'Les commerçants craignent de perdre des clients : la crainte est légitime.', 'The shopkeepers fear losing customers: the fear is legitimate.', '/le kɔ.mɛʁ.sɑ̃ kʁɛɲ də pɛʁ.dʁə de kli.jɑ̃ la kʁɛ̃t ɛ le.ʒi.tim/', 'lay ko-mehr-SAHⁿ KRENY duh pehr-druh day klee-YAHⁿ la KREHⁿT eh lay-zhee-TEEM', ['objection', 'loyal']),
  sent(1161, 'J’ai voulu répondre aux objections telles qu’elles sont.', 'I wanted to answer the objections as they are.', '/ʒe vu.ly ʁe.pɔ̃.dʁo.zɔb.ʒɛk.sjɔ̃ tɛl kɛl sɔ̃/', 'zhay voo-LÜ ray-pohⁿ-droh-zob-zhek-SYOHⁿ tel kel SOHⁿ', ['objection', 'loyal'], FCVDR),
  sent(1162, 'Je ne prétends pas avoir répondu à tout.', 'I do not claim to have answered everything.', '/ʒə nə pʁe.tɑ̃ pa.za.vwaʁ ʁe.pɔ̃.dy a tu/', 'zhuh nuh pray-tahⁿ pa-za-vwar ray-pohⁿ-DÜ a TOO', ['objection', 'limite']),
  phrase(1163, 'vous me direz que', 'you will tell me that', '/vu mə di.ʁe kə/', 'voo muh dee-RAY kuh', ['mot', 'objection']),
  sent(1164, 'L’objection la plus sérieuse, la voici.', 'The most serious objection, here it is.', '/lɔb.ʒɛk.sjɔ̃ la ply se.ʁjøz la vwa.si/', 'lob-zhek-SYOHⁿ la plü say-RYEUZ la vwa-SEE', ['plaidoyer', 'objection']),
];

/* ── ACT 12 · TON PLAIDOYER ──────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1165, 'Je défends l’abri à vélos, et je vous donne trois raisons.', 'I am defending the bike shelter, and I give you three reasons.', '/ʒə de.fɑ̃ la.bʁi a ve.lo e ʒə vu dɔn tʁwa ʁɛ.zɔ̃/', 'zhuh day-FAHⁿ la-bree a vay-LOH ay zhuh voo donn trwa reh-ZOHⁿ', ['plaidoyer', 'these']),
  sent(1166, 'J’ai un intérêt dans ce projet : je prends le train chaque matin.', 'I have an interest in this project: I take the train every morning.', '/ʒe œ̃.nɛ̃.te.ʁɛ dɑ̃ sə pʁɔ.ʒɛ ʒə pʁɑ̃ lə tʁɛ̃ ʃak ma.tɛ̃/', 'zhay uhⁿ-nehⁿ-tay-REH dahⁿ suh pro-ZHEH zhuh prahⁿ luh TREHⁿ shak ma-TEHⁿ', ['plaidoyer', 'ethos']),
  sent(1167, 'Voici le procédé que j’ai employé, et pourquoi je le crois loyal.', 'Here is the device I used, and why I believe it is fair.', '/vwa.si lə pʁɔ.se.de kə ʒe ɑ̃.plwa.je e puʁ.kwa ʒə lə kʁwa lwa.jal/', 'vwa-see luh pro-say-DAY kuh zhay ahⁿ-plwa-YAY ay poor-KWA zhuh luh krwa lwa-YAL', ['plaidoyer', 'nommer'], FCVDR),
  sent(1168, 'Je réponds à l’objection la plus forte, pas à la plus facile.', 'I answer the strongest objection, not the easiest.', '/ʒə ʁe.pɔ̃ a lɔb.ʒɛk.sjɔ̃ la ply fɔʁt pa.za la ply fa.sil/', 'zhuh ray-POHⁿ a lob-zhek-SYOHⁿ la plü FORT pa-za la plü fa-SEEL', ['plaidoyer', 'objection'], FCVDR),
  sent(1169, 'Si mes chiffres sont faux, vous saurez où les vérifier.', 'If my figures are wrong, you will know where to check them.', '/si me ʃifʁ sɔ̃ fo vu so.ʁe u le ve.ʁi.fje/', 'see may SHEEFR sohⁿ FOH voo soh-RAY oo lay vay-ree-FYAY', ['plaidoyer', 'logos']),
  sent(1170, 'Ce texte veut vous convaincre, pas vous piéger.', 'This text wants to convince you, not to trap you.', '/sə tɛkst vø vu kɔ̃.vɛ̃kʁ pa vu pje.ʒe/', 'suh TEKST veu voo kohⁿ-VEHⁿKR pa voo pyay-ZHAY', ['plaidoyer', 'loyal'], FCVDR),
  phrase(1171, 'un plaidoyer pour un projet', 'a plea for a project, a persuasive case', '/œ̃ plɛ.dwa.je puʁ œ̃ pʁɔ.ʒɛ/', 'uhⁿ pleh-dwa-YAY poor uhⁿ pro-ZHEH', ['mot', 'plaidoyer']),
  sent(1172, 'Mes procédés, je vous les nomme : une analogie, une question, une anaphore.', 'My devices, I name them for you: an analogy, a question, an anaphora.', '/me pʁɔ.se.de ʒə vu le nɔm yn a.na.lɔ.ʒi yn kɛs.tjɔ̃ y.na.na.fɔʁ/', 'may pro-say-DAY zhuh voo lay NOMM ün a-na-lo-ZHEE ün kes-TYOHⁿ ü-na-na-FOR', ['plaidoyer', 'nommer']),
  sent(1173, 'Le vote est à vous ; mes raisons sont sur la table.', 'The vote is yours; my reasons are on the table.', '/lə vɔt ɛ.ta vu me ʁɛ.zɔ̃ sɔ̃ syʁ la tabl/', 'luh VOT eh-ta VOO may reh-ZOHⁿ sohⁿ sür la TABL', ['plaidoyer', 'conclusion']),
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
 *  All original, written for the lesson (decision 18): speeches, leaflets
 *  and op-eds of one neighbourhood’s participatory-budget campaign in the
 *  invented town of Combelune. Every figure is internal to the lesson.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: Joëlle’s speech for the pool. Every move of the lesson, unnamed. */
export const JOELLE_TEXT =
  'Bonsoir à toutes et à tous. Je m’appelle Joëlle Marchetti et, depuis vingt-deux ans, j’apprends à nager aux enfants de Combelune. Vingt-deux ans, ce sont des milliers de premières longueurs, des milliers de petites mains qui lâchent enfin le bord. J’ai vu des enfants qui pleuraient au bord du petit bain devenir des nageurs, puis des maîtres-nageurs à leur tour. Ce soir, je viens vous parler de la piscine des Glycines. Je ne m’attarderai pas sur l’état des vestiaires : chacun ici a vu les carreaux fendus et les douches froides. Je voudrais plutôt vous poser une question simple. Qui, dans cette salle, accepterait que son enfant ne sache pas nager ? Personne, bien sûr. Pourtant, chaque année, nous voyons arriver en sixième des enfants qui n’ont jamais nagé une longueur. Or, si la piscine ferme, les écoles iront nager dans la ville voisine, à quarante minutes de car. Quarante minutes à l’aller, quarante au retour, pour vingt minutes dans l’eau. Une piscine, c’est un lieu où l’on apprend, un lieu où l’on se retrouve, un lieu où l’on vieillit en forme. Un grand champion de natation, que vous connaissez tous, m’a dit un jour qu’une ville sans piscine renonce à ses enfants. On me dira que la rénovation coûte cher. C’est vrai : cent quatre-vingt mille euros, plus de la moitié du budget participatif. Ce chiffre, je l’ai lu dans le rapport des services techniques, comme vous. Mais que vaut un budget qui laisse nos enfants au bord du bassin ? Le jardin et l’atelier sont de beaux projets ; ils peuvent attendre un an. Une génération d’enfants, elle, n’attendra pas. Je sais que d’autres projets méritent votre voix, et je ne dirai aucun mal de ceux qui les portent. Je vous demande de voter pour la piscine. Merci.';

/** Act 2: Armelle presents herself before arguing for the garden. */
export const ETHOS_TEXT =
  'Bonsoir. Je suis Armelle Quintin. Je ne suis ni paysagiste ni urbaniste : je suis retraitée, et je jardine depuis douze ans dans les bacs de la cour de l’école Pasteur, avec les enfants du mercredi. Je vous dois d’abord une précision : j’habite rue des Tanneurs, à trente mètres de l’ancien parking. Si le jardin voit le jour, j’en profiterai donc la première. Vous pouvez en tenir compte. Ce que je sais, je l’ai appris les mains dans la terre. Je sais qu’une parcelle de dix mètres carrés nourrit une famille en salades de mai à octobre. Je sais que les enfants goûtent plus volontiers les légumes qu’ils ont plantés eux-mêmes : je le vois chaque mercredi, et les institutrices de l’école vous le diront. Je sais aussi ce que je ne sais pas : je n’ai pas chiffré l’arrosage, et je laisserai les services techniques le faire. On m’a conseillé de commencer en vous disant que tout le quartier est derrière moi. Ce n’est pas vrai. Quarante-trois voisins ont signé notre lettre ; d’autres préfèrent garder des places de stationnement, et je les comprends : ce sont nos voisins aussi. Je ne vous demande pas de me croire parce que je suis aimable ou parce que j’ai des cheveux blancs. Je vous demande de venir samedi matin voir les bacs de l’école, de parler aux enfants, et de juger sur pièces. Les bacs sont ouverts de neuf heures à midi, et les enfants parlent plus volontiers que moi. Si, après cela, vous pensez que l’argent est mieux placé ailleurs, je l’entendrai. Vous êtes des voisins avertis, et vous saurez décider sans qu’on vous flatte. Merci de votre attention.';

/** Act 3: Théo’s note for the repair workshop. */
export const LOGOS_TEXT =
  'L’Atelier de la Clé : pourquoi il coûte moins qu’il ne rapporte. Par Théo Lambrecht, bénévole. Depuis dix-huit mois, nous réparons des objets un samedi sur deux, dans une salle prêtée par le centre social. Nous avons tenu un registre : 412 objets apportés, 287 réparés, soit sept sur dix. Ce sont surtout de petits appareils : grille-pain, lampes, aspirateurs, vélos d’enfant. Les objets que nous n’avons pas su réparer manquaient surtout de pièces détachées. Notre raisonnement tient en trois points. D’abord, un objet réparé est un objet qu’on ne rachète pas et qu’on ne jette pas. Si l’on retient un prix moyen de quarante euros par appareil neuf, nos 287 réparations ont évité aux habitants plus de onze mille euros d’achats. Ensuite, la déchetterie facture la commune au poids : chaque appareil qui ne finit pas dans une benne allège cette facture, même si nous ne savons pas encore de combien. Enfin, l’atelier forme : douze habitants savent aujourd’hui changer un câble ou une résistance, et ils transmettent ; trois d’entre eux tiennent désormais l’atelier sans nous. Nous demandons quarante mille euros pour équiper l’ancien bureau de poste : vingt-cinq mille pour les outils et les établis, quinze mille pour la mise aux normes électriques. Nous ne prétendons pas que l’atelier sauvera la planète, ni qu’il remplacera les réparateurs : deux artisans de la ville nous envoient d’ailleurs les objets qu’ils ne prennent plus. Nous disons seulement ceci : si un samedi sur deux suffit pour réparer sept objets sur dix, un atelier ouvert trois jours par semaine devrait en réparer bien davantage. Vous trouverez notre registre en annexe ; chacun peut le recompter. Les chiffres ne parlent pas tout seuls, mais ils peuvent être vérifiés.';

/** Act 5: two leaflets on Sunday opening of the media library. */
export const TRACTS_TEXT =
  'TRACT A · Pour la médiathèque le dimanche. « Ouvrir les bibliothèques le dimanche, c’est doubler la lecture chez les adolescents. » Ce n’est pas nous qui le disons : c’est Hortense Vallier, la romancière que toute la France lit cet été. Les experts sont unanimes : le dimanche est le jour de la culture. Et les grandes villes l’ont compris depuis longtemps. Imaginez des collégiens qui révisent au chaud, des familles qui empruntent des livres en sortant du marché, des retraités qui lisent le journal au lieu de rester seuls chez eux. Ouvrir le dimanche, c’est toute la ville qui y gagne. Votez pour la médiathèque le dimanche ! '
  + 'TRACT B · Ce que disent les chiffres. L’Observatoire régional de la lecture publique a suivi pendant deux ans neuf médiathèques de la région ouvertes le dimanche. Sa conclusion est prudente : la fréquentation du dimanche vient surtout de familles et d’étudiants, et une partie des visiteurs du samedi se déplace simplement au dimanche. Sur l’ensemble de la semaine, ces médiathèques ont tout de même gagné environ un dixième de visiteurs, dont certains venaient pour la première fois. L’effet sur la lecture des adolescents n’a pas été mesuré. L’étude est financée par la région et, en partie, par l’association des bibliothécaires, qui milite pour des horaires élargis ; le rapport complet est en ligne, établissement par établissement. Nadège Pellerin, directrice de notre médiathèque, ajoute : « Ouvrir le dimanche demande deux postes de plus. Je pense que cela en vaut la peine, mais je ne vous promets pas que les adolescents liront deux fois plus. »';

/** Act 6: Rémi’s op-ed for the workshop, built on analogies. */
export const ANALOGIE_TEXT =
  'Réparer, c’est soigner. Par Rémi Castagné, retraité, bénévole de l’Atelier de la Clé. Une ville qui jette ses objets au premier défaut ressemble à un médecin qui remplacerait le patient au lieu de soigner sa jambe. L’image est forte, je l’admets, et elle a ses limites : un grille-pain n’est pas une personne. Prenons donc une comparaison plus proche. Il y a cinquante ans, chaque quartier avait son cordonnier ; personne ne jetait une paire de chaussures pour un talon usé. On le payait un peu, on gardait ses chaussures longtemps, et le cordonnier vivait de son métier. L’atelier ne fait rien d’autre qu’un cordonnier pour les lampes et les grille-pain. Nos adversaires ont, eux aussi, leur analogie : selon eux, l’atelier serait « une fuite d’eau dans le budget », une dépense qui coule sans fin. Mais une fuite ne rapporte rien, alors que l’atelier évite des achats et forme des habitants. La comparaison ne tient que si l’on oublie ce que l’atelier produit. On nous dit aussi qu’à ce compte, il faudrait un atelier dans chaque rue. Non : un atelier par quartier suffit, comme une seule cordonnerie suffisait. Comparaison n’est pas raison, dit le proverbe. Une analogie ne prouve rien à elle seule ; elle éclaire. Elle devient un argument quand le point commun qu’elle désigne est justement celui dont dépend la conclusion. Le cordonnier et l’atelier partagent ce point : ils prolongent la vie d’objets qui en valent la peine. Le médecin et l’atelier, beaucoup moins. Je n’ai pas besoin d’autre image pour vous convaincre ; j’ai besoin de vos voix, et de vos grille-pain cassés. Gardez le cordonnier, oubliez le médecin.';

/** Act 7: two leaflets and the council’s neutral summary, on the bike
 *  shelter. */
export const CADRAGE_TEXT =
  'TRACT A · Collectif Gare à vélo. Quarante vélos à l’abri pour le prix de douze voitures. Chaque matin, plus de soixante cyclistes attachent leur vélo aux grilles de la gare, sous la pluie ; selon notre enquête auprès de quatre-vingts d’entre eux, un sur cinq s’est déjà fait voler son vélo. L’abri libérerait les trottoirs et rendrait la gare enfin accueillante. Coût : 52 000 euros, soit 1 300 euros par place de vélo. Un investissement modeste pour une ville qui veut respirer. Le soir, plus besoin de chercher sa roue arrière : on retrouve son vélo entier, sec et prêt à repartir. '
  + 'TRACT B · Association des commerçants de la rue de la Gare. Douze places de stationnement sacrifiées. Le projet d’abri supprimerait douze places devant nos commerces, au profit d’un local fermé réservé à quelques abonnés. Nos clients âgés, qui ne viennent pas à vélo, devront se garer plus loin, avec leurs courses, sous la même pluie. Coût : 52 000 euros, soit plus de 4 300 euros par place de stationnement perdue. Une dépense lourde, au moment où le centre a besoin de clients, pas de contraintes supplémentaires. '
  + 'NOTE DU CONSEIL DE QUARTIER. Le projet remplace douze places de stationnement de la rue de la Gare par un abri fermé de quarante places pour vélos, accessible avec un abonnement de deux euros par mois. Coût estimé : 52 000 euros. Selon le comptage réalisé en mars par la ville, ces douze places sont occupées surtout par des véhicules garés à la journée. Les deux associations ont été invitées à la réunion publique du 14.';

/** Act 8: Nadège’s speech for Sunday opening, built on questions. */
export const QUESTION_TEXT =
  'Mesdames et messieurs, je dirige la médiathèque de Combelune depuis six ans, et je voudrais commencer par une vraie question, à laquelle je n’ai pas la réponse : que font, le dimanche, les collégiens qui n’ont pas de bureau chez eux ? Je l’ignore, et c’est bien le problème. Ce que je sais, c’est que le samedi, nos quarante places assises sont prises dès onze heures ; certains samedis, des lycéens s’assoient par terre, entre les rayonnages, pour réviser. Faut-il refuser des lecteurs parce qu’ils lisent le mauvais jour ? Je ne le crois pas. On me répond que le dimanche est fait pour la famille. Mais une famille ne peut-elle pas lire ensemble ? Nos ateliers du samedi accueillent déjà des parents et des enfants côte à côte ; le dimanche, ces familles seraient simplement plus nombreuses, et moins pressées. Bien sûr, ouvrir le dimanche coûte : deux postes, soit soixante mille euros par an. Qui oserait mettre un prix sur la culture ? Je retire ma question : elle esquive le sujet. La culture a un prix, et ce prix, je vous le donne. Soixante mille euros par an, c’est moins que l’entretien annuel du parking de la mairie. Est-ce trop cher pour un lieu ouvert à tous, gratuit, chauffé, où personne ne vous demande de consommer ? À vous d’en juger. Je vous laisse aussi le rapport de l’Observatoire régional : il ne promet pas de miracle, et moi non plus. Une dernière question, et celle-là, je vous la laisse vraiment : où voulez-vous que vos enfants passent leurs dimanches de pluie ?';

/** Act 9: Samir’s closing speech for the garden. */
export const FIGURES_TEXT =
  'Je serai bref, et je vous parlerai de terre. Ce parking, je le traverse chaque matin avec mes enfants. C’est un rectangle de goudron, trois voitures, des flaques ; le soir, personne ne s’y attarde, et le dimanche, il reste vide. Voici ce que nous vous proposons à la place. Un jardin où les enfants de l’école sèmeront leurs radis. Un jardin où les retraités auront enfin un banc à l’ombre. Un jardin où des voisins qui ne se parlent pas se prêteront un arrosoir. On nous dit que c’est peu de chose. C’est vrai : au départ, c’est une graine, bientôt une parcelle, et un jour une rue qui change de visage. Je ne vous promets pas une révolution. Je vous promets des tomates en août, et des voisins qui se connaissent. Nous avons fait les comptes. Le jardin coûte trente-cinq mille euros, dont vingt mille pour retirer le goudron ; les services techniques ont vérifié que la terre, dessous, pourra être cultivée après une année de compost. L’association prend l’entretien en charge. Quarante-trois voisins ont signé notre lettre, et vingt-huit familles se sont déjà inscrites pour une parcelle ; les autres pourront venir aux ateliers du samedi, ouverts à tous. Si, dans deux ans, le jardin est vide, vous aurez le droit de nous le reprocher. Ce que nous demandons, ce n’est pas votre émotion : c’est votre voix. Votez pour le jardin, votez pour la rue, votez pour ceux qui y vivront après nous.';

/** Act 10: Gilles’s speech for the pool, full of prétéritions. */
export const PRETERITION_TEXT =
  'Chers voisins, je ne ferai pas ce soir le procès du jardin partagé. Je ne rappellerai pas que l’association qui le porte n’a jamais géré plus de quatre bacs dans une cour d’école. Je ne dirai pas non plus que vingt mille euros pour retirer du goudron, c’est cher payé pour des radis. Ce n’est pas mon genre, et je ne doute pas de la bonne volonté des jardiniers. Je passerai aussi sur les rumeurs d’arrosage avec l’eau de la ville : chacun se fera son idée. Parlons plutôt de la piscine. Elle a vu grandir trois générations d’enfants du quartier, et elle n’a jamais fermé un seul été. Elle accueille chaque semaine les élèves de quatre écoles et un club de cent vingt nageurs ; le mardi soir, ce sont les retraités du cours d’aquagym. Ses vestiaires datent de 1972, et le rapport des services techniques, que vous avez tous reçu, demande des travaux avant deux ans. Je ne reviendrai pas sur le coût, cent quatre-vingt mille euros, détaillé page six du rapport. Inutile de vous rappeler ce qu’il en coûterait de la fermer : vous le savez mieux que moi. Je n’évoquerai pas les familles du car : d’autres l’ont fait, et très bien. Je rappellerai seulement que la piscine est le seul équipement sportif couvert du quartier. Mon propos est simple. Le jardin est une idée sympathique ; la piscine est un service public. Entre une idée et un service, le choix devrait aller de soi.';

/** Act 11: Maud’s op-ed for the bike shelter, three objections answered. */
export const OBJECTION_TEXT =
  'L’abri à vélos : trois objections, trois réponses. Par Maud Lefranc, cycliste, et cliente des commerces de la rue de la Gare : j’y achète mon pain, mes journaux et mes cadeaux, et je tiens à ce qu’elle vive. On m’objectera d’abord que l’abri supprime douze places de stationnement. C’est exact, et je ne veux pas le minimiser : pour un commerçant, douze places, ce sont des clients possibles. Mais le comptage fait en mars par la ville montre que ces places sont occupées, en moyenne, par les mêmes voitures du matin au soir : ce sont surtout des voitures de navetteurs, pas de clients. Un client se gare vingt minutes ; ces voitures-là restent neuf heures. D’aucuns diront ensuite que quarante places, c’est un luxe pour quelques abonnés. L’objection est sérieuse, et je la prends dans sa forme la plus forte : pourquoi dépenser 52 000 euros pour une minorité ? Parce que cette minorité grandit : soixante vélos attachés chaque matin aux grilles, c’est déjà plus que l’abri n’en contiendra. Vous me direz enfin que les vols baisseront de toute façon avec les nouvelles caméras. Peut-être. Je n’ai pas de chiffres sur ce point, et je ne vais pas en inventer. Je constate seulement qu’une caméra filme un vol, alors qu’un abri fermé l’empêche ; et aucune caméra n’a jamais protégé une selle de la pluie. Reste un point où les commerçants ont raison : pendant les travaux, l’accès des livreurs doit être garanti. Je demande que ce soit écrit dans le projet. Je ne prétends pas avoir répondu à tout. J’ai voulu répondre aux objections telles qu’elles sont, pas telles qu’il serait commode qu’elles soient.';

/** Act 12, THE TASK DOSSIER. Printed twice: as the act’s reading, and
 *  inside the task brief (no `source` field on `task`). */
export const DOSSIER_TEXT =
  'Budget participatif de Combelune · quartier des Tanneurs · fiche de vote. Enveloppe totale : 300 000 euros, cinq projets en lice. Voici trois d’entre eux. '
  + 'PROJET 1 · Le jardin des Tanneurs. Trente parcelles sur l’ancien parking de la rue des Tanneurs. Coût : 35 000 euros, dont 20 000 pour retirer le goudron. Entretien assuré par une association ; vingt-huit familles déjà inscrites. L’association anime depuis douze ans les bacs de l’école Pasteur avec les enfants du mercredi. Objection principale : trois places de stationnement disparaissent, et l’association n’a jamais géré un terrain de cette taille. '
  + 'PROJET 2 · La médiathèque le dimanche. Ouverture de 10 h à 17 h, trente-cinq dimanches par an. Coût : 60 000 euros par an (deux postes). Le samedi, les quarante places assises sont prises dès 11 heures. Dans neuf médiathèques de la région ouvertes le dimanche, le public du dimanche est surtout fait de familles et d’étudiants. Objection principale : la dépense revient chaque année, et l’effet sur la lecture des adolescents n’a pas été mesuré. '
  + 'PROJET 3 · L’abri à vélos de la gare. Quarante places fermées, accessibles avec un abonnement de 2 euros par mois. Coût : 52 000 euros. Soixante vélos sont attachés chaque matin aux grilles de la gare. Selon le comptage de la ville, les douze places de stationnement remplacées sont occupées surtout par des voitures de navetteurs. Objection principale : la rue perd des places devant ses commerces, pour un service réservé aux abonnés.';
