// c2.13.l1 « Correction et révision » — the lesson glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6,
// checked by hand per section, as the C1 playbook requires.
//
// Every term defined here is surfaced by at least one section's `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './correction-revision-corpus.ts';

export const CORRECTION_TERMS: Record<string, LessonTerm> = {
  /** Act 2: an unmarked tonal shift. */
  registre: {
    term: 'le registre qui glisse',
    title: 'Un ton qui change sans prévenir',
    body: 'Un registre glisse quand une phrase, au milieu d’un texte par ailleurs soigné, sonne soudain plus familière ou, à l’inverse, plus savante que tout le reste. Le test : un lecteur qui n’aurait lu que cette phrase devinerait-il le ton du reste du texte. EN: a register slips when one sentence, inside an otherwise careful text, suddenly sounds more informal or, the other way round, more learned than everything around it. The test: would a reader of that sentence alone guess the rest of the text’s tone.',
    examples: [
      { itemId: E(2607), note: 'une seule phrase suffit à trahir le reste' },
      { itemId: E(2622), note: 'le glissement peut aller dans les deux sens' },
    ],
  },

  /** Act 3: the same idea restated. */
  redondance: {
    term: 'la redondance',
    title: 'La même idée, dite deux fois',
    body: 'La redondance dit une seule idée avec deux phrases, ou avec deux mots qui se recouvrent dans la même phrase. Elle ne se corrige pas en coupant au hasard : on garde la phrase ou le mot qui porte le fait, et on supprime seulement ce qui ne fait que le redire. EN: redundancy says one idea with two sentences, or with two overlapping words in the same sentence. It is not fixed by cutting at random: keep the sentence or word that carries the fact, and remove only what merely restates it.',
    examples: [
      { itemId: E(2636), note: 'le nom du problème' },
      { itemId: E(2637), note: 'comment couper, sans perdre le fait' },
    ],
  },

  /** Act 4: a reference that has drifted. The heaviest recap of c1.05. */
  reference: {
    term: 'la référence qui dérive',
    title: 'Un pronom qui a perdu son nom',
    body: 'Une référence dérive quand un pronom ou un démonstratif pointe vers un nom ambigu, ou vers le nom le plus proche alors que le sens en vise un autre. « Cette dernière » pointe toujours vers le nom le plus proche ; si ce n’est pas le bon, répète le nom ou reconstruis la phrase. EN: a reference drifts when a pronoun or demonstrative points to an ambiguous noun, or to the nearest noun while meaning aims at another. “Cette dernière” always points to the nearest noun; if that is the wrong one, repeat the noun or rebuild the sentence.',
    examples: [
      { itemId: E(2649), note: 'le nom de ce piège' },
      { itemId: E(2650), note: 'les quatre réparations possibles, rappelées de la leçon 5 du C1' },
      { itemId: E(2651), note: 'la règle de « cette dernière »' },
    ],
  },

  /** Act 5: a connector that does not deliver. */
  transition: {
    term: 'la transition qui ne tient pas',
    title: 'Un connecteur qui ne dit pas vrai',
    body: 'Un connecteur fait une promesse : « donc » promet une cause, « cependant » promet une opposition, « par conséquent » promet une suite logique précise. Une transition qui ne tient pas est un connecteur dont la phrase ne tient pas la promesse. EN: a connector makes a promise: “donc” promises a cause, “cependant” promises an opposition, “par conséquent” promises a precise logical consequence. A transition that does not hold is a connector whose sentence breaks that promise.',
    examples: [
      { itemId: E(2662), note: 'le nom de ce piège' },
      { itemId: E(2663), note: 'la promesse de chaque connecteur' },
    ],
  },

  /** Acts 6 to 8: the method that holds everything together. */
  quatreQuestions: {
    term: 'les quatre questions',
    title: 'Le registre, la redondance, la référence, la transition',
    body: 'Une révision complète pose les quatre questions sur tout le texte, y compris sur ce qu’on vient déjà de corriger : une faute réparée ailleurs n’empêche pas une autre de rester, intacte, dans la même phrase. EN: a complete revision asks all four questions on the whole text, including on what has just been corrected: a fault repaired elsewhere does not stop another one from staying, untouched, in the very same sentence.',
    examples: [
      { itemId: E(2681), note: 'le nom de la méthode' },
      { itemId: E(2673), note: 'pourquoi une seule faute à la fois ne suffit jamais' },
    ],
  },
};
