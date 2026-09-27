// b1.04.l1 « Passé composé ou imparfait : les paires » — the lesson.
// REBUILD v2, DRAFT, to RICH-LESSON-STANDARD.md on top of B1-PILOT-BRIEF.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is the draft type in `_task-section.ts`, not in schema.ts, so `sections` is
// `DraftSection[]` and the validators run through `lessonWithoutTask()`.
//
// THE B1 UNIT 1 CAPSTONE. b1.01 (formation), b1.02 (uses) and b1.03 (décor
// against action, cues as cues) are taught; their reframes are imported and
// quoted, never retyped.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · corpus rows released at the checkpoint)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading), name (cardDeck, examples
//   or tapTable), build (groupDrill, gated), choose (listening, hideLines,
//   meaning questions), trap (stepped trapDrill or commonErrors), check
//   (control-page groupDrill, gated) before the checkpoint.
//
//    1  Le malentendu              6   devais / dû in the wild, and the
//                                      nine pairs previewed                 8
//    2  Savoir                     7   savais / su, and « je savais nager » 18
//    3  Connaître                  7   connaissais / connu, the meeting and
//                                      the closed period                    18
//    4  Pouvoir                    7   pouvais / pu / n'ai pas pu           18
//    5  Vouloir                    7   voulais / voulu / n'ai pas voulu     18
//    6  Devoir                     8   devais / dû, and « il a dû oublier » 20
//    7  Avoir peur, être malade    7   avais peur / ai eu peur, était /
//                                      a été malade, and the other states   22
//    8  Falloir, croire, penser    6   fallait / a fallu, croyais / ai cru  18
//    9  Les indices                8   hier, pendant, depuis, ce jour-là,
//                                      each with its counterexample         20
//   10  Ton choix                  6   décor or action: style, not error    13
//   11  Ce que tu as vraiment dit  7   grammatical, and it says the wrong
//                                      thing                                15
//   12  Tout ensemble             10   reading, scenario, TASK (spoken),
//                                      practice, quiz, review, roundup      12
//
//   TOTAL 86 missions, 200 authored rows, 24 imported ids.
//
//   TESTS      one quiz, 11 rounds of 8 (88 questions), one round per act
//              from 2 to 11 plus a mixed round; every round carries its
//              errorTrigger and its remediation drill (11 of each). An act
//              check closes every act. The graded spoken `task` sits in act
//              12, before the progressCheck and the quiz.
//   SHEETS     five, and every one is LINKED from a mission by `sheetId`:
//              sheet-paires   a1-neuf, a2-paire, a3-paire, a4-paire,
//                             a5-paire, a6-paire, a6-table, a7-avoir,
//                             a7-etre, a8-falloir, a12-recap
//              sheet-negatif  a4-table, a5-refus
//              sheet-indices  a9-paires, a9-table, a9-contre
//              sheet-choix    a10-choix, a10-usages
//              sheet-erreurs  a11-erreurs
//   ART        `opener.imageRef` on all twelve acts, pointing at
//              `lessons/pc-imparfait-paires/actNN.jpg`. The prompts are in
//              `pc-imparfait-paires-image-prompts.md`; the refs are NOT
//              registered in lessonImages.ts (files first, per the standard).
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un seul verbe, deux temps : deux sens. »
//   EN: One verb, two tenses: two meanings.
//   The question it hands you: « Un état qui dure, ou un moment qui arrive ? »
//
//   Deliberately NOT b1.03's « L'imparfait pose le décor. Le passé composé
//   fait avancer le film. » That one is about the story; this one is about
//   the verb, and b1.03's is quoted verbatim in acts 9, 10 and 12.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the meaning-shift pairs, act by act; the negatives that assert
//           (n'ai pas pu, n'ai pas voulu); epistemic « il a dû »; the cues at
//           depth with a counterexample each; the speaker's choice; and error
//           analysis of grammatical-but-unintended tense.
//   QUOTES  b1.01, b1.02, b1.03 and a2.14 reframes, all imported.
//   LEAVES  formation (b1.01), uses of the imparfait (b1.02), the basic
//           contrast (b1.03), the plus-que-parfait and the conditional (B2).
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu everywhere in instruction and coach copy. Every learner-facing French
//   string that is not a title, a label or an answer carries English (`en`
//   field, or a final « EN: » sentence). Every `say` is French, spoken fr-FR.
//   Theme `recits-au-passe`, ids .301-.399 and .1200-.1399. A2 units cited as
//   « la leçon N de l'A2 », B1 units by French title (they have no seq yet).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 'coach-fr-FR' is still a proposed voice id.
//   2. The brief's « one tapTable in the flow » is broken deliberately: three
//      acts carry one each (pouvoir, devoir, the cues), because each is a
//      three-way split that a deck cannot hold on one screen. Six rows max
//      each, as the brief requires.
//   3. Chapter art: twelve prompts in `pc-imparfait-paires-image-prompts.md`.
//      The refs point at `lessons/pc-imparfait-paires/actNN.jpg` and are NOT
//      registered in lessonImages.ts (files first, per the standard).
//   4. « j'ai cru que » (a momentary false belief) is taught as correct in
//      act 8, against « je croyais que ». Worth a sheet row at B2?
//   5. Story and scene bubbles avoid « ? » and « ! » (same renderer risk).
//      Scenario, listening and reading keep French punctuation.
//   6. Validators run through `lessonWithoutTask()`: the draft `task` is
//      dropped from `sections` AND from act 12's section list, because
//      validateLesson refuses an act naming a section it cannot see.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LESSON_TITLE, LEVEL, E, Cap,
  REFRAME, REFRAME_EN, THE_TEST, THE_TEST_EN,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, SPEAKABLE_IMPORTS, SPEAKABLE_IDS, DICTEE_IDS, dicteeFor,
  B101_REFRAME, B102_REFRAME, B103_REFRAME, A214_REFRAME,
  B101_REF, B102_REF, B103_REF,
  SAVOIR_UNIT, SAVOIR_REF, MODAUX_UNIT, MODAUX_REF, PARTICIPES_UNIT, PARTICIPES_REF,
  PC_UNIT, PC_ETRE_UNIT, PRONOMINAUX_PC_UNIT,
} from './pc-imparfait-paires-corpus.ts';
import { PAIRES_TERMS } from './pc-imparfait-paires-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.04: no item ${id}`);
  return r;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

type ActDef = { act: LessonAct; sections: DraftSection[]; imports: string[] };

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE MALENTENDU
 * ══════════════════════════════════════════════════════════════════════════ */

/** BREAKDOWN, NOT RUDENESS. Nadia's « je devais venir » is heard as English
 *  « I had to come », so the listener reports that she came. Nobody is rude,
 *  nothing is mispronounced, and a wrong fact travels.
 *
 *  NO « ? » OR « ! » IN ANY BUBBLE (brief): Martin's question is narration. */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Je devais venir',
  frSub: 'Une réunion manquée',
  setting: { place: "La cafétéria d'un bureau d'ingénieurs", city: 'Montréal', time: '12 h 15', ambience: 'des plateaux, des conversations, une machine à café' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, mardi, à l'heure du dîner. Au Québec, le dîner, c'est le repas de midi. Nadia, une collègue de Lausanne, s'assoit à côté de toi. Ce matin, elle n'était pas à la réunion. EN: Nadia, a colleague from Lausanne, missed this morning's meeting.",
      size: 'md',
      audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: 'Désolée pour ce matin. Je devais venir à la réunion.',
      en: 'Sorry about this morning. I was supposed to come to the meeting.',
      respell: '[day-zoh-LAY poor suh mah-TEHⁿ · zhuh duh-VEH vuh-NEER ah lah ray-ü-NYOHⁿ]',
      stage: "Elle a l'air fatiguée. EN: She looks tired.",
      size: 'md', audio: REC('rec-b1-04-nadia'),
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Nadia',
      fr: "Mais l'école de mon fils a appelé à huit heures, et j'ai dû partir.",
      en: "But my son's school called at eight, and I had to leave.",
      respell: '[meh lay-KOL duh mohⁿ FEESS ah ah-PLAY ah üee-TUHR · ay ZHAY DÜ par-TEER]',
      stage: 'Elle regarde son téléphone. EN: She glances at her phone.',
      size: 'md', audio: REC('rec-b1-04-nadia'),
    },
    {
      kind: 'narration',
      text: "Tu as entendu « je devais », et dans ta tête, c'est I had to. Une heure plus tard, Martin, le chef d'équipe, veut savoir si Nadia était à la réunion. EN: An hour later the team lead asks whether Nadia was at the meeting.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu réponds à Martin. Quelle phrase dis-tu ? EN: Which sentence do you say?',
      size: 'lg',
      options: [
        { fr: 'Elle a dû venir, mais elle est partie tôt.', respell: '[el ah DÜ vuh-NEER · meh el eh par-TEE TOH]', en: 'She had to come, but she left early.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Elle devait venir, mais elle a dû partir.', respell: '[el duh-VEH vuh-NEER · meh el ah DÜ par-TEER]', en: 'She was supposed to come, but she had to leave.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Martin écrit : absente, une urgence. C'est exactement ce qui s'est passé. EN: Martin writes: away, an emergency.",
        breaks: "Martin écrit : présente, partie tôt. Demain, il demandera à Nadia le compte rendu d'une réunion où elle n'était pas. EN: Tomorrow he will ask her for the notes of a meeting she never attended.",
      },
    },
    {
      kind: 'break',
      heading: "« je devais » n'est pas I had to",
      // 41 words with the gloss. Core cap is 45.
      body: "je devais, c'est le plan : on ne sait pas si c'est arrivé. j'ai dû, c'est arrivé : elle est partie. L'anglais dit I had to pour les deux. EN: devais is the plan, outcome open; dû is what actually happened.",
      wrong: { fr: 'Elle a dû venir.', ipa: '/ɛ.la dy və.niʁ/', respell: '[el ah DÜ vuh-NEER]', en: 'She had to come, and came. Or: she must have come.' },
      right: { fr: 'Elle devait venir.', ipa: '/ɛl də.vɛ və.niʁ/', respell: '[el duh-VEH vuh-NEER]', en: 'She was supposed to come.' },
      coach: `${REFRAME} Le plan, c'est un état. Le départ, c'est un moment. EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Un seul petit mot, et Martin avait une information fausse. Les deux phrases étaient correctes : c'est le sens qui a changé. EN: Both sentences were correct French; only the meaning changed.",
      size: 'md',
    },
  ],
  closing: { text: `${REFRAME} EN: ${REFRAME_EN}`, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['resultat', 'etat', 'moment'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  frSub: REFRAME,
  goals: [
    { t: 'Dire ce qui est arrivé, pas seulement le plan', s: "je devais ou j'ai dû : la paire de la scène" },
    { t: 'Choisir entre neuf paires de verbes', s: 'savoir, connaître, pouvoir, vouloir, devoir, avoir, être, falloir, croire' },
    { t: 'Lire hier et pendant comme des indices', s: 'les deux temps sont souvent possibles' },
    { t: 'Raconter un plan raté, à voix haute', s: 'une à deux minutes, dans le dernier acte' },
  ],
  audio: AUDIO,
  say: `Voilà où tu vas. ${REFRAME}`,
};

/** MEET, at length: 150 words, seven pairs, before any rule. `questionsInModal`
 *  so the questions cannot be answered by scanning the text. Every glossary
 *  key appears in `text` VERBATIM and none is five words or more. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'De Dakar à Québec',
  frSub: 'Lis, puis réponds',
  text: "L'année dernière, je devais partir à Québec en septembre. Je voulais arriver avant l'hiver, parce que j'avais un peu peur du froid. Je ne connaissais personne là-bas, sauf une amie de mon oncle. Mais en août, j'ai su que mon visa n'était pas prêt. J'ai voulu appeler l'ambassade, mais la ligne était toujours occupée. Finalement, j'ai pu partir en novembre. À l'aéroport, il faisait moins vingt, et j'ai eu peur, je l'avoue. Je croyais que je n'allais jamais m'habituer. Mais le premier soir, j'ai connu Mathieu, le voisin d'en bas. Il habitait dans l'immeuble depuis dix ans et il savait tout : où acheter des bottes, comment prendre le bus. Il a dû me trouver un peu perdue, parce qu'il m'a invitée à souper. Je n'ai pas pu refuser.",
  glossary: [
    { word: "l'ambassade", en: 'the embassy', note: 'Le bureau du Canada à Dakar, pour les visas.' },
    { word: 'occupée', en: 'busy (a phone line)', note: "La ligne sonne occupé : quelqu'un parle déjà." },
    { word: 'moins vingt', en: 'minus twenty', note: 'Moins vingt degrés. Normal en novembre à Québec.' },
    { word: "je l'avoue", en: 'I admit it', note: 'De avouer : dire une chose difficile à dire.' },
    { word: "m'habituer", en: 'get used to it', note: "De s'habituer : trouver une chose normale, avec le temps." },
    { word: "d'en bas", en: 'downstairs', note: "Le voisin d'en bas habite à l'étage en dessous." },
    { word: 'des bottes', en: 'boots', note: "Pour la neige. Au Québec, on dit aussi des bottes d'hiver." },
    { word: 'souper', en: 'to have dinner', note: 'Au Québec, le souper est le repas du soir.' },
  ],
  questions: [
    { q: 'La narratrice est-elle partie en septembre ?', a: "Non. « je devais partir en septembre », c'est le plan. Ce qui est arrivé : « j'ai pu partir en novembre »." },
    { q: "« J'ai voulu appeler l'ambassade. » A-t-elle essayé ?", a: "Oui. j'ai voulu = j'ai essayé. Elle a appelé, mais la ligne était occupée." },
    { q: 'Connaissait-elle Mathieu avant son arrivée ?', a: "Non. « j'ai connu Mathieu » = je l'ai rencontré, le premier soir." },
    { q: "« Il a dû me trouver un peu perdue. » Mathieu l'a dit ?", a: "Non. C'est une supposition : il a dû = probablement. Elle le devine, parce qu'il l'invite." },
    { q: 'Trouve deux états et deux choses qui arrivent.', a: "États : j'avais peur, je ne connaissais personne, il savait tout. Ce qui arrive : j'ai su, j'ai eu peur, j'ai connu Mathieu." },
  ],
  audio: AUDIO,
  say: `Lis d'abord. La règle vient après. ${THE_TEST}`,
  terms: ['etat', 'moment'],
};

/** NOTICING, SCORED. The learner sorts the text's own verbs before any rule
 *  has been given: three groups, one gate each. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Ce que le texte a dit',
  frSub: 'Avant la règle',
  groups: [
    grp('Le plan, et ce qui est arrivé', [
      it(E(301), 'le plan'),
      it(E(302), 'et voilà ce qui est arrivé'),
      it(E(306), 'le départ, enfin'),
    ], chk(
      'Dans le texte, « je devais partir en septembre ». Est-elle partie en septembre ? EN: Did she leave in September?',
      ['Le verbe ne le dit pas.', "Oui, c'est sûr.", "Non, c'est sûr."],
      0,
      "je devais donne le plan, pas le résultat. C'est « j'ai pu partir en novembre » qui répond. EN: devais gives the plan; the outcome comes later.",
    )),
    grp('Ce que tu savais, ce que tu apprends', [
      it(E(305), 'un état : tu ne le savais pas'),
      it(E(318), 'un état'),
      it(E(319), 'un moment : la nouvelle arrive'),
    ], chk(
      "« En août, j'ai su que mon visa n'était pas prêt. » Quand l'a-t-elle appris ? EN: When did she find out?",
      ['Avant août.', 'En août.', 'Elle ne le sait pas encore.'],
      1,
      "j'ai su marque le moment où la nouvelle arrive. EN: su marks the moment the news arrives.",
    )),
    grp('Les rencontres et les essais', [
      it(E(307), 'tu as essayé'),
      it(E(308), 'la rencontre'),
      it(E(303), 'les deux temps dans une phrase'),
    ], chk(
      "« J'ai connu Mathieu le premier soir. » Ça veut dire : EN: It means:",
      ['Je le connaissais déjà.', "J'ai appris son nom.", 'Je l\'ai rencontré ce soir-là.'],
      2,
      "Au passé composé, connaître dit la rencontre. EN: connu is the meeting.",
    )),
  ],
  audio: AUDIO,
  say: `Tu as déjà tout vu dans le texte. ${THE_TEST}`,
  terms: ['etat', 'moment', 'resultat'],
};

/** NAME IT, in preview: the nine pairs on one screen, each with its English
 *  pair, so the learner knows the size of the lesson. The full table is in
 *  `sheet-paires`, and this mission LINKS to it. */
const A1_NEUF: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-neuf',
  layer: 'core',
  sheetId: 'sheet-paires',
  previewCount: 9,
  title: 'Les neuf paires',
  frSub: 'Un verbe, deux sens',
  examples: [
    { fr: "je savais · j'ai su", en: 'I knew · I found out', note: "acte 2 : l'état, puis la nouvelle" },
    { fr: "je connaissais · j'ai connu", en: 'I knew her · I met her', note: 'acte 3 : la rencontre' },
    { fr: "je pouvais · j'ai pu", en: 'I was able to · I managed to', note: 'acte 4 : le résultat' },
    { fr: "je voulais · j'ai voulu", en: 'I wanted · I tried, I decided', note: "acte 5 : l'essai" },
    { fr: "je devais · j'ai dû", en: 'I was supposed to · I had to, and did', note: 'acte 6 : le plan' },
    { fr: "j'avais peur · j'ai eu peur", en: 'I was scared · I got scared', note: 'acte 7 : le début' },
    { fr: 'il était malade · il a été malade', en: 'he was ill · he fell ill', note: 'acte 7 : la période' },
    { fr: 'il fallait · il a fallu', en: 'it was necessary · and it was done', note: 'acte 8 : le besoin' },
    { fr: "je croyais que · j'ai cru que", en: 'I thought (wrongly) · I thought for a moment', note: "acte 8 : l'idée fausse" },
  ],
  audio: AUDIO,
  say: `Neuf paires, un acte chacune ou presque. ${REFRAME}`,
  terms: ['etat', 'moment'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le sens', "Nadia dit : « Je devais venir. » Est-elle venue ? EN: Did she come?", ['La phrase ne le dit pas.', 'Oui.', 'Non.'], 0, "je devais donne le plan. EN: devais gives the plan, not the outcome."),
  ctl('La paire', "« J'ai dû partir à huit heures. » Est-ce que la personne est partie ? EN: Did the person leave?", ['Non.', 'Oui.', 'On ne sait pas.'], 1, "j'ai dû : obligé, et c'est fait. EN: had to, and did."),
  ctl('Attention', 'Ces deux phrases sont-elles correctes : « Hier, il pleuvait » et « Hier, il a plu » ? EN: Are both correct?', ['Seulement la première.', 'Seulement la deuxième.', 'Les deux.'], 2, "Les deux. hier est un indice, pas une règle : acte 9. EN: both; hier is a clue, not a rule."),
], ['resultat', 'indice']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le malentendu',
    opener: { line: "Une phrase correcte, une information fausse : tu vas voir comment un seul verbe peut dire deux choses. EN: A correct sentence and a wrong fact: how one verb says two different things.", imageRef: 'lessons/pc-imparfait-paires/act01.jpg' },
    sections: [],
    milestone: "Tu as vu « je devais » tromper un collègue, et tu as repéré sept paires dans un texte. EN: You saw « je devais » mislead a colleague and spotted seven pairs in a text.",
    estScreens: 26, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_NEUF, A1_CHECK],
  imports: ['fr.a2.verbes.607', 'fr.a2.marche.128'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — SAVOIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Two colleagues, and one of them has just found out. The pair sits in
 *  the dialogue before any rule. No « ? » or « ! » in a bubble. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Tu le savais',
  frSub: 'Deux collègues, une nouvelle',
  setting: "Un couloir, à Bruxelles. Claire arrive avec son café. EN: A corridor in Brussels.",
  bubbles: [
    { from: 'narrator', fr: 'Claire apprend que son collègue Malik change de service.', en: 'Claire learns that her colleague Malik is moving to another department.' },
    { from: 'coach', fr: 'Malik part au service technique. Tu le savais.', en: 'Malik is moving to the technical department. You knew.' },
    { from: 'user', fr: "Non, je ne le savais pas. Je l'ai su ce matin, comme toi.", en: "No, I didn't know. I found out this morning, like you." },
    { from: 'coach', fr: 'Moi, je le savais depuis lundi. Il me l’avait dit.', en: 'I knew since Monday. He had told me.', warn: "je savais : un état qui durait. EN: savais is a state that lasted." },
    { from: 'user', fr: "Donc tout le monde le savait, sauf moi.", en: 'So everyone knew, except me.' },
    { from: 'coach', fr: 'Tu l’as su avec deux jours de retard. Ce n’est pas grave.', en: 'You found out two days late. It is not a problem.', warn: "tu l'as su : le moment où la nouvelle arrive. EN: su marks the moment." },
  ],
  closing: { fr: 'je savais : avant. j’ai su : à ce moment-là.', en: 'savais: already. j’ai su: at that moment.' },
  audio: REC('rec-b1-04-claire'),
  say: `Écoute la différence. ${THE_TEST}`,
  terms: ['etat', 'moment'],
};

/** NAME IT. Four cards, and the fourth is the one nobody expects: savoir in
 *  the imparfait also covers « I could », a skill you had. */
const A2_PAIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-paire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'savoir : savais ou su',
  frSub: "l'état, puis la nouvelle",
  hint: `Cinq cartes. ${THE_TEST}`,
  audio: REC('rec-b1-04-savoir'),
  say: REFRAME,
  terms: ['etat', 'moment'],
  cards: [
    {
      head: 'Le test que tu as déjà',
      label: Cap(SAVOIR_REF),
      fr: 'savoir · connaître',
      body: `« ${A214_REFRAME} » Ce test choisit le verbe, et il marche toujours. Nouveau ici : le temps choisit le sens. EN: that test still picks the verb; now the tense picks the meaning.`,
    },
    {
      head: 'je savais',
      label: 'un état : tu le savais déjà',
      fr: "Je savais qu'elle partait.",
      sub: '[zhuh sah-VEH kel par-TEH]',
      body: "Le savoir était là avant l'histoire. Rien n'arrive dans la phrase. EN: the knowledge was already there; nothing happens.",
    },
    {
      head: "j'ai su",
      label: "un moment : tu l'apprends",
      fr: "Hier soir, j'ai su qu'elle partait.",
      sub: '[YEHR SWAHR · ZHAY SÜ kel par-TEH]',
      body: "La nouvelle arrive à un moment précis. En anglais, ce n'est plus I knew. EN: at one moment the news reaches you: I found out.",
    },
    {
      head: "je ne l'ai jamais su",
      label: 'et parfois, la nouvelle n’arrive pas',
      fr: "Je ne l'ai jamais su.",
      sub: '[zhuh nuh lay zhah-meh SÜ]',
      body: "À la forme négative aussi, le passé composé parle du moment : la nouvelle n'est jamais arrivée. EN: the negative still talks about the moment that never came.",
    },
    {
      head: 'je savais nager',
      label: 'un deuxième sens de savais',
      fr: 'Je savais nager à cinq ans.',
      sub: '[zhuh sah-VEH nah-ZHAY ah sehⁿ-KAHⁿ]',
      body: "savoir + verbe à l'imparfait, c'est une capacité que tu avais. En anglais : I could swim. EN: savoir plus a verb in the imparfait is a skill you had.",
    },
  ],
};

/** NAME IT, second screen: the same pair inside longer sentences, with the
 *  English pair marked on every line. */
const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Dans des phrases entières',
  frSub: 'Regarde le verbe anglais',
  examples: [
    { fr: 'Je savais où elle habitait.', en: 'I knew where she lived.', note: "un état : tu le savais déjà" },
    { fr: "J'ai su la vérité trop tard.", en: 'I found out the truth too late.', note: "un moment : la vérité arrive" },
    { fr: 'Il savait déjà tout.', en: 'He already knew everything.', note: 'déjà va avec l’état' },
    { fr: "Quand j'ai su la nouvelle, j'ai appelé ma sœur.", en: 'When I heard the news, I called my sister.', note: 'la nouvelle arrive, puis l’appel' },
    { fr: "On l'a su par un collègue.", en: 'We found out from a colleague.', note: 'par qui : la source de la nouvelle' },
    { fr: 'Tout le monde le savait, sauf moi.', en: 'Everyone knew, except me.', note: 'un état, partagé par tous' },
  ],
  audio: AUDIO,
  say: `Le verbe anglais change avec le temps français. ${REFRAME}`,
  terms: ['etat', 'moment'],
};

/** BUILD. Three gated groups: the forms, then the sentences, then a control
 *  page where the learner picks from the meaning alone. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les deux',
  frSub: 'Les formes, puis le sens',
  groups: [
    grp("L'imparfait : un état", [
      it(E(311), 'je'), it(E(312), 'tu'), it(E(313), 'il, elle, on'), it(E(314), 'nous'),
    ], chk(
      'nous savons au présent. Quelle est la forme de nous à l’imparfait ? EN: What is the nous imparfait?',
      ['nous savions', 'nous savons', 'nous avons su'],
      0,
      `sav- + ions. ${B101_REFRAME} EN: the stem comes from nous savons.`,
    )),
    grp('Le passé composé : un moment', [
      it(E(315), 'je'), it(E(316), 'il, elle, on'), it(E(317), 'nous'), it('fr.a2.verbes.604', 'et la phrase publiée'),
    ], chk(
      'Le participe de savoir, c’est : EN: The past participle of savoir is:',
      ['savu', 'su', 'savé'],
      1,
      `su, court et irrégulier. ${Cap(PARTICIPES_REF)} l'a donné. EN: su, short and irregular.`,
    )),
    grp('Et maintenant, le sens', [
      it(E(318), 'tu le savais déjà'), it(E(319), 'tu l’apprends'), it(E(322), 'un état, au négatif'), it(E(327), 'la nouvelle n’est jamais arrivée'),
    ], chk(
      "« Je ___ que tu étais malade. » Tu l'as appris ce matin. EN: You found out this morning.",
      ['ai su', 'savais'],
      0,
      "L'information arrive ce matin : j'ai su. EN: the news arrived this morning.",
    )),
  ],
  audio: AUDIO,
  say: `Les formes d'abord, le sens ensuite. ${THE_TEST}`,
  terms: ['etat', 'moment'],
};

/** CHOOSE. `hideLines: true`, or ListeningView prints fr AND en beside every
 *  PlayDot and the questions are answerable by reading. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui savait quoi',
  frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(318)), ln(E(319)), ln(E(324)), ln(E(321)), ln(E(326)), ln(E(328)), ln(E(322)), ln(E(325)),
  ],
  questions: [
    { q: 'Première phrase : la personne l’a appris à ce moment-là ? EN: Did the person find out at that moment?', opts: ['Oui.', 'Non, elle le savait déjà.'], correct: 1, why: "je savais : un état. EN: savais is a state." },
    { q: 'Deuxième phrase : quand la nouvelle est-elle arrivée ? EN: When did the news arrive?', opts: ['Depuis longtemps.', 'On ne sait pas.', 'Hier soir.'], correct: 2, why: "Hier soir, j'ai su : le moment est dans la phrase. EN: the moment is in the sentence." },
    { q: 'Cinquième phrase : ça veut dire : EN: It means:', opts: ['Un collègue nous l’a appris.', 'Nous le savions depuis longtemps.'], correct: 0, why: "l'a su : le moment où la nouvelle arrive, et par qui. EN: how the news reached us." },
    { q: '« Je ne l’ai jamais su. » Est-ce que la personne sait, aujourd’hui ? EN: Does the person know today?', opts: ['Oui.', 'Non.'], correct: 1, why: "La nouvelle n'est jamais arrivée. EN: the news never came." },
    { q: 'Dernière phrase : ça parle de : EN: It talks about:', opts: ['une capacité', 'une nouvelle', 'un refus'], correct: 0, why: "savoir + verbe à l'imparfait : une capacité que tu avais. EN: a skill you had." },
  ],
  audio: REC('rec-b1-04-savoir-ecoute'),
  say: `Ferme les yeux si tu veux. ${THE_TEST}`,
  terms: ['etat', 'moment'],
};

/** TRAP. English has one « knew », so the reflex picks the wrong tense. Every
 *  `promptSound` here is CORRECT French that says the wrong thing.
 *  Stepped: rule > cards > audio > gated drill, and no `size` on a stepped
 *  trapDrill (the stacked shape hides the gate and the audio step). */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège de knew',
  frSub: 'Un mot anglais, deux phrases',
  rule: {
    title: 'I knew ne choisit pas pour toi',
    body: `L'anglais a une seule forme : I knew. Le français en a deux. Demande-toi si la nouvelle arrive dans ta phrase. ${THE_TEST} EN: English has one form; ask whether the news arrives in your sentence.`,
  },
  cards: [
    { promptLabel: 'Tu le savais depuis longtemps.', promptSound: "J'ai su qu'il mentait.", fr: "Je savais qu'il mentait.", ipa: '/ʒə sa.vɛ kil mɑ̃.tɛ/', tip: "Rien n'arrive : tu le savais déjà. EN: nothing arrives; you already knew." },
    { promptLabel: 'La nouvelle arrive à midi.', promptSound: 'À midi, je savais que le vol était annulé.', fr: "À midi, j'ai su que le vol était annulé.", ipa: '/a mi.di ʒe sy kə lə vɔl e.tɛ a.ny.le/', tip: "Une heure précise, donc le moment. EN: a precise time marks the moment." },
    { promptLabel: 'Tout le monde était au courant.', promptSound: 'Tout le monde l’a su, sauf moi.', fr: 'Tout le monde le savait, sauf moi.', ipa: '/tu lə mɔ̃d lə sa.vɛ so mwa/', tip: "Un état partagé, pas une nouvelle. EN: a shared state, not a piece of news." },
    { promptLabel: 'Tu ne l’as jamais appris.', promptSound: 'Je ne le savais jamais.', fr: "Je ne l'ai jamais su.", ipa: '/ʒə nə le ʒa.mɛ sy/', tip: "jamais + passé composé : la nouvelle n'est jamais arrivée. EN: the news never came." },
    { promptLabel: 'Une capacité d’enfant.', promptSound: "J'ai su nager à cinq ans.", fr: 'Je savais nager à cinq ans.', ipa: '/ʒə sa.vɛ na.ʒe a sɛ̃.kɑ̃/', tip: "Une capacité qui dure : l'imparfait. EN: a lasting skill takes the imparfait." },
    { promptLabel: 'Le moment où tu apprends.', promptSound: 'Quand je savais la nouvelle, j’ai appelé ma sœur.', fr: "Quand j'ai su la nouvelle, j'ai appelé ma sœur.", ipa: '/kɑ̃ ʒe sy la nu.vɛl ʒe a.ple ma sœʁ/', tip: "Deux moments qui se suivent. EN: two moments, one after the other." },
  ],
  drill: [
    { promptSay: "Hier soir, j'... que tu déménageais. (tu l'as appris hier)", opts: ['ai su', 'savais'], correct: 0 },
    { promptSay: 'Quand elle est entrée, il ... déjà la réponse.', opts: ['a su', 'savait'], correct: 1 },
    { promptSay: 'Je ne ... pas que le café fermait si tôt.', opts: ['savais', 'ai su'], correct: 0 },
    { promptSay: 'Nous ... la nouvelle par un collègue.', opts: ['savions', 'avons su'], correct: 1 },
    { promptSay: 'À dix ans, elle ... déjà parler trois langues.', opts: ['savait', 'a su'], correct: 0 },
    { promptSay: 'Je ne l’... jamais ... .', opts: ['savais', 'ai su'], correct: 1 },
    { promptSay: 'Tout le monde le ... , sauf moi.', opts: ['savait', 'a su'], correct: 0 },
    { promptSay: "J'... la vérité trop tard.", opts: ['savais', 'ai su'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'I knew ne choisit pas pour toi' },
    { label: 'Six phrases', kind: 'cards', title: 'Le réflexe, puis la bonne phrase' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-04-savoir-piege'),
  say: `Le réflexe anglais, puis la bonne phrase. ${REFRAME}`,
  terms: ['etat', 'moment'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le sens', "« Je savais qu'elle partait. » Quand l'as-tu appris ? EN: When did you find out?", ['Avant, on ne sait pas quand.', 'À ce moment-là.'], 0, "L'imparfait ne donne pas le moment : il donne l'état. EN: the imparfait gives the state, not the moment."),
  ctl('La forme', 'Le participe de savoir : EN: The participle of savoir:', ['savu', 'su', 'savé'], 1, "su. EN: su."),
  ctl('Le deuxième sens', '« Je savais nager. » Ça veut dire : EN: It means:', ['I found out how to swim.', 'I could swim.'], 1, "savoir + verbe à l'imparfait : une capacité. EN: a skill you had."),
], ['etat', 'moment']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Savoir',
    opener: { line: "Deux personnes savent la même chose, mais pas depuis le même moment : c'est là que le verbe change. EN: Two people know the same thing, but not since the same moment: that is where the verb changes.", imageRef: 'lessons/pc-imparfait-paires/act02.jpg' },
    sections: [],
    milestone: "Tu choisis entre je savais et j'ai su, et tu entends la différence. EN: You choose between je savais and j'ai su, and you hear the difference.",
    estScreens: 38, restPoints: ['a2-exemples', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_PAIRE, A2_EXEMPLES, A2_CONSTRUIRE, A2_ECOUTE, A2_PIEGE, A2_CHECK],
  imports: ['fr.a2.verbes.604', 'fr.b1.cafe.094'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — CONNAÎTRE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. 125 words, and both readings of connu are in it: the meeting, and
 *  the closed period. The questions are in a modal. */
const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le voisin du dessus',
  frSub: 'Deux sens de connu',
  text: "Quand je suis arrivée à Genève, je ne connaissais personne. Je connaissais la ville, parce que j'y étais venue en vacances, mais je ne connaissais aucune famille. Le deuxième jour, j'ai connu monsieur Baumann, le voisin du dessus. Il avait quatre-vingts ans et il connaissait tout le quartier. Il a connu la guerre, il a connu trois métiers, et il racontait tout avec beaucoup de calme. Nous nous sommes connus devant les boîtes aux lettres, et après, on prenait le café ensemble le samedi. Je l'ai connu pendant six ans. Il est mort l'hiver dernier. Quand je pense à Genève, je pense d'abord à lui.",
  glossary: [
    { word: 'du dessus', en: 'upstairs', note: "Le voisin du dessus habite à l'étage au-dessus." },
    { word: 'aucune famille', en: 'no family at all', note: 'aucune est plus fort que « pas de ».' },
    { word: 'quatre-vingts ans', en: 'eighty years old', note: 'En Suisse, on dit aussi huitante dans certains cantons.' },
    { word: 'trois métiers', en: 'three jobs', note: 'un métier : le travail qu’on apprend et qu’on fait.' },
    { word: 'les boîtes aux lettres', en: 'the letterboxes', note: 'Dans l’entrée de l’immeuble.' },
  ],
  questions: [
    { q: 'Connaissait-elle la ville avant d’arriver ?', a: "Oui : « je connaissais la ville », un état. Mais elle ne connaissait personne." },
    { q: '« J’ai connu monsieur Baumann le deuxième jour. » Qu’est-ce qui se passe ce jour-là ?', a: 'La rencontre. Au passé composé, connaître dit le premier moment.' },
    { q: '« Il a connu la guerre. » Est-ce qu’il a rencontré la guerre ?', a: "Non. Ici, connu veut dire : il a vécu cette période, et elle est finie." },
    { q: '« Je l’ai connu pendant six ans. » Pourquoi le passé composé ?', a: 'La période est fermée : six ans, et c’est terminé. Il est mort.' },
    { q: 'Et si elle disait « je le connaissais depuis six ans » ?', a: 'Ce serait un état qui durait, vu de l’intérieur, sans dire que c’est fini.' },
  ],
  audio: AUDIO,
  say: `Deux sens de connu dans le même texte. ${THE_TEST}`,
  terms: ['etat', 'rencontre'],
};

/** NAME IT. The meeting, the closed period, the state, and the present that
 *  the learner already owns. */
const A3_PAIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-paire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'connaître : connaissais ou connu',
  frSub: "l'état, la rencontre, la période",
  hint: 'Cinq cartes. Regarde ce qui se passe dans la phrase.',
  audio: REC('rec-b1-04-connaitre'),
  say: REFRAME,
  terms: ['etat', 'rencontre'],
  cards: [
    {
      head: 'je connaissais',
      label: 'un état : vous vous connaissiez',
      fr: 'Je connaissais déjà sa sœur.',
      sub: '[zhuh koh-neh-SEH day-ZHAH sah SUHR]',
      body: "Aucune rencontre dans la phrase : tu la connaissais avant l'histoire. EN: no meeting happens; you knew her before the story.",
    },
    {
      head: "j'ai connu",
      label: 'un moment : la rencontre',
      fr: "J'ai connu sa sœur à Dakar.",
      sub: '[ZHAY koh-NÜ sah SUHR ah dah-KAR]',
      body: "La première rencontre a lieu à Dakar. En anglais : I met her. EN: the first meeting happens there: I met her.",
    },
    {
      head: 'nous nous sommes connus',
      label: 'la même rencontre, des deux côtés',
      fr: 'Nous nous sommes connus à Genève.',
      sub: '[noo noo SOM koh-NÜ ah zhuh-NEV]',
      body: "La forme pronominale dit la rencontre des deux côtés. L'auxiliaire est être, comme pour tous les verbes pronominaux. EN: the reflexive form is the meeting seen from both sides.",
    },
    {
      head: 'il a connu des hivers durs',
      label: 'une période finie',
      fr: 'Il a connu des hivers très durs.',
      sub: '[eel ah koh-NÜ day-zee-VEHR treh DÜR]',
      body: "Avec une période, connu veut dire : il a vécu ça, et c'est fini. EN: with a period, connu means went through, and it is over.",
    },
    {
      head: 'je le connais depuis',
      label: 'et aujourd’hui',
      fr: 'Je le connais depuis dix ans.',
      sub: '[zhuh luh koh-NEH duh-PWEE dee-ZAHⁿ]',
      body: "Si la relation continue, le français utilise le présent avec depuis. EN: if the relationship continues, French uses the present with depuis.",
    },
  ],
};

/** NAME IT, second screen: the closed period, and what it makes the listener
 *  think. This is the card that prevents the act 11 error. */
const A3_PERIODE: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-periode',
  layer: 'core',
  title: 'La période fermée',
  frSub: 'Ce que le passé composé laisse entendre',
  examples: [
    { fr: 'Elle a connu la guerre.', en: 'She lived through the war.', note: 'une période finie, vue en entier' },
    { fr: 'Ce village a connu de grands changements.', en: 'That village went through big changes.', note: 'une période, pour un lieu' },
    { fr: "J'ai connu mon mari au travail.", en: 'I met my husband at work.', note: 'ici, la rencontre' },
    { fr: "Je l'ai connu pendant dix ans.", en: 'I knew him for ten years, and that is over.', note: 'fermé : on comprend que c’est terminé' },
    { fr: 'Je le connais depuis dix ans.', en: "I've known him for ten years.", note: 'ouvert : la relation continue' },
    { fr: 'Je connaissais bien ce quartier.', en: 'I knew that neighbourhood well.', note: 'un état, sans début ni fin' },
  ],
  audio: AUDIO,
  say: 'Une période fermée dit aussi que c’est fini. Fais attention avec les personnes.',
  terms: ['rencontre', 'etat'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les deux',
  frSub: 'Les formes, puis le sens',
  groups: [
    grp("L'imparfait : un état", [
      it(E(331), 'je'), it(E(332), 'tu'), it(E(333), 'nous'), it(E(334), 'ils'),
    ], chk(
      'nous connaissons au présent. La base de l’imparfait est : EN: The imparfait stem is:',
      ['connait-', 'connu-', 'connaiss-'],
      2,
      `Coupe -ons : connaiss-. ${B101_REFRAME} EN: cut -ons from nous connaissons.`,
    )),
    grp('Le passé composé : la rencontre', [
      it(E(335), 'je'), it(E(336), 'elle'), it(E(338), 'la rencontre, en entier'), it('fr.a2.verbes.608', 'et la phrase publiée'),
    ], chk(
      "« Je ___ ta mère il y a vingt ans. » Tu l'as rencontrée à ce moment-là. EN: You met her then.",
      ['ai connu', 'connaissais'],
      0,
      'La rencontre est un moment : passé composé. EN: the meeting is a moment.',
    )),
    grp('Le sens : ouvert ou fermé', [
      it(E(347), 'la relation continue'), it(E(348), 'la période est fermée'), it(E(341), 'une période, pour un lieu ou une vie'), it(E(343), 'un état, au négatif'),
    ], chk(
      'Ton ami est vivant et tu le vois encore. Tu dis : EN: Your friend is alive and you still see him.',
      ['Je l’ai connu pendant vingt ans.', 'Je le connais depuis vingt ans.'],
      1,
      "Le passé composé fermerait la période, et on comprendrait que c'est fini. EN: the passé composé would close the period.",
    )),
  ],
  audio: AUDIO,
  say: `Les formes, puis le sens. ${THE_TEST}`,
  terms: ['etat', 'rencontre'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Rencontre ou pas',
  frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(337)), ln(E(338)), ln(E(340)), ln(E(341)), ln(E(343)), ln(E(345)), ln(E(347)), ln(E(348)),
  ],
  questions: [
    { q: 'Première phrase : y a-t-il une rencontre ? EN: Is there a meeting?', opts: ['Non.', 'Oui.'], correct: 0, why: 'je connaissais : un état, pas de rencontre. EN: a state, no meeting.' },
    { q: 'Deuxième phrase : où la rencontre a-t-elle eu lieu ? EN: Where did they meet?', opts: ['À Dakar.', 'À Genève.', 'On ne sait pas.'], correct: 0, why: "J'ai connu sa sœur à Dakar. EN: in Dakar." },
    { q: 'Quatrième phrase : ça veut dire : EN: It means:', opts: ['Il a rencontré des hivers.', 'Il a vécu ces hivers.'], correct: 1, why: 'Avec une période, connu = vivre cette période. EN: with a period, connu means lived through.' },
    { q: 'Sixième phrase : quel âge a-t-il maintenant ? EN: How old is he now?', opts: ['Vingt ans.', 'On ne sait pas.', 'Plus de vingt ans.'], correct: 1, why: "L'imparfait donne son âge au moment de la rencontre, pas aujourd'hui. EN: the imparfait gives his age then." },
    { q: 'Les deux dernières : laquelle dit que la relation continue ? EN: Which one says the relationship continues?', opts: ['Je le connais depuis dix ans.', 'Je l’ai connu pendant dix ans.'], correct: 0, why: 'depuis + présent : c’est encore vrai. EN: depuis plus the present is still true.' },
  ],
  audio: REC('rec-b1-04-connaitre-ecoute'),
  say: `Écoute, puis choisis. ${THE_TEST}`,
  terms: ['rencontre', 'etat'],
};

/** TRAP, as commonErrors: every `wrong` here is correct French that says
 *  something the speaker did not mean. `swipe: true` is mandatory. */
const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Correct, mais pas ce que tu voulais dire',
  frSub: 'connaître',
  errors: [
    {
      wrong: "J'ai connu ta mère pendant vingt ans.",
      right: 'Je connais ta mère depuis vingt ans.',
      why: "Tu la vois encore. Le passé composé ferme la période, et ton ami comprend qu'elle est partie, ou morte. EN: a closed period suggests it is over.",
    },
    {
      wrong: "Je connaissais mon mari au travail.",
      right: "J'ai connu mon mari au travail.",
      why: "Tu veux dire la rencontre. À l'imparfait, ça veut dire : au travail, je savais qui il était. EN: the imparfait says you already knew him there.",
    },
    {
      wrong: 'Hier, je connaissais ton frère à la fête.',
      right: "Hier, j'ai connu ton frère à la fête.",
      why: "Une rencontre à un moment précis : passé composé. hier ne change rien, mais la rencontre, si. EN: a meeting at a precise moment.",
    },
    {
      wrong: "Quand j'ai connu Genève, je ne parlais pas français.",
      right: 'Quand je suis arrivée à Genève, je ne parlais pas français.',
      why: "On connaît une VILLE par un état, pas par une rencontre. Pour le moment de l'arrivée, utilise arriver. EN: use arriver for the moment you got there.",
    },
  ],
  audio: AUDIO,
  say: 'Ces phrases sont correctes. Elles disent juste autre chose.',
  terms: ['rencontre', 'etat'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La rencontre', '« J’ai connu Awa en 2019. » Ça veut dire : EN: It means:', ['Je la connaissais en 2019.', 'Je l’ai rencontrée en 2019.'], 1, 'Au passé composé, la rencontre. EN: connu is the meeting.'),
  ctl('La période', '« Elle a connu la guerre. » Il y a une rencontre ? EN: Is there a meeting?', ['Non : elle a vécu cette période.', 'Oui.'], 0, 'Avec une période, connu = vivre ça. EN: with a period, connu means lived through.'),
  ctl('Ouvert ou fermé', 'Ton voisin est toujours là. Tu dis : EN: Your neighbour is still around.', ['Je l’ai connu pendant dix ans.', 'Je le connais depuis dix ans.'], 1, 'depuis + présent, parce que ça continue. EN: depuis plus the present.'),
], ['rencontre', 'etat']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Connaître',
    opener: { line: 'Le même verbe dit « je la connaissais bien » et « je l’ai rencontrée ce jour-là » : tout dépend du temps. EN: The same verb says I knew her well and I met her that day.', imageRef: 'lessons/pc-imparfait-paires/act03.jpg' },
    sections: [],
    milestone: 'Tu sépares l’état, la rencontre et la période finie, et tu sais laquelle ferme une relation. EN: You separate the state, the meeting and the closed period.',
    estScreens: 36, restPoints: ['a3-periode', 'a3-ecoute'],
  },
  sections: [A3_LECTURE, A3_PAIRE, A3_PERIODE, A3_CONSTRUIRE, A3_ECOUTE, A3_ERREURS, A3_CHECK],
  imports: ['fr.a2.verbes.608', 'fr.a2.heure-et-date.106'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — POUVOIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A locked door, a window, and a colleague who wants to know whether
 *  you got in. The three forms are in the dialogue before the rule. */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La porte bloquée',
  frSub: 'Est-ce que tu es entré',
  setting: "Un petit bureau, à Abidjan, le lundi matin. EN: A small office in Abidjan, Monday morning.",
  bubbles: [
    { from: 'narrator', fr: 'Koffi arrive au bureau. La porte principale est bloquée.', en: 'Koffi arrives at the office. The main door is stuck.' },
    { from: 'coach', fr: 'Tu es arrivé le premier. Tu pouvais entrer.', en: 'You arrived first. You were able to get in.' },
    { from: 'user', fr: "Je pouvais entrer, oui. J'avais la clé.", en: 'I was able to get in, yes. I had the key.', warn: 'je pouvais : la capacité. On ne sait pas encore si tu es entré. EN: pouvais gives the ability, not the outcome.' },
    { from: 'coach', fr: 'Et alors, la salle était ouverte à huit heures.', en: 'So the room was open at eight.' },
    { from: 'user', fr: "Non. La serrure était cassée. Je n'ai pas pu entrer par la porte.", en: 'No. The lock was broken. I could not get in through the door.', warn: "je n'ai pas pu : tu as essayé, et ça n'a pas marché. EN: you tried and failed." },
    { from: 'user', fr: "Finalement, j'ai pu entrer par la fenêtre.", en: 'In the end I managed to get in through the window.', warn: "j'ai pu : tu as réussi. EN: you succeeded." },
    { from: 'coach', fr: 'Donc la salle était prête. Tu vois, ta phrase de départ ne disait rien.', en: 'So the room was ready. You see, your first sentence said nothing.' },
  ],
  closing: { fr: 'je pouvais dit ce qui était possible. j’ai pu dit ce qui est arrivé.', en: 'pouvais gives what was possible; pu gives what happened.' },
  audio: REC('rec-b1-04-koffi'),
  say: `Trois formes, trois informations. ${THE_TEST}`,
  terms: ['resultat', 'etat'],
};

const A4_PAIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-paire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'pouvoir : pouvais, ai pu, n’ai pas pu',
  frSub: 'la capacité, la réussite, l’échec',
  hint: 'Cinq cartes. Cherche le résultat dans la phrase.',
  audio: REC('rec-b1-04-pouvoir'),
  say: REFRAME,
  terms: ['resultat', 'etat', 'moment'],
  cards: [
    {
      head: 'je pouvais',
      label: "c'était possible",
      fr: "Je pouvais venir, mais je n'avais pas envie.",
      sub: '[zhuh poo-VEH vuh-NEER · meh zhuh nah-VEH pah ahⁿ-VEE]',
      body: "Capable, autorisé, libre : oui. Venu ? Le verbe ne le dit pas, la suite oui. EN: able or allowed; the verb gives no outcome.",
    },
    {
      head: "j'ai pu",
      label: 'tu as réussi',
      fr: "Finalement, j'ai pu venir.",
      sub: '[fee-nahl-MAHⁿ · ZHAY PÜ vuh-NEER]',
      body: "j'ai pu = j'ai réussi. Tu es venu, c'est sûr. En anglais : I managed to. EN: I managed to, and I came.",
    },
    {
      head: "je n'ai pas pu",
      label: "ça n'a pas marché",
      fr: "Je n'ai pas pu venir.",
      sub: '[zhuh nay pah PÜ vuh-NEER]',
      body: "Tu as essayé, ou tu voulais, et ça a échoué. Tu n'es pas venu. EN: I failed to come.",
    },
    {
      head: 'je ne pouvais pas',
      label: 'une situation qui dure',
      fr: 'Je ne pouvais pas dormir.',
      sub: '[zhuh nuh poo-VEH pah dor-MEER]',
      body: "La nuit entière, sans un moment précis. Compare : je n'ai pas pu dormir cette nuit-là. EN: a whole-night state, not one failed attempt.",
    },
    {
      head: 'tu pouvais me le dire',
      label: 'et le petit reproche',
      fr: 'Tu pouvais me le dire.',
      sub: '[tü poo-VEH muh luh DEER]',
      body: "C'était possible, et tu ne l'as pas fait. Les Français disent ça très souvent. EN: you could have told me, and you did not.",
    },
  ],
};

/** NAME IT, on one screen: six situations, three columns. ONE tapTable in
 *  this act, six rows, the ceiling. The full table is in `sheet-negatif`. */
const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-table',
  layer: 'core',
  sheetId: 'sheet-negatif',
  title: 'Trois phrases, trois informations',
  frSub: 'Touche une ligne',
  cols: ['Situation', 'Tu dis', 'Le résultat'],
  rows: [
    {
      cells: ["C'était possible", 'je pouvais venir', 'inconnu'],
      say: "Je pouvais venir, mais je n'avais pas envie.",
      detail: { title: 'je pouvais', body: "La capacité, la permission, le temps libre. Le résultat n'est pas dans le verbe. EN: ability or permission; no outcome.", say: 'Je pouvais travailler de la maison.' },
    },
    {
      cells: ['Tu as réussi', "j'ai pu venir", 'oui'],
      say: "Finalement, j'ai pu venir.",
      detail: { title: "j'ai pu", body: "La réussite, souvent après une difficulté. EN: success, usually after a difficulty.", say: "J'ai pu entrer par la fenêtre." },
    },
    {
      cells: ['Tu as échoué', "je n'ai pas pu", 'non'],
      say: "Je n'ai pas pu venir.",
      detail: { title: "je n'ai pas pu", body: "Tu as essayé et ça n'a pas marché. Très fréquent pour s'excuser. EN: you tried and failed; the normal apology.", say: "Elle n'a pas pu finir son rapport." },
    },
    {
      cells: ['Une situation qui dure', 'je ne pouvais pas', 'inconnu'],
      say: 'Je ne pouvais pas dormir.',
      detail: { title: 'je ne pouvais pas', body: "Une impossibilité qui dure, sans moment précis. EN: a lasting impossibility, no single moment.", say: "Je ne pouvais pas venir, j'étais malade." },
    },
    {
      cells: ['Une permission', 'je pouvais', 'inconnu'],
      say: 'Je pouvais travailler de la maison.',
      detail: { title: 'la permission', body: "pouvoir à l'imparfait dit aussi : on m'autorisait. EN: pouvais also covers being allowed.", say: 'Il pouvait rester une heure de plus.' },
    },
    {
      cells: ['Un reproche', 'tu pouvais', 'non'],
      say: 'Tu pouvais me le dire.',
      detail: { title: 'le reproche', body: "C'était possible, et ce n'est pas arrivé. Le ton fait le reproche. EN: it was possible, and it did not happen.", say: 'Tu pouvais me le dire.' },
    },
  ],
  audio: AUDIO,
  say: `Six situations, trois colonnes. ${REFRAME}`,
  terms: ['resultat'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les trois',
  frSub: 'La forme, puis le résultat',
  groups: [
    grp("L'imparfait", [
      it(E(351), 'je'), it(E(352), 'il'), it(E(353), 'nous'), it(E(360), 'une permission'),
    ], chk(
      'nous pouvons au présent. La base de l’imparfait est : EN: The imparfait stem is:',
      ['peuv-', 'pu-', 'pouv-'],
      2,
      `Coupe -ons de nous pouvons. ${B101_REFRAME} EN: cut -ons from nous pouvons.`,
    )),
    grp('Le passé composé', [
      it(E(354), 'je'), it(E(355), 'elle'), it(E(359), 'la réussite'), it('fr.a2.verbes.605', 'et la phrase publiée'),
    ], chk(
      '« J’ai pu entrer. » Est-ce que la personne est entrée ? EN: Did the person get in?',
      ['Oui.', 'Non.', 'On ne sait pas.'],
      0,
      "j'ai pu : la réussite. EN: pu asserts the success.",
    )),
    grp('Le négatif, et le résultat', [
      it(E(358), 'un échec'), it(E(361), 'un échec, elle'), it(E(363), 'une situation qui dure'), it(E(364), 'une nuit précise'),
    ], chk(
      "Tu as essayé d'appeler trois fois, sans succès. Tu dis : EN: You tried three times, without success.",
      ["Je n'ai pas pu te joindre.", 'Je ne pouvais pas te joindre.'],
      0,
      "Des essais qui échouent : je n'ai pas pu. EN: failed attempts take n'ai pas pu.",
    )),
  ],
  audio: AUDIO,
  say: `La forme, puis le résultat. ${THE_TEST}`,
  terms: ['resultat', 'moment'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Réussi ou pas',
  frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(356)), ln(E(357)), ln(E(358)), ln(E(362)), ln(E(363)), ln(E(365)), ln(E(367)), ln(E(368)),
  ],
  questions: [
    { q: 'Première phrase : la personne est-elle venue ? EN: Did the person come?', opts: ['Oui.', 'Le verbe ne le dit pas, mais la suite si.', 'Non.'], correct: 1, why: "je pouvais ne donne pas le résultat ; « je n'avais pas envie » le donne. EN: the verb gives no outcome; the rest does." },
    { q: 'Deuxième phrase : réussi ou pas ? EN: Success or not?', opts: ['Pas réussi.', 'Réussi.'], correct: 1, why: "j'ai pu : la réussite. EN: pu is success." },
    { q: 'Troisième phrase : réussi ou pas ? EN: Success or not?', opts: ['Pas réussi.', 'Réussi.'], correct: 0, why: "je n'ai pas pu : l'échec. EN: n'ai pas pu is failure." },
    { q: 'Sixième phrase : qu’est-ce que ça veut dire ? EN: What does it mean?', opts: ['Tu me l’as dit.', 'Tu vas me le dire.', 'Tu ne me l’as pas dit, et je le regrette.'], correct: 2, why: "C'était possible, et ce n'est pas arrivé : un petit reproche. EN: a gentle reproach." },
    { q: 'Dernière phrase : pourquoi pas de pain ? EN: Why no bread?', opts: ['Je n’avais pas faim.', 'Le magasin était fermé.'], correct: 1, why: "Une raison précise, un essai qui échoue. EN: a precise reason, a failed attempt." },
  ],
  audio: REC('rec-b1-04-pouvoir-ecoute'),
  say: `Cherche le résultat. ${THE_TEST}`,
  terms: ['resultat'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège de could',
  frSub: 'could, was able to, managed to',
  rule: {
    title: 'could ne dit pas si tu as réussi',
    body: `En anglais, I could couvre tout. En français, j'ai pu dit que tu as réussi, et je n'ai pas pu que tu as échoué. ${THE_TEST} EN: English could covers everything; pu asserts success.`,
  },
  cards: [
    { promptLabel: 'Tu as réussi à entrer.', promptSound: 'Je pouvais entrer par la fenêtre.', fr: "J'ai pu entrer par la fenêtre.", ipa: '/ʒe py ɑ̃.tʁe paʁ la fə.nɛtʁ/', tip: 'La réussite est un moment. EN: success is a moment.' },
    { promptLabel: 'Tu as essayé, sans succès.', promptSound: 'Je ne pouvais pas finir le rapport hier.', fr: "Je n'ai pas pu finir le rapport hier.", ipa: '/ʒə ne pa py fi.niʁ lə ʁa.pɔʁ jɛʁ/', tip: "Un essai précis qui échoue. EN: one precise failed attempt." },
    { promptLabel: 'Une nuit sans sommeil.', promptSound: "Je n'ai pas pu dormir, j'étais trop inquiet.", fr: "Je ne pouvais pas dormir, j'étais trop inquiet.", ipa: '/ʒə nə pu.vɛ pa dɔʁ.miʁ ʒe.tɛ tʁo.pɛ̃.kjɛ/', tip: "Une situation qui dure toute la nuit. EN: a state lasting all night." },
    { promptLabel: 'On t’autorisait à le faire.', promptSound: "J'ai pu travailler de la maison cette année-là.", fr: 'Je pouvais travailler de la maison cette année-là.', ipa: '/ʒə pu.vɛ tʁa.va.je də la mɛ.zɔ̃ sɛ.ta.ne.la/', tip: "Une permission qui dure : l'imparfait. EN: a lasting permission." },
    { promptLabel: 'Vous avez réussi à changer les billets.', promptSound: 'On pouvait changer les billets.', fr: 'On a pu changer les billets.', ipa: '/ɔ̃.na py ʃɑ̃.ʒe le bi.jɛ/', tip: 'Le résultat compte ici. EN: the outcome is the point.' },
    { promptLabel: 'Le reproche.', promptSound: "Tu n'as pas pu me le dire.", fr: 'Tu pouvais me le dire.', ipa: '/ty pu.vɛ mə lə diʁ/', tip: "C'était possible, et tu ne l'as pas fait. EN: it was possible, and you did not." },
  ],
  drill: [
    { promptSay: "La porte était bloquée, mais j'... entrer par la fenêtre.", opts: ['ai pu', 'pouvais'], correct: 0 },
    { promptSay: 'Cette année-là, je ... travailler de la maison.', opts: ['ai pu', 'pouvais'], correct: 1 },
    { promptSay: "Désolé, je n'... pas ... venir hier.", opts: ['ai pu', 'pouvais'], correct: 0 },
    { promptSay: 'Toute la nuit, je ne ... pas dormir.', opts: ['ai pu', 'pouvais'], correct: 1 },
    { promptSay: 'Finalement, nous ... visiter le musée.', opts: ['avons pu', 'pouvions'], correct: 0 },
    { promptSay: 'Elle n’... pas ... finir son rapport.', opts: ['pouvait', 'a pu'], correct: 1 },
    { promptSay: 'Tu ... me le dire, tu sais.', opts: ['pouvais', 'as pu'], correct: 0 },
    { promptSay: 'Le magasin était fermé, donc je n’... pas ... acheter le pain.', opts: ['pouvais', 'ai pu'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'could ne dit pas si tu as réussi' },
    { label: 'Six phrases', kind: 'cards', title: 'Le réflexe, puis la bonne phrase' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-04-pouvoir-piege'),
  say: `Réussi, échoué, ou inconnu. ${REFRAME}`,
  terms: ['resultat'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le résultat', '« Je pouvais venir. » Est-ce que la personne est venue ? EN: Did the person come?', ['On ne sait pas.', 'Oui.', 'Non.'], 0, "pouvais ne donne pas le résultat. EN: pouvais gives no outcome."),
  ctl("L'échec", "Tu as essayé d'appeler, sans succès. Tu dis : EN: You tried to call, without success.", ["Je n'ai pas pu t'appeler.", 'Je ne pouvais pas t’appeler.'], 0, "Un essai précis : je n'ai pas pu. EN: a precise failed attempt."),
  ctl('La permission', '« Je pouvais travailler de la maison. » Ça veut dire : EN: It means:', ['J’ai réussi une fois.', 'On m’autorisait à le faire.'], 1, "pouvoir à l'imparfait couvre aussi la permission. EN: pouvais also covers permission."),
], ['resultat', 'moment']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Pouvoir',
    opener: { line: 'Une porte bloquée, une fenêtre ouverte : ici tu apprends à dire si tu as vraiment réussi. EN: A stuck door and an open window: here you learn to say whether you actually succeeded.', imageRef: 'lessons/pc-imparfait-paires/act04.jpg' },
    sections: [],
    milestone: "Tu dis la capacité, la réussite et l'échec avec trois formes différentes. EN: You tell ability, success and failure apart.",
    estScreens: 38, restPoints: ['a4-table', 'a4-ecoute'],
  },
  sections: [A4_HISTOIRE, A4_PAIRE, A4_TABLE, A4_CONSTRUIRE, A4_ECOUTE, A4_PIEGE, A4_CHECK],
  imports: ['fr.a2.verbes.605'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — VOULOIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A contract nobody signed. « il ne voulait pas » and « il n'a pas
 *  voulu » are not the same story, and the second one is the refusal. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le contrat',
  frSub: 'Envie, essai, refus',
  setting: "Une petite entreprise, à Lyon. Deux associés parlent d'un client. EN: A small company in Lyon; two partners talk about a client.",
  bubbles: [
    { from: 'narrator', fr: 'Le client est reparti sans signer le contrat.', en: 'The client left without signing the contract.' },
    { from: 'coach', fr: 'Alors, il ne voulait pas signer.', en: 'So, he did not want to sign.' },
    { from: 'user', fr: "Ce n'est pas ça. Il voulait signer, au début.", en: 'That is not it. He wanted to sign, at the start.', warn: "il voulait : une envie qui durait. EN: voulait is a wish that lasted." },
    { from: 'user', fr: "J'ai voulu lui expliquer les conditions, mais il était pressé.", en: 'I tried to explain the terms to him, but he was in a hurry.', warn: "j'ai voulu : tu as essayé, tu as commencé. EN: voulu is the attempt." },
    { from: 'coach', fr: 'Et à la fin, qu’est-ce qui s’est passé.', en: 'And in the end, what happened.' },
    { from: 'user', fr: "Il n'a pas voulu signer aujourd'hui. Il revient jeudi.", en: 'He refused to sign today. He is coming back on Thursday.', warn: "il n'a pas voulu : un refus, à un moment précis. EN: a refusal at a precise moment." },
    { from: 'coach', fr: 'D’accord. Donc ce n’est pas un client perdu.', en: 'All right. So he is not a lost client.' },
  ],
  closing: { fr: 'voulais : l’envie. voulu : l’essai ou la décision. pas voulu : le refus.', en: 'voulais: the wish. voulu: the attempt or decision. pas voulu: the refusal.' },
  audio: REC('rec-b1-04-contrat'),
  say: `Trois phrases, trois histoires différentes. ${THE_TEST}`,
  terms: ['etat', 'refus'],
};

const A5_PAIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-paire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'vouloir : voulais, ai voulu, n’ai pas voulu',
  frSub: "l'envie, l'essai, le refus",
  hint: 'Cinq cartes. Cherche ce que la personne a fait.',
  audio: REC('rec-b1-04-vouloir'),
  say: REFRAME,
  terms: ['etat', 'moment', 'refus'],
  cards: [
    {
      head: 'je voulais',
      label: 'une envie, un projet',
      fr: "Je voulais t'appeler.",
      sub: '[zhuh voo-LEH tah-PLAY]',
      body: "Une envie qui durait. Souvent, ça ne s'est pas fait, et le verbe ne le dit pas. EN: a wish; the verb does not say whether you called.",
    },
    {
      head: "j'ai voulu",
      label: 'tu as essayé',
      fr: "J'ai voulu t'appeler, mais ton téléphone était éteint.",
      sub: '[ZHAY voo-LÜ tah-PLAY]',
      body: "Tu as pris le téléphone : l'essai a eu lieu. EN: you actually tried; the attempt happened.",
    },
    {
      head: "elle a voulu changer",
      label: 'ou tu as décidé',
      fr: 'Elle a voulu changer de travail.',
      sub: '[eh-lah voo-LÜ shahⁿ-ZHAY duh trah-VAHY]',
      body: "Deuxième sens : la décision, prise à un moment. EN: a second reading: the decision, taken at one moment.",
    },
    {
      head: "il n'a pas voulu",
      label: 'un refus',
      fr: "Il n'a pas voulu signer le contrat.",
      sub: '[eel nah pah voo-LÜ see-NYAY luh kohⁿ-TRAH]',
      body: "Pas une absence d'envie : un refus, à un moment précis. En anglais : he refused. EN: not a missing wish, a refusal.",
    },
    {
      head: 'je ne voulais pas',
      label: 'et la simple description',
      fr: 'Je ne voulais pas te déranger.',
      sub: '[zhuh nuh voo-LEH pah tuh day-rahⁿ-ZHAY]',
      body: "Ici, tu expliques ton état d'esprit, tu ne refuses rien. C'est la phrase polie. EN: here you describe your state of mind, politely.",
    },
  ],
};

/** NAME IT, second screen: the negatives that assert, against the ones that
 *  only describe. This is the content of `sheet-negatif`. */
const A5_REFUS: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-refus',
  layer: 'core',
  sheetId: 'sheet-negatif',
  title: 'Les négatifs qui disent quelque chose',
  frSub: 'Refus et échec',
  examples: [
    { fr: "Il n'a pas voulu signer.", en: 'He refused to sign.', note: 'un refus : il a dit non' },
    { fr: 'Il ne voulait pas signer.', en: 'He did not want to sign.', note: 'une envie qui manquait, sans refus dit à voix haute' },
    { fr: "Je n'ai pas pu venir.", en: "I couldn't come.", note: 'un échec : tu as essayé' },
    { fr: 'Je ne pouvais pas venir.', en: "I couldn't come.", note: 'une situation qui t’en empêchait' },
    { fr: "Ils n'ont pas voulu nous aider.", en: 'They refused to help us.', note: 'un refus, au pluriel' },
    { fr: "Je n'ai pas voulu répondre à sa question.", en: 'I refused to answer his question.', note: 'un refus, et tu l’assumes' },
  ],
  audio: AUDIO,
  say: 'Au négatif, le passé composé accuse : refus ou échec. L’imparfait décrit seulement.',
  terms: ['refus', 'resultat'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les trois',
  frSub: 'Envie, essai, refus',
  groups: [
    grp("L'imparfait : l'envie", [
      it(E(371), 'je'), it(E(372), 'il'), it(E(373), 'nous'), it(E(382), 'une envie d’enfance'),
    ], chk(
      'nous voulons au présent. La base de l’imparfait est : EN: The imparfait stem is:',
      ['veul-', 'voul-', 'voulu-'],
      1,
      `Coupe -ons de nous voulons. ${B101_REFRAME} EN: cut -ons from nous voulons.`,
    )),
    grp("Le passé composé : l'essai", [
      it(E(374), 'je'), it(E(380), 'un essai concret'), it(E(381), 'une décision'), it('fr.a2.verbes.606', 'et la phrase publiée'),
    ], chk(
      "« J'ai voulu ouvrir la porte. » Qu'est-ce que la personne a fait ? EN: What did the person do?",
      ['Elle a essayé de l’ouvrir.', 'Elle a pensé à la porte.'],
      0,
      "j'ai voulu : l'essai a eu lieu. EN: the attempt happened.",
    )),
    grp('Le refus', [
      it(E(375), 'il'), it(E(378), 'un refus complet'), it(E(383), 'un refus, au pluriel'), it(E(379), 'et une simple description'),
    ], chk(
      'Ton collègue a dit non, clairement. Tu racontes : EN: Your colleague clearly said no.',
      ['Il ne voulait pas signer.', "Il n'a pas voulu signer."],
      1,
      "Le refus est un moment : je n'ai pas voulu. EN: the refusal is a moment.",
    )),
  ],
  audio: AUDIO,
  say: `Trois formes, trois histoires. ${THE_TEST}`,
  terms: ['etat', 'refus'],
};

/** CHOOSE, in the world: where each form is actually used. `useCases` keeps
 *  the situation and the sentence on one card. */
const A5_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a5-usages',
  layer: 'core',
  title: 'Où tu vas dire ça',
  frSub: 'Quatre situations',
  cases: [
    { situation: "Tu t'excuses de ne pas avoir appelé. EN: apologising for not calling.", fr: "Je voulais t'appeler, mais la journée est passée trop vite.", en: 'I meant to call you, but the day went by too fast.' },
    { situation: "Tu expliques un essai qui a échoué. EN: explaining a failed attempt.", fr: "J'ai voulu réserver, mais il n'y avait plus de place.", en: 'I tried to book, but there were no seats left.' },
    { situation: 'Tu racontes un refus au travail. EN: reporting a refusal at work.', fr: "Le client n'a pas voulu attendre.", en: 'The client refused to wait.' },
    { situation: 'Tu es poli et tu adoucis ta demande. EN: softening a request.', fr: 'Je voulais juste te dire merci.', en: 'I just wanted to say thank you.' },
  ],
  audio: AUDIO,
  say: 'La même paire, dans quatre situations de tous les jours.',
  terms: ['etat', 'refus'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Correct, mais pas ce que tu voulais dire',
  frSub: 'vouloir',
  errors: [
    {
      wrong: 'Je ne voulais pas signer.',
      right: "Je n'ai pas voulu signer.",
      why: "Tu veux dire que tu as refusé. À l'imparfait, tu décris seulement ton envie, et personne n'entend le refus. EN: the imparfait describes the wish, not the refusal.",
    },
    {
      wrong: "Je voulais t'aider, alors j'ai appelé ton frère.",
      right: "J'ai voulu t'aider, alors j'ai appelé ton frère.",
      why: "Tu as agi. j'ai voulu montre l'essai ; je voulais met l'accent sur l'envie, et l'action a l'air de venir de nulle part. EN: voulu shows the attempt.",
    },
    {
      wrong: "J'ai voulu juste te dire merci.",
      right: 'Je voulais juste te dire merci.',
      why: "Ici, tu adoucis. j'ai voulu sonne comme un essai raté, et ta politesse devient bizarre. EN: the passé composé makes a polite line sound like a failed attempt.",
    },
    {
      wrong: "Elle n'a pas voulu venir, elle était malade.",
      right: "Elle n'a pas pu venir, elle était malade.",
      why: "Avec une maladie, ce n'est pas un refus mais un empêchement : je n'ai pas pu. EN: illness blocks you; it is not a refusal.",
    },
  ],
  audio: AUDIO,
  say: 'Quatre phrases correctes, et quatre malentendus.',
  terms: ['refus', 'resultat'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl("L'essai", "« J'ai voulu ouvrir la porte. » Tu as touché la porte ? EN: Did you touch the door?", ['Oui.', 'Non.'], 0, "j'ai voulu : l'essai a eu lieu. EN: the attempt happened."),
  ctl('Le refus', 'Ton ami a dit non. Tu racontes : EN: Your friend said no.', ['Il ne voulait pas.', "Il n'a pas voulu."], 1, 'Le refus est un moment. EN: the refusal is a moment.'),
  ctl('La politesse', 'Tu adoucis une demande. Tu dis : EN: You soften a request.', ['Je voulais te demander quelque chose.', "J'ai voulu te demander quelque chose."], 0, "L'imparfait est la forme polie. EN: the imparfait is the polite one."),
], ['refus', 'etat']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Vouloir',
    opener: { line: 'Entre avoir envie, essayer et refuser, le français ne change pas de verbe : il change de temps. EN: Between wishing, trying and refusing, French changes the tense, not the verb.', imageRef: 'lessons/pc-imparfait-paires/act05.jpg' },
    sections: [],
    milestone: "Tu dis l'envie, l'essai et le refus, et tu gardes la forme polie pour demander. EN: You tell wish, attempt and refusal apart, and keep the polite form.",
    estScreens: 34, restPoints: ['a5-refus', 'a5-usages'],
  },
  sections: [A5_HISTOIRE, A5_PAIRE, A5_REFUS, A5_CONSTRUIRE, A5_USAGES, A5_ERREURS, A5_CHECK],
  imports: ['fr.a2.verbes.606', 'fr.b1.routines.085'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — DEVOIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, and it closes the opening scene: Nadia explains her morning, and
 *  the third reading (« il a dû oublier ») arrives in the same dialogue. */
const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le matin de Nadia',
  frSub: 'Le plan, puis la réalité',
  setting: 'Le lendemain, à Montréal. Nadia raconte sa matinée à Martin. EN: The next day in Montreal; Nadia tells Martin about her morning.',
  bubbles: [
    { from: 'coach', fr: 'Alors, hier matin, tu devais venir à la réunion.', en: 'So, yesterday morning, you were supposed to come to the meeting.', warn: 'devais : le plan. EN: devais gives the plan.' },
    { from: 'user', fr: "Oui, je devais venir. J'avais même préparé mes notes.", en: 'Yes, I was supposed to come. I had even prepared my notes.' },
    { from: 'user', fr: "L'école a appelé à huit heures, et j'ai dû partir tout de suite.", en: 'The school called at eight, and I had to leave straight away.', warn: "j'ai dû : l'obligation, et le départ. EN: dû gives the obligation and the leaving." },
    { from: 'coach', fr: 'Et Julie n’était pas là non plus.', en: 'And Julie was not there either.' },
    { from: 'user', fr: 'Elle a dû oublier. Elle ne répond pas à mes messages.', en: 'She must have forgotten. She is not answering my messages.', warn: "a dû ici : une supposition, pas une obligation. EN: here a dû is a guess." },
    { from: 'coach', fr: 'D’accord. Donc toi, tu es partie, et Julie, on ne sait pas.', en: 'All right. So you left, and Julie, we do not know.' },
  ],
  closing: { fr: 'devais : le plan. j’ai dû : c’est fait. il a dû : je suppose.', en: 'devais: the plan. j’ai dû: it happened. il a dû: I guess.' },
  audio: REC('rec-b1-04-nadia-2'),
  say: `Trois emplois d'un seul verbe. ${THE_TEST}`,
  terms: ['resultat', 'supposition'],
};

const A6_PAIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-paire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'devoir : devais ou ai dû',
  frSub: 'le plan, puis ce qui est arrivé',
  hint: 'Quatre cartes. Demande-toi si c’est arrivé.',
  audio: REC('rec-b1-04-devoir'),
  say: REFRAME,
  terms: ['resultat', 'etat'],
  cards: [
    {
      head: 'je devais',
      label: 'le plan, fait ou pas',
      fr: 'Je devais rendre le rapport mercredi.',
      sub: '[zhuh duh-VEH RAHⁿDR luh rah-POR mehr-kruh-DEE]',
      body: "Un plan, un rendez-vous, une obligation. Rendu ? La phrase ne le dit pas. EN: a plan or a duty; the outcome is open.",
    },
    {
      head: "j'ai dû",
      label: "obligé, et c'est fait",
      fr: "J'ai dû rendre le rapport en retard.",
      sub: '[ZHAY DÜ RAHⁿDR luh rah-POR ahⁿ ruh-TAR]',
      body: "Une obligation qui arrive, et l'action aussi. En anglais : I had to, and I did. EN: the obligation came, and so did the action.",
    },
    {
      head: 'la phrase de Nadia',
      label: 'les deux dans une phrase',
      fr: "Je devais venir, mais j'ai dû partir.",
      sub: '[zhuh duh-VEH vuh-NEER · meh ZHAY DÜ par-TEER]',
      body: "Le plan à l'imparfait, ce qui est arrivé au passé composé. C'est la phrase du premier acte. EN: the plan, then what actually happened.",
    },
    {
      head: 'je ne devais pas',
      label: 'et le plan négatif',
      fr: "Je ne devais pas être là.",
      sub: '[zhuh nuh duh-VEH pah EHTR LAH]',
      body: "Le plan disait non, et pourtant tu y étais peut-être. L'imparfait ne ferme rien. EN: the plan said no; the imparfait still closes nothing.",
    },
  ],
};

/** NAME IT: the third reading. « il a dû » is a supposition far more often
 *  than learners expect, and nothing before B1 has said so. */
const A6_SUPPOSITION: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-supposition',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Il a dû oublier',
  frSub: 'Le troisième sens',
  hint: 'Quatre cartes. Personne n’oblige personne ici.',
  audio: REC('rec-b1-04-supposition'),
  say: 'Ici, a dû ne veut plus dire obligé. Tu devines.',
  terms: ['supposition', 'moment'],
  cards: [
    {
      head: 'il a dû oublier',
      label: 'tu supposes',
      fr: 'Il a dû oublier.',
      sub: '[eel ah DÜ oo-blee-AY]',
      body: "Tu ne l'as pas vu oublier. Tu conclus, parce qu'il n'est pas venu. EN: you did not see it; you conclude it: he must have forgotten.",
    },
    {
      head: 'elle a dû se tromper',
      label: 'une explication probable',
      fr: 'Elle a dû se tromper de salle.',
      sub: '[eh-lah DÜ suh trohⁿ-PAY duh SAL]',
      body: "C'est l'explication la plus probable, et tu la donnes sans être sûr. EN: the most likely explanation, given without certainty.",
    },
    {
      head: 'il a dû pleuvoir',
      label: 'même avec la météo',
      fr: 'Il a dû pleuvoir cette nuit.',
      sub: '[ee-lah DÜ pluh-VWAR set NWEE]',
      body: "Le sol est mouillé ce matin. Tu n'as rien vu, tu déduis. EN: the ground is wet; you deduce the rain.",
    },
    {
      head: 'et comment savoir',
      label: 'obligation ou supposition',
      fr: "J'ai dû partir. / Il a dû partir.",
      sub: '[ZHAY DÜ par-TEER] · [eel ah DÜ par-TEER]',
      body: "Avec je, c'est presque toujours une obligation. Avec il ou elle, le contexte décide. EN: with je it is nearly always an obligation; with il or elle, context decides.",
    },
  ],
};

/** ONE tapTable for this act: six situations, and the third column says what
 *  the listener understands. The full version lives in `sheet-paires`. */
const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  sheetId: 'sheet-paires',
  title: 'Ce que ton collègue comprend',
  frSub: 'Touche une ligne',
  cols: ['Tu dis', 'Le sens', 'Venu ou pas'],
  rows: [
    {
      cells: ['je devais venir', 'le plan', 'inconnu'],
      say: 'Je devais venir à la réunion.',
      detail: { title: 'je devais venir', body: "Ton collègue ne sait pas si tu es venu. Ajoute la suite : mais j'ai dû partir. EN: the listener cannot tell; add what happened.", say: "Je devais venir, mais j'ai dû partir." },
    },
    {
      cells: ["j'ai dû venir", 'obligé, et venu', 'oui'],
      say: "J'ai dû venir en taxi.",
      detail: { title: "j'ai dû venir", body: "Tu es venu, et quelque chose t'y a obligé. EN: you came, and something forced it.", say: "J'ai dû attendre deux heures." },
    },
    {
      cells: ["il a dû venir", 'je suppose', 'probablement'],
      say: 'Il a dû venir pendant la pause.',
      detail: { title: 'il a dû venir', body: "Avec il ou elle, a dû est souvent une supposition. EN: with il or elle, a dû is often a guess.", say: 'Elle a dû se tromper de salle.' },
    },
    {
      cells: ['je ne devais pas', 'le plan disait non', 'inconnu'],
      say: "Je ne devais pas être là.",
      detail: { title: 'je ne devais pas', body: "Le plan disait non. Tu y étais peut-être quand même. EN: the plan said no; you may still have been there.", say: 'Elle devait me rappeler.' },
    },
    {
      cells: ['nous devions partir', 'le plan, nous', 'inconnu'],
      say: 'Nous devions partir à six heures.',
      detail: { title: 'nous devions', body: "Même chose au pluriel : le plan, sans résultat. EN: same in the plural: a plan, no outcome.", say: 'Nous avons dû partir plus tôt.' },
    },
    {
      cells: ['nous avons dû partir', 'obligés, et partis', 'oui'],
      say: 'Nous avons dû partir plus tôt.',
      detail: { title: 'nous avons dû', body: "Le départ a eu lieu, et il était forcé. EN: the leaving happened, and it was forced.", say: 'Elle a dû annuler son vol.' },
    },
  ],
  audio: AUDIO,
  say: `Six phrases, et ce que l'autre comprend. ${REFRAME}`,
  terms: ['resultat', 'supposition'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les trois',
  frSub: 'Plan, obligation, supposition',
  groups: [
    grp("L'imparfait : le plan", [
      it(E(1200), 'je'), it(E(1201), 'il'), it(E(1202), 'nous'), it(E(1218), 'un rendez-vous manqué'),
    ], chk(
      'nous devons au présent. La base de l’imparfait est : EN: The imparfait stem is:',
      ['doiv-', 'dû-', 'dev-'],
      2,
      `Coupe -ons de nous devons. ${B101_REFRAME} EN: cut -ons from nous devons.`,
    )),
    grp("Le passé composé : l'obligation", [
      it(E(1203), 'je'), it(E(1206), 'obligé, et fait'), it(E(1211), 'nous'), it('fr.a2.marche.128', 'et la phrase publiée'),
    ], chk(
      "« J'ai dû acheter un sac. » Est-ce que la personne a acheté un sac ? EN: Did the person buy a bag?",
      ['Oui.', 'Non.', 'On ne sait pas.'],
      0,
      "j'ai dû : l'obligation et l'action. EN: dû gives both.",
    )),
    grp('La supposition', [
      it(E(1207), 'tu devines'), it(E(1208), 'une explication'), it(E(1214), 'la météo'), it(E(1215), 'le train'),
    ], chk(
      'Le sol est mouillé ce matin. Tu dis : EN: The ground is wet this morning.',
      ['Il devait pleuvoir cette nuit.', 'Il a dû pleuvoir cette nuit.'],
      1,
      'La supposition sur un fait passé, c’est a dû. EN: must have takes a dû.',
    )),
  ],
  audio: AUDIO,
  say: `Trois emplois, trois questions. ${THE_TEST}`,
  terms: ['resultat', 'supposition'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Plan, obligation ou supposition',
  frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1205)), ln(E(1206)), ln(E(1207)), ln(E(1209)), ln(E(1212)), ln(E(1213)), ln(E(1217)), ln(E(1219)),
  ],
  questions: [
    { q: 'Première phrase : le rapport est-il rendu ? EN: Was the report handed in?', opts: ['Oui.', 'La phrase ne le dit pas.', 'Non.'], correct: 1, why: 'je devais : le plan. EN: devais gives the plan.' },
    { q: 'Deuxième phrase : le rapport est-il rendu ? EN: Was the report handed in?', opts: ['Oui, en retard.', 'Non.'], correct: 0, why: "j'ai dû rendre : c'est fait, en retard. EN: it happened, late." },
    { q: 'Quatrième phrase : qu’est-ce que la personne fait ? EN: What is the speaker doing?', opts: ['Elle donne un ordre.', 'Elle imagine ce que tu as ressenti.'], correct: 1, why: 'a dû + verbe : une supposition. EN: a guess about your feelings.' },
    { q: 'Cinquième phrase : a-t-elle travaillé ? EN: Did she work?', opts: ['Non.', 'Oui.'], correct: 0, why: "Le plan existait, l'annulation le ferme. EN: the plan was cancelled." },
    { q: 'Dernière phrase : le vol est : EN: The flight is:', opts: ['toujours réservé.', 'annulé.'], correct: 1, why: "a dû + annuler, avec elle : ici, l'obligation, et c'est fait. EN: here it is the obligation, and it happened." },
  ],
  audio: REC('rec-b1-04-devoir-ecoute'),
  say: `Trois emplois à reconnaître. ${THE_TEST}`,
  terms: ['resultat', 'supposition'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège de had to',
  frSub: 'had to, was supposed to, must have',
  rule: {
    title: 'had to ne dit pas si tu l’as fait',
    body: `L'anglais dit I had to pour le plan et pour l'action. Le français sépare : je devais laisse la question ouverte, j'ai dû la ferme. ${THE_TEST} EN: French separates the plan from what happened.`,
  },
  cards: [
    { promptLabel: 'Tu es parti, obligé.', promptSound: 'Je devais partir à huit heures.', fr: "J'ai dû partir à huit heures.", ipa: '/ʒe dy paʁ.tiʁ a ɥi.tœʁ/', tip: "Le départ a eu lieu. EN: the leaving happened." },
    { promptLabel: 'Le plan, et rien de plus.', promptSound: "J'ai dû venir à la réunion.", fr: 'Je devais venir à la réunion.', ipa: '/ʒə də.vɛ və.niʁ a la ʁe.y.njɔ̃/', tip: "Tu parles du plan, pas de ta présence. EN: you are talking about the plan." },
    { promptLabel: 'Tu supposes qu’il a oublié.', promptSound: 'Il devait oublier.', fr: 'Il a dû oublier.', ipa: '/i.la dy u.bli.je/', tip: 'La supposition passe par a dû. EN: must have takes a dû.' },
    { promptLabel: 'Vous êtes partis plus tôt.', promptSound: 'Nous devions partir plus tôt.', fr: 'Nous avons dû partir plus tôt.', ipa: '/nu.za.vɔ̃ dy paʁ.tiʁ ply to/', tip: "Le départ est fait. EN: the departure happened." },
    { promptLabel: 'Elle t’avait promis un appel.', promptSound: 'Elle a dû me rappeler.', fr: 'Elle devait me rappeler.', ipa: '/ɛl də.vɛ mə ʁa.ple/', tip: "Le plan. Avec a dû, on croirait qu'elle a appelé, ou que tu supposes. EN: a dû would say she called, or that you are guessing." },
    { promptLabel: 'Tu as attendu deux heures.', promptSound: 'Je devais attendre deux heures.', fr: "J'ai dû attendre deux heures.", ipa: '/ʒe dy a.tɑ̃dʁ dø.zœʁ/', tip: "L'attente a eu lieu. EN: the waiting happened." },
  ],
  drill: [
    { promptSay: "J'... partir à huit heures, et je suis parti.", opts: ['ai dû', 'devais'], correct: 0 },
    { promptSay: 'Je ... venir, mais finalement je suis resté.', opts: ['ai dû', 'devais'], correct: 1 },
    { promptSay: "Il n'est pas là : il ... oublier.", opts: ['a dû', 'devait'], correct: 0 },
    { promptSay: 'Elle ... me rappeler, et j’attends toujours.', opts: ['a dû', 'devait'], correct: 1 },
    { promptSay: 'Nous ... partir plus tôt, à cause de la neige.', opts: ['avons dû', 'devions'], correct: 0 },
    { promptSay: 'Le sol est mouillé : il ... pleuvoir cette nuit.', opts: ['devait', 'a dû'], correct: 1 },
    { promptSay: "Samedi, j'... travailler, et j'ai travaillé.", opts: ['ai dû', 'devais'], correct: 0 },
    { promptSay: 'Je ne ... pas être là ce jour-là.', opts: ['ai dû', 'devais'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'had to ne dit pas si tu l’as fait' },
    { label: 'Six phrases', kind: 'cards', title: 'Le réflexe, puis la bonne phrase' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-04-devoir-piege'),
  say: `Plan, obligation, supposition. ${REFRAME}`,
  terms: ['resultat', 'supposition'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le plan', '« Je devais rendre le rapport. » Est-il rendu ? EN: Was it handed in?', ['Oui.', 'Non.', 'On ne sait pas.'], 2, 'devais : le plan seulement. EN: devais gives only the plan.'),
  ctl('La supposition', 'Ton collègue n’est pas venu et ne répond pas. Tu dis : EN: Your colleague did not come.', ['Il a dû oublier.', 'Il devait oublier.'], 0, 'a dû : ta conclusion. EN: a dû is your conclusion.'),
  ctl("L'obligation", "« Nous avons dû partir plus tôt. » Sont-ils partis plus tôt ? EN: Did they leave earlier?", ['On ne sait pas.', 'Oui.'], 1, "avons dû : c'est fait. EN: it happened."),
], ['resultat', 'supposition']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Devoir',
    opener: { line: 'Le verbe du premier acte revient, avec un troisième sens que personne ne t’a encore montré. EN: The verb from act one comes back, with a third meaning nobody has shown you yet.', imageRef: 'lessons/pc-imparfait-paires/act06.jpg' },
    sections: [],
    milestone: 'Tu sépares le plan, l’obligation faite et la supposition. EN: You separate the plan, the obligation carried out and the guess.',
    estScreens: 42, restPoints: ['a6-supposition', 'a6-construire', 'a6-ecoute'],
  },
  sections: [A6_HISTOIRE, A6_PAIRE, A6_SUPPOSITION, A6_TABLE, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_CHECK],
  imports: [],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — AVOIR PEUR, ÊTRE MALADE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A night in a house in Abidjan: states everywhere, and two moments
 *  that start. 130 words. */
const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La nuit du déménagement',
  frSub: 'Les états, et les moments',
  text: "La veille du déménagement, j'étais fatiguée et j'avais mal au dos. La maison était vide, il n'y avait plus de rideaux, et le chien du voisin aboyait dans la cour. Vers minuit, il a aboyé juste sous la fenêtre, et j'ai eu peur. Mon frère, lui, dormait très bien. Le matin, j'avais faim, mais le frigo était déjà dans le camion. J'ai eu faim toute la matinée. Vers midi, mon frère a été malade : trop de café, pas assez de sommeil. Il a été malade deux jours, et après, tout est rentré dans l'ordre. Aujourd'hui, quand je pense à cette nuit, je souris.",
  glossary: [
    { word: 'la veille', en: 'the day before', note: 'la veille de : le jour avant.' },
    { word: 'rideaux', en: 'curtains', note: 'Aux fenêtres. Un rideau, des rideaux.' },
    { word: 'aboyait', en: 'was barking', note: 'De aboyer : le bruit du chien.' },
    { word: 'le camion', en: 'the truck', note: 'Le camion du déménagement.' },
    { word: 'pas assez de sommeil', en: 'not enough sleep', note: 'le sommeil : le fait de dormir.' },
    { word: "dans l'ordre", en: 'back to normal', note: "rentrer dans l'ordre : redevenir normal." },
  ],
  questions: [
    { q: '« J’avais mal au dos. » Est-ce que le mal commence dans la phrase ?', a: "Non. C'est un état qui dure : elle avait déjà mal." },
    { q: 'Quand la peur commence-t-elle ?', a: "Vers minuit, quand le chien a aboyé sous la fenêtre : « j'ai eu peur »." },
    { q: 'Quelle différence entre « j’avais faim » et « j’ai eu faim toute la matinée » ?', a: "La première décrit l'état du matin. La seconde compte la période, du début à la fin." },
    { q: '« Mon frère a été malade. » Il était déjà malade avant midi ?', a: "Non : il est tombé malade vers midi. a été malade marque le début, puis la période." },
    { q: 'Trouve trois états dans le texte.', a: "j'étais fatiguée, j'avais mal au dos, la maison était vide, le chien aboyait, mon frère dormait." },
  ],
  audio: AUDIO,
  say: `Beaucoup d'états, et deux moments. ${THE_TEST}`,
  terms: ['etat', 'moment'],
};

const A7_AVOIR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-avoir',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'avoir : avais ou ai eu',
  frSub: "l'état, puis le début",
  hint: 'Cinq cartes. Cherche le moment où ça commence.',
  audio: REC('rec-b1-04-avoir'),
  say: REFRAME,
  terms: ['etat', 'moment'],
  cards: [
    {
      head: "j'avais peur",
      label: 'un état qui dure',
      fr: "J'avais peur du chien.",
      sub: '[zhah-VEH PUHR dü SHYEHⁿ]',
      body: "La peur était là : avant, pendant, peut-être après. EN: a fear that lasts, with no start in the sentence.",
    },
    {
      head: "j'ai eu peur",
      label: 'la peur commence',
      fr: "Quand le chien a aboyé, j'ai eu peur.",
      sub: '[kahⁿ luh SHYEHⁿ ah ah-bwah-YAY · ZHAY Ü PUHR]',
      body: "Un moment précis fait commencer la peur. En anglais : I got scared. EN: one moment starts the fear.",
    },
    {
      head: "j'avais faim",
      label: 'et la même paire, avec faim',
      fr: "J'avais faim, alors j'ai acheté un sandwich.",
      sub: '[zhah-VEH FEHⁿ · ah-LOR zhay ahsh-tay uhⁿ sahⁿd-WEECH]',
      body: "L'état explique l'action. C'est la forme normale pour donner une raison. EN: the state explains the action; this is how you give a reason.",
    },
    {
      head: "j'ai eu faim",
      label: 'ou le moment où ça arrive',
      fr: "J'ai eu faim vers midi.",
      sub: '[ZHAY Ü FEHⁿ vehr mee-DEE]',
      body: "vers midi place le début. Avec une durée, la période est comptée du début à la fin. EN: vers midi places the start; a duration counts the period.",
    },
    {
      head: 'avoir, partout',
      label: 'envie, mal, une amende',
      fr: 'Elle a eu envie de partir tout à coup. / Nous avons eu une amende.',
      sub: '[eh-lah Ü ahⁿ-VEE] · [noo-zah-vohⁿ-ZÜ ü-nah-MAHⁿD]',
      body: "La même logique avec avoir envie, avoir mal, avoir une amende : le passé composé fait arriver la chose. EN: same logic throughout: the passé composé makes it happen.",
    },
  ],
};

const A7_ETRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-etre',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'être : était ou a été',
  frSub: "le décor, ou la période comptée",
  hint: `Cinq cartes. « ${B102_REFRAME} »`,
  audio: REC('rec-b1-04-etre'),
  say: `${B102_REFRAME} Ici, c'est exactement la question.`,
  terms: ['etat', 'moment'],
  cards: [
    {
      head: 'il était malade',
      label: 'le décor du jour',
      fr: 'Ce jour-là, il était malade.',
      sub: '[suh zhoor-LAH · ee-lay-TEH ma-LAD]',
      body: `« ${B102_REFRAME} » Tu décris la situation, sans compter les jours. EN: you describe the situation without counting it.`,
    },
    {
      head: 'il a été malade',
      label: 'il tombe malade',
      fr: 'Il a été malade après le repas.',
      sub: '[ee-lah ay-TAY ma-LAD · a-PREH luh ruh-PAH]',
      body: "La maladie commence après le repas. En anglais : he fell ill. EN: the illness starts after the meal.",
    },
    {
      head: 'il a été malade deux jours',
      label: 'ou la période comptée',
      fr: 'Elle a été absente toute la semaine.',
      sub: '[eh-lah ay-TAY ap-SAHⁿT · toot lah suh-MEN]',
      body: "Avec une durée fermée, le passé composé compte la période, du début à la fin. EN: with a closed duration, the passé composé counts the period.",
    },
    {
      head: "j'étais timide",
      label: 'et pour te décrire',
      fr: "J'étais très timide à l'école.",
      sub: '[zhay-TEH treh tee-MEED ah lay-KOL]',
      body: "Pour une personne, un caractère, une époque : l'imparfait. EN: for a person, a character, an era: the imparfait.",
    },
    {
      head: "j'ai été surpris",
      label: 'et pour une réaction',
      fr: "J'ai été très surpris.",
      sub: '[ZHAY ay-TAY treh sür-PREE]',
      body: "Une réaction qui arrive à un moment. Ça a été difficile marche pareil. EN: a reaction that arrives at a moment.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les deux',
  frSub: 'Les états, et les débuts',
  groups: [
    grp("Les états à l'imparfait", [
      it(E(1220), 'la peur'), it(E(1226), 'le mal de tête'), it(E(1228), "l'envie"), it(E(1230), 'une vieille voiture'),
    ], chk(
      '« J’avais mal à la tête toute la journée. » Le mal commence dans la phrase ? EN: Does the pain start here?',
      ['Non, il était déjà là.', 'Oui.'],
      0,
      "L'imparfait décrit l'état, sans début. EN: the imparfait describes the state, with no start.",
    )),
    grp('Les débuts au passé composé', [
      it(E(1221), 'la peur commence'), it(E(1225), 'la faim arrive'), it(E(1229), "l'envie arrive"), it('fr.a2.verbes.619', 'et la phrase publiée'),
    ], chk(
      "« Quand le chien a aboyé, j'___ peur. » EN: When the dog barked...",
      ['avais', 'ai eu'],
      1,
      'Le moment fait commencer la peur. EN: the moment starts the fear.',
    )),
    grp('être : décor ou période', [
      it(E(1234), 'le décor'), it(E(1235), 'le début'), it(E(1239), 'une période comptée'), it('fr.a2.famille.012', 'le décor, puis une action'),
    ], chk(
      'Tu comptes une période finie : une semaine complète. Tu dis : EN: You count a closed period.',
      ['Elle a été absente toute la semaine.', 'Elle était absente toute la semaine.'],
      0,
      "Compter la période ferme le passé composé. EN: counting the period takes the passé composé.",
    )),
  ],
  audio: AUDIO,
  say: `Décris, ou fais commencer. ${THE_TEST}`,
  terms: ['etat', 'moment'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un état, ou un début',
  frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1222)), ln(E(1223)), ln(E(1226)), ln(E(1227)), ln(E(1234)), ln(E(1235)), ln(E(1240)), ln(E(1241)),
  ],
  questions: [
    { q: 'Première phrase : la peur commence-t-elle dans la phrase ? EN: Does the fear start here?', opts: ['Oui.', 'Non.'], correct: 1, why: "j'avais peur : un état. EN: a state." },
    { q: 'Deuxième phrase : qu’est-ce qui fait commencer la peur ? EN: What starts the fear?', opts: ['Le chien qui aboie.', 'La nuit.', 'Rien.'], correct: 0, why: "Quand le chien a aboyé : le moment est là. EN: the barking is the moment." },
    { q: 'Troisième et quatrième : laquelle raconte un début ? EN: Which one tells a beginning?', opts: ["J'ai eu mal au dos après le déménagement.", "J'avais mal à la tête toute la journée."], correct: 0, why: "après le déménagement place le début. EN: après places the start." },
    { q: 'Sixième phrase : avant le repas, il allait bien ? EN: Was he fine before the meal?', opts: ['Non.', 'Oui.'], correct: 1, why: "a été malade marque le passage à la maladie. EN: it marks the change." },
    { q: 'Dernière phrase : la difficulté est : EN: The difficulty is:', opts: ['finie.', 'toujours là.'], correct: 0, why: "Le passé composé ferme la période. EN: the passé composé closes the period." },
  ],
  audio: REC('rec-b1-04-etats-ecoute'),
  say: `Écoute le début, s'il existe. ${THE_TEST}`,
  terms: ['etat', 'moment'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Correct, mais pas ce que tu voulais dire',
  frSub: 'avoir et être',
  errors: [
    {
      wrong: "Quand j'étais petit, j'ai eu peur des chiens.",
      right: "Quand j'étais petit, j'avais peur des chiens.",
      why: "Tu parles de toute ton enfance. j'ai eu peur raconte une seule fois, et on attend la suite de l'histoire. EN: eu peur is one fright; childhood fear is a state.",
    },
    {
      wrong: "Hier, j'avais mal au dos après le match.",
      right: "Hier, j'ai eu mal au dos après le match.",
      why: "Après le match : le mal commence là. À l'imparfait, on comprend que tu avais déjà mal avant. EN: après marks the start.",
    },
    {
      wrong: 'Ma tante a été malade, mais elle est venue au mariage.',
      right: 'Ma tante était malade, mais elle est venue au mariage.',
      why: "Ici, c'est le décor du jour du mariage. a été malade dirait qu'elle est tombée malade ce jour-là. EN: this is the state that day.",
    },
    {
      wrong: "J'étais très surpris quand tu es entré.",
      right: "J'ai été très surpris quand tu es entré.",
      why: "La surprise arrive au moment où tu entres. L'imparfait dit que la surprise était déjà là avant. EN: the surprise arrives at that moment.",
    },
  ],
  audio: AUDIO,
  say: 'Ces quatre phrases sont correctes. Elles racontent juste une autre histoire.',
  terms: ['etat', 'moment'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le début', '« Quand la lumière s’est éteinte, j’___ peur. » EN: When the light went out...', ['avais', 'ai eu'], 1, 'Le moment fait commencer la peur. EN: the moment starts the fear.'),
  ctl("L'enfance", '« Quand j’étais petit, j’___ peur des chiens. » EN: When I was little...', ['avais', 'ai eu'], 0, "Un état de l'enfance. EN: a childhood state."),
  ctl('La période', 'Elle a été absente toute la semaine. La semaine est : EN: The week is:', ['en cours.', 'comptée, du début à la fin.'], 1, 'Le passé composé compte la période. EN: the passé composé counts it.'),
], ['etat', 'moment']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Avoir peur, être malade',
    opener: { line: 'Une peur qui dure et une peur qui arrive ne se disent pas pareil, même avec le même mot. EN: A fear that lasts and a fear that arrives are not said the same way.', imageRef: 'lessons/pc-imparfait-paires/act07.jpg' },
    sections: [],
    milestone: "Tu décris un état, et tu fais commencer une peur, une faim ou une maladie. EN: You describe a state, and you make a fear, a hunger or an illness begin.",
    estScreens: 40, restPoints: ['a7-etre', 'a7-ecoute'],
  },
  sections: [A7_LECTURE, A7_AVOIR, A7_ETRE, A7_CONSTRUIRE, A7_ECOUTE, A7_ERREURS, A7_CHECK],
  imports: ['fr.a2.verbes.619', 'fr.a2.verbes.618', 'fr.a2.famille.012'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — FALLOIR, CROIRE, PENSER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A restaurant with no free table, and the two ways of being wrong:
 *  what you believed, and what was required. */
const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Il fallait réserver',
  frSub: 'Ce que tu croyais',
  setting: "Devant un restaurant, à Bruxelles, un samedi soir. EN: Outside a restaurant in Brussels, a Saturday evening.",
  bubbles: [
    { from: 'narrator', fr: 'Sam et Inès arrivent devant le restaurant. Il est complet.', en: 'Sam and Inès arrive at the restaurant. It is full.' },
    { from: 'user', fr: 'Je croyais que c’était ouvert à tout le monde le samedi.', en: 'I thought it was open to everyone on Saturdays.', warn: 'je croyais : une idée que tu avais, et qui était fausse. EN: a belief you had, and it was wrong.' },
    { from: 'coach', fr: 'Il fallait réserver. C’est écrit sur la porte.', en: 'You had to book. It says so on the door.', warn: 'il fallait : la règle. On ne sait pas encore si quelqu’un a réservé. EN: fallait states the rule.' },
    { from: 'user', fr: 'Je ne savais pas qu’il fallait réserver.', en: "I didn't know you had to book." },
    { from: 'coach', fr: 'La semaine dernière, il a fallu attendre une heure. On a attendu.', en: 'Last week we had to wait an hour. We waited.', warn: 'il a fallu : le besoin, et c’est fait. EN: the need was met.' },
    { from: 'user', fr: 'Bon. J’ai cru un instant que la soirée était finie.', en: 'Right. For a moment I thought the evening was over.', warn: "j'ai cru : une idée d'un seul instant. EN: a belief that lasted one moment." },
  ],
  closing: { fr: 'il fallait : la règle. il a fallu : et on l’a fait. je croyais : une idée fausse.', en: 'fallait: the rule. a fallu: and it was done. croyais: a wrong idea.' },
  audio: REC('rec-b1-04-resto'),
  say: `Deux façons de se tromper. ${THE_TEST}`,
  terms: ['faux', 'resultat'],
};

const A8_FALLOIR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-falloir',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-paires',
  title: 'falloir : fallait ou a fallu',
  frSub: 'le besoin, puis le besoin rempli',
  hint: 'Quatre cartes. Le verbe ne change jamais de sujet : toujours il.',
  audio: REC('rec-b1-04-falloir'),
  say: REFRAME,
  terms: ['resultat', 'etat'],
  cards: [
    {
      head: 'il fallait',
      label: 'la règle, le besoin',
      fr: 'Il fallait partir tôt.',
      sub: '[eel fah-LEH par-TEER TOH]',
      body: "C'était nécessaire. Est-ce qu'on est parti tôt ? La phrase ne le dit pas. EN: it was necessary; the outcome is open.",
    },
    {
      head: 'il a fallu',
      label: 'et on l’a fait',
      fr: 'Il a fallu partir tôt.',
      sub: '[ee-lah fah-LÜ par-TEER TOH]',
      body: "Le besoin est arrivé, et on a obéi. Souvent avec une durée : il a fallu deux heures. EN: the need came, and it was met.",
    },
    {
      head: 'il fallait un visa',
      label: 'une règle qui durait',
      fr: 'Il fallait un visa pour entrer.',
      sub: '[eel fah-LEH uhⁿ vee-ZAH poor ahⁿ-TRAY]',
      body: "Une règle générale, à cette époque. C'est de la description. EN: a general rule at that time: description.",
    },
    {
      head: 'il fallait le dire',
      label: 'et le petit reproche',
      fr: 'Il fallait le dire.',
      sub: '[eel fah-LEH luh DEER]',
      body: "C'était nécessaire, et tu ne l'as pas fait. En anglais : you should have said so. EN: you should have said so.",
    },
  ],
};

const A8_CROIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-croire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'croire, penser : une idée fausse',
  frSub: 'croyais, pensais, et j’ai cru',
  hint: 'Cinq cartes. Regarde combien de temps dure l’idée.',
  audio: REC('rec-b1-04-croire'),
  say: `Ce que tu croyais avant, et ce que tu as appris après. ${REFRAME}`,
  terms: ['faux', 'moment'],
  cards: [
    {
      head: 'je croyais que',
      label: 'une idée fausse, qui durait',
      fr: "Je croyais que c'était fermé.",
      sub: '[zhuh krwah-YEH kuh say-TEH fehr-MAY]',
      body: "Tu le croyais avant, et tu as appris le contraire. C'est la phrase normale pour raconter une surprise. EN: the normal way to report a surprise.",
    },
    {
      head: 'je pensais que',
      label: 'la même chose, plus neutre',
      fr: 'Je pensais que tu étais à Montréal.',
      sub: '[zhuh pahⁿ-SEH kuh tü ay-teh ah mohⁿ-ray-AL]',
      body: "penser et croire marchent pareil ici. Après je croyais que, le deuxième verbe est souvent à l'imparfait aussi. EN: penser and croire behave the same here.",
    },
    {
      head: "j'ai cru que",
      label: 'une idée d’un seul instant',
      fr: "J'ai cru que tu étais parti.",
      sub: '[ZHAY KRÜ kuh tü ay-teh par-TEE]',
      body: "Une seconde de panique, puis c'est fini. Correct, et différent de je croyais. EN: one moment of belief, then it is over.",
    },
    {
      head: 'on a cru entendre',
      label: 'et avec un verbe',
      fr: 'On a cru entendre du bruit.',
      sub: '[ohⁿ-nah KRÜ ahⁿ-TAHⁿDR dü BRWEE]',
      body: "Le même instant court : on a cru, puis on a vérifié. EN: the same short moment: we thought, then we checked.",
    },
    {
      head: 'je pensais à toi',
      label: 'et attention à penser à',
      fr: "Je pensais à toi hier soir. / J'ai pensé à toi quand j'ai vu la photo.",
      sub: '[zhuh pahⁿ-SEH ah TWAH] · [ZHAY pahⁿ-SAY ah TWAH]',
      body: "Avec penser à, l'imparfait dure et le passé composé dit un moment précis. EN: with penser à, the imparfait lasts and the passé composé is one moment.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les deux',
  frSub: 'Le besoin, et l’idée',
  groups: [
    grp('falloir', [
      it(E(1242), 'la règle'), it(E(1243), 'et le besoin rempli'), it(E(1246), 'une règle qui durait'), it(E(1247), 'une durée comptée'),
    ], chk(
      '« Il ___ deux heures pour tout ranger. » Le rangement est fini. EN: The tidying is done.',
      ['a fallu', 'fallait'],
      0,
      "Une durée comptée, et le travail est fait : il a fallu. EN: a counted duration, and the job is done.",
    )),
    grp('croire et penser', [
      it(E(1249), 'je'), it(E(1251), 'une idée fausse'), it(E(1253), 'la même chose avec penser'), it('fr.b1.cafe.098', 'et la phrase publiée'),
    ], chk(
      "Tu arrives et le magasin est ouvert. Tu dis : EN: You arrive and the shop is open.",
      ["J'ai cru que c'était fermé.", "Je croyais que c'était fermé."],
      1,
      "Une idée que tu avais avant : je croyais. EN: a belief you held before.",
    )),
    grp("L'instant, et le reproche", [
      it(E(1252), 'une seconde de panique'), it(E(1257), 'un bruit, peut-être'), it(E(1248), 'le reproche'), it(E(1254), 'une idée fausse, au négatif'),
    ], chk(
      'Ton ami ne t’a rien dit, et tu es fâché. Tu dis : EN: Your friend said nothing.',
      ['Il fallait le dire.', 'Il a fallu le dire.'],
      0,
      "Le reproche passe par l'imparfait : il fallait le dire. EN: the reproach takes the imparfait.",
    )),
  ],
  audio: AUDIO,
  say: `Le besoin, puis l'idée. ${THE_TEST}`,
  terms: ['faux', 'resultat'],
};

const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Dans la vraie vie',
  frSub: 'Six phrases que tu vas entendre',
  examples: [
    { fr: "Je ne savais pas qu'il fallait réserver.", en: "I didn't know you had to book.", note: 'la règle, apprise trop tard' },
    { fr: 'Il a fallu attendre près d’une heure.', en: 'We had to wait nearly an hour.', note: 'le besoin, et l’attente réelle' },
    { fr: 'Je croyais bien faire.', en: 'I thought I was doing the right thing.', note: 'la phrase des excuses' },
    { fr: 'Elle croyait que la réunion était à dix heures.', en: 'She thought the meeting was at ten.', note: 'une idée fausse, chez quelqu’un d’autre' },
    { fr: "Je ne pensais pas que c'était si loin.", en: "I didn't think it was so far.", note: 'au négatif, très fréquent' },
    { fr: "J'ai pensé à toi quand j'ai vu la photo.", en: 'I thought of you when I saw the photo.', note: 'un moment précis, avec penser à' },
  ],
  audio: AUDIO,
  say: 'Ces six phrases reviennent tout le temps dans une conversation.',
  terms: ['faux'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le besoin', '« Il fallait partir tôt. » Est-on parti tôt ? EN: Did they leave early?', ['Oui.', 'On ne sait pas.'], 1, "fallait donne le besoin, pas le résultat. EN: fallait gives the need."),
  ctl("L'idée fausse", 'Tu pensais que le café fermait à minuit. Il ferme à vingt heures. Tu dis : EN: You were wrong about the closing time.', ['Je croyais qu’il fermait à minuit.', "J'ai cru qu'il fermait à minuit."], 0, "Une idée que tu avais : je croyais. EN: a belief you held."),
  ctl("L'instant", '« J’ai cru que tu étais parti. » Combien de temps as-tu cru ça ? EN: How long did you believe it?', ['Des semaines.', 'Un instant.'], 1, "j'ai cru : un moment court. EN: a short moment."),
], ['faux', 'resultat']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Falloir, croire, penser',
    opener: { line: 'Ce qu’il fallait faire, et ce que tu croyais : deux façons de se tromper, deux temps différents. EN: What had to be done and what you believed: two ways of being wrong.', imageRef: 'lessons/pc-imparfait-paires/act08.jpg' },
    sections: [],
    milestone: 'Tu racontes une règle, un besoin rempli et une idée fausse. EN: You can report a rule, a need met and a wrong belief.',
    estScreens: 32, restPoints: ['a8-croire'],
  },
  sections: [A8_HISTOIRE, A8_FALLOIR, A8_CROIRE, A8_CONSTRUIRE, A8_EXEMPLES, A8_CHECK],
  imports: ['fr.b1.cafe.098', 'fr.b1.heure-et-date.083', 'fr.a2.verbes.612'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LES INDICES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The same day told twice, with the same time words in both. b1.03
 *  owns the cues; this act shows each one with BOTH tenses. */
const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Hier, deux fois',
  frSub: 'Les mêmes mots, deux temps',
  text: "Hier, il pleuvait quand je suis sorti. Hier, il a plu toute la journée : les deux phrases sont correctes, et elles ne racontent pas la même chose. La première pose le décor avant ma sortie. La seconde compte la pluie, du matin au soir. Hier soir, je travaillais encore à minuit. Hier soir, j'ai travaillé jusqu'à minuit : la première me montre au travail, la seconde compte les heures. Pendant les vacances, nous allions à la mer tous les dimanches. Pendant trois jours, il a neigé sans arrêt. Le mot pendant n'a pas choisi : c'est l'habitude, ou la durée comptée, qui décide.",
  glossary: [
    { word: 'quand je suis sorti', en: 'when I went out', note: "L'action qui coupe le décor." },
    { word: 'toute la journée', en: 'all day long', note: 'Une durée fermée, du matin au soir.' },
    { word: 'jusqu’à minuit', en: 'until midnight', note: 'La fin de la période est donnée.' },
    { word: 'sans arrêt', en: 'non-stop', note: 'Sans s’arrêter une seule fois.' },
    { word: 'tous les dimanches', en: 'every Sunday', note: 'Une habitude qui se répète.' },
  ],
  questions: [
    { q: 'Les deux phrases avec hier sont-elles correctes ?', a: "Oui. hier va avec les deux temps. Ce qui change, c'est ce que tu montres : le décor ou la journée comptée." },
    { q: 'Quelle phrase te montre la personne au travail à minuit ?', a: "« Hier soir, je travaillais encore à minuit. » L'imparfait montre la scène." },
    { q: 'Pourquoi « nous allions » après pendant les vacances ?', a: 'Parce que c’est une habitude : tous les dimanches. L’habitude gagne contre le mot pendant.' },
    { q: 'Pourquoi « il a neigé » après pendant trois jours ?', a: 'Parce que la durée est comptée et fermée : trois jours, du début à la fin.' },
    { q: 'Le mot pendant choisit-il le temps ?', a: 'Non. Il aide, et le sens décide. C’est un indice, pas une règle.' },
  ],
  audio: AUDIO,
  say: `« ${B103_REFRAME} » Et les mots de temps ne décident pas.`,
  terms: ['indice', 'choix'],
};

const A9_PAIRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-paires',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-indices',
  title: 'hier, pendant, depuis',
  frSub: 'Des indices, pas des règles',
  hint: 'Six cartes. Chaque indice avec ses deux temps.',
  audio: REC('rec-b1-04-indices'),
  say: `Un indice t'aide. Il ne choisit pas. ${REFRAME}`,
  terms: ['indice', 'choix'],
  cards: [
    {
      head: 'hier + imparfait',
      label: 'le décor',
      fr: 'Hier, il pleuvait.',
      sub: '[YEHR · eel pluh-VEH]',
      body: `« ${B103_REFRAME} » hier ne choisit rien : ici, la pluie est le décor. EN: hier picks nothing; here the rain is the background.`,
    },
    {
      head: 'hier + passé composé',
      label: 'l’action',
      fr: 'Hier, il a plu.',
      sub: '[YEHR · ee-lah PLÜ]',
      body: "Même mot, autre temps : la pluie devient un fait de la journée. Les deux sont corrects. EN: same word, other tense, both correct.",
    },
    {
      head: 'pendant + durée',
      label: 'une durée comptée',
      fr: 'Il a lu pendant deux heures.',
      sub: '[ee-lah LÜ pahⁿ-DAHⁿ duh ZUHR]',
      body: "Une durée avec un début et une fin : en général, le passé composé. EN: a closed length of time usually takes the passé composé.",
    },
    {
      head: 'et le contre-exemple',
      label: 'une habitude',
      fr: 'Tous les soirs, il lisait pendant deux heures.',
      sub: '[too lay SWAHR · eel lee-ZEH pahⁿ-DAHⁿ duh ZUHR]',
      body: "Le même pendant, et pourtant l'imparfait : tous les soirs en fait une habitude. EN: a habit brings the imparfait back.",
    },
    {
      head: 'depuis + imparfait',
      label: 'à reconnaître seulement',
      fr: 'Il habitait à Québec depuis deux ans quand il a rencontré Léa.',
      body: "Un état qui durait déjà, jusqu'à un moment du passé. Comprends-le ; tu n'as pas besoin de le produire ici. EN: recognise it; you do not need to produce it yet.",
    },
    {
      head: 'depuis + présent',
      label: 'et ce que tu connais déjà',
      fr: 'Je le connais depuis dix ans.',
      sub: '[zhuh luh koh-NEH duh-PWEE dee-ZAHⁿ]',
      body: "Au présent, l'état dure encore aujourd'hui. À l'imparfait, il durait à ce moment-là. EN: present: still true now; imparfait: true back then.",
    },
  ],
};

/** ONE tapTable for this act: six cues, both tenses, six rows, the ceiling.
 *  The full list is in `sheet-indices`. */
const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-table',
  layer: 'core',
  sheetId: 'sheet-indices',
  title: 'Six indices, deux temps',
  frSub: 'Touche une ligne',
  cols: ['Indice', 'Imparfait', 'Passé composé'],
  rows: [
    {
      cells: ['hier', 'il pleuvait', 'il a plu'],
      say: 'Hier, il pleuvait.',
      detail: { title: 'hier', body: "Le décor de la journée, ou la journée comptée. Les deux se disent. EN: the background, or the day counted. Both are said.", say: 'Hier, il a plu.' },
    },
    {
      cells: ['hier soir', 'je travaillais', "j'ai travaillé"],
      say: 'Hier soir, je travaillais encore à minuit.',
      detail: { title: 'hier soir', body: "encore montre la scène ; jusqu'à compte les heures. EN: encore shows the scene; jusqu'à counts the hours.", say: "Hier soir, j'ai travaillé jusqu'à minuit." },
    },
    {
      cells: ['pendant + durée', 'il lisait', 'il a lu'],
      say: 'Il a lu pendant deux heures.',
      detail: { title: 'pendant', body: "Une durée fermée va au passé composé, sauf si c'est une habitude : tous les soirs. EN: a closed duration, unless it is a habit.", say: 'Tous les soirs, il lisait pendant deux heures.' },
    },
    {
      cells: ['ce jour-là', 'tout allait bien', 'tout a changé'],
      say: 'Ce jour-là, tout allait bien.',
      detail: { title: 'ce jour-là', body: "Le même jour peut porter le décor et l'action. EN: the same day can carry the background and the action.", say: 'Ce jour-là, tout a changé.' },
    },
    {
      cells: ['en 2019', 'je travaillais', "j'ai changé"],
      say: 'En 2019, je travaillais à Genève.',
      detail: { title: 'une date', body: "Une date n'oblige pas le passé composé : une situation qui dure reste à l'imparfait. EN: a date does not force the passé composé.", say: "En 2019, j'ai changé de travail." },
    },
    {
      cells: ['depuis', 'il habitait depuis', 'il connaît depuis'],
      say: 'Il habitait à Québec depuis deux ans quand il a rencontré Léa.',
      detail: { title: 'depuis', body: "depuis + imparfait : un état qui durait jusqu'à un moment du passé. depuis + présent : c'est encore vrai. EN: imparfait then, present now.", say: 'Je le connais depuis dix ans.' },
    },
  ],
  audio: AUDIO,
  say: `Six indices, et aucun ne décide seul. ${REFRAME}`,
  terms: ['indice'],
};

/** The counterexamples, on one screen: every cue the act teaches, with the
 *  case that breaks the rule the learner is about to invent. */
const A9_CONTRE: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-contre',
  layer: 'core',
  sheetId: 'sheet-indices',
  title: 'Les contre-exemples',
  frSub: 'La règle que tu allais inventer',
  examples: [
    { fr: 'Hier, il pleuvait.', en: 'Yesterday it was raining.', note: 'hier + imparfait : la règle « hier = passé composé » est fausse' },
    { fr: 'Tous les soirs, il lisait pendant deux heures.', en: 'Every evening he read for two hours.', note: 'pendant + imparfait, parce que c’est une habitude' },
    { fr: 'En 2019, je travaillais à Genève.', en: 'In 2019 I was working in Geneva.', note: 'une date + imparfait, parce que c’est une situation' },
    { fr: 'Le matin, je prenais le bus.', en: 'In the mornings I used to take the bus.', note: 'une habitude sans mot de temps spécial' },
    { fr: "Ce matin-là, j'ai pris un taxi.", en: 'That morning I took a taxi.', note: 'le même matin, une seule fois' },
    { fr: 'Une fois, nous avons mangé au restaurant.', en: 'Once, we ate at a restaurant.', note: 'une fois ferme la porte : passé composé' },
  ],
  audio: AUDIO,
  say: 'Chaque indice a son contre-exemple. C’est pour ça que ce ne sont pas des règles.',
  terms: ['indice', 'choix'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Choisis avec le sens',
  frSub: 'L’indice aide, le sens décide',
  groups: [
    grp('hier, hier soir', [
      it(E(1260), 'le décor'), it(E(1261), "l'action"), it(E(1262), 'la scène à minuit'), it(E(1263), 'les heures comptées'),
    ], chk(
      '« Hier, il ___ quand je suis sorti. » Tu poses le décor. EN: You set the background.',
      ['pleuvait', 'a plu'],
      0,
      "Le décor autour de ta sortie : imparfait. EN: background around your action.",
    )),
    grp('pendant', [
      it(E(1264), 'une durée fermée'), it(E(1265), 'une habitude'), it(E(1266), 'une habitude, en vacances'), it(E(1267), 'trois jours comptés'),
    ], chk(
      '« Tous les samedis, nous ___ au marché pendant une heure. » EN: Every Saturday...',
      ['sommes allés', 'allions'],
      1,
      "tous les samedis : une habitude, donc l'imparfait, malgré pendant. EN: a habit wins over pendant.",
    )),
    grp('ce jour-là, une date, depuis', [
      it(E(1270), 'le décor du jour'), it(E(1271), "l'action du jour"), it(E(1278), 'une date + imparfait'), it(E(1268), 'depuis + imparfait'),
    ], chk(
      '« En 2019, je ___ à Genève. » Tu décris ta vie à cette époque. EN: You describe your life then.',
      ['travaillais', 'ai travaillé'],
      0,
      "Une situation qui dure : l'imparfait, même avec une date. EN: a lasting situation, even with a date.",
    )),
  ],
  audio: AUDIO,
  say: `Regarde l'indice, puis oublie-le et regarde le sens. ${THE_TEST}`,
  terms: ['indice', 'choix'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le même mot, deux histoires',
  frSub: 'Écoute, puis réponds',
  lines: [
    ln(E(1260)), ln(E(1261)), ln(E(1262)), ln(E(1263)), ln(E(1274)), ln(E(1275)), ln(E(1278)), ln(E(1279)),
  ],
  questions: [
    { q: 'Les deux premières phrases commencent par hier. Sont-elles correctes ? EN: Are both correct?', opts: ['Seulement la première.', 'Les deux.', 'Seulement la deuxième.'], correct: 1, why: 'hier va avec les deux temps. EN: hier works with both tenses.' },
    { q: 'Troisième phrase : où est la personne à minuit ? EN: Where is the person at midnight?', opts: ['Déjà partie.', 'Encore au travail.'], correct: 1, why: "je travaillais encore : la scène continue. EN: the scene is still running." },
    { q: 'Cinquième phrase : combien de fois ? EN: How many times?', opts: ['Souvent, c’était l’habitude.', 'Une fois.'], correct: 0, why: "Le matin + imparfait : une habitude. EN: a habit." },
    { q: 'Sixième phrase : combien de fois ? EN: How many times?', opts: ['Souvent.', 'Une fois.'], correct: 1, why: "Ce matin-là ferme la journée : une fois. EN: that one morning." },
    { q: 'Les deux dernières commencent par En 2019. Pourquoi deux temps ? EN: Why two tenses?', opts: ['La première décrit, la seconde raconte un changement.', 'Une erreur.'], correct: 0, why: "Une date n'oblige rien : le sens décide. EN: a date forces nothing." },
  ],
  audio: REC('rec-b1-04-indices-ecoute'),
  say: `Écoute, puis choisis avec le sens. ${THE_TEST}`,
  terms: ['indice'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Les fausses règles',
  frSub: 'hier, pendant, une date',
  rule: {
    title: 'Un mot de temps ne choisit jamais seul',
    body: `On t'a peut-être dit : hier, donc passé composé. C'est faux. Un indice t'aide à comprendre, et c'est le sens qui décide. EN: a time word never picks the tense on its own.`,
  },
  cards: [
    { promptLabel: 'Le décor de la journée.', promptSound: 'Hier, il a plu quand je suis sorti.', fr: 'Hier, il pleuvait quand je suis sorti.', ipa: '/jɛʁ il plø.vɛ kɑ̃ ʒə sɥi sɔʁ.ti/', tip: "Le décor autour d'une action : imparfait. EN: background around an action." },
    { promptLabel: 'Une habitude de vacances.', promptSound: 'Pendant les vacances, nous sommes allés à la mer tous les dimanches.', fr: 'Pendant les vacances, nous allions à la mer tous les dimanches.', ipa: '/pɑ̃.dɑ̃ le va.kɑ̃s nu.za.ljɔ̃ a la mɛʁ tu le di.mɑ̃ʃ/', tip: "tous les dimanches : une habitude. EN: a habit." },
    { promptLabel: 'Ta vie en 2019.', promptSound: "En 2019, j'ai travaillé à Genève, c'était agréable.", fr: "En 2019, je travaillais à Genève, c'était agréable.", ipa: '/ɑ̃ dø mil diz.nœf ʒə tʁa.va.jɛ a ʒə.nɛv se.tɛ.ta.ɡʁe.abl/', tip: "Une situation qui dure, même avec une date. EN: a lasting situation, even with a date." },
    { promptLabel: 'La neige, trois jours comptés.', promptSound: 'Pendant trois jours, il neigeait sans arrêt.', fr: 'Pendant trois jours, il a neigé sans arrêt.', ipa: '/pɑ̃.dɑ̃ tʁwa ʒuʁ i.la ne.ʒe sɑ̃.za.ʁɛ/', tip: "Une durée comptée et fermée. EN: a counted, closed duration." },
    { promptLabel: 'Ce matin précis.', promptSound: 'Ce matin-là, je prenais un taxi, puis je suis arrivé.', fr: "Ce matin-là, j'ai pris un taxi.", ipa: '/sə ma.tɛ̃.la ʒe pʁi ɛ̃ tak.si/', tip: "Une fois, un matin précis. EN: once, one precise morning." },
    { promptLabel: 'Le changement de 2019.', promptSound: 'En 2019, je changeais de travail.', fr: "En 2019, j'ai changé de travail.", ipa: '/ɑ̃ dø mil diz.nœf ʒe ʃɑ̃.ʒe də tʁa.vaj/', tip: "Un changement, une fois : passé composé. EN: one change, once." },
  ],
  drill: [
    { promptSay: 'Hier, il ... quand je suis sorti. (le décor)', opts: ['a plu', 'pleuvait'], correct: 1 },
    { promptSay: 'Hier, il ... toute la journée. (la journée comptée)', opts: ['a plu', 'pleuvait'], correct: 0 },
    { promptSay: 'Tous les soirs, il ... pendant deux heures.', opts: ['a lu', 'lisait'], correct: 1 },
    { promptSay: 'Samedi, il ... pendant deux heures, une seule fois.', opts: ['a lu', 'lisait'], correct: 0 },
    { promptSay: 'En 2019, je ... à Genève. (ta vie à cette époque)', opts: ['ai travaillé', 'travaillais'], correct: 1 },
    { promptSay: 'En 2019, j’... de travail. (le changement)', opts: ['ai changé', 'changeais'], correct: 0 },
    { promptSay: 'Le matin, je ... le bus. (l’habitude)', opts: ['ai pris', 'prenais'], correct: 1 },
    { promptSay: 'Ce matin-là, j’... un taxi.', opts: ['ai pris', 'prenais'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un mot de temps ne choisit jamais seul' },
    { label: 'Six phrases', kind: 'cards', title: 'La fausse règle, puis la bonne phrase' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-04-indices-piege'),
  say: `L'indice aide. Le sens décide. ${REFRAME}`,
  terms: ['indice', 'choix'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('hier', '« Hier » oblige-t-il le passé composé ? EN: Does hier force the passé composé?', ['Oui.', 'Non : Hier, il pleuvait est correct.'], 1, 'hier est un indice, pas une règle. EN: a clue, not a rule.'),
  ctl('pendant', '« Tous les soirs, il lisait pendant deux heures. » Pourquoi l’imparfait ? EN: Why the imparfait?', ['Parce que c’est une habitude.', 'À cause de pendant.'], 0, "L'habitude gagne contre l'indice. EN: the habit beats the cue."),
  ctl('depuis', '« Il habitait là depuis deux ans quand il l’a rencontrée. » Ça veut dire : EN: It means:', ['Il y a habité deux ans, puis il est parti.', 'Il y habitait déjà depuis deux ans.'], 1, 'depuis + imparfait : un état qui durait encore. EN: a state still running then.'),
], ['indice', 'choix']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Les indices',
    opener: { line: 'On t’a peut-être appris que hier veut dire passé composé. Cet acte casse cette fausse règle. EN: You may have been taught that hier means passé composé. This act breaks that false rule.', imageRef: 'lessons/pc-imparfait-paires/act09.jpg' },
    sections: [],
    milestone: 'Tu lis hier, pendant et une date comme des indices, avec leur contre-exemple. EN: You read hier, pendant and a date as clues, each with its counterexample.',
    estScreens: 42, restPoints: ['a9-table', 'a9-construire', 'a9-ecoute'],
  },
  sections: [A9_LECTURE, A9_PAIRES, A9_TABLE, A9_CONTRE, A9_CONSTRUIRE, A9_ECOUTE, A9_PIEGE, A9_CHECK],
  imports: ['fr.a1.heure-et-date.048', 'fr.a2.heure-et-date.103', 'fr.a1.nombres.067', 'fr.a2.deplacements.013'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — TON CHOIX
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The same evening, told twice, by two people who were both there.
 *  Neither version is wrong: that is the whole act. */
const A10_DEUX: Sec<'story'> = {
  type: 'story',
  id: 'a10-deux',
  layer: 'core',
  title: 'La même soirée, deux fois',
  frSub: 'Personne ne se trompe',
  setting: "Deux amis racontent le même concert à une troisième personne. EN: Two friends describe the same concert to a third.",
  bubbles: [
    { from: 'narrator', fr: 'Léa et Tom étaient au même concert, samedi soir.', en: 'Léa and Tom were at the same concert on Saturday evening.' },
    { from: 'coach', fr: 'Ce soir-là, il neigeait, et la salle était à moitié vide.', en: 'That evening it was snowing, and the hall was half empty.', warn: 'Léa pose le décor : imparfait. EN: Léa sets the background.' },
    { from: 'user', fr: 'Ce soir-là, il a neigé, et cinquante personnes ont annulé.', en: 'That evening it snowed, and fifty people cancelled.', warn: 'Tom raconte les faits : passé composé. EN: Tom reports the facts.' },
    { from: 'coach', fr: 'Le concert durait encore à minuit, c’était magnifique.', en: 'The concert was still going at midnight; it was wonderful.' },
    { from: 'user', fr: 'Le concert a duré deux heures et demie. La fête a été magnifique.', en: 'The concert lasted two and a half hours. The party was wonderful.' },
    { from: 'narrator', fr: 'Les deux disent vrai. Léa montre l’ambiance, Tom compte les choses.', en: 'Both are telling the truth. Léa shows the mood; Tom counts things.' },
  ],
  closing: { fr: 'Le même fait, deux façons de le montrer.', en: 'The same fact, two ways of showing it.' },
  audio: REC('rec-b1-04-concert'),
  say: `${B103_REFRAME} Et parfois, tu choisis.`,
  terms: ['choix', 'indice'],
};

const A10_CHOIX: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-choix',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-choix',
  title: 'Décor ou action',
  frSub: 'Les deux sont corrects',
  hint: 'Cinq cartes. Aucune n’est fausse.',
  audio: REC('rec-b1-04-choix'),
  say: `Ici, tu ne cherches pas la bonne réponse. Tu choisis. ${REFRAME}`,
  terms: ['choix'],
  cards: [
    {
      head: 'il neigeait',
      label: 'tu montres l’ambiance',
      fr: 'Ce soir-là, il neigeait.',
      sub: '[suh swahr-LAH · eel neh-ZHEH]',
      body: "Le décor : on attend la suite de l'histoire. C'est un choix de narrateur. EN: background; the listener waits for what happens next.",
    },
    {
      head: 'il a neigé',
      label: 'tu comptes le fait',
      fr: 'Ce soir-là, il a neigé.',
      sub: '[suh swahr-LAH · ee-lah neh-ZHAY]',
      body: "Un fait de la soirée, au même titre que les autres. Correct aussi. EN: one fact among the others; also correct.",
    },
    {
      head: 'j’habitais / j’ai habité',
      label: 'même ta vie',
      fr: "À l'époque, j'habitais à Lyon. / J'ai habité à Lyon pendant dix ans.",
      sub: "[ah lay-POK · zhah-bee-TEH ah LYOHⁿ] · [zhay ah-bee-TAY ah LYOHⁿ]",
      body: "La première te met dans le décor. La seconde compte dix ans, du début à la fin. EN: the first puts you in the scene; the second counts the ten years.",
    },
    {
      head: 'la fête était / a été',
      label: 'et un jugement',
      fr: 'La fête était magnifique. / La fête a été magnifique.',
      sub: '[lah FET ay-teh mah-nyee-FEEK] · [lah FET ah ay-tay mah-nyee-FEEK]',
      body: "La première te remet dans la soirée. La seconde donne un bilan, une fois la fête finie. EN: the first puts you back in the evening; the second gives a verdict.",
    },
    {
      head: 'et dans une seule phrase',
      label: 'décor et action ensemble',
      fr: "Le train est parti à l'heure, et tout le monde était content.",
      sub: '[luh TREHⁿ eh par-TEE ah LUHR · ay too luh mohⁿd ay-teh kohⁿ-TAHⁿ]',
      body: `« ${B103_REFRAME} » L'action avance, le décor l'entoure. EN: the action moves; the background surrounds it.`,
    },
  ],
};

const A10_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a10-usages',
  layer: 'core',
  sheetId: 'sheet-choix',
  title: 'Quand les gens choisissent',
  frSub: 'Quatre situations',
  cases: [
    { situation: "Tu veux que ton ami voie la scène. EN: you want your friend to see the scene.", fr: 'Il faisait beau, les gens mangeaient dehors, et les enfants criaient.', en: 'The weather was fine, people were eating outside, and the children were shouting.' },
    { situation: 'Tu fais un rapport au travail. EN: you are reporting at work.', fr: 'La réunion a duré deux heures et nous avons signé le contrat.', en: 'The meeting lasted two hours and we signed the contract.' },
    { situation: 'Tu donnes un bilan, une fois fini. EN: you give a verdict, once it is over.', fr: 'Ça a été difficile, mais on a réussi.', en: 'It was hard, but we managed.' },
    { situation: 'Tu remets quelqu’un dans un souvenir. EN: you put someone back inside a memory.', fr: 'Nous étions très heureux là-bas, tu te souviens.', en: 'We were very happy there, you remember.' },
  ],
  audio: AUDIO,
  say: 'Le narrateur choisit ce qu’il montre. Toi aussi.',
  terms: ['choix'],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Choisis, et assume',
  frSub: 'Deux versions, une intention',
  groups: [
    grp('La météo, deux fois', [
      it(E(1280), 'le décor'), it(E(1281), "l'action"), it(E(1291), 'le décor du matin'), it(E(1290), 'la semaine comptée'),
    ], chk(
      'Tu veux que ton ami imagine la scène. Tu dis : EN: You want your friend to picture the scene.',
      ['Ce soir-là, il neigeait.', 'Ce soir-là, il a neigé.'],
      0,
      "Le décor, pour montrer l'ambiance. Les deux phrases sont correctes. EN: background, to show the mood. Both are correct.",
    )),
    grp('Une période de ta vie', [
      it(E(1282), 'dix ans comptés'), it(E(1283), 'le décor de l’époque'), it(E(1288), 'le décor'), it(E(1289), 'le bilan'),
    ], chk(
      'Tu comptes dix ans, du début à la fin. Tu dis : EN: You count ten years, start to finish.',
      ["J'habitais à Lyon pendant dix ans.", "J'ai habité à Lyon pendant dix ans."],
      1,
      "Compter la période ferme le passé composé. EN: counting the period takes the passé composé.",
    )),
    grp('Une soirée', [
      it(E(1284), 'le décor'), it(E(1285), 'le bilan'), it(E(1286), 'la durée comptée'), it(E(1287), 'la scène à minuit'),
    ], chk(
      'Une des deux phrases est-elle fausse : « La fête était magnifique » ou « La fête a été magnifique » ? EN: Is one of them wrong?',
      ['La première.', 'La deuxième.', 'Aucune : c’est un choix.'],
      2,
      "Les deux se disent. Elles montrent deux choses différentes. EN: both are said; they show different things.",
    )),
  ],
  audio: AUDIO,
  say: 'Ici, il n’y a pas de faute. Il y a une intention.',
  terms: ['choix'],
};

/** The two questions that settle a real choice, as hacks: short, and with a
 *  `why` so they do not become folklore. */
const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Deux questions pour choisir',
  frSub: 'Quand les deux sont possibles',
  hacks: [
    { hack: 'Demande-toi : est-ce que je montre la scène, ou est-ce que je compte ? EN: am I showing the scene, or counting?', why: 'Montrer la scène va avec l’imparfait. Compter une durée ou un nombre va avec le passé composé.' },
    { hack: 'Demande-toi : est-ce que la suite arrive pendant, ou après ? EN: does the next thing happen during, or after?', why: 'Pendant, c’est le décor : il pleuvait quand je suis sorti. Après, c’est une suite d’actions.' },
    { hack: 'Si tu donnes un bilan, prends le passé composé. EN: for a verdict, use the passé composé.', why: 'Ça a été difficile, la fête a été magnifique : le jugement arrive quand c’est fini.' },
    { hack: 'Si tu hésites encore, raconte l’action et décris autour. EN: if you still hesitate, tell the action and describe around it.', why: 'C’est la forme la plus naturelle d’un récit, et personne ne te reprendra.' },
  ],
  audio: AUDIO,
  say: 'Deux questions, et tu choisis sans stress.',
  terms: ['choix', 'indice'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le choix', '« Ce soir-là, il neigeait » et « Ce soir-là, il a neigé » : EN: Both sentences:', ['Les deux sont correctes.', 'Une seule est correcte.'], 0, 'Décor ou action : un choix. EN: background or action: a choice.'),
  ctl('Le bilan', 'Tu donnes un bilan après un projet difficile. Tu dis : EN: A verdict after a hard project.', ['C’était difficile pendant le projet.', 'Ça a été difficile.'], 1, 'Le bilan arrive quand c’est fini. EN: the verdict comes when it is over.'),
  ctl('La scène', 'Tu veux montrer la salle à minuit. Tu dis : EN: You want to show the hall at midnight.', ['Le concert durait encore à minuit.', 'Le concert a duré deux heures.'], 0, "L'imparfait te remet dans la scène. EN: the imparfait puts you back in the scene."),
], ['choix']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Ton choix',
    opener: { line: 'Deux amis racontent la même soirée avec deux temps différents, et aucun des deux ne se trompe. EN: Two friends tell the same evening with two tenses, and neither is wrong.', imageRef: 'lessons/pc-imparfait-paires/act10.jpg' },
    sections: [],
    milestone: 'Tu choisis entre le décor et l’action, et tu sais pourquoi tu choisis. EN: You choose between background and action, and you know why.',
    estScreens: 30, restPoints: ['a10-usages'],
  },
  sections: [A10_DEUX, A10_CHOIX, A10_USAGES, A10_CONSTRUIRE, A10_HACKS, A10_CHECK],
  imports: ['fr.a2.sports-et-loisirs.061', 'fr.a2.cafe.060', 'fr.a2.objets.108', 'fr.b1.routines.080'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — CE QUE TU AS VRAIMENT DIT
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE ACT THE WHOLE LESSON POINTS AT. Every sentence here is correct French
 *  that carries a meaning the speaker did not intend, so nothing gets
 *  corrected in real life and the mistake survives for years. */
const A11_ANALYSE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a11-analyse',
  layer: 'core',
  size: 'lg',
  title: 'Ce que l’autre comprend',
  frSub: 'Quatre phrases correctes',
  groups: [
    grp('Maya, à Bruxelles', [
      { fr: "Je devais t'appeler hier.", note: "Maya voulait dire : je t'ai appelé, c'était une obligation.", en: 'I was supposed to call you yesterday.' },
      it(E(1302), 'et voilà ce que sa phrase dit vraiment'),
    ], chk(
      'Qu’est-ce que Léo comprend ? EN: What does Léo understand?',
      ['Maya n’a peut-être pas appelé.', 'Maya a appelé.', 'Maya va appeler demain.'],
      0,
      "je devais laisse la question ouverte. Pour dire l'appel : j'ai dû t'appeler. EN: devais leaves the call in doubt.",
    )),
    grp('Sam, à Toronto', [
      { fr: "J'ai connu ta mère pendant vingt ans.", note: 'Sam voulait dire : je connais ta mère depuis vingt ans.', en: 'I knew your mother for twenty years.' },
      it(E(1295), 'ce qu’il fallait dire'),
      it(E(1296), 'ou, pour la rencontre'),
    ], chk(
      'Que comprend son ami ? EN: What does his friend understand?',
      ['Ils se sont rencontrés il y a vingt ans.', 'La relation est finie.', 'Ils se voient encore.'],
      1,
      "Une période fermée au passé composé : on comprend que c'est terminé. EN: a closed period sounds over.",
    )),
    grp('Omar, à Dakar', [
      { fr: 'Je ne voulais pas signer.', note: "Omar voulait dire : j'ai refusé de signer.", en: 'I did not want to sign.' },
      it(E(1298), 'la phrase du refus'),
    ], chk(
      'Quelle phrase dit le refus ? EN: Which one says the refusal?',
      ['Je ne voulais pas signer.', 'Je ne devais pas signer.', "Je n'ai pas voulu signer."],
      2,
      "Le refus est un moment : je n'ai pas voulu. EN: the refusal is a moment.",
    )),
    grp('Inès, à Genève', [
      { fr: 'Il devait oublier la clé.', note: 'Inès voulait dire : il a probablement oublié la clé.', en: 'He was supposed to forget the key.' },
      it(E(1299), 'la supposition'),
    ], chk(
      'Quelle phrase dit la supposition ? EN: Which one is the guess?',
      ['Il a dû oublier la clé.', 'Il devait oublier la clé.', 'Il oubliait la clé.'],
      0,
      "La supposition sur un fait passé, c'est a dû. EN: must have takes a dû.",
    )),
  ],
  audio: AUDIO,
  say: 'Ces quatre phrases sont correctes. Personne ne les corrigera jamais.',
  terms: ['resultat', 'supposition', 'refus'],
};

const A11_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a11-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  sheetId: 'sheet-erreurs',
  title: 'Six phrases qui trahissent',
  frSub: 'Corrige le sens, pas la grammaire',
  errors: [
    {
      wrong: 'Samedi, je devais travailler.',
      right: "Samedi, j'ai dû travailler.",
      why: "Tu veux dire que tu as travaillé. Avec je devais, ton ami peut croire que tu étais libre finalement. EN: devais does not say you worked.",
    },
    {
      wrong: "J'ai su qu'il était marié.",
      right: "Je savais qu'il était marié.",
      why: "Tu le savais depuis le début. j'ai su dit que tu l'as appris à un moment, et on va te demander quand. EN: su says you found out.",
    },
    {
      wrong: "Je l'ai connu pendant vingt ans.",
      right: 'Je le connais depuis vingt ans.',
      why: "Tu parles d'un ami d'aujourd'hui. Le passé composé ferme la période : on comprend qu'il est parti. EN: a closed period sounds over.",
    },
    {
      wrong: "Quand j'étais petit, j'ai eu peur des chiens.",
      right: "Quand j'étais petit, j'avais peur des chiens.",
      why: "Tu parles de toute ton enfance. j'ai eu peur raconte une seule fois, et on attend la suite. EN: eu peur is one single fright.",
    },
    {
      wrong: 'Je ne pouvais pas venir à ta fête.',
      right: "Je n'ai pas pu venir à ta fête.",
      why: "Tu t'excuses d'un empêchement précis. L'imparfait sonne comme une règle générale, pas comme une excuse. EN: the imparfait sounds like a general rule.",
    },
    {
      wrong: 'Il fallait tout recommencer, alors on est rentrés.',
      right: 'Il a fallu tout recommencer, alors on est rentrés.',
      why: "Le besoin est arrivé à ce moment-là, et vous l'avez fait. il fallait décrit une règle, sans dire que c'est arrivé. EN: a fallu says the need came and was met.",
    },
  ],
  audio: AUDIO,
  say: 'Six phrases correctes, six malentendus. Regarde la version de droite.',
  terms: ['resultat', 'refus'],
};

/** THE MIXED TRAP: all nine pairs in one drill, which is what the quiz and
 *  the task will ask for. */
const A11_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a11-piege',
  layer: 'core',
  swipe: true,
  title: 'Les neuf paires ensemble',
  frSub: 'Le dernier tri',
  rule: {
    title: 'Une seule question, neuf verbes',
    body: `Avant de choisir, pose la question une fois. ${THE_TEST} Le reste suit : le résultat, la rencontre, le refus, la supposition. EN: ask the question once, and the rest follows.`,
  },
  cards: [
    { promptLabel: 'Tu l’as appris ce matin.', promptSound: 'Je savais ce matin que le train était annulé.', fr: "J'ai su ce matin que le train était annulé.", ipa: '/ʒe sy sə ma.tɛ̃ kə lə tʁɛ̃ e.tɛ a.ny.le/', tip: 'La nouvelle arrive ce matin. EN: the news arrived this morning.' },
    { promptLabel: 'Vous vous êtes rencontrés en 2019.', promptSound: 'Je le connaissais en 2019.', fr: "Je l'ai connu en 2019.", ipa: '/ʒə le kɔ.ny ɑ̃ dø mil diz.nœf/', tip: 'La rencontre est un moment. EN: the meeting is a moment.' },
    { promptLabel: 'Tu as réussi malgré la porte.', promptSound: 'Je pouvais entrer par la fenêtre.', fr: "J'ai pu entrer par la fenêtre.", ipa: '/ʒe py ɑ̃.tʁe paʁ la fə.nɛtʁ/', tip: 'La réussite compte ici. EN: the success is the point.' },
    { promptLabel: 'Il a dit non.', promptSound: 'Il ne voulait pas signer.', fr: "Il n'a pas voulu signer.", ipa: '/il na pa vu.ly si.ɲe/', tip: 'Le refus est un moment. EN: the refusal is a moment.' },
    { promptLabel: 'Tu supposes qu’elle s’est trompée.', promptSound: 'Elle devait se tromper de salle.', fr: 'Elle a dû se tromper de salle.', ipa: '/ɛ.la dy sə tʁɔ̃.pe də sal/', tip: 'La supposition passe par a dû. EN: must have takes a dû.' },
    { promptLabel: 'Toute ton enfance.', promptSound: "Quand j'étais petit, j'ai eu peur des chiens.", fr: "Quand j'étais petit, j'avais peur des chiens.", ipa: '/kɑ̃ ʒe.tɛ pə.ti ʒa.vɛ pœʁ de ʃjɛ̃/', tip: "Un état d'enfance. EN: a childhood state." },
  ],
  drill: [
    { promptSay: "Hier soir, j'... que la réunion était annulée.", opts: ['savais', 'ai su'], correct: 1 },
    { promptSay: 'Je ... ce quartier avant de déménager.', opts: ['connaissais', 'ai connu'], correct: 0 },
    { promptSay: "La porte était bloquée, mais j'... entrer.", opts: ['pouvais', 'ai pu'], correct: 1 },
    { promptSay: 'On a insisté, mais il n’... pas ... nous aider.', opts: ['a voulu', 'voulait'], correct: 0 },
    { promptSay: 'Elle ne répond pas : elle ... oublier.', opts: ['devait', 'a dû'], correct: 1 },
    { promptSay: 'Quand la lumière s’est éteinte, j’... peur.', opts: ['ai eu', 'avais'], correct: 0 },
    { promptSay: 'Ce jour-là, il ... malade, alors il est resté au lit.', opts: ['a été', 'était'], correct: 1 },
    { promptSay: 'Je ... que le magasin fermait à vingt heures.', opts: ['croyais', 'ai cru'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une seule question, neuf verbes' },
    { label: 'Six phrases', kind: 'cards', title: 'Le réflexe, puis la bonne phrase' },
    { label: 'Écoute', kind: 'audio', title: 'Les bonnes phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-04-melange'),
  say: `Les neuf paires dans le désordre. ${THE_TEST}`,
  terms: ['etat', 'moment', 'resultat'],
};

/** THE SPELLING THE EAR CANNOT FIX: the eight participles, dictated in
 *  letters mode (measured through the app's own dicteeMode). */
const A11_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a11-dictee',
  layer: 'core',
  title: 'Écris les participes',
  frSub: 'Huit formes courtes',
  itemIds: DICTEE_IDS,
  audio: AUDIO,
  say: 'Écoute, puis écris. Ce sont les huit formes qui reviennent partout.',
  terms: ['moment'],
};

const A11_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a11-flash',
  layer: 'core',
  title: 'Du sens à la forme',
  frSub: 'Lis l’anglais, dis le français',
  cards: [
    { front: 'I found out (savoir)', back: "j'ai su", say: "Hier soir, j'ai su qu'elle partait." },
    { front: 'I already knew (savoir)', back: 'je savais', say: "Je savais qu'elle partait." },
    { front: 'I met her (connaître)', back: "j'ai connu", say: "J'ai connu sa sœur à Dakar." },
    { front: 'I knew her already (connaître)', back: 'je connaissais', say: 'Je connaissais déjà sa sœur.' },
    { front: 'I managed to come (pouvoir)', back: "j'ai pu venir", say: "Finalement, j'ai pu venir." },
    { front: "I couldn't come, and didn't (pouvoir)", back: "je n'ai pas pu venir", say: "Je n'ai pas pu venir." },
    { front: 'I tried to call (vouloir)', back: "j'ai voulu appeler", say: "J'ai voulu t'appeler, mais ton téléphone était éteint." },
    { front: 'He refused to sign (vouloir)', back: "il n'a pas voulu signer", say: "Il n'a pas voulu signer le contrat." },
    { front: 'I was supposed to come (devoir)', back: 'je devais venir', say: 'Je devais venir à la réunion.' },
    { front: 'He must have forgotten (devoir)', back: 'il a dû oublier', say: 'Il a dû oublier.' },
    { front: 'I got scared (avoir)', back: "j'ai eu peur", say: "Quand le chien a aboyé, j'ai eu peur." },
    { front: 'He fell ill (être)', back: 'il a été malade', say: 'Il a été malade après le repas.' },
    { front: 'It was necessary, and done (falloir)', back: 'il a fallu', say: 'Il a fallu partir tôt.' },
    { front: 'I thought, wrongly (croire)', back: 'je croyais que', say: "Je croyais que c'était fermé." },
  ],
  audio: AUDIO,
  say: `Le sens d'abord, la forme après. ${REFRAME}`,
  terms: ['moment', 'etat'],
};

const A11_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a11-focus',
  layer: 'core',
  title: 'À retenir avant l’examen',
  frSub: 'Quatre lignes',
  points: [
    "Personne ne corrigera ces phrases : elles sont grammaticalement justes. EN: nobody will correct these sentences.",
    "Au négatif, le passé composé accuse : je n'ai pas pu, je n'ai pas voulu. EN: in the negative, the passé composé asserts.",
    'Une période fermée avec une personne laisse entendre que c’est fini. EN: a closed period with a person sounds final.',
    `Un mot de temps est un indice. ${THE_TEST} EN: a time word is a clue.`,
  ],
  audio: AUDIO,
  say: 'Quatre choses à garder en tête pour la suite.',
  terms: ['refus', 'indice'],
};

const A11_CHECK = actCheck('a11-check', 'Le point : acte 11', [
  ctl('Le malentendu', 'Tu as travaillé samedi, obligé. Tu dis : EN: You worked on Saturday, forced.', ['Samedi, je devais travailler.', "Samedi, j'ai dû travailler."], 1, "dû dit que tu as travaillé. EN: dû says you worked."),
  ctl("L'excuse", "Tu n'as pas pu venir à la fête. Tu t'excuses : EN: You apologise for missing the party.", ["Je n'ai pas pu venir.", 'Je ne pouvais pas venir.'], 0, "Un empêchement précis : je n'ai pas pu. EN: a precise obstacle."),
  ctl('L’ami vivant', 'Tu parles d’un ami que tu vois encore. Tu dis : EN: A friend you still see.', ["Je l'ai connu pendant vingt ans.", 'Je le connais depuis vingt ans.'], 1, 'depuis + présent, parce que ça continue. EN: depuis plus the present.'),
], ['resultat', 'refus']);

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Ce que tu as vraiment dit',
    opener: { line: 'Ces phrases sont justes, et elles trahissent celui qui parle : personne ne te corrigera jamais. EN: These sentences are correct, and they give the speaker away; nobody will ever correct you.', imageRef: 'lessons/pc-imparfait-paires/act11.jpg' },
    sections: [],
    milestone: 'Tu entends ce que ta phrase dit vraiment, pas seulement si elle est correcte. EN: You hear what your sentence really says, not just whether it is correct.',
    estScreens: 38, restPoints: ['a11-piege', 'a11-flash'],
  },
  sections: [A11_ANALYSE, A11_ERREURS, A11_PIEGE, A11_DICTEE, A11_FLASH, A11_FOCUS, A11_CHECK],
  imports: [],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 12 — TOUT ENSEMBLE
 * ══════════════════════════════════════════════════════════════════════════ */

/** The long read: 190 words, every pair in the lesson, one story. */
const A12_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a12-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La présentation de février',
  frSub: 'Toutes les paires, une histoire',
  text: "C'était en février, l'année dernière. Je travaillais à Ottawa et je devais aller à Montréal pour une présentation importante. Je voulais prendre le train de sept heures, parce que la présentation commençait à dix heures. Ce matin-là, il neigeait beaucoup. À la gare, j'ai su que le train était annulé. J'ai voulu louer une voiture, mais il n'y en avait plus. J'avais un peu peur, parce que le client était exigeant et je ne le connaissais pas bien. Je ne savais pas quoi faire. Alors j'ai appelé ma collègue Nadia. Elle pouvait présenter à ma place, mais elle ne connaissait pas bien le dossier, et il fallait vraiment quelqu'un qui connaisse les chiffres. Finalement, j'ai pu faire la présentation en vidéo, depuis un café de la gare. Le client n'a pas voulu rester jusqu'à la fin des questions : il est parti à onze heures. J'ai cru que tout était perdu. Mais le lendemain, il a signé le contrat. Il a dû aimer la présentation, ou alors il a dû trouver la neige très convaincante.",
  glossary: [
    { word: 'exigeant', en: 'demanding', note: 'Un client exigeant veut beaucoup, et vite.' },
    { word: 'le dossier', en: 'the file', note: 'Tous les documents d’un client.' },
    { word: 'les chiffres', en: 'the figures', note: 'Les nombres d’un rapport, d’un budget.' },
    { word: 'en vidéo', en: 'by video call', note: 'À distance, par écran.' },
    { word: 'le lendemain', en: 'the next day', note: 'Le jour après celui dont on parle.' },
    { word: 'convaincante', en: 'convincing', note: 'De convaincre : faire dire oui à quelqu’un.' },
  ],
  questions: [
    { q: 'La personne est-elle allée à Montréal ?', a: "Non. Elle devait y aller, et finalement elle a fait la présentation en vidéo, depuis la gare." },
    { q: 'Quand a-t-elle appris que le train était annulé ?', a: "À la gare, ce matin-là : « j'ai su »." },
    { q: '« J’ai voulu louer une voiture. » A-t-elle essayé ?', a: "Oui, elle a essayé. Il n'y avait plus de voitures." },
    { q: 'Pourquoi « je ne le connaissais pas bien » et non « je ne l’ai pas connu » ?', a: "Parce que c'est un état : elle le connaissait mal à ce moment-là. j'ai connu dirait la rencontre." },
    { q: 'Que veut dire « Il a dû aimer la présentation » ?', a: "C'est une supposition : elle n'en est pas sûre, mais il a signé." },
    { q: 'Trouve le décor et les actions du matin.', a: "Décor : il neigeait, j'avais peur, le client était exigeant. Actions : j'ai su, j'ai voulu louer, j'ai pu présenter." },
  ],
  audio: AUDIO,
  say: `Tout est là. ${B103_REFRAME}`,
  terms: ['etat', 'moment', 'resultat'],
};

const A12_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a12-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La même histoire, au téléphone',
  frSub: 'Dernière écoute',
  lines: [
    ln(E(1311)), ln(E(1318)), ln(E(1312)), ln(E(1313)), ln(E(1319)), ln(E(1320)), ln(E(1315)), ln(E(1317)),
  ],
  questions: [
    { q: 'Est-elle allée à Montréal ? EN: Did she go to Montreal?', opts: ['Oui.', 'La première phrase ne le dit pas.', 'Non.'], correct: 1, why: 'je devais aller : le plan seulement. EN: devais gives only the plan.' },
    { q: 'Quand a-t-elle appris pour le train ? EN: When did she find out about the train?', opts: ['À la gare.', 'La veille.'], correct: 0, why: "À la gare, j'ai su : le moment. EN: at the station." },
    { q: 'Quatrième phrase : elle a essayé ? EN: Did she try?', opts: ['Non, elle y a seulement pensé.', 'Oui.'], correct: 1, why: "j'ai voulu : l'essai a eu lieu. EN: the attempt happened." },
    { q: 'Sixième phrase : Nadia a-t-elle présenté ? EN: Did Nadia present?', opts: ['Oui.', 'Non.', 'Le verbe ne le dit pas.'], correct: 2, why: 'pouvait : la capacité, sans résultat. EN: ability, no outcome.' },
    { q: 'Dernière phrase : avec a dû, c’est : EN: With a dû, it is:', opts: ['une supposition.', 'une obligation.'], correct: 0, why: 'a dû + verbe, avec il : une supposition. EN: a guess.' },
  ],
  audio: REC('rec-b1-04-final-ecoute'),
  say: `Dernière écoute avant de parler. ${THE_TEST}`,
  terms: ['resultat', 'supposition'],
};

/** Two alts and a userEn on every turn (scenario.logic.test.ts, seed-wide).
 *  No conditional and no subjunctive in any line the learner says. */
const A12_TALK: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a12-talk',
  layer: 'core',
  title: 'Explique ta semaine à Martin',
  frSub: 'Six échanges',
  setting: "Montréal, vendredi. Martin fait le point avec toi sur la semaine. Il tutoie tout le monde. EN: Friday in Montreal; Martin reviews the week with you.",
  turns: [
    {
      ai: "Nadia m'a dit que tu étais absent jeudi. Qu'est-ce qui s'est passé ?",
      en: 'Nadia told me you were away on Thursday. What happened?',
      user: "Je devais venir, mais j'ai dû aller chez le médecin.",
      userEn: 'I was supposed to come, but I had to go to the doctor. (The plan, then what happened.)',
      alts: [
        { fr: "J'ai dû aller chez le médecin.", en: 'I had to go to the doctor.' },
        { fr: "Je devais venir, mais je n'ai pas pu.", en: "I was supposed to come, but I couldn't." },
      ],
    },
    {
      ai: "Et le rapport ? Tu devais me l'envoyer mercredi.",
      en: 'And the report? You were supposed to send it to me on Wednesday.',
      user: "J'ai voulu l'envoyer, mais le serveur ne marchait pas.",
      userEn: 'I tried to send it, but the server was down. (voulu: you tried.)',
      alts: [
        { fr: "Je n'ai pas pu l'envoyer. Le serveur ne marchait pas.", en: "I couldn't send it. The server was down." },
        { fr: "J'ai voulu te l'envoyer, mais il y avait un problème.", en: 'I tried to send it to you, but there was a problem.' },
      ],
    },
    {
      ai: 'Tu savais que le client voulait une autre date ?',
      en: 'Did you know the client wanted another date?',
      user: "Non, je ne le savais pas. Je l'ai su ce matin.",
      userEn: "No, I didn't know. I found out this morning. (savais, then su.)",
      alts: [
        { fr: "Non. Je l'ai su ce matin.", en: 'No. I found out this morning.' },
        { fr: "Non, je l'ai appris ce matin.", en: 'No, I learned it this morning.' },
      ],
    },
    {
      ai: "Et Julie n'est pas venue non plus.",
      en: "And Julie didn't come either.",
      user: "Elle a dû oublier. Elle n'a pas répondu à mes messages.",
      userEn: "She must have forgotten. She didn't answer my messages. (a dû: a guess.)",
      alts: [
        { fr: 'Elle a dû oublier la réunion.', en: 'She must have forgotten the meeting.' },
        { fr: "Je ne sais pas. Elle a dû se tromper de jour.", en: "I don't know. She must have got the day wrong." },
      ],
    },
    {
      ai: "Et la présentation de vendredi dernier, ça s'est bien passé ?",
      en: 'And last Friday’s presentation, did it go well?',
      user: "Oui. J'avais un peu peur, mais j'ai pu tout finir.",
      userEn: 'Yes. I was a bit scared, but I managed to finish everything. (A state, then something that happened.)',
      alts: [
        { fr: "Oui, j'ai pu tout présenter.", en: 'Yes, I managed to present everything.' },
        { fr: "Oui. J'avais peur, mais ça s'est bien passé.", en: 'Yes. I was scared, but it went well.' },
      ],
    },
    {
      ai: 'Parfait. Merci pour les explications.',
      en: 'Perfect. Thanks for explaining.',
      user: 'De rien. La prochaine fois, je te préviens avant.',
      userEn: "You're welcome. Next time I'll let you know beforehand.",
      alts: [
        { fr: 'Pas de problème. Je te préviens la prochaine fois.', en: "No problem. I'll let you know next time." },
        { fr: 'Merci à toi. Bonne fin de semaine.', en: 'Thanks to you. Have a good weekend.' },
      ],
    },
  ],
  audio: AUDIO,
  say: `À toi de parler. ${THE_TEST}`,
  terms: ['resultat', 'supposition', 'moment'],
};

/** THE GRADED TASK, spoken, in the final production act. Draft `task` type
 *  (_task-section.ts): not in schema.ts, rendered by nothing yet. Formative:
 *  the criteria are read BEFORE speaking, and every watchFor points at the
 *  mission that fixes it. Transcript-graded: pronunciation is never scored. */
const A12_TASK: TaskSection = {
  type: 'task',
  id: 'a12-task',
  title: 'Raconte un plan raté',
  frSub: 'Ta tâche, à voix haute',
  brief: "Pense à un jour où un plan n'a pas marché : un voyage, un rendez-vous, un déménagement, une réunion. Tu le racontes à voix haute, comme à un collègue, pendant une à deux minutes.",
  briefEn: 'Think of a day when a plan went wrong. Tell it out loud, as you would to a colleague, for one to two minutes.',
  produce: "Raconte ce plan raté : sépare le décor et l'action, et utilise au moins trois verbes des paires, choisis pour leur sens.",
  responseSpec: { kind: 'audio', minDurationS: 60, maxDurationS: 120 },
  rubric: {
    criteria: [
      {
        key: 'paires',
        label: 'Les verbes des paires, choisis pour le sens',
        maxPoints: 4,
        descriptors: [
          "4 : quatre verbes des paires ou plus, bien choisis, dont au moins un sens que l'anglais ne montre pas : j'ai su, j'ai voulu, il a dû (supposition).",
          "3 : trois verbes ou plus, bien choisis, dont une paire complète (je devais puis j'ai dû, par exemple).",
          '2 : trois verbes des paires, et le temps de chacun dit ce que tu veux dire.',
          "1 : deux verbes des paires, ou trois dont un dit autre chose que ton histoire.",
          '0 : aucun verbe des paires, ou un seul.',
        ],
      },
      {
        key: 'decor',
        label: "Le décor et l'action",
        maxPoints: 4,
        descriptors: [
          "4 : la séparation est claire du début à la fin, et tu utilises un indice (hier, pendant, ce jour-là) sans le traiter comme une règle.",
          "3 : la séparation est claire, et l'histoire avance.",
          "2 : le décor à l'imparfait et l'action au passé composé, la plupart du temps.",
          "1 : quelques verbes au bon temps, mais le décor et l'action se mélangent.",
          '0 : tout au même temps. On ne voit pas ce qui arrive.',
        ],
      },
      {
        key: 'formes',
        label: 'Les formes',
        maxPoints: 3,
        descriptors: [
          '3 : les formes sont justes, ou presque : auxiliaire, participe, terminaisons.',
          '2 : quelques erreurs, mais elles ne changent pas le sens.',
          '1 : des erreurs sur les participes des paires (pouvu, devu, connaissé).',
          '0 : beaucoup de formes fausses.',
        ],
      },
      {
        key: 'fil',
        label: 'Le fil et la fin',
        maxPoints: 3,
        descriptors: [
          "3 : clair, facile à suivre, et la fin dit ce que le plan est devenu.",
          '2 : un ordre clair, des mots de liaison (mais, alors, finalement), et une fin.',
          "1 : un ordre, mais on ne sait pas comment le plan finit.",
          '0 : des phrases sans ordre, et pas de fin.',
        ],
      },
    ],
  },
  scaffold: ['Ce jour-là, ...', 'Je devais ...', 'Je voulais ...', 'Mais ...', 'Alors ...', 'Finalement, ...'],
  modelAnswer: "C'était en février, l'année dernière. Je travaillais à Ottawa et je devais aller à Montréal pour une présentation. Je voulais prendre le train de sept heures. Ce matin-là, il neigeait beaucoup. À la gare, j'ai su que le train était annulé. J'ai voulu louer une voiture, mais il n'y en avait plus. J'avais un peu peur, parce que le client était exigeant et je ne le connaissais pas bien. Alors j'ai appelé ma collègue Nadia. Elle pouvait présenter à ma place, mais elle ne connaissait pas le dossier. Finalement, j'ai pu faire la présentation en vidéo, depuis un café de la gare. Le client n'a pas voulu rester jusqu'à la fin. J'ai cru que tout était perdu. Mais le lendemain, il a signé. Il a dû aimer la présentation.",
  modelAnswerEn: "It was February, last year. I was working in Ottawa and I was supposed to go to Montreal for a presentation. I wanted to take the seven o'clock train. That morning it was snowing hard. At the station I found out the train was cancelled. I tried to rent a car, but there were none left. I was a bit scared, because the client was demanding and I did not know him well. So I called my colleague Nadia. She could have presented in my place, but she did not know the file. In the end I managed to give the presentation by video, from a café in the station. The client refused to stay until the end. For a moment I thought everything was lost. But the next day he signed. He must have liked the presentation.",
  watchFor: [
    { pattern: 'je devais / il devait used as if the thing happened, with nothing after it saying what happened', criterion: 'paires', feedback: "Avec je devais, on ne sait pas si c'est arrivé. Si c'est arrivé, dis j'ai dû, ou raconte la suite.", ref: 'a6-paire' },
    { pattern: "j'ai su for knowledge the speaker already had before the story", criterion: 'paires', feedback: "j'ai su veut dire : je l'ai appris à ce moment-là. Si tu le savais déjà, dis je savais.", ref: 'a2-paire' },
    { pattern: 'je voulais / je pouvais where the story shows a real attempt or a success', criterion: 'paires', feedback: "Tu as essayé ou réussi ? Dis j'ai voulu, j'ai pu. je voulais et je pouvais laissent la question ouverte.", ref: 'a4-paire' },
    { pattern: "je n'ai pas voulu used for an absent wish, or je ne voulais pas used for a real refusal", criterion: 'paires', feedback: "Un refus dit à voix haute : je n'ai pas voulu. Une simple envie qui manquait : je ne voulais pas.", ref: 'a5-refus' },
    { pattern: "je l'ai connu(e) pendant + duration for a relationship that still continues", criterion: 'paires', feedback: 'Le passé composé ferme la période. Pour une relation qui continue : je le connais depuis...', ref: 'a3-periode' },
    { pattern: 'background (weather, feelings, what was going on) in the passé composé throughout, or every action in the imparfait so nothing moves', criterion: 'decor', feedback: "Sépare le décor (imparfait) et l'action (passé composé), pour que l'histoire avance.", ref: 'a10-choix' },
    { pattern: 'a time word treated as a switch: hier or pendant forcing one tense against the meaning', criterion: 'decor', feedback: 'hier et pendant sont des indices, pas des règles. Choisis le temps pour le sens.', ref: 'a9-paires' },
    { pattern: 'wrong participle or auxiliary on a pair verb: pouvu, devu, voulé, connaissé, je suis dû, j’ai été peur', criterion: 'formes', feedback: 'Revois les participes : su, connu, pu, voulu, dû, eu, été, fallu, cru.', ref: 'a11-dictee' },
    { pattern: 'the story stops with no outcome: the listener cannot tell whether the plan was saved or lost', criterion: 'fil', feedback: 'Dis comment ça finit : finalement, au bout du compte, le lendemain.', ref: 'a12-talk' },
    { pattern: 'under 60 seconds, or a list of sentences with no connectors', criterion: 'fil', feedback: 'Parle une minute au moins, et relie tes phrases : mais, alors, parce que, finalement.', ref: 'a12-lecture' },
  ],
  graderNotes: [
    'Grading is transcript-based. The response is transcribed by speech-to-text and graded on the transcript only. Pronunciation, accent and fluency are never scored.',
    'Never mark a transcription artefact as a form error: je savais / il savait, a / à, é / ai endings, du / dû and missing accents are homophones or STT noise, not learner mistakes.',
    'A meaning-shift verb counts only when its tense matches the meaning the story gives it. Count distinct verbs, not tokens: je devais twice is one.',
    "Décor or action is a speaker's choice (act 10). Accept a tense that differs from the model whenever the story supports it; only mark a tense wrong when it says something the story contradicts.",
    'depuis + imparfait is recognition-only in this lesson. Do not require it; accept it if correct.',
    'Do not require or reward the conditional, the subjunctive or the plus-que-parfait. Accept them if correct.',
    'Under 60 seconds: cap `fil` at 1. Over 120 seconds: grade the first 120 seconds.',
    'Formative, not an exam: quote the learner’s own forms back and name the mission to revisit. Never report a band.',
  ],
};

/** `skill: 'speak'` needs voiceflash on every id it names. */
const A12_DIRE: Sec<'practice'> = {
  type: 'practice',
  id: 'a12-dire',
  layer: 'core',
  title: 'Dis les paires, à voix haute',
  frSub: 'Répète et compare',
  skill: 'speak',
  itemIds: [...SPEAKABLE_IDS, ...SPEAKABLE_IMPORTS],
  audio: AUDIO,
  say: 'Répète chaque phrase, puis compare avec le modèle.',
  terms: ['etat', 'moment'],
};

/** The screenshot card. `cheatSheet` is used HERE, in the flow, and never
 *  inside a reference sheet (there it draws its title and nothing else). */
const A12_RECAP: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a12-recap',
  layer: 'core',
  sheetId: 'sheet-paires',
  title: 'Les neuf paires, en une page',
  frSub: 'À garder avant l’examen',
  rows: [
    { k: 'savoir', v: 'je savais = I knew · j’ai su = I found out', say: "Hier soir, j'ai su qu'elle partait.", detail: { title: 'savoir', body: "L'état, ou le moment où la nouvelle arrive. savoir + verbe à l'imparfait = une capacité. EN: state, or the moment the news arrives." } },
    { k: 'connaître', v: 'je connaissais = I knew · j’ai connu = I met', say: "J'ai connu sa sœur à Dakar.", detail: { title: 'connaître', body: "La rencontre, ou une période finie. Avec une personne vivante : je le connais depuis. EN: the meeting, or a closed period." } },
    { k: 'pouvoir', v: 'je pouvais = I was able · j’ai pu = I managed', say: "Finalement, j'ai pu venir.", detail: { title: 'pouvoir', body: "je n'ai pas pu = j'ai essayé et ça a échoué. je ne pouvais pas = une situation qui durait. EN: failure against a lasting impossibility." } },
    { k: 'vouloir', v: 'je voulais = I wanted · j’ai voulu = I tried', say: "J'ai voulu t'appeler.", detail: { title: 'vouloir', body: "je n'ai pas voulu = j'ai refusé. je ne voulais pas = je n'en avais pas envie. EN: refusal against absent wish." } },
    { k: 'devoir', v: 'je devais = supposed to · j’ai dû = had to, and did', say: "Je devais venir, mais j'ai dû partir.", detail: { title: 'devoir', body: "Troisième sens : il a dû oublier = une supposition. EN: third reading: must have." } },
    { k: 'avoir peur', v: 'j’avais peur = I was scared · j’ai eu peur = I got scared', say: "Quand le chien a aboyé, j'ai eu peur.", detail: { title: 'avoir', body: "Pareil avec avoir faim, avoir envie, avoir mal. EN: same with faim, envie, mal." } },
    { k: 'être malade', v: 'il était malade · il a été malade = he fell ill', say: 'Il a été malade après le repas.', detail: { title: 'être', body: "Le décor, ou le début et la période comptée. EN: background, or the start and the counted period." } },
    { k: 'falloir', v: 'il fallait = it was necessary · il a fallu = and it was done', say: 'Il a fallu partir tôt.', detail: { title: 'falloir', body: "il fallait le dire = un reproche. EN: fallait also carries the reproach." } },
    { k: 'croire, penser', v: 'je croyais que = I thought, wrongly · j’ai cru que = for a moment', say: "Je croyais que c'était fermé.", detail: { title: 'croire', body: "je croyais dure, j'ai cru est court. Les deux sont corrects. EN: croyais lasts, cru is brief." } },
  ],
  audio: AUDIO,
  say: `Neuf paires, une page. ${REFRAME}`,
  terms: ['etat', 'moment', 'resultat'],
};

const A12_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a12-progress',
  layer: 'core',
  title: 'Où tu en es',
  frSub: 'Avant l’examen',
  // progressCheck is passage prose: exempt from the 45-word core cap.
  body: `${REFRAME} Tu sais maintenant que je devais ne dit pas si c'est arrivé, que j'ai su veut dire je l'ai appris, que je n'ai pas voulu est un refus, et que hier ne choisit pas le temps pour toi. Le plus difficile arrive après cette leçon : personne ne te corrigera, parce que tes phrases sont grammaticalement justes. Avant l'examen, relis la page des neuf paires et dis chaque ligne en anglais sans regarder. EN: the hard part is that nobody will correct you, because the sentences are correct. Read the nine pairs again and say each line in English without looking.`,
  stats: [
    { k: 'Paires', v: 'neuf verbes, deux sens chacun' },
    { k: 'La question', v: THE_TEST },
    { k: 'Les indices', v: 'hier, pendant, depuis : pas des règles' },
    { k: 'Ton choix', v: 'décor ou action, les deux sont justes' },
  ],
  audio: AUDIO,
  say: `Un bilan avant l'examen. ${THE_TEST}`,
  terms: ['resultat', 'indice'],
};

/* ── THE QUIZ ────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), 11 rounds of 8, one per act from
 *  2 to 11 plus a mixed round. Every round carries `targets`, so a failed
 *  round fires that round's remediation drill (roundFailThreshold 60).
 *
 *  typeIn and errorSpot carry `prompt`, listenChoose carries `say`. No
 *  accepted answer depends on a comma: fold() strips them. The quiz shuffles
 *  its options at runtime; the authored `correct` slots are spread anyway.
 * ────────────────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ => ({ format: 'mcq', q, opts, correct, why, ref });
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, accept?: string[]): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: accept ?? [answer], why, ref });
const eS = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });
const FIX = 'Cette phrase est correcte, mais elle dit autre chose. Écris ce que la personne voulait dire. EN: Correct, but it says the wrong thing: write what was meant.';

const A12_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a12-quiz',
  layer: 'core',
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-savoir', label: 'Savoir', targets: ['knew-found'],
      questions: [
        mc("Tu l'as appris hier soir. « Hier soir, j'___ qu'elle partait. » EN: You found out last night.", ['savais', 'connaissais', 'ai su'], 2, "La nouvelle arrive hier soir. EN: the news arrived last night.", 'a2-paire'),
        tI('Tu le savais depuis longtemps. Écris le verbe savoir. EN: Write the verb.', "Je ___ qu'il mentait.", 'savais', 'Un état : tu le savais déjà. EN: a state.', 'a2-paire'),
        mc("« On l'a su par un collègue. » Ça veut dire : EN: It means:", ['Nous le savions depuis longtemps.', 'Personne ne le savait.', 'Un collègue nous l’a appris.'], 2, "l'a su : le moment où la nouvelle arrive. EN: the moment the news arrived.", 'a2-exemples'),
        eS(FIX, "J'ai su qu'il était marié depuis le début.", "Je savais qu'il était marié depuis le début.", "Tu le savais déjà : imparfait. EN: you already knew.", 'a11-erreurs'),
        lC('Écoute. La personne l’a-t-elle appris à ce moment-là ? EN: Did the person find out then?', "Ce matin, j'ai su que le bureau fermait.", ['Oui', 'Non'], 0, "j'ai su : la nouvelle arrive ce matin. EN: the news arrived this morning.", 'a2-ecoute'),
        tI('I never found out. Complète avec savoir. EN: Complete with savoir.', "Je ne l'ai jamais ___.", 'su', "jamais + passé composé : la nouvelle n'est jamais arrivée. EN: the news never came.", 'a2-piege'),
        mc('« Je savais nager à cinq ans. » Ça veut dire : EN: It means:', ['I found out how to swim.', 'I learned to swim at five.', 'I could swim.'], 2, "savoir + verbe à l'imparfait : une capacité. EN: a skill you had.", 'a2-paire'),
        mc('Tout le monde était au courant, sauf toi. Tu dis : EN: Everyone knew, except you.', ['Tout le monde l’a su, sauf moi.', 'Tout le monde le savait, sauf moi.'], 1, "Un état partagé. EN: a shared state.", 'a2-piege'),
      ],
    },
    {
      id: 'r2-connaitre', label: 'Connaître', targets: ['met-knew'],
      questions: [
        mc("« J'ai connu sa sœur à Dakar. » Qu'est-ce qui s'est passé à Dakar ? EN: What happened in Dakar?", ["Tu l'as rencontrée.", 'Tu la connaissais déjà.', 'Tu as appris son nom.'], 0, 'connu : la rencontre. EN: the meeting.', 'a3-paire'),
        tI('I met him in 2019. Complète avec connaître. EN: Complete with connaître.', "Je l'___ en 2019.", 'ai connu', 'La rencontre est un moment. EN: the meeting is a moment.', 'a3-construire'),
        eS(FIX, "J'ai connu ta mère pendant vingt ans, et je la vois encore.", 'Je connais ta mère depuis vingt ans.', "Une relation qui continue : depuis + présent. EN: an ongoing relationship.", 'a3-erreurs'),
        mc('« Il a connu des hivers très durs. » Il a rencontré des hivers ? EN: Did he meet winters?', ['Oui.', 'Non : il a vécu ces hivers.'], 1, 'Avec une période, connu = vivre ça. EN: with a period, connu means lived through.', 'a3-periode'),
        lC('Écoute. Y a-t-il une rencontre ? EN: Is there a meeting?', 'Je connaissais déjà sa sœur.', ['Oui', 'Non'], 1, 'connaissais : un état. EN: a state.', 'a3-ecoute'),
        tI('Tu ne connaissais personne en arrivant. Complète avec connaître. EN: Complete with connaître.', 'Je ne ___ personne à Montréal.', 'connaissais', "Un état, à la forme négative. EN: a state, in the negative.", 'a3-construire'),
        mc('« Quand je l’ai connu, il avait vingt ans. » Quel âge a-t-il aujourd’hui ? EN: How old is he today?', ['Vingt ans.', 'Quarante ans.', 'On ne sait pas.'], 2, "L'imparfait donne son âge au moment de la rencontre. EN: his age at the meeting.", 'a3-ecoute'),
        mc('Vous vous êtes rencontrés à Genève. Tu dis : EN: You met in Geneva.', ['Nous nous connaissions à Genève.', 'Nous nous sommes connus à Genève.'], 1, 'La forme pronominale dit la rencontre. EN: the reflexive says the meeting.', 'a3-paire'),
      ],
    },
    {
      id: 'r3-pouvoir', label: 'Pouvoir', targets: ['able-managed'],
      questions: [
        mc('« Je pouvais venir. » Est-ce que la personne est venue ? EN: Did the person come?', ['Oui.', 'Non.', 'Le verbe ne le dit pas.'], 2, 'pouvais : la capacité, sans résultat. EN: ability, no outcome.', 'a4-paire'),
        tI('Tu as réussi à venir. Complète avec pouvoir. EN: Complete with pouvoir.', "Finalement, j'___ venir.", 'ai pu', "j'ai pu = j'ai réussi. EN: I managed to.", 'a4-construire'),
        mc("« Je n'ai pas pu venir. » Est-ce que la personne est venue ? EN: Did the person come?", ['Oui.', 'Non.'], 1, "n'ai pas pu : l'échec. EN: failure.", 'a4-table'),
        eS(FIX, 'Je ne pouvais pas venir à ta fête, désolé.', "Je n'ai pas pu venir à ta fête, désolé.", "Une excuse pour un empêchement précis : je n'ai pas pu. EN: a precise obstacle.", 'a11-erreurs'),
        lC('Écoute. La personne a-t-elle réussi ? EN: Did the person succeed?', "J'ai pu entrer par la fenêtre.", ['Oui', 'Non'], 0, "j'ai pu : la réussite. EN: success.", 'a4-ecoute'),
        mc('« Tu pouvais me le dire. » Qu’est-ce que ça veut dire ? EN: What does it mean?', ['Tu me l’as dit.', 'Tu ne me l’as pas dit, et je le regrette.'], 1, "C'était possible, et ce n'est pas arrivé. EN: it was possible, and it did not happen.", 'a4-paire'),
        tI('Une nuit entière sans dormir, sans moment précis. EN: A whole night without sleeping.', 'Toute la nuit, je ne ___ pas dormir.', 'pouvais', 'Une situation qui dure. EN: a lasting situation.', 'a4-piege'),
        mc('« Je pouvais travailler de la maison. » Ça veut dire : EN: It means:', ['J’ai réussi une fois.', 'J’ai essayé sans succès.', 'On m’autorisait à le faire.'], 2, 'pouvais couvre aussi la permission. EN: pouvais also covers permission.', 'a4-table'),
      ],
    },
    {
      id: 'r4-vouloir', label: 'Vouloir', targets: ['wanted-tried'],
      questions: [
        mc('Quelle phrase dit que tu as essayé ? EN: Which one says you tried?', ["Je voulais t'aider.", "Je devais t'aider.", "J'ai voulu t'aider."], 2, "j'ai voulu : l'essai a eu lieu. EN: the attempt happened.", 'a5-paire'),
        tI('He refused to sign. Complète avec vouloir. EN: Complete with vouloir.', "Il n'a pas ___ signer.", 'voulu', "n'a pas voulu : un refus. EN: a refusal.", 'a5-refus'),
        mc('« Je ne voulais pas te déranger. » Est-ce un refus ? EN: Is this a refusal?', ['Oui.', 'Non : c’est une explication polie.'], 1, "L'imparfait décrit ton état d'esprit. EN: the imparfait describes your state of mind.", 'a5-paire'),
        eS(FIX, 'Je ne voulais pas signer, alors je suis parti sans rien dire.', "Je n'ai pas voulu signer, alors je suis parti sans rien dire.", 'Le refus est un moment. EN: the refusal is a moment.', 'a5-erreurs'),
        lC('Écoute. La personne a-t-elle essayé ? EN: Did the person try?', "J'ai voulu ouvrir la porte, mais la clé ne tournait pas.", ['Oui', 'Non'], 0, "j'ai voulu : l'essai. EN: the attempt.", 'a5-usages'),
        mc('Tu adoucis une demande. Tu dis : EN: You soften a request.', ["J'ai voulu te demander quelque chose.", 'Je voulais te demander quelque chose.'], 1, "L'imparfait est la forme polie. EN: the imparfait is the polite one.", 'a5-usages'),
        tI('Elle a pris la décision de changer de travail. EN: She decided to change jobs.', 'Elle ___ changer de travail.', 'a voulu', 'Une décision prise à un moment. EN: a decision at one moment.', 'a5-construire'),
        mc('« Elle n’a pas voulu venir, elle était malade. » Qu’est-ce qui cloche ? EN: What is wrong here?', ['Rien.', "Ce n'est pas un refus : il faut n'a pas pu."], 1, "La maladie empêche, elle ne refuse pas. EN: illness blocks; it does not refuse.", 'a5-erreurs'),
      ],
    },
    {
      id: 'r5-devoir', label: 'Devoir', targets: ['supposed-had'],
      questions: [
        mc('« Je devais venir à la réunion. » La personne est-elle venue ? EN: Did the person come?', ['Oui.', 'Non.', 'On ne sait pas.'], 2, 'devais : le plan. EN: the plan.', 'a6-paire'),
        mc("« J'ai dû partir à huit heures. » La personne est-elle partie ? EN: Did the person leave?", ['Oui.', 'Non.', 'On ne sait pas.'], 0, "dû : c'est fait. EN: it happened.", 'a6-table'),
        tI('Tu as travaillé samedi, obligé. Complète avec devoir. EN: Complete with devoir.', "Samedi, j'___ travailler.", 'ai dû', "dû dit que tu as travaillé. EN: dû says you worked.", 'a6-construire'),
        mc('« Il a dû oublier. » Ça veut dire : EN: It means:', ['He had to forget.', 'He was supposed to forget.', 'He must have forgotten.'], 2, 'a dû + verbe : une supposition. EN: a guess.', 'a6-supposition'),
        eS(FIX, 'Il devait oublier la clé, parce que la porte était ouverte.', 'Il a dû oublier la clé, parce que la porte était ouverte.', 'La supposition passe par a dû. EN: must have takes a dû.', 'a11-analyse'),
        lC('Écoute. Est-ce une obligation ou une supposition ? EN: Obligation or guess?', 'Tu as dû avoir peur.', ['Une obligation', 'Une supposition'], 1, 'a dû + verbe, avec tu : ici, une supposition. EN: here, a guess.', 'a6-ecoute'),
        tI('Le plan disait six heures. Complète avec devoir. EN: Complete with devoir.', 'Nous ___ partir à six heures.', 'devions', 'Le plan, au pluriel. EN: the plan, plural.', 'a6-construire'),
        mc('Le sol est mouillé ce matin. Tu dis : EN: The ground is wet this morning.', ['Il devait pleuvoir cette nuit.', 'Il a dû pleuvoir cette nuit.'], 1, 'Ta conclusion sur le passé : a dû. EN: your conclusion about the past.', 'a6-piege'),
      ],
    },
    {
      id: 'r6-etats', label: 'Peur et maladie', targets: ['state-moment'],
      questions: [
        mc("« Quand le chien a aboyé, j'___ peur. » EN: When the dog barked...", ['ai eu', 'avais'], 0, 'Le moment fait commencer la peur. EN: the moment starts the fear.', 'a7-avoir'),
        tI('Toute ton enfance, tu avais peur du noir. EN: Your whole childhood.', "Enfant, j'___ peur du noir.", 'avais', "Un état d'enfance. EN: a childhood state.", 'a7-construire'),
        mc('« Il a été malade après le repas. » Ça veut dire : EN: It means:', ['He fell ill after the meal.', 'He used to be ill after meals.', 'He was ill before the meal.'], 0, 'Le passage à la maladie. EN: the change into illness.', 'a7-etre'),
        eS(FIX, "Quand j'étais petit, j'ai eu peur des chiens.", "Quand j'étais petit, j'avais peur des chiens.", 'eu peur raconte une seule fois. EN: eu peur is one single fright.', 'a7-erreurs'),
        lC('Écoute. Un état, ou un début ? EN: A state, or a beginning?', 'Ce jour-là, il était malade.', ['Un état', 'Un début'], 0, "était malade : la situation du jour. EN: the state that day.", 'a7-ecoute'),
        tI('La faim arrive vers midi. Complète avec avoir. EN: Complete with avoir.', "J'___ faim vers midi.", 'ai eu', 'vers midi place le début. EN: vers midi places the start.', 'a7-avoir'),
        mc('« Elle a été absente toute la semaine. » La semaine est : EN: The week is:', ['comptée, du début à la fin.', 'en cours.'], 0, 'Le passé composé compte la période. EN: the passé composé counts it.', 'a7-etre'),
        mc('Tu décris ton caractère à l’école. Tu dis : EN: You describe what you were like at school.', ["J'ai été très timide à l'école.", "J'étais très timide à l'école."], 1, "Un caractère, une époque : l'imparfait. EN: a character, an era.", 'a7-etre'),
      ],
    },
    {
      id: 'r7-falloir', label: 'Falloir et croire', targets: ['need-belief'],
      questions: [
        mc('« Il fallait partir tôt. » Est-on parti tôt ? EN: Did they leave early?', ['Oui.', 'On ne sait pas.', 'Non.'], 1, 'fallait : le besoin, pas le résultat. EN: the need, not the outcome.', 'a8-falloir'),
        tI('Le rangement est fini, et ça a pris deux heures. EN: The tidying is done.', 'Il ___ deux heures pour tout ranger.', 'a fallu', 'Une durée comptée, et le travail est fait. EN: a counted duration, and the job is done.', 'a8-construire'),
        mc('« Je croyais que c’était fermé. » Et en réalité ? EN: And in fact?', ["C'était fermé.", 'On ne sait pas.', "Ce n'était pas fermé."], 2, "je croyais que : une idée fausse. EN: a belief that turned out wrong.", 'a8-croire'),
        mc('« J’ai cru que tu étais parti. » Combien de temps as-tu cru ça ? EN: How long?', ['Un instant.', 'Des semaines.'], 0, "j'ai cru : un moment court. EN: a short moment.", 'a8-croire'),
        eS(FIX, 'Il fallait tout recommencer, alors on est rentrés très tard.', 'Il a fallu tout recommencer, alors on est rentrés très tard.', "Le besoin est arrivé, et vous l'avez fait. EN: the need came and was met.", 'a11-erreurs'),
        lC('Écoute. Est-ce un reproche ? EN: Is this a reproach?', 'Il fallait me le dire.', ['Oui', 'Non'], 0, "il fallait + infinitif : you should have. EN: you should have told me.", 'a8-falloir'),
        tI('Tu pensais quelque chose de faux sur l’heure de la réunion. EN: You were wrong about the time.', 'Je ___ que la réunion était à dix heures.', 'croyais', 'Une idée que tu avais avant. EN: a belief you held before.', 'a8-construire'),
        mc('Quelle phrase est la plus naturelle pour raconter une surprise ? EN: Which is the natural way to report a surprise?', ["J'ai cru que le magasin fermait à minuit.", 'Je croyais que le magasin fermait à minuit.'], 1, "je croyais que : la forme normale du récit. EN: the normal narrative form.", 'a8-exemples'),
      ],
    },
    {
      id: 'r8-indices', label: 'Les indices', targets: ['cue-rule'],
      questions: [
        mc('Avec hier, il faut toujours le passé composé. EN: With hier, always the passé composé.', ['Vrai', 'Faux'], 1, 'Hier, il pleuvait est correct. EN: Hier, il pleuvait is correct.', 'a9-paires'),
        mc('Quelle phrase est correcte ? EN: Which is correct?', ['Hier, il pleuvait.', 'Hier, il a plu.', 'Les deux.'], 2, 'Décor ou action : un choix. EN: background or action: a choice.', 'a9-table'),
        mc('« Tous les soirs, il lisait pendant deux heures. » Pourquoi l’imparfait ? EN: Why the imparfait?', ['À cause de pendant.', "C'est une erreur.", "C'est une habitude."], 2, "L'habitude gagne contre l'indice. EN: the habit beats the cue.", 'a9-contre'),
        tI('Une seule fois, deux heures de lecture. EN: Once, two hours of reading.', 'Samedi, il ___ pendant deux heures.', 'a lu', 'Une durée fermée, une fois. EN: a closed duration, once.', 'a9-piege'),
        mc('« Il habitait à Québec depuis deux ans quand il a rencontré Léa. » Ça veut dire : EN: It means:', ['He had been living there for two years when he met her.', 'He lived there two years, then met her.', 'He still lives there.'], 0, 'depuis + imparfait : un état qui durait. EN: a state still running then.', 'a9-paires'),
        eS(FIX, "En 2019, j'ai travaillé à Genève, c'était agréable.", "En 2019, je travaillais à Genève, c'était agréable.", "Une situation qui dure, même avec une date. EN: a lasting situation, even with a date.", 'a9-piege'),
        lC('Écoute. Une habitude, ou une seule fois ? EN: A habit, or once?', 'Le matin, je prenais le bus.', ['Une habitude', 'Une seule fois'], 0, "Le matin + imparfait : l'habitude. EN: a habit.", 'a9-ecoute'),
        tI('Ce matin précis, un taxi. EN: That one morning, a taxi.', "Ce matin-là, j'___ un taxi.", 'ai pris', 'Ce matin-là ferme la journée. EN: that one morning.', 'a9-construire'),
      ],
    },
    {
      id: 'r9-choix', label: 'Ton choix', targets: ['decor-action'],
      questions: [
        mc('« Ce soir-là, il neigeait » et « Ce soir-là, il a neigé » : EN: Both sentences:', ['La première est fausse.', 'La deuxième est fausse.', 'Les deux sont correctes.'], 2, "C'est un choix de narrateur. EN: a narrator's choice.", 'a10-choix'),
        mc('Tu veux que ton ami imagine la salle à minuit. Tu dis : EN: You want your friend to picture the hall at midnight.', ['Le concert a duré deux heures.', 'Le concert durait encore à minuit.'], 1, "L'imparfait te remet dans la scène. EN: the imparfait puts you back in the scene.", 'a10-construire'),
        mc('Tu donnes un bilan après un projet difficile. Tu dis : EN: A verdict after a hard project.', ['Ça a été difficile.', "C'était difficile pendant tout le projet."], 0, 'Le bilan arrive quand c’est fini. EN: the verdict comes when it is over.', 'a10-hacks'),
        tI('Tu comptes dix ans à Lyon, du début à la fin. EN: You count ten years in Lyon.', "J'___ à Lyon pendant dix ans.", 'ai habité', 'Compter la période ferme le passé composé. EN: counting the period takes the passé composé.', 'a10-construire'),
        lC('Écoute. Le narrateur montre la scène, ou compte ? EN: Showing the scene, or counting?', 'Il faisait beau ce matin-là.', ['Il montre la scène', 'Il compte'], 0, "L'imparfait montre. EN: the imparfait shows.", 'a10-choix'),
        mc('Dans « Le train est parti à l’heure, et tout le monde était content », qu’est-ce qui avance l’histoire ? EN: What moves the story?', ['est parti', 'était content'], 0, `« ${B103_REFRAME} » EN: the action moves the film.`, 'a10-choix'),
        tI('Tu remets ton ami dans un souvenir heureux. EN: You put your friend back in a happy memory.', 'Nous ___ très heureux là-bas.', 'étions', "L'imparfait pour le souvenir. EN: the imparfait for the memory.", 'a10-usages'),
        mc('Tu fais un rapport au travail, avec des chiffres. Tu choisis : EN: A report at work, with figures.', ['La réunion durait deux heures.', 'La réunion a duré deux heures.'], 1, 'Compter : passé composé. EN: counting takes the passé composé.', 'a10-usages'),
      ],
    },
    {
      id: 'r10-sens', label: 'Ce que tu as vraiment dit', targets: ['says-other'],
      questions: [
        mc('« Samedi, je devais travailler. » Ton ami comprend : EN: Your friend understands:', ['Tu n’as peut-être pas travaillé.', 'Tu as travaillé.'], 0, 'devais laisse la question ouverte. EN: devais leaves it open.', 'a11-erreurs'),
        eS(FIX, "J'ai connu mon voisin pendant dix ans, et on prend encore le café ensemble.", 'Je connais mon voisin depuis dix ans.', 'Une relation qui continue : depuis + présent. EN: an ongoing relationship.', 'a11-analyse'),
        mc('« Je ne voulais pas signer. » Est-ce que la personne a refusé à voix haute ? EN: Did the person refuse out loud?', ['Pas forcément.', 'Oui.'], 0, "Pour le refus : je n'ai pas voulu. EN: the refusal takes n'ai pas voulu.", 'a11-analyse'),
        tI('Tu as refusé de répondre. EN: You refused to answer.', "Je n'ai pas ___ répondre à sa question.", 'voulu', 'Le refus. EN: the refusal.', 'a11-erreurs'),
        lC('Écoute. Est-ce que la personne a appelé ? EN: Did the person call?', "Je devais t'appeler hier.", ['Oui', 'On ne sait pas'], 1, 'devais : le plan, pas le résultat. EN: the plan, not the outcome.', 'a11-analyse'),
        eS(FIX, 'Hier, j’avais mal au dos après le match.', "Hier, j'ai eu mal au dos après le match.", 'après le match : le mal commence là. EN: the pain starts there.', 'a7-erreurs'),
        mc('Tu t’excuses parce que tu n’as pas réussi à venir. Tu dis : EN: You apologise for not managing to come.', ['Je ne pouvais pas venir.', "Je n'ai pas pu venir."], 1, "Un empêchement précis. EN: a precise obstacle.", 'a11-check'),
        tI('Tu supposes qu’il a oublié la clé. EN: You guess he forgot the key.', 'Il ___ oublier la clé.', 'a dû', 'La supposition. EN: the guess.', 'a11-analyse'),
      ],
    },
    {
      id: 'r11-tout', label: 'Tout ensemble', targets: ['tense-mix'],
      questions: [
        mc('« À la gare, j’ai su que le train était annulé. » Quand l’a-t-elle appris ? EN: When did she find out?', ['À la gare.', 'Avant de partir.'], 0, "j'ai su : le moment. EN: the moment.", 'a12-lecture'),
        tI('Elle a réussi à présenter en vidéo. EN: She managed to present by video.', "Finalement, j'___ faire la présentation en vidéo.", 'ai pu', 'La réussite. EN: the success.', 'a12-lecture'),
        mc('« Elle pouvait présenter à ma place. » Nadia a-t-elle présenté ? EN: Did Nadia present?', ['Oui.', 'Non.', 'Le verbe ne le dit pas.'], 2, 'pouvait : la capacité, sans résultat. EN: ability, no outcome.', 'a12-ecoute'),
        eS(FIX, 'Le client ne voulait pas rester jusqu’à la fin, alors il est parti à onze heures.', "Le client n'a pas voulu rester jusqu'à la fin, alors il est parti à onze heures.", 'Un refus suivi du départ. EN: a refusal, then the departure.', 'a11-piege'),
        lC('Écoute. Obligation ou supposition ? EN: Obligation or guess?', 'Il a dû aimer la présentation.', ['Une obligation', 'Une supposition'], 1, 'a dû + verbe, avec il : une supposition. EN: a guess.', 'a12-lecture'),
        mc('« Ce matin-là, il neigeait beaucoup. » C’est : EN: This is:', ['le décor', "l'action"], 0, `« ${B103_REFRAME} » EN: the background.`, 'a12-lecture'),
        tI('Tu ne savais pas quoi faire, à ce moment-là. EN: You did not know what to do.', 'Je ne ___ pas quoi faire.', 'savais', "Un état. EN: a state.", 'a12-lecture'),
        mc('Pour raconter ton plan raté, tu commences par : EN: To tell your failed plan, you start with:', ['Je devais aller à Montréal.', "J'ai dû aller à Montréal."], 0, 'Le plan ouvre l’histoire, et la suite dit ce qui est arrivé. EN: the plan opens the story.', 'a12-task'),
      ],
    },
  ],
  audio: AUDIO,
  say: `Onze séries de huit. ${THE_TEST}`,
};

const A12_REVUE: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a12-revue',
  layer: 'core',
  title: 'Les paires, une dernière fois',
  frSub: 'Encore, difficile, facile',
  cards: [
    { front: 'I found out', back: "j'ai su", say: "Hier soir, j'ai su qu'elle partait." },
    { front: 'I already knew', back: 'je savais', say: "Je savais qu'elle partait." },
    { front: 'I met her', back: "j'ai connu", say: "J'ai connu sa sœur à Dakar." },
    { front: 'I managed to come', back: "j'ai pu venir", say: "Finalement, j'ai pu venir." },
    { front: 'I failed to come', back: "je n'ai pas pu venir", say: "Je n'ai pas pu venir." },
    { front: 'I tried to call', back: "j'ai voulu appeler", say: "J'ai voulu t'appeler, mais ton téléphone était éteint." },
    { front: 'He refused', back: "il n'a pas voulu", say: "Il n'a pas voulu signer le contrat." },
    { front: 'I was supposed to come', back: 'je devais venir', say: 'Je devais venir à la réunion.' },
    { front: 'He must have forgotten', back: 'il a dû oublier', say: 'Il a dû oublier.' },
    { front: 'I got scared', back: "j'ai eu peur", say: "Quand le chien a aboyé, j'ai eu peur." },
    { front: 'He fell ill', back: 'il a été malade', say: 'Il a été malade après le repas.' },
    { front: 'It was necessary, and done', back: 'il a fallu', say: 'Il a fallu partir tôt.' },
  ],
  audio: AUDIO,
  say: 'Une dernière fois, puis tu fermes la leçon.',
};

const A12_FIN: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a12-fin',
  layer: 'core',
  title: 'Même verbe, autre histoire',
  frSub: 'La fin de l’unité 1',
  // roundup is passage prose: exempt from the 45-word core cap.
  body: `${REFRAME} ${Cap(B103_REF)} disait : « ${B103_REFRAME} » Ici, la même idée change le verbe anglais : knew ou found out, was supposed to ou had to, wanted ou tried. Avant de parler, pose une seule question : ${THE_TEST} Et rappelle-toi que personne ne corrigera ces phrases, parce qu'elles sont correctes. EN: One question before you speak, and remember that nobody will correct these sentences.`,
  points: [
    'je devais, je pouvais, je voulais, il fallait : le résultat reste ouvert.',
    "j'ai su, j'ai connu, j'ai eu peur : un moment, et un autre mot anglais.",
    "je n'ai pas pu, je n'ai pas voulu, il a dû : un échec, un refus, une supposition.",
    'hier, pendant, une date : des indices, pas des règles.',
  ],
  audio: AUDIO,
  say: `C'est la fin de l'unité 1. ${REFRAME}`,
  terms: ['etat', 'moment', 'choix'],
};

const ACT12: ActDef = {
  act: {
    id: 'act12', title: 'Tout ensemble',
    opener: { line: 'Une histoire complète, une conversation, ton propre plan raté, puis l’examen des neuf paires. EN: A whole story, a conversation, your own failed plan, then the exam on the nine pairs.', imageRef: 'lessons/pc-imparfait-paires/act12.jpg' },
    sections: [],
    milestone: 'Tu as raconté un plan raté à voix haute et passé les onze séries de l’examen. EN: You told a failed plan out loud and passed the eleven rounds.',
    estScreens: 120, restPoints: ['a12-ecoute', 'a12-talk', 'a12-task', 'a12-recap', 'a12-progress', 'a12-quiz/r4-vouloir', 'a12-quiz/r8-indices'],
  },
  sections: [A12_LECTURE, A12_ECOUTE, A12_TALK, A12_TASK, A12_DIRE, A12_RECAP, A12_PROGRESS, A12_QUIZ, A12_REVUE, A12_FIN],
  imports: ['fr.b1.sports-et-loisirs.093'],
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS — one per quiz round, fired by a failed round or by
 *  the round's errorTrigger. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-savoir', title: 'État, ou nouvelle', format: 'sort' as const, coach: `${THE_TEST} Deux tas : ce que tu savais déjà, et ce que tu apprends. EN: ${THE_TEST_EN}`, buckets: ['un état', 'une nouvelle'], items: [E(318), E(319), E(320), E(321), E(324), E(326)], audio: AUDIO },
  { id: 'd-connaitre', title: 'Rencontre, ou pas', format: 'mcq' as const, coach: 'Cherche la rencontre. Si elle est là, passé composé. EN: look for the meeting.', q: 'Tu veux dire : I met her in Dakar. EN: I met her in Dakar.', opts: ["Je l'ai connue à Dakar.", 'Je la connaissais à Dakar.', 'Je la connais depuis Dakar.'], correct: 0, why: 'La rencontre est un moment. EN: the meeting is a moment.', items: [E(337), E(338), E(341), E(347), E(348), 'fr.a2.verbes.608'], audio: AUDIO },
  { id: 'd-pouvoir', title: 'Réussi, échoué, inconnu', format: 'mcq' as const, coach: 'Cherche le résultat, pas la capacité. EN: look for the outcome.', q: 'Tu as essayé d’appeler, sans succès. EN: You tried to call, without success.', opts: ['Je ne pouvais pas appeler.', "Je n'ai pas pu appeler."], correct: 1, why: "Un essai précis qui échoue. EN: a precise failed attempt.", items: [E(356), E(357), E(358), E(363), E(364), 'fr.a2.verbes.605'], audio: AUDIO },
  { id: 'd-vouloir', title: 'Envie, essai, refus', format: 'sort' as const, coach: 'Trois tas. Qu’est-ce que la personne a fait. EN: three piles: what did the person do.', buckets: ['une envie', 'un essai', 'un refus'], items: [E(376), E(377), E(378), E(379), E(383), E(384)], audio: AUDIO },
  { id: 'd-devoir', title: 'Plan, obligation, supposition', format: 'mcq' as const, coach: 'Trois emplois. Regarde le sujet et le contexte. EN: three readings; look at the subject and the context.', q: 'Il ne répond pas depuis hier. Tu dis : EN: He has not answered since yesterday.', opts: ['Il a dû oublier.', 'Il devait oublier.'], correct: 0, why: 'Ta conclusion : a dû. EN: your conclusion.', items: [E(1205), E(1206), E(1207), E(1213), E(1214), 'fr.a2.marche.128'], audio: AUDIO },
  { id: 'd-etats', title: 'Ça dure, ou ça commence', format: 'sort' as const, coach: `${THE_TEST} Deux tas. EN: ${THE_TEST_EN}`, buckets: ['ça dure', 'ça commence'], items: [E(1222), E(1223), E(1234), E(1235), E(1226), E(1227)], audio: AUDIO },
  { id: 'd-falloir', title: 'Le besoin et l’idée', format: 'mcq' as const, coach: 'Le besoin a-t-il été rempli. L’idée était-elle fausse. EN: was the need met; was the idea wrong.', q: 'Vous avez attendu une heure, parce que c’était nécessaire. EN: You waited an hour, because it was necessary.', opts: ['Il fallait attendre une heure.', 'Il a fallu attendre une heure.'], correct: 1, why: "Le besoin est arrivé, et vous avez attendu. EN: the need came and was met.", items: [E(1244), E(1245), E(1247), E(1251), E(1252), E(1253)], audio: AUDIO },
  { id: 'd-indices', title: 'Un indice, pas une règle', format: 'mcq' as const, coach: 'Le mot de temps aide. Le sens décide. EN: the time word helps; the meaning decides.', q: 'Avec hier, faut-il toujours le passé composé ? EN: With hier, always the passé composé?', opts: ['Non : Hier, il pleuvait est correct.', 'Oui, toujours.'], correct: 0, why: 'hier va avec les deux temps. EN: hier works with both.', items: [E(1260), E(1261), E(1264), E(1265), E(1278), E(1279)], audio: AUDIO },
  { id: 'd-choix', title: 'Montrer, ou compter', format: 'flashcard' as const, coach: 'Lis la phrase, puis dis ce que le narrateur fait : il montre, ou il compte. EN: is the narrator showing, or counting.', items: [E(1280), E(1281), E(1284), E(1285), E(1286), E(1287)], audio: AUDIO },
  { id: 'd-sens', title: 'Ce que ça dit vraiment', format: 'mcq' as const, coach: 'La phrase est correcte. Demande-toi ce que l’autre comprend. EN: the sentence is correct; ask what the listener hears.', q: '« Je devais t’appeler hier. » Ton ami comprend : EN: Your friend understands:', opts: ['Tu as appelé.', 'Tu n’as peut-être pas appelé.'], correct: 1, why: 'devais laisse la question ouverte. EN: devais leaves it open.', items: [E(1302), E(1295), E(1298), E(1299), E(1300), E(1304)], audio: AUDIO },
  { id: 'd-tout', title: 'Les neuf paires', format: 'flashcard' as const, coach: `${THE_TEST} Une carte, une question. EN: ${THE_TEST_EN}`, items: [E(318), E(338), E(357), E(377), E(1207), E(1223)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'knew-found', description: "Uses j'ai su for knowledge that already existed, or je savais for the moment of finding out.", detectOn: ['a2-construire', 'a2-piege', 'a2-check', 'a12-task'], drill: 'd-savoir', retest: 'd-savoir' },
  { id: 'met-knew', description: 'Uses connaissais for a first meeting, or a closed passé composé period for a relationship that continues.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check'], drill: 'd-connaitre', retest: 'd-connaitre' },
  { id: 'able-managed', description: 'Reads je pouvais as a success, or uses it where the story shows a precise failed attempt.', detectOn: ['a4-construire', 'a4-piege', 'a4-check'], drill: 'd-pouvoir', retest: 'd-pouvoir' },
  { id: 'wanted-tried', description: 'Uses je ne voulais pas for a refusal, or j’ai voulu in a polite softener.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check'], drill: 'd-vouloir', retest: 'd-vouloir' },
  { id: 'supposed-had', description: 'Reads je devais as if the thing happened, or misses epistemic a dû (il a dû oublier).', detectOn: ['a1-scene', 'a6-construire', 'a6-piege', 'a6-check', 'a12-task'], drill: 'd-devoir', retest: 'd-devoir' },
  { id: 'state-moment', description: 'Uses the passé composé for a lasting state, or the imparfait for the moment it starts.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check'], drill: 'd-etats', retest: 'd-etats' },
  { id: 'need-belief', description: 'Confuses il fallait with il a fallu, or je croyais with j’ai cru.', detectOn: ['a8-construire', 'a8-check'], drill: 'd-falloir' },
  { id: 'cue-rule', description: 'Treats hier, pendant, a date or depuis as a switch that fixes the tense.', detectOn: ['a9-construire', 'a9-piege', 'a9-check'], drill: 'd-indices', retest: 'd-indices' },
  { id: 'decor-action', description: 'Treats the speaker’s choice between background and action as a right-or-wrong question.', detectOn: ['a10-construire', 'a10-check'], drill: 'd-choix' },
  { id: 'says-other', description: 'Produces a grammatical sentence whose tense carries a meaning the speaker did not intend.', detectOn: ['a11-analyse', 'a11-erreurs', 'a11-check', 'a12-task'], drill: 'd-sens', retest: 'd-sens' },
  { id: 'tense-mix', description: 'Mixes the nine pairs under pressure, in a long stretch of narrative.', detectOn: ['a11-piege', 'a12-talk', 'a12-task'], drill: 'd-tout' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). `cheatSheet` is NOT used inside a sheet:
 *  there it draws its title and nothing else. The sheet table scrolls
 *  sideways, so three or four columns are fine.
 *
 *  Every sheet is LINKED from at least one mission through `sheetId`
 *  (b1.01 shipped four sheets with zero links).
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-paires', 'Les neuf paires', ['les neuf verbes', 'le sens de chaque temps', 'le verbe anglais'], [
    teach('sheet-paires-teach', 'Comment lire cette page', `${REFRAME} Pour chaque verbe, l'imparfait donne un état qui dure et le passé composé donne un moment qui arrive. Le verbe anglais change avec le temps français : c'est le meilleur signe que tu t'es trompé. Pose la question avant de choisir : ${THE_TEST} Les participes viennent de ${PARTICIPES_REF}. EN: ${REFRAME_EN} The English verb changes with the French tense, which is the clearest signal.`),
    table('sheet-paires-table', 'Imparfait ou passé composé', ['Verbe', 'Imparfait', 'Passé composé', 'En anglais'], [
      ['savoir', 'je savais', "j'ai su", 'I knew · I found out'],
      ['connaître', 'je connaissais', "j'ai connu", 'I knew her · I met her'],
      ['pouvoir', 'je pouvais', "j'ai pu", 'I was able to · I managed to'],
      ['pouvoir (négatif)', 'je ne pouvais pas', "je n'ai pas pu", 'I could not · I failed to'],
      ['vouloir', 'je voulais', "j'ai voulu", 'I wanted · I tried, I decided'],
      ['vouloir (négatif)', 'je ne voulais pas', "je n'ai pas voulu", 'I did not want · I refused'],
      ['devoir', 'je devais', "j'ai dû", 'I was supposed to · I had to, and did'],
      ['devoir (supposition)', 'pas de forme', 'il a dû oublier', 'he must have forgotten'],
      ['avoir peur', "j'avais peur", "j'ai eu peur", 'I was scared · I got scared'],
      ['être malade', 'il était malade', 'il a été malade', 'he was ill · he fell ill'],
      ['falloir', 'il fallait', 'il a fallu', 'it was necessary · and it was done'],
      ['croire, penser', 'je croyais que', "j'ai cru que", 'I thought (wrongly) · I thought for a moment'],
    ]),
  ]),
  sheet('sheet-negatif', 'Les négatifs et les résultats', ['ce que le négatif accuse', 'la capacité contre la réussite'], [
    teach('sheet-negatif-teach', 'Au négatif, le passé composé accuse', "je n'ai pas pu = j'ai essayé et ça n'a pas marché. je n'ai pas voulu = j'ai refusé, à voix haute. À l'imparfait, les mêmes verbes décrivent seulement : je ne pouvais pas (une situation m'en empêchait), je ne voulais pas (je n'en avais pas envie). C'est pour ça que « je n'ai pas pu venir » est la bonne excuse, et « je ne voulais pas venir » est presque impoli. EN: in the negative, the passé composé asserts a failure or a refusal; the imparfait only describes."),
    table('sheet-negatif-table', 'Le résultat, verbe par verbe', ['Tu dis', 'Le sens', 'Est-ce arrivé'], [
      ['je pouvais venir', 'capable, autorisé', 'inconnu'],
      ["j'ai pu venir", 'tu as réussi', 'oui'],
      ["je n'ai pas pu venir", 'tu as échoué', 'non'],
      ['je ne pouvais pas venir', 'une situation t’en empêchait', 'non, en général'],
      ['je voulais signer', 'une envie', 'inconnu'],
      ["j'ai voulu signer", 'tu as essayé, ou décidé', 'oui, l’essai'],
      ["je n'ai pas voulu signer", 'tu as refusé', 'non'],
      ['je devais signer', 'le plan', 'inconnu'],
      ["j'ai dû signer", 'obligé, et fait', 'oui'],
      ['il a dû signer', 'tu supposes', 'probablement'],
      ['il fallait signer', 'c’était nécessaire', 'inconnu'],
      ['il a fallu signer', 'nécessaire, et fait', 'oui'],
    ]),
  ]),
  sheet('sheet-indices', 'Les indices de temps', ['hier, pendant, depuis', 'chaque indice et son contre-exemple'], [
    teach('sheet-indices-teach', 'Aucun mot ne choisit seul', `Un mot de temps t'aide à comprendre la scène ; il ne choisit jamais le temps du verbe. hier va avec les deux : « Hier, il pleuvait » (le décor) et « Hier, il a plu » (l'action). pendant + une durée fermée va en général au passé composé, sauf si c'est une habitude : « Tous les soirs, il lisait pendant deux heures ». Une date ne force rien : « En 2019, je travaillais à Genève ». depuis + imparfait est à reconnaître : un état qui durait jusqu'à un moment du passé. « ${B103_REFRAME} » EN: no time word picks the tense on its own.`),
    table('sheet-indices-table', 'Chaque indice, deux temps', ['Indice', 'Imparfait', 'Passé composé', 'Ce qui décide'], [
      ['hier', 'Hier, il pleuvait.', 'Hier, il a plu.', 'décor ou fait de la journée'],
      ['hier soir', 'je travaillais encore', "j'ai travaillé jusqu'à minuit", 'la scène ou les heures comptées'],
      ['pendant + durée', 'Tous les soirs, il lisait pendant deux heures.', 'Il a lu pendant deux heures.', 'habitude ou durée fermée'],
      ['ce jour-là', 'tout allait bien', 'tout a changé', 'décor ou action'],
      ['une date', 'En 2019, je travaillais à Genève.', "En 2019, j'ai changé de travail.", 'situation ou changement'],
      ['le matin', 'je prenais le bus', "ce matin-là, j'ai pris un taxi", 'habitude ou une seule fois'],
      ['depuis', 'il habitait là depuis deux ans', 'je le connais depuis dix ans (présent)', 'passé, ou encore vrai'],
      ['une fois', 'pas courant', 'Une fois, nous avons mangé au restaurant.', 'une seule fois'],
    ]),
  ]),
  sheet('sheet-choix', 'Décor ou action : ton choix', ['quand les deux sont corrects', 'ce que chaque temps montre'], [
    teach('sheet-choix-teach', 'Deux versions, aucune fausse', `« ${B103_REFRAME} » Quand un fait peut être montré comme un décor ou raconté comme une action, les deux temps sont corrects et ne montrent pas la même chose. L'imparfait te remet dans la scène : « Le concert durait encore à minuit. » Le passé composé compte : « Le concert a duré deux heures. » Pour un bilan, une fois la chose finie, le français préfère le passé composé : « Ça a été difficile. » EN: when both are possible, the imparfait shows the scene and the passé composé counts or judges.`),
    table('sheet-choix-table', 'Le même fait, deux fois', ['Fait', 'Montrer (imparfait)', 'Compter ou juger (passé composé)'], [
      ['la neige', 'Ce soir-là, il neigeait.', 'Ce soir-là, il a neigé.'],
      ['dix ans à Lyon', "À l'époque, j'habitais à Lyon.", "J'ai habité à Lyon pendant dix ans."],
      ['la fête', 'La fête était magnifique.', 'La fête a été magnifique.'],
      ['le concert', 'Le concert durait encore à minuit.', 'Le concert a duré deux heures.'],
      ['le bonheur là-bas', 'Nous étions très heureux là-bas.', 'Nous avons été très heureux là-bas.'],
      ['la météo', 'Il faisait beau ce matin-là.', 'Il a fait beau toute la semaine.'],
    ]),
  ]),
  sheet('sheet-erreurs', 'Ce que ta phrase dit vraiment', ['les six malentendus', 'ce que l’autre comprend'], [
    teach('sheet-erreurs-teach', 'Personne ne te corrigera', "Toutes les phrases de gauche sont correctes. C'est pour ça qu'elles sont dangereuses : ton collègue ne te reprendra pas, il comprendra simplement autre chose. Relis cette page avant un entretien, un rendez-vous médical ou un message important. EN: every sentence on the left is correct, which is why nobody will correct you."),
    table('sheet-erreurs-table', 'Ce que tu dis, ce qu’on comprend', ['Tu dis', "L'autre comprend", 'Dis plutôt'], [
      ['Samedi, je devais travailler.', 'Tu étais peut-être libre.', "Samedi, j'ai dû travailler."],
      ["J'ai su qu'il était marié.", 'Tu l’as appris à un moment.', "Je savais qu'il était marié."],
      ["Je l'ai connu pendant vingt ans.", 'C’est fini, il est parti.', 'Je le connais depuis vingt ans.'],
      ["Quand j'étais petit, j'ai eu peur des chiens.", 'Une seule fois, un jour précis.', "Quand j'étais petit, j'avais peur des chiens."],
      ['Je ne pouvais pas venir.', 'Une règle générale, pas une excuse.', "Je n'ai pas pu venir."],
      ['Je ne voulais pas signer.', 'Tu n’en avais pas envie, sans refus.', "Je n'ai pas voulu signer."],
      ['Il devait oublier la clé.', 'C’était son plan d’oublier.', 'Il a dû oublier la clé.'],
      ['Il fallait tout recommencer.', 'C’était la règle, peut-être pas fait.', 'Il a fallu tout recommencer.'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11, ACT12];

export const SECTIONS: DraftSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a deck can actually serve. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_DESC: Record<string, string> = {
  'rec-b1-04-nadia': "Nadia's two lines, ONE TAKE, a Swiss French speaker (Vaud). Tired and apologetic, never dramatic. « je devais » and « j'ai dû » take NO extra stress: the difference is in the words, not in the performance.",
  'rec-b1-04-claire': "Claire and a colleague in a Brussels corridor, one take, two voices. Ordinary office pace. « je savais » and « je l'ai su » are read flat, with no emphasis on either.",
  'rec-b1-04-savoir': "The five savoir cards, one take per card. « j'ai su » is short and unstressed; do not lengthen the participle.",
  'rec-b1-04-savoir-ecoute': 'Eight lines in the authored order, ONE VOICE, recorded adjacently: the questions compare them with each other.',
  'rec-b1-04-savoir-piege': "The audio step plays each card's fr, the INTENDED sentence. Read the promptSound lines at the same pace: both are grammatical, and the trap is meaning, not sound.",
  'rec-b1-04-connaitre': 'The five connaître cards. « nous nous sommes connus » keeps its normal rhythm; no pause before the participle.',
  'rec-b1-04-connaitre-ecoute': "Eight lines in order, one voice. Line 8 (« Je l'ai connu pendant dix ans ») is read plainly, with no sadness added: the sentence itself carries the loss.",
  'rec-b1-04-koffi': 'Koffi and a colleague in Abidjan, Ivorian French, recorded together in one take so the turns sound like a conversation. Slightly embarrassed, never comic.',
  'rec-b1-04-pouvoir': "The five pouvoir cards, one take per card. « j'ai pu » and « je n'ai pas pu » must sound like ordinary speech, not like an announcement.",
  'rec-b1-04-pouvoir-ecoute': 'Eight lines in order, one voice, natural pace.',
  'rec-b1-04-pouvoir-piege': 'Correct forms only in the audio step. Same pace on the wrong reading and the right one.',
  'rec-b1-04-contrat': "Two business partners in Lyon, one take. The third line (« Il n'a pas voulu signer ») is factual, not angry: a refusal reported, not complained about.",
  'rec-b1-04-vouloir': 'The five vouloir cards. « Je voulais juste te dire merci » is warm and polite; the others are neutral.',
  'rec-b1-04-nadia-2': 'Nadia and Martin the next day, one take. « Elle a dû oublier » is a shrug, a guess, never an accusation: the intonation is part of what the card teaches.',
  'rec-b1-04-devoir': 'The four devoir cards, one take per card, neutral.',
  'rec-b1-04-supposition': 'The four supposition cards. Every « a dû » is read as a conclusion, with a slight fall: obligation and supposition differ here in intonation only.',
  'rec-b1-04-devoir-ecoute': 'Eight lines in order, one voice. Line 3 (« Tu as dû avoir peur ») is sympathetic, which is what marks it as a guess.',
  'rec-b1-04-devoir-piege': 'Correct forms only in the audio step; the promptSound lines keep the same pace.',
  'rec-b1-04-avoir': "The five avoir cards. « j'ai eu peur » is short and sharp; « j'avais peur » is even and unhurried. The contrast is rhythm, not volume.",
  'rec-b1-04-etre': 'The five être cards. « il a été malade » does not stress été.',
  'rec-b1-04-etats-ecoute': 'Eight lines in order, one voice, recorded adjacently.',
  'rec-b1-04-resto': 'Two friends outside a Brussels restaurant, one take, a little tired. « Il fallait réserver » is matter-of-fact, never a told-you-so.',
  'rec-b1-04-falloir': 'The four falloir cards. « Il fallait le dire » carries the reproach in the intonation, gently.',
  'rec-b1-04-croire': "The five croire and penser cards. « j'ai cru que » is faster than « je croyais que »: the length difference is the teaching.",
  'rec-b1-04-indices': 'The six cue cards. Read « Hier, il pleuvait » and « Hier, il a plu » with the SAME intonation: the card says both are correct, and a reader who marks one as odd teaches the opposite.',
  'rec-b1-04-indices-ecoute': 'Eight lines in order, one voice. Lines 1 and 2, and 7 and 8, are pairs: read each pair identically apart from the verb.',
  'rec-b1-04-indices-piege': 'Correct forms only in the audio step. The false-rule readings in promptSound must sound perfectly normal, because they are.',
  'rec-b1-04-concert': 'Léa and Tom telling the same evening, one take, two voices. Neither sounds corrected: they are both right, and the recording has to make that obvious.',
  'rec-b1-04-choix': 'The five choice cards, one take per card, deliberately even: no version is the better one.',
  'rec-b1-04-melange': 'The six mixed cards, one take per card.',
  'rec-b1-04-final-ecoute': 'Eight lines of the February story, one voice, in order, at story pace.',
};

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-04-[a-z0-9-]+/g) ?? [])];

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: LESSON_TITLE,
  level: LEVEL,
  tag: 'B1 · LEÇON 04',
  intro: "In English, I knew, I could and I had to each have one past form. In French they have two, and the two do not mean the same thing: je devais venir does not say you came, and j'ai su is not I knew but I found out. This lesson takes nine of these verbs, one act at a time, then the time words that look like rules and are not, and ends with you telling the story of a plan that went wrong.",
  // PO: the lesson outcome is a spoken retelling, and the scenario and the
  // practice mission are spoken too.
  skill: 'PO',
  grammarAssumed: [
    'b1.01', 'b1.02', 'b1.03',
    PC_UNIT, PC_ETRE_UNIT, PARTICIPES_UNIT, MODAUX_UNIT, SAVOIR_UNIT, PRONOMINAUX_PC_UNIT,
  ],
  grammarIntroduced: [
    'The aspectual meaning shift of savoir and connaître: imparfait for a state of knowing, passé composé for the moment of finding out or meeting, and connaître in the passé composé for a bounded period',
    'pouvoir, vouloir and devoir in the imparfait leave the outcome unasserted; in the passé composé they assert it (managed, tried or decided, had to and did)',
    'The negatives that assert: je n\'ai pas pu as a failed attempt and je n\'ai pas voulu as a refusal, against the merely descriptive je ne pouvais pas and je ne voulais pas',
    'Epistemic devoir in the passé composé (il a dû oublier) as a supposition about a past event',
    'Inchoative passé composé of states: avoir peur, avoir faim, avoir envie, être malade, être absent, and the bounded reading of a state seen whole',
    'falloir as need stated (il fallait) against need met (il a fallu), and croire / penser in the imparfait for a belief later found false',
    'Temporal adverbials (hier, pendant + duration, ce jour-là, a date) as cues compatible with both tenses, with habit and description overriding them',
    'depuis + imparfait for a state continuing up to a past reference point, for recognition',
    'Tense choice for a single fact as a narrative decision rather than a grammatical one',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "En anglais, I knew, I could et I had to n'ont qu'une forme au passé. En français, ils en ont deux, et elles ne disent pas la même chose. Neuf paires de verbes, un acte à la fois, puis les mots de temps qui ressemblent à des règles. À la fin, tu racontes un plan raté.",
    minutes: 120,
    difficulty: 4,
    glyph: '⇄',
    screens: ACTS.reduce((n, a) => n + a.act.estScreens, 0),
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PAIRES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul, 2026-09-22: every `say` is French, spoken by a fr-FR voice.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

/** The lesson as the CURRENT validators accept it: the draft `task` removed
 *  from `sections` and from every act. */
export function lessonWithoutTask(): Lesson {
  const isTask = (s: DraftSection): s is TaskSection => s.type === 'task';
  const taskIds = new Set(LESSON.sections.filter(isTask).map((s) => s.id));
  return {
    ...LESSON,
    sections: LESSON.sections.filter((s): s is LessonSection => !isTask(s)),
    acts: LESSON.acts?.map((a) => ({
      ...a,
      sections: a.sections.filter((id) => !taskIds.has(id)),
      restPoints: a.restPoints?.filter((rp) => !taskIds.has(rp.split('/')[0])),
    })),
  };
}

/** Named so the merge and a future test agree on which imports are reachable
 *  by being named rather than by being released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
