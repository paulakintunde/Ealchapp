// c2.14.l1 « Bilan de maîtrise » — the lesson glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6,
// checked by hand per section, as the C1 playbook requires. Labels here run
// 9 to 20 characters; the longest pair used together (« une compétence
// cachée » 22 + « les quatre unités » 18 = 40) is never forced onto one row —
// every section below carries at most two of the longer terms together.
//
// Every term defined here is surfaced by at least one section's `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson in this folder).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, F201, F205, F206, F211, F213 } from './bilan-maitrise-corpus.ts';

export const BILAN_MAITRISE_TERMS: Record<string, LessonTerm> = {
  /** Act 1: the frame for the whole lesson. */
  dossier: {
    term: 'le dossier',
    title: 'Une seule voix, jamais treize',
    body: 'Le dossier de maîtrise n’est pas treize preuves séparées, une par leçon du C2 : c’est une seule réponse où les treize compétences s’entendent ensemble, comme des instruments qui jouent enfin la même pièce. EN: The mastery portfolio is not thirteen separate proofs, one per C2 lesson: it is a single response in which all thirteen skills can be heard together, like instruments finally playing the same piece.',
    examples: [
      { itemId: E(2402), note: 'le nom de l’exercice' },
      { itemId: E(2409), note: 'quatre unités, treize leçons, une seule pièce' },
    ],
  },

  /** Act 1: the band's own four-unit structure. */
  unites: {
    term: 'les unités',
    title: 'Précision, mots, discours, révision',
    body: 'Le C2 se lit en quatre unités : précision et style, mots et médiation, discours et analyse, révision et maîtrise. Ce bilan recombine les treize leçons de ces quatre unités ; il n’en ajoute aucune. EN: C2 reads as four units: precision and style, words and mediation, discourse and analysis, revision and mastery. This capstone recombines the thirteen lessons of those four units; it adds none.',
    examples: [
      { itemId: E(2405), note: 'la première unité' },
      { itemId: E(2408), note: 'la quatrième unité' },
    ],
  },

  /** Act 2: c2.11 + c2.12, the two recognition-only lessons, the input half. */
  armatureSignal: {
    term: 'l’armature',
    title: 'Trier avant de comprendre',
    body: 'Une phrase dense cache son armature, sujet et verbe principal, sous des subordonnées ; un appel bruité cache son signal sous plusieurs voix. Les deux leçons qui t’ont appris cela ne te demandent jamais de produire un mot de français : elles sont toutes les deux des leçons de reconnaissance. EN: A dense sentence hides its backbone under subordinate clauses; a noisy call hides its signal under several voices. Neither lesson that taught you this ever asks you to produce a word of French: both are recognition-only.',
    examples: [
      { itemId: E(2418), note: 'l’armature d’une phrase dense' },
      { itemId: F211.signal, note: 'le signal dans le bruit, la leçon 11 du C2' },
    ],
  },

  /** Act 3: c2.03/c2.04/c2.05, the lexical unit. */
  motRegistre: {
    term: 'mot et registre',
    title: 'Trois jugements, un seul mot',
    body: 'Une expression imagée, un mot d’argot cité et un mot savant se jugent chacun différemment : par son registre, par son emploi littéraire, par son histoire. Un mot bien choisi dans ton bilan porte les trois jugements à la fois, sans qu’aucun ne se voie séparément. EN: a vivid idiom, a quoted slang word and a learned word are each judged differently: by register, by literary use, by history. A well-chosen word in your capstone carries all three at once, with none of them showing separately.',
    examples: [
      { itemId: E(2429), note: 'le registre d’une expression' },
      { itemId: F205.decompose, note: 'décomposer un mot savant en ses racines' },
    ],
  },

  /** Act 4: c2.01/c2.02, precision and the integral literary reading. */
  curseurFils: {
    term: 'curseur et fils',
    title: 'Un mot, puis tout un texte',
    body: 'Lire l’implicite, c’est lire le curseur qu’un autre a déjà réglé sur un seul mot ; lire une œuvre intégralement, c’est tenir plusieurs curseurs à la fois, sur les mêmes lignes. Les deux exigent le même réflexe, à une échelle différente. EN: reading the implicit means reading a dial someone else already set, on one word; reading a whole work means holding several dials at once, on the same lines. Both demand the same reflex, at a different scale.',
    examples: [
      { itemId: E(2446), note: 'les quatre fils d’une œuvre' },
      { itemId: F201.modele1, note: 'un courriel qui laisse entendre un agacement, la leçon 1 du C2' },
    ],
  },

  /** Act 5: c2.06/c2.07/c2.08, the transformation trio. */
  porteTraversee: {
    term: 'porte, traversée',
    title: 'Changer le contenant, jamais le fait',
    body: 'Médier change la porte par laquelle un fait passe, sans jamais toucher le fait lui-même ; traduire un poème accepte, à l’inverse, de perdre un peu de sens pour garder le ton. Improviser à l’oral partage leur exigence : ne jamais perdre ce que l’échange porte, même en changeant tout le reste. EN: mediating changes the door a fact passes through, without ever touching the fact; translating a poem instead accepts losing a little meaning to keep the tone. Improvising aloud shares their demand: never lose what the exchange carries, even while changing everything else.',
    examples: [
      { itemId: E(2457), note: 'la porte de la médiation' },
      { itemId: F206.bilan, note: 'une médiation réussie, la leçon 6 du C2' },
    ],
  },

  /** Act 6: c2.09/c2.10, sustained discourse and the fused genre. */
  pesertrancher: {
    term: 'peser puis trancher',
    title: 'Décider dans la même phrase',
    body: 'Tenir un discours long, c’est annoncer un plan et y revenir après chaque écart ; trancher par écrit, c’est peser plusieurs sources et décider, dans la même phrase. Les deux sont une seule endurance : ne jamais lâcher le fil, du premier mot au dernier. EN: sustaining a long discourse means announcing a plan and returning to it after every detour; deciding in writing means weighing sources and deciding, in the same sentence. Both are one endurance: never drop the thread, from first word to last.',
    examples: [
      { itemId: E(2474), note: 'le nom de la méthode' },
      { itemId: E(2477), note: 'trois sources qui ne s’opposent pas sur le principe' },
    ],
  },

  /** Acts 7-8: the capstone's own central trap, extending c2.13's. */
  competenceCachee: {
    term: 'compétence cachée',
    title: 'Trois réussites ne garantissent pas la quatrième',
    body: 'La leçon 13 du C2 t’a appris qu’une correction peut en cacher une autre, dans le même texte. Au bilan, c’est une compétence entière qui peut en cacher une autre, dans la même réponse : lecture, synthèse et registre réussis, et pourtant aucun procédé jamais nommé. EN: lesson 13 of C2 taught you that one correction can hide another, in the same text. At the capstone, a whole skill can hide another, in the same answer: reading, synthesis and register all succeed, yet no device is ever named.',
    examples: [
      { itemId: E(2486), note: 'le nom de ce piège' },
      { itemId: F213.piege, note: 'une correction qui en cache une autre, la leçon 13 du C2' },
    ],
  },
};
