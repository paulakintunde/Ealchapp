// b2.21.l1 « Les négations combinées »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 12 characters. The 11- and 12-character
// labels (« l'ordre fixe », « le participe », « l'infinitif », « ne
// explétif », « oral, écrit ») are never used three together; most sections
// carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './negations-combinees-corpus.ts';

export const NEGATIONS_COMBINEES_TERMS: Record<string, LessonTerm> = {
  vide: {
    term: 'un seul ne',
    title: 'Un seul ne, plusieurs mots',
    body: "Une négation combinée garde un seul ne ; les mots négatifs s'y ajoutent pour préciser le vide : plus (depuis quand), jamais (sans exception), rien, personne ou aucun (ce qui manque). Je n'ai plus jamais rien signé. EN: One ne, and the negative words add up to say exactly what is missing.",
    examples: [
      { itemId: E(1412), note: 'jamais + rien, un seul ne' },
      { itemId: E(1422), note: 'plus + jamais + personne' },
      { itemId: E(1496), note: 'personne sujet, rien objet' },
    ],
  },

  ordre: {
    term: "l'ordre fixe",
    title: 'Plus, puis jamais, puis le reste',
    body: "Dans une combinaison, plus vient d'abord, puis jamais, puis rien, personne, aucun, nulle part, ni… ni ou que : on ne voit plus jamais personne. Jamais plus existe aussi, dans un registre soutenu. EN: plus, then jamais, then the rest; jamais plus is formal.",
    examples: [
      { itemId: E(1416), note: 'plus aucun' },
      { itemId: E(1423), note: 'plus jamais aucun' },
      { itemId: E(1419), note: 'jamais plus, soutenu' },
    ],
  },

  participe: {
    term: 'le participe',
    title: 'Chaque mot garde sa place',
    body: "Au passé composé, plus, jamais et rien vont avant le participe ; personne, aucun, nulle part, que avec son complément, et ni… ni devant des compléments, vont après. Dans une combinaison, chaque mot garde sa place : je n'ai plus vu personne, je n'ai jamais rien signé. EN: in a compound tense, each negative word keeps its own side of the participle.",
    examples: [
      { itemId: E(1437), note: 'plus avant, personne après' },
      { itemId: E(1439), note: 'plus jamais rien, tous avant' },
      { itemId: E(1446), note: 'rien avant, de suspect après' },
    ],
  },

  infinitif: {
    term: "l'infinitif",
    title: "Devant l'infinitif, après sans",
    body: "Devant un infinitif, ne, plus, jamais et rien passent avant le verbe ; personne et aucun restent après : ne plus rien dire, ne plus voir personne. Sans tient déjà la place de ne : sans rien dire, jamais « sans ne rien dire ». EN: before an infinitive, ne plus jamais rien come first; sans replaces ne.",
    examples: [
      { itemId: E(1456), note: 'ne plus rien, devant' },
      { itemId: E(1457), note: 'personne, après' },
      { itemId: E(1462), note: 'sans + rien, sans ne' },
    ],
  },

  empilement: {
    term: 'pas + rien',
    title: 'Pas reste dehors',
    body: "Pas ne se combine jamais avec rien, personne, jamais, plus ou aucun : « je n'ai pas rien vu » brouille le sens et s'entend même comme « quelque chose ». Exception figée : ce n'est pas rien, c'est-à-dire c'est important. Pas… non plus, pas un seul et pas du tout restent corrects. EN: pas never joins another negative word; ce n'est pas rien is a fixed phrase meaning it matters.",
    examples: [
      { itemId: E(1476), note: 'rien seul, sans pas' },
      { itemId: E(1480), note: 'ce n’est pas rien : c’est grave' },
      { itemId: E(1481), note: 'pas… non plus : correct' },
    ],
  },

  sujet: {
    term: 'le sujet',
    title: 'Quand la négation est le sujet',
    body: "Personne, rien, aucun, nul et ni… ni peuvent ouvrir la phrase : ne se place devant le verbe, et pas n'entre jamais. Aucun et nul restent au singulier ; ni… ni… prend en général le pluriel. À l'écrit, ne ne tombe jamais : personne n'a rien vu. EN: a negative subject takes ne before the verb and never pas.",
    examples: [
      { itemId: E(1496), note: 'personne + rien' },
      { itemId: E(1500), note: 'ni… ni… ne, au pluriel' },
      { itemId: E(1499), note: 'nul ne, soutenu' },
    ],
  },

  restriction: {
    term: 'plus que',
    title: 'Plus que, jamais que, pas que',
    body: "Ne… plus que dit ce qui reste désormais ; ne… jamais que, ce qui n'a jamais été autre chose. Leur contraire, ne… pas que (pas seulement), vient de la leçon 19 du B2, comme ne… que tout seul. Que n'est pas un mot négatif : il peut suivre pas sans empilement. EN: plus que: only … now; jamais que: only ever; pas que: not only.",
    examples: [
      { itemId: E(1516), note: 'plus que : il n’en reste que deux' },
      { itemId: E(1519), note: 'jamais que : rien d’autre' },
      { itemId: E(1520), note: 'pas que : pas seulement' },
    ],
  },

  soutenu: {
    term: 'le soutenu',
    title: 'Guère, nullement, ne seul',
    body: "À l'écrit soigné : ne… guère (à peine), ne… nullement ou aucunement (pas du tout), et ne seul avec savoir, pouvoir, oser et cesser : je ne saurais dire, il ne cesse de répéter. Ne… point est littéraire : tu le lis, tu ne l'écris pas dans une lettre d'aujourd'hui. EN: formal negations for letters; point is literary.",
    examples: [
      { itemId: E(1532), note: 'nullement, dans une lettre' },
      { itemId: E(1537), note: 'ne seul avec savoir' },
      { itemId: E(1535), note: 'plus guère : presque plus' },
    ],
  },

  portee: {
    term: 'la portée',
    title: 'Ce que la négation touche',
    body: "Une négation nie ce qu'elle touche. Je ne vous ai pas demandé de partir : aucune demande. Je vous ai demandé de ne pas partir : une demande. Pas tous : certains ; aucun : zéro. Pas toujours : parfois ; toujours pas : pas encore. EN: move the negation and you deny something else.",
    examples: [
      { itemId: E(1552), note: 'la demande est niée' },
      { itemId: E(1553), note: 'on demande de ne pas' },
      { itemId: E(1556), note: 'pas tous : certains' },
    ],
  },

  expletif: {
    term: 'ne explétif',
    title: 'Le ne qui ne nie rien',
    body: "Après avant que, à moins que, craindre que ou un comparatif, un ne peut apparaître sans rien nier : partons avant qu'il ne pleuve. Enlève-le, le sens ne change pas. La leçon 18 du B2 le présente ; ici, retiens seulement qu'il ne compte pas comme une négation. EN: this ne negates nothing; take it out and the meaning stays.",
    examples: [
      { itemId: E(1570), note: 'avant qu’il ne pleuve : pas encore' },
      { itemId: E(1571), note: 'je crains qu’elle ne soit partie' },
      { itemId: E(1572), note: 'avec pas : une vraie négation' },
    ],
  },

  oral: {
    term: 'oral, écrit',
    title: 'Le ne qui tombe',
    body: "À l'oral, ne tombe souvent, même dans une combinaison : j'ai jamais rien vu, y a plus personne. À l'écrit, il reste toujours : je n'ai jamais rien vu. Sans ne, plus peut même vouloir dire davantage : je n'en veux plus lève le doute. EN: spoken French drops ne; written French keeps it.",
    examples: [
      { itemId: E(1577), note: 'oral : sans ne' },
      { itemId: E(1578), note: 'écrit : avec ne' },
      { itemId: E(1581), note: 'je n’en veux plus : aucun doute' },
    ],
  },
};
