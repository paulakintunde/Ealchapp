// b1.25.l1 « Les registres de langue » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 11 characters, so the widest trio
// (« le registre » + « le familier » + « le faux pas ») is 33. Asserted in the
// scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './registres-corpus.ts';

/** b1.20's « Je ne sais pas. », reused by id (corpus §D). */
const B_SAIS = 'fr.b1.negation-et-restriction.1168';

export const REGISTRES_TERMS: Record<string, LessonTerm> = {
  /** The reframe as a chip. */
  registre: {
    term: 'le registre',
    title: 'Aucun registre n’est faux',
    body: "Le registre, c'est la tenue de ta phrase. Le même message peut être familier, courant ou soutenu. Aucun n'est faux : chacun va avec une personne et un moment. EN: Register is the outfit of a sentence; each one fits a person and a moment.",
    examples: [
      { itemId: E(1200), note: 'à une amie, oui ; à ta responsable, non' },
      { itemId: E(1201), note: 'la même nouvelle, pour ta responsable' },
      { itemId: E(1238), note: 'le courant va presque partout' },
    ],
  },

  familier: {
    term: 'le familier',
    title: 'Entre amis, en famille',
    body: "Le familier, c'est la langue des amis, de la famille et des textos. Des mots comme bagnole ou bosser, le ne qui tombe, t'as, y a. Ce n'est pas une faute : c'est une tenue d'intérieur. EN: Informal French is for friends, family and texts; not a mistake, an indoor outfit.",
    examples: [
      { itemId: E(1223), note: 'bagnole' },
      { itemId: E(1226), note: 'une réponse rapide, à un frère' },
      { itemId: E(1244), note: 'plus un rond : plus d’argent' },
    ],
  },

  courant: {
    term: 'le courant',
    title: 'Le registre qui va partout',
    body: "Le courant, c'est le français de tous les jours : au travail, au magasin, dans un courriel. Il garde le ne, il n'a pas d'abréviations, et il va avec presque tout le monde. EN: Everyday French keeps ne, drops abbreviations and suits almost everyone.",
    examples: [
      { itemId: E(1224), note: 'voiture' },
      { itemId: B_SAIS, note: 'le ne est là' },
      { itemId: E(1203), note: 'un courriel à une responsable' },
    ],
  },

  soutenu: {
    term: 'le soutenu',
    title: 'Les lettres et les discours',
    body: "Le soutenu, c'est la langue des lettres officielles, des discours et des livres. Des mots rares comme ouvrage ou véhicule, l'inversion, cela. Avec un ami, il sonne froid. EN: Formal French is for official letters, speeches and books; with a friend it sounds cold.",
    examples: [
      { itemId: E(1222), note: 'ouvrage, et l’inversion' },
      { itemId: E(1225), note: 'véhicule' },
      { itemId: E(1273), note: 'cela, pas ça' },
    ],
  },

  marqueur: {
    term: 'le marqueur',
    title: 'Les petits signes du registre',
    body: "Un marqueur montre le registre sans rien dire du sens : le ne qui tombe, on ou nous, la forme de la question, ça ou cela, t'as ou tu as. Tu les repères, puis tu choisis. EN: A marker shows register without touching meaning: ne, on or nous, the question, ça or cela.",
    examples: [
      { itemId: E(1265), note: 'le ne tombe' },
      { itemId: E(1267), note: 'nous, à l’écrit' },
      { itemId: E(1271), note: 't’as, à l’oral' },
    ],
  },

  lecteur: {
    term: 'le lecteur',
    title: 'Qui va lire, et quand',
    body: "Avant d'écrire, demande-toi qui va lire. Un ami, un collègue, un service : la nouvelle ne change pas, la tenue oui. Les faits restent les mêmes. EN: Before writing, ask who will read it; the news stays, the outfit changes.",
    examples: [
      { itemId: E(1280), note: 'à une amie' },
      { itemId: E(1283), note: 'à un collègue' },
      { itemId: E(1286), note: 'à un service' },
    ],
  },

  texto: {
    term: 'le texto',
    title: 'Les abréviations des amis',
    body: "Dans un texto entre amis, on coupe les mots : stp, bcp, jsp, mdr. Tu dois les comprendre. Dans un courriel, tu écris toujours les mots en entier. EN: Friends abbreviate in texts; recognise them, and write words in full in an email.",
    examples: [
      { itemId: E(1304), note: "s'il te plaît" },
      { itemId: E(1302), note: 'je sais pas' },
      { itemId: E(1313), note: 'rdv, en entier' },
    ],
  },

  formule: {
    term: 'la formule',
    title: 'La première et la dernière ligne',
    body: "Coucou, Salut, Bonjour Marc, Madame, Monsieur : la première ligne annonce le registre. Bisous, À plus, Bonne journée, Cordialement : la dernière le confirme. EN: The opening line announces the register and the closing line confirms it.",
    examples: [
      { itemId: E(1206), note: 'très familier' },
      { itemId: E(1323), note: 'courant, avec le nom' },
      { itemId: E(1327), note: 'courant, un peu soigné' },
    ],
  },

  fauxPas: {
    term: 'le faux pas',
    title: 'Le bon français, au mauvais endroit',
    body: "Un faux pas de registre, c'est une phrase juste dite à la mauvaise personne. Trop familier, tu sembles négligent. Trop soutenu, tu sembles distant, ou fâché. EN: A register slip is correct French in the wrong place: too casual reads careless, too stiff reads cold.",
    examples: [
      { itemId: E(1340), note: 'à une responsable : trop familier' },
      { itemId: E(1343), note: 'à un meilleur ami : trop raide' },
      { itemId: E(1346), note: 'la règle des deux côtés' },
    ],
  },

  quebec: {
    term: 'au Québec',
    title: 'Le familier va plus loin',
    body: "Au Québec, le familier s'entend partout : char, magasiner, chum, c'est plate. Et des mots comme courriel, fin de semaine ou dîner sont du courant, même à l'écrit. EN: In Québec informal French is heard everywhere, and courriel or fin de semaine are standard.",
    examples: [
      { itemId: E(1360), note: 'char : la voiture' },
      { itemId: E(1363), note: 'chum : le copain' },
      { itemId: E(1365), note: 'dîner : le repas de midi' },
    ],
  },
};
