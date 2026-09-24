// b1.13.l1 « Lequel, ce qui et ce que » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 12 characters, and the widest trio
// this lesson actually authors is « le besoin de » + « tout ce qui » +
// « le composé » = 33. Asserted in the scratch check, together with « every
// term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './lequel-ce-qui-corpus.ts';

export const LEQUEL_CE_QUI_TERMS: Record<string, LessonTerm> = {
  /** Act 1: the whole decision, and the only thing the lesson asks you to do. */
  devant: {
    term: 'le devant',
    title: 'Ce qui est écrit juste avant le trou',
    body: "Avant de choisir ton mot, tu regardes ce qui est écrit devant. Un nom : tu le reprends. Rien : tu écris ce. C'est le seul geste de toute la leçon. EN: Look at what is written in front of the gap. A noun means you pick it up; nothing means you write ce.",
    examples: [
      { itemId: E(1402), note: 'le tournevis est écrit devant' },
      { itemId: E(1404), note: "rien n'est écrit devant" },
      { itemId: E(1409), note: 'la règle en une ligne' },
    ],
  },

  /** Act 2: word order, and the English habit that breaks it. */
  place: {
    term: 'la place',
    title: 'La préposition passe devant',
    body: "En anglais, avec, sur et dans restent à la fin de la phrase. En français, la préposition monte devant le petit mot et n'en bouge plus. EN: English leaves with, on and in at the end; French moves the preposition in front and leaves it there.",
    examples: [
      { itemId: E(1418), note: 'avec passe devant lequel' },
      { itemId: E(1419), note: 'sur passe devant laquelle' },
      { itemId: E(1422), note: 'la règle, en une ligne' },
    ],
  },

  /** Act 3: agreement with the noun in front. */
  forme: {
    term: 'les formes',
    title: 'Quatre formes, trois sons',
    body: "lequel, laquelle, lesquels, lesquelles. Tu prends le genre et le nombre du nom de devant, jamais ceux de la chose. Les deux pluriels se disent pareil. EN: Take the gender and number of the noun in front; the two plurals sound the same.",
    examples: [
      { itemId: E(1436), note: 'un nom masculin : lequel' },
      { itemId: E(1437), note: 'un nom féminin : laquelle' },
      { itemId: E(1451), note: 'quatre formes, trois sons' },
    ],
  },

  /** Acts 4 and 5: the two prepositions that fuse. */
  soudure: {
    term: 'la soudure',
    title: 'à et de se collent au mot',
    body: "Deux prépositions seulement se soudent : à donne auquel, auxquels, auxquelles, et de donne duquel, desquels, desquelles. Le féminin singulier résiste aux deux. EN: Only à and de fuse; the feminine singular resists both.",
    examples: [
      { itemId: E(1454), note: 'à plus lequel : auquel' },
      { itemId: E(1455), note: 'à laquelle reste en deux mots' },
      { itemId: E(1487), note: 'de fait exactement pareil' },
    ],
  },

  /** Act 5: the one place dont cannot go. */
  compose: {
    term: 'le composé',
    title: 'Un groupe qui finit par de',
    body: "à côté de, au bout de, près de, en face de, le long de : ce sont des groupes. Après un groupe, dont ne passe plus et tu écris duquel. EN: after a compound preposition ending in de, dont is impossible and duquel takes over.",
    examples: [
      { itemId: E(1477), note: 'de tout seul : dont' },
      { itemId: E(1478), note: 'à côté de : duquel' },
      { itemId: E(1471), note: 'la frontière, en une ligne' },
    ],
  },

  /** Act 6: the fixed blocks a B1 learner will actually write. */
  raison: {
    term: 'la raison',
    title: 'Des blocs à apprendre entiers',
    body: "la raison pour laquelle, les conditions dans lesquelles, le point sur lequel, grâce auquel. Tu apprends le bloc complet, pas mot à mot. EN: learn these as whole blocks rather than word by word.",
    examples: [
      { itemId: E(1489), note: 'le bloc le plus utile de tous' },
      { itemId: E(1498), note: 'un bloc au pluriel' },
      { itemId: E(1505), note: 'pourquoi ne vient jamais là' },
    ],
  },

  /** Act 7: the b1.11 preview, now the system. */
  neutre: {
    term: 'le neutre',
    title: "Quand rien n'est écrit devant",
    body: "Aucun nom devant le trou : ce prend sa place, et tu gardes le test que tu connais pour choisir qui ou que derrière. EN: with no noun in front, ce stands in, and the test you already know picks qui or que.",
    examples: [
      { itemId: E(1506), note: 'rien derrière : ce qui' },
      { itemId: E(1507), note: 'je derrière : ce que' },
      { itemId: E(1521), note: 'ce que remplace ce' },
    ],
  },

  /** Act 8: the third form, and where its de comes from. */
  besoin: {
    term: 'le besoin de',
    title: 'Le verbe qui réclame de',
    body: "avoir besoin de, parler de, avoir envie de, s'occuper de. Quand le verbe porte un de, la forme est ce dont et rien d'autre. EN: when the verb carries a de, the form is ce dont.",
    examples: [
      { itemId: E(1523), note: 'avoir besoin de' },
      { itemId: E(1524), note: 'parler de' },
      { itemId: E(1526), note: 'la règle, en une ligne' },
    ],
  },

  /** Act 9: the ce an anglophone drops. */
  tout: {
    term: 'tout ce qui',
    title: 'tout ne remplace pas le ce',
    body: "tout n'est pas un nom, donc il ne reprend rien. Le ce reste : tout ce qui, tout ce que, tout ce dont. L'anglais dit all I need et laisse tomber les deux mots. EN: tout is not a noun, so ce stays.",
    examples: [
      { itemId: E(1540), note: 'tout ce qui, rien derrière' },
      { itemId: E(1545), note: 'tout ce que, tu derrière' },
      { itemId: E(1543), note: 'la règle, en une ligne' },
    ],
  },

  /** Act 10: what sits in front is a whole sentence. */
  phrase: {
    term: 'la phrase',
    title: 'Devant la virgule, une phrase entière',
    body: "Après une virgule, ce qui ne reprend pas un nom : il reprend tout ce que tu viens de dire. Une phrase n'est pas un nom, donc le ce est obligatoire. EN: after a comma, ce qui picks up the whole sentence, and a sentence is not a noun.",
    examples: [
      { itemId: E(1557), note: 'ce qui reprend la phrase entière' },
      { itemId: E(1559), note: 'parler de, donc ce dont' },
      { itemId: E(1570), note: 'un seul which en anglais' },
    ],
  },
};
