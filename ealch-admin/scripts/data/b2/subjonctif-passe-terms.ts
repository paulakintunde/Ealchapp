// b2.05.l1 « Le subjonctif passé »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The longest (« le superlatif »
// 13, « l’auxiliaire » 12) are never used together.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './subjonctif-passe-corpus.ts';

export const SP_TERMS: Record<string, LessonTerm> = {
  accompli: {
    term: 'l’accompli',
    title: 'Déjà fait au moment du verbe principal',
    body: "Une action est accomplie quand elle est terminée au moment où tu réagis, où tu doutes ou où tu fixes l'échéance. C'est ce seul fait qui fait passer le subjonctif au passé. EN: An action is complete when it is over at the moment of the main verb; that alone puts the subjunctive into the past.",
    examples: [
      { itemId: E(1200), note: 'la visite est finie quand tu parles' },
      { itemId: E(1203), note: 'le départ de Samir est fait' },
      { itemId: E(1206), note: 'la pluie est terminée' },
    ],
  },

  horloge: {
    term: 'l’horloge',
    title: 'Présent ou passé : l’horloge décide',
    body: "Le déclencheur choisit le subjonctif ; l'horloge choisit sa forme. Elle se règle sur le verbe principal, pas sur le calendrier : en même temps ou plus tard, le présent ; déjà fait, le passé. EN: The clock is set on the main verb, not the calendar: simultaneous or later is present, already done is past.",
    examples: [
      { itemId: E(1262), note: 'j’étais content : il était là en même temps' },
      { itemId: E(1263), note: 'j’étais content : il était déjà venu' },
      { itemId: E(1266), note: 'hier, et pourtant le présent' },
    ],
  },

  declencheur: {
    term: 'déclencheur',
    title: 'Ce qui appelle le subjonctif',
    body: "Un sentiment, un doute, une nécessité, bien que, un superlatif : c'est l'expression devant que qui appelle le subjonctif, comme au B1. Le subjonctif passé ne change rien à cette liste. EN: The expression before que calls the subjunctive; the past subjunctive does not change the list.",
    examples: [
      { itemId: E(1276), note: 'un sentiment : blessée que' },
      { itemId: E(1299), note: 'un doute : je ne crois pas que' },
      { itemId: E(1314), note: 'une nécessité : il faut que' },
    ],
  },

  auxiliaire: {
    term: 'l’auxiliaire',
    title: 'Avoir ou être, au subjonctif présent',
    body: "Le subjonctif passé garde l'auxiliaire du passé composé et le met au subjonctif présent : j'ai fini donne que j'aie fini, je suis parti donne que je sois parti. Tu n'as rien de nouveau à choisir. EN: Keep the passé composé auxiliary and put it in the present subjunctive.",
    examples: [
      { itemId: E(1212), note: 'avoir : que j’aie fini' },
      { itemId: E(1218), note: 'être : que je sois parti' },
      { itemId: E(1227), note: 'être lui-même prend avoir' },
    ],
  },

  accord: {
    term: 'l’accord',
    title: 'Quand le participe change',
    body: "Avec être, le participe s'accorde avec le sujet : qu'elle soit arrivée. Avec avoir, seulement avec un complément direct placé avant : que tu les aies retrouvées. Les pronominaux prennent être. EN: With être, agree with the subject; with avoir, only with a direct object placed before.",
    examples: [
      { itemId: E(1240), note: 'être : arrivée, avec elle' },
      { itemId: E(1242), note: 'avoir : retrouvées, avec les' },
      { itemId: E(1248), note: 'téléphoné : se veut dire à l’autre' },
    ],
  },

  doute: {
    term: 'le doute',
    title: 'Douter de ce qui s’est passé',
    body: "Quand tu doutes d'un fait déjà passé, le subjonctif passé : je doute qu'il ait compris. Mais je crois, je pense, il me semble et il est probable affirment : ils gardent l'indicatif. EN: A doubt about a past fact takes the past subjunctive; belief and probability keep the indicative.",
    examples: [
      { itemId: E(1296), note: 'il est possible : un doute' },
      { itemId: E(1300), note: 'je crois : l’indicatif' },
      { itemId: E(1305), note: 'il me semble : l’indicatif' },
    ],
  },

  echeance: {
    term: 'l’échéance',
    title: 'Fait avant la date',
    body: "Avec une date limite, le subjonctif passé dit que l'action sera terminée à ce moment-là : il faut que tu aies fini avant lundi. Il regarde vers l'avenir, et pourtant il est au passé. EN: With a deadline, the past subjunctive says the action will be finished by then.",
    examples: [
      { itemId: E(1314), note: 'le résultat, lundi' },
      { itemId: E(1320), note: 'avant que : la relecture d’abord' },
      { itemId: E(1323), note: 'avant qu’il fasse nuit : le début' },
    ],
  },

  superlatif: {
    term: 'le superlatif',
    title: 'Le meilleur, le seul, le premier',
    body: "Après un superlatif, le seul, le premier ou le dernier, l'écrit soigné met le subjonctif : c'est le meilleur film que j'aie vu. Mais la première fois que garde toujours l'indicatif. EN: After a superlative, careful writing uses the subjunctive; la première fois que keeps the indicative.",
    examples: [
      { itemId: E(1333), note: 'le meilleur : que j’aie vu' },
      { itemId: E(1344), note: 'la seule : qui m’ait aidé' },
      { itemId: E(1338), note: 'la première fois que : indicatif' },
    ],
  },

  concession: {
    term: 'bien que',
    title: 'Bien que sur un fait terminé',
    body: "Bien que et quoique prennent toujours le subjonctif ; si le fait est déjà fini, le subjonctif passé : bien qu'il ait plu. Même si, lui, garde l'indicatif. EN: Bien que always takes the subjunctive, past if the fact is over; même si keeps the indicative.",
    examples: [
      { itemId: E(1350), note: 'la pluie est finie' },
      { itemId: E(1352), note: 'même si : l’indicatif' },
      { itemId: E(1353), note: 'quoique : même règle' },
    ],
  },

  memesujet: {
    term: 'même sujet',
    title: 'Un seul sujet : l’infinitif passé',
    body: "Quand la personne qui ressent est aussi celle qui a agi, pas de que : de, puis avoir ou être et le participe. Je suis content d'être venu ; je regrette de ne pas avoir appelé. EN: When the same person feels and acted, use de plus the past infinitive.",
    examples: [
      { itemId: E(1365), note: 'je suis venu, je suis content' },
      { itemId: E(1366), note: 'ne pas avant avoir' },
      { itemId: E(1369), note: 'deux sujets : que + subjonctif' },
    ],
  },
};
