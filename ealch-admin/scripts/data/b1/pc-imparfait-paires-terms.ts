// b1.04.l1 « Passé composé ou imparfait : les paires » — the lesson glossary.
// REBUILD v2, to RICH-LESSON-STANDARD.md. DRAFT.
//
// Defined once, surfaced wherever used via a section's `terms` chips. THREE
// CHIPS PER SECTION AT MOST, 37-character budget for the chip row, so every
// `term` label is short (longest: « une supposition », 15).
//
// Body: simple French, tu, ending on a one-line gloss starting « EN: ». Every
// key is surfaced by at least one section (asserted in the scratch validator).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, REFRAME, REFRAME_EN, THE_TEST, THE_TEST_EN } from './pc-imparfait-paires-corpus.ts';

export { REFRAME, REFRAME_EN, THE_TEST, THE_TEST_EN };

export const PAIRES_TERMS: Record<string, LessonTerm> = {
  /** Half one of the test. */
  etat: {
    term: 'un état',
    title: 'Ce qui dure',
    body: `Un état, c'est une situation qui dure : savoir, connaître, avoir peur, être malade, vouloir. À l'imparfait, rien ne commence et rien ne finit dans la phrase. ${THE_TEST} EN: a state lasts; in the imparfait nothing starts and nothing ends.`,
    examples: [
      { itemId: E(318), note: 'tu le savais déjà' },
      { itemId: E(1222), note: 'la peur dure' },
      { itemId: 'fr.b1.cafe.094', note: 'un état, à la forme négative' },
    ],
  },

  /** Half two of the test. */
  moment: {
    term: 'un moment',
    title: 'Ce qui arrive',
    body: `Au passé composé, ces verbes montrent un moment : la nouvelle arrive (j'ai su), la rencontre a lieu (j'ai connu), la peur commence (j'ai eu peur). Le verbe anglais change aussi. ${REFRAME} EN: the passé composé shows the moment, and the English verb changes with it.`,
    examples: [
      { itemId: E(319), note: 'found out' },
      { itemId: E(338), note: 'met' },
      { itemId: 'fr.a2.verbes.619', note: 'got scared' },
    ],
  },

  /** devoir, pouvoir, vouloir, falloir: is the outcome in the sentence? */
  resultat: {
    term: 'le résultat',
    title: "Est-ce que c'est arrivé ?",
    body: "je devais, je pouvais, je voulais, il fallait : la phrase ne dit pas si c'est arrivé. j'ai dû, j'ai pu, il a fallu : c'est arrivé. je n'ai pas pu, je n'ai pas voulu : ce n'est pas arrivé. EN: the imparfait leaves the outcome open; the passé composé states it.",
    examples: [
      { itemId: E(301), note: 'venu ? on ne sait pas' },
      { itemId: E(302), note: "parti, c'est sûr" },
      { itemId: 'fr.a2.marche.128', note: 'obligé, et acheté' },
    ],
  },

  /** The third reading of devoir. */
  supposition: {
    term: 'une supposition',
    title: 'Il a dû oublier',
    body: "il a dû + verbe a un deuxième sens : tu ne l'as pas vu, mais tu en es presque sûr. Il a dû oublier, elle a dû se tromper, il a dû pleuvoir. Ce n'est pas une obligation, c'est ta conclusion. EN: a dû plus a verb can mean must have: your conclusion about the past.",
    examples: [
      { itemId: E(1207), note: 'il a dû oublier' },
      { itemId: E(1208), note: 'elle a dû se tromper' },
      { itemId: E(1214), note: 'il a dû pleuvoir' },
    ],
  },

  /** The meeting and the closed period. */
  rencontre: {
    term: 'la rencontre',
    title: "j'ai connu",
    body: "Au passé composé, connaître dit deux choses : la première rencontre (j'ai connu ma femme au travail), ou une période finie, vue en entier (il a connu des hivers durs). Dans les deux cas, quelque chose s'est passé et c'est terminé. EN: connu is either the meeting or a period seen whole, and over.",
    examples: [
      { itemId: E(338), note: 'la rencontre' },
      { itemId: E(341), note: 'une période finie' },
      { itemId: E(348), note: "et ici, on comprend que c'est fini" },
    ],
  },

  /** The negatives that assert. */
  refus: {
    term: 'un refus',
    title: "je n'ai pas voulu",
    body: "À la forme négative, le passé composé dit quelque chose de fort : je n'ai pas voulu = j'ai refusé, je n'ai pas pu = j'ai essayé et ça n'a pas marché. L'imparfait, lui, décrit seulement : je ne voulais pas, je ne pouvais pas. EN: in the negative, the passé composé asserts a refusal or a failure.",
    examples: [
      { itemId: E(378), note: 'il a dit non' },
      { itemId: E(358), note: "ça n'a pas marché" },
      { itemId: E(379), note: "et ici, c'est juste une description" },
    ],
  },

  /** The cues are cues. b1.03 owns them; this lesson shows both tenses. */
  indice: {
    term: 'un indice',
    title: 'Un signal, pas une règle',
    body: "hier, pendant deux heures, ce jour-là, en 2019 : ces mots aident, mais ils ne choisissent pas le temps. Hier, il pleuvait et Hier, il a plu sont corrects tous les deux. C'est le sens qui décide. EN: time words are clues, not rules; the meaning decides.",
    examples: [
      { itemId: E(1260), note: 'hier + décor' },
      { itemId: E(1261), note: 'hier + action' },
      { itemId: E(1265), note: "pendant, et pourtant l'imparfait" },
    ],
  },

  /** The speaker's choice: décor or action, both correct. */
  choix: {
    term: 'ton choix',
    title: 'Décor ou action',
    body: "Le même fait peut être un décor (il neigeait) ou une action (il a neigé). Les deux sont corrects. Tu choisis ce que tu veux montrer : l'ambiance autour, ou ce qui s'est passé. EN: background or action is a choice of style, not right against wrong.",
    examples: [
      { itemId: E(1280), note: 'le décor' },
      { itemId: E(1281), note: "l'action" },
      { itemId: 'fr.a2.sports-et-loisirs.061', note: 'les deux dans une phrase' },
    ],
  },

  /** croire, penser: the belief that turned out false. */
  faux: {
    term: 'je croyais',
    title: 'Une idée fausse, avant',
    body: "je croyais que, je pensais que : tu avais cette idée avant, et tu as appris ensuite qu'elle était fausse. C'est la façon normale de raconter une surprise. EN: I thought, and then I found out I was wrong.",
    examples: [
      { itemId: E(1251), note: "et c'était ouvert" },
      { itemId: E(1253), note: "et tu n'y étais pas" },
      { itemId: 'fr.b1.cafe.094', note: 'la même idée avec savoir' },
    ],
  },
};
