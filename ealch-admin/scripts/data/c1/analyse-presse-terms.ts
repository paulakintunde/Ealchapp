// c1.24.l1 « Analyser la presse » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6. Labels here run 8 to 13 characters; the widest trio
// the lesson uses (« le mot chargé » + « le hors-champ » + « le cadrage »)
// is 36. Asserted in the scratch check with « every term is surfaced ».
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A PRESS-ANALYSIS GLOSSARY NAMES THE KIND OF TEXT (le genre, la signature),
// ITS SHAPE (la pyramide, le chapô, l’attaque, la chute) AND ITS FRAME (les
// sources, le cadrage, le mot chargé, le hors-champ).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './analyse-presse-corpus.ts';

export const ANALYSE_PRESSE_TERMS: Record<string, LessonTerm> = {
  /** Acts 1 to 7: what kind of text you are reading. */
  genre: {
    term: 'le genre',
    title: 'La sorte de texte, avant le texte',
    body: "Dépêche, article, reportage, éditorial, chronique, billet, tribune, lettre ouverte : chaque genre a ses signaux (une rubrique, une signature, un « je » ou un « nous », un temps, un ton). Le reconnaître te dit qui parle et ce que le texte cherche à faire, avant même d’en juger le contenu. EN: Each press genre has its signals; recognising it tells you who speaks and what the text is for.",
    examples: [
      { itemId: E(2005), note: 'la première question' },
      { itemId: E(2065), note: 'informer ou prendre position' },
      { itemId: E(2051), note: 'montrer ou résumer' },
    ],
  },

  /** Act 2: the dispatch's shape. */
  pyramide: {
    term: 'la pyramide',
    title: 'La pyramide inversée',
    body: "Un texte d’information met l’essentiel en haut (qui, quoi, où, quand), puis les réactions et les détails, puis le contexte. On peut le couper par le bas sans perdre l’information principale. L’ordre des paragraphes dit donc l’importance que la rédaction accorde à chaque fait. EN: News is written essentials first, context last; the order of paragraphs is a ranking.",
    examples: [
      { itemId: E(2012), note: 'le haut de la pyramide' },
      { itemId: E(2013), note: 'couper par le bas' },
      { itemId: E(2021), note: 'la règle' },
    ],
  },

  /** Act 3: the text under the headline. */
  chapo: {
    term: 'le chapô',
    title: 'Le chapô, ou chapeau',
    body: "Le court texte, souvent en gras, entre le titre et l’article. Le dictionnaire dit « chapeau » ; dans les rédactions, on l’écrit souvent « chapô ». Il résume l’article et en donne l’angle : deux chapôs différents sur le même fait annoncent déjà deux lectures. EN: The bold standfirst under the headline; it sums up and sets the angle.",
    examples: [
      { itemId: E(2031), note: 'les deux orthographes' },
      { itemId: E(2036), note: 'ce qu’il fait' },
      { itemId: 'fr.b1.journalisme.1051', note: 'ce que tu savais au B1' },
    ],
  },

  /** Act 3: the opening lines. */
  attaque: {
    term: 'l’attaque',
    title: 'Les premières lignes de l’article',
    body: "L’attaque fait entrer le lecteur : une scène, une citation, un chiffre frappant, une question. Elle choisit aussi par où l’on entre dans le sujet, et donc par quel personnage ou quel fait on le regarde. EN: The opening lines draw the reader in, and choose the door into the story.",
    examples: [
      { itemId: E(2038), note: 'une attaque sur une scène' },
      { itemId: E(2040), note: 'une attaque sur une citation' },
      { itemId: E(2041), note: 'une attaque sur un chiffre' },
    ],
  },

  /** Act 3: the last line. */
  chute: {
    term: 'la chute',
    title: 'La dernière phrase de l’article',
    body: "La chute ferme le texte : une question ouverte, une image, un trait d’esprit, une citation qui reste. C’est souvent l’impression qu’emporte le lecteur. Dans un billet, elle porte toute la pointe. EN: The closing line; often the impression the reader takes away.",
    examples: [
      { itemId: E(2039), note: 'une chute sur une question' },
      { itemId: E(2078), note: 'la chute du billet' },
      { itemId: E(2074), note: 'le trait d’esprit' },
    ],
  },

  /** Acts 5 to 7: who signs. */
  signature: {
    term: 'la signature',
    title: 'Qui signe, et au nom de qui',
    body: "Une dépêche porte le sigle d’une agence ; un reportage, le nom du journaliste ; une chronique, le nom et souvent la photo de son auteur ; une tribune, le nom et la fonction d’une personne extérieure. L’éditorial, lui, parle au nom du journal, signé ou non : certains journaux le publient sans signature, d’autres le font signer par le rédacteur en chef ou, comme souvent au Québec, par un éditorialiste. EN: The byline tells you on whose behalf a text speaks.",
    examples: [
      { itemId: E(2069), note: 'sans signature' },
      { itemId: E(2081), note: 'le « je » d’une signature' },
      { itemId: E(2091), note: 'la fonction sous le nom' },
    ],
  },

  /** Act 8: who speaks. */
  sources: {
    term: 'les sources',
    title: 'Les voix que l’article fait entendre',
    body: "Un article choisit qui il cite, dans quel ordre, combien de lignes il donne à chacun, qui parle au style direct et qui est seulement résumé. La première voix donne le ton, la dernière laisse l’impression, et les absents comptent autant que les présents. EN: Which voices, in what order, at what length: that is a frame.",
    examples: [
      { itemId: E(2096), note: 'la première et la dernière voix' },
      { itemId: E(2101), note: 'citer ou résumer' },
      { itemId: E(2105), note: 'la règle' },
    ],
  },

  /** Acts 8 to 12: the frame itself. */
  cadrage: {
    term: 'le cadrage',
    title: 'Ce que le cadre montre, et comment',
    body: "Le cadrage, c’est l’ensemble des choix qui orientent la lecture d’un fait : le genre, la place dans le journal, le titre, l’ordre des sources, le chiffre retenu, la photo et sa légende, les mots. Il ne suppose pas de mensonge : deux cadrages opposés peuvent rapporter les mêmes faits exacts. EN: Framing is the set of choices that steer a reading; it does not require a lie.",
    examples: [
      { itemId: E(2152), note: 'un choix, pas un mensonge' },
      { itemId: E(2111), note: 'le même chiffre, deux effets' },
      { itemId: E(2113), note: 'la légende' },
    ],
  },

  /** Act 10: the word that judges. */
  motcharge: {
    term: 'le mot chargé',
    title: 'Le mot qui juge à ta place',
    body: "Pour un même fait, deux mots : réaménagement ou bétonnage, maintenir ou s’entêter, une poignée ou plusieurs dizaines. Le mot chargé porte un jugement que la phrase n’affirme pas. Pour le repérer, remplace-le par un mot neutre et regarde ce qui disparaît. EN: A loaded word carries a judgement; swap in a neutral word to see it.",
    examples: [
      { itemId: E(2128), note: 'le fait et le camp' },
      { itemId: E(2132), note: 'une paire chargée' },
      { itemId: 'fr.b2.litterature.071', note: 'le nom savant du phénomène' },
    ],
  },

  /** Acts 1, 11 and 12: what the frame leaves out. */
  horschamp: {
    term: 'le hors-champ',
    title: 'Ce que le cadre laisse dehors',
    body: "Au cinéma, le hors-champ est ce que la caméra ne montre pas. Dans la presse, c’est ce qu’un article ne dit pas : une voix qu’il n’interroge pas, un chiffre qu’il ne donne pas, une conséquence qu’il ne mentionne pas. On le trouve surtout en comparant deux traitements du même fait. EN: What an article leaves out; you find it best by comparing two treatments.",
    examples: [
      { itemId: E(2007), note: 'la question à poser' },
      { itemId: E(2144), note: 'ce qui dérange le récit' },
      { itemId: E(2149), note: 'dans le reportage du pont' },
    ],
  },
};
