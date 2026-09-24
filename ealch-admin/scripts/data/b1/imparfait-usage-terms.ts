// b1.02.l1 « L'imparfait : les emplois » — the lesson glossary. REBUILD v2.
//
// Defined once, surfaced wherever used. THREE CHIPS PER SECTION AT MOST and a
// 37-character budget for the chip row, so every `term` is short. Every key
// here is surfaced by at least one mission (an unsurfaced term is a definition
// nobody can reach).
//
// B1 LANGUAGE: `title` and `body` are simple French, tu, and every `body` ends
// with a one-line English gloss starting « EN: ». LessonTerm has no `en` field,
// so the gloss lives inside the body.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, B } from './imparfait-usage-corpus.ts';

export const IMPARFAIT_USAGE_TERMS: Record<string, LessonTerm> = {
  habitude: {
    term: "l'habitude",
    title: 'Une chose qui revenait',
    body: "Une habitude, c'est une action qui revenait, sans nombre précis. Tu ne comptes pas les fois : tu regardes la période. Alors, imparfait. EN: A habit came back again and again with no count, so you look at the period and use the imparfait.",
    examples: [
      { itemId: E(1501), note: 'chaque samedi, tout l’hiver' },
      { itemId: E(118), note: 'chaque samedi, une personne' },
      { itemId: 'fr.b1.routines.075', note: 'toujours, quand j’étais enfant' },
    ],
  },

  indice: {
    term: 'un indice',
    title: 'Un mot aide, il ne décide pas',
    body: "Tous les samedis, d'habitude, souvent : ces mots annoncent souvent l'imparfait. Mais au présent ils marchent aussi, et si tu comptes les fois, tu passes au passé composé. Le sens décide. EN: These words are clues, not rules; the meaning decides the tense.",
    examples: [
      { itemId: E(136), note: 'chaque été, mais c’est encore vrai' },
      { itemId: E(138), note: 'un été fini, et on compte' },
      { itemId: 'fr.a2.routines.004', note: 'd’habitude, au présent' },
    ],
  },

  avant: {
    term: 'avant / maintenant',
    title: 'Deux époques',
    body: "Avant, autrefois, à l'époque ouvrent le passé : imparfait. Maintenant, aujourd'hui ramènent le présent. Attention : avant de + verbe, c'est autre chose. EN: avant, autrefois and à l'époque open the past; maintenant brings the present back. avant de + verb is different.",
    examples: [
      { itemId: E(141), note: 'les deux dans une phrase' },
      { itemId: E(151), note: 'avant de : pas une époque' },
      { itemId: 'fr.b1.routines.074', note: 'autrefois, puis maintenant' },
    ],
  },

  etat: {
    term: 'un état',
    title: 'Ce que tu étais, ce que tu sentais',
    body: "Un état, c'est comment tu étais, ce que tu sentais, ce que tu savais : fatigué, avoir peur, savoir, connaître, vouloir. Ça dure, sans début ni fin précis. EN: A state is how you were, felt or knew; it lasts, with no clear start or end.",
    examples: [
      { itemId: E(159), note: 'le corps' },
      { itemId: E(160), note: 'un sentiment, avec avoir' },
      { itemId: E(1506), note: 'connaître : un état, pas une action' },
    ],
  },

  decor: {
    term: 'le décor',
    title: 'Comment c’était',
    body: "Le décor, c'est ce que tu vois quand tu te souviens : le lieu, les gens, les objets. Rien ne commence, rien ne finit. il y avait et c'était sont les deux outils. EN: The scenery is what you see when you remember; nothing starts or ends there.",
    examples: [
      { itemId: E(800), note: 'un lieu' },
      { itemId: E(801), note: 'il y avait' },
      { itemId: E(819), note: 'c’était, deux fois' },
    ],
  },

  meteo: {
    term: 'la météo',
    title: 'Le temps qu’il faisait',
    body: "Il faisait froid, il neigeait, il pleuvait : la météo autour du souvenir est toujours à l'imparfait, parce qu'elle dure et qu'elle ne compte pas. EN: Weather around a memory lasts and is not counted, so it takes the imparfait.",
    examples: [
      { itemId: B(515), note: 'il faisait froid' },
      { itemId: E(820), note: 'depuis le matin' },
      { itemId: E(823), note: 'un hiver au Québec' },
    ],
  },

  heureAge: {
    term: "l'heure et l'âge",
    title: 'Il était minuit, j’avais douze ans',
    body: "L'heure au passé : il était. L'âge au passé : avoir, jamais être. En anglais, I was twelve ; en français, tu AS un âge. EN: Clock time takes il était; age takes avoir, never être.",
    examples: [
      { itemId: E(829), note: 'l’heure' },
      { itemId: E(1505), note: 'l’âge, avec avoir' },
      { itemId: E(834), note: 'comparer deux âges' },
    ],
  },

  enCours: {
    term: 'en cours',
    title: 'Ce qui se passait à ce moment-là',
    body: "Une action qui durait à un moment du passé : je lisais, elle attendait. En anglais, I was reading. Quand une autre action arrive et coupe, c'est la leçon suivante. EN: An action under way; when something interrupts it, that is the next lesson.",
    examples: [
      { itemId: E(1507), note: 'ce qui durait' },
      { itemId: E(845), note: 'elle attendait' },
      { itemId: E(850), note: 'et là, quelque chose arrive' },
    ],
  },

  poli: {
    term: "l'imparfait poli",
    title: 'Un pas en arrière',
    body: "Je voulais vous demander : la forme est passée, le sens est présent. Tu demandes maintenant. L'imparfait fait un petit pas en arrière, et la phrase devient plus douce. EN: Past in form, present in meaning; the step back makes the request softer.",
    examples: [
      { itemId: E(1508), note: 'une demande' },
      { itemId: E(853), note: 'à la porte' },
      { itemId: E(854), note: 'dans un courriel' },
    ],
  },

  would: {
    term: 'would, used to',
    title: 'Pas mot à mot',
    body: "Pour une habitude, would et used to deviennent l'imparfait : pas de conditionnel, pas de verbe spécial. Attention : un would poli ou un would avec si, c'est autre chose. EN: A habitual would or used to becomes the imparfait; a polite or conditional would does not.",
    examples: [
      { itemId: E(872), note: 'I would play' },
      { itemId: E(875), note: 'I used to smoke' },
      { itemId: E(885), note: 'et là, c’est un vrai conditionnel' },
    ],
  },

  quebec: {
    term: 'mots du Québec',
    title: 'Le français d’ici',
    body: "Un dépanneur, c'est le petit magasin du coin. Le souper, c'est le repas du soir. Déneiger, c'est enlever la neige. Ce sont des mots normaux au Québec. EN: dépanneur = corner store, souper = evening meal, déneiger = clear the snow.",
    examples: [
      { itemId: E(133), note: 'le dépanneur' },
      { itemId: E(844), note: 'le souper' },
      { itemId: E(124), note: 'l’autobus' },
    ],
  },
};
