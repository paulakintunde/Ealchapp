// b2.25.l1 « Écouter à vitesse réelle » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, and the lesson never
// puts three labels summing over 37 in one row (checked in the scratch run).
//
// B2 LANGUAGE RULE: the body is natural B2 French, addressed as « tu », then
// ONE English line starting « EN: ».
//
// A WORKSHOP GLOSSARY NAMES MOVES: what a listener hears for (le plan oral,
// la position, la distance) or does (les notes, le fil perdu).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './ecoute-vitesse-reelle-corpus.ts';

export const ECOUTE_VITESSE_TERMS: Record<string, LessonTerm> = {
  /** Act 1 and the reframe: the metaphor itself. */
  charpente: {
    term: 'la charpente',
    title: "Ce qui tient l'écoute debout",
    body: "Dans une maison, la charpente porte tout le reste. Dans un débat ou un exposé, ce sont le plan, les positions et le ton : si tu les tiens, les phrases peuvent passer sans que tu perdes le fil. EN: The frame of a talk is its plan, its positions and its tone; hold those and the sentences can go by.",
    examples: [
      { itemId: E(1602), note: 'la règle de la leçon' },
      { itemId: E(1610), note: 'chercher la charpente, pas les phrases' },
      { itemId: E(1601), note: 'qui parle, et ce que chacun défend' },
    ],
  },

  /** Act 2: the announced structure. */
  plan: {
    term: 'le plan oral',
    title: 'Le plan que l’orateur annonce',
    body: "Un exposé annonce souvent son plan (« en trois temps »), puis ouvre chaque partie par un panneau : premièrement, j'en viens à, pour conclure. Une parenthèse s'ouvre et se referme. Ces panneaux te disent où tu es. EN: A talk announces its plan and opens each part with a signpost; asides open and close.",
    examples: [
      { itemId: E(1614), note: 'le plan annoncé' },
      { itemId: E(1618), note: 'le passage au deuxième point' },
      { itemId: E(1620), note: 'la conclusion annoncée' },
    ],
  },

  /** Act 3: notes as a frame. */
  notes: {
    term: 'les notes',
    title: 'Des notes en charpente',
    body: "Des mots-clés, des chiffres écrits en chiffres, des flèches pour les causes et les conséquences, une colonne par voix, un « ? » pour ce qui t'a échappé. Pas de phrases : elles viendront au résumé. EN: Key words, figures, arrows, one column per voice and a question mark for gaps; no sentences.",
    examples: [
      { itemId: E(1628), note: 'des mots-clés, pas des phrases' },
      { itemId: E(1629), note: 'la flèche' },
      { itemId: E(1648), note: 'une colonne par invité' },
    ],
  },

  /** Act 4: who holds which position. */
  position: {
    term: 'la position',
    title: 'Qui défend quoi',
    body: "Dans un débat, l'animateur nomme la personne avant de lui donner la parole : le nom t'annonce la voix. Écoute ensuite si elle est d'accord, en désaccord, ou d'accord sur un point seulement. EN: The host names each speaker first; then listen for agreement, disagreement or partial agreement.",
    examples: [
      { itemId: E(1642), note: "d'accord sur les faits, pas sur la conclusion" },
      { itemId: E(1643), note: 'un accord sur un point' },
      { itemId: E(1651), note: "le point d'accord final" },
    ],
  },

  /** Act 5: turn-taking and interruptions. */
  parole: {
    term: 'la parole',
    title: 'Qui a la parole',
    body: "À vitesse réelle, les voix se coupent. On prend la parole, on la garde (laissez-moi finir), on la coupe (je vous arrête), on la rend. Une idée coupée revient souvent plus loin : j'y viens, comme je le disais. EN: Speakers take, keep, cut and hand back the floor; an interrupted idea often comes back.",
    examples: [
      { itemId: E(1656), note: 'couper la parole' },
      { itemId: E(1657), note: 'garder la parole' },
      { itemId: E(1662), note: 'reprendre une idée coupée' },
    ],
  },

  /** Act 6: conceding. */
  concession: {
    term: 'la concession',
    title: 'Accorder un point pour mieux résister',
    body: "Certes, je te l'accorde, il est vrai que : la personne reconnaît un point à l'autre. Mais écoute la suite : un mais, un cela dit, et elle revient à sa position. Dans tes notes, c'est le mais qui compte. EN: A concession grants a point, then a but brings the speaker back to their position.",
    examples: [
      { itemId: E(1671), note: 'certes... mais' },
      { itemId: E(1673), note: 'il est vrai que... cela dit' },
      { itemId: E(1684), note: 'concéder, puis maintenir' },
    ],
  },

  /** Act 6: irony. */
  ironie: {
    term: "l'ironie",
    title: 'Dire le contraire de ses mots',
    body: "Les mots louent, la situation contredit : « bravo, belle réussite » devant un échec est une critique. À l'oral, le ton aide, mais c'est souvent l'écart entre les mots et les faits qui te met sur la piste. EN: Irony praises in words what the situation contradicts; the gap between words and facts gives it away.",
    examples: [
      { itemId: E(1677), note: 'une fausse félicitation' },
      { itemId: E(1678), note: 'se moquer d’une exagération' },
      { itemId: E(1683), note: 'bravo, mais une critique' },
    ],
  },

  /** Acts 6 and 7: distance from a claim. */
  distance: {
    term: 'la distance',
    title: 'Prendre ses distances avec un chiffre',
    body: "Soi-disant, prétendument, on verra, comme par hasard : la personne rapporte une information sans y croire. Le journaliste, lui, prend ses distances avec le conditionnel : le feu serait parti d'un camion. EN: Soi-disant, prétendument and the journalist's conditional report a claim without vouching for it.",
    examples: [
      { itemId: E(1676), note: 'soi-disant : le doute' },
      { itemId: E(1688), note: 'le conditionnel du journaliste' },
      { itemId: E(1751), note: 'mettre en doute, dans un résumé' },
    ],
  },

  /** Act 7: fact, source, witness. */
  source: {
    term: 'la source',
    title: 'Qui le dit, et est-ce confirmé',
    body: "Dans un reportage, chaque information a une source : les pompiers affirment, la commune reste prudente, le témoin accuse. Un fait vérifié, une piste au conditionnel et l'avis d'un témoin n'ont pas le même poids dans tes notes. EN: Each piece of news has a source; a checked fact, a conditional lead and a witness's view weigh differently.",
    examples: [
      { itemId: E(1689), note: 'un fait, avec sa source' },
      { itemId: E(1694), note: "l'avis d'un témoin" },
      { itemId: E(1696), note: 'trois voix, trois poids' },
    ],
  },

  /** Act 8: the polite no. */
  implicite: {
    term: "l'implicite",
    title: 'Le non qui ne dit pas son nom',
    body: "Au téléphone ou en réunion, on refuse rarement en disant non. « C'est une piste », « ça me paraît difficile », « sur le principe, pourquoi pas » : écoute ce qui n'est pas dit, et ce qui reste ouvert. EN: A polite no rarely says no; listen for what is left unsaid and what stays open.",
    examples: [
      { itemId: E(1705), note: 'un refus poli' },
      { itemId: E(1713), note: 'ni oui, ni non' },
      { itemId: E(1708), note: 'une vraie ouverture' },
    ],
  },

  /** Act 9: recovering after a missed chunk. */
  fil: {
    term: 'le fil perdu',
    title: 'Rattraper un passage raté',
    body: "Tu as décroché ? Ne reviens pas en arrière dans ta tête. Laisse un blanc, attends le prochain panneau ou la reformulation (autrement dit, en d'autres termes), et le résumé final comble souvent le trou. EN: Leave a gap, wait for the next signpost or the rephrasing; the final recap often fills the hole.",
    examples: [
      { itemId: E(1724), note: 'attendre le prochain panneau' },
      { itemId: E(1725), note: 'laisser un blanc' },
      { itemId: E(1733), note: 'le résumé final' },
    ],
  },
};
