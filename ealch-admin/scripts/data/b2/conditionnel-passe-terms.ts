// b2.02.l1 « Le conditionnel passé »: the lesson glossary.
// DRAFT, to B1-BUILD-PLAYBOOK.md under B2-BUILD-LOG.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip. THREE CHIPS PER SECTION AT MOST, labels
// 8 to 13 characters (the 37-character chip row on a Pixel 6).
//
// B2 LANGUAGE RULE: natural French, addressed as « tu », then ONE English line
// starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './conditionnel-passe-corpus.ts';

export const CONDITIONNEL_PASSE_TERMS: Record<string, LessonTerm> = {
  /** The lesson's one metaphor, from lesson 8 in B1. */
  recul: {
    term: 'le recul',
    title: 'Le même pas en arrière',
    body: "Le conditionnel présent recule d'un pas devant le réel. Le conditionnel passé fait le même pas, mais depuis un moment qui est déjà fini : hier, vendredi, à ce moment-là. EN: The same step back as the present conditional, taken from a moment that is over.",
    examples: [
      { itemId: E(1200), note: 'devant toi : un conseil pour la suite' },
      { itemId: E(1201), note: 'derrière toi : une chose possible, et pas faite' },
    ],
  },

  /** Act 2. */
  forme: {
    term: 'la forme',
    title: 'Deux mots que tu connais',
    body: "Avoir ou être au conditionnel présent, puis le participe passé. Le choix de l'auxiliaire et l'accord sont ceux du passé composé. EN: Avoir or être in the present conditional, then the past participle; auxiliary and agreement as in the passé composé.",
    examples: [
      { itemId: E(1213), note: 'avoir : aurais, puis dû' },
      { itemId: E(1220), note: 'être : serait, puis venue, accordé' },
      { itemId: E(1223), note: 'un verbe en se prend être' },
    ],
  },

  /** Act 3. */
  repere: {
    term: 'le repère',
    title: 'Le mot de temps choisit',
    body: "Hier, samedi dernier, à ce moment-là : le moment est fini, tu prends le conditionnel passé. Ce soir, la prochaine fois, un jour : le moment reste ouvert, tu gardes le présent. EN: A finished moment takes the past conditional; an open one keeps the present.",
    examples: [
      { itemId: E(1233), note: 'hier soir : derrière' },
      { itemId: E(1232), note: 'ce soir : devant' },
    ],
  },

  /** Act 4. */
  regret: {
    term: 'le regret',
    title: 'Une porte fermée',
    body: "J'aurais aimé, j'aurais voulu, j'aurais préféré : une envie qui n'a pas pu se réaliser. Je n'aurais pas dû : un acte fait, que tu désapprouves. EN: A wish that could not come true, or an act you now disapprove of.",
    examples: [
      { itemId: E(1249), note: 'une envie qui ne peut plus se réaliser' },
      { itemId: E(1252), note: 'un acte fait, et regretté' },
    ],
  },

  /** Act 5. */
  reproche: {
    term: 'le reproche',
    title: 'Reprocher sans fermer la porte',
    body: "Tu aurais dû vise la personne. Il aurait fallu vise le travail. On aurait pu partage la faute. Plus tu t'éloignes de la personne, plus le reproche passe. EN: The further the form moves from the person, the easier the reproach is to take.",
    examples: [
      { itemId: E(1264), note: 'direct : vous' },
      { itemId: E(1265), note: 'neutre : personne n’est nommé' },
      { itemId: E(1266), note: 'partagé : on, nous' },
    ],
  },

  /** Act 6. */
  modaux: {
    term: 'dû, pu, voulu',
    title: 'Trois verbes, deux temps',
    body: "J'ai dû : c'est arrivé, ou on le suppose. J'aurais dû : ça devait arriver, et non. J'ai pu : réussi. J'aurais pu : possible, pas fait. J'ai voulu : essayé. EN: The passé composé says it happened or was tried; the past conditional says it did not.",
    examples: [
      { itemId: E(1275), note: 'une supposition' },
      { itemId: E(1276), note: 'une attente déçue' },
      { itemId: E(1281), note: 'un danger évité' },
    ],
  },

  /** Act 7. */
  piege: {
    term: 'aurai, aurais',
    title: 'Un s qui change tout',
    body: "J'aurai fini : un moment à venir, c'est le futur antérieur. J'aurais fini : ce qui aurait eu lieu. À l'oral, presque pareil. Pour un regret ou un reproche, toujours aurais. EN: Without the s, a regret turns into a future.",
    examples: [
      { itemId: E(1291), note: 'demain : sans s' },
      { itemId: E(1298), note: 'un regret : avec s' },
    ],
  },

  /** Act 8. */
  irreel: {
    term: "l'irréel",
    title: 'Ce qui aurait pu arriver',
    body: "Un résultat imaginé pour une situation passée. La condition tient souvent dans un petit groupe : sans, avec, à ta place, sinon, une minute plus tard. Avec si, c'est le plus-que-parfait, jamais le conditionnel. EN: An imagined past result; after si, never a conditional.",
    examples: [
      { itemId: E(1301), note: 'sans : la condition en trois mots' },
      { itemId: E(1306), note: 'un moment qui sert de condition' },
      { itemId: E(1312), note: 'et avec si' },
    ],
  },

  /** Act 9. */
  politesse: {
    term: 'la politesse',
    title: 'Deux pas en arrière',
    body: "J'aurais voulu vous demander : la demande est pour maintenant, mais elle recule de deux pas. Garde-la pour un grand service ou une personne importante. Entre amis, pour le sel, elle sonne ironique. EN: A request for now, stepped back twice; keep it for real favours.",
    examples: [
      { itemId: E(1314), note: 'au guichet, avant un vrai service' },
      { itemId: E(1316), note: 'une question qui n’accuse personne' },
    ],
  },

  /** Act 10. */
  ondit: {
    term: 'le on-dit',
    title: 'Qui signe la phrase',
    body: "Au passé composé, la rédaction garantit le fait. Au conditionnel passé, elle rapporte un fait passé sans le garantir. Ce n'est pas un doute : c'est une distance. EN: The passé composé vouches for a past fact; the past conditional reports it without vouching.",
    examples: [
      { itemId: E(1329), note: 'vérifié : la rédaction signe' },
      { itemId: E(1324), note: 'rapporté : personne ne signe encore' },
    ],
  },
};
