// c1.12.l1 « Le vocabulaire des idées » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters; no section puts « la
// définition » (13) beside two other long labels.
//
// C1 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ». Examples cite corpus rows by id and never
// restate the French.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './vocabulaire-idees-corpus.ts';

export const VOCABULAIRE_IDEES_TERMS: Record<string, LessonTerm> = {
  distinguer: {
    term: 'distinguer',
    title: 'Deux mots voisins, deux idées',
    body: 'Quand deux mots se ressemblent, cherche la question à laquelle chacun répond, puis nomme ce qui les sépare. Le mot juste vient ensuite, presque tout seul. EN: When two words look alike, find the question each one answers and name what separates them.',
    examples: [
      { itemId: E(1003), note: 'la règle de la leçon' },
      { itemId: E(1009), note: 'distinguer deux questions' },
      { itemId: E(1011), note: 'la distinction fait avancer le débat' },
    ],
  },

  expliquer: {
    term: 'expliquer',
    title: 'Expliquer ou justifier',
    body: 'Expliquer, c’est dire pourquoi une chose est arrivée, par ses causes. Justifier, c’est montrer qu’elle était légitime. On peut expliquer un geste sans le justifier, et sans l’excuser. EN: To explain is to give the causes; to justify is to show something was legitimate.',
    examples: [
      { itemId: E(1023), note: 'la règle des deux questions' },
      { itemId: E(1020), note: 'expliquer n’est pas excuser' },
      { itemId: E(1022), note: 'rendre compte de : soutenu' },
    ],
  },

  cause: {
    term: 'la cause',
    title: 'Cause, raison, motif, prétexte',
    body: 'Une cause produit un effet : un phénomène a des causes. Une raison justifie un choix : une personne a des raisons. Le motif est la raison d’agir déclarée ; le prétexte, une raison donnée à la place de la vraie. EN: A cause produces; a reason justifies; a motive is declared; a pretext hides the real reason.',
    examples: [
      { itemId: E(1035), note: 'produire ou justifier' },
      { itemId: E(1030), note: 'la cause d’un phénomène' },
      { itemId: E(1033), note: 'un prétexte' },
    ],
  },

  croyance: {
    term: 'la croyance',
    title: 'Croire, savoir, connaître',
    body: 'On peut croire une chose fausse ; on ne sait que ce qui est vrai, et l’on doit pouvoir le montrer. Une conviction dit ta certitude, pas la vérité. La connaissance, ce sont aussi les savoirs (ses connaissances) et une personne qu’on connaît (une connaissance). EN: You can believe what is false; you can only know what is true.',
    examples: [
      { itemId: E(1044), note: 'croire le faux, savoir le vrai' },
      { itemId: E(1043), note: 'je crois, mais je n’en sais rien' },
      { itemId: E(1050), note: 'une conviction n’est pas une preuve' },
    ],
  },

  contingent: {
    term: 'contingent',
    title: 'Le nécessaire et le contingent',
    body: 'Le nécessaire ne peut pas ne pas être. Le contingent aurait pu ne pas être, ou être autrement. Le fortuit arrive par hasard. Dans la vie courante, « nécessaire » veut aussi dire « dont on a besoin ». EN: The necessary cannot fail to be; the contingent might not have been.',
    examples: [
      { itemId: E(1061), note: 'la règle' },
      { itemId: E(1057), note: 'un fait contingent' },
      { itemId: E(1062), note: 'le sens courant de nécessaire' },
    ],
  },

  condition: {
    term: 'la condition',
    title: 'Nécessaire ou suffisante',
    body: 'Une condition nécessaire : sans elle, rien ne se passe, mais avec elle, rien n’est encore sûr. Une condition suffisante : dès qu’elle est remplie, la chose arrive. « Si et seulement si » dit les deux à la fois. EN: Necessary: without it, nothing; sufficient: with it, it happens.',
    examples: [
      { itemId: E(1072), note: 'la règle' },
      { itemId: E(1067), note: 'nécessaire, pas suffisant' },
      { itemId: E(1071), note: 'si et seulement si' },
    ],
  },

  premisse: {
    term: 'la prémisse',
    title: 'Prémisses, conclusion, validité',
    body: 'Les prémisses sont les points de départ d’un raisonnement ; la conclusion en découle, ou n’en découle pas. Un raisonnement valide a la bonne forme ; il ne rend la conclusion vraie que si les prémisses le sont. EN: Premises are the starting points; validity is about form, truth about content.',
    examples: [
      { itemId: E(1087), note: 'la forme et le contenu' },
      { itemId: E(1082), note: 'valide, et pourtant faux' },
      { itemId: E(1088), note: 'une conclusion qui ne découle pas' },
    ],
  },

  sophisme: {
    term: 'le sophisme',
    title: 'Le sophisme et ses cousins',
    body: 'Un sophisme raisonne mal pour tromper ; un paralogisme raisonne mal de bonne foi. La pétition de principe suppose ce qu’elle veut prouver ; le cercle vicieux prouve A par B et B par A. EN: A sophism deceives; a paralogism is an error made in good faith; begging the question assumes the conclusion.',
    examples: [
      { itemId: E(1093), note: 'l’intention fait la différence' },
      { itemId: E(1094), note: 'une pétition de principe' },
      { itemId: E(1095), note: 'un cercle vicieux' },
    ],
  },

  apriori: {
    term: 'a priori',
    title: 'A priori, a posteriori',
    body: 'En philosophie, a priori : avant l’expérience, sans elle ; a posteriori : à partir d’elle. Dans la conversation, a priori veut souvent dire « à première vue », et un a priori, invariable, est un préjugé. EN: Before or from experience in philosophy; « at first sight » and « a preconception » in everyday French.',
    examples: [
      { itemId: E(1109), note: 'les deux sens savants' },
      { itemId: E(1104), note: 'a priori : en principe' },
      { itemId: E(1105), note: 'des a priori : des préjugés' },
    ],
  },

  definir: {
    term: 'la définition',
    title: 'Définir et distinguer',
    body: 'On établit une distinction entre deux notions, on distingue A de B, on confond A et B ou A avec B. Au sens strict, on prend le mot dans sa définition exacte ; au sens large, on l’étend aux cas voisins. EN: The verbs and phrases that define and separate concepts.',
    examples: [
      { itemId: E(1122), note: 'les prépositions' },
      { itemId: E(1117), note: 'au sens strict, en cuisine' },
      { itemId: E(1119), note: 'par définition' },
    ],
  },

  preuve: {
    term: 'la preuve',
    title: 'Prouver, confirmer, réfuter',
    body: 'On apporte la preuve d’une chose. Une observation confirme ou infirme une hypothèse ; un second témoin corrobore un premier. Réfuter, c’est montrer qu’un argument est faux ; nier, c’est seulement dire non. Une évidence n’a pas besoin de preuve. EN: Prove, confirm or invalidate, corroborate, refute; une évidence is what is obvious, not « evidence ».',
    examples: [
      { itemId: E(1132), note: 'nier n’est pas réfuter' },
      { itemId: E(1129), note: 'infirmer une règle' },
      { itemId: E(1135), note: 'une évidence, pas evidence' },
    ],
  },
};
