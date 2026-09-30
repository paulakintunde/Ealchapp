// b2.33.l1 « Traduire sans calquer »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6. Labels run 8 to 13 characters; the widest trio the
// lesson uses is asserted under 37 by scratch/_b233-validate.mts.
//
// B2 LANGUAGE RULE: the body is natural B2 French, addressed as « tu », then
// ONE English line starting « EN: ».
//
// THE GLOSSARY NAMES THE TRANSLATOR'S TOOLS: what goes wrong (le calque, le
// faux ami, the construction, the expression), the four classic techniques
// (transposition, modulation, équivalence, étoffement), the small places
// where English shows through (les -ing, les petits mots, la typographie),
// and the two judgements that frame everything (le mot à mot, le registre).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './traduire-sans-calquer-corpus.ts';

export const TRADUIRE_SANS_CALQUER_TERMS: Record<string, LessonTerm> = {
  /** Act 1: the problem. */
  calque: {
    term: 'le calque',
    title: 'Des mots français, une pensée anglaise',
    body: 'Un calque traduit l’anglais mot par mot. Le résultat est fait de mots français, parfois même de phrases correctes, mais aucun francophone ne l’aurait écrit ainsi. Il y a des calques de mots, de phrases et d’expressions. EN: A calque is a word-for-word translation made of French words that no French speaker would have written.',
    examples: [
      { itemId: E(1801), note: 'la définition' },
      { itemId: E(1807), note: 'correct, mais pas naturel' },
      { itemId: E(1808), note: 'la règle de la leçon' },
    ],
  },

  /** Act 2: words. */
  fauxami: {
    term: 'faux ami',
    title: 'Le mot qui ressemble, et qui trompe',
    body: 'Un faux ami ressemble à un mot anglais mais n’a pas le même sens : prétendre, c’est affirmer ; faire semblant, c’est to pretend. Certains faux amis ont deux sens, dont un seul est juste : supporter veut d’abord dire tolérer. EN: A false friend looks like an English word but means something else.',
    examples: [
      { itemId: E(1824), note: 'to pretend : faire semblant' },
      { itemId: E(1814), note: 'supporter : tolérer' },
      { itemId: E(1835), note: 'la règle' },
    ],
  },

  /** Act 3: sentences. */
  construction: {
    term: 'construction',
    title: 'La phrase, construite à la française',
    body: 'Chaque langue construit ses phrases à sa façon. Le français ne laisse jamais une préposition seule en fin de phrase, ne met pas au passif la personne à qui l’on parle, et dit chercher quelque chose sans « pour ». EN: Each language builds its sentences its own way; translate into the French construction.',
    examples: [
      { itemId: E(1853), note: 'on m’a dit, pas j’ai été dit' },
      { itemId: E(1839), note: 'chercher, sans préposition' },
      { itemId: E(1845), note: 'les cinq premiers' },
    ],
  },

  /** Act 4: expressions. */
  expression: {
    term: 'expression',
    title: 'Une image par une image',
    body: 'Une expression ne se traduit pas mot à mot : on cherche l’expression française qui dit la même chose. It makes sense : ça a du sens. To take place : avoir lieu. Certaines expressions venues de l’anglais sont pourtant entrées dans l’usage, comme ce n’est pas ma tasse de thé. EN: Translate an expression by the French expression that means the same.',
    examples: [
      { itemId: E(1869), note: 'faire du sens, déconseillé' },
      { itemId: E(1855), note: 'avoir lieu' },
      { itemId: E(1879), note: 'les calques devenus français' },
    ],
  },

  /** Act 5. */
  transposition: {
    term: 'transposition',
    title: 'Changer la classe d’un mot',
    body: 'Transposer, c’est garder le sens en changeant la classe du mot : un adverbe devient un verbe (nearly : j’ai failli), un verbe devient un nom (as soon as he arrived : dès son arrivée). Le chassé-croisé en est un cas : swam across, traverser à la nage. EN: Transposition keeps the meaning and changes the word class.',
    examples: [
      { itemId: E(1880), note: 'le chassé-croisé' },
      { itemId: E(1888), note: 'nearly, devenu un verbe' },
      { itemId: E(1885), note: 'un verbe devenu un nom' },
    ],
  },

  /** Act 6. */
  modulation: {
    term: 'modulation',
    title: 'Voir la chose d’un autre côté',
    body: 'Moduler, c’est changer de point de vue sans changer le sens : it’s not uncommon devient c’est assez fréquent ; wet paint devient peinture fraîche. Le français dit souvent en positif ce que l’anglais dit en négatif. EN: Modulation changes the viewpoint, not the meaning.',
    examples: [
      { itemId: E(1898), note: 'du négatif au positif' },
      { itemId: E(1904), note: 'mouillée ou fraîche' },
      { itemId: E(1913), note: 'la règle' },
    ],
  },

  /** Act 6. */
  equivalence: {
    term: 'équivalence',
    title: 'La formule qui existe déjà',
    body: 'Pour un panneau, une formule ou une expression toute faite, on ne traduit pas : on met ce que le français dit déjà dans la même situation. No smoking : défense de fumer. Out of order : hors service. EN: Equivalence replaces a set phrase with the French one used in the same situation.',
    examples: [
      { itemId: E(1903), note: 'no smoking' },
      { itemId: E(1905), note: 'out of order' },
      { itemId: E(1914), note: 'la règle' },
    ],
  },

  /** Act 7. */
  etoffement: {
    term: 'étoffement',
    title: 'Ajouter les mots qu’il faut',
    body: 'Le français a souvent besoin de plus de mots que l’anglais. Une préposition anglaise devient un verbe (the path through the forest : le sentier qui traverse la forêt), et un verbe à particule devient un seul verbe choisi pour son sens. EN: French often needs more words: a preposition becomes a verb.',
    examples: [
      { itemId: E(1917), note: 'the path through' },
      { itemId: E(1918), note: 'à destination de' },
      { itemId: E(1932), note: 'les verbes à particule' },
    ],
  },

  /** Act 8. */
  ing: {
    term: 'les -ing',
    title: 'Un -ing, plusieurs français',
    body: 'Le -ing anglais n’a pas de traduction unique : un présent (I’m driving : je conduis), être en train de, un infinitif (being a volunteer : être bénévole), un gérondif, un participe passé de posture (sitting : assis), un nom (waiting room : salle d’attente). Demande-toi ce qu’il fait. EN: Ask what the -ing does, then choose the French form.',
    examples: [
      { itemId: E(1950), note: 'la règle' },
      { itemId: E(1939), note: 'une posture : assise' },
      { itemId: E(1943), note: 'un sujet : l’infinitif' },
    ],
  },

  /** Act 9. */
  petitsmots: {
    term: 'petits mots',
    title: 'Articles, possessifs, on',
    body: 'Les petits mots trahissent vite une traduction. Le français garde l’article pour parler en général (la vie est courte), enlève le possessif devant le corps quand on sait à qui il est (je me suis cassé le bras), et dit on pour le you de tout le monde. EN: Articles, possessives and on: where English shows through.',
    examples: [
      { itemId: E(1966), note: 'l’article du général' },
      { itemId: E(1965), note: 'le corps sans possessif' },
      { itemId: E(1967), note: 'le you de tout le monde' },
    ],
  },

  /** Act 10. */
  typo: {
    term: 'typographie',
    title: 'Chiffres, espaces et guillemets',
    body: 'Le français écrit 1,5 et 10 000, met une espace avant % et avant les deux-points, place le symbole de la monnaie après le nombre (27,50 $), écrit 20 h 30, les mois en minuscules et les citations entre « guillemets ». EN: Decimal comma, space for thousands, symbol after the number, French quotation marks.',
    examples: [
      { itemId: E(1978), note: 'décimales et milliers' },
      { itemId: E(1979), note: 'l’espace avant les deux-points' },
      { itemId: E(1971), note: 'l’heure' },
    ],
  },

  /** Act 11. */
  motamot: {
    term: 'mot à mot',
    title: 'Le calque et le bon mot à mot',
    body: 'Traduire mot à mot n’est pas une faute en soi. Si la phrase littérale est celle qu’un francophone aurait écrite, garde-la : je suis d’accord avec vous, toutes les deux minutes, réaliser un projet. Corriger ce qui est juste est la deuxième erreur du traducteur. EN: Keep the literal version when it is what a French speaker would write.',
    examples: [
      { itemId: E(1980), note: 'littéral et juste' },
      { itemId: E(1988), note: 'la règle' },
      { itemId: E(1989), note: 'qu’est-ce qu’un calque ?' },
    ],
  },

  /** Acts 6 and 12: tone. */
  registre: {
    term: 'le registre',
    title: 'Le ton, pas seulement les mots',
    body: 'Une traduction rend aussi le ton : l’enthousiasme d’une annonce anglaise se dit plus sobrement en français, avec moins de points d’exclamation. Choisis tu ou vous selon le public, et garde le registre du genre : un musée reste neutre, une boutique reste chaleureuse. EN: Translate the tone too, and choose tu or vous for the audience.',
    examples: [
      { itemId: E(1999), note: 'l’enthousiasme, plus sobre' },
      { itemId: E(1992), note: 'une formule polie' },
      { itemId: E(1909), note: 'un panneau poli' },
    ],
  },
};
