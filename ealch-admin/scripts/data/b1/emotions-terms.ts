// b1.35.l1 « Les émotions » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 12 characters; the scratch check
// asserts that every section's chips fit in 37, and that every term is
// surfaced by at least one section.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './emotions-corpus.ts';

export const EMOTIONS_TERMS: Record<string, LessonTerm> = {
  /** The first half of the reframe: intensity. */
  force: {
    term: 'la force',
    title: 'La force d’un sentiment',
    body: "Un même sentiment a plusieurs mots, du plus faible au plus fort : agacé, énervé, en colère, furieux. Choisis le mot qui a la force de ce que tu ressens. EN: One feeling has several words, from weak to strong; pick the one that matches.",
    examples: [
      { itemId: E(1015), note: 'la joie, en quatre degrés' },
      { itemId: E(1047), note: 'la colère, en quatre degrés' },
      { itemId: E(1064), note: 'la peur, en trois degrés' },
    ],
  },

  /** The second half of the reframe: what comes after. */
  suite: {
    term: 'la suite',
    title: 'Ce qui vient après le mot',
    body: "Un mot de sentiment appelle une suite : en colère contre, content de partir, content que tu sois là, content pour toi. Si la suite est fausse, la phrase sonne faux. EN: A feeling word pulls a construction after it: contre, de, que, pour.",
    examples: [
      { itemId: E(1048), note: 'en colère contre' },
      { itemId: E(1129), note: 'de ou que : la règle' },
      { itemId: E(1130), note: 'pour, de, que' },
    ],
  },

  /** The word family. */
  famille: {
    term: 'la famille',
    title: 'Une famille de mots',
    body: "Un verbe, un nom, un adjectif qui viennent de la même racine : décevoir, déçu, la déception, décevant. Quand tu en connais un, tu devines les autres. EN: A word family is a verb, a noun and adjectives built on one root.",
    examples: [
      { itemId: E(1032), note: 'décevoir et sa famille' },
      { itemId: E(1100), note: 'soulager et sa famille' },
    ],
  },

  /** Act 6: who feels against what causes the feeling. */
  ressent: {
    term: 'qui ressent',
    title: 'Gêné ou gênant',
    body: "Celui qui ressent prend souvent -é : gêné, énervé, stressé. Ce qui fait ressentir prend -ant : gênant, énervant, stressant. EN: The person who feels takes -é; the thing that causes it takes -ant.",
    examples: [
      { itemId: E(1095), note: 'la personne, la situation' },
      { itemId: E(1097), note: 'la règle en une phrase' },
    ],
  },

  /** Act 9: the moment a feeling starts. */
  declic: {
    term: 'le déclic',
    title: 'L’état ou le déclic',
    body: "À l'imparfait, un sentiment est un état qui dure : j'étais inquiet. Au passé composé, c'est le moment où il arrive ou change : tout à coup, j'ai eu peur. EN: The imparfait gives the lasting state; the passé composé gives the moment it starts.",
    examples: [
      { itemId: E(1146), note: 'la règle en une phrase' },
      { itemId: E(1135), note: 'le déclic : tout à coup' },
      { itemId: E(1134), note: "l'état : au début" },
    ],
  },

  /** Act 10: reacting to others. */
  empathie: {
    term: "l'empathie",
    title: 'Réagir à ce que l’autre ressent',
    body: "Montrer que tu comprends ce que l'autre ressent : je te comprends, ça doit être dur, je suis de tout cœur avec toi. On écoute d'abord, on conseille après. EN: Showing you understand what someone feels: listen first, advise later.",
    examples: [
      { itemId: E(1149), note: 'ça doit être dur' },
      { itemId: E(1150), note: 'de tout cœur avec toi' },
    ],
  },

  /** Familier, courant, soutenu (lesson 25 in B1). */
  registre: {
    term: 'le registre',
    title: 'Familier, courant, soutenu',
    body: "Le même sentiment se dit plus ou moins familier : t'inquiète entre amis, ne t'inquiète pas partout, toutes mes condoléances pour un deuil. Choisis selon la personne. EN: The same feeling in a casual, neutral or formal register.",
    examples: [
      { itemId: E(1161), note: 'familier' },
      { itemId: E(1154), note: 'soutenu' },
    ],
  },

  /** Québec and other regional forms, none wrong. */
  variante: {
    term: 'la variante',
    title: 'Un autre mot ailleurs',
    body: "Au Québec, on est tanné, on a de la peine, on capote. Ces mots sont justes au Québec ; ailleurs, on dit plutôt en avoir marre, être triste. Aucun n'est faux. EN: A regional form is right where it is used.",
    examples: [
      { itemId: E(1052), note: 'être tanné, au Québec' },
      { itemId: E(1033), note: 'avoir de la peine' },
    ],
  },

  /** The English look-alikes. */
  fauxami: {
    term: 'le faux ami',
    title: 'Un mot qui ressemble à l’anglais',
    body: "Il ressemble à un mot anglais, mais il ne veut pas dire la même chose : excité n'est pas excited, décevoir n'est pas to deceive, relevé n'est pas relieved. EN: A false friend looks English but means something else here.",
    examples: [
      { itemId: E(1010), note: "j'ai hâte, pas excité" },
      { itemId: E(1046), note: 'décevoir, pas tromper' },
      { itemId: E(1113), note: 'soulagé, pas relevé' },
    ],
  },
};
