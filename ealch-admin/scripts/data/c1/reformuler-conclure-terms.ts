// c1.07.l1 « Reformuler et conclure » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6 (labels joined, plus 2 per separator). Labels here run
// 8 to 12 characters; the widest trio the lesson uses (« l’empilement » +
// « l’ajout fort » + « la clôture ») is 12 + 12 + 10 + 4 = 38, so that trio is
// NEVER used: the scratch check asserts every row at 37 or under.
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A MARKER GLOSSARY NAMES GESTURES (le geste, rectifier, préciser, à vrai
// dire, l’ajout fort, l’aparté, a fortiori, dès lors, quitte à, la clôture),
// ONE FAULT (l’empilement) AND ONE STATUS (contesté).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './reformuler-conclure-corpus.ts';

export const REFORMULER_CONCLURE_TERMS: Record<string, LessonTerm> = {
  /** The reframe's one idea, every act. */
  geste: {
    term: 'le geste',
    title: 'Ce que le marqueur annonce',
    body: "Un marqueur de discours ne relie pas seulement deux phrases : il annonce ce que tu vas faire de ton idée. La préciser, la remplacer, y ajouter un argument, la pousser vers le cas évident, ou la fermer. Le lecteur suit ce geste avant même d’avoir lu la suite. EN: A discourse marker announces what you are about to do with your idea.",
    examples: [
      { itemId: E(2602), note: 'un marqueur, un geste' },
      { itemId: E(2604), note: 'la question à te poser' },
      { itemId: E(2601), note: 'un seul geste, net' },
    ],
  },

  /** Act 2: ou plutôt, plus exactement, pour mieux dire. */
  rectifier: {
    term: 'rectifier',
    title: 'Se corriger sans effacer',
    body: "À l’écrit comme à l’oral, tu peux corriger ta propre formulation au lieu de la supprimer : le premier mot reste visible, le second le dépasse. « Ou plutôt » remplace un mot qui n’était pas juste, « plus exactement » resserre un énoncé vrai mais vague, « pour mieux dire » (soutenu) choisit un mot plus fort ou plus exact. EN: Correct your own wording in the open: replace, narrow or upgrade it.",
    examples: [
      { itemId: E(2613), note: 'ou plutôt : on remplace' },
      { itemId: E(2618), note: 'plus exactement : on resserre' },
      { itemId: E(2615), note: 'pour mieux dire : un mot plus juste' },
    ],
  },

  /** Act 3: j’entends par là, en l’occurrence, à cet égard. */
  preciser: {
    term: 'préciser',
    title: 'Ton sens, ton cas',
    body: "Un mot vague (« durable », « culture », « sobriété ») laisse chaque lecteur y mettre ce qu’il veut. « J’entends par là » donne TA définition. « En l’occurrence » désigne le cas réel dont tu parles, pas un exemple parmi d’autres. « À cet égard » rattache ta phrase à l’aspect que tu viens de nommer. EN: Give your own definition, name the actual case, link to the aspect just named.",
    examples: [
      { itemId: E(2624), note: 'j’entends par là' },
      { itemId: E(2625), note: 'en l’occurrence : ce cas-là' },
      { itemId: E(2633), note: 'à cet égard : sur ce point précis' },
    ],
  },

  /** Act 4: à vrai dire, loin s’en faut. */
  vraidire: {
    term: 'à vrai dire',
    title: 'Le tournant franc',
    body: "« À vrai dire » annonce ce que tu penses réellement, souvent contre une attente ou une politesse de façade : « À vrai dire, je m’attendais au pire ». Il ne veut pas dire « vraiment ». Son voisin « loin s’en faut » (soutenu) renforce une phrase négative ou restrictive : « Tout n’est pas réglé, loin s’en faut ». EN: À vrai dire turns to what you really think; loin s’en faut strengthens a negative.",
    examples: [
      { itemId: E(2635), note: 'contre une attente' },
      { itemId: E(2638), note: 'le vrai sujet' },
      { itemId: E(2636), note: 'loin s’en faut, après une restriction' },
    ],
  },

  /** Act 5: qui plus est, sans compter que. */
  ajout: {
    term: 'l’ajout fort',
    title: 'Ajouter ce qui pèse',
    body: "« Qui plus est » ajoute un argument et laisse entendre qu’il pèse au moins autant que le précédent : place-le devant ton meilleur. « Sans compter que » (+ indicatif) ajoute une considération de plus, souvent décisive. Les deux s’écrivent comme ils se disent ; ni l’un ni l’autre ne marque une opposition. EN: Qui plus est adds a weighty point; sans compter que adds one more, with the indicative.",
    examples: [
      { itemId: E(2648), note: 'qui plus est, au second argument' },
      { itemId: E(2649), note: 'sans compter que + indicatif' },
      { itemId: E(2654), note: 'sans compter + nom' },
    ],
  },

  /** Act 6: d’ailleurs, du reste, au demeurant. */
  aparte: {
    term: 'l’aparté',
    title: 'La preuve glissée en passant',
    body: "« D’ailleurs » glisse un argument de plus comme s’il était secondaire : le ton est léger, l’effet ne l’est pas. « Du reste » fait le même geste, en plus soutenu. « Au demeurant » (soutenu) veut dire « au reste, tout bien considéré » et suit souvent une réserve : « un peu austère, au demeurant fort utile ». EN: An extra point slipped in as if in passing; au demeurant often follows a reservation.",
    examples: [
      { itemId: E(2658), note: 'd’ailleurs, au milieu de la phrase' },
      { itemId: E(2659), note: 'du reste, plus soutenu' },
      { itemId: E(2660), note: 'au demeurant, après une réserve' },
    ],
  },

  /** Act 7: a fortiori, à plus forte raison. */
  fortiori: {
    term: 'a fortiori',
    title: 'Du cas le moins attendu au cas évident',
    body: "« A fortiori » (sans accent) et « à plus forte raison » tirent une conclusion d’un cas où elle était moins attendue vers un cas où elle s’impose encore plus : si l’escalier fatigue un adulte en forme, il épuise a fortiori une personne âgée. Le sens va toujours vers le cas le plus évident. EN: From the case where it is least expected to the one where it is most obvious.",
    examples: [
      { itemId: E(2668), note: 'a fortiori, dans la phrase' },
      { itemId: E(2669), note: 'et à plus forte raison + nom' },
      { itemId: E(2673), note: 'à plus forte raison si…' },
    ],
  },

  /** Act 8: dès lors, dès lors que. */
  deslors: {
    term: 'dès lors',
    title: 'Depuis quand, ou pourquoi',
    body: "Dans un récit daté, « dès lors » veut dire « à partir de ce moment », souvent avec une nuance de cause. Dans un raisonnement, il veut dire « par conséquent, dans ces conditions ». « Dès lors que » + indicatif est aujourd’hui surtout causal : « du moment que, puisque ». Le contexte décide. EN: In a narrative, from then on; in an argument, consequently; dès lors que, mostly since.",
    examples: [
      { itemId: E(2675), note: 'un départ dans le temps' },
      { itemId: E(2676), note: 'une conséquence' },
      { itemId: E(2679), note: 'dès lors que : du moment que' },
    ],
  },

  /** Act 9: quitte à, en tout état de cause. */
  quitte: {
    term: 'quitte à',
    title: 'Accepter le prix, puis trancher',
    body: "« Quitte à » + infinitif dit le prix que tu acceptes pour obtenir mieux : « quitte à décevoir quelques fidèles ». À l’oral, on entend aussi « Quitte à attendre, autant attendre au chaud ». « En tout état de cause » (soutenu) pose un point ferme, quoi qu’il arrive par ailleurs. EN: Quitte à names the cost you accept; en tout état de cause sets a fixed point.",
    examples: [
      { itemId: E(2688), note: 'le prix accepté' },
      { itemId: E(2689), note: 'quitte à…, autant…' },
      { itemId: E(2694), note: 'le point qui ne bouge pas' },
    ],
  },

  /** Act 10: tout bien considéré, somme toute, en guise de conclusion. */
  cloture: {
    term: 'la clôture',
    title: 'Fermer le texte, une fois',
    body: "Trois gestes de clôture, trois nuances. « Tout bien considéré » rend un verdict après avoir pesé le pour et le contre. « Somme toute » fait le compte et ramène souvent les choses à leur juste mesure. « En guise de conclusion » (soutenu) annonce une dernière remarque. Pour la phrase qui ferme, choisis-en un : un texte ne se ferme qu’une fois. EN: Weigh and decide, sum up and relativise, or announce a last remark: once.",
    examples: [
      { itemId: E(2699), note: 'le verdict' },
      { itemId: E(2703), note: 'somme toute, au milieu' },
      { itemId: E(2701), note: 'l’annonce' },
    ],
  },

  /** Acts 1, 6, 10 and the task: the stacking fault. */
  empilement: {
    term: 'l’empilement',
    title: 'Deux gestes à la fois, aucun de clair',
    body: "Empiler des marqueurs (« Bref, en somme, au final » ; « D’ailleurs, du reste, qui plus est ») ne renforce rien : le lecteur ne sait plus quel geste suivre. Garde un marqueur par phrase, rarement deux, et seulement s’ils font deux gestes différents. EN: Stacked markers cancel each other out; keep one per sentence.",
    examples: [
      { itemId: E(2607), note: 'la règle de dosage' },
      { itemId: E(2662), note: 'un seul suffit' },
      { itemId: E(2704), note: 'une seule clôture' },
    ],
  },

  /** Act 11: decision 17's seven markers. */
  conteste: {
    term: 'contesté',
    title: 'Courant à l’oral, discuté à l’écrit',
    body: "Du coup, au final, suite à, en termes de, voire même, par contre et au niveau de sont du français qu’on entend tous les jours : à l’oral, ce ne sont pas des fautes. À l’écrit soutenu, l’Académie française ou l’OQLF en critiquent l’emploi, et ils ne disent pas toujours la même chose. Reconnais-les ; dans ton texte, choisis la forme que personne ne conteste. EN: Ordinary in speech, criticised in careful writing: recognise them, write the safe form.",
    examples: [
      { itemId: E(2707), note: 'à l’oral' },
      { itemId: E(2712), note: 'à l’écrit' },
      { itemId: E(2719), note: 'deux autorités, deux avis' },
    ],
  },
};
