// b2.28.l1 « Le français des soins » · the authored corpus, the imports, the
// long texts and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md in the
// VOCAB / WORKSHOP SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md (§1.4 and §2.3),
// under the B2 rules of b2/B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 28 of the B2 trail (Unit 5, specialist domains)
// ══════════════════════════════════════════════════════════════════════════
//
//   THE FRENCH OF A PATIENT, A CARER OR A RELATIVE, NEVER OF A CLINICIAN.
//   The unit of teaching is a phrase that does a job in a care situation:
//   describe, locate, date, grade, answer, ask, check, consent, speak for
//   someone, hear a cautious answer.
//
//     act 1   the vague patient against the precise one; the four questions
//             (où, depuis quand, comment, combien); le motif de consultation;
//             faire répéter; the task announced
//     act 2   onset, duration, frequency, location: depuis / il y a / ça fait
//             … que, par moments, de plus en plus, ça va et ça vient,
//             apparaître brusquement ou progressivement
//     act 3   the kind and the strength of a pain: lancinante, aiguë, en coup
//             de poignard, ça me lance, ça tire, une gêne; l'échelle de zéro
//             à dix; à l'effort / au repos; ce qui soulage, ce qui aggrave
//     act 4   history: antécédents personnels et familiaux, être opéré de,
//             être suivi pour, allergie against intolérance, traitements en
//             cours, habitudes, vaccins à jour
//     act 5   understanding the doctor (the natural-speed consultation):
//             écarter une hypothèse, passer une radio, une échographie, un
//             bilan sanguin, un arrêt de travail, orienter vers un spécialiste,
//             « qu'est-ce que vous entendez par »
//     act 6   the prescription and the pharmacy: au cours du repas, à jeun,
//             matin, midi et soir, en cas de besoin, en dehors des repas, en
//             vente libre, un générique, faire somnoler
//     act 7   reading a medicine's leaflet: the rubriques, contre-indiqué, un
//             effet indésirable, les précautions d'emploi, en cas d'oubli,
//             éventuel (faux ami), sans conservateur
//     act 8   the care pathway and the hospital letter: médecin traitant,
//             carte Vitale, mutuelle (France); carte d'assurance maladie,
//             811, médecin de famille, l'urgence (Québec); mutualité
//             (Belgique); assurance de base, 144 (Suisse)
//     act 9   asking and consenting: qu'est-ce que ça implique, les risques,
//             une alternative, un délai de réflexion, un deuxième avis,
//             donner son consentement, une décision éclairée
//     act 10  the doctor's word and the everyday word (céphalée, asthénie,
//             dyspnée, tachycardie, prurit, bénin); the faux amis (drogue,
//             physicien, sensible, blessure, préservatif)
//     act 11  speaking for a relative and hearing a cautious answer:
//             j'accompagne, il m'a demandé de, la personne de confiance; « les
//             résultats ne sont pas ceux que nous espérions », « il n'est pas
//             exclu que », « à ce stade », « ce n'est pas alarmant »
//     act 12  the written account for a new doctor (DELF B2 PE), the quiz
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 27 in A2   « Chez le médecin »: avoir mal à, the symptom nouns
//                       and verbs, « ça vous lance », « une douleur sourde »,
//                       « à jeun », « un comprimé matin et soir » (rows
//                       symptomes .194-.223, corps .023-.024, reused)
//     lesson 14 in A2   depuis and the tense it takes (recapped, not rebuilt)
//     lesson 35 in B1   empathy formulas (ça doit être dur, bon courage, je
//                       comprends que + subjonctif), rows reused
//     lesson 15 in B1   il se peut que, il est possible que (rows reused)
//     lesson 19 in B1   reported speech, applied when speaking for a relative
//     lesson 26 in B1   tu and vous (the doctor gets vous)
//     lesson 20 in B2   il se peut que, il n'est pas exclu que: the cautious
//                       formulas are HEARD here, never rebuilt
//     lesson 17 in B2   pour que / afin de in the letter (recycling round)
//     lessons 5, 6, 22  in B2, the subjonctif passé, subjunctive or
//                       indicative, cautious claims (recycling round)
//
//   NO UNGRAMMATICAL OR CALQUED SENTENCE IS EVER A ROW. Every wrong form
//   lives in a `commonErrors.wrong`, a `trapDrill.promptSound`, a scene
//   `break.wrong`, a groupDrill `free()` quotation or a quiz `errorSpot`.
//
//   NO MEDICAL ADVICE. The learner is a patient, a carer or a relative. What a
//   doctor or a pharmacist says to a CHARACTER stays in the story; the only
//   medicine named is FICTIONAL (« Tendalgine », a name made up for this
//   lesson) and every text that gives it a dose says so (« médicament fictif,
//   doses inventées »). Every person, clinic and hospital is invented.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked and Postgres probed READ-ONLY 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `soins` (« Les soins », domain santé, b1-b2), sub-theme « le
//     français des soins » already set in Postgres (read back 2026-09-30).
//  2. POSTGRES: fr.b1.soins .001-.150 (150), fr.b2.soins .001-.172 (172),
//     all published; NOTHING at or above 1000 at any level. The seed carries
//     twelve soins rows (b1 .001-.006, b2 .001-.006).
//  3. ID BLOCK: b2.28 owns `fr.b2.soins.1000`-`.1199` AND NOTHING ELSE. Used:
//     see ALL_ROWS (contiguous from .1000). Compare full ids, never numbers.
//     seed-checked only; DB id check done read-only (no collision).
//  4. HEADWORDS. The published health themes (soins, symptomes,
//     systeme-de-sante, rp-sante, bien-etre, corps) hold about 950
//     non-sentence rows in Postgres, most of them NOT in the seed (so `src()`
//     cannot name them). Every phrase row here was written to differ from
//     them after the article is dropped: « un effet indésirable » (not effet
//     secondaire), « contre-indiqué, une contre-indication » (a family, not
//     the bare noun), « un bilan sanguin » (not la prise de sang), « un
//     rendez-vous de contrôle » (not de suivi). The published A2 doctor rows
//     are IMPORTED, never re-authored.
//  5. APOSTROPHES. Every authored French string uses the typographic
//     apostrophe (’). Imported seed rows carry the straight one and are
//     therefore NEVER used in a scenario.
//  6. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR, a real
//     /n/ or /m/ written double so `hasPlainNasal` cannot fire:
//       semaine SMEHNN · gêne ZHEHNN · pénicilline pay-nee-see-LEENN ·
//       comme KOMM · certaines sehr-TEHNN · vitamine vee-ta-MEENN ·
//       sa-me pneumologue pnuh-mo-LOG (no nasal) · personne pehr-SONN
//     « même » is MEM, the house spelling. No U+203F tie anywhere.
//  7. FACTUAL CLAIMS FOR A FACT CHECK (every one is in a row or a text).
//     CHECKED 2026-09-30 (pre-review) against ameli.fr, service-public.fr,
//     quebec.ca, ramq.gouv.qc.ca, bag.admin.ch, ch.ch, socialsecurity.be,
//     inami, legifrance, OQLF: all hold; a, i, o, s hedged as noted.
//     a. France: a patient declares a médecin traitant to the Assurance
//        maladie; consulting outside that pathway is reimbursed less
//        (le parcours de soins coordonnés).                       (row .1115)
//        HEDGED: the médecin traitant may be a specialist, « le plus souvent
//        un généraliste »; some specialists are direct access (gynéco, ophtalmo).
//     b. France: the carte Vitale lets the doctor send the claim
//        electronically, so reimbursement comes faster.           (sheet)
//     c. France: a mutuelle (complémentaire santé) reimburses part of what
//        the Assurance maladie does not cover.                    (row .1117)
//     d. France: 15 is the SAMU, 112 the European emergency number.(sheet)
//     e. Québec: the RAMQ (Régie de l'assurance maladie du Québec) issues
//        the carte d'assurance maladie, shown at each visit.     (row .1116)
//     f. Québec: 811 (Info-Santé) puts you through to a nurse, 24 hours a
//        day, 7 days a week; 911 for an emergency.                 (row .1118)
//     g. Québec: « aller à l'urgence » (singular) is the usual phrasing;
//        France says « aller aux urgences ».                     (row .1124)
//     h. Québec: « médecin de famille »; France: « médecin traitant »;
//        « physiothérapie » (Québec) and « kinésithérapie » (France).
//     i. Belgium: being covered means joining (s'affilier à) a mutualité;
//        112 is the emergency number.                             (row .1121)
//        HEDGED: or the public CAAMI (tapTable detail and sheet say so).
//     j. Switzerland: basic health insurance (assurance de base, LAMal) is
//        compulsory; 144 is the ambulance number.        (rows .1119, .1120)
//     k. France: « la personne de confiance » is a person a patient may
//        designate to accompany them and be consulted if they cannot
//        express their wishes.                                     (row .1166)
//     l. In medicine « aigu » also means acute (sudden, recent). (row .1030)
//     m. A stress fracture (fracture de fatigue) is a small crack in a bone
//        caused by repeated strain.                                (row .1067)
//     n. A knee ultrasound needs no fasting; some abdominal ultrasounds do.
//                                                            (rows .1070-.1071)
//     o. An allergy is a reaction of the body that can be serious; an
//        intolerance is not an allergy.                            (row .1062)
//        HEDGED: an allergy is a reaction of the IMMUNE SYSTEM (ameli).
//     p. Natural products and vitamins can interact with a medicine.
//                                                           (ANTECEDENTS_TEXT)
//     q. Some illnesses are more frequent within one family.
//                                                           (ANTECEDENTS_TEXT)
//     r. A patient may withdraw consent at any time before a procedure.
//                                                  (row .1139, TEXTE_A9)
//     s. A doctor needs the patient's agreement to send their file to
//        another doctor.                                         (TEXTE_A8)
//        In the text the copy goes to the family, with his signed letter;
//        consent is the general rule in France and Québec (CMQ).
//     t. Tachycardie = the heart beating too fast; céphalée = headache;
//        asthénie = marked fatigue; dyspnée = breathlessness; prurit =
//        itching; bénin = not serious.                     (rows .1148-.1157)
//     u. « Une drogue » in current French is a narcotic, not a medicine; « un
//        physicien » is a physicist.                        (rows .1159-.1160)
//     v. Standard French leaflet phrasing (« Comme tous les médicaments… »,
//        « Tenir hors de la vue et de la portée des enfants », « ne prenez pas
//        de dose double pour compenser »), quoted on a FICTIONAL medicine.
//     w. « Référer » (Québec) is NOT taught either way; « prescription » for
//        « ordonnance » is not taught either way. Left out on purpose.
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
  id: 'b2.28',
  seq: 28,
  title: 'Medical French for Care Situations',
  sub: 'Le français des soins',
  canDo: 'Can describe symptoms precisely (onset, duration, location, type, intensity, triggers), give a medical history, understand a doctor, a pharmacist, a leaflet and a hospital letter, ask the questions that informed consent needs, speak for a relative and follow cautious or difficult news, and write a clear account of a relative’s health problem for a new doctor',
  prereqUnitIds: ['a2.28', 'b1.35', 'b2.20'],
} as const;

export const LESSON_ID = 'b2.28.l1';
export const THEME = 'soins';
export const LEVEL = 'b2' as const;

/** ONE block. fr.b1 and fr.b2 .001-.172 are published; b2.28 owns 1000-1199. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 and B2 labels are French, from the plan (a B1 or B2 unit id's number
 *  IS its trail position). A-level units resolve through `unitRef`, which
 *  reads the shipped seq: a2.28 is « lesson 27 in A2 », a2.18 « lesson 14
 *  in A2 », the form the app's unit-labels test checks.
 * ══════════════════════════════════════════════════════════════════════════ */

export const MEDECIN_UNIT = 'a2.28';        // lesson 27 in A2
export const DEPUIS_UNIT = 'a2.18';         // lesson 14 in A2
export const POLITESSE_UNIT = 'b1.09';
export const DECL_UNIT = 'b1.15';
export const DISCOURS_UNIT = 'b1.19';
export const TUVOUS_UNIT = 'b1.26';
export const EMOTIONS_UNIT = 'b1.35';
export const LECTURE_UNIT = 'b1.37';
export const COURRIELS_UNIT = 'b1.39';
export const SUBJ_PASSE_UNIT = 'b2.05';
export const MODES_UNIT = 'b2.06';
export const BUT_UNIT = 'b2.17';
export const IMPERS_UNIT = 'b2.20';
export const STYLE_UNIT = 'b2.22';
export const REUNIONS_UNIT = 'b2.26';
export const SCIENCE_UNIT = 'b2.29';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}
/** English surfaces (grader notes, briefEn). */
export function refEn(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `lesson ${Number(m[2])} in ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const MEDECIN_REF = refFr(MEDECIN_UNIT);     // lesson 27 in A2
export const DEPUIS_REF = refFr(DEPUIS_UNIT);       // lesson 14 in A2
export const DECL_REF = refFr(DECL_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
export const TUVOUS_REF = refFr(TUVOUS_UNIT);
export const EMOTIONS_REF = refFr(EMOTIONS_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);
export const COURRIELS_REF = refFr(COURRIELS_UNIT);
export const SUBJ_PASSE_REF = refFr(SUBJ_PASSE_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const BUT_REF = refFr(BUT_UNIT);
export const IMPERS_REF = refFr(IMPERS_UNIT);
export const STYLE_REF = refFr(STYLE_UNIT);
export const REUNIONS_REF = refFr(REUNIONS_UNIT);
export const SCIENCE_REF = refFr(SCIENCE_UNIT);
export const MEDECIN_REF_EN = refEn(MEDECIN_UNIT);
export const TUVOUS_REF_EN = refEn(TUVOUS_UNIT);
export const COURRIELS_REF_EN = refEn(COURRIELS_UNIT);
export const IMPERS_REF_EN = refEn(IMPERS_UNIT);
export const EMOTIONS_REF_EN = refEn(EMOTIONS_UNIT);

/** Neighbour reframes, re-exported rather than retyped. */
export { REFRAME as B135_REFRAME, REFRAME_EN as B135_REFRAME_EN } from '../b1/emotions-corpus.ts';
export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from '../b1/strategies-lecture-corpus.ts';
export { REFRAME as B139_REFRAME, REFRAME_EN as B139_REFRAME_EN } from '../b1/courriels-lettres-corpus.ts';
export { REFRAME as B126_REFRAME, REFRAME_EN as B126_REFRAME_EN } from '../b1/tu-ou-vous-corpus.ts';
export { REFRAME as B119_REFRAME, REFRAME_EN as B119_REFRAME_EN } from '../b1/discours-indirect-corpus.ts';
export { REFRAME as B220_REFRAME, REFRAME_EN as B220_REFRAME_EN } from './tournures-impersonnelles-corpus.ts';
export { REFRAME as B217_REFRAME, REFRAME_EN as B217_REFRAME_EN } from './expression-but-corpus.ts';
export { REFRAME as B205_REFRAME, REFRAME_EN as B205_REFRAME_EN } from './subjonctif-passe-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B222_REFRAME, REFRAME_EN as B222_REFRAME_EN } from './style-academique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE CARNET: a small ochre notebook with a pencil, in every chapter image.
 *  The patient writes before the visit (acts 1 to 4: where, since when, how,
 *  how much, what came before), writes during it (acts 5 to 7: what the
 *  doctor, the pharmacist and the leaflet say, and every word to ask about),
 *  and writes for someone else (acts 8 to 12: the system, the consent, the
 *  relative, the letter). Describe precisely; ask until you understand.
 *
 *  It is NOT « learn the doctor's words » (act 10 says the everyday word is
 *  enough, and that you may ask for it), and NOT « follow the doctor's
 *  orders » (act 9: you ask, you may wait, you may say no).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Décris avec précision, et demande jusqu’à comprendre.';
export const REFRAME_EN = 'Describe precisely, and ask until you understand.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Apprends les mots du médecin.',
    why: 'False where act 10 has to hold: the patient never needs « céphalée » or « dyspnée » to be understood, and the lesson teaches asking for the everyday word. It also makes the learner a clinician, which the brief forbids.',
  },
  {
    text: 'Chez le médecin, dis où tu as mal.',
    why: 'Lesson 27 in A2’s point (avoir mal à), and too small: a B2 patient dates, grades and qualifies a pain, gives a history, reads a leaflet and consents. Reusing it would hide everything this lesson adds.',
  },
  {
    text: 'Écoute bien le médecin.',
    why: 'Passive, and false in acts 9 and 11: the learner is taught to interrupt politely, to ask what a word means, to ask for a delay and a second opinion. Listening is half of the job.',
  },
  {
    text: 'La précision sauve des vies.',
    why: 'A slogan with a medical promise in it, which the lesson must not make; and it says nothing about the asking half.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from the seed (seedPlusPacks) on 2026-09-30 and its
 *  French is in the trailing comment. None is used in a scenario (straight
 *  apostrophes). The lesson file checks each one at load.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a2.symptomes.194',                    // Qu'est-ce qui vous amène ?
    'fr.a2.symptomes.195',                    // Où avez-vous mal exactement ?
    'fr.a2.symptomes.218',                    // Je ne connais pas le mot.
    'fr.a2.symptomes.222',                    // C'est difficile à expliquer.
  ],
  act2: [
    'fr.a2.corps.024',                        // Ça a commencé il y a trois jours.
    'fr.a2.corps.023',                        // La douleur descend dans la jambe.
    'fr.a2.symptomes.201',                    // Vous avez mal la nuit aussi ?
    'fr.a2.symptomes.006',                    // Je tousse depuis trois jours.  (flashcard only)
  ],
  act3: [
    'fr.a2.symptomes.220',                    // C'est plutôt une douleur sourde.
    'fr.a2.symptomes.196',                    // Ça vous lance ou ça vous brûle ?
    'fr.a2.symptomes.219',                    // C'est comme une brûlure.
    'fr.a2.symptomes.200',                    // Ça fait mal quand j'appuie ?
  ],
  act4: [
    'fr.a2.symptomes.198',                    // Vous êtes allergique à quelque chose ?
    'fr.a2.symptomes.199',                    // Vous prenez d'autres médicaments ?
    'fr.a1.corps.234',                        // Elle a une allergie aux arachides.  (sentence, review)
    'fr.a1.corps.291',                        // Elle a une intolérance au lactose depuis son enfance.  (dictation)
  ],
  act5: [
    'fr.b1.strategies-de-comprehension.1336', // si je comprends bien
    'fr.b1.opinions-et-avis.1233',            // Le médecin veut que je fasse une prise de sang.
    'fr.a2.symptomes.217',                    // Si ça ne passe pas, revenez me voir.
    'fr.a2.symptomes.205',                    // Je vous prescris un traitement.
  ],
  act6: [
    'fr.a2.symptomes.211',                    // À jeun, une demi-heure avant de manger.
    'fr.a2.symptomes.208',                    // Un comprimé matin et soir.
    'fr.a2.symptomes.209',                    // Trois fois par jour, avant les repas.
    'fr.a2.symptomes.215',                    // C'est sur ordonnance.
    'fr.a2.symptomes.216',                    // Vous préférez le générique ?
    'fr.a2.symptomes.223',                    // C'est combien de fois par jour ?
    'fr.b2.soins.004',                        // Il est essentiel que le patient suive scrupuleusement la posologie indiquée.  (sentence, dictation)
  ],
  act7: [
    'fr.b2.soins.003',                        // Bien que le traitement soit efficace, il provoque des effets secondaires désagréables.  (sentence, dictation)
    'fr.a1.corps.289',                        // Ce médicament peut provoquer des étourdissements.  (dictation)
  ],
  act8: [
    'fr.a2.systeme-de-sante.005',             // la carte d'assurance maladie
    'fr.a2.systeme-de-sante.015',             // la clinique sans rendez-vous
    'fr.b2.systeme-de-sante.009',             // la mutuelle
    'fr.b2.systeme-de-sante.008',             // le remboursement
    'fr.b2.systeme-de-sante.006',             // le ticket modérateur
    'fr.a1.corps.284',                        // Nous suivons les conseils du médecin traitant.  (dictation)
  ],
  act9: [
    'fr.a1.corps.272',                        // Le patient signe le formulaire de consentement.  (dictation)
  ],
  act10: [
    'fr.a1.corps.280',                        // Mon grand-père souffre d'hypertension depuis longtemps.  (dictation)
    'fr.a1.corps.241',                        // Nous nettoyons la blessure avec de l'eau et du savon.  (sentence, review)
    'fr.a2.corps.004',                        // Ses yeux et ses oreilles sont très sensibles au bruit.  (dictation)
  ],
  act11: [
    'fr.b1.opinions-et-avis.1280',            // il se peut que
    'fr.b1.opinions-et-avis.1279',            // il est possible que
    'fr.b2.emotions.1249',                    // Il se peut qu'il se soit cassé le poignet en tombant.
    'fr.b1.emotions.1149',                    // ça doit être dur
    'fr.b1.emotions.1156',                    // bon courage
    'fr.b1.emotions.1170',                    // Je comprends que tu sois déçue.
    'fr.b2.affaires.1270',                    // Je comprends votre inquiétude.
  ],
  act12: [
    'fr.a1.salutations.107',                  // Bon rétablissement  (voiceflash, review)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: string[] = [
  'fr.a1.corps.234', 'fr.a1.corps.291', 'fr.b2.soins.004', 'fr.b2.soins.003', 'fr.a1.corps.289',
  'fr.a1.corps.284', 'fr.a1.corps.272', 'fr.a1.corps.280', 'fr.a1.corps.241', 'fr.a2.corps.004',
  'fr.a1.salutations.107',
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = [
  ...NOT_DECK_ABLE.filter((id) => id !== 'fr.a1.salutations.107'),
  'fr.a2.symptomes.006',
  'fr.a2.systeme-de-sante.005', 'fr.a2.systeme-de-sante.015', 'fr.b2.systeme-de-sante.009',
  'fr.b2.systeme-de-sante.008', 'fr.b2.systeme-de-sante.006',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Two kinds: a PHRASE row (the formula a patient, a doctor or a leaflet
 *  uses) and SENTENCE rows that put it in a care situation. Listening lines
 *  are sentence rows, so the ear mission and the deck quote the same French.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
type Reg = NonNullable<Item['register']>;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const GP = ['francais-soins'];

/** A phrase: the formula and what it does in a care situation. */
const ph = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string, register: Reg = 'courant'): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['formule', ...tags], drills: FCVR, version: 1, register, grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: 'courant', grammarPoints: GP, ...extra,
});

/** A rule card: `prompt` is the question, `notes` the answer. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE PATIENT PRÉCIS ─────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'J’ai mal au genou droit depuis trois semaines, surtout quand je descends les escaliers.', 'My right knee has been hurting for three weeks, especially when I go down the stairs.', '/ʒe mal o ʒə.nu dʁwa də.pɥi tʁwa sə.mɛn syʁ.tu kɑ̃ ʒə de.sɑ̃ le.zɛs.ka.lje/', 'zhay MAL oh zhuh-noo DRWA | duh-pwee trwa SMEHNN | sür-too kahⁿ zhuh day-sahⁿ lay-zehs-ka-LYAY', ['scene', 'precision'], FCVDR),
  ph(1001, 'décrire ses symptômes avec précision', 'to describe your symptoms precisely', '/de.kʁiʁ se sɛ̃p.tom a.vɛk pʁe.si.zjɔ̃/', 'day-KREER say sehⁿp-TOHM | a-vehk pray-see-ZYOHⁿ', ['precision'], 'Où, depuis quand, comment, combien : le médecin gagne du temps.'),
  ph(1002, 'le motif de consultation', 'the reason for the visit', '/lə mɔ.tif də kɔ̃.syl.ta.sjɔ̃/', 'luh mo-TEEF | duh kohⁿ-sül-ta-SYOHⁿ', ['precision'], 'Ce qui t’amène, dit en une phrase.'),
  sent(1003, 'Je consulte pour une douleur au genou.', 'I am here about a pain in my knee.', '/ʒə kɔ̃.sylt puʁ yn du.lœʁ o ʒə.nu/', 'zhuh kohⁿ-SÜLT | poor ün doo-LUHR oh zhuh-NOO', ['precision'], FCVDR),
  sent(1004, REFRAME, REFRAME_EN, '/de.kʁi a.vɛk pʁe.si.zjɔ̃ e də.mɑ̃d ʒys.ka kɔ̃.pʁɑ̃dʁ/', 'day-KREE a-vehk pray-see-ZYOHⁿ | ay duh-MAHⁿD | zhüs-ka kohⁿ-PRAHⁿDR', ['rule', 'reframe'], ['flashcard'],
    rule('Chez le médecin, quelles sont tes deux tâches ?', 'Décrire avec précision ce que tu ressens, puis demander jusqu’à comprendre ce qu’on te dit.')),
  sent(1005, 'Plus ta description est précise, plus le médecin gagne du temps.', 'The more precise your description, the more time the doctor saves.', '/ply ta de.skʁip.sjɔ̃ ɛ pʁe.siz ply lə med.sɛ̃ gaɲ dy tɑ̃/', 'plü ta day-skreep-SYOHⁿ | eh pray-SEEZ | plü luh mayd-SEHⁿ | gahny dü TAHⁿ', ['precision']),
  sent(1006, 'J’ai noté mes symptômes avant de venir.', 'I wrote down my symptoms before coming.', '/ʒe nɔ.te me sɛ̃p.tom a.vɑ̃ d(ə) və.niʁ/', 'zhay no-TAY may sehⁿp-TOHM | a-vahⁿ duh vuh-NEER', ['precision'], FCVDR),
  sent(1007, 'Excusez-moi, je n’ai pas compris ce mot : vous pouvez le dire autrement ?', 'Sorry, I did not understand that word: could you say it another way?', '/ɛks.ky.ze.mwa ʒə ne pa kɔ̃.pʁi sə mo vu pu.ve lə diʁ o.tʁə.mɑ̃/', 'ehks-kü-zay-MWA | zhuh nay pa kohⁿ-PREE suh MOH | voo poo-vay luh DEER oh-truh-MAHⁿ', ['demander']),
  ph(1008, 'faire répéter quelqu’un', 'to ask someone to say it again', '/fɛʁ ʁe.pe.te kɛl.kœ̃/', 'fehr ray-pay-TAY | kehl-KUHⁿ', ['demander'], 'Demander à quelqu’un de redire ce qu’il vient de dire.'),
  sent(1009, 'Pouvez-vous m’expliquer ce que ça veut dire, en termes simples ?', 'Could you explain what that means, in simple terms?', '/pu.ve.vu mɛks.pli.ke sə kə sa vø diʁ ɑ̃ tɛʁm sɛ̃pl/', 'poo-vay-VOO | mehks-plee-KAY | suh kuh sa vuh DEER | ahⁿ tehrm SEHⁿPL', ['demander'], FCVDR),
  sent(1010, 'Racontez-moi depuis le début.', 'Tell me from the beginning.', '/ʁa.kɔ̃.te.mwa də.pɥi lə de.by/', 'ra-kohⁿ-tay-MWA | duh-pwee luh day-BÜ', ['precision']),
  sent(1011, 'Mieux vaut faire répéter une phrase que repartir avec un doute.', 'Better to have a sentence repeated than to leave with a doubt.', '/mjø vo fɛʁ ʁe.pe.te yn fʁaz kə ʁə.paʁ.tiʁ a.vɛk œ̃ dut/', 'myuh voh fehr ray-pay-TAY ün FRAZ | kuh ruh-par-TEER a-vehk uhⁿ DOOT', ['demander']),
];

/* ── ACT 2 · OÙ, QUAND, DEPUIS QUAND ──────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1012, 'Bonsoir, je vous écoute. Qu’est-ce qui se passe ?', 'Good evening, I am listening. What is going on?', '/bɔ̃.swaʁ ʒə vu.ze.kut kɛs.ki sə pas/', 'bohⁿ-SWAR | zhuh voo-zay-KOOT | kehs-kee suh PASS', ['ecoute', 'quebec']),
  sent(1013, 'Ça a commencé il y a trois semaines, après une course à pied.', 'It started three weeks ago, after a run.', '/sa a kɔ.mɑ̃.se il.ja tʁwa sə.mɛn a.pʁɛ yn kuʁs a pje/', 'sa a ko-mahⁿ-SAY | eel-ya trwa SMEHNN | a-preh ün koors a PYAY', ['temps', 'ecoute'], FCVDR),
  sent(1014, 'Au début, j’avais mal par moments, seulement à l’effort.', 'At first it hurt now and then, only when I was exerting myself.', '/o de.by ʒa.vɛ mal paʁ mɔ.mɑ̃ sœl.mɑ̃ a le.fɔʁ/', 'oh day-BÜ | zha-veh MAL par mo-MAHⁿ | suhl-mahⁿ a lay-FOR', ['temps', 'ecoute']),
  sent(1015, 'Depuis quelques jours, la douleur est de plus en plus fréquente.', 'For the last few days, the pain has been more and more frequent.', '/də.pɥi kɛl.kə ʒuʁ la du.lœʁ ɛ də ply.zɑ̃ ply fʁe.kɑ̃t/', 'duh-pwee kehl-kuh ZHOOR | la doo-LUHR eh | duh plü-zahⁿ plü fray-KAHⁿT', ['temps', 'ecoute'], FCVDR),
  sent(1016, 'Et cette nuit, je n’ai presque pas dormi.', 'And last night I hardly slept.', '/e sɛt nɥi ʒə ne pʁɛsk pa dɔʁ.mi/', 'ay seht NWEE | zhuh nay prehsk pa dor-MEE', ['temps', 'ecoute']),
  sent(1017, 'Où se situe la douleur, exactement ?', 'Where exactly is the pain?', '/u sə si.tɥ la du.lœʁ ɛg.zak.tə.mɑ̃/', 'oo suh see-TÜ la doo-LUHR | ehg-zak-tuh-MAHⁿ', ['lieu', 'ecoute']),
  sent(1018, 'Juste sous la rotule, sur le côté extérieur.', 'Just below the kneecap, on the outer side.', '/ʒyst su la ʁɔ.tyl syʁ lə ko.te ɛks.te.ʁjœʁ/', 'zhüst soo la ro-TÜL | sür luh koh-tay ehks-tay-RYUHR', ['lieu', 'ecoute'], FCVDR),
  sent(1019, 'Est-ce que la douleur est apparue brusquement ou progressivement ?', 'Did the pain come on suddenly or gradually?', '/ɛs.kə la du.lœʁ ɛ.ta.pa.ʁy bʁysk.mɑ̃ u pʁɔ.gʁɛ.siv.mɑ̃/', 'ehs-kuh la doo-LUHR | eh-ta-pa-RÜ | brüsk-MAHⁿ | oo pro-greh-seev-MAHⁿ', ['temps', 'ecoute']),
  sent(1020, 'Progressivement. Et maintenant, ça va et ça vient.', 'Gradually. And now it comes and goes.', '/pʁɔ.gʁɛ.siv.mɑ̃ e mɛ̃t.nɑ̃ sa va e sa vjɛ̃/', 'pro-greh-seev-MAHⁿ | ay mehⁿt-NAHⁿ | sa VA ay sa VYEHⁿ', ['temps', 'ecoute'], FCVDR),
  sent(1021, 'C’est pire le matin au réveil, puis ça se calme.', 'It is worse in the morning when I wake up, then it settles.', '/sɛ piʁ lə ma.tɛ̃ o ʁe.vɛj pɥi sa sə kalm/', 'seh PEER | luh ma-tehⁿ oh ray-VEHY | pwee sa suh KALM', ['temps', 'ecoute']),
  sent(1022, 'Le genou est un peu enflé le soir.', 'The knee is a little swollen in the evening.', '/lə ʒə.nu ɛ.tœ̃ pø ɑ̃.fle lə swaʁ/', 'luh zhuh-NOO | eh-tuhⁿ puh ahⁿ-FLAY | luh SWAR', ['lieu', 'ecoute']),
  sent(1023, 'Ça fait trois semaines que j’ai mal.', 'I have been in pain for three weeks.', '/sa fɛ tʁwa sə.mɛn kə ʒe mal/', 'sa feh trwa SMEHNN | kuh zhay MAL', ['temps'], FCVDR),
  ph(1024, 'par moments', 'at times, now and then', '/paʁ mɔ.mɑ̃/', 'par mo-MAHⁿ', ['temps'], 'Pas tout le temps : de temps en temps.'),
  ph(1025, 'apparaître brusquement ou progressivement', 'to come on suddenly or gradually', '/a.pa.ʁɛtʁ bʁysk.mɑ̃ u pʁɔ.gʁɛ.siv.mɑ̃/', 'a-pa-REHTR | brüsk-MAHⁿ | oo pro-greh-seev-MAHⁿ', ['temps'], 'Au passé composé avec être : la douleur est apparue.'),
  ph(1026, 'ça va et ça vient', 'it comes and goes', '/sa va e sa vjɛ̃/', 'sa VA ay sa VYEHⁿ', ['temps'], 'Une douleur qui part, puis revient.'),
  ph(1027, 'sur le côté, au-dessus, juste en dessous', 'on the side, above, just below', '/syʁ lə ko.te o.də.sy ʒyst ɑ̃ də.su/', 'sür luh koh-TAY | oh-duh-SÜ | zhüst ahⁿ duh-SOO', ['lieu'], 'Pour placer la douleur au centimètre près.'),
  sent(1028, 'Depuis dit que ça dure encore ; il y a dit quand ça a commencé.', 'Depuis says it is still going on; il y a says when it started.', '/də.pɥi di kə sa dyʁ ɑ̃.kɔʁ il.ja di kɑ̃ sa a kɔ.mɑ̃.se/', 'duh-PWEE dee kuh sa dür ahⁿ-KOR | eel-YA dee kahⁿ sa a ko-mahⁿ-SAY', ['rule', 'temps'], ['flashcard'],
    rule('Tu as mal depuis trois semaines ou il y a trois semaines ?', 'J’ai mal depuis trois semaines : la durée. Ça a commencé il y a trois semaines : le début.')),
];

/* ── ACT 3 · QUELLE DOULEUR, ET COMBIEN ───────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  ph(1029, 'une douleur lancinante', 'a throbbing pain', '/yn du.lœʁ lɑ̃.si.nɑ̃t/', 'ün doo-LUHR | lahⁿ-see-NAHⁿT', ['douleur'], 'Elle revient par élancements, comme un pouls.'),
  ph(1030, 'une douleur aiguë', 'a sharp pain', '/yn du.lœʁ e.gy/', 'ün doo-LUHR ay-GÜ', ['douleur'], 'Vive et nette. En médecine, aigu veut aussi dire récent et soudain.'),
  ph(1031, 'ça me lance', 'it throbs, it shoots', '/sa mə lɑ̃s/', 'sa muh LAHⁿSS', ['douleur'], 'Le patient le dit ; le médecin demande : ça vous lance ?'),
  ph(1032, 'une douleur en coup de poignard', 'a stabbing pain', '/yn du.lœʁ ɑ̃ ku d(ə) pwa.ɲaʁ/', 'ün doo-LUHR | ahⁿ koo duh pwa-NYAR', ['douleur']),
  ph(1033, 'ça tire', 'it pulls, it feels tight', '/sa tiʁ/', 'sa TEER', ['douleur'], 'Une tension, comme un élastique trop tendu.'),
  ph(1034, 'sur une échelle de zéro à dix', 'on a scale of zero to ten', '/syʁ yn e.ʃɛl də ze.ʁo a dis/', 'sür ün ay-SHEHL | duh zay-roh a DEESS', ['intensite']),
  sent(1035, 'Sur une échelle de zéro à dix, je dirais six.', 'On a scale of zero to ten, I would say six.', '/syʁ yn e.ʃɛl də ze.ʁo a dis ʒə di.ʁɛ sis/', 'sür ün ay-SHEHL duh zay-roh a DEESS | zhuh dee-reh SEESS', ['intensite'], FCVDR),
  sent(1036, 'La nuit, ça monte à huit.', 'At night it goes up to eight.', '/la nɥi sa mɔ̃t a ɥit/', 'la NWEE | sa mohⁿt a WEET', ['intensite']),
  ph(1037, 'supportable, insupportable', 'bearable, unbearable', '/sy.pɔʁ.tabl ɛ̃.sy.pɔʁ.tabl/', 'sü-por-TABL | ehⁿ-sü-por-TABL', ['intensite']),
  ph(1038, 'à l’effort, au repos', 'on exertion, at rest', '/a le.fɔʁ o ʁə.po/', 'a lay-FOR | oh ruh-POH', ['declencheur']),
  sent(1039, 'J’ai mal à l’effort, mais pas au repos.', 'It hurts when I exert myself, but not at rest.', '/ʒe mal a le.fɔʁ mɛ pa.zo ʁə.po/', 'zhay MAL a lay-FOR | meh pa-zoh ruh-POH', ['declencheur'], FCVDR),
  sent(1040, 'Ça empire quand je plie le genou.', 'It gets worse when I bend my knee.', '/sa ɑ̃.piʁ kɑ̃ ʒə pli lə ʒə.nu/', 'sa ahⁿ-PEER | kahⁿ zhuh plee luh zhuh-NOO', ['declencheur']),
  sent(1041, 'La glace me soulage un peu.', 'Ice eases it a little.', '/la glas mə su.laʒ œ̃ pø/', 'la GLASS | muh soo-lazh uhⁿ PUH', ['declencheur']),
  sent(1042, 'Qu’est-ce qui soulage la douleur, et qu’est-ce qui l’aggrave ?', 'What eases the pain, and what makes it worse?', '/kɛs.ki su.laʒ la du.lœʁ e kɛs.ki la.gʁav/', 'kehs-kee soo-LAZH la doo-LUHR | ay kehs-kee la-GRAV', ['declencheur']),
  sent(1043, 'C’est plus une gêne qu’une vraie douleur.', 'It is more of a discomfort than real pain.', '/sɛ ply.zyn ʒɛn kyn vʁɛ du.lœʁ/', 'seh plü-zün ZHEHNN | kün vreh doo-LUHR', ['douleur']),
  sent(1044, 'Ça me lance dans tout le genou.', 'It throbs right through my knee.', '/sa mə lɑ̃s dɑ̃ tu lə ʒə.nu/', 'sa muh LAHⁿSS | dahⁿ too luh zhuh-NOO', ['douleur'], FCVDR),
  sent(1045, 'J’ai eu une douleur aiguë, comme un coup de poignard.', 'I had a sharp pain, like a stab.', '/ʒe y yn du.lœʁ e.gy kɔm œ̃ ku d(ə) pwa.ɲaʁ/', 'zhay ü ün doo-LUHR ay-GÜ | komm uhⁿ koo duh pwa-NYAR', ['douleur'], FCVDR),
  sent(1046, 'Une douleur se décrit par son type, sa force et ce qui la déclenche.', 'A pain is described by its type, its strength and what sets it off.', '/yn du.lœʁ sə de.kʁi paʁ sɔ̃ tip sa fɔʁs e sə ki la de.klɑ̃ʃ/', 'ün doo-LUHR suh day-KREE | par sohⁿ TEEP | sa FORSS | ay suh kee la day-KLAHⁿSH', ['rule', 'douleur'], ['flashcard'],
    rule('Pour décrire une douleur, que donnes-tu ?', 'Son type (lancinante, aiguë, sourde), sa force (de zéro à dix) et ce qui la déclenche ou la soulage.')),
];

/* ── ACT 4 · TES ANTÉCÉDENTS ──────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  ph(1047, 'les antécédents personnels et familiaux', 'personal and family medical history', '/le.zɑ̃.te.se.dɑ̃ pɛʁ.sɔ.nɛl e fa.mi.ljo/', 'lay-zahⁿ-tay-say-DAHⁿ | pehr-so-NEHL ay fa-mee-LYOH', ['antecedents'], 'Ce que tu as eu, et ce qu’on trouve dans ta famille.'),
  sent(1048, 'Je n’ai pas d’antécédents particuliers.', 'I have no particular medical history.', '/ʒə ne pa dɑ̃.te.se.dɑ̃ paʁ.ti.ky.lje/', 'zhuh nay pa dahⁿ-tay-say-DAHⁿ | par-tee-kü-LYAY', ['antecedents'], FCVDR),
  sent(1049, 'On m’a enlevé l’appendice à vingt ans.', 'I had my appendix removed at twenty.', '/ɔ̃ ma ɑ̃l.ve la.pɛ̃.dis a vɛ̃.tɑ̃/', 'ohⁿ ma ahⁿl-VAY | la-pehⁿ-DEESS | a vehⁿ-TAHⁿ', ['antecedents']),
  ph(1050, 'être opéré de', 'to have an operation for', '/ɛtʁ ɔ.pe.ʁe də/', 'ehtr o-pay-RAY duh', ['antecedents'], 'Opéré du genou, de l’appendicite : de + ce qu’on a opéré.'),
  sent(1051, 'Mon asthme est suivi par une pneumologue.', 'My asthma is followed by a lung specialist.', '/mɔ̃.nasm ɛ sɥi.vi paʁ yn pnø.mɔ.lɔg/', 'mohⁿ-NASM | eh swee-VEE | par ün pnuh-mo-LOG', ['antecedents']),
  ph(1052, 'être suivi pour', 'to be under care for', '/ɛtʁ sɥi.vi puʁ/', 'ehtr swee-VEE POOR', ['antecedents'], 'Un médecin surveille ta maladie, régulièrement.'),
  sent(1053, 'Je suis allergique à la pénicilline : j’ai fait une réaction à douze ans.', 'I am allergic to penicillin: I had a reaction at twelve.', '/ʒə sɥi.za.lɛʁ.ʒik a la pe.ni.si.lin ʒe fɛ yn ʁe.ak.sjɔ̃ a duz ɑ̃/', 'zhuh swee-za-lehr-ZHEEK | a la pay-nee-see-LEENN | zhay feh ün ray-ak-SYOHⁿ | a dooz AHⁿ', ['allergie'], FCVDR),
  ph(1054, 'faire une réaction allergique', 'to have an allergic reaction', '/fɛʁ yn ʁe.ak.sjɔ̃ a.lɛʁ.ʒik/', 'fehr ün ray-ak-SYOHⁿ | a-lehr-ZHEEK', ['allergie']),
  ph(1055, 'une intolérance, pas une allergie', 'an intolerance, not an allergy', '/yn ɛ̃.tɔ.le.ʁɑ̃s pa.zyn a.lɛʁ.ʒi/', 'ün ehⁿ-to-lay-RAHⁿSS | pa-zün a-lehr-ZHEE', ['allergie'], 'Un aliment que tu digères mal : c’est gênant, ce n’est pas une réaction allergique.'),
  sent(1056, 'Dans ma famille, il y a des cas de diabète.', 'There are cases of diabetes in my family.', '/dɑ̃ ma fa.mij il.ja de ka də dja.bɛt/', 'dahⁿ ma fa-MEEY | eel-ya day KA duh dya-BEHT', ['antecedents'], FCVDR),
  sent(1057, 'En ce moment, je ne prends aucun traitement.', 'At the moment I am not taking any treatment.', '/ɑ̃ s(ə) mɔ.mɑ̃ ʒə nə pʁɑ̃ o.kœ̃ tʁɛt.mɑ̃/', 'ahⁿ smo-MAHⁿ | zhuh nuh prahⁿ oh-kuhⁿ treht-MAHⁿ', ['traitement']),
  sent(1058, 'Je prends seulement de la vitamine D, sans ordonnance.', 'I only take vitamin D, without a prescription.', '/ʒə pʁɑ̃ sœl.mɑ̃ də la vi.ta.min de sɑ̃.zɔʁ.dɔ.nɑ̃s/', 'zhuh prahⁿ suhl-MAHⁿ | duh la vee-ta-meenn DAY | sahⁿ-zor-do-NAHⁿSS', ['traitement']),
  ph(1059, 'un traitement en cours', 'a current treatment', '/œ̃ tʁɛt.mɑ̃ ɑ̃ kuʁ/', 'uhⁿ treht-MAHⁿ ahⁿ KOOR', ['traitement'], 'Tout ce que tu prends en ce moment, même sans ordonnance.'),
  sent(1060, 'Je ne fume pas et je bois très peu d’alcool.', 'I do not smoke and I drink very little alcohol.', '/ʒə nə fym pa e ʒə bwa tʁɛ pø dal.kɔl/', 'zhuh nuh füm PA | ay zhuh bwa treh puh dal-KOL', ['habitudes']),
  sent(1061, 'Mes vaccins sont à jour.', 'My vaccinations are up to date.', '/me vak.sɛ̃ sɔ̃.ta ʒuʁ/', 'may vak-SEHⁿ | sohⁿ-ta ZHOOR', ['habitudes'], FCVDR),
  sent(1062, 'Allergie ou intolérance : dis toujours laquelle, ce n’est pas la même chose.', 'Allergy or intolerance: always say which, they are not the same thing.', '/a.lɛʁ.ʒi u ɛ̃.tɔ.le.ʁɑ̃s di tu.ʒuʁ la.kɛl sə nɛ pa la mɛm ʃoz/', 'a-lehr-ZHEE oo ehⁿ-to-lay-RAHⁿSS | dee too-zhoor la-KEHL | suh neh pa la mem SHOZ', ['rule', 'allergie'], ['flashcard'],
    rule('Tu digères mal le lait. C’est une allergie ?', 'Non, une intolérance. Une allergie est une réaction du système immunitaire, parfois grave : le médecin doit savoir laquelle tu as.')),
];

/* ── ACT 5 · COMPRENDRE LE MÉDECIN ────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1063, 'D’après ce que vous me décrivez, ça pourrait être une tendinite.', 'From what you describe, it could be tendinitis.', '/da.pʁɛ sə kə vu mə de.kʁi.ve sa pu.ʁɛ ɛtʁ yn tɑ̃.di.nit/', 'da-preh suh kuh voo muh day-kree-VAY | sa poo-reh ehtr ün tahⁿ-dee-NEET', ['medecin', 'ecoute']),
  sent(1064, 'Mais je veux d’abord écarter une fracture de fatigue.', 'But first I want to rule out a stress fracture.', '/mɛ ʒə vø da.bɔʁ e.kaʁ.te yn fʁak.tyʁ də fa.tig/', 'meh zhuh vuh da-BOR | ay-kar-TAY ün frak-TÜR duh fa-TEEG', ['medecin', 'ecoute']),
  sent(1065, 'Je vous prescris une radio et une échographie du genou.', 'I am prescribing an X-ray and an ultrasound of the knee.', '/ʒə vu pʁɛs.kʁi yn ʁa.djo e y.ne.ko.gʁa.fi dy ʒə.nu/', 'zhuh voo prehs-KREE | ün ra-DYOH | ay ü-nay-ko-gra-FEE dü zhuh-NOO', ['medecin', 'ecoute'], FCVDR),
  sent(1066, 'Excusez-moi, qu’est-ce que vous entendez par fracture de fatigue ?', 'Sorry, what do you mean by a stress fracture?', '/ɛks.ky.ze.mwa kɛs.kə vu.zɑ̃.tɑ̃.de paʁ fʁak.tyʁ də fa.tig/', 'ehks-kü-zay-MWA | kehs-kuh voo-zahⁿ-tahⁿ-DAY par | frak-TÜR duh fa-TEEG', ['demander', 'ecoute'], FCVDR),
  sent(1067, 'C’est une petite fissure de l’os, due à des efforts répétés.', 'It is a small crack in the bone, caused by repeated strain.', '/sɛ.tyn pə.tit fi.syʁ də lɔs dy a de.ze.fɔʁ ʁe.pe.te/', 'seh-tün puh-teet fee-SÜR duh LOSS | dü a day-zay-FOR ray-pay-TAY', ['medecin', 'ecoute']),
  sent(1068, 'Vu votre travail, je vous fais un arrêt de travail de trois jours.', 'Given your job, I am signing you off work for three days.', '/vy vɔtʁ tʁa.vaj ʒə vu fɛ œ̃.na.ʁɛ d(ə) tʁa.vaj də tʁwa ʒuʁ/', 'vü votr tra-VAHY | zhuh voo feh uhⁿ-na-REH duh tra-VAHY | duh trwa ZHOOR', ['medecin', 'ecoute']),
  sent(1069, 'Si ça ne s’améliore pas d’ici dix jours, je vous oriente vers un spécialiste.', 'If it has not improved within ten days, I will refer you to a specialist.', '/si sa nə sa.me.ljɔʁ pa di.si di ʒuʁ ʒə vu.zɔ.ʁjɑ̃t vɛʁ œ̃ spe.sja.list/', 'see sa nuh sa-may-LYOR PA | dee-see dee ZHOOR | zhuh voo-zo-RYAHⁿT | vehr uhⁿ spay-sya-LEEST', ['medecin', 'ecoute'], FCVDR),
  sent(1070, 'Et l’échographie, je dois la faire à jeun ?', 'And the ultrasound, do I have to fast for it?', '/e le.ko.gʁa.fi ʒə dwa la fɛʁ a ʒœ̃/', 'ay lay-ko-gra-FEE | zhuh dwa la fehr a ZHUHⁿ', ['demander', 'ecoute']),
  sent(1071, 'Non, pas pour le genou : c’est seulement pour certaines échographies du ventre.', 'No, not for the knee: only for some abdominal ultrasounds.', '/nɔ̃ pa puʁ lə ʒə.nu sɛ sœl.mɑ̃ puʁ sɛʁ.tɛn.ze.ko.gʁa.fi dy vɑ̃tʁ/', 'NOHⁿ | pa poor luh zhuh-NOO | seh suhl-MAHⁿ | poor sehr-tehnn-zay-ko-gra-FEE dü VAHⁿTR', ['medecin', 'ecoute']),
  sent(1072, 'On se revoit quand vous aurez les résultats.', 'We will see each other again when you have the results.', '/ɔ̃ sə ʁə.vwa kɑ̃ vu.zo.ʁe le ʁe.zyl.ta/', 'ohⁿ suh ruh-VWA | kahⁿ voo-zoh-RAY | lay ray-zül-TA', ['medecin', 'ecoute']),
  sent(1073, 'Si je comprends bien : la radio d’abord, puis l’échographie, et on se revoit.', 'If I understand correctly: the X-ray first, then the ultrasound, and then we meet again.', '/si ʒə kɔ̃.pʁɑ̃ bjɛ̃ la ʁa.djo da.bɔʁ pɥi le.ko.gʁa.fi e ɔ̃ sə ʁə.vwa/', 'see zhuh kohⁿ-prahⁿ BYEHⁿ | la ra-dyoh da-BOR | pwee lay-ko-gra-FEE | ay ohⁿ suh ruh-VWA', ['demander', 'ecoute'], FCVDR),
  ph(1074, 'écarter une hypothèse', 'to rule out a possibility', '/e.kaʁ.te y.ni.pɔ.tɛz/', 'ay-kar-TAY | ü-nee-po-TEHZ', ['medecin'], 'Vérifier que ce n’est pas ça, pour pouvoir passer à autre chose.'),
  ph(1075, 'orienter vers un spécialiste', 'to refer to a specialist', '/ɔ.ʁjɑ̃.te vɛʁ œ̃ spe.sja.list/', 'o-ryahⁿ-TAY | vehr uhⁿ spay-sya-LEEST', ['medecin']),
  ph(1076, 'passer une radio', 'to have an X-ray', '/pa.se yn ʁa.djo/', 'pa-SAY ün ra-DYOH', ['examens'], 'La radio, c’est la radiographie, en plus court.'),
  ph(1077, 'un bilan sanguin', 'blood work, a set of blood tests', '/œ̃ bi.lɑ̃ sɑ̃.gɛ̃/', 'uhⁿ bee-LAHⁿ | sahⁿ-GEHⁿ', ['examens'], 'Plusieurs analyses faites sur une seule prise de sang.'),
  ph(1078, 'qu’est-ce que vous entendez par', 'what do you mean by', '/kɛs.kə vu.zɑ̃.tɑ̃.de paʁ/', 'kehs-kuh voo-zahⁿ-tahⁿ-DAY PAR', ['demander'], 'Pour faire expliquer un mot, sans couper le médecin.'),
  sent(1079, 'On va faire un bilan sanguin pour vérifier que tout va bien.', 'We will do some blood work to check that everything is fine.', '/ɔ̃ va fɛʁ œ̃ bi.lɑ̃ sɑ̃.gɛ̃ puʁ ve.ʁi.fje kə tu va bjɛ̃/', 'ohⁿ va fehr uhⁿ bee-LAHⁿ sahⁿ-GEHⁿ | poor vay-ree-FYAY | kuh too va BYEHⁿ', ['examens']),
];

/* ── ACT 6 · L'ORDONNANCE ET LA PHARMACIE ─────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1080, 'Vous le prenez au cours du repas, matin et soir.', 'You take it with your meal, morning and evening.', '/vu lə pʁə.ne o kuʁ dy ʁə.pa ma.tɛ̃ e swaʁ/', 'voo luh pruh-NAY | oh koor dü ruh-PA | ma-tehⁿ ay SWAR', ['posologie'], FCVDR),
  sent(1081, 'Ne le prenez pas à jeun : il peut irriter l’estomac.', 'Do not take it on an empty stomach: it can irritate the stomach.', '/nə lə pʁə.ne pa a ʒœ̃ il pø i.ʁi.te lɛs.tɔ.ma/', 'nuh luh pruh-nay pa a ZHUHⁿ | eel puh ee-ree-TAY | lehs-to-MA', ['posologie']),
  sent(1082, 'Pas plus de deux comprimés par jour.', 'No more than two tablets a day.', '/pa ply d(ə) dø kɔ̃.pʁi.me paʁ ʒuʁ/', 'pa plü duh deu kohⁿ-pree-MAY | par ZHOOR', ['posologie'], FCVDR),
  sent(1083, 'Celui-ci, vous le prenez seulement en cas de besoin.', 'This one you only take if you need it.', '/sə.lɥi.si vu lə pʁə.ne sœl.mɑ̃ ɑ̃ ka d(ə) bə.zwɛ̃/', 'suh-lwee-SEE | voo luh pruh-NAY | suhl-MAHⁿ | ahⁿ ka duh buh-ZWEHⁿ', ['posologie']),
  sent(1084, 'Est-ce que je peux le prendre avec mon traitement contre l’asthme ?', 'Can I take it with my asthma treatment?', '/ɛs.kə ʒə pø lə pʁɑ̃dʁ a.vɛk mɔ̃ tʁɛt.mɑ̃ kɔ̃.tʁə lasm/', 'ehs-kuh zhuh PUH luh PRAHⁿDR | a-vehk mohⁿ treht-MAHⁿ | kohⁿ-truh LASM', ['demander'], FCVDR),
  sent(1085, 'Je vérifie dans votre dossier, un instant.', 'I am checking your file, one moment.', '/ʒə ve.ʁi.fi dɑ̃ vɔtʁ do.sje œ̃.nɛ̃s.tɑ̃/', 'zhuh vay-ree-FEE | dahⁿ votr do-SYAY | uhⁿ-nehⁿss-TAHⁿ', ['pharmacie']),
  sent(1086, 'Il existe en générique, et c’est moins cher.', 'It comes as a generic, and it is cheaper.', '/il ɛg.zist ɑ̃ ʒe.ne.ʁik e sɛ mwɛ̃ ʃɛʁ/', 'eel ehg-ZEEST | ahⁿ zhay-nay-REEK | ay seh mwehⁿ SHEHR', ['pharmacie']),
  sent(1087, 'Est-ce que ça fait somnoler ?', 'Does it make you drowsy?', '/ɛs.kə sa fɛ sɔm.nɔ.le/', 'ehs-kuh sa feh som-no-LAY', ['demander'], FCVDR),
  sent(1088, 'Pour la durée du traitement, suivez ce qui est écrit sur l’ordonnance.', 'For how long to take it, follow what is written on the prescription.', '/puʁ la dy.ʁe dy tʁɛt.mɑ̃ sɥi.ve sə ki ɛ.te.kʁi syʁ lɔʁ.dɔ.nɑ̃s/', 'poor la dü-RAY dü treht-MAHⁿ | swee-VAY suh kee eh-tay-KREE | sür lor-do-NAHⁿSS', ['pharmacie']),
  ph(1089, 'au cours du repas', 'during the meal, with food', '/o kuʁ dy ʁə.pa/', 'oh koor dü ruh-PA', ['posologie'], 'Pendant que tu manges : ni avant, ni après.'),
  ph(1090, 'matin, midi et soir', 'morning, noon and evening', '/ma.tɛ̃ mi.di e swaʁ/', 'ma-TEHⁿ | mee-DEE ay SWAR', ['posologie'], 'Trois prises, à peu près au moment des repas.'),
  ph(1091, 'en cas de besoin', 'if needed, as needed', '/ɑ̃ ka d(ə) bə.zwɛ̃/', 'ahⁿ ka duh buh-ZWEHⁿ', ['posologie'], 'Seulement quand c’est nécessaire, pas chaque jour.'),
  ph(1092, 'en dehors des repas', 'between meals, away from food', '/ɑ̃ də.ɔʁ de ʁə.pa/', 'ahⁿ duh-OR day ruh-PA', ['posologie']),
  ph(1093, 'en vente libre', 'over the counter', '/ɑ̃ vɑ̃t libʁ/', 'ahⁿ vahⁿt LEEBR', ['pharmacie'], 'Sans ordonnance ; le pharmacien peut quand même te conseiller.'),
  ph(1094, 'la durée du traitement', 'the length of the treatment', '/la dy.ʁe dy tʁɛt.mɑ̃/', 'la dü-RAY | dü treht-MAHⁿ', ['posologie']),
  sent(1095, 'La posologie dit combien, quand, et pendant combien de temps.', 'The dosage says how much, when, and for how long.', '/la pɔ.zɔ.lɔ.ʒi di kɔ̃.bjɛ̃ kɑ̃ e pɑ̃.dɑ̃ kɔ̃.bjɛ̃ d(ə) tɑ̃/', 'la po-zo-lo-ZHEE | dee kohⁿ-BYEHⁿ | KAHⁿ | ay pahⁿ-dahⁿ kohⁿ-byehⁿ duh TAHⁿ', ['rule', 'posologie'], ['flashcard'],
    rule('Une posologie répond à quelles questions ?', 'Combien, quand, et pendant combien de temps.')),
  sent(1096, 'Ce médicament est en vente libre, mais demandez conseil au pharmacien.', 'This medicine is sold over the counter, but ask the pharmacist for advice.', '/sə me.di.ka.mɑ̃ ɛ.tɑ̃ vɑ̃t libʁ mɛ də.mɑ̃.de kɔ̃.sɛj o faʁ.ma.sjɛ̃/', 'suh may-dee-ka-MAHⁿ | eh-tahⁿ vahⁿt LEEBR | meh duh-mahⁿ-day kohⁿ-SEHY | oh far-ma-SYEHⁿ', ['pharmacie']),
];

/* ── ACT 7 · LA NOTICE ─────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  ph(1097, 'contre-indiqué, une contre-indication', 'contraindicated, a contraindication', '/kɔ̃.tʁɛ̃.di.ke yn kɔ̃.tʁɛ̃.di.ka.sjɔ̃/', 'kohⁿ-trehⁿ-dee-KAY | ün kohⁿ-trehⁿ-dee-ka-SYOHⁿ', ['notice'], 'Un cas où il ne faut pas prendre le médicament.'),
  ph(1098, 'un effet indésirable', 'an adverse effect', '/œ̃.ne.fɛ ɛ̃.de.zi.ʁabl/', 'uhⁿ-nay-FEH | ehⁿ-day-zee-RABL', ['notice'], 'Le mot de la notice ; à l’oral, on dit souvent un effet secondaire.'),
  ph(1099, 'les précautions d’emploi', 'precautions for use', '/le pʁe.ko.sjɔ̃ dɑ̃.plwa/', 'lay pray-koh-SYOHⁿ | dahⁿ-PLWA', ['notice']),
  ph(1100, 'tenir hors de la vue et de la portée des enfants', 'keep out of the sight and reach of children', '/tə.niʁ ɔʁ də la vy e də la pɔʁ.te de.zɑ̃.fɑ̃/', 'tuh-NEER or duh la VÜ | ay duh la por-TAY day-zahⁿ-FAHⁿ', ['notice'], 'La formule qu’on trouve sur toutes les notices.', 'soutenu'),
  ph(1101, 'ne pas dépasser la dose prescrite', 'do not exceed the prescribed dose', '/nə pa de.pa.se la doz pʁɛs.kʁit/', 'nuh pa day-pa-SAY | la doz prehs-KREET', ['notice'], 'L’infinitif de la notice : une consigne.', 'soutenu'),
  ph(1102, 'en cas d’oubli', 'if a dose is missed', '/ɑ̃ ka du.bli/', 'ahⁿ ka doo-BLEE', ['notice']),
  ph(1103, 'éventuel, éventuellement', 'possible, possibly (not eventual)', '/e.vɑ̃.tɥɛl e.vɑ̃.tɥɛl.mɑ̃/', 'ay-vahⁿ-TWEHL | ay-vahⁿ-twehl-MAHⁿ', ['notice', 'faux-ami'], 'Faux ami : éventuel veut dire possible, pas final.'),
  ph(1104, 'déconseillé pendant la grossesse', 'not recommended during pregnancy', '/de.kɔ̃.se.je pɑ̃.dɑ̃ la gʁo.sɛs/', 'day-kohⁿ-say-YAY | pahⁿ-dahⁿ la groh-SESS', ['notice']),
  sent(1105, 'Ne prenez jamais ce médicament si vous êtes allergique à l’un de ses composants.', 'Never take this medicine if you are allergic to any of its ingredients.', '/nə pʁə.ne ʒa.mɛ sə me.di.ka.mɑ̃ si vu.zɛt a.lɛʁ.ʒik a lœ̃ d(ə) se kɔ̃.po.zɑ̃/', 'nuh pruh-nay zha-MEH | suh may-dee-ka-MAHⁿ | see voo-zeht a-lehr-ZHEEK | a luhⁿ duh say kohⁿ-poh-ZAHⁿ', ['notice']),
  sent(1106, 'Ce médicament peut provoquer une somnolence.', 'This medicine can cause drowsiness.', '/sə me.di.ka.mɑ̃ pø pʁɔ.vɔ.ke yn sɔm.nɔ.lɑ̃s/', 'suh may-dee-ka-MAHⁿ | puh pro-vo-KAY | ün som-no-LAHⁿSS', ['notice'], FCVDR),
  sent(1107, 'Si vous oubliez une dose, ne prenez pas de dose double pour compenser.', 'If you forget a dose, do not take a double dose to make up for it.', '/si vu.zu.bli.je yn doz nə pʁə.ne pa d(ə) doz dubl puʁ kɔ̃.pɑ̃.se/', 'see voo-zoo-blee-YAY ün DOZ | nuh pruh-nay pa duh doz DOOBL | poor kohⁿ-pahⁿ-SAY', ['notice'], FCVDR),
  sent(1108, 'Signalez à votre médecin tout autre médicament que vous prenez.', 'Tell your doctor about any other medicine you are taking.', '/si.ɲa.le a vɔtʁ med.sɛ̃ tu.to.tʁə me.di.ka.mɑ̃ kə vu pʁə.ne/', 'see-nya-LAY a votr mayd-SEHⁿ | too-toh-truh may-dee-ka-MAHⁿ | kuh voo pruh-NAY', ['notice']),
  sent(1109, 'Demandez conseil à votre médecin ou à votre pharmacien.', 'Ask your doctor or your pharmacist for advice.', '/də.mɑ̃.de kɔ̃.sɛj a vɔtʁ med.sɛ̃ u a vɔtʁ faʁ.ma.sjɛ̃/', 'duh-mahⁿ-day kohⁿ-SEHY | a votr mayd-SEHⁿ | oo a votr far-ma-SYEHⁿ', ['notice'], FCVDR),
  sent(1110, 'Ce sirop ne contient pas de conservateur.', 'This syrup contains no preservative.', '/sə si.ʁo nə kɔ̃.tjɛ̃ pa d(ə) kɔ̃.sɛʁ.va.tœʁ/', 'suh see-ROH | nuh kohⁿ-tyehⁿ pa duh kohⁿ-sehr-va-TUHR', ['notice', 'faux-ami']),
  sent(1111, 'La douleur finira par passer.', 'The pain will go away in the end.', '/la du.lœʁ fi.ni.ʁa paʁ pa.se/', 'la doo-LUHR | fee-nee-RA par pa-SAY', ['faux-ami']),
  sent(1112, 'Une notice se lit par rubriques : tu cherches d’abord ta question.', 'A leaflet is read section by section: first you look for your question.', '/yn nɔ.tis sə li paʁ ʁy.bʁik ty ʃɛʁʃ da.bɔʁ ta kɛs.tjɔ̃/', 'ün no-TEESS suh LEE | par rü-BREEK | tü shehrsh da-BOR | ta kehs-TYOHⁿ', ['rule', 'notice'], ['flashcard'],
    rule('Une notice de deux pages : tu lis tout ?', 'Non : tu cherches la rubrique qui répond à ta question, puis tu la lis en entier.')),
];

/* ── ACT 8 · LE PARCOURS DE SOINS ─────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  ph(1113, 'le médecin traitant', 'the registered GP (France)', '/lə med.sɛ̃ tʁɛ.tɑ̃/', 'luh mayd-SEHⁿ | treh-TAHⁿ', ['systeme', 'france'], 'En France, le médecin, le plus souvent un généraliste, que tu déclares à l’Assurance maladie.'),
  ph(1114, 'la carte Vitale', 'the French health insurance card', '/la kaʁt vi.tal/', 'la kart vee-TAL', ['systeme', 'france'], 'En France, la carte verte qu’on présente chez le médecin et à la pharmacie.'),
  sent(1115, 'En France, on déclare un médecin traitant pour être mieux remboursé.', 'In France, you register a GP to be reimbursed better.', '/ɑ̃ fʁɑ̃s ɔ̃ de.klaʁ œ̃ med.sɛ̃ tʁɛ.tɑ̃ puʁ ɛtʁ mjø ʁɑ̃.buʁ.se/', 'ahⁿ FRAHⁿSS | ohⁿ day-KLAR | uhⁿ mayd-sehⁿ treh-TAHⁿ | poor ehtr myuh rahⁿ-boor-SAY', ['systeme', 'france'], FCVDR),
  sent(1116, 'Au Québec, on présente sa carte d’assurance maladie à chaque visite.', 'In Québec, you show your health insurance card at every visit.', '/o ke.bɛk ɔ̃ pʁe.zɑ̃t sa kaʁt da.sy.ʁɑ̃s ma.la.di a ʃak vi.zit/', 'oh kay-BEHK | ohⁿ pray-ZAHⁿT | sa kart da-sü-rahⁿss ma-la-DEE | a shak vee-ZEET', ['systeme', 'quebec']),
  sent(1117, 'La mutuelle rembourse une partie de ce que l’Assurance maladie ne prend pas en charge.', 'The mutuelle reimburses part of what the national health insurance does not cover.', '/la my.tɥɛl ʁɑ̃.buʁs yn paʁ.ti də sə kə la.sy.ʁɑ̃s ma.la.di nə pʁɑ̃ pa.zɑ̃ ʃaʁʒ/', 'la mü-TWEHL rahⁿ-BOORSS | ün par-TEE duh suh kuh | la-sü-rahⁿss ma-la-DEE | nuh prahⁿ pa-zahⁿ SHARZH', ['systeme', 'france']),
  sent(1118, 'Au Québec, le 811 permet de parler à une infirmière, jour et nuit.', 'In Québec, 811 lets you talk to a nurse, day and night.', '/o ke.bɛk lə ɥit œ̃ œ̃ pɛʁ.mɛ d(ə) paʁ.le a y.nɛ̃.fiʁ.mjɛʁ ʒuʁ e nɥi/', 'oh kay-BEHK | luh weet-uhⁿ-UHⁿ | pehr-meh duh par-LAY | a ü-nehⁿ-feer-MYEHR | zhoor ay NWEE', ['systeme', 'quebec'], FCVDR),
  sent(1119, 'En Suisse, l’assurance maladie de base est obligatoire.', 'In Switzerland, basic health insurance is compulsory.', '/ɑ̃ sɥis la.sy.ʁɑ̃s ma.la.di də baz ɛ.tɔ.bli.ga.twaʁ/', 'ahⁿ SWEESS | la-sü-rahⁿss ma-la-dee duh BAZ | eh-to-blee-ga-TWAR', ['systeme', 'suisse']),
  sent(1120, 'En Suisse, pour une ambulance, on compose le 144.', 'In Switzerland, for an ambulance, you dial 144.', '/ɑ̃ sɥis puʁ y.nɑ̃.by.lɑ̃s ɔ̃ kɔ̃.poz lə sɑ̃ ka.ʁɑ̃t.katʁ/', 'ahⁿ SWEESS | poor ü-nahⁿ-bü-LAHⁿSS | ohⁿ kohⁿ-POZ | luh sahⁿ ka-rahⁿt-KATR', ['systeme', 'suisse']),
  sent(1121, 'En Belgique, on s’affilie à une mutualité pour être remboursé.', 'In Belgium, you join a mutualité to be reimbursed.', '/ɑ̃ bɛl.ʒik ɔ̃ sa.fi.li a yn my.tɥa.li.te puʁ ɛtʁ ʁɑ̃.buʁ.se/', 'ahⁿ behl-ZHEEK | ohⁿ sa-fee-LEE | a ün mü-twa-lee-TAY | poor ehtr rahⁿ-boor-SAY', ['systeme', 'belgique']),
  sent(1122, 'Mon beau-père cherche un médecin de famille à Montréal.', 'My father-in-law is looking for a family doctor in Montréal.', '/mɔ̃ bo.pɛʁ ʃɛʁʃ œ̃ med.sɛ̃ də fa.mij a mɔ̃.ʁe.al/', 'mohⁿ boh-PEHR | shehrsh uhⁿ mayd-sehⁿ duh fa-MEEY | a mohⁿ-ray-AL', ['systeme', 'quebec', 'proche'], FCVDR),
  sent(1123, 'En attendant, il peut consulter dans une clinique sans rendez-vous.', 'In the meantime, he can see a doctor at a walk-in clinic.', '/ɑ̃.na.tɑ̃.dɑ̃ il pø kɔ̃.syl.te dɑ̃.zyn kli.nik sɑ̃ ʁɑ̃.de.vu/', 'ahⁿ-na-tahⁿ-DAHⁿ | eel puh kohⁿ-sül-TAY | dahⁿ-zün klee-NEEK | sahⁿ rahⁿ-day-VOO', ['systeme', 'quebec']),
  sent(1124, 'Au Québec, on dit souvent aller à l’urgence ; en France, aller aux urgences.', 'In Québec people often say aller à l’urgence; in France, aller aux urgences.', '/o ke.bɛk ɔ̃ di su.vɑ̃ a.le a lyʁ.ʒɑ̃s ɑ̃ fʁɑ̃s a.le o.zyʁ.ʒɑ̃s/', 'oh kay-BEHK | ohⁿ dee soo-VAHⁿ | a-lay a lür-ZHAHⁿSS | ahⁿ FRAHⁿSS | a-lay oh-zür-ZHAHⁿSS', ['systeme', 'variante']),
  ph(1125, 'le compte rendu d’hospitalisation', 'the hospital discharge report', '/lə kɔ̃t ʁɑ̃.dy dɔs.pi.ta.li.za.sjɔ̃/', 'luh kohⁿt rahⁿ-DÜ | dos-pee-ta-lee-za-SYOHⁿ', ['courrier'], 'La lettre qui résume ton séjour à l’hôpital, pour ton médecin.'),
  ph(1126, 'le traitement de sortie', 'the medication on discharge', '/lə tʁɛt.mɑ̃ də sɔʁ.ti/', 'luh treht-MAHⁿ | duh sor-TEE', ['courrier'], 'Les médicaments à prendre en rentrant de l’hôpital.'),
  ph(1127, 'un rendez-vous de contrôle', 'a check-up appointment', '/œ̃ ʁɑ̃.de.vu də kɔ̃.tʁol/', 'uhⁿ rahⁿ-day-VOO | duh kohⁿ-TROHL', ['courrier']),
  sent(1128, 'Le compte rendu est adressé à son médecin traitant, à Lyon.', 'The report is addressed to his registered GP in Lyon.', '/lə kɔ̃t ʁɑ̃.dy ɛ.ta.dʁɛ.se a sɔ̃ med.sɛ̃ tʁɛ.tɑ̃ a ljɔ̃/', 'luh kohⁿt rahⁿ-DÜ | eh-ta-dreh-SAY | a sohⁿ mayd-sehⁿ treh-TAHⁿ | a LYOHⁿ', ['courrier', 'france']),
  sent(1129, 'D’un pays à l’autre, les mots du système changent ; tes questions restent les mêmes.', 'From one country to another the words of the system change; your questions stay the same.', '/dœ̃ pe.i a lotʁ le mo dy sis.tɛm ʃɑ̃ʒ te kɛs.tjɔ̃ ʁɛst le mɛm/', 'duhⁿ pay-EE a LOHTR | lay moh dü sees-TEHMM SHAHⁿZH | tay kehs-TYOHⁿ | rehst lay MEM', ['rule', 'systeme'], ['flashcard'],
    rule('Tu changes de pays. Qu’est-ce qui change, chez le médecin ?', 'Les mots du système : la carte, l’assurance, le numéro à appeler. Tes questions, elles, restent les mêmes.')),
];

/* ── ACT 9 · POSER SES QUESTIONS, DONNER SON ACCORD ───────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1130, 'Je vous propose une arthroscopie : c’est une petite intervention sous anesthésie.', 'I suggest an arthroscopy: it is a minor procedure under anaesthetic.', '/ʒə vu pʁɔ.poz yn aʁ.tʁɔ.skɔ.pi sɛ.tyn pə.tit ɛ̃.tɛʁ.vɑ̃.sjɔ̃ su.za.nɛs.te.zi/', 'zhuh voo pro-POZ | ün ar-tro-sko-PEE | seh-tün puh-teet ehⁿ-tehr-vahⁿ-SYOHⁿ | soo-za-nehs-tay-ZEE', ['consentement', 'ecoute']),
  sent(1131, 'Qu’est-ce que ça implique, concrètement ?', 'What does it involve, in practice?', '/kɛs.kə sa ɛ̃.plik kɔ̃.kʁɛt.mɑ̃/', 'kehs-kuh sa ehⁿ-PLEEK | kohⁿ-kreht-MAHⁿ', ['consentement', 'ecoute'], FCVDR),
  sent(1132, 'En général, vous entrez le matin et vous ressortez le soir.', 'Usually you come in in the morning and go home in the evening.', '/ɑ̃ ʒe.ne.ʁal vu.zɑ̃.tʁe lə ma.tɛ̃ e vu ʁə.sɔʁ.te lə swaʁ/', 'ahⁿ zhay-nay-RAL | voo-zahⁿ-TRAY luh ma-TEHⁿ | ay voo ruh-sor-TAY luh SWAR', ['consentement', 'ecoute']),
  sent(1133, 'Quels sont les risques ?', 'What are the risks?', '/kɛl sɔ̃ le ʁisk/', 'kehl sohⁿ lay REESK', ['consentement', 'ecoute'], FCVDR),
  sent(1134, 'Comme pour toute intervention, il y en a, mais ils sont rares.', 'As with any procedure, there are some, but they are rare.', '/kɔm puʁ tut ɛ̃.tɛʁ.vɑ̃.sjɔ̃ il.jɑ̃.na mɛ il sɔ̃ ʁaʁ/', 'komm poor toot ehⁿ-tehr-vahⁿ-SYOHⁿ | eel-yahⁿ-NA | meh eel sohⁿ RAR', ['consentement', 'ecoute']),
  sent(1135, 'Est-ce qu’il y a une alternative ?', 'Is there an alternative?', '/ɛs.kil.ja y.nal.tɛʁ.na.tiv/', 'ehs-keel-ya ü-nal-tehr-na-TEEV', ['consentement', 'ecoute'], FCVDR),
  sent(1136, 'On peut aussi essayer la physiothérapie pendant deux mois, puis décider.', 'We can also try physiotherapy for two months, then decide.', '/ɔ̃ pø o.si e.se.je la fi.zjo.te.ʁa.pi pɑ̃.dɑ̃ dø mwa pɥi de.si.de/', 'ohⁿ puh oh-SEE ay-say-YAY | la fee-zyoh-tay-ra-PEE | pahⁿ-dahⁿ deu MWA | pwee day-see-DAY', ['consentement', 'ecoute', 'quebec']),
  sent(1137, 'Est-ce que je peux prendre le temps de réfléchir ?', 'Can I take time to think it over?', '/ɛs.kə ʒə pø pʁɑ̃dʁ lə tɑ̃ d(ə) ʁe.fle.ʃiʁ/', 'ehs-kuh zhuh PUH | prahⁿdr luh TAHⁿ | duh ray-flay-SHEER', ['consentement', 'ecoute'], FCVDR),
  sent(1138, 'Bien sûr, rien ne presse : rappelez-moi quand vous aurez décidé.', 'Of course, there is no rush: call me back when you have decided.', '/bjɛ̃ syʁ ʁjɛ̃ nə pʁɛs ʁa.ple.mwa kɑ̃ vu.zo.ʁe de.si.de/', 'byehⁿ SÜR | ryehⁿ nuh PREHSS | ra-play-MWA | kahⁿ voo-zoh-ray day-see-DAY', ['consentement', 'ecoute']),
  sent(1139, 'J’ai le droit de changer d’avis.', 'I have the right to change my mind.', '/ʒe lə dʁwa d(ə) ʃɑ̃.ʒe da.vi/', 'zhay luh DRWA | duh shahⁿ-zhay da-VEE', ['consentement'], FCVDR),
  sent(1140, 'J’aimerais avoir un deuxième avis avant de décider.', 'I would like a second opinion before deciding.', '/ʒɛm.ʁɛ a.vwaʁ œ̃ dø.zjɛm a.vi a.vɑ̃ d(ə) de.si.de/', 'zhehm-REH | a-vwar uhⁿ deu-ZYEMM a-VEE | a-vahⁿ duh day-see-DAY', ['consentement'], FCVDR),
  sent(1141, 'On vous demandera de signer un formulaire de consentement.', 'You will be asked to sign a consent form.', '/ɔ̃ vu d(ə).mɑ̃.də.ʁa d(ə) si.ɲe œ̃ fɔʁ.my.lɛʁ də kɔ̃.sɑ̃t.mɑ̃/', 'ohⁿ voo dmahⁿ-duh-RA | duh see-NYAY | uhⁿ for-mü-LEHR | duh kohⁿ-sahⁿt-MAHⁿ', ['consentement', 'ecoute']),
  ph(1142, 'qu’est-ce que ça implique', 'what does it involve', '/kɛs.kə sa ɛ̃.plik/', 'kehs-kuh sa ehⁿ-PLEEK', ['consentement'], 'La question qui ouvre toutes les autres : ce qui va se passer, pour toi.'),
  ph(1143, 'les bénéfices et les risques', 'the benefits and the risks', '/le be.ne.fis e le ʁisk/', 'lay bay-nay-FEESS | ay lay REESK', ['consentement']),
  ph(1144, 'donner son consentement éclairé', 'to give one’s informed consent', '/dɔ.ne sɔ̃ kɔ̃.sɑ̃t.mɑ̃ e.klɛ.ʁe/', 'do-NAY sohⁿ kohⁿ-sahⁿt-MAHⁿ | ay-kleh-RAY', ['consentement'], 'Dire oui, par écrit ou à voix haute, après avoir compris.'),
  ph(1145, 'un délai de réflexion', 'time to think it over', '/œ̃ de.lɛ d(ə) ʁe.flɛk.sjɔ̃/', 'uhⁿ day-LEH | duh ray-flehk-SYOHⁿ', ['consentement']),
  sent(1146, 'Je veux prendre une décision éclairée.', 'I want to make an informed decision.', '/ʒə vø pʁɑ̃dʁ yn de.si.zjɔ̃ e.klɛ.ʁe/', 'zhuh vuh prahⁿdr | ün day-see-ZYOHⁿ ay-kleh-RAY', ['consentement'], FCVDR),
  sent(1147, 'Avant de dire oui, demande ce que ça implique, les risques et les autres options.', 'Before saying yes, ask what it involves, the risks and the other options.', '/a.vɑ̃ d(ə) diʁ wi də.mɑ̃d sə kə sa ɛ̃.plik le ʁisk e le.zo.tʁə.zɔp.sjɔ̃/', 'a-vahⁿ duh deer WEE | duh-mahⁿd suh kuh sa ehⁿ-PLEEK | lay REESK | ay lay-zoh-truh-zop-SYOHⁿ', ['rule', 'consentement'], ['flashcard'],
    rule('On te propose une intervention. Que demandes-tu avant de dire oui ?', 'Ce que ça implique, les risques, les autres options ; et, si tu veux, un délai de réflexion ou un deuxième avis.')),
];

/* ── ACT 10 · LE MOT SAVANT, LE MOT COURANT ───────────────────────────── */

export const ACT10_ROWS: Row[] = [
  ph(1148, 'une céphalée, un mal de tête', 'a cephalalgia, a headache', '/yn se.fa.le œ̃ mal də tɛt/', 'ün say-fa-LAY | uhⁿ mal duh TEHT', ['registre'], 'Le mot du compte rendu, puis le mot de tous les jours.'),
  ph(1149, 'une asthénie, une grande fatigue', 'asthenia, great tiredness', '/yn as.te.ni yn gʁɑ̃d fa.tig/', 'ün as-tay-NEE | ün grahⁿd fa-TEEG', ['registre']),
  ph(1150, 'une dyspnée, être essoufflé', 'dyspnoea, to be out of breath', '/yn disp.ne ɛtʁ e.su.fle/', 'ün deesp-NAY | ehtr ay-soo-FLAY', ['registre']),
  ph(1151, 'une tachycardie, le cœur qui s’emballe', 'tachycardia, the heart racing', '/yn ta.ki.kaʁ.di lə kœʁ ki sɑ̃.bal/', 'ün ta-kee-kar-DEE | luh kuhr kee sahⁿ-BAL', ['registre']),
  ph(1152, 'un prurit, ça démange', 'pruritus, it itches', '/œ̃ pʁy.ʁi sa de.mɑ̃ʒ/', 'uhⁿ prü-REE | sa day-MAHⁿZH', ['registre']),
  ph(1153, 'bénin, sans gravité', 'benign, not serious', '/be.nɛ̃ sɑ̃ gʁa.vi.te/', 'bay-NEHⁿ | sahⁿ gra-vee-TAY', ['registre'], 'Au féminin : bénigne. Une tumeur bénigne n’est pas un cancer.'),
  sent(1154, 'Le compte rendu parle de céphalées : ce sont des maux de tête.', 'The report mentions céphalées: they are headaches.', '/lə kɔ̃t ʁɑ̃.dy paʁl də se.fa.le sə sɔ̃ de mo d(ə) tɛt/', 'luh kohⁿt rahⁿ-DÜ | parl duh say-fa-LAY | suh sohⁿ day moh duh TEHT', ['registre'], FCVDR),
  sent(1155, 'Quand le médecin dit tachycardie, il veut dire que le cœur bat trop vite.', 'When the doctor says tachycardia, he means the heart is beating too fast.', '/kɑ̃ lə med.sɛ̃ di ta.ki.kaʁ.di il vø diʁ kə lə kœʁ ba tʁo vit/', 'kahⁿ luh mayd-SEHⁿ dee ta-kee-kar-DEE | eel vuh DEER | kuh luh KUHR ba troh VEET', ['registre']),
  sent(1156, 'Pouvez-vous me le dire avec des mots de tous les jours ?', 'Could you tell me in everyday words?', '/pu.ve.vu mə lə diʁ a.vɛk de mo də tu le ʒuʁ/', 'poo-vay-VOO | muh luh DEER | a-vehk day MOH | duh too lay ZHOOR', ['registre', 'demander'], FCVDR),
  sent(1157, 'Bénin, ici, veut dire que ce n’est pas grave.', 'Bénin, here, means it is not serious.', '/be.nɛ̃ i.si vø diʁ kə sə nɛ pa gʁav/', 'bay-NEHⁿ | ee-SEE | vuh DEER | kuh suh neh pa GRAV', ['registre']),
  sent(1158, 'Avec son médecin, on dit « j’ai de la tension » ; dans un courrier, on écrit « hypertension ».', 'With your doctor you say « j’ai de la tension »; in a letter you write « hypertension ».', '/a.vɛk sɔ̃ med.sɛ̃ ɔ̃ di ʒe d(ə) la tɑ̃.sjɔ̃ dɑ̃.zœ̃ ku.ʁje ɔ̃.ne.kʁi i.pɛʁ.tɑ̃.sjɔ̃/', 'a-vehk sohⁿ mayd-SEHⁿ | ohⁿ DEE | zhay duh la tahⁿ-SYOHⁿ | dahⁿ-zuhⁿ koo-RYAY | ohⁿ-nay-KREE | ee-pehr-tahⁿ-SYOHⁿ', ['registre']),
  sent(1159, 'En français, une drogue est un stupéfiant ; à la pharmacie, on achète des médicaments.', 'In French, une drogue is a narcotic; at the pharmacy you buy medicines.', '/ɑ̃ fʁɑ̃.sɛ yn dʁɔg ɛ.tœ̃ sty.pe.fjɑ̃ a la faʁ.ma.si ɔ̃.na.ʃɛt de me.di.ka.mɑ̃/', 'ahⁿ frahⁿ-SEH | ün DROG | eh-tuhⁿ stü-pay-FYAHⁿ | a la far-ma-SEE | ohⁿ-na-SHEHT | day may-dee-ka-MAHⁿ', ['faux-ami'], FCVDR),
  sent(1160, 'Un physicien fait de la physique ; un médecin soigne.', 'A physicist does physics; a physician treats people.', '/œ̃ fi.zi.sjɛ̃ fɛ d(ə) la fi.zik œ̃ med.sɛ̃ swaɲ/', 'uhⁿ fee-zee-SYEHⁿ | feh duh la fee-ZEEK | uhⁿ mayd-SEHⁿ SWANY', ['faux-ami']),
  sent(1161, 'Mon beau-père a la peau sensible au soleil.', 'My father-in-law has skin that is sensitive to the sun.', '/mɔ̃ bo.pɛʁ a la po sɑ̃.sibl o sɔ.lɛj/', 'mohⁿ boh-PEHR | a la POH | sahⁿ-SEEBL oh so-LEHY', ['faux-ami', 'proche']),
  sent(1162, 'Il s’est fait une blessure au bras en tombant.', 'He injured his arm when he fell.', '/il sɛ fɛ yn blɛ.syʁ o bʁa ɑ̃ tɔ̃.bɑ̃/', 'eel seh FEH | ün bleh-SÜR oh BRA | ahⁿ tohⁿ-BAHⁿ', ['faux-ami', 'proche']),
  sent(1163, 'Le mot savant n’est pas plus juste : demande toujours le mot courant.', 'The technical word is not more correct: always ask for the everyday one.', '/lə mo sa.vɑ̃ nɛ pa ply ʒyst də.mɑ̃d tu.ʒuʁ lə mo ku.ʁɑ̃/', 'luh moh sa-VAHⁿ | neh pa plü ZHÜST | duh-mahⁿd too-ZHOOR | luh moh koo-RAHⁿ', ['rule', 'registre'], ['flashcard'],
    rule('Le médecin dit « dyspnée ». Tu dois connaître ce mot ?', 'Non : tu peux demander le mot courant (essoufflé). Le mot savant est plus précis pour le médecin, pas plus juste pour toi.')),
];

/* ── ACT 11 · PARLER POUR UN PROCHE ───────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1164, 'Je l’accompagne : c’est mon beau-père, il entend mal.', 'I am here with him: he is my father-in-law, and he is hard of hearing.', '/ʒə la.kɔ̃.paɲ sɛ mɔ̃ bo.pɛʁ il ɑ̃.tɑ̃ mal/', 'zhuh la-kohⁿ-PAHNY | seh mohⁿ boh-PEHR | eel ahⁿ-tahⁿ MAL', ['proche', 'ecoute'], FCVDR),
  sent(1165, 'Il m’a demandé de rester avec lui pendant la consultation.', 'He asked me to stay with him during the consultation.', '/il ma d(ə).mɑ̃.de d(ə) ʁɛs.te a.vɛk lɥi pɑ̃.dɑ̃ la kɔ̃.syl.ta.sjɔ̃/', 'eel ma dmahⁿ-DAY | duh rehs-TAY a-vehk LWEE | pahⁿ-dahⁿ la kohⁿ-sül-ta-SYOHⁿ', ['proche', 'ecoute']),
  ph(1166, 'désigner une personne de confiance', 'to name a trusted person (France)', '/de.zi.ɲe yn pɛʁ.sɔn də kɔ̃.fjɑ̃s/', 'day-zee-NYAY | ün pehr-SONN | duh kohⁿ-FYAHⁿSS', ['proche', 'france'], 'En France, le patient peut choisir quelqu’un pour l’accompagner et être consulté s’il ne peut plus s’exprimer.'),
  sent(1167, 'Depuis trois semaines, il a des vertiges le matin, en se levant.', 'For three weeks he has been dizzy in the mornings when he gets up.', '/də.pɥi tʁwa sə.mɛn il a de vɛʁ.tiʒ lə ma.tɛ̃ ɑ̃ s(ə) lə.vɑ̃/', 'duh-pwee trwa SMEHNN | eel a day vehr-TEEZH | luh ma-TEHⁿ | ahⁿ suh luh-VAHⁿ', ['proche', 'ecoute'], FCVDR),
  sent(1168, 'Il dit qu’il se sent plus fatigué que d’habitude.', 'He says he feels more tired than usual.', '/il di kil sə sɑ̃ ply fa.ti.ge kə da.bi.tyd/', 'eel DEE | keel suh sahⁿ plü fa-tee-GAY | kuh da-bee-TÜD', ['proche', 'ecoute']),
  sent(1169, 'Il prend un traitement contre l’hypertension depuis dix ans.', 'He has been on treatment for high blood pressure for ten years.', '/il pʁɑ̃ œ̃ tʁɛt.mɑ̃ kɔ̃.tʁə li.pɛʁ.tɑ̃.sjɔ̃ də.pɥi di.zɑ̃/', 'eel prahⁿ uhⁿ treht-MAHⁿ | kohⁿ-truh lee-pehr-tahⁿ-SYOHⁿ | duh-pwee dee-ZAHⁿ', ['proche', 'ecoute']),
  sent(1170, 'Est-ce que je peux rester avec lui pendant l’examen ?', 'May I stay with him during the examination?', '/ɛs.kə ʒə pø ʁɛs.te a.vɛk lɥi pɑ̃.dɑ̃ lɛg.za.mɛ̃/', 'ehs-kuh zhuh PUH | rehs-TAY a-vehk LWEE | pahⁿ-dahⁿ lehg-za-MEHⁿ', ['proche'], FCVDR),
  sent(1171, 'Les résultats ne sont pas tout à fait ceux que nous espérions.', 'The results are not quite what we had hoped for.', '/le ʁe.zyl.ta nə sɔ̃ pa tu.ta.fɛ sø kə nu.zɛs.pe.ʁjɔ̃/', 'lay ray-zül-TA | nuh sohⁿ pa too-ta-FEH | suh kuh noo-zehs-pay-RYOHⁿ', ['prudence', 'ecoute'], FCVDR),
  sent(1172, 'À ce stade, on ne peut rien affirmer.', 'At this stage, nothing can be said for certain.', '/a sə stad ɔ̃ nə pø ʁjɛ̃.na.fiʁ.me/', 'a suh STAD | ohⁿ nuh puh ryehⁿ-na-feer-MAY', ['prudence', 'ecoute'], FCVDR),
  sent(1173, 'Il n’est pas exclu qu’on doive adapter son traitement.', 'It is not ruled out that his treatment may need adjusting.', '/il nɛ pa.zɛks.kly kɔ̃ dwav a.dap.te sɔ̃ tʁɛt.mɑ̃/', 'eel neh pa-zehks-KLÜ | kohⁿ dwav a-dap-TAY | sohⁿ treht-MAHⁿ', ['prudence', 'ecoute']),
  sent(1174, 'Je préfère être prudente et demander des examens complémentaires.', 'I would rather be careful and ask for further tests.', '/ʒə pʁe.fɛʁ ɛtʁ pʁy.dɑ̃t e d(ə).mɑ̃.de de.zɛg.za.mɛ̃ kɔ̃.ple.mɑ̃.tɛʁ/', 'zhuh pray-FEHR | ehtr prü-DAHⁿT | ay dmahⁿ-DAY | day-zehg-za-mehⁿ kohⁿ-play-mahⁿ-TEHR', ['prudence', 'ecoute']),
  sent(1175, 'Ce n’est pas alarmant, mais il faut surveiller.', 'It is not alarming, but it needs watching.', '/sə nɛ pa.za.laʁ.mɑ̃ mɛ il fo syʁ.ve.je/', 'suh neh pa-za-lar-MAHⁿ | meh eel foh sür-vay-YAY', ['prudence', 'ecoute'], FCVDR),
  ph(1176, 'des examens complémentaires', 'further tests', '/de.zɛg.za.mɛ̃ kɔ̃.ple.mɑ̃.tɛʁ/', 'day-zehg-za-MEHⁿ | kohⁿ-play-mahⁿ-TEHR', ['prudence'], 'D’autres examens, pour préciser ce que les premiers ont montré.'),
  sent(1177, 'Qu’est-ce que ça veut dire pour lui, concrètement ?', 'What does that mean for him, in practice?', '/kɛs.kə sa vø diʁ puʁ lɥi kɔ̃.kʁɛt.mɑ̃/', 'kehs-kuh sa vuh DEER | poor LWEE | kohⁿ-kreht-MAHⁿ', ['proche', 'ecoute'], FCVDR),
  sent(1178, 'Merci de nous avoir expliqué les choses aussi clairement.', 'Thank you for explaining things to us so clearly.', '/mɛʁ.si d(ə) nu.za.vwaʁ ɛks.pli.ke le ʃoz o.si klɛʁ.mɑ̃/', 'mehr-SEE | duh noo-za-VWAR | ehks-plee-KAY lay SHOZ | oh-see klehr-MAHⁿ', ['proche', 'ecoute']),
  sent(1179, 'Je comprends que ce soit difficile à entendre.', 'I understand that it is hard to hear.', '/ʒə kɔ̃.pʁɑ̃ kə sə swa di.fi.si.la ɑ̃.tɑ̃dʁ/', 'zhuh kohⁿ-PRAHⁿ | kuh suh SWA | dee-fee-see-la ahⁿ-TAHⁿDR', ['prudence', 'ecoute'], FCVDR),
  sent(1180, 'On va affronter ça ensemble.', 'We will face this together.', '/ɔ̃ va a.fʁɔ̃.te sa ɑ̃.sɑ̃bl/', 'ohⁿ va a-frohⁿ-TAY SA | ahⁿ-SAHⁿBL', ['proche']),
  ph(1181, 'annoncer une mauvaise nouvelle', 'to break bad news', '/a.nɔ̃.se yn mo.vɛz nu.vɛl/', 'a-nohⁿ-SAY | ün moh-vehz noo-VEHL', ['prudence']),
  ph(1182, 'parler au nom de quelqu’un', 'to speak on someone’s behalf', '/paʁ.le o nɔ̃ d(ə) kɛl.kœ̃/', 'par-LAY oh NOHⁿ | duh kehl-KUHⁿ', ['proche'], 'Avec son accord : il t’a demandé de le faire.'),
  sent(1183, 'Une mauvaise nouvelle s’annonce avec prudence : écoute les mots qui nuancent.', 'Bad news is broken carefully: listen for the words that soften it.', '/yn mo.vɛz nu.vɛl sa.nɔ̃s a.vɛk pʁy.dɑ̃s e.kut le mo ki nɥɑ̃s/', 'ün moh-vehz noo-VEHL | sa-NOHⁿSS | a-vehk prü-DAHⁿSS | ay-KOOT lay MOH | kee NWAHⁿSS', ['rule', 'prudence'], ['flashcard'],
    rule('Le médecin dit « il n’est pas exclu que ». Que comprends-tu ?', 'Que c’est possible, sans être sûr. Demande ce que ça veut dire concrètement, et quelle est la suite.')),
];

/* ── ACT 12 · À TOI D'ÉCRIRE ───────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1184, 'Je me permets de vous résumer sa situation avant votre premier rendez-vous.', 'Allow me to summarise his situation before your first appointment.', '/ʒə mə pɛʁ.mɛ d(ə) vu ʁe.zy.me sa si.tɥa.sjɔ̃ a.vɑ̃ vɔtʁ pʁə.mje ʁɑ̃.de.vu/', 'zhuh muh pehr-MEH | duh voo ray-zü-MAY | sa see-twa-SYOHⁿ | a-vahⁿ votr pruh-myay rahⁿ-day-VOO', ['modele'], FCVDR),
  sent(1185, 'Les symptômes sont apparus progressivement il y a environ un mois.', 'The symptoms came on gradually about a month ago.', '/le sɛ̃p.tom sɔ̃.ta.pa.ʁy pʁɔ.gʁɛ.siv.mɑ̃ il.ja ɑ̃.vi.ʁɔ̃ œ̃ mwa/', 'lay sehⁿp-TOHM | sohⁿ-ta-pa-RÜ | pro-greh-seev-MAHⁿ | eel-ya ahⁿ-vee-rohⁿ uhⁿ MWA', ['modele'], FCVDR),
  sent(1186, 'Ce que nous avons essayé n’a pas suffi.', 'What we have tried has not been enough.', '/sə kə nu.za.vɔ̃.ze.se.je na pa sy.fi/', 'suh kuh noo-za-vohⁿ-zay-say-YAY | na pa sü-FEE', ['modele']),
  sent(1187, 'J’aimerais vous poser trois questions.', 'I would like to ask you three questions.', '/ʒɛm.ʁɛ vu po.ze tʁwa kɛs.tjɔ̃/', 'zhehm-REH voo poh-ZAY | trwa kehs-TYOHⁿ', ['modele'], FCVDR),
  sent(1188, 'Faut-il refaire ces examens, ou ceux de Lyon suffisent-ils ?', 'Should these tests be done again, or are the ones from Lyon enough?', '/fo.til ʁə.fɛʁ se.zɛg.za.mɛ̃ u sø d(ə) ljɔ̃ sy.fiz.til/', 'foh-TEEL ruh-FEHR | say-zehg-za-MEHⁿ | oo suh duh LYOHⁿ | sü-feez-TEEL', ['modele']),
  sent(1189, 'Je joins à ce courriel le compte rendu de son hospitalisation.', 'I am attaching the report of his hospital stay to this email.', '/ʒə ʒwɛ̃ a sə ku.ʁjɛl lə kɔ̃t ʁɑ̃.dy d(ə) sɔ̃.nɔs.pi.ta.li.za.sjɔ̃/', 'zhuh ZHWEHⁿ | a suh koo-RYEHL | luh kohⁿt rahⁿ-DÜ | duh sohⁿ-nos-pee-ta-lee-za-SYOHⁿ', ['modele'], FCVDR),
  sent(1190, 'Je vous remercie par avance de votre attention.', 'Thank you in advance for your attention.', '/ʒə vu ʁə.mɛʁ.si paʁ a.vɑ̃s də vɔ.tʁa.tɑ̃.sjɔ̃/', 'zhuh voo ruh-mehr-SEE | par a-VAHⁿSS | duh vo-tra-tahⁿ-SYOHⁿ', ['modele']),
  sent(1191, 'Comme elle parle peu français, je l’accompagnerai.', 'As she speaks little French, I will go with her.', '/kɔm ɛl paʁl pø fʁɑ̃.sɛ ʒə la.kɔ̃.pa.ɲə.ʁɛ/', 'komm ehl parl puh frahⁿ-SEH | zhuh la-kohⁿ-pa-nyuh-REH', ['modele']),
  sent(1192, 'Elle se sent de plus en plus faible, surtout le matin.', 'She feels weaker and weaker, especially in the morning.', '/ɛl sə sɑ̃ d(ə) ply.zɑ̃ ply fɛbl syʁ.tu lə ma.tɛ̃/', 'ehl suh SAHⁿ | duh plü-zahⁿ plü FEHBL | sür-too luh ma-TEHⁿ', ['modele']),
  sent(1193, 'Elle prend ses médicaments au cours du repas, matin et soir.', 'She takes her medicines with her meals, morning and evening.', '/ɛl pʁɑ̃ se me.di.ka.mɑ̃ o kuʁ dy ʁə.pa ma.tɛ̃ e swaʁ/', 'ehl prahⁿ say may-dee-ka-MAHⁿ | oh koor dü ruh-PA | ma-tehⁿ ay SWAR', ['modele']),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Every reading lives here so the reading, the quiz and the task agree.
 *  B2 lengths, measured by the scratch check: readings 200 to 350 words,
 *  act texts 60 to 120. One apostrophe style, the typographic one. Every
 *  clinic, hospital, medicine and person is invented.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the clinic's information sheet. */
export const CLINIQUE_TEXT =
  'Clinique médicale du Plateau (Montréal) · Bien préparer votre consultation. Une consultation dure souvent une quinzaine de minutes. Pour que ce temps serve vraiment, préparez-la avant de venir. Commencez par le motif de consultation : en une phrase, dites ce qui vous amène. Décrivez ensuite vos symptômes avec précision. Où avez-vous mal, exactement ? Depuis quand ? La douleur est-elle apparue brusquement ou progressivement ? Est-elle continue, ou va-t-elle et vient-elle ? Sur une échelle de zéro à dix, où la situez-vous ? Qu’est-ce qui la soulage, et qu’est-ce qui l’aggrave ? Notez vos réponses : dans une salle d’examen, on oublie facilement l’essentiel. ' +
  'Apportez la liste de tous les médicaments que vous prenez, y compris ceux que vous achetez sans ordonnance, les vitamines et les produits naturels. Signalez aussi vos allergies et vos opérations passées. N’oubliez pas votre carte d’assurance maladie. ' +
  'Pendant la consultation, posez vos questions. Si un mot vous échappe, demandez qu’on vous l’explique autrement : aucun médecin ne vous en voudra. Mieux vaut faire répéter une phrase que repartir avec un doute. Si le français n’est pas votre langue maternelle, vous pouvez venir avec un proche, ou demander à l’accueil s’il est possible d’avoir un interprète. ' +
  'Avant de partir, vérifiez que vous savez trois choses : ce que vous avez, ce que vous devez faire, et quand revenir. Notre équipe est là pour vous soigner ; vous, vous êtes là pour nous aider à comprendre.';

/** Act 3, the text beat: the triage nurse's note. */
export const TEXTE_A3 =
  'La note de l’infirmière du triage, à l’urgence. Motif : douleur au genou droit. Début : il y a trois semaines, après une course à pied ; apparition progressive. Localisation : juste sous la rotule, côté extérieur ; la douleur ne descend pas dans la jambe. Type : lancinante la nuit, aiguë quand le genou plie. Intensité : six sur dix le jour, huit la nuit. Aggravée par l’effort et les escaliers, soulagée par le repos et la glace. Pas de fièvre, pas de chute.';

/** Act 4: a health magazine's page on medical history. */
export const ANTECEDENTS_TEXT =
  'Le Carnet Santé · Vos antécédents en cinq minutes. Chez un nouveau médecin, la première consultation commence souvent par une série de questions sur votre passé médical. Ce ne sont pas des questions de routine : vos antécédents aident le médecin à interpréter vos symptômes d’aujourd’hui. Préparez-les donc comme on prépare un dossier. ' +
  'Commencez par vos antécédents personnels : les maladies que vous avez eues, les opérations, les hospitalisations, avec une date approximative. Précisez aussi si vous êtes suivi pour une maladie chronique, comme l’asthme ou le diabète. Viennent ensuite les antécédents familiaux : certaines maladies se retrouvent plus souvent dans une même famille, et le médecin voudra savoir si vos parents, vos frères ou vos sœurs en ont souffert. ' +
  'Troisième point, souvent négligé : les allergies. Distinguez bien une allergie d’une intolérance. Si vous avez déjà fait une réaction allergique à un médicament, notez son nom exact et ce qui s’est passé. Dressez enfin la liste de vos traitements en cours, sans rien oublier : les médicaments sur ordonnance, bien sûr, mais aussi ceux que vous achetez en vente libre, les vitamines et les produits naturels, qui peuvent interagir avec un nouveau traitement. ' +
  'Le médecin vous interrogera sans doute sur vos habitudes : tabac, alcool, sport, sommeil. Répondez simplement ; il ne vous juge pas, il cherche à comprendre. Et si vous ne connaissez pas la réponse, dites-le : « je ne sais pas » est une information, alors qu’une réponse inventée induit en erreur.';

/** Act 4, the text beat: the history the learner prepared. */
export const TEXTE_A4 =
  'Ce que j’ai préparé pour la clinique. Antécédents personnels : on m’a enlevé l’appendice à vingt ans ; mon asthme est suivi par une pneumologue et il est stable. Allergie : la pénicilline, avec une réaction à douze ans. Intolérance : le lactose, sans gravité. Traitements en cours : un inhalateur pour l’asthme, en cas de besoin, et de la vitamine D, sans ordonnance. Antécédents familiaux : du diabète du côté de ma mère, des problèmes cardiaques du côté de mon père. Habitudes : je ne fume pas et je bois très peu d’alcool. Mes vaccins sont à jour.';

/** Act 5, the text beat: the end of the consultation, transcribed. */
export const TEXTE_A5 =
  'La fin de la consultation, transcrite. La docteure Gagnon : On se revoit quand vous aurez les résultats. Si la douleur devient insupportable ou si le genou gonfle beaucoup, revenez sans attendre. Toi : D’accord. Et pour mon travail ? La docteure : Je vous fais un arrêt de travail de trois jours ; vous le remettez à votre employeur. Toi : Si je comprends bien, la radio d’abord, puis l’échographie, et on se revoit. La docteure : C’est exactement ça. Toi : Une dernière question : qu’est-ce que vous entendez par inflammation ? La docteure : Le tendon est irrité, un peu comme une peau qui rougit après un frottement.';

/** Act 6, the text beat: the pharmacy label and its note. FICTIONAL medicine. */
export const TEXTE_A6 =
  'L’étiquette et la fiche de la pharmacie (médicament fictif, doses inventées pour l’exercice). Tendalgine 200 mg. Un comprimé matin et soir, au cours du repas, pendant cinq jours. Ne pas prendre à jeun. Pas plus de deux comprimés par jour. Peut faire somnoler : prudence au volant. Le conseil du pharmacien : si vous prenez un autre médicament, même en vente libre, dites-le-nous avant de commencer. Existe en générique, moins cher. Cette ordonnance n’est pas renouvelable : pour continuer, il faudra revoir votre médecin.';

/** Act 7: the leaflet. FICTIONAL medicine; the phrasing is the standard one. */
export const NOTICE_TEXT =
  'Notice : information de l’utilisateur. Tendalgine 200 mg, comprimé (médicament fictif : ce texte et ses doses sont inventés pour l’exercice). Veuillez lire attentivement cette notice avant de prendre ce médicament, et gardez-la : vous pourriez avoir besoin de la relire. ' +
  '1. Qu’est-ce que Tendalgine et dans quels cas est-il utilisé ? Tendalgine est un anti-inflammatoire. Il est utilisé pour soulager les douleurs des tendons et des articulations. ' +
  '2. Quelles sont les informations à connaître avant de prendre Tendalgine ? Ne prenez jamais ce médicament si vous êtes allergique à l’un de ses composants, ou si vous avez déjà eu un ulcère de l’estomac. Ce médicament est déconseillé pendant la grossesse. Signalez à votre médecin tout autre médicament que vous prenez, même sans ordonnance. ' +
  '3. Comment prendre Tendalgine ? Respectez toujours la posologie indiquée par votre médecin. Dans cet exemple, la dose habituelle est d’un comprimé matin et soir, au cours du repas. Ne dépassez pas la dose prescrite. Si vous oubliez une dose, ne prenez pas de dose double pour compenser. ' +
  '4. Quels sont les effets indésirables éventuels ? Comme tous les médicaments, ce médicament peut provoquer des effets indésirables, mais ils ne surviennent pas systématiquement chez tout le monde : maux d’estomac, nausées, somnolence. En cas de réaction allergique, arrêtez le traitement et consultez immédiatement un médecin. ' +
  '5. Comment conserver Tendalgine ? Tenir hors de la vue et de la portée des enfants. À conserver à une température ne dépassant pas vingt-cinq degrés.';

/** Act 7, the text beat: another part of the same leaflet. */
export const TEXTE_A7 =
  'Un autre passage de la notice (médicament fictif). Si vous avez pris plus de Tendalgine que vous n’auriez dû : consultez immédiatement votre médecin ou votre pharmacien. Si vous oubliez de prendre Tendalgine : ne prenez pas de dose double pour compenser la dose que vous avez oublié de prendre. Si vous arrêtez de prendre Tendalgine : parlez-en d’abord à votre médecin. Conduite de véhicules : ce médicament peut provoquer une somnolence ; soyez prudent. Grossesse : l’utilisation de ce médicament est déconseillée. Si vous avez d’autres questions, demandez plus d’informations à votre médecin ou à votre pharmacien.';

/** Act 8: the Lyon hospital's discharge letter. Hospital and people invented. */
export const LETTRE_TEXT =
  'Hôpital des Quatre-Vents, Lyon (établissement fictif) · Service de cardiologie. Compte rendu d’hospitalisation. Patient : M. Gérard Martin, né le 3 mai 1952. Hospitalisé du 12 au 15 mars. À l’attention du docteur Paul Rey, médecin traitant. ' +
  'Cher confrère, j’ai reçu dans le service votre patient, M. Martin, soixante-treize ans, pour des malaises avec vertiges survenus au lever. Antécédents : hypertension artérielle traitée depuis dix ans ; prothèse du genou gauche en 2019. Pas d’allergie connue. Le patient signale également des céphalées matinales et une asthénie depuis plusieurs semaines. ' +
  'Le bilan sanguin est normal. L’examen retrouve une hypertension mal équilibrée, et l’électrocardiogramme montre de brefs épisodes de tachycardie. Nous avons adapté son traitement contre l’hypertension ; vous trouverez le traitement de sortie sur l’ordonnance jointe. Le patient est sorti le 15 mars, en bon état général. ' +
  'Suivi proposé : un rendez-vous de contrôle avec vous dans un mois, et un enregistrement du rythme cardiaque sur vingt-quatre heures, à prévoir. M. Martin nous informe qu’il va s’installer prochainement au Québec, près de sa famille : nous lui avons remis une copie de son dossier et de ce compte rendu, que nous vous adressons également. ' +
  'Restant à votre disposition, je vous prie de croire, cher confrère, à l’expression de mes sentiments confraternels. Docteure Anne Vasseur, cardiologue.';

/** Act 8, the text beat: the learner's email to the Lyon GP. */
export const TEXTE_A8 =
  'Objet : dossier médical de M. Gérard Martin. Docteur, je vous écris au nom de mon beau-père, Gérard Martin, votre patient depuis de nombreuses années. Il s’est installé à Montréal le mois dernier et cherche un médecin de famille. Pourriez-vous nous transmettre une copie de son dossier, en particulier la liste de ses traitements et les résultats de ses derniers examens ? Il vous donne son accord par écrit : vous trouverez sa lettre signée en pièce jointe. Je vous remercie par avance et vous prie d’agréer, Docteur, mes salutations distinguées.';

/** Act 9, the text beat: a consent form. Establishment invented. */
export const TEXTE_A9 =
  'Formulaire de consentement (extrait, établissement fictif). Je reconnais avoir reçu du docteur Benali des explications claires sur l’intervention proposée : une arthroscopie du genou droit. On m’a expliqué ce qu’elle implique, ses bénéfices attendus, ses risques et les autres options possibles, dont la physiothérapie. J’ai pu poser toutes mes questions et j’ai disposé d’un délai de réflexion suffisant. Je sais que je peux retirer mon consentement à tout moment avant l’intervention. En signant ce document, je donne mon accord libre et éclairé.';

/** Act 10, the text beat: an extract of the Lyon letter's jargon. */
export const TEXTE_A10 =
  'Un autre extrait du compte rendu de Lyon. Le patient signale des céphalées matinales et une asthénie depuis plusieurs semaines. Pas de dyspnée au repos. L’examen retrouve une hypertension artérielle mal équilibrée. L’électrocardiogramme montre de brefs épisodes de tachycardie. Une petite lésion de la peau du bras, d’aspect bénin, sera surveillée par son médecin traitant. Le prurit signalé à l’entrée a disparu.';

/** Act 11, the text beat: the message to the relative's daughter. */
export const TEXTE_A11 =
  'Émilie, je sors de l’urgence avec ton père ; il va bien et il se repose. La médecin a été très claire, et très prudente. Les résultats ne sont pas tout à fait ceux qu’elle espérait : son cœur s’emballe parfois, et il n’est pas exclu qu’on doive adapter son traitement. À ce stade, elle ne peut rien affirmer ; elle demande des examens complémentaires. Ce n’est pas alarmant, m’a-t-elle dit, mais il faut surveiller. Le plus urgent, c’est de lui trouver un médecin de famille. Je m’en occupe demain. Je t’embrasse.';

/** Act 12: the model account (a DIFFERENT relative from the task's, so the
 *  task is not given away). */
export const MODELE_TEXT =
  'Objet : ma mère, Mme Nadia Haddad, avant son premier rendez-vous. Docteure, ma mère, Mme Nadia Haddad, soixante-dix-neuf ans, a rendez-vous avec vous le 14 octobre ; c’est sa première consultation à votre clinique. Comme elle parle peu français, je l’accompagnerai, et je me permets de vous résumer sa situation. ' +
  'Ses antécédents : un diabète suivi depuis quinze ans, une opération de la cataracte en 2021 et une allergie à l’aspirine. Elle ne fume pas. ' +
  'Le motif de la consultation : depuis environ deux mois, elle se sent de plus en plus faible, surtout le matin, et elle est tombée deux fois dans son appartement, sans se blesser. Les symptômes sont apparus progressivement ; elle dit avoir la tête qui tourne quand elle se lève trop vite. ' +
  'Ce que nous avons essayé : sur les conseils de sa pharmacienne, elle boit davantage et se lève plus lentement, mais cela n’a pas suffi. Elle prend ses médicaments contre le diabète au cours du repas, matin et soir ; je joins la liste complète. ' +
  'J’aimerais vous poser trois questions. Faut-il revoir son traitement ? Un bilan sanguin serait-il utile ? Et que pouvons-nous faire, à la maison, pour éviter une nouvelle chute ? ' +
  'Je vous remercie par avance de votre attention et vous prie d’agréer, Docteure, mes salutations respectueuses. Samir Haddad';

/** The task's model answer, annotated after the signature (outside the word
 *  count). Situation A. The signature is a gender-neutral name. */
export const TASK_MODEL =
  'Objet : M. Gérard Martin, avant son premier rendez-vous\n\n' +
  'Docteure,\n\n' +
  'Mon beau-père, M. Gérard Martin, soixante-quatorze ans, a rendez-vous avec vous le 3 novembre. Il s’est installé à Montréal cet été, et je me permets de vous résumer sa situation, car il entend mal et se fatigue vite en consultation.\n\n' +
  'Ses antécédents : une hypertension traitée depuis dix ans, une prothèse du genou gauche en 2019 et aucune allergie connue. Il ne fume pas. En mars, il a été hospitalisé trois jours à Lyon pour des malaises ; je joins le compte rendu d’hospitalisation, qui mentionne de brefs épisodes de tachycardie.\n\n' +
  'Le motif de la consultation : depuis trois semaines, il a des vertiges le matin, en se levant, et il se sent plus fatigué que d’habitude. Les vertiges sont apparus progressivement ; ils durent quelques secondes, par moments un peu plus. Il a aussi des maux de tête au réveil, qu’il situe à quatre sur une échelle de zéro à dix.\n\n' +
  'Ce qui a été essayé : à Lyon, l’hôpital avait adapté son traitement contre l’hypertension, sans vraie amélioration. La semaine dernière, à l’urgence, on a demandé des examens complémentaires.\n\n' +
  'J’aimerais vous poser trois questions. Faut-il refaire ces examens, ou ceux de Lyon suffisent-ils ? Son traitement doit-il être revu ? Et puis-je rester avec lui pendant les consultations, pour qu’il ne manque rien ?\n\n' +
  'Je vous remercie par avance de votre attention et vous prie d’agréer, Docteure, mes salutations respectueuses.\n\n' +
  'Dominique Roy\n\n' +
  'Les repères de la correctrice (hors décompte) :\n' +
  '1. Tâche : qui écrit et pourquoi, les antécédents, le motif (début, durée, fréquence, intensité), ce qui a été essayé, trois questions précises, une pièce jointe.\n' +
  '2. Cohérence : un paragraphe par rubrique, dans l’ordre d’une consultation ; les étiquettes (Ses antécédents, Le motif) guident le médecin.\n' +
  '3. Étendue : antécédents, hospitalisé, compte rendu d’hospitalisation, tachycardie, vertiges, apparus progressivement, par moments, une échelle de zéro à dix, examens complémentaires, l’urgence.\n' +
  '4. Correction : depuis + durée au présent (il a des vertiges depuis), il y a pour un moment, être apparu au passé composé, pour qu’il ne manque rien au subjonctif.\n' +
  '5. Registre : vouvoiement, je me permets de, les formules d’un courrier formel ; aucune familiarité, aucun conseil médical.';
