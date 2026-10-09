// c2.03.l1 « Cent expressions idiomatiques avancées » — the lesson glossary.
// DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 6 to 17 characters; no section in the lesson
// combines more than two of these terms, so every row stays inside budget
// (checked by hand per section, as the C1/C2 playbook requires — there is
// no validator for the reverse of "named key has no definition").
//
// Every term defined here is surfaced by at least one section’s `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson; there is no
// validator for an unsurfaced term).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './cent-idiomes-corpus.ts';

export const CENT_IDIOMES_TERMS: Record<string, LessonTerm> = {
  /** Act 1 and throughout: the picture an idiom draws, past b1.27's method. */
  image: {
    term: "l’image",
    title: "Ce qu’une expression dessine, avant son sens",
    body: "Tenir les rênes, baisser pavillon, brûler ses vaisseaux : chaque expression de cette leçon part d’une image précise (un cheval, un drapeau, un bateau) que le sens figuré réutilise sans jamais la nommer directement. Repérer l’image aide à retenir l’expression, mais ne suffit jamais à choisir si elle convient ici. EN: every idiom in this lesson starts from a precise picture that the figurative sense reuses without ever naming it outright; spotting the picture helps you remember the idiom, but never tells you on its own whether it belongs here.",
    examples: [
      { itemId: E(1811), note: 'les rênes : l’image du cheval dirigé' },
      { itemId: E(1932), note: 'les vaisseaux brûlés : plus de retour possible' },
      { itemId: E(1945), note: 'la tour d’ivoire : un isolement protégé' },
    ],
  },

  /** Act 1 and every act check: the NEW C2 axis, past the picture. */
  registreFige: {
    term: 'le registre figé',
    title: "Le registre qu’une expression porte, pas seulement son image",
    body: "« Il a mis les pieds dans le plat » et « il s’est couvert de ridicule » disent presque le même fait, mais seule la seconde tient dans un portrait soigné. Chaque expression de cette leçon porte un registre fixe (soutenu, parfois littéraire) qui doit correspondre au texte où elle est placée, pas seulement à l’idée qu’elle exprime. EN: an idiom’s register is fixed along with its image; it must match the text it is placed in, not only the idea it expresses.",
    examples: [
      { itemId: E(1800), note: 'trop familier pour un portrait soigné' },
      { itemId: E(1801), note: 'le même fait, au registre qui tient' },
    ],
  },

  /** Acts 2-11's trap/piège steps: the near-miss that does not exist. */
  motsFixes: {
    term: 'les mots fixes',
    title: "Une expression figée garde exactement ses mots",
    body: "Une expression figée garde ses mots, seul le verbe se conjugue : « baisser pavillon » n’accepte pas d’article, « être à la merci de » n’accepte pas une double préposition, « garder ses distances » reste toujours au pluriel. Changer un seul mot, même un petit, fait disparaître l’expression. EN: a fixed idiom keeps its exact words, only the verb is conjugated; changing a single word, even a small one, makes the idiom vanish.",
    examples: [
      { itemId: E(1816), note: 'baisser pavillon, sans article' },
      { itemId: E(1947), note: 'garder SES distances, toujours au pluriel' },
    ],
  },

  /** Act 12: the method for the graded task. */
  portrait: {
    term: 'le portrait',
    title: "Un texte qui croise plusieurs familles, une expression par idée",
    body: "Le portrait de Berthier traverse cinq familles d’expressions sans jamais en placer deux dans la même phrase : chaque image a ainsi la place de se faire sentir, et le texte reste un récit, jamais une liste. EN: Berthier’s portrait crosses five idiom families without ever placing two in the same sentence, so each picture has room to land, and the text stays a narrative, never a list.",
    examples: [
      { itemId: E(1960), note: 'cinq familles, une par phrase' },
      { itemId: E(1961), note: 'la règle du portrait' },
    ],
  },

  /** Act 12's task rubric: the idiom-level register judgement, applied. */
  distanceRegistre: {
    term: 'une distance de registre',
    title: "L’écart entre l’expression choisie et le texte qui la reçoit",
    body: "Une expression trop soutenue dans un texte léger sonne pompeuse ; une expression trop familière dans un texte soigné sonne déplacée. La distance de registre est cet écart, et la mission de l’acte 12 le fait juger directement : l’image seule ne suffit jamais. EN: too formal an idiom in a light text sounds pompous; too casual one in a careful text sounds out of place. This gap is what act 12’s task grades directly: the picture alone is never enough.",
    examples: [
      { itemId: E(1801), note: 'le registre qui tient, pour ce texte précis' },
      { itemId: E(1972), note: 'une expression bien choisie vaut mieux que trois mal placées' },
    ],
  },
};
