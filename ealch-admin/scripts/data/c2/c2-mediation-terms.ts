// c2.06.l1 « La médiation linguistique » — the lesson glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6,
// checked by hand per section, as the C1 playbook requires.
//
// Every term defined here is surfaced by at least one section's `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './c2-mediation-corpus.ts';

export const MEDIATION_TERMS: Record<string, LessonTerm> = {
  /** Act 1: the CEFR skill this whole lesson is about. */
  mediation: {
    term: 'la médiation linguistique',
    title: 'Reformuler pour un public nommé',
    body: "Médier, c’est faire passer le même sens par une porte d’une autre taille : plus simple, plus courte, mieux nommée pour qui l’attend de l’autre côté. L’objet ne rétrécit jamais ; seule la porte change de taille. EN: Mediating means carrying the same meaning through a differently sized door: simpler, shorter, better named for whoever is waiting on the other side; the object never shrinks, only the door.",
    examples: [
      { itemId: E(2404), note: 'deux lecteurs, deux portes' },
      { itemId: E(2405), note: 'le mot qui nomme cette notion' },
    ],
  },

  /** Act 2: the three levers, kept as one term since they always move
   *  together (act 5's whole point). */
  leviers: {
    term: 'les trois leviers',
    title: 'Le registre, la longueur, le terme technique',
    body: "Trois leviers, jamais un seul : le registre (les mots), la longueur de la phrase (sa forme), et ce que devient le terme technique (gardé et expliqué, remplacé par une image, ou généralisé). Toucher un seul levier laisse l’autre moitié du travail à faire. EN: Three levers, never just one: register, sentence length, and what happens to the technical term; moving only one leaves the other half of the job undone.",
    examples: [
      { itemId: E(2424), note: 'les trois leviers nommés ensemble' },
      { itemId: E(2415), note: 'le registre' },
      { itemId: E(2418), note: 'la longueur de phrase' },
    ],
  },

  /** Act 5: the central C2 trap. */
  fausseSimplification: {
    term: 'la fausse simplification',
    title: 'Un seul levier ne suffit jamais',
    body: "Simplifier les mots sans raccourcir une phrase à cinq étages, ou raccourcir les phrases sans jamais expliquer un terme technique, n’est pas médier : c’est l’original, à peine déplacé. La vraie médiation touche les deux leviers à la fois. EN: Simplifying the words without shortening a five-storey sentence, or shortening the sentences without ever explaining a technical term, is not mediation: it is the original, barely moved. Real mediation touches both levers at once.",
    examples: [
      { itemId: E(2450), note: 'les mots simplifiés, la phrase intacte' },
      { itemId: E(2451), note: 'les phrases coupées, le jargon intact' },
      { itemId: E(2453), note: 'le mot qui nomme ce piège' },
    ],
  },

  /** Act 4 and 6: never add, never omit, never condescend. */
  fidelite: {
    term: 'la fidélité',
    title: 'Ne rien perdre, ne rien ajouter',
    body: "Une médiation fidèle garde le fait qui sert à agir (le délai, le risque, la cause), n’invente jamais une certitude que la source ne portait pas, et n’adopte jamais un ton condescendant envers le lecteur. EN: Faithful mediation keeps the fact needed to act (the deadline, the risk, the cause), never invents a certainty the source never made, and never talks down to the reader.",
    examples: [
      { itemId: E(2445), note: 'ce qui ne bouge jamais' },
      { itemId: E(2446), note: 'simple n’est pas condescendant' },
      { itemId: E(2447), note: 'jamais une certitude inventée' },
    ],
  },

  /** Act 7: the three named audiences this lesson actually practises. */
  publicNomme: {
    term: 'un public nommé',
    title: 'Un enfant, un profane, un collègue',
    body: "La médiation se pratique toujours pour UN public précis, jamais pour « le lecteur » en général : un enfant, qui a droit à l’essentiel en mots simples ; un profane adulte, qui mérite une explication claire sans condescendance ; un collègue compétent en français mais non spécialiste, qui se perd dans le jargon sans avoir besoin qu’on lui parle comme à un enfant. EN: Mediation is always practised for ONE precise audience, never a generic reader: a child, an adult layperson, or a competent non-specialist colleague, each needing a different adjustment, never the same one.",
    examples: [
      { itemId: E(2406), note: 'le mot qui nomme cette notion' },
      { itemId: E(2464), note: 'un enfant' },
      { itemId: E(2463), note: 'un public âgé' },
      { itemId: E(2462), note: 'un collègue compétent' },
    ],
  },
};
