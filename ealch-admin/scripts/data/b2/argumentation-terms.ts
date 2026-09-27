// b2.23.l1 « Argumenter »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The two 13-character labels
// (« la concession », « la conclusion ») never share a section, so the widest
// trio used is « la concession » + « l’objection » + « l’argument » = 34.
//
// B2 LANGUAGE RULE: the body is natural B2 French, addressed as « tu », then
// ONE English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, CL } from './argumentation-corpus.ts';

export const ARGUMENTATION_TERMS: Record<string, LessonTerm> = {
  these: {
    term: 'la thèse',
    title: 'La position que tu défends',
    body: "La thèse, c'est ta réponse à la question posée, en une phrase. Elle prend parti, et quelqu'un de raisonnable pourrait la contester : un constat ou le simple rappel du sujet n'en est pas une. EN: The thesis is your one-sentence answer to the question: it takes a side that a reasonable person could dispute.",
    examples: [
      { itemId: E(1617), note: 'une thèse nette, avec une condition' },
      { itemId: E(1633), note: 'la thèse de ta mission' },
      { itemId: E(1618), note: 'un constat : personne ne peut le contester' },
    ],
  },

  argument: {
    term: 'l’argument',
    title: 'Une raison, pas un cri',
    body: "Un argument dit pourquoi ta thèse est juste. Il s'annonce, il s'explique, puis un exemple l'illustre. Répéter ton avis plus fort n'en fait pas un argument. EN: An argument says why your thesis holds: stated, explained, then illustrated. Saying your opinion louder is not an argument.",
    examples: [
      { itemId: E(1602), note: 'un avis et sa raison' },
      { itemId: E(1660), note: 'un argument annoncé' },
      { itemId: E(1601), note: 'plus fort, pas plus convaincant' },
    ],
  },

  exemple: {
    term: 'l’exemple',
    title: 'Ce qui rend l’argument visible',
    body: "L'exemple montre ton argument dans la réalité : un cas connu, un fait qu'on peut vérifier, une observation présentée comme telle. Il illustre, il ne remplace pas l'explication. Une anecdote isolée amuse, elle ne prouve rien. EN: An example shows the argument at work; it illustrates the explanation and never replaces it.",
    examples: [
      { itemId: E(1663), note: 'un fait vérifiable' },
      { itemId: E(1670), note: 'prenons l’exemple de' },
      { itemId: E(1665), note: 'une anecdote, pas une preuve' },
    ],
  },

  opinion: {
    term: 'l’opinion',
    title: 'Les verbes de l’opinion et leur mode',
    body: "Quand tu affirmes (je pense que, il est évident que, force est de constater que), l'indicatif suit. Quand tu doutes, nies ou envisages une possibilité (je doute que, je ne pense pas que, il est possible que), c'est le subjonctif. EN: Asserting takes the indicative; doubting, denying or allowing a possibility takes the subjunctive.",
    examples: [
      { itemId: E(1634), note: 'une certitude : indicatif' },
      { itemId: E(1637), note: 'une opinion niée : subjonctif' },
      { itemId: E(1641), note: 'il semble que : subjonctif' },
    ],
  },

  nuance: {
    term: 'la nuance',
    title: 'Dire exactement ce que tu peux défendre',
    body: "Nuancer, ce n'est pas hésiter : c'est mesurer. Tu remplaces tous par beaucoup, toujours par souvent, c'est prouvé par plusieurs études suggèrent. Un lecteur croit davantage celui qui ne dit que ce qu'il peut défendre. EN: Nuance is not hesitation but measurement: say only what you can defend, and the reader believes you more.",
    examples: [
      { itemId: E(1675), note: 'une partie des adolescents' },
      { itemId: E(1679), note: 'dans une certaine mesure' },
      { itemId: E(1681), note: 'tous : une généralisation' },
    ],
  },

  objection: {
    term: 'l’objection',
    title: 'L’argument de ceux qui pensent le contraire',
    body: "L'objection, c'est la meilleure raison de ton adversaire. Tu l'énonces fidèlement, sans la déformer, puis tu y réponds : c'est la réfutation. Un texte qui l'ignore semble ne pas l'avoir vue. EN: The objection is your opponent's best reason: state it fairly, then answer it. A text that ignores it looks as if it never saw it.",
    examples: [
      { itemId: E(1697), note: 'on pourrait objecter que' },
      { itemId: E(1700), note: 'la réponse : cependant' },
      { itemId: E(1709), note: 'une objection déformée' },
    ],
  },

  concession: {
    term: 'la concession',
    title: 'Donner raison sur un point, pas sur tout',
    body: `Concéder, c'est reconnaître ce qui est vrai chez l'autre (certes, il est vrai que, je ne nie pas que), puis montrer pourquoi ta position tient quand même. Une concession annulée dans la même phrase ne compte pas. EN: To concede is to grant a true point, then show why your position still holds.`,
    examples: [
      { itemId: E(1699), note: 'il est vrai que' },
      { itemId: CL(1573), note: 'certes... mais, vu au B1' },
      { itemId: E(1710), note: 'une concession balayée' },
    ],
  },

  plans: {
    term: 'les plans',
    title: 'Dialectique ou thématique',
    body: "La question choisit le plan. « Pour ou contre ? » appelle un plan dialectique : les raisons d'un côté, puis de l'autre, puis ta position. « Quels effets ? » appelle un plan thématique : un thème par partie. EN: The question picks the plan: for or against calls for a dialectical plan, which effects for a thematic one.",
    examples: [
      { itemId: E(1742), note: 'la règle en une phrase' },
      { itemId: E(1736), note: 'annoncer la première partie' },
      { itemId: E(1735), note: 'une transition' },
    ],
  },

  sophisme: {
    term: 'le sophisme',
    title: 'Un raisonnement qui a l’air solide',
    body: "Un sophisme ressemble à un argument et n'en est pas un : la généralisation, la fausse cause, l'homme de paille, l'attaque personnelle, le faux dilemme, la pente glissante. Il peut gagner un débat oral, il perd des points à l'écrit. EN: A fallacy looks like an argument but is not one; it may win a shouting match and it loses marks on paper.",
    examples: [
      { itemId: E(1758), note: 'une généralisation' },
      { itemId: E(1759), note: 'une fausse cause' },
      { itemId: E(1761), note: 'un faux dilemme' },
    ],
  },

  conclusion: {
    term: 'la conclusion',
    title: 'La réponse à la question',
    body: "La conclusion fait le bilan, répond clairement à la question posée, puis peut ouvrir sur une question plus large. Elle n'ajoute jamais un nouvel argument, et « chacun son avis » n'est pas une réponse. EN: The conclusion sums up, answers the question, then may open onto a wider one; never a new argument.",
    examples: [
      { itemId: E(1719), note: 'une réponse nette' },
      { itemId: E(1720), note: 'une ouverture' },
      { itemId: E(1721), note: 'une fin qui ne répond pas' },
    ],
  },
};

