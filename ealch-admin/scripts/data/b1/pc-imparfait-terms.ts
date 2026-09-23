// b1.03.l1 « Passé composé ou imparfait : les bases » — the lesson glossary.
//
// DRAFT. Defined once, surfaced wherever used (a section names a key in
// `terms` and the renderer draws a chip).
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER BUDGET for the chip row on a
// Pixel 6. The five `term` labels are 8 to 13 characters, so any three fit:
// the longest trio (« durée fermée » + « la coupure » + « un indice ») is 31.
//
// B1 LANGUAGE RULE: the body is simple French, then ONE English line starting
// « EN: ». Every term is surfaced by at least one section (asserted in the
// scratch check).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, IMPORTED } from './pc-imparfait-corpus.ts';

export const PC_IMPARFAIT_TERMS: Record<string, LessonTerm> = {
  /** Lens 1. */
  decor: {
    term: 'le décor',
    title: "Le décor, c'est l'imparfait",
    body: "Dans un film, le décor est déjà là quand l'action commence. Le temps, le lieu, ce qu'on faisait, comment on se sentait : tout ça continue derrière. On ne voit ni le début ni la fin. EN: The décor is what was already going on; the imparfait shows it without a start or an end.",
    examples: [
      { itemId: E(3), note: 'la pluie et la terrasse vide: le décor' },
      { itemId: E(22), note: 'deux décors en même temps' },
      { itemId: 'fr.b1.cafe.083', note: 'la terrasse était pleine avant notre arrivée' },
    ],
  },

  /** Lens 2. */
  action: {
    term: "l'action",
    title: "L'action, c'est le passé composé",
    body: "L'action fait avancer le film. Après elle, la situation n'est plus la même. Chaque action est finie, et on peut compter les actions : d'abord ça, puis ça. EN: An action moves the story on and is complete; a chain of them takes the passé composé.",
    examples: [
      { itemId: E(30), note: "trois actions, dans l'ordre" },
      { itemId: E(32), note: "d'abord, puis: deux actions" },
      { itemId: E(1), note: "le vol: l'action de la scène" },
    ],
  },

  /** The interruption shape. */
  coupure: {
    term: 'la coupure',
    title: "Quand l'action coupe le décor",
    body: "Une action en cours, à l'imparfait. Une autre action arrive et la coupe, au passé composé. Avec quand, l'action coupe souvent le décor. Avec pendant que, le décor est souvent dans la même phrase. EN: An ongoing action (imparfait) is cut by an event (passé composé).",
    examples: [
      { itemId: E(10), note: 'je dormais, puis le téléphone' },
      { itemId: E(11), note: "pendant que + imparfait, puis l'action" },
      { itemId: IMPORTED.mixed[0], note: 'pendant que nous attendions: le décor du repas' },
    ],
  },

  /** Bounded duration. */
  duree: {
    term: 'durée fermée',
    title: 'Long, mais fermé',
    body: "Dix ans, toute la journée, deux heures : si on donne la durée et que c'est fini, c'est le passé composé. La longueur ne compte pas. Ce qui compte, c'est la fin. EN: A duration that is stated and over takes the passé composé, however long it was.",
    examples: [
      { itemId: E(40), note: 'dix ans, et fini' },
      { itemId: E(41), note: 'Lyon comme décor: ouvert, sans fin' },
      { itemId: 'fr.a2.ecole.045', note: 'trois ans de maths, et fini' },
    ],
  },

  /** Cues, not rules. */
  indice: {
    term: 'un indice',
    title: "Un indice, pas une règle",
    body: "Soudain ou un jour annoncent souvent une action. Tous les jours ou d'habitude annoncent souvent le décor. Souvent, pas toujours : c'est le rôle du verbe dans l'histoire qui décide. EN: Time words are clues, not triggers; the verb's job in the story decides.",
    examples: [
      { itemId: E(60), note: 'soudain + action: le cas normal' },
      { itemId: E(61), note: 'soudain + décor: possible' },
      { itemId: E(65), note: 'tous les jours, mais un mois fermé' },
    ],
  },
};
