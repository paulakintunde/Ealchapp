// b2.34.l1 « Les proverbes et les expressions figées »: the lesson glossary. DRAFT.
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
import { E } from './proverbes-corpus.ts';

export const PROVERBES_TERMS: Record<string, LessonTerm> = {
  proverbe: {
    term: 'le proverbe',
    title: 'Une vérité générale, sans auteur',
    body: 'Un proverbe est une phrase courte et anonyme qui prétend dire une vérité pour tout le monde : au présent, souvent sans article, souvent en deux moitiés. Tu le cites ; tu ne le conjugues pas. EN: A short, anonymous sentence claiming a general truth; you quote it.',
    examples: [
      { itemId: E(1612), note: 'sans article, au présent' },
      { itemId: E(1617), note: 'qui veut dire celui qui' },
      { itemId: E(1655), note: 'sans verbe, en deux moitiés' },
    ],
  },

  figement: {
    term: 'le figement',
    title: 'Des mots qui ne bougent plus',
    body: 'Une expression figée garde ses mots et son image : on ne dit pas « tomber des nuages ». Mais elle vit dans ta phrase : son verbe se conjugue et son possessif suit le sujet. EN: The words are frozen, but the verb conjugates and the possessive follows the subject.',
    examples: [
      { itemId: E(1603), note: 'les mots restent, le verbe change' },
      { itemId: E(1740), note: 'mon mal, son mal' },
      { itemId: E(1604), note: 'nous avions du pain sur la planche' },
    ],
  },

  locution: {
    term: 'la locution',
    title: 'Un groupe qui compte pour un mot',
    body: 'Une locution est un groupe de mots figé qui joue le rôle d’un seul mot : un adverbe (tout de suite), une préposition (à cause de), une conjonction (bien que). Elle n’a pas d’image à comprendre. EN: A fixed group that works as one word, with no image to decode.',
    examples: [
      { itemId: E(1605), note: 'à la fois, tout de suite' },
      { itemId: E(1603), note: 'à comparer : l’expression figée' },
      { itemId: E(1602), note: 'à comparer : le proverbe' },
    ],
  },

  citation: {
    term: 'la citation',
    title: 'Annoncer, couper, rendre',
    body: 'On annonce souvent un proverbe (comme on dit, tu connais le proverbe) et on le coupe volontiers en deux : la suite, tout le monde la connaît. Une morale de La Fontaine, elle, se cite mot pour mot. EN: Announce it, cut it in half if you like; quote La Fontaine exactly.',
    examples: [
      { itemId: E(1607), note: 'l’annonce la plus courante' },
      { itemId: E(1610), note: 'la moitié suffit' },
      { itemId: E(1696), note: 'La Fontaine, mot pour mot' },
    ],
  },

  figure: {
    term: 'le figuré',
    title: 'L’image et le sens',
    body: 'Au sens propre, un chat qui a été brûlé par de l’eau chaude se méfie de l’eau froide. Au sens figuré, quelqu’un qui a déjà souffert devient prudent. Comprendre un proverbe, c’est passer de l’image au sens. EN: From the literal picture to the figurative meaning.',
    examples: [
      { itemId: E(1645), note: 'le chat, puis la personne' },
      { itemId: E(1741), note: 'tomber des nues : du ciel' },
      { itemId: E(1667), note: 'semer le vent, récolter la tempête' },
    ],
  },

  morale: {
    term: 'la morale',
    title: 'La leçon d’une fable',
    body: 'Chez La Fontaine, la morale tire la leçon de l’histoire, souvent en un ou deux vers. Elle ne dit pas toujours ce qui est juste : parfois, elle décrit seulement ce qui se passe, et te laisse juger. EN: The lesson of a fable; sometimes it only describes the world.',
    examples: [
      { itemId: E(1682), note: 'une description, pas une approbation' },
      { itemId: E(1683), note: 'le lièvre et la tortue' },
      { itemId: E(1684), note: 'le lion et le rat' },
    ],
  },

  calque: {
    term: 'le calque',
    title: 'La traduction mot à mot qui trompe',
    body: 'Un calque recopie l’anglais mot à mot : « une fois mordu, deux fois timide », « ne compte pas tes poulets ». Le français a déjà son proverbe, souvent avec une autre image. Cherche-le avant de traduire. EN: A word-for-word copy of English; look for the French proverb first.',
    examples: [
      { itemId: E(1714), note: 'les poussins deviennent un ours' },
      { itemId: E(1716), note: 'la morsure devient un chat' },
      { itemId: E(1729), note: 'deux oiseaux deviennent deux coups' },
    ],
  },

  equivalent: {
    term: 'l’équivalent',
    title: 'Même image, autre image, ou rien',
    body: 'Trois cas : la même image dans les deux langues (tel père, tel fils), une autre image pour la même idée (chat échaudé), ou pas d’équivalent fixe : alors tu traduis le sens. EN: Same image, another image, or no fixed equivalent.',
    examples: [
      { itemId: E(1720), note: 'la même image' },
      { itemId: E(1716), note: 'une autre image' },
      { itemId: E(1718), note: 'pas d’équivalent unique' },
    ],
  },

  ironie: {
    term: 'l’ironie',
    title: 'Le proverbe détourné',
    body: 'On détourne un proverbe pour faire sourire : on change sa fin (qui va lentement arrive en retard) ou on le répète d’un ton las. Le détournement ne marche que si tout le monde connaît l’original. EN: Twisting a proverb for a laugh only works if everyone knows the original.',
    examples: [
      { itemId: E(1703), note: 'une fin changée' },
      { itemId: E(1705), note: 'un ton las' },
      { itemId: E(1764), note: 'le proverbe au passé, pour fêter' },
    ],
  },

  accroche: {
    term: 'l’accroche',
    title: 'Ouvrir un texte, jamais le prouver',
    body: 'Dans un texte formel, un proverbe sert d’accroche ou de conclusion : il pose la question, puis tu la discutes avec des arguments et des exemples. Un proverbe ne prouve rien. EN: In formal writing a proverb opens or closes; it proves nothing.',
    examples: [
      { itemId: E(1712), note: 'la règle' },
      { itemId: E(1759), note: 'une ouverture de chronique' },
      { itemId: E(1763), note: 'une conclusion' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'Familier, courant, soutenu',
    body: 'Les proverbes sonnent populaires ou sages ; ils vont bien à table, au travail, dans une chronique. Leur annonce, elle, change de registre : je connais la chanson (familier), comme on dit (courant), si l’on en croit le proverbe (soutenu). EN: The proverb is neutral; its announcement sets the register.',
    examples: [
      { itemId: E(1709), note: 'familier' },
      { itemId: E(1607), note: 'courant' },
      { itemId: E(1708), note: 'soutenu' },
    ],
  },
};
