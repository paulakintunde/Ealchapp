// c2.12.l1 « Lire des textes académiques denses » — the lesson glossary.
// DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 8 to 24 characters; sections that combine
// three terms stay inside budget (checked by hand, as the C1 playbook
// requires).
//
// Every term defined here is surfaced by at least one section's `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson).
//
// Hedging and nominalisation are NOT c1.20's own "présupposé" or "l'agent
// caché" entries redefined: each term below is scoped to what c1.20 never
// taught (stacked quantity of hedges, chain-length of a nominalisation),
// never a restatement of a C1 entry.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './lecture-academique-corpus.ts';

export const LECTURE_ACADEMIQUE_TERMS: Record<string, LessonTerm> = {
  /** Act 2: finding the main subject+verb before any subordinate clause. */
  armature: {
    term: 'l’armature de la phrase',
    title: 'Le sujet et le verbe principaux, trouvés en premier',
    body: "Une phrase dense fait presque toujours attendre son sujet et son verbe principaux derrière deux, trois ou quatre groupes de mots qui ne sont que des subordonnées d’appui. Chercher d’abord l’armature, c’est trouver la seule affirmation qui reste vraie si l’on supprime tout le reste, avant de revenir déplier chaque subordonnée. EN: A dense sentence almost always makes its main subject and verb wait behind two, three or four scaffolding clauses; finding the backbone first means finding the one claim that stays true once everything else is removed.",
    examples: [
      { itemId: E(2411), note: 'quatre groupes de mots avant l’armature' },
      { itemId: E(2412), note: 'l’armature isolée de cette phrase' },
      { itemId: E(2423), note: 'la méthode : ce qui reste vrai' },
    ],
  },

  /** Act 3: hedges STACKED, as a countable quantity, never a single device. */
  reserveempilee: {
    term: 'la réserve empilée',
    title: 'Deux ou trois précautions, avant l’affirmation',
    body: "Un texte académique empile souvent deux ou trois réserves (« il semble », « dans une certaine mesure », « sous réserve de ») avant d’arriver à sa seule affirmation. Une réserve ne nie jamais ce qu’elle entoure : elle en limite la force, la portée ou la certitude. Plus les réserves s’empilent, plus l’affirmation qu’elles protègent mérite d’être prise au sérieux. EN: An academic text often stacks two or three hedges before reaching its one claim; a hedge never denies what it surrounds, it only limits its force, scope or certainty, and the more hedges stack up, the more seriously the claim beneath them should be taken.",
    examples: [
      { itemId: E(2425), note: 'trois réserves empilées, une seule affirmation' },
      { itemId: E(2427), note: 'la règle : limiter, jamais nier' },
      { itemId: E(2434), note: 'plus de réserves, plus de sérieux' },
    ],
  },

  /** Act 4: attributing each sentence to its real speaker (author vs cited source). */
  attributioncitation: {
    term: 'l’attribution de la citation',
    title: 'Qui parle, à chaque phrase : l’auteur, ou la source citée',
    body: "« Selon X » attribue toute la phrase qui suit à X, pas à l’auteur du texte : une erreur fréquente est de lire cette phrase comme la position de l’auteur lui-même. Le verbe qui introduit une citation la classe aussitôt : « rappelle », « confirme », « rejoint » annoncent un appui ; « objecte », « conteste », « réfute » annoncent un désaccord. EN: \"Selon X\" attributes the whole following sentence to X, not to the text's own author; the verb introducing a citation sorts it at once into support (\"rappelle\", \"confirme\") or disagreement (\"objecte\", \"conteste\", \"réfute\").",
    examples: [
      { itemId: E(2442), note: 'rappelle : un fait déjà admis' },
      { itemId: E(2444), note: 'selon X attribue la phrase à X' },
      { itemId: E(2450), note: 'les verbes qui annoncent appui ou désaccord' },
    ],
  },

  /** Act 5: the LENGTH/density of a nominalisation chain, not who acts (c1.20's own ground). */
  chainenominale: {
    term: 'la chaîne nominale',
    title: 'Deux ou trois phrases, compressées en un seul groupe de noms',
    body: "Une chaîne nominale compresse deux ou trois phrases simples en un seul groupe de noms abstraits, sans perdre l’information, seulement sa forme la plus lisible. Compter trois noms abstraits à la suite dans un même groupe signale presque toujours une chaîne à déplier. Ce n’est pas la question de qui agit derrière un passif ou un nom (la leçon 20 du C1) : c’est la question de combien de phrases tiennent dans un seul groupe nominal. EN: A nominal chain compresses two or three simple sentences into one group of abstract nouns, with no loss of information, only a less readable form; this is not about who acts behind a passive (C1's own ground), but about how much content one noun phrase is carrying.",
    examples: [
      { itemId: E(2456), note: 'trois noms abstraits à la suite' },
      { itemId: E(2457), note: 'la chaîne dépliée en une phrase simple' },
      { itemId: E(2463), note: 'le signal : trois noms abstraits de suite' },
    ],
  },

  /** Act 6: holding all four moves together on one paragraph. */
  architecturedelargument: {
    term: 'l’architecture de l’argument',
    title: 'L’armature, la réserve, la citation et la chaîne, ensemble',
    body: "Un paragraphe académique dense tient rarement une seule idée simple : il tient une question (l’armature), une réserve sur sa propre généralité, une citation attribuée avec précision, et souvent une chaîne nominale qui compresse sa propre limite. Tenir les quatre à la fois, sur le même paragraphe, c’est l’architecture complète de l’argument. EN: A dense academic paragraph rarely holds a single simple idea; it holds a question, a hedge on its own generality, a precisely attributed citation and often a nominal chain compressing its own limit, and holding all four at once is the argument's complete architecture.",
    examples: [
      { itemId: E(2475), note: 'l’armature d’un paragraphe entier' },
      { itemId: E(2477), note: 'les quatre, tenus ensemble' },
      { itemId: E(2479), note: 'la grille qui vérifie, sans remplacer la lecture' },
    ],
  },

  /** Act 7: the realistic time constraint, named as its own skill. */
  lirecontrelechrono: {
    term: 'lire contre le chronomètre',
    title: 'Résoudre dans le bon ordre, pas plus vite',
    body: "Sous un temps limité, un lecteur de C2 ne lit pas plus vite : il choisit ce qu’il résout en entier, et ce qu’il laisse de côté au premier passage. Les trois réflexes qui brûlent le chronomètre (relire sans méthode, vérifier chaque source jusqu’au bout, résoudre chaque réserve avant de savoir si la question en a besoin) partagent un seul remède : décider d’abord ce que la question exige réellement. EN: Under limited time, a C2 reader does not read faster, they choose what to resolve in full and what to set aside; the three clock-burning reflexes share a single remedy, deciding first what the question actually requires.",
    examples: [
      { itemId: E(2481), note: 'le premier piège : relire sans méthode' },
      { itemId: E(2489), note: 'un budget réaliste, en deux passages' },
      { itemId: E(2494), note: 'les trois pièges, un seul remède' },
    ],
  },
};
