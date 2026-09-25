// b1.19.l1 « Le discours indirect » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union since 2026-09-25), so
// `sections` is `LessonSection[]` and the validators run on `LESSON` itself,
// exactly as b1.18 does. There is no `lessonWithoutTask()` shim.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the form), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  Le message pour Sophie     7   dire que, in the present: nothing moves in time
//    2  Je devient il              8   persons and possessives follow the new speaker
//    3  Elle demande si            7   the yes/no question; si takes the future
//    4  Où, quand, ce que          7   question words; qu'est-ce que -> ce que
//    5  Dis-lui de rappeler        7   the order: de + infinitif
//    6  Elle a dit qu'elle était   8   past reporting verb: présent -> imparfait
//    7  Il avait perdu             8   passé composé -> plus-que-parfait (BUILT here)
//    8  Il rappellerait            7   futur -> conditionnel; the whole shift table
//    9  Le lendemain, là-bas       7   time and place words, only if the day changed
//   10  Plus que dire              8   expliquer, répondre, promettre, avouer...
//   11  Transmettre un message    11   model, plan, role play, TASK, quiz
//
//   TOTAL 85 missions, 11 acts. Corpus: 181 authored rows (.1000-.1193) in
//   eleven blocks plus 16 reused seed rows, 197 item ids in all, 192 of them
//   released act by act through `deckTranche` (the other 5 are seed rows with
//   no flashcard drill, listed as NOT_DECK_ABLE). Quiz: 11 rounds of 8.
//   Eleven error triggers, eleven drills, five reference sheets reached from
//   18 missions, three tapTables, ten terms.
//   Chapter artwork: `discours-indirect-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le message reste, le point de vue change. »
//   EN: The message stays the same; the point of view moves.
//
//   ONE METAPHOR, THE MESSAGE PASSED FROM HAND TO HAND. What was said does
//   not change on the way; who holds it, and on what day, does. Every rule is
//   one of those moves: persons (who speaks now), tenses (the saying is in
//   the past), time words (the day changed), question and order shapes (you
//   are no longer the one asking). It is NOT « everything goes back one
//   tense »: acts 1 to 5 report in the present and nothing moves in time.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    dire que (que never dropped); the person and possessive shift;
//           the reported yes/no question with si (and the future after it);
//           question words and qu'est-ce que -> ce que; the reported order
//           with de + infinitif; the tense shift after a past reporting verb;
//           the time and place words; the reporting verbs; relaying a
//           message. AND THE PLUS-QUE-PARFAIT AS A PRODUCED FORM: b1.10 only
//           shows si + plus-que-parfait for recognition, so b1.19 is the
//           first B1 lesson that has the learner BUILD it, and only as the
//           reported form of a passé composé (imparfait of avoir/être, which
//           b1.01 built, plus a participle, agreeing after être as a2.21
//           taught).
//   QUOTES  a2.24 (lui/leur), a2.05 and a2.21 (the passé composé frame),
//           all with the French rendering an earlier B1 lesson ships;
//           b1.02 (imparfait), b1.07 (the future after si, which act 3
//           must explicitly qualify), b1.08 (futur/conditionnel) and b1.13
//           (ce que / ce qui), in French as they stand.
//   LEAVES  the conditionnel passé (« il a dit qu'il serait venu ») to B2;
//           the subjunctive to b1.14-16 (no authored string uses one, which
//           is why « demander que » never appears); the plus-que-parfait as
//           a narrative tense of its own to a later lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (Karim and Isabelle Morin say « vous » to a professional
//   they do not know well, colleagues say tu). Every learner surface that
//   explains something carries English (`en`, or a final « EN: »), and NO
//   ANSWER ever does. Every `say` is French, spoken fr-FR. Theme
//   `paroles-rapportees`, POSTGRES ONLY (corpus §A.1). A2 citations use the
//   English trail label; b1.* ones are French from the plan. Setting: a small
//   architects' office in Montréal with a client in Dakar and a friend in
//   Lausanne; characters recur only inside this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. THE TENSE SHIFT IS TAUGHT AS THE NORM, with two escapes the lesson
//      names: a general truth may stay in the present (the seed's own « Le
//      coach nous a dit que la discipline compte plus que le talent »), and
//      spoken French often keeps the present for something still true. The
//      grader is told to accept both. Is that the line you want, or should
//      B1 insist on the shift everywhere?
//   2. THREE tapTables (acts 2, 8 and 9), one per act, six rows each, the
//      working number from the playbook (11.2). Confirm.
//   3. The task is WRITTEN (PE, 90 to 130 words, relay a voicemail to an
//      absent colleague). Relaying is just as often spoken. Should b1.19 also
//      carry a spoken version, or is the scenario enough?
//   4. `fr.sons.liaisons.023` « Dis-moi quand est-ce que ça commence. » is
//      published and keeps est-ce que after an indirect question word, which
//      act 4 teaches a learner not to write. It is ordinary speech and a
//      liaison row, so it is untouched. Leave it, or annotate it?
//   5. The plus-que-parfait is introduced ONLY as reported speech. A later
//      lesson will want it as a narrative tense (« il était déjà parti quand
//      je suis arrivé », row .1125 here). Should that be b1.20+ territory, or
//      should this lesson have owned it outright?
//   6. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  NOTE_TEXT, GARE_TEXT, RELAIS_TEXT, TASK_VOICEMAIL,
  A224_REFRAME, A224_REFRAME_FR, A205_REFRAME, A205_REFRAME_FR, A221_REFRAME, A221_REFRAME_FR,
  B102_REFRAME, B107_REFRAME, B108_REFRAME, B113_REFRAME,
  POSSESSIFS_UNIT, QUESTIONS_UNIT, INTERROGATIFS_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT,
  PRONOMINAL_PC_UNIT, PARTICIPLE_UNIT, DIRECT_OBJ_UNIT, INDIRECT_OBJ_UNIT, FUTUR_PROCHE_UNIT,
  IMP_FORM_UNIT, IMP_USE_UNIT, FUTUR_UNIT, FUTUR_USAGE_UNIT, CONDITIONNEL_UNIT, SI_UNIT, CE_QUE_UNIT,
  POSSESSIFS_REF, INTERROGATIFS_REF, PC_AVOIR_REF, PC_ETRE_REF, INDIRECT_OBJ_REF, IMP_FORM_REF, IMP_USE_REF,
  FUTUR_USAGE_REF, CONDITIONNEL_REF, SI_REF, CE_QUE_REF,
} from './discours-indirect-corpus.ts';
import { DISCOURS_INDIRECT_TERMS } from './discours-indirect-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.19: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.19: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section (the density
 *  validator requires brackets in a section and refuses them in a row). */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.19: no respell on ${id}`);
  return `[${r.respell}]`;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A free groupDrill item: a quotation of a passage, with no corpus row. */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
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

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE MESSAGE POUR SOPHIE
 *
 *  Reporting in the PRESENT, the same afternoon. Nothing moves in time, so
 *  the only thing that can go wrong is the person, and that is what the
 *  scene is built on.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner passes on a phone message by repeating it word for
 *  word, so Karim's « je » becomes the learner's. The failing option adds
 *  « que » and still keeps « je », which is the most plausible half-fix.
 *  NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Un appel pour Sophie',
  frSub: 'Le message de Karim',
  setting: { place: "Une agence d'architectes, rue Saint-Denis", city: 'Montréal', time: '16 h 30', ambience: 'des maquettes blanches, un téléphone qui sonne, la pluie sur la vitrine' },
  beats: [
    {
      kind: 'narration',
      text: "Une petite agence d'architectes à Montréal. Ta collègue Sophie est chez un client. Son téléphone sonne, alors tu décroches. C'est Karim Benali, un client de Québec.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karim',
      fr: src(E(1000)).fr,
      en: src(E(1000)).en,
      respell: rsOf(E(1000)),
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karim',
      fr: src(E(1002)).fr,
      en: src(E(1002)).en,
      respell: rsOf(E(1002)),
      stage: 'Il raccroche vite. Tu notes ses mots sur un papier jaune.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Une heure plus tard, Sophie rentre et pose son parapluie. Elle voit le papier jaune sur son bureau.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Sophie',
      fr: "Dis-moi ce qu'il y a sur ce papier.",
      en: 'Tell me what is on this note.',
      respell: '[dee-MWA suh keel ya sür suh pa-PYAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Karim. Je serai en retard demain. Mon train part à dix heures.',
      en: 'Karim. I will be late tomorrow. My train leaves at ten.',
      respell: '[ka-REEMM | zhuh suh-ray ahⁿ ruh-TAR duh-MEHⁿ | mohⁿ trehⁿ PAR a dee-ZUHR]',
      stage: 'Tu lis le papier mot pour mot, avec la voix de Karim.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Sophie',
      fr: 'Toi, en retard demain. Tu habites pourtant à deux rues.',
      en: 'You, late tomorrow. And you live two streets away.',
      respell: '[TWA | ahⁿ ruh-TAR duh-MEHⁿ | tü a-beet poor-tahⁿ a deu RÜ]',
      stage: 'Elle rit, puis elle hésite. Pour elle, ce je, c’est toi.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase dit à Sophie que c’est Karim qui sera en retard ?',
      size: 'lg',
      options: [
        { fr: 'Karim dit que je serai en retard demain.', respell: '[ka-REEMM dee kuh zhuh suh-ray ahⁿ ruh-TAR duh-MEHⁿ]', en: 'Karim says I will be late tomorrow.', outcome: 'breaks', audio: AUDIO },
        { fr: src(E(1001)).fr, respell: rsOf(E(1001)), en: src(E(1001)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Sophie ouvre son agenda et déplace la réunion de Karim à quatorze heures. Le message est passé.',
        breaks: 'Sophie te regarde, perdue. Tu as ajouté que, mais le je de Karim est resté dans ta bouche.',
      },
    },
    {
      kind: 'break',
      heading: 'Les mots de Karim, dans ta bouche',
      body: "Tu as répété les mots exacts de Karim, mais c'est toi qui parlais. Alors son je est devenu ton je. Pour passer un message, tu gardes ce qu'il dit et tu changes les personnes. EN: You kept Karim's exact words, so his je became yours.",
      wrong: {
        fr: 'Karim dit que je serai en retard demain.',
        ipa: '/ka.ʁim di kə ʒə sə.ʁe ɑ̃ ʁə.taʁ də.mɛ̃/',
        respell: '[ka-REEMM dee kuh zhuh suh-ray ahⁿ ruh-TAR duh-MEHⁿ]',
        en: 'Karim says I will be late tomorrow.',
      },
      right: {
        fr: src(E(1001)).fr,
        ipa: ipaOf(E(1001)),
        respell: rsOf(E(1001)),
        en: src(E(1001)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Le message est passé. Il reste les questions, les demandes, et les messages d'hier, qui changent encore plus. C'est le sujet de cette leçon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'pronoms'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Passer un message au présent', s: 'Actes 1 et 2 : dire que, et les personnes qui changent' },
    { t: 'Rapporter une question ou une demande', s: 'Actes 3 à 5 : si, ce que, dire de' },
    { t: 'Raconter ce qui a été dit hier', s: 'Actes 6 à 9 : les temps et les mots du temps qui bougent' },
    { t: 'Transmettre un vrai message', s: 'Actes 10 et 11 : les bons verbes, puis ta mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a real note, where every shape of the lesson is already
 *  at work, all of it in the present. `questionsInModal` so the learner
 *  reads the note before the questions. */
const A1_NOTE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-note',
  layer: 'core',
  questionsInModal: true,
  title: 'La note de Julien',
  frSub: 'Lis, et cherche qui parle',
  text: NOTE_TEXT,
  glossary: [
    { word: 'déplacer', en: 'to move (a meeting)', note: 'Mettre à une autre heure ou un autre jour.' },
    { word: 'le chantier', en: 'the building site', note: "L'endroit où les ouvriers construisent." },
    { word: 'étage', en: 'floor, storey', note: 'Le deuxième étage est au-dessus du premier.' },
    { word: "l'évier", en: 'the sink', note: 'Dans la cuisine, là où tu laves la vaisselle.' },
    { word: 'une pièce manque', en: 'a part is missing', note: "Ici, une pièce est un morceau de machine, pas une salle." },
  ],
  questions: [
    { q: 'Qui a dit « je serai en retard » ?', a: "Karim. Julien écrit il dit qu'il sera en retard : le je de Karim est devenu il." },
    { q: 'Julien écrit « son train ». Qu’est-ce que Karim a dit, lui ?', a: 'Mon train part à dix heures. Mon devient son quand quelqu’un d’autre le raconte.' },
    { q: 'Pourquoi les temps ne changent-ils pas dans la note ?', a: 'Julien écrit dit, au présent, le jour même. Sera reste sera, part reste part.' },
    { q: 'Trouve une question et une demande dans la note.', a: "Il demande si tu peux déplacer la réunion. Il dit de ne pas utiliser l'évier." },
  ],
  audio: REC('rec-b1-19-note'),
  say: REFRAME,
  terms: ['discours', 'que'],
};

/** BUILD, on what was just read: the original words against the relayed
 *  ones. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Les mots de départ, les mots rapportés',
  groups: [
    grp('Ce qui a été dit', [
      it(E(1000), 'Karim, au téléphone'),
      it(E(1002), 'Karim, encore'),
      free('Le chantier avance bien.', 'The building work is going well.', 'Madame Diallo, de Dakar'),
      free('Les plans sont parfaits.', 'The plans are perfect.', 'le client, content'),
    ], chk(
      'Dans ces quatre phrases, qui parle ?',
      ['la personne qui a eu le message en premier', 'toi, qui passes le message'], 0,
      "Ce sont les mots de départ, dans la bouche de leur auteur. EN: these are the original words, in the speaker's own mouth.")),
    grp('Ce que tu en fais', [
      it(E(1001), 'je devient il'),
      it(E(1003), 'mon devient son'),
      it(E(1009), 'Madame Diallo, passée par toi'),
      it(E(1007), 'le client, passé par toi'),
    ], chk(
      'Quel petit mot arrive après dit, à chaque fois ?',
      ['si', 'que', 'de'], 1,
      "Que ouvre l'information rapportée. EN: que opens the reported information.")),
    ctl('Le temps', 'Karim a dit « je serai en retard ». Tu le dis à Sophie cinq minutes après. Quel temps ?',
      ['il était', 'il serait', 'il sera'], 2,
      "Tu dis dit, au présent : le temps ne bouge pas. EN: with dit in the present, the tense stays."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'que'],
};

/** NAME: the frame, one idea per card. */
const A1_DIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-dire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-personnes',
  title: 'Dire que, au présent',
  frSub: 'Le cadre de tout le reste',
  hint: 'Quatre cartes. Regarde ce qui bouge, et ce qui reste.',
  audio: REC('rec-b1-19-dire'),
  say: REFRAME,
  terms: ['que', 'pronoms'],
  cards: [
    {
      head: 'Un verbe, puis que', label: 'dire que',
      fr: src(E(1007)).fr,
      sub: rsOf(E(1007)),
      body: "Le verbe qui rapporte, puis que, puis la phrase. Pas de guillemets, pas de deux-points. EN: reporting verb, que, then the sentence.",
    },
    {
      head: 'Que ne tombe jamais', label: 'que',
      fr: src(E(1005)).fr,
      sub: rsOf(E(1005)),
      body: "L'anglais enlève souvent that. Le français garde toujours que, et il écrit qu' devant une voyelle. EN: French keeps que every time.",
    },
    {
      head: 'Au présent, le temps reste', label: 'il dit',
      fr: src(E(1006)).fr,
      sub: rsOf(E(1006)),
      body: "Ils ont dit « nous avons fini », et tu le répètes tout de suite. Le passé composé reste, le futur reste. EN: with dit in the present, no tense moves.",
    },
    {
      head: 'Les personnes bougent', label: 'le point de vue',
      fr: src(E(1003)).fr,
      sub: rsOf(E(1003)),
      body: `${REFRAME} Le mon train de Karim devient son train dans ta bouche. EN: ${REFRAME_EN}`,
    },
  ],
};

/** CHOOSE: where passing a message on costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Un client appelle pour ta collègue, qui est en réunion', fr: src(E(1001)).fr, en: src(E(1001)).en },
    { situation: 'Tu traduis pour ta mère au guichet de la mairie', fr: 'Il dit que tu dois remplir ce formulaire.', en: 'He says you have to fill in this form.' },
    { situation: 'Ton fils te répète ce que la maîtresse a annoncé', fr: 'La maîtresse dit que la sortie est annulée.', en: 'The teacher says the outing is cancelled.' },
    { situation: 'Un écran t’arrête au moment de te connecter', fr: src('fr.a2.internet.201').fr, en: src('fr.a2.internet.201').en },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'que'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le point de vue', 'Karim dit « mon train ». Tu le racontes. Tu dis...',
    ['son train', 'mon train'], 0,
    "C'est le train de Karim, et c'est toi qui parles. EN: it is Karim's train, and you are the speaker."),
  ctl('Que', 'Peux-tu enlever que dans « il dit qu’il est fatigué » ?',
    ['Oui, comme en anglais.', 'Seulement à l’oral.', 'Non, jamais.'], 2,
    "Le français garde que partout. EN: French keeps que everywhere."),
  ctl('Le temps', 'Après « il dit », le futur de Karim...',
    ['passe au conditionnel', 'reste au futur'], 1,
    "Dit est au présent : rien ne recule. EN: dit is present, so nothing moves back."),
], ['que', 'pronoms']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le message pour Sophie',
    opener: {
      line: "Un client appelle pour ta collègue, et tu dois lui passer le message : ici tu apprends à le dire avec ta voix. EN: A client calls for your colleague and you have to pass the message on: here you learn to say it in your own voice.",
      imageRef: 'lessons/discours-indirect/act01.jpg',
    },
    sections: [],
    milestone: "Tu passes un message au présent avec dire que, et tu changes je en il. EN: You can pass a message on in the present with dire que, turning je into il.",
    estScreens: 26, restPoints: ['a1-note'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_NOTE, A1_REPERER, A1_DIRE, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — JE DEVIENT IL
 *
 *  The persons and the possessives. The rule is one question, asked every
 *  time: who is speaking now, and to whom? That is why « tu » can become
 *  « me » and « vous » can become « tu ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: Julien calls you, then you tell Sophie. Two of his words were
 *  about you, so they come out as « me ». Story bubbles avoid « ? » and
 *  « ! », like scene bubbles. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Julien au téléphone',
  frSub: 'Deux mots sur lui, un mot sur toi',
  setting: "Le lendemain matin, à l'agence. Julien travaille chez lui aujourd'hui et il t'appelle. Sophie écoute depuis la porte.",
  bubbles: [
    { from: 'narrator', fr: 'Julien parle vite. Il a un problème et une promesse.', en: 'Julien talks fast. He has a problem and a promise.' },
    { from: 'coach', fr: src(E(1016)).fr, en: src(E(1016)).en, warn: 'je et mes : c’est Julien qui parle' },
    { from: 'coach', fr: src(E(1033)).fr, en: src(E(1033)).en, warn: 'je, c’est Julien ; te, c’est toi' },
    { from: 'narrator', fr: 'Tu raccroches. Sophie veut savoir.', en: 'You hang up. Sophie wants to know.' },
    { from: 'user', fr: "Julien dit qu'il n'a pas ses clés.", en: 'Julien says he does not have his keys.', warn: 'je devient il, mes devient ses' },
    { from: 'user', fr: src(E(1028)).fr, en: src(E(1028)).en, warn: 'je devient il, et te devient me' },
    { from: 'coach', fr: "Donc c'est toi qu'il appelle ce soir, pas moi.", en: 'So it is you he is calling tonight, not me.', warn: 'Sophie a compris : me, c’est toi' },
  ],
  closing: { fr: 'Son je devient il, et ton te devient me : chacun à sa place.', en: 'His je becomes il, and your te becomes me: everyone in their place.' },
  audio: REC('rec-b1-19-cles'),
  say: REFRAME,
  terms: ['pronoms'],
};

/** NAME: four moves, one per card. */
const A2_PRONOMS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-pronoms',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-personnes',
  title: 'Les personnes suivent qui parle',
  frSub: 'je, mon, nous, te',
  hint: 'Quatre cartes. À chaque fois, demande-toi qui parle maintenant.',
  audio: REC('rec-b1-19-pronoms'),
  say: REFRAME,
  terms: ['pronoms'],
  cards: [
    {
      head: 'Je devient il ou elle', label: 'je',
      fr: src(E(1029)).fr,
      sub: rsOf(E(1029)),
      body: "Le je de départ, c'est la personne qui a parlé. Dans ta bouche, c'est il ou elle. EN: the original je becomes il or elle.",
    },
    {
      head: 'Mon devient son', label: Cap(POSSESSIFS_REF),
      fr: src(E(1017)).fr,
      sub: rsOf(E(1017)),
      body: "Ses clés à elle, pas les tiennes. Le possessif suit la personne, comme le pronom. EN: possessives move with the person.",
    },
    {
      head: 'Nous devient ils', label: 'nous',
      fr: src(E(1019)).fr,
      sub: rsOf(E(1019)),
      body: "Notre bureau devient leur bureau. Tu n'étais pas dans ce nous, donc tu dis ils. EN: nous becomes ils, notre becomes leur.",
    },
    {
      head: 'Te devient me', label: 'toi',
      fr: src(E(1028)).fr,
      sub: rsOf(E(1028)),
      body: "Si le message parlait de toi, tu dis me. Qui parle maintenant, et à qui ? EN: if it was about you, you say me.",
    },
  ],
};

/** NAME, as a table: the six moves, each with a detail. */
const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-personnes',
  title: 'Six petits mots qui changent',
  cols: ['Au départ', 'Dans ta bouche'],
  rows: [
    { cells: ['je', 'il, elle'], say: src(E(1001)).fr,
      detail: { title: 'je', body: "La personne qui a parlé n'est plus là : elle devient il ou elle. EN: the absent speaker becomes il or elle.", say: src(E(1005)).fr } },
    { cells: ['mon, ma, mes', 'son, sa, ses'], say: src(E(1017)).fr,
      detail: { title: 'mon, ma, mes', body: "Son, sa, ses s'accordent avec la chose, pas avec la personne. EN: they agree with the thing owned.", say: src(E(1021)).fr } },
    { cells: ['nous, notre', 'ils, leur'], say: src(E(1019)).fr,
      detail: { title: 'nous', body: "Un groupe qui a parlé devient ils ou elles, et notre devient leur. EN: a group becomes ils, notre becomes leur.", say: src(E(1030)).fr } },
    { cells: ['te, toi', 'me, moi'], say: src(E(1028)).fr,
      detail: { title: 'te, quand c’était toi', body: "Le message parlait de toi : dans ta bouche, c'est me. EN: it was about you, so you say me.", say: src(E(1025)).fr } },
    { cells: ['vous, votre', 'tu, ton'], say: src(E(1026)).fr,
      detail: { title: 'vous, à Sophie', body: "Karim a dit votre projet à Sophie. Tu parles à Sophie, donc ton projet. EN: the listener becomes tu.", say: src(E(1024)).fr } },
    { cells: ['me, moi', 'le, lui'], say: src(E(1020)).fr,
      detail: { title: 'me, dans la bouche de Karim', body: `Rappelle-moi devient tu peux le rappeler. « ${A224_REFRAME_FR} » EN: me becomes le or lui by the usual rule.`, say: src(E(1081)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronoms'],
};

/** BUILD: possessives first, then groups. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Mon devient son, nous devient ils',
  groups: [
    grp('Une seule personne a parlé', [
      it(E(1017), 'mes clés, ses clés'),
      it(E(1021), 'ma fille, sa fille'),
      it(E(1031), 'mon dernier jour, son dernier jour'),
      it(E(1032), 'ma voiture, sa voiture'),
    ], chk(
      'Dans « sa voiture », à qui est la voiture ?',
      ['à toi', 'à la personne qui a parlé'], 1,
      "Sa renvoie à il, la personne qui a parlé. EN: sa points back to the speaker.")),
    grp('Un groupe a parlé', [
      it(E(1019), 'notre bureau, leur bureau'),
      it(E(1023), 'notre avion, leur avion'),
      it(E(1030), 'nous vous invitons, ils nous invitent'),
      it(E(1022), 'ses enfants : un père, plusieurs enfants'),
    ], chk(
      '« Leur avion » : combien de personnes ont parlé ?',
      ['plusieurs', 'une seule'], 0,
      "Leur est le possessif de ils et de elles. EN: leur belongs to ils and elles.")),
    ctl('La question à se poser', 'Karim a dit « ma sœur ». Qu’est-ce qui décide entre son et sa ?',
      ['Karim, qui est un homme', 'toi, qui parles', 'sœur, qui est féminin'], 2,
      "Le possessif s'accorde avec la chose : sa sœur. EN: the possessive agrees with the thing owned."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronoms'],
};

/** NAME again: when the original was about you or about the listener. */
const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  sheetId: 'sheet-personnes',
  title: 'Quand le message parle de toi',
  examples: [
    ex(E(1028), 'Il t’a dit je t’appelle : tu dis il m’appelle.'),
    ex(E(1025), 'Elle te remerciait, toi : elle me remercie.'),
    ex(E(1024), 'Il a dit dis à Sophie que je l’attends : à Sophie, il t’attend.'),
    ex(E(1026), 'Votre projet, dit à Sophie : ton projet, quand tu lui parles.'),
    ex(E(1020), 'Rappelle-moi, dit à toi pour Sophie : tu peux le rappeler.'),
    ex(E(1030), 'Ils nous invitent : le nous, c’est toi et Sophie.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronoms'],
};

/** CHOOSE: the same original, a different listener. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Qui est tu, maintenant',
  groups: [
    grp('Tu parles à Sophie', [
      it(E(1024), 'le message était pour Sophie'),
      it(E(1026), 'le projet de Sophie'),
      it(E(1012), 'Sophie peut appeler'),
      it(E(1020), 'Sophie peut rappeler Karim'),
    ], chk(
      'Dans ces quatre phrases, qui est tu ?',
      ['Karim', 'Sophie', 'toi'], 1,
      "Tu, c'est la personne qui t'écoute maintenant. EN: tu is whoever is listening to you now.")),
    grp('Le message parlait de toi', [
      it(E(1028), 'il t’a promis un appel'),
      it(E(1025), 'elle t’a remercié'),
      free("Il dit qu'il me doit un café.", 'He says he owes me a coffee.', 'il te devait un café, à toi'),
      free("Elle dit qu'elle m'envoie les photos.", 'She says she is sending me the photos.', 'les photos étaient pour toi'),
    ], chk(
      'Pourquoi me dans ces quatre phrases ?',
      ['parce que tu répètes les mots exacts', 'parce que le message était pour toi'], 1,
      "C'est toi qui parles maintenant : pour toi, tu dis me. EN: you are the speaker now, so you say me.")),
    ctl('Le test', "Karim t'a dit : « Sophie peut m'appeler. » Tu le dis à Sophie. Que dis-tu ?",
      ['Il dit que tu peux l’appeler.', 'Il dit que Sophie peut m’appeler.'], 0,
      "Sophie devient tu, et le me de Karim devient le. EN: Sophie becomes tu, Karim's me becomes le."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronoms'],
};

/** TRAP: four things an anglophone does here, each reasonable. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre personnes mal placées',
  errors: [
    {
      wrong: "Elle dit qu'elle n'a pas mes clés.",
      right: src(E(1017)).fr,
      why: "Normal : tu recopies le mes du départ. Mais ce sont ses clés à elle, pas les tiennes. EN: you copied the original mes; they are her keys.",
    },
    {
      wrong: "Ils disent qu'ils aiment notre nouveau bureau.",
      right: src(E(1019)).fr,
      why: "Le nous était le leur. Tu n'étais pas dans ce nous, donc notre devient leur. EN: you were not in their nous.",
    },
    {
      wrong: 'Il dit il est malade.',
      right: "Il dit qu'il est malade.",
      why: "En anglais, he says he is ill marche sans that. En français, que est obligatoire. EN: French cannot drop que.",
    },
    {
      wrong: 'Il dit que son fille est malade.',
      right: 'Il dit que sa fille est malade.',
      why: "En anglais, his dépend du père. En français, sa dépend de fille, qui est féminin. EN: sa agrees with fille, not with the father.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronoms', 'que'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le je', 'Nadia a dit « je pars ». Tu le racontes. Tu dis...',
    ['je pars', 'elle part'], 1,
    "Nadia n'est plus celle qui parle. EN: Nadia is no longer the speaker."),
  ctl('Le possessif', '« Nos enfants », dit par un couple. Tu dis...',
    ['leurs enfants', 'ses enfants', 'nos enfants'], 0,
    "Un couple, c'est ils : leurs enfants. EN: a couple is ils, so leurs."),
  ctl('Le tu', 'Dans le message que tu rapportes, qui est tu ?',
    ['la personne qui t’écoute', 'la personne qui a parlé'], 0,
    "Tu, c'est toujours la personne en face de toi. EN: tu is always the person in front of you."),
], ['pronoms']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Je devient il',
    opener: {
      line: "Son je, ton te, leur nous : ici chaque petit mot change de main avec le message. EN: His je, your te, their nous: here every small word changes hands with the message.",
      imageRef: 'lessons/discours-indirect/act02.jpg',
    },
    sections: [],
    milestone: "Tu changes les pronoms et les possessifs selon qui parle, et à qui. EN: You can move the pronouns and possessives to fit who is speaking, and to whom.",
    estScreens: 34, restPoints: ['a2-tableau'],
  },
  sections: [A2_HISTOIRE, A2_PRONOMS, A2_TABLEAU, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — ELLE DEMANDE SI
 *
 *  The yes/no question. One thing here must be said out loud because an
 *  earlier lesson said the opposite: b1.07 taught « jamais de futur après
 *  si », which is true of the si of a CONDITION. The si of a reported
 *  question means « whether » and takes the future freely.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: eight relayed questions. `hideLines` because the questions
 *  are about what the ear caught. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Huit questions, passées par Julien',
  frSub: 'Écoute ce que les clients demandent',
  lines: [
    ln(E(1037)), ln(E(1038)), ln(E(1039)), ln(E(1043)),
    ln(E(1046)), ln(E(1047)), ln(E(1048)), ln(E(1041)),
  ],
  questions: [
    { q: 'Première phrase : de quel jour parle-t-on ?', opts: ['jeudi', 'samedi'], correct: 0, why: "« si tu es libre jeudi ». EN: Thursday." },
    { q: 'Troisième phrase : qui veut venir plus tôt ?', opts: ['toi', 'la personne qui demande'], correct: 1, why: "« s'il peut venir » : il, c'est celui qui pose la question. EN: il is the one asking." },
    { q: 'Quatrième phrase : la fête a-t-elle déjà eu lieu ?', opts: ['Oui', 'Non, elle est à venir'], correct: 1, why: "« si tu viendras » : le futur, après ce si-là. EN: the future, after this si." },
    { q: 'Sixième phrase : comment veut-elle payer ?', opts: ['par virement', 'par carte'], correct: 0, why: "« par virement ». EN: by bank transfer." },
    { q: 'Septième phrase : qui a peut-être reçu le message ?', opts: ['lui', 'elle'], correct: 1, why: "« si elle a reçu » : si ne s'élide pas devant elle. EN: no elision before elle." },
  ],
  audio: REC('rec-b1-19-si-ecoute'),
  say: REFRAME,
  terms: ['si'],
};

/** NAME: four cards, the last one qualifying b1.07. */
const A3_SI: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-si',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-questions',
  title: 'Oui ou non devient si',
  frSub: 'La question rapportée',
  hint: 'Quatre cartes. Regarde ce qui disparaît.',
  audio: REC('rec-b1-19-si'),
  say: REFRAME,
  terms: ['si'],
  cards: [
    {
      head: 'Est-ce que part, si arrive', label: 'si',
      fr: src(E(1037)).fr,
      sub: rsOf(E(1037)),
      body: "Est-ce que disparaît, et le point d'interrogation aussi : c'est une phrase normale, avec un point. EN: est-ce que and the question mark both go.",
    },
    {
      head: 'S’il, mais si elle', label: 'l’élision',
      fr: src(E(1039)).fr,
      sub: rsOf(E(1039)),
      body: "Si devient s' devant il et ils, et seulement là. Devant elle, tu écris si elle. EN: si elides only before il and ils.",
    },
    {
      head: 'Trois façons de demander', label: 'les verbes',
      fr: src(E(1042)).fr,
      sub: rsOf(E(1042)),
      body: "Demander si, vouloir savoir si, se demander si : trois verbes qui annoncent une question. EN: three verbs that announce a question.",
    },
    {
      head: 'Ce si-là accepte le futur', label: Cap(FUTUR_USAGE_REF),
      fr: src(E(1044)).fr,
      sub: rsOf(E(1044)),
      body: `« ${B107_REFRAME} » C'est vrai pour une condition. Le si d'une question veut dire whether : elle viendra est correct. EN: this si means whether and takes the future.`,
    },
  ],
};

/** BUILD: est-ce que out, si in; then the elision. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Enlève est-ce que, mets si',
  groups: [
    grp('La question, puis le rapport', [
      it(E(1036), 'la question de Karim'),
      it(E(1037), 'la même, rapportée'),
      it(E(1051), 'une question pour le bureau'),
      it('fr.a1.questions.364', 'une question sur lui'),
    ], chk(
      'Qu’est-ce qui remplace est-ce que dans la phrase rapportée ?',
      ['que', 'si', 'rien'], 1,
      "Si prend la place de est-ce que, et la phrase finit par un point. EN: si replaces est-ce que.")),
    grp('S’il ou si elle', [
      it(E(1039), 's’il : si devant il'),
      it(E(1041), 's’ils : si devant ils'),
      it(E(1040), 'si elle : pas d’élision'),
      it(E(1048), 'si elle, encore'),
    ], chk(
      'Devant quel mot si devient-il s’ ?',
      ['devant il et ils', 'devant elle', 'devant tous les pronoms'], 0,
      "Seulement devant il et ils. EN: only before il and ils.")),
    ctl('La ponctuation', '« Il demande si tu viens ? » Que corriges-tu ?',
      ['rien', 'le si', 'le point d’interrogation'], 2,
      "Ce n'est plus une question : un point suffit. EN: it is no longer a question, so a full stop."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['si'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Six questions rapportées',
  examples: [
    ex(E(1037), 'Est-ce que tu es libre : si tu es libre.'),
    ex(E(1038), 'Les plans : une question oui ou non.'),
    ex(E(1042), 'Se demander si : une question à soi-même.'),
    ex(E(1047), 'Si elle peut : pas d’élision devant elle.'),
    ex(E(1049), 'S’il pleut : un il sans personne, et l’élision quand même.'),
    ex('fr.a1.salutations.327', 'Une question de famille, rapportée au présent.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['si'],
};

/** CHOOSE: the si of a question against the si of a condition. */
const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Deux si qui ne font pas le même travail',
  groups: [
    grp('Le si d’une question', [
      it(E(1043), 'viendras : le futur est permis'),
      it(E(1044), 'viendra : whether'),
      it('fr.b1.cafe.063', 'se demander si'),
      it(E(1046), 'une question sur l’heure'),
    ], chk(
      'Dans ces quatre phrases, si veut dire...',
      ['if, une condition', 'whether, une question'], 1,
      "Personne ne pose de condition : quelqu'un se pose une question. EN: no condition, just a question.")),
    grp('Le si d’une condition', [
      free('Si tu viens jeudi, on déjeune ensemble.', 'If you come on Thursday, we will have lunch together.', 'une condition : le présent après si'),
      free('Si elle a le temps, elle passera.', 'If she has time, she will drop by.', 'le futur, mais de l’autre côté'),
      free("S'il pleut, on reste ici.", 'If it rains, we stay here.', 'le présent après si'),
      free('Si les plans sont prêts, envoie-les.', 'If the plans are ready, send them.', 'une condition, puis un ordre'),
    ], chk(
      'Ici, le futur peut-il venir juste après si ?',
      ['Non, jamais.', 'Oui, toujours.'], 0,
      `« ${B107_REFRAME} » Pour une condition, c'est toujours vrai. EN: for a condition this still holds.`)),
    ctl('Le test', '« Je ne sais pas si elle viendra. » Cette phrase est-elle correcte ?',
      ['Non : jamais de futur après si.', 'Oui : ce si pose une question.'], 1,
      "Je ne sais pas si : c'est une question, donc le futur passe. EN: it is a question, so the future is fine."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['si'],
};

/** TRAP, stepped: six ways a reported yes/no question goes wrong. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Six questions mal rapportées',
  rule: {
    title: 'Une question rapportée n’est plus une question',
    body: "Est-ce que disparaît, le point d'interrogation aussi, le sujet reste devant le verbe, et oui ou non devient si. Jamais que. EN: no est-ce que, no question mark, no inversion, and si, never que.",
  },
  cards: [
    { promptLabel: 'est-ce que gardé', promptSound: 'Il demande est-ce que tu es libre jeudi.', fr: src(E(1037)).fr, ipa: ipaOf(E(1037)), tip: "Est-ce que part, si arrive. EN: est-ce que goes, si comes in." },
    { promptLabel: 'que pour si', promptSound: 'Elle demande que les plans sont prêts.', fr: src(E(1038)).fr, ipa: ipaOf(E(1038)), tip: "Que annonce une information. Une question oui ou non prend si. EN: que is for statements." },
    { promptLabel: 'si il', promptSound: 'Il veut savoir si il peut venir plus tôt.', fr: src(E(1039)).fr, ipa: ipaOf(E(1039)), tip: "Si il s'écrit toujours s'il. EN: si il is always s'il." },
    { promptLabel: 'une élision de trop', promptSound: "Elle demande s'elle doit apporter son passeport.", fr: src(E(1040)).fr, ipa: ipaOf(E(1040)), tip: "Pas d'élision devant elle. EN: no elision before elle." },
    { promptLabel: 'le point d’interrogation', promptSound: 'Il demande si la réunion est toujours à dix heures ?', fr: src(E(1046)).fr, ipa: ipaOf(E(1046)), tip: "Ce n'est plus une question : un point. EN: a full stop, not a question mark." },
    { promptLabel: 'l’inversion', promptSound: 'Ils demandent si peuvent-ils se garer ici.', fr: src(E(1041)).fr, ipa: ipaOf(E(1041)), tip: "Pas d'inversion : le sujet revient devant le verbe. EN: no inversion." },
  ],
  drill: [
    { promptSay: 'Il demande ... tu es libre jeudi.', opts: ['si', 'que', 'est-ce que'], correct: 0 },
    { promptSay: 'Elle demande ... elle peut payer par virement.', opts: ['s’', 'si'], correct: 1 },
    { promptSay: 'Il veut savoir ... peut venir plus tôt.', opts: ['si il', 's’il'], correct: 1 },
    { promptSay: 'Ils demandent ... peuvent se garer ici.', opts: ['s’ils', 'si ils'], correct: 0 },
    { promptSay: 'Il demande ... la réunion est à dix heures.', opts: ['que', 'si'], correct: 1 },
    { promptSay: 'Elle demande si ... sont prêts.', opts: ['les plans', 'sont les plans'], correct: 0 },
    { promptSay: 'Il demande ... elle a reçu son message.', opts: ['si', 's’'], correct: 0 },
    { promptSay: 'Je me demande ... le bureau est ouvert.', opts: ['que', 'si'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Plus de question dans la question' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse garde' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-19-piege-si'),
  say: REFRAME,
  terms: ['si'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Oui ou non', 'Une question oui ou non rapportée commence par...',
    ['que', 'si'], 1,
    "Si, jamais que. EN: si, never que."),
  ctl('L’élision', 'Laquelle de ces deux formes est correcte ?',
    ['si elle', 's’elle'], 0,
    "Si s'élide seulement devant il et ils. EN: only before il and ils."),
  ctl('Le futur', '« Il demande si tu viendras. » Le futur est-il permis ?',
    ['Non : jamais de futur après si.', 'Oui : ce si veut dire whether.', 'Seulement à l’oral.'], 1,
    "Le si d'une question n'est pas une condition. EN: the si of a question is not a condition."),
], ['si']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Elle demande si',
    opener: {
      line: "Un client te pose une question pour quelqu'un d'autre : ici tu apprends à la passer sans la reposer. EN: A client asks you a question meant for someone else: here you learn to pass it on without asking it again.",
      imageRef: 'lessons/discours-indirect/act03.jpg',
    },
    sections: [],
    milestone: "Tu rapportes une question oui ou non avec si, sans est-ce que, et tu sais que ce si accepte le futur. EN: You can report a yes-or-no question with si, and you know this si takes the future.",
    estScreens: 32, restPoints: ['a3-exemples'],
  },
  sections: [A3_ECOUTE, A3_SI, A3_CONSTRUIRE, A3_EXEMPLES, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — OÙ, QUAND, CE QUE
 *
 *  The question word stays, est-ce que goes, and qu'est-ce que turns into
 *  ce que: the same ce que b1.13 built, because nothing stands in front of
 *  it. The meet is a LISTENING, not a story, because it has to carry real
 *  question marks, which a bubble cannot (playbook 6.4).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: four questions and their relay, in pairs. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La question, puis le message',
  frSub: 'Quatre paires, deux voix',
  lines: [
    ln('fr.a1.questions.375'), ln(E(1054)),
    ln('fr.a1.questions.376'), ln(E(1055)),
    ln('fr.a1.questions.389'), ln(E(1058)),
    ln(E(1062)), ln(E(1060)),
  ],
  questions: [
    { q: 'Deuxième phrase : entends-tu est-ce que ?', opts: ['oui', 'non'], correct: 1, why: "« Il demande quand tu pars » : est-ce que a disparu. EN: est-ce que is gone." },
    { q: 'Cinquième et sixième phrases : quels mots remplacent qu’est-ce que ?', opts: ['ce que', 'que', 'quoi'], correct: 0, why: "« ce que tu fais ce soir ». EN: ce que." },
    { q: 'Dernière phrase : ce qui ou ce que ?', opts: ['ce que', 'ce qui'], correct: 1, why: "« ce qui se passe » : la chose est le sujet de se passe. EN: the thing is the subject." },
    { q: 'Les phrases rapportées montent-elles à la fin, comme une question ?', opts: ['Non, elles descendent.', 'Oui.'], correct: 0, why: "Ce sont des phrases qui informent. EN: they are statements now." },
  ],
  audio: REC('rec-b1-19-mots-ecoute'),
  say: REFRAME,
  terms: ['cequi'],
};

/** NAME: four cards. */
const A4_MOTS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-mots',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-questions',
  title: 'Le mot reste, est-ce que part',
  frSub: 'où, quand, ce que, ce qui',
  hint: 'Quatre cartes. Le mot de question survit, le reste tombe.',
  audio: REC('rec-b1-19-mots'),
  say: REFRAME,
  terms: ['cequi'],
  cards: [
    {
      head: 'Le mot de question reste', label: Cap(INTERROGATIFS_REF),
      fr: src(E(1053)).fr,
      sub: rsOf(E(1053)),
      body: "Où, quand, pourquoi, comment, combien, qui : ils restent. Est-ce que part, et le sujet revient devant le verbe. EN: the question word stays; est-ce que goes.",
    },
    {
      head: 'Qu’est-ce que devient ce que', label: 'ce que',
      fr: src(E(1058)).fr,
      sub: rsOf(E(1058)),
      body: "Qu'est-ce que tu fais devient ce que tu fais. Que tout seul ne suffit pas : il faut ce. EN: qu'est-ce que becomes ce que.",
    },
    {
      head: 'Qu’est-ce qui devient ce qui', label: 'ce qui',
      fr: src(E(1060)).fr,
      sub: rsOf(E(1060)),
      body: "Quand la chose fait l'action du verbe, c'est ce qui : ce qui se passe, ce qui ne va pas. EN: when the thing is the subject, ce qui.",
    },
    {
      head: 'Le même ce que qu’avant', label: Cap(CE_QUE_REF),
      fr: src(E(1065)).fr,
      sub: rsOf(E(1065)),
      body: `« ${B113_REFRAME} » Après demander ou savoir, il n'y a rien devant, donc ce. EN: nothing in front, so ce.`,
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'De la question au message',
  groups: [
    grp('Le mot reste', [
      it('fr.a1.questions.374', 'la question'),
      it(E(1069), 'rapportée'),
      it('fr.a1.questions.375', 'la question'),
      it(E(1054), 'rapportée'),
    ], chk(
      'Qu’est-ce qui a disparu entre la question et le message ?',
      ['le mot de question', 'le verbe', 'est-ce que'], 2,
      "Où et quand restent, est-ce que part. EN: the question word stays, est-ce que goes.")),
    grp('Ce que, ce qui', [
      it('fr.a1.questions.389', 'la question'),
      it(E(1058), 'ce que, et ce soir en plus'),
      it(E(1062), 'la question'),
      it(E(1060), 'ce qui'),
    ], chk(
      'Pourquoi ce qui dans « ce qui se passe » ?',
      ['parce que la chose est le sujet de se passe', 'parce que la phrase est au présent'], 0,
      "Rien d'autre ne fait l'action : la chose est le sujet. EN: the thing itself is the subject.")),
    ctl('L’ordre des mots', 'Laquelle est correcte ?',
      ['Il demande où habites-tu.', 'Il demande où tu habites.', 'Il demande où est-ce que tu habites.'], 1,
      "Le sujet devant le verbe, sans est-ce que. EN: subject before verb, no est-ce que."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cequi'],
};

/** Consolidation, as answers. No « EN: » tail on any back. */
const A4_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-cartes',
  layer: 'core',
  title: 'Huit questions rapportées',
  cards: [
    { front: 'she is asking where you live', back: 'elle demande où tu habites', say: src(E(1053)).fr },
    { front: 'he is asking when you are leaving', back: 'il demande quand tu pars', say: src(E(1054)).fr },
    { front: 'he wants to know why you are leaving', back: 'il veut savoir pourquoi tu pars', say: src(E(1055)).fr },
    { front: 'she is asking how you are', back: 'elle demande comment tu vas', say: src(E(1056)).fr },
    { front: 'she is asking what you are doing', back: 'elle demande ce que tu fais', say: src(E(1058)).fr },
    { front: 'she is asking what is going on', back: 'elle demande ce qui se passe', say: src(E(1060)).fr },
    { front: 'she wants to know who called', back: 'elle veut savoir qui a appelé', say: src(E(1063)).fr },
    { front: 'I do not know what he wants', back: 'je ne sais pas ce qu’il veut', say: src(E(1065)).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cequi'],
};

/** CHOOSE: what the thing DOES decides between ce qui and ce que. */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui ou ce que',
  groups: [
    grp('La chose fait l’action', [
      it(E(1060), 'la chose se passe'),
      it(E(1061), 'la chose ne va pas'),
      free("Il veut savoir ce qui t'intéresse.", 'He wants to know what interests you.', 'la chose t’intéresse'),
      free('Elle demande ce qui a changé.', 'She is asking what has changed.', 'la chose a changé'),
    ], chk(
      'Après ce qui, qu’est-ce qui vient ?',
      ['un sujet, puis un verbe', 'un verbe, tout de suite'], 1,
      "Ce qui est déjà le sujet, donc le verbe suit. EN: ce qui is the subject, so the verb follows.")),
    grp('Quelqu’un fait l’action', [
      it(E(1058), 'tu fais'),
      it(E(1059), 'tu penses'),
      it(E(1065), 'il veut'),
      free('Elle demande ce que Karim a dit.', 'She is asking what Karim said.', 'Karim a dit'),
    ], chk(
      'Après ce que, qu’est-ce qui vient ?',
      ['un sujet, puis un verbe', 'un verbe, tout de suite'], 0,
      "Quelqu'un d'autre fait l'action : il faut son nom ou son pronom. EN: someone else acts, so a subject comes first.")),
    ctl('Le test', '« Elle demande ... te fait peur. »',
      ['ce que', 'ce qui'], 1,
      "La chose te fait peur : elle est le sujet. EN: the thing frightens you, so ce qui."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cequi'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre questions restées questions',
  errors: [
    {
      wrong: "Elle demande qu'est-ce que tu fais ce soir.",
      right: src(E(1058)).fr,
      why: "Normal : c'est la question que tu as entendue. Rapportée, elle perd est-ce que : ce que tu fais. EN: reported, qu'est-ce que shrinks to ce que.",
    },
    {
      wrong: 'Il demande quand est-ce que tu pars.',
      right: src(E(1054)).fr,
      why: "Tu l'entendras à l'oral, c'est vrai. À l'écrit, est-ce que part après un mot de question. EN: you will hear it spoken; in writing, drop it.",
    },
    {
      wrong: 'Elle demande où habites-tu.',
      right: src(E(1053)).fr,
      why: "L'inversion fait une vraie question, et tu ne demandes rien. Le sujet revient devant le verbe. EN: inversion makes a real question; you are only reporting.",
    },
    {
      wrong: 'Il demande ce que ne va pas.',
      right: src(E(1061)).fr,
      why: "Tu penses à what, donc ce que. Mais la chose est le sujet de ne va pas : ce qui. EN: what is the subject here, so ce qui.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['cequi'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Est-ce que', 'Après où, quand ou pourquoi, dans une phrase rapportée, est-ce que...',
    ['disparaît', 'reste'], 0,
    "Le mot de question suffit. EN: the question word is enough."),
  ctl('Qu’est-ce que', '« Qu’est-ce que tu veux ? », rapporté : il demande...',
    ['qu’est-ce que tu veux', 'que tu veux', 'ce que tu veux'], 2,
    "Ce que, avec ce devant. EN: ce que, with ce."),
  ctl('Ce qui', '« Qu’est-ce qui se passe ? », rapporté : elle demande...',
    ['ce que se passe', 'ce qui se passe'], 1,
    "La chose se passe : ce qui. EN: the thing is the subject."),
], ['cequi']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Où, quand, ce que',
    opener: {
      line: "Où, quand, pourquoi : ces mots passent le message, et les autres restent derrière. EN: Where, when, why: these words make it through with the message, and the rest stays behind.",
      imageRef: 'lessons/discours-indirect/act04.jpg',
    },
    sections: [],
    milestone: "Tu rapportes une question avec son mot, et tu choisis entre ce que et ce qui. EN: You can report a question with its question word, and choose between ce que and ce qui.",
    estScreens: 34, restPoints: ['a4-cartes'],
  },
  sections: [A4_ECOUTE, A4_MOTS, A4_CONSTRUIRE, A4_CARTES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — DIS-LUI DE RAPPELER
 *
 *  The reported order: de + infinitif. The subjunctive way of reporting an
 *  order (« il veut que tu viennes ») belongs to b1.14-16 and appears
 *  nowhere, in the rows, the notes or the wrong answers.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the plumber gives two orders; you pass them on. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Les consignes du plombier',
  frSub: 'Deux ordres à passer',
  setting: "Midi, dans la petite cuisine de l'agence. Le plombier range ses outils. Sophie est en réunion à côté.",
  bubbles: [
    { from: 'narrator', fr: 'Le plombier sort de la cuisine, sa boîte à outils à la main.', en: 'The plumber comes out of the kitchen, toolbox in hand.' },
    { from: 'coach', fr: src(E(1076)).fr, en: src(E(1076)).en, warn: 'un ordre, à l’impératif' },
    { from: 'coach', fr: 'Et dites à votre collègue de ne pas toucher au robinet.', en: 'And tell your colleague not to touch the tap.', warn: 'dites à quelqu’un de : il fait déjà ce que tu vas faire' },
    { from: 'narrator', fr: 'Sophie sort de sa réunion avec sa tasse vide.', en: 'Sophie comes out of her meeting with her empty mug.' },
    { from: 'user', fr: src(E(1075)).fr, en: src(E(1075)).en, warn: 'l’impératif devient de ne pas + infinitif' },
    { from: 'user', fr: 'Il te dit de ne pas toucher au robinet.', en: 'He is telling you not to touch the tap.', warn: 'votre collègue devient te' },
    { from: 'coach', fr: "D'accord. Je fais mon café en face, alors.", en: 'Fine. I will get my coffee across the street, then.' },
  ],
  closing: { fr: 'Un ordre passe avec de, jamais avec que.', en: 'An order is passed on with de, never with que.' },
  audio: REC('rec-b1-19-plombier'),
  say: REFRAME,
  terms: ['ordre'],
};

const A5_ORDRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-ordre',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-questions',
  title: 'Un ordre, c’est de',
  frSub: 'de + infinitif',
  hint: 'Quatre cartes. Cherche le de, puis l’infinitif.',
  audio: REC('rec-b1-19-ordre'),
  say: REFRAME,
  terms: ['ordre'],
  cards: [
    {
      head: 'L’impératif devient de + infinitif', label: 'dire de',
      fr: src(E(1073)).fr,
      sub: rsOf(E(1073)),
      body: "Rappelle-moi devient il te demande de le rappeler. Le verbe passe à l'infinitif, avec de devant. EN: the imperative becomes de plus the infinitive.",
    },
    {
      head: 'Ne pas passe devant', label: 'la négation',
      fr: src(E(1075)).fr,
      sub: rsOf(E(1075)),
      body: "N'utilisez pas devient de ne pas utiliser. Ne pas reste en bloc, devant l'infinitif. EN: ne pas stays together, before the infinitive.",
    },
    {
      head: 'Le pronom suit le point de vue', label: Cap(INDIRECT_OBJ_REF),
      fr: src(E(1081)).fr,
      sub: rsOf(E(1081)),
      body: `Envoyez-moi le contrat devient de lui envoyer le contrat. « ${A224_REFRAME_FR} » EN: the pronoun moves to the new point of view.`,
    },
    {
      head: 'À pour la personne, de pour l’action', label: 'à quelqu’un de',
      fr: src(E(1078)).fr,
      sub: rsOf(E(1078)),
      body: "La personne qui reçoit l'ordre vient avec à, l'action avec de : conseiller à quelqu'un de se reposer. EN: à for the person, de for the action.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'De l’ordre au message',
  groups: [
    grp('L’ordre, puis le message', [
      it(E(1072), 'l’ordre'),
      it(E(1073), 'rapporté'),
      it(E(1076), 'l’ordre, à la forme négative'),
      it(E(1075), 'rapporté : de ne pas'),
    ], chk(
      'Quel mot introduit l’ordre rapporté ?',
      ['que', 'si', 'de'], 2,
      "De, puis l'infinitif. EN: de, then the infinitive.")),
    grp('Le petit pronom devant l’infinitif', [
      it(E(1081), 'lui envoyer'),
      it(E(1079), 'ne pas m’inquiéter'),
      it(E(1078), 'se reposer'),
      it(E(1074), 'd’apporter : de devant une voyelle'),
    ], chk(
      'Où se place le petit pronom ?',
      ['après l’infinitif', 'devant l’infinitif'], 1,
      "Devant le verbe qu'il complète, comme toujours. EN: in front of the verb it belongs to."),
    ),
    ctl('La négation', '« Ne fermez pas la porte. » Rapporté : elle nous demande...',
      ['de ne pas fermer la porte', 'de fermer pas la porte', 'de ne fermer pas la porte'], 0,
      "Ne pas, en bloc, devant fermer. EN: ne pas together, before fermer."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ordre'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  sheetId: 'sheet-questions',
  title: 'Six ordres passés',
  examples: [
    ex(E(1074), 'Apporte les plans : d’apporter les plans.'),
    ex(E(1077), 'Fermez la porte : de fermer la porte.'),
    ex(E(1083), 'Arrivez à l’heure : d’arriver à l’heure.'),
    ex(E(1080), 'Un ordre qui contient déjà un ordre : dis à Sophie de...'),
    ex(E(1085), 'La construction, avec demander.'),
    ex(E(1086), 'La même, avec dire.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ordre'],
};

/** CHOOSE: an information takes que, a request takes de. Same verb, two
 *  meanings. */
const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Dire que ou dire de',
  groups: [
    grp('Une information', [
      it(E(1087), 'il vient : un fait'),
      it(E(1001), 'il sera en retard'),
      it(E(1012), 'tu peux l’appeler : une permission'),
      free("Elle dit qu'elle ferme la porte.", 'She says she is closing the door.', 'elle le fait, elle'),
    ], chk(
      'Dans ces phrases, est-ce qu’on te demande de faire quelque chose ?',
      ['Oui, chaque fois.', 'Non, on te donne une information.'], 1,
      "Que annonce un fait. Personne ne te donne d'ordre. EN: que announces a fact.")),
    grp('Une demande', [
      free('Il dit de venir ce soir.', 'He says to come tonight.', 'venir : c’est toi qui dois le faire'),
      it(E(1077), 'fermer : c’est vous'),
      it(E(1075), 'l’évier : personne ne doit l’utiliser'),
      it(E(1074), 'apporter : c’est toi'),
    ], chk(
      'Qui doit faire l’action de l’infinitif ?',
      ['la personne qui écoute', 'la personne qui a parlé'], 0,
      "De + infinitif donne l'action à la personne qui écoute. EN: the listener has to do it.")),
    ctl('Deux sens', '« Il dit qu’il vient » et « il dit de venir » : même sens ?',
      ['Oui.', 'Non : le premier informe, le second demande.'], 1,
      "Il vient, lui ; ou tu viens, toi. EN: he is coming, or you should come."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ordre', 'que'],
};

/** TRAP, stepped: six reported orders gone wrong. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Six ordres mal passés',
  rule: {
    title: 'Un ordre ne passe pas par que',
    body: "Pour rapporter un ordre, tu mets de et l'infinitif. Avec que et un verbe conjugué, l'ordre devient une simple information. EN: a reported order takes de and the infinitive; with que it turns into a statement.",
  },
  cards: [
    { promptLabel: 'l’impératif gardé', promptSound: 'Il te demande rappelle-moi avant midi.', fr: src(E(1073)).fr, ipa: ipaOf(E(1073)), tip: "L'impératif ne passe pas : de le rappeler. EN: the imperative becomes de plus infinitive." },
    { promptLabel: 'que pour de', promptSound: "Le plombier dit qu'on n'utilise pas l'évier.", fr: src(E(1075)).fr, ipa: ipaOf(E(1075)), tip: "Avec que, ça devient un fait : on ne l'utilise pas. Pour un ordre, de ne pas. EN: with que it becomes a fact." },
    { promptLabel: 'ne pas coupé', promptSound: "Il me dit de ne m'inquiéter pas.", fr: src(E(1079)).fr, ipa: ipaOf(E(1079)), tip: "Ne pas reste en bloc devant l'infinitif. EN: ne pas stays together." },
    { promptLabel: 'le moi de Karim', promptSound: "Il te demande de m'envoyer le contrat.", fr: src(E(1081)).fr, ipa: ipaOf(E(1081)), tip: "Le moi de Karim devient lui dans ta bouche. EN: Karim's moi becomes lui." },
    { promptLabel: 'le à oublié', promptSound: 'Le médecin le conseille de se reposer.', fr: src(E(1078)).fr, ipa: ipaOf(E(1078)), tip: "Conseiller à quelqu'un : lui, pas le. EN: conseiller takes à, so lui." },
    { promptLabel: 'sans de', promptSound: 'Elle nous demande fermer la porte.', fr: src(E(1077)).fr, ipa: ipaOf(E(1077)), tip: "Le de est obligatoire entre demander et l'infinitif. EN: de is required." },
  ],
  drill: [
    { promptSay: 'Il te demande ... le rappeler.', opts: ['de', 'que'], correct: 0 },
    { promptSay: 'Le plombier dit ... utiliser l’évier.', opts: ['de ne pas', 'ne pas de'], correct: 0 },
    { promptSay: 'Elle te dit ... les plans.', opts: ['apporter', 'd’apporter'], correct: 1 },
    { promptSay: 'Le médecin ... conseille de se reposer.', opts: ['le', 'lui'], correct: 1 },
    { promptSay: 'Il me dit de ne pas ... .', opts: ['m’inquiéter', 't’inquiéter'], correct: 0 },
    { promptSay: 'Elle nous demande ... fermer la porte.', opts: ['de', 'à'], correct: 0 },
    { promptSay: 'Il te demande de ... envoyer le contrat.', opts: ['m’', 'lui'], correct: 1 },
    { promptSay: 'Il dit ... ce soir.', opts: ['qu’il vient', 'de il vient'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'De, puis l’infinitif' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-19-piege-ordre'),
  say: REFRAME,
  terms: ['ordre'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('L’ordre', 'Un ordre rapporté prend...',
    ['que + un verbe conjugué', 'de + l’infinitif'], 1,
    "De, puis l'infinitif. EN: de plus the infinitive."),
  ctl('La négation', '« Ne partez pas. » Rapporté : il nous dit...',
    ['de partir pas', 'de ne partir pas', 'de ne pas partir'], 2,
    "Ne pas en bloc, devant partir. EN: ne pas together, before partir."),
  ctl('Deux sens', '« Il dit de venir. » Qui doit venir ?',
    ['la personne qui écoute', 'lui'], 0,
    "De + infinitif donne l'action à celui qui écoute. EN: the listener."),
], ['ordre']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Dis-lui de rappeler',
    opener: {
      line: "Rappelle-moi, n'utilisez pas l'évier : ici tu passes des ordres sans les donner toi-même. EN: Call me back, do not use the sink: here you pass orders on without giving them yourself.",
      imageRef: 'lessons/discours-indirect/act05.jpg',
    },
    sections: [],
    milestone: "Tu rapportes une demande avec de et l'infinitif, même à la forme négative. EN: You can report a request with de and the infinitive, negative ones included.",
    estScreens: 32, restPoints: ['a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_ORDRE, A5_CONSTRUIRE, A5_EXEMPLES, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — ELLE A DIT QU'ELLE ÉTAIT
 *
 *  The first act where time moves. The whole act hangs on the REPORTING
 *  verb: « dit » moves nothing, « a dit » pushes the present back to the
 *  imparfait. The imparfait itself does not move, and a general truth may
 *  stay present (the seed's own coach sentence).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: yesterday's messages, told today. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Les messages d’hier',
  frSub: 'Julien raconte, le lendemain',
  lines: [
    ln(E(1089)), ln(E(1091)), ln(E(1092)), ln(E(1093)),
    ln(E(1094)), ln(E(1095)), ln(E(1096)), ln(E(1099)),
  ],
  questions: [
    { q: 'Première phrase : de qui Karim parlait-il ?', opts: ['de lui-même', 'de quelqu’un d’autre'], correct: 0, why: "« il était malade » : Karim a dit je suis malade. EN: Karim said he himself was ill." },
    { q: 'Deuxième phrase : où travaillait-elle ?', opts: ['au bureau', 'chez elle'], correct: 1, why: "« elle travaillait chez elle ». EN: from home." },
    { q: 'Quatrième phrase : où habite-t-elle ?', opts: ['à Genève', 'à Lausanne'], correct: 0, why: "« elle habitait à Genève ». EN: in Geneva." },
    { q: 'Sixième phrase : est-ce qu’il va venir ?', opts: ['Oui', 'Non'], correct: 1, why: "« il ne pouvait pas venir ». EN: he could not come." },
    { q: 'Dernière phrase : où faisait-il froid ?', opts: ['à Montréal', 'à Québec'], correct: 1, why: "« il faisait très froid à Québec ». EN: in Québec." },
  ],
  audio: REC('rec-b1-19-hier-ecoute'),
  say: REFRAME,
  terms: ['decalage'],
};

const A6_RECUL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-recul',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-decalage',
  title: 'Quand le message date d’hier',
  frSub: 'le présent devient imparfait',
  hint: 'Quatre cartes. Regarde d’abord le verbe qui rapporte.',
  audio: REC('rec-b1-19-recul'),
  say: REFRAME,
  terms: ['decalage'],
  cards: [
    {
      head: 'Il dit, ou il a dit', label: 'le verbe qui rapporte',
      fr: src(E(1105)).fr,
      sub: rsOf(E(1105)),
      body: "Avec il dit, rien ne bouge. Tout dépend du temps du verbe qui rapporte. EN: it all depends on the tense of the reporting verb.",
    },
    {
      head: 'Au passé, le présent recule', label: 'a dit',
      fr: src(E(1104)).fr,
      sub: rsOf(E(1104)),
      body: "Ils ont dit « la route est fermée ». Le message date d'avant, alors est devient était. EN: after a past verb, the present steps back to the imparfait.",
    },
    {
      head: 'L’imparfait ne bouge pas', label: Cap(IMP_USE_REF),
      fr: src(E(1099)).fr,
      sub: rsOf(E(1099)),
      body: `« ${B102_REFRAME} » Il faisait froid reste il faisait froid : il n'y a pas plus loin. EN: the imparfait stays where it is.`,
    },
    {
      head: 'Une vérité peut rester au présent', label: 'toujours vrai',
      fr: src(E(1101)).fr,
      sub: rsOf(E(1101)),
      body: "Ce qui est vrai pour tout le monde et toujours peut garder le présent. L'eau bout encore, aujourd'hui. EN: a general truth may stay in the present.",
    },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Fais reculer le présent',
  groups: [
    grp('Des informations', [
      it(E(1089), 'je suis malade'),
      it(E(1091), 'je travaille chez moi'),
      it(E(1094), 'nous avons faim'),
      it(E(1095), 'je ne peux pas venir'),
    ], chk(
      'Quel temps ont tous les verbes après que ?',
      ['le présent', 'l’imparfait', 'le passé composé'], 1,
      "Le verbe qui rapporte est au passé, donc l'imparfait. EN: past reporting verb, so imparfait.")),
    grp('Des questions', [
      it(E(1096), 'la salle est libre ?'),
      it(E(1097), 'où habites-tu ?'),
      it('fr.a2.marche.130', 'les œufs viennent d’une ferme ?'),
      it(E(1102), 'une information, pour comparer'),
    ], chk(
      'Après a demandé si, le présent de la question...',
      ['passe à l’imparfait', 'reste au présent'], 0,
      "Une question rapportée suit la même règle. EN: reported questions shift too.")),
    ctl('Le déclencheur', 'Qu’est-ce qui fait reculer le temps ?',
      ['la longueur du message', 'le mot que', 'le verbe qui rapporte, au passé'], 2,
      "Seulement le temps du verbe qui rapporte. EN: only the tense of the reporting verb."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decalage'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  sheetId: 'sheet-decalage',
  title: 'Ce qui recule, et ce qui reste',
  examples: [
    ex(E(1093), 'J’habite à Genève : elle habitait à Genève.'),
    ex(E(1092), 'Le train est en retard : il était en retard.'),
    ex(E(1099), 'Il faisait froid : l’imparfait ne bouge pas.'),
    ex(E(1101), 'Une vérité générale peut rester au présent.'),
    ex('fr.b1.sports-et-loisirs.082', 'Un conseil vrai pour toujours : compte reste au présent.'),
    ex('fr.a2.cafe.047', 'Où se trouvaient : l’imparfait, et un nom après le verbe.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decalage'],
};

/** CHOOSE: the reporting verb's tense decides, and nothing else. */
const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Il dit ou il a dit',
  groups: [
    grp('Rien ne bouge', [
      it(E(1105), 'la route est fermée'),
      it(E(1003), 'son train part'),
      it(E(1010), 'la réunion est annulée'),
      it(E(1008), 'elle travaille chez elle'),
    ], chk(
      'Ici, le verbe qui rapporte est...',
      ['au présent', 'au passé'], 0,
      "Dit, au présent : le message est frais. EN: dit is present, the message is fresh.")),
    grp('Le présent recule', [
      it(E(1104), 'la route était fermée'),
      it(E(1089), 'il était malade'),
      it(E(1091), 'elle travaillait chez elle'),
      it(E(1103), 'elle cherchait un appartement'),
    ], chk(
      'Et ici, le verbe qui rapporte est...',
      ['au présent', 'au passé'], 1,
      "A dit, ont dit : au passé, donc l'imparfait. EN: past, so imparfait.")),
    ctl('Le test', 'Hier, Karim a dit « je suis fatigué ». Tu l’écris aujourd’hui. Que choisis-tu ?',
      ['Il a dit qu’il est fatigué.', 'Il a dit qu’il était fatigué.'], 1,
      "À l'écrit, le décalage. EN: in writing, shift the tense."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decalage'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris les six messages d’hier',
  frSub: 'Six phrases à l’imparfait',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['decalage'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre temps qui n’ont pas reculé',
  errors: [
    {
      wrong: "Karim a dit qu'il est malade.",
      right: src(E(1089)).fr,
      why: "Tu l'entendras à l'oral, si Karim est encore malade. À l'écrit, après a dit, le présent recule : était. EN: in writing, shift after a past verb.",
    },
    {
      wrong: "Il a demandé où tu habites.",
      right: src(E(1097)).fr,
      why: "Normal : c'est une question, et tu la gardes telle quelle. Mais elle suit la même règle : habitais. EN: reported questions shift too.",
    },
    {
      wrong: "Elle a dit qu'il avait fait très froid à Québec.",
      right: src(E(1099)).fr,
      why: "Elle avait dit « il faisait froid ». Tu as voulu reculer l'imparfait, mais il ne bouge pas. EN: the imparfait does not move.",
    },
    {
      wrong: "Ils ont dit qu'ils ont faim.",
      right: src(E(1094)).fr,
      why: "Deux fois le même temps, ça semble logique. Mais après ont dit, le présent passe à l'imparfait : avaient faim. EN: after ont dit, present becomes imparfait.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decalage'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le déclencheur', 'Le temps recule quand le verbe qui rapporte est...',
    ['au passé', 'au présent'], 0,
    "Il a dit, il a demandé : au passé. EN: in the past."),
  ctl('Le présent', '« Je travaille chez moi », rapporté avec a dit :',
    ['elle travaille', 'elle a travaillé', 'elle travaillait'], 2,
    "Le présent devient imparfait. EN: present becomes imparfait."),
  ctl('L’imparfait', '« Il pleuvait », rapporté avec a dit :',
    ['il avait plu', 'il pleuvait'], 1,
    "L'imparfait ne bouge pas. EN: the imparfait stays."),
], ['decalage']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Elle a dit qu’elle était',
    opener: {
      line: "Le message date d'hier, et il a vieilli d'un jour : ici tu apprends à le faire reculer dans le temps. EN: The message is from yesterday and has aged a day: here you learn to move it back in time.",
      imageRef: 'lessons/discours-indirect/act06.jpg',
    },
    sections: [],
    milestone: "Après il a dit, tu mets le présent à l'imparfait, et tu laisses l'imparfait tranquille. EN: After il a dit you put the present into the imparfait and leave the imparfait alone.",
    estScreens: 38, restPoints: ['a6-exemples', 'a6-dictee'],
  },
  sections: [A6_ECOUTE, A6_RECUL, A6_CONSTRUIRE, A6_EXEMPLES, A6_CHOISIR, A6_DICTEE, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — IL AVAIT PERDU SON TÉLÉPHONE
 *
 *  THE PLUS-QUE-PARFAIT, PRODUCED FOR THE FIRST TIME IN B1. b1.10 showed
 *  si + plus-que-parfait for recognition only. Here it is BUILT, and built
 *  only as the reported form of a passé composé: nothing new is taught but
 *  the move of the auxiliary into the imparfait. Both halves are quoted from
 *  the lessons that own them (a2.05, a2.21, b1.01).
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: Julien's bad Friday, told on Monday. */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le vendredi de Julien',
  frSub: 'Ce qui s’était passé avant',
  setting: "Lundi matin, à l'agence. Vendredi, Julien est arrivé à onze heures. Sophie n'était pas là, et elle veut comprendre.",
  bubbles: [
    { from: 'coach', fr: "Raconte-moi ce que Julien t'a dit vendredi.", en: 'Tell me what Julien told you on Friday.' },
    { from: 'narrator', fr: 'Vendredi, Julien t’avait dit : « J’ai perdu mon téléphone et j’ai raté mon train. »', en: 'On Friday Julien had told you: I lost my phone and I missed my train.' },
    { from: 'user', fr: src(E(1109)).fr, en: src(E(1109)).en, warn: 'ai perdu devient avait perdu' },
    { from: 'user', fr: "Il a expliqué qu'il avait raté son train.", en: 'He explained that he had missed his train.', warn: 'ai raté devient avait raté' },
    { from: 'user', fr: "Il a dit qu'il était venu à pied.", en: 'He said he had come on foot.', warn: 'suis venu devient était venu' },
    { from: 'coach', fr: "Pauvre Julien. Il n'avait vraiment pas de chance ce jour-là.", en: 'Poor Julien. He really had no luck that day.' },
  ],
  closing: { fr: "Ce qui s'était déjà passé, tu le dis avec avait ou était.", en: 'What had already happened, you say with avait or était.' },
  audio: REC('rec-b1-19-vendredi'),
  say: REFRAME,
  terms: ['pqp'],
};

const A7_PQP: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-pqp',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-decalage',
  title: 'Le plus-que-parfait',
  frSub: 'un passé composé, un cran plus loin',
  hint: 'Quatre cartes. Un seul mot change.',
  audio: REC('rec-b1-19-pqp'),
  say: REFRAME,
  terms: ['pqp'],
  cards: [
    {
      head: 'Le passé composé recule', label: 'avait fait',
      fr: src(E(1109)).fr,
      sub: rsOf(E(1109)),
      body: "J'ai perdu devient il avait perdu. Seul l'auxiliaire change : il passe à l'imparfait. EN: only the auxiliary changes, to the imparfait.",
    },
    {
      head: 'Avoir devient avait', label: Cap(PC_AVOIR_REF),
      fr: src(E(1119)).fr,
      sub: rsOf(E(1119)),
      body: `« ${A205_REFRAME} » En français : « ${A205_REFRAME_FR} » Ici, le premier mot est avait. EN: avoir in the imparfait, then the participle.`,
    },
    {
      head: 'Être devient était', label: Cap(PC_ETRE_REF),
      fr: src(E(1112)).fr,
      sub: rsOf(E(1112)),
      body: `« ${A221_REFRAME} » En français : « ${A221_REFRAME_FR} » Arrivée garde son e. EN: être in the imparfait, and the agreement stays.`,
    },
    {
      head: 'Se reste devant', label: 'pronominal',
      fr: src(E(1114)).fr,
      sub: rsOf(E(1114)),
      body: "Je me suis trompée devient elle s'était trompée. Le petit mot se garde sa place, devant l'auxiliaire. EN: pronominal verbs take s'était.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Recule l’auxiliaire',
  groups: [
    grp('Avec avoir', [
      it(E(1108), 'j’ai perdu'),
      it(E(1109), 'il avait perdu'),
      it(E(1118), 'nous avons visité'),
      it(E(1119), 'ils avaient visité'),
    ], chk(
      'Qu’est-ce qui a changé entre j’ai perdu et il avait perdu ?',
      ['le participe', 'l’auxiliaire', 'les deux'], 1,
      "Perdu ne bouge pas ; ai devient avait. EN: only the auxiliary moved.")),
    grp('Avec être', [
      it(E(1111), 'était parti'),
      it(E(1112), 'était arrivée'),
      it(E(1113), 'étaient partis'),
      it(E(1114), 's’était trompée'),
    ], chk(
      'Pourquoi arrivée, avec un e ?',
      ['parce que le sujet est elle', 'parce que c’est le plus-que-parfait'], 0,
      "Après être, le participe suit le sujet, comme au passé composé. EN: after être the participle agrees."),
    ),
    ctl('Le test', '« Nous sommes rentrés tard », rapporté avec ils ont dit :',
      ['qu’ils avaient rentré tard', 'qu’ils étaient rentrés tard', 'qu’ils sont rentrés tard'], 1,
      "Rentrer prend être : étaient rentrés. EN: rentrer takes être."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pqp'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Six passés composés, un cran plus loin',
  examples: [
    ex(E(1110), 'J’ai raté mon train : elle avait raté son train.'),
    ex(E(1115), 'Tu as reçu mon courriel ? : si j’avais reçu.'),
    ex(E(1116), 'Qu’est-ce que tu as fait ? : ce que tu avais fait.'),
    ex(E(1120), 'J’ai oublié la réunion : il avait oublié.'),
    ex(E(1121), 'Les ouvriers ont fini : ils avaient fini.'),
    ex(E(1122), 'Je n’ai pas compris : ne et pas autour de avait.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pqp'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-decalage',
  title: 'Le plus-que-parfait en quatre points',
  points: [
    "Avoir ou être : le même choix qu'au passé composé. EN: same auxiliary as the passé composé.",
    "L'auxiliaire passe à l'imparfait : avait, était, s'était. EN: the auxiliary goes into the imparfait.",
    "Le participe ne change pas, et il garde son accord après être. EN: the participle stays, with its agreement.",
    "La négation entoure l'auxiliaire : il n'avait pas compris. EN: the negation goes around the auxiliary.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pqp'],
};

/** CHOOSE: was it the case (imparfait) or had it happened (pqp)? The
 *  learner reads back to the ORIGINAL tense to decide. */
const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Imparfait ou plus-que-parfait',
  groups: [
    grp('C’était vrai à ce moment-là', [
      it(E(1089), 'je suis malade'),
      it(E(1093), 'j’habite à Genève'),
      it(E(1092), 'le train est en retard'),
      it(E(1102), 'j’aime mon travail'),
    ], chk(
      'Au départ, ces phrases étaient...',
      ['au présent', 'au passé composé'], 0,
      "Un présent rapporté donne l'imparfait. EN: a reported present gives the imparfait.")),
    grp('C’était déjà arrivé', [
      it(E(1109), 'j’ai perdu'),
      it(E(1110), 'j’ai raté'),
      it(E(1113), 'nous sommes partis'),
      it(E(1120), 'j’ai oublié'),
    ], chk(
      'Au départ, ces phrases étaient...',
      ['au présent', 'au passé composé'], 1,
      "Un passé composé rapporté donne le plus-que-parfait. EN: a reported passé composé gives the pluperfect.")),
    ctl('Le test', '« Je suis parti à six heures », rapporté avec il a dit :',
      ['qu’il partait à six heures', 'qu’il était parti à six heures'], 1,
      "Au départ, un passé composé : était parti. EN: it started as a passé composé."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pqp', 'decalage'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Six plus-que-parfaits manqués',
  rule: {
    title: 'Deux mots, et seul le premier bouge',
    body: "Le plus-que-parfait garde les deux mots du passé composé. Le premier passe à l'imparfait : avait, était. Le deuxième ne bouge pas. EN: keep both words; only the first moves.",
  },
  cards: [
    { promptLabel: 'le passé composé gardé', promptSound: "Il a dit qu'il a perdu son téléphone.", fr: src(E(1109)).fr, ipa: ipaOf(E(1109)), tip: "Après a dit, a perdu recule : avait perdu. EN: a perdu becomes avait perdu." },
    { promptLabel: 'un imparfait à la place', promptSound: "Elle a expliqué qu'elle ratait son train.", fr: src(E(1110)).fr, ipa: ipaOf(E(1110)), tip: "Elle l'a raté une fois, avant de parler : avait raté. EN: a finished event, so avait raté." },
    { promptLabel: 'avoir pour être', promptSound: "Il a dit qu'il avait parti à six heures.", fr: src(E(1111)).fr, ipa: ipaOf(E(1111)), tip: "Partir prend être : était parti. EN: partir takes être." },
    { promptLabel: 'l’accord oublié', promptSound: "Elle a dit qu'elle était arrivé en retard.", fr: src(E(1112)).fr, ipa: ipaOf(E(1112)), tip: "Elle, donc arrivée. EN: the agreement stays." },
    { promptLabel: 'le se oublié', promptSound: "Elle a dit qu'elle était trompée de salle.", fr: src(E(1114)).fr, ipa: ipaOf(E(1114)), tip: "Se tromper garde son se : s'était trompée. EN: keep the se." },
    { promptLabel: 'la négation déplacée', promptSound: "Il a dit qu'il avait ne pas compris la question.", fr: src(E(1122)).fr, ipa: ipaOf(E(1122)), tip: "Ne et pas entourent avait. EN: ne and pas go around avait." },
  ],
  drill: [
    { promptSay: "Ils ont dit qu'ils ... visité le chantier.", opts: ['avaient', 'étaient'], correct: 0 },
    { promptSay: "Il a dit qu'il ... perdu son téléphone.", opts: ['a', 'avait'], correct: 1 },
    { promptSay: "Il a demandé si j'... reçu son courriel.", opts: ['avais', 'étais'], correct: 0 },
    { promptSay: "Elle a dit qu'elle ... partie tôt.", opts: ['avait', 'était'], correct: 1 },
    { promptSay: "Il a dit qu'il ... pas compris.", opts: ['n’avait', 'avait ne'], correct: 0 },
    { promptSay: "Elle a dit qu'elle était ... en retard.", opts: ['arrivé', 'arrivée'], correct: 1 },
    { promptSay: "Ils ont dit qu'ils étaient déjà ... .", opts: ['partis', 'parti'], correct: 0 },
    { promptSay: "Elle a dit qu'elle ... trompée de salle.", opts: ['était', 's’était'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Seul le premier mot bouge' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-19-piege-pqp'),
  say: REFRAME,
  terms: ['pqp'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La forme', 'Le plus-que-parfait, c’est...',
    ['l’imparfait de avoir ou être, puis le participe', 'le futur de avoir, puis le participe'], 0,
    "Avait fini, était parti. EN: avait fini, était parti."),
  ctl('Le choix', '« J’ai fini », rapporté avec il a dit :',
    ['qu’il finissait', 'qu’il avait fini', 'qu’il a fini'], 1,
    "Un passé composé rapporté devient plus-que-parfait. EN: passé composé becomes pluperfect."),
  ctl('L’accord', '« Je suis partie », dit par Sophie, rapporté :',
    ['qu’elle était partie', 'qu’elle avait partie'], 0,
    "Être, et partie avec un e. EN: être, and the e stays."),
], ['pqp']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Il avait perdu son téléphone',
    opener: {
      line: "Ce qui s'était passé avant qu'on te parle : ici tu construis ton premier plus-que-parfait. EN: What had happened before anyone told you: here you build your first pluperfect.",
      imageRef: 'lessons/discours-indirect/act07.jpg',
    },
    sections: [],
    milestone: "Tu fais passer un passé composé au plus-que-parfait, avec avait ou était et le bon accord. EN: You can turn a passé composé into a pluperfect, with avait or était and the right agreement.",
    estScreens: 38, restPoints: ['a7-exemples', 'a7-choisir'],
  },
  sections: [A7_HISTOIRE, A7_PQP, A7_CONSTRUIRE, A7_EXEMPLES, A7_FOCUS, A7_CHOISIR, A7_PIEGE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — IL RAPPELLERAIT
 *
 *  The future seen from the past. b1.08's reframe already says it: the
 *  future says what will be, the conditional says what would be. Here the
 *  conditional is not a hypothesis at all; it is the future, told later.
 *  The act closes the shift with the whole table on one screen.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Des promesses de la semaine dernière',
  frSub: 'Le futur, raconté après',
  lines: [
    ln(E(1128)), ln(E(1129)), ln(E(1130)), ln(E(1131)),
    ln(E(1132)), ln(E(1133)), ln(E(1135)), ln(E(1137)),
  ],
  questions: [
    { q: 'Première phrase : qui devait rappeler ?', opts: ['lui', 'nous'], correct: 0, why: "« il nous rappellerait » : il rappelle, nous recevons l'appel. EN: he calls us." },
    { q: 'Troisième phrase : quand le chantier devait-il finir ?', opts: ['en juin', 'en mai'], correct: 1, why: "« finirait en mai ». EN: in May." },
    { q: 'Sixième phrase : avait-elle déjà déménagé ?', opts: ['Oui', 'Non, elle allait le faire'], correct: 1, why: "« elle allait déménager » : c'était pour plus tard. EN: it was still to come." },
    { q: 'Septième phrase : était-il encore là ?', opts: ['Non, il venait de partir', 'Oui'], correct: 0, why: "« il venait de partir » : juste avant. EN: he had just left." },
    { q: 'Dernière phrase : quel jour ce serait prêt ?', opts: ['jeudi', 'vendredi'], correct: 1, why: "« prêt vendredi ». EN: Friday." },
  ],
  audio: REC('rec-b1-19-futur-ecoute'),
  say: REFRAME,
  terms: ['decalage'],
};

const A8_FUTUR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-futur',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-decalage',
  title: 'Le futur, vu d’après',
  frSub: 'le futur devient conditionnel',
  hint: 'Quatre cartes. Le radical reste, la fin change.',
  audio: REC('rec-b1-19-futur'),
  say: REFRAME,
  terms: ['decalage'],
  cards: [
    {
      head: 'Le futur devient conditionnel', label: Cap(CONDITIONNEL_REF),
      fr: src(E(1128)).fr,
      sub: rsOf(E(1128)),
      body: `« ${B108_REFRAME} » Rapporté au passé, rappellera devient rappellerait. EN: the future becomes the conditional.`,
    },
    {
      head: 'Même radical, autre fin', label: 'viendrait',
      fr: src(E(1142)).fr,
      sub: rsOf(E(1142)),
      body: "Viendr- reste, et les fins de l'imparfait arrivent : -ais, -ait, -aient. EN: same stem, imparfait endings.",
    },
    {
      head: 'Va devient allait', label: 'aller + infinitif',
      fr: src(E(1133)).fr,
      sub: rsOf(E(1133)),
      body: "Je vais déménager devient elle allait déménager. Aller passe à l'imparfait, l'infinitif ne bouge pas. EN: va becomes allait.",
    },
    {
      head: 'Le conditionnel ne bouge pas', label: 'serait',
      fr: src(E(1140)).fr,
      sub: rsOf(E(1140)),
      body: "Ce serait une bonne idée reste ce serait. Comme l'imparfait, il ne peut pas reculer plus. EN: the conditional stays.",
    },
  ],
};

const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-decalage',
  title: 'Tout le décalage sur un écran',
  cols: ['On a dit', 'Tu rapportes, après a dit'],
  rows: [
    { cells: ['présent', 'imparfait'], say: src(E(1089)).fr,
      detail: { title: 'Le présent', body: "Je suis malade devient il était malade. EN: present to imparfait.", say: src(E(1091)).fr } },
    { cells: ['passé composé', 'plus-que-parfait'], say: src(E(1109)).fr,
      detail: { title: 'Le passé composé', body: "J'ai perdu devient il avait perdu. EN: passé composé to pluperfect.", say: src(E(1112)).fr } },
    { cells: ['futur', 'conditionnel'], say: src(E(1128)).fr,
      detail: { title: 'Le futur', body: "Je rappellerai devient il rappellerait. EN: future to conditional.", say: src(E(1137)).fr } },
    { cells: ['va + infinitif', 'allait + infinitif'], say: src(E(1133)).fr,
      detail: { title: 'Aller + infinitif', body: "Je vais déménager devient elle allait déménager. EN: va to allait.", say: src(E(1176)).fr } },
    { cells: ['vient de + infinitif', 'venait de + infinitif'], say: src(E(1135)).fr,
      detail: { title: 'Venir de', body: "Je viens de partir devient il venait de partir. EN: vient de to venait de.", say: src(E(1135)).fr } },
    { cells: ['imparfait, conditionnel', 'ne bougent pas'], say: src(E(1099)).fr,
      detail: { title: 'Ce qui reste', body: "Il ne peut pas reculer plus : il faisait froid, ce serait une bonne idée. EN: they stay put.", say: src(E(1140)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decalage'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le futur, un cran plus loin',
  groups: [
    grp('Le futur devient conditionnel', [
      it(E(1127), 'je vous rappellerai'),
      it(E(1128), 'il nous rappellerait'),
      it(E(1136), 'ce sera prêt'),
      it(E(1137), 'ce serait prêt'),
    ], chk(
      'Qu’est-ce qui reste identique entre rappellerai et rappellerait ?',
      ['la fin', 'le radical'], 1,
      "Rappeller- ne bouge pas ; seule la fin change. EN: the stem stays, the ending changes.")),
    grp('Aller et venir de', [
      it(E(1134), 'je vais déménager'),
      it(E(1133), 'elle allait déménager'),
      it(E(1135), 'il venait de partir'),
      it(E(1176), 'il allait prendre sa retraite'),
    ], chk(
      'Dans « elle allait déménager », quel verbe a reculé ?',
      ['aller', 'déménager'], 0,
      "Aller porte le temps, déménager reste à l'infinitif. EN: aller carries the tense."),
    ),
    ctl('Le test', '« Je finirai lundi », rapporté avec il a dit :',
      ['qu’il finirait lundi', 'qu’il finira lundi', 'qu’il finissait lundi'], 0,
      "Le futur devient conditionnel : finirait. EN: finirait."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decalage'],
};

/** CHOOSE: the reporting verb decides, again, now for the future. */
const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Sera ou serait',
  groups: [
    grp('Il dit : le futur reste', [
      it(E(1001), 'il sera en retard'),
      it(E(1043), 'si tu viendras'),
      free("Elle dit qu'elle enverra les photos.", 'She says she will send the photos.', 'dit, au présent'),
      free('Il dit que le chantier finira en mai.', 'He says the work will finish in May.', 'dit, au présent'),
    ], chk(
      'Le verbe qui rapporte est au présent. Le futur...',
      ['devient conditionnel', 'reste au futur'], 1,
      "Rien ne recule après il dit. EN: nothing moves after il dit.")),
    grp('Il a dit : le conditionnel', [
      it(E(1129), 'elle enverrait'),
      it(E(1130), 'il finirait'),
      it(E(1131), 'si tu viendrais'),
      it(E(1141), 'elle aurait lieu'),
    ], chk(
      'Le verbe qui rapporte est au passé. Le futur...',
      ['devient conditionnel', 'reste au futur'], 0,
      "Après a dit, sera devient serait. EN: after a dit, sera becomes serait.")),
    ctl('Le sens', '« Il a dit qu’il viendrait. » Est-ce une hypothèse ?',
      ['Oui, il viendrait peut-être.', 'Non, c’est un futur vu du passé.'], 1,
      "Il a promis de venir ; ce n'est pas un peut-être. EN: it is a future seen from the past, not a maybe."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decalage'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre futurs restés au futur',
  errors: [
    {
      wrong: "Il a dit qu'il nous rappellera.",
      right: src(E(1128)).fr,
      why: "Normal : il a bien dit un futur. Mais après a dit, le futur passe au conditionnel. EN: after a past verb the future becomes conditional.",
    },
    {
      wrong: "Elle a dit qu'elle envoyerait les photos.",
      right: src(E(1129)).fr,
      why: "Tu as bâti le conditionnel sur l'infinitif, ce qui marche souvent. Envoyer garde son radical du futur : enverr-. EN: use the future stem, enverr-.",
    },
    {
      wrong: "Elle a dit qu'elle va déménager.",
      right: src(E(1133)).fr,
      why: "Va est au présent, donc il recule comme les autres : allait. EN: va moves back to allait.",
    },
    {
      wrong: "Ils ont dit qu'ils seront là à huit heures.",
      right: src(E(1132)).fr,
      why: "Même règle pour être : seront devient seraient. EN: seront becomes seraient.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decalage'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le futur', '« Je rappellerai », rapporté avec a dit :',
    ['il rappellerait', 'il rappellera'], 0,
    "Le futur devient conditionnel. EN: future to conditional."),
  ctl('Le radical', 'Le conditionnel de venir, c’est...',
    ['venirait', 'viendrait', 'venait'], 1,
    "Le radical du futur, viendr-. EN: the future stem, viendr-."),
  ctl('Ce qui reste', '« Ce serait une bonne idée », rapporté avec a dit :',
    ['ce serait une bonne idée', 'ce sera une bonne idée'], 0,
    "Le conditionnel ne bouge pas. EN: the conditional stays."),
], ['decalage']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Il rappellerait',
    opener: {
      line: "Il avait promis de rappeler, et la semaine est passée : ici le futur se raconte au conditionnel. EN: He promised to call back, and the week has gone by: here the future is told in the conditional.",
      imageRef: 'lessons/discours-indirect/act08.jpg',
    },
    sections: [],
    milestone: "Après il a dit, tu mets le futur au conditionnel, et tu as tout le décalage en tête. EN: After il a dit you put the future into the conditional, and you hold the whole shift in your head.",
    estScreens: 34, restPoints: ['a8-tableau'],
  },
  sections: [A8_ECOUTE, A8_FUTUR, A8_TABLEAU, A8_CONSTRUIRE, A8_CHOISIR, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LE LENDEMAIN, LÀ-BAS
 *
 *  The time and place words, and the one condition that governs them: has
 *  the day changed? « demain » stays « demain » on the same evening. The
 *  whole act is the reframe applied to the calendar.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Luc, à la gare de Lausanne',
  frSub: 'Un mois après, tout a bougé',
  text: GARE_TEXT,
  glossary: [
    { word: 'croisé', en: 'ran into', note: 'Rencontré par hasard, sans rendez-vous.' },
    { word: 'repartait', en: 'was leaving again', note: 'Il partait de nouveau, après une courte visite.' },
    { word: "s'était mariée", en: 'had got married', note: 'Le plus-que-parfait de se marier.' },
    { word: 'pourtant', en: 'and yet', note: "Ce qui suit va contre ce qu'on attend. EN: and yet." },
  ],
  questions: [
    { q: 'Luc a dit « je suis arrivé hier ». Comment le texte le dit-il ?', a: "Il était arrivé la veille : hier devient la veille, et suis arrivé devient était arrivé." },
    { q: 'Pourquoi « le lendemain » et pas « demain » ?', a: "Le demain de Luc est passé depuis un mois. Pour toi, c'est le jour après la rencontre." },
    { q: 'Luc a dit « la semaine prochaine ». Que dit le texte ?', a: "La semaine suivante, avec m'enverrait au conditionnel." },
    { q: 'Trouve une question rapportée dans le texte.', a: "Il m'a demandé si j'habitais toujours dans le quartier." },
  ],
  audio: REC('rec-b1-19-gare'),
  say: REFRAME,
  terms: ['reperes'],
};

const A9_REPERES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-reperes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-reperes',
  title: 'Demain, un mois plus tard',
  frSub: 'les mots du temps et du lieu',
  hint: 'Quatre cartes. Demande-toi d’abord si le jour a changé.',
  audio: REC('rec-b1-19-reperes'),
  say: REFRAME,
  terms: ['reperes'],
  cards: [
    {
      head: 'Demain devient le lendemain', label: 'un autre jour',
      fr: src(E(1145)).fr,
      sub: rsOf(E(1145)),
      body: "Il a dit demain il y a un mois. Ce demain-là est passé : c'est le lendemain. EN: that tomorrow is gone, so le lendemain.",
    },
    {
      head: 'Hier devient la veille', label: 'la veille',
      fr: src(E(1146)).fr,
      sub: rsOf(E(1146)),
      body: "Le jour avant la conversation, pas le jour avant aujourd'hui. EN: the day before the conversation, not before today.",
    },
    {
      head: 'Ici devient là', label: 'le lieu',
      fr: src(E(1149)).fr,
      sub: rsOf(E(1149)),
      body: "Il a dit attends-moi ici. Tu n'es plus à cet endroit, alors tu dis là. EN: you are somewhere else now, so là.",
    },
    {
      head: 'Le même jour, rien ne bouge', label: 'le même jour',
      fr: src(E(1155)).fr,
      sub: rsOf(E(1155)),
      body: "Karim a dit demain ce matin, et tu le rapportes ce soir : demain reste demain. EN: on the same day, the time words stay.",
    },
  ],
};

const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-reperes',
  title: 'Six repères qui bougent',
  cols: ['On a dit', 'Un autre jour, tu dis'],
  rows: [
    { cells: ['demain', 'le lendemain'], say: src(E(1145)).fr,
      detail: { title: 'demain', body: "Le jour après la conversation. EN: the day after the conversation.", say: src(E(1182)).fr } },
    { cells: ['hier', 'la veille'], say: src(E(1146)).fr,
      detail: { title: 'hier', body: "Le jour avant la conversation. EN: the day before the conversation.", say: "Il a dit qu'il avait appelé la veille." } },
    { cells: ['aujourd’hui', 'ce jour-là'], say: src(E(1147)).fr,
      detail: { title: 'aujourd’hui', body: "Son aujourd'hui n'est plus le tien. EN: their today is not yours.", say: "Elle a dit que ce jour-là, elle travaillait tard." } },
    { cells: ['la semaine prochaine', 'la semaine suivante'], say: src(E(1148)).fr,
      detail: { title: 'la semaine prochaine', body: "La semaine après la conversation. Précédente pour la semaine d'avant. EN: suivante after, précédente before.", say: "Il a dit qu'il était parti la semaine précédente." } },
    { cells: ['maintenant', 'à ce moment-là'], say: src(E(1153)).fr,
      detail: { title: 'maintenant', body: "Le moment de la conversation, pas le tien. EN: the moment they spoke.", say: "Il a dit qu'à ce moment-là, il était au bureau." } },
    { cells: ['ici', 'là'], say: src(E(1149)).fr,
      detail: { title: 'ici', body: "Tu n'es plus à cet endroit. Là, ou là-bas si c'est loin. EN: là, or là-bas if it is far.", say: "Elle a dit qu'elle l'avait laissé là-bas." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reperes'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Déplace les repères',
  groups: [
    grp('Le jour a changé', [
      it(E(1144), 'je pars demain'),
      it(E(1145), 'le lendemain'),
      it(E(1150), 'attends-moi ici'),
      it(E(1149), 'là'),
    ], chk(
      'Pourquoi le lendemain et pas demain ?',
      ['parce que le verbe est au passé', 'parce que ce demain-là est passé'], 1,
      "C'est le jour qui compte, pas le temps du verbe. EN: the day matters, not the tense.")),
    grp('Les autres repères', [
      it(E(1147), 'ce jour-là'),
      it(E(1151), 'ce matin-là'),
      it(E(1152), 'deux jours plus tôt'),
      it(E(1153), 'à ce moment-là'),
    ], chk(
      'Quel petit mot revient souvent dans ces repères ?',
      ['là', 'ici', 'demain'], 0,
      "Là met la chose loin de ton moment à toi. EN: là pushes it away from your own moment.")),
    ctl('Le test', 'Il y a un mois, Luc a dit « je reviens la semaine prochaine ». Tu dis...',
      ['qu’il revenait la semaine prochaine', 'qu’il revenait la semaine suivante'], 1,
      "Cette semaine prochaine est déjà passée. EN: that next week is already over."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reperes'],
};

/** CHOOSE: the same words, a different day. */
const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le soir même, ou un mois après',
  groups: [
    grp('Le soir même', [
      it(E(1155), 'dit ce matin, rapporté ce soir'),
      free("Elle a dit qu'elle rappellerait demain.", 'She said she would call back tomorrow.', 'le même jour : demain reste'),
      free("Il a dit qu'il était passé ce matin.", 'He said he had dropped by this morning.', 'ce matin, c’est encore aujourd’hui'),
      free("Il m'a dit de l'attendre ici.", 'He told me to wait for him here.', 'tu es encore au même endroit'),
    ], chk(
      'Pourquoi demain, ce matin et ici restent-ils ?',
      ['parce que c’est plus simple', 'parce que le jour et le lieu n’ont pas changé'], 1,
      "Ton jour à toi est encore le même. EN: your own day has not changed.")),
    grp('Un mois après', [
      it(E(1145), 'le lendemain'),
      it(E(1146), 'la veille'),
      it(E(1148), 'la semaine suivante'),
      it('fr.a1.rp-recits-temps.180', 'le lendemain matin, dans un récit'),
    ], chk(
      'Qu’est-ce qui a changé entre la conversation et le moment où tu parles ?',
      ['le jour', 'la personne'], 0,
      "Le jour, et donc les mots du temps. EN: the day, so the time words."),
    ),
    ctl('Le test', 'Ce matin, Sophie a dit « je pars demain ». Il est dix-huit heures. Tu dis...',
      ['qu’elle partait le lendemain', 'qu’elle partait demain'], 1,
      "Même jour : demain reste demain. EN: same day, demain stays."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['reperes'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Six repères mal comptés',
  rule: {
    title: 'Compte depuis ton jour à toi',
    body: "Les mots du temps comptent à partir du jour où on parle. Si ce jour a changé, ils changent. S'il n'a pas changé, ils restent. EN: count from your own day; move the time words only if it has changed.",
  },
  cards: [
    { promptLabel: 'demain, un mois après', promptSound: "Il y a un mois, il a dit qu'il partait demain.", fr: src(E(1145)).fr, ipa: ipaOf(E(1145)), tip: "Un mois plus tard, ce demain est passé : le lendemain. EN: that tomorrow is gone." },
    { promptLabel: 'hier, une semaine après', promptSound: "La semaine dernière, elle a dit qu'elle était arrivée hier.", fr: src(E(1146)).fr, ipa: ipaOf(E(1146)), tip: "Hier de qui ? De la conversation : la veille. EN: the day before the conversation." },
    { promptLabel: 'ici, ailleurs', promptSound: "De retour chez toi : il m'a dit de l'attendre ici.", fr: src(E(1149)).fr, ipa: ipaOf(E(1149)), tip: "Tu n'es plus à cet endroit : là. EN: you are elsewhere now." },
    { promptLabel: 'la semaine prochaine, passée', promptSound: "Le mois dernier, elle a dit qu'elle reviendrait la semaine prochaine.", fr: src(E(1148)).fr, ipa: ipaOf(E(1148)), tip: "Cette semaine prochaine est passée : suivante. EN: that next week is over." },
    { promptLabel: 'aujourd’hui, un an après', promptSound: "L'an dernier, il a dit qu'il était occupé aujourd'hui.", fr: src(E(1147)).fr, ipa: ipaOf(E(1147)), tip: "Son aujourd'hui n'est pas le tien : ce jour-là. EN: their today is not yours." },
    { promptLabel: 'déplacé pour rien', promptSound: "Ce matin, il a dit qu'il viendrait le lendemain.", fr: src(E(1155)).fr, ipa: ipaOf(E(1155)), tip: "Tu parles le même jour : demain reste demain. EN: same day, demain stays." },
  ],
  drill: [
    { promptSay: "Il y a un mois, il a dit qu'il partait ... .", opts: ['demain', 'le lendemain'], correct: 1 },
    { promptSay: "La semaine dernière, elle a dit qu'elle était arrivée ... .", opts: ['la veille', 'hier'], correct: 0 },
    { promptSay: "Ce matin, il a dit « je viens demain ». Ce soir : il viendrait ... .", opts: ['demain', 'le lendemain'], correct: 0 },
    { promptSay: "L'an dernier, il a dit qu'il était occupé ... .", opts: ['aujourd’hui', 'ce jour-là'], correct: 1 },
    { promptSay: "Il y a deux mois, elle a dit qu'elle reviendrait la semaine ... .", opts: ['suivante', 'prochaine'], correct: 0 },
    { promptSay: "De retour chez toi : il m'a dit de l'attendre ... .", opts: ['ici', 'là'], correct: 1 },
    { promptSay: "Elle a dit qu'à ce moment-... , elle dormait.", opts: ['ci', 'là'], correct: 1 },
    { promptSay: "Il a dit qu'il avait appelé deux jours plus ... .", opts: ['tôt', 'tard'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Compte depuis ton jour à toi' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le mauvais repère raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-19-piege-reperes'),
  say: REFRAME,
  terms: ['reperes'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Demain', 'Un mois après, « demain » devient...',
    ['le lendemain', 'la veille'], 0,
    "Le jour après la conversation. EN: the day after the conversation."),
  ctl('Hier', 'Un mois après, « hier » devient...',
    ['le lendemain', 'la veille', 'ce jour-là'], 1,
    "Le jour avant la conversation. EN: the day before the conversation."),
  ctl('Le même jour', 'Tu rapportes le soir même. « Demain »...',
    ['devient le lendemain', 'reste demain'], 1,
    "Ton jour n'a pas changé. EN: your day has not changed."),
], ['reperes']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le lendemain, là-bas',
    opener: {
      line: "Un message d'il y a un mois parle d'un demain déjà passé : ici tu remets les mots du temps à leur place. EN: A month-old message talks about a tomorrow that is long gone: here you put the time words back in place.",
      imageRef: 'lessons/discours-indirect/act09.jpg',
    },
    sections: [],
    milestone: "Tu changes demain, hier, ici quand le jour ou le lieu a changé, et tu les gardes sinon. EN: You move demain, hier and ici when the day or place has changed, and keep them otherwise.",
    estScreens: 34, restPoints: ['a9-tableau'],
  },
  sections: [A9_LECTURE, A9_REPERES, A9_TABLEAU, A9_CONSTRUIRE, A9_CHOISIR, A9_PIEGE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — PLUS QUE DIRE
 *
 *  The reporting verbs, which carry the TONE of what was said. Every one of
 *  them obeys the same shift as dire; that is the point of the trap.
 *  « exiger que », « vouloir que », « demander que » take the subjunctive
 *  and are left out on purpose.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La réunion du lundi',
  frSub: 'Huit phrases, huit verbes',
  lines: [
    ln(E(1161)), ln(E(1162)), ln(E(1163)), ln(E(1164)),
    ln(E(1165)), ln(E(1166)), ln(E(1167)), ln(E(1170)),
  ],
  questions: [
    { q: 'Deuxième phrase : pourquoi ne vient-il pas ?', opts: ['il n’a pas le temps', 'il est malade'], correct: 0, why: "« il n'avait pas le temps ». EN: no time." },
    { q: 'Troisième phrase : qui déménage ?', opts: ['le directeur', 'l’agence'], correct: 1, why: "« l'agence déménageait en juin ». EN: the agency is moving." },
    { q: 'Quatrième phrase : quand doit-elle rappeler ?', opts: ['avant midi', 'après midi'], correct: 0, why: "« promis de rappeler avant midi ». EN: before noon." },
    { q: 'Septième phrase : qu’est-ce qu’il reconnaît ?', opts: ['il a oublié le rendez-vous', 'il est en retard'], correct: 0, why: "« il a avoué qu'il avait oublié le rendez-vous ». EN: he forgot the appointment." },
    { q: 'Dernière phrase : qu’est-ce qu’elle t’a conseillé ?', opts: ['le taxi', 'le métro'], correct: 1, why: "« de prendre le métro ». EN: the metro." },
  ],
  audio: REC('rec-b1-19-verbes-ecoute'),
  say: REFRAME,
  terms: ['verbes'],
};

const A10_VERBES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-verbes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-verbes',
  title: 'Des verbes qui disent le ton',
  frSub: 'expliquer, annoncer, promettre, avouer',
  hint: 'Quatre cartes. Écoute ce que le verbe ajoute au message.',
  audio: REC('rec-b1-19-verbes'),
  say: REFRAME,
  terms: ['verbes'],
  cards: [
    {
      head: 'Expliquer, répondre', label: 'une raison, une réponse',
      fr: src(E(1161)).fr,
      sub: rsOf(E(1161)),
      body: "Expliquer donne une raison. Répondre suit une question. Les deux prennent que. EN: both take que.",
    },
    {
      head: 'Annoncer, préciser, ajouter', label: 'une nouvelle',
      fr: src(E(1163)).fr,
      sub: rsOf(E(1163)),
      body: "Annoncer donne une nouvelle. Préciser et ajouter complètent ce qui est déjà dit. EN: announce, specify, add.",
    },
    {
      head: 'Promettre de, promettre que', label: 'promettre',
      fr: src(E(1164)).fr,
      sub: rsOf(E(1164)),
      body: "Promettre de + infinitif quand la même personne fera l'action. Promettre que + une phrase, souvent au conditionnel. EN: de with an infinitive, que with a clause.",
    },
    {
      head: 'Avouer, affirmer', label: 'le ton',
      fr: src(E(1167)).fr,
      sub: rsOf(E(1167)),
      body: "Avouer dit que c'était difficile à dire. Affirmer dit que la personne en est sûre. EN: avouer admits, affirmer insists.",
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Chaque verbe et sa construction',
  groups: [
    grp('Que, après tous ces verbes', [
      it(E(1161), 'expliquer que'),
      it(E(1162), 'répondre que'),
      it(E(1166), 'affirmer que'),
      it(E(1168), 'ajouter que'),
    ], chk(
      'Quel mot suit expliquer, répondre, affirmer et ajouter ?',
      ['de', 'si', 'que'], 2,
      "Que, comme après dire. EN: que, as after dire.")),
    grp('Promettre, deux façons', [
      it(E(1164), 'de + infinitif'),
      it(E(1165), 'que + conditionnel'),
      it('fr.a2.verbes.596', 'de + infinitif, au départ'),
      it('fr.b1.communaute.002', 'que, avec un autre sujet'),
    ], chk(
      'Quand choisis-tu promettre de ?',
      ['quand la même personne fera l’action', 'quand le verbe est au futur'], 0,
      "Elle promet, elle rappellera : de rappeler. EN: same person, so de + infinitive.")),
    ctl('Conseiller', 'Conseiller à quelqu’un...',
      ['de + infinitif', 'si + une phrase'], 0,
      "C'est une demande : de, comme dire de. EN: a request, so de."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbes'],
};

const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces pour choisir le verbe',
  hacks: [
    {
      hack: 'Avant de choisir, demande-toi : une raison, une réponse, une promesse, un aveu ?',
      why: "Le verbe dit comment la chose a été dite. EN: the verb carries the tone.",
    },
    {
      hack: 'Si tu hésites, dire que ne sera jamais faux.',
      why: "Il est neutre : il donne le message, et rien de plus. EN: dire que is never wrong, only plain.",
    },
    {
      hack: 'Une demande cherche de, une information cherche que.',
      why: "Elle m'a conseillé de venir ; elle m'a répondu qu'elle venait. EN: de for requests, que for information.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbes', 'ordre'],
};

/** CHOOSE: the meaning of the original picks the verb. */
const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le ton choisit le verbe',
  groups: [
    grp('Le ton du message', [
      it(E(1167), 'un aveu : il n’en était pas fier'),
      it(E(1164), 'une promesse'),
      it(E(1163), 'une nouvelle pour tout le monde'),
      it(E(1162), 'une réponse à une question'),
    ], chk(
      'Tous ces messages pourraient-ils commencer par il a dit ?',
      ['Oui, mais on perdrait le ton.', 'Non, dire est interdit ici.'], 0,
      "Dire marche toujours ; les autres verbes ajoutent le ton. EN: dire always works; the others add tone.")),
    grp('Le bon verbe', [
      free("Elle n'était pas d'accord, et elle l'a dit deux fois.", 'She disagreed and said so twice.', 'répéter'),
      free('Il a donné une raison pour son retard.', 'He gave a reason for being late.', 'expliquer'),
      free('Elle a dit une chose de plus, à la fin.', 'She said one more thing at the end.', 'ajouter'),
      free("Il a dit qu'il était sûr de lui.", 'He said he was sure.', 'affirmer'),
    ], chk(
      'Pour « elle l’a dit deux fois », quel verbe ?',
      ['avouer', 'répéter', 'annoncer'], 1,
      "Répéter : dire encore. EN: répéter, to say again.")),
    ctl('Le test', 'Ton collègue reconnaît une erreur. Tu dis : il a...',
      ['annoncé', 'promis', 'avoué'], 2,
      "Avouer, pour une chose difficile à dire. EN: avouer, for something hard to say."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbes'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Cinq phrases, cinq verbes',
  itemIds: dicteeFor(10),
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbes'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre verbes mal construits',
  errors: [
    {
      wrong: 'Elle a promis que rappeler avant midi.',
      right: src(E(1164)).fr,
      why: "En anglais, she promised to call back : un infinitif. En français aussi, mais avec de. EN: promettre de + infinitive.",
    },
    {
      wrong: "Il a répondu qu'il n'a pas le temps.",
      right: src(E(1162)).fr,
      why: "Un nouveau verbe, ça fait oublier la règle. Mais après a répondu, le présent recule aussi. EN: every past reporting verb shifts the tense.",
    },
    {
      wrong: "Elle m'a conseillé que je prends le métro.",
      right: src(E(1170)).fr,
      why: "Conseiller ressemble à dire que. Mais c'est une demande : de + infinitif. EN: conseiller takes de + infinitive.",
    },
    {
      wrong: "Il a annoncé que l'agence déménagera en juin.",
      right: "Il a annoncé que l'agence déménagerait en juin.",
      why: "Annoncer parle de l'avenir, alors le futur semble logique. Au passé, il devient conditionnel. EN: after a past verb the future becomes conditional.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verbes', 'decalage'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Promettre', 'Elle a promis ... rappeler.',
    ['de', 'que'], 0,
    "Promettre de + infinitif. EN: promettre de + infinitive."),
  ctl('Avouer', 'Avouer, c’est dire une chose...',
    ['nouvelle pour tout le monde', 'difficile à dire'], 1,
    "Un aveu coûte un peu. EN: an admission costs something."),
  ctl('La règle', 'Après il a expliqué, le présent...',
    ['reste au présent', 'passe à l’imparfait', 'passe au futur'], 1,
    "Tous les verbes au passé font reculer le temps. EN: every past reporting verb shifts."),
], ['verbes']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Plus que dire',
    opener: {
      line: "Il a avoué, elle a promis, ils ont annoncé : ici le verbe dit aussi comment le message a été dit. EN: He admitted, she promised, they announced: here the verb also tells how the message was said.",
      imageRef: 'lessons/discours-indirect/act10.jpg',
    },
    sections: [],
    milestone: "Tu choisis le verbe qui garde le ton du message, avec la bonne construction. EN: You can pick the reporting verb that keeps the tone, with the right construction.",
    estScreens: 32, restPoints: ['a10-hacks'],
  },
  sections: [A10_ECOUTE, A10_VERBES, A10_CONSTRUIRE, A10_HACKS, A10_CHOISIR, A10_DICTEE, A10_ERREURS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — TRANSMETTRE UN MESSAGE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as the model the learner will imitate: a
 *  voicemail relayed the NEXT day, so « demain » has already become
 *  « aujourd'hui ». */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Julien pour Sophie',
  frSub: 'La forme que tu vas écrire',
  text: RELAIS_TEXT,
  glossary: [
    { word: 'joignable', en: 'reachable', note: 'On peut l’appeler, elle va répondre.' },
    { word: 'une visite vidéo', en: 'a video visit', note: 'Visiter le chantier par un appel vidéo, sans voyager.' },
    { word: 'la veille au soir', en: 'the evening before', note: "Le soir avant l'appel, pas avant aujourd'hui." },
    { word: 'étage', en: 'floor, storey', note: 'Le deuxième étage est au-dessus du premier.' },
  ],
  questions: [
    { q: 'Qu’est-ce que Madame Diallo a dit, mot pour mot, sur le chantier ?', a: "Le chantier avance bien, mais les ouvriers ont trouvé un problème. Le présent et le passé composé ont reculé." },
    { q: 'Pourquoi « la veille au soir » ?', a: "Elle a envoyé les photos le soir avant son appel. La veille compte depuis la conversation." },
    { q: 'Pourquoi « toute la journée d’aujourd’hui » ?', a: "Elle a dit demain. Julien écrit le jour suivant : pour Sophie, ce demain-là, c'est aujourd'hui." },
    { q: 'Quelles trois choses Sophie doit-elle retenir ?', a: "Qui a appelé, ce que Madame Diallo veut savoir, et qu'elle doit la rappeler avant dix-sept heures." },
  ],
  audio: REC('rec-b1-19-relais'),
  say: REFRAME,
  terms: ['discours', 'decalage'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour transmettre un message',
  steps: [
    '1. Commence par qui a appelé, quand, et pour quoi. EN: who called, when, and what about.',
    '2. Passe les informations avec a dit que, et fais reculer les temps. EN: pass on the facts and shift the tenses.',
    '3. Passe les questions avec si, où, quand ou ce que. EN: report the questions.',
    '4. Passe la demande avec de et l’infinitif. EN: report the request with de.',
    '5. Relis les mots du temps : compte depuis ton jour à toi. EN: check the time words from your own day.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'reperes'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: 'Tu laisses un mot sur le bureau d’une collègue absente', fr: src(E(1179)).fr, en: src(E(1179)).en },
    { situation: 'Tu racontes à ton conjoint l’appel de l’école', fr: 'La maîtresse a dit que Léo avait de la fièvre.', en: 'The teacher said Léo had a temperature.' },
    { situation: 'Tu expliques au propriétaire ce que le plombier a dit', fr: "Il a dit qu'il reviendrait jeudi avec la pièce.", en: 'He said he would come back on Thursday with the part.' },
    { situation: 'Tu passes la question d’un client à ta patronne', fr: 'Il voulait savoir si le prix comprenait la livraison.', en: 'He wanted to know whether the price included delivery.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'verbes'],
};

/** CHOOSE, out loud: Sophie is back from leave and wants the calls. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Sophie rentre de congé',
  setting: "Jeudi matin. Sophie revient de trois jours de congé. Elle pose son sac et te demande ce qui s'est passé pendant son absence. Madame Diallo a appelé mardi.",
  turns: [
    {
      ai: 'Salut ! Est-ce que quelqu’un a appelé pour moi ?',
      en: 'Hi! Did anyone call for me?',
      user: 'Oui, Madame Diallo a appelé de Dakar mardi.',
      userEn: 'Yes, Mrs Diallo called from Dakar on Tuesday. (Who called and when: the relay starts here.)',
      alts: [
        { fr: "Madame Diallo t'a appelée mardi.", en: 'Mrs Diallo called you on Tuesday.' },
        { fr: 'Oui, il y a eu un appel de Dakar mardi.', en: 'Yes, there was a call from Dakar on Tuesday.' },
      ],
    },
    {
      ai: 'Qu’est-ce qu’elle voulait ?',
      en: 'What did she want?',
      user: 'Elle voulait savoir si tu avais reçu ses photos.',
      userEn: 'She wanted to know whether you had got her photos. (A yes-or-no question: si, and a pluperfect.)',
      alts: [
        { fr: 'Elle a demandé si tu avais vu ses photos.', en: 'She asked whether you had seen her photos.' },
        { fr: 'Elle voulait savoir ce que tu pensais de la fenêtre.', en: 'She wanted to know what you thought of the window. (Another question, with ce que: also right.)' },
      ],
    },
    {
      ai: 'Et le chantier, ça avance ?',
      en: 'And the building work, is it moving along?',
      user: 'Elle a dit que le chantier avançait bien.',
      userEn: 'She said the work was going well. (Present moved back to the imparfait.)',
      alts: [
        { fr: 'Elle a dit que tout allait bien.', en: 'She said everything was fine.' },
        { fr: 'Elle a expliqué que les ouvriers avaient trouvé un problème.', en: 'She explained that the workers had found a problem. (Passé composé moved back to the pluperfect.)' },
      ],
    },
    {
      ai: 'Je dois la rappeler ?',
      en: 'Do I have to call her back?',
      user: 'Oui, elle t’a demandé de la rappeler avant dix-sept heures.',
      userEn: 'Yes, she asked you to call her back before five. (A request: de + infinitive.)',
      alts: [
        { fr: 'Oui, elle a dit de la rappeler vite.', en: 'Yes, she said to call her back quickly.' },
        { fr: 'Oui, avant dix-sept heures, heure de Montréal.', en: 'Yes, before five, Montréal time.' },
      ],
    },
    {
      ai: 'Elle a parlé d’une visite ?',
      en: 'Did she mention a visit?',
      user: 'Elle a demandé quand tu pourrais faire une visite vidéo.',
      userEn: 'She asked when you could do a video visit. (The question word stays; the future becomes the conditional.)',
      alts: [
        { fr: 'Elle voulait savoir quand tu serais libre.', en: 'She wanted to know when you would be free.' },
        { fr: 'Oui, elle a proposé une visite vidéo.', en: 'Yes, she suggested a video visit.' },
      ],
    },
    {
      ai: 'Elle est joignable quand ?',
      en: 'When can I reach her?',
      user: "Mardi, elle a dit qu'elle serait joignable le lendemain, donc hier.",
      userEn: 'On Tuesday she said she would be reachable the next day, so yesterday. (Her tomorrow is already in the past.)',
      alts: [
        { fr: 'Elle a précisé qu’elle serait joignable toute la journée de mercredi.', en: 'She said she would be reachable all day Wednesday.' },
        { fr: "Elle a promis qu'elle rappellerait si c'était urgent.", en: 'She promised she would call back if it was urgent. (A promise with que and the conditional.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'decalage', 'reperes'],
};

/** THE GRADED TASK. The unit outcome is tested here: relay a voicemail to
 *  someone who was not there, the next day. The voicemail is in DIRECT
 *  speech in the brief; `task` is exempt from the core word cap. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Transmets le message de la boîte vocale',
  frSub: 'Mission écrite',
  brief: `Hier, ton collègue Marc était absent. Isabelle Morin lui a laissé ce message sur la boîte vocale du bureau : ${TASK_VOICEMAIL} Aujourd'hui, Marc est de retour. Écris-lui un message pour lui transmettre l'appel.`,
  briefEn: 'Yesterday your colleague Marc was away. Isabelle Morin left the message above on the office voicemail. Marc is back today: write him a message passing on the call.',
  produce: "Écris un message de 90 à 130 mots à Marc, avec un verbe au passé pour rapporter, une question avec si, une question avec ce que ou un mot de question, une demande avec de + infinitif, et les bons mots du temps pour aujourd'hui.",
  responseSpec: { kind: 'text', minWords: 90, maxWords: 130 },
  rubric: {
    criteria: [
      {
        key: 'personnes',
        label: 'Les bonnes personnes',
        maxPoints: 3,
        descriptors: [
          '3 : Isabelle Morin devient elle, Marc devient tu, et vos plans devient tes plans. Aucun je du message ne reste.',
          '2 : Une ou deux personnes restent comme dans le message, mais on comprend qui parle.',
          '1 : Le message est recopié avec je et vous : Marc ne sait plus qui dit quoi.',
        ],
      },
      {
        key: 'temps',
        label: 'Les temps qui reculent',
        maxPoints: 4,
        descriptors: [
          "4 : Après a dit ou a demandé, chaque présent passe à l'imparfait, chaque passé composé au plus-que-parfait et chaque futur au conditionnel, sans erreur de forme.",
          '3 : Presque tous les temps reculent. Une forme hésite : un futur resté, ou un auxiliaire mal choisi.',
          '2 : Plusieurs temps restent comme dans le message, ou le verbe qui rapporte change sans cesse de temps.',
          '1 : Les temps du message sont gardés partout.',
        ],
      },
      {
        key: 'questions',
        label: 'Questions et demande',
        maxPoints: 3,
        descriptors: [
          '3 : La question oui ou non avec si, la question avec ce que, la demande avec de + infinitif, sans est-ce que.',
          '2 : Une des trois garde sa forme de question, ou la demande passe par que.',
          "1 : Les questions sont recopiées avec est-ce que et un point d'interrogation.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          "2 : Qui a appelé, ce qu'elle veut, ce que Marc doit faire, demain matin écrit ce matin, et entre 90 et 130 mots.",
          '1 : Il manque un élément, ou demain matin est resté demain matin.',
        ],
      },
    ],
  },
  scaffold: [
    'Salut Marc,',
    'Hier après-midi, Isabelle Morin...',
    'Elle a dit que...',
    'Elle voulait savoir si...',
    'Elle a aussi demandé ce que...',
    'Elle t’a demandé de...',
    'ce matin',
    'Bonne journée !',
  ],
  modelAnswer: "Salut Marc, hier après-midi, Isabelle Morin, de la mairie de Laval, t'a laissé un message pour le projet de la bibliothèque. Elle a dit qu'ils avaient bien reçu tes plans, et elle t'a remercié. Elle a expliqué que le conseil se réunissait jeudi et qu'elle te donnerait sa réponse vendredi. Elle voulait savoir si tu pouvais lui envoyer le budget avant mercredi. Elle a aussi demandé ce que tu pensais d'une visite du terrain la semaine prochaine. Enfin, elle t'a demandé de la rappeler ce matin, parce qu'elle était au bureau jusqu'à midi. Il est déjà dix heures, alors appelle-la vite. Bonne journée !",
  modelAnswerEn: "Hi Marc, yesterday afternoon Isabelle Morin, from Laval town hall, left you a message about the library project. She said they had received your plans and she thanked you. She explained that the council was meeting on Thursday and that she would give you its answer on Friday. She wanted to know whether you could send her the budget before Wednesday. She also asked what you thought of a site visit next week. Finally, she asked you to call her back this morning, because she was in the office until noon. It is already ten, so call her quickly. Have a good day!",
  watchFor: [
    {
      pattern: 'The voicemail copied in the first person, so je and vous stay (je vous donnerai ma réponse).',
      criterion: 'personnes',
      feedback: "Ce n'est pas Isabelle qui écrit, c'est toi. Son je devient elle et son vous devient tu : elle te donnerait sa réponse.",
      ref: 'a2-pronoms',
    },
    {
      pattern: 'vos plans kept as vos, or turned into ses plans, although the plans are Marc’s and the learner is writing to Marc.',
      criterion: 'personnes',
      feedback: 'Les plans sont à Marc, et tu lui écris : tes plans.',
      ref: 'a2-tableau',
    },
    {
      pattern: 'A present kept after a past reporting verb in more than one place (elle a dit que le conseil se réunit jeudi et qu’elle est au bureau).',
      criterion: 'temps',
      feedback: "Après elle a dit, le présent passe à l'imparfait : le conseil se réunissait jeudi.",
      ref: 'a6-recul',
    },
    {
      pattern: "A future kept after a past reporting verb (elle a dit qu'elle te donnera sa réponse).",
      criterion: 'temps',
      feedback: 'Après a dit, le futur devient conditionnel : elle te donnerait sa réponse.',
      ref: 'a8-futur',
    },
    {
      pattern: "A passé composé kept instead of the pluperfect (elle a dit qu'ils ont reçu tes plans).",
      criterion: 'temps',
      feedback: 'Ils ont reçu, rapporté au passé, devient ils avaient reçu.',
      ref: 'a7-pqp',
    },
    {
      pattern: 'A pluperfect with the wrong auxiliary or a missing agreement after être.',
      criterion: 'temps',
      feedback: "Avait ou était, comme au passé composé, et l'accord après être.",
      ref: 'a7-piege',
    },
    {
      pattern: 'est-ce que or a question mark kept in a reported question (elle a demandé est-ce que tu peux envoyer le budget ?).',
      criterion: 'questions',
      feedback: "Une question rapportée perd est-ce que et son point d'interrogation : elle voulait savoir si tu pouvais...",
      ref: 'a3-piege',
    },
    {
      pattern: "qu'est-ce que kept, or que alone (elle a demandé qu'est-ce que tu penses, elle a demandé que tu penses).",
      criterion: 'questions',
      feedback: "Qu'est-ce que devient ce que : elle a demandé ce que tu pensais.",
      ref: 'a4-mots',
    },
    {
      pattern: 'The request reported with the imperative kept (elle a dit rappelez-moi demain matin) or without de.',
      criterion: 'questions',
      feedback: "Une demande passe avec de et l'infinitif : elle t'a demandé de la rappeler.",
      ref: 'a5-ordre',
    },
    {
      pattern: 'demain matin kept although the message is relayed the next day, or turned into le lendemain matin, which points to tomorrow for Marc.',
      criterion: 'tache',
      feedback: "Le message date d'hier. Son demain matin, pour Marc, c'est ce matin.",
      ref: 'a9-reperes',
    },
    {
      pattern: 'Missing who called, what she wants, or what Marc has to do; or under 90 words.',
      criterion: 'tache',
      feedback: "Relis la mission : qui a appelé, ce qu'elle veut, et ce que Marc doit faire.",
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'The greeting (Salut Marc) and the sign-off do NOT count toward the word budget. Count the body only, with 10% tolerance (81 to 143) before criterion « tache » loses its point.',
    'The shift after a past reporting verb is expected (level 4 of « temps »). A present or future kept for something still true or still ahead today (le conseil se réunit jeudi, since Thursday has not come yet) is ordinary speech: it may cost at most one point on « temps », and feedback calls it spoken, never wrong.',
    '« Hier » for the day of the call and « ce matin » for the voicemail’s « demain matin » are CORRECT, because the learner writes the next day. « le lendemain matin » is a real error here: for Marc it points to tomorrow.',
    'The conditionnel passé (elle a dit qu’elle t’aurait répondu) is B2 and not taught; do not require it, and do not mark a correct one as an error.',
    'The subjunctive (b1.14 to b1.16) is not needed here. A correct one is not an error; an incorrect one is not marked under this lesson.',
    'Accept « elle voulait savoir », « elle a demandé » and « elle se demandait » interchangeably for the reported questions, and any reporting verb from act 10 with its correct construction.',
    'The learner’s own gender is unknown: judge agreement for internal consistency only. « elle t’a remercié » agrees with Marc and is correct.',
    'Accept regional vocabulary (courriel and email, boîte vocale and messagerie, cellulaire and portable).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'decalage', 'reperes'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Passe tous les messages à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'pronoms'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-verbes',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'dire que', v: 'que, toujours', say: src(E(1007)).fr,
      detail: { title: 'Dire que', body: "Que ne tombe jamais, même quand l'anglais enlève that. EN: que is never dropped.", say: src(E(1005)).fr } },
    { k: 'les personnes', v: 'qui parle maintenant, et à qui', say: src(E(1003)).fr,
      detail: { title: 'Les personnes', body: "Je devient il, mon devient son, et la personne en face devient tu. EN: persons follow the new speaker.", say: src(E(1028)).fr } },
    { k: 'si, ce que', v: 'une question devient une phrase', say: src(E(1037)).fr,
      detail: { title: 'Les questions', body: "Si pour oui ou non, le mot de question reste, qu'est-ce que devient ce que. EN: si, question words, ce que.", say: src(E(1058)).fr } },
    { k: 'de + infinitif', v: 'une demande', say: src(E(1073)).fr,
      detail: { title: 'Les demandes', body: "L'impératif devient de + infinitif, et de ne pas à la forme négative. EN: de plus infinitive.", say: src(E(1075)).fr } },
    { k: 'après a dit', v: 'imparfait, plus-que-parfait, conditionnel', say: src(E(1089)).fr,
      detail: { title: 'Le décalage', body: "Le présent, le passé composé et le futur reculent ; l'imparfait reste. EN: three tenses move back, the imparfait stays.", say: src(E(1128)).fr } },
    { k: 'les repères', v: 'seulement si le jour a changé', say: src(E(1145)).fr,
      detail: { title: 'Les repères', body: "Demain devient le lendemain un autre jour, et reste demain le même jour. EN: time words move only with the day.", say: src(E(1155)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'decalage', 'reperes'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu passes un message au présent et au passé, tu rapportes une question et une demande, tu fais reculer les temps et tu sais quand les mots du temps bougent. Le piège qui reste est le plus discret : un seul je ou un seul futur oublié dans un long message. Avant l'examen, relis ton message pour Marc et souligne chaque verbe après que, si ou ce que. À côté, écris le temps que la personne a vraiment dit. Si les deux sont pareils après a dit, cherche pourquoi. EN: Underline every verb after que, si or ce que and write the tense originally said next to it; if nothing moved after a dit, find out why.",
  stats: [
    { k: 'Dire que', v: 'que ne tombe jamais' },
    { k: 'Les questions', v: 'si, où, ce que' },
    { k: 'Après a dit', v: 'un cran en arrière' },
    { k: 'Les repères', v: 'seulement si le jour change' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act from act 1 to act 10 plus an integration round on the task itself.
 *  Each round's target is a distinct errorTrigger, so a failed round fires
 *  that round's own drill.
 *
 *  `fold()` strips accents, commas and apostrophes, so no answer turns on
 *  one: the shifted forms differ by LETTERS (est / était, rappellera /
 *  rappellerait, partie / parti, était / s'était). Every typeIn and
 *  errorSpot carries `prompt`, every listenChoose carries `say`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-message', label: 'Dire que', targets: ['mots-recopies'],
      questions: [
        mc('Karim dit « je serai en retard ». Tu le dis à Sophie tout de suite :', ["Il dit que je serai en retard.", "Il dit qu'il serait en retard.", "Il dit qu'il sera en retard."], 2, "Je devient il, et le futur reste après dit. EN: je becomes il, the future stays.", 'a1-scene'),
        mc('Après il dit, au présent, le temps du message...', ['reste le même', 'recule'], 0, "Rien ne recule après un verbe au présent. EN: nothing moves after a present verb.", 'a1-dire'),
        mc('En français, peux-tu enlever que après dire ?', ['non, jamais', 'oui, comme that'], 0, "Que est obligatoire. EN: que is required.", 'a1-dire'),
        tI('Rapporte avec il dit.', 'Karim : « Mon train part à dix heures. »', 'Il dit que son train part à dix heures.', "Mon devient son, le présent reste. EN: mon becomes son.", 'a1-reperer', ['Karim dit que son train part à dix heures.']),
        tI('Rapporte avec elle dit.', 'Sophie : « J’arrive dans dix minutes. »', "Elle dit qu'elle arrive dans dix minutes.", "Je devient elle, et que devient qu'. EN: je becomes elle.", 'a1-dire', ["Sophie dit qu'elle arrive dans dix minutes."]),
        eS('Il dit il a oublié son ordinateur.', "Il dit qu'il a oublié son ordinateur.", "Il manque que. EN: que is missing.", 'a1-dire'),
        eS('Madame Diallo dit que mon chantier avance bien.', 'Madame Diallo dit que son chantier avance bien.', "C'est son chantier à elle. EN: it is her site.", 'a1-reperer'),
        lC('Écoute. Qui sera en retard ?', src(E(1001)).fr, ['la personne qui parle', 'Karim'], 1, "« Karim dit qu'il sera en retard ». EN: Karim.", 'a1-note'),
      ],
    },
    {
      id: 'r2-personnes', label: 'Les personnes', targets: ['pronom-fige'],
      questions: [
        mc('Nadia : « Je n’ai pas mes clés. » Tu racontes :', ["Elle dit qu'elle n'a pas mes clés.", "Elle dit que je n'ai pas ses clés.", "Elle dit qu'elle n'a pas ses clés."], 2, "Je devient elle, mes devient ses. EN: je to elle, mes to ses.", 'a2-pronoms'),
        mc('« Nous aimons notre bureau », dit par tes voisins. Tu dis : ils aiment...', ['notre bureau', 'son bureau', 'leur bureau'], 2, "Notre devient leur. EN: notre becomes leur.", 'a2-tableau'),
        mc('Karim t’a dit « je t’appelle ». Tu le dis à Sophie : il...', ['m’appelle', 't’appelle'], 0, "Te, c'était toi : me. EN: it was you, so me.", 'a2-choisir'),
        mc('Dans « Il dit que sa fille est malade », sa s’accorde avec...', ['il', 'fille'], 1, "Le possessif s'accorde avec la chose. EN: it agrees with fille.", 'a2-erreurs'),
        tI('Rapporte avec il dit.', 'Julien : « Ma voiture est au garage. »', 'Il dit que sa voiture est au garage.', "Ma devient sa. EN: ma becomes sa.", 'a2-construire', ['Julien dit que sa voiture est au garage.']),
        tI('Rapporte avec ils disent.', 'Tes voisins, à toi : « Nous vous invitons samedi. »', "Ils disent qu'ils nous invitent samedi.", "Nous devient ils, vous devient nous. EN: nous to ils, vous to nous.", 'a2-exemples'),
        eS('Elles disent que notre avion est en retard.', 'Elles disent que leur avion est en retard.', "C'est leur avion à elles. EN: their plane.", 'a2-erreurs'),
        lC('Écoute. À qui sont les clés ?', src(E(1017)).fr, ['à la femme qui a parlé', 'à toi'], 0, "« ses clés » : les siennes. EN: hers.", 'a2-histoire'),
      ],
    },
    {
      id: 'r3-si', label: 'Demander si', targets: ['question-gardee'],
      questions: [
        mc('« Est-ce que tu es libre ? », rapporté : il demande...', ['que tu es libre', 'est-ce que tu es libre', 'si tu es libre'], 2, "Oui ou non devient si. EN: yes or no becomes si.", 'a3-si'),
        mc('Laquelle est correcte ?', ["Elle demande s'elle peut venir.", 'Elle demande si elle peut venir.'], 1, "Pas d'élision devant elle. EN: no elision before elle.", 'a3-construire'),
        mc('« Je ne sais pas si elle viendra. » Le futur ici est...', ['correct', 'une faute'], 0, "Ce si veut dire whether. EN: this si means whether.", 'a3-choisir'),
        tI('Rapporte avec il demande.', 'Karim : « Est-ce que les plans sont prêts ? »', 'Il demande si les plans sont prêts.', "Est-ce que part, si arrive. EN: si replaces est-ce que.", 'a3-construire', ['Karim demande si les plans sont prêts.']),
        tI('Rapporte avec il veut savoir.', 'Karim : « Est-ce que je peux venir plus tôt ? »', "Il veut savoir s'il peut venir plus tôt.", "Si il devient s'il. EN: si il becomes s'il.", 'a3-si', ["Karim veut savoir s'il peut venir plus tôt."]),
        eS('Il demande est-ce que tu es libre jeudi.', 'Il demande si tu es libre jeudi.', "Est-ce que disparaît. EN: est-ce que goes.", 'a3-piege'),
        eS('Elle demande que les plans sont prêts.', 'Elle demande si les plans sont prêts.', "Une question oui ou non prend si. EN: si, not que.", 'a3-piege'),
        lC('Écoute. La fête est-elle passée ?', src(E(1043)).fr, ['non, elle est à venir', 'oui'], 0, "Viendras : c'est à venir. EN: still to come.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-mots', label: 'Où, quand, ce que', targets: ['quest-ce-que-garde'],
      questions: [
        mc('« Où est-ce que tu habites ? », rapporté :', ['Elle demande où est-ce que tu habites.', 'Elle demande où habites-tu.', 'Elle demande où tu habites.'], 2, "Le mot reste, est-ce que part. EN: the word stays.", 'a4-mots'),
        mc('« Qu’est-ce que tu fais ? », rapporté : elle demande...', ['ce que tu fais', 'que tu fais', 'qu’est-ce que tu fais'], 0, "Qu'est-ce que devient ce que. EN: ce que.", 'a4-mots'),
        mc('« Qu’est-ce qui se passe ? », rapporté : elle demande...', ['ce que se passe', 'ce qui se passe'], 1, "La chose est le sujet : ce qui. EN: ce qui.", 'a4-choisir'),
        mc('Après ce que, qu’est-ce qui vient ?', ['un sujet, puis un verbe', 'un verbe, tout de suite'], 0, "Quelqu'un d'autre fait l'action. EN: a subject first.", 'a4-choisir'),
        tI('Rapporte avec il demande.', '« Quand est-ce que tu pars ? »', 'Il demande quand tu pars.', "Quand reste, est-ce que part. EN: quand stays.", 'a4-construire'),
        tI('Rapporte avec il veut savoir.', '« Qu’est-ce que tu penses des plans ? »', 'Il veut savoir ce que tu penses des plans.', "Ce que, sans est-ce que. EN: ce que.", 'a4-mots'),
        eS('Il demande ce que ne va pas.', 'Il demande ce qui ne va pas.', "La chose ne va pas : ce qui. EN: ce qui.", 'a4-erreurs'),
        lC('Écoute. Entends-tu est-ce que ?', src(E(1054)).fr, ['non', 'oui'], 0, "Il demande quand tu pars. EN: no est-ce que.", 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-ordre', label: 'Les demandes', targets: ['ordre-avec-que'],
      questions: [
        mc('Karim t’a dit « rappelle-moi » pour Sophie. Tu dis à Sophie : il te demande...', ['de me rappeler', 'de le rappeler', 'le rappeler'], 1, "De, et moi devient le. EN: de, and moi becomes le.", 'a5-ordre'),
        mc('« Il dit qu’il vient » et « il dit de venir »...', ['ne disent pas la même chose', 'disent la même chose'], 0, "Une information, puis une demande. EN: a fact, then a request.", 'a5-choisir'),
        mc('« Ne fermez pas la porte », rapporté : elle nous demande...', ['de fermer pas la porte', 'de ne fermer pas la porte', 'de ne pas fermer la porte'], 2, "Ne pas en bloc. EN: ne pas together.", 'a5-construire'),
        tI('Rapporte avec il te demande.', 'Karim, à toi : « Apporte les plans. »', "Il te demande d'apporter les plans.", "De + infinitif. EN: de plus infinitive.", 'a5-ordre', ["Karim te demande d'apporter les plans."]),
        tI('Rapporte avec le plombier dit.', '« N’utilisez pas l’évier. »', "Le plombier dit de ne pas utiliser l'évier.", "De ne pas + infinitif. EN: de ne pas.", 'a5-ordre'),
        tI('Rapporte avec le médecin lui conseille.', '« Reposez-vous. »', 'Le médecin lui conseille de se reposer.', "Vous devient se. EN: se reposer.", 'a5-exemples'),
        eS('Elle nous demande fermer la porte.', 'Elle nous demande de fermer la porte.', "Il manque de. EN: de is missing.", 'a5-piege'),
        lC('Écoute. Qui doit rappeler ?', src(E(1073)).fr, ['lui', 'toi'], 1, "Il te demande de le rappeler : toi. EN: you.", 'a5-histoire'),
      ],
    },
    {
      id: 'r6-imparfait', label: 'Le présent recule', targets: ['present-garde'],
      questions: [
        mc('Hier, Karim a dit « je suis malade ». Tu l’écris : il a dit qu’il...', ['est malade', 'a été malade', 'était malade'], 2, "Le présent devient imparfait. EN: present to imparfait.", 'a6-recul'),
        mc('Après il a dit, l’imparfait du message...', ['ne bouge pas', 'devient plus-que-parfait'], 0, "Il reste. EN: it stays.", 'a6-recul'),
        mc('Qu’est-ce qui fait reculer le temps ?', ['le mot que', 'le verbe qui rapporte, au passé'], 1, "Le temps du verbe qui rapporte. EN: the reporting verb's tense.", 'a6-construire'),
        tI('Rapporte avec elle a dit.', 'Sophie : « Je travaille chez moi. »', "Elle a dit qu'elle travaillait chez elle.", "Travaille devient travaillait, moi devient elle. EN: travaillait, chez elle.", 'a6-construire', ["Sophie a dit qu'elle travaillait chez elle."]),
        tI('Rapporte avec il a demandé.', '« Où est-ce que tu habites ? »', 'Il a demandé où tu habitais.', "Où reste, habites devient habitais. EN: habitais.", 'a6-construire'),
        eS("Ils ont dit qu'ils ont faim.", "Ils ont dit qu'ils avaient faim.", "Ont faim devient avaient faim. EN: avaient.", 'a6-erreurs'),
        eS("Il a répondu qu'il ne peut pas venir.", "Il a répondu qu'il ne pouvait pas venir.", "Peut devient pouvait. EN: pouvait.", 'a6-erreurs'),
        lC('Écoute. Le verbe qui rapporte est-il au passé ?', src(E(1104)).fr, ['oui', 'non'], 0, "Ont dit : au passé. EN: past.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-pqp', label: 'Le plus-que-parfait', targets: ['pc-garde'],
      questions: [
        mc('« J’ai perdu mon téléphone », rapporté avec il a dit :', ["qu'il perdait son téléphone", "qu'il avait perdu son téléphone", "qu'il a perdu son téléphone"], 1, "Ai perdu devient avait perdu. EN: avait perdu.", 'a7-pqp'),
        mc('Le plus-que-parfait se forme avec...', ['le futur de avoir ou être', 'l’imparfait de avoir ou être'], 1, "Avait, était, puis le participe. EN: imparfait auxiliary.", 'a7-focus'),
        mc('« Je suis partie », dit par Sophie, rapporté : elle...', ['était partie', 'avait partie'], 0, "Être, et l'accord reste. EN: être, agreement kept.", 'a7-construire'),
        tI('Rapporte avec elle a dit.', 'Sophie : « Je suis arrivée en retard. »', "Elle a dit qu'elle était arrivée en retard.", "Suis arrivée devient était arrivée. EN: était arrivée.", 'a7-construire', ["Sophie a dit qu'elle était arrivée en retard."]),
        tI('Rapporte avec ils ont dit.', 'Les ouvriers : « Nous avons visité le chantier. »', "Ils ont dit qu'ils avaient visité le chantier.", "Avons visité devient avaient visité. EN: avaient visité.", 'a7-construire'),
        eS("Il a dit qu'il avait parti à six heures.", "Il a dit qu'il était parti à six heures.", "Partir prend être. EN: partir takes être.", 'a7-piege'),
        eS("Elle a dit qu'elle était trompée de salle.", "Elle a dit qu'elle s'était trompée de salle.", "Se tromper garde son se. EN: keep the se.", 'a7-piege'),
        lC('Écoute. C’était déjà arrivé quand il a parlé ?', src(E(1109)).fr, ['non', 'oui'], 1, "Avait perdu : c'était avant. EN: it had already happened.", 'a7-histoire'),
      ],
    },
    {
      id: 'r8-conditionnel', label: 'Le futur recule', targets: ['futur-garde'],
      questions: [
        mc('« Je rappellerai », rapporté avec il a dit :', ["qu'il rappellera", "qu'il rappellerait"], 1, "Le futur devient conditionnel. EN: conditional.", 'a8-futur'),
        mc('« Je vais déménager », rapporté avec elle a dit :', ["qu'elle va déménager", "qu'elle irait déménager", "qu'elle allait déménager"], 2, "Va devient allait. EN: allait.", 'a8-tableau'),
        mc('« Il a dit qu’il viendrait. » Ce conditionnel est...', ['un futur vu du passé', 'une hypothèse'], 0, "Il n'y a pas de peut-être. EN: no maybe here.", 'a8-choisir'),
        tI('Rapporte avec il a dit.', 'Karim : « Ce sera prêt vendredi. »', 'Il a dit que ce serait prêt vendredi.', "Sera devient serait. EN: serait.", 'a8-construire', ['Karim a dit que ce serait prêt vendredi.']),
        tI('Rapporte avec elle a dit.', 'Sophie : « J’enverrai les photos. »', "Elle a dit qu'elle enverrait les photos.", "Le radical enverr- reste. EN: stem enverr-.", 'a8-erreurs', ["Sophie a dit qu'elle enverrait les photos."]),
        eS("Ils ont dit qu'ils seront là à huit heures.", "Ils ont dit qu'ils seraient là à huit heures.", "Seront devient seraient. EN: seraient.", 'a8-erreurs'),
        eS("Il a dit qu'il nous rappellera.", "Il a dit qu'il nous rappellerait.", "Rappellera devient rappellerait. EN: rappellerait.", 'a8-erreurs'),
        lC('Écoute. Était-il encore là ?', src(E(1135)).fr, ['oui', 'non, il venait de partir'], 1, "Il venait de partir. EN: he had just left.", 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-reperes', label: 'Les repères', targets: ['reperes-figes'],
      questions: [
        mc('Un mois après, « demain » devient...', ['la veille', 'le lendemain'], 1, "Le jour après la conversation. EN: the day after.", 'a9-reperes'),
        mc('Un mois après, « hier » devient...', ['la veille', 'le lendemain'], 0, "Le jour avant la conversation. EN: the day before.", 'a9-tableau'),
        mc('Tu rapportes le soir même. « Demain »...', ['devient le lendemain', 'reste demain'], 1, "Même jour, rien ne bouge. EN: same day, no change.", 'a9-choisir'),
        mc('« La semaine prochaine », un mois après :', ['la semaine précédente', 'la semaine prochaine', 'la semaine suivante'], 2, "La semaine après la conversation. EN: the following week.", 'a9-tableau'),
        tI('Rapporte, un mois après, avec il a dit.', 'Luc : « Je pars demain. »', "Il a dit qu'il partait le lendemain.", "Demain devient le lendemain. EN: le lendemain.", 'a9-construire', ["Luc a dit qu'il partait le lendemain."]),
        tI('Rapporte, de retour chez toi, avec il m’a dit.', 'Luc, à toi : « Attends-moi ici. »', "Il m'a dit de l'attendre là.", "Ici devient là, moi devient le. EN: là.", 'a9-construire', ["Luc m'a dit de l'attendre là."]),
        eS("Il y a un mois, elle a dit qu'elle était arrivée hier.", "Il y a un mois, elle a dit qu'elle était arrivée la veille.", "Hier devient la veille. EN: la veille.", 'a9-piege'),
        lC('Écoute. De quel jour parle-t-on ?', src(E(1146)).fr, ['d’hier, pour toi', 'du jour avant la conversation'], 1, "La veille compte depuis la conversation. EN: the day before the conversation.", 'a9-lecture'),
      ],
    },
    {
      id: 'r10-verbes', label: 'Les verbes', targets: ['verbe-mal-construit'],
      questions: [
        mc('Elle a promis ... rappeler avant midi.', ['que', 'de'], 1, "Promettre de + infinitif. EN: promettre de.", 'a10-verbes'),
        mc('Ton collègue reconnaît une erreur. Tu dis : il a...', ['annoncé', 'répondu', 'avoué'], 2, "Avouer, pour une chose difficile. EN: avouer.", 'a10-choisir'),
        mc('Conseiller à quelqu’un se construit avec...', ['de + infinitif', 'si + une phrase'], 0, "Une demande : de. EN: de.", 'a10-construire'),
        tI('Rapporte avec il a répondu.', 'Karim : « Je n’ai pas le temps. »', "Il a répondu qu'il n'avait pas le temps.", "Ai devient avait. EN: avait.", 'a10-erreurs', ["Karim a répondu qu'il n'avait pas le temps."]),
        tI('Rapporte avec elle m’a conseillé.', 'Sophie, à toi : « Prends le métro. »', "Elle m'a conseillé de prendre le métro.", "Conseiller de + infinitif. EN: de prendre.", 'a10-erreurs', ["Sophie m'a conseillé de prendre le métro."]),
        eS("Il a annoncé que l'agence déménagera en juin.", "Il a annoncé que l'agence déménagerait en juin.", "Le futur devient conditionnel. EN: conditional.", 'a10-erreurs'),
        eS('Elle a promis que rappeler avant midi.', 'Elle a promis de rappeler avant midi.', "Promettre de + infinitif. EN: promettre de.", 'a10-erreurs'),
        lC('Écoute. Qu’est-ce que ce verbe ajoute ?', src(E(1167)).fr, ['une promesse', 'un aveu'], 1, "Avouer : un aveu. EN: an admission.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-relais', label: 'Transmettre', targets: ['relais-incomplet'],
      questions: [
        mc('Un message pour une collègue absente commence par...', ['qui a appelé, et quand', 'ce que tu en penses'], 0, "Qui et quand d'abord. EN: who and when first.", 'a11-plan'),
        mc('La mairie a dit hier « rappelez-moi demain matin ». Tu écris aujourd’hui : elle t’a demandé de la rappeler...', ['demain matin', 'le lendemain matin', 'ce matin'], 2, "Son demain, c'est ton aujourd'hui. EN: her tomorrow is your today.", 'a11-lecture'),
        mc('« Vos plans », dit à Marc par la mairie. Tu écris à Marc :', ['ses plans', 'vos plans', 'tes plans'], 2, "Tu écris à Marc : tes plans. EN: tes plans.", 'a11-scenario'),
        tI('Écris la phrase rapportée en entier.', 'Madame Diallo, hier : « Est-ce que Sophie a reçu mes photos ? » Commence par : Elle voulait savoir...', 'Elle voulait savoir si Sophie avait reçu ses photos.', "Si, avait reçu, ses photos. EN: si plus pluperfect.", 'a11-lecture'),
        tI('Écris la phrase rapportée en entier, pour Marc.', 'Isabelle, hier, à Marc : « Je vous donnerai ma réponse vendredi. » Commence par : Elle a dit...', "Elle a dit qu'elle te donnerait sa réponse vendredi.", "Je devient elle, vous devient te, donnerai devient donnerait. EN: three moves.", 'a11-mission'),
        tI('Écris la phrase rapportée en entier, pour Marc.', 'Isabelle, hier, à Marc : « Qu’est-ce que vous pensez d’une visite ? » Commence par : Elle a demandé...', "Elle a demandé ce que tu pensais d'une visite.", "Ce que, tu, pensais. EN: ce que, tu, imparfait.", 'a11-scenario'),
        eS('Elle a demandé est-ce que tu pouvais envoyer le budget.', 'Elle a demandé si tu pouvais envoyer le budget.', "Est-ce que devient si. EN: si.", 'a11-plan'),
        lC('Écoute. Cette phrase peut-elle ouvrir un message pour une collègue ?', src(E(1179)).fr, ['oui', 'non'], 0, "Qui, d'où, et à quelle heure. EN: who, from where, when.", 'a11-cheat'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'dire que', back: 'que ne tombe jamais', say: src(E(1007)).fr },
    { front: 'mon, dans ta bouche', back: 'son, sa, ses', say: src(E(1017)).fr },
    { front: 'une question oui ou non', back: 'si, sans est-ce que', say: src(E(1037)).fr },
    { front: "qu'est-ce que, rapporté", back: 'ce que', say: src(E(1058)).fr },
    { front: 'un ordre, rapporté', back: 'de + infinitif', say: src(E(1073)).fr },
    { front: 'le présent, après a dit', back: "l'imparfait", say: src(E(1089)).fr },
    { front: 'le passé composé, après a dit', back: 'le plus-que-parfait', say: src(E(1109)).fr },
    { front: 'le futur, après a dit', back: 'le conditionnel', say: src(E(1128)).fr },
    { front: 'demain, un autre jour', back: 'le lendemain', say: src(E(1145)).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Le discours indirect, en résumé',
  body: `${REFRAME} Tu passes un message au présent et au passé, avec les bonnes personnes, les bons temps et les bons repères, et tu sais rapporter une question et une demande. La prochaine leçon change de sujet et va plus loin avec la négation : ne... plus, ne... jamais, ne... que, personne, rien. EN: Next lesson: advanced negation.`,
  points: [
    'Dire que : que ne tombe jamais, et les personnes suivent qui parle.',
    'Si pour oui ou non, ce que pour qu’est-ce que, de pour une demande.',
    'Après a dit : imparfait, plus-que-parfait, conditionnel.',
    'Les mots du temps bougent seulement si le jour a changé.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['discours', 'decalage', 'reperes'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Transmettre un message',
    opener: {
      line: "Marc était absent, et la boîte vocale a gardé un message pour lui : à toi de le lui passer. EN: Marc was away and the voicemail kept a message for him: it is your turn to pass it on.",
      imageRef: 'lessons/discours-indirect/act11.jpg',
    },
    sections: [],
    milestone: "Tu as transmis ton propre message et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You passed on your own message and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 120,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-si', 'a11-quiz/r6-imparfait', 'a11-quiz/r9-reperes'],
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
  { id: 'd-relais', title: 'Les mots de départ, ou le message', format: 'sort' as const, coach: "Deux piles. Demande-toi qui parle dans chaque phrase : la personne de départ, ou toi qui passes le message. EN: sort by who is speaking.", buckets: ['les mots de départ', 'le message rapporté'], items: [E(1000), E(1001), E(1002), E(1003), E(1090), E(1089)], audio: AUDIO },
  { id: 'd-pronoms', title: 'Qui parle maintenant', format: 'mcq' as const, coach: "Avant chaque pronom, demande-toi qui parle maintenant, et à qui. EN: ask who is speaking now, and to whom.", q: "Nadia : « Je n'ai pas mes clés. » Elle dit qu'elle n'a pas ... clés.", opts: ['mes', 'ses'], correct: 1, why: "Ce sont les clés de Nadia : ses. EN: her keys, ses.", items: [E(1017), E(1019), E(1021), E(1023), E(1028), E(1031)], audio: AUDIO },
  { id: 'd-si', title: 'Si, sans est-ce que', format: 'mcq' as const, coach: "Une question oui ou non devient si, et le point d'interrogation disparaît. EN: si, and no question mark.", q: 'Il demande ... tu es libre jeudi.', opts: ['si', 'que'], correct: 0, why: 'Oui ou non : si. EN: yes or no, so si.', items: [E(1037), E(1038), E(1039), E(1040), E(1043), E(1048)], audio: AUDIO },
  { id: 'd-ce-que', title: 'Ce que ou ce qui', format: 'sort' as const, coach: "Deux piles. Si la chose fait l'action, ce qui ; si quelqu'un d'autre la fait, ce que. EN: ce qui if the thing is the subject.", buckets: ['ce que', 'ce qui'], items: [E(1058), E(1060), E(1059), E(1061), E(1065), E(1116)], audio: AUDIO },
  { id: 'd-ordre', title: 'De, puis l’infinitif', format: 'mcq' as const, coach: "Un ordre passe avec de et l'infinitif, jamais avec que. EN: an order takes de and the infinitive.", q: 'Rappelle-moi. Il te demande ... le rappeler.', opts: ['que', 'de'], correct: 1, why: "De + infinitif. EN: de plus infinitive.", items: [E(1073), E(1074), E(1075), E(1077), E(1079), E(1081)], audio: AUDIO },
  { id: 'd-imparfait', title: 'Le présent recule', format: 'mcq' as const, coach: "Regarde le verbe qui rapporte. S'il est au passé, le présent passe à l'imparfait. EN: past reporting verb, so imparfait.", q: "Karim a dit qu'il ... malade.", opts: ['était', 'est'], correct: 0, why: "A dit, donc était. EN: a dit, so était.", items: [E(1089), E(1091), E(1093), E(1094), E(1095), E(1104)], audio: AUDIO },
  { id: 'd-pqp', title: 'Avait ou était', format: 'mcq' as const, coach: "Garde l'auxiliaire du passé composé et mets-le à l'imparfait. Le participe ne bouge pas. EN: same auxiliary, in the imparfait.", q: "Il a dit qu'il ... perdu son téléphone.", opts: ['avait', 'a'], correct: 0, why: "Ai perdu devient avait perdu. EN: avait perdu.", items: [E(1109), E(1110), E(1111), E(1112), E(1113), E(1119)], audio: AUDIO },
  { id: 'd-conditionnel', title: 'Sera devient serait', format: 'mcq' as const, coach: "Après a dit, le futur passe au conditionnel, avec le même radical. EN: future to conditional, same stem.", q: "Il a dit qu'il nous ... .", opts: ['rappellera', 'rappellerait'], correct: 1, why: "Le conditionnel, vu du passé. EN: the conditional.", items: [E(1128), E(1129), E(1130), E(1132), E(1133), E(1137)], audio: AUDIO },
  { id: 'd-reperes', title: 'Le même jour, ou un autre', format: 'sort' as const, coach: "Deux piles. Le jour a-t-il changé entre la conversation et le moment où tu parles ? EN: sort by whether the day has changed.", buckets: ['le même jour', 'un autre jour'], items: [E(1155), E(1001), E(1029), E(1145), E(1146), E(1148)], audio: AUDIO },
  { id: 'd-verbes', title: 'Le verbe et le ton', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute et dis quel ton le verbe ajoute : raison, nouvelle, promesse, aveu. EN: read each aloud and name the tone.", items: [E(1161), E(1162), E(1163), E(1164), E(1167), E(1170)], audio: AUDIO },
  { id: 'd-relais-final', title: 'Un message complet', format: 'flashcard' as const, coach: "Lis les six phrases dans l'ordre : elles font un message entier. Qui, quoi, et ce qu'il faut faire. EN: read them in order; together they make a full message.", items: [E(1179), E(1180), E(1181), E(1183), E(1185), E(1186)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'mots-recopies', description: 'Repeats the original words when passing a message on, keeping the speaker’s je and mon, or drops que after dire the way English drops that.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-relais', retest: 'd-relais' },
  { id: 'pronom-fige', description: 'Leaves pronouns and possessives where the original speaker put them instead of moving them to the new speaker and listener.', detectOn: ['a2-construire', 'a2-choisir', 'a2-erreurs', 'a11-mission'], drill: 'd-pronoms', retest: 'd-pronoms' },
  { id: 'question-gardee', description: 'Keeps est-ce que, inversion or the question mark in a reported yes/no question, uses que instead of si, or elides si before elle.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-si', retest: 'd-si' },
  { id: 'quest-ce-que-garde', description: "Keeps qu'est-ce que or est-ce que after a question word, inverts a pronoun subject, or confuses ce que and ce qui.", detectOn: ['a4-construire', 'a4-choisir', 'a4-erreurs', 'a11-mission'], drill: 'd-ce-que', retest: 'd-ce-que' },
  { id: 'ordre-avec-que', description: 'Reports an order with que and a conjugated verb or keeps the imperative, instead of de plus the infinitive, or splits ne pas.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-ordre', retest: 'd-ordre' },
  { id: 'present-garde', description: 'Keeps the present after a past reporting verb in writing, or pushes an imparfait further back that should stay put.', detectOn: ['a6-construire', 'a6-choisir', 'a6-erreurs', 'a11-mission'], drill: 'd-imparfait', retest: 'd-imparfait' },
  { id: 'pc-garde', description: 'Keeps the passé composé after a past reporting verb, uses the imparfait for a finished event, or builds the pluperfect with the wrong auxiliary or no agreement.', detectOn: ['a7-construire', 'a7-choisir', 'a7-piege', 'a11-mission'], drill: 'd-pqp', retest: 'd-pqp' },
  { id: 'futur-garde', description: 'Keeps the future (or va + infinitive) after a past reporting verb, or builds the conditional on the infinitive instead of the future stem.', detectOn: ['a8-construire', 'a8-choisir', 'a8-erreurs', 'a11-mission'], drill: 'd-conditionnel', retest: 'd-conditionnel' },
  { id: 'reperes-figes', description: 'Keeps demain, hier or ici when the day or place has changed, or shifts them when the message is passed on the same day.', detectOn: ['a9-construire', 'a9-choisir', 'a9-piege', 'a11-mission'], drill: 'd-reperes', retest: 'd-reperes' },
  { id: 'verbe-mal-construit', description: 'Uses only dire, or gives a reporting verb the wrong construction (promettre que + infinitive, conseiller que), or forgets that every past reporting verb shifts the tense.', detectOn: ['a10-construire', 'a10-choisir', 'a10-erreurs', 'a11-mission'], drill: 'd-verbes', retest: 'd-verbes' },
  { id: 'relais-incomplet', description: 'Writes a relayed message that leaves out who called, what they want or what has to be done, or mixes direct and reported speech.', detectOn: ['a11-lecture', 'a11-plan', 'a11-mission'], drill: 'd-relais-final', retest: 'd-relais-final' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-personnes', 'Dire que et les personnes', ['dire que', 'les pronoms', 'les possessifs'], [
    teach('sheet-personnes-teach', 'Que, toujours, et qui parle maintenant',
      "Pour rapporter une information, tu mets un verbe comme dire, puis que, puis la phrase. Que ne tombe jamais. Ensuite, les personnes suivent la personne qui parle maintenant : le je de Karim devient il dans ta bouche, et la personne à qui tu parles devient tu. EN: que is never dropped, and the persons follow whoever is speaking now."),
    table('sheet-personnes-table', 'Karim parle, puis tu racontes à Sophie', ['Karim dit', 'Tu dis à Sophie'], [
      ['Je suis malade.', 'Il dit qu’il est malade.'],
      ['Mon train part à dix heures.', 'Il dit que son train part à dix heures.'],
      ['Je t’appelle ce soir.', 'Il dit qu’il m’appelle ce soir.'],
      ['Dis à Sophie que je l’attends.', 'Il dit qu’il t’attend.'],
      ['Nous aimons notre bureau.', 'Ils disent qu’ils aiment leur bureau.'],
      ['Sophie, j’ai reçu vos plans.', 'Il dit qu’il a reçu tes plans.'],
    ]),
    table('sheet-personnes-possessifs', 'Les petits mots qui changent', ['Au départ', 'Rapporté'], [
      ['je, me, moi', 'il ou elle, le, la, lui'],
      ['mon, ma, mes', 'son, sa, ses'],
      ['nous, notre, nos', 'ils ou elles, leur, leurs'],
      ['tu, te (quand c’était toi)', 'je, me'],
      ['ton, ta, tes (quand c’était toi)', 'mon, ma, mes'],
      ['vous (à la personne qui écoute)', 'tu, te'],
    ]),
    teach('sheet-personnes-a224', 'Le ou lui, comme avant',
      `Quand je devient il, le petit pronom suit la règle que tu connais. ${Cap(INDIRECT_OBJ_REF)} : « ${A224_REFRAME} » En français : « ${A224_REFRAME_FR} » Appelle-moi devient il te demande de l'appeler, mais écris-moi devient il te demande de lui écrire. ${Cap(POSSESSIFS_REF)} t'a donné son, sa, ses. EN: the object pronoun follows the usual le or lui rule.`),
  ]),
  sheet('sheet-questions', 'Questions et demandes rapportées', ['si', 'les mots de question', 'ce que et ce qui', 'dire de'], [
    teach('sheet-questions-teach', 'Plus de question, plus de point d’interrogation',
      `Une question rapportée n'est plus une question : c'est une information sur une question. Est-ce que disparaît, le sujet revient devant le verbe, et le point final remplace le point d'interrogation. Oui ou non devient si. Un mot de question reste. Qu'est-ce que devient ce que. ${Cap(CE_QUE_REF)} l'a dit : « ${B113_REFRAME} » EN: a reported question is a statement about a question.`),
    table('sheet-questions-table', 'Question directe, question rapportée', ['Question', 'Rapportée'], [
      ['Est-ce que tu es libre jeudi ?', 'Il demande si tu es libre jeudi.'],
      ['Est-ce qu’il peut venir ?', 'Il veut savoir s’il peut venir.'],
      ['Où est-ce que tu habites ?', 'Elle demande où tu habites.'],
      ['Quand est-ce que tu pars ?', 'Il demande quand tu pars.'],
      ['Qu’est-ce que tu fais ce soir ?', 'Elle demande ce que tu fais ce soir.'],
      ['Qu’est-ce qui se passe ?', 'Elle demande ce qui se passe.'],
      ['Qui a appelé ?', 'Elle veut savoir qui a appelé.'],
      ['À quelle heure est-ce que tu finis ?', 'Il demande à quelle heure tu finis.'],
    ]),
    teach('sheet-questions-si', 'Ce si-là accepte le futur',
      `${Cap(FUTUR_USAGE_REF)} a dit : « ${B107_REFRAME} » C'est vrai pour le si d'une condition (if). Le si d'une question rapportée veut dire whether, et il accepte le futur : je ne sais pas si elle viendra. Et si devient s' seulement devant il et ils. EN: the si of a reported question means whether and takes the future.`),
    table('sheet-questions-ordres', 'Demandes et ordres rapportés', ['Ordre', 'Rapporté'], [
      ['Rappelle-moi avant midi.', 'Il te demande de le rappeler avant midi.'],
      ['N’utilisez pas l’évier.', 'Il dit de ne pas utiliser l’évier.'],
      ['Ne t’inquiète pas.', 'Il me dit de ne pas m’inquiéter.'],
      ['Apporte les plans.', 'Elle te dit d’apporter les plans.'],
      ['Reposez-vous.', 'Le médecin lui conseille de se reposer.'],
      ['Fermez la porte.', 'Elle nous demande de fermer la porte.'],
    ]),
    teach('sheet-questions-inversion', 'Et l’inversion',
      "Avec un pronom sujet, jamais d'inversion : elle demande où tu habites, pas où habites-tu. Avec un nom sujet, tu liras parfois le nom après le verbe : elle a demandé où se trouvaient les toilettes. C'est permis, c'est du style, et tu n'as pas besoin de le faire. EN: never invert a pronoun subject; a noun subject may follow the verb in writing."),
  ]),
  sheet('sheet-decalage', 'Le décalage des temps', ['après il dit', 'après il a dit', 'le plus-que-parfait', 'ce qui ne bouge pas'], [
    teach('sheet-decalage-teach', 'Le verbe qui rapporte décide',
      `Après il dit, au présent, aucun temps ne bouge. Après il a dit, il expliquait ou il avait dit, le message recule : le présent passe à l'imparfait, le passé composé au plus-que-parfait, le futur au conditionnel. ${Cap(IMP_USE_REF)} : « ${B102_REFRAME} » EN: after a past reporting verb the tenses move back one step.`),
    table('sheet-decalage-table', 'Après un verbe au passé', ['On a dit', 'Tu rapportes'], [
      ['présent : je suis malade', 'imparfait : il a dit qu’il était malade'],
      ['passé composé : j’ai perdu mon téléphone', 'plus-que-parfait : il a dit qu’il avait perdu son téléphone'],
      ['futur : je rappellerai', 'conditionnel : il a dit qu’il rappellerait'],
      ['aller + infinitif : je vais déménager', 'allait + infinitif : elle a dit qu’elle allait déménager'],
      ['venir de : je viens de partir', 'venait de : il a dit qu’il venait de partir'],
      ['imparfait : il faisait froid', 'ne bouge pas : elle a dit qu’il faisait froid'],
      ['conditionnel : ce serait une bonne idée', 'ne bouge pas : il a dit que ce serait une bonne idée'],
      ['plus-que-parfait : j’étais déjà parti', 'ne bouge pas : il a dit qu’il était déjà parti'],
    ]),
    table('sheet-decalage-pqp', 'Le plus-que-parfait', ['Passé composé', 'Plus-que-parfait'], [
      ['j’ai fini', 'il avait fini'],
      ['j’ai perdu mon téléphone', 'il avait perdu son téléphone'],
      ['je suis parti', 'il était parti'],
      ['je suis arrivée', 'elle était arrivée'],
      ['je me suis trompée de salle', 'elle s’était trompée de salle'],
      ['je n’ai pas compris', 'il n’avait pas compris'],
    ]),
    teach('sheet-decalage-pqp-teach', 'Un passé composé, un cran plus loin',
      `Le plus-que-parfait se construit comme le passé composé. ${Cap(PC_ETRE_REF)} : « ${A221_REFRAME} » En français : « ${A221_REFRAME_FR} » Seul l'auxiliaire change : il passe à l'imparfait, que ${IMP_FORM_REF} t'a appris à former. Avoir devient avait, être devient était, et le participe reste le même, avec son accord. EN: the pluperfect is the passé composé with its auxiliary in the imparfait.`),
    teach('sheet-decalage-verite', 'Deux cas où le présent peut rester',
      "Une vérité générale peut garder le présent : le prof a dit que l'eau bout à cent degrés. Et à l'oral, si la chose est encore vraie aujourd'hui, beaucoup de gens gardent le présent : il m'a dit qu'il habite à Laval. À l'écrit, fais le décalage. EN: a general truth may stay present; in writing, shift."),
  ]),
  sheet('sheet-reperes', 'Les mots du temps et du lieu', ['le même jour', 'un autre jour', 'ici et là'], [
    teach('sheet-reperes-teach', 'Demande-toi si le jour a changé',
      "Les mots du temps comptent à partir du jour où on parle. Si tu rapportes le même jour, demain reste demain. Si le jour a changé, demain devient le lendemain, parce que ce demain-là est peut-être déjà passé. Et si tu n'es plus au même endroit, ici devient là. EN: time words move only when the day has changed."),
    table('sheet-reperes-table', 'Quand le jour a changé', ['On a dit', 'Tu rapportes'], [
      ['aujourd’hui', 'ce jour-là'],
      ['demain', 'le lendemain'],
      ['après-demain', 'le surlendemain'],
      ['hier', 'la veille'],
      ['ce matin', 'ce matin-là'],
      ['maintenant', 'à ce moment-là'],
      ['la semaine prochaine', 'la semaine suivante'],
      ['la semaine dernière', 'la semaine précédente'],
      ['dans deux jours', 'deux jours plus tard'],
      ['il y a deux jours', 'deux jours plus tôt'],
      ['ici', 'là'],
    ]),
    teach('sheet-reperes-lendemain', 'Le lendemain d’un message',
      "Un message laissé hier pour demain matin parle de ce matin, aujourd'hui. Si tu le passes à ta collègue le jour suivant, écris : elle t'a demandé de la rappeler ce matin. Compte depuis ton jour à toi. EN: a message left yesterday about tomorrow is about today."),
  ]),
  sheet('sheet-verbes', 'Les verbes et le message', ['les verbes introducteurs', 'les constructions', 'la liste du message'], [
    teach('sheet-verbes-teach', 'Chaque verbe dit comment c’était dit',
      "Dire donne le message et rien de plus. Expliquer donne une raison, répondre suit une question, annoncer donne une nouvelle, promettre engage la personne, avouer dit une chose difficile, ajouter et préciser complètent. Tous prennent que, sauf pour un ordre ou une promesse avec un infinitif. EN: each reporting verb says how it was said."),
    table('sheet-verbes-table', 'Les verbes et leur construction', ['Verbe', 'Construction', 'Exemple'], [
      ['dire', 'que, ou de + infinitif', 'Il dit qu’il vient. Il dit de venir.'],
      ['demander', 'si, où, ce que, ou de + infinitif', 'Elle demande si tu viens.'],
      ['expliquer', 'que', 'Elle a expliqué que le bureau fermait à dix-huit heures.'],
      ['répondre', 'que', 'Il a répondu qu’il n’avait pas le temps.'],
      ['annoncer', 'que', 'Le directeur a annoncé que l’agence déménageait.'],
      ['promettre', 'de + infinitif, ou que', 'Elle a promis de rappeler. Il a promis qu’il viendrait.'],
      ['affirmer', 'que', 'Elle a affirmé qu’elle n’avait rien vu.'],
      ['avouer', 'que', 'Il a avoué qu’il avait oublié le rendez-vous.'],
      ['ajouter, préciser', 'que', 'Elle a ajouté qu’elle serait absente lundi.'],
      ['conseiller', 'de + infinitif', 'Elle m’a conseillé de prendre le métro.'],
    ]),
    table('sheet-verbes-liste', 'La liste de contrôle du message', ['À vérifier', 'Comment'], [
      ['Qui a appelé, et quand', 'le nom, le jour, l’heure'],
      ['Les personnes', 'je devient il ou elle, vous devient tu'],
      ['Les temps', 'après a dit : imparfait, plus-que-parfait, conditionnel'],
      ['Les questions', 'si, où, quand, ce que, sans est-ce que'],
      ['Les demandes', 'de + infinitif'],
      ['Les mots du temps', 'compte depuis ton jour à toi'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-19-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-19-note': "Julien's note on Sophie's desk (act 1), ONE VOICE, one take, a Montréal colleague reading a note aloud to himself: ordinary pace, no performance. Every « dit que », « demande si » and « dit de » is read flat, because the learner is meant to find them, not be shown them.",
  'rec-b1-19-cles': "Julien's phone call and the relay to Sophie (act 2), THREE VOICES: Julien on a slightly compressed phone line, the learner, and Sophie in the room. One take. Julien's two lines and the learner's two lines must be clearly different in sound, so the learner hears the same message in two mouths.",
  'rec-b1-19-pronoms': "The four person cards. Never stress the pronoun or the possessive: « son », « ses », « leur », « me » are said as lightly as in speech, because the point is that they changed, not that they are loud.",
  'rec-b1-19-si-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at ordinary office speed. Every line ends on a FALLING statement melody, never a rising question one: the whole point is that a reported question is not a question any more. Say « s'il » and « si elle » exactly as written.",
  'rec-b1-19-si': "The four si cards. Statement melody throughout, falling at the end. On card four read « elle viendra » plainly, with no hesitation, so the future after si sounds as normal as it is.",
  'rec-b1-19-piege-si': "The audio step plays each card's CORRECT sentence. Read the six plainly, identically in pace and with a falling statement melody; the wrong versions in promptSound are never spoken.",
  'rec-b1-19-mots-ecoute': "REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, TWO VOICES alternating in authored order. Voice A reads the four direct questions with a real question melody; voice B reads the four relays as flat statements that fall at the end. The contrast in melody is what question four asks about, so do not level it out.",
  'rec-b1-19-mots': "The four question-word cards. Statement melody throughout. « ce que » and « ce qui » are unstressed, as in speech.",
  'rec-b1-19-plombier': "The plumber and the relay (act 5), THREE VOICES: the plumber (Québécois, practical, a little rushed, says « vous »), the learner, and Sophie. One take. The plumber's imperative is a real instruction, firm but friendly; the learner's relay is calm and flat.",
  'rec-b1-19-ordre': "The four order cards. « de » and « ne pas » are unstressed and run straight into the infinitive, as in speech; never pause between « de » and the verb.",
  'rec-b1-19-piege-ordre': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-19-hier-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE (Julien, Montréal), in authored order, ordinary speed. The imparfait endings (-ait, -aient) are clean [ɛ] with no audible t. No stress on the reporting verb.",
  'rec-b1-19-recul': "The four shift cards. Read card one (« Il dit que la route est fermée ») and card two (« Ils ont dit que la route était fermée ») at the same pace, so the only thing the ear notices is est against était.",
  'rec-b1-19-vendredi': "Friday told on Monday (act 7), TWO VOICES: Sophie and the learner, plus a narrator for the one line that quotes Julien. One take. Every « avait » and « était » is said lightly and joined to its participle as one group (« a-veh-pehr-DÜ »), never stressed.",
  'rec-b1-19-pqp': "The four pluperfect cards. Read « avait perdu », « avaient visité », « était arrivée », « s'était trompée » each as ONE group with the stress on the participle's last syllable. On card three let the final e of arrivée be silent, as it is; the agreement is for the eye.",
  'rec-b1-19-piege-pqp': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-19-futur-ecoute': "REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, ordinary speed. The conditional endings (-rait, -raient) must be clean [ʁɛ], clearly distinct from a future [ʁa] or [ʁe]; that is the sound the whole act is about.",
  'rec-b1-19-futur': "The four future-to-conditional cards. Read the conditional as a plain future-in-the-past, with no doubt in the voice: it is not a hypothesis here, and a hesitant delivery would teach the wrong meaning.",
  'rec-b1-19-gare': "The message about Luc (act 9), ONE VOICE, one take, a Swiss or Montréal voice telling a friend a small story: warm, unhurried, with a slight smile on the last two sentences. The time words (la veille, le lendemain, ce jour-là, la semaine suivante) are said plainly and never stressed.",
  'rec-b1-19-reperes': "The four time-word cards. Card four must sound as ordinary as the other three: « demain » staying « demain » is the rule, not an exception.",
  'rec-b1-19-piege-reperes': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-19-verbes-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, as someone summing up a Monday meeting to a colleague. The reporting verbs (expliqué, répondu, annoncé, promis, affirmé, avoué, conseillé) are clear but not stressed.",
  'rec-b1-19-verbes': "The four reporting-verb cards. Let the delivery hint at the tone without acting it: card four (« avoué ») a shade quieter, never theatrical.",
  'rec-b1-19-relais': "Julien's written message to Sophie (act 11), ONE VOICE, one take, read the way a colleague reads a note aloud: clear, a beat between sentences, no drama. It is the shape the learner imitates in the task, so the order (who called, what she said, what she asked, what to do) must be audible as blocks.",
  'rec-b1-19-dire': "The four dire que cards. Read « que » and « qu' » lightly, never stressed, exactly as in speech; card two exists to show that que is always there, and stressing it would make it sound optional.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 19',
  intro: 'You can already say what happened and what will happen. This lesson is about passing on what somebody else said: a phone message, a question, a request, a conversation from last week. The words stay the same; who is speaking, and on what day, does not. So the persons move, the tenses move back after a past verb, and the time words move once the day has changed.',
  skill: 'PE',
  grammarAssumed: [
    POSSESSIFS_UNIT, QUESTIONS_UNIT, INTERROGATIFS_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, PRONOMINAL_PC_UNIT,
    PARTICIPLE_UNIT, DIRECT_OBJ_UNIT, INDIRECT_OBJ_UNIT, FUTUR_PROCHE_UNIT, IMP_FORM_UNIT, IMP_USE_UNIT,
    FUTUR_UNIT, FUTUR_USAGE_UNIT, CONDITIONNEL_UNIT, SI_UNIT, CE_QUE_UNIT,
  ],
  grammarIntroduced: [
    'Indirect (reported) speech with dire que and other reporting verbs, with que never omitted, and the person and possessive shift to the new speaker',
    'Reported yes/no questions with si (s’il, s’ils; the future allowed after this si) and reported wh-questions, with qu’est-ce que becoming ce que, qu’est-ce qui becoming ce qui, and no est-ce que or subject-pronoun inversion',
    'Reported commands with dire, demander or conseiller à quelqu’un de + infinitive, including de ne pas + infinitive',
    'The sequence of tenses after a past reporting verb: présent to imparfait, passé composé to plus-que-parfait, futur to conditionnel présent, aller + infinitive to allait + infinitive; imparfait and conditionnel unchanged',
    'The plus-que-parfait, produced for the first time in B1, as the reported form of a passé composé (imparfait of avoir or être plus the participle, with agreement after être)',
    'Time and place expressions in reported speech (le lendemain, la veille, ce jour-là, la semaine suivante, là), shifted only when the day has changed',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà dire ce qui s'est passé et ce qui va arriver. Cette leçon t'apprend à passer ce qu'une autre personne a dit : un message au téléphone, une question, une demande, une conversation de la semaine dernière. Les mots restent, mais la personne qui parle et le jour changent. Alors les pronoms bougent, les temps reculent après un verbe au passé, et les mots du temps changent quand le jour a changé.",
    minutes: 130,
    difficulty: 3,
    glyph: 'que',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: DISCOURS_INDIRECT_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every other B1 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, NOTE_TEXT, GARE_TEXT, RELAIS_TEXT, TASK_VOICEMAIL, dicteeFor };
