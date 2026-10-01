// c1.21.l1 « Débats et entretiens » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, and the lesson never
// puts three labels summing over 37 in one row (checked in the scratch run).
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A WORKSHOP GLOSSARY NAMES MOVES: what a listener hears for (l'accord, la
// définition, la concession, l'objection) or does (une écoute, le piège).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './debats-entretiens-corpus.ts';

export const DEBATS_ENTRETIENS_TERMS: Record<string, LessonTerm> = {
  /** Act 1 and the reframe: the metaphor itself. */
  ligne: {
    term: 'la ligne',
    title: 'La ligne de partage',
    body: "Au C1, deux intervenants partagent souvent l'essentiel : le constat, parfois même le but. Ce qui les sépare est une ligne, souvent étroite : un mot, une portée, qui paie, comment une règle est rédigée. Ton travail d'auditeur : trouver où elle passe, et l'entendre bouger. EN: Speakers at C1 share most of the ground; find the narrow line that separates them, and hear it move.",
    examples: [
      { itemId: E(1404), note: 'la règle de la leçon' },
      { itemId: E(1403), note: 'un désaccord plus étroit qu’il n’y paraît' },
      { itemId: E(1401), note: 'la ligne du premier débat' },
    ],
  },

  /** Act 2: the moderator and three voices. */
  moderateur: {
    term: 'le modérateur',
    title: 'Le modérateur et les trois voix',
    body: "Avec trois invités, le modérateur est ton repère : il présente chacun par son rôle, donne la parole en nommant, relance, recentre sur la question de départ, et résume. Sa synthèse n'est pas son avis : c'est une hypothèse sur la ligne, que les invités corrigent. EN: The moderator names, relaunches, refocuses and sums up; his summary is a hypothesis about the line, not his opinion.",
    examples: [
      { itemId: E(1411), note: 'recentrer' },
      { itemId: E(1412), note: 'la synthèse' },
      { itemId: E(1416), note: 'ce que la synthèse n’est pas' },
    ],
  },

  /** Act 3: the agreement before the disagreement. */
  accord: {
    term: "l'accord",
    title: "L'accord avant le désaccord",
    body: "Un intervenant qui annonce un accord (« sur le constat, nous sommes d'accord », « jusque-là, je vous suis ») prépare presque toujours un désaccord. Note les deux : ce qui est partagé n'est pas du remplissage, c'est ce qui rend la ligne visible. EN: An announced agreement prepares a disagreement; note both, the shared ground is what makes the line visible.",
    examples: [
      { itemId: E(1422), note: 'l’accord sur le constat' },
      { itemId: E(1424), note: 'le point où les chemins se séparent' },
      { itemId: E(1432), note: 'même diagnostic, autre remède' },
    ],
  },

  /** Act 4: disagreement about a name or a definition. */
  definition: {
    term: 'la définition',
    title: 'Le mot qui gêne',
    body: "« Le mot me gêne », « si l'on entend par là... », « tout dépend de ce qu'on met derrière le mot » : le désaccord porte sur un nom. Ce n'est pas une querelle de mots, parce que le nom choisi décide du remède. Note le mot refusé, et celui qu'on propose à la place. EN: A dispute over a word is a dispute over the remedy; note the rejected word and the one proposed instead.",
    examples: [
      { itemId: E(1434), note: 'le mot refusé' },
      { itemId: E(1436), note: 'accepter sous une définition' },
      { itemId: E(1438), note: 'pourquoi le nom compte' },
    ],
  },

  /** Act 5: C1 concession formulas, with their scope. */
  concession: {
    term: 'la concession',
    title: 'Concéder sans céder',
    body: "« J'accorde la distinction », « je vous suis sur..., je ne vous suis pas sur... », « je vous concède volontiers que... », « admettons » : chaque formule accorde quelque chose de précis, et rien de plus. Écoute exactement ce qui est accordé, puis ce qui est maintenu. EN: Each C1 concession formula grants something precise and nothing more; hear what is granted and what is kept.",
    examples: [
      { itemId: E(1447), note: 'accorder une distinction' },
      { itemId: E(1448), note: 'suivre sur un point, pas sur l’autre' },
      { itemId: E(1451), note: 'accordé, mais pas réglé' },
    ],
  },

  /** Act 6: narrowing a claim. */
  these: {
    term: 'la thèse',
    title: 'Une thèse resserrée',
    body: "« Je soutiens quelque chose de plus étroit », « je ne dis pas que..., je dis que... » : l'intervenant réduit ce qu'il défend pour le rendre défendable. Ce n'est pas un recul. Note la version étroite, et méfie-toi de la version large qu'on lui prête, souvent pour mieux la réfuter. EN: A speaker narrows the claim to make it defensible; note the narrow version, not the broad one attributed to them.",
    examples: [
      { itemId: E(1461), note: 'la thèse resserrée' },
      { itemId: E(1462), note: 'je ne dis pas que, je dis que' },
      { itemId: E(1464), note: 'la thèse qu’on lui prête' },
    ],
  },

  /** Act 7: answering an objection. */
  objection: {
    term: "l'objection",
    title: "Répondre à l'objection",
    body: "Une objection annoncée (« on m'objectera que... ») ou faite par l'autre appelle une réponse, et il y en a trois : la retourner (« l'objection porte, mais pas là où vous le pensez »), la reconnaître et y répondre par un moyen concret, ou la déplacer (« cela ne contredit pas le principe »). EN: An objection is answered by turning it round, acknowledging it with a concrete fix, or shifting it.",
    examples: [
      { itemId: E(1473), note: 'l’objection annoncée' },
      { itemId: E(1475), note: 'la retourner' },
      { itemId: E(1477), note: 'la déplacer' },
    ],
  },

  /** Act 8: analogy and allusion. */
  image: {
    term: "l'analogie",
    title: 'Analogie et allusion',
    body: "Une analogie (« c'est un peu comme... ») ou une allusion (le tonneau des Danaïdes, déshabiller Pierre pour habiller Paul) dit un argument en image. Traduis-la avec le contexte, puis juge-la : comparaison n'est pas raison, et l'autre peut attaquer l'image plutôt que l'idée. EN: An analogy or allusion is an argument in a picture; translate it from context, then judge it.",
    examples: [
      { itemId: E(1487), note: 'une analogie' },
      { itemId: E(1489), note: 'une allusion : une tâche sans fin' },
      { itemId: E(1496), note: 'comparaison n’est pas raison' },
    ],
  },

  /** Act 9: one play with a read window. */
  ecoute: {
    term: 'une écoute',
    title: 'Une seule écoute',
    body: "Dans les épreuves blanches C1 de l'application, chaque document passe une seule fois, et tu as vingt-huit à trente secondes pour lire les questions avant. Lis le mot-clé de chaque question (accord, désaccord, concession, réponse), prévois la forme de l'échange, puis écoute avec un mot par question. EN: In the app's C1 mock papers each recording plays once, after 28 to 30 seconds to read; spot each question's key word and predict the shape.",
    examples: [
      { itemId: E(1500), note: 'le format' },
      { itemId: E(1501), note: 'le mot de la question' },
      { itemId: E(1505), note: 'la méthode en quatre temps' },
    ],
  },

  /** Act 10: the TCF format and its distractors. */
  piege: {
    term: 'le piège',
    title: 'Les pièges du QCM',
    body: "Dans l'épreuve blanche TCF Canada C1 de l'application, trois documents : trois questions, puis deux, puis deux. La bonne option reformule ce qui a été dit ; les pièges répètent un mot entendu sans son sens, disent plus que l'intervenant, donnent la position de l'autre camp, ou disent une chose vraie mais secondaire. EN: The right option rephrases; traps echo a word, say too much, switch sides, or state something true but secondary.",
    examples: [
      { itemId: E(1516), note: 'reformuler contre répéter' },
      { itemId: E(1515), note: 'l’option qui dit trop' },
      { itemId: E(1513), note: 'une question type' },
    ],
  },

  /** Act 11: the TEF reportage and its main idea. */
  idee: {
    term: 'idée centrale',
    title: "L'idée centrale d'un reportage",
    body: "Dans l'épreuve blanche TEF Canada de l'application, un reportage d'environ deux minutes, une écoute, une question : l'idée principale. Elle n'est presque jamais le premier chiffre. Elle arrive avec le retournement (« mais ») et revient dans la dernière phrase du narrateur ; c'est elle qui donne un sens à tous les détails. EN: The main idea comes with the turn and the narrator's last line; it is what makes sense of every detail.",
    examples: [
      { itemId: E(1525), note: 'idée et détails' },
      { itemId: E(1523), note: 'le mais du reportage' },
      { itemId: E(1524), note: 'la dernière phrase' },
    ],
  },
};
