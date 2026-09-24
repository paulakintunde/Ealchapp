// b1.12.l1 « Dont et où » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, and the widest trio
// this lesson actually authors comes out at 35 characters with its two
// separators. Asserted in the scratch check, together with « every term is
// surfaced by at least one section ».
//
// « avec qui » labels the PREPOSITION term rather than « une personne »,
// which is 12 characters and pushed three closing-act chip rows to 38 and 39.
// The body still covers à qui, chez qui, pour qui and sans qui.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './dont-ou-corpus.ts';

export const DONT_OU_TERMS: Record<string, LessonTerm> = {
  /** Act 1: the thing the whole lesson turns on. */
  petitmot: {
    term: 'le petit mot',
    title: 'Ce que le verbe réclame',
    body: "Certains verbes et certains adjectifs arrivent avec un petit mot collé : parler DE, besoin DE, écrire À, partager AVEC. Ce petit mot décide de la relative. EN: some verbs and adjectives come with a little word attached, and it decides the clause.",
    examples: [
      { itemId: E(1222), note: 'besoin arrive avec de' },
      { itemId: E(1328), note: 'écrire arrive avec à' },
      { itemId: E(1330), note: 'partir arrive avec avec' },
    ],
  },

  /** Acts 1 and 8: the position rule, true of all three doors. */
  devant: {
    term: 'tout devant',
    title: 'La place du petit mot',
    body: "En français le petit mot ouvre la relative. Il ne reste jamais suspendu à la fin, comme l'anglais le permet. EN: in French the little word opens the clause and is never left hanging at the end.",
    examples: [
      { itemId: E(1329), note: 'à qui ouvre la relative' },
      { itemId: E(1350), note: "avec qui, là où l'anglais finit par with" },
      { itemId: E(1349), note: "où, là où l'anglais finit par in" },
    ],
  },

  /** Acts 1 and 10: quoted from b1.11, which owns it. */
  relative: {
    term: 'la relative',
    title: 'Deux phrases qui partagent un nom',
    body: "Tu as deux phrases courtes et un nom qui revient dans les deux. La relative colle les deux et remplace le nom par un petit mot. EN: two short sentences share a noun, and a little word replaces its second appearance.",
    examples: [
      { itemId: E(1200), note: 'la première phrase, toute seule' },
      { itemId: E(1201), note: 'la seconde, toute seule' },
      { itemId: E(1202), note: 'les deux, collées par dont' },
    ],
  },

  /** Acts 2 and 3. */
  motdont: {
    term: 'le mot dont',
    title: "dont, c'est de",
    body: "Quand le verbe ou l'adjectif réclame de, tu n'écris pas de : tu écris dont, une seule fois, au début de la relative. EN: when the verb or adjective asks for de, you write dont instead, once, at the start of the clause.",
    examples: [
      { itemId: E(1221), note: 'parler de' },
      { itemId: E(1223), note: 'avoir besoin de' },
      { itemId: E(1245), note: 'être fier de : un adjectif fait pareil' },
    ],
  },

  /** Act 4. */
  possesseur: {
    term: 'le possesseur',
    title: 'dont pour dire à qui est la chose',
    body: "Le nom de devant possède quelque chose. Après dont, la chose possédée prend le, la ou les, jamais son, sa ou ses. EN: after dont the thing owned takes le, la or les, never son, sa or ses.",
    examples: [
      { itemId: E(1265), note: 'le fils fait le verbe' },
      { itemId: E(1267), note: 'une chose peut posséder aussi' },
      { itemId: E(1269), note: 'et la chose possédée peut arriver après le verbe' },
    ],
  },

  /** Acts 5, 6 and 9. */
  motou: {
    term: 'le mot où',
    title: 'où, pour un lieu et pour un moment',
    body: "Un lieu et un moment prennent le même mot. L'anglais en a deux, where et when ; le français n'en a qu'un. EN: a place and a moment take the same word; English has two, French has one.",
    examples: [
      { itemId: E(1291), note: 'une rue : un lieu' },
      { itemId: E(1307), note: 'un jour : un moment' },
      { itemId: E(1313), note: 'une heure : un moment aussi' },
    ],
  },

  /** Act 5. */
  lieu: {
    term: 'le lieu',
    title: "L'endroit où ça se passe",
    body: "Une ville, une rue, un immeuble, un pays, une salle : un endroit prend toujours où. EN: a city, a street, a building, a country, a room: a place always takes où.",
    examples: [
      { itemId: E(1289), note: 'une ville' },
      { itemId: E(1293), note: 'une bibliothèque' },
      { itemId: E(1295), note: 'une seule pièce' },
    ],
  },

  /** Act 6. */
  moment: {
    term: 'le moment',
    title: "Le jour, l'année, le moment",
    body: "Un point dans le temps prend où, pas quand. quand sert à poser une question ou à ouvrir une phrase, jamais à reprendre un nom. EN: a point in time takes où, not quand.",
    examples: [
      { itemId: E(1307), note: 'le jour où' },
      { itemId: E(1309), note: "l'année où" },
      { itemId: E(1317), note: 'la fois où' },
    ],
  },

  /** Act 7. Labelled « avec qui » rather than « une personne » for the chip
   *  budget; the body covers à qui, chez qui, pour qui and sans qui too. */
  personne: {
    term: 'avec qui',
    title: 'La préposition reste écrite',
    body: "Avec une personne, la préposition ne fusionne avec rien : tu l'écris en entier, puis qui. à qui, avec qui, chez qui, pour qui, sans qui. EN: with a person the preposition is written out in full, then qui.",
    examples: [
      { itemId: E(1329), note: "à qui j'ai écrit" },
      { itemId: E(1331), note: 'avec qui je pars' },
      { itemId: E(1333), note: "chez qui j'ai dormi" },
    ],
  },

  /** Acts 10 and 11. */
  chaine: {
    term: 'la chaîne',
    title: 'Plusieurs relatives dans une phrase',
    body: "Chaque relative colle à son propre nom, et la phrase principale repart toujours sur son verbe. EN: each clause sticks to its own noun, and the main sentence still has to reach its verb.",
    examples: [
      { itemId: E(1384), note: 'dont, puis où, et le verbe au milieu' },
      { itemId: E(1387), note: 'deux relatives sur un seul nom, entre virgules' },
      { itemId: E(1389), note: 'chez qui pour la personne, où pour le lieu' },
    ],
  },
};
