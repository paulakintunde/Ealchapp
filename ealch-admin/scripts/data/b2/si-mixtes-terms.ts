// b2.04.l1 « Les si mixtes »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 11 characters, so any three fit (33 at most).
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, PF, OA } from './si-mixtes-corpus.ts';

export const SI_MIXTES_TERMS: Record<string, LessonTerm> = {
  horloge: {
    term: 'l’horloge',
    title: 'Une horloge par moitié',
    body: "Chaque moitié d'une phrase avec si a son propre moment. Tu te demandes quand la condition se joue, puis quand le résultat se voit, et chaque réponse choisit le temps de sa moitié. EN: Each half of a si sentence has its own moment, and that moment picks its tense.",
    examples: [
      { itemId: E(1600), note: 'la cause hier, le poste aujourd’hui' },
      { itemId: E(1602), note: 'l’anglais aujourd’hui, le poste hier' },
      { itemId: E(1668), note: 'les deux points sur la ligne' },
    ],
  },

  mixte: {
    term: 'le si mixte',
    title: 'Deux moitiés venues de deux paires',
    body: "Une phrase mixte prend sa condition dans une paire et son résultat dans une autre : si + plus-que-parfait avec le conditionnel présent, ou si + imparfait avec le conditionnel passé. EN: A mixed sentence takes its condition from one pair and its result from another.",
    examples: [
      { itemId: E(1616), note: 'passé, puis présent' },
      { itemId: E(1617), note: 'présent, puis passé' },
      { itemId: E(1627), note: 'la règle' },
    ],
  },

  cause: {
    term: 'la cause',
    title: 'Une cause qui date d’hier',
    body: "Quand la condition appartient au passé (une décision, un oubli, un départ), la moitié si prend le plus-que-parfait : si j'avais fini, si tu étais parti. EN: A condition that belongs to the past takes the pluperfect after si.",
    examples: [
      { itemId: E(1629), note: 'un diplôme abandonné il y a cinq ans' },
      { itemId: E(1631), note: 'une nuit sans sommeil' },
      { itemId: E(1636), note: 'un retard de train' },
    ],
  },

  resultat: {
    term: 'le résultat',
    title: 'Un résultat qui se voit maintenant',
    body: "Si le résultat se voit aujourd'hui, ou se verra demain, il prend le conditionnel présent, même quand sa cause est ancienne : je serais moins fatigué, il serait avocat. EN: A result that shows now or later takes the present conditional, even after a past cause.",
    examples: [
      { itemId: E(1631), note: 'fatigué ce matin' },
      { itemId: E(1674), note: 'la course de dimanche : demain aussi' },
      { itemId: E(1643), note: 'elle serait avec nous, là, maintenant' },
    ],
  },

  trait: {
    term: 'le trait',
    title: 'Un trait qui dure',
    body: "Un trait de caractère, une capacité ou un fait qui dure encore se dit à l'imparfait après si, même devant un résultat passé : si j'étais plus prudent, si tu parlais espagnol. EN: A lasting trait, ability or fact takes the imparfait after si, even before a past result.",
    examples: [
      { itemId: E(1647), note: 'la prudence : ta nature' },
      { itemId: E(1648), note: 'une langue que tu ne parles toujours pas' },
      { itemId: E(1658), note: 'nature ou moment : la carte' },
    ],
  },

  marqueur: {
    term: 'le marqueur',
    title: 'Le mot qui règle l’horloge',
    body: "Aujourd'hui, maintenant, encore, cette année placent le résultat dans le présent. Hier, ce matin, l'an dernier, à l'époque le placent dans le passé. Le marqueur ne décide pas à ta place : il confirme le moment que tu as choisi. EN: A time marker confirms the moment of its half; it does not choose it for you.",
    examples: [
      { itemId: E(1679), note: 'à l’époque, puis maintenant' },
      { itemId: E(1681), note: 'hier, puis aujourd’hui' },
      { itemId: E(1687), note: 'la liste du présent' },
    ],
  },

  regret: {
    term: 'le regret',
    title: 'Regretter, reprocher, conseiller trop tard',
    body: "La phrase mixte sert à regretter (si j'avais osé, je serais musicien), à reprocher (si tu m'avais écouté, tu ne serais pas là) et à conseiller après coup (si j'étais toi, j'aurais déjà appelé). EN: The mixed sentence regrets, reproaches and gives advice that comes too late.",
    examples: [
      { itemId: E(1702), note: 'un regret' },
      { itemId: E(1694), note: 'un reproche' },
      { itemId: E(1695), note: 'un conseil qui arrive tard' },
    ],
  },

  argument: {
    term: 'l’argument',
    title: 'Argumenter sur une décision passée',
    body: "Dans un texte d'opinion, la phrase mixte relie une décision d'hier à la situation d'aujourd'hui. Comme un passé imaginé ne se prouve pas, tu la nuances : sans doute, probablement. EN: In an argument the mixed sentence links yesterday's decision to today's situation, with a hedge.",
    examples: [
      { itemId: E(1710), note: 'le tramway et les bouchons' },
      { itemId: E(1719), note: 'avec sans doute' },
      { itemId: E(1722), note: 'l’objection, dans la même forme' },
    ],
  },

  aucasou: {
    term: 'au cas où',
    title: 'Au cas où et le conditionnel',
    body: "Au cas où prépare un imprévu et prend le conditionnel : au cas où il pleuvrait. Tu le reconnais et tu le comprends ; ce n'est pas une condition avec si. EN: Au cas où prepares for the unexpected and takes the conditional.",
    examples: [
      { itemId: E(1724), note: 'le parapluie, par précaution' },
      { itemId: E(1726), note: 'un numéro gardé' },
      { itemId: 'fr.b1.conseils-et-suggestions.1122', note: 'tout seul, en fin de phrase' },
    ],
  },

  acondition: {
    term: 'à condition',
    title: 'À condition que et le subjonctif',
    body: "À condition que fixe une exigence et prend le subjonctif : à condition que tu viennes. Avec un seul sujet, à condition de et l'infinitif. EN: À condition que lays down a requirement and takes the subjunctive; one subject takes à condition de.",
    examples: [
      { itemId: E(1728), note: 'une exigence pour le retour' },
      { itemId: OA(1341), note: 'de la leçon 15 du B1' },
      { itemId: E(1730), note: 'à condition de : un seul sujet' },
    ],
  },

  siJaurais: {
    term: 'si j’aurais',
    title: 'La faute la plus célèbre',
    body: "Après si, jamais de conditionnel, ni présent ni passé. Si j'aurais su est faux, si j'avais su est juste. Le conditionnel vit dans l'autre moitié. EN: Never a conditional after si: si j'avais su, never si j'aurais su.",
    examples: [
      { itemId: E(1743), note: 'la règle' },
      { itemId: PF(1236), note: 'la même règle, à la leçon 10 du B1' },
      { itemId: E(1737), note: 'la phrase corrigée' },
    ],
  },
};
