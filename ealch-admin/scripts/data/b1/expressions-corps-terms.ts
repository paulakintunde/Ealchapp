// b1.27.l1 « Les expressions du corps » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, so the widest trio
// (« le bon dosage » + « l'équivalent » + « le bloc figé ») is 37. Asserted
// in the scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './expressions-corps-corpus.ts';

export const EXPRESSIONS_CORPS_TERMS: Record<string, LessonTerm> = {
  /** The failure act 1 opens on. */
  motamot: {
    term: 'le mot à mot',
    title: 'Traduire chaque mot, un par un',
    body: "Tu prends une expression anglaise et tu traduis chaque mot. Les mots sont français, mais l'image est anglaise, et personne ne dit la phrase. An arm and a leg ne devient pas un bras et une jambe. EN: Translating an idiom word by word gives French words and an English picture.",
    examples: [
      { itemId: E(1004), note: "pas « un bras et une jambe »" },
      { itemId: E(1005), note: 'pas « donner une main »' },
    ],
  },

  /** The picture. */
  propre: {
    term: 'sens propre',
    title: "Ce que les mots montrent vraiment",
    body: "Le sens propre, c'est l'image, mot à mot : des yeux qui coûtent, un poil dans une main. Il aide à retenir l'expression, mais il ne donne pas le sens. EN: The literal sense is the picture; it helps you remember, it does not give the meaning.",
    examples: [
      { itemId: E(1042), note: 'un poil dans la main : une main qui ne travaille jamais' },
      { itemId: E(1001), note: 'des yeux, pour dire très cher' },
    ],
  },

  /** The meaning. */
  figure: {
    term: 'sens figuré',
    title: 'Ce que la phrase veut dire',
    body: "Le sens figuré, c'est ce que tout le monde comprend quand il entend l'expression. Tu le trouves dans la situation, pas dans les mots. EN: The figurative meaning is what everyone understands; you find it in the situation.",
    examples: [
      { itemId: E(1047), note: 'il ne travaille pas' },
      { itemId: E(1086), note: 'on voit l’erreur tout de suite' },
    ],
  },

  /** The block that does not change. */
  bloc: {
    term: 'le bloc figé',
    title: "Une expression ne se démonte pas",
    body: "Dans une expression, les mots sont fixés. Tu ne changes pas les yeux en oreilles, ni la main en bras. Tu ne dis pas coûter les oreilles de la tête. EN: An idiom is a fixed block: you do not swap its words.",
    examples: [
      { itemId: E(1001), note: 'toujours les yeux, toujours la tête' },
      { itemId: E(1057), note: 'les pieds, et jamais la main' },
    ],
  },

  /** What moves inside the block. */
  bouge: {
    term: 'ce qui bouge',
    title: 'Le verbe et le possessif suivent la personne',
    body: "Deux choses bougent dans le bloc : le verbe, qui se conjugue, et le possessif, qui suit la personne. Je prends mon courage, elle prend son courage. EN: Only the verb and the possessive change with the person.",
    examples: [
      { itemId: E(1117), note: 'mon courage, parce que je' },
      { itemId: E(1066), note: 'ta langue, parce que tu' },
      { itemId: E(1020), note: 'le verbe au passé composé, les coudes ne bougent pas' },
    ],
  },

  /** Register. */
  registre: {
    term: 'le registre',
    title: 'Familier ou courant',
    body: "Familier : avec tes amis, ta famille, tes collègues proches. Courant : partout, même dans un courriel de travail. Chaque carte de cette leçon te dit le registre. EN: Informal is for friends; courant works everywhere, even in a work email.",
    examples: [
      { itemId: E(1032), note: 'familier : entre amis' },
      { itemId: E(1041), note: 'courant : la même idée, pour une lettre' },
    ],
  },

  /** The English equivalent. */
  equivalent: {
    term: "l'équivalent",
    title: "La même idée en anglais",
    body: "Souvent, l'anglais dit la même chose avec une autre partie du corps : les yeux en français, un bras et une jambe en anglais. Parfois, c'est la même image. Apprends les deux ensemble. EN: The English equivalent often uses another body part; sometimes the same one.",
    examples: [
      { itemId: E(1001), note: 'an arm and a leg' },
      { itemId: E(1058), note: 'all thumbs, pas two left hands' },
      { itemId: E(1003), note: 'turn your back : la même image' },
    ],
  },

  /** Regional variants. */
  variante: {
    term: 'la variante',
    title: 'Une expression qui a une adresse',
    body: "Certaines expressions vivent dans un seul pays. La graisse de bine est québécoise : en France, personne ne la comprend. Coûter un bras vient surtout du Québec. Dis-les là où on les dit. EN: Some idioms belong to one place; use them where they are said.",
    examples: [
      { itemId: E(1083), note: 'au Québec seulement' },
      { itemId: E(1097), note: 'au Québec d’abord' },
    ],
  },

  /** The false friend. */
  fauxami: {
    term: 'le faux ami',
    title: "L'image qui ressemble à l'anglais",
    body: "Certaines images ont l'air anglaises et veulent dire autre chose. Avoir le cœur gros, ce n'est pas big-hearted : c'est être triste. Avoir le bras long, ce n'est pas avoir de longs bras. EN: Some pictures look English and mean something else.",
    examples: [
      { itemId: E(1172), note: 'triste, pas généreux' },
      { itemId: E(1102), note: 'des relations, pas des bras' },
    ],
  },

  /** The task's genre. */
  anecdote: {
    term: "l'anecdote",
    title: 'Une petite histoire vraie',
    body: "Une anecdote raconte un moment court : une journée, une soirée, un repas. Le décor à l'imparfait, les actions au passé composé, et une fin. C'est là que les expressions sonnent le plus naturel. EN: An anecdote is a short true story; idioms sound most natural there.",
    examples: [
      { itemId: E(1173), note: "le décor, puis l'action" },
      { itemId: E(1175), note: 'la gaffe, au passé composé' },
    ],
  },

  /** How many to use. */
  dosage: {
    term: 'le bon dosage',
    title: "Pas trop d'expressions",
    body: "Une expression bien placée fait sourire. Dix dans un message, et on dirait une liste. Mets-en cinq ou six, chacune là où elle aide ton histoire. EN: Five or six well-placed idioms, not ten.",
    examples: [
      { itemId: E(1177), note: 'la règle du dosage' },
      { itemId: E(1174), note: 'une expression, au bon moment' },
    ],
  },
};
