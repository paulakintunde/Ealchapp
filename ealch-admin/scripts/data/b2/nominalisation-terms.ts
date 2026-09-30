// b2.10.l1 « La nominalisation »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters; the two 13-character labels
// (« qui fait quoi », « dénominaliser ») are never used together.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './nominalisation-corpus.ts';

export const NOMINALISATION_TERMS: Record<string, LessonTerm> = {
  nominaliser: {
    term: 'nominaliser',
    title: 'Plier une action dans un nom',
    body: "Nominaliser, c'est dire une action ou une qualité avec un nom : quand le camion est arrivé devient à l'arrivée du camion. Le nom condense la phrase ; il sert surtout à l'écrit, là où le lecteur peut relire. EN: Turning an action or a quality into a noun condenses the sentence.",
    examples: [
      { itemId: E(1405), note: 'quand le camion est arrivé' },
      { itemId: E(1403), note: 'les prix ont augmenté' },
      { itemId: E(1401), note: 'on a fermé l’entrepôt' },
    ],
  },

  suffixe: {
    term: 'le suffixe',
    title: 'La fin qui fait le nom',
    body: "Le suffixe s'ajoute au radical du verbe : -tion, -ment, -age, -ure, -ée, -ance. Chaque verbe a le sien, et il ne se devine pas toujours : on dit l'augmentation, le lancement, le nettoyage. EN: Each verb takes its own suffix; learn it with the noun.",
    examples: [
      { itemId: E(1420), note: 'annuler, -ation' },
      { itemId: E(1421), note: 'lancer, -ment' },
      { itemId: E(1422), note: 'nettoyer, -age' },
    ],
  },

  genre: {
    term: 'le genre',
    title: 'Le suffixe donne le genre',
    body: "-ment et -age font des noms masculins ; -tion, -ure, -ée, -ance, -ité et -eur des noms féminins. Les pièges sont peu nombreux : la plage, la page, l'image, le silence, le musée, le bonheur. EN: The suffix almost always gives the gender; learn the few exceptions.",
    examples: [
      { itemId: E(1434), note: 'l’arrivée est prévue : féminin' },
      { itemId: E(1440), note: 'le stationnement : masculin' },
      { itemId: E(1436), note: 'la plage : un piège' },
    ],
  },

  court: {
    term: 'le nom court',
    title: 'Le nom sans suffixe',
    body: "Beaucoup de noms d'action n'ont pas de suffixe : le refus, l'achat, la vente, la baisse. D'autres viennent du participe (la prise, la mise) ou d'une autre forme (le départ, le choix). Cherche-les avant d'inventer un nom en -tion. EN: Many action nouns have no suffix; look for them before inventing one.",
    examples: [
      { itemId: E(1457), note: 'acheter, l’achat' },
      { itemId: E(1458), note: 'refuser, le refus' },
      { itemId: E(1463), note: 'mis, la mise' },
    ],
  },

  qualite: {
    term: 'la qualité',
    title: "De l'adjectif au nom",
    body: "Un adjectif devient lui aussi un nom : rapide, la rapidité ; lent, la lenteur ; sage, la sagesse ; franc, la franchise ; prudent, la prudence. Ces noms sont presque tous féminins. EN: Adjectives turn into nouns of quality, nearly all feminine.",
    examples: [
      { itemId: E(1481), note: 'rapide, la rapidité' },
      { itemId: E(1484), note: 'lent, la lenteur' },
      { itemId: E(1488), note: 'le bonheur : masculin' },
    ],
  },

  groupe: {
    term: 'le groupe',
    title: 'Une proposition devient un groupe',
    body: "Quand il est arrivé devient à son arrivée : la conjonction devient une préposition, le verbe un nom, le sujet un possessif ou un complément avec de. Avant son départ évite même le subjonctif d'avant qu'il parte. EN: A clause becomes a preposition plus a noun.",
    examples: [
      { itemId: E(1496), note: 'quand il est arrivé' },
      { itemId: E(1498), note: 'avant qu’il parte' },
      { itemId: E(1500), note: 'après qu’on a signé' },
    ],
  },

  lien: {
    term: 'le mot-lien',
    title: 'La préposition qui relie',
    body: "Dans une phrase, la conjonction dit le lien. Dans un groupe nominal, c'est la préposition : en raison de pour la cause, en vue de pour le but, malgré pour l'obstacle, faute de pour le manque, lors de pour le moment. EN: In a noun phrase, the preposition carries the link.",
    examples: [
      { itemId: E(1513), note: 'la cause' },
      { itemId: E(1516), note: 'le but' },
      { itemId: E(1518), note: 'le manque' },
    ],
  },

  agent: {
    term: 'qui fait quoi',
    title: 'De, par, le possessif',
    body: "Dans le groupe nominal, de introduit souvent ce qui subit l'action, et par celui qui la fait : l'annulation du vol par la compagnie. Quand de peut désigner les deux (la critique du ministre), ajoute par ou contre. EN: de often marks what undergoes the action, par the one who does it.",
    examples: [
      { itemId: E(1532), note: 'de subit, par agit' },
      { itemId: E(1530), note: 'de : celui qui décide' },
      { itemId: E(1533), note: 'de : ambigu' },
    ],
  },

  titre: {
    term: 'le titre',
    title: 'Titres, ordres du jour, comptes rendus',
    body: "Un titre de presse ou un point d'ordre du jour commence par un nom d'action, sans article ni verbe conjugué : hausse des loyers à Lyon. Un compte rendu liste les points en noms et garde souvent un verbe pour les décisions. EN: Headlines and agenda points start with an action noun.",
    examples: [
      { itemId: E(1544), note: 'un titre de presse' },
      { itemId: E(1549), note: 'un point de réunion' },
      { itemId: E(1553), note: 'une décision, avec un verbe' },
    ],
  },

  chaine: {
    term: 'la chaîne',
    title: 'Trop de noms à la suite',
    body: "La chaîne, c'est de la... de la... de la... : chaque nom en ajoute un autre, et le lecteur doit tout déplier lui-même. Au-delà de deux noms enchaînés, rends-en un au verbe. EN: Past two nouns chained with de, turn one back into a verb.",
    examples: [
      { itemId: E(1564), note: 'quatre noms enchaînés' },
      { itemId: E(1565), note: 'la même idée, dépliée' },
      { itemId: 'fr.b2.universite.1125', note: 'la chaîne de la leçon 22 du B2' },
    ],
  },

  deplier: {
    term: 'dénominaliser',
    title: 'Rendre le nom au verbe',
    body: "Dénominaliser, c'est déplier : procéder à la vérification redevient vérifier, en cas de non-présentation redevient si vous ne montrez pas. On le fait pour l'oral, pour une consigne, ou quand la phrase est trop lourde. EN: Unfolding a noun back into a verb, for the ear or for clarity.",
    examples: [
      { itemId: E(1559), note: 'le verbe fort' },
      { itemId: E(1563), note: 'une consigne pour l’oreille' },
      { itemId: E(1571), note: 'une annonce à la radio' },
    ],
  },
};
