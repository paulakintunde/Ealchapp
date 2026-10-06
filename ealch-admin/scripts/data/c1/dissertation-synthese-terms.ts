// c1.10.l1 « Dissertation et synthèse » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6 (labels joined, plus 2 per separator). Labels here run
// 8 to 13 characters; the widest trio the lesson uses is asserted in the
// scratch check.
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// AN ESSAY GLOSSARY NAMES WHAT THE LESSON ADDS PAST b2.23: the tension and
// the paradox, the terms of the subject, the problématique as a tension, the
// analytical and comparative plans, the transition-bilan, the earned
// ouverture, the synthèse, rewording, the dossier and the genre.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './dissertation-synthese-corpus.ts';

export const DISSERTATION_TERMS: Record<string, LessonTerm> = {
  /** Every act: the lesson's one idea. */
  tension: {
    term: 'la tension',
    title: 'La tension d’un sujet',
    body: 'Deux idées vraies toutes les deux, qui tirent en sens contraire : chaque machine fait gagner du temps, et nous en manquons de plus en plus. Tant que tu n’as pas trouvé cette tension, tu n’as qu’un thème ; quand tu la tiens, ton plan n’a plus qu’à la déplier. EN: Two true ideas pulling against each other; once you have it, your plan only has to unfold it.',
    examples: [
      { itemId: E(1606), note: 'la tension du sujet sur le temps' },
      { itemId: E(1604), note: 'la règle de la leçon' },
      { itemId: E(1639), note: 'le test : deux réponses sérieuses' },
    ],
  },

  /** Act 3: the sharpest kind of tension. */
  paradoxe: {
    term: 'le paradoxe',
    title: 'Le paradoxe',
    body: 'Une tension poussée au bout : ce qui devait produire un effet produit aussi son contraire. Le confort devait nous libérer et nous rend dépendants. Un paradoxe ne se tranche pas en deux ; on le déplie, puis on cherche à quelles conditions il se dénoue. EN: A tension pushed to the limit: something produces its own opposite. You unfold it, then look for the conditions under which it resolves.',
    examples: [
      { itemId: E(1628), note: 'ce qui libère finit par attacher' },
      { itemId: E(1630), note: 'la problématique en paradoxe' },
    ],
  },

  /** Act 2: defining the subject's words. */
  termes: {
    term: 'les termes',
    title: 'Les termes du sujet',
    body: 'Chaque mot du sujet, y compris les petits : « encore », « seulement », « faut-il », « nos ». Les définir n’est pas recopier le dictionnaire : c’est chercher le sens qui fait problème, et l’endroit où deux définitions se heurtent. C’est là que naît la tension. EN: Every word of the subject, small ones included; defining them means finding where two meanings clash.',
    examples: [
      { itemId: E(1614), note: 'un petit mot qui change tout' },
      { itemId: E(1612), note: 'définir, c’est commencer à répondre' },
      { itemId: 'fr.b2.universite.1031', note: 'ce que le B2 te demandait déjà' },
    ],
  },

  /** Act 3: the problématique at C1. */
  problematique: {
    term: 'problématique',
    title: 'La problématique, au C1',
    body: 'Au B2, c’était la question que ton texte allait trancher. Au C1, c’est une tension mise en question : deux idées vraies face à face, formulées de façon à recevoir deux réponses sérieuses. Ce n’est ni un thème (« la problématique du confort »), ni une liste de problèmes, ni le sujet recopié. EN: At C1, a tension put as a question that can receive two serious answers; not a theme, not a list of problems, not the subject copied out.',
    examples: [
      { itemId: E(1632), note: 'ni un thème ni un problème' },
      { itemId: E(1631), note: 'une problématique en « dans quelle mesure »' },
      { itemId: 'fr.b2.opinions-et-avis.1723', note: 'le mot, au B2' },
    ],
  },

  /** Act 4. */
  analytique: {
    term: 'analytique',
    title: 'Le plan analytique',
    body: 'Il explique un phénomène avant de le juger : le constat, puis les causes rangées de la plus visible à la plus profonde, puis les enjeux. Il convient aux sujets en « pourquoi » ou « comment l’expliquer ». Une liste de causes sans hiérarchie n’est pas encore une analyse. EN: It explains before judging: facts, causes ranked from surface to depth, then what is at stake.',
    examples: [
      { itemId: E(1642), note: 'les trois temps' },
      { itemId: E(1652), note: 'ranger les causes' },
    ],
  },

  /** Act 5. */
  comparatif: {
    term: 'comparatif',
    title: 'Le plan comparatif',
    body: 'Il confronte deux réalités sur les mêmes critères, un critère par partie : le temps, l’espace, les liens. Un bloc sur l’une puis un bloc sur l’autre ne compare rien, il juxtapose. La conclusion dit où les deux réalités se séparent vraiment. EN: Two realities set against the same criteria, one criterion per part, never one block after the other.',
    examples: [
      { itemId: E(1656), note: 'critère par critère' },
      { itemId: E(1666), note: 'ce que cherche la comparaison' },
    ],
  },

  /** Act 7. */
  transition: {
    term: 'la transition',
    title: 'La transition-bilan',
    body: 'La phrase qui ferme une partie et ouvre la suivante. Au C1, elle ne se contente pas d’annoncer : elle dit ce que la partie a établi, puis la limite, l’objection ou la question qui oblige à aller plus loin. Elle résume, puis relance. EN: It says what the part established, then the limit or question that forces the next step: it sums up, then moves on.',
    examples: [
      { itemId: E(1689), note: 'la règle' },
      { itemId: E(1691), note: 'un bilan, puis une question' },
      { itemId: 'fr.b2.opinions-et-avis.1735', note: 'la transition du B2' },
    ],
  },

  /** Act 8. */
  ouverture: {
    term: 'l’ouverture',
    title: 'L’ouverture qui se mérite',
    body: 'La dernière phrase de la conclusion. Elle prolonge la réponse que tu viens de donner, la déplace à une autre échelle ou l’élargit à un domaine voisin. Elle ne recommence pas l’essai, n’ajoute pas d’argument et ne se réfugie pas dans une formule creuse comme « seul l’avenir nous le dira ». EN: It extends, shifts or widens the answer you just gave; it is not a new argument nor an empty formula.',
    examples: [
      { itemId: E(1706), note: 'prolonger' },
      { itemId: E(1707), note: 'déplacer' },
      { itemId: E(1708), note: 'élargir' },
    ],
  },

  /** Acts 9 and 10. */
  synthese: {
    term: 'la synthèse',
    title: 'La synthèse de documents',
    body: 'Un texte nouveau qui rend compte de plusieurs documents, organisé par idées et non document par document. Tu y écris avec tes mots, sans ton avis et sans idée extérieure au dossier, dans la fourchette de mots que donne la consigne. Rien à voir avec la troisième partie d’un plan dialectique. EN: One new text reporting several documents, organised by ideas, in your own words, without opinion or outside ideas.',
    examples: [
      { itemId: E(1729), note: 'la règle' },
      { itemId: E(1717), note: 'classer les idées, pas les documents' },
      { itemId: 'fr.c1.discours-dexamen.1236', note: 'ce que la synthèse orale t’a appris' },
    ],
  },

  /** Act 10. */
  reformuler: {
    term: 'reformuler',
    title: 'Reformuler',
    body: 'Redire une idée avec tes propres mots, sans en changer le sens ni la force. Tu peux garder un mot-clé du document ; tu ne recopies jamais une phrase entière. Reformuler prouve que tu as compris. EN: Saying an idea again in your own words, keeping its meaning; a key word may stay, a whole sentence never.',
    examples: [
      { itemId: E(1730), note: 'avec tes propres mots' },
      { itemId: E(1731), note: 'le mot-clé, pas la phrase' },
      { itemId: E(1735), note: 'une idée reformulée' },
    ],
  },

  /** Acts 9 to 12. */
  dossier: {
    term: 'le dossier',
    title: 'Le dossier',
    body: 'Deux, trois documents ou plus sur un même thème : un article, une tribune, un témoignage, des chiffres. Pour une synthèse, tu en rends compte ; pour un essai, tu t’appuies dessus pour défendre ta position, en citant ce qui sert ton idée sans le recopier. EN: A set of documents on one theme; a synthesis reports it, an essay draws on it without copying.',
    examples: [
      { itemId: E(1716), note: 'ce qu’ils ont en commun' },
      { itemId: E(1755), note: 'citer pour appuyer' },
    ],
  },

  /** Acts 11 and 12. */
  genre: {
    term: 'le genre',
    title: 'Le genre de l’essai',
    body: 'Lettre ouverte, article, contribution à une consultation : l’essai argumenté prend une forme réelle, avec un destinataire, une situation et un but. Le genre décide du ton, de l’adresse et de la fin. Une lettre au maire ne s’écrit pas comme une dissertation scolaire. EN: A real form with an addressee, a situation and an aim; the genre decides the tone, the address and the ending.',
    examples: [
      { itemId: 'fr.c1.strategies-de-comprehension.2084', note: 'le genre de ta mission' },
      { itemId: E(1746), note: 'destinataire, situation, but' },
      { itemId: E(1753), note: 'le genre décide du ton' },
    ],
  },
};
