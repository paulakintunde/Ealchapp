// c1.06.l1 « Nuancer à l’oral » · the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6 (labels joined, plus 2 per separator). The labels here are 8
// to 12 characters; the scratch check asserts that every section's chips fit
// in 37, and that every term is surfaced by at least one section.
//
// C1 LANGUAGE RULE: the body is natural French at C1, addressed as « tu »,
// then ONE English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './nuancer-oral-corpus.ts';

export const NUANCER_ORAL_TERMS: Record<string, LessonTerm> = {
  /** The reframe: the dial between the blunt remark and the empty one. */
  dosage: {
    term: 'le dosage',
    title: 'Ni trop, ni trop peu',
    body: 'Nuancer, c’est régler la force d’une phrase pour la personne, l’enjeu et le moment. Trop peu, la remarque blesse et l’autre se ferme ; trop, elle ne dit plus rien. La bonne dose ménage l’autre sans éteindre le message. EN: Enough hedging to spare the listener, never so much that the message disappears.',
    examples: [
      { itemId: E(1000), note: 'la remarque bien dosée' },
      { itemId: E(1009), note: 'les deux excès' },
      { itemId: E(1128), note: 'une nuance par doute' },
    ],
  },

  /** Act 2: the softening aside. */
  incise: {
    term: 'l’incise',
    title: 'Une parenthèse qui adoucit',
    body: 'Une incise se glisse dans la phrase, entre deux virgules à l’écrit et sur un ton plus bas à l’oral : me semble-t-il, si je ne m’abuse, à ma connaissance. Elle porte sur le mot voisin, donc tu la places là où se trouve ton doute. EN: A hedging aside, placed next to what you are unsure of.',
    examples: [
      { itemId: E(1019), note: 'un avis : me semble-t-il' },
      { itemId: E(1017), note: 'un souvenir : si je ne m’abuse' },
      { itemId: E(1026), note: 'où la placer' },
    ],
  },

  /** Act 3: the scale of certainty in speech. */
  certitude: {
    term: 'la certitude',
    title: 'Parier sans jurer',
    body: 'À l’oral, tu dis à quel point tu es sûr : j’en mettrais ma main au feu, il y a fort à parier que, il est permis de penser que, je ne parierais pas là-dessus, rien n’indique que. Les deux premiers gardent l’indicatif ; après rien n’indique que, le subjonctif est le plus courant. EN: A scale from almost certain to no evidence, with its moods.',
    examples: [
      { itemId: E(1035), note: 'un pari solide' },
      { itemId: E(1036), note: 'une opinion raisonnable' },
      { itemId: E(1039), note: 'aucun indice' },
    ],
  },

  /** Act 4: epistemic devoir. */
  hypothese: {
    term: 'l’hypothèse',
    title: 'Devoir qui suppose',
    body: 'Devoir ne dit pas toujours une obligation : il doit être en réunion, ça doit être lui, il devait être midi. C’est une supposition solide, tirée d’un indice. Il doit y avoir un malentendu permet aussi de contredire sans accuser personne. EN: Devoir as a confident guess, and as a tactful way to say someone is wrong.',
    examples: [
      { itemId: E(1047), note: 'une supposition au présent' },
      { itemId: E(1050), note: 'accuser le malentendu' },
      { itemId: E(1056), note: 'obligation ou supposition' },
    ],
  },

  /** Act 5: the approximate word, made precise. */
  apeupres: {
    term: 'l’à-peu-près',
    title: 'Avouer que le mot est approximatif',
    body: 'En quelque sorte, pour ainsi dire, à proprement parler : ces formules préviennent que le mot choisi est une image ou qu’il ne convient pas tout à fait. Loin de rendre la phrase floue, elles disent exactement jusqu’où la prendre. EN: Flagging an approximate word, which makes you more precise, not less.',
    examples: [
      { itemId: E(1061), note: 'en quelque sorte' },
      { itemId: E(1062), note: 'à proprement parler' },
      { itemId: E(1064), note: 'un tant soit peu' },
    ],
  },

  /** Act 6: formal requests in speech. */
  distance: {
    term: 'la distance',
    title: 'Demander de loin',
    body: 'Avec un partenaire, une administration ou une personne haut placée, la demande prend de la hauteur : je vous saurais gré de, seriez-vous en mesure de. Pour annoncer une contrainte, nous serons amenés à. Entre amis, ces formules sonnent ironiques. EN: Formal requests and softened constraints, for the right person only.',
    examples: [
      { itemId: E(1073), note: 'je vous saurais gré de' },
      { itemId: E(1075), note: 'être amené à' },
      { itemId: E(1080), note: 'saurais, jamais serais' },
    ],
  },

  /** Act 7: contradicting with regard. */
  egards: {
    term: 'les égards',
    title: 'Contredire avec égards',
    body: 'Avec tout le respect que je vous dois, sauf votre respect, loin de moi l’idée de, sans vouloir vous contredire : ces formules annoncent un désaccord. Elles ne l’effacent pas ; elles le préparent. Une seule suffit, puis l’argument. EN: Formulas that announce a disagreement politely; one is enough.',
    examples: [
      { itemId: E(1086), note: 'loin de moi l’idée de' },
      { itemId: E(1088), note: 'sans vouloir vous contredire' },
      { itemId: E(1094), note: 'ce qu’elles annoncent' },
    ],
  },

  /** Act 8: the hedged criticism. */
  critique: {
    term: 'la critique',
    title: 'La critique enveloppée',
    body: 'Une critique qui se fait entendre suit souvent quatre temps : ce qui marche, un point précis pris à ton compte, une suggestion au conditionnel, et une porte laissée à l’autre. L’erreur de fait, elle, se dit sans détour. EN: Acknowledge, pinpoint, suggest, leave room; state factual errors plainly.',
    examples: [
      { itemId: E(1100), note: 'un point précis' },
      { itemId: E(1101), note: 'une suggestion' },
      { itemId: E(1105), note: 'le point ferme' },
    ],
  },

  /** Act 9: litote and understatement in speech. */
  litote: {
    term: 'la litote',
    title: 'Dire moins pour dire plus',
    body: 'La litote nie le contraire de ce qu’elle veut dire : ce n’est pas mauvais du tout veut dire c’est bon. La retenue minimise : un peu long peut vouloir dire beaucoup trop long. Au Québec, c’est pas pire veut dire pas mal, assez bien : le plus souvent un compliment. EN: Saying less so that more is heard; the regional codes matter.',
    examples: [
      { itemId: E(1115), note: 'une litote positive' },
      { itemId: E(1116), note: 'la retenue' },
      { itemId: E(1112), note: 'Québec' },
    ],
  },

  /** Act 11: decoding the hedges of others. */
  nondit: {
    term: 'le non-dit',
    title: 'Entendre ce qui n’est pas dit',
    body: 'C’est intéressant, il faudrait voir, je vais y réfléchir, ce n’est pas exclu, nous en reparlerons : ces réponses ne disent ni oui ni non. Souvent, elles préparent un refus. Reformule et demande une date pour savoir ce qu’elles valent. EN: Polite non-answers often prepare a no; rephrase and ask for a date.',
    examples: [
      { itemId: E(1139), note: 'il faudrait voir' },
      { itemId: E(1140), note: 'ce n’est pas exclu' },
      { itemId: E(1145), note: 'que faire' },
    ],
  },

  /** Act 10: what is never hedged. */
  fermete: {
    term: 'la fermeté',
    title: 'Ce qui ne se nuance pas',
    body: 'Un fait établi, une date ferme, une limite de sécurité, une demande précise : tu les dis nettement. La nuance porte sur tes avis et tes suggestions, pas sur ce qui est établi. Un point ferme au milieu d’une critique douce la rend crédible. EN: Facts, dates, safety limits and clear requests are said plainly.',
    examples: [
      { itemId: E(1129), note: 'la règle' },
      { itemId: E(1124), note: 'le fait, nettement' },
      { itemId: E(1154), note: 'la limite de sécurité' },
    ],
  },

  /** Act 12: the task's grid. */
  grille: {
    term: 'la grille',
    title: 'Ce que la mission évalue',
    body: 'Ton message est jugé sur six points : la tâche, le dosage, le registre, la précision des formules, la correction et la prononciation. Le dosage compte autant que la tâche : une nuance par doute, et les points fermes dits nettement. EN: Six criteria; dosage weighs as much as completing the task.',
    examples: [
      { itemId: E(1148), note: 'une critique dosée' },
      { itemId: E(1150), note: 'un point ferme' },
      { itemId: E(1152), note: 'une demande formelle' },
    ],
  },
};
