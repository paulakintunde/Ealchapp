// b2.27.l1 « Le langage juridique et administratif »: the authored corpus, the
// imports, the texts and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md
// in the VOCAB / WORKSHOP shape of B1-WORKSHOP-AND-VOCAB-SHAPES.md (§1 and
// §2.3: families and collocations in use, one text per act), under the B2 rules
// of B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 27 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE LANGUAGE OF ADMINISTRATIONS, LEASES AND OFFICIAL TEXTS, FOR A
//   NON-LAWYER. The learner reads an official letter, a lease, a clause, a
//   municipal order and the terms of a public service, and writes a formal
//   complaint or request with a deadline and supporting documents. It teaches
//   READING and WRITING, never what anyone's rights actually are: every claim
//   about a rule is general and hedged, and every figure in a text belongs to
//   the example (« dans cet exemple », « dans ce bail »).
//
//     qui doit quoi     the four questions (who, what, by when, otherwise) on
//                       a formal demand for rent (act 1)
//     la démarche       une démarche, un formulaire, une pièce justificative,
//                       un dossier, un justificatif de domicile, un récépissé,
//                       une convocation; the calques application, rencontrer
//                       les exigences (act 2)
//     le temps          délai, échéance, à compter de, au plus tard, dans un
//                       délai de, sous huitaine, dès réception, le cachet de
//                       la poste faisant foi, jours ouvrables / ouvrés (act 3)
//     les droits        être tenu de, avoir droit à, être en droit de, sous
//                       peine de, il incombe à, se réserver le droit de (act 4)
//     le bail           louer / la location / le locataire / le loyer; le
//                       bailleur (France), le locateur (Québec); the two
//                       senses of la caution; préavis, congé, reconduction
//                       tacite (act 5)
//     la clause         le présent contrat, ci-après dénommé, sauf disposition
//                       contraire, le cas échéant, de plein droit, à la charge
//                       de (act 6)
//     le style          the impersonal, the passive and the noun of the
//                       official text, and their plain-language rewrite; when
//                       each is right (act 7)
//     les formules      je soussigné(e)… certifie, fait à… le…, pour servir et
//                       valoir ce que de droit, lu et approuvé, par la
//                       présente, ci-joint / ci-inclus (act 8)
//     la décision       vu, considérant que, arrête, article premier, le
//                       présent arrêté, le recours (act 9)
//     réclamer          une réclamation, contester, un recours gracieux or
//                       contentieux, mettre en demeure de, porter plainte
//                       against faire une réclamation (act 10)
//     les faux amis     amende / contravention, avocat / notaire, la justice,
//                       éventuellement, actuellement, le droit / la loi,
//                       démissionner, une infraction (act 11)
//     le courrier       the DELF B2 production écrite: a formal complaint or
//                       request with deadline and documents (act 12)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 18 in B1   the passive on the notice (reframe quoted, rows
//                       faits-et-procedures .1006 .1181 .1182 .1189 .1190)
//     lesson 36 in B1   délai against retard, respecter un délai (rows
//                       affaires .1002 .1072)
//     lesson 37 in B1   the reading strategy; éventuellement (row .1118)
//     lesson 39 in B1   the formal letter as a genre: objet, formules,
//                       réclamation (reframe quoted, rows correspondance
//                       .1036 .1100 .1101 .1102 .1107)
//     lesson 10 in B2   nominalisation (reframe quoted, rows langue-soignee
//                       .1522 .1558 .1562 .1563 .1642 .1648)
//     lesson 14 in B2   faute de réponse… je saisirai le médiateur (row .1394)
//     lesson 19 in B2   sauf si, à moins que, faute de in terms and
//                       conditions (reframe quoted; APPLIED, never re-taught)
//     lesson 20 in B2   il est rappelé que, il y a lieu de, il convient de
//                       (reframe quoted; APPLIED in act 7 and the arrêté)
//     lesson 26 in B2   negotiating on conditions (reframe quoted in the
//                       recycling round)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB probed read-only 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `droit` (« Le droit », domain societe, b1-b2, exam and immigration
//     flags). Sub-theme « le langage juridique et administratif » is already
//     in Postgres (read back 2026-09-30). Nothing to create.
//
//  2. ID BLOCK: `.1000`-`.1199`, assigned by the brief. A read-only probe on
//     2026-09-30 found NO row at .1000-.1199 at any level of this theme
//     (Postgres: fr.b1.droit .001-.177, fr.b2.droit .001-.144, all
//     published). Authored: `.1000`-`.1192`, one contiguous run, the act
//     boundaries in the banners below.
//
//  3. THE DB HOLDS THE BARE HEADWORDS of this topic (le bail, le locataire,
//     la caution, le préavis, la pièce justificative, le formulaire
//     administratif, la démarche administrative, le récépissé, la
//     convocation, la mise en demeure, la résiliation, le recours gracieux,
//     le recours contentieux, l'amende, le notaire...). So THIS CORPUS
//     AUTHORS NO BARE HEADWORD: its phrase rows are collocations (faire une
//     démarche, fournir une pièce justificative, délivrer un récépissé) or
//     word families, and the seed's own headwords are IMPORTED (§F: le bail,
//     le locataire, la caution, le dépôt de garantie, le préavis, résilier
//     le bail, la mise en demeure, une réclamation, l'amende, le notaire, un
//     avocat). Exact twins were checked against the seed plus packs, every
//     b1 and b2 draft corpus, and all of Postgres (scratch/_b227-twins.mts,
//     _b227-dbtwins.mts).
//
//  4. RESPELLINGS. Spelled for the nasal checker, not the ear: « personne »
//     pehr-SONN, « semaines » suh-MENN, « comprennent » kohⁿ-PRENN,
//     « huitaine » wee-TENN, « domaine » do-MENN, « communes » ko-MÜNN,
//     « l'une » LÜNN, « donne » donn, « panne » PANN, « fonctionne »
//     fohⁿk-SYONN, « entraîne » ahⁿ-TRENN, « peine » PENN, « aucune »
//     oh-KÜNN. No U+203F tie.
//
//  5. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. The one `scenario` uses ’ only and embeds no corpus row.
//
//  6. NO WRONG FORM IS EVER A ROW. « remplir une application », « rencontrer
//     les exigences », « mettre en demeure à », « faire une plainte » for a
//     bill, « je vais payer éventuellement » meaning eventually, « étudier la
//     loi », « la location » for a place: they live only in the scene's
//     choice, commonErrors.wrong, trapDrill.promptSound and quiz errorSpot
//     prompts.
//
//  7. FACTUAL CLAIMS, FOR A FACT CHECK BEFORE PUBLISH. Every other figure,
//     name, address and institution is invented (Régie Saint-Irénée, M.
//     Fontaine, Beaumont-sur-Lise, Terrassements Morel, Forme Plus...).
//     a. France: « jours ouvrables » are in general Monday to Saturday
//        (every day except Sunday and public holidays); « jours ouvrés » are
//        the days actually worked, often Monday to Friday (rows .1045
//        .1046, a3-piege, sheet-demarche).
//     b. France: « le cachet de la poste faisant foi » is the usual formula
//        that makes the postmark date the proof of sending (.1037, .1048).
//     c. France: a registered letter with acknowledgement of receipt
//        (lettre recommandée avec accusé de réception) proves the date of
//        receipt (act 1 reading, question « Inférence »).
//     d. Québec: the Civil Code calls the landlord « le locateur »; French
//        leases say « le bailleur » (.1074 .1075, sheet-bail).
//     e. France: in everyday speech « la caution » often means the deposit;
//        the legal term is « le dépôt de garantie », and « la caution » is
//        also the person who stands guarantor (.1076 .1077).
//     f. The act 5 lease (France, unfurnished, private landlord): three
//        years, tacit renewal for the same length, tenant may leave at any
//        time with three months' notice, landlord only at the end of the
//        lease for reasons the law sets out, deposit of one month's rent,
//        small repairs for the tenant and major ones for the landlord.
//        Framed as « ce bail », never as the law; it matches the general
//        French regime for an unfurnished lease from a natural person.
//     g. The act 5 Québec extract: the tenant who does not want to renew a
//        twelve-month lease notifies the landlord in writing three to six
//        months before it ends; without notice the lease is renewed « de
//        plein droit »; a tenant must notify the landlord before subletting.
//     h. France: an « arrêté » opens with « vu » (the legal bases) and
//        « considérant que » (the reasons), then « arrête » and numbered
//        articles; a municipal order commonly states it may be challenged
//        before the tribunal administratif within two months (act 9
//        reading, .1140). The codes cited in the visas are real (code
//        général des collectivités territoriales, code de la route).
//     i. France: a « recours gracieux » is addressed to the author of the
//        decision; a « recours contentieux » is brought before a court
//        (.1157 .1158).
//     j. Belgium: the mayor is called « le bourgmestre » (.1141).
//     k. France: « contravention » is the least serious of the three
//        categories of offence (contravention, délit, crime), and is also
//        the everyday word for the ticket (.1164).
//     l. Québec: the official name of a ticket is « constat d'infraction »
//        (.1165).
//     m. France and Québec: buying a home goes through a notaire, a jurist
//        who drafts and authenticates deeds; the North American « notary
//        public » mostly certifies signatures (.1166, a11 cards).
//     n. France: an « attestation d'hébergement » is written by the host
//        (« je soussigné(e)… certifie héberger… ») and usually comes with
//        a copy of the host's identity document and a proof of address
//        (act 8 story and text).
//     o. Ci-joint: invariable at the start of a sentence and before a noun
//        without a determiner; agrees after the noun; before a noun with a
//        determiner both are admitted (.1128, a8-piege).
//     p. « Langage clair »: in France and in Québec, administrations and
//        organisations have for years encouraged plainer public texts; in
//        Québec, the non-profit Éducaloi explains the law in plain language
//        (.1109, a7-focus, sheet-style). Stated in general terms only.
//     q. Lyon and French-speaking Switzerland call a property management
//        agency « une régie » (act 1 setting, a1 reading).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.27',
  seq: 27,
  title: 'Legal and Administrative Language',
  sub: 'Le langage juridique et administratif',
  canDo: "Can read an official letter, a lease, a contract clause, a municipal order and the terms of a public service, finding who must do what, by when, and what happens otherwise; can use the words of procedures, deadlines, rights and obligations, leases and complaints, recognise the formulas and the impersonal, passive and nominal style of official texts, rewrite them in plain French, avoid the faux amis of the field, and write a formal complaint or request with a deadline and supporting documents",
  prereqUnitIds: ['b1.18', 'b1.36', 'b1.39', 'b2.10', 'b2.19', 'b2.20'],
} as const;

export const LESSON_ID = 'b2.27.l1';
export const THEME = 'droit';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan numbers b2.01
 *  to b2.34 in trail order. Only B1 1-39 and B2 1-30 are cited (27 to 30
 *  publish together; lesson 28 is named once, in the roundup, as the next
 *  lesson).
 * ══════════════════════════════════════════════════════════════════════════ */

export const PASSIF_UNIT = 'b1.18';
export const REGISTRES_UNIT = 'b1.25';
export const AFFAIRES_UNIT = 'b1.36';
export const LECTURE_UNIT = 'b1.37';
export const COURRIELS_UNIT = 'b1.39';
export const NOMINAL_UNIT = 'b2.10';
export const INFINITIVES_UNIT = 'b2.14';
export const RESTRICTION_UNIT = 'b2.19';
export const IMPERS_UNIT = 'b2.20';
export const REUNIONS_UNIT = 'b2.26';
export const MEDICAL_UNIT = 'b2.28';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const PASSIF_REF = refFr(PASSIF_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const AFFAIRES_REF = refFr(AFFAIRES_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);
export const COURRIELS_REF = refFr(COURRIELS_UNIT);
export const NOMINAL_REF = refFr(NOMINAL_UNIT);
export const INFINITIVES_REF = refFr(INFINITIVES_UNIT);
export const RESTRICTION_REF = refFr(RESTRICTION_UNIT);
export const IMPERS_REF = refFr(IMPERS_UNIT);
export const REUNIONS_REF = refFr(REUNIONS_UNIT);
export const MEDICAL_REF = refFr(MEDICAL_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B118_REFRAME, REFRAME_EN as B118_REFRAME_EN } from '../b1/voix-passive-corpus.ts';
export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B136_REFRAME, REFRAME_EN as B136_REFRAME_EN } from '../b1/affaires-corpus.ts';
export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from '../b1/strategies-lecture-corpus.ts';
export { REFRAME as B139_REFRAME, REFRAME_EN as B139_REFRAME_EN } from '../b1/courriels-lettres-corpus.ts';
export { REFRAME as B210_REFRAME, REFRAME_EN as B210_REFRAME_EN } from './nominalisation-corpus.ts';
export { REFRAME as B219_REFRAME, REFRAME_EN as B219_REFRAME_EN } from './restriction-corpus.ts';
export { REFRAME as B220_REFRAME, REFRAME_EN as B220_REFRAME_EN } from './tournures-impersonnelles-corpus.ts';
export { REFRAME as B226_REFRAME, REFRAME_EN as B226_REFRAME_EN } from './reunions-negociation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA GRILLE DE LECTURE. However heavy the style, an official text answers
 *  four questions: who must act, what they must do, by when, and what
 *  happens otherwise. Reading one is finding those four answers under the
 *  formulas; writing one (a complaint, a formal demand) is giving them, in
 *  that order, with the documents that prove them. Plain language is the
 *  same four answers with the subject and the verb put back.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Dans un texte officiel, cherche qui doit faire quoi, avant quand, et ce qui arrive sinon.';
export const REFRAME_EN = 'In an official text, look for who must do what, by when, and what happens if not.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le langage administratif est un code secret.',
    why: 'Defeatist, and false: the same four answers are always there, and the plain-language movement (act 7) exists because the code can be undone. A learner told it is secret stops reading.',
  },
  {
    text: 'Le style officiel, c’est le passif.',
    why: 'Too narrow: the impersonal (lesson 20 in B2), the noun (lesson 10 in B2) and the fixed formulas (act 8) do as much, and lesson 18 in B1 already owns the passive on the notice. It also says nothing about how to READ.',
  },
  {
    text: 'Chaque mot juridique a un sens précis : apprends-le par cœur.',
    why: 'True of the words and useless as a strategy: the lesson’s hardest cases (éventuellement, la caution, avant le quinze) are words the learner already knows, read in the wrong frame. The four questions give the frame.',
  },
  {
    text: 'En cas de doute, demande à un avocat.',
    why: 'Sound advice, and exactly what this lesson must not give: it teaches reading and writing, never what a right is. It is also wrong on the faux ami (act 11): a sale goes through a notaire.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const FP1 = (n: number) => `fr.b1.faits-et-procedures.${n}`;
const COR1 = (n: number) => `fr.b1.correspondance.${n}`;
const LS2 = (n: number) => `fr.b2.langue-soignee.${n}`;
const MA1 = (n: number) => `fr.b1.maison.${String(n).padStart(3, '0')}`;
const SC1 = (n: number) => `fr.b1.strategies-de-comprehension.${n}`;

export const IMPORTED = {
  act1: [
    'fr.b2.maison.044',                        // la mise en demeure
  ],
  act2: [
    'fr.a2.ecole.071',                         // Votre dossier est incomplet.
    'fr.b1.langue-soignee.1194',               // Pourriez-vous me confirmer la réception de mon dossier ?
    LS2(1648),                                 // Veuillez joindre un document attestant votre adresse.  (lesson 10 in B2 wave)
    FP1(1047),                                 // Le dossier serait refusé sans ces papiers.  (lesson 18 in B1)
  ],
  act3: [
    'fr.b1.affaires.1002',                     // respecter un délai  (lesson 36 in B1)
    'fr.b1.affaires.1072',                     // Un délai, c'est le temps qu'on te donne ; un retard, c'est le temps de trop.  (lesson 36 in B1, rule card)
    'fr.b1.langue-soignee.1288',               // à compter du premier juillet
    'fr.b2.projets-et-futur.1917',             // Au plus tard lundi, vous aurez reçu la facture.  (lesson 7 in B2)
    FP1(1076),                                 // Votre demande sera traitée dans les dix jours.  (lesson 18 in B1)
    LS2(1642),                                 // Tout dossier arrivant après la date limite sera refusé.
  ],
  act4: [
    LS2(1609),                                 // Les employés travaillant de nuit ont droit à une prime.
    'fr.b2.connecteurs-logiques.1764',         // En tant que stagiaire, tu as droit à une carte.
    FP1(1187),                                 // il est interdit de  (lesson 18 in B1)
  ],
  act5: [
    MA1(24),                                   // le bail
    MA1(21),                                   // le locataire
    MA1(22),                                   // le propriétaire
    MA1(23),                                   // le loyer
    MA1(25),                                   // la caution
    MA1(49),                                   // le dépôt de garantie
    MA1(26),                                   // l'état des lieux
    MA1(27),                                   // les charges
    MA1(36),                                   // le préavis
    MA1(37),                                   // donner son préavis
    MA1(32),                                   // résilier le bail
  ],
  act6: [
    'fr.b2.maison.052',                        // la clause résolutoire
    FP1(1182),                                 // Le règlement peut être modifié sans préavis.  (lesson 18 in B1)
    FP1(1189),                                 // sans préavis  (lesson 18 in B1)
  ],
  act7: [
    FP1(1006),                                 // Le passif est sur l'affiche. Dans ta bouche, c'est on.  (lesson 18 in B1, rule card)
    FP1(1190),                                 // Une consigne dit ce qui est fait, jamais qui le fait.  (lesson 18 in B1, rule card)
    FP1(1181),                                 // Les visiteurs sont priés de signer le registre.  (lesson 18 in B1)
    LS2(1562),                                 // En cas de non-présentation du justificatif, le remboursement ne pourra être effectué.  (lesson 10 in B2, review only)
    LS2(1563),                                 // Si vous ne montrez pas le justificatif, on ne pourra pas vous rembourser.  (lesson 10 in B2)
    LS2(1558),                                 // Il est procédé à la vérification de l'installation par le technicien.  (lesson 10 in B2, review only)
    LS2(1522),                                 // Dès réception du paiement, la commande sera expédiée.  (lesson 10 in B2)
  ],
  act8: [
    COR1(1101),                                // Vous trouverez en pièce jointe une copie de mon contrat.  (lesson 39 in B1)
  ],
  act9: [
    SC1(1024),                                 // Le stationnement sera interdit des deux côtés de la rue jeudi.  (lesson 37 in B1)
    SC1(1038),                                 // C'est un avis de la Ville : l'eau sera coupée mardi.  (lesson 37 in B1)
    'fr.b1.connecteurs-logiques.1239',         // Vu que le train est en retard, on prend un café.  (lesson 31 in B1)
  ],
  act10: [
    COR1(1107),                                // une réclamation  (lesson 39 in B1)
    COR1(1100),                                // Je vous demande donc de corriger cette facture.  (lesson 39 in B1)
    'fr.b2.faits-et-procedures.1394',          // Faute de réponse sous quinze jours, je saisirai le médiateur de la consommation.  (lesson 14 in B2)
  ],
  act11: [
    SC1(1118),                                 // Éventuellement, je pourrais partager un appartement.  (lesson 37 in B1)
    'fr.a1.deplacements.112',                  // l'amende
    'fr.a1.metiers.063',                       // le notaire
    'fr.a1.metiers.003',                       // un avocat
  ],
  act12: [
    COR1(1036),                                // Veuillez agréer, Madame, Monsieur, mes salutations distinguées.  (lesson 39 in B1)
    COR1(1102),                                // Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.  (lesson 39 in B1)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. Both are
 *  lesson 10 in B2's heavy-style examples, drilled for review only. */
export const NOT_DECK_ABLE: readonly string[] = [LS2(1562), LS2(1558)];

/** No `voiceflash` in the seed: never in a `practice` speak section. The two
 *  rule cards of lessons 18 and 36 in B1 carry flashcard only. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE, 'fr.b1.affaires.1072', FP1(1006), FP1(1190),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `col` a collocation (kind phrase: the noun with what you do with it);
 *  `fam` a word family in one card; `sent` a sentence; `gap` a gapfill card
 *  whose front gaps the word and names the cue; `rule` a grammar card. Every
 *  row carries fr, en, ipa and respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const GP = ['langage-juridique'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

/** A collocation: the noun and what you do with it. */
const col = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string,
  extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['collocation', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP, notes, ...extra,
});

/** A word family: every member in one card. */
const fam = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes: string,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['famille', ...tags], drills: FCVR, version: 1, register: C, grammarPoints: GP, notes,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes, ...extra });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · QUI DOIT QUOI (.1000-.1014) ────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Vous êtes tenu de régler cette somme dans un délai de huit jours.', 'You are required to pay this sum within eight days.',
    '/vu.zɛt tə.ny də ʁe.ɡle sɛt sɔm dɑ̃.zœ̃ de.lɛ də ɥi ʒuʁ/', 'voo-zet tuh-NÜ duh ray-GLAY | set SOM | dahⁿ-zuhⁿ day-LEH | duh wee ZHOOR', ['lettre', 'quoi'], FCVDR),
  sent(1001, 'Je règle le loyer au plus tard vendredi.', 'I will pay the rent by Friday at the latest.',
    '/ʒə ʁɛɡl lə lwa.je o ply taʁ vɑ̃.dʁə.di/', 'zhuh REGL luh lwa-YAY | oh plü TAR vahⁿ-druh-DEE', ['scene', 'quand'], FCVDR),
  sent(1002, 'À défaut de règlement, nous engagerons une procédure.', 'Failing payment, we will start proceedings.',
    '/a de.fo də ʁɛ.ɡlə.mɑ̃ nu.zɑ̃.ɡa.ʒə.ʁɔ̃ yn pʁɔ.se.dyʁ/', 'a day-FOH duh reh-gluh-MAHⁿ | noo-zahⁿ-ga-zhuh-ROHⁿ | ün pro-say-DÜR', ['lettre', 'sinon'], FCVR, SO),
  sent(1003, 'Le délai court à compter de la réception de ce courrier.', 'The time limit runs from receipt of this letter.',
    '/lə de.lɛ kuʁ a kɔ̃.te də la ʁe.sɛp.sjɔ̃ də sə ku.ʁje/', 'luh day-LEH KOOR | a kohⁿ-TAY duh la ray-sep-SYOHⁿ | duh suh koo-RYAY', ['lettre', 'quand']),
  sent(1004, "Nous n'avons pas reçu votre loyer du mois de mars.", 'We have not received your rent for March.',
    '/nu na.vɔ̃ pa ʁə.sy vɔtʁ lwa.je dy mwa də maʁs/', 'noo na-vohⁿ pa ruh-SÜ | votr lwa-YAY | dü mwa duh MARS', ['lettre', 'quoi']),
  sent(1005, 'Cette lettre vous est adressée en recommandé avec accusé de réception.', 'This letter is sent to you by registered post with acknowledgement of receipt.',
    '/sɛt lɛtʁ vu.zɛ.ta.dʁɛ.se ɑ̃ ʁə.kɔ.mɑ̃.de a.vɛk a.ky.ze də ʁe.sɛp.sjɔ̃/', 'set LETR | voo-zeh-ta-dreh-SAY | ahⁿ ruh-ko-mahⁿ-DAY | a-vek a-kü-ZAY duh ray-sep-SYOHⁿ', ['lettre', 'france']),
  rule(1006, REFRAME, REFRAME_EN,
    '/dɑ̃.zœ̃ tɛkst ɔ.fi.sjɛl ʃɛʁʃ ki dwa fɛʁ kwa a.vɑ̃ kɑ̃ e sə ki a.ʁiv si.nɔ̃/',
    'dahⁿ-zuhⁿ tekst o-fee-SYEL | SHERSH | kee dwa fehr KWA | a-vahⁿ KAHⁿ | ay suh kee a-reev see-NOHⁿ',
    'Devant une lettre officielle, que cherches-tu d’abord ?',
    "Qui doit faire quoi, avant quand, et ce qui arrive sinon. Le reste du texte habille ces quatre réponses : les formules, les références, la politesse.",
    ['reframe', 'grille']),
  sent(1007, "Je pourrais éventuellement vous envoyer une copie du virement.", 'I could possibly send you a copy of the transfer.',
    '/ʒə pu.ʁɛ.ze.vɑ̃.tɥɛl.mɑ̃ vu.zɑ̃.vwa.je yn kɔ.pi dy viʁ.mɑ̃/', 'zhuh poo-reh-zay-vahⁿ-twel-MAHⁿ | voo-zahⁿ-vwa-YAY | ün ko-PEE dü veer-MAHⁿ', ['scene', 'faux-ami']),
  sent(1008, "Mon virement n'est pas passé à cause d'une erreur de la banque.", 'My transfer did not go through because of a bank error.',
    '/mɔ̃ viʁ.mɑ̃ nɛ pa pa.se a koz dyn ɛ.ʁœʁ də la bɑ̃k/', 'mohⁿ veer-MAHⁿ | neh pa pa-SAY | a kohz dün eh-RUHR | duh la BAHⁿK', ['scene']),
  sent(1009, 'Qui doit faire quoi, et avant quand ?', 'Who must do what, and by when?',
    '/ki dwa fɛʁ kwa e a.vɑ̃ kɑ̃/', 'kee dwa fehr KWA | ay a-vahⁿ KAHⁿ', ['grille']),
  sent(1010, 'Sinon, que se passe-t-il ?', 'Otherwise, what happens?',
    '/si.nɔ̃ kə sə pas.til/', 'see-NOHⁿ | kuh suh pass-TEEL', ['grille', 'sinon']),
  sent(1011, "La somme due s'élève à sept cent quatre-vingts euros.", 'The sum owed amounts to seven hundred and eighty euros.',
    '/la sɔm dy se.lɛv a sɛt sɑ̃ ka.tʁə.vɛ̃.zø.ʁo/', 'la som DÜ | say-LEV a set sahⁿ ka-truh-vehⁿ-zuh-ROH', ['lettre', 'quoi']),
  sent(1012, 'Nous vous prions de bien vouloir régulariser votre situation.', 'We kindly ask you to settle your account.',
    '/nu vu pʁi.jɔ̃ də bjɛ̃ vu.lwaʁ ʁe.ɡy.la.ʁi.ze vɔtʁ si.tɥa.sjɔ̃/', 'noo voo pree-YOHⁿ | duh byehⁿ voo-LWAR | ray-gü-la-ree-ZAY votr see-twa-SYOHⁿ', ['lettre'], FCVR, SO),
  sent(1013, "Je vous transmets le justificatif de virement dès aujourd'hui.", 'I am sending you the transfer receipt today.',
    '/ʒə vu tʁɑ̃s.mɛ lə ʒys.ti.fi.ka.tif də viʁ.mɑ̃ dɛ.zo.ʒuʁ.dɥi/', 'zhuh voo trahⁿs-MEH | luh zhüs-tee-fee-ka-TEEF duh veer-MAHⁿ | deh-zoh-zhoor-DWEE', ['usage', 'quoi']),
  sent(1014, 'Vous disposez de quinze jours pour contester cette décision.', 'You have fifteen days to challenge this decision.',
    '/vu dis.po.ze də kɛ̃z ʒuʁ puʁ kɔ̃.tɛs.te sɛt de.si.zjɔ̃/', 'voo dees-poh-ZAY | duh kehⁿz ZHOOR | poor kohⁿ-tes-TAY set day-see-ZYOHⁿ', ['usage', 'quand'], FCVDR),
];

/* ── ACT 2 · LES MOTS DE LA DÉMARCHE (.1015-.1031) ──────────────────────── */

export const ACT2_ROWS: Row[] = [
  col(1015, 'faire une démarche', 'to go through a procedure', '/fɛʁ yn de.maʁʃ/', 'fehr ün day-MARSH', ['demarche'],
    "Une démarche : toutes les étapes pour obtenir quelque chose d'une administration."),
  col(1016, 'remplir un formulaire de demande', 'to fill in an application form', '/ʁɑ̃.pliʁ œ̃ fɔʁ.my.lɛʁ də də.mɑ̃d/', 'rahⁿ-PLEER uhⁿ for-mü-LEHR | duh duh-MAHⁿD', ['demarche', 'calque'],
    "Un formulaire de demande, jamais un formulaire d'application."),
  col(1017, 'fournir une pièce justificative', 'to provide a supporting document', '/fuʁ.niʁ yn pjɛs ʒys.ti.fi.ka.tiv/', 'foor-NEER ün pyess zhüs-tee-fee-ka-TEEV', ['demarche'],
    "Une pièce justificative prouve ce que tu déclares : une facture, un bulletin de salaire, une attestation."),
  col(1018, 'déposer un dossier complet', 'to submit a complete file', '/de.po.ze œ̃ do.sje kɔ̃.plɛ/', 'day-poh-ZAY uhⁿ do-SYAY kohⁿ-PLEH', ['demarche'],
    "On dépose un dossier au guichet ou en ligne. Complet : avec toutes les pièces demandées."),
  col(1019, 'un justificatif de domicile', 'a proof of address', '/œ̃ ʒys.ti.fi.ka.tif də dɔ.mi.sil/', 'uhⁿ zhüs-tee-fee-ka-TEEF duh do-mee-SEEL', ['demarche', 'france'],
    "Un document récent qui prouve où tu habites : une facture, une quittance de loyer. Au Québec, on dit souvent une preuve de résidence."),
  col(1020, 'délivrer un récépissé', 'to issue a receipt for an application', '/de.li.vʁe œ̃ ʁe.se.pi.se/', 'day-lee-VRAY uhⁿ ray-say-pee-SAY', ['demarche'],
    "L'administration délivre un récépissé : un reçu qui prouve que ton dossier a été déposé."),
  col(1021, 'recevoir une convocation', 'to receive a notice to attend', '/ʁə.sə.vwaʁ yn kɔ̃.vɔ.ka.sjɔ̃/', 'ruh-suh-VWAR ün kohⁿ-vo-ka-SYOHⁿ', ['demarche'],
    "Une convocation te demande de venir à un lieu, un jour et une heure fixés."),
  fam(1022, 'justifier, un justificatif, une justification', 'to prove, a supporting document, a justification', '/ʒys.ti.fje œ̃ ʒys.ti.fi.ka.tif yn ʒys.ti.fi.ka.sjɔ̃/', 'zhüs-tee-FYAY, uhⁿ zhüs-tee-fee-ka-TEEF, ün zhüs-tee-fee-ka-SYOHⁿ', ['demarche'],
    "Famille : le verbe, le document qui prouve, l'explication. Justifier de son domicile : le prouver."),
  fam(1023, 'convoquer, une convocation', 'to summon, a notice to attend', '/kɔ̃.vɔ.ke yn kɔ̃.vɔ.ka.sjɔ̃/', 'kohⁿ-vo-KAY, ün kohⁿ-vo-ka-SYOHⁿ', ['demarche'],
    "On est convoqué par une administration, un employeur, un tribunal."),
  sent(1024, 'Il manque une pièce justificative à votre dossier.', 'Your file is missing a supporting document.',
    '/il mɑ̃k yn pjɛs ʒys.ti.fi.ka.tiv a vɔtʁ do.sje/', 'eel MAHⁿK | ün pyess zhüs-tee-fee-ka-TEEV | a votr do-SYAY', ['guichet', 'demarche'], FCVDR),
  sent(1025, 'Le guichet vous remettra un récépissé de dépôt.', 'The counter will give you a receipt for your submission.',
    '/lə ɡi.ʃɛ vu ʁə.mɛ.tʁa œ̃ ʁe.se.pi.se də de.po/', 'luh gee-SHEH | voo ruh-meh-TRA | uhⁿ ray-say-pee-SAY duh day-POH', ['guichet']),
  sent(1026, 'Gardez ce récépissé : il prouve que vous avez déposé votre demande.', 'Keep this receipt: it proves you submitted your application.',
    '/ɡaʁ.de sə ʁe.se.pi.se il pʁuv kə vu.za.ve de.po.ze vɔtʁ də.mɑ̃d/', 'gar-DAY suh ray-say-pee-SAY | eel PROOV | kuh voo-za-VAY day-poh-ZAY | votr duh-MAHⁿD', ['guichet'], FCVDR),
  sent(1027, "Une facture d'électricité peut servir de justificatif de domicile.", 'An electricity bill can serve as proof of address.',
    '/yn fak.tyʁ de.lɛk.tʁi.si.te pø sɛʁ.viʁ də ʒys.ti.fi.ka.tif də dɔ.mi.sil/', 'ün fak-TÜR day-lek-tree-see-TAY | peu sehr-VEER | duh zhüs-tee-fee-ka-TEEF duh do-mee-SEEL', ['guichet', 'demarche']),
  sent(1028, 'Vous êtes convoqué le douze mai à neuf heures.', 'You are required to attend on 12 May at nine o’clock.',
    '/vu.zɛt kɔ̃.vɔ.ke lə duz mɛ a nœ.vœʁ/', 'voo-zet kohⁿ-vo-KAY | luh dooz MEH | a nuh-VUHR', ['guichet', 'demarche']),
  sent(1029, 'Elle a fait une demande de logement social.', 'She applied for social housing.',
    '/ɛl a fɛ yn də.mɑ̃d də lɔʒ.mɑ̃ sɔ.sjal/', 'el a FEH | ün duh-MAHⁿD | duh lozh-mahⁿ so-SYAL', ['calque', 'demarche']),
  rule(1030, 'Une démarche se fait, un formulaire se remplit, un dossier se dépose.', 'A procedure is gone through, a form is filled in, a file is submitted.',
    '/yn de.maʁʃ sə fɛ œ̃ fɔʁ.my.lɛʁ sə ʁɑ̃.pli œ̃ do.sje sə de.pɔz/', 'ün day-MARSH suh FEH | uhⁿ for-mü-LEHR suh rahⁿ-PLEE | uhⁿ do-SYAY suh day-POHZ',
    '« Un dossier » : quel verbe quand tu le remets à l’administration ?',
    "On dépose un dossier, au guichet ou en ligne ; on le complète s'il manque une pièce. Un mot de l'administration s'apprend avec son verbe.",
    ['demarche']),
  sent(1031, 'Votre dossier répond à toutes les exigences.', 'Your file meets all the requirements.',
    '/vɔtʁ do.sje ʁe.pɔ̃ a tut le.zɛɡ.zi.ʒɑ̃s/', 'votr do-SYAY ray-POHⁿ | a toot lay-zeg-zee-ZHAHⁿS', ['calque', 'demarche'], FCVDR),
];

/* ── ACT 3 · LE TEMPS DE L'ADMINISTRATION (.1032-.1048) ─────────────────── */

export const ACT3_ROWS: Row[] = [
  col(1032, 'au plus tard le quinze', 'by the fifteenth at the latest', '/o ply taʁ lə kɛ̃z/', 'oh plü TAR luh KEHⁿZ', ['delai'],
    "La dernière date possible : le quinze compte encore."),
  col(1033, 'dans un délai de trente jours', 'within thirty days', '/dɑ̃.zœ̃ de.lɛ də tʁɑ̃t ʒuʁ/', 'dahⁿ-zuhⁿ day-LEH duh trahⁿt ZHOOR', ['delai'],
    "Un délai : le temps qu'on te donne. Cherche toujours à partir de quand il compte."),
  col(1034, 'à compter de la date de réception', 'from the date of receipt', '/a kɔ̃.te də la dat də ʁe.sɛp.sjɔ̃/', 'a kohⁿ-TAY duh la DAT duh ray-sep-SYOHⁿ', ['delai'],
    "À compter de : le point de départ. Soutenu, fréquent dans les courriers officiels.", SO),
  col(1035, 'dès réception de ce courrier', 'as soon as you receive this letter', '/dɛ ʁe.sɛp.sjɔ̃ də sə ku.ʁje/', 'deh ray-sep-SYOHⁿ | duh suh koo-RYAY', ['delai'],
    "Dès réception : tout de suite, sans attendre. Pas d'article devant réception."),
  col(1036, 'passé ce délai', 'once this time limit has passed', '/pa.se sə de.lɛ/', 'pa-SAY suh day-LEH', ['delai'],
    "Passé ce délai : une fois le délai terminé. Passé reste invariable devant le nom.", SO),
  col(1037, 'le cachet de la poste faisant foi', 'as shown by the postmark', '/lə ka.ʃɛ də la pɔst fə.zɑ̃ fwa/', 'luh ka-SHEH duh la POST | fuh-zahⁿ FWA', ['delai', 'france'],
    "La date du tampon de la poste sert de preuve : c'est la date d'envoi qui compte.", SO),
  sent(1038, "Le paiement doit nous parvenir avant l'échéance du trente juin.", 'Payment must reach us before the 30 June due date.',
    '/lə pɛ.mɑ̃ dwa nu paʁ.və.niʁ a.vɑ̃ le.ʃe.ɑ̃s dy tʁɑ̃t ʒɥɛ̃/', 'luh peh-MAHⁿ dwa noo par-vuh-NEER | a-vahⁿ lay-shay-AHⁿS | dü trahⁿt ZHWEHⁿ', ['delai']),
  sent(1039, "Vous avez jusqu'au quinze inclus pour envoyer le formulaire.", 'You have until the fifteenth inclusive to send the form.',
    '/vu.za.ve ʒys.ko kɛ̃.zɛ̃.kly puʁ ɑ̃.vwa.je lə fɔʁ.my.lɛʁ/', 'voo-za-VAY | zhüs-koh kehⁿ-zehⁿ-KLÜ | poor ahⁿ-vwa-YAY luh for-mü-LEHR', ['delai'], FCVDR),
  sent(1040, 'Passé ce délai, votre demande ne sera plus recevable.', 'Once this time limit has passed, your application will no longer be admissible.',
    '/pa.se sə de.lɛ vɔtʁ də.mɑ̃d nə sə.ʁa ply ʁə.sə.vabl/', 'pa-SAY suh day-LEH | votr duh-MAHⁿD | nuh suh-ra plü ruh-suh-VABL', ['delai', 'sinon'], FCVR, SO),
  sent(1041, 'Le délai de réponse est de deux mois.', 'The response time is two months.',
    '/lə de.lɛ də ʁe.pɔ̃s ɛ də dø mwa/', 'luh day-LEH duh ray-POHⁿS | eh duh deu MWA', ['delai']),
  sent(1042, "Répondez sous huitaine, c'est-à-dire dans les huit jours.", 'Reply within a week, that is, within eight days.',
    '/ʁe.pɔ̃.de su ɥi.tɛn sɛ.ta.diʁ dɑ̃ le ɥi ʒuʁ/', 'ray-pohⁿ-DAY | soo wee-TENN | seh-ta-DEER | dahⁿ lay wee ZHOOR', ['delai'], FCVR, SO),
  sent(1043, 'Le formulaire doit être renvoyé avant le trente avril.', 'The form must be returned before 30 April.',
    '/lə fɔʁ.my.lɛʁ dwa.tɛtʁ ʁɑ̃.vwa.je a.vɑ̃ lə tʁɑ̃.ta.vʁil/', 'luh for-mü-LEHR | dwa-tetr rahⁿ-vwa-YAY | a-vahⁿ luh trahⁿ-ta-VREEL', ['delai']),
  sent(1044, 'À compter du premier janvier, le tarif change.', 'From 1 January, the rate changes.',
    '/a kɔ̃.te dy pʁə.mje ʒɑ̃.vje lə ta.ʁif ʃɑ̃ʒ/', 'a kohⁿ-TAY dü pruh-MYAY zhahⁿ-VYAY | luh ta-REEF SHAHⁿZH', ['delai'], FCVDR),
  sent(1045, 'En France, les jours ouvrables vont en général du lundi au samedi.', 'In France, « jours ouvrables » generally run from Monday to Saturday.',
    '/ɑ̃ fʁɑ̃s le ʒuʁ.zu.vʁabl vɔ̃.tɑ̃ ʒe.ne.ʁal dy lœ̃.di o sam.di/', 'ahⁿ FRAHⁿS | lay zhoor-zoo-VRABL | vohⁿ-tahⁿ zhay-nay-RAL | dü luhⁿ-DEE oh sam-DEE', ['delai', 'france']),
  sent(1046, 'Les jours ouvrés sont les jours réellement travaillés, souvent du lundi au vendredi.', 'Jours ouvrés are the days actually worked, often Monday to Friday.',
    '/le ʒuʁ.zu.vʁe sɔ̃ le ʒuʁ ʁe.ɛl.mɑ̃ tʁa.va.je su.vɑ̃ dy lœ̃.di o vɑ̃.dʁə.di/', 'lay zhoor-zoo-VRAY | sohⁿ lay zhoor ray-el-MAHⁿ tra-va-YAY | soo-VAHⁿ | dü luhⁿ-DEE oh vahⁿ-druh-DEE', ['delai', 'france']),
  rule(1047, "Jusqu'au quinze inclus, le quinze compte encore ; avant le quinze, vise le quatorze.", 'Until the 15th inclusive, the 15th still counts; before the 15th, aim for the 14th.',
    '/ʒys.ko kɛ̃.zɛ̃.kly lə kɛ̃z kɔ̃t ɑ̃.kɔʁ a.vɑ̃ lə kɛ̃z viz lə ka.tɔʁz/', 'zhüs-koh kehⁿ-zehⁿ-KLÜ | luh KEHⁿZ kohⁿt ahⁿ-KOR | a-vahⁿ luh KEHⁿZ | VEEZ luh ka-TORZ',
    '« Avant le quinze » ou « jusqu’au quinze inclus » : quelle date vises-tu ?',
    "Avec avant le, le jour cité peut déjà être trop tard ; en cas de doute, vise la veille, ou cherche si le texte dit inclus.",
    ['delai']),
  sent(1048, 'Le dossier doit être envoyé avant le quinze, le cachet de la poste faisant foi.', 'The file must be sent before the fifteenth, as shown by the postmark.',
    '/lə do.sje dwa.tɛtʁ ɑ̃.vwa.je a.vɑ̃ lə kɛ̃z lə ka.ʃɛ də la pɔst fə.zɑ̃ fwa/', 'luh do-SYAY dwa-tetr ahⁿ-vwa-YAY | a-vahⁿ luh KEHⁿZ | luh ka-SHEH duh la POST | fuh-zahⁿ FWA', ['delai', 'france'], FCVDR),
];

/* ── ACT 4 · DROITS ET OBLIGATIONS (.1049-.1064) ────────────────────────── */

export const ACT4_ROWS: Row[] = [
  col(1049, 'être tenu de faire', 'to be required to do', '/ɛtʁ tə.ny də fɛʁ/', 'etr tuh-NÜ duh FEHR', ['obligation'],
    "L'obligation : tu dois. Tenu s'accorde avec le sujet : elle est tenue, ils sont tenus.", SO),
  col(1050, 'avoir droit à une aide', 'to be entitled to financial help', '/a.vwaʁ dʁwa a yn ɛd/', 'a-vwar DRWA a ün ED', ['droit'],
    "Avoir droit à + nom : une chose te revient. Sans article devant droit."),
  col(1051, 'être en droit de refuser', 'to be entitled to refuse', '/ɛ.tʁɑ̃ dʁwa də ʁə.fy.ze/', 'eh-trahⁿ DRWA duh ruh-fü-ZAY', ['droit'],
    "Être en droit de + infinitif : tu peux légitimement le faire.", SO),
  col(1052, "sous peine d'amende", 'on pain of a fine', '/su pɛn da.mɑ̃d/', 'soo PENN da-MAHⁿD', ['obligation', 'sinon'],
    "Sous peine de : sinon, voici la sanction. Toujours + nom ou infinitif.", SO),
  col(1053, 'se réserver le droit de modifier', 'to reserve the right to change', '/sə ʁe.zɛʁ.ve lə dʁwa də mɔ.di.fje/', 'suh ray-zehr-VAY luh DRWA | duh mo-dee-FYAY', ['droit'],
    "Celui qui écrit garde une liberté : il pourra le faire, sans promettre qu'il le fera.", SO),
  sent(1054, "L'usager est tenu de rendre les documents dans les délais.", 'Users are required to return items on time.',
    '/ly.za.ʒe ɛ tə.ny də ʁɑ̃dʁ le do.ky.mɑ̃ dɑ̃ le de.lɛ/', 'lü-za-ZHAY eh tuh-NÜ | duh rahⁿdr lay do-kü-MAHⁿ | dahⁿ lay day-LEH', ['obligation', 'mediatheque'], FCVDR),
  sent(1055, 'Les abonnés ont droit à vingt prêts par mois.', 'Members are entitled to twenty loans a month.',
    '/le.za.bɔ.ne ɔ̃ dʁwa a vɛ̃ pʁɛ paʁ mwa/', 'lay-za-bo-NAY | ohⁿ DRWA a vehⁿ PREH | par MWA', ['droit', 'mediatheque']),
  sent(1056, 'Si le livre est abîmé, la médiathèque est en droit de vous le facturer.', 'If the book is damaged, the library is entitled to charge you for it.',
    '/si lə livʁ ɛ.ta.bi.me la me.dja.tɛk ɛ.tɑ̃ dʁwa də vu lə fak.ty.ʁe/', 'see luh LEEVR | eh-ta-bee-MAY | la may-dya-TEK | eh-tahⁿ DRWA | duh voo luh fak-tü-RAY', ['droit', 'mediatheque']),
  sent(1057, 'Tout retard de plus de trente jours entraîne la suspension de la carte.', 'Any delay of more than thirty days leads to the card being suspended.',
    '/tu ʁə.taʁ də ply də tʁɑ̃t ʒuʁ ɑ̃.tʁɛn la sys.pɑ̃.sjɔ̃ də la kaʁt/', 'too ruh-TAR | duh plü duh trahⁿt ZHOOR | ahⁿ-TRENN | la süs-pahⁿ-SYOHⁿ duh la KART', ['sinon', 'mediatheque']),
  sent(1058, "Il est interdit de fumer dans l'enceinte, sous peine d'amende.", 'Smoking is prohibited on the premises, on pain of a fine.',
    '/il ɛ.tɛ̃.tɛʁ.di də fy.me dɑ̃ lɑ̃.sɛ̃t su pɛn da.mɑ̃d/', 'eel eh-tehⁿ-tehr-DEE | duh fü-MAY dahⁿ lahⁿ-SEHⁿT | soo PENN da-MAHⁿD', ['obligation', 'sinon'], FCVDR),
  sent(1059, 'La médiathèque se réserve le droit de modifier ses horaires.', 'The library reserves the right to change its opening hours.',
    '/la me.dja.tɛk sə ʁe.zɛʁv lə dʁwa də mɔ.di.fje se.zɔ.ʁɛʁ/', 'la may-dya-TEK | suh ray-ZEHRV luh DRWA | duh mo-dee-FYAY say-zo-REHR', ['droit', 'mediatheque']),
  sent(1060, "Il incombe à l'usager de signaler tout changement d'adresse.", "It is the user's responsibility to report any change of address.",
    '/il ɛ̃.kɔ̃b a ly.za.ʒe də si.ɲa.le tu ʃɑ̃ʒ.mɑ̃ da.dʁɛs/', 'eel ehⁿ-KOHⁿB | a lü-za-ZHAY | duh see-nya-LAY | too shahⁿzh-MAHⁿ da-DRESS', ['obligation'], FCVR, SO),
  sent(1061, 'Seul le titulaire de la carte peut emprunter des documents.', 'Only the cardholder may borrow items.',
    '/sœl lə ti.ty.lɛʁ də la kaʁt pø ɑ̃.pʁœ̃.te de do.ky.mɑ̃/', 'SUHL luh tee-tü-LEHR duh la KART | peu ahⁿ-pruhⁿ-TAY day do-kü-MAHⁿ', ['droit', 'mediatheque']),
  sent(1062, "Les mineurs ont le droit de s'inscrire avec l'accord d'un parent.", "Minors may register with a parent's consent.",
    '/le mi.nœʁ ɔ̃ lə dʁwa də sɛ̃s.kʁiʁ a.vɛk la.kɔʁ dœ̃ pa.ʁɑ̃/', 'lay mee-NUHR | ohⁿ luh DRWA duh sehⁿs-KREER | a-vek la-KOR duhⁿ pa-RAHⁿ', ['droit', 'mediatheque']),
  rule(1063, 'Avoir droit à une chose ; être en droit de faire ; être tenu de faire.', 'To be entitled to a thing; to be entitled to do; to be required to do.',
    '/a.vwaʁ dʁwa a yn ʃoz ɛ.tʁɑ̃ dʁwa də fɛʁ ɛtʁ tə.ny də fɛʁ/', 'a-vwar DRWA a ün SHOHZ | eh-trahⁿ DRWA duh FEHR | etr tuh-NÜ duh FEHR',
    '« Les abonnés … vingt prêts par mois » : ont droit à, sont en droit de, ou sont tenus de ?',
    "Ont droit à : un nom suit. Être en droit de et être tenu de veulent un infinitif ; le premier permet, le second oblige.",
    ['droit', 'obligation']),
  gap(1064, "Les visiteurs sont tenus de présenter une pièce d'identité.", 'Visitors are required to show an identity document.',
    '/le vi.zi.tœʁ sɔ̃ tə.ny də pʁe.zɑ̃.te yn pjɛs di.dɑ̃.ti.te/', 'lay vee-zee-TUHR | sohⁿ tuh-NÜ | duh pray-zahⁿ-TAY | ün pyess dee-dahⁿ-tee-TAY',
    "Les visiteurs sont ___ de présenter une pièce d'identité. (tenir)",
    "Tenus : le participe s'accorde avec les visiteurs, comme un adjectif. EN: agreed participle.",
    ['obligation']),
];

/* ── ACT 5 · LE BAIL (.1065-.1081) ──────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  fam(1065, 'louer, la location, le locataire, le loyer', 'to rent, renting, the tenant, the rent', '/lwe la lɔ.ka.sjɔ̃ lə lɔ.ka.tɛʁ lə lwa.je/', 'LWAY, la lo-ka-SYOHⁿ, luh lo-ka-TEHR, luh lwa-YAY', ['bail', 'faux-ami'],
    "Famille : le verbe, l'action, la personne, la somme. La location, c'est le fait de louer, jamais un lieu."),
  col(1066, "signer un bail d'habitation", 'to sign a residential lease', '/si.ɲe œ̃ baj da.bi.ta.sjɔ̃/', 'see-NYAY uhⁿ BAHY da-bee-ta-SYOHⁿ', ['bail'],
    "Un bail d'habitation : pour un logement où l'on vit. Au pluriel : des baux."),
  col(1067, 'donner congé au locataire', 'to give the tenant notice', '/dɔ.ne kɔ̃.ʒe o lɔ.ka.tɛʁ/', 'do-NAY kohⁿ-ZHAY | oh lo-ka-TEHR', ['bail'],
    "Donner congé : mettre fin au bail. Le mot vaut pour les deux parties, bailleur ou locataire."),
  col(1068, "faire l'état des lieux de sortie", 'to do the move-out inspection', '/fɛʁ le.ta de ljø də sɔʁ.ti/', 'fehr lay-TA day LYEU | duh sor-TEE', ['bail'],
    "L'état des lieux décrit le logement pièce par pièce, à l'entrée et à la sortie."),
  col(1069, 'restituer le dépôt de garantie', 'to return the security deposit', '/ʁɛs.ti.tɥe lə de.po də ɡa.ʁɑ̃.ti/', 'res-tee-TWAY luh day-POH duh ga-rahⁿ-TEE', ['bail'],
    "Restituer : rendre, en langue soutenue. On restitue un dépôt, des clés, un document.", SO),
  col(1070, 'être reconduit tacitement', 'to be renewed automatically', '/ɛtʁ ʁə.kɔ̃.dɥi ta.sit.mɑ̃/', 'etr ruh-kohⁿ-DWEE | ta-seet-MAHⁿ', ['bail', 'clause'],
    "Tacitement : sans rien dire ni signer. Le contrat continue tout seul.", SO),
  sent(1071, 'Le bail est reconduit tacitement chaque année.', 'The lease is renewed automatically every year.',
    '/lə baj ɛ ʁə.kɔ̃.dɥi ta.sit.mɑ̃ ʃa.ka.ne/', 'luh BAHY | eh ruh-kohⁿ-DWEE | ta-seet-MAHⁿ | sha-ka-NAY', ['bail'], FCVDR),
  sent(1072, 'Dans ce bail, le locataire peut donner congé à tout moment, avec un préavis de trois mois.', 'In this lease, the tenant may give notice at any time, with three months’ notice.',
    '/dɑ̃ sə baj lə lɔ.ka.tɛʁ pø dɔ.ne kɔ̃.ʒe a tu mɔ.mɑ̃ a.vɛk œ̃ pʁe.a.vi də tʁwa mwa/', 'dahⁿ suh BAHY | luh lo-ka-TEHR peu do-NAY kohⁿ-ZHAY | a too mo-MAHⁿ | a-vek uhⁿ pray-a-VEE duh trwa MWA', ['bail']),
  sent(1073, "Les charges comprennent l'eau froide et l'entretien des parties communes.", 'Service charges include cold water and upkeep of the common areas.',
    '/le ʃaʁʒ kɔ̃.pʁɛn lo fʁwad e lɑ̃.tʁə.tjɛ̃ de paʁ.ti kɔ.myn/', 'lay SHARZH | kohⁿ-PRENN | loh FRWAD | ay lahⁿ-truh-TYEHⁿ | day par-TEE ko-MÜNN', ['bail']),
  sent(1074, 'Au Québec, le Code civil appelle le propriétaire « le locateur ».', 'In Québec, the Civil Code calls the landlord « le locateur ».',
    '/o ke.bɛk lə kɔd si.vil a.pɛl lə pʁɔ.pʁi.je.tɛʁ lə lɔ.ka.tœʁ/', 'oh kay-BEK | luh kod see-VEEL | a-PEL luh pro-pree-yay-TEHR | luh lo-ka-TUHR', ['bail', 'quebec']),
  sent(1075, 'En France, le bail dit plutôt « le bailleur ».', 'In France, the lease tends to say « le bailleur ».',
    '/ɑ̃ fʁɑ̃s lə baj di ply.to lə ba.jœʁ/', 'ahⁿ FRAHⁿS | luh BAHY dee plü-TOH | luh ba-YUHR', ['bail', 'france']),
  sent(1076, 'Dans le langage courant, la caution désigne souvent le dépôt de garantie.', "In everyday language, « la caution » often means the security deposit.",
    '/dɑ̃ lə lɑ̃.ɡaʒ ku.ʁɑ̃ la ko.sjɔ̃ de.ziɲ su.vɑ̃ lə de.po də ɡa.ʁɑ̃.ti/', 'dahⁿ luh lahⁿ-GAZH koo-RAHⁿ | la koh-SYOHⁿ day-ZEENY soo-VAHⁿ | luh day-POH duh ga-rahⁿ-TEE', ['bail', 'france']),
  sent(1077, 'Dans un bail, la caution est aussi la personne qui se porte garante.', 'In a lease, « la caution » is also the person who stands as guarantor.',
    '/dɑ̃.zœ̃ baj la ko.sjɔ̃ ɛ.to.si la pɛʁ.sɔn ki sə pɔʁt ɡa.ʁɑ̃t/', 'dahⁿ-zuhⁿ BAHY | la koh-SYOHⁿ | eh-toh-SEE la pehr-SONN | kee suh port ga-RAHⁿT', ['bail', 'france']),
  sent(1078, 'Nous résilions le contrat à compter du premier juillet.', 'We are terminating the contract as of 1 July.',
    '/nu ʁe.zi.ljɔ̃ lə kɔ̃.tʁa a kɔ̃.te dy pʁə.mje ʒɥi.jɛ/', 'noo ray-zee-LYOHⁿ luh kohⁿ-TRA | a kohⁿ-TAY dü pruh-MYAY zhwee-YEH', ['bail', 'delai']),
  rule(1079, "La location, c'est le fait de louer ; le lieu, c'est l'emplacement.", 'La location is renting; a location is un emplacement or un lieu.',
    '/la lɔ.ka.sjɔ̃ sɛ lə fɛ də lwe lə ljø sɛ lɑ̃.plas.mɑ̃/', 'la lo-ka-SYOHⁿ | seh luh FEH duh LWAY | luh LYEU | seh lahⁿ-plass-MAHⁿ',
    '« The location of the flat is perfect » : la location ou l’emplacement ?',
    "L'emplacement, ou la situation. La location est un faux ami : c'est le fait de louer, ou le logement loué.",
    ['bail', 'faux-ami']),
  sent(1080, "L'emplacement de l'appartement est idéal, près du métro.", 'The location of the flat is ideal, near the metro.',
    '/lɑ̃.plas.mɑ̃ də la.paʁ.tə.mɑ̃ ɛ.ti.de.al pʁɛ dy me.tʁo/', 'lahⁿ-plass-MAHⁿ | duh la-par-tuh-MAHⁿ | eh-tee-day-AL | preh dü may-TROH', ['bail', 'faux-ami']),
  gap(1081, "Le bail est reconduit tacitement, sauf si l'une des parties donne congé.", 'The lease is renewed automatically, unless one of the parties gives notice.',
    '/lə baj ɛ ʁə.kɔ̃.dɥi ta.sit.mɑ̃ sof si lyn de paʁ.ti dɔn kɔ̃.ʒe/', 'luh BAHY eh ruh-kohⁿ-DWEE ta-seet-MAHⁿ | sohf see LÜNN day par-TEE | donn kohⁿ-ZHAY',
    "Le bail est reconduit ___ , sauf si l'une des parties donne congé. (sans rien signer)",
    "Tacitement : sans rien dire ni signer, le contrat continue. EN: automatically.",
    ['bail', 'clause']),
];

/* ── ACT 6 · LIRE UNE CLAUSE (.1082-.1097) ──────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  col(1082, 'le présent contrat', 'this contract', '/lə pʁe.zɑ̃ kɔ̃.tʁa/', 'luh pray-ZAHⁿ kohⁿ-TRA', ['clause'],
    "Le présent : celui-ci, celui que tu lis. De même, la présente : cette lettre.", SO),
  col(1083, 'ci-après dénommé « le Client »', 'hereinafter referred to as « the Client »', '/si.a.pʁɛ de.nɔ.me lə kli.jɑ̃/', 'see-a-PREH day-no-MAY | luh klee-YAHⁿ', ['clause'],
    "Le contrat donne un nom court à chaque partie, puis ne l'appelle plus que comme ça.", SO),
  col(1084, 'sauf disposition contraire', 'unless otherwise provided', '/sof dis.po.zi.sjɔ̃ kɔ̃.tʁɛʁ/', 'sohf dees-poh-zee-SYOHⁿ kohⁿ-TREHR', ['clause'],
    "La règle vaut partout, sauf si un autre article dit autre chose.", SO),
  col(1085, 'fournir, le cas échéant, un justificatif', 'to provide a supporting document where applicable', '/fuʁ.niʁ lə ka e.ʃe.ɑ̃ œ̃ ʒys.ti.fi.ka.tif/', 'foor-NEER | luh KA ay-shay-AHⁿ | uhⁿ zhüs-tee-fee-ka-TEEF', ['clause'],
    "Si la situation se présente. Rien à voir avec une échéance de paiement.", SO),
  col(1086, 'de plein droit', 'automatically, by law', '/də plɛ̃ dʁwa/', 'duh plehⁿ DRWA', ['clause', 'sinon'],
    "Sans décision ni démarche de plus : ça arrive tout seul, parce que le texte le prévoit.", SO),
  col(1087, 'à la charge du locataire', 'payable by the tenant', '/a la ʃaʁʒ dy lɔ.ka.tɛʁ/', 'a la SHARZH | dü lo-ka-TEHR', ['clause', 'bail'],
    "À la charge de : c'est lui qui paie. Une question que chaque clause de frais règle."),
  sent(1088, "Le Client s'engage à régler son abonnement chaque mois.", 'The Client undertakes to pay the subscription every month.',
    '/lə kli.jɑ̃ sɑ̃.ɡaʒ a ʁe.ɡle sɔ̃.na.bɔn.mɑ̃ ʃak mwa/', 'luh klee-YAHⁿ | sahⁿ-GAZH a ray-GLAY | sohⁿ-na-bonn-MAHⁿ | shak MWA', ['clause', 'quoi']),
  sent(1089, 'Le contrat est conclu pour une durée de douze mois.', 'The contract is concluded for a period of twelve months.',
    '/lə kɔ̃.tʁa ɛ kɔ̃.kly puʁ yn dy.ʁe də duz mwa/', 'luh kohⁿ-TRA eh kohⁿ-KLÜ | poor ün dü-RAY duh dooz MWA', ['clause', 'quand'], FCVDR),
  sent(1090, 'Toute résiliation doit être notifiée par écrit.', 'Any termination must be notified in writing.',
    '/tut ʁe.zi.lja.sjɔ̃ dwa.tɛtʁ nɔ.ti.fje paʁ e.kʁi/', 'toot ray-zee-lya-SYOHⁿ | dwa-tetr no-tee-FYAY | par ay-KREE', ['clause']),
  sent(1091, 'À défaut de paiement, le contrat sera résilié de plein droit.', 'Failing payment, the contract will be terminated automatically.',
    '/a de.fo də pɛ.mɑ̃ lə kɔ̃.tʁa sə.ʁa ʁe.zi.lje də plɛ̃ dʁwa/', 'a day-FOH duh peh-MAHⁿ | luh kohⁿ-TRA suh-ra ray-zee-LYAY | duh plehⁿ DRWA', ['clause', 'sinon'], FCVDR),
  sent(1092, 'Le cas échéant, les frais de réparation seront à la charge du Client.', 'Where applicable, repair costs will be payable by the Client.',
    '/lə ka e.ʃe.ɑ̃ le fʁɛ də ʁe.pa.ʁa.sjɔ̃ sə.ʁɔ̃ a la ʃaʁʒ dy kli.jɑ̃/', 'luh KA ay-shay-AHⁿ | lay FREH duh ray-pa-ra-SYOHⁿ | suh-rohⁿ a la SHARZH dü klee-YAHⁿ', ['clause']),
  sent(1093, "Sauf disposition contraire, les prix s'entendent toutes taxes comprises.", 'Unless otherwise stated, prices include all taxes.',
    '/sof dis.po.zi.sjɔ̃ kɔ̃.tʁɛʁ le pʁi sɑ̃.tɑ̃d tut taks kɔ̃.pʁiz/', 'sohf dees-poh-zee-SYOHⁿ kohⁿ-TREHR | lay PREE sahⁿ-TAHⁿD | toot TAKS kohⁿ-PREEZ', ['clause']),
  sent(1094, 'Le Client peut résilier son abonnement sans frais pendant les quatorze premiers jours.', 'The Client may cancel the subscription free of charge during the first fourteen days.',
    '/lə kli.jɑ̃ pø ʁe.zi.lje sɔ̃.na.bɔn.mɑ̃ sɑ̃ fʁɛ pɑ̃.dɑ̃ le ka.tɔʁz pʁə.mje ʒuʁ/', 'luh klee-YAHⁿ peu ray-zee-LYAY | sohⁿ-na-bonn-MAHⁿ sahⁿ FREH | pahⁿ-dahⁿ lay ka-torz pruh-myay ZHOOR', ['clause', 'quand']),
  rule(1095, 'Une clause se lit en quatre temps : qui, quoi, quand, sinon.', 'A clause is read in four steps: who, what, when, otherwise.',
    '/yn kloz sə li ɑ̃ katʁ tɑ̃ ki kwa kɑ̃ si.nɔ̃/', 'ün KLOHZ suh LEE | ahⁿ katr TAHⁿ | KEE | KWA | KAHⁿ | see-NOHⁿ',
    '« À défaut de paiement, le contrat sera résilié de plein droit » : où est le sinon ?',
    "À défaut de paiement : la condition. Résilié de plein droit : la sanction, sans autre démarche. Le futur dit ce qui arrivera.",
    ['clause', 'grille']),
  sent(1096, 'Le prélèvement a lieu le cinq de chaque mois.', 'The direct debit takes place on the fifth of each month.',
    '/lə pʁe.lɛv.mɑ̃ a ljø lə sɛ̃k də ʃak mwa/', 'luh pray-lev-MAHⁿ | a LYEU | luh sehⁿk duh shak MWA', ['clause', 'quand']),
  gap(1097, 'La résiliation prend effet de plein droit à la fin du mois.', 'The termination takes effect automatically at the end of the month.',
    '/la ʁe.zi.lja.sjɔ̃ pʁɑ̃.tɛ.fɛ də plɛ̃ dʁwa a la fɛ̃ dy mwa/', 'la ray-zee-lya-SYOHⁿ | prahⁿ-teh-FEH | duh plehⁿ DRWA | a la FEHⁿ dü MWA',
    'La résiliation prend effet de ___ droit à la fin du mois. (sans autre formalité)',
    "De plein droit : automatiquement, sans décision ni démarche de plus. EN: automatically.",
    ['clause']),
];

/* ── ACT 7 · STYLE OFFICIEL, LANGAGE CLAIR (.1098-.1114) ────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1098, 'Il est porté à votre connaissance que le bureau sera fermé le lundi.', 'Please note that the office will be closed on Mondays.',
    '/il ɛ pɔʁ.te a vɔtʁ kɔ.nɛ.sɑ̃s kə lə by.ʁo sə.ʁa fɛʁ.me lə lœ̃.di/', 'eel eh por-TAY | a votr ko-neh-SAHⁿS | kuh luh bü-ROH suh-ra fehr-MAY | luh luhⁿ-DEE', ['officiel'], FCVR, SO),
  sent(1099, 'Nous vous informons que le bureau sera fermé le lundi.', 'We are letting you know that the office will be closed on Mondays.',
    '/nu vu.zɛ̃.fɔʁ.mɔ̃ kə lə by.ʁo sə.ʁa fɛʁ.me lə lœ̃.di/', 'noo voo-zehⁿ-for-MOHⁿ | kuh luh bü-ROH suh-ra fehr-MAY | luh luhⁿ-DEE', ['clair']),
  sent(1100, "La présentation d'une pièce d'identité est exigée.", 'An identity document must be shown.',
    '/la pʁe.zɑ̃.ta.sjɔ̃ dyn pjɛs di.dɑ̃.ti.te ɛ.tɛɡ.zi.ʒe/', 'la pray-zahⁿ-ta-SYOHⁿ | dün pyess dee-dahⁿ-tee-TAY | eh-teg-zee-ZHAY', ['officiel'], FCVR, SO),
  sent(1101, "Vous devez présenter une pièce d'identité.", 'You must show an identity document.',
    '/vu də.ve pʁe.zɑ̃.te yn pjɛs di.dɑ̃.ti.te/', 'voo duh-VAY pray-zahⁿ-TAY | ün pyess dee-dahⁿ-tee-TAY', ['clair'], FCVDR),
  sent(1102, 'Toute demande incomplète ne pourra être traitée.', 'No incomplete application can be processed.',
    '/tut də.mɑ̃d ɛ̃.kɔ̃.plɛt nə pu.ʁa ɛtʁ tʁɛ.te/', 'toot duh-MAHⁿD ehⁿ-kohⁿ-PLET | nuh poo-RA etr treh-TAY', ['officiel'], FCVR, SO),
  sent(1103, 'Si votre demande est incomplète, nous ne pourrons pas la traiter.', 'If your application is incomplete, we will not be able to process it.',
    '/si vɔtʁ də.mɑ̃d ɛ.tɛ̃.kɔ̃.plɛt nu nə pu.ʁɔ̃ pa la tʁɛ.te/', 'see votr duh-MAHⁿD | eh-tehⁿ-kohⁿ-PLET | noo nuh poo-ROHⁿ pa | la treh-TAY', ['clair']),
  sent(1104, "Il vous appartient de vérifier l'exactitude des informations.", 'It is up to you to check that the information is accurate.',
    '/il vu.za.paʁ.tjɛ̃ də ve.ʁi.fje lɛɡ.zak.ti.tyd de.zɛ̃.fɔʁ.ma.sjɔ̃/', 'eel voo-za-par-TYEHⁿ | duh vay-ree-FYAY | leg-zak-tee-TÜD | day-zehⁿ-for-ma-SYOHⁿ', ['officiel'], FCVR, SO),
  sent(1105, "C'est à vous de vérifier que les informations sont exactes.", 'It is up to you to check that the information is correct.',
    '/sɛ.ta vu də ve.ʁi.fje kə le.zɛ̃.fɔʁ.ma.sjɔ̃ sɔ̃.tɛɡ.zakt/', 'seh-ta VOO | duh vay-ree-FYAY | kuh lay-zehⁿ-for-ma-SYOHⁿ | sohⁿ-teg-ZAKT', ['clair']),
  sent(1106, 'Le règlement devra intervenir avant la fin du mois.', 'Payment must be made before the end of the month.',
    '/lə ʁɛ.ɡlə.mɑ̃ də.vʁa ɛ̃.tɛʁ.və.niʁ a.vɑ̃ la fɛ̃ dy mwa/', 'luh reh-gluh-MAHⁿ duh-VRA | ehⁿ-tehr-vuh-NEER | a-vahⁿ la FEHⁿ dü MWA', ['officiel'], FCVR, SO),
  sent(1107, 'Payez avant la fin du mois.', 'Pay before the end of the month.',
    '/pɛ.je a.vɑ̃ la fɛ̃ dy mwa/', 'peh-YAY | a-vahⁿ la FEHⁿ dü MWA', ['clair'], FCVDR),
  sent(1108, 'Un texte clair dit qui fait quoi, avec des verbes actifs.', 'A clear text says who does what, with active verbs.',
    '/œ̃ tɛkst klɛʁ di ki fɛ kwa a.vɛk de vɛʁb ak.tif/', 'uhⁿ tekst KLEHR | dee kee feh KWA | a-vek day vehrb ak-TEEF', ['clair']),
  sent(1109, 'On parle de « langage clair » pour les textes publics faciles à comprendre.', 'People speak of « plain language » for public texts that are easy to understand.',
    '/ɔ̃ paʁl də lɑ̃.ɡaʒ klɛʁ puʁ le tɛkst py.blik fa.sil a kɔ̃.pʁɑ̃dʁ/', 'ohⁿ PARL duh lahⁿ-gazh KLEHR | poor lay tekst pü-BLEEK | fa-SEEL a kohⁿ-PRAHⁿDR', ['clair']),
  sent(1110, 'Sur un avis affiché, le style officiel reste souvent la norme.', 'On a posted notice, the official style is often still the norm.',
    '/syʁ œ̃.na.vi a.fi.ʃe lə stil ɔ.fi.sjɛl ʁɛst su.vɑ̃ la nɔʁm/', 'sür uhⁿ-na-VEE a-fee-SHAY | luh steel o-fee-SYEL | rest soo-VAHⁿ la NORM', ['officiel', 'registre']),
  sent(1111, 'Dans un courriel à une personne, les phrases simples passent mieux.', 'In an email to one person, simple sentences work better.',
    '/dɑ̃.zœ̃ kuʁ.jɛl a yn pɛʁ.sɔn le fʁaz sɛ̃pl pas mjø/', 'dahⁿ-zuhⁿ koor-YEL | a ün pehr-SONN | lay fraz SEHⁿPL | pass MYEU', ['clair', 'registre']),
  rule(1112, "Le style officiel cache qui agit ; le langage clair le remet au début.", 'Official style hides who acts; plain language puts them back at the start.',
    '/lə stil ɔ.fi.sjɛl kaʃ ki a.ʒi lə lɑ̃.ɡaʒ klɛʁ lə ʁə.mɛ o de.by/', 'luh steel o-fee-SYEL | KASH kee a-ZHEE | luh lahⁿ-gazh KLEHR | luh ruh-MEH oh day-BÜ',
    '« La présentation d’une pièce d’identité est exigée » : qui doit la présenter ?',
    "Vous. Le texte ne le dit pas : il faut remettre le sujet et le verbe (vous devez présenter). C'est tout le travail du langage clair.",
    ['clair', 'officiel']),
  sent(1113, 'Il est procédé au relevé des compteurs chaque année en janvier.', 'The meters are read every year in January.',
    '/il ɛ pʁɔ.se.de o ʁəl.ve de kɔ̃.tœʁ ʃa.ka.ne ɑ̃ ʒɑ̃.vje/', 'eel eh pro-say-DAY | oh ruhl-VAY day kohⁿ-TUHR | sha-ka-NAY ahⁿ zhahⁿ-VYAY', ['officiel'], FCVR, SO),
  sent(1114, 'Un technicien relève les compteurs chaque année en janvier.', 'A technician reads the meters every year in January.',
    '/œ̃ tɛk.ni.sjɛ̃ ʁə.lɛv le kɔ̃.tœʁ ʃa.ka.ne ɑ̃ ʒɑ̃.vje/', 'uhⁿ tek-nee-SYEHⁿ | ruh-LEV lay kohⁿ-TUHR | sha-ka-NAY ahⁿ zhahⁿ-VYAY', ['clair']),
];

/* ── ACT 8 · JE SOUSSIGNÉ (.1115-.1130) ─────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  col(1115, "attester sur l'honneur", 'to declare on one’s honour', '/a.tɛs.te syʁ lɔ.nœʁ/', 'a-tes-TAY sür lo-NUHR', ['formule'],
    "Tu déclares par écrit qu'une chose est vraie, et tu en réponds.", SO),
  col(1116, 'pour servir et valoir ce que de droit', 'for all legal purposes', '/puʁ sɛʁ.viʁ e va.lwaʁ sə kə də dʁwa/', 'poor sehr-VEER ay va-LWAR | suh kuh duh DRWA', ['formule', 'france'],
    "La formule qui termine une attestation : le document pourra servir partout où il faut.", SO),
  col(1117, 'lu et approuvé', 'read and approved', '/ly e a.pʁu.ve/', 'LÜ ay a-proo-VAY', ['formule'],
    "Écrit à la main au-dessus de la signature, sur un contrat : tu as lu, tu es d'accord."),
  col(1118, 'vous trouverez ci-joint', 'please find enclosed', '/vu tʁu.və.ʁe si.ʒwɛ̃/', 'voo troo-vuh-RAY | see-ZHWEHⁿ', ['formule'],
    "Pour annoncer une pièce jointe. Ci-inclus dit la même chose, plus rarement."),
  sent(1119, 'Je soussignée, Léa Martin, certifie héberger à mon domicile M. Samuel Diallo.', 'I, the undersigned Léa Martin, certify that Mr Samuel Diallo lives in my home.',
    '/ʒə su.si.ɲe le.a maʁ.tɛ̃ sɛʁ.ti.fi e.bɛʁ.ʒe a mɔ̃ dɔ.mi.sil mə.sjø sa.my.ɛl dja.lo/', 'zhuh soo-see-NYAY | lay-A mar-TEHⁿ | sehr-tee-FEE | ay-behr-ZHAY a mohⁿ do-mee-SEEL | muh-SYEU sa-mü-EL dya-LOH', ['formule', 'attestation'], FCVR, SO),
  sent(1120, 'Je soussigné, Samuel Diallo, déclare avoir reçu les clés du logement.', 'I, the undersigned Samuel Diallo, declare that I have received the keys to the flat.',
    '/ʒə su.si.ɲe sa.my.ɛl dja.lo de.klaʁ a.vwaʁ ʁə.sy le kle dy lɔʒ.mɑ̃/', 'zhuh soo-see-NYAY | sa-mü-EL dya-LOH | day-KLAR a-vwar ruh-SÜ | lay KLAY dü lozh-MAHⁿ', ['formule', 'attestation'], FCVR, SO),
  sent(1121, 'Fait à Lyon, le trois mars, pour servir et valoir ce que de droit.', 'Signed in Lyon on 3 March, for all legal purposes.',
    '/fɛ a ljɔ̃ lə tʁwa maʁs puʁ sɛʁ.viʁ e va.lwaʁ sə kə də dʁwa/', 'FEH a LYOHⁿ | luh trwa MARS | poor sehr-VEER ay va-LWAR | suh kuh duh DRWA', ['formule', 'attestation'], FCVR, SO),
  sent(1122, 'Vous trouverez ci-joint une copie de mon contrat de travail.', 'Please find enclosed a copy of my employment contract.',
    '/vu tʁu.və.ʁe si.ʒwɛ̃ yn kɔ.pi də mɔ̃ kɔ̃.tʁa də tʁa.vaj/', 'voo troo-vuh-RAY see-ZHWEHⁿ | ün ko-PEE | duh mohⁿ kohⁿ-TRA duh tra-VAHY', ['formule', 'ci-joint'], FCVDR),
  sent(1123, 'Les pièces ci-jointes complètent mon dossier.', 'The enclosed documents complete my file.',
    '/le pjɛs si.ʒwɛ̃t kɔ̃.plɛt mɔ̃ do.sje/', 'lay pyess see-ZHWEHⁿT | kohⁿ-PLET mohⁿ do-SYAY', ['formule', 'ci-joint']),
  sent(1124, 'Ci-joint les trois dernières quittances de loyer.', 'Enclosed: the last three rent receipts.',
    '/si.ʒwɛ̃ le tʁwa dɛʁ.njɛʁ ki.tɑ̃s də lwa.je/', 'see-ZHWEHⁿ | lay trwa dehr-NYEHR kee-TAHⁿS | duh lwa-YAY', ['formule', 'ci-joint']),
  sent(1125, 'Veuillez trouver ci-inclus le formulaire signé.', 'Please find enclosed the signed form.',
    '/vœ.je tʁu.ve si.ɛ̃.kly lə fɔʁ.my.lɛʁ si.ɲe/', 'vuh-yay troo-VAY | see-ehⁿ-KLÜ | luh for-mü-LEHR see-NYAY', ['formule', 'ci-joint'], FCVR, SO),
  sent(1126, "La présente attestation est établie à la demande de l'intéressé.", 'This certificate is issued at the request of the person concerned.',
    '/la pʁe.zɑ̃t a.tɛs.ta.sjɔ̃ ɛ.te.ta.bli a la də.mɑ̃d də lɛ̃.te.ʁɛ.se/', 'la pray-ZAHⁿT a-tes-ta-SYOHⁿ | eh-tay-ta-BLEE | a la duh-MAHⁿD duh lehⁿ-tay-reh-SAY', ['formule', 'attestation'], FCVR, SO),
  sent(1127, 'Par la présente, je vous informe de mon départ du logement.', 'I hereby inform you that I am leaving the flat.',
    '/paʁ la pʁe.zɑ̃t ʒə vu.zɛ̃.fɔʁm də mɔ̃ de.paʁ dy lɔʒ.mɑ̃/', 'par la pray-ZAHⁿT | zhuh voo-zehⁿ-FORM | duh mohⁿ day-PAR dü lozh-MAHⁿ', ['formule'], FCVDR),
  rule(1128, "Ci-joint reste invariable en tête ; après le nom, il s'accorde.", 'Ci-joint stays invariable at the start; after the noun, it agrees.',
    '/si.ʒwɛ̃ ʁɛ.tɛ̃.va.ʁjabl ɑ̃ tɛt a.pʁɛ lə nɔ̃ il sa.kɔʁd/', 'see-ZHWEHⁿ | reh-tehⁿ-va-RYABL ahⁿ TET | a-preh luh NOHⁿ | eel sa-KORD',
    '« Les pièces ci-… complètent mon dossier » : joint ou jointes ?',
    "Jointes : après le nom, ci-joint s'accorde comme un adjectif. En tête de phrase, il reste invariable ; devant un nom avec article, l'usage hésite et les deux sont admis.",
    ['formule', 'ci-joint']),
  gap(1129, 'Je soussignée, Nadia Benali, certifie avoir déménagé le premier mai.', 'I, the undersigned Nadia Benali, certify that I moved on 1 May.',
    '/ʒə su.si.ɲe na.dja bə.na.li sɛʁ.ti.fi a.vwaʁ de.me.na.ʒe lə pʁə.mje mɛ/', 'zhuh soo-see-NYAY | na-DYA buh-na-LEE | sehr-tee-FEE | a-vwar day-may-na-ZHAY | luh pruh-myay MEH',
    'Je ___ , Nadia Benali, certifie avoir déménagé le premier mai. (soussigner, une femme écrit)',
    "Soussignée : le participe s'accorde avec la personne qui signe. EN: agreed for a woman.",
    ['formule', 'attestation']),
  sent(1130, "Je joins à ce courrier une copie de ma pièce d'identité.", 'I am enclosing a copy of my identity document with this letter.',
    '/ʒə ʒwɛ̃ a sə ku.ʁje yn kɔ.pi də ma pjɛs di.dɑ̃.ti.te/', 'zhuh ZHWEHⁿ | a suh koo-RYAY | ün ko-PEE | duh ma pyess dee-dahⁿ-tee-TAY', ['formule'], FCVDR),
];

/* ── ACT 9 · VU, CONSIDÉRANT, ARRÊTE (.1131-.1146) ──────────────────────── */

export const ACT9_ROWS: Row[] = [
  col(1131, 'vu le code de la route', 'having regard to the Highway Code', '/vy lə kɔd də la ʁut/', 'VÜ luh kod duh la ROOT', ['decision', 'france'],
    "Vu + un texte : la base juridique de la décision. Ce n'est pas vu que (puisque).", SO),
  col(1132, 'considérant que', 'whereas, considering that', '/kɔ̃.si.de.ʁɑ̃ kə/', 'kohⁿ-see-day-RAHⁿ KUH', ['decision'],
    "Considérant que + indicatif : une raison de la décision. Il y en a souvent plusieurs, l'un sous l'autre.", SO),
  col(1133, 'prendre un arrêté', 'to issue an order', '/pʁɑ̃.dʁœ̃.na.ʁɛ.te/', 'prahⁿ-druhⁿ-na-reh-TAY', ['decision'],
    "Un arrêté : une décision écrite d'une autorité, un maire, un préfet, un ministre."),
  col(1134, "faire l'objet d'un recours", 'to be open to an appeal', '/fɛʁ lɔb.ʒɛ dœ̃ ʁə.kuʁ/', 'fehr lob-ZHEH duhⁿ ruh-KOOR', ['decision', 'recours'],
    "Faire l'objet de : être visé par. La décision peut être contestée.", SO),
  sent(1135, 'Le maire arrête les mesures suivantes.', 'The mayor orders the following measures.',
    '/lə mɛʁ a.ʁɛt le mə.zyʁ sɥi.vɑ̃t/', 'luh MEHR a-RET | lay muh-ZÜR swee-VAHⁿT', ['decision'], FCVR, SO),
  sent(1136, 'Considérant que les travaux nécessitent la fermeture de la rue, le stationnement est interdit.', 'Whereas the works require the street to be closed, parking is prohibited.',
    '/kɔ̃.si.de.ʁɑ̃ kə le tʁa.vo ne.se.sit la fɛʁ.mə.tyʁ də la ʁy lə sta.sjɔn.mɑ̃ ɛ.tɛ̃.tɛʁ.di/', 'kohⁿ-see-day-RAHⁿ | kuh lay tra-VOH nay-say-SEET | la fehr-muh-TÜR duh la RÜ | luh sta-syonn-MAHⁿ | eh-tehⁿ-tehr-DEE', ['decision'], FCVR, SO),
  sent(1137, 'Le stationnement est interdit rue des Tanneurs du trois au quatorze mai.', 'Parking is prohibited on Rue des Tanneurs from 3 to 14 May.',
    '/lə sta.sjɔn.mɑ̃ ɛ.tɛ̃.tɛʁ.di ʁy de ta.nœʁ dy tʁwa o ka.tɔʁz mɛ/', 'luh sta-syonn-MAHⁿ | eh-tehⁿ-tehr-DEE | rü day ta-NUHR | dü TRWA oh ka-torz MEH', ['decision', 'quand'], FCVDR),
  sent(1138, 'Tout véhicule en infraction sera mis en fourrière.', 'Any vehicle in breach will be towed away.',
    '/tu ve.i.kyl ɑ̃.nɛ̃.fʁak.sjɔ̃ sə.ʁa mi.zɑ̃ fu.ʁjɛʁ/', 'too vay-ee-KÜL | ahⁿ-nehⁿ-frak-SYOHⁿ | suh-ra mee-zahⁿ foo-RYEHR', ['decision', 'sinon']),
  sent(1139, 'Le présent arrêté sera affiché en mairie et sur les lieux.', 'This order will be posted at the town hall and on site.',
    '/lə pʁe.zɑ̃.ta.ʁɛ.te sə.ʁa a.fi.ʃe ɑ̃ mɛ.ʁi e syʁ le ljø/', 'luh pray-zahⁿ-ta-reh-TAY | suh-ra a-fee-SHAY | ahⁿ meh-REE | ay sür lay LYEU', ['decision'], FCVR, SO),
  sent(1140, "Cet arrêté peut faire l'objet d'un recours dans un délai de deux mois.", 'This order may be appealed within two months.',
    '/sɛ.ta.ʁɛ.te pø fɛʁ lɔb.ʒɛ dœ̃ ʁə.kuʁ dɑ̃.zœ̃ de.lɛ də dø mwa/', 'seh-ta-reh-TAY | peu fehr lob-ZHEH duhⁿ ruh-KOOR | dahⁿ-zuhⁿ day-LEH | duh deu MWA', ['decision', 'recours', 'france'], FCVDR),
  sent(1141, "En Belgique, le maire s'appelle le bourgmestre.", 'In Belgium, the mayor is called the « bourgmestre ».',
    '/ɑ̃ bɛl.ʒik lə mɛʁ sa.pɛl lə buʁɡ.mɛstʁ/', 'ahⁿ bel-ZHEEK | luh MEHR sa-PEL | luh boorg-MESTR', ['decision', 'belgique']),
  sent(1142, 'La décision vous a été notifiée par courrier.', 'You were notified of the decision by letter.',
    '/la de.si.zjɔ̃ vu.za.e.te nɔ.ti.fje paʁ ku.ʁje/', 'la day-see-ZYOHⁿ | voo-za-ay-TAY no-tee-FYAY | par koo-RYAY', ['decision']),
  sent(1143, "Le texte commence par ses raisons, puis il dit ce qu'il décide.", 'The text begins with its reasons, then says what it decides.',
    '/lə tɛkst kɔ.mɑ̃s paʁ se ʁɛ.zɔ̃ pɥi il di sə kil de.sid/', 'luh TEKST ko-MAHⁿS | par say reh-ZOHⁿ | pwee eel DEE | suh keel day-SEED', ['decision', 'grille']),
  rule(1144, 'Vu donne la base, considérant la raison, arrête la décision.', 'Vu gives the legal basis, considérant the reason, arrête the decision.',
    '/vy dɔn la baz kɔ̃.si.de.ʁɑ̃ la ʁɛ.zɔ̃ a.ʁɛt la de.si.zjɔ̃/', 'VÜ donn la BAHZ | kohⁿ-see-day-RAHⁿ la reh-ZOHⁿ | a-RET la day-see-ZYOHⁿ',
    'Dans un arrêté, où se trouve ce que l’on te demande de faire ?',
    "Après arrête, dans les articles. Les vu citent les textes qui fondent la décision ; les considérant disent pourquoi. Lis d'abord les articles, puis remonte.",
    ['decision', 'grille']),
  sent(1145, 'Les riverains sont invités à déplacer leur véhicule avant le trois mai.', 'Local residents are asked to move their vehicles before 3 May.',
    '/le ʁi.və.ʁɛ̃ sɔ̃.tɛ̃.vi.te a de.pla.se lœʁ ve.i.kyl a.vɑ̃ lə tʁwa mɛ/', 'lay ree-vuh-REHⁿ | sohⁿ-tehⁿ-vee-TAY | a day-pla-SAY luhr vay-ee-KÜL | a-vahⁿ luh trwa MEH', ['decision', 'quand']),
  gap(1146, 'Considérant que la chaussée est dangereuse, la circulation est interdite.', 'Whereas the road surface is dangerous, traffic is prohibited.',
    '/kɔ̃.si.de.ʁɑ̃ kə la ʃo.se ɛ dɑ̃.ʒə.ʁøz la siʁ.ky.la.sjɔ̃ ɛ.tɛ̃.tɛʁ.dit/', 'kohⁿ-see-day-RAHⁿ | kuh la shoh-SAY eh dahⁿ-zhuh-REUZ | la seer-kü-la-SYOHⁿ | eh-tehⁿ-tehr-DEET',
    '___ que la chaussée est dangereuse, la circulation est interdite. (la raison, dans un arrêté)',
    "Considérant que : la raison, en tête du texte, avec l'indicatif. EN: whereas.",
    ['decision']),
];

/* ── ACT 10 · RÉCLAMER ET CONTESTER (.1147-.1162) ───────────────────────── */

export const ACT10_ROWS: Row[] = [
  col(1147, 'adresser une réclamation', 'to lodge a complaint', '/a.dʁɛ.se yn ʁe.kla.ma.sjɔ̃/', 'a-dreh-SAY ün ray-kla-ma-SYOHⁿ', ['recours'],
    "Une réclamation : tu contestes un service, une facture, un retard, auprès de l'organisme lui-même."),
  col(1148, 'contester une décision', 'to challenge a decision', '/kɔ̃.tɛs.te yn de.si.zjɔ̃/', 'kohⁿ-tes-TAY ün day-see-ZYOHⁿ', ['recours'],
    "Contester : dire par écrit que tu n'es pas d'accord, avec tes raisons."),
  col(1149, 'former un recours', 'to lodge an appeal', '/fɔʁ.me œ̃ ʁə.kuʁ/', 'for-MAY uhⁿ ruh-KOOR', ['recours'],
    "Former, ou exercer, un recours : demander officiellement qu'une décision soit revue.", SO),
  col(1150, 'mettre en demeure de payer', 'to formally demand payment', '/mɛ.tʁɑ̃ də.mœʁ də pe.je/', 'meh-trahⁿ duh-MUHR | duh peh-YAY', ['recours'],
    "Mettre quelqu'un en demeure de + infinitif : exiger, par écrit, qu'il agisse avant une date.", SO),
  col(1151, "accuser réception d'un courrier", 'to acknowledge receipt of a letter', '/a.ky.ze ʁe.sɛp.sjɔ̃ dœ̃ ku.ʁje/', 'a-kü-ZAY ray-sep-SYOHⁿ | duhⁿ koo-RYAY', ['recours'],
    "Accuser réception : confirmer qu'on a bien reçu. Pas d'article devant réception."),
  sent(1152, 'Je conteste le montant de la facture du douze février.', 'I dispute the amount on the invoice of 12 February.',
    '/ʒə kɔ̃.tɛst lə mɔ̃.tɑ̃ də la fak.tyʁ dy duz fe.vʁi.je/', 'zhuh kohⁿ-TEST | luh mohⁿ-TAHⁿ duh la fak-TÜR | dü dooz fay-vree-YAY', ['recours', 'quoi'], FCVDR),
  sent(1153, 'Par la présente, je vous mets en demeure de me rembourser.', 'I hereby formally demand that you refund me.',
    '/paʁ la pʁe.zɑ̃t ʒə vu mɛ.zɑ̃ də.mœʁ də mə ʁɑ̃.buʁ.se/', 'par la pray-ZAHⁿT | zhuh voo meh-zahⁿ duh-MUHR | duh muh rahⁿ-boor-SAY', ['recours'], FCVR, SO),
  sent(1154, "Une mise en demeure fixe un dernier délai avant d'autres démarches.", 'A formal notice sets a final deadline before other steps are taken.',
    '/yn mi.zɑ̃ də.mœʁ fiks œ̃ dɛʁ.nje de.lɛ a.vɑ̃ do.tʁə de.maʁʃ/', 'ün mee-zahⁿ duh-MUHR | FEEKS uhⁿ dehr-nyay day-LEH | a-vahⁿ doh-truh day-MARSH', ['recours', 'quand']),
  sent(1155, 'Ma réclamation est restée sans réponse depuis six semaines.', 'My complaint has gone unanswered for six weeks.',
    '/ma ʁe.kla.ma.sjɔ̃ ɛ ʁɛs.te sɑ̃ ʁe.pɔ̃s də.pɥi si sə.mɛn/', 'ma ray-kla-ma-SYOHⁿ | eh res-TAY sahⁿ ray-POHⁿS | duh-pwee see suh-MENN', ['recours'], FCVDR),
  sent(1156, 'Je vous demande de résilier mon abonnement dans un délai de quinze jours.', 'I ask you to cancel my subscription within fifteen days.',
    '/ʒə vu də.mɑ̃d də ʁe.zi.lje mɔ̃.na.bɔn.mɑ̃ dɑ̃.zœ̃ de.lɛ də kɛ̃z ʒuʁ/', 'zhuh voo duh-MAHⁿD | duh ray-zee-LYAY mohⁿ-na-bonn-MAHⁿ | dahⁿ-zuhⁿ day-LEH duh kehⁿz ZHOOR', ['recours', 'quand']),
  sent(1157, "Un recours gracieux s'adresse à l'auteur de la décision.", 'An informal appeal is addressed to whoever made the decision.',
    '/œ̃ ʁə.kuʁ ɡʁa.sjø sa.dʁɛs a lo.tœʁ də la de.si.zjɔ̃/', 'uhⁿ ruh-koor gra-SYEU | sa-DRESS a loh-TUHR | duh la day-see-ZYOHⁿ', ['recours', 'france']),
  sent(1158, 'Un recours contentieux se porte devant un tribunal.', 'A formal legal appeal is brought before a court.',
    '/œ̃ ʁə.kuʁ kɔ̃.tɑ̃.sjø sə pɔʁt də.vɑ̃.tœ̃ tʁi.by.nal/', 'uhⁿ ruh-koor kohⁿ-tahⁿ-SYEU | suh PORT | duh-vahⁿ-tuhⁿ tree-bü-NAL', ['recours', 'france']),
  sent(1159, 'Je vous remercie de bien vouloir me répondre avant le trente avril.', 'Please reply to me before 30 April.',
    '/ʒə vu ʁə.mɛʁ.si də bjɛ̃ vu.lwaʁ mə ʁe.pɔ̃dʁ a.vɑ̃ lə tʁɑ̃.ta.vʁil/', 'zhuh voo ruh-mehr-SEE | duh byehⁿ voo-LWAR | muh ray-POHⁿDR | a-vahⁿ luh trahⁿ-ta-VREEL', ['recours', 'quand'], FCVR, SO),
  rule(1160, 'On porte plainte pour une infraction ; on fait une réclamation pour un service.', 'You file a « plainte » about an offence; you make a « réclamation » about a service.',
    '/ɔ̃ pɔʁt plɛ̃t puʁ y.nɛ̃.fʁak.sjɔ̃ ɔ̃ fɛ.ty.ne ʁe.kla.ma.sjɔ̃ puʁ œ̃ sɛʁ.vis/', 'ohⁿ port PLEHⁿT | poor ü-nehⁿ-frak-SYOHⁿ | ohⁿ feh-tün ray-kla-ma-SYOHⁿ | poor uhⁿ sehr-VEESS',
    'Ta facture d’eau est fausse : tu portes plainte ou tu fais une réclamation ?',
    "Une réclamation : tu contestes un service ou une facture auprès de l'organisme. Porter plainte, c'est signaler une infraction à la police ou à la justice.",
    ['recours', 'faux-ami']),
  sent(1161, 'Je vous mets en demeure de restituer mon dépôt de garantie sous quinze jours.', 'I formally demand that you return my security deposit within fifteen days.',
    '/ʒə vu mɛ.zɑ̃ də.mœʁ də ʁɛs.ti.tɥe mɔ̃ de.po də ɡa.ʁɑ̃.ti su kɛ̃z ʒuʁ/', 'zhuh voo meh-zahⁿ duh-MUHR | duh res-tee-TWAY | mohⁿ day-POH duh ga-rahⁿ-TEE | soo kehⁿz ZHOOR', ['recours', 'bail'], FCVR, SO),
  gap(1162, 'Je vous mets en demeure de réparer le chauffage.', 'I formally demand that you repair the heating.',
    '/ʒə vu mɛ.zɑ̃ də.mœʁ də ʁe.pa.ʁe lə ʃo.faʒ/', 'zhuh voo meh-zahⁿ duh-MUHR | duh ray-pa-RAY luh shoh-FAZH',
    'Je vous mets en demeure ___ réparer le chauffage. (la préposition)',
    "Mettre quelqu'un en demeure de + infinitif, comme obliger quelqu'un à, mais avec de. EN: de.",
    ['recours']),
];

/* ── ACT 11 · FAUX AMIS ET CALQUES (.1163-.1178) ────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1163, "J'ai reçu une amende de trente-cinq euros.", 'I got a thirty-five euro fine.',
    '/ʒe ʁə.sy yn a.mɑ̃d də tʁɑ̃t.sɛ̃.kø.ʁo/', 'zhay ruh-SÜ ün a-MAHⁿD | duh trahⁿt-sehⁿ-keu-ROH', ['faux-ami']),
  sent(1164, "En France, une contravention est l'infraction la moins grave.", 'In France, a « contravention » is the least serious category of offence.',
    '/ɑ̃ fʁɑ̃s yn kɔ̃.tʁa.vɑ̃.sjɔ̃ ɛ lɛ̃.fʁak.sjɔ̃ la mwɛ̃ ɡʁav/', 'ahⁿ FRAHⁿS | ün kohⁿ-tra-vahⁿ-SYOHⁿ | eh lehⁿ-frak-SYOHⁿ | la mwehⁿ GRAV', ['faux-ami', 'france']),
  sent(1165, "Au Québec, la contravention s'appelle officiellement un constat d'infraction.", 'In Québec, a ticket is officially called a « constat d’infraction ».',
    '/o ke.bɛk la kɔ̃.tʁa.vɑ̃.sjɔ̃ sa.pɛl ɔ.fi.sjɛl.mɑ̃ œ̃ kɔ̃s.ta dɛ̃.fʁak.sjɔ̃/', 'oh kay-BEK | la kohⁿ-tra-vahⁿ-SYOHⁿ | sa-PEL o-fee-syel-MAHⁿ | uhⁿ kohⁿs-TA dehⁿ-frak-SYOHⁿ', ['faux-ami', 'quebec']),
  sent(1166, 'Pour acheter un logement, on passe chez le notaire.', 'To buy a home, you go through a notary.',
    '/puʁ aʃ.te œ̃ lɔʒ.mɑ̃ ɔ̃ pas ʃe lə nɔ.tɛʁ/', 'poor ash-TAY uhⁿ lozh-MAHⁿ | ohⁿ PASS | shay luh no-TEHR', ['faux-ami'], FCVDR),
  sent(1167, 'Pour vous défendre devant un tribunal, vous prenez un avocat.', 'To defend you in court, you hire a lawyer.',
    '/puʁ vu de.fɑ̃dʁ də.vɑ̃.tœ̃ tʁi.by.nal vu pʁə.ne.zœ̃.na.vɔ.ka/', 'poor voo day-FAHⁿDR | duh-vahⁿ-tuhⁿ tree-bü-NAL | voo pruh-nay-zuhⁿ-na-vo-KA', ['faux-ami']),
  sent(1168, 'Elle a finalement obtenu son permis de travail.', 'She eventually got her work permit.',
    '/ɛl a fi.nal.mɑ̃ ɔp.tə.ny sɔ̃ pɛʁ.mi də tʁa.vaj/', 'el a fee-nal-MAHⁿ | op-tuh-NÜ | sohⁿ pehr-MEE duh tra-VAHY', ['faux-ami'], FCVDR),
  sent(1169, 'Si besoin, nous pourrons éventuellement vous rappeler.', 'If need be, we may possibly call you back.',
    '/si bə.zwɛ̃ nu pu.ʁɔ̃.ze.vɑ̃.tɥɛl.mɑ̃ vu ʁa.ple/', 'see buh-ZWEHⁿ | noo poo-rohⁿ-zay-vahⁿ-twel-MAHⁿ | voo ra-PLAY', ['faux-ami']),
  sent(1170, 'Le dossier est actuellement en cours de traitement.', 'The file is currently being processed.',
    '/lə do.sje ɛ.tak.tɥɛl.mɑ̃ ɑ̃ kuʁ də tʁɛt.mɑ̃/', 'luh do-SYAY | eh-tak-twel-MAHⁿ | ahⁿ koor duh tret-MAHⁿ', ['faux-ami'], FCVDR),
  sent(1171, "Il a porté l'affaire devant la justice.", 'He took the matter to court.',
    '/il a pɔʁ.te la.fɛʁ də.vɑ̃ la ʒys.tis/', 'eel a por-TAY la-FEHR | duh-VAHⁿ la zhüs-TEESS', ['faux-ami']),
  sent(1172, 'Elle a démissionné de son poste en juin.', 'She resigned from her job in June.',
    '/ɛl a de.mi.sjɔ.ne də sɔ̃ pɔst ɑ̃ ʒɥɛ̃/', 'el a day-mee-syo-NAY | duh sohⁿ POST | ahⁿ ZHWEHⁿ', ['faux-ami']),
  sent(1173, 'Il a étudié le droit à Montréal.', 'He studied law in Montréal.',
    '/il a e.ty.dje lə dʁwa a mɔ̃.ʁe.al/', 'eel a ay-tü-DYAY | luh DRWA | a mohⁿ-ray-AL', ['faux-ami']),
  sent(1174, 'Le gouvernement propose une nouvelle loi sur le logement.', 'The government is proposing a new law on housing.',
    '/lə ɡu.vɛʁ.nə.mɑ̃ pʁɔ.poz yn nu.vɛl lwa syʁ lə lɔʒ.mɑ̃/', 'luh goo-vehr-nuh-MAHⁿ | pro-POHZ ün noo-VEL LWA | sür luh lozh-MAHⁿ', ['faux-ami']),
  sent(1175, "L'administration exige un original, pas une photocopie.", 'The administration requires an original, not a photocopy.',
    '/lad.mi.nis.tʁa.sjɔ̃ ɛɡ.ziʒ œ̃.nɔ.ʁi.ʒi.nal pa.zyn fɔ.to.kɔ.pi/', 'lad-mee-nees-tra-SYOHⁿ | eg-ZEEZH uhⁿ-no-ree-zhee-NAL | pa-zün fo-toh-ko-PEE', ['faux-ami']),
  rule(1176, 'Éventuellement veut dire peut-être, jamais finalement.', 'Éventuellement means possibly, never « eventually ».',
    '/e.vɑ̃.tɥɛl.mɑ̃ vø diʁ pø.tɛtʁ ʒa.mɛ fi.nal.mɑ̃/', 'ay-vahⁿ-twel-MAHⁿ | veu deer peu-TETR | zha-meh fee-nal-MAHⁿ',
    '« I will eventually pay » : je paierai éventuellement, ou je finirai par payer ?',
    "Je finirai par payer, ou je paierai finalement. Éventuellement ajoute un doute : peut-être, si besoin.",
    ['faux-ami']),
  rule(1177, 'Le droit est un domaine ; une loi est un texte.', 'Le droit is a field; une loi is a single text.',
    '/lə dʁwa ɛ.tœ̃ dɔ.mɛn yn lwa ɛ.tœ̃ tɛkst/', 'luh DRWA eh-tuhⁿ do-MENN | ün LWA eh-tuhⁿ TEKST',
    '« She studies law » : elle étudie le droit ou la loi ?',
    "Le droit : la matière et le système. Une loi : un texte voté. On étudie le droit, on respecte la loi.",
    ['faux-ami']),
  sent(1178, 'Elle a commis une infraction au code de la route.', 'She committed a traffic offence.',
    '/ɛl a kɔ.mi y.nɛ̃.fʁak.sjɔ̃ o kɔd də la ʁut/', 'el a ko-MEE | ü-nehⁿ-frak-SYOHⁿ | oh kod duh la ROOT', ['faux-ami']),
];

/* ── ACT 12 · TON COURRIER (.1179-.1192) ────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1179, 'Objet : restitution du dépôt de garantie', 'Subject: return of the security deposit',
    '/ɔb.ʒɛ ʁɛs.ti.ty.sjɔ̃ dy de.po də ɡa.ʁɑ̃.ti/', 'ob-ZHEH | res-tee-tü-SYOHⁿ | dü day-POH duh ga-rahⁿ-TEE', ['courrier']),
  sent(1180, "J'ai quitté le logement le trente et un mars, après l'état des lieux de sortie.", 'I left the flat on 31 March, after the move-out inspection.',
    '/ʒe ki.te lə lɔʒ.mɑ̃ lə tʁɑ̃.te.œ̃ maʁs a.pʁɛ le.ta de ljø də sɔʁ.ti/', 'zhay kee-TAY luh lozh-MAHⁿ | luh trahⁿ-tay-uhⁿ MARS | a-preh lay-TA day LYEU duh sor-TEE', ['courrier', 'faits']),
  sent(1181, "L'état des lieux ne signale aucune dégradation.", 'The inspection report notes no damage.',
    '/le.ta de ljø nə si.ɲal o.kyn de.ɡʁa.da.sjɔ̃/', 'lay-TA day LYEU | nuh see-NYAL oh-KÜNN | day-gra-da-SYOHⁿ', ['courrier', 'faits']),
  sent(1182, "Or, à ce jour, je n'ai reçu ni le dépôt ni aucune explication.", 'Yet to date I have received neither the deposit nor any explanation.',
    '/ɔʁ a sə ʒuʁ ʒə ne ʁə.sy ni lə de.po ni o.kyn ɛks.pli.ka.sjɔ̃/', 'OR | a suh ZHOOR | zhuh nay ruh-SÜ | nee luh day-POH | nee oh-kün eks-plee-ka-SYOHⁿ', ['courrier', 'faits']),
  sent(1183, 'Je vous prie de bien vouloir me le restituer dans un délai de quinze jours.', 'I would ask you to return it to me within fifteen days.',
    '/ʒə vu pʁi də bjɛ̃ vu.lwaʁ mə lə ʁɛs.ti.tɥe dɑ̃.zœ̃ de.lɛ də kɛ̃z ʒuʁ/', 'zhuh voo PREE | duh byehⁿ voo-LWAR | muh luh res-tee-TWAY | dahⁿ-zuhⁿ day-LEH duh kehⁿz ZHOOR', ['courrier', 'demande'], FCVDR),
  sent(1184, "À défaut, je me verrai dans l'obligation d'engager d'autres démarches.", 'Failing that, I will be obliged to take further steps.',
    '/a de.fo ʒə mə vɛ.ʁe dɑ̃ lɔ.bli.ɡa.sjɔ̃ dɑ̃.ɡa.ʒe do.tʁə de.maʁʃ/', 'a day-FOH | zhuh muh veh-RAY | dahⁿ lo-blee-ga-SYOHⁿ | dahⁿ-ga-ZHAY | doh-truh day-MARSH', ['courrier', 'sinon'], FCVR, SO),
  sent(1185, "Vous trouverez ci-joint une copie de l'état des lieux de sortie.", 'Please find enclosed a copy of the move-out inspection report.',
    '/vu tʁu.və.ʁe si.ʒwɛ̃ yn kɔ.pi də le.ta de ljø də sɔʁ.ti/', 'voo troo-vuh-RAY see-ZHWEHⁿ | ün ko-PEE | duh lay-TA day LYEU duh sor-TEE', ['courrier', 'pieces']),
  sent(1186, 'Je reste joignable au numéro indiqué ci-dessous.', 'I can be reached at the number below.',
    '/ʒə ʁɛst ʒwa.ɲabl o ny.me.ʁo ɛ̃.di.ke si.də.su/', 'zhuh rest zhwa-NYABL | oh nü-may-ROH | ehⁿ-dee-KAY see-duh-SOO', ['courrier', 'cloture']),
  sent(1187, "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.", 'Yours faithfully (literally: please accept, Madam, Sir, the expression of my distinguished greetings).',
    '/ʒə vu pʁi da.ɡʁe.e ma.dam mə.sjø lɛk.spʁɛ.sjɔ̃ də me sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'zhuh voo PREE | da-gray-AY | ma-DAM | muh-SYEU | lek-spreh-SYOHⁿ | duh may sa-lü-ta-SYOHⁿ | dees-tehⁿ-GAY', ['courrier', 'cloture'], FCVR, SO),
  sent(1188, "Le chauffage de l'appartement ne fonctionne plus depuis le dix janvier.", "The flat's heating has not worked since 10 January.",
    '/lə ʃo.faʒ də la.paʁ.tə.mɑ̃ nə fɔ̃k.sjɔn ply də.pɥi lə di ʒɑ̃.vje/', 'luh shoh-FAZH duh la-par-tuh-MAHⁿ | nuh fohⁿk-SYONN PLÜ | duh-pwee luh dee zhahⁿ-VYAY', ['courrier', 'faits']),
  sent(1189, 'Je vous ai signalé la panne par courriel le douze janvier.', 'I reported the breakdown to you by email on 12 January.',
    '/ʒə vu.ze si.ɲa.le la pan paʁ kuʁ.jɛl lə duz ʒɑ̃.vje/', 'zhuh voo-zay see-nya-LAY | la PANN | par koor-YEL | luh dooz zhahⁿ-VYAY', ['courrier', 'faits']),
  sent(1190, 'Je joins à ce courrier les photos et la facture du chauffagiste.', "I am enclosing the photos and the heating engineer's invoice with this letter.",
    '/ʒə ʒwɛ̃ a sə ku.ʁje le fɔ.to e la fak.tyʁ dy ʃo.fa.ʒist/', 'zhuh ZHWEHⁿ a suh koo-RYAY | lay fo-TOH | ay la fak-TÜR | dü shoh-fa-ZHEEST', ['courrier', 'pieces']),
  rule(1191, 'Une réclamation dit les faits, la demande, le délai et les pièces.', 'A formal complaint states the facts, the request, the deadline and the documents.',
    '/yn ʁe.kla.ma.sjɔ̃ di le fɛ la də.mɑ̃d lə de.lɛ e le pjɛs/', 'ün ray-kla-ma-SYOHⁿ | dee lay FEH | la duh-MAHⁿD | luh day-LEH | ay lay PYESS',
    'Quelles quatre choses ta réclamation doit-elle contenir ?',
    "Les faits (dates, montants), la demande précise, le délai de réponse, et les pièces jointes qui prouvent ce que tu dis. Le ton reste ferme et poli.",
    ['courrier', 'grille']),
  sent(1192, "Je vous remercie de l'attention que vous porterez à ma demande.", 'Thank you for the attention you will give my request.',
    '/ʒə vu ʁə.mɛʁ.si də la.tɑ̃.sjɔ̃ kə vu pɔʁ.tə.ʁe a ma də.mɑ̃d/', 'zhuh voo ruh-mehr-SEE | duh la-tahⁿ-SYOHⁿ | kuh voo por-tuh-RAY | a ma duh-MAHⁿD', ['courrier', 'cloture']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  Four long readings (B2: 200 to 350 words: a formal demand for rent, a
 *  lease, a municipal order, the model complaint) and nine « dans un texte »
 *  paragraphs of 60 to 120 words that close acts 3 to 11: a municipal
 *  notice, library rules, a Québec lease clause, phone terms, a water notice,
 *  an attestation, a short order, a draft complaint, a message full of faux
 *  amis. Every name, place, amount and date is invented for the example.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the régie's formal demand for rent, Lyon. */
export const LECTURE_LETTRE =
  "Régie Saint-Irénée, Lyon, le quatre avril. Lettre recommandée avec accusé de réception. Objet : mise en demeure de payer. Madame, Monsieur, sauf erreur de notre part, nous n'avons pas reçu votre loyer du mois de mars, d'un montant de sept cent quatre-vingts euros, charges comprises. Malgré notre relance du quinze mars, restée sans réponse, votre compte présente toujours ce solde débiteur. Conformément à l'article quatre de votre bail, le loyer est payable d'avance, au plus tard le cinq de chaque mois. Par la présente, nous vous mettons en demeure de régler la somme due dans un délai de huit jours à compter de la réception de ce courrier. Le règlement peut se faire par virement ou par chèque à l'ordre de la Régie Saint-Irénée. Si vous rencontrez des difficultés passagères, nous vous invitons à prendre contact avec votre gestionnaire, Mme Perrin, afin d'examiner ensemble un éventuel échéancier. À défaut de règlement dans ce délai, nous nous verrons contraints d'engager une procédure de recouvrement, dont les frais pourraient rester à votre charge. Si votre paiement a été effectué entre-temps, nous vous prions de ne pas tenir compte de ce courrier et de nous transmettre le justificatif correspondant. Nous vous prions d'agréer, Madame, Monsieur, nos salutations distinguées. Pour la Régie, Hélène Perrin, gestionnaire locative.";

/** Act 5: extracts of an unfurnished-flat lease, Lyon. */
export const LECTURE_BAIL =
  "Contrat de location d'un logement vide : extraits. Entre les soussignés : M. Gérard Fontaine, ci-après dénommé « le Bailleur », et M. Samuel Diallo, ci-après dénommé « le Locataire ». Article deux, durée. Le présent bail est conclu pour une durée de trois ans à compter du premier septembre. À défaut de congé donné par l'une des parties, il est reconduit tacitement pour la même durée. Article trois, congé. Le Locataire peut donner congé à tout moment, en respectant un préavis de trois mois. Le Bailleur ne peut donner congé qu'à l'échéance du bail, pour l'un des motifs prévus par la loi. Le congé est notifié par lettre recommandée avec accusé de réception, ou remis en main propre contre récépissé. Article quatre, loyer et charges. Le loyer mensuel s'élève à six cent cinquante euros, auxquels s'ajoutent quarante euros de charges, payables d'avance le premier de chaque mois. Article cinq, dépôt de garantie. Le Locataire verse un dépôt de garantie de six cent cinquante euros. Il lui sera restitué après la remise des clés, déduction faite, le cas échéant, des sommes restant dues. Article six, état des lieux. Un état des lieux d'entrée et un état des lieux de sortie sont établis par les deux parties, ensemble. Article sept, entretien. Les menues réparations sont à la charge du Locataire, les grosses réparations à la charge du Bailleur. Fait en deux exemplaires, à Lyon, le vingt août. Lu et approuvé.";

/** Act 9: a municipal order on parking during works. */
export const LECTURE_ARRETE =
  "Commune de Beaumont-sur-Lise. Arrêté municipal portant réglementation temporaire du stationnement et de la circulation. Le maire de la commune de Beaumont-sur-Lise, vu le code général des collectivités territoriales, vu le code de la route, vu la demande présentée par l'entreprise Terrassements Morel, chargée du remplacement des conduites d'eau, considérant que ces travaux nécessitent la fermeture partielle de la rue des Tanneurs, considérant qu'il y a lieu d'assurer la sécurité des usagers et du personnel du chantier, arrête : Article premier. Du trois au quatorze mai inclus, le stationnement est interdit rue des Tanneurs, des deux côtés de la chaussée. Article deux. Pendant la même période, la circulation est limitée à une seule voie, alternée par des feux. Article trois. Tout véhicule en infraction sera mis en fourrière, aux frais de son propriétaire. Article quatre. L'accès des riverains et des véhicules de secours reste assuré. Article cinq. Les infractions au présent arrêté seront constatées et poursuivies conformément aux lois et règlements en vigueur. Article six. Le présent arrêté sera affiché en mairie et sur les lieux des travaux. Il peut faire l'objet d'un recours devant le tribunal administratif dans un délai de deux mois à compter de sa publication. Fait à Beaumont-sur-Lise, le vingt avril. Le maire, Philippe Aubert.";

/** Act 12: the model the learner imitates, a formal complaint to a landlord. */
export const LECTURE_MODELE =
  "Samuel Diallo, Villeurbanne, le vingt mai. À l'attention de M. Gérard Fontaine. Lettre recommandée avec accusé de réception. Objet : restitution du dépôt de garantie. Monsieur, j'ai été locataire de votre appartement de la rue des Remparts, à Lyon, du premier septembre au trente et un mars, date à laquelle je vous ai remis les clés. L'état des lieux de sortie, établi ce jour-là en votre présence, ne signale aucune dégradation, et j'ai réglé tous mes loyers et charges jusqu'à mon départ. Or, à ce jour, je n'ai reçu ni le dépôt de garantie de six cent cinquante euros, ni aucune explication. Je vous ai pourtant relancé par courriel le vingt-deux avril, sans réponse. L'article cinq de notre bail prévoit que ce dépôt me sera restitué après la remise des clés, déduction faite, le cas échéant, des sommes restant dues ; or aucune somme ne reste due. Par la présente, je vous prie donc de bien vouloir me le restituer dans un délai de quinze jours à compter de la réception de ce courrier, par virement sur le compte dont vous trouverez les coordonnées ci-jointes. Vous trouverez également ci-joint une copie de l'état des lieux de sortie et de ma dernière quittance de loyer. À défaut, je me verrai dans l'obligation d'engager d'autres démarches. Je reste joignable au numéro indiqué ci-dessous et vous prie d'agréer, Monsieur, l'expression de mes salutations distinguées. Samuel Diallo.";

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "L'avis du service Mobilité d'une commune belge. Pour chaque question, cherche le mot qui fixe le temps. « Votre carte de stationnement riverain expire le trente juin. Pour la renouveler, déposez votre demande au plus tard le quinze juin, en ligne ou au guichet de l'administration communale. Joignez un justificatif de domicile de moins de trois mois. La nouvelle carte sera valable à compter du premier juillet, pour une durée d'un an. Toute demande reçue après le quinze juin sera traitée dans un délai de trois semaines : dans l'intervalle, le stationnement sera payant. Le guichet est ouvert du lundi au vendredi, de neuf heures à midi. »";

export const TEXTE_A4 =
  "Le règlement d'une médiathèque communale, dans le canton de Vaud. Complète chaque blanc avec : a droit à, est tenu de, sous peine de, incombe, se réserve le droit de. « L'inscription est gratuite pour les moins de dix-huit ans. Tout abonné (1) … vingt prêts par mois. Il (2) … rendre les documents dans un délai de trois semaines, (3) … une amende de deux francs par semaine de retard. Il (4) … à chaque abonné de signaler tout changement d'adresse. Les documents perdus ou abîmés sont facturés au prix d'achat. La médiathèque (5) … modifier ses horaires pendant les vacances scolaires. »";

export const TEXTE_A5 =
  "Un extrait de bail, à Montréal. Réponds aux quatre questions : qui, quoi, quand, sinon. « Le locataire paie le loyer le premier jour de chaque mois. S'il ne souhaite pas renouveler son bail de douze mois, il doit en aviser le locateur par écrit, entre trois et six mois avant la fin du bail. À défaut d'avis, le bail est reconduit de plein droit. Le locataire qui veut sous-louer son logement doit en aviser le locateur. »";

export const TEXTE_A6 =
  "Les conditions d'un abonnement de téléphonie mobile, à Montréal. Pour chaque phrase, trouve l'obligation, la condition ou la sanction. « Article sept. Le présent contrat est conclu pour une durée de vingt-quatre mois. Le Client s'engage à régler sa facture mensuelle au plus tard le quinze de chaque mois. À défaut de paiement dans les trente jours, le service pourra être suspendu sans préavis. Sauf disposition contraire, les frais de réactivation sont à la charge du Client. Le cas échéant, l'appareil prêté doit être rendu dans un délai de dix jours après la fin du contrat. »";

export const TEXTE_A7 =
  "L'avis d'un service des eaux, affiché dans un immeuble. Réécris chaque phrase en langage clair : un sujet, un verbe actif, et vous. « Avis aux abonnés. Il est porté à votre connaissance qu'une interruption de la distribution d'eau interviendra le douze mars, de huit heures à midi, en raison de travaux de réparation. Il est recommandé aux usagers de constituer une réserve d'eau. Toute réclamation relative à cette interruption devra être adressée au service clientèle. La remise en service pourra entraîner une légère coloration de l'eau, sans danger pour la santé. »";

export const TEXTE_A8 =
  "Une attestation d'hébergement à compléter, à Lyon. Complète chaque blanc avec un seul mot. « Attestation d'hébergement. Je (1) … , Julien Morel, demeurant à Lyon, certifie (2) … à mon domicile ma sœur, Mme Aïssatou Ba, depuis le premier janvier. Je certifie en outre que ces informations sont exactes. Je joins à la (3) … une copie de ma pièce d'identité et une facture d'électricité à mon nom. (4) … à Lyon, le dix mars, pour servir et valoir ce que de droit. Signature : Julien Morel. »";

export const TEXTE_A9 =
  "Un court arrêté, affiché devant une mairie. Lis-le avec la grille : la base, la raison, la décision. « Le maire, vu le code général des collectivités territoriales, considérant que le marché de Noël nécessite la fermeture de la place du Marché, arrête : Article premier. La circulation est interdite place du Marché du premier au vingt-quatre décembre inclus. Article deux. Les livraisons restent autorisées de six heures à neuf heures. Article trois. Le présent arrêté sera affiché en mairie. »";

export const TEXTE_A10 =
  "Le brouillon de réclamation de Nadia, à Nantes. Il contient quatre maladresses, dont un oubli : trouve-les et corrige-les. « Madame, Monsieur, je vous écris pour faire une plainte. J'ai résilié mon abonnement à la salle Forme Plus le deux février, mais vous avez encore prélevé trente euros le cinq mars. J'ai déménagé à Rennes en janvier, et je ne peux plus venir à la salle. Je vous mets en demeure à me rembourser cette somme. Je veux une réponse éventuellement. Veuillez agréer mes salutations distinguées. Nadia Benali. »";

export const TEXTE_A11 =
  "Le message d'Emily, à Montréal, à une amie de Lyon. Trouve les trois mots mal employés, et dis pourquoi les autres sont justes. « Mon bail actuel se termine en juin, et je ne veux pas le renouveler. Je cherche donc une location près de mon travail. Pour l'achat de notre maison, mon avocat devra authentifier l'acte de vente. Hier, j'ai commis une offense au code de la route, et j'ai reçu une contravention de trente dollars. L'an prochain, je vais démissionner de mon poste pour étudier la loi à l'université. »";
