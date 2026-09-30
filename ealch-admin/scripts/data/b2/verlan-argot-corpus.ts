// b2.32.l1 « Le verlan et l’argot d’aujourd’hui » · the authored corpus, the
// imports, the long texts and the citation constants. DRAFT, to
// B1-BUILD-PLAYBOOK.md in the VOCAB SHAPE of B1-WORKSHOP-AND-VOCAB-SHAPES.md
// (§2, with the register rules of §1.2), under the B2 rules of b2/B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 32 of the B2 trail (Unit 6, variation)
// ══════════════════════════════════════════════════════════════════════════
//
//   RECOGNITION FIRST, THEN JUDGEMENT. The learner is taught to UNDERSTAND
//   slang and to CONVERT it to neutral French. Productive use stays with
//   courant and a few familier items, with a friend; never in writing.
//   The unit of teaching is a slang item IN A SENTENCE beside its neutral
//   version, placed on a four-rung ladder: argotique / familier / courant /
//   soutenu. (The schema's `register` field has three values; argotique rows
//   carry register 'familier' AND the tag 'argotique'.)
//
//     act 1   the ladder: the right word for the wrong person; les keufs /
//             les flics / la police / les forces de l’ordre; the task
//             announced; France-centric scope named
//     act 2   how verlan is built: syllables inverted by SOUND, the added
//             « e » of one-syllable words; laisse béton, ouf, relou, chelou,
//             zarbi; ouf the interjection is not ouf the verlan
//     act 3   the verlans that stayed: teuf, meuf, vénère (familier); reum,
//             keuf (argotique); re-verlan (meuf → feumeu); beur → rebeu
//             NAMED WITH ITS SENSITIVITY, never practised
//     act 4   clipping: appart, resto, ado, dispo, prof, ciné, sympa; the
//             clippings that climbed (métro, vélo, photo)
//     act 5   new endings: -os (calmos, tranquillos, rapidos), -oche
//             (cinoche, téloche, valoche), -ard (flemmard, froussard,
//             chauffard, pejorative)
//     act 6   borrowings: kiffer, avoir le seum, le bled, wesh, zarma (Arabic),
//             chiller, le crush (English), la go (West African French)
//     act 7   intensifiers and fillers: trop, grave, de ouf, c’est chaud,
//             genre, en mode
//     act 8   what dates and what lasts: c’est de la balle, chanmé, zarbi,
//             laisse béton (dated); en PLS, ça passe crème, c’est carré
//             (recent); relou, chelou (lasting); the adult who forces
//     act 9   texting: mdr, ptdr, jsp, tkt, stp, bcp, slt, dsl, oklm, jpp
//     act 10  translating up into neutral French; softening while you do
//             it; the words that are NOT translated because they are not
//             said (insults, slurs: named as existing, never listed)
//     act 11  the task (DELF B2 PE, register mediation), the quiz
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 25 in B1   the three registers, the textos (slt, jsp, mdr, stp,
//                       tkt, bcp, dsl, pk, qqch, rdv: rows reused), the
//                       reframe « Aucun registre n’est faux »; the ladder here
//                       adds the fourth rung below familier
//     lesson 26 in B1   tu and vous (the teacher and the manager get vous)
//     lessons 27-29 B1  idioms: « garde l’image, traduis le sens » quoted for
//                       the conversion work
//     lesson 20 in B1   the dropped ne (row reused), and lesson 21 in B2:
//                       « je serai pas là » is spoken, never written
//     lesson 38 in B1   « genre » the filler (rows reused)
//     lesson 39 in B1   the formal email and its formulas (reframe quoted)
//     lesson 31 in B2   regional French (Québec, Belgium, Africa), written in
//                       parallel: named as the place for regional slang
//
//   NO SLUR, NO SEXUAL SLANG, NO INSULT IS TAUGHT OR LISTED. Row .1185 says
//   such words exist and are not taught; act 10 teaches how to NOT use a
//   word you are unsure of. « beur / rebeu » appear ONCE, in a card and a
//   sheet, to show re-verlanisation and to say that words naming people by
//   their origin are sensitive and not for the learner (rows .1054, .1055);
//   the mechanism is PRACTISED on meuf → feumeu only. « keuf » is marked as
//   hostile in front of the police. « meuf » is marked as possibly
//   disrespectful when said about a woman who is present.
//
//   NO RULE-BREAKING SENTENCE IS A ROW BY ACCIDENT: every familier or
//   argotique row is a real, grammatical line of spoken French, marked as
//   such (register + tags). A slang line in the WRONG PLACE (« Madame, ce
//   retard est relou ») lives only in a `trapDrill.promptSound`, a
//   `commonErrors.wrong`, a scene `choice`, or a quiz `errorSpot`.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked and Postgres probed READ-ONLY 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `argot-des-jeunes` (« L’argot des jeunes », domain argot,
//     b1-b2), sub-theme « le verlan et l’argot d’aujourd’hui » already set in
//     Postgres (read back 2026-09-30).
//  2. POSTGRES (read-only, scratch/_b232-db.out): verlan a2 .001-.080, b1
//     .001-.050; argot-des-jeunes b1 .001-.100, b2 .001-.057; argot-du-
//     quotidien a1 .001-.148, a2 .001-.090; argot-classique b2 .001-.040, c1
//     .001-.070; expressions-argot a2 .001-.060, b1 .001-.056, b2
//     .001-.051; also argot-afrique (la go, s’enjailler) and sons
//     argot-de-base. ALL published; NOTHING at or above 1000 in
//     argot-des-jeunes at any level.
//  3. THE SEED (seedPlusPacks) HOLDS NONE OF THEM: verlan 0, argot-des-
//     jeunes 0, argot-du-quotidien 1, argot-classique 6, expressions-argot
//     14. So `src()` cannot name relou, meuf, wesh, kiffer, c’est chaud, en
//     mode, grave, ça passe crème, c’est carré, l’appart, le resto… Every one
//     of them is a DB-only HEADWORD. This corpus therefore authors NO row
//     whose French is one of those headwords: each item is taught in a
//     SENTENCE (« Il est relou avec ses questions, ton cousin. ») beside its
//     neutral twin. The phrase rows are items the DB does not hold (probed
//     one by one, scratch/_b232-db2.mts): calmos, tranquillos, le cinoche,
//     la téloche, flemmard, froussard, un chauffard, dispo, un ado, de ouf,
//     être en PLS, ptdr, oklm, jpp, la troncation, l’argot, un mot d’emprunt,
//     un mot daté, le registre argotique.
//  4. ID BLOCK: b2.32 owns `fr.b2.argot-des-jeunes.1000`-`.1199` AND NOTHING
//     ELSE. Used: .1000-.1199, contiguous, 200 rows. Compare full ids.
//     Seed-checked; DB id and twin check done read-only (_b232-dbtwins).
//  5. REUSED BY ID (seed rows, French in the trailing comments of IMPORTED):
//     lesson 25 in B1 (langue-soignee .1208-.1387), lesson 20 in B1
//     (negation-et-restriction .1167, .1168, .1177), lesson 26 in B1
//     (rp-etiquette .1003), lesson 38 in B1 (strategies-de-comprehension
//     .1308, .1318), lesson 35 in B1 (emotions .1111, « Ouf » the
//     interjection), a1.ecole .012 (le prof), b1 recits-au-passe .880 (ado),
//     b1 expressions-de-quantite .1159 (appart).
//  6. APOSTROPHES. Every authored French string uses ’. Imported seed rows
//     carry the straight one and are NEVER used in the scenario.
//  7. TEXTO ROWS (.1163-.1165, .1166, .1168) carry NO ipa and NO respell
//     and the `review` or flashcard drill only, as lesson 25 in B1 does.
//  8. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR, a real
//     /n/ or /m/ written double so `hasPlainNasal` cannot fire: reum RUHMM,
//     seum SUHMM, Karim ka-REEMM, madame ma-DAMM, examen stays MEHⁿ (nasal),
//     deuxième duh-ZYEMM, certaines sehr-TEHNN, copines ko-PEENN, pleine
//     PLEHNN, mdr ehmm-day-EHR, j’aimerais zhehmm-REH, homme NOMM, comme
//     KOMM, problème pro-BLEHMM, crème KREHMM. No U+203F tie anywhere.
//
//  9. EVERY ITEM, ITS RUNG AND ITS MEANING, FOR THE FACT CHECK (§A.9).
//     Checked against: Le Robert (dico en ligne), Larousse en ligne,
//     Wiktionnaire, Dictionnaire de la zone. Rung: ARG argotique (a group's
//     word, opaque to others), FAM familier (understood by all, among
//     friends), COU courant, SOU soutenu. « daté » = dated.
//       VERLAN
//       laisse béton      FAM, daté      laisse tomber; popularised by
//                                        Renaud's song « Laisse béton » (1977)
//       ouf               FAM            fou: fou, incroyable (c’est ouf)
//       de ouf            FAM            énormément, incroyable (après un nom
//                                        ou un verbe)
//       relou             FAM            lourd: pénible, agaçant
//       chelou            FAM            louche: bizarre, suspect
//       zarbi             FAM, daté      bizarre
//       vénère            FAM            énervé: très en colère
//       teuf              FAM            fête
//       meuf              FAM            femme: femme, fille, petite amie;
//                                        can sound disrespectful about a
//                                        woman who is present
//       feumeu            ARG            re-verlan of meuf (recognition)
//       reum              ARG            mère
//       keuf              ARG            flic: policier; hostile in front of
//                                        the police
//       beur, rebeu       SENSITIVE      verlan of arabe, then its re-verlan;
//                                        words naming people by origin; beur
//                                        dated (1980s); NOT for the learner
//       chanmé            FAM, daté      méchant (au sens de génial): génial
//       CLIPPING (troncation)
//       l’appart, le resto, un ado, dispo, le prof, le ciné, sympa   FAM
//       le métro, le vélo, la photo      COU (clippings that climbed:
//                                        chemin de fer métropolitain,
//                                        vélocipède, photographie)
//       le proprio        FAM            propriétaire (in a text only)
//       NEW ENDINGS (resuffixation)
//       calmos            FAM            du calme, calmement
//       tranquillos       FAM            tranquillement
//       rapidos           FAM            rapidement
//       le cinoche        FAM            le cinéma
//       la téloche        FAM, un peu daté   la télévision
//       la valoche        FAM            la valise
//       flemmard          FAM            paresseux (-ard: pejorative)
//       froussard         FAM            peureux (-ard: pejorative)
//       un chauffard      COU            a reckless driver (-ard: pejorative)
//       BORROWINGS
//       kiffer            FAM            aimer beaucoup (from Arabic kif)
//       avoir le seum     FAM            être déçu, frustré (from Arabic,
//                                        « venin »)
//       le bled           FAM            the home village or country (Arabic
//                                        blad); un bled perdu: a remote hole
//       wesh              ARG            salut; also surprise (Algerian Arabic)
//       zarma             ARG            soi-disant, as if (Maghrebi Arabic)
//       chiller           FAM            se détendre (English chill)
//       le crush          FAM            a crush (English)
//       la go             ARG in France  la fille, la petite amie; from the
//                                        French of Côte d’Ivoire (and West
//                                        Africa), spread by rap
//       INTENSIFIERS AND FILLERS
//       trop (trop bien)  FAM            très (not negative here)
//       grave             FAM            vraiment, très; « Grave. » = totally
//       c’est chaud       FAM            c’est difficile, risqué
//       genre             FAM            hesitation, example, approximation
//       en mode + nom     FAM            comme, à la manière de
//       RECENT, CAN DATE FAST
//       être en PLS       FAM            PLS = position latérale de sécurité;
//                                        figuratively: épuisé, anéanti, mal à
//                                        l’aise
//       ça passe crème    FAM            ça passe sans problème
//       c’est carré       FAM            c’est réglé, impeccable
//       c’est de la balle FAM, daté      c’est génial (late 1990s-2000s)
//       chébran           FAM, très daté branché (1980s; in a text only)
//       la gênance        FAM, récent    la gêne (in a text only)
//       TEXTING
//       mdr (mort de rire), ptdr (pété de rire), jsp (je sais pas), tkt
//       (t’inquiète), stp, bcp, slt, dsl, pk, qqch, rdv, jpp (j’en peux
//       plus), oklm (au calme; popularised by rap around 2014, Booba's
//       single « OKLM »)
//
//  10. FACTUAL CLAIMS FOR A FACT CHECK (every one is in a row or a text):
//     a. « verlan » comes from « l’envers ».                       (.1018)
//     b. verlan inverts sounds, not letters; a one-syllable word usually
//        takes an added « e » sound first (lourd → relou, femme → meuf);
//        fou → ouf is simply reversed sound by sound.        (.1021-.1023)
//     c. verlan is old but spread widely from the 1970s, in the suburbs of
//        big cities.                                               (.1025)
//     d. Renaud's « Laisse béton », 1977.                          (.1024)
//     e. métro < chemin de fer métropolitain, vélo < vélocipède.   (.1071)
//     f. kiffer, le seum, le bled, wesh come from Arabic; chiller and
//        crush from English; la go from the French of Côte d’Ivoire.
//                                                          (.1118-.1120)
//     g. kiffer is in the dictionaries marked familier.   (READING_A6)
//     h. PLS = position latérale de sécurité.              (.1157 notes)
//     i. « c’est de la balle » was fashionable in the late 1990s. (TEXTE_A8)
//     j. oklm popularised by rap around 2014.              (.1164 notes)
//     k. mdr often softens a message rather than reporting laughter. (.1170)
//     l. beur was the 1980s word; words naming people by origin are
//        sensitive.                                         (.1054, .1055)
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
  id: 'b2.32',
  seq: 32,
  title: 'Verlan and Modern Slang',
  sub: 'Le verlan et l’argot d’aujourd’hui',
  canDo: 'Can recognise verlan, clipped and resuffixed words, borrowings, intensifiers and texting abbreviations in speech and messages, place each on the register ladder, say who can use it with whom and when it would embarrass or offend, and rewrite a slang-filled exchange as a neutral email',
  prereqUnitIds: ['b1.25', 'b1.26', 'b1.39'],
} as const;

export const LESSON_ID = 'b2.32.l1';
export const THEME = 'argot-des-jeunes';
export const LEVEL = 'b2' as const;

/** ONE block. Everything below 1000 is published (b1 .001-.100, b2 .001-.057). */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B1 and B2 labels are French, from the plan (a B1 or B2 unit id's number
 *  IS its trail position).
 * ══════════════════════════════════════════════════════════════════════════ */

export const NEGATION_B1_UNIT = 'b1.20';
export const REGISTRES_UNIT = 'b1.25';
export const TUVOUS_UNIT = 'b1.26';
export const CORPS_UNIT = 'b1.27';
export const ANIMAUX_UNIT = 'b1.28';
export const COULEURS_UNIT = 'b1.29';
export const ECOUTE_UNIT = 'b1.38';
export const COURRIELS_UNIT = 'b1.39';
export const NEGATIONS_B2_UNIT = 'b2.21';
export const STYLE_UNIT = 'b2.22';
export const REGIONAL_UNIT = 'b2.31';
export const TRADUIRE_UNIT = 'b2.33';

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

export const NEGATION_B1_REF = refFr(NEGATION_B1_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const TUVOUS_REF = refFr(TUVOUS_UNIT);
export const CORPS_REF = refFr(CORPS_UNIT);
export const ANIMAUX_REF = refFr(ANIMAUX_UNIT);
export const COULEURS_REF = refFr(COULEURS_UNIT);
export const ECOUTE_REF = refFr(ECOUTE_UNIT);
export const COURRIELS_REF = refFr(COURRIELS_UNIT);
export const NEGATIONS_B2_REF = refFr(NEGATIONS_B2_UNIT);
export const STYLE_REF = refFr(STYLE_UNIT);
export const REGIONAL_REF = refFr(REGIONAL_UNIT);
export const TRADUIRE_REF = refFr(TRADUIRE_UNIT);
export const REGISTRES_REF_EN = refEn(REGISTRES_UNIT);
export const TUVOUS_REF_EN = refEn(TUVOUS_UNIT);
export const COURRIELS_REF_EN = refEn(COURRIELS_UNIT);
export const NEGATIONS_B2_REF_EN = refEn(NEGATIONS_B2_UNIT);
export const REGIONAL_REF_EN = refEn(REGIONAL_UNIT);

/** Neighbour reframes, re-exported rather than retyped. */
export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B126_REFRAME, REFRAME_EN as B126_REFRAME_EN } from '../b1/tu-ou-vous-corpus.ts';
export { REFRAME as B128_REFRAME, REFRAME_EN as B128_REFRAME_EN } from '../b1/expressions-animaux-corpus.ts';
export { REFRAME as B120_REFRAME, REFRAME_EN as B120_REFRAME_EN } from '../b1/negation-avancee-corpus.ts';
export { REFRAME as B138_REFRAME, REFRAME_EN as B138_REFRAME_EN } from '../b1/strategies-ecoute-corpus.ts';
export { REFRAME as B139_REFRAME, REFRAME_EN as B139_REFRAME_EN } from '../b1/courriels-lettres-corpus.ts';
export { REFRAME as B221_REFRAME, REFRAME_EN as B221_REFRAME_EN } from './negations-combinees-corpus.ts';
export { REFRAME as B222_REFRAME, REFRAME_EN as B222_REFRAME_EN } from './style-academique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  L’ÉCHELLE: a ladder with four rungs (argotique, familier, courant,
 *  soutenu), in every chapter image as a slim ochre ladder. The learner
 *  climbs DOWN to understand (acts 2 to 9: every rung, down to the bottom)
 *  and speaks or writes at the rung of the person listening (acts 1, 10,
 *  11). It is NOT « slang is wrong » (lesson 25 in B1: no register is
 *  wrong) and NOT « talk like the young to fit in » (act 8: the adult who
 *  forces).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Comprends jusqu’en bas de l’échelle, parle à la hauteur de qui t’écoute.';
export const REFRAME_EN = 'Understand all the way down the ladder; speak at the level of whoever is listening.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Ne parle jamais argot.',
    why: 'False against lesson 25 in B1 (« aucun registre n’est faux ») and against act 7: grave or c’est chaud with a friend is natural French. The lesson limits production; it does not forbid it.',
  },
  {
    text: 'L’argot, c’est la langue des jeunes.',
    why: 'False in act 8: relou and chelou are used by parents and children alike, and the argot classique of lesson 25 in B1 (bouquin, bagnole) belongs to every age. It also makes slang a matter of age, when the lesson makes it a matter of listener.',
  },
  {
    text: 'Le verlan, c’est l’envers des mots.',
    why: 'True of verlan only: clipping (act 4), new endings (act 5), borrowings (act 6) and intensifiers (act 7) turn nothing back to front. Too small for the lesson.',
  },
  {
    text: 'Parle comme les Français pour avoir l’air naturel.',
    why: 'The opposite of act 8 and act 6: a learner who imitates youth slang sounds as if they are forcing, or mocking. Naturalness comes from the right rung, not the lowest one.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from the seed (seedPlusPacks) on 2026-09-30 and its
 *  French is in the trailing comment. None is used in the scenario
 *  (straight apostrophes). The lesson file checks each one at load.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.langue-soignee.1215',                 // Aucun registre n'est faux. Chacun va avec une personne et un moment.  (flashcard only)
    'fr.b1.langue-soignee.1235',                 // le familier
    'fr.b1.langue-soignee.1236',                 // le courant
    'fr.b1.langue-soignee.1237',                 // le soutenu
    'fr.b1.langue-soignee.1257',                 // Un mot familier n'est pas une faute. C'est un mot entre amis.  (flashcard only)
    'fr.b1.langue-soignee.1346',                 // Trop familier, tu sembles négligent. Trop soutenu, tu sembles distant.  (flashcard only)
    'fr.b1.rp-etiquette.1003',                   // Tu ou vous règle la distance. La personne, elle, ne change pas.  (flashcard only)
  ],
  act2: [
    'fr.b1.emotions.1111',                       // Ouf, j'ai eu mon train de justesse.
  ],
  act3: [] as string[],
  act4: [
    'fr.b1.recits-au-passe.880',                 // Quand j'étais ado, j'écoutais la radio toute la nuit.
    'fr.b1.expressions-de-quantite.1159',        // On se voit tout à l'heure au nouvel appart.
    'fr.b1.langue-soignee.1248',                 // On s'est fait un resto avec les potes.
    'fr.b1.langue-soignee.1249',                 // Nous sommes allés au restaurant avec des amis.
    'fr.a1.ecole.012',                           // le prof  (flashcard only)
  ],
  act5: [] as string[],
  act6: [] as string[],
  act7: [
    'fr.b1.strategies-de-comprehension.1318',    // genre
    'fr.b1.strategies-de-comprehension.1308',    // T'as vu les prix ? Genre, dix dollars la bière, c'est trop.
  ],
  act8: [] as string[],
  act9: [
    'fr.b1.langue-soignee.1300',                 // slt  (review only)
    'fr.b1.langue-soignee.1301',                 // qqch  (review only)
    'fr.b1.langue-soignee.1302',                 // jsp  (review only)
    'fr.b1.langue-soignee.1303',                 // mdr  (review only)
    'fr.b1.langue-soignee.1304',                 // stp  (review only)
    'fr.b1.langue-soignee.1305',                 // tkt  (review only)
    'fr.b1.langue-soignee.1306',                 // rdv  (review only)
    'fr.b1.langue-soignee.1307',                 // bcp  (review only)
    'fr.b1.langue-soignee.1308',                 // dsl  (review only)
    'fr.b1.langue-soignee.1309',                 // pk  (review only)
    'fr.b1.langue-soignee.1314',                 // Les abréviations vont aux amis. Un courriel les écrit en entier.  (flashcard only)
    'fr.b1.langue-soignee.1311',                 // T'inquiète, on rentre tôt.
    'fr.b1.negation-et-restriction.1167',        // Je sais pas.
    'fr.b1.negation-et-restriction.1168',        // Je ne sais pas.
    'fr.b1.negation-et-restriction.1177',        // À l'oral, ne tombe souvent. À l'écrit, il reste toujours.  (flashcard only)
  ],
  act10: [
    'fr.b1.langue-soignee.1348',                 // Excusez-moi pour ce message un peu trop familier.
  ],
  act11: [
    'fr.b1.langue-soignee.1387',                 // Je vous prie de m’excuser pour ce contretemps.
    'fr.b1.langue-soignee.1208',                 // Merci de votre compréhension.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: string[] = [
  'fr.b1.langue-soignee.1300', 'fr.b1.langue-soignee.1301', 'fr.b1.langue-soignee.1302',
  'fr.b1.langue-soignee.1303', 'fr.b1.langue-soignee.1304', 'fr.b1.langue-soignee.1305',
  'fr.b1.langue-soignee.1306', 'fr.b1.langue-soignee.1307', 'fr.b1.langue-soignee.1308',
  'fr.b1.langue-soignee.1309',
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE: string[] = [
  ...NOT_DECK_ABLE,
  'fr.b1.langue-soignee.1215', 'fr.b1.langue-soignee.1257', 'fr.b1.langue-soignee.1346',
  'fr.b1.rp-etiquette.1003', 'fr.a1.ecole.012', 'fr.b1.langue-soignee.1314',
  'fr.b1.negation-et-restriction.1177',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Slang rows (FAM, ARG) carry flashcard + review ONLY: recognised and
 *  reviewed, never put in the learner's mouth by a speak mission. Courant
 *  and soutenu rows carry voiceflash (and dictation where useful).
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
type Reg = NonNullable<Item['register']>;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FR = ['flashcard', 'review'] as Item['drills'];
const FO = ['flashcard'] as Item['drills'];
const GP = ['verlan-argot'];

/** A phrase: the item itself (only where the DB holds no such headword). */
const ph = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  notes?: string, register: Reg = 'courant', drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register, grammarPoints: GP,
  ...(notes ? { notes } : {}),
});

/** A courant sentence (the default), or a slang one through `fam()` / `arg()`. */
const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: 'courant', grammarPoints: GP, ...extra,
});

/** A familier line of speech: recognised, never a speak drill. */
const fam = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string): Row =>
  sent(n, fr, en, ipa, respell, ['familier', ...tags], FR, { register: 'familier', ...(notes ? { notes } : {}) });

/** An argotique line: register 'familier' (the schema has three rungs) plus the tag. */
const arg = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], notes?: string): Row =>
  sent(n, fr, en, ipa, respell, ['argotique', ...tags], FR, { register: 'familier', ...(notes ? { notes } : {}) });

/** A texto: written only, no ipa, no respell. */
const tx = (n: number, kind: 'phrase' | 'sentence', fr: string, en: string, tags: string[], drills: Item['drills'], notes?: string): Row => ({
  id: E(n), kind, level: LEVEL, theme: THEME, fr, en, tags: ['texto', ...tags], drills,
  version: 1, register: 'familier', grammarPoints: GP, ...(notes ? { notes } : {}),
});

/** A rule card: `prompt` is the question, `notes` the answer. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · L’ÉCHELLE ─────────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  fam(1000, 'C’est relou, le livreur est arrivé super tard.', 'It’s such a pain, the delivery guy turned up really late.', '/sɛ ʁə.lu lə li.vʁœʁ ɛ.ta.ʁi.ve sy.pɛʁ taʁ/', 'seh ruh-LOO | luh lee-VRUHR | eh-ta-ree-vay sü-pehr TAR', ['scene']),
  sent(1001, 'C’est pénible : le livreur est arrivé très en retard.', 'It is annoying: the delivery driver arrived very late.', '/sɛ pe.nibl lə li.vʁœʁ ɛ.ta.ʁi.ve tʁɛ.zɑ̃ ʁə.taʁ/', 'seh pay-NEEBL | luh lee-VRUHR | eh-ta-ree-vay treh-zahⁿ ruh-TAR', ['scene', 'neutre'], FCVDR),
  arg(1002, 'Les keufs sont arrivés.', 'The cops showed up.', '/le kœf sɔ̃.ta.ʁi.ve/', 'lay KUHF | sohⁿ-ta-ree-VAY', ['echelle'], 'Argotique, verlan de flic. Devant un policier, le mot sonne hostile.'),
  fam(1003, 'Les flics sont arrivés.', 'The cops arrived.', '/le flik sɔ̃.ta.ʁi.ve/', 'lay FLEEK | sohⁿ-ta-ree-VAY', ['echelle']),
  sent(1004, 'La police est arrivée.', 'The police arrived.', '/la pɔ.lis ɛ.ta.ʁi.ve/', 'la po-LEESS | eh-ta-ree-VAY', ['echelle', 'neutre'], FCVDR),
  sent(1005, 'Les forces de l’ordre sont arrivées.', 'The police forces arrived.', '/le fɔʁs də lɔʁdʁ sɔ̃.ta.ʁi.ve/', 'lay FORSS | duh LORDR | sohⁿ-ta-ree-VAY', ['echelle'], FCVR, { register: 'soutenu' }),
  ph(1006, 'l’argot', 'slang', '/laʁ.ɡo/', 'lar-GOH', ['echelle'], 'Les mots d’un groupe, d’un quartier ou d’une génération, souvent opaques pour les autres.'),
  ph(1007, 'le registre argotique', 'the slang register', '/lə ʁə.ʒistʁ aʁ.ɡɔ.tik/', 'luh ruh-ZHEESTR | ar-go-TEEK', ['echelle'], 'Le barreau le plus bas de l’échelle, sous le familier.'),
  ph(1008, 'monter ou descendre d’un registre', 'to go up or down a register', '/mɔ̃.te u de.sɑ̃dʁ dœ̃ ʁə.ʒistʁ/', 'mohⁿ-TAY oo | day-SAHⁿDR | duhⁿ ruh-ZHEESTR', ['echelle'], 'Changer de barreau selon la personne qui écoute.'),
  sent(1009, REFRAME, REFRAME_EN, '/kɔ̃.pʁɑ̃ ʒys.kɑ̃ ba d(ə) le.ʃɛl paʁl a la o.tœʁ də ki te.kut/', 'kohⁿ-PRAHⁿ | zhüs-kahⁿ BA duh lay-SHEHL | parl a la oh-TUHR | duh kee tay-KOOT', ['rule', 'reframe'], FO,
    rule('À quoi sert l’argot que tu apprends ici ?', 'À comprendre les autres. Pour parler, tu choisis le barreau de la personne qui t’écoute.')),
  sent(1010, 'L’argot est un signe d’appartenance : il rapproche ceux qui le partagent et exclut les autres.', 'Slang is a sign of belonging: it brings together those who share it and shuts out the others.', '/laʁ.ɡo ɛ.tœ̃ siɲ da.paʁ.tə.nɑ̃s il ʁa.pʁɔʃ sø ki lə paʁ.taʒ e ɛk.sly le.zotʁ/', 'lar-GOH eh-tuhⁿ SEENY | da-par-tuh-NAHⁿSS | eel ra-PROSH | suh kee luh par-TAZH | ay ehks-KLÜ lay-ZOHTR', ['echelle']),
  sent(1011, 'Entre amis, un mot familier rapproche ; devant un inconnu, il peut vexer.', 'Among friends, an informal word brings people closer; in front of a stranger, it can offend.', '/ɑ̃.tʁa.mi œ̃ mo fa.mi.lje ʁa.pʁɔʃ də.vɑ̃.tœ̃.nɛ̃.kɔ.ny il pø vɛk.se/', 'ahⁿ-tra-MEE | uhⁿ moh fa-mee-LYAY ra-PROSH | duh-vahⁿ-tuhⁿ-nehⁿ-ko-NÜ | eel puh vehk-SAY', ['echelle']),
  sent(1012, 'Je comprends ce mot, mais je ne l’emploierais pas.', 'I understand that word, but I would not use it.', '/ʒə kɔ̃.pʁɑ̃ sə mo mɛ ʒə nə lɑ̃.plwa.ʁɛ pa/', 'zhuh kohⁿ-prahⁿ suh MOH | meh zhuh nuh lahⁿ-plwa-reh PA', ['jugement'], FCVDR),
  sent(1013, 'Qu’est-ce que ça veut dire, « relou » ?', 'What does “relou” mean?', '/kɛs.kə sa vø diʁ ʁə.lu/', 'kehs-kuh sa vuh DEER | ruh-LOO', ['jugement']),
  sent(1014, 'Comprendre un mot n’oblige pas à le dire.', 'Understanding a word does not oblige you to say it.', '/kɔ̃.pʁɑ̃dʁ œ̃ mo nɔ.bliʒ pa a lə diʁ/', 'kohⁿ-PRAHⁿDR uhⁿ MOH | no-BLEEZH pa a luh DEER', ['jugement']),
  sent(1015, 'L’argot change vite : un mot à la mode aujourd’hui peut dater dans cinq ans.', 'Slang changes fast: a trendy word today can sound dated in five years.', '/laʁ.ɡo ʃɑ̃ʒ vit œ̃ mo a la mɔd o.ʒuʁ.dɥi pø da.te dɑ̃ sɛ̃.kɑ̃/', 'lar-GOH shahⁿzh VEET | uhⁿ moh a la MOD oh-zhoor-DWEE | puh da-TAY dahⁿ sehⁿ-KAHⁿ', ['date']),
  sent(1016, 'Cette leçon parle surtout de l’argot de France ; le Québec, la Belgique et l’Afrique ont le leur.', 'This lesson is mostly about slang in France; Québec, Belgium and Africa have their own.', '/sɛt lə.sɔ̃ paʁl syʁ.tu d(ə) laʁ.ɡo də fʁɑ̃s lə ke.bɛk la bɛl.ʒik e la.fʁik ɔ̃ lə lœʁ/', 'seht luh-SOHⁿ | parl sür-too duh lar-GOH duh FRAHⁿSS | luh kay-BEHK | la behl-ZHEEK | ay la-FREEK ohⁿ luh LUHR', ['echelle']),
];

/* ── ACT 2 · LE VERLAN ────────────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1017, 'Bonjour à tous, et bienvenue dans « Les mots de la rue ».', 'Hello everyone, and welcome to “Les mots de la rue”.', '/bɔ̃.ʒuʁ a tus e bjɛ̃v.ny dɑ̃ le mo d(ə) la ʁy/', 'bohⁿ-zhoor a TOOSS | ay byehⁿv-NÜ | dahⁿ lay MOH duh la RÜ', ['ecoute']),
  sent(1018, 'Le mot « verlan » est lui-même du verlan : il vient de « l’envers ».', 'The word “verlan” is itself verlan: it comes from “l’envers”, back to front.', '/lə mo vɛʁ.lɑ̃ ɛ lɥi.mɛm dy vɛʁ.lɑ̃ il vjɛ̃ də lɑ̃.vɛʁ/', 'luh MOH vehr-LAHⁿ | eh lwee-MEM dü vehr-LAHⁿ | eel vyehⁿ duh lahⁿ-VEHR', ['ecoute', 'verlan'], FCVDR),
  sent(1019, 'On coupe le mot en syllabes, puis on les inverse.', 'You split the word into syllables, then swap them round.', '/ɔ̃ kup lə mo ɑ̃ si.lab pɥi ɔ̃ le.zɛ̃.vɛʁs/', 'ohⁿ koop luh MOH | ahⁿ see-LAB | pwee ohⁿ lay-zehⁿ-VEHRSS', ['ecoute', 'verlan']),
  sent(1020, 'Bizarre devient zarbi, et louche devient chelou.', '“Bizarre” becomes “zarbi”, and “louche” (shady) becomes “chelou”.', '/bi.zaʁ də.vjɛ̃ zaʁ.bi e luʃ də.vjɛ̃ ʃə.lu/', 'bee-ZAR duh-vyehⁿ zar-BEE | ay LOOSH duh-vyehⁿ shuh-LOO', ['ecoute', 'verlan']),
  sent(1021, 'Avec un mot d’une syllabe, on ajoute souvent un petit « e » avant d’inverser.', 'With a one-syllable word, you often add a little “e” sound before swapping.', '/a.vɛ.kœ̃ mo dyn si.lab ɔ̃.na.ʒut su.vɑ̃ œ̃ pə.ti ə a.vɑ̃ dɛ̃.vɛʁ.se/', 'a-veh-kuhⁿ MOH | dün see-LAB | ohⁿ-na-zhoot soo-vahⁿ uhⁿ puh-tee UH | a-vahⁿ dehⁿ-vehr-SAY', ['ecoute', 'verlan']),
  sent(1022, 'Lourd devient relou ; fou, lui, se retourne son par son et devient ouf.', '“Lourd” becomes “relou”; “fou” is simply turned round sound by sound and becomes “ouf”.', '/luʁ də.vjɛ̃ ʁə.lu fu lɥi sə ʁə.tuʁn sɔ̃ paʁ sɔ̃ e də.vjɛ̃ uf/', 'LOOR duh-vyehⁿ ruh-LOO | FOO lwee | suh ruh-TOORN | sohⁿ par SOHⁿ | ay duh-vyehⁿ OOF', ['ecoute', 'verlan']),
  sent(1023, 'On inverse les sons, pas les lettres : c’est pour ça que l’orthographe varie.', 'You swap the sounds, not the letters: that is why the spelling varies.', '/ɔ̃.nɛ̃.vɛʁs le sɔ̃ pa le lɛtʁ sɛ puʁ sa kə lɔʁ.tɔ.ɡʁaf va.ʁi/', 'ohⁿ-nehⁿ-VEHRSS lay SOHⁿ | pa lay LEHTR | seh poor SA | kuh lor-to-GRAF va-REE', ['ecoute', 'verlan']),
  sent(1024, 'Laisse béton, pour laisse tomber, a été popularisé par une chanson de Renaud en mille neuf cent soixante-dix-sept.', '“Laisse béton”, for “laisse tomber” (forget it), was popularised by a Renaud song in 1977.', '/lɛs be.tɔ̃ puʁ lɛs tɔ̃.be a e.te pɔ.py.la.ʁi.ze paʁ yn ʃɑ̃.sɔ̃ də ʁə.no ɑ̃ mil nœf sɑ̃ swa.sɑ̃t.dis.sɛt/', 'lehss bay-TOHⁿ | poor lehss tohⁿ-BAY | a ay-tay po-pü-la-ree-ZAY | par ün shahⁿ-SOHⁿ duh ruh-NOH | ahⁿ meel nuhf sahⁿ swa-sahⁿt-dee-SEHT', ['ecoute', 'verlan', 'date']),
  sent(1025, 'Le verlan existe depuis longtemps, mais il s’est beaucoup répandu à partir des années soixante-dix.', 'Verlan has existed for a long time, but it spread a lot from the seventies on.', '/lə vɛʁ.lɑ̃ ɛɡ.zist də.pɥi lɔ̃.tɑ̃ mɛ il sɛ bo.ku ʁe.pɑ̃.dy a paʁ.tiʁ de.za.ne swa.sɑ̃t.dis/', 'luh vehr-LAHⁿ ehg-ZEEST | duh-pwee lohⁿ-TAHⁿ | meh eel seh boh-koo ray-pahⁿ-DÜ | a par-teer day-za-nay swa-sahⁿt-DEESS', ['ecoute', 'verlan']),
  sent(1026, 'Aujourd’hui, certains mots de verlan sont compris par presque tout le monde.', 'Today, some verlan words are understood by almost everyone.', '/o.ʒuʁ.dɥi sɛʁ.tɛ̃ mo d(ə) vɛʁ.lɑ̃ sɔ̃ kɔ̃.pʁi paʁ pʁɛsk tu l(ə) mɔ̃d/', 'oh-zhoor-DWEE | sehr-tehⁿ moh duh vehr-LAHⁿ | sohⁿ kohⁿ-PREE | par prehsk too luh MOHⁿD', ['ecoute', 'verlan']),
  sent(1027, 'Mais comprendre un mot, ce n’est pas savoir quand le dire.', 'But understanding a word is not knowing when to say it.', '/mɛ kɔ̃.pʁɑ̃.dʁœ̃ mo sə nɛ pa sa.vwaʁ kɑ̃ l(ə) diʁ/', 'meh kohⁿ-prahⁿ-druhⁿ MOH | suh neh pa sa-VWAR | kahⁿ luh DEER', ['ecoute', 'jugement'], FCVDR),
  fam(1028, 'Laisse béton, on en reparlera demain.', 'Forget it, we’ll talk about it again tomorrow.', '/lɛs be.tɔ̃ ɔ̃.nɑ̃ ʁə.paʁ.lə.ʁa də.mɛ̃/', 'lehss bay-TOHⁿ | ohⁿ-nahⁿ ruh-par-luh-RA duh-MEHⁿ', ['verlan', 'date'], 'Verlan de laisse tomber. Connu de tous, mais daté.'),
  fam(1029, 'Ce concert était ouf, j’en reviens pas.', 'That concert was insane, I still can’t get over it.', '/sə kɔ̃.sɛʁ e.tɛ uf ʒɑ̃ ʁə.vjɛ̃ pa/', 'suh kohⁿ-SEHR ay-teh OOF | zhahⁿ ruh-vyehⁿ PA', ['verlan'], 'Ouf, verlan de fou : incroyable. Familier.'),
  fam(1030, 'Il est relou avec ses questions, ton cousin.', 'He’s a pain with his questions, your cousin.', '/i.lɛ ʁə.lu a.vɛk se kɛs.tjɔ̃ tɔ̃ ku.zɛ̃/', 'ee-leh ruh-LOO | a-vehk say kehs-TYOHⁿ | tohⁿ koo-ZEHⁿ', ['verlan'], 'Relou, verlan de lourd : pénible. Familier.'),
  fam(1031, 'Il y a un type chelou devant l’immeuble.', 'There’s a dodgy-looking guy outside the building.', '/il.ja œ̃ tip ʃə.lu də.vɑ̃ li.mœbl/', 'eel-ya uhⁿ teep shuh-LOO | duh-vahⁿ lee-MUHBL', ['verlan'], 'Chelou, verlan de louche : bizarre, suspect. Familier.'),
  fam(1032, 'Ton histoire est un peu zarbi.', 'Your story is a bit weird.', '/tɔ̃.nis.twaʁ ɛ.tœ̃ pø zaʁ.bi/', 'tohⁿ-nees-TWAR | eh-tuhⁿ puh zar-BEE', ['verlan', 'date'], 'Zarbi, verlan de bizarre. Familier et un peu daté.'),
  sent(1033, 'Il est pénible avec ses questions.', 'He is tiresome with his questions.', '/i.lɛ pe.nibl a.vɛk se kɛs.tjɔ̃/', 'ee-leh pay-NEEBL | a-vehk say kehs-TYOHⁿ', ['neutre']),
  sent(1034, 'Il y a un homme à l’air louche devant l’immeuble.', 'There is a suspicious-looking man outside the building.', '/il.ja œ̃.nɔm a lɛʁ luʃ də.vɑ̃ li.mœbl/', 'eel-ya uhⁿ-NOMM a lehr LOOSH | duh-vahⁿ lee-MUHBL', ['neutre'], FCVDR),
  sent(1035, 'Ce concert était incroyable.', 'That concert was incredible.', '/sə kɔ̃.sɛʁ e.tɛ.tɛ̃.kʁwa.jabl/', 'suh kohⁿ-SEHR | ay-teh-tehⁿ-krwa-YABL', ['neutre']),
  sent(1036, 'Ton histoire est un peu bizarre.', 'Your story is a bit strange.', '/tɔ̃.nis.twaʁ ɛ.tœ̃ pø bi.zaʁ/', 'tohⁿ-nees-TWAR | eh-tuhⁿ puh bee-ZAR', ['neutre']),
  ph(1037, 'mettre un mot à l’envers', 'to turn a word back to front', '/mɛtʁ œ̃ mo a lɑ̃.vɛʁ/', 'mehtr uhⁿ MOH | a lahⁿ-VEHR', ['verlan'], 'Le principe du verlan : l’envers donne verlan.'),
  sent(1038, 'Le verlan inverse les sons que l’on entend, pas les lettres que l’on écrit.', 'Verlan swaps the sounds you hear, not the letters you write.', '/lə vɛʁ.lɑ̃ ɛ̃.vɛʁs le sɔ̃ kə lɔ̃.nɑ̃.tɑ̃ pa le lɛtʁ kə lɔ̃.ne.kʁi/', 'luh vehr-LAHⁿ ehⁿ-VEHRSS | lay SOHⁿ kuh lohⁿ-nahⁿ-TAHⁿ | pa lay LEHTR | kuh lohⁿ-nay-KREE', ['rule', 'verlan'], FO,
    rule('Pourquoi lourd donne relou, et pas « drelou » ?', 'Parce qu’on inverse ce qu’on entend : le d de lourd ne se prononce pas.')),
  sent(1039, 'Madame, le bruit des voisins est devenu très pénible.', 'Madam, the neighbours’ noise has become very tiresome.', '/ma.dam lə bʁɥi de vwa.zɛ̃ ɛ dəv.ny tʁɛ pe.nibl/', 'ma-DAMM | luh BRWEE day vwa-ZEHⁿ | eh duhv-NÜ treh pay-NEEBL', ['neutre'], FCVDR),
  sent(1040, 'Madame, votre consigne me paraît un peu étrange.', 'Madam, your instructions seem a little strange to me.', '/ma.dam vɔtʁ kɔ̃.siɲ mə pa.ʁɛ œ̃ pø e.tʁɑ̃ʒ/', 'ma-DAMM | votr kohⁿ-SEENY | muh pa-REH | uhⁿ puh ay-TRAHⁿZH', ['neutre']),
  sent(1041, 'Le client de ce matin était très exigeant.', 'This morning’s customer was very demanding.', '/lə kli.jɑ̃ d(ə) sə ma.tɛ̃ e.tɛ tʁɛ.zɛɡ.zi.ʒɑ̃/', 'luh klee-YAHⁿ | duh suh ma-TEHⁿ | ay-teh treh-zehg-zee-ZHAHⁿ', ['neutre']),
  sent(1042, 'Laissons cela de côté : nous en reparlerons demain.', 'Let us leave that aside: we will discuss it again tomorrow.', '/lɛ.sɔ̃ sə.la d(ə) ko.te nu.zɑ̃ ʁə.paʁ.lə.ʁɔ̃ də.mɛ̃/', 'leh-SOHⁿ suh-LA duh koh-TAY | noo-zahⁿ ruh-par-luh-ROHⁿ duh-MEHⁿ', ['neutre']),
];

/* ── ACT 3 · LES VERLANS QUI SONT RESTÉS ──────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  fam(1043, 'Samedi, on fait une teuf chez Karim.', 'On Saturday we’re having a party at Karim’s.', '/sam.di ɔ̃ fɛ yn tœf ʃe ka.ʁim/', 'sam-DEE | ohⁿ feh ün TUHF | shay ka-REEMM', ['verlan'], 'Teuf, verlan de fête. Familier.'),
  arg(1044, 'Ta reum est d’accord ?', 'Is your mum OK with it?', '/ta ʁœm ɛ da.kɔʁ/', 'ta RUHMM | eh da-KOR', ['verlan'], 'Reum, verlan de mère. Argotique : un mot de groupe.'),
  fam(1045, 'Elle est vénère depuis que j’ai raté le bus.', 'She’s been wound up since I missed the bus.', '/ɛ.lɛ ve.nɛʁ də.pɥi kə ʒe ʁa.te lə bys/', 'eh-leh vay-NEHR | duh-pwee kuh zhay ra-TAY luh BÜSS', ['verlan'], 'Vénère, verlan d’énervé : très en colère. Familier.'),
  fam(1046, 'La meuf de Karim vient aussi.', 'Karim’s girlfriend is coming too.', '/la mœf də ka.ʁim vjɛ̃.to.si/', 'la MUHF duh ka-REEMM | vyehⁿ-toh-SEE', ['verlan', 'sensible'], 'Meuf, verlan de femme : femme, fille, petite amie. Familier ; dit devant la personne, souvent mal pris.'),
  arg(1047, 'Si les voisins appellent les keufs, c’est fini.', 'If the neighbours call the cops, it’s over.', '/si le vwa.zɛ̃ a.pɛl le kœf sɛ fi.ni/', 'see lay vwa-ZEHⁿ a-PEHL lay KUHF | seh fee-NEE', ['verlan', 'sensible'], 'Keuf, verlan de flic. Argotique, souvent hostile.'),
  sent(1048, 'Samedi, nous organisons une fête chez Karim.', 'On Saturday we are holding a party at Karim’s.', '/sam.di nu.zɔʁ.ɡa.ni.zɔ̃ yn fɛt ʃe ka.ʁim/', 'sam-DEE | noo-zor-ga-nee-ZOHⁿ ün FEHT | shay ka-REEMM', ['neutre']),
  sent(1049, 'Ta mère est d’accord pour samedi ?', 'Is your mother OK with Saturday?', '/ta mɛʁ ɛ da.kɔʁ puʁ sam.di/', 'ta MEHR eh da-KOR | poor sam-DEE', ['neutre']),
  sent(1050, 'Elle est très énervée depuis que j’ai raté le bus.', 'She has been very annoyed since I missed the bus.', '/ɛ.lɛ tʁɛ.ze.nɛʁ.ve də.pɥi kə ʒe ʁa.te lə bys/', 'eh-leh treh-zay-nehr-VAY | duh-pwee kuh zhay ra-TAY luh BÜSS', ['neutre'], FCVDR),
  sent(1051, 'La compagne de Karim vient aussi.', 'Karim’s partner is coming too.', '/la kɔ̃.paɲ də ka.ʁim vjɛ̃.to.si/', 'la kohⁿ-PANY duh ka-REEMM | vyehⁿ-toh-SEE', ['neutre']),
  sent(1052, 'Si les voisins appellent la police, c’est fini.', 'If the neighbours call the police, it is over.', '/si le vwa.zɛ̃ a.pɛl la pɔ.lis sɛ fi.ni/', 'see lay vwa-ZEHⁿ a-PEHL la po-LEESS | seh fee-NEE', ['neutre']),
  sent(1053, 'Meuf, remis à l’envers une deuxième fois, donne feumeu.', '“Meuf”, turned back to front a second time, gives “feumeu”.', '/mœf ʁə.mi a lɑ̃.vɛʁ yn dø.zjɛm fwa dɔn fø.mø/', 'MUHF | ruh-MEE a lahⁿ-VEHR | ün duh-ZYEMM FWA | donn fuh-MUH', ['rule', 'verlan'], FO,
    rule('Qu’est-ce que la reverlanisation ?', 'Remettre à l’envers un mot déjà en verlan : femme, meuf, puis feumeu.')),
  sent(1054, 'Beur, le verlan d’arabe, a donné rebeu : ces mots désignent des gens par leur origine.', '“Beur”, the verlan of “arabe”, gave “rebeu”: these words label people by their origin.', '/bœʁ lə vɛʁ.lɑ̃ da.ʁab a dɔ.ne ʁə.bø se mo de.ziɲ de ʒɑ̃ paʁ lœʁ ɔ.ʁi.ʒin/', 'BUHR | luh vehr-LAHⁿ da-RAB | a do-NAY ruh-BUH | say MOH day-ZEENY | day ZHAHⁿ par luhr o-ree-ZHEENN', ['verlan', 'sensible'], FO),
  sent(1055, 'Les mots qui désignent quelqu’un par son origine sont sensibles : ne les emploie pas.', 'Words that label someone by their origin are sensitive: do not use them.', '/le mo ki de.ziɲ kɛl.kœ̃ paʁ sɔ̃.nɔ.ʁi.ʒin sɔ̃ sɑ̃.sibl nə le.zɑ̃.plwa pa/', 'lay MOH kee day-ZEENY | kehl-KUHⁿ par sohⁿ-no-ree-ZHEENN | sohⁿ sahⁿ-SEEBL | nuh lay-zahⁿ-PLWA PA', ['rule', 'sensible'], FO,
    rule('Tu entends rebeu dans un film. Tu peux l’employer ?', 'Non. Comprends-le, mais ne l’emploie pas : il désigne des personnes par leur origine.')),
  sent(1056, 'Devant tes grands-parents, dis « ma mère », pas « ma reum ».', 'In front of your grandparents, say “ma mère”, not “ma reum”.', '/də.vɑ̃ te ɡʁɑ̃.pa.ʁɑ̃ di ma mɛʁ pa ma ʁœm/', 'duh-vahⁿ tay grahⁿ-pa-RAHⁿ | dee ma MEHR | pa ma RUHMM', ['jugement']),
  sent(1057, 'Parler de la meuf de quelqu’un devant elle, c’est souvent mal pris.', 'Talking about someone’s “meuf” in front of her often goes down badly.', '/paʁ.le d(ə) la mœf də kɛl.kœ̃ də.vɑ̃.tɛl sɛ su.vɑ̃ mal pʁi/', 'par-LAY duh la MUHF | duh kehl-KUHⁿ duh-vahⁿ-TEHL | seh soo-vahⁿ mal PREE', ['jugement', 'sensible']),
  sent(1058, 'Dire « les keufs » devant un policier, c’est chercher les ennuis.', 'Saying “les keufs” in front of a police officer is asking for trouble.', '/diʁ le kœf də.vɑ̃.tœ̃ pɔ.li.sje sɛ ʃɛʁ.ʃe le.zɑ̃.nɥi/', 'deer lay KUHF | duh-vahⁿ-tuhⁿ po-lee-SYAY | seh shehr-SHAY lay-zahⁿ-NWEE', ['jugement', 'sensible']),
  sent(1059, 'Vénère se dit entre amis ; au travail, on dit énervé ou en colère.', '“Vénère” is for friends; at work you say “énervé” or “en colère”.', '/ve.nɛʁ sə di ɑ̃.tʁa.mi o tʁa.vaj ɔ̃ di e.nɛʁ.ve u ɑ̃ kɔ.lɛʁ/', 'vay-NEHR suh dee ahⁿ-tra-MEE | oh tra-VAHY | ohⁿ dee ay-nehr-VAY | oo ahⁿ ko-LEHR', ['jugement']),
  sent(1060, 'Meuf et teuf sont familiers ; reum et keuf restent argotiques.', '“Meuf” and “teuf” are informal; “reum” and “keuf” are still slang.', '/mœf e tœf sɔ̃ fa.mi.lje ʁœm e kœf ʁɛst.taʁ.ɡɔ.tik/', 'MUHF ay TUHF | sohⁿ fa-mee-LYAY | RUHMM ay KUHF | rehst-tar-go-TEEK', ['rule', 'echelle'], FO,
    rule('Meuf ou reum : lequel est le plus marqué ?', 'Reum : il reste l’argot d’un groupe. Meuf est familier et compris de presque tous.')),
];

/* ── ACT 4 · COUPER LES MOTS ──────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  fam(1061, 'Salut, c’est Yanis. Je suis à l’appart, tu rentres quand ?', 'Hi, it’s Yanis. I’m at the flat, when are you coming home?', '/sa.ly sɛ ja.nis ʒə sɥi.za la.paʁt ty ʁɑ̃tʁ kɑ̃/', 'sa-LÜ seh ya-NEESS | zhuh swee-za la-PART | tü RAHⁿTR KAHⁿ', ['ecoute', 'troncation']),
  fam(1062, 'Ma sœur passe ce soir avec deux copines, des ados de dix-sept ans.', 'My sister’s coming by tonight with two friends, teenagers of seventeen.', '/ma sœʁ pas sə swaʁ a.vɛk dø kɔ.pin de.za.do də di.sɛ.tɑ̃/', 'ma SUHR pass suh SWAR | a-vehk duh ko-PEENN | day-za-DOH duh dee-seh-TAHⁿ', ['ecoute', 'troncation']),
  fam(1063, 'On pensait se faire un resto vers huit heures.', 'We were thinking of going out to eat around eight.', '/ɔ̃ pɑ̃.sɛ s(ə) fɛʁ œ̃ ʁɛs.to vɛʁ ɥi.tœʁ/', 'ohⁿ pahⁿ-SEH | suh fehr uhⁿ rehs-TOH | vehr wee-TUHR', ['ecoute', 'troncation']),
  fam(1064, 'T’es dispo, ou t’as encore ton exam demain ?', 'Are you free, or have you still got your exam tomorrow?', '/te dis.po u ta ɑ̃.kɔʁ tɔ̃.nɛɡ.zam də.mɛ̃/', 'tay dees-POH | oo ta ahⁿ-KOR | tohⁿ-nehg-ZAMM duh-MEHⁿ', ['ecoute', 'troncation']),
  fam(1065, 'Le prof a décalé le partiel à jeudi, c’est sympa de sa part.', 'The lecturer moved the exam to Thursday, nice of him.', '/lə pʁɔf a de.ka.le lə paʁ.sjɛl a ʒø.di sɛ sɛ̃.pa d(ə) sa paʁ/', 'luh PROF a day-ka-LAY | luh par-SYEHL a zhuh-DEE | seh sehⁿ-PA duh sa PAR', ['ecoute', 'troncation']),
  fam(1066, 'Après, on ira au ciné, si t’as encore la force.', 'Afterwards we’ll go to the cinema, if you’ve still got the energy.', '/a.pʁɛ ɔ̃.ni.ʁa o si.ne si ta ɑ̃.kɔʁ la fɔʁs/', 'a-PREH | ohⁿ-nee-RA oh see-NAY | see ta ahⁿ-kor la FORSS', ['ecoute', 'troncation']),
  sent(1067, 'Je suis à l’appartement ; à quelle heure rentres-tu ?', 'I am at the flat; what time are you coming home?', '/ʒə sɥi.za la.paʁ.tə.mɑ̃ a kɛ.lœʁ ʁɑ̃tʁ.ty/', 'zhuh swee-za la-par-tuh-MAHⁿ | a keh-LUHR rahⁿtr-TÜ', ['neutre']),
  sent(1068, 'Es-tu disponible ce soir, ou as-tu encore ton examen demain ?', 'Are you free this evening, or do you still have your exam tomorrow?', '/ɛ.ty dis.pɔ.nibl sə swaʁ u a.ty ɑ̃.kɔʁ tɔ̃.nɛɡ.za.mɛ̃ də.mɛ̃/', 'eh-tü dees-po-NEEBL suh SWAR | oo a-tü ahⁿ-KOR | tohⁿ-nehg-za-MEHⁿ duh-MEHⁿ', ['neutre']),
  sent(1069, 'Le professeur a reporté l’examen à jeudi.', 'The teacher has postponed the exam to Thursday.', '/lə pʁɔ.fɛ.sœʁ a ʁə.pɔʁ.te lɛɡ.za.mɛ̃ a ʒø.di/', 'luh pro-feh-SUHR | a ruh-por-TAY | lehg-za-MEHⁿ a zhuh-DEE', ['neutre'], FCVDR),
  sent(1070, 'Deux adolescentes de dix-sept ans viennent dîner.', 'Two seventeen-year-old girls are coming to dinner.', '/dø.za.dɔ.lɛ.sɑ̃t də di.sɛ.tɑ̃ vjɛn di.ne/', 'duh-za-do-leh-SAHⁿT | duh dee-seh-TAHⁿ | vyehnn dee-NAY', ['neutre']),
  sent(1071, 'Métro vient de chemin de fer métropolitain, et vélo de vélocipède.', '“Métro” comes from “chemin de fer métropolitain”, and “vélo” from “vélocipède”.', '/me.tʁo vjɛ̃ də ʃə.mɛ̃ d(ə) fɛʁ me.tʁɔ.pɔ.li.tɛ̃ e ve.lo də ve.lɔ.si.pɛd/', 'may-TROH vyehⁿ duh | shuh-mehⁿ duh FEHR may-tro-po-lee-TEHⁿ | ay vay-LOH | duh vay-lo-see-PEHD', ['troncation']),
  sent(1072, 'Certaines troncations sont devenues courantes : photo, métro et vélo passent partout.', 'Some clipped words have become standard: photo, métro and vélo go anywhere.', '/sɛʁ.tɛn tʁɔ̃.ka.sjɔ̃ sɔ̃ dəv.ny ku.ʁɑ̃t fɔ.to me.tʁo e ve.lo pas paʁ.tu/', 'sehr-TEHNN trohⁿ-ka-SYOHⁿ | sohⁿ duhv-nü koo-RAHⁿT | fo-TOH may-TROH ay vay-LOH | pass par-TOO', ['troncation', 'echelle']),
  sent(1073, 'La troncation coupe la fin du mot : appartement devient appart.', 'Clipping cuts off the end of the word: “appartement” becomes “appart”.', '/la tʁɔ̃.ka.sjɔ̃ kup la fɛ̃ dy mo a.paʁ.tə.mɑ̃ də.vjɛ̃ a.paʁt/', 'la trohⁿ-ka-SYOHⁿ | koop la FEHⁿ dü MOH | a-par-tuh-MAHⁿ duh-vyehⁿ a-PART', ['rule', 'troncation'], FO,
    rule('Resto, appart, dispo : lesquels écrire dans une lettre de motivation ?', 'Aucun : restaurant, appartement, disponible. Photo, métro et vélo, eux, passent partout.')),
  ph(1074, 'la troncation', 'clipping (shortening a word)', '/la tʁɔ̃.ka.sjɔ̃/', 'la trohⁿ-ka-SYOHⁿ', ['troncation'], 'Couper un mot pour aller plus vite : resto, appart, ado.'),
  ph(1075, 'dispo', 'free, available (informal)', '/dis.po/', 'dees-POH', ['troncation'], 'Pour disponible. Je suis dispo samedi : entre amis.', 'familier', FR),
  ph(1076, 'un ado, une ado', 'a teenager (informal)', '/œ̃.na.do yn a.do/', 'uhⁿ-na-DOH | ün a-DOH', ['troncation'], 'Pour adolescent. Très fréquent à l’oral, familier à l’écrit.', 'familier', FR),
  sent(1077, 'Je suis disponible dès lundi prochain.', 'I am available from next Monday.', '/ʒə sɥi dis.pɔ.nibl dɛ lœ̃.di pʁɔ.ʃɛ̃/', 'zhuh swee dees-po-NEEBL | deh luhⁿ-dee pro-SHEHⁿ', ['neutre'], FCVDR),
  sent(1078, 'Dans une lettre de motivation, écris les mots en entier.', 'In a cover letter, write the words out in full.', '/dɑ̃.zyn lɛtʁ də mɔ.ti.va.sjɔ̃ e.kʁi le mo ɑ̃.nɑ̃.tje/', 'dahⁿ-zün LEHTR duh mo-tee-va-SYOHⁿ | ay-KREE lay MOH ahⁿ-nahⁿ-TYAY', ['jugement']),
  sent(1079, 'Je souhaite visiter l’appartement de la rue Garibaldi.', 'I would like to view the flat on rue Garibaldi.', '/ʒə swɛt vi.zi.te la.paʁ.tə.mɑ̃ d(ə) la ʁy ɡa.ʁi.bal.di/', 'zhuh SWEHT vee-zee-TAY | la-par-tuh-MAHⁿ | duh la RÜ ga-ree-bal-DEE', ['neutre']),
  sent(1080, 'Mon fils est un adolescent de quinze ans.', 'My son is a fifteen-year-old teenager.', '/mɔ̃ fis ɛ.tœ̃.na.dɔ.lɛ.sɑ̃ də kɛ̃.zɑ̃/', 'mohⁿ FEESS | eh-tuhⁿ-na-do-leh-SAHⁿ | duh kehⁿ-ZAHⁿ', ['neutre']),
  sent(1081, 'L’équipe a déjeuné au restaurant.', 'The team had lunch at a restaurant.', '/le.kip a de.ʒœ.ne o ʁɛs.to.ʁɑ̃/', 'lay-KEEP a day-zhuh-NAY | oh rehs-to-RAHⁿ', ['neutre']),
  sent(1082, 'Merci, madame, c’était très aimable de votre part.', 'Thank you, madam, that was very kind of you.', '/mɛʁ.si ma.dam se.tɛ tʁɛ.zɛ.mabl də vɔtʁ paʁ/', 'mehr-SEE ma-DAMM | say-teh treh-zeh-MABL | duh votr PAR', ['neutre']),
];

/* ── ACT 5 · CHANGER LA FIN ───────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  fam(1083, 'Calmos, on a encore dix minutes.', 'Chill, we’ve still got ten minutes.', '/kal.mos ɔ̃.na ɑ̃.kɔʁ di mi.nyt/', 'kal-MOSS | ohⁿ-na ahⁿ-kor dee mee-NÜT', ['suffixe']),
  fam(1084, 'Je rentre tranquillos, à pied.', 'I’m heading home nice and easy, on foot.', '/ʒə ʁɑ̃tʁ tʁɑ̃.ki.los a pje/', 'zhuh RAHⁿTR trahⁿ-kee-LOSS | a PYAY', ['suffixe']),
  fam(1085, 'On mange rapidos et on file au cinoche.', 'We grab a quick bite and head off to the flicks.', '/ɔ̃ mɑ̃ʒ ʁa.pi.dos e ɔ̃ fil o si.nɔʃ/', 'ohⁿ mahⁿzh ra-pee-DOSS | ay ohⁿ feel oh see-NOSH', ['suffixe']),
  fam(1086, 'Ce soir, il y a un vieux film à la téloche.', 'Tonight there’s an old film on the telly.', '/sə swaʁ il.ja œ̃ vjø film a la te.lɔʃ/', 'suh SWAR | eel-ya uhⁿ vyuh FEELM | a la tay-LOSH', ['suffixe', 'date']),
  fam(1087, 'Quel flemmard, il n’a même pas fait sa valoche.', 'What a lazybones, he hasn’t even packed his case.', '/kɛl fle.maʁ i.na mɛm pa fɛ sa va.lɔʃ/', 'kehl fleh-MAR | ee-na mem pa feh sa va-LOSH', ['suffixe']),
  sent(1088, 'Un chauffard a brûlé le feu rouge devant l’école.', 'A reckless driver ran the red light outside the school.', '/œ̃ ʃo.faʁ a bʁy.le lə fø ʁuʒ də.vɑ̃ le.kɔl/', 'uhⁿ shoh-FAR | a brü-LAY luh fuh ROOZH | duh-vahⁿ lay-KOL', ['suffixe'], FCVDR),
  fam(1089, 'Mon petit frère est un vrai froussard : il a peur du noir.', 'My little brother is a real scaredy-cat: he’s afraid of the dark.', '/mɔ̃ pə.ti fʁɛʁ ɛ.tœ̃ vʁɛ fʁu.saʁ i.la pœʁ dy nwaʁ/', 'mohⁿ puh-tee FREHR | eh-tuhⁿ vreh froo-SAR | ee-la puhr dü NWAR', ['suffixe']),
  ph(1090, 'calmos', 'easy, calm down (informal)', '/kal.mos/', 'kal-MOSS', ['suffixe'], 'Calme et le suffixe -os : du calme, ou calmement.', 'familier', FR),
  ph(1091, 'tranquillos', 'nice and easy (informal)', '/tʁɑ̃.ki.los/', 'trahⁿ-kee-LOSS', ['suffixe'], 'Tranquille et le suffixe -os : sans se presser.', 'familier', FR),
  ph(1092, 'le cinoche', 'the flicks, the pictures (informal)', '/lə si.nɔʃ/', 'luh see-NOSH', ['suffixe'], 'Cinéma et le suffixe -oche. Plus familier que ciné.', 'familier', FR),
  ph(1093, 'la téloche', 'the telly (informal)', '/la te.lɔʃ/', 'la tay-LOSH', ['suffixe', 'date'], 'Télévision et le suffixe -oche. Un peu daté.', 'familier', FR),
  ph(1094, 'un flemmard, une flemmarde', 'a lazybones', '/œ̃ fle.maʁ yn fle.maʁd/', 'uhⁿ fleh-MAR | ün fleh-MARD', ['suffixe'], 'La flemme et le suffixe -ard. Taquin entre proches, vexant devant les autres.', 'familier', FR),
  ph(1095, 'un chauffard', 'a reckless driver, a road hog', '/œ̃ ʃo.faʁ/', 'uhⁿ shoh-FAR', ['suffixe'], 'Le suffixe -ard, péjoratif : un conducteur dangereux. Le mot est courant, même aux informations.'),
  ph(1096, 'un froussard, une froussarde', 'a coward, a scaredy-cat', '/œ̃ fʁu.saʁ yn fʁu.saʁd/', 'uhⁿ froo-SAR | ün froo-SARD', ['suffixe'], 'La frousse (la peur) et le suffixe -ard. Familier et moqueur.', 'familier', FR),
  sent(1097, 'Le suffixe -ard est souvent péjoratif : il ajoute de la moquerie ou du mépris.', 'The suffix -ard is often pejorative: it adds mockery or scorn.', '/lə sy.fiks aʁ ɛ su.vɑ̃ pe.ʒɔ.ʁa.tif il a.ʒut də la mɔ.kʁi u dy me.pʁi/', 'luh sü-FEEKS AR | eh soo-vahⁿ pay-zho-ra-TEEF | eel a-ZHOOT duh la mo-KREE | oo dü may-PREE', ['rule', 'suffixe'], FO,
    rule('Un chauffard, un flemmard : un compliment ?', 'Jamais. Le suffixe -ard ajoute de la moquerie ou du mépris.')),
  sent(1098, 'Les suffixes -os et -oche ne changent pas le sens : ils rendent le mot familier.', 'The suffixes -os and -oche do not change the meaning: they make the word informal.', '/le sy.fiks os e ɔʃ nə ʃɑ̃ʒ pa lə sɑ̃s il ʁɑ̃d lə mo fa.mi.lje/', 'lay sü-FEEKS OSS ay OSH | nuh shahⁿzh pa luh SAHⁿSS | eel rahⁿd luh moh fa-mee-LYAY', ['rule', 'suffixe'], FO,
    rule('Cinoche et cinéma : même sens ?', 'Oui. Le suffixe -oche change seulement le registre.')),
  sent(1099, 'Du calme, nous avons encore dix minutes.', 'Calm down, we still have ten minutes.', '/dy kalm nu.za.vɔ̃ ɑ̃.kɔʁ di mi.nyt/', 'dü KALM | noo-za-vohⁿ ahⁿ-kor dee mee-NÜT', ['neutre'], FCVDR),
  sent(1100, 'Nous dînons rapidement, puis nous allons au cinéma.', 'We have a quick dinner, then we go to the cinema.', '/nu di.nɔ̃ ʁa.pid.mɑ̃ pɥi nu.za.lɔ̃ o si.ne.ma/', 'noo dee-NOHⁿ ra-peed-MAHⁿ | pwee noo-za-LOHⁿ oh see-nay-MA', ['neutre']),
  sent(1101, 'Ce soir, un vieux film passe à la télévision.', 'Tonight an old film is on television.', '/sə swaʁ œ̃ vjø film pa.sa la te.le.vi.zjɔ̃/', 'suh SWAR | uhⁿ vyuh FEELM | pa-sa la tay-lay-vee-ZYOHⁿ', ['neutre']),
  sent(1102, 'Il est un peu paresseux : il n’a pas encore fait sa valise.', 'He is a little lazy: he has not packed his suitcase yet.', '/i.lɛ.tœ̃ pø pa.ʁɛ.sø i.na pa.zɑ̃.kɔʁ fɛ sa va.liz/', 'ee-leh-tuhⁿ puh pa-reh-SUH | ee-na pa-zahⁿ-kor feh sa va-LEEZ', ['neutre']),
];

/* ── ACT 6 · LES MOTS VENUS D’AILLEURS ────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  fam(1103, 'Je kiffe cette chanson, je l’écoute en boucle.', 'I love this song, I listen to it on repeat.', '/ʒə kif sɛt ʃɑ̃.sɔ̃ ʒə le.kut ɑ̃ bukl/', 'zhuh KEEF seht shahⁿ-SOHⁿ | zhuh lay-KOOT ahⁿ BOOKL', ['emprunt'], 'Kiffer : aimer beaucoup. Familier, venu de l’arabe.'),
  fam(1104, 'Il a le seum depuis la finale.', 'He’s been gutted since the final.', '/i.la lə søm də.pɥi la fi.nal/', 'ee-la luh SUHMM | duh-pwee la fee-NAL', ['emprunt'], 'Avoir le seum : être déçu, frustré. Familier, venu de l’arabe.'),
  fam(1105, 'Cet été, je rentre au bled voir mes grands-parents.', 'This summer I’m going back to the home village to see my grandparents.', '/sɛ.te.te ʒə ʁɑ̃.tʁo blɛd vwaʁ me ɡʁɑ̃.pa.ʁɑ̃/', 'seh-tay-TAY | zhuh rahⁿ-troh BLEHD | vwar may grahⁿ-pa-RAHⁿ', ['emprunt'], 'Le bled : le village ou le pays d’origine. Familier, de l’arabe.'),
  fam(1106, 'On a dormi dans un bled perdu, sans réseau.', 'We slept in some place in the middle of nowhere, with no signal.', '/ɔ̃.na dɔʁ.mi dɑ̃.zœ̃ blɛd pɛʁ.dy sɑ̃ ʁe.zo/', 'ohⁿ-na dor-MEE | dahⁿ-zuhⁿ blehd pehr-DÜ | sahⁿ ray-ZOH', ['emprunt'], 'Un bled perdu : un coin isolé, avec une nuance moqueuse.'),
  arg(1107, 'Wesh, bien ou quoi ?', 'Yo, you good?', '/wɛʃ bjɛ̃ u kwa/', 'WEHSH | byehⁿ oo KWA', ['emprunt'], 'Wesh : salut, entre amis d’un même groupe. Argotique, de l’arabe d’Algérie.'),
  arg(1108, 'Il a fini son mémoire, zarma.', 'He’s “finished” his dissertation, yeah right.', '/i.la fi.ni sɔ̃ me.mwaʁ zaʁ.ma/', 'ee-la fee-NEE sohⁿ may-MWAR | zar-MA', ['emprunt'], 'Zarma : soi-disant, on n’y croit pas. Argotique, de l’arabe du Maghreb.'),
  arg(1109, 'Sa go l’attend devant la gare.', 'His girlfriend is waiting for him outside the station.', '/sa ɡo la.tɑ̃ də.vɑ̃ la ɡaʁ/', 'sa GOH | la-TAHⁿ duh-vahⁿ la GAR', ['emprunt'], 'La go : la fille, la petite amie. Du français de Côte d’Ivoire, arrivé par le rap.'),
  fam(1110, 'On va chiller chez Yanis ce soir.', 'We’re going to chill at Yanis’s tonight.', '/ɔ̃ va tʃi.le ʃe ja.nis sə swaʁ/', 'ohⁿ va chee-LAY | shay ya-NEESS suh SWAR', ['emprunt'], 'Chiller : se détendre. Familier, de l’anglais.'),
  sent(1111, 'J’aime beaucoup cette chanson, je l’écoute sans arrêt.', 'I really like this song, I listen to it all the time.', '/ʒɛm bo.ku sɛt ʃɑ̃.sɔ̃ ʒə le.kut sɑ̃.za.ʁɛ/', 'zhehmm boh-KOO seht shahⁿ-SOHⁿ | zhuh lay-KOOT sahⁿ-za-REH', ['neutre']),
  sent(1112, 'Il est très déçu depuis la finale.', 'He has been very disappointed since the final.', '/i.lɛ tʁɛ de.sy də.pɥi la fi.nal/', 'ee-leh treh day-SÜ | duh-pwee la fee-NAL', ['neutre'], FCVDR),
  sent(1113, 'Cet été, je retourne dans le village de mes grands-parents.', 'This summer I am going back to my grandparents’ village.', '/sɛ.te.te ʒə ʁə.tuʁn dɑ̃ l(ə) vi.laʒ də me ɡʁɑ̃.pa.ʁɑ̃/', 'seh-tay-TAY | zhuh ruh-TOORN | dahⁿ luh vee-LAZH | duh may grahⁿ-pa-RAHⁿ', ['neutre']),
  sent(1114, 'Salut Yanis, tu vas bien ?', 'Hi Yanis, are you well?', '/sa.ly ja.nis ty va bjɛ̃/', 'sa-LÜ ya-NEESS | tü va BYEHⁿ', ['neutre']),
  sent(1115, 'Il prétend avoir fini son mémoire.', 'He claims to have finished his dissertation.', '/il pʁe.tɑ̃ a.vwaʁ fi.ni sɔ̃ me.mwaʁ/', 'eel pray-TAHⁿ | a-vwar fee-NEE sohⁿ may-MWAR', ['neutre'], FCVDR),
  sent(1116, 'Sa petite amie l’attend devant la gare.', 'His girlfriend is waiting for him outside the station.', '/sa pə.ti.ta.mi la.tɑ̃ də.vɑ̃ la ɡaʁ/', 'sa puh-tee-ta-MEE | la-TAHⁿ duh-vahⁿ la GAR', ['neutre']),
  sent(1117, 'Nous allons nous détendre chez Yanis ce soir.', 'We are going to relax at Yanis’s this evening.', '/nu.za.lɔ̃ nu de.tɑ̃dʁ ʃe ja.nis sə swaʁ/', 'noo-za-LOHⁿ noo day-TAHⁿDR | shay ya-NEESS suh SWAR', ['neutre']),
  sent(1118, 'Kiffer, le seum, le bled et wesh viennent de l’arabe.', '“Kiffer”, “le seum”, “le bled” and “wesh” come from Arabic.', '/ki.fe lə søm lə blɛd e wɛʃ vjɛn də la.ʁab/', 'kee-FAY | luh SUHMM | luh BLEHD | ay WEHSH | vyehnn duh la-RAB', ['emprunt'], FO),
  sent(1119, 'Chiller et le crush viennent de l’anglais.', '“Chiller” and “le crush” come from English.', '/tʃi.le e lə kʁœʃ vjɛn də lɑ̃.ɡlɛ/', 'chee-LAY | ay luh KRUHSH | vyehnn duh lahⁿ-GLEH', ['emprunt'], FO),
  sent(1120, 'La go vient du français de Côte d’Ivoire, et le rap l’a fait connaître en France.', '“La go” comes from the French of Côte d’Ivoire, and rap made it known in France.', '/la ɡo vjɛ̃ dy fʁɑ̃.sɛ d(ə) kot di.vwaʁ e lə ʁap la fɛ kɔ.nɛtʁ ɑ̃ fʁɑ̃s/', 'la GOH vyehⁿ dü frahⁿ-SEH | duh koht dee-VWAR | ay luh RAP | la feh ko-NEHTR ahⁿ FRAHⁿSS', ['emprunt'], FO),
  ph(1121, 'un mot d’emprunt', 'a loanword', '/œ̃ mo dɑ̃.pʁœ̃/', 'uhⁿ moh dahⁿ-PRUHⁿ', ['emprunt'], 'Un mot venu d’une autre langue : kiffer, chiller.'),
  sent(1122, 'Un mot d’emprunt garde souvent la couleur du groupe qui l’a apporté.', 'A loanword often keeps the colour of the group that brought it in.', '/œ̃ mo dɑ̃.pʁœ̃ ɡaʁd su.vɑ̃ la ku.lœʁ dy ɡʁup ki la a.pɔʁ.te/', 'uhⁿ moh dahⁿ-PRUHⁿ | gard soo-vahⁿ la koo-LUHR | dü GROOP kee la a-por-TAY', ['rule', 'emprunt']),
  sent(1123, 'Dans la bouche d’un étranger, wesh sonne souvent comme une imitation.', 'From a foreigner’s mouth, “wesh” often sounds like an imitation.', '/dɑ̃ la buʃ dœ̃.ne.tʁɑ̃.ʒe wɛʃ sɔn su.vɑ̃ kɔ.myn i.mi.ta.sjɔ̃/', 'dahⁿ la BOOSH | duhⁿ-nay-trahⁿ-ZHAY | WEHSH sonn soo-VAHⁿ | ko-mün ee-mee-ta-SYOHⁿ', ['jugement', 'emprunt']),
  sent(1124, 'Le bled, c’est le village d’origine ; un bled perdu, c’est un coin isolé.', '“Le bled” is the home village; “un bled perdu” is an isolated spot.', '/lə blɛd sɛ lə vi.laʒ dɔ.ʁi.ʒin œ̃ blɛd pɛʁ.dy sɛ.tœ̃ kwɛ̃ i.zɔ.le/', 'luh BLEHD | seh luh vee-LAZH do-ree-ZHEENN | uhⁿ blehd pehr-DÜ | seh-tuhⁿ kwehⁿ ee-zo-LAY', ['rule', 'emprunt'], FO,
    rule('« Je rentre au bled » et « un bled perdu » : même sens ?', 'Non. Le premier dit le village d’origine, avec tendresse ; le second, un coin isolé, avec moquerie.')),
  sent(1125, 'Avoir le seum, c’est être déçu et frustré, souvent après un échec.', '“Avoir le seum” is being disappointed and frustrated, often after a failure.', '/a.vwaʁ lə søm sɛ.tɛtʁ de.sy e fʁys.tʁe su.vɑ̃ a.pʁɛ.zœ̃.ne.ʃɛk/', 'a-vwar luh SUHMM | seh-tehtr day-SÜ ay früs-TRAY | soo-vahⁿ a-preh-zuhⁿ-nay-SHEHK', ['emprunt']),
];

/* ── ACT 7 · LES INTENSIFS ET LES TICS ────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1126, 'Alors, c’était comment, ce concert ?', 'So, how was that concert?', '/a.lɔʁ se.tɛ kɔ.mɑ̃ sə kɔ̃.sɛʁ/', 'a-LOR | say-teh ko-MAHⁿ | suh kohⁿ-SEHR', ['ecoute']),
  fam(1127, 'C’était trop bien, franchement.', 'It was so good, seriously.', '/se.tɛ tʁo bjɛ̃ fʁɑ̃ʃ.mɑ̃/', 'say-teh troh BYEHⁿ | frahⁿsh-MAHⁿ', ['ecoute', 'intensif'], 'Trop, pour très. Familier ; rien de négatif ici.'),
  fam(1128, 'La salle était pleine de ouf.', 'The venue was insanely packed.', '/la sal e.tɛ plɛn də uf/', 'la SAL ay-teh PLEHNN | duh OOF', ['ecoute', 'intensif'], 'De ouf : énormément. Familier.'),
  fam(1129, 'J’ai grave kiffé la dernière chanson.', 'I totally loved the last song.', '/ʒe ɡʁav ki.fe la dɛʁ.njɛʁ ʃɑ̃.sɔ̃/', 'zhay grav kee-FAY | la dehr-nyehr shahⁿ-SOHⁿ', ['ecoute', 'intensif'], 'Grave : vraiment, beaucoup. Familier.'),
  fam(1130, 'Mais pour rentrer, c’était chaud : plus de métro.', 'But getting home was tough: no more metro.', '/mɛ puʁ ʁɑ̃.tʁe se.tɛ ʃo ply d(ə) me.tʁo/', 'meh poor rahⁿ-TRAY | say-teh SHOH | plü duh may-TROH', ['ecoute', 'intensif'], 'C’est chaud : c’est difficile, risqué. Familier.'),
  fam(1131, 'Genre, on a attendu un taxi pendant une heure.', 'Like, we waited an hour for a taxi.', '/ʒɑ̃ʁ ɔ̃.na a.tɑ̃.dy œ̃ tak.si pɑ̃.dɑ̃.ty.nœʁ/', 'ZHAHⁿR | ohⁿ-na a-tahⁿ-DÜ uhⁿ tak-SEE | pahⁿ-dahⁿ-tü-NUHR', ['ecoute', 'intensif'], 'Genre : pour arrondir, ou pour hésiter. Familier.'),
  fam(1132, 'Et Yanis était en mode zombie dans le taxi.', 'And Yanis was in full zombie mode in the taxi.', '/e ja.nis e.tɛ.tɑ̃ mɔd zɔ̃.bi dɑ̃ l(ə) tak.si/', 'ay ya-NEESS | ay-teh-tahⁿ MOD zohⁿ-BEE | dahⁿ luh tak-SEE', ['ecoute', 'intensif'], 'En mode et un nom : comme, à la manière de. Familier.'),
  fam(1133, 'Grave, il a dormi tout le trajet.', 'Totally, he slept the whole way.', '/ɡʁav i.la dɔʁ.mi tu l(ə) tʁa.ʒɛ/', 'GRAV | ee-la dor-MEE | too luh tra-ZHEH', ['ecoute', 'intensif'], 'Grave, seul : tout à fait, oui. Familier.'),
  sent(1134, 'La prochaine fois, on prend la voiture, c’est plus simple.', 'Next time we’ll take the car, it is easier.', '/la pʁɔ.ʃɛn fwa ɔ̃ pʁɑ̃ la vwa.tyʁ sɛ ply sɛ̃pl/', 'la pro-shehnn FWA | ohⁿ prahⁿ la vwa-TÜR | seh plü SEHⁿPL', ['ecoute']),
  sent(1135, 'Le concert était vraiment excellent.', 'The concert was really excellent.', '/lə kɔ̃.sɛʁ e.tɛ vʁɛ.mɑ̃.ɛk.se.lɑ̃/', 'luh kohⁿ-SEHR | ay-teh vreh-mahⁿ-ehk-seh-LAHⁿ', ['neutre']),
  sent(1136, 'La salle était comble.', 'The venue was packed.', '/la sal e.tɛ kɔ̃bl/', 'la SAL ay-teh KOHⁿBL', ['neutre']),
  sent(1137, 'J’ai vraiment beaucoup aimé la dernière chanson.', 'I really liked the last song very much.', '/ʒe vʁɛ.mɑ̃ bo.ku e.me la dɛʁ.njɛʁ ʃɑ̃.sɔ̃/', 'zhay vreh-MAHⁿ | boh-koo ay-MAY | la dehr-nyehr shahⁿ-SOHⁿ', ['neutre'], FCVDR),
  sent(1138, 'Rentrer a été difficile : il n’y avait plus de métro.', 'Getting home was difficult: there was no more metro.', '/ʁɑ̃.tʁe a e.te di.fi.sil il nja.vɛ ply d(ə) me.tʁo/', 'rahⁿ-TRAY a ay-TAY dee-fee-SEEL | eel nya-veh plü duh may-TROH', ['neutre'], FCVDR),
  sent(1139, 'Nous avons attendu un taxi pendant environ une heure.', 'We waited for a taxi for about an hour.', '/nu.za.vɔ̃.za.tɑ̃.dy œ̃ tak.si pɑ̃.dɑ̃.tɑ̃.vi.ʁɔ̃ yn œʁ/', 'noo-za-vohⁿ-za-tahⁿ-DÜ | uhⁿ tak-SEE | pahⁿ-dahⁿ-tahⁿ-vee-ROHⁿ ün UHR', ['neutre']),
  sent(1140, 'Grave et trop remplacent très à l’oral ; à l’écrit, garde très, vraiment ou extrêmement.', '“Grave” and “trop” replace “très” in speech; in writing, keep “très”, “vraiment” or “extrêmement”.', '/ɡʁav e tʁo ʁɑ̃.plas tʁɛ.za lɔ.ʁal a le.kʁi ɡaʁd tʁɛ vʁɛ.mɑ̃ u ɛks.tʁɛm.mɑ̃/', 'grav ay TROH | rahⁿ-PLASS TREH | a lo-RAL | a lay-KREE | gard TREH | vreh-MAHⁿ | oo ehks-trem-MAHⁿ', ['rule', 'intensif'], FO,
    rule('À l’écrit, par quoi remplaces-tu grave dans « c’est grave bien » ?', 'Par très ou vraiment : c’est très bien, c’est vraiment bien.')),
  sent(1141, 'Genre sert à hésiter, à donner un exemple ou à arrondir ; à l’écrit, dis environ ou par exemple.', '“Genre” is used to hesitate, give an example or round off; in writing, say “environ” or “par exemple”.', '/ʒɑ̃ʁ sɛʁ a e.zi.te a dɔ.ne œ̃.nɛɡ.zɑ̃pl u a a.ʁɔ̃.diʁ a le.kʁi di ɑ̃.vi.ʁɔ̃ u paʁ ɛɡ.zɑ̃pl/', 'ZHAHⁿR sehr a ay-zee-TAY | a do-nay uhⁿ-nehg-ZAHⁿPL | oo a a-rohⁿ-DEER | a lay-KREE | dee ahⁿ-vee-ROHⁿ | oo par ehg-ZAHⁿPL', ['rule', 'intensif'], FO),
  ph(1142, 'de ouf', 'insanely, crazy (informal)', '/də uf/', 'duh OOF', ['intensif'], 'Après un nom ou un verbe : une salle pleine de ouf. Toujours familier.', 'familier', FR),
  sent(1143, 'C’est chaud veut dire c’est difficile ou risqué, pas qu’il fait chaud.', '“C’est chaud” means it is difficult or risky, not that it is hot.', '/sɛ ʃo vø diʁ sɛ di.fi.sil u ʁis.ke pa kil fɛ ʃo/', 'seh SHOH | vuh deer seh dee-fee-SEEL | oo rees-KAY | pa keel feh SHOH', ['intensif']),
  sent(1144, 'C’est trop bien veut dire c’est très bien : ici, trop n’a rien de négatif.', '“C’est trop bien” means it is very good: here, “trop” is not negative at all.', '/sɛ tʁo bjɛ̃ vø diʁ sɛ tʁɛ bjɛ̃ i.si tʁo na ʁjɛ̃ də ne.ɡa.tif/', 'seh troh BYEHⁿ | vuh deer seh treh BYEHⁿ | ee-SEE | TROH na ryehⁿ duh nay-ga-TEEF', ['intensif']),
  sent(1145, 'En mode suivi d’un nom veut dire comme, à la manière de.', '“En mode” followed by a noun means like, in the manner of.', '/ɑ̃ mɔd sɥi.vi dœ̃ nɔ̃ vø diʁ kɔm a la ma.njɛʁ də/', 'ahⁿ MOD swee-vee duhⁿ NOHⁿ | vuh DEER | KOMM | a la ma-nyehr DUH', ['intensif']),
];

/* ── ACT 8 · CE QUI DATE, CE QUI DURE ─────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  fam(1146, 'Ce film, c’est de la balle.', 'That film is the bomb.', '/sə film sɛ d(ə) la bal/', 'suh FEELM | seh duh la BAL', ['date'], 'C’est de la balle : c’est génial. Familier et daté (fin des années quatre-vingt-dix).'),
  sent(1147, 'Plus personne ne dit ça : on dirait mon père.', 'Nobody says that any more: you sound like my dad.', '/ply pɛʁ.sɔn nə di sa ɔ̃ di.ʁɛ mɔ̃ pɛʁ/', 'plü pehr-SONN nuh dee SA | ohⁿ dee-REH mohⁿ PEHR', ['date']),
  sent(1148, 'Aujourd’hui, on dirait plutôt : ce film est ouf.', 'Today you would rather say: that film is insane.', '/o.ʒuʁ.dɥi ɔ̃ di.ʁɛ ply.to sə film ɛ uf/', 'oh-zhoor-DWEE | ohⁿ dee-reh plü-TOH | suh FEELM eh OOF', ['date'], FR, { register: 'familier' }),
  fam(1149, 'Après cette journée, je suis en PLS.', 'After today, I’m a total wreck.', '/a.pʁɛ sɛt ʒuʁ.ne ʒə sɥi.zɑ̃ pe.ɛl.ɛs/', 'a-PREH seht zhoor-NAY | zhuh swee-zahⁿ pay-ehl-EHSS', ['date', 'recent'], 'En PLS : épuisé, au plus mal. Familier et récent.'),
  fam(1150, 'J’ai rendu le dossier en retard, mais ça passe crème.', 'I handed the file in late, but it went through smoothly.', '/ʒe ʁɑ̃.dy lə dɔ.sje ɑ̃ ʁə.taʁ mɛ sa pas kʁɛm/', 'zhay rahⁿ-DÜ luh do-SYAY | ahⁿ ruh-TAR | meh sa pass KREHMM', ['date', 'recent'], 'Ça passe crème : ça passe sans problème. Familier et récent.'),
  fam(1151, 'Pour samedi, c’est carré : j’ai les billets.', 'Saturday’s sorted: I’ve got the tickets.', '/puʁ sam.di sɛ ka.ʁe ʒe le bi.jɛ/', 'poor sam-DEE | seh ka-RAY | zhay lay bee-YEH', ['date', 'recent'], 'C’est carré : c’est réglé, impeccable. Familier.'),
  fam(1152, 'Ton nouveau vélo, il est chanmé.', 'Your new bike is wicked.', '/tɔ̃ nu.vo ve.lo i.lɛ ʃɑ̃.me/', 'tohⁿ noo-voh vay-LOH | ee-leh shahⁿ-MAY', ['date'], 'Chanmé, verlan de méchant, au sens de génial. Familier et daté.'),
  sent(1153, 'Relou et chelou ont duré : parents et enfants les emploient.', '“Relou” and “chelou” have lasted: parents and children both use them.', '/ʁə.lu e ʃə.lu ɔ̃ dy.ʁe pa.ʁɑ̃ e ɑ̃.fɑ̃ le.zɑ̃.plwa/', 'ruh-LOO ay shuh-LOO | ohⁿ dü-RAY | pa-rahⁿ ay ahⁿ-FAHⁿ | lay-zahⁿ-PLWA', ['date']),
  sent(1154, 'Un mot d’argot daté fait sourire : il donne ton âge, ou celui de ton manuel.', 'A dated slang word raises a smile: it gives away your age, or your textbook’s.', '/œ̃ mo daʁ.ɡo da.te fɛ su.ʁiʁ il dɔn tɔ̃.naʒ u sə.lɥi d(ə) tɔ̃ ma.nɥɛl/', 'uhⁿ moh dar-goh da-TAY | feh soo-REER | eel donn tohⁿ-NAZH | oo suh-lwee duh tohⁿ ma-NWEHL', ['date', 'jugement']),
  sent(1155, 'Un adulte qui imite l’argot des ados a souvent l’air de forcer.', 'An adult who imitates teenage slang often looks as if they are trying too hard.', '/œ̃.na.dylt ki i.mit laʁ.ɡo de.za.do a su.vɑ̃ lɛʁ də fɔʁ.se/', 'uhⁿ-na-DÜLT kee ee-MEET | lar-GOH day-za-DOH | a soo-vahⁿ LEHR duh for-SAY', ['date', 'jugement']),
  ph(1156, 'un mot daté', 'a dated word', '/œ̃ mo da.te/', 'uhⁿ moh da-TAY', ['date'], 'Un mot qui a eu son époque : il fait sourire, ou vieillir.'),
  ph(1157, 'être en PLS', 'to be a wreck, totally floored (informal)', '/ɛtʁ ɑ̃ pe.ɛl.ɛs/', 'ehtr ahⁿ pay-ehl-EHSS', ['date', 'recent'], 'PLS : la position latérale de sécurité, celle des premiers secours. Au figuré : épuisé, au plus mal, très gêné. Récent.', 'familier', FR),
  sent(1158, 'Après cette journée, je suis à bout de forces.', 'After today, I am at the end of my strength.', '/a.pʁɛ sɛt ʒuʁ.ne ʒə sɥi.za bu d(ə) fɔʁs/', 'a-PREH seht zhoor-NAY | zhuh swee-za BOO duh FORSS', ['neutre']),
  sent(1159, 'Pour samedi, tout est réglé : j’ai les billets.', 'For Saturday, everything is settled: I have the tickets.', '/puʁ sam.di tu.tɛ ʁe.ɡle ʒe le bi.jɛ/', 'poor sam-DEE | too-teh ray-GLAY | zhay lay bee-YEH', ['neutre'], FCVDR),
  sent(1160, 'J’ai rendu le dossier en retard, mais cela n’a posé aucun problème.', 'I handed the file in late, but that caused no problem at all.', '/ʒe ʁɑ̃.dy lə dɔ.sje ɑ̃ ʁə.taʁ mɛ sə.la na po.ze o.kœ̃ pʁɔ.blɛm/', 'zhay rahⁿ-DÜ luh do-SYAY ahⁿ ruh-TAR | meh suh-LA na poh-ZAY | oh-kuhⁿ pro-BLEHMM', ['neutre']),
  sent(1161, 'L’argot des ados vieillit en quelques années ; certains mots familiers durent des décennies.', 'Teenage slang ages in a few years; some informal words last for decades.', '/laʁ.ɡo de.za.do vjɛ.ji ɑ̃ kɛl.kə.za.ne sɛʁ.tɛ̃ mo fa.mi.lje dyʁ de de.se.ni/', 'lar-GOH day-za-DOH | vyeh-YEE ahⁿ kehl-kuh-za-NAY | sehr-tehⁿ moh fa-mee-LYAY | dür day day-say-NEE', ['rule', 'date'], FO,
    rule('Zarbi, chanmé, c’est de la balle : pourquoi les éviter avec des ados ?', 'Parce qu’ils sont datés : ils font sourire, ou vieillir. Relou et chelou, eux, durent.')),
  sent(1162, 'Ce film est vraiment excellent.', 'This film is really excellent.', '/sə film ɛ vʁɛ.mɑ̃.ɛk.se.lɑ̃/', 'suh FEELM eh | vreh-mahⁿ-ehk-seh-LAHⁿ', ['neutre']),
];

/* ── ACT 9 · LES TEXTOS ───────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  tx(1163, 'phrase', 'ptdr', 'lol, dying of laughter (texting)', ['abreviation'], ['review'], 'Pour pété de rire : plus fort que mdr.'),
  tx(1164, 'phrase', 'oklm', 'chilled, taking it easy (texting)', ['abreviation'], ['review'], 'Pour au calme : tranquille. Popularisé par le rap vers 2014.'),
  tx(1165, 'phrase', 'jpp', 'I can’t take any more (texting)', ['abreviation'], ['review'], 'Pour j’en peux plus : de fatigue, ou de rire.'),
  tx(1166, 'sentence', 'slt, t’es dispo ce soir ? jsp encore à quelle heure je finis.', 'hi, you free tonight? dunno yet what time I finish.', ['fil'], FR),
  sent(1167, 'Salut, es-tu disponible ce soir ? Je ne sais pas encore à quelle heure je termine.', 'Hi, are you free this evening? I do not know yet what time I finish.', '/sa.ly ɛ.ty dis.pɔ.nibl sə swaʁ ʒə nə sɛ pa.zɑ̃.kɔʁ a kɛ.lœʁ ʒə tɛʁ.min/', 'sa-LÜ | eh-tü dees-po-NEEBL suh SWAR | zhuh nuh seh pa-zahⁿ-KOR | a keh-LUHR zhuh tehr-MEENN', ['neutre', 'texto'], FCVDR),
  tx(1168, 'sentence', 'dsl, je serai en retard. tkt, je t’envoie l’adresse.', 'sorry, I’ll be late. don’t worry, I’ll send you the address.', ['fil'], FR),
  sent(1169, 'Pardon, je serai en retard. Ne t’inquiète pas, je t’envoie l’adresse.', 'Sorry, I will be late. Do not worry, I will send you the address.', '/paʁ.dɔ̃ ʒə sə.ʁɛ ɑ̃ ʁə.taʁ nə tɛ̃.kjɛt pa ʒə tɑ̃.vwa la.dʁɛs/', 'par-DOHⁿ | zhuh suh-REH ahⁿ ruh-TAR | nuh tehⁿ-KYEHT PA | zhuh tahⁿ-vwa la-DREHSS', ['neutre', 'texto'], FCVDR),
  sent(1170, 'Mdr adoucit souvent un message : il ne veut pas toujours dire qu’on rit.', '“Mdr” often softens a message: it does not always mean you are laughing.', '/ɛm.de.ɛʁ a.du.si su.vɑ̃ œ̃ me.saʒ il nə vø pa tu.ʒuʁ diʁ kɔ̃ ʁi/', 'ehmm-day-EHR a-doo-SEE | soo-vahⁿ uhⁿ may-SAZH | eel nuh vuh pa too-zhoor DEER | kohⁿ REE', ['texto']),
  sent(1171, 'Dans un message à un inconnu, une abréviation peut paraître impolie.', 'In a message to a stranger, an abbreviation can seem impolite.', '/dɑ̃.zœ̃ me.saʒ a œ̃.nɛ̃.kɔ.ny yn a.bʁe.vja.sjɔ̃ pø pa.ʁɛtʁ ɛ̃.pɔ.li/', 'dahⁿ-zuhⁿ may-SAZH | a uhⁿ-nehⁿ-ko-NÜ | ün a-bray-vya-SYOHⁿ | puh pa-REHTR ehⁿ-po-LEE', ['jugement', 'texto']),
  sent(1172, 'Mon train a été annulé : je serai en retard.', 'My train has been cancelled: I will be late.', '/mɔ̃ tʁɛ̃ a e.te a.ny.le ʒə sə.ʁɛ ɑ̃ ʁə.taʁ/', 'mohⁿ TREHⁿ a ay-tay a-nü-LAY | zhuh suh-REH ahⁿ ruh-TAR', ['neutre'], FCVDR),
];

/* ── ACT 10 · TRADUIRE VERS LE NEUTRE ─────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1173, 'Bon, je me lance : bonjour, je m’appelle Yanis.', 'Right, here goes: hello, my name is Yanis.', '/bɔ̃ ʒə mə lɑ̃s bɔ̃.ʒuʁ ʒə ma.pɛl ja.nis/', 'BOHⁿ | zhuh muh LAHⁿSS | bohⁿ-ZHOOR | zhuh ma-PEHL ya-NEESS', ['ecoute']),
  fam(1174, 'Mon dernier stage, c’était chaud au début.', 'My last internship was tough at the start.', '/mɔ̃ dɛʁ.nje staʒ se.tɛ ʃo o de.by/', 'mohⁿ dehr-nyay STAZH | say-teh SHOH oh day-BÜ', ['ecoute']),
  sent(1175, 'Pardon : mon dernier stage a été difficile au début.', 'Sorry: my last internship was difficult at the start.', '/paʁ.dɔ̃ mɔ̃ dɛʁ.nje staʒ a e.te di.fi.sil o de.by/', 'par-DOHⁿ | mohⁿ dehr-nyay STAZH | a ay-TAY dee-fee-SEEL | oh day-BÜ', ['ecoute', 'neutre']),
  fam(1176, 'Mais j’ai grave appris, c’était ouf.', 'But I learned loads, it was insane.', '/mɛ ʒe ɡʁav a.pʁi se.tɛ uf/', 'meh zhay grav a-PREE | say-teh OOF', ['ecoute']),
  sent(1177, 'Je reprends : j’y ai énormément appris, c’était passionnant.', 'Let me start again: I learned an enormous amount there, it was fascinating.', '/ʒə ʁə.pʁɑ̃ ʒi.e e.nɔʁ.me.me.ta.pʁi se.tɛ pa.sjɔ.nɑ̃/', 'zhuh ruh-PRAHⁿ | zhee-ay ay-nor-may-may-ta-PREE | say-teh pa-syo-NAHⁿ', ['ecoute', 'neutre'], FCVDR),
  fam(1178, 'Mon ancien chef était un peu relou.', 'My old boss was a bit of a pain.', '/mɔ̃.nɑ̃.sjɛ̃ ʃɛf e.tɛ.tœ̃ pø ʁə.lu/', 'mohⁿ-nahⁿ-SYEHⁿ SHEHF | ay-teh-tuhⁿ puh ruh-LOO', ['ecoute']),
  sent(1179, 'Non : mon ancien responsable était très exigeant.', 'No: my former manager was very demanding.', '/nɔ̃ mɔ̃.nɑ̃.sjɛ̃ ʁɛs.pɔ̃.sabl e.tɛ tʁɛ.zɛɡ.zi.ʒɑ̃/', 'NOHⁿ | mohⁿ-nahⁿ-syehⁿ rehs-pohⁿ-SABL | ay-teh treh-zehg-zee-ZHAHⁿ', ['ecoute', 'neutre']),
  fam(1180, 'Je suis dispo tout de suite, tranquille.', 'I’m free straight away, no problem.', '/ʒə sɥi dis.po tut sɥit tʁɑ̃.kil/', 'zhuh swee dees-POH | toot SWEET | trahⁿ-KEEL', ['ecoute']),
  sent(1181, 'Autrement dit : je suis disponible immédiatement.', 'In other words: I am available immediately.', '/o.tʁə.mɑ̃ di ʒə sɥi dis.pɔ.nibl i.me.djat.mɑ̃/', 'oh-truh-mahⁿ DEE | zhuh swee dees-po-NEEBL | ee-may-dyat-MAHⁿ', ['ecoute', 'neutre'], FCVDR),
  sent(1182, 'Tu vois : même sens, autre registre.', 'You see: same meaning, different register.', '/ty vwa mɛm sɑ̃s otʁ ʁə.ʒistʁ/', 'tü VWA | mem SAHⁿSS | ohtr ruh-ZHEESTR', ['ecoute', 'neutre']),
  sent(1183, 'Traduire vers le neutre, c’est garder le sens et changer le costume.', 'Translating into neutral French means keeping the meaning and changing the outfit.', '/tʁa.dɥiʁ vɛʁ lə nøtʁ sɛ ɡaʁ.de lə sɑ̃s e ʃɑ̃.ʒe lə kɔs.tym/', 'tra-DWEER vehr luh NUHTR | seh gar-DAY luh SAHⁿSS | ay shahⁿ-ZHAY luh kos-TÜM', ['rule', 'neutre'], FO,
    rule('Tu traduis « j’ai le seum » pour ta professeure. Qu’est-ce qui reste ?', 'Le sens : tu es déçu. Le costume change : je regrette, je suis déçu.')),
  sent(1184, 'Parfois, le mot neutre adoucit aussi : relou devient exigeant, pas insupportable.', 'Sometimes the neutral word also softens: “relou” becomes “exigeant”, not “unbearable”.', '/paʁ.fwa lə mo nøtʁ a.du.si o.si ʁə.lu də.vjɛ̃ ɛɡ.zi.ʒɑ̃ pa ɛ̃.sy.pɔʁ.tabl/', 'par-FWA | luh moh NUHTR a-doo-SEE oh-SEE | ruh-LOO duh-vyehⁿ ehg-zee-ZHAHⁿ | pa ehⁿ-sü-por-TABL', ['rule', 'neutre'], FO),
  sent(1185, 'L’argot contient aussi des insultes et des mots blessants : cette leçon ne les enseigne pas.', 'Slang also contains insults and hurtful words: this lesson does not teach them.', '/laʁ.ɡo kɔ̃.tjɛ̃ o.si de.zɛ̃.sylt e de mo blɛ.sɑ̃ sɛt lə.sɔ̃ nə le.zɑ̃.sɛɲ pa/', 'lar-GOH kohⁿ-tyehⁿ oh-SEE | day-zehⁿ-SÜLT ay day moh bleh-SAHⁿ | seht luh-SOHⁿ | nuh lay-zahⁿ-SEHNY PA', ['sensible'], FO),
  sent(1186, 'Si tu ne sais pas si un mot est blessant, ne l’emploie pas.', 'If you do not know whether a word is hurtful, do not use it.', '/si ty nə sɛ pa si œ̃ mo ɛ blɛ.sɑ̃ nə lɑ̃.plwa pa/', 'see tü nuh seh PA | see uhⁿ moh eh bleh-SAHⁿ | nuh lahⁿ-PLWA PA', ['sensible', 'jugement']),
  sent(1187, 'Je préfère ne pas répéter ce mot : il peut blesser.', 'I would rather not repeat that word: it can hurt.', '/ʒə pʁe.fɛʁ nə pa ʁe.pe.te sə mo il pø blɛ.se/', 'zhuh pray-FEHR nuh pa ray-pay-TAY suh MOH | eel puh bleh-SAY', ['sensible']),
  sent(1188, 'Excuse-moi, je ne connais pas ce mot : il est poli ?', 'Sorry, I do not know that word: is it polite?', '/ɛk.skyz.mwa ʒə nə kɔ.nɛ pa sə mo i.lɛ pɔ.li/', 'ehk-sküz-MWA | zhuh nuh ko-neh pa suh MOH | ee-leh po-LEE', ['sensible', 'jugement'], FCVDR),
  sent(1189, 'Ne pas pouvoir passer l’examen me déçoit beaucoup.', 'Not being able to sit the exam disappoints me a great deal.', '/nə pa pu.vwaʁ pa.se lɛɡ.za.mɛ̃ mə de.swa bo.ku/', 'nuh pa poo-VWAR pa-SAY lehg-za-MEHⁿ | muh day-SWA boh-KOO', ['neutre']),
  sent(1190, 'Cette situation est vraiment délicate.', 'This situation is really awkward.', '/sɛt si.tɥa.sjɔ̃ ɛ vʁɛ.mɑ̃ de.li.kat/', 'seht see-twa-SYOHⁿ | eh vreh-MAHⁿ day-lee-KAT', ['neutre'], FCVDR),
  sent(1191, 'J’aimerais savoir s’il est possible de le passer plus tard.', 'I would like to know whether it is possible to sit it later.', '/ʒɛm.ʁɛ sa.vwaʁ si.lɛ pɔ.sibl də lə pa.se ply taʁ/', 'zhehmm-REH sa-VWAR | see-leh po-SEEBL | duh luh pa-SAY plü TAR', ['neutre'], FCVDR),
  ph(1192, 'passer au registre courant', 'to switch to everyday standard French', '/pa.se o ʁə.ʒistʁ ku.ʁɑ̃/', 'pa-SAY oh ruh-ZHEESTR | koo-RAHⁿ', ['neutre'], 'Remonter l’échelle : même sens, mots de tous.'),
];

/* ── ACT 11 · À TOI D’ÉCRIRE ──────────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1193, 'Madame, je me permets de vous écrire au sujet de l’examen de demain.', 'Madam, I am writing to you about tomorrow’s exam.', '/ma.dam ʒə mə pɛʁ.mɛ d(ə) vu.ze.kʁiʁ o sy.ʒɛ d(ə) lɛɡ.za.mɛ̃ d(ə) də.mɛ̃/', 'ma-DAMM | zhuh muh pehr-MEH | duh voo-zay-KREER | oh sü-ZHEH duh lehg-za-MEHⁿ | duh duh-MEHⁿ', ['modele'], FCVDR),
  sent(1194, 'Mon train pour Lyon a été annulé deux heures avant le départ.', 'My train to Lyon was cancelled two hours before departure.', '/mɔ̃ tʁɛ̃ puʁ ljɔ̃ a e.te a.ny.le dø.zœʁ a.vɑ̃ l(ə) de.paʁ/', 'mohⁿ TREHⁿ poor LYOHⁿ | a ay-tay a-nü-LAY | duh-ZUHR a-vahⁿ luh day-PAR', ['modele'], FCVDR),
  sent(1195, 'Vous trouverez en pièce jointe la confirmation de l’annulation.', 'Please find attached the confirmation of the cancellation.', '/vu tʁu.və.ʁe ɑ̃ pjɛs ʒwɛ̃t la kɔ̃.fiʁ.ma.sjɔ̃ də la.ny.la.sjɔ̃/', 'voo troo-vuh-RAY | ahⁿ pyehs ZHWEHⁿT | la kohⁿ-feer-ma-SYOHⁿ | duh la-nü-la-SYOHⁿ', ['modele']),
  sent(1196, 'Serait-il possible de passer cet examen à une autre date ?', 'Would it be possible to sit this exam on another date?', '/sə.ʁɛ.til pɔ.sibl də pa.se sɛ.tɛɡ.za.mɛ̃ a y.notʁ dat/', 'suh-reh-TEEL po-SEEBL | duh pa-SAY seh-tehg-za-MEHⁿ | a ü-nohtr DAT', ['modele'], FCVDR),
  sent(1197, 'J’ai remplacé dispo par disponible : les troncations restent entre amis.', 'I replaced “dispo” with “disponible”: clipped words stay among friends.', '/ʒe ʁɑ̃.pla.se dis.po paʁ dis.pɔ.nibl le tʁɔ̃.ka.sjɔ̃ ʁɛst.tɑ̃.tʁa.mi/', 'zhay rahⁿ-pla-SAY dees-POH | par dees-po-NEEBL | lay trohⁿ-ka-SYOHⁿ | rehst-tahⁿ-tra-MEE', ['modele', 'note']),
  sent(1198, 'J’ai supprimé wesh et mdr, qui n’ont pas leur place dans un courriel formel.', 'I removed “wesh” and “mdr”, which have no place in a formal email.', '/ʒe sy.pʁi.me wɛʃ e ɛm.de.ɛʁ ki nɔ̃ pa lœʁ plas dɑ̃.zœ̃ ku.ʁjɛl fɔʁ.mɛl/', 'zhay sü-pree-MAY | WEHSH ay ehmm-day-EHR | kee nohⁿ pa luhr PLASS | dahⁿ-zuhⁿ koo-ryehl for-MEHL', ['modele', 'note']),
  sent(1199, 'J’ai remplacé c’est chaud par une situation délicate, plus neutre.', 'I replaced “c’est chaud” with “une situation délicate”, which is more neutral.', '/ʒe ʁɑ̃.pla.se sɛ ʃo paʁ yn si.tɥa.sjɔ̃ de.li.kat ply nøtʁ/', 'zhay rahⁿ-pla-SAY | seh SHOH | par ün see-twa-SYOHⁿ day-lee-KAT | plü NUHTR', ['modele', 'note']),
];

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS
 *
 *  Readings 200 to 350 words; act texts 60 to 120 (measured by the scratch
 *  check). One apostrophe style, the typographic one. Every person, podcast,
 *  magazine, film and forum is invented; Renaud's song is the one real
 *  reference.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the magazine page on the register ladder. */
export const ARTICLE_A1 =
  'Le Mag des langues · L’argot, une langue à étages. Tu comprends le français des manuels, puis un soir, dans le métro, deux adolescents parlent devant toi et tu ne saisis plus rien : « C’est trop relou, ce prof, il est vénère pour rien. » Rassure-toi : ils parlent bien français, mais à un autre étage de la langue. ' +
  'On décrit souvent les registres comme une échelle. En haut, le soutenu, celui des discours et des lettres officielles. Au milieu, le courant, qui va partout. Plus bas, le familier, celui des amis et de la famille. Tout en bas, l’argot : les mots d’un groupe, d’un quartier ou d’une génération, souvent faits pour que les autres ne comprennent pas. ' +
  'Un même fait peut descendre toute l’échelle : les forces de l’ordre, la police, les flics, les keufs. C’est toujours la police, mais chaque mot dit aussi qui parle, et à qui. ' +
  'L’argot n’est pas une faute. Il crée un lien entre ceux qui le partagent, et il change vite : certains mots disparaissent en quelques années, d’autres montent d’un étage et finissent dans le dictionnaire. D’autres encore blessent ou insultent, et mieux vaut les reconnaître pour ne jamais les employer. ' +
  'Pour un apprenant, la règle tient en deux temps : comprendre le plus de mots possible, et n’employer que ceux dont on connaît la place. Ce dossier parle surtout de l’argot de France ; au Québec, en Belgique ou en Afrique, les jeunes ont leurs propres mots, et ils méritent un dossier à eux.';

/** Act 3, the text beat: a film dialogue. */
export const TEXTE_A3 =
  'Extrait du film « Samedi soir » (scénario inventé). Léa : Samedi, on fait une teuf chez Karim, je peux y aller ? Sa mère, depuis la cuisine : Une quoi ? Léa : Une fête, maman, une petite fête. La mère : Et les parents de Karim sont d’accord ? Léa : Grave. Enfin, oui, tout à fait. La mère : Qui sera là ? Léa : Karim, sa copine, deux ou trois amis du lycée. La mère : Et si les voisins se plaignent ? Léa : On baissera la musique, promis. La mère sourit : Tu vois, quand tu veux, tu parles très bien français.';

/** Act 4, the text beat: Yanis's message on the flatshare group. */
export const TEXTE_A4 =
  'Message de Yanis sur le groupe de la coloc. Salut tout le monde, petit point pour le week-end. Ma sœur et deux copines, des ados de dix-sept ans, dorment à l’appart samedi soir. Elles seront sages, promis. On se fait un resto vers vingt heures, puis ciné : qui est dispo ? Le proprio passe lundi matin pour le chauffe-eau, donc on range tout dimanche. Et rappel : le prof de Julie a décalé son partiel, elle révise dans le salon, alors un peu de silence. Merci, vous êtes top.';

/** Act 5, the text beat: the podcast transcript on new endings. */
export const TEXTE_A5 =
  'Transcription du podcast « Les mots de la rue », épisode 12. Julien Morel : Cette semaine, un auditeur nous écrit : « Mon grand-père dit la téloche, ma fille dit la télé, et moi, la télévision. Qui a raison ? » Tout le monde ! La téloche, avec son suffixe -oche, est familière et un peu datée. La télé est une troncation devenue presque courante. La télévision, enfin, passe partout. Attention seulement au suffixe -ard : un flemmard, un froussard, un chauffard, ce n’est jamais un compliment. Et calmos ? Là, on reste entre copains.';

/** Act 6: the magazine page on borrowings. */
export const ARTICLE_A6 =
  'Le Mag des langues · D’où viennent les mots des jeunes ? Écoute une cour de lycée à Marseille, à Lille ou en banlieue parisienne : tu entendras des mots venus du monde entier. L’arabe, d’abord, en a beaucoup donné, souvent par l’arabe parlé au Maghreb. Kiffer, qui veut dire aimer beaucoup, vient d’un mot arabe ; avoir le seum, c’est être déçu et frustré ; le bled désigne le village d’origine, mais aussi, avec une nuance moqueuse, un coin perdu. Wesh sert à saluer entre amis, et zarma se glisse dans une phrase pour dire « soi-disant ». ' +
  'L’anglais arrive par les séries, la musique et les réseaux sociaux : on chille le dimanche, on parle de son crush. L’Afrique francophone, enfin, a prêté des mots au rap : la go, c’est-à-dire la fille ou la petite amie, vient notamment du français de Côte d’Ivoire. ' +
  'Ces mots voyagent vite, mais ils gardent souvent la couleur du groupe qui les a apportés. Dans la bouche d’un lycéen de Marseille, wesh est naturel ; dans celle d’un touriste, il sonne comme une imitation, parfois comme une moquerie. Certains mots, comme kiffer, ont gagné toute la société et figurent aujourd’hui dans les dictionnaires, avec la mention familier. D’autres restent la marque d’un quartier. ' +
  'Le conseil des linguistes est donc double : comprendre ces mots pour suivre une conversation, une chanson ou un film, et réfléchir avant de les employer soi-même.';

/** Act 6, the text beat: the comments under a video. */
export const TEXTE_A6 =
  'Commentaires sous la vidéo « Mon premier mois en France ». Sam_Québec : Au lycée, tout le monde me dit wesh. Est-ce que je peux le dire aussi ? Inès_Lyon : Entre potes, oui, si ça vient naturellement. Mais pas à la prof, hein ! Marc_75 : Moi, je kiffe ta vidéo, mais vas-y doucement avec l’argot : on sent tout de suite quand quelqu’un force. Awa_Abidjan : Chez nous, on dit la go depuis toujours ! Sam_Québec : Merci à tous, j’avais le seum de rien comprendre, maintenant ça va mieux.';

/** Act 7, the text beat: the podcast transcript on intensifiers. */
export const TEXTE_A7 =
  'Transcription du podcast « Les mots de la rue », épisode 15. Une auditrice, Claire, professeure à Nantes : « Mes élèves disent tout le temps grave, trop et de ouf. Dois-je les corriger ? » Julien Morel : Ne corrigez pas, traduisez. Grave, trop et de ouf renforcent un mot, comme très ou extrêmement : c’est leur seul rôle. À l’oral, entre amis, ils sont parfaitement naturels. Dans une copie, en revanche, ils sonnent faux. Proposez donc un petit jeu à vos élèves : chaque fois qu’ils écrivent grave, qu’ils le remplacent par vraiment. Et genre ? C’est plus subtil : il sert à hésiter, à donner un exemple ou à arrondir un chiffre.';

/** Act 8, the text beat: a forum thread about parents' words. */
export const TEXTE_A8 =
  'Forum « Les mots de nos parents ». Lucas, 16 ans : Ma mère a dit « c’est de la balle » devant mes potes. La gênance totale. Nadia, 45 ans : À la fin des années quatre-vingt-dix, c’était le mot à la mode ! Et vous, dans vingt ans, vos enfants riront de votre « je suis en PLS ». Théo, 19 ans : Perso, je dis encore relou et chelou, et mes parents aussi : ceux-là ont survécu. Martine, 62 ans : Moi, je disais chébran et laisse béton. Aujourd’hui, je dis simplement : c’est très bien.';

/** Act 9, the MEET text: a thread of texts between Léa and the learner. */
export const FIL_A9 =
  'Le fil de messages entre Léa et toi, un jeudi soir. Léa : slt, t’es dispo ce soir ? Toi : jsp encore, je finis à dix-neuf heures. pk ? Léa : on se fait un ciné oklm, rdv à vingt heures devant le cinéma du quartier. Toi : dsl, je serai en retard, mon bus est bloqué. Léa : tkt, je t’attends. Toi : merci bcp. Tu me gardes qqch à manger stp ? jpp. Léa : ptdr, t’es pas croyable. Toi : mdr, j’arrive.';

/** Act 9, the text beat: the flatshare chat about the landlord. */
export const TEXTE_A9 =
  'Le groupe de la coloc. Julie : Le proprio demande qui a cassé la poignée de la porte. Je lui réponds « slt, jsp, dsl » ? Yanis : Mdr, non. À lui, tu écris tout en entier : « Bonjour Monsieur, je ne sais pas qui l’a cassée, mais nous allons la faire réparer. » Julie : Ok, je fais ça. Yanis : Et pas de ptdr à la fin, hein. Julie : Tkt, je suis plus une ado. Toi : Juste une question : on la fait réparer quand ? Julie : Samedi, c’est carré.';

/** Act 10, the text beat: one piece of news, two messages. */
export const TEXTE_A10 =
  'Deux versions du même message. À son ami Karim : « Wesh, l’entretien, c’était chaud au début, mais j’ai grave assuré. Le chef est un peu relou, mais la boîte est ouf. Je commence lundi, trop content ! » À la responsable du recrutement : « Madame, je vous remercie pour l’entretien de ce matin. Malgré un début difficile, j’ai beaucoup apprécié notre échange. Je suis ravi de rejoindre votre équipe dès lundi. » Les faits sont les mêmes ; le costume a changé, et un détail a disparu.';

/** Act 11: the model (a DIFFERENT situation from the task's, so the task is
 *  not given away): a thread, the email, then the writer's note. */
export const MODELE_TEXT =
  'Le fil de Yanis avec son ami Karim. Yanis : Wesh, je vais pas pouvoir bosser samedi à la librairie. Karim : Pk ? Yanis : Ma reum se fait opérer du genou, je dois la conduire à l’hosto, c’est chaud. Karim : Aïe. Préviens ta cheffe, elle est pas relou. ' +
  'Le courriel de Yanis. Objet : absence samedi. Madame Roche, je me permets de vous écrire au sujet de mon service de samedi. Ma mère doit être opérée du genou ce jour-là, et je suis la seule personne disponible pour l’accompagner à l’hôpital. Je ne pourrai donc pas assurer mon service. Je sais que ce délai est court et je vous prie de m’en excuser. Mon collègue Hugo pourrait peut-être me remplacer : voulez-vous que je lui en parle ? Je reste disponible pour rattraper ces heures la semaine suivante. Je vous remercie de votre compréhension. Bien cordialement, Yanis Belkacem. ' +
  'La note de Yanis. J’ai remplacé « ma reum » par « ma mère » : entre amis, reum passe, mais pour ma responsable, il aurait paru déplacé. J’ai écrit « hôpital » au lieu de « hosto », et j’ai donné le fait au lieu de « c’est chaud » : une opération suffit, sans dramatiser. Enfin, j’ai supprimé « wesh » et « pk » et rétabli le « ne » : dans un courriel, tout s’écrit en entier.';

/** The task's source thread, printed in the brief (TaskView has no source field). */
export const FIL_TACHE =
  'Toi : Wesh Léa, dsl, je serai pas là demain matin. Léa : Quoi ? T’as le partiel de socio, c’est chaud. Toi : Je sais, j’ai trop le seum. Mon train pour Lyon a été annulé, genre deux heures avant, et le prochain arrive à midi. Léa : Relou. Tu préviens la prof ? Toi : Jsp comment lui dire, elle est grave stricte. Léa : Tkt, elle est pas si vénère. Explique-lui, envoie la preuve de l’annulation et demande si tu peux le passer plus tard. Toi : Ok, je lui écris. Mdr, je suis en PLS.';

/** The task's model answer: the email, then the note. The markers' notes
 *  after it are outside the word count. The signature is gender-neutral. */
export const TASK_MODEL =
  'Objet : partiel de sociologie de demain, train annulé\n\n' +
  'Madame,\n\n' +
  'Je me permets de vous écrire au sujet du partiel de sociologie prévu demain matin, à huit heures. Mon train pour Lyon, que j’avais réservé il y a trois semaines pour arriver la veille, a été annulé deux heures avant le départ, et le suivant n’arrive qu’à midi. J’ai cherché une autre solution, mais aucun car ni covoiturage ne me permettait d’arriver à temps. Je ne pourrai donc pas être là pour l’examen.\n\n' +
  'Vous trouverez en pièce jointe le message d’annulation que j’ai reçu. Je regrette sincèrement cette situation, que je ne pouvais pas prévoir.\n\n' +
  'Serait-il possible de passer cet examen à une autre date, ou sous une autre forme ? Je reste disponible pour toute session de rattrapage que vous jugerez utile, et je peux vous transmettre d’autres justificatifs si nécessaire.\n\n' +
  'Je vous remercie par avance de votre compréhension et vous prie d’agréer, Madame, l’expression de mes salutations respectueuses.\n\n' +
  'Camille Martin\n\n' +
  'Note : trois changements.\n' +
  '1. « J’ai trop le seum » est devenu « je regrette sincèrement cette situation » : devant une professeure, on dit sa déception avec mesure.\n' +
  '2. « Genre deux heures avant » est devenu « deux heures avant le départ » : genre arrondit à l’oral ; à l’écrit, on donne le fait.\n' +
  '3. J’ai supprimé « wesh », « dsl », « jsp » et « mdr » et rétabli le « ne » : dans un courriel formel, tout s’écrit en entier, et on ne rit pas de sa propre situation.\n\n' +
  'Les repères de la correctrice (hors décompte) :\n' +
  '1. Tâche : ce qui s’est passé et quand, la conséquence, la pièce jointe, la demande de rattrapage ; une note avec trois changements et une raison pour chacun.\n' +
  '2. Cohérence : l’objet, le motif, la preuve, la demande, la formule ; la note séparée du courriel.\n' +
  '3. Étendue : annulé, arriver à temps, en pièce jointe, regretter, une session de rattrapage, sous une autre forme.\n' +
  '4. Correction : la négation complète (je ne pourrai pas), le conditionnel de politesse (serait-il possible), aucun mot abrégé.\n' +
  '5. Registre : vouvoiement, je me permets de, formule finale ; aucun mot d’argot, aucune abréviation, aucune dramatisation.';
