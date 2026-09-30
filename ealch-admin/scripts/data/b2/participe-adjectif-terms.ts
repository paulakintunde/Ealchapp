// b2.13.l1 « Participe présent ou adjectif verbal »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 12 characters, so any three fit (the widest
// trio, « le participe », « le gérondif », « le registre », is 34).
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, G } from './participe-adjectif-corpus.ts';

export const PARTICIPE_ADJECTIF_TERMS: Record<string, LessonTerm> = {
  participe: {
    term: 'le participe',
    title: 'Le participe présent, sans en',
    body: "C'est la forme en -ant du gérondif, sans en devant. Il reste un verbe : il garde son complément, son adverbe, sa négation, et il ne s'accorde jamais. Il remplace souvent qui + verbe : les étudiants ayant réussi l'examen. EN: The -ant form without en; still a verb, never agreeing.",
    examples: [
      { itemId: E(1616), note: 'ayant réussi = qui ont réussi' },
      { itemId: E(1600), note: 'parlant, sans s, après assistantes' },
      { itemId: E(1632), note: 'n’ayant pas reçu : la négation' },
    ],
  },

  adjectif: {
    term: 'l’adjectif',
    title: "L'adjectif verbal",
    body: "Une forme en -ant qui ne fait plus l'action : elle dit une qualité du nom. Comme tout adjectif, elle s'accorde, elle accepte très et elle suit être : des histoires passionnantes, une soirée très fatigante. EN: An -ant word naming a quality; it agrees like any adjective.",
    examples: [
      { itemId: E(1687), note: 'une soirée fatigante' },
      { itemId: 'fr.sons.nasales.052', note: 'des histoires passionnantes' },
      { itemId: E(1705), note: 'très obéissants' },
    ],
  },

  accord: {
    term: 'l’accord',
    title: "Qui s'accorde, qui ne bouge pas",
    body: "L'adjectif verbal prend le genre et le nombre du nom : souriante, accueillants. Le participe présent ne prend jamais ni e ni s. Dans « étant arrivée », étant ne bouge pas, mais arrivée, participe passé avec être, s'accorde. EN: The adjective agrees; the present participle never does.",
    examples: [
      { itemId: E(1605), note: 'souriante et accueillante : deux adjectifs' },
      { itemId: E(1622), note: 'attendant, sans accord, après clientes' },
      { itemId: E(1671), note: 'étant invariable, arrivée accordé' },
    ],
  },

  tests: {
    term: 'les tests',
    title: 'Trois questions pour trancher',
    body: "Peux-tu ajouter très ? C'est un adjectif. Sinon, peux-tu dire qui + verbe ? C'est un participe. Y a-t-il un complément d'objet, un adverbe après ou une négation ? C'est un participe. Pose-les dans cet ordre : qui + verbe marche aussi pour bien des adjectifs (une soirée qui fatigue). EN: très means adjective; otherwise qui + verb, an object, an adverb after or a negation mean participle.",
    examples: [
      { itemId: E(1705), note: 'très : un adjectif' },
      { itemId: E(1704), note: 'à leur mère : un complément' },
      { itemId: E(1708), note: 'régulièrement après : un participe' },
    ],
  },

  registre: {
    term: 'le registre',
    title: "L'avis, le formulaire, la dépêche",
    body: "Le participe présent est la forme de l'écrit : avis, règlements, formulaires, annonces, presse. À l'oral, on dit qui + verbe, ou ceux qui : ceux qui veulent descendre à Lausanne. L'adjectif verbal, lui, est partout. EN: The participle belongs to notices and the press; speech says qui + verb.",
    examples: [
      { itemId: E(1636), note: 'l’avis du train' },
      { itemId: E(1637), note: 'la même chose, à l’oral' },
      { itemId: E(1641), note: 'la dépêche' },
    ],
  },

  cause: {
    term: 'la cause',
    title: 'En tête : parce que, comme',
    body: "Placé en tête de phrase, le participe dit souvent pourquoi : ne sachant que faire, il a appelé sa sœur, c'est-à-dire comme il ne savait pas quoi faire. Il prend alors le sujet du verbe principal, comme le gérondif. EN: At the head of a sentence, the participle often gives the cause.",
    examples: [
      { itemId: E(1652), note: 'comme il ne savait pas' },
      { itemId: E(1657), note: 'parce qu’ils craignaient la pluie' },
      { itemId: E(1654), note: 'étant malade : comme je suis malade' },
    ],
  },

  compose: {
    term: 'ayant fini',
    title: 'Le participe composé',
    body: "Ayant ou étant + participe passé : l'action est finie avant l'autre. Tu prends l'auxiliaire du passé composé : ayant fini, étant arrivée, s'étant trompée. Avec étant, le participe passé s'accorde avec le sujet. À l'oral, on dit plutôt après avoir fini. EN: Ayant or étant plus a past participle: done before.",
    examples: [
      { itemId: E(1670), note: 'ayant fini : fini avant le départ' },
      { itemId: E(1671), note: 'étant arrivée : être, accordé' },
      { itemId: E(1675), note: 'après avoir fini : la version courante' },
    ],
  },

  paires: {
    term: 'les paires',
    title: 'Même son, deux orthographes',
    body: "Une douzaine de verbes s'écrivent autrement selon le rôle : le participe garde le radical du verbe (fatiguant, convainquant, précédant), l'adjectif le change (fatigant, convaincant, précédent). À l'oreille, aucune différence : c'est le rôle qui décide. EN: A dozen pairs: the participle keeps the verb's spelling, the adjective changes it.",
    examples: [
      { itemId: E(1720), note: 'fatigants : l’adjectif, sans u' },
      { itemId: E(1725), note: 'provoquant : le participe, avec qu' },
      { itemId: E(1738), note: 'précédant : le participe, en -ant' },
    ],
  },

  noms: {
    term: 'les noms',
    title: 'Adhérent, fabricant, président',
    body: "Certaines de ces formes sont aussi des noms, et ils prennent l'orthographe de l'adjectif : un adhérent, un fabricant, un président, un précédent. Le participe, lui, reste adhérant, fabriquant, présidant. EN: Some are also nouns, spelled like the adjective.",
    examples: [
      { itemId: E(1751), note: 'les adhérents : un nom' },
      { itemId: E(1752), note: 'un fabricant : un nom' },
      { itemId: E(1753), note: 'fabriquant : le participe' },
    ],
  },

  sujet: {
    term: 'le sujet',
    title: 'Le bon nom',
    body: "Le participe se rattache au nom qu'il touche : en tête, au sujet du verbe principal ; après un nom, à ce nom. Habitant loin, le bus est pratique dit que le bus habite loin. Répare en changeant le sujet, ou avec comme. EN: The participle attaches to the noun it touches.",
    examples: [
      { itemId: E(1761), note: 'en tête : c’est moi qui sors' },
      { itemId: E(1760), note: 'après Paul : c’est Paul qui sort' },
      { itemId: E(1766), note: 'réparé : je, qui habite loin' },
    ],
  },

  gerondif: {
    term: 'le gérondif',
    title: 'En sortant ou sortant',
    body: "Le gérondif, avec en, dit une circonstance de l'action principale et prend toujours son sujet. Le participe, sans en, décrit un nom, celui qu'il touche. J'ai croisé Paul en sortant du métro : c'est toi qui sors. J'ai croisé Paul sortant du métro : c'est Paul. EN: En + -ant goes with the subject; -ant alone goes with the nearest noun.",
    examples: [
      { itemId: G(1745), note: 'en sortant : toi, le sujet' },
      { itemId: E(1760), note: 'sortant : Paul' },
      { itemId: G(1746), note: 'qui sortait : Paul aussi' },
    ],
  },
};
