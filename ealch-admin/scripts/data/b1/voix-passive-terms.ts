// b1.18.l1 « La voix passive » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, so the widest trio
// (« le réflexe on » + « par + agent » + « la consigne ») is 35. Asserted in
// the scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './voix-passive-corpus.ts';

export const VOIX_PASSIVE_TERMS: Record<string, LessonTerm> = {
  /** The form itself. */
  passif: {
    term: 'le passif',
    title: 'Être plus le participe passé',
    body: "Le sujet ne fait rien : la chose lui arrive. Tu prends être au temps que tu veux, puis le participe passé du verbe. La lettre est écrite. Le magasin sera fermé. EN: In the passive the subject does nothing; you take être plus the past participle.",
    examples: [
      { itemId: E(1015), note: 'une lettre, et personne qui écrit' },
      { itemId: E(1011), note: "sur la porte d'un magasin" },
      { itemId: 'fr.a2.hebergement.112', note: "l'affiche du petit déjeuner" },
    ],
  },

  /** What the participle does with the subject. */
  accord: {
    term: "l'accord",
    title: 'Le participe suit le sujet',
    body: "Le participe passé se termine comme un adjectif : il suit le sujet. Écrit, écrite, écrits, écrites. Regarde le sujet avant d'écrire la fin du mot. EN: The participle ends like an adjective and follows the subject.",
    examples: [
      { itemId: E(1017), note: 'sujet féminin pluriel, donc -es' },
      { itemId: E(1018), note: 'sujet masculin pluriel, donc -s' },
      { itemId: E(1024), note: 'sujet féminin singulier, donc -e' },
    ],
  },

  /** The agent, and its usual absence. */
  agent: {
    term: 'par + agent',
    title: "Qui l'a fait, quand ça compte",
    body: "Tu peux nommer l'auteur avec par. Le français le fait rarement : neuf phrases au passif sur dix n'ont pas de par. Mets-le seulement s'il apprend quelque chose au lecteur. EN: par names the doer, and French usually leaves it out.",
    examples: [
      { itemId: E(1059), note: "mille ouvriers : l'information vaut la peine" },
      { itemId: E(1058), note: 'la même tour, sans auteur' },
      { itemId: E(1060), note: 'personne ne demande qui a livré' },
    ],
  },

  /** The spoken reflex. */
  on: {
    term: 'le réflexe on',
    title: 'Ce que la bouche dit',
    body: "Quand tu parles, tu ne construis pas un passif : tu dis on. On a fermé la rue. On m'a volé mon vélo. C'est plus court, plus naturel, et personne n'est nommé non plus. EN: Out loud French says on, which is shorter and names nobody either.",
    examples: [
      { itemId: E(1090), note: 'la version parlée' },
      { itemId: E(1091), note: "la version de l'affiche" },
      { itemId: 'fr.a2.verbes.243', note: 'un panneau derrière un guichet' },
    ],
  },

  /** What happens to you. */
  sefaire: {
    term: 'se faire',
    title: "Se faire, pour ce qui t'arrive",
    body: "Se faire plus l'infinitif dit que la chose t'est arrivée, à toi. Je me suis fait voler mon vélo. Le mot fait ne change jamais, et le verbe qui suit reste à l'infinitif. EN: se faire plus an infinitive says it happened to you; fait never changes.",
    examples: [
      { itemId: E(1110), note: 'le vol, vu du propriétaire' },
      { itemId: E(1111), note: "fait ne prend pas de e, même avec elle" },
      { itemId: E(1117), note: 'tu as demandé, et tu as obtenu' },
    ],
  },

  /** The pronominal passive. */
  pronominal: {
    term: 'ça se dit',
    title: 'Ce qui se fait, en général',
    body: "Pour une habitude générale, le français met le verbe au pronominal. Ça se dit. Le vin blanc se sert frais. Ce n'est ni une personne ni un moment précis : c'est la règle du monde. EN: For a general habit French uses the pronominal, not être.",
    examples: [
      { itemId: E(1129), note: 'une règle de table, pas un ordre' },
      { itemId: E(1133), note: 'une habitude, pas un événement' },
      { itemId: E(1136), note: 'comment ça marche, en général' },
    ],
  },

  /** Where the passive lives. */
  affiche: {
    term: "l'affiche",
    title: 'La langue des portes',
    body: "Sur une porte, dans un règlement, dans un courriel officiel, le passif est normal : le lecteur veut savoir ce qui est fait, pas qui le fait. C'est là que tu le liras le plus souvent. EN: On doors and in rules the passive is normal: the reader wants the fact.",
    examples: [
      { itemId: E(1011), note: 'trois mots sur une vitrine' },
      { itemId: E(1084), note: 'un avis dans un hall' },
      { itemId: 'fr.b1.droit.002', note: "un panneau de stationnement" },
    ],
  },

  /** The trap. */
  donner: {
    term: 'donner à',
    title: 'Le passif impossible',
    body: "En anglais, on peut dire I was given a book. En français, la personne ne peut pas devenir le sujet : donner, dire, demander, offrir, promettre marchent avec à. Dis on m'a donné un livre. EN: French cannot make the person the subject of these verbs.",
    examples: [
      { itemId: E(1143), note: 'la seule façon de le dire' },
      { itemId: E(1152), note: "le livre peut être sujet, pas la sœur" },
      { itemId: 'fr.a2.verbes.122', note: 'le même verbe, avec à' },
    ],
  },

  /** The written product the task asks for. */
  consigne: {
    term: 'la consigne',
    title: 'Écrire une règle',
    body: "Une consigne dit ce qui est fait et ce qui doit être fait. Elle ne nomme presque jamais l'auteur, et elle mélange le présent, le futur et doit être. C'est ce que tu vas écrire à la fin. EN: A set of rules says what is done and what must be done, and names nobody.",
    examples: [
      { itemId: E(1178), note: 'une obligation, sans auteur' },
      { itemId: E(1180), note: "une conséquence, au futur" },
      { itemId: E(1181), note: 'une demande polie, au pluriel' },
    ],
  },

  /** être carries the tense. */
  temps: {
    term: 'les temps',
    title: 'Être porte le temps',
    body: "Le participe ne bouge pas avec le temps : c'est être qui change. Est fermé, a été fermé, était fermé, sera fermé, serait fermé. Cinq temps, un seul participe. EN: The participle does not change with the tense; être does.",
    examples: [
      { itemId: E(1036), note: 'le passé composé de être, plus le participe' },
      { itemId: E(1038), note: 'le futur de être, même participe' },
      { itemId: E(1039), note: 'le conditionnel, pour une hypothèse' },
    ],
  },
};
