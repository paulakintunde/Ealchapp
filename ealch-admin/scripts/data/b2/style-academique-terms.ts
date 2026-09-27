// b2.22.l1 « Le style académique »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 9 to 13 characters. The three longest
// (« la phrase-clé » 13, « le connecteur » 13, « la certitude » 12) are
// never used together: no section carries two of them plus a third chip.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, CL } from './style-academique-corpus.ts';

export const STYLE_ACADEMIQUE_TERMS: Record<string, LessonTerm> = {
  phraseCle: {
    term: 'la phrase-clé',
    title: 'La phrase qui annonce le paragraphe',
    body: "La phrase-clé ouvre le paragraphe et en donne l'idée, en une phrase que le lecteur pourrait recopier comme résumé. Les phrases suivantes l'expliquent, la prouvent, puis la referment. EN: The topic sentence opens the paragraph and states its one idea; the rest explains and proves it.",
    examples: [
      { itemId: E(1013), note: 'le coût du logement : une idée' },
      { itemId: E(1017), note: 'la distance : une autre idée, un autre paragraphe' },
      { itemId: E(1154), note: 'ta version finale' },
    ],
  },

  annonce: {
    term: 'l’annonce',
    title: 'Le plan dit à l’avance',
    body: "Dans une introduction, l'annonce du plan dit au lecteur par où tu vas passer : en premier lieu, en second lieu, enfin. Une fois le plan annoncé, tu le suis dans le même ordre. EN: Announcing the plan tells the reader the route; then you follow it in that order.",
    examples: [
      { itemId: E(1032), note: 'la première étape annoncée' },
      { itemId: E(1033), note: 'la deuxième' },
      { itemId: E(1036), note: "le passage d'une partie à l'autre" },
    ],
  },

  connecteur: {
    term: 'le connecteur',
    title: 'Le mot qui dit le lien',
    body: "Un connecteur écrit dit la relation entre deux phrases : ajouter (en outre), opposer (toutefois), expliquer (en effet), conclure (par conséquent). Choisis-le pour ce lien précis, jamais pour la musique. EN: A written connector names the relation between two sentences; pick it for that relation.",
    examples: [
      { itemId: E(1049), note: 'en outre : ajouter' },
      { itemId: E(1051), note: 'toutefois : opposer' },
      { itemId: CL(1105), note: 'or, de la leçon 30 du B1' },
    ],
  },

  nuance: {
    term: 'la nuance',
    title: 'Dire jusqu’où va ta preuve',
    body: "Nuancer une affirmation, ce n'est pas douter de tout : c'est ajuster la phrase à ce que tes preuves permettent de dire. Il semble que, on peut supposer que, dans une certaine mesure, tendre à. EN: Hedging fits the sentence to what your evidence allows you to say.",
    examples: [
      { itemId: E(1063), note: 'les résultats suggèrent' },
      { itemId: E(1064), note: 'il semblerait que, et le subjonctif' },
      { itemId: E(1066), note: 'dans une certaine mesure' },
    ],
  },

  certitude: {
    term: 'la certitude',
    title: 'L’échelle de certitude',
    body: "Chaque tournure occupe une place sur une échelle : en haut ce qui est établi, au milieu ce qui est probable, en bas ce qui est seulement possible. Le haut prend l'indicatif, le bas le subjonctif. EN: Each phrase sits on a scale from established to merely possible; the mood follows.",
    examples: [
      { itemId: E(1090), note: 'établi : les résultats montrent que' },
      { itemId: E(1093), note: 'probable : selon toute vraisemblance' },
      { itemId: E(1094), note: "possible : il n'est pas exclu que" },
    ],
  },

  reprise: {
    term: 'la reprise',
    title: 'Reprendre sans répéter',
    body: "Une reprise renvoie à ce qui précède sans répéter le mot : un pronom (celle-ci), un nom qui résume (ce phénomène, cette tendance), ou « ce dernier » pour le nom le plus proche. C'est elle qui tisse le fil entre les phrases. EN: A reprise points back without repeating: a pronoun or a summarising noun.",
    examples: [
      { itemId: E(1102), note: 'ce phénomène : toute la phrase précédente' },
      { itemId: E(1103), note: 'ces derniers : les enseignants' },
      { itemId: E(1105), note: "celle-ci : l'évaluation" },
    ],
  },

  nominaliser: {
    term: 'nominaliser',
    title: 'Transformer un verbe en nom',
    body: "Nominaliser, c'est dire l'action avec un nom : augmenter devient la hausse, construire devient la construction. Le nom résume une idée entière et peut devenir le sujet de la phrase suivante. Une par phrase suffit souvent. EN: Turning a verb into a noun lets one word carry a whole idea; one per sentence is often enough.",
    examples: [
      { itemId: E(1114), note: 'la hausse des loyers' },
      { itemId: E(1115), note: 'cet éloignement' },
      { itemId: E(1119), note: 'la baisse des inscriptions' },
    ],
  },

  nous: {
    term: 'le « nous »',
    title: 'Qui parle dans un devoir',
    body: "Dans un texte universitaire, l'auteur dit « nous » pour annoncer sa démarche (nous examinerons), « on » pour ce que chacun peut constater, et une tournure impersonnelle pour présenter les faits (il apparaît que, il convient de). EN: The author says nous for the approach, on for what anyone can see, and the impersonal for facts.",
    examples: [
      { itemId: E(1128), note: 'nous : la démarche' },
      { itemId: E(1130), note: 'on : le constat' },
      { itemId: E(1129), note: "l'impersonnel : le fait" },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'Soutenu, mais clair',
    body: "Le registre académique est soutenu : pas de mot de la conversation (super, du coup, plein de, ça, les gens). Il reste pourtant clair : nonobstant et d'aucuns ne te rendent pas plus savant. EN: The academic register is formal but clear: no chat words, and no showing off either.",
    examples: [
      { itemId: E(1142), note: 'par conséquent, de nombreux' },
      { itemId: E(1145), note: 'la conversation, au mauvais endroit' },
      { itemId: E(1149), note: 'faire savant, l’excès inverse' },
    ],
  },

  preuve: {
    term: 'la preuve',
    title: 'Ce qui te permet de l’affirmer',
    body: "Une preuve, dans un texte universitaire, c'est une étude, des chiffres, une source, un fait vérifiable. Une anecdote, celle de ton cousin par exemple, illustre une idée ; elle ne la prouve pas. EN: Evidence is a study, figures, a source; an anecdote illustrates but does not prove.",
    examples: [
      { itemId: E(1015), note: 'une enquête, un chiffre' },
      { itemId: E(1002), note: 'une anecdote, pas une preuve' },
      { itemId: E(1005), note: 'la règle' },
    ],
  },
};
