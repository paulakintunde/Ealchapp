// b1.29.l1 « Les expressions de couleur » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6 (labels plus two per gap). The labels here are 8 to 13
// characters; the sections pick trios that fit, asserted in the scratch
// check together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './expressions-couleurs-corpus.ts';

export const EXPRESSIONS_COULEURS_TERMS: Record<string, LessonTerm> = {
  /** The one metaphor. */
  palette: {
    term: 'la palette',
    title: 'Chaque langue a ses couleurs',
    body: "Une palette, c'est les couleurs d'un peintre. Chaque langue a la sienne : l'anglais est triste en bleu, le français en noir. Pars du sens, puis cherche la couleur française. EN: Each language paints feelings with its own colours; start from the meaning.",
    examples: [
      { itemId: E(1404), note: 'triste : noir en français, blue en anglais' },
      { itemId: E(1405), note: 'la peur : bleue en français' },
    ],
  },

  /** The failure act 1 opens on. */
  calque: {
    term: 'le calque',
    title: "Copier l'anglais mot à mot",
    body: "Tu prends l'image anglaise et tu la traduis. Les mots sont français, mais personne ne dit la phrase : je me sens bleu, un vert pour un débutant. EN: A calque carries the English picture into French words nobody says.",
    examples: [
      { itemId: E(1404), note: 'pas « je me sens bleu »' },
      { itemId: E(1570), note: 'pas « un vert »' },
    ],
  },

  /** The picture. */
  propre: {
    term: 'sens propre',
    title: 'Ce que les mots montrent',
    body: "Le sens propre, c'est l'image, mot à mot : une nuit blanche, une peur bleue, un billet vert. Elle aide à retenir l'expression, mais elle ne donne pas le sens. EN: The literal sense is the picture; it helps you remember, it does not give the meaning.",
    examples: [
      { itemId: E(1403), note: 'une nuit blanche : la nuit reste vide, sans sommeil' },
      { itemId: E(1476), note: 'le noir : ce qui est caché' },
    ],
  },

  /** The meaning. */
  figure: {
    term: 'sens figuré',
    title: 'Ce que la phrase veut dire',
    body: "Le sens figuré, c'est ce que tout le monde comprend. Tu le trouves dans la situation : un bleu au travail, c'est un débutant, pas une couleur. EN: The figurative meaning is what everyone understands; you find it in the situation.",
    examples: [
      { itemId: E(1570), note: 'un débutant' },
      { itemId: E(1497), note: 'plus un mot ne vient' },
    ],
  },

  /** The English side of the card. */
  equivalent: {
    term: "l'équivalent",
    title: "Ce qu'on dit en anglais",
    body: "L'équivalent, c'est l'expression anglaise qui dit la même chose. Parfois, elle a la même couleur (voir rouge, see red). Parfois une autre (un bleu, a greenhorn). Parfois aucune (une nuit blanche, a sleepless night). EN: The English equivalent may share the colour, change it or have none.",
    examples: [
      { itemId: E(1406), note: 'la même couleur' },
      { itemId: E(1407), note: 'pas de couleur en anglais' },
    ],
  },

  /** The block that does not change. */
  bloc: {
    term: 'le bloc figé',
    title: 'Une expression ne se démonte pas',
    body: "Dans une expression, les mots sont fixés. Tu ne changes pas le noir en gris, ni la nuit en jour. Seuls le verbe et l'accord bougent. EN: An idiom is a fixed block: only the verb and the agreement move.",
    examples: [
      { itemId: E(1400), note: 'toujours du noir' },
      { itemId: E(1495), note: 'de but en blanc, dans cet ordre' },
    ],
  },

  /** The grammar point, a1.13 and a2.03 applied. */
  accord: {
    term: "l'accord",
    title: "La couleur s'accorde, sauf...",
    body: "Dans une expression, la couleur-adjectif s'accorde comme d'habitude : une peur bleue, elles étaient rouges de colère. Elle ne bouge pas quand c'est un nom (dans le rouge, en rose) ou après voir (elles ont vu rouge). EN: A colour adjective agrees; a colour noun, or rouge after voir, does not.",
    examples: [
      { itemId: E(1437), note: 'rouges : avec les joueurs' },
      { itemId: E(1442), note: 'rouge : après voir, pas d’accord' },
    ],
  },

  /** Familier or courant, per card. */
  registre: {
    term: 'le registre',
    title: 'Entre amis, ou partout',
    body: "Chaque expression a un registre. Familier : entre amis (rouge comme une tomate, être gris). Courant : partout, même dans un courriel au travail (le feu vert, carte blanche). EN: Familier is for friends; courant works everywhere.",
    examples: [
      { itemId: E(1445), note: 'familier' },
      { itemId: E(1535), note: 'courant, même au bureau' },
    ],
  },

  /** The expression that looks like English and is not. */
  fauxami: {
    term: 'le faux ami',
    title: 'Elle ressemble à l’anglais, mais...',
    body: "Un faux ami ressemble à une expression anglaise et veut dire autre chose. Rire jaune, ce n'est pas avoir peur. Un mariage blanc, ce n'est pas un mariage en blanc. EN: A false friend looks like English and means something else.",
    examples: [
      { itemId: E(1453), note: 'un rire forcé, pas la peur' },
      { itemId: E(1501), note: 'un faux mariage' },
    ],
  },

  /** Québec, France. */
  variante: {
    term: 'la variante',
    title: 'Une expression a une adresse',
    body: "Certaines expressions changent selon le pays. Au Québec, on a le pouce vert ; en France, la main verte. Un bleu, pour un débutant, s'entend surtout en France. EN: Some idioms belong to one place; the card says where.",
    examples: [
      { itemId: E(1576), note: 'le Québec' },
      { itemId: E(1575), note: 'la France' },
    ],
  },

  /** How many in a short text. */
  dosage: {
    term: 'le bon dosage',
    title: 'Pas un arc-en-ciel',
    body: "Dans un message, cinq ou six expressions, chacune à un moment différent. Dix, et le message sonne faux. EN: Five or six idioms, each in its own moment; ten sound forced.",
    examples: [
      { itemId: E(1588), note: 'la règle' },
      { itemId: E(1586), note: 'une expression, un moment' },
    ],
  },
};
