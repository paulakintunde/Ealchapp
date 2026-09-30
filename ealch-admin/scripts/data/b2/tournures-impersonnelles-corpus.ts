// b2.20.l1 « Les tournures impersonnelles »: the authored corpus, the imports
// and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape,
// as b2.15 cause-consequence and b2.16 concession-avancee), under the B2 rules
// of B2-BUILD-LOG.md (form, meaning, choice, text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 20 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE IMPERSONAL « IL » GRADED BY WHAT THE SPEAKER COMMITS TO. B1 gave the
//   triggers one by one (lesson 15 in B1) and the il est / c'est choice
//   (lesson 22 in B1); B2 lesson 6 set certain and probable against possible
//   in one act. This lesson takes the empty « il » as a system of four
//   families, each graded and each with its mood:
//
//     la carte          four families (necessity, probability, judgement,
//                       distance), the empty il, the mood each one picks
//                       (act 2)
//     l'infinitif       il faut, il suffit de, il convient de, il y a lieu de
//                       (administrative), il vaut mieux, il importe de, il te
//                       faut; no one in particular against someone named
//                       (act 3)
//     la nécessité      il faut que, il est nécessaire / indispensable /
//                       essentiel que, il importe que (soutenu), il suffit
//                       que, il vaut mieux que, graded from the minimum to
//                       the obligation; « il ne faut pas que » (forbidden)
//                       against « il n'est pas nécessaire que » (let off)
//                       (act 4)
//     l'échelle         certain, sûr, clair, évident, il ne fait aucun doute,
//                       probable + INDICATIF against possible, il se peut, il
//                       se pourrait, peu probable, douteux, il n'est pas
//                       exclu + SUBJONCTIF; above or below even odds; the
//                       subjonctif passé for a past fact (act 5)
//     la négation       negated certainty flips to the subjunctive, negated
//                       doubt comes back to the indicative; the inverted
//                       question (both moods, lesson 6 in B2) (act 6)
//     la source         il semble que (subjunctive, lesson 15 in B2's policy),
//                       il me semble que (indicative), il semblerait que, il
//                       paraît que (hearsay, indicative), il s'avère que, il
//                       se trouve que (act 7)
//     le jugement       il est dommage, regrettable, étonnant, normal, temps,
//                       heureux que + SUBJONCTIF, the subjonctif passé; il est
//                       + adj + de for everyone against que for someone; il
//                       est (written) against c'est (spoken) (act 8)
//     la distance       il a été décidé, rappelé, prévu, convenu, constaté que
//                       + INDICATIF against il est demandé, exigé que +
//                       SUBJONCTIF; il est interdit de on the notice against
//                       on ne peut pas in speech; il est question de, il sera
//                       procédé à (recognition) (act 9)
//     l'accord          il reste, il manque, il existe, il est arrivé, il
//                       s'est produit: the verb stays singular; il s'agit de
//                       never with a personal subject; il arrive que; il en
//                       va de même (act 10)
//     les degrés        a report conclusion that grades every claim from
//                       established to feared (act 11)
//     la note           the DELF B2 production écrite (act 12)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 15 in B1   the triggers (reframe quoted; rows 1201, 1246-1249,
//                       1254, 1271, 1275, 1286, 1293, 1359, 1364, 1367)
//     lesson 16 in B1   one subject or two (reframe quoted)
//     lesson 18 in B1   the passive on the notice (reframe quoted; row
//                       faits-et-procedures 1072)
//     lesson 22 in B1   il est + adj + de written, c'est spoken (reframe
//                       quoted; rows 1102, 1103, 1113, 1156)
//     lesson 5 in B2    the subjonctif passé form (row emotions 1317, 1256)
//     lesson 6 in B2    the scale in one act (reframe quoted; rows 1838,
//                       1846-1850, 1854, 1856-1858)
//     lesson 14 in B2   il s'agit de + infinitive (rows 1204, 1311)
//     lesson 15 in B2   the policy on « il semble que » (row 1966)
//     lesson 16 in B2   il n'en reste pas moins que (row 2154)
//     lesson 22 in B2   cautious claims (reframe quoted; rows 1031, 1064,
//                       1092, 1094, 1099, 1135)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB probed read-only 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `opinions-et-avis` (fondations, a2-b2). Sub-theme « les
//     tournures impersonnelles » is already in Postgres (read back
//     2026-09-30 with « donner son avis », « argumenter et réfuter »,
//     « nuancer son point de vue », « croire, douter, affirmer »). Nothing to
//     create at import.
//
//  2. ID BLOCK: `.2000`-`.2199`, assigned by the brief. A read-only probe on
//     2026-09-30 found NO row at .2000-.2199 at any level of this theme (b2
//     max 1981, b1 max 1591, a2 max 132). Authored: `.2000`-`.2195`, with
//     gaps between act blocks (see the act banners). Nothing outside it.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash: the theme already holds
//     the phrase rows « il est nécessaire que », « il est essentiel que »,
//     « il vaut mieux que », « il est temps que », « il est possible que »,
//     « il se peut que », « il est probable que », « il est peu probable
//     que », « il est évident que », « il semble que », « il n'est pas sûr
//     que », « c'est dommage que ». Every row here is a sentence, a gapfill
//     card or a rule card.
//
//  4. REUSED ROWS. The seed plus packs (22,082 items, read 2026-09-30) were
//     probed for every construction with real orthography. On-topic rows are
//     reused BY ID (§F), never retyped. The seed carries NO « il y a lieu
//     de », « il est douteux que », « il ne fait aucun doute », « il est à
//     noter », « il est rappelé », « il est à craindre », « il s'avère »,
//     « il sera procédé », so those are authored here. Postgres holds DB-only
//     b2 rows with « il importe que », « il arrive que », « il est
//     regrettable que », « il se pourrait que », « il n'est pas exclu que »;
//     none is an exact twin of a row here (checked 2026-09-30).
//
//  5. RESPELLINGS. Spelled for the nasal checker, not the ear: « personne »
//     pehr-SONN, « semaine » suh-MENN, « une » ÜNN, « aucune » oh-KÜNN,
//     « impersonnel » ehⁿ-pehr-so-NELL, « reprenne » ruh-PRENN, « prévienne »
//     pray-VYENN, « devienne » duh-VYENN, « maintienne » mehⁿ-TYENN,
//     « tienne » TYENN, « prennes » PRENN, « programme » pro-GRAMM,
//     « minimum » mee-nee-MOMM. No U+203F tie anywhere, IPA included.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs. The one `scenario` uses ’ only
//     and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL SENTENCE IS EVER A ROW. « Il faut que tu viens »,
//     « il manquent deux chaises », « ce livre s'agit de », « il est possible
//     que + indicatif » and the other wrong forms live only in the scene's
//     break, commonErrors.wrong, trapDrill.promptSound and quiz errorSpot
//     prompts. Row 2004 (« il est certain qu'il y aura… ») is correct
//     French: it is the scene's WRONG CHOICE because it claims more than the
//     engineer said, not because of its grammar.
//
//  8. MOOD POLICIES (never tested against themselves):
//     - « il semble que » is taught with the subjunctive (lesson 15 in B2's
//       policy): the indicative after it is never offered as a wrong option
//       and every type-in that ends in it also accepts the indicative.
//     - « il est probable que » is taught with the indicative (lesson 6 in
//       B2); a subjunctive after it is never offered as a wrong option
//       either (it is found, rarely, in good writers).
//     - « il arrive que » is taught with the subjunctive; its mood is never
//       typed and the indicative is never a distractor.
//     - the inverted question (« est-il certain que ») takes either mood
//       with a different meaning (lesson 6 in B2): only its meaning is ever
//       asked.
//     - after a NEGATED certainty the written norm is the subjunctive; the
//       present indicative there is named as spoken, and a question that
//       tests it says « à l'écrit ».
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
  id: 'b2.20',
  seq: 20,
  title: 'Impersonal Expressions',
  sub: 'Les tournures impersonnelles',
  canDo: 'Can use the impersonal il to grade what the speaker commits to: necessity from il suffit que to il est indispensable que (subjunctive) and il faut, il convient de, il y a lieu de (infinitive); probability from il ne fait aucun doute que and il est probable que (indicative) down to il est possible, peu probable, douteux que (subjunctive), including the flip after a negation; a source with il semble que, il me semble que, il paraît que, il s\'avère que; a judgement with il est dommage, regrettable, temps que; and distance with il a été décidé que, il est demandé que, il est interdit de; keeps impersonal verbs singular (il manque deux chaises) and writes an official note that grades its claims from certain to doubtful',
  prereqUnitIds: ['b1.15', 'b1.16', 'b1.18', 'b1.22', 'b2.05', 'b2.06'],
} as const;

export const LESSON_ID = 'b2.20.l1';
export const THEME = 'opinions-et-avis';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[2000, 2199]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order. Only B1 1-39 and
 *  B2 1-26 are cited (17 to 21 publish together with this lesson).
 * ══════════════════════════════════════════════════════════════════════════ */

export const DECL_UNIT = 'b1.15';
export const SUBJ_INF_UNIT = 'b1.16';
export const PASSIF_UNIT = 'b1.18';
export const CEST_UNIT = 'b1.22';
export const SUBJ_PASSE_UNIT = 'b2.05';
export const MODES_UNIT = 'b2.06';
export const INFINITIVES_UNIT = 'b2.14';
export const CAUSE_UNIT = 'b2.15';
export const CONCESSION_UNIT = 'b2.16';
export const NEGATION_UNIT = 'b2.21';
export const ACADEMIQUE_UNIT = 'b2.22';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const DECL_REF = refFr(DECL_UNIT);
export const SUBJ_INF_REF = refFr(SUBJ_INF_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const CEST_REF = refFr(CEST_UNIT);
export const SUBJ_PASSE_REF = refFr(SUBJ_PASSE_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const INFINITIVES_REF = refFr(INFINITIVES_UNIT);
export const CAUSE_REF = refFr(CAUSE_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const NEGATION_REF = refFr(NEGATION_UNIT);
export const ACADEMIQUE_REF = refFr(ACADEMIQUE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B115_REFRAME, REFRAME_EN as B115_REFRAME_EN } from '../b1/subjonctif-declencheurs-corpus.ts';
export { REFRAME as B116_REFRAME, REFRAME_EN as B116_REFRAME_EN } from '../b1/subjonctif-infinitif-corpus.ts';
export { REFRAME as B118_REFRAME, REFRAME_EN as B118_REFRAME_EN } from '../b1/voix-passive-corpus.ts';
export { REFRAME as B122_REFRAME, REFRAME_EN as B122_REFRAME_EN } from '../b1/cest-il-est-corpus.ts';
export { REFRAME as B205_REFRAME, REFRAME_EN as B205_REFRAME_EN } from './subjonctif-passe-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B214_REFRAME, REFRAME_EN as B214_REFRAME_EN } from './constructions-infinitives-corpus.ts';
export { REFRAME as B216_REFRAME, REFRAME_EN as B216_REFRAME_EN } from './concession-avancee-corpus.ts';
export { REFRAME as B222_REFRAME, REFRAME_EN as B222_REFRAME_EN } from './style-academique-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE CURSEUR D'ENGAGEMENT. The impersonal il points at no one: it is an
 *  empty seat the French sentence needs. What follows it is a cursor that
 *  says how far the speaker commits: an obligation or a mere suggestion
 *  (il faut que / il suffit que), a certainty or a guess (il est certain /
 *  il est possible), a judgement the speaker takes on (il est dommage), or a
 *  decision nobody signs (il a été décidé). The mood follows the cursor: an
 *  expression that asserts takes the indicative, one that demands, doubts or
 *  judges takes the subjunctive (lesson 6 in B2's reframe, quoted in act 2).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le il ne désigne personne : ce qui suit dit jusqu'où tu t'engages.";
export const REFRAME_EN = 'The il points at no one: what follows says how far you commit.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Après il est + adjectif + que, le subjonctif.',
    why: 'False at the core of the lesson: il est certain, clair, évident, probable, vrai, établi que take the indicative (acts 5, 6, 11), and il a été décidé, il est rappelé, il est prévu que too (act 9).',
  },
  {
    text: "Ce n'est pas le verbe qui décide : c'est l'expression devant « que ».",
    why: 'Lesson 15 in B1’s reframe, still true, so it is QUOTED in act 2 rather than replaced. It says nothing about the infinitive family (act 3), the singular agreement (act 10) or the grading from certain to doubtful that a B2 report needs.',
  },
  {
    text: 'Le il impersonnel sert à être poli.',
    why: 'True of il est demandé aux résidents de on a notice, false of il manque deux chaises, il est probable que or il faut que tu partes, which are neither polite nor impolite.',
  },
  {
    text: 'Plus c’est sûr, plus c’est l’indicatif.',
    why: 'True of the probability scale (act 5), but il faut que (a certain obligation) and il est dommage que (a judgement on a certain fact) take the subjunctive: certainty of the fact is not what picks the mood, commitment to asserting it is.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const OA1 = (n: number) => `fr.b1.opinions-et-avis.${n}`;
const OA2 = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const DPO = (n: number) => `fr.b1.description-personnes-objets.${n}`;
const UNI = (n: number) => `fr.b2.universite.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    OA1(1201),                                 // Il faut que tu viennes avec nous.  (lesson 15 in B1)
    DPO(1102),                                 // Il est difficile de trouver un logement à Montréal.  (lesson 22 in B1)
    DPO(1103),                                 // C'est difficile de trouver un logement.  (lesson 22 in B1, spoken)
    OA2(1846),                                 // Il est clair que la circulation va baisser.  (lesson 6 in B2)
  ],
  act3: [
    OA1(1482),                                 // Il vaut mieux réserver à l’avance le week-end.  (lesson 16 in B1)
    OA1(1483),                                 // Il vaut mieux que tu réserves à l’avance ce week-end.  (lesson 16 in B1)
    UNI(1031),                                 // Il convient d'abord de préciser les termes du débat.  (lesson 22 in B2)
    UNI(1135),                                 // Il importe de distinguer les stages courts des stages longs.  (lesson 22 in B2)
    OA1(1254),                                 // La nécessité se dit avec il : il faut, il est important, il vaut mieux.  (grammar card)
  ],
  act4: [
    OA1(1246),                                 // Il est nécessaire que chaque parent signe le formulaire.  (lesson 15 in B1)
    OA1(1249),                                 // Il est essentiel que le dossier parte aujourd’hui.  (lesson 15 in B1)
    OA1(1248),                                 // Il vaut mieux que tu leur téléphones toi-même.  (lesson 15 in B1)
    'fr.b2.emotions.1317',                     // Il est indispensable que les clés aient été rendues à l'agence.  (lesson 5 in B2)
  ],
  act5: [
    OA2(1848),                                 // Il est probable que les loyers vont augmenter.  (lesson 6 in B2)
    OA2(1849),                                 // Il est peu probable que les loyers soient gelés.  (lesson 6 in B2)
    OA2(1850),                                 // Il se peut que la mairie revienne sur sa décision.  (lesson 6 in B2)
    OA2(1854),                                 // Il est exclu que les travaux soient finis avant l'été.  (lesson 6 in B2)
    UNI(1094),                                 // Il n'est pas exclu que d'autres facteurs jouent un rôle.  (lesson 22 in B2)
    OA1(1293),                                 // Il est possible que prend le subjonctif, il est probable que ne le prend pas.  (grammar card)
  ],
  act6: [
    OA2(1858),                                 // Il n'est pas certain que le budget suffise.  (lesson 6 in B2)
    OA2(1847),                                 // Il n'est pas clair que la circulation puisse baisser.  (lesson 6 in B2)
    OA1(1286),                                 // Il n’est pas certain que le vol parte à l’heure.  (lesson 15 in B1)
    OA2(1838),                                 // Avec l'inversion, le subjonctif doute ; l'indicatif demande un avis.  (grammar card, lesson 6 in B2)
  ],
  act7: [
    OA2(1856),                                 // Il semble que les habitants soient partagés.  (lesson 6 in B2)
    OA2(1857),                                 // Il me semble que les habitants sont partagés.  (lesson 6 in B2)
    OA1(1359),                                 // Il me semble que cette adresse est fausse.  (lesson 15 in B1)
    OA1(1364),                                 // Il paraît que le loyer va encore augmenter.  (lesson 15 in B1)
    'fr.b2.connecteurs-logiques.1966',         // Il semblerait que les deux événements soient liés.  (lesson 15 in B2)
    OA1(1367),                                 // Il semble que prend le subjonctif, il me semble que ne le prend pas.  (grammar card)
  ],
  act8: [
    OA1(1271),                                 // C’est dommage que le musée ferme à cinq heures.  (lesson 15 in B1)
    OA1(1247),                                 // Il est temps que nous prenions une décision.  (lesson 15 in B1)
    DPO(1156),                                 // Il est temps de partir.  (lesson 22 in B1)
    'fr.b2.emotions.1256',                     // Il est normal que tu te sois senti perdu.  (lesson 5 in B2)
    OA1(1275),                                 // Le sentiment porte sur un fait sûr, et il demande quand même le subjonctif.  (grammar card)
  ],
  act9: [
    'fr.b1.faits-et-procedures.1072',          // Il est interdit de fumer dans les chambres.  (lesson 18 in B1)
    DPO(1113),                                 // Il est conseillé d'arriver en avance.  (lesson 22 in B1)
    'fr.b2.faits-et-procedures.1251',          // Il est interdit de sortir avant d'avoir rendu sa copie.  (lesson 14 in B2)
  ],
  act10: [
    'fr.b2.faits-et-procedures.1204',          // Il s'agit maintenant de trouver une solution.  (lesson 14 in B2)
    'fr.b2.faits-et-procedures.1311',          // Il s'agit de remplir ce formulaire avant lundi.  (lesson 14 in B2)
    'fr.b1.comparaisons.1152',                 // Il en va de même pour les loyers.  (lesson 24 in B1)
    'fr.b2.langue-soignee.1404',               // Quand le camion est arrivé, il manquait trois palettes.  (lesson 10 in B2)
  ],
  act11: [
    UNI(1099),                                 // Il est probable que ce chiffre est sous-estimé.  (lesson 22 in B2)
    UNI(1092),                                 // Il est peu probable que ce seuil soit le même partout.  (lesson 22 in B2)
    UNI(1064),                                 // Il semblerait qu'un emploi de quelques heures aide certains étudiants.  (lesson 22 in B2)
    'fr.b2.connecteurs-logiques.1973',         // Il est certain que la fermeture de l'usine a pesé sur l'emploi.  (lesson 15 in B2)
  ],
  act12: [
    'fr.b2.connecteurs-logiques.2154',         // Il est vrai que l'application fait gagner du temps. Il n'en reste pas moins qu'elle exclut une partie du public.  (lesson 16 in B2)
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  OA1(1254),                                   // grammar card, flashcard only
  OA1(1293),                                   // grammar card, flashcard only
  OA2(1838),                                   // grammar card, flashcard + review
  OA1(1367),                                   // grammar card, flashcard only
  OA1(1275),                                   // grammar card, flashcard only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `gap` a gapfill card whose front gaps the form and
 *  names the cue; `rule` a grammar card. Every row carries fr, en, ipa and
 *  respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const GP = ['tournures-impersonnelles'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes, ...extra });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · UN IL QUI NE DÉSIGNE PERSONNE (.2000-.2013) ─────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2000, 'Il a été décidé que la toiture serait refaite au printemps.', 'It was decided that the roof would be redone in the spring.',
    '/i.la.e.te de.si.de kə la twa.tyʁ sə.ʁɛ ʁə.fɛt o pʁɛ̃.tɑ̃/', 'ee-la-ay-TAY day-see-DAY | kuh la twa-TÜR | suh-reh ruh-FET | oh prehⁿ-TAHⁿ', ['lecture', 'distance'], FCVR, SO),
  sent(2001, "Il est rappelé aux résidents qu'il est interdit de fumer dans les couloirs.", 'Residents are reminded that smoking is forbidden in the corridors.',
    '/i.lɛ ʁa.pə.le o ʁe.zi.dɑ̃ ki.lɛ.tɛ̃.tɛʁ.di də fy.me dɑ̃ le ku.lwaʁ/', 'ee-leh ra-puh-LAY oh ray-zee-DAHⁿ | kee-leh-tehⁿ-tehr-DEE | duh fü-MAY | dahⁿ lay koo-LWAR', ['lecture', 'distance'], FCVDR, SO),
  sent(2002, "Il est probable que les charges augmenteront l'an prochain.", 'The service charges will probably go up next year.',
    '/i.lɛ pʁɔ.babl kə le ʃaʁʒ oɡ.mɑ̃t.ʁɔ̃ lɑ̃ pʁɔ.ʃɛ̃/', 'ee-leh pro-BABL | kuh lay SHARZH | og-mahⁿt-ROHⁿ | lahⁿ pro-SHEHⁿ', ['lecture', 'echelle', 'indicatif'], FCVDR),
  sent(2003, "Il est possible qu'il y ait des infiltrations cet hiver.", 'There may be leaks this winter.',
    '/i.lɛ pɔ.sibl kil i ɛ de.zɛ̃.fil.tʁa.sjɔ̃ sɛ.ti.vɛʁ/', 'ee-leh po-SEEBL | keel ee EH | day-zehⁿ-feel-tra-SYOHⁿ | seh-tee-VEHR', ['scene', 'echelle', 'subjonctif'], FCVDR),
  sent(2004, "Il est certain qu'il y aura des infiltrations cet hiver.", 'There will certainly be leaks this winter.',
    '/i.lɛ sɛʁ.tɛ̃ kil i o.ʁa de.zɛ̃.fil.tʁa.sjɔ̃ sɛ.ti.vɛʁ/', 'ee-leh sehr-TEHⁿ | keel ee oh-RA | day-zehⁿ-feel-tra-SYOHⁿ | seh-tee-VEHR', ['scene', 'echelle', 'indicatif']),
  sent(2005, 'Il faut que chaque copropriétaire vide son casier avant la fin du mois.', 'Every co-owner must empty their storage locker before the end of the month.',
    '/il fo kə ʃak kɔ.pʁɔ.pʁi.je.tɛʁ vid sɔ̃ ka.zje a.vɑ̃ la fɛ̃ dy mwa/', 'eel foh kuh shak ko-pro-pree-yay-TEHR | VEED sohⁿ ka-ZYAY | a-vahⁿ la fehⁿ dü MWA', ['lecture', 'necessite']),
  sent(2006, 'Il est dommage que si peu de résidents soient venus ce soir.', 'It is a pity so few residents came this evening.',
    '/i.lɛ dɔ.maʒ kə si pø də ʁe.zi.dɑ̃ swa və.ny sə swaʁ/', 'ee-leh do-MAZH | kuh see PEU duh ray-zee-DAHⁿ | swa vuh-NÜ | suh SWAR', ['lecture', 'jugement']),
  rule(2007, REFRAME, REFRAME_EN,
    '/lə il nə de.ziɲ pɛʁ.sɔn sə ki sɥi di ʒys.ku ty tɑ̃.ɡaʒ/',
    'luh EEL | nuh day-zeeny pehr-SONN | suh kee SWEE | dee zhüs-KOO | tü tahⁿ-GAZH',
    'Qui désigne le il de « il faut », « il est probable » ou « il manque » ?',
    "Personne : c'est un sujet vide, que le français exige. Ce qui compte, c'est l'expression qui suit : elle dit si tu affirmes, si tu doutes, si tu exiges ou si tu juges, et elle choisit le mode.",
    ['reframe']),
  sent(2008, 'Il manque encore deux signatures au registre.', 'Two signatures are still missing from the register.',
    '/il mɑ̃k ɑ̃.kɔʁ dø si.ɲa.tyʁ o ʁə.ʒistʁ/', 'eel MAHⁿK ahⁿ-KOR | deu see-nya-TÜR | oh ruh-ZHEESTR', ['lecture', 'accord'], FCVDR),
  sent(2009, "Il s'agit d'une décision importante pour tout l'immeuble.", 'This is an important decision for the whole building.',
    '/il sa.ʒi dyn de.si.zjɔ̃ ɛ̃.pɔʁ.tɑ̃t puʁ tu li.mœbl/', 'eel sa-ZHEE | dünn day-see-ZYOHⁿ ehⁿ-por-TAHⁿT | poor too lee-MUHBL', ['lecture', 'distance']),
  sent(2010, "Il est à noter que l'ascenseur sera fermé deux jours.", 'Please note that the lift will be out of service for two days.',
    '/i.lɛ.ta nɔ.te kə la.sɑ̃.sœʁ sə.ʁa fɛʁ.me dø ʒuʁ/', 'ee-leh-ta no-TAY | kuh la-sahⁿ-SUHR | suh-ra fehr-MAY | deu ZHOOR', ['lecture', 'distance'], FCVR, SO),
  sent(2011, "Il convient d'en discuter avant le vote de décembre.", 'It should be discussed before the December vote.',
    '/il kɔ̃.vjɛ̃ dɑ̃ dis.ky.te a.vɑ̃ lə vɔt də de.sɑ̃bʁ/', 'eel kohⁿ-VYEHⁿ | dahⁿ dees-kü-TAY | a-vahⁿ luh VOT | duh day-SAHⁿBR', ['lecture', 'necessite'], FCVR, SO),
  sent(2012, 'Il reste trois places au stationnement.', 'Three spaces are left in the car park.',
    '/il ʁɛst tʁwa plas o sta.sjɔn.mɑ̃/', 'eel REST trwa PLASS | oh sta-syonn-MAHⁿ', ['lecture', 'accord']),
  sent(2013, "Il se peut qu'il y ait des infiltrations, mais rien n'est sûr.", 'There may be leaks, but nothing is certain.',
    '/il sə pø kil i ɛ de.zɛ̃.fil.tʁa.sjɔ̃ mɛ ʁjɛ̃ nɛ syʁ/', 'eel suh PEU | keel ee EH | day-zehⁿ-feel-tra-SYOHⁿ | meh ryehⁿ neh SÜR', ['scene', 'echelle']),
];

/* ── ACT 2 · QUATRE FAMILLES, DEUX MODES (.2016-.2030) ──────────────────── */

export const ACT2_ROWS: Row[] = [
  rule(2016, 'Nécessité, probabilité, jugement, distance : quatre familles, et chacune choisit son mode.', 'Necessity, probability, judgement, distance: four families, and each one picks its mood.',
    '/ne.se.si.te pʁɔ.ba.bi.li.te ʒyʒ.mɑ̃ dis.tɑ̃s ka.tʁə fa.mij e ʃa.kyn ʃwa.zi sɔ̃ mɔd/',
    'nay-say-see-TAY | pro-ba-bee-lee-TAY | zhüzh-MAHⁿ | dees-TAHⁿS | ka-truh fa-MEEY | ay sha-KÜNN | shwa-ZEE sohⁿ MOD',
    'Quelles sont les quatre familles de tournures impersonnelles ?',
    "La nécessité (il faut que + subjonctif), la probabilité (probable + indicatif, possible + subjonctif), le jugement (il est dommage que + subjonctif) et la distance (il a été décidé que + indicatif).",
    ['carte']),
  sent(2017, 'Il faut que la bibliothèque soit ouverte le dimanche.', 'The library has to be open on Sundays.',
    '/il fo kə la bi.bli.jɔ.tɛk swa.tu.vɛʁt lə di.mɑ̃ʃ/', 'eel foh kuh la bee-blee-yo-TEK | swa-too-VEHRT | luh dee-MAHⁿSH', ['carte', 'necessite'], FCVDR),
  sent(2018, 'Il est probable que la bibliothèque sera ouverte le dimanche.', 'The library will probably be open on Sundays.',
    '/i.lɛ pʁɔ.babl kə la bi.bli.jɔ.tɛk sə.ʁa u.vɛʁt lə di.mɑ̃ʃ/', 'ee-leh pro-BABL | kuh la bee-blee-yo-TEK | suh-ra oo-VEHRT | luh dee-MAHⁿSH', ['carte', 'echelle', 'indicatif']),
  sent(2019, 'Il est possible que la bibliothèque soit ouverte le dimanche.', 'The library may be open on Sundays.',
    '/i.lɛ pɔ.sibl kə la bi.bli.jɔ.tɛk swa.tu.vɛʁt lə di.mɑ̃ʃ/', 'ee-leh po-SEEBL | kuh la bee-blee-yo-TEK | swa-too-VEHRT | luh dee-MAHⁿSH', ['carte', 'echelle', 'subjonctif'], FCVDR),
  sent(2020, 'Il est dommage que la bibliothèque ne soit pas ouverte le dimanche.', 'It is a pity the library is not open on Sundays.',
    '/i.lɛ dɔ.maʒ kə la bi.bli.jɔ.tɛk nə swa pa.zu.vɛʁt lə di.mɑ̃ʃ/', 'ee-leh do-MAZH | kuh la bee-blee-yo-TEK | nuh swa pa-zoo-VEHRT | luh dee-MAHⁿSH', ['carte', 'jugement']),
  sent(2021, 'Il a été décidé que la bibliothèque serait ouverte le dimanche.', 'It was decided that the library would be open on Sundays.',
    '/i.la.e.te de.si.de kə la bi.bli.jɔ.tɛk sə.ʁɛ.tu.vɛʁt lə di.mɑ̃ʃ/', 'ee-la-ay-TAY day-see-DAY | kuh la bee-blee-yo-TEK | suh-reh-too-VEHRT | luh dee-MAHⁿSH', ['carte', 'distance'], FCVR, SO),
  sent(2022, 'Il est certain que la bibliothèque sera ouverte le dimanche.', 'The library will definitely be open on Sundays.',
    '/i.lɛ sɛʁ.tɛ̃ kə la bi.bli.jɔ.tɛk sə.ʁa u.vɛʁt lə di.mɑ̃ʃ/', 'ee-leh sehr-TEHⁿ | kuh la bee-blee-yo-TEK | suh-ra oo-VEHRT | luh dee-MAHⁿSH', ['carte', 'echelle', 'indicatif']),
  rule(2023, 'Le il des tournures impersonnelles ne remplace aucun nom.', 'The il of impersonal expressions stands for no noun.',
    '/lə il de tuʁ.nyʁ ɛ̃.pɛʁ.sɔ.nɛl nə ʁɑ̃.plas o.kœ̃ nɔ̃/',
    'luh EEL | day toor-NÜR ehⁿ-pehr-so-NELL | nuh rahⁿ-PLASS oh-kuhⁿ NOHⁿ',
    "« La bibliothèque ? Il faut qu'elle soit ouverte. » Le il de il faut remplace-t-il la bibliothèque ?",
    "Non. La bibliothèque, c'est elle. Le il de il faut ne remplace rien : c'est un sujet vide, toujours masculin singulier.",
    ['vide']),
  gap(2024, 'Il est possible que la salle soit fermée lundi.', 'The room may be closed on Monday.',
    '/i.lɛ pɔ.sibl kə la sal swa fɛʁ.me lœ̃.di/', 'ee-leh po-SEEBL | kuh la SAL | swa fehr-MAY | luhⁿ-DEE',
    'Il est possible que la salle ___ fermée lundi. (être · possible)',
    "Possible n'affirme pas : le subjonctif, soit. EN: possible takes the subjunctive.",
    ['carte', 'subjonctif'], FCVDR),
  gap(2025, 'Il est probable que la salle sera fermée lundi.', 'The room will probably be closed on Monday.',
    '/i.lɛ pʁɔ.babl kə la sal sə.ʁa fɛʁ.me lœ̃.di/', 'ee-leh pro-BABL | kuh la SAL | suh-ra fehr-MAY | luhⁿ-DEE',
    'Il est probable que la salle ___ fermée lundi. (être, au futur · probable)',
    "Probable affirme, avec prudence : l'indicatif, ici le futur, sera. EN: probable takes the indicative.",
    ['carte', 'indicatif']),
  sent(2026, 'Il est clair que les habitants veulent des horaires plus larges.', 'It is clear that residents want longer opening hours.',
    '/i.lɛ klɛʁ kə le.za.bi.tɑ̃ vœl de.zɔ.ʁɛʁ ply laʁʒ/', 'ee-leh KLEHR | kuh lay-za-bee-TAHⁿ | vuhl day-zo-REHR plü LARZH', ['carte', 'echelle']),
  sent(2027, "C'est dommage que la bibliothèque ferme si tôt.", "It's a pity the library closes so early. (spoken)",
    '/sɛ dɔ.maʒ kə la bi.bli.jɔ.tɛk fɛʁm si to/', 'seh do-MAZH | kuh la bee-blee-yo-TEK | fehrm see TOH', ['carte', 'oral', 'registre']),
  sent(2028, 'Il vaut mieux réserver sa place la veille.', 'It is best to book your seat the day before.',
    '/il vo mjø ʁe.zɛʁ.ve sa plas la vɛj/', 'eel voh MYEU | ray-zehr-VAY sa PLASS | la VEHY', ['carte', 'necessite'], FCVDR),
  sent(2029, "Il suffit de présenter sa carte à l'accueil.", 'You only need to show your card at the front desk.',
    '/il sy.fi də pʁe.zɑ̃.te sa kaʁt a la.kœj/', 'eel sü-FEE | duh pray-zahⁿ-TAY sa KART | a la-KUHY', ['carte', 'necessite']),
  sent(2030, 'Il est interdit de manger dans la salle de lecture.', 'Eating is not allowed in the reading room.',
    '/i.lɛ.tɛ̃.tɛʁ.di də mɑ̃.ʒe dɑ̃ la sal də lɛk.tyʁ/', 'ee-leh-tehⁿ-tehr-DEE | duh mahⁿ-ZHAY | dahⁿ la SAL duh lek-TÜR', ['carte', 'distance']),
];

/* ── ACT 3 · IL FAUT, IL SUFFIT DE, IL CONVIENT DE (.2032-.2047) ────────── */

export const ACT3_ROWS: Row[] = [
  sent(2032, "Pour s'inscrire, il faut présenter une pièce d'identité.", 'To register, you have to show an identity document.',
    '/puʁ sɛ̃s.kʁiʁ il fo pʁe.zɑ̃.te yn pjɛs di.dɑ̃.ti.te/', 'poor sehⁿs-KREER | eel foh pray-zahⁿ-TAY | ünn PYESS dee-dahⁿ-tee-TAY', ['infinitif', 'necessite'], FCVDR),
  sent(2033, 'Il suffit de remplir le formulaire en ligne.', 'You just need to fill in the form online.',
    '/il sy.fi də ʁɑ̃.pliʁ lə fɔʁ.my.lɛʁ ɑ̃ liɲ/', 'eel sü-FEE | duh rahⁿ-PLEER luh for-mü-LEHR | ahⁿ LEENY', ['infinitif', 'suffire'], FCVDR),
  sent(2034, "Il suffit d'un clic pour prendre rendez-vous.", 'One click is all it takes to book an appointment.',
    '/il sy.fi dœ̃ klik puʁ pʁɑ̃dʁ ʁɑ̃.de.vu/', 'eel sü-FEE | duhⁿ KLEEK | poor prahⁿdr rahⁿ-day-VOO', ['nom', 'suffire']),
  sent(2035, "Il convient de signaler tout changement d'adresse dans les huit jours.", 'Any change of address should be reported within eight days.',
    '/il kɔ̃.vjɛ̃ də si.ɲa.le tu ʃɑ̃ʒ.mɑ̃ da.dʁɛs dɑ̃ le ɥi ʒuʁ/', 'eel kohⁿ-VYEHⁿ | duh see-nya-LAY | too shahⁿzh-MAHⁿ da-DRESS | dahⁿ lay wee ZHOOR', ['infinitif', 'registre'], FCVR, SO),
  sent(2036, "Il y a lieu de vérifier la date d'expiration du permis.", 'The expiry date of the permit should be checked.',
    '/il i a ljø də ve.ʁi.fje la dat dɛk.spi.ʁa.sjɔ̃ dy pɛʁ.mi/', 'eel ee a LYEU | duh vay-ree-FYAY | la DAT dek-spee-ra-SYOHⁿ | dü pehr-MEE', ['infinitif', 'administratif'], FCVR, SO),
  sent(2037, "Il n'y a pas lieu de s'inquiéter.", 'There is no cause for concern.',
    '/il nja pa ljø də sɛ̃.kje.te/', 'eel nya pa LYEU | duh sehⁿ-kyay-TAY', ['infinitif', 'administratif'], FCVDR, SO),
  sent(2038, 'Il vaut mieux prendre rendez-vous le matin.', 'It is better to book an appointment in the morning.',
    '/il vo mjø pʁɑ̃dʁ ʁɑ̃.de.vu lə ma.tɛ̃/', 'eel voh MYEU | prahⁿdr rahⁿ-day-VOO | luh ma-TEHⁿ', ['infinitif', 'conseil']),
  sent(2039, 'Il importe de conserver une copie de chaque document.', 'It is important to keep a copy of every document.',
    '/i.lɛ̃.pɔʁt də kɔ̃.sɛʁ.ve yn kɔ.pi də ʃak dɔ.ky.mɑ̃/', 'ee-lehⁿ-PORT | duh kohⁿ-sehr-VAY | ünn ko-PEE | duh shak do-kü-MAHⁿ', ['infinitif', 'registre'], FCVR, SO),
  sent(2040, 'Il te faut un permis de séjour valable.', 'You need a valid residence permit.',
    '/il tə fo œ̃ pɛʁ.mi də se.ʒuʁ va.labl/', 'eel tuh FOH | uhⁿ pehr-MEE duh say-ZHOOR | va-LABL', ['nom', 'necessite']),
  sent(2041, "Il faut que ton employeur remplisse l'attestation.", 'Your employer has to fill in the certificate.',
    '/il fo kə tɔ̃.nɑ̃.plwa.jœʁ ʁɑ̃.plis la.tɛs.ta.sjɔ̃/', 'eel foh kuh toh-nahⁿ-plwa-YUHR | rahⁿ-PLEESS | la-tes-ta-SYOHⁿ', ['sujet', 'subjonctif'], FCVDR),
  rule(2042, "Personne de précis : l'infinitif. Quelqu'un de précis : que et le subjonctif.", 'No one in particular: the infinitive. Someone in particular: que and the subjunctive.',
    '/pɛʁ.sɔn də pʁe.si lɛ̃.fi.ni.tif kɛl.kœ̃ də pʁe.si kə e lə syb.ʒɔ̃k.tif/',
    'pehr-SONN duh pray-SEE | lehⁿ-fee-nee-TEEF | kel-KUHⁿ duh pray-SEE | kuh ay luh süb-zhohⁿk-TEEF',
    "« Il faut … l'attestation » : c'est ton employeur qui la remplit. Infinitif, ou que ?",
    "Que : quelqu'un de précis, ton employeur. Il faut que ton employeur remplisse l'attestation. Pour une règle qui vaut pour tout le monde : il faut remplir l'attestation.",
    ['sujet']),
  gap(2043, 'Il vaut mieux arriver dix minutes en avance.', 'It is best to arrive ten minutes early.',
    '/il vo mjø a.ʁi.ve di mi.nyt ɑ̃.na.vɑ̃s/', 'eel voh MYEU | a-ree-VAY dee mee-NÜT | ahⁿ-na-VAHⁿS',
    'Il vaut mieux ___ dix minutes en avance. (arriver · un conseil pour tous)',
    "Personne de précis : l'infinitif, sans de. Il vaut mieux arriver. EN: no de after il vaut mieux.",
    ['infinitif', 'conseil'], FCVDR),
  gap(2044, 'Il convient de joindre une photo récente au dossier.', 'A recent photo should be attached to the file.',
    '/il kɔ̃.vjɛ̃ də ʒwɛ̃dʁ yn fɔ.to ʁe.sɑ̃t o do.sje/', 'eel kohⁿ-VYEHⁿ | duh zhwehⁿdr ünn fo-TOH ray-SAHⁿT | oh do-SYAY',
    'Il convient ___ joindre une photo récente au dossier. (le petit mot)',
    "Il convient de + infinitif, comme il suffit de et il y a lieu de. EN: il convient de.",
    ['infinitif', 'registre'], FCVR, SO),
  sent(2045, 'Il faudra fournir une traduction certifiée.', 'A certified translation will have to be provided.',
    '/il fo.dʁa fuʁ.niʁ yn tʁa.dyk.sjɔ̃ sɛʁ.ti.fje/', 'eel foh-DRA | foor-NEER ünn tra-dük-SYOHⁿ | sehr-tee-FYAY', ['infinitif', 'temps']),
  sent(2046, 'Il faudrait prévoir une heure pour le rendez-vous.', 'You should allow an hour for the appointment.',
    '/il fo.dʁɛ pʁe.vwaʁ y.nœʁ puʁ lə ʁɑ̃.de.vu/', 'eel foh-DREH | pray-VWAR ü-NUHR | poor luh rahⁿ-day-VOO', ['infinitif', 'conseil']),
  sent(2047, "Il ne faut pas oublier de signer chaque page.", 'You must not forget to sign each page.',
    '/il nə fo pa.zu.bli.je də si.ɲe ʃak paʒ/', 'eel nuh foh pa-zoo-blee-YAY | duh see-NYAY shak PAZH', ['infinitif', 'interdit'], FCVDR),
];

/* ── ACT 4 · IL FAUT QUE, IL IMPORTE QUE (.2048-.2063) ───────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(2048, 'Il est indispensable que chaque patient ait son bracelet au poignet.', 'It is essential that every patient has their wristband on.',
    '/i.lɛ.tɛ̃.dis.pɑ̃.sabl kə ʃak pa.sjɑ̃ ɛ sɔ̃ bʁas.lɛ o pwa.ɲɛ/', 'ee-leh-tehⁿ-dees-pahⁿ-SABL | kuh shak pa-SYAHⁿ | EH sohⁿ brass-LEH | oh pwa-NYEH', ['subjonctif', 'necessite'], FCVDR),
  sent(2049, 'Il est nécessaire que chaque visiteur mette un masque.', 'Every visitor needs to wear a mask.',
    '/i.lɛ ne.se.sɛʁ kə ʃak vi.zi.tœʁ mɛt œ̃ mask/', 'ee-leh nay-say-SEHR | kuh shak vee-zee-TUHR | MET uhⁿ MASK', ['subjonctif', 'necessite']),
  sent(2050, "Il importe que l'équipe de nuit soit prévenue avant vingt heures.", 'It is important that the night team be told before 8 p.m.',
    '/i.lɛ̃.pɔʁt kə le.kip də nɥi swa pʁev.ny a.vɑ̃ vɛ̃.tœʁ/', 'ee-lehⁿ-PORT | kuh lay-KEEP duh NWEE | swa prayv-NÜ | a-vahⁿ vehⁿ-TUHR', ['subjonctif', 'registre'], FCVR, SO),
  sent(2051, 'Il est essentiel que chaque dose soit vérifiée deux fois.', 'It is essential that every dose is checked twice.',
    '/i.lɛ.te.sɑ̃.sjɛl kə ʃak doz swa ve.ʁi.fje dø fwa/', 'ee-leh-tay-sahⁿ-SYEL | kuh shak DOHZ | swa vay-ree-FYAY | deu FWA', ['subjonctif', 'necessite'], FCVDR),
  sent(2052, "Il suffit que tu fasses une photo de l'ordonnance.", 'All you need to do is take a photo of the prescription.',
    '/il sy.fi kə ty fas yn fɔ.to də lɔʁ.dɔ.nɑ̃s/', 'eel sü-FEE | kuh tü FASS | ünn fo-TOH | duh lor-do-NAHⁿS', ['subjonctif', 'suffire'], FCVDR),
  sent(2053, 'Il vaut mieux que tu prennes ta pause avant minuit.', 'You had better take your break before midnight.',
    '/il vo mjø kə ty pʁɛn ta poz a.vɑ̃ mi.nɥi/', 'eel voh MYEU | kuh tü PRENN ta POHZ | a-vahⁿ mee-NWEE', ['subjonctif', 'conseil']),
  sent(2054, 'Il ne faut pas que tu partes avant la relève.', 'You must not leave before the handover.',
    '/il nə fo pa kə ty paʁt a.vɑ̃ la ʁə.lɛv/', 'eel nuh foh PA | kuh tü PART | a-vahⁿ la ruh-LEV', ['negation', 'interdit'], FCVDR),
  sent(2055, "Il n'est pas nécessaire que tu sois là avant sept heures.", 'You do not need to be there before seven.',
    '/il nɛ pa ne.se.sɛʁ kə ty swa la a.vɑ̃ sɛ.tœʁ/', 'eel neh pa nay-say-SEHR | kuh tü swa LA | a-vahⁿ seh-TUHR', ['negation', 'facultatif'], FCVDR),
  sent(2056, "Tu n'es pas obligée de rester après la relève.", 'You do not have to stay after the handover.',
    '/ty nɛ pa.zɔ.bli.ʒe də ʁɛs.te a.pʁɛ la ʁə.lɛv/', 'tü neh pa-zo-blee-ZHAY | duh res-TAY | a-preh la ruh-LEV', ['negation', 'facultatif']),
  rule(2057, "Il ne faut pas que interdit ; il n'est pas nécessaire que dispense.", "Il ne faut pas que forbids; il n'est pas nécessaire que lets you off.",
    '/il nə fo pa kə ɛ̃.tɛʁ.di il nɛ pa ne.se.sɛʁ kə dis.pɑ̃s/',
    'eel nuh foh pa KUH | ehⁿ-tehr-DEE | eel neh pa nay-say-SEHR KUH | dees-PAHⁿS',
    "« You don't have to come » : il ne faut pas que tu viennes, ou il n'est pas nécessaire que tu viennes ?",
    "Il n'est pas nécessaire que tu viennes : tu es dispensé. « Il ne faut pas que tu viennes » voudrait dire : surtout, ne viens pas.",
    ['negation']),
  rule(2058, 'Il suffit que, il vaut mieux que, il faut que : du minimum à l\'obligation.', 'Il suffit que, il vaut mieux que, il faut que: from the bare minimum to the obligation.',
    '/il sy.fi kə il vo mjø kə il fo kə dy mi.ni.mɔm a lɔ.bli.ɡa.sjɔ̃/',
    'eel sü-FEE KUH | eel voh MYEU KUH | eel foh KUH | dü mee-nee-MOMM | a lo-blee-ga-SYOHⁿ',
    'Laquelle demande le moins : il suffit que, il vaut mieux que ou il faut que ?',
    "Il suffit que : une seule condition, et c'est assez. Il vaut mieux que : un conseil. Il faut que, il est indispensable que : une obligation. Toutes prennent le subjonctif.",
    ['echelle']),
  gap(2059, "Il faut que l'équipe de jour remplisse le registre avant de partir.", 'The day team must fill in the register before leaving.',
    '/il fo kə le.kip də ʒuʁ ʁɑ̃.plis lə ʁə.ʒistʁ a.vɑ̃ də paʁ.tiʁ/', 'eel foh kuh lay-KEEP duh ZHOOR | rahⁿ-PLEESS luh ruh-ZHEESTR | a-vahⁿ duh par-TEER',
    "Il faut que l'équipe de jour ___ le registre avant de partir. (remplir)",
    'Il faut que + subjonctif : remplisse. EN: remplisse.',
    ['subjonctif', 'necessite'], FCVDR),
  gap(2060, 'Il est indispensable que le médecin de garde soit joignable toute la nuit.', 'It is essential that the doctor on call can be reached all night.',
    '/i.lɛ.tɛ̃.dis.pɑ̃.sabl kə lə med.sɛ̃ də ɡaʁd swa ʒwa.ɲabl tut la nɥi/', 'ee-leh-tehⁿ-dees-pahⁿ-SABL | kuh luh med-SEHⁿ duh GARD | swa zhwa-NYABL | toot la NWEE',
    'Il est indispensable que le médecin de garde ___ joignable toute la nuit. (être)',
    'Indispensable demande le subjonctif, comme il faut : soit. EN: soit.',
    ['subjonctif', 'necessite']),
  sent(2061, 'Il est souhaitable que chaque famille prévienne avant de venir.', 'Ideally, each family should let us know before coming.',
    '/i.lɛ swɛ.tabl kə ʃak fa.mij pʁe.vjɛn a.vɑ̃ də və.niʁ/', 'ee-leh sweh-TABL | kuh shak fa-MEEY | pray-VYENN | a-vahⁿ duh vuh-NEER', ['subjonctif', 'conseil'], FCVR, SO),
  sent(2062, 'Il faut absolument que le service soit fermé au public après vingt heures.', 'The ward absolutely must be closed to the public after 8 p.m.',
    '/il fo ap.sɔ.ly.mɑ̃ kə lə sɛʁ.vis swa fɛʁ.me o py.blik a.pʁɛ vɛ̃.tœʁ/', 'eel foh ap-so-lü-MAHⁿ | kuh luh sehr-VEESS | swa fehr-MAY oh pü-BLEEK | a-preh vehⁿ-TUHR', ['subjonctif', 'necessite']),
  sent(2063, 'Il est obligatoire de porter une blouse dans le service.', 'Wearing a gown is compulsory on the ward.',
    '/i.lɛ.tɔ.bli.ɡa.twaʁ də pɔʁ.te yn bluz dɑ̃ lə sɛʁ.vis/', 'ee-leh-to-blee-ga-TWAR | duh por-TAY ünn BLOOZ | dahⁿ luh sehr-VEESS', ['infinitif', 'necessite']),
];

/* ── ACT 5 · PROBABLE OU POSSIBLE (.2064-.2081) ──────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(2064, 'Il est certain que la tempête touchera Québec demain.', 'The storm will certainly hit Québec City tomorrow.',
    '/i.lɛ sɛʁ.tɛ̃ kə la tɑ̃.pɛt tu.ʃə.ʁa ke.bɛk də.mɛ̃/', 'ee-leh sehr-TEHⁿ | kuh la tahⁿ-PET | too-shuh-RA kay-BEK | duh-MEHⁿ', ['echelle', 'indicatif'], FCVDR),
  sent(2065, 'Il est très probable que les écoles seront fermées.', 'The schools will very probably be closed.',
    '/i.lɛ tʁɛ pʁɔ.babl kə le.ze.kɔl sə.ʁɔ̃ fɛʁ.me/', 'ee-leh treh pro-BABL | kuh lay-zay-KOL | suh-rohⁿ fehr-MAY', ['echelle', 'indicatif']),
  sent(2066, 'Il est possible que des vols soient annulés en soirée.', 'Some flights may be cancelled in the evening.',
    '/i.lɛ pɔ.sibl kə de vɔl swa.ta.ny.le ɑ̃ swa.ʁe/', 'ee-leh po-SEEBL | kuh day VOL | swa-ta-nü-LAY | ahⁿ swa-RAY', ['echelle', 'subjonctif'], FCVDR),
  sent(2067, 'Il est peu probable que le courant soit coupé.', 'A power cut is unlikely.',
    '/i.lɛ pø pʁɔ.babl kə lə ku.ʁɑ̃ swa ku.pe/', 'ee-leh peu pro-BABL | kuh luh koo-RAHⁿ | swa koo-PAY', ['echelle', 'subjonctif']),
  sent(2068, 'Il est douteux que les routes soient dégagées avant midi.', 'It is doubtful that the roads will be cleared before noon.',
    '/i.lɛ du.tø kə le ʁut swa de.ɡa.ʒe a.vɑ̃ mi.di/', 'ee-leh doo-TEU | kuh lay ROOT | swa day-ga-ZHAY | a-vahⁿ mee-DEE', ['echelle', 'subjonctif'], FCVDR),
  sent(2069, 'Il se pourrait que la tempête fasse des dégâts sur la côte.', 'The storm might cause damage on the coast.',
    '/il sə pu.ʁɛ kə la tɑ̃.pɛt fas de de.ɡa syʁ la kot/', 'eel suh poo-REH | kuh la tahⁿ-PET | FASS day day-GA | sür la KOHT', ['echelle', 'subjonctif']),
  sent(2070, "Il n'est pas exclu que l'école reprenne jeudi.", 'It cannot be ruled out that school will resume on Thursday.',
    '/il nɛ pa.zɛks.kly kə le.kɔl ʁə.pʁɛn ʒø.di/', 'eel neh pa-zeks-KLÜ | kuh lay-KOL | ruh-PRENN zheu-DEE', ['echelle', 'subjonctif']),
  sent(2071, "Il ne fait aucun doute que l'hiver sera long.", 'There is no doubt that the winter will be long.',
    '/il nə fɛ o.kœ̃ dut kə li.vɛʁ sə.ʁa lɔ̃/', 'eel nuh feh oh-kuhⁿ DOOT | kuh lee-VEHR | suh-ra LOHⁿ', ['echelle', 'indicatif'], FCVDR),
  sent(2072, 'Il est clair que les secours sont prêts.', 'It is clear that the emergency services are ready.',
    '/i.lɛ klɛʁ kə le sə.kuʁ sɔ̃ pʁɛ/', 'ee-leh KLEHR | kuh lay suh-KOOR | sohⁿ PREH', ['echelle', 'indicatif']),
  sent(2073, 'Il est probable que la neige a déjà commencé à Rimouski.', 'The snow has probably already started in Rimouski.',
    '/i.lɛ pʁɔ.babl kə la nɛʒ a de.ʒa kɔ.mɑ̃.se a ʁi.mu.ski/', 'ee-leh pro-BABL | kuh la NEZH | a day-ZHA ko-mahⁿ-SAY | a ree-moo-SKEE', ['echelle', 'passe']),
  sent(2074, 'Il est possible que la neige ait déjà commencé à Rimouski.', 'The snow may already have started in Rimouski.',
    '/i.lɛ pɔ.sibl kə la nɛʒ ɛ de.ʒa kɔ.mɑ̃.se a ʁi.mu.ski/', 'ee-leh po-SEEBL | kuh la NEZH | EH day-ZHA ko-mahⁿ-SAY | a ree-moo-SKEE', ['echelle', 'passe'], FCVDR),
  rule(2075, "Au-dessus d'une chance sur deux, l'indicatif ; en dessous, le subjonctif.", 'Above even odds, the indicative; below them, the subjunctive.',
    '/o.də.sy dyn ʃɑ̃s syʁ dø lɛ̃.di.ka.tif ɑ̃ də.su lə syb.ʒɔ̃k.tif/',
    'oh-duh-SÜ | dünn SHAHⁿS sür DEU | lehⁿ-dee-ka-TEEF | ahⁿ duh-SOO | luh süb-zhohⁿk-TEEF',
    'Tu crois à plus d’une chance sur deux que la tempête touchera Québec. Quel mot, et quel mode ?',
    "Probable (ou certain, clair, évident), puis l'indicatif : il est probable qu'elle touchera Québec. Sous la moitié (possible, peu probable, douteux, il se peut), le subjonctif.",
    ['curseur']),
  gap(2076, 'Il est peu probable que la tempête faiblisse avant la nuit.', 'The storm is unlikely to weaken before nightfall.',
    '/i.lɛ pø pʁɔ.babl kə la tɑ̃.pɛt fɛ.blis a.vɑ̃ la nɥi/', 'ee-leh peu pro-BABL | kuh la tahⁿ-PET | feh-BLEESS | a-vahⁿ la NWEE',
    'Il est peu probable que la tempête ___ avant la nuit. (faiblir)',
    'Peu probable : sous la moitié, le subjonctif, faiblisse. EN: faiblisse.',
    ['echelle', 'subjonctif'], FCVDR),
  gap(2077, 'Il est probable que la tempête faiblira dans la nuit.', 'The storm will probably weaken during the night.',
    '/i.lɛ pʁɔ.babl kə la tɑ̃.pɛt fɛ.bli.ʁa dɑ̃ la nɥi/', 'ee-leh pro-BABL | kuh la tahⁿ-PET | feh-blee-RA | dahⁿ la NWEE',
    'Il est probable que la tempête ___ dans la nuit. (faiblir, au futur)',
    "Probable : au-dessus de la moitié, l'indicatif, faiblira. EN: faiblira.",
    ['echelle', 'indicatif']),
  sent(2078, 'Il se peut que nous devions fermer le pont.', 'We may have to close the bridge.',
    '/il sə pø kə nu də.vjɔ̃ fɛʁ.me lə pɔ̃/', 'eel suh PEU | kuh noo duh-VYOHⁿ | fehr-MAY luh POHⁿ', ['echelle', 'subjonctif']),
  sent(2079, 'Il est évident que personne ne doit prendre la route ce soir.', 'Clearly, nobody should drive tonight.',
    '/i.lɛ.te.vi.dɑ̃ kə pɛʁ.sɔn nə dwa pʁɑ̃dʁ la ʁut sə swaʁ/', 'ee-leh-tay-vee-DAHⁿ | kuh pehr-SONN nuh DWA | prahⁿdr la ROOT | suh SWAR', ['echelle', 'indicatif']),
  sent(2080, 'Il est sûr que les écoles resteront fermées lundi.', 'The schools will definitely stay closed on Monday.',
    '/i.lɛ syʁ kə le.ze.kɔl ʁɛs.tə.ʁɔ̃ fɛʁ.me lœ̃.di/', 'ee-leh SÜR | kuh lay-zay-KOL | res-tuh-ROHⁿ fehr-MAY | luhⁿ-DEE', ['echelle', 'indicatif']),
  sent(2081, 'Il est possible que la ville ait sous-estimé la tempête.', 'The city may have underestimated the storm.',
    '/i.lɛ pɔ.sibl kə la vil ɛ su.zɛs.ti.me la tɑ̃.pɛt/', 'ee-leh po-SEEBL | kuh la VEEL | EH soo-zes-tee-MAY | la tahⁿ-PET', ['echelle', 'passe']),
];

/* ── ACT 6 · LA NÉGATION ET LA QUESTION (.2082-.2097) ────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(2082, "Il n'est pas certain que le ministre soit au courant.", 'It is not certain that the minister knows.',
    '/il nɛ pa sɛʁ.tɛ̃ kə lə mi.nistʁ swa.to ku.ʁɑ̃/', 'eel neh pa sehr-TEHⁿ | kuh luh mee-NEESTR | swa-toh koo-RAHⁿ', ['negation', 'subjonctif'], FCVDR),
  sent(2083, 'Il est certain que le ministre est au courant.', 'It is certain that the minister knows.',
    '/i.lɛ sɛʁ.tɛ̃ kə lə mi.nistʁ ɛ.to ku.ʁɑ̃/', 'ee-leh sehr-TEHⁿ | kuh luh mee-NEESTR | eh-toh koo-RAHⁿ', ['negation', 'indicatif']),
  sent(2084, "Il n'est pas sûr que l'enquête aboutisse cette année.", 'It is not sure that the investigation will reach a conclusion this year.',
    '/il nɛ pa syʁ kə lɑ̃.kɛt a.bu.tis sɛ.ta.ne/', 'eel neh pa SÜR | kuh lahⁿ-KET | a-boo-TEESS | seh-ta-NAY', ['negation', 'subjonctif']),
  sent(2085, "Il n'est pas impossible que le rapport ait été modifié.", 'It is not impossible that the report was altered.',
    '/il nɛ pa.zɛ̃.pɔ.sibl kə lə ʁa.pɔʁ ɛ.te mɔ.di.fje/', 'eel neh pa-zehⁿ-po-SEEBL | kuh luh ra-POR | eh-TAY mo-dee-FYAY', ['negation', 'passe']),
  sent(2086, "Il n'est pas probable que la commission se réunisse avant l'été.", 'The committee is not likely to meet before the summer.',
    '/il nɛ pa pʁɔ.babl kə la kɔ.mi.sjɔ̃ sə ʁe.y.nis a.vɑ̃ le.te/', 'eel neh pa pro-BABL | kuh la ko-mee-SYOHⁿ | suh ray-ü-NEESS | a-vahⁿ lay-TAY', ['negation', 'subjonctif'], FCVDR),
  sent(2087, 'Est-il certain que la réunion ait eu lieu ?', 'Is it really certain that the meeting took place? (the question doubts)',
    '/ɛ.til sɛʁ.tɛ̃ kə la ʁe.y.njɔ̃ ɛ y ljø/', 'eh-TEEL sehr-TEHⁿ | kuh la ray-ü-NYOHⁿ | EH ü LYEU', ['question', 'subjonctif'], FCVR, SO),
  sent(2088, 'Est-il vrai que le maire a démissionné ?', 'Is it true that the mayor has resigned? (a straight question)',
    '/ɛ.til vʁɛ kə lə mɛʁ a de.mi.sjɔ.ne/', 'eh-teel VREH | kuh luh MEHR | a day-mee-syo-NAY', ['question', 'indicatif']),
  sent(2089, 'Il ne fait aucun doute que les chiffres ont été vérifiés.', 'There is no doubt that the figures were checked.',
    '/il nə fɛ o.kœ̃ dut kə le ʃifʁ ɔ̃.te ve.ʁi.fje/', 'eel nuh feh oh-kuhⁿ DOOT | kuh lay SHEEFR | ohⁿ-tay vay-ree-FYAY', ['negation', 'indicatif'], FCVDR),
  sent(2090, "Il n'est pas douteux que la presse en parlera.", 'There is no doubt the press will talk about it.',
    '/il nɛ pa du.tø kə la pʁɛs ɑ̃ paʁ.lə.ʁa/', 'eel neh pa doo-TEU | kuh la PRESS | ahⁿ par-luh-RA', ['negation', 'indicatif', 'reconnaissance'], FC, SO),
  rule(2091, "Nie une certitude, le subjonctif arrive ; nie un doute, l'indicatif revient.", 'Deny a certainty and the subjunctive comes in; deny a doubt and the indicative comes back.',
    '/ni y.nə sɛʁ.ti.tyd lə syb.ʒɔ̃k.tif a.ʁiv ni œ̃ dut lɛ̃.di.ka.tif ʁə.vjɛ̃/',
    'nee ü-nuh sehr-tee-TÜD | luh süb-zhohⁿk-TEEF a-REEV | nee uhⁿ DOOT | lehⁿ-dee-ka-TEEF ruh-VYEHⁿ',
    "Après « il n'est pas certain que » et après « il ne fait aucun doute que » : quel mode ?",
    "Le subjonctif après il n'est pas certain que : la certitude est retirée. L'indicatif après il ne fait aucun doute que : nier le doute, c'est affirmer.",
    ['negation']),
  gap(2092, "Il n'est pas certain que le journal puisse publier l'article.", 'It is not certain the paper can publish the article.',
    '/il nɛ pa sɛʁ.tɛ̃ kə lə ʒuʁ.nal pɥis py.bli.je laʁ.tikl/', 'eel neh pa sehr-TEHⁿ | kuh luh zhoor-NAL | PWEESS pü-blee-YAY | lar-TEEKL',
    "Il n'est pas certain que le journal ___ publier l'article. (pouvoir)",
    'Pas certain : la certitude est niée, le subjonctif, puisse. EN: puisse.',
    ['negation', 'subjonctif'], FCVDR),
  gap(2093, "Il ne fait aucun doute que le journal peut publier l'article.", 'There is no doubt the paper can publish the article.',
    '/il nə fɛ o.kœ̃ dut kə lə ʒuʁ.nal pø py.bli.je laʁ.tikl/', 'eel nuh feh oh-kuhⁿ DOOT | kuh luh zhoor-NAL | PEU pü-blee-YAY | lar-TEEKL',
    "Il ne fait aucun doute que le journal ___ publier l'article. (pouvoir)",
    "Aucun doute : c'est affirmé, l'indicatif, peut. EN: peut.",
    ['negation', 'indicatif']),
  sent(2094, "Il n'est pas clair que la source soit fiable.", 'It is not clear that the source is reliable.',
    '/il nɛ pa klɛʁ kə la suʁs swa fjabl/', 'eel neh pa KLEHR | kuh la SOORS | swa FYABL', ['negation', 'subjonctif']),
  sent(2095, 'Il est clair que la source est fiable.', 'It is clear that the source is reliable.',
    '/i.lɛ klɛʁ kə la suʁs ɛ fjabl/', 'ee-leh KLEHR | kuh la SOORS | eh FYABL', ['negation', 'indicatif']),
  sent(2096, "Il n'est pas prouvé que le document soit authentique.", 'It has not been proven that the document is genuine.',
    '/il nɛ pa pʁu.ve kə lə dɔ.ky.mɑ̃ swa.to.tɑ̃.tik/', 'eel neh pa proo-VAY | kuh luh do-kü-MAHⁿ | swa-toh-tahⁿ-TEEK', ['negation', 'subjonctif'], FCVDR),
  sent(2097, 'Il est prouvé que le document est authentique.', 'It has been proven that the document is genuine.',
    '/i.lɛ pʁu.ve kə lə dɔ.ky.mɑ̃ ɛ.to.tɑ̃.tik/', 'ee-leh proo-VAY | kuh luh do-kü-MAHⁿ | eh-toh-tahⁿ-TEEK', ['negation', 'indicatif']),
];

/* ── ACT 7 · IL SEMBLE, IL PARAÎT, IL S'AVÈRE (.2098-.2113) ──────────────── */

export const ACT7_ROWS: Row[] = [
  sent(2098, 'Il semble que la nouvelle ligne soit en avance sur le calendrier.', 'It seems the new line is ahead of schedule.',
    '/il sɑ̃bl kə la nu.vɛl liɲ swa.tɑ̃.na.vɑ̃s syʁ lə ka.lɑ̃.dʁi.je/', 'eel SAHⁿBL | kuh la noo-vell LEENY | swa-tahⁿ-na-VAHⁿS | sür luh ka-lahⁿ-dree-YAY', ['semble', 'impression'], FCVDR),
  sent(2099, 'Il me semble que la nouvelle ligne est en avance.', 'I think the new line is ahead of schedule.',
    '/il mə sɑ̃bl kə la nu.vɛl liɲ ɛ.tɑ̃.na.vɑ̃s/', 'eel muh SAHⁿBL | kuh la noo-vell LEENY | eh-tahⁿ-na-VAHⁿS', ['semble', 'avis'], FCVDR),
  sent(2100, 'Il paraît que les billets seront gratuits le premier mois.', 'Apparently the tickets will be free for the first month.',
    '/il pa.ʁɛ kə le bi.jɛ sə.ʁɔ̃ ɡʁa.tɥi lə pʁə.mje mwa/', 'eel pa-REH | kuh lay bee-YEH | suh-rohⁿ gra-TWEE | luh pruh-myay MWA', ['paraitre', 'rumeur'], FCVDR),
  sent(2101, 'Il semblerait que les travaux aient coûté moins que prévu.', 'It would seem the works cost less than planned.',
    '/il sɑ̃.blə.ʁɛ kə le tʁa.vo ɛ ku.te mwɛ̃ kə pʁe.vy/', 'eel sahⁿ-bluh-REH | kuh lay tra-VOH | EH koo-TAY | mwehⁿ kuh pray-VÜ', ['semble', 'prudence'], FCVR, SO),
  sent(2102, "Il s'avère que la ligne a été construite en deux ans.", 'It turns out the line was built in two years.',
    '/il sa.vɛʁ kə la liɲ a e.te kɔ̃s.tʁɥit ɑ̃ dø.zɑ̃/', 'eel sa-VEHR | kuh la LEENY | a ay-tay kohⁿs-TRWEET | ahⁿ deu-ZAHⁿ', ['averer', 'verifie']),
  sent(2103, 'Il se trouve que je connais bien ce quartier.', 'As it happens, I know this neighbourhood well.',
    '/il sə tʁuv kə ʒə kɔ.nɛ bjɛ̃ sə kaʁ.tje/', 'eel suh TROOV | kuh zhuh ko-NEH BYEHⁿ | suh kar-TYAY', ['averer', 'fait']),
  sent(2104, 'La ligne ouvrira en juin, paraît-il.', 'The line will open in June, apparently.',
    '/la liɲ u.vʁi.ʁa ɑ̃ ʒɥɛ̃ pa.ʁɛ.til/', 'la LEENY | oo-vree-RA ahⁿ ZHWEHⁿ | pa-reh-TEEL', ['paraitre', 'rumeur']),
  sent(2105, 'Il ne me semble pas que ce soit la meilleure solution.', 'I do not think it is the best solution.',
    '/il nə mə sɑ̃bl pa kə sə swa la mɛ.jœʁ sɔ.ly.sjɔ̃/', 'eel nuh muh sahⁿbl PA | kuh suh swa la meh-YUHR | so-lü-SYOHⁿ', ['semble', 'negation']),
  rule(2106, "Il paraît que : on me l'a dit. Il semble que : une impression. Il s'avère que : c'est vérifié.", 'Il paraît que: I was told. Il semble que: an impression. Il s’avère que: it has been checked.',
    '/il pa.ʁɛ kə ɔ̃ mə la di il sɑ̃bl kə y.nɛ̃.pʁɛ.sjɔ̃ il sa.vɛʁ kə sɛ ve.ʁi.fje/',
    'eel pa-REH KUH | ohⁿ muh la DEE | eel SAHⁿBL KUH | ü-nehⁿ-preh-SYOHⁿ | eel sa-VEHR KUH | seh vay-ree-FYAY',
    "Laquelle rapporte seulement ce qu'on t'a dit, sans le garantir ?",
    "Il paraît que, avec l'indicatif : une rumeur, pas une probabilité. Il semble que : une impression. Il me semble que : ton avis. Il s'avère que : le fait est vérifié.",
    ['source']),
  sent(2107, "D'après les premiers chiffres, il semble que la fréquentation dépasse les prévisions.", 'According to the first figures, ridership seems to be exceeding forecasts.',
    '/da.pʁɛ le pʁə.mje ʃifʁ il sɑ̃bl kə la fʁe.kɑ̃.ta.sjɔ̃ de.pas le pʁe.vi.zjɔ̃/', 'da-PREH lay pruh-myay SHEEFR | eel SAHⁿBL | kuh la fray-kahⁿ-ta-SYOHⁿ | day-PASS lay pray-vee-ZYOHⁿ', ['semble', 'impression']),
  gap(2108, "Il paraît que la ligne sera prolongée jusqu'à l'aéroport.", 'Apparently the line will be extended to the airport.',
    '/il pa.ʁɛ kə la liɲ sə.ʁa pʁɔ.lɔ̃.ʒe ʒys.ka la.e.ʁɔ.pɔʁ/', 'eel pa-REH | kuh la LEENY | suh-ra pro-lohⁿ-ZHAY | zhüs-ka la-ay-ro-POR',
    "Il paraît que la ligne ___ prolongée jusqu'à l'aéroport. (être, au futur)",
    'Il paraît que + indicatif : sera. Une rumeur, pas une hypothèse. EN: sera.',
    ['paraitre', 'indicatif'], FCVDR),
  sent(2109, "Il semble qu'il y ait eu un malentendu.", 'There seems to have been a misunderstanding.',
    '/il sɑ̃bl kil i ɛ.ty œ̃ ma.lɑ̃.tɑ̃.dy/', 'eel SAHⁿBL | keel ee eh-TÜ | uhⁿ ma-lahⁿ-tahⁿ-DÜ', ['semble', 'passe']),
  sent(2110, "À ce qu'il paraît, le prix du billet va augmenter.", 'Apparently the ticket price is going up.',
    '/a sə kil pa.ʁɛ lə pʁi dy bi.jɛ va oɡ.mɑ̃.te/', 'a suh keel pa-REH | luh PREE dü bee-YEH | va og-mahⁿ-TAY', ['paraitre', 'rumeur']),
  sent(2111, "Il s'est avéré que la rumeur était fausse.", 'The rumour turned out to be false.',
    '/il sɛ.ta.ve.ʁe kə la ʁy.mœʁ e.tɛ fos/', 'eel seh-ta-vay-RAY | kuh la rü-MUHR | ay-teh FOHSS', ['averer', 'verifie'], FCVDR),
  sent(2112, 'Il semble bien que les usagers aient adopté la ligne.', 'It really does seem that passengers have taken to the line.',
    '/il sɑ̃bl bjɛ̃ kə le.zy.za.ʒe ɛ.ta.dɔp.te la liɲ/', 'eel sahⁿbl BYEHⁿ | kuh lay-zü-za-ZHAY | eh-ta-dop-TAY la LEENY', ['semble', 'passe']),
  sent(2113, 'Il me semble que ce reportage manque de chiffres.', 'I feel this report is short on figures.',
    '/il mə sɑ̃bl kə sə ʁə.pɔʁ.taʒ mɑ̃k də ʃifʁ/', 'eel muh SAHⁿBL | kuh suh ruh-por-TAZH | MAHⁿK duh SHEEFR', ['semble', 'avis']),
];

/* ── ACT 8 · IL EST DOMMAGE QUE, IL EST TEMPS QUE (.2114-.2129) ───────────── */

export const ACT8_ROWS: Row[] = [
  sent(2114, 'Il est regrettable que la navette ait été supprimée cette année.', 'It is regrettable that the shuttle was cut this year.',
    '/i.lɛ ʁə.ɡʁɛ.tabl kə la na.vɛt ɛ.te sy.pʁi.me sɛ.ta.ne/', 'ee-leh ruh-greh-TABL | kuh la na-VET | eh-TAY sü-pree-MAY | seh-ta-NAY', ['jugement', 'passe'], FCVDR, SO),
  sent(2115, 'Il est étonnant que si peu de bénévoles aient répondu.', 'It is surprising that so few volunteers replied.',
    '/i.lɛ.te.tɔ.nɑ̃ kə si pø də be.ne.vɔl ɛ ʁe.pɔ̃.dy/', 'ee-leh-tay-to-NAHⁿ | kuh see PEU duh bay-nay-VOL | EH ray-pohⁿ-DÜ', ['jugement', 'passe']),
  sent(2116, 'Il est normal que les riverains veuillent du calme après minuit.', 'It is understandable that local residents want quiet after midnight.',
    '/i.lɛ nɔʁ.mal kə le ʁi.və.ʁɛ̃ vœj dy kalm a.pʁɛ mi.nɥi/', 'ee-leh nor-MAL | kuh lay ree-vuh-REHⁿ | VUHY dü KALM | a-preh mee-NWEE', ['jugement', 'subjonctif'], FCVDR),
  sent(2117, 'Il est temps que la ville revoie son plan de circulation.', 'It is time the city reviewed its traffic plan.',
    '/i.lɛ tɑ̃ kə la vil ʁə.vwa sɔ̃ plɑ̃ də siʁ.ky.la.sjɔ̃/', 'ee-leh TAHⁿ | kuh la VEEL | ruh-VWA sohⁿ PLAHⁿ | duh seer-kü-la-SYOHⁿ', ['jugement', 'subjonctif']),
  sent(2118, 'Il est dommage de fermer les quais si tôt.', 'It is a pity to close the riverside so early.',
    '/i.lɛ dɔ.maʒ də fɛʁ.me le kɛ si to/', 'ee-leh do-MAZH | duh fehr-MAY lay KEH | see TOH', ['jugement', 'infinitif'], FCVDR),
  sent(2119, 'Il est dommage que la mairie ferme les quais si tôt.', 'It is a pity the city hall closes the riverside so early.',
    '/i.lɛ dɔ.maʒ kə la mɛ.ʁi fɛʁm le kɛ si to/', 'ee-leh do-MAZH | kuh la meh-REE | fehrm lay KEH | see TOH', ['jugement', 'sujet']),
  sent(2120, "C'est dommage de fermer les quais si tôt.", "It's a pity to close the riverside so early. (spoken)",
    '/sɛ dɔ.maʒ də fɛʁ.me le kɛ si to/', 'seh do-MAZH | duh fehr-MAY lay KEH | see TOH', ['jugement', 'oral', 'registre']),
  sent(2121, 'Il est heureux que la pluie se soit arrêtée à temps.', 'It is fortunate that the rain stopped in time.',
    '/i.lɛ.tœ.ʁø kə la plɥi sə swa.ta.ʁɛ.te a tɑ̃/', 'ee-leh-tuh-REU | kuh la PLWEE | suh swa-ta-reh-TAY | a TAHⁿ', ['jugement', 'passe'], FCVR, SO),
  sent(2122, 'Il est inadmissible que des bénévoles aient été insultés.', 'It is unacceptable that volunteers were insulted.',
    '/i.lɛ.ti.nad.mi.sibl kə de be.ne.vɔl ɛ.te.tɛ̃.syl.te/', 'ee-leh-tee-nad-mee-SEEBL | kuh day bay-nay-VOL | eh-tay-tehⁿ-sül-TAY', ['jugement', 'passe']),
  sent(2123, 'Il est naturel de vouloir profiter de la fête.', 'It is natural to want to enjoy the festival.',
    '/i.lɛ na.ty.ʁɛl də vu.lwaʁ pʁɔ.fi.te də la fɛt/', 'ee-leh na-tü-REL | duh voo-LWAR pro-fee-TAY | duh la FET', ['jugement', 'infinitif']),
  rule(2124, "Il est + adjectif : de + infinitif pour tout le monde, que + subjonctif pour quelqu'un de précis.", 'Il est + adjective: de + infinitive for everyone, que + subjunctive for someone in particular.',
    '/i.lɛ.ta.dʒɛk.tif də ɛ̃.fi.ni.tif puʁ tu lə mɔ̃d kə syb.ʒɔ̃k.tif puʁ kɛl.kœ̃ də pʁe.si/',
    'ee-leh-ta-zhek-TEEF | duh ehⁿ-fee-nee-TEEF | poor too luh MOHⁿD | kuh süb-zhohⁿk-TEEF | poor kel-KUHⁿ duh pray-SEE',
    '« Il est dommage … les quais si tôt » : un regret général, ou un reproche à la mairie ?',
    'Un regret général : il est dommage de fermer les quais si tôt. Un reproche à la mairie : il est dommage que la mairie ferme les quais si tôt.',
    ['sujet']),
  rule(2125, "À l'écrit, il est dommage que ; à l'oral, c'est dommage que.", 'In writing, il est dommage que; in speech, c’est dommage que.',
    '/a le.kʁi i.lɛ dɔ.maʒ kə a lɔ.ʁal sɛ dɔ.maʒ kə/',
    'a lay-KREE | ee-leh do-MAZH KUH | a lo-RAL | seh do-MAZH KUH',
    "Dans un rapport, lequel écris-tu : « c'est dommage que » ou « il est dommage que » ?",
    "Il est dommage que, il est regrettable que. C'est dommage que est correct, mais il sonne oral ; « dommage que » tout seul, encore plus.",
    ['registre']),
  gap(2126, 'Il est regrettable que le programme ait été publié si tard.', 'It is regrettable that the programme was published so late.',
    '/i.lɛ ʁə.ɡʁɛ.tabl kə lə pʁɔ.ɡʁam ɛ.te py.bli.e si taʁ/', 'ee-leh ruh-greh-TABL | kuh luh pro-GRAMM | eh-TAY pü-blee-YAY | see TAR',
    "Il est regrettable que le programme ___ publié si tard. (être, c'est déjà fait)",
    'Un fait passé : le subjonctif passé, ait été. EN: ait été.',
    ['jugement', 'passe'], FCVDR),
  gap(2127, 'Il est temps que la mairie tienne compte des riverains.', 'It is time the city hall took local residents into account.',
    '/i.lɛ tɑ̃ kə la mɛ.ʁi tjɛn kɔ̃t de ʁi.və.ʁɛ̃/', 'ee-leh TAHⁿ | kuh la meh-REE | TYENN KOHⁿT | day ree-vuh-REHⁿ',
    'Il est temps que la mairie ___ compte des riverains. (tenir)',
    'Il est temps que + subjonctif : tienne. EN: tienne.',
    ['jugement', 'subjonctif']),
  sent(2128, "Il est surprenant qu'aucune solution n'ait été trouvée.", 'It is surprising that no solution has been found.',
    '/i.lɛ syʁ.pʁə.nɑ̃ ko.kyn sɔ.ly.sjɔ̃ nɛ.te tʁu.ve/', 'ee-leh sür-pruh-NAHⁿ | koh-KÜNN so-lü-SYOHⁿ | neh-TAY troo-VAY', ['jugement', 'passe']),
  sent(2129, 'Il serait souhaitable que la fête finisse plus tôt le dimanche.', 'It would be preferable for the festival to end earlier on Sundays.',
    '/il sə.ʁɛ swɛ.tabl kə la fɛt fi.nis ply to lə di.mɑ̃ʃ/', 'eel suh-REH sweh-TABL | kuh la FET | fee-NEESS plü TOH | luh dee-MAHⁿSH', ['jugement', 'subjonctif'], FCVR, SO),
];

/* ── ACT 9 · IL A ÉTÉ DÉCIDÉ QUE (.2130-.2147) ────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(2130, 'Il a été décidé que la salle de sport fermerait à vingt-deux heures.', 'It has been decided that the gym will close at 10 p.m.',
    '/i.la.e.te de.si.de kə la sal də spɔʁ fɛʁ.mə.ʁɛ a vɛ̃t.dø.zœʁ/', 'ee-la-ay-TAY day-see-DAY | kuh la SAL duh SPOR | fehr-muh-REH | a vehⁿt-deu-ZUHR', ['distance', 'indicatif'], FCVR, SO),
  sent(2131, 'Il est rappelé que les visites sont interdites après minuit.', 'Residents are reminded that visits are not allowed after midnight.',
    '/i.lɛ ʁa.pə.le kə le vi.zit sɔ̃.tɛ̃.tɛʁ.dit a.pʁɛ mi.nɥi/', 'ee-leh ra-puh-LAY | kuh lay vee-ZEET | sohⁿ-tehⁿ-tehr-DEET | a-preh mee-NWEE', ['distance', 'indicatif'], FCVDR, SO),
  sent(2132, 'Il est demandé aux résidents de trier leurs déchets.', 'Residents are asked to sort their rubbish.',
    '/i.lɛ də.mɑ̃.de o ʁe.zi.dɑ̃ də tʁi.je lœʁ de.ʃɛ/', 'ee-leh duh-mahⁿ-DAY | oh ray-zee-DAHⁿ | duh tree-YAY luhr day-SHEH', ['distance', 'infinitif'], FCVDR, SO),
  sent(2133, 'Il est demandé que chaque chambre soit libérée avant dix heures.', 'Each room must be vacated before ten.',
    '/i.lɛ də.mɑ̃.de kə ʃak ʃɑ̃bʁ swa li.be.ʁe a.vɑ̃ di.zœʁ/', 'ee-leh duh-mahⁿ-DAY | kuh shak SHAHⁿBR | swa lee-bay-RAY | a-vahⁿ dee-ZUHR', ['distance', 'subjonctif'], FCVR, SO),
  sent(2134, 'Il est prévu que les travaux dureront trois semaines.', 'The work is expected to last three weeks.',
    '/i.lɛ pʁe.vy kə le tʁa.vo dy.ʁə.ʁɔ̃ tʁwa sə.mɛn/', 'ee-leh pray-VÜ | kuh lay tra-VOH | dü-ruh-ROHⁿ | trwa suh-MENN', ['distance', 'indicatif']),
  sent(2135, 'Il est prévu de repeindre les couloirs en juillet.', 'The corridors are due to be repainted in July.',
    '/i.lɛ pʁe.vy də ʁə.pɛ̃dʁ le ku.lwaʁ ɑ̃ ʒɥi.jɛ/', 'ee-leh pray-VÜ | duh ruh-PEHⁿDR lay koo-LWAR | ahⁿ zhwee-YEH', ['distance', 'infinitif']),
  sent(2136, 'Il a été convenu que chaque étage élirait un délégué.', 'It was agreed that each floor would elect a representative.',
    '/i.la.e.te kɔ̃v.ny kə ʃa.ke.taʒ e.li.ʁɛ œ̃ de.le.ɡe/', 'ee-la-ay-TAY kohⁿv-NÜ | kuh sha-kay-TAZH | ay-lee-REH | uhⁿ day-lay-GAY', ['distance', 'indicatif'], FCVR, SO),
  sent(2137, 'Il est recommandé de fermer sa fenêtre en partant.', 'You are advised to close your window when you go out.',
    '/i.lɛ ʁə.kɔ.mɑ̃.de də fɛʁ.me sa fə.nɛtʁ ɑ̃ paʁ.tɑ̃/', 'ee-leh ruh-ko-mahⁿ-DAY | duh fehr-MAY sa fuh-NETR | ahⁿ par-TAHⁿ', ['distance', 'infinitif']),
  sent(2138, 'On ne peut pas fumer dans la résidence.', "You can't smoke in the residence. (spoken)",
    '/ɔ̃ nə pø pa fy.me dɑ̃ la ʁe.zi.dɑ̃s/', 'ohⁿ nuh peu PA | fü-MAY | dahⁿ la ray-zee-DAHⁿS', ['registre', 'oral']),
  sent(2139, "Il est interdit de fumer dans l'enceinte de la résidence.", 'Smoking is forbidden on the residence premises.',
    '/i.lɛ.tɛ̃.tɛʁ.di də fy.me dɑ̃ lɑ̃.sɛ̃t də la ʁe.zi.dɑ̃s/', 'ee-leh-tehⁿ-tehr-DEE | duh fü-MAY | dahⁿ lahⁿ-SEHⁿT | duh la ray-zee-DAHⁿS', ['registre', 'distance'], FCVDR, SO),
  sent(2140, 'Il sera procédé à un contrôle des extincteurs lundi.', 'The fire extinguishers will be inspected on Monday.',
    '/il sə.ʁa pʁɔ.se.de a œ̃ kɔ̃.tʁol de.zɛk.stɛ̃k.tœʁ lœ̃.di/', 'eel suh-RA pro-say-DAY | a uhⁿ kohⁿ-TROHL | day-zek-stehⁿk-TUHR | luhⁿ-DEE', ['distance', 'reconnaissance'], FC, SO),
  rule(2141, "Décider, rappeler, prévoir : l'indicatif. Demander, exiger, souhaiter : le subjonctif.", 'Decide, remind, plan: the indicative. Ask, require, wish: the subjunctive.',
    '/de.si.de ʁa.pə.le pʁe.vwaʁ lɛ̃.di.ka.tif də.mɑ̃.de ɛɡ.zi.ʒe swɛ.te lə syb.ʒɔ̃k.tif/',
    'day-see-DAY | ra-puh-LAY | pray-VWAR | lehⁿ-dee-ka-TEEF | duh-mahⁿ-DAY | eg-zee-ZHAY | sweh-TAY | luh süb-zhohⁿk-TEEF',
    "« Il est demandé que chaque chambre … libérée » : soit ou est ?",
    "Soit : demander, c'est vouloir, donc le subjonctif. « Il a été décidé que » ou « il est rappelé que » affirment une décision ou un fait : l'indicatif.",
    ['distance']),
  rule(2142, "Même règle, deux voix : il est interdit de sur l'affiche, on ne peut pas dans le couloir.", 'Same rule, two voices: il est interdit de on the notice, on ne peut pas in the corridor.',
    '/mɛm ʁɛɡl dø vwa i.lɛ.tɛ̃.tɛʁ.di də syʁ la.fiʃ ɔ̃ nə pø pa dɑ̃ lə ku.lwaʁ/',
    'mem REGL | deu VWA | ee-leh-tehⁿ-tehr-DEE DUH | sür la-FEESH | ohⁿ nuh peu PA | dahⁿ luh koo-LWAR',
    'Tu expliques la règle à un ami dans le couloir : « il est interdit de fumer » ou « on ne peut pas fumer » ?',
    "On ne peut pas fumer ici. Il est interdit de est juste aussi, mais il sonne comme un règlement affiché.",
    ['registre']),
  gap(2143, 'Il a été constaté que plusieurs vélos avaient disparu.', 'It was found that several bikes had disappeared.',
    '/i.la.e.te kɔ̃s.ta.te kə ply.zjœʁ ve.lo a.vɛ dis.pa.ʁy/', 'ee-la-ay-TAY kohⁿs-ta-TAY | kuh plü-zyuhr vay-LOH | a-veh dees-pa-RÜ',
    'Il a été constaté que plusieurs vélos ___ disparu. (avoir, au plus-que-parfait)',
    "Constater affirme un fait : l'indicatif, avaient. EN: avaient.",
    ['distance', 'indicatif'], FCVR, SO),
  gap(2144, 'Il est exigé que chaque résident ait une assurance habitation.', 'Every resident is required to have home insurance.',
    '/i.lɛ.tɛɡ.zi.ʒe kə ʃak ʁe.zi.dɑ̃ ɛ y.na.sy.ʁɑ̃s a.bi.ta.sjɔ̃/', 'ee-leh-teg-zee-ZHAY | kuh shak ray-zee-DAHⁿ | EH ü-na-sü-RAHⁿS | a-bee-ta-SYOHⁿ',
    'Il est exigé que chaque résident ___ une assurance habitation. (avoir)',
    "Exiger, c'est vouloir : le subjonctif, ait. EN: ait.",
    ['distance', 'subjonctif'], FCVDR, SO),
  sent(2145, 'Il est entendu que les dégâts seront à la charge du résident.', 'It is understood that any damage will be charged to the resident.',
    '/i.lɛ.tɑ̃.tɑ̃.dy kə le de.ɡa sə.ʁɔ̃ a la ʃaʁʒ dy ʁe.zi.dɑ̃/', 'ee-leh-tahⁿ-tahⁿ-DÜ | kuh lay day-GA | suh-rohⁿ a la SHARZH | dü ray-zee-DAHⁿ', ['distance', 'indicatif'], FCVR, SO),
  sent(2146, 'Il est question de fermer la cafétéria le samedi.', 'There is talk of closing the cafeteria on Saturdays.',
    '/i.lɛ kɛs.tjɔ̃ də fɛʁ.me la ka.fe.te.ʁja lə sam.di/', 'ee-leh kes-TYOHⁿ | duh fehr-MAY | la ka-fay-tay-RYA | luh sam-DEE', ['distance', 'infinitif']),
  sent(2147, 'Il est conseillé de garder une copie du bail.', 'Keeping a copy of the lease is advised.',
    '/i.lɛ kɔ̃.se.je də ɡaʁ.de yn kɔ.pi dy baj/', 'ee-leh kohⁿ-say-YAY | duh gar-DAY ünn ko-PEE | dü BAHY', ['distance', 'infinitif']),
];

/* ── ACT 10 · IL RESTE, IL MANQUE, IL S'AGIT DE (.2148-.2163) ─────────────── */

export const ACT10_ROWS: Row[] = [
  sent(2148, 'Il manque deux chaises au premier rang.', 'Two chairs are missing in the front row.',
    '/il mɑ̃k dø ʃɛz o pʁə.mje ʁɑ̃/', 'eel MAHⁿK | deu SHEZ | oh pruh-myay RAHⁿ', ['accord', 'manquer'], FCVDR),
  sent(2149, "Il reste une heure avant l'arrivée des invités.", 'There is an hour left before the guests arrive.',
    '/il ʁɛst y.nœʁ a.vɑ̃ la.ʁi.ve de.zɛ̃.vi.te/', 'eel REST ü-NUHR | a-vahⁿ la-ree-VAY | day-zehⁿ-vee-TAY', ['accord', 'rester']),
  sent(2150, 'Il existe plusieurs façons de disposer la salle.', 'There are several ways to lay out the room.',
    '/i.lɛɡ.zist ply.zjœʁ fa.sɔ̃ də dis.po.ze la sal/', 'ee-leg-ZEEST | plü-zyuhr fa-SOHⁿ | duh dees-po-ZAY la SAL', ['accord', 'exister'], FCVDR),
  sent(2151, 'Il est arrivé des colis pour les intervenants.', 'Some parcels have arrived for the speakers.',
    '/i.lɛ.ta.ʁi.ve de kɔ.li puʁ le.zɛ̃.tɛʁ.və.nɑ̃/', 'ee-leh-ta-ree-VAY | day ko-LEE | poor lay-zehⁿ-tehr-vuh-NAHⁿ', ['accord', 'arriver'], FCVDR),
  sent(2152, "Il s'est produit deux coupures de courant ce matin.", 'There were two power cuts this morning.',
    '/il sɛ pʁɔ.dɥi dø ku.pyʁ də ku.ʁɑ̃ sə ma.tɛ̃/', 'eel seh pro-DWEE | deu koo-PÜR duh koo-RAHⁿ | suh ma-TEHⁿ', ['accord', 'produire']),
  sent(2153, 'Il arrive que le générateur ne suffise pas.', 'Sometimes the generator is not enough.',
    '/i.la.ʁiv kə lə ʒe.ne.ʁa.tœʁ nə sy.fiz pa/', 'ee-la-REEV | kuh luh zhay-nay-ra-TUHR | nuh sü-FEEZ PA', ['arriver-que', 'subjonctif']),
  sent(2154, "Il s'agit d'un colloque sur l'eau potable.", 'It is a conference on drinking water.',
    '/il sa.ʒi dœ̃ kɔ.lɔk syʁ lo pɔ.tabl/', 'eel sa-ZHEE | duhⁿ ko-LOK | sür loh po-TABL', ['agir', 'nom'], FCVDR),
  sent(2155, "Dans ce livre, il s'agit d'une famille d'Abidjan.", 'This book is about a family from Abidjan.',
    '/dɑ̃ sə livʁ il sa.ʒi dyn fa.mij da.bid.ʒɑ̃/', 'dahⁿ suh LEEVR | eel sa-ZHEE | dünn fa-MEEY | da-beed-ZHAHⁿ', ['agir', 'nom']),
  sent(2156, "Ce livre parle d'une famille d'Abidjan.", 'This book is about a family from Abidjan. (with a real subject)',
    '/sə livʁ paʁl dyn fa.mij da.bid.ʒɑ̃/', 'suh LEEVR | parl dünn fa-MEEY | da-beed-ZHAHⁿ', ['agir', 'personnel']),
  sent(2157, 'Il en va de même pour les badges.', 'The same goes for the badges.',
    '/i.lɑ̃ va də mɛm puʁ le badʒ/', 'ee-lahⁿ VA duh MEM | poor lay BADZH', ['en-va']),
  rule(2158, 'Le verbe impersonnel reste au singulier, même devant un pluriel.', 'The impersonal verb stays singular, even before a plural.',
    '/lə vɛʁb ɛ̃.pɛʁ.sɔ.nɛl ʁɛst o sɛ̃.ɡy.lje mɛm də.vɑ̃ œ̃ ply.ʁjɛl/',
    'luh VEHRB ehⁿ-pehr-so-NELL | rest oh sehⁿ-gü-LYAY | mem duh-vahⁿ uhⁿ plü-RYEL',
    '« Il … deux chaises au premier rang » : manque ou manquent ?',
    "Manque : le sujet du verbe, c'est il, au singulier. Les deux chaises viennent après, et ne commandent pas l'accord.",
    ['accord']),
  rule(2159, "Il s'agit de n'a jamais d'autre sujet que il.", 'Il s’agit de never takes any subject but il.',
    '/il sa.ʒi də na ʒa.mɛ do.tʁə sy.ʒɛ kə il/',
    'eel sa-ZHEE DUH | na zha-MEH | doh-truh sü-ZHEH | kuh EEL',
    "« Ce livre s'agit d'une famille » : que faut-il corriger ?",
    "Le sujet. Dans ce livre, il s'agit d'une famille ; ou bien, avec un vrai sujet : ce livre parle d'une famille, ce livre traite d'une famille.",
    ['agir']),
  gap(2160, 'Il reste encore trois badges à imprimer.', 'There are still three badges to print.',
    '/il ʁɛst ɑ̃.kɔʁ tʁwa badʒ a ɛ̃.pʁi.me/', 'eel REST ahⁿ-KOR | trwa BADZH | a ehⁿ-pree-MAY',
    'Il ___ encore trois badges à imprimer. (rester, au présent)',
    "Reste, au singulier : le seul sujet du verbe, c'est il. EN: reste.",
    ['accord', 'rester'], FCVDR),
  gap(2161, 'Il est arrivé des choses étranges pendant la répétition.', 'Strange things happened during the rehearsal.',
    '/i.lɛ.ta.ʁi.ve de ʃoz e.tʁɑ̃ʒ pɑ̃.dɑ̃ la ʁe.pe.ti.sjɔ̃/', 'ee-leh-ta-ree-VAY | day SHOHZ ay-TRAHⁿZH | pahⁿ-dahⁿ la ray-pay-tee-SYOHⁿ',
    'Il est ___ des choses étranges pendant la répétition. (arriver)',
    "Arrivé, sans e ni s : le participe s'accorde avec il, masculin singulier. EN: arrivé.",
    ['accord', 'arriver']),
  sent(2162, 'Il manquait encore le traiteur à dix-huit heures.', 'The caterer was still missing at 6 p.m.',
    '/il mɑ̃.kɛ ɑ̃.kɔʁ lə tʁɛ.tœʁ a di.zɥi.tœʁ/', 'eel mahⁿ-KEH ahⁿ-KOR | luh treh-TUHR | a dee-zwee-TUHR', ['accord', 'manquer']),
  sent(2163, 'Il a été vendu plus de trois cents billets.', 'More than three hundred tickets were sold.',
    '/i.la.e.te vɑ̃.dy ply də tʁwa sɑ̃ bi.jɛ/', 'ee-la-ay-tay vahⁿ-DÜ | plü duh trwa sahⁿ bee-YEH', ['accord', 'passif'], FCVR, SO),
];

/* ── ACT 11 · DU CERTAIN AU DOUTEUX (.2164-.2179) ─────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(2164, 'Il est établi que la fréquentation des commerces a augmenté.', 'It is established that footfall in the shops has increased.',
    '/i.lɛ.te.ta.bli kə la fʁe.kɑ̃.ta.sjɔ̃ de kɔ.mɛʁs a oɡ.mɑ̃.te/', 'ee-leh-tay-ta-BLEE | kuh la fray-kahⁿ-ta-SYOHⁿ | day ko-MEHRS | a og-mahⁿ-TAY', ['degre', 'indicatif'], FCVDR, SO),
  sent(2165, "Il est probable que la qualité de l'air s'est améliorée.", 'Air quality has probably improved.',
    '/i.lɛ pʁɔ.babl kə la ka.li.te də lɛʁ sɛ.ta.me.ljɔ.ʁe/', 'ee-leh pro-BABL | kuh la ka-lee-TAY duh LEHR | seh-ta-may-lyo-RAY', ['degre', 'indicatif']),
  sent(2166, 'Il est possible que le bruit ait simplement été déplacé.', 'The noise may simply have been moved elsewhere.',
    '/i.lɛ pɔ.sibl kə lə bʁɥi ɛ sɛ̃.plə.mɑ̃ e.te de.pla.se/', 'ee-leh po-SEEBL | kuh luh BRWEE | EH sehⁿ-pluh-MAHⁿ | ay-TAY day-pla-SAY', ['degre', 'subjonctif']),
  sent(2167, 'Il est peu probable que les livraisons puissent se faire le soir.', 'It is unlikely that deliveries can be made in the evening.',
    '/i.lɛ pø pʁɔ.babl kə le li.vʁɛ.zɔ̃ pɥis sə fɛʁ lə swaʁ/', 'ee-leh peu pro-BABL | kuh lay lee-vreh-ZOHⁿ | pweess suh FEHR | luh SWAR', ['degre', 'subjonctif'], FCVDR),
  sent(2168, 'Il reste à savoir si les riverains accepteront ce changement.', 'It remains to be seen whether local residents will accept this change.',
    '/il ʁɛst a sa.vwaʁ si le ʁi.və.ʁɛ̃ ak.sɛp.tə.ʁɔ̃ sə ʃɑ̃ʒ.mɑ̃/', 'eel REST a sa-VWAR | see lay ree-vuh-REHⁿ | ak-sep-tuh-ROHⁿ | suh shahⁿzh-MAHⁿ', ['degre', 'ouvert']),
  sent(2169, "Il convient donc de prolonger l'expérience d'un an.", 'The trial should therefore be extended by a year.',
    '/il kɔ̃.vjɛ̃ dɔ̃k də pʁɔ.lɔ̃.ʒe lɛks.pe.ʁjɑ̃s dœ̃.nɑ̃/', 'eel kohⁿ-vyehⁿ DOHⁿK | duh pro-lohⁿ-ZHAY | leks-pay-RYAHⁿS | duhⁿ-NAHⁿ', ['recommandation', 'infinitif'], FCVR, SO),
  sent(2170, 'Il est indispensable que les commerçants soient associés aux décisions.', 'It is essential that the shopkeepers be involved in the decisions.',
    '/i.lɛ.tɛ̃.dis.pɑ̃.sabl kə le kɔ.mɛʁ.sɑ̃ swa.ta.sɔ.sje o de.si.zjɔ̃/', 'ee-leh-tehⁿ-dees-pahⁿ-SABL | kuh lay ko-mehr-SAHⁿ | swa-ta-so-SYAY | oh day-see-ZYOHⁿ', ['recommandation', 'subjonctif'], FCVDR),
  sent(2171, "Il n'est pas certain que cette hausse se maintienne en hiver.", 'It is not certain that this rise will hold up in winter.',
    '/il nɛ pa sɛʁ.tɛ̃ kə sɛt os sə mɛ̃.tjɛn ɑ̃.ni.vɛʁ/', 'eel neh pa sehr-TEHⁿ | kuh set OHSS | suh mehⁿ-TYENN | ahⁿ-nee-VEHR', ['degre', 'subjonctif']),
  sent(2172, 'Il est à craindre que le secteur devienne trop cher.', 'There is a risk that the area will become too expensive.',
    '/i.lɛ.ta kʁɛ̃dʁ kə lə sɛk.tœʁ də.vjɛn tʁo ʃɛʁ/', 'ee-leh-ta KREHⁿDR | kuh luh sek-TUHR | duh-VYENN troh SHEHR', ['degre', 'subjonctif'], FCVR, SO),
  sent(2173, "Il ressort de l'enquête que les piétons sont satisfaits.", 'The survey shows that pedestrians are satisfied.',
    '/il ʁə.sɔʁ də lɑ̃.kɛt kə le pje.tɔ̃ sɔ̃ sa.tis.fɛ/', 'eel ruh-SOR | duh lahⁿ-KET | kuh lay pyay-TOHⁿ | sohⁿ sa-tees-FEH', ['degre', 'indicatif'], FCVR, SO),
  rule(2174, 'Un fait mesuré : il est établi que. Une tendance : il est probable que. Une hypothèse : il est possible que.', 'A measured fact: il est établi que. A trend: il est probable que. A hypothesis: il est possible que.',
    '/œ̃ fɛ mə.zy.ʁe i.lɛ.te.ta.bli kə y.nə tɑ̃.dɑ̃s i.lɛ pʁɔ.babl kə y.ni.pɔ.tɛz i.lɛ pɔ.sibl kə/',
    'uhⁿ FEH muh-zü-RAY | ee-leh-tay-ta-BLEE KUH | ü-nuh tahⁿ-DAHⁿS | ee-leh pro-BABL KUH | ü-nee-po-TEZ | ee-leh po-SEEBL KUH',
    "Tu n'as qu'un seul témoignage d'un riverain. Quelle tournure prends-tu ?",
    "Il est possible que, ou il semble que : une hypothèse, avec le subjonctif. Un témoignage ne fait pas un fait établi.",
    ['degre']),
  gap(2175, 'Il est possible que certains clients aient changé de quartier.', 'Some customers may have moved to another area.',
    '/i.lɛ pɔ.sibl kə sɛʁ.tɛ̃ kli.jɑ̃ ɛ ʃɑ̃.ʒe də kaʁ.tje/', 'ee-leh po-SEEBL | kuh sehr-tehⁿ klee-YAHⁿ | EH shahⁿ-ZHAY | duh kar-TYAY',
    'Il est possible que certains clients ___ changé de quartier. (avoir)',
    'Possible, et un fait déjà passé : le subjonctif passé, aient changé. EN: aient.',
    ['degre', 'passe'], FCVDR),
  gap(2176, 'Il est établi que le nombre de piétons a doublé.', 'It is established that the number of pedestrians has doubled.',
    '/i.lɛ.te.ta.bli kə lə nɔ̃bʁ də pje.tɔ̃ a du.ble/', 'ee-leh-tay-ta-BLEE | kuh luh NOHⁿBR duh pyay-TOHⁿ | a doo-BLAY',
    'Il est établi que le nombre de piétons ___ doublé. (avoir)',
    "Établi : un fait mesuré, l'indicatif, a doublé. EN: a.",
    ['degre', 'indicatif']),
  sent(2177, 'Il serait prématuré de conclure que la mesure est un succès.', 'It would be premature to conclude that the measure is a success.',
    '/il sə.ʁɛ pʁe.ma.ty.ʁe də kɔ̃.klyʁ kə la mə.zyʁ ɛ.tœ̃ syk.sɛ/', 'eel suh-REH pray-ma-tü-RAY | duh kohⁿ-KLÜR | kuh la muh-ZÜR | eh-tuhⁿ sük-SEH', ['degre', 'prudence'], FCVR, SO),
  sent(2178, 'Il est clair que la rue est devenue plus calme.', 'It is clear that the street has become quieter.',
    '/i.lɛ klɛʁ kə la ʁy ɛ də.və.ny ply kalm/', 'ee-leh KLEHR | kuh la RÜ | eh duh-vuh-NÜ | plü KALM', ['degre', 'indicatif']),
  sent(2179, 'Il faudra toutefois que la ville prévoie un accès pour les taxis.', 'The city will nevertheless have to provide access for taxis.',
    '/il fo.dʁa tut.fwa kə la vil pʁe.vwa œ̃.nak.sɛ puʁ le tak.si/', 'eel foh-DRA toot-FWA | kuh la VEEL | pray-VWA uhⁿ-nak-SEH | poor lay tak-SEE', ['recommandation', 'subjonctif']),
];

/* ── ACT 12 · TA NOTE (.2182-.2195) ───────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(2182, "La présente note examine la proposition d'une semaine de quatre jours.", 'This note examines the proposal for a four-day week.',
    '/la pʁe.zɑ̃t nɔt ɛɡ.za.min la pʁɔ.pɔ.zi.sjɔ̃ dyn sə.mɛn də katʁ ʒuʁ/', 'la pray-ZAHⁿT NOT | eg-za-MEEN | la pro-po-zee-SYOHⁿ | dünn suh-MENN | duh katr ZHOOR', ['note', 'plan'], FCVDR, SO),
  sent(2183, "Il est établi que l'absentéisme a baissé pendant l'essai.", 'It is established that absenteeism fell during the trial.',
    '/i.lɛ.te.ta.bli kə lap.sɑ̃.te.ism a be.se pɑ̃.dɑ̃ le.sɛ/', 'ee-leh-tay-ta-BLEE | kuh lap-sahⁿ-tay-EESM | a beh-SAY | pahⁿ-dahⁿ lay-SEH', ['note', 'indicatif']),
  sent(2184, 'Il est probable que la productivité restera stable.', 'Productivity will probably remain stable.',
    '/i.lɛ pʁɔ.babl kə la pʁɔ.dyk.ti.vi.te ʁɛs.tə.ʁa stabl/', 'ee-leh pro-BABL | kuh la pro-dük-tee-vee-TAY | res-tuh-RA STABL', ['note', 'indicatif'], FCVDR),
  sent(2185, "Il n'est pas exclu que le service d'accueil doive rester ouvert le vendredi.", 'It cannot be ruled out that the front desk will have to stay open on Fridays.',
    '/il nɛ pa.zɛks.kly kə lə sɛʁ.vis da.kœj dwav ʁɛs.te u.vɛʁ lə vɑ̃.dʁə.di/', 'eel neh pa-zeks-KLÜ | kuh luh sehr-veess da-KUHY | DWAV res-TAY oo-VEHR | luh vahⁿ-druh-DEE', ['note', 'subjonctif']),
  sent(2186, 'Il est peu probable que cette mesure suffise à réduire les coûts.', 'This measure is unlikely to be enough to cut costs.',
    '/i.lɛ pø pʁɔ.babl kə sɛt mə.zyʁ sy.fiz a ʁe.dɥiʁ le ku/', 'ee-leh peu pro-BABL | kuh set muh-ZÜR | sü-FEEZ | a ray-DWEER lay KOO', ['note', 'subjonctif'], FCVDR),
  sent(2187, "Il est regrettable que les syndicats n'aient pas été consultés.", 'It is regrettable that the unions were not consulted.',
    '/i.lɛ ʁə.ɡʁɛ.tabl kə le sɛ̃.di.ka nɛ pa.ze.te kɔ̃.syl.te/', 'ee-leh ruh-greh-TABL | kuh lay sehⁿ-dee-KA | neh pa-zay-TAY kohⁿ-sül-TAY', ['note', 'jugement']),
  sent(2188, 'Il convient de lancer un second essai de six mois.', 'A second six-month trial should be launched.',
    '/il kɔ̃.vjɛ̃ də lɑ̃.se œ̃ sə.ɡɔ̃.te.sɛ də si mwa/', 'eel kohⁿ-VYEHⁿ | duh lahⁿ-SAY | uhⁿ suh-gohⁿ-tay-SEH | duh see MWA', ['note', 'recommandation'], FCVR, SO),
  sent(2189, 'Il importe que chaque équipe puisse choisir son jour de repos.', 'It is important that each team can choose its day off.',
    '/i.lɛ̃.pɔʁt kə ʃa.ke.kip pɥis ʃwa.ziʁ sɔ̃ ʒuʁ də ʁə.po/', 'ee-lehⁿ-PORT | kuh sha-kay-KEEP | pweess shwa-ZEER | sohⁿ ZHOOR duh ruh-POH', ['note', 'subjonctif'], FCVR, SO),
  sent(2190, 'Il a été décidé que le bilan serait présenté en juin.', 'It has been decided that the assessment will be presented in June.',
    '/i.la.e.te de.si.de kə lə bi.lɑ̃ sə.ʁɛ pʁe.zɑ̃.te ɑ̃ ʒɥɛ̃/', 'ee-la-ay-TAY day-see-DAY | kuh luh bee-LAHⁿ | suh-reh pray-zahⁿ-TAY | ahⁿ ZHWEHⁿ', ['note', 'distance']),
  sent(2191, "En conclusion, il est recommandé d'adopter la mesure, sous conditions.", 'In conclusion, it is recommended that the measure be adopted, subject to conditions.',
    '/ɑ̃ kɔ̃.kly.zjɔ̃ i.lɛ ʁə.kɔ.mɑ̃.de da.dɔp.te la mə.zyʁ su kɔ̃.di.sjɔ̃/', 'ahⁿ kohⁿ-klü-ZYOHⁿ | ee-leh ruh-ko-mahⁿ-DAY | da-dop-TAY la muh-ZÜR | soo kohⁿ-dee-SYOHⁿ', ['note', 'conclusion'], FCVDR, SO),
  sent(2192, "Il s'agit d'un changement profond de l'organisation du travail.", 'This is a profound change in the way work is organised.',
    '/il sa.ʒi dœ̃ ʃɑ̃ʒ.mɑ̃ pʁɔ.fɔ̃ də lɔʁ.ɡa.ni.za.sjɔ̃ dy tʁa.vaj/', 'eel sa-ZHEE | duhⁿ shahⁿzh-MAHⁿ pro-FOHⁿ | duh lor-ga-nee-za-SYOHⁿ | dü tra-VAHY', ['note', 'agir']),
  sent(2193, 'Il reste à définir les modalités pour les équipes de nuit.', 'The arrangements for the night teams remain to be defined.',
    '/il ʁɛst a de.fi.niʁ le mɔ.da.li.te puʁ le.ze.kip də nɥi/', 'eel REST a day-fee-NEER | lay mo-da-lee-TAY | poor lay-zay-KEEP duh NWEE', ['note', 'ouvert']),
  sent(2194, "Il est dommage que l'essai n'ait duré que trois mois.", 'It is a pity the trial only lasted three months.',
    '/i.lɛ dɔ.maʒ kə le.sɛ nɛ dy.ʁe kə tʁwa mwa/', 'ee-leh do-MAZH | kuh lay-SEH | neh dü-RAY | kuh trwa MWA', ['note', 'jugement']),
  sent(2195, 'Il semble que les salariés soient plus reposés.', 'Employees seem to be better rested.',
    '/il sɑ̃bl kə le sa.la.ʁje swa ply ʁə.po.ze/', 'eel SAHⁿBL | kuh lay sa-la-RYAY | swa plü ruh-poh-ZAY', ['note', 'semble']),
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
 *  The long readings (B2: 200 to 350 words) and the nine short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 11. They live
 *  here so the reading, the quiz and the task cannot drift. Every
 *  institution, study and figure is invented and presented as such.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the minutes of a co-owners' meeting, Montréal. */
export const LECTURE_AG =
  "Syndicat de copropriété du 4200, rue Saint-Denis, à Montréal. Compte rendu de l'assemblée générale du 14 octobre. Il est à noter que l'ascenseur sera fermé deux jours la semaine prochaine pour son entretien annuel. Premier point : la toiture. Il a été décidé que la toiture serait refaite au printemps. Selon l'ingénieure, il est possible qu'il y ait des infiltrations cet hiver ; il n'est donc pas nécessaire de lancer des travaux d'urgence, mais il faut que chaque copropriétaire surveille son plafond après les grosses pluies. Deuxième point : le budget. Il est probable que les charges augmenteront l'an prochain, car le contrat de déneigement a été renouvelé à la hausse. Il s'agit d'une décision importante pour tout l'immeuble, et il convient d'en discuter avant le vote de décembre. Troisième point : les parties communes. Il est rappelé aux résidents qu'il est interdit de fumer dans les couloirs. Il reste trois places au stationnement ; il suffit d'écrire au syndic pour en réserver une. Il faut que chaque copropriétaire vide son casier avant la fin du mois. Il manque encore deux signatures au registre : il est demandé aux absents de passer signer d'ici vendredi. Enfin, il est dommage que si peu de résidents soient venus ce soir : si la participation reste aussi faible, il est peu probable que le quorum soit atteint en décembre. Prochaine assemblée : le 9 décembre, à 19 h. Pour le conseil d'administration, le secrétaire de séance.";

/** Act 11: the conclusion of an evaluation report, Sherbrooke. */
export const LECTURE_RAPPORT =
  "Rapport d'évaluation de la rue piétonne d'été, Ville de Sherbrooke (étude fictive). Conclusion. Au terme de ce premier été, plusieurs résultats se dégagent. Il est établi que la fréquentation des commerces a augmenté : les comptages montrent une hausse de 18 % par rapport à l'été précédent. Il ressort également de l'enquête que les piétons sont satisfaits. Il est probable que la qualité de l'air s'est améliorée, même si une seule station de mesure était installée. Il est possible, en revanche, que le bruit ait simplement été déplacé vers les rues voisines, dont plusieurs habitants se sont plaints. Il est peu probable que les livraisons puissent se faire le soir sans gêner les riverains. Enfin, il est à craindre que le secteur devienne trop cher pour les petits commerces si les loyers suivent la fréquentation. Il serait donc prématuré de conclure que la mesure est un succès. Il reste à savoir si les riverains accepteront ce changement sur plusieurs années, et il n'est pas certain que cette hausse se maintienne en hiver. Nos recommandations sont les suivantes. Il convient de prolonger l'expérience d'un an. Il est indispensable que les commerçants soient associés aux décisions, et il faudra toutefois que la ville prévoie un accès pour les taxis. Il est clair que la rue est devenue plus calme ; il importe maintenant de vérifier qu'elle reste accessible à tous.";

/** Act 12: the model the learner imitates, an official note, Namur. */
export const LECTURE_MODELE =
  "Note à l'attention du collège communal de Namur. Objet : la semaine de quatre jours pour le personnel administratif. La présente note examine la proposition d'une semaine de quatre jours, testée pendant trois mois dans deux services. Il s'agit d'un changement profond de l'organisation du travail, qu'il convient d'évaluer avec prudence. Les résultats. Il est établi que l'absentéisme a baissé pendant l'essai : les chiffres des deux services le montrent. Il semble que les salariés soient plus reposés, d'après une enquête interne. Il est probable que la productivité restera stable, puisque les dossiers ont été traités dans les délais. Il est peu probable, en revanche, que cette mesure suffise à réduire les coûts. Il n'est pas exclu que le service d'accueil doive rester ouvert le vendredi, ce qui compliquerait les horaires. Il est regrettable que les syndicats n'aient pas été consultés, et il est dommage que l'essai n'ait duré que trois mois. Les recommandations. En conclusion, il est recommandé d'adopter la mesure, sous conditions. Il convient de lancer un second essai de six mois. Il importe que chaque équipe puisse choisir son jour de repos, et il reste à définir les modalités pour les équipes de nuit. Il a été décidé que le bilan serait présenté en juin. Pour le service des ressources humaines, Claire Dubois.";

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "Un extrait du guide du nouvel habitant de la commune de Lausanne. Complète chaque blanc avec de, que, ou rien. « Dans les huit jours qui suivent votre arrivée, il convient (___) signaler votre adresse au contrôle des habitants. Il suffit (___) remplir le formulaire en ligne. Si vous êtes salarié, il faut (___) votre employeur remplisse l'attestation. Il y a lieu (___) vérifier la date d'expiration de votre permis. Il vaut mieux (___) prendre rendez-vous le matin : il n'y a alors pas lieu (___) s'inquiéter des délais. »";

export const TEXTE_A4 =
  "La note de service d'une unité de cardiologie, à Liège. Mets chaque verbe au subjonctif et choisis la bonne négation. « À partir du 1er mars, il est indispensable que chaque patient (avoir) son bracelet au poignet. Il importe que l'équipe de nuit (être) prévenue avant vingt heures de tout changement de traitement. Il faut que chaque visiteur (mettre) un masque. En revanche, (il ne faut pas / il n'est pas nécessaire) que les familles prennent rendez-vous : elles peuvent venir librement de 14 h à 20 h. Enfin, (il ne faut pas / il n'est pas nécessaire) qu'un soignant (partir) avant la relève. »";

export const TEXTE_A5 =
  "Le point météo de la radio locale, à Québec. Mets chaque verbe au mode qui convient, au présent ou au futur. « La tempête arrive. Il est certain qu'elle (toucher) la ville dès ce soir, et il est très probable que les écoles (être) fermées demain. Il est possible que des vols (être) annulés, mais il est peu probable que le courant (être) coupé dans le centre. Enfin, il est douteux que les routes (être) dégagées avant midi : il vaut mieux rester chez soi. »";

export const TEXTE_A6 =
  "Le rectificatif d'un quotidien bruxellois. Mets à la forme négative les trois phrases entre crochets, en choisissant le mode, puis complète la dernière phrase. « Dans notre édition d'hier, nous écrivions : [Il est certain que le ministre est au courant.] [Il est clair que la source est fiable.] [Il est prouvé que le document est authentique.] Après vérification, nous devons nuancer ces trois affirmations. Une chose reste sûre : il ne fait aucun doute que les chiffres (avoir) été vérifiés. Nos excuses à nos lecteurs. La rédaction »";

export const TEXTE_A7 =
  "Le journal de 13 h d'une radio dakaroise, sur la nouvelle ligne de bus. Pour chaque phrase, dis si l'information est une rumeur, une impression, un avis ou un fait vérifié. « Il s'avère que la ligne a été construite en deux ans. D'après les premiers chiffres, il semble que la fréquentation dépasse les prévisions. Il paraît que les billets seront gratuits le premier mois, mais la société de transport ne l'a pas confirmé. Notre reporter, elle, reste prudente : il me semble que la ligne est en avance, dit-elle, mais il faut attendre le bilan. »";

export const TEXTE_A8 =
  "La conclusion du bilan des bénévoles de la Fête des Lumières, à Lyon. Mets chaque verbe entre parenthèses à la forme qui convient. « Il est heureux que la pluie (s'arrêter) à temps samedi. Il est regrettable, en revanche, que la navette (être supprimée) cette année. Il est normal que les riverains (vouloir) du calme après minuit ; il est donc temps que la ville (revoir) son plan de circulation. Enfin, il est dommage de (fermer) les quais si tôt, et il serait souhaitable que la fête (finir) plus tôt le dimanche. »";

export const TEXTE_A9 =
  "L'avis affiché dans le hall d'une résidence étudiante de Toulouse. Mets chaque verbe entre parenthèses au mode qui convient. « Avis aux résidents. À la suite du conseil de résidence du 3 mai, il a été décidé que la salle de sport (fermer, au conditionnel) à vingt-deux heures. Il est rappelé que les visites (être) interdites après minuit. Il est demandé que chaque chambre (être) libérée avant dix heures le jour du départ. Il est prévu que les travaux (durer, au futur) trois semaines. Enfin, il est exigé que chaque résident (avoir) une assurance habitation. La direction »";

export const TEXTE_A10 =
  "Le message de Fanta, qui organise un colloque à Abidjan, à son équipe, la veille au soir. Mets chaque verbe au temps indiqué et fais l'accord qui convient. « Bonsoir à tous. La salle est presque prête, mais il (manquer, présent) encore deux chaises au premier rang. Il (exister, présent) plusieurs façons de disposer les tables : choisissez la plus simple. Il (arriver, passé composé) des colis pour les intervenants. Il (se produire, passé composé) deux coupures de courant cet après-midi. Enfin, dans le programme, il (s'agir, présent) de l'eau potable, pas de l'énergie : corrigez l'affiche. Merci, Fanta »";

export const TEXTE_A11 =
  "Le premier jet d'une conclusion écrite par un stagiaire, à Sherbrooke. Il affirme tout. Réécris chaque phrase au degré que les données permettent (entre crochets). « Il est certain que la fréquentation des commerces a augmenté [mesuré]. Il est certain que la qualité de l'air s'est améliorée [probable]. Il est certain que le bruit a été déplacé vers les rues voisines [une hypothèse]. Il est certain que les livraisons pourront se faire le soir [peu probable]. Il est certain que le secteur deviendra trop cher [une crainte]. »";
