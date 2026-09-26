// b1.32.l1 « La concession et l'opposition » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters; the scratch check
// measures every section's actual row against 37, so the long labels (« la
// concession », « le subjonctif », « l'opposition ») are never put three to a
// section.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './concession-corpus.ts';

export const CONCESSION_TERMS: Record<string, LessonTerm> = {
  /** The one metaphor. */
  balance: {
    term: 'la balance',
    title: 'Deux faits, deux plateaux',
    body: "Deux faits tirent chacun de leur côté. Le mot qui les relie dit comment ils pèsent : l'un gagne, ils pèsent autant, ou l'un efface l'autre. EN: two facts on two pans; the linking word says how they weigh.",
    examples: [
      { itemId: E(1401), note: 'je suis pour : ce fait gagne' },
      { itemId: E(1406), note: 'deux faits côte à côte, même poids' },
      { itemId: E(1410), note: 'au contraire : le premier fait disparaît' },
    ],
  },

  /** Concession: the obstacle does not stop the result. */
  concession: {
    term: 'la concession',
    title: "L'obstacle ne gagne pas",
    body: "Tu reconnais un fait qui devrait empêcher l'autre, et l'autre arrive quand même. Même si, bien que, malgré, avoir beau, pourtant, quand même : ils disent tous ça, avec des formes différentes. EN: you grant an obstacle, and the other fact wins anyway.",
    examples: [
      { itemId: E(1417), note: 'le loyer est cher, et je reste' },
      { itemId: E(1434), note: 'il fait froid, et ils jouent dehors' },
      { itemId: E(1503), note: 'tout l’effort, et rien ne change' },
    ],
  },

  /** Opposition: two facts side by side. */
  opposition: {
    term: "l'opposition",
    title: 'Deux faits, côte à côte',
    body: "Tu poses deux faits différents l'un à côté de l'autre, sans que l'un empêche l'autre. Alors que, tandis que, par contre, en revanche. EN: two different facts side by side; neither blocks the other.",
    examples: [
      { itemId: E(1521), note: 'Dakar et Sherbrooke en janvier' },
      { itemId: E(1522), note: 'mon frère, et moi' },
      { itemId: E(1543), note: 'petit, mais lumineux' },
    ],
  },

  /** Même si, alors que, tandis que. */
  indicatif: {
    term: "l'indicatif",
    title: 'Même si, alors que : la forme de tous les jours',
    body: "Après même si, alors que et tandis que, tu gardes l'indicatif, comme dans une phrase simple. Et juste après si, jamais de futur ni de conditionnel. EN: même si, alors que and tandis que take the indicative.",
    examples: [
      { itemId: E(1418), note: 'il pleut demain : le présent, pas le futur' },
      { itemId: E(1441), note: 'il fait froid, tout simplement' },
      { itemId: E(1535), note: 'alors que, avec un imparfait' },
    ],
  },

  /** Bien que, quoique. */
  subjonctif: {
    term: 'le subjonctif',
    title: 'Bien que et quoique',
    body: "Bien que et quoique sont les seuls outils de cette leçon qui demandent le subjonctif. C'est l'expression qui décide, pas le sens. Même idée que même si, forme plus soignée. EN: only bien que and quoique take the subjunctive here.",
    examples: [
      { itemId: E(1434), note: 'fasse, et pas fait' },
      { itemId: E(1443), note: 'pleuve, et pas pleut' },
      { itemId: E(1445), note: 'quoique : plus écrit encore' },
    ],
  },

  /** Malgré + nom. */
  malgre: {
    term: 'malgré + nom',
    title: 'Un nom, pas une phrase',
    body: "Malgré est suivi d'un nom : malgré le froid, malgré la pluie. Jamais malgré de, jamais malgré il pleut. Pour une phrase entière, prends bien que ou même si. EN: malgré takes a noun, never de and never a clause.",
    examples: [
      { itemId: E(1452), note: 'le froid : un nom' },
      { itemId: E(1456), note: 'mes efforts : un nom au pluriel' },
      { itemId: E(1464), note: 'malgré tout : un bloc' },
    ],
  },

  /** Pourtant, cependant, néanmoins, toutefois. */
  adverbes: {
    term: 'les adverbes',
    title: 'Pourtant, cependant, néanmoins, toutefois',
    body: "Ces mots relient deux phrases entières. Pourtant se dit partout. Cependant, néanmoins et toutefois sont plutôt écrits. Au début avec une virgule, ou juste après le verbe. EN: they link two whole sentences; only pourtant is everyday speech.",
    examples: [
      { itemId: E(1469), note: 'pourtant, au début' },
      { itemId: E(1475), note: 'cependant, après le verbe' },
      { itemId: E(1474), note: 'toutefois, dans une annonce' },
    ],
  },

  /** Avoir beau + infinitif. */
  avoirbeau: {
    term: 'avoir beau',
    title: "Tout l'effort, et rien ne change",
    body: "J'ai beau essayer, ça ne marche pas. Seul avoir se conjugue ; beau ne bouge jamais ; le verbe suivant reste à l'infinitif. Puis vient le résultat, qui ne change pas. EN: however much you try, nothing changes; only avoir is conjugated.",
    examples: [
      { itemId: E(1503), note: 'j’ai beau : avoir au présent' },
      { itemId: E(1507), note: 'elle avait beau : à l’imparfait' },
      { itemId: E(1513), note: 'avec être : elle a beau être petite' },
    ],
  },

  /** Register. */
  registre: {
    term: 'le registre',
    title: "À l'oral, à l'écrit",
    body: "Mais, pourtant, même si et par contre vont partout. Bien que, cependant, en revanche et tout de même sont plus soignés. Quoique, néanmoins et en dépit de sont surtout écrits. EN: pick the tool that fits the person and the moment.",
    examples: [
      { itemId: E(1542), note: 'par contre : à l’oral' },
      { itemId: E(1543), note: 'en revanche : à l’écrit' },
      { itemId: E(1563), note: 'even though, à l’oral : même si' },
    ],
  },

  /** Au lieu de. */
  aulieu: {
    term: 'au lieu de',
    title: "L'un à la place de l'autre",
    body: "Au lieu de enlève une chose et en met une autre à sa place. Suivi d'un infinitif (au lieu de râler) ou d'un nom (au lieu d'un café). EN: instead of; followed by an infinitive or a noun.",
    examples: [
      { itemId: E(1538), note: 'la voiture, puis le bus' },
      { itemId: E(1541), note: 'un nom : au lieu d’un café' },
      { itemId: E(1539), note: 'se plaindre, puis agir' },
    ],
  },

  /** The balanced text. */
  equilibre: {
    term: "l'équilibre",
    title: 'Un avis qui pèse les deux côtés',
    body: "Un avis équilibré montre les deux plateaux : d'un côté, de l'autre. Il reconnaît l'argument contraire, puis il dit clairement où il se place. EN: show both sides, grant the other one, then say where you stand.",
    examples: [
      { itemId: E(1571), note: 'd’un côté' },
      { itemId: E(1573), note: 'certes : tu reconnais l’autre côté' },
      { itemId: E(1583), note: 'tu tranches' },
    ],
  },
};
