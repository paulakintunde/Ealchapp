// b2.26.l1 « Réunions et négociations » · the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters; the scratch check
// asserts that every section's chips fit in 37, and that every term is
// surfaced by at least one section.
//
// B2 LANGUAGE RULE: the body is natural French at B2, addressed as « tu »,
// then ONE English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './reunions-negociation-corpus.ts';

export const REUNIONS_NEGOCIATION_TERMS: Record<string, LessonTerm> = {
  /** The reframe: the condition instead of the yes or the no. */
  condition: {
    term: 'la condition',
    title: 'Dire à quelles conditions',
    body: "En négociation, un oui sec donne tout et un non sec ferme la porte. La condition dit jusqu’où tu peux aller, et ce que tu demandes en échange : si vous vous engagez sur deux ans, nous pourrions... EN: A condition says how far you can go and what you want in return.",
    examples: [
      { itemId: E(1200), note: 'la réponse qui garde la table ouverte' },
      { itemId: E(1202), note: 'la question qui remplace le oui et le non' },
      { itemId: E(1212), note: 'la règle' },
    ],
  },

  /** Steering the meeting. */
  recadrer: {
    term: 'recadrer',
    title: 'Ramener la discussion au sujet',
    body: "Recadrer, c’est ramener une réunion vers son objectif quand elle part ailleurs, sans vexer personne : revenons à notre sujet, gardons ce point pour la fin. EN: To bring a meeting back to its purpose without offending anyone.",
    examples: [
      { itemId: E(1229), note: 'recadrer, poliment' },
      { itemId: E(1222), note: 'revenir au sujet' },
      { itemId: E(1223), note: 'garder un point pour la fin' },
    ],
  },

  /** The floor. */
  parole: {
    term: 'la parole',
    title: 'Prendre, garder, donner la parole',
    body: "En réunion, la parole circule. Tu la prends sans couper brutalement (si je peux me permettre), tu la gardes calmement (je termine et je vous écoute), et tu la donnes (je vous laisse la parole). EN: Taking, keeping and handing over the floor.",
    examples: [
      { itemId: E(1238), note: 'la prendre' },
      { itemId: E(1247), note: 'la garder' },
      { itemId: E(1246), note: 'la donner' },
    ],
  },

  /** Checking understanding. */
  reformuler: {
    term: 'reformuler',
    title: 'Redire avec tes mots, puis vérifier',
    body: "Reformuler, c’est redire l’idée de l’autre avec tes propres mots pour vérifier que tu as compris. Une bonne reformulation finit par une question : c’est bien ça ? EN: Restating the other person’s idea in your words, then checking it.",
    examples: [
      { itemId: E(1254), note: 'si je vous suis bien' },
      { itemId: E(1258), note: 'autrement dit' },
      { itemId: E(1272), note: 'une reformulation qui vérifie' },
    ],
  },

  /** Diplomatic disagreement. */
  nuance: {
    term: 'la nuance',
    title: 'Un désaccord nuancé',
    body: "Nuancer, c’est dire que tu n’es pas d’accord sans fermer la discussion : tu reconnais ce qui est juste, tu dis ta réserve au conditionnel ou avec toutefois, et tu laisses une question ouverte. EN: Disagreeing while keeping the discussion open.",
    examples: [
      { itemId: E(1283), note: 'reconnaître, puis nuancer' },
      { itemId: E(1278), note: 'une inquiétude, au subjonctif' },
      { itemId: E(1279), note: 'une question qui propose' },
    ],
  },

  /** The counter-proposal. */
  contreoffre: {
    term: 'contre-offre',
    title: 'Répondre par une autre offre',
    body: "Une contre-offre, ou contre-proposition, répond à une offre par une autre : un autre chiffre, une autre durée, une autre date. Elle dit non à l’offre et oui à la discussion. EN: Answering an offer with another offer.",
    examples: [
      { itemId: E(1295), note: 'huit pour cent et la livraison' },
      { itemId: E(1299), note: 'ce que nous pouvons offrir' },
      { itemId: E(1311), note: 'la règle' },
    ],
  },

  /** Strategic concession. */
  contrepartie: {
    term: 'contrepartie',
    title: 'Céder contre quelque chose',
    body: "La contrepartie, c’est ce que tu obtiens en échange de ce que tu cèdes. Un bon négociateur ne cède jamais sans contrepartie : je peux faire un geste, à condition que... EN: What you get in return for what you give up.",
    examples: [
      { itemId: E(1313), note: 'un geste, et sa condition' },
      { itemId: E(1315), note: 'en contrepartie' },
      { itemId: E(1324), note: 'la règle' },
    ],
  },

  /** Firm offer against hypothesis. */
  hypothese: {
    term: 'l’hypothèse',
    title: 'Une offre ferme ou une hypothèse',
    body: "Si + présent annonce une offre ferme : si vous confirmez, nous appliquerons. Si + imparfait pose une hypothèse qui n’engage encore personne : si vous vous engagiez, nous pourrions. Après si, jamais de conditionnel. EN: A firm offer against a hypothesis that binds nobody yet.",
    examples: [
      { itemId: E(1328), note: 'une offre ferme' },
      { itemId: E(1329), note: 'une hypothèse' },
      { itemId: E(1341), note: 'la règle' },
    ],
  },

  /** Persuasion by the objection. */
  objection: {
    term: 'l’objection',
    title: 'Répondre avant qu’on te réponde',
    body: "Une objection, c’est la raison que l’autre a de dire non. Pour persuader, tu la nommes toi-même (je sais ce que tu vas me dire), tu y réponds, et tu passes à la suivante. EN: The other person’s reason to say no; name it first, then answer it.",
    examples: [
      { itemId: E(1343), note: 'nommer l’objection' },
      { itemId: E(1344), note: 'y répondre : justement' },
      { itemId: E(1360), note: 'la règle' },
    ],
  },

  /** Closing on next steps. */
  suite: {
    term: 'la suite',
    title: 'Ce qui se passe après la réunion',
    body: "Une réunion utile se termine sur la suite : ce qui est décidé, qui s’en charge et pour quand. Sans ces trois choses, la décision reste sur la table. EN: What happens after the meeting: the decision, the owner, the date.",
    examples: [
      { itemId: E(1363), note: 'ce qui est décidé' },
      { itemId: E(1366), note: 'qui s’en charge' },
      { itemId: E(1369), note: 'pour quand' },
    ],
  },

  /** Regional variants. */
  variante: {
    term: 'la variante',
    title: 'Un autre usage, ailleurs',
    body: "Au Québec, on fixe une rencontre et on fait un suivi ; en France, on cale une réunion et on revient vers quelqu’un ; en Belgique, on paie à nonante jours. Chacun est juste chez lui ; le calque de l’anglais, lui, ne l’est nulle part. EN: A regional usage, right where it is said.",
    examples: [
      { itemId: E(1231), note: 'une rencontre, au Québec' },
      { itemId: E(1307), note: 'revenir vers quelqu’un, en France' },
      { itemId: E(1297), note: 'nonante, en Belgique' },
    ],
  },

  /** The exam grid. */
  grille: {
    term: 'la grille',
    title: 'La grille de l’oral B2',
    body: "À l’oral du TEF, du TCF ou du DELF B2, on te note sur une grille : faire la tâche, interagir, organiser ton propos, la richesse et la correction de ta langue, et ta prononciation. Un exposé qui ne prend jamais position ne répond pas à la consigne. EN: The marking grid of the B2 speaking tests.",
    examples: [
      { itemId: E(1388), note: 'prendre position' },
      { itemId: E(1383), note: 'poser une condition' },
      { itemId: E(1387), note: 'finir sur une demande' },
    ],
  },
};
