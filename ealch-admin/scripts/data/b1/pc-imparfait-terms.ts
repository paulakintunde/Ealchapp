// b1.03.l1 « Passé composé ou imparfait : les bases » — the lesson glossary.
// REBUILD v2, to RICH-LESSON-STANDARD.md. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, so the widest trio
// (« la coupure » + « en même temps » + « durée fermée ») is 35. Asserted in
// the scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './pc-imparfait-corpus.ts';

export const PC_IMPARFAIT_TERMS: Record<string, LessonTerm> = {
  /** Lens 1. */
  decor: {
    term: 'le décor',
    title: "Le décor, c'est l'imparfait",
    body: "Dans un film, le décor est déjà là quand l'action commence. Le lieu, la météo, ce que tu faisais, comment tu te sentais : tout ça continue derrière. On ne voit ni le début ni la fin. EN: The décor is what was already going on, with no start and no end in view.",
    examples: [
      { itemId: E(203), note: 'la pluie et la terrasse vide' },
      { itemId: E(1012), note: 'une salle pleine, des gens qui parlent' },
      { itemId: 'fr.b1.cafe.083', note: 'la terrasse était pleine avant notre arrivée' },
    ],
  },

  /** Lens 2. */
  action: {
    term: "l'action",
    title: "L'action, c'est le passé composé",
    body: "L'action fait avancer le film. Après elle, la situation n'est plus la même. Chaque action est finie, et tu peux les compter : d'abord ça, puis ça. EN: An action moves the story on, is complete, and can be counted.",
    examples: [
      { itemId: E(201), note: "le vol: l'action de la scène" },
      { itemId: E(1016), note: 'un moment précis' },
      { itemId: E(232), note: "d'abord, puis: deux actions" },
    ],
  },

  /** The interruption shape (act 3). */
  coupure: {
    term: 'la coupure',
    title: "Quand l'action coupe le décor",
    body: "Une action est en cours, à l'imparfait. Une autre arrive et la coupe, au passé composé. Avec quand, l'action coupe souvent. Avec pendant que, c'est souvent le décor qui suit. EN: An ongoing imparfait action is cut by a passé composé event.",
    examples: [
      { itemId: E(210), note: 'je dormais, puis le téléphone' },
      { itemId: E(211), note: "pendant que + décor, puis l'action" },
      { itemId: E(1037), note: "l'ordre des deux morceaux peut changer" },
    ],
  },

  /** Two backgrounds at once (act 4). */
  ensemble: {
    term: 'en même temps',
    title: 'Deux décors, aucune action',
    body: "Deux choses peuvent durer en même temps sans que rien n'arrive. Les deux verbes restent à l'imparfait, et personne ne coupe personne. EN: Two things running at once, both imparfait, with no event between them.",
    examples: [
      { itemId: E(220), note: 'deux activités en parallèle' },
      { itemId: E(1047), note: 'la cuisine et la radio' },
      { itemId: E(222), note: 'la neige et les rues vides' },
    ],
  },

  /** A chain of events (act 5). */
  suite: {
    term: 'la suite',
    title: "Les actions se suivent",
    body: "Quand tu racontes plusieurs actions finies, l'ordre des verbes devient l'ordre de l'histoire. D'abord, puis, ensuite, alors, finalement guident ton lecteur. EN: In a chain of events the order of the verbs is the order of the story.",
    examples: [
      { itemId: E(230), note: 'trois actions, dans l’ordre' },
      { itemId: E(1058), note: "d'abord, ensuite" },
      { itemId: E(1059), note: 'finalement: la dernière étape' },
    ],
  },

  /** Bounded duration (act 6). */
  duree: {
    term: 'durée fermée',
    title: 'Long, mais fermé',
    body: "Dix ans, toute la journée, deux heures : si la durée est donnée et qu'elle est finie, c'est le passé composé. La longueur ne compte pas, la fin compte. EN: A stated, finished stretch of time takes the passé composé, however long.",
    examples: [
      { itemId: E(240), note: 'dix ans, et fini' },
      { itemId: E(241), note: 'Lyon comme décor: pas de durée donnée' },
      { itemId: 'fr.a2.ecole.045', note: 'trois ans de maths, et fini' },
    ],
  },

  /** Cues, not rules (act 8). */
  indice: {
    term: 'un indice',
    title: 'Un indice, pas une règle',
    body: "Soudain ou un jour annoncent souvent une action. Tous les jours ou d'habitude annoncent souvent le décor. Souvent, pas toujours : c'est le rôle du verbe qui décide. EN: Time words are clues, not triggers; the verb's job decides.",
    examples: [
      { itemId: E(260), note: 'soudain + action: le cas normal' },
      { itemId: E(261), note: 'soudain + décor: possible aussi' },
      { itemId: E(265), note: 'tous les jours, mais un mois fermé' },
    ],
  },

  /** The narrative itself (acts 9 and 10). */
  recit: {
    term: 'le récit',
    title: 'Un récit qui tient debout',
    body: "Un récit a un décor au début, des actions au milieu et une fin. Si tu enlèves le décor, on ne voit plus rien. Si tu enlèves les actions, rien n'avance. EN: A narrative needs a setting, events and an ending.",
    examples: [
      { itemId: E(1151), note: 'une ouverture' },
      { itemId: E(1133), note: 'le moment où tout bascule' },
      { itemId: E(1153), note: 'une vraie fin' },
    ],
  },
};
