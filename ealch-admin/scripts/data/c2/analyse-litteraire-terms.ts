// c2.02.l1 « L’analyse littéraire intégrale » — the lesson glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 7 to 20 characters; sections that combine
// three terms stay inside budget (checked by hand per section, as the C1
// playbook requires — there is no validator for the reverse of "named key
// has no definition").
//
// Every term defined here is surfaced by at least one section’s `terms`
// array (asserted by hand, same as every B1+/C1 lesson; there is no
// validator for an unsurfaced term).
//
// Figures already named by c1.19 (litote, antiphrase, chiasme, gradation,
// zeugme, hypallage, métonymie…) are not redefined here as a GENERAL concept;
// « la gradation » below is scoped to what it does IN THIS EXTRACT, read
// alongside the other three fils, never a restatement of c1.19's own entry.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './analyse-litteraire-corpus.ts';

export const ANALYSE_LITTERAIRE_TERMS: Record<string, LessonTerm> = {
  /** Act 2: the narration/dialogue register split inside one extract. */
  registre: {
    term: 'le registre',
    title: 'Soigné dans la narration, oral dans le dialogue',
    body: "Le même extrait porte deux registres sans qu’aucune règle de grammaire ne change entre les deux : la narration reste soignée, presque savante (« leur souplesse d’esprit, sont leur seule hiérarchie »), le dialogue tombe à l’oral (« Tiens, dit-il, voici quelque chose pour toi »). Repérer un registre ne suffit pas : il faut dire ce que ce choix fait au lecteur, à cet endroit précis. EN: The same extract carries two registers with no grammar rule changing between them; spotting one is not enough, you must say what it does there.",
    examples: [
      { itemId: E(2014), note: 'registre soigné de la narration' },
      { itemId: E(2016), note: 'registre oral du dialogue' },
      { itemId: E(2023), note: 'la règle qui les sépare' },
    ],
  },

  /** Act 3: discours direct / indirect libre, and the narrator's distance. */
  voixnarrative: {
    term: 'la voix narrative',
    title: 'Qui parle, et de quelle distance',
    body: "Un narrateur peut rapporter une pensée, la laisser parler sans l’annoncer (le discours indirect libre, « elle songeait aux… »), ou céder entièrement la parole à un personnage (le discours direct, « Tiens, dit-il »). Le choix de qui parle, et de quelle distance, construit le personnage plus que le contenu seul. EN: A narrator can report a thought, let it speak unannounced (free indirect discourse), or hand the floor entirely to a character (direct speech); the choice of who speaks, from what distance, builds the character more than the content alone.",
    examples: [
      { itemId: E(2042), note: 'discours indirect libre' },
      { itemId: E(2054), note: 'discours direct' },
      { itemId: E(2047), note: 'le jugement du narrateur, à distance' },
    ],
  },

  /** Act 3: the narrator's ironic judgement, distinct from the characters' own voices. */
  distanceironique: {
    term: "la distance ironique",
    title: 'Le narrateur juge sans excuser tout à fait',
    body: "« Elle fut simple ne pouvant être parée, mais malheureuse comme une déclassée » n’est pas la pensée de Mathilde : c’est un jugement du narrateur, posé de l’extérieur, qui nomme sa souffrance sans jamais tout à fait l’excuser. Cette distance empêche une lecture purement morale du personnage. EN: This line is not Mathilde's own thought; it is the narrator's outside judgement, naming her suffering without ever quite excusing it, which blocks a purely moral reading of the character.",
    examples: [
      { itemId: E(2040), note: 'le jugement, posé de l’extérieur' },
      { itemId: E(2048), note: 'une distance légèrement ironique' },
    ],
  },

  /** Act 4: exposition vs the narrative turn, read in the text's own tense shift. */
  structure: {
    term: 'la structure',
    title: "L’exposition, puis le basculement",
    body: "L’exposition de ce texte dure six paragraphes, presque entièrement à l’imparfait (souffrait, songeait, pleurait), un temps qui dit la répétition. Le basculement narratif tombe sur « Or, un soir, son mari rentra » : un passé simple, un événement daté, unique, qui brise la répétition et accélère le rythme. La structure se lit dans la grammaire même du texte, jamais dans une impression générale. EN: The exposition runs almost entirely in the imparfait, a tense of repetition; the narrative turn lands on a dated passé simple that breaks the repetition and speeds up the pace, and structure is read in the text's own grammar, never a general impression.",
    examples: [
      { itemId: E(2065), note: "l’imparfait de l’exposition" },
      { itemId: E(2066), note: 'le passé simple du basculement' },
      { itemId: E(2079), note: 'le rythme qui accélère' },
    ],
  },

  /** Act 5: the repeated "elle songeait aux..." structure. */
  anaphore: {
    term: "l’anaphore",
    title: 'Un même début, répété, qui construit une obsession',
    body: "« Elle songeait aux… », répété quatre fois, est une anaphore : la répétition construit l’obsession plus que chaque rêve pris isolément. Portée par le discours indirect libre, elle ne dit pas seulement un goût pour le luxe, elle montre un désir qui ne peut pas s’arrêter. EN: \"Elle songeait aux…\", repeated four times, is an anaphora; carried by free indirect discourse, it shows a desire that cannot stop, not merely a taste for luxury.",
    examples: [
      { itemId: E(2090), note: 'les trois reprises de « elle songeait aux »' },
      { itemId: E(2095), note: "l’effet de la répétition" },
      { itemId: E(2104), note: 'la voix qui la transforme en obsession' },
    ],
  },

  /** Act 5: the accumulation of lacks or items. */
  enumeration: {
    term: "l’énumération",
    title: 'Chaque manque s’ajoute au précédent',
    body: "« Pas de dot, pas d’espérances, aucun moyen » est une énumération : chaque manque s’ajoute au précédent, sans qu’aucun seul suffise à expliquer son malheur. L’effet vient de l’accumulation, jamais d’un seul des termes listés. EN: \"Pas de dot, pas d’espérances, aucun moyen\" is an enumeration; each lack adds to the one before it, and the effect comes from the accumulation, never from any single listed term.",
    examples: [
      { itemId: E(2091), note: 'trois manques, additionnés' },
      { itemId: E(2096), note: "l’effet de l’accumulation" },
    ],
  },

  /** Act 5: the social-fact/feeling clash. */
  antithese: {
    term: "l’antithèse",
    title: 'Deux états qui devraient s’exclure, tenus ensemble',
    body: "« Simple… mais malheureuse comme une déclassée » est une antithèse : un fait social (simple, sans moyens d’être parée) et un sentiment (malheureuse) tenus dans une seule phrase, alors qu’on attendrait l’un sans l’autre. Nommer l’antithèse sans dire ce qu’elle oppose exactement en manque l’effet. EN: \"Simple… but unhappy as a fallen woman\" holds a social fact and a feeling together where one would expect only the first; naming the antithesis without saying exactly what it opposes misses its effect.",
    examples: [
      { itemId: E(2092), note: 'simple, mais malheureuse' },
      { itemId: E(2097), note: "ce que l’antithèse oppose exactement" },
    ],
  },

  /** Act 5: the escalating final sentence of extract A. Scoped to this
   *  extract's use, never a restatement of c1.19's general entry. */
  gradation: {
    term: 'la gradation, ici',
    title: 'Quatre mots pour une même douleur, de plus en plus forts',
    body: "« Chagrin, regret, désespoir, détresse » est une gradation : quatre mots pour une même douleur, chacun plus fort que le précédent. Sans elle, la dernière phrase du passage dirait seulement qu’elle pleure ; avec elle, la phrase dit qu’elle pleure de plus en plus profondément. EN: \"Grief, regret, despair, distress\" is a gradation naming the same pain with rising intensity; without it the sentence would only say she weeps, with it, that she weeps more and more deeply.",
    examples: [
      { itemId: E(2093), note: 'les quatre mots, croissants' },
      { itemId: E(2098), note: "l’effet de la montée" },
    ],
  },

  /** Acts 7-9: the new skill — holding all four threads, versus one alone. */
  lectureintegrale: {
    term: 'la lecture intégrale',
    title: 'Les quatre fils tenus ensemble, jamais un seul',
    body: "Une lecture plausible n’est pas fausse mot à mot ; elle est incomplète parce qu’elle ne tient qu’un seul fil (le sens d’une figure, par exemple, sans sa voix ni sa place dans la structure). La lecture intégrale ajoute toujours ce que le fil seul ne dit pas, en le croisant aux trois autres. EN: A plausible reading is not wrong word for word, only incomplete because it holds a single thread; an integrated reading always adds what that thread alone does not say, by crossing it with the other three.",
    examples: [
      { itemId: E(2125), note: 'une lecture plausible, incomplète' },
      { itemId: E(2126), note: 'la même ligne, lue en entier' },
      { itemId: E(2133), note: 'pourquoi une lecture plausible ne suffit pas' },
    ],
  },
};
