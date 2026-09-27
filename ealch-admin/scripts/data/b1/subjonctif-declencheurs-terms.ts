// b1.15.l1 « Le subjonctif : les déclencheurs » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here run 6 to 12 characters, and the trios are
// assigned so that no row goes over 34: « la nécessité », « le sentiment » and
// « l'indicatif » are the three longest and never appear together.
//
// « la clé » rather than « le déclencheur »: the file name says déclencheur
// and the learner never has to. Fourteen characters would blow the chip row
// apart in any trio, and the lesson's own metaphor is the key, not the jargon.
//
// « les liens » rather than « les conjonctions »: same reason, and « lien »
// is already the house word for a joining word in this band.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './subjonctif-declencheurs-corpus.ts';

export const DECLENCHEURS_TERMS: Record<string, LessonTerm> = {
  /** Act 1, and every act after it: the one idea the lesson hangs on. */
  cle: {
    term: 'la clé',
    title: 'C’est l’expression qui décide',
    body: "Le mot « que » ouvre une porte, mais il ne décide de rien tout seul. Ce qui décide, c'est l'expression juste devant lui : il faut que, je doute que, bien que. Certaines ouvrent, d'autres non. EN: que opens a door but decides nothing; the expression in front of it is what chooses the form.",
    examples: [
      { itemId: E(1211), note: 'la règle, en une ligne' },
      { itemId: E(1200), note: 'je veux que : la clé ouvre' },
      { itemId: E(1205), note: 'j’espère que : la même porte, et elle reste fermée' },
    ],
  },

  /** Act 2: the first family, and the easiest to believe. */
  volonte: {
    term: 'la volonté',
    title: 'Tu veux que quelque chose arrive',
    body: "Vouloir, souhaiter, désirer, exiger, demander, préférer : tu dis ce que tu veux voir arriver, et ce n'est pas encore arrivé. Toutes ces expressions ouvrent la porte. EN: with vouloir, souhaiter, exiger and the rest, you say what you want to happen, and it has not happened yet.",
    examples: [
      { itemId: E(1150), note: 'la clé la plus courante' },
      { itemId: E(1228), note: 'exiger que, au travail' },
      { itemId: E(1236), note: 'la règle de la famille' },
    ],
  },

  /** Act 3: the impersonal family, all of it built on il. */
  necessite: {
    term: 'la nécessité',
    title: 'Quelque chose doit arriver',
    body: "Il faut que, il est nécessaire que, il est important que, il vaut mieux que, il est temps que. Toutes commencent par « il », et ce « il » ne désigne personne : c'est la nécessité elle-même. EN: the necessity family all starts with an il that stands for nobody.",
    examples: [
      { itemId: E(1147), note: 'la clé la plus fréquente du français' },
      { itemId: E(1254), note: 'pourquoi elles commencent toutes par il' },
      { itemId: E(1247), note: 'il est temps que, dans une réunion' },
    ],
  },

  /** Act 4: the family that contradicts the folk rule about uncertainty. */
  sentiment: {
    term: 'le sentiment',
    title: 'Ce que le fait te fait',
    body: "Content, triste, surpris, désolé, fier, ravi, avoir peur, regretter, c'est dommage. Le fait est sûr : tu le sais déjà. Ce n'est pas le doute qui ouvre la porte ici, c'est le sentiment. EN: with a feeling the fact is certain, and the subjunctive comes all the same.",
    examples: [
      { itemId: E(1151), note: 'la clé la plus douce' },
      { itemId: E(1275), note: 'la règle, et l’objection qu’elle règle' },
      { itemId: E(1269), note: 'avoir peur que, avant un train' },
    ],
  },

  /** Act 5: doubt, and the line between possible and probable. */
  doute: {
    term: 'le doute',
    title: 'Tu ne donnes pas la chose pour vraie',
    body: "Douter que, il est possible que, il se peut que, il n'est pas sûr que, il semble que. Tu refuses de présenter la chose comme un fait, et la forme change. Attention : il est probable que, lui, n'ouvre pas. EN: doubt opens the door, but il est probable que does not.",
    examples: [
      { itemId: E(1278), note: 'la clé du doute' },
      { itemId: E(1293), note: 'possible ouvre, probable non' },
      { itemId: E(1287), note: 'il semble que, dans une rue inconnue' },
    ],
  },

  /** Act 6: the centrepiece, and the thing most learners get wrong. */
  bascule: {
    term: 'la bascule',
    title: 'La négation change la clé',
    body: "Je pense que dit un fait, donc indicatif. Je ne pense pas que ouvre un doute, donc subjonctif. Le verbe est le même, la phrase est la même : seuls « ne » et « pas » ont bougé. EN: the negative swings the same expression from indicative to subjunctive.",
    examples: [
      { itemId: E(1302), note: 'je pense que : est' },
      { itemId: E(1303), note: 'je ne pense pas que : soit' },
      { itemId: E(1313), note: 'la règle, en six mots' },
    ],
  },

  /** Acts 7 and 8: the joining words that carry que inside them. */
  liens: {
    term: 'les liens',
    title: 'Des mots qui finissent par que',
    body: "Pour que, afin que, bien que, quoique, avant que, jusqu'à ce que, à condition que, sans que, pourvu que, à moins que. Ce sont des mots de liaison, et ils portent leur « que » avec eux. Tous ouvrent la porte. EN: these joining words carry their own que, and every one of them opens the door.",
    examples: [
      { itemId: E(1148), note: 'la concession' },
      { itemId: E(1316), note: 'le but' },
      { itemId: E(1349), note: 'les cinq derniers, en une ligne' },
    ],
  },

  /** Act 9: the half of the skill that nobody teaches. */
  indicatif: {
    term: 'l’indicatif',
    title: 'La forme ordinaire du verbe',
    body: "C'est la forme que tu connais depuis le début : je viens, tu viens, il vient. Après une expression qui n'ouvre pas la porte, elle ne bouge pas. Espérer que, il me semble que, parce que, après que la laissent intacte. EN: after an expression that does not open the door, the ordinary form of the verb stays.",
    examples: [
      { itemId: E(1352), note: 'la clé qui n’ouvre pas' },
      { itemId: E(1366), note: 'la règle, et sa raison' },
      { itemId: E(1362), note: 'après que : c’est déjà arrivé' },
    ],
  },

  /** Acts 6, 9 and 10: the reason an expression opens or does not. */
  fait: {
    term: 'le fait',
    title: 'Présenté comme vrai, ou pas',
    body: "Quand l'expression présente la chose comme vraie, le verbe reste ordinaire : je sais que tu viens. Quand elle la veut, la craint, la met en doute ou la place après un lien, la forme change. EN: an expression that presents the thing as true leaves the verb alone.",
    examples: [
      { itemId: E(1206), note: 'je sais que : un fait' },
      { itemId: E(1381), note: 'une clé qui n’ouvre pas' },
      { itemId: E(1380), note: 'le test en trois questions' },
    ],
  },
};
