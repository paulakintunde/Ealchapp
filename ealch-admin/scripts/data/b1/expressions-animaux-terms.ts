// b1.28.l1 « Les animaux et la nourriture » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 11 to 13 characters, so a section carries
// two chips as a rule and three only when the row still measures 37 or less.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './expressions-animaux-corpus.ts';

export const EXPRESSIONS_ANIMAUX_TERMS: Record<string, LessonTerm> = {
  /** The literal picture, kept whole. */
  image: {
    term: "l'image fixe",
    title: "L'image ne change pas",
    body: "Une expression imagée est une petite image : un lapin, un canard, une pêche. Tu la dis entière, avec les mêmes mots. Si tu changes l'animal, l'expression n'existe plus. EN: the picture is fixed; change the animal and the idiom is gone.",
    examples: [
      { itemId: E(1210), note: 'un canard, jamais un chien' },
      { itemId: E(1228), note: 'un lapin, jamais un chat' },
      { itemId: E(1305), note: 'du gâteau, pas un morceau' },
    ],
  },

  /** The message the picture carries. */
  sens: {
    term: 'le sens caché',
    title: "Ce que l'image veut dire",
    body: "Derrière l'image, il y a un message simple : il fait froid, il n'est pas venu, c'est facile. C'est ce message que tu traduis en anglais. EN: behind the picture is a plain message, and that is what you translate.",
    examples: [
      { itemId: E(1207), note: 'le sens de « poser un lapin »' },
      { itemId: E(1208), note: 'le sens de « un froid de canard »' },
      { itemId: E(1209), note: 'le sens de « une faim de loup »' },
    ],
  },

  /** The English idiom that carries the same message. */
  equivalent: {
    term: "l'équivalent",
    title: "L'expression anglaise qui dit la même chose",
    body: "Souvent, l'anglais dit la même chose avec une autre image : un chat dans la gorge, a frog in your throat. Parfois l'image est la même, parfois il n'y en a pas. EN: English often uses another picture for the same message.",
    examples: [
      { itemId: E(1274), note: 'un chat en français, une grenouille en anglais' },
      { itemId: E(1216), note: 'des chats et des chiens en anglais, rien en français' },
      { itemId: E(1322), note: 'la même mule dans les deux langues' },
    ],
  },

  /** The word-for-word translation, the lesson's central error. */
  motamot: {
    term: 'le mot à mot',
    title: "Traduire l'image, pas le sens",
    body: "Le mot à mot, c'est traduire chaque mot d'une expression anglaise. Le résultat est correct en grammaire, mais personne ne le comprend : « il pleut des chats et des chiens ». EN: word for word gives correct grammar and no meaning.",
    examples: [
      { itemId: E(1223), note: 'raining cats and dogs, en vrai français' },
      { itemId: E(1200), note: 'he stood me up, en vrai français' },
      { itemId: E(1312), note: 'a piece of cake, en vrai français' },
    ],
  },

  /** Familier or courant. */
  registre: {
    term: 'le registre',
    title: 'Familier ou courant',
    body: "Courant : tu peux le dire à tout le monde, même au travail. Familier : avec des amis, la famille, des collègues proches. Jamais dans une lettre officielle ni à un client. EN: courant goes anywhere; familier is for people you know well.",
    examples: [
      { itemId: E(1244), note: 'courant : possible en réunion' },
      { itemId: E(1305), note: 'familier : entre amis' },
      { itemId: E(1346), note: 'familier, et même un peu impoli' },
    ],
  },

  /** A form that belongs to one francophone region. */
  variante: {
    term: 'la variante',
    title: 'Une expression, deux pays',
    body: "Certaines expressions changent d'un pays à l'autre. Au Québec, on a des papillons dans l'estomac ; en France, dans le ventre. Les deux sont justes : dis celle de l'endroit où tu es. EN: some idioms differ by country; both forms are right.",
    examples: [
      { itemId: E(1246), note: 'la forme du Québec' },
      { itemId: E(1247), note: 'la forme de France' },
      { itemId: E(1310), note: 'une poule pas de tête, au Québec' },
    ],
  },

  /** The expression as one unit: its verb and its little words too. */
  bloc: {
    term: 'le bloc figé',
    title: 'Le verbe fait partie du bloc',
    body: "Une expression a aussi son verbe et ses petits mots : on A la pêche, on EST dans son assiette, on POSE un lapin. Le temps du verbe change, le reste ne bouge pas. EN: the verb belongs to the idiom too; only its tense changes.",
    examples: [
      { itemId: E(1260), note: 'avoir, pas être' },
      { itemId: E(1262), note: 'être, et son, mon, ton' },
      { itemId: E(1240), note: 'le temps change, le lapin reste' },
    ],
  },

  /** The « comme + animal » portraits. */
  comparaison: {
    term: 'comparaison',
    title: 'Adjectif + comme + animal',
    body: "Pour décrire quelqu'un, le français compare souvent à un animal : têtu comme une mule, bavard comme une pie. L'adjectif s'accorde avec la personne, l'animal ne change pas. EN: the adjective agrees with the person; the animal stays.",
    examples: [
      { itemId: E(1338), note: 'têtue : ma grand-mère' },
      { itemId: E(1331), note: 'maligne : ta nièce' },
      { itemId: E(1334), note: 'bavarde : ma voisine' },
    ],
  },

  /** The situation decides. */
  contexte: {
    term: 'le contexte',
    title: 'La situation choisit',
    body: "Avant de dire une expression, regarde la situation : est-ce une bonne ou une mauvaise nouvelle, un ami ou un client, une blague ou un problème sérieux ? EN: check the situation before you pick an idiom.",
    examples: [
      { itemId: E(1361), note: 'une bonne nouvelle' },
      { itemId: E(1363), note: 'une mauvaise nouvelle' },
      { itemId: E(1355), note: 'une réunion : on revient au sujet' },
    ],
  },
};
