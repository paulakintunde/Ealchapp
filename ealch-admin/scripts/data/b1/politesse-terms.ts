// b1.09.l1 « Demander poliment » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, so the widest trio
// (« l'adoucisseur » + « mot magique » + « la distance ») is 35. Asserted in
// the scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './politesse-corpus.ts';

export const POLITESSE_TERMS: Record<string, LessonTerm> = {
  /** The spine of the whole lesson: act 1, and every act after it. */
  echelle: {
    term: "l'échelle",
    title: 'Six barreaux, du plus sec au plus lourd',
    body: "Donne-moi, tu peux, tu pourrais, est-ce que tu pourrais, pourrais-tu, auriez-vous la gentillesse de. Ce sont six hauteurs pour la même demande. Tu montes quand le service coûte cher, ou quand la personne est loin de toi. EN: Six heights for one request; you climb when the favour costs more or the person is further away.",
    examples: [
      { itemId: E(1000), note: 'le barreau du bas, entre proches' },
      { itemId: E(1002), note: 'le conditionnel, un vrai service' },
      { itemId: E(1005), note: 'le barreau du haut, rarement le bon' },
    ],
  },

  /** Act 1: the thing the ladder actually measures. */
  service: {
    term: 'le service',
    title: "Ce que ta demande coûte à l'autre",
    body: "Tenir une porte prend deux secondes. Relire trente pages prend une heure. Ce n'est pas la même demande, donc ce n'est pas le même barreau. Regarde le temps, la peine et le risque que tu demandes. EN: Look at the time, the trouble and the risk you are asking for.",
    examples: [
      { itemId: E(1006), note: 'deux secondes, barreau bas' },
      { itemId: E(1007), note: 'une heure de travail, barreau haut' },
      { itemId: E(1015), note: 'la phrase qui nomme la taille' },
    ],
  },

  /** Act 1 and act 11: the other half of the measurement. */
  distance: {
    term: 'la distance',
    title: 'Qui est en face de toi',
    body: "Ta sœur, ton collègue de bureau, la personne au guichet, quelqu'un que tu n'as jamais vu. Plus la personne est loin de toi, plus tu montes, même pour un tout petit service. EN: The further away the person, the higher you climb, even for a tiny favour.",
    examples: [
      { itemId: E(1010), note: 'une sœur, un impératif tranquille' },
      { itemId: E(1009), note: 'un guichet, une inconnue' },
      { itemId: E(1013), note: "l'ouverture entre proches" },
    ],
  },

  /** Act 2. */
  moteur: {
    term: 'le moteur',
    title: 'Trois verbes font presque tout',
    body: "Pouvoir, vouloir et devoir au conditionnel : tu pourrais, je voudrais, tu devrais. Avec avoir et falloir, ces cinq verbes portent presque toutes les demandes polies du français. EN: Pouvoir, vouloir and devoir in the conditional carry nearly every polite request.",
    examples: [
      { itemId: E(1018), note: 'pouvoir : la demande' },
      { itemId: E(1021), note: 'vouloir : le souhait' },
      { itemId: E(1023), note: 'devoir : le conseil' },
    ],
  },

  /** Act 3. */
  souhait: {
    term: 'le souhait',
    title: 'Je voudrais ouvre, je veux ferme',
    body: "Je veux annonce une décision déjà prise : il n'y a plus rien à discuter. Je voudrais et j'aimerais disent la même envie en laissant à l'autre la place de répondre, de proposer, de prévenir. EN: Je veux closes the question; je voudrais leaves the other person room to answer.",
    examples: [
      { itemId: E(1036), note: "j'aimerais, la variante la plus douce" },
      { itemId: E(1040), note: 'le souhait au guichet' },
      { itemId: E(1043), note: 'je veux, là où il est juste' },
    ],
  },

  /** Act 4. */
  question: {
    term: 'la question',
    title: 'La forme de la question dit la distance',
    body: "Tu pourrais est plat. Est-ce que tu pourrais ajoute un pas. Pourrais-tu, avec l'inversion, en ajoute un autre et s'écrit plus souvent qu'il ne se dit. Trois formes, trois hauteurs. EN: Est-ce que adds one step of distance; the inversion adds another and belongs mostly to writing.",
    examples: [
      { itemId: E(1053), note: 'est-ce que : un pas de plus' },
      { itemId: E(1054), note: "l'inversion avec tu" },
      { itemId: E(1055), note: "l'inversion avec vous, la plus courante" },
    ],
  },

  /** Act 5. */
  adoucir: {
    term: "l'adoucisseur",
    title: 'Les petits mots qui réduisent la demande',
    body: "Par hasard, si possible, juste, un peu, peut-être : ils ne changent pas le verbe, ils rétrécissent le service. Ça vous dérangerait de fait autre chose : il demande la permission de demander. EN: These small words shrink the favour rather than changing the verb.",
    examples: [
      { itemId: E(1071), note: 'par hasard : je sais que tu peux dire non' },
      { itemId: E(1073), note: 'juste : la demande est petite' },
      { itemId: E(1076), note: 'ça vous dérangerait de : la permission' },
    ],
  },

  /** Act 6, leaning on b1.02. */
  voulais: {
    term: 'je voulais',
    title: "L'imparfait qui ne parle pas du passé",
    body: "Je voulais vous demander, je venais pour, je me demandais si : la demande est maintenant, pas hier. L'imparfait recule la phrase d'un pas, exactement comme le conditionnel. EN: The request is happening now; the imparfait simply steps it back one pace.",
    examples: [
      { itemId: E(1093), note: "l'ouverture la plus courante au guichet" },
      { itemId: E(1094), note: 'je venais pour, à un comptoir' },
      { itemId: E(1105), note: 'je me demandais si, le plus léger des trois' },
    ],
  },

  /** Act 7. */
  magique: {
    term: 'mot magique',
    title: "S'il vous plaît ne répare pas un ordre",
    body: "En anglais, please suffit souvent à transformer un ordre en demande. En français, non : donne-moi le dossier reste un ordre même avec s'il vous plaît. C'est le verbe qu'il faut changer, pas la fin de la phrase. EN: Please does not repair a bare imperative in French; the verb has to change.",
    examples: [
      { itemId: E(1110), note: 'le verbe déplacé, pas la formule ajoutée' },
      { itemId: E(1116), note: "un impératif juste : tu en as le droit" },
      { itemId: E(1107), note: 'je peux avoir : correct, mais très bas' },
    ],
  },

  /** Act 8. */
  proposer: {
    term: 'proposer',
    title: "Proposer, c'est demander pour deux",
    body: "On pourrait, ça te dirait de, et si on : la demande devient une idée commune. Personne ne doit rien à personne, et refuser ne coûte rien. EN: A proposal turns the request into a shared idea, so refusing costs nothing.",
    examples: [
      { itemId: E(1123), note: 'on pourrait : la plus neutre' },
      { itemId: E(1124), note: 'ça te dirait de : entre amis' },
      { itemId: E(1125), note: "et si on, suivi de l'imparfait" },
    ],
  },

  /** Act 9. */
  conseil: {
    term: 'le conseil',
    title: 'Conseiller sans donner un ordre',
    body: "Tu devrais te parle à toi. À ta place se met dans tes chaussures. Il faudrait ne vise personne : c'est la situation qui parle. Tu ferais mieux de est la plus dure des trois. EN: Four ways to advise, from the most personal to the most impersonal.",
    examples: [
      { itemId: E(1145), note: 'tu devrais : le conseil direct' },
      { itemId: E(1140), note: 'à ta place : je me mets à ta place' },
      { itemId: E(1142), note: "il vaudrait mieux : personne n'est visé" },
    ],
  },

  /** Act 10. */
  refus: {
    term: 'le refus',
    title: 'Dire non sans fermer la porte',
    body: "Un refus poli tient en trois morceaux : tu remercies, tu dis non clairement, tu laisses une porte ouverte. Sans le troisième morceau, le non arrive sec ; sans le deuxième, personne ne comprend que c'est non. EN: Thank, refuse clearly, leave a door open; drop the middle piece and nobody knows you said no.",
    examples: [
      { itemId: E(1162), note: 'le regret, puis la raison' },
      { itemId: E(1164), note: 'la porte laissée ouverte' },
      { itemId: E(1170), note: 'le refus court, mais complet' },
    ],
  },
};
