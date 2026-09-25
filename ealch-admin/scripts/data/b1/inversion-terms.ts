// b1.21.l1 « L'inversion » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, so the widest trio
// (« l'auxiliaire » + « le sujet nom » + « la négation ») is 35. Asserted in
// the scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './inversion-corpus.ts';

export const INVERSION_TERMS: Record<string, LessonTerm> = {
  /** The reframe as a chip. */
  tenue: {
    term: 'la tenue',
    title: 'Même sens, autre tenue',
    body: "Tu viens ? Est-ce que tu viens ? Viens-tu ? Les trois demandent la même chose. Ce qui change, c'est la tenue : l'inversion est la veste des lettres, des guichets et des entretiens. EN: The three ask the same thing; inversion is the formal outfit.",
    examples: [
      { itemId: E(1002), note: 'au comptoir, entre deux personnes' },
      { itemId: E(1000), note: 'partout, sans risque' },
      { itemId: E(1001), note: 'dans un courriel de candidature' },
    ],
  },

  /** The three question forms. */
  trois: {
    term: 'trois formes',
    title: 'Les trois questions',
    body: "L'intonation monte la voix, est-ce que ajoute trois mots devant, l'inversion met le verbe avant le pronom. Le sens ne bouge pas. Seule la situation décide. EN: Intonation, est-ce que and inversion: same meaning, three situations.",
    examples: [
      { itemId: E(1016), note: 'à un ami' },
      { itemId: E(1017), note: 'à tout le monde' },
      { itemId: E(1018), note: 'à l’écrit soigné' },
    ],
  },

  /** The -t-. */
  petitT: {
    term: 'le petit t',
    title: 'Un pont entre deux voyelles',
    body: "Quand le verbe finit par une voyelle et que le pronom commence par une voyelle (il, elle, on), tu ajoutes -t- au milieu. Va-t-il, parle-t-on, viendra-t-elle. Le t ne veut rien dire : il évite le choc. EN: Between a vowel-final verb and il, elle or on, add -t-.",
    examples: [
      { itemId: E(1035), note: 'va finit par a' },
      { itemId: E(1037), note: 'parle finit par e' },
      { itemId: E(1042), note: 'prend : le d se dit déjà t' },
    ],
  },

  /** Compound tenses. */
  auxiliaire: {
    term: "l'auxiliaire",
    title: "Le pronom suit l'auxiliaire",
    body: "Au passé composé, c'est l'auxiliaire qui passe devant le pronom, et le participe reste derrière. As-tu fini ? Avez-vous mangé ? Le pronom se glisse entre les deux. EN: In a compound tense the auxiliary inverts and the participle stays after the pronoun.",
    examples: [
      { itemId: E(1052), note: 'avoir, tu, puis le participe' },
      { itemId: E(1056), note: 'être, ils, puis le participe' },
      { itemId: E(1054), note: 'a-t-il : le petit t revient' },
    ],
  },

  /** Complex inversion. */
  sujetNom: {
    term: 'le sujet nom',
    title: 'Le nom reste devant',
    body: "Si le sujet est un nom, il ne passe pas derrière le verbe. Il reste devant, et un pronom le répète après le verbe. Votre fille viendra-t-elle ? Le train est-il parti ? EN: A noun subject stays in front and a pronoun repeats it after the verb.",
    examples: [
      { itemId: E(1068), note: 'votre fille, puis elle' },
      { itemId: E(1069), note: 'le train, puis il' },
      { itemId: E(1071), note: 'les enfants, puis ils' },
    ],
  },

  /** Question words. */
  motQ: {
    term: 'où, quand',
    title: 'Le mot, puis le verbe',
    body: "Après un mot interrogatif, tu inverses comme d'habitude : Où allez-vous ? Un nom sujet peut souvent passer derrière le verbe : Où habite votre sœur ? Après pourquoi, jamais : Pourquoi Marie part-elle ? EN: After a question word, invert; after pourquoi a noun always stays in front.",
    examples: [
      { itemId: E(1087), note: 'où, puis le verbe' },
      { itemId: E(1091), note: 'que demande toujours l’inversion' },
      { itemId: E(1089), note: 'pourquoi, le nom, puis elle' },
    ],
  },

  /** Negation around the inverted block. */
  negation: {
    term: 'la négation',
    title: 'Ne devant, pas derrière',
    body: "Le verbe et le pronom forment un bloc. Ne se place devant ce bloc, pas se place derrière. Ne viens-tu pas ? N'avez-vous pas reçu ? Pour répondre oui à cette question, dis si. EN: ne goes before the verb-pronoun block and pas after it; answer yes with si.",
    examples: [
      { itemId: E(1106), note: 'ne, le bloc, pas' },
      { itemId: E(1107), note: "n' devant une voyelle" },
      { itemId: E(1122), note: 'la réponse oui' },
    ],
  },

  /** The je trap. */
  je: {
    term: 'le piège je',
    title: 'Puis-je, et presque rien d’autre',
    body: "Avec je, l'inversion est rare. Tu dis puis-je, jamais peux-je, et dois-je dans une lettre. Pour tout le reste, prends est-ce que : est-ce que je parle assez fort ? EN: With je, say puis-je and dois-je; for everything else use est-ce que.",
    examples: [
      { itemId: E(1110), note: 'la phrase de tous les guichets' },
      { itemId: E(1114), note: 'dans un courriel officiel' },
      { itemId: E(1116), note: 'parle-je ne se dit pas' },
    ],
  },

  /** Service formulas. */
  formule: {
    term: 'la formule',
    title: 'Les questions toutes faites',
    body: "Au guichet et au téléphone, certaines inversions sont figées : Que puis-je faire pour vous ? Voulez-vous laisser un message ? Dans un courriel, elles ouvrent la demande : Pourriez-vous, Serait-il possible de. EN: Service language uses fixed inversions, spoken and written.",
    examples: [
      { itemId: E(1127), note: 'le guichet parle' },
      { itemId: E(1124), note: 'tu demandes un service' },
      { itemId: E(1126), note: 'tu demandes un changement' },
    ],
  },

  /** The incise. */
  incise: {
    term: "l'incise",
    title: 'Dit-elle, répond-il',
    body: "Dans un récit, après les paroles entre guillemets, le verbe de parole passe devant le sujet : « Je pars », dit-elle. Avec un nom, pas de pronom en plus : « C'est fini », dit le médecin. EN: After a quotation the speech verb comes first: « Je pars », dit-elle.",
    examples: [
      { itemId: E(1142), note: 'après la citation' },
      { itemId: E(1148), note: 'au milieu de la citation' },
      { itemId: E(1147), note: 'un nom, sans pronom' },
    ],
  },

  /** Head adverbs. */
  peutEtre: {
    term: 'peut-être',
    title: "En tête d'une phrase écrite",
    body: "À l'écrit, peut-être, sans doute, à peine et aussi (qui veut dire donc) font inverser quand ils ouvrent la phrase. À l'oral, on dit plutôt peut-être que, ou on met l'adverbe après le verbe. EN: In writing these adverbs invert at the head of a sentence; speech says peut-être que.",
    examples: [
      { itemId: E(1160), note: "l'écrit soigné" },
      { itemId: E(1161), note: "l'oral" },
      { itemId: E(1170), note: 'aussi, qui veut dire donc' },
    ],
  },
};
