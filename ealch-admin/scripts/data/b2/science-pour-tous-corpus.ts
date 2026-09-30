// b2.29.l1 « La science pour tous »: the authored corpus, the imports, the
// texts and the citation constants. DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md
// §2 (the vocab shape, topic variant) with the workshop beats of §1, on top
// of B1-BUILD-PLAYBOOK.md, under the B2 rules of B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 29 of the B2 trail (Unit 5, specialist domains)
// ══════════════════════════════════════════════════════════════════════════
//
//   READING, EXPLAINING AND DISCUSSING SCIENCE AS AN INFORMED CITIZEN. Not
//   science itself: the words a non-specialist needs to follow a finding from
//   the laboratory to the headline, to say how solid it is, and to pass it on
//   without inflating it.
//
//     act 1   the headline that inflates (« ont prouvé » vs « suggère »)
//     act 2   the method: hypothèse, expérience vs expérimentation (and
//             l’expérience vécue), protocole, variable, mesurer, résultats,
//             données (plural), soutenir vs prouver
//     act 3   the fair test: groupe témoin, tirer au sort, répartir au
//             hasard, placebo, en aveugle / en double aveugle, un biais
//     act 4   link or cause, past lesson 24 in B2: être lié / associé à,
//             aller de pair avec, un facteur de confusion, à âge égal,
//             toutes choses égales par ailleurs, the reverse cause
//     act 5   how solid: significatif (≠ grand), la marge d’erreur,
//             reproduire, évaluée par les pairs, une prépublication, une
//             méta-analyse, un consensus scientifique, un article retiré
//     act 6   numbers that move: augmenter de / passer à, doubler, diviser
//             par deux, multiplier par trois, reculer, un point de
//             pourcentage vs un pour cent, the French way of writing 3,5 %
//     act 7   averages and scale: en moyenne, la médiane, un ordre de
//             grandeur, plus d’un tiers, près de la moitié, relative vs
//             absolute risk
//     act 8   digital words: un algorithme, entraîner un modèle, les
//             données, le stockage, chiffrer (not crypter), un logiciel
//             libre (≠ gratuit), l’empreinte carbone du numérique; Québec
//             and France terms (courriel, clavarder, infonuagique, pourriel,
//             hameçonnage, gratuiciel)
//     act 9   explaining simply: autrement dit, en gros, pour faire simple,
//             c’est comme si + imparfait, imaginons que, an analogy and
//             where it stops
//     act 10  degrees of certainty, from the paper to the headline, with
//             lesson 20 in B2’s impersonal forms: il est probable que + ind,
//             il est possible que + subj, il semblerait que, rien ne permet
//             d’affirmer que, suggérer, mettre en évidence; a radio segment
//             at natural speed
//     act 11  the false friends of science: une évidence (≠ evidence), un
//             physicien (≠ physician), significatif, une conférence, une
//             lecture, le résumé; actuellement and éventuellement recalled
//             from lesson 37 in B1, à terme, en fait
//     act 12  the task: a 200 to 250 word blog post that explains a finding,
//             says how certain it is and corrects an exaggerated headline
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 33 in B1   the environment words (reframe quoted in the roundup)
//     lesson 34 in B1   the media, a headline, a source (reframe quoted in
//                       act 1; « augmenter, la hausse » reused in act 6)
//     lesson 37 in B1   en gros, actuellement, éventuellement, un faux ami
//                       (rows reused in acts 9 and 11)
//     lesson 10 in B2   the nominalised headline (« la hausse de »)
//     lesson 15 in B2   cause verbs: entraîner, être lié à (rows reused)
//     lesson 20 in B2   the impersonal hedges and their moods (reframe
//                       quoted in act 10; its mood policies followed, §A.8)
//     lesson 22 in B2   cautious claims (« Votre verbe doit correspondre à la
//                       force de vos preuves » and « Les résultats
//                       suggèrent… » reused)
//     lesson 24 in B2   claim, evidence, stance; « un lien, pas une cause »
//                       and « la marge d’erreur » (rows reused in acts 4 and
//                       5, reframe quoted in act 1). This lesson goes PAST
//                       it: the control group, the draw, the blind, the
//                       confounder, significance, replication, peer review.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB probed read-only 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `methode-scientifique` (b2-c1). Sub-theme « la science pour
//     tous » is already in Postgres (read back 2026-09-30). Nothing to create.
//
//  2. ID BLOCK: `.1000`-`.1199`, assigned by the brief. A read-only probe on
//     2026-09-30 found NO row at .1000-.1199 at any level of this theme
//     (Postgres: b2 318 rows up to .318, c1 6 rows). Authored: `.1000`-
//     `.1194`, with one-number gaps between some act blocks (act banners).
//
//  3. HEADWORDS. Postgres holds 318 b2 rows in this theme, most of them
//     DB-ONLY vocab headwords the seed does not carry (une variable, un
//     biais, une corrélation, un groupe témoin, le double aveugle, un
//     placebo, significatif, reproductible, une médiane, une moyenne, une
//     marge d’erreur, un consensus, l’évaluation par les pairs, un
//     physicien, un algorithme, une donnée, l’intelligence artificielle, la
//     vulgarisation scientifique…). `src()` cannot reach a DB-only row, so
//     this corpus authors NO bare headword: every row is a sentence, a rule
//     card or a collocation that no row in the seed, the packs, Postgres or
//     another lesson holds (« un point de pourcentage », « un logiciel
//     libre », « un lien de cause à effet », « tirer les participants au
//     sort »). The seed’s own headwords are REUSED by id (§F): une
//     hypothèse, un échantillon, une expérience, un protocole, la physique,
//     un chercheur, un laboratoire, l’intelligence artificielle, un
//     courriel, un mail, le clavardage, autrement dit, en gros, un faux ami,
//     le pour cent, la moyenne.
//
//  4. REUSED ROWS. Every id in §F was read out of the seed plus packs
//     (22,082 items) on 2026-09-30; its French is in the trailing comment and
//     `src()` copies it verbatim. Several seed rows carry a respelling that
//     breaks the nasal convention (« uh-nay-shahn-tee-YOHN », « LUH POOR
//     SAHN »): no section ever prints a reused row’s respelling, only its
//     French and English.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR. A real
//     /n/ or /m/ is written double where the checker would read a nasal:
//     personne pehr-SONN, semaine suh-MENN, médiane may-DYANN, moyenne
//     mwa-YENN, Lune LÜNN, commune(s) ko-MÜNN, aucune oh-KÜNN, entraîne
//     ahⁿ-TRENN, consomment kohⁿ-SOMM, dizaine(s) dee-ZENN, ADN la-day-ENN,
//     protéines pro-tay-EENN, carbone kar-BONN, téléphone tay-lay-FONN,
//     abandonne la-bahⁿ-DONN, retiennent ruh-TYENN, bonne bonn. Every
//     doubled consonant is really pronounced. No U+203F tie anywhere, in a
//     respelling or an IPA field.
//
//  6. APOSTROPHES. Every authored French string uses the typographic ’.
//     Reused seed rows keep theirs (several use the straight '); none is
//     embedded in the scenario, which uses ’ only.
//
//  7. FACTUAL CLAIMS, FOR THE FACT CHECK. Every study, institute, company
//     and figure in the anchor texts is INVENTED and labelled « étude
//     imaginaire » where it appears (Institut Vespérine, Observatoire
//     Noctua, the Lire-Vite reading method, the Rimouski greenhouse, the
//     seaweed fertiliser, the Liège salary leaflet, the town statistics).
//     Real places appear only as places. The REAL claims, each meant to be
//     accurate and uncontroversial:
//       a. Statistical significance: a gap is « significatif » when a gap
//          that large would be unlikely if chance alone were at work; a tiny
//          effect can be significant in a huge sample (1067, 1068, act 5
//          text).
//       b. Peer review is usually done by two or three specialists, often
//          anonymously, and checks the method rather than guaranteeing truth
//          (1064, act 5 text).
//       c. A preprint is posted before peer review (1066, act 5 text).
//       d. There is a scientific consensus that current climate warming is
//          caused by human activity (1073, act 5 text).
//       e. The placebo effect exists: believing you receive a treatment can
//          be enough to feel better (1045).
//       f. The safest way to show a cause is an experiment with a randomly
//          assigned control group (1056).
//       g. Ice cream sales and drownings both rise in summer, linked by heat
//          (1048, 1049, 1057); children’s height and vocabulary both grow
//          with age (1053, 1054).
//       h. The smaller the sample, the larger the margin of error (1078).
//       i. Doubling = +100 %; from 4 % to 6 % = +2 points = +50 %; from
//          10 % to 12 % = +2 points = +20 %; from 40 % to 50 % = +10 points
//          = +25 %; from 2 € to 2,40 € = +20 % (1090, 1092, 1093, act 6
//          text). French writes 3,5 % with a decimal comma and a space
//          before the sign (1094).
//       j. A million and a billion differ by a factor of a thousand (1101);
//          an order of magnitude is a power of ten (1111).
//       k. The Moon is about 384,000 km from the Earth (1108); its light
//          takes a little over a second to reach us (1109); a light year is
//          a distance, about 9,500 billion km (1110, act 9 text); at 100
//          km/h a car would need more than ten million years to cover one
//          (act 9 text).
//       l. An algorithm is a sequence of instructions (1112); machine
//          learning trains a model on data instead of writing every rule by
//          hand (1114, act 8 text); data centres use a lot of electricity,
//          partly for cooling (1116, act 8 text).
//       m. Specialists prefer « chiffrer » to « crypter » (1119); free
//          software (logiciel libre) is defined by the freedom to use,
//          study, modify and share its code, not by its price (1121, 1122,
//          1127).
//       n. Manufacturing accounts for a large share (the largest share for a
//          smartphone) of the carbon footprint of digital devices; keeping a
//          phone longer reduces it (1123, 1124, act 8 text, act 8 box).
//       o. Québec usage: courriel, clavarder, infonuagique, pourriel,
//          hameçonnage, gratuiciel (OQLF terms); France: mail, discuter en
//          ligne or tchatter, le cloud, spam, phishing (1125, act 8 table).
//       p. Banks do not ask for a password by email (1126).
//       q. Greenhouse gases hold back part of the heat the Earth radiates;
//          without a greenhouse effect the Earth would be far too cold for
//          us; they do not form a solid layer (1129-1135, 1133).
//       r. If Earth’s history fitted in one day, humans would arrive in the
//          last seconds (1142: about 300,000 years of 4.5 billion, roughly
//          six seconds).
//       s. DNA holds the instructions for making proteins (1139).
//       t. Water boils at 100 °C at sea level (1165).
//       u. Artificial light at night disturbs moths (1156, 1152, act 10 and
//          act 12 texts: « probable », « d’autres études en laboratoire vont
//          dans le même sens »).
//       v. Marie Curie discovered radium and won two Nobel prizes; Fleming
//          discovered penicillin by chance (reused seed rows).
//       w. Task option B: the Moon moves away from the Earth by about 3.8 cm
//          a year, measured by laser for more than fifty years with
//          reflectors left by the Apollo missions; total solar eclipses will
//          stop being possible in several hundred million years.
//       x. Smoking causes cancers, given as the example of « il est établi que »
//          in the certainty table of sheet-solidite.
//
//  8. MOOD POLICIES (lesson 20 in B2’s, followed, never tested against
//     themselves): « il est probable que » takes the indicative and a
//     subjunctive after it is never a wrong option; « il semble que » and
//     « il semblerait que » are taught with the subjunctive and every
//     type-in that ends on them also accepts the indicative; « il est
//     possible que », « il n’est pas prouvé que », « rien ne permet
//     d’affirmer que », « aucune preuve que » take the subjunctive (the
//     indicative is the error); « c’est comme si » takes the imparfait or
//     the plus-que-parfait, never the present or the conditional.
//
//  9. NO UNGRAMMATICAL OR FALSE SENTENCE IS EVER A ROW, with two deliberate
//     exceptions that are the lesson’s exhibits and are labelled as such in
//     every section that prints them: the inflated headlines 1000 and 1162
//     (correct French, false as reports of their study).
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
  id: 'b2.29',
  seq: 29,
  title: 'Science for Everyone',
  sub: 'La science pour tous',
  canDo: 'Can read and discuss a science or technology story as an informed non-specialist: name the method (hypothesis, experiment, control group, random draw, blinding, bias), tell a link from a cause, judge how solid a result is (significance, margin of error, replication, peer review, preprint, consensus), handle figures (de and à, percentage points, average and median, orders of magnitude, relative and absolute risk), use the core digital vocabulary with its Québec and France variants, explain simply with reformulation and analogy while saying where the analogy stops, grade certainty with impersonal hedges, avoid the false friends of science, and write a blog post that explains a finding and corrects an exaggerated headline',
  prereqUnitIds: ['b1.33', 'b1.34', 'b1.37', 'b2.15', 'b2.20', 'b2.22', 'b2.24'],
} as const;

export const LESSON_ID = 'b2.29.l1';
export const THEME = 'methode-scientifique';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French: a unit id’s
 *  number IS its trail position. Only A1, A2 1-36, B1 1-39 and B2 1-30 are
 *  cited (27 to 30 are written in parallel).
 * ══════════════════════════════════════════════════════════════════════════ */

export const ENVIRONNEMENT_UNIT = 'b1.33';
export const MEDIAS_UNIT = 'b1.34';
export const LECTURE_B1_UNIT = 'b1.37';
export const NOMINALISATION_UNIT = 'b2.10';
export const CAUSE_UNIT = 'b2.15';
export const IMPERS_UNIT = 'b2.20';
export const ACADEMIQUE_UNIT = 'b2.22';
export const CRITIQUE_UNIT = 'b2.24';
export const LITTERATURE_UNIT = 'b2.30';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const ENVIRONNEMENT_REF = refFr(ENVIRONNEMENT_UNIT);
export const MEDIAS_REF = refFr(MEDIAS_UNIT);
export const LECTURE_B1_REF = refFr(LECTURE_B1_UNIT);
export const NOMINALISATION_REF = refFr(NOMINALISATION_UNIT);
export const CAUSE_REF = refFr(CAUSE_UNIT);
export const IMPERS_REF = refFr(IMPERS_UNIT);
export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT);
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);
export const LITTERATURE_REF = refFr(LITTERATURE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B133_REFRAME, REFRAME_EN as B133_REFRAME_EN } from '../b1/environnement-corpus.ts';
export { REFRAME as B134_REFRAME, REFRAME_EN as B134_REFRAME_EN } from '../b1/medias-corpus.ts';
export { REFRAME as B210_REFRAME, REFRAME_EN as B210_REFRAME_EN } from './nominalisation-corpus.ts';
export { REFRAME as B215_REFRAME, REFRAME_EN as B215_REFRAME_EN } from './cause-consequence-corpus.ts';
export { REFRAME as B220_REFRAME, REFRAME_EN as B220_REFRAME_EN } from './tournures-impersonnelles-corpus.ts';
export { REFRAME as B222_REFRAME, REFRAME_EN as B222_REFRAME_EN } from './style-academique-corpus.ts';
export { REFRAME as B224_REFRAME, REFRAME_EN as B224_REFRAME_EN } from './lecture-critique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE PASSEUR. A finding has to cross a river, from the laboratory bank to
 *  the street bank. The one who carries it (a journalist, a teacher, you in
 *  your blog post) may repack the cargo in lighter crates (simpler words, an
 *  analogy, a rounded figure), but must land exactly what was loaded: the
 *  same result, and the same degree of certainty. A headline that says
 *  « prouvé » where the study said « suggère » has added weight on the
 *  crossing. A « deux pour cent » that should have been « deux points » has
 *  changed the cargo. An analogy with no word on where it stops has dropped
 *  something overboard.
 *
 *  It is NOT « ne crois pas les titres » (lesson 24 in B2’s ground, and a
 *  licence for cynicism) and NOT « parle simplement » (which licenses the
 *  inflation the lesson is built against).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Vulgariser, c’est simplifier les mots sans grossir les résultats.';
export const REFRAME_EN = 'To explain science simply is to simplify the words without inflating the results.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Ne crois pas les titres.',
    why: 'Cynicism, and lesson 24 in B2’s ground: its reframe (« Ce qu’un texte affirme n’est pas ce qu’il prouve ») already says it. This lesson asks the learner to PASS ON a finding, which a reader who believes nothing cannot do; act 5 ends on a consensus that is solid.',
  },
  {
    text: 'La science, c’est ce qui est prouvé.',
    why: 'False where the lesson has to hold: acts 2, 5 and 10 teach that an experiment supports a hypothesis, that results are more or less solid, and that the verb must match. « Prouvé » is exactly the word the headlines misuse.',
  },
  {
    text: 'Parle simplement.',
    why: 'True for act 9 and dangerous alone: « des chercheurs ont prouvé » is simpler than « une petite étude suggère ». Simplifying the words is the job; simplifying the result is the fault.',
  },
  {
    text: 'Un chiffre sans contexte ne veut rien dire.',
    why: 'The best line for acts 6 and 7 (points, medians, relative risk) and silent on method (acts 2 to 5), on the digital words (act 8) and on the false friends (act 11).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const MS2 = (n: number) => `fr.b2.methode-scientifique.${String(n).padStart(3, '0')}`;
const SC1 = (n: number) => `fr.b1.strategies-de-comprehension.${n}`;
const SC2 = (n: number) => `fr.b2.strategies-de-comprehension.${n}`;

export const IMPORTED = {
  act1: [
    'fr.b2.universite.1088',                  // Votre verbe doit correspondre à la force de vos preuves, ni plus, ni moins.  (lesson 22 in B2)
    'fr.b1.internet.001',                     // Il vaut mieux vérifier ses sources avant de partager une information.
  ],
  act2: [
    MS2(1),                                   // une hypothèse
    MS2(3),                                   // une expérience
    MS2(4),                                   // un protocole
    MS2(6),                                   // Les chercheurs ont formulé une hypothèse qu'ils vont tester en laboratoire.
    'fr.b1.disciplines.004',                  // un chercheur
    'fr.b1.disciplines.005',                  // un laboratoire
  ],
  act3: [
    MS2(2),                                   // un échantillon
    SC2(1442),                                // Selon une étude menée auprès de 1 840 élèves, l’écart est de huit points.  (lesson 24 in B2)
    'fr.b2.universite.1068',                  // Il serait utile de vérifier ces résultats sur un échantillon plus large.  (lesson 22 in B2)
  ],
  act4: [
    SC2(1438),                                // une corrélation, pas une causalité  (lesson 24 in B2)
    SC2(1432),                                // L’étude montre un lien, pas une cause.  (lesson 24 in B2)
    'fr.b2.connecteurs-logiques.1968',        // La hausse des prix est probablement liée au coût du transport.  (lesson 15 in B2)
    'fr.b2.connecteurs-logiques.1957',        // La hausse des prix a entraîné une baisse de la consommation.  (lesson 15 in B2)
  ],
  act5: [
    MS2(5),                                   // Avant de tirer des conclusions, il faut que les résultats soient vérifiés par d'autres équipes.
    SC2(1557),                                // La baisse du trafic est proche de la marge d’erreur.  (lesson 24 in B2)
    'fr.b2.recherche.003',                    // Les chercheurs remettent en question les conclusions de l'étude précédente.
  ],
  act6: [
    'fr.b1.journalisme.1036',                 // augmenter, la hausse ; baisser, la baisse  (lesson 34 in B1)
    SC1(1085),                                // Le taux de chômage est passé de 7,2 % à 6,8 %.  (lesson 37 in B1)
    SC1(1089),                                // Le prix a doublé en cinq ans.  (lesson 37 in B1)
    'fr.sons.nombres.136',                    // le pour cent
    'fr.b2.langue-soignee.1403',              // La hausse du carburant a alourdi le coût des livraisons.  (lesson 10 in B2)
  ],
  act7: [
    'fr.b2.universite.1020',                  // Les étudiants dorment en moyenne moins de sept heures par nuit pendant les examens.  (lesson 22 in B2)
    SC1(1082),                                // Près d'un lecteur sur trois lit surtout sur un téléphone.  (lesson 37 in B1)
    'fr.sons.nombres.137',                    // la moyenne
  ],
  act8: [
    'fr.b2.rp-technologie.001',               // l'intelligence artificielle
    'fr.b2.universite.1100',                  // Les outils d'intelligence artificielle se sont répandus très vite dans les universités.  (lesson 22 in B2)
    'fr.a2.internet.002',                     // un courriel
    'fr.a2.internet.182',                     // un mail
    'fr.a2.internet.184',                     // le clavardage
    'fr.b2.ecologie.005',                     // Il est essentiel que chacun réduise son empreinte carbone, même à petite échelle.  (dictation only)
  ],
  act9: [
    'fr.b2.affaires.1264',                    // autrement dit  (lesson 26 in B2)
    SC1(1193),                                // en gros  (lesson 37 in B1)
    SC1(1192),                                // En gros, l'article dit que ces frigos marchent bien.  (lesson 37 in B1)
  ],
  act10: [
    'fr.b2.universite.1063',                  // Les résultats suggèrent que le taux de réussite tend à diminuer.  (lesson 22 in B2)
    'fr.b1.journalisme.1157',                 // prendre une info avec des pincettes  (lesson 34 in B1)
    SC2(1455),                                // Rien ne prouve que la rue piétonne en soit la cause.  (lesson 24 in B2)
  ],
  act11: [
    SC1(1115),                                // un faux ami  (lesson 37 in B1)
    SC1(1116),                                // Actuellement, je loge chez mes parents.  (lesson 37 in B1)
    SC1(1117),                                // En fait, je ne suis pas d'accord avec toi.  (lesson 37 in B1)
    SC1(1118),                                // Éventuellement, je pourrais partager un appartement.  (lesson 37 in B1)
    SC1(1119),                                // J'ai finalement trouvé un kot.  (lesson 37 in B1)
    'fr.b1.disciplines.001',                  // la physique
    'fr.b2.decouvertes.004',                  // Marie Curie a découvert le radium, ce qui lui a valu deux prix Nobel.
    'fr.b2.decouvertes.005',                  // La pénicilline a été découverte par hasard par Alexander Fleming.
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b2.ecologie.005',                        // {sentence, dictation}
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  MS2(1), MS2(2), MS2(3), MS2(4), MS2(5), MS2(6),   // {flashcard}
  'fr.b1.disciplines.001', 'fr.b1.disciplines.004', 'fr.b1.disciplines.005', // {flashcard}
  'fr.b1.internet.001',                        // {sentence, flashcard, review}
  'fr.b2.recherche.003',                       // {sentence, flashcard, review}
  'fr.b2.decouvertes.004', 'fr.b2.decouvertes.005', // {flashcard}
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `phrase` a collocation no other row holds; `rule` a
 *  grammar card whose prompt is a situation and whose `fr` is the move.
 *  Every row carries fr, en, ipa and respell. Corpus respellings carry no
 *  brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const GP = ['science-pour-tous'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C,
});

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE TITRE QUI GROSSIT (.1000-.1014) ─────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Des chercheurs ont prouvé que le chocolat noir améliore la mémoire.', 'Researchers have proved that dark chocolate improves memory.',
    '/de ʃɛʁ.ʃœʁ ɔ̃ pʁu.ve kə lə ʃɔ.kɔ.la nwaʁ a.me.ljɔʁ la me.mwaʁ/', 'day shehr-SHUHR ohⁿ proo-VAY | kuh luh sho-ko-la NWAR | a-may-LYOR la may-MWAR', ['titre', 'exageration']),
  sent(1001, 'Une petite étude suggère un effet modeste du chocolat noir sur la mémoire.', 'A small study suggests a modest effect of dark chocolate on memory.',
    '/yn pə.ti.te.tyd syɡ.ʒɛʁ œ̃.ne.fɛ mɔ.dɛst dy ʃɔ.kɔ.la nwaʁ syʁ la me.mwaʁ/', 'ün puh-tee-tay-TÜD süg-ZHEHR | uhⁿ-nay-feh mo-DEST | dü sho-ko-la NWAR | sür la may-MWAR', ['fidele', 'certitude']),
  sent(1002, 'L’étude a été menée auprès de soixante étudiants volontaires.', 'The study was carried out with sixty student volunteers.',
    '/le.tyd a e.te mə.ne o.pʁɛ də swa.sɑ̃t e.ty.djɑ̃ vɔ.lɔ̃.tɛʁ/', 'lay-TÜD a ay-tay muh-NAY | oh-preh duh swa-SAHⁿT | ay-tü-dyahⁿ vo-lohⁿ-TEHR', ['lecture', 'methode']),
  sent(1003, 'La moitié des participants formait le groupe témoin.', 'Half of the participants made up the control group.',
    '/la mwa.tje de paʁ.ti.si.pɑ̃ fɔʁ.mɛ lə ɡʁup te.mwɛ̃/', 'la mwa-TYAY day par-tee-see-PAHⁿ | for-meh luh groop tay-MWEHⁿ', ['lecture', 'temoin']),
  phrase(1004, 'trois points d’écart, sur un petit échantillon', 'a three-point gap, on a small sample',
    '/tʁwa pwɛ̃ de.kaʁ sy.ʁœ̃ pə.ti.te.ʃɑ̃.ti.jɔ̃/', 'trwa pwehⁿ day-KAR | sü-ruhⁿ puh-tee-tay-shahⁿ-tee-YOHⁿ', ['lecture', 'chiffres']),
  sent(1005, 'La différence est à peine significative.', 'The difference is barely significant.',
    '/la di.fe.ʁɑ̃s ɛ.ta pɛn si.ɲi.fi.ka.tiv/', 'la dee-fay-RAHⁿSS | eh-ta PENN see-nyee-fee-ka-TEEV', ['lecture', 'solidite']),
  sent(1006, 'Elle pourrait être due au hasard.', 'It could be down to chance.',
    '/ɛl pu.ʁɛ ɛtʁ dy o a.zaʁ/', 'el poo-reh etr DÜ oh a-ZAR', ['lecture', 'solidite'], FCVDR),
  sent(1007, 'L’étude n’a pas encore été évaluée par d’autres chercheurs.', 'The study has not yet been reviewed by other researchers.',
    '/le.tyd na pa.zɑ̃.kɔʁ e.te e.va.lɥe paʁ do.tʁə ʃɛʁ.ʃœʁ/', 'lay-TÜD na pa-zahⁿ-KOR | ay-tay ay-va-LWAY | par doh-truh shehr-SHUHR', ['lecture', 'pairs']),
  sent(1008, 'Il faudra reproduire l’étude avant de conclure quoi que ce soit.', 'The study will have to be replicated before concluding anything at all.',
    '/il fo.dʁa ʁə.pʁɔ.dɥiʁ le.tyd a.vɑ̃ də kɔ̃.klyʁ kwa kə sə swa/', 'eel foh-DRA | ruh-pro-DWEER lay-TÜD | a-vahⁿ duh kohⁿ-KLÜR | kwa kuh suh SWA', ['lecture', 'solidite']),
  sent(1009, 'Le titre dit « prouvé » ; l’étude dit « suggère ».', 'The headline says “proved”; the study says “suggests”.',
    '/lə titʁ di pʁu.ve le.tyd di syɡ.ʒɛʁ/', 'luh TEETR dee proo-VAY | lay-TÜD dee süg-ZHEHR', ['titre', 'certitude']),
  rule(1010, REFRAME, REFRAME_EN,
    '/vyl.ɡa.ʁi.ze sɛ sɛ̃.pli.fje le mo sɑ̃ ɡʁo.siʁ le ʁe.zyl.ta/', 'vül-ga-ree-ZAY | seh sehⁿ-plee-FYAY lay MOH | sahⁿ groh-SEER lay ray-zül-TA',
    'Un titre dit « prouvé », l’étude dit « suggère ». Tu en parles à un ami. Que fais-tu ?',
    'Tu gardes des mots simples, et tu gardes « suggère » : vulgariser, c’est simplifier les mots sans grossir les résultats.', ['vulgariser']),
  sent(1011, 'Qu’est-ce que l’étude a vraiment trouvé ?', 'What did the study actually find?',
    '/kɛs kə le.tyd a vʁɛ.mɑ̃ tʁu.ve/', 'kess kuh lay-TÜD a vreh-mahⁿ troo-VAY', ['question']),
  sent(1012, 'Sur combien de personnes, et pendant combien de temps ?', 'On how many people, and for how long?',
    '/syʁ kɔ̃.bjɛ̃ də pɛʁ.sɔn e pɑ̃.dɑ̃ kɔ̃.bjɛ̃ də tɑ̃/', 'sür kohⁿ-byehⁿ duh pehr-SONN | ay pahⁿ-dahⁿ kohⁿ-byehⁿ duh TAHⁿ', ['question']),
  sent(1013, 'Est-ce que d’autres équipes ont trouvé la même chose ?', 'Have other teams found the same thing?',
    '/ɛs kə do.tʁə.ze.kip ɔ̃ tʁu.ve la mɛm ʃoz/', 'ess kuh doh-truh-zay-KEEP | ohⁿ troo-VAY la mem SHOHZ', ['question', 'solidite']),
  sent(1014, 'Je te l’explique simplement, sans exagérer.', 'I will explain it to you simply, without exaggerating.',
    '/ʒə tə lɛks.plik sɛ̃.plə.mɑ̃ sɑ̃.zɛɡ.za.ʒe.ʁe/', 'zhuh tuh leks-PLEEK | sehⁿ-pluh-MAHⁿ | sahⁿ-zeg-za-zhay-RAY', ['vulgariser'], FCVDR),
];

/* ── ACT 2 · DU DOUTE À L’EXPÉRIENCE (.1016-.1030) ─────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1016, 'Tout part d’une question : cet engrais aide-t-il vraiment les tomates ?', 'It all starts with a question: does this fertiliser really help tomatoes?',
    '/tu paʁ dyn kɛs.tjɔ̃ sɛ.tɑ̃.ɡʁɛ ɛd.til vʁɛ.mɑ̃ le tɔ.mat/', 'too par dün kes-TYOHⁿ | seh-tahⁿ-GREH | ed-TEEL vreh-MAHⁿ | lay to-MAT', ['demarche', 'serre']),
  sent(1017, 'Notre hypothèse : l’engrais d’algues accélère la croissance des plants.', 'Our hypothesis: the seaweed fertiliser speeds up the plants’ growth.',
    '/nɔ.tʁi.pɔ.tɛz lɑ̃.ɡʁɛ dalɡ ak.se.lɛʁ la kʁwa.sɑ̃s de plɑ̃/', 'no-tree-po-TEZ | lahⁿ-greh DALG | ak-say-LEHR la krwa-SAHⁿSS day PLAHⁿ', ['demarche', 'hypothese', 'serre']),
  sent(1018, 'Pour la tester, nous avons mené une expérience dans une serre.', 'To test it, we ran an experiment in a greenhouse.',
    '/puʁ la tɛs.te nu.za.vɔ̃ mə.ne y.nɛks.pe.ʁjɑ̃s dɑ̃.zyn sɛʁ/', 'poor la tes-TAY | noo-za-vohⁿ muh-NAY | ü-neks-pay-RYAHⁿSS | dahⁿ-zün SEHR', ['demarche', 'experience', 'serre']),
  sent(1019, 'Le protocole décrit chaque étape, pour que d’autres équipes puissent la refaire.', 'The protocol describes every step, so that other teams can repeat it.',
    '/lə pʁɔ.tɔ.kɔl de.kʁi ʃa.ke.tap puʁ kə do.tʁə.ze.kip pɥis la ʁə.fɛʁ/', 'luh pro-to-KOL day-KREE | sha-kay-TAP | poor kuh doh-truh-zay-KEEP | pweess la ruh-FEHR', ['demarche', 'protocole']),
  sent(1020, 'La seule variable, c’est l’engrais ; tout le reste est identique.', 'The only variable is the fertiliser; everything else is the same.',
    '/la sœl va.ʁjabl sɛ lɑ̃.ɡʁɛ tu lə ʁɛst ɛ.ti.dɑ̃.tik/', 'la suhl va-RYABL | seh lahⁿ-GREH | too luh REST | eh-tee-dahⁿ-TEEK', ['demarche', 'variable']),
  sent(1021, 'Nous avons mesuré la hauteur des plants chaque semaine.', 'We measured the height of the plants every week.',
    '/nu.za.vɔ̃ mə.zy.ʁe la o.tœʁ de plɑ̃ ʃak sə.mɛn/', 'noo-za-vohⁿ muh-zü-RAY | la oh-TUHR day PLAHⁿ | shak suh-MENN', ['demarche', 'mesure'], FCVDR),
  sent(1022, 'Les résultats vont dans le sens de notre hypothèse.', 'The results support our hypothesis.',
    '/le ʁe.zyl.ta vɔ̃ dɑ̃ lə sɑ̃s də nɔ.tʁi.pɔ.tɛz/', 'lay ray-zül-TA | vohⁿ dahⁿ luh SAHⁿSS | duh no-tree-po-TEZ', ['demarche', 'resultat'], FCVDR),
  sent(1023, 'On ne prouve pas une hypothèse en une fois : on la met à l’épreuve.', 'You do not prove a hypothesis in one go: you put it to the test.',
    '/ɔ̃ nə pʁuv pa.zy.ni.pɔ.tɛz ɑ̃.ny.nə fwa ɔ̃ la mɛ.ta le.pʁœv/', 'ohⁿ nuh proov pa-zü-nee-po-TEZ | ahⁿ-nü-nuh FWA | ohⁿ la meh-ta lay-PRUHV', ['demarche', 'hypothese']),
  sent(1024, 'Si les résultats contredisent l’hypothèse, on la modifie ou on l’abandonne.', 'If the results contradict the hypothesis, you change it or drop it.',
    '/si le ʁe.zyl.ta kɔ̃.tʁə.diz li.pɔ.tɛz ɔ̃ la mɔ.di.fi u ɔ̃ la.bɑ̃.dɔn/', 'see lay ray-zül-TA | kohⁿ-truh-DEEZ lee-po-TEZ | ohⁿ la mo-dee-FEE | oo ohⁿ la-bahⁿ-DONN', ['demarche', 'hypothese']),
  sent(1025, 'La ville lance une expérimentation de six mois sur l’éclairage des rues.', 'The city is launching a six-month trial of street lighting.',
    '/la vil lɑ̃s y.nɛks.pe.ʁi.mɑ̃.ta.sjɔ̃ də si mwa syʁ le.klɛ.ʁaʒ de ʁy/', 'la VEEL lahⁿss | ü-neks-pay-ree-mahⁿ-ta-SYOHⁿ | duh see MWA | sür lay-kleh-RAZH day RÜ', ['experimentation']),
  sent(1026, 'Elle a une longue expérience de la recherche.', 'She has long experience in research.',
    '/ɛ.la yn lɔ̃ɡ ɛks.pe.ʁjɑ̃s də la ʁə.ʃɛʁʃ/', 'eh-la ün LOHⁿG | eks-pay-RYAHⁿSS | duh la ruh-SHEHRSH', ['experience-vecue']),
  sent(1027, 'L’expérience a duré douze semaines, dans une serre de Rimouski.', 'The experiment lasted twelve weeks, in a greenhouse in Rimouski.',
    '/lɛks.pe.ʁjɑ̃s a dy.ʁe duz sə.mɛn dɑ̃.zyn sɛʁ də ʁi.mu.ski/', 'leks-pay-RYAHⁿSS a dü-RAY | dooz suh-MENN | dahⁿ-zün SEHR duh ree-moo-SKEE', ['experience', 'serre']),
  sent(1028, 'Ne tire pas de conclusion avant d’avoir tous les résultats.', 'Do not draw a conclusion before you have all the results.',
    '/nə tiʁ pa də kɔ̃.kly.zjɔ̃ a.vɑ̃ da.vwaʁ tu le ʁe.zyl.ta/', 'nuh TEER pa duh kohⁿ-klü-ZYOHⁿ | a-vahⁿ da-VWAR | too lay ray-zül-TA', ['demarche', 'conclusion']),
  rule(1029, 'Une expérience soutient une hypothèse ; à elle seule, elle ne la prouve pas.', 'An experiment supports a hypothesis; on its own, it does not prove it.',
    '/y.nɛks.pe.ʁjɑ̃s su.tjɛ̃ y.ni.pɔ.tɛz a ɛl sœl ɛl nə la pʁuv pa/', 'ü-neks-pay-RYAHⁿSS soo-TYEHⁿ ü-nee-po-TEZ | a el SUHL | el nuh la proov PA',
    'Ton expérience va dans le sens de ton hypothèse. Peux-tu écrire qu’elle est prouvée ?',
    'Pas encore. Une expérience la soutient ; il faudra d’autres expériences, menées par d’autres équipes.', ['hypothese']),
  sent(1030, 'Les données montrent une croissance plus rapide avec l’engrais.', 'The data show faster growth with the fertiliser.',
    '/le dɔ.ne mɔ̃tʁ yn kʁwa.sɑ̃s ply ʁa.pid a.vɛk lɑ̃.ɡʁɛ/', 'lay do-NAY MOHⁿTR | ün krwa-SAHⁿSS plü ra-PEED | a-vek lahⁿ-GREH', ['donnees', 'serre'], FCVDR),
];

/* ── ACT 3 · LE GROUPE TÉMOIN ET L’AVEUGLE (.1032-.1047) ───────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1032, 'Quarante classes de Montréal ont participé à l’étude.', 'Forty classes in Montréal took part in the study.',
    '/ka.ʁɑ̃t klas də mɔ̃.ʁe.al ɔ̃ paʁ.ti.si.pe a le.tyd/', 'ka-RAHⁿT KLASS duh mohⁿ-ray-AL | ohⁿ par-tee-see-PAY a lay-TÜD', ['ecoute', 'lecture-ecole']),
  sent(1033, 'Les classes ont été tirées au sort : vingt ont testé la nouvelle méthode.', 'The classes were drawn by lot: twenty tried out the new method.',
    '/le klas ɔ̃.te.te ti.ʁe o sɔʁ vɛ̃.tɔ̃ tɛs.te la nu.vɛl me.tɔd/', 'lay KLASS ohⁿ-tay-tay tee-RAY oh SOR | vehⁿ-tohⁿ tes-TAY | la noo-vel may-TOD', ['ecoute', 'tirage']),
  sent(1034, 'Les vingt autres ont gardé la méthode habituelle : c’est le groupe témoin.', 'The other twenty kept the usual method: that is the control group.',
    '/le vɛ̃.to.tʁə.zɔ̃ ɡaʁ.de la me.tɔ.da.bi.tɥɛl sɛ lə ɡʁup te.mwɛ̃/', 'lay vehⁿ-toh-truh-zohⁿ gar-DAY | la may-to-da-bee-TWEL | seh luh groop tay-MWEHⁿ', ['ecoute', 'temoin']),
  sent(1035, 'Sans groupe témoin, on ne saurait pas si les élèves auraient progressé de toute façon.', 'Without a control group, we would not know whether the pupils would have improved anyway.',
    '/sɑ̃ ɡʁup te.mwɛ̃ ɔ̃ nə sɔ.ʁɛ pa si le.ze.lɛv o.ʁɛ pʁɔ.ɡʁe.se də tut fa.sɔ̃/', 'sahⁿ groop tay-MWEHⁿ | ohⁿ nuh so-reh PA | see lay-zay-LEV oh-reh pro-greh-SAY | duh toot fa-SOHⁿ', ['ecoute', 'temoin']),
  sent(1036, 'Les enseignants savaient quelle méthode ils utilisaient : l’étude n’est pas en aveugle.', 'The teachers knew which method they were using: the study is not blind.',
    '/le.zɑ̃.sɛ.ɲɑ̃ sa.vɛ kɛl me.tɔd il.zy.ti.li.zɛ le.tyd nɛ pa.zɑ̃.na.vœɡl/', 'lay-zahⁿ-seh-NYAHⁿ sa-VEH | kel may-TOD eel-zü-tee-lee-ZEH | lay-TÜD neh pa-zahⁿ-na-VUHGL', ['ecoute', 'aveugle']),
  sent(1037, 'Les correcteurs, eux, ne savaient pas de quelle classe venaient les copies.', 'The markers, for their part, did not know which class the papers came from.',
    '/le kɔ.ʁɛk.tœʁ ø nə sa.vɛ pa də kɛl klas və.nɛ le kɔ.pi/', 'lay ko-rek-TUHR | EU | nuh sa-veh PA | duh kel KLASS | vuh-neh lay ko-PEE', ['ecoute', 'aveugle']),
  sent(1038, 'Après un an, les élèves de la nouvelle méthode lisaient un peu plus vite.', 'After a year, the pupils on the new method were reading a little faster.',
    '/a.pʁɛ.zœ̃.nɑ̃ le.ze.lɛv də la nu.vɛl me.tɔd li.zɛ œ̃ pø ply vit/', 'a-preh-zuhⁿ-NAHⁿ | lay-zay-LEV duh la noo-vel may-TOD | lee-zeh uhⁿ PEU plü VEET', ['ecoute', 'resultat']),
  sent(1039, 'Les chercheurs parlent d’un premier résultat, pas d’une preuve définitive.', 'The researchers speak of a first result, not of final proof.',
    '/le ʃɛʁ.ʃœʁ paʁl dœ̃ pʁə.mje ʁe.zyl.ta pa dyn pʁœv de.fi.ni.tiv/', 'lay shehr-SHUHR PARL | duhⁿ pruh-myay ray-zül-TA | pa dün PRUHV day-fee-nee-TEEV', ['ecoute', 'certitude']),
  sent(1040, 'On compare le groupe qui teste la méthode à un groupe témoin.', 'You compare the group testing the method with a control group.',
    '/ɔ̃ kɔ̃.paʁ lə ɡʁup ki tɛst la me.tɔd a œ̃ ɡʁup te.mwɛ̃/', 'ohⁿ kohⁿ-PAR | luh groop kee TEST la may-TOD | a uhⁿ groop tay-MWEHⁿ', ['temoin'], FCVDR),
  sent(1041, 'Les participants sont répartis au hasard entre les deux groupes.', 'The participants are split at random between the two groups.',
    '/le paʁ.ti.si.pɑ̃ sɔ̃ ʁe.paʁ.ti o a.zaʁ ɑ̃.tʁə le dø ɡʁup/', 'lay par-tee-see-PAHⁿ | sohⁿ ray-par-TEE oh a-ZAR | ahⁿ-truh lay deu GROOP', ['tirage'], FCVDR),
  sent(1042, 'Un groupe reçoit la vraie gélule, l’autre un placebo qui ne contient rien d’actif.', 'One group gets the real capsule, the other a placebo with nothing active in it.',
    '/œ̃ ɡʁup ʁə.swa la vʁɛ ʒe.lyl lotʁ œ̃ pla.se.bo ki nə kɔ̃.tjɛ̃ ʁjɛ̃ dak.tif/', 'uhⁿ groop ruh-SWA | la vreh zhay-LÜL | LOHTR uhⁿ pla-say-BOH | kee nuh kohⁿ-TYEHⁿ ryehⁿ dak-TEEF', ['placebo']),
  sent(1043, 'En double aveugle, ni les participants ni les chercheurs ne savent qui reçoit quoi.', 'In a double-blind study, neither the participants nor the researchers know who gets what.',
    '/ɑ̃ du.bla.vœɡl ni le paʁ.ti.si.pɑ̃ ni le ʃɛʁ.ʃœʁ nə sav ki ʁə.swa kwa/', 'ahⁿ doo-bla-VUHGL | nee lay par-tee-see-PAHⁿ | nee lay shehr-SHUHR | nuh SAV | kee ruh-swa KWA', ['aveugle'], FCVDR),
  sent(1044, 'Un biais peut fausser les résultats sans que personne ne triche.', 'A bias can skew the results without anyone cheating.',
    '/œ̃ bjɛ pø fo.se le ʁe.zyl.ta sɑ̃ kə pɛʁ.sɔn nə tʁiʃ/', 'uhⁿ BYEH peu foh-SAY lay ray-zül-TA | sahⁿ kuh pehr-SONN nuh TREESH', ['biais']),
  sent(1045, 'L’effet placebo existe : croire qu’on reçoit un traitement peut suffire à se sentir mieux.', 'The placebo effect exists: believing you are getting treatment can be enough to feel better.',
    '/le.fɛ pla.se.bo ɛɡ.zist kʁwaʁ kɔ̃ ʁə.swa œ̃ tʁɛt.mɑ̃ pø sy.fiʁ a sə sɑ̃.tiʁ mjø/', 'lay-feh pla-say-BOH eg-ZEEST | krwar kohⁿ ruh-swa uhⁿ tret-MAHⁿ | peu sü-FEER a suh sahⁿ-teer MYEU', ['placebo']),
  rule(1046, 'Sans groupe témoin, on ne sait pas à quoi comparer.', 'Without a control group, you do not know what to compare with.',
    '/sɑ̃ ɡʁup te.mwɛ̃ ɔ̃ nə sɛ pa.za kwa kɔ̃.pa.ʁe/', 'sahⁿ groop tay-MWEHⁿ | ohⁿ nuh seh pa-za KWA kohⁿ-pa-RAY',
    'Une étude annonce : « Les élèves ont progressé de dix points. » Quelle question poses-tu d’abord ?',
    'Par rapport à qui ? Sans groupe témoin, on ne sait pas à quoi comparer : les élèves auraient peut-être progressé de toute façon.', ['temoin']),
  phrase(1047, 'tirer les participants au sort', 'to assign participants by drawing lots',
    '/ti.ʁe le paʁ.ti.si.pɑ̃ o sɔʁ/', 'tee-RAY lay par-tee-see-PAHⁿ oh SOR', ['tirage']),
];

/* ── ACT 4 · LIÉ À N’EST PAS CAUSÉ PAR (.1048-.1063) ───────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1048, 'Plus on vend de glaces, plus il y a de noyades.', 'The more ice cream is sold, the more drownings there are.',
    '/ply.zɔ̃ vɑ̃ də ɡlas ply.zi.li.ja də nwa.jad/', 'plü-zohⁿ VAHⁿ duh GLASS | plü-zee-lee-YA duh nwa-YAD', ['histoire', 'lien']),
  sent(1049, 'Les deux augmentent en été : c’est la chaleur qui les relie.', 'Both go up in summer: heat is what links them.',
    '/le dø.zoɡ.mɑ̃t ɑ̃.ne.te sɛ la ʃa.lœʁ ki le ʁə.li/', 'lay deu-zog-MAHⁿT ahⁿ-nay-TAY | seh la sha-LUHR | kee lay ruh-LEE', ['histoire', 'confusion']),
  sent(1050, 'La chaleur est un facteur de confusion.', 'Heat is a confounding factor.',
    '/la ʃa.lœʁ ɛ.tœ̃ fak.tœʁ də kɔ̃.fy.zjɔ̃/', 'la sha-LUHR | eh-tuhⁿ fak-TUHR duh kohⁿ-fü-ZYOHⁿ', ['histoire', 'confusion']),
  sent(1051, 'Les ventes de glaces sont liées aux noyades, mais elles ne les causent pas.', 'Ice cream sales are linked to drownings, but they do not cause them.',
    '/le vɑ̃t də ɡlas sɔ̃ lje o nwa.jad mɛ ɛl nə le koz pa/', 'lay VAHⁿT duh GLASS | sohⁿ lyay oh nwa-YAD | meh el nuh lay kohz PA', ['histoire', 'lien'], FCVDR),
  sent(1052, 'Dans cette étude, la lecture du soir est associée à un meilleur sommeil.', 'In this study, reading in the evening is associated with better sleep.',
    '/dɑ̃ sɛ.te.tyd la lɛk.tyʁ dy swaʁ ɛ.ta.sɔ.sje a œ̃ mɛ.jœʁ sɔ.mɛj/', 'dahⁿ seh-tay-TÜD | la lek-TÜR dü SWAR | eh-ta-so-SYAY | a uhⁿ meh-yuhr so-MEY', ['lien']),
  sent(1053, 'Chez les enfants, la taille va de pair avec le vocabulaire : les deux grandissent avec l’âge.', 'In children, height goes hand in hand with vocabulary: both grow with age.',
    '/ʃe le.zɑ̃.fɑ̃ la taj va də pɛʁ a.vɛk lə vɔ.ka.by.lɛʁ le dø ɡʁɑ̃.dis a.vɛk lɑʒ/', 'shay lay-zahⁿ-FAHⁿ | la TAHY va duh PEHR | a-vek luh vo-ka-bü-LEHR | lay deu grahⁿ-DEESS a-vek LAHZH', ['lien', 'confusion']),
  sent(1054, 'À âge égal, le lien disparaît.', 'At the same age, the link disappears.',
    '/a ɑʒ e.ɡal lə ljɛ̃ dis.pa.ʁɛ/', 'a ahzh ay-GAL | luh LYEHⁿ dees-pa-REH', ['confusion'], FCVDR),
  sent(1055, 'Il faut comparer ce qui est comparable, toutes choses égales par ailleurs.', 'You have to compare like with like, all other things being equal.',
    '/il fo kɔ̃.pa.ʁe sə ki ɛ kɔ̃.pa.ʁabl tut ʃo.ze.ɡal pa.ʁa.jœʁ/', 'eel foh kohⁿ-pa-RAY | suh kee eh kohⁿ-pa-RABL | toot shoh-zay-GAL pa-ra-YUHR', ['confusion']),
  sent(1056, 'Pour montrer une cause, le plus sûr est une expérience avec un groupe témoin tiré au sort.', 'To show a cause, the safest route is an experiment with a randomly assigned control group.',
    '/puʁ mɔ̃.tʁe yn koz lə ply syʁ ɛ.ty.nɛks.pe.ʁjɑ̃s a.vɛk œ̃ ɡʁup te.mwɛ̃ ti.ʁe o sɔʁ/', 'poor mohⁿ-TRAY ün KOHZ | luh plü SÜR | eh-tü-neks-pay-RYAHⁿSS | a-vek uhⁿ groop tay-MWEHⁿ | tee-RAY oh SOR', ['cause', 'temoin']),
  sent(1057, 'La chaleur entraîne à la fois plus de ventes et plus de baignades.', 'Heat leads to both more sales and more swimming.',
    '/la ʃa.lœʁ ɑ̃.tʁɛn a la fwa ply də vɑ̃t e ply də bɛ.ɲad/', 'la sha-LUHR ahⁿ-TRENN | a la FWA | plü duh VAHⁿT | ay plü duh beh-NYAD', ['cause', 'confusion']),
  sent(1058, 'Une corrélation n’implique pas une causalité.', 'Correlation does not imply causation.',
    '/yn kɔ.ʁe.la.sjɔ̃ nɛ̃.plik pa.zyn ko.za.li.te/', 'ün ko-ray-la-SYOHⁿ | nehⁿ-PLEEK | pa-zün koh-za-lee-TAY', ['lien', 'cause'], FCVDR),
  rule(1059, 'Deux choses qui vont ensemble ne sont pas forcément cause et effet.', 'Two things that go together are not necessarily cause and effect.',
    '/dø ʃoz ki vɔ̃.tɑ̃.sɑ̃bl nə sɔ̃ pa fɔʁ.se.mɑ̃ koz e e.fɛ/', 'deu SHOHZ | kee vohⁿ-tahⁿ-SAHⁿBL | nuh sohⁿ pa for-say-MAHⁿ | kohz ay ay-FEH',
    'Deux chiffres montent ensemble depuis dix ans. Qu’en conclus-tu ?',
    'Rien de sûr : ils sont liés, mais une troisième chose peut expliquer les deux, ou la cause peut aller dans l’autre sens.', ['lien']),
  sent(1060, 'La cause peut aussi aller dans l’autre sens.', 'The cause can also run the other way.',
    '/la koz pø o.si a.le dɑ̃ lo.tʁə sɑ̃s/', 'la KOHZ peu oh-SEE | a-LAY dahⁿ loh-truh SAHⁿSS', ['cause']),
  sent(1061, 'Les gens fatigués font moins de sport : la fatigue peut être la cause, et non l’effet.', 'Tired people do less sport: tiredness may be the cause, not the effect.',
    '/le ʒɑ̃ fa.ti.ɡe fɔ̃ mwɛ̃ də spɔʁ la fa.tiɡ pø.tɛtʁ la koz e nɔ̃ le.fɛ/', 'lay zhahⁿ fa-tee-GAY | fohⁿ mwehⁿ duh SPOR | la fa-TEEG peu-tetr la KOHZ | ay nohⁿ lay-FEH', ['cause']),
  sent(1062, 'Qu’est-ce qui pourrait expliquer les deux à la fois ?', 'What could explain both at once?',
    '/kɛs ki pu.ʁɛ ɛks.pli.ke le dø a la fwa/', 'kess kee poo-REH eks-plee-KAY | lay DEU | a la FWA', ['question', 'confusion']),
  phrase(1063, 'un lien de cause à effet', 'a cause-and-effect link',
    '/œ̃ ljɛ̃ də koz a e.fɛ/', 'uhⁿ LYEHⁿ | duh KOHZ a ay-FEH', ['cause']),
];

/* ── ACT 5 · UN RÉSULTAT SOLIDE (.1064-.1079) ──────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1064, 'L’article a été relu par deux spécialistes anonymes avant d’être publié.', 'The article was reviewed by two anonymous specialists before being published.',
    '/laʁ.tikl a e.te ʁə.ly paʁ dø spe.sja.list a.nɔ.nim a.vɑ̃ dɛtʁ py.bli.je/', 'lar-TEEKL a ay-tay ruh-LÜ | par deu spay-sya-LEEST a-no-NEEMM | a-vahⁿ detr pü-blee-YAY', ['pairs']),
  sent(1065, 'L’étude a été évaluée par les pairs : d’autres chercheurs ont vérifié sa méthode.', 'The study was peer-reviewed: other researchers checked its method.',
    '/le.tyd a e.te e.va.lɥe paʁ le pɛʁ do.tʁə ʃɛʁ.ʃœʁ ɔ̃ ve.ʁi.fje sa me.tɔd/', 'lay-TÜD a ay-tay ay-va-LWAY par lay PEHR | doh-truh shehr-SHUHR | ohⁿ vay-ree-FYAY sa may-TOD', ['pairs'], FCVDR),
  sent(1066, 'Une prépublication n’a encore été vérifiée par personne.', 'A preprint has not yet been checked by anyone.',
    '/yn pʁe.py.bli.ka.sjɔ̃ na ɑ̃.kɔ.ʁe.te ve.ʁi.fje paʁ pɛʁ.sɔn/', 'ün pray-pü-blee-ka-SYOHⁿ | na ahⁿ-ko-ray-TAY vay-ree-FYAY | par pehr-SONN', ['pairs', 'prepublication']),
  sent(1067, 'Un effet peut être significatif et pourtant minuscule.', 'An effect can be statistically significant and yet tiny.',
    '/œ̃.ne.fɛ pø.tɛtʁ si.ɲi.fi.ka.tif e puʁ.tɑ̃ mi.nys.kyl/', 'uhⁿ-nay-FEH | peu-tetr see-nyee-fee-ka-TEEF | ay poor-tahⁿ mee-nüs-KÜL', ['significatif']),
  sent(1068, 'Significatif ne veut pas dire grand : cela veut dire difficile à expliquer par le seul hasard.', '“Significant” does not mean large: it means hard to explain by chance alone.',
    '/si.ɲi.fi.ka.tif nə vø pa diʁ ɡʁɑ̃ sə.la vø diʁ di.fi.sil a ɛks.pli.ke paʁ lə sœl a.zaʁ/', 'see-nyee-fee-ka-TEEF | nuh veu pa deer GRAHⁿ | suh-la veu DEER | dee-fee-SEEL a eks-plee-KAY | par luh suhl a-ZAR', ['significatif']),
  sent(1069, 'L’écart reste dans la marge d’erreur.', 'The gap is within the margin of error.',
    '/le.kaʁ ʁɛst dɑ̃ la maʁʒ de.ʁœʁ/', 'lay-KAR REST | dahⁿ la marzh day-RUHR', ['marge'], FCVDR),
  sent(1070, 'Une autre équipe a reproduit l’expérience et retrouvé le même effet.', 'Another team replicated the experiment and found the same effect.',
    '/y.no.tʁe.kip a ʁə.pʁɔ.dɥi lɛks.pe.ʁjɑ̃s e ʁə.tʁu.ve lə mɛ.me.fɛ/', 'ü-noh-tray-KEEP | a ruh-pro-DWEE leks-pay-RYAHⁿSS | ay ruh-troo-VAY luh meh-may-FEH', ['reproduire']),
  sent(1071, 'Ce résultat n’a jamais été reproduit : prudence.', 'This result has never been replicated: caution.',
    '/sə ʁe.zyl.ta na ʒa.mɛ.ze.te ʁə.pʁɔ.dɥi pʁy.dɑ̃s/', 'suh ray-zül-TA | na zha-meh-zay-TAY ruh-pro-DWEE | prü-DAHⁿSS', ['reproduire']),
  sent(1072, 'Une méta-analyse rassemble des dizaines d’études sur une même question.', 'A meta-analysis brings together dozens of studies on the same question.',
    '/yn me.ta.a.na.liz ʁa.sɑ̃bl de di.zɛn de.tyd sy.ʁyn mɛm kɛs.tjɔ̃/', 'ün may-ta-a-na-LEEZ | ra-SAHⁿBL day dee-ZENN day-TÜD | sü-rün mem kes-TYOHⁿ', ['consensus']),
  sent(1073, 'Le réchauffement climatique causé par les activités humaines fait l’objet d’un consensus scientifique.', 'Climate warming caused by human activity is the subject of a scientific consensus.',
    '/lə ʁe.ʃof.mɑ̃ kli.ma.tik ko.ze paʁ le.zak.ti.vi.te.zy.mɛn fɛ lɔb.ʒɛ dœ̃ kɔ̃.sɛ̃.sys sjɑ̃.ti.fik/', 'luh ray-shohf-MAHⁿ klee-ma-TEEK | koh-ZAY par lay-zak-tee-vee-tay-zü-MENN | feh lob-ZHEH | duhⁿ kohⁿ-sehⁿ-SÜSS syahⁿ-tee-FEEK', ['consensus']),
  sent(1074, 'Un seul article ne suffit pas à renverser un consensus.', 'A single article is not enough to overturn a consensus.',
    '/œ̃ sœl aʁ.tikl nə sy.fi pa.za ʁɑ̃.vɛʁ.se œ̃ kɔ̃.sɛ̃.sys/', 'uhⁿ suhl ar-TEEKL | nuh sü-fee pa-za rahⁿ-vehr-SAY | uhⁿ kohⁿ-sehⁿ-SÜSS', ['consensus'], FCVDR),
  sent(1075, 'La revue a retiré l’article après la découverte d’erreurs graves.', 'The journal withdrew the article after serious errors were found.',
    '/la ʁə.vy a ʁə.ti.ʁe laʁ.tikl a.pʁɛ la de.ku.vɛʁt de.ʁœʁ ɡʁav/', 'la ruh-VÜ a ruh-tee-RAY lar-TEEKL | a-preh la day-koo-VEHRT | day-ruhr GRAV', ['pairs']),
  rule(1076, 'Publié ne veut pas dire prouvé.', 'Published does not mean proved.',
    '/py.bli.je nə vø pa diʁ pʁu.ve/', 'pü-blee-YAY | nuh veu pa deer proo-VAY',
    'Un article est paru dans une revue scientifique. Son résultat est-il établi ?',
    'Pas encore. L’évaluation par les pairs vérifie la méthode ; c’est la reproduction par d’autres équipes qui rend un résultat solide.', ['pairs']),
  sent(1077, 'Un résultat isolé reste fragile tant qu’il n’a pas été reproduit.', 'An isolated result stays fragile until it has been replicated.',
    '/œ̃ ʁe.zyl.ta i.zɔ.le ʁɛst fʁa.ʒil tɑ̃ kil na pa.ze.te ʁə.pʁɔ.dɥi/', 'uhⁿ ray-zül-ta ee-zo-LAY | rest fra-ZHEEL | tahⁿ keel na pa-zay-TAY ruh-pro-DWEE', ['reproduire'], FCVDR),
  sent(1078, 'Plus l’échantillon est petit, plus la marge d’erreur est grande.', 'The smaller the sample, the larger the margin of error.',
    '/ply le.ʃɑ̃.ti.jɔ̃ ɛ pə.ti ply la maʁʒ de.ʁœʁ ɛ ɡʁɑ̃d/', 'plü lay-shahⁿ-tee-YOHⁿ eh puh-TEE | plü la marzh day-RUHR eh GRAHⁿD', ['marge']),
  sent(1079, 'Le résultat est solide : il a été retrouvé par plusieurs équipes indépendantes.', 'The result is solid: several independent teams have found it again.',
    '/lə ʁe.zyl.ta ɛ sɔ.lid i.la e.te ʁə.tʁu.ve paʁ ply.zjœʁ.ze.kip ɛ̃.de.pɑ̃.dɑ̃t/', 'luh ray-zül-TA eh so-LEED | ee-la ay-tay ruh-troo-VAY | par plü-zyuhr-zay-KEEP ehⁿ-day-pahⁿ-DAHⁿT', ['reproduire']),
];

/* ── ACT 6 · LES CHIFFRES QUI BOUGENT (.1080-.1095) ────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1080, 'Le ticket de bus passe de deux euros à deux euros cinquante.', 'The bus ticket goes from two euros to two euros fifty.',
    '/lə ti.kɛ də bys pas də dø.zø.ʁo a dø.zø.ʁo sɛ̃.kɑ̃t/', 'luh tee-KEH duh BÜSS | pass duh deu-zeu-ROH | a deu-zeu-roh sehⁿ-KAHⁿT', ['ecoute', 'de-a']),
  sent(1081, 'C’est une hausse de vingt-cinq pour cent.', 'That is a twenty-five per cent rise.',
    '/sɛ.tyn os də vɛ̃t.sɛ̃k puʁ sɑ̃/', 'seh-tün OHSS | duh vehⁿt-SEHⁿK poor SAHⁿ', ['ecoute', 'pourcent']),
  sent(1082, 'Le nombre de cyclistes a augmenté de douze pour cent en un an.', 'The number of cyclists has gone up by twelve per cent in a year.',
    '/lə nɔ̃bʁ də si.klist a oɡ.mɑ̃.te də duz puʁ sɑ̃ ɑ̃.nœ̃.nɑ̃/', 'luh NOHⁿBR duh see-KLEEST | a og-mahⁿ-TAY duh DOOZ poor SAHⁿ | ahⁿ-nuhⁿ-NAHⁿ', ['ecoute', 'de-a'], FCVDR),
  sent(1083, 'Le taux de chômage est passé de neuf à sept pour cent : il a baissé de deux points.', 'The unemployment rate went from nine to seven per cent: it fell by two points.',
    '/lə to də ʃo.maʒ ɛ pa.se də nœf a sɛt puʁ sɑ̃ i.la bɛ.se də dø pwɛ̃/', 'luh TOH duh sho-MAZH | eh pa-SAY duh NUHF a SET poor SAHⁿ | ee-la beh-SAY duh deu PWEHⁿ', ['ecoute', 'points']),
  sent(1084, 'Les ventes de voitures électriques ont doublé en deux ans.', 'Sales of electric cars have doubled in two years.',
    '/le vɑ̃t də vwa.tyʁ e.lɛk.tʁik ɔ̃ du.ble ɑ̃ dø.zɑ̃/', 'lay VAHⁿT duh vwa-TÜR ay-lek-TREEK | ohⁿ doo-BLAY | ahⁿ deu-ZAHⁿ', ['ecoute', 'doubler']),
  sent(1085, 'La consommation d’eau par habitant a été divisée par deux en trente ans.', 'Water use per resident has been halved in thirty years.',
    '/la kɔ̃.sɔ.ma.sjɔ̃ do paʁ a.bi.tɑ̃ a e.te di.vi.ze paʁ dø ɑ̃ tʁɑ̃.tɑ̃/', 'la kohⁿ-so-ma-SYOHⁿ DOH | par a-bee-TAHⁿ | a ay-tay dee-vee-ZAY par DEU | ahⁿ trahⁿ-TAHⁿ', ['ecoute', 'diviser']),
  sent(1086, 'Le nombre d’abonnés a été multiplié par trois.', 'The number of subscribers has tripled.',
    '/lə nɔ̃bʁ da.bɔ.ne a e.te myl.ti.pli.je paʁ tʁwa/', 'luh NOHⁿBR da-bo-NAY | a ay-tay mül-tee-plee-YAY par TRWA', ['ecoute', 'multiplier']),
  sent(1087, 'Le prix a augmenté de dix pour cent : il est passé de cent à cent dix euros.', 'The price went up by ten per cent: it went from a hundred to a hundred and ten euros.',
    '/lə pʁi a oɡ.mɑ̃.te də di puʁ sɑ̃ i.lɛ pa.se də sɑ̃ a sɑ̃ di.zø.ʁo/', 'luh PREE a og-mahⁿ-TAY | duh DEE poor SAHⁿ | ee-leh pa-SAY | duh SAHⁿ a sahⁿ dee-zeu-ROH', ['de-a']),
  sent(1088, 'Le taux d’épargne a atteint dix-huit pour cent.', 'The savings rate has reached eighteen per cent.',
    '/lə to de.paʁɲ a a.tɛ̃ di.zɥit puʁ sɑ̃/', 'luh toh day-PARNY | a a-TEHⁿ | dee-ZWEET poor SAHⁿ', ['ecoute', 'de-a']),
  phrase(1089, 'un point de pourcentage', 'a percentage point',
    '/œ̃ pwɛ̃ də puʁ.sɑ̃.taʒ/', 'uhⁿ PWEHⁿ | duh poor-sahⁿ-TAZH', ['points']),
  sent(1090, 'De dix à douze pour cent, c’est une hausse de deux points, soit vingt pour cent.', 'From ten to twelve per cent is a rise of two points, or twenty per cent.',
    '/də di.za duz puʁ sɑ̃ sɛ.tyn os də dø pwɛ̃ swa vɛ̃ puʁ sɑ̃/', 'duh dee-za DOOZ poor SAHⁿ | seh-tün OHSS duh deu PWEHⁿ | swa vehⁿ poor SAHⁿ', ['points'], FCVDR),
  sent(1091, 'Les ventes ont reculé de cinq pour cent au premier trimestre.', 'Sales fell back by five per cent in the first quarter.',
    '/le vɑ̃t ɔ̃ ʁə.ky.le də sɛ̃k puʁ sɑ̃ o pʁə.mje tʁi.mɛstʁ/', 'lay VAHⁿT ohⁿ ruh-kü-LAY | duh SEHⁿK poor SAHⁿ | oh pruh-myay tree-MESTR', ['reculer']),
  sent(1092, 'Doubler, c’est augmenter de cent pour cent.', 'To double is to increase by a hundred per cent.',
    '/du.ble sɛ.toɡ.mɑ̃.te də sɑ̃ puʁ sɑ̃/', 'doo-BLAY | seh-tog-mahⁿ-TAY | duh SAHⁿ poor SAHⁿ', ['doubler'], FCVDR),
  rule(1093, 'De quatre à six pour cent : deux points de plus, soit une hausse de cinquante pour cent.', 'From four to six per cent: two points more, which is a fifty per cent rise.',
    '/də ka.tʁa sis puʁ sɑ̃ dø pwɛ̃ də plys swa.tyn os də sɛ̃.kɑ̃t puʁ sɑ̃/', 'duh ka-tra SEESS poor SAHⁿ | deu pwehⁿ duh PLÜSS | swa-tün OHSS | duh sehⁿ-kahⁿt poor SAHⁿ',
    'Un taux passe de 4 % à 6 %. A-t-il augmenté de deux pour cent, ou de deux points ?',
    'De deux points. En pourcentage, c’est une hausse de 50 %. « Deux points » et « cinquante pour cent » sont vrais ; « deux pour cent » est faux.', ['points']),
  sent(1094, 'En français, on écrit 3,5 % : une virgule, et un blanc avant le signe.', 'In French you write 3,5 %: a comma, and a space before the sign.',
    '/ɑ̃ fʁɑ̃.sɛ ɔ̃.ne.kʁi tʁwa viʁ.ɡyl sɛ̃k puʁ sɑ̃ yn viʁ.ɡyl e œ̃ blɑ̃ a.vɑ̃ lə siɲ/', 'ahⁿ frahⁿ-SEH | ohⁿ-nay-KREE | trwa veer-gül SEHⁿK poor SAHⁿ | ün veer-GÜL | ay uhⁿ BLAHⁿ a-vahⁿ luh SEENY', ['ecrire']),
  sent(1095, 'Le taux d’intérêt a été porté à cinq pour cent.', 'The interest rate has been raised to five per cent.',
    '/lə to dɛ̃.te.ʁɛ a e.te pɔʁ.te a sɛ̃k puʁ sɑ̃/', 'luh toh dehⁿ-tay-REH | a ay-tay por-TAY | a SEHⁿK poor SAHⁿ', ['de-a']),
];

/* ── ACT 7 · MOYENNE, MÉDIANE, ORDRE DE GRANDEUR (.1096-.1111) ─────────── */

export const ACT7_ROWS: Row[] = [
  sent(1096, 'Le salaire moyen est de quatre mille euros, mais la moitié des salariés gagnent moins de deux mille huit cents euros.', 'The average salary is four thousand euros, but half of the employees earn less than two thousand eight hundred.',
    '/lə sa.lɛʁ mwa.jɛ̃ ɛ də katʁ mil ø.ʁo mɛ la mwa.tje de sa.la.ʁje ɡaɲ mwɛ̃ də dø mil ɥi sɑ̃.zø.ʁo/', 'luh sa-lehr mwa-YEHⁿ | eh duh katr meel eu-ROH | meh la mwa-TYAY day sa-la-RYAY | GANY mwehⁿ duh | deu meel wee sahⁿ-zeu-ROH', ['histoire', 'mediane']),
  sent(1097, 'La médiane coupe le groupe en deux moitiés égales.', 'The median cuts the group into two equal halves.',
    '/la me.djan kup lə ɡʁup ɑ̃ dø mwa.tje.ze.ɡal/', 'la may-DYANN KOOP luh GROOP | ahⁿ deu mwa-tyay-zay-GAL', ['mediane'], FCVDR),
  sent(1098, 'Quelques très hauts salaires tirent la moyenne vers le haut.', 'A few very high salaries pull the average up.',
    '/kɛl.kə tʁɛ o sa.lɛʁ tiʁ la mwa.jɛn vɛʁ lə o/', 'kel-kuh treh OH sa-LEHR | teer la mwa-YENN | vehr luh OH', ['histoire', 'moyenne']),
  sent(1099, 'En moyenne, les participants ont dormi six heures et demie.', 'On average, the participants slept six and a half hours.',
    '/ɑ̃ mwa.jɛn le paʁ.ti.si.pɑ̃ ɔ̃ dɔʁ.mi si.zœ.ʁe.də.mi/', 'ahⁿ mwa-YENN | lay par-tee-see-PAHⁿ | ohⁿ dor-MEE | see-zuh-ray-duh-MEE', ['moyenne']),
  sent(1100, 'Ces deux chiffres ne sont pas du même ordre de grandeur.', 'These two figures are not of the same order of magnitude.',
    '/se dø ʃifʁ nə sɔ̃ pa dy mɛ.mɔʁ.dʁə.də ɡʁɑ̃.dœʁ/', 'say deu SHEEFR | nuh sohⁿ pa dü MEM | or-druh duh grahⁿ-DUHR', ['grandeur'], FCVDR),
  sent(1101, 'Entre un million et un milliard, il y a un facteur mille.', 'Between a million and a billion, there is a factor of a thousand.',
    '/ɑ̃.tʁə œ̃ mi.ljɔ̃ e œ̃ mi.ljaʁ i.li.ja œ̃ fak.tœʁ mil/', 'ahⁿ-truh uhⁿ mee-LYOHⁿ | ay uhⁿ mee-LYAR | ee-lee-ya uhⁿ fak-tuhr MEEL', ['grandeur']),
  sent(1102, 'Plus d’un tiers des personnes interrogées lisent la rubrique scientifique.', 'More than a third of the people surveyed read the science section.',
    '/ply dœ̃ tjɛʁ de pɛʁ.sɔ.nɛ̃.te.ʁɔ.ʒe liz la ʁy.bʁik sjɑ̃.ti.fik/', 'plü duhⁿ TYEHR | day pehr-so-nehⁿ-tay-ro-ZHAY | leez la rü-BREEK syahⁿ-tee-FEEK', ['proportion']),
  sent(1103, 'Près de la moitié des volontaires ont abandonné avant la fin.', 'Nearly half of the volunteers dropped out before the end.',
    '/pʁɛ də la mwa.tje de vɔ.lɔ̃.tɛʁ ɔ̃.ta.bɑ̃.dɔ.ne a.vɑ̃ la fɛ̃/', 'preh duh la mwa-TYAY | day vo-lohⁿ-TEHR | ohⁿ-ta-bahⁿ-do-NAY | a-vahⁿ la FEHⁿ', ['proportion']),
  sent(1104, 'Le risque double, mais il passe d’un cas sur dix mille à deux cas sur dix mille.', 'The risk doubles, but it goes from one case in ten thousand to two in ten thousand.',
    '/lə ʁisk dubl mɛ il pas dœ̃ ka syʁ di mil a dø ka syʁ di mil/', 'luh REESK DOOBL | meh eel PASS | duhⁿ KA sür dee MEEL | a deu KA sür dee MEEL', ['risque'], FCVDR),
  sent(1105, 'En valeur absolue, le risque reste très faible.', 'In absolute terms, the risk remains very low.',
    '/ɑ̃ va.lœ.ʁap.sɔ.ly lə ʁisk ʁɛst tʁɛ fɛbl/', 'ahⁿ va-luh-rap-so-LÜ | luh REESK rest treh FEBL', ['risque']),
  sent(1106, 'Doubler un risque minuscule, cela donne encore un risque minuscule.', 'Double a tiny risk and you still have a tiny risk.',
    '/du.ble œ̃ ʁisk mi.nys.kyl sə.la dɔ.nɑ̃.kɔ.ʁœ̃ ʁisk mi.nys.kyl/', 'doo-BLAY uhⁿ REESK mee-nüs-KÜL | suh-la do-nahⁿ-ko-ruhⁿ REESK mee-nüs-KÜL', ['risque']),
  rule(1107, 'Double par rapport à quoi ? Donne-moi le risque de départ.', 'Double compared with what? Give me the starting risk.',
    '/dubl paʁ ʁa.pɔʁ a kwa dɔn.mwa lə ʁisk də de.paʁ/', 'DOOBL par ra-por a KWA | donn-MWA luh REESK duh day-PAR',
    'Un titre annonce : « Ce produit double le risque. » Quelle question poses-tu ?',
    'Le risque relatif double ; le risque absolu peut rester minuscule. Demande toujours le chiffre de départ.', ['risque']),
  sent(1108, 'La Lune se trouve à environ 384 000 kilomètres de la Terre.', 'The Moon is about 384,000 kilometres from the Earth.',
    '/la lyn sə tʁuv a ɑ̃.vi.ʁɔ̃ tʁwa sɑ̃ ka.tʁə.vɛ̃.ka.tʁə mil ki.lɔ.mɛtʁ də la tɛʁ/', 'la LÜNN suh TROOV | a ahⁿ-vee-ROHⁿ | trwa sahⁿ ka-truh-vehⁿ-KATR MEEL | kee-lo-METR duh la TEHR', ['grandeur', 'lune']),
  sent(1109, 'La lumière de la Lune met un peu plus d’une seconde à nous parvenir.', 'Light from the Moon takes a little over a second to reach us.',
    '/la ly.mjɛʁ də la lyn mɛ œ̃ pø ply dyn sə.ɡɔ̃d a nu paʁ.və.niʁ/', 'la lü-MYEHR duh la LÜNN | meh uhⁿ peu plü dün suh-GOHⁿD | a noo par-vuh-NEER', ['grandeur', 'lune']),
  sent(1110, 'Une année-lumière est une distance, pas une durée.', 'A light year is a distance, not a length of time.',
    '/y.na.ne.ly.mjɛʁ ɛ.ty.ne dis.tɑ̃s pa.zyn dy.ʁe/', 'ü-na-nay-lü-MYEHR | eh-tün dees-TAHⁿSS | pa-zün dü-RAY', ['grandeur'], FCVDR),
  sent(1111, 'Un ordre de grandeur, c’est une puissance de dix : dix, cent, mille.', 'An order of magnitude is a power of ten: ten, a hundred, a thousand.',
    '/œ̃.nɔʁ.dʁə.də ɡʁɑ̃.dœʁ sɛ.tyn pɥi.sɑ̃s də dis dis sɑ̃ mil/', 'uhⁿ-nor-druh duh grahⁿ-DUHR | seh-tün pwee-SAHⁿSS duh DEESS | DEESS | SAHⁿ | MEEL', ['grandeur']),
];

/* ── ACT 8 · LES MOTS DU NUMÉRIQUE (.1112-.1127) ───────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1112, 'Un algorithme est une suite d’instructions qui permet de résoudre un problème.', 'An algorithm is a sequence of instructions for solving a problem.',
    '/œ̃.nal.ɡɔ.ʁitm ɛ.tyn sɥit dɛ̃s.tʁyk.sjɔ̃ ki pɛʁ.mɛ də ʁe.zudʁ œ̃ pʁɔ.blɛm/', 'uhⁿ-nal-go-REETM | eh-tün SWEET dehⁿs-trük-SYOHⁿ | kee pehr-MEH duh ray-ZOODR | uhⁿ pro-BLEM', ['algorithme']),
  sent(1113, 'C’est un peu comme une recette de cuisine.', 'It is a bit like a recipe.',
    '/sɛ.tœ̃ pø kɔm yn ʁə.sɛt də kɥi.zin/', 'seh-tuhⁿ PEU | kom ün ruh-SET | duh kwee-ZEEN', ['algorithme', 'analogie']),
  sent(1114, 'On entraîne le modèle sur d’énormes quantités de données.', 'The model is trained on huge amounts of data.',
    '/ɔ̃.nɑ̃.tʁɛn lə mɔ.dɛl syʁ de.nɔʁm kɑ̃.ti.te də dɔ.ne/', 'ohⁿ-nahⁿ-TRENN luh mo-DEL | sür day-NORM kahⁿ-tee-TAY | duh do-NAY', ['ia', 'donnees'], FCVDR),
  sent(1115, 'Le modèle apprend à repérer des régularités dans les données.', 'The model learns to spot patterns in the data.',
    '/lə mɔ.dɛl a.pʁɑ̃ a ʁə.pe.ʁe de ʁe.ɡy.la.ʁi.te dɑ̃ le dɔ.ne/', 'luh mo-DEL a-PRAHⁿ | a ruh-pay-RAY day ray-gü-la-ree-TAY | dahⁿ lay do-NAY', ['ia', 'donnees']),
  sent(1116, 'Les serveurs d’un centre de données consomment beaucoup d’électricité.', 'The servers in a data centre use a lot of electricity.',
    '/le sɛʁ.vœʁ dœ̃ sɑ̃.tʁə.də dɔ.ne kɔ̃.sɔm bo.ku de.lɛk.tʁi.si.te/', 'lay sehr-VUHR | duhⁿ sahⁿ-truh duh do-NAY | kohⁿ-SOMM boh-KOO | day-lek-tree-see-TAY', ['stockage']),
  sent(1117, 'Mes photos sont stockées sur des serveurs, parfois à l’autre bout du monde.', 'My photos are stored on servers, sometimes on the other side of the world.',
    '/me fɔ.to sɔ̃ stɔ.ke syʁ de sɛʁ.vœʁ paʁ.fwa a lo.tʁə bu dy mɔ̃d/', 'may fo-TOH sohⁿ sto-KAY | sür day sehr-VUHR | par-FWA a loh-truh BOO dü MOHⁿD', ['stockage']),
  sent(1118, 'Seule la personne qui possède la clé peut lire un message chiffré.', 'Only the person who holds the key can read an encrypted message.',
    '/sœl la pɛʁ.sɔn ki pɔ.sɛd la kle pø liʁ œ̃ mɛ.saʒ ʃi.fʁe/', 'suhl la pehr-SONN | kee po-SED la KLAY | peu LEER uhⁿ meh-SAZH shee-FRAY', ['chiffrement'], FCVDR),
  sent(1119, 'Les spécialistes disent « chiffrer » plutôt que « crypter ».', 'Specialists say “chiffrer” rather than “crypter”.',
    '/le spe.sja.list diz ʃi.fʁe ply.to kə kʁip.te/', 'lay spay-sya-LEEST DEEZ | shee-FRAY | plü-toh kuh kreep-TAY', ['chiffrement']),
  phrase(1120, 'un logiciel libre', 'a piece of free software (open to study and change)',
    '/œ̃ lɔ.ʒi.sjɛl libʁ/', 'uhⁿ lo-zhee-SYEL LEEBR', ['logiciel']),
  sent(1121, 'Un logiciel libre n’est pas forcément gratuit.', 'Free software is not necessarily free of charge.',
    '/œ̃ lɔ.ʒi.sjɛl libʁ nɛ pa fɔʁ.se.mɑ̃ ɡʁa.tɥi/', 'uhⁿ lo-zhee-syel LEEBR | neh pa for-say-MAHⁿ gra-TWEE', ['logiciel'], FCVDR),
  sent(1122, 'Chacun peut étudier son code, le modifier et le partager.', 'Anyone can study its code, change it and share it.',
    '/ʃa.kœ̃ pø.te.ty.dje sɔ̃ kɔd lə mɔ.di.fje e lə paʁ.ta.ʒe/', 'sha-KUHⁿ peu-tay-tü-DYAY sohⁿ KOD | luh mo-dee-FYAY | ay luh par-ta-ZHAY', ['logiciel']),
  sent(1123, 'La fabrication de nos appareils pèse lourd dans l’empreinte carbone du numérique.', 'Manufacturing our devices weighs heavily in the carbon footprint of digital technology.',
    '/la fa.bʁi.ka.sjɔ̃ də no.za.pa.ʁɛj pɛz luʁ dɑ̃ lɑ̃.pʁɛ̃t kaʁ.bɔn dy ny.me.ʁik/', 'la fa-bree-ka-SYOHⁿ | duh noh-za-pa-REY | pez LOOR | dahⁿ lahⁿ-PREHⁿT kar-BONN dü nü-may-REEK', ['empreinte']),
  sent(1124, 'Garder son téléphone plus longtemps réduit son empreinte.', 'Keeping your phone longer reduces its footprint.',
    '/ɡaʁ.de sɔ̃ te.le.fɔn ply lɔ̃.tɑ̃ ʁe.dɥi sɔ̃.nɑ̃.pʁɛ̃t/', 'gar-DAY sohⁿ tay-lay-FONN | plü lohⁿ-TAHⁿ | ray-DWEE sohⁿ-nahⁿ-PREHⁿT', ['empreinte']),
  sent(1125, 'Au Québec, on clavarde ; en France, on dit plutôt qu’on discute en ligne.', 'In Québec people “clavardent”; in France they rather say they chat online.',
    '/o ke.bɛk ɔ̃ kla.vaʁd ɑ̃ fʁɑ̃s ɔ̃ di ply.to kɔ̃ dis.kyt ɑ̃ liɲ/', 'oh kay-BEK | ohⁿ kla-VARD | ahⁿ FRAHⁿSS | ohⁿ dee plü-TOH | kohⁿ dees-KÜT ahⁿ LEENY', ['variantes']),
  sent(1126, 'Ta banque ne te demandera jamais ton mot de passe par courriel.', 'Your bank will never ask you for your password by email.',
    '/ta bɑ̃k nə tə də.mɑ̃.də.ʁa ʒa.mɛ tɔ̃ mo də pas paʁ ku.ʁjɛl/', 'ta BAHⁿK | nuh tuh duh-mahⁿ-duh-RA zha-MEH | tohⁿ moh duh PASS | par koo-RYEL', ['securite']),
  rule(1127, 'Libre ne veut pas dire gratuit : le code est ouvert à tous.', 'Free (libre) does not mean free of charge: the code is open to all.',
    '/libʁ nə vø pa diʁ ɡʁa.tɥi lə kɔd ɛ.tu.vɛʁ a tus/', 'LEEBR nuh veu pa deer gra-TWEE | luh KOD eh-too-VEHR a TOOSS',
    'Une application ne coûte rien. Est-ce un logiciel libre ?',
    'Pas forcément. Un logiciel est libre si chacun peut étudier, modifier et partager son code, qu’il soit payant ou non.', ['logiciel']),
];

/* ── ACT 9 · EXPLIQUER SIMPLEMENT (.1128-.1143) ────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1128, 'Imaginez une couverture autour de la Terre.', 'Imagine a blanket around the Earth.',
    '/i.ma.ʒi.ne yn ku.vɛʁ.tyʁ o.tuʁ də la tɛʁ/', 'ee-ma-zhee-NAY | ün koo-vehr-TÜR | oh-toor duh la TEHR', ['ecoute', 'analogie']),
  sent(1129, 'Certains gaz retiennent une partie de la chaleur, un peu comme une couverture.', 'Some gases hold back part of the heat, a bit like a blanket.',
    '/sɛʁ.tɛ̃ ɡaz ʁə.tjɛn yn paʁ.ti də la ʃa.lœʁ œ̃ pø kɔm yn ku.vɛʁ.tyʁ/', 'sehr-tehⁿ GAZ | ruh-TYENN ün par-TEE | duh la sha-LUHR | uhⁿ peu kom ün koo-vehr-TÜR', ['ecoute', 'analogie']),
  sent(1130, 'Autrement dit, plus il y a de ces gaz, plus la Terre se réchauffe.', 'In other words, the more of these gases there are, the more the Earth warms.',
    '/o.tʁə.mɑ̃ di ply.zi.li.ja də se ɡaz ply la tɛʁ sə ʁe.ʃof/', 'oh-truh-mahⁿ DEE | plü-zee-lee-ya duh say GAZ | plü la TEHR suh ray-SHOHF', ['ecoute', 'reformuler'], FCVDR),
  sent(1131, 'En gros, la Terre garde un peu trop de la chaleur qu’elle reçoit du Soleil.', 'Roughly speaking, the Earth keeps a little too much of the heat it gets from the Sun.',
    '/ɑ̃ ɡʁo la tɛʁ ɡaʁ.dœ̃ pø tʁo də la ʃa.lœʁ kɛl ʁə.swa dy sɔ.lɛj/', 'ahⁿ GROH | la TEHR gar-duhⁿ peu TROH | duh la sha-LUHR | kel ruh-SWA dü so-LEY', ['ecoute', 'reformuler']),
  sent(1132, 'Pour faire simple, disons que c’est une question d’équilibre.', 'To keep it simple, let us say it is a question of balance.',
    '/puʁ fɛʁ sɛ̃pl di.zɔ̃ kə sɛ.tyn kɛs.tjɔ̃ de.ki.libʁ/', 'poor fehr SEHⁿPL | dee-zohⁿ kuh seh-tün kes-TYOHⁿ | day-kee-LEEBR', ['ecoute', 'reformuler']),
  sent(1133, 'Attention, l’image a ses limites : ces gaz ne forment pas une couche solide.', 'Careful, the image has its limits: these gases do not form a solid layer.',
    '/a.tɑ̃.sjɔ̃ li.maʒ a se li.mit se ɡaz nə fɔʁm pa.zyn kuʃ sɔ.lid/', 'a-tahⁿ-SYOHⁿ | lee-MAZH a say lee-MEET | say GAZ nuh FORM | pa-zün koosh so-LEED', ['ecoute', 'limite'], FCVDR),
  sent(1134, 'C’est comme si la Terre enfilait un pull de plus chaque année.', 'It is as if the Earth put on an extra jumper every year.',
    '/sɛ kɔm si la tɛʁ ɑ̃.fi.lɛ œ̃ pyl də plys ʃa.ka.ne/', 'seh kom SEE | la TEHR ahⁿ-fee-LEH | uhⁿ PÜL duh PLÜSS | sha-ka-NAY', ['ecoute', 'comme-si'], FCVDR),
  sent(1135, 'Sans effet de serre, la Terre serait beaucoup trop froide pour nous.', 'Without the greenhouse effect, the Earth would be far too cold for us.',
    '/sɑ̃.ze.fɛ də sɛʁ la tɛʁ sə.ʁɛ bo.ku tʁo fʁwad puʁ nu/', 'sahⁿ-zay-FEH duh SEHR | la TEHR suh-REH | boh-koo troh FRWAD poor NOO', ['ecoute']),
  sent(1136, 'Cette comparaison aide à comprendre, mais elle ne dit pas tout.', 'This comparison helps you understand, but it does not tell the whole story.',
    '/sɛt kɔ̃.pa.ʁɛ.zɔ̃ ɛd a kɔ̃.pʁɑ̃dʁ mɛ ɛl nə di pa tu/', 'set kohⁿ-pa-reh-ZOHⁿ | ed a kohⁿ-PRAHⁿDR | meh el nuh dee pa TOO', ['limite']),
  sent(1137, 'En une phrase : l’engrais aide un peu, mais on n’en est pas encore sûrs.', 'In one sentence: the fertiliser helps a little, but we are not sure yet.',
    '/ɑ̃.ny.nə fʁaz lɑ̃.ɡʁɛ ɛ.dœ̃ pø mɛ ɔ̃ nɑ̃.nɛ pa.zɑ̃.kɔʁ syʁ/', 'ahⁿ-nü-nuh FRAZ | lahⁿ-GREH | eh-duhⁿ PEU | meh ohⁿ nahⁿ-neh pa-zahⁿ-kor SÜR', ['reformuler']),
  sent(1138, 'Concrètement, qu’est-ce que ça change pour nous ?', 'In practical terms, what does it change for us?',
    '/kɔ̃.kʁɛt.mɑ̃ kɛs kə sa ʃɑ̃ʒ puʁ nu/', 'kohⁿ-kret-MAHⁿ | kess kuh sa SHAHⁿZH poor NOO', ['reformuler']),
  sent(1139, 'L’ADN, c’est un peu comme une recette : il contient les instructions pour fabriquer les protéines.', 'DNA is a bit like a recipe: it contains the instructions for making proteins.',
    '/la.de.ɛn sɛ.tœ̃ pø kɔm yn ʁə.sɛt il kɔ̃.tjɛ̃ le.zɛ̃s.tʁyk.sjɔ̃ puʁ fa.bʁi.ke le pʁɔ.te.in/', 'la-day-ENN | seh-tuhⁿ peu kom ün ruh-SET | eel kohⁿ-TYEHⁿ lay-zehⁿs-trük-SYOHⁿ | poor fa-bree-KAY lay pro-tay-EENN', ['analogie']),
  sent(1140, 'Une bonne comparaison éclaire une idée ; elle ne la remplace pas.', 'A good comparison sheds light on an idea; it does not replace it.',
    '/yn bɔn kɔ̃.pa.ʁɛ.zɔ̃ e.klɛʁ y.ni.de ɛl nə la ʁɑ̃.plas pa/', 'ün bonn kohⁿ-pa-reh-ZOHⁿ | ay-KLEHR ü-nee-DAY | el nuh la rahⁿ-plass PA', ['limite']),
  rule(1141, 'Une image aide à comprendre ; dis aussi où elle s’arrête.', 'An image helps understanding; also say where it stops working.',
    '/y.ni.maʒ ɛd a kɔ̃.pʁɑ̃dʁ di o.si u ɛl sa.ʁɛt/', 'ü-nee-MAZH ed a kohⁿ-PRAHⁿDR | dee oh-SEE | oo el sa-RET',
    'Tu compares l’effet de serre à une couverture. Que dois-tu ajouter ?',
    'Où l’image s’arrête : ces gaz ne forment pas une couche solide. Une analogie éclaire, elle ne remplace pas l’explication.', ['analogie']),
  sent(1142, 'Imaginons que l’histoire de la Terre tienne en une journée : les humains arrivent dans les dernières secondes.', 'Imagine the Earth’s history fitting into one day: humans arrive in the last few seconds.',
    '/i.ma.ʒi.nɔ̃ kə lis.twaʁ də la tɛʁ tjɛn ɑ̃.ny.nə ʒuʁ.ne le.zy.mɛ̃ a.ʁiv dɑ̃ le dɛʁ.njɛʁ sə.ɡɔ̃d/', 'ee-ma-zhee-NOHⁿ | kuh lees-TWAR duh la TEHR | tyenn ahⁿ-nü-nuh zhoor-NAY | lay-zü-MEHⁿ a-REEV | dahⁿ lay dehr-nyehr suh-GOHⁿD', ['analogie', 'grandeur']),
  sent(1143, 'Dit comme ça, c’est plus parlant.', 'Put like that, it is easier to grasp.',
    '/di kɔm sa sɛ ply paʁ.lɑ̃/', 'dee kom SA | seh plü par-LAHⁿ', ['reformuler']),
];

/* ── ACT 10 · DU LABO AU TITRE (.1144-.1162) ───────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1144, 'Bonjour à tous, place à notre chronique scientifique.', 'Hello everyone, over to our science slot.',
    '/bɔ̃.ʒu.ʁa tus plas a nɔtʁ kʁɔ.nik sjɑ̃.ti.fik/', 'bohⁿ-zhoo-ra TOOSS | plass a notr kro-NEEK syahⁿ-tee-FEEK', ['radio']),
  sent(1145, 'On a lu partout qu’éteindre les lampadaires sauvait les papillons de nuit.', 'We read everywhere that switching off streetlights saved moths.',
    '/ɔ̃.na ly paʁ.tu ke.tɛ̃dʁ le lɑ̃.pa.dɛʁ so.vɛ le pa.pi.jɔ̃ də nɥi/', 'ohⁿ-na lü par-TOO | kay-TEHⁿDR lay lahⁿ-pa-DEHR | soh-VEH | lay pa-pee-yohⁿ duh NWEE', ['radio']),
  sent(1146, 'Ce n’est pas tout à fait ce que dit notre étude.', 'That is not quite what our study says.',
    '/sə nɛ pa tu.ta.fɛ sə kə di nɔ.tʁe.tyd/', 'suh neh pa too-ta-FEH | suh kuh DEE no-tray-TÜD', ['radio', 'nuance']),
  sent(1147, 'Nous avons compté les papillons dans quarante communes, pendant deux étés.', 'We counted moths in forty municipalities over two summers.',
    '/nu.za.vɔ̃ kɔ̃.te le pa.pi.jɔ̃ dɑ̃ ka.ʁɑ̃t kɔ.myn pɑ̃.dɑ̃ dø.ze.te/', 'noo-za-vohⁿ kohⁿ-TAY lay pa-pee-YOHⁿ | dahⁿ ka-rahⁿt ko-MÜNN | pahⁿ-dahⁿ deu-zay-TAY', ['radio']),
  sent(1148, 'Là où l’éclairage était coupé à minuit, nous en avons trouvé davantage, en moyenne.', 'Where the lighting was switched off at midnight, we found more of them, on average.',
    '/la u le.klɛ.ʁaʒ e.tɛ ku.pe a mi.nɥi nu.zɑ̃.na.vɔ̃ tʁu.ve da.vɑ̃.taʒ ɑ̃ mwa.jɛn/', 'la oo lay-kleh-RAZH | ay-teh koo-PAY a mee-NWEE | noo-zahⁿ-na-vohⁿ troo-VAY da-vahⁿ-TAZH | ahⁿ mwa-YENN', ['radio']),
  sent(1149, 'Mais c’est une corrélation : ces communes sont aussi plus rurales.', 'But it is a correlation: these municipalities are also more rural.',
    '/mɛ sɛ.tyn kɔ.ʁe.la.sjɔ̃ se kɔ.myn sɔ̃.to.si ply ʁy.ʁal/', 'meh seh-tün ko-ray-la-SYOHⁿ | say ko-MÜNN | sohⁿ-toh-SEE plü rü-RAL', ['radio', 'lien']),
  sent(1150, 'Donc les lampadaires ne sont pas en cause ?', 'So the streetlights are not to blame?',
    '/dɔ̃k le lɑ̃.pa.dɛʁ nə sɔ̃ pa.zɑ̃ koz/', 'dohⁿk lay lahⁿ-pa-DEHR | nuh sohⁿ pa-zahⁿ KOHZ', ['radio']),
  sent(1151, 'Il est probable qu’ils jouent un rôle, mais il n’est pas prouvé qu’ils soient la seule cause.', 'They probably play a part, but it has not been proved that they are the only cause.',
    '/i.lɛ pʁɔ.babl kil ʒu œ̃ ʁol mɛ il nɛ pa pʁu.ve kil swa la sœl koz/', 'ee-leh pro-BABL | keel zhoo uhⁿ ROHL | meh eel neh pa proo-VAY | keel SWA la suhl KOHZ', ['radio', 'certitude'], FCVDR),
  sent(1152, 'D’autres études, en laboratoire, vont dans le même sens.', 'Other studies, in the lab, point the same way.',
    '/do.tʁə.ze.tyd ɑ̃ la.bɔ.ʁa.twaʁ vɔ̃ dɑ̃ lə mɛm sɑ̃s/', 'doh-truh-zay-TÜD | ahⁿ la-bo-ra-TWAR | vohⁿ dahⁿ luh mem SAHⁿSS', ['radio']),
  sent(1153, 'Il faudrait maintenant éteindre l’éclairage dans des communes tirées au sort.', 'The next step would be to switch off the lighting in randomly chosen municipalities.',
    '/il fo.dʁɛ mɛ̃t.nɑ̃ e.tɛ̃dʁ le.klɛ.ʁaʒ dɑ̃ de kɔ.myn ti.ʁe o sɔʁ/', 'eel foh-DREH mehⁿt-NAHⁿ | ay-TEHⁿDR lay-kleh-RAZH | dahⁿ day ko-MÜNN tee-RAY oh SOR', ['radio', 'temoin']),
  sent(1154, 'Alors, quel titre auriez-vous choisi ?', 'So, what headline would you have chosen?',
    '/a.lɔʁ kɛl titʁ o.ʁje.vu ʃwa.zi/', 'a-LOR | kel TEETR | oh-ryay-voo shwa-ZEE', ['radio']),
  sent(1155, 'Moins de lumière, plus de papillons : une piste sérieuse, à confirmer.', 'Less light, more moths: a serious lead, still to be confirmed.',
    '/mwɛ̃ də ly.mjɛʁ ply də pa.pi.jɔ̃ yn pist se.ʁjøz a kɔ̃.fiʁ.me/', 'mwehⁿ duh lü-MYEHR | plü duh pa-pee-YOHⁿ | ün peest say-RYEUZ | a kohⁿ-feer-MAY', ['radio', 'titre']),
  sent(1156, 'Il est probable que l’éclairage nocturne perturbe ces insectes.', 'Night-time lighting probably disturbs these insects.',
    '/i.lɛ pʁɔ.babl kə le.klɛ.ʁaʒ nɔk.tyʁn pɛʁ.tyʁb se.zɛ̃.sɛkt/', 'ee-leh pro-BABL | kuh lay-kleh-RAZH nok-TÜRN | pehr-TÜRB say-zehⁿ-SEKT', ['certitude']),
  sent(1157, 'Il est possible que l’effet soit plus faible dans les grandes villes.', 'The effect may be weaker in big cities.',
    '/i.lɛ pɔ.sibl kə le.fɛ swa ply fɛbl dɑ̃ le ɡʁɑ̃d vil/', 'ee-leh po-SEEBL | kuh lay-FEH swa plü FEBL | dahⁿ lay grahⁿd VEEL', ['certitude'], FCVDR),
  sent(1158, 'Rien ne permet encore d’affirmer que l’éclairage soit la seule cause.', 'Nothing yet allows us to state that lighting is the only cause.',
    '/ʁjɛ̃ nə pɛʁ.mɛ.tɑ̃.kɔʁ da.fiʁ.me kə le.klɛ.ʁaʒ swa la sœl koz/', 'ryehⁿ nuh pehr-meh-tahⁿ-KOR da-feer-MAY | kuh lay-kleh-RAZH swa la suhl KOHZ', ['certitude']),
  sent(1159, 'Il semblerait que l’effet soit plus fort au début de l’été.', 'The effect would seem to be stronger at the start of summer.',
    '/il sɑ̃.blə.ʁɛ kə le.fɛ swa ply fɔʁ o de.by də le.te/', 'eel sahⁿ-bluh-REH | kuh lay-FEH swa plü FOR | oh day-BÜ duh lay-TAY', ['certitude']),
  sent(1160, 'Les résultats suggèrent un lien, sans le démontrer.', 'The results suggest a link without demonstrating it.',
    '/le ʁe.zyl.ta syɡ.ʒɛʁ œ̃ ljɛ̃ sɑ̃ lə de.mɔ̃.tʁe/', 'lay ray-zül-TA süg-ZHEHR uhⁿ LYEHⁿ | sahⁿ luh day-mohⁿ-TRAY', ['certitude'], FCVDR),
  rule(1161, 'Un verbe à la mesure de l’étude : elle suggère, elle ne prouve pas.', 'A verb that matches the study: it suggests, it does not prove.',
    '/œ̃ vɛʁb a la mə.zyʁ də le.tyd ɛl syɡ.ʒɛʁ ɛl nə pʁuv pa/', 'uhⁿ VEHRB a la muh-ZÜR duh lay-TÜD | el süg-ZHEHR | el nuh proov PA',
    'Ton étude observe un lien, sans expérience. Quel verbe choisis-tu pour ton titre ?',
    'Suggère, montre un lien, laisse penser : pas prouve. Le verbe dit jusqu’où l’étude va.', ['certitude']),
  sent(1162, 'Les lampadaires tuent les papillons, selon une étude.', 'Streetlights kill moths, according to a study.',
    '/le lɑ̃.pa.dɛʁ ty le pa.pi.jɔ̃ sə.lɔ̃ y.ne.tyd/', 'lay lahⁿ-pa-DEHR | TÜ lay pa-pee-YOHⁿ | suh-lohⁿ ü-nay-TÜD', ['titre', 'exageration']),
];

/* ── ACT 11 · LES FAUX AMIS DE LA SCIENCE (.1164-.1178) ────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1164, 'Nous n’avons aucune preuve que ce produit soit dangereux.', 'We have no evidence that this product is dangerous.',
    '/nu.na.vɔ̃.zo.kyn pʁœv kə sə pʁɔ.dɥi swa dɑ̃ʒ.ʁø/', 'noo-na-vohⁿ-zoh-KÜNN PRUHV | kuh suh pro-DWEE | swa dahⁿzh-REU', ['evidence'], FCVDR),
  sent(1165, 'C’est une évidence : l’eau bout à cent degrés au niveau de la mer.', 'It is obvious: water boils at a hundred degrees at sea level.',
    '/sɛ.ty.ne.vi.dɑ̃s lo bu a sɑ̃ də.ɡʁe o ni.vo də la mɛʁ/', 'seh-tü-nay-vee-DAHⁿSS | loh BOO a sahⁿ duh-GRAY | oh nee-voh duh la MEHR', ['evidence']),
  sent(1166, 'Les données disponibles vont dans ce sens.', 'The available evidence points that way.',
    '/le dɔ.ne dis.pɔ.nibl vɔ̃ dɑ̃ sə sɑ̃s/', 'lay do-NAY dees-po-NEEBL | vohⁿ dahⁿ suh SAHⁿSS', ['evidence', 'donnees']),
  sent(1167, 'Mon frère est physicien ; ma sœur est médecin.', 'My brother is a physicist; my sister is a doctor.',
    '/mɔ̃ fʁɛʁ ɛ fi.zi.sjɛ̃ ma sœʁ ɛ med.sɛ̃/', 'mohⁿ FREHR eh fee-zee-SYEHⁿ | ma SUHR eh med-SEHⁿ', ['physicien'], FCVDR),
  sent(1168, 'Le physique, c’est l’apparence ; la physique, c’est la science.', '“Le physique” is appearance; “la physique” is the science.',
    '/lə fi.zik sɛ la.pa.ʁɑ̃s la fi.zik sɛ la sjɑ̃s/', 'luh fee-ZEEK | seh la-pa-RAHⁿSS | la fee-ZEEK | seh la SYAHⁿSS', ['physicien']),
  sent(1169, 'L’étude montre une hausse importante, et statistiquement significative.', 'The study shows a large rise, and a statistically significant one.',
    '/le.tyd mɔ̃.tʁyn os ɛ̃.pɔʁ.tɑ̃t e sta.tis.tik.mɑ̃ si.ɲi.fi.ka.tiv/', 'lay-TÜD mohⁿ-trün OHSS ehⁿ-por-TAHⁿT | ay sta-tees-teek-MAHⁿ see-nyee-fee-ka-TEEV', ['significatif']),
  sent(1170, 'J’ai assisté à une conférence sur les trous noirs.', 'I went to a talk on black holes.',
    '/ʒe.a.sis.te a yn kɔ̃.fe.ʁɑ̃s syʁ le tʁu nwaʁ/', 'zhay-a-sees-TAY | a ün kohⁿ-fay-RAHⁿSS | sür lay troo NWAR', ['conference']),
  sent(1171, 'La lecture de cet article prend une heure.', 'Reading this article takes an hour.',
    '/la lɛk.tyʁ də sɛ.taʁ.tikl pʁɑ̃ y.nœʁ/', 'la lek-TÜR | duh seh-tar-TEEKL | prahⁿ ü-NUHR', ['lecture']),
  sent(1172, 'Le résumé de l’article tient en dix lignes.', 'The article’s abstract fits in ten lines.',
    '/lə ʁe.zy.me də laʁ.tikl tjɛ̃ ɑ̃ di liɲ/', 'luh ray-zü-MAY | duh lar-TEEKL | tyehⁿ ahⁿ dee LEENY', ['resume']),
  sent(1173, 'Actuellement, l’étude est en cours de relecture.', 'The study is currently being reviewed.',
    '/ak.tɥɛl.mɑ̃ le.tyd ɛ.tɑ̃ kuʁ də ʁə.lɛk.tyʁ/', 'ak-twel-MAHⁿ | lay-TÜD eh-tahⁿ KOOR | duh ruh-lek-TÜR', ['actuellement'], FCVDR),
  sent(1174, 'Nous pourrons éventuellement étendre l’étude à d’autres villes.', 'We may possibly extend the study to other cities.',
    '/nu pu.ʁɔ̃.ze.vɑ̃.tɥɛl.mɑ̃ e.tɑ̃dʁ le.tyd a do.tʁə vil/', 'noo poo-rohⁿ-zay-vahⁿ-twel-MAHⁿ | ay-TAHⁿDR lay-TÜD | a doh-truh VEEL', ['eventuellement']),
  sent(1175, 'À terme, les chercheurs espèrent comprendre ce mécanisme.', 'Eventually, the researchers hope to understand this mechanism.',
    '/a tɛʁm le ʃɛʁ.ʃœʁ ɛs.pɛʁ kɔ̃.pʁɑ̃dʁ sə me.ka.nism/', 'a TEHRM | lay shehr-SHUHR es-PEHR | kohⁿ-PRAHⁿDR suh may-ka-NEESM', ['eventuellement']),
  sent(1176, 'En fait, l’effet est plus faible que prévu.', 'Actually, the effect is weaker than expected.',
    '/ɑ̃ fɛt le.fɛ ɛ ply fɛbl kə pʁe.vy/', 'ahⁿ FET | lay-FEH eh plü FEBL | kuh pray-VÜ', ['actuellement']),
  rule(1177, 'Evidence se dit preuves ou données ; une évidence, c’est ce qui saute aux yeux.', '“Evidence” is preuves or données; une évidence is something obvious.',
    '/ɛ.vi.dɑ̃s sə di pʁœv u dɔ.ne y.ne.vi.dɑ̃s sɛ sə ki sot o.zjø/', 'eh-vee-DAHⁿSS suh dee PRUHV oo do-NAY | ü-nay-vee-DAHⁿSS | seh suh kee soht oh-ZYEU',
    'Ton collègue écrit : « Il n’y a pas d’évidence que ce produit soit dangereux. » Que corriges-tu ?',
    'Evidence, ce sont des preuves ou des données : « aucune preuve ne montre que ». En français, une évidence est une chose qui saute aux yeux.', ['evidence']),
  sent(1178, 'L’étude met en évidence un lien entre la lumière et le déclin de ces insectes.', 'The study brings out a link between light and the decline of these insects.',
    '/le.tyd mɛ.tɑ̃.ne.vi.dɑ̃s œ̃ ljɛ̃ ɑ̃.tʁə la ly.mjɛʁ e lə de.klɛ̃ də se.zɛ̃.sɛkt/', 'lay-TÜD meh-tahⁿ-nay-vee-DAHⁿSS | uhⁿ LYEHⁿ | ahⁿ-truh la lü-MYEHR | ay luh day-KLEHⁿ duh say-zehⁿ-SEKT', ['evidence']),
];

/* ── ACT 12 · TON ARTICLE (.1180-.1194) ────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1180, 'Vous l’avez peut-être lu cette semaine.', 'You may have read it this week.',
    '/vu la.ve pø.tɛtʁ ly sɛt sə.mɛn/', 'voo la-VAY peu-TETR LÜ | set suh-MENN', ['article', 'accroche']),
  sent(1181, 'Le titre va plus loin que l’étude dont il parle.', 'The headline goes further than the study it is about.',
    '/lə titʁ va ply lwɛ̃ kə le.tyd dɔ̃.til paʁl/', 'luh TEETR va plü LWEHⁿ | kuh lay-TÜD | dohⁿ-teel PARL', ['article', 'titre'], FCVDR),
  sent(1182, 'Que dit vraiment l’étude ?', 'What does the study actually say?',
    '/kə di vʁɛ.mɑ̃ le.tyd/', 'kuh dee vreh-MAHⁿ lay-TÜD', ['article', 'question']),
  sent(1183, 'Il est trop tôt pour mesurer la part exacte de la lumière.', 'It is too early to measure the exact share of light.',
    '/i.lɛ tʁo to puʁ mə.zy.ʁe la paʁ ɛɡ.zakt də la ly.mjɛʁ/', 'ee-leh troh TOH | poor muh-zü-RAY | la par eg-ZAKT | duh la lü-MYEHR', ['article', 'certitude']),
  sent(1184, 'C’est moins spectaculaire, mais c’est plus exact.', 'It is less spectacular, but it is more accurate.',
    '/sɛ mwɛ̃ spɛk.ta.ky.lɛʁ mɛ sɛ ply.zɛɡ.zakt/', 'seh mwehⁿ spek-ta-kü-LEHR | meh seh plü-zeg-ZAKT', ['article', 'conclusion'], FCVDR),
  sent(1185, 'Les auteurs eux-mêmes restent prudents.', 'The authors themselves remain cautious.',
    '/le.zo.tœʁ ø mɛm ʁɛst pʁy.dɑ̃/', 'lay-zoh-TUHR eu-MEM | rest prü-DAHⁿ', ['article', 'certitude']),
  sent(1186, 'Voici ce que l’étude montre, et ce qu’elle ne montre pas.', 'Here is what the study shows, and what it does not show.',
    '/vwa.si sə kə le.tyd mɔ̃tʁ e sə kɛl nə mɔ̃tʁ pa/', 'vwa-SEE suh kuh lay-TÜD MOHⁿTR | ay suh kel nuh mohⁿtr PA', ['article', 'plan']),
  sent(1187, 'Faut-il pour autant s’inquiéter ? Pas vraiment.', 'Should we worry, then? Not really.',
    '/fo.til puʁ o.tɑ̃ sɛ̃.kje.te pa vʁɛ.mɑ̃/', 'foh-TEEL poor oh-TAHⁿ sehⁿ-kyay-TAY | pa vreh-MAHⁿ', ['article', 'lecteur']),
  sent(1188, 'Le bon titre serait plutôt celui-ci.', 'The right headline would rather be this one.',
    '/lə bɔ̃ titʁ sə.ʁɛ ply.to sə.lɥi.si/', 'luh bohⁿ TEETR | suh-reh plü-TOH suh-lwee-SEE', ['article', 'titre']),
  sent(1189, 'Rien ne permet encore de conclure.', 'Nothing yet allows a conclusion.',
    '/ʁjɛ̃ nə pɛʁ.mɛ.tɑ̃.kɔʁ də kɔ̃.klyʁ/', 'ryehⁿ nuh pehr-meh-tahⁿ-KOR | duh kohⁿ-KLÜR', ['article', 'certitude'], FCVDR),
  sent(1190, 'En attendant, voici ce qu’on peut dire avec certitude.', 'In the meantime, here is what can be said with certainty.',
    '/ɑ̃.na.tɑ̃.dɑ̃ vwa.si sə kɔ̃ pø diʁ a.vɛk sɛʁ.ti.tyd/', 'ahⁿ-na-tahⁿ-DAHⁿ | vwa-SEE suh kohⁿ peu DEER | a-vek sehr-tee-TÜD', ['article', 'certitude']),
  sent(1191, 'Pour faire simple : un petit effet, sur un petit groupe, à vérifier.', 'To keep it simple: a small effect, in a small group, to be checked.',
    '/puʁ fɛʁ sɛ̃pl œ̃ pə.ti.te.fɛ sy.ʁœ̃ pə.ti ɡʁup a ve.ʁi.fje/', 'poor fehr SEHⁿPL | uhⁿ puh-tee-tay-FEH | sü-ruhⁿ puh-tee GROOP | a vay-ree-FYAY', ['article', 'reformuler']),
  sent(1192, 'Ce chiffre mérite d’être replacé dans son contexte.', 'This figure deserves to be put back in context.',
    '/sə ʃifʁ me.ʁit dɛtʁ ʁə.pla.se dɑ̃ sɔ̃ kɔ̃.tɛkst/', 'suh SHEEFR may-REET | detr ruh-pla-SAY | dahⁿ sohⁿ kohⁿ-TEKST', ['article', 'chiffres']),
  sent(1193, 'Il s’agit d’une étude sérieuse, mais préliminaire.', 'It is a serious study, but a preliminary one.',
    '/il sa.ʒi dy.ne.tyd se.ʁjøz mɛ pʁe.li.mi.nɛʁ/', 'eel sa-ZHEE | dü-nay-TÜD say-RYEUZ | meh pray-lee-mee-NEHR', ['article', 'certitude']),
  sent(1194, 'Il faudra attendre d’autres études avant de changer nos habitudes.', 'We will have to wait for other studies before changing our habits.',
    '/il fo.dʁa a.tɑ̃dʁ do.tʁə.ze.tyd a.vɑ̃ də ʃɑ̃.ʒe no.za.bi.tyd/', 'eel foh-DRA a-TAHⁿDR | doh-truh-zay-TÜD | a-vahⁿ duh shahⁿ-ZHAY noh-za-bee-TÜD', ['article', 'conclusion']),
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
 *  Four long readings (B2: 200 to 350 words: acts 1, 5, 8 and the model of
 *  act 12) and the nine short « Dans un texte » paragraphs (60 to 120
 *  words) that close acts 3 to 11: a press release, a forum post, a
 *  magazine brief, a town hall notice, a union leaflet, a consumer box, a
 *  social media post, an institute’s release, a draft email. They live here
 *  so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the article under the inflated headline (étude imaginaire). 220 words. */
export const CHOCOLAT_TEXT =
  'Le chocolat noir rendrait-il plus intelligent ? C’est ce que laisse entendre le titre qui circule depuis mardi sur les réseaux : « Des chercheurs ont prouvé que le chocolat noir améliore la mémoire ». L’étude existe bien. Elle a été menée par une équipe de l’Institut Vespérine, à Lyon, auprès de soixante étudiants volontaires. Pendant quatre semaines, la moitié d’entre eux a mangé vingt grammes de chocolat noir par jour ; l’autre moitié, le groupe témoin, un biscuit sans cacao. À la fin, les deux groupes ont passé le même test de mémoire, noté sur cent. Le groupe « chocolat » a obtenu en moyenne 71 points, le groupe témoin 68 : trois points d’écart, sur un petit échantillon. Les auteurs eux-mêmes restent prudents. « Nos résultats suggèrent un effet modeste, mais la différence est à peine significative », explique la responsable de l’étude. Autrement dit, elle pourrait être due au hasard. Autre limite : les étudiants savaient ce qu’ils mangeaient, ce qui a pu jouer sur leurs efforts pendant le test. Enfin, l’étude est une prépublication : elle n’a pas encore été évaluée par d’autres chercheurs. « Il faudra la reproduire sur plusieurs centaines de personnes, en double aveugle, avant de conclure quoi que ce soit », ajoute-t-elle. Entre « une étude suggère un effet modeste » et « des chercheurs ont prouvé », il y a toute la distance qui sépare un laboratoire d’un titre.';

/** Act 5: how a study becomes knowledge (general, real). 244 words. */
export const SOLIDITE_TEXT =
  'Une étude qui fait les gros titres n’est qu’une étape. D’abord, les chercheurs rédigent un article et le soumettent à une revue scientifique. La revue l’envoie en général à deux ou trois spécialistes du domaine, qui le relisent, souvent de façon anonyme : c’est l’évaluation par les pairs. Ils peuvent demander des corrections, ou refuser l’article. Ce contrôle n’est pas une garantie de vérité : il vérifie surtout que la méthode tient la route. Depuis quelques années, beaucoup de chercheurs mettent aussi leurs travaux en ligne avant cette relecture. Ces prépublications permettent de partager vite un résultat, mais personne ne les a encore vérifiées. Un résultat « significatif », ensuite, n’est pas forcément un grand résultat. En statistique, le mot veut dire qu’un écart aussi net serait peu probable si le hasard était seul en jeu. Un effet minuscule peut être significatif si l’échantillon est immense, et un effet réel peut passer inaperçu dans une petite étude. C’est pourquoi on donne aussi une marge d’erreur. Surtout, un résultat isolé reste fragile tant qu’il n’a pas été reproduit. Quand d’autres équipes, avec d’autres participants, retrouvent le même effet, la confiance grandit. Les méta-analyses rassemblent ensuite des dizaines d’études sur une même question. Et quand, après des années, la grande majorité des spécialistes arrivent à la même conclusion, on parle de consensus scientifique : c’est le cas, par exemple, du réchauffement climatique causé par les activités humaines. Un consensus peut évoluer, mais un seul article ne suffit pas à le renverser.';

/** Act 8: a small lexicon of the digital world (general, real). 219 words. */
export const NUMERIQUE_TEXT =
  'Un algorithme, c’est une suite d’instructions qui permet de résoudre un problème, un peu comme une recette permet de réussir un plat. Votre application de cartes en utilise un pour trouver le trajet le plus court. Ce qu’on appelle aujourd’hui l’intelligence artificielle repose souvent sur l’apprentissage automatique : au lieu d’écrire toutes les règles à la main, on entraîne un modèle sur d’énormes quantités de données, et il apprend à y repérer des régularités. Ces données doivent être stockées quelque part : dans des centres de données, de grands bâtiments remplis de serveurs, qui consomment beaucoup d’électricité, en partie pour se refroidir. Au Québec, on parle d’infonuagique ; en France, on dit le plus souvent « le cloud ». Pour protéger ces données, on les chiffre : seul celui qui possède la clé peut les lire. Les spécialistes préfèrent d’ailleurs « chiffrer » à « crypter », très courant mais critiqué. Un logiciel libre, enfin, n’est pas forcément gratuit : il est libre parce que chacun peut l’utiliser, étudier son code, le modifier et le partager. Quant à l’empreinte carbone du numérique, elle ne vient pas seulement des centres de données : la fabrication de nos appareils en représente une grande part. Pour un téléphone, c’est même la plus grande part de son empreinte, loin devant son utilisation. Garder son appareil plus longtemps reste donc l’un des gestes les plus efficaces.';

/** Act 12: the model the learner imitates, a blog post (étude imaginaire). 231 words. */
export const MODELE_TEXT =
  'Éteindre la nuit sauve-t-il les papillons ? Vous l’avez peut-être lu cette semaine : « Les lampadaires tuent les papillons de nuit, selon une étude ». Le titre est séduisant. Il va pourtant plus loin que l’étude dont il parle. Que dit-elle vraiment ? Des chercheurs de l’Observatoire Noctua ont compté les papillons de nuit dans quarante communes du Jura, pendant deux étés. Là où l’éclairage public était coupé à minuit, ils en ont trouvé en moyenne un tiers de plus. C’est un écart net, mais il s’agit d’une corrélation : les communes qui éteignent leurs lampadaires sont aussi plus rurales, avec plus de haies et de prairies. Autrement dit, la lumière n’est peut-être pas la seule explication. Pour faire simple, l’étude montre que papillons et nuit noire vont de pair ; elle ne prouve pas que l’une entraîne l’autre. Faut-il pour autant tout rallumer ? Non. D’autres études, menées en laboratoire, vont dans le même sens et montrent que la lumière artificielle perturbe ces insectes. Il est donc probable que l’éclairage joue un rôle, même s’il est trop tôt pour mesurer la part exacte de la lumière. Les auteurs eux-mêmes restent prudents et proposent la prochaine étape : éteindre l’éclairage dans des communes tirées au sort, et les comparer à un groupe témoin. En attendant, le bon titre serait plutôt celui-ci : « Moins de lumière, plus de papillons ? Une piste sérieuse, à confirmer. » C’est moins spectaculaire, mais c’est plus exact.';

/** The nine « Dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  'Le communiqué d’un centre de services scolaire, à Laval (étude imaginaire). Complète chaque blanc avec : tirées au sort, groupe témoin, en aveugle, échantillon. « Cette année, quarante classes ont testé la méthode Lire-Vite. Vingt classes, (1) …, l’ont appliquée ; les vingt autres, qui formaient le (2) …, ont gardé la méthode habituelle. Les copies ont été corrigées (3) … : les correcteurs ignoraient de quelle classe elles venaient. Avec un (4) … de mille élèves, les résultats sont encourageants, mais ils devront être confirmés l’an prochain. »';

export const TEXTE_A4 =
  'Un message sur un forum de parents, à Lyon. Récris chaque passage entre crochets sans parler de cause. « J’ai lu que les enfants qui prennent un petit-déjeuner ont de meilleures notes. [Donc le petit-déjeuner rend plus intelligent.] Mon fils ne mange rien le matin : [c’est pour ça qu’il a de mauvaises notes.] Une autre maman répond que les familles qui prennent le petit-déjeuner ensemble sont peut-être aussi celles qui aident aux devoirs. [Elle a tort, les chiffres le prouvent.] »';

export const TEXTE_A5 =
  'Une brève dans un magazine (étude imaginaire). Classe chaque phrase : solide, fragile ou pas encore vérifiée. « (1) Une prépublication parue lundi affirme qu’une plante d’appartement purifie l’air d’une pièce en une heure. (2) L’expérience n’a été menée que dans une boîte en verre d’un mètre cube. (3) Aucune autre équipe ne l’a encore reproduite. (4) En revanche, de nombreuses études montrent qu’ouvrir les fenêtres renouvelle l’air d’une pièce. »';

export const TEXTE_A6 =
  'Le communiqué d’une mairie (chiffres imaginaires). Récris chaque passage entre crochets pour qu’il soit exact. « Le taux de tri des déchets est passé de 40 % à 50 % : [une hausse de 10 %]. Le ticket de bus passe de deux euros à deux euros quarante : [une hausse de 40 %]. Le nombre de voitures en centre-ville a baissé de moitié : [il a diminué de 100 %]. »';

export const TEXTE_A7 =
  'Le tract d’un syndicat, dans une entreprise de Liège (chiffres imaginaires). « La direction annonce un salaire moyen de 3 900 euros. C’est vrai, et c’est trompeur : cinq cadres dirigeants gagnent plus de 15 000 euros par mois. Le salaire médian, lui, est de 2 600 euros : la moitié d’entre nous gagne moins. Et quand la direction promet que les primes vont augmenter de 50 %, rappelons qu’elles passent de 20 à 30 euros. »';

export const TEXTE_A8 =
  'Un encadré dans un magazine de consommateurs, à Montréal. Complète avec : fabrication, données, chiffrés, libre, courriel. « Votre téléphone et vous. La plus grande part de l’empreinte carbone d’un téléphone vient de sa (1) …, pas de son utilisation : gardez-le longtemps. Choisissez des applications qui protègent vos (2) … et dont les messages sont (3) … de bout en bout. Préférez un logiciel (4) … si vous voulez savoir ce que fait son code. Enfin, méfiez-vous d’un (5) … qui vous demande votre mot de passe. »';

export const TEXTE_A9 =
  'Le message d’une vulgarisatrice sur un réseau social. Trouve la reformulation, l’image et sa limite. « Une année-lumière, ce n’est pas une durée, c’est une distance : celle que parcourt la lumière en un an, environ 9 500 milliards de kilomètres. Pour faire simple, imaginez une voiture qui roulerait sans s’arrêter à cent kilomètres à l’heure : il lui faudrait plus de dix millions d’années pour la parcourir. Autrement dit, c’est très loin. Bien sûr, l’image a ses limites : aucune route ne mène aux étoiles. »';

export const TEXTE_A10 =
  'Le communiqué de l’Observatoire Noctua (étude imaginaire), et le titre qu’en a tiré un site d’information. Trouve les mots du titre qui vont trop loin. « Titre : Les lampadaires tuent les papillons de nuit : c’est prouvé. Communiqué : Une étude menée dans quarante communes du Jura observe davantage de papillons là où l’éclairage est coupé à minuit. Les auteurs soulignent qu’il s’agit d’une corrélation et appellent à une expérience dans des communes tirées au sort. »';

export const TEXTE_A11 =
  'Le brouillon d’un courriel d’Emma, attachée de presse d’un laboratoire, à Ottawa. Corrige les six mots entre crochets. « Bonjour, [actuellement], notre étude montre un effet très [significatif] : la mémoire progresse de trente pour cent. C’est une [évidence] solide. Notre [physicien], le docteur Morin, sera disponible pour une [lecture] publique jeudi. Nous espérons [éventuellement] publier dans une grande revue. Merci de tout relire avant l’envoi de demain matin. »';

/** The DELF B2 exam-format radio item (quiz round 13), a separate text so
 *  no listening line is reprinted in its own question. */
export const EXAMEN_RADIO =
  'Une étude menée auprès de trois cents cyclistes suggère que le casque connecté réduit un peu les chutes graves. Mais attention : les cyclistes ont eux-mêmes choisi de porter ce casque. Ce sont peut-être simplement les plus prudents. Les chercheurs demandent donc une nouvelle étude, avec deux groupes tirés au sort.';
