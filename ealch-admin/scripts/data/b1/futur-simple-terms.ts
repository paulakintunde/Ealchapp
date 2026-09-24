// b1.05.l1 « Le futur simple : la formation » — the lesson glossary. DRAFT,
// to RICH-LESSON-STANDARD.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 9 to 12 characters, so the widest trio
// (« futur simple » + « futur proche » + « un marqueur ») is 35. Asserted in
// the scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './futur-simple-corpus.ts';

export const FUTUR_SIMPLE_TERMS: Record<string, LessonTerm> = {
  /** The left half of the machine (acts 2, 3, 5, 6). */
  radical: {
    term: 'le radical',
    title: "Le radical, c'est l'infinitif",
    body: "Le radical, c'est le morceau qui porte la terminaison. Au futur, ce morceau est l'infinitif lui-même, gardé jusqu'à son r. Rien à enlever, rien à chercher ailleurs. EN: The stem is the part that carries the ending, and for the future it is the infinitive itself, kept as far as its r.",
    examples: [
      { itemId: E(16), note: 'parler + ai, sans rien couper' },
      { itemId: E(36), note: 'prendre perd son e, garde son r' },
      { itemId: E(166), note: 'la marque commune de tous les radicaux' },
    ],
  },

  /** What the learner already has, renamed for this job (act 2). */
  infinitif: {
    term: "l'infinitif",
    title: "L'infinitif fait tout le travail",
    body: "Pour les autres temps, tu coupes l'infinitif avant d'ajouter quelque chose. Au futur, tu ne coupes presque rien : tu écris le verbe comme dans le dictionnaire, puis la terminaison. EN: Other tenses cut the infinitive first; the future barely cuts it at all.",
    examples: [
      { itemId: E(71), note: 'étudier reste entier : étudierai' },
      { itemId: E(22), note: 'finir reste entier : finirai' },
      { itemId: E(35), note: 'la seule coupure du futur régulier' },
    ],
  },

  /** The right half of the machine (act 2). */
  simple: {
    term: 'futur simple',
    title: 'Un seul mot, une seule forme',
    body: "Le futur simple tient en un mot : radical plus terminaison. Il annonce, il écrit, il engage. C'est le futur des horaires, des courriels et des promesses. EN: The futur simple is one word, and it is the tense of timetables, emails and promises.",
    examples: [
      { itemId: E(2), note: 'une promesse écrite' },
      { itemId: E(62), note: 'un horaire annoncé' },
      { itemId: E(13), note: "un engagement d'entreprise" },
    ],
  },

  /** The other machine (act 4). */
  proche: {
    term: 'futur proche',
    title: 'aller plus infinitif',
    body: "Le futur proche est en deux mots : aller au présent, puis l'infinitif. Il garde un fil avec maintenant : c'est décidé, c'est lancé, ou tu le vois arriver. EN: The futur proche is two words and keeps a thread back to now.",
    examples: [
      { itemId: E(56), note: 'tu le vois arriver' },
      { itemId: E(61), note: 'ça commence dans dix secondes' },
      { itemId: 'fr.a2.cafe.053', note: "c'est déjà en route" },
    ],
  },

  /** What the futur simple does that the other one does not (acts 1, 4). */
  promesse: {
    term: 'une promesse',
    title: "Ce que le futur simple engage",
    body: "Quand tu écris au futur simple, tu prends un engagement : la date, le paiement, la réponse. Ton lecteur peut te le rappeler plus tard. EN: The futur simple commits you, and the person reading can hold you to it.",
    examples: [
      { itemId: E(3), note: 'une date qui compte' },
      { itemId: E(12), note: 'un engagement de propriétaire' },
      { itemId: E(163), note: 'une promesse à soi-même' },
    ],
  },

  /** The spelling verbs (act 5). */
  emuet: {
    term: 'le e muet',
    title: "Un e qu'on écrit sans l'entendre",
    body: "Dans étudierai, jouerons ou créeront, le e de l'infinitif ne s'entend presque pas. Il s'écrit quand même, parce que le radical du futur est l'infinitif complet. EN: In these verbs the written e is barely audible, and it is written all the same.",
    examples: [
      { itemId: E(72), note: 'quatre syllabes, pas cinq' },
      { itemId: E(74), note: 'jouer donne jouerons' },
      { itemId: E(85), note: 'la règle en une phrase' },
    ],
  },

  /** The stem-changing -er verbs (act 6). */
  yeni: {
    term: 'le y en i',
    title: 'payer donne paierai',
    body: "Les verbes en -ayer, -oyer et -uyer changent leur y en i devant un e muet, et le futur compte comme tel. Le changement vaut à toutes les personnes. EN: Verbs in -ayer, -oyer and -uyer turn their y into i, at every person.",
    examples: [
      { itemId: E(92), note: 'payer donne vous paierez' },
      { itemId: E(93), note: 'essayer donne ils essaieront' },
      { itemId: E(104), note: 'employer donne elle emploiera' },
    ],
  },

  /** Word order (act 7). */
  negation: {
    term: 'la négation',
    title: 'Un verbe en un mot, facile à entourer',
    body: "Le futur simple est en un seul mot, donc ne et pas se placent autour de lui, exactement comme au présent. Les pronoms restent devant le verbe. EN: One word means ne and pas simply wrap around it, as in the present.",
    examples: [
      { itemId: E(109), note: 'ne ... pas autour du verbe' },
      { itemId: E(111), note: 'le pronom reste devant' },
      { itemId: E(121), note: "l'ordre en une phrase" },
    ],
  },

  /** Time words (act 8). */
  marqueur: {
    term: 'un marqueur',
    title: 'Un marqueur situe, il ne commande pas',
    body: "Demain, la semaine prochaine, dans deux ans : ces mots disent quand, pas quel temps. Après demain, tu peux mettre le présent, le futur proche ou le futur simple. EN: Time words say when, not which tense.",
    examples: [
      { itemId: E(123), note: 'demain avec le futur simple' },
      { itemId: E(132), note: 'le même demain, futur proche' },
      { itemId: E(135), note: 'le même soir, au présent' },
    ],
  },
};
