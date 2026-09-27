// b1.36.l1 « Le monde des affaires » · the authored corpus, the imports and
// the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md, in the VOCAB SHAPE, TOPIC VARIANT, of
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §2 and §2.3.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   BUSINESS VOCABULARY FOR B1, taught as WORD FAMILIES and COLLOCATIONS,
//   never as isolated nouns (shapes doc §2.3). The unit of teaching is the
//   noun WITH WHAT YOU DO WITH IT: on assiste à une réunion, on respecte un
//   délai, on passe une commande, on fait un devis.
//
//     act 1   the method: assister à une réunion, fixer un rendez-vous,
//             respecter un délai, passer une commande; gérer / la gestion /
//             un gestionnaire; attendre against assister à
//     act 2   the company and its roles: une PME, le siège, un bureau, le
//             service des ventes, réaliser un chiffre d'affaires, occuper un
//             poste; diriger, vendre, produire, embaucher and their families;
//             the calques branche, position, quartiers généraux, louer
//     act 3   the meeting: l'ordre du jour, prendre la parole, faire le
//             point, animer une réunion, prendre des notes, rédiger un compte
//             rendu; réunir / une réunion; the calques minutes, agenda, item
//     act 4   the project: prendre du retard, être dans les temps, un
//             échéancier (Québec) / le planning (France), livrer / la
//             livraison, avancer, reporter une date; délai against retard;
//             the Québec cédule
//     act 5   clients and money: faire un devis, une soumission (Québec),
//             régler une facture, accorder une remise, négocier, facturer,
//             hors taxes / toutes taxes comprises, revoir à la baisse
//     act 6   orders and contracts: passer, livrer, annuler une commande;
//             conclure un contrat, un accord; lancer un produit / le
//             lancement; the calques placer, canceller, agrément, termes
//     act 7   polite requests: pourriez-vous, je me permets de, je vous
//             serais reconnaissant de, serait-il possible de, faire parvenir,
//             merci de + infinitive (lesson 9 in B1 owns the conditional of
//             politeness; this lesson uses it at work)
//     act 8   polite disagreement: je ne suis pas tout à fait d'accord, je
//             comprends votre point de vue, il me semble que, trouver un
//             compromis; the calques avoir un point, faire du sens
//     act 9   tu or vous at work: passer au tu, garder le vous, se tutoyer
//             entre collègues (lesson 26 in B1 owns tu and vous as a
//             system); never mix the two in one message
//     act 10  a first work email, kept light: l'objet, la pièce jointe,
//             mettre en copie, répondre à tous, transférer; un courriel
//             (Québec, standard) / un mail (France, familier); openings and
//             sign-offs by country. Lesson 39 in B1 is the full capstone.
//     act 11  a message to a client: a new meeting date and a revised quote
//
//   NOT OWNED, CITED BY NUMBER ONLY: the conditional of politeness (lesson 9
//   in B1); tu and vous as a system (lesson 26 in B1); register as a system
//   (lesson 25 in B1); letters and emails as a genre (lesson 39 in B1, not
//   yet written: the letter's structure is NOT taught here). Rows from the
//   politeness, register and tu-vous lessons are imported, never retyped.
//
//   NO UNGRAMMATICAL OR CALQUED SENTENCE IS EVER A ROW. Every wrong form
//   lives in a `commonErrors.wrong`, a `trapDrill.promptSound`, a scene
//   `break.wrong` or a quiz `errorSpot.prompt`. The Québec forms (une
//   soumission, un échéancier, un courriel) and the France forms (le
//   planning, un mail, hors taxes) are rows because they are right, and
//   tagged. Every company and person is invented: Solane (a Montréal PME
//   that makes lamps), the Hôtel des Tilleuls (Lyon), the Café Bellerive
//   (Genève), the Atelier Ndiaye (Dakar).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, and Postgres probed read-only 2026-09-27
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `affaires` exists (« Les affaires », domain travail, levelRange
//     b1-b2, subThemes EMPTY in the seed). The orchestrator names three
//     sub-themes for new rows: « l'entreprise et ses métiers », « la réunion
//     et le projet », « clients, prix et contrats ». Setting them is a
//     Postgres edit for the import, not for this file.
//  2. POSTGRES PROBED READ-ONLY 2026-09-27: 316 rows, all published: fr.b1
//     .001-.149 (149 rows), fr.b2 .001-.167 (167 rows). NOTHING at or above
//     1000 at any level.
//  3. ID BLOCK: b1.36 owns `fr.b1.affaires.1000`-`.1199` AND NOTHING ELSE.
//     Used: `.1000`-`.1181` (182 rows) in eleven act blocks; `.1182`-`.1199`
//     free for fixes. Compare full
//     ids, never numbers: the level is part of the id.
//  4. THE SEED CARRIES 12 affaires ROWS (fr.b1 .001-.006, fr.b2 .001-.005,
//     .054). The other published rows are DB-ONLY and cannot be named here
//     (`src()` resolves against the seed). The DB holds bare headwords for
//     most of this topic (une facture, un devis, un délai, le chiffre
//     d'affaires, la négociation, un courriel, une pièce jointe, le siège
//     social...), so THIS CORPUS AUTHORS NO BARE HEADWORD THE DB HAS: every
//     phrase row is a collocation or a family, and the bare nouns live in
//     sentence rows (which the flashcard hub never keys). Headword keys were
//     checked against all 316 DB rows: zero clashes. Near twins are listed
//     in DB_ONLY_TWINS for the import.
//  5. On-topic seed rows from `affaires`, `bureau`, `collegues`,
//     `rp-etiquette`, `conseils-et-suggestions`, `langue-soignee`,
//     `heure-et-date`, `internet`, `marche` were read from seed.json on
//     2026-09-27 (content v75: the B1 rows of lessons 9, 21, 25 and 26 are in
//     the seed now); each reused id is in §F with its French. Seed
//     respellings are NEVER printed in a section, only fr/en.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR, all a
//     real /n/ or /m/ written double so `hasPlainNasal` (which fires on
//     OH/EH/AH/UH + N or M at a boundary) cannot fire:
//       Solane         so-LANN               personnes    pehr-SONN
//       semaine(s)     SMEHNN                automne      oh-TONN
//       humaines       sü-MEHNN              donne        DONN
//       bonne          bonn                  sommes       SOMM
//       PME            pay-emm-UH
//  7. FIVE HEADWORDS THE SEED ALREADY HAS IN ANOTHER THEME ARE IMPORTED,
//     NOT RE-AUTHORED (checked 2026-09-27): prendre des notes (a1.ecole),
//     il me semble que (b1.opinions-et-avis), passer au tu (lesson 26 in
//     B1, rp-etiquette), un mail (a2.internet), Bien à vous (a1.salutations).
//     « même » is MEM, the house spelling. No U+203F tie anywhere, in a
//     respelling or an IPA field.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.36',
  seq: 36,
  title: 'The World of Business',
  sub: 'Le monde des affaires',
  canDo: 'Can understand a welcome email, meeting minutes, a client request and a company newsletter, and use about sixty business collocations and a dozen word families (the company, the meeting, the project, clients, prices, orders and contracts) to make polite requests, disagree politely, choose tu or vous at work and write a short professional message to a client',
  prereqUnitIds: ['b1.09', 'b1.26'],
} as const;

export const LESSON_ID = 'b1.36.l1';
export const THEME = 'affaires';
export const LEVEL = 'b1' as const;

/** ONE block. DB holds fr.b1 .001-.149 and fr.b2 .001-.167; b1.36 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 * ══════════════════════════════════════════════════════════════════════════ */

export const CONDITIONNEL_UNIT = 'b1.08';
export const POLITESSE_UNIT = 'b1.09';
export const INVERSION_UNIT = 'b1.21';
export const REGISTRES_UNIT = 'b1.25';
export const TUVOUS_UNIT = 'b1.26';
export const CONCESSION_UNIT = 'b1.32';
export const COURRIELS_UNIT = 'b1.39';

/** TODO(import): drop once every b1 unit is a row in `content_units`. b1.39
 *  is not written yet, so its label comes from the plan. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5, 'b1.06': 6,
  'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10, 'b1.11': 11, 'b1.12': 12,
  'b1.13': 13, 'b1.14': 14, 'b1.15': 15, 'b1.16': 16, 'b1.17': 17, 'b1.18': 18,
  'b1.19': 19, 'b1.20': 20, 'b1.21': 21, 'b1.22': 22, 'b1.23': 23, 'b1.24': 24,
  'b1.25': 25, 'b1.26': 26, 'b1.27': 27, 'b1.28': 28, 'b1.29': 29, 'b1.30': 30,
  'b1.31': 31, 'b1.32': 32, 'b1.33': 33, 'b1.34': 34, 'b1.35': 35, 'b1.36': 36,
  'b1.37': 37, 'b1.38': 38, 'b1.39': 39,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}
/** The English label, for English strings (userEn, briefEn, grader notes). */
export function refEn(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `lesson ${planned} in B1` : unitRef(unitId);
}

export const CONDITIONNEL_REF = refFr(CONDITIONNEL_UNIT);
export const POLITESSE_REF = refFr(POLITESSE_UNIT);
export const INVERSION_REF = refFr(INVERSION_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const TUVOUS_REF = refFr(TUVOUS_UNIT);
export const COURRIELS_REF = refFr(COURRIELS_UNIT);
export const POLITESSE_REF_EN = refEn(POLITESSE_UNIT);
export const TUVOUS_REF_EN = refEn(TUVOUS_UNIT);
export const COURRIELS_REF_EN = refEn(COURRIELS_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE DESK AND ITS GESTURES. On a desk, every document waits for a
 *  gesture: the quote is drawn up, the invoice is settled, the order is
 *  placed, the deadline is met, the meeting is attended. A learner who knows
 *  « un délai » alone says « faire un délai » or « attendre la réunion »;
 *  one who knows what you DO with it says « respecter un délai » and
 *  « assister à la réunion ». The polite formulas are the same idea one
 *  level up: a request is something you soften.
 *
 *  It is NOT « learn the business words »: a list of nouns is exactly what
 *  this lesson refuses (see REFRAME_REJECTED).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Au travail, on n'apprend pas un nom : on apprend ce qu'on en fait.";
export const REFRAME_EN = 'At work you do not learn a noun: you learn what you do with it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Apprends les mots des affaires par thème.',
    why: "That is the isolated-noun list the shapes doc (§2.3) forbids. A learner with « une facture, un devis, un délai » still says « payer pour la facture » and « faire un délai ». The DB already holds those bare nouns; what is missing is the verb.",
  },
  {
    text: "Un mot n'arrive jamais seul : il vient avec sa famille et ses voisins.",
    why: "Lesson 33 in B1's reframe, true here too, but reusing it would blur two lessons, and the business failure is narrower: the English VERB carried over (attendre for attend, placer for place, délivrer for deliver). « Ce qu'on en fait » names that exactly.",
  },
  {
    text: 'En affaires, sois toujours poli.',
    why: "A lecture, not a language rule, and false where acts 7 to 9 have to hold: a colleague you tutoie gets « Tu peux m'envoyer le fichier ? », which is right and not rude. Politeness is a choice of form, not a virtue.",
  },
  {
    text: "Le français des affaires, c'est l'anglais avec un accent.",
    why: "False on almost every screen: attend is assister à, a delay is un retard (un délai is the time allowed), a quote is un devis, a branch is une succursale, the minutes are le compte rendu.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-27 and its French is in the
 *  trailing comment. `(named only)` rows carry no `flashcard` drill, so no
 *  deckTranche can release them.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.affaires.001',                  // une entreprise
    'fr.b1.bureau.005',                    // Le stagiaire a dû apprendre à gérer plusieurs dossiers en même temps.
  ],
  act2: [
    'fr.b1.affaires.002',                  // un entretien d'embauche
  ],
  act3: [
    'fr.b1.pronoms-essentiels.1144',       // Les notes que j'ai prises pendant la réunion sont sur mon bureau.
    'fr.b1.opinions-et-avis.1552',         // Ils ont accepté de repousser la réunion.
    'fr.a2.collegues.005',                 // Nous avons une réunion à dix heures.
    'fr.a1.ecole.105',                     // prendre des notes
  ],
  act4: [
    'fr.b1.heure-et-date.071',             // Ce mois-ci, plusieurs échéances tombent le même jour.  (named only)
    'fr.b1.heure-et-date.028',             // Je dois reporter le rendez-vous à demain.
  ],
  act5: [
    'fr.a2.marche.015',                    // le rabais
    'fr.a2.marche.024',                    // négocier
    'fr.b1.conseils-et-suggestions.1059',  // Est-ce que vous pourriez m'envoyer le devis ?
  ],
  act6: [
    'fr.b1.faits-et-procedures.1048',      // Le contrat a été signé lundi.
    'fr.a2.metiers.072',                   // Elle gère les commandes et les livraisons.
  ],
  act7: [
    'fr.b1.conseils-et-suggestions.1077',  // je me permets de
    'fr.b1.conseils-et-suggestions.1084',  // Je me permets de vous relancer au sujet du devis.
    'fr.b1.langue-soignee.1129',           // Seriez-vous disponible jeudi ?
    'fr.b1.langue-soignee.1386',           // Pourriez-vous me confirmer que cela vous convient ?
  ],
  act8: [
    'fr.b1.opinions-et-avis.107',          // il me semble que
    'fr.b2.collegues.002',                 // Il faut que nous trouvions un compromis avant la fin de la réunion.  (named only)
  ],
  act9: [
    'fr.b1.rp-etiquette.1054',             // passer au tu
    'fr.a2.rp-etiquette.008',              // tutoyer
    'fr.a2.rp-etiquette.009',              // vouvoyer
    'fr.b1.rp-etiquette.1070',             // Devant un client, on revient au vous.
    'fr.b1.rp-etiquette.1075',             // On se tutoie à la pause, et on se vouvoie en réunion.
    'fr.b1.rp-etiquette.1134',             // Au Québec, on se tutoie beaucoup plus qu'en France.
    'fr.b1.rp-etiquette.1061',             // Le client décide, pas le vendeur.
  ],
  act10: [
    'fr.a2.internet.002',                  // un courriel
    'fr.b1.langue-soignee.1388',           // l'objet
    'fr.a2.bureau.006',                    // Je vous envoie le dossier en pièce jointe.
    'fr.b1.langue-soignee.1327',           // Bien cordialement
    'fr.b1.langue-soignee.1326',           // Au plaisir
    'fr.a2.internet.182',                  // un mail
    'fr.a1.salutations.119',               // Bien à vous  (named only)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.heure-et-date.071',  // dictation only
  'fr.b2.collegues.002',      // sentence, dictation
  'fr.a1.salutations.119',    // voiceflash, review
];

/** No `voiceflash` either: never in a `practice` speak section. The lesson
 *  file asserts at load that every import NOT listed here has voiceflash. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.b1.affaires.001',               // flashcard only
  'fr.b1.affaires.002',               // flashcard only
  'fr.b1.bureau.005',                 // sentence, flashcard, review
  'fr.a2.collegues.005',              // flashcard (gapfill)
  'fr.b1.heure-et-date.028',          // flashcard, sentence
  'fr.a2.bureau.006',                 // flashcard (gapfill)
  'fr.a2.rp-etiquette.008',           // flashcard, review
  'fr.a2.rp-etiquette.009',           // flashcard, review
];

/** Published Postgres rows the seed does not carry, so they cannot be named
 *  here; each is near-twinned by an authored row. None is the same French,
 *  so the import keeps both unless Paul decides otherwise. */
export const DB_ONLY_TWINS: readonly { dbId: string; fr: string; twin: string }[] = [
  { dbId: 'fr.b1.affaires.086', fr: 'un délai', twin: E(1002) },
  { dbId: 'fr.b1.affaires.038', fr: 'un devis', twin: E(1074) },
  { dbId: 'fr.b1.affaires.037', fr: 'une facture', twin: E(1079) },
  { dbId: 'fr.b1.affaires.046', fr: 'la facturation', twin: E(1079) },
  { dbId: 'fr.b1.affaires.049', fr: 'la négociation', twin: E(1078) },
  { dbId: 'fr.b1.affaires.042', fr: "le chiffre d'affaires", twin: E(1021) },
  { dbId: 'fr.b1.affaires.082', fr: 'le siège social', twin: E(1024) },
  { dbId: 'fr.b1.affaires.075', fr: 'un courriel', twin: E(1154) },
  { dbId: 'fr.b1.affaires.076', fr: 'une pièce jointe', twin: E(1162) },
  { dbId: 'fr.b1.affaires.123', fr: "Mon patron m'a demandé de rédiger un compte rendu.", twin: E(1038) },
  { dbId: 'fr.b1.affaires.100', fr: 'Notre équipe organise une réunion tous les lundis matin.', twin: E(1047) },
  { dbId: 'fr.b1.affaires.137', fr: "L'agence a annoncé de nouveaux tarifs pour l'année prochaine.", twin: E(1089) },
  { dbId: 'fr.b1.affaires.028', fr: 'Le fournisseur a livré la commande avec deux jours de retard.', twin: E(1062) },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Three kinds of row: a FAMILY row (kind phrase, tag famille: the verb,
 *  the noun, the person, in one card), a COLLOCATION row (kind phrase, tag
 *  collocation: the noun with what you do with it), and sentence rows that
 *  put them in a real situation. See §A.6 for the respellings.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const GP = ['affaires-vocabulaire'];

type Reg = NonNullable<Item['register']>;

/** A word family: every member in one card. */
const fam = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['famille', ...tags], drills: FCVR, version: 1, register: 'courant', grammarPoints: GP, notes,
});

/** A collocation: the noun and what you do with it. */
const col = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string, register: Reg = 'courant'): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['collocation', ...tags], drills: FCVR, version: 1, register, grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: 'courant', grammarPoints: GP, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · UN NOM ET CE QU'ON EN FAIT ──────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  col(1000, 'assister à une réunion', 'to attend a meeting', '/a.sis.te a yn ʁe.y.njɔ̃/', 'a-sees-TAY a ün ray-ü-NYOHⁿ', ['reunion', 'faux-ami'], "Pas attendre : attendre, c'est rester sans rien faire."),
  col(1001, 'fixer un rendez-vous', 'to set up an appointment', '/fik.se œ̃ ʁɑ̃.de.vu/', 'feek-SAY uhⁿ rahⁿ-day-VOO', ['reunion'], 'On dit aussi prendre rendez-vous.'),
  col(1002, 'respecter un délai', 'to meet a deadline', '/ʁɛs.pɛk.te œ̃ de.lɛ/', 'rehs-pehk-TAY uhⁿ day-LEH', ['projet']),
  col(1003, 'passer une commande', 'to place an order', '/pa.se yn kɔ.mɑ̃d/', 'pa-SAY ün ko-MAHⁿD', ['commande']),
  fam(1004, 'gérer, la gestion, un gestionnaire', 'to manage, management, a manager', '/ʒe.ʁe la ʒɛs.tjɔ̃ œ̃ ʒɛs.tjɔ.nɛʁ/', 'zhay-RAY, la zhehs-TYOHⁿ, uhⁿ zhehs-tyo-NEHR', ['entreprise'], 'Famille : le verbe, le nom de l’action, la personne.'),
  sent(1005, 'Je vais assister à la réunion de dix heures.', 'I am going to attend the ten o’clock meeting.', '/ʒə vɛ a.sis.te a la ʁe.y.njɔ̃ də di.zœʁ/', 'zhuh veh a-sees-TAY a la ray-ü-NYOHⁿ duh dee-ZUHR', ['scene', 'reunion'], FCVDR),
  sent(1006, 'On a fixé un rendez-vous avec la cliente jeudi.', 'We have set up an appointment with the client on Thursday.', '/ɔ̃.na fik.se œ̃ ʁɑ̃.de.vu a.vɛk la kli.jɑ̃t ʒø.di/', 'ohⁿ-na feek-SAY uhⁿ rahⁿ-day-VOO | a-vehk la klee-YAHⁿT zhuh-DEE', ['reunion']),
  sent(1007, 'Cette fois, nous allons respecter le délai.', 'This time, we are going to meet the deadline.', '/sɛt fwa nu.za.lɔ̃ ʁɛs.pɛk.te lə de.lɛ/', 'seht FWA | noo-za-lohⁿ rehs-pehk-TAY luh day-LEH', ['projet'], FCVDR),
  sent(1008, "L'hôtel passe une commande de quarante lampes.", 'The hotel is placing an order for forty lamps.', '/lo.tɛl pas yn kɔ.mɑ̃d də ka.ʁɑ̃t lɑ̃p/', 'loh-TEHL pass ün ko-MAHⁿD | duh ka-rahⁿt LAHⁿP', ['commande']),
  sent(1009, REFRAME, REFRAME_EN, '/o tʁa.vaj ɔ̃ na.pʁɑ̃ pa œ̃ nɔ̃ ɔ̃.na.pʁɑ̃ sə kɔ̃.nɑ̃ fɛ/', 'oh tra-VAHY | ohⁿ na-prahⁿ pa uhⁿ NOHⁿ | ohⁿ-na-PRAHⁿ suh kohⁿ-nahⁿ FEH', ['rule', 'reframe'], ['flashcard'],
    rule('« Un délai » : qu’est-ce qu’on en fait ?', 'On le respecte. Un nom s’apprend avec ce qu’on en fait.')),
  sent(1010, "On n'attend pas une réunion : on y assiste.", 'You do not wait for a meeting: you attend it.', '/ɔ̃ na.tɑ̃ pa yn ʁe.y.njɔ̃ ɔ̃.ni.a.sist/', 'ohⁿ na-tahⁿ pa ün ray-ü-NYOHⁿ | ohⁿ-nee a-SEEST', ['reunion', 'faux-ami']),
  sent(1011, 'Josée gère une équipe de huit personnes.', 'Josée manages a team of eight people.', '/ʒo.ze ʒɛʁ yn e.kip də ɥi pɛʁ.sɔn/', 'zho-ZAY ZHEHR ün ay-KEEP | duh wee pehr-SONN', ['entreprise']),
  sent(1012, 'La gestion des commandes prend beaucoup de temps.', 'Managing orders takes a lot of time.', '/la ʒɛs.tjɔ̃ de kɔ.mɑ̃d pʁɑ̃ bo.ku də tɑ̃/', 'la zhehs-TYOHⁿ day ko-MAHⁿD | prahⁿ boh-koo duh TAHⁿ', ['entreprise', 'famille'], FCVDR),
  sent(1013, 'Marc-André est gestionnaire de projet chez Solane.', 'Marc-André is a project manager at Solane.', '/maʁ.kɑ̃.dʁe ɛ ʒɛs.tjɔ.nɛʁ də pʁɔ.ʒɛ ʃe sɔ.lan/', 'mar-kahⁿ-DRAY eh zhehs-tyo-NEHR duh pro-ZHEH | shay so-LANN', ['entreprise', 'quebec']),
  sent(1014, 'Apprends le nom avec son verbe.', 'Learn the noun with its verb.', '/a.pʁɑ̃ lə nɔ̃ a.vɛk sɔ̃ vɛʁb/', 'a-PRAHⁿ luh NOHⁿ | a-vehk sohⁿ VEHRB', ['rule', 'verbe'], ['flashcard'],
    rule('Un rendez-vous : quel verbe pour le mettre dans ton agenda ?', 'Fixer, ou prendre : on fixe un rendez-vous, on prend rendez-vous.')),
];

/* ── ACT 2 · L'ENTREPRISE ET SES MÉTIERS ─────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  fam(1015, 'diriger, la direction, un directeur, une directrice', 'to run, management, a director', '/di.ʁi.ʒe la di.ʁɛk.sjɔ̃ œ̃ di.ʁɛk.tœʁ yn di.ʁɛk.tʁis/', 'dee-ree-ZHAY, la dee-rehk-SYOHⁿ, uhⁿ dee-rehk-TUHR, ün dee-rehk-TREESS', ['entreprise'], 'Famille : le verbe, le nom, la personne. La direction, c’est aussi l’équipe qui dirige.'),
  fam(1016, 'vendre, la vente, un vendeur, une vendeuse', 'to sell, a sale, a salesperson', '/vɑ̃dʁ la vɑ̃t œ̃ vɑ̃.dœʁ yn vɑ̃.døz/', 'VAHⁿDR, la VAHⁿT, uhⁿ vahⁿ-DUHR, ün vahⁿ-DEUZ', ['entreprise'], 'Le service des ventes : les ventes, au pluriel.'),
  fam(1017, 'produire, la production, un produit', 'to produce, production, a product', '/pʁɔ.dɥiʁ la pʁɔ.dyk.sjɔ̃ œ̃ pʁɔ.dɥi/', 'pro-DWEER, la pro-dük-SYOHⁿ, uhⁿ pro-DWEE', ['entreprise'], 'Famille : le verbe, l’action, le résultat.'),
  fam(1018, "embaucher, l'embauche", 'to hire, hiring', '/ɑ̃.bo.ʃe lɑ̃.boʃ/', 'ahⁿ-boh-SHAY, lahⁿ-BOHSH', ['entreprise', 'faux-ami'], 'On embauche une personne ; on loue une voiture.'),
  col(1019, 'une PME', 'a small or medium-sized business', '/yn pe.ɛm.ø/', 'ün pay-emm-UH', ['entreprise'], 'Une petite ou moyenne entreprise.'),
  col(1020, 'le service des ventes', 'the sales department', '/lə sɛʁ.vis de vɑ̃t/', 'luh sehr-VEESS day VAHⁿT', ['entreprise'], 'Un service : une partie de l’entreprise, avec son équipe.'),
  col(1021, "réaliser un chiffre d'affaires", 'to generate revenue', '/ʁe.a.li.ze œ̃ ʃifʁ da.fɛʁ/', 'ray-a-lee-ZAY uhⁿ SHEEFR da-FEHR', ['entreprise', 'argent'], "Le chiffre d’affaires : l’argent de toutes les ventes, avant les dépenses."),
  col(1022, 'occuper un poste', 'to hold a position', '/ɔ.ky.pe œ̃ pɔst/', 'o-kü-PAY uhⁿ POST', ['entreprise', 'faux-ami'], 'Un poste, pas une position.'),
  sent(1023, 'Solane est une PME de trente-cinq employés.', 'Solane is a small business with thirty-five employees.', '/sɔ.lan ɛ.tyn pe.ɛm.ø də tʁɑ̃t.sɛ̃k ɑ̃.plwa.je/', 'so-LANN eh-tün pay-emm-UH | duh trahⁿt-sehⁿk ahⁿ-plwa-YAY', ['entreprise', 'quebec'], FCVDR),
  sent(1024, "Le siège de l'entreprise est à Montréal.", 'The company’s head office is in Montréal.', '/lə sjɛʒ də lɑ̃.tʁə.pʁiz ɛ.ta mɔ̃.ʁe.al/', 'luh SYEHZH duh lahⁿ-truh-PREEZ | eh-ta mohⁿ-ray-AL', ['entreprise', 'quebec']),
  sent(1025, 'Nous avons ouvert un bureau à Lyon il y a deux ans.', 'We opened an office in Lyon two years ago.', '/nu.za.vɔ̃ u.vɛʁ œ̃ by.ʁo a ljɔ̃ il.ja dø.zɑ̃/', 'noo-za-vohⁿ oo-VEHR uhⁿ bü-ROH a LYOHⁿ | eel-ya deu-ZAHⁿ', ['entreprise', 'france']),
  sent(1026, 'Josée dirige le service des ventes.', 'Josée runs the sales department.', '/ʒo.ze di.ʁiʒ lə sɛʁ.vis de vɑ̃t/', 'zho-ZAY dee-REEZH | luh sehr-veess day VAHⁿT', ['entreprise'], FCVDR),
  sent(1027, "L'an dernier, nous avons réalisé un chiffre d'affaires de quatre millions.", 'Last year, we generated four million in revenue.', '/lɑ̃ dɛʁ.nje nu.za.vɔ̃ ʁe.a.li.ze œ̃ ʃifʁ da.fɛʁ də katʁ mi.ljɔ̃/', 'lahⁿ dehr-NYAY | noo-za-vohⁿ ray-a-lee-ZAY uhⁿ SHEEFR da-FEHR | duh katr mee-LYOHⁿ', ['entreprise', 'argent']),
  sent(1028, 'La production se fait dans notre atelier de Laval.', 'Production is done in our workshop in Laval.', '/la pʁɔ.dyk.sjɔ̃ sə fɛ dɑ̃ nɔtʁ a.tə.lje də la.val/', 'la pro-dük-SYOHⁿ suh FEH | dahⁿ notr a-tuh-LYAY duh la-VAL', ['entreprise', 'quebec']),
  sent(1029, 'Nous allons embaucher deux vendeurs cet automne.', 'We are going to hire two salespeople this autumn.', '/nu.za.lɔ̃ ɑ̃.bo.ʃe dø vɑ̃.dœʁ sɛ.to.tɔn/', 'noo-za-lohⁿ ahⁿ-boh-SHAY deu vahⁿ-DUHR | seh-toh-TONN', ['entreprise'], FCVDR),
  sent(1030, 'Je travaille au service de la comptabilité.', 'I work in the accounting department.', '/ʒə tʁa.vaj o sɛʁ.vis də la kɔ̃.ta.bi.li.te/', 'zhuh tra-VAHY | oh sehr-VEESS duh la kohⁿ-ta-bee-lee-TAY', ['entreprise']),
  sent(1031, 'Elle occupe un poste de gestionnaire depuis mars.', 'She has held a manager’s position since March.', '/ɛl ɔ.kyp œ̃ pɔst də ʒɛs.tjɔ.nɛʁ də.pɥi maʁs/', 'ehl o-KÜP uhⁿ POST duh zhehs-tyo-NEHR | duh-pwee MARSS', ['entreprise']),
  sent(1032, 'Ce produit se vend bien en Europe.', 'This product sells well in Europe.', '/sə pʁɔ.dɥi sə vɑ̃ bjɛ̃ ɑ̃.nø.ʁɔp/', 'suh pro-DWEE suh vahⁿ BYEHⁿ | ahⁿ-nuh-ROP', ['entreprise']),
  sent(1033, "Le chiffre d'affaires, c'est l'argent des ventes, pas le bénéfice.", 'Revenue is the money from sales, not the profit.', '/lə ʃifʁ da.fɛʁ sɛ laʁ.ʒɑ̃ de vɑ̃t pa lə be.ne.fis/', 'luh SHEEFR da-FEHR | seh lar-ZHAHⁿ day VAHⁿT | pa luh bay-nay-FEESS', ['rule', 'argent'], ['flashcard'],
    rule('Le chiffre d’affaires ou le bénéfice : lequel reste après les dépenses ?', 'Le bénéfice. Le chiffre d’affaires, c’est tout l’argent des ventes.')),
  sent(1034, "Les ressources humaines s'occupent de l'embauche.", 'Human resources handle hiring.', '/le ʁə.suʁ.sy.mɛn sɔ.kyp də lɑ̃.boʃ/', 'lay ruh-soor-sü-MEHNN | so-KÜP duh lahⁿ-BOHSH', ['entreprise']),
];

/* ── ACT 3 · LA RÉUNION ──────────────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  col(1035, "l'ordre du jour", 'the agenda (of a meeting)', '/lɔʁ.dʁə dy ʒuʁ/', 'lor-druh dü ZHOOR', ['reunion', 'faux-ami'], 'Un agenda, c’est le carnet où tu notes tes rendez-vous.'),
  col(1036, 'prendre la parole', 'to take the floor, to speak up', '/pʁɑ̃dʁ la pa.ʁɔl/', 'prahⁿdr la pa-ROL', ['reunion']),
  col(1037, 'faire le point', 'to review where things stand', '/fɛʁ lə pwɛ̃/', 'fehr luh PWEHⁿ', ['reunion'], 'On fait le point sur un projet.'),
  col(1038, 'rédiger un compte rendu', 'to write up the minutes', '/ʁe.di.ʒe œ̃ kɔ̃t ʁɑ̃.dy/', 'ray-dee-ZHAY uhⁿ kohⁿt rahⁿ-DÜ', ['reunion', 'faux-ami']),
  col(1039, 'animer une réunion', 'to lead a meeting', '/a.ni.me yn ʁe.y.njɔ̃/', 'a-nee-MAY ün ray-ü-NYOHⁿ', ['reunion']),
  fam(1040, 'réunir, se réunir, une réunion', 'to bring together, to meet, a meeting', '/ʁe.y.niʁ sə ʁe.y.niʁ yn ʁe.y.njɔ̃/', 'ray-ü-NEER, suh ray-ü-NEER, ün ray-ü-NYOHⁿ', ['reunion'], 'On réunit une équipe ; l’équipe se réunit.'),
  col(1041, 'être en réunion', 'to be in a meeting', '/ɛ.tʁɑ̃ ʁe.y.njɔ̃/', 'eh-trahⁿ ray-ü-NYOHⁿ', ['reunion'], 'Quand tu es en réunion, on ne te dérange pas.'),
  sent(1042, "Le premier point à l'ordre du jour, c'est le budget.", 'The first item on the agenda is the budget.', '/lə pʁə.mje pwɛ̃ a lɔʁ.dʁə dy ʒuʁ sɛ lə by.dʒɛ/', 'luh pruh-myay PWEHⁿ a lor-druh dü ZHOOR | seh luh bü-DZHEH', ['reunion']),
  sent(1043, 'Josée anime la réunion du lundi.', 'Josée leads the Monday meeting.', '/ʒo.ze a.nim la ʁe.y.njɔ̃ dy lœ̃.di/', 'zho-ZAY a-NEEM | la ray-ü-nyohⁿ dü luhⁿ-DEE', ['reunion']),
  sent(1044, 'Est-ce que je peux prendre la parole ?', 'May I say something?', '/ɛs.kə ʒə pø pʁɑ̃dʁ la pa.ʁɔl/', 'ehs-kuh zhuh PUH | prahⁿdr la pa-ROL', ['reunion']),
  sent(1045, 'On fait le point sur le projet Rivière.', 'We are reviewing where the Rivière project stands.', '/ɔ̃ fɛ lə pwɛ̃ syʁ lə pʁɔ.ʒɛ ʁi.vjɛʁ/', 'ohⁿ feh luh PWEHⁿ | sür luh pro-zheh ree-VYEHR', ['reunion'], FCVDR),
  sent(1046, "Qui rédige le compte rendu aujourd'hui ?", 'Who is writing up the minutes today?', '/ki ʁe.diʒ lə kɔ̃t ʁɑ̃.dy o.ʒuʁ.dɥi/', 'kee ray-DEEZH luh kohⁿt rahⁿ-DÜ | oh-zhoor-DWEE', ['reunion']),
  sent(1047, "Toute l'équipe se réunit le lundi à neuf heures.", 'The whole team meets on Mondays at nine.', '/tut le.kip sə ʁe.y.ni lə lœ̃.di a nœ.vœʁ/', 'toot lay-KEEP suh ray-ü-NEE | luh luhⁿ-DEE a nuh-VUHR', ['reunion']),
  sent(1048, 'Je prends des notes pendant la réunion.', 'I take notes during the meeting.', '/ʒə pʁɑ̃ de nɔt pɑ̃.dɑ̃ la ʁe.y.njɔ̃/', 'zhuh prahⁿ day NOT | pahⁿ-dahⁿ la ray-ü-NYOHⁿ', ['reunion'], FCVDR),
  sent(1049, 'La réunion est reportée à mercredi.', 'The meeting has been moved to Wednesday.', '/la ʁe.y.njɔ̃ ɛ ʁə.pɔʁ.te a mɛʁ.kʁə.di/', 'la ray-ü-NYOHⁿ | eh ruh-por-TAY a mehr-kruh-DEE', ['reunion'], FCVDR),
  sent(1050, "Elle est en réunion jusqu'à midi.", 'She is in a meeting until noon.', '/ɛ.lɛ.tɑ̃ ʁe.y.njɔ̃ ʒys.ka mi.di/', 'eh-leh-tahⁿ ray-ü-NYOHⁿ | zhüs-ka mee-DEE', ['reunion']),
  sent(1051, 'Le compte rendu sera envoyé à tous les participants.', 'The minutes will be sent to all the participants.', '/lə kɔ̃t ʁɑ̃.dy sə.ʁa ɑ̃.vwa.je a tu le paʁ.ti.si.pɑ̃/', 'luh kohⁿt rahⁿ-DÜ suh-RA ahⁿ-vwa-YAY | a too lay par-tee-see-PAHⁿ', ['reunion']),
  sent(1052, 'Passons au point suivant.', "Let's move on to the next item.", '/pa.sɔ̃ o pwɛ̃ sɥi.vɑ̃/', 'pa-sohⁿ oh pwehⁿ swee-VAHⁿ', ['reunion', 'quebec']),
  sent(1053, "Faire le point, c'est dire où on en est.", 'Taking stock means saying where things stand.', '/fɛʁ lə pwɛ̃ sɛ diʁ u ɔ̃.nɑ̃.nɛ/', 'fehr luh PWEHⁿ | seh DEER oo ohⁿ-nahⁿ-NEH', ['rule', 'reunion'], ['flashcard'],
    rule('Les minutes d’une réunion, en français ?', 'Le compte rendu. Les minutes, ce sont des minutes de temps.')),
];

/* ── ACT 4 · LE PROJET ET LE CALENDRIER ──────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  col(1054, 'prendre du retard', 'to fall behind', '/pʁɑ̃dʁ dy ʁə.taʁ/', 'prahⁿdr dü ruh-TAR', ['projet']),
  col(1055, 'être dans les temps', 'to be on schedule', '/ɛtʁ dɑ̃ le tɑ̃/', 'ehtr dahⁿ lay TAHⁿ', ['projet']),
  col(1056, 'un échéancier', 'a project timeline (Québec)', '/œ̃.ne.ʃe.ɑ̃.sje/', 'uhⁿ-nay-shay-ahⁿ-SYAY', ['projet', 'quebec', 'variante'], 'En France, on dit souvent le planning ou le calendrier.'),
  col(1057, 'le planning', 'the schedule (France)', '/lə pla.niŋ/', 'luh pla-NEENG', ['projet', 'france', 'variante'], 'Au Québec, on dit plutôt l’échéancier ou l’horaire.'),
  fam(1058, 'livrer, la livraison, un livreur', 'to deliver, delivery, a delivery person', '/li.vʁe la li.vʁɛ.zɔ̃ œ̃ li.vʁœʁ/', 'lee-VRAY, la lee-vreh-ZOHⁿ, uhⁿ lee-VRUHR', ['projet', 'faux-ami'], 'Pas délivrer : on délivre un permis, on livre une commande.'),
  fam(1059, "avancer, l'avancement", 'to progress, progress', '/a.vɑ̃.se la.vɑ̃s.mɑ̃/', 'a-vahⁿ-SAY, la-vahⁿss-MAHⁿ', ['projet'], 'Le projet avance ; on fait le point sur l’avancement.'),
  col(1060, 'reporter une date', 'to push back a date', '/ʁə.pɔʁ.te yn dat/', 'ruh-por-TAY ün DAT', ['projet']),
  col(1061, "passer à l'étape suivante", 'to move on to the next stage', '/pa.se a le.tap sɥi.vɑ̃t/', 'pa-SAY a lay-TAP swee-VAHⁿT', ['projet']),
  sent(1062, 'Le fournisseur a pris du retard.', 'The supplier has fallen behind.', '/lə fuʁ.ni.sœʁ a pʁi dy ʁə.taʁ/', 'luh foor-nee-SUHR | a pree dü ruh-TAR', ['projet'], FCVDR),
  sent(1063, 'Pour le moment, nous sommes dans les temps.', 'For now, we are on schedule.', '/puʁ lə mɔ.mɑ̃ nu sɔm dɑ̃ le tɑ̃/', 'poor luh mo-MAHⁿ | noo SOMM dahⁿ lay TAHⁿ', ['projet']),
  sent(1064, "Marc-André a envoyé l'échéancier à toute l'équipe.", 'Marc-André sent the timeline to the whole team.', '/maʁ.kɑ̃.dʁe a ɑ̃.vwa.je le.ʃe.ɑ̃.sje a tut le.kip/', 'mar-kahⁿ-DRAY a ahⁿ-vwa-YAY lay-shay-ahⁿ-SYAY | a toot lay-KEEP', ['projet', 'quebec']),
  sent(1065, 'La livraison est prévue pour le quinze novembre.', 'Delivery is planned for 15 November.', '/la li.vʁɛ.zɔ̃ ɛ pʁe.vy puʁ lə kɛ̃z nɔ.vɑ̃bʁ/', 'la lee-vreh-ZOHⁿ eh pray-VÜ | poor luh kehⁿz no-VAHⁿBR', ['projet'], FCVDR),
  sent(1066, 'La cliente veut être livrée avant Noël.', 'The client wants delivery before Christmas.', '/la kli.jɑ̃t vø ɛtʁ li.vʁe a.vɑ̃ nɔ.ɛl/', 'la klee-YAHⁿT VUH ehtr lee-VRAY | a-vahⁿ no-EHL', ['projet']),
  sent(1067, 'Le projet avance bien.', 'The project is progressing well.', '/lə pʁɔ.ʒɛ a.vɑ̃s bjɛ̃/', 'luh pro-ZHEH a-vahⁿss BYEHⁿ', ['projet']),
  sent(1068, 'Nous devons reporter la date de livraison.', 'We have to push back the delivery date.', '/nu də.vɔ̃ ʁə.pɔʁ.te la dat də li.vʁɛ.zɔ̃/', 'noo duh-vohⁿ ruh-por-TAY | la DAT duh lee-vreh-ZOHⁿ', ['projet']),
  sent(1069, "On a deux semaines de retard sur l'échéancier.", 'We are two weeks behind the timeline.', '/ɔ̃.na dø smɛn də ʁə.taʁ syʁ le.ʃe.ɑ̃.sje/', 'ohⁿ-na deu SMEHNN duh ruh-TAR | sür lay-shay-ahⁿ-SYAY', ['projet', 'quebec'], FCVDR),
  sent(1070, 'Le délai de livraison est de six semaines.', 'The delivery lead time is six weeks.', '/lə de.lɛ də li.vʁɛ.zɔ̃ ɛ də si smɛn/', 'luh day-LEH duh lee-vreh-ZOHⁿ | eh duh see SMEHNN', ['projet', 'faux-ami']),
  sent(1071, 'Désolé, il y a un retard de trois jours.', 'Sorry, there is a three-day delay.', '/de.zɔ.le il.ja œ̃ ʁə.taʁ də tʁwa ʒuʁ/', 'day-zo-LAY | eel-ya uhⁿ ruh-TAR duh trwa ZHOOR', ['projet', 'faux-ami']),
  sent(1072, "Un délai, c'est le temps qu'on te donne ; un retard, c'est le temps de trop.", 'A délai is the time you are given; a retard is the time too many.', '/œ̃ de.lɛ sɛ lə tɑ̃ kɔ̃ tə dɔn œ̃ ʁə.taʁ sɛ lə tɑ̃ də tʁo/', 'uhⁿ day-LEH | seh luh TAHⁿ kohⁿ tuh DONN | uhⁿ ruh-TAR | seh luh TAHⁿ duh TROH', ['rule', 'faux-ami'], ['flashcard'],
    rule('A delay, en français ?', 'Un retard. Un délai, c’est le temps accordé pour faire quelque chose.')),
  sent(1073, "On passe à l'étape suivante lundi.", 'We move on to the next stage on Monday.', '/ɔ̃ pas a le.tap sɥi.vɑ̃t lœ̃.di/', 'ohⁿ PASS a lay-tap swee-VAHⁿT | luhⁿ-DEE', ['projet']),
];

/* ── ACT 5 · CLIENTS ET PRIX ─────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  col(1074, 'faire un devis', 'to draw up a quote', '/fɛʁ œ̃ də.vi/', 'fehr uhⁿ duh-VEE', ['argent'], 'Le devis arrive avant le travail.'),
  col(1075, 'une soumission', 'a quote, a bid (Québec)', '/yn su.mi.sjɔ̃/', 'ün soo-mee-SYOHⁿ', ['argent', 'quebec', 'variante'], 'En France : un devis. Au Québec, on dit les deux.'),
  col(1076, 'régler une facture', 'to settle an invoice', '/ʁe.gle yn fak.tyʁ/', 'ray-GLAY ün fak-TÜR', ['argent']),
  col(1077, 'accorder une remise', 'to give a discount', '/a.kɔʁ.de yn ʁə.miz/', 'a-kor-DAY ün ruh-MEEZ', ['argent'], 'Au Québec, on parle souvent d’un rabais.'),
  fam(1078, 'négocier, la négociation, un négociateur', 'to negotiate, negotiation, a negotiator', '/ne.gɔ.sje la ne.gɔ.sja.sjɔ̃ œ̃ ne.gɔ.sja.tœʁ/', 'nay-go-SYAY, la nay-go-sya-SYOHⁿ, uhⁿ nay-go-sya-TUHR', ['argent'], 'Famille : le verbe, l’action, la personne.'),
  fam(1079, 'facturer, une facture, la facturation', 'to invoice, an invoice, invoicing', '/fak.ty.ʁe yn fak.tyʁ la fak.ty.ʁa.sjɔ̃/', 'fak-tü-RAY, ün fak-TÜR, la fak-tü-ra-SYOHⁿ', ['argent'], 'On facture un client ; il règle la facture.'),
  col(1080, 'hors taxes, toutes taxes comprises', 'before tax, all taxes included', '/ɔʁ taks tut taks kɔ̃.pʁiz/', 'or TAX, toot tax kohⁿ-PREEZ', ['argent', 'france', 'variante'], 'HT et TTC en France. Au Québec : avant taxes, taxes incluses.'),
  sent(1081, 'Pourriez-vous nous faire un devis pour quarante lampes ?', 'Could you draw up a quote for forty lamps for us?', '/pu.ʁje.vu nu fɛʁ œ̃ də.vi puʁ ka.ʁɑ̃t lɑ̃p/', 'poo-ryay-VOO noo fehr uhⁿ duh-VEE | poor ka-rahⁿt LAHⁿP', ['argent'], FCVDR),
  sent(1082, 'Au Québec, on demande souvent une soumission.', 'In Québec, people often ask for a soumission.', '/o ke.bɛk ɔ̃ də.mɑ̃d su.vɑ̃ yn su.mi.sjɔ̃/', 'oh kay-BEHK | ohⁿ duh-MAHⁿD soo-vahⁿ ün soo-mee-SYOHⁿ', ['argent', 'quebec']),
  sent(1083, 'Notre devis est valable trente jours.', 'Our quote is valid for thirty days.', '/nɔtʁ də.vi ɛ va.labl tʁɑ̃t ʒuʁ/', 'notr duh-VEE eh va-LABL | trahⁿt ZHOOR', ['argent']),
  sent(1084, 'La cliente a réglé la facture avec un mois de retard.', 'The client settled the invoice a month late.', '/la kli.jɑ̃t a ʁe.gle la fak.tyʁ a.vɛk œ̃ mwa də ʁə.taʁ/', 'la klee-YAHⁿT a ray-GLAY la fak-TÜR | a-vehk uhⁿ MWA duh ruh-TAR', ['argent'], FCVDR),
  sent(1085, 'Nous pouvons vous accorder une remise de dix pour cent.', 'We can give you a ten per cent discount.', '/nu pu.vɔ̃ vu.za.kɔʁ.de yn ʁə.miz də di puʁ sɑ̃/', 'noo poo-VOHⁿ voo-za-kor-DAY ün ruh-MEEZ | duh DEE poor SAHⁿ', ['argent']),
  sent(1086, 'Le prix est de huit mille euros hors taxes.', 'The price is eight thousand euros before tax.', '/lə pʁi ɛ də ɥi mi.lø.ʁo ɔʁ taks/', 'luh PREE eh duh wee mee-luh-ROH | or TAX', ['argent', 'france']),
  sent(1087, 'Nous avons négocié le prix pendant une heure.', 'We negotiated the price for an hour.', '/nu.za.vɔ̃ ne.gɔ.sje lə pʁi pɑ̃.dɑ̃.ty.nœʁ/', 'noo-za-vohⁿ nay-go-SYAY luh PREE | pahⁿ-dahⁿ-tü-NUHR', ['argent']),
  sent(1088, 'Nous vous enverrons la facture à la livraison.', 'We will send you the invoice on delivery.', '/nu vu.zɑ̃.vɛ.ʁɔ̃ la fak.tyʁ a la li.vʁɛ.zɔ̃/', 'noo voo-zahⁿ-veh-ROHⁿ la fak-TÜR | a la lee-vreh-ZOHⁿ', ['argent'], FCVDR),
  sent(1089, 'Nos tarifs changent en janvier.', 'Our rates change in January.', '/no ta.ʁif ʃɑ̃ʒ ɑ̃ ʒɑ̃.vje/', 'noh ta-REEF SHAHⁿZH | ahⁿ zhahⁿ-VYAY', ['argent']),
  sent(1090, 'La cliente trouve le devis trop élevé.', 'The client finds the quote too high.', '/la kli.jɑ̃t tʁuv lə də.vi tʁo.pel.ve/', 'la klee-YAHⁿT TROOV | luh duh-VEE troh-payl-VAY', ['argent']),
  sent(1091, 'Je vais revoir le devis à la baisse.', 'I am going to revise the quote downward.', '/ʒə vɛ ʁə.vwaʁ lə də.vi a la bɛs/', 'zhuh veh ruh-VWAR luh duh-VEE | a la BEHSS', ['argent']),
  col(1092, 'revoir un prix à la baisse', 'to lower a price', '/ʁə.vwaʁ œ̃ pʁi a la bɛs/', 'ruh-VWAR uhⁿ PREE a la BEHSS', ['argent']),
  sent(1093, 'Le devis annonce le prix ; la facture le demande.', 'The quote announces the price; the invoice asks for it.', '/lə də.vi a.nɔ̃s lə pʁi la fak.tyʁ lə də.mɑ̃d/', 'luh duh-VEE a-nohⁿss luh PREE | la fak-TÜR luh duh-MAHⁿD', ['rule', 'argent'], ['flashcard'],
    rule('Avant le travail ou après : quand arrive le devis ?', 'Avant. Le devis annonce le prix ; la facture arrive après, pour le payer.')),
];

/* ── ACT 6 · COMMANDES ET CONTRATS ───────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  col(1094, 'conclure un contrat', 'to conclude a contract', '/kɔ̃.klyʁ œ̃ kɔ̃.tʁa/', 'kohⁿ-KLÜR uhⁿ kohⁿ-TRA', ['contrat'], 'On dit aussi signer un contrat.'),
  col(1095, 'lancer un produit', 'to launch a product', '/lɑ̃.se œ̃ pʁɔ.dɥi/', 'lahⁿ-SAY uhⁿ pro-DWEE', ['contrat']),
  fam(1096, 'commander, une commande, un bon de commande', 'to order, an order, a purchase order', '/kɔ.mɑ̃.de yn kɔ.mɑ̃d œ̃ bɔ̃ də kɔ.mɑ̃d/', 'ko-mahⁿ-DAY, ün ko-MAHⁿD, uhⁿ bohⁿ duh ko-MAHⁿD', ['commande'], 'Le bon de commande : le papier signé de la commande.'),
  col(1097, 'livrer une commande', 'to deliver an order', '/li.vʁe yn kɔ.mɑ̃d/', 'lee-VRAY ün ko-MAHⁿD', ['commande']),
  col(1098, 'annuler une commande', 'to cancel an order', '/a.ny.le yn kɔ.mɑ̃d/', 'a-nü-LAY ün ko-MAHⁿD', ['commande', 'faux-ami']),
  col(1099, 'conclure un accord', 'to reach an agreement', '/kɔ̃.klyʁ œ̃.na.kɔʁ/', 'kohⁿ-KLÜR uhⁿ-na-KOR', ['contrat', 'faux-ami']),
  fam(1100, 'lancer, le lancement', 'to launch, the launch', '/lɑ̃.se lə lɑ̃s.mɑ̃/', 'lahⁿ-SAY, luh lahⁿss-MAHⁿ', ['contrat'], 'On lance un produit ; le lancement a lieu en mars.'),
  sent(1101, 'Nous avons passé une commande à notre fournisseur de Dakar.', 'We placed an order with our supplier in Dakar.', '/nu.za.vɔ̃ pa.se yn kɔ.mɑ̃d a nɔtʁ fuʁ.ni.sœʁ də da.kaʁ/', 'noo-za-vohⁿ pa-SAY ün ko-MAHⁿD | a notr foor-nee-SUHR duh da-KAR', ['commande', 'senegal'], FCVDR),
  sent(1102, 'Notre fournisseur de Dakar fabrique les pieds en métal.', 'Our supplier in Dakar makes the metal bases.', '/nɔtʁ fuʁ.ni.sœʁ də da.kaʁ fa.bʁik le pje ɑ̃ me.tal/', 'notr foor-nee-SUHR duh da-KAR | fa-BREEK lay PYAY ahⁿ may-TAL', ['commande', 'senegal']),
  sent(1103, 'Nous avons conclu un contrat de deux ans avec lui.', 'We concluded a two-year contract with him.', '/nu.za.vɔ̃ kɔ̃.kly œ̃ kɔ̃.tʁa də dø.zɑ̃ a.vɛk lɥi/', 'noo-za-vohⁿ kohⁿ-KLÜ uhⁿ kohⁿ-TRA | duh deu-ZAHⁿ a-vehk LWEE', ['contrat']),
  sent(1104, 'Solane lance un nouveau produit au printemps.', 'Solane is launching a new product in the spring.', '/sɔ.lan lɑ̃s œ̃ nu.vo pʁɔ.dɥi o pʁɛ̃.tɑ̃/', 'so-LANN LAHⁿSS uhⁿ noo-voh pro-DWEE | oh prehⁿ-TAHⁿ', ['contrat'], FCVDR),
  sent(1105, 'Le lancement est prévu pour le mois de mars.', 'The launch is planned for March.', '/lə lɑ̃s.mɑ̃ ɛ pʁe.vy puʁ lə mwa də maʁs/', 'luh lahⁿss-MAHⁿ eh pray-VÜ | poor luh MWA duh MARSS', ['contrat']),
  sent(1106, 'La commande sera livrée dans trois semaines.', 'The order will be delivered in three weeks.', '/la kɔ.mɑ̃d sə.ʁa li.vʁe dɑ̃ tʁwa smɛn/', 'la ko-MAHⁿD suh-ra lee-VRAY | dahⁿ trwa SMEHNN', ['commande']),
  sent(1107, 'Le client a annulé sa commande.', 'The client cancelled his order.', '/lə kli.jɑ̃ a a.ny.le sa kɔ.mɑ̃d/', 'luh klee-YAHⁿ a a-nü-LAY sa ko-MAHⁿD', ['commande'], FCVDR),
  sent(1108, 'Nous avons enfin conclu un accord sur le prix.', 'We have finally reached an agreement on the price.', '/nu.za.vɔ̃ ɑ̃.fɛ̃ kɔ̃.kly œ̃.na.kɔʁ syʁ lə pʁi/', 'noo-za-vohⁿ ahⁿ-FEHⁿ kohⁿ-KLÜ uhⁿ-na-KOR | sür luh PREE', ['contrat']),
  sent(1109, 'Je vous envoie le bon de commande signé.', 'I am sending you the signed purchase order.', '/ʒə vu.zɑ̃.vwa lə bɔ̃ də kɔ.mɑ̃d si.ɲe/', 'zhuh voo-zahⁿ-VWA | luh bohⁿ duh ko-mahⁿd see-NYAY', ['commande']),
  sent(1110, 'Il faut lire les conditions avant de signer.', 'You have to read the terms before signing.', '/il fo liʁ le kɔ̃.di.sjɔ̃ a.vɑ̃ də si.ɲe/', 'eel foh LEER lay kohⁿ-dee-SYOHⁿ | a-vahⁿ duh see-NYAY', ['contrat', 'faux-ami']),
  sent(1111, 'On passe une commande ; on ne la place pas.', 'You place an order with passer, never with placer.', '/ɔ̃ pas yn kɔ.mɑ̃d ɔ̃ nə la plas pa/', 'ohⁿ PASS ün ko-MAHⁿD | ohⁿ nuh la PLASS PA', ['rule', 'faux-ami'], ['flashcard'],
    rule('To place an order : quel verbe ?', 'Passer. On passe une commande.')),
];

/* ── ACT 7 · DEMANDER POLIMENT ───────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  col(1112, 'faire une demande', 'to make a request', '/fɛʁ yn də.mɑ̃d/', 'fehr ün duh-MAHⁿD', ['politesse', 'faux-ami'], 'Demander, c’est ask. Exiger, c’est demand.'),
  col(1113, 'je vous serais reconnaissant de', 'I would be grateful if you would', '/ʒə vu sə.ʁɛ ʁə.kɔ.nɛ.sɑ̃ də/', 'zhuh voo suh-REH ruh-ko-neh-SAHⁿ duh', ['politesse'], 'Au féminin : reconnaissante.', 'soutenu'),
  sent(1114, 'Pourriez-vous me faire parvenir le devis avant vendredi ?', 'Could you send me the quote before Friday?', '/pu.ʁje.vu mə fɛʁ paʁ.və.niʁ lə də.vi a.vɑ̃ vɑ̃.dʁə.di/', 'poo-ryay-VOO muh fehr par-vuh-NEER luh duh-VEE | a-vahⁿ vahⁿ-druh-DEE', ['politesse'], FCVDR),
  col(1115, 'faire parvenir', 'to send (formal)', '/fɛʁ paʁ.və.niʁ/', 'fehr par-vuh-NEER', ['politesse'], 'Plus soigné que envoyer, surtout à l’écrit.', 'soutenu'),
  sent(1116, 'Je me permets de vous rappeler notre rendez-vous de jeudi.', 'May I remind you of our appointment on Thursday.', '/ʒə mə pɛʁ.mɛ də vu ʁa.ple nɔtʁ ʁɑ̃.de.vu də ʒø.di/', 'zhuh muh pehr-MEH duh voo ra-PLAY | notr rahⁿ-day-VOO duh zhuh-DEE', ['politesse']),
  sent(1117, 'Je vous serais reconnaissante de me répondre avant midi.', 'I would be grateful if you could reply before noon.', '/ʒə vu sə.ʁɛ ʁə.kɔ.nɛ.sɑ̃t də mə ʁe.pɔ̃dʁ a.vɑ̃ mi.di/', 'zhuh voo suh-REH ruh-ko-neh-SAHⁿT | duh muh ray-POHⁿDR a-vahⁿ mee-DEE', ['politesse'], FCVR, { register: 'soutenu' }),
  sent(1118, 'Est-ce que ce serait possible de livrer lundi ?', 'Would it be possible to deliver on Monday?', '/ɛs.kə sə sə.ʁɛ pɔ.sibl də li.vʁe lœ̃.di/', 'ehs-kuh suh suh-REH po-SEEBL | duh lee-vray luhⁿ-DEE', ['politesse']),
  sent(1119, 'Serait-il possible de reporter la réunion ?', 'Would it be possible to postpone the meeting?', '/sə.ʁɛ.til pɔ.sibl də ʁə.pɔʁ.te la ʁe.y.njɔ̃/', 'suh-reh-TEEL po-SEEBL | duh ruh-por-TAY la ray-ü-NYOHⁿ', ['politesse'], FCVDR, { register: 'soutenu' }),
  sent(1120, "Tu peux m'envoyer le fichier ?", 'Can you send me the file?', '/ty pø mɑ̃.vwa.je lə fi.ʃje/', 'tü PUH mahⁿ-vwa-YAY luh fee-SHYAY', ['politesse', 'tu']),
  sent(1121, "J'aurais besoin du rapport pour demain.", 'I would need the report for tomorrow.', '/ʒo.ʁɛ bə.zwɛ̃ dy ʁa.pɔʁ puʁ də.mɛ̃/', 'zhoh-REH buh-ZWEHⁿ dü ra-POR | poor duh-MEHⁿ', ['politesse']),
  sent(1122, 'Vous voulez bien vérifier ces chiffres ?', 'Would you mind checking these figures?', '/vu vu.le bjɛ̃ ve.ʁi.fje se ʃifʁ/', 'voo voo-lay BYEHⁿ | vay-ree-fyay say SHEEFR', ['politesse']),
  sent(1123, 'Le conditionnel adoucit la demande : je voudrais, pourriez-vous.', 'The conditional softens the request: je voudrais, pourriez-vous.', '/lə kɔ̃.di.sjɔ.nɛl a.du.si la də.mɑ̃d ʒə vu.dʁɛ pu.ʁje.vu/', 'luh kohⁿ-dee-syo-NEHL a-doo-SEE la duh-MAHⁿD | zhuh voo-DREH | poo-ryay-VOO', ['rule', 'politesse'], ['flashcard'],
    rule('Je veux ou je voudrais : lequel pour un client ?', 'Je voudrais. Le conditionnel rend la demande polie.')),
  sent(1124, 'Merci de me confirmer la date.', 'Please confirm the date for me.', '/mɛʁ.si də mə kɔ̃.fiʁ.me la dat/', 'mehr-SEE duh muh kohⁿ-feer-MAY la DAT', ['politesse'], FCVDR),
  col(1125, 'merci de confirmer', 'please confirm', '/mɛʁ.si də kɔ̃.fiʁ.me/', 'mehr-SEE duh kohⁿ-feer-MAY', ['politesse'], 'Merci de + infinitif : une demande polie et courte, très fréquente à l’écrit.'),
];

/* ── ACT 8 · NE PAS ÊTRE D'ACCORD ────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  col(1126, "je ne suis pas tout à fait d'accord", 'I do not entirely agree', '/ʒə nə sɥi pa tu.ta.fɛ da.kɔʁ/', 'zhuh nuh swee pa too-ta-FEH da-KOR', ['desaccord']),
  col(1127, 'je comprends votre point de vue', 'I understand your point of view', '/ʒə kɔ̃.pʁɑ̃ vɔtʁ pwɛ̃ də vy/', 'zhuh kohⁿ-PRAHⁿ votr pwehⁿ duh VÜ', ['desaccord']),
  col(1128, 'avoir raison sur un point', 'to be right on one point', '/a.vwaʁ ʁɛ.zɔ̃ syʁ œ̃ pwɛ̃/', 'a-vwar reh-ZOHⁿ sür uhⁿ PWEHⁿ', ['desaccord', 'faux-ami'], 'Pas avoir un point : c’est de l’anglais.'),
  col(1129, 'proposer une autre solution', 'to suggest another solution', '/pʁɔ.po.ze y.notʁ sɔ.ly.sjɔ̃/', 'pro-po-ZAY ü-NOHTR so-lü-SYOHⁿ', ['desaccord']),
  col(1130, 'trouver un compromis', 'to find a compromise', '/tʁu.ve œ̃ kɔ̃.pʁɔ.mi/', 'troo-VAY uhⁿ kohⁿ-pro-MEE', ['desaccord']),
  fam(1131, 'accepter, refuser, un refus', 'to accept, to refuse, a refusal', '/ak.sɛp.te ʁə.fy.ze œ̃ ʁə.fy/', 'ak-sehp-TAY, ruh-fü-ZAY, uhⁿ ruh-FÜ', ['desaccord'], 'Deux verbes contraires, et le nom du non.'),
  sent(1132, "Je ne suis pas tout à fait d'accord avec ce chiffre.", 'I do not entirely agree with this figure.', '/ʒə nə sɥi pa tu.ta.fɛ da.kɔʁ a.vɛk sə ʃifʁ/', 'zhuh nuh swee pa too-ta-feh da-KOR | a-vehk suh SHEEFR', ['desaccord'], FCVDR),
  sent(1133, 'Je comprends votre point de vue, mais le délai est trop court.', 'I understand your point of view, but the time frame is too short.', '/ʒə kɔ̃.pʁɑ̃ vɔtʁ pwɛ̃ də vy mɛ lə de.lɛ ɛ tʁo kuʁ/', 'zhuh kohⁿ-prahⁿ votr pwehⁿ duh VÜ | meh luh day-LEH eh troh KOOR', ['desaccord']),
  sent(1134, 'Il me semble que le prix est un peu élevé.', 'It seems to me that the price is a little high.', '/il mə sɑ̃bl kə lə pʁi ɛ.tœ̃ pø el.ve/', 'eel muh sahⁿbl kuh luh PREE | eh-tuhⁿ puh ayl-VAY', ['desaccord']),
  sent(1135, 'Je propose plutôt une livraison en deux fois.', 'I would rather suggest delivery in two batches.', '/ʒə pʁɔ.poz ply.to yn li.vʁɛ.zɔ̃ ɑ̃ dø fwa/', 'zhuh pro-POZ plü-TOH | ün lee-vreh-ZOHⁿ ahⁿ deu FWA', ['desaccord']),
  sent(1136, 'On pourrait trouver un compromis : la moitié en novembre, le reste en décembre.', 'We could find a compromise: half in November, the rest in December.', '/ɔ̃ pu.ʁɛ tʁu.ve œ̃ kɔ̃.pʁɔ.mi la mwa.tje ɑ̃ nɔ.vɑ̃bʁ lə ʁɛst ɑ̃ de.sɑ̃bʁ/', 'ohⁿ poo-REH troo-VAY uhⁿ kohⁿ-pro-MEE | la mwa-TYAY ahⁿ no-VAHⁿBR | luh REHST ahⁿ day-SAHⁿBR', ['desaccord'], FCVDR),
  sent(1137, 'Malheureusement, nous devons refuser cette offre.', 'Unfortunately, we have to turn down this offer.', '/ma.lø.ʁøz.mɑ̃ nu də.vɔ̃ ʁə.fy.ze sɛ.tɔfʁ/', 'ma-luh-ruhz-MAHⁿ | noo duh-vohⁿ ruh-fü-ZAY seh-TOFR', ['desaccord']),
  sent(1138, 'Vous avez raison sur un point.', 'You are right on one point.', '/vu.za.ve ʁɛ.zɔ̃ syʁ œ̃ pwɛ̃/', 'voo-za-vay reh-ZOHⁿ | sür uhⁿ PWEHⁿ', ['desaccord', 'faux-ami']),
  sent(1139, 'Votre idée a du sens, mais le budget ne suffit pas.', 'Your idea makes sense, but the budget is not enough.', '/vɔ.tʁi.de a dy sɑ̃s mɛ lə by.dʒɛ nə sy.fi pa/', 'vo-tree-DAY a dü SAHⁿSS | meh luh bü-DZHEH nuh sü-fee PA', ['desaccord', 'faux-ami']),
  sent(1140, 'Je ne suis pas convaincu.', 'I am not convinced.', '/ʒə nə sɥi pa kɔ̃.vɛ̃.ky/', 'zhuh nuh swee pa kohⁿ-vehⁿ-KÜ', ['desaccord']),
  sent(1141, 'Permettez-moi de vous interrompre une seconde.', 'Allow me to interrupt you for a second.', '/pɛʁ.mɛ.te.mwa də vu.zɛ̃.te.ʁɔ̃pʁ yn sə.gɔ̃d/', 'pehr-meh-tay-MWA | duh voo-zehⁿ-tay-ROHⁿPR ün suh-GOHⁿD', ['desaccord']),
  sent(1142, 'Un désaccord poli commence par ce qui est juste.', 'A polite disagreement starts with what is right.', '/œ̃ de.za.kɔʁ pɔ.li kɔ.mɑ̃s paʁ sə ki ɛ ʒyst/', 'uhⁿ day-za-KOR po-LEE | ko-MAHⁿSS par suh kee eh ZHÜST', ['rule', 'desaccord'], ['flashcard'],
    rule('You have a point, en français ?', 'Vous avez raison sur un point. Pas vous avez un point.')),
];

/* ── ACT 9 · TU OU VOUS AU TRAVAIL ───────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  col(1143, 'proposer le tu', 'to suggest using tu', '/pʁɔ.po.ze lə ty/', 'pro-po-ZAY luh TÜ', ['tuvous'], 'Avec un client, c’est lui qui propose le tu.'),
  col(1144, 'garder le vous', 'to keep using vous', '/gaʁ.de lə vu/', 'gar-DAY luh VOO', ['tuvous']),
  col(1145, 'se tutoyer entre collègues', 'to say tu to each other as colleagues', '/sə ty.twa.je ɑ̃.tʁə kɔ.lɛg/', 'suh tü-twa-YAY ahⁿ-truh ko-LEHG', ['tuvous']),
  sent(1146, 'Au bureau de Montréal, on passe au tu dès la première semaine.', 'At the Montréal office, people switch to tu in the very first week.', '/o by.ʁo də mɔ̃.ʁe.al ɔ̃ pas o ty dɛ la pʁə.mjɛʁ smɛn/', 'oh bü-ROH duh mohⁿ-ray-AL | ohⁿ PASS oh TÜ | deh la pruh-myehr SMEHNN', ['tuvous', 'quebec'], FCVDR),
  sent(1147, 'À Lyon, Thomas garde le vous avec sa responsable.', 'In Lyon, Thomas keeps using vous with his manager.', '/a ljɔ̃ tɔ.ma gaʁd lə vu a.vɛk sa ʁɛs.pɔ̃.sabl/', 'a LYOHⁿ | to-MA gard luh VOO | a-vehk sa rehs-pohⁿ-SABL', ['tuvous', 'france']),
  sent(1148, 'Avec un nouveau client, on garde le vous.', 'With a new client, you keep using vous.', '/a.vɛk œ̃ nu.vo kli.jɑ̃ ɔ̃ gaʁd lə vu/', 'a-vehk uhⁿ noo-voh klee-YAHⁿ | ohⁿ gard luh VOO', ['tuvous']),
  sent(1149, "Josée m'a proposé de passer au tu.", 'Josée suggested that we switch to tu.', '/ʒo.ze ma pʁɔ.po.ze də pa.se o ty/', 'zho-ZAY ma pro-po-ZAY | duh pa-say oh TÜ', ['tuvous'], FCVDR),
  sent(1150, "Dans un courriel officiel, j'écris vous, même à une collègue que je tutoie.", 'In an official email, I write vous, even to a colleague I say tu to.', '/dɑ̃.zœ̃ ku.ʁjɛl ɔ.fi.sjɛl ʒe.kʁi vu mɛm a yn kɔ.lɛg kə ʒə ty.twa/', 'dahⁿ-zuhⁿ koo-RYEHL o-fee-SYEHL | zhay-kree VOO | MEM a ün ko-LEHG kuh zhuh tü-TWA', ['tuvous']),
  sent(1151, 'Tu peux relire mon devis avant midi ?', 'Can you reread my quote before noon?', '/ty pø ʁə.liʁ mɔ̃ də.vi a.vɑ̃ mi.di/', 'tü puh ruh-LEER mohⁿ duh-VEE | a-vahⁿ mee-DEE', ['tuvous', 'tu']),
  sent(1152, 'Pourriez-vous relire le contrat avant midi ?', 'Could you reread the contract before noon?', '/pu.ʁje.vu ʁə.liʁ lə kɔ̃.tʁa a.vɑ̃ mi.di/', 'poo-ryay-VOO ruh-leer luh kohⁿ-TRA | a-vahⁿ mee-DEE', ['tuvous', 'vous']),
  sent(1153, "Choisis tu ou vous, puis garde-le jusqu'à la fin.", 'Choose tu or vous, then keep it to the end.', '/ʃwa.zi ty u vu pɥi gaʁd.lə ʒys.ka la fɛ̃/', 'shwa-ZEE tü oo VOO | pwee gard-LUH zhüs-ka la FEHⁿ', ['rule', 'tuvous'], ['flashcard'],
    rule('Une cliente te propose le tu. Tu fais quoi ?', 'Tu acceptes, et tu restes au tu. C’est elle qui propose.')),
];

/* ── ACT 10 · LE COURRIEL PROFESSIONNEL ──────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  col(1154, 'envoyer un courriel', 'to send an email', '/ɑ̃.vwa.je œ̃ ku.ʁjɛl/', 'ahⁿ-vwa-YAY uhⁿ koo-RYEHL', ['courriel', 'quebec']),
  col(1155, 'répondre à tous', 'to reply all', '/ʁe.pɔ̃dʁ a tus/', 'ray-POHⁿDR a TOOSS', ['courriel']),
  col(1156, 'mettre en copie', 'to copy someone in', '/mɛtʁ ɑ̃ kɔ.pi/', 'mehtr ahⁿ ko-PEE', ['courriel']),
  col(1157, 'transférer un message', 'to forward a message', '/tʁɑ̃s.fe.ʁe œ̃ me.saʒ/', 'trahⁿss-fay-RAY uhⁿ may-SAZH', ['courriel', 'faux-ami']),
  col(1158, 'un courriel de relance', 'a follow-up email', '/œ̃ ku.ʁjɛl də ʁə.lɑ̃s/', 'uhⁿ koo-ryehl duh ruh-LAHⁿSS', ['courriel', 'quebec'], 'Relancer quelqu’un : lui écrire encore, poliment, parce qu’il n’a pas répondu.'),
  col(1159, 'je reste à votre disposition', 'I remain at your disposal', '/ʒə ʁɛst a vɔtʁ dis.po.zi.sjɔ̃/', 'zhuh REHST a votr dees-po-zee-SYOHⁿ', ['courriel'], undefined, 'soutenu'),
  col(1160, "dans l'attente de votre réponse", 'looking forward to your reply', '/dɑ̃ la.tɑ̃t də vɔtʁ ʁe.pɔ̃s/', 'dahⁿ la-TAHⁿT duh votr ray-POHⁿSS', ['courriel'], undefined, 'soutenu'),
  col(1161, 'meilleures salutations', 'best regards (Switzerland)', '/mɛ.jœʁ sa.ly.ta.sjɔ̃/', 'meh-yuhr sa-lü-ta-SYOHⁿ', ['courriel', 'suisse', 'variante'], 'En Suisse, la fin la plus courante d’un courriel de travail.'),
  sent(1162, 'Vous trouverez le devis en pièce jointe.', 'You will find the quote attached.', '/vu tʁu.vʁe lə də.vi ɑ̃ pjɛs ʒwɛ̃t/', 'voo troo-VRAY luh duh-VEE | ahⁿ pyehss ZHWEHⁿT', ['courriel'], FCVDR),
  sent(1163, 'Je mets Marc-André en copie.', 'I am copying Marc-André in.', '/ʒə mɛ maʁ.kɑ̃.dʁe ɑ̃ kɔ.pi/', 'zhuh meh mar-kahⁿ-DRAY | ahⁿ ko-PEE', ['courriel']),
  sent(1164, "J'ai transféré votre message au service des ventes.", 'I have forwarded your message to the sales department.', '/ʒe tʁɑ̃s.fe.ʁe vɔtʁ me.saʒ o sɛʁ.vis de vɑ̃t/', 'zhay trahⁿss-fay-RAY votr may-SAZH | oh sehr-veess day VAHⁿT', ['courriel'], FCVDR),
  sent(1165, 'Au Québec, on écrit un courriel ; en France, on envoie souvent un mail.', 'In Québec people write a courriel; in France they often send a mail.', '/o ke.bɛk ɔ̃.ne.kʁi œ̃ ku.ʁjɛl ɑ̃ fʁɑ̃s ɔ̃.nɑ̃.vwa su.vɑ̃ œ̃ mɛl/', 'oh kay-BEHK | ohⁿ-nay-KREE uhⁿ koo-RYEHL | ahⁿ FRAHⁿSS | ohⁿ-nahⁿ-VWA soo-vahⁿ uhⁿ MEHL', ['courriel', 'quebec', 'france']),
  sent(1166, 'Je reste à votre disposition pour toute question.', 'I remain at your disposal for any questions.', '/ʒə ʁɛst a vɔtʁ dis.po.zi.sjɔ̃ puʁ tut kɛs.tjɔ̃/', 'zhuh REHST a votr dees-po-zee-SYOHⁿ | poor toot kehs-TYOHⁿ', ['courriel'], FCVDR, { register: 'soutenu' }),
  sent(1167, "Dans l'attente de votre réponse, je vous souhaite une bonne journée.", 'Looking forward to your reply, I wish you a good day.', '/dɑ̃ la.tɑ̃t də vɔtʁ ʁe.pɔ̃s ʒə vu swɛt yn bɔn ʒuʁ.ne/', 'dahⁿ la-TAHⁿT duh votr ray-POHⁿSS | zhuh voo SWEHT ün bonn zhoor-NAY', ['courriel'], FCVR, { register: 'soutenu' }),
  sent(1168, "L'objet du courriel dit tout en quelques mots.", 'The subject line of the email says it all in a few words.', '/lɔb.ʒɛ dy ku.ʁjɛl di tu ɑ̃ kɛl.kə mo/', 'lob-ZHEH dü koo-RYEHL | dee TOO ahⁿ kehl-kuh MOH', ['courriel', 'faux-ami']),
  sent(1169, 'Un courriel pro : une formule, le message, une formule.', 'A work email: a greeting, the message, a sign-off.', '/œ̃ ku.ʁjɛl pʁo yn fɔʁ.myl lə me.saʒ yn fɔʁ.myl/', 'uhⁿ koo-ryehl PROH | ün for-MÜL | luh may-SAZH | ün for-MÜL', ['rule', 'courriel'], ['flashcard'],
    rule('The subject line, en français ?', "L'objet. Le sujet, c'est ce dont parle le texte.")),
  sent(1170, 'Merci de votre retour rapide.', 'Thank you for your quick reply.', '/mɛʁ.si də vɔtʁ ʁə.tuʁ ʁa.pid/', 'mehr-SEE duh votr ruh-TOOR ra-PEED', ['courriel', 'faux-ami']),
];

/* ── ACT 11 · À TOI D'ÉCRIRE AU CLIENT ───────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1171, 'Je vous écris au sujet de notre rendez-vous du douze novembre.', 'I am writing to you about our meeting on 12 November.', '/ʒə vu.ze.kʁi o sy.ʒɛ də nɔtʁ ʁɑ̃.de.vu dy duz nɔ.vɑ̃bʁ/', 'zhuh voo-zay-KREE oh sü-ZHEH | duh notr rahⁿ-day-VOO dü dooz no-VAHⁿBR', ['message'], FCVDR),
  sent(1172, 'Malheureusement, la livraison aura une semaine de retard.', 'Unfortunately, the delivery will be a week late.', '/ma.lø.ʁøz.mɑ̃ la li.vʁɛ.zɔ̃ o.ʁa yn smɛn də ʁə.taʁ/', 'ma-luh-ruhz-MAHⁿ | la lee-vreh-ZOHⁿ oh-RA ün SMEHNN duh ruh-TAR', ['message']),
  sent(1173, 'Seriez-vous disponible le mardi dix-neuf, à dix heures ?', 'Would you be available on Tuesday the 19th at ten?', '/sə.ʁje.vu dis.pɔ.nibl lə maʁ.di diz.nœf a di.zœʁ/', 'suh-ryay-VOO dees-po-NEEBL | luh mar-DEE deez-NUHF | a dee-ZUHR', ['message', 'politesse'], FCVDR),
  sent(1174, 'Vous trouverez en pièce jointe un devis révisé.', 'Please find attached a revised quote.', '/vu tʁu.vʁe ɑ̃ pjɛs ʒwɛ̃t œ̃ də.vi ʁe.vi.ze/', 'voo troo-VRAY ahⁿ pyehss ZHWEHⁿT | uhⁿ duh-VEE ray-vee-ZAY', ['message']),
  sent(1175, 'Pour ce retard, nous vous accordons une remise de cinq pour cent.', 'For this delay, we are giving you a five per cent discount.', '/puʁ sə ʁə.taʁ nu vu.za.kɔʁ.dɔ̃ yn ʁə.miz də sɛ̃k puʁ sɑ̃/', 'poor suh ruh-TAR | noo voo-za-kor-DOHⁿ ün ruh-MEEZ | duh SEHⁿK poor SAHⁿ', ['message', 'argent']),
  sent(1176, 'La livraison pourrait se faire en deux fois.', 'Delivery could be made in two batches.', '/la li.vʁɛ.zɔ̃ pu.ʁɛ sə fɛʁ ɑ̃ dø fwa/', 'la lee-vreh-ZOHⁿ poo-REH | suh FEHR ahⁿ deu FWA', ['message']),
  sent(1177, 'Je vous prie de nous excuser pour ce contretemps.', 'Please accept our apologies for this setback.', '/ʒə vu pʁi də nu.zɛks.ky.ze puʁ sə kɔ̃.tʁə.tɑ̃/', 'zhuh voo PREE | duh noo-zehks-kü-ZAY poor suh kohⁿ-truh-TAHⁿ', ['message'], FCVR, { register: 'soutenu' }),
  col(1178, 'un devis révisé', 'a revised quote', '/œ̃ də.vi ʁe.vi.ze/', 'uhⁿ duh-VEE ray-vee-ZAY', ['message', 'argent']),
  col(1179, 'proposer une nouvelle date', 'to suggest a new date', '/pʁɔ.po.ze yn nu.vɛl dat/', 'pro-po-ZAY ün noo-vehl DAT', ['message']),
  sent(1180, 'Je vous propose une nouvelle date pour notre rencontre.', 'I would like to suggest a new date for our meeting.', '/ʒə vu pʁɔ.poz yn nu.vɛl dat puʁ nɔtʁ ʁɑ̃.kɔ̃tʁ/', 'zhuh voo pro-POZ ün noo-vehl DAT | poor notr rahⁿ-KOHⁿTR', ['message', 'quebec'], FCVDR),
  col(1181, 'présenter ses excuses', 'to apologise', '/pʁe.zɑ̃.te se.zɛks.kyz/', 'pray-zahⁿ-TAY say-zehks-KÜZ', ['message'], undefined, 'soutenu'),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** The word families (tag famille) and collocations (tag collocation). */
export const FAMILY_IDS = ALL_ROWS.filter((r) => r.tags.includes('famille') && r.kind === 'phrase').map((r) => r.id);
export const COLLOCATION_IDS = ALL_ROWS.filter((r) => r.tags.includes('collocation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 *  Word counts are measured by the scratch check, not claimed. Each uses
 *  one apostrophe style, the straight one.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the welcome email from human resources, Montréal. */
export const BIENVENUE_TEXT =
  "Objet : Bienvenue chez Solane. Bonjour et bienvenue dans l'équipe ! Voici ta première semaine chez nous. Lundi, à dix heures, tu vas assister à la réunion d'équipe. Josée Paquette, la directrice des ventes, gère le service depuis six ans : c'est elle qui anime la réunion. Mardi, Marc-André Gagnon, notre gestionnaire de projet, va t'expliquer comment on passe une commande à nos fournisseurs. Mercredi, tu vas fixer ton premier rendez-vous avec une cliente de Lyon, par vidéo. Jeudi, on t'attend à la formation sur nos produits. Une chose importante : chez Solane, on respecte les délais. Si un projet prend du retard, on le dit tout de suite, sans attendre. Dernière chose : ici, tout le monde se tutoie, sauf avec les clients. Bonne première semaine ! Mélanie, ressources humaines";

/** Act 3: the minutes of the Monday team meeting. */
export const COMPTE_RENDU_TEXT =
  "Compte rendu de la réunion d'équipe du lundi 14 octobre. Présents : Josée Paquette, Marc-André Gagnon, Léa Tremblay, Samuel Côté. Josée a animé la réunion et Léa a pris des notes. Ordre du jour : les ventes du mois, le projet Rivière, le salon de Toronto. Premier point : Josée a fait le point sur les ventes. Le chiffre d'affaires du mois est en hausse de huit pour cent, surtout grâce à nos clients européens. Deuxième point : Marc-André a pris la parole pour présenter le projet Rivière, quarante lampes pour un hôtel de Lyon. Le fournisseur de Dakar a pris du retard sur les pieds en métal. L'équipe doit trouver une solution cette semaine. Troisième point : le salon de Toronto est reporté au printemps. La prochaine réunion aura lieu lundi prochain, à neuf heures. Compte rendu rédigé par Léa Tremblay.";

/** Act 5: the client's request for a quote, Lyon. */
export const DEMANDE_TEXT =
  "Objet : Demande de devis, quarante lampes. Madame, Monsieur, je suis la gérante de l'Hôtel des Tilleuls, à Lyon. Nous rénovons nos chambres cet hiver et nous cherchons des lampes de chevet. Votre modèle Aurore nous plaît beaucoup. Pourriez-vous nous faire un devis pour quarante lampes, livraison comprise ? Nous aurions besoin des lampes avant le quinze décembre, car l'hôtel rouvre le vingt. Pour une commande de cette taille, est-ce que vous accordez une remise ? Merci de nous indiquer aussi vos délais de livraison et vos conditions de paiement : en général, nous réglons nos factures à trente jours. Nous avons déjà reçu deux autres devis, mais nous préférons travailler avec une PME. Dans l'attente de votre réponse, bien cordialement, Hélène Rivière, gérante, Hôtel des Tilleuls";

/** Act 8: the company newsletter, three colleagues on saying no. */
export const NOUVELLES_TEXT =
  "Les Nouvelles de Solane, octobre. La parole aux équipes : dire non sans fermer la porte. Ce mois-ci, nous avons demandé à trois collègues comment ils expriment un désaccord en réunion. Pour Josée, directrice des ventes, il faut commencer par ce qui est juste : « Je dis d'abord : vous avez raison sur un point. Ensuite seulement, j'explique ce qui ne va pas. » Marc-André, gestionnaire de projet, préfère les questions : « Au lieu de dire que c'est impossible, je demande : et si on essayait autrement ? Souvent, on trouve un compromis. » Léa est arrivée de Paris en mars. « Dans mon ancienne équipe, on débattait beaucoup, parfois fort. Ici, j'ai appris à nuancer. Je dis : je ne suis pas tout à fait d'accord, et j'explique pourquoi. » Et vous, comment dites-vous non ? Écrivez-nous !";

/** Act 10: Josée's reply to the client, with the quote attached. */
export const REPONSE_TEXT =
  "Objet : Votre demande de devis, lampes Aurore. Bonjour Madame Rivière, merci de votre message et de votre intérêt pour nos lampes. Vous trouverez en pièce jointe notre devis pour quarante lampes Aurore, livraison comprise. Pour une commande de cette taille, nous pouvons vous accorder une remise de dix pour cent. Notre délai de livraison est de six semaines : si vous confirmez avant la fin du mois, vous serez livrée au début de décembre. Je mets Marc-André Gagnon, notre gestionnaire de projet, en copie : c'est lui qui suivra votre commande. Je reste à votre disposition pour toute question, et je serais heureuse de fixer un rendez-vous par vidéo pour en discuter. Dans l'attente de votre réponse, je vous souhaite une bonne journée. Bien cordialement, Josée Paquette, directrice des ventes, Solane";

/** Act 11: the model message the learner imitates, to a client in Genève. */
export const MESSAGE_TEXT =
  "Objet : Nouvelle date pour notre rencontre. Bonjour Monsieur Favre, je vous écris au sujet de notre rencontre du jeudi trois décembre et de votre commande de douze suspensions. Malheureusement, notre fournisseur a pris du retard, et les suspensions ne seront pas prêtes à temps. Je vous prie de nous excuser pour ce contretemps. Je vous propose une nouvelle date : seriez-vous disponible le jeudi dix décembre, à quinze heures, par vidéo ? Pour ce retard, nous vous accordons une remise de cinq pour cent. Vous trouverez en pièce jointe un devis révisé. Si vous le préférez, la livraison pourrait se faire en deux fois. Merci de me confirmer la date qui vous convient. Je reste à votre disposition pour toute question. Meilleures salutations, Marc-André Gagnon, gestionnaire de projet, Solane";

/** The blocks MESSAGE_TEXT uses, in order: the task checklist and round 11
 *  are built on this list. */
export const MESSAGE_BLOCKS = [
  'je vous écris au sujet de', 'prendre du retard', 'je vous prie de nous excuser',
  'proposer une nouvelle date', 'seriez-vous disponible', 'accorder une remise',
  'en pièce jointe', 'un devis révisé', 'merci de me confirmer', 'je reste à votre disposition',
] as const;
