// b1.39.l1 « Courriels et lettres »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 7 to 13 characters (« l’objet » is the one short
// label: no longer name for the subject line reads naturally), so the widest
// trio (« le connecteur » + « la relecture » + « le registre ») is 36.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, LS } from './courriels-lettres-corpus.ts';

export const COURRIELS_LETTRES_TERMS: Record<string, LessonTerm> = {
  objet: {
    term: 'l’objet',
    title: 'Le titre de ton courriel',
    body: "L'objet, c'est la ligne que ton lecteur voit avant d'ouvrir. En quelques mots, il dit de quoi tu parles, et souvent ce que tu veux. Un objet vide ou vague, et ton courriel attend. EN: The subject line is what the reader sees before opening; a vague one makes your email wait.",
    examples: [
      { itemId: E(1004), note: 'le sujet et le problème' },
      { itemId: E(1026), note: 'ce que tu veux, tout de suite' },
      { itemId: E(1029), note: 'trop vague pour un service' },
    ],
  },

  formules: {
    term: 'les formules',
    title: 'La première et la dernière ligne',
    body: "La formule d'appel ouvre le courriel, la formule de politesse le ferme. Elles vont ensemble : Salut appelle Bises, Madame, Monsieur appelle Cordialement ou une formule soutenue. EN: The greeting opens and the closing closes; they come as a matching pair.",
    examples: [
      { itemId: E(1032), note: 'à une amie' },
      { itemId: E(1033), note: 'à une responsable' },
      { itemId: LS(1185), note: 'une lettre officielle' },
    ],
  },

  ouverture: {
    term: 'l’ouverture',
    title: 'La phrase qui dit pourquoi',
    body: "L'ouverture, c'est la première phrase après la formule d'appel. Elle dit pourquoi tu écris : Je vous écris pour, Suite à notre conversation, En réponse à votre courriel. EN: The opening sentence says why you are writing.",
    examples: [
      { itemId: E(1050), note: 'pour : le but' },
      { itemId: E(1051), note: 'suite à : il y a eu un échange' },
      { itemId: E(1052), note: 'en réponse : tu réponds' },
    ],
  },

  demande: {
    term: 'la demande',
    title: 'Ce que tu attends du lecteur',
    body: "La demande dit ce que ton lecteur doit faire : remplacer, rembourser, répondre, confirmer. Sans elle, il ne sait pas quoi faire, même s'il comprend ton problème. Écris-la au conditionnel. EN: The request tells the reader what to do; without it they cannot act.",
    examples: [
      { itemId: E(1001), note: 'remplacer' },
      { itemId: E(1019), note: 'proposer un remplacement' },
      { itemId: E(1100), note: 'corriger, et donc' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'Une tenue du début à la fin',
    body: "Le registre, c'est la tenue de ton message : familier, courant ou soutenu. Dans un courriel, il reste le même de la formule d'appel à la signature, avec tu ou avec vous, jamais les deux. EN: Keep one register and one of tu or vous from first line to last.",
    examples: [
      { itemId: E(1172), note: 'vous, jusqu’au bout' },
      { itemId: E(1171), note: 'tu, dans un courriel à un hôtel' },
      { itemId: E(1045), note: 'deux tenues dans une ligne' },
    ],
  },

  genre: {
    term: 'le genre',
    title: "Les types de textes de l'examen",
    body: "À l'examen de B1, on te demande souvent un de ces textes : une invitation ou une réponse, une demande de renseignements, une réclamation, des nouvelles, des excuses. Chacun a ses étapes. EN: The B1 exam asks for a few text types, and each has its own steps.",
    examples: [
      { itemId: E(1076), note: 'refuser une invitation' },
      { itemId: E(1090), note: 'demander un renseignement' },
      { itemId: E(1110), note: 'réclamer' },
    ],
  },

  reclamer: {
    term: 'réclamer',
    title: 'Ferme, mais poli',
    body: "Réclamer, c'est demander ce qui t'est dû : une réparation, un remboursement, une correction. Tu racontes les faits, tu dis le problème, ce que tu as déjà fait, puis ce que tu demandes. Sans colère. EN: A complaint is firm and polite: facts, problem, what you did, what you want.",
    examples: [
      { itemId: E(1103), note: 'les faits' },
      { itemId: E(1098), note: 'ce que tu as déjà fait' },
      { itemId: E(1104), note: 'ce que tu demandes' },
    ],
  },

  excuse: {
    term: 'l’excuse',
    title: 'Reconnaître, expliquer, réparer',
    body: "Une excuse écrite a trois temps : tu reconnais le problème, tu l'expliques en une phrase, puis tu proposes de réparer. Une longue explication sonne comme une excuse pour ne pas t'excuser. EN: Own it, explain in one sentence, offer to put it right.",
    examples: [
      { itemId: E(1128), note: 'reconnaître' },
      { itemId: E(1129), note: 'expliquer, en une phrase' },
      { itemId: E(1132), note: 'réparer' },
    ],
  },

  connecteur: {
    term: 'le connecteur',
    title: 'Les panneaux de ton courriel',
    body: "Un connecteur en tête de phrase montre l'étape : tout d'abord, de plus, cependant, c'est pourquoi, enfin. Ton lecteur voit le plan de ton courriel sans le chercher. EN: A connector at the head of a sentence shows the step, so the reader sees your plan.",
    examples: [
      { itemId: E(1144), note: 'la première étape' },
      { itemId: E(1147), note: 'un fait qui s’oppose' },
      { itemId: E(1148), note: 'la conséquence : ta demande' },
    ],
  },

  relecture: {
    term: 'la relecture',
    title: 'Relire avant d’envoyer',
    body: "Avant d'envoyer, relis cinq choses : la demande est-elle là, le registre est-il le même partout, les accords, les accents, et la fin répond-elle au début. EN: Before sending, check the request, the register, agreements, accents and the ending.",
    examples: [
      { itemId: E(1161), note: 'ils sont arrivés : l’accord' },
      { itemId: E(1162), note: 'beaucoup, en entier' },
      { itemId: E(1167), note: 'les cinq points' },
    ],
  },
};
