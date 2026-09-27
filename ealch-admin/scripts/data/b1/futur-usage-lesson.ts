// b1.07.l1 « Le futur : quand, dès que, et les conditions réelles » — the lesson.
// DRAFT v1, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is the draft type in `_task-section.ts`, not in schema.ts, so `sections` is
// `DraftSection[]` and the validators run on `lessonWithoutTask()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act covers)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name (cardDeck,
//   examples, tapTable), build (groupDrill, gated), choose (a drill where the
//   MEANING picks the tense), trap (trapDrill stepped or commonErrors), check
//   (gated control pages before the checkpoint).
//
//    1  Le rendez-vous manqué        6   a booking lost to a present tense
//    2  Le futur des deux côtés      8   quand + futur, and the English habit
//    3  La famille des charnières    8   lorsque, dès que, aussitôt que, tant
//                                        que, pendant que, une fois que
//    4  La même charnière, un autre  7   the same words with a present or a
//       moment                           past main clause, and what changes
//    5  Si + présent, jamais le futur 8  the one absolute rule of the lesson
//    6  Trois suites après si        7   futur, présent, impératif
//    7  Quand ou si                  7   certainty against possibility
//    8  À l'oral                     6   futur proche inside these patterns
//    9  Dans, en, d'ici              7   saying when, and the deadline
//   10  Deux choses à venir          7   sequencing two future events
//   11  Écrire ton plan             11   model, plan, role play, TASK, quiz
//
//   TOTAL 82 missions, 11 acts. Corpus: 178 authored rows in eleven blocks
//   plus 23 reused seed rows, 189 of them released act by act through
//   `deckTranche`. Chapter artwork: `futur-usage-image-prompts.md`, eleven
//   prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (exported for the lessons that follow)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le futur se dit des deux côtés de quand, et jamais après si. »
//   EN: The future is said on both sides of quand, and never after si.
//
//   ONE METAPHOR, THE APPOINTMENT: a two-part sentence is two halves meeting
//   at one moment. With quand the moment is in the diary, so both halves are
//   written in the future. With si the moment is only proposed, so the
//   condition stays in the present. Not a promise, which would make act 4
//   (a habit, no promise at all) unteachable. Corpus §E says why.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    where the future goes in a two-part sentence and where it may
//           never go: the seven charnières, the three real-condition shapes,
//           quand against si, the futur proche in the second half, dans / en
//           / d'ici, and two future events put in order.
//   QUOTES  b1.05's reframe (the formation of the futur simple) and b1.06's
//           (the irregular stems), both assumed, both IMPORTED in the corpus
//           §D and quoted verbatim, never retyped.
//   LEAVES  to b1.10: the present-unreal condition (si + imparfait >
//           conditionnel). Named once, in act 5's trap and on `sheet-si`, as
//           a boundary, and never taught. To a later lesson: the futur
//           antérieur, which four reused seed rows carry and act 10 names
//           once as something the learner will meet and need not build.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the situation
//   needs (the removals clerk and the doctor's receptionist say « vous »).
//   Every learner surface that explains something carries English (`en`, or a
//   final « EN: »). Every `say` is French, spoken fr-FR. Theme
//   `projets-et-futur`. A2 citations use the English trail label; b1.* ones
//   are French from the plan until those units exist.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. b1.05 and b1.06 were written in the same wave. Their reframes are
//      IMPORTED (corpus §D) and quoted verbatim on three screens: the act 2
//      rule deck, the act 5 rule deck and the task's watchFor list. Both
//      drafts are still moving, so if either rewords, reread those three.
//   2. ONE tapTable PER ACT, three in all (acts 3, 6 and 9). The pilot brief
//      allowed one per LESSON; the four shipped lessons run 2 to 7. Confirm
//      three as the working number.
//   3. THE FUTUR ANTÉRIEUR. Four reused seed rows carry it (« quand nous
//      aurons fini »), and act 10 names them once, without teaching. Is that
//      the right boundary, or should they be dropped until the unit exists?
//   4. « Quand j'aurai les clés » is the lesson's headline sentence and it is
//      futur simple of avoir, not futur antérieur. Worth a note on the sheet
//      so a learner does not read it as the form act 10 flags?
//   5. B1 CITATIONS are French from the plan (« la leçon 5 du B1 »). Switch to
//      the English trail label once the b1 units are in the seed?
//   6. Act 11's task is written (90 to 130 words). The unit outcome is « plan
//      and promise », which is as much spoken as written. A second, spoken
//      task, or leave it at PE?
//   7. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   8. Act 4 deliberately spends seven missions on charnières that take NO
//      future. It is the act that stops « quand = futur » becoming a reflex,
//      and it is also the act a learner in a hurry will resent. Keep at seven?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_ROUTINE, READING_TEXT,
  B105_REFRAME, B105_REFRAME_EN, B106_REFRAME, B106_REFRAME_EN,
  FUT_FORM_UNIT, FUT_IRREG_UNIT, PROCHE_UNIT, TIME_PREP_UNIT, MODAUX_UNIT, PC_AVOIR_UNIT,
  FUT_FORM_REF, FUT_IRREG_REF, SI_UNREAL_REF, COND_REF, PROCHE_REF, TIME_PREP_REF, refFr,
} from './futur-usage-corpus.ts';
import { FUTUR_USAGE_TERMS } from './futur-usage-terms.ts';

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
  if (!r) throw new Error(`b1.07: no item ${id}`);
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
 *  ACT 1 — LE RENDEZ-VOUS MANQUÉ
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. THE COST IS A DIARY ENTRY, not rudeness: « quand j'ai les clés » is
 *  correct French for a habit, and the clerk books nothing because a habit has
 *  no date. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Au comptoir du déménageur',
  frSub: 'Une date qui ne se note pas',
  setting: { place: 'Comptoir d’une entreprise de déménagement, rue Saint-Denis', city: 'Montréal', time: '10 h 15', ambience: 'un calendrier au mur, un téléphone, des cartons pliés' },
  beats: [
    {
      kind: 'narration',
      text: 'Tu déménages le mois prochain. Au comptoir, une employée ouvre un calendrier et attend une date pour réserver le camion.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'L’employée',
      fr: 'Dites-moi quand vous aurez les clés, et je bloque le camion.',
      en: 'Tell me when you will have the keys, and I will hold the truck.',
      respell: '[deet-muh kahⁿ voo-zo-REH lay KLAY ay zhuh blok luh ka-MYOHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Quand j’ai les clés, je vous appelle.',
      en: 'Whenever I have the keys, I call you.',
      respell: '[kahⁿ ZHAY lay KLAY zhuh voo-za-PEHL]',
      stage: 'Deux présents. Pour elle, c’est ce que tu fais d’habitude, pas une date.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'L’employée',
      fr: 'Donc vous appelez chaque fois. Je note quoi sur le calendrier.',
      en: 'So you call every time. What do I write in the calendar.',
      respell: '[dohⁿk voo-za-PEHL shak FWA | zhuh not KWA sür luh ka-lahⁿ-DRYAY]',
      stage: 'Elle n’est pas fâchée. Elle n’a simplement rien à écrire.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: 'En anglais, « when I get the keys » suffit : le présent dit déjà l’avenir. En français, le présent dit l’habitude, et l’habitude n’a pas de date.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase donne une date au calendrier ?',
      size: 'lg',
      options: [
        { fr: 'Quand j’ai les clés, je vous appelle.', respell: '[kahⁿ ZHAY lay KLAY zhuh voo-za-PEHL]', en: 'Whenever I have the keys, I call you.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Quand j’aurai les clés, je vous appellerai.', respell: '[kahⁿ zho-REH lay KLAY zhuh voo-za-pehl-REH]', en: 'When I get the keys, I will call you.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Elle écrit « rappel : remise des clés » et garde un camion pour la semaine du quinze.',
        breaks: 'Elle referme le calendrier et te demande de revenir avec une date.',
      },
    },
    {
      kind: 'break',
      heading: 'Le présent n’a pas de date',
      body: 'Après quand, le présent parle de ce qui se répète. Pour un moment à venir, le français met le futur des deux côtés. EN: after quand a present means whenever; ahead of you, the future goes on both sides.',
      wrong: {
        fr: 'Quand j’ai les clés, je vous appelle.',
        ipa: '/kɑ̃ ʒe le kle ʒə vu.za.pɛl/',
        respell: '[kahⁿ ZHAY lay KLAY zhuh voo-za-PEHL]',
        en: 'Whenever I have the keys, I call you.',
      },
      right: {
        fr: 'Quand j’aurai les clés, je vous appellerai.',
        ipa: '/kɑ̃ ʒo.ʁe le kle ʒə vu.za.pɛl.ʁe/',
        respell: '[kahⁿ zho-REH lay KLAY zhuh voo-za-pehl-REH]',
        en: 'When I get the keys, I will call you.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: 'Le camion est réservé. Il reste six mots de charnière à apprendre, et une règle que le français ne casse jamais : après si, pas de futur.',
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'deuxfois'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Mettre le futur des deux côtés de quand', s: 'Actes 2 et 3 : quand et toute sa famille' },
    { t: 'Savoir quand la charnière ne prend pas le futur', s: 'Acte 4 : habitudes, vérités, souvenirs' },
    { t: 'Construire une vraie condition avec si', s: 'Actes 5 et 6 : futur, présent, impératif' },
    { t: 'Écrire ton plan des semaines qui viennent', s: 'Actes 9 à 11 : les délais, l’ordre, la mission' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the same booking as two short messages, where the future is
 *  already doing its job. Noticing before the rule. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux messages, une date',
  frSub: 'Lis, et regarde les verbes',
  text: "Salut Nadia. Je déménage le quinze mars. Le notaire m'a dit que la signature était prévue le douze. Quand j'aurai les clés, je vous appellerai tout de suite, et le camion arrivera à huit heures le lendemain. Dès que le propriétaire signera, tout ira vite. Nous commencerons par la cuisine, parce que c'est la pièce la plus longue. Il faudra tout emballer avant vendredi, donc j'ai déjà acheté les cartons. Si tout va bien, je déménagerai samedi. Quand je serai installé, je t'inviterai. On se verra la semaine prochaine pour les derniers détails. Je ne sais pas encore la date exacte de la remise des clés, mais je te préviendrai dès que je la connaîtrai.",
  glossary: [
    { word: 'le notaire', en: 'the notary', note: 'La personne qui prépare les papiers d’un achat de logement.' },
    { word: 'la signature', en: 'the signing', note: 'Le jour où on signe les papiers.' },
    { word: 'emballer', en: 'to pack', note: 'Mettre les affaires dans des cartons.' },
    { word: 'la remise des clés', en: 'the handover', note: 'Le moment où on te donne les clés.' },
  ],
  questions: [
    { q: 'Quels verbes parlent d’un moment à venir ?', a: 'aurai, appellerai, arrivera, signera, ira, commencerons, faudra, déménagerai, serai, inviterai, verra, préviendrai, connaîtrai.' },
    { q: 'Regarde « Quand j’aurai les clés, je vous appellerai ». Combien de futurs ?', a: 'Deux. En anglais il n’y en aurait qu’un, parce que la moitié en when reste au présent.' },
    { q: 'Quel verbe suit « si » et quel temps porte-t-il ?', a: '« va » dans « Si tout va bien », au présent. Après si, jamais le futur.' },
    { q: 'Pourquoi « Je déménage le quinze mars » est-il au présent ?', a: 'Une date fixée peut se dire au présent, comme en anglais. Ce n’est pas une charnière.' },
  ],
  audio: REC('rec-b1-07-courriel'),
  say: REFRAME,
  terms: ['deuxfois', 'condition'],
};

/** BUILD, on the text just read: sort by what the sentence is about. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Un projet, ou une habitude',
  groups: [
    grp('Un moment à venir', [
      it(E(400), 'la phrase du comptoir, corrigée'),
      it(E(404), 'la signature, puis le reste'),
      it(E(407), 'deux futurs, deux moitiés'),
      it(E(410), 'une invitation, plus tard'),
    ], chk(
      'Ces quatre phrases : combien de verbes au futur dans chacune ?',
      ['deux', 'un seul'],
      0,
      'Les deux moitiés parlent du même moment à venir, donc les deux portent le futur. EN: both halves sit at the same future moment.',
    )),
    grp('Ce que tu fais d’habitude', [
      it(E(401), 'ce que la vendeuse a entendu'),
      it(E(431), 'chaque matin, sans date'),
      it(E(406), 'un état, maintenant'),
    ], chk(
      'Pourquoi l’employée ne note rien après « Quand j’ai les clés » ?',
      ['la phrase dit une habitude, pas une date', 'la phrase est fausse'],
      0,
      'Elle est correcte, et elle raconte ce que tu fais chaque fois. Une habitude n’a pas de jour. EN: correct French, but a habit has no date.',
    )),
    ctl('Le test', 'Tu hésites entre le présent et le futur après quand. Que fais-tu ?', ['tu regardes la fin du verbe', 'tu demandes si le moment est déjà passé ou encore à venir'], 1,
      'Le moment décide, pas le mot quand. EN: the moment decides, not the word quand.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['deuxfois', 'charniere'],
};

/** WHY IT MATTERS. Four places where the wrong tense costs something real. */
const A1_POURQUOI: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-pourquoi',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Au comptoir, pour réserver une date', fr: 'Quand j’aurai les clés, je vous appellerai.', en: 'When I get the keys, I will call you.' },
    { situation: 'Au travail, pour promettre un document', fr: 'Dès que je finirai, je te le dirai.', en: 'As soon as I finish, I will tell you.' },
    { situation: 'Avec un ami, pour poser une condition', fr: 'Si tu viens demain, je préparerai un gâteau.', en: 'If you come tomorrow, I will make a cake.' },
    { situation: 'À l’examen, pour parler de tes projets', fr: 'Quand je serai à la retraite, je voyagerai.', en: 'When I retire, I will travel.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'condition'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le calendrier', '« Quand j’... les clés, je vous appellerai. » (avoir) EN: Which form books a date?',
    ['aurai', 'ai'], 0, 'Un moment à venir, donc le futur des deux côtés. EN: a future moment, so both halves.'),
  ctl('L’habitude', '« Quand j’arrive au bureau, je prends un café. » Cette phrase dit...',
    ['ce que je fais chaque matin', 'ce que je ferai demain', 'ce que j’ai fait hier'], 0,
    'Deux présents : une habitude, à chaque fois. EN: two presents mean every time.'),
  ctl('Après si', 'Dans « Si tout va bien, je déménagerai samedi », quel verbe suit si ?', ['ira, au futur', 'va, au présent'], 1,
    'Après si, le verbe reste au présent. C’est la règle que le français ne casse jamais. EN: after si the verb stays present.'),
], ['deuxfois', 'condition']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le rendez-vous manqué',
    opener: {
      line: 'Tu donnes une date au comptoir, et l’employée ne note rien : ta phrase parlait d’une habitude. EN: You give a date at the counter and the clerk writes nothing: your sentence described a habit.',
      imageRef: 'lessons/futur-usage/act01.jpg',
    },
    sections: [],
    milestone: 'Tu as vu une vraie réservation se perdre dans un présent, et tu sais maintenant ce que l’employée attendait. EN: You saw a real booking lost in a present tense and you know what the clerk was waiting for.',
    estScreens: 22, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_POURQUOI, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LE FUTUR DES DEUX CÔTÉS
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le poste à Bruxelles',
  frSub: 'Deux collègues font des projets',
  setting: 'Un couloir de bureau, à Bruxelles. Inès part en mission dans deux mois et son collègue veut comprendre le calendrier.',
  bubbles: [
    { from: 'narrator', fr: 'Inès commencera un nouveau poste en janvier. Tout est signé, rien n’est encore organisé.', en: 'Inès will start a new job in January. Everything is signed, nothing is organised yet.' },
    { from: 'coach', fr: 'Quand tu commenceras ce travail, tu prendras le train tous les jours.', en: 'When you start this job, you will take the train every day.', warn: 'Deux futurs : commenceras, prendras' },
    { from: 'user', fr: 'Oui. Quand j’arriverai à Bruxelles, je t’enverrai un message.', en: 'Yes. When I get to Brussels, I will send you a message.' },
    { from: 'coach', fr: 'Quand le contrat sera signé, tu recevras une copie.', en: 'When the contract is signed, you will receive a copy.' },
    { from: 'user', fr: 'Et quand nous serons prêts, nous partirons ensemble.', en: 'And when we are ready, we will leave together.' },
    { from: 'coach', fr: 'Tu entends le petit r partout. C’est lui qui porte l’avenir.', en: 'You hear the little r everywhere. That is what carries the future.', warn: 'Le r du futur : commence-R-as, prend-R-as' },
  ],
  closing: { fr: 'Six phrases, douze verbes, et pas un seul présent après quand.', en: 'Six sentences, twelve verbs, and not one present tense after quand.' },
  audio: REC('rec-b1-07-nouveau-poste'),
  say: REFRAME,
  terms: ['deuxfois', 'charniere'],
};

/** NAME: the rule, one idea per card. */
const A2_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le futur des deux côtés',
  frSub: 'quand + futur',
  hint: 'Quatre cartes. Compte les verbes au futur.',
  audio: REC('rec-b1-07-deux-cotes'),
  say: REFRAME,
  terms: ['deuxfois', 'charniere'],
  cards: [
    {
      head: 'Les deux moitiés, le même moment',
      label: 'quand + futur',
      fr: 'Quand tu arriveras, je serai déjà là.',
      sub: '[kahⁿ tü a-reev-RA zhuh suh-reh day-zha LA]',
      body: 'Ton arrivée et ma présence sont au même moment, et ce moment est devant nous. Les deux verbes portent le futur. EN: both halves sit at the same moment ahead, so both take the future.',
    },
    {
      head: 'La charnière ne décide de rien',
      label: 'le moment décide',
      fr: 'Quand il fera beau, nous mangerons dehors.',
      sub: '[kahⁿ-teel fuh-RA BOH noo mahⁿ-zhuh-ROHⁿ duh-OR]',
      body: 'Le mot quand ne commande pas le temps du verbe. C’est le moment dont tu parles qui commande. EN: the word quand does not command the tense; the moment does.',
    },
    {
      head: 'L’ordre des deux moitiés est libre',
      label: 'les deux ordres',
      fr: 'Je te préviendrai quand la salle sera libre.',
      sub: '[zhuh tuh pray-vyehⁿ-DREH kahⁿ la SAL suh-ra LEEBR]',
      body: 'Tu peux commencer par la charnière ou par l’autre moitié. Les deux futurs restent. EN: either half may come first; both futures stay.',
    },
    {
      head: `Ce que ${FUT_FORM_REF} t’a déjà donné`,
      label: Cap(FUT_FORM_REF),
      fr: 'j’arriverai · tu arriveras · il arrivera',
      sub: '[zha-reev-REH] · [tü a-reev-RA] · [eel a-reev-RA]',
      body: `« ${B105_REFRAME} » Ici, tu choisis seulement où le poser. EN: ${B105_REFRAME_EN} Here you only choose where to put it.`,
    },
  ],
};

/** NAME, in the corpus's own words. */
const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Six projets, douze futurs',
  examples: [
    ex(E(415), 'arriverai et enverrai : le message suit l’arrivée'),
    ex(E(417), 'sera et recevras : la copie suit la signature'),
    ex(E(419), 'finira et cherchera : le poste suit les études'),
    ex(E(422), 'verras et comprendras : la même seconde'),
    ex(E(424), 'reparlerons et rentreras : la charnière est à la fin'),
    ex(E(426), 'déménageront et seront : deux conditions de vie'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['deuxfois'],
};

/** NAME: the English habit, named so the learner can catch it in the act. */
const A2_ANGLAIS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-anglais',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que fait l’anglais',
  frSub: 'Et pourquoi ça trompe',
  hint: 'Quatre cartes. Regarde la première moitié à chaque fois.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['deuxfois'],
  cards: [
    {
      head: 'L’anglais garde le présent',
      label: 'when I arrive',
      fr: 'Quand j’arriverai, je t’appellerai.',
      sub: '[kahⁿ zha-reev-REH zhuh ta-pehl-REH]',
      body: 'En anglais on dit when I arrive, I will call you : un seul futur. En français, deux. EN: English says when I arrive with one future; French uses two.',
    },
    {
      head: 'Le français entend autre chose',
      label: 'l’habitude',
      fr: 'Quand j’arrive au bureau, je prends un café.',
      sub: '[kahⁿ zha-REEV oh bü-ROH zhuh prahⁿ-zuhⁿ ka-FAY]',
      body: 'Ce présent existe et il est correct : il dit chaque matin. Il ne dit jamais demain. EN: this present is correct and means every morning, never tomorrow.',
    },
    {
      head: 'Le r que l’oreille cherche',
      label: 'la marque du futur',
      fr: 'j’arrive · j’arriverai',
      sub: '[zha-REEV] · [zha-reev-REH]',
      body: 'Une syllabe de plus, avec un r : c’est toute la différence entre l’habitude et le projet. EN: one extra syllable with an r separates habit from plan.',
    },
    {
      head: 'La phrase à retenir',
      label: 'la règle',
      fr: 'En anglais, la première moitié reste au présent.',
      sub: '[ahⁿ-nahⁿ-GLEH la pruh-myehr mwa-TYAY rehs-toh pray-ZAHⁿ]',
      body: 'Nomme l’habitude anglaise, et tu la verras arriver avant de l’écrire. EN: name the English habit and you will catch it before you write it.',
    },
  ],
};

/** BUILD, gated. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Mets le futur des deux côtés',
  groups: [
    grp('La charnière d’abord', [
      it(E(416), 'commencerai, prendrai'),
      it(E(418), 'serons, partirons'),
      it(E(420), 'aurez, direz'),
      it(E(421), 'fera, mangerons'),
    ], chk(
      '« Quand nous ... prêts, nous partirons. » (être)',
      ['serons', 'sommes'],
      0,
      'Le départ est à venir, donc la charnière aussi. EN: the leaving is ahead, so the hinge clause is too.',
    )),
    grp('La charnière à la fin', [
      it(E(423), 'préviendrai, sera'),
      it(E(425), 'répondra, pourra'),
      it(E(427), 'partira, sera'),
      it(E(428), 'seras, sera'),
    ], chk(
      '« Elle te répondra quand elle ... . » (pouvoir)',
      ['peut', 'pourra', 'a pu'],
      1,
      'La charnière garde le futur même quand elle passe en deuxième. EN: the hinge keeps the future even when it comes second.',
    )),
    ctl('Le compte', 'Dans une phrase avec quand et un projet, combien de verbes au futur ?', ['un', 'aucun', 'deux'], 2,
      'Un de chaque côté. C’est le cœur de la leçon. EN: one on each side.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['deuxfois', 'charniere'],
};

/** THE EAR. hideLines, so the question is about what was heard. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Projet ou habitude',
  frSub: 'Écoute la première moitié',
  lines: [
    ln(E(431)), ln(E(415)), ln(E(452)), ln(E(418)),
    ln(E(421)), ln(E(454)), ln(E(428)), ln(E(467)),
  ],
  questions: [
    { q: 'Première phrase : « Quand j’arrive au bureau... ». C’est...', opts: ['une habitude', 'un projet pour demain'], correct: 0, why: 'Deux présents, donc chaque matin. EN: two presents, so every morning.' },
    { q: 'Deuxième phrase : combien de verbes au futur ?', opts: ['deux', 'un'], correct: 0, why: 'arriverai et enverrai : les deux moitiés. EN: both halves.' },
    { q: 'Quatrième phrase : quand partiront-ils ?', opts: ['tous les matins', 'dès qu’ils seront prêts'], correct: 1, why: '« Quand nous serons prêts » annonce un moment unique. EN: one moment, not a routine.' },
    { q: 'Sixième phrase : le métro, c’est...', opts: ['à chaque pluie', 'pour demain'], correct: 0, why: 'Présent + présent : une habitude. EN: present plus present is a habit.' },
    { q: 'Septième phrase : « Quand tu seras là... ». Tu es là maintenant ?', opts: ['oui', 'non, plus tard'], correct: 1, why: 'Le futur pose le moment devant nous. EN: the future places the moment ahead.' },
  ],
  audio: REC('rec-b1-07-projets-ecoute'),
  say: REFRAME,
  terms: ['deuxfois'],
};

/** TRAP, stepped and gated: the English carry-over, in both clause orders. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: 'Le présent qui vient de l’anglais',
  rule: {
    title: 'Deux moitiés, deux futurs',
    body: 'Le présent après quand est correct et veut dire chaque fois. Pour un projet, il change le sens sans rendre la phrase fausse. EN: nobody corrects a sentence that is right but not the one you meant.',
  },
  cards: [
    { promptLabel: 'un seul futur', promptSound: 'Quand j’arrive à Bruxelles, je t’enverrai un message.', fr: 'Quand j’arriverai à Bruxelles, je t’enverrai un message.', ipa: '/kɑ̃ ʒa.ʁiv.ʁe a bʁy.sɛl ʒə tɑ̃.vɛ.ʁe œ̃ me.saʒ/', tip: 'Le message suit l’arrivée : les deux sont devant toi. EN: both are ahead.' },
    { promptLabel: 'le présent en tête', promptSound: 'Quand le contrat est signé, tu recevras une copie.', fr: 'Quand le contrat sera signé, tu recevras une copie.', ipa: '/kɑ̃ lə kɔ̃.tʁa sə.ʁa si.ɲe ty ʁə.sə.vʁa yn kɔ.pi/', tip: 'La signature n’a pas eu lieu. EN: the signing has not happened.' },
    { promptLabel: 'la charnière à la fin', promptSound: 'Je te préviendrai quand la salle est libre.', fr: 'Je te préviendrai quand la salle sera libre.', ipa: '/ʒə tə pʁe.vjɛ̃.dʁe kɑ̃ la sal sə.ʁa libʁ/', tip: 'La place de la charnière ne change rien. EN: position changes nothing.' },
    { promptLabel: 'deux présents', promptSound: 'Quand tu vois le directeur, tu comprends.', fr: 'Quand tu verras le directeur, tu comprendras.', ipa: '/kɑ̃ ty vɛ.ʁa lə di.ʁɛk.tœʁ ty kɔ̃.pʁɑ̃.dʁa/', tip: 'Avec deux présents, ta phrase dit à chaque fois. EN: two presents say every time.' },
    { promptLabel: 'le futur du mauvais côté', promptSound: 'Quand elle finira ses études, elle cherche un poste.', fr: 'Quand elle finira ses études, elle cherchera un poste.', ipa: '/kɑ̃.tɛl fi.ni.ʁa se.ze.tyd ɛl ʃɛʁ.ʃə.ʁa œ̃ pɔst/', tip: 'Un futur tout seul laisse la phrase bancale. EN: one lone future leaves it lopsided.' },
    { promptLabel: 'la bonne habitude', promptSound: 'Quand j’arriverai au bureau, je prendrai un café tous les matins.', fr: 'Quand j’arrive au bureau, je prends un café.', ipa: '/kɑ̃ ʒa.ʁiv o by.ʁo ʒə pʁɑ̃.zœ̃ ka.fe/', tip: 'Pour une habitude, le présent est la bonne forme. EN: for a habit the present is right.' },
  ],
  drill: [
    { promptSay: 'Quand tu ... , je serai déjà là. (arriver)', opts: ['arriveras', 'arrives'], correct: 0 },
    { promptSay: 'Quand j’arrive au bureau, je ... un café. (prendre)', opts: ['prendrai', 'prends'], correct: 1 },
    { promptSay: 'Je te préviendrai quand la salle ... libre. (être)', opts: ['sera', 'est'], correct: 0 },
    { promptSay: 'Quand il ... beau, nous mangerons dehors. (faire)', opts: ['fait', 'fera'], correct: 1 },
    { promptSay: 'Quand vous aurez le temps, vous me ... . (dire)', opts: ['direz', 'dites'], correct: 0 },
    { promptSay: 'Quand il pleut, je ... le métro. (prendre)', opts: ['prendrai', 'prends'], correct: 1 },
    { promptSay: 'Elle te répondra quand elle ... . (pouvoir)', opts: ['pourra', 'peut'], correct: 0 },
    { promptSay: 'Quand nous ... prêts, nous partirons. (être)', opts: ['sommes', 'serons'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Deux moitiés, deux futurs' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le présent raconte à ta place' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-07-piege-quand'),
  say: REFRAME,
  terms: ['deuxfois', 'charniere'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le compte', 'Un projet avec quand : combien de futurs ?', ['deux', 'un'], 0,
    'Un de chaque côté de la charnière. EN: one on each side.'),
  ctl('L’ordre', 'La charnière peut-elle passer en deuxième ?', ['non, jamais', 'oui, sans rien changer'], 1,
    '« Je te préviendrai quand la salle sera libre » : même phrase, autre ordre. EN: same sentence, other order.'),
  ctl('Le sens', '« Quand je rentre, je fais les courses. » Cette phrase parle...', ['de chaque fois', 'de demain', 'd’hier'], 0,
    'Deux présents : une habitude. EN: two presents mean a habit.'),
], ['deuxfois', 'charniere']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Le futur des deux côtés',
    opener: {
      line: 'Une phrase, deux moitiés, et le même moment devant toi : ici le futur se pose des deux côtés. EN: One sentence, two halves, one moment ahead: here the future goes on both sides.',
      imageRef: 'lessons/futur-usage/act02.jpg',
    },
    sections: [],
    milestone: 'Tu mets le futur des deux côtés de quand, dans les deux ordres, sans y penser. EN: You put the future on both sides of quand, in either order, without thinking about it.',
    estScreens: 35, restPoints: ['a2-anglais', 'a2-ecoute'],
  },
  sections: [A2_HISTOIRE, A2_REGLE, A2_EXEMPLES, A2_ANGLAIS, A2_CONSTRUIRE, A2_ECOUTE, A2_PIEGE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA FAMILLE DES CHARNIÈRES
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Six mots, six nuances',
  frSub: 'Écoute le début de chaque phrase',
  lines: [
    ln(E(432)), ln(E(436)), ln(E(438)), ln(E(440)),
    ln(E(442)), ln(E(434)), ln(E(445)), ln(E(446)),
  ],
  questions: [
    { q: 'Première phrase : « Dès que le magasin ouvrira... ». Tu y vas...', opts: ['à la seconde où il ouvre', 'un peu plus tard'], correct: 0, why: 'Dès que donne l’instant exact. EN: dès que gives the exact instant.' },
    { q: 'Deuxième phrase commence par lorsque. Le sens est...', opts: ['plus fort que quand', 'le même que quand'], correct: 1, why: 'Lorsque est le même mot, plus écrit. EN: the same word, more written.' },
    { q: 'Troisième phrase : « Tant que la pluie continuera... ». Vous sortez quand ?', opts: ['dès qu’elle s’arrête', 'pendant la pluie'], correct: 0, why: 'Tant que dit aussi longtemps que ça dure. EN: tant que means for as long as.' },
    { q: 'Quatrième phrase : les deux actions se passent...', opts: ['l’une après l’autre', 'en même temps'], correct: 1, why: 'Pendant que met les deux moitiés côte à côte. EN: pendant que runs them together.' },
    { q: 'Cinquième phrase : « Une fois que le formulaire sera rempli... ». Il faut d’abord...', opts: ['le remplir', 'le déposer'], correct: 0, why: 'Une fois que marque une étape franchie. EN: une fois que marks a step completed.' },
    { q: 'Combien de ces phrases ont un verbe au futur après la charnière ?', opts: ['aucune', 'quelques-unes', 'toutes'], correct: 2, why: 'Toute la famille se comporte comme quand. EN: the whole family behaves like quand.' },
  ],
  audio: REC('rec-b1-07-charnieres-ecoute'),
  say: REFRAME,
  terms: ['charniere', 'seuil'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-charnieres',
  title: 'Ce que chaque charnière ajoute',
  frSub: 'Le même futur, un autre sens',
  hint: 'Quatre cartes. Le temps ne change pas ; le sens, si.',
  audio: REC('rec-b1-07-charnieres'),
  say: REFRAME,
  terms: ['charniere', 'seuil'],
  cards: [
    {
      head: 'L’instant exact',
      label: 'dès que, aussitôt que',
      fr: 'Dès que tu seras prêt, on partira.',
      sub: '[deh kuh tü suh-ra PREH ohⁿ par-tee-RA]',
      body: 'Pas une minute de plus. Aussitôt que dit la même chose, avec un ton plus écrit. EN: not a minute later; aussitôt que says the same thing more formally.',
    },
    {
      head: 'Tant que ça dure',
      label: 'tant que',
      fr: 'Tant que la pluie continuera, nous resterons à l’intérieur.',
      sub: '[tahⁿ kuh la PLWEE kohⁿ-tee-nwuh-RA noo rehs-tuh-rohⁿ-za lehⁿ-tay-RYUHR]',
      body: 'La deuxième moitié dure exactement aussi longtemps que la première. EN: the second half lasts exactly as long as the first.',
    },
    {
      head: 'En même temps',
      label: 'pendant que',
      fr: 'Pendant que tu feras les courses, je rangerai la cuisine.',
      sub: '[pahⁿ-dahⁿ kuh tü fuh-RA lay KOORSS zhuh rahⁿ-zhuh-REH la kwee-ZEEN]',
      body: 'Deux choses côte à côte, du début à la fin. Personne n’attend personne. EN: two things side by side, nobody waiting.',
    },
    {
      head: 'Une étape franchie',
      label: 'une fois que',
      fr: 'Une fois que le formulaire sera rempli, tu le déposeras au bureau.',
      sub: '[ün FWA kuh luh for-mü-LEHR suh-ra rahⁿ-PLEE tü luh day-pohz-RA oh bü-ROH]',
      body: 'D’abord l’étape, ensuite la suite. C’est le mot des notices et des démarches. EN: first the step, then the rest; the word of forms and procedures.',
    },
  ],
};

/** NAME: the six hinges at a glance. The full list is on the sheet. */
const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-table',
  layer: 'core',
  sheetId: 'sheet-charnieres',
  title: 'Six charnières',
  cols: ['Charnière', 'Ce qu’elle ajoute', 'Temps'],
  rows: [
    { cells: ['quand', 'le moment, sans plus', 'futur'], say: 'Quand tu arriveras, je serai déjà là.', detail: { title: 'quand', body: 'La charnière de base. Elle pose un moment et ne dit rien d’autre. EN: the basic hinge: it places a moment and adds nothing.', say: 'Quand il fera beau, nous mangerons dehors.' } },
    { cells: ['lorsque', 'le même sens, à l’écrit', 'futur'], say: 'Lorsque nous serons à Genève, nous visiterons le lac.', detail: { title: 'lorsque', body: 'Même sens que quand, ton plus formel : lettres, notices, examens. EN: same as quand, more formal in tone.', say: 'Lorsque le médecin appellera ton nom, tu entreras.' } },
    { cells: ['dès que', 'l’instant exact', 'futur'], say: 'Dès que tu seras prêt, on partira.', detail: { title: 'dès que', body: 'La seconde où ça commence, pas une minute plus tard. EN: the second it starts, not a minute later.', say: 'Dès que j’aurai ton adresse, je t’enverrai le colis.' } },
    { cells: ['tant que', 'aussi longtemps que', 'futur'], say: 'Tant que j’habiterai ici, je prendrai le bus.', detail: { title: 'tant que', body: 'Les deux moitiés durent ensemble, et s’arrêtent ensemble. EN: both halves last together and stop together.', say: 'Tant que la pluie continuera, nous resterons à l’intérieur.' } },
    { cells: ['pendant que', 'en même temps', 'futur'], say: 'Pendant qu’il conduira, je lirai la carte.', detail: { title: 'pendant que', body: 'Deux activités côte à côte. Personne ne coupe personne. EN: two activities side by side, neither cutting the other.', say: 'Pendant que les enfants dormiront, nous préparerons la fête.' } },
    { cells: ['une fois que', 'une étape franchie', 'futur'], say: 'Une fois que tu connaîtras le code, tu pourras entrer.', detail: { title: 'une fois que', body: 'D’abord l’étape est faite, ensuite le reste devient possible. EN: the step is done first, then the rest becomes possible.', say: 'Une fois que nous aurons un appartement, tout sera plus calme.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'seuil'],
};

const A3_NUANCES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-nuances',
  layer: 'core',
  title: 'La même situation, six fois',
  examples: [
    ex(E(433), 'dès que : pas une minute de plus'),
    ex(E(435), 'aussitôt que : le même seuil, plus écrit'),
    ex(E(437), 'lorsque : le ton d’une salle d’attente'),
    ex(E(439), 'tant que : la sortie attend la fin'),
    ex(E(441), 'pendant que : les deux ensemble, en voiture'),
    ex(E(443), 'une fois que : l’appartement d’abord'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'seuil'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Choisis la charnière',
  groups: [
    grp('Le seuil', [
      it(E(432), 'dès que : la seconde de l’ouverture'),
      it(E(434), 'aussitôt que : la fin de la réunion'),
      it(E(444), 'dès que : dès l’adresse reçue'),
      it('fr.b1.heure-et-date.085', 'dès que : au douzième coup'),
    ], chk(
      'Tu veux dire « à la seconde où il arrive ». Quelle charnière ?',
      ['dès qu’il arrivera', 'pendant qu’il arrivera', 'tant qu’il arrivera'],
      0,
      'Dès que donne l’instant. Pendant que donnerait une durée. EN: dès que gives the instant.',
    )),
    grp('La durée partagée', [
      it(E(438), 'tant que : la pluie décide'),
      it(E(445), 'tant que : le bus dure autant que l’adresse'),
      it(E(440), 'pendant que : deux tâches côte à côte'),
      it(E(446), 'pendant que : la sieste et la fête'),
    ], chk(
      'Deux choses qui durent ensemble, du début à la fin : quelle charnière ?',
      ['dès que', 'pendant que', 'une fois que'],
      1,
      'Pendant que met les deux moitiés côte à côte. EN: pendant que runs them side by side.',
    )),
    ctl('Le temps', 'Toutes ces charnières, pour un projet, demandent...', ['le présent', 'le futur'], 1,
      'Toute la famille se comporte comme quand. EN: the whole family behaves like quand.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'seuil'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de charnière',
  errors: [
    { wrong: 'Dès que tu es prêt, on partira.', right: 'Dès que tu seras prêt, on partira.', why: 'Normal : en anglais as soon as you are ready garde le présent. En français, la charnière suit le moment. EN: English keeps the present after as soon as.' },
    { wrong: 'Tant que j’habite ici, je prendrai le bus.', right: 'Tant que j’habiterai ici, je prendrai le bus.', why: 'Correct ailleurs : ce présent dirait ta vie d’aujourd’hui. Ici tu parles des années qui viennent. EN: correct elsewhere, wrong for the years ahead.' },
    { wrong: 'Une fois que tu auras le code, tu peux entrer.', right: 'Une fois que tu connaîtras le code, tu pourras entrer.', why: 'La deuxième moitié aussi est devant toi. Un présent y sonne comme une permission générale. EN: the second half is ahead too.' },
    { wrong: 'Pendant que tu feras les courses, je range la cuisine.', right: 'Pendant que tu feras les courses, je rangerai la cuisine.', why: 'Si les deux durent ensemble, les deux sont au même temps. Un seul futur casse le couple. EN: both halves share one tense.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'deuxfois'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris les charnières que tu entends',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le seuil', 'Quelle charnière dit « à la seconde exacte » ?', ['pendant que', 'une fois que', 'dès que'], 2,
    'Dès que et aussitôt que donnent l’instant. EN: dès que and aussitôt que give the instant.'),
  ctl('Le registre', 'Quand et lorsque : quelle différence ?', ['aucune de sens, lorsque est plus écrit', 'lorsque est plus fort'], 0,
    'Le sens est le même ; le ton change. EN: same meaning, different tone.'),
  ctl('Le temps', '« ... la réunion finira, nous irons déjeuner. » Quel début ?', ['Dès que', 'Dès qu’il faut', 'Pendant qu’il'], 0,
    'Dès que, suivi du futur, comme toute la famille. EN: dès que plus the future.'),
], ['charniere', 'seuil']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La famille des charnières',
    opener: {
      line: 'Six mots tiennent la même porte, et chacun l’ouvre un peu autrement : voici toute la famille de quand. EN: Six words hold the same door and each opens it a little differently: the whole family of quand.',
      imageRef: 'lessons/futur-usage/act03.jpg',
    },
    sections: [],
    milestone: 'Tu choisis entre dès que, tant que, pendant que et une fois que par le sens, et le futur suit tout seul. EN: You choose between dès que, tant que, pendant que and une fois que by meaning, and the future follows.',
    estScreens: 28, restPoints: ['a3-nuances'],
  },
  sections: [A3_ECOUTE, A3_CARTES, A3_TABLE, A3_NUANCES, A3_CONSTRUIRE, A3_ERREURS, A3_DICTEE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA MÊME CHARNIÈRE, UN AUTRE MOMENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La boulangerie de Karim',
  frSub: 'Compte les futurs, il y en a quatre',
  text: READING_ROUTINE,
  glossary: [
    { word: 'fournée', en: 'batch', note: 'Tout le pain qui cuit en même temps dans le four.' },
    { word: 'comptoir', en: 'counter', note: 'La table où l’on sert les clients.' },
    { word: 'la caisse', en: 'the till', note: 'La boîte où l’on met l’argent.' },
    { word: 'se rendormait', en: 'went back to sleep', note: 'Il se rendormait après le réveil.' },
    { word: 'le lever du soleil', en: 'the sunrise', note: 'Le moment où le soleil se lève.' },
  ],
  questions: [
    { q: 'Combien de verbes au futur dans ce texte ?', a: 'Quatre : changera, commencera, verra, manquera. Tous dans les deux dernières phrases.' },
    { q: 'Pourquoi « Quand il arrive à cinq heures » est-il au présent ?', a: 'C’est ce qui se passe chaque jour. Une habitude n’a pas de date.' },
    { q: '« Dès que le réveil sonnait, il éteignait. » De quand parle cette phrase ?', a: 'Du temps où Karim était étudiant : une habitude passée, à l’imparfait.' },
    { q: 'Quel mot fait basculer le texte dans l’avenir ?', a: '« La semaine prochaine ». À partir de là, la charnière prend le futur.' },
    { q: 'La même charnière, trois temps : donne un exemple de chaque.', a: 'Quand il arrive (présent), quand il était étudiant (passé), quand il commencera (futur).' },
  ],
  audio: REC('rec-b1-07-boulangerie'),
  say: REFRAME,
  terms: ['charniere', 'verite'],
};

const A4_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le moment décide, pas le mot',
  frSub: 'La même charnière, trois temps',
  hint: 'Quatre cartes. Le mot quand ne bouge pas.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'verite'],
  cards: [
    {
      head: 'Chaque fois',
      label: 'présent + présent',
      fr: 'Quand je rentre du travail, je prends une douche.',
      sub: '[kahⁿ zhuh RAHⁿTR dü tra-VAÏ zhuh prahⁿ-zün DOOSH]',
      body: 'Deux présents : ce qui arrive à chaque fois, aujourd’hui comme demain. EN: two presents describe what happens every time.',
    },
    {
      head: 'Une vérité',
      label: 'présent + présent',
      fr: 'Lorsque le soleil se couche, la place se vide.',
      sub: '[LORSS-kuh luh so-LEHÏ suh KOOSH la PLASS suh VEED]',
      body: 'Personne ne promet rien. La phrase décrit ce qui est vrai tous les soirs. EN: nothing is promised; this is what is true every evening.',
    },
    {
      head: 'Une habitude finie',
      label: 'imparfait + imparfait',
      fr: 'Quand j’étais étudiant, je travaillais le samedi.',
      sub: '[kahⁿ zhay-teh-zay-tü-DYAHⁿ zhuh tra-va-yeh luh sam-DEE]',
      body: 'La même charnière, tournée vers le passé. Les deux moitiés se suivent encore. EN: the same hinge, turned towards the past.',
    },
    {
      head: 'Un moment à venir',
      label: 'futur + futur',
      fr: 'Quand je serai à la retraite, je voyagerai.',
      sub: '[kahⁿ zhuh suh-REH a la ruh-TREHT zhuh vwa-yazh-REH]',
      body: 'Et seulement ici, le futur. La règle de l’acte 2 tient, elle ne s’applique pas partout. EN: only here the future; the rule of act 2 holds but does not apply everywhere.',
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Quel moment, quel temps',
  groups: [
    grp('À chaque fois', [
      it(E(452), 'chaque soir'),
      it(E(454), 'à chaque pluie'),
      it('fr.b1.appareils.002', 'à chaque panne'),
      it('fr.b1.routines.093', 'aussi longtemps que le sport dure'),
    ], chk(
      '« Dès que le réveil ... , je me lève. » (sonner) Une habitude.',
      ['sonnera', 'sonne'],
      1,
      'Chaque matin : présent des deux côtés. EN: every morning, so present on both sides.',
    )),
    grp('Un moment à venir', [
      it(E(463), 'la retraite viendra'),
      it(E(464), 'la fin du travail viendra'),
      it(E(465), 'la faim viendra'),
      it(E(407), 'ton arrivée viendra'),
    ], chk(
      '« Dès que je ... , je te le dirai. » (finir) Ce soir.',
      ['finis', 'finirai', 'finissais'],
      1,
      'Un moment unique, devant toi : futur des deux côtés. EN: one moment ahead, so both futures.',
    )),
    ctl('Le passé', '« Quand nous habitions à Bruxelles, nous allions au marché. » Cette phrase dit...',
      ['une habitude finie', 'un projet'], 0,
      'Deux imparfaits : une habitude qui est terminée. EN: two imparfaits mean a habit that is over.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'verite'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'La charnière ne commande rien',
  examples: [
    ex(E(453), 'présent : chaque matin'),
    ex(E(455), 'présent : une vérité sur toi'),
    ex(E(456), 'présent : la même suite tous les jours'),
    ex(E(460), 'imparfait : une habitude d’école'),
    ex(E(461), 'passé composé : un moment unique, une seule fois'),
    ex(E(462), 'imparfait : une vie à Bruxelles, terminée'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'verite'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Hier, chaque jour, ou demain',
  frSub: 'Écoute et place le moment',
  lines: [
    ln(E(452)), ln(E(459)), ln(E(463)), ln(E(457)),
    ln(E(460)), ln(E(464)), ln(E(467)), ln(E(465)),
  ],
  questions: [
    { q: 'Première phrase : de quand parle-t-elle ?', opts: ['de demain', 'd’avant', 'de chaque jour'], correct: 2, why: 'Deux présents : une habitude. EN: two presents, a habit.' },
    { q: 'Deuxième phrase : « Quand j’étais étudiant... ». C’est...', opts: ['à venir', 'fini'], correct: 1, why: 'Deux imparfaits : une habitude passée. EN: a habit that is over.' },
    { q: 'Troisième phrase : la retraite, c’est...', opts: ['plus tard', 'maintenant'], correct: 0, why: 'Deux futurs : un moment devant toi. EN: two futures, a moment ahead.' },
    { q: 'Cinquième phrase : « Dès que la cloche sonnait... ». Ça se passait...', opts: ['une seule fois', 'tous les jours d’école'], correct: 1, why: 'L’imparfait raconte l’habitude d’une époque. EN: the imparfait tells the habit of a period.' },
    { q: 'Combien de ces huit phrases ont un futur ?', opts: ['trois', 'aucune', 'toutes'], correct: 0, why: 'Trois : la retraite, la fin du travail, la faim. EN: three of them.' },
  ],
  audio: REC('rec-b1-07-routine-ecoute'),
  say: REFRAME,
  terms: ['charniere', 'verite'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Quand devenu réflexe',
  rule: {
    title: 'Le mot ne décide de rien',
    body: 'Après l’acte 2, quand appelle le futur tout seul dans ta tête. C’est la deuxième erreur : une habitude poussée dans l’avenir. EN: act 2 makes quand call the future by itself, and a plain habit gets pushed into it.',
  },
  cards: [
    { promptLabel: 'une habitude au futur', promptSound: 'Quand je rentrerai du travail, je prendrai une douche.', fr: 'Quand je rentre du travail, je prends une douche.', ipa: '/kɑ̃ ʒə ʁɑ̃tʁ dy tʁa.vaj ʒə pʁɑ̃.zyn duʃ/', tip: 'Tu parles de chaque soir, pas de ce soir. EN: every evening, not this evening.' },
    { promptLabel: 'une vérité au futur', promptSound: 'Lorsque le soleil se couchera, la place se videra.', fr: 'Lorsque le soleil se couche, la place se vide.', ipa: '/lɔʁs.kə lə sɔ.lɛj sə kuʃ la plas sə vid/', tip: 'Ce qui est vrai chaque soir reste au présent. EN: what is true every evening stays present.' },
    { promptLabel: 'un souvenir au futur', promptSound: 'Quand je serai étudiant, je travaillerai le samedi.', fr: 'Quand j’étais étudiant, je travaillais le samedi.', ipa: '/kɑ̃ ʒe.tɛ.ze.ty.djɑ̃ ʒə tʁa.va.jɛ lə sam.di/', tip: 'Le moment est derrière toi : imparfait des deux côtés. EN: the moment is behind you.' },
    { promptLabel: 'un projet au présent', promptSound: 'Quand je suis à la retraite, je voyage.', fr: 'Quand je serai à la retraite, je voyagerai.', ipa: '/kɑ̃ ʒə sə.ʁe a la ʁə.tʁɛt ʒə vwa.jaʒ.ʁe/', tip: 'Ici le moment est bien devant toi. EN: here the moment really is ahead.' },
    { promptLabel: 'un fait unique au présent', promptSound: 'Quand le film commence, la salle devient silencieuse.', fr: 'Quand le film a commencé, la salle est devenue silencieuse.', ipa: '/kɑ̃ lə film a kɔ.mɑ̃.se la sal ɛ dəv.ny si.lɑ̃.sjøz/', tip: 'Un soir précis, pas tous les soirs. EN: one particular evening.' },
    { promptLabel: 'la bonne habitude', promptSound: 'Pendant que je travaillerai, j’écouterai la radio.', fr: 'Pendant que je travaille, j’écoute la radio.', ipa: '/pɑ̃.dɑ̃ kə ʒə tʁa.vaj ʒe.kut la ʁa.djo/', tip: 'C’est ce que tu fais d’habitude. EN: this is what you usually do.' },
  ],
  drill: [
    { promptSay: 'Quand je ... du travail, je prends une douche. (rentrer, chaque soir)', opts: ['rentre', 'rentrerai'], correct: 0 },
    { promptSay: 'Quand je ... à la retraite, je voyagerai. (être, plus tard)', opts: ['suis', 'serai'], correct: 1 },
    { promptSay: 'Quand j’... étudiant, je travaillais le samedi. (être)', opts: ['étais', 'serai'], correct: 0 },
    { promptSay: 'Dès que le réveil ... , je me lève. (sonner, chaque matin)', opts: ['sonnera', 'sonne'], correct: 1 },
    { promptSay: 'Dès que je ... , je te le dirai. (finir, ce soir)', opts: ['finirai', 'finis'], correct: 0 },
    { promptSay: 'Quand il ... , je prends le métro. (pleuvoir, à chaque fois)', opts: ['pleuvra', 'pleut'], correct: 1 },
    { promptSay: 'Quand tu ... faim, tu me le diras. (avoir, tout à l’heure)', opts: ['auras', 'as'], correct: 0 },
    { promptSay: 'Pendant que je ... , j’écoute la radio. (travailler, d’habitude)', opts: ['travaillerai', 'travaille'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot ne décide de rien' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases poussées dans le mauvais moment' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-07-piege-moment'),
  say: REFRAME,
  terms: ['charniere', 'verite'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le décideur', 'Qui décide du temps du verbe après quand ?', ['le moment dont tu parles', 'le mot quand'], 0,
    'La charnière ne commande rien. EN: the hinge commands nothing.'),
  ctl('L’habitude', '« Dès que le réveil sonne, je me lève. » Ça se passe...', ['demain matin', 'chaque matin'], 1,
    'Deux présents : à chaque fois. EN: two presents, every time.'),
  ctl('Le souvenir', 'Pour une habitude d’école, terminée, quel temps ?', ['le futur', 'l’imparfait', 'le présent'], 1,
    `Deux imparfaits, comme dans ${refFr('b1.02')}. EN: two imparfaits, as in lesson 2 in B1.`),
], ['charniere', 'verite']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La même charnière, un autre moment',
    opener: {
      line: 'Karim ouvre sa boulangerie chaque matin, et pas un seul verbe n’est au futur : ici tu apprends quand quand ne l’appelle pas. EN: Karim opens his bakery every morning with not one future verb: here you learn when quand does not call for it.',
      imageRef: 'lessons/futur-usage/act04.jpg',
    },
    sections: [],
    milestone: 'Tu reconnais une habitude, une vérité et un souvenir, et tu ne leur mets plus de futur. EN: You recognise a habit, a general truth and a memory, and you stop putting a future on them.',
    estScreens: 31, restPoints: ['a4-exemples'],
  },
  sections: [A4_LECTURE, A4_REGLE, A4_CONSTRUIRE, A4_EXEMPLES, A4_ECOUTE, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — SI + PRÉSENT, JAMAIS LE FUTUR
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'L’invitation de samedi',
  frSub: 'Rien n’est encore sûr',
  setting: 'Deux amies s’écrivent, à Abidjan. Aïcha veut inviter du monde samedi, mais elle attend deux réponses avant de décider.',
  bubbles: [
    { from: 'narrator', fr: 'Aïcha prépare un repas pour samedi. Elle ne sait pas encore combien de personnes viendront.', en: 'Aïcha is planning a meal for Saturday. She does not know yet how many people will come.' },
    { from: 'coach', fr: 'Si tu viens demain, je préparerai un gâteau.', en: 'If you come tomorrow, I will make a cake.', warn: 'viens au présent, préparerai au futur' },
    { from: 'user', fr: 'Si j’ai le temps, je passerai te voir.', en: 'If I have time, I will drop by.' },
    { from: 'coach', fr: 'Et si tu m’aides, nous finirons plus vite.', en: 'And if you help me, we will finish faster.' },
    { from: 'user', fr: 'Si le train est à l’heure, nous serons là à midi.', en: 'If the train is on time, we will be there at noon.' },
    { from: 'coach', fr: 'Regarde bien : après si, pas un seul futur. Il est toujours dans l’autre moitié.', en: 'Look closely: after si, not one future. It is always in the other half.', warn: 'Quatre phrases, zéro futur après si' },
  ],
  closing: { fr: 'Le futur attend de l’autre côté de la virgule.', en: 'The future waits on the other side of the comma.' },
  audio: REC('rec-b1-07-invitation'),
  say: REFRAME,
  terms: ['condition', 'possible'],
};

const A5_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-si',
  title: 'Après si, le présent',
  frSub: 'La règle que le français ne casse jamais',
  hint: 'Quatre cartes. Cherche le futur : il n’est jamais après si.',
  audio: REC('rec-b1-07-si-regle'),
  say: REFRAME,
  terms: ['condition', 'possible'],
  cards: [
    {
      head: 'La forme de base',
      label: 'si + présent, futur',
      fr: 'Si tu viens demain, je préparerai un gâteau.',
      sub: '[see tü vyehⁿ duh-MEHⁿ zhuh pray-pa-ruh-REH uhⁿ ga-TOH]',
      body: 'Ta venue n’est pas sûre, donc elle reste au présent. Le gâteau, lui, est une promesse : futur. EN: the uncertain half stays present; the promise takes the future.',
    },
    {
      head: 'L’ordre peut changer',
      label: 'futur, si + présent',
      fr: 'Je passerai te voir si j’ai le temps.',
      sub: '[zhuh pass-REH tuh vwar see zhay luh TAHⁿ]',
      body: 'Tu peux commencer par la promesse. La moitié en si reste au présent où qu’elle soit. EN: the si half stays present wherever it sits.',
    },
    {
      head: 'Ce que l’anglais permet et pas le français',
      label: 'jamais si + futur',
      fr: 'Si tu m’aides, nous finirons plus vite.',
      sub: '[see tü MEHD noo fee-nee-ROHⁿ plü VEET]',
      body: 'En anglais, if you will help me existe dans certains cas. En français, jamais. EN: English allows if you will help in some cases; French never does.',
    },
    {
      head: `Ce que ${FUT_IRREG_REF} t’a déjà donné`,
      label: Cap(FUT_IRREG_REF),
      fr: 'je serai · j’aurai · je ferai · j’irai',
      sub: '[zhuh suh-REH] · [zho-REH] · [zhuh fuh-REH] · [zhee-REH]',
      body: `« ${B106_REFRAME} » Ces quatre-là reviennent dans presque chaque condition. EN: ${B106_REFRAME_EN} These four come back in almost every condition.`,
    },
  ],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Six conditions réelles',
  examples: [
    ex(E(470), 'est au présent, serons au futur'),
    ex(E(472), 'partez au présent, éviterez au futur'),
    ex(E(475), 's’il fait : le présent se cache dans l’élision'),
    ex(E(478), 'rate au présent, prendrai au futur'),
    ex('fr.b1.universite.004', 'réussis au présent, passerai au futur'),
    ex('fr.b1.affaires.004', 'obtiens au présent, serai au futur'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Pose la condition',
  groups: [
    grp('La condition, au présent', [
      it(E(468), 'viens : la venue n’est pas sûre'),
      it(E(469), 'ai : le temps n’est pas sûr'),
      it(E(482), 'est : l’accord n’est pas sûr'),
      it('fr.b1.sports-et-loisirs.077', 't’entraînes : à toi de décider'),
    ], chk(
      '« Si tu ... demain, je préparerai un gâteau. » (venir)',
      ['viens', 'viendras'],
      0,
      'Après si, jamais le futur. Le verbe reste au présent. EN: never the future after si.',
    )),
    grp('La suite, au futur', [
      it(E(471), 'finirons : la promesse'),
      it(E(484), 'arriveras : le résultat'),
      it(E(485), 'sera : le prix'),
      it('fr.b1.maison.069', 'aiderai : l’échange'),
    ], chk(
      '« Si tu ranges ta chambre, je t’... à peindre le salon. » (aider)',
      ['aide', 'aiderai'],
      1,
      'L’autre moitié porte tout le futur de la phrase. EN: the other half carries the whole future.',
    )),
    ctl('La règle', 'Peut-on écrire « si j’aurai le temps » ?', ['non, jamais', 'oui, pour insister'], 0,
      'C’est la seule règle absolue de la leçon. EN: this is the one absolute rule here.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'deuxfois'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs après si',
  errors: [
    { wrong: 'Si tu viendras demain, je préparerai un gâteau.', right: 'Si tu viens demain, je préparerai un gâteau.', why: 'Normal : les deux moitiés parlent bien de demain, et l’acte 2 vient d’apprendre à doubler le futur. Après si, on ne le double pas. EN: both halves do point at tomorrow; si is the one place you do not double the future.' },
    { wrong: 'Si j’aurai le temps, je passerai te voir.', right: 'Si j’ai le temps, je passerai te voir.', why: 'Le verbe avoir au futur sonne juste ailleurs. Ici il ferme la porte que si laisse ouverte. EN: correct elsewhere, wrong after si.' },
    { wrong: 'Si le train sera à l’heure, nous serons là à midi.', right: 'Si le train est à l’heure, nous serons là à midi.', why: 'Deux futurs se répondent bien dans une phrase avec quand. Avec si, seul le second reste. EN: two futures work after quand, not after si.' },
    { wrong: 'Si tu m’aiderais, nous finirions plus vite.', right: 'Si tu m’aides, nous finirons plus vite.', why: `Cette forme existe et elle est ${SI_UNREAL_REF}. Elle dit « ce n’est pas le cas », pas « c’est possible ». EN: that form exists and means it is not the case.` },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'possible'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris les conditions que tu entends',
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A5_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a5-flash',
  layer: 'core',
  title: 'Huit conditions à garder en tête',
  cards: [
    { front: 'if you come tomorrow', back: 'si tu viens demain', say: 'Si tu viens demain, je préparerai un gâteau.' },
    { front: 'if I have time', back: 'si j’ai le temps', say: 'Si j’ai le temps, je passerai te voir.' },
    { front: 'if the weather is nice', back: 's’il fait beau', say: 'S’il fait beau, nous irons à la plage.' },
    { front: 'if it snows', back: 's’il neige', say: 'S’il neige, les écoles fermeront.' },
    { front: 'if you help me', back: 'si tu m’aides', say: 'Si tu m’aides, nous finirons plus vite.' },
    { front: 'if we do not find a space', back: 'si nous ne trouvons pas de place', say: 'Si nous ne trouvons pas de place, nous marcherons.' },
    { front: 'if my boss agrees', back: 'si mon patron est d’accord', say: 'Si mon patron est d’accord, je partirai plus tôt.' },
    { front: 'if it does not work', back: 'si ça ne marche pas', say: 'Si ça ne marche pas, on essaiera autrement.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La règle', 'Quel temps juste après si, dans une condition réelle ?', ['le futur', 'le présent'], 1,
    'Toujours le présent. C’est la seule règle absolue ici. EN: always the present.'),
  ctl('L’autre moitié', '« Si tu ranges ta chambre, je t’... à peindre. » (aider)', ['aiderai', 'aide'], 0,
    'Le futur vit de l’autre côté de la virgule. EN: the future lives past the comma.'),
  ctl('L’ordre', 'Peut-on mettre la moitié en si à la fin ?', ['non, jamais', 'oui, elle passe au futur', 'oui, elle reste au présent'], 2,
    '« Je passerai te voir si j’ai le temps. » EN: the si half stays present wherever it sits.'),
], ['condition', 'deuxfois']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Si + présent, jamais le futur',
    opener: {
      line: 'Une invitation, deux réponses qui manquent, et une règle que le français ne casse jamais : après si, pas de futur. EN: An invitation, two missing answers, and a rule French never breaks: no future after si.',
      imageRef: 'lessons/futur-usage/act05.jpg',
    },
    sections: [],
    milestone: 'Tu poses une condition réelle sans jamais mettre le futur après si, dans les deux ordres. EN: You build a real condition and never put the future after si, in either order.',
    estScreens: 33, restPoints: ['a5-construire', 'a5-dictee'],
  },
  sections: [A5_HISTOIRE, A5_REGLE, A5_EXEMPLES, A5_CONSTRUIRE, A5_ERREURS, A5_DICTEE, A5_FLASH, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — TROIS SUITES APRÈS SI
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Promesse, vérité ou consigne',
  frSub: 'Écoute la deuxième moitié',
  lines: [
    ln(E(486)), ln(E(468)), ln(E(489)), ln(E(496)),
    ln(E(490)), ln(E(485)), ln(E(495)), ln(E(493)),
  ],
  questions: [
    { q: 'Première phrase : c’est...', opts: ['une promesse', 'une vérité'], correct: 1, why: 'Deux présents : ce qui arrive à chaque fois. EN: two presents say every time.' },
    { q: 'Deuxième phrase : la deuxième moitié est...', opts: ['au futur', 'au présent'], correct: 0, why: '« je préparerai » : une promesse. EN: a promise takes the future.' },
    { q: 'Troisième phrase : c’est...', opts: ['une consigne', 'une vérité', 'une promesse'], correct: 0, why: 'Un impératif : on te dit quoi faire. EN: an imperative tells you what to do.' },
    { q: 'Sixième phrase : « ce sera moins cher ». On te promet quelque chose ?', opts: ['non', 'oui'], correct: 1, why: 'Le futur ouvre une promesse de prix. EN: the future opens a promise.' },
    { q: 'Combien de ces huit phrases donnent un ordre ?', opts: ['une', 'trois', 'six'], correct: 1, why: 'Trois impératifs : ferme, levez, sortez. EN: three imperatives.' },
  ],
  audio: REC('rec-b1-07-consignes-ecoute'),
  say: REFRAME,
  terms: ['condition', 'consigne'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Trois suites possibles',
  frSub: 'Le même si, trois messages',
  hint: 'Quatre cartes. La première moitié ne change jamais.',
  audio: REC('rec-b1-07-trois-suites'),
  say: REFRAME,
  terms: ['condition', 'verite', 'consigne'],
  cards: [
    {
      head: 'Une promesse',
      label: 'si + présent, futur',
      fr: 'Si tu viens demain, je préparerai un gâteau.',
      sub: '[see tü vyehⁿ duh-MEHⁿ zhuh pray-pa-ruh-REH uhⁿ ga-TOH]',
      body: 'Tu annonces ce que tu feras. C’est la forme des projets et des accords. EN: you announce what you will do: the shape of plans and deals.',
    },
    {
      head: 'Une vérité',
      label: 'si + présent, présent',
      fr: 'Si on chauffe l’eau à cent degrés, elle bout.',
      sub: '[see ohⁿ SHOHF loh a sahⁿ duh-GRAY ehl BOO]',
      body: 'Rien n’est promis : tu dis ce qui arrive à chaque fois. Recettes, machines, corps humain. EN: nothing promised, just what happens every time.',
    },
    {
      head: 'Une consigne',
      label: 'si + présent, impératif',
      fr: 'Si l’alarme sonne, sortez par la porte de gauche.',
      sub: '[see la-LARM SON sor-TAY par la port duh GOHSH]',
      body: 'Tu donnes une instruction. C’est la forme des panneaux et des notices. EN: an instruction: the shape of signs and notices.',
    },
    {
      head: 'Ce qui ne change jamais',
      label: 'la moitié en si',
      fr: 'si tu viens · si on chauffe · si l’alarme sonne',
      sub: '[see tü VYEHⁿ] · [see ohⁿ SHOHF] · [see la-LARM SON]',
      body: 'Trois messages différents, une seule première moitié : si plus le présent. EN: three different messages, one first half.',
    },
  ],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  sheetId: 'sheet-si',
  title: 'Six phrases en si',
  cols: ['La suite', 'Ce que ça dit', 'Exemple court'],
  rows: [
    { cells: ['futur', 'une promesse', 'je préparerai'], say: 'Si tu viens demain, je préparerai un gâteau.', detail: { title: 'si + présent, futur', body: 'La forme des projets : tu annonces ce que tu feras si la condition se réalise. EN: the plan shape: what you will do if it happens.', say: 'Si le colis arrive aujourd’hui, je te préviendrai.' } },
    { cells: ['futur', 'une conséquence', 'le plat sera salé'], say: 'Si tu ajoutes trop de sel, le plat sera trop salé.', detail: { title: 'la conséquence', body: 'Même forme, autre ton : tu préviens au lieu de promettre. EN: same shape, a warning instead of a promise.', say: 'Si tu prends ce train, tu arriveras avant nous.' } },
    { cells: ['présent', 'une vérité', 'elle bout'], say: 'Si on chauffe l’eau à cent degrés, elle bout.', detail: { title: 'si + présent, présent', body: 'Ce qui arrive à chaque fois, sans promesse et sans date. EN: what happens every time, no promise, no date.', say: 'Si tu bois du café le soir, tu dors mal.' } },
    { cells: ['présent', 'une information', 'la livraison est gratuite'], say: 'Si on paie en ligne, la livraison est gratuite.', detail: { title: 'l’information', body: 'Les conditions d’un service, d’un tarif, d’un restaurant. EN: the terms of a service, a price, a restaurant.', say: 'Si vous êtes végétarien, ce restaurant propose plusieurs options.' } },
    { cells: ['impératif', 'une consigne', 'ferme la fenêtre'], say: 'Si tu as froid, ferme la fenêtre.', detail: { title: 'si + présent, impératif', body: 'Un ordre ou un conseil, tout de suite après la condition. EN: an order or a piece of advice, straight after the condition.', say: 'Si le bébé pleure, appelle-moi.' } },
    { cells: ['impératif', 'une sécurité', 'sortez par la gauche'], say: 'Si l’alarme sonne, sortez par la porte de gauche.', detail: { title: 'la consigne de sécurité', body: 'Le vouvoiement et l’impératif : la langue des panneaux. EN: vous plus imperative: the language of signs.', say: 'Si la porte est fermée, sonnez deux fois.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['condition', 'verite', 'consigne'],
};

const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Trois suites, six phrases',
  examples: [
    ex(E(487), 'vérité : à chaque mélange'),
    ex(E(488), 'vérité : ce que dit le voyant'),
    ex('fr.b1.cuisine.088', 'information : ce qu’on peut faire'),
    ex(E(491), 'consigne : un message court'),
    ex(E(492), 'consigne : un service à rendre'),
    ex(E(499), 'consigne : le panneau d’une porte'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verite', 'consigne'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Choisis la suite',
  groups: [
    grp('Ce qui est vrai chaque fois', [
      it(E(486), 'l’eau bout à chaque fois'),
      it(E(496), 'le café du soir, à chaque fois'),
      it(E(500), 'le bus, à chaque blocage'),
      it('fr.b1.cuisine.078', 'la recette, à chaque fois'),
    ], chk(
      '« Si tu bois du café le soir, tu ... mal. » (dormir)',
      ['dors', 'dormiras'],
      0,
      'Une vérité sur ton corps, pas une promesse pour ce soir. EN: a truth, not a promise.',
    )),
    grp('Ce qu’il faut faire', [
      it(E(489), 'ferme : une instruction'),
      it(E(493), 'sortez : une consigne de sécurité'),
      it(E(494), 'demande : un conseil'),
      it(E(501), 'attends-moi : un message court'),
    ], chk(
      '« Si vous avez une question, ... la main. » (lever)',
      ['vous lèverez', 'vous levez', 'levez'],
      2,
      'Un impératif : on te dit quoi faire tout de suite. EN: an imperative tells you what to do.',
    )),
    ctl('La première moitié', 'Dans ces trois formes, qu’est-ce qui ne change jamais ?', ['la deuxième moitié', 'si plus le présent'], 1,
      'Trois messages, une seule entrée. EN: three messages, one entrance.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['verite', 'consigne'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Le futur qui traverse la virgule',
  rule: {
    title: 'Il reste du bon côté',
    body: 'Quand la phrase entière parle de demain, la main veut écrire le futur deux fois. Après si, le français le refuse : il attend l’autre moitié. EN: the whole sentence points at tomorrow, so the hand wants two futures; after si, French waits.',
  },
  cards: [
    { promptLabel: 'si + futur', promptSound: 'Si tu viendras demain, je préparerai un gâteau.', fr: 'Si tu viens demain, je préparerai un gâteau.', ipa: '/si ty vjɛ̃ də.mɛ̃ ʒə pʁe.pa.ʁə.ʁe œ̃ ɡɑ.to/', tip: 'Le futur est déjà là, après la virgule. EN: the future is already there, past the comma.' },
    { promptLabel: 'si + aurai', promptSound: 'Si j’aurai le temps, je passerai te voir.', fr: 'Si j’ai le temps, je passerai te voir.', ipa: '/si ʒe lə tɑ̃ ʒə pas.ʁe tə vwaʁ/', tip: 'avoir ne fait pas exception. EN: avoir is no exception.' },
    { promptLabel: 'si + sera', promptSound: 'Si le train sera à l’heure, nous serons là à midi.', fr: 'Si le train est à l’heure, nous serons là à midi.', ipa: '/si lə tʁɛ̃.ɛ.ta lœʁ nu sə.ʁɔ̃ la a mi.di/', tip: 'être non plus. EN: nor is être.' },
    { promptLabel: 'la consigne au futur', promptSound: 'Si tu auras froid, tu fermeras la fenêtre.', fr: 'Si tu as froid, ferme la fenêtre.', ipa: '/si ty a fʁwa fɛʁm la fə.nɛtʁ/', tip: 'Un ordre se donne à l’impératif. EN: an order is given as an imperative.' },
    { promptLabel: 'la vérité au futur', promptSound: 'Si on chauffera l’eau à cent degrés, elle bouillira.', fr: 'Si on chauffe l’eau à cent degrés, elle bout.', ipa: '/si ɔ̃ ʃof lo a sɑ̃ də.ɡʁe ɛl bu/', tip: 'Une vérité n’a pas de date, donc pas de futur. EN: a truth has no date.' },
    { promptLabel: 'si + conditionnel', promptSound: 'Si tu m’aiderais, nous finirions plus vite.', fr: 'Si tu m’aides, nous finirons plus vite.', ipa: '/si ty mɛd nu fi.ni.ʁɔ̃ ply vit/', tip: `Cette forme existe et elle est ${SI_UNREAL_REF}. EN: that form exists and belongs to a later lesson.` },
  ],
  drill: [
    { promptSay: 'Si tu ... demain, je préparerai un gâteau. (venir)', opts: ['viens', 'viendras'], correct: 0 },
    { promptSay: 'Si j’... le temps, je passerai te voir. (avoir)', opts: ['aurai', 'ai'], correct: 1 },
    { promptSay: 'Si tu as froid, ... la fenêtre. (fermer)', opts: ['ferme', 'tu fermeras'], correct: 0 },
    { promptSay: 'Si on chauffe l’eau à cent degrés, elle ... . (bouillir)', opts: ['bouillira', 'bout'], correct: 1 },
    { promptSay: 'Si le train ... à l’heure, nous serons là à midi. (être)', opts: ['est', 'sera'], correct: 0 },
    { promptSay: 'Si vous avez une question, ... la main. (lever)', opts: ['vous lèverez', 'levez'], correct: 1 },
    { promptSay: 'Si tu ranges ta chambre, je t’... à peindre. (aider)', opts: ['aiderai', 'aide'], correct: 0 },
    { promptSay: 'Si tu bois du café le soir, tu ... mal. (dormir)', opts: ['dormiras', 'dors'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Il reste du bon côté' },
    { label: 'Six cartes', kind: 'cards', title: 'Six futurs du mauvais côté' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-07-piege-si'),
  say: REFRAME,
  terms: ['condition', 'consigne'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La promesse', 'Pour annoncer ce que tu feras, quelle suite après si + présent ?', ['un futur', 'un présent', 'un impératif'], 0,
    'Le futur annonce ce que tu feras. EN: the future announces what you will do.'),
  ctl('La vérité', '« Si on paie en ligne, la livraison ... gratuite. » (être)', ['est', 'sera'], 0,
    'Une information vraie à chaque fois : présent. EN: true every time, so present.'),
  ctl('La consigne', 'Sur un panneau, quelle forme suit la condition ?', ['un futur', 'un impératif'], 1,
    '« Si l’alarme sonne, sortez par la porte de gauche. » EN: signs use the imperative.'),
], ['verite', 'consigne']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Trois suites après si',
    opener: {
      line: 'La même moitié en si peut promettre, expliquer ou ordonner : ici tu choisis laquelle des trois. EN: The same si half can promise, explain or order: here you choose which of the three.',
      imageRef: 'lessons/futur-usage/act06.jpg',
    },
    sections: [],
    milestone: 'Tu construis les trois formes réelles après si : une promesse, une vérité et une consigne. EN: You build all three real shapes after si: a promise, a truth and an instruction.',
    estScreens: 32, restPoints: ['a6-exemples'],
  },
  sections: [A6_ECOUTE, A6_CARTES, A6_TABLE, A6_EXEMPLES, A6_CONSTRUIRE, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — QUAND OU SI
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Deux projets, deux mots',
  frSub: 'Ce qui est sûr et ce qui ne l’est pas',
  setting: 'Un couple à Namur parle de l’année qui vient. L’un des deux part à la retraite en juin ; l’autre attend encore une réponse.',
  bubbles: [
    { from: 'narrator', fr: 'La retraite de Yann est datée. Le poste de Sophie, lui, dépend d’un entretien.', en: 'Yann’s retirement has a date. Sophie’s job depends on an interview.' },
    { from: 'user', fr: 'Quand je partirai à la retraite, je déménagerai.', en: 'When I retire, I will move house.', warn: 'quand : la date existe déjà' },
    { from: 'coach', fr: 'Et moi, si j’obtiens ce poste, je serai très motivée.', en: 'And if I get this job, I will be very motivated.', warn: 'si : rien n’est décidé' },
    { from: 'user', fr: 'Quand l’été arrivera, nous ouvrirons la terrasse.', en: 'When summer comes, we will open the terrace.' },
    { from: 'coach', fr: 'S’il fait assez chaud, nous ouvrirons la terrasse.', en: 'If it is warm enough, we will open the terrace.' },
    { from: 'narrator', fr: 'Même deuxième moitié, deux entrées différentes. L’été viendra ; la chaleur, on verra.', en: 'The same second half, two different openings. Summer will come; the heat is another matter.' },
  ],
  closing: { fr: 'Choisis le mot qui dit la vérité sur ton agenda.', en: 'Pick the word that tells the truth about your diary.' },
  audio: REC('rec-b1-07-deux-plans'),
  say: REFRAME,
  terms: ['certitude', 'possible'],
};

const A7_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-quand-si',
  title: 'Sûr, ou seulement possible',
  frSub: 'quand contre si',
  hint: 'Quatre cartes. La deuxième moitié ne bouge pas.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude', 'possible'],
  cards: [
    {
      head: 'Le moment viendra',
      label: 'quand',
      fr: 'Quand l’été arrivera, nous ouvrirons la terrasse.',
      sub: '[kahⁿ lay-TAY a-reev-RA noo-zoo-vree-ROHⁿ la teh-RASS]',
      body: 'Tu ne sais peut-être pas le jour, mais l’été arrivera. Le doute porte sur la date, pas sur la chose. EN: the doubt is about the date, not about whether it happens.',
    },
    {
      head: 'Ce n’est pas sûr',
      label: 'si',
      fr: 'S’il fait assez chaud, nous ouvrirons la terrasse.',
      sub: '[seel feh-ta-say SHOH noo-zoo-vree-ROHⁿ la teh-RASS]',
      body: 'La chaleur peut ne jamais venir. Le doute porte sur la chose elle-même. EN: the doubt is about the thing itself.',
    },
    {
      head: 'Deux temps différents',
      label: 'la conséquence',
      fr: 'quand l’été arrivera · s’il fait assez chaud',
      sub: '[kahⁿ lay-TAY a-reev-RA] · [seel feh-ta-say SHOH]',
      body: 'C’est pour ça que l’un prend le futur et l’autre le présent. Le sens commande le temps. EN: that is why one takes the future and the other the present.',
    },
    {
      head: 'Le test en une question',
      label: 'sûr ou pas',
      fr: 'Est-ce que ça arrivera de toute façon ?',
      sub: '[ehs kuh sa a-reev-RA duh toot fa-SOHⁿ]',
      body: 'Oui : quand, et le futur. Non : si, et le présent. Une seule question, tout le temps. EN: yes means quand and the future; no means si and the present.',
    },
  ],
};

const A7_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-paires',
  layer: 'core',
  title: 'La même phrase, deux entrées',
  examples: [
    ex(E(502), 'la retraite viendra : quand'),
    ex(E(503), 'partir plus tôt : ce n’est pas sûr'),
    ex(E(506), 'le diplôme est prévu : quand'),
    ex(E(507), 'le diplôme dépend de l’examen : si'),
    ex(E(513), 'nous nous verrons : c’est prévu'),
    ex(E(514), 'ce soir : peut-être'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude', 'possible'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Quand ou si',
  groups: [
    grp('Ça arrivera de toute façon', [
      it(E(504), 'il rentrera, tôt ou tard'),
      it(E(508), 'l’été arrivera'),
      it(E(510), 'le bébé naîtra'),
      it(E(515), 'le mois d’août viendra'),
    ], chk(
      '« ... le bébé naîtra, nous changerons d’appartement. » Quel mot ?',
      ['Quand', 'Si'],
      0,
      'La naissance est attendue : quand, et le futur des deux côtés. EN: the birth is expected, so quand.',
    )),
    grp('Ce n’est pas sûr', [
      it(E(505), 'rentrer à temps : peut-être'),
      it(E(509), 'assez chaud : peut-être'),
      it(E(511), 'plus tôt : peut-être'),
      it(E(516), 'partir en août : pas décidé'),
    ], chk(
      '« ... il fait assez chaud, nous ouvrirons la terrasse. » Quel mot ?',
      ['Quand', 'S’il', 'Dès qu’il'],
      1,
      'La chaleur n’est pas promise : si, et le présent. EN: the heat is not promised, so si.',
    )),
    ctl('Le test', 'Une seule question sépare les deux. Laquelle ?', ['Est-ce que c’est loin ?', 'Est-ce que ça arrivera de toute façon ?'], 1,
      'Oui : quand. Non : si. EN: yes means quand, no means si.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude', 'possible'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Sûr ou pas sûr',
  frSub: 'Écoute le premier mot, puis le temps',
  lines: [
    ln(E(502)), ln(E(503)), ln(E(508)), ln(E(509)),
    ln(E(513)), ln(E(514)), ln(E(510)), ln(E(511)),
  ],
  questions: [
    { q: 'Première phrase : la retraite, c’est...', opts: ['sûr', 'peut-être'], correct: 0, why: 'Quand plus le futur : ça viendra. EN: quand plus a future means it will come.' },
    { q: 'Deuxième phrase : partir plus tôt, c’est...', opts: ['sûr', 'peut-être'], correct: 1, why: 'Si plus le présent : ce n’est pas décidé. EN: si plus a present means undecided.' },
    { q: 'Troisième et quatrième phrases : la deuxième moitié est...', opts: ['la même', 'différente'], correct: 0, why: '« nous ouvrirons la terrasse » deux fois. Seule l’entrée change. EN: only the opening changes.' },
    { q: 'Sixième phrase : « Si je te vois ce soir... ». Vous vous verrez ?', opts: ['c’est prévu', 'on ne sait pas'], correct: 1, why: 'Si laisse la porte ouverte. EN: si leaves the door open.' },
    { q: 'Comment reconnais-tu une phrase en si, à l’oreille ?', opts: ['au présent de la première moitié', 'au futur de la première moitié'], correct: 0, why: 'Après si, jamais le r du futur. EN: after si you never hear the future r.' },
  ],
  audio: REC('rec-b1-07-sur-ou-pas'),
  say: REFRAME,
  terms: ['certitude', 'possible'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre confusions entre quand et si',
  errors: [
    { wrong: 'Si je partirai à la retraite, je déménagerai.', right: 'Quand je partirai à la retraite, je déménagerai.', why: 'Deux erreurs à la fois : un futur après si, et un doute sur une chose qui arrivera. EN: a future after si, and doubt about something certain.' },
    { wrong: 'Quand il fait assez chaud, nous ouvrirons la terrasse.', right: 'S’il fait assez chaud, nous ouvrirons la terrasse.', why: 'Correct comme habitude, faux comme projet : la phrase dirait chaque fois qu’il fait chaud. EN: fine as a habit, wrong as a plan.' },
    { wrong: 'Quand tu as ton diplôme, tu chercheras du travail.', right: 'Quand tu auras ton diplôme, tu chercheras du travail.', why: 'Le doute est sur la date, pas sur le diplôme, donc quand. Mais alors les deux moitiés prennent le futur. EN: quand is right, so both halves take the future.' },
    { wrong: 'Si l’été arrivera, nous ouvrirons la terrasse.', right: 'Quand l’été arrivera, nous ouvrirons la terrasse.', why: 'L’été n’est pas une condition. Le mettre en si le rend presque drôle. EN: summer is not a condition; si makes it almost comic.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['certitude', 'condition'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le test', '« L’été arrivera de toute façon. » Donc tu écris...', ['si l’été arrive', 'quand l’été arrivera'], 1,
    'Oui à la question, donc quand et le futur. EN: yes to the question means quand.'),
  ctl('Le doute', 'Avec si, le doute porte sur...', ['la chose elle-même', 'la date'], 0,
    'Avec quand, le doute est sur la date seulement. EN: with quand only the date is open.'),
  ctl('Le temps', 'Après si, même pour un projet très lointain, quel temps ?', ['le futur', 'le présent'], 1,
    'La distance ne change rien : après si, le présent. EN: distance changes nothing.'),
], ['certitude', 'possible']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Quand ou si',
    opener: {
      line: 'L’été arrivera de toute façon, la chaleur non : ici tu choisis le mot qui dit la vérité sur ton agenda. EN: Summer will come whatever happens, the heat may not: here you pick the word that tells the truth about your diary.',
      imageRef: 'lessons/futur-usage/act07.jpg',
    },
    sections: [],
    milestone: 'Tu choisis entre quand et si par une seule question, et le temps du verbe suit tout seul. EN: You choose between quand and si with one question, and the tense follows by itself.',
    estScreens: 29, restPoints: ['a7-construire'],
  },
  sections: [A7_HISTOIRE, A7_REGLE, A7_PAIRES, A7_CONSTRUIRE, A7_ECOUTE, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — À L'ORAL
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Au café, avant le film',
  frSub: 'Comment on le dit vraiment',
  setting: 'Deux amis à Lyon attendent un troisième. Tout se décide en parlant, et personne n’écrit rien.',
  bubbles: [
    { from: 'narrator', fr: 'Rien n’est écrit. Ils s’organisent à voix haute, comme on le fait vraiment.', en: 'Nothing is written down. They organise out loud, the way people really do.' },
    { from: 'coach', fr: 'Dès qu’il sera là, on va commencer.', en: 'As soon as he is here, we are going to start.', warn: 'sera : futur simple. va : futur proche' },
    { from: 'user', fr: 'Quand le film finira, on va rentrer à pied.', en: 'When the film ends, we are going to walk home.' },
    { from: 'coach', fr: 'Si tu veux, on va regarder ça ensemble.', en: 'If you like, we are going to look at it together.' },
    { from: 'user', fr: 'Je vais partir dans dix minutes.', en: 'I am going to leave in ten minutes.' },
    { from: 'coach', fr: 'Écoute bien : la moitié en quand garde toujours le futur simple.', en: 'Listen closely: the quand half always keeps the futur simple.', warn: 'Jamais « quand je vais arriver »' },
  ],
  closing: { fr: 'Deux futurs dans une phrase, et chacun à sa place.', en: 'Two futures in one sentence, each in its place.' },
  audio: REC('rec-b1-07-cafe-oral'),
  say: REFRAME,
  terms: ['oral', 'charniere'],
};

const A8_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Aller et l’infinitif, en parlant',
  frSub: 'Où il a le droit d’aller',
  hint: 'Quatre cartes. Regarde toujours la première moitié.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['oral', 'charniere'],
  cards: [
    {
      head: 'La deuxième moitié parle',
      label: 'futur proche',
      fr: 'Dès qu’il sera là, on va commencer.',
      sub: '[deh keel suh-ra LA ohⁿ va ko-mahⁿ-SAY]',
      body: 'À l’oral, la promesse prend souvent aller et l’infinitif. C’est plus court et plus proche. EN: in speech the promise often takes aller plus the infinitive.',
    },
    {
      head: 'La charnière ne bouge pas',
      label: 'futur simple',
      fr: 'Quand j’arriverai, je vais t’appeler tout de suite.',
      sub: '[kahⁿ zha-reev-REH zhuh veh ta-PLAY too duh SWEET]',
      body: 'On ne dit pas « quand je vais arriver ». La charnière garde le futur simple, toujours. EN: the hinge clause keeps the futur simple, always.',
    },
    {
      head: 'Après si aussi',
      label: 'si + présent',
      fr: 'Si tu veux, on va regarder ça ensemble.',
      sub: '[see tü VEU ohⁿ va ruh-gar-DAY sa ahⁿ-SAHⁿBL]',
      body: 'La règle de si ne bouge pas non plus : présent après si, futur proche après la virgule. EN: present after si, futur proche past the comma.',
    },
    {
      head: `Ce que ${PROCHE_REF} t’a déjà donné`,
      label: Cap(PROCHE_REF),
      fr: 'je vais partir · on va voir · il va pleuvoir',
      sub: '[zhuh veh par-TEER] · [ohⁿ va VWAR] · [eel va pleu-VWAR]',
      body: 'Tu connais déjà la forme. Cette leçon te dit seulement dans quelle moitié la poser. EN: you know the form; this lesson only says which half it may sit in.',
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Deux futurs, chacun à sa place',
  groups: [
    grp('La charnière, au futur simple', [
      it(E(518), 'arriverai, puis je vais t’appeler'),
      it(E(519), 'sera, puis on va commencer'),
      it(E(521), 'finira, puis on va rentrer'),
      it(E(528), 'seras, puis tu vas me faire signe'),
    ], chk(
      '« Quand je ... , je vais t’appeler. » (arriver)',
      ['arriverai', 'vais arriver'],
      0,
      'La charnière garde le futur simple, même à l’oral. EN: the hinge keeps the futur simple even in speech.',
    )),
    grp('La deuxième moitié, au futur proche', [
      it(E(520), 'après si, on va regarder'),
      it(E(524), 'après si, je vais expliquer'),
      it(E(525), 'après tant que, on va continuer'),
      it('fr.a2.heure-et-date.099', 'sinon tu vas oublier'),
    ], chk(
      '« Si elle appelle, je ... lui expliquer. » (aller)',
      ['irai', 'vais'],
      1,
      'Aller plus l’infinitif : la forme de la conversation. EN: aller plus infinitive: the conversational form.',
    )),
    ctl('Le test', 'Peut-on dire « quand je vais arriver, je vais t’appeler » ?', ['non, jamais dans la charnière', 'oui, à l’oral'], 0,
      'Le futur proche reste du côté de la promesse. EN: the futur proche stays on the promise side.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['oral', 'charniere'],
};

const A8_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a8-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu parles',
  hacks: [
    { hack: 'Commence par la charnière, et pose le futur simple avant de réfléchir à la suite.', why: 'C’est la moitié où l’erreur coûte le plus, et c’est celle que tu peux préparer. EN: the hinge half is where the error costs most and the one you can prepare.' },
    { hack: 'Si tu ne trouves pas le futur simple, prends aller et l’infinitif, mais seulement après la virgule.', why: 'La deuxième moitié accepte les deux formes ; la première n’en accepte qu’une. EN: the second half accepts both forms, the first accepts only one.' },
    { hack: 'Devant si, ralentis d’un quart de seconde et laisse sortir le présent.', why: 'L’erreur après si arrive à la vitesse de la parole, pas de la réflexion. EN: the si error happens at speaking speed, not at thinking speed.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['oral', 'condition'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Deux formes dans une phrase',
  frSub: 'Écoute où tombe aller',
  lines: [
    ln(E(518)), ln(E(519)), ln(E(522)), ln(E(520)),
    ln(E(526)), ln(E(525)), ln(E(529)), ln(E(531)),
  ],
  questions: [
    { q: 'Première phrase : quelle moitié prend aller ?', opts: ['celle en quand', 'la deuxième'], correct: 1, why: '« je vais t’appeler » : aller reste après la virgule. EN: aller stays past the comma.' },
    { q: 'Deuxième phrase : après « dès qu’il », tu entends...', opts: ['sera', 'va être'], correct: 0, why: 'La charnière garde le futur simple. EN: the hinge keeps the futur simple.' },
    { q: 'Quatrième phrase : après si, le verbe est...', opts: ['au futur proche', 'au présent'], correct: 1, why: '« Si tu veux » : la règle de si ne bouge pas. EN: the si rule does not move.' },
    { q: 'Cinquième phrase : c’est pour...', opts: ['dans un moment', 'l’année prochaine'], correct: 0, why: 'Le futur proche colle souvent à ce qui est tout près. EN: the futur proche often sits close by.' },
    { q: 'Combien de ces huit phrases ont aller plus un infinitif ?', opts: ['deux', 'toutes les huit'], correct: 1, why: 'Toutes : c’est l’acte du futur parlé. EN: all of them; this is the spoken act.' },
  ],
  audio: REC('rec-b1-07-oral-ecoute'),
  say: REFRAME,
  terms: ['oral'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La place', 'Où le futur proche a-t-il le droit d’aller ?', ['dans la deuxième moitié', 'dans la charnière'], 0,
    'Jamais après quand, dès que ou tant que. EN: never after quand, dès que or tant que.'),
  ctl('Après si', '« Si tu veux, on ... regarder ça ensemble. » (aller)', ['ira', 'va'], 1,
    'Présent après si, futur proche après la virgule. EN: present after si, futur proche past the comma.'),
  ctl('La charnière', '« Dès qu’il ... là, on va commencer. » (être)', ['va être', 'est', 'sera'], 2,
    'Futur simple dans la charnière, toujours. EN: futur simple in the hinge, always.'),
], ['oral', 'charniere']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'À l’oral',
    opener: {
      line: 'Personne n’écrit au café, et pourtant la moitié en quand ne change pas : ici tu apprends où aller a le droit d’entrer. EN: Nobody writes at a café, and still the quand half does not change: here you learn where aller may enter.',
      imageRef: 'lessons/futur-usage/act08.jpg',
    },
    sections: [],
    milestone: 'Tu parles de tes projets avec aller et l’infinitif, sans jamais l’amener dans la charnière. EN: You talk about your plans with aller plus the infinitive, and never carry it into the hinge clause.',
    estScreens: 24, restPoints: ['a8-hacks'],
  },
  sections: [A8_HISTOIRE, A8_REGLE, A8_CONSTRUIRE, A8_HACKS, A8_ECOUTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — DANS, EN, D'ICI
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le calendrier du chantier',
  frSub: 'Trois façons de dire quand',
  text: "Bonjour à tous. Voici où nous en sommes. Les plans arriveront dans une semaine, et le bureau les validera en deux jours. D'ici vendredi, tout sera prêt pour la commande. Le chantier commencera dans un mois, une fois que la mairie signera l'autorisation. Les ouvriers monteront la structure en trois semaines, ce qui est rapide pour un bâtiment de cette taille. Je serai de retour dans deux heures, donc écrivez-moi si quelque chose bloque. D'ici la fin du mois, je vous donnerai une réponse sur le budget. Dans quelques jours, vous recevrez le planning complet par courriel. Si le temps reste sec, nous finirons avant l'hiver ; s'il pleut beaucoup, nous perdrons deux semaines.",
  glossary: [
    { word: 'le chantier', en: 'the building site', note: 'L’endroit où l’on construit.' },
    { word: 'la mairie', en: 'the town hall', note: 'Le bureau de la ville, qui donne les autorisations.' },
    { word: 'la structure', en: 'the frame', note: 'La partie qui tient le bâtiment debout.' },
    { word: 'le planning', en: 'the schedule', note: 'La liste des dates, jour par jour.' },
    { word: 'bloque', en: 'gets stuck', note: 'Quelque chose bloque : ça n’avance plus.' },
  ],
  questions: [
    { q: 'Les plans arrivent quand, et le bureau met combien de temps ?', a: 'Les plans arrivent dans une semaine ; le bureau met deux jours, donc « en deux jours ».' },
    { q: 'Quelle différence entre « dans un mois » et « en trois semaines » ?', a: 'Dans un mois compte à partir de maintenant. En trois semaines, c’est le temps que prend le travail.' },
    { q: 'Que veut dire « D’ici vendredi » ?', a: 'Avant vendredi, à un moment ou à un autre. C’est une limite, pas une date exacte.' },
    { q: 'Quels verbes suivent les deux « si » de la dernière phrase ?', a: '« reste » et « pleut », tous les deux au présent. Après si, jamais le futur.' },
    { q: 'Pourquoi « une fois que la mairie signera » porte-t-il un futur ?', a: 'C’est une charnière, et la signature est devant nous : futur des deux côtés.' },
  ],
  audio: REC('rec-b1-07-chantier'),
  say: REFRAME,
  terms: ['delai', 'charniere'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-temps',
  title: 'Dans, en, d’ici',
  frSub: 'Trois mesures du temps',
  hint: 'Quatre cartes. Demande-toi d’où on compte.',
  audio: REC('rec-b1-07-delais'),
  say: REFRAME,
  terms: ['delai'],
  cards: [
    {
      head: 'On compte à partir de maintenant',
      label: 'dans + durée',
      fr: 'Je serai de retour dans deux heures.',
      sub: '[zhuh suh-REH duh ruh-TOOR dahⁿ deu-ZUHR]',
      body: 'Pose le doigt sur l’heure qu’il est, avance de deux heures : c’est là que ça se passe. EN: start from now and move forward by the stated length.',
    },
    {
      head: 'C’est le temps qu’il faut',
      label: 'en + durée',
      fr: 'Je finirai ce rapport en deux heures.',
      sub: '[zhuh fee-nee-REH suh ra-POR ahⁿ deu-ZUHR]',
      body: 'Tu ne dis pas quand tu commences. Tu dis combien de temps le travail prendra. EN: not when you start, but how long the work takes.',
    },
    {
      head: 'Avant cette limite',
      label: 'd’ici + date',
      fr: 'D’ici vendredi, tout sera prêt.',
      sub: '[dee-SEE vahⁿ-druh-DEE too suh-ra PREH]',
      body: 'Un jour ou l’autre avant vendredi. C’est la limite qui compte, pas le moment exact. EN: any time before Friday; the deadline is the point.',
    },
    {
      head: 'La même phrase, deux sens',
      label: 'dans contre en',
      fr: 'Je pars dans deux heures. · Je le fais en deux heures.',
      sub: '[zhuh par dahⁿ deu-ZUHR] · [zhuh luh feh ahⁿ deu-ZUHR]',
      body: 'Un mot change, et ta réunion tombe deux heures plus tard ou dure deux heures. EN: one word, and your meeting either starts later or lasts that long.',
    },
  ],
};

const A9_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-table',
  layer: 'core',
  sheetId: 'sheet-temps',
  title: 'Six façons de dire quand',
  cols: ['Expression', 'D’où on compte', 'Exemple court'],
  rows: [
    { cells: ['dans deux heures', 'de maintenant', 'je serai de retour'], say: 'Je serai de retour dans deux heures.', detail: { title: 'dans + durée', body: 'On avance depuis l’instant où tu parles. C’est la forme la plus courante des projets. EN: counted forward from the moment you speak.', say: 'Le train partira dans dix minutes.' } },
    { cells: ['en deux heures', 'du début du travail', 'je finirai ce rapport'], say: 'Je finirai ce rapport en deux heures.', detail: { title: 'en + durée', body: 'Le temps que la chose prend, du début à la fin. Rien ne dit quand ça commence. EN: the time the thing takes, start unspecified.', say: 'Elle a préparé le dossier en trois jours.' } },
    { cells: ['d’ici vendredi', 'jusqu’à une limite', 'tout sera prêt'], say: 'D’ici vendredi, tout sera prêt.', detail: { title: 'd’ici + date', body: 'Avant cette date, sans promettre le jour exact. La langue des rapports et des devis. EN: before that date, without naming the day.', say: 'Le colis arrivera d’ici mardi.' } },
    { cells: ['d’ici là', 'jusqu’à ce moment', 'ne dis rien'], say: 'D’ici là, ne dis rien à personne.', detail: { title: 'd’ici là', body: 'La limite dont vous venez de parler. Très fréquent à l’oral. EN: up to the moment you both just mentioned.', say: 'D’ici la fin du mois, je te donnerai une réponse.' } },
    { cells: ['la semaine prochaine', 'un repère du calendrier', 'on se verra'], say: 'On se verra la semaine prochaine.', detail: { title: 'les repères', body: 'demain, la semaine prochaine, en août : le calendrier donne le moment tout seul. EN: the calendar gives the moment by itself.', say: 'Nous partirons dans trois quarts d’heure.' } },
    { cells: ['tout à l’heure', 'aujourd’hui, plus tard', 'il va pleuvoir'], say: 'Il va pleuvoir tout à l’heure.', detail: { title: 'tout à l’heure', body: 'Dans la même journée, un peu plus tard. Souvent avec le futur proche. EN: later the same day, often with the futur proche.', say: 'Je vais partir dans dix minutes.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['delai', 'oral'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Choisis la mesure',
  groups: [
    grp('À partir de maintenant', [
      it(E(533), 'dix minutes après l’annonce'),
      it(E(534), 'une semaine après aujourd’hui'),
      it(E(540), 'un mois après aujourd’hui'),
      it(E(544), 'quelques jours après aujourd’hui'),
    ], chk(
      '« Le train partira ... dix minutes. »',
      ['dans', 'en'],
      0,
      'On compte depuis maintenant. EN: counted from now.',
    )),
    grp('Le temps qu’il faut', [
      it(E(535), 'trois jours de travail'),
      it(E(536), 'deux heures de rédaction'),
      it(E(543), 'une demi-heure de réparation'),
      it(E(547), 'une journée pour tout régler'),
    ], chk(
      '« Elle a préparé le dossier ... trois jours. »',
      ['en', 'dans', 'd’ici'],
      0,
      'C’est la durée du travail, pas un point de départ. EN: the length of the work.',
    )),
    ctl('La limite', '« ... vendredi, tout sera prêt. » Quelle expression ?', ['En', 'D’ici', 'Dans'], 1,
      'D’ici donne une limite : avant vendredi. EN: d’ici gives a deadline.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['delai'],
};

const A9_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-flash',
  layer: 'core',
  title: 'Huit façons de dire quand',
  cards: [
    { front: 'in two hours (from now)', back: 'dans deux heures', say: 'Je serai de retour dans deux heures.' },
    { front: 'in two hours (that is how long it takes)', back: 'en deux heures', say: 'Je finirai ce rapport en deux heures.' },
    { front: 'by Friday', back: 'd’ici vendredi', say: 'D’ici vendredi, tout sera prêt.' },
    { front: 'until then', back: 'd’ici là', say: 'D’ici là, ne dis rien à personne.' },
    { front: 'in a few days', back: 'dans quelques jours', say: 'Dans quelques jours, tu recevras ta carte.' },
    { front: 'by the end of the month', back: 'd’ici la fin du mois', say: 'D’ici la fin du mois, je te donnerai une réponse.' },
    { front: 'in three quarters of an hour', back: 'dans trois quarts d’heure', say: 'Nous partirons dans trois quarts d’heure.' },
    { front: 'shortly, later today', back: 'tout à l’heure', say: 'Il va pleuvoir tout à l’heure.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['delai'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Dans ou en',
  rule: {
    title: 'Deux mots, deux réunions différentes',
    body: 'En anglais, in two hours dit les deux choses et le contexte décide. En français, le mot décide, et personne ne devine ce que tu voulais dire. EN: English lets context decide; in French the word decides.',
  },
  cards: [
    { promptLabel: 'en au lieu de dans', promptSound: 'Je serai de retour en deux heures.', fr: 'Je serai de retour dans deux heures.', ipa: '/ʒə sə.ʁe də ʁə.tuʁ dɑ̃ dø.zœʁ/', tip: 'Tu parles de ton retour, pas de la durée du trajet. EN: your return, not the length of the trip.' },
    { promptLabel: 'dans au lieu de en', promptSound: 'Je finirai ce rapport dans deux heures.', fr: 'Je finirai ce rapport en deux heures.', ipa: '/ʒə fi.ni.ʁe sə ʁa.pɔʁ ɑ̃ dø.zœʁ/', tip: 'Le rapport prend deux heures de travail. EN: the report takes two hours of work.' },
    { promptLabel: 'dans au lieu de d’ici', promptSound: 'Dans vendredi, tout sera prêt.', fr: 'D’ici vendredi, tout sera prêt.', ipa: '/di.si vɑ̃.dʁə.di tu sə.ʁa pʁɛ/', tip: 'dans veut une durée, d’ici veut une date. EN: dans wants a length, d’ici wants a date.' },
    { promptLabel: 'en devant une date', promptSound: 'En quelques jours, tu recevras ta carte.', fr: 'Dans quelques jours, tu recevras ta carte.', ipa: '/dɑ̃ kɛl.kə ʒuʁ ty ʁə.sə.vʁa ta kaʁt/', tip: 'La carte arrive après quelques jours ; elle ne met pas ce temps à venir. EN: the card arrives after a few days.' },
    { promptLabel: 'dans pour un travail fait', promptSound: 'Il a tout réglé dans une seule journée.', fr: 'Il a tout réglé en une seule journée.', ipa: '/i.la tu ʁe.ɡle ɑ̃.nyn sœl ʒuʁ.ne/', tip: 'Le travail a duré une journée. EN: the work lasted one day.' },
    { promptLabel: 'la bonne paire', promptSound: 'Nous partirons en trois quarts d’heure.', fr: 'Nous partirons dans trois quarts d’heure.', ipa: '/nu paʁ.ti.ʁɔ̃ dɑ̃ tʁwa kaʁ dœʁ/', tip: 'Le départ est un point, pas une durée. EN: a departure is a point, not a length.' },
  ],
  drill: [
    { promptSay: 'Je serai de retour ... deux heures.', opts: ['en', 'dans'], correct: 1 },
    { promptSay: 'Elle a préparé le dossier ... trois jours.', opts: ['en', 'dans'], correct: 0 },
    { promptSay: '... vendredi, tout sera prêt.', opts: ['Dans', 'D’ici'], correct: 1 },
    { promptSay: 'Le train partira ... dix minutes.', opts: ['dans', 'en'], correct: 0 },
    { promptSay: 'Le garagiste répare ça ... une demi-heure.', opts: ['dans', 'en'], correct: 1 },
    { promptSay: '... quelques jours, tu recevras ta carte.', opts: ['Dans', 'En'], correct: 0 },
    { promptSay: 'Il a tout réglé ... une seule journée.', opts: ['dans', 'en'], correct: 1 },
    { promptSay: '... la fin du mois, je te donnerai une réponse.', opts: ['D’ici', 'En'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Deux mots, deux réunions' },
    { label: 'Six cartes', kind: 'cards', title: 'Six mesures qui glissent' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-07-piege-delai'),
  say: REFRAME,
  terms: ['delai'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le départ', 'Pour compter à partir de maintenant, quel mot ?', ['en', 'dans'], 1,
    'dans deux heures : deux heures après cet instant. EN: two hours after this moment.'),
  ctl('La durée', '« Elle a lu tout le roman ... une nuit. »', ['en', 'dans'], 0,
    'C’est le temps que la lecture a pris. EN: the time the reading took.'),
  ctl('La limite', 'Que dit « d’ici la fin du mois » ?', ['exactement le trente', 'après la fin du mois', 'avant la fin du mois'], 2,
    'Une limite, pas une date exacte. EN: a deadline, not an exact date.'),
], ['delai', 'charniere']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Dans, en, d’ici',
    opener: {
      line: 'Dans deux heures ou en deux heures : un mot, et ta réunion tombe ailleurs ou dure plus longtemps. EN: dans deux heures or en deux heures: one word, and your meeting either moves or lasts longer.',
      imageRef: 'lessons/futur-usage/act09.jpg',
    },
    sections: [],
    milestone: 'Tu dis dans combien de temps, combien de temps ça prendra, et avant quelle limite. EN: You can say how long from now, how long it will take, and by when.',
    estScreens: 43, restPoints: ['a9-table', 'a9-flash'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_TABLE, A9_CONSTRUIRE, A9_FLASH, A9_PIEGE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — DEUX CHOSES À VENIR, DANS L'ORDRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le samedi de Malik',
  frSub: 'Cherche l’ordre des moments',
  text: "Samedi, j'ai une longue journée. D'abord je finirai le rapport, ensuite je partirai. Je passerai à la banque, puis j'irai au marché. Quand j'aurai le billet, je réserverai l'hôtel : dans l'autre sens, ça ne marche pas, parce que l'hôtel dépend de la date du train. Dès que la réunion finira, nous irons déjeuner. Ensuite, nous prendrons le train de dix-huit heures. Une fois que tout sera réglé, je te téléphonerai. Après, on se retrouvera devant la gare. Avant de partir, je vérifierai les billets, parce que je les oublie une fois sur deux. Enfin, nous rentrerons par le dernier bus. Tant que nous n'aurons pas de réponse pour dimanche, nous attendrons.",
  glossary: [
    { word: 'le rapport', en: 'the report', note: 'Un document de travail.' },
    { word: 'réserverai', en: 'I will book', note: 'Garder une place à l’avance.' },
    { word: 'réglé', en: 'settled', note: 'Finir quelque chose, payer ou organiser.' },
    { word: 'une fois sur deux', en: 'half the time', note: 'Une fois oui, une fois non.' },
  ],
  questions: [
    { q: 'Quels mots rangent les moments dans l’ordre ?', a: 'D’abord, ensuite, puis, après, avant de, enfin.' },
    { q: 'Pourquoi le billet vient-il avant l’hôtel ?', a: 'Parce que la date de l’hôtel dépend du train. La charnière quand dit lequel arrive en premier.' },
    { q: '« Quand j’aurai le billet, je réserverai l’hôtel. » Combien de futurs ?', a: 'Deux. Les deux moments sont devant nous, donc les deux verbes portent le futur.' },
    { q: 'Que dit la dernière phrase ?', a: 'Que l’attente durera exactement aussi longtemps que l’absence de réponse. C’est le sens de tant que.' },
    { q: 'Trouve la phrase où la charnière est à la fin.', a: '« Avant de partir, je vérifierai les billets » ouvre par le repère ; « Tant que nous n’aurons pas de réponse, nous attendrons » l’ouvre aussi. La charnière peut occuper les deux places.' },
  ],
  audio: REC('rec-b1-07-voyage'),
  say: REFRAME,
  terms: ['charniere', 'delai'],
};

const A10_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Deux moments, un ordre',
  frSub: 'La charnière dit lequel vient d’abord',
  hint: 'Quatre cartes. Demande-toi ce qui doit arriver en premier.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'certitude'],
  cards: [
    {
      head: 'La charnière porte le premier',
      label: 'quand + futur',
      fr: 'Quand j’aurai le billet, je réserverai l’hôtel.',
      sub: '[kahⁿ zho-REH luh bee-YEH zhuh ray-zehr-vuh-REH loh-TEHL]',
      body: 'Le billet vient d’abord. Mets-le dans la charnière et l’ordre devient clair. EN: the first thing goes in the hinge clause.',
    },
    {
      head: 'Sans charnière, des connecteurs',
      label: 'd’abord, ensuite',
      fr: 'D’abord je finirai le rapport, ensuite je partirai.',
      sub: '[da-BOR zhuh fee-nee-REH luh ra-POR ahⁿ-SWEET zhuh par-tee-REH]',
      body: 'Deux futurs simples et deux petits mots suffisent. C’est la forme la plus légère. EN: two futures and two small words: the lightest shape.',
    },
    {
      head: 'Quand l’étape doit être finie',
      label: 'une fois que',
      fr: 'Une fois que tout sera réglé, je te téléphonerai.',
      sub: '[ün FWA kuh too suh-ra ray-GLAY zhuh tuh tay-lay-fon-REH]',
      body: 'Une fois que insiste : la première chose est complètement terminée. EN: une fois que insists the first thing is completely done.',
    },
    {
      head: 'Quand l’attente dure',
      label: 'tant que',
      fr: 'Tant que nous n’aurons pas de réponse, nous attendrons.',
      sub: '[tahⁿ kuh noo no-rohⁿ pa duh ray-POHⁿSS noo-za-tahⁿ-DROHⁿ]',
      body: 'Ici le premier moment n’est pas un point mais une durée, et l’attente la suit. EN: here the first moment is a stretch, and the waiting follows it.',
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Range les deux moments',
  groups: [
    grp('Avec une charnière', [
      it(E(549), 'le billet, puis l’hôtel'),
      it(E(551), 'la réunion, puis le déjeuner'),
      it(E(553), 'tout réglé, puis le téléphone'),
      it(E(559), 'tout prêt, puis le lancement'),
    ], chk(
      'Tu veux dire : le billet d’abord, l’hôtel ensuite. Quelle phrase ?',
      ['Quand je réserverai l’hôtel, j’aurai le billet.', 'Quand j’aurai le billet, je réserverai l’hôtel.'],
      1,
      'Le premier moment va dans la charnière. EN: the first moment goes in the hinge clause.',
    )),
    grp('Avec des connecteurs', [
      it(E(548), 'd’abord, ensuite'),
      it(E(550), 'puis'),
      it(E(552), 'ensuite'),
      it(E(555), 'enfin'),
    ], chk(
      '« Je passerai à la banque, ... j’irai au marché. »',
      ['puis', 'pendant que', 'tant que'],
      0,
      'Puis enchaîne deux moments sans rien dire de plus. EN: puis simply chains two moments.',
    )),
    ctl('La méthode', 'Avant d’écrire une phrase à deux moments, que fais-tu ?', ['tu choisis la charnière', 'tu ranges les deux moments dans l’ordre'], 1,
      'L’ordre d’abord, la charnière ensuite. EN: order first, hinge second.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'deuxfois'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-plan',
  title: 'Ce qu’il faut vérifier avant d’écrire',
  points: [
    'Range tes moments dans l’ordre avant de choisir les mots. EN: put your moments in order before choosing the words.',
    'Le premier moment va dans la charnière, avec le futur. EN: the first moment goes in the hinge clause, in the future.',
    'La deuxième moitié porte le futur aussi, sauf après si. EN: the second half takes the future too, except after si.',
    'Termine par une ligne qui ferme le plan. EN: end with one line that closes the plan.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'condition'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qu’est-ce qui vient en premier',
  frSub: 'Écoute et range',
  lines: [
    ln(E(549)), ln(E(548)), ln(E(551)), ln(E(553)),
    ln(E(557)), ln(E(561)), ln(E(556)), ln(E(560)),
  ],
  questions: [
    { q: 'Première phrase : qu’est-ce qui arrive d’abord ?', opts: ['l’hôtel', 'le billet'], correct: 1, why: 'La charnière porte le premier moment. EN: the hinge carries the first moment.' },
    { q: 'Troisième phrase : le déjeuner a lieu...', opts: ['après la réunion', 'avant la réunion'], correct: 0, why: 'Dès que la réunion finira : le déjeuner suit. EN: lunch follows the meeting.' },
    { q: 'Cinquième phrase : « Je t’écrirai dès que je saurai. » Tu sais déjà ?', opts: ['oui', 'non, pas encore'], correct: 1, why: 'Deux futurs : les deux moments sont devant toi. EN: both moments are ahead.' },
    { q: 'Sixième phrase : l’attente s’arrête quand ?', opts: ['dans deux jours', 'à la réponse'], correct: 1, why: 'Tant que dit aussi longtemps que l’attente dure. EN: tant que ties the waiting to the answer.' },
    { q: 'Septième phrase : la vérification a lieu...', opts: ['avant le départ', 'après le départ'], correct: 0, why: '« Avant de partir » place le moment lui-même. EN: avant de places the moment itself.' },
  ],
  audio: REC('rec-b1-07-ordre-ecoute'),
  say: REFRAME,
  terms: ['charniere', 'certitude'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs d’ordre',
  errors: [
    { wrong: 'Quand je réserverai l’hôtel, j’aurai le billet.', right: 'Quand j’aurai le billet, je réserverai l’hôtel.', why: 'Les deux verbes sont justes, et l’ordre est retourné : ta phrase dit que l’hôtel vient avant le billet. EN: both verbs are right and the order is upside down.' },
    { wrong: 'D’abord je finirai le rapport, ensuite je pars.', right: 'D’abord je finirai le rapport, ensuite je partirai.', why: 'Le présent passe pour un départ déjà décidé, ce qui casse la liste que tu es en train de faire. EN: the present reads as already fixed and breaks the list.' },
    { wrong: 'Une fois que tout est réglé, je te téléphonerai.', right: 'Une fois que tout sera réglé, je te téléphonerai.', why: 'Correct comme habitude : chaque fois que tout est réglé, tu appelles. Ici tu parles de samedi. EN: fine as a habit, wrong for one Saturday.' },
    { wrong: 'Tant que nous n’avons pas de réponse, nous attendrons.', right: 'Tant que nous n’aurons pas de réponse, nous attendrons.', why: 'L’attente et l’absence de réponse durent ensemble, donc les deux moitiés vont au même temps. EN: both halves last together, so both take one tense.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'deuxfois'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('L’ordre', 'Le premier des deux moments va...', ['dans la charnière', 'dans la deuxième moitié'], 0,
    'Quand j’aurai le billet, je réserverai l’hôtel. EN: the first moment goes in the hinge.'),
  ctl('Les connecteurs', 'Sans charnière, avec quoi ranges-tu deux moments ?', ['avec si', 'avec d’abord, ensuite, puis'], 1,
    'Deux futurs et deux petits mots suffisent. EN: two futures and two small words.'),
  ctl('La méthode', 'Dans quel ordre travailles-tu ?', ['la charnière, puis les moments', 'les moments, puis la charnière', 'les deux en même temps'], 1,
    'Range d’abord, choisis ensuite. EN: order first, then choose.'),
], ['charniere', 'deuxfois']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Deux choses à venir, dans l’ordre',
    opener: {
      line: 'Le billet avant l’hôtel, la réunion avant le déjeuner : ici tu ranges deux moments à venir et tu choisis le mot qui les tient. EN: The ticket before the hotel, the meeting before lunch: here you order two moments ahead and pick the word that holds them.',
      imageRef: 'lessons/futur-usage/act10.jpg',
    },
    sections: [],
    milestone: 'Tu mets deux moments à venir dans l’ordre, avec une charnière ou avec des connecteurs. EN: You put two future moments in order, with a hinge word or with connectors.',
    estScreens: 21, restPoints: ['a10-construire'],
  },
  sections: [A10_LECTURE, A10_REGLE, A10_CONSTRUIRE, A10_FOCUS, A10_ECOUTE, A10_ERREURS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — ÉCRIRE TON PLAN
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as a model the learner will imitate in the
 *  task: four charnières, two real conditions, one closing line. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un plan modèle',
  frSub: 'La forme que tu vas écrire',
  text: READING_TEXT,
  glossary: [
    { word: 'un stage', en: 'a work placement', note: 'Une période de travail pour apprendre un métier.' },
    { word: 'le dépôt', en: 'the deposit', note: 'L’argent qu’on donne à l’avance pour un logement.' },
    { word: 'm’inscrirai', en: 'I will sign up', note: 'Donner son nom pour participer à quelque chose.' },
    { word: 'un cours du soir', en: 'an evening class', note: 'Un cours après les heures de travail.' },
    { word: 'là-bas', en: 'over there', note: 'À l’endroit dont on vient de parler.' },
  ],
  questions: [
    { q: 'Combien de charnières trouves-tu, et lesquelles ?', a: 'Quatre : dès que l’agence me donnera une réponse, quand j’aurai l’adresse, une fois que je connaîtrai mes horaires, tant que je serai là-bas.' },
    { q: 'Quel temps porte chaque verbe après une charnière ?', a: 'Le futur : donnera, aurai, connaîtrai, serai. Et l’autre moitié aussi.' },
    { q: 'Quels verbes suivent les deux si ?', a: '« commence » et « va », tous les deux au présent. Après si, jamais le futur.' },
    { q: 'Comment le plan se termine-t-il ?', a: 'Par une ligne qui ferme : « Je vous raconterai tout à mon retour. »' },
    { q: 'Trouve les deux expressions de délai.', a: '« un stage de six semaines » donne la durée, et « d’ici la fin du stage » donne la limite.' },
  ],
  audio: REC('rec-b1-07-modele'),
  say: REFRAME,
  terms: ['charniere', 'condition'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour écrire ton plan',
  steps: [
    '1. Écris tes moments dans l’ordre, en trois mots chacun. EN: list your moments in order, three words each.',
    '2. Ouvre par une phrase qui annonce la période. EN: open with one sentence naming the period.',
    '3. Relie deux moments avec une charnière, et mets le futur des deux côtés. EN: join two moments with a hinge and put the future on both sides.',
    '4. Ajoute une vraie condition avec si + présent, suivie d’un futur. EN: add one real condition with si plus a present.',
    '5. Ferme par une ligne qui dit ce que tu feras au bout. EN: close with one line saying what you will do at the end.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'condition'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: 'Un courriel de travail, pour annoncer un calendrier', fr: 'D’ici vendredi, tout sera prêt pour la commande.', en: 'By Friday everything will be ready for the order.' },
    { situation: 'Un message à un propriétaire, pour poser une date', fr: 'Quand j’aurai les clés, je vous appellerai.', en: 'When I get the keys, I will call you.' },
    { situation: 'À l’examen, pour parler de tes projets', fr: 'Si tout se passe bien, je finirai avant vendredi.', en: 'If all goes well, I will finish before Friday.' },
    { situation: 'À la maison, pour négocier une soirée', fr: 'Tant que tu n’auras pas fini, tu ne sortiras pas.', en: 'As long as you have not finished, you will not go out.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['delai', 'condition'],
};

/** CHOOSE, out loud: the placement call, six turns, two alts each. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec l’agence',
  setting: 'Tu prépares un stage à Sherbrooke. L’agente du logement veut des dates et ne veut pas d’à-peu-près.',
  turns: [
    {
      ai: 'Bonjour, agence Lachance. Vous cherchez un logement pour quand ?',
      en: 'Hello, Lachance agency. You are looking for accommodation for when?',
      user: 'Pour le mois prochain. Dès que vous me donnerez une réponse, je signerai.',
      userEn: 'For next month. As soon as you give me an answer, I will sign. (Dès que plus the future, in both halves.)',
      alts: [
        { fr: 'Pour septembre. Quand vous me répondrez, je signerai tout de suite.', en: 'For September. When you answer me, I will sign straight away.' },
        { fr: 'Le mois prochain. Je signerai dès que vous m’enverrez le contrat.', en: 'Next month. I will sign as soon as you send me the contract.' },
      ],
    },
    {
      ai: 'Et le dépôt, vous le réglez comment.',
      en: 'And how will you pay the deposit?',
      user: 'Quand j’aurai l’adresse, j’enverrai le dépôt par virement.',
      userEn: 'When I have the address, I will send the deposit by transfer. (Two futures across one hinge.)',
      alts: [
        { fr: 'Je l’enverrai dès que le contrat sera signé.', en: 'I will send it as soon as the contract is signed.' },
        { fr: 'Une fois que vous confirmerez, je ferai le virement.', en: 'Once you confirm, I will make the transfer.' },
      ],
    },
    {
      ai: 'Votre stage commence quel jour.',
      en: 'What day does your placement start?',
      user: 'Si le stage commence le lundi, je prendrai le train du dimanche soir.',
      userEn: 'If the placement starts on the Monday, I will take the Sunday evening train. (A real condition: si plus a present.)',
      alts: [
        { fr: 'Je ne sais pas encore. Si c’est le lundi, j’arriverai la veille.', en: 'I do not know yet. If it is the Monday, I will arrive the day before.' },
        { fr: 'Le premier jour n’est pas fixé. Quand je le saurai, je vous préviendrai.', en: 'The first day is not fixed. When I know, I will tell you. (Certain that he will know: quand, and also right.)' },
      ],
    },
    {
      ai: 'Il vous faut le logement pour combien de temps.',
      en: 'How long do you need the accommodation for?',
      user: 'Six semaines. Tant que je serai à Sherbrooke, je paierai chaque mois.',
      userEn: 'Six weeks. As long as I am in Sherbrooke, I will pay every month. (Tant que ties the two stretches together.)',
      alts: [
        { fr: 'Six semaines, d’ici la fin du mois d’août.', en: 'Six weeks, up to the end of August.' },
        { fr: 'Le temps du stage. Une fois que je partirai, je rendrai les clés.', en: 'For the placement. Once I leave, I will hand back the keys.' },
      ],
    },
    {
      ai: 'Quand pourrez-vous visiter.',
      en: 'When will you be able to visit?',
      user: 'Je serai à Sherbrooke dans deux semaines, et je visiterai tout en une journée.',
      userEn: 'I will be in Sherbrooke in two weeks, and I will see everything in one day. (dans counts from now; en is how long it takes.)',
      alts: [
        { fr: 'Dans quinze jours. D’ici là, envoyez-moi des photos.', en: 'In a fortnight. Until then, send me some photos.' },
        { fr: 'Je passerai dès que je serai là-bas.', en: 'I will drop in as soon as I am over there.' },
      ],
    },
    {
      ai: 'Et si le propriétaire refuse le dossier.',
      en: 'And if the landlord turns down the application?',
      user: 'Si ça ne marche pas, on essaiera autrement. Je chercherai une chambre.',
      userEn: 'If it does not work, we will try another way. I will look for a room. (Present after si, future after the comma.)',
      alts: [
        { fr: 'S’il refuse, je vous rappellerai le jour même.', en: 'If he says no, I will call you back the same day.' },
        { fr: 'Alors je regarderai ailleurs, et je vous tiendrai au courant.', en: 'Then I will look elsewhere, and I will keep you posted.' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'condition', 'delai'],
};

/** THE GRADED TASK. The unit outcome is tested here: plan and promise across
 *  two clauses, with real conditions. */
const A11_MISSION: TaskSection = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris ton plan',
  frSub: 'Mission écrite',
  brief: 'Tu prépares quelque chose : un voyage, un déménagement, une formation ou un projet au travail. Ton amie Salma, à Casablanca, te demande comment tu vas t’organiser. Écris-lui un message. Annonce la période, mets tes étapes dans l’ordre, et dis ce qui n’est pas encore sûr.',
  briefEn: 'You are getting something ready: a trip, a move, a course or a project at work. Your friend Salma in Casablanca asks how you will organise it. Write her a message: name the period, put your steps in order, and say what is not yet certain.',
  produce: 'Écris un plan de 90 à 130 mots au futur, avec au moins trois charnières différentes (quand, dès que, lorsque, tant que, pendant que, une fois que), au moins une vraie condition avec si, une expression de délai (dans, en ou d’ici), et une ligne qui ferme le plan.',
  responseSpec: { kind: 'text', minWords: 90, maxWords: 130 },
  rubric: {
    criteria: [
      {
        key: 'charnieres',
        label: 'Le futur des deux côtés',
        maxPoints: 4,
        descriptors: [
          '4 : Trois charnières différentes au moins, et chacune porte le futur des deux côtés. Aucun présent ne traîne dans une moitié qui parle de l’avenir.',
          '3 : Trois charnières, et une ou deux moitiés seulement restent au présent par distraction. Le plan se lit sans hésitation.',
          '2 : Une ou deux charnières, ou plusieurs moitiés au présent. Le lecteur ne sait plus si tu racontes une habitude ou un projet.',
          '1 : Les charnières manquent, ou toutes leurs moitiés sont au présent. On lit une routine, pas un plan.',
        ],
      },
      {
        key: 'condition',
        label: 'Une vraie condition',
        maxPoints: 3,
        descriptors: [
          '3 : Au moins une condition avec si, le présent juste après si, et un futur, un présent ou un impératif de l’autre côté.',
          '2 : Une condition est là, mais le temps après si hésite une fois, ou la suite manque de clarté.',
          '1 : Pas de condition, ou un futur après si.',
        ],
      },
      {
        key: 'ordre',
        label: 'Un plan qui se suit',
        maxPoints: 3,
        descriptors: [
          '3 : Les étapes sont dans l’ordre, guidées par d’abord, ensuite, puis, enfin, et une expression de délai situe le tout.',
          '2 : L’ordre est lisible mais les liens sont pauvres, ou le délai manque.',
          '1 : Des phrases isolées. Le lecteur ne voit pas ce qui vient avant quoi.',
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un vrai projet, entre 90 et 130 mots, et une ligne finale qui ferme le plan.',
          '1 : Il manque un élément : pas de fin, moins de 90 mots, ou le texte ne parle pas de l’avenir.',
        ],
      },
    ],
  },
  scaffold: ['Voici ce que je ferai...', 'D’abord,', 'Quand j’aurai...', 'Dès que...', 'Une fois que...', 'Si tout va bien,', 'D’ici...', 'Enfin,'],
  modelAnswer: 'Salut Salma ! Voici ce que je ferai le mois prochain. Je pars à Sherbrooke pour un stage de six semaines. D’abord, je réglerai le logement : dès que l’agence me donnera une réponse, je signerai et j’enverrai le dépôt. Quand j’aurai l’adresse, je commanderai une carte de transport. Si le stage commence le lundi, je prendrai le train du dimanche soir. Une fois que je connaîtrai mes horaires, je m’inscrirai à un cours du soir. Tant que je serai là-bas, j’écrirai chaque semaine. D’ici la fin du stage, je saurai si je veux rester. Je te raconterai tout à mon retour. Bises !',
  modelAnswerEn: 'Hi Salma! Here is what I will do next month. I am going to Sherbrooke for a six-week placement. First I will sort out the accommodation: as soon as the agency answers me, I will sign and send the deposit. When I have the address, I will order a travel card. If the placement starts on the Monday, I will take the Sunday evening train. Once I know my hours, I will sign up for an evening class. As long as I am over there, I will write every week. By the end of the placement I will know whether I want to stay. I will tell you all about it when I get back. Love!',
  watchFor: [
    {
      pattern: 'A present tense in the charnière clause of a plan (quand j’arrive, dès que je finis, une fois que tout est réglé), carried over from English.',
      criterion: 'charnieres',
      feedback: 'Cette moitié parle de l’avenir, elle aussi. Mets le futur des deux côtés : quand j’arriverai, dès que je finirai.',
      ref: 'a2-piege',
    },
    {
      pattern: 'One future only, in the second half, with the charnière clause left in the present.',
      criterion: 'charnieres',
      feedback: 'Compte tes futurs : il en faut un de chaque côté de la charnière.',
      ref: 'a2-construire',
    },
    {
      pattern: 'A future after si (si j’aurai le temps, si le train sera à l’heure, si je viendrai).',
      criterion: 'condition',
      feedback: 'Après si, jamais le futur. Le verbe reste au présent : si j’ai le temps, si le train est à l’heure.',
      ref: 'a5-regle',
    },
    {
      pattern: 'A conditionnel after si (si tu m’aiderais, si je pouvais), which belongs to the present-unreal lesson.',
      criterion: 'condition',
      feedback: `Cette forme dit « ce n’est pas le cas », et elle appartient à ${SI_UNREAL_REF}. Ici, si plus le présent suffit.`,
      ref: 'a5-erreurs',
    },
    {
      pattern: 'si used where the event will happen anyway (si l’été arrive, si je pars à la retraite), or quand used for something genuinely uncertain.',
      criterion: 'condition',
      feedback: 'Pose-toi la question : est-ce que ça arrivera de toute façon ? Oui, alors quand et le futur. Non, alors si et le présent.',
      ref: 'a7-regle',
    },
    {
      pattern: 'Fewer than three charnières, or the same one repeated (quand, quand, quand).',
      criterion: 'charnieres',
      feedback: 'Varie : dès que dit l’instant, tant que dit la durée, une fois que dit l’étape franchie.',
      ref: 'a3-table',
    },
    {
      pattern: 'dans and en swapped (je finirai le rapport dans deux heures for a length of work, je serai de retour en deux heures for a point in time).',
      criterion: 'ordre',
      feedback: 'dans deux heures compte à partir de maintenant ; en deux heures, c’est le temps que ça prend.',
      ref: 'a9-cartes',
    },
    {
      pattern: 'The two moments in the wrong order across a charnière (quand je réserverai l’hôtel, j’aurai le billet).',
      criterion: 'ordre',
      feedback: 'Le premier des deux moments va dans la charnière. Range-les avant d’écrire.',
      ref: 'a10-regle',
    },
    {
      pattern: 'A futur proche inside the charnière clause (quand je vais arriver, dès qu’il va être là).',
      criterion: 'charnieres',
      feedback: 'Aller et l’infinitif restent après la virgule. Dans la charnière, le futur simple : quand j’arriverai.',
      ref: 'a8-regle',
    },
    {
      pattern: 'Future-stem errors carried over from the formation lessons (je finirai written je finerai, je viendrai written je venirai, il faudra written il falera).',
      criterion: 'charnieres',
      feedback: `Revois la forme du futur : « ${B106_REFRAME} »`,
      ref: 'a5-regle',
    },
    {
      pattern: 'A list of sentences with no connectors and no delay expression, or a plan that stops without an ending.',
      criterion: 'ordre',
      feedback: 'Guide ta lectrice : d’abord, ensuite, puis, enfin. Et ferme le plan par une dernière ligne.',
      ref: 'a11-plan',
    },
    {
      pattern: 'Under 90 words, no real project, or a text written about the past rather than what is ahead.',
      criterion: 'tache',
      feedback: 'Relis la mission : un vrai projet, au futur, de 90 à 130 mots, avec une fin.',
      ref: 'a11-lecture',
    },
  ],
  graderNotes: [
    'Count a charnière only when it is one of quand, lorsque, dès que, aussitôt que, tant que, pendant que, une fois que. Avant de and après are ordering words, not charnières, and do not count towards the three.',
    'THREE DIFFERENT charnières means three different words, not three occurrences. Two uses of quand plus one dès que is two, not three.',
    'A present tense inside a charnière clause is an error ONLY when the passage is about the future. If the learner writes a habit on purpose (« quand je rentre, je cuisine »), leave it alone and say nothing.',
    'Word count EXCLUDES the greeting and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance (81-143) before criterion « tache » loses its point.',
    'The futur proche is fully acceptable in the second half, including in a written message. Mark it only inside a charnière clause.',
    'Do NOT mark a futur antérieur (« quand j’aurai fini ») as an error. It is correct French and belongs to a later unit; it simply earns no extra credit here.',
    'Do NOT mark si + imparfait + conditionnel as a grammar failure in isolation; name it, say it belongs to a later lesson, and score criterion « condition » on whether a REAL condition is also present.',
    'Accept regional vocabulary (un stage / une formation, un courriel / un mail, une carte de transport / un abonnement).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis ton plan à voix haute',
  skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'oral'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-plan',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'quand + futur', v: 'le futur des deux côtés', say: 'Quand tu arriveras, je serai déjà là.', detail: { title: 'La charnière', body: 'quand, lorsque, dès que, aussitôt que, tant que, pendant que, une fois que. EN: the seven hinge words.', say: 'Dès que tu seras prêt, on partira.' } },
    { k: 'quand + présent', v: 'une habitude, chaque fois', say: 'Quand j’arrive au bureau, je prends un café.', detail: { title: 'L’habitude', body: 'Le mot ne décide pas ; le moment décide. EN: the word does not decide, the moment does.', say: 'Quand il pleut, je prends le métro.' } },
    { k: 'si + présent, futur', v: 'une promesse', say: 'Si tu viens demain, je préparerai un gâteau.', detail: { title: 'La condition réelle', body: 'Après si, jamais le futur. Le futur va après la virgule. EN: never the future after si.', say: 'Si j’ai le temps, je passerai te voir.' } },
    { k: 'si + présent, présent', v: 'une vérité, une consigne', say: 'Si on paie en ligne, la livraison est gratuite.', detail: { title: 'Les deux autres suites', body: 'Un présent dit ce qui est vrai chaque fois ; un impératif donne un ordre. EN: a present states a truth, an imperative gives an order.', say: 'Si l’alarme sonne, sortez par la porte de gauche.' } },
    { k: 'quand ou si', v: 'sûr, ou seulement possible', say: 'Quand l’été arrivera, nous ouvrirons la terrasse.', detail: { title: 'Le test', body: 'Est-ce que ça arrivera de toute façon ? Oui : quand. Non : si. EN: will it happen anyway? Yes means quand.', say: 'S’il fait assez chaud, nous ouvrirons la terrasse.' } },
    { k: 'dans, en, d’ici', v: 'de maintenant, la durée, la limite', say: 'D’ici vendredi, tout sera prêt.', detail: { title: 'Les délais', body: 'dans deux heures compte de maintenant ; en deux heures est la durée. EN: dans counts from now, en is the length.', say: 'Je finirai ce rapport en deux heures.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'condition', 'delai'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: 'Tu mets le futur des deux côtés de quand, tu choisis entre dès que, tant que et une fois que, et tu ne mets plus jamais le futur après si. Le piège qui reste est le réflexe inverse : un futur posé sur une habitude parce que la phrase commence par quand. Avant l’examen, relis ta mission. Souligne chaque charnière, puis demande-toi pour chacune si ce moment est déjà passé, s’il revient chaque fois, ou s’il est encore devant toi. Si les trois réponses collent aux trois temps que tu as écrits, la leçon a marché. EN: Underline every hinge word in your task and ask, for each one, whether the moment is past, repeated or still ahead.',
  stats: [
    { k: 'La charnière', v: 'le futur des deux côtés' },
    { k: 'Après si', v: 'le présent, toujours' },
    { k: 'quand ou si', v: 'sûr, ou seulement possible' },
    { k: 'dans ou en', v: 'de maintenant, ou la durée' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per act
 *  from act 1 to act 10 plus an integration round. Each round's target is a
 *  distinct errorTrigger, so a failed round fires that round's own drill.
 *
 *  `fold()` strips commas, accents and apostrophes, so no answer turns on one.
 *  Every typeIn and errorSpot carries `prompt`, every listenChoose carries
 *  `say`, and the correct slots are scattered by hand. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
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
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-date', label: 'Une date, pas une habitude', targets: ['present-apres-quand'],
      questions: [
        mc('Au comptoir, quelle phrase donne une date à noter ?', ['Quand j’ai les clés, je vous appelle.', 'Quand j’avais les clés, je vous appelais.', 'Quand j’aurai les clés, je vous appellerai.'], 2, 'Deux futurs : un moment précis, devant nous. EN: two futures mean one moment ahead.', 'a1-scene'),
        tI('Mets les deux verbes au futur et écris la phrase.', 'Quand tu (arriver), je (être) déjà là.', 'Quand tu arriveras, je serai déjà là.', 'Les deux moitiés parlent du même moment à venir. EN: both halves sit at the same moment ahead.', 'a1-lecture'),
        mc('« Quand j’arrive au bureau, je prends un café. » Cette phrase parle...', ['de chaque matin', 'de demain matin'], 0, 'Deux présents : une habitude. EN: two presents mean a habit.', 'a1-reperer'),
        eS('Dès que le propriétaire signe, tout ira vite.', 'Dès que le propriétaire signera, tout ira vite.', 'La signature n’a pas encore eu lieu. EN: the signing has not happened yet.', 'a1-lecture'),
        mc('Pourquoi l’employée ne note rien après « Quand j’ai les clés » ?', ['la phrase est fausse', 'la phrase dit une habitude, pas une date', 'la phrase est au passé'], 1, 'Elle est correcte, et elle raconte ce que tu fais chaque fois. EN: correct French, but a habit.', 'a1-reperer'),
        tI('Mets les deux verbes au futur.', 'Quand je (être) installé, je t’(inviter).', 'Quand je serai installé, je t’inviterai.', 'L’installation et l’invitation sont toutes les deux devant toi. EN: both are ahead.', 'a1-lecture'),
        lC('Écoute. Cette phrase donne-t-elle une date ?', 'Quand j’aurai les clés, je vous appellerai.', ['Non, c’est une habitude.', 'Non, c’est un souvenir.', 'Oui, un moment à venir.'], 2, 'Le futur des deux côtés pose un moment unique. EN: two futures place one moment.', 'a1-scene'),
        mc('Dans une phrase avec quand et un projet, combien de verbes au futur ?', ['deux', 'un', 'aucun'], 0, 'Un de chaque côté de la charnière. EN: one on each side.', 'a1-pourquoi'),
      ],
    },
    {
      id: 'r2-deux-futurs', label: 'Le futur des deux côtés', targets: ['un-seul-futur'],
      questions: [
        mc('Complète : « Quand nous ... prêts, nous partirons. » (être)', ['sommes', 'serons'], 1, 'Le départ est à venir, donc la charnière aussi. EN: the leaving is ahead.', 'a2-construire'),
        tI('Mets les deux verbes au futur.', 'Quand j’(arriver) à Bruxelles, je t’(envoyer) un message.', 'Quand j’arriverai à Bruxelles, je t’enverrai un message.', 'arriverai et enverrai : le même moment. EN: the same moment.', 'a2-histoire'),
        mc('Que fait l’anglais que le français ne fait pas ?', ['il met deux futurs', 'il met un passé', 'il garde le présent après when'], 2, 'C’est l’habitude qui produit l’erreur. EN: that habit is what produces the error.', 'a2-anglais'),
        tI('Écris la phrase avec la charnière à la fin.', 'Je te (prévenir) quand la salle (être) libre.', 'Je te préviendrai quand la salle sera libre.', 'La place de la charnière ne change rien. EN: position changes nothing.', 'a2-regle'),
        eS('Quand le contrat est signé, tu recevras une copie.', 'Quand le contrat sera signé, tu recevras une copie.', 'La copie suit la signature, et les deux sont devant nous. EN: both are ahead.', 'a2-piege'),
        tI('Mets les deux verbes au futur.', 'Elle te (répondre) quand elle (pouvoir).', 'Elle te répondra quand elle pourra.', 'La charnière garde le futur même en deuxième. EN: the hinge keeps the future even when second.', 'a2-construire'),
        lC('Écoute. Combien de verbes au futur ?', 'Quand il fera beau, nous mangerons dehors.', ['deux', 'un'], 0, 'fera et mangerons. EN: fera and mangerons.', 'a2-ecoute'),
        mc('La charnière peut-elle passer en deuxième ?', ['non, jamais', 'oui, sans rien changer'], 1, '« Je te préviendrai quand la salle sera libre. » EN: same sentence, other order.', 'a2-regle'),
      ],
    },
    {
      id: 'r3-charnieres', label: 'La famille des charnières', targets: ['charniere-floue'],
      questions: [
        mc('Quelle charnière dit « à la seconde exacte » ?', ['dès que', 'pendant que', 'tant que'], 0, 'Dès que et aussitôt que donnent l’instant. EN: dès que gives the instant.', 'a3-cartes'),
        tI('Mets les deux verbes au futur.', 'Dès que le magasin (ouvrir), j’(aller) acheter du pain.', 'Dès que le magasin ouvrira, j’irai acheter du pain.', 'Toute la famille se comporte comme quand. EN: the whole family behaves like quand.', 'a3-ecoute'),
        mc('Quand et lorsque : quelle différence ?', ['lorsque est plus fort', 'aucune de sens, lorsque est plus écrit'], 1, 'Le sens est le même, le ton change. EN: same meaning, different tone.', 'a3-table'),
        eS('Tant que j’habite ici, je prendrai le bus.', 'Tant que j’habiterai ici, je prendrai le bus.', 'Les deux moitiés durent ensemble, donc même temps. EN: both halves last together.', 'a3-erreurs'),
        mc('Deux choses qui durent ensemble, du début à la fin : quelle charnière ?', ['dès que', 'une fois que', 'pendant que'], 2, 'Pendant que met les deux moitiés côte à côte. EN: side by side.', 'a3-construire'),
        tI('Mets les deux verbes au futur.', 'Une fois que tu (connaître) le code, tu (pouvoir) entrer.', 'Une fois que tu connaîtras le code, tu pourras entrer.', 'D’abord l’étape, ensuite la suite. EN: first the step, then the rest.', 'a3-nuances'),
        lC('Écoute. Cette phrase dit que la sortie...', 'Tant que tu n’auras pas fini, tu ne sortiras pas.', ['attend la fin du travail', 'aura lieu tout de suite', 'a déjà eu lieu'], 0, 'Tant que lie l’attente à la durée du travail. EN: tant que ties the two together.', 'a3-ecoute'),
        mc('« ... la réunion finira, nous irons déjeuner. » Quel début ?', ['Pendant que', 'Dès que', 'Si'], 1, 'Le déjeuner suit la fin de la réunion, à l’instant. EN: lunch follows the moment the meeting ends.', 'a3-construire'),
      ],
    },
    {
      id: 'r4-moment', label: 'Le moment décide', targets: ['futur-reflexe'],
      questions: [
        mc('« Quand il pleut, je prends le métro. » Cette phrase parle...', ['de demain', 'd’hier', 'de chaque pluie'], 2, 'Deux présents : une habitude. EN: two presents mean a habit.', 'a4-regle'),
        tI('Une habitude. Mets les verbes au bon temps.', 'Quand je (rentrer) du travail, je (prendre) une douche.', 'Quand je rentre du travail, je prends une douche.', 'Chaque soir, donc le présent des deux côtés. EN: every evening, so present.', 'a4-lecture'),
        mc('Qui décide du temps du verbe après quand ?', ['le moment dont tu parles', 'le mot quand'], 0, 'La charnière ne commande rien. EN: the hinge commands nothing.', 'a4-regle'),
        tI('Une habitude finie. Mets les verbes au bon temps.', 'Quand j’(être) étudiant, je (travailler) le samedi.', 'Quand j’étais étudiant, je travaillais le samedi.', 'Le moment est derrière toi : imparfait. EN: the moment is behind you.', 'a4-exemples'),
        eS('Lorsque le soleil se couchera, la place se videra.', 'Lorsque le soleil se couche, la place se vide.', 'Une vérité de chaque soir n’a pas de date. EN: a nightly truth has no date.', 'a4-piege'),
        tI('Ce soir. Mets les deux verbes au futur.', 'Dès que je (finir), je te le (dire).', 'Dès que je finirai, je te le dirai.', 'Un moment unique, devant toi. EN: one moment ahead.', 'a4-construire'),
        lC('Écoute. De quand parle cette phrase ?', 'Dès que la cloche sonnait, tout le monde sortait.', ['d’une époque passée', 'de demain'], 0, 'Deux imparfaits : une habitude finie. EN: a habit that is over.', 'a4-ecoute'),
        mc('Combien de verbes au futur dans le texte de la boulangerie ?', ['aucun', 'deux', 'quatre'], 2, 'changera, commencera, verra, manquera. EN: four, all at the end.', 'a4-lecture'),
      ],
    },
    {
      id: 'r5-si', label: 'Après si', targets: ['futur-apres-si'],
      questions: [
        mc('Complète : « Si tu ... demain, je préparerai un gâteau. » (venir)', ['viendras', 'viens'], 1, 'Après si, jamais le futur. EN: never the future after si.', 'a5-regle'),
        tI('Écris la phrase correcte.', 'Si j’(avoir) le temps, je (passer) te voir.', 'Si j’ai le temps, je passerai te voir.', 'Le présent après si, le futur après la virgule. EN: present after si, future past the comma.', 'a5-histoire'),
        mc('Quel temps juste après si, dans une condition réelle ?', ['le présent', 'le futur', 'le conditionnel'], 0, 'C’est la seule règle absolue de la leçon. EN: the one absolute rule here.', 'a5-construire'),
        eS('Si le train sera à l’heure, nous serons là à midi.', 'Si le train est à l’heure, nous serons là à midi.', 'Un seul futur, et il est du bon côté. EN: one future, on the right side.', 'a5-erreurs'),
        mc('Peut-on mettre la moitié en si à la fin de la phrase ?', ['non, jamais', 'oui, mais elle passe au futur', 'oui, et elle reste au présent'], 2, '« Je passerai te voir si j’ai le temps. » EN: it stays present wherever it sits.', 'a5-regle'),
        tI('Complète les deux verbes.', 'S’il (faire) beau, nous (aller) à la plage.', 'S’il fait beau, nous irons à la plage.', 'fait au présent, irons au futur. EN: present then future.', 'a5-exemples'),
        lC('Écoute. Quel temps porte le verbe juste après si ?', 'Si je rate le bus, je prendrai un taxi.', ['le futur', 'le présent'], 1, '« rate » est au présent, comme toujours après si. EN: present, as always after si.', 'a5-flash'),
        mc('« Si tu m’aiderais, nous finirions plus vite. » Cette phrase...', ['appartient à une leçon plus tard', 'est la bonne réponse ici'], 0, 'Elle dit « ce n’est pas le cas », et ce n’est pas le sujet ici. EN: it means it is not the case.', 'a5-erreurs'),
      ],
    },
    {
      id: 'r6-suites', label: 'Trois suites', targets: ['suite-unique'],
      questions: [
        mc('« Si l’alarme sonne, sortez par la porte de gauche. » C’est...', ['une consigne', 'une promesse'], 0, 'Un impératif : on te dit quoi faire. EN: an imperative.', 'a6-cartes'),
        tI('Une vérité. Mets les deux verbes au présent.', 'Si on (chauffer) l’eau à cent degrés, elle (bouillir).', 'Si on chauffe l’eau à cent degrés, elle bout.', 'Rien n’est promis : c’est vrai chaque fois. EN: true every time.', 'a6-ecoute'),
        mc('Qu’est-ce qui peut suivre si + présent ?', ['un futur seulement', 'un présent seulement', 'un futur, un présent ou un impératif'], 2, 'Trois suites, une seule entrée. EN: three continuations, one entrance.', 'a6-table'),
        tI('Donne une consigne.', 'Si tu (avoir) froid, (fermer) la fenêtre.', 'Si tu as froid, ferme la fenêtre.', 'Présent après si, impératif après la virgule. EN: present after si, imperative after the comma.', 'a6-construire'),
        eS('Si tu boiras du café le soir, tu dormiras mal.', 'Si tu bois du café le soir, tu dors mal.', 'Une vérité sur ton corps, pas une promesse. EN: a truth, not a promise.', 'a6-piege'),
        tI('Une promesse. Complète.', 'Si nous (réserver) ce soir, ce (être) moins cher.', 'Si nous réservons ce soir, ce sera moins cher.', 'Le futur annonce ce qui se passera. EN: the future announces the outcome.', 'a6-exemples'),
        lC('Écoute. Cette phrase est...', 'Si on paie en ligne, la livraison est gratuite.', ['une information vraie chaque fois', 'une promesse pour demain'], 0, 'Deux présents : les conditions d’un service. EN: the terms of a service.', 'a6-ecoute'),
        mc('Sur un panneau, quelle forme suit la condition ?', ['le futur', 'l’impératif', 'le conditionnel'], 1, '« Si la porte est fermée, sonnez deux fois. » EN: signs use the imperative.', 'a6-cartes'),
      ],
    },
    {
      id: 'r7-quand-si', label: 'Quand ou si', targets: ['quand-ou-si'],
      questions: [
        mc('« L’été arrivera de toute façon. » Donc tu écris...', ['si l’été arrive', 'si l’été arrivera', 'quand l’été arrivera'], 2, 'Oui à la question, donc quand et le futur. EN: yes to the question means quand.', 'a7-regle'),
        tI('La chaleur n’est pas sûre. Écris la phrase.', 'Si ou Quand : ... il (faire) assez chaud, nous ouvrirons la terrasse.', 'S’il fait assez chaud, nous ouvrirons la terrasse.', 'La chaleur peut ne pas venir : si, et le présent. EN: the heat may not come.', 'a7-histoire'),
        mc('Avec si, le doute porte sur...', ['la date seulement', 'la chose elle-même'], 1, 'Avec quand, seule la date est ouverte. EN: with quand only the date is open.', 'a7-regle'),
        eS('Si je partirai à la retraite, je déménagerai.', 'Quand je partirai à la retraite, je déménagerai.', 'Deux fautes à la fois : un futur après si, et un doute sur une chose sûre. EN: two errors at once.', 'a7-erreurs'),
        mc('Quelle question sépare quand et si ?', ['Est-ce que ça arrivera de toute façon ?', 'Est-ce que c’est loin ?', 'Est-ce que c’est écrit ?'], 0, 'Oui : quand. Non : si. EN: yes means quand, no means si.', 'a7-construire'),
        tI('La naissance est attendue. Complète.', 'Quand le bébé (naître), nous (changer) d’appartement.', 'Quand le bébé naîtra, nous changerons d’appartement.', 'Quand, et le futur des deux côtés. EN: quand, and both futures.', 'a7-paires'),
        lC('Écoute. Ce moment est...', 'Si je te vois ce soir, je t’expliquerai.', ['certain', 'déjà passé', 'possible'], 2, 'Si laisse la porte ouverte. EN: si leaves the door open.', 'a7-ecoute'),
        mc('Après si, même pour un projet très lointain, quel temps ?', ['le futur', 'le présent', 'le conditionnel'], 1, 'La distance ne change rien. EN: distance changes nothing.', 'a7-check'),
      ],
    },
    {
      id: 'r8-oral', label: 'À l’oral', targets: ['proche-dans-charniere'],
      questions: [
        mc('Où le futur proche a-t-il le droit d’aller ?', ['dans la deuxième moitié', 'dans la charnière'], 0, 'Jamais après quand, dès que ou tant que. EN: never after the hinge words.', 'a8-regle'),
        tI('Complète : futur simple, puis futur proche.', 'Quand j’(arriver), je (aller) t’appeler tout de suite.', 'Quand j’arriverai, je vais t’appeler tout de suite.', 'Chacun à sa place. EN: each in its place.', 'a8-histoire'),
        mc('Peut-on dire « quand je vais arriver » ?', ['oui, à l’oral', 'oui, à l’écrit', 'non, jamais'], 2, 'La charnière garde le futur simple. EN: the hinge keeps the futur simple.', 'a8-construire'),
        tI('Complète : futur simple, puis futur proche.', 'Dès qu’il (être) là, on (aller) commencer.', 'Dès qu’il sera là, on va commencer.', 'sera dans la charnière, va après la virgule. EN: sera in the hinge, va past the comma.', 'a8-ecoute'),
        eS('Si tu voudras, on va regarder ça ensemble.', 'Si tu veux, on va regarder ça ensemble.', 'La règle de si ne bouge pas, même en parlant. EN: the si rule does not move.', 'a8-regle'),
        tI('Complète.', 'Tant que ça (marcher), on (aller) continuer.', 'Tant que ça marche, on va continuer.', 'Ça marche maintenant, donc le présent. EN: it works now, so present.', 'a8-construire'),
        lC('Écoute. Quelle moitié prend aller ?', 'Quand le film finira, on va rentrer à pied.', ['celle en quand', 'la deuxième'], 1, 'Aller reste après la virgule. EN: aller stays past the comma.', 'a8-ecoute'),
        mc('Après si, quel temps, même en parlant ?', ['le présent', 'le futur proche'], 0, 'Présent après si, futur proche après la virgule. EN: present after si.', 'a8-hacks'),
      ],
    },
    {
      id: 'r9-delais', label: 'Dans, en, d’ici', targets: ['dans-ou-en'],
      questions: [
        mc('« Je serai de retour ... deux heures. »', ['en', 'dans'], 1, 'On compte à partir de maintenant. EN: counted from now.', 'a9-cartes'),
        tI('Écris la phrase avec la bonne expression.', 'Elle a préparé le dossier (en ou dans) trois jours.', 'Elle a préparé le dossier en trois jours.', 'C’est la durée du travail. EN: the length of the work.', 'a9-lecture'),
        mc('Que veut dire « d’ici la fin du mois » ?', ['exactement le trente', 'après la fin du mois', 'avant la fin du mois'], 2, 'Une limite, pas une date exacte. EN: a deadline, not an exact date.', 'a9-table'),
        eS('Il a tout réglé dans une seule journée.', 'Il a tout réglé en une seule journée.', 'Le travail a duré une journée. EN: the work lasted one day.', 'a9-piege'),
        mc('« dans deux heures » compte à partir de...', ['maintenant', 'du début du travail', 'de la fin'], 0, 'Pose le doigt sur l’heure qu’il est et avance. EN: start from now and move forward.', 'a9-cartes'),
        tI('Complète avec dans, en ou d’ici.', '... vendredi, tout sera prêt.', 'D’ici vendredi, tout sera prêt.', 'Une limite avant laquelle tout est fini. EN: a deadline.', 'a9-construire'),
        lC('Écoute. Combien de temps prend le travail ?', 'Le garagiste répare ça en une demi-heure.', ['on ne sait pas', 'une demi-heure'], 1, 'en donne la durée du travail. EN: en gives the length of the work.', 'a9-flash'),
        mc('« Nous partirons ... trois quarts d’heure. »', ['en', 'd’ici', 'dans'], 2, 'Le départ est un point, pas une durée. EN: a departure is a point.', 'a9-construire'),
      ],
    },
    {
      id: 'r10-ordre', label: 'Deux moments', targets: ['ordre-flou'],
      questions: [
        mc('Le billet d’abord, l’hôtel ensuite. Quelle phrase ?', ['Quand je réserverai l’hôtel, j’aurai le billet.', 'Si j’ai le billet, je réserve l’hôtel.', 'Quand j’aurai le billet, je réserverai l’hôtel.'], 2, 'Le premier moment va dans la charnière. EN: the first moment goes in the hinge.', 'a10-regle'),
        tI('Complète au futur.', 'D’abord je (finir) le rapport, ensuite je (partir).', 'D’abord je finirai le rapport, ensuite je partirai.', 'Deux futurs simples et deux petits mots. EN: two futures and two small words.', 'a10-construire'),
        mc('Le premier des deux moments va...', ['dans la charnière', 'dans la deuxième moitié'], 0, 'C’est ce qui rend l’ordre lisible. EN: that is what makes the order readable.', 'a10-check'),
        tI('Complète au futur.', 'Une fois que tout (être) réglé, je te (téléphoner).', 'Une fois que tout sera réglé, je te téléphonerai.', 'L’étape d’abord, l’appel ensuite. EN: the step first, the call second.', 'a10-lecture'),
        eS('Tant que nous n’avons pas de réponse, nous attendrons.', 'Tant que nous n’aurons pas de réponse, nous attendrons.', 'L’attente et l’absence de réponse durent ensemble. EN: both stretches run together.', 'a10-erreurs'),
        tI('Complète au futur.', 'Je t’(écrire) dès que je (savoir) quelque chose.', 'Je t’écrirai dès que je saurai quelque chose.', 'La charnière est à la fin et garde son futur. EN: the hinge is last and keeps its future.', 'a10-ecoute'),
        lC('Écoute. Qu’est-ce qui arrive en premier ?', 'Dès que la réunion finira, nous irons déjeuner.', ['le déjeuner', 'la réunion'], 1, 'Le déjeuner suit la réunion. EN: lunch follows the meeting.', 'a10-ecoute'),
        mc('Sans charnière, avec quoi ranges-tu deux moments ?', ['avec si', 'avec quand seulement', 'avec d’abord, ensuite, puis'], 2, 'Deux futurs et deux petits mots suffisent. EN: two futures and two small words.', 'a10-focus'),
      ],
    },
    {
      id: 'r11-plan', label: 'Tout le plan', targets: ['plan-plat'],
      questions: [
        mc('Dans le plan modèle, combien de moitiés en si portent un futur ?', ['aucune', 'une', 'deux'], 0, 'Après si, jamais le futur, même dans un texte entièrement tourné vers l’avenir. EN: never, even in a text all about the future.', 'a11-lecture'),
        tI('Complète les deux verbes.', 'Quand j’(avoir) le résultat, je te le (dire).', 'Quand j’aurai le résultat, je te le dirai.', 'Le futur des deux côtés de quand. EN: both sides of quand.', 'a11-plan'),
        mc('Quelle phrase est correcte ?', ['Si je changerai d’avis, je te préviendrai.', 'Si je change d’avis, je te préviendrai.'], 1, 'Présent après si, futur après la virgule. EN: present after si.', 'a11-cheat'),
        eS('Dès que le projet démarre, tout ira plus vite.', 'Dès que le projet démarrera, tout ira plus vite.', 'Le démarrage est devant nous, comme la suite. EN: the start is ahead, like the rest.', 'a11-lecture'),
        mc('Dans un plan écrit, par quoi finis-tu ?', ['par la première étape', 'par une condition', 'par une ligne qui ferme le plan'], 2, 'Une dernière ligne dit ce que tu feras au bout. EN: a last line says what you will do at the end.', 'a11-plan'),
        tI('Complète les deux verbes.', 'Si tout se (passer) bien, je (finir) avant vendredi.', 'Si tout se passe bien, je finirai avant vendredi.', 'passe au présent, finirai au futur. EN: present then future.', 'a11-usages'),
        lC('Écoute. Cette phrase est...', 'Tant que je serai là-bas, j’écrirai chaque semaine à ma famille.', ['une habitude d’aujourd’hui', 'un projet', 'un souvenir'], 1, 'Deux futurs : les deux durées sont devant toi. EN: two futures, both stretches ahead.', 'a11-scenario'),
        mc('La règle la plus courte de la leçon ?', ['Après si, jamais le futur.', 'Après quand, jamais le futur.', 'Après si, toujours le futur.'], 0, 'Et son autre moitié : après quand, le futur des deux côtés. EN: and its other half: after quand, both sides.', 'a11-roundup'),
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
    { front: 'quand, pour un projet', back: 'le futur des deux côtés', say: 'Quand tu arriveras, je serai déjà là.' },
    { front: 'quand, pour une habitude', back: 'le présent des deux côtés', say: 'Quand j’arrive au bureau, je prends un café.' },
    { front: 'dès que, aussitôt que', back: 'l’instant exact', say: 'Dès que tu seras prêt, on partira.' },
    { front: 'tant que', back: 'aussi longtemps que ça dure', say: 'Tant que j’habiterai ici, je prendrai le bus.' },
    { front: 'une fois que', back: 'une étape franchie', say: 'Une fois que tu connaîtras le code, tu pourras entrer.' },
    { front: 'si, condition réelle', back: 'le présent, jamais le futur', say: 'Si tu viens demain, je préparerai un gâteau.' },
    { front: 'si + présent, impératif', back: 'une consigne', say: 'Si l’alarme sonne, sortez par la porte de gauche.' },
    { front: 'quand ou si', back: 'sûr, ou seulement possible', say: 'S’il fait assez chaud, nous ouvrirons la terrasse.' },
    { front: 'dans ou en', back: 'de maintenant, ou la durée', say: 'Je serai de retour dans deux heures.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Le plan, en résumé',
  body: `${REFRAME} Tu poses un moment avec une charnière, tu ouvres une possibilité avec si, et tu sais lequel des deux ton agenda demande. La prochaine leçon garde ces deux moitiés et change le ton : le conditionnel, pour demander poliment et pour dire ce que tu ferais. EN: Next lesson keeps these two halves and changes the tone: the conditional.`,
  points: [
    'Après quand, dès que, tant que : le futur des deux côtés.',
    'Après si, jamais le futur. Le présent, toujours.',
    'quand, c’est sûr. si, c’est seulement possible.',
    'dans compte de maintenant ; en, c’est le temps qu’il faut.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['charniere', 'condition', 'delai'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Écrire ton plan',
    opener: {
      line: 'À toi : ta période, tes étapes dans l’ordre, ce qui n’est pas encore sûr, et une ligne pour fermer. EN: Your turn: your period, your steps in order, what is not yet certain, and one line to close.',
      imageRef: 'lessons/futur-usage/act11.jpg',
    },
    sections: [],
    milestone: 'Tu as écrit ton propre plan et passé l’examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own plan and sat the exam: eighty-eight questions, eleven rounds.',
    estScreens: 118,
    restPoints: ['a11-scenario', 'a11-parler', 'a11-cheat', 'a11-progress', 'a11-quiz', 'a11-review'],
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
  { id: 'd-deux-futurs', title: 'Projet ou habitude', format: 'sort' as const, coach: 'Deux piles. Demande-toi : un moment précis, ou chaque fois ? EN: sort by one moment against every time.', buckets: ['un projet', 'une habitude'], items: [E(400), E(407), E(410), E(401), E(431), E(452)], audio: AUDIO },
  { id: 'd-double', title: 'Le futur des deux côtés', format: 'mcq' as const, coach: 'Si la deuxième moitié est au futur, la charnière l’est aussi. EN: if the second half is future, so is the hinge.', q: 'Quand nous ... prêts, nous partirons.', opts: ['serons', 'sommes'], correct: 0, why: 'Le départ est à venir, donc la charnière aussi. EN: the leaving is ahead.', items: [E(415), E(418), E(421), E(423), E(425), E(428)], audio: AUDIO },
  { id: 'd-charnieres', title: 'L’instant ou la durée', format: 'sort' as const, coach: 'Une pile pour « à la seconde où », une pile pour « pendant tout ce temps ». EN: sort by instant against stretch.', buckets: ['l’instant', 'la durée'], items: [E(432), E(434), E(438), E(440), E(445), E(446)], audio: AUDIO },
  { id: 'd-moment', title: 'Chaque fois ou une fois', format: 'sort' as const, coach: 'Le mot quand ne décide de rien. Regarde le moment. EN: the word quand decides nothing; look at the moment.', buckets: ['chaque fois', 'à venir'], items: [E(452), E(454), E(455), E(463), E(464), E(465)], audio: AUDIO },
  { id: 'd-si', title: 'Après si, le présent', format: 'mcq' as const, coach: 'Le futur attend de l’autre côté de la virgule. EN: the future waits past the comma.', q: 'Si tu ... demain, je préparerai un gâteau.', opts: ['viendras', 'viens'], correct: 1, why: 'Après si, jamais le futur. EN: never the future after si.', items: [E(468), E(469), E(475), E(478), E(483), 'fr.b1.cuisine.073'], audio: AUDIO },
  { id: 'd-suites', title: 'Vérité ou consigne', format: 'sort' as const, coach: 'Une pile pour ce qui est vrai chaque fois, une pile pour ce qu’on te dit de faire. EN: sort truths from instructions.', buckets: ['une vérité', 'une consigne'], items: [E(486), E(496), E(495), E(489), E(493), E(501)], audio: AUDIO },
  { id: 'd-quand-si', title: 'Sûr ou possible', format: 'sort' as const, coach: 'Est-ce que ça arrivera de toute façon ? Trie sur cette question. EN: will it happen anyway? Sort on that.', buckets: ['sûr', 'possible'], items: [E(502), E(508), E(513), E(503), E(509), E(514)], audio: AUDIO },
  { id: 'd-oral', title: 'Chacun à sa place', format: 'flashcard' as const, coach: 'Lis chaque phrase à voix haute et écoute où tombe aller. EN: read each aloud and hear where aller falls.', items: [E(518), E(519), E(520), E(522), E(525), E(526)], audio: AUDIO },
  { id: 'd-delai', title: 'Dans ou en', format: 'mcq' as const, coach: 'dans compte à partir de maintenant ; en donne la durée. EN: dans counts from now, en gives the length.', q: 'Elle a préparé le dossier ... trois jours.', opts: ['en', 'dans'], correct: 0, why: 'C’est le temps que le travail a pris. EN: the time the work took.', items: [E(532), E(535), E(536), E(537), E(543), E(544)], audio: AUDIO },
  { id: 'd-ordre', title: 'Dans l’ordre', format: 'flashcard' as const, coach: 'Pour chaque phrase, dis à voix haute ce qui arrive en premier. EN: for each sentence say aloud what comes first.', items: [E(548), E(549), E(551), E(553), E(557), E(561)], audio: AUDIO },
  { id: 'd-plan', title: 'Un plan complet', format: 'mcq' as const, coach: 'Une période, des étapes, une condition, une fin. Vérifie les quatre. EN: period, steps, condition, ending: check all four.', q: 'Ton plan s’arrête sur « je m’inscrirai à un cours du soir ». Que manque-t-il ?', opts: ['rien', 'une ligne qui ferme le plan'], correct: 1, why: 'Une dernière ligne dit ce que tu feras au bout. EN: a last line closes it.', items: [E(562), E(564), E(565), E(569), E(575), E(577)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'present-apres-quand', description: 'Leaves the quand clause in the present when the sentence is about a future moment, so a plan reads as a habit.', detectOn: ['a1-scene', 'a1-reperer', 'a2-piege', 'a11-mission'], drill: 'd-deux-futurs', retest: 'd-deux-futurs' },
  { id: 'un-seul-futur', description: 'Writes one future instead of two, usually keeping it in the main clause and dropping it from the hinge clause.', detectOn: ['a2-construire', 'a2-ecoute', 'a2-check', 'a11-mission'], drill: 'd-double', retest: 'd-double' },
  { id: 'charniere-floue', description: 'Picks a hinge word by habit rather than by meaning, so dès que, tant que and pendant que become interchangeable.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check'], drill: 'd-charnieres', retest: 'd-charnieres' },
  { id: 'futur-reflexe', description: 'Puts a future after quand even for a habit, a general truth or a memory, because the word now triggers the tense.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-moment', retest: 'd-moment' },
  { id: 'futur-apres-si', description: 'Puts a future or a conditional straight after si in a real condition.', detectOn: ['a5-construire', 'a5-erreurs', 'a6-piege', 'a11-mission'], drill: 'd-si', retest: 'd-si' },
  { id: 'suite-unique', description: 'Treats si + présent as always leading to a future, so general truths and instructions come out as promises.', detectOn: ['a6-construire', 'a6-table', 'a6-check'], drill: 'd-suites' },
  { id: 'quand-ou-si', description: 'Chooses between quand and si by feel rather than by whether the event will happen anyway.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-quand-si', retest: 'd-quand-si' },
  { id: 'proche-dans-charniere', description: 'Carries aller plus the infinitive into the hinge clause, producing quand je vais arriver.', detectOn: ['a8-construire', 'a8-ecoute', 'a8-check'], drill: 'd-oral' },
  { id: 'dans-ou-en', description: 'Swaps dans and en, so a starting point becomes a duration or the other way round.', detectOn: ['a9-construire', 'a9-piege', 'a9-check'], drill: 'd-delai', retest: 'd-delai' },
  { id: 'ordre-flou', description: 'Puts the second of two future moments in the hinge clause, so the plan reads back to front.', detectOn: ['a10-construire', 'a10-erreurs', 'a10-check', 'a11-mission'], drill: 'd-ordre' },
  { id: 'plan-plat', description: 'Produces a plan with no hinge word, no real condition or no ending, whatever the tenses are.', detectOn: ['a11-mission', 'a11-scenario', 'a11-plan'], drill: 'd-plan', retest: 'd-plan' },
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
  sheet('sheet-charnieres', 'Les charnières', ['les sept mots', 'ce que chacun ajoute', 'les deux ordres'], [
    teach('sheet-charnieres-teach', 'Sept mots, une seule règle', `${REFRAME} Les sept charnières se comportent toutes de la même façon : si le moment est à venir, le verbe qui les suit va au futur, et l’autre moitié aussi. Ce qui change d’un mot à l’autre, ce n’est pas le temps, c’est ce que le mot dit du moment. L’ordre des deux moitiés est libre. EN: all seven hinge words behave alike; what changes is what each one says about the moment, not the tense.`),
    table('sheet-charnieres-table', 'Les sept charnières', ['Mot', 'Ce qu’il ajoute', 'Exemple'], [
      ['quand', 'le moment, sans plus', 'Quand tu arriveras, je serai déjà là.'],
      ['lorsque', 'le même sens, à l’écrit', 'Lorsque nous serons à Genève, nous visiterons le lac.'],
      ['dès que', 'l’instant exact', 'Dès que tu seras prêt, on partira.'],
      ['aussitôt que', 'l’instant exact, plus écrit', 'Aussitôt que la réunion finira, je t’appellerai.'],
      ['tant que', 'aussi longtemps que ça dure', 'Tant que j’habiterai ici, je prendrai le bus.'],
      ['pendant que', 'en même temps', 'Pendant qu’il conduira, je lirai la carte.'],
      ['une fois que', 'une étape franchie', 'Une fois que tu connaîtras le code, tu pourras entrer.'],
    ]),
    table('sheet-charnieres-moments', 'La même charnière, trois moments', ['Le moment', 'Les deux temps', 'Exemple'], [
      ['à venir', 'futur et futur', 'Quand je serai à la retraite, je voyagerai.'],
      ['chaque fois', 'présent et présent', 'Quand je rentre du travail, je prends une douche.'],
      ['une vérité', 'présent et présent', 'Lorsque le soleil se couche, la place se vide.'],
      ['une habitude finie', 'imparfait et imparfait', 'Quand j’étais étudiant, je travaillais le samedi.'],
      ['un fait unique, passé', 'passé composé', 'Quand le film a commencé, la salle est devenue silencieuse.'],
    ]),
  ]),
  sheet('sheet-si', 'Après si', ['la règle absolue', 'les trois suites', 'ce qui vient plus tard'], [
    teach('sheet-si-teach', 'Le présent, toujours', "Dans une condition réelle, le verbe qui suit si reste au présent, quelle que soit la distance du moment. Le futur, lui, vit dans l’autre moitié. L’ordre des deux moitiés est libre : « Je passerai te voir si j’ai le temps » est la même phrase. EN: in a real condition the verb after si stays present however far ahead the moment is; the future lives in the other half."),
    table('sheet-si-table', 'Les trois suites réelles', ['Après si', 'La suite', 'Ce que ça dit'], [
      ['présent', 'futur', 'une promesse : Si tu viens demain, je préparerai un gâteau.'],
      ['présent', 'futur', 'une conséquence : Si tu ajoutes trop de sel, le plat sera trop salé.'],
      ['présent', 'présent', 'une vérité : Si on chauffe l’eau à cent degrés, elle bout.'],
      ['présent', 'présent', 'une information : Si on paie en ligne, la livraison est gratuite.'],
      ['présent', 'impératif', 'une consigne : Si tu as froid, ferme la fenêtre.'],
      ['présent', 'impératif', 'une sécurité : Si l’alarme sonne, sortez par la porte de gauche.'],
    ]),
    teach('sheet-si-plus-tard', 'Ce que cette leçon ne traite pas', `Il existe une autre forme, « si tu m’aidais, nous finirions plus vite », qui ne dit pas « c’est possible » mais « ce n’est pas le cas ». Elle appartient à ${SI_UNREAL_REF} et le conditionnel lui-même à ${COND_REF}. Si tu la rencontres avant, reconnais-la et laisse-la de côté. EN: a second shape exists which means it is not the case; it belongs to a later lesson.`),
  ]),
  sheet('sheet-quand-si', 'Quand ou si', ['une question', 'six paires'], [
    teach('sheet-quand-si-teach', 'Une seule question', "Pose-toi : est-ce que ça arrivera de toute façon ? Oui, alors quand, et le futur des deux côtés. Non, alors si, et le présent juste après. Avec quand, le doute porte sur la date seulement ; avec si, il porte sur la chose elle-même. EN: ask whether it will happen anyway: yes gives quand plus the future, no gives si plus the present."),
    table('sheet-quand-si-table', 'Six paires', ['Sûr : quand', 'Possible : si'], [
      ['Quand je partirai à la retraite, je déménagerai.', 'Si je pars à la retraite plus tôt, je déménagerai.'],
      ['Quand il rentrera, nous mangerons.', 'S’il rentre à temps, nous mangerons ensemble.'],
      ['Quand tu auras ton diplôme, tu chercheras du travail.', 'Si tu as ton diplôme, tu chercheras du travail.'],
      ['Quand l’été arrivera, nous ouvrirons la terrasse.', 'S’il fait assez chaud, nous ouvrirons la terrasse.'],
      ['Quand le bébé naîtra, nous changerons d’appartement.', 'Si le bébé arrive plus tôt, nous changerons nos plans.'],
      ['Quand je te verrai, je t’expliquerai.', 'Si je te vois ce soir, je t’expliquerai.'],
    ]),
  ]),
  sheet('sheet-temps', 'Dire quand', ['dans, en, d’ici', 'les repères'], [
    teach('sheet-temps-teach', 'D’où on compte', `dans deux heures se compte à partir de l’instant où tu parles. en deux heures est le temps que la chose prend, du début à la fin, et ne dit pas quand elle commence. d’ici vendredi donne une limite : avant vendredi, sans promettre le jour. ${Cap(TIME_PREP_REF)} a posé les prépositions ; ici elles servent à situer un projet. EN: dans counts from now, en is how long it takes, d'ici is a deadline.`),
    table('sheet-temps-table', 'Les expressions', ['Expression', 'D’où on compte', 'Exemple'], [
      ['dans + durée', 'de maintenant', 'Le train partira dans dix minutes.'],
      ['en + durée', 'du début du travail', 'Je finirai ce rapport en deux heures.'],
      ['d’ici + date', 'jusqu’à une limite', 'D’ici vendredi, tout sera prêt.'],
      ['d’ici là', 'jusqu’à ce moment', 'D’ici là, ne dis rien à personne.'],
      ['tout à l’heure', 'aujourd’hui, plus tard', 'Il va pleuvoir tout à l’heure.'],
      ['la semaine prochaine', 'le calendrier', 'On se verra la semaine prochaine.'],
    ]),
  ]),
  sheet('sheet-plan', 'Écrire un plan', ['la méthode', 'les connecteurs', 'la liste de contrôle'], [
    teach('sheet-plan-teach', 'Quatre morceaux', "Un plan tient avec quatre morceaux : une phrase qui annonce la période, des étapes dans l’ordre, au moins une chose qui n’est pas sûre, et une ligne qui ferme. Range tes moments avant de choisir tes mots, mets le premier des deux dans la charnière, et relis-toi en soulignant chaque charnière. EN: a plan needs a period, ordered steps, one uncertainty and a closing line."),
    table('sheet-plan-connecteurs', 'Les connecteurs', ['Mot', 'Où', 'Exemple'], [
      ['d’abord', 'la première étape', 'D’abord je finirai le rapport.'],
      ['ensuite', 'l’étape suivante', 'Ensuite, nous prendrons le train de dix-huit heures.'],
      ['puis', 'l’étape suivante', 'Je passerai à la banque, puis j’irai au marché.'],
      ['après', 'plus tard', 'Après, on se retrouvera devant la gare.'],
      ['avant de', 'juste avant', 'Avant de partir, je vérifierai les billets.'],
      ['enfin', 'la dernière étape', 'Enfin, nous rentrerons par le dernier bus.'],
    ]),
    table('sheet-plan-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Trois charnières différentes', 'Souligne-les : quand, dès que, tant que, une fois que'],
      ['Le futur des deux côtés', 'Compte deux futurs par charnière'],
      ['Une vraie condition', 'Cherche si, et vérifie que le verbe suivant est au présent'],
      ['Un délai', 'dans, en ou d’ici, une fois au moins'],
      ['L’ordre', 'Le premier des deux moments est dans la charnière'],
      ['Une fin', 'Une phrase qui dit ce que tu feras au bout'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-07-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-07-courriel': 'The two moving-house messages (act 1), one voice, Québec accent welcome, read at dictation pace. Every future ending must be audible: the whole act turns on hearing the extra r in aurai, appellerai, arrivera.',
  'rec-b1-07-nouveau-poste': 'The corridor conversation (act 2), two voices, Belgian French welcome. Twelve futures in six lines: read them plainly, without stressing the endings, or the learner hears a grammar lesson instead of a conversation.',
  'rec-b1-07-deux-cotes': 'The rule deck of act 2. Read each pair of clauses as one breath, so the two futures sound like one sentence and not like two examples.',
  'rec-b1-07-projets-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The learner separates plans from habits by ear alone, so any difference of performance between lines would give the answer away.',
  'rec-b1-07-piege-quand': "The audio step plays each card's CORRECT sentence. Read the six identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-07-charnieres-ecoute': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, authored order. The hinge word opens each line and must be clean and unhurried, because it is the only thing the questions turn on.',
  'rec-b1-07-charnieres': 'The hinge deck of act 3. Four cards, four hinge words. Give each hinge word its own small beat before the rest of the clause, so dès que and une fois que do not blur into quand.',
  'rec-b1-07-boulangerie': 'The bakery passage (act 4), one voice, France accent, natural reading pace. Even and unhurried through the present-tense paragraph; from « La semaine prochaine » the pace lifts slightly, because that is where the text turns to the future.',
  'rec-b1-07-routine-ecoute': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, authored order, conversational speed. Three tenses are mixed on purpose and no line may be read more carefully than another.',
  'rec-b1-07-piege-moment': "The audio step plays each card's CORRECT sentence, three of which are in the present and one in the imparfait. Read all six as ordinary French, never as oddities.",
  'rec-b1-07-invitation': 'The invitation exchange (act 5), two female voices, West African French welcome. After each si, the present must be clean and short: the learner is listening for the absence of the future r.',
  'rec-b1-07-si-regle': 'The si deck of act 5. Read the si clause level and unfinished, and let the second clause fall. The comma is where the future starts, and it should be audible.',
  'rec-b1-07-consignes-ecoute': 'REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, authored order. Promises, truths and instructions in one take; do not act the imperatives, or the answer is given away.',
  'rec-b1-07-trois-suites': 'The three-continuations deck of act 6. The first half is identical in tone on all four cards; only the second half changes character.',
  'rec-b1-07-piege-si': "The audio step plays each card's CORRECT sentence. Six sentences, plain reading, same pace throughout: the trap is that the wrong versions sound perfectly natural to an English ear.",
  'rec-b1-07-deux-plans': 'The Namur conversation (act 7), two voices. The quand lines and the si lines must be read with the same confidence: the difference is grammatical, not emotional, and a hesitant si would teach the wrong thing.',
  'rec-b1-07-sur-ou-pas': 'REQUIRED FOR THE EAR MISSION (act 7): eight lines, ONE TAKE, ONE VOICE, authored order. The pairs alternate quand and si with identical second halves, so the takes must be interchangeable in every respect except the words.',
  'rec-b1-07-cafe-oral': 'The café conversation (act 8), two voices, relaxed and fast, Lyon. This is the spoken register: contractions and elisions are welcome, and the futur proche should sound like ordinary speech rather than a form.',
  'rec-b1-07-oral-ecoute': 'REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, authored order, conversational speed. Every line carries aller plus an infinitive; the hinge clauses keep the futur simple and must not be softened.',
  'rec-b1-07-chantier': 'The site update (act 9), one voice, a manager addressing a team, France accent. dans, en and d’ici carry the meaning, so each one must be clearly audible and never swallowed into the following word.',
  'rec-b1-07-delais': 'The delay deck of act 9. On the fourth card the two halves must sound identical except for the one word, because that is the whole point of the card.',
  'rec-b1-07-piege-delai': "The audio step plays each card's CORRECT sentence. Read the six at one pace: dans and en are short, unstressed words, and the learner has to catch them anyway.",
  'rec-b1-07-voyage': 'The Saturday plan (act 10), one voice, read as somebody talking through a list. A small beat before each connector (d’abord, ensuite, puis, enfin) so the order is audible without being performed.',
  'rec-b1-07-ordre-ecoute': 'REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, authored order. The questions are about which of two moments comes first, so no line may put extra weight on the hinge clause.',
  'rec-b1-07-modele': 'The model plan (act 11), one voice, calm, read as a message being spoken aloud. It is the shape the learner will imitate, so the four parts must be audible: the period, the ordered steps, the conditions, the closing line.',
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 07',
  intro: 'You can build the futur simple and you know the irregular stems. This lesson is about where the future goes. A sentence with quand or dès que has two halves that meet at one moment, and French writes the future on both of them, where English keeps the present. A sentence with si is different: the condition stays in the present and never takes the future, whatever follows it.',
  skill: 'PE',
  grammarAssumed: [FUT_FORM_UNIT, FUT_IRREG_UNIT, PROCHE_UNIT, TIME_PREP_UNIT, MODAUX_UNIT, PC_AVOIR_UNIT],
  grammarIntroduced: [
    'The futur simple required in the subordinate clause after quand, lorsque, dès que, aussitôt que, tant que, pendant que and une fois que when the main clause is future, against English, which keeps the present there',
    'The same seven conjunctions with a present main clause (habit or general truth) and with a past main clause (imparfait habit, passé composé single event), where no future appears at all',
    'The semantic contribution of each conjunction: the bare moment (quand, lorsque), the exact instant (dès que, aussitôt que), the shared stretch (tant que, pendant que) and the completed step (une fois que)',
    'Either clause order, with the conjunction clause first or second, without change of tense',
    'The real condition si + présent followed by a futur simple, and the absolute prohibition on a future or a conditional directly after si',
    'Si + présent followed by a present for a general truth, and si + présent followed by an imperative for an instruction',
    'The choice between quand and si as certainty against possibility, tested by whether the event will happen anyway',
    'The futur proche in the main clause of these patterns in speech, and its exclusion from the conjunction clause',
    'Future time expressions: dans plus a duration counted from now, en plus a duration as the time taken, and d’ici plus a point as a deadline',
    'Sequencing two future events, with the earlier one placed in the conjunction clause or the order carried by d’abord, ensuite, puis and enfin',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: 'Tu sais former le futur et tu connais les radicaux irréguliers. Cette leçon t’apprend où le poser. Une phrase avec quand ou dès que a deux moitiés qui se rejoignent à un même moment, et le français écrit le futur sur les deux, là où l’anglais garde le présent. Avec si, c’est l’inverse : la condition reste au présent et ne prend jamais le futur.',
    minutes: 130,
    difficulty: 3,
    glyph: 'rai',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: FUTUR_USAGE_TERMS,
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
