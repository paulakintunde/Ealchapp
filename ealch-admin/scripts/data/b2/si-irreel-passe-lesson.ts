// b2.03.l1 « Si j’avais su »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (the grammar shape of lesson 10 in B1,
// « Les phrases avec si ») under B2-BUILD-LOG.md « How B2 teaches complex
// structures »: every act runs form, meaning in contrast, choice under
// load, and from act 3 on it ENDS on a 60 to 120 word text.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is real (in SECTION_TYPES and the LessonSection union), so `sections` is
// `LessonSection[]` and the validators run on `LESSON` itself.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act covers)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading), name (cardDeck,
//   tapTable, examples), build (groupDrill, gated), choose (a drill where
//   the MEANING picks the form), trap (trapDrill stepped or commonErrors),
//   « Dans un texte » (a 60 to 120 word reading with rewrite, complete and
//   find questions, acts 3 to 10), check (gated control pages).
//
//    1  Si j’avais su              6   the missed train: « si je vérifiais »
//                                      against « si j’avais vérifié »; the
//                                      pair says the opposite of the facts
//    2  Trois paires, un système   7   lesson 10 in B1 recapped (rows reused),
//                                      then the third pair beside it; the notch
//    3  Monter la condition        8   si + PQP: avoir or être, pronominal,
//                                      negation and pronouns round the auxiliary
//    4  Monter le résultat         7   aurais / serais + participle; aurai is
//                                      a futur antérieur; pouvoir, devoir
//    5  Le regret et le reproche   8   je against tu / vous; si seulement;
//                                      softening a reproach
//    6  Le soulagement             7   the negative pair = a positive fact;
//                                      sans + noun; j’ai failli
//    7  L’ordre des moitiés        7   result first, the comma, questions;
//                                      the si half keeps its PQP in 2nd place
//    8  Même si et sauf si         7   concession and the one exception in
//                                      the past; même si with a REAL past
//    9  Les pièges                 8   si j’aurais su, je serai venu, and si +
//                                      PQP that is NOT a hypothesis
//   10  Refaire l’histoire         7   the uchronie, everyday what-ifs, the
//                                      proverb « Avec des si... »
//   11  Ta mission                11   model, plan, role play, TASK, quiz
//
//   TOTAL 83 missions, 11 acts. Corpus: 149 authored rows (.1400-.1548)
//   plus 40 reused seed rows (189 item ids). Texts: 3 longer readings (acts
//   1, 10, 11: 161, 205 and 185 words) and 9 short « Dans un texte »
//   readings (acts 3 to 10, 83 to 97 words). Quiz: 12 rounds of 8,
//   one per act from 1 to 10, one RECYCLING round (lessons 10, 19, 32 in
//   B1, lessons 1 and 2 in B2) and one EXAM-STYLE round (a DELF B2 reading
//   item and TCF-style gap fills). Twelve error triggers, twelve drills,
//   five reference sheets, eleven terms. Chapter artwork:
//   `si-irreel-passe-image-prompts.md`, 11 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Pour réécrire le passé, recule la paire d’un cran : si +
//     plus-que-parfait, puis conditionnel passé. »
//   EN: To rewrite the past, move the pair back one notch: si + pluperfect,
//   then past conditional.
//
//   ONE METAPHOR, LE CRAN. Lesson 10 in B1 made a si sentence a matched
//   pair. Here the pair moves back one notch, BOTH halves together: that is
//   what kills « si j’aurais su » (only the result moved) and « si je
//   vérifiais » for yesterday (the pair did not move far enough). It is
//   scoped by « pour réécrire le passé »: act 9 shows the si + PQP that
//   rewrites nothing (reported question, reported condition, past habit).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    BUILDING si + plus-que-parfait > conditionnel passé, in both
//           orders; its meaning (the inverse of the facts); regret,
//           reproach, the softened reproach, relief (sans + noun, j’ai
//           failli); même si and sauf si about the past; the traps (si
//           j’aurais su, je serai venu, the auxiliary, the attracted
//           conditional in second place); si + PQP that is not a hypothesis;
//           counterfactual history.
//   QUOTES  lesson 10 in B1 (reframe re-exported, 13 rows reused by id,
//           including its act 11 recognition rows, now BUILT here); lesson
//           32 in B1 (reframe and two même si rows); lesson 19 in B1 (a
//           reported-question row).
//   LEAVES  the FORMATION of the plus-que-parfait (lesson 1 in B2) and of
//           the conditionnel passé (lesson 2 in B2), cited, never retaught;
//           MIXED pairs (lesson 4 in B2), named twice, never drilled, and
//           the grader notes forbid penalising one; the futur antérieur
//           (lesson 7 in B2) named only as the serai / serais trap.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs (the
//   receptionist says vous). Every `say` is French. No spaced « ? » or « ! »
//   in any bubble. Both scenarios use ’ only and embed no corpus row. Other
//   lessons cited by trail position in words, never by raw id. Mission
//   answer slots spread by `spreadMissions()`, the quiz by `spreadSlots()`
//   (no text changes, no `why` names a position), as b2.22 does.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. TWELVE quiz rounds (96 questions): one per act from 1 to 10, plus
//      the recycling round and the exam-style round the B2 log asks for.
//      Fold the exam round into round 10 to stay at eleven?
//   2. RECYCLING ROUND cites lessons 1 and 2 in B2 (plus-que-parfait,
//      conditionnel passé), written in parallel in this wave. If either
//      slips, relabel those two questions as lesson 10 in B1.
//   3. « SI J’AURAIS SU » is quoted once in a reading (act 9) as the famous
//      film line, marked as the error. Keep the quotation, or describe it?
//   4. MIXED PAIRS are named in act 2 (table and error card) and in the
//      grader notes as lesson 4 in B2's ground. Enough, or none at all?
//   5. SAUF SI + plus-que-parfait (« rien n’aurait changé, sauf si
//      quelqu’un avait prévenu la mairie ») is taught as a B2 pattern.
//      Lesson 19 in B2 (restriction) will own sauf si generally.
//   6. The TASK rubric has FIVE criteria (tâche 3, cohérence 3, étendue 2,
//      correction 2, registre 2 = 12), mirroring the B2 writing grids as
//      b2.22 does; the annotation sits inside `modelAnswer`.
//   7. READING LENGTH. The act 1 blog (161 words) and the act 11 model (185)
//      sit under the 200-word B2 reading floor on purpose: one is a scene
//      opener, the other is sized to the 180-250 task it models. Only the
//      act 10 chronicle (205) is a full B2 reading. Lengthen act 1?
//   8. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, B110, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, SPEAKABLE_IMPORTS, dicteeFor,
  TEXTE_TRAIN, TEXTE_CODE, TEXTE_MUSEE, TEXTE_COURRIEL, TEXTE_FUMEE, TEXTE_DISCOURS,
  TEXTE_MARATHON, TEXTE_DIALLO, TEXTE_CHRONIQUE, TEXTE_COURRIER, TEXTE_MODELE,
  B110_REFRAME, B110_REFRAME_EN, B132_REFRAME, B132_REFRAME_EN,
  SI_B1_UNIT, DISCOURS_UNIT, CONCESSION_UNIT, PQP_UNIT, COND_PASSE_UNIT,
  SI_B1_REF, COND_REF, DISCOURS_REF, CONCESSION_REF, PQP_REF, COND_PASSE_REF, MIXTE_REF,
} from './si-irreel-passe-corpus.ts';
import { SI_PASSE_TERMS } from './si-irreel-passe-terms.ts';

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
  if (!r) throw new Error(`b2.03: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.03: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.03: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** « DANS UN TEXTE »: every act from 3 on ends on the structure inside a
 *  60 to 120 word text, with questions that make the learner find, complete
 *  or rewrite (B2-BUILD-LOG, « In a text »). Answers sit behind the modal. */
function texte(
  id: string, frSub: string, text: string,
  glossary: { word: string; en: string; note: string }[],
  questions: { q: string; a: string }[],
  rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, glossary, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: SI J’AVAIS SU
 *
 *  The missed train. The wrong answer is grammatical: « si je vérifiais »
 *  simply talks about now, so the colleague hears a habit. NO « ? » OR « ! »
 *  IN ANY BUBBLE (house rule 6.4).
 * ══════════════════════════════════════════════════════════════════════════ */

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le train de 17 h 10',
  frSub: 'Un quai vide',
  setting: { place: 'Gare Centrale, quai 14', city: 'Montréal', time: '17 h 25', ambience: 'un quai vide, un panneau d’affichage, le bruit des valises' },
  beats: [
    {
      kind: 'narration',
      text: "Gare Centrale de Montréal, 17 h 25. Avec Inès, ta collègue, tu devais prendre le train de 17 h 10 pour Québec. Tu avais regardé l’horaire d’été ; il a changé il y a une semaine.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Inès',
      fr: 'Le train est parti il y a un quart d’heure.',
      en: 'The train left a quarter of an hour ago.',
      respell: '[luh trehⁿ eh par-TEE | ee-lee-ya uhⁿ kar DEUR]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Je n’ai pas vu le nouvel horaire.',
      en: 'I did not see the new timetable.',
      respell: '[zhuh nay pa vü luh noo-vel o-REHR]',
      stage: 'Un fait, au passé composé. Inès le sait déjà.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Inès',
      fr: fr(E(1407)),
      en: en(E(1407)),
      respell: rsOf(E(1407)),
      stage: 'Un reproche. Elle attend que tu dises ce qui se serait passé autrement.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: 'Tu veux reconnaître l’erreur en une phrase : ce que tu n’as pas fait, et ce que tu aurais évité.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Choisis la phrase qui parle du train qui vient de partir.',
      size: 'lg',
      options: [
        { fr: fr(E(1401)), respell: rsOf(E(1401)), en: en(E(1401)), outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1400)), respell: rsOf(E(1400)), en: en(E(1400)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Inès hoche la tête : « Bon. Au moins, tu sais d’où vient l’erreur. » Elle cherche déjà le train suivant.",
        breaks: "Inès fronce les sourcils : « Tu ne vérifies jamais ? » Ta phrase parlait de maintenant, comme d’une habitude, et elle a compris que ça recommencerait.",
      },
    },
    {
      kind: 'break',
      heading: 'Maintenant ou tout à l’heure',
      body: "« Si je vérifiais » parle de maintenant, ou d’une habitude. Le train est déjà parti : les deux moitiés reculent d’un cran. EN: « Si je vérifiais » is about now; for a train already gone, both halves move back a notch.",
      wrong: { fr: fr(E(1401)), ipa: ipaOf(E(1401)), respell: rsOf(E(1401)), en: en(E(1401)) },
      right: { fr: fr(E(1400)), ipa: ipaOf(E(1400)), respell: rsOf(E(1400)), en: en(E(1400)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Tu viens de réécrire un passé qui n’a pas eu lieu. Dans cette leçon, tu construis cette paire jusqu’à ce qu’elle vienne seule. À la fin, tu racontes en 180 à 250 mots le tournant d’une vie, avec ses si.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'inverse'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Construire la paire du passé sans y penser', s: 'Actes 2 à 4 : les trois paires, la condition, le résultat' },
    { t: 'Dire un regret, un reproche, un soulagement', s: 'Actes 5 et 6 : la même paire, trois messages' },
    { t: 'La plier à ta phrase', s: 'Actes 7 à 9 : l’ordre, même si, sauf si, et les pièges' },
    { t: 'Raconter le tournant d’une vie', s: 'Actes 10 et 11 : refaire l’histoire, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: Inès's own missed train, ten years ago. B2 reading,
 *  questions labelled global, détail, inférence, position. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le blogue d’Inès',
  frSub: 'Un autre train raté, il y a dix ans',
  text: TEXTE_TRAIN,
  glossary: [
    { word: 'une prise', en: 'a socket', note: 'L’endroit du mur où l’on branche un appareil.' },
    { word: 'le quai', en: 'the platform', note: 'Le long trottoir où l’on attend le train.' },
    { word: 'plaisante', en: 'is joking', note: 'Elle ne parle pas sérieusement.' },
  ],
  questions: [
    { q: 'Global : de quoi parle ce billet ?', a: "D’un train raté qui a changé une vie : sans lui, Inès n’aurait jamais rencontré Karim." },
    { q: 'Détail : pourquoi Inès a-t-elle raté le train ?', a: "Elle avait lu l’horaire d’été, le mauvais." },
    { q: 'Inférence : le café était-il plein ? Inès a-t-elle épousé le fils des voisins ?', a: "Non et non. Chaque paire au passé dit le contraire de ce qui s’est passé." },
    { q: 'Position : Inès regrette-t-elle ce train raté ?', a: "Non. Ses si ne sont pas des regrets : ils mesurent sa chance, et elle s’en amuse." },
  ],
  audio: REC('rec-b2-03-blogue'),
  say: REFRAME,
  terms: ['inverse', 'chance'],
};

/** BUILD. Hypothesis or fact: turn the pair over. */
const A1_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-trier',
  layer: 'core',
  size: 'lg',
  title: 'Retourne la paire, trouve les faits',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Ce que disent les paires', [
      it(E(1400), 'l’horaire n’a pas été vérifié'),
      it(E(1402), 'elle n’a pas pris ce train'),
      it(E(1403), 'le café n’était pas plein'),
      it(B110(1352), 'elle ne savait pas'),
    ], chk('Ces quatre phrases racontent-elles ce qui s’est passé ?',
      ['non, le contraire de ce qui s’est passé', 'oui, exactement ce qui s’est passé'], 0,
      'Chaque moitié se retourne : je n’ai pas vérifié, j’ai raté le train. EN: both halves turn over into the facts.')),
    grp('Les faits et les hypothèses', [
      it(E(1405), 'un fait'),
      it(E(1406), 'un fait'),
      it(E(1408), 'une hypothèse sur le passé'),
      it(E(1401), 'une hypothèse sur maintenant'),
    ], chk('Laquelle ne parle pas du passé ?',
      [fr(E(1401)), fr(E(1408)), fr(E(1406))], 0,
      'Si je vérifiais : l’imparfait après si parle de maintenant ou d’une habitude. EN: si + imparfait is about now.')),
    ctl('Le cran', 'Pour parler du train qui vient de partir, que fais-tu reculer ?',
      ['les deux moitiés, d’un cran', 'seulement le résultat'], 0,
      'Avais vérifié devant, n’aurais pas raté derrière : les deux bougent. EN: both halves move.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['inverse', 'recul'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où cette paire sert tous les jours',
  cases: [
    { situation: 'Tu reconnais une erreur devant un collègue', fr: fr(E(1400)), en: en(E(1400)) },
    { situation: 'Tu dis merci à quelqu’un qui t’a sauvé la mise', fr: fr(E(1467)), en: en(E(1467)) },
    { situation: 'Tu fais un reproche sans blesser', fr: fr(E(1463)), en: en(E(1463)) },
    { situation: 'Tu racontes l’histoire de ta ville', fr: fr(E(1523)), en: en(E(1523)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'chance'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le message', 'Pourquoi « Si je vérifiais l’horaire » a-t-il inquiété Inès ?',
    ['parce que la phrase parle de maintenant, comme d’une habitude', 'parce que la phrase est fausse', 'parce qu’elle est trop longue'], 0,
    'La forme est juste. C’est le moment qu’elle vise qui ne va pas. EN: the form is right; the moment is wrong.'),
  ctl('Les faits', '« Si le café avait été plein, je serais restée sur le quai. » Le café était-il plein ?',
    ['non', 'oui'], 0,
    'La paire au passé dit le contraire des faits. EN: the past pair says the opposite of the facts.'),
  ctl('Le cran', 'Qu’est-ce qui recule, d’une paire à l’autre ?',
    ['les deux moitiés ensemble', 'la moitié si seulement', 'le résultat seulement'], 0,
    'Une paire recule en bloc. EN: a pair moves back as one.'),
], ['recul', 'inverse']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Si j’avais su',
    opener: {
      line: "Le train vient de partir, et tu veux dire ce que tu aurais évité : ici tu réécris le passé. EN: The train has just left and you want to say what you would have avoided: here you rewrite the past.",
      imageRef: 'lessons/si-irreel-passe/act01.jpg',
    },
    sections: [],
    milestone: "Tu lis une paire au passé et tu retrouves les faits qu’elle retourne. EN: You can read a past pair and recover the facts it turns over.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_TRIER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: TROIS PAIRES, UN SYSTÈME
 *
 *  Lesson 10 in B1 recapped with its own rows (never retyped), then the
 *  third pair beside each. Mme Roussel's hiking club, where the pencil line
 *  « Si nous avions su » was left on the board a year ago.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'La ligne au crayon, un an plus tard',
  frSub: 'Le club de randonnée de Nantes',
  setting: 'Un an après, Mme Roussel efface enfin le tableau du club. La ligne au crayon est toujours là.',
  bubbles: [
    { from: 'narrator', fr: fr(B110(1209)), en: en(B110(1209)) },
    { from: 'user', fr: 'L’an dernier, j’ai appris à la lire.', en: 'Last year I learned to read it.' },
    { from: 'coach', fr: 'Cette année, tu vas la construire. Pose d’abord les deux paires que tu connais.', en: 'This year you are going to build it. First set out the two pairs you know.' },
    { from: 'user', fr: fr(B110(1204)), en: en(B110(1204)) },
    { from: 'coach', fr: fr(B110(1205)), en: en(B110(1205)), warn: 'Un cran : ce n’est pas le cas' },
    { from: 'coach', fr: fr(E(1414)), en: en(E(1414)), warn: 'Deux crans : ce n’est pas arrivé' },
    { from: 'narrator', fr: 'Un seul car, trois distances avec le réel.', en: 'One coach, three distances from what is real.' },
  ],
  closing: { fr: 'Les deux moitiés reculent ensemble, d’un cran à chaque fois.', en: 'Both halves move back together, one notch at a time.' },
  audio: REC('rec-b2-03-crayon'),
  say: REFRAME,
  terms: ['recul'],
};

const A2_PAIRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-paires',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'Trois paires, un système',
  frSub: 'Le même départ, trois distances',
  hint: 'Quatre cartes. Regarde ce qui bouge dans les DEUX moitiés.',
  audio: REC('rec-b2-03-paires'),
  say: REFRAME,
  terms: ['recul'],
  cards: [
    {
      head: 'Ce qui peut arriver', label: Cap(SI_B1_REF),
      fr: fr(B110(1200)),
      sub: rsOf(B110(1200)),
      body: `« ${B110_REFRAME} » Présent devant, futur derrière. EN: ${B110_REFRAME_EN}`,
    },
    {
      head: 'Ce qui n’est pas le cas', label: 'un cran',
      fr: fr(B110(1201)),
      sub: rsOf(B110(1201)),
      body: "Imparfait devant, conditionnel derrière : tu ne pars pas à sept heures, aujourd’hui. EN: imparfait in front, conditional behind: you are not leaving at seven.",
    },
    {
      head: 'Ce qui n’a pas eu lieu', label: 'deux crans',
      fr: fr(E(1412)),
      sub: rsOf(E(1412)),
      body: "Plus-que-parfait devant, conditionnel passé derrière : tu es parti plus tard, et tu es arrivé après midi. EN: pluperfect in front, past conditional behind: you left later and arrived after noon.",
    },
    {
      head: 'Deux formes que tu connais', label: 'l’attelage',
      fr: 'si j’avais pris · j’aurais pris',
      sub: '[see zha-veh PREE] · [zhoh-reh PREE]',
      body: `Le plus-que-parfait vient de ${PQP_REF}, le conditionnel passé de ${COND_PASSE_REF}. Ici, tu les attelles : le plus-que-parfait toujours après si, le conditionnel passé dans le résultat. EN: two forms you already built, now harnessed together.`,
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-paires',
  title: 'Six lignes du système',
  frSub: 'Touche une ligne',
  cols: ['Après si', 'Le résultat', 'Ce que ça dit'],
  rows: [
    {
      cells: ['présent', 'futur', 'ça peut arriver'],
      say: fr(B110(1204)),
      detail: { title: 'La paire réelle', body: 'Le car sera peut-être complet : on prévoit. EN: the coach may well be full, so you plan for it.', say: fr(B110(1211)) },
    },
    {
      cells: ['imparfait', 'conditionnel', 'pas le cas maintenant'],
      say: fr(B110(1205)),
      detail: { title: 'La paire irréelle', body: 'Le car n’est pas complet, aujourd’hui : on imagine. EN: the coach is not full today, so you imagine.', say: fr(B110(1212)) },
    },
    {
      cells: ['plus-que-parfait', 'conditionnel passé', 'pas arrivé'],
      say: fr(E(1414)),
      detail: { title: 'La paire du passé', body: 'Le car n’était pas complet, et nous n’avons pas pris le train : on réécrit. EN: the coach was not full and we did not take the train.', say: fr(E(1415)) },
    },
    {
      cells: ['présent', 'présent, impératif', 'toujours vrai, ou fais-le'],
      say: 'Si tu as faim, prends du pain dans la cuisine.',
      detail: { title: 'Les autres suites', body: 'La paire réelle accepte aussi un présent ou un impératif derrière. EN: the real pair also takes a present or an imperative.', say: 'Si tu as faim, il y a du pain dans la cuisine.' },
    },
    {
      cells: ['plus-que-parfait', 'conditionnel présent', 'une autre leçon'],
      say: 'Si j’avais accepté ce poste, je vivrais à Genève.',
      detail: { title: 'La paire mixte', body: `Le passé change le présent : ${MIXTE_REF} la construit. Ici, tu la reconnais seulement. EN: a past cause with a present result, built in the next lesson.`, say: 'Si j’avais accepté ce poste, je vivrais à Genève.' },
    },
    {
      cells: ['conditionnel', 'rien', 'interdit'],
      say: fr(E(1422)),
      detail: { title: 'La règle dure', body: 'Derrière si, jamais de conditionnel, ni présent ni passé. EN: never a conditional after si, present or past.', say: fr(E(1414)) },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'condition'],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une situation, trois paires',
  frSub: 'Monte les trois, puis choisis',
  groups: [
    grp('L’appartement', [
      it(E(1420), 'la réponse de la banque est attendue'),
      it(E(1421), 'la banque n’acceptera pas'),
      it(E(1422), 'la banque a refusé'),
    ], chk('Dans la troisième phrase, la banque a-t-elle accepté ?',
      ['non', 'oui', 'on ne sait pas encore'], 0,
      'Avait accepté, aurions acheté : ni l’un ni l’autre n’a eu lieu. EN: neither half happened.')),
    grp('Les photos', [
      it(E(1417), 'ce soir, peut-être'),
      it(E(1418), 'ce soir, sans doute pas'),
      it(E(1419), 'hier soir, c’est raté'),
    ], chk('Laquelle parle d’une soirée déjà finie ?',
      [fr(E(1419)), fr(E(1418)), fr(E(1417))], 0,
      'Étais venu, aurais montré : deux crans. EN: two notches back.')),
    ctl('Le choix', 'Tu parles d’hier. Que dis-tu ?',
      [fr(E(1413)), fr(B110(1203))], 0,
      'Hier est fini : la paire recule jusqu’au plus-que-parfait. EN: yesterday is over, so the pair goes all the way back.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'condition', 'resultat'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quelle distance avec le réel',
  frSub: 'Huit phrases, trois paires',
  lines: [
    ln(B110(1204)), ln(B110(1205)), ln(E(1414)), ln(B110(1211)),
    ln(E(1415)), ln(B110(1212)), ln(E(1416)), ln(B110(1207)),
  ],
  questions: [
    { q: 'Première phrase : de quel moment parle-t-elle ?', opts: ['de demain', 'd’hier', 'd’aujourd’hui, en imaginant'], correct: 0, why: 'Un présent devant, un futur derrière : on prévoit. EN: present then future, so a plan.' },
    { q: 'Troisième phrase : ont-ils pris le train ?', opts: ['non', 'oui'], correct: 0, why: 'Le car n’était pas complet : pas de train. EN: the coach was not full, so no train.' },
    { q: 'Cinquième phrase : sont-ils restés au refuge ?', opts: ['oui', 'non'], correct: 1, why: 'Il ne faisait pas mauvais : ils sont sortis. EN: the weather was fine.' },
    { q: 'Sixième phrase : le locuteur s’attend-il à du mauvais temps ?', opts: ['oui', 'non'], correct: 1, why: 'L’imparfait après si : une hypothèse qu’on n’attend pas, ou qui n’est pas le cas. EN: si + imparfait: not expected, or not the case.' },
    { q: 'Septième phrase : Ousmane a-t-il accepté ?', opts: ['non', 'oui'], correct: 0, why: 'La paire du passé retourne les faits : il a refusé. EN: he said no.' },
  ],
  audio: REC('rec-b2-03-trois-ecoute'),
  say: REFRAME,
  terms: ['recul', 'inverse'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre paires qui ne reculent qu’à moitié',
  errors: [
    {
      wrong: 'Si j’avais eu le temps, je viendrai avec vous.',
      right: 'Si j’avais eu le temps, je serais venu avec vous.',
      why: "Normal : le futur reste en tête depuis la paire réelle. Mais la condition a reculé de deux crans, le résultat aussi. EN: the condition moved back two notches, so the result must too.",
    },
    {
      wrong: 'Si tu étais venu hier soir, je te montrerais les photos.',
      right: 'Si tu étais venu hier soir, je t’aurais montré les photos.',
      why: `Ce mélange existe quand le résultat est encore vrai aujourd’hui : c’est ${MIXTE_REF}. Ici la soirée est finie, et le résultat avec elle. EN: mixed pairs exist, but this result is over.`,
    },
    {
      wrong: 'Si la banque aurait accepté, nous aurions acheté l’appartement.',
      right: 'Si la banque avait accepté, nous aurions acheté l’appartement.',
      why: "Normal : le conditionnel semble aller avec l’hypothèse. Mais derrière si, jamais de conditionnel, présent ou passé. EN: never a conditional after si, present or past.",
    },
    {
      wrong: 'Si je partais à sept heures hier, je serais arrivé avant midi.',
      right: 'Si j’étais parti à sept heures hier, je serais arrivé avant midi.',
      why: "Normal : partais est déjà un temps du passé. Mais après si, l’imparfait parle de maintenant ; pour hier, il faut le plus-que-parfait. EN: after si the imparfait means now; yesterday needs the pluperfect.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'condition'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La troisième paire', 'Que prend la moitié si pour un passé qui n’a pas eu lieu ?',
    ['le plus-que-parfait', 'l’imparfait', 'le conditionnel passé'], 0,
    'Si j’avais pris : un cran derrière l’imparfait. EN: one notch behind the imparfait.'),
  ctl('Le résultat', 'Et la moitié résultat ?',
    ['le conditionnel passé', 'le futur'], 0,
    'J’aurais pris, je serais venu. EN: j’aurais pris, je serais venu.'),
  ctl('Le choix', 'Tu choisis entre la paire irréelle et celle du passé. Sur quoi ?',
    ['sur le moment : aujourd’hui ou hier', 'sur la politesse', 'sur la longueur de la phrase'], 0,
    'Ce qui manque aujourd’hui, ou ce qui a manqué hier. EN: what is missing now, or what was missing then.'),
], ['recul']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Trois paires, un système',
    opener: {
      line: "Tu connais déjà deux paires : ici tu poses la troisième à côté, un cran plus loin. EN: You already know two pairs: here you set the third beside them, one notch further back.",
      imageRef: 'lessons/si-irreel-passe/act02.jpg',
    },
    sections: [],
    milestone: "Tu places une situation sur les trois paires et tu choisis celle qui dit son moment. EN: You can put one situation through all three pairs and pick the one that fits its moment.",
    estScreens: 36, restPoints: ['a2-table'],
  },
  sections: [A2_HISTOIRE, A2_PAIRES, A2_TABLE, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: MONTER LA CONDITION
 *
 *  The si half: avoir or être (the passé composé's choice), agreement,
 *  pronominal verbs, negation and pronouns round the auxiliary. Formation
 *  of the plus-que-parfait is lesson 1 in B2's; this act only harnesses it.
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Un hôtel complet',
  frSub: 'Trois conditions, trois auxiliaires',
  setting: 'Annecy, un soir d’août. Les Martin arrivent à la réception sans réservation.',
  bubbles: [
    { from: 'narrator', fr: 'La réceptionniste regarde son écran, puis le couple.', en: 'The receptionist looks at her screen, then at the couple.' },
    { from: 'coach', fr: fr(B110(1356)), en: en(B110(1356)), warn: 'Avoir : vous aviez réservé' },
    { from: 'user', fr: 'Nous sommes arrivés tard, en plus.', en: 'We got here late, on top of that.' },
    { from: 'coach', fr: 'Si vous étiez arrivés avant six heures, vous auriez eu la dernière chambre.', en: 'If you had arrived before six, you would have got the last room.', warn: 'Être : vous étiez arrivés' },
    { from: 'user', fr: 'Nous nous sommes trompés de route.', en: 'We took the wrong road.' },
    { from: 'coach', fr: 'Si vous ne vous étiez pas trompés de route, vous seriez arrivés à temps.', en: 'If you had not taken the wrong road, you would have arrived in time.', warn: 'Pronominal, et la négation autour' },
    { from: 'narrator', fr: 'Les Martin finissent la nuit dans un gîte, à dix kilomètres.', en: 'The Martins end up spending the night in a guest house ten kilometres away.' },
  ],
  closing: { fr: 'Dans la moitié si, l’auxiliaire du passé composé, mis à l’imparfait.', en: 'In the si half: the passé composé auxiliary, put into the imparfait.' },
  audio: REC('rec-b2-03-hotel'),
  say: REFRAME,
  terms: ['condition'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'La moitié si, pièce par pièce',
  frSub: 'Si + plus-que-parfait',
  hint: 'Quatre cartes. L’auxiliaire décide de tout le reste.',
  audio: REC('rec-b2-03-condition'),
  say: REFRAME,
  terms: ['condition'],
  cards: [
    {
      head: 'Avec avoir', label: Cap(PQP_REF),
      fr: fr(E(1425)),
      sub: rsOf(E(1425)),
      body: `Tu as formé le plus-que-parfait dans ${PQP_REF}. Derrière si, il ne change pas : avions réservé. EN: the pluperfect you built there, unchanged after si.`,
    },
    {
      head: 'Avec être', label: 'l’accord',
      fr: fr(E(1426)),
      sub: rsOf(E(1426)),
      body: "Les verbes qui prennent être au passé composé le gardent ici, avec l’accord : elle était arrivée. EN: être verbs keep être, and agreement, as in the passé composé.",
    },
    {
      head: 'Les pronominaux', label: 'être aussi',
      fr: fr(E(1434)),
      sub: rsOf(E(1434)),
      body: "Se souvenir, se lever, se tromper : toujours être. Elle s’était souvenue. EN: pronominal verbs always take être.",
    },
    {
      head: 'Autour de l’auxiliaire', label: 'négation, pronoms',
      fr: 'si je n’avais pas su · si tu me l’avais dit',
      sub: '[see zhuh na-veh pa SÜ] · [see tü muh la-veh DEE]',
      body: "La négation entoure l’auxiliaire ; les pronoms se placent devant lui. Le participe reste à la fin. EN: the negation wraps the auxiliary, pronouns go before it, the participle stays last.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte la moitié si',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Avec avoir', [
      it(E(1425), 'avions réservé'),
      it(E(1429), 'me l’avais dit'),
      it(B110(1358), 'avions eu'),
      it(E(1428), 'ne m’avais pas prévenu'),
    ], chk('Quel auxiliaire dans ces quatre moitiés si ?',
      ['avoir, à l’imparfait', 'être, à l’imparfait'], 0,
      'Réserver, dire, avoir, prévenir : avoir au passé composé, donc avoir ici. EN: the passé composé choice decides.')),
    grp('Avec être', [
      it(E(1426), 'était arrivée'),
      it(E(1431), 'étaient restés'),
      it(E(1427), 'vous étiez levés'),
      it(E(1434), 's’était souvenue'),
    ], chk('Pourquoi être dans ces quatre phrases ?',
      ['ce sont des verbes à être au passé composé', 'parce que la phrase parle du passé'], 0,
      'Arriver, rester, se lever, se souvenir : les mêmes qu’au passé composé. EN: the same verbs as in the passé composé.')),
    ctl('La négation', 'Tu construis « si je (ne pas savoir) ». Qu’écris-tu ?',
      ['si je n’avais pas su', 'si je n’avais su pas', 'si je ne pas avais su'], 0,
      'Ne et pas entourent l’auxiliaire, le participe vient après. EN: ne... pas wraps the auxiliary.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'La moitié si qui déraille',
  frSub: 'Six phrases, six réflexes',
  rule: {
    title: 'Après si, un plus-que-parfait, et rien d’autre',
    body: "Ni conditionnel, ni imparfait pour hier, ni auxiliaire inventé. Si ta moitié si ne sonne pas comme un passé composé mis à l’imparfait, recommence-la. EN: the si half is a passé composé moved into the imparfait, nothing else.",
  },
  cards: [
    { promptLabel: 'si + conditionnel', promptSound: 'Si nous aurions réservé en mars, nous aurions eu une chambre.', fr: fr(E(1425)), ipa: ipaOf(E(1425)), tip: 'Aurions vit dans le résultat, pas derrière si. EN: aurions belongs to the result.' },
    { promptLabel: 'mauvais auxiliaire', promptSound: 'Si elle avait arrivé à l’heure, elle aurait vu le début.', fr: fr(E(1426)), ipa: ipaOf(E(1426)), tip: 'Elle est arrivée, donc elle était arrivée. EN: arriver takes être.' },
    { promptLabel: 'pronominal sans être', promptSound: 'Si vous vous aviez levés plus tôt, vous auriez vu le lever du soleil.', fr: fr(E(1427)), ipa: ipaOf(E(1427)), tip: 'Un verbe pronominal prend toujours être. EN: pronominal verbs take être.' },
    { promptLabel: 'négation mal placée', promptSound: 'Si tu ne m’avais prévenu pas, j’aurais oublié la réunion.', fr: fr(E(1428)), ipa: ipaOf(E(1428)), tip: 'Pas se colle à l’auxiliaire. EN: pas sits right after the auxiliary.' },
    { promptLabel: 'pronoms après', promptSound: 'Si tu avais me le dit, je t’aurais aidé.', fr: fr(E(1429)), ipa: ipaOf(E(1429)), tip: 'Me le avant l’auxiliaire : tu me l’avais dit. EN: pronouns before the auxiliary.' },
    { promptLabel: 'imparfait pour hier', promptSound: 'Si nous prenions la voiture hier, nous serions arrivés avant l’orage.', fr: fr(E(1435)), ipa: ipaOf(E(1435)), tip: 'Hier appelle le plus-que-parfait. EN: yesterday calls for the pluperfect.' },
  ],
  drill: [
    { promptSay: 'Si nous ... en mars, nous aurions eu une chambre.', opts: ['avions réservé', 'aurions réservé'], correct: 0 },
    { promptSay: 'Si elle ... à l’heure, elle aurait vu le début.', opts: ['avait arrivé', 'était arrivée'], correct: 1 },
    { promptSay: 'Si je ... de quai, j’aurais perdu une heure.', opts: ['m’étais trompé', 'm’avais trompé'], correct: 0 },
    { promptSay: 'Si tu ... , je t’aurais aidé.', opts: ['avais me le dit', 'me l’avais dit'], correct: 1 },
    { promptSay: 'Si nous ... ce soir-là, nous ne l’aurions pas croisée.', opts: ['n’étions pas sortis', 'ne sortions pas'], correct: 0 },
    { promptSay: 'S’il ... , les écoles auraient fermé.', opts: ['aurait neigé', 'avait neigé'], correct: 1 },
    { promptSay: 'Si les enfants ... à la maison, ils auraient raté la fête.', opts: ['étaient restés', 'avaient restés'], correct: 0 },
    { promptSay: 'Si elle ... du code, elle serait entrée tout de suite.', opts: ['avait souvenu', 's’était souvenue'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Après si, un plus-que-parfait' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit trop vite' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-03-piege-condition'),
  say: REFRAME,
  terms: ['condition'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Avions, étaient, s’était',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A3_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-flash',
  layer: 'core',
  title: 'Huit débuts de phrase',
  frSub: 'La moitié si, au passé',
  cards: [
    { front: 'if I had known', back: 'si j’avais su', say: 'Si j’avais su, je serais venu plus tôt.' },
    { front: 'if we had booked', back: 'si nous avions réservé', say: fr(E(1425)) },
    { front: 'if she had arrived', back: 'si elle était arrivée', say: fr(E(1426)) },
    { front: 'if you had told me', back: 'si tu me l’avais dit', say: fr(E(1429)) },
    { front: 'if it had snowed', back: 's’il avait neigé', say: fr(E(1430)) },
    { front: 'if you had not warned me', back: 'si tu ne m’avais pas prévenu', say: fr(E(1428)) },
    { front: 'if I had got the platform wrong', back: 'si je m’étais trompé de quai', say: fr(E(1432)) },
    { front: 'if they had stayed', back: 's’ils étaient restés', say: 'S’ils étaient restés, ils auraient vu la fin du match.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A3_TEXTE = texte('a3-texte', 'Le code oublié', TEXTE_CODE,
  [
    { word: 'au sec', en: 'dry', note: 'À l’abri de la pluie.' },
    { word: 'redonné', en: 'given again', note: 'Donné une deuxième fois.' },
  ],
  [
    { q: 'Trouve : relève les trois moitiés si du texte.', a: "Si tu m’avais appelée, si tu t’étais souvenue du code, si tu n’avais pas oublié de charger ton téléphone." },
    { q: 'Explique : pourquoi « t’étais souvenue » prend-il être ?', a: "Se souvenir est pronominal. Au passé composé, elle s’est souvenue ; donc, derrière si, tu t’étais souvenue, avec l’accord." },
    { q: 'Complète sur le même modèle : « Élodie n’a pas pris ses clés. Si elle... »', a: "Si elle avait pris ses clés, elle serait entrée tout de suite." },
    { q: 'Réécris la dernière phrase de la sœur en disant ce qui s’est vraiment passé.', a: "Élodie a oublié de charger son téléphone, et elle est restée dehors." },
  ],
  'rec-b2-03-code', ['condition', 'inverse']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’auxiliaire', 'Comment choisis-tu entre avoir et être dans la moitié si ?',
    ['comme au passé composé', 'toujours avoir', 'toujours être'], 0,
    'Je suis parti, donc si j’étais parti. EN: the passé composé decides.'),
  ctl('Les pronoms', 'Où vont les pronoms dans « si tu (me le dire) » ?',
    ['devant l’auxiliaire : si tu me l’avais dit', 'après l’auxiliaire : si tu avais me le dit'], 0,
    'Comme au passé composé : tu me l’as dit. EN: as in the passé composé.'),
  ctl('Hier', 'Pour hier, la moitié si prend...',
    ['le plus-que-parfait', 'l’imparfait', 'le conditionnel passé'], 0,
    'L’imparfait parle de maintenant, le conditionnel est interdit. EN: the imparfait means now; the conditional is banned.'),
], ['condition']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Monter la condition',
    opener: {
      line: "Tout commence par si, puis un auxiliaire que tu choisis déjà au passé composé : ici tu montes la moitié si sans hésiter. EN: It starts with si and an auxiliary you already choose in the passé composé: here you build the si half without hesitating.",
      imageRef: 'lessons/si-irreel-passe/act03.jpg',
    },
    sections: [],
    milestone: "Tu construis la moitié si avec avoir ou être, la négation et les pronoms au bon endroit. EN: You can build the si half with the right auxiliary, negation and pronouns.",
    estScreens: 44, restPoints: ['a3-construire', 'a3-dictee'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_DICTEE, A3_FLASH, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: MONTER LE RÉSULTAT
 *
 *  aurais / serais + participle; pouvoir and devoir; « j’aurai » is a futur
 *  antérieur. Formation of the conditionnel passé is lesson 2 in B2's.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le dîner de samedi',
  frSub: 'Ce que Léo aurait fait',
  setting: 'Lundi matin, Léo apprend qu’il y avait un dîner chez toi samedi soir.',
  bubbles: [
    { from: 'user', fr: 'Nous avons dîné chez moi samedi. Tu n’étais pas là.', en: 'We had dinner at my place on Saturday. You were not there.' },
    { from: 'coach', fr: 'Si tu m’avais invité, je serais venu.', en: 'If you had invited me, I would have come.', warn: 'Être : je serais venu' },
    { from: 'user', fr: 'Je t’ai envoyé un message.', en: 'I sent you a message.' },
    { from: 'coach', fr: fr(E(1408)), en: en(E(1408)), warn: 'Avoir : j’aurais vu' },
    { from: 'user', fr: 'Tu aurais pu apporter ta guitare.', en: 'You could have brought your guitar.' },
    { from: 'coach', fr: 'Si je l’avais su, je l’aurais apportée.', en: 'If I had known, I would have brought it.', warn: 'L’accord avec le pronom : apportée' },
    { from: 'narrator', fr: 'Trois résultats, deux auxiliaires, et une guitare restée à la maison.', en: 'Three results, two auxiliaries, and a guitar left at home.' },
  ],
  closing: { fr: 'Dans le résultat, avoir ou être au conditionnel, puis le participe.', en: 'In the result: avoir or être in the conditional, then the participle.' },
  audio: REC('rec-b2-03-diner'),
  say: REFRAME,
  terms: ['resultat'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-formes',
  title: 'La moitié résultat, pièce par pièce',
  frSub: 'Le conditionnel passé',
  hint: 'Quatre cartes. La dernière est celle qu’on rate à l’écrit.',
  audio: REC('rec-b2-03-resultat'),
  say: REFRAME,
  terms: ['resultat'],
  cards: [
    {
      head: 'Avec avoir', label: Cap(COND_PASSE_REF),
      fr: fr(E(1440)),
      sub: rsOf(E(1440)),
      body: `Tu as formé le conditionnel passé dans ${COND_PASSE_REF}. Ici, il répond à la moitié si, et à elle seule. EN: the past conditional you built there, now answering the si half.`,
    },
    {
      head: 'Avec être', label: 'l’accord',
      fr: fr(E(1443)),
      sub: rsOf(E(1443)),
      body: "Partir, venir, rester, arriver : être, comme au passé composé, et le participe s’accorde. Nous serions partis. EN: être verbs keep être and agreement.",
    },
    {
      head: 'Pouvoir, devoir, falloir', label: 'les modaux',
      fr: fr(E(1445)),
      sub: rsOf(E(1445)),
      body: "Tu aurais pu, nous aurions dû, il aurait fallu : la possibilité ou l’obligation qui n’a pas servi. EN: could have, should have, would have had to.",
    },
    {
      head: 'Avec un s', label: 'le piège écrit',
      fr: 'j’aurais pris · je serais venu',
      sub: '[zhoh-reh PREE] · [zhuh suh-reh vuh-NÜ]',
      body: "Sans s, j’aurai pris et je serai venu sont des futurs antérieurs : ils parlent de demain. À l’oral on les confond ; à l’écrit, jamais. EN: without the s it is a future perfect.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte la moitié résultat',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Avec avoir', [
      it(E(1440), 'je t’aurais appelé'),
      it(E(1442), 'nous l’aurions visité'),
      it(E(1450), 'ils auraient appelé'),
      it(B110(1361), 'j’aurais eu le temps'),
    ], chk('Quel auxiliaire dans ces quatre résultats ?',
      ['avoir au conditionnel : aurais, aurions, auraient', 'être au conditionnel : serais, serions'], 0,
      'Appeler, visiter, avoir : avoir au passé composé, donc aurais ici. EN: the passé composé decides again.')),
    grp('Avec être', [
      it(E(1443), 'nous serions partis'),
      it(E(1444), 'ils seraient restés'),
      it(E(1448), 'nous serions arrivés'),
      it(B110(1353), 'je serais venu'),
    ], chk('Pourquoi être dans ces quatre résultats ?',
      ['partir, rester, arriver et venir prennent être', 'parce que le sujet est au pluriel'], 0,
      'Les mêmes verbes qu’au passé composé, avec l’accord. EN: the same verbs, with agreement.')),
    ctl('Les modaux', 'Tu veux dire « you could have caught the bus ». Tu écris...',
      ['tu aurais pu attraper le bus', 'tu pourrais attraper le bus', 'tu as pu attraper le bus'], 0,
      'Pouvoir au conditionnel passé, puis l’infinitif. EN: pouvoir in the past conditional, then the infinitive.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Est-ce que c’est arrivé',
  frSub: 'Huit résultats, huit faits',
  lines: [
    ln(E(1440)), ln(E(1441)), ln(E(1442)), ln(E(1443)),
    ln(E(1445)), ln(E(1446)), ln(E(1449)), ln(E(1450)),
  ],
  questions: [
    { q: 'Première phrase : a-t-il appelé ?', opts: ['non', 'oui'], correct: 0, why: 'Il n’avait pas le numéro : pas d’appel. EN: no number, no call.' },
    { q: 'Troisième phrase : ont-ils visité le musée ?', opts: ['oui', 'non'], correct: 1, why: 'Le musée était fermé. EN: it was closed.' },
    { q: 'Cinquième phrase : a-t-il attrapé le bus ?', opts: ['non', 'oui'], correct: 0, why: 'Il n’a pas couru, et le bus est parti. EN: he did not run.' },
    { q: 'Sixième phrase : ont-ils dormi à l’aéroport ?', opts: ['oui', 'non'], correct: 1, why: 'Le vol n’a pas été annulé. EN: the flight was not cancelled.' },
    { q: 'Septième phrase : ont-ils perdu leur argent ?', opts: ['oui', 'non'], correct: 0, why: 'N’auriez pas perdu : donc ils l’ont perdu. Une négation dans la paire annonce un fait positif. EN: they did lose it.' },
  ],
  audio: REC('rec-b2-03-resultat-ecoute'),
  say: REFRAME,
  terms: ['resultat', 'inverse'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre résultats mal montés',
  errors: [
    {
      wrong: 'Si nous avions su, nous serons partis plus tôt.',
      right: 'Si nous avions su, nous serions partis plus tôt.',
      why: "Normal : serons et serions se ressemblent à l’oreille. Mais serons partis est un futur antérieur ; le résultat d’une paire au passé prend -ions. EN: serons is a future; the result needs serions.",
    },
    {
      wrong: 'Si j’avais eu ton numéro, je t’aurai appelé.',
      right: 'Si j’avais eu ton numéro, je t’aurais appelé.',
      why: "Normal : à l’oral, aurai et aurais sonnent presque pareil. À l’écrit, le s dit que l’appel n’a pas eu lieu. EN: the s marks the conditional.",
    },
    {
      wrong: 'Si le taxi était venu, nous aurions arrivés à temps.',
      right: 'Si le taxi était venu, nous serions arrivés à temps.',
      why: "Normal : aurions sonne comme le résultat typique. Mais arriver prend être : nous sommes arrivés, donc nous serions arrivés. EN: arriver takes être.",
    },
    {
      wrong: 'Si tu avais couru, tu pourrais attraper le bus.',
      right: 'Si tu avais couru, tu aurais pu attraper le bus.',
      why: `Le bus est parti : le résultat est fini lui aussi. Le conditionnel présent ici ferait une paire mixte, et le bus serait encore là (${MIXTE_REF}). EN: the bus is gone; the result is past too.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat'],
};

const A4_TEXTE = texte('a4-texte', 'Le musée fermé', TEXTE_MUSEE,
  [
    { word: 'le trottoir', en: 'the pavement', note: 'La partie de la rue réservée aux piétons.' },
    { word: 'fait le compte', en: 'totted it up', note: 'Additionné tout ce qui n’avait pas marché.' },
    { word: 's’est plaint', en: 'complained', note: 'A dit son mécontentement.' },
  ],
  [
    { q: 'Trouve : relève les trois résultats et leur auxiliaire.', a: "Nous aurions vu (avoir), nous serions arrivés (être), on nous aurait laissés entrer (avoir)." },
    { q: 'Complète sur le modèle du texte : « Nous n’avons pas pris la voiture. Si nous avions pris la voiture, nous... »', a: "Nous serions arrivés à temps." },
    { q: 'Explique : pourquoi « serions arrivés » et pas « serons arrivés » ?', a: "Serons arrivés est un futur antérieur et parle de demain. Le résultat d’une paire au passé prend le conditionnel passé." },
    { q: 'Réécris : ont-ils vu l’exposition ? Réponds par une phrase au passé composé.', a: "Non : ils n’ont pas vu l’exposition, parce qu’ils sont arrivés à dix-sept heures cinq." },
  ],
  'rec-b2-03-musee', ['resultat', 'inverse']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La forme', 'Le résultat d’une paire au passé, c’est...',
    ['avoir ou être au conditionnel, puis le participe', 'avoir ou être au futur, puis le participe'], 0,
    'J’aurais pris, je serais venu. EN: conditional auxiliary plus participle.'),
  ctl('Le s', '« Je serai venu » : que dit cette forme ?',
    ['un futur antérieur, qui parle de demain', 'un regret sur hier', 'un conditionnel passé'], 0,
    'Sans s, c’est un futur antérieur. EN: without the s it is a future perfect.'),
  ctl('Les modaux', 'Comment dis-tu « we would have had to sleep there » ?',
    ['nous aurions dû y dormir', 'nous devrions y dormir'], 0,
    'Devoir au conditionnel passé. EN: devoir in the past conditional.'),
], ['resultat']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Monter le résultat',
    opener: {
      line: "Derrière la condition vient ce qui ne s’est pas passé, avec un s qu’on n’entend presque pas : ici tu montes le résultat. EN: Behind the condition comes what did not happen, with an s you barely hear: here you build the result.",
      imageRef: 'lessons/si-irreel-passe/act04.jpg',
    },
    sections: [],
    milestone: "Tu construis le conditionnel passé du résultat, avec le bon auxiliaire et sans confondre aurais et aurai. EN: You can build the past-conditional result with the right auxiliary.",
    estScreens: 36, restPoints: ['a4-construire'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: LE REGRET ET LE REPROCHE
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le lendemain de la présentation',
  frSub: 'Personne n’accuse personne',
  setting: 'Le client a choisi une autre agence. Le lendemain, tu retrouves Sophie, ta cheffe d’équipe, à la cafétéria.',
  bubbles: [
    { from: 'user', fr: 'Si j’étais arrivé à l’heure, nous aurions commencé ensemble.', en: 'If I had arrived on time, we would have started together.', warn: 'Un regret : je' },
    { from: 'coach', fr: 'Si tu m’avais prévenue, j’aurais changé l’ordre.', en: 'If you had warned me, I would have changed the order.', warn: 'Un reproche, adouci par je' },
    { from: 'user', fr: 'Si seulement j’avais pris le train d’avant.', en: 'If only I had taken the earlier train.', warn: 'Si seulement : la moitié seule' },
    { from: 'coach', fr: 'Si nous avions répété la veille, personne n’aurait remarqué ton retard.', en: 'If we had rehearsed the day before, nobody would have noticed you were late.', warn: 'Nous : un regret partagé' },
    { from: 'narrator', fr: 'Chacun dit ce qu’il aurait pu faire, et la conversation passe à la prochaine fois.', en: 'Each says what they could have done, and the talk moves on to next time.' },
  ],
  closing: { fr: 'Je pour le regret, tu pour le reproche : la paire, elle, ne change pas.', en: 'Je for a regret, tu for a reproach: the pair itself does not change.' },
  audio: REC('rec-b2-03-cafeteria'),
  say: REFRAME,
  terms: ['regret', 'reproche'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Six phrases, trois intentions',
  frSub: 'Regretter, reprocher, adoucir',
  examples: [
    ex(E(1454), 'un regret : je'),
    ex(E(1455), 'un regret, avec une négation'),
    ex(B110(1357), `un regret, déjà lu dans ${SI_B1_REF}`),
    ex(E(1457), 'un reproche direct : tu'),
    ex(E(1458), 'un reproche : vous'),
    ex(E(1463), 'un reproche adouci : j’aurais compris'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'reproche'],
};

const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Regret ou reproche',
  frSub: 'La personne décide',
  groups: [
    grp('Qui porte la faute', [
      it(E(1454), 'moi'),
      it(E(1457), 'toi'),
      it(E(1460), 'moi, et je pèse le pour et le contre'),
      it(E(1458), 'vous'),
    ], chk('Laquelle est un reproche ?',
      [fr(E(1457)), fr(E(1454)), fr(E(1460))], 0,
      'Si tu m’avais écouté : la faute est à l’autre. EN: the blame falls on the other person.')),
    grp('Brut ou adouci', [
      it(E(1457), 'brut'),
      it(E(1463), 'adouci'),
      it(E(1459), 'adouci : je ne me serais pas inquiétée'),
      it('fr.b2.strategies-de-comprehension.1667', 'impersonnel : il aurait fallu'),
    ], chk('Laquelle ménage le plus la personne ?',
      [fr(E(1463)), fr(E(1457))], 0,
      'Le résultat parle de moi : j’aurais compris. Le reproche devient une porte ouverte. EN: the result is about me, so the reproach opens a door.')),
    ctl('Si seulement', '« Si seulement je l’avais su plus tôt. » Faut-il ajouter une deuxième moitié ?',
      ['non, si seulement se suffit à lui-même', 'oui, sinon la phrase est fausse'], 0,
      'Si seulement + plus-que-parfait dit le regret tout seul. EN: si seulement says the regret alone.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'reproche'],
};

const A5_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a5-hacks',
  layer: 'core',
  title: 'Trois astuces pour reprocher sans blesser',
  hacks: [
    { hack: 'Commence par ta part : si j’avais relu, j’aurais vu.', why: "Quand tu reconnais d’abord ta faute, l’autre entend la sienne sans se défendre. EN: own your share first and the other person listens." },
    { hack: 'Mets-toi dans le résultat : si tu m’en avais parlé, j’aurais compris.', why: "Le reproche devient une information sur toi, pas un jugement sur l’autre. EN: the reproach becomes information about you." },
    { hack: 'Finis par la prochaine fois, au futur.', why: "La paire au passé ferme la porte sur hier ; le futur rouvre celle de demain. EN: close yesterday with the past pair, open tomorrow with the future." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reproche'],
};

const A5_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a5-focus',
  layer: 'core',
  sheetId: 'sheet-sens',
  title: 'Ce qu’il faut retenir',
  frSub: 'Une paire, trois messages',
  points: [
    "Le regret : la paire à la première personne, si j’avais su. EN: a regret is the pair in the first person.",
    "Le reproche : la même paire adressée à tu ou à vous. EN: a reproach aims it at tu or vous.",
    "Pour adoucir, parle de toi dans le résultat : j’aurais compris. EN: soften it by putting yourself in the result.",
    "Si seulement + plus-que-parfait dit le regret sans deuxième moitié. EN: si seulement says it alone.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'reproche'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le regret qui se trompe de temps',
  frSub: 'Six phrases, six réflexes',
  rule: {
    title: 'L’émotion ne change pas la grammaire',
    body: "Quand on regrette ou qu’on reproche, on parle vite, et la paire casse. Plus-que-parfait derrière si, conditionnel passé en face, même avec si seulement. EN: emotion speeds you up; the pair still holds.",
  },
  cards: [
    { promptLabel: 'si seulement + conditionnel', promptSound: 'Si seulement je l’aurais su plus tôt.', fr: fr(E(1456)), ipa: ipaOf(E(1456)), tip: 'Si seulement est un si : jamais de conditionnel derrière. EN: si seulement is still si.' },
    { promptLabel: 'futur au lieu du conditionnel', promptSound: 'Si j’avais travaillé plus régulièrement, j’aurai réussi l’examen.', fr: fr(E(1454)), ipa: ipaOf(E(1454)), tip: 'Avec un s : l’examen, lui, est raté. EN: the s says it did not happen.' },
    { promptLabel: 'imparfait pour hier', promptSound: 'Si tu m’écoutais, nous n’aurions pas perdu le dossier.', fr: fr(E(1457)), ipa: ipaOf(E(1457)), tip: 'Le dossier est perdu : la condition recule aussi. EN: the loss is past, so the condition moves back.' },
    { promptLabel: 'négation hors de l’auxiliaire', promptSound: 'Si je n’avais dit pas ça, nous ne nous serions pas disputés.', fr: fr(E(1455)), ipa: ipaOf(E(1455)), tip: 'Pas se colle à l’auxiliaire. EN: pas sits after the auxiliary.' },
    { promptLabel: 'avoir au lieu d’être', promptSound: 'Si nous avions partis plus tôt, nous n’aurions pas attendu une heure.', fr: fr(E(1461)), ipa: ipaOf(E(1461)), tip: 'Partir prend être : nous étions partis. EN: partir takes être.' },
    { promptLabel: 'pronom mal placé', promptSound: 'Si tu avais m’en parlé, j’aurais compris.', fr: fr(E(1463)), ipa: ipaOf(E(1463)), tip: 'M’en avant l’auxiliaire. EN: m’en goes before the auxiliary.' },
  ],
  drill: [
    { promptSay: 'Si seulement je l’... plus tôt.', opts: ['avais su', 'aurais su'], correct: 0 },
    { promptSay: 'Si j’avais travaillé plus régulièrement, j’... l’examen.', opts: ['aurai réussi', 'aurais réussi'], correct: 1 },
    { promptSay: 'Si tu m’... , nous n’aurions pas perdu le dossier.', opts: ['avais écouté', 'écoutais'], correct: 0 },
    { promptSay: 'Si nous ... plus tôt, nous n’aurions pas attendu une heure.', opts: ['avions partis', 'étions partis'], correct: 1 },
    { promptSay: 'Si tu m’en ... , j’aurais compris.', opts: ['avais parlé', 'aurais parlé'], correct: 0 },
    { promptSay: 'Si vous aviez relu le courriel, vous n’... la mauvaise version.', opts: ['avez pas envoyé', 'auriez pas envoyé'], correct: 1 },
    { promptSay: 'Si j’avais osé lui parler, tout ... peut-être changé.', opts: ['aurait', 'avait'], correct: 0 },
    { promptSay: 'Si tu avais pris ton parapluie, tu ne ... pas rentré trempé.', opts: ['serais', 'seras'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'L’émotion ne change pas la grammaire' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qui sort quand on regrette vite' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-03-piege-regret'),
  say: REFRAME,
  terms: ['regret', 'reproche'],
};

const A5_TEXTE = texte('a5-texte', 'Le courriel de Sophie', TEXTE_COURRIEL,
  [
    { word: 'les diapositives', en: 'the slides', note: 'Les pages projetées pendant la présentation.' },
    { word: 'coupé la parole', en: 'interrupted', note: 'Parlé pendant que l’autre parlait encore.' },
    { word: 'la veille', en: 'the day before', note: 'Le jour qui précède.' },
  ],
  [
    { q: 'Trouve : quelles phrases sont des regrets, laquelle est un reproche ?', a: "Les deux premières paires parlent de je et de nous : des regrets. La troisième vise vous : un reproche." },
    { q: 'Explique : comment Sophie adoucit-elle son reproche ?', a: "Le résultat parle d’elle : j’aurais changé l’ordre des interventions. Elle n’écrit pas « vous auriez dû »." },
    { q: 'Réécris ce reproche brut sur le modèle de Sophie : « Vous auriez dû m’envoyer les chiffres. »', a: "Si vous m’aviez envoyé les chiffres, j’aurais pu les vérifier." },
    { q: 'Position : quel ton Sophie choisit-elle, et comment finit-elle ?', a: "Elle prend d’abord sa part, reproche sans accuser, puis finit au futur, sur la prochaine fois." },
  ],
  'rec-b2-03-courriel', ['regret', 'reproche']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La personne', 'Qu’est-ce qui sépare un regret d’un reproche ?',
    ['la personne : je ou tu', 'le temps du verbe', 'la place de si'], 0,
    'La paire est la même ; seul le sujet change. EN: same pair, different subject.'),
  ctl('Adoucir', 'Quelle version ménage l’autre ?',
    ['Si tu m’en avais parlé, j’aurais compris.', 'Si tu m’en avais parlé, tu n’aurais pas fait cette erreur.'], 0,
    'Le résultat parle de moi. EN: the result is about me.'),
  ctl('Si seulement', '« Si seulement j’avais su. » Que dit cette phrase seule ?',
    ['un regret complet', 'une moitié de phrase fausse'], 0,
    'Si seulement se passe de résultat. EN: it needs no result.'),
], ['regret', 'reproche']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le regret et le reproche',
    opener: {
      line: "La même paire peut dire « c’est ma faute » ou « c’est la tienne » : ici tu choisis qui la porte, et comment. EN: The same pair can say « my fault » or « yours »: here you choose who carries it, and how.",
      imageRef: 'lessons/si-irreel-passe/act05.jpg',
    },
    sections: [],
    milestone: "Tu dis un regret, un reproche, et un reproche adouci, sans casser la paire. EN: You can voice a regret, a reproach and a softened reproach without breaking the pair.",
    estScreens: 42, restPoints: ['a5-choisir', 'a5-piege'],
  },
  sections: [A5_HISTOIRE, A5_EXEMPLES, A5_CHOISIR, A5_HACKS, A5_FOCUS, A5_PIEGE, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LE SOULAGEMENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Deux minutes avant le départ',
  frSub: 'Le coup de fil de Nadia',
  setting: 'Gare de Lausanne, quai 3. Tu montes dans le train deux minutes avant le départ, et tu rappelles Nadia.',
  bubbles: [
    { from: 'user', fr: fr(E(1468)), en: en(E(1468)), warn: 'J’ai failli : presque arrivé' },
    { from: 'coach', fr: 'Sans mon appel, tu aurais raté le train.', en: 'Without my call, you would have missed the train.', warn: 'Sans + nom : une condition négative' },
    { from: 'user', fr: fr(E(1467)), en: en(E(1467)), warn: 'Tu m’as appelé, je ne l’ai pas raté' },
    { from: 'coach', fr: 'Et si tu l’avais raté, tu aurais manqué le mariage de ta sœur.', en: 'And if you had missed it, you would have missed your sister’s wedding.', warn: 'Une chaîne : un si en appelle un autre' },
    { from: 'narrator', fr: 'Une négation, deux faits heureux : l’appel a eu lieu, le train n’a pas été raté.', en: 'One negative, two happy facts: the call happened and the train was not missed.' },
  ],
  closing: { fr: 'Une négation dans la paire annonce ce qui s’est bien passé.', en: 'A negative inside the pair announces what went well.' },
  audio: REC('rec-b2-03-lausanne'),
  say: REFRAME,
  terms: ['chance', 'inverse'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sens',
  title: 'Mesurer sa chance',
  frSub: 'Quatre façons de dire ouf',
  hint: 'Quatre cartes. Retourne chaque négation.',
  audio: REC('rec-b2-03-chance'),
  say: REFRAME,
  terms: ['chance', 'inverse'],
  cards: [
    {
      head: 'La paire négative', label: 'le soulagement',
      fr: fr(E(1467)),
      sub: rsOf(E(1467)),
      body: "Tu ne m’avais pas appelé : faux, tu m’as appelé. J’aurais raté : faux, je ne l’ai pas raté. Deux moitiés retournées, deux bonnes nouvelles. EN: turn both halves over: two pieces of good news.",
    },
    {
      head: 'Sans + nom', label: 'la version courte',
      fr: fr(E(1475)),
      sub: rsOf(E(1475)),
      body: "Sans ton appel veut dire si tu ne m’avais pas appelé. C’est plus court, et très courant. EN: sans + noun stands for a negative si half.",
    },
    {
      head: 'Presque arrivé', label: 'j’ai failli',
      fr: fr(E(1474)),
      sub: rsOf(E(1474)),
      body: "Failli + infinitif raconte un fait : ça a presque eu lieu. Aucune condition, un simple passé composé. EN: failli plus infinitive: it very nearly happened.",
    },
    {
      head: 'Ce qui t’a sauvé', label: 'heureusement que',
      fr: fr(E(1468)),
      sub: rsOf(E(1468)),
      body: "Heureusement que + indicatif nomme ce qui a tout sauvé, puis j’ai failli dit ce qui a été évité. EN: heureusement que names what saved you.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Dis ce qui s’est vraiment passé',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le pire évité', [
      it(E(1469), 'le voisin a senti la fumée'),
      it(E(1470), 'elle a freiné'),
      it(E(1472), 'le médecin a insisté'),
      it(E(1478), 'j’ai gardé le reçu'),
    ], chk('Dans ces quatre histoires, le pire est-il arrivé ?',
      ['non, il a été évité', 'oui, chaque fois'], 0,
      'Chaque négation retournée donne un fait positif : il a senti, elle a freiné. EN: every negative turns into a positive fact.')),
    grp('Quatre façons de le dire', [
      it(E(1467), 'la paire complète'),
      it(E(1475), 'sans + nom'),
      it(E(1474), 'j’ai failli'),
      it('fr.b1.emotions.1111', 'de justesse'),
    ], chk('Laquelle ne contient aucune condition ?',
      [fr(E(1474)), fr(E(1475)), fr(E(1467))], 0,
      'J’ai failli raconte un fait. Sans ton appel et si tu ne m’avais pas appelé sont des conditions. EN: failli states a fact.')),
    ctl('Réécris', '« Sans sa ceinture, il aurait été gravement blessé. » Avec si, cela donne...',
      ['S’il n’avait pas eu sa ceinture, il aurait été gravement blessé.', 'S’il avait eu sa ceinture, il aurait été gravement blessé.'], 0,
      'Sans + nom devient une moitié si négative. EN: sans + noun becomes a negative si half.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chance', 'inverse'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qu’est-ce qui a été évité',
  frSub: 'Huit phrases, huit faits à retourner',
  lines: [
    ln(E(1469)), ln(E(1470)), ln(E(1471)), ln(E(1473)),
    ln(E(1476)), ln(E(1477)), ln(B110(1354)), ln(E(1478)),
  ],
  questions: [
    { q: 'Première phrase : la maison a-t-elle brûlé ?', opts: ['non', 'oui'], correct: 0, why: 'Le voisin a senti la fumée à temps. EN: the neighbour smelled it in time.' },
    { q: 'Deuxième phrase : le cycliste a-t-il été renversé ?', opts: ['oui', 'non'], correct: 1, why: 'Elle a freiné. EN: she braked.' },
    { q: 'Troisième phrase : sont-ils partis sans les passeports ?', opts: ['non', 'oui'], correct: 0, why: 'Ils ont relu la liste. EN: they reread the list.' },
    { q: 'Cinquième phrase : portait-il sa ceinture ?', opts: ['non', 'oui'], correct: 1, why: 'Sans sa ceinture : il l’avait, donc il n’a pas été gravement blessé. EN: he had it on.' },
    { q: 'Septième phrase : le conducteur a-t-il freiné à temps ?', opts: ['non', 'oui'], correct: 0, why: 'Ici la condition est positive : il n’a pas freiné plus tôt, et quelque chose est arrivé. EN: a positive condition, so that fact is negative.' },
  ],
  audio: REC('rec-b2-03-chance-ecoute'),
  say: REFRAME,
  terms: ['chance', 'inverse'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Ne... pas, et le fait heureux',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['chance'],
};

const A6_TEXTE = texte('a6-texte', 'La casserole oubliée', TEXTE_FUMEE,
  [
    { word: 'en toussant', en: 'coughing', note: 'Pendant qu’il toussait.' },
    { word: 'une casserole', en: 'a saucepan', note: 'Le récipient où l’on fait chauffer l’eau ou la sauce.' },
    { word: 'gêné', en: 'embarrassed', note: 'Mal à l’aise devant les remerciements.' },
  ],
  [
    { q: 'Trouve : M. Lefebvre s’est-il réveillé ? A-t-il frappé fort ?', a: "Oui et oui. Chaque négation dans la paire annonce un fait positif." },
    { q: 'Réécris avec sans : « Si les pompiers n’étaient pas venus, l’immeuble aurait brûlé. »', a: "Sans les pompiers, l’immeuble aurait brûlé." },
    { q: 'Complète pour M. Lefebvre, avec j’ai failli : « Je dormais si bien que... »', a: "Je dormais si bien que j’ai failli ne rien entendre." },
    { q: 'Inférence : pourquoi M. Lefebvre parle-t-il surtout des croissants ?', a: "Il est gêné par les remerciements : la voisine mesure sa chance, lui préfère changer de sujet." },
  ],
  'rec-b2-03-fumee', ['chance', 'inverse']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Retourner', '« Si tu ne m’avais pas appelé, j’aurais raté le train. » Que s’est-il passé ?',
    ['tu m’as appelé, et je n’ai pas raté le train', 'tu ne m’as pas appelé, et j’ai raté le train'], 0,
    'Les deux moitiés se retournent : tu m’as appelé, je n’ai pas raté le train. EN: both halves turn over into the facts.'),
  ctl('Sans', '« Sans ton aide » remplace quelle moitié si ?',
    ['si tu ne m’avais pas aidé', 'si tu m’avais aidé', 'si tu m’aidais'], 0,
    'Sans + nom : une condition négative. EN: a negative condition.'),
  ctl('Failli', '« J’ai failli tomber. » Es-tu tombé ?',
    ['non, presque', 'oui'], 0,
    'Failli : ça a presque eu lieu. EN: it nearly happened.'),
], ['chance', 'inverse']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le soulagement',
    opener: {
      line: "La même paire sert à dire merci : ici tu mesures ce que tu as évité, et à qui tu le dois. EN: The same pair says thank you: here you measure what you avoided, and who you owe it to.",
      imageRef: 'lessons/si-irreel-passe/act06.jpg',
    },
    sections: [],
    milestone: "Tu dis un soulagement avec une paire négative, avec sans, et avec j’ai failli, et tu retrouves les faits heureux. EN: You can express relief three ways and recover the happy facts.",
    estScreens: 38, restPoints: ['a6-construire'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_ECOUTE, A6_DICTEE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: L’ORDRE DES MOITIÉS
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le concert',
  frSub: 'Deux ordres, les mêmes temps',
  setting: 'Dimanche, Hugo raconte le concert de la veille à Samuel, qui n’est pas venu.',
  bubbles: [
    { from: 'coach', fr: fr(E(1485)), en: en(E(1485)), warn: 'Le résultat d’abord, sans virgule' },
    { from: 'user', fr: 'Je serais venu si tu m’avais prévenu plus tôt.', en: 'I would have come if you had told me sooner.', warn: 'Si en second : toujours le plus-que-parfait' },
    { from: 'coach', fr: 'Si je t’avais prévenu plus tôt, tu aurais trouvé une excuse.', en: 'If I had told you sooner, you would have found an excuse.', warn: 'Si devant : une virgule' },
    { from: 'user', fr: 'Dis-moi ce que tu aurais fait à ma place.', en: 'Tell me what you would have done in my place.' },
    { from: 'coach', fr: 'Je serais venu, même sans billet.', en: 'I would have come, even without a ticket.' },
    { from: 'narrator', fr: 'Trois paires, deux ordres, et aucune moitié n’a changé de temps.', en: 'Three pairs, two orders, and no half changed its tense.' },
  ],
  closing: { fr: 'Ce qui compte vient en premier. Les temps, eux, restent à leur place.', en: 'What matters comes first. The tenses stay where they are.' },
  audio: REC('rec-b2-03-concert'),
  say: REFRAME,
  terms: ['condition', 'resultat'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ordre',
  title: 'L’ordre et la virgule',
  frSub: 'Devant ou derrière',
  hint: 'Quatre cartes. La troisième est la faute des gens pressés.',
  audio: REC('rec-b2-03-ordre'),
  say: REFRAME,
  terms: ['condition', 'resultat'],
  cards: [
    {
      head: 'Si devant', label: 'une virgule',
      fr: fr(E(1482)),
      sub: rsOf(E(1482)),
      body: "La condition ouvre la phrase, la virgule la ferme. On met en avant la cause. EN: the condition opens the sentence; a comma closes it.",
    },
    {
      head: 'Le résultat devant', label: 'aucune virgule',
      fr: fr(E(1481)),
      sub: rsOf(E(1481)),
      body: "Le résultat ouvre, et le plus souvent rien ne sépare les deux moitiés. On met en avant ce qui aurait pu être. EN: the result opens, and usually nothing separates the halves.",
    },
    {
      head: 'Si en second', label: 'le piège',
      fr: fr(E(1487)),
      sub: rsOf(E(1487)),
      body: "Après un conditionnel passé, la main veut en écrire un deuxième. La moitié si garde son plus-que-parfait, où qu’elle soit. EN: the si half keeps its pluperfect wherever it sits.",
    },
    {
      head: 'Dans une question', label: 'le résultat seul',
      fr: fr(E(1489)),
      sub: rsOf(E(1489)),
      body: "Qu’est-ce que tu aurais fait si... : la question porte sur le résultat, et la condition suit. EN: the question is about the result; the condition follows.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Retourne la phrase',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Dans les deux sens', [
      it(E(1482), 'si devant'),
      it(E(1481), 'le résultat devant'),
      it('fr.b2.maison.085', 'le résultat devant'),
      it(E(1483), 'le résultat devant'),
    ], chk('Quand tu retournes une phrase, qu’est-ce qui change ?',
      ['l’ordre et la virgule, pas les temps', 'les temps aussi'], 0,
      'Chaque moitié garde son temps, où qu’elle soit. EN: each half keeps its tense.')),
    grp('Le résultat d’abord', [
      it(E(1484), 'elle s’est blessée'),
      it(E(1486), 'la réunion a commencé en retard'),
      it(E(1488), 'le prix n’a pas baissé'),
      it('fr.b1.dictee.041', 'elle n’en avait pas les moyens'),
    ], chk('Dans ces phrases, où est le plus-que-parfait ?',
      ['après si, en second', 'en tête de phrase'], 0,
      'La moitié si arrive en second et garde son temps. EN: the si half comes second and keeps its tense.')),
    ctl('La virgule', '« J’aurais accepté si tu me l’avais demandé. » Faut-il une virgule avant si ?',
      ['non', 'oui'], 0,
      'Le résultat devant : le plus souvent, rien entre les deux moitiés. EN: result first, usually no comma.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'resultat'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Par quoi la phrase commence',
  frSub: 'Huit phrases, le résultat souvent devant',
  lines: [
    ln(E(1481)), ln(E(1483)), ln(E(1484)), ln(E(1486)),
    ln(E(1482)), ln(E(1488)), ln(E(1489)), ln(E(1490)),
  ],
  questions: [
    { q: 'Première phrase : par quoi commence-t-elle ?', opts: ['par le résultat', 'par la condition'], correct: 0, why: 'J’aurais accepté ouvre la phrase. EN: the result opens.' },
    { q: 'Troisième phrase : s’est-elle blessée ?', opts: ['non', 'oui'], correct: 1, why: 'Si elle ne s’était pas blessée : elle s’est blessée. EN: she did get hurt.' },
    { q: 'Quatrième phrase : la réunion a-t-elle commencé à l’heure ?', opts: ['non', 'oui'], correct: 0, why: 'La paire dit le contraire : elle a commencé en retard. EN: it started late.' },
    { q: 'Cinquième phrase : par quoi commence-t-elle ?', opts: ['par le résultat', 'par la condition'], correct: 1, why: 'Si ouvre la phrase, avec une pause à la virgule. EN: si opens, with a pause.' },
    { q: 'Septième phrase : que fait la phrase ?', opts: ['elle fait un reproche', 'elle pose une question'], correct: 1, why: 'Qu’est-ce que tu aurais fait : une question sur le résultat. EN: a question about the result.' },
  ],
  audio: REC('rec-b2-03-ordre-ecoute'),
  say: REFRAME,
  terms: ['condition', 'resultat'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’ordre',
  errors: [
    {
      wrong: 'J’aurais accepté si tu me l’aurais demandé.',
      right: 'J’aurais accepté si tu me l’avais demandé.',
      why: "Normal : le premier aurais donne le rythme, et la main le répète. Mais derrière si, jamais de conditionnel, même en second. EN: the first aurais sets a rhythm; the si half still refuses it.",
    },
    {
      wrong: 'Nous serions venus, si nous avions été invités.',
      right: 'Nous serions venus si nous avions été invités.',
      why: "Normal : en anglais, une virgule passe souvent. En français, quand le résultat ouvre, le plus souvent rien ne sépare les deux moitiés. EN: result first, usually no comma in French.",
    },
    {
      wrong: 'Si tu me l’avais demandé j’aurais accepté.',
      right: 'Si tu me l’avais demandé, j’aurais accepté.',
      why: "La phrase se comprend, mais la moitié si qui ouvre se ferme par une virgule. EN: a leading si half is closed by a comma.",
    },
    {
      wrong: 'Personne ne serait parti si la réunion aurait commencé à l’heure.',
      right: 'Personne ne serait parti si la réunion avait commencé à l’heure.',
      why: "Normal : serait appelle aurait par l’oreille. La règle ne bouge pas avec l’ordre : plus-que-parfait derrière si. EN: the rule does not move with the order.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A7_TEXTE = texte('a7-texte', 'Le discours de départ', TEXTE_DISCOURS,
  [
    { word: 'tenu', en: 'lasted', note: 'Résisté, supporté jusqu’au bout.' },
    { word: 'le couloir', en: 'the corridor', note: 'Le passage entre les bureaux.' },
  ],
  [
    { q: 'Trouve : combien de phrases commencent par le résultat ?', a: "Trois : je serais partie, je n’aurais jamais tenu, je n’aurais pas appris. Celle sur Paul commence par si, avec une virgule." },
    { q: 'Explique : pourquoi mettre le résultat en tête, dans un discours de remerciement ?', a: "Il met en avant ce que les collègues ont rendu possible : ce qu’elle aurait perdu sans eux." },
    { q: 'Réécris : retourne la phrase sur Paul.', a: "J’aurais travaillé dans le couloir pendant six mois si Paul ne m’avait pas prêté son bureau." },
    { q: 'Explique : dans « si Nadia ne m’avait pas montré », peut-on écrire « si Nadia ne m’aurait pas montré » ? Pourquoi ?', a: "Non. Même en second, la moitié si garde le plus-que-parfait." },
  ],
  'rec-b2-03-discours', ['condition', 'resultat']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('L’ordre', 'Quand tu mets le résultat devant, les temps changent-ils ?',
    ['non', 'oui'], 0,
    'Chaque moitié garde son temps. EN: each half keeps its tense.'),
  ctl('Si en second', '« Il serait resté si tu ... . » (le lui demander)',
    ['le lui avais demandé', 'le lui aurais demandé'], 0,
    'Plus-que-parfait derrière si, où qu’il soit. EN: pluperfect after si, wherever it is.'),
  ctl('La virgule', 'Quand faut-il une virgule entre les deux moitiés ?',
    ['quand si ouvre la phrase', 'quand le résultat ouvre la phrase', 'toujours'], 0,
    'Elle ferme la moitié si qui ouvre. EN: it closes a leading si half.'),
], ['condition', 'resultat']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'L’ordre des moitiés',
    opener: {
      line: "Tu peux commencer par ce qui aurait pu être : ici tu retournes la phrase sans que la paire bouge. EN: You can start with what might have been: here you turn the sentence round without moving the pair.",
      imageRef: 'lessons/si-irreel-passe/act07.jpg',
    },
    sections: [],
    milestone: "Tu écris la paire dans les deux ordres, la virgule au bon endroit, sans conditionnel derrière un si placé en second. EN: You can write the pair in both orders with the comma right.",
    estScreens: 36, restPoints: ['a7-construire'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_ECOUTE, A7_ERREURS, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: MÊME SI ET SAUF SI AU PASSÉ
 *
 *  Même si as a concession is lesson 32 in B1's; here it moves into the
 *  past, where it can concede an imagined past (conditionnel passé behind)
 *  or a REAL one (passé composé behind). Sauf si names the one exception.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Dix ans à Montréal',
  frSub: 'Une concession, une exception',
  setting: 'Inès fête ses dix ans à Montréal. Sa mère, venue de Lyon, lève son verre.',
  bubbles: [
    { from: 'coach', fr: 'Même si tu avais raté dix trains, tu aurais fini ici.', en: 'Even if you had missed ten trains, you would have ended up here.', warn: 'Même si : le résultat aurait été le même' },
    { from: 'user', fr: 'Je n’aurais jamais quitté Lyon, sauf si on m’avait proposé de venir à Montréal.', en: 'I would never have left Lyon, unless someone had asked me to come to Montréal.', warn: 'Sauf si : la seule exception' },
    { from: 'coach', fr: 'Et on te l’a proposé.', en: 'And someone did offer it to you.' },
    { from: 'user', fr: 'Même si j’avais su pour les hivers, je serais venue.', en: 'Even if I had known about the winters, I would have come.', warn: 'Même si : je serais venue quand même' },
    { from: 'narrator', fr: 'Une concession, une exception, et une proposition qui a bel et bien été faite.', en: 'A concession, an exception, and an offer that really was made.' },
  ],
  closing: { fr: 'Même si : rien n’aurait changé. Sauf si : une seule chose aurait tout changé.', en: 'Même si: nothing would have changed. Sauf si: one thing alone would have changed everything.' },
  audio: REC('rec-b2-03-anniversaire'),
  say: REFRAME,
  terms: ['memeSi', 'saufSi'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ordre',
  title: 'Même si, sauf si',
  frSub: 'Au passé',
  hint: 'Quatre cartes. La deuxième parle d’un fait réel.',
  audio: REC('rec-b2-03-concession'),
  say: REFRAME,
  terms: ['memeSi', 'saufSi'],
  cards: [
    {
      head: 'Le résultat ne change pas', label: Cap(CONCESSION_REF),
      fr: fr(E(1494)),
      sub: rsOf(E(1494)),
      body: `« ${B132_REFRAME} » Au passé, même si pèse une condition imaginée : rien n’aurait changé. EN: ${B132_REFRAME_EN}`,
    },
    {
      head: 'Un fait réel, concédé', label: 'même si + passé composé',
      fr: fr(E(1496)),
      sub: rsOf(E(1496)),
      body: "Avec un passé composé derrière, ce n’est plus une hypothèse : il avait plu, et le match a eu lieu quand même. EN: with a passé composé behind, même si concedes a real fact.",
    },
    {
      head: 'La seule exception', label: 'sauf si',
      fr: fr(E(1499)),
      sub: rsOf(E(1499)),
      body: "Sauf si + plus-que-parfait nomme la seule condition qui aurait tout changé. Rien d’autre n’aurait compté. EN: sauf si names the one condition that would have changed everything.",
    },
    {
      head: 'Dans un récit', label: 'sauf si rapporté',
      fr: fr(E(1500)),
      sub: rsOf(E(1500)),
      body: "Elle avait dit : je viendrai, sauf s’il neige. Rapporté au passé, cela donne sauf s’il neigeait. Ce n’est pas une hypothèse sur hier. EN: reported, sauf si simply follows the sequence of tenses.",
    },
  ],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-table',
  layer: 'core',
  sheetId: 'sheet-ordre',
  title: 'Même si et sauf si, six emplois',
  frSub: 'Touche une ligne',
  cols: ['Début', 'Suite', 'Ce que ça dit'],
  rows: [
    {
      cells: ['même si + présent', 'futur', 'ça arrivera quand même'],
      say: fr(B110(1347)),
      detail: { title: 'Même si, réel', body: 'La condition est possible, le résultat est prévu quoi qu’il arrive. EN: the result is planned whatever happens.', say: 'Même si tu es en retard, je t’attendrai.' },
    },
    {
      cells: ['même si + imparfait', 'conditionnel', 'rien ne changerait'],
      say: fr('fr.b1.connecteurs-logiques.1422'),
      detail: { title: 'Même si, irréel', body: 'Une condition imaginée aujourd’hui, un résultat qui ne bouge pas. EN: an imagined condition now, an unchanged result.', say: 'Même si on me payait le double, je resterais ici.' },
    },
    {
      cells: ['même si + PQP', 'conditionnel passé', 'rien n’aurait changé'],
      say: fr(E(1494)),
      detail: { title: 'Même si, au passé', body: 'Une condition imaginée sur hier : le résultat aurait été le même. EN: an imagined past condition, the same result.', say: fr(E(1498)) },
    },
    {
      cells: ['même si + PQP', 'passé composé', 'un fait réel concédé'],
      say: fr(E(1496)),
      detail: { title: 'Même si, fait réel', body: 'Il avait vraiment plu, et le match a vraiment eu lieu. Aucune hypothèse. EN: both facts are real.', say: 'Même s’il avait beaucoup travaillé, il a raté l’examen.' },
    },
    {
      cells: ['sauf si + PQP', 'conditionnel passé', 'la seule exception'],
      say: fr(E(1501)),
      detail: { title: 'Sauf si, au passé', body: 'Une seule condition aurait tout changé. Le contexte dit si elle a eu lieu : pour Lyon, oui ; pour la mairie, non. EN: one condition would have changed it all; the context tells you whether it happened.', say: fr(E(1499)) },
    },
    {
      cells: ['sauf si + imparfait', 'dans un récit', 'une annonce rapportée'],
      say: fr(E(1500)),
      detail: { title: 'Sauf si, rapporté', body: 'La concordance déplace le présent à l’imparfait. Rien d’imaginé. EN: the sequence of tenses moves the present into the imparfait.', say: 'Il avait dit qu’il partirait, sauf s’il pleuvait.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memeSi', 'saufSi'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Concéder, excepter',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Le même résultat', [
      it(E(1494), 'je serais venu de toute façon'),
      it(E(1495), 'je n’aurais rien changé'),
      it(E(1497), 'le retard était inévitable'),
      it(E(1502), 'elle aime son travail'),
    ], chk('Dans ces phrases, la condition aurait-elle changé le résultat ?',
      ['non, le résultat aurait été le même', 'oui, tout aurait changé'], 0,
      'Même si : la condition ne pèse rien sur le résultat. EN: the condition weighs nothing.')),
    grp('Réel ou imaginé', [
      it(E(1496), 'il a vraiment plu'),
      it(E(1498), 'nous n’avons pas couru'),
      it(E(1507), 'je ne suis pas parti plus tôt'),
      it(B110(1347), 'demain, la course aura lieu'),
    ], chk('Laquelle concède un fait réel du passé ?',
      [fr(E(1496)), fr(E(1498)), fr(E(1507))], 0,
      'Un passé composé derrière : le match a vraiment eu lieu, et il avait vraiment plu. EN: a passé composé behind means real facts.')),
    ctl('Sauf si', '« Rien n’aurait changé, sauf si quelqu’un avait prévenu la mairie à temps. » Quelqu’un a-t-il prévenu la mairie ?',
      ['non', 'oui'], 0,
      'Rien n’a changé : l’exception n’a donc pas eu lieu. EN: nothing changed, so the exception never happened.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['memeSi', 'saufSi'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Même si reste un si',
  frSub: 'Six phrases, six réflexes',
  rule: {
    title: 'Même si et sauf si suivent la règle de si',
    body: "Derrière même si et sauf si, jamais de conditionnel : un plus-que-parfait pour hier, un imparfait dans un récit rapporté. Le résultat imaginé, lui, prend le conditionnel passé. EN: même si and sauf si obey the si rule.",
  },
  cards: [
    { promptLabel: 'même si + conditionnel', promptSound: 'Même si j’aurais su, je serais venu.', fr: fr(E(1494)), ipa: ipaOf(E(1494)), tip: 'Même si est un si : j’avais su. EN: même si is still si.' },
    { promptLabel: 'imparfait pour hier', promptSound: 'Même si le train partait à l’heure hier, nous serions arrivés en retard.', fr: fr(E(1497)), ipa: ipaOf(E(1497)), tip: 'Hier appelle le plus-que-parfait. EN: yesterday needs the pluperfect.' },
    { promptLabel: 'sauf si + conditionnel', promptSound: 'Rien n’aurait changé, sauf si quelqu’un aurait prévenu la mairie à temps.', fr: fr(E(1501)), ipa: ipaOf(E(1501)), tip: 'Sauf si aussi : avait prévenu. EN: sauf si takes the pluperfect.' },
    { promptLabel: 'résultat au futur', promptSound: 'Même si nous avions couru, nous n’aurons pas eu le bus.', fr: fr(E(1498)), ipa: ipaOf(E(1498)), tip: 'Aurions, avec -ions : le bus est parti. EN: aurions, the conditional.' },
    { promptLabel: 'concordance oubliée', promptSound: 'Elle avait promis de venir, sauf s’il neige.', fr: fr(E(1500)), ipa: ipaOf(E(1500)), tip: 'Dans un récit au passé : sauf s’il neigeait. EN: in a past narrative, neigeait.' },
    { promptLabel: 'mauvais auxiliaire', promptSound: 'Même si j’avais parti plus tôt, j’aurais raté le début.', fr: fr(E(1507)), ipa: ipaOf(E(1507)), tip: 'Partir prend être : j’étais parti. EN: partir takes être.' },
  ],
  drill: [
    { promptSay: 'Même si j’... , je serais venu.', opts: ['avais su', 'aurais su'], correct: 0 },
    { promptSay: 'Rien n’aurait changé, sauf si quelqu’un ... la mairie à temps.', opts: ['aurait prévenu', 'avait prévenu'], correct: 1 },
    { promptSay: 'Même si nous avions couru, nous n’... pas eu le bus.', opts: ['aurions', 'aurons'], correct: 0 },
    { promptSay: 'Elle avait promis de venir, sauf s’il ... .', opts: ['neige', 'neigeait'], correct: 1 },
    { promptSay: 'Même s’il ... toute la nuit, le match a eu lieu.', opts: ['avait plu', 'aurait plu'], correct: 0 },
    { promptSay: 'Même si j’... plus tôt, j’aurais raté le début.', opts: ['avais parti', 'étais parti'], correct: 1 },
    { promptSay: 'Même si elle avait gagné au loto, elle ... son travail.', opts: ['aurait gardé', 'avait gardé'], correct: 0 },
    { promptSay: 'Nous aurions fait la randonnée, sauf s’il ... vraiment mauvais.', opts: ['aurait fait', 'avait fait'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Même si reste un si' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la main écrit derrière même si' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-03-piege-concession'),
  say: REFRAME,
  terms: ['memeSi', 'saufSi'],
};

const A8_TEXTE = texte('a8-texte', 'Le marathon sous la pluie', TEXTE_MARATHON,
  [
    { word: 'une pluie battante', en: 'pouring rain', note: 'Une pluie forte, qui frappe le sol.' },
    { word: 'ont maintenu', en: 'kept on', note: 'N’ont pas annulé.' },
    { word: 'ravie', en: 'delighted', note: 'Très contente.' },
  ],
  [
    { q: 'Trouve : « Même s’il avait plu toute la nuit » : a-t-il plu ? La course a-t-elle eu lieu ?', a: "Oui et oui. Avec un passé composé derrière, même si concède un fait réel." },
    { q: 'Explique : « sauf si la rivière débordait » : pourquoi l’imparfait ?', a: "C’est l’annonce de jeudi, rapportée : « sauf si la rivière déborde » devient « sauf si la rivière débordait ». Ce n’est pas une hypothèse sur hier." },
    { q: 'Inférence : si Karine avait su qu’il pleuvrait autant, serait-elle restée chez elle ?', a: "Non. Même si dit que le résultat aurait été le même : elle serait venue." },
    { q: 'Complète pour le mari : « Même si on l’avait payé, ... »', a: "Il n’aurait pas couru." },
  ],
  'rec-b2-03-marathon', ['memeSi', 'saufSi']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Même si', '« Même si j’avais su, je serais venu. » Le savoir aurait-il changé quelque chose ?',
    ['non', 'oui'], 0,
    'Même si : le résultat aurait été le même. EN: same result.'),
  ctl('Le fait réel', '« Même s’il avait plu, le match a eu lieu. » A-t-il plu ?',
    ['oui', 'non'], 0,
    'Un passé composé derrière : même si concède un fait réel. EN: a real fact conceded.'),
  ctl('Sauf si', 'Derrière sauf si, pour une hypothèse sur hier, quel temps ?',
    ['le plus-que-parfait', 'le conditionnel passé', 'le présent'], 0,
    'Sauf si suit la règle de si. EN: sauf si follows the si rule.'),
], ['memeSi', 'saufSi']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Même si et sauf si',
    opener: {
      line: "Parfois rien n’aurait changé, parfois une seule chose : ici tu concèdes et tu exceptes au passé. EN: Sometimes nothing would have changed, sometimes just one thing: here you concede and make exceptions about the past.",
      imageRef: 'lessons/si-irreel-passe/act08.jpg',
    },
    sections: [],
    milestone: "Tu emploies même si et sauf si au passé, et tu sépares un fait réel concédé d’une hypothèse. EN: You can use même si and sauf si about the past and tell a conceded fact from a hypothesis.",
    estScreens: 38, restPoints: ['a8-table'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_TABLE, A8_CONSTRUIRE, A8_PIEGE, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: LES PIÈGES
 *
 *  « si j’aurais su », « je serai venu », and the si + plus-que-parfait
 *  that is NOT a hypothesis: a reported question (lesson 19 in B1), a
 *  reported real condition, a past habit.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Trois messages',
  frSub: 'Les mêmes mots, trois histoires',
  setting: 'Au bureau, à Dakar. Awa relit avec toi les messages de la journée.',
  bubbles: [
    { from: 'narrator', fr: 'Trois phrases, et chaque fois un si suivi d’un plus-que-parfait.', en: 'Three sentences, each with a si followed by a pluperfect.' },
    { from: 'coach', fr: fr(E(1512)), en: en(E(1512)), warn: 'Une question rapportée, pas une hypothèse' },
    { from: 'coach', fr: fr(E(1515)), en: en(E(1515)), warn: 'Une consigne rapportée : je pouvais' },
    { from: 'user', fr: fr(E(1516)), en: en(E(1516)), warn: 'Là, une hypothèse : je serais parti' },
    { from: 'coach', fr: 'Pour savoir lequel tu lis, regarde ce qui entoure si.', en: 'To know which one you are reading, look at what surrounds si.' },
  ],
  closing: { fr: 'Un verbe de question devant, un imparfait derrière : pas d’hypothèse.', en: 'A question verb in front or an imparfait behind: no hypothesis.' },
  audio: REC('rec-b2-03-messages'),
  say: REFRAME,
  terms: ['question', 'inverse'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pieges',
  title: 'Quatre pièges',
  frSub: 'Deux fautes, deux faux amis',
  hint: 'Quatre cartes. Les deux dernières ne contiennent aucune faute.',
  audio: REC('rec-b2-03-pieges'),
  say: REFRAME,
  terms: ['condition', 'question'],
  cards: [
    {
      head: 'La faute célèbre', label: 'si j’aurais su',
      fr: fr(E(1508)),
      sub: rsOf(E(1508)),
      body: "On entend si j’aurais su dans la rue et au cinéma, mais c’est une faute : on dit et on écrit si j’avais su. EN: you hear it in the street, but it is a mistake; say and write si j’avais su.",
    },
    {
      head: 'Le s qui manque', label: 'serai ou serais',
      fr: fr(E(1510)),
      sub: rsOf(E(1510)),
      body: "Je serai venue est un futur antérieur. Le résultat d’hier prend le s du conditionnel. EN: serai is a future perfect; the past result needs serais.",
    },
    {
      head: 'La question rapportée', label: Cap(DISCOURS_REF),
      fr: fr('fr.b1.paroles-rapportees.1180'),
      sub: '[el voo-leh sa-VWAR | see tü a-veh ruh-sü say foh-TOH]',
      body: "Après savoir ou demander, si veut dire whether : le plus-que-parfait rapporte un passé, sans rien imaginer. EN: after a question verb, si means whether and imagines nothing.",
    },
    {
      head: 'La consigne rapportée', label: 'la concordance',
      fr: fr(E(1515)),
      sub: rsOf(E(1515)),
      body: "Il avait dit : si tu as fini, tu peux partir. Au passé, le présent devient imparfait et le passé composé devient plus-que-parfait. Une vraie consigne, pas un regret. EN: a real rule, reported.",
    },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Hypothèse ou pas',
  frSub: 'Regarde ce qui entoure si',
  groups: [
    grp('Quatre si + plus-que-parfait', [
      it(E(1512), 'une question rapportée'),
      it(E(1515), 'une consigne rapportée'),
      it(E(1516), 'une hypothèse'),
      it(E(1518), 'une habitude passée'),
    ], chk('Laquelle fait une hypothèse sur le passé ?',
      [fr(E(1516)), fr(E(1512)), fr(E(1515))], 0,
      'Seule celle-ci a un conditionnel passé en face. EN: only this one has a past conditional opposite.')),
    grp('Le si qui demande', [
      it(E(1513), 'savoir si'),
      it(E(1514), 'se demander si'),
      it('fr.b1.paroles-rapportees.1180', 'vouloir savoir si'),
      it(E(1522), 'un conditionnel, permis'),
    ], chk('« Je me demandais si elle aurait le temps » : ce conditionnel après si est-il une faute ?',
      ['non, ce si veut dire whether', 'oui, jamais de conditionnel après si'], 0,
      'La règle dure ne vise que le si de condition. EN: the hard rule covers conditions only.')),
    ctl('La faute', 'Laquelle s’écrit ?',
      ['si j’avais su', 'si j’aurais su'], 0,
      'Derrière un si de condition, jamais de conditionnel. EN: never a conditional after a conditional si.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question', 'condition'],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-table',
  layer: 'core',
  sheetId: 'sheet-pieges',
  title: 'Six phrases à reconnaître',
  frSub: 'Touche une ligne',
  cols: ['Tu lis', 'Ce que c’est', 'Pourquoi'],
  rows: [
    {
      cells: ['si j’aurais su', 'une faute', 'jamais de conditionnel après si'],
      say: fr(E(1508)),
      detail: { title: 'Si j’avais su', body: 'La moitié si prend le plus-que-parfait, sans exception. EN: the si half takes the pluperfect, always.', say: fr(B110(1352)) },
    },
    {
      cells: ['je serai venu', 'un futur antérieur', 'le résultat prend un s'],
      say: fr(E(1510)),
      detail: { title: 'Serais, avec un s', body: 'Serai parle de demain, serais d’un passé qui n’a pas eu lieu. EN: serai looks ahead; serais rewrites the past.', say: fr(E(1443)) },
    },
    {
      cells: ['demander si + PQP', 'une question rapportée', 'rien d’imaginé'],
      say: fr(E(1512)),
      detail: { title: 'Si = whether', body: 'Le plus-que-parfait rapporte un passé réel : as-tu fini ? EN: a real past, reported.', say: fr(E(1513)) },
    },
    {
      cells: ['dire que si + PQP, imparfait', 'une consigne rapportée', 'la concordance'],
      say: fr(E(1515)),
      detail: { title: 'La consigne', body: 'Si tu as fini, tu peux partir, rapporté au passé. EN: a present rule moved into the past.', say: fr(E(1517)) },
    },
    {
      cells: ['si + PQP, imparfait', 'une habitude passée', 'chaque fois que'],
      say: fr(E(1518)),
      detail: { title: 'L’habitude', body: 'Si veut dire chaque fois que : ça arrivait vraiment, souvent. EN: si means whenever, and it really happened.', say: 'Si j’avais bien dormi, je partais courir avant le travail.' },
    },
    {
      cells: ['se demander si + conditionnel', 'une question rapportée', 'permis'],
      say: fr(E(1522)),
      detail: { title: 'Le conditionnel permis', body: 'Ce si ne pose aucune condition : il rapporte une question sur un futur vu du passé. EN: the conditional is allowed after whether.', say: fr('fr.b1.conseils-et-suggestions.1105') },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question', 'condition'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Les réflexes qui trahissent',
  frSub: 'Six phrases, six corrections',
  rule: {
    title: 'Regarde devant si, puis derrière',
    body: "Devant : un verbe de question ? Alors si veut dire whether, et que ne le remplace pas. Derrière : un si de condition ne prend jamais de conditionnel, et le résultat d’hier prend un s. EN: look in front of si, then behind it.",
  },
  cards: [
    { promptLabel: 'si + conditionnel', promptSound: 'Si j’aurais su, je ne serais pas venu.', fr: fr(E(1508)), ipa: ipaOf(E(1508)), tip: 'La faute célèbre : si j’avais su. EN: the famous error.' },
    { promptLabel: 'futur antérieur', promptSound: 'Je serai venue avec plaisir si j’avais été libre.', fr: fr(E(1510)), ipa: ipaOf(E(1510)), tip: 'Le résultat d’hier prend un s. EN: the past result takes an s.' },
    { promptLabel: 'que pour whether', promptSound: 'Il m’a demandé que j’avais fini le rapport.', fr: fr(E(1512)), ipa: ipaOf(E(1512)), tip: 'Une question rapportée prend si. EN: a reported yes-no question takes si.' },
    { promptLabel: 'que pour whether', promptSound: 'Je me demandais que tu avais reçu mon message.', fr: fr(E(1514)), ipa: ipaOf(E(1514)), tip: 'Se demander si, toujours. EN: se demander si.' },
    { promptLabel: 'imparfait pour hier', promptSound: 'Si tu pouvais venir hier, ça aurait été parfait.', fr: fr(E(1521)), ipa: ipaOf(E(1521)), tip: 'Hier : si tu avais pu. EN: yesterday needs the pluperfect.' },
    { promptLabel: 'futur au lieu du conditionnel', promptSound: 'Si j’avais fini, je serai parti.', fr: fr(E(1516)), ipa: ipaOf(E(1516)), tip: 'Serais, avec un s. EN: serais, with an s.' },
  ],
  drill: [
    { promptSay: 'Si j’... , je ne serais pas venu.', opts: ['avais su', 'aurais su'], correct: 0 },
    { promptSay: 'Il m’a demandé ... j’avais fini le rapport.', opts: ['que', 'si'], correct: 1 },
    { promptSay: 'Si j’avais fini, je ... parti.', opts: ['serais', 'serai'], correct: 0 },
    { promptSay: 'Quand j’étais petit, si j’avais fini mes devoirs, j’... le droit de sortir.', opts: ['aurais eu', 'avais'], correct: 1 },
    { promptSay: 'Si tu ... venir, ça aurait été parfait.', opts: ['avais pu', 'pouvais'], correct: 0 },
    { promptSay: 'Je me demandais si elle ... le temps.', opts: ['aurait', 'aura'], correct: 0 },
    { promptSay: 'Si j’avais su que tu ... malade, je serais passé te voir.', opts: ['es', 'étais'], correct: 1 },
    { promptSay: 'Il a dit : « Si tu as fini, tu peux partir. » Il a dit que si j’avais fini, je ... partir.', opts: ['pouvais', 'aurais pu'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Regarde devant si, puis derrière' },
    { label: 'Six cartes', kind: 'cards', title: 'Les réflexes qui trahissent' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b2-03-piege-pieges'),
  say: REFRAME,
  terms: ['condition', 'question'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre pièges de lecteur',
  errors: [
    {
      wrong: 'Si j’aurais eu le temps, je t’aurais appelé.',
      right: 'Si j’avais eu le temps, je t’aurais appelé.',
      why: "Normal : on l’entend partout, jusque dans les films. Mais c’est justement la phrase qu’un correcteur cherche. EN: you hear it everywhere, which is exactly why a marker looks for it.",
    },
    {
      wrong: 'Quand j’étais petit, si j’avais fini mes devoirs, j’aurais eu le droit de sortir.',
      right: 'Quand j’étais petit, si j’avais fini mes devoirs, j’avais le droit de sortir.',
      why: "Normal : si + plus-que-parfait appelle le conditionnel passé, d’habitude. Ici si veut dire chaque fois que : une habitude réelle, à l’imparfait. EN: here si means whenever.",
    },
    {
      wrong: 'Elle voulait savoir que nous avions déjà mangé.',
      right: 'Elle voulait savoir si nous avions déjà mangé.',
      why: "Normal : en anglais, that et whether se confondent parfois. En français, une question oui ou non rapportée prend toujours si. EN: a reported yes-no question takes si.",
    },
    {
      wrong: 'Si j’avais su que tu es malade, je serais passé te voir.',
      right: 'Si j’avais su que tu étais malade, je serais passé te voir.',
      why: "Normal : la maladie dure peut-être encore. Mais après si j’avais su que, la concordance demande l’imparfait. EN: after si j’avais su que, the sequence of tenses needs the imparfait.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['question', 'condition'],
};

const A9_TEXTE = texte('a9-texte', 'La règle de M. Diallo', TEXTE_DIALLO,
  [
    { word: 'la réplique', en: 'the line', note: 'Une phrase dite par un personnage de film ou de théâtre.' },
    { word: 'soulignait', en: 'underlined', note: 'Tirait un trait sous la faute.' },
    { word: 'appliqué', en: 'made an effort', note: 'Travaillé avec soin.' },
  ],
  [
    { q: 'Trouve : combien de si + plus-que-parfait font une hypothèse sur le passé ?', a: "Une seule, sans compter la faute : si j’avais su que M. Diallo lisait tout. Les autres rapportent une consigne ou une question." },
    { q: 'Explique : « si nous avions fini l’exercice, nous pouvions lire » : pourquoi pas de conditionnel passé ?', a: "C’est une consigne rapportée : « si vous avez fini, vous pouvez lire », déplacée au passé. Elle s’est réalisée des dizaines de fois." },
    { q: 'Réécris la réplique du film en français correct.', a: "Si j’avais su, je ne serais pas venu." },
    { q: 'Inférence : Lucas s’est-il appliqué, au lycée ?', a: "Non : il ne savait pas que M. Diallo lisait tout, donc il ne s’est pas appliqué." },
  ],
  'rec-b2-03-diallo', ['question', 'condition']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La faute', 'Pourquoi « si j’aurais su » est-il faux ?',
    ['un si de condition ne prend jamais de conditionnel', 'su ne s’accorde pas', 'il manque la négation'], 0,
    'La moitié si prend le plus-que-parfait. EN: the si half takes the pluperfect.'),
  ctl('Whether', '« Il m’a demandé si j’avais fini. » Est-ce une hypothèse ?',
    ['non, une question rapportée', 'oui, sur le passé'], 0,
    'Un verbe de question devant : si veut dire whether. EN: a question verb in front.'),
  ctl('Le s', 'Le résultat d’une paire au passé s’écrit...',
    ['je serais venu', 'je serai venu'], 0,
    'Avec un s : le conditionnel. EN: with an s.'),
], ['condition', 'question']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Les pièges',
    opener: {
      line: "La même forme peut être une faute, une question ou un souvenir : ici tu apprends à regarder autour de si. EN: The same form can be an error, a question or a memory: here you learn to look around si.",
      imageRef: 'lessons/si-irreel-passe/act09.jpg',
    },
    sections: [],
    milestone: "Tu évites si j’aurais su et je serai venu, et tu reconnais un si + plus-que-parfait qui n’imagine rien. EN: You avoid the two classic errors and recognise a si + pluperfect that imagines nothing.",
    estScreens: 44, restPoints: ['a9-trier', 'a9-piege'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_TRIER, A9_TABLE, A9_PIEGE, A9_ERREURS, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: REFAIRE L’HISTOIRE
 *
 *  The uchronie, as a chain of past pairs, and the everyday what-if. The
 *  village chronicle is INVENTED (corpus §A.7).
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La chronique de Saint-Aubin',
  frSub: 'Et si le train n’était jamais arrivé',
  text: TEXTE_CHRONIQUE,
  glossary: [
    { word: 'tracés', en: 'routes', note: 'Les chemins possibles de la voie ferrée, dessinés sur une carte.' },
    { word: 'en découle', en: 'follows from it', note: 'En est la conséquence.' },
  ],
  questions: [
    { q: 'Global : que fait ce texte ?', a: "Il imagine l’histoire de Saint-Aubin si le train était passé ailleurs : c’est une uchronie, une histoire refaite à partir d’un si." },
    { q: 'Détail : pourquoi la compagnie a-t-elle choisi Saint-Aubin ?', a: "Parce que le terrain y était plus plat." },
    { q: 'Inférence : l’usine de meubles existe-t-elle ?', a: "Oui. « Ne se serait jamais installée » dit le contraire des faits : elle s’est installée." },
    { q: 'Position : l’auteur trouve-t-il le jeu des si inutile ?', a: "Non. Il concède (« ils n’ont pas tort »), puis défend l’idée : imaginer l’autre chemin éclaire celui qu’on a pris." },
  ],
  audio: REC('rec-b2-03-chronique'),
  say: REFRAME,
  terms: ['uchronie', 'inverse'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Une chaîne de si',
  frSub: 'L’histoire d’un village, puis la tienne',
  groups: [
    grp('La chaîne', [
      it(E(1523), 'le premier maillon'),
      it(E(1536), 'la même idée, avec sans'),
      it(E(1524), 'le maillon suivant'),
      it(E(1525), 'une autre chaîne'),
    ], chk('Que fait chaque phrase de la chaîne ?',
      ['elle part d’un fait changé pour en tirer une suite', 'elle raconte ce qui s’est passé'], 0,
      'Chaque conséquence imaginée devient la condition de la suivante. EN: each imagined result becomes the next condition.')),
    grp('Les si de tous les jours', [
      it(E(1526), 'une histoire de famille'),
      it(E(1528), 'une époque'),
      it(E(1529), 'un choix de métier'),
      it(B110(1363), 'un choix, repris de la leçon 10 du B1'),
    ], chk('Laquelle parle d’un choix personnel ?',
      [fr(E(1529)), fr(E(1528)), fr(E(1526))], 0,
      'J’avais choisi : c’est la personne qui a décidé. EN: the person made the choice.')),
    ctl('Le proverbe', '« Avec des si, on mettrait Paris en bouteille. » Que veut-on dire ?',
      ['que les hypothèses ne changent pas les faits', 'qu’il faut toujours imaginer le pire'], 0,
      'On peut tout imaginer avec des si, et rien n’en sort. EN: ifs can imagine anything and change nothing.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['uchronie'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ce qui s’est vraiment passé',
  frSub: 'Huit uchronies, huit faits',
  lines: [
    ln(E(1523)), ln(E(1524)), ln(E(1525)), ln(E(1526)),
    ln(E(1528)), ln(E(1529)), ln(E(1532)), ln(E(1533)),
  ],
  questions: [
    { q: 'Première phrase : le chemin de fer est-il passé par Saint-Aubin ?', opts: ['oui', 'non'], correct: 0, why: 'N’était pas passé : donc il est passé. EN: it did go through.' },
    { q: 'Troisième phrase : la rivière a-t-elle débordé ?', opts: ['non', 'oui'], correct: 1, why: 'N’avait pas débordé : donc elle a débordé, et on a construit le pont. EN: it flooded.' },
    { q: 'Quatrième phrase : la grand-mère a-t-elle émigré ?', opts: ['oui', 'non'], correct: 0, why: 'Et c’est pour ça que la personne est née ici. EN: that is why the speaker was born here.' },
    { q: 'Sixième phrase : est-elle devenue chirurgienne ?', opts: ['oui', 'non'], correct: 1, why: 'Elle n’a pas choisi la médecine. EN: she did not choose medicine.' },
    { q: 'Septième phrase : le pont a-t-il cédé ?', opts: ['non', 'oui'], correct: 0, why: 'La paire positive dit que non : les familles n’ont pas été coupées du monde. EN: it held.' },
  ],
  audio: REC('rec-b2-03-uchronie-ecoute'),
  say: REFRAME,
  terms: ['uchronie', 'inverse'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'Six façons de refaire le passé',
  frSub: 'Du village à la politique',
  examples: [
    ex('fr.b2.communaute.005', 'une ville qui aurait pu consulter ses habitants'),
    ex('fr.b2.conflits-reconciliation.004', 'un malentendu qui aurait pu rester petit'),
    ex(B110(1362), 'aujourd’hui : la paire irréelle'),
    ex(B110(1363), 'hier : la paire du passé, un cran plus loin'),
    ex(E(1531), 'la question qui ouvre une uchronie'),
    ex(E(1530), 'et si : la question seule, sans résultat'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['uchronie', 'recul'],
};

/** Say it out loud: a radio phone-in. ’ only, and no corpus row embedded,
 *  so the scenario can never mix apostrophes (scenario.logic). */
const A10_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a10-scenario',
  layer: 'core',
  title: 'À la radio : et si... ?',
  frSub: 'Six tours, à voix haute',
  setting: 'Tu appelles l’émission « Et si... ? », où les auditeurs refont un tournant de leur vie.',
  turns: [
    {
      ai: 'Bonsoir, vous êtes en direct. Quel moment de votre vie voulez-vous refaire ?', en: 'Good evening, you are on air. Which moment of your life do you want to redo?',
      user: 'Ma première offre d’emploi. J’ai refusé un poste à Québec à vingt-deux ans.',
      userEn: 'My first job offer. I turned down a post in Québec City at twenty-two. (The fact first, in the passé composé.)',
      alts: [
        { fr: 'Un départ raté : à vingt-deux ans, j’ai dit non à Québec.', en: 'A departure that never happened: at twenty-two, I said no to Québec City.' },
        { fr: 'Le jour où j’ai refusé mon premier contrat.', en: 'The day I turned down my first contract.' },
      ],
    },
    {
      ai: 'Et si vous aviez accepté ?', en: 'And what if you had accepted?',
      user: 'Si j’avais accepté, j’aurais appris le métier plus vite.',
      userEn: 'If I had accepted, I would have learned the trade faster. (The past pair: pluperfect, then past conditional.)',
      alts: [
        { fr: 'J’aurais appris le métier plus vite si j’avais accepté.', en: 'I would have learned the trade faster if I had accepted. (Result first, no comma.)' },
        { fr: 'Si j’avais dit oui, j’aurais sans doute déménagé.', en: 'If I had said yes, I would probably have moved.' },
      ],
    },
    {
      ai: 'Vous le regrettez ?', en: 'Do you regret it?',
      user: 'Un peu. Si seulement quelqu’un m’avait conseillé, à l’époque.',
      userEn: 'A little. If only someone had advised me at the time. (Si seulement: a regret on its own.)',
      alts: [
        { fr: 'Pas vraiment. Même si j’avais su, j’aurais refusé.', en: 'Not really. Even if I had known, I would have said no. (Même si: the same result.)' },
        { fr: 'Parfois. Si j’avais été plus sûr de moi, j’aurais dit oui.', en: 'Sometimes. If I had been surer of myself, I would have said yes.' },
      ],
    },
    {
      ai: 'Qu’est-ce qui vous a retenu ?', en: 'What held you back?',
      user: 'Ma mère était malade. Sans sa maladie, je serais parti.',
      userEn: 'My mother was ill. Without her illness, I would have left. (Sans + noun: a negative condition.)',
      alts: [
        { fr: 'Si ma mère n’avait pas été malade, je serais parti.', en: 'If my mother had not been ill, I would have left.' },
        { fr: 'Rien ne m’aurait retenu, sauf si ma mère avait eu besoin de moi. Et elle avait besoin de moi.', en: 'Nothing would have held me back, unless my mother had needed me. And she did. (Sauf si: the one exception.)' },
      ],
    },
    {
      ai: 'Et aujourd’hui, où en êtes-vous ?', en: 'And where are you today?',
      user: 'J’ai mon entreprise. Si j’étais parti, je ne l’aurais peut-être jamais créée.',
      userEn: 'I have my own company. If I had left, I might never have started it. (A relief: the facts are good.)',
      alts: [
        { fr: 'Heureusement que je suis resté : j’ai failli partir.', en: 'Luckily I stayed: I nearly left.' },
        { fr: 'Avec des si, on mettrait Paris en bouteille : je suis content de ma vie.', en: 'With ifs you could put Paris in a bottle: I am happy with my life.' },
      ],
    },
    {
      ai: 'Un conseil pour nos auditeurs ?', en: 'Any advice for our listeners?',
      user: 'Racontez d’abord ce qui s’est passé, et ensuite seulement ce qui se serait passé.',
      userEn: 'First tell what happened, and only then what would have happened. (Facts first, hypotheses after.)',
      alts: [
        { fr: 'Ne passez pas trop de temps sur les si : le passé ne bouge plus.', en: 'Do not spend too long on the ifs: the past does not move any more.' },
        { fr: 'Si je n’avais qu’un conseil, ce serait celui-là : décidez vite.', en: 'If I had only one piece of advice, it would be this: decide quickly.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['uchronie', 'regret', 'chance'],
};

const A10_TEXTE = texte('a10-texte', 'Le courrier d’Hélène', TEXTE_COURRIER,
  [
    { word: 'rubrique', en: 'column', note: 'Une partie régulière d’un journal, ici le courrier des lecteurs.' },
    { word: 'ses premiers pas', en: 'her first steps', note: 'Le moment où un bébé marche pour la première fois.' },
  ],
  [
    { q: 'Trouve : Hélène a-t-elle découvert l’Afrique de l’Ouest ?', a: "Non : « j’aurais découvert » dit ce qui n’a pas eu lieu." },
    { q: 'Trouve : quelle phrase concède ?', a: "« Même si on me l’avait proposé deux fois, j’aurais dit non. » Le résultat aurait été le même." },
    { q: 'Réponds à sa question en deux phrases, avec une paire au passé.', a: "À votre place, j’aurais refusé aussi. Si on m’avait proposé Dakar à ce moment-là, je serais resté avec ma famille." },
    { q: 'Position : pourquoi cite-t-elle le proverbe ?', a: "Pour montrer qu’elle sait que les si ne changent rien aux faits, et qu’elle joue quand même." },
  ],
  'rec-b2-03-courrier', ['uchronie', 'memeSi']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('L’uchronie', 'Une uchronie part...',
    ['d’un fait réel changé', 'd’un rêve', 'd’un futur possible'], 0,
    'Un fait réel, changé, puis ses suites. EN: one real fact changed, then its consequences.'),
  ctl('La chaîne', 'Dans une chaîne de si, un résultat imaginé peut-il devenir la condition suivante ?',
    ['oui', 'non'], 0,
    'Sans la gare, pas d’usine ; sans l’usine, pas de familles. EN: each result feeds the next condition.'),
  ctl('Les faits', '« Si l’usine n’avait pas ouvert, les familles seraient parties. » Les familles sont-elles parties ?',
    ['non', 'oui'], 0,
    'L’usine a ouvert, et les familles sont restées. EN: the factory opened; the families stayed.'),
], ['uchronie', 'inverse']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Refaire l’histoire',
    opener: {
      line: "Un seul détail change, et toute une ville aurait été autre : ici tu enchaînes les si pour refaire l’histoire. EN: Change one detail and a whole town would have been different: here you chain ifs to rewrite history.",
      imageRef: 'lessons/si-irreel-passe/act10.jpg',
    },
    sections: [],
    milestone: "Tu enchaînes plusieurs paires au passé pour refaire une histoire, et tu dis toujours ce qui s’est vraiment passé. EN: You can chain past pairs into a counterfactual story and still state the facts.",
    estScreens: 44, restPoints: ['a10-lecture', 'a10-exemples'],
  },
  sections: [A10_LECTURE, A10_CONSTRUIRE, A10_ECOUTE, A10_EXEMPLES, A10_SCENARIO, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: TA MISSION
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le récit que tu vas imiter',
  frSub: 'Le jour où tout a basculé',
  text: TEXTE_MODELE,
  glossary: [
    { word: 'a basculé', en: 'changed course', note: 'A changé d’un coup, comme une balance qui penche.' },
    { word: 'Avec le recul', en: 'looking back', note: 'Avec le temps qui a passé depuis.' },
  ],
  questions: [
    { q: 'Global : comment le récit est-il construit ?', a: "D’abord les faits (le train raté, le café), puis les si au passé, puis une conclusion : ce qui s’est vraiment passé, et ce qu’elle en pense." },
    { q: 'Détail : quelle phrase concède ?', a: "« Même si j’avais su ce qui m’attendait, [...] je serais montée dans l’avion. » Rien n’aurait changé." },
    { q: 'Inférence : sa sœur l’a-t-elle poussée ?', a: "Oui : « si ma sœur ne m’avait pas poussée » retourne le fait." },
    { q: 'Position : pourquoi finir sur « Si c’était à refaire, je referais tout » ?', a: "Pour revenir au présent : la paire irréelle dit ce qu’elle pense aujourd’hui, après tous les si sur hier." },
  ],
  audio: REC('rec-b2-03-modele'),
  say: REFRAME,
  terms: ['uchronie', 'memeSi'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-pieges',
  title: 'Six étapes avant d’écrire',
  frSub: 'Le plan du récit',
  steps: [
    'Choisis un tournant : dans ta vie, celle d’un proche, ou une histoire que tu connais. EN: pick a turning point.',
    'Raconte d’abord les faits, au passé composé et à l’imparfait. EN: tell the facts first.',
    'Écris au moins trois paires au passé, dont un regret ou un soulagement. EN: at least three past pairs, one of them a regret or a relief.',
    'Ajoute un même si ou un sauf si, et mets une fois le résultat en tête. EN: add même si or sauf si, and one result-first sentence.',
    'Termine sur ce qui s’est vraiment passé, et ce que tu en penses. EN: end on the facts and your view.',
    'Relis chaque si : un plus-que-parfait derrière lui, un conditionnel passé en face. Puis compte : 180 à 250 mots. EN: reread every si, then count.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'resultat'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: 'Au DELF B2 : illustrer un argument par une expérience vécue', fr: fr(E(1538)), en: en(E(1538)) },
    { situation: 'Dans un courriel d’excuse au travail', fr: fr(E(1400)), en: en(E(1400)) },
    { situation: 'Dans un discours de remerciement', fr: fr(E(1544)), en: en(E(1544)) },
    { situation: 'Pour expliquer un choix de vie', fr: fr(E(1499)), en: en(E(1499)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'chance'],
};

/** Say the story aloud before writing it. ’ only, no corpus row. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Raconte ton tournant',
  frSub: 'Six tours, à voix haute',
  setting: 'Un ami te demande comment tu es arrivé là où tu es. Raconte-lui ton tournant, comme tu l’écriras ensuite.',
  turns: [
    {
      ai: 'Alors, comment tout a commencé ?', en: 'So how did it all start?',
      user: 'Tout a basculé l’année de mes vingt ans, quand j’ai raté un examen.',
      userEn: 'Everything changed the year I turned twenty, when I failed an exam. (The fact, first.)',
      alts: [
        { fr: 'Par un échec : j’ai raté mon premier examen de droit.', en: 'With a failure: I failed my first law exam.' },
        { fr: 'Un soir de juin, j’ai reçu une lettre de refus.', en: 'One June evening, I got a rejection letter.' },
      ],
    },
    {
      ai: 'Et si tu l’avais réussi ?', en: 'And if you had passed it?',
      user: 'Si je l’avais réussi, je serais devenu avocat, comme mon père.',
      userEn: 'If I had passed it, I would have become a lawyer, like my father. (The past pair.)',
      alts: [
        { fr: 'Je serais devenu avocat si je l’avais réussi.', en: 'I would have become a lawyer if I had passed it. (Result first, no comma.)' },
        { fr: 'Si j’avais eu cet examen, je n’aurais jamais changé de voie.', en: 'If I had passed that exam, I would never have changed direction.' },
      ],
    },
    {
      ai: 'Tu le regrettes ?', en: 'Do you regret it?',
      user: 'Non. Même si je l’avais réussi, j’aurais fini par partir.',
      userEn: 'No. Even if I had passed it, I would have ended up leaving. (Même si: the same result.)',
      alts: [
        { fr: 'Pas du tout. Heureusement que je l’ai raté.', en: 'Not at all. Luckily I failed it.' },
        { fr: 'Parfois. Si seulement j’avais travaillé un peu plus.', en: 'Sometimes. If only I had worked a bit harder. (A regret on its own.)' },
      ],
    },
    {
      ai: 'Qu’est-ce qui t’a fait changer ?', en: 'What made you change?',
      user: 'Une professeure de dessin. Sans elle, je n’aurais jamais osé.',
      userEn: 'A drawing teacher. Without her, I would never have dared. (Sans + noun.)',
      alts: [
        { fr: 'Si ma professeure de dessin ne m’avait pas encouragé, je n’aurais jamais osé.', en: 'If my drawing teacher had not encouraged me, I would never have dared.' },
        { fr: 'Rien ne m’aurait fait changer, sauf si quelqu’un avait cru en moi.', en: 'Nothing would have made me change, unless someone had believed in me. (Sauf si.)' },
      ],
    },
    {
      ai: 'Et aujourd’hui ?', en: 'And today?',
      user: 'Aujourd’hui, je suis architecte, et j’aime mon métier.',
      userEn: 'Today I am an architect, and I love my job. (What really happened.)',
      alts: [
        { fr: 'Je dessine des maisons, et je ne regrette rien.', en: 'I design houses, and I regret nothing.' },
        { fr: 'Avec le recul, cet échec a été ma chance.', en: 'Looking back, that failure was my lucky break.' },
      ],
    },
    {
      ai: 'Tu referais tout pareil ?', en: 'Would you do it all the same way?',
      user: 'Si c’était à refaire, je referais tout, même l’échec.',
      userEn: 'If I had it to do again, I would do it all again, even the failure. (Back to the present: the unreal pair.)',
      alts: [
        { fr: 'Oui, et j’aurais même raté cet examen exprès.', en: 'Yes, and I would even have failed that exam on purpose.' },
        { fr: 'Presque. J’aurais seulement commencé le dessin plus tôt.', en: 'Almost. I would just have started drawing earlier.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['regret', 'memeSi', 'chance'],
};

/** THE GRADED TASK. Announced in the act 1 resolve; every act added a tool.
 *  Five criteria, as b2.22 mirrors the B2 writing grids. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Le jour où tout a basculé',
  frSub: 'Mission écrite, format B2',
  brief: "Raconte un tournant : dans ta vie, dans celle d’un proche, ou dans une histoire que tu connais (un roman, un film, l’histoire d’une ville). Raconte ce qui s’est passé, puis ce qui se serait passé si une seule chose avait été différente, et dis ce que tu en penses aujourd’hui.",
  briefEn: 'Tell the story of a turning point: in your life, in someone close to you, or in a story you know (a novel, a film, the history of a town). Tell what happened, then what would have happened if one thing had been different, and say what you think of it today.',
  produce: "Écris un récit de 180 à 250 mots : les faits au passé, au moins trois paires si + plus-que-parfait et conditionnel passé (dont un regret ou un soulagement), un même si ou un sauf si, une phrase qui commence par le résultat, et une conclusion sur ce qui s’est vraiment passé.",
  responseSpec: { kind: 'text', minWords: 180, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          '3 : Le tournant est raconté au passé, puis réécrit par au moins trois paires ; un regret ou un soulagement, un même si ou un sauf si, et une conclusion sur les faits. Entre 180 et 250 mots.',
          '2 : Le récit tient, mais un élément manque (la conclusion, le même si, les faits eux-mêmes), ou la longueur sort un peu des limites.',
          '1 : Une suite de si sans histoire, ou une histoire sans si au passé, ou un texte beaucoup trop court.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          '3 : Les faits d’abord, les hypothèses ensuite, puis la conclusion ; chaque si se rattache à un fait déjà raconté, et les liens (ce soir-là, six mois plus tard, avec le recul) guident le lecteur.',
          '2 : On suit le récit, mais un si arrive avant le fait qu’il réécrit, ou les étapes se suivent sans lien.',
          '1 : Les faits et les hypothèses se mélangent : le lecteur ne sait plus ce qui a eu lieu.',
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          '2 : Tu varies : les deux ordres des moitiés, sans + nom ou j’ai failli, même si ou sauf si au passé, une question (qui sait ce que...).',
          '1 : Des paires justes, mais toutes sur le même modèle, si devant.',
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          '2 : Aucun conditionnel derrière si ; aurais et serais avec leur s ; le bon auxiliaire et les accords presque toujours justes.',
          '1 : Des erreurs fréquentes (si j’aurais, je serai venu, j’avais parti) qui gênent parfois la lecture.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          '2 : Un récit écrit, soutenu mais naturel, sans tournure orale (j’aurais pas, si j’aurais su) ; le ton (regret, gratitude, humour) reste le même du début à la fin.',
          '1 : Des tournures orales, ou un ton qui change sans raison.',
        ],
      },
    ],
  },
  scaffold: [
    'Tout a basculé',
    'Ce jour-là,',
    'Si je n’avais pas',
    'Sans',
    'Même si',
    'sauf si',
    'Qui sait ce que',
    'Avec le recul,',
  ],
  modelAnswer: "En 1962, mon grand-père Amadou avait vingt ans et un billet pour Marseille dans sa poche. Il devait partir le lundi pour travailler au port. Le dimanche soir, sa mère est tombée malade, et il a rendu son billet.\n\nSi elle n’était pas tombée malade ce soir-là, il serait parti. Il aurait sans doute travaillé à Marseille, il y aurait rencontré une autre femme, et je ne serais jamais né. Mon père le lui a souvent dit en riant : sans cette fièvre, nous n’aurions pas existé.\n\nMon grand-père, lui, ne parlait jamais de regret. Il est resté à Saint-Louis, il a repris l’atelier de son oncle et il a épousé ma grand-mère deux ans plus tard. Il aurait gagné plus d’argent s’il était monté sur ce bateau, c’est vrai. Mais même s’il avait su tout ce qu’il allait perdre, il serait resté auprès de sa mère. Rien ne l’aurait fait partir, sauf si elle le lui avait demandé elle-même.\n\nQuand je pense à cette histoire, je mesure ma chance. Si le bateau était parti le samedi, tout aurait été différent. Mon grand-père a gardé ce billet dans un tiroir toute sa vie, comme la preuve d’un autre chemin qu’il n’avait pas pris.\n\nLes repères de la correctrice (hors décompte) :\n1. Tâche : le tournant raconté au passé (1962, le billet rendu), quatre paires au passé, un soulagement (je mesure ma chance), et ce qui s’est vraiment passé.\n2. Cohérence : les faits, puis les si, puis la conclusion ; ce soir-là, deux ans plus tard, quand je pense guident le lecteur.\n3. Étendue : sans cette fièvre, même si et sauf si au passé, le résultat en tête (il aurait gagné plus d’argent s’il était monté).\n4. Correction : aucun conditionnel derrière si ; être avec partir, rester, tomber, naître.\n5. Registre : un récit écrit et naturel ; l’humour du père et la gratitude restent du début à la fin.",
  modelAnswerEn: "In 1962 my grandfather Amadou was twenty, with a ticket for Marseille in his pocket. He was to leave on the Monday to work at the port. On the Sunday evening his mother fell ill, and he gave his ticket back. If she had not fallen ill that evening, he would have left. He would probably have worked in Marseille, met another woman there, and I would never have been born. My father often told him so, laughing: without that fever, we would not have existed. My grandfather never spoke of regret. He stayed in Saint-Louis, took over his uncle's workshop and married my grandmother two years later. He would have earned more money if he had got on that boat, it is true. But even if he had known all he was going to lose, he would have stayed with his mother. Nothing would have made him leave, unless she had asked him to herself. When I think of this story, I measure my luck. If the boat had sailed on the Saturday, everything would have been different. My grandfather kept that ticket in a drawer all his life, as proof of another path he had not taken. The marker's notes (not counted): 1. Task: the turning point told in the past, four past pairs, a relief, and what really happened. 2. Coherence: facts, then the ifs, then the conclusion. 3. Range: sans + noun, même si and sauf si in the past, a result-first sentence. 4. Accuracy: no conditional after si; être with partir, rester, tomber, naître. 5. Register: written and natural; the tone holds throughout.",
  watchFor: [
    { pattern: 'A conditional after a conditional si: « si j’aurais su », « si elle aurait accepté », including after même si and sauf si.', criterion: 'correction', feedback: 'Derrière si, jamais de conditionnel : si j’avais su, même si elle avait accepté.', ref: 'a9-piege' },
    { pattern: 'The result written without its s: « je serai venu », « j’aurai pris », « nous serons partis ».', criterion: 'correction', feedback: 'Le résultat d’hier prend le s du conditionnel : je serais venu.', ref: 'a4-erreurs' },
    { pattern: 'A present-unreal pair used for a past event: « si je vérifiais l’horaire, je ne raterais pas le train » about yesterday.', criterion: 'correction', feedback: 'Pour hier, la paire recule d’un cran : si j’avais vérifié, je n’aurais pas raté.', ref: 'a1-scene' },
    { pattern: 'The wrong auxiliary in either half: « si j’avais parti », « nous aurions arrivés ».', criterion: 'correction', feedback: 'Garde l’auxiliaire du passé composé : je suis parti, donc si j’étais parti.', ref: 'a3-piege' },
    { pattern: 'Only hypotheses, no story: the facts of the turning point are never told.', criterion: 'tache', feedback: 'Raconte d’abord ce qui s’est passé, au passé composé ; les si viennent ensuite.', ref: 'a11-plan' },
    { pattern: 'Fewer than three past pairs, or no regret or relief among them.', criterion: 'tache', feedback: 'Ajoute une paire qui dit un regret ou un soulagement : si tu ne m’avais pas appelé, j’aurais raté le train.', ref: 'a6-cartes' },
    { pattern: 'No même si or sauf si anywhere in the story.', criterion: 'etendue', feedback: 'Ajoute un même si : dis ce qui n’aurait rien changé.', ref: 'a8-cartes' },
    { pattern: 'Every pair built the same way, si first, never the result first.', criterion: 'etendue', feedback: 'Retourne une de tes phrases : mets le résultat en tête, le plus souvent sans virgule.', ref: 'a7-construire' },
    { pattern: 'A si that comes before the fact it rewrites, so the reader cannot tell what happened.', criterion: 'coherence', feedback: 'Raconte le fait avant de le réécrire : le lecteur doit savoir ce qui a eu lieu.', ref: 'a10-construire' },
    { pattern: 'No comma after a leading si half. A comma before a si half that comes second is optional (usual before sauf si): do not penalise it.', criterion: 'coherence', feedback: 'Si devant : une virgule. Le résultat devant : le plus souvent, rien entre les deux moitiés.', ref: 'a7-erreurs' },
    { pattern: 'Spoken forms in the written story: « j’aurais pas », « si j’aurais su », « ça aurait été » repeated.', criterion: 'registre', feedback: 'À l’écrit, garde la négation complète : je n’aurais pas.', ref: 'a9-cartes' },
    { pattern: 'A reproach aimed at someone with no softening, which breaks the tone of a personal story.', criterion: 'registre', feedback: 'Parle de toi dans le résultat : si tu m’en avais parlé, j’aurais compris.', ref: 'a5-hacks' },
  ],
  graderNotes: [
    'Count the words of the story only: a title and the marker’s notes do not count. 180 to 250 with 10% tolerance (162 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'DO NOT PENALISE MIXED PAIRS (si + plus-que-parfait with a present conditional, « si j’avais accepté, je vivrais à Dakar ») when the result is true now: that is lesson 4 in B2, correct French. Mark it only when the result is itself in the past (« si tu avais couru, tu pourrais attraper le bus » about a bus already gone).',
    'A conditional after a si that means whether (« je me demandais si elle aurait le temps ») is CORRECT. So is a plus-que-parfait + imparfait for a reported rule or a past habit. Read what surrounds si before scoring.',
    'Narrator gender is unknown: judge être agreement and « né / née » for internal consistency only.',
    'The story may be invented, historical or borrowed from a book or film. Do not check historical facts; do not reward or penalise the choice of subject.',
    'Sauf si + plus-que-parfait is accepted as taught; « à moins que » + subjunctive is also correct and gains nothing extra.',
    'Accept regional usage and places (Québec, Belgique, Suisse, Afrique de l’Ouest). Accept « ç’aurait été » and « cela aurait été ».',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 4 du B2 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'resultat', 'memeSi'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes paires à voix haute',
  frSub: 'Sans les lire',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => SPEAKABLE_IMPORTS.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'resultat'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-paires',
  title: 'Toute la leçon sur un écran',
  rows: [
    {
      k: 'la paire du passé', v: 'si + plus-que-parfait, puis conditionnel passé', say: fr(E(1400)),
      detail: { title: 'Le cran', body: 'Les deux moitiés reculent ensemble, et disent le contraire des faits. EN: both halves move back, and state the opposite of the facts.', say: fr(E(1412)) },
    },
    {
      k: 'la condition', v: 'avoir ou être à l’imparfait + participe', say: fr(E(1426)),
      detail: { title: 'La moitié si', body: 'L’auxiliaire du passé composé ; négation et pronoms autour de lui. EN: the passé composé auxiliary, negation and pronouns around it.', say: fr(E(1428)) },
    },
    {
      k: 'le résultat', v: 'aurais ou serais + participe, avec un s', say: fr(E(1443)),
      detail: { title: 'La moitié résultat', body: 'Sans s, c’est un futur antérieur. EN: without the s it is a future perfect.', say: fr(E(1440)) },
    },
    {
      k: 'regret, reproche, soulagement', v: 'je, tu, et la négation retournée', say: fr(E(1467)),
      detail: { title: 'Trois messages', body: 'La personne change le message ; une négation annonce un fait heureux. EN: the person changes the message.', say: fr(E(1463)) },
    },
    {
      k: 'même si, sauf si', v: 'rien n’aurait changé, sauf une chose', say: fr(E(1494)),
      detail: { title: 'Concéder, excepter', body: 'Même si + plus-que-parfait, avec un passé composé derrière, concède un fait réel. EN: with a passé composé behind, même si concedes a real fact.', say: fr(E(1499)) },
    },
    {
      k: 'pas une hypothèse', v: 'demander si, dire que si, chaque fois que', say: fr(E(1512)),
      detail: { title: 'Regarde autour de si', body: 'Un verbe de question devant, un imparfait derrière : pas de conditionnel passé. EN: no hypothesis, no past conditional.', say: fr(E(1515)) },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'condition', 'resultat'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu construis la paire du passé sans y penser, dans les deux ordres, avec le bon auxiliaire après si et le s du conditionnel dans le résultat. Tu t’en sers pour regretter, reprocher sans blesser, dire merci et refaire l’histoire, et tu reconnais les si + plus-que-parfait qui n’imaginent rien. Le piège qui reste est l’oreille : si j’aurais su et je serai venu s’entendent partout, et la main les écrit quand elle va vite. Avant l’examen, reprends ton récit et entoure chaque si. Pour chacun, vérifie le mot qui le suit, puis le verbe d’en face. EN: Circle every si in your story and check the word after it and the verb opposite.",
  stats: [
    { k: 'La condition', v: 'si + plus-que-parfait' },
    { k: 'Le résultat', v: 'conditionnel passé, avec un s' },
    { k: 'Le sens', v: 'le contraire des faits' },
    { k: 'Les faux amis', v: 'demander si, dire que si, chaque fois que' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, TWELVE rounds of eight: one per act from 1 to 10, a RECYCLING
 *  round (lessons 10, 19 and 32 in B1, lessons 1 and 2 in B2) and an
 *  EXAM-STYLE round (DELF B2 reading items, TCF gap fills). Each round's
 *  target is a distinct errorTrigger. fold() strips commas, accents and
 *  apostrophes, so no answer depends on one: the comma is tested by mcq. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-chemin', label: 'Si j’avais su', targets: ['present-pour-passe'],
      questions: [
        mc('« Si je vérifiais l’horaire, je ne raterais pas le train. » De quel moment parle cette phrase ?', ['de maintenant, ou d’une habitude', 'd’un train déjà parti'], 0, 'L’imparfait après si parle de maintenant. EN: si + imparfait is about now.', 'a1-scene'),
        mc('« Si j’avais vérifié l’horaire, je n’aurais pas raté le train. » A-t-elle raté le train ?', ['oui', 'non', 'on ne sait pas'], 0, 'La paire au passé dit le contraire des faits. EN: the pair states the opposite of the facts.', 'a1-trier'),
        tI('Réécris pour un train déjà parti.', 'Si je (vérifier) l’horaire, je n’aurais pas raté le train.', fr(E(1400)), 'Le résultat est au conditionnel passé : la condition recule aussi. EN: the condition moves back too.', 'a1-scene'),
        tI('Réponds avec le fait que cache la paire.', '« Si le café avait été plein, je serais restée sur le quai. » Le café était-il plein ? Non, le café (ne pas être) plein.', 'Non, le café n’était pas plein.', 'Retourne la moitié si : le café n’était pas plein. EN: turn the si half over.', 'a1-lecture', ['Le café n’était pas plein.']),
        mc('Inès regrette-t-elle son train raté ?', ['non, ses si mesurent sa chance', 'oui, amèrement'], 0, 'Elle a rencontré Karim grâce à lui. EN: she met Karim because of it.', 'a1-lecture'),
        eS('Si j’avais regardé mon téléphone, j’aurai vu ton message.', fr(E(1408)), 'Le résultat prend le s du conditionnel. EN: the result takes the conditional s.', 'a1-trier'),
        tI('Complète la paire au passé.', 'Si nous (partir) à l’heure, nous aurions eu le train.', fr(E(1409)), 'Partir prend être : nous étions partis. EN: partir takes être.', 'a1-usages', ['Si nous étions parties à l’heure, nous aurions eu le train.']),
        lC('Écoute. Ont-ils eu le train ?', fr(E(1409)), ['non', 'oui'], 0, 'Ils ne sont pas partis à l’heure. EN: they did not leave on time.', 'a1-check'),
      ],
    },
    {
      id: 'r2-paires', label: 'Trois paires', targets: ['cran-melange'],
      questions: [
        mc('Si + imparfait, puis conditionnel : de quoi parle la paire ?', ['de ce qui n’est pas le cas maintenant', 'de ce qui n’a pas eu lieu hier', 'de ce qui arrivera'], 0, 'Un cran seulement : aujourd’hui. EN: one notch: today.', 'a2-paires'),
        mc('Pour un passé qui n’a pas eu lieu, que prend la moitié si ?', ['le plus-que-parfait', 'l’imparfait', 'le passé composé'], 0, 'Deux crans : le plus-que-parfait. EN: two notches back.', 'a2-table'),
        tI('Recule la paire d’un cran : la banque a répondu hier.', 'Si la banque acceptait, nous achèterions l’appartement.', fr(E(1422)), 'Les deux moitiés reculent ensemble. EN: both halves move back.', 'a2-construire'),
        tI('Recule la paire d’un cran : la soirée était hier.', 'Si tu venais ce soir, je te montrerais les photos.', 'Si tu étais venu hier soir, je t’aurais montré les photos.', 'Étais venu devant, aurais montré derrière. EN: both halves move back.', 'a2-construire', ['Si tu étais venue hier soir, je t’aurais montré les photos.']),
        eS('Si j’avais eu le temps, je viendrai avec vous.', 'Si j’avais eu le temps, je serais venu avec vous.', 'La condition a reculé, le résultat aussi. EN: the result must move back too.', 'a2-erreurs', ['Si j’avais eu le temps, je serais venue avec vous.']),
        mc('« Si le car avait été complet, nous aurions pris le train. » Le car était-il complet ?', ['non', 'oui'], 0, 'La paire retourne les faits. EN: the pair turns the facts over.', 'a2-ecoute'),
        mc('Qu’est-ce qui recule d’une paire à l’autre ?', ['les deux moitiés ensemble', 'la moitié si seulement'], 0, 'Une paire recule en bloc. EN: a pair moves as one.', 'a2-check'),
        lC('Écoute. De quel moment parle cette phrase ?', fr(E(1416)), ['d’hier', 'de demain', 'd’aujourd’hui'], 0, 'Avait accepté, serions partis : un passé qui n’a pas eu lieu. EN: a past that did not happen.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-condition', label: 'La condition', targets: ['si-mal-monte'],
      questions: [
        mc('Comment choisis-tu l’auxiliaire de la moitié si ?', ['comme au passé composé', 'toujours avoir'], 0, 'Je suis parti, donc si j’étais parti. EN: the passé composé decides.', 'a3-cartes'),
        tI('Complète la moitié si.', 'Si elle (arriver) à l’heure, elle aurait vu le début.', fr(E(1426)), 'Arriver prend être, avec l’accord. EN: arriver takes être.', 'a3-construire'),
        tI('Complète la moitié si.', 'Si vous (se lever) plus tôt, vous auriez vu le lever du soleil.', fr(E(1427)), 'Un pronominal prend être. EN: pronominal verbs take être.', 'a3-piege', ['Si vous vous étiez levé plus tôt, vous auriez vu le lever du soleil.', 'Si vous vous étiez levée plus tôt, vous auriez vu le lever du soleil.', 'Si vous vous étiez levées plus tôt, vous auriez vu le lever du soleil.']),
        eS('Si tu ne m’avais prévenu pas, j’aurais oublié la réunion.', fr(E(1428)), 'Pas se colle à l’auxiliaire. EN: pas sits after the auxiliary.', 'a3-piege', ['Si tu ne m’avais pas prévenue, j’aurais oublié la réunion.']),
        mc('Où vont les pronoms ?', ['si tu me l’avais dit', 'si tu avais me le dit', 'si tu l’avais me dit'], 0, 'Devant l’auxiliaire, comme au passé composé. EN: before the auxiliary.', 'a3-cartes'),
        tI('Complète la moitié si.', 'S’il (neiger), les écoles auraient fermé.', fr(E(1430)), 'Neiger prend avoir. EN: neiger takes avoir.', 'a3-flash'),
        mc('« Si nous prenions la voiture, nous serions arrivés avant l’orage. » Que corriges-tu ?', ['prenions devient avions pris', 'serions devient serons'], 0, 'L’orage est passé : la condition recule. EN: the condition moves back.', 'a3-piege'),
        lC('Écoute. Quel auxiliaire entends-tu derrière si ?', fr(E(1431)), ['être', 'avoir'], 0, 'Étaient restés : rester prend être. EN: rester takes être.', 'a3-dictee'),
      ],
    },
    {
      id: 'r4-resultat', label: 'Le résultat', targets: ['resultat-futur'],
      questions: [
        mc('Le résultat d’une paire au passé se construit avec...', ['avoir ou être au conditionnel, puis le participe', 'avoir ou être au futur, puis le participe'], 0, 'J’aurais pris, je serais venu. EN: conditional auxiliary plus participle.', 'a4-cartes'),
        tI('Complète le résultat.', 'Si nous avions su, nous (partir) plus tôt.', fr(E(1443)), 'Partir prend être : serions partis. EN: partir takes être.', 'a4-construire', ['Si nous avions su, nous serions parties plus tôt.']),
        tI('Complète le résultat.', 'Si le musée avait été ouvert, nous l’(visiter).', fr(E(1442)), 'Visiter prend avoir : aurions visité. EN: visiter takes avoir.', 'a4-texte'),
        eS('Si j’avais eu ton numéro, je t’aurai appelé.', fr(E(1440)), 'Avec un s : l’appel n’a pas eu lieu. EN: with an s.', 'a4-erreurs', ['Si j’avais eu ton numéro, je t’aurais appelée.']),
        eS('Si le taxi était venu, nous aurions arrivés à temps.', fr(E(1448)), 'Arriver prend être. EN: arriver takes être.', 'a4-erreurs', ['Si le taxi était venu, nous serions arrivées à temps.']),
        mc('Comment dis-tu « you could have caught the bus » ?', ['tu aurais pu attraper le bus', 'tu pourrais attraper le bus', 'tu as pu attraper le bus'], 0, 'Pouvoir au conditionnel passé. EN: pouvoir in the past conditional.', 'a4-construire'),
        mc('« Je serai venu » est...', ['un futur antérieur', 'un conditionnel passé'], 0, 'Sans s, c’est un futur antérieur. EN: without the s, a future perfect.', 'a4-check'),
        lC('Écoute. Ont-ils perdu leur argent ?', fr(E(1449)), ['oui', 'non'], 0, 'N’auriez pas perdu : ils l’ont perdu. EN: they lost it.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-regret', label: 'Regret et reproche', targets: ['reproche-brut'],
      questions: [
        mc('Qu’est-ce qui distingue un regret d’un reproche ?', ['la personne : je ou tu', 'le temps des verbes'], 0, 'La paire est la même. EN: the pair is the same.', 'a5-focus'),
        mc('Quelle phrase adoucit le reproche ?', ['Si tu m’en avais parlé, j’aurais compris.', 'Tu aurais dû m’en parler.', 'Si tu m’en avais parlé, tu n’aurais pas fait d’erreur.'], 0, 'Le résultat parle de moi. EN: the result is about me.', 'a5-hacks'),
        tI('Transforme en reproche adouci, avec si et je dans le résultat.', 'Vous auriez dû relire le courriel. (je, ne pas s’inquiéter)', 'Si vous aviez relu le courriel, je ne me serais pas inquiété.', 'Le reproche passe par ce que j’ai ressenti. EN: through what I felt.', 'a5-choisir', ['Si vous aviez relu le courriel, je ne me serais pas inquiétée.']),
        tI('Complète le regret.', 'Si j’(travailler) plus régulièrement, j’aurais réussi l’examen.', fr(E(1454)), 'Travailler prend avoir. EN: travailler takes avoir.', 'a5-exemples'),
        eS('Si seulement je l’aurais su plus tôt.', fr(E(1456)), 'Si seulement reste un si. EN: si seulement is still si.', 'a5-piege'),
        mc('« Si seulement j’avais osé. » Faut-il ajouter un résultat ?', ['non', 'oui'], 0, 'Si seulement se suffit à lui-même. EN: it stands alone.', 'a5-choisir'),
        tI('Écris le reproche direct.', 'Tu ne m’as pas écouté, et nous avons perdu le dossier. Si tu...', fr(E(1457)), 'Deux faits retournés en une paire. EN: two facts turned into a pair.', 'a5-histoire', ['Si tu m’avais écoutée, nous n’aurions pas perdu le dossier.']),
        lC('Écoute. À qui s’adresse le reproche ?', fr(E(1458)), ['à vous', 'à moi'], 0, 'Si vous aviez relu : le reproche vise vous. EN: it is aimed at vous.', 'a5-texte'),
      ],
    },
    {
      id: 'r6-soulagement', label: 'Le soulagement', targets: ['negation-mal-lue'],
      questions: [
        mc('« Si tu ne m’avais pas appelé, j’aurais raté le train. » As-tu raté le train ?', ['non', 'oui'], 0, 'Les deux moitiés se retournent : tu m’as appelé, je ne l’ai pas raté. EN: both halves turn over.', 'a6-cartes'),
        mc('« Sans ton appel » veut dire...', ['si tu n’avais pas appelé', 'si tu avais appelé'], 0, 'Sans + nom : une condition négative. EN: a negative condition.', 'a6-construire'),
        tI('Réécris avec sans.', 'Si elle n’avait pas eu sa ceinture, elle aurait été gravement blessée.', 'Sans sa ceinture, elle aurait été gravement blessée.', 'Sans + nom remplace la moitié si négative. EN: sans + noun.', 'a6-construire'),
        tI('Réécris avec si.', 'Sans ton appel, j’aurais raté le train.', fr(E(1467)), 'Une moitié si négative, avec ne... pas autour de l’auxiliaire. EN: a negative si half.', 'a6-cartes', ['Si tu ne m’avais pas appelée, j’aurais raté le train.']),
        mc('« J’ai failli rater le train. » L’as-tu raté ?', ['non, presque', 'oui'], 0, 'Failli : presque. EN: nearly.', 'a6-cartes'),
        eS('Si le voisin n’avait pas senti la fumée, la maison a brûlé.', fr(E(1469)), 'Le résultat n’a pas eu lieu : conditionnel passé. EN: the result did not happen.', 'a6-ecoute'),
        tI('Écris ce qui s’est vraiment passé, au passé composé.', '« Si je n’avais pas gardé le reçu, on ne m’aurait pas remboursé. » Donc on...', 'Donc on m’a remboursé.', 'Deux négations, un fait positif. EN: a positive fact.', 'a6-texte', ['On m’a remboursé.']),
        lC('Écoute. La maison a-t-elle brûlé ?', fr(E(1469)), ['non', 'oui'], 0, 'Le voisin a senti la fumée. EN: the neighbour smelled it.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-ordre', label: 'L’ordre', targets: ['si-second-conditionnel'],
      questions: [
        mc('Quand faut-il une virgule ?', ['quand si ouvre la phrase', 'quand le résultat ouvre la phrase'], 0, 'Elle ferme la moitié si qui ouvre. EN: it closes a leading si half.', 'a7-cartes'),
        tI('Retourne la phrase.', fr(E(1482)), fr(E(1481)), 'Les temps ne bougent pas. EN: the tenses stay.', 'a7-construire'),
        tI('Retourne la phrase.', fr(E(1483)), 'Si nous avions été invités, nous serions venus.', 'Si devant : une virgule, les mêmes temps. EN: same tenses.', 'a7-construire', ['Si nous avions été invitées, nous serions venues.']),
        eS('Personne ne serait parti si la réunion aurait commencé à l’heure.', fr(E(1486)), 'En second, si garde le plus-que-parfait. EN: si keeps the pluperfect in second place.', 'a7-erreurs'),
        mc('Quand tu retournes la phrase, les temps changent-ils ?', ['non', 'oui'], 0, 'Chaque moitié garde son temps. EN: each half keeps its tense.', 'a7-check'),
        tI('Complète la moitié si, placée en second.', 'Ils auraient signé si le prix (baisser).', fr(E(1488)), 'Plus-que-parfait derrière si. EN: pluperfect after si.', 'a7-ecoute'),
        mc('Laquelle suit la ponctuation la plus courante ?', ['Elle aurait gagné si elle ne s’était pas blessée.', 'Elle aurait gagné, si elle ne s’était pas blessée.'], 0, 'Le résultat devant : le plus souvent, pas de virgule. EN: result first, usually no comma.', 'a7-erreurs'),
        lC('Écoute. Par quoi commence la phrase ?', fr(E(1483)), ['par le résultat', 'par la condition'], 0, 'Nous serions venus ouvre la phrase. EN: the result opens.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-concession', label: 'Même si, sauf si', targets: ['meme-si-condition'],
      questions: [
        mc('« Même si j’avais su, je serais venu. » Le savoir aurait-il changé le résultat ?', ['non', 'oui'], 0, 'Même si : le même résultat. EN: the same result.', 'a8-cartes'),
        mc('« Même s’il avait plu, le match a eu lieu. » A-t-il plu ?', ['oui', 'non'], 0, 'Un passé composé derrière : un fait réel concédé. EN: a real fact.', 'a8-table'),
        tI('Complète après même si.', 'Même si nous (courir), nous n’aurions pas eu le bus.', fr(E(1498)), 'Même si suit la règle de si. EN: même si follows the si rule.', 'a8-construire'),
        tI('Complète après sauf si.', 'Rien n’aurait changé, sauf si quelqu’un (prévenir) la mairie à temps.', fr(E(1501)), 'Sauf si + plus-que-parfait. EN: sauf si + pluperfect.', 'a8-piege'),
        eS('Elle avait promis de venir, sauf s’il neige.', fr(E(1500)), 'Dans un récit au passé : neigeait. EN: in a past narrative, neigeait.', 'a8-piege'),
        mc('« Je n’aurais jamais quitté Lyon, sauf si on m’avait proposé un poste à Montréal. » Que nomme sauf si ?', ['la seule exception', 'une concession', 'une cause certaine'], 0, 'La seule condition qui aurait tout changé. EN: the one exception.', 'a8-cartes'),
        eS('Même si j’aurais su, je serais venu.', fr(E(1494)), 'Même si est un si : j’avais su. EN: même si is still si.', 'a8-piege', ['Même si j’avais su, je serais venue.']),
        lC('Écoute Karine. Si elle avait su qu’il pleuvrait autant, serait-elle restée chez elle ?', 'Même si j’avais su qu’il pleuvrait autant, je serais venue.', ['non', 'oui'], 0, 'Même si : elle serait venue de toute façon. EN: she would have come anyway.', 'a8-texte'),
      ],
    },
    {
      id: 'r9-pieges', label: 'Les pièges', targets: ['si-aurais'],
      questions: [
        eS('Si j’aurais su, je ne serais pas venu.', fr(E(1508)), 'La faute célèbre : si j’avais su. EN: the famous error.', 'a9-cartes', ['Si j’avais su, je ne serais pas venue.']),
        mc('« Il m’a demandé si j’avais fini le rapport. » Est-ce une hypothèse ?', ['non, une question rapportée', 'oui, sur le passé'], 0, 'Un verbe de question devant : si veut dire whether. EN: si means whether.', 'a9-trier'),
        mc('« Je me demandais si elle aurait le temps. » Cette phrase est-elle correcte ?', ['oui, ce si veut dire whether', 'non, jamais de conditionnel après si'], 0, 'La règle dure ne vise que le si de condition. EN: the hard rule covers conditions only.', 'a9-table'),
        tI('Écris le résultat, au conditionnel passé. La personne qui parle est une femme.', 'Je (venir) avec plaisir si j’avais été libre.', fr(E(1510)), 'Serais, avec un s, et venue avec un e. EN: serais, with an s.', 'a9-piege'),
        tI('Complète : une habitude d’enfance.', 'Quand j’étais petit, si j’avais fini mes devoirs, j’(avoir) le droit de sortir.', fr(E(1518)), 'Si veut dire chaque fois que : une habitude, à l’imparfait. EN: a habit, in the imparfait.', 'a9-erreurs'),
        eS('Elle voulait savoir que nous avions déjà mangé.', fr(E(1513)), 'Une question rapportée prend si. EN: a reported question takes si.', 'a9-erreurs'),
        tI('Complète la concordance.', 'Si j’avais su que tu (être) malade, je serais passé te voir.', fr(E(1520)), 'Après si j’avais su que : l’imparfait. EN: the imparfait after si j’avais su que.', 'a9-erreurs', ['Si j’avais su que tu étais malade, je serais passée te voir.']),
        lC('Écoute. Cette phrase fait-elle une hypothèse ?', fr(E(1515)), ['non, elle rapporte une consigne', 'oui'], 0, 'Un imparfait derrière : une consigne réelle, rapportée. EN: a reported rule.', 'a9-histoire'),
      ],
    },
    {
      id: 'r10-histoire', label: 'Refaire l’histoire', targets: ['uchronie-plate'],
      questions: [
        mc('Qu’est-ce qu’une uchronie ?', ['un récit qui change un fait réel et imagine ses suites', 'un récit de science-fiction sur le futur'], 0, 'Un fait réel changé, puis ses suites. EN: one real fact changed.', 'a10-lecture'),
        mc('Pourquoi la compagnie a-t-elle choisi Saint-Aubin ?', ['parce que le terrain y était plus plat', 'parce que la vue y était plus belle', 'parce que le village était plus grand'], 0, 'Un détail, un terrain plat, a tout décidé. EN: a flat piece of land decided it.', 'a10-lecture'),
        tI('Continue la chaîne.', 'Si l’usine (ne pas ouvrir), les familles seraient parties vers la ville.', fr(E(1524)), 'Ouvrir prend avoir ; la négation entoure l’auxiliaire. EN: ouvrir takes avoir.', 'a10-construire'),
        tI('Complète le résultat.', 'Si le pont avait cédé, des dizaines de familles (être) coupées du monde.', fr(E(1532)), 'Être au conditionnel passé : auraient été. EN: auraient été.', 'a10-ecoute'),
        mc('« Avec des si, on mettrait Paris en bouteille. » Pourquoi le dit-on ?', ['pour rappeler que les hypothèses ne changent pas les faits', 'pour encourager à rêver'], 0, 'On peut tout imaginer, et rien ne change. EN: nothing changes.', 'a10-construire'),
        eS('Si ma grand-mère n’avait pas émigré, je ne serai jamais né ici.', fr(E(1526)), 'Serais, avec un s. EN: serais, with an s.', 'a10-exemples', ['Si ma grand-mère n’avait pas émigré, je ne serais jamais née ici.']),
        tI('Pose la question qui ouvre une uchronie.', 'Et si le train (ne jamais arriver) ?', fr(E(1530)), 'Et si + plus-que-parfait, sans résultat. EN: et si + pluperfect, no result.', 'a10-exemples'),
        lC('Écoute. Est-elle devenue chirurgienne ?', fr(E(1529)), ['non', 'oui'], 0, 'Elle n’a pas choisi la médecine. EN: she did not choose medicine.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Recyclage : le B1 et le B2', targets: ['paire-b1-oubliee'],
      questions: [
        mc(`Rappel de ${SI_B1_REF} : « Si j’ai le temps, je passerai. » Que dit cette paire ?`, ['ça peut arriver', 'ce n’est pas le cas', 'ça n’a pas eu lieu'], 0, 'Présent devant, futur derrière : un possible. EN: a real possibility.', 'a2-paires'),
        tI(`Rappel de ${SI_B1_REF} : la paire irréelle.`, 'Si tu (avoir) le temps, tu pourrais venir avec nous.', fr(B110(1203)), 'Imparfait devant, conditionnel derrière. EN: imparfait, then conditional.', 'a2-table'),
        eS('Si j’avais le temps hier, je serais venu.', 'Si j’avais eu le temps hier, je serais venu.', 'Hier : le plus-que-parfait. EN: yesterday needs the pluperfect.', 'a2-erreurs', ['Si j’avais eu le temps hier, je serais venue.']),
        mc(`Rappel de ${PQP_REF} : le plus-que-parfait de partir, avec nous ?`, ['nous étions partis', 'nous avions partis', 'nous serions partis'], 0, 'Être à l’imparfait, puis le participe accordé. EN: être in the imparfait.', 'a3-cartes'),
        mc(`Rappel de ${COND_PASSE_REF} : le conditionnel passé de voir, avec je ?`, ['j’aurais vu', 'j’avais vu', 'j’aurai vu'], 0, 'Avoir au conditionnel, puis vu. EN: avoir in the conditional.', 'a4-cartes'),
        tI(`Rappel de ${DISCOURS_REF} : rapporte la question.`, '« As-tu reçu mes photos ? » Elle voulait savoir...', fr('fr.b1.paroles-rapportees.1180'), 'Si pour la question, plus-que-parfait pour le passé. EN: si for the question.', 'a9-cartes', ['Elle voulait savoir si j’avais reçu ses photos.']),
        mc(`Rappel de ${CONCESSION_REF} : même si pose-t-il une condition ?`, ['non, il concède : le résultat ne change pas', 'oui, comme si'], 0, 'Même si pèse deux faits. EN: même si concedes.', 'a8-cartes'),
        lC(`Rappel de ${SI_B1_REF} : écoute. Le locuteur s’attend-il à un car complet ?`, fr(B110(1205)), ['non', 'oui'], 0, 'L’imparfait après si : une hypothèse qu’on n’attend pas, ou qui n’est pas le cas. EN: not expected, or not the case.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r12-examen', label: 'Format examen : DELF B2 et TCF', targets: ['recit-incoherent'],
      questions: [
        lC('Compréhension orale, type DELF B2 : que pense la narratrice de son choix ?', 'Avec le recul, je ne regrette rien. Si c’était à refaire, je referais tout.', ['elle ne le regrette pas', 'elle le regrette', 'elle hésite encore'], 0, 'Je ne regrette rien, je referais tout. EN: she regrets nothing.', 'a11-lecture'),
        mc('Lecture, type DELF B2 : « Même si j’avais su ce qui m’attendait, je serais montée dans l’avion » signifie que...', ['les difficultés n’auraient pas changé sa décision', 'elle ignorait tout du Canada', 'elle regrette son départ'], 0, 'Même si : le résultat aurait été le même. EN: same decision.', 'a11-lecture'),
        mc('Lecture, type DELF B2 : quelle phrase du modèle dit ce qui s’est vraiment passé ?', ['Ce soir-là, j’ai raté le train de 17 h 10.', 'Si j’avais écouté mes peurs, je serais restée chez moi.', 'Qui sait ce que je serais devenue si j’étais restée à Lyon ?'], 0, 'Un passé composé, pas une hypothèse. EN: a passé composé states a fact.', 'a11-lecture'),
        tI('Phrase à compléter, type TCF.', 'Si j’avais su que le magasin fermait à midi, j’y (aller) plus tôt.', 'Si j’avais su que le magasin fermait à midi, j’y serais allé plus tôt.', 'Aller prend être : serais allé. EN: aller takes être.', 'a4-cartes', ['Si j’avais su que le magasin fermait à midi, j’y serais allée plus tôt.']),
        mc('Phrase à compléter, type TCF : « Nous ... le match si l’arbitre n’avait pas sifflé ce penalty. »', ['aurions gagné', 'gagnerions', 'avions gagné', 'aurons gagné'], 0, 'Le résultat d’hier : conditionnel passé. EN: the past result.', 'a7-cartes'),
        mc('Phrase à compléter, type TCF : « Si tu ... plus tôt, tu aurais vu la fin du film. »', ['étais arrivé', 'serais arrivé', 'arriverais', 'es arrivé'], 0, 'Derrière si, le plus-que-parfait. EN: the pluperfect after si.', 'a3-cartes'),
        eS('Si je n’aurais pas raté ce train, je ne serais jamais entrée dans ce café.', fr(E(1538)), 'Derrière si, jamais de conditionnel. EN: never a conditional after si.', 'a11-mission'),
        tI('Production écrite : écris la conclusion d’un récit.', 'Avec le recul, je ne (regretter) rien.', fr(E(1541)), 'Retour au présent pour conclure. EN: back to the present to conclude.', 'a11-scenario'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. Each closed question's options are
 *  ROTATED, `correct` moved in step, onto the least-used slot so far. The
 *  option set and the right answer are unchanged. As b2.22 does. */
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
    { front: 'la paire du passé', back: 'si + plus-que-parfait, puis conditionnel passé', say: fr(E(1400)) },
    { front: 'le cran', back: 'les deux moitiés reculent ensemble', say: fr(E(1412)) },
    { front: 'avoir ou être après si', back: 'comme au passé composé', say: fr(E(1426)) },
    { front: 'le résultat', back: 'aurais, serais : avec un s', say: fr(E(1443)) },
    { front: 'le reproche adouci', back: 'je dans le résultat', say: fr(E(1463)) },
    { front: 'le soulagement', back: 'une négation retournée, sans + nom', say: fr(E(1467)) },
    { front: 'le résultat en tête', back: 'le plus souvent sans virgule, les mêmes temps', say: fr(E(1481)) },
    { front: 'même si, sauf si', back: 'rien n’aurait changé, sauf une chose', say: fr(E(1499)) },
    { front: 'pas une hypothèse', back: 'demander si, dire que si, chaque fois que', say: fr(E(1512)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Un cran plus loin',
  body: `${REFRAME} Tu montes la paire du passé sans y penser, tu la retournes pour lire les faits, et tu t’en sers pour regretter, reprocher, dire merci et refaire l’histoire. Tu sais aussi que certains si + plus-que-parfait n’imaginent rien. ${Cap(MIXTE_REF)} mélange les deux temps : une cause passée, une conséquence présente. EN: Next, a past cause with a present result: the mixed pairs.`,
  points: [
    'Après si : le plus-que-parfait, jamais le conditionnel.',
    'Dans le résultat : aurais ou serais, avec un s.',
    'La paire dit le contraire des faits.',
    'Regarde autour de si avant de décider que c’est une hypothèse.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'inverse'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ta mission',
    opener: {
      line: "À toi de raconter un tournant, ce qui s’est passé et ce qui aurait pu se passer : ici tu écris ton récit. EN: Your turn to tell a turning point, what happened and what might have: here you write your story.",
      imageRef: 'lessons/si-irreel-passe/act11.jpg',
    },
    sections: [],
    milestone: "Tu as raconté le tournant d’une vie avec ses si, et passé l’examen : douze rounds, quatre-vingt-seize questions. EN: You told a turning point with its ifs and sat the exam: twelve rounds, ninety-six questions.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-parler', 'a11-cheat', 'a11-progress', 'a11-quiz', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS (layer deep: teach and table only). Every sheet is
 *  reachable from a mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-paires', 'Les trois paires', ['le système', 'le cran', 'lire les faits'], [
    teach('sheet-paires-teach', 'Un système, trois distances',
      `${REFRAME} ${Cap(SI_B1_REF)} t’a appris qu’une phrase avec si est une paire : « ${B110_REFRAME} » Cette leçon recule la paire d’un cran. Les deux moitiés bougent ensemble, et, avec un si simple, la paire du passé dit le contraire des faits. EN: ${REFRAME_EN}`),
    table('sheet-paires-table', 'Les trois paires', ['Après si', 'Le résultat', 'Ce que ça dit', 'Exemple'], [
      ['présent', 'futur', 'ça peut arriver', fr(B110(1204))],
      ['imparfait', 'conditionnel', 'pas le cas maintenant', fr(B110(1205))],
      ['plus-que-parfait', 'conditionnel passé', 'pas arrivé', fr(E(1414))],
      ['plus-que-parfait', 'conditionnel présent', `la paire mixte, ${MIXTE_REF}`, 'Si j’avais accepté ce poste, je vivrais à Genève.'],
      ['conditionnel', 'rien', 'interdit', 'Si j’aurais su : la faute célèbre.'],
    ]),
    table('sheet-paires-faits', 'Retourner la paire', ['Tu lis', 'Les faits'], [
      [fr(E(1400)), 'Je n’ai pas vérifié l’horaire, et j’ai raté le train.'],
      [fr(E(1403)), 'Le café n’était pas plein, et je ne suis pas restée sur le quai.'],
      [fr(E(1467)), 'Tu m’as appelé, et je n’ai pas raté le train.'],
      [fr(E(1449)), 'Vous ne m’avez pas écouté, et vous avez perdu votre argent.'],
    ]),
  ]),
  sheet('sheet-formes', 'Monter les deux moitiés', ['la condition', 'le résultat', 'négation et pronoms'], [
    teach('sheet-formes-teach', 'L’auxiliaire décide',
      `Dans les deux moitiés, l’auxiliaire est celui du passé composé : avoir pour la plupart des verbes, être pour une courte liste (aller, venir, partir, arriver, rester, tomber, naître...) et pour les pronominaux. Dans la moitié si, il se met à l’imparfait ; dans le résultat, au conditionnel, avec un s. Les formes elles-mêmes sont celles de ${PQP_REF} et de ${COND_PASSE_REF}. EN: the passé composé auxiliary, imparfait in the si half, conditional in the result.`),
    table('sheet-formes-table', 'Les deux moitiés', ['Verbe', 'Après si', 'Le résultat'], [
      ['réserver (avoir)', 'si nous avions réservé', 'nous aurions réservé'],
      ['arriver (être)', 'si elle était arrivée', 'elle serait arrivée'],
      ['se lever (être)', 'si vous vous étiez levés', 'vous vous seriez levés'],
      ['pouvoir', 'si tu avais pu', 'tu aurais pu'],
      ['devoir', 'si nous avions dû', 'nous aurions dû'],
      ['être', 'si j’avais été', 'j’aurais été'],
    ]),
    table('sheet-formes-autour', 'Autour de l’auxiliaire', ['Élément', 'Place', 'Exemple'], [
      ['ne... pas', 'autour de l’auxiliaire', 'si je n’avais pas su'],
      ['pronoms', 'devant l’auxiliaire', 'si tu me l’avais dit'],
      ['ne... jamais', 'autour de l’auxiliaire', 'je ne serais jamais né'],
      ['accord avec être', 'sur le participe', 'si elle était arrivée'],
      ['le s du résultat', 'toujours', 'j’aurais, jamais j’aurai'],
    ]),
  ]),
  sheet('sheet-sens', 'Regret, reproche, soulagement', ['les trois messages', 'sans + nom', 'j’ai failli'], [
    teach('sheet-sens-teach', 'Une paire, trois messages',
      "La même paire dit un regret à la première personne, un reproche à tu ou à vous, un soulagement quand elle est négative. Pour adoucir un reproche, mets-toi dans le résultat. Sans + nom remplace une moitié si négative ; j’ai failli raconte ce qui a presque eu lieu. EN: one pair, three messages, and two shorter ways to say relief."),
    table('sheet-sens-table', 'Les messages', ['Message', 'Forme', 'Exemple'], [
      ['le regret', 'je + la paire', fr(E(1454))],
      ['si seulement', 'la moitié si seule', fr(E(1456))],
      ['le reproche', 'tu ou vous + la paire', fr(E(1457))],
      ['le reproche adouci', 'je dans le résultat', fr(E(1463))],
      ['le soulagement', 'la paire négative', fr(E(1467))],
      ['sans + nom', 'une condition négative', fr(E(1475))],
      ['presque arrivé', 'j’ai failli + infinitif', fr(E(1474))],
    ]),
  ]),
  sheet('sheet-ordre', 'L’ordre, même si, sauf si', ['l’ordre et la virgule', 'même si', 'sauf si'], [
    teach('sheet-ordre-teach', 'Les mêmes temps, où qu’ils soient',
      `L’ordre des moitiés est libre, et chacune garde son temps. Si devant : une virgule. Le résultat devant : le plus souvent, rien entre les deux. Même si et sauf si suivent la règle de si ; ${CONCESSION_REF} t’a donné même si : « ${B132_REFRAME} » EN: free order, same tenses; même si and sauf si follow the si rule.`),
    table('sheet-ordre-table', 'L’ordre et la virgule', ['Ordre', 'Ponctuation', 'Exemple'], [
      ['si devant', 'une virgule', fr(E(1482))],
      ['résultat devant', 'aucune', fr(E(1481))],
      ['question', 'aucune', fr(E(1489))],
      ['inversion', 'aucune', fr(E(1490))],
    ]),
    table('sheet-ordre-concession', 'Même si et sauf si au passé', ['Début', 'Suite', 'Ce que ça dit', 'Exemple'], [
      ['même si + PQP', 'conditionnel passé', 'rien n’aurait changé', fr(E(1494))],
      ['même si + PQP', 'passé composé', 'un fait réel concédé', fr(E(1496))],
      ['sauf si + PQP', 'conditionnel passé', 'la seule exception', fr(E(1499))],
      ['sauf si + imparfait', 'dans un récit', 'une annonce rapportée', fr(E(1500))],
    ]),
  ]),
  sheet('sheet-pieges', 'Les pièges et la relecture', ['les fautes', 'les faux amis', 'la relecture'], [
    teach('sheet-pieges-teach', 'Regarde autour de si',
      `Deux fautes : si j’aurais su, et je serai venu. Et trois faux amis, où si + plus-que-parfait n’imagine rien : après un verbe de question (${DISCOURS_REF}), dans une consigne rapportée, dans une habitude passée. Avant de décider que c’est une hypothèse, regarde devant si, puis derrière. EN: two errors, three false friends; look around si.`),
    table('sheet-pieges-table', 'Reconnaître', ['Tu lis', 'Ce que c’est', 'Exemple'], [
      ['si j’aurais su', 'une faute', fr(E(1508))],
      ['je serai venu', 'un futur antérieur', fr(E(1510))],
      ['demander si + PQP', 'une question rapportée', fr(E(1512))],
      ['dire que si + PQP, imparfait', 'une consigne rapportée', fr(E(1515))],
      ['si + PQP, imparfait', 'une habitude passée', fr(E(1518))],
      ['se demander si + conditionnel', 'une question, permise', fr(E(1522))],
    ]),
    table('sheet-pieges-relecture', 'La relecture de ton récit', ['À vérifier', 'Comment'], [
      ['les faits sont là', 'un passé composé raconte le tournant'],
      ['chaque si', 'un plus-que-parfait derrière lui'],
      ['chaque résultat', 'aurais ou serais, avec un s'],
      ['l’auxiliaire', 'celui du passé composé'],
      ['un même si ou un sauf si', 'au moins une fois'],
      ['la longueur', '180 à 250 mots'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS and ERROR TRIGGERS
 * ══════════════════════════════════════════════════════════════════════════ */

/** One per error trigger, each the resolving target of exactly one quiz
 *  round. Not in `sections`: a learner who never trips one never sees it. */
const DRILL_LIST: LessonDrill[] = [
  { id: 'd-passe', title: 'Maintenant ou hier', format: 'sort' as const, coach: 'Deux piles : ce qui manque aujourd’hui, ce qui a manqué hier. EN: sort by today or yesterday.', buckets: ['maintenant', 'hier'], items: [E(1401), E(1400), B110(1203), E(1413), B110(1205), E(1414)], audio: AUDIO },
  { id: 'd-paires', title: 'Trois distances', format: 'sort' as const, coach: 'Trois piles : possible, pas le cas, pas arrivé. EN: three piles by distance from the real.', buckets: ['possible', 'pas le cas', 'pas arrivé'], items: [E(1420), E(1421), E(1422), E(1417), E(1418), E(1419)], audio: AUDIO },
  { id: 'd-condition', title: 'L’auxiliaire après si', format: 'mcq' as const, coach: 'Mets le verbe au passé composé dans ta tête, puis l’auxiliaire à l’imparfait. EN: think passé composé, then imparfait.', q: 'Si elle ... à l’heure, elle aurait vu le début.', opts: ['était arrivée', 'avait arrivé'], correct: 0, why: 'Elle est arrivée, donc elle était arrivée. EN: arriver takes être.', items: [E(1425), E(1426), E(1427), E(1428), E(1429), E(1434)], audio: AUDIO },
  { id: 'd-resultat', title: 'Le s du résultat', format: 'mcq' as const, coach: 'Le résultat d’hier prend le s du conditionnel. EN: the past result takes the s.', q: 'Si nous avions su, nous ... plus tôt.', opts: ['serions partis', 'serons partis'], correct: 0, why: 'Serons partis est un futur antérieur. EN: serons is a future.', items: [E(1440), E(1442), E(1443), E(1444), E(1447), E(1448)], audio: AUDIO },
  { id: 'd-regret', title: 'Regretter, reprocher', format: 'flashcard' as const, coach: 'Pour chaque carte, dis qui porte la faute, puis adoucis-la si c’est un reproche. EN: say who is to blame, then soften it.', items: [E(1454), E(1455), E(1457), E(1459), E(1463), E(1464)], audio: AUDIO },
  { id: 'd-soulagement', title: 'Évité ou arrivé', format: 'sort' as const, coach: 'Retourne chaque paire : le pire a-t-il eu lieu ? EN: turn each pair over.', buckets: ['évité', 'arrivé'], items: [E(1469), E(1470), E(1467), B110(1354), E(1449), E(1472)], audio: AUDIO },
  { id: 'd-ordre', title: 'Si en second', format: 'mcq' as const, coach: 'Où que soit si, il garde son plus-que-parfait. EN: si keeps its pluperfect anywhere.', q: 'J’aurais accepté si tu me l’... demandé.', opts: ['aurais', 'avais'], correct: 1, why: 'Plus-que-parfait derrière si, même en second. EN: pluperfect after si.', items: [E(1481), E(1482), E(1483), E(1484), E(1486), E(1488)], audio: AUDIO },
  { id: 'd-concession', title: 'Même si reste un si', format: 'mcq' as const, coach: 'Même si et sauf si suivent la règle de si. EN: they follow the si rule.', q: 'Même si j’... su, je serais venu.', opts: ['avais', 'aurais'], correct: 0, why: 'Jamais de conditionnel derrière même si. EN: no conditional after même si.', items: [E(1494), E(1495), E(1496), E(1498), E(1499), E(1501)], audio: AUDIO },
  { id: 'd-pieges', title: 'Regarde devant si', format: 'mcq' as const, coach: 'Un verbe de question devant : si veut dire whether. EN: a question verb in front means whether.', q: 'Il m’a demandé ... j’avais fini le rapport.', opts: ['si', 'que'], correct: 0, why: 'Une question rapportée prend si. EN: a reported question takes si.', items: [E(1508), E(1510), E(1512), E(1514), E(1515), E(1518)], audio: AUDIO },
  { id: 'd-histoire', title: 'La chaîne', format: 'flashcard' as const, coach: 'Pour chaque carte, dis d’abord ce qui s’est vraiment passé. EN: state the facts first.', items: [E(1523), E(1524), E(1525), E(1526), E(1532), E(1536)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Aujourd’hui ou hier', format: 'sort' as const, coach: 'Deux piles : la paire irréelle de la leçon 10 du B1, et celle du passé. EN: the B1 unreal pair or the past pair.', buckets: ['aujourd’hui', 'hier'], items: [B110(1362), B110(1363), B110(1201), E(1412), B110(1203), E(1413)], audio: AUDIO },
  { id: 'd-recit', title: 'Le récit, phrase par phrase', format: 'flashcard' as const, coach: 'Pour chaque phrase, dis si c’est un fait, une hypothèse ou la conclusion. EN: fact, hypothesis or conclusion.', items: [E(1537), E(1538), E(1539), E(1540), E(1541), E(1546)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'present-pour-passe', description: 'Uses the present-unreal pair for an event already over, so a regret about yesterday reads as a habit or a comment on now.', detectOn: ['a1-scene', 'a1-trier', 'a1-check', 'a11-mission'], drill: 'd-passe', retest: 'd-passe' },
  { id: 'cran-melange', description: 'Moves one half of the pair back and leaves the other, producing a past condition with a future or present-conditional result.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-paires', retest: 'd-paires' },
  { id: 'si-mal-monte', description: 'Builds the si half with the wrong auxiliary, a stray conditional, or the negation and pronouns outside the auxiliary.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-condition', retest: 'd-condition' },
  { id: 'resultat-futur', description: 'Writes the result without its conditional s (je serai venu, j’aurai pris) or with avoir for an être verb.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-resultat', retest: 'd-resultat' },
  { id: 'reproche-brut', description: 'Turns every past pair into a blunt reproach aimed at the other person, or breaks the pair under emotion.', detectOn: ['a5-choisir', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-regret', retest: 'd-regret' },
  { id: 'negation-mal-lue', description: 'Reads a negative past pair as a negative fact, so a relief (you called, I made it) is understood as a loss.', detectOn: ['a6-construire', 'a6-ecoute', 'a6-check'], drill: 'd-soulagement', retest: 'd-soulagement' },
  { id: 'si-second-conditionnel', description: 'Puts a conditional behind si when the result comes first, attracted by the conditional already in the sentence, or misplaces the comma.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-ordre', retest: 'd-ordre' },
  { id: 'meme-si-condition', description: 'Treats même si as a plain condition, or puts a conditional after même si or sauf si.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-concession', retest: 'd-concession' },
  { id: 'si-aurais', description: 'Writes the spoken « si j’aurais su », or reads a reported question, rule or habit with si + pluperfect as a hypothesis.', detectOn: ['a9-trier', 'a9-piege', 'a9-check', 'a11-mission'], drill: 'd-pieges', retest: 'd-pieges' },
  { id: 'uchronie-plate', description: 'Chains hypotheses without ever stating the real facts, so the reader cannot tell what happened.', detectOn: ['a10-construire', 'a10-ecoute', 'a10-check', 'a11-mission'], drill: 'd-histoire', retest: 'd-histoire' },
  { id: 'paire-b1-oubliee', description: 'Once the past pair is learned, uses it for everything and loses the present-unreal pair from lesson 10 in B1.', detectOn: ['a2-paires', 'a2-table', 'a11-mission'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'recit-incoherent', description: 'Writes a story where facts, hypotheses and conclusion are mixed, so the turning point never becomes clear.', detectOn: ['a11-mission', 'a11-plan', 'a11-scenario'], drill: 'd-recit', retest: 'd-recit' },
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

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-03-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b2-03-blogue': "Act 1 reading: Inès's blog, ONE VOICE, one take, a Lyon-born woman in her thirties who has lived in Montréal for ten years (a light Québec colour is welcome). Read as someone reading her own post aloud: amused, not nostalgic. The four si sentences at an even pace, the mother's line with a slight quotation lift.",
  'rec-b2-03-crayon': "Act 2 story: Mme Roussel and the learner at the Nantes hiking club, two voices, one take. The three coach lines about the coach (car) are read with IDENTICAL rhythm up to the comma, so that only the tenses differ.",
  'rec-b2-03-paires': "The four pair cards (act 2), one voice. Cards one to three are the same departure at three distances: read them at the same speed, with no helpful stress on pars, partais or étais parti.",
  'rec-b2-03-trois-ecoute': "REQUIRED FOR THE EAR MISSION (act 2): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The three pairs alternate and the only cue is the verb after si, so no line may be given extra emphasis.",
  'rec-b2-03-hotel': "Act 3 story: an Annecy hotel reception, two voices (a receptionist in her forties, polite and a little tired; the learner's partner), one take. The receptionist uses vous throughout; her three si lines are factual, never reproachful.",
  'rec-b2-03-condition': "The four si-half cards (act 3), one voice, level. The auxiliary (avions, était, s'était, n'avais pas) must be clearly audible in every card; do not swallow the ne of the negation.",
  'rec-b2-03-piege-condition': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace. The broken versions in promptSound are NEVER spoken.",
  'rec-b2-03-code': "Act 3 closing text: Élodie and the forgotten door code, ONE VOICE, one take, light and amused; the sister's quoted lines laughing but clear. A short pause before the final sentence about the cake.",
  'rec-b2-03-diner': "Act 4 story: the learner and Léo on Monday morning, two voices, one take, casual and friendly. Léo's three result lines must keep their -rais clear (serais, aurais, aurais).",
  'rec-b2-03-resultat': "The four result cards (act 4), one voice. Card four sets j'aurais pris beside je serais venu: read the final -ais as a clean open [ɛ], never as [e].",
  'rec-b2-03-resultat-ecoute': "REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, authored order, conversational speed. The learner answers what really happened from each line, so nothing may be dramatised.",
  'rec-b2-03-musee': "Act 4 closing text: the closed museum in Québec City, ONE VOICE, one take, a young Québécois speaker, wry and relaxed. Times read in full (dix-sept heures cinq).",
  'rec-b2-03-cafeteria': "Act 5 story: the learner and Sophie, the team lead, the day after a lost pitch, two voices, one take, calm and adult. Nobody raises their voice: the regret and the softened reproach are said at the same level.",
  'rec-b2-03-piege-regret': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The broken versions in promptSound are never spoken.",
  'rec-b2-03-courriel': "Act 5 closing text: Sophie's email to the team, ONE VOICE, one take, read as someone reading an email aloud: measured, warm, no drama. A pause after each paragraph.",
  'rec-b2-03-lausanne': "Act 6 story: the learner on the train at Lausanne and Nadia on the phone, two voices, one take. The learner slightly out of breath at first; Nadia amused. A Swiss (Vaud) voice for Nadia is welcome.",
  'rec-b2-03-chance': "The four relief cards (act 6), one voice, level. The ne... pas in cards one must be fully pronounced, because the card turns it over.",
  'rec-b2-03-chance-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, authored order. Seven lines are negative pairs and one (line seven) is positive: read them all identically so the learner decides from the words, not the tone.",
  'rec-b2-03-fumee': "Act 6 closing text: the forgotten saucepan, ONE VOICE, one take, a neutral narrator; the neighbour's quoted thanks warmer. Pause before the last sentence.",
  'rec-b2-03-concert': "Act 7 story: Hugo and Samuel the morning after a concert, two voices, one take, relaxed. When a si half opens a line, a small real pause at the comma; when the result opens, none.",
  'rec-b2-03-ordre': "The four order cards (act 7), one voice. Card one pauses at the comma, card two does not: that single difference is the teaching.",
  'rec-b2-03-ordre-ecoute': "REQUIRED FOR THE EAR MISSION (act 7): eight lines, ONE TAKE, ONE VOICE, authored order, conversational speed. The pause after a leading si half is the only cue for the order question, so it must be real and consistent.",
  'rec-b2-03-discours': "Act 7 closing text: Camille's farewell speech, ONE VOICE, one take, a woman in her forties, moved but steady, read as a short speech to colleagues: a breath before « Alors merci ».",
  'rec-b2-03-anniversaire': "Act 8 story: Inès and her mother at a tenth-anniversary dinner in Montréal, two voices, one take. The mother from Lyon, affectionate and teasing; Inès with a light Québec colour after ten years.",
  'rec-b2-03-concession': "The four même si / sauf si cards (act 8), one voice, level. Même and sauf are not stressed: the structure carries the meaning.",
  'rec-b2-03-piege-concession': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The broken versions in promptSound are never spoken.",
  'rec-b2-03-marathon': "Act 8 closing text: the Sherbrooke marathon in the rain, ONE VOICE, one take, a Québécois sports reporter, lively. Karine's quote brighter; the last sentence about her husband dry.",
  'rec-b2-03-messages': "Act 9 story: Awa and the learner rereading the day's messages in a Dakar office, two voices, one take. Awa (a Senegalese francophone voice) reads the three quoted sentences as quotations, slightly flatter than her own lines.",
  'rec-b2-03-pieges': "The four trap cards (act 9), one voice. Card one reads the CORRECT si j'avais su; the error is never spoken on this card.",
  'rec-b2-03-piege-pieges': "The audio step plays each card's CORRECT sentence. Six lines, one voice. « Si j'aurais su » and the other broken versions in promptSound are never spoken.",
  'rec-b2-03-diallo': "Act 9 closing text: M. Diallo's rule, ONE VOICE, one take, a narrator remembering school with affection. The film line « Si j'aurais su, j'aurais pas venu » IS read, as a quotation, in a child's comic tone, because the text marks it as the error.",
  'rec-b2-03-chronique': "Act 10 reading: the Saint-Aubin chronicle, ONE VOICE, one take, a Québécois local historian, measured, at natural radio-column speed. The title question read as a question; the dates read in full.",
  'rec-b2-03-uchronie-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, authored order, natural speed. The learner answers what really happened, so every line is read as plain narration, never as drama.",
  'rec-b2-03-courrier': "Act 10 closing text: Hélène's letter to the column, ONE VOICE, one take, a woman in her fifties from Trois-Rivières, warm and a little wistful; the proverb in her husband's tone, lightly.",
  'rec-b2-03-modele': "Act 11 reading: Inès's turning-point story, ONE VOICE, one take, the same voice as act 1, read as a writer reads her text back before handing it in. Pauses between the four paragraphs so the plan (facts, ifs, the decision, the conclusion) is audible.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 3',
  intro: 'Lesson 10 in B1 taught the si system as matched pairs and let you recognise « si j’avais su, j’aurais... » without building it. This lesson builds it until it is automatic: si + plus-que-parfait, then the conditionnel passé, both halves moved back one notch together. You set the three pairs side by side, build each half with the right auxiliary, and use the pair for a regret, a reproach (and a softened one), a relief, in either clause order, with même si and sauf si, and to rewrite history. You also learn the traps: « si j’aurais su », « je serai venu », and the si + plus-que-parfait that is not a hypothesis at all. The task: 180 to 250 words on a turning point in a life or a story.',
  skill: 'PE',
  grammarAssumed: [SI_B1_UNIT, DISCOURS_UNIT, CONCESSION_UNIT, PQP_UNIT, COND_PASSE_UNIT],
  grammarIntroduced: [
    'Building the past-unreal condition: si + plus-que-parfait with the conditionnel passé, as a pair moved back one notch from the present-unreal pair',
    'The meaning of the past pair: both halves state the opposite of the facts, and a negative pair announces a positive fact',
    'Auxiliary choice, agreement, negation and pronoun placement in both halves; aurais / serais against the futur antérieur aurai / serai',
    'Regret (first person, si seulement + plus-que-parfait), reproach (tu / vous) and the softened reproach with the speaker in the result',
    'Relief: the negative pair, sans + noun as a negative condition, j’ai failli + infinitive, heureusement que',
    'Either clause order with the past pair, the comma, questions and inversion (qu’aurais-tu fait si...), and the si half keeping its plus-que-parfait in second place',
    'Même si and sauf si about the past: concession and the one exception, and même si + plus-que-parfait with a real past (passé composé result)',
    'Si + plus-que-parfait that is not a hypothesis: reported questions, reported real conditions (sequence of tenses) and past habits',
    'Counterfactual history (uchronie) as a chain of past pairs, and the proverb « Avec des si, on mettrait Paris en bouteille »',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au B1, tu as appris à lire « si j’avais su, j’aurais... ». Ici, tu construis cette paire jusqu’à ce qu’elle vienne seule : la paire recule d’un cran, les deux moitiés ensemble. Tu t’en sers pour regretter, reprocher sans blesser, dire merci, refaire l’histoire, et tu évites les pièges célèbres. À la fin, tu racontes en 180 à 250 mots le tournant d’une vie.",
    minutes: 160,
    difficulty: 4,
    glyph: 'si',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: SI_PASSE_TERMS,
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

/** Kept for the tooling that calls it on every lesson; `task` is real now,
 *  so this is the lesson itself. */
export function lessonWithoutTask(): Lesson {
  return LESSON;
}

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, TEXTE_MODELE, dicteeFor };
