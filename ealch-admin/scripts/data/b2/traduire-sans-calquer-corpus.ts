// b2.33.l1 « Traduire sans calquer »: the authored corpus, the imports, the
// texts and the citation constants. DRAFT, to B1-WORKSHOP-AND-VOCAB-SHAPES.md
// §1 (the workshop shape: a TEXT and a MOVE per act) on top of
// B1-BUILD-PLAYBOOK.md, with the B2 rules of B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 33 of the B2 trail (Unit 6, variation and
//  nuance)
// ══════════════════════════════════════════════════════════════════════════
//
//   TRANSLATING FROM ENGLISH INTO NATURAL FRENCH, AND JUSTIFYING THE CHOICES.
//   The learner is an English speaker; direction mostly English → French.
//
//     act 1   what a calque is: of a word, of a sentence, of an expression;
//             the reviser's test (hide the English, read aloud)
//     act 2   words that mislead: supporter, adresser, définitivement,
//             réaliser (accepted), and six B2 faux amis NOT owned elsewhere
//             (attendre, prétendre, formation, introduire, achever, rester)
//     act 3   sentence calques: the stranded preposition, verbs built
//             differently (look for, pay for, listen to), the English
//             indirect passive (I was told), passive overuse, « il est
//             important de noter que », les cinq premiers, poser une question
//     act 4   expression calques, with the Québec angle of the OQLF: prendre
//             place, faire du sens, appliquer pour, mettre l’emphase, prendre
//             une marche, être en charge de, sonner une cloche, à la fin de
//             la journée; and the calques that became French (tasse de thé,
//             paver la voie)
//     act 5   transposition: the chassé-croisé (swam across → a traversé à
//             la nage), adverb → verb (nearly → faillir, hopefully),
//             verb → noun in formal style (lesson 10 in B2, applied)
//     act 6   modulation and équivalence: a change of viewpoint (not
//             uncommon → assez fréquent, wet paint → peinture fraîche), and
//             the signs French already has (défense de fumer, hors service)
//     act 7   étoffement: the English preposition that needs a French verb
//             (the path through → le sentier qui traverse), à destination
//             de; phrasal verbs, one French verb chosen by meaning
//     act 8   the -ing forms: six French answers (présent, en train de,
//             infinitive, gérondif, participe passé of posture, noun), with
//             lessons 12 and 14 in B2 applied, never re-taught
//     act 9   the small words: the article of general nouns, the body
//             without a possessive, the generic you → on
//     act 10  numbers, spaces and quotation marks: 1,5 ; 10 000 ; 15 % ;
//             27,50 $ ; 20 h 30 ; « » ; lower-case months; France and Québec
//     act 11  when word for word IS right: réaliser un projet, supporter la
//             chaleur, définitivement = for good, je suis d’accord avec toi;
//             over-correction
//     act 12  tone and register, and the task: translate and adapt a
//             company announcement, then justify three choices
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 6 in A1    the definite article for general statements
//     lesson 20 in A2   « Elle s’est cassé le bras » (row reused)
//     lesson 12 in B1   the preposition opens the relative (reframe quoted,
//                       rows reused)
//     lesson 18 in B1   the passive on the notice, on in the mouth (reframe
//                       quoted, rows reused)
//     lesson 25 in B1   register (reframe quoted)
//     lesson 26 in B1   tu or vous (reframe quoted)
//     lessons 27, 28 in B1   idioms (rows reused in act 6)
//     lesson 35 in B1   décevoir is not to deceive (row reused)
//     lesson 36 in B1   passer une commande, avoir du sens (rows reused)
//     lesson 37 in B1   THE B1 FAUX AMIS: actuellement, éventuellement,
//                       librairie, assister à, sensible (rows reused, never
//                       re-listed as new)
//     lesson 10 in B2   nominalisation (reframe quoted, row reused)
//     lesson 12 in B2   the gérondif and the dangling -ing (reframe quoted,
//                       row reused)
//     lesson 14 in B2   -ing as subject, après avoir, notices in the
//                       infinitive (reframe quoted, rows reused)
//     lesson 20 in B2   il est possible que (named)
//     lesson 22 in B2   academic style, the heavy formula (reframe quoted)
//     lesson 27 in B2   the faux amis of official French: application,
//                       rencontrer, location, amende, avocat, droit / loi
//                       (NAMED only: its rows are not in the seed yet)
//     lesson 28 in B2   the faux amis of care: drogue, physicien (NAMED)
//     lesson 29 in B2   the faux amis of science: évidence, conférence,
//                       lecture, significatif (NAMED)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked (seedPlusPacks, 22,082 items, read
//      2026-09-30), DB probed read-only 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `langue-soignee` (« La langue soignée », fondations, a2-b2).
//     Sub-theme « traduire sans calquer » is already in Postgres (read back
//     2026-09-30, scratch/_b233-db.mts). Postgres: fr.b1 .1000-.1392 (344
//     rows), fr.b2 .1400-.1786 (344 rows); NOTHING at .1800-.1999 at any
//     level. Nothing to create.
//
//  2. ID BLOCK: `.1800` to `.1999` ONLY, assigned by the brief. Rows run in
//     one sequence, act by act (see the act banners). Nothing outside it.
//
//  3. HEADWORDS AND TWINS. Postgres holds a DB-only theme `faux-amis`
//     (fr.sons .001-.111: la librairie, actuellement, assister à, attendre,
//     prétendre, supporter, réaliser, postuler, la déception, introduire,
//     achever, rester, ignorer…). `src()` cannot reach a DB-only row, so this
//     corpus authors NO bare headword of that list: its rows are sentences,
//     rule cards and a few collocations. Every authored `fr` was folded and
//     compared with the seed plus packs, every b1 and b2 corpus on disk, and
//     Postgres (scratch/_b233-twins.mts, _b233-dbtwins.mts).
//
//  4. NO WRONG FORM IS EVER A ROW. Every calque in this lesson (« prendre
//     place », « faire du sens », « adresser un problème », « la personne que
//     j’ai parlé à »…) lives only in a scene choice, a commonErrors.wrong, a
//     trapDrill.promptSound, a quiz errorSpot prompt, a question, a
//     tapTable cell, or one of the nine « texte à reprendre » drafts, which
//     are labelled as drafts to correct on screen and in their studio brief.
//
//  5. RESPELLINGS spelled for the nasal checker rather than the ear: a real
//     /n/ or /m/ is doubled where the checker would read a nasal vowel:
//     personne pehr-SONN, semaine suh-MENN, reprenne ruh-PRENN, bonne BONN,
//     donne DONN, jeune ZHUHNN, fontaine fohⁿ-TENN, aucune oh-KÜNN,
//     moyenne mwa-YENN, prochaine pro-SHENN, douzaine doo-ZENN. No U+203F
//     tie anywhere.
//
//  6. APOSTROPHES. Every authored French string uses the typographic ’.
//     Reused seed rows keep their straight '; none is quoted inside the
//     scenario, which uses ’ only. The « texte à reprendre » of act 10 holds
//     straight DOUBLE quotes on purpose: they are one of its errors.
//
//  7. USAGE JUDGEMENTS AND FACTS, FOR THE FACT CHECK (checked on
//     2026-09-30 against the OQLF Vitrine linguistique / Banque de dépannage
//     linguistique (BDL), the Académie française dictionary, the Portail
//     linguistique du Canada; from general knowledge where marked GK).
//     Where usage is DIVIDED, the lesson names the form as criticised, never
//     plainly wrong, and the task costs it at most one point (gate B2-2
//     spirit).
//
//     PLAIN CALQUES (taught as « à éviter », tested):
//       a. « adresser un problème, une question » = aborder, traiter, régler,
//          s’attaquer à: BDL « Emploi déconseillé de l’emprunt adresser ».
//          « adresser une lettre à », « s’adresser à quelqu’un » are correct
//          (same page).
//       b. « définitivement » = certainly: BDL « Emploi déconseillé de
//          l’emprunt définitivement »; définitivement = for good is correct.
//       c. « appliquer pour un emploi »: BDL « Emploi déconseillé des
//          emprunts appliquer et faire application »; postuler un emploi,
//          postuler à, postuler pour, poser / présenter sa candidature,
//          solliciter un emploi: all given as correct by the same page, so
//          every type-in accepts them all.
//       d. « faire du sens »: BDL « L’emprunt déconseillé faire du sens »
//          (avoir du sens, être sensé, être logique, tenir debout).
//       e. « prendre place » for an event: Portail linguistique du Canada,
//          Clés de la rédaction « prendre place » (calque of to take place;
//          avoir lieu, se dérouler, se tenir). Académie 9e éd., « place »:
//          prendre place = s’installer, which the lesson keeps as correct.
//       f. « demander une question », « mettre l’emphase sur », « prendre
//          une marche », « être répondu », « les premiers cinq jours », « être
//          sous l’impression », « c’est 18 degrés »: BDL, index « Emprunts
//          syntaxiques » (each an « emprunt déconseillé »).
//       g. « à la fin de la journée » (= en fin de compte), « ça me sonne une
//          cloche » (= ça me dit quelque chose): BDL « Emprunts
//          idiomatiques », both déconseillés.
//       h. « éventuellement » = eventually: BDL « Emploi déconseillé de
//          l’emprunt éventuellement » (lesson 37 in B1 owns it).
//     DIVIDED OR ACCEPTED (named, never marked plainly wrong):
//       i. « supporter » = soutenir, encourager: BDL « SUPPORTER et SUPPORT :
//          emprunts déconseillés »; the sports sense is common in France and
//          recorded by the dictionaries as an anglicism. Taught: « soutenir »
//          is the safe choice; supporter une équipe is heard, especially in
//          France. Supporter = tolérer is correct everywhere.
//       j. « être en charge de »: BDL, emprunts syntaxiques, « Être en charge
//          de, prendre charge de », déconseillé; very common in France
//          (GK). Taught as criticised: « être responsable de, être chargé
//          de » are safe.
//       k. « réaliser » = se rendre compte: BDL « Emploi acceptable de
//          l’emprunt réaliser »: long criticised, now accepted. Taught as
//          CORRECT; « se rendre compte » is given as the older synonym.
//       l. « faire sens » (without du): BDL (same page as d.): an old French
//          phrase, rare in Québec. Taught as existing, criticised by some,
//          never tested.
//       m. « ce n’est pas ma tasse de thé », « paver la voie », « mettre sur
//          la glace »: BDL « Emprunts idiomatiques », each « l’expression… »
//          (acceptable). PRE-REVIEW 2026-09-30: the BDL says tasse de thé is
//          acceptable « en contexte familier » only (vitrinelinguistique
//          id=24704); every mention now says so. Paver la voie and mettre sur
//          la glace are acceptable without that restriction (ids 24470,
//          24471). Taught as calques that became French.
//       l'. « faire sens »: the BDL presents it neutrally (old French, « peu
//          employée au Québec »); the Académie française (Dire, ne pas dire,
//          « Faire débat, faire polémique ») criticises the faire + noun
//          pattern it belongs to: « critiqué par certains » stands.
//       i'. « supporter » = soutenir: the Académie (« Supporter », Dire, ne
//          pas dire) criticises it even for sport; still recorded by the
//          dictionaries. Kept as criticised, keyed only « dans un texte
//          soigné ».
//     TYPOGRAPHY (act 10):
//       n. France and Québec: decimal comma (1,5), a space between groups of
//          three digits (10 000), a space before % (15 %), the currency
//          symbol after the number with a space (27,50 $ ; 25 €), the hour
//          written 20 h 30, months and days in lower case, « » with spaces
//          inside, the ordinal 2e (not 2ème): GK, and OQLF BDL « La
//          typographie ».
//       o. Spaces before signs: a space before the colon everywhere; before
//          ; ! ? the OQLF prefers a thin space, or none when the software
//          cannot make one: BDL « Types d’espacement ». In France the usage
//          is a (thin) space before ; ! ? (GK, Imprimerie nationale). The
//          lesson only TESTS the colon, the guillemets and the numbers.
//     TRANSLATION TECHNIQUES:
//       p. Transposition, modulation, équivalence, étoffement and the
//          chassé-croisé (he swam across → il a traversé à la nage), and the
//          examples « Wet paint » → « Peinture fraîche », « No smoking » →
//          « Défense de fumer »: the classic terms of Vinay and Darbelnet,
//          Stylistique comparée du français et de l’anglais (1958) (GK).
//     INVENTED: every person, company, school, park, museum, festival,
//     address and figure in the texts (Passerelle, Sophie Lavoie, Karim, the
//     Centre Pivot, l’école Le Pont, the parc des Trois-Cascades, Luc Morand,
//     Les Nuits du fleuve, Spoke & Chain, the musée de Baie-des-Loups…).
//     Real places appear only as places (Montréal, Hochelaga, Liège,
//     Lausanne, Ouchy, Évian, Québec, Lévis, Trois-Rivières, Dakar, the
//     Saint-Laurent, the rue Rachel); nothing is claimed about them beyond
//     plain facts (Évian faces Lausanne across Lake Geneva; Lévis faces
//     Québec across the river). Phone number 418 555-0199 is a 555 number.
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
  id: 'b2.33',
  seq: 33,
  title: 'Translating Without Calques',
  sub: 'Traduire sans calquer',
  canDo: 'Can translate and adapt a short English text into natural French for a francophone reader, recognising calques of words, sentences and expressions, applying transposition, modulation, equivalence and expansion, handling -ing forms, articles, body parts, generic you, phrasal verbs, numbers and typography, keeping a literal translation where it is natural, and justifying the choices made',
  prereqUnitIds: ['b1.12', 'b1.18', 'b1.37', 'b2.10', 'b2.12', 'b2.14'],
} as const;

export const LESSON_ID = 'b2.33.l1';
export const THEME = 'langue-soignee';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. 1000-1799 are b1 and b2 lessons. */
export const ID_RANGES = [[1800, 1999]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so every citation is French and built from the
 *  trail position. B1 and B2 ids ARE their positions; A1 and A2 ids are NOT
 *  (a2.23 is lesson 20), so those go through `unitRef`. Only occupied
 *  positions are cited: A1, A2 1-36, B1 1-39, B2 1-34. Never a raw id.
 * ══════════════════════════════════════════════════════════════════════════ */

export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  if (m) return `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}`;
  const a = /^lesson (\d+) in (A1|A2)$/.exec(unitRef(unitId));
  return a ? `la leçon ${a[1]} de l’${a[2]}` : unitRef(unitId);
}

export const ARTICLES_UNIT = 'a1.04';
export const PRONOMINAUX_UNIT = 'a2.23';
export const RELATIVES_UNIT = 'b1.12';
export const PASSIF_UNIT = 'b1.18';
export const REGISTRES_UNIT = 'b1.25';
export const TU_VOUS_UNIT = 'b1.26';
export const CORPS_UNIT = 'b1.27';
export const ANIMAUX_UNIT = 'b1.28';
export const EMOTIONS_UNIT = 'b1.35';
export const AFFAIRES_UNIT = 'b1.36';
export const LECTURE_UNIT = 'b1.37';
export const NOMINAL_UNIT = 'b2.10';
export const GERONDIF_UNIT = 'b2.12';
export const INFINITIF_UNIT = 'b2.14';
export const IMPERSONNEL_UNIT = 'b2.20';
export const ACADEMIQUE_UNIT = 'b2.22';
export const JURIDIQUE_UNIT = 'b2.27';
export const SOINS_UNIT = 'b2.28';
export const SCIENCE_UNIT = 'b2.29';

export const ARTICLES_REF = refFr(ARTICLES_UNIT);
export const PRONOMINAUX_REF = refFr(PRONOMINAUX_UNIT);
export const RELATIVES_REF = refFr(RELATIVES_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const TU_VOUS_REF = refFr(TU_VOUS_UNIT);
export const CORPS_REF = refFr(CORPS_UNIT);
export const ANIMAUX_REF = refFr(ANIMAUX_UNIT);
export const EMOTIONS_REF = refFr(EMOTIONS_UNIT);
export const AFFAIRES_REF = refFr(AFFAIRES_UNIT);
export const LECTURE_REF = refFr(LECTURE_UNIT);
export const NOMINAL_REF = refFr(NOMINAL_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);
export const INFINITIF_REF = refFr(INFINITIF_UNIT);
export const IMPERSONNEL_REF = refFr(IMPERSONNEL_UNIT);
export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT);
export const JURIDIQUE_REF = refFr(JURIDIQUE_UNIT);
export const SOINS_REF = refFr(SOINS_UNIT);
export const SCIENCE_REF = refFr(SCIENCE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE NEIGHBOURS' REFRAMES, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B112_REFRAME, REFRAME_EN as B112_REFRAME_EN } from '../b1/dont-ou-corpus.ts';
export { REFRAME as B118_REFRAME, REFRAME_EN as B118_REFRAME_EN } from '../b1/voix-passive-corpus.ts';
export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B126_REFRAME, REFRAME_EN as B126_REFRAME_EN } from '../b1/tu-ou-vous-corpus.ts';
export { REFRAME as B137_REFRAME, REFRAME_EN as B137_REFRAME_EN } from '../b1/strategies-lecture-corpus.ts';
export { REFRAME as B210_REFRAME, REFRAME_EN as B210_REFRAME_EN } from './nominalisation-corpus.ts';
export { REFRAME as B212_REFRAME, REFRAME_EN as B212_REFRAME_EN } from './gerondif-corpus.ts';
export { REFRAME as B214_REFRAME, REFRAME_EN as B214_REFRAME_EN } from './constructions-infinitives-corpus.ts';
export { REFRAME as B222_REFRAME, REFRAME_EN as B222_REFRAME_EN } from './style-academique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE FRANCOPHONE WHO WOULD HAVE WRITTEN IT. A translation is judged by one
 *  question: is this what a French speaker, writing for the same reader,
 *  would have written? Every act answers it for one kind of choice (a word,
 *  a construction, an expression, a change of class or of viewpoint, an
 *  added word, an -ing, a small word, a number, a tone). The same question
 *  also says when to KEEP the literal version (act 11): if the francophone
 *  would have written the same words, keep them.
 *
 *  It is NOT « s’éloigner de l’anglais » (act 11 is built against that) and
 *  NOT « trouve le bon dictionnaire » (a calque is usually made of real
 *  French words).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Traduis le sens, pas les mots : écris ce qu’un francophone aurait écrit.';
export const REFRAME_EN = 'Translate the meaning, not the words: write what a French speaker would have written.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Ne traduis jamais mot à mot.',
    why: 'False, and act 11 is built against it: « Je suis d’accord avec toi », « toutes les deux minutes », « réaliser un projet » are word for word and exactly right. Over-correction is the second error of the lesson.',
  },
  {
    text: 'Méfie-toi des mots qui ressemblent à l’anglais.',
    why: 'Covers act 2 only. A calque of a sentence (« la personne que j’ai parlé à ») or of an expression (« prendre une marche ») is built of plain French words that resemble nothing; and many look-alikes are fine (information, possible, important).',
  },
  {
    text: 'Traduis l’idée, pas la phrase.',
    why: 'Too loose for a B2 task graded on accuracy: it licenses dropping content. The lesson keeps everything the English says and changes only how it is said.',
  },
  {
    text: 'Cache l’anglais et relis à voix haute.',
    why: 'A good method (act 1, sheet-traduire), not a rule: it does not say what to look for. Kept as a hack.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const SC1 = (n: number) => `fr.b1.strategies-de-comprehension.${n}`;
export const FAUX_AMI = SC1(1115);                                  // un faux ami  (lesson 37 in B1)
export const ACTUELLEMENT = SC1(1116);                              // Actuellement, je loge chez mes parents.
export const EVENTUELLEMENT = SC1(1118);                            // Éventuellement, je pourrais partager un appartement.
export const LIBRAIRIE = SC1(1121);                                 // La librairie du coin vend aussi des journaux.
export const ASSISTER = SC1(1122);                                  // J'ai assisté à la réunion de ce matin.
export const SENSIBLE = SC1(1124);                                  // Il est très sensible au bruit.
export const DECEVOIR = 'fr.b1.emotions.1046';                      // Décevoir, ce n'est pas tromper.  (lesson 35 in B1, grammar card, flashcard only)
export const PRETEND = 'fr.b2.faits-et-procedures.1300';            // Il prétend ne rien savoir.  (lesson 14 in B2)
export const SEMBLANT = 'fr.a2.verbes.324';                         // faire semblant
export const A_QUI = 'fr.b1.pronoms-essentiels.1340';               // La personne à qui j'ai parlé hier m'a tout expliqué.  (lesson 12 in B1)
export const AVEC_QUI = 'fr.b1.pronoms-essentiels.1209';            // La conseillère avec qui tu as rendez-vous s'appelle madame Roy.  (lesson 12 in B1)
export const ON_M_A_DIT = 'fr.b1.faits-et-procedures.1147';         // On m'a dit de revenir demain.  (lesson 18 in B1)
export const PASSIF_RULE = 'fr.b1.faits-et-procedures.1006';        // Le passif est sur l'affiche. Dans ta bouche, c'est on.  (grammar card, flashcard only)
export const AVOIR_LIEU = 'fr.b1.rp-famille.002';                   // avoir lieu
export const A_DU_SENS = 'fr.b1.affaires.1139';                     // Votre idée a du sens, mais le budget ne suffit pas.  (lesson 36 in B1)
export const COMMANDE_RULE = 'fr.b1.affaires.1111';                 // On passe une commande ; on ne la place pas.  (lesson 36 in B1, grammar card)
export const MISE_EN_LIGNE = 'fr.b2.langue-soignee.1463';           // La mise en ligne du site a eu lieu hier soir.  (lesson 10 in B2)
export const VIENT_DE = 'fr.a2.verbes.281';                         // Il vient de partir.
export const INTERDIT_FUMER = 'fr.b1.faits-et-procedures.1072';     // Il est interdit de fumer dans les chambres.  (lesson 18 in B1)
export const BOIRE_DEBOUT = 'fr.b1.expressions-imagees.1223';       // Il pleut à boire debout depuis midi.  (lesson 28 in B1)
export const YEUX_TETE = 'fr.b1.expressions-imagees.1004';          // Ce vélo coûte les yeux de la tête.  (lesson 27 in B1)
export const EN_LISANT = 'fr.b2.connecteurs-logiques.1629';         // Il s'est endormi en lisant.  (lesson 12 in B2)
export const VOYAGER = 'fr.b2.faits-et-procedures.1371';            // Voyager forme la jeunesse.  (lesson 14 in B2)
export const APRES_AVOIR = 'fr.b2.faits-et-procedures.1242';        // Après avoir signé le bail, nous avons reçu les clés.  (lesson 14 in B2)
export const MERCI_VENUS = 'fr.b2.emotions.1371';                   // Merci d'être venus si nombreux.  (lesson 5 in B2)
export const CASSE_BRAS = 'fr.a2.corps.001';                        // Elle s'est cassé le bras en tombant du vélo.  (lesson 20 in A2)
export const ON_NE_SAIT = 'fr.b1.projets-et-futur.1319';            // On ne sait jamais si le train partira à l’heure.
export const PLAISIR = 'fr.b2.faits-et-procedures.1377';            // Nous avons le plaisir de vous annoncer l'ouverture de notre magasin.  (lesson 14 in B2)
export const HATE = 'fr.b1.emotions.1001';                          // avoir hâte de  (lesson 35 in B1)
export const BONJOUR_TOUS = 'fr.b1.correspondance.1046';            // Bonjour à toutes et à tous,  (lesson 39 in B1)
export const ATTENTE = 'fr.b1.affaires.1167';                       // Dans l'attente de votre réponse, je vous souhaite une bonne journée.  (lesson 36 in B1)

export const IMPORTED = {
  act1: [FAUX_AMI],
  act2: [ACTUELLEMENT, EVENTUELLEMENT, LIBRAIRIE, ASSISTER, SENSIBLE, DECEVOIR, PRETEND, SEMBLANT],
  act3: [A_QUI, AVEC_QUI, ON_M_A_DIT, PASSIF_RULE],
  act4: [AVOIR_LIEU, A_DU_SENS, COMMANDE_RULE],
  act5: [MISE_EN_LIGNE, VIENT_DE],
  act6: [INTERDIT_FUMER, BOIRE_DEBOUT, YEUX_TETE],
  act7: [] as string[],
  act8: [EN_LISANT, VOYAGER, APRES_AVOIR, MERCI_VENUS, HATE],
  act9: [CASSE_BRAS, ON_NE_SAIT],
  act10: [] as string[],
  act11: [] as string[],
  act12: [PLAISIR, ATTENTE, BONJOUR_TOUS],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. Filled
 *  from the seed by the lesson file's checks; listed here by hand. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. The
 *  lesson file ALSO filters imports by their seed drills, so a mistake here
 *  cannot put an unspeakable row in the speak list. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  DECEVOIR,                          // grammar card, flashcard only
  PASSIF_RULE,                       // grammar card, flashcard only
  COMMANDE_RULE,                     // grammar card, flashcard only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: the natural French a
 *  translator writes for an English turn (to hear, to choose, to say), or a
 *  rule card whose prompt is the English trap and whose `fr` is the move.
 *  Every row is correct, natural French (§A.4).
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];
const GP = ['traduire-sans-calquer'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP, ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: GP, ...extra,
});

/** A rule card: `prompt` is the English trap, `fr` the move. */
const rule = (n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[]): Row =>
  sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE MOT À MOT (.1800-.1812) ──────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1800, 'Le lancement aura lieu samedi à dix heures.', 'The launch will take place on Saturday at ten.',
    '/lə lɑ̃s.mɑ̃ o.ʁa ljø sam.di a di.zœʁ/', 'luh lahⁿss-MAHⁿ | oh-ra LYEU | sam-DEE a dee-ZUHR', ['calque', 'expression', 'scene']),
  sent(1801, 'Un calque traduit les mots, pas le sens.', 'A calque translates the words, not the meaning.',
    '/œ̃ kalk tʁa.dɥi le mo pa lə sɑ̃s/', 'uhⁿ KALK tra-DWEE lay MOH | pa luh SAHⁿSS', ['calque', 'definition'], FCVDR),
  sent(1802, 'Un calque de mot donne à un mot français le sens du mot anglais.', 'A word calque gives a French word the meaning of the English word.',
    '/œ̃ kalk də mo dɔn a œ̃ mo fʁɑ̃.sɛ lə sɑ̃s dy mo ɑ̃.ɡlɛ/', 'uhⁿ KALK duh MOH | DONN a uhⁿ moh frahⁿ-SEH | luh sahⁿss dü moh ahⁿ-GLEH', ['calque', 'mot']),
  sent(1803, 'Un calque de phrase copie la construction de l’anglais.', 'A sentence calque copies the English construction.',
    '/œ̃ kalk də fʁaz kɔ.pi la kɔ̃s.tʁyk.sjɔ̃ də lɑ̃.ɡlɛ/', 'uhⁿ KALK duh FRAHZ | ko-PEE la kohⁿs-trük-SYOHⁿ | duh lahⁿ-GLEH', ['calque', 'phrase']),
  sent(1804, 'Un calque d’expression traduit une image mot à mot.', 'An expression calque translates an image word for word.',
    '/œ̃ kalk dɛks.pʁɛ.sjɔ̃ tʁa.dɥi yn i.maʒ mo a mo/', 'uhⁿ KALK deks-preh-SYOHⁿ | tra-DWEE ün ee-MAZH | moh a MOH', ['calque', 'expression']),
  sent(1805, 'Comment un francophone dirait-il ça ?', 'How would a French speaker say that?',
    '/kɔ.mɑ̃ œ̃ fʁɑ̃.kɔ.fɔn di.ʁɛ.til sa/', 'ko-MAHⁿ uhⁿ frahⁿ-ko-FONN | dee-reh-TEEL SA', ['question', 'methode'], FCVDR),
  sent(1806, 'Cache l’anglais et relis ta traduction à voix haute.', 'Hide the English and read your translation aloud.',
    '/kaʃ lɑ̃.ɡlɛ e ʁə.li ta tʁa.dyk.sjɔ̃ a vwa ot/', 'kash lahⁿ-GLEH | ay ruh-LEE ta tra-dük-SYOHⁿ | a vwa OHT', ['methode'], FCVDR),
  sent(1807, 'La phrase est correcte, mais aucun francophone ne l’écrirait.', 'The sentence is correct, but no French speaker would write it.',
    '/la fʁaz ɛ kɔ.ʁɛkt mɛ o.kœ̃ fʁɑ̃.kɔ.fɔn nə le.kʁi.ʁɛ/', 'la FRAHZ eh ko-REKT | meh oh-kuhⁿ frahⁿ-ko-FONN | nuh lay-kree-REH', ['calque', 'definition']),
  rule(1808, REFRAME, REFRAME_EN,
    '/tʁa.dɥi lə sɑ̃s pa le mo e.kʁi sə kœ̃ fʁɑ̃.kɔ.fɔn o.ʁɛ e.kʁi/', 'tra-dwee luh SAHⁿSS | pa lay MOH | ay-kree suh kuhⁿ frahⁿ-ko-FONN | oh-reh-tay-KREE',
    'Tu as traduit une annonce mot par mot. Elle est correcte. Est-ce fini ?',
    'Pas encore : relis-la comme si l’anglais n’existait pas. Si un francophone ne l’aurait pas écrite ainsi, reprends la phrase.', ['reframe']),
  phrase(1809, 'un calque de l’anglais', 'a calque from English',
    '/œ̃ kalk də lɑ̃.ɡlɛ/', 'uhⁿ KALK | duh lahⁿ-GLEH', ['calque']),
  sent(1810, 'Une bonne traduction se lit comme un texte écrit en français.', 'A good translation reads like a text written in French.',
    '/yn bɔn tʁa.dyk.sjɔ̃ sə li kɔ.mœ̃ tɛkst e.kʁi ɑ̃ fʁɑ̃.sɛ/', 'ün BONN tra-dük-SYOHⁿ | suh LEE | ko-muhⁿ TEKST ay-KREE | ahⁿ frahⁿ-SEH', ['methode'], FCVDR),
  sent(1811, 'Traduire, c’est dire la même chose autrement.', 'Translating means saying the same thing differently.',
    '/tʁa.dɥiʁ sɛ diʁ la mɛm ʃoz o.tʁə.mɑ̃/', 'tra-DWEER | seh DEER la MEM SHOHZ | oh-truh-MAHⁿ', ['methode']),
  sent(1812, 'Le sens est là ; il manque la manière.', 'The meaning is there; the manner is missing.',
    '/lə sɑ̃s ɛ la il mɑ̃k la ma.njɛʁ/', 'luh SAHⁿSS eh LA | eel MAHⁿK la ma-NYEHR', ['methode', 'texte']),
];

/* ── ACT 2 · DES MOTS QUI TROMPENT (.1813-.1836) ─────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1813, 'Le centre soutient les familles du quartier depuis dix ans.', 'The centre has supported the families of the neighbourhood for ten years.',
    '/lə sɑ̃tʁ su.tjɛ̃ le fa.mij dy kaʁ.tje də.pɥi di.zɑ̃/', 'luh SAHⁿTR soo-TYEHⁿ | lay fa-MEEY dü kar-TYAY | duh-pwee dee-ZAHⁿ', ['texte', 'supporter'], FCVDR),
  sent(1814, 'Elle ne supporte pas le bruit du métro.', 'She cannot stand the noise of the metro.',
    '/ɛl nə sy.pɔʁt pa lə bʁɥi dy me.tʁo/', 'el nuh sü-PORT pa | luh BRWEE dü may-TROH', ['supporter', 'juste']),
  sent(1815, 'Nous avons décidé de nous attaquer au problème.', 'We decided to tackle the problem.',
    '/nu.za.vɔ̃ de.si.de də nu.za.ta.ke o pʁɔ.blɛm/', 'noo-za-vohⁿ day-see-DAY | duh noo-za-ta-KAY | oh pro-BLEM', ['texte', 'adresser'], FCVDR),
  sent(1816, 'Nous aborderons cette question à la réunion de jeudi.', 'We will address this question at Thursday’s meeting.',
    '/nu.za.bɔʁ.də.ʁɔ̃ sɛt kɛs.tjɔ̃ a la ʁe.y.njɔ̃ də ʒø.di/', 'noo-za-bor-duh-ROHⁿ | set kes-TYOHⁿ | a la ray-ü-NYOHⁿ duh zheu-DEE', ['adresser']),
  sent(1817, 'Nous vous adresserons la facture par courriel.', 'We will send you the invoice by email.',
    '/nu vu.za.dʁɛ.sə.ʁɔ̃ la fak.tyʁ paʁ ku.ʁjɛl/', 'noo voo-za-dreh-suh-ROHⁿ | la fak-TÜR | par koo-RYEL', ['adresser', 'juste']),
  sent(1818, 'Il viendra, c’est certain.', 'He will definitely come.',
    '/il vjɛ̃.dʁa sɛ sɛʁ.tɛ̃/', 'eel vyehⁿ-DRA | seh sehr-TEHⁿ', ['definitivement'], FCVDR),
  sent(1819, 'J’ai sans aucun doute fait le bon choix.', 'I definitely made the right choice.',
    '/ʒe sɑ̃.zo.kœ̃ dut fɛ lə bɔ̃ ʃwa/', 'zhay sahⁿ-zoh-kuhⁿ DOOT | feh luh bohⁿ SHWA', ['definitivement']),
  sent(1820, 'Elle a quitté Montréal définitivement.', 'She left Montréal for good.',
    '/ɛ.la ki.te mɔ̃.ʁe.al de.fi.ni.tiv.mɑ̃/', 'eh-la kee-TAY mohⁿ-ray-AL | day-fee-nee-teev-MAHⁿ', ['definitivement', 'juste']),
  sent(1821, 'Je me suis rendu compte de mon erreur le lendemain.', 'I realised my mistake the next day.',
    '/ʒə mə sɥi ʁɑ̃.dy kɔ̃t də mɔ̃.ne.ʁœʁ lə lɑ̃d.mɛ̃/', 'zhuh muh swee rahⁿ-dü KOHⁿT | duh mohⁿ-nay-RUHR | luh lahⁿd-MEHⁿ', ['realiser']),
  sent(1822, 'Elle a réalisé qu’elle s’était trompée de quai.', 'She realised she had gone to the wrong platform.',
    '/ɛ.la ʁe.a.li.ze kɛl se.tɛ tʁɔ̃.pe də ke/', 'eh-la ray-a-lee-ZAY | kel say-teh trohⁿ-PAY duh KAY', ['realiser', 'juste']),
  sent(1823, 'L’équipe a réalisé le projet en deux ans.', 'The team carried out the project in two years.',
    '/le.kip a ʁe.a.li.ze lə pʁɔ.ʒɛ ɑ̃ dø.zɑ̃/', 'lay-KEEP a ray-a-lee-ZAY | luh pro-ZHEH | ahⁿ deu-ZAHⁿ', ['realiser', 'juste']),
  sent(1824, 'Il fait semblant de ne pas m’entendre.', 'He is pretending not to hear me.',
    '/il fɛ sɑ̃.blɑ̃ də nə pa mɑ̃.tɑ̃dʁ/', 'eel feh sahⁿ-BLAHⁿ | duh nuh pa mahⁿ-TAHⁿDR', ['pretendre'], FCVDR),
  sent(1825, 'L’entreprise offre à ses employés une formation de trois jours.', 'The company offers its employees a three-day training course.',
    '/lɑ̃.tʁə.pʁiz ɔfʁ a se.zɑ̃.plwa.je yn fɔʁ.ma.sjɔ̃ də tʁwa ʒuʁ/', 'lahⁿ-truh-PREEZ OFR | a say-zahⁿ-plwa-YAY | ün for-ma-SYOHⁿ duh trwa ZHOOR', ['formation', 'texte']),
  sent(1826, 'Le club a son entraînement le mardi soir.', 'The club has its training on Tuesday evenings.',
    '/lə klœb a sɔ̃.nɑ̃.tʁɛn.mɑ̃ lə maʁ.di swaʁ/', 'luh KLUHB a sohⁿ-nahⁿ-trenn-MAHⁿ | luh mar-dee SWAR', ['formation']),
  sent(1827, 'Je te présente ma collègue Nadia.', 'Let me introduce my colleague Nadia.',
    '/ʒə tə pʁe.zɑ̃t ma kɔ.lɛɡ na.dja/', 'zhuh tuh pray-ZAHⁿT | ma ko-LEG na-DYA', ['introduire'], FCVDR),
  sent(1828, 'Introduisez votre carte dans le lecteur.', 'Insert your card into the reader.',
    '/ɛ̃.tʁɔ.dɥi.ze vɔtʁ kaʁt dɑ̃ lə lɛk.tœʁ/', 'ehⁿ-tro-dwee-ZAY | votr KART | dahⁿ luh lek-TUHR', ['introduire', 'juste']),
  sent(1829, 'Elle a atteint tous ses objectifs cette année.', 'She achieved all her goals this year.',
    '/ɛ.la a.tɛ̃ tu se.zɔb.ʒɛk.tif sɛ.ta.ne/', 'eh-la a-TEHⁿ | too say-zob-zhek-TEEF | seh-ta-NAY', ['achever']),
  sent(1830, 'Il a achevé son roman pendant l’hiver.', 'He finished his novel during the winter.',
    '/i.la a.ʃə.ve sɔ̃ ʁɔ.mɑ̃ pɑ̃.dɑ̃ li.vɛʁ/', 'ee-la a-shuh-VAY | sohⁿ ro-MAHⁿ | pahⁿ-dahⁿ lee-VEHR', ['achever', 'juste']),
  sent(1831, 'Après la course, prends le temps de te reposer.', 'After the race, take time to rest.',
    '/a.pʁɛ la kuʁs pʁɑ̃ lə tɑ̃ də tə ʁə.po.ze/', 'a-preh la KOORS | prahⁿ luh TAHⁿ | duh tuh ruh-poh-ZAY', ['rester']),
  sent(1832, 'Nous sommes restés deux nuits à Québec.', 'We stayed two nights in Québec City.',
    '/nu sɔm ʁɛs.te dø nɥi a ke.bɛk/', 'noo somm res-TAY | deu NWEE | a kay-BEK', ['rester', 'juste']),
  phrase(1833, 's’attaquer à un problème', 'to tackle a problem',
    '/sa.ta.ke a œ̃ pʁɔ.blɛm/', 'sa-ta-KAY | a uhⁿ pro-BLEM', ['adresser']),
  phrase(1834, 'soutenir un projet', 'to support a project',
    '/su.tə.niʁ œ̃ pʁɔ.ʒɛ/', 'soo-tuh-NEER | uhⁿ pro-ZHEH', ['supporter']),
  rule(1835, 'Un mot qui ressemble à l’anglais n’a pas forcément le même sens.', 'A word that looks like English does not necessarily mean the same thing.',
    '/œ̃ mo ki ʁə.sɑ̃bl a lɑ̃.ɡlɛ na pa fɔʁ.se.mɑ̃ lə mɛm sɑ̃s/', 'uhⁿ MOH kee ruh-SAHⁿBL | a lahⁿ-GLEH | na pa for-say-MAHⁿ | luh mem SAHⁿSS',
    '« We definitely support this project. » Nous supportons définitivement ce projet ?',
    'Non : nous soutenons sans aucun doute ce projet. Supporter veut d’abord dire tolérer, et définitivement veut dire pour toujours.', ['mot']),
  sent(1836, 'Nous participerons certainement à la collecte.', 'We will definitely take part in the collection.',
    '/nu paʁ.ti.si.pə.ʁɔ̃ sɛʁ.tɛn.mɑ̃ a la kɔ.lɛkt/', 'noo par-tee-see-puh-ROHⁿ | sehr-tenn-MAHⁿ | a la ko-LEKT', ['definitivement', 'texte']),
];

/* ── ACT 3 · DES PHRASES CALQUÉES (.1837-.1854) ──────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1837, 'À qui dois-je m’adresser pour m’inscrire ?', 'Who should I speak to in order to register?',
    '/a ki dwa.ʒ ma.dʁɛ.se puʁ mɛ̃s.kʁiʁ/', 'a KEE | dwazh ma-dreh-SAY | poor mehⁿs-KREER', ['texte', 'preposition']),
  sent(1838, 'Avec qui vais-je travailler ?', 'Who will I be working with?',
    '/a.vɛk ki vɛ.ʒ tʁa.va.je/', 'a-vek KEE | vezh tra-va-YAY', ['texte', 'preposition'], FCVDR),
  sent(1839, 'Que cherches-tu exactement ?', 'What exactly are you looking for?',
    '/kə ʃɛʁʃ ty ɛɡ.zak.tə.mɑ̃/', 'kuh SHEHRSH tü | eg-zak-tuh-MAHⁿ', ['construction'], FCVDR),
  sent(1840, 'J’ai payé les billets en ligne.', 'I paid for the tickets online.',
    '/ʒe pe.je le bi.jɛ ɑ̃ liɲ/', 'zhay pay-YAY lay bee-YEH | ahⁿ LEENY', ['construction']),
  sent(1841, 'Écoute bien la question avant de répondre.', 'Listen carefully to the question before you answer.',
    '/e.kut bjɛ̃ la kɛs.tjɔ̃ a.vɑ̃ də ʁe.pɔ̃dʁ/', 'ay-koot BYEHⁿ | la kes-TYOHⁿ | a-vahⁿ duh ray-POHⁿDR', ['construction']),
  sent(1842, 'On vous répondra dans les deux jours ouvrables.', 'You will get an answer within two working days.',
    '/ɔ̃ vu ʁe.pɔ̃.dʁa dɑ̃ le dø ʒuʁ u.vʁabl/', 'ohⁿ voo ray-pohⁿ-DRA | dahⁿ lay deu ZHOOR oo-VRABL', ['texte', 'passif'], FCVDR),
  sent(1843, 'Cinquante personnes ont assisté à la réunion.', 'The meeting was attended by fifty people.',
    '/sɛ̃.kɑ̃t pɛʁ.sɔn ɔ̃.ta.sis.te a la ʁe.y.njɔ̃/', 'sehⁿ-KAHⁿT pehr-SONN | ohⁿ-ta-sees-TAY | a la ray-ü-NYOHⁿ', ['passif']),
  sent(1844, 'On a retrouvé le portefeuille dans le taxi.', 'The wallet was found in the taxi.',
    '/ɔ̃.na ʁə.tʁu.ve lə pɔʁ.tə.fœj dɑ̃ lə tak.si/', 'ohⁿ-na ruh-troo-VAY | luh por-tuh-FUHY | dahⁿ luh tak-SEE', ['passif']),
  sent(1845, 'Les cinq premiers cours sont gratuits.', 'The first five classes are free.',
    '/le sɛ̃k pʁə.mje kuʁ sɔ̃ ɡʁa.tɥi/', 'lay sehⁿk pruh-myay KOOR | sohⁿ gra-TWEE', ['texte', 'ordre'], FCVDR),
  sent(1846, 'Tu pourras poser tes questions au cours suivant.', 'You can ask your questions at the next class.',
    '/ty pu.ʁa po.ze te kɛs.tjɔ̃ o kuʁ sɥi.vɑ̃/', 'tü poo-RA | poh-ZAY tay kes-TYOHⁿ | oh koor swee-VAHⁿ', ['texte', 'construction']),
  sent(1847, 'J’ai l’impression qu’il n’a pas compris.', 'I get the impression that he did not understand.',
    '/ʒe lɛ̃.pʁɛ.sjɔ̃ ki.na pa kɔ̃.pʁi/', 'zhay lehⁿ-preh-SYOHⁿ | kee-na pa kohⁿ-PREE', ['construction']),
  sent(1848, 'Soulignons que l’inscription est gratuite.', 'Note that registration is free.',
    '/su.li.ɲɔ̃ kə lɛ̃s.kʁip.sjɔ̃ ɛ ɡʁa.tɥit/', 'soo-lee-NYOHⁿ | kuh lehⁿs-kreep-SYOHⁿ | eh gra-TWEET', ['lourdeur']),
  sent(1849, 'L’inscription est gratuite, et elle le restera.', 'Registration is free, and it will stay that way.',
    '/lɛ̃s.kʁip.sjɔ̃ ɛ ɡʁa.tɥit e ɛl lə ʁɛs.tə.ʁa/', 'lehⁿs-kreep-SYOHⁿ eh gra-TWEET | ay el luh res-tuh-RA', ['lourdeur']),
  sent(1850, 'Il fait dix-huit degrés ce matin.', 'It is eighteen degrees this morning.',
    '/il fɛ di.zɥi də.ɡʁe sə ma.tɛ̃/', 'eel feh dee-zwee duh-GRAY | suh ma-TEHⁿ', ['construction', 'quebec']),
  sent(1851, 'Nous vous enverrons les documents par courriel.', 'The documents will be sent to you by email.',
    '/nu vu.zɑ̃.vɛ.ʁɔ̃ le dɔ.ky.mɑ̃ paʁ ku.ʁjɛl/', 'noo voo-zahⁿ-veh-ROHⁿ | lay do-kü-MAHⁿ | par koo-RYEL', ['texte', 'passif']),
  phrase(1852, 'avoir l’impression que', 'to be under the impression that',
    '/a.vwaʁ lɛ̃.pʁɛ.sjɔ̃ kə/', 'a-VWAR | lehⁿ-preh-SYOHⁿ KUH', ['construction']),
  rule(1853, 'Une construction anglaise se traduit par la construction française.', 'An English construction is translated by the French construction.',
    '/yn kɔ̃s.tʁyk.sjɔ̃ ɑ̃.ɡlɛz sə tʁa.dɥi paʁ la kɔ̃s.tʁyk.sjɔ̃ fʁɑ̃.sɛz/', 'ün kohⁿs-trük-SYOHⁿ ahⁿ-GLEZ | suh tra-DWEE | par la kohⁿs-trük-SYOHⁿ frahⁿ-SEZ',
    '« I was told to wait. » J’ai été dit d’attendre ?',
    'Impossible : en français, on ne met pas au passif la personne à qui l’on parle. On m’a dit d’attendre. De même : the person I spoke to, la personne à qui j’ai parlé.', ['phrase']),
  rule(1854, 'Ce que tu veux souligner, dis-le directement.', 'What you want to stress, say it directly.',
    '/sə kə ty vø su.li.ɲe di.lə di.ʁɛk.tə.mɑ̃/', 'suh kuh tü VEU soo-lee-NYAY | dee-LUH | dee-rek-tuh-MAHⁿ',
    '« It is important to note that registration is free. »',
    'Souvent, rien : « L’inscription est gratuite. » Si tu veux insister : « Soulignons que », « Précisons que ». « Il est important de noter que » n’est pas faux, mais il alourdit.', ['lourdeur']),
];

/* ── ACT 4 · DES EXPRESSIONS CALQUÉES (.1855-.1879) ──────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1855, 'La cérémonie aura lieu dans le grand hall.', 'The ceremony will take place in the main hall.',
    '/la se.ʁe.mɔ.ni o.ʁa ljø dɑ̃ lə ɡʁɑ̃ ol/', 'la say-ray-mo-NEE | oh-ra LYEU | dahⁿ luh grahⁿ OHL', ['avoir-lieu'], FCVDR),
  sent(1856, 'Ce que tu dis est tout à fait sensé.', 'What you are saying makes perfect sense.',
    '/sə kə ty di ɛ tu.ta.fɛ sɑ̃.se/', 'suh kuh tü DEE | eh too-ta-FEH | sahⁿ-SAY', ['sens']),
  sent(1857, 'Ce plan ne tient pas debout.', 'This plan does not make sense.',
    '/sə plɑ̃ nə tjɛ̃ pa də.bu/', 'suh PLAHⁿ | nuh tyehⁿ pa duh-BOO', ['sens'], FCVDR),
  sent(1858, 'J’ai postulé à un poste de traductrice.', 'I applied for a translator’s job.',
    '/ʒe pɔs.ty.le a œ̃ pɔst də tʁa.dyk.tʁis/', 'zhay pos-tü-LAY | a uhⁿ POST | duh tra-dük-TREESS', ['postuler'], FCVDR),
  sent(1859, 'Il a posé sa candidature à trois postes.', 'He applied for three jobs.',
    '/i.la po.ze sa kɑ̃.di.da.tyʁ a tʁwa pɔst/', 'ee-la poh-ZAY | sa kahⁿ-dee-da-TÜR | a trwa POST', ['postuler']),
  sent(1860, 'Le rapport met l’accent sur la sécurité.', 'The report puts the emphasis on safety.',
    '/lə ʁa.pɔʁ mɛ lak.sɑ̃ syʁ la se.ky.ʁi.te/', 'luh ra-POR | meh lak-SAHⁿ | sür la say-kü-ree-TAY', ['accent']),
  sent(1861, 'Après le souper, on va marcher au bord du fleuve.', 'After supper, we go for a walk along the river.',
    '/a.pʁɛ lə su.pe ɔ̃ va maʁ.ʃe o bɔʁ dy flœv/', 'a-preh luh soo-PAY | ohⁿ va mar-SHAY | oh bor dü FLUHV', ['marche', 'quebec']),
  sent(1862, 'En fin de compte, c’est le client qui décide.', 'At the end of the day, it is the client who decides.',
    '/ɑ̃ fɛ̃ də kɔ̃t sɛ lə kli.jɑ̃ ki de.sid/', 'ahⁿ FEHⁿ duh KOHⁿT | seh luh klee-YAHⁿ | kee day-SEED', ['journee'], FCVDR),
  sent(1863, 'Ce nom me dit quelque chose.', 'That name rings a bell.',
    '/sə nɔ̃ mə di kɛl.kə ʃoz/', 'suh NOHⁿ | muh dee kel-kuh SHOHZ', ['cloche'], FCVDR),
  sent(1864, 'Qui est responsable des inscriptions ?', 'Who is in charge of registrations?',
    '/ki ɛ ʁɛs.pɔ̃.sabl de.zɛ̃s.kʁip.sjɔ̃/', 'kee eh res-pohⁿ-SABL | day-zehⁿs-kreep-SYOHⁿ', ['charge', 'ecoute']),
  sent(1865, 'Le jazz, ce n’est pas ma tasse de thé.', 'Jazz is not my cup of tea.',
    '/lə dʒaz sə nɛ pa ma tas də te/', 'luh DJAZ | suh neh pa ma TASS duh TAY', ['accepte']),
  sent(1866, 'Ces recherches ont ouvert la voie à de nouveaux traitements.', 'This research paved the way for new treatments.',
    '/se ʁə.ʃɛʁʃ ɔ̃.tu.vɛʁ la vwa a də nu.vo tʁɛt.mɑ̃/', 'say ruh-SHEHRSH | ohⁿ-too-VEHR la VWA | a duh noo-voh tret-MAHⁿ', ['accepte']),
  phrase(1867, 'poser sa candidature', 'to apply (for a job)',
    '/po.ze sa kɑ̃.di.da.tyʁ/', 'poh-ZAY sa kahⁿ-dee-da-TÜR', ['postuler']),
  phrase(1868, 'mettre l’accent sur', 'to emphasise',
    '/mɛtʁ lak.sɑ̃ syʁ/', 'metr lak-SAHⁿ SÜR', ['accent']),
  rule(1869, 'Une expression se traduit par une expression, pas mot par mot.', 'An expression is translated by an expression, not word by word.',
    '/yn ɛks.pʁɛ.sjɔ̃ sə tʁa.dɥi paʁ y.nɛks.pʁɛ.sjɔ̃ pa mo paʁ mo/', 'ün eks-preh-SYOHⁿ | suh tra-DWEE | par ü-neks-preh-SYOHⁿ | pa moh par MOH',
    '« It makes sense. » Ça fait du sens ?',
    'L’Office québécois de la langue française déconseille faire du sens : dis « ça a du sens », « c’est logique », « ça tient debout ». On ne traduit pas make, on cherche l’expression française.', ['expression']),
  sent(1870, 'La formation aura lieu jeudi matin, dans la salle trois.', 'The training will take place on Thursday morning, in room three.',
    '/la fɔʁ.ma.sjɔ̃ o.ʁa ljø ʒø.di ma.tɛ̃ dɑ̃ la sal tʁwa/', 'la for-ma-SYOHⁿ | oh-ra LYEU | zheu-dee ma-TEHⁿ | dahⁿ la sal TRWA', ['ecoute']),
  sent(1871, 'C’est Julie ; elle a déjà reçu douze candidatures.', 'It is Julie; she has already received twelve applications.',
    '/sɛ ʒy.li ɛ.la de.ʒa ʁə.sy duz kɑ̃.di.da.tyʁ/', 'seh zhü-LEE | eh-la day-zha ruh-SÜ | dooz kahⁿ-dee-da-TÜR', ['ecoute']),
  sent(1872, 'Ça a du sens de commencer par les nouveaux employés.', 'It makes sense to start with the new employees.',
    '/sa a dy sɑ̃s də kɔ.mɑ̃.se paʁ le nu.vo.zɑ̃.plwa.je/', 'sa a dü SAHⁿSS | duh ko-mahⁿ-SAY | par lay noo-voh-zahⁿ-plwa-YAY', ['ecoute', 'sens']),
  sent(1873, 'Le nom du formateur ne me dit rien.', 'The trainer’s name does not ring a bell.',
    '/lə nɔ̃ dy fɔʁ.ma.tœʁ nə mə di ʁjɛ̃/', 'luh NOHⁿ dü for-ma-TUHR | nuh muh dee RYEHⁿ', ['ecoute', 'cloche']),
  sent(1874, 'On met l’accent sur la pratique, pas sur la théorie.', 'The emphasis is on practice, not on theory.',
    '/ɔ̃ mɛ lak.sɑ̃ syʁ la pʁa.tik pa syʁ la te.ɔ.ʁi/', 'ohⁿ meh lak-SAHⁿ | sür la pra-TEEK | pa sür la tay-o-REE', ['ecoute', 'accent']),
  sent(1875, 'En fin de compte, on garde le programme de l’an dernier.', 'In the end, we are keeping last year’s programme.',
    '/ɑ̃ fɛ̃ də kɔ̃t ɔ̃ ɡaʁd lə pʁɔ.ɡʁam də lɑ̃ dɛʁ.nje/', 'ahⁿ FEHⁿ duh KOHⁿT | ohⁿ gard luh pro-GRAMM | duh lahⁿ dehr-NYAY', ['ecoute', 'journee']),
  sent(1876, 'Après la réunion, qui vient faire une promenade sur le mont Royal ?', 'After the meeting, who is coming for a walk on Mount Royal?',
    '/a.pʁɛ la ʁe.y.njɔ̃ ki vjɛ̃ fɛʁ yn pʁɔm.nad syʁ lə mɔ̃ ʁwa.jal/', 'a-preh la ray-ü-NYOHⁿ | kee vyehⁿ fehr ün prom-NAD | sür luh mohⁿ rwa-YAL', ['ecoute', 'marche']),
  sent(1877, 'La direction a mis le projet en suspens.', 'Management has put the project on hold.',
    '/la di.ʁɛk.sjɔ̃ a mi lə pʁɔ.ʒɛ ɑ̃ sys.pɑ̃/', 'la dee-rek-SYOHⁿ | a MEE luh pro-ZHEH | ahⁿ süs-PAHⁿ', ['accepte']),
  sent(1878, 'Qui est chargé du dossier ?', 'Who is handling the file?',
    '/ki ɛ ʃaʁ.ʒe dy do.sje/', 'kee eh shar-ZHAY | dü do-SYAY', ['charge']),
  rule(1879, 'Certains calques sont devenus du bon français.', 'Some calques have become good French.',
    '/sɛʁ.tɛ̃ kalk sɔ̃ də.və.ny dy bɔ̃ fʁɑ̃.sɛ/', 'sehr-tehⁿ KALK | sohⁿ duh-vuh-NÜ | dü bohⁿ frahⁿ-SEH',
    '« Ce n’est pas ma tasse de thé » vient de l’anglais. Faut-il l’éviter ?',
    'Non : l’OQLF la juge acceptable dans un registre familier, et paver la voie l’est aussi. Une expression venue de l’anglais n’est pas fautive si elle est entrée dans l’usage et ne remplace pas une expression française plus juste.', ['accepte']),
];

/* ── ACT 5 · CHANGER LA CLASSE DES MOTS (.1880-.1896) ────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1880, 'Il a traversé le lac à la nage.', 'He swam across the lake.',
    '/i.la tʁa.vɛʁ.se lə lak a la naʒ/', 'ee-la tra-vehr-SAY luh LAK | a la NAZH', ['texte', 'chasse-croise'], FCVDR),
  sent(1881, 'Elle est sortie de la pièce en courant.', 'She ran out of the room.',
    '/ɛ.lɛ sɔʁ.ti də la pjɛs ɑ̃ ku.ʁɑ̃/', 'eh-leh sor-TEE | duh la PYESS | ahⁿ koo-RAHⁿ', ['chasse-croise'], FCVDR),
  sent(1882, 'Elle est entrée dans la salle sans un mot.', 'She walked into the room without a word.',
    '/ɛ.lɛ.tɑ̃.tʁe dɑ̃ la sal sɑ̃.zœ̃ mo/', 'eh-leh-tahⁿ-TRAY | dahⁿ la SAL | sahⁿ-zuhⁿ MOH', ['chasse-croise']),
  sent(1883, 'L’avion a survolé la ville avant d’atterrir.', 'The plane flew over the city before landing.',
    '/la.vjɔ̃ a syʁ.vɔ.le la vil a.vɑ̃ da.te.ʁiʁ/', 'la-VYOHⁿ a sür-vo-LAY la VEEL | a-vahⁿ da-tay-REER', ['chasse-croise']),
  sent(1884, 'Les enfants sont rentrés de l’école à pied.', 'The children walked home from school.',
    '/le.zɑ̃.fɑ̃ sɔ̃ ʁɑ̃.tʁe də le.kɔl a pje/', 'lay-zahⁿ-FAHⁿ sohⁿ rahⁿ-TRAY | duh lay-KOL | a PYAY', ['chasse-croise']),
  sent(1885, 'Dès son arrivée, il a remercié l’équipe.', 'As soon as he arrived, he thanked the team.',
    '/dɛ sɔ̃.na.ʁi.ve i.la ʁə.mɛʁ.sje le.kip/', 'deh sohⁿ-na-ree-VAY | ee-la ruh-mehr-SYAY lay-KEEP', ['texte', 'nominal'], FCVDR),
  sent(1886, 'Avec un peu de chance, il fera beau samedi.', 'Hopefully, the weather will be fine on Saturday.',
    '/a.vɛ.kœ̃ pø də ʃɑ̃s il fə.ʁa bo sam.di/', 'a-vek-uhⁿ peu duh SHAHⁿSS | eel fuh-ra BOH sam-DEE', ['adverbe']),
  sent(1887, 'On espère que le pont rouvrira avant l’hiver.', 'Hopefully, the bridge will reopen before winter.',
    '/ɔ̃.nɛs.pɛʁ kə lə pɔ̃ ʁu.vʁi.ʁa a.vɑ̃ li.vɛʁ/', 'ohⁿ-nes-PEHR | kuh luh POHⁿ roo-vree-RA | a-vahⁿ lee-VEHR', ['adverbe'], FCVDR),
  sent(1888, 'J’ai failli abandonner.', 'I nearly gave up.',
    '/ʒe fa.ji a.bɑ̃.dɔ.ne/', 'zhay fa-YEE | a-bahⁿ-do-NAY', ['texte', 'adverbe'], FCVDR),
  sent(1889, 'À sa grande surprise, les dons continuent d’arriver.', 'To his great surprise, the donations keep coming in.',
    '/a sa ɡʁɑ̃d syʁ.pʁiz le dɔ̃ kɔ̃.ti.ny da.ʁi.ve/', 'a sa grahⁿd sür-PREEZ | lay DOHⁿ | kohⁿ-tee-nü da-ree-VAY', ['texte']),
  sent(1890, 'Mon voisin fume beaucoup trop.', 'My neighbour is far too heavy a smoker.',
    '/mɔ̃ vwa.zɛ̃ fym bo.ku tʁo/', 'mohⁿ vwa-ZEHⁿ | füm boh-koo TROH', ['nom-verbe']),
  sent(1891, 'Elle dort mal depuis des semaines.', 'She has been a poor sleeper for weeks.',
    '/ɛl dɔʁ mal də.pɥi de sə.mɛn/', 'el dor MAL | duh-pwee day suh-MENN', ['nom-verbe']),
  sent(1892, 'Dès réception du formulaire, nous traiterons votre demande.', 'As soon as we receive the form, we will process your request.',
    '/dɛ ʁe.sɛp.sjɔ̃ dy fɔʁ.my.lɛʁ nu tʁɛ.tə.ʁɔ̃ vɔtʁ də.mɑ̃d/', 'deh ray-sep-SYOHⁿ dü for-mü-LEHR | noo treh-tuh-ROHⁿ | votr duh-MAHⁿD', ['nominal'], FCVDR),
  sent(1893, 'Après la rénovation, la salle pourra accueillir deux cents personnes.', 'Once it has been renovated, the hall will hold two hundred people.',
    '/a.pʁɛ la ʁe.nɔ.va.sjɔ̃ la sal pu.ʁa a.kœ.jiʁ dø sɑ̃ pɛʁ.sɔn/', 'a-preh la ray-no-va-SYOHⁿ | la SAL poo-RA | a-kuh-YEER | deu sahⁿ pehr-SONN', ['nominal']),
  phrase(1894, 'traverser à la nage', 'to swim across',
    '/tʁa.vɛʁ.se a la naʒ/', 'tra-vehr-SAY | a la NAZH', ['chasse-croise']),
  rule(1895, 'L’anglais met la manière dans le verbe ; le français y met la direction.', 'English puts the manner in the verb; French puts the direction there.',
    '/lɑ̃.ɡlɛ mɛ la ma.njɛʁ dɑ̃ lə vɛʁb lə fʁɑ̃.sɛ i mɛ la di.ʁɛk.sjɔ̃/', 'lahⁿ-GLEH meh la ma-NYEHR | dahⁿ luh VEHRB | luh frahⁿ-SEH ee MEH | la dee-rek-SYOHⁿ',
    '« He swam across the river. » Il a nagé à travers la rivière ?',
    'Non : il a traversé la rivière à la nage. Le verbe dit où il va (traverser), le complément dit comment (à la nage). C’est une transposition, un chassé-croisé.', ['chasse-croise']),
  rule(1896, 'Quand un mot ne passe pas, change sa classe.', 'When a word does not carry over, change its class.',
    '/kɑ̃.tœ̃ mo nə pas pa ʃɑ̃ʒ sa klas/', 'kahⁿ-tuhⁿ MOH | nuh pass PA | shahⁿzh sa KLASS',
    '« Hopefully, the bridge will reopen. » Quel adverbe français ?',
    'Aucun ne va : on passe par un verbe (on espère que le pont rouvrira) ou par une locution (avec un peu de chance). De même, nearly devient un verbe : j’ai failli.', ['adverbe']),
];

/* ── ACT 6 · CHANGER DE POINT DE VUE (.1897-.1914) ───────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1897, 'On aperçoit assez souvent des bélugas depuis le quai.', 'It is not uncommon to spot belugas from the quay.',
    '/ɔ̃.na.pɛʁ.swa a.se su.vɑ̃ de be.ly.ɡa də.pɥi lə ke/', 'ohⁿ-na-pehr-SWA | a-say soo-VAHⁿ | day bay-lü-GA | duh-pwee luh KAY', ['texte', 'modulation'], FCVDR),
  sent(1898, 'C’est assez fréquent en hiver.', 'It is not uncommon in winter.',
    '/sɛ.ta.se fʁe.kɑ̃ ɑ̃.ni.vɛʁ/', 'seh-ta-say fray-KAHⁿ | ahⁿ-nee-VEHR', ['modulation']),
  sent(1899, 'Il n’est pas rare de croiser des renards dans ce parc.', 'It is not unusual to come across foxes in this park.',
    '/il nɛ pa ʁaʁ də kʁwa.ze de ʁə.naʁ dɑ̃ sə paʁk/', 'eel neh pa RAR | duh krwa-ZAY day ruh-NAR | dahⁿ suh PARK', ['modulation', 'juste']),
  sent(1900, 'Il est facile de comprendre pourquoi.', 'It is not hard to see why.',
    '/i.lɛ fa.sil də kɔ̃.pʁɑ̃dʁ puʁ.kwa/', 'ee-leh fa-SEEL | duh kohⁿ-PRAHⁿDR | poor-KWA', ['modulation']),
  sent(1901, 'On vous demande au téléphone.', 'You are wanted on the phone.',
    '/ɔ̃ vu də.mɑ̃d o te.le.fɔn/', 'ohⁿ voo duh-MAHⁿD | oh tay-lay-FONN', ['modulation'], FCVDR),
  sent(1902, 'À conserver au réfrigérateur après ouverture.', 'Keep refrigerated after opening.',
    '/a kɔ̃.sɛʁ.ve o ʁe.fʁi.ʒe.ʁa.tœʁ a.pʁɛ.zu.vɛʁ.tyʁ/', 'a kohⁿ-sehr-VAY | oh ray-free-zhay-ra-TUHR | a-preh-zoo-vehr-TÜR', ['equivalence', 'panneau']),
  sent(1903, 'Défense de fumer.', 'No smoking.',
    '/de.fɑ̃s də fy.me/', 'day-FAHⁿSS | duh fü-MAY', ['equivalence', 'panneau'], FCVDR),
  sent(1904, 'Peinture fraîche.', 'Wet paint.',
    '/pɛ̃.tyʁ fʁɛʃ/', 'pehⁿ-TÜR FRESH', ['modulation', 'panneau'], FCVDR),
  sent(1905, 'L’ascenseur est hors service.', 'The lift is out of order.',
    '/la.sɑ̃.sœʁ ɛ ɔʁ sɛʁ.vis/', 'la-sahⁿ-SUHR | eh or sehr-VEESS', ['equivalence', 'panneau']),
  sent(1906, 'Réservé au personnel.', 'Staff only.',
    '/ʁe.zɛʁ.ve o pɛʁ.sɔ.nɛl/', 'ray-zehr-VAY | oh pehr-so-NEL', ['equivalence', 'panneau'], FCVDR),
  sent(1907, 'Attention à la marche.', 'Mind the step.',
    '/a.tɑ̃.sjɔ̃ a la maʁʃ/', 'a-tahⁿ-SYOHⁿ | a la MARSH', ['modulation', 'panneau']),
  sent(1908, 'Le spectacle affiche complet.', 'The show is sold out.',
    '/lə spɛk.takl a.fiʃ kɔ̃.plɛ/', 'luh spek-TAKL | a-FEESH kohⁿ-PLEH', ['equivalence']),
  sent(1909, 'Merci de ne pas nourrir les oiseaux.', 'Please do not feed the birds.',
    '/mɛʁ.si də nə pa nu.ʁiʁ le.zwa.zo/', 'mehr-SEE | duh nuh pa noo-REER | lay-zwa-ZOH', ['texte', 'panneau', 'ton']),
  sent(1910, 'Je ne t’en veux pas.', 'I do not blame you.',
    '/ʒə nə tɑ̃ vø pa/', 'zhuh nuh tahⁿ VEU PA', ['modulation']),
  sent(1911, 'Plongeon interdit.', 'No diving.',
    '/plɔ̃.ʒɔ̃ ɛ̃.tɛʁ.di/', 'plohⁿ-ZHOHⁿ | ehⁿ-tehr-DEE', ['equivalence', 'panneau']),
  phrase(1912, 'changer de point de vue', 'to change viewpoint',
    '/ʃɑ̃.ʒe də pwɛ̃ də vy/', 'shahⁿ-ZHAY | duh pwehⁿ duh VÜ', ['modulation']),
  rule(1913, 'Quand les mots ne passent pas, regarde la chose d’un autre côté.', 'When the words do not carry over, look at the thing from another side.',
    '/kɑ̃ le mo nə pas pa ʁə.ɡaʁd la ʃoz dœ̃.no.tʁə ko.te/', 'kahⁿ lay MOH | nuh pass PA | ruh-gard la SHOHZ | duhⁿ-noh-truh ko-TAY',
    '« Wet paint. » Peinture mouillée ?',
    'Non : le français voit la peinture comme fraîche, pas comme mouillée. Même chose : it’s not uncommon, c’est assez fréquent. Changer de point de vue, c’est une modulation.', ['modulation']),
  rule(1914, 'Un panneau se remplace par celui que les francophones lisent déjà.', 'A sign is replaced by the one French speakers already read.',
    '/œ̃ pa.no sə ʁɑ̃.plas paʁ sə.lɥi kə le fʁɑ̃.kɔ.fɔn liz de.ʒa/', 'uhⁿ pa-NOH | suh rahⁿ-PLASS | par suh-LWEE | kuh lay frahⁿ-ko-FONN | leez day-ZHA',
    '« No smoking. » Pas de fumer ?',
    'Non : défense de fumer, ou interdit de fumer. On ne traduit pas un panneau, on met celui qui existe déjà en français : c’est une équivalence.', ['equivalence']),
];

/* ── ACT 7 · ÉTOFFER (.1915-.1933) ───────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1915, 'Prenez le sentier qui longe la rivière.', 'Take the path along the river.',
    '/pʁə.ne lə sɑ̃.tje ki lɔ̃ʒ la ʁi.vjɛʁ/', 'pruh-NAY luh sahⁿ-TYAY | kee LOHⁿZH la ree-VYEHR', ['texte', 'preposition'], FCVDR),
  sent(1916, 'La passerelle qui enjambe la rivière est fermée pour l’hiver.', 'The footbridge over the river is closed for the winter.',
    '/la pas.ʁɛl ki ɑ̃.ʒɑ̃b la ʁi.vjɛʁ ɛ fɛʁ.me puʁ li.vɛʁ/', 'la pass-REL | kee ahⁿ-ZHAHⁿB la ree-VYEHR | eh fehr-MAY poor lee-VEHR', ['preposition']),
  sent(1917, 'Le sentier qui traverse la forêt est plus court.', 'The path through the forest is shorter.',
    '/lə sɑ̃.tje ki tʁa.vɛʁs la fɔ.ʁɛ ɛ ply kuʁ/', 'luh sahⁿ-TYAY | kee tra-VEHRS la fo-REH | eh plü KOOR', ['texte', 'preposition'], FCVDR),
  sent(1918, 'Les navettes à destination du village partent toutes les heures.', 'The shuttles to the village leave every hour.',
    '/le na.vɛt a dɛs.ti.na.sjɔ̃ dy vi.laʒ paʁt tut le.zœʁ/', 'lay na-VET | a des-tee-na-SYOHⁿ dü vee-LAZH | PART | toot lay-ZUHR', ['texte', 'preposition']),
  sent(1919, 'Le train en provenance de Québec a vingt minutes de retard.', 'The train from Québec City is twenty minutes late.',
    '/lə tʁɛ̃ ɑ̃ pʁɔv.nɑ̃s də ke.bɛk a vɛ̃ mi.nyt də ʁə.taʁ/', 'luh TREHⁿ | ahⁿ prov-NAHⁿSS duh kay-BEK | a vehⁿ mee-NÜT | duh ruh-TAR', ['preposition']),
  sent(1920, 'Inscris-toi avant vendredi.', 'Sign up before Friday.',
    '/ɛ̃s.kʁi.twa a.vɑ̃ vɑ̃.dʁə.di/', 'ehⁿs-kree-TWA | a-vahⁿ vahⁿ-druh-DEE', ['particule'], FCVDR),
  sent(1921, 'La randonnée guidée est reportée au 18 juin.', 'The guided hike has been put off until 18 June.',
    '/la ʁɑ̃.dɔ.ne ɡi.de ɛ ʁə.pɔʁ.te o di.zɥit ʒɥɛ̃/', 'la rahⁿ-do-NAY gee-DAY | eh ruh-por-TAY | oh dee-zweet ZHWEHⁿ', ['texte', 'particule']),
  sent(1922, 'Si le temps se gâte, revenez sur vos pas.', 'If the weather turns bad, turn back.',
    '/si lə tɑ̃ sə ɡat ʁə.və.ne syʁ vo pa/', 'see luh TAHⁿ suh GAHT | ruh-vuh-NAY sür voh PA', ['texte', 'particule']),
  sent(1923, 'J’ai appris la nouvelle ce matin.', 'I found out the news this morning.',
    '/ʒe a.pʁi la nu.vɛl sə ma.tɛ̃/', 'zhay a-PREE la noo-VEL | suh ma-TEHⁿ', ['particule']),
  sent(1924, 'Continuez tout droit jusqu’au pont.', 'Carry on straight ahead to the bridge.',
    '/kɔ̃.ti.nɥe tu dʁwa ʒys.ko pɔ̃/', 'kohⁿ-tee-NWAY | too DRWA | zhüs-koh POHⁿ', ['particule']),
  sent(1925, 'Déposez vos dons à l’accueil.', 'Drop off your donations at reception.',
    '/de.po.ze vo dɔ̃ a la.kœj/', 'day-poh-ZAY voh DOHⁿ | a la-KUHY', ['texte', 'particule'], FCVDR),
  sent(1926, 'Elle a refusé l’offre de la banque.', 'She turned down the bank’s offer.',
    '/ɛ.la ʁə.fy.ze lɔfʁ də la bɑ̃k/', 'eh-la ruh-fü-ZAY | LOFR duh la BAHⁿK', ['particule']),
  sent(1927, 'Baisse le son, s’il te plaît.', 'Turn the sound down, please.',
    '/bɛs lə sɔ̃ sil tə plɛ/', 'bess luh SOHⁿ | seel tuh PLEH', ['particule']),
  sent(1928, 'Il a abandonné ses études à vingt ans.', 'He dropped out of his studies at twenty.',
    '/i.la a.bɑ̃.dɔ.ne se.ze.tyd a vɛ̃.tɑ̃/', 'ee-la a-bahⁿ-do-NAY | say-zay-TÜD | a vehⁿ-TAHⁿ', ['particule']),
  sent(1929, 'Nous nous chargerons de retrouver son propriétaire.', 'We will take care of finding its owner.',
    '/nu nu ʃaʁ.ʒə.ʁɔ̃ də ʁə.tʁu.ve sɔ̃ pʁɔ.pʁi.je.tɛʁ/', 'noo noo shar-zhuh-ROHⁿ | duh ruh-troo-VAY | sohⁿ pro-pree-yay-TEHR', ['texte', 'particule']),
  phrase(1930, 'à destination de', 'bound for, to',
    '/a dɛs.ti.na.sjɔ̃ də/', 'a des-tee-na-SYOHⁿ DUH', ['preposition']),
  phrase(1931, 'en provenance de', 'coming from',
    '/ɑ̃ pʁɔv.nɑ̃s də/', 'ahⁿ prov-NAHⁿSS DUH', ['preposition']),
  rule(1932, 'Un verbe à particule se traduit par un verbe choisi pour son sens.', 'A phrasal verb is translated by a verb chosen for its meaning.',
    '/œ̃ vɛʁb a paʁ.ti.kyl sə tʁa.dɥi paʁ œ̃ vɛʁb ʃwa.zi puʁ sɔ̃ sɑ̃s/', 'uhⁿ VEHRB a par-tee-KÜL | suh tra-DWEE | par uhⁿ VEHRB shwa-ZEE | poor sohⁿ SAHⁿSS',
    '« She turned down the offer. » « Turn down the music. » Même verbe français ?',
    'Non : elle a refusé l’offre ; baisse la musique. Ne traduis jamais la particule seule : demande-toi ce que fait le verbe entier, puis prends le verbe français qui le fait.', ['particule']),
  rule(1933, 'Là où l’anglais met une préposition, le français ajoute souvent un verbe.', 'Where English puts a preposition, French often adds a verb.',
    '/la u lɑ̃.ɡlɛ mɛ yn pʁe.pɔ.zi.sjɔ̃ lə fʁɑ̃.sɛ a.ʒut su.vɑ̃ œ̃ vɛʁb/', 'la oo lahⁿ-GLEH MEH | ün pray-po-zee-SYOHⁿ | luh frahⁿ-SEH a-ZHOOT | soo-vahⁿ uhⁿ VEHRB',
    '« The path through the forest. » Le sentier à travers la forêt ?',
    'Plus naturel : le sentier qui traverse la forêt. Le français étoffe la préposition avec un verbe : le pont qui enjambe, la route qui longe, les vols à destination de.', ['preposition']),
];

/* ── ACT 8 · LES FORMES EN -ING (.1934-.1950) ────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1934, 'Je suis en train de répondre à un client.', 'I am answering a client right now.',
    '/ʒə sɥi.zɑ̃ tʁɛ̃ də ʁe.pɔ̃dʁ a œ̃ kli.jɑ̃/', 'zhuh swee-zahⁿ TREHⁿ | duh ray-POHⁿDR | a uhⁿ klee-YAHⁿ', ['present'], FCVDR),
  sent(1935, 'Je conduis, je te rappelle plus tard.', 'I am driving, I will call you back later.',
    '/ʒə kɔ̃.dɥi ʒə tə ʁa.pɛl ply taʁ/', 'zhuh kohⁿ-DWEE | zhuh tuh ra-PEL | plü TAR', ['present']),
  sent(1936, 'Merci de vous être inscrits comme bénévoles.', 'Thank you for signing up as volunteers.',
    '/mɛʁ.si də vu.zɛtʁ ɛ̃s.kʁi kɔm be.ne.vɔl/', 'mehr-SEE | duh voo-ZETR ehⁿs-KREE | kom bay-nay-VOL', ['texte', 'merci'], FCVDR),
  sent(1937, 'Nous avons hâte de travailler avec vous.', 'We look forward to working with you.',
    '/nu.za.vɔ̃ at də tʁa.va.je a.vɛk vu/', 'noo-za-vohⁿ AHT | duh tra-va-YAY | a-vek VOO', ['texte', 'hate'], FCVDR),
  sent(1938, 'Les bénévoles qui portent un gilet orange sont là pour vous aider.', 'The volunteers wearing an orange vest are there to help you.',
    '/le be.ne.vɔl ki pɔʁ.tœ̃ ʒi.lɛ.tɔ.ʁɑ̃ʒ sɔ̃ la puʁ vu.ze.de/', 'lay bay-nay-VOL | kee por-tuhⁿ zhee-leh-to-RAHⁿZH | sohⁿ LA | poor voo-zay-DAY', ['texte', 'relative']),
  sent(1939, 'La femme assise à l’accueil est la responsable.', 'The woman sitting at reception is the person in charge.',
    '/la fam a.siz a la.kœj ɛ la ʁɛs.pɔ̃.sabl/', 'la FAMM a-SEEZ | a la-KUHY | eh la res-pohⁿ-SABL', ['posture'], FCVDR),
  sent(1940, 'Je l’ai vue partir vers huit heures.', 'I saw her leaving at around eight.',
    '/ʒə le vy paʁ.tiʁ vɛʁ ɥi.tœʁ/', 'zhuh lay VÜ par-TEER | vehr wee-TUHR', ['perception']),
  sent(1941, 'La salle d’attente est au rez-de-chaussée.', 'The waiting room is on the ground floor.',
    '/la sal da.tɑ̃t ɛ.to ʁe.də.ʃo.se/', 'la sal da-TAHⁿT | eh-toh ray-duh-shoh-SAY', ['nom']),
  sent(1942, 'Si vous avez l’habitude de travailler avec le public, dites-le-nous.', 'If you are used to working with the public, let us know.',
    '/si vu.za.ve la.bi.tyd də tʁa.va.je a.vɛk lə py.blik dit.lə.nu/', 'see voo-za-VAY la-bee-TÜD | duh tra-va-YAY a-vek luh pü-BLEEK | deet-luh-NOO', ['texte', 'habitude']),
  sent(1943, 'Être bénévole, c’est rejoindre une équipe de trois cents personnes.', 'Being a volunteer means joining a team of three hundred people.',
    '/ɛtʁ be.ne.vɔl sɛ ʁə.ʒwɛ̃dʁ y.ne.kip də tʁwa sɑ̃ pɛʁ.sɔn/', 'etr bay-nay-VOL | seh ruh-ZHWEHⁿDR | ü-nay-KEEP | duh trwa sahⁿ pehr-SONN', ['texte', 'sujet'], FCVDR),
  sent(1944, 'Avant d’arriver, lisez la fiche de votre poste.', 'Before arriving, read your job sheet.',
    '/a.vɑ̃ da.ʁi.ve li.ze la fiʃ də vɔtʁ pɔst/', 'a-vahⁿ da-ree-VAY | lee-ZAY la FEESH | duh votr POST', ['texte', 'infinitif']),
  sent(1945, 'En arrivant, présentez-vous au kiosque des bénévoles.', 'When you arrive, report to the volunteer booth.',
    '/ɑ̃.na.ʁi.vɑ̃ pʁe.zɑ̃.te.vu o kjɔsk de be.ne.vɔl/', 'ahⁿ-na-ree-VAHⁿ | pray-zahⁿ-tay-VOO | oh KYOSK day bay-nay-VOL', ['texte', 'gerondif']),
  sent(1946, 'Stationnement interdit devant la salle principale.', 'No parking in front of the main hall.',
    '/sta.sjɔn.mɑ̃ ɛ̃.tɛʁ.di də.vɑ̃ la sal pʁɛ̃.si.pal/', 'sta-syonn-MAHⁿ ehⁿ-tehr-DEE | duh-vahⁿ la sal prehⁿ-see-PAL', ['texte', 'panneau', 'nom']),
  sent(1947, 'Elle est allongée sur le canapé depuis midi.', 'She has been lying on the sofa since noon.',
    '/ɛ.lɛ.ta.lɔ̃.ʒe syʁ lə ka.na.pe də.pɥi mi.di/', 'eh-leh-ta-lohⁿ-ZHAY | sür luh ka-na-PAY | duh-pwee mee-DEE', ['posture']),
  phrase(1948, 'être en train de', 'to be in the middle of (doing)',
    '/ɛtʁ ɑ̃ tʁɛ̃ də/', 'etr ahⁿ TREHⁿ DUH', ['present']),
  sent(1949, 'Je l’entends chanter tous les matins.', 'I hear her singing every morning.',
    '/ʒə lɑ̃.tɑ̃ ʃɑ̃.te tu le ma.tɛ̃/', 'zhuh lahⁿ-TAHⁿ | shahⁿ-TAY | too lay ma-TEHⁿ', ['perception']),
  rule(1950, 'Un -ing anglais n’a pas une traduction française : il en a plusieurs.', 'An English -ing has not one French translation but several.',
    '/œ̃ iŋ ɑ̃.ɡlɛ na pa yn tʁa.dyk.sjɔ̃ fʁɑ̃.sɛz i.lɑ̃.na ply.zjœʁ/', 'uhⁿ EENG ahⁿ-GLEH | na pa ün tra-dük-SYOHⁿ frahⁿ-SEZ | ee-lahⁿ-na plü-ZYUHR',
    '« Thank you for coming. » « Being a volunteer… » « The woman sitting there… »',
    'Merci d’être venus ; être bénévole, c’est… ; la femme assise là. Demande-toi ce que fait le -ing : une action en cours, un sujet, un moyen, une posture, un nom. Puis choisis la forme française.', ['ing']),
];

/* ── ACT 9 · LES PETITS MOTS (.1951-.1967) ───────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1951, 'La vie de bureau fatigue le corps.', 'Office life tires the body.',
    '/la vi də by.ʁo fa.tiɡ lə kɔʁ/', 'la VEE duh bü-ROH | fa-TEEG luh KOR', ['texte', 'article'], FCVDR),
  sent(1952, 'Les enfants ne restent jamais assis longtemps.', 'Children never stay seated for long.',
    '/le.zɑ̃.fɑ̃ nə ʁɛst ʒa.mɛ a.si lɔ̃.tɑ̃/', 'lay-zahⁿ-FAHⁿ | nuh rest zha-MEH a-SEE | lohⁿ-TAHⁿ', ['texte', 'article']),
  sent(1953, 'La santé commence par de petites habitudes.', 'Health starts with small habits.',
    '/la sɑ̃.te kɔ.mɑ̃s paʁ də pə.ti.za.bi.tyd/', 'la sahⁿ-TAY ko-MAHⁿSS | par duh puh-tee-za-bee-TÜD', ['texte', 'article'], FCVDR),
  sent(1954, 'Le café ne compte pas.', 'Coffee does not count.',
    '/lə ka.fe nə kɔ̃t pa/', 'luh ka-FAY | nuh KOHⁿT PA', ['texte', 'article']),
  sent(1955, 'Tournez lentement la tête à droite.', 'Slowly turn your head to the right.',
    '/tuʁ.ne lɑ̃t.mɑ̃ la tɛt a dʁwat/', 'toor-NAY lahⁿt-MAHⁿ | la TET a DRWAT', ['texte', 'corps']),
  sent(1956, 'Levez les bras au-dessus de la tête.', 'Raise your arms above your head.',
    '/lə.ve le bʁa o.də.sy də la tɛt/', 'luh-VAY lay BRA | oh-duh-SÜ duh la TET', ['texte', 'corps'], FCVDR),
  sent(1957, 'Je me suis foulé la cheville en descendant l’escalier.', 'I sprained my ankle coming down the stairs.',
    '/ʒə mə sɥi fu.le la ʃə.vij ɑ̃ de.sɑ̃.dɑ̃ lɛs.ka.lje/', 'zhuh muh swee foo-LAY la shuh-VEEY | ahⁿ day-sahⁿ-DAHⁿ | les-ka-LYAY', ['corps'], FCVDR),
  sent(1958, 'Elle s’est coupé le doigt en ouvrant la boîte.', 'She cut her finger opening the box.',
    '/ɛl sɛ ku.pe lə dwa ɑ̃.nu.vʁɑ̃ la bwat/', 'el seh koo-PAY luh DWA | ahⁿ-noo-vrahⁿ la BWAT', ['corps']),
  sent(1959, 'J’ai mal au dos depuis lundi.', 'My back has been hurting since Monday.',
    '/ʒe mal o do də.pɥi lœ̃.di/', 'zhay MAL oh DOH | duh-pwee luhⁿ-DEE', ['corps']),
  sent(1960, 'Il a haussé les épaules sans répondre.', 'He shrugged his shoulders without answering.',
    '/i.la o.se le.ze.pol sɑ̃ ʁe.pɔ̃dʁ/', 'ee-la oh-SAY lay-zay-POHL | sahⁿ ray-POHⁿDR', ['corps']),
  sent(1961, 'On ne peut pas stationner ici après dix-huit heures.', 'You cannot park here after six p.m.',
    '/ɔ̃ nə pø pa sta.sjɔ.ne i.si a.pʁɛ di.zɥi.tœʁ/', 'ohⁿ nuh PEU pa | sta-syo-NAY ee-SEE | a-preh dee-zwee-TUHR', ['on'], FCVDR),
  sent(1962, 'Si on veut progresser, il faut pratiquer tous les jours.', 'If you want to improve, you have to practise every day.',
    '/si ɔ̃ vø pʁɔ.ɡʁɛ.se il fo pʁa.ti.ke tu le ʒuʁ/', 'see ohⁿ VEU pro-greh-SAY | eel FOH pra-tee-KAY | too lay ZHOOR', ['on']),
  sent(1963, 'On repose ses yeux en regardant au loin.', 'You rest your eyes by looking into the distance.',
    '/ɔ̃ ʁə.poz se.zjø ɑ̃ ʁə.ɡaʁ.dɑ̃ o lwɛ̃/', 'ohⁿ ruh-POHZ say-ZYEU | ahⁿ ruh-gar-DAHⁿ oh LWEHⁿ', ['texte', 'on', 'corps']),
  sent(1964, 'J’aime le thé, mais le café me réveille mieux.', 'I like tea, but coffee wakes me up better.',
    '/ʒɛm lə te mɛ lə ka.fe mə ʁe.vɛj mjø/', 'zhem luh TAY | meh luh ka-FAY | muh ray-vey MYEU', ['article']),
  rule(1965, 'Devant une partie du corps, l’article suffit quand on sait à qui elle est.', 'Before a part of the body, the article is enough when it is clear whose it is.',
    '/də.vɑ̃.tyn paʁ.ti dy kɔʁ laʁ.tikl sy.fi kɑ̃.tɔ̃ sɛ a ki ɛ.lɛ/', 'duh-vahⁿ-tün par-TEE dü KOR | lar-TEEKL sü-FEE | kahⁿ-tohⁿ SEH | a KEE eh-LEH',
    '« I broke my arm. » « Raise your hand. »',
    'Je me suis cassé le bras ; levez la main. Le pronom (me) ou la situation dit déjà à qui est le bras : le français ne répète pas le possessif.', ['corps']),
  rule(1966, 'Un nom pris dans un sens général garde son article.', 'A noun used in a general sense keeps its article.',
    '/œ̃ nɔ̃ pʁi dɑ̃.zœ̃ sɑ̃s ʒe.ne.ʁal ɡaʁd sɔ̃.naʁ.tikl/', 'uhⁿ NOHⁿ PREE | dahⁿ-zuhⁿ sahⁿss zhay-nay-RAL | gard sohⁿ-nar-TEEKL',
    '« Life is short. » « Children need sleep. »',
    'La vie est courte ; les enfants ont besoin de sommeil. L’anglais enlève l’article pour parler en général, le français le garde : le, la, les.', ['article']),
  rule(1967, 'Le you qui parle de tout le monde se dit on.', 'The you that means everyone becomes on.',
    '/lə ju ki paʁl də tu lə mɔ̃d sə di ɔ̃/', 'luh YOO kee PARL | duh too luh MOHⁿD | suh dee OHⁿ',
    '« You never know. » Tu ne sais jamais ?',
    'On ne sait jamais. Quand you vise tout le monde, le français dit on, ou il faut, ou un infinitif. Tu ou vous ne restent que si tu parles à quelqu’un de précis.', ['on']),
];

/* ── ACT 10 · CHIFFRES, GUILLEMETS ET ESPACES (.1968-.1979) ──────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1968, 'Le festival a accueilli 48 500 visiteurs.', 'The festival welcomed 48,500 visitors.',
    '/lə fɛs.ti.val a a.kœ.ji ka.ʁɑ̃t.ɥi mil sɛ̃ sɑ̃ vi.zi.tœʁ/', 'luh fes-tee-VAL | a a-kuh-YEE | ka-rahⁿt-WEE meel sehⁿ SAHⁿ | vee-zee-TUHR', ['texte', 'nombre']),
  sent(1969, 'La fréquentation a augmenté de 12,5 %.', 'Attendance rose by 12.5%.',
    '/la fʁe.kɑ̃.ta.sjɔ̃ a oɡ.mɑ̃.te də duz viʁ.ɡyl sɛ̃k puʁ sɑ̃/', 'la fray-kahⁿ-ta-SYOHⁿ | a og-mahⁿ-TAY | duh DOOZ veer-GÜL SEHⁿK | poor SAHⁿ', ['texte', 'nombre']),
  sent(1970, 'Le billet coûtait en moyenne 27,50 $.', 'The ticket cost $27.50 on average.',
    '/lə bi.jɛ ku.tɛ ɑ̃ mwa.jɛn vɛ̃t.sɛt dɔ.laʁ sɛ̃.kɑ̃t/', 'luh bee-YEH koo-TEH | ahⁿ mwa-YENN | vehⁿt-SET do-LAR sehⁿ-KAHⁿT', ['texte', 'nombre']),
  sent(1971, 'Le spectacle de clôture a commencé à 20 h 30.', 'The closing show started at 8:30 p.m.',
    '/lə spɛk.takl də klo.tyʁ a kɔ.mɑ̃.se a vɛ̃.tœʁ tʁɑ̃t/', 'luh spek-TAKL duh kloh-TÜR | a ko-mahⁿ-SAY | a vehⁿ-TUHR TRAHⁿT', ['texte', 'heure'], FCVDR),
  sent(1972, 'La 7e édition aura lieu en août 2027.', 'The 7th edition will take place in August 2027.',
    '/la sɛ.tjɛ.me.di.sjɔ̃ o.ʁa ljø ɑ̃.nu dø mil vɛ̃t.sɛt/', 'la seh-tyem ay-dee-SYOHⁿ | oh-ra LYEU | ahⁿ-NOO | deu meel vehⁿt-SET', ['texte', 'date']),
  sent(1973, '« Nous n’espérions pas un tel succès », a déclaré la directrice.', '“We did not expect such success,” the director said.',
    '/nu nɛs.pe.ʁjɔ̃ pa œ̃ tɛl syk.sɛ a de.kla.ʁe la di.ʁɛk.tʁis/', 'noo nes-pay-RYOHⁿ pa | uhⁿ tel sük-SEH | a day-kla-RAY | la dee-rek-TREESS', ['texte', 'guillemets'], FCVDR),
  sent(1974, 'Le budget atteignait 3,2 millions de dollars.', 'The budget reached 3.2 million dollars.',
    '/lə by.dʒɛ a.tɛ.ɲɛ tʁwa viʁ.ɡyl dø mi.ljɔ̃ də dɔ.laʁ/', 'luh bü-DJEH a-teh-NYEH | TRWA veer-GÜL DEU | mee-LYOHⁿ duh do-LAR', ['texte', 'nombre']),
  sent(1975, 'En français, les jours et les mois s’écrivent avec une minuscule.', 'In French, days and months are written with a small letter.',
    '/ɑ̃ fʁɑ̃.sɛ le ʒuʁ e le mwa se.kʁiv a.vɛ.ky.nə mi.nys.kyl/', 'ahⁿ frahⁿ-SEH | lay ZHOOR ay lay MWA | say-KREEV | a-vek-ü-nuh mee-nüs-KÜL', ['date']),
  sent(1976, 'Le prix est de 9,99 $, taxes en sus.', 'The price is $9.99 plus tax.',
    '/lə pʁi ɛ də nœf dɔ.laʁ katʁ.vɛ̃.diz.nœf tak.sɑ̃ sys/', 'luh PREE eh duh NUHF do-LAR | katr-vehⁿ-deez-NUHF | tak-sahⁿ SÜSS', ['nombre', 'quebec']),
  phrase(1977, 'les guillemets français', 'French quotation marks',
    '/le ɡij.mɛ fʁɑ̃.sɛ/', 'lay geey-MEH frahⁿ-SEH', ['guillemets']),
  rule(1978, 'La virgule sépare les décimales ; l’espace sépare les milliers.', 'The comma marks the decimals; the space separates the thousands.',
    '/la viʁ.ɡyl se.paʁ le de.si.mal le.spas se.paʁ le mi.lje/', 'la veer-GÜL say-PAR lay day-see-MAL | les-PASS say-PAR lay mee-LYAY',
    '« 1,500.75 dollars » : comment l’écris-tu en français ?',
    '1 500,75 $. La virgule anglaise des milliers devient une espace, et le point des décimales devient une virgule. Le symbole de la monnaie se met après le nombre.', ['nombre']),
  rule(1979, 'Devant les deux-points, le français met toujours une espace.', 'Before a colon, French always puts a space.',
    '/də.vɑ̃ le dø pwɛ̃ lə fʁɑ̃.sɛ mɛ tu.ʒuʁ y.nɛs.pas/', 'duh-vahⁿ lay deu PWEHⁿ | luh frahⁿ-SEH meh too-ZHOOR | ü-nes-PASS',
    '« Opening hours: 9 to 5 » : faut-il une espace avant les deux-points ?',
    'Oui, partout : Heures d’ouverture : de 9 h à 17 h. Devant le point-virgule, le point d’interrogation et le point d’exclamation, la France met une espace fine ; au Québec, l’OQLF la recommande aussi, ou aucune espace si le logiciel n’en a pas.', ['typo']),
];

/* ── ACT 11 · QUAND LE MOT À MOT SUFFIT (.1980-.1990) ────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1980, 'Je suis d’accord avec vous.', 'I agree with you.',
    '/ʒə sɥi da.kɔʁ a.vɛk vu/', 'zhuh swee da-KOR | a-vek VOO', ['juste', 'texte'], FCVDR),
  sent(1981, 'Les visiteurs ne supportaient plus la chaleur de la salle.', 'Visitors could no longer bear the heat of the room.',
    '/le vi.zi.tœʁ nə sy.pɔʁ.tɛ ply la ʃa.lœʁ də la sal/', 'lay vee-zee-TUHR | nuh sü-por-TEH PLÜ | la sha-LUHR duh la SAL', ['juste', 'texte']),
  sent(1982, 'Le musée ferme définitivement son aile nord.', 'The museum is closing its north wing for good.',
    '/lə my.ze fɛʁm de.fi.ni.tiv.mɑ̃ sɔ̃.nɛl nɔʁ/', 'luh mü-ZAY FEHRM | day-fee-nee-teev-MAHⁿ | sohⁿ-nel NOR', ['juste', 'texte'], FCVDR),
  sent(1983, 'La réunion est à dix heures.', 'The meeting is at ten.',
    '/la ʁe.y.njɔ̃ ɛ.ta di.zœʁ/', 'la ray-ü-NYOHⁿ | eh-ta dee-ZUHR', ['juste']),
  sent(1984, 'Merci de votre patience.', 'Thank you for your patience.',
    '/mɛʁ.si də vɔtʁ pa.sjɑ̃s/', 'mehr-SEE | duh votr pa-SYAHⁿSS', ['juste'], FCVDR),
  sent(1985, 'Il est possible que le train ait du retard.', 'It is possible that the train will be late.',
    '/i.lɛ pɔ.sibl kə lə tʁɛ̃ ɛ dy ʁə.taʁ/', 'ee-leh po-SEEBL | kuh luh TREHⁿ | eh dü ruh-TAR', ['juste']),
  sent(1986, 'Le français a toujours emprunté à d’autres langues.', 'French has always borrowed from other languages.',
    '/lə fʁɑ̃.sɛ a tu.ʒuʁ ɑ̃.pʁœ̃.te a do.tʁə lɑ̃ɡ/', 'luh frahⁿ-SEH | a too-ZHOOR ahⁿ-pruhⁿ-TAY | a doh-truh LAHⁿG', ['texte', 'accepte']),
  sent(1987, 'Le bon traducteur ne cherche pas la différence ; il cherche le naturel.', 'A good translator does not look for difference; he looks for what sounds natural.',
    '/lə bɔ̃ tʁa.dyk.tœʁ nə ʃɛʁʃ pa la di.fe.ʁɑ̃s il ʃɛʁʃ lə na.ty.ʁɛl/', 'luh bohⁿ tra-dük-TUHR | nuh SHEHRSH pa la dee-fay-RAHⁿSS | eel SHEHRSH luh na-tü-REL', ['texte', 'methode'], FCVDR),
  rule(1988, 'Si la phrase littérale est naturelle, garde-la.', 'If the literal sentence is natural, keep it.',
    '/si la fʁaz li.te.ʁal ɛ na.ty.ʁɛl ɡaʁd.la/', 'see la FRAHZ lee-tay-RAL | eh na-tü-REL | gard-LA',
    '« I agree with you. » Je suis d’accord avec toi : trop proche de l’anglais ?',
    'Non : c’est exactement ce qu’on dit. Le but n’est pas de s’éloigner de l’anglais, mais d’écrire ce qu’un francophone aurait écrit, et parfois c’est le mot à mot.', ['juste']),
  rule(1989, 'Un calque, c’est un sens ou une tournure qu’un francophone n’emploierait pas.', 'A calque is a meaning or a turn of phrase a French speaker would not use.',
    '/œ̃ kalk sɛ.tœ̃ sɑ̃s u yn tuʁ.nyʁ kœ̃ fʁɑ̃.kɔ.fɔn nɑ̃.plwa.ʁɛ pa/', 'uhⁿ KALK | seh-tuhⁿ SAHⁿSS | oo ün toor-NÜR | kuhⁿ frahⁿ-ko-FONN | nahⁿ-plwa-REH PA',
    '« Le musée a réalisé ce projet. » Réaliser ressemble à to realize : calque ?',
    'Non : réaliser un projet, c’est le sens premier du verbe. Un mot n’est pas un calque parce qu’il ressemble à l’anglais, mais parce qu’on lui donne un sens ou une construction que le français n’a pas.', ['juste']),
  sent(1990, 'Supporter la chaleur, c’est la tolérer.', 'To bear the heat is to tolerate it.',
    '/sy.pɔʁ.te la ʃa.lœʁ sɛ la tɔ.le.ʁe/', 'sü-por-TAY la sha-LUHR | seh la to-lay-RAY', ['juste', 'supporter']),
];

/* ── ACT 12 · LE TON JUSTE (.1991-.1999) ─────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1991, 'Passez nous voir samedi.', 'Drop by and see us on Saturday.',
    '/pa.se nu vwaʁ sam.di/', 'pa-SAY noo VWAR | sam-DEE', ['tache', 'particule'], FCVDR),
  sent(1992, 'N’hésitez pas à nous écrire.', 'Feel free to get in touch.',
    '/ne.zi.te pa a nu.ze.kʁiʁ/', 'nay-zee-TAY pa | a noo-zay-KREER', ['tache', 'ton'], FCVDR),
  sent(1993, 'Profitez de 15 % de rabais sur tous les accessoires.', 'Enjoy 15% off all accessories.',
    '/pʁɔ.fi.te də kɛ̃z puʁ sɑ̃ də ʁa.bɛ syʁ tu le.zak.sɛ.swaʁ/', 'pro-fee-TAY | duh KEHⁿZ poor SAHⁿ | duh ra-BEH | sür too lay-zak-seh-SWAR', ['tache', 'nombre', 'quebec']),
  sent(1994, 'Chère cliente, cher client, merci de votre fidélité.', 'Dear customer, thank you for your loyalty.',
    '/ʃɛʁ kli.jɑ̃t ʃɛʁ kli.jɑ̃ mɛʁ.si də vɔtʁ fi.de.li.te/', 'shehr klee-YAHⁿT | shehr klee-YAHⁿ | mehr-SEE | duh votr fee-day-lee-TAY', ['ton']),
  sent(1995, 'La corne de brume retentissait toutes les deux minutes.', 'The foghorn sounded every two minutes.',
    '/la kɔʁn də bʁym ʁə.tɑ̃.ti.sɛ tut le dø mi.nyt/', 'la KORN duh BRÜM | ruh-tahⁿ-tee-SEH | toot lay deu mee-NÜT', ['texte', 'juste']),
  sent(1996, 'Sa femme et ses enfants l’aidaient souvent.', 'He was often helped by his wife and children.',
    '/sa fam e se.zɑ̃.fɑ̃ lɛ.dɛ su.vɑ̃/', 'sa FAMM | ay say-zahⁿ-FAHⁿ | leh-DEH soo-VAHⁿ', ['texte', 'passif']),
  sent(1997, 'Je n’ai pas cherché à imiter le jeu de mots.', 'I did not try to imitate the pun.',
    '/ʒə ne pa ʃɛʁ.ʃe a i.mi.te lə ʒø də mo/', 'zhuh nay pa shehr-SHAY | a ee-mee-TAY | luh zheu duh MOH', ['texte', 'justifier']),
  sent(1998, 'J’ai gardé le mot à mot là où il était naturel.', 'I kept the literal version where it was natural.',
    '/ʒe ɡaʁ.de lə mo a mo la u i.le.tɛ na.ty.ʁɛl/', 'zhay gar-DAY luh moh a MOH | la oo ee-lay-TEH na-tü-REL', ['justifier'], FCVDR),
  rule(1999, 'Traduis aussi le ton : l’enthousiasme de l’anglais se dit plus sobrement en français.', 'Translate the tone too: English enthusiasm is said more soberly in French.',
    '/tʁa.dɥi o.si lə tɔ̃ lɑ̃.tu.zjasm də lɑ̃.ɡlɛ sə di ply sɔ.bʁə.mɑ̃ ɑ̃ fʁɑ̃.sɛ/', 'tra-dwee oh-SEE luh TOHⁿ | lahⁿ-too-ZYASM duh lahⁿ-GLEH | suh DEE plü so-bruh-MAHⁿ | ahⁿ frahⁿ-SEH',
    '« We’re so excited to announce our new shop!!! »',
    'Nous avons le plaisir de vous annoncer l’ouverture de notre boutique. Un seul point d’exclamation, ou aucun ; vous pour la clientèle, sauf si la marque tutoie déjà ses clients.', ['ton']),
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
 *  The anchor readings (200 to 350 words, B2-BUILD-LOG « Reading at B2 »):
 *  each is natural French, a translation done WELL, and its questions ask
 *  what the translator did with the English. The « texte à reprendre »
 *  drafts (60 to 120 words) close acts 3 to 11: each is a word-for-word
 *  translation holding the act's calques, labelled as a draft to correct.
 *  Word counts are asserted by scratch/_b233-words.mts. ALL ORIGINAL,
 *  written for the lesson.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ORIGINAL = 'Texte original écrit pour la leçon.';
export const BROUILLON = 'Premier jet, traduit mot à mot de l’anglais : à corriger.';

/** Act 1: the reviser's email. The three kinds of calque, and tone. */
export const TEXTE_SOPHIE =
  `${ORIGINAL} Courriel. Objet : ta première traduction. Bonjour, merci pour la traduction de l’annonce du Salon du livre jeunesse. Elle est complète, sans faute d’orthographe, et pourtant je l’ai beaucoup reprise. Je t’explique pourquoi, parce que tu vas croiser ces pièges tous les jours. Tu as traduit les mots un par un, dans l’ordre de l’anglais. Le résultat est du français correct, mais aucun francophone ne l’aurait écrit ainsi : c’est ce qu’on appelle un calque. Il y en a trois sortes. Le calque de mot, d’abord : tu as écrit que la librairie « supporte » les jeunes auteurs. En français, supporter veut surtout dire tolérer ; la librairie les soutient. Le calque de phrase, ensuite : « Les enfants qui ont été invités par l’école seront accueillis par les bénévoles. » Deux passifs à la suite, parce que l’anglais en avait deux. En français, on dira plutôt que les bénévoles accueilleront les classes invitées. Le calque d’expression, enfin : le salon ne « prend pas place » samedi, il a lieu samedi. Prendre place, c’est s’asseoir. Reste le ton. L’anglais s’enthousiasmait avec trois points d’exclamation ; dans une annonce officielle, en français, un seul suffit, et souvent aucun. Pour la suite, un conseil : quand ta traduction est finie, cache l’anglais et relis ton texte à voix haute. Tout ce qui sonne traduit doit être repris. Tu as bien fait une chose : tu n’as rien oublié. Le sens est là ; il manque la manière. À demain, Sophie Lavoie, réviseure.`;

/** Act 2: a community centre's press release, translated well (Montréal). */
export const TEXTE_CENTRE =
  `${ORIGINAL} Communiqué traduit de l’anglais. Le Centre communautaire Pivot, dans le quartier Hochelaga, à Montréal, soutient les familles du quartier depuis dix ans. Cette année, nous nous sommes rendu compte que de plus en plus d’étudiants sautaient des repas pour payer leur loyer. Nous avons donc décidé de nous attaquer au problème. À partir de janvier, le Centre offrira chaque mardi un repas chaud à prix libre aux étudiants. Plusieurs commerces du quartier ont accepté de nous soutenir : une boulangerie nous donnera ses invendus, et une épicerie nous prêtera sa chambre froide. L’entreprise d’un de nos membres offre à nos bénévoles une formation en cuisine de trois jours. Nous aborderons les détails pratiques lors d’une rencontre publique, le 12 décembre, à 18 h. Tout le monde y est le bienvenu, et nous vous présenterons l’équipe. Nous savons que ce projet ne réglera pas tout. Il ne remplacera pas une aide durable, que nous continuerons de réclamer. Mais nous sommes certains d’une chose : aucun étudiant ne devrait étudier le ventre vide. Nous participerons certainement à la collecte de la fondation de quartier, en mars, pour financer la suite. Vous voulez nous aider ? Venez en parler avec nous le 12. Nous répondrons à toutes vos questions et, si vous le souhaitez, vous pourrez vous inscrire comme bénévole le soir même.`;

/** Act 3: a language school's FAQ, translated well (Liège). */
export const TEXTE_FAQ =
  `${ORIGINAL} Foire aux questions, traduite de l’anglais. École de langues Le Pont, à Liège. À qui dois-je m’adresser pour m’inscrire ? Adressez-vous à l’accueil, au rez-de-chaussée, ou remplissez le formulaire en ligne. On vous répondra dans les deux jours ouvrables. Que faut-il apporter le premier jour ? Rien, sinon de quoi écrire : on vous remettra les manuels en classe. Les cinq premiers cours sont gratuits : est-ce vrai ? Oui. Si le cours ne vous convient pas, vous pouvez arrêter sans rien payer. Avec qui vais-je travailler ? Avec un professeur et, au plus, onze camarades. Si votre niveau progresse plus vite que prévu, vous changerez de groupe. Et si je rate un cours ? Prévenez votre professeur la veille. Nous vous enverrons les documents par courriel, et vous pourrez poser vos questions au cours suivant. L’école est-elle accessible en fauteuil roulant ? Oui, par l’entrée de la rue latérale ; un ascenseur dessert tous les étages. Peut-on se garer près de l’école ? L’école n’a pas de parking, mais un parking public se trouve à cinq minutes à pied. Mon employeur peut-il payer ma formation ? Oui : nous lui adresserons la facture à son nom. Demandez-nous l’attestation d’inscription dont il aura besoin. Soulignons enfin que l’inscription est gratuite, et qu’elle le restera.`;

/** Act 4: a language column in a Québec weekly. */
export const TEXTE_CHRONIQUE =
  `${ORIGINAL} Chronique « Le mot juste ». Cette semaine, une lectrice de Trois-Rivières m’écrit : « Au bureau, tout le monde dit que ça fait du sens. Est-ce une faute ? » Bonne question. L’expression vient de l’anglais to make sense, traduit mot à mot. L’Office québécois de la langue française la déconseille et propose avoir du sens, être sensé, être logique ou tenir debout. Même famille : on n’applique pas pour un emploi, on postule ou on pose sa candidature ; une réunion ne prend pas place, elle a lieu ; on ne met pas l’emphase sur un point, on met l’accent dessus. Et après le souper, on ne prend pas une marche : on va marcher, ou on fait une promenade. Faut-il pour autant chasser tout ce qui vient de l’anglais ? Non. Certaines expressions traduites de l’anglais sont entrées dans l’usage : dans la conversation, on peut dire que le jazz n’est pas sa tasse de thé, et même à l’écrit, qu’une découverte a pavé la voie à d’autres. Le français a toujours emprunté. La vraie question n’est pas de savoir d’où vient une expression, mais si elle dit la chose comme le français la dit déjà. Quant à faire sens, sans du, la tournure existe en français depuis longtemps ; elle reste rare au Québec, et certains la critiquent. Dans un texte soigné, avoir du sens ne vous trahira jamais. Écrivez-moi : la semaine prochaine, je vous parlerai de ça me sonne une cloche.`;

/** Act 5: a news item, translated well (Lausanne). Transpositions. */
export const TEXTE_NAGEUR =
  `${ORIGINAL} Fait divers, traduit de l’anglais. Samedi matin, Luc Morand, un enseignant lausannois de cinquante-deux ans, a traversé le lac Léman à la nage, de Lausanne jusqu’à Évian, sur la rive française. Parti du port d’Ouchy à six heures, il a touché l’autre rive un peu avant midi, sous les applaudissements d’une centaine de curieux. Dès son arrivée, il a remercié l’équipe qui l’avait suivi en bateau. « Sans eux, je ne serais pas allé bien loin », a-t-il déclaré en riant. L’homme n’en est pas à son coup d’essai. Nageur depuis l’enfance, il s’entraîne trois fois par semaine dans le lac, même en hiver. Il reconnaît pourtant avoir douté : vers dix heures, un vent fort s’est levé et les vagues l’ont ralenti. « J’ai failli abandonner. Heureusement, ma fille m’a crié depuis le bateau que la moitié était faite. » Cette traversée n’était pas un simple défi sportif. Luc Morand nageait pour une association qui aide les enfants malades, et il a récolté plus de vingt mille francs. À sa grande surprise, les dons continuent d’arriver. Avec un peu de chance, il recommencera l’an prochain, et il espère convaincre ses élèves de l’accompagner sur une distance plus courte. « À la nage, bien sûr, et avec un bateau à côté », précise-t-il.`;

/** Act 6: a translator's notebook on signs (a centre on the Saint-Laurent). */
export const TEXTE_PANNEAUX =
  `${ORIGINAL} Carnet d’une traductrice. Le mois dernier, j’ai traduit tous les panneaux d’un centre d’interprétation au bord du Saint-Laurent. On pourrait croire que c’est le travail le plus simple du monde : quelques mots par panneau. C’est pourtant là que le mot à mot fait le plus de dégâts. Un panneau ne se traduit pas : on le remplace par celui que les francophones ont l’habitude de lire. Sur la porte de l’atelier, l’anglais disait « Staff only » ; j’ai écrit « Réservé au personnel ». Devant un banc qu’on venait de repeindre, pas de peinture mouillée : en français, la peinture est fraîche. L’ascenseur, en panne, est désormais hors service. Pour l’escalier du quai, « Attention à la marche » dit la même chose que l’anglais, mais du point de vue de la marche, et non du pied de celui qui monte. Le plus délicat, c’était le panneau sur les bélugas. L’original disait qu’il n’était « pas inhabituel » de les voir depuis le quai. Traduire par « il n’est pas rare » était possible, et correct. J’ai pourtant préféré dire la même chose en positif : on aperçoit assez souvent des bélugas depuis le quai. Le visiteur comprend tout de suite, et il lève les yeux vers l’eau. Enfin, une question de ton : l’anglais criait son interdiction aux visiteurs avec un point d’exclamation. En français, « Merci de ne pas nourrir les oiseaux » suffit : le panneau reste poli, et personne ne se sent grondé.`;

/** Act 7: a park notice, translated well (an invented park in Gaspésie). */
export const TEXTE_SENTIER =
  `${ORIGINAL} Avis aux randonneurs, traduit de l’anglais. Bienvenue au parc régional des Trois-Cascades. Pour vous rendre au belvédère, prenez le sentier qui longe la rivière, puis la passerelle qui l’enjambe, à mi-chemin. Comptez une heure et demie aller-retour. Le sentier qui traverse la forêt, plus court, est fermé jusqu’au printemps : un arbre tombé bloque le passage. Les chiens tenus en laisse sont les bienvenus. Avant de partir, inscrivez-vous au pavillon d’accueil : en cas d’orage, nous saurons qui se trouve encore sur les sentiers. Si le temps se gâte, revenez sur vos pas. La randonnée guidée est reportée au 18 juin, faute de guide. Pour y participer, réservez votre place en ligne ; si vous changez d’avis, annulez votre réservation pour laisser la place à quelqu’un d’autre. Vous trouverez de l’eau potable au pavillon et au belvédère, mais aucune poubelle sur les sentiers : ce que vous apportez, vous le rapportez. Les navettes à destination du village partent toutes les heures du stationnement principal ; la dernière quitte le parc à 18 h. Vous avez trouvé un objet perdu ? Déposez-le à l’accueil : nous nous chargerons de retrouver son propriétaire. Déposez vos dons pour l’entretien des sentiers dans la boîte prévue à cet effet. Bonne randonnée, et merci de laisser le parc aussi beau que vous l’avez trouvé.`;

/** Act 8: a letter to festival volunteers, translated well (Montréal). */
export const TEXTE_BENEVOLES =
  `${ORIGINAL} Lettre aux bénévoles, traduite de l’anglais. Merci de vous être inscrits comme bénévoles au festival de littérature de Montréal ! Nous avons hâte de travailler avec vous du 6 au 9 août. Être bénévole, c’est rejoindre une équipe de trois cents personnes, accueillir des auteurs venus de toute la francophonie et, souvent, se faire des amis pour la vie. Voici l’essentiel. Avant d’arriver, lisez la fiche de votre poste : elle vous dit où aller et qui vous attend. En arrivant, présentez-vous au kiosque des bénévoles, à côté de la salle d’attente des auteurs. Après avoir signé la feuille de présence, vous recevrez un gilet vert et un repas. Pendant votre quart, ne quittez pas votre poste sans prévenir votre responsable. Les bénévoles qui portent un gilet orange sont là pour vous aider : n’hésitez pas à les arrêter. Si vous avez l’habitude de travailler avec le public, dites-le-nous : nous avons besoin de monde à la billetterie. Stationnement interdit devant la salle principale : prenez plutôt le métro. Enfin, un souvenir de l’an dernier. Une bénévole assise à l’accueil a vu un auteur partir sans son manuscrit ; elle a couru le lui rendre, et il l’a remerciée dans son livre suivant. Merci d’avance pour votre énergie, et au plaisir de vous voir en août.`;

/** Act 9: a workplace health sheet, translated well. The small words. */
export const TEXTE_BUREAU =
  `${ORIGINAL} Fiche santé au travail, traduite de l’anglais. Bougez au bureau. La vie de bureau fatigue le corps plus qu’on ne le croit. Le dos souffre, les épaules se raidissent, les yeux se fatiguent devant l’écran. La bonne nouvelle, c’est que quelques gestes suffisent. Toutes les heures, levez-vous et faites quelques pas. Assis, gardez les pieds à plat sur le sol et le dos contre le dossier. Relâchez les épaules, puis tournez lentement la tête à droite, puis à gauche. Levez les bras au-dessus de la tête et étirez-vous. Fermez les yeux quelques secondes : on repose ses yeux en regardant au loin, sans quitter son poste. Si vous avez mal au dos depuis plusieurs jours, ne forcez pas et parlez-en à un professionnel de la santé. Si vous vous êtes blessé au genou ou à la cheville, attendez d’être guéri avant de reprendre ces exercices. On pense souvent que le sport du dimanche suffit à rattraper la semaine. Ce n’est pas le cas : le corps préfère le mouvement régulier aux grands efforts. Les enfants ne restent jamais assis longtemps ; ils le savent d’instinct. Pour finir, buvez de l’eau pendant la journée. Le café ne compte pas. La santé commence par de petites habitudes, au bureau comme ailleurs.`;

/** Act 10: a festival press release with figures (Québec). */
export const TEXTE_FESTIVAL =
  `${ORIGINAL} Communiqué de presse, traduit de l’anglais. Québec, le 21 août 2026. Le festival Les Nuits du fleuve a accueilli 48 500 visiteurs pendant ses dix jours de programmation, soit une hausse de 12,5 % par rapport à l’an dernier. « Nous n’espérions pas un tel succès », a déclaré la directrice générale, Chantal Ouellet. Les 36 spectacles gratuits du quai ont attiré la majorité du public. Pour les spectacles en salle, le billet coûtait en moyenne 27,50 $, taxes comprises. Le budget atteignait 3,2 millions de dollars, dont 40 % provenaient de commanditaires privés. Le spectacle de clôture, le samedi 15 août, a commencé à 20 h 30 et a réuni près de 9 000 personnes malgré la pluie. La 7e édition aura lieu en août 2027, du vendredi 6 au dimanche 15. La programmation sera dévoilée en mai. Pour la première fois, le festival proposera une journée « zéro déchet » : vaisselle réutilisable, tri obligatoire et fontaines d’eau sur tout le site. Les bénévoles, au nombre de 420, ont assuré plus de 6 000 heures de travail. Le festival remercie ses partenaires, la Ville de Québec et le public, fidèle au rendez-vous malgré une météo capricieuse. Contact médias : Marc Tremblay, au 418 555-0199.`;

/** Act 11: a colleague's email about over-correction. */
export const TEXTE_KARIM =
  `${ORIGINAL} Courriel. Objet : j’en ai trop fait. Salut ! Petite confession avant la réunion de lundi. Depuis que Sophie nous a parlé des calques, je vois de l’anglais partout, et j’ai commencé à corriger ce qui n’avait pas besoin de l’être. Hier, dans le rapport du musée, j’ai remplacé « Le musée a réalisé ce projet en deux ans » par « Le musée a effectué ce projet ». Sophie a tout remis comme avant : réaliser un projet, c’est du très bon français, et même le sens premier du verbe. Elle ajoute que réaliser, au sens de se rendre compte, longtemps critiqué, est aujourd’hui admis par l’Office québécois de la langue française. Même chose pour « Les visiteurs ne supportaient plus la chaleur de la salle » : supporter, au sens de tolérer, est parfaitement correct. J’avais aussi chassé un définitivement qui voulait dire pour toujours : le musée ferme définitivement son aile nord. Là encore, rien à redire. Et j’ai hésité devant « Je suis d’accord avec vous », qui ressemble tant à l’anglais ! Pourtant, c’est exactement ce qu’on dit. Sophie m’a donné une règle que je te transmets. Un calque, ce n’est pas un mot qui ressemble à l’anglais : c’est un sens ou une tournure qu’un francophone n’emploierait pas. Si la traduction littérale est aussi la phrase qu’un francophone écrirait, garde-la. Le bon traducteur ne cherche pas la différence ; il cherche le naturel. Bon week-end, Karim.`;

/** Act 12: a museum panel, adapted, with the translator's three choices. */
export const TEXTE_MUSEE =
  `${ORIGINAL} Traduire un panneau de musée : mes trois choix. Le musée de la Mer de Baie-des-Loups m’a confié la traduction de son panneau sur les gardiens de phare. Voici ma version française, puis les trois choix que j’ai dû faire. Le panneau : « Gardiens de phare, gardiens de vies. De 1890 à 1970, sept familles se sont succédé au phare de la pointe. Le gardien allumait la lampe au coucher du soleil et la surveillait toute la nuit. Par temps de brume, la corne de brume retentissait toutes les deux minutes. Sa femme et ses enfants l’aidaient souvent, sans être payés. On estime que le phare a évité des dizaines de naufrages. » Premier choix : l’anglais disait que les gardiens étaient souvent aidés par leur famille. J’ai renoncé au passif. En français, dire que la femme et les enfants aidaient le gardien met ces personnes au premier plan, et la phrase est plus vivante. Deuxième choix : every two minutes est devenu toutes les deux minutes, sans aucune difficulté. J’ai gardé le mot à mot là où il était naturel. Troisième choix : le titre anglais jouait sur les mots keepers et light. Je n’ai pas cherché à imiter le jeu de mots ; j’en ai créé un autre, gardiens de phare, gardiens de vies, qui dit le rôle du phare. Le ton, enfin, reste celui d’un musée : neutre, précis, sans point d’exclamation.`;

/* The « texte à reprendre » drafts (acts 3 to 11), 60 to 120 words. */

export const REPRENDRE_A3 =
  `${BROUILLON} Courriel d’un centre de formation. Bonjour à tous. Il est important de noter que la formation de lundi a été déplacée au mardi. Les participants qui ont été inscrits par leur employeur seront contactés par notre équipe. Si vous avez des questions, vous pouvez demander vos questions à Julie, la personne que vous avez parlé au téléphone. Les premiers trois jours auront lieu en ligne. Vous serez répondu dans les quarante-huit heures. Merci de votre patience.`;

export const REPRENDRE_A4 =
  `${BROUILLON} Nouvelles de l’équipe, à Montréal. La fête de Noël prendra place le 19 décembre au restaurant du coin. L’idée de la faire un vendredi fait du sens pour tout le monde. Martin est en charge des réservations. Si le nom du restaurant vous sonne une cloche, c’est normal : nous y sommes allés l’an dernier. Cette année, nous voulons mettre l’emphase sur la bonne humeur. Et une bonne nouvelle : Amina a appliqué pour le poste de coordonnatrice ! À la fin de la journée, c’est toute l’équipe qui décidera du menu.`;

export const REPRENDRE_A5 =
  `${BROUILLON} Fait divers, à Québec. Un étudiant de Québec a nagé à travers le fleuve samedi, jusqu’à Lévis. À son arrivée, il a couru hors de l’eau pour embrasser sa mère, qui l’attendait sur la plage. Une heure plus tard, il a marché dans la salle de presse avec une médaille autour du cou. « Avec espoir, je recommencerai l’an prochain », a-t-il déclaré aux journalistes. Il nageait pour une association qui aide les enfants malades.`;

export const REPRENDRE_A6 =
  `${BROUILLON} Les panneaux d’un hôtel, première version. Sur l’ascenseur : « Hors d’ordre ». Dans le couloir : « Peinture mouillée ». Sur la porte de la cuisine : « Personnel seulement ». Dans la salle de bain : « Il n’est pas inhabituel que l’eau chaude arrive après une minute. » À la réception : « Pas de fumer ». Au bord de la piscine : « Pas de plongée ». À l’entrée du restaurant : « Regardez votre pas ». Et sur la porte de chaque chambre : « Ne pas déranger ».`;

export const REPRENDRE_A7 =
  `${BROUILLON} Courriel d’une coordonnatrice de bénévoles, à Dakar. Salut l’équipe ! Pour la journée de samedi, signez en haut sur le site avant jeudi. Le bus à l’aéroport part de la gare routière à 7 h : ne le manquez pas. En arrivant, laissez tomber vos dons de vêtements à l’accueil. La réunion d’équipe de vendredi est mise en arrière à lundi. Si vous trouvez dehors qui peut nous prêter une camionnette, dites-le-moi. Merci à tous !`;

export const REPRENDRE_A8 =
  `${BROUILLON} Message aux bénévoles d’un festival. Merci pour venir hier soir ! Étant bénévole au festival est une expérience unique, et nous regardons en avant à vous revoir l’an prochain. La femme s’asseyant à l’accueil a trouvé un portefeuille et l’a rendu à son propriétaire. Les inscriptions pour l’an prochain ouvriront en mai. Merci encore pour tout votre travail, et à bientôt !`;

export const REPRENDRE_A9 =
  `${BROUILLON} Message à un collègue. Bonjour Paul, merci pour ton message. Malheureusement, je me suis cassé ma jambe en ski samedi, et je dois rester à la maison deux semaines. Tu ne sais jamais : je pensais que ce serait une semaine tranquille ! Vie est pleine de surprises. Mon médecin dit que chocolat n’aide pas à guérir, mais je ne le crois pas. Je lirai tes courriels depuis mon canapé. À bientôt, Nadia.`;

export const REPRENDRE_A10 =
  `${BROUILLON} Publicité d’une papeterie, à Montréal. Soldes d’été à la Papeterie du Parc ! Du 3 Juillet au 15 Juillet, profitez de 20% de rabais sur plus de 1,500 articles. Nous sommes ouverts de 9:00 à 21:00, du Lundi au Samedi. Les cahiers sont à partir de $2.99 et les stylos à $0.99. Notre slogan cette année : "Écrire, c’est vivre". Au plaisir de vous voir !`;

export const REPRENDRE_A11 =
  `Une traduction corrigée par un réviseur trop zélé : certaines corrections étaient inutiles. Le musée a réalisé ce projet grâce à ses bénévoles, et nous sommes d’accord avec eux : il faut continuer. L’aile nord fermera définitivement en juin. Les visiteurs ne supportaient plus la chaleur de cette salle. Nous allons définitivement ouvrir une nouvelle salle l’an prochain, et nous adresserons ce problème avec la Ville. L’inauguration prendra place en septembre.`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE TASK SOURCE (act 12). English, written for the lesson, printed
 *  in the task brief only (no `source` field on `task`). It gathers the
 *  lesson's moves: tone (Big news, thrilled, !), take place, drop by, sign
 *  up, 15%, it's not uncommon, don't wait until, reach out, life is…,
 *  a date and a time, an address.
 * ══════════════════════════════════════════════════════════════════════════ */

export const TASK_SOURCE_EN =
  'Big news from Spoke & Chain! We’re thrilled to announce that our brand-new repair workshop is opening on Saturday, May 15, at 10:00 a.m. The grand opening will take place at 4321 Rachel Street East, Montréal. Drop by to meet our mechanics, sign up for a free safety check and enjoy 15% off all accessories. It’s not uncommon for a bike to need a tune-up after a long winter, so don’t wait until your brakes give up on you! Can’t make it? Don’t hesitate to reach out: we’re open seven days a week. Life is too short to ride a squeaky bike! See you soon, The Spoke & Chain team';
