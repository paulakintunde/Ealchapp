// b1.37.l1 « Lire sans tout comprendre » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, and only ONE of them
// (« le connecteur ») is 13, so the widest trio the lesson uses
// (« le connecteur » + « le repérage » + « le résumé ») is 33. Asserted in the
// scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».
//
// A WORKSHOP GLOSSARY NAMES MOVES, NOT FORMS. Each term is something a reader
// DOES to a text (survoler, repérer, deviner par le contexte) or a part of a
// text the reader uses (le chapeau, le connecteur, la reprise, la source).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './strategies-lecture-corpus.ts';

export const STRATEGIES_LECTURE_TERMS: Record<string, LessonTerm> = {
  /** Act 2: what kind of text it is, before the first line. */
  genre: {
    term: 'le genre',
    title: 'Quel texte as-tu sous les yeux',
    body: "Un avis, une brève, un message de forum, un courriel, une publicité, un article : chaque genre veut quelque chose de toi. Regarde qui écrit, pour qui, et la forme du texte, avant de lire la première phrase. EN: The genre tells you what the text wants from you before you read a line.",
    examples: [
      { itemId: E(1024), note: 'un avis : une règle et une date' },
      { itemId: E(1026), note: 'une brève : un fait, un lieu, un moment' },
      { itemId: E(1023), note: 'un forum : quelqu’un donne son avis' },
    ],
  },

  /** Act 3: the standfirst, and with it the title and subheadings. */
  chapeau: {
    term: 'le chapeau',
    title: "L'article en deux phrases",
    body: "Le chapeau, ce sont les deux ou trois phrases en gras sous le titre. Avec le titre et les intertitres, il te donne le sujet et le plan de l'article avant le premier paragraphe. EN: The standfirst sits under the headline and sums up the article.",
    examples: [
      { itemId: E(1046), note: 'le chapeau de l’article sur Lausanne' },
      { itemId: E(1051), note: 'la règle' },
      { itemId: E(1045), note: 'le titre qui l’annonce' },
    ],
  },

  /** Act 4: skimming. */
  survoler: {
    term: 'survoler',
    title: 'Pour savoir de quoi ça parle',
    body: "Survoler, c'est passer vite sur tout le texte, sans t'arrêter, pour avoir l'idée générale. Tu lis le titre, le début des paragraphes et les mots qui reviennent. EN: Skimming is a fast pass over the whole text for the gist.",
    examples: [
      { itemId: E(1067), note: 'la stratégie, en une phrase' },
      { itemId: E(1065), note: 'ce que le survol trouve : la nouveauté' },
      { itemId: E(1060), note: 'la question du survol' },
    ],
  },

  /** Act 4: scanning for a detail. */
  reperage: {
    term: 'le repérage',
    title: 'Pour trouver un seul détail',
    body: "Repérer, c'est chercher UNE chose : une heure, un prix, un nom. Tes yeux cherchent le mot ou le chiffre, puis tu lis toute la phrase autour, pour ne pas manquer un « sauf ». EN: Scanning looks for one thing, then reads the whole sentence around it.",
    examples: [
      { itemId: E(1068), note: 'la stratégie, en une phrase' },
      { itemId: E(1064), note: 'le détail trouvé, avec son « sauf »' },
      { itemId: E(1061), note: 'la question du repérage' },
    ],
  },

  /** Act 6: guessing from the neighbours of a word. */
  contexte: {
    term: 'le contexte',
    title: 'Les voisins du mot',
    body: "Un mot inconnu n'est jamais seul. La phrase autour, un exemple, un contraire ou un chiffre te disent souvent ce qu'il veut dire. Devine d'abord, et vérifie ensuite avec la suite du texte. EN: The sentence around an unknown word usually tells you what it means.",
    examples: [
      { itemId: E(1103), note: 'bondée : « plus une seule place »' },
      { itemId: E(1101), note: 'épuisant : « deux heures par jour »' },
      { itemId: E(1100), note: 'un kot : un mot belge, et la phrase suffit' },
    ],
  },

  /** Act 6: the word family and its parts. */
  famille: {
    term: 'la famille',
    title: 'Un mot connu caché dans un mot nouveau',
    body: "Beaucoup de mots longs sont des mots courts avec un morceau devant ou derrière. Ré- veut dire encore, dé- défaire, in- pas, -able qu'on peut, -ment une action. Enlève les morceaux et regarde ce qui reste. EN: Strip the prefix and suffix and a known word is often underneath.",
    examples: [
      { itemId: E(1106), note: 'ré + aménage + ment' },
      { itemId: E(1102), note: 'in + abord + able : pas abordable' },
      { itemId: E(1109), note: 'dés + activé : éteint' },
    ],
  },

  /** Act 6: the false friend. */
  fauxami: {
    term: 'le faux ami',
    title: "Il ressemble à l'anglais, et il ment",
    body: "Un faux ami ressemble à un mot anglais mais ne veut pas dire la même chose. Actuellement veut dire en ce moment, pas actually. Si le sens anglais rend la phrase bizarre, c'est un faux ami. EN: A false friend looks English and means something else; the sentence tells you.",
    examples: [
      { itemId: E(1116), note: 'actuellement : en ce moment' },
      { itemId: E(1118), note: 'éventuellement : peut-être' },
      { itemId: 'fr.a2.argent-quotidien.080', note: 'la monnaie : les pièces, pas l’argent' },
    ],
  },

  /** Act 7: the signpost. */
  connecteur: {
    term: 'le connecteur',
    title: 'Un panneau sur la route du texte',
    body: "D'abord, de plus, pourtant, en revanche, donc, bref : ces petits mots te disent où va le texte. Ils ajoutent, ils tournent ou ils concluent. Lis ce qui vient juste après : c'est souvent l'idée de l'auteur. EN: Connectors are signposts that say whether the text adds, turns or concludes.",
    examples: [
      { itemId: E(1132), note: 'pourtant : le texte tourne' },
      { itemId: E(1131), note: 'de plus : le texte ajoute' },
      { itemId: E(1135), note: 'bref : le texte conclut' },
    ],
  },

  /** Act 8: the reference chain. */
  reprise: {
    term: 'la reprise',
    title: 'Le même personnage, un autre mot',
    body: "Un article ne répète pas un nom : il le reprend avec il, elle, celui-ci, ce dernier, ou un autre nom (la commerçante). Ce dernier, c'est toujours le dernier nommé. Remonte dans le texte pour trouver qui. EN: Texts pick a person up again with a pronoun or another noun; ce dernier is the last one named.",
    examples: [
      { itemId: E(1146), note: 'ce dernier : le maire, le dernier nommé' },
      { itemId: E(1147), note: 'celle-ci : la présidente' },
      { itemId: E(1149), note: 'la commerçante : un nom qui reprend un nom' },
    ],
  },

  /** Act 9: who says it, and whether it is fact or opinion. */
  source: {
    term: 'la source',
    title: "Qui dit ça, et est-ce vérifié",
    body: "Selon, d'après, il paraît que, je trouve que : ces mots te disent d'où vient l'information. Un fait se vérifie, une opinion se discute, et une rumeur n'a pas de source. Dans ton résumé, garde la source. EN: Source markers tell you who is speaking and whether it is fact, claim, rumour or opinion.",
    examples: [
      { itemId: E(1161), note: 'selon : la version de la Région' },
      { itemId: E(1164), note: 'il paraît que : personne ne signe' },
      { itemId: E(1163), note: 'je trouve que : une opinion' },
    ],
  },

  /** Act 11: the summary, and the graded task. */
  resume: {
    term: 'le résumé',
    title: "L'idée, deux points, un avis",
    body: "Résumer pour un ami, c'est dire en quelques phrases ce que le texte dit : l'idée principale, deux points qui la soutiennent, et une opinion, présentée comme une opinion. Avec tes mots, pas ceux du texte. EN: A summary gives the main idea, two supporting points and one flagged opinion, in your own words.",
    examples: [
      { itemId: E(1196), note: 'la règle' },
      { itemId: E(1185), note: "l'idée principale de l'article" },
      { itemId: E(1190), note: 'une opinion, avec sa source' },
    ],
  },
};
