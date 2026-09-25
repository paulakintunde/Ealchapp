// b1.16.l1 « Subjonctif ou infinitif » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here run 7 to 12 characters and the trios are
// assigned so that no row goes over; the scratch check measures the widest
// row in the lesson and prints it, together with « every term is surfaced
// somewhere ».
//
// « le sujet » rather than « le sujet grammatical » and « la paire » rather
// than « la conjonction » are deliberate. The lesson's whole method is a
// count a learner performs on a sentence, so the words have to be the ones
// they can hold while they do it.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './subjonctif-infinitif-corpus.ts';

export const SUBJONCTIF_INFINITIF_TERMS: Record<string, LessonTerm> = {
  /** Act 1, and every act after it. The gesture the lesson is built on. */
  compter: {
    term: 'compter',
    title: 'Compter avant de choisir',
    body: "Avant d'écrire la forme, regarde qui agit à gauche et qui agit à droite. Deux personnes différentes, ou la même deux fois. Ce compte décide tout le reste, et il se fait en une seconde. EN: Before you write the form, look at who acts on each side; that count decides everything else.",
    examples: [
      { itemId: E(1418), note: 'la règle, en une ligne' },
      { itemId: E(1412), note: 'tu veux, tu pars : une seule personne' },
      { itemId: E(1413), note: 'tu veux, je pars : deux personnes' },
    ],
  },

  /** Act 1 and act 2: the one-subject branch. */
  memesujet: {
    term: 'même sujet',
    title: 'La même personne des deux côtés',
    body: "Quand la personne qui veut est aussi celle qui part, le français n'ouvre pas de deuxième phrase. Le verbe reste à l'infinitif : je veux partir. Presque toujours, « que » disparaît avec elle. EN: When the same person does both things, French keeps one clause and the verb stays in the infinitive.",
    examples: [
      { itemId: E(1400), note: 'je veux, je pars : rien au milieu' },
      { itemId: E(1414), note: 'le bloc entier, à garder tel quel' },
      { itemId: E(1406), note: "j'aime, je travaille : même personne" },
    ],
  },

  /** Act 1 and act 2: the two-subject branch. */
  deuxsujets: {
    term: 'deux sujets',
    title: 'Deux personnes, deux moitiés',
    body: "Quand la deuxième personne est nouvelle, il lui faut sa propre moitié de phrase. « que » ouvre cette moitié, et le verbe dedans est au subjonctif. Sans « que », elle n'a nulle part où aller. EN: A new second person needs a clause of its own; que opens it and the verb inside is subjunctive.",
    examples: [
      { itemId: E(1401), note: 'je veux, tu pars : que ouvre la porte' },
      { itemId: E(1415), note: 'le bloc entier, à garder tel quel' },
      { itemId: E(1411), note: 'elle veut, son fils apprend' },
    ],
  },

  /** Act 2: the five verbs that take nothing at all. */
  nu: {
    term: 'infinitif nu',
    title: 'Ni de, ni à, ni rien',
    body: "Après vouloir, préférer, souhaiter, aimer et espérer, l'infinitif arrive tout seul : je veux partir, elle préfère rester. Ajouter « de » ou « à » entre les deux verbes casse la phrase. EN: After these five verbs the infinitive comes on its own; adding de or à breaks the sentence.",
    examples: [
      { itemId: E(1431), note: 'les cinq verbes de cette famille' },
      { itemId: E(1432), note: 'ce qu’il y a entre les deux verbes' },
      { itemId: E(1433), note: 'la règle, en une ligne' },
    ],
  },

  /** Acts 3 and 4: the two prepositions that carry the other routes. */
  petiteLettre: {
    term: 'de ou à',
    title: 'La petite lettre avant le verbe',
    body: "Beaucoup d'expressions demandent « de » devant l'infinitif (content de, peur de, important de) et quelques-unes demandent « à » (réussir à, hésiter à). C'est le premier verbe qui choisit, jamais le second. EN: Many expressions need de before the infinitive and a few need à; the first verb chooses, never the second.",
    examples: [
      { itemId: E(1469), note: 'les trois routes, côte à côte' },
      { itemId: E(1471), note: 'qui décide de la petite lettre' },
      { itemId: E(1452), note: 'être content de, le bloc entier' },
    ],
  },

  /** Acts 6 and 7: the five conjunctions that come in two forms. */
  paire: {
    term: 'la paire',
    title: 'Deux formes pour une idée',
    body: "Cinq expressions existent deux fois : pour et pour que, avant de et avant que, sans et sans que, afin de et afin que, à condition de et à condition que. La forme courte prend l'infinitif, la longue prend « que ». EN: Five expressions come in two forms; the short one takes an infinitive, the long one takes que.",
    examples: [
      { itemId: E(1504), note: 'pour partir : un seul sujet' },
      { itemId: E(1505), note: 'pour que tu partes : deux sujets' },
      { itemId: E(1531), note: 'la même question, cinq fois' },
    ],
  },

  /** Act 8: the four that break the count. */
  sanspaire: {
    term: 'sans paire',
    title: 'Quatre qui gardent toujours que',
    body: "Bien que, quoique, jusqu'à ce que et pourvu que n'ont pas de forme courte. « que » reste, même si la personne ne change pas : bien que je sois fatigué, je continue. Compter ne sert à rien ici. EN: These four have no short form, so que stays even when the person does not change.",
    examples: [
      { itemId: E(1538), note: 'bien que, le bloc entier' },
      { itemId: E(1542), note: 'la règle, en une ligne' },
      { itemId: E(1532), note: 'je suis fatigué, je finis : que reste' },
    ],
  },

  /** Act 5: the impersonal that goes both ways. */
  ilfaut: {
    term: 'il faut que',
    title: 'Avec ou sans nom derrière',
    body: "« Il faut partir » ne nomme personne : l'ordre est pour tout le monde. « Il faut que tu partes » nomme quelqu'un, et dès qu'un nom arrive il faut « que ». Le « il » de « il faut » ne désigne rien. EN: Il faut partir names nobody; naming somebody forces que, and the il of il faut points at nothing.",
    examples: [
      { itemId: E(1486), note: 'personne n’est nommé' },
      { itemId: E(1487), note: 'quelqu’un est nommé' },
      { itemId: E(1494), note: 'ce que le il de il faut désigne' },
    ],
  },

  /** Act 10: the interference this lesson exists to kill. */
  anglais: {
    term: 'l’anglais',
    title: 'Ce que l’anglais te souffle',
    body: "L'anglais dit « I want you to go » : une personne, puis un infinitif. Le français ne peut pas. Il ouvre avec « que », met le sujet, puis le verbe conjugué. Un infinitif ne vient jamais juste après « que ». EN: English puts a person then an infinitive; French opens with que, then a subject, then a finished verb.",
    examples: [
      { itemId: E(1564), note: 'la phrase juste et la phrase anglaise' },
      { itemId: E(1572), note: 'ce qui ne suit jamais que' },
      { itemId: E(1574), note: 'la règle, en une ligne' },
    ],
  },
};
