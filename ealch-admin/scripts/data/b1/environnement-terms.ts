// b1.33.l1 « L'environnement et la société » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters; the scratch check
// asserts that every section's chips fit in 37, and that every term is
// surfaced by at least one section.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './environnement-corpus.ts';

export const ENVIRONNEMENT_TERMS: Record<string, LessonTerm> = {
  /** The first half of the reframe. */
  famille: {
    term: 'la famille',
    title: 'Une famille de mots',
    body: "Un verbe, un nom, un adjectif, parfois une personne, qui viennent de la même racine : polluer, la pollution, polluant, un pollueur. Quand tu en connais un, tu devines les autres. EN: A word family is a verb, a noun, an adjective and sometimes a person built on one root.",
    examples: [
      { itemId: E(1034), note: 'quatre mots, une racine' },
      { itemId: E(1004), note: 'le verbe, le nom, l’adjectif' },
    ],
  },

  /** The second half of the reframe: collocations. */
  voisins: {
    term: 'les voisins',
    title: 'Les mots qui vont ensemble',
    body: "Certains mots vont toujours avec les mêmes voisins : on fait le tri, on économise l'énergie, on signe une pétition. Si tu changes le voisin, la phrase sonne faux. EN: Collocations are the words a word always stands next to.",
    examples: [
      { itemId: E(1000), note: 'économiser, pas sauver' },
      { itemId: E(1001), note: 'faire, pas trier le tri' },
      { itemId: E(1154), note: 'signer une pétition' },
    ],
  },

  /** Act 3: the ending tells the class. */
  suffixe: {
    term: 'la fin du mot',
    title: 'La fin du mot dit ce que c’est',
    body: "La fin d'un mot te dit souvent sa classe : -tion et -ment font un nom, -ant ou -able un adjectif, -eur une personne. EN: The ending tells you the class: -tion and -ment nouns, -ant and -able adjectives, -eur a person.",
    examples: [
      { itemId: E(1048), note: 'la règle en une phrase' },
      { itemId: E(1049), note: '-eur : la personne' },
    ],
  },

  /** The English look-alikes. */
  fauxami: {
    term: 'le faux ami',
    title: 'Un mot qui ressemble à l’anglais',
    body: "Il ressemble à un mot anglais, mais il ne veut pas dire la même chose, ou il ne va pas avec le même voisin. Power plant, c'est une centrale, pas une plante. EN: A false friend looks English but means something else here.",
    examples: [
      { itemId: E(1010), note: 'save energy : économiser' },
      { itemId: E(1111), note: 'power plant : une centrale' },
      { itemId: E(1069), note: 'waste : déchets ou gaspillage' },
    ],
  },

  /** Regional forms, none wrong. */
  variante: {
    term: 'la variante',
    title: 'Un autre mot ailleurs',
    body: "Le même objet a parfois un autre nom au Québec, en Belgique, en Suisse ou en France. Aucun n'est faux : chacun est juste chez lui. EN: A regional variant is right where it is used.",
    examples: [
      { itemId: E(1056), note: 'au Québec' },
      { itemId: E(1057), note: 'en Belgique' },
      { itemId: E(1106), note: 'fermer la lumière, au Québec' },
    ],
  },

  /** Act 8: what undergoes against what acts. */
  subiagit: {
    term: 'subi ou agit',
    title: 'Menacé ou menaçant',
    body: "Le participe en -é dit ce qui subit : une espèce menacée, un lac pollué. L'adjectif en -ant dit ce qui agit : un chien menaçant, une usine polluante. EN: -é undergoes, -ant acts.",
    examples: [
      { itemId: E(1147), note: 'la règle en une phrase' },
      { itemId: E(1047), note: 'le lac a été sali' },
    ],
  },

  /** The everyday action. */
  geste: {
    term: 'le geste',
    title: 'Un geste du quotidien',
    body: "Une petite action que tu fais toi-même : baisser le chauffage, faire le tri, prendre le vélo. EN: An everyday action you take yourself.",
    examples: [
      { itemId: E(1105), note: 'un degré de moins' },
      { itemId: E(1198), note: 'le geste et la décision' },
    ],
  },

  /** The public decision. */
  mesure: {
    term: 'la mesure',
    title: 'Une mesure publique',
    body: "Une décision de la ville ou de l'État pour tout le monde : une taxe, une zone à faibles émissions, une rue piétonne. On peut être pour ou contre une mesure. EN: A public measure is a decision that applies to everyone.",
    examples: [
      { itemId: E(1168), note: 'la rue de l’école' },
      { itemId: E(1064), note: 'la taxe au sac' },
    ],
  },

  /** Act 10: giving an opinion. */
  avis: {
    term: 'ton avis',
    title: 'Donner ton avis',
    body: "Dire ce que tu penses d'une mesure, avec tes raisons : à mon avis, selon moi, je suis pour, je suis contre. Un bon avis montre aussi l'autre côté. EN: Your opinion, with reasons, and the other side too.",
    examples: [
      { itemId: E(1176), note: 'à mon avis' },
      { itemId: E(1187), note: 'les deux points de vue' },
    ],
  },

  /** The joints of an argument, from b1.30 to b1.32. */
  connecteur: {
    term: 'le connecteur',
    title: 'Les mots qui relient tes idées',
    body: "D'abord, ensuite, de plus, par contre, même si, c'est pourquoi : ils disent comment une idée suit l'autre. Tu les as vus dans les leçons 30 à 32 du B1. EN: Connectors say how one idea follows another.",
    examples: [
      { itemId: E(1194), note: 'par contre : l’autre côté' },
      { itemId: E(1195), note: 'c’est pourquoi : la conséquence' },
    ],
  },
};
