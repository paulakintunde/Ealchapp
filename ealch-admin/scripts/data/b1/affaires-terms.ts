// b1.36.l1 « Le monde des affaires » · the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 12 characters; the scratch check
// asserts that every section's chips fit in 37, and that every term is
// surfaced by at least one section.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './affaires-corpus.ts';

export const AFFAIRES_TERMS: Record<string, LessonTerm> = {
  /** The reframe: the noun and what you do with it. */
  verbe: {
    term: 'son verbe',
    title: 'Le nom et ce qu’on en fait',
    body: "Au travail, chaque nom a son verbe : on assiste à une réunion, on respecte un délai, on passe une commande. Si tu prends le verbe de l'anglais, la phrase sonne faux. EN: Every work noun has the verb French uses with it.",
    examples: [
      { itemId: E(1000), note: 'assister, pas attendre' },
      { itemId: E(1002), note: 'on respecte un délai' },
      { itemId: E(1003), note: 'on passe une commande' },
    ],
  },

  /** Word families. */
  famille: {
    term: 'la famille',
    title: 'Une famille de mots',
    body: "Un verbe, un nom et souvent une personne, sur la même racine : gérer, la gestion, un gestionnaire. Quand tu en connais un, tu devines les autres. EN: A word family is a verb, a noun and often a person built on one root.",
    examples: [
      { itemId: E(1004), note: 'le verbe, l’action, la personne' },
      { itemId: E(1016), note: 'vendre, la vente, un vendeur' },
    ],
  },

  /** False friends and calques. */
  fauxami: {
    term: 'le faux ami',
    title: 'Le mot qui ressemble à l’anglais',
    body: "Un mot français qui ressemble à un mot anglais, mais qui ne veut pas dire la même chose : attendre n'est pas to attend, un délai n'est pas a delay. EN: A French word that looks English but means something else.",
    examples: [
      { itemId: E(1010), note: 'attendre ou assister' },
      { itemId: E(1072), note: 'un délai ou un retard' },
    ],
  },

  /** Regional variants. */
  variante: {
    term: 'la variante',
    title: 'Un autre mot, ailleurs',
    body: "Au Québec, on demande une soumission et on écrit un courriel ; en France, on demande un devis et on envoie souvent un mail. Les deux sont justes chez eux. EN: A regional form, right where it is used.",
    examples: [
      { itemId: E(1082), note: 'la soumission, au Québec' },
      { itemId: E(1165), note: 'courriel ou mail' },
    ],
  },

  /** The meeting and its gestures. */
  reunion: {
    term: 'la réunion',
    title: 'Les gestes de la réunion',
    body: "On fixe une réunion, on y assiste, on l'anime, on prend la parole, on fait le point, et quelqu'un rédige le compte rendu. EN: The verbs that go with a meeting.",
    examples: [
      { itemId: E(1043), note: 'animer la réunion' },
      { itemId: E(1045), note: 'faire le point' },
    ],
  },

  /** Délai against retard. */
  delai: {
    term: 'le délai',
    title: 'Un délai, pas un retard',
    body: "Un délai, c'est le temps qu'on te donne pour faire quelque chose : on le respecte. Un retard, c'est quand tu dépasses ce temps : on prend du retard. EN: A délai is the time allowed; a delay is un retard.",
    examples: [
      { itemId: E(1070), note: 'le délai de livraison' },
      { itemId: E(1071), note: 'un retard de trois jours' },
    ],
  },

  /** The quote and the invoice. */
  devis: {
    term: 'le devis',
    title: 'Avant le travail : le devis',
    body: "Le devis annonce le prix avant le travail ; la facture le demande après. On fait un devis, on règle une facture, on accorde une remise. EN: The quote comes first, the invoice after.",
    examples: [
      { itemId: E(1093), note: 'le devis, puis la facture' },
      { itemId: E(1085), note: 'accorder une remise' },
    ],
  },

  /** The polite request, with the conditional of lesson 9 in B1. */
  demande: {
    term: 'la demande',
    title: 'Une demande polie',
    body: "Au travail, tu adoucis une demande avec le conditionnel ou une formule : pourriez-vous, je voudrais, je me permets de, merci de. Plus la personne est loin, plus tu adoucis. EN: Soften a request with the conditional or a set formula.",
    examples: [
      { itemId: E(1114), note: 'pourriez-vous, et faire parvenir' },
      { itemId: E(1124), note: 'merci de, très fréquent' },
    ],
  },

  /** Polite disagreement. */
  desaccord: {
    term: 'le désaccord',
    title: 'Dire non sans fermer la porte',
    body: "Tu commences par ce qui est juste, tu nuances, puis tu proposes autre chose : vous avez raison sur un point, mais... EN: Start with what is right, then qualify, then propose.",
    examples: [
      { itemId: E(1138), note: 'ce qui est juste d’abord' },
      { itemId: E(1136), note: 'une autre solution' },
    ],
  },

  /** Tu or vous at work, from lesson 26 in B1. */
  tuvous: {
    term: 'tu ou vous',
    title: 'Tu ou vous au travail',
    body: "Entre collègues, on passe souvent au tu, surtout au Québec. Avec un client, on garde le vous, sauf s'il propose le tu. Dans un message, tu ne mélanges jamais les deux. EN: Colleagues often say tu; clients get vous; never mix them.",
    examples: [
      { itemId: E(1146), note: 'le tu, vite, à Montréal' },
      { itemId: E(1148), note: 'le vous avec un client' },
    ],
  },

  /** The first work email, kept light. */
  courriel: {
    term: 'le courriel',
    title: 'Un courriel de travail',
    body: "Un objet clair, une formule pour commencer, un message court, une formule pour finir. La lettre formelle complète viendra plus tard. EN: A clear subject, a greeting, a short message, a sign-off.",
    examples: [
      { itemId: E(1168), note: 'l’objet' },
      { itemId: E(1169), note: 'formule, message, formule' },
    ],
  },
};
