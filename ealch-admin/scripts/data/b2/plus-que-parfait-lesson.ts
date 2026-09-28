// b2.01.l1 « Le plus-que-parfait »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b1.04 and b1.10), under
// the B2 rules of B2-BUILD-LOG.md (form, meaning, choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema now, so the lesson validates with it in place (as b2.22 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the tense), trap (trapDrill stepped or
//   commonErrors), then from act 3 on the form INSIDE A TEXT of 60 to 120
//   words (complete, rewrite or reorder), then the gated act check.
//
//    1  Le film avait commencé      6   the repère: one past moment, and what
//                                        was already done at it
//    2  La forme                    8   avoir / être at the imparfait + the
//                                        participle; the auxiliary as in the
//                                        passé composé (builds on lessons 1
//                                        and 19 in B1)
//    3  Les accords                 7   être with the subject, avoir with a
//                                        direct object placed before
//    4  Les pronominaux             7   always être; agreement and its two
//                                        exceptions
//    5  Une ligne, trois temps      8   imparfait / passé composé /
//                                        plus-que-parfait round one repère
//    6  Raconter                    8   quand, lorsque, the flashback, and no
//                                        plus-que-parfait in chronological order
//    7  Déjà, pas encore, juste     7   adverb placement; venait de
//    8  Il a dit qu'il avait fini   8   reported speech and thought, relatives,
//                                        indirect questions (after lesson 19)
//    9  Si j'avais su               8   si + plus-que-parfait, si seulement:
//                                        the bridge to lessons 2 and 3 in B2
//   10  Les fausses pistes          7   avait faim, était fermée, depuis, the
//                                        English had; real learner errors
//   11  Raconter ce qui s'était     11  model, plan, role play, TASK, quiz
//       passé
//
//   TOTAL 85 missions, 11 acts. Corpus: 166 authored rows (.1600-.1798) in
//   eleven blocks plus 23 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 12 rounds of 8 (one per act 1 to 10, a B1
//   recycling round, an exam-format round). Chapter artwork:
//   `plus-que-parfait-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (b2.02 to b2.04 may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le plus-que-parfait dit ce qui était déjà fait au moment dont tu parles. »
//   EN: The plus-que-parfait says what was already done at the moment you are
//   talking about.
//
//   ONE METAPHOR, LE REPÈRE: a moment in the past that the text has already
//   set (an arrival, a speech act, an imagined past). The tense is measured
//   from it, never from « now » and never from how long ago things were.
//   Act 10 is the other half of the sentence: no repère, no plus-que-parfait.
//   Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    building the plus-que-parfait (both auxiliaries, agreement,
//           pronominals), its narrative use round a repère, the adverbs, its
//           use after verbs of saying and thinking, relatives and indirect
//           questions, si + plus-que-parfait and si seulement as the si half
//           only, and the false leads (imparfait avait, états, depuis, had).
//   QUOTES  the reframes of lesson 1 (imparfait formation), lesson 3 (décor
//           and action), lesson 10 (si pairs) and lesson 19 (reported
//           speech) in B1, re-exported from their corpus files; rows of
//           lessons 3, 4, 10, 11, 13, 19, 31 and 34 in B1 and lesson 25 in B2
//           reused BY ID.
//   LEAVES  the conditionnel passé (the result half of « si j'avais su,
//           j'aurais… ») to lesson 2 in B2 and past-unreal si to lesson 3 in
//           B2: here those results are READ, never asked for; the passé
//           simple to lesson 8 in B2; « après que » and the time clauses to
//           lesson 18 in B2 (never used here).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. The scenario uses ’ only and embeds no corpus row. Other lessons
//   cited by trail position in words, never by raw id. Mission answer slots
//   are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes, no `why` names a position), as b2.22 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE quiz rounds (96 questions): ten act rounds, one recycling round
//      (lessons 3, 4, 10 and 19 in B1) and one exam-format round. The B2 log
//      asks for both extra rounds; b1.10 also ran twelve. Fold the recycling
//      round into round 10 to get to eleven?
//   2. TWELVE readings: four long ones (200 to 235 words) and the eight
//      short « dans un texte » paragraphs that the B2 loop requires from act
//      3 on. The playbook's 4 to 7 was written before that loop. Keep them
//      as `reading` sections (self-check answers in the modal)?
//   3. THE TASK is written (180 to 250 words, `skill: 'PE'`), with FIVE
//      criteria (tâche 3, cohérence 3, étendue 2, correction 2, registre 2 =
//      12) as b2.22 set for B2. The annotation block sits after the model
//      answer, inside `modelAnswer`, as in b2.22.
//   4. THE CONDITIONNEL PASSÉ appears in reading only (acts 9 and 11, the
//      model answer). The grader notes forbid scoring it either way until
//      lessons 2 and 3 in B2 build it. Confirm.
//   5. NO verbCheck on the ten conjugation cards (corpus §A.7): the
//      verbecc key for this tense is unproven in the publish gate.
//   6. `Lesson.version` is 1 (a new lesson), as b2.22 to b2.26.
//   7. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_CINEMA, LECTURE_JULIEN, LECTURE_CORRIGE, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10, TEXTE_A9_REPONSES,
  B101_REFRAME, B101_REFRAME_EN, B103_REFRAME, B103_REFRAME_EN, B110_REFRAME, B110_REFRAME_EN,
  B119_REFRAME, B119_REFRAME_EN,
  IMP_FORM_UNIT, PC_IMP_UNIT, PAIRES_UNIT, SI_UNIT, DISCOURS_UNIT,
  IMP_FORM_REF, PC_IMP_REF, PAIRES_REF, SI_REF, QUI_QUE_REF, DISCOURS_REF,
  COND_PASSE_REF, SI_PASSE_REF, PASSE_B1_RANGE_REF, B2_NEXT_RANGE_REF,
} from './plus-que-parfait-corpus.ts';
import { PQP_TERMS } from './plus-que-parfait-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.01: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.01: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.01: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one paragraph of 60 to
 *  120 words, with the answers behind the modal. Always the same title, so a
 *  learner and a reviewer see the loop. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: LE FILM AVAIT COMMENCÉ
 *
 *  Meet the repère. One word (avait) changes the order of two facts, and the
 *  listener hears a different evening. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La séance de vingt heures',
  frSub: 'Un seul mot change la soirée',
  setting: { place: 'Devant le cinéma Comœdia', city: 'Lyon', time: '20 h 20', ambience: 'la pluie, les affiches, le trottoir mouillé' },
  beats: [
    {
      kind: 'narration',
      text: "Lyon, un samedi soir de novembre. Tu arrives devant le cinéma avec vingt minutes de retard. Karim t'attend sur le trottoir, deux billets à la main.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karim',
      fr: 'Tu es enfin là. Le film a commencé il y a vingt minutes.',
      en: 'You are here at last. The film started twenty minutes ago.',
      respell: '[tü eh-zahⁿ-fehⁿ LA | luh FEELM a ko-mahⁿ-SAY | eel-ya vehⁿ mee-NÜT]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Désolé. Le tram était parti, et j'ai attendu le suivant.",
      en: 'Sorry. The tram had left, and I waited for the next one.',
      respell: '[day-zo-LAY | luh TRAMM ay-teh par-TEE | ay zhay a-tahⁿ-dü luh swee-VAHⁿ]',
      stage: "Le tram était parti avant ton arrivée à l'arrêt. Tu l'as dit sans y penser.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Le lendemain, ta sœur te demande comment s'est passée la soirée. Tu veux lui dire que vous avez raté le début du film.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase dit que le film tournait déjà quand vous êtes entrés.',
      size: 'lg',
      options: [
        { fr: fr(E(1601)), respell: rsOf(E(1601)), en: en(E(1601)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1600)), respell: rsOf(E(1600)), en: en(E(1600)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Ta sœur hoche la tête : vous avez raté le début, et elle comprend pourquoi Karim faisait la tête.',
        breaks: "Ta sœur fronce les sourcils. Pour elle, le film a démarré à la seconde où vous êtes arrivés, donc vous n'avez rien raté.",
      },
    },
    {
      kind: 'break',
      heading: 'Un seul mot a changé l’ordre',
      body: "Avec a commencé, le film démarre à ton arrivée : les deux faits se suivent. Avec avait commencé, il tournait déjà : ton arrivée est le repère, et le début était fait avant. EN: a commencé follows your arrival; avait commencé was already done before it.",
      wrong: { fr: fr(E(1601)), ipa: ipaOf(E(1601)), respell: rsOf(E(1601)), en: en(E(1601)) },
      right: { fr: fr(E(1600)), ipa: ipaOf(E(1600)), respell: rsOf(E(1600)), en: en(E(1600)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Au B1, tu as rencontré ce temps dans les paroles rapportées. Ici, tu le construis en entier, et tu t'en sers pour raconter, pour rapporter et pour regretter.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['repere', 'ligne'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Construire le plus-que-parfait sans hésiter', s: 'Actes 2 à 4 : l’auxiliaire, les accords, les pronominaux' },
    { t: 'Placer trois temps sur une même ligne', s: 'Actes 5 à 7 : le repère, le récit, déjà et pas encore' },
    { t: 'Rapporter et regretter', s: 'Actes 8 et 9 : il a dit qu’il avait, si seulement j’avais' },
    { t: 'Raconter un événement en 200 mots', s: 'Actes 10 et 11 : les fausses pistes, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La soirée ratée',
  frSub: 'Lis, et cherche ce qui était déjà fait',
  text: LECTURE_CINEMA,
  glossary: [
    { word: 'le trottoir', en: 'the pavement', note: 'La partie de la rue réservée aux piétons.' },
    { word: "la scène d'ouverture", en: 'the opening scene', note: 'Les premières minutes du film, avant le générique.' },
    { word: 'la plaisanterie', en: 'the joke', note: 'Un mot pour rire, un peu plus soutenu que la blague.' },
  ],
  questions: [
    { q: 'Quel moment sert de repère dans la deuxième moitié du texte ?', a: "L'arrivée devant le cinéma : « Quand je suis enfin arrivé devant le cinéma ». Les messages, les billets et le début du film se situent avant." },
    { q: 'Qu’avait fait Karim avant ce moment ? Cite deux actions.', a: "Il avait acheté les billets la veille, et il avait envoyé trois messages." },
    { q: 'Pourquoi le narrateur dit-il « je ne les avais pas lus » et non « je ne les ai pas lus » ?', a: "Parce qu'il parle du moment de l'arrivée : à ce moment-là, la lecture n'avait pas eu lieu." },
    { q: 'Que dit « le tram venait de partir » ?', a: "Que le départ du tram était tout récent quand le narrateur est arrivé à l'arrêt. Venait de dit un passé tout proche du repère." },
    { q: 'Pourquoi Karim parle-t-il d’un « film au plus-que-parfait » ?', a: "Parce que tout le film remonte vers un fait qui avait eu lieu avant le début de l'histoire : la perte de mémoire du héros." },
  ],
  audio: REC('rec-b2-01-cinema'),
  say: REFRAME,
  terms: ['repere', 'ligne'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère ce qui était déjà fait',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Avant le repère', [
      it(E(1602), 'la veille de la séance'),
      it(E(1607), 'avant ton arrivée'),
      it(E(1605), 'avant de partir de chez ta sœur'),
      it(E(1603), 'au moment où vous êtes entrés'),
    ], chk('Dans ces quatre phrases, quel mot porte le recul ?',
      ['l’auxiliaire à l’imparfait', 'le participe', 'un adverbe de temps'], 0,
      'Avait, avions, était : l’auxiliaire à l’imparfait fait reculer tout le verbe. EN: the imparfait auxiliary does the stepping back.')),
    grp('La même phrase, deux soirées', [
      it(E(1611), 'le dîner était prêt'),
      it(E(1612), 'le dîner commence à ton retour'),
      it(E(1600), 'vous avez raté le début'),
      it(E(1601), 'le film démarre à votre arrivée'),
    ], chk('« Quand je suis rentré, ma sœur a préparé le dîner. » Le dîner était-il prêt à ton retour ?',
      ['non, elle s’y met ensuite', 'oui, il était prêt'], 0,
      'Deux passés composés se suivent : le dîner vient après le retour. EN: two passés composés follow each other.')),
    ctl('Le test', 'Pour choisir le plus-que-parfait, que cherches-tu d’abord ?',
      ['un moment du passé déjà posé', 'un verbe très ancien', 'le mot had en anglais'], 0,
      'Le repère d’abord ; le temps se mesure à partir de lui. EN: find the reference point first.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'ligne'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où le mauvais temps coûte cher',
  cases: [
    { situation: 'Tu expliques un retard à ton employeur', fr: "Quand je suis arrivé à la gare, le train était déjà parti.", en: 'When I got to the station, the train had already left.' },
    { situation: 'Tu témoignes après un accident', fr: 'Le feu était déjà passé au rouge quand la voiture est arrivée.', en: 'The light had already turned red when the car arrived.' },
    { situation: 'Tu racontes une nouvelle à un collègue', fr: "La direction nous a annoncé que le projet avait été annulé.", en: 'Management told us the project had been cancelled.' },
    { situation: 'Tu écris un récit pour un examen', fr: "Ce jour-là, rien ne s'était passé comme prévu.", en: 'That day, nothing had gone to plan.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'recul'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', '« Quand nous sommes arrivés, le film avait commencé. » Avez-vous vu le début ?',
    ['non', 'oui', 'on ne peut pas savoir'], 0,
    'Le début était déjà passé au moment de l’arrivée. EN: the beginning was over when you arrived.'),
  ctl('Le repère', 'Le plus-que-parfait se mesure à partir de…',
    ['un moment du passé que le texte a posé', 'maintenant'], 0,
    'Toujours un moment du passé : l’arrivée, l’appel, la parole. EN: always a past moment.'),
  ctl('La forme', 'Avait commencé, c’est…',
    ['l’imparfait de avoir et un participe', 'le conditionnel de avoir et un participe'], 0,
    'Avait est l’imparfait de avoir. EN: avait is the imparfait of avoir.'),
], ['repere']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le film avait commencé',
    opener: {
      line: "Tu arrives, et le film tourne déjà : ici tu découvres le temps qui dit ce qui était fait avant. EN: You arrive and the film is already running: here you meet the tense for what was done before.",
      imageRef: 'lessons/plus-que-parfait/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères le moment du passé qui sert de repère, et tu entends la différence entre a commencé et avait commencé. EN: You can find the reference point and hear the difference between a commencé and avait commencé.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: LA FORME
 *
 *  Form, briefly, and only what B1 did not build: lesson 19 made the tense
 *  as a reported passé composé; here it gets every person, both auxiliaries
 *  and the four real errors.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà, et ce qui manque',
  frSub: 'Deux mots, un seul qui change',
  hint: 'Quatre cartes. La dernière est la plus rassurante.',
  audio: REC('rec-b2-01-forme'),
  say: REFRAME,
  terms: ['auxiliaire'],
  cards: [
    {
      head: 'Le point de départ', label: Cap(DISCOURS_REF),
      fr: fr('fr.b1.paroles-rapportees.1109'), sub: rsOf('fr.b1.paroles-rapportees.1109'),
      body: `« ${B119_REFRAME} » Là, le plus-que-parfait rapportait un passé composé. Ici, il devient un temps du récit, avec toutes les personnes. EN: ${B119_REFRAME_EN}`,
    },
    {
      head: 'L’auxiliaire à l’imparfait', label: Cap(IMP_FORM_REF),
      fr: 'avais · avait · avions · aviez · avaient',
      sub: '[a-VEH] · [a-VEH] · [a-VYOHⁿ] · [a-VYAY] · [a-VEH]',
      body: `« ${B101_REFRAME} » Avoir donne av-, être donne ét- : j'étais, nous étions. EN: ${B101_REFRAME_EN}`,
    },
    {
      head: 'Avoir ou être', label: 'comme au passé composé',
      fr: fr(E(1626)), sub: rsOf(E(1626)),
      body: "Aller, venir, partir, rester, naître et les autres verbes de mouvement gardent être, comme tous les pronominaux. Les autres prennent avoir. Tu n'as rien de nouveau à choisir. EN: same auxiliary as the passé composé.",
    },
    {
      head: 'Le participe ne bouge pas', label: 'le deuxième mot',
      fr: "j'ai pris > j'avais pris",
      sub: '[zhay PREE] · [zha-veh PREE]',
      body: "Seul l'auxiliaire change de temps. Le participe reste celui que tu connais : pris, fait, venu, eu, été. EN: only the auxiliary changes tense.",
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Six personnes, deux auxiliaires',
  cols: ['Personne', 'avec avoir', 'avec être'],
  rows: [
    { cells: ['je', "j'avais fini", "j'étais sorti(e)"], say: fr(E(1632)),
      detail: { title: 'je', body: "Devant une voyelle, je devient j' : j'avais, j'étais. EN: je elides before avais and étais.", say: fr(E(1625)) } },
    { cells: ['tu', 'tu avais fini', 'tu étais sorti(e)'], say: fr(E(1671)),
      detail: { title: 'tu', body: "Tu ne s'élide jamais à l'écrit : tu avais, tu étais. EN: tu never elides in writing.", say: fr(E(1616)) } },
    { cells: ['il, elle, on', 'elle avait fini', 'elle était sortie'], say: fr(E(1640)),
      detail: { title: 'il, elle, on', body: "Avec être, elle prend un e au participe. Avec on, l'accord suit le sens. EN: être agrees with elle.", say: fr(E(1635)) } },
    { cells: ['nous', 'nous avions fini', 'nous étions sorti(e)s'], say: fr(E(1627)),
      detail: { title: 'nous', body: "La liaison est obligatoire : nous avions, nous étions. EN: the liaison is compulsory.", say: fr(E(1636)) } },
    { cells: ['vous', 'vous aviez fini', 'vous étiez sorti(e)(s)'], say: fr(E(1630)),
      detail: { title: 'vous', body: "Vous de politesse, une seule personne : vous étiez sorti. Plusieurs : sortis. EN: polite vous agrees with one person.", say: fr(E(1619)) } },
    { cells: ['ils, elles', 'ils avaient fini', 'elles étaient sorties'], say: fr(E(1637)),
      detail: { title: 'ils, elles', body: "Avaient et étaient se prononcent comme avait et était. Seule l'écriture change. EN: same sound, different spelling.", say: fr(E(1628)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire', 'accord'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte les deux mots',
  frSub: 'Trois pages, trois gâchettes',
  groups: [
    grp('Avec avoir', [
      it(E(1615), 'finir : avoir'),
      it(E(1618), 'la liaison de nous'),
      it(E(1625), 'prendre, participe pris'),
      it(E(1632), 'laisser : avoir'),
    ], chk('J’ai laissé devient…',
      ['j’avais laissé', 'j’étais laissé', 'j’aurais laissé'], 0,
      'Le même auxiliaire, à l’imparfait. EN: same auxiliary, in the imparfait.')),
    grp('Avec être', [
      it(E(1621), 'sortir, sans complément'),
      it(E(1623), 'nous, et le s de l’accord'),
      it(E(1626), 'aller garde être'),
      it(E(1631), 'descendre, sans complément'),
    ], chk('Je suis resté devient…',
      ['j’avais resté', 'j’étais resté'], 1,
      'Rester prend être au passé composé, donc aussi ici. EN: rester keeps être.')),
    ctl('Avoir et être eux-mêmes', 'J’ai été malade devient…',
      ['j’étais été malade', 'j’avais été malade'], 1,
      'Être se conjugue avec avoir : j’avais été. EN: être itself takes avoir.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Avoir ou être, à l’oreille',
  frSub: 'Dix phrases, un seul temps',
  lines: [
    ln(E(1625)), ln(E(1626)), ln(E(1627)), ln(E(1628)), ln(E(1629)),
    ln(E(1630)), ln(E(1635)), ln(E(1636)), ln(E(1637)), ln(E(1638)),
  ],
  questions: [
    { q: 'Deuxième phrase : quel auxiliaire entends-tu ?', opts: ['être', 'avoir'], correct: 0, why: 'Aller garde être : elle était allée. EN: aller keeps être.' },
    { q: 'Troisième phrase : comment sont-ils venus ?', opts: ['en voiture', 'en train', 'à pied'], correct: 1, why: 'Nous étions venus en train. EN: by train.' },
    { q: 'Cinquième phrase : quelle heure avait-on donnée ?', opts: ['six heures', 'huit heures'], correct: 1, why: 'On avait dit huit heures. EN: eight o’clock.' },
    { q: 'Septième phrase : d’où était-elle rentrée ?', opts: ['de vacances', 'du travail'], correct: 0, why: 'Elle était déjà rentrée de vacances. EN: from holiday.' },
    { q: 'Dixième phrase : quel verbe se conjugue avec avoir alors qu’on attendait être ?', opts: ['être', 'rester', 'venir'], correct: 0, why: 'J’avais été malade : être prend avoir. EN: être takes avoir.' },
  ],
  audio: REC('rec-b2-01-forme-ecoute'),
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de forme',
  errors: [
    {
      wrong: "J'avais allé au marché avant le travail.",
      right: "J'étais allé au marché avant le travail.",
      why: "Normal : en anglais, had sert pour tous les verbes, et avoir semble plus sûr. Aller garde être, comme au passé composé. EN: English uses had everywhere; aller keeps être.",
    },
    {
      wrong: 'Elle était fini son rapport avant midi.',
      right: 'Elle avait fini son rapport avant midi.',
      why: "Normal : elle était fatiguée existe, alors était semble aller partout. Finir prend avoir. EN: finir takes avoir, as in the passé composé.",
    },
    {
      wrong: "Quand il est arrivé, j'aurais fini.",
      right: "Quand il est arrivé, j'avais fini.",
      why: "J'aurais fini est un conditionnel passé : un fait imaginé. Le plus-que-parfait se forme sur l'imparfait, avec av-. EN: aurais is conditional; the pluperfect uses avais.",
    },
    {
      wrong: "Nous avons eu fini quand tu as appelé.",
      right: "Nous avions fini quand tu as appelé.",
      why: "Avons eu fini existe dans certaines régions, mais pas à l'écrit. Pour ce qui était fait avant, un seul auxiliaire à l'imparfait. EN: use one auxiliary, in the imparfait.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Avait ou avaient, à toi de voir',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a2-flash',
  layer: 'core',
  title: 'Huit formes à avoir en bouche',
  frSub: 'De l’anglais au français',
  cards: [
    { front: 'I had finished', back: "j'avais fini", say: fr(E(1632)) },
    { front: 'we had come', back: 'nous étions venus', say: fr(E(1627)) },
    { front: 'she had gone', back: 'elle était allée', say: fr(E(1626)) },
    { front: 'they had put', back: 'ils avaient mis', say: fr(E(1628)) },
    { front: 'I had been', back: "j'avais été", say: fr(E(1638)) },
    { front: 'she had had', back: 'elle avait eu', say: fr(E(1639)) },
    { front: 'you had stayed', back: 'vous étiez restés', say: fr(E(1630)) },
    { front: 'they had passed through', back: 'ils étaient passés', say: fr(E(1637)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['auxiliaire'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La recette', 'Le plus-que-parfait, c’est…',
    ['avoir ou être au présent, puis le participe', 'avoir ou être à l’imparfait, puis le participe', 'avoir ou être au conditionnel, puis le participe'], 1,
    'L’imparfait de l’auxiliaire, puis le participe. EN: imparfait auxiliary plus participle.'),
  ctl('Le choix', 'Pour choisir entre avoir et être, tu regardes…',
    ['le passé composé du même verbe', 'la longueur du verbe'], 0,
    'Le même auxiliaire qu’au passé composé. EN: the passé composé decides.'),
  ctl('Le piège', 'Laquelle est juste ?',
    ['j’avais été', 'j’étais été'], 0,
    'Être prend avoir. EN: être takes avoir.'),
], ['auxiliaire']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La forme',
    opener: {
      line: "Deux mots, et tu connais déjà les deux : ici tu montes le plus-que-parfait à toutes les personnes. EN: Two words, and you already know both: here you build the pluperfect for every person.",
      imageRef: 'lessons/plus-que-parfait/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis le plus-que-parfait avec avoir ou avec être, à toutes les personnes, sans le confondre avec le conditionnel. EN: You can build the pluperfect with either auxiliary, for every person.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_DICTEE, A2_FLASH, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: LES ACCORDS
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La boîte du grenier',
  frSub: 'Mariam et sa tante',
  setting: 'Marseille. Mariam vide le grenier de sa mère avec sa tante Nora, qui lit les lettres par-dessus son épaule.',
  bubbles: [
    { from: 'narrator', fr: 'Mariam tient une liasse de lettres attachées par un ruban.', en: 'Mariam is holding a bundle of letters tied with a ribbon.' },
    { from: 'user', fr: 'Ce sont les lettres que maman avait écrites à papa.', en: 'These are the letters Mum had written to Dad.' },
    { from: 'coach', fr: 'Écrites, avec es. Que les reprend, et il est placé avant.', en: 'Écrites, with es. Que stands for them, and it comes first.', warn: 'Avoir : accord avec que' },
    { from: 'user', fr: 'Elle était arrivée ici à dix-neuf ans.', en: 'She had arrived here at nineteen.' },
    { from: 'coach', fr: 'Arrivée, avec un e : avec être, le sujet décide.', en: 'Arrivée, with an e: with être, the subject decides.', warn: 'Être : accord avec le sujet' },
    { from: 'user', fr: 'Et elle avait gardé toutes ses photos.', en: 'And she had kept all her photos.' },
    { from: 'coach', fr: 'Gardé, sans rien. Les photos viennent après le verbe.', en: 'Gardé, no ending. The photos come after the verb.', warn: 'Avoir, rien avant : pas d’accord' },
  ],
  closing: { fr: 'Être regarde le sujet. Avoir regarde ce qui vient avant lui.', en: 'Être looks at the subject. Avoir looks at what comes before it.' },
  audio: REC('rec-b2-01-grenier'),
  say: REFRAME,
  terms: ['accord', 'auxiliaire'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-accords',
  title: 'Les accords, en quatre cartes',
  frSub: 'Les règles du passé composé, à l’imparfait',
  hint: 'Quatre cartes. L’oreille n’entend presque rien : c’est l’écrit qui compte.',
  audio: REC('rec-b2-01-accords'),
  say: REFRAME,
  terms: ['accord'],
  cards: [
    {
      head: 'Avec être', label: 'le sujet décide',
      fr: fr(E(1641)), sub: rsOf(E(1641)),
      body: "Le participe prend le genre et le nombre du sujet : parents, donc arrivés. EN: with être, the participle agrees with the subject.",
    },
    {
      head: 'Avec avoir, rien avant', label: 'pas d’accord',
      fr: fr(E(1647)), sub: rsOf(E(1647)),
      body: "La maison vient après le verbe : vendu reste nu. Le sujet ne compte jamais avec avoir. EN: with avoir and nothing before, no agreement.",
    },
    {
      head: 'Avec avoir, que avant', label: 'accord avec le complément',
      fr: fr(E(1648)), sub: rsOf(E(1648)),
      body: "Que reprend la maison et arrive avant avaient : vendue. C'est le cas des relatives. EN: que placed before makes the participle agree.",
    },
    {
      head: 'Sortir, monter, descendre', label: 'deux auxiliaires',
      fr: `${fr(E(1657))} · ${fr(E(1656))}`, sub: `${rsOf(E(1657))} · ${rsOf(E(1656))}`,
      body: "Sans complément, être. Avec un complément direct, avoir, et l'accord suit la règle de avoir. EN: être on their own, avoir with a direct object.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve ce qui commande l’accord',
  frSub: 'Trois groupes, trois gâchettes',
  groups: [
    grp('Être : le sujet', [
      it(E(1640), 'elle, donc partie'),
      it(E(1642), 'les filles, donc montées'),
      it(E(1654), 'mes cousines, donc restées'),
      it(E(1655), 'nous, donc tombés'),
    ], chk('« Mes cousines étaient … à Montréal. » Quelle forme ?',
      ['resté', 'restées', 'restés'], 1,
      'Cousines : féminin pluriel. EN: feminine plural subject.')),
    grp('Avoir : un complément avant', [
      it(E(1643), 'que = les lettres'),
      it(E(1644), 'que = la robe'),
      it(E(1645), 'les = ces photos'),
      it(E(1649), 'que = les lunettes'),
    ], chk('Dans ces phrases, qui décide de l’accord ?',
      ['le sujet', 'le complément placé avant', 'le temps du verbe'], 1,
      'Que, les ou la, placés avant avoir. EN: the object placed before.')),
    grp('Avoir : rien avant', [
      it(E(1646), 'les photos viennent après'),
      it(E(1647), 'la maison vient après'),
      it(E(1651), 'elles ne comptent pas'),
      it(E(1656), 'sortir avec un complément'),
    ], chk('« Elles avaient réservé trop tard. » Pourquoi pas réservées ?',
      ['avec avoir, le sujet ne compte pas', 'réserver ne s’accorde jamais'], 0,
      'Avoir ne regarde jamais le sujet. EN: avoir never agrees with its subject.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq accords au travail',
  frSub: 'Lis, puis dis ce qui commande',
  examples: [
    ex(E(1649), 'que = les lunettes, placé avant : cherchées'),
    ex(E(1650), 'être et un sujet féminin : née'),
    ex('fr.b1.pronoms-essentiels.1011', 'que = le parapluie, masculin : oublié'),
    ex(E(1655), 'nous, au masculin pluriel : tombés'),
    ex(E(1657), 'sortir sans complément : être, sortie'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'L’accord qu’on oublie, l’accord qu’on invente',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Être regarde devant, avoir regarde avant',
    body: "Avec être, le participe s'accorde avec le sujet. Avec avoir, il ne s'accorde qu'avec un complément direct placé avant lui. Le sujet d'avoir ne compte jamais. EN: être agrees with the subject; avoir only with a direct object placed before.",
  },
  cards: [
    { promptLabel: 'accord oublié', promptSound: 'Elle était parti sans rien dire.', fr: fr(E(1640)), ipa: ipaOf(E(1640)), tip: 'Être : le e du sujet elle. EN: être agrees with elle.' },
    { promptLabel: 'accord inventé', promptSound: 'Elles avaient réservées trop tard.', fr: fr(E(1651)), ipa: ipaOf(E(1651)), tip: 'Avoir, rien avant : pas d’accord. EN: nothing before avoir.' },
    { promptLabel: 'accord oublié', promptSound: 'La robe qu’elle avait choisi était rouge.', fr: fr(E(1644)), ipa: ipaOf(E(1644)), tip: 'Que = la robe, placé avant. EN: que stands for la robe.' },
    { promptLabel: 'accord inventé', promptSound: 'Elle avait prise des photos.', fr: fr(E(1646)), ipa: ipaOf(E(1646)), tip: 'Les photos viennent après. EN: the photos come after.' },
    { promptLabel: 'accord oublié', promptSound: 'Mes parents étaient arrivé la veille.', fr: fr(E(1641)), ipa: ipaOf(E(1641)), tip: 'Parents : masculin pluriel. EN: plural subject.' },
    { promptLabel: 'mauvais auxiliaire', promptSound: 'Elle était sorti la valise du coffre.', fr: fr(E(1656)), ipa: ipaOf(E(1656)), tip: 'Avec un complément, sortir prend avoir. EN: sortir plus an object takes avoir.' },
  ],
  drill: [
    { promptSay: 'Elle était … sans rien dire.', opts: ['parti', 'partie'], correct: 1 },
    { promptSay: 'Elles avaient … trop tard.', opts: ['réservé', 'réservées'], correct: 0 },
    { promptSay: 'La robe qu’elle avait … était rouge.', opts: ['choisi', 'choisie'], correct: 1 },
    { promptSay: 'Ces photos, je les avais … à Dakar.', opts: ['prises', 'pris'], correct: 0 },
    { promptSay: 'Ils avaient … la maison.', opts: ['vendue', 'vendu'], correct: 1 },
    { promptSay: 'Les filles étaient … au grenier.', opts: ['montées', 'monté'], correct: 0 },
    { promptSay: 'Elle … la valise du coffre.', opts: ['était sortie', 'avait sorti'], correct: 1 },
    { promptSay: 'Nous étions … d’accord très vite.', opts: ['tombés', 'tombé'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Être regarde devant, avoir regarde avant' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit toute seule' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-01-piege-accords'),
  say: REFRAME,
  terms: ['accord'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : les lettres de la boîte', TEXTE_A3, [
  { q: 'Complète les deux premiers verbes : les lettres que sa mère (écrire), sa mère (naître).', a: "les lettres que sa mère avait écrites (que = les lettres, placé avant) ; sa mère était née (être, sujet féminin)." },
  { q: 'Complète : elle (arriver), ses deux sœurs (rester).', a: "elle était arrivée ; ses deux sœurs étaient restées." },
  { q: 'Complète : les photos qu’elle (garder), la bague qu’elle (recevoir).', a: "les photos qu'elle avait gardées ; la bague qu'elle avait reçue. Que reprend chaque fois le nom, placé avant." },
  { q: 'Complète la dernière : elle (ne jamais poser) de questions.', a: "Elle n'avait jamais posé de questions. Ne avant l'auxiliaire, jamais entre les deux mots, pas d'accord : les questions viennent après." },
], 'rec-b2-01-texte-a3', ['accord']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Être', 'Avec être, le participe s’accorde avec…',
    ['le sujet', 'le complément', 'rien'], 0,
    'Le sujet : elle était partie. EN: the subject.'),
  ctl('Avoir', '« Les lettres qu’elle avait … » : écrit ou écrites ?',
    ['écrit', 'écrites'], 1,
    'Que = les lettres, placé avant. EN: que placed before.'),
  ctl('Sortir', '« Elle … la valise du coffre. »',
    ['était sortie', 'avait sorti'], 1,
    'Un complément direct : avoir. EN: a direct object means avoir.'),
], ['accord']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les accords',
    opener: {
      line: "Une lettre écrite, des photos gardées : ici tu apprends quand le participe prend un e ou un s. EN: A letter written, photos kept: here you learn when the participle takes an e or an s.",
      imageRef: 'lessons/plus-que-parfait/act03.jpg',
    },
    sections: [],
    milestone: "Tu accordes le participe avec le sujet après être, et avec le complément placé avant après avoir. EN: You can make the participle agree after être and after avoir.",
    estScreens: 36, restPoints: ['a3-construire', 'a3-piege'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_EXEMPLES, A3_PIEGE, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: LES PRONOMINAUX
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le matin de l’oral',
  frSub: 'Léa raconte, Inès corrige',
  setting: 'Rennes, devant la salle d’examen. Léa raconte sa matinée à une amie ; Inès, qui était avec elle, corrige au fur et à mesure.',
  bubbles: [
    { from: 'narrator', fr: 'Léa parle vite, et son amie a du mal à suivre.', en: 'Léa is talking fast, and her friend is struggling to keep up.' },
    { from: 'user', fr: "Ce matin-là, on s'était levées à cinq heures.", en: 'That morning, we had got up at five.' },
    { from: 'coach', fr: 'Levées, avec es : un verbe pronominal prend être, et être accorde.', en: 'Levées, with es: a pronominal verb takes être, and être agrees.', warn: 'Toujours être' },
    { from: 'user', fr: "La veille, Inès et moi, on s'était disputées.", en: 'The day before, Inès and I had argued.' },
    { from: 'coach', fr: "Oui. Mais le matin, elles s'étaient téléphoné, sans accord.", en: 'Yes. But in the morning they had phoned each other, with no agreement.', warn: 'Téléphoner à quelqu’un' },
    { from: 'user', fr: "Et moi, je m'étais coupé les cheveux la semaine d'avant.", en: 'And I had cut my hair the week before.' },
    { from: 'coach', fr: 'Coupé, sans e : les cheveux viennent après le verbe.', en: 'Coupé, no e: the hair comes after the verb.', warn: 'Complément après : pas d’accord' },
  ],
  closing: { fr: "Toujours être. L'accord, lui, suit les règles du passé composé.", en: 'Always être. Agreement follows the passé composé rules.' },
  audio: REC('rec-b2-01-oral'),
  say: REFRAME,
  terms: ['pronominal', 'accord'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-accords',
  title: 'Les pronominaux, en quatre cartes',
  frSub: 'Être, et trois cas d’accord',
  hint: 'Quatre cartes. La troisième et la quatrième piègent même les francophones.',
  audio: REC('rec-b2-01-pronominaux'),
  say: REFRAME,
  terms: ['pronominal', 'accord'],
  cards: [
    {
      head: 'Toujours être', label: 'le pronom, puis étais',
      fr: fr(E(1660)), sub: rsOf(E(1660)),
      body: "Le pronom réfléchi se place devant l'auxiliaire : je m'étais, tu t'étais, il s'était, nous nous étions. Jamais avoir. EN: the reflexive pronoun, then étais; never avoir.",
    },
    {
      head: 'L’accord habituel', label: 'se = le sujet',
      fr: fr(E(1664)), sub: rsOf(E(1664)),
      body: "Elle se lève elle-même : se est le complément direct, placé avant. Le participe s'accorde. EN: se is the direct object, so agreement.",
    },
    {
      head: 'Se = à quelqu’un', label: 'pas d’accord',
      fr: fr(E(1667)), sub: rsOf(E(1667)),
      body: "On téléphone à quelqu'un : se veut dire l'une à l'autre. Pas de complément direct avant, donc pas d'accord. Même chose pour s'écrire, se parler. EN: se means to each other, so no agreement.",
    },
    {
      head: 'Le complément vient après', label: 'pas d’accord',
      fr: fr(E(1668)), sub: rsOf(E(1668)),
      body: "Elle a lavé quoi ? Les mains, placées après. Le complément direct n'est plus se, donc lavé reste nu. EN: the direct object follows, so no agreement.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte le pronominal',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Accord avec le sujet', [
      it(E(1661), 'elle, donc levée'),
      it(E(1665), 'ils, donc disputés'),
      it(E(1666), 'nous, donc perdus'),
      it(E(1669), 'ils, donc rencontrés'),
    ], chk('Je me suis levé devient…',
      ['je m’avais levé', 'je m’étais levé', 'j’étais me levé'], 1,
      'Le pronom, puis étais. EN: pronoun, then étais.')),
    grp('Pas d’accord', [
      it(E(1667), 'téléphoner à quelqu’un'),
      it(E(1675), 'écrire à quelqu’un'),
      it(E(1668), 'les mains viennent après'),
      it(E(1672), 'les cheveux viennent après'),
    ], chk('« Ils s’étaient écrit pendant des années. » Pourquoi pas écrits ?',
      ['on écrit à quelqu’un', 'écrire ne s’accorde jamais'], 0,
      'Se veut dire l’un à l’autre : pas de complément direct. EN: se means to each other.')),
    ctl('Avec la négation', 'Où va ne… pas ?',
      ['je ne m’étais pas rendu compte', 'je m’étais ne pas rendu compte'], 0,
      'Ne avant le pronom, pas après l’auxiliaire. EN: ne before the pronoun, pas after the auxiliary.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronominal'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui avait fait quoi',
  frSub: 'Dix phrases pronominales',
  lines: [
    ln(E(1664)), ln(E(1665)), ln(E(1666)), ln(E(1667)), ln(E(1668)),
    ln(E(1669)), ln(E(1670)), ln(E(1671)), ln(E(1675)), ln(E(1676)),
  ],
  questions: [
    { q: 'Première phrase : quand s’était-elle levée ?', opts: ['avant l’aube', 'à midi'], correct: 0, why: 'Avant l’aube. EN: before dawn.' },
    { q: 'Troisième phrase : où s’étaient-ils perdus ?', opts: ['en forêt', 'dans la vieille ville'], correct: 1, why: 'Dans la vieille ville. EN: in the old town.' },
    { q: 'Sixième phrase : où s’étaient-ils rencontrés ?', opts: ['à l’université', 'au travail', 'en voyage'], correct: 0, why: 'À l’université. EN: at university.' },
    { q: 'Huitième phrase : de quoi s’était-on trompé ?', opts: ['d’adresse', 'de jour'], correct: 1, why: 'Tu t’étais trompé de jour. EN: the day.' },
    { q: 'Dernière phrase : où s’était-elle installée ?', opts: ['à Genève', 'à Lausanne'], correct: 1, why: 'À Lausanne. EN: in Lausanne.' },
  ],
  audio: REC('rec-b2-01-pronominaux-ecoute'),
  say: REFRAME,
  terms: ['pronominal'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de pronominaux',
  errors: [
    {
      wrong: "Je m'avais levé très tôt ce jour-là.",
      right: "Je m'étais levé très tôt ce jour-là.",
      why: "Normal : lever prend avoir quand il n'est pas pronominal (j'avais levé la main). Avec me, te, se, c'est toujours être. EN: with a reflexive pronoun, always être.",
    },
    {
      wrong: "Elles s'étaient téléphonées le matin même.",
      right: "Elles s'étaient téléphoné le matin même.",
      why: "Normal : être appelle l'accord, alors on l'ajoute partout. Mais on téléphone à quelqu'un : se n'est pas complément direct. EN: téléphoner à: no direct object, no agreement.",
    },
    {
      wrong: "Elle s'était coupée les cheveux avant de partir.",
      right: "Elle s'était coupé les cheveux avant de partir.",
      why: "Correct sans complément (elle s'était coupée au doigt se dit aussi). Ici le complément direct, les cheveux, vient après : pas d'accord. EN: the object follows, so no agreement.",
    },
    {
      wrong: 'Nous nous avions perdus dans la vieille ville.',
      right: 'Nous nous étions perdus dans la vieille ville.',
      why: "Normal : nous avions sonne juste, et le double nous trouble. Le pronominal garde être : nous nous étions. EN: nous nous étions, never avions.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronominal', 'accord'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Compléter : le matin de l’oral', TEXTE_A4, [
  { q: 'Complète les trois premiers : elles (se lever), (se préparer), (se téléphoner).', a: "Elles s'étaient levées, elles s'étaient préparées, puis elles s'étaient téléphoné (on téléphone à quelqu'un : pas d'accord)." },
  { q: 'Complète : elles (se disputer), mais elles (se réconcilier).', a: "Elles s'étaient disputées, mais elles s'étaient réconciliées." },
  { q: 'Complète : Léa (se couper) les cheveux, et elle (se trouver) très bien.', a: "Léa s'était coupé les cheveux (le complément vient après) ; elle s'était trouvée très bien." },
  { q: 'Complète la fin : elles (ne pas encore se rendre compte) de leur chance.', a: "Elles ne s'étaient pas encore rendu compte de leur chance. Se rendre compte ne s'accorde jamais." },
], 'rec-b2-01-texte-a4', ['pronominal', 'accord']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('L’auxiliaire', 'Un verbe pronominal, au plus-que-parfait, prend…',
    ['toujours être', 'avoir ou être, selon le verbe'], 0,
    'Toujours être. EN: always être.'),
  ctl('L’accord', '« Elles s’étaient … » : téléphoné ou téléphonées ?',
    ['téléphonées', 'téléphoné'], 1,
    'On téléphone à quelqu’un : pas d’accord. EN: to each other.'),
  ctl('Le complément après', '« Elle s’était lavé les mains. » Pourquoi lavé sans e ?',
    ['les mains viennent après', 'laver ne s’accorde jamais'], 0,
    'Le complément direct suit le verbe. EN: the object follows.'),
], ['pronominal']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Les pronominaux',
    opener: {
      line: "Elles s'étaient levées tôt, puis téléphoné : ici tu tiens les verbes pronominaux et leurs deux exceptions. EN: They had got up early, then phoned each other: here you master pronominal verbs and their two exceptions.",
      imageRef: 'lessons/plus-que-parfait/act04.jpg',
    },
    sections: [],
    milestone: "Tu conjugues les verbes pronominaux avec être et tu sais quand leur participe reste sans accord. EN: You can conjugate pronominal verbs with être and know when their participle stays bare.",
    estScreens: 34, restPoints: ['a4-construire', 'a4-erreurs'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: UNE LIGNE, TROIS TEMPS
 *
 *  Meaning in contrast: the three past tenses round ONE repère, with b1.03's
 *  décor and action kept and the third tense added behind them.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le premier jour de Julien',
  frSub: 'Trois temps sur une même ligne',
  text: LECTURE_JULIEN,
  glossary: [
    { word: 'sa logeuse', en: 'his landlady', note: 'La personne qui lui loue sa chambre.' },
    { word: 'rez-de-chaussée', en: 'ground floor', note: 'L’étage au niveau de la rue.' },
    { word: 'soupe aux pois', en: 'pea soup', note: 'Un plat traditionnel du Québec, épais et nourrissant.' },
  ],
  questions: [
    { q: 'Quand Julien sort de l’aéroport, que se passait-il ?', a: "Il neigeait, et il faisait moins vingt : le décor, à l'imparfait." },
    { q: 'Qu’avait-il fait avant ce moment ? Cite deux faits.', a: "Il avait quitté Lyon le matin même, et il n'avait presque pas dormi dans l'avion." },
    { q: 'Pourquoi la voisine n’ouvre-t-elle pas ?', a: "Parce qu'elle était sortie : son départ a eu lieu avant le coup de sonnette." },
    { q: 'Quelle phrase explique le retard de la voisine ?', a: "« Elle avait oublié qu'il arrivait ce jour-là. » L'oubli se situe avant son retour." },
    { q: 'Dans la dernière partie, pourquoi « Il avait eu froid, il avait eu faim » ?', a: "Julien se couche et repense à sa journée : le coucher est le repère, et toute la journée est derrière lui." },
  ],
  audio: REC('rec-b2-01-julien'),
  say: REFRAME,
  terms: ['ligne', 'repere'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ligne',
  title: 'Trois temps autour d’un repère',
  frSub: 'Le même verbe, trois moments',
  hint: 'Quatre cartes. Les trois premières ne diffèrent que d’un mot.',
  audio: REC('rec-b2-01-ligne'),
  say: REFRAME,
  terms: ['ligne', 'repere'],
  cards: [
    {
      head: 'En cours', label: 'l’imparfait',
      fr: fr(E(1686)), sub: rsOf(E(1686)),
      body: "Au moment du coup de sonnette, elle était en train de sortir : il la croise peut-être dans l'escalier. EN: she was on her way out when he rang.",
    },
    {
      head: 'Ensuite', label: 'le passé composé',
      fr: fr(E(1687)), sub: rsOf(E(1687)),
      body: "La sonnette d'abord, la sortie après : deux actions qui se suivent. Elle sort peut-être pour lui ouvrir. EN: first the ring, then she went out.",
    },
    {
      head: 'Avant', label: 'le plus-que-parfait',
      fr: fr(E(1688)), sub: rsOf(E(1688)),
      body: "Quand il sonne, elle est déjà partie : personne ne répond. Le coup de sonnette est le repère, et la sortie est derrière lui. EN: she had gone before he rang.",
    },
    {
      head: 'Ce que le B1 t’a donné', label: Cap(PC_IMP_REF),
      fr: fr('fr.b1.recits-au-passe.1011'), sub: rsOf('fr.b1.recits-au-passe.1011'),
      body: `« ${B103_REFRAME} » Le plus-que-parfait ajoute une troisième place : derrière le film. EN: ${B103_REFRAME_EN}`,
    },
  ],
};

const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-trier',
  layer: 'core',
  size: 'lg',
  title: 'Place chaque verbe sur la ligne',
  frSub: 'En cours, ensuite ou avant',
  groups: [
    grp('En cours au moment du repère', [
      it(E(1680), 'il neigeait à la sortie'),
      it(E(1686), 'elle était dans l’escalier'),
      it(E(1692), 'le sommeil venait'),
      it('fr.b1.recits-au-passe.1011', 'la chaleur, les fenêtres'),
    ], chk('Ces verbes font-ils avancer l’histoire ?',
      ['non, ils décrivent ce qui se passait', 'oui, chacun est une étape'], 0,
      'L’imparfait pose le décor autour du repère. EN: the imparfait is the background.')),
    grp('Déjà fait avant le repère', [
      it(E(1681), 'avant l’arrivée à Québec'),
      it(E(1682), 'avant le voyage'),
      it(E(1690), 'avant le retour de la voisine'),
      it(E(1691), 'avant son retour'),
    ], chk('« Quand elle est rentrée, il avait appelé trois fois. » Les appels ont eu lieu…',
      ['pendant qu’elle rentrait', 'avant son retour', 'après son retour'], 1,
      'Le retour est le repère ; les appels sont derrière lui. EN: the calls came before her return.')),
    ctl('Le mélange', '« J’ai cru que tu étais parti. » Qu’est-ce qui était fait avant la pensée ?',
      ['le départ', 'la pensée', 'rien'], 0,
      'Le départ avait eu lieu, du moins le croyait-on, avant cette pensée. EN: the leaving comes before the thought.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Avant, pendant ou après',
  frSub: 'Neuf phrases, un seul repère chacune',
  lines: [
    ln(E(1686)), ln(E(1688)), ln(E(1687)), ln(E(1684)), ln(E(1683)),
    ln(E(1689)), ln(E(1693)), ln('fr.b1.recits-au-passe.1252'), ln(E(1690)),
  ],
  questions: [
    { q: 'Première phrase : où était-elle quand il a sonné ?', opts: ['en train de sortir', 'déjà loin', 'chez elle, assise'], correct: 0, why: 'Elle sortait : l’action était en cours. EN: under way.' },
    { q: 'Deuxième phrase : pouvait-elle lui ouvrir ?', opts: ['oui', 'non'], correct: 1, why: 'Elle était sortie avant : personne à la maison. EN: she had already gone.' },
    { q: 'Troisième phrase : qu’est-ce qui vient en premier ?', opts: ['la sortie', 'le coup de sonnette'], correct: 1, why: 'Deux passés composés dans l’ordre des faits. EN: the ring came first.' },
    { q: 'Cinquième phrase : quand avait-il décidé de ne pas prendre de manteau ?', opts: ['avant le voyage', 'à l’aéroport'], correct: 0, why: 'Il n’avait pas prévu : c’était fait avant. EN: before the trip.' },
    { q: 'Septième phrase : quand s’était-il trompé ?', opts: ['avant de comprendre', 'après avoir compris'], correct: 0, why: 'L’erreur précède la compréhension. EN: the mistake came first.' },
  ],
  audio: REC('rec-b2-01-ligne-ecoute'),
  say: REFRAME,
  terms: ['ligne'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Trois temps qui se ressemblent',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Pose le repère, puis place le verbe',
    body: "En cours au moment du repère : imparfait. Arrivé après lui : passé composé. Déjà fait avant lui : plus-que-parfait. Le même verbe peut prendre les trois, et chacun raconte autre chose. EN: ongoing, next, or already done.",
  },
  cards: [
    { promptLabel: 'imparfait pour avant', promptSound: 'Quand elle est rentrée, il appelait trois fois.', fr: fr(E(1691)), ipa: ipaOf(E(1691)), tip: 'Trois appels finis avant le retour. EN: finished before the return.' },
    { promptLabel: 'passé composé pour avant', promptSound: 'Il a sonné, mais elle est sortie.', fr: fr(E(1684)), ipa: ipaOf(E(1684)), tip: 'Elle n’ouvre pas : elle était déjà partie. EN: she had already left.' },
    { promptLabel: 'plus-que-parfait pour en cours', promptSound: 'Il avait dormi presque quand elle est enfin arrivée.', fr: fr(E(1692)), ipa: ipaOf(E(1692)), tip: 'Le sommeil venait, il n’était pas fini. EN: under way, not finished.' },
    { promptLabel: 'passé composé pour avant', promptSound: 'Il a quitté Lyon le matin même, quand il est arrivé.', fr: fr(E(1681)), ipa: ipaOf(E(1681)), tip: 'Le départ est derrière l’arrivée. EN: the departure lies behind the arrival.' },
    { promptLabel: 'imparfait pour avant', promptSound: 'La voisine oubliait son arrivée.', fr: fr(E(1690)), ipa: ipaOf(E(1690)), tip: 'Un oubli fait, pas une habitude. EN: a finished lapse, not a habit.' },
    { promptLabel: 'plus-que-parfait pour une étape', promptSound: 'Il avait attendu une heure, puis elle est rentrée.', fr: fr(E(1689)), ipa: ipaOf(E(1689)), tip: 'Dans l’ordre des faits, le passé composé suffit. EN: in order, passé composé.' },
  ],
  drill: [
    { promptSay: 'Elle … quand il a sonné. (elle était dans l’escalier)', opts: ['sortait', 'était sortie'], correct: 0 },
    { promptSay: 'Elle … quand il a sonné. (personne n’a ouvert)', opts: ['sortait', 'était sortie'], correct: 1 },
    { promptSay: 'Quand elle est rentrée, il … trois fois.', opts: ['avait appelé', 'appelait'], correct: 0 },
    { promptSay: 'Il neigeait quand Julien … de l’aéroport.', opts: ['était sorti', 'est sorti'], correct: 1 },
    { promptSay: 'Il … Lyon le matin même.', opts: ['avait quitté', 'quittait'], correct: 0 },
    { promptSay: 'Il … une heure dans le froid, puis la voisine est rentrée.', opts: ['avait attendu', 'a attendu'], correct: 1 },
    { promptSay: 'Il faisait froid, et il n’… pas prévu de manteau.', opts: ['avait', 'a'], correct: 0 },
    { promptSay: 'Plus tard, il a compris qu’il … d’adresse.', opts: ['s’est trompé', 's’était trompé'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Pose le repère, puis place le verbe' },
    { label: 'Six cartes', kind: 'cards', title: 'Le temps d’à côté' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-01-piege-ligne'),
  say: REFRAME,
  terms: ['ligne', 'repere'],
};

const A5_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a5-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Ajoute « déjà » dans ta tête. Si la phrase garde son sens, le plus-que-parfait va bien.', why: "Déjà dit exactement ce que ce temps exprime : fait avant le repère. EN: if déjà fits, the pluperfect fits." },
    { hack: 'Dessine la ligne : un trait pour le repère, puis place chaque verbe à gauche, dessus ou à droite.', why: "À gauche, plus-que-parfait ; dessus, imparfait ; à droite, passé composé. EN: left, on, right of the mark." },
    { hack: 'Demande-toi si la phrase explique quelque chose. Une cause qui vient d’avant prend souvent le plus-que-parfait.', why: "Il est arrivé tard : il s'était endormi. L'explication remonte le temps. EN: an earlier cause often steps back." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ligne', 'repere'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Compléter : la nouvelle d’Amandine', TEXTE_A5, [
  { q: 'Complète le début : quand Amandine (arriver), tout le monde la (regarder), il (faire) calme.', a: "Quand Amandine est arrivée au bureau, tout le monde la regardait en souriant. Il faisait étrangement calme. Une étape, puis deux décors." },
  { q: 'Complète : quelqu’un (poser) un gâteau ; ses collègues (apprendre) la nouvelle ; elle (obtenir) le poste.', a: "Quelqu'un avait posé un gâteau ; ses collègues avaient appris la nouvelle ; elle avait obtenu le poste. Tout était fait avant son arrivée." },
  { q: 'Complète : Amandine (rougir), puis elle (éclater) de rire.', a: "Amandine a rougi, puis elle a éclaté de rire : deux étapes après le repère." },
  { q: 'Complète la fin : elle (ne rien dire), mais sa cheffe (parler) trop vite.', a: "Elle n'avait rien dit à personne, mais sa cheffe avait parlé un peu trop vite. Deux faits d'avant, qui expliquent la scène." },
], 'rec-b2-01-texte-a5', ['ligne']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('En cours', '« Elle sortait quand il a sonné. » Elle était…',
    ['dans l’escalier', 'déjà loin', 'encore au lit'], 0,
    'L’imparfait : l’action était en cours. EN: in progress.'),
  ctl('Avant', '« Elle était sortie quand il a sonné. » A-t-elle ouvert ?',
    ['oui', 'non'], 1,
    'Elle était partie avant : personne n’ouvre. EN: she had gone.'),
  ctl('La méthode', 'Pour choisir entre les trois temps, tu poses d’abord…',
    ['le repère', 'la durée de l’action'], 0,
    'Le repère ; chaque verbe se place par rapport à lui. EN: the reference point.'),
], ['ligne']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Une ligne, trois temps',
    opener: {
      line: "Elle sortait, elle est sortie, elle était sortie : ici tu places trois temps sur une seule ligne. EN: Three past tenses of one verb: here you place them on a single line.",
      imageRef: 'lessons/plus-que-parfait/act05.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre l'imparfait, le passé composé et le plus-que-parfait en plaçant chaque verbe par rapport au repère. EN: You can choose between the three past tenses by placing each verb against the reference point.",
    estScreens: 40, restPoints: ['a5-cartes', 'a5-ecoute'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_TRIER, A5_ECOUTE, A5_PIEGE, A5_HACKS, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: RACONTER
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le mariage de Fatou',
  frSub: 'Dans l’ordre, puis à rebours',
  setting: 'Dakar, le lendemain du mariage. Awa raconte la fête à son oncle, qui n’a pas pu venir.',
  bubbles: [
    { from: 'narrator', fr: 'Awa commence par la fin, et son oncle doit remonter le temps avec elle.', en: 'Awa starts with the end, and her uncle has to go back in time with her.' },
    { from: 'user', fr: 'Lorsque les invités sont arrivés, la pluie avait cessé.', en: 'When the guests arrived, the rain had stopped.' },
    { from: 'coach', fr: "L'arrivée est ton repère. La pluie est derrière elle.", en: 'The arrival is your reference point. The rain lies behind it.', warn: 'Un repère, un retour' },
    { from: 'user', fr: 'Fatou avait tout organisé seule, trois mois plus tôt.', en: 'Fatou had organised everything on her own, three months earlier.' },
    { from: 'coach', fr: 'Trois mois plus tôt : tu remontes encore. Le plus-que-parfait suit.', en: 'Three months earlier: you go back further. The pluperfect follows.', warn: 'Plus tôt, la veille' },
    { from: 'user', fr: 'Puis le traiteur est arrivé, et on a mangé à minuit.', en: 'Then the caterer arrived, and we ate at midnight.' },
    { from: 'coach', fr: "Là, tu reprends l'ordre des faits : le passé composé suffit.", en: 'There you go back to the order of events: the passé composé is enough.', warn: 'Dans l’ordre : passé composé' },
  ],
  closing: { fr: 'Tu remontes le temps : plus-que-parfait. Tu le suis : passé composé.', en: 'Going back in time: pluperfect. Following it: passé composé.' },
  audio: REC('rec-b2-01-mariage'),
  say: REFRAME,
  terms: ['retour', 'repere'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quatre gestes du récit',
  frSub: 'Poser, remonter, expliquer, avancer',
  hint: 'Quatre cartes. La dernière dit quand ne PAS employer ce temps.',
  audio: REC('rec-b2-01-recit'),
  say: REFRAME,
  terms: ['retour', 'repere'],
  cards: [
    {
      head: 'Poser le repère', label: 'quand, lorsque',
      fr: fr(E(1700)), sub: rsOf(E(1700)),
      body: "Quand ou lorsque, avec un passé composé, fixe le moment. Le plus-que-parfait dit ce qui était fait à ce moment-là. Lorsque est plus soutenu. EN: quand or lorsque sets the moment.",
    },
    {
      head: 'Remonter', label: 'plus tôt, la veille',
      fr: fr(E(1703)), sub: rsOf(E(1703)),
      body: "Trois mois plus tôt, la veille, l'année précédente : ces marqueurs annoncent un retour en arrière. Avec eux, le plus-que-parfait est presque obligatoire. EN: earlier markers announce a flashback.",
    },
    {
      head: 'Expliquer', label: 'la cause d’avant',
      fr: fr(E(1711)), sub: rsOf(E(1711)),
      body: "Quand tu expliques un fait par ce qui s'était passé avant, la cause recule. Les deux-points, parce que, car l'annoncent souvent. EN: an earlier cause steps back.",
    },
    {
      head: 'Avancer', label: 'dans l’ordre',
      fr: fr(E(1704)), sub: rsOf(E(1704)),
      body: "Réservé, puis envoyé : l'ordre du texte est celui des faits. Aucun repère à dépasser, donc aucun plus-que-parfait. EN: told in order, the passé composé is enough.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Remonter ou avancer',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Le récit remonte', [
      it(E(1700), 'l’arrivée, puis la pluie d’avant'),
      it(E(1705), 'le repas, puis la disparition'),
      it(E(1708), 'la musique, puis le sommeil'),
      it(E(1713), 'aujourd’hui, puis le mariage'),
    ], chk('Dans ces phrases, l’ordre du texte est-il celui des faits ?',
      ['oui', 'non, le texte remonte le temps'], 1,
      'Le repère vient d’abord, ce qui l’a précédé ensuite. EN: the text goes back in time.')),
    grp('Le récit avance', [
      it(E(1704), 'réserver, puis envoyer'),
      it(E(1707), 'le début, puis la fin'),
      it(E(1706), 'apprendre ce qui s’était passé'),
      it(E(1710), 'l’arrivée et les fleurs'),
    ], chk('« Elle a réservé la salle, puis elle a envoyé les invitations. » Faut-il un plus-que-parfait ?',
      ['non, les faits sont dans l’ordre', 'oui, la réservation est plus ancienne'], 0,
      'Puis enchaîne deux étapes : rien ne recule. EN: puis moves forward.')),
    ctl('Le marqueur', 'Quel marqueur annonce un retour en arrière ?',
      ['ensuite', 'trois mois plus tôt', 'finalement'], 1,
      'Plus tôt fait remonter le récit. EN: plus tôt goes back.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['retour'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Cinq retours en arrière',
  frSub: 'Dans des textes de tous les jours',
  examples: [
    ex('fr.b1.paroles-rapportees.1125', 'le départ, puis l’arrivée qui le découvre'),
    ex('fr.b2.strategies-de-comprehension.1731', 'un article de presse : la réaction arrive trop tard'),
    ex('fr.b1.pronoms-essentiels.1558', 'une relative qui remonte : personne ne l’avait prévu'),
    ex(E(1714), 'tout, sauf une chose : le traiteur'),
    ex(E(1709), 'une robe faite avant la fête, avec l’accord que'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['retour'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de récit',
  errors: [
    {
      wrong: "Elle avait réservé la salle, puis elle avait envoyé les invitations.",
      right: "Elle a réservé la salle, puis elle a envoyé les invitations.",
      why: "Normal : l'histoire est ancienne, alors tout semble devoir reculer. Mais puis avance : sans repère à dépasser, le passé composé suffit. EN: puis moves forward; no pluperfect needed.",
    },
    {
      wrong: 'Trois mois plus tôt, elle a réservé la salle.',
      right: 'Trois mois plus tôt, elle avait réservé la salle.',
      why: "Correct dans un récit qui commence là. Mais au milieu d'une histoire sur le jour J, plus tôt remonte le temps. EN: in mid-story, plus tôt calls for the pluperfect.",
    },
    {
      wrong: "Le traiteur est arrivé tard : il s'est endormi en route.",
      right: "Le traiteur est arrivé tard : il s'était endormi en route.",
      why: "Normal : à l'oral, on laisse souvent l'ordre au contexte. À l'écrit, la cause qui vient d'avant recule. EN: in writing, the earlier cause steps back.",
    },
    {
      wrong: 'Quand les invités avaient arrivé, la pluie a cessé.',
      right: 'Lorsque les invités sont arrivés, la pluie avait cessé.',
      why: "Deux erreurs : arriver prend être, et le repère est l'arrivée. C'est la pluie qui a cessé avant. EN: arriver takes être, and the rain stopped first.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['retour', 'repere'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Le repère, puis ce qui était fait',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['retour'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Réécrire : la semaine de Samuel', TEXTE_A6, [
  { q: 'Écris la première phrase, qui pose le repère.', a: "Quand Samuel est arrivé au rendez-vous vendredi, avec vingt minutes de retard et sans ordinateur, le client l'attendait déjà." },
  { q: 'Raconte ce qui s’était passé avant, du plus ancien au plus récent.', a: "Le lundi, il avait appris la date du rendez-vous. Il avait préparé sa présentation le mardi et le mercredi, mais il avait oublié son ordinateur au bureau le jeudi soir, et le matin même, le métro était tombé en panne." },
  { q: 'Termine l’histoire. Quel temps reprends-tu ?', a: "Le passé composé, parce que tu avances de nouveau : « Le client est reparti avant la fin. »" },
], 'rec-b2-01-texte-a6', ['retour', 'repere']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le repère', '« Lorsque les invités sont arrivés, la pluie avait cessé. » Quel est le repère ?',
    ['la pluie', 'l’arrivée des invités'], 1,
    'Lorsque + passé composé fixe le moment. EN: lorsque sets the moment.'),
  ctl('L’ordre', 'Tu racontes les faits dans l’ordre, du premier au dernier. Il te faut…',
    ['le passé composé', 'le plus-que-parfait'], 0,
    'Rien ne recule : le passé composé suffit. EN: nothing steps back.'),
  ctl('La cause', '« Il est arrivé tard : il … en route. »',
    ['s’est endormi', 's’était endormi', 's’endormait'], 1,
    'La cause vient d’avant : elle recule. EN: the earlier cause steps back.'),
], ['retour']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Raconter',
    opener: {
      line: "Tu commences par la fête, puis tu remontes aux préparatifs : ici tu apprends à raconter à rebours. EN: You start with the party, then go back to the preparations: here you learn to tell a story backwards.",
      imageRef: 'lessons/plus-que-parfait/act06.jpg',
    },
    sections: [],
    milestone: "Tu poses un repère avec quand ou lorsque, tu remontes le temps quand il le faut, et tu gardes le passé composé quand tu racontes dans l'ordre. EN: You can set a reference point, go back when needed, and stay in the passé composé when telling events in order.",
    estScreens: 40, restPoints: ['a6-cartes', 'a6-erreurs'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_EXEMPLES, A6_ERREURS, A6_DICTEE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: DÉJÀ, PAS ENCORE, JUSTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Déjà ou pas encore',
  frSub: 'Dix phrases, dix petits mots',
  lines: [
    ln(E(1720)), ln(E(1721)), ln(E(1722)), ln(E(1724)), ln(E(1725)),
    ln(E(1726)), ln(E(1728)), ln(E(1729)), ln(E(1733)), ln(E(1734)),
  ],
  questions: [
    { q: 'Première phrase : le train était-il en gare ?', opts: ['non', 'oui'], correct: 0, why: 'Il était déjà parti. EN: it had already left.' },
    { q: 'Deuxième phrase : le rapport était-il prêt ?', opts: ['oui', 'non'], correct: 1, why: 'Pas encore fini. EN: not finished yet.' },
    { q: 'Troisième phrase : le départ était-il récent ?', opts: ['oui, tout récent', 'non, ancien'], correct: 0, why: 'Venait de : un passé tout proche. EN: very recent.' },
    { q: 'Cinquième phrase : combien de temps entre la porte et le téléphone ?', opts: ['presque rien', 'une heure'], correct: 0, why: 'À peine… que : les deux se touchent. EN: almost no time.' },
    { q: 'Septième phrase : combien de fois le frère était-il venu ?', opts: ['jamais', 'une fois', 'deux fois'], correct: 2, why: 'Deux fois déjà. EN: twice.' },
  ],
  audio: REC('rec-b2-01-adverbes-ecoute'),
  say: REFRAME,
  terms: ['adverbes'],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-ligne',
  title: 'Six petits mots et leur place',
  cols: ['Mot', 'Place', 'Exemple'],
  rows: [
    { cells: ['déjà', 'entre les deux mots', 'il avait déjà lu'], say: fr(E(1731)),
      detail: { title: 'déjà', body: "Fait avant le repère, et parfois plus tôt que prévu. EN: done before the reference point.", say: fr(E(1720)) } },
    { cells: ['pas encore', 'ne… pas encore autour de l’auxiliaire', "je n'avais pas encore fini"], say: fr(E(1730)),
      detail: { title: 'pas encore', body: "Pas fait au moment du repère, mais attendu. EN: not yet done at that moment.", say: fr(E(1721)) } },
    { cells: ['jamais', 'ne… jamais', "nous n'avions jamais vu"], say: fr(E(1724)),
      detail: { title: 'jamais', body: "Aucune fois avant le repère : une première, souvent. EN: never before that point.", say: fr(E(1733)) } },
    { cells: ['à peine… que', 'à peine entre les deux mots', 'il avait à peine fermé'], say: fr(E(1725)),
      detail: { title: 'à peine… que', body: "Deux faits presque collés : le second arrive tout de suite. Registre écrit. EN: barely... when.", say: fr(E(1725)) } },
    { cells: ['bien, souvent, tout', 'entre les deux mots', 'on avait tout prévu'], say: fr(E(1727)),
      detail: { title: 'bien, souvent, tout', body: "Les adverbes courts et tout, pronom, suivent la même place. EN: short adverbs and tout go in the middle.", say: fr(E(1734)) } },
    { cells: ['venait de', 'venir de à l’imparfait', 'elle venait de partir'], say: fr(E(1722)),
      detail: { title: 'venait de', body: "Un passé tout proche du repère, plus fréquent à l'oral que était juste parti. EN: had just, the usual spoken form.", say: fr(E(1723)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbes'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Glisse le petit mot au bon endroit',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Entre les deux mots', [
      it(E(1728), 'déjà'),
      it(E(1726), 'bien'),
      it(E(1734), 'souvent'),
      it(E(1731), 'déjà, avant le repère'),
    ], chk('Où se place déjà ?',
      ['avant avait', 'entre avait et le participe', 'après le participe'], 1,
      'Entre les deux mots du verbe. EN: between the two words.')),
    grp('Avec la négation', [
      it(E(1721), 'ne… pas encore'),
      it(E(1724), 'ne… jamais'),
      it(E(1729), 'ne… encore rien'),
      it('fr.b1.journalisme.1178', 'ne… pas'),
    ], chk('« La réunion … commencé. » Quelle forme ?',
      ['n’avait pas encore', 'avait pas encore', 'n’avait encore pas'], 0,
      'Ne avant, pas encore après l’auxiliaire. EN: ne before, pas encore after.')),
    ctl('Venait de', '« Elle venait de partir. » Le départ était…',
      ['tout récent', 'ancien', 'prévu pour plus tard'], 0,
      'Venir de à l’imparfait : un passé tout proche du repère. EN: very recent.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbes'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Le petit mot qui se perd',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Entre les deux mots, et ne devant',
    body: "Déjà, jamais, pas encore, bien, souvent et à peine se placent entre l'auxiliaire et le participe. Ne se place devant l'auxiliaire. L'anglais met already ailleurs : ne le suis pas. EN: short adverbs go between the auxiliary and the participle.",
  },
  cards: [
    { promptLabel: 'déjà après', promptSound: 'Il avait lu déjà le livre quand le film est sorti.', fr: fr(E(1731)), ipa: ipaOf(E(1731)), tip: 'Déjà entre avait et lu. EN: déjà in the middle.' },
    { promptLabel: 'ne mal placé', promptSound: 'Je avais ne pas encore fini mon rapport.', fr: fr(E(1721)), ipa: ipaOf(E(1721)), tip: 'Ne avant l’auxiliaire. EN: ne before avais.' },
    { promptLabel: 'jamais devant', promptSound: 'Nous jamais n’avions vu la mer.', fr: fr(E(1724)), ipa: ipaOf(E(1724)), tip: 'Jamais après l’auxiliaire. EN: jamais after avions.' },
    { promptLabel: 'venir au passé composé', promptSound: 'Elle est venue de partir quand j’ai appelé.', fr: fr(E(1722)), ipa: ipaOf(E(1722)), tip: 'Venir de se met à l’imparfait. EN: venir de takes the imparfait.' },
    { promptLabel: 'encore oublié', promptSound: 'Elle n’avait rien dit encore à personne.', fr: fr(E(1729)), ipa: ipaOf(E(1729)), tip: 'Encore rien, entre les deux mots. EN: encore rien in the middle.' },
    { promptLabel: 'à peine après', promptSound: 'Il avait fermé à peine la porte que le téléphone a sonné.', fr: fr(E(1725)), ipa: ipaOf(E(1725)), tip: 'À peine avant le participe. EN: à peine before the participle.' },
  ],
  drill: [
    { promptSay: 'Il … le livre quand le film est sorti.', opts: ['avait déjà lu', 'avait lu déjà'], correct: 0 },
    { promptSay: 'Je … fini mon rapport.', opts: ['n’avais pas encore', 'avais pas encore'], correct: 0 },
    { promptSay: 'Elle … partir quand j’ai appelé.', opts: ['est venue de', 'venait de'], correct: 1 },
    { promptSay: 'Nous … vu la mer.', opts: ['jamais n’avions', 'n’avions jamais'], correct: 1 },
    { promptSay: 'On … prévu, sauf la pluie.', opts: ['avait tout', 'avait prévu tout'], correct: 0 },
    { promptSay: 'Il avait … fermé la porte que le téléphone a sonné.', opts: ['à peine', 'juste à peine'], correct: 0 },
    { promptSay: 'Mon frère … venu à Bruxelles deux fois.', opts: ['était déjà', 'déjà était'], correct: 0 },
    { promptSay: 'Nous … parlé de ce voyage.', opts: ['avions parlé souvent', 'avions souvent'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Entre les deux mots, et ne devant' },
    { label: 'Six cartes', kind: 'cards', title: 'Où la main pose le petit mot' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-01-piege-adverbes'),
  say: REFRAME,
  terms: ['adverbes'],
};

const A7_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-flash',
  layer: 'core',
  title: 'Huit débuts de phrase',
  frSub: 'Le petit mot au milieu',
  cards: [
    { front: 'had already left', back: 'était déjà parti', say: fr(E(1720)) },
    { front: 'hadn’t finished yet', back: "n'avais pas encore fini", say: fr(E(1721)) },
    { front: 'had just left', back: 'venait de partir', say: fr(E(1722)) },
    { front: 'had never seen', back: "n'avions jamais vu", say: fr(E(1724)) },
    { front: 'had barely shut', back: 'avait à peine fermé', say: fr(E(1725)) },
    { front: 'had planned everything', back: 'avait tout prévu', say: fr(E(1727)) },
    { front: 'had often talked', back: 'avions souvent parlé', say: fr(E(1734)) },
    { front: 'had not yet said anything', back: "n'avait encore rien dit", say: fr(E(1729)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['adverbes'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Compléter : le premier hiver d’Awa', TEXTE_A7, [
  { q: 'Complète : elle (ne jamais voir) la neige ; elle (déjà travailler) deux ans.', a: "Elle n'avait jamais vu la neige ; elle avait déjà travaillé deux ans à Dakar." },
  { q: 'Complète : elle (juste finir) son master.', a: "Elle venait de finir son master (ou : elle avait juste fini son master). Venait de est la forme la plus courante." },
  { q: 'Complète : ses cousins lui (souvent parler) de l’hiver ; elle (ne pas encore acheter) de bottes.', a: "Ses cousins lui avaient souvent parlé de l'hiver québécois, mais elle n'avait pas encore acheté de bottes." },
  { q: 'Complète : elle (à peine ouvrir) la porte qu’elle a compris.', a: "Elle avait à peine ouvert la porte de l'immeuble qu'elle a compris son erreur." },
], 'rec-b2-01-texte-a7', ['adverbes']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La place', 'Où va déjà dans un plus-que-parfait ?',
    ['entre l’auxiliaire et le participe', 'devant l’auxiliaire'], 0,
    'Au milieu. EN: in the middle.'),
  ctl('La négation', 'Laquelle est juste ?',
    ['je n’avais pas encore fini', 'je n’avais fini pas encore', 'je avais pas encore fini'], 0,
    'Ne avant, pas encore après avais. EN: ne before, pas encore after.'),
  ctl('Le tout proche', '« Elle venait de partir » se dit plutôt…',
    ['à l’oral comme à l’écrit', 'seulement dans les livres'], 0,
    'Venait de est la forme courante. EN: the everyday form.'),
], ['adverbes']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Déjà, pas encore, juste',
    opener: {
      line: "Le train était déjà parti, la réunion n'avait pas encore commencé : ici tu places les petits mots qui changent tout. EN: Already gone, not yet started: here you place the small words that change everything.",
      imageRef: 'lessons/plus-que-parfait/act07.jpg',
    },
    sections: [],
    milestone: "Tu places déjà, pas encore, jamais et à peine entre les deux mots du verbe, et tu choisis entre venait de et était juste parti. EN: You can place the short adverbs and choose between venait de and était juste parti.",
    estScreens: 36, restPoints: ['a7-table', 'a7-piege'],
  },
  sections: [A7_ECOUTE, A7_TABLE, A7_CONSTRUIRE, A7_PIEGE, A7_FLASH, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: IL A DIT QU'IL AVAIT FINI
 *
 *  Builds on lesson 19 in B1, never re-teaches it: the step back after verbs
 *  of saying AND of thinking, in relatives and in indirect questions.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'La pause café',
  frSub: 'Les nouvelles de la semaine',
  setting: 'Liège, au bureau, un lundi. Nadia revient de congé et son collègue Olivier lui résume ce qu’elle a manqué.',
  bubbles: [
    { from: 'narrator', fr: 'Olivier rapporte tout ce qu’il a entendu pendant la semaine.', en: 'Olivier reports everything he heard during the week.' },
    { from: 'user', fr: "Le directeur a précisé que le contrat avait été signé.", en: 'The director made clear that the contract had been signed.' },
    { from: 'coach', fr: 'La signature est derrière la parole du directeur : elle recule.', en: 'The signing lies behind what the director said: it steps back.', warn: 'Parole au passé' },
    { from: 'user', fr: "Et Sophie m'a expliqué qu'elle avait changé de poste.", en: 'And Sophie explained to me that she had changed jobs.' },
    { from: 'coach', fr: "Même chose avec expliquer, raconter, apprendre.", en: 'Same thing with expliquer, raconter, apprendre.', warn: 'Tous les verbes de parole' },
    { from: 'user', fr: "Je croyais que tu avais reçu mon message.", en: 'I thought you had got my message.' },
    { from: 'coach', fr: 'Une pensée recule aussi : je croyais, je savais, je pensais.', en: 'A thought steps back too: je croyais, je savais, je pensais.', warn: 'Verbes de pensée' },
  ],
  closing: { fr: "Une parole ou une pensée au passé devient le repère.", en: 'A past word or thought becomes the reference point.' },
  audio: REC('rec-b2-01-pause-cafe'),
  say: REFRAME,
  terms: ['recul', 'repere'],
};

const A8_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Plus loin que la leçon 19',
  frSub: 'Dire, penser, relier, demander',
  hint: 'Quatre cartes. La première, tu la connais ; les trois autres vont plus loin.',
  audio: REC('rec-b2-01-rapporte'),
  say: REFRAME,
  terms: ['recul'],
  cards: [
    {
      head: 'Ce que tu sais', label: Cap(DISCOURS_REF),
      fr: fr(E(1746)), sub: rsOf(E(1746)),
      body: `« ${B119_REFRAME} » Après il a dit, le passé composé du message recule. Après il dit, au présent, rien ne bouge. EN: ${B119_REFRAME_EN}`,
    },
    {
      head: 'Les verbes de pensée', label: 'savoir, croire, penser',
      fr: fr(E(1743)), sub: rsOf(E(1743)),
      body: "Une pensée passée recule comme une parole : je savais qu'elle avait déménagé. Je croyais que dit souvent une erreur. EN: past thinking verbs trigger the same step back.",
    },
    {
      head: 'Les relatives', label: Cap(QUI_QUE_REF),
      fr: fr(E(1750)), sub: rsOf(E(1750)),
      body: "Le prêt a eu lieu avant la découverte : la relative recule. Que placé avant, l'accord suit : la robe qu'elle avait cousue. EN: a relative clause steps back too.",
    },
    {
      head: 'Les questions rapportées', label: 'si, ce que',
      fr: fr(E(1755)), sub: rsOf(E(1755)),
      body: "Avez-vous vécu à l'étranger devient si j'avais vécu. Qu'as-tu fait devient ce que tu avais fait. EN: reported questions step back as well.",
    },
  ],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-table',
  layer: 'core',
  sheetId: 'sheet-recit',
  title: 'Six façons de rapporter',
  cols: ['Verbe', 'Ce qu’il rapporte', 'Exemple'],
  rows: [
    { cells: ['expliquer', 'une raison, un changement', "qu'elle avait changé de poste"], say: fr(E(1740)),
      detail: { title: 'expliquer que', body: "Le plus neutre après dire. Il annonce souvent une cause. EN: explain that.", say: fr(E(1740)) } },
    { cells: ['raconter', 'une histoire', "qu'il s'était perdu"], say: fr(E(1741)),
      detail: { title: 'raconter que', body: "Pour une suite d'événements : le récit entier recule. EN: tell that.", say: fr('fr.b1.paroles-rapportees.1171') } },
    { cells: ['apprendre', 'une nouvelle reçue', "que l'usine avait fermé"], say: fr(E(1742)),
      detail: { title: 'apprendre que', body: "Le moment où tu l'apprends est le repère ; le fait est derrière. EN: find out that.", say: fr(E(1742)) } },
    { cells: ['avouer', 'une faute', "qu'il avait caché la vérité"], say: fr(E(1752)),
      detail: { title: 'avouer que', body: "Un aveu porte presque toujours sur un fait déjà fait. EN: admit that.", say: fr(E(1752)) } },
    { cells: ['croire', 'une idée, souvent fausse', 'que tu avais reçu'], say: fr(E(1744)),
      detail: { title: 'croire que', body: "Je croyais que suggère que la réalité était autre. EN: I thought, often wrongly.", say: fr(E(1744)) } },
    { cells: ['demander si', 'une question fermée', "si j'avais déjà vécu"], say: fr(E(1755)),
      detail: { title: 'demander si', body: "La question recule comme une affirmation. EN: ask whether.", say: fr('fr.b1.projets-et-futur.1315') } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Fais reculer le message',
  frSub: 'Trois pages, trois gâchettes',
  groups: [
    grp('Des paroles', [
      it(E(1746), 'j’ai fini devient avait fini'),
      it(E(1748), 'je n’ai rien vu devient n’avait rien vu'),
      it(E(1749), 'le vol a été annulé'),
      it('fr.b1.paroles-rapportees.1113', 'nous sommes déjà partis'),
    ], chk('« J’ai fini », dit-elle hier. Tu rapportes aujourd’hui…',
      ['elle a dit qu’elle a fini', 'elle a dit qu’elle avait fini'], 1,
      'Après a dit, le passé composé recule. EN: after a dit, it steps back.')),
    grp('Des pensées', [
      it(E(1743), 'savoir'),
      it(E(1744), 'croire'),
      it(E(1742), 'apprendre'),
      it(E(1750), 'une relative'),
    ], chk('« Je croyais que tu avais reçu mon message. » L’as-tu reçu ?',
      ['oui', 'non, sans doute pas'], 1,
      'Je croyais que annonce souvent une erreur. EN: je croyais often means I was wrong.')),
    ctl('Au présent', '« Elle dit qu’elle a fini. » Faut-il faire reculer ?',
      ['non, dit est au présent', 'oui, toujours'], 0,
      'Seul un verbe au passé crée un repère. EN: only a past reporting verb.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui a dit quoi',
  frSub: 'Neuf messages rapportés',
  lines: [
    ln(E(1740)), ln(E(1741)), ln(E(1742)), ln(E(1747)), ln(E(1748)),
    ln(E(1749)), ln('fr.b1.paroles-rapportees.1120'), ln(E(1754)), ln(E(1755)),
  ],
  questions: [
    { q: 'Première phrase : qu’avait fait la collègue ?', opts: ['changé de poste', 'démissionné', 'déménagé'], correct: 0, why: 'Elle avait changé de poste. EN: she had changed jobs.' },
    { q: 'Deuxième phrase : où s’était-il perdu ?', opts: ['en ville', 'en forêt'], correct: 1, why: 'En forêt. EN: in the forest.' },
    { q: 'Quatrième phrase : le verbe de parole est-il au passé ?', opts: ['non, au présent', 'oui'], correct: 0, why: 'Elle dit : rien ne recule. EN: present tense, no step back.' },
    { q: 'Sixième phrase : qu’est-il arrivé au vol ?', opts: ['il avait été annulé', 'il avait été retardé'], correct: 0, why: 'Annulé. EN: cancelled.' },
    { q: 'Dernière phrase : que voulait-on savoir ?', opts: ['si la personne avait vécu à l’étranger', 'où elle voulait vivre'], correct: 0, why: 'Une question fermée rapportée avec si. EN: whether she had lived abroad.' },
  ],
  audio: REC('rec-b2-01-rapporte-ecoute'),
  say: REFRAME,
  terms: ['recul'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de parole rapportée',
  errors: [
    {
      wrong: "Il m'a dit qu'il a perdu son portefeuille.",
      right: "Il m'a dit qu'il avait perdu son portefeuille.",
      why: "Très fréquent à l'oral, et compris. À l'écrit et à l'examen, après a dit, le passé composé recule. EN: common in speech; in writing, step back.",
    },
    {
      wrong: "Elle dit qu'elle avait fini.",
      right: "Elle dit qu'elle a fini.",
      why: "Normal : on applique la règle partout. Mais dit est au présent : il n'y a pas de repère passé, donc rien ne recule. EN: present reporting verb, no step back.",
    },
    {
      wrong: "Je savais qu'elle a déménagé.",
      right: "Je savais qu'elle avait déménagé.",
      why: "Normal : savoir ne ressemble pas à un verbe de parole. Mais une pensée passée crée le même repère. EN: past thinking verbs work like saying verbs.",
    },
    {
      wrong: "J'ai retrouvé le livre que tu m'as prêté l'an dernier.",
      right: "J'ai retrouvé le livre que tu m'avais prêté l'an dernier.",
      why: "Acceptable à l'oral. Mais le prêt précède la découverte : à l'écrit, la relative recule. EN: the lending comes first, so the relative steps back.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Réécrire : l’appel de Hugo', TEXTE_A8, [
  { q: 'Rapporte la première phrase de Hugo.', a: "Hugo m'a dit qu'il avait perdu son portefeuille dans le train." },
  { q: 'Rapporte la deuxième, avec ses deux verbes.', a: "Il m'a dit qu'il était allé au bureau des objets trouvés, mais que personne ne l'avait rapporté." },
  { q: 'Rapporte la dernière. Que deviennent ma sœur et m’a ?', a: "Il a ajouté qu'heureusement, sa sœur lui avait prêté de l'argent. Ma devient sa, m' devient lui." },
], 'rec-b2-01-texte-a8', ['recul']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le recul', '« J’ai perdu mes clés », a-t-il dit. Tu rapportes…',
    ['il a dit qu’il a perdu ses clés', 'il a dit qu’il avait perdu ses clés'], 1,
    'Après a dit : plus-que-parfait. EN: after a dit, pluperfect.'),
  ctl('La pensée', 'Après je croyais que, un passé composé du message devient…',
    ['un imparfait', 'un plus-que-parfait', 'un présent'], 1,
    'Une pensée passée recule comme une parole. EN: thought steps back too.'),
  ctl('Le présent', '« Il dit qu’il … fini. »',
    ['a', 'avait'], 0,
    'Dit au présent : rien ne bouge. EN: no step back.'),
], ['recul']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Il a dit qu’il avait fini',
    opener: {
      line: "Une nouvelle passe de bouche en bouche : ici tu rapportes ce qui s'était passé, en paroles comme en pensées. EN: News passes from mouth to mouth: here you report what had happened, in words and in thoughts.",
      imageRef: 'lessons/plus-que-parfait/act08.jpg',
    },
    sections: [],
    milestone: "Tu fais reculer le passé composé après un verbe de parole ou de pensée au passé, dans une relative et dans une question rapportée. EN: You can step the passé composé back after past verbs of saying and thinking, in relatives and reported questions.",
    estScreens: 38, restPoints: ['a8-table', 'a8-ecoute'],
  },
  sections: [A8_HISTOIRE, A8_RAPPEL, A8_TABLE, A8_CONSTRUIRE, A8_ECOUTE, A8_ERREURS, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: SI J'AVAIS SU
 *
 *  The bridge. The si half is BUILT; the result half (conditionnel passé)
 *  is read and glossed, never asked for: lessons 2 and 3 in B2 build it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Le déménagement',
  frSub: 'Nadia refait sa journée',
  setting: 'Bruxelles, un soir de septembre. Nadia est assise sur un carton ; son amie Chloé l’aide à ranger.',
  bubbles: [
    { from: 'narrator', fr: 'Le canapé est encore sur le trottoir, et il pleut.', en: 'The sofa is still on the pavement, and it is raining.' },
    { from: 'user', fr: "Si j'avais réservé un camion, tout serait déjà rangé.", en: 'If I had booked a van, everything would already be put away.' },
    { from: 'coach', fr: "Si + plus-que-parfait : un passé qui n'a pas eu lieu. Tu n'as pas réservé.", en: 'Si plus pluperfect: a past that did not happen. You did not book.', warn: 'Si, puis avais' },
    { from: 'user', fr: "Si seulement j'avais prévenu mon frère.", en: 'If only I had warned my brother.' },
    { from: 'coach', fr: 'Avec seulement, la moitié si suffit : c’est un regret.', en: 'With seulement, the si half is enough: it is a regret.', warn: 'Si seulement' },
    { from: 'user', fr: "Si j'avais su, je serais partie plus tôt ce matin.", en: 'If I had known, I would have left earlier this morning.' },
    { from: 'coach', fr: "La deuxième moitié, je serais partie, tu la construiras dans les deux prochaines leçons.", en: 'The second half, je serais partie, you will build in the next two lessons.', warn: 'Le résultat : plus tard' },
  ],
  closing: { fr: 'Si j’avais : la porte vers un passé qui n’a pas eu lieu.', en: 'Si j’avais: the door to a past that did not happen.' },
  audio: REC('rec-b2-01-demenagement'),
  say: REFRAME,
  terms: ['regret', 'repere'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-recit',
  title: 'Le si qui regarde en arrière',
  frSub: 'Imparfait ou plus-que-parfait après si',
  hint: 'Quatre cartes. Les deux premières ne diffèrent que d’un cran.',
  audio: REC('rec-b2-01-si'),
  say: REFRAME,
  terms: ['regret'],
  cards: [
    {
      head: 'Ce n’est pas le cas', label: Cap(SI_REF),
      fr: fr(E(1766)), sub: rsOf(E(1766)),
      body: `« ${B110_REFRAME} » Si + imparfait : aujourd'hui, je ne parle pas italien. EN: ${B110_REFRAME_EN}`,
    },
    {
      head: 'Ça n’a pas eu lieu', label: 'si + plus-que-parfait',
      fr: fr(E(1767)), sub: rsOf(E(1767)),
      body: "Un cran plus loin : je n'ai pas appris l'italien, et je n'ai pas lu le roman. La leçon 10 du B1 te l'a fait lire ; ici tu écris la moitié si. EN: one notch further back.",
    },
    {
      head: 'Le regret', label: 'si seulement',
      fr: fr(E(1761)), sub: rsOf(E(1761)),
      body: "Si seulement suivi du plus-que-parfait se suffit à lui-même. C'est la forme écrite du regret. EN: si seulement plus pluperfect is a complete regret.",
    },
    {
      head: 'Le résultat', label: 'la suite, au B2',
      fr: fr(E(1764)), sub: rsOf(E(1764)),
      body: `Tu serais arrivé est un conditionnel passé : tu le lis et tu le comprends. Le construire, c'est ${COND_PASSE_REF} et ${SI_PASSE_REF}. EN: the result half is built in the next two lessons.`,
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte la moitié si',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Si seulement', [
      it(E(1761), 'elle n’a pas écouté'),
      it(E(1762), 'nous ne sommes pas partis tôt'),
      it(E(1763), 'tu ne m’as pas prévenu'),
      it(E(1770), 'il n’a pas lu'),
    ], chk('« Si seulement nous étions partis plus tôt. » Sont-ils partis tôt ?',
      ['oui', 'non'], 1,
      'Le regret dit le contraire des faits. EN: the regret states the opposite of what happened.')),
    grp('Si, et ce qui aurait suivi', [
      it(E(1760), 'je ne savais pas'),
      it(E(1765), 'elle n’a pas gardé ses reçus'),
      it(E(1772), 'elle m’a aidé'),
      it(E(1768), 'on n’a pas vérifié'),
    ], chk('« Si elle ne m’avait pas aidé, j’aurais abandonné. » A-t-elle aidé ?',
      ['oui', 'non'], 0,
      'La négation après si dit qu’en réalité, elle a aidé. EN: in reality she did help.')),
    ctl('La moitié si', 'Après si, pour un passé qui n’a pas eu lieu…',
      ['le plus-que-parfait', 'le conditionnel passé', 'le passé composé'], 0,
      'Si j’avais su, jamais si j’aurais su. EN: never a conditional after si.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qu’est-ce qui s’est vraiment passé',
  frSub: 'Neuf phrases, le contraire des faits',
  lines: [
    ln(E(1760)), ln(E(1764)), ln(E(1765)), ln(E(1766)), ln(E(1767)),
    ln(E(1768)), ln(E(1769)), ln(E(1772)), ln('fr.b1.projets-et-futur.1209'),
  ],
  questions: [
    { q: 'Première phrase : la personne est-elle venue tôt ?', opts: ['non', 'oui'], correct: 0, why: 'Elle ne savait pas, donc elle n’est pas venue tôt. EN: she did not know.' },
    { q: 'Troisième phrase : a-t-elle été remboursée ?', opts: ['oui', 'non'], correct: 1, why: 'Elle n’a pas gardé ses reçus. EN: no receipts, no refund.' },
    { q: 'Quatrième phrase : parle-t-on du passé ?', opts: ['non, de maintenant', 'oui'], correct: 0, why: 'Si + imparfait : ce n’est pas le cas aujourd’hui. EN: present unreal.' },
    { q: 'Septième phrase : a-t-il signé ?', opts: ['non', 'oui'], correct: 1, why: 'Il a signé sans savoir. EN: he signed.' },
    { q: 'Dernière phrase : ont-ils réservé tôt ?', opts: ['oui', 'non'], correct: 1, why: 'Ils ne savaient pas, donc non. EN: they booked late.' },
  ],
  audio: REC('rec-b2-01-si-ecoute'),
  say: REFRAME,
  terms: ['regret'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Le si qui refuse le conditionnel',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Après si, jamais -rais',
    body: "Après un si de condition, aucune forme en -rais, pas plus au passé qu'au présent. Si j'avais su, jamais si j'aurais su. Le conditionnel passé vit dans l'autre moitié. EN: after si, never a conditional; the pluperfect instead.",
  },
  cards: [
    { promptLabel: 'si + conditionnel', promptSound: "Si j'aurais su, je n'aurais pas signé.", fr: fr(E(1769)), ipa: ipaOf(E(1769)), tip: 'La faute la plus célèbre, au passé. EN: the classic error, in the past.' },
    { promptLabel: 'si + conditionnel', promptSound: "Si seulement il aurait lu le mode d'emploi.", fr: fr(E(1770)), ipa: ipaOf(E(1770)), tip: 'Si seulement suit la même règle. EN: same rule.' },
    { promptLabel: 'si + passé composé', promptSound: "Si tu as pris le train, tu serais arrivé à l'heure.", fr: fr(E(1764)), ipa: ipaOf(E(1764)), tip: 'Un passé qui n’a pas eu lieu : avais pris. EN: avais pris.' },
    { promptLabel: 'si + imparfait', promptSound: "Si j'apprenais l'italien, j'aurais lu ce roman.", fr: fr(E(1767)), ipa: ipaOf(E(1767)), tip: 'Le résultat est passé : la condition aussi. EN: past result, past condition.' },
    { promptLabel: 'être oublié', promptSound: 'Si seulement nous avions partis plus tôt.', fr: fr(E(1762)), ipa: ipaOf(E(1762)), tip: 'Partir garde être : étions partis. EN: partir keeps être.' },
    { promptLabel: 'si + conditionnel', promptSound: "Si elle ne m'aurait pas aidé, j'aurais abandonné.", fr: fr(E(1772)), ipa: ipaOf(E(1772)), tip: 'Ne… pas autour de avait. EN: ne... pas round avait.' },
  ],
  drill: [
    { promptSay: 'Si j’… su, je n’aurais pas signé.', opts: ['avais', 'aurais'], correct: 0 },
    { promptSay: 'Si seulement il … le mode d’emploi.', opts: ['aurait lu', 'avait lu'], correct: 1 },
    { promptSay: 'Si tu … le train, tu serais arrivé à l’heure.', opts: ['avais pris', 'as pris'], correct: 0 },
    { promptSay: 'Si seulement nous … plus tôt.', opts: ['avions partis', 'étions partis'], correct: 1 },
    { promptSay: 'Si je … italien, je lirais ce roman.', opts: ['parlais', 'avais parlé'], correct: 0 },
    { promptSay: 'Si elle ne m’… pas aidé, j’aurais abandonné.', opts: ['aurait', 'avait'], correct: 1 },
    { promptSay: 'Si seulement tu m’… prévenu.', opts: ['avais', 'aurais'], correct: 0 },
    { promptSay: 'Si elle … ses reçus, elle aurait été remboursée.', opts: ['gardait', 'avait gardé'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Après si, jamais -rais' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit toute seule' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-01-piege-si'),
  say: REFRAME,
  terms: ['regret'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Quatre regrets déjà rencontrés',
  frSub: 'Lus au B1, compris maintenant',
  examples: [
    ex('fr.b1.projets-et-futur.1352', 'elle ne savait pas, et elle a pris ce train'),
    ex('fr.b1.projets-et-futur.1353', 'personne ne l’a prévenu, il n’est pas venu'),
    ex('fr.b1.projets-et-futur.1209', 'ils ont réservé trop tard'),
    ex('fr.b2.maison.078', 'ils ont emménagé en plein chantier'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Réécrire : le carnet de Nadia', TEXTE_A9, [
  { q: 'Écris les quatre phrases de Nadia.', a: TEXTE_A9_REPONSES.join(' ') },
  { q: 'Pourquoi le plus-que-parfait, et pas l’imparfait ?', a: "Parce que Nadia parle d'une journée passée qui ne peut plus changer : si + imparfait parlerait de maintenant." },
  { q: 'Que dit chaque phrase sur ce qui s’est vraiment passé ?', a: "Le contraire : elle n'a pas réservé, pas vérifié, pas prévenu son frère, et le canapé est resté dehors." },
], 'rec-b2-01-texte-a9', ['regret']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le sens', '« Si j’avais su, je serais venu plus tôt. » Savait-il ?',
    ['oui', 'non'], 1,
    'Si j’avais su veut toujours dire que je ne savais pas. EN: it always means I did not know.'),
  ctl('La forme', 'Laquelle est juste ?',
    ['si j’avais su', 'si j’aurais su'], 0,
    'Jamais de conditionnel après si. EN: never a conditional after si.'),
  ctl('La suite', 'Le résultat, j’aurais su, j’aurais pris…',
    ['tu le construiras dans les leçons 2 et 3 du B2', 'tu le construis dans cette leçon'], 0,
    'Ici tu le lis ; tu le construis ensuite. EN: here you read it.'),
], ['regret']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Si j’avais su',
    opener: {
      line: "Le canapé est resté sous la pluie, et tu refais la journée : ici tu écris ce qui n'a pas eu lieu. EN: The sofa stayed out in the rain and you replay the day: here you write what did not happen.",
      imageRef: 'lessons/plus-que-parfait/act09.jpg',
    },
    sections: [],
    milestone: "Tu écris si + plus-que-parfait et si seulement pour un passé qui n'a pas eu lieu, et tu lis le résultat au conditionnel passé. EN: You can write si with the pluperfect and si seulement for a past that did not happen.",
    estScreens: 38, restPoints: ['a9-construire', 'a9-piege'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_CONSTRUIRE, A9_ECOUTE, A9_PIEGE, A9_EXEMPLES, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: LES FAUSSES PISTES
 *
 *  The other half of the reframe: no repère, no plus-que-parfait. Real
 *  learner errors only.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le premier jet de Tom',
  frSub: 'Trop de plus-que-parfaits',
  text: LECTURE_CORRIGE,
  glossary: [
    { word: 'le premier jet', en: 'the first draft', note: 'La première version d’un texte, avant correction.' },
    { word: 'sa tutrice', en: 'his tutor', note: 'L’enseignante qui suit son travail.' },
  ],
  questions: [
    { q: 'Pourquoi Mme Lambert refuse-t-elle « j’avais passé » et « j’étais arrivé » ?', a: "Parce que Tom raconte dans l'ordre : rien ne recule, il n'y a pas de repère à dépasser. Le passé composé suffit." },
    { q: '« J’avais soif » est-il un plus-que-parfait ?', a: "Non. C'est l'imparfait d'avoir soif : un état qui dure." },
    { q: 'Quelle phrase de Tom garde son plus-que-parfait, et quel est le repère ?', a: "« Je n'étais jamais allé en Afrique avant ce voyage. » Le repère, c'est le voyage." },
    { q: 'Selon Mme Lambert, que gagne le texte à perdre ses plus-que-parfaits ?', a: "De la clarté : le lecteur saura dans quel ordre les choses se sont passées." },
  ],
  audio: REC('rec-b2-01-tom'),
  say: REFRAME,
  terms: ['piste', 'repere'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quatre fausses pistes',
  frSub: 'Ça ressemble, et ce n’en est pas',
  hint: 'Quatre cartes. Chacune vient d’une vraie copie d’apprenant.',
  audio: REC('rec-b2-01-pistes'),
  say: REFRAME,
  terms: ['piste'],
  cards: [
    {
      head: 'Avait, tout seul', label: 'un imparfait',
      fr: fr('fr.b1.connecteurs-logiques.1362'), sub: rsOf('fr.b1.connecteurs-logiques.1362'),
      body: "Avait du retard, avait faim, avait peur : avoir à l'imparfait, sans participe. Un plus-que-parfait a toujours deux mots. EN: avait with no participle is an imparfait.",
    },
    {
      head: 'Était + un adjectif', label: 'un état',
      fr: fr(E(1786)), sub: rsOf(E(1786)),
      body: "La porte était fermée décrit un état. Quelqu'un avait fermé la porte raconte une action faite avant. Les deux sont justes ; ils ne disent pas la même chose. EN: a state, not an earlier action.",
    },
    {
      head: 'Depuis', label: 'l’imparfait',
      fr: fr(E(1784)), sub: rsOf(E(1784)),
      body: "Had been living for se dit avec l'imparfait et depuis : elle habitait là depuis deux ans. Le plus-que-parfait couperait la durée. EN: had been doing for is imparfait plus depuis.",
    },
    {
      head: 'Had, sans repère', label: 'le passé composé',
      fr: fr(E(1782)), sub: rsOf(E(1782)),
      body: "Une expérience jusqu'à aujourd'hui prend le passé composé : j'ai déjà vu ce film. Avec un repère passé, j'avais déjà vu. EN: experience up to now is passé composé.",
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Vrai ou faux plus-que-parfait',
  frSub: 'Deux groupes, deux gâchettes',
  groups: [
    grp('Un vrai repère', [
      it(E(1783), 'la proposition est le repère'),
      it(E(1785), 'la fatigue vient d’une nuit d’avant'),
      it(E(1787), 'une action faite avant la découverte'),
      it(E(1789), 'le voyage est le repère'),
    ], chk('Dans ces phrases, où est le repère ?',
      ['dans un autre verbe ou un marqueur de la phrase', 'nulle part'], 0,
      'Tu as proposé, il était fatigué, ce voyage : chaque fois, un moment passé. EN: each has a past reference point.')),
    grp('Pas de plus-que-parfait', [
      it(E(1780), 'avait faim : un imparfait'),
      it(E(1786), 'était fermée : un état'),
      it(E(1784), 'depuis : un imparfait'),
      it(E(1790), 'une expérience jusqu’à aujourd’hui'),
    ], chk('« Tout le monde avait faim. » Combien de mots a ce verbe ?',
      ['un seul : avait', 'deux : avait et faim'], 0,
      'Faim est un nom, pas un participe. EN: faim is a noun, not a participle.')),
    ctl('Le test final', 'Tu ne trouves aucun moment passé auquel rattacher ton verbe. Tu écris…',
      ['un passé composé ou un imparfait', 'un plus-que-parfait quand même'], 0,
      'Sans repère, pas de plus-que-parfait. EN: no reference point, no pluperfect.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['piste', 'repere'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fausses pistes, en vrai',
  errors: [
    {
      wrong: "Hier, j'avais déjeuné avec ma sœur.",
      right: "Hier, j'ai déjeuné avec ma sœur.",
      why: "Normal : I had lunch contient had. Mais had est ici un verbe, pas un auxiliaire : un seul fait, dans l'ordre. EN: had lunch is a plain past event.",
    },
    {
      wrong: 'Elle avait habité à Liège depuis deux ans quand elle a rencontré Paul.',
      right: 'Elle habitait à Liège depuis deux ans quand elle a rencontré Paul.',
      why: "Normal : had been living semble demander le plus-que-parfait. Avec depuis, la durée continue : imparfait. EN: depuis keeps the imparfait.",
    },
    {
      wrong: "J'avais déjà visité Québec, c'est une ville magnifique.",
      right: "J'ai déjà visité Québec, c'est une ville magnifique.",
      why: "Déjà semble appeler avait. Mais l'expérience va jusqu'à aujourd'hui : aucun repère passé. EN: an experience up to now takes the passé composé.",
    },
    {
      wrong: "Le mois dernier, j'étais tombé malade, et j'étais resté au lit.",
      right: "Le mois dernier, je suis tombé malade, et je suis resté au lit.",
      why: "Normal : le mois dernier semble loin. Mais le temps ne mesure pas la distance : les faits se suivent, sans repère. EN: distance in time does not decide.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['piste'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Avant d’écrire un plus-que-parfait',
  frSub: 'Quatre questions à te poser',
  points: [
    "Quel est mon repère ? Si je ne le trouve pas, je n'écris pas ce temps. EN: no reference point, no pluperfect.",
    "Mon verbe a-t-il deux mots ? Avait tout seul est un imparfait. EN: a pluperfect always has two words.",
    "Ce fait est-il fini avant le repère, ou en cours ? Fini : plus-que-parfait. En cours : imparfait. EN: finished before, or ongoing.",
    "Est-ce que je raconte dans l'ordre ? Alors le passé composé suffit. EN: in order, passé composé.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['piste', 'repere'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Corriger : le message de Clara', TEXTE_A10, [
  { q: 'Quel plus-que-parfait a un vrai repère ?', a: "« Le facteur avait déjà déposé un colis » : le retour du travail est le repère, et le dépôt était fait avant." },
  { q: 'Corrige les verbes du début : j’avais reçu, je l’avais lue, je l’avais montrée, elle avait souri.', a: "Hier, j'ai reçu ta carte. Je l'ai lue deux fois, puis je l'ai montrée à ma mère. Elle a souri. Les faits se suivent." },
  { q: 'Corrige la dernière phrase.', a: "Je n'ai jamais reçu autant de cadeaux en une semaine. L'expérience va jusqu'à aujourd'hui : passé composé." },
  { q: 'Pourquoi « J’étais très touchée » ne change-t-il pas ?', a: "Ce n'est pas un plus-que-parfait : c'est l'imparfait d'être, qui décrit un état." },
], 'rec-b2-01-texte-a10', ['piste']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Avait', '« Comme le train avait du retard, j’ai pris un taxi. » Avait est…',
    ['un imparfait', 'un plus-que-parfait'], 0,
    'Un seul mot, pas de participe. EN: one word, no participle.'),
  ctl('Depuis', 'She had been living there for two years se dit…',
    ['elle avait habité là depuis deux ans', 'elle habitait là depuis deux ans'], 1,
    'Depuis garde l’imparfait. EN: depuis keeps the imparfait.'),
  ctl('La distance', 'Un récit d’il y a dix ans, raconté dans l’ordre, prend…',
    ['le passé composé', 'le plus-que-parfait'], 0,
    'La distance ne décide pas : le repère décide. EN: the reference point decides.'),
], ['piste']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Les fausses pistes',
    opener: {
      line: "Avait faim, était fermée, had lunch : ici tu apprends à reconnaître ce qui ressemble au plus-que-parfait sans en être. EN: Here you learn to spot what looks like a pluperfect and is not.",
      imageRef: 'lessons/plus-que-parfait/act10.jpg',
    },
    sections: [],
    milestone: "Tu n'écris plus de plus-que-parfait sans repère, et tu distingues un imparfait d'avoir, un état et une durée avec depuis. EN: You no longer write a pluperfect without a reference point.",
    estScreens: 32, restPoints: ['a10-cartes', 'a10-erreurs'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_TRIER, A10_ERREURS, A10_FOCUS, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: RACONTER CE QUI S'ÉTAIT PASSÉ
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le récit que tu vas imiter',
  frSub: 'Un anniversaire, deux surprises',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'la rubrique', en: 'the column', note: 'Une partie régulière d’un journal ou d’un magazine.' },
    { word: 'au courant', en: 'in the know', note: 'Informé d’un secret ou d’une nouvelle.' },
    { word: 'trahi le secret', en: 'given the secret away', note: 'Il l’a révélé, sans le vouloir.' },
  ],
  questions: [
    { q: 'Quel moment sert de repère au milieu du texte ?', a: "L'arrivée à la salle : « Quand nous sommes arrivés à la salle, ma grand-mère était déjà là. »" },
    { q: 'Qu’avait fait la famille avant la fête ? Cite trois actions.', a: "La tante avait réservé une salle, le cousin avait retrouvé des photos, le narrateur avait écrit un discours." },
    { q: 'Pourquoi « la lettre qu’elle avait écrite » s’accorde-t-il ?', a: "Avoir, et que reprend la lettre, placé avant : écrite." },
    { q: 'À quoi sert l’avant-dernière phrase ?', a: "Elle imagine un passé qui n'a pas eu lieu : si le voisin n'avait pas trahi le secret. En réalité, il l'a trahi." },
  ],
  audio: REC('rec-b2-01-modele'),
  say: REFRAME,
  terms: ['repere', 'retour', 'regret'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan du récit',
  steps: [
    'Pose le cadre : quand, où, qui, avec un ou deux imparfaits pour le décor. EN: set the scene with the imparfait.',
    'Fixe le repère : le moment où tout bascule, avec quand ou lorsque et un passé composé. EN: set the reference point.',
    'Remonte le temps : ce qui s’était passé avant, au plus-que-parfait, avec déjà, la veille ou plus tôt. EN: go back with the pluperfect.',
    'Reprends l’ordre des faits jusqu’à la fin, au passé composé, avec au moins une parole rapportée. EN: move forward again.',
    'Termine par un regret ou une réflexion : si j’avais su, si seulement. EN: end with a regret or a reflection.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'retour'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Quatre phrases que tout récit contient',
  cases: [
    { situation: 'Tu fixes le repère', fr: fr(E(1793)), en: en(E(1793)) },
    { situation: 'Tu remontes le temps', fr: fr(E(1792)), en: en(E(1792)) },
    { situation: 'Tu expliques par ce qui était fait avant', fr: fr(E(1795)), en: en(E(1795)) },
    { situation: 'Tu termines sur un regret', fr: fr(E(1796)), en: en(E(1796)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'regret'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Raconte ta journée à Samir',
  frSub: 'Six tours, à voix haute',
  setting: 'Samir, un ami, t’appelle le soir. Il a vu que tu avais manqué la réunion de l’association et veut savoir ce qui s’est passé.',
  turns: [
    {
      ai: 'Alors, qu’est-ce qui s’est passé ce matin ? On t’a attendu.', en: 'So, what happened this morning? We waited for you.',
      user: 'Quand je suis arrivé à la gare, le train était déjà parti.',
      userEn: 'When I got to the station, the train had already left. (The arrival is the reference point; the departure comes before it.)',
      alts: [
        { fr: 'Le train était parti deux minutes avant mon arrivée.', en: 'The train had left two minutes before I arrived.' },
        { fr: 'J’ai raté le train : il venait de partir.', en: 'I missed the train: it had just left. (Venait de: very recent.)' },
      ],
    },
    {
      ai: 'Tu n’avais pas regardé l’horaire ?', en: 'Had you not checked the timetable?',
      user: 'Si, mais j’avais noté la mauvaise heure la veille.',
      userEn: 'Yes, but I had written down the wrong time the day before. (An earlier cause steps back.)',
      alts: [
        { fr: 'Je l’avais regardé, mais on avait changé les horaires.', en: 'I had checked it, but the timetable had been changed.' },
        { fr: 'Non, je ne l’avais pas vérifié, je pensais le connaître.', en: 'No, I had not checked it, I thought I knew it.' },
      ],
    },
    {
      ai: 'Et tu as prévenu quelqu’un ?', en: 'And did you let anyone know?',
      user: 'J’ai appelé Léa, mais elle avait déjà éteint son téléphone.',
      userEn: 'I called Léa, but she had already switched off her phone. (Déjà between the two words.)',
      alts: [
        { fr: 'J’ai envoyé un message, mais personne ne l’avait lu.', en: 'I sent a message, but nobody had read it.' },
        { fr: 'J’ai essayé, mais la réunion avait déjà commencé.', en: 'I tried, but the meeting had already started.' },
      ],
    },
    {
      ai: 'Léa m’a dit qu’elle n’avait rien reçu.', en: 'Léa told me she had received nothing.',
      user: 'Oui, elle m’a expliqué qu’elle avait laissé son téléphone chez elle.',
      userEn: 'Yes, she explained to me that she had left her phone at home. (Reported speech: the passé composé steps back.)',
      alts: [
        { fr: 'Elle m’a dit qu’elle avait oublié son chargeur.', en: 'She told me she had forgotten her charger.' },
        { fr: 'Je croyais qu’elle avait reçu mon message.', en: 'I thought she had got my message. (Je croyais que: a mistaken thought.)' },
      ],
    },
    {
      ai: 'Et finalement, tu es venu comment ?', en: 'And in the end, how did you get here?',
      user: 'J’ai pris le train suivant, et je suis arrivé à la pause.',
      userEn: 'I took the next train and arrived at the break. (Told in order: passé composé.)',
      alts: [
        { fr: 'J’ai pris un taxi, et je suis arrivé pour la fin.', en: 'I took a taxi and arrived for the end.' },
        { fr: 'Un voisin m’a emmené en voiture.', en: 'A neighbour drove me. (Still in order: passé composé.)' },
      ],
    },
    {
      ai: 'Bon, au moins tu es venu.', en: 'Well, at least you came.',
      user: 'Oui, mais si j’avais vérifié mon billet, j’aurais tout vu depuis le début.',
      userEn: 'Yes, but if I had checked my ticket, I would have seen it all from the start. (The si half is yours; the result is for the next lessons.)',
      alts: [
        { fr: 'Si seulement j’avais relu mon billet la veille.', en: 'If only I had reread my ticket the day before.' },
        { fr: 'Si j’avais su, je serais parti une heure plus tôt.', en: 'If I had known, I would have left an hour earlier.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'recul', 'regret'],
};

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Raconte ce qui s’était passé avant',
  frSub: 'Mission écrite, format B2',
  brief: "Un magazine en ligne lance un appel à témoignages : « Racontez-nous un jour où rien ne s'est passé comme prévu. » Choisis un événement réel ou inventé (un voyage, un examen, une fête, un entretien) où, au moment décisif, quelque chose avait déjà eu lieu sans que tu le saches. Raconte-le pour les lecteurs du magazine.",
  briefEn: 'An online magazine is asking for stories: « Tell us about a day when nothing went to plan. » Pick a real or invented event (a trip, an exam, a party, an interview) where, at the decisive moment, something had already happened without your knowing. Tell it for the magazine’s readers.',
  produce: "Écris un récit de 180 à 250 mots au passé : un décor à l'imparfait, un repère au passé composé, au moins cinq plus-que-parfaits (dont un avec être et un avec déjà, pas encore ou jamais), une parole ou une pensée rapportée, et une fin avec si ou si seulement.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Tu racontes UN événement, avec un moment décisif clair et un fait qui avait eu lieu avant, un décor, une fin et une réflexion. Le ton convient aux lecteurs d'un magazine. Entre 180 et 250 mots.",
          '2 : Le récit existe, mais le moment décisif est flou, ou la fin manque, ou la longueur sort un peu des limites.',
          '1 : Une liste de faits sans moment décisif, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Le lecteur sait toujours où il est dans le temps : un repère posé avec quand ou lorsque, un retour en arrière annoncé (la veille, plus tôt), puis le retour à l'ordre des faits. Les connecteurs (pourtant, alors, finalement) relient les étapes.",
          '2 : Le récit se suit, mais un retour en arrière arrive sans repère, ou un passage mélange les époques.',
          '1 : On ne comprend pas dans quel ordre les choses se sont passées.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Tu emploies les trois temps du passé, le plus-que-parfait avec avoir ET être, un adverbe (déjà, pas encore, jamais), une parole ou une pensée rapportée, et si ou si seulement avec le plus-que-parfait.",
          '1 : Le plus-que-parfait est là, mais toujours avec le même verbe ou le même auxiliaire, et sans parole rapportée ni si.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Les auxiliaires, les accords (être et le sujet, avoir et le complément placé avant, les pronominaux) et la place des adverbes sont presque toujours justes, et aucun plus-que-parfait n'est employé sans repère.",
          "1 : Des erreurs fréquentes (j'avais allé, je m'avais levé, si j'aurais su, un plus-que-parfait dans un récit dans l'ordre) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Un français écrit et vivant, adapté à un magazine : ni langage de SMS, ni phrases de rapport administratif. Lorsque, alors, pourtant sont bien choisis.",
          '1 : Le texte sonne comme une conversation transcrite (du coup, en fait, genre) ou comme un rapport.',
        ],
      },
    ],
  },
  scaffold: [
    'Il y a quelques années,',
    'Ce jour-là,',
    'Il faisait',
    'Quand je suis arrivé(e),',
    'La veille,',
    "Je n'avais pas encore",
    "On m'a expliqué que",
    'Si seulement',
  ],
  modelAnswer: "Il y a deux ans, j'ai vécu la journée la plus absurde de ma vie. Je devais passer un entretien d'embauche à Lausanne, à dix heures. La veille, j'avais tout préparé : j'avais repassé ma chemise, j'avais relu mon dossier et j'avais même vérifié l'itinéraire deux fois. Ce matin-là, il pleuvait et la gare était bondée. Quand je suis arrivé sur le quai, le train de huit heures était déjà parti. Je n'avais pas vu qu'on avait changé les horaires pendant l'été. J'ai pris le train suivant et j'ai appelé l'entreprise. La secrétaire m'a expliqué que la responsable était déjà entrée en réunion et qu'elle n'avait pas encore lu mon message. Lorsque je suis enfin arrivé, à dix heures et demie, les autres candidats étaient repartis. J'ai attendu une heure dans le hall, persuadé que tout était perdu. Finalement, la responsable m'a reçu. Elle m'a avoué qu'elle-même s'était trompée de salle le matin, et nous avons ri. À la fin de l'entretien, elle m'a dit qu'elle avait apprécié mon calme. J'ai obtenu le poste. Aujourd'hui encore, j'y repense souvent. Si j'avais pris le premier train, je serais arrivé à l'heure, comme tout le monde, et elle ne m'aurait peut-être pas remarqué. Si seulement j'avais su tout cela la veille, j'aurais mieux dormi !\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : un seul événement, un moment décisif (l'arrivée sur le quai), un fait antérieur ignoré (le changement d'horaires), une fin et une réflexion.\n2. Cohérence : le repère posé avec quand et lorsque ; un retour en arrière annoncé (la veille) ; le retour à l'ordre des faits (j'ai pris, j'ai appelé, finalement).\n3. Étendue : l'imparfait du décor (il pleuvait), avoir et être (j'avais préparé, était parti, s'était trompée), déjà et pas encore, deux paroles rapportées (m'a expliqué que, m'a dit que), si et si seulement.\n4. Correction : accords justes (trompée, repartis) ; aucun plus-que-parfait dans les passages racontés dans l'ordre.\n5. Registre : un récit écrit et vivant (absurde, bondée, persuadé que tout était perdu), sans familiarité.",
  modelAnswerEn: "Two years ago I had the most absurd day of my life. I was due at a job interview in Lausanne at ten. The day before, I had got everything ready: I had ironed my shirt, reread my file and even checked the route twice. That morning it was raining and the station was packed. When I reached the platform, the eight o'clock train had already left. I had not seen that the timetable had been changed over the summer. I took the next train and called the company. The secretary explained that the manager had already gone into a meeting and had not yet read my message. When I finally arrived, at half past ten, the other candidates had left. I waited an hour in the lobby, sure that all was lost. In the end the manager saw me. She admitted that she herself had gone to the wrong room that morning, and we laughed. At the end of the interview she told me she had appreciated my calm. I got the job. I still think about it often. If I had caught the first train, I would have arrived on time like everyone else, and she might not have noticed me. If only I had known all that the day before, I would have slept better! The marker's notes (not counted): 1. Task: one event, a decisive moment, an earlier fact the narrator did not know, an ending and a reflection. 2. Coherence: the reference point set with quand and lorsque; a signalled flashback; a return to the order of events. 3. Range: imparfait for the setting, both auxiliaries, déjà and pas encore, two pieces of reported speech, si and si seulement. 4. Accuracy: agreements right; no pluperfect in the parts told in order. 5. Register: a lively written narrative, never familiar.",
  watchFor: [
    { pattern: 'The whole story told in the passé composé, so an earlier event (the changed timetable, the train that had left) reads as happening after the reference point.', criterion: 'coherence', feedback: "Pose ton repère, puis fais reculer ce qui était déjà fait : le train était déjà parti.", ref: 'a1-reperer' },
    { pattern: 'The wrong auxiliary: j’avais allé, elle avait arrivé, j’étais fini.', criterion: 'correction', feedback: 'Garde l’auxiliaire du passé composé : j’étais allé, elle était arrivée, j’avais fini.', ref: 'a2-erreurs' },
    { pattern: 'A conditional auxiliary instead of the imparfait: j’aurais fini for j’avais fini.', criterion: 'correction', feedback: 'Le plus-que-parfait se forme avec avais, avait : j’aurais est un conditionnel.', ref: 'a2-erreurs' },
    { pattern: 'Agreement missed or invented: elle était parti, la lettre qu’elle avait écrit, elles avaient réservées.', criterion: 'correction', feedback: 'Être accorde avec le sujet ; avoir seulement avec un complément placé avant.', ref: 'a3-piege' },
    { pattern: 'A pronominal verb with avoir (je m’avais levé), or agreement where se is indirect (elles s’étaient téléphonées).', criterion: 'correction', feedback: 'Toujours être : je m’étais levé ; et pas d’accord quand se veut dire à l’autre.', ref: 'a4-erreurs' },
    { pattern: 'The imparfait where an action was finished before the reference point, or the pluperfect for something still in progress.', criterion: 'etendue', feedback: 'Fini avant le repère : plus-que-parfait. En cours à ce moment-là : imparfait.', ref: 'a5-piege' },
    { pattern: 'The pluperfect used for events told in order (j’avais pris le train suivant, puis j’avais appelé).', criterion: 'coherence', feedback: 'Quand tu avances dans l’ordre des faits, reprends le passé composé.', ref: 'a6-erreurs' },
    { pattern: 'Adverbs outside the verb group: j’avais fini déjà, je avais pas encore vu.', criterion: 'correction', feedback: 'Déjà, pas encore, jamais se placent entre l’auxiliaire et le participe, et ne devant.', ref: 'a7-piege' },
    { pattern: 'Reported speech or thought without the step back: elle m’a dit qu’elle a lu mon message.', criterion: 'etendue', feedback: 'Après un verbe de parole au passé, le passé composé recule : qu’elle avait lu.', ref: 'a8-erreurs' },
    { pattern: 'A conditional after si: si j’aurais su, si seulement j’aurais vérifié.', criterion: 'correction', feedback: 'Après si, le plus-que-parfait : si j’avais su.', ref: 'a9-piege' },
    { pattern: 'A pluperfect with no reference point: an experience up to now (j’avais déjà visité Québec) or a duration with depuis.', criterion: 'correction', feedback: 'Sans repère passé, pas de plus-que-parfait : j’ai déjà visité ; j’habitais là depuis.', ref: 'a10-erreurs' },
    { pattern: 'No reported speech and no si or si seulement anywhere; or a body outside 180 to 250 words.', criterion: 'tache', feedback: 'Ajoute une parole rapportée et une fin avec si seulement ; compte tes mots sans le titre.', ref: 'a11-plan' },
  ],
  graderNotes: [
    'Count the words of the narrative only; a title does not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'DO NOT SCORE THE CONDITIONNEL PASSÉ (j’aurais pris, je serais arrivé) either way: lessons 2 and 3 in B2 build it. A correct one gains nothing under « correction »; a wrong one loses nothing. The si half (si + plus-que-parfait) IS scored.',
    'Judge each tense by its function against the reference point, not by distance in time. A story told entirely in order with one clear flashback is the target; a pluperfect in a chronological passage is an error (act 10).',
    'Accept venait de + infinitive and était juste + participle as equivalent for a very recent past. Accept « à peine… que » with the passé composé in the second half.',
    'Accept the passé composé after a past reporting verb ONLY in quoted direct speech; in indirect speech it costs a « correction » point once, not per occurrence.',
    'Writer gender is unknown: judge être agreement and pronominal agreement for internal consistency only. On with a plural or feminine agreement is correct.',
    'Do not score the passé simple if a learner uses it for narration: it is lesson 8 in B2 and recognition only.',
    'Accept regional vocabulary and settings (Québec, Belgium, Switzerland, West Africa): déjeuner and dîner in their regional senses, septante and nonante, char for car in Québec.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 2 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'retour', 'regret'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis ton récit à voix haute',
  frSub: 'Le repère, puis ce qui était fait',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'ligne'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la forme', v: 'avais, étais + participe', say: fr(E(1632)),
      detail: { title: 'La forme', body: "L'auxiliaire du passé composé, à l'imparfait, puis le participe. EN: passé composé auxiliary, in the imparfait.", say: fr(E(1626)) } },
    { k: 'les accords', v: 'être : le sujet ; avoir : le complément avant', say: fr(E(1644)),
      detail: { title: 'Les accords', body: "Les règles du passé composé ; les pronominaux prennent être. EN: the passé composé rules; pronominals take être.", say: fr(E(1664)) } },
    { k: 'la ligne', v: 'en cours, ensuite, avant', say: fr(E(1688)),
      detail: { title: 'La ligne', body: "Imparfait en cours, passé composé ensuite, plus-que-parfait avant le repère. EN: ongoing, next, before.", say: fr(E(1686)) } },
    { k: 'le récit', v: 'remonter, pas avancer', say: fr(E(1700)),
      detail: { title: 'Le récit', body: "Plus-que-parfait pour remonter le temps ; passé composé pour avancer dans l'ordre. EN: back with the pluperfect, forward with the passé composé.", say: fr(E(1704)) } },
    { k: 'les paroles', v: 'il a dit qu’il avait', say: fr(E(1746)),
      detail: { title: 'Les paroles', body: "Après un verbe de parole ou de pensée au passé, le passé composé recule. EN: steps back after a past saying verb.", say: fr(E(1743)) } },
    { k: 'le si', v: 'si j’avais, si seulement j’avais', say: fr(E(1761)),
      detail: { title: 'Le si', body: "Un passé qui n'a pas eu lieu ; jamais de conditionnel après si. EN: a past that did not happen; never a conditional after si.", say: fr(E(1769)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'accord', 'regret'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu construis le plus-que-parfait avec les deux auxiliaires, tu accordes son participe, tu le places sur une ligne à côté de l'imparfait et du passé composé, tu t'en sers pour raconter à rebours, pour rapporter une parole ou une pensée et pour dire un regret. Le piège qui reste, c'est l'excès : le plus-que-parfait semble élégant, et la main en met partout, même quand les faits se suivent. Avant l'examen, reprends ton récit et entoure chaque plus-que-parfait. Pour chacun, écris à côté son repère. Si tu n'en trouves pas, remets le verbe au passé composé. EN: Circle every pluperfect in your story and write its reference point next to it; no reference point, back to the passé composé.",
  stats: [
    { k: 'La forme', v: 'avais ou étais, puis le participe' },
    { k: 'Le repère', v: 'un moment du passé déjà posé' },
    { k: 'Le récit', v: 'remonter : plus-que-parfait ; avancer : passé composé' },
    { k: 'Le si', v: 'si j’avais su, si seulement' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 1 to 10, a round that
 *  recycles lessons 1, 3, 4, 10 and 19 in B1 (named in each question), and
 *  an exam-format round (TCF, DELF B2 and TEF items). `fold()` strips
 *  accents, commas, apostrophes and hyphens, so every typed answer turns on
 *  the auxiliary, the tense or an agreement LETTER, never on an accent. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const FLASH_INFO = "Flash d'information de dix-huit heures. Un incendie s'est déclaré cet après-midi dans un entrepôt de la zone industrielle de Liège. Lorsque les pompiers sont arrivés sur place, les employés avaient déjà évacué le bâtiment, grâce à l'alarme qui s'était déclenchée à quinze heures dix. Personne n'a été blessé.";

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-repere', label: 'Le repère', targets: ['aucun-recul'],
      questions: [
        mc('« Quand nous sommes arrivés, le film a commencé. » Qu’avez-vous vu ?', ['tout le film, depuis le début', 'seulement la fin'], 0, 'Le film démarre à votre arrivée : rien n’est raté. EN: it starts as you arrive.', 'a1-scene'),
        mc('« Quand nous sommes arrivés, le film avait commencé. » Qu’avez-vous raté ?', ['le début', 'la fin', 'rien'], 0, 'Le début était fait avant l’arrivée. EN: the beginning came before.', 'a1-scene'),
        tI('Mets le verbe au temps qui dit « déjà fait ».', 'Quand je suis rentré, ma sœur (préparer) le dîner.', fr(E(1611)), 'Le dîner était prêt avant ton retour. EN: ready before you got back.', 'a1-reperer', ['Quand je suis rentrée, ma sœur avait préparé le dîner.']),
        tI('Mets le verbe au plus-que-parfait.', 'Karim (acheter) les billets la veille.', fr(E(1602)), 'La veille : avant le repère. EN: the day before.', 'a1-lecture'),
        mc('Dans « Je ne les avais pas lus », quel est le repère ?', ['l’arrivée devant le cinéma', 'le moment où il écrit le texte', 'la veille'], 0, 'À l’arrivée, la lecture n’avait pas eu lieu. EN: the arrival.', 'a1-lecture'),
        eS('Quand je suis arrivé à la gare, le train est déjà parti.', 'Quand je suis arrivé à la gare, le train était déjà parti.', 'Le départ précède l’arrivée. EN: the departure came first.', 'a1-usages', ['Quand je suis arrivée à la gare, le train était déjà parti.']),
        lC('Écoute. Le dîner était-il prêt à ton retour ?', fr(E(1612)), ['non, il a été fait après', 'oui'], 0, 'Deux passés composés se suivent. EN: in sequence.', 'a1-reperer'),
        lC('Écoute. Qu’est-ce qui s’est passé en premier ?', fr(E(1600)), ['le début du film', 'votre arrivée'], 0, 'Avait commencé : avant l’arrivée. EN: the film started first.', 'a1-scene'),
      ],
    },
    {
      id: 'r2-forme', label: 'La forme', targets: ['auxiliaire-faux'],
      questions: [
        mc('Aller, avec je, au plus-que-parfait :', ['j’étais allé', 'j’avais allé', 'j’aurais allé'], 0, 'Aller garde être. EN: aller keeps être.', 'a2-erreurs'),
        mc('Finir, avec elle :', ['elle était finie', 'elle avait fini'], 1, 'Finir prend avoir. EN: finir takes avoir.', 'a2-construire'),
        tI('Mets au plus-que-parfait.', 'Nous (venir) en train.', fr(E(1627)), 'Venir : être, et l’accord avec nous. EN: être, agreeing with nous.', 'a2-table', ['Nous étions venues en train.']),
        tI('Mets au plus-que-parfait.', 'Ils (mettre) la table dans le jardin.', fr(E(1628)), 'Mettre : avoir, participe mis. EN: avoir, mis.', 'a2-table'),
        tI('Mets au plus-que-parfait.', 'Je (être) malade toute la semaine.', fr(E(1638)), 'Être se conjugue avec avoir. EN: être takes avoir.', 'a2-construire'),
        eS('Quand il est arrivé, j’aurais fini.', 'Quand il est arrivé, j’avais fini.', 'Aurais est un conditionnel : il faut avais. EN: avais, not aurais.', 'a2-erreurs'),
        eS('Elle était fini son rapport avant midi.', 'Elle avait fini son rapport avant midi.', 'Finir prend avoir. EN: avoir.', 'a2-erreurs'),
        lC('Écoute. Quel auxiliaire entends-tu ?', fr(E(1637)), ['être', 'avoir'], 0, 'Passer par une ville prend être. EN: être.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-accords', label: 'Les accords', targets: ['accord-oublie'],
      questions: [
        mc('« Mes parents étaient … la veille. »', ['arrivé', 'arrivés', 'arrivées'], 1, 'Être : accord avec parents, masculin pluriel. EN: plural subject.', 'a3-cartes'),
        mc('« La robe qu’elle avait … »', ['choisi', 'choisie'], 1, 'Que = la robe, placé avant avoir. EN: que placed before.', 'a3-construire'),
        mc('« Elles avaient … trop tard. »', ['réservé', 'réservées'], 0, 'Avoir ne s’accorde jamais avec le sujet. EN: never with the subject.', 'a3-piege'),
        tI('Accorde le participe.', 'Les lunettes que j’avais (chercher) étaient sur ma tête.', fr(E(1649)), 'Que = les lunettes : cherchées. EN: feminine plural object before.', 'a3-construire'),
        tI('Mets au plus-que-parfait et accorde.', 'Ma grand-mère (naître) à Oran.', fr(E(1650)), 'Être, sujet féminin : née. EN: née.', 'a3-exemples'),
        eS('Elle avait prise des photos.', fr(E(1646)), 'Les photos viennent après : pris. EN: nothing before avoir.', 'a3-piege'),
        eS('Elle était sorti la valise du coffre.', fr(E(1656)), 'Avec un complément, sortir prend avoir. EN: avoir with an object.', 'a3-cartes'),
        lC('Écoute. Pourquoi le participe s’accorde-t-il ?', fr(E(1648)), ['que reprend la maison, placé avant', 'le sujet est ils'], 0, 'Avoir : le complément placé avant. EN: the object placed before.', 'a3-cartes'),
      ],
    },
    {
      id: 'r4-pronominaux', label: 'Les pronominaux', targets: ['pronominal-avoir'],
      questions: [
        mc('Se lever, avec je :', ['je m’étais levé', 'je m’avais levé'], 0, 'Toujours être. EN: always être.', 'a4-cartes'),
        mc('« Elles s’étaient … le matin même. » (se téléphoner)', ['téléphoné', 'téléphonées'], 0, 'On téléphone à quelqu’un : pas d’accord. EN: no direct object.', 'a4-cartes'),
        mc('« Elle s’était … les cheveux. »', ['coupé', 'coupée'], 0, 'Les cheveux viennent après. EN: the object follows.', 'a4-erreurs'),
        tI('Mets au plus-que-parfait.', 'Ils (se disputer) la veille.', fr(E(1665)), 'Être, accord avec ils. EN: être, agreeing with ils.', 'a4-construire'),
        tI('Mets au plus-que-parfait.', 'Nous (se perdre) dans la vieille ville.', fr(E(1666)), 'Nous nous étions perdus. EN: double nous.', 'a4-construire', ['Nous nous étions perdues dans la vieille ville.']),
        eS('Je m’avais levé très tôt ce jour-là.', "Je m'étais levé très tôt ce jour-là.", 'Un pronominal ne prend jamais avoir. EN: never avoir.', 'a4-erreurs', ["Je m'étais levée très tôt ce jour-là."]),
        eS('Tu t’avais trompé de jour.', fr(E(1671)), 'Te, puis étais. EN: te plus étais.', 'a4-construire', ["Tu t'étais trompée de jour."]),
        lC('Écoute. Le participe s’accorde-t-il ?', fr(E(1675)), ['non, on écrit à quelqu’un', 'oui, avec ils'], 0, 'Se = l’un à l’autre : pas d’accord. EN: to each other.', 'a4-cartes'),
      ],
    },
    {
      id: 'r5-ligne', label: 'Une ligne, trois temps', targets: ['trois-temps'],
      questions: [
        mc('« Elle … quand il a sonné. » Il l’a croisée dans l’escalier.', ['sortait', 'était sortie', 'est sortie'], 0, 'En cours au moment du repère. EN: in progress.', 'a5-cartes'),
        mc('« Elle … quand il a sonné. » Personne n’a ouvert.', ['sortait', 'était sortie'], 1, 'Déjà partie avant le repère. EN: already gone.', 'a5-cartes'),
        tI('Mets le verbe au bon temps.', 'Quand elle est rentrée, il (appeler) trois fois.', fr(E(1691)), 'Les appels étaient faits avant le retour. EN: before her return.', 'a5-trier'),
        tI('Mets le verbe au bon temps.', 'Il (neiger) quand Julien est sorti de l’aéroport.', fr(E(1680)), 'Le décor, en cours : imparfait. EN: the background.', 'a5-trier'),
        mc('Sur la ligne du temps, le plus-que-parfait se place…', ['avant le repère', 'sur le repère', 'après le repère'], 0, 'Derrière le repère. EN: before it.', 'a5-hacks'),
        eS('Il a sonné chez la voisine, mais elle est sortie.', fr(E(1684)), 'Elle n’a pas ouvert : elle était partie avant. EN: she had gone before.', 'a5-piege'),
        lC('Écoute. Où en était-il quand elle est arrivée ?', fr(E(1692)), ['presque endormi', 'déjà parti'], 0, 'Dormait : en cours. EN: under way.', 'a5-ecoute'),
        lC('Écoute. Qu’est-ce qui vient en premier ?', fr(E(1693)), ['l’erreur d’adresse', 'la compréhension'], 0, 'L’erreur recule derrière la compréhension. EN: the mistake came first.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-recit', label: 'Raconter', targets: ['pqp-partout'],
      questions: [
        mc('« Elle a réservé la salle, puis elle a envoyé les invitations. » Faut-il changer un temps ?', ['non', 'oui : avait réservé'], 0, 'Dans l’ordre des faits, le passé composé suffit. EN: in order, no change.', 'a6-cartes'),
        mc('Quel marqueur annonce un retour en arrière ?', ['la veille', 'ensuite', 'puis'], 0, 'La veille remonte le temps. EN: la veille goes back.', 'a6-construire'),
        tI('Mets au bon temps.', 'Lorsque les invités sont arrivés, la pluie (cesser).', fr(E(1700)), 'La pluie s’était arrêtée avant. EN: stopped before.', 'a6-cartes'),
        tI('Mets au bon temps.', 'Le traiteur est arrivé tard : il (s’endormir) en route.', fr(E(1711)), 'Une cause d’avant recule. EN: an earlier cause.', 'a6-erreurs'),
        eS('Elle avait réservé la salle, puis elle avait envoyé les invitations.', fr(E(1704)), 'Puis avance : passé composé. EN: puis moves forward.', 'a6-erreurs'),
        mc('Au milieu du récit du mariage : « Trois mois plus tôt, elle … la salle. »', ['avait réservé', 'a réservé'], 0, 'Plus tôt fait remonter le récit. EN: plus tôt steps back.', 'a6-cartes'),
        lC('Écoute. Le récit avance-t-il ou remonte-t-il ?', fr(E(1703)), ['il remonte', 'il avance'], 0, 'Trois mois plus tôt : retour en arrière. EN: a flashback.', 'a6-cartes'),
        lC('Écoute. Qu’est-ce qui s’est passé en premier ?', fr(E(1708)), ['les enfants se sont endormis', 'la musique a commencé'], 0, 'S’étaient endormis : avant la musique. EN: before the music.', 'a6-construire'),
      ],
    },
    {
      id: 'r7-adverbes', label: 'Déjà, pas encore', targets: ['adverbe-mal-place'],
      questions: [
        mc('Où va déjà ?', ['il avait déjà lu', 'il avait lu déjà', 'il déjà avait lu'], 0, 'Entre les deux mots. EN: in the middle.', 'a7-table'),
        mc('« La réunion … commencé. »', ['n’avait pas encore', 'avait pas encore'], 0, 'Ne est obligatoire à l’écrit. EN: ne is required in writing.', 'a7-construire'),
        mc('« Elle … partir quand j’ai appelé. » Le départ était tout récent.', ['venait de', 'est venue de'], 0, 'Venir de à l’imparfait. EN: venir de in the imparfait.', 'a7-piege'),
        tI('Mets au plus-que-parfait avec jamais.', 'Nous (ne jamais voir) la mer.', fr(E(1724)), 'Ne avant avions, jamais après. EN: ne... jamais round avions.', 'a7-construire'),
        tI('Mets au plus-que-parfait avec pas encore.', 'Je (ne pas encore finir) mon rapport.', fr(E(1721)), 'Ne avant, pas encore après avais. EN: ne... pas encore.', 'a7-table'),
        eS('Il avait fermé à peine la porte que le téléphone a sonné.', fr(E(1725)), 'À peine avant le participe. EN: à peine in the middle.', 'a7-piege'),
        eS('Mon frère déjà était venu à Bruxelles deux fois.', fr(E(1728)), 'Déjà après l’auxiliaire. EN: déjà after était.', 'a7-piege'),
        lC('Écoute. Le rapport était-il fini ?', fr(E(1721)), ['non', 'oui'], 0, 'Pas encore fini. EN: not yet.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-rapporte', label: 'Il a dit qu’il avait', targets: ['concordance-oubliee'],
      questions: [
        mc('« J’ai perdu mon portefeuille », a dit Hugo. Tu rapportes :', ['Hugo a dit qu’il avait perdu son portefeuille.', 'Hugo a dit qu’il a perdu mon portefeuille.'], 0, 'Le passé composé recule, mon devient son. EN: step back, and the possessive changes.', 'a8-rappel'),
        mc('« Elle dit qu’elle … fini. »', ['a', 'avait'], 0, 'Dit au présent : rien ne recule. EN: present tense, no step back.', 'a8-construire'),
        mc('« Je croyais que tu avais reçu mon message. » Qu’en déduis-tu ?', ['le message n’est sans doute pas arrivé', 'le message est bien arrivé'], 0, 'Je croyais que annonce souvent une erreur. EN: often a mistaken belief.', 'a8-table'),
        tI('Rapporte au passé. Son message : « Je suis rentrée hier. »', 'Elle m’a dit qu’elle (rentrer) la veille.', fr(E(1751)), 'Je suis rentrée devient elle était rentrée. EN: steps back.', 'a8-table'),
        tI('Rapporte au passé. Son aveu : « J’ai caché la vérité. »', 'Il a avoué qu’il (cacher) la vérité.', fr(E(1752)), 'Avouer au passé : le passé composé recule. EN: steps back.', 'a8-table'),
        eS('Je savais qu’elle a déménagé.', fr(E(1743)), 'Une pensée passée crée un repère. EN: past thinking verbs too.', 'a8-erreurs'),
        eS('Nous avons appris que l’usine a fermé.', fr(E(1742)), 'Apprendre au passé : la fermeture recule. EN: steps back.', 'a8-table'),
        lC('Écoute. Le verbe de parole est-il au passé ?', fr(E(1747)), ['non, au présent', 'oui'], 0, 'Elle dit : présent, rien ne bouge. EN: present.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-si', label: 'Si j’avais su', targets: ['si-conditionnel'],
      questions: [
        mc('Laquelle est juste ?', ['Si j’avais su, je serais venu plus tôt.', 'Si j’aurais su, je serais venu plus tôt.'], 0, 'Jamais de conditionnel après si. EN: never a conditional after si.', 'a9-piege'),
        mc('« Si seulement nous étions partis plus tôt. » Sont-ils partis tôt ?', ['non', 'oui'], 0, 'Le regret dit le contraire des faits. EN: the opposite of what happened.', 'a9-construire'),
        mc('« Si je parlais italien, je lirais ce roman. » Cette phrase parle…', ['de maintenant', 'du passé'], 0, 'Si + imparfait : aujourd’hui. EN: present unreal.', 'a9-cartes'),
        tI('Complète la moitié si.', 'Si j’(savoir), je n’aurais pas signé.', fr(E(1769)), 'Si + plus-que-parfait. EN: si plus pluperfect.', 'a9-construire'),
        tI('Écris le regret.', 'Si seulement il (lire) le mode d’emploi.', fr(E(1770)), 'Si seulement + plus-que-parfait. EN: a regret.', 'a9-construire'),
        eS('Si elle ne m’aurait pas aidé, j’aurais abandonné.', fr(E(1772)), 'Après si, avait, jamais aurait. EN: avait after si.', 'a9-piege'),
        eS('Si seulement nous avions partis plus tôt.', fr(E(1762)), 'Partir garde être. EN: partir keeps être.', 'a9-piege', ['Si seulement nous étions parties plus tôt.']),
        lC('Écoute. A-t-elle été remboursée ?', fr(E(1765)), ['non', 'oui'], 0, 'Elle n’a pas gardé ses reçus. EN: no receipts.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-pistes', label: 'Les fausses pistes', targets: ['fausse-anteriorite'],
      questions: [
        mc('« Tout le monde avait faim. » Avait est…', ['un imparfait', 'un plus-que-parfait'], 0, 'Un seul mot, pas de participe. EN: no participle.', 'a10-cartes'),
        mc('She had been living in Liège for two years when she met Paul se dit…', ['Elle habitait à Liège depuis deux ans quand elle a rencontré Paul.', 'Elle avait habité à Liège depuis deux ans quand elle a rencontré Paul.'], 0, 'Depuis garde l’imparfait. EN: imparfait with depuis.', 'a10-cartes'),
        mc('I had lunch with my sister yesterday se dit…', ['Hier, j’ai déjeuné avec ma sœur.', 'Hier, j’avais déjeuné avec ma sœur.'], 0, 'Had est ici un verbe plein : un seul fait. EN: a plain past event.', 'a10-erreurs'),
        tI('Mets au bon temps : une expérience jusqu’à aujourd’hui.', 'Je (ne jamais manger) de poutine.', fr(E(1790)), 'Pas de repère passé : passé composé. EN: up to now.', 'a10-cartes'),
        tI('Mets au bon temps : le voyage est le repère.', 'Je (ne jamais manger) de poutine avant ce voyage.', fr(E(1789)), 'Avant ce voyage : plus-que-parfait. EN: before the trip.', 'a10-trier'),
        eS('J’avais déjà visité Québec, c’est une ville magnifique.', "J'ai déjà visité Québec, c'est une ville magnifique.", 'Aucun repère passé. EN: no past reference point.', 'a10-erreurs'),
        eS('Le mois dernier, j’étais tombé malade, et j’étais resté au lit.', 'Le mois dernier, je suis tombé malade, et je suis resté au lit.', 'Les faits se suivent : passé composé. EN: in order.', 'a10-erreurs', ['Le mois dernier, je suis tombée malade, et je suis restée au lit.']),
        lC('Écoute. Y a-t-il un plus-que-parfait dans cette phrase ?', fr('fr.b1.connecteurs-logiques.1362'), ['non, avait est un imparfait', 'oui'], 0, 'Avait du retard : un état. EN: a state.', 'a10-cartes'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Le B1 en renfort', targets: ['recyclage-b1'],
      questions: [
        mc(`${Cap(PC_IMP_REF)} : « Il faisait chaud et les fenêtres étaient ouvertes. » Ces verbes…`, ['posent le décor', 'font avancer l’histoire'], 0, `« ${B103_REFRAME} » EN: ${B103_REFRAME_EN}`, 'a5-cartes'),
        mc(`${Cap(PAIRES_REF)} : « J’ai cru que tu étais parti. » La pensée a duré…`, ['un moment, puis elle a été corrigée', 'des années'], 0, 'J’ai cru : une pensée d’un instant. EN: a passing thought.', 'a5-trier'),
        mc(`${Cap(SI_REF)} : « Si nous avions su, nous aurions réservé plus tôt. » Ont-ils réservé tôt ?`, ['non', 'oui'], 0, 'La paire du regret dit l’inverse des faits. EN: the opposite of the facts.', 'a9-exemples'),
        mc(`${Cap(DISCOURS_REF)} : « Il a dit qu’il était parti à six heures. » Son message était…`, ['« Je suis parti à six heures. »', '« Je pars à six heures. »'], 0, 'Était parti rapporte un passé composé. EN: it reports a passé composé.', 'a8-rappel'),
        tI(`${Cap(IMP_FORM_REF)} : l’imparfait d’avoir, avec nous.`, 'nous (avoir)', 'nous avions', `« ${B101_REFRAME} » EN: ${B101_REFRAME_EN}`, 'a2-rappel'),
        tI(`${Cap(DISCOURS_REF)} : rapporte au passé. Son message : « J’ai oublié la réunion. »`, 'Il a dit qu’il (oublier) la réunion.', fr('fr.b1.paroles-rapportees.1120'), `« ${B119_REFRAME} » EN: ${B119_REFRAME_EN}`, 'a8-rappel'),
        eS('Pendant que je lisais, il a regardé la télé.', 'Pendant que je lisais, il regardait la télé.', 'Leçon 3 du B1 : deux actions en cours ensemble, deux imparfaits. EN: two background actions.', 'a5-cartes'),
        lC(`Écoute. ${Cap(SI_REF)} : quelle paire entends-tu ?`, fr('fr.b1.projets-et-futur.1352'), ['la paire du regret', 'la paire réelle'], 0, `« ${B110_REFRAME} » EN: ${B110_REFRAME_EN}`, 'a9-cartes'),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme à l’examen', targets: ['recit-sans-repere'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « Quand les secours sont arrivés, les passagers … l’avion. »', ['avaient déjà quitté', 'ont déjà quitté', 'quittaient déjà', 'auraient déjà quitté'], 0, 'L’arrivée des secours est le repère ; le départ des passagers est avant. EN: before the rescuers arrived.', 'a5-cartes'),
        mc('Format TCF : « Il m’a demandé si j’… déjà travaillé en équipe. »', ['avais', 'aurais', 'ai', 'avait'], 0, 'Question rapportée au passé : j’avais. EN: steps back, first person.', 'a8-table'),
        mc('Format DELF B2, compréhension écrite. « Le musée a rouvert lundi. Les travaux, commencés en 2022, avaient pris un an de retard. » Que dit le texte ?', ['le retard précède la réouverture', 'le retard suit la réouverture', 'le musée n’a pas rouvert'], 0, 'Avaient pris : avant la réouverture. EN: the delay came first.', 'a6-cartes'),
        mc('Format DELF B2. « Lorsque la ministre a pris la parole, les manifestants avaient quitté la place. » La place était-elle pleine pendant le discours ?', ['non', 'oui', 'on ne peut pas savoir'], 0, 'Ils étaient partis avant le discours. EN: they had left before.', 'a1-reperer'),
        tI('Format TCF, phrase à compléter.', 'Lorsque nous sommes arrivés, la réunion (commencer) depuis une heure.', 'Lorsque nous sommes arrivés, la réunion avait commencé depuis une heure.', 'Le début est derrière l’arrivée. EN: the meeting started first.', 'a6-cartes'),
        tI('Format DELF B2, production. Mets au plus-que-parfait.', 'La veille, nous (se préparer) avec soin.', 'La veille, nous nous étions préparés avec soin.', 'Pronominal : être, accord avec nous. EN: être, agreeing with nous.', 'a11-plan', ['La veille, nous nous étions préparées avec soin.']),
        eS('Quand je suis arrivée au guichet, on a vendu la dernière place.', fr(E(1793)), 'La vente précède l’arrivée. EN: the sale came first.', 'a11-usages'),
        lC('Format TEF, compréhension orale. Écoute ce flash d’information. Qu’est-ce qui s’était passé avant l’arrivée des pompiers ?', FLASH_INFO, ['les employés avaient évacué le bâtiment', 'les pompiers avaient éteint le feu', 'un employé avait été blessé'], 0, 'Avaient déjà évacué : avant l’arrivée des pompiers. EN: evacuated before.', 'a11-lecture'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.22 does. */
function spreadSlots(quiz: Sec<'quiz'>): void {
  const used = [0, 0, 0, 0];
  for (const r of quiz.rounds ?? []) {
    for (const q of r.questions as (QQ & { opts?: string[]; correct?: number })[]) {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
      const n = q.opts.length;
      let target = 0;
      for (let k = 1; k < n; k++) if (used[k] < used[target]) target = k;
      const shift = (target - q.correct + n) % n;
      q.opts = q.opts.map((_, i) => q.opts![(i - shift + n) % n]);
      q.correct = target;
      used[target]++;
    }
  }
}
spreadSlots(A11_QUIZ);

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'la forme', back: 'avais ou étais, puis le participe', say: fr(E(1632)) },
    { front: 'aller, venir, partir', back: 'j’étais allé, j’étais venu, j’étais parti', say: fr(E(1626)) },
    { front: 'l’accord avec avoir', back: 'avec que, le, la, les placés avant', say: fr(E(1644)) },
    { front: 'le pronominal', back: 'toujours être : je m’étais levé', say: fr(E(1664)) },
    { front: 'déjà fait avant le repère', back: 'le plus-que-parfait', say: fr(E(1688)) },
    { front: 'dans l’ordre des faits', back: 'le passé composé suffit', say: fr(E(1704)) },
    { front: 'la place de déjà', back: 'entre l’auxiliaire et le participe', say: fr(E(1731)) },
    { front: 'après il a dit', back: 'le passé composé recule', say: fr(E(1746)) },
    { front: 'le regret', back: 'si seulement + plus-que-parfait', say: fr(E(1761)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Un repère, et ce qui était déjà fait',
  body: `${REFRAME} Tu as repris ce que le B1 t'avait donné, l'imparfait de ${IMP_FORM_REF}, le décor et l'action de ${PASSE_B1_RANGE_REF}, les paroles rapportées de ${DISCOURS_REF}, et tu en as fait un temps du récit : construit, accordé, placé sur une ligne, rapporté, regretté. La suite, ce sont ${B2_NEXT_RANGE_REF} : la deuxième moitié de « si j'avais su », le conditionnel passé. EN: Next come lessons 2 and 3 in B2: the second half of « si j'avais su », the conditionnel passé.`,
  points: [
    'Avais ou étais, puis le participe, avec les accords du passé composé.',
    'Un repère dans le passé : ce qui était déjà fait recule.',
    'Dans l’ordre des faits, le passé composé suffit.',
    'Après si, le plus-que-parfait, jamais le conditionnel.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'retour', 'regret'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Raconter ce qui s’était passé',
    opener: {
      line: "À toi de raconter un jour où rien ne s'était passé comme prévu : ici tu écris ton récit et tu passes l'examen. EN: Your turn to tell of a day when nothing had gone to plan: here you write your story and sit the exam.",
      imageRef: 'lessons/plus-que-parfait/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton récit et passé l'examen : quatre-vingt-seize questions, douze rounds. EN: You wrote your story and sat the exam: ninety-six questions, twelve rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r4-pronominaux', 'a11-quiz/r8-rapporte', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-recul', title: 'Avant ou après le repère', format: 'sort' as const, coach: "Deux piles : le fait était déjà fait au moment du repère, ou il arrive ensuite. EN: sort by before or after the reference point.", buckets: ['déjà fait avant', 'arrivé ensuite'], items: [E(1600), E(1611), E(1613), E(1601), E(1612), E(1604)], audio: AUDIO },
  { id: 'd-auxiliaire', title: 'Avoir ou être', format: 'mcq' as const, coach: "Pense au passé composé du même verbe, puis mets l'auxiliaire à l'imparfait. EN: the passé composé decides.", q: 'Aller, avec je :', opts: ['j’étais allé', 'j’avais allé'], correct: 0, why: 'Aller garde être. EN: aller keeps être.', items: [E(1615), E(1621), E(1626), E(1627), E(1632), E(1638)], audio: AUDIO },
  { id: 'd-accord', title: 'Le e et le s', format: 'mcq' as const, coach: "Être : regarde le sujet. Avoir : regarde s'il y a un complément avant. EN: subject for être, earlier object for avoir.", q: 'La robe qu’elle avait …', opts: ['choisie', 'choisi'], correct: 0, why: 'Que = la robe, placé avant. EN: que before.', items: [E(1640), E(1641), E(1644), E(1648), E(1649), E(1651)], audio: AUDIO },
  { id: 'd-pronominal', title: 'Toujours être', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute et dis pourquoi le participe s'accorde ou non. EN: say why each participle agrees or not.", items: [E(1660), E(1664), E(1665), E(1667), E(1668), E(1673)], audio: AUDIO },
  { id: 'd-ligne', title: 'En cours, ensuite, avant', format: 'sort' as const, coach: "Trois piles, autour d'un seul repère. EN: three piles round one reference point.", buckets: ['en cours', 'ensuite', 'déjà fait'], items: [E(1686), E(1680), E(1687), E(1689), E(1688), E(1681)], audio: AUDIO },
  { id: 'd-ordre', title: 'Avancer ou remonter', format: 'mcq' as const, coach: "Dans l'ordre des faits, le passé composé ; pour remonter, le plus-que-parfait. EN: forward or back.", q: 'Elle a réservé la salle, puis elle … les invitations.', opts: ['a envoyé', 'avait envoyé'], correct: 0, why: 'Puis avance. EN: puis moves forward.', items: [E(1700), E(1703), E(1704), E(1705), E(1708), E(1711)], audio: AUDIO },
  { id: 'd-adverbes', title: 'Au milieu', format: 'mcq' as const, coach: "Déjà, jamais, pas encore : entre l'auxiliaire et le participe. EN: in the middle.", q: 'Il … le livre quand le film est sorti.', opts: ['avait déjà lu', 'avait lu déjà'], correct: 0, why: 'Déjà avant le participe. EN: déjà in the middle.', items: [E(1720), E(1721), E(1722), E(1724), E(1725), E(1731)], audio: AUDIO },
  { id: 'd-rapporte', title: 'Le message recule', format: 'flashcard' as const, coach: "Lis chaque phrase et retrouve la parole ou la pensée d'origine. EN: find the original words behind each one.", items: [E(1740), E(1743), E(1744), E(1746), E(1750), E(1752)], audio: AUDIO },
  { id: 'd-si', title: 'Après si', format: 'mcq' as const, coach: "Après si, jamais de -rais : le plus-que-parfait. EN: never a conditional after si.", q: 'Si j’… su, je n’aurais pas signé.', opts: ['avais', 'aurais'], correct: 0, why: 'Si j’avais su. EN: avais.', items: [E(1760), E(1761), E(1762), E(1763), E(1769), E(1772)], audio: AUDIO },
  { id: 'd-piste', title: 'Vrai ou faux', format: 'sort' as const, coach: "Deux piles : un vrai plus-que-parfait avec son repère, ou une fausse piste. EN: a real pluperfect, or a false lead.", buckets: ['un vrai plus-que-parfait', 'une fausse piste'], items: [E(1783), E(1787), E(1785), E(1780), E(1786), E(1784)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 en renfort', format: 'flashcard' as const, coach: "Six phrases du B1 : dis pour chacune ce que fait chaque temps. EN: say what each tense does.", items: ['fr.b1.recits-au-passe.1011', 'fr.b1.recits-au-passe.1252', 'fr.b1.projets-et-futur.1209', 'fr.b1.paroles-rapportees.1109', 'fr.b1.cafe.090', 'fr.b1.pronoms-essentiels.1011'], audio: AUDIO },
  { id: 'd-examen', title: 'Le récit, phrase par phrase', format: 'flashcard' as const, coach: "Lis le récit modèle : le repère, le retour en arrière, puis l'ordre des faits. EN: read the model aloud.", items: [E(1791), E(1792), E(1793), E(1795), E(1796), E(1798)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'aucun-recul', description: 'Tells the whole episode in the passé composé, so an event that was already over at the reference point reads as happening after it.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-recul', retest: 'd-recul' },
  { id: 'auxiliaire-faux', description: 'Picks the auxiliary by habit (j’avais allé, elle était fini) or builds the tense on the conditional (j’aurais fini).', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-auxiliaire', retest: 'd-auxiliaire' },
  { id: 'accord-oublie', description: 'Leaves the participle bare after être or after an object placed before avoir, or adds an agreement with avoir’s subject.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'pronominal-avoir', description: 'Builds a pronominal verb with avoir, or agrees its participle where se is indirect or the object follows.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-pronominal', retest: 'd-pronominal' },
  { id: 'trois-temps', description: 'Confuses the imparfait and the plus-que-parfait round a reference point, so an action in progress reads as finished or the reverse.', detectOn: ['a5-trier', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-ligne', retest: 'd-ligne' },
  { id: 'pqp-partout', description: 'Uses the plus-que-parfait for events told in order, or forgets it in a flashback signalled by plus tôt or la veille.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-ordre', retest: 'd-ordre' },
  { id: 'adverbe-mal-place', description: 'Places déjà, jamais, pas encore or à peine outside the verb group, or drops ne, following English word order.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-adverbes', retest: 'd-adverbes' },
  { id: 'concordance-oubliee', description: 'Keeps the passé composé after a past verb of saying or thinking, or shifts the tense after a present reporting verb.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-rapporte', retest: 'd-rapporte' },
  { id: 'si-conditionnel', description: 'Writes a conditional after si (si j’aurais su), or si plus the imparfait for a past that did not happen.', detectOn: ['a9-construire', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-si', retest: 'd-si' },
  { id: 'fausse-anteriorite', description: 'Writes a plus-que-parfait with no past reference point: an experience up to now, a duration with depuis, or an English had.', detectOn: ['a10-trier', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-piste', retest: 'd-piste' },
  { id: 'recyclage-b1', description: 'Loses a B1 contrast the plus-que-parfait sits on: décor against action, the meaning pairs, the si pairs or the reported-speech shift.', detectOn: ['a5-cartes', 'a8-rappel', 'a9-cartes'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'recit-sans-repere', description: 'In an exam-format narrative, never sets a clear reference point, so the reader cannot tell which events came first.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-examen', retest: 'd-examen' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. */
function spreadMissions(sections: LessonSection[], drills: LessonDrill[]): void {
  const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];
  const used: Record<number, number[]> = {};
  let last = -1, run = 0;
  const walk = (n: any): void => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(walk); return; }
    if (typeof n.correct === 'number') {
      const key = OPT_KEYS.find((k) => Array.isArray(n[k]));
      if (key) {
        const opts: unknown[] = n[key];
        const k = opts.length;
        const u = (used[k] ??= new Array(k).fill(0));
        const order = [...Array(k).keys()].sort((a, b) => u[a] - u[b] || a - b);
        const target = order.find((t) => !(t === last && run >= 2)) ?? order[0];
        const shift = (target - n.correct + k) % k;
        n[key] = opts.map((_, i) => opts[(i - shift + k) % k]);
        n.correct = target;
        u[target]++;
        run = target === last ? run + 1 : 1;
        last = target;
      }
    }
    Object.values(n).forEach(walk);
  };
  for (const s of sections) if (s.type !== 'quiz') walk(s);
  for (const d of drills) walk(d);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS (layer deep: teach and table only). Every sheet is
 *  reached from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-forme', 'La forme', ['la recette', 'les six personnes', 'avoir ou être', 'les erreurs de forme'], [
    teach('sheet-forme-teach', 'Deux mots, un seul qui change',
      `${REFRAME} Le plus-que-parfait se forme comme le passé composé, avec l'auxiliaire à l'imparfait : j'ai fini devient j'avais fini, je suis sorti devient j'étais sorti. L'imparfait d'avoir et d'être vient de ${IMP_FORM_REF} : « ${B101_REFRAME} » Le participe ne change pas. EN: ${REFRAME_EN} Build it like the passé composé, with the auxiliary in the imparfait.`),
    table('sheet-forme-table', 'Les six personnes', ['Personne', 'Avec avoir', 'Avec être', 'Pronominal'], [
      ['je', "j'avais fini", "j'étais sorti(e)", "je m'étais levé(e)"],
      ['tu', 'tu avais fini', 'tu étais sorti(e)', "tu t'étais levé(e)"],
      ['il, elle, on', 'il avait fini', 'elle était sortie', "elle s'était levée"],
      ['nous', 'nous avions fini', 'nous étions sorti(e)s', 'nous nous étions levé(e)s'],
      ['vous', 'vous aviez fini', 'vous étiez sorti(e)(s)', 'vous vous étiez levé(e)(s)'],
      ['ils, elles', 'ils avaient fini', 'elles étaient sorties', "ils s'étaient levés"],
    ]),
    table('sheet-forme-etre', 'Les verbes qui prennent être', ['Verbes', 'Exemple'], [
      ['aller, venir, revenir, devenir', "Elle était allée chercher les enfants."],
      ['arriver, partir, rester, passer', 'Ils étaient passés par Genève.'],
      ['entrer, sortir, monter, descendre (sans complément)', "Il était déjà descendu quand l'ascenseur est arrivé."],
      ['naître, mourir, tomber, rentrer, retourner', 'Ma grand-mère était née à Oran.'],
      ['tous les verbes pronominaux', "Elle s'était levée avant l'aube."],
      ['avoir et être eux-mêmes prennent avoir', "J'avais été malade toute la semaine."],
    ]),
    table('sheet-forme-erreurs', 'Les erreurs de forme', ['À éviter', 'Correct', 'Pourquoi'], [
      ["j'avais allé", "j'étais allé", 'aller prend être'],
      ['elle était fini', 'elle avait fini', 'finir prend avoir'],
      ["j'aurais fini", "j'avais fini", "aurais est un conditionnel"],
      ["je m'avais levé", "je m'étais levé", 'un pronominal prend être'],
      ["j'étais été", "j'avais été", 'être prend avoir'],
      ['nous avons eu fini', 'nous avions fini', 'un seul auxiliaire, à l’imparfait'],
    ]),
  ]),
  sheet('sheet-accords', 'Les accords', ['avec être', 'avec avoir', 'les pronominaux', 'sortir, monter'], [
    teach('sheet-accords-teach', 'Les règles du passé composé',
      "Avec être, le participe s'accorde avec le sujet. Avec avoir, il ne s'accorde qu'avec un complément direct placé avant lui (que, le, la, les) ; le sujet d'avoir ne compte jamais. Les pronominaux prennent être et s'accordent, sauf quand se veut dire à quelqu'un ou quand le complément direct vient après. EN: the passé composé agreement rules apply unchanged."),
    table('sheet-accords-table', 'Qui commande l’accord', ['Cas', 'Accord avec', 'Exemple'], [
      ['être', 'le sujet', 'Elle était partie sans rien dire.'],
      ['avoir, rien avant', 'rien', 'Elle avait pris des photos.'],
      ['avoir, que avant', 'le nom que reprend que', "La robe qu'elle avait choisie était rouge."],
      ['avoir, le, la, les avant', 'le nom que reprend le pronom', 'Ces photos, je les avais prises à Dakar.'],
      ['sortir, monter, descendre + complément', "la règle d'avoir", 'Elle avait sorti la valise du coffre.'],
      ['sortir, monter, descendre seuls', "la règle d'être", 'Elle était sortie par la porte du jardin.'],
    ]),
    table('sheet-accords-pronominaux', 'Les pronominaux', ['Cas', 'Accord ?', 'Exemple'], [
      ['se = complément direct', 'oui, avec le sujet', "Ils s'étaient disputés la veille."],
      ["se = à quelqu'un", 'non', "Elles s'étaient téléphoné le matin même."],
      ['complément direct après', 'non', "Elle s'était lavé les mains."],
      ['se rendre compte', 'jamais', "Je ne m'étais pas rendu compte de l'heure."],
    ]),
  ]),
  sheet('sheet-ligne', 'La ligne du temps', ['trois temps', 'le repère', 'les adverbes', 'venait de'], [
    teach('sheet-ligne-teach', 'Un repère, trois places',
      `Pose d'abord le repère : un moment du passé que ton texte a déjà fixé. Ce qui était en cours à ce moment-là va à l'imparfait, ce qui arrive ensuite au passé composé, ce qui était déjà fait avant au plus-que-parfait. ${Cap(PC_IMP_REF)} disait : « ${B103_REFRAME} » Le plus-que-parfait ajoute la place de derrière. EN: ${B103_REFRAME_EN} The pluperfect adds the place behind.`),
    table('sheet-ligne-table', 'Trois temps, un repère', ['Place', 'Temps', 'Exemple'], [
      ['en cours au repère', 'imparfait', 'Elle sortait quand il a sonné.'],
      ['après le repère', 'passé composé', 'Elle est sortie quand il a sonné.'],
      ['avant le repère', 'plus-que-parfait', 'Elle était sortie quand il a sonné.'],
      ['le décor', 'imparfait', "Il neigeait quand Julien est sorti de l'aéroport."],
      ['une cause d’avant', 'plus-que-parfait', "Plus tard, il a compris qu'il s'était trompé d'adresse."],
      ['une suite de faits', 'passé composé', 'Il a attendu une heure dans le froid.'],
    ]),
    table('sheet-ligne-adverbes', 'Les petits mots', ['Mot', 'Place', 'Exemple'], [
      ['déjà', 'entre les deux mots', 'Le train était déjà parti.'],
      ['ne… pas encore', 'ne devant, pas encore après l’auxiliaire', "Je n'avais pas encore fini mon rapport."],
      ['ne… jamais', 'même place', "Nous n'avions jamais vu la mer."],
      ['à peine… que', 'à peine au milieu', 'Il avait à peine fermé la porte que le téléphone a sonné.'],
      ['bien, souvent, tout', 'au milieu', 'On avait tout prévu, sauf la pluie.'],
      ['venait de', "venir de à l'imparfait", "Elle venait de partir quand j'ai appelé."],
    ]),
  ]),
  sheet('sheet-recit', 'Rapporter et regretter', ['le recul', 'les verbes', 'si et si seulement', 'la suite au B2'], [
    teach('sheet-recit-teach', 'Une parole, une pensée, un si',
      `Après un verbe de parole ou de pensée au passé (dire, expliquer, raconter, apprendre, savoir, croire), le passé composé du message recule au plus-que-parfait. ${Cap(DISCOURS_REF)} l'a posé : « ${B119_REFRAME} » Après si, le plus-que-parfait parle d'un passé qui n'a pas eu lieu, et si seulement en fait un regret. Le résultat au conditionnel passé est le sujet de ${B2_NEXT_RANGE_REF}. EN: ${B119_REFRAME_EN}`),
    table('sheet-recit-recul', 'Le recul', ['Message', 'Après il dit', 'Après il a dit'], [
      ["« J'ai fini. »", "Elle dit qu'elle a fini.", "Elle a dit qu'elle avait fini."],
      ['« Je suis rentrée hier. »', "Elle dit qu'elle est rentrée hier.", "Elle m'a dit qu'elle était rentrée la veille."],
      ["« Je me suis perdu. »", "Il raconte qu'il s'est perdu.", "Il m'a raconté qu'il s'était perdu en forêt."],
      ["« Avez-vous déjà vécu à l'étranger ? »", "On me demande si j'ai déjà vécu à l'étranger.", "On m'a demandé si j'avais déjà vécu à l'étranger."],
      ['une pensée', 'Je sais qu’elle a déménagé.', "Je savais qu'elle avait déménagé."],
      ['une relative', 'Je retrouve le livre que tu m’as prêté.', "J'ai retrouvé le livre que tu m'avais prêté."],
    ]),
    table('sheet-recit-si', 'Le si', ['Après si', 'Ce que ça dit', 'Exemple'], [
      ['présent', 'possible', 'Si j’ai le temps, je passerai te voir.'],
      ['imparfait', "ce n'est pas le cas maintenant", 'Si je parlais italien, je lirais ce roman.'],
      ['plus-que-parfait', "ça n'a pas eu lieu", "Si j'avais appris l'italien, j'aurais lu ce roman."],
      ['si seulement + plus-que-parfait', 'un regret', "Si seulement j'avais écouté ma mère."],
      ['conditionnel', 'interdit', "Si j'aurais su : jamais."],
    ]),
  ]),
  sheet('sheet-ecrire', 'Écrire un récit', ['le plan', 'les fausses pistes', 'la liste de contrôle'], [
    teach('sheet-ecrire-teach', 'Un repère, un retour, puis l’ordre',
      "Un bon récit pose un décor, fixe un moment décisif, remonte le temps pour dire ce qui était déjà fait, puis reprend l'ordre des faits jusqu'à la fin. Le plus-que-parfait n'apparaît que dans le retour en arrière, dans les paroles rapportées et après si. Partout ailleurs, il est de trop. EN: the pluperfect belongs to the flashback, reported speech and si, nowhere else."),
    table('sheet-ecrire-plan', 'Le plan', ['Partie', 'Temps', 'Exemple'], [
      ['le cadre', 'imparfait', 'Ce matin-là, il pleuvait et la gare était bondée.'],
      ['le repère', 'passé composé, quand ou lorsque', 'Quand je suis arrivé sur le quai…'],
      ['le retour en arrière', 'plus-que-parfait', "La veille, j'avais tout préparé."],
      ['la suite', 'passé composé', "J'ai pris le train suivant."],
      ['une parole', 'plus-que-parfait après a dit', "Elle m'a dit qu'elle avait apprécié mon calme."],
      ['la fin', 'si ou si seulement', "Si seulement j'avais relu mon billet."],
    ]),
    table('sheet-ecrire-pistes', 'Les fausses pistes', ['Ça ressemble à', 'Mais c’est', 'Exemple'], [
      ['avait tout seul', 'un imparfait', 'Tout le monde avait faim.'],
      ['était + adjectif', 'un état', 'La porte était fermée à clé.'],
      ['had been living for', 'imparfait + depuis', 'Elle habitait à Liège depuis deux ans.'],
      ['had lunch, had a party', 'un passé composé', "Hier, j'ai déjeuné avec ma sœur."],
      ['already, ever, jusqu’à aujourd’hui', 'un passé composé', "J'ai déjà vu ce film."],
      ['un récit ancien', 'un passé composé, dans l’ordre', "Le mois dernier, je suis tombé malade."],
    ]),
    table('sheet-ecrire-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque plus-que-parfait a un repère', 'Entoure-le et écris son repère à côté'],
      ["L'auxiliaire est le bon", 'Celui du passé composé, à l’imparfait'],
      ['Les accords tiennent', 'Être : le sujet ; avoir : le complément avant'],
      ['Les petits mots sont au milieu', 'Déjà, jamais, pas encore'],
      ['Les paroles reculent', 'Après a dit, avait fait'],
      ['Aucun -rais après si', 'Si j’avais, jamais si j’aurais'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

spreadMissions(SECTIONS, DRILL_LIST);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !OWN.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-01-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const REC_DESC: Record<string, string> = {
  'rec-b2-01-cinema': "The cinema story (act 1), one male voice from Lyon, one take, natural speed. The auxiliaries avais, avait, avions must be clear but never stressed: the learner is meant to notice them, not be told. Karim's joke is read with a smile.",
  'rec-b2-01-forme': 'The four form cards (act 2). One coach voice. Card two reads the five imparfait forms of avoir with a small pause between each; avait and avaient must sound identical.',
  'rec-b2-01-forme-ecoute': `${ONE_TAKE} Ten lines. Line two (était allée) and line ten (avais été) carry the auxiliary contrast the questions ask about: read them exactly like the others.`,
  'rec-b2-01-grenier': 'Mariam and her aunt in the attic (act 3), two female voices, one take, quiet and unhurried. The coach lines name spellings the ear cannot hear; do not over-articulate the endings.',
  'rec-b2-01-accords': 'The four agreement cards (act 3). One voice. Card four holds two sentences with sortir: read them with the same rhythm, one with était, one with avait.',
  'rec-b2-01-piege-accords': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken. The participle endings are silent in most lines; do not add a sound to help.",
  'rec-b2-01-texte-a3': 'The attic paragraph (act 3), one voice, read as written WITH the bracketed infinitives spoken as « écrire », « naître »: this is the exercise text, not the answer.',
  'rec-b2-01-oral': 'The exam-morning dialogue (act 4), three voices (Léa, her friend, Inès as coach), one take, lively and fast in Léa’s lines, calm in the corrections.',
  'rec-b2-01-pronominaux': 'The four pronominal cards (act 4). One voice. Cards three and four are the exceptions: read téléphoné and lavé exactly like levée; the difference is written only.',
  'rec-b2-01-pronominaux-ecoute': `${ONE_TAKE} Ten pronominal sentences; the questions ask about content (when, where), so no line may be slowed down.`,
  'rec-b2-01-texte-a4': 'The exam-morning paragraph (act 4), one voice, bracketed infinitives spoken as written (« se lever »), as an exercise.',
  'rec-b2-01-julien': "Julien's first day in Québec (act 5), one voice with a light Québec accent for the narration is welcome but not required; one take, natural speed. « Elle était sortie » gets no extra weight.",
  'rec-b2-01-ligne': 'The three-tense cards (act 5). One voice. Cards one to three differ by one word and MUST be read with identical rhythm and pitch; the fourth quotes lesson 3 in B1.',
  'rec-b2-01-ligne-ecoute': `${ONE_TAKE} Nine lines. Lines one to three are the sortait / était sortie / est sortie triple: identical rhythm, so the tense is the only cue.`,
  'rec-b2-01-piege-ligne': "The audio step plays each card's CORRECT sentence. Six lines, one voice, level. The wrong versions are never spoken.",
  'rec-b2-01-texte-a5': "Amandine's office paragraph (act 5), one voice, infinitives spoken as written in brackets.",
  'rec-b2-01-mariage': "Awa tells her uncle about Fatou's wedding (act 6), two voices (Awa and a coach), one take, warm Dakar French. The flashback lines slow down very slightly.",
  'rec-b2-01-recit': 'The four narrative-move cards (act 6). One voice. Card four (dans l’ordre) is read briskly, to contrast with the flashback cards.',
  'rec-b2-01-texte-a6': "Samuel's week in order (act 6), one voice, read strictly chronologically and flatly: the learner will rewrite it.",
  'rec-b2-01-adverbes-ecoute': `${ONE_TAKE} Ten lines. Déjà, pas encore, jamais, à peine are unstressed, as in ordinary speech.`,
  'rec-b2-01-piege-adverbes': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The misplaced versions in promptSound are never spoken.",
  'rec-b2-01-texte-a7': "Awa's first winter (act 7), one voice, bracketed infinitives spoken as written.",
  'rec-b2-01-pause-cafe': 'The coffee-break exchange (act 8), two voices (Olivier and a coach), Belgian setting, one take, conversational pace.',
  'rec-b2-01-rapporte': 'The four reported-speech cards (act 8). One voice. Card one quotes lesson 19 in B1.',
  'rec-b2-01-rapporte-ecoute': `${ONE_TAKE} Nine lines. Line four is in the present (elle dit) and must not sound different in any other way.`,
  'rec-b2-01-texte-a8': "Hugo's phone call (act 8), two voices: the narrator, and Hugo for the quoted words only.",
  'rec-b2-01-demenagement': "Nadia's moving day (act 9), two female voices, one take, tired and wry rather than sad. The coach's last line names the next lessons plainly.",
  'rec-b2-01-si': 'The four si cards (act 9). One voice. Cards one and two differ by one notch; read them at the same speed. No sigh on the regret card.',
  'rec-b2-01-si-ecoute': `${ONE_TAKE} Nine lines; the learner answers what really happened, so no line may be dramatised.`,
  'rec-b2-01-piege-si': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The « si j'aurais » versions are NEVER spoken.",
  'rec-b2-01-texte-a9': "Nadia's day, told flatly (act 9), one voice.",
  'rec-b2-01-tom': "Tom's draft and his tutor's comment (act 10), two voices: a young man for the draft, a calm Brussels teacher for the comment. The draft's wrong tenses are read naturally, with no irony.",
  'rec-b2-01-pistes': 'The four false-lead cards (act 10). One voice. Card one (avait du retard) is read exactly like a pluperfect would be: the lesson says the ear cannot tell.',
  'rec-b2-01-texte-a10': "Clara's message (act 10), one voice, read as written, wrong tenses included, without comment.",
  'rec-b2-01-modele': 'The Geneva magazine story (act 11), one voice, one take, read as a reader would read a column aloud. The two si sentences at the end slow down slightly.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 1',
  intro: 'The first B2 lesson. In B1 you met the plus-que-parfait as the reported form of a passé composé (lesson 19) and read it after si (lesson 10). Here you build it completely: both auxiliaries, every agreement, pronominal verbs. Then you use it the way French narrative does: round one reference point in the past, beside the imparfait and the passé composé, to step back in a story, with déjà, pas encore and jamais, after verbs of saying and thinking, and after si for a past that did not happen. You also learn when NOT to use it, which is where most learners go wrong. The task: a 180 to 250 word story about a day when something had already happened before the decisive moment, graded on the B2 writing criteria.',
  skill: 'PE',
  grammarAssumed: [IMP_FORM_UNIT, PC_IMP_UNIT, PAIRES_UNIT, SI_UNIT, DISCOURS_UNIT],
  grammarIntroduced: [
    'The plus-que-parfait as a full tense: the imparfait of avoir or être plus the past participle, for every person, with the auxiliary chosen as in the passé composé',
    'Participle agreement in the plus-que-parfait: with être on the subject; with avoir on a direct object placed before (que, le, la, les); sortir, monter, descendre with either auxiliary',
    'Pronominal verbs in the plus-que-parfait: always être, agreement, and the two exceptions (se indirect, direct object after the participle)',
    'The reference point: imparfait, passé composé and plus-que-parfait placed round one past moment',
    'Narrative use: quand and lorsque with a plus-que-parfait, the flashback (la veille, plus tôt), the earlier cause, and no plus-que-parfait when events are told in order',
    'Adverb placement in compound tenses (déjà, ne… pas encore, ne… jamais, à peine… que, bien, souvent, tout) and venait de against était juste parti',
    'The plus-que-parfait after past verbs of saying and thinking (expliquer, raconter, apprendre, savoir, croire), in relative clauses and in reported questions, beyond lesson 19 in B1',
    'si plus the plus-que-parfait and si seulement for a past that did not happen, the si half built and the conditionnel passé result read only (bridge to lessons 2 and 3 in B2)',
    'False leads: avait as an imparfait, être plus an adjective as a state, imparfait with depuis, and the English had that French renders with a passé composé',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu as rencontré le plus-que-parfait au B1, dans les paroles rapportées. Ici, tu le construis en entier et tu en fais un temps du récit : autour d'un repère dans le passé, à côté de l'imparfait et du passé composé, avec déjà et pas encore, après il a dit et après si. Tu apprends aussi quand ne pas l'employer. À la fin, tu racontes en 180 à 250 mots un jour où quelque chose avait déjà eu lieu au moment décisif.",
    minutes: 150,
    difficulty: 4,
    glyph: 'avait',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PQP_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every B1 and B2 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, dicteeFor };
