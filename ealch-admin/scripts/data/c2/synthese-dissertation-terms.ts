// c2.10.l1 « La synthèse experte et la dissertation avancée » — the lesson
// glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 14 to 36 characters (fideliteserree's label is
// the longest, at 36, one under the 37-character line); every section that
// declares it does so alone, never combined with a second chip, so it still
// fits (checked by hand per section, as the B1+/C1/C2 playbooks require;
// there is no validator for the reverse of "named key has no definition").
//
// Every term defined here is surfaced by at least one section's `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson; there is no
// validator for an unsurfaced term). None of these six terms redefines a
// concept c1.10 already owns (problématique, plan analytique, plan
// comparatif, the synthèse's own rules): each one names a piece of the
// FUSED genre c1.10 never asks for.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './synthese-dissertation-corpus.ts';

export const SYNTHESE_DISSERTATION_TERMS: Record<string, LessonTerm> = {
  /** Act 1: the fused genre itself, against c1.10's two separate exercises. */
  syntheseargumentee: {
    term: 'la synthèse argumentée',
    title: 'Peser les sources, puis trancher, dans le même texte',
    body: 'Une synthèse argumentée n’est ni une synthèse neutre ni un essai d’opinion séparé : c’est un seul texte qui pèse plusieurs sources denses ET qui tranche une position personnelle, les deux à la fois, jamais sur deux feuilles différentes. EN: An argued synthesis is neither a neutral synthesis nor a separate opinion essay: it is one single text that weighs several dense sources AND decides a personal position, both at once, never on two separate sheets.',
    examples: [
      { itemId: E(2202), note: 'peser, puis trancher, dans le même texte' },
      { itemId: E(2208), note: 'ce que la leçon 10 du C1 enseignait séparément' },
      { itemId: E(2243), note: 'un seul texte qui avance d’un seul mouvement' },
    ],
  },

  /** Act 2: reading three dense documents by shared stake, not one by one. */
  lireparenjeu: {
    term: 'lire par enjeu',
    title: 'Chercher la question commune, jamais un résumé par document',
    body: 'Lire un dossier dense par enjeu, c’est chercher ce qui, dans les trois documents, répond à la même question, au lieu de résumer le document 1, puis le document 2, puis le document 3 séparément. EN: Reading a dense dossier by shared stake means looking for what, across all three documents, answers the same question, instead of summarising document 1, then 2, then 3 separately.',
    examples: [
      { itemId: E(2216), note: 'chercher ce qui répond à la même question' },
      { itemId: E(2217), note: 'la question commune, pas pour ou contre' },
      { itemId: E(2228), note: 'une seule tension à tenir, pas trois résumés' },
    ],
  },

  /** Act 3: the sentence-level fusion connector. */
  phrasefondue: {
    term: 'la phrase fondue',
    title: 'Citer un document ET trancher, dans la même proposition',
    body: 'Une phrase fondue cite un document et prend position dans la même proposition, reliées par un connecteur comme « ce qui m’amène à » ou « ce qui justifie ». Sans ce connecteur, la citation et l’avis restent deux phrases voisines, jamais une seule. EN: A fused sentence cites a document and takes a position in the same clause, linked by a connector like "which leads me to" or "which justifies". Without that connector, the citation and the opinion stay two neighbouring sentences, never one.',
    examples: [
      { itemId: E(2229), note: 'une phrase qui cite ET tranche' },
      { itemId: E(2231), note: 'la règle de la phrase fondue' },
      { itemId: E(2241), note: 'le connecteur qui porte tout le poids' },
    ],
  },

  /** Act 4: the qualifying statistic that must survive compression. */
  chiffrequinuance: {
    term: 'le chiffre qui nuance',
    title: 'Le détail qui empêche de lire une moyenne comme un absolu',
    body: 'Le chiffre qui nuance est la statistique ou la clause qui contredit, même en partie, l’affirmation principale d’un document, comme le gain qui tombe sous un point pour les salariés les plus récents. Sous une contrainte de mots, c’est la première phrase qu’une compression paresseuse sacrifie. EN: The qualifying figure is the statistic or clause that partly contradicts a document’s main claim, like the gain falling under one point for the most recently hired. Under a word-count constraint, it is the first sentence a lazy compression sacrifices.',
    examples: [
      { itemId: E(2211), note: 'le gain qui tombe sous un point' },
      { itemId: E(2245), note: 'une compression qui garde la nuance' },
      { itemId: E(2254), note: 'pourquoi ce chiffre n’est pas un détail' },
    ],
  },

  /** Act 5: fidelity extended to statistical nuance, a hard line. */
  fideliteserree: {
    term: 'la fidélité, même sous la contrainte',
    title: 'Trois gestes qu’aucun nombre de mots ne justifie',
    body: 'Inventer un chiffre, faire dire à un document le contraire de ce qu’il dit, ajouter une idée absente des trois sources : ces trois gestes restent interdits quelle que soit la contrainte de mots. La fidélité ne se négocie jamais contre la brièveté. EN: Inventing a figure, making a document say the opposite of what it says, adding an idea absent from all three sources: these three moves stay forbidden whatever the word-count constraint. Fidelity is never traded against brevity.',
    examples: [
      { itemId: E(2259), note: 'les trois gestes interdits' },
      { itemId: E(2268), note: 'attribuer chaque affirmation à son document' },
      { itemId: E(2270), note: 'la fidélité ne se négocie pas' },
    ],
  },

  /** Act 7: the besetting trap, a paragraph that only weighs or only decides. */
  moitiemanquante: {
    term: 'la moitié manquante',
    title: 'Peser sans trancher, ou trancher sans peser',
    body: 'La moitié manquante est le piège central de ce genre : un paragraphe qui pèse longuement les trois documents sans jamais décider, ou qui tranche une opinion sans jamais s’appuyer sur un seul document. Une copie peut sembler complète en ne tenant qu’une des deux moitiés. EN: The missing half is this genre’s central trap: a paragraph that weighs the three documents at length without ever deciding, or that states an opinion without ever leaning on a single document. An answer can look complete while holding only one of the two halves.',
    examples: [
      { itemId: E(2283), note: 'peser, sans jamais trancher' },
      { itemId: E(2284), note: 'trancher, sans jamais peser' },
      { itemId: E(2291), note: 'une copie qui pèse beaucoup, et qui semble complète' },
    ],
  },
};
