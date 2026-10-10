// c2.09.l1 « Soutenir un discours long » — the lesson glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 6 to 23 characters; sections that combine two
// or three terms stay inside budget (checked by hand per section, as the
// playbook requires — there is no validator for the reverse of "named key
// has no definition").
//
// Every term defined here is surfaced by at least one section's `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson; there is no
// validator for an unsurfaced term).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './discours-long-corpus.ts';

export const DISCOURS_LONG_TERMS: Record<string, LessonTerm> = {
  /** Act 1: the central metaphor. */
  sentier: {
    term: 'le sentier balisé',
    title: 'Un seul tenant, personne pour relancer',
    body: "Un exposé devant un jury tient grâce à ses relances ; une réponse en direct tient sur quelques phrases. Une visite guidée ne ressemble à aucun des deux : personne ne relance, personne n’interrompt, et le guide porte seul un plan qui dure parfois quarante-cinq minutes. EN: An exposé before a jury holds thanks to its follow-ups; a live reply holds for a few sentences. A guided walk is neither: nobody follows up, nobody interrupts, and the guide alone carries a plan that sometimes lasts forty-five minutes.",
    examples: [
      { itemId: E(2006), note: 'un exposé tient grâce aux relances du jury' },
      { itemId: E(2007), note: 'une réponse en direct tient sur quelques phrases' },
      { itemId: E(2011), note: 'ici, c’est le plan entier qui doit tenir' },
    ],
  },

  /** Act 2: deliberate signposting vs strings of fillers. */
  balise: {
    term: 'la balise',
    title: 'Un marqueur qui annonce, jamais un mot qui remplit',
    body: "Venons-en maintenant à, cela m’amène à, pour résumer avant de poursuivre : ces balises, dites posément, annoncent clairement le passage d’une partie à l’autre. Une suite de mots de remplissage (et puis, enfin, voilà, bon) n’annonce rien du tout, et laisse le groupe sans aucun repère. EN: A balise announces the move from one part to the next; a string of filler words announces nothing at all, and leaves the group with no bearing.",
    examples: [
      { itemId: E(2012), note: 'pour commencer, suivons le chemin' },
      { itemId: E(2013), note: 'venons-en maintenant à…' },
      { itemId: E(2022), note: 'la règle qui sépare les deux' },
    ],
  },

  /** Act 3: the macro-architecture. */
  charpente: {
    term: 'la charpente',
    title: 'Quatre gestes, une durée entière',
    body: "Annoncer le plan entier, tenir l’ordre annoncé, signaler chaque passage, puis rappeler le plan à la fin de chaque grande partie : la charpente tient debout quel que soit le contenu de chaque partie, parce qu’elle structure la durée entière, pas une seule phrase. Sans elle, une visite longue part souvent dans plusieurs directions à la fois. EN: Announce the whole plan, hold its order, signal each passage, then recall the plan at the end of each part; the architecture holds regardless of each part’s content because it structures the whole length, not one sentence.",
    examples: [
      { itemId: E(2030), note: 'premier geste : annoncer' },
      { itemId: E(2034), note: 'troisième geste : signaler' },
      { itemId: E(2036), note: 'quatrième geste : rappeler' },
    ],
  },

  /** Act 4: returning to the plan, not correcting a word. */
  reprise: {
    term: 'la reprise',
    title: 'Revenir au plan, jamais recommencer la visite',
    body: "Je referme cette parenthèse, pour revenir à notre fil conducteur, je reprends ici le plan annoncé : chacune de ces formules nomme où l’on en était, puis repart de ce point exact. Recommencer depuis le début de la visite, ou s’excuser plusieurs fois, efface au contraire des minutes entières déjà tenues. La reprise vise le plan entier, jamais un seul mot isolé. EN: Each of these phrases names where things stood, then sets off again from that exact point; restarting from the beginning, or apologising repeatedly, erases whole minutes already held. A reprise targets the whole plan, never a single word.",
    examples: [
      { itemId: E(2047), note: 'je referme cette parenthèse' },
      { itemId: E(2056), note: 'la règle : garder la direction, pas la jeter' },
      { itemId: E(2062), note: 'le plan entier, jamais un mot isolé' },
    ],
  },

  /** Act 5: judging two whole long excerpts. */
  distance: {
    term: 'tenir la distance',
    title: 'Toute la longueur, pas une seule phrase',
    body: "Rester dans le plan, refermer chaque aparté, et avancer : un extrait qui fait les trois tient debout sur toute sa longueur. Un extrait peut être grammaticalement parfait et pourtant perdre son architecture en chemin, si une seule parenthèse n’est jamais refermée. EN: Staying in the plan, closing every aside, and moving forward keep an extract standing over its whole length; an extract can be grammatically flawless and still lose its architecture if a single aside is never closed.",
    examples: [
      { itemId: E(2065), note: 'extrait B : rappelle, relie, annonce la suite' },
      { itemId: E(2066), note: 'extrait A : perd le plan dès la première phrase' },
      { itemId: E(2076), note: 'les trois conditions nommées ensemble' },
    ],
  },

  /** Act 6: the trap — genuine return vs drift. */
  retour: {
    term: 'la reprise réelle',
    title: 'Même hésitation, deux destinations différentes',
    body: "« Bon, je referme la parenthèse, enfin, je sais plus trop » et « je referme la parenthèse sur les castors, et je reviens à la tourbière » commencent presque pareil. Le premier tourne en rond sans jamais rien nommer ; le second nomme le point exact du plan et y revient. La différence n’est jamais dans le mot d’hésitation, elle est dans ce qui arrive juste après. EN: These two openings sound almost alike; one circles without ever naming anything, the other names the plan’s exact point and returns to it. The difference is never the hesitation word, it is what comes right after.",
    examples: [
      { itemId: E(2077), note: 'dérive : tourne en rond' },
      { itemId: E(2078), note: 'reprise réelle : nomme et revient' },
      { itemId: E(2089), note: 'la règle qui sépare les deux' },
    ],
  },

  /** Act 7 and 8: looping the whole turn closed. */
  cloture: {
    term: 'la clôture bouclée',
    title: 'Reboucler sur le plan, jamais s’arrêter au hasard',
    body: "Une vraie clôture reboucle sur le plan annoncé au départ, point par point, même brièvement. S’arrêter net au dernier point, sans jamais reboucler, laisse croire que la visite s’est arrêtée au hasard, même si chaque partie, prise isolément, était réussie. EN: A real closing loops back onto the plan announced at the start, point by point, however briefly; stopping dead at the last point without looping back suggests the walk simply stopped at random, even if each part was fine on its own.",
    examples: [
      { itemId: E(2100), note: 'nous avons vu trois choses aujourd’hui' },
      { itemId: E(2101), note: 'la règle : reboucler, point par point' },
      { itemId: E(2110), note: 'le bilan de la mission' },
    ],
  },
};
