// b1.30.l1 « La coordination » : the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 9 to 13 characters; the scratch check measures
// every section's actual row against 37, so three 13-character labels are
// never put in one section together.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './coordination-corpus.ts';

export const COORDINATION_TERMS: Record<string, LessonTerm> = {
  connecteur: {
    term: 'le connecteur',
    title: 'Le mot qui dit le lien',
    body: "Un connecteur relie deux idées, et il dit comment elles se tiennent : il ajoute, il oppose, il explique, il conclut. Changer de connecteur, c'est changer le sens. EN: a connector joins two ideas and says how they hang together.",
    examples: [
      { itemId: E(1000), note: 'mais : la suite va contre le salaire' },
      { itemId: E(1001), note: 'car : la raison arrive après' },
      { itemId: E(1004), note: 'donc : la conséquence arrive après' },
    ],
  },

  sept: {
    term: 'les sept mots',
    title: 'Mais où est donc Ornicar',
    body: "Les sept conjonctions de coordination : mais, ou, et, donc, or, ni, car. La phrase « Mais où est donc Ornicar » sert à s'en souvenir. Elles relient deux éléments de même rang. EN: the seven coordinating conjunctions, and the sentence French children use to remember them.",
    examples: [
      { itemId: E(1020), note: 'la phrase pour ne rien oublier' },
      { itemId: E(1023), note: 'mais : il continue malgré la fatigue' },
      { itemId: E(1025), note: 'car : la pluie explique le bus' },
    ],
  },

  virgule: {
    term: 'la virgule',
    title: 'Des virgules, puis et',
    body: "Dans une liste, les virgules séparent les éléments et et arrive une seule fois, devant le dernier. Pas de et devant chaque élément, et pas de virgule devant ce et. EN: commas between items, et once before the last, no comma before it.",
    examples: [
      { itemId: E(1034), note: 'trois achats, un seul et' },
      { itemId: E(1048), note: 'trois invités, un seul et' },
      { itemId: E(1041), note: 'trois actions, un seul et' },
    ],
  },

  opposition: {
    term: 'l’opposition',
    title: 'Mais change de direction',
    body: "Mais annonce que la suite va contre ce qui précède, ou corrige une idée fausse : ce n'est pas mon frère, mais mon cousin. Pourtant et cependant opposent aussi, plus fort, surtout à l'écrit. EN: mais turns the sentence round or corrects; pourtant and cependant are stronger, written cousins.",
    examples: [
      { itemId: E(1053), note: 'pas cher, mais loin' },
      { itemId: E(1054), note: 'une correction : pas lui, mais lui' },
      { itemId: E(1141), note: 'pourtant, à reconnaître' },
    ],
  },

  consequence: {
    term: 'donc, alors',
    title: 'La conséquence',
    body: "Donc et alors disent ce qui suit logiquement. Donc est neutre et va bien à l'écrit, souvent après le verbe : il faut donc partir. Alors est plus oral. Le so de l'intensité, lui, se dit si ou tellement. EN: donc and alors give the consequence; the so of intensity is si or tellement.",
    examples: [
      { itemId: E(1068), note: "donc : la neige, puis l'école fermée" },
      { itemId: E(1069), note: "alors : la même chose, à l'oral" },
      { itemId: E(1073), note: 'tellement : le so de l’intensité' },
    ],
  },

  cause: {
    term: 'car, la cause',
    title: 'Car explique après coup',
    body: "Car donne la raison de ce que tu viens de dire. Il vient après une virgule et n'ouvre jamais une phrase. Il appartient surtout à l'écrit ; à l'oral, et pour répondre à pourquoi, on dit parce que. EN: car gives the reason after a comma, never first, and mostly in writing.",
    examples: [
      { itemId: E(1086), note: 'la tempête explique le vol annulé' },
      { itemId: E(1094), note: 'la raison de la démission' },
      { itemId: E(1089), note: 'pourquoi appelle parce que' },
    ],
  },

  or: {
    term: 'or, à l’écrit',
    title: 'Or apporte un fait nouveau',
    body: "Or ouvre une phrase et présente un fait qui change l'argument : now, yet. C'est un mot écrit, des lettres et des raisonnements. Tu dois le reconnaître ; tu n'as pas besoin de l'utiliser souvent. EN: or brings in a fact that turns the argument; recognise it in writing.",
    examples: [
      { itemId: E(1101), note: "l'appartement était déjà loué" },
      { itemId: E(1103), note: 'le raisonnement classique' },
      { itemId: E(1116), note: "l'annonce et la réalité" },
    ],
  },

  nini: {
    term: 'ni ... ni',
    title: 'Deux non reliés',
    body: "Ni relie deux éléments niés. Avec ne devant le verbe, sans pas : je n'ai ni le temps ni l'envie. Après sans, ni suffit : sans sucre ni lait. EN: ni joins two negated items, with ne and no pas; after sans, one ni is enough.",
    examples: [
      { itemId: E(1107), note: 'deux choses manquent' },
      { itemId: E(1108), note: 'deux personnes, en sujet' },
      { itemId: E(1112), note: 'sans ... ni' },
    ],
  },

  ajout: {
    term: 'les ajouts',
    title: 'Ajouter un argument',
    body: "En plus et de plus ajoutent un argument dans le même sens. En plus est plus oral, de plus plus écrit. En effet, lui, n'ajoute pas : il confirme avec une preuve. EN: en plus and de plus add an argument; en effet confirms with evidence.",
    examples: [
      { itemId: E(1117), note: 'en plus : un deuxième avantage' },
      { itemId: E(1119), note: "de plus : la même chose, à l'écrit" },
      { itemId: E(1120), note: 'en effet : la preuve' },
    ],
  },

  precision: {
    term: 'c’est-à-dire',
    title: 'Redire plus précisément',
    body: "C'est-à-dire redit la même idée de façon plus précise ou plus claire : après-demain, c'est-à-dire jeudi. Il n'ajoute rien de nouveau. EN: c'est-à-dire restates the same idea more precisely.",
    examples: [
      { itemId: E(1121), note: 'un jour, puis sa date' },
      { itemId: E(1122), note: 'mi-temps, puis le nombre d’heures' },
      { itemId: E(1174), note: 'une date, puis le délai' },
    ],
  },

  ellipse: {
    term: 'l’ellipse',
    title: 'Ne pas tout répéter',
    body: "Après et ou mais, tu enlèves ce qui est déjà dit : je parle anglais, mais pas espagnol ; elle aime le thé, et moi aussi. La phrase garde le même sens, en plus court. EN: after et or mais, leave out what is already said.",
    examples: [
      { itemId: E(1150), note: 'le verbe n’est pas répété' },
      { itemId: E(1151), note: 'moi aussi remplace toute une phrase' },
      { itemId: E(1154), note: 'habite est dit une seule fois' },
    ],
  },
};
