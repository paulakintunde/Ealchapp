// b1.04.l1 « Passé composé ou imparfait : les paires » (DRAFT) - the glossary.
//
// Defined once, surfaced wherever used. Three chips per section at most, and
// the chip row has a 37-character budget on a Pixel 6, so every `term` is
// short. Every key here is surfaced by at least one section (asserted in the
// scratch check, not yet by a test).
//
// B1 LANGUAGE RULE: the body is simple French, and the explanation ends with a
// one-line English gloss starting `EN: ` (LessonTerm has no `en` field).
//
// Chip lengths: un état 7 · un moment 9 · le résultat 11 · un indice 9 ·
// ton choix 9 · je croyais 10. Any three fit the 37-character row.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './pc-imparfait-paires-corpus.ts';

export const PAIRES_TERMS: Record<string, LessonTerm> = {
  /** Half one of the reframe. */
  etat: {
    term: 'un état',
    title: "Ce qui dure : l'imparfait",
    body: "Un état, c'est une situation qui dure : savoir, connaître, avoir peur, être malade. À l'imparfait, rien ne commence et rien ne finit dans la phrase. EN: A state is a situation that lasts; in the imparfait nothing starts or ends.",
    examples: [
      { itemId: E(301), note: 'tu le savais déjà' },
      { itemId: 'fr.a2.famille.012', note: 'était malade : le décor, puis elle est venue' },
      { itemId: 'fr.b1.cafe.094', note: 'un état, à la forme négative' },
    ],
  },

  /** Half two of the reframe. */
  moment: {
    term: 'un moment',
    title: 'Quelque chose arrive : le passé composé',
    body: "Avec ces verbes, le passé composé montre un moment : la nouvelle arrive (j'ai su), la rencontre a lieu (j'ai connu), la peur commence (j'ai eu peur). Le verbe anglais change aussi. EN: The passé composé shows the moment, and the English verb changes with it.",
    examples: [
      { itemId: E(302), note: 'found out' },
      { itemId: E(304), note: 'met' },
      { itemId: 'fr.a2.verbes.619', note: 'got scared' },
    ],
  },

  /** devoir, pouvoir, vouloir, falloir: is the outcome in the sentence? */
  resultat: {
    term: 'le résultat',
    title: "Est-ce que c'est arrivé ?",
    body: "je devais, je pouvais, je voulais, il fallait : la phrase ne dit pas si c'est arrivé. j'ai dû, j'ai pu, il a fallu : c'est arrivé. je n'ai pas pu, je n'ai pas voulu : ce n'est pas arrivé. EN: The imparfait leaves the outcome open; the passé composé states it.",
    examples: [
      { itemId: E(312), note: 'venu ? on ne sait pas' },
      { itemId: 'fr.a2.verbes.607', note: 'parti, c\'est sûr' },
      { itemId: 'fr.a2.marche.128', note: 'obligé, et acheté' },
    ],
  },

  /** The cues are cues. b1.03 owns them; this lesson shows both tenses. */
  indice: {
    term: 'un indice',
    title: 'Un signal, pas une règle',
    body: "hier, pendant deux heures, depuis : ces mots aident, mais ils ne choisissent pas le temps. Hier, il pleuvait et Hier, il a plu sont correctes toutes les deux. C'est le sens qui décide. EN: Time words are clues, not rules; the meaning decides.",
    examples: [
      { itemId: E(323), note: 'hier + décor' },
      { itemId: 'fr.a1.heure-et-date.048', note: 'hier + fait' },
      { itemId: E(325), note: 'pendant + habitude' },
    ],
  },

  /** The speaker's choice: décor or event, both correct. */
  choix: {
    term: 'ton choix',
    title: 'Décor ou action',
    body: "Le même fait peut être un décor (il neigeait) ou une action (il a neigé). Les deux sont correctes. Tu choisis ce que tu veux montrer : l'ambiance, ou ce qui s'est passé. EN: Background or event is a choice of style, not a right or wrong answer.",
    examples: [
      { itemId: E(328), note: 'le décor' },
      { itemId: E(329), note: "l'action" },
      { itemId: 'fr.a2.sports-et-loisirs.061', note: 'les deux dans une phrase' },
    ],
  },

  /** croire, penser: the belief that turned out false. */
  faux: {
    term: 'je croyais',
    title: 'Une idée fausse, avant',
    body: "je croyais que, je pensais que : tu avais cette idée avant, et tu as appris ensuite qu'elle était fausse. C'est très fréquent quand on raconte une surprise. EN: I thought, and I later found out I was wrong.",
    examples: [
      { itemId: E(321), note: "et c'était ouvert" },
      { itemId: E(322), note: "et tu n'y étais pas" },
    ],
  },
};
