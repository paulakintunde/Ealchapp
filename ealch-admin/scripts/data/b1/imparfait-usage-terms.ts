// b1.02.l1 « L'imparfait : les emplois » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used. THREE CHIPS PER SECTION AT MOST and a
// 37-character budget for the chip row, so every `term` is short. Every key
// here is surfaced by at least one section (the lesson header lists which).
//
// B1 LANGUAGE RULE: `title` and `body` are simple French, and every `body`
// ends with a one-line English gloss starting « EN: ». LessonTerm has no `en`
// field, so the gloss lives inside the body.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './imparfait-usage-corpus.ts';

export const IMPARFAIT_USAGE_TERMS: Record<string, LessonTerm> = {
  /** The Owns, as a chip: look, do not count. */
  habitude: {
    term: "l'habitude",
    title: 'Une chose qui revenait',
    body: "Une habitude, c'est une action qui revenait souvent, sans nombre précis. On ne compte pas les fois : on regarde la période. Alors, imparfait. EN: A habit came back again and again with no count, so you look at the period and use the imparfait.",
    examples: [
      { itemId: E(101), note: 'chaque samedi, tout l\'hiver' },
      { itemId: E(103), note: 'chaque été, pendant des années' },
      { itemId: 'fr.b1.routines.075', note: 'toujours, quand j\'étais enfant' },
    ],
  },

  decor: {
    term: 'le décor',
    title: 'Comment c\'était',
    body: "Le décor, c'est tout ce qu'on voit quand on se souvient : le lieu, la météo, l'heure, l'âge. Rien ne commence, rien ne finit. EN: The scenery is what you see when you remember: place, weather, time, age. Nothing starts or ends.",
    examples: [
      { itemId: E(114), note: 'un lieu' },
      { itemId: E(116), note: 'la météo' },
      { itemId: E(120), note: "l'âge, avec avoir" },
    ],
  },

  etat: {
    term: 'un état',
    title: 'Ce qu\'on était, ce qu\'on sentait',
    body: "Un état, c'est comment on était ou ce qu'on sentait : fatigué, avoir peur, savoir, connaître. Ça dure, sans début ni fin précis. EN: A state is how you were or what you felt; it lasts, with no clear start or end.",
    examples: [
      { itemId: E(108), note: 'le corps' },
      { itemId: E(109), note: 'un sentiment' },
      { itemId: E(111), note: 'connaître, un état et pas une action' },
    ],
  },

  indice: {
    term: 'un indice',
    title: 'Un mot aide, il ne décide pas',
    body: "Tous les samedis, d'habitude, souvent : ces mots aident. Mais au présent, ils marchent aussi. Et si on compte les fois, on passe au passé composé. Le sens décide. EN: These words are clues, not rules; the meaning decides the tense.",
    examples: [
      { itemId: 'fr.a2.routines.004', note: "d'habitude, au présent" },
      { itemId: E(133), note: 'chaque été, encore vrai' },
      { itemId: E(134), note: 'un été précis, compté' },
    ],
  },

  avant: {
    term: 'avant / maintenant',
    title: 'Deux époques',
    body: "Avant, autrefois, à l'époque ouvrent le passé : imparfait. Maintenant ferme la porte : présent. Attention, avant de + verbe, c'est autre chose. EN: avant, autrefois and à l'époque open the past; maintenant brings the present back. avant de + verb is different.",
    examples: [
      { itemId: E(105), note: 'les deux dans une phrase' },
      { itemId: 'fr.b1.routines.074', note: 'autrefois, puis maintenant' },
      { itemId: E(135), note: 'avant de : pas une époque' },
    ],
  },

  poli: {
    term: "l'imparfait poli",
    title: 'Un pas en arrière',
    body: "Je voulais vous demander : la forme est passée, le sens est présent. Tu demandes maintenant. L'imparfait fait juste un petit pas en arrière, et ça rend la phrase plus douce. EN: Past in form, present in meaning; the step back makes the request softer.",
    examples: [
      { itemId: E(124), note: 'une demande' },
      { itemId: E(125), note: 'à la porte' },
      { itemId: E(126), note: 'dans un courriel' },
    ],
  },

  would: {
    term: 'would, used to',
    title: 'Pas mot à mot',
    body: "Would et used to disent souvent une habitude. En français, pas de conditionnel et pas de verbe spécial : l'imparfait suffit. Attention, would peut aussi être poli. EN: For a habit, would and used to both become the imparfait; a polite would is different.",
    examples: [
      { itemId: E(128), note: 'I would play' },
      { itemId: E(129), note: 'I used to smoke' },
      { itemId: E(130), note: "avoir l'habitude de, possible aussi" },
    ],
  },

  /** Paul 2026-09-22: Québec words get a glossary entry. */
  quebec: {
    term: 'mots du Québec',
    title: 'Le français du Québec',
    body: "Un dépanneur, c'est le petit magasin du coin. Déneiger, c'est enlever la neige devant la maison. Une patinoire, c'est un endroit pour patiner. Ce sont des mots normaux au Québec. EN: dépanneur = corner store, déneiger = clear snow, patinoire = skating rink.",
    examples: [
      { itemId: E(104), note: 'le dépanneur' },
      { itemId: E(101), note: 'patiner, la patinoire' },
    ],
  },
};
