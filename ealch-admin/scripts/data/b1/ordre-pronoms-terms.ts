// b1.17.l1 « L'ordre des pronoms » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 7 to 11 characters, and the widest trio
// this lesson actually authors is « la personne » + « le relatif » +
// « la bascule » = 31. Asserted in the scratch check, together with « every
// term is surfaced by at least one section ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».
//
// « le relatif » is defined here for one reason only: so a learner who has
// just finished b1.11 to b1.13 cannot mistake `le` for `que`. It is named on
// exactly one card, in act 2, and nowhere else.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './ordre-pronoms-corpus.ts';

export const ORDRE_PRONOMS_TERMS: Record<string, LessonTerm> = {
  /** Act 1 and act 2: the whole lesson in one picture. */
  file: {
    term: 'la file',
    title: 'Cinq places, toujours les mêmes',
    body: "Quand deux petits mots arrivent ensemble, ils ne se bousculent pas : ils font la file. Il y a cinq places et chaque mot connaît la sienne. EN: When two little words arrive together they queue: five places, and each word knows its own.",
    examples: [
      { itemId: E(1611), note: 'les cinq places, dans l’ordre' },
      { itemId: E(1610), note: 'la phrase à retenir' },
      { itemId: E(1794), note: 'toute la leçon en une ligne' },
    ],
  },

  /** Act 2 and act 3. */
  chose: {
    term: 'la chose',
    title: 'le, la, les : ce dont on parle',
    body: "La chose, c'est l'objet que le verbe touche : le paquet, la lettre, les clés. Elle prend la deuxième place de la file. EN: The thing is what the verb acts on, and it takes the second place in the queue.",
    examples: [
      { itemId: E(1637), note: 'le remplace le paquet' },
      { itemId: E(1639), note: 'les remplace les photos' },
      { itemId: E(1617), note: 'la règle en une phrase' },
    ],
  },

  /** Act 3: the other person. */
  personne: {
    term: 'la personne',
    title: 'lui, leur : à qui ça va',
    body: "lui et leur disent à qui la chose est donnée, rendue ou dite. Ils passent APRÈS la chose, jamais avant. EN: lui and leur say who receives the thing, and they come after it, never before.",
    examples: [
      { itemId: E(1649), note: 'la règle de l’acte 3' },
      { itemId: E(1640), note: 'le avant leur' },
      { itemId: E(1655), note: 'les avant leur' },
    ],
  },

  /** Act 4: the mobile one. */
  proche: {
    term: 'le proche',
    title: 'me, te, nous, vous : toi et moi',
    body: "Quand la personne, c'est toi ou moi, le petit mot prend la PREMIÈRE place et passe devant la chose. C'est la seule place qui bouge. EN: When the person is you or me, the little word takes the first place and goes in front of the thing.",
    examples: [
      { itemId: E(1656), note: 'me avant les' },
      { itemId: E(1666), note: 'la règle de l’acte 4' },
      { itemId: E(1618), note: 'me avant le' },
    ],
  },

  /** Acts 8 and 9: where the file lands. */
  bloc: {
    term: 'le bloc',
    title: 'La file ne quitte pas son verbe',
    body: "Les petits mots et leur verbe forment un bloc. Rien ne se glisse entre eux : pas l'auxiliaire, pas la négation, pas un adverbe. EN: The little words and their verb form one block, and nothing slips in between.",
    examples: [
      { itemId: E(1736), note: 'devant avoir, pas devant le participe' },
      { itemId: E(1756), note: 'sur l’infinitif qui les commande' },
      { itemId: E(1750), note: 'le bloc est sur donner' },
    ],
  },

  /** Acts 6 and 7: the flip. */
  bascule: {
    term: 'la bascule',
    title: "L'ordre affirmatif renverse tout",
    body: "Un ordre qui dit oui envoie la file derrière le verbe, avec des traits d'union, et me devient moi. Un ordre qui dit non ne bascule pas. EN: A command that says yes sends the queue behind the verb with hyphens; a command that says no does not.",
    examples: [
      { itemId: E(1694), note: 'la chose passe devant moi' },
      { itemId: E(1703), note: 'la règle de la bascule' },
      { itemId: E(1696), note: 'les avant lui, derrière le verbe' },
    ],
  },

  /** Act 10: what the ear gets. */
  elision: {
    term: "l'élision",
    title: 'Devant une voyelle, la voyelle tombe',
    body: "me, te, se, le et la perdent leur voyelle devant un son de voyelle. On entend un seul bloc : je t'en parle, il m'y a vu. EN: me, te, se, le and la drop their vowel before a vowel sound, so the block runs together.",
    examples: [
      { itemId: E(1773), note: 'la règle de l’élision' },
      { itemId: E(1767), note: 'me devient m’ devant y' },
      { itemId: E(1625), note: 'te devient t’ devant en' },
    ],
  },

  /** Act 8: the spelling consequence. */
  accord: {
    term: "l'accord",
    title: 'La chose est devant, donc elle compte',
    body: "Au passé composé, si la chose est passée devant le verbe, le participe s'accorde avec elle : je les ai vues, elle me les a montrées. EN: In the passé composé, a direct object in front of the verb makes the participle agree with it.",
    examples: [
      { itemId: E(1734), note: 'les photos : vues' },
      { itemId: E(1743), note: 'la règle de l’accord' },
      { itemId: E(1732), note: 'les lettres : montrées' },
    ],
  },

  /** Act 2 only: the family this lesson is NOT about. */
  relatif: {
    term: 'le relatif',
    title: "L'autre famille de petits mots",
    body: "qui, que, dont et où collent DEUX phrases. le, lui et en remplacent un nom dans UNE phrase. Les deux familles ne se mélangent jamais. EN: Relatives glue two sentences; object pronouns replace a noun inside one.",
    examples: [
      { itemId: E(1636), note: 'la différence, en une ligne' },
      { itemId: E(1637), note: 'le remplace un nom' },
      { itemId: E(1612), note: 'le et lui, dans une seule phrase' },
    ],
  },
};
