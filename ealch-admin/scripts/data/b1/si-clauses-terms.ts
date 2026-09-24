// b1.10.l1 « Les phrases avec si » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, so the widest trio
// (« la suggestion » + « la question » + « le cas réel ») is 35. Asserted in
// the scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './si-clauses-corpus.ts';

export const SI_TERMS: Record<string, LessonTerm> = {
  /** The whole lesson. The single metaphor. */
  paire: {
    term: 'la paire',
    title: 'Deux moitiés, un seul choix',
    body: "Une phrase avec si a deux moitiés : la condition et le résultat. Tu ne choisis pas leurs temps l'un après l'autre. Tu choisis une paire, une fois, et les deux temps viennent avec elle. EN: You pick one matched pair, once, and both tenses come with it.",
    examples: [
      { itemId: E(1204), note: 'la paire réelle, sur la même situation' },
      { itemId: E(1205), note: 'la paire irréelle, sur la même situation' },
      { itemId: E(1359), note: 'les trois paires, en une ligne' },
    ],
  },

  /** Acts 2 and 4. */
  reel: {
    term: 'le cas réel',
    title: 'Ça peut arriver',
    body: "La condition est possible : elle peut se produire, rien ne l'empêche. On met le présent après si, et le résultat porte le futur. C'est la paire de tous les jours. EN: The condition can really happen: present after si, future in the result.",
    examples: [
      { itemId: E(1215), note: 'la réservation est encore possible' },
      { itemId: E(1226), note: 'la règle, en une phrase' },
      { itemId: 'fr.b1.cafe.088', note: 'le serveur peut très bien oublier' },
    ],
  },

  /** Acts 6 and 7. */
  irreel: {
    term: "l'irréel",
    title: "Ce n'est pas le cas",
    body: "La situation n'existe pas aujourd'hui : tu n'as pas de voiture, tu ne parles pas espagnol. On met l'imparfait après si, et le résultat porte le conditionnel. EN: The situation is not the case now: imparfait after si, conditional in the result.",
    examples: [
      { itemId: E(1208), note: "il n'y a pas de voiture" },
      { itemId: E(1278), note: "l'espagnol n'est pas là non plus" },
      { itemId: E(1285), note: 'la règle, en une phrase' },
    ],
  },

  /** Act 3. The one absolute rule, and the reason half the lesson exists. */
  regle: {
    term: 'après si',
    title: 'Ni -rai, ni -rais',
    body: "Derrière si, une condition ne prend jamais le futur et jamais le conditionnel. Les formes en -rai et en -rais vivent dans l'autre moitié, celle du résultat. EN: A condition after si never takes a future or a conditional; those live in the result half.",
    examples: [
      { itemId: E(1236), note: 'la règle dure, sans exception' },
      { itemId: E(1239), note: 'où les formes en r ont le droit d’aller' },
      { itemId: E(1240), note: 'le présent après si, le futur derrière' },
    ],
  },

  /** Act 4. */
  suite: {
    term: 'la suite',
    title: 'Trois résultats possibles',
    body: "Après si + présent, trois choses peuvent suivre : un futur pour ce qui arrivera, un présent pour ce qui est déjà vrai, un impératif pour ce qu'il faut faire. EN: After si plus present: a future, a present or an imperative.",
    examples: [
      { itemId: E(1250), note: 'le futur : je le ferai' },
      { itemId: E(1246), note: "le présent : c'est déjà là" },
      { itemId: E(1248), note: "l'impératif : vas-y" },
    ],
  },

  /** Act 5. */
  virgule: {
    term: 'la virgule',
    title: 'Elle suit l’ordre',
    body: "Les deux moitiés peuvent se mettre dans les deux sens. Si la moitié si vient en premier, une virgule les sépare. Si elle vient en second, il n'y a rien du tout. EN: Comma when the si half comes first, nothing when it comes second.",
    examples: [
      { itemId: E(1262), note: 'si devant, donc virgule' },
      { itemId: E(1261), note: 'si derrière, donc rien' },
      { itemId: E(1267), note: 'la règle, en une phrase' },
    ],
  },

  /** Act 7. The act the lesson is really for. */
  choix: {
    term: 'le choix',
    title: 'Deux phrases, deux messages',
    body: "« Si j'ai le temps » dit que tu peux encore venir. « Si j'avais le temps » dit que tu ne viendras pas. Même situation, deux paires, et ton lecteur entend deux choses différentes. EN: The same situation, two pairs, two very different messages.",
    examples: [
      { itemId: E(1292), note: 'la porte reste ouverte' },
      { itemId: E(1293), note: 'la porte est déjà fermée' },
      { itemId: E(1300), note: 'comment trancher' },
    ],
  },

  /** Act 8. Not a condition at all. */
  question: {
    term: 'la question',
    title: 'Le si qui pose une question',
    body: "Après demander, savoir, vérifier et dire, si ne pose aucune condition : il rapporte une question. Ce si accepte le futur, parce que la règle dure ne le concerne pas. EN: After verbs of asking, si reports a question and does allow a future.",
    examples: [
      { itemId: E(1308), note: "je ne sais pas, je m'interroge" },
      { itemId: E(1309), note: 'un futur juste derrière si, et tout va bien' },
      { itemId: E(1320), note: 'comment le reconnaître' },
    ],
  },

  /** Act 9. */
  suggestion: {
    term: 'la suggestion',
    title: 'Proposer avec si',
    body: "Si + on + imparfait, et la phrase s'arrête là : la moitié résultat n'est pas écrite. C'est la façon la plus courante de proposer quelque chose à voix haute. EN: Si plus on plus imparfait, with the result half left unsaid: a suggestion.",
    examples: [
      { itemId: E(1322), note: 'une proposition, pas une condition' },
      { itemId: E(1325), note: 'et si ouvre la porte encore plus vite' },
      { itemId: E(1326), note: 'la règle, en une phrase' },
    ],
  },

  /** Act 10. */
  certitude: {
    term: 'quand ou si',
    title: 'Sûr, ou seulement possible',
    body: "Quand annonce un moment qui arrivera : il prend le futur des deux côtés. Si annonce un moment qui arrivera peut-être : il ne prend jamais le futur. EN: Quand is a dated certainty and takes the future twice; si is a maybe and never takes it.",
    examples: [
      { itemId: E(1337), note: 'le diplôme est déjà en route' },
      { itemId: E(1338), note: "le diplôme n'est pas garanti" },
      { itemId: E(1341), note: 'le test, en une phrase' },
    ],
  },

  /** Act 11. Recognition only: the pattern belongs to B2. */
  regret: {
    term: 'le regret',
    title: 'Ce qui ne s’est jamais passé',
    body: "Si + plus-que-parfait avec un conditionnel passé parle d'un passé qui n'a pas eu lieu. Tu le lis, tu l'entends, tu dis ce qu'il veut dire. Le construire viendra au B2. EN: A past that never happened: you recognise it here and build it at B2.",
    examples: [
      { itemId: E(1352), note: "je ne savais pas, alors j'ai pris ce train" },
      { itemId: E(1355), note: 'ce que la paire raconte' },
      { itemId: E(1363), note: 'le choix, lui, n’a jamais existé' },
    ],
  },
};
