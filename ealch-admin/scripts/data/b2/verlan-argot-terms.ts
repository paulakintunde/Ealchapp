// b2.32.l1 « Le verlan et l’argot d’aujourd’hui »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters; most sections carry one or
// two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './verlan-argot-corpus.ts';

export const VERLAN_ARGOT_TERMS: Record<string, LessonTerm> = {
  echelle: {
    term: 'l’échelle',
    title: 'Quatre barreaux, une même idée',
    body: 'En haut, le soutenu ; au milieu, le courant, qui va partout ; plus bas, le familier, celui des proches ; tout en bas, l’argot, les mots d’un groupe. Le sens ne change pas d’un barreau à l’autre : c’est la personne en face qui change. EN: Four rungs, one meaning; what changes is the listener.',
    examples: [
      { itemId: E(1002), note: 'l’argot : les keufs' },
      { itemId: E(1004), note: 'le courant : la police' },
      { itemId: E(1005), note: 'le soutenu : les forces de l’ordre' },
    ],
  },

  verlan: {
    term: 'le verlan',
    title: 'Les sons à l’envers',
    body: 'Le verlan coupe un mot en syllabes et les inverse, à l’oreille et pas sur le papier : lourd donne relou, louche donne chelou. Un mot d’une syllabe reçoit souvent un petit « e » avant d’être retourné. EN: Verlan swaps the syllables you hear.',
    examples: [
      { itemId: E(1022), note: 'lourd, relou ; fou, ouf' },
      { itemId: E(1038), note: 'les sons, pas les lettres' },
      { itemId: E(1053), note: 'le verlan du verlan' },
    ],
  },

  troncation: {
    term: 'la troncation',
    title: 'Couper la fin du mot',
    body: 'La troncation raccourcit un mot : appartement devient appart, restaurant devient resto. Certaines sont devenues courantes (photo, métro, vélo) ; les autres restent familières et se gardent pour les proches. EN: Clipping shortens a word; a few clippings became standard.',
    examples: [
      { itemId: E(1073), note: 'appartement, appart' },
      { itemId: E(1072), note: 'celles qui passent partout' },
      { itemId: E(1077), note: 'disponible, dans une lettre' },
    ],
  },

  suffixe: {
    term: 'le suffixe',
    title: 'Une nouvelle fin',
    body: 'L’argot remplace parfois la fin d’un mot : -os (calmos), -oche (cinoche, téloche). Le sens reste le même, seul le registre descend. Le suffixe -ard, lui, ajoute de la moquerie : un flemmard, un froussard, un chauffard. EN: New endings lower the register; -ard adds scorn.',
    examples: [
      { itemId: E(1098), note: '-os et -oche : même sens' },
      { itemId: E(1097), note: '-ard : péjoratif' },
      { itemId: E(1088), note: 'un chauffard, même aux informations' },
    ],
  },

  emprunt: {
    term: 'l’emprunt',
    title: 'Des mots venus d’ailleurs',
    body: 'L’argot d’aujourd’hui emprunte à l’arabe (kiffer, le seum, le bled, wesh), à l’anglais (chiller, le crush) et au français d’Afrique (la go). Un emprunt garde souvent la couleur du groupe qui l’a apporté : dans ta bouche, il peut sonner comme une imitation. EN: Borrowed words keep the colour of the group that brought them.',
    examples: [
      { itemId: E(1118), note: 'venus de l’arabe' },
      { itemId: E(1120), note: 'surtout de Côte d’Ivoire' },
      { itemId: E(1123), note: 'le risque de l’imitation' },
    ],
  },

  intensif: {
    term: 'l’intensif',
    title: 'Renforcer, à l’oral',
    body: 'Trop, grave et de ouf renforcent un mot, comme très ou extrêmement. Genre et en mode, eux, aident à hésiter, à comparer ou à arrondir. Tout cela est naturel à l’oral, entre amis ; à l’écrit, garde très, vraiment, environ. EN: Intensifiers and fillers belong to speech; writing keeps the neutral words.',
    examples: [
      { itemId: E(1140), note: 'à l’oral, à l’écrit' },
      { itemId: E(1144), note: 'trop n’est pas négatif ici' },
      { itemId: E(1141), note: 'les trois emplois de genre' },
    ],
  },

  date: {
    term: 'le mot daté',
    title: 'Ce qui vieillit',
    body: 'L’argot des jeunes change en quelques années. Un mot daté (c’est de la balle, chanmé, zarbi) fait sourire ou vieillir ; un mot récent (en PLS, ça passe crème) peut dater vite. Certains, comme relou et chelou, durent. EN: Youth slang ages fast; some words last.',
    examples: [
      { itemId: E(1146), note: 'fin des années quatre-vingt-dix' },
      { itemId: E(1153), note: 'ceux qui durent' },
      { itemId: E(1155), note: 'l’adulte qui force' },
    ],
  },

  texto: {
    term: 'le texto',
    title: 'Écrit vite, lu entre amis',
    body: 'Mdr, ptdr, jsp, tkt, oklm : les abréviations des textos s’écrivent vite et se lisent entre amis. Mdr sert souvent à adoucir un message plus qu’à dire qu’on rit. Dans un courriel formel, tous les mots s’écrivent en entier. EN: Texting shortcuts are for friends; formal emails spell everything out.',
    examples: [
      { itemId: E(1167), note: 'le message, écrit en entier' },
      { itemId: E(1170), note: 'mdr adoucit' },
      { itemId: E(1171), note: 'avec un inconnu' },
    ],
  },

  neutre: {
    term: 'le neutre',
    title: 'Remonter l’échelle',
    body: 'Traduire vers le neutre, c’est garder le sens et changer les mots : relou devient pénible, j’ai le seum devient je suis déçu. Souvent, le mot neutre adoucit aussi : un chef relou devient un responsable exigeant. EN: Neutral French keeps the meaning and changes the words, often softening them.',
    examples: [
      { itemId: E(1183), note: 'garder le sens' },
      { itemId: E(1184), note: 'adoucir en montant' },
      { itemId: E(1181), note: 'dispo, disponible' },
    ],
  },

  sensible: {
    term: 'mot sensible',
    title: 'Ce qu’on reconnaît sans le dire',
    body: 'Certains mots blessent : insultes, mots qui désignent des gens par leur origine, mots hostiles envers la police. Cette leçon ne les enseigne pas. Reconnais qu’un mot est sensible, et si tu as un doute, ne l’emploie pas. EN: Some words hurt; recognise them and, when in doubt, leave them out.',
    examples: [
      { itemId: E(1055), note: 'l’origine des gens' },
      { itemId: E(1186), note: 'dans le doute' },
      { itemId: E(1188), note: 'demander avant de répéter' },
    ],
  },
};
