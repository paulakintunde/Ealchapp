// b2.19.l1 « La restriction et l'exception »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The 12-character labels
// (« ne faire que », « il n'y a que », « sauf, hormis », « la condition »)
// are never used three together; most sections carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './restriction-corpus.ts';

export const RESTRICTION_TERMS: Record<string, LessonTerm> = {
  limite: {
    term: 'la limite',
    title: 'Tracer une limite',
    body: "Restreindre, c'est dire ce qui reste à l'intérieur, et rien d'autre : ne… que, seulement, seul, uniquement. Rien n'est nié : je n'ai que dix euros, les dix euros sont là. EN: To restrict is to say what is inside the limit, and nothing else; nothing is denied.",
    examples: [
      { itemId: E(1200), note: 'que les billets non utilisés' },
      { itemId: E(1202), note: 'seuls les abonnés, devant le sujet' },
      { itemId: E(1233), note: 'l’action elle-même, avec ne faire que' },
    ],
  },

  porte: {
    term: 'la porte',
    title: "L'exception ouvre une porte",
    body: "Une règle vaut pour tous ; l'exception laisse passer un cas. Chaque porte a sa forme : sauf + nom, sauf si + indicatif, à moins que + subjonctif, à moins de + infinitif, faute de + nom. EN: An exception lets one case through, and each door has its own form.",
    examples: [
      { itemId: E(1209), note: 'sauf + nom : les enfants de moins de trois ans' },
      { itemId: E(1201), note: 'sauf si + indicatif' },
      { itemId: E(1204), note: 'à moins que + subjonctif' },
    ],
  },

  portee: {
    term: 'la portée',
    title: "Que devant ce qu'il restreint",
    body: "Ne se met devant le verbe ; que se met juste devant l'élément restreint, et déplacer que change le sens. Au passé composé, que vient après le participe : il n'a lu que la conclusion. EN: que goes right before the restricted element, and moving it changes the meaning.",
    examples: [
      { itemId: E(1216), note: 'la personne est restreinte' },
      { itemId: E(1217), note: 'la chose est restreinte' },
      { itemId: E(1221), note: 'le moment : pas avant hier' },
    ],
  },

  nefaire: {
    term: 'ne faire que',
    title: "Restreindre l'action",
    body: "Pour limiter l'action elle-même, on dit ne faire que + infinitif. Deux lectures : sans arrêt (il ne fait que se plaindre) ou rien de plus (je ne fais que passer). N'avoir qu'à veut dire : il suffit de. EN: ne faire que + infinitive restricts the action itself.",
    examples: [
      { itemId: E(1233), note: 'sans arrêt' },
      { itemId: E(1234), note: 'rien de plus' },
      { itemId: E(1237), note: 'au passé composé' },
    ],
  },

  adverbes: {
    term: 'seulement',
    title: 'Seulement, uniquement, rien que',
    body: "Seulement restreint sans ne et peut précéder un sujet chiffré. En tête, « Seulement, » annonce une réserve. Uniquement et exclusivement sont plus écrits ; rien que veut dire à lui seul ; simplement veut dire sans plus. EN: the adverbs of restriction, by place and register.",
    examples: [
      { itemId: E(1255), note: 'Seulement, en tête : une réserve' },
      { itemId: E(1257), note: 'uniquement, dans un avis' },
      { itemId: E(1252), note: 'rien que : à lui seul' },
    ],
  },

  relief: {
    term: "il n'y a que",
    title: "Il n'y a que… qui, ce n'est que… que",
    body: "Ces tournures mettent la restriction en relief. Après il n'y a que… qui, le subjonctif juge et l'indicatif constate, comme après le seul qui. Ce n'est que… que veut dire : pas avant ce moment. EN: These put the restriction in the spotlight.",
    examples: [
      { itemId: E(1267), note: 'un jugement : puisses' },
      { itemId: E(1268), note: 'un fait : est venue' },
      { itemId: E(1270), note: 'pas avant minuit' },
    ],
  },

  pasque: {
    term: 'ne… pas que',
    title: 'Pas seulement',
    body: "Ne… pas que enlève la limite : il n'y a pas que le salaire, il y a autre chose aussi. C'est courant et accepté ; l'écrit soigné préfère pas seulement, ou non seulement… mais aussi. EN: ne… pas que removes the limit; it means not only.",
    examples: [
      { itemId: E(1284), note: 'courant et accepté' },
      { itemId: E(1288), note: 'non seulement… mais' },
      { itemId: E(1290), note: 'mais aussi, devant un nom' },
    ],
  },

  sauf: {
    term: 'sauf, hormis',
    title: 'Sauf, excepté, hormis, à part',
    body: "Ces mots ouvrent la porte à un nom ou à un pronom : sauf moi, excepté le lundi. Sauf va partout, à part est courant, excepté, hormis et à l'exception de sont plus soutenus. Excepté s'accorde seulement après le nom. EN: exception words before a noun, by register.",
    examples: [
      { itemId: E(1301), note: 'sauf : partout' },
      { itemId: E(1303), note: 'hormis : soutenu' },
      { itemId: E(1308), note: 'exceptés : accordé après le nom' },
    ],
  },

  saufsi: {
    term: 'le sauf si',
    title: 'Sauf si + indicatif',
    body: "Sauf si est un si : l'indicatif, jamais le subjonctif, et les temps de si. Il veut dire si… ne… pas. Sauf que, lui, ne suppose rien : il pose un fait. EN: sauf si is a si: indicative, and the si tenses.",
    examples: [
      { itemId: E(1335), note: 'présent, puis futur' },
      { itemId: E(1339), note: 'imparfait, puis conditionnel' },
      { itemId: E(1340), note: 'dans un discours rapporté' },
    ],
  },

  amoins: {
    term: 'à moins que',
    title: 'À moins que + subjonctif',
    body: "À moins que veut le subjonctif, souvent avec un ne qui ne nie rien et qu'on peut omettre. Pour nier vraiment, il faut pas. Avec un seul sujet, à moins de + infinitif est plus léger. EN: à moins que takes the subjunctive; its ne denies nothing.",
    examples: [
      { itemId: E(1352), note: 'avec le ne, qui ne nie rien' },
      { itemId: E(1353), note: 'sans le ne, correct aussi' },
      { itemId: E(1359), note: 'à moins de + infinitif' },
    ],
  },

  condition: {
    term: 'la condition',
    title: 'Ouvrir ou fermer la porte',
    body: "À condition que et pourvu que ouvrent la porte dans un seul cas ; à moins que et sauf si la ferment dans un seul cas. Faute de dit ce qui manque : faute de paiement, l'abonnement est suspendu. EN: some words open the door in one case, others close it.",
    examples: [
      { itemId: E(1369), note: 'à condition de + infinitif' },
      { itemId: E(1370), note: 'à condition que + subjonctif' },
      { itemId: E(1371), note: 'faute de + nom' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'Qui dit quoi, et où',
    body: "Un avis officiel écrit uniquement, exclusivement, à l'exception de, sauf avis contraire. La langue de tous les jours dit seulement, à part, sauf que. Sinon au sens d'excepté, si ce n'est et sauf à appartiennent au registre soutenu. EN: pick the word that fits the text you are writing.",
    examples: [
      { itemId: E(1250), note: 'exclusivement : un avis' },
      { itemId: E(1311), note: 'sauf avis contraire : une formule' },
      { itemId: E(1318), note: 'sinon lui : soutenu' },
    ],
  },
};
