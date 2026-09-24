// b1.07.l1 « Le futur : quand, dès que, et les conditions réelles » — the
// lesson glossary. DRAFT v1, to RICH-LESSON-STANDARD.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 12 characters, so the widest possible
// trio (« la charnière » + « la certitude » + « la condition ») is 36.
// Asserted in the scratch check, together with « every term is surfaced
// somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './futur-usage-corpus.ts';

export const FUTUR_USAGE_TERMS: Record<string, LessonTerm> = {
  /** The whole family of hinge words (acts 2 and 3). */
  charniere: {
    term: 'la charnière',
    title: 'Le mot qui tient les deux moitiés',
    body: "quand, lorsque, dès que, aussitôt que, tant que, pendant que, une fois que : ce sont des charnières. Elles posent un moment, et les deux moitiés de la phrase tournent autour. EN: The hinge words that hold two halves of a sentence around one moment.",
    examples: [
      { itemId: E(407), note: 'quand : le moment le plus simple' },
      { itemId: E(432), note: 'dès que : l’instant exact' },
      { itemId: E(442), note: 'une fois que : une étape franchie' },
    ],
  },

  /** The rule an English speaker gets wrong every time (act 2). */
  deuxfois: {
    term: 'deux futurs',
    title: 'Le futur des deux côtés',
    body: "En anglais, la moitié qui commence par when reste au présent. En français, non : si le moment est à venir, les deux verbes vont au futur. EN: English keeps the when clause in the present; French puts both verbs in the future.",
    examples: [
      { itemId: E(400), note: 'aurai et appellerai, tous les deux au futur' },
      { itemId: E(415), note: 'arriverai et enverrai' },
      { itemId: E(429), note: 'ce que fait l’anglais, et pourquoi ça trompe' },
    ],
  },

  /** dès que and aussitôt que (act 3). */
  seuil: {
    term: 'le seuil',
    title: 'L’instant où ça commence',
    body: "dès que et aussitôt que donnent le seuil : la seconde exacte où la chose commence, pas une minute plus tard. quand est plus large. EN: dès que and aussitôt que give the exact instant something begins.",
    examples: [
      { itemId: E(433), note: 'pas une minute de plus' },
      { itemId: E(434), note: 'aussitôt que : le même seuil, plus écrit' },
      { itemId: E(448), note: 'la règle en une phrase' },
    ],
  },

  /** quand: the moment will come (act 7). */
  certitude: {
    term: 'la certitude',
    title: 'Le moment viendra',
    body: "Avec quand, le moment est dans l’agenda : tu ne sais peut-être pas le jour, mais tu sais qu’il arrivera. EN: With quand the moment is in the diary: the day may be open, the arrival is not.",
    examples: [
      { itemId: E(502), note: 'la retraite viendra' },
      { itemId: E(508), note: 'l’été arrivera' },
      { itemId: E(517), note: 'tôt ou tard' },
    ],
  },

  /** si: the moment may not come (act 7). */
  possible: {
    term: 'le possible',
    title: 'Ce n’est pas sûr',
    body: "Avec si, le moment est seulement proposé. Il peut ne jamais arriver, et c’est pour ça que le verbe reste au présent. EN: With si the moment is only proposed, and may never come at all.",
    examples: [
      { itemId: E(503), note: 'partir plus tôt : peut-être' },
      { itemId: E(509), note: 'assez chaud : on ne sait pas' },
      { itemId: E(512), note: 'la différence en une phrase' },
    ],
  },

  /** si + présent (acts 5 and 6). */
  condition: {
    term: 'la condition',
    title: 'Après si, le présent',
    body: "Une condition réelle commence par si et reste au présent, toujours. Le futur va dans l’autre moitié, jamais après si. EN: A real condition starts with si and stays in the present; the future goes in the other half.",
    examples: [
      { itemId: E(468), note: 'viens au présent, préparerai au futur' },
      { itemId: E(480), note: 'la règle absolue' },
      { itemId: 'fr.b1.cuisine.073', note: 'ajoutes au présent, sera au futur' },
    ],
  },

  /** si + présent > présent (act 6). */
  verite: {
    term: 'la vérité',
    title: 'Ce qui est vrai à chaque fois',
    body: "Si les deux moitiés sont au présent, tu ne parles pas d’un projet : tu dis ce qui arrive à chaque fois. C’est une vérité, pas une promesse. EN: Two presents say what happens every time, not what you plan.",
    examples: [
      { itemId: E(486), note: 'l’eau bout à chaque fois' },
      { itemId: E(496), note: 'le café du soir, à chaque fois' },
      { itemId: 'fr.b1.cuisine.078', note: 'la recette, à chaque fois' },
    ],
  },

  /** si + présent > impératif (act 6). */
  consigne: {
    term: 'la consigne',
    title: 'Si, puis une instruction',
    body: "Après si + présent, tu peux donner un ordre ou un conseil. C’est la forme des panneaux, des notices et des messages courts. EN: After si plus a present you can give an instruction: signs, notices and short messages.",
    examples: [
      { itemId: E(489), note: 'ferme : une instruction' },
      { itemId: E(493), note: 'sortez : une consigne de sécurité' },
      { itemId: E(501), note: 'attends-moi : un message court' },
    ],
  },

  /** The spoken second half (act 8). */
  oral: {
    term: "à l'oral",
    title: 'Aller et l’infinitif, en parlant',
    body: "En parlant, la deuxième moitié prend souvent aller et l’infinitif. La charnière, elle, garde le futur simple : on ne dit pas « quand je vais arriver ». EN: In speech the second half often uses aller plus the infinitive; the hinge clause keeps the futur simple.",
    examples: [
      { itemId: E(518), note: 'arriverai, puis je vais t’appeler' },
      { itemId: E(519), note: 'sera, puis on va commencer' },
      { itemId: E(527), note: 'la règle de l’oral' },
    ],
  },

  /** dans / en / d'ici (act 9). */
  delai: {
    term: 'le délai',
    title: 'Dire dans combien de temps',
    body: "dans deux heures : on compte à partir de maintenant. en deux heures : c’est le temps qu’il faut pour finir. d’ici vendredi : avant cette limite. EN: dans counts from now, en is the time it takes, d'ici is a deadline.",
    examples: [
      { itemId: E(532), note: 'dans : à partir de maintenant' },
      { itemId: E(536), note: 'en : le temps qu’il faut' },
      { itemId: E(537), note: 'd’ici : avant la limite' },
    ],
  },
};
