// b2.17.l1 « Le but »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 12 characters; most sections carry one or
// two chips, and no trio passes 37 with its separators.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './expression-but-corpus.ts';

export const EXPRESSION_BUT_TERMS: Record<string, LessonTerm> = {
  cible: {
    term: 'le but visé',
    title: 'Ce qui n’est pas encore arrivé',
    body: "Un but regarde devant : il vise ce qui n'est pas encore là. Si c'est déjà arrivé, ce n'est plus un but, mais un résultat ou une cause. EN: A purpose aims at what has not happened yet; once it has happened, it is a result or a cause.",
    examples: [
      { itemId: E(2200), note: 'l’atelier n’est pas encore ouvert' },
      { itemId: E(2270), note: 'on vise : le subjonctif' },
      { itemId: E(2271), note: 'c’est arrivé : un résultat' },
    ],
  },

  sujets: {
    term: 'les sujets',
    title: 'Qui atteint le but ?',
    body: "Si le sujet de la phrase atteint le but lui-même, l'infinitif : je m'entraîne pour réussir. Si quelqu'un d'autre doit l'atteindre, que et le subjonctif : je t'entraîne pour que tu réussisses. EN: The same subject takes the infinitive; another subject takes que + subjunctive.",
    examples: [
      { itemId: E(2217), note: 'je m’entraîne, je réussis : l’infinitif' },
      { itemId: E(2218), note: 'je t’entraîne, tu réussis : que' },
      { itemId: E(2219), note: 'le formulaire, c’est toi qui le remplis' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'Pour, afin de, à cette fin',
    body: "Le but ne change pas ; la manière de viser, si : histoire de entre amis, pour partout, afin de et dans le but de à l'écrit, à cette fin dans une lettre très soutenue. EN: The aim stays the same; the register of the tool changes.",
    examples: [
      { itemId: E(2234), note: 'pour : partout' },
      { itemId: E(2235), note: 'afin de : une lettre, un avis' },
      { itemId: E(2255), note: 'à cette fin : très soutenu' },
    ],
  },

  intention: {
    term: 'l’intention',
    title: 'Dans le but de, en vue de',
    body: "Dans le but de dit l'objectif d'une action ; dans l'intention de, ce qu'une personne a en tête. En vue de va surtout devant un nom : en vue de l'ouverture. EN: dans le but de, dans l'intention de, en vue de + noun.",
    examples: [
      { itemId: E(2250), note: 'dans le but de : l’objectif' },
      { itemId: E(2256), note: 'dans l’intention de : son projet à elle' },
      { itemId: E(2258), note: 'en vue de + nom' },
    ],
  },

  mode: {
    term: 'mode et sens',
    title: 'Le mode porte le sens',
    body: "Après de façon que, de manière que et de sorte que, le subjonctif dit ce qu'on vise, l'indicatif ce qui est arrivé. Même mot, deux sens : c'est le mode qui tranche. EN: After these three, the subjunctive states an aim and the indicative a result.",
    examples: [
      { itemId: E(2280), note: 'puissent : on le vise' },
      { itemId: E(2281), note: 'ont pu : c’est arrivé' },
      { itemId: E(2266), note: 'de façon à : un seul sujet' },
    ],
  },

  negatif: {
    term: 'pour ne pas',
    title: 'Le but négatif',
    body: "Devant un infinitif, ne pas se place en bloc devant le verbe, et le pronom juste avant lui : pour ne pas le déranger. Avec pour que, ne et pas entourent le verbe conjugué : pour que tu ne tombes pas. EN: ne pas before the infinitive; ne… pas around the conjugated verb.",
    examples: [
      { itemId: E(2285), note: 'ne pas, puis le pronom, puis le verbe' },
      { itemId: E(2294), note: 'ne… pas autour du verbe conjugué' },
      { itemId: E(2286), note: 'ne rien, en bloc aussi' },
    ],
  },

  crainte: {
    term: 'de peur que',
    title: 'De peur de, de crainte que',
    body: "Ces tournures disent ce qu'on veut éviter. Un seul sujet : de peur de + infinitif. Deux sujets : de peur que + subjonctif, souvent avec un ne qui ne nie rien : de peur qu'il ne pleuve. De crainte est plus soutenu. EN: They name what you want to avoid; the ne after them denies nothing.",
    examples: [
      { itemId: E(2304), note: 'un seul sujet : de peur de' },
      { itemId: E(2305), note: 'le ne qui ne nie rien' },
      { itemId: E(2312), note: 'ne… pas : une vraie négation' },
    ],
  },

  familier: {
    term: 'le familier',
    title: 'Le but entre proches',
    body: "À l'oral, entre proches : histoire de + infinitif, que + subjonctif après un impératif (viens, que je te voie), comme ça + indicatif. Dans une lettre officielle, aucun des trois. EN: Informal purpose: histoire de, que after an imperative, comme ça.",
    examples: [
      { itemId: E(2322), note: 'histoire de : un but léger' },
      { itemId: E(2323), note: 'que + subjonctif après un impératif' },
      { itemId: E(2328), note: 'comme ça + futur' },
    ],
  },

  cause: {
    term: 'but ou cause',
    title: 'Pour qui regarde derrière',
    body: "Pour + infinitif présent vise l'avenir : un but. Pour + infinitif passé regarde ce qui est fait : une cause. Devant un nom, pour peut dire l'un ou l'autre : si tu peux dire parce que, c'est une cause. EN: pour + present infinitive is a purpose; pour + past infinitive is a cause.",
    examples: [
      { itemId: E(2346), note: 'pour gagner : c’est à venir' },
      { itemId: E(2345), note: 'pour avoir gagné : c’est fait' },
      { itemId: E(2339), note: 'pour travaux : parce qu’il y a des travaux' },
    ],
  },

  noms: {
    term: 'les noms',
    title: 'Le but, l’objectif, la finalité',
    body: "Le but dit où l'on va ; l'objectif se mesure (combien, quand) ; la finalité dit pourquoi, au fond. Viser à, avoir pour but de et chercher à prennent un infinitif ; le but est que, un subjonctif. EN: Aim, objective, ultimate purpose, and the verbs that name them.",
    examples: [
      { itemId: E(2351), note: 'viser à + infinitif' },
      { itemId: E(2353), note: 'un objectif chiffré' },
      { itemId: E(2354), note: 'le but est que + subjonctif' },
    ],
  },

  demande: {
    term: 'la demande',
    title: 'La lettre de demande',
    body: "Une demande de soutien dit le projet, son but général, ses objectifs précis, ce qu'elle veut éviter et ce que l'aide permettrait. Les tournures de but varient : un infinitif, un subjonctif, un nom. EN: A funding request states its aim, sub-goals, what it avoids and what the money would allow.",
    examples: [
      { itemId: E(2381), note: 'l’ouverture de la lettre' },
      { itemId: E(2382), note: 'annoncer les objectifs' },
      { itemId: E(2385), note: 'ce qu’on veut éviter' },
    ],
  },
};
