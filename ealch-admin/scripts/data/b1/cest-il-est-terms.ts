// b1.22.l1 « C'est ou il est » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters; the scratch check
// measures every section's actual trio against 37.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './cest-il-est-corpus.ts';

export const CEST_IL_EST_TERMS: Record<string, LessonTerm> = {
  /** The finger. */
  doigt: {
    term: 'le doigt',
    title: "C'est montre",
    body: "C'est montre quelque chose du doigt : un nom avec son petit mot, un prénom, une personne, une scène entière. Tu dis ce que c'est, ou qui c'est. EN: c'est points: it says what or who something is.",
    examples: [
      { itemId: E(1000), note: 'tu montres la valise' },
      { itemId: E(1052), note: 'tu montres une personne, par son prénom' },
      { itemId: E(1068), note: 'tu montres tout un paysage' },
    ],
  },

  /** The label. */
  etiquette: {
    term: "l'étiquette",
    title: 'Il est, elle est décrit',
    body: "Il est et elle est collent une étiquette sur quelque chose de déjà montré. Il ou elle reprend un nom connu, et l'adjectif s'accorde avec lui. EN: il est labels something already named; the adjective agrees with that noun.",
    examples: [
      { itemId: E(1001), note: 'la valise, déjà montrée : elle' },
      { itemId: E(1029), note: 'le chef, déjà nommé : il' },
      { itemId: 'fr.a2.adjectifs-essentiels.022', note: 'une personne connue' },
    ],
  },

  /** Jobs, nationality, religion. */
  metier: {
    term: 'le métier',
    title: 'Le métier, avec ou sans article',
    body: "Il est médecin : le métier est une étiquette, sans article. Dès qu'un adjectif arrive, le métier redevient un nom qu'on montre : c'est un bon médecin. Pareil pour la nationalité et la religion. EN: bare job after il est; add an adjective and it becomes c'est un.",
    examples: [
      { itemId: 'fr.a1.metiers.275', note: 'le métier seul : il est' },
      { itemId: E(1035), note: 'le métier et un adjectif : c’est un' },
      { itemId: E(1041), note: 'la nationalité comme nom, avec une majuscule' },
    ],
  },

  /** Names and stressed pronouns. */
  tonique: {
    term: "c'est moi",
    title: 'Un prénom, un pronom : c’est',
    body: "Devant un prénom ou devant moi, toi, lui, elle, nous, vous, eux, on dit c'est. Ces mots sont déjà précis : on les montre. Au pluriel, ce sont eux, ou c'est eux à l'oral. EN: before a name or a stressed pronoun, always c'est.",
    examples: [
      { itemId: E(1053), note: 'à l’interphone' },
      { itemId: E(1062), note: 'au téléphone, avec son nom' },
      { itemId: E(1057), note: 'le pluriel écrit' },
    ],
  },

  /** A situation, an idea, an activity. */
  situation: {
    term: 'la situation',
    title: 'Une situation : c’est, au masculin',
    body: "Pour une situation, une idée ou une activité, tu montres le tout avec c'est, et l'adjectif reste au masculin : c'est beau, c'est cher, c'est difficile. Elle est belle parle d'un nom féminin précis. EN: for a situation, c'est plus a masculine adjective.",
    examples: [
      { itemId: E(1070), note: 'un déménagement, en général' },
      { itemId: E(1078), note: 'une activité' },
      { itemId: E(1069), note: 'la vue, un nom précis : elle' },
    ],
  },

  /** Ce sont and the spoken plural. */
  pluriel: {
    term: 'le pluriel',
    title: 'Ce sont, ou c’est à l’oral',
    body: "Le pluriel de c'est est ce sont : ce sont mes collègues. À l'oral, beaucoup de gens disent c'est mes collègues. Tu l'entendras partout, mais à l'écrit, garde ce sont. EN: write ce sont; you will hear c'est + plural in speech.",
    examples: [
      { itemId: E(1086), note: 'la forme écrite' },
      { itemId: E(1087), note: 'la même phrase, à l’oral' },
      { itemId: E(1089), note: 'au négatif : ce ne sont pas' },
    ],
  },

  /** Adjective + de / à + infinitive. */
  infinitif: {
    term: "l'infinitif",
    title: 'Il est ... de, c’est ... à',
    body: "Il est difficile de trouver un logement : l'infinitif arrive après, c'est l'écrit. À l'oral : c'est difficile de. Si tu parles d'une chose déjà nommée, tu dis à : un logement, c'est difficile à trouver. EN: de announces the infinitive; à points back to something named.",
    examples: [
      { itemId: E(1102), note: 'de, à l’écrit' },
      { itemId: E(1103), note: 'de, à l’oral' },
      { itemId: E(1104), note: 'à : le logement est déjà nommé' },
    ],
  },

  /** Ça, cela, ce. */
  ca: {
    term: 'ça et cela',
    title: 'Ce devant être, ça ailleurs',
    body: "Ce ne va que devant être : c'est, ce sont, c'était. Devant les autres verbes, tu dis ça à l'oral et cela à l'écrit : ça marche, cela ne pose aucun problème. Ça, c'est montre deux fois. EN: ce only before être; ça or cela before any other verb.",
    examples: [
      { itemId: E(1125), note: 'ça devant plaire' },
      { itemId: E(1124), note: 'cela, à l’écrit' },
      { itemId: E(1120), note: 'ça et c’est ensemble, pour insister' },
    ],
  },

  /** Mise en relief. */
  relief: {
    term: "c'est ... qui",
    title: 'Mettre en relief',
    body: "Pour insister sur un mot, tu le montres du doigt : c'est Hugo qui a appelé, c'est demain que je commence. Qui si rien d'autre ne fait le verbe, que s'il y a déjà un sujet. EN: to stress a word, put it between c'est and qui or que.",
    examples: [
      { itemId: E(1136), note: 'Hugo, et pas un autre' },
      { itemId: E(1139), note: 'demain, et pas un autre jour' },
      { itemId: E(1141), note: 'au négatif, pour se défendre' },
    ],
  },

  /** The frozen il. */
  fige: {
    term: 'il est midi',
    title: 'Le il figé',
    body: "Pour l'heure et le temps qui passe, le français garde un il qui ne montre rien : il est midi, il est tard, il est temps de partir. Ce il ne remplace aucun nom. EN: the time takes a frozen il that stands for nothing.",
    examples: [
      { itemId: E(1154), note: 'il est tard : l’horloge' },
      { itemId: E(1156), note: 'il est temps de + infinitif' },
      { itemId: E(1158), note: 'c’est trop tard : la situation' },
    ],
  },

  /** The written product the task asks for. */
  portrait: {
    term: 'le portrait',
    title: 'Montrer, décrire, raconter',
    body: "Un bon portrait montre d'abord la personne avec c'est, puis la décrit avec il ou elle est, puis raconte une anecdote, souvent avec c'est ... qui. EN: a portrait points, then labels, then tells a story.",
    examples: [
      { itemId: E(1168), note: 'montrer' },
      { itemId: E(1175), note: 'décrire' },
      { itemId: E(1176), note: 'raconter, avec c’est ... qui' },
    ],
  },
};
