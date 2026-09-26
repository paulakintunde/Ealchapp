// b1.26.l1 « Tu ou vous » : the lesson glossary. DRAFT.
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
import { E } from './tu-ou-vous-corpus.ts';

export const TU_OU_VOUS_TERMS: Record<string, LessonTerm> = {
  /** The one metaphor. */
  distance: {
    term: 'la distance',
    title: 'La largeur de la table',
    body: "Vous garde une table entre toi et l'autre. Tu vous met du même côté. Choisir tu ou vous, c'est régler cette distance, pas juger la personne. EN: vous keeps a table between you; tu puts you on the same side.",
    examples: [
      { itemId: E(1003), note: 'la phrase de toute la leçon' },
      { itemId: E(1007), note: 'le tu est proche, pas impoli' },
      { itemId: E(1150), note: 'même nouvelle, deux distances' },
    ],
  },

  tutoyer: {
    term: 'se tutoyer',
    title: 'Dire tu',
    body: "Tutoyer quelqu'un, c'est lui dire tu. Se tutoyer, c'est se dire tu l'un à l'autre. Le nom est le tutoiement. EN: tutoyer means saying tu to someone; se tutoyer, to each other.",
    examples: [
      { itemId: E(1012), note: 'le verbe' },
      { itemId: E(1036), note: 'la question la plus courante' },
      { itemId: E(1005), note: 'à Montréal, au bureau' },
    ],
  },

  vouvoyer: {
    term: 'vouvoyer',
    title: 'Dire vous à une seule personne',
    body: "Vouvoyer quelqu'un, c'est lui dire vous, même s'il est seul. Le nom est le vouvoiement. À un groupe, vous est simplement le pluriel. EN: vouvoyer means saying vous to one person; to a group, vous is just the plural.",
    examples: [
      { itemId: E(1013), note: 'le verbe' },
      { itemId: E(1006), note: 'au cabinet, entre collègues' },
      { itemId: E(1071), note: 'les beaux-parents, depuis quinze ans' },
    ],
  },

  defaut: {
    term: 'par défaut',
    title: 'Le point de départ',
    body: "Sans autre information : vous pour les inconnus, les commerces, les bureaux et le travail ; tu pour les amis, la famille, les enfants et les gens de ton âge. EN: the starting point before anything else is known.",
    examples: [
      { itemId: E(1027), note: 'la règle en une ligne' },
      { itemId: E(1016), note: 'à la boulangerie : vous' },
      { itemId: E(1017), note: 'à un enfant : tu' },
    ],
  },

  passage: {
    term: 'le passage',
    title: 'Passer du vous au tu',
    body: "Quelqu'un propose, l'autre accepte, et vous passez au tu dans la phrase suivante. On revient rarement en arrière. EN: someone offers, the other accepts, and you switch in the very next sentence.",
    examples: [
      { itemId: E(1036), note: 'proposer, entre pairs' },
      { itemId: E(1040), note: 'accepter simplement' },
      { itemId: E(1043), note: 'garder le vous, gentiment' },
    ],
  },

  propose: {
    term: 'qui propose',
    title: 'Le plus âgé offre',
    body: "La personne la plus âgée, ou qui a le plus de poids, offre le tu. Le plus jeune attend et accepte. Entre gens du même âge, n'importe qui peut demander. EN: the older or more senior person offers; between equals anyone may ask.",
    examples: [
      { itemId: E(1063), note: 'la règle' },
      { itemId: E(1056), note: 'au travail, le chef' },
      { itemId: E(1062), note: 'dans le doute, attends' },
    ],
  },

  accord: {
    term: "l'accord",
    title: 'Le verbe suit vous, le reste suit la personne',
    body: "Avec vous, le verbe prend toujours la forme de vous : vous êtes. Mais l'adjectif et le participe suivent la vraie personne : une dame, gentille ; un homme, arrivé. EN: the verb follows vous; the adjective and participle follow the real person.",
    examples: [
      { itemId: E(1079), note: 'une femme : gentille' },
      { itemId: E(1080), note: 'un homme : arrivé' },
      { itemId: E(1085), note: 'un couple : contents' },
    ],
  },

  echos: {
    term: 'les échos',
    title: 'Les petits mots qui suivent',
    body: "Une fois tu ou vous choisi, tout le reste suit : te ou vous, ton ou votre, tes ou vos, viens ou venez, assieds-toi ou asseyez-vous. On ne mélange pas. EN: once you choose, every small word echoes the choice.",
    examples: [
      { itemId: E(1106), note: 'la règle' },
      { itemId: E(1097), note: 'vous, votre' },
      { itemId: E(1092), note: 'viens, toi' },
    ],
  },

  fauxpas: {
    term: 'le faux pas',
    title: 'Un tu qui échappe',
    body: "Un tu au mauvais moment, ça arrive. Tu t'excuses d'un mot, tu reprends avec vous, et tu continues. Un long discours attire plus l'attention que l'erreur. EN: a slip is fixed in a word; a long apology draws more attention than the slip.",
    examples: [
      { itemId: E(1110), note: 'la réparation la plus courte' },
      { itemId: E(1111), note: 'la réparation expliquée' },
      { itemId: E(1112), note: "et parfois, l'autre propose le tu" },
    ],
  },

  formules: {
    term: 'les formules',
    title: 'Le début et la fin du message',
    body: "À l'écrit, la distance se voit avant la première phrase : Madame, Monsieur, Bonjour Maître, Bonjour Julie ou Salut. Et elle se confirme à la fin : Cordialement, ou Bises. EN: in writing, the greeting and sign-off set the distance.",
    examples: [
      { itemId: E(1131), note: 'la règle' },
      { itemId: E(1119), note: 'la plus distante' },
      { itemId: E(1121), note: 'la plus proche' },
    ],
  },

  variantes: {
    term: 'les variantes',
    title: 'Ailleurs en français',
    body: "Au Québec, on se tutoie beaucoup plus, et le vous marque le respect. La Belgique et la Suisse sont proches de la France. En Afrique de l'Ouest, l'âge et le statut comptent beaucoup. EN: the rule moves from country to country; the idea of distance stays.",
    examples: [
      { itemId: E(1134), note: 'au Québec' },
      { itemId: E(1138), note: 'en Belgique et en Suisse' },
      { itemId: E(1139), note: 'à Dakar' },
    ],
  },
};
