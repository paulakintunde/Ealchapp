// b1.19.l1 « Le discours indirect » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 12 characters, so the widest trio
// (« dire de + inf » + « demander si » + « les pronoms ») is 34. Asserted in
// the scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './discours-indirect-corpus.ts';

export const DISCOURS_INDIRECT_TERMS: Record<string, LessonTerm> = {
  /** The whole idea. */
  discours: {
    term: 'le discours',
    title: 'Le discours indirect',
    body: "Tu ne cites pas les mots exacts : tu racontes ce que la personne a dit, avec ta voix à toi. Il n'y a plus de guillemets, et tout part d'un verbe comme dire ou demander. EN: You tell what someone said in your own voice, with no quotation marks.",
    examples: [
      { itemId: E(1001), note: 'le message de Karim, dit par toi' },
      { itemId: E(1003), note: 'son train, plus mon train' },
      { itemId: 'fr.a2.internet.201', note: 'même un écran peut dire que' },
    ],
  },

  /** que, never dropped. */
  que: {
    term: 'dire que',
    title: 'Que ne tombe jamais',
    body: "Après dire, expliquer ou répondre, tu mets que avant l'information. L'anglais peut dire he says he is tired, sans that. Le français ne peut pas : il dit qu'il est fatigué. EN: French never drops que the way English drops that.",
    examples: [
      { itemId: E(1007), note: 'dit que, puis la phrase' },
      { itemId: E(1005), note: "que devient qu' devant elle" },
      { itemId: E(1014), note: 'la règle en une phrase' },
    ],
  },

  /** Persons and possessives. */
  pronoms: {
    term: 'les pronoms',
    title: 'Qui parle maintenant',
    body: "Les pronoms suivent la personne qui parle maintenant. Le je de Karim devient il dans ta bouche, et son mon devient son. La personne à qui tu parles devient tu. EN: The persons follow whoever is speaking now.",
    examples: [
      { itemId: E(1017), note: 'mes clés devient ses clés' },
      { itemId: E(1028), note: "je t'appelle devient il m'appelle" },
      { itemId: E(1019), note: 'notre bureau devient leur bureau' },
    ],
  },

  /** The yes/no question. */
  si: {
    term: 'demander si',
    title: 'Une question oui ou non',
    body: "Une question qui attend oui ou non devient si. Est-ce que disparaît, et le point d'interrogation aussi. Si devient s' devant il et ils, jamais devant elle. EN: A yes-or-no question becomes si, with no est-ce que and no question mark.",
    examples: [
      { itemId: E(1037), note: 'est-ce que tu es libre, rapporté' },
      { itemId: E(1039), note: "s'il : la seule élision de si" },
      { itemId: E(1044), note: 'ce si-là accepte le futur' },
    ],
  },

  /** The question words. */
  cequi: {
    term: 'ce que/qui',
    title: "Qu'est-ce que devient ce que",
    body: "Où, quand, pourquoi et comment restent. Qu'est-ce que devient ce que, et qu'est-ce qui devient ce qui. Est-ce que disparaît, et le sujet revient devant le verbe. EN: Question words stay; qu'est-ce que becomes ce que.",
    examples: [
      { itemId: E(1058), note: "qu'est-ce que tu fais, rapporté" },
      { itemId: E(1060), note: "qu'est-ce qui se passe, rapporté" },
      { itemId: E(1054), note: 'quand reste quand' },
    ],
  },

  /** The reported order. */
  ordre: {
    term: 'dire de + inf',
    title: "Un ordre, c'est de",
    body: "Un ordre ne passe pas par que. Tu dis à quelqu'un de faire quelque chose : il te demande de le rappeler. À la forme négative, ne pas passe devant l'infinitif. EN: A reported order is de plus the infinitive, not que.",
    examples: [
      { itemId: E(1073), note: 'rappelle-moi, rapporté' },
      { itemId: E(1075), note: 'de ne pas, pour un ordre négatif' },
      { itemId: E(1078), note: 'conseiller de marche pareil' },
    ],
  },

  /** The tense shift. */
  decalage: {
    term: 'le décalage',
    title: 'Quand le verbe qui rapporte est au passé',
    body: "Si tu dis il a dit, le message recule dans le temps : le présent passe à l'imparfait, le passé composé au plus-que-parfait, le futur au conditionnel. L'imparfait ne bouge pas. EN: After a past reporting verb the tenses move back.",
    examples: [
      { itemId: E(1089), note: 'je suis malade, rapporté au passé' },
      { itemId: E(1128), note: 'je rappellerai devient rappellerait' },
      { itemId: E(1099), note: "l'imparfait reste l'imparfait" },
    ],
  },

  /** The pluperfect, built here. */
  pqp: {
    term: 'avait fait',
    title: 'Le plus-que-parfait',
    body: "C'est le passé composé rapporté au passé. Tu prends avoir ou être à l'imparfait, puis le même participe. J'ai fini devient il avait fini. Je suis partie devient elle était partie. EN: The pluperfect is the imparfait of avoir or être plus the participle.",
    examples: [
      { itemId: E(1109), note: 'avait, avec avoir' },
      { itemId: E(1111), note: 'était, avec être' },
      { itemId: E(1114), note: "s'était, avec un pronominal" },
    ],
  },

  /** Time and place words. */
  reperes: {
    term: 'les repères',
    title: 'Les mots du temps et du lieu',
    body: "Si le jour a changé, demain devient le lendemain, hier devient la veille, aujourd'hui devient ce jour-là, et ici devient là. Si c'est encore le même jour, rien ne bouge. EN: Time words move only when the day has changed.",
    examples: [
      { itemId: E(1145), note: 'demain, un autre jour' },
      { itemId: E(1146), note: 'hier, un autre jour' },
      { itemId: E(1155), note: 'le même soir : demain reste demain' },
    ],
  },

  /** Reporting verbs. */
  verbes: {
    term: 'les verbes',
    title: 'Plus que dire',
    body: "Dire donne le message. Expliquer, répondre, annoncer, promettre, avouer disent aussi comment il a été dit. Promettre prend de devant un infinitif, et que devant une phrase. EN: Other reporting verbs also say how it was said.",
    examples: [
      { itemId: E(1167), note: 'avouer : un aveu' },
      { itemId: E(1164), note: 'promettre de, avec un infinitif' },
      { itemId: E(1165), note: 'promettre que, avec une phrase' },
    ],
  },
};
