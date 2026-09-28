// b1.17.l1 « L'ordre des pronoms » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// IS in `schema.ts` now (2026-09-25), `validateSection` enforces its rubric,
// model answer and watchFor rules, and `TaskView.tsx` renders it, so
// `sections` is a plain `LessonSection[]` and the validators run on `LESSON`
// itself. There is no `lessonWithoutTask()` shim in this file and the draft
// type in `_task-section.ts` is not imported.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the order), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  La file mal rangée        7   two little words, and the order is not free
//    2  Une seule file            8   the five places, named and counted
//    3  La chose, puis la personne 8  le la les before lui leur
//    4  Moi d'abord                8  me te nous vous before le la les
//    5  y et en, les deux dernières 8 y fourth, en always last
//    6  À l’impératif              8  the affirmative order: behind, hyphenated, moi
//    7  Rien ne bouge              7  the negative order keeps the ordinary file
//    8  Au passé composé           8  in front of the auxiliary, and the agreement
//    9  Avec un deuxième verbe     7  the file lands on the infinitive
//   10  Ce qu'on entend            7  elision and liaison make the block audible
//   11  Tout ensemble             11  model, plan, role play, TASK, quiz, roundup
//
//   TOTAL 87 missions, 11 acts. Corpus: 198 authored rows in eleven blocks
//   plus 37 reused seed rows, released act by act through `deckTranche`.
//   Chapter artwork: `ordre-pronoms-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Les petits mots font une seule file, toujours collée au verbe. »
//   EN: The little words form one single queue, always glued to its verb.
//
//   ONE METAPHOR, THE QUEUE, everywhere: la file, les places, la bascule.
//   It is NOT a table, and it is deliberately not stated as « direct before
//   indirect », which act 4 spends itself contradicting (corpus §D says why).
//   The queue survives the imperative: act 6 changes the order INSIDE the
//   file and moves it behind the verb, and it is still one file, still glued.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    where the little words go when there is more than one: the five
//           places, the affirmative and negative imperative, the passé
//           composé, the infinitive, and the elision and liaison that make
//           the block audible.
//   QUOTES  a2.06, a2.24 and a2.25's reframes, imported and never retyped,
//           each shown as the English original followed by a French
//           rendering; b1.11's reframe, once, on the card that separates
//           relatives from object pronouns.
//   LEAVES  relative pronouns to b1.11, b1.12 and b1.13, which already own
//           them; what each pronoun MEANS to a2.06, a2.24 and a2.25;
//           stressed pronouns to nobody yet, since only the affirmative
//           imperative forces one here.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (the landlord and the pharmacist say « vous »). Every
//   learner surface that explains something carries English (`en`, or a
//   final « EN: »), and no ANSWER ever carries an « EN: » tail. Every `say`
//   is French, spoken fr-FR. Theme `pronoms-essentiels`. A2 citations use
//   the English trail label; b1.* ones are French until those units exist.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. NO UNIT OWNS THE IMPERATIVE. There is no A1 or A2 lesson on forming
//      a command: learners meet « excusez-moi » and « dépêche-toi » as
//      vocabulary and never as a form. Acts 6 and 7 therefore teach the
//      PLACEMENT of pronouns on a form nothing has taught, and they assume
//      the bare verb shape without explaining it. Should a b1 unit own the
//      imperative, or should acts 6 and 7 carry one extra card on forming
//      it?
//   2. THE AFFIRMATIVE IMPERATIVE IS THE ONLY PLACE « moi » AND « toi »
//      APPEAR. Stressed pronouns (avec moi, chez toi) are not taught by any
//      unit either. This lesson names them only as what me and te become.
//      Leave it, or flag a stressed-pronoun unit for the B1 sequence?
//   3. THE FILE IS SHOWN AS A TABLE IN ONE REFERENCE SHEET ONLY, and never
//      in the flow. The flow teaches it as a counted queue (a tapTable of
//      six rows in act 2, one row per place plus the verb). Confirm that is
//      the right split, because the five-column grid is what every textbook
//      prints and what learners will have seen elsewhere.
//   4. THREE tapTables, one each in acts 2, 6 and 8. The pilot brief allows
//      one per LESSON, the four shipped lessons run 2 to 7, and the playbook
//      settles on three. Confirm the looser rule.
//   5. REGIONAL MIX: the act 1 flat-share is Montréal, act 5's pharmacy is
//      Brussels, act 9's repair shop is Lyon, and « courriel » appears once.
//      Fine?
//   6. « je le lui ai donné » IS A REAL SENTENCE AND A HARD ONE TO HEAR.
//      Act 10 teaches the block as a sound, not as spelling. Is a recorded
//      voice essential there, or is device TTS good enough for the first
//      review?
//   7. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5), and
//      it is inert at runtime (schema.ts, LessonAudio). Kept and raised.
//   8. THE TASK IS WRITTEN (PE, 90 to 130 words). The unit outcome is a
//      written message where the pronouns do real work. Should b1.17 also
//      carry a SPOKEN task, since the affirmative imperative is something
//      you say rather than write?
//   9. RESOLVED. The task section is `layer: 'core'` like every other section.
//      It was briefly 'more' because `core-words` caps an authored field at 45
//      words while a task's `modelAnswer` is contractually 90 to 150, being
//      the yardstick the offline self-check measures against. 'task' is now in
//      `PASSAGE_SECTIONS` (density.logic.ts) beside reading, progressCheck and
//      roundup, which is where a passage belongs. b1.18 hit the same wall and
//      reached the same conclusion independently.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, THE_FILE, THE_FILE_IMP, THE_TEST, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_TEXT, MODEL_TEXT,
  A206_REFRAME, A224_REFRAME, A225_REFRAME,
  A206_REFRAME_FR, A224_REFRAME_FR, A225_REFRAME_FR,
  B111_REFRAME, B111_REFRAME_EN,
  COD_UNIT, COI_UNIT, YEN_UNIT, PC_AVOIR_UNIT, PARTICIPES_UNIT, PC_ETRE_UNIT,
  PRONOMINAL_UNIT, FUTUR_PROCHE_UNIT, MODAUX_UNIT, QUI_QUE_UNIT,
  COD_REF, COI_REF, YEN_REF, PC_AVOIR_REF, PARTICIPES_REF, PRONOMINAL_REF,
  FUTUR_PROCHE_REF, MODAUX_REF, QUI_QUE_REF,
} from './ordre-pronoms-corpus.ts';
import { ORDRE_PRONOMS_TERMS } from './ordre-pronoms-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.17: no item ${id}`);
  return r;
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
 *  ACT 1 — LA FILE MAL RANGÉE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The breakdown is not rudeness and not a misunderstanding: the
 *  sentence simply does not exist in French, and the learner can hear that
 *  it does not. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4): the wrong
 *  order lives in the `choice` and in `break.wrong`, never in a bubble. */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le mot sur la table',
  frSub: 'Premier matin en colocation',
  setting: { place: 'Une colocation, rue Saint-Denis', city: 'Montréal', time: '8 h 10', ambience: 'des cartons dans le couloir, la bouilloire qui chauffe' },
  beats: [
    {
      kind: 'narration',
      text: "Ton premier matin rue Saint-Denis. Awa te tend une enveloppe pour le propriétaire et deux clés. Elle part travailler dans dix minutes.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Awa',
      fr: 'Le propriétaire passe à midi. L’enveloppe est sur le frigo.',
      en: 'The landlord is coming at noon. The envelope is on the fridge.',
      respell: '[luh pro-pree-ay-TEHR pass a mee-DEE | lahⁿ-VLOP eh sür luh free-GOH]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'D’accord. Je donne l’enveloppe au propriétaire à midi.',
      en: 'All right. I give the envelope to the landlord at noon.',
      respell: '[da-KOR | zhuh DONN lahⁿ-VLOP oh pro-pree-ay-TEHR a mee-DEE]',
      stage: 'Correct, et très long. Tu répètes les deux noms que vous venez de dire.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Awa',
      fr: 'Ici on dit juste : je la lui donne. Deux petits mots, et ça va plus vite.',
      en: 'Here we just say: je la lui donne. Two little words, and it goes faster.',
      respell: '[ee-SEE ohⁿ dee ZHÜST | zhuh la lwee DONN | deu puh-tee MOH ay sa va plü VEET]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Deux petits mots collés au verbe, et tu hésites : la personne d'abord, ou la chose d'abord. Le français a un ordre fixe, et ce n'est pas toujours celui de l'anglais.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu essaies à ton tour. Quelle phrase existe en français ?',
      size: 'lg',
      options: [
        { fr: 'Je lui la donne à midi.', respell: '[zhuh lwee la DONN a mee-DEE]', en: 'I give it to him at noon.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Je la lui donne à midi.', respell: '[zhuh la lwee DONN a mee-DEE]', en: 'I give it to him at noon.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Awa hoche la tête et attrape son manteau. L’enveloppe partira à midi.',
        breaks: 'Awa répète lentement, en détachant : la chose, puis la personne. Tu réessaies.',
      },
    },
    {
      kind: 'break',
      heading: 'La chose passe avant la personne',
      body: "Avec lui et leur, le mot qui remplace l'objet vient toujours en premier. Ce n'est pas une préférence : l'autre ordre n'existe pas en français. EN: With lui and leur, the word standing for the object always comes first; the other order does not exist.",
      wrong: {
        fr: 'Je lui la donne à midi.',
        ipa: '/ʒə lɥi la dɔn a mi.di/',
        respell: '[zhuh lwee la DONN a mee-DEE]',
        en: 'I give it to him at noon.',
      },
      right: {
        fr: 'Je la lui donne à midi.',
        ipa: '/ʒə la lɥi dɔn a mi.di/',
        respell: '[zhuh la lwee DONN a mee-DEE]',
        en: 'I give it to him at noon.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Une place est trouvée. Il en reste quatre, et un ordre qui bascule complètement dès que tu donnes un ordre. C'est le sujet de cette leçon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'chose', 'personne'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Ranger deux petits mots dans le bon ordre', s: 'Actes 2 à 5 : les cinq places de la file' },
    { t: 'Donner un ordre sans te tromper de côté', s: 'Actes 6 et 7 : la bascule et le contre-ordre' },
    { t: 'Garder la file au bon endroit dans la phrase', s: 'Actes 8 et 9 : le passé composé et l’infinitif' },
    { t: 'Entendre le bloc quand quelqu’un parle vite', s: 'Acte 10 : l’élision et la liaison' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a note left on a table, where eight pronoun blocks are
 *  already doing their work. Noticing before the rule. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le mot d’Awa',
  frSub: 'Lis, et compte les petits mots',
  text: READING_TEXT,
  glossary: [
    { word: 'l’état des lieux', en: 'the inventory check', note: 'La visite où on note l’état de l’appartement. EN: the walk-through before you move in or out.' },
    { word: 'un reçu', en: 'a receipt', note: 'Le papier qui prouve que tu as donné quelque chose.' },
    { word: 'les doubles', en: 'the spare copies', note: 'Les deuxièmes clés, celles qu’on garde de côté.' },
    { word: 'remettre', en: 'to hand over', note: 'Donner en main propre, pas par la poste.' },
  ],
  questions: [
    { q: 'Dans « donne-la-lui », que remplace la et que remplace lui ?', a: "la remplace l'enveloppe, lui remplace le propriétaire." },
    { q: 'Pourquoi « ne les lui donne pas » n’a-t-il pas de traits d’union ?', a: "Parce que l'ordre est négatif. Les traits d'union n'arrivent qu'à la forme affirmative." },
    { q: 'Combien de petits mots y a-t-il dans « il y en a deux » ?', a: 'Deux : y pour le tiroir, en pour les clés. y passe avant en.' },
    { q: 'Dans « elle me l’a confirmé », devant quel mot se mettent me et l’ ?', a: "Devant a, l'auxiliaire. Jamais devant confirmé." },
  ],
  audio: REC('rec-b1-17-mot'),
  say: REFRAME,
  terms: ['file', 'bloc'],
};

/** BUILD, on the note just read: one little word, or two. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Un petit mot, ou deux',
  frSub: 'Compte avant de traduire',
  groups: [
    grp('Un seul petit mot', [
      it(E(1601), 'lui, et le nom reste'),
      it('fr.a2.internet.215', 'te, et le nom a disparu'),
      it(E(1602), 'aucun : tout est dit en entier'),
    ], chk(
      'Dans ces trois phrases, combien de noms sont encore écrits en entier ?',
      ['Au moins un dans chaque phrase.', 'Aucun, tout est remplacé.'],
      0,
      'Il reste toujours un nom visible. Le remplacement n’est pas fini. EN: a noun is still spelled out in each one.',
    )),
    grp('Deux petits mots, collés', [
      it(E(1600), 'la chose, puis la personne'),
      it(E(1603), 'la personne proche, puis la chose'),
      it(E(1605), 'le lieu, puis la quantité'),
      it('fr.a2.au-restaurant.174', 'vous, puis le'),
    ], chk(
      'Qu’est-ce que ces quatre phrases ont en commun ?',
      ['Les deux petits mots sont séparés par le verbe.', 'Les deux petits mots se touchent, devant le verbe.'],
      1,
      'Ils forment un bloc et rien ne passe entre eux. EN: they touch, and nothing gets in between.',
    )),
    ctl('Et l’ordre', 'Awa écrit « donne-la-lui » et « ne les lui donne pas ». Pourquoi le premier a-t-il des traits d’union ?',
      ['Parce que le verbe est plus court.', 'Parce que la phrase est plus polie.', 'Parce que c’est un ordre affirmatif.'], 2,
      'Un ordre qui dit oui envoie la file derrière le verbe. EN: a command that says yes sends the queue behind.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'bloc'],
};

/** WHY IT MATTERS. Four places where the wrong order costs something real. */
const A1_POURQUOI: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-pourquoi',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Un message à ta colocataire, en trois secondes', fr: 'Je la lui donne à midi.', en: 'I am giving it to him at noon.' },
    { situation: 'Au comptoir, quand on te propose un échange', fr: 'Je vous le remplace tout de suite.', en: 'I will replace it for you right away.' },
    { situation: 'Au téléphone, pour couper court', fr: 'Ne me le demande pas maintenant.', en: 'Do not ask me for it now.' },
    { situation: 'À l’examen oral, quand tu ne veux pas répéter le nom', fr: 'Je le lui rends demain matin.', en: 'I am giving it back to him tomorrow morning.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file'],
};

/** MEET by ear. Eight lines, and the question is only ever how many little
 *  words the ear caught and in which order. `hideLines` or it is a reading
 *  exercise with a play button. */
const A1_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a1-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Combien de petits mots',
  frSub: 'Écoute le bloc, pas les mots',
  lines: [
    ln(E(1600)), ln(E(1603)), ln(E(1605)), ln(E(1607)),
    ln(E(1606)), ln(E(1612)), ln('fr.a2.internet.215'), ln('fr.a2.au-restaurant.174'),
  ],
  questions: [
    { q: 'Première phrase : combien de petits mots avant le verbe ?', opts: ['deux', 'un', 'trois'], correct: 0, why: '« la lui » : la chose, puis la personne. EN: two, thing then person.' },
    { q: 'Quatrième phrase : les petits mots sont devant ou derrière le verbe ?', opts: ['devant', 'derrière'], correct: 1, why: '« donne-les-lui » : c’est un ordre affirmatif. EN: an affirmative command sends them behind.' },
    { q: 'Cinquième phrase : que dit le premier petit mot ?', opts: ['moi', 'la chose'], correct: 0, why: '« ne me le demande pas » : me passe devant. EN: me comes first.' },
    { q: 'Dans quelle phrase entends-tu y et en ensemble ?', opts: ['la deuxième', 'la troisième', 'la sixième'], correct: 1, why: '« il y en a deux » : y à la quatrième place, en à la cinquième. EN: y then en.' },
  ],
  audio: REC('rec-b1-17-compter'),
  say: REFRAME,
  terms: ['file', 'bloc'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Deux mots', 'Quand deux petits mots arrivent devant le même verbe, leur ordre est...',
    ['libre, les deux marchent', 'fixe, et il ne change jamais devant le verbe'], 1,
    'Une seule file, un seul ordre. EN: one queue, one order.'),
  ctl('Le bloc', 'Qu’est-ce qui peut se glisser entre les petits mots et leur verbe ?',
    ['rien du tout', 'un adverbe', 'le sujet'], 0,
    'Ils forment un bloc avec le verbe. EN: they form one block with the verb.'),
  ctl('La bascule', 'Dans « donne-la-lui », pourquoi la file est-elle derrière ?',
    ['parce que c’est un ordre affirmatif', 'parce que le verbe est à l’infinitif'], 0,
    'Seul un ordre qui dit oui fait basculer la file. EN: only an affirmative command flips it.'),
], ['file', 'bloc', 'bascule']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'La file mal rangée',
    opener: {
      line: 'Tu connais chaque petit mot tout seul, et dès qu’il y en a deux tu ne sais plus lequel passe devant. EN: You know each little word on its own, and the moment there are two you no longer know which goes first.',
      imageRef: 'lessons/ordre-pronoms/act01.jpg',
    },
    sections: [],
    milestone: 'Tu repères un bloc de deux petits mots dans une phrase et tu sais qu’il a un ordre. EN: You can spot a block of two little words and you know it has a fixed order.',
    estScreens: 24, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_POURQUOI, A1_ECOUTE, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — UNE SEULE FILE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The teacher counts places on her fingers, which is the whole
 *  mechanic of the act said out loud before any card names it. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Compter sur ses doigts',
  frSub: 'Cinq places, pas une de plus',
  setting: 'Au téléphone avec ta prof de français, à Bruxelles. Tu lui relis les phrases du mot d’Awa.',
  bubbles: [
    { from: 'narrator', fr: 'Tu relis le mot au téléphone. Ta prof compte sur ses doigts.', en: 'You read the note out over the phone. Your teacher counts on her fingers.' },
    { from: 'coach', fr: 'Cinq places, toujours les mêmes. Dis-moi seulement quel numéro tu entends.', en: 'Five places, always the same ones. Just tell me which number you hear.' },
    { from: 'user', fr: 'Je la lui donne. Deuxième place, puis troisième.', en: 'Je la lui donne. Second place, then third.' },
    { from: 'coach', fr: 'C’est ça. Essaie avec celle-ci : tu me les montres.', en: 'That is it. Try this one: tu me les montres.' },
    { from: 'user', fr: 'Première place, puis deuxième. Moi d’abord, la chose ensuite.', en: 'First place, then second. Me first, the thing next.' },
    { from: 'coach', fr: 'Toujours. Et en attend tout le monde : il est cinquième, jamais avant.', en: 'Always. And en waits for everybody: it is fifth, never earlier.', warn: 'en ne passe devant personne' },
  ],
  closing: { fr: 'Cinq places, et chaque petit mot connaît la sienne.', en: 'Five places, and each little word knows its own.' },
  audio: REC('rec-b1-17-doigts'),
  say: REFRAME,
  terms: ['file', 'proche', 'chose'],
};

/** NAME. One place per card, with the pair that shows it working. */
const A2_PLACES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-places',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les cinq places',
  frSub: 'Quatre cartes, cinq places',
  hint: 'Glisse. Regarde le numéro, pas la traduction.',
  audio: REC('rec-b1-17-places'),
  say: REFRAME,
  terms: ['file', 'proche', 'chose'],
  cards: [
    {
      head: 'Place 1 : toi et moi', label: 'me te se nous vous',
      fr: 'Tu me les montres.', sub: '[tü muh lay MOHⁿTR]',
      body: `Quand la personne, c'est toi ou moi, elle ouvre la file. ${Cap(COD_REF)} et ${COI_REF} t'ont donné ces mots un par un. EN: when the person is you or me, that word opens the queue.`,
    },
    {
      head: 'Place 2 : la chose', label: 'le la les',
      fr: 'Je le lui donne.', sub: '[zhuh luh lwee DONN]',
      body: 'Le mot qui remplace l’objet vient juste après, et il passe devant lui et leur. EN: the word standing for the object comes next, and it goes in front of lui and leur.',
    },
    {
      head: 'Place 3 : l’autre personne', label: 'lui leur',
      fr: 'Elle les leur montre.', sub: '[ehl lay luhr MOHⁿTR]',
      body: 'lui et leur disent à qui ça va. Ils attendent que la chose soit passée. EN: lui and leur say who receives it, and they wait until the thing has gone by.',
    },
    {
      head: 'Places 4 et 5 : le lieu, la quantité', label: 'y · en',
      fr: 'Il y en a trois au frigo.', sub: '[ee-lyahⁿ-na TRWA oh free-GOH]',
      body: 'y ferme presque la file, et en la ferme tout à fait. Ces deux-là ne doublent jamais personne. EN: y almost closes the queue and en closes it completely; neither ever overtakes.',
    },
  ],
};

/** NAME, as a lookup: the five places plus the verb they are glued to. The
 *  full grid lives in the sheet. */
const A2_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-tableau',
  layer: 'core',
  sheetId: 'sheet-file',
  title: 'La file, place par place',
  frSub: 'Touche une place pour l’entendre',
  cols: ['Place', 'Les mots', 'Exemple'],
  rows: [
    {
      cells: ['1', 'me te se nous vous', 'Tu me les montres.'],
      say: 'Tu me les montres.',
      detail: { title: 'Première place', body: 'La personne proche ouvre la file, même quand elle reçoit l’objet. EN: the close person opens the queue, even when she is the one receiving.', say: 'Il me le rend ce soir.' },
    },
    {
      cells: ['2', 'le la les', 'Je le lui donne.'],
      say: 'Je le lui donne.',
      detail: { title: 'Deuxième place', body: 'La chose. Elle passe après toi et moi, et avant lui et leur. EN: the thing goes after you and me, and before lui and leur.', say: 'Tu la lui laisses sur la table.' },
    },
    {
      cells: ['3', 'lui leur', 'Elle les leur montre.'],
      say: 'Elle les leur montre.',
      detail: { title: 'Troisième place', body: 'L’autre personne, celle dont on parle. Jamais devant la chose. EN: the other person, the one being talked about, never in front of the thing.', say: 'Je le leur envoie par courriel.' },
    },
    {
      cells: ['4', 'y', 'On les y attend.'],
      say: 'On les y attend.',
      detail: { title: 'Quatrième place', body: 'Le lieu, ou la chose annoncée par à. Il ne double jamais une personne. EN: the place, or whatever à announced; it never overtakes a person.', say: 'Le vendeur nous y conduit.' },
    },
    {
      cells: ['5', 'en', 'Il nous en reste trois.'],
      say: 'Il nous en reste trois.',
      detail: { title: 'Cinquième place', body: 'La quantité, ou la chose annoncée par de. Toujours le dernier de la file. EN: the amount, or whatever de announced; always last in the queue.', say: 'Je t’en apporte demain.' },
    },
    {
      cells: ['le verbe', 'juste derrière', 'Elle s’en occupe elle-même.'],
      say: 'Elle s’en occupe elle-même.',
      detail: { title: 'Et le verbe', body: 'Le verbe conjugué se colle au bout de la file. Rien ne se glisse entre les deux. EN: the conjugated verb sticks to the end of the queue and nothing gets in between.', say: 'Nous vous le confirmons par écrit.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'bloc'],
};

/** NAME, as sentences: five real lines, one per pairing. */
const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Cinq paires, cinq phrases',
  examples: [
    ex(E(1618), 'places 1 et 2 : me, puis le'),
    ex(E(1621), 'places 2 et 3 : le, puis leur'),
    ex(E(1625), 'places 1 et 5 : te, puis en'),
    ex(E(1623), 'places 2 et 4 : les, puis y'),
    ex(E(1633), 'places 4 et 5 : y, puis en'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file'],
};

/** BUILD. Sort by place number rather than by meaning. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Range-les par numéro',
  frSub: 'Le numéro, pas la traduction',
  groups: [
    grp('La personne proche ouvre', [
      it(E(1627), '1 puis 2'),
      it(E(1628), '1 puis 2'),
      it(E(1630), '1 puis 2'),
      it('fr.a2.pronoms-essentiels.207', 'une seule place occupée'),
    ], chk(
      'Dans les trois premières, quel mot occupe la première place ?',
      ['la chose : les, le', 'la personne proche : me, vous'],
      1,
      'me et vous sont premiers, toujours. EN: me and vous come first, always.',
    )),
    grp('La chose ouvre', [
      it(E(1621), '2 puis 3'),
      it(E(1622), '2 puis 3'),
      it(E(1631), '2 puis 3'),
      it(E(1655), '2 puis 3'),
    ], chk(
      'Pourquoi la chose passe-t-elle devant ici ?',
      ['parce que le verbe est plus court', 'parce que la phrase est plus longue', 'parce que la personne est lui ou leur'],
      2,
      'Avec lui et leur, la chose prend la place de devant. EN: with lui and leur the thing goes in front.',
    )),
    ctl('La dernière place', 'Dans « il nous en reste trois », en est à quelle place ?',
      ['la cinquième, la dernière', 'la première'], 0,
      'en ferme toujours la file. EN: en always closes the queue.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'proche', 'chose'],
};

/** CHOOSE. The one card that keeps this family apart from b1.11 to b1.13.
 *  Named once, here, and nowhere else in the lesson. */
const A2_FAMILLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-famille',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Deux familles de petits mots',
  frSub: 'Ne les mélange pas',
  hint: 'Quatre cartes. Regarde combien de phrases il y a.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['relatif', 'chose'],
  cards: [
    {
      head: 'Ici : une seule phrase', label: 'le la les lui leur y en',
      fr: 'Je le lui donne.', sub: '[zhuh luh lwee DONN]',
      body: 'Une phrase, et deux noms remplacés dedans. Rien n’est collé à rien d’autre. EN: one sentence, with two nouns replaced inside it.',
    },
    {
      head: 'Là : deux phrases collées', label: Cap(QUI_QUE_REF),
      fr: 'Le paquet que je lui donne est lourd.', sub: '[luh pa-KEH kuh zhuh lwee DONN eh LOOR]',
      body: `« ${B111_REFRAME} » que colle deux phrases autour du même nom. EN: ${B111_REFRAME_EN}`,
    },
    {
      head: 'Les deux ensemble', label: 'une relative et une file',
      fr: 'La lettre que je la lui ai lue était courte.', sub: '[la LEHTR kuh zhuh la lwee ay LÜ ay-teh KOORT]',
      body: 'Tu peux avoir les deux dans une phrase, et chacun garde son travail. EN: both can appear together, and each keeps its own job.',
    },
    {
      head: 'Le test en une seconde', label: 'compte les verbes',
      fr: 'Deux verbes, deux phrases. Un verbe, une file.', sub: '[deu VEHRB deu FRAZ | uhⁿ VEHRB ünn FEEL]',
      body: 'Si le petit mot est suivi d’un nouveau verbe, c’est un relatif. Sinon, c’est un pronom objet. EN: if a new verb follows the little word it is a relative, otherwise it is an object pronoun.',
    },
  ],
};

/** TRAP. Four orders an anglophone writes, and why each one is reasonable. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre files mal rangées',
  errors: [
    {
      wrong: 'Je lui le donne.',
      right: 'Je le lui donne.',
      why: 'Normal : en anglais on dit I give him the book, la personne d’abord. En français, avec lui, la chose passe devant. EN: English puts the person first; French does not, with lui.',
    },
    {
      wrong: 'Tu les me montres.',
      right: 'Tu me les montres.',
      why: 'Logique après l’acte précédent : la chose devant, comme avec lui. Mais avec me, c’est moi qui ouvre la file. EN: with me it is the close person that opens the queue.',
    },
    {
      wrong: 'Je en te parle.',
      right: 'Je t’en parle.',
      why: 'Tu as pris en pour un mot ordinaire. Il est cinquième et il perd toujours la course. EN: en is fifth and always comes last.',
    },
    {
      wrong: 'Je donne le lui.',
      right: 'Je le lui donne.',
      why: `C'est l'ordre anglais, et ${COD_REF} l'a déjà corrigé pour un seul mot : « ${A206_REFRAME} » En français : « ${A206_REFRAME_FR} »`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'chose', 'proche'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le numéro', 'Pour ranger deux petits mots, tu regardes...',
    ['ce qu’ils veulent dire en anglais', 'leur numéro de place', 'la longueur du verbe'], 1,
    'Chaque mot a un numéro, et les numéros montent. EN: each word has a number, and the numbers go up.'),
  ctl('La cinquième', 'Quel petit mot est toujours le dernier de la file ?',
    ['en', 'y', 'le'], 0,
    'en ferme la file, sans exception. EN: en closes the queue, with no exception.'),
  ctl('Les deux familles', 'Dans « le livre que je lui ai prêté », que est...',
    ['un pronom objet, comme le', 'un relatif : il colle deux phrases'], 1,
    'Un nouveau verbe le suit, donc c’est un relatif. EN: a new verb follows it, so it is a relative.'),
], ['file', 'relatif']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Une seule file',
    opener: {
      line: 'Cinq places, et chaque petit mot n’en occupe qu’une : ici tu apprends à les compter au lieu de les deviner. EN: Five places, and each little word holds exactly one: here you learn to count them instead of guessing.',
      imageRef: 'lessons/ordre-pronoms/act02.jpg',
    },
    sections: [],
    milestone: 'Tu nommes les cinq places dans l’ordre et tu ranges deux petits mots sans hésiter. EN: You can name the five places in order and sort two little words without hesitating.',
    estScreens: 39, restPoints: ['a2-tableau', 'a2-construire'],
  },
  sections: [A2_HISTOIRE, A2_PLACES, A2_TABLEAU, A2_EXEMPLES, A2_CONSTRUIRE, A2_FAMILLE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA CHOSE, PUIS L'AUTRE PERSONNE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET by ear. Eight lines where the thing always goes first, so the shape
 *  is heard before it is named. `hideLines` or it is a reading exercise. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui passe devant',
  frSub: 'Écoute le premier des deux',
  lines: [
    ln(E(1637)), ln(E(1639)), ln(E(1642)), ln(E(1645)),
    ln(E(1647)), ln(E(1652)), ln('fr.a2.pronoms-essentiels.269'), ln('fr.a2.pronoms-essentiels.270'),
  ],
  questions: [
    { q: 'Première phrase : quel mot entends-tu en premier ?', opts: ['lui', 'le'], correct: 1, why: '« le lui » : la chose ouvre. EN: the thing opens.' },
    { q: 'Dans les six premières phrases, lui et leur sont...', opts: ['toujours en deuxième', 'toujours en premier'], correct: 0, why: 'Avec lui et leur, la chose passe devant. EN: with lui and leur, the thing goes first.' },
    { q: 'Les deux dernières phrases ont combien de petits mots ?', opts: ['un seul', 'deux'], correct: 0, why: '« je leur ai parlé » : lui ou leur tout seul, sans chose. EN: one pronoun only, with no thing.' },
    { q: 'Pourquoi la sixième phrase n’a-t-elle pas d’accent sur le bloc ?', opts: ['parce que le verbe est long', 'parce que les petits mots ne sont jamais accentués', 'parce que la phrase est une question'], correct: 1, why: 'Le bloc est court et plat ; l’accent tombe sur le verbe. EN: the block is flat and the stress lands on the verb.' },
  ],
  audio: REC('rec-b1-17-devant'),
  say: REFRAME,
  terms: ['chose', 'personne'],
};

/** NAME. Four cards, one idea each. */
const A3_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'La chose, puis la personne',
  frSub: 'Places 2 et 3',
  hint: 'Quatre cartes. Le mot de gauche gagne toujours.',
  audio: REC('rec-b1-17-chose'),
  say: REFRAME,
  terms: ['chose', 'personne'],
  cards: [
    {
      head: 'La paire la plus fréquente', label: 'le la les + lui leur',
      fr: 'Je le lui donne.', sub: '[zhuh luh lwee DONN]',
      body: 'C’est la combinaison que tu diras le plus souvent : un objet, quelqu’un qui le reçoit. EN: an object and somebody receiving it: the combination you will use most.',
    },
    {
      head: 'Le pluriel ne change rien', label: 'les + leur',
      fr: 'Elle les leur montre.', sub: '[ehl lay luhr MOHⁿTR]',
      body: 'Un ou plusieurs, une personne ou plusieurs : l’ordre reste le même. EN: singular or plural, one person or several, the order does not move.',
    },
    {
      head: 'Ce que l’anglais fait', label: 'et pourquoi ça trompe',
      fr: 'I give him the letter.', sub: '[la chose arrive en dernier]',
      body: 'En anglais, la personne peut venir d’abord. En français, avec lui et leur, jamais. EN: English can put the person first; French with lui and leur never does.',
    },
    {
      head: 'Ce que A2 t’a déjà donné', label: Cap(COI_REF),
      fr: 'Je leur ai parlé.', sub: '[zhuh luh-ray par-LAY]',
      body: `« ${A224_REFRAME} » En français : « ${A224_REFRAME_FR} » Ici, lui et leur ne sont plus seuls. EN: here lui and leur are no longer alone.`,
    },
  ],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq fois la même place',
  examples: [
    ex(E(1640), 'le, puis leur'),
    ex(E(1641), 'la, puis leur'),
    ex(E(1643), 'le, puis lui'),
    ex(E(1648), 'les, puis leur'),
    ex(E(1653), 'les, puis lui'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chose', 'personne'],
};

/** BUILD. Two groups of four, then the control that names the rule. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la paire',
  frSub: 'La chose d’abord, toujours',
  groups: [
    grp('Une seule personne : lui', [
      it(E(1638), 'la, puis lui'),
      it(E(1644), 'la, puis lui'),
      it(E(1650), 'le, puis lui'),
      it(E(1654), 'la, puis lui'),
    ], chk(
      'Dans ces quatre phrases, lui est-il jamais en première position ?',
      ['Jamais, il est toujours deuxième.', 'Oui, deux fois sur quatre.'],
      0,
      'Avec lui, la chose ouvre la paire. EN: with lui the thing opens the pair.',
    )),
    grp('Plusieurs personnes : leur', [
      it(E(1646), 'le, puis leur'),
      it(E(1651), 'la, puis leur'),
      it(E(1655), 'les, puis leur'),
      it('fr.a2.pronoms-essentiels.269', 'leur tout seul, sans chose'),
    ], chk(
      'Que change leur par rapport à lui ?',
      ['l’ordre : leur passe devant', 'rien : seulement le nombre de personnes'],
      1,
      'leur, c’est lui au pluriel, et il garde la même place. EN: leur is the plural of lui and keeps the same place.',
    )),
    ctl('Le raccourci', 'Tu hésites entre « je le lui donne » et « je lui le donne ». Que fais-tu ?',
      ['tu comptes : 2 puis 3', 'tu traduis de l’anglais', 'tu choisis le plus court'], 0,
      'Les numéros montent : 2 avant 3. EN: the numbers go up, so 2 comes before 3.'),
  ],
  audio: AUDIO,
  say: THE_TEST,
  terms: ['chose', 'personne', 'file'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris la paire que tu entends',
  frSub: 'Deux mots collés, dans l’ordre',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['chose', 'personne'],
};

/** TRAP, stepped: the rule, six flipped cards, the audio, the gated drill. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège de l’anglais',
  frSub: 'Six paires, six réflexes',
  rule: {
    title: 'La personne ne double jamais la chose',
    body: 'Avec lui et leur, aucun ordre n’est possible sauf un : la chose, puis la personne. L’autre version n’est pas maladroite, elle n’existe pas. EN: with lui and leur only one order exists, and the other version is not clumsy but impossible.',
  },
  cards: [
    { promptLabel: 'le réflexe anglais', promptSound: 'Je lui le donne.', fr: 'Je le lui donne.', ipa: '/ʒə lə lɥi dɔn/', tip: 'Compte : 2 avant 3. EN: count, 2 before 3.' },
    { promptLabel: 'au pluriel', promptSound: 'Elle leur les montre.', fr: 'Elle les leur montre.', ipa: '/ɛl le lœʁ mɔ̃tʁ/', tip: 'Le pluriel ne déplace rien. EN: the plural moves nothing.' },
    { promptLabel: 'avec rendre', promptSound: 'Tu lui la rends.', fr: 'Tu la lui rends.', ipa: '/ty la lɥi ʁɑ̃/', tip: 'la est deuxième, lui est troisième. EN: la is second, lui is third.' },
    { promptLabel: 'avec envoyer', promptSound: 'Tu leur les envoies.', fr: 'Tu les leur envoies aujourd’hui.', ipa: '/ty le lœ.ʁɑ̃.vwa o.ʒuʁ.dɥi/', tip: 'Même avec une liaison, l’ordre tient. EN: the liaison changes nothing.' },
    { promptLabel: 'avec acheter', promptSound: 'Il lui la achète.', fr: 'Il la lui achète pour son anniversaire.', ipa: '/il la lɥi a.ʃɛt/', tip: 'lui ne s’élide jamais. EN: lui never elides.' },
    { promptLabel: 'le nom laissé en trop', promptSound: 'Je le donne à lui.', fr: 'Je le lui donne.', ipa: '/ʒə lə lɥi dɔn/', tip: 'à lui après le verbe insiste ; ici on veut juste lui. EN: à lui after the verb is emphatic, not neutral.' },
  ],
  drill: [
    { promptSay: 'Le dossier, je ... donne demain.', opts: ['lui le', 'le lui'], correct: 1 },
    { promptSay: 'Les photos, elle ... montre ce soir.', opts: ['les leur', 'leur les'], correct: 0 },
    { promptSay: 'La clé, tu ... rends quand ?', opts: ['lui la', 'la lui'], correct: 1 },
    { promptSay: 'Les billets, nous ... envoyons lundi.', opts: ['les leur', 'leur les'], correct: 0 },
    { promptSay: 'Le mot de passe, on ... demande poliment.', opts: ['lui le', 'le lui'], correct: 1 },
    { promptSay: 'La facture, le syndic ... explique au téléphone.', opts: ['leur la', 'la leur'], correct: 1 },
    { promptSay: 'Les résultats, le médecin ... donne mardi.', opts: ['les lui', 'lui les'], correct: 0 },
    { promptSay: 'La lettre, je ... écris ce soir.', opts: ['la lui', 'lui la'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un seul ordre possible' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le réflexe anglais produit' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit paires', gate: true },
  ],
  audio: REC('rec-b1-17-piege-chose'),
  say: THE_TEST,
  terms: ['chose', 'personne'],
};

const A3_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a3-focus',
  layer: 'core',
  sheetId: 'sheet-file',
  title: 'Ce qu’il faut retenir de l’acte 3',
  points: [
    'Avec lui et leur, la chose passe toujours devant. EN: with lui and leur the thing always goes first.',
    'le, la et les prennent la deuxième place ; lui et leur la troisième. EN: le la les are second, lui and leur third.',
    'Le pluriel ne déplace rien : les leur, comme le lui. EN: the plural moves nothing.',
    'lui et leur ne s’élident jamais devant une voyelle. EN: lui and leur never elide.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chose', 'personne', 'file'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('L’ordre', 'Avec lui ou leur, quel petit mot vient en premier ?',
    ['lui ou leur', 'le, la ou les'], 1,
    'La chose est deuxième, la personne troisième. EN: the thing is second, the person third.'),
  ctl('Le pluriel', '« Elle les leur montre. » Combien de personnes reçoivent ?',
    ['une seule', 'on ne sait pas', 'plusieurs'], 2,
    'leur est le pluriel de lui. EN: leur is the plural of lui.'),
  ctl('L’élision', 'Devant une voyelle, lui devient...',
    ['l’', 'rien : lui ne bouge pas'], 1,
    'Seuls me, te, se, le et la perdent leur voyelle. EN: only me, te, se, le and la elide.'),
], ['chose', 'personne']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La chose, puis la personne',
    opener: {
      line: 'Tu donnes quelque chose à quelqu’un, et l’anglais te souffle le mauvais ordre : ici tu apprends à ne plus l’écouter. EN: You give something to somebody, and English whispers the wrong order: here you learn to stop listening to it.',
      imageRef: 'lessons/ordre-pronoms/act03.jpg',
    },
    sections: [],
    milestone: 'Tu construis « je le lui donne » sans passer par l’anglais, au singulier comme au pluriel. EN: You can build je le lui donne without going through English, singular or plural.',
    estScreens: 30, restPoints: ['a3-construire'],
  },
  sections: [A3_ECOUTE, A3_REGLE, A3_EXEMPLES, A3_CONSTRUIRE, A3_DICTEE, A3_PIEGE, A3_FOCUS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — MOI D'ABORD
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The order the previous act just installed is now wrong, and the
 *  learner hears it fail on a real counter exchange. */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'À la librairie',
  frSub: 'Quand c’est toi qui reçois',
  setting: 'Une librairie à Bruxelles. Tu commandes deux livres qui ne sont pas en rayon.',
  bubbles: [
    { from: 'narrator', fr: 'Le libraire note les deux titres sur un carnet.', en: 'The bookseller writes the two titles in a notebook.' },
    { from: 'coach', fr: 'Je vous les commande ce matin. Ils arrivent jeudi.', en: 'I am ordering them for you this morning. They arrive on Thursday.' },
    { from: 'user', fr: 'Vous les me téléphonez quand ils arrivent.', en: 'Vous les me téléphonez when they arrive.', warn: 'la chose est passée devant vous' },
    { from: 'coach', fr: 'Vous voulez dire : vous me téléphonez. Avec me, vous, nous, c’est vous qui ouvrez.', en: 'You mean: vous me téléphonez. With me, vous, nous, you are the one who opens.' },
    { from: 'user', fr: 'Vous me les mettez de côté, alors.', en: 'You will put them aside for me, then.' },
    { from: 'coach', fr: 'Voilà. me d’abord, les ensuite. Exactement l’inverse de tout à l’heure.', en: 'There you go. me first, les next. Exactly the opposite of a moment ago.' },
  ],
  closing: { fr: 'Avec lui, la chose ouvre. Avec moi, c’est moi qui ouvre.', en: 'With lui, the thing opens. With me, I open.' },
  audio: REC('rec-b1-17-librairie'),
  say: REFRAME,
  terms: ['proche', 'chose'],
};

/** NAME. The one place that moves, and why it is not a contradiction. */
const A4_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Moi d’abord',
  frSub: 'Places 1 et 2',
  hint: 'Quatre cartes. Compare avec l’acte précédent.',
  audio: REC('rec-b1-17-proche'),
  say: REFRAME,
  terms: ['proche', 'chose', 'file'],
  cards: [
    {
      head: 'La personne proche ouvre', label: 'me te nous vous + le la les',
      fr: 'Tu me les montres.', sub: '[tü muh lay MOHⁿTR]',
      body: 'me, te, nous et vous occupent la première place, même quand ils reçoivent l’objet. EN: me, te, nous and vous hold the first place, even when they receive the object.',
    },
    {
      head: 'Ce n’est pas une exception', label: 'c’est le numéro',
      fr: 'Je le lui donne. · Tu me les montres.', sub: '[zhuh luh lwee DONN] · [tü muh lay MOHⁿTR]',
      body: 'Dans les deux cas les numéros montent : 2 puis 3, ou 1 puis 2. Rien n’a changé de règle. EN: in both cases the numbers go up; nothing has changed.',
    },
    {
      head: 'Devant une voyelle', label: 'me · te · le · la',
      fr: 'Ma mère me l’envoie chaque mois.', sub: '[ma MEHR muh lahⁿ-VWA shak MWA]',
      body: 'le et la deviennent l’ et se collent au verbe. Le bloc devient plus court à l’oreille. EN: le and la become l’ and the block gets shorter to the ear.',
    },
    {
      head: 'Et se, quand c’est toi-même', label: 'se · me',
      fr: 'Elle se les achète chaque hiver.', sub: '[ehl suh lay za-SHEHT sha-kee-VEHR]',
      body: `${Cap(PRONOMINAL_REF)} t'a donné se. Il occupe la même première place que me et te. EN: se takes the same first place as me and te.`,
    },
  ],
};

/** BUILD. Four lines per group, then the control that names the swap. */
const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Range la paire proche',
  frSub: 'Qui ouvre, cette fois',
  groups: [
    grp('me et te ouvrent', [
      it(E(1656), 'me, puis les'),
      it(E(1657), 'te, puis le'),
      it(E(1660), 'te, puis la'),
      it(E(1665), 'me, puis le'),
    ], chk(
      'Qu’est-ce qui décide l’ordre ici ?',
      ['le sens : c’est moi qui reçois', 'le numéro : me et te sont premiers', 'la longueur du mot'],
      1,
      'Toujours le numéro de place, jamais le sens. EN: always the place number, never the meaning.',
    )),
    grp('nous et vous ouvrent aussi', [
      it(E(1658), 'nous, puis la'),
      it(E(1659), 'vous, puis les'),
      it(E(1667), 'vous, puis les'),
      it('fr.a2.internet.217', 'me, puis le'),
    ], chk(
      'Et si la phrase avait lui au lieu de vous ?',
      ['la chose passerait devant', 'l’ordre resterait le même'],
      0,
      'lui est troisième, donc la chose repasse devant. EN: lui is third, so the thing moves back in front.',
    )),
    ctl('Le contraste', 'Pourquoi « tu me les montres » et « je le lui donne » n’ont-ils pas le même ordre ?',
      ['parce que les verbes sont différents', 'parce que me est premier et lui troisième'], 1,
      'Les numéros décident, pas les verbes. EN: the numbers decide, not the verbs.'),
  ],
  audio: AUDIO,
  say: THE_TEST,
  terms: ['proche', 'chose', 'file'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Cinq fois moi d’abord',
  examples: [
    ex(E(1661), 'me, puis l’ : élision'),
    ex(E(1663), 'nous, puis le'),
    ex(E(1668), 'te, puis l’ : élision'),
    ex(E(1672), 'me, puis la'),
    ex('fr.a2.au-restaurant.137', 'me, puis l’, sur l’infinitif'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'elision'],
};

/** CHOOSE by ear: the two patterns mixed, and only the first word decides. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui ouvre la file',
  frSub: 'Les deux ordres, mélangés',
  lines: [
    ln(E(1656)), ln(E(1637)), ln(E(1664)), ln(E(1639)),
    ln(E(1670)), ln(E(1646)), ln(E(1673)), ln(E(1653)),
  ],
  questions: [
    { q: 'Première phrase : qui ouvre ?', opts: ['la personne proche', 'la chose'], correct: 0, why: '« tu me les montres » : me ouvre. EN: me opens.' },
    { q: 'Deuxième phrase : qui ouvre ?', opts: ['la chose', 'la personne'], correct: 0, why: '« je le lui donne » : la chose ouvre, parce que la personne est lui. EN: the thing opens, because the person is lui.' },
    { q: 'Combien de phrases sur huit commencent par me, te, nous ou vous ?', opts: ['deux', 'quatre', 'six'], correct: 1, why: 'Une sur deux, en alternance. EN: every other one.' },
    { q: 'Qu’est-ce qui change l’ordre d’une phrase à l’autre ?', opts: ['le verbe', 'le temps', 'la personne : proche ou lointaine'], correct: 2, why: 'me et vous sont premiers, lui et leur troisièmes. EN: me and vous are first, lui and leur third.' },
  ],
  audio: REC('rec-b1-17-melange'),
  say: REFRAME,
  terms: ['proche', 'personne'],
};

/** CHOOSE, written: both patterns in one drill, sorted by who opens. */
const A4_MELANGE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-melange',
  layer: 'core',
  size: 'lg',
  title: 'Les deux ordres, ensemble',
  frSub: 'Trie par premier mot',
  groups: [
    grp('C’est moi ou toi qui ouvre', [
      it(E(1662), 'te, puis le'),
      it(E(1669), 'nous, puis les'),
      it(E(1674), 'se, puis les'),
    ], chk(
      'Quel mot ces trois phrases ont-ils en première place ?',
      ['un mot de la place 1', 'un mot de la place 2'],
      0,
      'te, nous, se : tous premiers. EN: te, nous, se are all first.',
    )),
    grp('C’est la chose qui ouvre', [
      it(E(1642), 'les, puis lui'),
      it(E(1647), 'la, puis lui'),
      it(E(1651), 'la, puis leur'),
    ], chk(
      'Pourquoi la chose ouvre-t-elle ici ?',
      ['parce que la personne est lui ou leur', 'parce que la chose est au pluriel'],
      0,
      'lui et leur sont troisièmes, donc la chose passe devant. EN: lui and leur are third, so the thing goes in front.',
    )),
    ctl('Une seule question', 'Devant deux petits mots, la seule question utile est...',
      ['« quel est le sens ? »', '« quels numéros de place ? »', '« que dirait l’anglais ? »'], 1,
      'Deux numéros, et ils montent. EN: two numbers, and they go up.'),
  ],
  audio: AUDIO,
  say: THE_TEST,
  terms: ['file', 'proche', 'chose'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de première place',
  errors: [
    {
      wrong: 'Tu les me montres.',
      right: 'Tu me les montres.',
      why: 'Très logique après l’acte 3 : la chose devant, comme avec lui. Mais me est premier et rien ne le double. EN: reasonable after act 3, yet me is first and nothing overtakes it.',
    },
    {
      wrong: 'Il le te donne demain.',
      right: 'Il te le donne demain.',
      why: 'Tu as gardé l’ordre de « je le lui donne ». Change de personne, change d’ordre. EN: you kept the order of je le lui donne; a different person means a different order.',
    },
    {
      wrong: 'Ma mère me le envoie chaque mois.',
      right: 'Ma mère me l’envoie chaque mois.',
      why: 'Rien de grave à l’écrit, impossible à dire : le perd sa voyelle devant une voyelle. EN: le drops its vowel before a vowel sound.',
    },
    {
      wrong: 'Le libraire vous commande les.',
      right: 'Le libraire vous les commande.',
      why: `C'est l'ordre anglais, avec l'objet derrière le verbe. « ${A206_REFRAME_FR} » EN: ${A206_REFRAME}`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['proche', 'elision'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La première place', 'Avec me, te, nous ou vous, qui ouvre la file ?',
    ['la chose', 'la personne proche'], 1,
    'me, te, nous, vous sont à la place 1. EN: me, te, nous, vous are in place 1.'),
  ctl('Le changement', 'Pourquoi l’ordre n’est-il pas le même qu’à l’acte 3 ?',
    ['parce que les numéros de place sont différents', 'parce que le sens est différent', 'parce que le verbe change'], 0,
    'Une seule règle : les numéros montent. EN: one rule only, the numbers go up.'),
  ctl('L’élision', 'Devant une voyelle, « me le » devient...',
    ['m’le', 'me le, sans changement', 'me l’'], 2,
    'Seul le dernier mot du groupe s’élide ici. EN: only the word touching the vowel elides.'),
], ['proche', 'chose', 'elision']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Moi d’abord',
    opener: {
      line: 'Tu viens d’apprendre que la chose passe devant, et voilà une moitié des phrases où c’est faux. EN: You have just learned that the thing goes first, and here is the half of the sentences where that is wrong.',
      imageRef: 'lessons/ordre-pronoms/act04.jpg',
    },
    sections: [],
    milestone: 'Tu choisis entre les deux ordres en regardant la personne, pas le verbe ni le sens. EN: You can choose between the two orders by looking at the person, not at the verb or the meaning.',
    estScreens: 37, restPoints: ['a4-construire', 'a4-ecoute'],
  },
  sections: [A4_HISTOIRE, A4_REGLE, A4_CONSTRUIRE, A4_EXEMPLES, A4_ECOUTE, A4_MELANGE, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — Y ET EN, LES DEUX DERNIÈRES PLACES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A counter exchange where y and en do all the work, and en is last
 *  every single time. */
const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'À la pharmacie',
  frSub: 'Lis, et regarde où tombe en',
  text: "À la pharmacie, rue du Bailli, il est presque dix-neuf heures. Une cliente cherche un sirop pour sa fille. Le pharmacien regarde derrière le comptoir. « Il y en a encore deux, mais pas de la même marque. Je vous en propose un autre, il est aussi efficace. » La cliente hésite. « Ma voisine m’y accompagne d’habitude, et c’est elle qui choisit. Je vais lui en parler ce soir. » Le pharmacien sourit. « Prenez-en un maintenant, et revenez demain si ça ne va pas. Nous en gardons toujours au frigo. » Elle paie et sort. Dans chaque phrase, deux petits mots se suivent, et en arrive toujours le dernier.",
  glossary: [
    { word: 'un sirop', en: 'a syrup', note: 'Un médicament liquide, souvent sucré. EN: a liquid medicine.' },
    { word: 'la même marque', en: 'the same brand', note: 'Le même fabricant, le même nom sur la boîte.' },
    { word: 'efficace', en: 'effective', note: 'Qui marche bien, qui fait son travail.' },
    { word: 'd’habitude', en: 'usually', note: 'Presque toujours, comme d’ordinaire.' },
  ],
  questions: [
    { q: 'Dans « il y en a encore deux », que remplace y et que remplace en ?', a: 'y remplace le lieu, derrière le comptoir. en remplace le sirop, avec une quantité.' },
    { q: 'Dans « je vous en propose un autre », quelle place occupe vous ?', a: 'La première. en garde la cinquième, la dernière.' },
    { q: 'Pourquoi écrit-on « m’y accompagne » et pas « me y accompagne » ?', a: 'me perd sa voyelle devant le son de y. C’est une élision.' },
    { q: 'Combien de phrases du texte ont deux petits mots collés ?', a: 'Cinq : il y en a, je vous en propose, ma voisine m’y accompagne, je vais lui en parler, prenez-en.' },
  ],
  audio: REC('rec-b1-17-pharmacie'),
  say: REFRAME,
  terms: ['file', 'elision'],
};

const A5_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'y quatrième, en cinquième',
  frSub: 'Les deux qui ne doublent jamais',
  hint: 'Quatre cartes. Regarde toujours le dernier mot.',
  audio: REC('rec-b1-17-yen'),
  say: REFRAME,
  terms: ['file', 'proche'],
  cards: [
    {
      head: 'en ferme la file', label: 'place 5',
      fr: 'Je t’en parle demain.', sub: '[zhuh tahⁿ PARL duh-MEHⁿ]',
      body: 'Quel que soit l’autre mot, en arrive après lui. Il n’y a aucun cas où en passe devant. EN: whatever the other word is, en comes after it, with no exceptions.',
    },
    {
      head: 'y juste avant', label: 'place 4',
      fr: 'Il y en a trois au frigo.', sub: '[ee-lyahⁿ-na TRWA oh free-GOH]',
      body: 'y et en ensemble donnent toujours « y en », jamais l’inverse. C’est le bloc de « il y en a ». EN: y and en together always give y en, never the other way round.',
    },
    {
      head: 'Avec une personne devant', label: 'places 1 ou 3, puis 5',
      fr: 'Elle leur en apporte chaque dimanche.', sub: '[ehl luh-rahⁿ na-PORT shak dee-MAHⁿSH]',
      body: 'lui, leur, me, nous gardent leur place habituelle, et en reste derrière eux. EN: the person keeps its usual place and en stays behind it.',
    },
    {
      head: 'Ce que A2 t’a déjà donné', label: Cap(YEN_REF),
      fr: 'Elle en parle.', sub: '[ehl ahⁿ PARL]',
      body: `« ${A225_REFRAME} » En français : « ${A225_REFRAME_FR} » Ici, en n'est plus tout seul. EN: here en is no longer alone.`,
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Mets en à sa place',
  frSub: 'La dernière, toujours',
  groups: [
    grp('Une personne, puis en', [
      it(E(1676), 'te, puis en'),
      it(E(1680), 'nous, puis en'),
      it(E(1689), 'lui, puis en'),
      it(E(1692), 'leur, puis en'),
    ], chk(
      'Dans ces quatre phrases, où se trouve en ?',
      ['toujours en dernier', 'tantôt devant, tantôt derrière'],
      0,
      'Personne ne passe derrière en. EN: nothing goes behind en.',
    )),
    grp('Une chose ou un lieu, puis y', [
      it(E(1682), 'les, puis y'),
      it(E(1691), 'les, puis y'),
      it(E(1677), 'nous, puis y'),
      it('fr.a2.pronoms-essentiels.308', 'y tout seul'),
    ], chk(
      'y passe-t-il jamais devant les ou nous ?',
      ['Non, il est quatrième.', 'Oui, quand le lieu est important.'],
      0,
      'y est quatrième, donc il suit tout le monde sauf en. EN: y is fourth, so it follows everybody but en.',
    )),
    ctl('Les deux ensemble', 'Dans « il y en a trois », quel est l’ordre ?',
      ['en puis y', 'y puis en'], 1,
      '4 avant 5, comme partout. EN: 4 before 5, as everywhere else.'),
  ],
  audio: AUDIO,
  say: THE_TEST,
  terms: ['file', 'personne'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Cinq fois en, cinq fois dernier',
  examples: [
    ex(E(1679), 'me élidé, puis en'),
    ex(E(1686), 'te élidé, puis en'),
    ex(E(1688), 'vous, puis en'),
    ex(E(1690), 'nous, puis en'),
    ex('fr.a2.au-restaurant.168', 'la négation autour de y en'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'elision'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Six fois où en veut passer devant',
  frSub: 'Il n’y arrive jamais',
  rule: {
    title: 'en est cinquième, et cinquième veut dire dernier',
    body: 'en traduit souvent un mot que l’anglais met tôt dans la phrase. En français, il attend la fin, derrière tout le monde. EN: en often renders a word English places early; in French it waits at the back.',
  },
  cards: [
    { promptLabel: 'avec te', promptSound: 'Je en te parle demain.', fr: 'Je t’en parle demain.', ipa: '/ʒə tɑ̃ paʁl də.mɛ̃/', tip: 'te est premier, en est cinquième. EN: te first, en fifth.' },
    { promptLabel: 'avec lui', promptSound: 'Je en lui parle ce soir.', fr: 'Je lui en parle ce soir.', ipa: '/ʒə lɥi ɑ̃ paʁl sə swaʁ/', tip: 'lui est troisième et garde sa place. EN: lui is third and keeps its place.' },
    { promptLabel: 'avec y', promptSound: 'Il en y a trois.', fr: 'Il y en a trois au frigo.', ipa: '/i ljɑ̃ na tʁwa o fʁi.ɡo/', tip: 'Le bloc « y en » ne s’inverse jamais. EN: the y en block never inverts.' },
    { promptLabel: 'avec nous', promptSound: 'Il en nous reste assez.', fr: 'Il nous en reste assez.', ipa: '/il nu zɑ̃ ʁɛst a.se/', tip: 'nous est premier, même quand il reçoit. EN: nous is first, even when receiving.' },
    { promptLabel: 'y après une chose', promptSound: 'Tu y les attends à la sortie.', fr: 'Tu les y attends à la sortie.', ipa: '/ty le zi a.tɑ̃ a la sɔʁ.ti/', tip: 'les est deuxième, y quatrième. EN: les second, y fourth.' },
    { promptLabel: 'y après une personne', promptSound: 'Elle y nous emmène samedi.', fr: 'Elle nous y emmène samedi.', ipa: '/ɛl nu zi ɑ̃.mɛn sam.di/', tip: 'nous ouvre, y suit. EN: nous opens, y follows.' },
  ],
  drill: [
    { promptSay: 'Du gâteau, je ... garde une part.', opts: ['en te', 't’en'], correct: 1 },
    { promptSay: 'Des places, il ... reste deux.', opts: ['nous en', 'en nous'], correct: 0 },
    { promptSay: 'Au marché, elle ... emmène le samedi.', opts: ['y nous', 'nous y'], correct: 1 },
    { promptSay: 'Du projet, on ... a parlé longuement.', opts: ['leur en', 'en leur'], correct: 0 },
    { promptSay: 'Des croissants, il ... a encore trois.', opts: ['en y', 'y en'], correct: 1 },
    { promptSay: 'À la gare, tu ... attends à la sortie.', opts: ['les y', 'y les'], correct: 0 },
    { promptSay: 'Du sirop, le pharmacien ... propose un autre.', opts: ['en nous', 'nous en'], correct: 1 },
    { promptSay: 'De ce film, je ... reparle ce soir.', opts: ['t’en', 'en te'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Cinquième veut dire dernier' },
    { label: 'Six cartes', kind: 'cards', title: 'Six fois où en veut doubler' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-17-piege-yen'),
  say: THE_TEST,
  terms: ['file'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le dernier mot du bloc',
  frSub: 'Écoute ce qui ferme',
  lines: [
    ln(E(1675)), ln(E(1676)), ln(E(1677)), ln(E(1679)),
    ln(E(1680)), ln(E(1687)), ln(E(1689)), ln('fr.a2.pronoms-essentiels.315'),
  ],
  questions: [
    { q: 'Première phrase : quel mot ferme le bloc ?', opts: ['en', 'y'], correct: 0, why: '« il y en a » : y puis en. EN: y then en.' },
    { q: 'Troisième phrase : que remplace y ?', opts: ['une quantité', 'un lieu'], correct: 1, why: '« elle nous y emmène » : y remplace le lieu. EN: y stands for the place.' },
    { q: 'Combien de phrases sur huit finissent leur bloc par en ?', opts: ['trois', 'cinq', 'sept'], correct: 2, why: 'Sept sur huit, et la huitième aussi. EN: almost all of them.' },
    { q: 'Qu’est-ce qui n’arrive jamais dans ces huit phrases ?', opts: ['en en première position', 'y devant une personne', 'les deux'], correct: 2, why: 'Ni l’un ni l’autre : les numéros montent. EN: neither, because the numbers go up.' },
  ],
  audio: REC('rec-b1-17-fermer'),
  say: REFRAME,
  terms: ['file'],
};

const A5_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a5-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Commence par en. Écris-le tout à droite, puis remplis devant.', why: 'Sa place est la seule qui ne dépende de rien. EN: its place is the only one that depends on nothing.' },
    { hack: 'Dis « il y en a » à voix haute avant de construire ta phrase.', why: 'Ce bloc tout fait te rappelle que y précède en. EN: the ready-made block reminds you that y comes before en.' },
    { hack: 'Si tu hésites entre deux ordres, enlève un des deux mots et remets le nom.', why: 'Avec un seul petit mot, la place est évidente, et tu ajoutes l’autre ensuite. EN: with one pronoun the place is obvious, then you add the other.' },
  ],
  audio: AUDIO,
  say: THE_TEST,
  terms: ['file', 'elision'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La dernière place', 'Quel petit mot ferme toujours la file ?',
    ['y', 'le', 'en'], 2,
    'en est cinquième, sans exception. EN: en is fifth, with no exception.'),
  ctl('Le bloc tout fait', 'Dans « il y en a », quel est l’ordre ?',
    ['y puis en', 'en puis y'], 0,
    '4 puis 5. EN: 4 then 5.'),
  ctl('Avec une personne', 'Dans « elle leur en apporte », qui ouvre ?',
    ['en', 'leur'], 1,
    'leur est troisième, en cinquième. EN: leur is third, en fifth.'),
], ['file', 'personne']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'y et en, les deux dernières',
    opener: {
      line: 'Deux petits mots n’ont qu’une place possible dans toute la langue : ici tu apprends laquelle, et tu ne la perds plus. EN: Two little words have exactly one possible place in the whole language: here you learn which, and you never lose it again.',
      imageRef: 'lessons/ordre-pronoms/act05.jpg',
    },
    sections: [],
    milestone: 'Tu places y et en sans réfléchir, même quand une personne les précède. EN: You can place y and en without thinking, even when a person comes in front of them.',
    estScreens: 28, restPoints: ['a5-construire'],
  },
  sections: [A5_LECTURE, A5_REGLE, A5_CONSTRUIRE, A5_EXEMPLES, A5_PIEGE, A5_ECOUTE, A5_HACKS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LA BASCULE
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Sur l’escabeau',
  frSub: 'Le soir du déménagement',
  setting: 'Dans la cuisine, le soir du déménagement, à Lyon. Karim est sur l’escabeau, tu tiens la boîte.',
  bubbles: [
    { from: 'narrator', fr: 'Karim cherche la clé de la cave. Elle est sur l’étagère, près de toi.', en: 'Karim is looking for the cellar key. It is on the shelf, next to you.' },
    { from: 'coach', fr: 'La clé est derrière toi. Donne-la-moi.', en: 'The key is behind you. Donne-la-moi.' },
    { from: 'user', fr: 'Tu veux que je te la donne.', en: 'You want me to give it to you.' },
    { from: 'coach', fr: 'Oui, et regarde l’ordre : la chose d’abord, et me devient moi.', en: 'Yes, and look at the order: the thing first, and me becomes moi.' },
    { from: 'user', fr: 'Donne-la-moi. C’est l’inverse de tout ce que j’ai appris.', en: 'Donne-la-moi. It is the opposite of everything I have learned.', warn: 'la file est passée derrière le verbe' },
    { from: 'coach', fr: 'Seulement quand l’ordre dit oui. Dès que tu dis non, tout revient devant.', en: 'Only when the command says yes. As soon as you say no, everything moves back in front.' },
  ],
  closing: { fr: 'Un ordre qui dit oui fait basculer la file derrière le verbe.', en: 'A command that says yes flips the queue behind the verb.' },
  audio: REC('rec-b1-17-escabeau'),
  say: REFRAME,
  terms: ['bascule', 'chose'],
};

const A6_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Trois choses changent en même temps',
  frSub: 'L’ordre affirmatif',
  hint: 'Quatre cartes. Trois changements, pas un de plus.',
  audio: REC('rec-b1-17-bascule'),
  say: REFRAME,
  terms: ['bascule', 'chose'],
  cards: [
    {
      head: 'Un : la file passe derrière', label: 'avec des traits d’union',
      fr: 'Donne-le-moi.', sub: '[donn-luh-MWA]',
      body: 'Le verbe part devant et la file le suit, accrochée par des traits d’union. EN: the verb goes first and the queue follows, hooked on by hyphens.',
    },
    {
      head: 'Deux : la chose ouvre', label: 'le la les d’abord',
      fr: 'Dis-le-nous.', sub: '[dee-luh-NOO]',
      body: 'Derrière le verbe, c’est toujours le, la ou les qui vient en premier, même avec nous ou vous. EN: behind the verb, le, la or les always comes first, even with nous or vous.',
    },
    {
      head: 'Trois : me devient moi', label: 'te devient toi',
      fr: 'Prête-le-moi cinq minutes.', sub: '[preht-luh-MWA sehⁿk mee-NÜT]',
      body: 'À la fin d’un groupe, me et te deviennent moi et toi. C’est le seul endroit de la leçon où ils changent. EN: at the end of a group me and te become moi and toi, and this is the only place they change.',
    },
    {
      head: 'Et en reste dernier', label: 'moi redevient m’',
      fr: 'Donne-m’en un peu.', sub: '[donn-mahⁿ uhⁿ PEU]',
      body: 'Devant en, moi redevient m’. La cinquième place ne bouge jamais, même ici. EN: before en, moi turns back into m’, and the fifth place never moves.',
    },
  ],
};

const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-imperatif',
  title: 'Les six formes de l’ordre',
  frSub: 'Touche une ligne pour l’entendre',
  cols: ['Forme', 'Ce qui se passe', 'Exemple'],
  rows: [
    {
      cells: ['oui, un mot', 'derrière, un trait d’union', 'Fais-le tout de suite.'],
      say: 'Fais-le tout de suite, sinon tu vas oublier.',
      detail: { title: 'Un seul petit mot', body: 'Le verbe, un trait d’union, le mot. Rien d’autre ne change. EN: the verb, a hyphen, the word, and nothing else changes.', say: 'Montrez-moi où ça fait mal.' },
    },
    {
      cells: ['oui, deux mots', 'la chose ouvre', 'Donne-le-moi.'],
      say: 'Donne-le-moi.',
      detail: { title: 'Deux petits mots', body: 'Derrière le verbe, la chose passe toujours devant la personne, même devant moi. EN: behind the verb the thing always goes in front of the person, even in front of moi.', say: 'Montre-les-lui.' },
    },
    {
      cells: ['oui, avec me ou te', 'me devient moi', 'Prête-le-moi cinq minutes.'],
      say: 'Prête-le-moi cinq minutes.',
      detail: { title: 'La forme accentuée', body: 'En fin de groupe, me et te deviennent moi et toi, parce qu’on ne finit pas un mot sur un son aussi faible. EN: at the end of a group me and te become moi and toi.', say: 'Rends-le-moi avant ce soir.' },
    },
    {
      cells: ['oui, avec en', 'moi redevient m’', 'Donne-m’en un peu.'],
      say: 'Donne-m’en un peu.',
      detail: { title: 'Devant en', body: 'en commence par une voyelle, donc moi s’élide et redevient m’. EN: en begins with a vowel, so moi elides back to m’.', say: 'Achète-m’en deux, s’il te plaît.' },
    },
    {
      cells: ['oui, avec y', 'y juste avant en', 'Emmène-nous-y dimanche.'],
      say: 'Emmène-nous-y dimanche.',
      detail: { title: 'Avec un lieu', body: 'y garde sa quatrième place, donc il vient après la personne et avant en. EN: y keeps its fourth place, after the person and before en.', say: 'Parle-lui-en demain.' },
    },
    {
      cells: ['non', 'tout revient devant', 'Ne me le donne pas.'],
      say: 'Ne me le donne pas.',
      detail: { title: 'L’ordre négatif', body: 'Dès qu’il y a ne, la file reprend sa place habituelle devant le verbe. C’est l’acte suivant. EN: as soon as there is a ne, the queue takes its usual place in front of the verb.', say: 'Ne le lui dis pas.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bascule', 'file'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Donne l’ordre',
  frSub: 'Derrière, et la chose devant',
  groups: [
    grp('Avec moi et nous', [
      it(E(1694), 'la chose, puis moi'),
      it(E(1695), 'la chose, puis nous'),
      it(E(1700), 'les, puis moi'),
      it('fr.a2.symptomes.202', 'un seul mot, et il est accentué'),
    ], chk(
      'Pourquoi écrit-on moi et pas me ?',
      ['parce que me est trop court à la fin d’un groupe', 'parce que le verbe est à l’impératif'],
      0,
      'On ne finit pas un groupe sur un son aussi faible. EN: a group does not end on so weak a sound.',
    )),
    grp('Avec lui et leur', [
      it(E(1696), 'les, puis lui'),
      it(E(1697), 'la, puis leur'),
      it(E(1701), 'la, puis lui'),
      it(E(1710), 'les, puis lui'),
    ], chk(
      'Derrière le verbe, lui et leur sont...',
      ['toujours après la chose', 'toujours en premier'],
      0,
      'La chose ouvre, comme devant le verbe. EN: the thing opens, just as it does in front of the verb.',
    )),
    ctl('Avec en', 'Dans « donne-m’en un peu », pourquoi m’ et pas moi ?',
      ['parce que en commence par une voyelle', 'parce que la phrase est courte', 'parce que en est un pluriel'], 0,
      'moi s’élide devant le son de en. EN: moi elides before the sound of en.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bascule', 'chose', 'elision'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Six ordres mal donnés',
  frSub: 'Le plus gros piège de la leçon',
  rule: {
    title: 'Trois changements, et ils arrivent ensemble',
    body: 'Un ordre affirmatif fait trois choses d’un coup : la file passe derrière, la chose ouvre, et me devient moi. EN: an affirmative command does three things at once: the queue moves behind, the thing opens, and me becomes moi.',
  },
  cards: [
    { promptLabel: 'la file restée devant', promptSound: 'Le me donne.', fr: 'Donne-le-moi.', ipa: '/dɔn lə mwa/', tip: 'Un ordre qui dit oui renvoie tout derrière. EN: a yes command sends everything behind.' },
    { promptLabel: 'l’ordre anglais', promptSound: 'Donne-moi-le.', fr: 'Donne-le-moi.', ipa: '/dɔn lə mwa/', tip: 'Give me it : la chose passe devant, même ici. EN: the thing goes first, even here.' },
    { promptLabel: 'me laissé tel quel', promptSound: 'Prête-le-me.', fr: 'Prête-le-moi cinq minutes.', ipa: '/pʁɛt lə mwa sɛ̃k mi.nyt/', tip: 'En fin de groupe, me devient moi. EN: at the end of a group me becomes moi.' },
    { promptLabel: 'avec lui', promptSound: 'Montre-lui-les.', fr: 'Montre-les-lui.', ipa: '/mɔ̃tʁ le lɥi/', tip: 'lui reste troisième, même derrière le verbe. EN: lui stays third, even behind the verb.' },
    { promptLabel: 'moi gardé devant en', promptSound: 'Donne-moi-en un peu.', fr: 'Donne-m’en un peu.', ipa: '/dɔn mɑ̃ œ̃ pø/', tip: 'moi s’élide devant en. EN: moi elides before en.' },
    { promptLabel: 'en promu', promptSound: 'Parle-en-lui demain.', fr: 'Parle-lui-en demain.', ipa: '/paʁl lɥi ɑ̃ də.mɛ̃/', tip: 'en est cinquième partout, même dans un ordre. EN: en is fifth everywhere, commands included.' },
  ],
  drill: [
    { promptSay: 'Le carnet : ... , s’il te plaît.', opts: ['donne-moi-le', 'donne-le-moi'], correct: 1 },
    { promptSay: 'Le résultat : ... ce soir.', opts: ['dis-le-nous', 'dis-nous-le'], correct: 0 },
    { promptSay: 'Les photos : ... demain.', opts: ['montre-lui-les', 'montre-les-lui'], correct: 1 },
    { promptSay: 'Du gâteau : ... un peu.', opts: ['donne-m’en', 'donne-moi-en'], correct: 0 },
    { promptSay: 'La clé : ... avant ce soir.', opts: ['rends-moi-la', 'rends-la-moi'], correct: 1 },
    { promptSay: 'Au marché : ... dimanche.', opts: ['emmène-nous-y', 'emmène-y-nous'], correct: 0 },
    { promptSay: 'Du projet : ... demain.', opts: ['parle-en-lui', 'parle-lui-en'], correct: 1 },
    { promptSay: 'Le livre : ... cinq minutes.', opts: ['prête-le-moi', 'prête-le-me'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Trois changements ensemble' },
    { label: 'Six cartes', kind: 'cards', title: 'Six ordres qui n’existent pas' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six ordres corrects' },
    { label: 'À toi', kind: 'drill', title: 'Huit ordres', gate: true },
  ],
  audio: REC('rec-b1-17-piege-ordre'),
  say: REFRAME,
  terms: ['bascule', 'chose'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Cinq ordres du quotidien',
  examples: [
    ex(E(1698), 'la chose, puis moi'),
    ex(E(1699), 'la chose, puis nous'),
    ex(E(1706), 'nous, puis y'),
    ex(E(1712), 'te élidé devant en'),
    ex('fr.a2.metiers.036', 'un seul mot accentué'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bascule'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris l’ordre que tu entends',
  frSub: 'Le verbe, puis la file',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['bascule'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La place', 'Dans un ordre affirmatif, la file se met...',
    ['derrière le verbe, avec des traits d’union', 'devant le verbe, comme d’habitude'], 0,
    'Le verbe part devant et la file le suit. EN: the verb goes first and the queue follows.'),
  ctl('Qui ouvre', 'Derrière le verbe, quel petit mot vient en premier ?',
    ['moi ou toi', 'lui ou leur', 'le, la ou les'], 2,
    'La chose ouvre, ici comme ailleurs. EN: the thing opens, here as everywhere.'),
  ctl('La forme', 'Dans un ordre affirmatif, me devient...',
    ['moi', 'm’', 'me, sans changement'], 0,
    'moi, sauf devant en, où il redevient m’. EN: moi, except before en where it goes back to m’.'),
], ['bascule', 'chose']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'À l’impératif',
    opener: {
      line: 'Tu demandes quelque chose à quelqu’un, et toute la file change de côté en même temps. EN: You ask somebody for something, and the whole queue changes sides at once.',
      imageRef: 'lessons/ordre-pronoms/act06.jpg',
    },
    sections: [],
    milestone: 'Tu donnes un ordre avec deux petits mots derrière le verbe, dans le bon ordre et avec moi. EN: You can give a command with two little words behind the verb, in the right order and with moi.',
    estScreens: 38, restPoints: ['a6-tableau', 'a6-construire'],
  },
  sections: [A6_HISTOIRE, A6_REGLE, A6_TABLEAU, A6_CONSTRUIRE, A6_PIEGE, A6_EXEMPLES, A6_DICTEE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — RIEN NE BOUGE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET by ear, straight after the flip: the same verbs, the same pronouns,
 *  and the file back where it started. */
const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Oui, puis non',
  frSub: 'Écoute de quel côté est la file',
  lines: [
    ln(E(1694)), ln(E(1714)), ln(E(1696)), ln(E(1715)),
    ln(E(1711)), ln(E(1719)), ln(E(1704)), ln(E(1717)),
  ],
  questions: [
    { q: 'Deuxième phrase : la file est devant ou derrière le verbe ?', opts: ['derrière', 'devant'], correct: 1, why: '« ne me le donne pas » : la négation ramène tout devant. EN: the negation brings everything back in front.' },
    { q: 'Qu’est-ce qui distingue la première de la deuxième ?', opts: ['oui ou non', 'le verbe'], correct: 0, why: 'Même verbe, même chose, même personne : seul ne change. EN: same verb, same words, only the ne differs.' },
    { q: 'Dans les phrases négatives, me reste-t-il me ?', opts: ['oui', 'non, il devient moi'], correct: 0, why: 'moi n’existe que derrière le verbe. EN: moi only exists behind the verb.' },
    { q: 'Combien des huit phrases ont des traits d’union ?', opts: ['toutes', 'quatre', 'aucune'], correct: 1, why: 'Une sur deux : seules les affirmatives. EN: every other one, the affirmative ones.' },
  ],
  audio: REC('rec-b1-17-ouinon'),
  say: REFRAME,
  terms: ['bascule', 'file'],
};

const A7_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le contre-ordre ne bascule pas',
  frSub: 'Dès qu’il y a ne',
  hint: 'Quatre cartes. Compare chaque fois avec l’acte 6.',
  audio: REC('rec-b1-17-contre'),
  say: REFRAME,
  terms: ['bascule', 'proche'],
  cards: [
    {
      head: 'La file revient devant', label: 'ne + la file + verbe + pas',
      fr: 'Ne me le donne pas.', sub: '[nuh muh luh DONN pa]',
      body: 'La négation entoure le bloc entier : ne devant la file, pas après le verbe. EN: the negation wraps the whole block: ne in front of the queue, pas after the verb.',
    },
    {
      head: 'Et l’ordre habituel revient avec elle', label: 'me redevient premier',
      fr: 'Ne les leur rends pas tout de suite.', sub: '[nuh lay luhr RAHⁿ pa too duh SWEET]',
      body: 'Les cinq places reprennent leurs numéros. Rien de l’acte 6 ne survit. EN: the five places take their numbers back and nothing from act 6 survives.',
    },
    {
      head: 'moi disparaît', label: 'me · te',
      fr: 'Ne t’en fais pas.', sub: '[nuh tahⁿ FEH pa]',
      body: 'moi et toi n’existent que derrière le verbe. Devant, ce sont me et te, élidés si besoin. EN: moi and toi only exist behind the verb.',
    },
    {
      head: 'Et les traits d’union aussi', label: 'aucun',
      fr: 'Ne le lui dis pas.', sub: '[nuh luh lwee DEE pa]',
      body: 'Pas de traits d’union dans un ordre négatif : ils n’accrochent la file qu’au bout du verbe. EN: no hyphens in a negative command, because they only hook the queue onto the end of the verb.',
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Dis non',
  frSub: 'Tout revient devant',
  groups: [
    grp('Avec une personne proche', [
      it(E(1721), 'me, puis les'),
      it(E(1725), 'nous, puis le'),
      it(E(1727), 'me élidé, puis en'),
      it('fr.a2.heure-et-date.133', 'un ordre affirmatif, pour comparer'),
    ], chk(
      'Dans les trois premières, où est la file ?',
      ['derrière le verbe', 'devant le verbe, entre ne et lui'],
      1,
      'La négation la ramène à sa place habituelle. EN: the negation brings it back to its usual place.',
    )),
    grp('Avec lui, leur, y ou en', [
      it(E(1716), 'les, puis leur'),
      it(E(1724), 'lui, puis en'),
      it(E(1726), 'les, puis y'),
      it(E(1729), 'vous, puis en'),
    ], chk(
      'Ces quatre phrases suivent-elles les numéros de l’acte 2 ?',
      ['Oui, exactement les mêmes.', 'Non, l’ordre est inversé.'],
      0,
      'La forme négative ne change aucun numéro. EN: the negative changes no number.',
    )),
    ctl('Le test', 'Comment sais-tu de quel côté mettre la file ?',
      ['tu regardes le verbe', 'tu cherches ne', 'tu comptes les mots'], 1,
      'Un ne, et tout reste devant. EN: one ne, and everything stays in front.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bascule', 'file'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre contre-ordres ratés',
  errors: [
    {
      wrong: 'Ne donne-le-moi pas.',
      right: 'Ne me le donne pas.',
      why: 'Tu as gardé la forme de l’acte 6 et ajouté la négation autour. La bascule ne survit pas au ne. EN: you kept act 6 and wrapped a negation round it; the flip does not survive the ne.',
    },
    {
      wrong: 'Ne moi le donne pas.',
      right: 'Ne me le donne pas.',
      why: 'moi est la forme accentuée, et elle ne sert que derrière le verbe. Devant, c’est me. EN: moi is the stressed form and only works behind the verb.',
    },
    {
      wrong: 'Ne le me donne pas.',
      right: 'Ne me le donne pas.',
      why: 'Tu as gardé « la chose d’abord », qui est vrai derrière le verbe et faux devant, avec me. EN: the thing goes first behind the verb, not in front of it with me.',
    },
    {
      wrong: 'Ne me-le donne pas.',
      right: 'Ne me le donne pas.',
      why: 'Les traits d’union accrochent la file au verbe quand elle est derrière. Devant, il n’y en a jamais. EN: hyphens only hook the queue onto the verb when it stands behind.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bascule', 'proche'],
};

/** CHOOSE. The two commands side by side, and only ne decides. */
const A7_COMPARER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-comparer',
  layer: 'core',
  size: 'lg',
  title: 'Les deux ordres, face à face',
  frSub: 'Même verbe, deux formes',
  groups: [
    grp('Il dit oui : derrière', [
      it(E(1695), 'la chose, puis nous'),
      it(E(1697), 'la chose, puis leur'),
      it(E(1708), 'la chose, puis moi'),
    ], chk(
      'Qu’ont en commun ces trois phrases ?',
      ['les traits d’union', 'la négation'],
      0,
      'Trois ordres affirmatifs, trois files accrochées derrière. EN: three affirmative commands, three queues hooked on behind.',
    )),
    grp('Il dit non : devant', [
      it(E(1722), 'le, puis leur'),
      it(E(1728), 'le, puis lui'),
      it(E(1723), 'me élidé, puis y'),
    ], chk(
      'Et ces trois-là, qu’ont-elles en commun ?',
      ['ne devant, pas après, et aucune bascule', 'un verbe plus court'],
      0,
      'La négation entoure le bloc et le laisse devant. EN: the negation wraps the block and leaves it in front.',
    )),
    ctl('En une phrase', 'Quand la file passe-t-elle derrière le verbe ?',
      ['dans toutes les phrases courtes', 'dans un ordre affirmatif, et nulle part ailleurs'], 1,
      'C’est le seul cas de toute la leçon. EN: it is the only case in the whole lesson.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bascule'],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-imperatif',
  title: 'Ce qu’il faut retenir des actes 6 et 7',
  points: [
    'Un ordre affirmatif envoie la file derrière, avec des traits d’union. EN: an affirmative command sends the queue behind, with hyphens.',
    'Derrière le verbe, la chose ouvre, et me devient moi. EN: behind the verb the thing opens and me becomes moi.',
    'Un seul ne, et tout revient devant, dans l’ordre habituel. EN: one ne, and everything comes back in front in the usual order.',
    'Devant le verbe, il n’y a jamais de traits d’union ni de moi. EN: in front of the verb there are never hyphens and never moi.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bascule', 'file'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le déclencheur', 'Qu’est-ce qui empêche la bascule ?',
    ['un verbe long', 'le mot ne'], 1,
    'Dès qu’il y a ne, la file reste devant. EN: as soon as there is a ne, the queue stays in front.'),
  ctl('La forme', 'Dans un ordre négatif, on écrit...',
    ['ne moi le donne pas', 'ne me le donne pas', 'ne donne-le-moi pas'], 1,
    'Ordre habituel, sans traits d’union, sans moi. EN: ordinary order, no hyphens, no moi.'),
  ctl('Le résumé', 'Combien de formes font basculer la file dans toute la leçon ?',
    ['une seule', 'deux', 'trois'], 0,
    'L’ordre affirmatif, et rien d’autre. EN: the affirmative command, and nothing else.'),
], ['bascule', 'file']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Rien ne bouge',
    opener: {
      line: 'Tu viens d’apprendre à tout envoyer derrière le verbe, et un seul petit mot annule tout : ne. EN: You have just learned to send everything behind the verb, and one small word cancels it: ne.',
      imageRef: 'lessons/ordre-pronoms/act07.jpg',
    },
    sections: [],
    milestone: 'Tu passes d’un ordre affirmatif à un ordre négatif sans emporter les traits d’union avec toi. EN: You can turn an affirmative command into a negative one without carrying the hyphens across.',
    estScreens: 27, restPoints: ['a7-construire'],
  },
  sections: [A7_ECOUTE, A7_REGLE, A7_CONSTRUIRE, A7_ERREURS, A7_COMPARER, A7_FOCUS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — AU PASSÉ COMPOSÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A work email where every pronoun block sits in front of an
 *  auxiliary and three participles agree. */
const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Thomas',
  frSub: 'Lis, et regarde où tombe le bloc',
  text: "Objet : les documents du dossier Lambert. Bonjour Sonia, j’ai bien reçu les contrats, merci. Je les ai lus hier soir et je les ai transmis au service juridique ce matin. La version française, je la leur ai envoyée en premier. La version anglaise, ils me l’ont demandée cet après-midi et je la leur ai envoyée aussi. Les annexes, en revanche, je ne les ai pas trouvées : tu me les as peut-être envoyées dans un autre message. Si tu les as encore, renvoie-les-moi avant vendredi. Le client nous en a reparlé ce matin, et je préfère lui répondre avec le dossier complet. Merci d’avance, Thomas.",
  glossary: [
    { word: 'service juridique', en: 'legal department', note: 'Les avocats de l’entreprise. EN: the company lawyers.' },
    { word: 'les annexes', en: 'the appendices', note: 'Les documents ajoutés à la fin d’un contrat.' },
    { word: 'en revanche', en: 'on the other hand', note: 'Sert à marquer un contraste, comme par contre.' },
    { word: 'le dossier complet', en: 'the complete file', note: 'Tous les papiers ensemble, sans rien qui manque.' },
  ],
  questions: [
    { q: 'Dans « je la leur ai envoyée », devant quel mot se met la file ?', a: 'Devant ai, l’auxiliaire. Le participe envoyée reste seul derrière.' },
    { q: 'Pourquoi « envoyée » prend-il un e ?', a: 'la est devant le verbe et remplace la version française, un mot féminin. Le participe s’accorde avec lui.' },
    { q: 'Pourquoi « trouvées » prend-il es ?', a: 'les remplace les annexes, féminin pluriel, et il est devant le verbe.' },
    { q: 'Pourquoi « reparlé » ne s’accorde-t-il pas dans « nous en a reparlé » ?', a: 'en n’est pas un complément direct, donc il ne déclenche aucun accord.' },
  ],
  audio: REC('rec-b1-17-message'),
  say: REFRAME,
  terms: ['bloc', 'accord'],
};

const A8_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Devant l’auxiliaire',
  frSub: 'Le verbe conjugué, c’est avoir ou être',
  hint: 'Quatre cartes. Cherche le verbe conjugué.',
  audio: REC('rec-b1-17-auxiliaire'),
  say: REFRAME,
  terms: ['bloc', 'accord'],
  cards: [
    {
      head: 'Le bloc se colle à l’auxiliaire', label: Cap(PC_AVOIR_REF),
      fr: 'Je le lui ai donné.', sub: '[zhuh luh lwee ay do-NAY]',
      body: 'Au passé composé, le verbe conjugué est avoir ou être. La file se colle à lui, pas au participe. EN: the conjugated verb is the auxiliary, so the queue sticks to it and not to the participle.',
    },
    {
      head: 'La négation entoure le tout', label: 'ne · pas',
      fr: 'Elle ne me l’a pas dit.', sub: '[ehl nuh muh la pa DEE]',
      body: 'ne se met devant la file, pas juste après l’auxiliaire. Le participe reste dehors. EN: ne goes in front of the queue and pas right after the auxiliary.',
    },
    {
      head: 'La chose devant fait accorder', label: 'le · la · les',
      fr: 'Je les ai vues au marché.', sub: '[zhuh lay zay VÜ oh mar-SHAY]',
      body: `${Cap(PARTICIPES_REF)} t'a donné les participes. Ici, le participe s'accorde avec la chose passée devant. EN: the participle agrees with the thing that has moved in front.`,
    },
    {
      head: 'lui, leur, y et en ne font rien', label: 'aucun accord',
      fr: 'On leur en a parlé longuement.', sub: '[ohⁿ luh-rahⁿ na par-LAY lohⁿg-MAHⁿ]',
      body: 'Seul un complément direct déclenche l’accord. lui, leur, y et en laissent le participe tranquille. EN: only a direct object triggers agreement.',
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Place le bloc',
  frSub: 'Devant avoir, jamais devant le participe',
  groups: [
    grp('Affirmatif', [
      it(E(1730), 'le lui, puis ai'),
      it(E(1735), 'nous l’, puis a'),
      it(E(1737), 'le leur, puis avons'),
      it('fr.a2.pronoms-essentiels.227', 'les, puis ai'),
    ], chk(
      'Entre la file et le participe, qu’y a-t-il toujours ?',
      ['rien', 'l’auxiliaire'],
      1,
      'avoir ou être se glisse entre les deux. EN: avoir or être sits between them.',
    )),
    grp('Négatif', [
      it(E(1738), 'ne devant la file, pas après a'),
      it(E(1745), 'ne, la file, ai, jamais'),
      it('fr.a2.pronoms-essentiels.234', 'ne les ai pas'),
      it('fr.a2.objets.116', 'ne les a pas rendus'),
    ], chk(
      'Où se met pas dans ces phrases ?',
      ['juste après l’auxiliaire', 'après le participe', 'devant la file'],
      0,
      'ne devant le bloc, pas juste derrière l’auxiliaire. EN: ne in front of the block, pas right after the auxiliary.',
    )),
    ctl('Le repère', 'Pour placer la file au passé composé, tu cherches...',
      ['le participe', 'le sujet', 'l’auxiliaire'], 2,
      'C’est lui le verbe conjugué. EN: the auxiliary is the conjugated verb.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc', 'file'],
};

const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-passe',
  title: 'Six formes au passé composé',
  frSub: 'Touche une ligne pour l’entendre',
  cols: ['Forme', 'Exemple', 'Ce qui bouge'],
  rows: [
    {
      cells: ['affirmative', 'Je le lui ai donné.', 'la file devant ai'],
      say: 'Je le lui ai donné.',
      detail: { title: 'La forme de base', body: 'Deux petits mots, l’auxiliaire, le participe. Toujours dans cet ordre. EN: two little words, the auxiliary, the participle, always in that order.', say: 'Nous le leur avons envoyé lundi.' },
    },
    {
      cells: ['négative', 'Elle ne me l’a pas dit.', 'ne devant la file'],
      say: 'Elle ne me l’a pas dit.',
      detail: { title: 'Avec la négation', body: 'ne ouvre, pas se referme juste après l’auxiliaire, et le participe reste dehors. EN: ne opens and pas closes right after the auxiliary.', say: 'Je ne le lui ai jamais demandé.' },
    },
    {
      cells: ['avec en', 'On leur en a parlé longuement.', 'en garde la place 5'],
      say: 'On leur en a parlé longuement.',
      detail: { title: 'Avec en', body: 'Les numéros de place ne changent pas au passé composé. en reste dernier. EN: the place numbers do not change in the passé composé.', say: 'Tu m’en as promis deux.' },
    },
    {
      cells: ['accord avec la', 'Tu la lui as rendue.', 'le participe prend un e'],
      say: 'Tu la lui as rendue.',
      detail: { title: 'L’accord au féminin', body: 'la est devant le verbe, donc le participe s’accorde avec elle. EN: la stands in front of the verb, so the participle agrees with it.', say: 'Le notaire la lui a lue à voix haute.' },
    },
    {
      cells: ['accord avec les', 'Elle me les a montrées.', 'le participe prend es'],
      say: 'Elle me les a montrées.',
      detail: { title: 'L’accord au pluriel', body: 'les remplace un nom féminin pluriel : deux lettres s’ajoutent au participe. EN: les stands for a feminine plural noun, so two letters are added.', say: 'On te les a rendus hier soir.' },
    },
    {
      cells: ['sans accord', 'Elle nous y a emmenés en voiture.', 'y ne fait rien'],
      say: 'Elle nous y a emmenés en voiture.',
      detail: { title: 'Quand rien ne s’accorde', body: 'lui, leur, y et en ne sont pas des compléments directs. Ici l’accord vient de nous, pas de y. EN: lui, leur, y and en are not direct objects and trigger nothing.', say: 'On leur en a parlé longuement.' },
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'bloc'],
};

const A8_ACCORD: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-accord',
  layer: 'core',
  title: 'Cinq accords, cinq raisons',
  examples: [
    ex(E(1734), 'les remplace un féminin pluriel'),
    ex(E(1733), 'la remplace un féminin singulier'),
    ex(E(1747), 'les remplace un masculin pluriel'),
    ex(E(1746), 'l’ remplace un féminin singulier'),
    ex(E(1739), 'en ne déclenche aucun accord'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six blocs mal posés',
  frSub: 'Le participe n’est pas le verbe conjugué',
  rule: {
    title: 'Cherche l’auxiliaire, pas le sens',
    body: 'Au passé composé, le verbe conjugué est avoir ou être, et la file se colle à lui. Le participe vient après, tout seul. EN: the conjugated verb is avoir or être, and the queue sticks to it; the participle comes after, on its own.',
  },
  cards: [
    { promptLabel: 'la file sur le participe', promptSound: 'J’ai le lui donné.', fr: 'Je le lui ai donné.', ipa: '/ʒə lə lɥi e dɔ.ne/', tip: 'ai est le verbe conjugué. EN: ai is the conjugated verb.' },
    { promptLabel: 'la négation mal placée', promptSound: 'Elle me l’a ne pas dit.', fr: 'Elle ne me l’a pas dit.', ipa: '/ɛl nə mə la pa di/', tip: 'ne ouvre le bloc entier. EN: ne opens the whole block.' },
    { promptLabel: 'pas après le participe', promptSound: 'Je ne le lui ai demandé pas.', fr: 'Je ne le lui ai jamais demandé.', ipa: '/ʒə nə lə lɥi e ʒa.mɛ də.mɑ̃.de/', tip: 'pas ou jamais se pose juste après l’auxiliaire. EN: pas or jamais lands right after the auxiliary.' },
    { promptLabel: 'accord oublié', promptSound: 'Elle me les a montré.', fr: 'Elle me les a montrées.', ipa: '/ɛl mə le za mɔ̃.tʁe/', tip: 'les est devant : le participe s’accorde. EN: les is in front, so the participle agrees.' },
    { promptLabel: 'accord inventé', promptSound: 'On leur en a parlés.', fr: 'On leur en a parlé longuement.', ipa: '/ɔ̃ lœ.ʁɑ̃ na paʁ.le lɔ̃ɡ.mɑ̃/', tip: 'en n’est pas un complément direct. EN: en is not a direct object.' },
    { promptLabel: 'l’ordre inversé', promptSound: 'On l’nous a dit hier.', fr: 'On nous l’a dit hier.', ipa: '/ɔ̃ nu la di jɛʁ/', tip: 'nous est premier, même au passé. EN: nous is first, in the past too.' },
  ],
  drill: [
    { promptSay: 'Le dossier : je ... donné hier.', opts: ['ai le lui', 'le lui ai'], correct: 1 },
    { promptSay: 'La nouvelle : elle ... dit.', opts: ['ne me l’a pas', 'me l’a ne pas'], correct: 0 },
    { promptSay: 'Les lettres : elle me les a ... .', opts: ['montrées', 'montré'], correct: 0 },
    { promptSay: 'Du projet : on leur en a ... .', opts: ['parlés', 'parlé'], correct: 1 },
    { promptSay: 'La clé : tu la lui as ... .', opts: ['rendu', 'rendue'], correct: 1 },
    { promptSay: 'La réponse : on ... a dit hier.', opts: ['nous l’', 'l’nous'], correct: 0 },
    { promptSay: 'Les billets : on te les a ... hier soir.', opts: ['rendus', 'rendu'], correct: 0 },
    { promptSay: 'Le prêt : le médecin ... interdit.', opts: ['a le lui', 'le lui a'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Cherche l’auxiliaire' },
    { label: 'Six cartes', kind: 'cards', title: 'Six blocs mal posés' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-17-piege-passe'),
  say: REFRAME,
  terms: ['bloc', 'accord'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de passé composé',
  errors: [
    {
      wrong: 'J’ai le lui donné.',
      right: 'Je le lui ai donné.',
      why: 'Tu as cherché le verbe qui porte le sens. Le verbe conjugué, c’est l’auxiliaire. EN: you looked for the verb carrying the meaning, but the conjugated verb is the auxiliary.',
    },
    {
      wrong: 'Elle me l’a pas dit.',
      right: 'Elle ne me l’a pas dit.',
      why: 'Très courant à l’oral, et faux à l’écrit : ne ouvre le bloc entier. EN: very common in speech and wrong in writing.',
    },
    {
      wrong: 'Elle me les a montré.',
      right: 'Elle me les a montrées.',
      why: 'On n’entend pas la différence, donc rien ne t’alerte. C’est une règle d’écriture. EN: you cannot hear the difference, so nothing warns you: this is a spelling rule.',
    },
    {
      wrong: 'Tu m’en as promis deux, je les ai attendus.',
      right: 'Tu m’en as promis deux, je les ai attendues.',
      why: 'en ne s’accorde pas, mais les si. Deux petits mots, deux comportements. EN: en triggers no agreement and les does; two little words, two behaviours.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'bloc'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La place', 'Au passé composé, la file se met devant...',
    ['l’auxiliaire', 'le participe'], 0,
    'avoir ou être est le verbe conjugué. EN: avoir or être is the conjugated verb.'),
  ctl('La négation', 'Dans un passé composé négatif, pas se met...',
    ['devant la file', 'juste après l’auxiliaire', 'après le participe'], 1,
    'ne devant le bloc, pas derrière l’auxiliaire. EN: ne in front of the block, pas after the auxiliary.'),
  ctl('L’accord', 'Lequel de ces mots fait accorder le participe ?',
    ['en', 'les', 'leur'], 1,
    'Seul un complément direct placé devant. EN: only a direct object standing in front.'),
], ['bloc', 'accord']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Au passé composé',
    opener: {
      line: 'Le verbe se coupe en deux, et tu dois savoir à quelle moitié la file se colle. EN: The verb splits in two, and you need to know which half the queue sticks to.',
      imageRef: 'lessons/ordre-pronoms/act08.jpg',
    },
    sections: [],
    milestone: 'Tu poses le bloc devant l’auxiliaire et tu accordes le participe quand la chose est passée devant. EN: You can put the block in front of the auxiliary and agree the participle when the thing has moved in front.',
    estScreens: 34, restPoints: ['a8-construire', 'a8-accord'],
  },
  sections: [A8_LECTURE, A8_REGLE, A8_CONSTRUIRE, A8_TABLEAU, A8_ACCORD, A8_PIEGE, A8_ERREURS, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — AVEC UN DEUXIÈME VERBE
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Chez le réparateur',
  frSub: 'Deux verbes, une seule file',
  setting: 'Un atelier de réparation, quai Saint-Antoine, à Lyon. Ton écran a été changé ce matin.',
  bubbles: [
    { from: 'narrator', fr: 'Le réparateur repose le téléphone sur le comptoir. L’écran est neuf.', en: 'The repairer puts the phone back on the counter. The screen is new.' },
    { from: 'coach', fr: 'Je vais vous le rendre demain matin. Il faut le laisser sécher.', en: 'I am going to give it back to you tomorrow morning. It has to be left to dry.' },
    { from: 'user', fr: 'Vous pouvez me le donner ce soir.', en: 'You can give it to me this evening.' },
    { from: 'coach', fr: 'Je ne peux pas vous le promettre. Je vais vous en dire plus vers dix-sept heures.', en: 'I cannot promise you that. I will tell you more about it around five.' },
    { from: 'user', fr: 'Les petits mots sont sur le deuxième verbe à chaque fois.', en: 'The little words are on the second verb every time.', warn: 'jamais sur vais, peux ou faut' },
    { from: 'coach', fr: 'Toujours. Ils appartiennent au verbe qui les commande, pas à celui qui est conjugué.', en: 'Always. They belong to the verb that governs them, not to the one that is conjugated.' },
  ],
  closing: { fr: 'Deux verbes, et la file se colle au second.', en: 'Two verbs, and the queue sticks to the second one.' },
  audio: REC('rec-b1-17-atelier'),
  say: REFRAME,
  terms: ['bloc', 'file'],
};

const A9_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-infinitif',
  title: 'La file suit son verbe',
  frSub: 'Celui qui la commande',
  hint: 'Quatre cartes. Demande-toi : qui donne quoi à qui.',
  audio: REC('rec-b1-17-infinitif'),
  say: REFRAME,
  terms: ['bloc', 'file'],
  cards: [
    {
      head: 'Sur l’infinitif, pas sur le premier verbe', label: Cap(FUTUR_PROCHE_REF),
      fr: 'Je vais le lui donner.', sub: '[zhuh veh luh lwee do-NAY]',
      body: 'C’est donner qui a besoin de le et de lui, pas vais. La file se colle donc à donner. EN: it is donner that needs le and lui, not vais, so the queue sticks to donner.',
    },
    {
      head: 'Avec pouvoir, vouloir, devoir', label: Cap(MODAUX_REF),
      fr: 'Tu peux m’en parler.', sub: '[tü peu mahⁿ par-LAY]',
      body: 'Même chose avec les trois verbes qui appellent un infinitif : ils ne portent jamais la file. EN: the same with the three verbs that call an infinitive: they never carry the queue.',
    },
    {
      head: 'La négation entoure le premier verbe', label: 'ne · pas',
      fr: 'On ne peut pas leur en vouloir.', sub: '[ohⁿ nuh peu pa luh-rahⁿ voo-LWAR]',
      body: 'ne et pas encadrent le verbe conjugué. La file reste plus loin, sur l’infinitif. EN: ne and pas wrap the conjugated verb, and the queue stays further on.',
    },
    {
      head: 'Avec une préposition entre les deux', label: 'de · à',
      fr: 'Elle a oublié de me le dire.', sub: '[ehl a oo-blee-AY duh muh luh DEER]',
      body: 'Même avec de ou à entre les deux verbes, la file reste juste devant l’infinitif. EN: even with de or à between the verbs, the queue sits right in front of the infinitive.',
    },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Colle la file au bon verbe',
  frSub: 'Le deuxième, toujours',
  groups: [
    grp('aller, pouvoir, vouloir', [
      it(E(1750), 'sur donner, pas sur vais'),
      it(E(1751), 'sur parler, pas sur peux'),
      it(E(1753), 'sur montrer, pas sur veut'),
      it('fr.a2.verbes.366', 'sur aider, un seul mot'),
    ], chk(
      'Dans ces quatre phrases, le premier verbe porte-t-il un petit mot ?',
      ['non, jamais', 'oui, une fois sur deux'],
      0,
      'Le premier verbe reste tout seul devant. EN: the first verb is left alone in front.',
    )),
    grp('devoir, falloir, venir de', [
      it(E(1752), 'sur dire, après il faut'),
      it(E(1755), 'sur rendre, après dois'),
      it(E(1764), 'sur rendre, après vient de'),
      it('fr.a2.appareils.004', 'sur recharger, après dois'),
    ], chk(
      'Que fait la préposition de dans « vient de me la rendre » ?',
      ['elle coupe la file en deux', 'elle ne change rien à la place de la file'],
      1,
      'La file reste collée à l’infinitif. EN: the queue stays glued to the infinitive.',
    )),
    ctl('Le test', 'Pour savoir où mettre la file, tu demandes...',
      ['quel verbe est conjugué', 'quel verbe a besoin de ces mots', 'quel verbe est le plus long'], 1,
      'Celui qui en a besoin les garde. EN: the verb that needs them keeps them.'),
  ],
  audio: AUDIO,
  say: THE_TEST,
  terms: ['bloc', 'file'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq fois sur le deuxième verbe',
  examples: [
    ex(E(1754), 'après allons, sur conduire'),
    ex(E(1757), 'après vas, sur prêter'),
    ex(E(1760), 'après vais, sur apporter'),
    ex(E(1762), 'après espérons, sur remettre'),
    ex(E(1765), 'après n’arrive pas à, sur expliquer'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc'],
};

/** CHOOSE. One verb or two, and the file goes to a different place. */
const A9_MELANGE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-melange',
  layer: 'core',
  size: 'lg',
  title: 'Un verbe ou deux',
  frSub: 'La file change d’adresse',
  groups: [
    grp('Un seul verbe : la file est devant lui', [
      it(E(1637), 'devant donne'),
      it(E(1656), 'devant montres'),
      it(E(1689), 'devant parle'),
    ], chk(
      'Combien de verbes portent la file ici ?',
      ['un seul, le verbe conjugué', 'deux, à chaque fois'],
      0,
      'Un verbe, une seule adresse possible. EN: one verb, one possible address.',
    )),
    grp('Deux verbes : la file est sur le second', [
      it(E(1758), 'sur vouloir'),
      it(E(1759), 'sur expliquer'),
      it(E(1763), 'sur emmener'),
    ], chk(
      'Pourquoi la file n’est-elle pas devant peut, préfère ou devrais ?',
      ['parce qu’ils sont trop courts', 'parce que ces verbes n’ont pas besoin d’elle'],
      1,
      'Ils appellent un infinitif, et c’est lui qui garde la file. EN: they call an infinitive, and it keeps the queue.',
    )),
    ctl('Le passé composé', 'Et « je le lui ai donné » : deux mots, deux verbes ?',
      ['non : ai donné est un seul verbe en deux mots', 'oui, comme je vais le lui donner'], 0,
      'L’auxiliaire et le participe font un seul verbe. EN: the auxiliary and the participle are one verb.'),
  ],
  audio: AUDIO,
  say: THE_TEST,
  terms: ['bloc', 'file'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre files à la mauvaise adresse',
  errors: [
    {
      wrong: 'Je le lui vais donner.',
      right: 'Je le lui ai donné.',
      why: 'Tu as pris « je le lui ai donné » comme modèle. Là, ai donné est un seul verbe ; ici, vais et donner sont deux. EN: ai donné is one verb, vais donner is two.',
    },
    {
      wrong: 'Tu m’en peux parler.',
      right: 'Tu peux m’en parler.',
      why: 'C’est parler qui a besoin de m’ et de en, pas peux. EN: it is parler that needs m’ and en, not peux.',
    },
    {
      wrong: 'Elle a oublié me le de dire.',
      right: 'Elle a oublié de me le dire.',
      why: 'La préposition reste collée au premier verbe et la file passe après elle. EN: the preposition stays with the first verb and the queue comes after it.',
    },
    {
      wrong: 'On ne leur en peut pas vouloir.',
      right: 'On ne peut pas leur en vouloir.',
      why: 'ne et pas encadrent le verbe conjugué, et la file attend plus loin. EN: ne and pas wrap the conjugated verb and the queue waits further on.',
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['bloc', 'file'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('L’adresse', 'Avec deux verbes, la file se colle...',
    ['au verbe conjugué', 'à l’infinitif'], 1,
    'À celui qui a besoin d’elle. EN: to the one that needs it.'),
  ctl('La négation', 'Dans « on ne peut pas leur en vouloir », ne et pas entourent...',
    ['l’infinitif', 'la file', 'le verbe conjugué'], 2,
    'ne peut pas : le verbe conjugué, et rien d’autre. EN: the conjugated verb and nothing else.'),
  ctl('Le faux jumeau', '« Je vais le lui donner » et « je le lui ai donné » : pourquoi la file n’est-elle pas au même endroit ?',
    ['parce que ai donné est un seul verbe', 'parce que le temps est différent'], 0,
    'Un verbe en deux mots, contre deux verbes. EN: one verb in two words, against two verbs.'),
], ['bloc', 'file']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Avec un deuxième verbe',
    opener: {
      line: 'Deux verbes se suivent, et la file n’a le droit de se coller qu’à un seul des deux. EN: Two verbs follow each other, and the queue is allowed to stick to only one of them.',
      imageRef: 'lessons/ordre-pronoms/act09.jpg',
    },
    sections: [],
    milestone: 'Tu accroches la file à l’infinitif qui la commande, même avec une préposition entre les deux. EN: You can hook the queue onto the infinitive that governs it, even with a preposition in between.',
    estScreens: 34, restPoints: ['a9-construire', 'a9-exemples'],
  },
  sections: [A9_HISTOIRE, A9_REGLE, A9_CONSTRUIRE, A9_EXEMPLES, A9_MELANGE, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — CE QU'ON ENTEND
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un bloc, pas des mots',
  frSub: 'Dix phrases à vitesse normale',
  lines: [
    ln(E(1766)), ln(E(1767)), ln(E(1768)), ln(E(1770)), ln(E(1771)),
    ln(E(1774)), ln(E(1777)), ln(E(1780)), ln('fr.a2.pronoms-essentiels.320'), ln('fr.a2.pronoms-essentiels.324'),
  ],
  questions: [
    { q: 'Première phrase : combien de syllabes avant le verbe ?', opts: ['deux', 'trois', 'quatre'], correct: 0, why: '« je t’en » : trois mots écrits, deux syllabes dites. EN: three written words, two spoken syllables.' },
    { q: 'Deuxième phrase : entends-tu me en entier ?', opts: ['oui', 'non, il est réduit à m’'], correct: 1, why: 'me perd sa voyelle devant le son de y. EN: me drops its vowel before the sound of y.' },
    { q: 'Sixième phrase : quel son entends-tu entre vous et en ?', opts: ['un z', 'rien du tout'], correct: 0, why: 'Le s de vous se prononce et passe sur la syllabe suivante. EN: the s of vous is pronounced and moves onto the next syllable.' },
    { q: 'Où tombe l’accent dans ces phrases ?', opts: ['sur les petits mots', 'sur le verbe ou la fin du groupe'], correct: 1, why: 'Le bloc est plat ; l’accent est plus loin. EN: the block is flat and the stress lands further on.' },
    { q: 'Pourquoi ces phrases sont-elles difficiles à l’oreille ?', opts: ['les mots sont rares', 'le bloc est court, plat et rapide', 'les verbes sont irréguliers'], correct: 1, why: 'Trois mots écrits peuvent ne faire qu’une syllabe et demie. EN: three written words can amount to a syllable and a half.' },
  ],
  audio: REC('rec-b1-17-bloc'),
  say: REFRAME,
  terms: ['elision', 'bloc'],
};

const A10_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-son',
  title: 'Ce que la voyelle fait tomber',
  frSub: 'Élision et liaison',
  hint: 'Quatre cartes. Écoute avant de lire.',
  audio: REC('rec-b1-17-elision'),
  say: REFRAME,
  terms: ['elision', 'bloc'],
  cards: [
    {
      head: 'me te se le la perdent leur voyelle', label: 'devant un son de voyelle',
      fr: 'Je t’en parle demain.', sub: '[zhuh tahⁿ PARL duh-MEHⁿ]',
      body: 'Trois mots écrits, deux syllabes dites. C’est ce raccourci qui rend le bloc difficile à entendre. EN: three written words, two spoken syllables, and that shortcut is what makes the block hard to hear.',
    },
    {
      head: 'y compte comme une voyelle', label: 'm’y · s’y · l’y',
      fr: 'Il m’y a vu.', sub: '[eel mee a VÜ]',
      body: 'Devant y, me devient m’ et le devient l’. On dirait un seul mot de deux sons. EN: before y, me becomes m’ and le becomes l’, and it sounds like one two-sound word.',
    },
    {
      head: 'nous, vous et les font la liaison', label: 'un z qui apparaît',
      fr: 'On vous en a envoyé un.', sub: '[ohⁿ voo zahⁿ na ahⁿ-vwa-yay UHⁿ]',
      body: 'Le s muet se réveille et passe sur la syllabe suivante. Rien ne s’écrit, tout s’entend. EN: the silent s wakes up and moves onto the next syllable: nothing is written, everything is heard.',
    },
    {
      head: 'lui et leur ne bougent jamais', label: 'ni élision, ni liaison',
      fr: 'Je le lui ai rappelé deux fois.', sub: '[zhuh luh lwee ay ra-puh-LAY deu FWA]',
      body: 'Ils gardent leur forme complète partout. C’est un repère utile quand tu écris. EN: they keep their full form everywhere, which is a useful landmark when you write.',
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Écris ce que tu entends',
  frSub: 'Le bloc, en toutes lettres',
  groups: [
    grp('Une voyelle tombe', [
      it(E(1766), 'te devient t’'),
      it(E(1770), 'me devient m’'),
      it(E(1778), 'le devient l’'),
      it(E(1772), 'le devient l’ après nous'),
    ], chk(
      'Qu’est-ce qui déclenche la chute de la voyelle ?',
      ['le son de voyelle qui suit', 'la vitesse de la phrase'],
      0,
      'Devant un son de voyelle, et seulement là. EN: before a vowel sound, and only there.',
    )),
    grp('Un z apparaît', [
      it(E(1774), 'vous en : un z'),
      it(E(1775), 'les y : un z'),
      it(E(1780), 'vous y : un z'),
      it('fr.a2.pronoms-essentiels.331', 'elle y : rien du tout'),
    ], chk(
      'Pourquoi n’entend-on pas de z dans la dernière ?',
      ['parce que elle ne finit pas par un s muet', 'parce que y est plus court'],
      0,
      'La liaison a besoin d’une consonne muette à réveiller. EN: a liaison needs a silent consonant to wake up.',
    )),
    ctl('Le repère à l’écrit', 'Quel petit mot ne change jamais de forme ?',
      ['le', 'lui', 'me'], 1,
      'lui et leur gardent leur forme partout. EN: lui and leur keep their form everywhere.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['elision', 'bloc'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: 'Trois blocs à écrire',
  frSub: 'Écoute, puis sépare les mots',
  itemIds: dicteeFor(10),
  audio: AUDIO,
  say: REFRAME,
  terms: ['elision'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Six blocs mal écrits',
  frSub: 'Ce que l’oreille ne dit pas',
  rule: {
    title: 'Ce qui tombe à l’oral s’écrit avec une apostrophe',
    body: 'Le bloc se dit d’un coup, donc rien ne t’indique où couper. À l’écrit, chaque mot reprend sa place, avec une apostrophe là où la voyelle est tombée. EN: the block is spoken in one go, so nothing shows you where to cut it.',
  },
  cards: [
    { promptLabel: 'la voyelle gardée', promptSound: 'Je te en parle demain.', fr: 'Je t’en parle demain.', ipa: '/ʒə tɑ̃ paʁl də.mɛ̃/', tip: 'te perd sa voyelle devant en. EN: te loses its vowel before en.' },
    { promptLabel: 'le bloc écrit en un mot', promptSound: 'Il mya vu.', fr: 'Il m’y a vu.', ipa: '/il mi a vy/', tip: 'Trois mots, deux apostrophes possibles, une seule ici. EN: three words, and one apostrophe.' },
    { promptLabel: 'la liaison écrite', promptSound: 'On vouzen a envoyé un.', fr: 'On vous en a envoyé un.', ipa: '/ɔ̃ vu zɑ̃ na ɑ̃.vwa.je œ̃/', tip: 'Le z s’entend et ne s’écrit pas. EN: the z is heard and never written.' },
    { promptLabel: 'l’élision inventée', promptSound: 'Je l’lui ai rappelé.', fr: 'Je le lui ai rappelé deux fois.', ipa: '/ʒə lə lɥi e ʁa.pə.le dø fwa/', tip: 'lui commence par une consonne, donc le reste entier. EN: lui starts with a consonant, so le stays whole.' },
    { promptLabel: 'la mauvaise coupe', promptSound: 'Elle sy est habituée.', fr: 'Elle s’y est habituée.', ipa: '/ɛl si ɛ a.bi.tɥe/', tip: 'se devient s’ devant y. EN: se becomes s’ before y.' },
    { promptLabel: 'le mot avalé', promptSound: 'On sen est bien sorti.', fr: 'On s’en est bien sorti.', ipa: '/ɔ̃ sɑ̃ nɛ bjɛ̃ sɔʁ.ti/', tip: 'se et en restent deux mots à l’écrit. EN: se and en stay two words in writing.' },
  ],
  drill: [
    { promptSay: 'Je ... parle demain.', opts: ['te en', 't’en'], correct: 1 },
    { promptSay: 'Il ... a vu hier.', opts: ['m’y', 'me y'], correct: 0 },
    { promptSay: 'On ... retrouve chaque été.', opts: ['le y', 'l’y'], correct: 1 },
    { promptSay: 'Je ... ai rappelé deux fois.', opts: ['le lui', 'l’lui'], correct: 0 },
    { promptSay: 'Elle ... est habituée.', opts: ['s’y', 'se y'], correct: 0 },
    { promptSay: 'On vous ... a envoyé un.', opts: ['zen', 'en'], correct: 1 },
    { promptSay: 'Tu ... souviens encore.', opts: ['te en', 't’en'], correct: 1 },
    { promptSay: 'Elle les ... a laissés.', opts: ['y', 'zy'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Ce qui tombe prend une apostrophe' },
    { label: 'Six cartes', kind: 'cards', title: 'Six blocs mal écrits' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit blocs', gate: true },
  ],
  audio: REC('rec-b1-17-piege-son'),
  say: REFRAME,
  terms: ['elision'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-son',
  title: 'Ce qu’il faut retenir de l’acte 10',
  points: [
    'me, te, se, le et la perdent leur voyelle devant un son de voyelle. EN: me, te, se, le and la lose their vowel before a vowel sound.',
    'y compte comme une voyelle : m’y, s’y, l’y. EN: y counts as a vowel.',
    'nous, vous et les réveillent un z qu’on n’écrit jamais. EN: nous, vous and les wake a z that is never written.',
    'lui et leur gardent leur forme partout, et servent de repère. EN: lui and leur keep their form everywhere and serve as a landmark.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['elision', 'bloc'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('L’élision', 'Devant y, me devient...',
    ['moi', 'm’', 'me, sans changement'], 1,
    'y compte comme une voyelle. EN: y counts as a vowel.'),
  ctl('La liaison', 'Le z de « vous en » s’écrit...',
    ['jamais', 'toujours'], 0,
    'On l’entend, on ne l’écrit pas. EN: it is heard and never written.'),
  ctl('Le repère', 'Quand tu écris un bloc entendu, tu commences par chercher...',
    ['le verbe', 'lui ou leur, qui ne changent jamais'], 1,
    'Ils sont les seuls à garder leur forme. EN: they are the only ones keeping their form.'),
], ['elision', 'bloc']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Ce qu’on entend',
    opener: {
      line: 'Trois mots écrits peuvent ne faire qu’une syllabe et demie : ici tu apprends à les entendre et à les recouper. EN: Three written words can amount to a syllable and a half: here you learn to hear them and to cut them apart again.',
      imageRef: 'lessons/ordre-pronoms/act10.jpg',
    },
    sections: [],
    milestone: 'Tu écris correctement un bloc que tu as seulement entendu, avec ses apostrophes. EN: You can write down correctly a block you have only heard, apostrophes included.',
    estScreens: 24, restPoints: ['a10-construire'],
  },
  sections: [A10_ECOUTE, A10_REGLE, A10_CONSTRUIRE, A10_DICTEE, A10_PIEGE, A10_FOCUS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — TOUT ENSEMBLE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as the model the learner will imitate in
 *  the task: instructions, a counter-instruction, a past, and a plan. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un message modèle',
  frSub: 'La forme que tu vas écrire',
  text: MODEL_TEXT,
  glossary: [
    { word: 'chargeur', en: 'charger', note: 'Le câble qui recharge un téléphone.' },
    { word: 'les doubles des clés', en: 'the spare keys', note: 'Les deuxièmes clés, celles qu’on prête.' },
    { word: 'la veille', en: 'the day before', note: 'Le jour juste avant. EN: the day before, not the evening.' },
    { word: 'par contre', en: 'on the other hand', note: 'Sert à marquer un contraste, comme en revanche.' },
  ],
  questions: [
    { q: 'Combien d’ordres affirmatifs le message contient-il ?', a: 'Deux : apporte-les-moi et dis-le-moi. Les deux ont des traits d’union.' },
    { q: 'Où est le seul ordre négatif, et comment est-il construit ?', a: '« Ne les lui donne pas avant vendredi » : la file revient devant le verbe, sans traits d’union.' },
    { q: 'Dans « je le lui ai déjà rendu », devant quel mot se met la file ?', a: 'Devant ai, l’auxiliaire. Le participe rendu reste derrière.' },
    { q: 'Pourquoi écrit-on « je ne les ai pas encore envoyées » avec ées ?', a: 'les remplace les photos, féminin pluriel, et il est devant le verbe.' },
    { q: 'Dans « je vais les lui envoyer », pourquoi la file est-elle après vais ?', a: 'C’est envoyer qui a besoin de les et de lui. La file se colle à l’infinitif.' },
  ],
  audio: REC('rec-b1-17-modele'),
  say: REFRAME,
  terms: ['file', 'bascule', 'bloc'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour écrire ton message',
  steps: [
    '1. Fais la liste des choses et des personnes dont tu vas parler. EN: list the things and the people you will mention.',
    '2. Écris chaque phrase avec les noms, en entier, sans petits mots. EN: write each sentence with the full nouns first.',
    '3. Remplace les noms un par un, et note le numéro de place de chacun. EN: replace the nouns one at a time and note each place number.',
    '4. Range la file par numéro, puis colle-la au bon verbe. EN: sort the queue by number, then glue it to the right verb.',
    '5. Relis tes ordres : traits d’union si oui, rien du tout si non. EN: reread your commands: hyphens if yes, nothing if no.',
  ],
  audio: AUDIO,
  say: THE_TEST,
  terms: ['file', 'bascule'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: 'Un message à un voisin avant de partir', fr: 'Les clés, je te les laisse dans l’enveloppe.', en: 'The keys, I am leaving them for you in the envelope.' },
    { situation: 'Au travail, pour parler d’un dossier déjà envoyé', fr: 'Je le leur ai envoyé lundi.', en: 'I sent it to them on Monday.' },
    { situation: 'Au comptoir, pour demander quelque chose', fr: 'Vous pouvez me l’écrire, s’il vous plaît ?', en: 'Could you write it down for me, please?' },
    { situation: 'Entre amis, pour couper court à une histoire', fr: 'Ne m’en parle plus.', en: 'Do not talk to me about it any more.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Le voisin passe prendre les clés',
  setting: 'La veille de ton départ. Samir monte chercher les clés et la liste des consignes. Il est pressé, donc chaque réponse doit être courte.',
  turns: [
    {
      ai: 'Les clés, tu me les donnes maintenant ou demain matin ?',
      en: 'The keys, are you giving them to me now or tomorrow morning?',
      user: 'Je te les donne maintenant.',
      userEn: 'I am giving them to you now. (Place 1 then place 2: te opens.)',
      alts: [
        { fr: 'Je te les laisse tout de suite.', en: 'I am leaving them with you right away.' },
        { fr: 'Je préfère te les donner maintenant.', en: 'I would rather give them to you now. (Two verbs, so the queue lands on the infinitive.)' },
      ],
    },
    {
      ai: 'Et le courrier, qu’est-ce que j’en fais ?',
      en: 'And the post, what do I do with it?',
      user: 'Garde-le-moi dans la boîte en carton.',
      userEn: 'Keep it for me in the cardboard box. (Affirmative command: behind the verb, thing first, me becomes moi.)',
      alts: [
        { fr: 'Mets-le-moi de côté, simplement.', en: 'Just put it aside for me.' },
        { fr: 'Tu peux me le garder jusqu’à mon retour.', en: 'You can keep it for me until I get back. (Two verbs, so the queue moves to the infinitive.)' },
      ],
    },
    {
      ai: 'Le facteur veut une signature pour un recommandé. Je la lui donne ?',
      en: 'The postman wants a signature for a recorded delivery. Shall I give it to him?',
      user: 'Non, ne la lui donne pas.',
      userEn: 'No, do not give it to him. (Negative command: the queue goes back in front, no hyphens.)',
      alts: [
        { fr: 'Non, ne lui donne rien du tout.', en: 'No, do not give him anything at all.' },
        { fr: 'Surtout pas. Ne la lui donne pas.', en: 'Definitely not. Do not give it to him.' },
      ],
    },
    {
      ai: 'La gardienne est au courant ?',
      en: 'Does the caretaker know?',
      user: 'Oui, je lui en ai parlé hier.',
      userEn: 'Yes, I talked to her about it yesterday. (Place 3 then place 5, in front of the auxiliary.)',
      alts: [
        { fr: 'Oui, je l’ai prévenue hier soir.', en: 'Yes, I told her last night.' },
        { fr: 'Oui, on lui en a parlé tous les deux.', en: 'Yes, we both talked to her about it.' },
      ],
    },
    {
      ai: 'Les plantes, il y en a combien ?',
      en: 'The plants, how many of them are there?',
      user: 'Il y en a quatre, sur le balcon.',
      userEn: 'There are four of them, on the balcony. (y fourth, en fifth, and nothing gets between them.)',
      alts: [
        { fr: 'Quatre. Arrose-les une fois par semaine.', en: 'Four. Water them once a week.' },
        { fr: 'Il y en a quatre, pas plus.', en: 'There are four of them, no more.' },
      ],
    },
    {
      ai: 'Et si j’ai un problème, je fais comment ?',
      en: 'And if I have a problem, what do I do?',
      user: 'Écris-moi, et je vais te répondre le soir même.',
      userEn: 'Write to me, and I will answer you the same evening. (A command behind the verb, then a queue on the infinitive.)',
      alts: [
        { fr: 'Envoie-moi un message, je te réponds vite.', en: 'Send me a message, I will answer you quickly.' },
        { fr: 'Tu peux m’écrire, je vais te répondre.', en: 'You can write to me, I will answer you.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'bascule', 'bloc'],
};

/** THE GRADED TASK. The unit outcome is tested here: a short written message
 *  in which the pronoun blocks do real work, in all four positions. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  // layer 'more', NOT 'core', and this is the only non-core section in the
  // lesson. The core-words rule caps every authored field at 45 words, and a
  // task's `modelAnswer` is contractually 90 to 130 words: it is the yardstick
  // the offline self-check measures against, so it cannot be shortened.
  // `PASSAGE_SECTIONS` in density.logic.ts exempts reading, progressCheck and
  // roundup prose for exactly this reason and does not yet list 'task', which
  // RESOLVED 2026-09-25: 'task' was added to PASSAGE_SECTIONS in
  // density.logic.ts, beside 'reading' and 'roundup', because a task's
  // `modelAnswer` is contractually 90 to 150 words and its `brief` sets a whole
  // situation up. Both are passages by nature. So this is back to 'core' and
  // the section is checked by every other core rule, which 'more' had hidden it
  // from.
  layer: 'core',
  title: 'Laisse tes consignes',
  frSub: 'Mission écrite',
  brief: 'Tu pars trois semaines. Ton voisin Samir s’occupe de ton appartement. Écris-lui un message : ce que tu lui laisses, ce qu’il doit faire, ce qu’il ne doit surtout pas faire, et ce que tu as déjà réglé avant de partir.',
  briefEn: 'You are going away for three weeks. Your neighbour Samir is looking after your flat. Write him a message: what you are leaving him, what he should do, what he must not do, and what you have already dealt with before leaving.',
  produce: 'Écris un message de 90 à 130 mots avec au moins deux ordres affirmatifs, au moins un ordre négatif, au moins deux phrases au passé composé et une phrase avec un deuxième verbe. Chaque fois, deux petits mots se suivent.',
  responseSpec: { kind: 'text', minWords: 90, maxWords: 130 },
  rubric: {
    criteria: [
      {
        key: 'ordre',
        label: 'Le bon ordre dans la file',
        maxPoints: 4,
        descriptors: [
          '4 : Chaque paire de petits mots est dans l’ordre des places. me, te, nous, vous ouvrent ; la chose passe devant lui et leur ; en est toujours le dernier.',
          '3 : Presque toutes les paires sont justes. Une seule hésitation, et le lecteur comprend quand même qui reçoit quoi.',
          '2 : Deux ou trois paires sont inversées. Le lecteur doit relire pour savoir qui reçoit quoi.',
          '1 : L’ordre change d’une phrase à l’autre. On ne peut pas dire quel mot remplace quel nom.',
        ],
      },
      {
        key: 'bascule',
        label: 'Les ordres, dans les deux sens',
        maxPoints: 3,
        descriptors: [
          '3 : Les ordres affirmatifs ont la file derrière le verbe, avec des traits d’union et moi ou toi. L’ordre négatif garde la file devant, sans traits d’union.',
          '2 : La bascule est là, mais il manque un trait d’union, ou moi est écrit me, ou l’ordre négatif garde un trait d’union.',
          '1 : Les deux formes sont mélangées : la file est du même côté dans les deux cas.',
        ],
      },
      {
        key: 'place',
        label: 'La file au bon endroit',
        maxPoints: 3,
        descriptors: [
          '3 : Au passé composé la file est devant l’auxiliaire, et avec deux verbes elle est sur l’infinitif. Rien ne se glisse entre la file et son verbe.',
          '2 : Une seule phrase pose la file au mauvais endroit, sur le participe ou sur le premier verbe.',
          '1 : La file flotte : elle change de place sans raison d’une phrase à l’autre.',
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Les quatre éléments sont là (deux ordres affirmatifs, un ordre négatif, deux passés composés, un deuxième verbe), entre 90 et 130 mots.',
          '1 : Il manque un élément, ou le message fait moins de 90 mots.',
        ],
      },
    ],
  },
  scaffold: ['Les clés, je te les...', 'Le courrier, garde-...', 'Surtout, ne... pas', 'Je lui en ai déjà...', 'Si tu as un souci,', 'Je vais te...', 'Il y en a', 'À mon retour,'],
  modelAnswer: 'Salut Samir, merci mille fois. Les clés, je te les laisse dans l’enveloppe, sur le palier. Le courrier, garde-le-moi dans la boîte en carton. Si le facteur te demande une signature, ne la lui donne pas. Les plantes, il y en a quatre : arrose-les une fois par semaine, pas plus. La télécommande du chauffage est sur le frigo. Mes parents me l’ont offerte, alors fais attention. J’ai déjà prévenu la gardienne et je lui en ai parlé hier. Si tu as un souci, écris-moi, et je vais te répondre le soir même. À mon retour, je te rapporte quelque chose du Sénégal. À bientôt, et merci encore.',
  modelAnswerEn: 'Hi Samir, thanks a million. The keys, I am leaving them for you in the envelope, on the landing. The post, keep it for me in the cardboard box. If the postman asks you for a signature, do not give it to him. The plants, there are four of them: water them once a week, no more. The heating remote is on the fridge. My parents gave it to me, so be careful with it. I have already warned the caretaker and I talked to her about it yesterday. If you have a problem, write to me, and I will answer you the same evening. When I get back, I will bring you something from Senegal. See you soon, and thanks again.',
  watchFor: [
    {
      pattern: 'The person written in front of the thing with lui or leur (je lui la laisse, ne lui la donne pas).',
      criterion: 'ordre',
      feedback: 'Avec lui et leur, la chose passe devant : je la lui laisse. Compte les places, 2 avant 3.',
      ref: 'a3-regle',
    },
    {
      pattern: 'The thing written in front of me, te, nous or vous (je les te laisse, il le me rend).',
      criterion: 'ordre',
      feedback: 'Avec me, te, nous, vous, c’est la personne qui ouvre : je te les laisse.',
      ref: 'a4-regle',
    },
    {
      pattern: 'en placed anywhere but last, or y written after en (je en te parle, il en y a quatre).',
      criterion: 'ordre',
      feedback: 'en ferme toujours la file, et y passe juste avant lui : il y en a quatre.',
      ref: 'a5-regle',
    },
    {
      pattern: 'An affirmative command with the queue still in front of the verb, or with no hyphens (le garde pour moi, garde le moi).',
      criterion: 'bascule',
      feedback: 'Un ordre qui dit oui envoie la file derrière le verbe, accrochée par des traits d’union : garde-le-moi.',
      ref: 'a6-regle',
    },
    {
      pattern: 'An affirmative command with the person before the thing, or with me instead of moi (garde-moi-le, prête-le-me).',
      criterion: 'bascule',
      feedback: 'Derrière le verbe, la chose ouvre et me devient moi : garde-le-moi.',
      ref: 'a6-piege',
    },
    {
      pattern: 'A negative command built on the flipped order, with hyphens or moi (ne garde-le-moi pas, ne moi le donne pas).',
      criterion: 'bascule',
      feedback: 'Dès qu’il y a ne, tout revient devant le verbe, sans traits d’union : ne me le garde pas.',
      ref: 'a7-regle',
    },
    {
      pattern: 'The queue parked on the participle in the passé composé (j’ai lui en parlé, elle m’a le donné).',
      criterion: 'place',
      feedback: 'Le verbe conjugué est l’auxiliaire, donc la file passe devant lui : je lui en ai parlé.',
      ref: 'a8-regle',
    },
    {
      pattern: 'Missing or invented participle agreement with a preceding direct object (mes parents me l’ont offert for a feminine thing, on leur en a parlés).',
      criterion: 'place',
      feedback: 'Le participe s’accorde avec la chose passée devant, et seulement avec elle : offerte, mais parlé.',
      ref: 'a8-accord',
    },
    {
      pattern: 'The queue parked on the conjugated verb instead of the infinitive (je te vais répondre, tu m’en peux parler).',
      criterion: 'place',
      feedback: 'Avec deux verbes, la file se colle au second : je vais te répondre.',
      ref: 'a9-regle',
    },
    {
      pattern: 'Elision missing or invented inside the block (je te en parle, je l’lui laisse, me y attends).',
      criterion: 'ordre',
      feedback: 'me, te, se, le et la perdent leur voyelle devant un son de voyelle, et lui ne s’élide jamais.',
      ref: 'a10-regle',
    },
    {
      pattern: 'Under 90 words, or one of the four required elements missing: two affirmative commands, one negative command, two passé composé sentences, one sentence with a second verb.',
      criterion: 'tache',
      feedback: 'Relis la mission : deux ordres qui disent oui, un qui dit non, deux phrases au passé, une avec deux verbes.',
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'Judge ORDER by the five places, not by direct and indirect object. « tu me les montres » is correct and has the indirect object first; marking it wrong is the single commonest grader error on this lesson.',
    'Word count EXCLUDES the greeting and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance (81-143) before criterion « tache » loses its point.',
    'A hyphenated command counts as ONE word for the count (garde-le-moi), because wordCount splits on whitespace.',
    'Accept « par contre » and « en revanche » equally, and accept Québec usage (courriel, char, dépanneuse) as well as France usage.',
    'Do NOT mark relative pronouns (qui, que, dont, où, lequel) in either direction: they belong to lessons 11 to 13 in B1 and are outside this rubric.',
    'Do NOT mark tense choice between passé composé and imparfait: that is lesson 3 in B1 and lesson 4 in B1. Mark only where the pronoun block sits and what the participle agrees with.',
    'A learner who avoids the combination altogether by repeating the nouns has not failed « ordre », but cannot score above 1 on « tache »: the mission asks for the blocks.',
    'Narrator gender is unknown: judge participle agreement against the object the text itself names, never against the writer.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'bascule', 'bloc'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis les blocs à voix haute',
  frSub: 'Vite, et sans couper',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    'fr.a2.pronoms-essentiels.315',
    'fr.a2.symptomes.202',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['elision', 'bloc'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-file',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'les cinq places', v: THE_FILE, say: 'Je le lui donne.', detail: { title: 'La file', body: 'Un numéro par mot, et les numéros montent toujours. EN: one number per word, and the numbers always go up.', say: 'Tu me les montres.' } },
    { k: 'la chose ou moi', v: 'lui et leur derrière, me et te devant', say: 'Elle les leur montre.', detail: { title: 'Qui ouvre', body: 'Avec lui et leur, la chose ouvre. Avec me et te, c’est la personne. EN: with lui and leur the thing opens; with me and te the person does.', say: 'Il te le donne demain.' } },
    { k: 'y et en', v: 'quatrième et cinquième', say: 'Il y en a trois au frigo.', detail: { title: 'Les deux dernières', body: 'y avant en, et en derrière tout le monde. EN: y before en, and en behind everybody.', say: 'Je lui en parle ce soir.' } },
    { k: 'l’ordre affirmatif', v: THE_FILE_IMP, say: 'Donne-le-moi.', detail: { title: 'La bascule', body: 'Derrière le verbe, avec des traits d’union, la chose devant et moi au lieu de me. EN: behind the verb, hyphenated, thing first, moi instead of me.', say: 'Montre-les-lui.' } },
    { k: 'l’ordre négatif', v: 'devant, comme d’habitude', say: 'Ne me le donne pas.', detail: { title: 'Le contre-ordre', body: 'Un ne, et la file reprend sa place devant le verbe. EN: one ne, and the queue takes its place back in front.', say: 'Ne le lui dis pas.' } },
    { k: 'deux verbes', v: 'la file sur le second', say: 'Je vais le lui donner.', detail: { title: 'L’adresse', body: 'Au passé composé, devant l’auxiliaire. Avec un infinitif, sur l’infinitif. EN: in the passé composé in front of the auxiliary, with an infinitive on the infinitive.', say: 'Tu peux m’en parler.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'bascule', 'bloc'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu ranges deux petits mots par numéro de place, tu fais basculer la file quand tu donnes un ordre et tu la ramènes devant dès qu’il y a un ne. Le piège qui reste est l’ordre affirmatif : trois choses changent en même temps, et on en oublie souvent une. Avant l’examen, relis ta mission écrite. Souligne chaque bloc et écris à côté les deux numéros. Si les numéros montent partout, la leçon a marché. EN: Underline every block in your task and write its two place numbers beside it; if the numbers go up everywhere, the lesson landed.',
  stats: [
    { k: 'La file', v: THE_FILE },
    { k: 'Qui ouvre', v: 'me et te devant, la chose devant lui' },
    { k: 'L’ordre affirmatif', v: 'derrière, traits d’union, moi' },
    { k: 'Deux verbes', v: 'la file sur le second' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act from act 1 to act 10 plus an integration round. Each round's target
 *  is a distinct errorTrigger, so a failed round fires that round's drill.
 *
 *  `fold()` strips hyphens, apostrophes, commas and accents, so NO typeIn or
 *  errorSpot answer here turns on one: every hyphen question is an mcq, and
 *  the open questions test WORD ORDER, which fold() preserves. Every typeIn
 *  and errorSpot carries `prompt`; every listenChoose carries `say`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une phrase ne va pas. Écris-la correctement. EN: One sentence is wrong; write it out correctly.', prompt, answer, accept: [answer], why, ref });
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
      id: 'r1-file', label: 'Deux petits mots', targets: ['un-seul-mot'],
      questions: [
        mc('Quand deux petits mots arrivent devant le même verbe, leur ordre est...', ['libre', 'décidé par le verbe', 'fixe'], 2, 'Une seule file, un seul ordre. EN: one queue, one order.', 'a1-reperer'),
        mc('Qu’est-ce qui peut se glisser entre les petits mots et leur verbe ?', ['un adverbe', 'rien'], 1, 'Ils forment un bloc avec le verbe. EN: they form one block with the verb.', 'a1-check'),
        mc('Dans « je la lui donne », que remplace la ?', ['la personne', 'le lieu', 'l’objet'], 2, 'la est la chose, lui est la personne. EN: la is the thing, lui is the person.', 'a1-scene'),
        tI('Remplace les deux noms par des petits mots.', 'Je donne l’enveloppe au propriétaire.', 'Je la lui donne.', 'La chose passe devant la personne. EN: the thing goes in front of the person.', 'a1-scene'),
        tI('Remplace les deux noms par des petits mots.', 'Tu montres les photos à moi.', 'Tu me les montres.', 'Avec me, la personne ouvre. EN: with me the person opens.', 'a1-reperer'),
        tI('Écris la phrase avec deux petits mots.', 'Il y a deux clés dans le tiroir.', 'Il y en a deux.', 'y pour le lieu, en pour la quantité. EN: y for the place, en for the amount.', 'a1-lecture'),
        eS('Je donne la lui à midi.', 'Je la lui donne à midi.', 'La file reste devant le verbe. EN: the queue stays in front of the verb.', 'a1-scene'),
        lC('Écoute. Combien de petits mots avant le verbe ?', 'Je te les donne tout de suite.', ['deux', 'un'], 0, '« te les » : deux, collés. EN: two of them, touching.', 'a1-ecoute'),
      ],
    },
    {
      id: 'r2-places', label: 'Les cinq places', targets: ['place-inventee'],
      questions: [
        mc('Quel petit mot occupe la première place ?', ['le', 'lui', 'nous'], 2, 'me, te, se, nous, vous sont premiers. EN: me, te, se, nous, vous are first.', 'a2-tableau'),
        mc('Quel petit mot est toujours le dernier ?', ['en', 'y', 'les'], 0, 'en ferme la file. EN: en closes the queue.', 'a2-check'),
        mc('Pour ranger deux petits mots, tu regardes...', ['leur sens', 'leur numéro de place'], 1, 'Les numéros montent. EN: the numbers go up.', 'a2-construire'),
        mc('Dans « le livre que je lui ai prêté », que est...', ['un pronom objet', 'un relatif'], 1, 'Un nouveau verbe le suit. EN: a new verb follows it.', 'a2-famille'),
        tI('Range les deux petits mots dans le bon ordre.', 'Le facteur (les · me) apporte chaque matin.', 'Le facteur me les apporte chaque matin.', 'Place 1 avant place 2. EN: place 1 before place 2.', 'a2-construire'),
        tI('Range les deux petits mots dans le bon ordre.', 'Je (leur · le) envoie par courriel.', 'Je le leur envoie par courriel.', 'Place 2 avant place 3. EN: place 2 before place 3.', 'a2-exemples'),
        eS('Je en te parle demain.', 'Je t’en parle demain.', 'en est cinquième, et te s’élide. EN: en is fifth, and te elides.', 'a2-erreurs'),
        lC('Écoute. Quel mot ferme le bloc ?', 'Il nous en reste trois.', ['en', 'nous'], 0, 'en est toujours le dernier. EN: en is always last.', 'a2-places'),
      ],
    },
    {
      id: 'r3-chose', label: 'La chose d’abord', targets: ['personne-devant'],
      questions: [
        mc('Avec lui ou leur, quel petit mot vient en premier ?', ['le, la ou les', 'lui ou leur'], 0, 'La chose est deuxième, la personne troisième. EN: the thing is second, the person third.', 'a3-regle'),
        mc('« Elle les leur montre. » Combien de personnes reçoivent ?', ['une', 'on ne sait pas', 'plusieurs'], 2, 'leur est le pluriel de lui. EN: leur is the plural of lui.', 'a3-check'),
        mc('Devant une voyelle, lui devient...', ['l’', 'lui, sans changement'], 1, 'lui ne s’élide jamais. EN: lui never elides.', 'a3-focus'),
        tI('Range les deux petits mots dans le bon ordre.', 'Le médecin (lui · le) conseille.', 'Le médecin le lui conseille.', '2 avant 3. EN: 2 before 3.', 'a3-construire'),
        tI('Range les deux petits mots dans le bon ordre.', 'Tu (leur · les) envoies aujourd’hui.', 'Tu les leur envoies aujourd’hui.', 'Le pluriel ne déplace rien. EN: the plural moves nothing.', 'a3-exemples'),
        tI('Remplace les deux noms par des petits mots.', 'Elle écrit la lettre à son frère.', 'Elle la lui écrit.', 'La chose ouvre, la personne suit. EN: the thing opens, the person follows.', 'a3-regle'),
        eS('Mon frère leur les prête souvent.', 'Mon frère les leur prête souvent.', 'leur est troisième, les deuxième. EN: leur is third, les second.', 'a3-piege'),
        lC('Écoute. Quel mot entends-tu en premier ?', 'Je la lui écris ce soir.', ['la', 'lui'], 0, 'La chose ouvre la paire. EN: the thing opens the pair.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-proche', label: 'Moi d’abord', targets: ['chose-devant-moi'],
      questions: [
        mc('Avec me, te, nous ou vous, qui ouvre la file ?', ['la chose', 'la personne proche'], 1, 'Ils sont à la place 1. EN: they are in place 1.', 'a4-regle'),
        mc('Pourquoi l’ordre change-t-il entre « je le lui donne » et « tu me les montres » ?', ['le sens est différent', 'le verbe est différent', 'les numéros de place sont différents'], 2, 'Une seule règle : les numéros montent. EN: one rule only, the numbers go up.', 'a4-check'),
        mc('Devant une voyelle, « me le » devient...', ['me l’', 'm’le'], 0, 'C’est le mot qui touche la voyelle qui s’élide. EN: the word touching the vowel elides.', 'a4-erreurs'),
        tI('Range les deux petits mots dans le bon ordre.', 'Elle (la · nous) prête volontiers.', 'Elle nous la prête volontiers.', 'nous est premier. EN: nous is first.', 'a4-construire'),
        tI('Range les deux petits mots dans le bon ordre.', 'Le libraire (les · vous) commande.', 'Le libraire vous les commande.', 'vous ouvre, les suit. EN: vous opens, les follows.', 'a4-exemples'),
        tI('Remplace les deux noms par des petits mots.', 'Il donne le carnet à toi demain.', 'Il te le donne demain.', 'te est premier, le est deuxième. EN: te first, le second.', 'a4-regle'),
        eS('Tu les me montres.', 'Tu me les montres.', 'me ouvre la file, toujours. EN: me opens the queue, always.', 'a4-erreurs'),
        lC('Écoute. Qui ouvre la file ?', 'Il nous le répète sans arrêt.', ['la chose', 'la personne proche'], 1, '« nous le » : nous ouvre. EN: nous opens.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-yen', label: 'y et en', targets: ['en-pas-dernier'],
      questions: [
        mc('Quel petit mot ferme toujours la file ?', ['y', 'le', 'en'], 2, 'en est cinquième. EN: en is fifth.', 'a5-check'),
        mc('Dans « il y en a », quel est l’ordre ?', ['y puis en', 'en puis y'], 0, '4 puis 5. EN: 4 then 5.', 'a5-regle'),
        mc('Dans « elle leur en apporte », qui ouvre ?', ['en', 'leur'], 1, 'leur est troisième, en cinquième. EN: leur is third, en fifth.', 'a5-construire'),
        mc('y peut-il passer devant nous ?', ['oui, si le lieu est important', 'seulement au passé', 'non, jamais'], 2, 'y est quatrième. EN: y is fourth.', 'a5-piege'),
        tI('Range les deux petits mots dans le bon ordre.', 'Il (en · nous) reste assez.', 'Il nous en reste assez.', 'nous premier, en dernier. EN: nous first, en last.', 'a5-exemples'),
        tI('Range les deux petits mots dans le bon ordre.', 'Le guide (y · les) conduit chaque matin.', 'Le guide les y conduit chaque matin.', 'les deuxième, y quatrième. EN: les second, y fourth.', 'a5-construire'),
        eS('Elle y nous emmène samedi.', 'Elle nous y emmène samedi.', 'nous ouvre, y suit. EN: nous opens, y follows.', 'a5-piege'),
        lC('Écoute. Que remplace y ?', 'Je vous y retrouve à midi.', ['une quantité', 'un lieu'], 1, 'y remplace le lieu. EN: y stands for the place.', 'a5-ecoute'),
      ],
    },
    {
      id: 'r6-bascule', label: 'La bascule', targets: ['ordre-plat'],
      questions: [
        mc('Dans un ordre affirmatif, la file se met...', ['derrière le verbe', 'devant le verbe'], 0, 'Le verbe part devant, la file suit. EN: the verb goes first, the queue follows.', 'a6-regle'),
        mc('Derrière le verbe, quel petit mot vient en premier ?', ['moi ou toi', 'lui ou leur', 'le, la ou les'], 2, 'La chose ouvre, ici comme ailleurs. EN: the thing opens, here as everywhere.', 'a6-check'),
        mc('Choisis la forme correcte.', ['Donne-moi-le.', 'Donne-le-moi.'], 1, 'La chose ouvre, même derrière le verbe. EN: the thing opens, even behind the verb.', 'a6-piege'),
        mc('Choisis la forme correcte.', ['Donne-m’en un peu.', 'Donne-moi-en un peu.'], 0, 'moi s’élide devant en. EN: moi elides before en.', 'a6-tableau'),
        tI('Écris l’ordre, avec les deux petits mots derrière le verbe.', 'Montrer · les photos · à lui', 'Montre-les-lui.', 'La chose, puis la personne. EN: the thing, then the person.', 'a6-construire'),
        tI('Écris l’ordre, avec les deux petits mots derrière le verbe.', 'Dire · le résultat · à nous', 'Dis-le-nous.', 'le pour le résultat, puis nous. EN: le for the news, then nous.', 'a6-exemples'),
        eS('Prête-le-me cinq minutes.', 'Prête-le-moi cinq minutes.', 'En fin de groupe, me devient moi. EN: at the end of a group me becomes moi.', 'a6-piege'),
        lC('Écoute. La file est devant ou derrière le verbe ?', 'Rends-le-moi avant ce soir.', ['derrière', 'devant'], 0, 'Un ordre affirmatif renvoie tout derrière. EN: an affirmative command sends everything behind.', 'a6-dictee'),
      ],
    },
    {
      id: 'r7-negatif', label: 'Le contre-ordre', targets: ['bascule-en-trop'],
      questions: [
        mc('Qu’est-ce qui empêche la bascule ?', ['un verbe long', 'le pluriel', 'le mot ne'], 2, 'Un ne, et la file reste devant. EN: one ne and the queue stays in front.', 'a7-construire'),
        mc('Choisis la forme correcte.', ['Ne donne-le-moi pas.', 'Ne me le donne pas.'], 1, 'Pas de traits d’union dans un ordre négatif. EN: no hyphens in a negative command.', 'a7-erreurs'),
        mc('Dans un ordre négatif, me devient...', ['moi', 'me, sans changement'], 1, 'moi n’existe que derrière le verbe. EN: moi only exists behind the verb.', 'a7-regle'),
        tI('Mets cet ordre à la forme négative.', 'Donne-le-moi.', 'Ne me le donne pas.', 'La file revient devant, dans l’ordre habituel. EN: the queue comes back in front, in the ordinary order.', 'a7-comparer'),
        tI('Mets cet ordre à la forme négative.', 'Montre-la-lui.', 'Ne la lui montre pas.', '2 avant 3, entre ne et le verbe. EN: 2 before 3, between ne and the verb.', 'a7-construire'),
        tI('Mets cet ordre à la forme négative.', 'Parle-lui-en.', 'Ne lui en parle pas.', 'lui troisième, en cinquième, devant le verbe. EN: lui third, en fifth, in front of the verb.', 'a7-comparer'),
        eS('Ne moi le donne pas.', 'Ne me le donne pas.', 'moi est la forme accentuée, réservée à l’arrière. EN: moi is the stressed form, reserved for behind.', 'a7-erreurs'),
        lC('Écoute. Entends-tu des traits d’union ?', 'Ne les leur rends pas tout de suite.', ['non, c’est un ordre négatif', 'oui, c’est un ordre affirmatif'], 0, 'La négation ramène tout devant. EN: the negation brings everything back in front.', 'a7-ecoute'),
      ],
    },
    {
      id: 'r8-passe', label: 'Au passé composé', targets: ['file-sur-participe'],
      questions: [
        mc('Au passé composé, la file se met devant...', ['l’auxiliaire', 'le participe'], 0, 'avoir ou être est le verbe conjugué. EN: avoir or être is the conjugated verb.', 'a8-regle'),
        mc('Dans un passé composé négatif, pas se met...', ['devant la file', 'après le participe', 'juste après l’auxiliaire'], 2, 'ne devant le bloc, pas derrière l’auxiliaire. EN: ne in front of the block, pas after the auxiliary.', 'a8-check'),
        mc('Lequel fait accorder le participe ?', ['en', 'leur', 'les'], 2, 'Seul un complément direct placé devant. EN: only a direct object standing in front.', 'a8-tableau'),
        tI('Mets la phrase au passé composé.', 'Je le lui donne.', 'Je le lui ai donné.', 'La file passe devant ai. EN: the queue goes in front of ai.', 'a8-construire'),
        tI('Accorde le participe.', 'Les lettres, elle me les a (montrer).', 'Les lettres, elle me les a montrées.', 'les est devant et remplace un féminin pluriel. EN: les is in front and stands for a feminine plural.', 'a8-accord'),
        tI('Accorde le participe.', 'La clé, tu la lui as (rendre).', 'La clé, tu la lui as rendue.', 'la est devant et remplace un féminin singulier. EN: la is in front and stands for a feminine singular.', 'a8-accord'),
        eS('J’ai le lui donné hier.', 'Je le lui ai donné hier.', 'Le verbe conjugué est l’auxiliaire. EN: the conjugated verb is the auxiliary.', 'a8-piege'),
        lC('Écoute. Le participe s’accorde-t-il ?', 'On leur en a parlé longuement.', ['non, en ne fait rien', 'oui, avec leur'], 0, 'Ni leur ni en ne déclenchent l’accord. EN: neither leur nor en triggers agreement.', 'a8-lecture'),
      ],
    },
    {
      id: 'r9-infinitif', label: 'Deux verbes', targets: ['file-sur-premier'],
      questions: [
        mc('Avec deux verbes, la file se colle...', ['au verbe conjugué', 'à l’infinitif'], 1, 'À celui qui a besoin d’elle. EN: to the one that needs it.', 'a9-regle'),
        mc('Dans « on ne peut pas leur en vouloir », ne et pas entourent...', ['l’infinitif', 'la file', 'le verbe conjugué'], 2, 'ne peut pas, et rien d’autre. EN: ne peut pas, and nothing else.', 'a9-check'),
        mc('Pourquoi « je le lui ai donné » et « je vais le lui donner » n’ont-ils pas la même forme ?', ['ai donné est un seul verbe', 'le temps est différent'], 0, 'Un verbe en deux mots contre deux verbes. EN: one verb in two words against two verbs.', 'a9-melange'),
        mc('Avec de entre les deux verbes, la file se met...', ['avant de', 'après de, devant l’infinitif'], 1, 'La préposition reste avec le premier verbe. EN: the preposition stays with the first verb.', 'a9-construire'),
        tI('Mets la phrase au futur proche.', 'Je le lui donne.', 'Je vais le lui donner.', 'La file se colle à donner. EN: the queue sticks to donner.', 'a9-regle'),
        tI('Ajoute pouvoir devant le verbe.', 'Tu m’en parles.', 'Tu peux m’en parler.', 'C’est parler qui a besoin de m’ et de en. EN: it is parler that needs m’ and en.', 'a9-exemples'),
        eS('Tu m’en peux parler.', 'Tu peux m’en parler.', 'peux ne porte jamais la file. EN: peux never carries the queue.', 'a9-erreurs'),
        lC('Écoute. Sur quel verbe est la file ?', 'Nous allons vous y conduire.', ['sur allons', 'sur conduire'], 1, 'C’est conduire qui a besoin de vous et de y. EN: it is conduire that needs vous and y.', 'a9-histoire'),
      ],
    },
    {
      id: 'r10-son', label: 'Ce qu’on entend', targets: ['elision-oubliee'],
      questions: [
        mc('Devant y, me devient...', ['moi', 'me', 'm’'], 2, 'y compte comme une voyelle. EN: y counts as a vowel.', 'a10-check'),
        mc('Le z de « vous en » s’écrit...', ['jamais', 'toujours'], 0, 'On l’entend, on ne l’écrit pas. EN: it is heard and never written.', 'a10-construire'),
        mc('Quel petit mot ne change jamais de forme ?', ['le', 'lui', 'se'], 1, 'lui et leur gardent leur forme partout. EN: lui and leur keep their form everywhere.', 'a10-focus'),
        tI('Écris le bloc correctement.', 'Je (te + en) parle demain.', 'Je t’en parle demain.', 'te perd sa voyelle devant en. EN: te loses its vowel before en.', 'a10-regle'),
        tI('Écris le bloc correctement.', 'Il (me + y) a vu hier.', 'Il m’y a vu hier.', 'me devient m’ devant y. EN: me becomes m’ before y.', 'a10-piege'),
        tI('Écris le bloc correctement.', 'On (le + y) retrouve chaque été.', 'On l’y retrouve chaque été.', 'le devient l’ devant y. EN: le becomes l’ before y.', 'a10-construire'),
        eS('Je l’lui ai rappelé deux fois.', 'Je le lui ai rappelé deux fois.', 'lui commence par une consonne, donc le reste entier. EN: lui starts with a consonant, so le stays whole.', 'a10-piege'),
        lC('Écoute. Combien de syllabes avant le verbe ?', 'Je m’en occupe tout de suite.', ['deux', 'trois'], 0, 'Trois mots écrits, deux syllabes dites. EN: three written words, two spoken syllables.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-tout', label: 'Tout ensemble', targets: ['file-instable'],
      questions: [
        mc('Dans ton message, tu écris un ordre qui dit non. Où mets-tu la file ?', ['derrière le verbe', 'devant le verbe'], 1, 'Un ne, et rien ne bascule. EN: one ne, and nothing flips.', 'a11-plan'),
        mc('Tu écris « je vais te répondre ». Pourquoi te n’est-il pas devant vais ?', ['parce que vais est court', 'parce que c’est répondre qui a besoin de te'], 1, 'La file suit le verbe qui la commande. EN: the queue follows the verb that governs it.', 'a11-lecture'),
        mc('Tu as écrit « mes parents me l’ont offert » pour une télécommande. Que corriges-tu ?', ['rien', 'offerte, parce que l’ est devant et féminin'], 1, 'Le participe s’accorde avec la chose passée devant. EN: the participle agrees with the thing that moved in front.', 'a11-mission'),
        tI('Remplace les deux noms par des petits mots.', 'Je laisse les clés à toi.', 'Je te les laisse.', 'te premier, les deuxième. EN: te first, les second.', 'a11-scenario'),
        tI('Écris l’ordre affirmatif correspondant.', 'Tu me gardes le courrier.', 'Garde-le-moi.', 'Derrière le verbe, la chose devant, me devient moi. EN: behind the verb, thing first, me becomes moi.', 'a11-cheat'),
        tI('Mets la phrase au passé composé.', 'Je lui en parle.', 'Je lui en ai parlé.', 'La file passe devant ai, et en reste dernier. EN: the queue goes in front of ai, and en stays last.', 'a11-lecture'),
        eS('Ne la lui donne-la pas.', 'Ne la lui donne pas.', 'Un ordre négatif ne garde rien derrière le verbe. EN: a negative command keeps nothing behind the verb.', 'a11-scenario'),
        lC('Écoute. Cet ordre dit-il oui ou non ?', 'Ne me le donne pas maintenant.', ['non', 'oui'], 0, 'La file est devant et il n’y a pas de traits d’union. EN: the queue is in front and there are no hyphens.', 'a11-usages'),
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
    { front: 'la file', back: THE_FILE, say: 'Les petits mots font une seule file.' },
    { front: 'avec lui ou leur', back: 'la chose passe devant', say: 'Je le lui donne.' },
    { front: 'avec me, te, nous, vous', back: 'la personne passe devant', say: 'Tu me les montres.' },
    { front: 'y et en', back: 'quatrième et cinquième', say: 'Il y en a trois au frigo.' },
    { front: 'un ordre qui dit oui', back: THE_FILE_IMP, say: 'Donne-le-moi.' },
    { front: 'un ordre qui dit non', back: 'devant le verbe, sans traits d’union', say: 'Ne me le donne pas.' },
    { front: 'au passé composé', back: 'devant l’auxiliaire', say: 'Je le lui ai donné.' },
    { front: 'la chose devant', back: 'le participe s’accorde', say: 'Je les ai vues au marché.' },
    { front: 'avec deux verbes', back: 'sur l’infinitif', say: 'Je vais le lui donner.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'La file, en résumé',
  body: `${REFRAME} Tu ranges par numéro de place, tu colles la file au verbe qui la commande, et tu ne la fais passer derrière que pour un ordre qui dit oui. La prochaine leçon garde ces petits mots et change la voix du verbe : le magasin sera fermé, les documents seront envoyés. EN: Next lesson: the passive, where the verb changes voice.`,
  points: [
    'Cinq places : me te se nous vous, le la les, lui leur, y, en.',
    'La file se colle au verbe qui la commande, et rien ne passe entre les deux.',
    'Un ordre affirmatif la fait basculer derrière, avec des traits d’union et moi.',
    'Au passé composé elle est devant l’auxiliaire, et la chose devant fait accorder.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['file', 'bascule', 'bloc'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Tout ensemble',
    opener: {
      line: 'À toi d’écrire : des consignes, un interdit, ce que tu as déjà fait, et ce que tu vas faire. EN: Your turn to write: instructions, one prohibition, what you have already done, and what you are going to do.',
      imageRef: 'lessons/ordre-pronoms/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit un message où chaque bloc est rangé, collé au bon verbe, et du bon côté. EN: You wrote a message in which every block is sorted, glued to the right verb, and on the right side of it.',
    estScreens: 130,
    restPoints: ['a11-plan', 'a11-usages', 'a11-scenario', 'a11-parler', 'a11-cheat', 'a11-quiz'],
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
  { id: 'd-deux', title: 'Un mot, ou deux', format: 'sort' as const, coach: 'Deux piles. Compte les petits mots collés au verbe. EN: two piles, counted by how many little words touch the verb.', buckets: ['un seul', 'deux'], items: [E(1601), E(1602), E(1600), E(1603), E(1605), E(1612)], audio: AUDIO },
  { id: 'd-file', title: 'Range par numéro', format: 'mcq' as const, coach: 'Donne un numéro à chaque mot, puis mets-les dans l’ordre. EN: give each word a number, then sort them.', q: 'Le facteur ... apporte chaque matin.', opts: ['me les', 'les me'], correct: 0, why: 'Place 1 avant place 2. EN: place 1 before place 2.', items: [E(1611), E(1617), E(1618), E(1621), E(1625), E(1634)], audio: AUDIO },
  { id: 'd-chose', title: 'La chose devant lui', format: 'mcq' as const, coach: 'Avec lui ou leur, commence toujours par le, la ou les. EN: with lui or leur, always start with le, la or les.', q: 'Le dossier, je ... donne demain.', opts: ['le lui', 'lui le'], correct: 0, why: '2 avant 3. EN: 2 before 3.', items: [E(1637), E(1639), E(1644), E(1649), E(1652), E(1655)], audio: AUDIO },
  { id: 'd-proche', title: 'Moi d’abord', format: 'sort' as const, coach: 'Deux piles : la personne ouvre, ou la chose ouvre. EN: two piles, by which one opens.', buckets: ['la personne ouvre', 'la chose ouvre'], items: [E(1656), E(1658), E(1666), E(1637), E(1642), E(1651)], audio: AUDIO },
  { id: 'd-yen', title: 'en tout à la fin', format: 'mcq' as const, coach: 'Écris en tout à droite, puis remplis devant. EN: write en at the far right, then fill in what comes before.', q: 'Du gâteau, je ... garde une part.', opts: ['en te', 't’en'], correct: 1, why: 'en ferme la file. EN: en closes the queue.', items: [E(1675), E(1676), E(1680), E(1683), E(1689), E(1692)], audio: AUDIO },
  { id: 'd-bascule', title: 'Derrière le verbe', format: 'mcq' as const, coach: 'Trois choses ensemble : derrière, la chose devant, et moi. EN: three things at once: behind, thing first, and moi.', q: 'Le carnet : ... , s’il te plaît.', opts: ['donne-le-moi', 'donne-moi-le'], correct: 0, why: 'La chose ouvre, même derrière. EN: the thing opens, even behind.', items: [E(1694), E(1695), E(1696), E(1703), E(1704), E(1711)], audio: AUDIO },
  { id: 'd-negatif', title: 'Un ne, et tout revient', format: 'sort' as const, coach: 'Deux piles : la file derrière, la file devant. EN: two piles, queue behind or queue in front.', buckets: ['derrière le verbe', 'devant le verbe'], items: [E(1694), E(1697), E(1714), E(1715), E(1720), E(1727)], audio: AUDIO },
  { id: 'd-passe', title: 'Devant l’auxiliaire', format: 'mcq' as const, coach: 'Cherche avoir ou être : c’est lui le verbe conjugué. EN: look for avoir or être, the conjugated verb.', q: 'Le dossier : je ... donné hier.', opts: ['ai le lui', 'le lui ai'], correct: 1, why: 'La file passe devant ai. EN: the queue goes in front of ai.', items: [E(1730), E(1732), E(1734), E(1736), E(1738), E(1743)], audio: AUDIO },
  { id: 'd-infinitif', title: 'Sur le deuxième verbe', format: 'flashcard' as const, coach: 'Lis chaque phrase et dis quel verbe a besoin des petits mots. EN: read each one aloud and say which verb needs the little words.', items: [E(1750), E(1751), E(1752), E(1756), E(1760), E(1764)], audio: AUDIO },
  { id: 'd-son', title: 'Écris le bloc', format: 'flashcard' as const, coach: 'Écoute, puis sépare les mots et remets les apostrophes. EN: listen, then cut the words apart and put the apostrophes back.', items: [E(1766), E(1767), E(1770), E(1773), E(1774), E(1781)], audio: AUDIO },
  { id: 'd-tout', title: 'La file, partout', format: 'mcq' as const, coach: 'Quatre positions possibles : devant, derrière, devant l’auxiliaire, sur l’infinitif. EN: four possible positions.', q: 'Les photos, je vais ... envoyer ce soir.', opts: ['lui les', 'les lui'], correct: 1, why: 'Sur l’infinitif, et la chose devant. EN: on the infinitive, thing first.', items: [E(1782), E(1784), E(1786), E(1789), E(1794), E(1795)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'un-seul-mot', description: 'Replaces only one of the two nouns and leaves the other spelled out, or drops the second pronoun altogether.', detectOn: ['a1-reperer', 'a1-ecoute', 'a1-check', 'a11-mission'], drill: 'd-deux', retest: 'd-deux' },
  { id: 'place-inventee', description: 'Puts a pronoun in a place the queue does not have, treating the order as free or as a matter of meaning.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check'], drill: 'd-file', retest: 'd-file' },
  { id: 'personne-devant', description: 'Writes lui or leur in front of le, la or les, following the English order I give him the book.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-chose', retest: 'd-chose' },
  { id: 'chose-devant-moi', description: 'Writes le, la or les in front of me, te, nous or vous, generalising the rule learned for lui and leur.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-melange', 'a11-mission'], drill: 'd-proche', retest: 'd-proche' },
  { id: 'en-pas-dernier', description: 'Places en anywhere but last, or writes en before y, because English puts the matching word early.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-yen', retest: 'd-yen' },
  { id: 'ordre-plat', description: 'Keeps the pre-verbal order in an affirmative command, or forgets the hyphens, or leaves me instead of moi.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-bascule', retest: 'd-bascule' },
  { id: 'bascule-en-trop', description: 'Flips a negative command as well, writing the queue behind the verb with hyphens inside a ne pas frame.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-comparer', 'a11-mission'], drill: 'd-negatif', retest: 'd-negatif' },
  { id: 'file-sur-participe', description: 'Parks the pronouns on the past participle instead of the auxiliary, or misses the agreement a preceding direct object forces.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-passe', retest: 'd-passe' },
  { id: 'file-sur-premier', description: 'Puts the pronouns in front of the conjugated verb when a second verb is the one that needs them.', detectOn: ['a9-construire', 'a9-melange', 'a9-check', 'a11-mission'], drill: 'd-infinitif', retest: 'd-infinitif' },
  { id: 'elision-oubliee', description: 'Writes me, te, se, le or la in full before a vowel, or invents an elision on lui, and cannot cut a heard block into words.', detectOn: ['a10-construire', 'a10-piege', 'a10-dictee'], drill: 'd-son', retest: 'd-son' },
  { id: 'file-instable', description: 'Produces free writing in which the order and the position of the block change from sentence to sentence without reason.', detectOn: ['a11-mission', 'a11-scenario', 'a11-plan'], drill: 'd-tout', retest: 'd-tout' },
];

/* @@ACTS@@ */

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-file', 'La file, en entier', ['les cinq places', 'les paires courantes'], [
    teach('sheet-file-teach', 'Comment lire cette page', `${REFRAME} Il y a cinq places et chaque petit mot n'en occupe qu'une. Quand deux mots arrivent ensemble, tu les ranges par numéro de place et tu colles le tout devant le verbe. La seule exception est l'ordre affirmatif, qui a sa propre page. EN: ${REFRAME_EN} There are five places and each little word holds exactly one; sort by place number and glue the result in front of the verb.`),
    table('sheet-file-table', 'Les cinq places', ['Place', 'Les mots', 'Exemple'], [
      ['1', 'me · te · se · nous · vous', 'Tu me les montres.'],
      ['2', 'le · la · les', 'Je le lui donne.'],
      ['3', 'lui · leur', 'Elle les leur montre.'],
      ['4', 'y', 'Elle nous y emmène samedi.'],
      ['5', 'en', 'Je t’en parle demain.'],
    ]),
    table('sheet-file-paires', 'Les paires les plus courantes', ['Paire', 'Exemple', 'Ce que ça dit'], [
      ['2 puis 3', 'Je le lui donne.', 'la chose, puis l’autre personne'],
      ['1 puis 2', 'Tu me les montres.', 'moi, puis la chose'],
      ['1 puis 5', 'Je t’en parle demain.', 'toi, puis la quantité'],
      ['3 puis 5', 'Je lui en parle ce soir.', 'l’autre personne, puis la quantité'],
      ['4 puis 5', 'Il y en a trois au frigo.', 'le lieu, puis la quantité'],
      ['2 puis 4', 'Tu les y attends à la sortie.', 'la chose, puis le lieu'],
    ]),
  ]),
  sheet('sheet-imperatif', 'L’ordre et le contre-ordre', ['oui : derrière, avec traits d’union', 'non : devant, comme d’habitude'], [
    teach('sheet-imperatif-teach', 'Une seule forme bascule', "Un ordre qui dit OUI envoie la file derrière le verbe, avec des traits d'union, la chose en premier, et me et te deviennent moi et toi. Un ordre qui dit NON ne bascule pas : la file revient devant le verbe, dans l'ordre habituel, entre ne et le verbe. EN: an affirmative command sends the queue behind the verb with hyphens; a negative one keeps the ordinary order in front."),
    table('sheet-imperatif-table', 'Les deux ordres', ['Forme', 'Place', 'Exemple'], [
      ['affirmative, un mot', 'derrière, un trait d’union', 'Fais-le tout de suite.'],
      ['affirmative, deux mots', 'derrière, la chose devant', 'Donne-le-moi.'],
      ['affirmative, avec en', 'derrière, en tout à la fin', 'Donne-m’en un peu.'],
      ['négative, un mot', 'devant le verbe', 'Ne le fais pas.'],
      ['négative, deux mots', 'devant, ordre habituel', 'Ne me le donne pas.'],
      ['négative, avec en', 'devant, en tout à la fin', 'Ne m’en parle plus.'],
    ]),
  ]),
  sheet('sheet-passe', 'Au passé composé', ['la place de la file', 'l’accord du participe'], [
    teach('sheet-passe-teach', 'Devant l’auxiliaire, jamais devant le participe', "Le verbe conjugué du passé composé, c'est avoir ou être. La file se colle à lui, donc elle passe devant l'auxiliaire et le participe reste seul derrière. La négation se referme autour du bloc entier. EN: the conjugated verb is the auxiliary, so the queue sits in front of it and the participle is left alone behind."),
    table('sheet-passe-table', 'La file et l’auxiliaire', ['Forme', 'Exemple', 'Ce qui bouge'], [
      ['affirmative', 'Je le lui ai donné.', 'la file devant ai'],
      ['négative', 'Elle ne me l’a pas dit.', 'ne devant la file, pas après a'],
      ['avec y ou en', 'On leur en a parlé longuement.', 'en garde la dernière place'],
      ['avec être', 'Elle nous y a emmenés en voiture.', 'même règle, même place'],
      ['question', 'Tu m’en as promis deux.', 'rien ne bouge'],
      ['deux compléments', 'Nous le leur avons envoyé lundi.', 'la chose reste devant'],
    ]),
    table('sheet-passe-accord', 'L’accord du participe', ['La chose devant', 'Le participe', 'Exemple'], [
      ['la (féminin)', 'ajoute un e', 'Tu la lui as rendue.'],
      ['les (masculin)', 'ajoute un s', 'On te les a rendus hier soir.'],
      ['les (féminin)', 'ajoute es', 'Elle me les a montrées.'],
      ['lui, leur, en, y', 'rien du tout', 'On leur en a parlé longuement.'],
    ]),
  ]),
  sheet('sheet-infinitif', 'Avec un deuxième verbe', ['où se colle la file', 'les verbes concernés'], [
    teach('sheet-infinitif-teach', 'La file suit le verbe qui la commande', "Quand deux verbes se suivent, les petits mots appartiennent au deuxième, pas au premier. Ils se collent donc à l'infinitif : je vais le lui donner, tu peux m'en parler. Le premier verbe reste tout seul devant. EN: when two verbs follow each other the little words belong to the second one and stick to the infinitive."),
    table('sheet-infinitif-table', 'Les verbes qui appellent un infinitif', ['Verbe', 'Exemple'], [
      ['aller', 'Je vais le lui donner.'],
      ['pouvoir', 'Tu peux m’en parler.'],
      ['vouloir', 'Elle veut nous les montrer.'],
      ['devoir', 'Je dois la lui rendre avant vendredi.'],
      ['il faut', 'Il faut le leur dire.'],
      ['venir de', 'Il vient de me la rendre.'],
    ]),
  ]),
  sheet('sheet-son', 'Ce qu’on entend', ['l’élision', 'la liaison'], [
    teach('sheet-son-teach', 'Un bloc, pas des mots séparés', "Personne ne prononce les petits mots un par un. Devant une voyelle, me te se le la perdent leur voyelle, et après nous, vous, les et en la liaison se fait. Le résultat est un bloc court, sans accent tonique, avant le verbe. EN: nobody pronounces the little words one by one: elision and liaison turn them into one short unstressed block."),
    table('sheet-son-table', 'Élision et liaison', ['Écrit', 'Entendu', 'Exemple'], [
      ['je te en', 'je t’en', 'Je t’en parle demain.'],
      ['il me y', 'il m’y', 'Il m’y a vu.'],
      ['on le y', 'on l’y', 'On l’y retrouve chaque été.'],
      ['nous y', 'nou-zy', 'Elle nous y emmène samedi.'],
      ['vous en', 'vou-zen', 'On vous en envoie un exemplaire.'],
      ['les y', 'lé-zy', 'Tu les y attends à la sortie.'],
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-17-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-17-mot': "Awa's note read aloud (act 1), one female Québécoise voice, one take, at reading pace. The eight pronoun blocks are NEVER stressed: « donne-la-lui » and « elle me l'a confirmé » run together as one word each, because the whole lesson turns on hearing them as blocks rather than as separate words.",
  'rec-b1-17-compter': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The learner counts little words, so no line may be slowed or separated for clarity. Line 4 is an imperative and its three parts are one breath.',
  'rec-b1-17-doigts': 'The act 2 exchange, TWO VOICES: a calm teacher and a learner who is thinking aloud. Belgian French welcome. The teacher says the example sentences at normal speed and does NOT separate the pronouns to help; the whole point is that the learner hears one block and counts it afterwards.',
  'rec-b1-17-places': 'The five-places deck (act 2), one voice. Each card has one French line: read it plainly, with the stress on the verb and none at all on the little words. The last card contains « il y en a trois », which must sound like three syllables and not five.',
  'rec-b1-17-devant': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. The learner is asked which word comes first, so the two little words must run together at natural speed; a rehearsed pause between them answers the question for them.',
  'rec-b1-17-chose': 'The act 3 deck, one voice. Card 3 is an ENGLISH line and is the only English on this recording: read it flat and unremarkable, so it does not sound like a model to copy. The three French cards keep the block unstressed.',
  'rec-b1-17-piege-chose': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken and must not be recorded.",
  'rec-b1-17-librairie': 'The bookshop exchange (act 4), TWO VOICES, one bookseller and one customer, Belgian French welcome. The customer line three is a WRONG order spoken by a learner: deliver it hesitantly, as somebody assembling a sentence, never fluently.',
  'rec-b1-17-proche': 'The act 4 deck, one voice. Card 3 turns on an elision (« me l’envoie »): read it at full speed so the three written words come out as two syllables, then let the card do the explaining.',
  'rec-b1-17-melange': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. The eight alternate between the two orders, so pace and stress must be identical throughout or the alternation becomes audible from the performance rather than from the words.',
  'rec-b1-17-pharmacie': 'The pharmacy passage (act 5), TWO VOICES: a pharmacist and a customer, Belgian French. Read at reading pace, one take. « Il y en a encore deux » and « je vous en propose un autre » carry the whole mission and must not be slowed down.',
  'rec-b1-17-yen': 'The y and en deck (act 5), one voice. Every card ends its pronoun block on en, and en must be audible as the last thing before the verb, without being stressed. Card 4 quotes an A2 sentence and is read identically to the rest.',
  'rec-b1-17-piege-yen': "The audio step plays each card's CORRECT sentence. Six lines, same pace, same voice. The wrong versions in promptSound are never spoken.",
  'rec-b1-17-fermer': 'REQUIRED FOR THE EAR MISSION (act 5): eight lines, ONE TAKE, ONE VOICE, authored order. The learner is asked which word closes the block, so the final little word must not be clipped or swallowed, and must not be stressed either.',
  'rec-b1-17-escabeau': 'The moving-day exchange (act 6), TWO VOICES, one on a stepladder and one below, Lyon French. The imperatives « donne-la-moi » are single words to the ear: three syllables, one stress, no hyphen audible anywhere.',
  'rec-b1-17-bascule': 'The act 6 deck, one voice. All four cards are imperatives. Each is ONE stress group: donne-le-moi is [donn-luh-MWA] and must never be read as three separate words. Card 4 is the elided « donne-m’en », which is two syllables.',
  'rec-b1-17-piege-ordre': "The audio step plays each card's CORRECT imperative, six of them, same pace, same voice. The wrong versions in promptSound are never spoken: several of them are things no French speaker says, and hearing one performed would teach it.",
  'rec-b1-17-ouinon': 'REQUIRED FOR THE EAR MISSION (act 7): eight lines, ONE TAKE, ONE VOICE, authored order, alternating affirmative and negative commands. Both forms get the same pace and the same energy; the negative must not be read more slowly just because it is longer.',
  'rec-b1-17-contre': 'The act 7 deck, one voice. Four negative commands. « ne » is pronounced in full on this recording, not dropped, because the learner is being taught that it is what blocks the flip and has to hear it.',
  'rec-b1-17-message': 'The work email (act 8), one voice, France accent, read at reading pace, one take. Six participle agreements in the text are inaudible by design: do NOT over-articulate the endings to make them heard, because the mission is about spelling and the reading must not give it away.',
  'rec-b1-17-auxiliaire': 'The act 8 deck, one voice. Each card has a pronoun block, an auxiliary and a participle. Keep the block and the auxiliary as one run and let the participle fall after it, so the split between the two halves of the verb is audible.',
  'rec-b1-17-piege-passe': "The audio step plays each card's CORRECT sentence, six of them, same pace, same voice. The wrong versions in promptSound are never spoken.",
  'rec-b1-17-atelier': 'The repair shop exchange (act 9), TWO VOICES, a repairer and a customer, Lyon French. Every line has two verbs: read them at speed so the pronoun block sits audibly on the second one, with no pause between the first verb and the block.',
  'rec-b1-17-infinitif': 'The act 9 deck, one voice. The first verb is unstressed and the block plus infinitive form the stress group: « je vais le lui donner » is one falling phrase, not two.',
  'rec-b1-17-bloc': 'REQUIRED FOR THE EAR MISSION (act 10): TEN lines, ONE TAKE, ONE VOICE, authored order, at ordinary conversational speed and NOT slower. This is the one mission whose questions are about syllable counts and liaison, so a careful reading voids it. The z of « vous en » and « les y » must be present and unemphasised.',
  'rec-b1-17-elision': 'The elision deck (act 10), one voice. Cards 1 to 3 must be delivered at full speed, because the point is how short the block becomes. Card 4 is the contrast: « le lui » keeps both vowels and is the only card where the block is longer.',
  'rec-b1-17-piege-son': "The audio step plays each card's CORRECT sentence, six of them. The wrong versions in promptSound are spellings, not pronunciations, and must not be recorded at all.",
  'rec-b1-17-modele': 'The model message (act 11), one voice, read as somebody reading a message aloud rather than as a text. It is the shape the learner will imitate, so the four positions must be audible in turn: in front of the verb, behind it in the commands, in front of the auxiliary, and on the infinitive.',
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 17',
  intro: 'You already know each object pronoun on its own. This lesson is about what happens when two of them meet. They form one queue with five fixed places, and the queue is glued to its verb: in front of it most of the time, behind it with hyphens when you give a command, in front of the auxiliary in the passé composé, and on the infinitive when there are two verbs.',
  skill: 'PE',
  grammarAssumed: [
    COD_UNIT, COI_UNIT, YEN_UNIT, PC_AVOIR_UNIT, PARTICIPES_UNIT, PC_ETRE_UNIT,
    PRONOMINAL_UNIT, FUTUR_PROCHE_UNIT, MODAUX_UNIT,
  ],
  grammarIntroduced: [
    'The fixed order of two co-occurring object pronouns before a verb: me/te/se/nous/vous, then le/la/les, then lui/leur, then y, then en',
    'The combinations that actually occur in speech: le lui, la leur, me les, te le, nous en, y en, lui en',
    'The affirmative imperative inversion: the pronoun group moves behind the verb, hyphenated, with the direct object first and me/te realised as moi/toi',
    'The negative imperative keeping the ordinary pre-verbal order between ne and the verb',
    'Pronoun placement in the passé composé: in front of the auxiliary rather than the participle, with the negation closing around the whole block',
    'Past participle agreement with a preceding direct object pronoun, and its absence with lui, leur, y and en',
    'Pronoun placement with a governing verb plus infinitive: the group attaches to the infinitive it belongs to',
    'Elision of me, te, se, le and la before a vowel inside the pronoun group, and the liaison after nous, vous and les',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu connais déjà chaque petit mot tout seul. Cette leçon commence quand il y en a deux. Ils font une file de cinq places, toujours dans le même ordre, et la file reste collée à son verbe : devant lui presque toujours, derrière lui avec des traits d'union quand tu donnes un ordre, devant l'auxiliaire au passé composé, et sur l'infinitif quand il y a deux verbes.",
    minutes: 120,
    difficulty: 3,
    glyph: 'lui',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: ORDRE_PRONOMS_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul, 2026-09-22: every `say` is French and spoken by a fr-FR voice.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, READING_TEXT, MODEL_TEXT, dicteeFor };
