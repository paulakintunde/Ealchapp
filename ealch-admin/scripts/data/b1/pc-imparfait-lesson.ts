// b1.03.l1 « Passé composé ou imparfait : les bases » — the lesson.
// REBUILD v2, DRAFT, to RICH-LESSON-STANDARD.md on top of B1-PILOT-BRIEF.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is the draft type in `_task-section.ts`, not in schema.ts, so `sections` is
// `DraftSection[]` and the validators run on `lessonWithoutTask()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name (cardDeck,
//   examples, tapTable), build (groupDrill, gated), choose (a drill where the
//   MEANING picks the tense), trap (trapDrill stepped or commonErrors), check
//   (gated control pages before the checkpoint).
//
//    1  Le récit cassé              6   the theft told all in passé composé
//    2  Le film : décor et action   8   the two lenses, the test, the timeline
//    3  La coupure                  8   quand / pendant que, both clause orders
//    4  Deux décors en même temps   6   two imparfaits, nothing happens
//    5  La suite d'actions          8   chains, and the connectors that carry them
//    6  Long, mais fermé            7   bounded duration takes the PC, however long
//    7  Un verbe, deux temps        7   the same verb as décor and as action
//    8  Des indices, pas des règles 8   six cues, each with a counterexample
//    9  Annoter un récit            7   a 174-word narrative, marked verb by verb
//   10  Raconter                   11   model, plan, role play, TASK, quiz, roundup
//
//   TOTAL 76 missions, 10 acts. Corpus: 139 authored rows in ten blocks plus
//   22 reused seed rows, 155 of them released act by act through `deckTranche`.
//   Chapter artwork: `pc-imparfait-image-prompts.md`, ten prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (b1.04 imports it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « L'imparfait pose le décor. Le passé composé fait avancer le film. »
//   EN: The imparfait sets the scene. The passé composé moves the film forward.
//
//   ONE METAPHOR, THE FILM, everywhere: le décor, l'action, la coupure. Not the
//   stage (corpus §E says why).
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the choice between the two past tenses by narrative function, act
//           by act above, and the narrative itself (acts 9 and 10).
//   QUOTES  b1.01's reframe (formation) and b1.02's (uses), imported; a2.05,
//           a2.21 and a2.23's reframes, imported, each shown as the English
//           original followed by a French rendering.
//   LEAVES  to b1.04: the verbs whose MEANING moves with the tense (savoir,
//           connaître, vouloir, pouvoir, devoir, avoir). Not one of them is
//           contrasted here, and the task's grader notes say so.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the situation
//   needs (the officer and the insurance agent say « vous »). Every learner
//   surface that explains something carries English (`en`, or a final « EN: »).
//   Every `say` is French, spoken fr-FR. Theme `recits-au-passe`. A2 citations
//   use the English trail label; b1.* ones are French until those units exist.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. b1.01 and b1.02's reframes are imported from drafts that are still
//      moving. b1.02's « on ne le compte pas » is this lesson's hinge in act 6
//      (a closed duration is what you DO count). If b1.02 rewords, act 6 and
//      a2-deja need a reread.
//   2. REGIONAL MIX: « à l'urgence », « les courriels », « un dépanneur » are
//      Québec; the act 9 reading is Lyon and says « commissariat ». Fine?
//   3. B1 CITATIONS are French from the plan (« la leçon 1 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label once
//      they are?
//   4. ONE tapTable PER ACT, four in all (acts 5, 6, 8 and the connectors).
//      The pilot brief allowed one per LESSON; the rich standard allows one
//      per act. Confirm the looser rule for 76-mission lessons.
//   5. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01. Tail them too?
//   6. Act 10's task is written (80-120 words). Should b1.03 also carry a
//      SPOKEN task, given the unit outcome is « narrate »?
//   7. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   8. The cue drills ask « c'est possible ? » rather than « pick the tense »,
//      because for a counterexample both tenses are grammatical. Paul approved
//      this in the pilot; it is now the shape of act 8's whole trap step.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor, READING_TEXT,
  A205_REFRAME, A221_REFRAME, A223_REFRAME, A205_REFRAME_FR, A221_REFRAME_FR, A223_REFRAME_FR,
  B101_REFRAME, B101_REFRAME_EN, B102_REFRAME, B102_REFRAME_EN,
  IMP_FORM_UNIT, IMP_USE_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, PARTICIPLE_UNIT,
  PRONOMINAL_UNIT, PRONOMINAL_PC_UNIT, TIME_PREP_UNIT,
  IMP_FORM_REF, IMP_USE_REF, PC_AVOIR_REF, PC_ETRE_REF, PRONOMINAL_PC_REF,
} from './pc-imparfait-corpus.ts';
import { PC_IMPARFAIT_TERMS } from './pc-imparfait-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: DraftSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.03: no item ${id}`);
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
 *  ACT 1 — LE RÉCIT CASSÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. BREAKDOWN, NOT RUDENESS: nobody is rude, and the statement is simply
 *  unusable, because every verb is an event and the officer cannot tell what
 *  was already going on. NO « ? » OR « ! » IN ANY BUBBLE (brief). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Une déclaration au poste',
  frSub: 'Le vélo volé',
  setting: { place: 'Poste de police, avenue du Mont-Royal', city: 'Montréal', time: '17 h 40', ambience: 'un comptoir, un téléphone qui sonne, la pluie dehors' },
  beats: [
    {
      kind: 'narration',
      text: "Un poste de police sur l'avenue du Mont-Royal, à Montréal. Mardi, 17 h 40. Ton vélo a disparu devant un café. La policière ouvre un formulaire.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'La policière',
      fr: "Racontez-moi ce qui s'est passé.",
      en: 'Tell me what happened.',
      respell: '[ra-kohⁿ-tay-MWA suh kee seh pa-SAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "J'ai lu le journal. Il a plu. Quelqu'un a pris mon vélo.",
      en: 'I read the paper. It rained. Someone took my bike.',
      respell: '[zhay lü luh zhoor-NAL | eel a PLÜ | kehl-KUHⁿ a pree mohⁿ vay-LOH]',
      stage: "Trois verbes au passé composé. Pour elle, ce sont trois étapes, l'une après l'autre.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'La policière',
      fr: "D'abord le journal, ensuite la pluie, puis le vol. Dans cet ordre-là.",
      en: 'First the paper, then the rain, then the theft. In that order.',
      respell: '[da-BOR luh zhoor-NAL | ahⁿ-SWEET la PLÜEE | pwee luh VOL]',
      stage: "Elle répète ta phrase et elle ne sait pas si le vol est arrivé pendant ta lecture ou après.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Non. Il pleuvait déjà quand tu es arrivé, et tu lisais encore quand le vélo a disparu. Mais tes phrases racontent une liste d'étapes.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase dit que le vol a coupé ta lecture ?',
      size: 'lg',
      options: [
        { fr: "J'ai lu le journal, puis quelqu'un a pris mon vélo.", respell: '[zhay lü luh zhoor-NAL pwee kehl-KUHⁿ a pree mohⁿ vay-LOH]', en: 'I read the paper, then someone took my bike.', outcome: 'breaks', audio: AUDIO },
        { fr: "Je lisais le journal quand quelqu'un a pris mon vélo.", respell: '[zhuh lee-zeh luh zhoor-NAL kahⁿ kehl-KUHⁿ a pree mohⁿ vay-LOH]', en: 'I was reading the paper when someone took my bike.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Elle écrit : « pendant la lecture ». Elle sait maintenant à quelle heure regarder les caméras du café.",
        breaks: "Elle écrit : « après la lecture ». Elle va regarder les caméras à la mauvaise heure.",
      },
    },
    {
      kind: 'break',
      heading: 'Tout était au passé composé',
      body: "Au passé composé, chaque verbe est une étape, et les étapes se suivent. La policière a donc entendu une liste. L'imparfait dit ce qui se passait déjà. EN: In the passé composé every verb is a step; the imparfait says what was already going on.",
      wrong: {
        fr: "J'ai lu le journal, puis quelqu'un a pris mon vélo.",
        ipa: '/ʒe ly lə ʒuʁ.nal pɥi kɛl.kœ̃ a pʁi mɔ̃ ve.lo/',
        respell: '[zhay lü luh zhoor-NAL pwee kehl-KUHⁿ a pree mohⁿ vay-LOH]',
        en: 'I read the paper, then someone took my bike.',
      },
      right: {
        fr: "Je lisais le journal quand quelqu'un a pris mon vélo.",
        ipa: '/ʒə li.zɛ lə ʒuʁ.nal kɑ̃ kɛl.kœ̃ a pʁi mɔ̃ ve.lo/',
        respell: '[zhuh lee-zeh luh zhoor-NAL kahⁿ kehl-KUHⁿ a pree mohⁿ vay-LOH]',
        en: 'I was reading the paper when someone took my bike.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "La déclaration est corrigée. Il manque encore le décor : la pluie, la terrasse vide, le vélo attaché. C'est le sujet de cette leçon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: "Séparer le décor et l'action", s: 'Actes 2 à 4 : le film, la coupure, les deux décors' },
    { t: 'Enchaîner des actions dans le bon ordre', s: 'Acte 5 : la suite et ses connecteurs' },
    { t: 'Choisir le temps quand la durée est longue', s: 'Actes 6 et 7 : dix ans, mais fermé' },
    { t: 'Raconter toi-même un imprévu', s: 'Actes 9 et 10 : annoter, puis écrire' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the same event as a written report, where the two tenses
 *  are already doing their jobs. Noticing before the rule. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le rapport de la policière',
  frSub: 'Lis, et regarde les verbes',
  text: "Mardi, il faisait gris et la rue était calme. Le vélo de M. Tremblay était attaché devant un café, rue Saint-Viateur. À l'intérieur, il lisait son journal près de la fenêtre. Il pleuvait et la terrasse était vide. Vers seize heures, un homme s'est arrêté devant le café. Il a regardé le vélo, il a coupé le cadenas et il est parti vers l'avenue du Parc. M. Tremblay ne comprenait pas ce qui se passait. Quand il est sorti, le vélo n'était plus là. Il a appelé la police tout de suite.",
  glossary: [
    { word: 'était attaché', en: 'was locked up', note: 'Un état : le vélo était déjà comme ça. EN: a state.' },
    { word: 'la terrasse', en: 'the terrace', note: 'Les tables dehors, devant le café.' },
    { word: 'le cadenas', en: 'the padlock', note: 'Le petit cadenas qui ferme la chaîne du vélo.' },
    { word: 'tout de suite', en: 'straight away', note: 'Sans attendre.' },
  ],
  questions: [
    { q: 'Quels verbes décrivent la situation, avant que rien ne se passe ?', a: "faisait, était, était attaché, lisait, pleuvait, était vide. Ils sont tous à l'imparfait." },
    { q: "Quel est le premier verbe qui fait avancer l'histoire ?", a: "« un homme s'est arrêté ». À partir de là, chaque verbe est une étape." },
    { q: 'Pourquoi « ne comprenait pas » est-il à l’imparfait ?', a: "C'est ce qu'il avait dans la tête pendant la scène, pas une étape de l'histoire." },
    { q: '« Quand il est sorti, le vélo n’était plus là. » Que dit chaque moitié ?', a: "La première est une action, la deuxième la situation qu'il a trouvée." },
  ],
  audio: REC('rec-b1-03-rapport'),
  say: REFRAME,
  terms: ['decor', 'action'],
};

/** BUILD, on the text just read: sort the report's verbs by job. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère les deux sortes de verbes',
  groups: [
    grp('Ce qui se passait déjà', [
      it(E(1000), 'la météo et la rue'),
      it(E(205), 'un état : le vélo était comme ça'),
      it(E(203), 'la pluie et la terrasse'),
      it(E(1005), 'dans la tête de M. Tremblay'),
    ], chk(
      'Ces quatre phrases : est-ce que quelque chose de nouveau arrive ?',
      ['Non, elles décrivent la situation.', 'Oui, chaque verbe est une étape.'],
      0,
      "Rien ne change entre le début et la fin de chaque phrase. EN: nothing changes, so this is the décor.",
    )),
    grp("Ce qui s'est passé", [
      it(E(1001), 'une étape'),
      it(E(1002), 'deux étapes dans une phrase'),
      it(E(1004), 'la dernière étape du rapport'),
      it(E(201), "l'action que le rapport explique"),
    ], chk(
      'Si tu changes leur ordre, que se passe-t-il ?',
      ["Rien, l'ordre ne compte pas.", "L'histoire change : le voleur part avant de couper le cadenas."],
      1,
      "Les actions se suivent. Changer l'ordre, c'est changer l'histoire. EN: the order of events is the story.",
    )),
    ctl('Et la phrase du milieu', "« Je buvais un café quand j'ai entendu un bruit. » Combien d'actions ?", ['une', 'deux', 'aucune'], 0,
      "Une seule : j'ai entendu. Le café, c'est le décor. EN: one event, one background."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

/** WHY IT MATTERS. Four places where the wrong tense costs something real. */
const A1_POURQUOI: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-pourquoi',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Au poste de police, pour une déclaration', fr: "Je lisais le journal quand quelqu'un a pris mon vélo.", en: 'I was reading the paper when someone took my bike.' },
    { situation: 'Au travail, pour expliquer un retard', fr: "Comme il pleuvait, j'ai pris le métro.", en: 'Since it was raining, I took the metro.' },
    { situation: "À l'examen, quand on te demande un souvenir", fr: "Nous habitions près du marché et nous sortions souvent.", en: 'We lived near the market and we often went out.' },
    { situation: 'Avec des amis, pour raconter une histoire', fr: "Tout à coup, la porte a claqué.", en: 'All of a sudden the door slammed.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le décor', '« Il ... gris et la rue ... calme. » (faire, être) EN: Which tense for the weather here?',
    ['a fait / a été', 'faisait / était'], 1, "Rien n'arrive : c'est le décor, à l'imparfait. EN: nothing happens, so imparfait."),
  ctl("L'action", '« Un homme ... devant le café. » (s’arrêter) EN: Which one moves the story?',
    ["s'arrêtait", "s'est arrêté"], 1, "Une étape précise, donc le passé composé. EN: a step, so passé composé."),
  ctl('Le mélange', 'Dans une déclaration, pourquoi le décor est-il utile ?', ["Il dit ce qui était vrai autour de l'action.", 'Il fait joli.', 'Il remplace les dates.'], 0,
    "Il situe l'action : l'heure, la pluie, ce que tu faisais. EN: it places the event."),
], ['decor', 'action']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le récit cassé',
    opener: {
      line: "Tu racontes un vol au poste de police, et la policière ne comprend rien : tout ton récit est au même temps. EN: You report a theft and the officer cannot follow you: your whole story sits in one tense.",
      imageRef: 'lessons/pc-imparfait/act01.jpg',
    },
    sections: [],
    milestone: "Tu as vu une déclaration vraie devenir illisible, et tu as repéré les deux sortes de verbes. EN: You saw a true statement become unreadable and spotted the two kinds of verb.",
    estScreens: 24, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_POURQUOI, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LE FILM : DÉCOR ET ACTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET by ear. Two friends tell the same evening: one gives only the décor,
 *  the other only the actions, and neither story works alone.
 *  `hideLines` or this is a reading exercise with a play button. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Deux personnes, une soirée',
  frSub: 'Écoute qui fait avancer l’histoire',
  lines: [
    { fr: 'Il faisait chaud et les fenêtres étaient ouvertes.', en: 'It was hot and the windows were open.' },
    { fr: 'La salle était pleine et tout le monde parlait.', en: 'The room was full and everyone was talking.' },
    { fr: 'Le bébé dormait et la maison était silencieuse.', en: 'The baby was asleep and the house was silent.' },
    { fr: 'Le voisin a frappé à la porte.', en: 'The neighbour knocked at the door.' },
    { fr: 'Elle a ouvert la porte et elle a allumé la lumière.', en: 'She opened the door and turned on the light.' },
    { fr: "J'ai retrouvé mes clés sous le canapé.", en: 'I found my keys under the sofa.' },
    { fr: 'Le train est parti à huit heures pile.', en: 'The train left at eight on the dot.' },
    { fr: 'Nous sommes rentrés à pied.', en: 'We walked home.' },
  ],
  questions: [
    { q: 'Les trois premières phrases : que font-elles ?', opts: ["Elles racontent des étapes.", 'Elles décrivent la situation.'], correct: 1, why: "Trois imparfaits : la chaleur, la salle, le bébé. Rien n'arrive. EN: three backgrounds." },
    { q: "Dans quelle phrase quelque chose arrive pour la première fois ?", opts: ['la deuxième', 'la troisième', 'la quatrième'], correct: 2, why: "« Le voisin a frappé » : la première action. EN: the first event." },
    { q: 'Les cinq dernières phrases racontent...', opts: ['une suite d’étapes', 'une seule situation'], correct: 0, why: "Cinq passés composés : cinq étapes qui se suivent. EN: five steps in a row." },
    { q: 'Si tu enlèves les trois premières phrases, qu’est-ce que tu perds ?', opts: ["l'ordre des actions", 'la situation autour des actions', 'rien du tout'], correct: 1, why: "Tu gardes les étapes et tu perds le décor : où, quand, comment c'était. EN: you lose the setting." },
  ],
  audio: REC('rec-b1-03-soiree'),
  say: REFRAME,
  terms: ['decor', 'action'],
};

/** NAME, lens one. */
const A2_DECOR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-decor',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le décor : ce qui se passait',
  frSub: "L'imparfait",
  hint: 'Quatre cartes. Regarde ce qui ne bouge pas.',
  audio: REC('rec-b1-03-film'),
  say: REFRAME,
  terms: ['decor'],
  cards: [
    {
      head: 'Le lieu et la météo',
      label: "l'imparfait",
      fr: 'Il pleuvait et la terrasse était vide.',
      sub: '[eel pluh-veh ay la teh-RASS ay-teh VEED]',
      body: "Le film commence. On voit la pluie, la terrasse. Tout est déjà là, et rien n'avance encore. EN: the set is there before anything happens.",
    },
    {
      head: 'Les gens et leurs états',
      label: "l'imparfait",
      fr: 'La salle était pleine et tout le monde parlait.',
      sub: '[la SAL ay-teh PLEHN ay too luh mohⁿd par-LEH]',
      body: "Comment c'était, comment ils se sentaient, ce qu'ils faisaient à ce moment-là. Pas de début, pas de fin. EN: states and ongoing actions, with no edges.",
    },
    {
      head: 'Ce que tu faisais',
      label: "l'imparfait",
      fr: 'Je buvais un café quand j’ai entendu un bruit.',
      sub: '[zhuh bü-veh uhⁿ ka-FAY kahⁿ zhay ahⁿ-tahⁿ-DÜ uhⁿ BRWEE]',
      body: "Le café a commencé avant le bruit et il continue après. C'est le décor de l'action. EN: the coffee frames the noise.",
    },
    {
      head: "Ce que b1.02 t'a déjà donné",
      label: Cap(IMP_USE_REF),
      fr: "il faisait froid · j'avais vingt ans",
      sub: '[eel fuh-zeh FRWA] · [zha-veh vehⁿ-TAHⁿ]',
      body: `« ${B102_REFRAME} » Habitude, état, météo, heure, âge : c'est déjà le décor. EN: ${B102_REFRAME_EN}`,
    },
  ],
};

/** NAME, lens two. */
const A2_ACTION: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-action',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: "L'action : ce qui s'est passé",
  frSub: 'Le passé composé',
  hint: 'Quatre cartes. Cherche ce qui change la situation.',
  audio: REC('rec-b1-03-film'),
  say: REFRAME,
  terms: ['action'],
  cards: [
    {
      head: 'Un moment précis',
      label: 'le passé composé',
      fr: 'Le train est parti à huit heures pile.',
      sub: '[luh TREHⁿ eh par-TEE a wee-tuhr PEEL]',
      body: "Avant, le train était là. Après, il n'est plus là. La situation a changé. EN: before and after are different.",
    },
    {
      head: 'Des étapes qui se suivent',
      label: 'le passé composé',
      fr: 'Elle a ouvert la porte et elle a allumé la lumière.',
      sub: '[eh-la oo-VEHR la PORT ay eh-la a-lü-MAY la lü-MYEHR]',
      body: "Deux actions, dans cet ordre. Si tu les inverses, tu racontes autre chose. EN: swap them and the story changes.",
    },
    {
      head: 'Avec avoir ou avec être',
      label: `${Cap(PC_AVOIR_REF)} · ${PC_ETRE_REF}`,
      fr: "j'ai retrouvé · nous sommes rentrés",
      sub: '[zhay ruh-troo-VAY] · [noo som rahⁿ-TRAY]',
      body: `« ${A205_REFRAME} » FR: ${A205_REFRAME_FR}`,
    },
    {
      head: "Et l'accord avec être",
      label: Cap(PC_ETRE_REF),
      fr: 'elle est partie · elles sont allées',
      sub: '[eh-leh par-TEE] · [ehl sohⁿ-ta-LAY]',
      body: `« ${A221_REFRAME} » FR: ${A221_REFRAME_FR}`,
    },
  ],
};

/** NAME, the test, on published rows: every one carries both lenses. */
const A2_TEST: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-test',
  layer: 'core',
  title: 'Deux questions, deux temps',
  frSub: "Qu'est-ce qui se passait ? Qu'est-ce qui s'est passé ?",
  examples: [
    ex('fr.b1.cafe.083', "arrivés : l'action · était pleine : le décor qu'on trouve"),
    ex('fr.b1.cafe.096', "le froid : le décor · la décision : l'action"),
    ex('fr.b1.maison.067', "le déménagement : l'action · l'état de l'appartement : le décor"),
    ex('fr.a2.objets.106', 'la cause est un état : le décor'),
    ex('fr.b1.routines.080', "comme + décor, puis l'action"),
    ex('fr.b1.routines.092', "le retard : le décor · le petit déjeuner sauté : l'action"),
    ex('fr.a2.routines.061', "l'action d'abord, le décor après : l'ordre ne change rien"),
    ex('fr.b1.sports-et-loisirs.086', "la victoire : l'action · la fierté : le nouvel état"),
    ex('fr.a2.corps.016', "la douleur : le décor · la visite : l'action"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

/** NAME, the timeline, in words. Full version on the sheet. */
const A2_LIGNE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-ligne',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-film',
  title: 'La ligne du temps, en mots',
  frSub: 'Des bandes et des points',
  hint: 'Cinq cartes. Imagine une ligne, de gauche à droite.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action', 'coupure'],
  cards: [
    {
      head: 'Une ligne et des points',
      label: "l'action",
      body: "Trace une ligne de gauche à droite : c'est le temps. Chaque action au passé composé est un point sur la ligne, et les points se suivent. EN: each event is a dot on the line.",
    },
    {
      head: 'Le décor est une bande',
      label: 'le décor',
      body: "L'imparfait est une longue bande sous les points. Elle a commencé avant et elle continue après. On ne voit pas ses bords. EN: the imparfait is a band with no visible edges.",
    },
    {
      head: 'Un point sur une bande',
      label: 'la coupure',
      fr: 'Je dormais quand le téléphone a sonné.',
      sub: '[zhuh dor-meh kahⁿ luh tay-lay-FON a so-NAY]',
      body: "La bande : je dormais. Le point : le téléphone a sonné, au milieu de la bande. EN: a dot landing on a band.",
    },
    {
      head: 'Deux bandes, aucun point',
      label: 'en même temps',
      fr: 'Pendant que je lisais, il regardait la télé.',
      sub: '[pahⁿ-dahⁿ kuh zhuh lee-zeh eel ruh-gar-deh la tay-LAY]',
      body: "Deux choses en même temps, et rien n'arrive. Deux imparfaits. EN: two bands, no dot.",
    },
    {
      head: 'Un segment fermé',
      label: 'durée fermée',
      fr: "J'ai habité à Lyon pendant dix ans.",
      sub: '[zhay a-bee-TAY a LYOHⁿ pahⁿ-dahⁿ dee-ZAHⁿ]',
      body: "Dix ans, avec un début et une fin : un segment fermé, pas une bande. Donc passé composé. EN: a closed segment, so passé composé.",
    },
  ],
};

/** BUILD: sort by job, gated. */
const A2_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-trier',
  layer: 'core',
  size: 'lg',
  title: 'Décor ou action ?',
  groups: [
    grp('Le décor', [
      it(E(1011), 'la météo et la maison'),
      it(E(1013), 'un âge et une habitude'),
      it(E(1014), 'un lieu de vie'),
      it(E(1015), 'un état, ce matin-là'),
    ], chk(
      'Quel mot pourrais-tu ajouter devant ces quatre phrases ?',
      ['« Tout à coup, »', '« À cette époque, »'],
      1,
      "Elles décrivent une situation qui dure. « Tout à coup » annonce une action. EN: they describe, they do not happen.",
    )),
    grp("L'action", [
      it(E(1016), 'une heure précise'),
      it(E(1017), 'un moment, et c’est fini'),
      it(E(1019), 'avec être'),
      it(E(1020), 'le début de l’histoire'),
    ], chk(
      'Ces quatre phrases répondent à quelle question ?',
      ["Qu'est-ce qui se passait ?", "Qu'est-ce qui s'est passé ?"],
      1,
      "Chacune est une étape finie. EN: each is a finished step.",
    )),
    grp('Les deux dans une phrase', [
      it(E(1021), 'la pluie, puis le voisin'),
      it('fr.b1.cafe.083', "l'arrivée, puis la terrasse"),
      it('fr.b1.routines.092', "le retard, puis le petit déjeuner sauté"),
    ], chk(
      'Dans ces phrases, combien de verbes font avancer l’histoire ?',
      ['les deux', 'aucun', 'un seul'],
      2,
      "Un seul par phrase. L'autre dit la situation autour. EN: one event, one background.",
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

/** CHOOSE: the meaning picks the tense. */
const A2_SENS: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-sens',
  layer: 'core',
  size: 'lg',
  title: 'Le sens choisit le temps',
  groups: [
    ctl('Une fête', "« Quand je suis arrivé à la fête, tout le monde ... . » La fête avait déjà commencé.",
      ['a dansé', 'dansait'], 1,
      "La danse continue quand tu arrives : c'est le décor. EN: already going on, so imparfait."),
    ctl('Un examen', "« Hier, j'... mon examen de français. » C'est fini, tu l'as passé.",
      ['ai passé', 'passais'], 0,
      "Une étape finie, dans la journée d'hier. EN: a finished step."),
    ctl('Un bruit', "« Il ... la vaisselle quand il a entendu un bruit. »",
      ['a fait', 'faisait'], 1,
      "La vaisselle était en cours quand le bruit arrive. EN: the dishes were in progress."),
    ctl('Une photo', "Tu décris une photo de ton enfance : « Sur la photo, il ... beau. »",
      ['a fait', 'faisait'], 1,
      "Une description : rien n'arrive sur une photo. EN: a description, so imparfait."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La ligne', "Sur la ligne du temps, l'imparfait est...", ['un point', 'une bande'], 1,
    "Une bande : ça a commencé avant et ça continue après. EN: a band, not a dot."),
  ctl('Le test', "« Le train est parti à huit heures. » Quelle question répond cette phrase ?",
    ["Qu'est-ce qui se passait ?", "Qu'est-ce qui s'est passé ?"], 1,
    "Une étape. EN: a step in the story."),
  ctl('Ensemble', 'Dans un récit, tu as besoin...', ['du décor seulement', 'des actions seulement', 'des deux'], 2,
    "Le décor sans action ne bouge pas ; les actions sans décor ne veulent rien dire. EN: you need both."),
], ['decor', 'action', 'coupure']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le film : décor et action',
    opener: {
      line: "Regarde ton histoire comme un film : il y a le décor derrière, et les actions qui font avancer l'image. EN: See your story as a film: the set behind, and the actions that move the picture on.",
      imageRef: 'lessons/pc-imparfait/act02.jpg',
    },
    sections: [],
    milestone: "Tu sais dire, pour chaque verbe, s'il pose le décor ou s'il fait avancer le film. EN: For any verb you can say whether it sets the scene or moves the film on.",
    estScreens: 30, restPoints: ['a2-ligne'],
  },
  sections: [A2_ECOUTE, A2_DECOR, A2_ACTION, A2_TRIER, A2_LIGNE, A2_TEST, A2_SENS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA COUPURE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Two witnesses at the café, and both use the shape before it is named.
 *  Story bubbles avoid « ? » and « ! », like scene bubbles. */
const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Deux témoins',
  frSub: 'Rue Saint-Viateur, seize heures',
  setting: "Le lendemain, la policière rappelle deux personnes qui étaient au café.",
  bubbles: [
    { from: 'narrator', fr: "La policière appelle d'abord la serveuse.", en: 'The officer calls the waitress first.' },
    { from: 'coach', fr: 'Je servais un client quand j’ai vu l’homme devant la vitrine.', en: 'I was serving a customer when I saw the man in front of the window.' },
    { from: 'coach', fr: 'Pendant que je préparais un café, il a coupé le cadenas.', en: 'While I was making a coffee, he cut the lock.' },
    { from: 'narrator', fr: 'Puis elle appelle un étudiant assis à côté de la porte.', en: 'Then she calls a student sitting by the door.' },
    { from: 'user', fr: 'Je révisais mes notes quand la porte s’est ouverte.', en: 'I was going over my notes when the door opened.' },
    { from: 'user', fr: 'Il pleuvait, donc personne ne regardait dehors.', en: 'It was raining, so nobody was looking outside.' },
    { from: 'narrator', fr: 'Les deux phrases ont la même forme : une chose en cours, une chose qui arrive.', en: 'Both statements have the same shape: something in progress, something that happens.', warn: 'Imparfait + passé composé' },
  ],
  closing: { fr: 'Une bande, puis un point : voilà la coupure.', en: 'A band, then a dot: that is the interruption.' },
  audio: REC('rec-b1-03-temoins'),
  say: REFRAME,
  terms: ['coupure', 'decor'],
};

/** NAME: quand. */
const A3_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'quand : le point qui coupe',
  hint: 'Quatre cartes. Une bande, puis un point.',
  audio: REC('rec-b1-03-coupure'),
  say: REFRAME,
  terms: ['coupure', 'action'],
  cards: [
    {
      head: 'La forme',
      label: 'imparfait + quand + passé composé',
      fr: 'Je dormais quand le téléphone a sonné.',
      sub: '[zhuh dor-meh kahⁿ luh tay-lay-FON a so-NAY]',
      body: "Je dormais : le sommeil a commencé avant. Le téléphone a sonné : un moment précis qui le coupe. EN: ongoing, then the event that cuts it.",
    },
    {
      head: 'Ce que ça dit vraiment',
      label: 'la coupure',
      fr: 'Elle traversait la rue quand elle a vu l’accident.',
      sub: '[ehl tra-vehr-seh la RÜ kahⁿ-tehl a vü lak-see-DAHⁿ]',
      body: "Elle était au milieu de la rue au moment de l'accident. L'imparfait dit « au milieu de ». EN: the imparfait says « in the middle of ».",
    },
    {
      head: 'Une panne, un train, un facteur',
      label: 'toujours la même forme',
      fr: 'Il conduisait quand sa voiture est tombée en panne.',
      sub: '[eel kohⁿ-dwee-zeh kahⁿ sa vwa-TÜR eh tohⁿ-BAY ahⁿ PAN]',
      body: "Le trajet était en cours, la panne le coupe. Avec être, tombée s'accorde avec la voiture. EN: same shape, and note the agreement.",
    },
    {
      head: 'Deux actions, pas une coupure',
      label: 'quand + passé composé + passé composé',
      fr: "Quand le téléphone a sonné, j'ai répondu.",
      sub: '[kahⁿ luh tay-lay-FON a so-NAY zhay ray-pohⁿ-DÜ]',
      body: "Ici, rien n'était en cours : la sonnerie, puis la réponse. Deux points, pas une bande. EN: two events in a row, no background.",
    },
  ],
};

/** NAME: pendant que. */
const A3_PENDANT: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-pendant',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'pendant que : la bande d’abord',
  hint: 'Trois cartes.',
  audio: REC('rec-b1-03-coupure'),
  say: REFRAME,
  terms: ['coupure'],
  cards: [
    {
      head: 'La forme',
      label: 'pendant que + imparfait',
      fr: 'Pendant que je cuisinais, il est arrivé.',
      sub: '[pahⁿ-dahⁿ kuh zhuh kwee-zee-neh eel eh-ta-ree-VAY]',
      body: "pendant que ouvre presque toujours le décor. L'action arrive au milieu. EN: pendant que opens the background.",
    },
    {
      head: 'Une longue bande',
      label: 'pendant que + état',
      fr: 'Pendant que tu étais au travail, le facteur est passé.',
      sub: '[pahⁿ-dahⁿ kuh tü ay-teh oh tra-VAÏ luh fak-TUHR eh pa-SAY]',
      body: "Ton travail a duré toute la matinée ; le facteur, deux minutes. La bande porte le point. EN: a long band carrying a short dot.",
    },
    {
      head: 'Le bébé qui s’endort',
      label: 'la coupure, encore',
      fr: 'Pendant qu’elle parlait au téléphone, le bébé s’est endormi.',
      sub: '[pahⁿ-dahⁿ kehl par-leh oh tay-lay-FON luh bay-BAY seh-tahⁿ-dor-MEE]',
      body: "Le coup de fil continue après. Ce qui change, c'est le bébé. EN: the call goes on; the baby is what changed.",
    },
  ],
};

/** NAME: the order can swap, and the tenses do not. Sheet holds the full set. */
const A3_ORDRE: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-ordre',
  layer: 'core',
  sheetId: 'sheet-coupure',
  title: 'L’ordre peut changer',
  frSub: 'Les temps, non',
  examples: [
    ex(E(210), 'la bande, puis le point'),
    ex(E(1037), 'le point d’abord : la bande reste à l’imparfait'),
    ex(E(1038), 'le décor d’abord, dans la deuxième moitié'),
    ex(E(211), 'pendant que ouvre la bande'),
    ex(E(1034), 'la bande, puis l’orage'),
    ex('fr.b1.cafe.085', "l'attente : le décor · la conversation : l'action"),
    ex('fr.b1.cuisine.015', "l'action d'abord, le décor après"),
    ex('fr.b1.maison.073', 'deux actions : la panne, puis la discussion'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['coupure', 'action'],
};

/** BUILD, gated. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la coupure',
  groups: [
    grp('La bande est déjà là', [
      it(E(1030), 'la douche était en cours'),
      it(E(1003), 'le café était en cours'),
      it(E(1033), 'la queue était en cours'),
    ], chk(
      '« Je ... ma douche quand le facteur a sonné. » (prendre)',
      ['ai pris', 'prenais'],
      1,
      "La douche a commencé avant la sonnerie. EN: the shower started first.",
    )),
    grp('Le point arrive', [
      it(E(1031), 'la panne coupe le match'),
      it(E(1035), 'la rencontre coupe le trajet'),
      it(E(212), 'la lumière coupe le repas'),
    ], chk(
      '« Nous regardions le match quand il y ... une panne. » (avoir)',
      ['avait', 'a eu'],
      1,
      "La panne est le point : elle arrive d'un coup. EN: the cut is the event.",
    )),
    ctl('Les deux ensemble', "« Pendant que nous ... , un orage ... . » (dîner, éclater)",
      ['dînions / a éclaté', 'avons dîné / éclatait'], 0,
      "pendant que + imparfait, puis l'action au passé composé. EN: background then event."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['coupure'],
};

/** CHOOSE, by ear: which one was already going on. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui était déjà en train de faire quoi',
  lines: [
    ln(E(1036)),
    ln(E(1038)),
    ln(E(1037)),
    ln(E(270)),
    ln(E(1032)),
    ln(E(1035)),
    ln(E(1033)),
    ln(E(1034)),
  ],
  questions: [
    { q: 'Première phrase : qui dormait ?', opts: ['moi', 'toi'], correct: 1, why: "« Tu dormais » : le sommeil était en cours quand je suis rentré. EN: you were already asleep." },
    { q: 'Deuxième phrase : les enfants se sont endormis à notre arrivée ?', opts: ['Oui', 'Non, ils dormaient déjà'], correct: 1, why: "L'imparfait dit que ça avait commencé avant. EN: it had started earlier." },
    { q: 'Quatrième phrase : est-ce que quelqu’un était en train de faire quelque chose ?', opts: ['Non, ce sont deux actions', 'Oui'], correct: 0, why: "« Quand le téléphone a sonné, j'ai répondu » : deux points. EN: two events, no band." },
    { q: 'Cinquième phrase : qu’est-ce qui continue après ?', opts: ['le coup de fil', 'le sommeil du bébé', 'les deux'], correct: 0, why: "Elle parlait avant et après ; le bébé, lui, s'est endormi. EN: the call continues." },
    { q: 'Dernière phrase : l’orage arrive...', opts: ['avant le dîner', 'pendant le dîner', 'après le dîner'], correct: 1, why: "pendant que ouvre la bande du dîner. EN: during dinner." },
  ],
  audio: REC('rec-b1-03-coupure-ecoute'),
  say: REFRAME,
  terms: ['coupure'],
};

/** TRAP, stepped and gated: the two flat versions of an interruption. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges de la coupure',
  rule: {
    title: 'Une bande et un point, jamais deux pareils',
    body: "Deux imparfaits, et personne ne coupe : ça devient deux décors. Deux passés composés, et il n'y a plus de bande : ça devient une suite. EN: two imparfaits give two backgrounds; two passés composés give a sequence.",
  },
  cards: [
    { promptLabel: 'deux imparfaits', promptSound: 'Je dormais quand le téléphone sonnait.', fr: 'Je dormais quand le téléphone a sonné.', ipa: '/ʒə dɔʁ.mɛ kɑ̃ lə te.le.fɔn a sɔ.ne/', tip: "La sonnerie est un point : elle arrive d'un coup. EN: the ring is the event." },
    { promptLabel: 'deux passés composés', promptSound: "J'ai dormi quand le téléphone a sonné.", fr: 'Je dormais quand le téléphone a sonné.', ipa: '/ʒə dɔʁ.mɛ kɑ̃ lə te.le.fɔn a sɔ.ne/', tip: "Avec deux passés composés, tu dis que tu as dormi APRÈS la sonnerie. EN: two events read as a sequence." },
    { promptLabel: 'pendant que + passé composé', promptSound: "Pendant que j'ai cuisiné, il est arrivé.", fr: 'Pendant que je cuisinais, il est arrivé.', ipa: '/pɑ̃.dɑ̃ kə ʒə kɥi.zi.nɛ il ɛ.ta.ʁi.ve/', tip: "pendant que ouvre le décor, donc l'imparfait. EN: pendant que opens the background." },
    { promptLabel: 'la voiture', promptSound: 'Il conduisait quand sa voiture tombait en panne.', fr: 'Il conduisait quand sa voiture est tombée en panne.', ipa: '/il kɔ̃.dɥi.zɛ kɑ̃ sa vwa.tyʁ ɛ tɔ̃.be ɑ̃ pan/', tip: "La panne n'était pas en cours : elle arrive. EN: the breakdown is the cut." },
    { promptLabel: 'la classe', promptSound: 'Quand le professeur est entré, les élèves ont parlé encore.', fr: 'Quand le professeur est entré, les élèves parlaient encore.', ipa: '/kɑ̃ lə pʁɔ.fɛ.sœʁ ɛ.tɑ̃.tʁe le.ze.lɛv paʁ.lɛ ɑ̃.kɔʁ/', tip: "Ils parlaient déjà avant son entrée. EN: they were already talking." },
    { promptLabel: 'la bonne forme', promptSound: 'Je lisais le journal quand quelqu’un prenait mon vélo.', fr: "Je lisais le journal quand quelqu'un a pris mon vélo.", ipa: '/ʒə li.zɛ lə ʒuʁ.nal kɑ̃ kɛl.kœ̃ a pʁi mɔ̃ ve.lo/', tip: "Le vol est le point. La lecture est la bande. EN: the theft is the dot." },
  ],
  drill: [
    { promptSay: 'Je dormais quand le téléphone ... .', opts: ['sonnait', 'a sonné'], correct: 1 },
    { promptSay: 'Pendant que je ... , il est arrivé.', opts: ['cuisinais', 'ai cuisiné'], correct: 0 },
    { promptSay: 'Elle ... la rue quand elle a vu l’accident.', opts: ['a traversé', 'traversait'], correct: 1 },
    { promptSay: 'Quand le téléphone a sonné, j’... .', opts: ['ai répondu', 'répondais'], correct: 0 },
    { promptSay: 'Les enfants ... quand nous sommes arrivés.', opts: ['ont dormi', 'dormaient'], correct: 1 },
    { promptSay: 'Nous regardions le match quand il y ... une panne.', opts: ['avait', 'a eu'], correct: 1 },
    { promptSay: 'Pendant qu’elle parlait, le bébé ... .', opts: ['s’est endormi', 's’endormait'], correct: 0 },
    { promptSay: 'Il ... quand sa voiture est tombée en panne.', opts: ['conduisait', 'a conduit'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Une bande et un point' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme plate raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-03-piege-coupure'),
  say: REFRAME,
  terms: ['coupure'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La forme', 'Dans une coupure, la chose en cours est à...', ["l'imparfait", 'au passé composé'], 0,
    "La bande est à l'imparfait, le point au passé composé. EN: band imparfait, dot passé composé."),
  ctl('pendant que', 'Après pendant que, tu mets le plus souvent...', ["l'imparfait", 'le passé composé'], 0,
    "pendant que ouvre le décor. Il y a des exceptions : acte 8. EN: usually the background."),
  ctl('Deux points', '« Quand le téléphone a sonné, j’ai répondu. » Est-ce une coupure ?',
    ['Oui', 'Non, ce sont deux actions qui se suivent'], 1,
    "Rien n'était en cours. EN: nothing was in progress."),
], ['coupure', 'decor']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La coupure',
    opener: {
      line: "Tu dormais, et le téléphone a sonné : voilà la forme qui coupe une action déjà commencée. EN: You were sleeping and the phone rang: the shape that cuts an action already under way.",
      imageRef: 'lessons/pc-imparfait/act03.jpg',
    },
    sections: [],
    milestone: "Tu construis une coupure dans les deux ordres, avec quand et avec pendant que. EN: You can build an interruption in both clause orders.",
    estScreens: 32, restPoints: ['a3-ordre', 'a3-ecoute'],
  },
  sections: [A3_HISTOIRE, A3_REGLE, A3_PENDANT, A3_ORDRE, A3_CONSTRUIRE, A3_ECOUTE, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — DEUX DÉCORS EN MÊME TEMPS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. A whole paragraph where nothing happens: eleven imparfaits and one
 *  passé composé, and that one says « rien n'est arrivé ». */
const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un dimanche où rien n’arrive',
  frSub: 'Onze verbes, une seule action',
  text: "Dimanche, il pleuvait sans arrêt et tout le monde restait à l'intérieur. Mon père lisait le journal dans le fauteuil et ma mère cuisinait. Dans le salon, le feu brûlait et la radio jouait doucement. Les enfants jouaient par terre pendant que les grands discutaient dans la cuisine. Le bébé dormait et la maison était calme. Personne ne regardait l'heure. Dehors, les rues étaient vides. C'était un dimanche comme les autres, et il n'est rien arrivé.",
  glossary: [
    { word: 'sans arrêt', en: 'non-stop', note: 'Sans s’arrêter, toute la journée.' },
    { word: 'le fauteuil', en: 'the armchair', note: 'Le grand siège confortable du salon.' },
    { word: 'par terre', en: 'on the floor', note: 'Sur le sol, pas sur une table.' },
    { word: 'les grands', en: 'the grown-ups', note: 'Ici, les adultes de la famille.' },
    { word: 'comme les autres', en: 'like any other', note: 'Rien de spécial ce jour-là.' },
  ],
  questions: [
    { q: 'Combien de verbes font avancer l’histoire ?', a: "Un seul : « il n'est rien arrivé », et il sert à dire que justement rien ne s'est passé." },
    { q: 'Pourquoi tous les autres verbes sont-ils à l’imparfait ?', a: "Ils décrivent des choses qui duraient en même temps : la pluie, la lecture, la cuisine, le feu, les enfants." },
    { q: '« Les enfants jouaient pendant que les grands discutaient. » Qui coupe qui ?', a: 'Personne. Deux bandes en parallèle, et aucun point.' },
    { q: 'Que se passerait-il si tu mettais « ma mère a cuisiné » ?', a: "Tu ferais de la cuisine une étape finie, et le dimanche commencerait à avancer." },
  ],
  audio: REC('rec-b1-03-dimanche'),
  say: REFRAME,
  terms: ['ensemble', 'decor'],
};

/** NAME. */
const A4_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Deux bandes, aucun point',
  hint: 'Trois cartes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['ensemble'],
  cards: [
    {
      head: 'Deux choses qui durent',
      label: 'imparfait + imparfait',
      fr: 'Pendant que je lisais, il regardait la télé.',
      sub: '[pahⁿ-dahⁿ kuh zhuh lee-zeh eel ruh-gar-deh la tay-LAY]',
      body: "Les deux ont commencé avant et continuent après. Personne ne coupe personne. EN: both run on; neither cuts the other.",
    },
    {
      head: 'Le même décor à deux endroits',
      label: 'imparfait + imparfait',
      fr: 'Ma mère cuisinait pendant que mon père écoutait la radio.',
      sub: '[ma MEHR kwee-zee-neh pahⁿ-dahⁿ kuh mohⁿ PEHR ay-koo-teh la ra-DYOH]',
      body: "Tu peux filmer les deux en même temps. C'est le test : si la caméra n'a pas à bouger, c'est du décor. EN: one shot holds both.",
    },
    {
      head: 'Et si quelque chose arrive',
      label: 'imparfait + passé composé',
      fr: 'Pendant que je cuisinais, il est arrivé.',
      sub: '[pahⁿ-dahⁿ kuh zhuh kwee-zee-neh eel eh-ta-ree-VAY]',
      body: "Une seule chose a changé : le deuxième verbe. Avec deux imparfaits, personne n'arrive. EN: one verb moves and the shape becomes an interruption.",
    },
  ],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Des décors qui tournent ensemble',
  examples: [
    ex(E(221), 'les enfants et les parents'),
    ex(E(1045), 'la vaisselle et les devoirs'),
    ex(E(1047), 'la cuisine et la radio'),
    ex(E(1048), 'deux groupes dans la même maison'),
    ex(E(222), 'la neige dehors, les rues vides'),
    ex(E(1046), 'la neige dehors, le feu dedans'),
    ex(E(1049), 'le bébé et la maison'),
    ex('fr.a2.famille.010', "deux états, puis une action : ils ont continué"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ensemble', 'decor'],
};

/** BUILD, gated. */
const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Mets les deux bandes',
  groups: [
    grp('Deux choses en parallèle', [
      it(E(220), 'toi et lui'),
      it(E(1045), 'toi et ton fils'),
      it(E(221), 'les petits et les grands'),
    ], chk(
      '« Pendant que je ... la vaisselle, mon fils ... ses devoirs. » (faire, faire)',
      ['ai fait / a fait', 'faisais / faisait'],
      1,
      "Deux activités en cours, rien qui arrive : deux imparfaits. EN: two ongoing activities.",
    )),
    grp('Le décor du lieu', [
      it(E(222), 'la météo et la rue'),
      it(E(1046), 'dehors et dedans'),
      it(E(1049), 'le bébé et la maison'),
    ], chk(
      '« Il ... et les rues ... vides. » (neiger, être)',
      ['a neigé / ont été', 'neigeait / étaient'],
      1,
      "Un tableau, pas une suite d'étapes. EN: a picture, not a sequence.",
    )),
    ctl('Et la différence', "« Pendant que je cuisinais, il ... . » Tu veux dire qu'il arrive à ce moment-là.",
      ['est arrivé', 'arrivait'], 0,
      "Là, quelque chose se passe : passé composé. EN: now something happens."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ensemble', 'coupure'],
};

/** TRAP. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de décor',
  errors: [
    {
      wrong: 'Pendant que je lisais, il a regardé la télé.',
      right: 'Pendant que je lisais, il regardait la télé.',
      why: "Normal : en anglais, he watched TV passe partout. Ici, les deux duraient ensemble. EN: both were going on together.",
    },
    {
      wrong: 'Les enfants ont joué pendant que les parents ont parlé.',
      right: 'Les enfants jouaient pendant que les parents parlaient.',
      why: "Avec deux passés composés, tu comptes deux activités finies. Comme décor, ce sont deux bandes. EN: as background, both are imparfait.",
    },
    {
      wrong: 'Il a neigé et les rues ont été vides.',
      right: 'Il neigeait et les rues étaient vides.',
      why: "« Ont été vides » ferme la situation comme un événement. Ici, tu peins un tableau. EN: you are painting, not counting.",
    },
    {
      wrong: 'Le bébé a dormi et la maison était calme.',
      right: 'Le bébé dormait et la maison était calme.',
      why: "« A dormi » est correct ailleurs : il dit une sieste finie. Dans un décor, garde l'imparfait. EN: correct elsewhere, wrong as background.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ensemble', 'decor'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le test', 'Deux imparfaits avec pendant que, ça veut dire...', ["les deux duraient ensemble", "l'un a coupé l'autre"], 0,
    "Deux bandes, aucun point. EN: two bands, no dot."),
  ctl('La différence', "« Pendant que je lisais, il ... la télé. » Il regarde tout le temps que tu lis.",
    ['a regardé', 'regardait'], 1,
    "Tout le temps que tu lis : une bande. EN: for the whole time, so imparfait."),
  ctl('Un dimanche', 'Dans le texte du dimanche, combien de verbes font avancer l’histoire ?',
    ['un seul', 'la moitié', 'tous'], 0,
    "Un seul, et il sert à dire que rien n'est arrivé. EN: one, and it says nothing happened."),
], ['ensemble', 'decor']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Deux décors en même temps',
    opener: {
      line: "Deux choses peuvent durer ensemble sans que rien n'arrive : personne ne coupe personne. EN: Two things can run side by side with nothing happening: neither one cuts the other.",
      imageRef: 'lessons/pc-imparfait/act04.jpg',
    },
    sections: [],
    milestone: "Tu reconnais un décor double et tu ne le transformes plus en suite d'étapes. EN: You recognise a double background and stop turning it into a sequence.",
    estScreens: 22, restPoints: ['a4-exemples'],
  },
  sections: [A4_LECTURE, A4_REGLE, A4_EXEMPLES, A4_CONSTRUIRE, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LA SUITE D'ACTIONS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The morning before the theft, told as a chain. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'La matinée, étape par étape',
  frSub: 'Avant le café, avant le vol',
  setting: "Chez M. Tremblay, le matin du vol. Il raconte sa matinée à la policière.",
  bubbles: [
    { from: 'narrator', fr: 'La policière veut la matinée dans l’ordre.', en: 'The officer wants the morning in order.' },
    { from: 'coach', fr: 'Racontez-moi votre matinée, étape par étape.', en: 'Tell me your morning, step by step.' },
    { from: 'user', fr: 'Je me suis levé, je me suis habillé et je suis sorti.', en: 'I got up, I got dressed and I went out.' },
    { from: 'user', fr: 'D’abord, j’ai pris le bus. Ensuite, j’ai acheté le journal.', en: 'First I took the bus. Then I bought the paper.' },
    { from: 'user', fr: 'Puis je suis entré dans le café et je me suis assis près de la fenêtre.', en: 'Then I went into the café and sat down by the window.' },
    { from: 'coach', fr: 'Tout est clair. Chaque verbe est une étape, et l’ordre est le bon.', en: 'All clear. Every verb is a step, and the order is right.', warn: 'Passé composé, cinq fois' },
    { from: 'narrator', fr: 'Aucun imparfait dans cette partie : rien ne décrit, tout avance.', en: 'No imparfait in this part: nothing describes, everything moves.' },
  ],
  closing: { fr: 'Des points, l’un après l’autre : voilà une suite.', en: 'Dots one after another: that is a chain.' },
  audio: REC('rec-b1-03-matinee'),
  say: REFRAME,
  terms: ['suite', 'action'],
};

/** NAME. */
const A5_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Les actions se suivent',
  hint: 'Trois cartes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'action'],
  cards: [
    {
      head: "L'ordre des verbes",
      label: 'le passé composé',
      fr: 'Je me suis levé, je me suis habillé et je suis sorti.',
      sub: '[zhuh muh swee luh-VAY zhuh muh swee-za-bee-YAY ay zhuh swee sor-TEE]',
      body: "Trois étapes, dans l'ordre où elles se sont passées. Change l'ordre et tu changes l'histoire. EN: the order of the verbs is the order of events.",
    },
    {
      head: 'Avec être, on accorde',
      label: Cap(PRONOMINAL_PC_REF),
      fr: "Elle s'est levée, elle a pris un café et elle est partie.",
      sub: '[ehl seh luh-VAY eh-la pree uhⁿ ka-FAY ay eh-leh par-TEE]',
      body: `« ${A223_REFRAME} » FR: ${A223_REFRAME_FR}`,
    },
    {
      head: 'Les mots qui guident',
      label: 'les connecteurs',
      fr: "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire.",
      sub: '[da-BOR zhay ap-LAY la po-LEES pwee zhay rahⁿ-PLEE uhⁿ for-mü-LEHR]',
      body: "d'abord, puis, ensuite, alors, finalement : ils montrent l'ordre sans changer le temps. EN: connectors show order; they do not change the tense.",
    },
  ],
};

/** NAME: the connector table. Full list on the sheet. */
const A5_CONNECTEURS: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-connecteurs',
  layer: 'core',
  sheetId: 'sheet-recit',
  title: 'Six mots pour guider ton lecteur',
  cols: ['Mot', 'Où', 'Exemple'],
  rows: [
    { cells: ["d'abord", 'la première étape', "D'abord, j'ai fermé la porte."], say: "D'abord, il a fermé la porte. Ensuite, il a éteint la lumière.", detail: { title: "d'abord", body: "Ouvre la suite. Souvent au début de la phrase, avec une virgule. EN: opens the chain.", say: "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire." } },
    { cells: ['ensuite', "l'étape suivante", 'Ensuite, il a éteint la lumière.'], say: 'Ensuite, il a éteint la lumière.', detail: { title: 'ensuite', body: "La suite logique. Se place au début ou après le verbe. EN: the next step.", say: 'Nous avons fait les courses ensemble, ensuite nous avons cuisiné.' } },
    { cells: ['puis', "l'étape suivante", 'Puis le téléphone a sonné.'], say: 'Puis le téléphone a sonné une deuxième fois.', detail: { title: 'puis', body: "Comme ensuite, mais plus court et plus fréquent à l'oral. EN: same job, shorter.", say: "J'ai coupé les légumes puis je les ai fait cuire." } },
    { cells: ['alors', 'la conséquence', 'Alors j’ai appelé un taxi.'], say: "Il pleuvait, alors nous avons pris un taxi.", detail: { title: 'alors', body: "Dit pourquoi l'étape suivante arrive. Souvent après le décor. EN: so, therefore.", say: "Comme il pleuvait, il a préféré prendre le métro plutôt que marcher." } },
    { cells: ['finalement', 'la dernière étape', 'Finalement, nous avons pris un taxi.'], say: 'Finalement, nous avons pris un taxi.', detail: { title: 'finalement', body: "Ferme le récit. Utile dans la mission écrite de l'acte 10. EN: closes the story.", say: "Heureusement, tout s'est bien terminé." } },
    { cells: ['tout de suite après', 'juste après', 'Tout de suite après, il est parti.'], say: 'tout de suite après', detail: { title: 'tout de suite après', body: "Deux étapes collées, sans pause entre les deux. EN: immediately after.", say: 'Il a coupé le cadenas et il est parti.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

/** BUILD, gated. */
const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Enchaîne les étapes',
  groups: [
    grp('Une matinée', [
      it(E(230), 'trois étapes'),
      it(E(1055), 'la même matinée, au féminin'),
      it(E(1057), 'deux étapes avec être'),
    ], chk(
      '« Je me suis levé, je me suis habillé et je ... . » (sortir)',
      ['sortais', 'suis sorti'],
      1,
      "La troisième étape de la suite : passé composé avec être. EN: the third step of the chain.",
    )),
    grp('Au bureau, à la maison', [
      it(E(1056), 'trois étapes au bureau'),
      it('fr.a2.routines.063', 'deux étapes, avec ensuite'),
      it('fr.a2.cuisine.042', 'deux étapes, avec puis'),
    ], chk(
      'Dans « Nous avons fait les courses ensemble, ensuite nous avons cuisiné », que fait ensuite ?',
      ['il change le temps du verbe', "il montre l'ordre des étapes"],
      1,
      "Les connecteurs montrent l'ordre. Le temps ne bouge pas. EN: connectors mark order only.",
    )),
    ctl('Le bon ordre', "Tu racontes : tu as éteint la lumière, puis tu as fermé la porte. Quelle phrase dit ça ?",
      ["D'abord, j'ai éteint la lumière. Ensuite, j'ai fermé la porte.", "D'abord, j'ai fermé la porte. Ensuite, j'ai éteint la lumière."],
      0,
      "L'ordre des verbes EST l'ordre des étapes. EN: verb order is event order."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris la suite que tu entends',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite'],
};

/** CHOOSE: the same three verbs, two stories. */
const A5_SENS: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-sens',
  layer: 'core',
  size: 'lg',
  title: 'Suite ou décor ?',
  groups: [
    ctl('Le matin du vol', "« Ce matin-là, je ... le bus, puis j'ai marché jusqu'au café. » (prendre)",
      ["j'ai pris", 'je prenais'], 0,
      "puis enchaîne deux étapes : les deux sont des actions. EN: puis chains two events."),
    ctl('Tous les matins', "« À cette époque, je ... le bus tous les matins. » (prendre)",
      ['prenais', 'ai pris'], 0,
      "Une habitude, sans début ni fin donnés : le décor. EN: a habit, so imparfait."),
    ctl('La fête', "« Ils étaient fatigués, mais ils ... la fête. » (continuer)",
      ['continuaient', 'ont continué'], 1,
      "L'état est le décor ; continuer la fête est la décision, l'action. EN: the state frames the decision."),
    ctl('Le retour', "« Nous ... dans le bus et nous nous sommes assis. » (monter)",
      ['sommes montés', 'montions'], 0,
      "Deux étapes collées : la suite. EN: two steps, so passé composé."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'decor'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Trois erreurs de suite',
  errors: [
    {
      wrong: 'Ce matin-là, je me levais, je m’habillais et je sortais.',
      right: 'Ce matin-là, je me suis levé, je me suis habillé et je suis sorti.',
      why: "Pour une habitude, l'imparfait irait bien. Pour un seul matin, ce sont trois étapes. EN: one morning, three steps.",
    },
    {
      wrong: "D'abord, j'ai appelé la police, puis je remplissais un formulaire.",
      right: "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire.",
      why: "Après puis, on attend l'étape suivante, pas une description. EN: after puis comes the next step.",
    },
    {
      wrong: 'Elle s’est levé, elle a pris un café et elle est parti.',
      right: "Elle s'est levée, elle a pris un café et elle est partie.",
      why: `Avec être, le participe s'accorde. ${Cap(PC_ETRE_REF)} : « ${A221_REFRAME} » FR: ${A221_REFRAME_FR}`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['suite', 'action'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La forme', "Dans une suite d'actions, tu utilises...", ['le passé composé', "l'imparfait"], 0,
    "Des points, l'un après l'autre. EN: dots in a row."),
  ctl('Les connecteurs', "d'abord, ensuite, puis, finalement servent à...", ['changer le temps', "montrer l'ordre"], 1,
    "Ils guident le lecteur, sans toucher au verbe. EN: they guide, not conjugate."),
  ctl("L'accord", "« Elle ... levée, puis elle est partie. » (se lever)", ["s'est", 'était'], 0,
    "Verbe pronominal au passé composé : être, et l'accord. EN: pronominal verbs take être."),
], ['suite', 'action']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: "La suite d'actions",
    opener: {
      line: "Quand les actions se suivent, l'ordre de tes verbes devient l'ordre de ton histoire. EN: When events follow one another, the order of your verbs becomes the order of your story.",
      imageRef: 'lessons/pc-imparfait/act05.jpg',
    },
    sections: [],
    milestone: "Tu enchaînes quatre ou cinq étapes sans perdre ton lecteur. EN: You can chain four or five steps without losing your reader.",
    estScreens: 30, restPoints: ['a5-connecteurs', 'a5-dictee'],
  },
  sections: [A5_HISTOIRE, A5_REGLE, A5_CONNECTEURS, A5_CONSTRUIRE, A5_DICTEE, A5_SENS, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LONG, MAIS FERMÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET by ear: a job interview, where every answer carries a duration. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Un entretien d’embauche',
  frSub: 'Écoute les durées',
  lines: [
    ln(E(1070)),
    ln(E(1071)),
    ln(E(1075)),
    ln(E(1076)),
    ln(E(1077)),
    ln(E(240)),
    ln(E(241)),
    ln(E(244)),
  ],
  questions: [
    { q: 'Première phrase : elle travaille encore dans ce bureau ?', opts: ['Oui', 'Non, c’est fini'], correct: 1, why: "« J'ai travaillé pendant cinq ans » : une période fermée. EN: a closed period." },
    { q: 'Quatrième phrase : « Quand je travaillais à Abidjan... » Quelle durée ?', opts: ['une durée donnée', 'une durée ouverte'], correct: 1, why: "Aucune durée n'est dite : c'est le décor d'autre chose. EN: no length given." },
    { q: 'Sixième phrase : « J’ai habité à Lyon pendant dix ans. » Dix ans, c’est long. Quel temps ?', opts: ['le passé composé', "l'imparfait"], correct: 0, why: "Long, mais fermé. La longueur ne décide pas. EN: long, but closed." },
    { q: 'Septième phrase : « J’habitais à Lyon quand j’ai rencontré Claire. » Lyon est...', opts: ["le décor de la rencontre", "une étape de l'histoire"], correct: 0, why: "Lyon situe la rencontre. EN: Lyon frames the meeting." },
    { q: 'Dernière phrase : deux heures à l’urgence, c’est...', opts: ['une durée ouverte', 'une durée fermée'], correct: 1, why: "Deux heures, comptées et finies. EN: counted and finished." },
  ],
  audio: REC('rec-b1-03-entretien'),
  say: REFRAME,
  terms: ['duree'],
};

/** NAME. */
const A6_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Long, mais fermé',
  hint: 'Quatre cartes. La longueur ne décide rien.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree', 'decor'],
  cards: [
    {
      head: 'Dix ans, et fini',
      label: 'durée fermée',
      fr: "J'ai habité à Lyon pendant dix ans.",
      sub: '[zhay a-bee-TAY a LYOHⁿ pahⁿ-dahⁿ dee-ZAHⁿ]',
      body: "La phrase donne la durée et la période est terminée : un segment fermé. EN: the length is stated and over.",
    },
    {
      head: 'Lyon comme décor',
      label: 'durée ouverte',
      fr: "J'habitais à Lyon quand j'ai rencontré Claire.",
      sub: '[zha-bee-teh a LYOHⁿ kahⁿ zhay rahⁿ-kohⁿ-tray KLEHR]',
      body: "Ici, Lyon situe une autre action. Aucune durée n'est donnée. EN: no length given, so imparfait.",
    },
    {
      head: 'La météo aussi',
      label: 'toute la journée',
      fr: 'Il a plu toute la journée.',
      sub: '[eel a PLÜ toot la zhoor-NAY]',
      body: "La pluie est souvent le décor. Mais « toute la journée » ferme la durée. EN: a closed duration makes it an event.",
    },
    {
      head: 'Ce que b1.02 disait déjà',
      label: Cap(IMP_USE_REF),
      fr: 'deux heures · dix ans · toute la nuit',
      sub: '[deu-ZUHR] · [dee-ZAHⁿ] · [toot la NWEE]',
      body: `« ${B102_REFRAME} » Ici, justement, on compte. EN: ${B102_REFRAME_EN} Here you are counting, so the passé composé.`,
    },
  ],
};

/** NAME: the markers. Full list on the sheet. */
const A6_MARQUEURS: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-marqueurs',
  layer: 'core',
  sheetId: 'sheet-duree',
  title: 'Six marqueurs de durée',
  cols: ['Marqueur', 'Fermée ?', 'Temps'],
  rows: [
    { cells: ['pendant deux ans', 'oui', 'passé composé'], say: "J'ai travaillé dans ce bureau pendant cinq ans.", detail: { title: 'pendant + durée', body: "Tu donnes la durée et elle est finie. EN: a stated, finished length.", say: "J'ai habité à Lyon pendant dix ans." } },
    { cells: ['toute la journée', 'oui', 'passé composé'], say: 'Il a plu toute la journée.', detail: { title: 'toute la journée, toute la nuit', body: "Du début à la fin de la journée : un segment. EN: start to end, so closed.", say: 'Il a neigé toute la nuit.' } },
    { cells: ['longtemps', 'oui', 'passé composé'], say: "J'ai attendu longtemps devant la porte.", detail: { title: 'longtemps', body: "On ne dit pas combien, mais l'attente est finie. EN: unmeasured, still finished.", say: "Nous avons attendu deux heures à l'urgence." } },
    { cells: ['en deux heures', 'oui', 'passé composé'], say: 'Elle a lu tout le roman en une nuit.', detail: { title: 'en + durée', body: "Le temps qu'il a fallu pour finir. EN: the time it took to complete.", say: 'Nous avons marché pendant trois heures.' } },
    { cells: ['à cette époque', 'non', 'imparfait'], say: 'À cette époque, nous habitions près du marché.', detail: { title: 'à cette époque', body: "Une période sans bords : le décor d'une vie. EN: a period with no edges.", say: 'Quand je travaillais à Abidjan, je rentrais tard.' } },
    { cells: ['quand + imparfait', 'non', 'imparfait'], say: "J'habitais à Lyon quand j'ai rencontré Claire.", detail: { title: 'quand + imparfait', body: "La période sert de décor à une action. EN: the period frames an event.", say: 'Il pleuvait quand je suis sorti.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree'],
};

/** BUILD, gated. */
const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ferme la durée',
  groups: [
    grp('Des périodes finies', [
      it(E(1070), 'cinq ans, au bureau'),
      it(E(1071), 'six mois de français'),
      it(E(1075), 'quatre ans à Abidjan'),
      it('fr.a2.ecole.045', 'trois ans de maths'),
    ], chk(
      '« Elle ... le français pendant six mois. » (étudier)',
      ['étudiait', 'a étudié'],
      1,
      "Six mois, donnés et finis. EN: six months, stated and over.",
    )),
    grp('Des périodes ouvertes', [
      it(E(1076), 'aucune durée dite'),
      it(E(1077), 'une époque, sans bords'),
      it(E(241), 'Lyon comme décor'),
    ], chk(
      '« ... , nous habitions près du marché. » Quel début de phrase ?',
      ['Pendant deux ans', 'À cette époque'],
      1,
      "« Pendant deux ans » fermerait la période et demanderait le passé composé. EN: pendant would close it.",
    )),
    ctl('La météo', "« Il ... toute la nuit. » (neiger)", ['a neigé', 'neigeait'], 0,
      "« Toute la nuit » ferme la durée. EN: all night closes it."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree'],
};

/** TRAP, stepped and gated: the « long = imparfait » myth. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège de la longueur',
  rule: {
    title: 'Ce n’est pas la longueur, c’est la fin',
    body: "Beaucoup croient que l'imparfait sert pour ce qui dure et le passé composé pour ce qui est court. Dix ans peuvent être fermés, et deux minutes peuvent être du décor. EN: what decides is not length but whether the stretch is closed.",
  },
  cards: [
    { promptLabel: 'dix ans', promptSound: "J'habitais à Lyon pendant dix ans.", fr: "J'ai habité à Lyon pendant dix ans.", ipa: '/ʒe a.bi.te a ljɔ̃ pɑ̃.dɑ̃ di.zɑ̃/', tip: "pendant dix ans ferme la période. EN: pendant closes it." },
    { promptLabel: 'cinq ans', promptSound: 'Je travaillais dans ce bureau pendant cinq ans.', fr: "J'ai travaillé dans ce bureau pendant cinq ans.", ipa: '/ʒe tʁa.va.je dɑ̃ sə by.ʁo pɑ̃.dɑ̃ sɛ̃.kɑ̃/', tip: "Même forme, même raison. EN: same shape, same reason." },
    { promptLabel: 'toute la journée', promptSound: 'Il pleuvait toute la journée.', fr: 'Il a plu toute la journée.', ipa: '/il a ply tut la ʒuʁ.ne/', tip: "Du matin au soir, et c'est fini. EN: morning to night, and over." },
    { promptLabel: 'deux heures', promptSound: "Nous attendions deux heures à l'urgence.", fr: "Nous avons attendu deux heures à l'urgence.", ipa: '/nu.za.vɔ̃.za.tɑ̃.dy dø.zœʁ a lyʁ.ʒɑ̃s/', tip: "Deux heures comptées. EN: two counted hours." },
    { promptLabel: 'sans durée', promptSound: "J'ai habité à Lyon quand j'ai rencontré Claire.", fr: "J'habitais à Lyon quand j'ai rencontré Claire.", ipa: '/ʒa.bi.tɛ a ljɔ̃ kɑ̃ ʒe ʁɑ̃.kɔ̃.tʁe klɛʁ/', tip: "Ici, aucune durée : Lyon est le décor. EN: no length, so background." },
    { promptLabel: 'une époque', promptSound: 'À cette époque, nous avons habité près du marché.', fr: 'À cette époque, nous habitions près du marché.', ipa: '/a sɛ.te.pɔk nu.za.bi.tjɔ̃ pʁɛ dy maʁ.ʃe/', tip: "Une époque n'a pas de bords. EN: an era has no edges." },
  ],
  drill: [
    { promptSay: "J'... à Lyon pendant dix ans.", opts: ['habitais', 'ai habité'], correct: 1 },
    { promptSay: "J'... à Lyon quand j'ai rencontré Claire.", opts: ['habitais', 'ai habité'], correct: 0 },
    { promptSay: 'Il ... toute la journée.', opts: ['a plu', 'pleuvait'], correct: 0 },
    { promptSay: 'Il ... quand je suis sorti.', opts: ['a plu', 'pleuvait'], correct: 1 },
    { promptSay: 'Nous ... deux heures à l’urgence.', opts: ['avons attendu', 'attendions'], correct: 0 },
    { promptSay: 'À cette époque, nous ... près du marché.', opts: ['avons habité', 'habitions'], correct: 1 },
    { promptSay: 'Elle ... le français pendant six mois.', opts: ['a étudié', 'étudiait'], correct: 0 },
    { promptSay: 'Quand je ... à Abidjan, je rentrais tard.', opts: ['travaillais', 'ai travaillé'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La fin, pas la longueur' },
    { label: 'Six cartes', kind: 'cards', title: 'Six durées, deux temps' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-03-piege-duree'),
  say: REFRAME,
  terms: ['duree'],
};

/** CHOOSE: what the choice actually tells the listener. */
const A6_SENS: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-sens',
  layer: 'core',
  size: 'lg',
  title: 'Ce que ton choix raconte',
  groups: [
    ctl('Tu y habites encore ?', "« Elle a vécu à Lyon pendant deux ans. » Elle y vit aujourd'hui ?",
      ['Oui', "Non, c'est fini", 'On ne sait pas'], 1,
      "Le passé composé avec une durée ferme la période. EN: the period is closed."),
    ctl('Et là ?', "« Elle vivait à Lyon quand elle a rencontré Claire. » Elle y vit aujourd'hui ?",
      ['On ne sait pas', 'Non, jamais'], 0,
      "La phrase ne parle que du moment de la rencontre. EN: it only frames the meeting."),
    ctl('Au travail', "Tu veux dire que ton poste est terminé : « J'... pendant cinq ans dans ce bureau. »",
      ['ai travaillé', 'travaillais'], 0,
      "Une période fermée, donc finie. EN: closed, so over."),
    ctl('Dans une histoire', "« Ce soir-là, il ... encore quand je suis rentré. » (pleuvoir)",
      ['a plu', 'pleuvait'], 1,
      "La pluie continue au moment de ton retour : décor. EN: still going on when you got back."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['duree', 'decor'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La question à poser', 'Pour choisir, tu demandes...', ['Est-ce que c’est long ?', 'Est-ce que la durée est donnée et finie ?'], 1,
    "La fin décide, pas la longueur. EN: the end decides, not the length."),
  ctl('pendant', 'Avec « pendant + une durée », tu utilises presque toujours...', ['le passé composé', "l'imparfait"], 0,
    "pendant ferme la période. EN: pendant closes the stretch."),
  ctl('à cette époque', 'Avec « à cette époque », tu utilises...', ["l'imparfait", 'le passé composé'], 0,
    "Une époque sert de décor. EN: an era is background."),
], ['duree', 'decor']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Long, mais fermé',
    opener: {
      line: "Dix ans, c'est long, et pourtant c'est fermé : ici tu apprends à compter le temps. EN: Ten years is long and still closed: here you learn to count time.",
      imageRef: 'lessons/pc-imparfait/act06.jpg',
    },
    sections: [],
    milestone: "Une durée longue ne te fait plus hésiter : tu regardes si elle est fermée. EN: A long stretch no longer fools you: you look at whether it is closed.",
    estScreens: 28, restPoints: ['a6-marqueurs'],
  },
  sections: [A6_ECOUTE, A6_REGLE, A6_MARQUEURS, A6_CONSTRUIRE, A6_PIEGE, A6_SENS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — UN VERBE, DEUX TEMPS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Five verbs, each used twice: once as décor, once as action. */
const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le samedi de la pluie',
  frSub: 'Les mêmes verbes, deux fois',
  text: "Ce samedi-là, il pleuvait depuis le matin. Je travaillais à la maison parce que le bureau était fermé. Les enfants jouaient dans le couloir et ma voisine lisait sur son balcon. À midi, il a plu encore plus fort, alors j'ai fermé la fenêtre. J'ai travaillé jusqu'à quinze heures, puis j'ai arrêté. Les enfants ont joué une heure de plus, puis ils sont rentrés. Le soir, j'ai lu tout le journal en vingt minutes. Cinq verbes reviennent deux fois : une fois pour le décor, une fois pour l'action.",
  glossary: [
    { word: 'depuis le matin', en: 'since the morning', note: 'La pluie a commencé avant le début de l’histoire.' },
    { word: 'le couloir', en: 'the hallway', note: 'Le passage entre les pièces.' },
    { word: 'son balcon', en: 'her balcony', note: 'La petite terrasse d’un appartement.' },
    { word: 'encore plus fort', en: 'even harder', note: 'Plus fort qu’avant.' },
  ],
  questions: [
    { q: 'Trouve les deux « pleuvoir ». Que dit chacun ?', a: "« il pleuvait » : la pluie durait déjà. « il a plu encore plus fort » : un moment précis, à midi." },
    { q: 'Pourquoi « je travaillais » puis « j’ai travaillé » ?', a: "Le premier situe la matinée, le second compte le temps de travail jusqu'à quinze heures." },
    { q: 'Et les enfants ?', a: "« jouaient » est le décor du matin ; « ont joué une heure de plus » est une durée fermée." },
    { q: 'Le verbe change-t-il de sens entre les deux temps ?', a: "Non. C'est son rôle dans l'histoire qui change, pas son sens." },
  ],
  audio: REC('rec-b1-03-samedi'),
  say: REFRAME,
  terms: ['decor', 'action', 'duree'],
};

/** NAME. */
const A7_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le verbe ne décide pas',
  hint: 'Trois cartes. Le même verbe, deux rôles.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
  cards: [
    {
      head: 'Un verbe, deux rôles',
      label: 'pleuvoir',
      fr: 'il pleuvait · il a plu',
      sub: '[eel pluh-veh] · [eel a PLÜ]',
      body: "Aucun verbe n'appartient à un temps. Demande ce qu'il fait dans l'histoire, pas ce qu'il veut dire. EN: no verb belongs to a tense.",
    },
    {
      head: 'Comme décor',
      label: "l'imparfait",
      fr: 'Ce jour-là, je travaillais à la maison.',
      sub: '[suh zhoor-LA zhuh tra-va-yeh a la meh-ZOHⁿ]',
      body: "Ça situe la journée. On ne sait ni quand ça commence ni quand ça s'arrête. EN: it frames the day.",
    },
    {
      head: 'Comme action',
      label: 'le passé composé',
      fr: "J'ai travaillé jusqu'à minuit.",
      sub: '[zhay tra-va-YAY zhüs-ka mee-NWEE]',
      body: "Le même verbe, avec une fin : une étape comptée dans l'histoire. EN: the same verb, now with an end.",
    },
  ],
};

const A7_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-paires',
  layer: 'core',
  title: 'Cinq paires',
  frSub: 'Décor à gauche, action à droite',
  examples: [
    ex(E(1090), 'pleuvoir : le décor de la sortie'),
    ex(E(1091), 'pleuvoir : deux heures, fermées'),
    ex(E(1092), 'travailler : la journée entière, sans bords'),
    ex(E(1093), 'travailler : jusqu’à minuit, et fini'),
    ex(E(1094), 'lire : ce qu’elle faisait dans le train'),
    ex(E(1095), 'lire : tout le roman, en une nuit'),
    ex(E(1096), 'habiter : où on vivait, à cette époque'),
    ex(E(1097), 'habiter : dix ans, fermés'),
    ex(E(1098), 'jouer : le décor de la scène'),
    ex(E(1099), 'jouer : une heure, puis la suite'),
    ex(E(250), 'marcher deux fois dans une phrase'),
    ex('fr.a2.deplacements.011', 'le froid, puis la décision'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action', 'duree'],
};

/** BUILD, gated. */
const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Choisis le rôle, pas le verbe',
  groups: [
    grp('La pluie', [
      it(E(1090), 'la pluie situe la sortie'),
      it(E(1091), 'deux heures comptées'),
      it(E(251), 'les deux dans une phrase'),
    ], chk(
      '« Il ... quand nous sommes sortis. » (pleuvoir)',
      ['a plu', 'pleuvait'],
      1,
      "La pluie était en cours au moment de la sortie. EN: it was already raining.",
    )),
    grp('Le travail et la lecture', [
      it(E(1092), 'la journée, sans bords'),
      it(E(1093), 'jusqu’à minuit, fermé'),
      it(E(1095), 'tout le roman, en une nuit'),
    ], chk(
      '« Hier soir, j’... jusqu’à minuit. » (travailler)',
      ['ai travaillé', 'travaillais'],
      0,
      "« Jusqu'à minuit » ferme le travail : une étape. EN: « jusqu'à » closes it.",
    )),
    ctl('Les enfants', "« Les enfants ... une heure, puis ils sont rentrés. » (jouer)",
      ['jouaient', 'ont joué'], 1,
      "Une heure comptée, puis l'étape suivante. EN: one counted hour, then the next step."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action'],
};

/** CHOOSE, by ear. */
const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Décor ou action, à l’oreille',
  lines: [
    ln(E(1090)),
    ln(E(1091)),
    ln(E(1094)),
    ln(E(1095)),
    ln(E(1096)),
    ln(E(1097)),
    ln(E(1098)),
    ln(E(1099)),
  ],
  questions: [
    { q: 'Première et deuxième phrase : laquelle donne une durée ?', opts: ['la première', 'la deuxième'], correct: 1, why: "« pendant deux heures » : une durée fermée. EN: the second gives a length." },
    { q: 'Troisième phrase : elle a fini le roman ?', opts: ['On ne sait pas', 'Oui, elle l’a fini'], correct: 0, why: "« Elle lisait » dit seulement ce qu'elle faisait. EN: the imparfait says nothing about finishing." },
    { q: 'Quatrième phrase : et là ?', opts: ['Oui, en une nuit', 'On ne sait pas'], correct: 0, why: "« Elle a lu tout le roman en une nuit » : fini, et compté. EN: finished and counted." },
    { q: 'Cinquième et sixième : laquelle dit que la période est terminée ?', opts: ['la cinquième', 'la sixième'], correct: 1, why: "« pendant dix ans » ferme la période. EN: the sixth closes it." },
    { q: 'Dernière phrase : que se passe-t-il après l’heure de jeu ?', opts: ['rien', 'ils sont rentrés'], correct: 1, why: "Une suite : jouer une heure, puis rentrer. EN: a chain of two steps." },
  ],
  audio: REC('rec-b1-03-paires'),
  say: REFRAME,
  terms: ['decor', 'action'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Trois erreurs de rôle',
  errors: [
    {
      wrong: 'Il a plu quand nous sommes sortis.',
      right: 'Il pleuvait quand nous sommes sortis.',
      why: "« Il a plu » ferait de la pluie une deuxième étape, après la sortie. EN: the passé composé makes the rain a second event.",
    },
    {
      wrong: "J'ai travaillé à la maison ce jour-là, parce que le bureau était fermé.",
      right: "Je travaillais à la maison ce jour-là, parce que le bureau était fermé.",
      why: "Les deux sont possibles, mais ici tu poses le décor de la journée, pas une étape. EN: both exist; as a frame, imparfait.",
    },
    {
      wrong: 'Elle lisait tout le roman en une nuit.',
      right: 'Elle a lu tout le roman en une nuit.',
      why: "« En une nuit » compte le temps qu'il a fallu : la lecture est finie. EN: « en une nuit » counts it, so it is closed.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'duree'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La bonne question', 'Devant un verbe, tu demandes...', ['Ce verbe va avec quel temps ?', 'Ce verbe fait quoi dans mon histoire ?'], 1,
    "Le rôle décide, pas le verbe. EN: the role decides, not the verb."),
  ctl('Deux fois le même', '« Il pleuvait quand je suis parti, et il a plu jusqu’au soir. » Est-ce correct ?',
    ['Oui', 'Non, il faut choisir un seul temps'], 0,
    "Le même verbe peut jouer les deux rôles dans une phrase. EN: one verb, both roles."),
  ctl('La fin', '« Elle ... tout le roman en une nuit. »', ['a lu', 'lisait'], 0,
    "« En une nuit » ferme la lecture. EN: closed by « en une nuit »."),
], ['decor', 'action']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Un verbe, deux temps',
    opener: {
      line: "Le même verbe peut être le décor dans une phrase et l'action dans la suivante. EN: The same verb can be the set in one sentence and the action in the next.",
      imageRef: 'lessons/pc-imparfait/act07.jpg',
    },
    sections: [],
    milestone: "Tu ne cherches plus « le temps du verbe » : tu cherches son rôle. EN: You stop asking which tense a verb takes and ask what it does.",
    estScreens: 26, restPoints: ['a7-paires'],
  },
  sections: [A7_LECTURE, A7_REGLE, A7_PAIRES, A7_CONSTRUIRE, A7_ECOUTE, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — DES INDICES, PAS DES RÈGLES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. An anecdote stuffed with cue words, where two of them behave the
 *  « wrong » way and the story still works. */
const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'L’anecdote de Malick',
  frSub: 'Beaucoup de petits mots de temps',
  setting: "À la pause, au bureau. Malick raconte une panne d'électricité.",
  bubbles: [
    { from: 'user', fr: 'Tous les jours, je prenais le même bus pour venir ici.', en: 'Every day I took the same bus to come here.' },
    { from: 'user', fr: 'Un jour, j’ai trouvé un portefeuille dans le métro.', en: 'One day I found a wallet in the metro.' },
    { from: 'coach', fr: 'Et tu as fait quoi.', en: 'And what did you do.' },
    { from: 'user', fr: 'Tout à coup, la salle est devenue silencieuse : tout le monde me regardait.', en: 'All of a sudden the room went silent: everyone was looking at me.' },
    { from: 'user', fr: 'Soudain, il faisait noir et on n’entendait plus rien.', en: 'Suddenly it was dark and you could not hear a thing.' },
    { from: 'coach', fr: 'Là, tu as mis soudain avec un imparfait.', en: 'There you used soudain with an imparfait.', warn: 'Et c’est correct' },
    { from: 'user', fr: 'Oui : soudain montre le changement, mais le noir, lui, durait.', en: 'Yes: soudain marks the change, but the darkness lasted.' },
  ],
  closing: { fr: 'Les mots de temps aident. Ils ne décident pas.', en: 'Time words help. They do not decide.' },
  audio: REC('rec-b1-03-malick'),
  say: REFRAME,
  terms: ['indice'],
};

/** NAME. */
const A8_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que fait un indice',
  hint: 'Trois cartes.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['indice'],
  cards: [
    {
      head: 'Le cas normal',
      label: 'soudain, un jour, une fois',
      fr: 'Soudain, le téléphone a sonné.',
      sub: '[soo-DEHⁿ luh tay-lay-FON a so-NAY]',
      body: "Ces mots annoncent souvent une action : quelque chose arrive à ce moment précis. EN: these usually announce an event.",
    },
    {
      head: "L'autre cas normal",
      label: "tous les jours, d'habitude, chaque été",
      fr: 'Tous les jours, je prenais le même bus.',
      sub: '[too lay ZHOOR zhuh pruh-neh luh mem BÜS]',
      body: "Ceux-là annoncent souvent le décor : une habitude, sans début ni fin. EN: these usually announce background.",
    },
    {
      head: 'Mais jamais une règle',
      label: 'le rôle décide',
      fr: "Soudain, il faisait noir et on n'entendait plus rien.",
      sub: '[soo-DEHⁿ eel fuh-zeh NWAR ay ohⁿ nahⁿ-tahⁿ-deh plü RYEHⁿ]',
      body: "Ici, soudain annonce un nouveau décor, et il dure. Chaque indice a son contre-exemple. EN: every cue has a counterexample.",
    },
  ],
};

/** NAME: the six cues, side by side with their counterexamples. */
const A8_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-tableau',
  layer: 'core',
  sheetId: 'sheet-indices',
  title: 'Six indices, six contre-exemples',
  cols: ['Indice', 'Souvent', 'Mais aussi'],
  rows: [
    { cells: ['soudain', "l'action", 'un décor qui change'], say: 'Soudain, le téléphone a sonné.', detail: { title: 'soudain', body: "Souvent une action. Mais « Soudain, il faisait noir » décrit un nouveau décor qui dure. EN: usually an event, sometimes a new lasting state.", say: "Soudain, il faisait noir et on n'entendait plus rien." } },
    { cells: ['tout à coup', "l'action", 'un sentiment nouveau'], say: 'Tout à coup, la porte a claqué.', detail: { title: 'tout à coup', body: "Comme soudain. Avec un sentiment, l'imparfait est normal. EN: same as soudain; feelings stay imparfait.", say: "Tout à coup, je n'avais plus envie de rire." } },
    { cells: ['un jour', "l'action", 'le début d’un décor'], say: "Un jour, j'ai trouvé un portefeuille dans le métro.", detail: { title: 'un jour', body: "Ouvre souvent une anecdote. « Un jour d'hiver, il faisait moins vingt » ouvre un décor. EN: opens an anecdote, or a scene.", say: "Un jour d'hiver, il faisait moins vingt, et tout le monde attendait le bus." } },
    { cells: ['tous les jours', 'le décor', 'une période fermée'], say: 'Tous les jours, je prenais le même bus.', detail: { title: 'tous les jours', body: "Une habitude. Mais « tous les jours pendant un mois » compte, donc passé composé. EN: a habit, unless a closed period counts it.", say: "Tous les jours pendant un mois, j'ai couru." } },
    { cells: ["d'habitude", 'le décor', 'une seule fois'], say: "D'habitude, il arrivait à huit heures.", detail: { title: "d'habitude", body: "Compare avec l'habitude. « Ce matin-là, j'ai fait comme d'habitude » raconte un seul matin. EN: it compares; the event can still be one morning.", say: "Ce matin-là, j'ai fait comme d'habitude : j'ai pris le bus." } },
    { cells: ['pendant que', 'le décor', 'deux tâches finies'], say: 'Pendant que je lisais, il regardait la télé.', detail: { title: 'pendant que', body: "Ouvre presque toujours le décor. Deux tâches finies en parallèle prennent le passé composé. EN: usually background, sometimes two closed tasks.", say: "Pendant que tu as fait les courses, j'ai rangé la cuisine." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indice'],
};

const A8_CONTRE: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-contre',
  layer: 'core',
  title: 'Les contre-exemples en entier',
  examples: [
    ex(E(261), 'soudain + décor : le noir dure'),
    ex(E(268), 'tout à coup + sentiment qui dure'),
    ex(E(263), 'un jour + décor : le froid et l’attente'),
    ex(E(265), 'tous les jours + un mois fermé'),
    ex(E(267), "comme d'habitude, mais un seul matin"),
    ex(E(269), 'pendant que + deux tâches finies'),
    ex(E(1108), 'à ce moment-là + décor'),
    ex('fr.sons.liaisons.048', 'tout à coup + action : le cas normal'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indice'],
};

/** BUILD, gated. */
const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le cas normal, puis l’exception',
  groups: [
    grp('Les habitudes', [
      it(E(264), 'tous les jours'),
      it(E(266), "d'habitude"),
      it(E(1110), 'chaque été'),
      it(E(1105), 'souvent, le dimanche'),
    ], chk(
      '« Chaque été, nous ... à la mer. » (partir)',
      ['sommes partis', 'partions'],
      1,
      "Une habitude répétée, sans bords : imparfait. EN: a repeated habit.",
    )),
    grp('Les moments', [
      it(E(260), 'soudain'),
      it(E(271), 'tout à coup'),
      it(E(1109), 'une fois'),
      it(E(1106), 'ce dimanche-là'),
    ], chk(
      '« Ce dimanche-là, nous ... chez ma tante. » (aller)',
      ['allions', 'sommes allés'],
      1,
      "« Ce dimanche-là » montre UN dimanche précis. EN: one specific Sunday.",
    )),
    ctl("L'exception", "« Tous les jours pendant un mois, j'... . » (courir)",
      ["ai couru", 'courais'], 0,
      "Le mois ferme la période, même avec « tous les jours ». EN: the month closes it."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indice', 'duree'],
};

/** TRAP, stepped and gated. The drill mixes normal cases with « possible ? »
 *  checks, because a counterexample is about what is POSSIBLE, not about the
 *  only answer (open question 8). */
const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six fausses règles',
  rule: {
    title: 'Le mot aide, le rôle décide',
    body: "Soudain, un jour, tous les jours, d'habitude : ces mots aident, mais ils ne choisissent pas le temps. Le rôle du verbe dans l'histoire décide. EN: time words are clues; the verb's job in the story decides.",
  },
  cards: [
    { promptLabel: 'soudain', promptSound: 'soudain, donc toujours une action', fr: "Soudain, il faisait noir et on n'entendait plus rien.", ipa: '/su.dɛ̃ il fə.zɛ nwaʁ e ɔ̃ nɑ̃.tɑ̃.dɛ ply ʁjɛ̃/', tip: "Ici, soudain montre un nouveau décor : le noir, le silence. Ça dure. EN: a sudden new state is still background." },
    { promptLabel: 'tout à coup', promptSound: 'tout à coup, donc toujours une action', fr: "Tout à coup, je n'avais plus envie de rire.", ipa: '/tu.ta.ku ʒə na.vɛ ply.zɑ̃.vi də ʁiʁ/', tip: "Un sentiment nouveau, qui dure. Le cas normal existe aussi : Tout à coup, la porte a claqué. EN: a feeling that lasts." },
    { promptLabel: 'un jour', promptSound: 'un jour, donc toujours une action', fr: "Un jour d'hiver, il faisait moins vingt, et tout le monde attendait le bus.", ipa: '/œ̃ ʒuʁ di.vɛʁ il fə.zɛ mwɛ̃ vɛ̃ e tu lə mɔ̃d a.tɑ̃.dɛ lə bys/', tip: "« Un jour d'hiver » ouvre le décor. L'action viendra après. EN: it can open a scene." },
    { promptLabel: 'tous les jours', promptSound: 'tous les jours, donc toujours le décor', fr: "Tous les jours pendant un mois, j'ai couru.", ipa: '/tu le ʒuʁ pɑ̃.dɑ̃.tœ̃ mwa ʒe ku.ʁy/', tip: "Un mois, fermé et fini : on compte. EN: a habit inside a closed period is counted." },
    { promptLabel: "d'habitude", promptSound: "d'habitude, donc toujours le décor", fr: "Ce matin-là, j'ai fait comme d'habitude : j'ai pris le bus.", ipa: '/sə ma.tɛ̃.la ʒe fɛ kɔm da.bi.tyd ʒe pʁi lə bys/', tip: "Un seul matin : une action. D'habitude compare, il ne décide pas. EN: one morning, one event." },
    { promptLabel: 'pendant que', promptSound: "pendant que, donc toujours l'imparfait", fr: "Pendant que tu as fait les courses, j'ai rangé la cuisine.", ipa: '/pɑ̃.dɑ̃ kə ty a fɛ le kuʁs ʒe ʁɑ̃.ʒe la kɥi.zin/', tip: "Deux tâches finies, en même temps : on les compte. EN: two completed tasks." },
  ],
  drill: [
    { promptSay: 'Soudain, le téléphone ... .', opts: ['sonnait', 'a sonné'], correct: 1 },
    { promptSay: 'Tous les jours, je ... le même bus.', opts: ['prenais', 'ai pris'], correct: 0 },
    { promptSay: '« Soudain, il faisait noir. » C’est possible ?', opts: ['oui', 'non'], correct: 0 },
    { promptSay: "Tous les jours pendant un mois, j'... .", opts: ['courais', 'ai couru'], correct: 1 },
    { promptSay: "Un jour, j'... un portefeuille dans le métro.", opts: ['trouvais', 'ai trouvé'], correct: 1 },
    { promptSay: "D'habitude, il ... à huit heures.", opts: ['arrivait', 'est arrivé'], correct: 0 },
    { promptSay: "« Pendant que tu as fait les courses, j'ai rangé la cuisine. » C’est possible ?", opts: ['non', 'oui'], correct: 1 },
    { promptSay: 'Chaque été, nous ... à la mer.', opts: ['partions', 'sommes partis'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot aide, le rôle décide' },
    { label: 'Six cartes', kind: 'cards', title: 'Chaque indice a son contre-exemple' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-03-indices'),
  say: REFRAME,
  terms: ['indice'],
};

const A8_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a8-flash',
  layer: 'core',
  title: 'Les huit petits mots',
  cards: [
    { front: 'suddenly', back: 'soudain', say: 'Soudain, le téléphone a sonné.' },
    { front: 'all of a sudden', back: 'tout à coup', say: 'Tout à coup, la porte a claqué.' },
    { front: 'one day', back: 'un jour', say: "Un jour, j'ai trouvé un portefeuille dans le métro." },
    { front: 'once', back: 'une fois', say: "Une fois, j'ai oublié mon passeport à la maison." },
    { front: 'every day', back: 'tous les jours', say: 'Tous les jours, je prenais le même bus.' },
    { front: 'usually', back: "d'habitude", say: "D'habitude, il arrivait à huit heures." },
    { front: 'every summer', back: 'chaque été', say: 'Chaque été, nous partions à la mer.' },
    { front: 'that day', back: 'ce jour-là', say: 'Ce dimanche-là, nous sommes allés chez ma tante.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['indice'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La vraie règle', 'Un mot comme soudain...', ['choisit le temps', 'aide, mais ne choisit pas'], 1,
    "Chaque indice a son contre-exemple. EN: every cue has a counterexample."),
  ctl('Une habitude', '« Chaque été, nous ... à la mer. »', ['partions', 'sommes partis'], 0,
    "Une habitude répétée. EN: a repeated habit."),
  ctl('Un mois', '« Tous les jours pendant un mois, j’... . » (courir)', ['courais', 'ai couru'], 1,
    "Le mois ferme la période. EN: the month closes it."),
], ['indice', 'duree']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Des indices, pas des règles',
    opener: {
      line: "Soudain, un jour, tous les jours : ces mots t'aident, mais ils ne choisissent jamais à ta place. EN: soudain, un jour, tous les jours help you, but they never choose for you.",
      imageRef: 'lessons/pc-imparfait/act08.jpg',
    },
    sections: [],
    milestone: "Tu connais six indices et, pour chacun, la phrase qui casse la fausse règle. EN: You know six cues and, for each, the sentence that breaks the false rule.",
    estScreens: 30, restPoints: ['a8-tableau', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_REGLE, A8_TABLEAU, A8_CONTRE, A8_CONSTRUIRE, A8_PIEGE, A8_FLASH, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — ANNOTER UN RÉCIT
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the long narrative, 197 words, read once with the questions held
 *  back (`questionsInModal`), then marked verb by verb in the next two
 *  missions. */
const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le tram de seize heures',
  frSub: 'Lis une fois, sans rien marquer',
  text: READING_TEXT,
  glossary: [
    { word: 'place Bellecour', en: 'Place Bellecour', note: 'Une grande place au centre de Lyon.' },
    { word: 'personne ne parlait', en: 'nobody was talking', note: 'personne ne... : nobody. Un décor : ça dure.' },
    { word: 'à moitié', en: 'half', note: 'Elle dormait à moitié : she was half asleep.' },
    { word: 'contrôleur', en: 'the ticket inspector', note: 'La personne qui vérifie les billets dans le tram.' },
    { word: "l'arrêt suivant", en: 'the next stop', note: 'Le prochain arrêt du tram.' },
    { word: 'le bouton rouge', en: 'the red button', note: "Le bouton d'arrêt d'urgence." },
    { word: 'au commissariat', en: 'to the police station', note: 'En France. Au Québec, on dit plutôt le poste de police.' },
  ],
  questions: [
    { q: 'Où commence vraiment l’histoire ?', a: "À « Le tram est arrivé ». Avant, tout est décor : le temps, la place, la fatigue d'Awa." },
    { q: 'Quelle phrase contient une coupure ?', a: "« Pendant qu'elle dormait à moitié, un homme s'est assis à côté d'elle. »" },
    { q: 'Pourquoi « il n’était plus dans sa poche » est-il à l’imparfait ?', a: "C'est la situation qu'Awa découvre : un état, pas une étape." },
    { q: '« L’homme courait déjà vers le pont. » Décor ou action ?', a: "Décor : il courait avant qu'elle descende, et il continue." },
    { q: 'Compte les verbes : combien font avancer l’histoire ?', a: 'Seize actions au passé composé, contre treize verbes de décor à l’imparfait.' },
  ],
  audio: REC('rec-b1-03-lecture'),
  say: REFRAME,
  terms: ['recit', 'decor', 'action'],
};

/** BUILD 1: mark the décor. */
const A9_DECOR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-decor',
  layer: 'core',
  size: 'lg',
  title: 'Marque le décor',
  groups: [
    grp('Le début du texte', [
      it(E(1130), "c'était : la date et la ville"),
      free('Il faisait froid et il pleuvait un peu.', 'It was cold and raining a little.', 'la météo'),
      it(E(1131), 'ce qu’Awa faisait'),
      free("Awa était fatiguée et elle avait froid aux mains.", 'Awa was tired and her hands were cold.', 'son état'),
    ], chk(
      'Ces quatre phrases racontent-elles quelque chose ?',
      ['Oui, le début de l’histoire', 'Non, elles posent le décor'],
      1,
      "Rien n'arrive encore. EN: nothing has happened yet.",
    )),
    grp('Le décor au milieu et à la fin', [
      free("Pendant qu'elle dormait à moitié", 'While she was half asleep', 'la bande coupée par l’homme'),
      it(E(1134), 'ce qu’elle découvre'),
      it(E(1135), 'il courait déjà'),
    ], chk(
      '« L’homme courait déjà vers le pont. » Quand a-t-il commencé à courir ?',
      ['au moment où elle descend', 'avant qu’elle descende'],
      1,
      "« déjà » + imparfait : ça avait commencé avant. EN: it had started earlier.",
    )),
    ctl('Le test', 'Pour repérer le décor, tu demandes...', ["Qu'est-ce qui se passait ?", "Qu'est-ce qui s'est passé ?"], 0,
      "La première question trouve les actions. EN: the other question finds the events."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'recit'],
};

/** BUILD 2: mark the actions, and find the one interruption. */
const A9_ACTION: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-action',
  layer: 'core',
  size: 'lg',
  title: 'Marque les actions',
  groups: [
    grp('Les étapes du tram', [
      it(E(1132), 'la première action'),
      free('Awa est montée, elle a trouvé une place et elle a fermé les yeux.', 'Awa got on, found a seat and closed her eyes.', 'trois étapes'),
      it(E(1137), 'le contrôleur monte et demande'),
    ], chk(
      'Dans « Awa est montée, elle a trouvé une place et elle a fermé les yeux », combien d’étapes ?',
      ['une', 'deux', 'trois'],
      2,
      "Trois passés composés, trois points sur la ligne. EN: three dots.",
    )),
    grp('La fin', [
      free("À l'arrêt suivant, l'homme est descendu très vite.", 'At the next stop the man got off very fast.', 'une étape'),
      free("Elle a crié, elle a appuyé sur le bouton rouge et elle est descendue.", 'She shouted, pressed the red button and got off.', 'trois étapes'),
      it(E(1136), 'les deux dernières étapes'),
    ], chk(
      '« elle est descendue » : pourquoi un e à la fin ?',
      ['parce que c’est un pluriel', 'parce que le sujet est féminin, avec être'],
      1,
      `Avec être, le participe s'accorde. EN: after être, the participle agrees.`,
    )),
    ctl('La coupure', 'Dans tout le texte, combien de coupures trouves-tu ?',
      ['aucune', 'une seule', 'trois'], 1,
      "Une seule : « Pendant qu'elle dormait à moitié, un homme s'est assis. » EN: exactly one."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['action', 'coupure'],
};

/** Three tricks for the moment of doubt. */
const A9_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a9-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Enlève la phrase. Si l’histoire avance quand même, c’était du décor.', why: "Le décor peut disparaître sans casser la suite des étapes. EN: cut it; if the story still moves, it was background." },
    { hack: 'Demande : est-ce que je peux mettre « à ce moment-là, il était en train de... » ?', why: "Si oui, c'est une action en cours, donc l'imparfait. EN: « was in the middle of » means imparfait." },
    { hack: 'Cherche une durée donnée : pendant, toute la journée, en deux heures.', why: "Une durée donnée et finie ferme la case : passé composé. EN: a stated, finished length closes it." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'duree'],
};

const A9_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a9-dictee',
  layer: 'core',
  title: 'Écris les phrases du texte',
  itemIds: dicteeFor(9),
  audio: AUDIO,
  say: REFRAME,
  terms: ['recit'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-film',
  title: 'Ce qu’il faut retenir avant d’écrire',
  points: [
    "Le décor d'abord : où, quand, quel temps il faisait, ce que tu faisais. EN: set the scene first.",
    "Les actions ensuite, dans l'ordre, au passé composé. EN: then the events, in order.",
    "Une coupure au moins : quand ou pendant que. EN: at least one interruption.",
    "Une fin : ce qui a changé après. EN: an ending: what changed afterwards.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recit', 'coupure'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le début', 'Dans un récit, les premières phrases servent souvent à...', ['poser le décor', 'raconter les étapes'], 0,
    "On plante la scène avant de la faire bouger. EN: the scene comes first."),
  ctl('Le test', 'Tu hésites sur un verbe. Que fais-tu ?', ['tu regardes sa terminaison', 'tu enlèves la phrase pour voir si l’histoire avance'], 1,
    "Si l'histoire avance sans elle, c'était du décor. EN: if the story still moves, it was background."),
  ctl('La coupure', 'Combien de coupures y a-t-il dans le texte du tram ?', ['trois', 'une seule', 'aucune'], 1,
    "Une seule, avec pendant que. EN: one, with pendant que."),
], ['recit', 'decor']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Annoter un récit',
    opener: {
      line: "Un long texte et deux couleurs dans la tête : tu marques chaque verbe avant de l'expliquer. EN: A long text and two colours in your head: mark every verb before you explain it.",
      imageRef: 'lessons/pc-imparfait/act09.jpg',
    },
    sections: [],
    milestone: "Tu sais lire un récit entier et dire, verbe par verbe, qui décrit et qui avance. EN: You can read a whole narrative and say, verb by verb, which describes and which advances.",
    estScreens: 26, restPoints: ['a9-action'],
  },
  sections: [A9_LECTURE, A9_DECOR, A9_ACTION, A9_HACKS, A9_DICTEE, A9_FOCUS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — RACONTER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as a model the learner will imitate in the
 *  task: décor, coupure, suite, fin, in 118 words. */
const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un récit modèle',
  frSub: 'La forme que tu vas écrire',
  text: "C'était un mardi de janvier, à Québec. Il faisait moins vingt et la route était couverte de glace. Je conduisais vers l'aéroport pour aller chercher ma sœur. La radio jouait, tout allait bien. Soudain, la voiture a fait un bruit bizarre. Pendant que je cherchais un endroit pour m'arrêter, le moteur s'est éteint. Je suis sortie, j'ai ouvert le capot, mais je ne comprenais rien. Alors j'ai appelé une dépanneuse et j'ai attendu quarante minutes dans le froid. Finalement, le garagiste a réparé la voiture en une heure, et je suis arrivée à l'aéroport juste à temps. Depuis ce jour, je vérifie toujours ma voiture avant l'hiver.",
  glossary: [
    { word: 'couverte de glace', en: 'covered in ice', note: 'La glace, c’est l’eau gelée sur la route.' },
    { word: 'un bruit bizarre', en: 'a strange noise', note: 'Un bruit qu’on n’entend pas normalement.' },
    { word: 'le capot', en: 'the bonnet, the hood', note: 'La partie qui couvre le moteur.' },
    { word: 'une dépanneuse', en: 'a tow truck', note: 'Le camion qui vient chercher une voiture en panne.' },
    { word: 'juste à temps', en: 'just in time', note: 'Pas en retard, mais presque.' },
  ],
  questions: [
    { q: 'Quelles phrases posent le décor ?', a: "Les quatre premières : la date, le froid, la route, le trajet, la radio. Tout est à l'imparfait." },
    { q: 'Où est la coupure ?', a: "« Pendant que je cherchais un endroit pour m'arrêter, le moteur s'est éteint. »" },
    { q: 'Combien d’actions après la panne ?', a: "Six : je suis sortie, j'ai ouvert, j'ai appelé, j'ai attendu, il a réparé, je suis arrivée." },
    { q: 'Comment se termine le récit ?', a: "Par une fin et une conséquence : « Depuis ce jour, je vérifie toujours ma voiture. »" },
    { q: 'Pourquoi « je suis sortie » et « je suis arrivée » prennent-ils un e ?', a: "La narratrice est une femme, et avec être le participe s'accorde avec le sujet." },
  ],
  audio: REC('rec-b1-03-modele'),
  say: REFRAME,
  terms: ['recit', 'coupure'],
};

/** NAME: how to plan one hundred words. */
const A10_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a10-plan',
  layer: 'core',
  title: 'Cinq étapes pour écrire ton récit',
  steps: [
    "1. Choisis ton imprévu : une panne, une rencontre, un oubli. EN: pick your unexpected event.",
    "2. Écris le décor en trois verbes à l'imparfait : quand, où, ce que tu faisais. EN: three imparfait verbs for the setting.",
    "3. Place la coupure avec quand ou pendant que. EN: put the interruption in.",
    "4. Enchaîne trois actions au passé composé, avec d'abord, puis, alors. EN: chain three events with connectors.",
    "5. Termine : ce qui a changé après, en une phrase. EN: finish with what changed.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recit', 'suite'],
};

const A10_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a10-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: 'Un message à un ami, après une journée difficile', fr: "Je rentrais du travail quand j'ai vu l'accident.", en: 'I was coming home from work when I saw the accident.' },
    { situation: "À l'assurance, pour expliquer un dégât", fr: 'Il pleuvait depuis deux jours, et le mur est tombé.', en: 'It had been raining for two days, and the wall came down.' },
    { situation: "À l'examen, pour raconter un souvenir", fr: "Chaque été, nous partions à la mer, et un jour nous avons raté le train.", en: 'Every summer we went to the seaside, and one day we missed the train.' },
    { situation: 'Au travail, pour expliquer un retard de projet', fr: "Nous avons attendu deux heures, alors nous avons tout reporté.", en: 'We waited two hours, so we postponed everything.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recit'],
};

/** CHOOSE, out loud: the insurance call, six turns, two alts each. */
const A10_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a10-scenario',
  layer: 'core',
  title: "Au téléphone avec l'assurance",
  setting: "Le lendemain du vol. Tu appelles ton assurance. L'agente est patiente, mais elle veut savoir dans quel ordre tout s'est passé.",
  turns: [
    {
      ai: "Bonjour, service des réclamations. Qu'est-ce qui s'est passé ?",
      en: 'Hello, claims department. What happened?',
      user: "On m'a volé mon vélo hier, devant un café.",
      userEn: 'My bike was stolen yesterday, outside a café. (The event: passé composé.)',
      alts: [
        { fr: "Quelqu'un a pris mon vélo hier après-midi.", en: 'Someone took my bike yesterday afternoon.' },
        { fr: 'Mon vélo a été volé hier, devant un café.', en: 'My bike was stolen yesterday, outside a café.' },
      ],
    },
    {
      ai: 'Il était attaché ?',
      en: 'Was it locked?',
      user: 'Oui, il était attaché devant la vitrine.',
      userEn: 'Yes, it was locked up in front of the window. (A state: imparfait.)',
      alts: [
        { fr: 'Oui, il était attaché avec un cadenas.', en: 'Yes, it was locked with a padlock.' },
        { fr: 'Oui, avec un cadenas, devant le café.', en: 'Yes, with a padlock, outside the café.' },
      ],
    },
    {
      ai: 'Et vous, vous faisiez quoi à ce moment-là ?',
      en: 'And what were you doing at that moment?',
      user: "Je lisais le journal quand quelqu'un a coupé le cadenas.",
      userEn: 'I was reading the paper when someone cut the lock. (Ongoing action, then the event that cut it.)',
      alts: [
        { fr: "Je lisais le journal à l'intérieur.", en: 'I was reading the paper inside.' },
        { fr: "J'étais dans le café, je lisais.", en: 'I was in the café, reading.' },
      ],
    },
    {
      ai: 'Quel temps faisait-il ?',
      en: 'What was the weather like?',
      user: 'Il pleuvait et la terrasse était vide.',
      userEn: 'It was raining and the terrace was empty. (The décor.)',
      alts: [
        { fr: "Il pleuvait, il n'y avait personne dehors.", en: 'It was raining, there was nobody outside.' },
        { fr: 'Il faisait gris et il pleuvait.', en: 'It was grey and raining.' },
      ],
    },
    {
      ai: "Qu'est-ce que vous avez fait ensuite ?",
      en: 'What did you do next?',
      user: "Je suis sorti, j'ai vu que le vélo n'était plus là, et j'ai appelé la police.",
      userEn: 'I went out, saw that the bike was gone, and called the police. (A chain of events, with one state inside it.)',
      alts: [
        { fr: "J'ai appelé la police tout de suite.", en: 'I called the police straight away.' },
        { fr: "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire.", en: 'First I called the police, then I filled in a form.' },
      ],
    },
    {
      ai: 'Vous utilisiez ce vélo souvent ?',
      en: 'Did you use this bike often?',
      user: "Je l'ai utilisé tous les jours pendant trois ans.",
      userEn: 'I used it every day for three years. (A closed period: passé composé.)',
      alts: [
        { fr: 'Oui, pendant trois ans, tous les jours.', en: 'Yes, for three years, every day.' },
        { fr: 'Oui, je le prenais tous les jours pour aller au travail.', en: 'Yes, I took it every day to go to work. (A habit, seen as décor: also right.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action', 'duree'],
};

/** THE GRADED TASK. The unit outcome is tested here: narrate a past episode
 *  separating setting, state, habit and completed event. */
const A10_TASK: TaskSection = {
  type: 'task',
  id: 'a10-mission',
  title: 'Raconte un imprévu',
  frSub: 'Mission écrite',
  brief: "Il t'est arrivé quelque chose d'imprévu : une panne, une rencontre ou un oubli. Ton amie Fatou, à Dakar, te demande ce qui s'est passé. Écris-lui un court message. Pose d'abord le décor, puis raconte les actions, jusqu'à la fin.",
  briefEn: 'Something unexpected happened to you: a breakdown, a chance meeting or something you forgot. Your friend Fatou in Dakar asks what happened. Write her a short message: set the scene first, then tell the events, through to the end.',
  produce: "Écris un récit de 80 à 120 mots au passé, avec au moins trois verbes à l'imparfait pour le décor, au moins trois verbes au passé composé pour les actions, une coupure avec quand ou pendant que, et une fin.",
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'temps',
        label: 'Le bon temps pour chaque rôle',
        maxPoints: 4,
        descriptors: [
          "4 : Chaque verbe a le temps de son rôle. Au moins trois imparfaits pour le décor, au moins trois passés composés pour les actions, et une coupure claire avec quand ou pendant que.",
          "3 : Presque tous les verbes ont le bon temps. Une ou deux hésitations, mais on comprend toujours ce qui se passait et ce qui s'est passé.",
          "2 : Le décor et les actions sont mélangés à plusieurs endroits, ou la coupure manque. Le lecteur hésite sur l'ordre des événements.",
          "1 : Presque tout est au même temps. On ne peut pas séparer le décor de l'action.",
        ],
      },
      {
        key: 'formes',
        label: 'Des formes justes',
        maxPoints: 3,
        descriptors: [
          "3 : Les imparfaits et les passés composés sont bien formés : le bon auxiliaire (avoir ou être) et l'accord du participe avec être.",
          '2 : Quelques fautes de forme (terminaison, auxiliaire ou accord), mais elles ne gênent pas la lecture.',
          '1 : Beaucoup de formes fausses. Le lecteur doit deviner le verbe ou le temps.',
        ],
      },
      {
        key: 'recit',
        label: 'Un récit qui se suit',
        maxPoints: 3,
        descriptors: [
          "3 : L'histoire a un début (le décor), un milieu (l'imprévu) et une fin. Des mots comme d'abord, puis, ensuite, alors, finalement guident le lecteur.",
          "2 : L'ordre est clair, mais les liens sont pauvres (seulement et, puis) ou une étape manque.",
          "1 : Des phrases isolées. Le lecteur ne suit pas l'histoire.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un imprévu (panne, rencontre ou oubli), entre 80 et 120 mots, une vraie fin.',
          "1 : Il manque un élément : pas d'imprévu, pas de fin, ou moins de 80 mots.",
        ],
      },
    ],
  },
  scaffold: ["C'était...", 'Il faisait...', 'Je ... quand...', 'Pendant que...', "D'abord,", 'Ensuite,', 'Soudain,', 'Finalement,'],
  modelAnswer: "Salut Fatou ! Samedi dernier, j'ai passé une drôle de journée. Il était sept heures du matin et il faisait encore nuit. Je conduisais vers Québec pour voir ma cousine. La route était vide et j'écoutais la radio. Soudain, la voiture a fait un bruit bizarre. Pendant que je cherchais un endroit pour m'arrêter, le moteur s'est éteint. Je suis sortie, j'ai ouvert le capot, mais je ne comprenais rien. Alors j'ai appelé une dépanneuse et j'ai attendu deux heures dans le froid. Finalement, un garagiste très gentil a réparé la voiture, et je suis arrivée chez ma cousine pour le dîner. Bises !",
  modelAnswerEn: "Hi Fatou! Last Saturday I had a strange day. It was seven in the morning and still dark. I was driving to Québec City to see my cousin. The road was empty and I was listening to the radio. Suddenly, the car made a strange noise. While I was looking for a place to stop, the engine died. I got out, opened the hood, but I didn't understand a thing. So I called a tow truck and waited two hours in the cold. In the end, a very kind mechanic fixed the car, and I got to my cousin's in time for dinner. Love!",
  watchFor: [
    {
      pattern: "The setting told in the passé composé: weather, time, states and ongoing actions before the event (il a fait nuit, la route a été vide, j'ai écouté la radio).",
      criterion: 'temps',
      feedback: "Ton décor avance comme une liste d'actions. Mets à l'imparfait ce qui se passait déjà : il faisait nuit, la route était vide.",
      ref: 'a2-trier',
    },
    {
      pattern: "One-off events in the imparfait, so the story never moves (le moteur s'éteignait, j'appelais une dépanneuse).",
      criterion: 'temps',
      feedback: "Ces verbes font avancer l'histoire : ce sont des actions, au passé composé.",
      ref: 'a5-sens',
    },
    {
      pattern: "The interruption with both verbs in one tense (je conduisais quand la voiture faisait un bruit; j'ai conduit quand la voiture a fait un bruit), or no quand / pendant que clause at all.",
      criterion: 'temps',
      feedback: "Dans la coupure, la bande est à l'imparfait et le point au passé composé : je conduisais quand la voiture a fait un bruit.",
      ref: 'a3-regle',
    },
    {
      pattern: "A stated, finished duration in the imparfait (j'attendais deux heures, j'habitais là pendant dix ans).",
      criterion: 'temps',
      feedback: "Deux heures, et c'est fini : une durée fermée prend le passé composé, même si elle est longue.",
      ref: 'a6-regle',
    },
    {
      pattern: "A cue word used as a trigger: imparfait forced after d'habitude or tous les jours for a one-off event, or every verb after soudain forced into the passé composé.",
      criterion: 'temps',
      feedback: "Soudain ou d'habitude sont des indices, pas des règles. Demande-toi : décor ou action ?",
      ref: 'a8-piege',
    },
    {
      pattern: "Two simultaneous backgrounds written as events (pendant que j'ai cuisiné, il a regardé la télé).",
      criterion: 'temps',
      feedback: "Si les deux duraient ensemble, les deux verbes restent à l'imparfait.",
      ref: 'a4-regle',
    },
    {
      pattern: "Wrong auxiliary: j'ai sorti (intransitive), j'ai arrivé, j'ai tombé, je m'ai levé.",
      criterion: 'formes',
      feedback: 'Sortir, arriver, tomber et les verbes pronominaux prennent être : je suis sortie, je me suis levée.',
      ref: 'a5-erreurs',
    },
    {
      pattern: 'Missing or wrong agreement after être, judged against the narrator the text itself sets up (a woman writing « je suis sorti », « nous sommes arrivé »).',
      criterion: 'formes',
      feedback: "Avec être, le participe s'accorde avec le sujet : je suis arrivée, nous sommes arrivés.",
      ref: 'a5-regle',
    },
    {
      pattern: "Imparfait form errors: wrong stem or ending (je conduiais, il faisais, j'étai).",
      criterion: 'formes',
      feedback: `Revois la forme de l'imparfait : « ${B101_REFRAME} »`,
      ref: 'a2-decor',
    },
    {
      pattern: 'A list of sentences with no connectors, or a story that stops at the problem with no ending.',
      criterion: 'recit',
      feedback: "Guide ton lecteur : d'abord, ensuite, alors, finalement. Et raconte comment ça s'est fini.",
      ref: 'a10-plan',
    },
    {
      pattern: 'Under 80 words, no unexpected event (panne, rencontre, oubli), or the text is not in the past.',
      criterion: 'tache',
      feedback: 'Relis la mission : un imprévu, au passé, de 80 à 120 mots, avec une fin.',
      ref: 'a10-lecture',
    },
  ],
  graderNotes: [
    'Judge tense by FUNCTION in this text, not by surface cues. A verb after « soudain » can legitimately be imparfait if it describes a new state that lasts (« Soudain, il faisait noir »); do not mark it wrong.',
    'Count imparfait and passé composé verbs separately for the checklist: at least 3 each. Auxiliary + participle is one passé composé verb.',
    'The interruption requirement is met by « quand » or « pendant que » with one ongoing imparfait and one passé composé event, in either clause order. « Quand » + two passés composés is a sequence, not an interruption.',
    'Word count EXCLUDES the greeting and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance (72-132) before criterion « tache » loses its point.',
    'Narrator gender is unknown: judge être agreement for internal consistency only.',
    'Do not score the meaning-shift verbs of b1.04 (savoir, connaître, vouloir, pouvoir, devoir, avoir) as errors in either tense.',
    'Accept regional vocabulary (dépanneuse / remorqueuse, char in Québec, taxi-brousse in West Africa).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A10_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a10-parler',
  layer: 'core',
  title: 'Dis ton récit à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    'fr.a2.ecole.045',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recit', 'action'],
};

const A10_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a10-cheat',
  layer: 'core',
  sheetId: 'sheet-recit',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le décor', v: "l'imparfait : ce qui se passait", say: 'Il pleuvait et la terrasse était vide.', detail: { title: 'Le décor', body: "Lieu, météo, état, habitude, action en cours. EN: place, weather, state, habit, ongoing action.", say: 'Il neigeait et les rues étaient vides.' } },
    { k: "l'action", v: "le passé composé : ce qui s'est passé", say: "On m'a volé mon vélo.", detail: { title: "L'action", body: "Chaque étape finie qui change la situation. EN: each finished step.", say: 'Le train est parti à huit heures pile.' } },
    { k: 'la coupure', v: 'imparfait + quand + passé composé', say: 'Je dormais quand le téléphone a sonné.', detail: { title: 'La coupure', body: "Une bande et un point. pendant que ouvre souvent la bande. EN: a band and a dot.", say: 'Pendant que je cuisinais, il est arrivé.' } },
    { k: 'en même temps', v: 'deux imparfaits', say: 'Pendant que je lisais, il regardait la télé.', detail: { title: 'Deux décors', body: "Deux bandes, aucun point : rien n'arrive. EN: two bands, no dot.", say: 'Ma mère cuisinait pendant que mon père écoutait la radio.' } },
    { k: 'la suite', v: 'des passés composés, dans l’ordre', say: 'Je me suis levé, je me suis habillé et je suis sorti.', detail: { title: 'La suite', body: "d'abord, ensuite, puis, alors, finalement. EN: connectors carry the chain.", say: "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire." } },
    { k: 'durée fermée', v: 'le passé composé, même longue', say: "J'ai habité à Lyon pendant dix ans.", detail: { title: 'Durée fermée', body: "pendant, toute la journée, en deux heures. EN: stated and over.", say: 'Il a plu toute la journée.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recit', 'coupure', 'duree'],
};

const A10_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a10-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu sais séparer le décor et l'action, couper une action en cours, enchaîner des étapes et fermer une durée. Le piège qui reste, c'est l'indice pris pour une règle : soudain ne force rien. Avant l'examen, relis ta mission écrite. Souligne chaque verbe et écris à côté : décor ou action. Si les deux listes racontent la même histoire que ton texte, la leçon a marché. EN: Underline every verb in your task and label it; if the labels tell your story, the lesson landed.",
  stats: [
    { k: 'Le décor', v: "l'imparfait : ce qui se passait" },
    { k: "L'action", v: "le passé composé : ce qui s'est passé" },
    { k: 'La coupure', v: 'une bande, un point' },
    { k: 'Durée fermée', v: 'passé composé, même longue' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), TEN rounds of eight, one per act
 *  from act 1 to act 9 plus an integration round. Each round's target is a
 *  distinct errorTrigger, so a failed round fires that round's own drill.
 *
 *  `fold()` strips commas and accents, so no answer depends on one. Every
 *  typeIn and errorSpot carries `prompt`, every listenChoose carries `say`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });
const CONJ = (verbe: string, phrase: string) => `${verbe} · ${phrase}`;

const A10_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a10-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-decor', label: 'Le décor', targets: ['tout-au-pc'],
      questions: [
        mc('Complète : « Il ... et la terrasse était vide. » (pleuvoir)', ['a plu', 'pleut', 'pleuvait'], 2, "Rien n'arrive : c'est le décor. EN: nothing happens here.", 'a2-decor'),
        tI('Mets le verbe au bon temps et écris la phrase.', 'Mon vélo (être) attaché devant le café.', 'Mon vélo était attaché devant le café.', "Un état, pas une étape. EN: a state.", 'a1-reperer'),
        eS('Quand nous sommes arrivés, la terrasse a été déjà pleine.', 'Quand nous sommes arrivés, la terrasse était déjà pleine.', "La terrasse était pleine avant l'arrivée. EN: it was full beforehand.", 'a2-test'),
        lC("Écoute. Cette phrase fait-elle avancer l'histoire ?", 'Il neigeait et les rues étaient vides.', ["Non, c'est le décor.", "Oui, c'est une action."], 0, 'Deux imparfaits, deux bandes. EN: two backgrounds.', 'a2-trier'),
        mc("Dans un rapport de police, à quoi sert le décor ?", ['à faire joli', 'à donner la date', "à situer l'action"], 2, "Il dit ce qui était vrai autour de l'action. EN: it places the event.", 'a1-pourquoi'),
        tI('Mets les deux verbes au bon temps.', 'Il (faire) gris et la rue (être) calme.', 'Il faisait gris et la rue était calme.', 'Deux descriptions. EN: two descriptions.', 'a1-lecture'),
        mc('« Je ne comprenais pas ce qui se passait. » Pourquoi l’imparfait ?', ["c'est une étape de l'histoire", "c'est ce qu'il avait dans la tête pendant la scène"], 1, "Un état intérieur, pas une action. EN: an inner state.", 'a1-lecture'),
        eS('La salle a été pleine et tout le monde a parlé.', 'La salle était pleine et tout le monde parlait.', "Tu peins la salle, tu ne comptes pas des étapes. EN: painting, not counting.", 'a2-decor'),
      ],
    },
    {
      id: 'r2-action', label: "L'action", targets: ['tout-a-limparfait'],
      questions: [
        tI('Mets le verbe au bon temps.', 'Le train (partir) à huit heures pile.', 'Le train est parti à huit heures pile.', 'Un moment précis. EN: a precise moment.', 'a2-action'),
        mc('« Il est entré, il a regardé autour de lui et il s’est assis. » Combien d’étapes ?', ['une', 'deux', 'trois'], 2, 'Trois passés composés, trois points. EN: three dots.', 'a5-regle'),
        eS('Le voisin frappait à la porte, alors je me suis levé.', 'Le voisin a frappé à la porte, alors je me suis levé.', "Le coup à la porte est l'événement qui déclenche. EN: the knock is the event.", 'a2-trier'),
        lC('Écoute. Est-ce une étape de l’histoire ?', "J'ai retrouvé mes clés sous le canapé.", ['Oui', 'Non'], 0, 'Passé composé : une action finie. EN: a finished event.', 'a2-action'),
        tI('Mets le verbe au bon temps.', 'Nous (rentrer) à pied.', 'Nous sommes rentrés à pied.', "Avec être, et l'accord au pluriel. EN: être plus agreement.", 'a2-action'),
        mc('Quelle phrase fait avancer l’histoire ?', ['Le voisin a frappé à la porte.', 'La salle était pleine.'], 0, "Après elle, la situation a changé. EN: afterwards things are different.", 'a2-sens'),
        mc('« Quand je suis arrivé à la fête, tout le monde ... . » La fête avait commencé.', ['a dansé', 'dansait'], 1, "La danse continue quand tu arrives. EN: already going on.", 'a2-sens'),
        eS('Hier, je passais mon examen de français.', 'Hier, j’ai passé mon examen de français.', "Un examen d'hier : une étape finie. EN: a finished step.", 'a2-sens'),
      ],
    },
    {
      id: 'r3-coupure', label: 'La coupure', targets: ['coupure-plate'],
      questions: [
        tI('Mets les deux verbes au bon temps.', 'Je (dormir) quand le téléphone (sonner).', 'Je dormais quand le téléphone a sonné.', 'La bande, puis le point. EN: band, then dot.', 'a3-regle'),
        eS("Nous mangions quand la lumière s'éteignait.", "Nous mangions quand la lumière s'est éteinte.", "La lumière s'éteint à un moment précis. EN: the light goes out at one moment.", 'a3-piege'),
        mc('« Pendant que je cuisinais, il ... . »', ['arrivait', 'arrive', 'est arrivé'], 2, "Il arrive pendant le décor. EN: he arrives during the background.", 'a3-pendant'),
        lC('Écoute. Est-ce que je dormais quand le téléphone a sonné ?', "Quand le téléphone a sonné, j'ai répondu.", ["Non, ce sont deux actions", 'Oui'], 0, 'Deux passés composés : une suite. EN: two events in a row.', 'a3-regle'),
        tI('Mets les deux verbes au bon temps.', 'Elle (traverser) la rue quand elle (voir) l’accident.', "Elle traversait la rue quand elle a vu l'accident.", "Elle était au milieu de la rue. EN: she was mid-street.", 'a3-regle'),
        mc('« Les enfants dormaient quand nous sommes arrivés. » Ils se sont endormis à notre arrivée ?', ['Oui', 'Non, ils dormaient déjà'], 1, "L'imparfait dit que ça avait commencé avant. EN: it had started earlier.", 'a3-ecoute'),
        eS("Pendant que j'ai cuisiné, il est arrivé.", 'Pendant que je cuisinais, il est arrivé.', 'pendant que ouvre le décor. EN: pendant que opens the background.', 'a3-pendant'),
        tI('Mets les deux verbes au bon temps.', 'Il (conduire) quand sa voiture (tomber) en panne.', 'Il conduisait quand sa voiture est tombée en panne.', "Le trajet était en cours ; la panne le coupe. EN: the drive was under way.", 'a3-construire'),
      ],
    },
    {
      id: 'r4-ensemble', label: 'Deux décors', targets: ['deux-decors'],
      questions: [
        tI('Mets les deux verbes au bon temps.', 'Pendant que je (lire), il (regarder) la télé.', 'Pendant que je lisais, il regardait la télé.', "Deux bandes, aucun point. EN: two bands, no dot.", 'a4-regle'),
        mc('Deux imparfaits avec pendant que, ça veut dire...', ['les deux duraient ensemble', "l'un a coupé l'autre"], 0, 'Personne ne coupe personne. EN: neither cuts the other.', 'a4-check'),
        eS('Il a neigé et les rues ont été vides.', 'Il neigeait et les rues étaient vides.', "Un tableau, pas une suite. EN: a picture, not a sequence.", 'a4-erreurs'),
        lC('Écoute. Quelqu’un coupe-t-il l’autre ?', 'Les enfants jouaient pendant que les parents parlaient.', ['Oui', 'Non'], 1, 'Deux activités en parallèle. EN: two parallel activities.', 'a4-exemples'),
        tI('Mets les deux verbes au bon temps.', 'Ma mère (cuisiner) pendant que mon père (écouter) la radio.', 'Ma mère cuisinait pendant que mon père écoutait la radio.', 'Deux décors dans la même maison. EN: two backgrounds.', 'a4-construire'),
        mc('Dans le texte du dimanche, combien de verbes font avancer l’histoire ?', ['tous', 'la moitié', 'un seul'], 2, "Un seul, et il dit que rien n'est arrivé. EN: one, and it says nothing happened.", 'a4-lecture'),
        eS('Le bébé a dormi et la maison était calme.', 'Le bébé dormait et la maison était calme.', "Comme décor, l'imparfait. EN: as background, imparfait.", 'a4-erreurs'),
        mc('« Pendant que je cuisinais, il ... . » Tu veux dire qu’il arrive à ce moment-là.', ['arrivait', 'est arrivé'], 1, 'Là, quelque chose se passe. EN: now something happens.', 'a4-construire'),
      ],
    },
    {
      id: 'r5-suite', label: 'La suite', targets: ['suite-imparfait'],
      questions: [
        tI('Mets les trois verbes au bon temps.', 'Ce matin-là, je (se lever), je (s’habiller) et je (sortir).', 'Ce matin-là, je me suis levé, je me suis habillé et je suis sorti.', 'Trois étapes, un seul matin. EN: three steps, one morning.', 'a5-regle'),
        mc("d'abord, ensuite, puis, finalement servent à...", ["montrer l'ordre des étapes", 'changer le temps du verbe'], 0, 'Ils guident le lecteur. EN: they guide the reader.', 'a5-connecteurs'),
        eS("D'abord, j'ai appelé la police, puis je remplissais un formulaire.", "D'abord, j'ai appelé la police, puis j'ai rempli un formulaire.", "Après puis, on attend l'étape suivante. EN: after puis comes the next step.", 'a5-erreurs'),
        lC('Écoute. Combien d’étapes ?', "Elle s'est levée, elle a pris un café et elle est partie.", ['deux', 'trois'], 1, 'Trois passés composés. EN: three events.', 'a5-construire'),
        eS('Elle s’est levé, elle a pris un café et elle est parti.', "Elle s'est levée, elle a pris un café et elle est partie.", `Avec être, le participe s'accorde. EN: après être, agreement.`, 'a5-erreurs'),
        mc('« Nous avons fait les courses ensemble, ensuite nous avons cuisiné. » Que fait ensuite ?', ["il montre l'ordre", 'il change le temps'], 0, 'Le temps ne bouge pas. EN: the tense does not move.', 'a5-construire'),
        tI('Mets le verbe au bon temps.', 'Finalement, nous (prendre) un taxi.', 'Finalement, nous avons pris un taxi.', 'La dernière étape. EN: the last step.', 'a5-connecteurs'),
        mc('« À cette époque, je ... le bus tous les matins. »', ['ai pris', 'prenais'], 1, "Une habitude : le décor. EN: a habit.", 'a5-sens'),
      ],
    },
    {
      id: 'r6-duree', label: 'Long, mais fermé', targets: ['duree-longue'],
      questions: [
        tI('Mets le verbe au bon temps.', "J'(habiter) à Lyon pendant dix ans.", "J'ai habité à Lyon pendant dix ans.", 'Dix ans, donnés et finis. EN: stated and finished.', 'a6-regle'),
        mc("« J'... à Lyon quand j'ai rencontré Claire. »", ['ai habité', 'habite', 'habitais'], 2, "Lyon est le décor de la rencontre. EN: Lyon frames the meeting.", 'a6-regle'),
        eS("Nous attendions deux heures à l'urgence.", "Nous avons attendu deux heures à l'urgence.", 'Deux heures comptées, et fini. EN: two counted hours.', 'a6-piege'),
        lC('Écoute. Elle travaille encore dans ce bureau ?', "J'ai travaillé dans ce bureau pendant cinq ans.", ["Non, c'est fini", 'Oui'], 0, 'Une période fermée. EN: a closed period.', 'a6-ecoute'),
        tI('Mets le verbe au bon temps.', 'Il (neiger) toute la nuit.', 'Il a neigé toute la nuit.', '« Toute la nuit » ferme la durée. EN: all night closes it.', 'a6-construire'),
        mc('« La semaine dernière, il a fait très froid. » Pourquoi le passé composé ?', ['la météo prend toujours ce temps', 'la semaine est fermée et finie'], 1, "La durée est fermée. EN: the stretch is closed.", 'a6-marqueurs'),
        mc('Avec « à cette époque », tu utilises...', ["l'imparfait", 'le passé composé'], 0, "Une époque sert de décor. EN: an era is background.", 'a6-marqueurs'),
        eS('Pendant quatre ans, je vivais à Abidjan.', "Pendant quatre ans, j'ai vécu à Abidjan.", 'pendant + durée ferme la période. EN: pendant closes it.', 'a6-piege'),
      ],
    },
    {
      id: 'r7-verbe', label: 'Un verbe, deux temps', targets: ['un-seul-temps'],
      questions: [
        tI('Mets les deux verbes au bon temps.', 'Il (pleuvoir) quand je suis parti, et il (pleuvoir) jusqu’au soir.', "Il pleuvait quand je suis parti, et il a plu jusqu'au soir.", "Le même verbe, deux rôles. EN: one verb, two roles.", 'a7-regle'),
        mc('Devant un verbe, tu demandes...', ['ce verbe fait quoi dans mon histoire ?', 'ce verbe va avec quel temps ?'], 0, 'Le rôle décide. EN: the role decides.', 'a7-check'),
        eS('Elle lisait tout le roman en une nuit.', 'Elle a lu tout le roman en une nuit.', "« En une nuit » ferme la lecture. EN: closed by « en une nuit ».", 'a7-erreurs'),
        lC('Écoute. A-t-elle fini le roman ?', 'Elle lisait un roman dans le train.', ['Oui', 'On ne sait pas'], 1, "L'imparfait ne dit rien de la fin. EN: the imparfait says nothing about finishing.", 'a7-ecoute'),
        tI('Mets le verbe au bon temps.', 'Les enfants (jouer) une heure, puis ils sont rentrés.', 'Les enfants ont joué une heure, puis ils sont rentrés.', 'Une heure comptée, puis la suite. EN: one counted hour.', 'a7-construire'),
        mc('« Nous habitions à Sherbrooke. » Depuis combien de temps ?', ['dix ans', 'la phrase ne le dit pas'], 1, "Aucune durée n'est donnée. EN: no length is given.", 'a7-paires'),
        eS('Il a plu quand nous sommes sortis.', 'Il pleuvait quand nous sommes sortis.', "Sinon, la pluie devient une deuxième étape. EN: otherwise the rain becomes a second event.", 'a7-erreurs'),
        mc('Le même verbe peut-il être décor puis action dans une phrase ?', ['Oui', 'Non'], 0, "« Je marchais seul, puis nous avons marché ensemble. » EN: yes, and the lesson shows it.", 'a7-paires'),
      ],
    },
    {
      id: 'r8-indices', label: 'Des indices', targets: ['indice-regle'],
      questions: [
        mc('« Soudain, il faisait noir. » Cette phrase est...', ['impossible : soudain demande le passé composé', 'possible : elle décrit le nouveau décor'], 1, "Soudain annonce souvent une action, pas toujours. EN: not always.", 'a8-regle'),
        tI('Mets le verbe au bon temps.', "Tous les jours pendant un mois, je (courir).", "Tous les jours pendant un mois, j'ai couru.", 'Le mois ferme la période. EN: the month closes it.', 'a8-piege'),
        mc('« Tous les jours, je ... le même bus. »', ['prenais', 'ai pris'], 0, 'Une habitude sans limite donnée. EN: a habit.', 'a8-construire'),
        eS("Ce matin-là, je prenais le bus, puis j'ai marché jusqu'au bureau.", "Ce matin-là, j'ai pris le bus, puis j'ai marché jusqu'au bureau.", 'puis enchaîne deux étapes. EN: puis chains two steps.', 'a8-piege'),
        lC('Écoute. Il se passe quelque chose de nouveau ?', "Un jour d'hiver, il faisait moins vingt, et tout le monde attendait le bus.", ["Non, c'est le décor", 'Oui, une action'], 0, "« Un jour » ouvre le décor ici. EN: it opens a scene.", 'a8-tableau'),
        mc("Qu'est-ce qui décide le temps du verbe ?", ['la longueur de la phrase', 'un mot comme soudain', "le rôle du verbe dans l'histoire"], 2, 'Les mots de temps sont des indices. EN: time words are clues.', 'a8-piege'),
        tI('Mets le verbe au bon temps.', 'Chaque été, nous (partir) à la mer.', 'Chaque été, nous partions à la mer.', 'Une habitude répétée. EN: a repeated habit.', 'a8-construire'),
        mc('« Ce dimanche-là, nous ... chez ma tante. »', ['sommes allés', 'allions'], 0, 'Un dimanche précis. EN: one specific Sunday.', 'a8-construire'),
      ],
    },
    {
      id: 'r9-annoter', label: 'Annoter', targets: ['decor-invisible'],
      questions: [
        mc('Dans le texte du tram, où commence l’histoire ?', ['à « Il faisait froid »', 'à « Le tram est arrivé »'], 1, 'Avant, tout est décor. EN: everything before is background.', 'a9-lecture'),
        mc('« L’homme courait déjà vers le pont. » Décor ou action ?', ['décor', 'action'], 0, "Il courait avant qu'elle descende. EN: he was already running.", 'a9-decor'),
        tI('Mets le verbe au bon temps.', 'Son téléphone (ne plus être) dans sa poche.', "Son téléphone n'était plus dans sa poche.", "La situation qu'elle découvre. EN: the state she finds.", 'a9-decor'),
        eS("Pendant qu'elle a dormi à moitié, un homme s'est assis à côté d'elle.", "Pendant qu'elle dormait à moitié, un homme s'est assis à côté d'elle.", 'La seule coupure du texte. EN: the one interruption.', 'a9-action'),
        lC('Écoute. Combien d’étapes ?', 'Awa est montée, elle a trouvé une place et elle a fermé les yeux.', ['deux', 'trois'], 1, 'Trois passés composés. EN: three events.', 'a9-action'),
        mc('Tu hésites sur un verbe. Quelle astuce marche ?', ['regarder sa terminaison', 'enlever la phrase et voir si l’histoire avance'], 1, "Si elle avance, c'était du décor. EN: if it still moves, it was background.", 'a9-hacks'),
        tI('Mets le verbe au bon temps.', 'Le contrôleur (monter) et il (demander) les billets.', 'Le contrôleur est monté et il a demandé les billets.', 'Deux étapes. EN: two steps.', 'a9-action'),
        mc('Combien de coupures dans le texte du tram ?', ['aucune', 'trois', 'une seule'], 2, 'Une seule, avec pendant que. EN: one, with pendant que.', 'a9-check'),
      ],
    },
    {
      id: 'r10-recit', label: 'Tout ensemble', targets: ['recit-plat'],
      questions: [
        tI('Mets les deux verbes au bon temps.', 'Je (conduire) vers Québec quand la voiture (faire) un bruit bizarre.', 'Je conduisais vers Québec quand la voiture a fait un bruit bizarre.', 'La coupure du récit modèle. EN: the model narrative’s interruption.', 'a10-lecture'),
        mc('Dans ton récit, par quoi commences-tu ?', ['par la première action', 'par le décor'], 1, 'On plante la scène avant de la faire bouger. EN: set the scene first.', 'a10-plan'),
        eS("Pendant que je cherchais un endroit, le moteur s'éteignait.", "Pendant que je cherchais un endroit, le moteur s'est éteint.", "Le moteur s'arrête à un moment précis. EN: the engine dies at one moment.", 'a10-lecture'),
        lC('Écoute. Est-ce une fin de récit ?', "Heureusement, tout s'est bien terminé.", ['Oui', 'Non'], 0, 'Une vraie fin, avec une conséquence. EN: a real ending.', 'a10-plan'),
        tI('Mets les verbes au bon temps.', "Alors j'(appeler) une dépanneuse et j'(attendre) deux heures.", "Alors j'ai appelé une dépanneuse et j'ai attendu deux heures.", 'Deux étapes, et une durée fermée. EN: two steps, one closed duration.', 'a10-lecture'),
        mc('Combien de verbes à l’imparfait doit contenir ta mission ?', ['aucun', 'tous', 'au moins trois'], 2, 'Trois pour le décor, trois pour les actions. EN: three each, at least.', 'a10-plan'),
        eS('Je suis sorti, j’ai ouvert le capot, mais je n’ai rien compris, et la route était couverte de glace, alors j’ai appelé.', 'Je suis sortie, j’ai ouvert le capot, mais je ne comprenais rien, et la route était couverte de glace, alors j’ai appelé.', "« Je ne comprenais rien » est un état, pas une étape. EN: not understanding is a state.", 'a10-lecture'),
        mc('Ton récit se termine par « et la dépanneuse est arrivée ». Que manque-t-il ?', ['rien', 'une fin : ce qui a changé après'], 1, "Une vraie fin ferme l'histoire. EN: an ending closes the story.", 'a10-plan'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A10_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a10-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'le décor', back: "l'imparfait", say: 'Il pleuvait et la terrasse était vide.' },
    { front: "l'action", back: 'le passé composé', say: "On m'a volé mon vélo." },
    { front: 'la coupure', back: 'imparfait + passé composé', say: 'Je dormais quand le téléphone a sonné.' },
    { front: 'deux décors', back: 'deux imparfaits', say: 'Pendant que je lisais, il regardait la télé.' },
    { front: 'une suite', back: 'des passés composés', say: 'Je me suis levé, je me suis habillé et je suis sorti.' },
    { front: 'une durée fermée', back: 'le passé composé', say: "J'ai habité à Lyon pendant dix ans." },
    { front: 'un verbe, deux rôles', back: 'il pleuvait · il a plu', say: "Il pleuvait quand je suis parti, et il a plu jusqu'au soir." },
    { front: 'soudain', back: 'un indice, pas une règle', say: "Soudain, il faisait noir et on n'entendait plus rien." },
    { front: 'une fin', back: 'ce qui a changé après', say: "Heureusement, tout s'est bien terminé." },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A10_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a10-roundup',
  layer: 'core',
  title: 'Le film, en résumé',
  body: `${REFRAME} Tu choisis le temps par le rôle du verbe : ce qui se passait, ou ce qui s'est passé. La prochaine leçon garde ce film et ajoute des verbes qui changent de sens selon le temps, comme savoir ou connaître. EN: Next lesson: verbs whose meaning shifts with the tense.`,
  points: [
    "Le décor : l'imparfait. L'action : le passé composé.",
    "La coupure : une bande à l'imparfait, un point au passé composé.",
    'Une durée fermée prend le passé composé, même longue.',
    "Soudain, tous les jours, d'habitude : des indices, pas des règles.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['decor', 'action', 'indice'],
};

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Raconter',
    opener: {
      line: "À toi de raconter : ton décor, ton imprévu, tes actions, et une vraie fin. EN: Your turn to tell it: your setting, your surprise, your events, and a real ending.",
      imageRef: 'lessons/pc-imparfait/act10.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton propre récit et passé l'examen : quatre-vingts questions, dix rounds. EN: You wrote your own narrative and sat the exam: eighty questions, ten rounds.",
    estScreens: 42, restPoints: ['a10-scenario', 'a10-progress'],
  },
  sections: [
    A10_LECTURE, A10_PLAN, A10_USAGES, A10_SCENARIO, A10_TASK, A10_PARLER,
    A10_CHEAT, A10_PROGRESS, A10_QUIZ, A10_REVIEW, A10_ROUNDUP,
  ],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the first resolving target
 *  of exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-decor', title: 'Décor ou action', format: 'sort' as const, coach: "Deux piles. Demande-toi : ça se passait déjà, ou ça s'est passé ? EN: sort by what the verb does.", buckets: ['le décor', "l'action"], items: [E(203), E(205), E(1011), E(201), E(1016), E(1020)], audio: AUDIO },
  { id: 'd-action', title: 'Fais avancer le film', format: 'mcq' as const, coach: "Si la situation change après la phrase, c'est une action. EN: if things change, it is an event.", q: 'Le voisin ... à la porte, alors je me suis levé.', opts: ['frappait', 'a frappé'], correct: 1, why: "Le coup à la porte déclenche la suite. EN: the knock triggers the next step.", items: [E(1016), E(1017), E(1018), E(1019), E(1020)], audio: AUDIO },
  { id: 'd-coupure', title: 'Une bande, un point', format: 'mcq' as const, coach: 'La chose en cours est à l’imparfait ; celle qui arrive est au passé composé. EN: ongoing imparfait, arriving event passé composé.', q: 'Je dormais quand le téléphone ... .', opts: ['sonnait', 'a sonné'], correct: 1, why: 'La sonnerie arrive d’un coup. EN: the ring happens at once.', items: [E(210), E(211), E(1030), E(1031), E(1036)], audio: AUDIO },
  { id: 'd-ensemble', title: 'Deux bandes', format: 'sort' as const, coach: 'Une pile pour « les deux duraient », une pile pour « quelque chose est arrivé ». EN: sort by whether anything happened.', buckets: ['les deux duraient', 'quelque chose est arrivé'], items: [E(220), E(1045), E(1047), E(211), E(1034), E(1032)], audio: AUDIO },
  { id: 'd-suite', title: 'Dans l’ordre', format: 'flashcard' as const, coach: 'Lis la suite et dis-la à voix haute, avec d’abord, puis, finalement. EN: read each chain aloud with its connectors.', items: [E(230), E(231), E(232), E(1055), E(1057), E(1058)], audio: AUDIO },
  { id: 'd-duree', title: 'Fermée ou ouverte', format: 'mcq' as const, coach: "Regarde s'il y a une durée donnée et finie. EN: look for a stated, finished length.", q: "J'... à Lyon pendant dix ans.", opts: ['habitais', 'ai habité'], correct: 1, why: 'Dix ans, donnés et finis. EN: stated and over.', items: [E(240), E(241), E(1070), E(1075), E(1077), 'fr.a2.ecole.045'], audio: AUDIO },
  { id: 'd-meme', title: 'Le même verbe', format: 'sort' as const, coach: 'Le verbe ne change pas ; son rôle change. Trie les paires. EN: same verb, two roles.', buckets: ['décor', 'action'], items: [E(1090), E(1091), E(1092), E(1093), E(1094), E(1095)], audio: AUDIO },
  { id: 'd-indice', title: 'Indice et contre-exemple', format: 'flashcard' as const, coach: 'Chaque indice a un cas normal et un contre-exemple. Lis les deux. EN: each cue has both.', items: [E(260), E(261), E(271), E(268), E(264), E(265), E(266), E(267)], audio: AUDIO },
  { id: 'd-annoter', title: 'Souligne les verbes', format: 'sort' as const, coach: "Deux piles, comme dans le texte du tram : qui décrit, qui avance. EN: who describes, who advances.", buckets: ['décor', 'action'], items: [E(1130), E(1131), E(1132), E(1134), E(1135), E(1137)], audio: AUDIO },
  { id: 'd-recit', title: 'Un récit complet', format: 'mcq' as const, coach: 'Décor, coupure, suite, fin. Vérifie les quatre. EN: check all four parts.', q: 'Ton récit se termine par « et la dépanneuse est arrivée ». Que manque-t-il ?', opts: ['rien', 'une fin : ce qui a changé après'], correct: 1, why: "Une vraie fin ferme l'histoire. EN: a real ending closes it.", items: [E(1151), E(1152), E(1153), E(1155), E(1156), E(1157)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'tout-au-pc', description: 'Tells the whole episode in the passé composé, so the setting, states and habits become a list of steps.', detectOn: ['a1-scene', 'a1-reperer', 'a2-trier', 'a10-mission'], drill: 'd-decor', retest: 'd-decor' },
  { id: 'tout-a-limparfait', description: 'Puts one-off events in the imparfait, so the story never moves forward.', detectOn: ['a2-sens', 'a2-action', 'a5-sens', 'a10-mission'], drill: 'd-action', retest: 'd-action' },
  { id: 'coupure-plate', description: 'Writes an interruption with both verbs in the same tense, which reads as two backgrounds or as a sequence.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a10-mission'], drill: 'd-coupure', retest: 'd-coupure' },
  { id: 'deux-decors', description: 'Turns two simultaneous backgrounds into two completed events with pendant que.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check'], drill: 'd-ensemble', retest: 'd-ensemble' },
  { id: 'suite-imparfait', description: 'Uses the imparfait for a chain of one-off steps, or drops the connectors that carry the order.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check'], drill: 'd-suite' },
  { id: 'duree-longue', description: 'Uses the imparfait for a stated, finished duration because it was long.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a10-mission'], drill: 'd-duree', retest: 'd-duree' },
  { id: 'un-seul-temps', description: 'Keeps one tense for a verb that appears twice in a narrative, instead of choosing by role each time.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check'], drill: 'd-meme' },
  { id: 'indice-regle', description: 'Treats a time word (soudain, tous les jours, d’habitude, pendant que) as a rule that fixes the tense.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a10-mission'], drill: 'd-indice', retest: 'd-indice' },
  { id: 'decor-invisible', description: 'Reads or writes a narrative without noticing the states and descriptions inside it, so every verb looks like an event.', detectOn: ['a9-decor', 'a9-action', 'a9-check'], drill: 'd-annoter' },
  { id: 'recit-plat', description: 'Produces a narrative with no setting, no interruption or no ending, whatever the tenses.', detectOn: ['a10-mission', 'a10-scenario', 'a10-plan'], drill: 'd-recit', retest: 'd-recit' },
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
  sheet('sheet-film', 'Le décor et l’action', ['les deux lentilles', 'le test', 'les six formes'], [
    teach('sheet-film-teach', 'Comment lire cette page', `${REFRAME} Pour chaque verbe, pose une question : est-ce que ça se passait déjà (le décor), ou est-ce que ça s'est passé et a changé la situation (l'action) ? Les mots de temps aident, mais ils ne décident pas. Une durée donnée et finie prend le passé composé, même si elle est longue. EN: ${REFRAME_EN} Ask of each verb whether it was going on or whether it happened; time words are clues, and a stated finished duration takes the passé composé.`),
    table('sheet-film-table', 'Les six formes', ['Forme', 'Temps', 'Exemple'], [
      ['le décor', 'imparfait', 'Il pleuvait et la terrasse était vide.'],
      ['une action', 'passé composé', "On m'a volé mon vélo."],
      ['la coupure', 'imparfait + passé composé', 'Je dormais quand le téléphone a sonné.'],
      ['deux décors', 'imparfait + imparfait', 'Pendant que je lisais, il regardait la télé.'],
      ['une suite', 'passé composé, trois fois', 'Je me suis levé, je me suis habillé et je suis sorti.'],
      ['durée fermée', 'passé composé', "J'ai habité à Lyon pendant dix ans."],
    ]),
  ]),
  sheet('sheet-coupure', 'La coupure en détail', ['quand', 'pendant que', 'les deux ordres'], [
    teach('sheet-coupure-teach', 'Une bande et un point', "La chose en cours est à l'imparfait, celle qui arrive au passé composé. L'ordre des deux moitiés est libre : tu peux commencer par la bande ou par le point. Avec deux passés composés, quand ne coupe plus rien : il enchaîne. EN: ongoing imparfait, arriving passé composé, in either order; quand plus two passés composés is a sequence."),
    table('sheet-coupure-table', 'Les quatre formes', ['Forme', 'Exemple', 'Ce que ça dit'], [
      ['imparfait + quand + PC', 'Je dormais quand le téléphone a sonné.', "j'étais au milieu de mon sommeil"],
      ['quand + PC, imparfait', 'Quand le professeur est entré, les élèves parlaient encore.', 'ils parlaient déjà avant'],
      ['pendant que + imparfait, PC', 'Pendant que je cuisinais, il est arrivé.', 'il arrive au milieu de la cuisine'],
      ['quand + PC + PC', "Quand le téléphone a sonné, j'ai répondu.", "d'abord la sonnerie, puis la réponse"],
    ]),
  ]),
  sheet('sheet-duree', 'Les durées', ['fermée ou ouverte', 'les marqueurs'], [
    teach('sheet-duree-teach', 'La fin, pas la longueur', "Si la phrase donne la durée et que la période est finie, c'est le passé composé, même pour dix ans. Si aucune durée n'est donnée, ou si la période sert de décor à autre chose, c'est l'imparfait. EN: a stated, finished stretch takes the passé composé; an open one is background."),
    table('sheet-duree-table', 'Marqueurs et temps', ['Marqueur', 'Fermée ?', 'Exemple'], [
      ['pendant + durée', 'oui', "J'ai habité à Lyon pendant dix ans."],
      ['toute la journée, toute la nuit', 'oui', 'Il a neigé toute la nuit.'],
      ['en + durée', 'oui', 'Elle a lu tout le roman en une nuit.'],
      ['longtemps', 'oui', "J'ai attendu longtemps devant la porte."],
      ['à cette époque', 'non', 'À cette époque, nous habitions près du marché.'],
      ['quand + imparfait', 'non', "J'habitais à Lyon quand j'ai rencontré Claire."],
    ]),
  ]),
  sheet('sheet-indices', 'Les indices et leurs contre-exemples', ['six indices', 'six contre-exemples'], [
    teach('sheet-indices-teach', 'Un indice, pas une règle', "Chaque mot de cette page annonce SOUVENT un temps, et jamais toujours. Quand tu hésites, oublie le mot et demande ce que le verbe fait dans l'histoire. EN: each word usually points one way and never always; ask what the verb does."),
    table('sheet-indices-table', 'Six indices', ['Indice', 'Souvent', 'Mais aussi'], [
      ['soudain', 'Soudain, le téléphone a sonné.', "Soudain, il faisait noir et on n'entendait plus rien."],
      ['tout à coup', 'Tout à coup, la porte a claqué.', "Tout à coup, je n'avais plus envie de rire."],
      ['un jour', "Un jour, j'ai trouvé un portefeuille dans le métro.", "Un jour d'hiver, il faisait moins vingt, et tout le monde attendait le bus."],
      ['tous les jours', 'Tous les jours, je prenais le même bus.', "Tous les jours pendant un mois, j'ai couru."],
      ["d'habitude", "D'habitude, il arrivait à huit heures.", "Ce matin-là, j'ai fait comme d'habitude : j'ai pris le bus."],
      ['pendant que', 'Pendant que je lisais, il regardait la télé.', "Pendant que tu as fait les courses, j'ai rangé la cuisine."],
    ]),
  ]),
  sheet('sheet-recit', 'Écrire un récit', ['les connecteurs', 'la liste de contrôle'], [
    teach('sheet-recit-teach', 'Quatre morceaux', "Un récit tient avec quatre morceaux : le décor, une coupure, une suite d'actions et une fin. Écris le décor à l'imparfait, les étapes au passé composé, et relis-toi en soulignant chaque verbe. EN: setting, interruption, chain, ending; underline every verb when you reread."),
    table('sheet-recit-connecteurs', 'Les connecteurs', ['Mot', 'Où', 'Exemple'], [
      ["d'abord", 'la première étape', "D'abord, j'ai appelé la police."],
      ['ensuite', "l'étape suivante", 'Ensuite, il a éteint la lumière.'],
      ['puis', "l'étape suivante", 'Puis le téléphone a sonné une deuxième fois.'],
      ['alors', 'la conséquence', 'Il pleuvait, alors nous avons pris un taxi.'],
      ['finalement', 'la dernière étape', 'Finalement, nous avons pris un taxi.'],
      ['tout de suite après', 'juste après', 'Il a coupé le cadenas et il est parti.'],
    ]),
    table('sheet-recit-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Trois verbes de décor', "Souligne-les : imparfait, et rien n'arrive"],
      ['Trois actions', 'Souligne-les : passé composé, dans l’ordre'],
      ['Une coupure', 'Cherche quand ou pendant que'],
      ['Les auxiliaires', 'être pour sortir, arriver, tomber et les pronominaux'],
      ['Les accords', 'Avec être, le participe suit le sujet'],
      ['Une fin', 'Une phrase qui dit ce qui a changé'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10];

export const SECTIONS: DraftSection[] = ACTS.flatMap((a) => a.sections);

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-03-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-03-rapport': "The officer's written report (act 1), one female Québécoise voice, one take, read at dictation pace. The imparfait sentences are even and unhurried; from « un homme s'est arrêté » the pace picks up slightly. Every final -ait is a clean [ɛ] with no audible t.",
  'rec-b1-03-soiree': 'The eight lines of act 2, ONE TAKE, ONE VOICE, in authored order: the learner compares three descriptions against five events, and separate takes would turn that into a comparison of performances.',
  'rec-b1-03-film': 'The two lens decks. Read the imparfait cards level and continuing, the passé composé cards falling and finished. No extra stress on the endings: the learner must hear a sentence, not a grammar lesson.',
  'rec-b1-03-temoins': 'Two witnesses (act 3): a waitress and a student, two clearly different voices, Montréal French. Each keeps the imparfait clause level and lets the passé composé clause fall.',
  'rec-b1-03-coupure': 'The interruption decks. The imparfait clause is level and unfinished, the passé composé clause falls. Card 4 of the first deck is the one with TWO events: read it as a list, so it does not sound like the others.',
  'rec-b1-03-coupure-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. No pause between the two clauses beyond what the punctuation gives, or the learner hears the boundary instead of the tense.',
  'rec-b1-03-piege-coupure': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-03-dimanche': 'The Sunday paragraph (act 4): one voice, slow, almost flat. Eleven imparfaits in a row, and the last sentence is the only one that moves. Do not act the ending; let the tense do it.',
  'rec-b1-03-matinee': 'The morning chain (act 5): M. Tremblay and the officer, two voices. The five passés composés are read as a list, each one falling, with a short beat between the steps.',
  'rec-b1-03-entretien': 'The job interview (act 6), two voices, ONE TAKE in authored order. Durations carry the meaning, so « pendant cinq ans » and « pendant six mois » must be clearly audible, never swallowed.',
  'rec-b1-03-piege-duree': "The audio step plays each card's CORRECT sentence. Read all six at the same pace: the trap is that the long ones sound no different from the short ones.",
  'rec-b1-03-samedi': 'The rainy Saturday (act 7), one voice. The five verbs that appear twice must be read identically both times: only the ending changes, and the learner has to hear that and nothing else.',
  'rec-b1-03-paires': 'REQUIRED FOR THE EAR MISSION (act 7): eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. il pleuvait and il a plu are the pair the whole mission turns on.',
  'rec-b1-03-malick': "Malick's anecdote (act 8): a relaxed storyteller, West African French welcome, and a colleague. The cue words are not stressed: the point is that they carry no instruction.",
  'rec-b1-03-indices': "The audio step plays each card's sentence, all six of them counterexamples. Read them as ordinary French, never as oddities.",
  'rec-b1-03-lecture': 'The Lyon narrative (act 9), France accent, one take, natural storytelling pace. Even through the descriptive opening; from « Le tram est arrivé » the pace picks up slightly. No added pause at the interruption.',
  'rec-b1-03-modele': 'The model narrative (act 10), one voice, Québec accent welcome. It is the shape the learner will imitate, so the four parts must be audible: setting, interruption, chain, ending.',
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 03',
  intro: 'You can build the imparfait and the passé composé. This lesson is about choosing between them. Think of a story as a film: the imparfait paints the set, what was already going on, and the passé composé is each thing that happens and moves the film forward. Time words like soudain or tous les jours help, but they never decide for you.',
  skill: 'PE',
  grammarAssumed: [
    IMP_FORM_UNIT, IMP_USE_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, PARTICIPLE_UNIT,
    PRONOMINAL_UNIT, PRONOMINAL_PC_UNIT, TIME_PREP_UNIT,
  ],
  grammarIntroduced: [
    'Aspectual choice between imparfait and passé composé by narrative function: background (setting, states, ongoing actions, habits) against foreground events that advance the story',
    'The interruption frame: an ongoing imparfait action cut by a passé composé event, with quand or pendant que, in either clause order',
    'quand followed by two passés composés as a sequence rather than an interruption',
    'Two simultaneous backgrounds, both imparfait, with no event between them',
    'Chains of completed events in the passé composé, and the connectors d’abord, ensuite, puis, alors, finalement that carry them',
    'Bounded duration (pendant dix ans, toute la journée, en deux heures) taking the passé composé regardless of length, against open duration in the imparfait',
    'The same verb in both tenses inside one narrative',
    'Temporal adverbials (soudain, tout à coup, un jour, tous les jours, d’habitude, pendant que, chaque été, une fois) as probabilistic cues rather than triggers, each with a counterexample',
    'Annotating a continuous narrative verb by verb for narrative function',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais former l'imparfait et le passé composé. Cette leçon t'apprend à choisir. Une histoire, c'est un film : l'imparfait pose le décor, ce qui se passait déjà, et le passé composé fait avancer le film, action après action. Les mots comme soudain ou tous les jours aident, mais ils ne décident jamais à ta place.",
    minutes: 110,
    difficulty: 3,
    glyph: 'ait',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: PC_IMPARFAIT_TERMS,
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

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, READING_TEXT, dicteeFor };
