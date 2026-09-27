// b2.24.l1 « Lire de façon critique » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6. Labels here run 8 to 13 characters; the widest trio
// the lesson uses (« le présupposé » + « la position » + « la citation ») is
// 35. Asserted in the scratch check with « every term is surfaced ».
//
// B2 LANGUAGE RULE: the body is natural B2 French, addressed as « tu », then
// ONE English line starting « EN: ».
//
// A CRITICAL-READING GLOSSARY NAMES MOVES AND PARTS OF AN ARGUMENT: what a
// text claims (la thèse), what holds it up (la preuve), what it takes for
// granted (le présupposé), how far the writer stands from it (la distance),
// what it means against its words (l’ironie), who gains (l’intérêt).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './lecture-critique-corpus.ts';

export const LECTURE_CRITIQUE_TERMS: Record<string, LessonTerm> = {
  /** Act 2: the claim, not the topic. */
  these: {
    term: 'la thèse',
    title: 'Ce que le texte veut te faire admettre',
    body: "Le sujet, c’est ce dont parle le texte ; la thèse, c’est ce qu’il en affirme. On la trouve rarement dans la première phrase : elle arrive souvent après une concession, derrière pourtant, mais ou donc. Tu dois pouvoir la dire en une phrase, avec tes mots. EN: The topic is what the text is about; the thesis is what it claims about it.",
    examples: [
      { itemId: E(1417), note: 'la thèse de la chronique sur les notes' },
      { itemId: E(1423), note: 'le sujet d’un côté, la thèse de l’autre' },
      { itemId: E(1426), note: 'la règle' },
    ],
  },

  /** Act 3: what holds a claim up. */
  preuve: {
    term: 'la preuve',
    title: 'Ce qui soutient une affirmation',
    body: "Un chiffre sourcé, une étude dont on connaît la méthode, un témoignage, un exemple : tout n’a pas le même poids. Un exemple illustre, il ne prouve pas. Et « tout le monde le sait » n’est pas une preuve, c’est une affirmation. EN: Evidence comes in different weights; an example illustrates, a bare assertion proves nothing.",
    examples: [
      { itemId: E(1442), note: 'un chiffre, avec sa source et son échantillon' },
      { itemId: E(1444), note: 'un exemple, pas une preuve' },
      { itemId: E(1432), note: 'un lien, pas une cause' },
    ],
  },

  /** Act 4: what the argument takes for granted. */
  presuppose: {
    term: 'le présupposé',
    title: 'Ce que le texte ne dit pas, mais croit',
    body: "Un présupposé est une idée que l’argument tient pour acquise sans jamais l’écrire. Pour le trouver, demande-toi : pour que ce raisonnement marche, que faut-il croire ? Souvent : que ce qui vient après est causé par ce qui vient avant, ou que tout le monde est dans le même cas. EN: An assumption is an idea the argument needs but never states.",
    examples: [
      { itemId: E(1456), note: 'les clients viennent en voiture' },
      { itemId: E(1460), note: 'après, ce n’est pas forcément à cause de' },
      { itemId: E(1466), note: 'la règle' },
    ],
  },

  /** Act 5: how far the writer stands from what they report. */
  distance: {
    term: 'la distance',
    title: 'Le journaliste rapporte, il ne garantit pas',
    body: "Le conditionnel, « il semblerait que », « prétendument », « à en croire », des guillemets autour d’un mot : ces marques disent que l’auteur rapporte une information sans la prendre à son compte. Le verbe choisi compte aussi : « reconnaître » n’est pas « prétendre ». EN: These markers show the writer reports a claim without endorsing it.",
    examples: [
      { itemId: E(1470), note: 'le conditionnel de distance' },
      { itemId: E(1472), note: 'reconnaît, et des guillemets' },
      { itemId: E(1473), note: 'prétendument : le journaliste doute' },
    ],
  },

  /** Act 6: saying the opposite. */
  ironie: {
    term: 'l’ironie',
    title: 'Dire le contraire pour critiquer',
    body: "L’ironie dit le contraire de ce qu’elle pense : « quelle bonne nouvelle » pour une mauvaise, « bravo » pour un échec. On la repère au contexte, aux guillemets, à l’exagération, à une comparaison absurde. Prise au mot, elle te fait comprendre l’inverse du texte. EN: Irony says the opposite of what it means; read literally, it flips the text’s stance.",
    examples: [
      { itemId: E(1494), note: 'une antiphrase' },
      { itemId: E(1497), note: 'des guillemets ironiques' },
      { itemId: E(1501), note: 'la règle' },
    ],
  },

  /** Act 7: who gains. */
  interet: {
    term: 'l’intérêt',
    title: 'À qui profite le texte',
    body: "Un communiqué parle au nom de l’entreprise, une publicité veut vendre, une tribune défend souvent la cause de celui qui la signe. Cela ne rend pas le texte faux : cela te dit quels mots vérifier et ce qui risque de manquer. EN: Knowing who gains does not make a text false; it tells you what to check and what may be missing.",
    examples: [
      { itemId: E(1402), note: 'une étude payée par un fabricant' },
      { itemId: E(1526), note: 'une suppression présentée comme un progrès' },
      { itemId: E(1594), note: 'la phrase de ta réponse critique' },
    ],
  },

  /** Act 8: a fact, an opinion, and the reading of a fact. */
  interpreter: {
    term: 'interpréter',
    title: 'Relier des faits à une cause',
    body: "Un fait se vérifie ; une opinion est un jugement ; une interprétation relie des faits à une cause ou à un sens. « Le chômage a baissé » est un fait ; « la réforme fonctionne » en est une interprétation, qu’on peut discuter avec d’autres faits. EN: An interpretation links facts to a cause; it can be argued with, unlike a fact.",
    examples: [
      { itemId: E(1538), note: 'un fait' },
      { itemId: E(1539), note: 'son interprétation' },
      { itemId: E(1554), note: 'la phrase qui sépare les deux' },
    ],
  },

  /** Act 10: the writer's stance, proved by the text. */
  position: {
    term: 'la position',
    title: 'Ce que pense l’auteur, et comment tu le sais',
    body: "La position de l’auteur, c’est son jugement sur le sujet : pour, contre, pour avec des réserves. À l’examen, elle se prouve toujours par un mot du texte : un adjectif, une concession, un connecteur, une image. EN: The writer’s stance must always be proved with a word from the text.",
    examples: [
      { itemId: E(1578), note: 'pour l’objectif, contre le moyen' },
      { itemId: E(1579), note: 'le mot qui le prouve' },
      { itemId: E(1595), note: 'le ton de la tribune' },
    ],
  },

  /** Act 9: two texts side by side. */
  confronter: {
    term: 'confronter',
    title: 'Deux textes, un sujet',
    body: "Confronter deux textes, c’est chercher d’abord les faits qu’ils partagent, puis ce qu’ils en tirent. Deux auteurs peuvent citer le même chiffre et arriver à deux conclusions opposées. Regarde aussi ce que chacun passe sous silence. EN: Compare the shared facts first, then what each text draws from them and leaves out.",
    examples: [
      { itemId: E(1560), note: 'les mêmes chiffres, deux conclusions' },
      { itemId: E(1567), note: 'la règle' },
      { itemId: E(1565), note: 'ce que le blog ne dit pas' },
    ],
  },

  /** Acts 10 and 11: the quotation that proves. */
  citation: {
    term: 'la citation',
    title: 'La phrase qui prouve',
    body: "Une réponse critique ne se contente pas d’affirmer : elle cite. Une citation courte, entre guillemets, montre au lecteur où tu as vu la thèse, la preuve fragile ou le ton. Choisis trois ou quatre mots, pas un paragraphe. EN: A critical response quotes a few words from the text as proof of what it says.",
    examples: [
      { itemId: E(1580), note: 'le réflexe de l’examen' },
      { itemId: E(1575), note: 'la consigne du DELF' },
      { itemId: E(1598), note: 'la règle de ta réponse critique' },
    ],
  },
};
